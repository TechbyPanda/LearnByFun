import { useState } from "react";
import type { TestPaper } from "../../mcq/testPapers";
import { getPaperCapacity, getResolvedQuestionCount } from "../../mcq/lib/buildQuestionPool";
import type { PaperOverrides } from "../../mcq/lib/quizUrl";
import { CountPicker } from "./CountPicker";
import styles from "../quiz.module.css";

interface PaperLaunchPanelProps {
  paper: TestPaper;
  onClose: () => void;
  onStart: (overrides: PaperOverrides) => void;
}

export function PaperLaunchPanel({ paper, onClose, onStart }: PaperLaunchPanelProps) {
  const defaultCount = getResolvedQuestionCount(paper.sections);
  const capacity = getPaperCapacity(paper.sections);
  const [count, setCount] = useState(defaultCount);
  const [shuffle, setShuffle] = useState(paper.shuffle);

  function handleStart() {
    // Only send what the user changed, so an untouched paper keeps its section balance.
    onStart({
      count: count === defaultCount ? undefined : count,
      shuffle: shuffle === paper.shuffle ? undefined : shuffle,
    });
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} role="dialog" aria-modal onClick={(e) => e.stopPropagation()}>
        <span className={styles.badge}>{paper.category}</span>
        <h2 className={styles.panelTitle}>{paper.title}</h2>
        <p className={styles.paperDescription}>{paper.description}</p>

        <ul className={styles.sectionList}>
          {paper.sections.map((s, i) => (
            <li key={i}>
              <strong>{s.subject}</strong>
              {s.topics ? ` — ${s.topics.join(", ")}` : " — all topics"}
            </li>
          ))}
        </ul>

        <h3 className={styles.fieldLabel}>Questions</h3>
        <CountPicker
          value={count}
          max={capacity}
          presets={[5, 10, 20, defaultCount]}
          onChange={setCount}
        />

        <label className={styles.checkRow}>
          <input type="checkbox" checked={shuffle} onChange={(e) => setShuffle(e.target.checked)} />
          Shuffle questions
        </label>

        <div className={styles.panelActions}>
          <button className={`${styles.btn} ${styles.btnGhost}`} onClick={onClose}>
            Cancel
          </button>
          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleStart}>
            Start ({count} questions)
          </button>
        </div>
      </div>
    </div>
  );
}
