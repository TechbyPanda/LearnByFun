import type { ReactNode } from "react";
import styles from "./Callout.module.css";

interface CalloutProps {
  tone: "success" | "warning" | "danger";
  title?: string;
  children: ReactNode;
}

/** A note with a coloured edge: answer feedback, a memory hook, a mix-up. */
export function Callout({ tone, title, children }: CalloutProps) {
  return (
    <div className={styles.callout} data-tone={tone}>
      {title && <strong className={styles.title}>{title}</strong>}
      <div>{children}</div>
    </div>
  );
}
