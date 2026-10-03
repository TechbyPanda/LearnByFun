import type { Flashcard } from "../../data";
import styles from "./StudyCard.module.css";

interface StudyCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export function StudyCard({ card, isFlipped, onFlip }: StudyCardProps) {
  return (
    <div className={styles.stage}>
      <button
        className={styles.outer}
        onClick={onFlip}
        aria-label={isFlipped ? "Show question" : "Show answer"}
      >
        <div className={styles.inner} data-flipped={isFlipped}>
          <Face side="front" label="QUESTION" topic={card.topic} text={card.front}>
            Tap or press Space to reveal
          </Face>
          <Face side="back" label="ANSWER" topic={card.topic} text={card.back}>
            Tap to see the question again
          </Face>
        </div>
      </button>
    </div>
  );
}

interface FaceProps {
  side: "front" | "back";
  label: string;
  topic: string;
  text: string;
  children: string;
}

function Face({ side, label, topic, text, children }: FaceProps) {
  return (
    <div className={styles.face} data-side={side}>
      <div className={styles.meta}>
        <span className={styles.label}>{label}</span>
        <span className={styles.topic}>{topic}</span>
      </div>
      <p className={styles.text}>{text}</p>
      <span className={styles.hint}>{children}</span>
    </div>
  );
}
