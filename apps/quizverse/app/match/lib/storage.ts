const STORAGE_KEY = "match:bestTimes";

/** Best (lowest) final time in ms, per set id. */
export type BestTimes = Record<string, number>;

export function saveBestTimes(bests: BestTimes): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bests));
  } catch {
    // Storage unavailable (private mode, quota) — persistence is best-effort.
  }
}

export function loadBestTimes(): BestTimes {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const saved = JSON.parse(raw) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(saved).filter(
        (entry): entry is [string, number] => typeof entry[1] === "number" && entry[1] > 0,
      ),
    );
  } catch {
    return {};
  }
}
