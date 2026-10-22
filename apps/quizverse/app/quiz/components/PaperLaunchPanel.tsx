import { useState } from "react";
import { ActionRow } from "../../components/ActionRow";
import { Button } from "../../components/Button";
import { CheckboxField } from "../../components/CheckboxField";
import { Eyebrow } from "../../components/Eyebrow";
import { Tag } from "../../components/Tag";
import { getPaperCapacity, getResolvedQuestionCount } from "../../mcq/lib/buildQuestionPool";
import type { PaperOverrides } from "../../mcq/lib/quizUrl";
import type { TestPaper } from "../../mcq/testPapers";
import { CountPicker } from "./CountPicker";
import styles from "./PaperLaunchPanel.module.css";

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
      <div
        className={styles.panel}
        role="dialog"
        aria-modal
        aria-labelledby="paper-title"
        onClick={(e) => e.stopPropagation()}
      >
        <Tag>{paper.category}</Tag>
        <h2 id="paper-title" className={styles.title}>
          {paper.title}
        </h2>
        <p className={styles.description}>{paper.description}</p>

        <ul className={styles.sections}>
          {paper.sections.map((s, i) => (
            <li key={i}>
              <strong>{s.subject}</strong>
              {s.topics ? ` — ${s.topics.join(", ")}` : " — all topics"}
            </li>
          ))}
        </ul>

        <div className={styles.field}>
          <Eyebrow as="h3">Questions</Eyebrow>
          <CountPicker
            value={count}
            max={capacity}
            presets={[5, 10, 20, defaultCount]}
            onChange={setCount}
          />
        </div>

        <div className={styles.field}>
          <CheckboxField checked={shuffle} onChange={setShuffle}>
            Shuffle questions
          </CheckboxField>
        </div>

        <div className={styles.actions}>
          <ActionRow align="end">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleStart}>Start ({count} questions)</Button>
          </ActionRow>
        </div>
      </div>
    </div>
  );
}
