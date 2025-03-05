
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cours de Mathématiques</h3>
            <p className="text-white/70 mb-4">
              Une approche unique basée sur les neurosciences pour des résultats rapides et durables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-vibrant-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-vibrant-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-vibrant-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-vibrant-orange" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-vibrant-orange" />
                <span>contact@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-vibrant-orange" />
                <span>Paris et région parisienne</span>
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
          <p>© {new Date().getFullYear()} Cours de Mathématiques basés sur les neurosciences. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
