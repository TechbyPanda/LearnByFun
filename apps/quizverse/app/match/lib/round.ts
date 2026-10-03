import { shuffleArray } from "../../lib/shuffle";
import type { MatchPair } from "../data";

export const ROUND_SIZE = 5;
export const WRONG_PENALTY_MS = 3000;
/** A retry of missed pairs is padded up to this many so there's still something to match. */
export const MIN_RETRY_SIZE = 3;

export interface Round {
  /** The pairs in play. */
  pairs: MatchPair[];
  /** The left and right columns: the same pairs, shuffled independently. */
  lefts: MatchPair[];
  rights: MatchPair[];
}

function layOut(pairs: MatchPair[]): Round {
  const lefts = shuffleArray(pairs);
  let rights = shuffleArray(pairs);
  // Avoid a board that is already solved top to bottom.
  while (pairs.length > 1 && rights.every((pair, i) => pair.id === lefts[i]?.id)) {
    rights = shuffleArray(pairs);
  }
  return { pairs, lefts, rights };
}

/** A fresh round: up to `size` random pairs from the set's pool. */
export function buildRound(pool: MatchPair[], size = ROUND_SIZE): Round {
  return layOut(shuffleArray(pool).slice(0, size));
}

/** A round made of the pairs the user mixed up, padded with others from the same round. */
export function buildRetryRound(
  round: Round,
  confusedIds: Iterable<string>,
  minSize = MIN_RETRY_SIZE,
): Round {
  const confused = new Set(confusedIds);
  const missed = round.pairs.filter((pair) => confused.has(pair.id));
  const padding = shuffleArray(round.pairs.filter((pair) => !confused.has(pair.id))).slice(
    0,
    Math.max(0, minSize - missed.length),
  );
  return layOut([...missed, ...padding]);
}

/** Elapsed time plus the penalty for every wrong match. */
export function finalTime(elapsedMs: number, wrongCount: number): number {
  return elapsedMs + wrongCount * WRONG_PENALTY_MS;
}

export function formatSeconds(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`;
}
