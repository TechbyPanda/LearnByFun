import { useEffect, useState } from "react";
import type { MCQQuestion } from "../data";
import { playFinishSound, playSelectSound } from "../sounds";

export function useQuizSession(initialQuestions: MCQQuestion[]) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(() =>
    new Array(initialQuestions.length).fill(null),
  );
  const [flagged, setFlagged] = useState<boolean[]>(() =>
    new Array(initialQuestions.length).fill(false),
  );
  const [instantFeedback, setInstantFeedback] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const selectedOptionId = answers[currentIndex] ?? null;
  // In instant-feedback mode an answer is revealed and locked once chosen.
  const isRevealed = instantFeedback && selectedOptionId !== null;
  const attemptedCount = answers.filter((a) => a !== null).length;
  const flaggedCount = flagged.filter(Boolean).length;
  const score = questions.reduce(
    (sum, q, i) => sum + (answers[i] === q.correctOptionId ? 1 : 0),
    0,
  );

  function goToQuestion(index: number) {
    setCurrentIndex(Math.max(0, Math.min(index, total - 1)));
  }

  function selectOption(optionId: string) {
    if (isFinished || isRevealed) return;
    setAnswers((prev) => prev.map((a, i) => (i === currentIndex ? optionId : a)));
    playSelectSound();
  }

  function clearAnswer() {
    if (isRevealed) return;
    setAnswers((prev) => prev.map((a, i) => (i === currentIndex ? null : a)));
  }

  function toggleFlag() {
    setFlagged((prev) => prev.map((f, i) => (i === currentIndex ? !f : f)));
  }

  function finish() {
    setIsFinished(true);
    playFinishSound();
  }

  function reset(nextQuestions: MCQQuestion[]) {
    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setAnswers(new Array(nextQuestions.length).fill(null));
    setFlagged(new Array(nextQuestions.length).fill(false));
    setElapsedSeconds(0);
    setIsFinished(false);
  }

  const restart = () => reset(questions);
  const retryIncorrect = () =>
    reset(questions.filter((q, i) => answers[i] !== q.correctOptionId));

  return {
    questions,
    total,
    currentIndex,
    currentQuestion,
    selectedOptionId,
    isRevealed,
    answers,
    flagged,
    attemptedCount,
    flaggedCount,
    score,
    elapsedSeconds,
    instantFeedback,
    isFinished,
    setInstantFeedback,
    goToQuestion,
    selectOption,
    clearAnswer,
    toggleFlag,
    finish,
    restart,
    retryIncorrect,
  };
}
