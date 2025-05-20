"use client";

import React, { useState } from "react";
import { useGameContext } from "./context/GameContext";
import { questions } from "./lib/questions";

export default function Home() {
  const { startGame } = useGameContext();
  const [questionCount, setQuestionCount] = useState(5);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // Get unique languages from questions
  const languages = Array.from(new Set(questions.map((q) => q.language)));

  const languageDisplay = {
    javascript: "JavaScript",
    python: "Python",
    java: "Java",
    csharp: "C#",
  };

  const handleStartGame = () => {
    startGame(questionCount, selectedLanguage ?? undefined);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome!</h2>
          <p className="text-gray-300 mb-6">
            Put your debugging skills to the test. Identify the cause of errors
            from stack traces before the time runs out!
          </p>

          <div className="bg-gray-900 rounded-lg p-5 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              How to Play?
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">1.</span>
                You'll be shown a stack trace from a real error, with varying
                levels of difficulty.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">2.</span>
                Choose the correct cause of the error from multiple options.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">3.</span>
                Answer as many as you can within the time limit.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">4.</span>
                After each question, you'll see an explanation of the error.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Game Settings
            </h3>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                Number of Questions
              </label>
              <div className="flex space-x-2">
                {[5, 7, 10].map((num) => (
                  <button
                    key={num}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      questionCount === num
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    onClick={() => setQuestionCount(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Language Filter (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      selectedLanguage === lang
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    onClick={() =>
                      setSelectedLanguage(
                        lang === selectedLanguage ? null : lang
                      )
                    }
                  >
                    {languageDisplay[lang as keyof typeof languageDisplay]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleStartGame}
            className="w-full bg-blue-400 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
