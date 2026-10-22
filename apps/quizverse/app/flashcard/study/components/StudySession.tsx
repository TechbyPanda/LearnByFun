import { ProgressBar } from "../../../components/ProgressBar";
import { SessionHeader } from "../../../components/SessionHeader";
import { Tag } from "../../../components/Tag";
import { shuffleArray } from "../../../lib/shuffle";
import type { Flashcard } from "../../data";
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
      <SessionHeader backHref="/flashcard" backLabel="All sessions">
        Card <strong>{index + 1}</strong> of {total}
      </SessionHeader>

      <ProgressBar value={index} max={total} label="Session progress" />

      <div className={styles.stats} aria-live="polite">
        <span className={styles.known}>{known.length} got it</span>
        <span className={styles.missed}>{missed.length} to revisit</span>
        {streak >= STREAK_BADGE_MIN && (
          <span className={styles.streak}>
            <Tag tone="highlight">{streak} in a row!</Tag>
          </span>
        )}
      </div>

      <StudyCard key={card.id} card={card} isFlipped={isFlipped} onFlip={session.flip} />

      <RateButtons visible={isFlipped} onRate={session.rate} />
    </>
  );
}
