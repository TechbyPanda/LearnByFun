import { useCallback, useEffect, useState } from "react";
import type { Flashcard } from "../../data";

/** Progress through one pass over `cards`: flipping, rating, streaks and keyboard shortcuts. */
export function useStudySession(cards: Flashcard[]) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<Flashcard[]>([]);
  const [missed, setMissed] = useState<Flashcard[]>([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const card = cards[index];

  const flip = useCallback(() => setIsFlipped((flipped) => !flipped), []);

  const rate = useCallback(
    (gotIt: boolean) => {
      if (!card) return;
      if (gotIt) {
        setKnown((prev) => [...prev, card]);
        setStreak(streak + 1);
        setBestStreak(Math.max(bestStreak, streak + 1));
      } else {
        setMissed((prev) => [...prev, card]);
        setStreak(0);
      }
      setIsFlipped(false);
      setIndex((prev) => prev + 1);
    },
    [card, streak, bestStreak],
  );

  useEffect(() => {
    if (!card) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === " " || event.key === "Enter") {
        // Let focused buttons and links handle their own activation.
        if (event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement) {
          return;
        }
        event.preventDefault();
        flip();
      } else if (isFlipped && event.key === "ArrowRight") {
        rate(true);
      } else if (isFlipped && event.key === "ArrowLeft") {
        rate(false);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [card, isFlipped, flip, rate]);

  return { card, index, total: cards.length, isFlipped, known, missed, streak, bestStreak, flip, rate };
}
