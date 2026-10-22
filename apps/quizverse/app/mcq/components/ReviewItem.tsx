import { Eyebrow } from "../../components/Eyebrow";
import { Tag, type TagTone } from "../../components/Tag";
import type { AnswerStatus, ReviewRow } from "../lib/review";
import styles from "./ReviewItem.module.css";

const STATUS: Record<AnswerStatus, { label: string; tone: TagTone }> = {
  correct: { label: "Correct", tone: "accent" },
  wrong: { label: "Incorrect", tone: "danger" },
  skipped: { label: "Not Attempted", tone: "neutral" },
};

/** One answered (or skipped) question on the review screen. */
export function ReviewItem({ row }: { row: ReviewRow }) {
  const { question, index, answer, flagged, status } = row;
  const selected = question.options.find((o) => o.id === answer);
  const correct = question.options.find((o) => o.id === question.correctOptionId);

  return (
    <article className={styles.item}>
      <div className={styles.header}>
        <Eyebrow as="span">
          Question {index + 1} · {question.topic} · {question.subtopic}
          {flagged ? " · ⚑ Marked" : ""}
        </Eyebrow>
        <Tag tone={STATUS[status].tone}>{STATUS[status].label}</Tag>
      </div>
      <p className={styles.question}>{question.question}</p>
      {status === "wrong" && selected && (
        <p className={styles.wrong}>Your answer: {selected.text}</p>
      )}
      <p className={styles.correct}>Correct answer: {correct?.text}</p>
      <p className={styles.explanation}>{question.explanation}</p>
    </article>
  );
}
