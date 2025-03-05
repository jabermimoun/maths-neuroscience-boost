
import React from 'react';
import ButtonCTA from './ButtonCTA';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-hero-pattern min-h-[85vh] flex items-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/50 to-dark-blue/30 mix-blend-multiply"></div>
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Boostez votre réussite en Maths avec une méthode unique !
            </h1>
            <p className="text-xl text-white/90 mb-8">
              <span className="text-[#C4A86D] font-semibold">APPRENDRE, COMPRENDRE, RÉUSSIR</span> avec une méthode basée sur les neurosciences.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Les mathématiques ne sont pas une fatalité ! Grâce à une méthode basée sur les neurosciences, votre enfant peut progresser rapidement et durablement.
            </p>
            <ButtonCTA 
              variant="orange" 
              size="lg" 
              icon={<Phone size={20} />}
              className="animate-pulse-subtle"
            >
              Réservez un appel gratuit
            </ButtonCTA>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="aspect-video bg-black/20 rounded-lg overflow-hidden video-overlay group cursor-pointer shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-16 border-l-vibrant-orange ml-2"></div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2672&auto=format&fit=crop" 
                alt="Élève concentré travaillant sur des mathématiques" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-vibrant-orange text-white py-2 px-4 rounded-md shadow-lg">
              30-60 secondes
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
