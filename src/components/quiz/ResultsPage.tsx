import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackCtaClick, trackCheckoutRedirect } from "@/lib/analytics";
import EmotionalMirrorSection from "@/components/EmotionalMirrorSection";

interface ResultsPageProps {
  q8Answer: string;
}

const q8Content: Record<string, { subtitle: string; paragraph: string }> = {
  A: {
    subtitle: "Si vous avez répondu que la « fatigue de penser sans cesse à l'alimentation » est ce qui vous pèse le plus :",
    paragraph: "Imaginez récupérer toute l'énergie mentale que vous dépensez à penser à la nourriture, aux régimes, à la culpabilité. Cette énergie n'est pas infinie. Chaque pensée obsessive draine votre vitalité. Vous méritez d'utiliser cette énergie pour ce qui compte vraiment : votre famille, vos loisirs, votre carrière, votre paix intérieure.",
  },
  B: {
    subtitle: "Si vous avez répondu que la « culpabilité après chaque écart » est ce qui vous pèse le plus :",
    paragraph: "Chaque repas est devenu un champ de bataille interne. Cette culpabilité vole non seulement le goût des aliments, mais aussi la joie de vivre. Vous méritez la liberté de manger sans ce fardeau émotionnel, de savourer chaque repas comme un moment de plaisir et de nutrition, et non de regret.",
  },
  C: {
    subtitle: "Si vous avez répondu que le « sentiment d'être prisonnière de mon propre corps » est ce qui vous pèse le plus :",
    paragraph: "Votre corps n'est pas une prison. C'est un foyer que vous n'avez pas encore appris à habiter avec bienveillance. Il est temps de transformer cette sensation d'enfermement en un sanctuaire de paix et d'acceptation.",
  },
  D: {
    subtitle: "Si vous avez répondu que la « peur de ne jamais trouver de solution » est ce qui vous pèse le plus :",
    paragraph: "Cette peur est légitime. Vous avez déjà tant essayé. Mais et si la solution ne résidait pas dans un énième régime, mais dans une compréhension profonde et compatissante de vous-même ? Cette peur est peut-être le dernier obstacle avant la vraie paix.",
  },
};

const faqItems = [
  {
    question: "Q : Est-ce un régime ?",
    answer: "R : Non. C'est l'opposé. C'est une méthodologie pour sortir du cycle des régimes.",
  },
  {
    question: "Q : Vais-je perdre du poids ?",
    answer: "R : Ce programme aide votre corps à retrouver naturellement son équilibre en changeant votre relation avec la nourriture.",
  },
  {
    question: "Q : Est-ce adapté à la culture alimentaire française ?",
    answer: "R : Absolument. La méthode a été développée par Claire Beaumont, spécialiste française, et intègre les valeurs de plaisir et de convivialité.",
  },
];

