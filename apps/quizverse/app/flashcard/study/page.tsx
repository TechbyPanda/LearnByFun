"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { EmptyState } from "../../components/EmptyState";
import { Page } from "../../components/Page";
import type { Flashcard } from "../data";
import { buildDeckFromQuery } from "../lib/deck";
import { StudySession } from "./components/StudySession";

export default function FlashcardStudyPage() {
  return (
    <Suspense fallback={null}>
      <Page width="narrow" compact>
        <FlashcardStudy />
      </Page>
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
      <EmptyState
        title="No flashcards selected"
        message="Pick some subjects and topics to review."
        actionHref="/flashcard"
        actionLabel="Back to Flashcards"
      />
    );
  }

  return (
    <StudySession
      key={retry.round}
      cards={retry.deck ?? initialDeck}
      onRetry={(deck) => setRetry((prev) => ({ round: prev.round + 1, deck }))}
    />
  );
}
