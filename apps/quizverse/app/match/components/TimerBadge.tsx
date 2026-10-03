import { WRONG_PENALTY_MS, formatSeconds } from "../lib/round";
import styles from "./TimerBadge.module.css";

interface TimerBadgeProps {
  ms: number;
  wrongCount: number;
}

export function TimerBadge({ ms, wrongCount }: TimerBadgeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.time} aria-label="Time including penalties">
        {formatSeconds(ms)}
      </span>
      {wrongCount > 0 && (
        <span className={styles.penalty}>
          {wrongCount} {wrongCount === 1 ? "miss" : "misses"} (+
          {formatSeconds(wrongCount * WRONG_PENALTY_MS)})
        </span>
      )}
    </div>
  );
}
