"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ActionLink } from "../components/ActionButton";
import type { Flashcard } from "../data";
import { buildDeckFromQuery } from "../lib/deck";
import { StudySession } from "./components/StudySession";
import styles from "./page.module.css";

export default function FlashcardStudyPage() {
  return (
    <Suspense fallback={null}>
      <FlashcardStudy />
    </Suspense>
  );
}

function FlashcardStudy() {
  const searchParams = useSearchParams();
  const initialDeck = useMemo(() => buildDeckFromQuery(searchParams), [searchParams]);

  // Retrying swaps in a new deck and bumps `round`, which remounts the session with fresh state.
  const [retry, setRetry] = useState<{ round: number; deck: Flashcard[] | null }>({
    round: 0,
    deck: null,
  });

  if (initialDeck.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <h1>No flashcards selected</h1>
          <p>Pick some subjects and topics to review.</p>
          <ActionLink href="/flashcard">Back to Flashcards</ActionLink>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <StudySession
        key={retry.round}
        cards={retry.deck ?? initialDeck}
        onRetry={(deck) => setRetry((prev) => ({ round: prev.round + 1, deck }))}
      />
    </div>
  );
}
