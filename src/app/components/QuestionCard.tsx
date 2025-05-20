"use client";

import React from "react";
import { useGameContext } from "../context/GameContext";
import AnswerButton from "./AnswerButton";

export default function QuestionCard() {
  const { questions, currentQuestionIndex, selectedAnswer, isAnswerRevealed } =
    useGameContext();

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="mb-2 flex justify-between items-center">
        <span className="text-gray-400 text-sm">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>

        <span className="px-2 py-1 bg-gray-700 rounded text-xs uppercase tracking-wider text-gray-300">
          {currentQuestion.language}
        </span>
      </div>

      <div className="mb-6">
        <pre className="bg-black rounded-md p-4 overflow-x-auto text-sm text-gray-300 font-mono">
          {currentQuestion.trace}
        </pre>
      </div>

      <div className="mb-4">
        <h3 className="text-gray-200 text-lg font-medium mb-3">
          What's causing this error?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentQuestion.choices.map((choice, index) => (
            <AnswerButton
              key={index}
              index={index}
              choice={choice}
              isSelected={selectedAnswer === index}
              isCorrect={index === currentQuestion.answer}
              isRevealed={isAnswerRevealed}
            />
          ))}
        </div>
      </div>

      {isAnswerRevealed && (
        <div
          className={`mt-4 p-4 rounded-md ${
            selectedAnswer === currentQuestion.answer
              ? "bg-green-900/30 border border-green-700"
              : "bg-red-900/30 border border-red-700"
          }`}
        >
          <h4 className="font-medium text-gray-200 mb-1">
            {selectedAnswer === currentQuestion.answer
              ? "✓ Correct!"
              : "✗ Incorrect"}
          </h4>
          <p className="text-gray-300 text-sm">{currentQuestion.explanation}</p>
        </div>
      )}
    </div>
  );
}
