import { useState, useCallback, useEffect, useRef } from "react";
import LandingPage from "@/components/quiz/LandingPage";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import AnalysisScreen from "@/components/quiz/AnalysisScreen";
import ResultsPage from "@/components/quiz/ResultsPage";
import { quizQuestions } from "@/data/quizQuestions";
import {
  trackLandingView,
  trackQuizStart,
  trackQuestionView,
  trackQuestionAnswer,
  trackQuizComplete,
  trackAnalysisView,
  trackResultsView,
  trackPageExit
} from "@/lib/analytics";

type Screen = "landing" | "quiz" | "analysis" | "results";

interface QuizAnswers {
  [questionId: number]: string;
}

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const screenStartTime = useRef<number>(Date.now());

  // Track landing page view on mount
  useEffect(() => {
    trackLandingView();
    screenStartTime.current = Date.now();

    // Track exit on page unload
    const handleBeforeUnload = () => {
      const screenNames: Record<Screen, string> = {
        landing: 'Landing Page',
        quiz: `Quiz Question ${currentQuestionIndex + 1}`,
        analysis: 'Analysis Screen',
        results: 'Results Page'
      };
      trackPageExit(screenNames[currentScreen], Date.now() - screenStartTime.current);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentScreen, currentQuestionIndex]);

  // Track question views
  useEffect(() => {
    if (currentScreen === "quiz") {
      trackQuestionView(currentQuestionIndex + 1, quizQuestions.length);
    }
  }, [currentScreen, currentQuestionIndex]);

  const handleStart = useCallback(() => {
    trackQuizStart();
    screenStartTime.current = Date.now();
    setCurrentScreen("quiz");
  }, []);

  const handleAnswer = useCallback(
    (questionId: number, answerId: string) => {
      const newAnswers = { ...answers, [questionId]: answerId };
      setAnswers(newAnswers);

      // Track the answer
      trackQuestionAnswer(currentQuestionIndex + 1, answerId);

      // Store in localStorage
      localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        // Quiz completed, show analysis
        trackQuizComplete();
        screenStartTime.current = Date.now();
        setCurrentScreen("analysis");
      }
    },
    [answers, currentQuestionIndex]
  );

  const handleAnalysisComplete = useCallback(() => {
    trackAnalysisView();
    screenStartTime.current = Date.now();
    setCurrentScreen("results");
  }, []);

  // Track results view when screen changes to results
  useEffect(() => {
    if (currentScreen === "results") {
      const q8 = answers[8] || "A";
      trackResultsView(q8);
    }
  }, [currentScreen, answers]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const q8Answer = answers[8] || "A"; // Default to A if not answered

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "landing" && <LandingPage onStart={handleStart} />}

      {currentScreen === "quiz" && currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
          savedAnswer={answers[currentQuestion.id]}
        />
      )}

      {currentScreen === "analysis" && (
        <AnalysisScreen onComplete={handleAnalysisComplete} />
      )}

      {currentScreen === "results" && <ResultsPage q8Answer={q8Answer} />}
    </div>
  );
};

export default Index;
