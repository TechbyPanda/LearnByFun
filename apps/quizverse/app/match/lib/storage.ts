import { readStorage, writeStorage } from "../../lib/storage";

const STORAGE_KEY = "match:bestTimes";

/** Best (lowest) final time in ms, per set id. */
export type BestTimes = Record<string, number>;

export function saveBestTimes(bests: BestTimes): void {
  writeStorage(STORAGE_KEY, bests);
}

export function loadBestTimes(): BestTimes {
  const saved = readStorage(STORAGE_KEY);
  if (!saved || typeof saved !== "object") return {};
  return Object.fromEntries(
    Object.entries(saved).filter(
      (entry): entry is [string, number] => typeof entry[1] === "number" && entry[1] > 0,
    ),
  );
}