const BEFORE_IMAGE_URL = "https://i.ibb.co/6JyBDjW3/Generatedimage-1770247574772.jpg";
const AFTER_IMAGE_URL = "https://i.ibb.co/VYC6xGM2/Generatedimage-1770247609084.jpg";
const EXPERT_PHOTO_URL = "https://i.ibb.co/pBdtpHLj/Editedimage-1770314159720.jpg";
const ResultsPage: FC<ResultsPageProps> = ({ q8Answer }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const personalizedContent = q8Content[q8Answer] || q8Content.A;

  const handleCheckout = (ctaLocation: string) => {
    trackCtaClick(ctaLocation);
    trackCheckoutRedirect();
    
    // Preserve UTM parameters
    const currentParams = new URLSearchParams(window.location.search);
    const checkoutUrl = new URL("https://pay.hotmart.com/I102336368S?off=fzx6oy4o&checkoutMode=10");
    
    // UTM parameters to preserve
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'src', 'sck'];
    utmParams.forEach(param => {
      const value = currentParams.get(param);
      if (value) {
        checkoutUrl.searchParams.set(param, value);
      }
    });
    
    window.location.href = checkoutUrl.toString();
  };

  return (
    <div className="min-h-screen bg-background px-6 py-10 animate-slide-up">
      <div className="max-w-lg mx-auto space-y-12">
        {/* Section 1: Diagnostic */}
        <section className="text-center space-y-5">
          <h1 className="font-serif text-xl text-foreground leading-tight">
            Votre Relation avec la Nourriture : Une Nouvelle Perspective
          </h1>
          
          {/* B1: Before/After Images */}
          <div className="grid grid-cols-2 gap-3 my-6">
            <div className="relative">
              <img
                src={BEFORE_IMAGE_URL}
                alt="Avant"
                className="w-full h-auto rounded-lg border border-border grayscale blur-[0.5px] saturate-50"
              />
              <span className="absolute bottom-2 left-2 text-xs font-sans text-white bg-black/50 px-2 py-0.5 rounded">
                Avant
              </span>
            </div>
            <div className="relative">
              <img
                src={AFTER_IMAGE_URL}
                alt="Après"
                className="w-full h-auto rounded-lg border border-border"
              />
              <span className="absolute bottom-2 left-2 text-xs font-sans text-white bg-black/50 px-2 py-0.5 rounded">
                Après
              </span>
            </div>
          </div>

          <p className="font-sans text-base text-foreground leading-relaxed">
            Basé sur vos réponses, une chose est claire : <strong>Vous n'avez pas échoué.</strong> Vous n'aviez simplement pas la bonne approche.
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed text-justify">
            Vos réponses révèlent que votre relation avec l'alimentation est profondément liée à vos émotions. Et ce n'est pas votre faute. Pendant des années, on vous a dit que c'était une question de calories, de portions, de discipline. Mais vous avez découvert ce que peu de gens comprennent : le problème n'est pas dans l'assiette, il est dans ce qui se passe avant d'ouvrir le réfrigérateur.
          </p>
        </section>

        {/* Section 2: Personalized Content */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl text-foreground text-center">
            Le Coût Caché de la Lutte avec la Nourriture
          </h2>
          <p className="font-serif text-base text-foreground">
            {personalizedContent.subtitle}
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed text-justify">
            {personalizedContent.paragraph}
          </p>
        </section>

        {/* Section 3: Comparison */}
        <section className="space-y-5">
          <h2 className="font-serif text-lg text-foreground text-center">
            Pourquoi les Solutions Traditionnelles ont Échoué
          </h2>
          <p className="font-sans text-sm text-foreground text-center">
            Les régimes vous ont appris à <strong>IGNORER</strong> votre corps.<br />
            Ce programme vous apprend à l'<strong>ÉCOUTER</strong>.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="card-subtle">
              <h3 className="font-sans text-sm font-semibold text-foreground mb-3">
                Régimes Traditionnels
              </h3>
              <ul className="font-sans text-sm text-foreground space-y-1">
                <li>• Résultats Temporaires</li>
                <li>• Focus sur le Poids</li>
              </ul>
            </div>
            <div className="card-subtle border-primary">
              <h3 className="font-sans text-sm font-semibold text-foreground mb-3">
                Méthode Équilibre Émotionnel™
              </h3>
              <ul className="font-sans text-sm text-foreground space-y-1">
                <li>• Équilibre Durable</li>
                <li>• Focus sur la Relation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: About Claire */}
        <section className="space-y-4">
          <h2 className="font-serif text-lg text-foreground text-center">
            Qui est Claire Beaumont ?
          </h2>
          
          {/* B2: Expert Photo */}
          <div className="flex justify-center">
            <img
              src={EXPERT_PHOTO_URL}
              alt="Claire Beaumont"
              className="w-40 h-48 rounded-lg object-cover border border-border shadow-sm"
            />
          </div>

          <p className="font-sans text-sm text-foreground leading-relaxed text-justify">
            Claire Beaumont est Spécialiste en Nutrition Comportementale et créatrice de la Méthode Équilibre Émotionnel™. Avec plus de 12 ans d'expérience, Claire a accompagné plus de 4 200 femmes dans leur transformation vers une relation sereine avec l'alimentation. Sa méthode unique combine les dernières avancées en psychologie alimentaire et en neurosciences, s'appuyant sur plus de 300 études scientifiques internationales. Sa mission : Aider les femmes à sortir de la guerre avec la nourriture et à reconquérir leur paix intérieure, sans régimes extrêmes, sans culpabilité, sans promesses vides.
          </p>
        </section>

        {/* Section 5: Method */}
        <section className="space-y-4">
          <h2 className="font-serif text-lg text-foreground text-center">
            La Méthode Équilibre Émotionnel™ : Votre Approche Unique
          </h2>
          <p className="font-sans text-sm text-foreground leading-relaxed text-justify">
            La Méthode Équilibre Émotionnel™ n'est pas un simple programme d'alimentation intuitive. C'est une approche soigneusement adaptée à la riche culture alimentaire française, qui valorise le plaisir, la convivialité et la qualité. Les 3 Piliers de la Méthode :
          </p>
          <ol className="font-sans text-sm text-foreground space-y-3 list-decimal list-inside">
            <li><strong>Reconnexion Corporelle :</strong> Apprenez à écouter les signaux de faim, de satiété et de satisfaction de votre corps.</li>
            <li><strong>Régulation Émotionnelle :</strong> Découvrez des outils efficaces pour gérer le stress et l'anxiété sans recourir à la nourriture.</li>
            <li><strong>Plaisir Alimentaire :</strong> Redécouvrez la joie de manger, en honorant la tradition française d'apprécier la bonne cuisine, sans culpabilité.</li>
          </ol>
        </section>

        {/* Section 6: Program Contents */}
        <section className="space-y-4">
          <h2 className="font-serif text-lg text-foreground text-center">
            Ce Que Vous Recevez : Votre Programme Complet sur Application
          </h2>
          <p className="font-sans text-sm text-foreground text-center">
            Accédez à tout le contenu directement sur votre téléphone, à tout moment.
          </p>
          <ul className="font-sans text-sm text-foreground space-y-2">
            <li>✓ Accès via Application Mobile (iOS/Android) : Une interface intuitive et élégante.</li>
            <li>✓ 12 Modules Guidés : 10 à 15 minutes de texte et audio par module.</li>
            <li>✓ Check-ins Émotionnels Quotidiens : Pour comprendre vos émotions en temps réel.</li>
            <li>✓ Journal de Relation Alimentaire : Un espace privé sans comptage de calories.</li>
            <li>✓ Exercices Pratiques et Bienveillants : Pour transformer la théorie en pratique.</li>
            <li>✓ Communauté Privée et Modérée : Un environnement sûr et accueillant.</li>
            <li>✓ Accès à Vie : Le programme est à vous pour toujours.</li>
            <li>✓ Mises à jour Incluses : Sans frais supplémentaires.</li>
          </ul>
        </section>

        {/* Section 7: Pricing */}
        <section className="space-y-4 card-subtle">
          <h2 className="font-serif text-lg text-foreground text-center">
            Votre Investissement pour la Paix et la Liberté
          </h2>
          <ul className="font-sans text-[13px] text-foreground space-y-1">
            <li>• Programme Complet (12 modules) : <span className="text-muted-foreground">Valeur 147 €</span></li>
            <li>• Accès à Vie à la Communauté Privée : <span className="text-muted-foreground">Valeur 324 €/an</span></li>
            <li>• Journal de Relation Alimentaire (App) : <span className="text-muted-foreground">Valeur 37 €</span></li>
            <li>• Exercices Pratiques Quotidiens : <span className="text-muted-foreground">Valeur 47 €</span></li>
            <li>• Mises à jour et Support Continu : <span className="text-muted-foreground">Valeur 67 €</span></li>
            <li className="pt-2 border-t border-border">• <strong>Valeur Totale Estimée : 622 €</strong></li>
          </ul>
          <p className="font-serif text-base text-foreground text-center font-semibold pt-2">
            Votre investissement aujourd'hui pour une vie de paix : <span className="text-xl">39 €</span>
          </p>
        </section>

        {/* Emotional Mirror Section */}
        <EmotionalMirrorSection q8Answer={q8Answer as "A" | "B" | "C" | "D"} />

        {/* Section 8: Testimonials */}
        <section className="space-y-4">
          <h2 className="font-serif text-lg text-foreground text-center">
            Ce Que Nos Élèves Disent
          </h2>
          <p className="font-sans text-xs text-muted-foreground text-center">
            Plus de 4 200 femmes accompagnées depuis 2014.
          </p>
          <div className="space-y-4">
            <div className="card-subtle">
              <p className="font-sans text-sm text-foreground italic leading-relaxed">
                "Pour la première fois, je ne suis plus en guerre avec mon corps. Claire m'a appris à l'écouter avec bienveillance."
              </p>
              <p className="font-sans text-xs text-muted-foreground text-right mt-3">
                — Sophie L., 34 ans
              </p>
            </div>
            <div className="card-subtle">
              <p className="font-sans text-sm text-foreground italic leading-relaxed">
                "Je ne pensais pas qu'il était possible de manger sans culpabilité. La Méthode Équilibre Émotionnel™ a changé ma vie."
              </p>
              <p className="font-sans text-xs text-muted-foreground text-right mt-3">
                — Isabelle R., 38 ans
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Guarantee */}
        <section className="space-y-4">
          <h2 className="font-serif text-lg text-foreground text-center">
            Garantie Sérénité 7 Jours
          </h2>
          <p className="font-sans text-sm text-foreground leading-relaxed text-justify">
            Si, pour une raison quelconque, le programme ne répond pas à vos attentes dans les 7 jours suivant l'achat, vous recevrez un remboursement intégral. Sans questions, sans jugement.
          </p>
        </section>

        {/* Section 10: FAQ */}
        <section className="space-y-4">
          <h2 className="font-serif text-lg text-foreground text-center">
            Questions Fréquentes (FAQ)
          </h2>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-card hover:bg-secondary transition-colors duration-300"
                >
                  <span className="font-sans text-sm font-semibold text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-sm text-foreground p-4 pt-0">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Final CTA */}
        <section className="space-y-5 text-center">
          <h2 className="font-serif text-lg text-foreground">
            Votre Paix Intérieure Vous Attend
          </h2>
          <p className="font-sans text-sm text-foreground">
            Vous méritez de manger en paix. Vous méritez de vivre en paix avec votre corps.
          </p>
          <button
            onClick={() => handleCheckout('final_cta')}
            className="btn-cta-green w-[85%] h-[54px] text-base font-semibold mx-auto block"
          >
            Commencer mon parcours vers la paix alimentaire
          </button>
          <p className="font-sans text-xs text-[hsl(var(--text-muted))]">
            Accès immédiat • Garantie 7 jours • Paiement sécurisé
          </p>
        </section>

        {/* Signature */}
        <section className="text-center space-y-1 pt-6">
          <p className="font-sans text-sm text-foreground">Avec bienveillance,</p>
          <p className="font-serif text-base text-foreground font-semibold">Claire Beaumont</p>
          <p className="font-sans text-xs text-muted-foreground">Spécialiste en Nutrition Comportementale</p>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 pb-4">
          <p className="font-sans text-[11px] text-[hsl(var(--text-muted))]">
            Conditions d'utilisation | Politique de confidentialité
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ResultsPage;
