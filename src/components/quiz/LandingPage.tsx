import { FC } from "react";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="font-serif text-[28px] leading-tight text-foreground">
          Redécouvrez la Paix avec la Nourriture
        </h1>

        <p className="font-sans text-base text-muted-foreground leading-relaxed">
          Ce questionnaire vous propose un temps de réflexion sur votre relation avec l'alimentation. 
          Il n'y a pas de bonnes ou de mauvaises réponses.
        </p>

        <p className="font-sans text-sm text-foreground">
          Seulement des points de vue précieux pour votre parcours.
        </p>

        <button
          onClick={onStart}
          className="btn-taupe w-[80%] h-12 text-base mx-auto block transition-transform duration-300 hover:scale-[1.02]"
        >
          Pour commencer
        </button>

        <p className="font-sans text-xs text-[hsl(var(--text-muted))] leading-relaxed px-4">
          En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
