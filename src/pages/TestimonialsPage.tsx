import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, MessageSquare, Check, X, Shield, RefreshCw } from 'lucide-react';
import ReviewForm from '@/components/ReviewForm';
import { useToast } from '@/hooks/use-toast';

interface Testimonial {
  id: number;
  name: string;
  relation: string;
  content: string;
  rating: number;
  status?: string;
}

const TestimonialsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAdminSection, setShowAdminSection] = useState(false);
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [pendingReviews, setPendingReviews] = useState<Testimonial[]>([]);
  const [approvedReviews, setApprovedReviews] = useState<Testimonial[]>([]);
  const [adminPassword, setAdminPassword] = useState("");
  const [isPasswordPromptOpen, setIsPasswordPromptOpen] = useState(false);
  
  const staticTestimonials = [
    {
      id: 1,
      name: "Sophie",
      relation: "maman de Thomas (1ère secondaire)",
      content: "Mon fils était bloqué en maths, il détestait la matière. En seulement 2 mois, il a pris confiance et sa moyenne est passée de 8/20 à 13/20 ! Merci infiniment !",
      rating: 5
    },
    {
      id: 2,
      name: "Lucas",
      relation: "élève en 5e secondaire",
      content: "J'ai toujours eu du mal avec les équations et la géométrie. Grâce à cette méthode, j'ai enfin compris et je me sens plus à l'aise en classe !",
      rating: 5
    },
    {
      id: 3,
      name: "Marie",
      relation: "parent d'élève",
      content: "Les résultats sont exceptionnels. Ma fille a gagné en autonomie et en confiance. L'approche est vraiment différente et efficace !",
      rating: 5
    },
    {
      id: 4,
      name: "Pierre",
      relation: "élève en 6e secondaire",
      content: "Après quelques séances, j'ai vraiment commencé à voir les mathématiques différemment. Les concepts complexes sont devenus plus clairs et logiques.",
      rating: 5
    },
    {
      id: 5,
      name: "Amélie",
      relation: "maman de Julie (3e)",
      content: "Une approche pédagogique exceptionnelle qui a permis à ma fille de reprendre confiance en elle et d'améliorer significativement ses résultats.",
      rating: 5
    }
  ];

  useEffect(() => {
    loadReviews();
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'pendingReviews' || e.key === 'approvedReviews') {
      loadReviews();
    }
  };
  
  const loadReviews = () => {
    try {
      console.log('TestimonialsPage: Loading reviews from localStorage');
      
      const pendingData = localStorage.getItem('pendingReviews');
      console.log('Raw pending reviews data:', pendingData);
      let storedPending: Testimonial[] = [];
      
      if (pendingData) {
        try {
          storedPending = JSON.parse(pendingData);
          console.log('Parsed pending reviews:', storedPending);
        } catch (e) {
          console.error('Error parsing pending reviews:', e);
          storedPending = [];
        }
      }
      
      const approvedData = localStorage.getItem('approvedReviews');
      console.log('Raw approved reviews data:', approvedData);
      let storedApproved: Testimonial[] = [];
      
      if (approvedData) {
        try {
          storedApproved = JSON.parse(approvedData);
          console.log('Parsed approved reviews:', storedApproved);
        } catch (e) {
          console.error('Error parsing approved reviews:', e);
          storedApproved = [];
        }
      }
      
      setPendingReviews(storedPending);
      setApprovedReviews(storedApproved);
    } catch (error) {
      console.error('Error loading reviews from localStorage:', error);
    }
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        promptForPassword();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const promptForPassword = () => {
    setIsPasswordPromptOpen(true);
  };
  
  const checkPassword = () => {
    if (adminPassword === "fidoivi") {
      setShowAdminSection(true);
      setIsPasswordPromptOpen(false);
      setAdminPassword("");
      loadReviews();
    } else {
      alert("Mot de passe incorrect");
    }
  };
  
  const approveReview = (reviewId: number) => {
    console.log('Approving review with ID:', reviewId);
    const reviewToApprove = pendingReviews.find(review => review.id === reviewId);
    if (!reviewToApprove) return;
    
    const updatedPending = pendingReviews.filter(review => review.id !== reviewId);
    const updatedApproved = [...approvedReviews, { ...reviewToApprove, status: 'approved' }];
    
    setPendingReviews(updatedPending);
    setApprovedReviews(updatedApproved);
    
    localStorage.setItem('pendingReviews', JSON.stringify(updatedPending));
    localStorage.setItem('approvedReviews', JSON.stringify(updatedApproved));
    
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'pendingReviews',
      newValue: JSON.stringify(updatedPending)
    }));
    
    toast({
      title: "Avis approuvé",
      description: "L'avis a été approuvé avec succès.",
    });
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
    
    toast({
      title: "Avis supprimé",
      description: "L'avis a été supprimé avec succès.",
    });
  };

  const goToAdminPanel = () => {
    navigate('/admin-panel');
  };
  
  const handleReviewSubmitted = () => {
    setShowAddReviewForm(false);
    setTimeout(loadReviews, 500);
  };
  
  const refreshReviews = () => {
    loadReviews();
    toast({
      title: "Actualisation",
      description: "La liste des avis a été actualisée.",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <div className="container px-6 lg:px-8">
        <Button 
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#000000]">
            Tous les témoignages
          </h1>
          
          <Button 
            onClick={() => setShowAddReviewForm(!showAddReviewForm)}
            variant="default"
            className="bg-[#FFD700] hover:bg-[#E5C100] text-black"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            {showAddReviewForm ? 'Masquer le formulaire' : 'Ajouter votre avis'}
          </Button>
        </div>
        
        {showAddReviewForm && (
          <div className="mb-12 max-w-xl mx-auto">
            <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
          </div>
        )}
        
        {isPasswordPromptOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Accès administrateur</h3>
              <p className="mb-4">Veuillez entrer le mot de passe pour accéder à la section d'administration.</p>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 mb-4"
                placeholder="Mot de passe"
                onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
              />
              <div className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setIsPasswordPromptOpen(false)}
                >
                  Annuler
                </Button>
                <Button onClick={checkPassword}>
                  Confirmer
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {showAdminSection && (
          <div className="mb-12 bg-gray-100 p-6 rounded-lg border-2 border-red-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-600">Section Admin</h2>
              <Button
                onClick={goToAdminPanel}
                variant="outline"
                className="border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange/10"
              >
                <Shield className="mr-2 h-4 w-4" />
                Aller au panneau d'administration complet
              </Button>
            </div>
            
            {pendingReviews.length > 0 ? (
              <>
                <h3 className="text-xl font-semibold mb-4">Avis en attente de validation ({pendingReviews.length})</h3>
                <div className="grid grid-cols-1 gap-4">
                  {pendingReviews.map((review) => (
                    <div key={review.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400">
                      <div className="flex justify-between mb-2">
                        <div>
                          <span className="font-bold">{review.name}</span>
                          {review.relation && <span className="text-gray-600"> ({review.relation})</span>}
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => approveReview(review.id)}
                            className="p-1 bg-green-100 rounded-full text-green-600 hover:bg-green-200"
                            title="Approuver"
                          >
                            <Check size={18} />
                          </button>
                          <button 
                            onClick={() => deleteReview(review.id, true)}
                            className="p-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
                            title="Supprimer"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={16} className="text-[#FFD700] fill-[#FFD700]" />
                        ))}
                      </div>
                      <p className="text-gray-700">"{review.content}"</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-600">Aucun avis en attente de validation.</p>
            )}
            
            {approvedReviews.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-4">Avis approuvés ({approvedReviews.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {approvedReviews.map((review) => (
                    <div key={review.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-green-400">
                      <div className="flex justify-between mb-2">
                        <div>
                          <span className="font-bold">{review.name}</span>
                          {review.relation && <span className="text-gray-600"> ({review.relation})</span>}
                        </div>
                        <button 
                          onClick={() => deleteReview(review.id, false)}
                          className="p-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
                          title="Supprimer"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={16} className="text-[#FFD700] fill-[#FFD700]" />
                        ))}
                      </div>
                      <p className="text-gray-700">"{review.content}"</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...staticTestimonials, ...approvedReviews].map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1C1C1C] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#000000]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={refreshReviews}
          variant="outline"
          className="mt-8"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualiser
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsPage;
