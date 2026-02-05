import { FC, useState, useEffect } from "react";
import { QuizQuestion as QuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: QuestionType;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (questionId: number, answerId: string) => void;
  savedAnswer?: string;
}

const QuizQuestion: FC<QuizQuestionProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  savedAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(savedAnswer || null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setSelectedOption(savedAnswer || null);
    setIsTransitioning(false);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timer);
  }, [question.id, savedAnswer]);

  const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;

  const handleOptionSelect = (optionId: string) => {
    if (isTransitioning) return;
    
    setSelectedOption(optionId);
    setIsTransitioning(true);
    
    // Auto-advance after a short delay for visual feedback
    setTimeout(() => {
      onAnswer(question.id, optionId);
    }, 280);
  };

  return (
    <div className={`min-h-screen bg-background flex flex-col px-6 py-8 transition-opacity duration-400 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Progress Bar */}
      <div className="w-full h-[3px] bg-progress-bg rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-foreground rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Question Number */}
      <p className="font-sans text-xs text-muted-foreground mb-4">
        Question {currentQuestion} de {totalQuestions}
      </p>

      {/* Question Text */}
      <h2 className="font-serif text-lg text-foreground leading-relaxed mb-8">
        {question.question}
      </h2>

      {/* Options - Now clickable cards that auto-advance */}
      <div className="flex-1 space-y-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            disabled={isTransitioning}
            className={`w-full flex items-start gap-4 p-4 rounded-lg text-left transition-all duration-200 border ${
              selectedOption === option.id
                ? "border-primary bg-secondary shadow-sm scale-[1.01]"
                : "border-border bg-card hover:border-primary/50 hover:bg-secondary/30 active:scale-[0.99]"
            } ${isTransitioning ? 'pointer-events-none' : ''}`}
          >
            <div className="relative flex-shrink-0 mt-0.5">
              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  selectedOption === option.id
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {selectedOption === option.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                )}
              </div>
            </div>
            <span className="font-sans text-sm text-foreground leading-relaxed">
              {option.text}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default QuizQuestion;
