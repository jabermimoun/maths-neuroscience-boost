import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { Check, Clock } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="tarifs">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Tarifs & Formules" 
          subtitle="Des solutions adaptées à vos besoins"
          center
        />
        
        <div className="max-w-3xl mx-auto mb-12 bg-light-blue rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Clock size={24} className="mr-2 text-dark-blue" />
            Pourquoi des séances de 2h minimum ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 bg-vibrant-orange rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-dark-blue font-medium">Meilleure assimilation des concepts</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 bg-vibrant-orange rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-dark-blue font-medium">Moins de stress, plus de confiance</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 bg-vibrant-orange rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-dark-blue font-medium">Progression 2X plus rapide</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden card-hover">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Mensuel</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">460€</span>
                <span className="text-gray-500 ml-2">/mois</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">4 cours/mois (2h/séance)</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Suivi personnalisé</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Méthode neurosciences</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Support entre les cours</span>
                </li>
              </ul>
              <Link to="/reserver?plan=mensuel">
                <ButtonCTA variant="dark" className="w-full">
                  Réserver
                </ButtonCTA>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl border-2 border-vibrant-orange relative overflow-hidden card-hover transform scale-105 z-10">
            <div className="absolute -right-12 top-6 bg-vibrant-orange text-white py-1 px-12 rotate-45">
              Populaire
            </div>
            <div className="p-6 border-b border-gray-200 bg-dark-blue text-white">
              <h3 className="text-2xl font-bold mb-2">Pack Intensif</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">1350€</span>
              </div>
              <p className="text-sm text-white/70 mt-2">12 cours / 3 mois</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Économie de 10%</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Progrès garantis</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Support premium 7j/7</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Bilan détaillé</span>
                </li>
              </ul>
              <Link to="/reserver?plan=intensif">
                <ButtonCTA variant="gold" className="w-full">
                  Réserver
                </ButtonCTA>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden card-hover">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">À l'unité</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">130€</span>
                <span className="text-gray-500 ml-2">/cours</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">2h minimum par séance</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Flexible</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Idéal pour l'aide ponctuelle</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Sans engagement</span>
                </li>
              </ul>
              <Link to="/reserver?plan=unitaire">
                <ButtonCTA variant="dark" className="w-full">
                  Réserver
                </ButtonCTA>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-dark-blue mb-6">
            Tous les cours se déroulent à domicile pour un confort optimal.
          </p>
          <Link to="/reserver">
            <ButtonCTA variant="gold" size="lg">
              Je veux réserver mon premier cours
            </ButtonCTA>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
