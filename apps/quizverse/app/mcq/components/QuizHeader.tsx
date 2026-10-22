import { CheckboxField } from "../../components/CheckboxField";
import { ProgressBar } from "../../components/ProgressBar";
import { Tag } from "../../components/Tag";
import { formatTime } from "../lib/formatTime";
import styles from "./QuizHeader.module.css";

interface QuizHeaderProps {
  currentIndex: number;
  total: number;
  attemptedCount: number;
  elapsedSeconds: number;
  instantFeedback: boolean;
  onToggleFeedback: (value: boolean) => void;
}

export function QuizHeader({
  currentIndex,
  total,
  attemptedCount,
  elapsedSeconds,
  instantFeedback,
  onToggleFeedback,
}: QuizHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Tag tone="neutral">
          Question {currentIndex + 1} / {total}
        </Tag>
        <Tag tone="neutral">⏱ {formatTime(elapsedSeconds)}</Tag>
        <Tag tone="neutral">
          Attempted {attemptedCount}/{total}
        </Tag>
        <span className={styles.toggle}>
          <CheckboxField checked={instantFeedback} onChange={onToggleFeedback}>
            Instant feedback
          </CheckboxField>
        </span>
      </div>
      <ProgressBar value={attemptedCount} max={total} label="Questions attempted" />
    </header>
  );
}
