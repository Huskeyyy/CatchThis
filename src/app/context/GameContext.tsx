"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Question,
  getQuestionsByLanguage,
  getRandomQuestions,
} from "../lib/questions";
import { useRouter } from "next/navigation";

interface GameContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  timeLeft: number;
  maxTime: number;
  selectedAnswer: number | null;
  isAnswerRevealed: boolean;
  gameOver: boolean;
  isPlaying: boolean;
  userAnswers: (number | null)[];
  startGame: (questionCount?: number, language?: string) => void;
  selectAnswer: (answerIndex: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function useGameContext() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("Error: this must be used within a Gameprovider");
  }
  return context;
}

interface GameProviderProps {
  children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [maxTime] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  // timery effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying && !isAnswerRevealed && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsAnswerRevealed(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, isAnswerRevealed, timeLeft]);

  // Handles when the time run out
  useEffect(() => {
    if (timeLeft === 0 && !isAnswerRevealed) {
      handleAnswerRevealed(null);
    }
  }, [timeLeft, isAnswerRevealed]);

  const startGame = (questionCount: number = 5, language?: string) => {
    let gameQuestions: Question[];

    if (language && language !== "all") {
      gameQuestions = getQuestionsByLanguage(language, questionCount);
    } else {
      gameQuestions = getRandomQuestions(questionCount);
    }

    setQuestions(gameQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(maxTime);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setGameOver(false);
    setIsPlaying(true);
    setUserAnswers(Array(gameQuestions.length).fill(null));

    router.push("/play");
  };

  const handleAnswerRevealed = (answer: number | null) => {
    setIsAnswerRevealed(true);
    setSelectedAnswer(answer);

    // Updates the players answers
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newUserAnswers);

    // If score is correct, increments the score
    if (answer === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }

    // Shedules the next question (or the end of the game)
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
      } else {
        endGame();
      }
    }, 4000);
    // Shows the answer for 4 seconds
  };

  const selectAnswer = (answerIndex: number) => {
    if (isAnswerRevealed) return;
    handleAnswerRevealed(answerIndex);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setTimeLeft(maxTime);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
  };

  const endGame = () => {
    setGameOver(true);
    setIsPlaying(false);

    const gameData = {
      questions: questions,
      score: score,
      totalQuestions: questions.length,
      userAnswers: userAnswers,
      date: new Date().toISOString(),
    };

    localStorage.setItem("lastGameData", JSON.stringify(gameData));
    localStorage.setItem("lastQuestions", JSON.stringify(questions));
    localStorage.setItem("gameJustFinished", "true");

    const highScores = localStorage.getItem("stackTraceHighScores");
    let scores = highScores ? JSON.parse(highScores) : [];
    scores.push({
      date: new Date().toISOString(),
      score,
      totalQuestions: questions.length,
    });
    scores.sort((a: any, b: any) => b.score - a.score);
    localStorage.setItem(
      "stackTraceHighScores",
      JSON.stringify(scores.slice(0, 10))
    );

    setTimeout(() => {
      router.push("/result");
    }, 100);
  };

  const resetGame = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(maxTime);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setGameOver(false);
    setIsPlaying(false);
    setUserAnswers([]);

    router.push("/");
  };

  const value = {
    questions,
    currentQuestionIndex,
    score,
    timeLeft,
    maxTime,
    selectedAnswer,
    isAnswerRevealed,
    gameOver,
    isPlaying,
    userAnswers,
    startGame,
    selectAnswer,
    nextQuestion,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
