import Link from "next/link";
import type { Flashcard } from "../../data";
import { shuffleArray } from "../../../lib/shuffle";
import { useStudySession } from "../hooks/useStudySession";
import { RateButtons } from "./RateButtons";
import { SessionResults } from "./SessionResults";
import { StudyCard } from "./StudyCard";
import styles from "./StudySession.module.css";

// A streak badge only appears once it is worth celebrating.
const STREAK_BADGE_MIN = 3;

interface StudySessionProps {
  cards: Flashcard[];
  onRetry: (cards: Flashcard[]) => void;
}

export function StudySession({ cards, onRetry }: StudySessionProps) {
  const session = useStudySession(cards);
  const { card, index, total, isFlipped, known, missed, streak } = session;

  if (!card) {
    return (
      <SessionResults
        total={total}
        known={known.length}
        bestStreak={session.bestStreak}
        onReviewMissed={missed.length > 0 ? () => onRetry(shuffleArray(missed)) : undefined}
        onRestart={() => onRetry(shuffleArray(cards))}
      />
    );
  }

  return (
    <>
      <div className={styles.header}>
        <Link className={styles.backLink} href="/flashcard">
          <span aria-hidden="true">&larr;</span> All sessions
        </Link>
        <p className={styles.count}>
          Card <strong>{index + 1}</strong> of {total}
        </p>
      </div>

      <div
        className={styles.progress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={index}
        aria-label="Session progress"
      >
        <div className={styles.progressFill} style={{ width: `${(index / total) * 100}%` }} />
      </div>

      <div className={styles.stats} aria-live="polite">
        <span className={styles.known}>{known.length} got it</span>
        <span className={styles.missed}>{missed.length} to revisit</span>
        {streak >= STREAK_BADGE_MIN && <span className={styles.streak}>{streak} in a row!</span>}
      </div>

      <StudyCard key={card.id} card={card} isFlipped={isFlipped} onFlip={session.flip} />

      <RateButtons visible={isFlipped} onRate={session.rate} />
    </>
  );
}
