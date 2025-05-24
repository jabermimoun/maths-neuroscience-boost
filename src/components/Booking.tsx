
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { Calendar, Phone, Rocket } from 'lucide-react';

const Booking = () => {
  return (
    <section className="py-20 bg-white" id="reserver">
      <div className="container px-6 lg:px-8">
        <SectionTitle 
          title="Comment réserver ?" 
          subtitle="Un processus simple et efficace pour commencer votre progression"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="flex-1 flex flex-col items-center text-center p-4 md:p-6 bg-light-blue/20 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-dark-blue rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Calendar size={20} className="text-white md:w-7 md:h-7" />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-vibrant-orange rounded-full flex items-center justify-center mb-3 md:mb-4">
                <span className="text-white font-bold text-sm md:text-base">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-2 md:mb-3">
                <span className="block md:hidden">📅 Créneau</span>
                <span className="hidden md:block">Choisissez votre créneau</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                <span className="block md:hidden">Sélectionnez un horaire en ligne.</span>
                <span className="hidden md:block">Sélectionnez un horaire qui vous convient dans le calendrier en ligne.</span>
              </p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-4 md:p-6 bg-light-blue/20 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-dark-blue rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Phone size={20} className="text-white md:w-7 md:h-7" />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-vibrant-orange rounded-full flex items-center justify-center mb-3 md:mb-4">
                <span className="text-white font-bold text-sm md:text-base">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-2 md:mb-3">
                <span className="block md:hidden">📞 Diagnostic</span>
                <span className="hidden md:block">Appelez-moi pour un diagnostic rapide</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                <span className="block md:hidden">15 min pour analyser vos besoins.</span>
                <span className="hidden md:block">Un appel de 15 minutes pour identifier vos besoins et confirmer la compatibilité.</span>
              </p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-4 md:p-6 bg-light-blue/20 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-dark-blue rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Rocket size={20} className="text-white md:w-7 md:h-7" />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-vibrant-orange rounded-full flex items-center justify-center mb-3 md:mb-4">
                <span className="text-white font-bold text-sm md:text-base">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-blue mb-2 md:mb-3">
                <span className="block md:hidden">🚀 Progressez !</span>
                <span className="hidden md:block">Commencez à progresser immédiatement !</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                <span className="block md:hidden">Démarrez et constatez les progrès.</span>
                <span className="hidden md:block">Démarrez votre accompagnement et constatez rapidement les progrès.</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mb-8 md:mb-16">
            <Link to="/reserver" className="w-full md:w-auto">
              <ButtonCTA 
                variant="gold" 
                size="lg" 
                icon={<Phone size={20} />}
                className="animate-pulse-subtle w-full md:w-auto py-6 text-lg font-bold"
              >
                <span className="block md:hidden">Appel découverte</span>
                <span className="hidden md:block">Réserver un appel découverte</span>
              </ButtonCTA>
            </Link>
          </div>
          
          <div className="bg-dark-blue text-white p-6 md:p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">⏰ Vous hésitez ?</h3>
              <p className="text-white/80 text-sm md:text-base">
                <span className="block md:hidden">
                  Chaque semaine = plus de retard !<br />
                  Agissez aujourd'hui.
                </span>
                <span className="hidden md:block">
                  Chaque semaine sans solution, c'est du retard qui s'accumule !<br />
                  Offrez à votre enfant les moyens de réussir dès aujourd'hui.
                </span>
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link to="/reserver" className="w-full md:w-auto">
                <ButtonCTA 
                  variant="gold" 
                  size="lg"
                  className="w-full md:w-auto py-6 text-lg font-bold"
                >
                  <span className="block md:hidden">Premier cours</span>
                  <span className="hidden md:block">Réserver mon premier cours</span>
                </ButtonCTA>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
