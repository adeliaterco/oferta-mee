import { FC, useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface EmotionalMirrorSectionProps {
  q8Answer: "A" | "B" | "C" | "D";
}

interface TransformationStory {
  profile: "A" | "B" | "C" | "D";
  name: string;
  initial: string;
  city: string;
  age: number;
  beforeEmotion: string;
  afterEmotion: string;
  quote: string;
  color: string;
}

const transformationStories: TransformationStory[] = [
  // PERFIL A - Fatigue mentale
  {
    profile: "A",
    name: "Sophie",
    initial: "S",
    city: "Paris",
    age: 34,
    beforeEmotion: "Obsession alimentaire",
    afterEmotion: "Esprit libéré",
    quote: "Je peux enfin penser à autre chose qu'à la nourriture. Mon esprit est libre.",
    color: "#E8B4F0"
  },
  {
    profile: "A",
    name: "Camille",
    initial: "C",
    city: "Lyon",
    age: 29,
    beforeEmotion: "Épuisement mental",
    afterEmotion: "Énergie retrouvée",
    quote: "Je ne savais pas qu'on pouvait vivre sans cette fatigue constante.",
    color: "#B4D4F0"
  },
  {
    profile: "A",
    name: "Léa",
    initial: "L",
    city: "Bordeaux",
    age: 31,
    beforeEmotion: "Pensées obsessives",
    afterEmotion: "Clarté mentale",
    quote: "C'est comme si un brouillard s'était levé. Je me sens enfin présente.",
    color: "#F0D4B4"
  },
  {
    profile: "A",
    name: "Juliette",
    initial: "J",
    city: "Toulouse",
    age: 37,
    beforeEmotion: "Rumination constante",
    afterEmotion: "Paix intérieure",
    quote: "Je ne passe plus mes journées à calculer, planifier, regretter.",
    color: "#D4F0B4"
  },

  // PERFIL B - Culpabilité
  {
    profile: "B",
    name: "Isabelle",
    initial: "I",
    city: "Marseille",
    age: 38,
    beforeEmotion: "Culpabilité constante",
    afterEmotion: "Liberté alimentaire",
    quote: "Je mange sans cette voix critique dans ma tête. Quelle libération.",
    color: "#F0B4C8"
  },
  {
    profile: "B",
    name: "Élise",
    initial: "É",
    city: "Nantes",
    age: 33,
    beforeEmotion: "Honte et regret",
    afterEmotion: "Acceptation sereine",
    quote: "Chaque repas est redevenu un moment de plaisir, pas de punition.",
    color: "#C8F0B4"
  },
  {
    profile: "B",
    name: "Marine",
    initial: "M",
    city: "Strasbourg",
    age: 28,
    beforeEmotion: "Jugement constant",
    afterEmotion: "Bienveillance",
    quote: "J'ai appris à me parler avec douceur. Tout a changé.",
    color: "#B4E8F0"
  },
  {
    profile: "B",
    name: "Chloé",
    initial: "C",
    city: "Lille",
    age: 35,
    beforeEmotion: "Guerre intérieure",
    afterEmotion: "Réconciliation",
    quote: "Je ne suis plus mon propre ennemi. C'est incroyable.",
    color: "#F0E8B4"
  },

  // PERFIL C - Prisonnière du corps
  {
    profile: "C",
    name: "Aurélie",
    initial: "A",
    city: "Paris",
    age: 41,
    beforeEmotion: "Prisonnière de mon corps",
    afterEmotion: "Réconciliation profonde",
    quote: "Mon corps n'est plus une prison. C'est mon foyer.",
    color: "#E8C8F0"
  },
  {
    profile: "C",
    name: "Mathilde",
    initial: "M",
    city: "Lyon",
    age: 30,
    beforeEmotion: "Déconnexion corporelle",
    afterEmotion: "Harmonie retrouvée",
    quote: "J'ai réappris à habiter mon corps avec bienveillance.",
    color: "#F0C8D4"
  },
  {
    profile: "C",
    name: "Anaïs",
    initial: "A",
    city: "Nice",
    age: 36,
    beforeEmotion: "Rejet de soi",
    afterEmotion: "Acceptation douce",
    quote: "Je me regarde dans le miroir et je souris. Enfin.",
    color: "#C8E8F0"
  },
  {
    profile: "C",
    name: "Pauline",
    initial: "P",
    city: "Rennes",
    age: 32,
    beforeEmotion: "Combat quotidien",
    afterEmotion: "Paix corporelle",
    quote: "Je ne me bats plus contre moi-même. Quelle légèreté.",
    color: "#F0D4C8"
  },

  // PERFIL D - Peur de ne jamais changer
  {
    profile: "D",
    name: "Virginie",
    initial: "V",
    city: "Bordeaux",
    age: 39,
    beforeEmotion: "Désespoir",
    afterEmotion: "Espoir retrouvé",
    quote: "Si j'avais su que c'était possible... J'aurais commencé plus tôt.",
    color: "#D4C8F0"
  },
  {
    profile: "D",
    name: "Caroline",
    initial: "C",
    city: "Marseille",
    age: 42,
    beforeEmotion: "Résignation",
    afterEmotion: "Transformation réelle",
    quote: "Après tant d'échecs, je n'y croyais plus. Et pourtant.",
    color: "#F0C8B4"
  },
  {
    profile: "D",
    name: "Émilie",
    initial: "É",
    city: "Paris",
    age: 27,
    beforeEmotion: "Peur de l'échec",
    afterEmotion: "Confiance nouvelle",
    quote: "Cette fois, c'est différent. Je le sens dans tout mon être.",
    color: "#C8F0D4"
  },
  {
    profile: "D",
    name: "Laura",
    initial: "L",
    city: "Toulouse",
    age: 34,
    beforeEmotion: "Doute permanent",
    afterEmotion: "Certitude apaisée",
    quote: "Je sais maintenant que le changement est possible. Je le vis.",
    color: "#F0B4D4"
  },
];

const validationTexts: Record<string, string> = {
  A: "Si vous ressentez cette fatigue mentale constante... 127 femmes françaises ont retrouvé leur énergie et leur clarté d'esprit.",
  B: "Si cette culpabilité vous épuise... 134 femmes françaises mangent désormais en paix, sans jugement.",
  C: "Si vous vous sentez prisonnière... 119 femmes françaises se sont réconciliées avec leur corps.",
  D: "Si vous avez peur que rien ne fonctionne... 142 femmes françaises ont découvert qu'un autre chemin existait.",
};

const EmotionalMirrorSection: FC<EmotionalMirrorSectionProps> = ({ q8Answer }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Filtrar histórias baseado no perfil
  const filteredStories = transformationStories.filter(
    (story) => story.profile === q8Answer
  );
  const displayStories = filteredStories.length > 0 ? filteredStories : transformationStories.slice(0, 4);

  // Rotação automática
  useEffect(() => {
    if (!isGalleryOpen) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % displayStories.length);
        setIsAnimating(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, [isGalleryOpen, displayStories.length]);

  // Touch handlers para swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % displayStories.length);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex((prev) => (prev - 1 + displayStories.length) % displayStories.length);
    }
  };

  // Navegação por teclado
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + displayStories.length) % displayStories.length);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % displayStories.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, displayStories.length]);

  const currentStory = displayStories[currentIndex];

  return (
    <section className="space-y-4">
      {/* Header de Validação */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>

        <h2 className="font-serif text-lg text-foreground">
          Vous n'êtes pas seule
        </h2>

        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          {validationTexts[q8Answer] || validationTexts.A}
        </p>

        <button
          onClick={() => setIsGalleryOpen(!isGalleryOpen)}
          className="font-sans text-sm text-primary underline hover:text-primary/80 transition-colors"
        >
          {isGalleryOpen ? "Masquer" : "Découvrir leurs parcours →"}
        </button>
      </div>

      {/* Galeria de Transformações */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isGalleryOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`card-subtle border-primary p-5 transition-opacity duration-300 ${
            isAnimating ? "opacity-50" : "opacity-100"
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header com inicial */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif text-lg font-semibold shadow-sm"
              style={{ backgroundColor: currentStory.color }}
            >
              <span className="drop-shadow-sm">
                {currentStory.initial}
              </span>
            </div>

            <div>
              <p className="font-serif text-base text-foreground font-semibold">
                {currentStory.name}
              </p>
              <p className="font-sans text-xs text-muted-foreground">
                {currentStory.age} ans · {currentStory.city}
              </p>
            </div>
          </div>

          {/* Avant/Après Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Avant */}
            <div className="bg-secondary/50 rounded-lg p-3 text-center">
              <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                Avant
              </p>
              <p className="font-sans text-sm text-foreground font-medium">
                {currentStory.beforeEmotion}
              </p>
            </div>

            {/* Après */}
            <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Sparkles className="w-2.5 h-2.5 text-primary" />
              </div>
              <p className="font-sans text-[10px] text-primary uppercase tracking-wider mb-1">
                Aujourd'hui
              </p>
              <p className="font-sans text-sm text-foreground font-medium">
                {currentStory.afterEmotion}
              </p>
            </div>
          </div>

          {/* Citação */}
          <blockquote className="font-serif text-sm text-foreground italic text-center leading-relaxed mb-4">
            "{currentStory.quote}"
          </blockquote>

          {/* Indicadores de paginação */}
          <div className="flex items-center justify-center gap-2">
            {displayStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Voir transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalMirrorSection;
