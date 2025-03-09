
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Check, X, Shield } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  relation: string;
  content: string;
  rating: number;
  date: string;
  status: string;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const [pendingReviews, setPendingReviews] = useState<Review[]>([]);
  const [approvedReviews, setApprovedReviews] = useState<Review[]>([]);
  
  // Load reviews from localStorage
  useEffect(() => {
    try {
      const storedPending = JSON.parse(localStorage.getItem('pendingReviews') || '[]');
      const storedApproved = JSON.parse(localStorage.getItem('approvedReviews') || '[]');
      
      setPendingReviews(storedPending);
      setApprovedReviews(storedApproved);
    } catch (error) {
      console.error('Error loading reviews from localStorage:', error);
    }
  }, []);
  
  const approveReview = (reviewId: number) => {
    const reviewToApprove = pendingReviews.find(review => review.id === reviewId);
    if (!reviewToApprove) return;
    
    const updatedPending = pendingReviews.filter(review => review.id !== reviewId);
    const updatedApproved = [...approvedReviews, { ...reviewToApprove, status: 'approved' }];
    
    setPendingReviews(updatedPending);
    setApprovedReviews(updatedApproved);
    
    localStorage.setItem('pendingReviews', JSON.stringify(updatedPending));
    localStorage.setItem('approvedReviews', JSON.stringify(updatedApproved));
  };
  
  const deleteReview = (reviewId: number, isPending: boolean) => {
    if (isPending) {
      const updatedPending = pendingReviews.filter(review => review.id !== reviewId);
      setPendingReviews(updatedPending);
      localStorage.setItem('pendingReviews', JSON.stringify(updatedPending));
    } else {
      const updatedApproved = approvedReviews.filter(review => review.id !== reviewId);
      setApprovedReviews(updatedApproved);
      localStorage.setItem('approvedReviews', JSON.stringify(updatedApproved));
    }
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
      return 'Date invalide';
    }
  };

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
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Reviews */}
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
                      <div className="text-xs text-gray-500">{formatDate(review.date)}</div>
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
                        onClick={() => deleteReview(review.id, true)}
                      >
                        <X size={14} className="mr-1" /> Refuser
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600"
                        onClick={() => approveReview(review.id)}
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
          
          {/* Approved Reviews */}
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
                      <div className="text-xs text-gray-500">{formatDate(review.date)}</div>
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
                        onClick={() => deleteReview(review.id, false)}
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
        
        <div className="mt-8 bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
          <p className="font-medium mb-2">Notes :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Les avis approuvés sont affichés publiquement sur le site.</li>
            <li>Les avis refusés sont définitivement supprimés.</li>
            <li>Vous recevez une notification par email à chaque nouvel avis.</li>
            <li>Pour accéder rapidement à ce panneau, utilisez Ctrl+Shift+A depuis la page des témoignages.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
