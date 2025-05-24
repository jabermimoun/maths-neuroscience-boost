
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';

const WhyDifferent = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-light-blue/30" id="why-different">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Pourquoi faire appel à moi ?" 
          subtitle="Bonne nouvelle : avec la bonne méthode, les mathématiques deviennent simples et même... amusantes !" 
          center 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Problèmes Section */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-dark-blue">
              Vous rencontrez ces difficultés ?
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-3 text-lg">•</span>
                <p className="text-base md:text-lg">
                  Vous comprenez en classe, mais les notes ne suivent pas ?
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-3 text-lg">•</span>
                <p className="text-base md:text-lg">
                  Vous sentez du stress et un manque de confiance face aux exercices et aux examens ?
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-3 text-lg">•</span>
                <p className="text-base md:text-lg">
                  Vous avez l'impression d'avoir "des lacunes trop grandes" pour vous en sortir ?
                </p>
              </li>
            </ul>
            <div className="mt-6 md:mt-8 p-4 bg-vibrant-orange/10 rounded-lg border-l-4 border-vibrant-orange">
              <p className="text-base md:text-lg font-bold text-dark-blue">
                💡 Bonne nouvelle : Il existe une solution efficace, et elle est basée sur la science !
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-dark-blue">
              🔬 Pourquoi notre méthode fonctionne ?
            </h3>
            <p className="text-base md:text-lg mb-3 md:mb-4 font-medium">
              💡 Les neurosciences appliquées à l'apprentissage, c'est LA clé pour des résultats rapides !
            </p>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  Technique de la répétition espacée → Mémorisation longue durée garantie
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  Apprentissage actif (active recall) → L'élève retient 80% mieux qu'avec une simple lecture
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  Méthodes anti-stress → Boost de la concentration et réduction de l'anxiété avant les examens
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  Optimisation du cerveau avec la gestion du sommeil et de la motivation
                </p>
              </li>
            </ul>
            <p className="text-base md:text-lg font-bold text-dark-blue mt-3 md:mt-4">
              📢 Votre enfant n'a pas besoin de travailler plus, mais de travailler PLUS INTELLIGEMMENT !
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Link to="/methode" className="block md:inline-block">
            <ButtonCTA 
              variant="gold" 
              size="lg"
              className="w-full md:w-auto"
            >
              Découvrir ma méthode complète
            </ButtonCTA>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
