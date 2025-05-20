"use client";
import React from "react";
import { useGameContext } from "../context/GameContext";

export default function Timer() {
  const { timeLeft, maxTime } = useGameContext();

  // Calculates percentage forthe timer bar
  const percentage = (timeLeft / maxTime) * 100;

  // Determine color based on the time left
  let barColor = "bg-green-500";
  if (percentage < 60) barColor = "bg-yellow-500";
  if (percentage < 30) barColor = "bg-red-500";

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-1 text-sm text-gray-400">
        <span>Time remaining</span>
        <span>{timeLeft}s</span>
      </div>
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} transition-all duration-1000 ease-linear`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
