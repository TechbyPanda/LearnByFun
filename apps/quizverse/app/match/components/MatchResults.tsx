import { ActionButton, ActionLink } from "../../components/ActionButton";
import type { MatchPair } from "../data";
import type { BestOutcome } from "../hooks/useBestTimes";
import type { RoundResult } from "../hooks/useMatchRound";
import { formatSeconds } from "../lib/round";
import styles from "./MatchResults.module.css";

interface MatchResultsProps {
  timed: boolean;
  result: RoundResult;
  /** Null when this round doesn't count towards a best time (relaxed mode, or a retry). */
  best: BestOutcome | null;
  /** The pairs that were mixed up, shown with their correct partners. */
  mixups: MatchPair[];
  /** Omitted when nothing was mixed up. */
  onRetryMissed?: () => void;
  onNewRound: () => void;
}

export function MatchResults({
  timed,
  result,
  best,
  mixups,
  onRetryMissed,
  onNewRound,
}: MatchResultsProps) {
  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>ROUND COMPLETE</p>
      <h1 className={styles.title}>
        {result.wrongCount === 0
          ? "Flawless. No mix-ups."
          : `${result.wrongCount} mix-up${result.wrongCount === 1 ? "" : "s"}. Worth a second look.`}
      </h1>

      {timed && (
        <div className={styles.timeBlock}>
          <span className={styles.time}>{formatSeconds(result.totalMs)}</span>
          <span className={styles.timeNote}>
            {formatSeconds(result.elapsedMs)} on the clock
            {result.wrongCount > 0 && ` + ${formatSeconds(result.totalMs - result.elapsedMs)} in penalties`}
          </span>
          {best?.isNewBest && (
            <span className={styles.newBest}>
              {best.previous === null ? "First time on the board!" : "New personal best!"}
            </span>
          )}
          {best && !best.isNewBest && best.previous !== null && (
            <span className={styles.timeNote}>Personal best: {formatSeconds(best.previous)}</span>
          )}
        </div>
      )}

      {mixups.length > 0 && (
        <div className={styles.mixups}>
          <h2 className={styles.mixupsTitle}>Mix-ups to review</h2>
          <ul className={styles.list}>
            {mixups.map((pair) => (
              <li key={pair.id}>
                <strong>{pair.left}</strong>
                <span>{pair.right}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.actions}>
        {onRetryMissed && <ActionButton onClick={onRetryMissed}>Retry the mix-ups</ActionButton>}
        <ActionButton variant={onRetryMissed ? "secondary" : "primary"} onClick={onNewRound}>
          New round
        </ActionButton>
        <ActionLink variant="secondary" href="/match">
          Choose another set
        </ActionLink>
      </div>
    </section>
  );
}
