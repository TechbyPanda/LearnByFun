"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { flashcardsBySubject, type Flashcard, type Subject } from "../data";
import styles from "./page.module.css";

export default function FlashcardStudyPage() {
  return (
    <Suspense fallback={null}>
      <FlashcardStudy />
    </Suspense>
  );
}

function useFlashcards(): Flashcard[] {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const topicsParam = searchParams.get("topics");
    if (!topicsParam) return [];

    let topicsBySubject: Partial<Record<Subject, string[]>>;
    try {
      topicsBySubject = JSON.parse(topicsParam);
    } catch {
      return [];
    }

    return (Object.entries(topicsBySubject) as [Subject, string[]][]).flatMap(
      ([subject, topics]) =>
        (flashcardsBySubject[subject] ?? []).filter((card) => topics.includes(card.topic)),
    );
  }, [searchParams]);
}

function FlashcardStudy() {
  const cards = useFlashcards();

  if (cards.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <h1>No flashcards selected</h1>
          <p>Pick some subjects and topics to review.</p>
          <Link className={styles.backButton} href="/flashcard">
            Back to Flashcards
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link className={styles.backLink} href="/flashcard">
          <span aria-hidden="true">&larr;</span> Edit selection
        </Link>
        <p className={styles.count}>
          <strong>{cards.length}</strong> {cards.length === 1 ? "card" : "cards"} to review
        </p>
      </div>

      <div className={styles.intro}>
        <p className={styles.eyebrow}>FLASHCARD REVIEW</p>
        <h1 className={styles.title}>Review your cards</h1>
        <p className={styles.subtitle}>Select a card to reveal its answer.</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <FlashcardTile key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

function FlashcardTile({ card, index }: { card: Flashcard; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      className={styles.cardOuter}
      onClick={() => setIsFlipped((prev) => !prev)}
      aria-label={isFlipped ? `Show question for ${card.topic}` : `Show answer for ${card.topic}`}
      aria-pressed={isFlipped}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.cardFlipped : ""}`}>
        <div className={`${styles.face} ${styles.faceFront}`}>
          <div className={styles.faceMeta}>
            <span className={styles.faceLabel}>PROMPT</span>
            <span className={styles.topic}>{card.topic}</span>
          </div>
          <p className={styles.text}>{card.front}</p>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className={`${styles.face} ${styles.faceBack}`}>
          <div className={styles.faceMeta}>
            <span className={styles.faceLabel}>ANSWER</span>
            <span className={styles.topic}>{card.topic}</span>
          </div>
          <p className={styles.text}>{card.back}</p>
          <span className={styles.flipHint}>Select to see prompt</span>
        </div>
      </div>
    </button>
  );
}
