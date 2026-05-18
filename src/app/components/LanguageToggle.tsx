import { motion } from "motion/react";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  language: "en" | "vi";
  onToggle: () => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Languages className="w-4 h-4 text-purple-400" />
      <span className="text-sm text-white font-medium">
        {language === "en" ? "VI" : "EN"}
      </span>
    </motion.button>
  );
}
