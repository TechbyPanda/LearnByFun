"use client";

import { useState } from "react";
import { MCQOption, MCQQuestion, polityQuestions } from "./questions";
import { playCorrectSound, playIncorrectSound, playFinishSound } from "./sounds";
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
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  }

  function handleNext() {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsFinished(true);
      playFinishSound();
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
      <FinishedScreen
        score={score}
        totalQuestions={totalQuestions}
        handleRestart={handleRestart}
      />
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className={styles.page}>
      <Question
        currentQuestion={currentQuestion}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        score={score}
        selectedOptionId={selectedOptionId}
        handleSelectOption={handleSelectOption}
      />

      <div className={styles.actions}>
        <Button onClick={handleNext} disabled={!selectedOptionId}>
          {currentIndex + 1 === totalQuestions ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}

const Question = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  score,
  selectedOptionId,
  handleSelectOption,
}: {
  currentQuestion: MCQQuestion;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  selectedOptionId: string | null;
  handleSelectOption: (optionId: string) => void;
}) => {
  return (
    <>
      <p className={styles.progress}>
        Question {currentIndex + 1} of {totalQuestions} &middot; Score: {score}
      </p>
      <span className={styles.topic}>{currentQuestion.topic}</span>
      <h1 className={styles.question}>{currentQuestion.question}</h1>
      <Option
        currentQuestion={currentQuestion}
        selectedOptionId={selectedOptionId}
        handleSelectOption={handleSelectOption}
      />
      {selectedOptionId && (
        <p className={styles.explanation}>{currentQuestion.explanation}</p>
      )}
    </>
  );
};

const Option = ({
  currentQuestion,
  selectedOptionId,
  handleSelectOption,
}: {
  currentQuestion: MCQQuestion;
  selectedOptionId: string | null;
  handleSelectOption: (optionId: string) => void;
}) => {
  return (
    <div className={styles.options}>
      {currentQuestion.options.map((option: MCQOption) => {
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
  );
};

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const FinishedScreen = ({
  score,
  totalQuestions,
  handleRestart,
}: {
  score: number;
  totalQuestions: number;
  handleRestart: () => void;
}) => {
  return (
    <div className={styles.page}>
      <div className={styles.result}>
        <h1>Quiz Complete</h1>
        <p className={styles.score}>
          {score} / {totalQuestions}
        </p>
        <Button onClick={handleRestart}>Restart</Button>
      </div>
    </div>
  );
};
