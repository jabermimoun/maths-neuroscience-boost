
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonCTA from './ButtonCTA';
import { Phone, Pause, Play } from 'lucide-react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!containerRef.current) return;
      
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: 'CxiHC4P6q80',
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          showinfo: 0,
          mute: 0,
          modestbranding: 1,
          playlist: 'CxiHC4P6q80',
          loop: 0,
          fs: 1
        },
        events: {
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <header className="relative bg-hero-pattern min-h-[85vh] flex items-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/50 to-[#1C1C1C]/30 mix-blend-multiply"></div>
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
              <span className="block md:hidden">Boostez votre réussite en Maths !</span>
              <span className="hidden md:block">Boostez votre réussite en Maths avec une méthode unique !</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 md:mb-8">
              <span className="text-[#FFD700] font-semibold">APPRENDRE, COMPRENDRE, RÉUSSIR</span>
              <span className="block md:inline"> avec une méthode basée sur les neurosciences.</span>
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-6 md:mb-8">
              <span className="block md:hidden">Les maths ne sont pas une fatalité ! Progressez rapidement et durablement.</span>
              <span className="hidden md:block">Les mathématiques ne sont pas une fatalité ! Grâce à une méthode basée sur les neurosciences, votre enfant peut progresser rapidement et durablement.</span>
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/reserver" className="w-full md:w-auto">
                <ButtonCTA 
                  variant="gold" 
                  size="lg" 
                  icon={<Phone size={20} />}
                  className="transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] w-full md:w-auto text-center py-4 md:py-6"
                >
                  <span className="block md:hidden">Appel gratuit</span>
                  <span className="hidden md:block">Réservez un appel gratuit</span>
                </ButtonCTA>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="aspect-video bg-black/20 rounded-lg overflow-hidden video-overlay group shadow-xl relative">
              <div className="w-full h-full" ref={containerRef}></div>
              <div 
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                onClick={togglePlay}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={24} className="ml-1 md:ml-2 text-vibrant-orange md:w-[30px] md:h-[30px]" />
                  </div>
                )}
                {isPlaying && (
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Pause size={24} className="text-vibrant-orange md:w-[30px] md:h-[30px]" />
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-vibrant-orange text-white py-2 px-4 rounded-md shadow-lg">
              <span className="text-sm md:text-base">Vidéo explicative</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
