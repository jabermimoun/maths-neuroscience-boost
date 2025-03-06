
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';

const AboutMe = () => {
  return (
    <section className="py-20 bg-light-blue" id="about">
      <div className="container px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="Portrait professionnel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-md shadow-lg animate-float">
                <span className="text-dark-blue font-medium">
                  Ingénieur & Professeur
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Qui suis-je ?" 
              subtitle=""
            />
            
            <div className="space-y-6 text-dark-blue/90">
              <p className="text-lg">
                📚 Ingénieur et professeur expérimenté, j'ai enseigné dans des écoles prestigieuses et aidé des centaines d'élèves à transformer leur relation avec les mathématiques.
              </p>
              
              <p className="text-lg">
                💡 Ma mission : rendre les mathématiques accessibles à tous, même à ceux qui pensent "ne jamais pouvoir y arriver" !
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
                <h3 className="text-xl font-bold mb-2">Pourquoi ça marche ?</h3>
                <p className="text-lg">
                  Les maths ne sont pas une série d'exercices incompréhensibles : elles ont une logique. Avec la bonne approche, vous pouvez les maîtriser rapidement.
                </p>
              </div>
              
              <div className="pt-6">
                <Link to="/methode">
                  <ButtonCTA variant="dark">
                    Découvrir comment ça marche
                  </ButtonCTA>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <blockquote className="text-xl text-gray-600 italic text-center">
            "Les mathématiques possèdent non seulement la vérité, mais aussi la beauté suprême."
            <footer className="mt-2 text-dark-blue font-medium not-italic">— Bertrand Russell</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
