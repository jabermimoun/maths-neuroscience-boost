
import React from 'react';
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-pale-blue rounded-xl p-6 shadow-sm flex gap-4 card-hover">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-dark-blue rounded-lg flex items-center justify-center">
                  <Brain size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">Comprendre avant de mémoriser</h3>
                <p className="text-gray-600">
                  Fini l'apprentissage "par cœur" qui ne fonctionne pas. Mon approche permet de réellement comprendre les concepts.
                </p>
              </div>
            </div>
            
            <div className="bg-pale-blue rounded-xl p-6 shadow-sm flex gap-4 card-hover">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-dark-blue rounded-lg flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">Stratégies d'examen éprouvées</h3>
                <p className="text-gray-600">
                  Gestion du stress, méthodes de résolution rapides et efficaces pour optimiser vos performances.
                </p>
              </div>
            </div>
            
            <div className="bg-pale-blue rounded-xl p-6 shadow-sm flex gap-4 card-hover">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-dark-blue rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">Progression garantie</h3>
                <p className="text-gray-600">
                  En moyenne, mes élèves voient une augmentation de 30 à 50% de leur note après seulement 2 mois de suivi régulier.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">Évolution moyenne des notes</h3>
              
              <div className="h-64 relative">
                {/* Simplified chart representation */}
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/3 bg-light-blue h-[30%] mr-8 relative group">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-blue text-white rounded px-2 py-1 text-sm">
                      8/20
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-dark-blue font-medium">
                      Avant
                    </div>
                  </div>
                  <div className="w-1/3 bg-vibrant-orange h-[60%] relative group">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-vibrant-orange text-white rounded px-2 py-1 text-sm">
                      14/20
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-dark-blue font-medium">
                      Après
                    </div>
                  </div>
                </div>
                
                {/* Arrow showing growth */}
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-vibrant-orange rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
                
                {/* Percentage indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-dark-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold">
                  +50%
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 italic">
                  Résultats constatés après 2 mois de suivi régulier
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-vibrant-orange text-white py-2 px-4 rounded-md shadow-lg">
              Progression garantie
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <ButtonCTA 
            variant="orange" 
            size="lg" 
            icon={<Phone size={20} />}
          >
            Prendre rendez-vous pour un bilan gratuit
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
};

export default Method;
