import { ActionButton, ActionLink } from "../../components/ActionButton";
import styles from "./SessionResults.module.css";

interface SessionResultsProps {
  total: number;
  known: number;
  bestStreak: number;
  /** Omitted when nothing was missed. */
  onReviewMissed?: () => void;
  onRestart: () => void;
}

function getMessage(percent: number): string {
  if (percent === 100) return "Perfect run. Nothing slipped past you.";
  if (percent >= 80) return "Great work. You're nearly there.";
  if (percent >= 50) return "Solid progress. A quick second pass will lock it in.";
  return "Every card you've seen is a step forward. Go again!";
}

export function SessionResults({
  total,
  known,
  bestStreak,
  onReviewMissed,
  onRestart,
}: SessionResultsProps) {
  const percent = Math.round((known / total) * 100);
  const missedCount = total - known;

  return (
    <div className={styles.results}>
      <p className={styles.eyebrow}>SESSION COMPLETE</p>
      <h1 className={styles.title}>{getMessage(percent)}</h1>

      <div className={styles.stats}>
        <Stat value={`${percent}%`} label="recalled" />
        <Stat value={`${known}/${total}`} label="cards known" />
        <Stat value={String(bestStreak)} label="best streak" />
      </div>

      <div className={styles.actions}>
        {onReviewMissed && (
          <ActionButton onClick={onReviewMissed}>
            Review {missedCount} missed {missedCount === 1 ? "card" : "cards"}
          </ActionButton>
        )}
        <ActionButton variant={onReviewMissed ? "secondary" : "primary"} onClick={onRestart}>
          Go again
        </ActionButton>
        <ActionLink variant="secondary" href="/flashcard">
          Choose new topics
        </ActionLink>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.stat}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
