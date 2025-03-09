
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { MessageSquare, Plus } from 'lucide-react';
import TestimonialsList from './TestimonialsList';
import ReviewForm from './ReviewForm';

const Testimonials = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  
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
    }
  ];

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const handleReviewSubmitted = () => {
    setShowReviewForm(false);
  };

  return (
    <section className="py-20 bg-soft-blue" id="temoignages">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Témoignages" 
          subtitle="Ce que disent mes élèves et leurs parents"
          center
        />
        
        <TestimonialsList staticTestimonials={staticTestimonials} />
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link to="/temoignages">
            <ButtonCTA 
              variant="gold"
              icon={<MessageSquare size={18} />}
            >
              Lire tous les avis
            </ButtonCTA>
          </Link>
          
          <ButtonCTA 
            variant="dark"
            icon={<Plus size={18} />}
            onClick={toggleReviewForm}
          >
            Ajouter votre avis
          </ButtonCTA>
        </div>
        
        {showReviewForm && (
          <div className="mt-8 max-w-xl mx-auto">
            <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
          </div>
        )}
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="102" height="24" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M92.4 0H102V24H92.4V0Z" fill="#00B67A"/>
              <path d="M0 0H92.4V24H0V0Z" fill="#00B67A"/>
              <path d="M12.8 19.4L16.5 17.2L18.4 24L12.8 19.4Z" fill="#005128"/>
              <path d="M17.7 9.7H22.9L20.3 15.9L17.7 9.7Z" fill="white"/>
              <path d="M24.2 9.7H29.4L26.8 15.9L24.2 9.7Z" fill="white"/>
              <path d="M30.6 9.7H35.9L33.3 15.9L30.6 9.7Z" fill="white"/>
              <path d="M37.1 9.7H42.3L39.7 15.9L37.1 9.7Z" fill="white"/>
              <path d="M43.6 9.7H48.8L46.2 15.9L43.6 9.7Z" fill="white"/>
              <path d="M11.3 9.7L13.9 15.9L16.5 9.7H11.3Z" fill="white"/>
              <path d="M71 8.5H55.8C55.2 8.5 54.7 9 54.7 9.6V15.7C54.7 16.3 55.2 16.8 55.8 16.8H71C71.6 16.8 72.1 16.3 72.1 15.7V9.6C72.1 9 71.6 8.5 71 8.5Z" fill="white"/>
              <path d="M58 13.2L59.4 12.4V15.2H58V13.2Z" fill="#00B67A"/>
              <path d="M63.5 12.1C63.5 11.9 63.5 11.8 63.4 11.7C63.3 11.6 63.2 11.5 63.1 11.5H60.6L60.9 10.6C60.9 10.5 60.9 10.5 60.9 10.4C60.9 10.3 60.8 10.3 60.7 10.3H59.7C59.6 10.3 59.5 10.4 59.5 10.4L58.7 13.3C58.7 13.4 58.7 13.4 58.7 13.5C58.7 13.6 58.8 13.6 58.9 13.6H61.3L61.1 14.5C61.1 14.6 61.1 14.6 61.1 14.7C61.1 14.8 61.2 14.8 61.3 14.8H62.3C62.4 14.8 62.5 14.7 62.5 14.7L63.3 12.3C63.4 12.2 63.5 12.2 63.5 12.1Z" fill="#00B67A"/>
              <path d="M63.1 14.2C63 14.2 63 14.3 63 14.3L62.8 14.9C62.8 15 62.8 15 62.8 15.1C62.8 15.2 62.9 15.2 63 15.2H64C64.1 15.2 64.2 15.1 64.2 15.1V14.4C64.2 14.3 64.1 14.2 64 14.2H63.1Z" fill="#00B67A"/>
              <path d="M64.9 10.3H63.9C63.8 10.3 63.7 10.4 63.7 10.4L63 13.3C63 13.4 63 13.4 63 13.5C63 13.6 63.1 13.6 63.2 13.6H64.2C64.3 13.6 64.4 13.5 64.4 13.5L65.1 10.6C65.1 10.5 65.1 10.5 65.1 10.4C65.1 10.3 65 10.3 64.9 10.3Z" fill="#00B67A"/>
              <path d="M68.8 10.3H65.4C65.3 10.3 65.2 10.4 65.2 10.4L65 11.1C65 11.2 65 11.2 65 11.3C65 11.4 65.1 11.4 65.2 11.4H66.5L66 13.4C66 13.5 66 13.5 66 13.6C66 13.7 66.1 13.7 66.2 13.7H67.1C67.2 13.7 67.3 13.6 67.3 13.6L67.9 11.5H69.2C69.3 11.5 69.4 11.4 69.4 11.4L69.6 10.7C69.6 10.6 69.6 10.6 69.6 10.5C69.6 10.4 69.5 10.4 69.4 10.3H68.8Z" fill="#00B67A"/>
            </svg>
          </div>
          <p className="text-base text-gray-600">Certifié 5 étoiles sur Trustpilot</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
