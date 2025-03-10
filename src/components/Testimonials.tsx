import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Maths Réussite Academy",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": staticTestimonials.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": staticTestimonials.map(testimonial => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating.toString(),
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": testimonial.name
        },
        "reviewBody": testimonial.content
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
      </div>
    </section>
  );
};

export default Testimonials;
