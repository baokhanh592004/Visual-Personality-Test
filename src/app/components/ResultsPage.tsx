import { motion } from "motion/react";
import { Share2, RotateCcw, Sparkles } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { personalityProfiles, translations } from "../data/translations";

interface ResultsPageProps {
  answers: string[];
  onRestart: () => void;
  language: "en" | "vi";
}

const traitLabels = {
  en: {
    creativity: "Creativity",
    confidence: "Confidence",
    sociability: "Sociability",
    balance: "Balance",
    analytical: "Analytical",
    intuition: "Intuition",
  },
  vi: {
    creativity: "Sáng tạo",
    confidence: "Tự tin",
    sociability: "Giao tiếp",
    balance: "Cân bằng",
    analytical: "Phân tích",
    intuition: "Trực giác",
  },
};

export function ResultsPage({ answers, onRestart, language }: ResultsPageProps) {
  const t = translations[language].results;
  const profiles = personalityProfiles[language];

  // Calculate personality traits from answers
  const traitScores = {
    creativity: 0,
    confidence: 0,
    sociability: 0,
    balance: 0,
    analytical: 0,
    intuition: 0,
  };

  // Map answers to traits with more sophisticated scoring
  answers.forEach((answer) => {
    switch (answer) {
      case "creative":
        traitScores.creativity += 25;
        traitScores.intuition += 20;
        break;
      case "analytical":
        traitScores.confidence += 25;
        traitScores.analytical += 20;
        break;
      case "practical":
        traitScores.analytical += 15;
        traitScores.confidence += 10;
        break;
      case "detailOriented":
        traitScores.creativity += 20;
        traitScores.intuition += 15;
        break;
      case "detailFocused":
        traitScores.analytical += 20;
        break;
      case "bigPicture":
        traitScores.intuition += 25;
        break;
      case "cautious":
        traitScores.analytical += 15;
        break;
      case "anxious":
        traitScores.intuition += 20;
        break;
      case "introverted":
        traitScores.balance += 15;
        break;
      case "extroverted":
        traitScores.sociability += 25;
        break;
      case "stressed":
        traitScores.intuition += 10;
        break;
      case "balanced":
        traitScores.balance += 25;
        traitScores.confidence += 15;
        break;
    }
  });

  // Normalize scores to 0-100 range
  Object.keys(traitScores).forEach((key) => {
    const traitKey = key as keyof typeof traitScores;
    traitScores[traitKey] = Math.min(100, traitScores[traitKey] + 30);
  });

  const labels = traitLabels[language];
  const radarData = [
    { trait: labels.creativity, score: traitScores.creativity },
    { trait: labels.confidence, score: traitScores.confidence },
    { trait: labels.sociability, score: traitScores.sociability },
    { trait: labels.balance, score: traitScores.balance },
    { trait: labels.analytical, score: traitScores.analytical },
    { trait: labels.intuition, score: traitScores.intuition },
  ];

  // Count answer frequencies to determine dominant personality type
  const answerCounts: Record<string, number> = {};
  answers.forEach((answer) => {
    answerCounts[answer] = (answerCounts[answer] || 0) + 1;
  });

  // Find the most common answer type
  const dominantAnswer = Object.entries(answerCounts).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  // Fallback to most balanced profile if answer type not found
  const profile = profiles[dominantAnswer as keyof typeof profiles] || profiles.balanced;

  const handleShare = () => {
    const text = `${language === "en" ? "I just discovered I'm" : "Tôi vừa phát hiện ra tôi là"} "${profile.title}"! ${
      language === "en"
        ? "Take the Visual Personality Test to discover yours."
        : "Làm bài Test Tính Cách Hình Ảnh để khám phá của bạn."
    }`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert(
        language === "en"
          ? "Result copied to clipboard!"
          : "Đã sao chép kết quả!"
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-purple-950 to-blue-950 overflow-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">{t.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
            {profile.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {profile.description}
          </p>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          className="mb-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t.profileTitle}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#6b21a8" strokeOpacity={0.3} />
              <PolarAngleAxis
                dataKey="trait"
                tick={{ fill: "#d1d5db", fontSize: 14 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "#9ca3af" }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#a855f7"
                fill="#a855f7"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Trait Percentages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {radarData.map((trait, index) => (
            <div
              key={trait.trait}
              className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 font-medium">{trait.trait}</span>
                <span className="text-purple-400 font-bold">{trait.score}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${trait.score}%` }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Full Description */}
        <motion.div
          className="rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            {profile.fullDescription}
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          className="rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">{t.strengthsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.strengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-gray-200">{strength}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">{t.insightTitle}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{profile.insights}</p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={handleShare}
            className="group px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">{t.shareButton}</span>
          </button>
          <button
            onClick={onRestart}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{t.retakeButton}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
