"use client";
import React from "react";
import { useGameContext } from "../context/GameContext";

interface AnswerButtonProps {
  index: number;
  choice: string;
  isSelected: boolean;
  isCorrect: boolean;
  isRevealed: boolean;
}

export default function AnswerButton({
  index,
  choice,
  isSelected,
  isCorrect,
  isRevealed,
}: AnswerButtonProps) {
  const { selectAnswer } = useGameContext();

  const letters = ["A", "B", "C", "D"];

  let buttonClasses =
    "flex items-start p-3 rounded-md transition-all duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500";

  if (isRevealed) {
    if (isCorrect) {
      buttonClasses += " bg-green-900/30 border border-green-700";
    } else if (isSelected) {
      buttonClasses += " bg-red-900/30 border border-red-700";
    } else {
      buttonClasses += " bg-gray-700/50 border border-gray-700";
    }
  } else {
    buttonClasses += isSelected
      ? " bg-blue-900/30 border border-blue-700"
      : " bg-gray-700/50 border border-gray-700";
  }

  const handleClick = () => {
    if (!isRevealed) {
      selectAnswer(index);
    }
  };

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={isRevealed}
    >
      <div className="flex items-start">
        <span className="flex items-center justify-center text-gray-400 font-mono mr-3 mt-0.5 w-6 h-6 rounded-full border border-gray-600 text-sm">
          {letters[index]}
        </span>
        <span className="text-gray-200 text-left">{choice}</span>
      </div>
    </button>
  );
}
