import { Eyebrow } from "../../components/Eyebrow";
import styles from "./QuestionPalette.module.css";

interface QuestionPaletteProps {
  total: number;
  currentIndex: number;
  answers: (string | null)[];
  flagged: boolean[];
  goToQuestion: (index: number) => void;
}

export function QuestionPalette({
  total,
  currentIndex,
  answers,
  flagged,
  goToQuestion,
}: QuestionPaletteProps) {
  return (
    <aside className={styles.palette}>
      <Eyebrow as="h2">Questions</Eyebrow>
      <div className={styles.grid}>
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            className={styles.item}
            data-answered={answers[index] !== null || undefined}
            data-flagged={flagged[index] || undefined}
            aria-current={index === currentIndex || undefined}
            aria-label={`Question ${index + 1}`}
            onClick={() => goToQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <ul className={styles.legend}>
        <li>
          <i className={styles.dot} data-answered /> Answered
        </li>
        <li>
          <i className={styles.dot} data-flagged /> Marked
        </li>
        <li>
          <i className={styles.dot} /> Unanswered
        </li>
      </ul>
    </aside>
  );
}
