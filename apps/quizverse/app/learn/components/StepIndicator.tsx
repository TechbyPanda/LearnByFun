import type { Step } from "../hooks/useBiteFlow";
import styles from "./StepIndicator.module.css";

const LABELS: Record<Step, string> = {
  learn: "Learn",
  recall: "Recall",
  check: "Check",
  done: "Done",
};

interface StepIndicatorProps {
  steps: Step[];
  current: Step;
}

export function StepIndicator({ steps, current }: StepIndicatorProps) {
  const currentIndex = steps.indexOf(current);

  return (
    <ol className={styles.steps} aria-label="Bite progress">
      {steps.map((step, index) => (
        <li
          key={step}
          className={styles.step}
          data-state={index < currentIndex || current === "done" ? "done" : index === currentIndex ? "current" : "todo"}
          aria-current={step === current ? "step" : undefined}
        >
          <span className={styles.bar} />
          <span className={styles.label}>{LABELS[step]}</span>
        </li>
      ))}
    </ol>
  );
}
