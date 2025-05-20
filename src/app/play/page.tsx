"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameContext } from "../context/GameContext";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import ScoreCounter from "../components/ScoreCounter";

export default function PlayPage() {
  const { questions, currentQuestionIndex, isPlaying, resetGame } =
    useGameContext();

  const router = useRouter();

  // Redirects to the homepage if the game isn't being played
  useEffect(() => {
    if (!isPlaying || questions.length === 0) {
      router.push("/");
    }
  }, [isPlaying, questions.length, router]);

  if (!isPlaying || questions.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center p-8">
        <p className="text-gray-400 mb-4">
          No active game. Please start a new game.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-3/4">
          <Timer />
        </div>
        <div className="w-full md:w-1/4">
          <ScoreCounter />
        </div>
      </div>

      <div className="animate-fade-in">
        <QuestionCard />
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={resetGame}
          className="text-gray-400 hover:text-gray-300 text-sm"
        >
          End Game Early?
        </button>
      </div>
    </div>
  );
}
