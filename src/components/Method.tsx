
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { Brain, Target, TrendingUp } from 'lucide-react';
import { Phone } from 'lucide-react';

const Method = () => {
  return (
    <section className="py-20 bg-white" id="methode">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Méthode & Résultats" 
          subtitle="Ma méthode exclusive basée sur les neurosciences 📊"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="space-y-4 md:space-y-6">
            <div className="bg-pale-blue rounded-xl p-4 md:p-6 shadow-sm flex gap-3 md:gap-4 card-hover">
              <div className="shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-dark-blue rounded-lg flex items-center justify-center">
                  <Brain size={20} className="text-white md:w-6 md:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-1 md:mb-2">
                  <span className="block md:hidden">🧠 Comprendre d'abord</span>
                  <span className="hidden md:block">Comprendre avant de mémoriser</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  <span className="block md:hidden">Fini l'apprentissage "par cœur". Mon approche permet de vraiment comprendre.</span>
                  <span className="hidden md:block">Fini l'apprentissage "par cœur" qui ne fonctionne pas. Mon approche permet de réellement comprendre les concepts.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-pale-blue rounded-xl p-4 md:p-6 shadow-sm flex gap-3 md:gap-4 card-hover">
              <div className="shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-dark-blue rounded-lg flex items-center justify-center">
                  <Target size={20} className="text-white md:w-6 md:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-1 md:mb-2">
                  <span className="block md:hidden">🎯 Stratégies d'examen</span>
                  <span className="hidden md:block">Stratégies d'examen éprouvées</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  <span className="block md:hidden">Gestion du stress, méthodes rapides pour optimiser vos performances.</span>
                  <span className="hidden md:block">Gestion du stress, méthodes de résolution rapides et efficaces pour optimiser vos performances.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-pale-blue rounded-xl p-4 md:p-6 shadow-sm flex gap-3 md:gap-4 card-hover">
              <div className="shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-dark-blue rounded-lg flex items-center justify-center">
                  <TrendingUp size={20} className="text-white md:w-6 md:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-1 md:mb-2">
                  <span className="block md:hidden">📈 +30-50% en 2 mois</span>
                  <span className="hidden md:block">Progression garantie</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  <span className="block md:hidden">Mes élèves voient une augmentation de 30 à 50% de leur note après 2 mois.</span>
                  <span className="hidden md:block">En moyenne, mes élèves voient une augmentation de 30 à 50% de leur note après seulement 2 mois de suivi régulier.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-dark-blue mb-4 md:mb-6 text-center">
                <span className="block md:hidden">📊 Évolution des notes</span>
                <span className="hidden md:block">Évolution moyenne des notes</span>
              </h3>
              
              <div className="h-48 md:h-64 relative">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center gap-4 md:gap-8">
                  <div className="w-20 md:w-1/3 bg-light-blue h-[30%] relative group">
                    <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 bg-dark-blue text-white rounded px-2 py-1 text-xs md:text-sm">
                      8/20
                    </div>
                    <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-dark-blue font-medium text-xs md:text-base">
                      Avant
                    </div>
                  </div>
                  <div className="w-20 md:w-1/3 bg-vibrant-orange h-[60%] relative group">
                    <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 bg-vibrant-orange text-white rounded px-2 py-1 text-xs md:text-sm">
                      14/20
                    </div>
                    <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-dark-blue font-medium text-xs md:text-base">
                      Après
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-dark-blue text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-base md:text-lg font-bold">
                  +50%
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 text-center">
                <p className="text-xs md:text-base text-gray-600 italic">
                  <span className="block md:hidden">Résultats après 2 mois</span>
                  <span className="hidden md:block">Résultats constatés après 2 mois de suivi régulier</span>
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-vibrant-orange text-white py-2 px-3 md:px-4 rounded-md shadow-lg">
              <span className="text-xs md:text-sm">Progression garantie</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/reserver" className="block md:inline-block">
            <ButtonCTA 
              variant="gold" 
              size="lg" 
              icon={<Phone size={20} />}
              className="w-full md:w-auto py-4 md:py-6"
            >
              <span className="block md:hidden">Bilan gratuit</span>
              <span className="hidden md:block">Prendre rendez-vous pour un bilan gratuit</span>
            </ButtonCTA>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Method;
