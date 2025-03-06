
import React, { useState } from 'react';
import ButtonCTA from './ButtonCTA';
import { Phone, Play } from 'lucide-react';

const Header = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <header className="relative bg-hero-pattern min-h-[85vh] flex items-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-anthracite/80 to-anthracite/60 mix-blend-multiply"></div>
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-lora font-bold text-white leading-tight mb-6">
              Boostez votre réussite en Maths avec une méthode unique !
            </h1>
            <p className="text-xl text-white/90 mb-8">
              <span className="text-gold font-semibold">APPRENDRE, COMPRENDRE, RÉUSSIR</span> avec une méthode basée sur les neurosciences.
            </p>
            <p className="text-lg text-white/80 mb-8 font-lora">
              Les mathématiques ne sont pas une fatalité ! Grâce à une méthode basée sur les neurosciences, votre enfant peut progresser rapidement et durablement.
            </p>
            <ButtonCTA 
              variant="gold" 
              size="lg" 
              icon={<Phone size={20} />}
              className="shadow-xl"
            >
              Réservez un appel gratuit
            </ButtonCTA>
          </div>
          
          <div className="relative animate-fade-in-right">
            {!videoPlaying ? (
              <div className="aspect-video bg-black/20 rounded-lg overflow-hidden video-overlay group cursor-pointer shadow-xl" onClick={playVideo}>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <Play size={32} className="text-black ml-2" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2672&auto=format&fit=crop" 
                  alt="Élève concentré travaillant sur des mathématiques" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            ) : (
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Présentation de notre méthode" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="absolute -bottom-4 -right-4 bg-gold text-black py-2 px-4 rounded-md shadow-lg font-medium">
              30-60 secondes
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
