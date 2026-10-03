import { useEffect, useRef, useState } from "react";
import { WRONG_PENALTY_MS, finalTime, type Round } from "../lib/round";

const WRONG_FLASH_MS = 450;
const TICK_MS = 100;

export interface RoundResult {
  /** Time on the clock, before penalties. */
  elapsedMs: number;
  wrongCount: number;
  /** Ids of every pair involved in a wrong match. */
  confusedIds: string[];
  /** Elapsed time plus penalties. */
  totalMs: number;
}

/**
 * One round of matching: selection, wrong-match feedback, the penalty and the
 * clock. `onComplete` fires once, from the tap that finishes the round.
 */
export function useMatchRound(
  round: Round,
  timed: boolean,
  onComplete: (result: RoundResult) => void,
) {
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [flash, setFlash] = useState<{ left: string; right: string } | null>(null);
  const [wrongCount, setWrongCount] = useState(0);
  const [confused, setConfused] = useState<Set<string>>(new Set());
  const [finished, setFinished] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);

  const startedAt = useRef(0);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // The clock starts when the board appears...
  useEffect(() => {
    startedAt.current = performance.now();
  }, []);

  // ...ticks while the round is in play, and stops once it is finished.
  useEffect(() => {
    if (!timed || finished) return;
    const interval = setInterval(
      () => setElapsedMs(performance.now() - startedAt.current),
      TICK_MS,
    );
    return () => clearInterval(interval);
  }, [timed, finished]);

  useEffect(() => () => clearTimeout(flashTimer.current), []);

  function resolve(leftId: string, rightId: string) {
    setSelectedLeft(null);
    setSelectedRight(null);

    if (leftId === rightId) {
      const nextMatched = new Set(matched).add(leftId);
      setMatched(nextMatched);
      if (nextMatched.size === round.pairs.length) {
        const elapsed = performance.now() - startedAt.current;
        setElapsedMs(elapsed);
        setFinished(true);
        onComplete({
          elapsedMs: elapsed,
          wrongCount,
          confusedIds: [...confused],
          totalMs: timed ? finalTime(elapsed, wrongCount) : elapsed,
        });
      }
      return;
    }

    setWrongCount((count) => count + 1);
    setConfused((prev) => new Set(prev).add(leftId).add(rightId));
    setFlash({ left: leftId, right: rightId });
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), WRONG_FLASH_MS);
  }

  function select(side: "left" | "right", id: string) {
    if (finished || flash || matched.has(id)) return;

    // Tapping the selected item again deselects it.
    const left = side === "left" ? (selectedLeft === id ? null : id) : selectedLeft;
    const right = side === "right" ? (selectedRight === id ? null : id) : selectedRight;

    if (left && right) {
      resolve(left, right);
    } else {
      setSelectedLeft(left);
      setSelectedRight(right);
    }
  }

  return {
    matched,
    selectedLeft,
    selectedRight,
    flash,
    wrongCount,
    /** Elapsed time with penalties applied, for display. */
    displayMs: elapsedMs + wrongCount * WRONG_PENALTY_MS,
    select,
  };
}
