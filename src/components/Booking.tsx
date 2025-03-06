import React from 'react';
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
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-light-blue/20 rounded-lg">
              <div className="w-16 h-16 bg-dark-blue rounded-full flex items-center justify-center mb-4">
                <Calendar size={28} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-vibrant-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Choisissez votre créneau</h3>
              <p className="text-gray-600">
                Sélectionnez un horaire qui vous convient dans le calendrier en ligne.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-light-blue/20 rounded-lg">
              <div className="w-16 h-16 bg-dark-blue rounded-full flex items-center justify-center mb-4">
                <Phone size={28} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-vibrant-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Appelez-moi pour un diagnostic rapide</h3>
              <p className="text-gray-600">
                Un appel de 15 minutes pour identifier vos besoins et confirmer la compatibilité.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-light-blue/20 rounded-lg">
              <div className="w-16 h-16 bg-dark-blue rounded-full flex items-center justify-center mb-4">
                <Rocket size={28} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-vibrant-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Commencez à progresser immédiatement !</h3>
              <p className="text-gray-600">
                Démarrez votre accompagnement et constatez rapidement les progrès.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ButtonCTA 
              variant="gold" 
              size="lg" 
              icon={<Phone size={20} />}
              className="animate-pulse-subtle"
            >
              Réserver un appel découverte
            </ButtonCTA>
          </div>
          
          <div className="mt-16 bg-dark-blue text-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Vous hésitez encore ?</h3>
              <p className="text-white/80">
                Chaque semaine sans solution, c'est du retard qui s'accumule !<br />
                Offrez à votre enfant les moyens de réussir dès aujourd'hui.
              </p>
            </div>
            
            <div className="flex justify-center">
              <ButtonCTA variant="gold" size="lg">
                Réserver mon premier cours
              </ButtonCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
