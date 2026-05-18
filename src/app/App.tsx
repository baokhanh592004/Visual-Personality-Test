import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { QuizInterface } from "./components/QuizInterface";
import { ResultsPage } from "./components/ResultsPage";
import { LanguageToggle } from "./components/LanguageToggle";

type Screen = "landing" | "quiz" | "results";
type Language = "en" | "vi";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [answers, setAnswers] = useState<string[]>([]);
  const [language, setLanguage] = useState<Language>("en");

  const handleStart = () => {
    setCurrentScreen("quiz");
    setAnswers([]);
  };

  const handleComplete = (finalAnswers: string[]) => {
    setAnswers(finalAnswers);
    setCurrentScreen("results");
  };

  const handleRestart = () => {
    setCurrentScreen("landing");
    setAnswers([]);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <div className="size-full">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      {currentScreen === "landing" && (
        <LandingPage onStart={handleStart} language={language} />
      )}
      {currentScreen === "quiz" && (
        <QuizInterface onComplete={handleComplete} language={language} />
      )}
      {currentScreen === "results" && (
        <ResultsPage
          answers={answers}
          onRestart={handleRestart}
          language={language}
        />
      )}
    </div>
  );
}