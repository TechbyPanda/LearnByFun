import { ActionRow } from "../../components/ActionRow";
import { Button, ButtonLink } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { formatTime } from "../lib/formatTime";
import styles from "./ScoreSummary.module.css";

interface ScoreSummaryProps {
  score: number;
  total: number;
  incorrect: number;
  skipped: number;
  elapsedSeconds: number;
  onRestart: () => void;
  onRetryIncorrect: () => void;
}

/** The top of the review screen: score ring, stats and what to do next. */
export function ScoreSummary({
  score,
  total,
  incorrect,
  skipped,
  elapsedSeconds,
  onRestart,
  onRetryIncorrect,
}: ScoreSummaryProps) {
  const accuracy = total ? Math.round((score / total) * 100) : 0;

  return (
    <section className={styles.summary}>
      <div className={styles.ring} style={{ ["--pct" as string]: `${accuracy}%` }}>
        <span>{accuracy}%</span>
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>Quiz Complete</h1>
        <p className={styles.score}>
          {score} / {total} correct
        </p>
        <div className={styles.stats}>
          <Tag tone="neutral">✓ {score} correct</Tag>
          <Tag tone="neutral">✗ {incorrect} incorrect</Tag>
          <Tag tone="neutral">— {skipped} skipped</Tag>
          <Tag tone="neutral">⏱ {formatTime(elapsedSeconds)}</Tag>
        </div>
        <ActionRow>
          <Button onClick={onRestart}>Restart</Button>
          {incorrect > 0 && (
            <Button variant="secondary" onClick={onRetryIncorrect}>
              Retry incorrect ({incorrect})
            </Button>
          )}
          <ButtonLink variant="secondary" href="/quiz">
            New Quiz
          </ButtonLink>
        </ActionRow>
      </div>
    </section>
  );
}
