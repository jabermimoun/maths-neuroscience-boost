
import React, { useState, useEffect } from 'react';
import ButtonCTA from './ButtonCTA';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-dark-blue/95 shadow-md backdrop-blur-header' : 'py-5 bg-transparent'
    }`}>
      <div className="container px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white font-display font-bold text-xl">
            Math<span className="text-vibrant-orange">Boost</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pourquoi" className="text-white/90 hover:text-white transition-colors hover-underline">
              Pourquoi mes cours ?
            </a>
            <a href="#methode" className="text-white/90 hover:text-white transition-colors hover-underline">
              Méthode
            </a>
            <a href="#tarifs" className="text-white/90 hover:text-white transition-colors hover-underline">
              Tarifs
            </a>
            <a href="#temoignages" className="text-white/90 hover:text-white transition-colors hover-underline">
              Témoignages
            </a>
            <a href="#blog" className="text-white/90 hover:text-white transition-colors hover-underline">
              Blog
            </a>
            <ButtonCTA variant="orange" size="sm" icon={<Phone size={16} />}>
              Réserver
            </ButtonCTA>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-dark-blue absolute w-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container px-6 flex flex-col space-y-4">
          <a 
            href="#pourquoi" 
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Pourquoi mes cours ?
          </a>
          <a 
            href="#methode" 
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Méthode
          </a>
          <a 
            href="#tarifs" 
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Tarifs
          </a>
          <a 
            href="#temoignages" 
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Témoignages
          </a>
          <a 
            href="#blog" 
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
          <ButtonCTA variant="orange" icon={<Phone size={16} />} className="mt-4" onClick={() => setIsMenuOpen(false)}>
            Réserver
          </ButtonCTA>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
