import { useState } from "react";
import { testPapers, type TestPaper, type TestPaperCategory } from "../../mcq/testPapers";
import { getPaperCapacity, getResolvedQuestionCount } from "../../mcq/lib/buildQuestionPool";
import styles from "../quiz.module.css";

type CategoryFilter = TestPaperCategory | "All";

// Tabs are derived from the papers, so a new category appears automatically.
const CATEGORIES: CategoryFilter[] = [
  "All",
  ...Array.from(new Set(testPapers.map((p) => p.category))),
];

interface PaperGridProps {
  onSelectPaper: (paper: TestPaper) => void;
  onCreateOwn: () => void;
}

export function PaperGrid({ onSelectPaper, onCreateOwn }: PaperGridProps) {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const visible = testPapers.filter((p) => category === "All" || p.category === category);

  return (
    <>
      <div className={styles.tabs} role="tablist">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            className={`${styles.tab} ${category === c ? styles.tabActive : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((paper) => {
          const questions = getResolvedQuestionCount(paper.sections);
          const subjects = Array.from(new Set(paper.sections.map((s) => s.subject)));
          return (
            <button
              key={paper.id}
              className={styles.paperCard}
              onClick={() => onSelectPaper(paper)}
            >
              <span className={styles.badge}>{paper.category}</span>
              <span className={styles.paperTitle}>{paper.title}</span>
              <span className={styles.paperDescription}>{paper.description}</span>
              <span className={styles.paperMeta}>
                {questions} questions · {subjects.join(", ")}
                {getPaperCapacity(paper.sections) > questions ? " · customizable" : ""}
              </span>
            </button>
          );
        })}

        <button className={`${styles.paperCard} ${styles.paperCardManual}`} onClick={onCreateOwn}>
          <span className={styles.badge}>Custom</span>
          <span className={styles.paperTitle}>Build Your Own Test</span>
          <span className={styles.paperDescription}>
            Pick subjects and topics, then choose how many questions.
          </span>
        </button>
      </div>
    </>
  );
}
