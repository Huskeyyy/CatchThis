"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGameContext } from "../context/GameContext";
import ResultCard from "../components/ResultCard";

export default function ResultPage() {
  const gameContext = useGameContext();
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const gameJustFinished = localStorage.getItem("gameJustFinished");
    const savedQuestions = localStorage.getItem("lastQuestions");

    if (savedQuestions) {
      try {
        const parsedQuestions = JSON.parse(savedQuestions);
        setQuestions(parsedQuestions);
        setLoading(false);
        return;
      } catch (error) {
        console.error("Error parsing saved questions:", error);
      }
    }

    // fallback
    if (gameContext?.questions && gameContext.questions.length > 0) {
      setQuestions(gameContext.questions);
      setLoading(false);
      return;
    }

    // gives the context time to update
    if (gameJustFinished) {
      setTimeout(() => {
        if (gameContext?.questions && gameContext.questions.length > 0) {
          setQuestions(gameContext.questions);
          setLoading(false);
        } else {
          router.push("/");
        }
      }, 100);
      return;
    }

    // If no qs and no game just finished, redirect to home
    router.push("/");
  }, [gameContext, router]);

  // Cleans up the flag when questions are loaded
  useEffect(() => {
    if (questions.length > 0) {
      localStorage.removeItem("gameJustFinished");
    }
  }, [questions]);

  if (loading) {
    return (
      <div className="max-w-md mx-auto text-center p-8">
        <p className="text-gray-400">Loading results...</p>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="max-w-md mx-auto text-center p-8">
        <p className="text-gray-400 mb-4">
          No game results to display. Please play a game first.
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
    <div className="max-w-4xl mx-auto animate-fade-in">
      <ResultCard />
    </div>
  );
}
