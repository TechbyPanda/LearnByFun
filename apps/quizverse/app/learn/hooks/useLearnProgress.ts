import { useEffect, useState } from "react";
import { EMPTY_PROGRESS, recordBite, toDateKey, type LearnProgress } from "../lib/progress";
import { loadProgress, saveProgress } from "../lib/storage";

/** Bite progress persisted in the browser. `today` is null until the client has mounted. */
export function useLearnProgress() {
  const [progress, setProgress] = useState<LearnProgress>(EMPTY_PROGRESS);
  const [today, setToday] = useState<string | null>(null);

  // Load after mount: localStorage and the current date don't exist during SSR.
  useEffect(() => {
    setProgress(loadProgress());
    setToday(toDateKey(new Date()));
  }, []);

  useEffect(() => {
    if (today !== null) saveProgress(progress);
  }, [today, progress]);

  function completeBite(biteId: string, correct: boolean) {
    const date = toDateKey(new Date());
    setToday(date);
    setProgress((prev) => recordBite(prev, biteId, correct, date));
  }

  return { progress, today, loaded: today !== null, completeBite };
}
