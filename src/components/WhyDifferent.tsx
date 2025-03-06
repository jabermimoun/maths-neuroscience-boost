import React from 'react';
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
          <div className="bg-light-blue/30 rounded-lg p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Vous rencontrez ces difficultés ?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                <p>Vous comprenez en classe, mais les notes ne suivent pas ?</p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                <p>Vous sentez du stress et un manque de confiance face aux exercices et aux examens ?</p>
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                <p>Vous avez l'impression d'avoir "des lacunes trop grandes" pour vous en sortir ?</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-pale-blue/50 rounded-lg p-6 shadow-sm border border-light-blue/50">
            <p className="text-lg font-medium text-dark-blue flex items-center mb-2">
              <span className="inline-block w-8 h-8 bg-vibrant-orange text-white rounded-full flex items-center justify-center mr-3">
                💡
              </span>
              Bonne nouvelle : Il existe une solution efficace, et elle est basée sur la science !
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg card-hover">
            <div className="w-16 h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-4">
              <Brain size={32} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-3">Approche basée sur les neurosciences</h3>
            <p className="text-gray-600">
              Une double expertise : Professeur en école renommée et ingénieur, je combine pédagogie avancée et logique mathématique rigoureuse.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg card-hover">
            <div className="w-16 h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-4">
              <Target size={32} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-3">Suivi personnalisé et stratégies efficaces</h3>
            <p className="text-gray-600">
              Une méthode unique : Basée sur les neurosciences et la psychologie cognitive, j'adapte mon approche à chaque élève pour une progression rapide et durable.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg card-hover">
            <div className="w-16 h-16 bg-pale-blue rounded-lg flex items-center justify-center mb-4">
              <Rocket size={32} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-3">Résultats rapides et concrets</h3>
            <p className="text-gray-600">
              Des résultats concrets : Mes élèves constatent une amélioration de 30 à 50% de leur moyenne après seulement 2 mois de suivi régulier.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <ButtonCTA 
            variant="gold" 
            size="lg" 
            icon={<Phone size={20} />}
          >
            Je veux tester cette méthode !
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
