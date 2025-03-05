
import React from 'react';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Comment vaincre son stress avant un contrôle de maths ?",
      excerpt: "Découvrez des techniques efficaces pour gérer l'anxiété et optimiser vos performances...",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      date: "10 mai 2023"
    },
    {
      id: 2,
      title: "Pourquoi la régularité est plus efficace que le bachotage de dernière minute ?",
      excerpt: "La science cognitive explique pourquoi l'apprentissage distribué surpasse largement le bachotage...",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      date: "25 avril 2023"
    },
    {
      id: 3,
      title: "Les 3 erreurs les plus fréquentes en maths et comment les éviter",
      excerpt: "Analysez et corrigez ces erreurs courantes qui peuvent impacter significativement vos résultats...",
      imageUrl: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      date: "18 mars 2023"
    }
  ];

  return (
    <section className="py-20 bg-pale-blue" id="blog">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Blog & Conseils Pratiques" 
          subtitle="Des ressources gratuites pour progresser en mathématiques"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-dark-blue mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <a href="#" className="text-vibrant-orange font-medium hover-underline inline-flex items-center">
                  Lire l'article
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <ButtonCTA variant="orange" icon={<ArrowRight size={18} />}>
            Voir tous les articles
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
};

export default Blog;
