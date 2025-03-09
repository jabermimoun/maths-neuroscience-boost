
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('faq');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-dark-blue/95 shadow-md backdrop-blur-header' : 'py-5 bg-transparent'
    }`}>
      <div className="container px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="h-14 w-14 relative mr-3">
              <img 
                src="/lovable-uploads/379ec88c-bb84-449c-b3b1-007274feeb33.png" 
                alt="Maths Réussite Academy Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-playfair font-bold text-xl">
                <span className="text-gold">MATHS RÉUSSITE</span> <span className="text-gold">ACADEMY</span>
              </span>
              <span className="text-xs text-gold/80 tracking-wider">
                APPRENDRE, COMPRENDRE, RÉUSSIR
              </span>
            </div>
          </Link>
          
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
            <Link to="/blog" className="text-white/90 hover:text-white transition-colors hover-underline">
              Blog
            </Link>
            <a href="#faq" onClick={handleContactClick} className="text-white/90 hover:text-white transition-colors hover-underline">
              Contact
            </a>
            <Link to="/reserver">
              <ButtonCTA variant="gold" size="sm" icon={<Phone size={16} />}>
                Réserver
              </ButtonCTA>
            </Link>
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
          <Link 
            to="/blog" 
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <a 
            href="#faq" 
            onClick={handleContactClick}
            className="text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
          >
            Contact
          </a>
          <Link to="/reserver">
            <ButtonCTA variant="gold" icon={<Phone size={16} />} className="mt-4" onClick={() => setIsMenuOpen(false)}>
              Réserver
            </ButtonCTA>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
