import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { questionData, personalityProfiles, translations } from "../data/translations";

interface QuizInterfaceProps {
  onComplete: (answers: string[]) => void;
  language: "en" | "vi";
}

const images = [
  "/src/imports/illusion-1.png",
  "/src/imports/illusion-2.png",
  "/src/imports/illusion-3.png",
  "/src/imports/illusion-4.png",
  "/src/imports/illusion-5.png",
  "/src/imports/illusion-6.png",
];

export function QuizInterface({ onComplete, language }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedResult, setSelectedResult] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const t = translations[language].quiz;
  const questions = questionData[language];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const closeModal = () => setSelectedResult(null);

  const handleAnswer = (trait: string) => {
    if (isTransitioning) return;

    const newAnswers = [...answers, trait];
    const option = question.options.find((item) => item.trait === trait);
    const profile = personalityProfiles[language][trait as keyof (typeof personalityProfiles)["en"]];

    setAnswers(newAnswers);
    setSelectedResult(
      option && profile
        ? {
            title: profile.title,
            description: profile.description,
          }
        : null,
    );
    setIsTransitioning(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-purple-950 to-blue-950 overflow-hidden">
      <div className="w-full h-1 bg-gray-800/50 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-gray-400">
            {t.questionCounter} {currentQuestion + 1} {language === "en" ? "of" : "/"} {questions.length}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={images[currentQuestion]}
                  alt={`Illusion ${question.id}`}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </motion.div>

              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t.question}
                </h2>
                <p className="text-gray-400">{t.instinct}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.trait)}
                    className="group relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-left overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isTransitioning}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300" />
                    <div className="relative">
                      <div className="text-xl font-semibold text-white mb-2">
                        {option.text}
                      </div>
                      <div className="text-sm text-gray-400">
                        {option.description}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedResult && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 p-6 md:p-8 shadow-2xl"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-purple-200">
                Personality Result
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {selectedResult.title}
              </h3>

              <p className="text-base md:text-lg leading-7 text-gray-300">
                {selectedResult.description}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
