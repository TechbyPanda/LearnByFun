import { useState } from "react";
import type { MatchSet } from "../data";
import { buildRetryRound, buildRound, type Round } from "../lib/round";
import { useBestTimes, type BestOutcome } from "./useBestTimes";
import type { RoundResult } from "./useMatchRound";

interface RoundState {
  /** Changes every round, so the board remounts with fresh state. */
  id: number;
  data: Round;
  /** A retry of mix-ups is a different size, so it never counts towards a best time. */
  isRetry: boolean;
}

/** Plays rounds of one set back to back: new rounds, retries of mix-ups, and best times. */
export function useMatchGame(set: MatchSet, timed: boolean) {
  const { bests, submit } = useBestTimes();
  const [round, setRound] = useState<RoundState>(() => ({
    id: 0,
    data: buildRound(set.pairs),
    isRetry: false,
  }));
  const [outcome, setOutcome] = useState<{ result: RoundResult; best: BestOutcome | null } | null>(
    null,
  );

  function handleComplete(result: RoundResult) {
    const best = timed && !round.isRetry ? submit(set.id, result.totalMs) : null;
    setOutcome({ result, best });
  }

  function newRound() {
    setRound((prev) => ({ id: prev.id + 1, data: buildRound(set.pairs), isRetry: false }));
    setOutcome(null);
  }

  function retryMixups() {
    if (!outcome) return;
    setRound((prev) => ({
      id: prev.id + 1,
      data: buildRetryRound(prev.data, outcome.result.confusedIds),
      isRetry: true,
    }));
    setOutcome(null);
  }

  const mixups = outcome
    ? round.data.pairs.filter((pair) => outcome.result.confusedIds.includes(pair.id))
    : [];

  return { bests, round, outcome, mixups, handleComplete, newRound, retryMixups };
}
