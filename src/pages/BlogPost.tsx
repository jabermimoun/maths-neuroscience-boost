
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ButtonCTA from '@/components/ButtonCTA';

const BlogPost = () => {
  const { id } = useParams();
  
  // Simulation de base de données d'articles
  const articles = [
    {
      id: "1",
      title: "Comment vaincre son stress avant un contrôle de maths ?",
      content: `
        Les mathématiques peuvent être source de stress pour de nombreux élèves. Voici quelques techniques efficaces pour gérer l'anxiété et optimiser vos performances lors des contrôles...
        
        1. La préparation est clé
        Une bonne préparation est essentielle pour réduire le stress. Commencez à réviser plusieurs jours avant le contrôle, en identifiant les concepts qui vous posent problème et en vous concentrant dessus.
        
        2. Techniques de respiration
        La respiration profonde est un excellent moyen de calmer son anxiété. Pratiquez la technique 4-7-8 : inspirez pendant 4 secondes, retenez votre souffle pendant 7 secondes, puis expirez pendant 8 secondes.
        
        3. Visualisation positive
        Imaginez-vous en train de réussir votre contrôle. Visualisez-vous en train de résoudre les problèmes avec confiance et sérénité. Cette technique est utilisée par de nombreux athlètes de haut niveau.
        
        4. Dormir suffisamment
        Une bonne nuit de sommeil est cruciale avant un examen. Visez 8 heures de sommeil pour que votre cerveau puisse consolider vos connaissances et être au maximum de ses capacités.
        
        5. Alimentation équilibrée
        Évitez les aliments trop sucrés ou trop gras avant un examen. Privilégiez les protéines et les glucides complexes qui fournissent une énergie durable.
      `,
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      date: "10 mai 2023"
    },
    {
      id: "2",
      title: "Pourquoi la régularité est plus efficace que le bachotage de dernière minute ?",
      content: `
        Le bachotage est une stratégie populaire mais inefficace à long terme. Découvrez pourquoi un apprentissage régulier est bien plus bénéfique.
        
        1. La mémoire à long terme vs mémoire à court terme
        Lorsque vous révisez régulièrement, l'information est transférée de la mémoire à court terme vers la mémoire à long terme. Le bachotage, en revanche, surcharge la mémoire à court terme.
        
        2. L'effet d'espacement
        Les recherches en neurosciences montrent que nous retenons mieux l'information lorsque nous l'étudions à plusieurs reprises avec des intervalles entre les sessions.
        
        3. Réduction du stress
        Réviser régulièrement réduit considérablement le stress avant les examens, car vous vous sentez préparé et confiant.
        
        4. Meilleure compréhension
        Un apprentissage régulier permet une compréhension plus profonde des concepts, plutôt qu'une simple mémorisation.
        
        5. Application pratique
        En révisant régulièrement, vous avez le temps de mettre en pratique vos connaissances à travers des exercices variés, ce qui renforce votre maîtrise.
      `,
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      date: "25 avril 2023"
    },
    {
      id: "3",
      title: "Les 3 erreurs les plus fréquentes en maths et comment les éviter",
      content: `
        Certaines erreurs reviennent fréquemment dans les copies d'élèves. Apprenez à les identifier et à les éviter.
        
        1. Les erreurs de signe dans les calculs
        Une simple erreur de signe peut compromettre tout un calcul. Prenez l'habitude de vérifier systématiquement les signes, notamment lors des développements et factorisations.
        
        2. Ne pas vérifier ses résultats
        Toujours vérifier votre réponse dans l'équation d'origine. Cette simple habitude peut vous faire gagner de nombreux points.
        
        3. Mauvaise interprétation des consignes
        Lisez attentivement l'énoncé et soulignez les mots-clés. Assurez-vous de bien comprendre ce qui est demandé avant de commencer à résoudre.
        
        Comment éviter ces pièges ?
        - Travaillez méthodiquement et sans précipitation
        - Révisez votre travail avant de le rendre
        - Entraînez-vous régulièrement avec différents types de problèmes
      `,
      imageUrl: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893",
      date: "18 mars 2023"
    },
    {
      id: "4",
      title: "Comment développer une mentalité de croissance en mathématiques",
      content: `
        La façon dont vous percevez vos capacités en mathématiques peut avoir un impact significatif sur vos performances.
        
        1. La mentalité fixe vs la mentalité de croissance
        Dans une mentalité fixe, on croit que l'intelligence est innée et ne peut pas évoluer. Dans une mentalité de croissance, on comprend que l'intelligence peut se développer avec l'effort et la persévérance.
        
        2. L'importance des erreurs
        Les erreurs sont des opportunités d'apprentissage précieuses. Au lieu de les craindre, apprenez à les analyser pour progresser.
        
        3. Le pouvoir du "pas encore"
        Lorsque vous ne comprenez pas un concept, dites-vous que vous ne le comprenez "pas encore", plutôt que de penser que vous n'y arriverez jamais.
        
        4. Célébrer les progrès
        Prenez le temps de reconnaître vos progrès, même modestes. Cela renforce votre motivation et votre confiance.
        
        5. Demander de l'aide
        N'hésitez pas à demander de l'aide quand vous en avez besoin. C'est un signe de maturité, pas de faiblesse.
      `,
      imageUrl: "https://images.unsplash.com/photo-1509869175650-a1d97972541a",
      date: "5 mars 2023"
    },
    {
      id: "5",
      title: "Les meilleures techniques de mémorisation pour les formules mathématiques",
      content: `
        La mémorisation des formules est essentielle en mathématiques. Voici des techniques éprouvées pour les retenir efficacement.
        
        1. La répétition espacée
        Révisez les formules à intervalles croissants : après 1 jour, puis 3 jours, puis 7 jours, etc. Cette technique est scientifiquement prouvée pour améliorer la rétention à long terme.
        
        2. Les associations visuelles
        Créez des images mentales associées aux formules. Plus ces images sont vivantes et absurdes, plus elles seront mémorables.
        
        3. L'enseignement à un tiers
        Expliquer une formule à quelqu'un d'autre vous oblige à la comprendre en profondeur, ce qui renforce votre mémorisation.
        
        4. Les acronymes et moyens mnémotechniques
        Créez des phrases dont les premières lettres correspondent aux éléments que vous devez mémoriser.
        
        5. Comprendre plutôt que mémoriser
        La meilleure façon de retenir une formule est de comprendre d'où elle vient et comment elle a été dérivée. Cela vous permet de la recréer même si vous l'oubliez.
      `,
      imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3",
      date: "20 février 2023"
    },
  ];
  
  // Trouver l'article correspondant à l'ID
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-[#F5F5F5]">
        <div className="container px-6 py-20 lg:px-8">
          <Link to="/blog" className="mb-8 inline-block">
            <ButtonCTA 
              variant="dark" 
              size="sm"
              icon={<ArrowLeft size={18} />}
            >
              Retour au blog
            </ButtonCTA>
          </Link>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[#000000] mb-6">
              Article non trouvé
            </h1>
            <p className="text-gray-700 mb-4">
              Désolé, l'article que vous recherchez n'existe pas ou a été déplacé.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container px-6 py-20 lg:px-8">
        <Link to="/blog" className="mb-8 inline-block">
          <ButtonCTA 
            variant="dark" 
            size="sm"
            icon={<ArrowLeft size={18} />}
          >
            Retour au blog
          </ButtonCTA>
        </Link>
        
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>
            <h1 className="text-3xl font-bold text-[#000000] mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link to="/blog">
                <ButtonCTA 
                  variant="dark" 
                  icon={<ArrowLeft size={18} />}
                >
                  Voir tous les articles
                </ButtonCTA>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
