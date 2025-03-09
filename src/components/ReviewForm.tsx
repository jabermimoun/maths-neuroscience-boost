
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ButtonCTA from './ButtonCTA';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_7nj26yk';
const EMAILJS_TEMPLATE_ID = 'template_8oqwc9f';
const EMAILJS_PUBLIC_KEY = 'FCNydsW7-7kmRFZDB';

interface ReviewFormProps {
  onReviewSubmitted?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onReviewSubmitted }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    review: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  
  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };
  
  const handleMouseEnter = (hoveredStar: number) => {
    setHoveredRating(hoveredStar);
  };
  
  const handleMouseLeave = () => {
    setHoveredRating(0);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation
    if (!formData.name || !formData.review || rating === 0) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires et attribuer une note.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Get the current domain for the admin link
      const currentDomain = window.location.origin;
      const adminUrl = `${currentDomain}/admin-panel`;
      
      // Send email notification to admin
      const templateParams = {
        from_name: formData.name,
        relation: formData.relation,
        review: formData.review,
        rating: rating,
        to_name: 'Maths Réussite Academy',
        to_email: 'mathsreussiteacademy@hotmail.com',
        subject: `Nouvel avis client - ${formData.name}`,
        message: `Un nouvel avis a été soumis par ${formData.name} (${formData.relation}). Note: ${rating}/5. Avis: ${formData.review}`,
        admin_link: `Pour valider ou refuser cet avis, veuillez vous rendre sur votre espace d'administration: ${adminUrl} (ou utilisez le raccourci Ctrl+Shift+A sur la page des témoignages, code d'accès: fidoivi)`
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      // Store review in localStorage with debugging
      console.log('Storing new review in localStorage');
      
      // Retrieve existing pending reviews
      let pendingReviews = [];
      try {
        const storedReviews = localStorage.getItem('pendingReviews');
        pendingReviews = storedReviews ? JSON.parse(storedReviews) : [];
        console.log('Retrieved existing pending reviews:', pendingReviews);
      } catch (error) {
        console.error('Error parsing pendingReviews from localStorage:', error);
        pendingReviews = [];
      }
      
      // Create new review object
      const newReview = {
        id: Date.now(),
        name: formData.name,
        relation: formData.relation,
        content: formData.review,
        rating: rating,
        date: new Date().toISOString(),
        status: 'pending'
      };
      
      console.log('New review object:', newReview);
      
      // Add new review to the pending reviews array
      pendingReviews.push(newReview);
      
      // Store updated pending reviews back to localStorage
      localStorage.setItem('pendingReviews', JSON.stringify(pendingReviews));
      console.log('Updated pendingReviews in localStorage:', pendingReviews);
      
      // Success notification
      toast({
        title: "Avis envoyé !",
        description: "Merci pour votre avis. Il sera publié après validation par l'administrateur.",
      });
      
      // Reset form
      setFormData({
        name: '',
        relation: '',
        review: '',
      });
      setRating(0);
      
      // Notify parent component
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'avis:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer ultérieurement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-dark-blue mb-4">Partagez votre expérience</h3>
      <p className="text-gray-600 mb-6">
        Votre avis nous aide à améliorer nos services et guide d'autres parents.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Votre nom *
          </Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ex: Marie Dupont"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="relation" className="block text-sm font-medium text-gray-700 mb-1">
            Votre relation (parent de...)
          </Label>
          <Input
            type="text"
            id="relation"
            value={formData.relation}
            onChange={handleInputChange}
            placeholder="Ex: parent de Thomas (3ème)"
          />
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-1">
            Note *
          </Label>
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                className={`cursor-pointer ${
                  star <= (hoveredRating || rating)
                    ? 'text-[#FFD700] fill-[#FFD700]'
                    : 'text-gray-300'
                }`}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
        
        <div>
          <Label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
            Votre avis *
          </Label>
          <Textarea
            id="review"
            rows={5}
            value={formData.review}
            onChange={handleInputChange}
            placeholder="Partagez votre expérience avec notre méthode..."
            className="w-full"
            required
          />
        </div>
        
        <div className="pt-2">
          <ButtonCTA
            variant="gold"
            className="w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Soumettre mon avis'}
          </ButtonCTA>
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          * Champs obligatoires. Votre avis sera publié après vérification.
        </p>
      </form>
    </div>
  );
};

export default ReviewForm;
