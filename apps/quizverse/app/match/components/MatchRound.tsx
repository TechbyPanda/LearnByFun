import type { MatchSet } from "../data";
import { useMatchRound, type RoundResult } from "../hooks/useMatchRound";
import type { Round } from "../lib/round";
import { MatchBoard } from "./MatchBoard";
import { TimerBadge } from "./TimerBadge";
import styles from "./MatchRound.module.css";

interface MatchRoundProps {
  round: Round;
  set: Pick<MatchSet, "leftLabel" | "rightLabel">;
  timed: boolean;
  onComplete: (result: RoundResult) => void;
}

/** One playable round: the clock (when timed) above the two columns. */
export function MatchRound({ round, set, timed, onComplete }: MatchRoundProps) {
  const game = useMatchRound(round, timed, onComplete);

  return (
    <>
      <div className={styles.status}>
        {timed ? (
          <TimerBadge ms={game.displayMs} wrongCount={game.wrongCount} />
        ) : (
          <span className={styles.relaxed}>Relaxed: no clock, no penalties</span>
        )}
        <span className={styles.progress}>
          {game.matched.size} of {round.pairs.length} matched
        </span>
      </div>

      <p className={styles.hint}>Tap one item on each side that belong together.</p>

      <MatchBoard
        lefts={round.lefts}
        rights={round.rights}
        leftLabel={set.leftLabel}
        rightLabel={set.rightLabel}
        matched={game.matched}
        selectedLeft={game.selectedLeft}
        selectedRight={game.selectedRight}
        flash={game.flash}
        onSelect={game.select}
      />
    </>
  );
}
