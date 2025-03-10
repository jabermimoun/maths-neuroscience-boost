
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return <footer className="bg-dark-blue text-white py-12" id="contact">
      <div className="container px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 relative mr-3">
                <img src="/lovable-uploads/379ec88c-bb84-449c-b3b1-007274feeb33.png" alt="Maths Réussite Academy Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-playfair font-bold text-gold">Maths Réussite Academy</h3>
                <span className="text-xs text-gold/80 tracking-wider">
                  APPRENDRE, COMPRENDRE, RÉUSSIR
                </span>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Une approche unique basée sur les neurosciences pour des résultats rapides et durables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold" />
                <span>0488 13 12 19</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold" />
                <span>mathsreussiteacademy@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gold" />
                <span>Bruxelles et en périphérie</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#pourquoi" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Pourquoi mes cours sont différents
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Qui suis-je
                </a>
              </li>
              <li>
                <a href="#methode" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Méthode & Résultats
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Tarifs & Formules
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-white hover-underline transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Maths Réussite Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
