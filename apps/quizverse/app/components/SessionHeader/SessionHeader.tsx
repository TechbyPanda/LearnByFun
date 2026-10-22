import type { ReactNode } from "react";
import { ButtonLink } from "../Button";
import styles from "./SessionHeader.module.css";

interface SessionHeaderProps {
  backHref: string;
  backLabel: string;
  /** Shown on the right, e.g. the set title or "Card 3 of 10". */
  children?: ReactNode;
}

/** The bar above an in-progress session: a way out on the left, context on the right. */
export function SessionHeader({ backHref, backLabel, children }: SessionHeaderProps) {
  return (
    <div className={styles.header}>
      <ButtonLink variant="text" href={backHref}>
        <span aria-hidden="true">&larr;</span> {backLabel}
      </ButtonLink>
      {children && <p className={styles.meta}>{children}</p>}
    </div>
  );
}
