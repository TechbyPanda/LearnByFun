"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Flashcard } from "../data";
import { buildDeckFromQuery } from "../lib/deck";
import { shuffleArray } from "../lib/shuffle";
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

  // `round` remounts the session so each retry starts with fresh state.
  const [round, setRound] = useState(0);
  const [deck, setDeck] = useState<Flashcard[] | null>(null);
  const cards = deck ?? initialDeck;

  function retry(next: Flashcard[]) {
    setDeck(next);
    setRound((r) => r + 1);
  }

  if (initialDeck.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <h1>No flashcards selected</h1>
          <p>Pick some subjects and topics to review.</p>
          <Link className={styles.primaryLink} href="/flashcard">
            Back to Flashcards
          </Link>
        </div>
      </div>
    );
  }

  return <Session key={round} cards={cards} onRetry={retry} />;
}

interface SessionProps {
  cards: Flashcard[];
  onRetry: (cards: Flashcard[]) => void;
}

function Session({ cards, onRetry }: SessionProps) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<Flashcard[]>([]);
  const [missed, setMissed] = useState<Flashcard[]>([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const isDone = index >= cards.length;
  const card = cards[index];

  const rate = useCallback(
    (gotIt: boolean) => {
      if (!card) return;
      if (gotIt) {
        setKnown((prev) => [...prev, card]);
        setStreak(streak + 1);
        setBestStreak((best) => Math.max(best, streak + 1));
      } else {
        setMissed((prev) => [...prev, card]);
        setStreak(0);
      }
      setIsFlipped(false);
      setIndex((prev) => prev + 1);
    },
    [card, streak],
  );

  useEffect(() => {
    if (isDone) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === " " || event.key === "Enter") {
        // Let focused buttons handle their own activation.
        if (event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement) {
          return;
        }
        event.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped && event.key === "ArrowRight") {
        rate(true);
      } else if (isFlipped && event.key === "ArrowLeft") {
        rate(false);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isDone, isFlipped, rate]);

  if (isDone || !card) {
    return (
      <Results
        total={cards.length}
        known={known.length}
        bestStreak={bestStreak}
        onReviewMissed={() => onRetry(shuffleArray(missed))}
        onRestart={() => onRetry(shuffleArray(cards))}
        hasMissed={missed.length > 0}
      />
    );
  }

  const progress = (index / cards.length) * 100;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link className={styles.backLink} href="/flashcard">
          <span aria-hidden="true">&larr;</span> All sessions
        </Link>
        <p className={styles.count}>
          Card <strong>{index + 1}</strong> of {cards.length}
        </p>
      </div>

      <div
        className={styles.progress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={cards.length}
        aria-valuenow={index}
        aria-label="Session progress"
      >
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.stats} aria-live="polite">
        <span className={styles.statKnown}>{known.length} got it</span>
        <span className={styles.statMissed}>{missed.length} to revisit</span>
        {streak >= 3 && <span className={styles.streak}>{streak} in a row!</span>}
      </div>

      <div className={styles.stage}>
        <button
          key={card.id}
          className={styles.cardOuter}
          onClick={() => setIsFlipped((prev) => !prev)}
          aria-label={isFlipped ? "Show question" : "Show answer"}
        >
          <div className={`${styles.cardInner} ${isFlipped ? styles.cardFlipped : ""}`}>
            <div className={`${styles.face} ${styles.faceFront}`}>
              <div className={styles.faceMeta}>
                <span className={styles.faceLabel}>QUESTION</span>
                <span className={styles.topic}>{card.topic}</span>
              </div>
              <p className={styles.text}>{card.front}</p>
              <span className={styles.flipHint}>Tap or press Space to reveal</span>
            </div>
            <div className={`${styles.face} ${styles.faceBack}`}>
              <div className={styles.faceMeta}>
                <span className={styles.faceLabel}>ANSWER</span>
                <span className={styles.topic}>{card.topic}</span>
              </div>
              <p className={styles.text}>{card.back}</p>
              <span className={styles.flipHint}>Tap to see the question again</span>
            </div>
          </div>
        </button>
      </div>

      <div className={`${styles.rateRow} ${isFlipped ? "" : styles.rateRowHidden}`}>
        <button
          type="button"
          className={styles.againButton}
          onClick={() => rate(false)}
          tabIndex={isFlipped ? 0 : -1}
        >
          Still learning <kbd>&larr;</kbd>
        </button>
        <button
          type="button"
          className={styles.gotItButton}
          onClick={() => rate(true)}
          tabIndex={isFlipped ? 0 : -1}
        >
          Got it <kbd>&rarr;</kbd>
        </button>
      </div>
    </div>
  );
}

interface ResultsProps {
  total: number;
  known: number;
  bestStreak: number;
  hasMissed: boolean;
  onReviewMissed: () => void;
  onRestart: () => void;
}

function getMessage(percent: number): string {
  if (percent === 100) return "Perfect run. Nothing slipped past you.";
  if (percent >= 80) return "Great work. You're nearly there.";
  if (percent >= 50) return "Solid progress. A quick second pass will lock it in.";
  return "Every card you've seen is a step forward. Go again!";
}

function Results({
  total,
  known,
  bestStreak,
  hasMissed,
  onReviewMissed,
  onRestart,
}: ResultsProps) {
  const percent = Math.round((known / total) * 100);

  return (
    <div className={styles.page}>
      <div className={styles.results}>
        <p className={styles.eyebrow}>SESSION COMPLETE</p>
        <h1 className={styles.title}>{getMessage(percent)}</h1>

        <div className={styles.resultStats}>
          <div className={styles.resultStat}>
            <strong>{percent}%</strong>
            <span>recalled</span>
          </div>
          <div className={styles.resultStat}>
            <strong>
              {known}/{total}
            </strong>
            <span>cards known</span>
          </div>
          <div className={styles.resultStat}>
            <strong>{bestStreak}</strong>
            <span>best streak</span>
          </div>
        </div>

        <div className={styles.resultActions}>
          {hasMissed && (
            <button type="button" className={styles.primaryButton} onClick={onReviewMissed}>
              Review {total - known} missed {total - known === 1 ? "card" : "cards"}
            </button>
          )}
          <button
            type="button"
            className={hasMissed ? styles.secondaryButton : styles.primaryButton}
            onClick={onRestart}
          >
            Go again
          </button>
          <Link className={styles.secondaryButton} href="/flashcard">
            Choose new topics
          </Link>
        </div>
      </div>
    </div>
  );
}
