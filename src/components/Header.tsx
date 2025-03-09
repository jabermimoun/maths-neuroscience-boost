
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ButtonCTA from './ButtonCTA';
import { Phone, Pause, Play } from 'lucide-react';

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className="relative bg-hero-pattern min-h-[85vh] flex items-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/50 to-[#1C1C1C]/30 mix-blend-multiply"></div>
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Boostez votre réussite en Maths avec une méthode unique !
            </h1>
            <p className="text-xl text-white/90 mb-8">
              <span className="text-[#FFD700] font-semibold">APPRENDRE, COMPRENDRE, RÉUSSIR</span> avec une méthode basée sur les neurosciences.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Les mathématiques ne sont pas une fatalité ! Grâce à une méthode basée sur les neurosciences, votre enfant peut progresser rapidement et durablement.
            </p>
            <Link to="/reserver">
              <ButtonCTA 
                variant="gold" 
                size="lg" 
                icon={<Phone size={20} />}
                className="transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]"
              >
                Réservez un appel gratuit
              </ButtonCTA>
            </Link>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="aspect-video bg-black/20 rounded-lg overflow-hidden video-overlay group cursor-pointer shadow-xl">
              <div 
                className="absolute inset-0 flex items-center justify-center z-10"
                onClick={togglePlay}
              >
                {!isPlaying && (
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={30} className="ml-2 text-vibrant-orange" />
                  </div>
                )}
                {isPlaying && (
                  <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 opacity-0 hover:opacity-100">
                    <Pause size={30} className="text-vibrant-orange" />
                  </div>
                )}
              </div>
              <video
                ref={videoRef}
                src="/video/promo.mp4"
                className="w-full h-full object-cover"
                preload="metadata"
                onClick={togglePlay}
                onEnded={() => setIsPlaying(false)}
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
