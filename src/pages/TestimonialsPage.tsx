
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

const TestimonialsPage = () => {
  const navigate = useNavigate();
  
  const testimonials = [
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
      relation: "élève en terminale",
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

        <h1 className="text-4xl font-bold text-[#000000] mb-8">
          Tous les témoignages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
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
