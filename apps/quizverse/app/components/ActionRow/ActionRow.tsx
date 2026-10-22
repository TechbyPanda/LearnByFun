import type { ReactNode } from "react";
import styles from "./ActionRow.module.css";

interface ActionRowProps {
  align?: "start" | "end";
  children: ReactNode;
}

/** A row of buttons. On a phone the buttons stack and go full width. */
export function ActionRow({ align = "start", children }: ActionRowProps) {
  return (
    <div className={styles.row} data-align={align}>
      {children}
    </div>
  );
}
