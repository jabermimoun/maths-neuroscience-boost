
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const BlogListPage = () => {
  const navigate = useNavigate();
  
  const articles = [
    {
      id: 1,
      title: "Comment vaincre son stress avant un contrôle de maths ?",
      excerpt: "Découvrez des techniques efficaces pour gérer l'anxiété et optimiser vos performances...",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      date: "10 mai 2023"
    },
    {
      id: 2,
      title: "Pourquoi la régularité est plus efficace que le bachotage de dernière minute ?",
      excerpt: "La science cognitive explique pourquoi l'apprentissage distribué surpasse largement le bachotage...",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      date: "25 avril 2023"
    },
    {
      id: 3,
      title: "Les 3 erreurs les plus fréquentes en maths et comment les éviter",
      excerpt: "Analysez et corrigez ces erreurs courantes qui peuvent impacter significativement vos résultats...",
      imageUrl: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893",
      date: "18 mars 2023"
    },
    {
      id: 4,
      title: "Comment développer une mentalité de croissance en mathématiques",
      excerpt: "Découvrez comment changer votre perception des mathématiques pour améliorer vos performances...",
      imageUrl: "https://images.unsplash.com/photo-1509869175650-a1d97972541a",
      date: "5 mars 2023"
    },
    {
      id: 5,
      title: "Les meilleures techniques de mémorisation pour les formules mathématiques",
      excerpt: "Apprenez à mémoriser efficacement les formules mathématiques avec des techniques éprouvées...",
      imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3",
      date: "20 février 2023"
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
          Blog & Conseils Pratiques
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              to={`/blog/${article.id}`} 
              key={article.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-[#000000] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="text-[#FFD700] font-medium inline-flex items-center">
                  Lire l'article
                  <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
