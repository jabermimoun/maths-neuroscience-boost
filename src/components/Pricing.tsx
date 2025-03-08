
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ButtonCTA from './ButtonCTA';
import { Check, Clock, AlertTriangle, Rocket, Award } from 'lucide-react';

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

        {/* Section: Pourquoi choisir un abonnement ou un pack */}
        <div className="max-w-4xl mx-auto mb-12 bg-pale-blue/50 rounded-lg p-6 border border-light-blue/50">
          <h3 className="text-xl font-bold mb-4 flex items-center text-dark-blue">
            <AlertTriangle size={24} className="mr-2 text-vibrant-orange" />
            Pourquoi choisir un abonnement ou un pack ?
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-vibrant-orange font-bold mr-2">✔</span>
              <p>Un engagement structuré garantit de vrais progrès.</p>
            </li>
            <li className="flex items-start">
              <span className="text-vibrant-orange font-bold mr-2">✔</span>
              <p>Une meilleure organisation et un accompagnement sur mesure.</p>
            </li>
            <li className="flex items-start">
              <span className="text-vibrant-orange font-bold mr-2">✔</span>
              <p>Un investissement rentable avec un suivi régulier !</p>
            </li>
          </ul>
          
          <div className="bg-white p-4 rounded-md mb-4">
            <p className="text-lg font-semibold flex items-center mb-2">
              <Rocket size={20} className="mr-2 text-vibrant-orange" />
              Un investissement rentable
            </p>
            <p className="text-gray-700">
              Plutôt que de multiplier les cours inefficaces, investissez dans une approche qui garantit des résultats mesurables en peu de temps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <div className="flex-1 bg-gray-100 p-3 rounded-md">
                <p className="text-red-600 font-medium">❌ 6 mois de cours classiques à 35€/h = beaucoup de temps, peu de résultats</p>
              </div>
              <div className="flex-1 bg-green-50 p-3 rounded-md">
                <p className="text-green-600 font-medium">✅ Un accompagnement structuré = progression assurée, sans stress et avec des résultats durables</p>
              </div>
            </div>
          </div>
          
          <div className="bg-light-blue/30 p-4 rounded-md">
            <p className="text-dark-blue font-semibold flex items-center">
              <Award size={20} className="mr-2 text-vibrant-orange" />
              Garantie Excellence : Si l'élève ne progresse pas en 2 mois, un suivi supplémentaire est offert gratuitement.
            </p>
          </div>
          
          <div className="mt-4 bg-vibrant-orange/10 p-4 rounded-md border border-vibrant-orange/20">
            <p className="text-center font-bold text-dark-blue">🔥 Attention : Forte demande ! 🔥</p>
            <p className="text-center text-gray-700">
              Chaque année, 1 élève sur 3 voit ses opportunités d'études supérieures compromises à cause des maths.
            </p>
            <p className="text-center font-bold text-dark-blue mt-2">
              ⚠️ Places ultra limitées ! : Pour garantir un accompagnement ultra personnalisé, je ne prends que 6 élèves par mois.
            </p>
          </div>
        </div>
        
        {/* Grid de prix avec cartes alignées */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Suivi Régulier */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden card-hover h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Suivi Régulier</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">460€</span>
                <span className="text-gray-500 ml-2">/mois</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">4 cours/mois (2h/séance)</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 mb-6 flex-grow">
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
              <Link to="/reserver?plan=mensuel" className="mt-auto">
                <ButtonCTA variant="dark" className="w-full">
                  Réserver
                </ButtonCTA>
              </Link>
            </div>
          </div>
          
          {/* Pack Accélération - mis en avant */}
          <div className="lg:col-span-6 bg-white rounded-lg shadow-xl border-2 border-vibrant-orange relative overflow-hidden card-hover h-full flex flex-col transform lg:scale-105 z-10">
            <div className="absolute -right-12 top-6 bg-vibrant-orange text-white py-1 px-12 rotate-45">
              Populaire
            </div>
            <div className="p-6 border-b border-gray-200 bg-dark-blue text-white">
              <h3 className="text-2xl font-bold mb-2">Accélération</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">900€</span>
                <span className="text-white/70 ml-2">/mois</span>
              </div>
              <p className="text-sm text-white/70 mt-2">8 cours/mois (2h/séance)</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Suivi premium 7j/7</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Progression accélérée</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Support illimité</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                  <span>Bilan détaillé mensuel</span>
                </li>
              </ul>
              <p className="text-center text-dark-blue font-medium mb-4 bg-blue-50 py-2 rounded-md">
                L'option préférée des parents et élèves pour des résultats rapides !
              </p>
              <Link to="/reserver?plan=intensif-mensuel" className="mt-auto">
                <ButtonCTA variant="gold" className="w-full">
                  Réserver
                </ButtonCTA>
              </Link>
            </div>
          </div>
          
          {/* À l'unité */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden card-hover h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">À l'unité</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">130€</span>
                <span className="text-gray-500 ml-2">/cours</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">2h minimum par séance</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 mb-6 flex-grow">
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
              <Link to="/reserver?plan=unitaire" className="mt-auto">
                <ButtonCTA variant="dark" className="w-full">
                  Réserver
                </ButtonCTA>
              </Link>
            </div>
          </div>
          
          {/* Pack Excellence */}
          <div className="lg:col-span-12 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden card-hover mt-6">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Pack Excellence (3 mois)</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">1350€</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">12 cours / 3 mois</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-start">
                <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                <span>Économie de 10%</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                <span>Progrès garantis</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                <span>Support premium 7j/7</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-vibrant-orange shrink-0 mt-1 mr-2" />
                <span>Bilan détaillé</span>
              </div>
              <div className="md:col-span-4 mt-4">
                <Link to="/reserver?plan=intensif">
                  <ButtonCTA variant="dark" className="w-full md:w-auto">
                    Réserver
                  </ButtonCTA>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section: Une approche unique et prouvée */}
        <div className="mt-16 max-w-4xl mx-auto bg-light-blue/20 rounded-lg p-6 border border-light-blue/30">
          <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center">📊 Une approche unique et prouvée : La Méthode Maths Réussite Academy</h3>
          <p className="text-gray-700 mb-4">
            Après plusieurs années d'enseignement et une cinquantaine d'élèves accompagnés, j'ai développé Maths Réussite Academy, une méthode exclusive basée sur la compréhension intuitive des maths et la mémoire active.
          </p>
          <p className="text-center text-xl font-bold text-vibrant-orange">
            🚀 100% des élèves appliquant cette méthode ont vu leurs notes s'améliorer !
          </p>
        </div>
        
        {/* Section: Diagnostic gratuit personnalisé */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center">📊 Recevez un diagnostic gratuit personnalisé</h3>
          <p className="text-gray-700 mb-4 text-center">
            Vous hésitez encore ? Faites le premier pas avec une analyse personnalisée de vos difficultés en maths !
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-light-blue/10 p-4 rounded-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center mb-3">
                <Check size={20} className="text-white" />
              </div>
              <p className="text-dark-blue">Un test rapide (10-15 min) pour identifier les blocages</p>
            </div>
            <div className="bg-light-blue/10 p-4 rounded-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center mb-3">
                <Check size={20} className="text-white" />
              </div>
              <p className="text-dark-blue">Un mini bilan personnalisé avec 2-3 points clés et recommandations adaptées</p>
            </div>
            <div className="bg-light-blue/10 p-4 rounded-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center mb-3">
                <Check size={20} className="text-white" />
              </div>
              <p className="text-dark-blue">Un appel découverte (10 min) pour discuter des résultats et proposer un plan d'action</p>
            </div>
          </div>
          <p className="text-center text-lg text-dark-blue mb-6">
            📩 Recevez une analyse personnalisée de vos points faibles en maths et découvrez comment les surmonter efficacement !
          </p>
          <div className="flex justify-center">
            <Link to="/reserver?type=diagnostic">
              <ButtonCTA variant="gold" size="lg">
                Demander mon diagnostic gratuit
              </ButtonCTA>
            </Link>
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
