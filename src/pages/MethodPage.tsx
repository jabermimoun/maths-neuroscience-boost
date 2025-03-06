
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const MethodPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <div className="container px-6 lg:px-8">
        <Button 
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <h1 className="text-4xl font-bold text-[#000000] mb-8">
          Notre Méthode
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2>Une approche basée sur les neurosciences</h2>
            <p>
              Notre méthode unique combine les dernières découvertes en neurosciences
              avec une pédagogie éprouvée pour garantir des progrès rapides et durables.
            </p>
            
            <h3>Les points clés de notre méthode :</h3>
            <ul>
              <li>Évaluation personnalisée des besoins</li>
              <li>Plan d'apprentissage adapté</li>
              <li>Suivi régulier des progrès</li>
              <li>Exercices ciblés et progressifs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodPage;
