
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ButtonCTA from '@/components/ButtonCTA';

const BlogPost = () => {
  const { id } = useParams();
  
  // Simulation des données d'article (à remplacer par de vraies données)
  const article = {
    id: 1,
    title: "Comment vaincre son stress avant un contrôle de maths ?",
    content: `
      Les mathématiques peuvent être source de stress pour de nombreux élèves. Voici quelques techniques efficaces pour gérer l'anxiété et optimiser vos performances lors des contrôles...
      
      1. La préparation est clé
      Une bonne préparation est essentielle pour réduire le stress. Commencez à réviser plusieurs jours avant le contrôle...
      
      2. Techniques de respiration
      La respiration profonde est un excellent moyen de calmer son anxiété...
      
      3. Visualisation positive
      Imaginez-vous en train de réussir votre contrôle...
    `,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    date: "10 mai 2023"
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container px-6 py-20 lg:px-8">
        <Link to="/" className="mb-8 inline-block">
          <ButtonCTA 
            variant="dark" 
            size="sm"
            icon={<ArrowLeft size={18} />}
          >
            Retour au blog
          </ButtonCTA>
        </Link>
        
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>
            <h1 className="text-3xl font-bold text-[#000000] mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
