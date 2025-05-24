import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';

const AboutMe = () => {
  return (
    <section className="py-20 bg-light-blue" id="about">
      <div className="container px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/lovable-uploads/0ad3a494-bfba-4b4e-b8f4-d896fe1da02d.png"
                  alt="Portrait professionnel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white py-2 px-3 md:px-4 rounded-md shadow-lg animate-float">
                <span className="text-dark-blue font-medium text-sm md:text-base">
                  Ingénieur & Professeur
                </span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle 
              title="Qui suis-je ?" 
              subtitle=""
            />
            
            <div className="space-y-4 md:space-y-6 text-dark-blue/90">
              <p className="text-base md:text-lg">
                📚 Ingénieur et professeur expérimenté, j'ai enseigné dans des écoles prestigieuses et aidé des centaines d'élèves à transformer leur relation avec les mathématiques.
              </p>
              
              <p className="text-base md:text-lg">
                💡 Ma mission : rendre les mathématiques accessibles à tous, même à ceux qui pensent "ne jamais pouvoir y arriver" !
              </p>
              
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm mt-4 md:mt-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">Pourquoi ça marche ?</h3>
                <p className="text-base md:text-lg">
                  Les maths ne sont pas une série d'exercices incompréhensibles : elles ont une logique. Avec la bonne approche, vous pouvez les maîtriser rapidement.
                </p>
              </div>
              
              <div className="pt-4 md:pt-6">
                <Link to="/methode" className="block md:inline-block">
                  <ButtonCTA 
                    variant="dark"
                    className="w-full md:w-auto py-4 md:py-4 text-lg font-bold"
                  >
                    <span className="block md:hidden">Comment ça marche</span>
                    <span className="hidden md:block">Découvrir comment ça marche</span>
                  </ButtonCTA>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 bg-white rounded-lg p-6 md:p-8 shadow-md">
          <blockquote className="text-lg md:text-xl text-gray-600 italic text-center">
            <span className="block md:hidden">"Les maths : vérité et beauté."</span>
            <span className="hidden md:block">"Les mathématiques possèdent non seulement la vérité, mais aussi la beauté suprême."</span>
            <footer className="mt-2 text-dark-blue font-medium not-italic text-base md:text-lg">— Bertrand Russell</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
