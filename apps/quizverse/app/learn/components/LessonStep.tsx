import { ActionButton } from "../../components/ActionButton";
import type { Bite } from "../bites";
import styles from "./LessonStep.module.css";

interface LessonStepProps {
  bite: Bite;
  onContinue: () => void;
}

export function LessonStep({ bite, onContinue }: LessonStepProps) {
  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>{bite.topic}</p>
      <h1 className={styles.title}>{bite.title}</h1>

      <ul className={styles.lines}>
        {bite.lesson.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {bite.mnemonic && (
        <p className={styles.hook}>
          <strong>Memory hook</strong>
          {bite.mnemonic}
        </p>
      )}

      <ActionButton onClick={onContinue}>
        Got it, test me <span aria-hidden="true">&nbsp;-&gt;</span>
      </ActionButton>
    </section>
  );
}
