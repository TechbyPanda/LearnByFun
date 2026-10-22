import type { ReactNode } from "react";
import { Eyebrow } from "../Eyebrow";
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  /** The subtitle. */
  children?: ReactNode;
  /** "hero" is the oversized landing-page title. */
  size?: "default" | "hero";
}

/** A page's opening block: eyebrow, h1 and subtitle. */
export function PageIntro({ eyebrow, title, children, size = "default" }: PageIntroProps) {
  return (
    <header className={styles.intro} data-size={size}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={styles.title}>{title}</h1>
      {children && <p className={styles.subtitle}>{children}</p>}
    </header>
  );
}
