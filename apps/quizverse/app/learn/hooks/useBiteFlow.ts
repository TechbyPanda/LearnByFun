import { useState } from "react";
import type { BiteMode } from "../lib/schedule";

export type Step = "learn" | "recall" | "check" | "done";

const STEPS: Record<BiteMode, Step[]> = {
  full: ["learn", "recall", "check", "done"],
  refresh: ["recall", "done"],
};

/**
 * Walks a bite through its steps. `onComplete` fires exactly once, from the
 * event that finishes the last step (never from an effect).
 */
export function useBiteFlow(mode: BiteMode, onComplete: (correct: boolean) => void) {
  const steps = STEPS[mode];
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(false);

  const step = steps[index] ?? "done";
  const isLast = (steps[index + 1] ?? "done") === "done";

  function advance() {
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function complete(wasCorrect: boolean) {
    setCorrect(wasCorrect);
    onComplete(wasCorrect);
    advance();
  }

  return {
    step,
    // Steps shown in the progress indicator (everything before "done").
    visibleSteps: steps.filter((s) => s !== "done"),
    correct,
    /** Moves past the lesson. */
    continueFromLesson: advance,
    /** A refresher counts as correct when no card was missed; a full bite goes on to the check. */
    finishRecall(missed: number) {
      if (isLast) complete(missed === 0);
      else advance();
    },
    finishCheck: complete,
  };
}
