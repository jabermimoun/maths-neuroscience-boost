import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, Rocket } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { Phone } from 'lucide-react';

const WhyDifferent = () => {
  return (
    <section className="py-20 bg-white" id="pourquoi">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Pourquoi mes cours sont différents ?" 
          subtitle="Vous (ou votre enfant) avez du mal en maths ? Découvrez une approche qui change tout."
          center
        />
        
        <div className="mb-12">
          <div className="bg-light-blue/30 rounded-lg p-4 md:p-6 mb-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              <span className="block md:hidden">Vous rencontrez ces difficultés ?</span>
              <span className="hidden md:block">Vous rencontrez ces difficultés ?</span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2 text-lg">•</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Notes qui ne suivent pas ?</span>
                  <span className="hidden md:block">Vous comprenez en classe, mais les notes ne suivent pas ?</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2 text-lg">•</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Stress aux examens ?</span>
                  <span className="hidden md:block">Vous sentez du stress et un manque de confiance face aux exercices et aux examens ?</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2 text-lg">•</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Trop de lacunes ?</span>
                  <span className="hidden md:block">Vous avez l'impression d'avoir "des lacunes trop grandes" pour vous en sortir ?</span>
                </p>
              </li>
            </ul>
          </div>
          
          <div className="bg-pale-blue/50 rounded-lg p-4 md:p-6 shadow-sm border border-light-blue/50">
            <p className="text-base md:text-lg font-medium text-dark-blue flex items-center mb-2">
              <span className="inline-block w-6 h-6 md:w-8 md:h-8 bg-vibrant-orange text-white rounded-full flex items-center justify-center mr-2 md:mr-3 text-sm md:text-base">
                💡
              </span>
              <span className="block md:hidden">Solution efficace !</span>
              <span className="hidden md:block">Bonne nouvelle : Il existe une solution efficace, et elle est basée sur la science !</span>
            </p>
          </div>

          <div className="mt-8 bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-200">
            <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-3 md:mb-4">
              <span className="block md:hidden">🔬 Pourquoi notre méthode fonctionne ?</span>
              <span className="hidden md:block">🔬 Pourquoi notre méthode fonctionne ?</span>
            </h3>
            <p className="text-base md:text-lg mb-3 md:mb-4 font-medium">
              <span className="block md:hidden">💡 Les neurosciences appliquées = LA clé pour des résultats rapides !</span>
              <span className="hidden md:block">💡 Les neurosciences appliquées à l'apprentissage, c'est LA clé pour des résultats rapides !</span>
            </p>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Répétition espacée → Mémoire longue durée</span>
                  <span className="hidden md:block">Technique de la répétition espacée → Mémorisation longue durée garantie</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Apprentissage actif → L'élève retient 80% mieux</span>
                  <span className="hidden md:block">Apprentissage actif (active recall) → L'élève retient 80% mieux qu'avec une simple lecture</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Méthodes anti-stress → Concentration boostée</span>
                  <span className="hidden md:block">Méthodes anti-stress → Boost de la concentration et réduction de l'anxiété avant les examens</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange font-bold mr-2">✔️</span>
                <p className="text-sm md:text-base">
                  <span className="block md:hidden">Optimisation cerveau → Performance décuplée</span>
                  <span className="hidden md:block">Optimisation du cerveau avec la gestion du sommeil et de la motivation</span>
                </p>
              </li>
            </ul>
            <p className="text-base md:text-lg font-bold text-dark-blue mt-3 md:mt-4">
              <span className="block md:hidden">📢 Travaillez PLUS INTELLIGEMMENT !</span>
              <span className="hidden md:block">📢 Votre enfant n'a pas besoin de travailler plus, mais de travailler PLUS INTELLIGEMMENT !</span>
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg card-hover">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-3 md:mb-4">
              <Brain size={24} className="text-dark-blue md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-2 md:mb-3">
              <span className="block md:hidden">🧠 Science appliquée</span>
              <span className="hidden md:block">Approche basée sur les neurosciences</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              <span className="block md:hidden">Prof + Ingénieur = pédagogie avancée + logique rigoureuse.</span>
              <span className="hidden md:block">Une double expertise : Professeur en école renommée et ingénieur, je combine pédagogie avancée et logique mathématique rigoureuse.</span>
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg card-hover">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-3 md:mb-4">
              <Target size={24} className="text-dark-blue md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-2 md:mb-3">
              <span className="block md:hidden">🎯 Sur-mesure</span>
              <span className="hidden md:block">Suivi personnalisé et stratégies efficaces</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              <span className="block md:hidden">Méthode unique adaptée à chaque élève.</span>
              <span className="hidden md:block">Une méthode unique : Basée sur les neurosciences et la psychologie cognitive, j'adapte mon approche à chaque élève pour une progression rapide et durable.</span>
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg card-hover">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-3 md:mb-4">
              <Rocket size={24} className="text-dark-blue md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-2 md:mb-3">
              <span className="block md:hidden">🚀 Garantis</span>
              <span className="hidden md:block">Résultats rapides et concrets</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              <span className="block md:hidden">+30 à 50% en 2 mois.</span>
              <span className="hidden md:block">Des résultats concrets : Mes élèves constatent une amélioration de 30 à 50% de leur moyenne après seulement 2 mois de suivi régulier.</span>
            </p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <Link to="/reserver" className="block md:inline-block">
            <ButtonCTA 
              variant="gold" 
              size="lg" 
              icon={<Phone size={20} />}
              className="w-full md:w-auto py-6 text-lg"
            >
              <span className="block md:hidden">Tester !</span>
              <span className="hidden md:block">Je veux tester cette méthode !</span>
            </ButtonCTA>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
