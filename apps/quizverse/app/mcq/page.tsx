"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MCQOption, MCQQuestion, questionsBySubject, type Subject } from "./data";
import { shuffleArray } from "./lib/shuffle";
import { playSelectSound, playFinishSound } from "./sounds";
import styles from "./page.module.css";

export default function McqPage() {
  return (
    <Suspense fallback={null}>
      <McqQuiz />
    </Suspense>
  );
}

function useQuizQuestions(): MCQQuestion[] {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const subjectsParam = searchParams.get("subjects");
    const countParam = searchParams.get("count");
    const shuffleParam = searchParams.get("shuffle") === "true";

    if (!subjectsParam || !countParam) return [];

    const subjects = subjectsParam.split(",").filter(Boolean) as Subject[];
    const count = parseInt(countParam, 10);
    if (subjects.length === 0 || !Number.isFinite(count) || count < 1) return [];

    const pool = subjects.flatMap((subject) => questionsBySubject[subject] ?? []);
    const orderedPool = shuffleParam ? shuffleArray(pool) : pool;
    return orderedPool.slice(0, count);
  }, [searchParams]);
}

function McqQuiz() {
  const quizQuestions = useQuizQuestions();
  const totalQuestions = quizQuestions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(() =>
    new Array(totalQuestions).fill(null),
  );
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const selectedOptionId = answers[currentIndex] ?? null;
  const attemptedCount = answers.filter((answer) => answer !== null).length;
  const score = quizQuestions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.correctOptionId ? 1 : 0),
    0,
  );

  if (totalQuestions === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.result}>
          <h1>No quiz configured</h1>
          <p>Pick some subjects on the home page to start a quiz.</p>
          <Link className={styles.button} href="/">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  function handleSelectOption(optionId: string) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionId;
      return next;
    });
    playSelectSound();
  }

  function goToQuestion(index: number) {
    setCurrentIndex(Math.max(0, Math.min(index, totalQuestions - 1)));
  }

  function handleFinish() {
    setIsFinished(true);
    playFinishSound();
  }

  function handleRestart() {
    setCurrentIndex(0);
    setAnswers(new Array(totalQuestions).fill(null));
    setIsFinished(false);
  }

  if (isFinished) {
    return (
      <ReviewScreen
        quizQuestions={quizQuestions}
        answers={answers}
        score={score}
        handleRestart={handleRestart}
      />
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <Question
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            attemptedCount={attemptedCount}
            selectedOptionId={selectedOptionId}
            handleSelectOption={handleSelectOption}
          />

          <div className={styles.actions}>
            <Button onClick={() => goToQuestion(currentIndex - 1)} disabled={currentIndex === 0}>
              Previous
            </Button>
            <div className={styles.actionsRight}>
              <Button
                onClick={() => goToQuestion(currentIndex + 1)}
                disabled={currentIndex + 1 === totalQuestions}
              >
                Next
              </Button>
              <Button onClick={handleFinish}>Finish Test</Button>
            </div>
          </div>
        </div>

        <QuestionPalette
          totalQuestions={totalQuestions}
          currentIndex={currentIndex}
          answers={answers}
          goToQuestion={goToQuestion}
        />
      </div>
    </div>
  );
}

const Question = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  attemptedCount,
  selectedOptionId,
  handleSelectOption,
}: {
  currentQuestion: MCQQuestion;
  currentIndex: number;
  totalQuestions: number;
  attemptedCount: number;
  selectedOptionId: string | null;
  handleSelectOption: (optionId: string) => void;
}) => {
  return (
    <>
      <p className={styles.progress}>
        Question {currentIndex + 1} of {totalQuestions} &middot; Attempted:{" "}
        {attemptedCount}/{totalQuestions}
      </p>
      <span className={styles.topic}>{currentQuestion.topic}</span>
      <h1 className={styles.question}>{currentQuestion.question}</h1>
      <Option
        currentQuestion={currentQuestion}
        selectedOptionId={selectedOptionId}
        handleSelectOption={handleSelectOption}
      />
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

        return (
          <button
            key={option.id}
            className={`${styles.option} ${isSelected ? styles.optionSelected : ""}`}
            onClick={() => handleSelectOption(option.id)}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
};

const QuestionPalette = ({
  totalQuestions,
  currentIndex,
  answers,
  goToQuestion,
}: {
  totalQuestions: number;
  currentIndex: number;
  answers: (string | null)[];
  goToQuestion: (index: number) => void;
}) => {
  return (
    <div className={styles.palette}>
      <p className={styles.paletteTitle}>Questions</p>
      <div className={styles.paletteGrid}>
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isAttempted = answers[index] !== null;
          const isCurrent = index === currentIndex;

          let itemClassName = styles.paletteItem;
          if (isAttempted) itemClassName += ` ${styles.paletteItemAttempted}`;
          else itemClassName += ` ${styles.paletteItemUnattempted}`;
          if (isCurrent) itemClassName += ` ${styles.paletteItemCurrent}`;

          return (
            <button
              key={index}
              className={itemClassName}
              onClick={() => goToQuestion(index)}
            >
              {isAttempted ? "✓" : index + 1}
            </button>
          );
        })}
      </div>
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

const ReviewScreen = ({
  quizQuestions,
  answers,
  score,
  handleRestart,
}: {
  quizQuestions: MCQQuestion[];
  answers: (string | null)[];
  score: number;
  handleRestart: () => void;
}) => {
  return (
    <div className={styles.page}>
      <div className={styles.result}>
        <h1>Quiz Complete</h1>
        <p className={styles.score}>
          {score} / {quizQuestions.length}
        </p>
        <div className={styles.resultActions}>
          <Button onClick={handleRestart}>Restart</Button>
          <Link className={styles.button} href="/">
            New Quiz
          </Link>
        </div>
      </div>

      <div className={styles.reviewList}>
        {quizQuestions.map((question, index) => {
          const selectedOptionId = answers[index];
          const isCorrect = selectedOptionId === question.correctOptionId;
          const selectedOption = question.options.find((o) => o.id === selectedOptionId);
          const correctOption = question.options.find(
            (o) => o.id === question.correctOptionId,
          );

          let statusClassName = styles.reviewStatusUnattempted;
          let statusLabel = "Not Attempted";
          if (selectedOptionId) {
            statusClassName = isCorrect
              ? styles.reviewStatusCorrect
              : styles.reviewStatusIncorrect;
            statusLabel = isCorrect ? "Correct" : "Incorrect";
          }

          return (
            <div key={question.id} className={styles.reviewItem}>
              <div className={styles.reviewItemHeader}>
                <span className={styles.progress}>Question {index + 1}</span>
                <span className={statusClassName}>{statusLabel}</span>
              </div>
              <p className={styles.question}>{question.question}</p>
              {selectedOption && (
                <p className={styles.reviewAnswerLine}>
                  Your answer: {selectedOption.text}
                </p>
              )}
              <p className={styles.reviewAnswerLine}>
                Correct answer: {correctOption?.text}
              </p>
              <p className={styles.explanation}>{question.explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
