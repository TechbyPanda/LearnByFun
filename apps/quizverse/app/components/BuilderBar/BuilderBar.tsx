import type { ReactNode } from "react";
import { Button } from "../Button";
import styles from "./BuilderBar.module.css";

/** The settings strip under a picker (session size, shuffle...). */
export function OptionsBar({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className={styles.options} aria-label={label}>
      {children}
    </section>
  );
}

/** One labelled setting inside an OptionsBar. */
export function OptionGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.group}>
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  );
}

interface StartBarProps {
  /** What the user is about to start, e.g. "12 cards in this session". */
  summary: ReactNode;
  actionLabel: string;
  disabled: boolean;
  onStart: () => void;
}

/** The footer of a builder: a live summary and the start button. */
export function StartBar({ summary, actionLabel, disabled, onStart }: StartBarProps) {
  return (
    <footer className={styles.start}>
      <p className={styles.summary} aria-live="polite">
        {summary}
      </p>
      <Button disabled={disabled} onClick={onStart}>
        {actionLabel} <span aria-hidden="true">-&gt;</span>
      </Button>
    </footer>
  );
}
