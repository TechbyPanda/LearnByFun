import { useEffect, useState } from "react";
import { loadBestTimes, saveBestTimes, type BestTimes } from "../lib/storage";

/** What recording a finished time did to the personal best. */
export interface BestOutcome {
  previous: number | null;
  isNewBest: boolean;
}

/** Personal best times per set, persisted in the browser. */
export function useBestTimes() {
  const [bests, setBests] = useState<BestTimes>({});

  // Load after mount: localStorage doesn't exist during SSR.
  useEffect(() => {
    setBests(loadBestTimes());
  }, []);

  /** Records a finished time and reports whether it beat the previous best. */
  function submit(setId: string, ms: number): BestOutcome {
    const previous = bests[setId] ?? null;
    const isNewBest = previous === null || ms < previous;
    if (isNewBest) {
      const next = { ...bests, [setId]: ms };
      setBests(next);
      saveBestTimes(next);
    }
    return { previous, isNewBest };
  }

  return { bests, submit };
}
