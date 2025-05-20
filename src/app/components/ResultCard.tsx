"use client";
import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import Link from "next/link";

interface HighScore {
  date: string;
  score: number;
  totalQuestions: number;
}

export default function ResultCard() {
  const { score, questions, userAnswers, resetGame } = useGameContext();
  const [highScores, setHighScores] = useState<HighScore[]>([]);

  useEffect(() => {
    // Gets the scores from local storage
    const storedScores = localStorage.getItem("stackTraceHighScores");
    if (storedScores) {
      setHighScores(JSON.parse(storedScores));
    }
  }, []);

  const percentage = Math.round((score / questions.length) * 100);

  let message = "Needs improvement";
  if (percentage >= 40) message = "Good effort!";
  if (percentage >= 60) message = "Well done!";
  if (percentage >= 80) message = "Excellent!";
  if (percentage === 100) message = "Perfect score!";

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 text-center border-b border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-2">Game Over!</h2>
        <p className="text-xl text-gray-300">{message}</p>

        <div className="mt-6 bg-gray-900 rounded-lg p-6 inline-block">
          <div className="text-5xl font-bold text-white">
            {score} <span className="text-gray-400">/ {questions.length}</span>
          </div>
          <p className="text-gray-400 mt-1">Final Score</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          Results Breakdown
        </h3>

        <div className="space-y-3 mb-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.answer;

            return (
              <div
                key={index}
                className={`p-3 rounded-md ${
                  isCorrect ? "bg-green-900/20" : "bg-red-900/20"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="text-gray-300 font-medium">
                    Question {index + 1}{" "}
                    <span className="text-xs uppercase ml-2 px-1.5 py-0.5 bg-gray-700 rounded text-gray-400">
                      {question.language}
                    </span>
                  </div>
                  <div
                    className={isCorrect ? "text-green-400" : "text-red-400"}
                  >
                    {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                  </div>
                </div>
                <div className="text-sm text-gray-400 truncate">
                  {question.choices[question.answer]}
                </div>
              </div>
            );
          })}
        </div>

        {highScores.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              High Scores
            </h3>
            <div className="bg-gray-900 rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 px-4 text-left text-gray-400">Rank</th>
                    <th className="py-2 px-4 text-left text-gray-400">Score</th>
                    <th className="py-2 px-4 text-left text-gray-400">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {highScores.slice(0, 5).map((highScore, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-2 px-4 text-gray-300">{index + 1}</td>
                      <td className="py-2 px-4 text-gray-300">
                        {highScore.score}/{highScore.totalQuestions}
                      </td>
                      <td className="py-2 px-4 text-gray-400">
                        {new Date(highScore.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link
            href="/play"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
            onClick={() => resetGame()}
          >
            Play Again
          </Link>
          <Link
            href="/"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded text-center transition-colors"
            onClick={() => resetGame()}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
