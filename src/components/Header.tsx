
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
          modestbranding: 1
        },
        events: {
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
    };

    return () => {
      // Clean up
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
            <div className="aspect-video bg-black/20 rounded-lg overflow-hidden video-overlay group shadow-xl relative">
              <div className="w-full h-full" ref={containerRef}></div>
              <div 
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                onClick={togglePlay}
              >
                {!isPlaying && (
                  <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={30} className="ml-2 text-vibrant-orange" />
                  </div>
                )}
                {isPlaying && (
                  <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Pause size={30} className="text-vibrant-orange" />
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-vibrant-orange text-white py-2 px-4 rounded-md shadow-lg">
              Vidéo explicative
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
