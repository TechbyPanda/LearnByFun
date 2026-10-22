import { ActionRow } from "../../../components/ActionRow";
import { Button, ButtonLink } from "../../../components/Button";
import { Panel } from "../../../components/Panel";
import { plural } from "../../../lib/format";
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
    <Panel eyebrow="Session complete" title={getMessage(percent)}>
      <div className={styles.stats}>
        <Stat value={`${percent}%`} label="recalled" />
        <Stat value={`${known}/${total}`} label="cards known" />
        <Stat value={String(bestStreak)} label="best streak" />
      </div>

      <ActionRow>
        {onReviewMissed && (
          <Button onClick={onReviewMissed}>
            Review {missedCount} missed {plural(missedCount, "card")}
          </Button>
        )}
        <Button variant={onReviewMissed ? "secondary" : "primary"} onClick={onRestart}>
          Go again
        </Button>
        <ButtonLink variant="secondary" href="/flashcard">
          Choose new topics
        </ButtonLink>
      </ActionRow>
    </Panel>
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
