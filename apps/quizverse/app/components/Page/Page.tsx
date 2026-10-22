import type { ReactNode } from "react";
import styles from "./Page.module.css";

interface PageProps {
  /** narrow: one-thing-at-a-time screens; medium/wide: dashboards; full: dense tools like the quiz. */
  width?: "narrow" | "medium" | "wide" | "full";
  /** Less top padding, for in-session screens that start with a header bar. */
  compact?: boolean;
  children: ReactNode;
}

/** The page background and centred content column every route renders inside. */
export function Page({ width = "wide", compact, children }: PageProps) {
  return (
    <main className={styles.page} data-compact={compact || undefined}>
      <div className={styles.content} data-width={width}>
        {children}
      </div>
    </main>
  );
}
