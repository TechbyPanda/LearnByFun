import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  /** Use a heading level when the label names the section below it. */
  as?: "p" | "span" | "h2" | "h3";
  children: ReactNode;
}

/** The small uppercase label above a title or group, e.g. "SESSION COMPLETE". */
export function Eyebrow({ as: Tag = "p", children }: EyebrowProps) {
  return <Tag className={styles.eyebrow}>{children}</Tag>;
}
