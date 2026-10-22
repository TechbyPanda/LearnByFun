import type { ReactNode } from "react";
import { Eyebrow } from "../Eyebrow";
import styles from "./Panel.module.css";

interface PanelProps {
  eyebrow?: ReactNode;
  /** Rendered as the screen's h1: a panel is the main content of a session step. */
  title?: ReactNode;
  children: ReactNode;
}

/** The raised white card that holds a lesson, a check, or a results screen. */
export function Panel({ eyebrow, title, children }: PanelProps) {
  return (
    <section className={styles.panel}>
      {(eyebrow || title) && (
        <div className={styles.heading}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <h1 className={styles.title}>{title}</h1>}
        </div>
      )}
      {children}
    </section>
  );
}
