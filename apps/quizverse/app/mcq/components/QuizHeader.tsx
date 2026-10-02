import { formatTime } from "../lib/formatTime";
import styles from "./quiz.module.css";

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
  const percent = Math.round((attemptedCount / total) * 100);

  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <span className={styles.chip}>
          Question {currentIndex + 1} / {total}
        </span>
        <span className={styles.chip}>⏱ {formatTime(elapsedSeconds)}</span>
        <span className={styles.chip}>
          Attempted {attemptedCount}/{total}
        </span>
        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={instantFeedback}
            onChange={(e) => onToggleFeedback(e.target.checked)}
          />
          Instant feedback
        </label>
      </div>
      <div
        className={styles.progressTrack}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.progressFill} style={{ width: `${percent}%` }} />
      </div>
    </header>
  );
}
