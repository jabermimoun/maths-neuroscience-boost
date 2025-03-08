import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ButtonCTA from './ButtonCTA';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_7nj26yk';
const EMAILJS_TEMPLATE_ID = 'service_7nj26yk';
const EMAILJS_PUBLIC_KEY = 'FCNydsW7-7kmRFZDB';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-white/20 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-white"
        onClick={onClick}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-vibrant-orange" />
        ) : (
          <ChevronDown size={20} className="text-vibrant-orange" />
        )}
      </button>
      <div
        className={`mt-2 text-white/80 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqItems = [
    {
      question: "Mon enfant a beaucoup de lacunes, est-ce que votre méthode peut l'aider ?",
      answer: "Oui, même les élèves en grande difficulté progressent en quelques semaines grâce à une approche ciblée et progressive. La méthode neuroscientifique permet de reconstruire les bases manquantes tout en avançant sur le programme actuel."
    },
    {
      question: "Et si mon enfant ne progresse pas en 2 mois ?",
      answer: "Une garantie excellence est offerte : si aucun progrès n'est constaté après 2 mois de suivi régulier, des séances supplémentaires sont offertes gratuitement. Je m'engage sur des résultats concrets."
    },
    {
      question: "Où se passent les cours ?",
      answer: "Les cours se déroulent à votre domicile pour un maximum de confort et d'efficacité. Cela permet à l'élève d'évoluer dans un environnement familier et propice à l'apprentissage."
    },
    {
      question: "Comment sont structurés les cours ?",
      answer: "Chaque séance de 2h est divisée en trois parties : révision des notions précédentes, acquisition de nouveaux concepts, et mise en application par des exercices adaptés. Cette structure optimise l'apprentissage selon les principes des neurosciences."
    },
    {
      question: "Est-ce que vous proposez un suivi entre les cours ?",
      answer: "Oui, un support est disponible entre les séances pour répondre aux questions urgentes et assurer la continuité de l'apprentissage. Les élèves peuvent envoyer leurs questions par message."
    },
    {
      question: "Pourquoi utiliser les neurosciences en soutien scolaire ?",
      answer: "Les études montrent que le cerveau apprend mieux avec des techniques spécifiques (rappel actif, répétition espacée, etc.). Notre méthode exploite ces principes pour des progrès 3x plus rapides."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation basique
    if (!formData.name || !formData.email) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir au moins votre nom et votre email.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Préparation des données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        level: formData.level || 'Non spécifié',
        message: formData.message || 'Aucun message',
        to_name: 'Maths Réussite Academy',
        to_email: 'mathsreussiteacademy@hotmail.com',
        subject: `Nouvelle demande de contact - ${formData.name}`
      };
      
      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email envoyé avec succès:', response);
      
      toast({
        title: "Message envoyé !",
        description: "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        level: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ultérieurement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-dark-blue" id="faq">
      <div className="container px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              title="Questions fréquentes" 
              subtitle="Tout ce que vous devez savoir sur les cours particuliers"
              light
            />
            
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">Contactez-moi</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vibrant-orange focus:border-vibrant-orange"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vibrant-orange focus:border-vibrant-orange"
                    placeholder="Votre email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                    Niveau de l'élève
                  </label>
                  <select
                    id="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vibrant-orange focus:border-vibrant-orange"
                  >
                    <option value="">Sélectionnez un niveau</option>
                    <option value="primaire">Primaire</option>
                    <option value="secondaire">Secondaire</option>
                    <option value="superieur">Études supérieures</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vibrant-orange focus:border-vibrant-orange"
                    placeholder="Décrivez brièvement vos besoins ou vos questions"
                  ></textarea>
                </div>
                
                <ButtonCTA 
                  variant="gold" 
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </ButtonCTA>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
