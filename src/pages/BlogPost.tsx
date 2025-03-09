
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
        Les mathématiques peuvent être source de stress pour de nombreux élèves. Voici quelques techniques efficaces pour gérer l'anxiété et optimiser vos performances lors des contrôles.
        
        La préparation est essentielle pour réduire le stress. Commencez à réviser plusieurs jours avant le contrôle, en identifiant les concepts qui vous posent problème et en vous concentrant dessus.
        
        La respiration profonde est un excellent moyen de calmer son anxiété. Pratiquez la technique 4-7-8 : inspirez pendant 4 secondes, retenez votre souffle pendant 7 secondes, puis expirez pendant 8 secondes.
        
        La visualisation positive peut également vous aider. Imaginez-vous en train de réussir votre contrôle. Visualisez-vous en train de résoudre les problèmes avec confiance et sérénité. Cette technique est utilisée par de nombreux athlètes de haut niveau.
        
        Une bonne nuit de sommeil est cruciale avant un examen. Visez 8 heures de sommeil pour que votre cerveau puisse consolider vos connaissances et être au maximum de ses capacités.
        
        Enfin, soignez votre alimentation. Évitez les aliments trop sucrés ou trop gras avant un examen. Privilégiez les protéines et les glucides complexes qui fournissent une énergie durable.
      `,
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      date: "10 mai 2023"
    },
    {
      id: "2",
      title: "Pourquoi la régularité est plus efficace que le bachotage de dernière minute ?",
      content: `
        Le bachotage est une stratégie populaire mais inefficace à long terme. Découvrez pourquoi un apprentissage régulier est bien plus bénéfique.
        
        La mémoire à long terme face à la mémoire à court terme joue un rôle crucial. Lorsque vous révisez régulièrement, l'information est transférée de la mémoire à court terme vers la mémoire à long terme. Le bachotage, en revanche, surcharge la mémoire à court terme, ce qui diminue votre capacité à retenir les informations durablement.
        
        L'effet d'espacement a été prouvé par les recherches en neurosciences. Nous retenons mieux l'information lorsque nous l'étudions à plusieurs reprises avec des intervalles entre les sessions. Cette approche permet de consolider les connaissances efficacement.
        
        La régularité dans le travail entraîne également une réduction considérable du stress avant les examens. Vous vous sentez préparé et confiant, ce qui améliore naturellement vos performances.
        
        Un apprentissage étalé dans le temps permet aussi une compréhension plus profonde des concepts, plutôt qu'une simple mémorisation mécanique. Vous êtes capable de faire des liens entre les notions et de développer une vision plus globale du sujet.
        
        Enfin, en révisant régulièrement, vous avez le temps de mettre en pratique vos connaissances à travers des exercices variés, ce qui renforce votre maîtrise et votre capacité à appliquer les concepts dans différents contextes.
      `,
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      date: "25 avril 2023"
    },
    {
      id: "3",
      title: "Les 3 erreurs les plus fréquentes en maths et comment les éviter",
      content: `
        Certaines erreurs reviennent fréquemment dans les copies d'élèves. Apprenez à les identifier et à les éviter pour améliorer significativement vos résultats.
        
        Les erreurs de signe dans les calculs sont parmi les plus courantes. Une simple erreur de signe peut compromettre tout un calcul, menant à une réponse totalement incorrecte. Prenez l'habitude de vérifier systématiquement les signes, notamment lors des développements et factorisations.
        
        Ne pas vérifier ses résultats est une autre erreur répandue. Toujours vérifier votre réponse dans l'équation d'origine est une pratique essentielle. Cette simple habitude peut vous faire gagner de nombreux points et vous permet de repérer vos erreurs avant de rendre votre copie.
        
        La mauvaise interprétation des consignes constitue également un piège fréquent. Lisez attentivement l'énoncé et soulignez les mots-clés. Assurez-vous de bien comprendre ce qui est demandé avant de commencer à résoudre le problème pour ne pas perdre de temps à répondre à une question qui n'a pas été posée.
        
        Pour éviter ces pièges, travaillez méthodiquement et sans précipitation. Révisez soigneusement votre travail avant de le rendre et entraînez-vous régulièrement avec différents types de problèmes pour développer votre confiance et votre précision.
      `,
      imageUrl: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893",
      date: "18 mars 2023"
    },
    {
      id: "4",
      title: "Comment développer une mentalité de croissance en mathématiques",
      content: `
        La façon dont vous percevez vos capacités en mathématiques peut avoir un impact significatif sur vos performances et votre progression.
        
        La différence entre mentalité fixe et mentalité de croissance est fondamentale. Dans une mentalité fixe, on croit que l'intelligence est innée et ne peut pas évoluer. Dans une mentalité de croissance, on comprend que l'intelligence peut se développer avec l'effort et la persévérance. Cette seconde approche est particulièrement bénéfique pour progresser en mathématiques.
        
        Les erreurs ne doivent pas être perçues comme des échecs mais comme des opportunités d'apprentissage précieuses. Au lieu de les craindre, apprenez à les analyser pour comprendre vos points faibles et progresser continuellement.
        
        Le pouvoir du "pas encore" est un concept important à intégrer. Lorsque vous ne comprenez pas un concept, dites-vous que vous ne le comprenez "pas encore", plutôt que de penser que vous n'y arriverez jamais. Cette nuance psychologique peut transformer votre approche de l'apprentissage.
        
        Prenez le temps de reconnaître et célébrer vos progrès, même modestes. Cela renforce votre motivation et votre confiance, créant un cercle vertueux d'amélioration continue.
        
        N'hésitez jamais à demander de l'aide quand vous en avez besoin. C'est un signe de maturité, pas de faiblesse. Les meilleurs apprenants savent quand ils ont besoin d'assistance et n'hésitent pas à la solliciter.
      `,
      imageUrl: "https://images.unsplash.com/photo-1509869175650-a1d97972541a",
      date: "5 mars 2023"
    },
    {
      id: "5",
      title: "Les meilleures techniques de mémorisation pour les formules mathématiques",
      content: `
        La mémorisation des formules est essentielle en mathématiques. Voici des techniques éprouvées pour les retenir efficacement et les utiliser avec aisance.
        
        La répétition espacée est une méthode scientifiquement prouvée. Révisez les formules à intervalles croissants : après 1 jour, puis 3 jours, puis 7 jours, etc. Cette technique améliore significativement la rétention à long terme en renforçant les connexions neuronales.
        
        Les associations visuelles peuvent transformer des formules abstraites en images mémorables. Créez des images mentales associées aux formules. Plus ces images sont vivantes et inhabituelles, plus elles seront faciles à retenir lors d'un examen.
        
        L'enseignement à un tiers constitue une stratégie puissante. Expliquer une formule à quelqu'un d'autre vous oblige à la comprendre en profondeur et à la reformuler avec vos propres mots, ce qui renforce considérablement votre mémorisation.
        
        Les acronymes et moyens mnémotechniques peuvent simplifier la mémorisation de formules complexes. Créez des phrases dont les premières lettres correspondent aux éléments que vous devez mémoriser, transformant ainsi des informations abstraites en structures faciles à retenir.
        
        La meilleure approche reste toutefois de comprendre plutôt que de simplement mémoriser. La meilleure façon de retenir une formule est de comprendre d'où elle vient et comment elle a été dérivée. Cela vous permet de la recréer même si vous l'oubliez momentanément, et d'avoir une compréhension plus profonde de son application.
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
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between gap-4">
              <Link to="/blog">
                <ButtonCTA 
                  variant="dark" 
                  icon={<ArrowLeft size={18} />}
                >
                  Voir tous les articles
                </ButtonCTA>
              </Link>
              
              <Link to="/">
                <ButtonCTA variant="gold">
                  Retour à l'accueil
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
