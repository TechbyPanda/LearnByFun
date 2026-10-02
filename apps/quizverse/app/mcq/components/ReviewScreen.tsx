import { useState } from "react";
import Link from "next/link";
import type { MCQQuestion } from "../data";
import { formatTime } from "../lib/formatTime";
import { Button } from "./Button";
import styles from "./quiz.module.css";

type Filter = "all" | "incorrect" | "flagged" | "unattempted";

interface ReviewScreenProps {
  questions: MCQQuestion[];
  answers: (string | null)[];
  flagged: boolean[];
  score: number;
  elapsedSeconds: number;
  onRestart: () => void;
  onRetryIncorrect: () => void;
}

export function ReviewScreen({
  questions,
  answers,
  flagged,
  score,
  elapsedSeconds,
  onRestart,
  onRetryIncorrect,
}: ReviewScreenProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const total = questions.length;
  const attempted = answers.filter((a) => a !== null).length;
  const incorrect = attempted - score;
  const skipped = total - attempted;
  const accuracy = total ? Math.round((score / total) * 100) : 0;

  const rows = questions
    .map((question, index) => ({ question, index, answer: answers[index] }))
    .filter(({ question, index, answer }) => {
      if (filter === "incorrect") return answer !== null && answer !== question.correctOptionId;
      if (filter === "flagged") return flagged[index];
      if (filter === "unattempted") return answer === null;
      return true;
    });

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "incorrect", label: `Incorrect (${incorrect})` },
    { key: "flagged", label: `Marked (${flagged.filter(Boolean).length})` },
    { key: "unattempted", label: `Skipped (${skipped})` },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.summary}>
        <div className={styles.scoreRing} style={{ ["--pct" as string]: `${accuracy}%` }}>
          <span>{accuracy}%</span>
        </div>
        <div className={styles.summaryBody}>
          <h1>Quiz Complete</h1>
          <p className={styles.score}>
            {score} / {total} correct
          </p>
          <div className={styles.stats}>
            <span className={styles.chip}>✓ {score} correct</span>
            <span className={styles.chip}>✗ {incorrect} incorrect</span>
            <span className={styles.chip}>— {skipped} skipped</span>
            <span className={styles.chip}>⏱ {formatTime(elapsedSeconds)}</span>
          </div>
          <div className={styles.resultActions}>
            <Button onClick={onRestart}>Restart</Button>
            {incorrect > 0 && (
              <Button variant="secondary" onClick={onRetryIncorrect}>
                Retry incorrect ({incorrect})
              </Button>
            )}
            <Link className={`${styles.button} ${styles.secondary}`} href="/quiz">
              New Quiz
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.filters}>
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.filter} ${filter === key ? styles.filterActive : ""}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.reviewList}>
        {rows.length === 0 && <p className={styles.hint}>Nothing to show here.</p>}
        {rows.map(({ question, index, answer }) => {
          const isCorrect = answer === question.correctOptionId;
          const selected = question.options.find((o) => o.id === answer);
          const correct = question.options.find((o) => o.id === question.correctOptionId);

          let statusClass = styles.statusSkipped;
          let statusLabel = "Not Attempted";
          if (answer) {
            statusClass = isCorrect ? styles.statusCorrect : styles.statusWrong;
            statusLabel = isCorrect ? "Correct" : "Incorrect";
          }

          return (
            <article key={question.id} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <span className={styles.topic}>
                  Question {index + 1} · {question.topic}
                  {flagged[index] ? " · ⚑ Marked" : ""}
                </span>
                <span className={`${styles.status} ${statusClass}`}>{statusLabel}</span>
              </div>
              <p className={styles.reviewQuestion}>{question.question}</p>
              {selected && !isCorrect && (
                <p className={styles.answerWrong}>Your answer: {selected.text}</p>
              )}
              <p className={styles.answerCorrect}>Correct answer: {correct?.text}</p>
              <p className={styles.explanation}>{question.explanation}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
