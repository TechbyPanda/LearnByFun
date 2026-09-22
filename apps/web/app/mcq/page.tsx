"use client";

import { useState } from "react";
import { polityQuestions } from "./questions";
import styles from "./page.module.css";

export default function McqPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = polityQuestions.length;
  const currentQuestion = polityQuestions[currentIndex];

  function handleSelectOption(optionId: string) {
    if (selectedOptionId || !currentQuestion) return;
    setSelectedOptionId(optionId);
    if (optionId === currentQuestion.correctOptionId) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsFinished(false);
  }

  if (isFinished) {
    return (
      <div className={styles.page}>
        <div className={styles.result}>
          <h1>Quiz Complete</h1>
          <p className={styles.score}>
            {score} / {totalQuestions}
          </p>
          <button className={styles.button} onClick={handleRestart}>
            Restart
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className={styles.page}>
      <p className={styles.progress}>
        Question {currentIndex + 1} of {totalQuestions} &middot; Score: {score}
      </p>
      <span className={styles.topic}>{currentQuestion.topic}</span>
      <h1 className={styles.question}>{currentQuestion.question}</h1>

      <div className={styles.options}>
        {currentQuestion.options.map((option) => {
          const isSelected = option.id === selectedOptionId;
          const isCorrectOption = option.id === currentQuestion.correctOptionId;

          let optionClassName = styles.option;
          if (selectedOptionId) {
            if (isCorrectOption) {
              optionClassName = `${styles.option} ${styles.optionCorrect}`;
            } else if (isSelected) {
              optionClassName = `${styles.option} ${styles.optionIncorrect}`;
            }
          }

          return (
            <button
              key={option.id}
              className={optionClassName}
              onClick={() => handleSelectOption(option.id)}
              disabled={!!selectedOptionId}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {selectedOptionId && (
        <p className={styles.explanation}>{currentQuestion.explanation}</p>
      )}

      <div className={styles.actions}>
        <button
          className={styles.button}
          onClick={handleNext}
          disabled={!selectedOptionId}
        >
          {currentIndex + 1 === totalQuestions ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
