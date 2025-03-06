
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Brain, BookOpen, BarChart, GraduationCap } from 'lucide-react';
import ButtonCTA from '@/components/ButtonCTA';
import { Link } from 'react-router-dom';

const MethodPage = () => {
  const navigate = useNavigate();

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
          Notre Méthode
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6 flex items-center">
              <Brain className="mr-3 text-vibrant-orange" size={32} />
              Une approche basée sur les neurosciences
            </h2>
            <p className="text-lg mb-6">
              Notre méthode unique combine les dernières découvertes en neurosciences
              avec une pédagogie éprouvée pour garantir des progrès rapides et durables.
              Nous ne nous contentons pas d'enseigner les mathématiques, nous apprenons à 
              votre enfant <strong>comment apprendre efficacement</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="text-dark-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Diagnostic initial approfondi</h3>
                </div>
                <p className="text-gray-700">
                  Nous commençons par identifier précisément les lacunes et les points forts 
                  de l'élève pour établir un plan d'apprentissage personnalisé.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
                    <Brain className="text-dark-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Techniques de mémorisation</h3>
                </div>
                <p className="text-gray-700">
                  Nous enseignons des techniques éprouvées comme la répétition espacée 
                  et les associations visuelles pour optimiser la mémorisation.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
                    <BarChart className="text-dark-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Tracking des progrès</h3>
                </div>
                <p className="text-gray-700">
                  Nous suivons et analysons les progrès de l'élève en temps réel pour 
                  ajuster continuellement notre approche et garantir des résultats.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="text-dark-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Développement de l'autonomie</h3>
                </div>
                <p className="text-gray-700">
                  Notre objectif est de rendre l'élève autonome dans son apprentissage, 
                  en lui donnant les outils pour apprendre efficacement par lui-même.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-dark-blue mb-6">Les points clés de notre méthode :</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={24} className="text-vibrant-orange mr-2 mt-1 shrink-0" />
                <span><strong>Évaluation personnalisée des besoins</strong> - Chaque élève est unique, notre approche aussi.</span>
              </li>
              <li className="flex items-start">
                <Check size={24} className="text-vibrant-orange mr-2 mt-1 shrink-0" />
                <span><strong>Plan d'apprentissage adapté</strong> - Un programme sur mesure pour atteindre les objectifs fixés.</span>
              </li>
              <li className="flex items-start">
                <Check size={24} className="text-vibrant-orange mr-2 mt-1 shrink-0" />
                <span><strong>Suivi régulier des progrès</strong> - Des évaluations fréquentes pour mesurer l'évolution.</span>
              </li>
              <li className="flex items-start">
                <Check size={24} className="text-vibrant-orange mr-2 mt-1 shrink-0" />
                <span><strong>Exercices ciblés et progressifs</strong> - Pour une évolution constante et des résultats concrets.</span>
              </li>
              <li className="flex items-start">
                <Check size={24} className="text-vibrant-orange mr-2 mt-1 shrink-0" />
                <span><strong>Développement de la confiance</strong> - Car les mathématiques sont aussi une question de confiance en soi.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-light-blue/30 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Résultats observés</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-vibrant-orange mb-2">+3,5</div>
                <p className="text-gray-700">points de moyenne<br/>en 3 mois</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-vibrant-orange mb-2">92%</div>
                <p className="text-gray-700">des élèves améliorent<br/>leur confiance en eux</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-vibrant-orange mb-2">85%</div>
                <p className="text-gray-700">gardent de bonnes<br/>habitudes de travail</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl mb-6">Prêt à transformer votre relation avec les mathématiques ?</p>
            <Link to="/reserver">
              <ButtonCTA 
                variant="gold" 
                size="lg"
              >
                Réserver une séance de diagnostic gratuite
              </ButtonCTA>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodPage;
