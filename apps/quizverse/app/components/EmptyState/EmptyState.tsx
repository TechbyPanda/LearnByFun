import { ButtonLink } from "../Button";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  message: string;
  actionHref: string;
  actionLabel: string;
}

/** Shown when a URL points at nothing (no deck, unknown set...), with a way back. */
export function EmptyState({ title, message, actionHref, actionLabel }: EmptyStateProps) {
  return (
    <div className={styles.empty}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <ButtonLink href={actionHref}>{actionLabel}</ButtonLink>
    </div>
  );
}
