import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarIcon, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_7nj26yk';
const EMAILJS_TEMPLATE_ID = 'template_8oqwc9f';
const EMAILJS_PUBLIC_KEY = 'FCNydsW7-7kmRFZDB';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get any pre-selected plan from URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const plan = searchParams.get('plan');
    const type = searchParams.get('type');
    
    if (type === 'diagnostic') {
      setMessage("Je souhaite recevoir un diagnostic gratuit personnalisé.");
    } else if (plan) {
      const planMessages: Record<string, string> = {
        'mensuel': "Je suis intéressé(e) par l'offre Suivi Régulier (4 cours/mois).",
        'intensif-mensuel': "Je suis intéressé(e) par l'offre Accélération (8 cours/mois).",
        'intensif': "Je suis intéressé(e) par le Pack Excellence (12 cours/3 mois).",
        'unitaire': "Je suis intéressé(e) par un cours à l'unité."
      };
      
      if (planMessages[plan]) {
        setMessage(planMessages[plan]);
      }
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation basique
    if (!name || !email || !phone || !date) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Formatage des informations pour l'email
    const formattedDate = date ? format(date, 'PPP', { locale: fr }) : '';
    
    try {
      // Préparation des données pour EmailJS
      const templateParams = {
        from_name: name,
        email: email,
        phone: phone,
        date: formattedDate,
        message: message || 'Aucun message',
        to_name: 'Maths Réussite Academy',
        to_email: 'mathsreussiteacademy@hotmail.com',
        subject: `Nouvelle réservation de cours - ${name}`
      };

      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email envoyé avec succès:', response);

      // Affichage d'une confirmation à l'utilisateur
      toast({
        title: "Réservation envoyée !",
        description: `Votre demande pour le ${formattedDate} a bien été prise en compte. Nous vous contacterons rapidement.`
      });

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setDate(undefined);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ultérieurement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour déterminer si une date est dans le passé
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <div className="container px-6 lg:px-8">
        <Button onClick={() => navigate(-1)} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <h1 className="text-4xl font-bold text-[#000000] mb-8">
          Réserver un cours
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Formulaire de réservation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Votre nom et prénom" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="04 XX XX XX XX" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date souhaitée *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP', {
                      locale: fr
                    }) : <span>Choisir une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar 
                      mode="single" 
                      selected={date} 
                      onSelect={setDate} 
                      initialFocus 
                      locale={fr} 
                      disabled={isPastDate}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message (facultatif)</Label>
                <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Précisez votre demande..." rows={4} />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-vibrant-orange hover:bg-vibrant-orange/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de réservation'}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pourquoi réserver ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-vibrant-orange text-white flex items-center justify-center mr-3 mt-1">1</span>
                  <div>
                    <h3 className="font-medium">Diagnostic personnalisé</h3>
                    <p className="text-gray-600">Un bilan complet pour identifier précisément les lacunes et points forts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-vibrant-orange text-white flex items-center justify-center mr-3 mt-1">2</span>
                  <div>
                    <h3 className="font-medium">Plan d'action sur mesure</h3>
                    <p className="text-gray-600">Une stratégie adaptée pour des progrès rapides et durables.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-vibrant-orange text-white flex items-center justify-center mr-3 mt-1">3</span>
                  <div>
                    <h3 className="font-medium">Résultats garantis</h3>
                    <p className="text-gray-600">Une méthode qui a fait ses preuves, basée sur les neurosciences.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-blue text-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Informations pratiques</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gold">Horaires disponibles</h3>
                  <p>Du lundi au vendredi : 14h - 20h</p>
                  <p>Samedi : 10h - 18h</p>
                  <p>Dimanche : 10h - 18h</p>
                </div>
                <div>
                  <h3 className="font-medium text-gold">Où se déroulent les cours ?</h3>
                  <p>Les cours ont lieu à votre domicile sur Bruxelles et en périphérie</p>
                </div>
                <div>
                  <h3 className="font-medium text-gold">Délai de réponse</h3>
                  <p>Nous vous répondons sous 24h maximum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
