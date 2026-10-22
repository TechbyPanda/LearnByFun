import { ActionRow } from "../../components/ActionRow";
import { Button, ButtonLink } from "../../components/Button";
import { Panel } from "../../components/Panel";
import { plural } from "../../lib/format";
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
  const { wrongCount } = result;

  return (
    <Panel
      eyebrow="Round complete"
      title={
        wrongCount === 0
          ? "Flawless. No mix-ups."
          : `${wrongCount} ${plural(wrongCount, "mix-up")}. Worth a second look.`
      }
    >
      {timed && <TimeBlock result={result} best={best} />}

      {mixups.length > 0 && (
        <div>
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

      <ActionRow>
        {onRetryMissed && <Button onClick={onRetryMissed}>Retry the mix-ups</Button>}
        <Button variant={onRetryMissed ? "secondary" : "primary"} onClick={onNewRound}>
          New round
        </Button>
        <ButtonLink variant="secondary" href="/match">
          Choose another set
        </ButtonLink>
      </ActionRow>
    </Panel>
  );
}

function TimeBlock({ result, best }: Pick<MatchResultsProps, "result" | "best">) {
  return (
    <div className={styles.timeBlock}>
      <span className={styles.time}>{formatSeconds(result.totalMs)}</span>
      <span className={styles.timeNote}>
        {formatSeconds(result.elapsedMs)} on the clock
        {result.wrongCount > 0 &&
          ` + ${formatSeconds(result.totalMs - result.elapsedMs)} in penalties`}
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
  );
}
