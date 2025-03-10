
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import ReviewForm from '@/components/ReviewForm';
import { useToast } from '@/hooks/use-toast';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import AdminSection from '@/components/testimonials/AdminSection';
import AdminPasswordPrompt from '@/components/testimonials/AdminPasswordPrompt';
import { TestimonialType } from '@/types/testimonial';
import { useTestimonials } from '@/hooks/use-testimonials';

const TestimonialsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAdminSection, setShowAdminSection] = useState(false);
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isPasswordPromptOpen, setIsPasswordPromptOpen] = useState(false);
  
  const staticTestimonials: TestimonialType[] = [
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
  
  const {
    pendingReviews,
    approvedReviews,
    approveReview,
    deleteReview,
    refreshReviews,
    loadReviews
  } = useTestimonials(staticTestimonials);
  
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
  
  const goToAdminPanel = () => {
    navigate('/admin-panel');
  };
  
  const handleReviewSubmitted = () => {
    setShowAddReviewForm(false);
    setTimeout(loadReviews, 500);
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
            {showAddReviewForm ? 'Masquer le formulaire' : 'Ajouter votre avis'}
          </Button>
        </div>
        
        {showAddReviewForm && (
          <div className="mb-12 max-w-xl mx-auto">
            <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
          </div>
        )}
        
        {isPasswordPromptOpen && (
          <AdminPasswordPrompt
            adminPassword={adminPassword}
            setAdminPassword={setAdminPassword}
            checkPassword={checkPassword}
            onCancel={() => setIsPasswordPromptOpen(false)}
          />
        )}
        
        {showAdminSection && (
          <AdminSection
            pendingReviews={pendingReviews}
            approvedReviews={approvedReviews}
            onGoToAdminPanel={goToAdminPanel}
            onApproveReview={approveReview}
            onDeleteReview={deleteReview}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...staticTestimonials, ...approvedReviews].map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
