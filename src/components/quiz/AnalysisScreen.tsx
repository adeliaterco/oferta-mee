import { FC, useState, useEffect } from "react";

interface AnalysisScreenProps {
  onComplete: () => void;
}

const analysisMessages = [
  "Analyse de vos réponses en cours...",
  "Identification de votre profil comportemental...",
  "Personnalisation de votre parcours de paix alimentaire...",
];

const AnalysisScreen: FC<AnalysisScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    // Progress animation over 5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Message transitions
    const messageTimings = [0, 2000, 4000];
    
    messageTimings.forEach((timing, index) => {
      setTimeout(() => {
        if (index > 0) {
          setFadeState("out");
          setTimeout(() => {
            setMessageIndex(index);
            setFadeState("in");
          }, 300);
        }
      }, timing);
    });

    // Complete after 5 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-10">
        <h1 className="font-serif text-[22px] text-foreground">
          Analyse de Vos Réponses...
        </h1>

        {/* Progress Bar */}
        <div className="w-[70%] mx-auto">
          <div className="h-1.5 bg-progress-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Dynamic Message */}
        <p
          className={`font-sans text-base text-foreground leading-relaxed min-h-[48px] transition-opacity duration-300 ${
            fadeState === "in" ? "opacity-100" : "opacity-0"
          }`}
        >
          {analysisMessages[messageIndex]}
        </p>
      </div>
    </div>
  );
};

export default AnalysisScreen;
