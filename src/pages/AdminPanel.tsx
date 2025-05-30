
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Check, X, Shield, Copy, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSupabaseTestimonials } from '@/hooks/use-supabase-testimonials';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const {
    pendingReviews,
    approvedReviews,
    loading,
    approveReview,
    deleteReview,
    refreshReviews
  } = useSupabaseTestimonials();

  useEffect(() => {
    promptForPassword();
  }, []);

  const promptForPassword = () => {
    const savedPassword = prompt("Veuillez entrer le mot de passe administrateur:");
    if (savedPassword === "fidoivi") {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
      navigate('/');
    }
  };

  const handleApproveReview = async (reviewId: number) => {
    await approveReview(reviewId);
  };

  const handleDeleteReview = async (reviewId: number) => {
    await deleteReview(reviewId);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date invalide';
    }
  };

  const copyAdminUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: "URL copiée",
      description: "L'URL du panneau d'administration a été copiée dans le presse-papier.",
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FFD700] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Chargement des avis...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <div className="container px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
          
          <h1 className="text-3xl font-bold text-[#000000] flex items-center">
            <Shield className="mr-2 h-6 w-6 text-vibrant-orange" />
            Panneau d'administration
          </h1>
          
          <Button
            onClick={refreshReviews}
            variant="outline"
            className="ml-auto"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualiser les avis
          </Button>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-5 text-blue-700 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg mb-2">Système d'avis avec Supabase</h3>
              <p className="mb-2">Votre système d'avis est maintenant connecté à une vraie base de données :</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Base de données en ligne accessible partout</li>
                <li>Synchronisation automatique en temps réel</li>
                <li>Sauvegardes automatiques et sécurisées</li>
                <li>Historique complet de tous les avis</li>
              </ul>
            </div>
            <Button 
              onClick={copyAdminUrl}
              variant="outline" 
              className="text-blue-600 border-blue-300 hover:bg-blue-100"
            >
              <Copy size={16} className="mr-2" />
              Copier l'URL
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-vibrant-orange mb-4 flex items-center">
              Avis en attente de validation
              <span className="ml-2 bg-vibrant-orange text-white text-sm py-1 px-2 rounded-full">
                {pendingReviews.length}
              </span>
            </h2>
            
            {pendingReviews.length > 0 ? (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="border-l-4 border-vibrant-orange p-4 bg-orange-50 rounded-r-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-xs text-gray-500">{formatDate(review.created_at || '')}</div>
                    </div>
                    
                    {review.relation && (
                      <div className="text-sm text-gray-600 mb-2">{review.relation}</div>
                    )}
                    
                    <div className="flex mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-[#FFD700] fill-[#FFD700]" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm">"{review.content}"</p>
                    
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                        onClick={() => handleDeleteReview(review.id)}
                      >
                        <X size={14} className="mr-1" /> Refuser
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600"
                        onClick={() => handleApproveReview(review.id)}
                      >
                        <Check size={14} className="mr-1" /> Approuver
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                Aucun avis en attente
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center">
              Avis approuvés
              <span className="ml-2 bg-green-600 text-white text-sm py-1 px-2 rounded-full">
                {approvedReviews.length}
              </span>
            </h2>
            
            {approvedReviews.length > 0 ? (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {approvedReviews.map((review) => (
                  <div key={review.id} className="border-l-4 border-green-500 p-4 bg-green-50 rounded-r-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-xs text-gray-500">{formatDate(review.created_at || '')}</div>
                    </div>
                    
                    {review.relation && (
                      <div className="text-sm text-gray-600 mb-2">{review.relation}</div>
                    )}
                    
                    <div className="flex mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-[#FFD700] fill-[#FFD700]" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm">"{review.content}"</p>
                    
                    <div className="flex justify-end">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                        onClick={() => handleDeleteReview(review.id)}
                      >
                        <X size={14} className="mr-1" /> Supprimer
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                Aucun avis approuvé
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 bg-green-50 rounded-lg p-4 text-sm text-green-700">
          <p className="font-medium mb-2">✅ Système d'avis professionnel activé :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Base de données Supabase sécurisée et centralisée</li>
            <li>Synchronisation automatique entre tous vos appareils</li>
            <li>Mises à jour en temps réel sans rechargement</li>
            <li>Historique complet avec dates de soumission</li>
            <li>Sauvegarde automatique dans le cloud</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
