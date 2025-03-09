
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, MessageSquare, Check, X, Shield } from 'lucide-react';
import ReviewForm from '@/components/ReviewForm';

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
  const [showAdminSection, setShowAdminSection] = useState(false);
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [pendingReviews, setPendingReviews] = useState<Testimonial[]>([]);
  const [approvedReviews, setApprovedReviews] = useState<Testimonial[]>([]);
  
  // Static testimonials
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
  
  // Toggle admin section with a secret key combination (ctrl + shift + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdminSection(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  const goToAdminPanel = () => {
    navigate('/admin');
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
          
          <div className="flex gap-3">
            <Button 
              onClick={goToAdminPanel}
              variant="outline"
              className="border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange/10"
            >
              <Shield className="mr-2 h-4 w-4" />
              Administration des avis
            </Button>
            
            <Button 
              onClick={() => setShowAddReviewForm(!showAddReviewForm)}
              variant="default"
              className="bg-[#FFD700] hover:bg-[#E5C100] text-black"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {showAddReviewForm ? 'Masquer le formulaire' : 'Ajouter votre avis'}
            </Button>
          </div>
        </div>
        
        {showAddReviewForm && (
          <div className="mb-12 max-w-xl mx-auto">
            <ReviewForm onReviewSubmitted={() => setShowAddReviewForm(false)} />
          </div>
        )}
        
        {/* Admin Section (hidden by default, revealed with ctrl+shift+A) */}
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

        {/* Public Testimonials */}
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
      </div>
    </div>
  );
};

export default TestimonialsPage;
