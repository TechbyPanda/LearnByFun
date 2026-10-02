import styles from "./quiz.module.css";

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
      <p className={styles.paletteTitle}>Questions</p>
      <div className={styles.paletteGrid}>
        {Array.from({ length: total }, (_, index) => {
          let cls = styles.paletteItem;
          if (answers[index] !== null) cls += ` ${styles.paletteAttempted}`;
          if (flagged[index]) cls += ` ${styles.paletteFlagged}`;
          if (index === currentIndex) cls += ` ${styles.paletteCurrent}`;

          return (
            <button key={index} className={cls} onClick={() => goToQuestion(index)}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <ul className={styles.legend}>
        <li><i className={`${styles.dot} ${styles.dotAttempted}`} /> Answered</li>
        <li><i className={`${styles.dot} ${styles.dotFlagged}`} /> Marked</li>
        <li><i className={styles.dot} /> Unanswered</li>
      </ul>
    </aside>
  );
}
