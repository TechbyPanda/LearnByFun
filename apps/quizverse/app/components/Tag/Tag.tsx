import type { ReactNode } from "react";
import styles from "./Tag.module.css";

export type TagTone = "accent" | "highlight" | "danger" | "neutral";

interface TagProps {
  tone?: TagTone;
  children: ReactNode;
}

/** A small rounded label: a subject, a category, a status or a stat. */
export function Tag({ tone = "accent", children }: TagProps) {
  return (
    <span className={styles.tag} data-tone={tone}>
      {children}
    </span>
  );
}
