"use client";
import React from "react";
import { useGameContext } from "../context/GameContext";

export default function ScoreCounter() {
  const { score, questions } = useGameContext();

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="text-gray-400 text-sm mb-1">Current Score</div>
      <div className="text-2xl font-bold text-white">
        {score}{" "}
        <span className="text-gray-400 text-lg">/ {questions.length}</span>
      </div>
    </div>
  );
}
