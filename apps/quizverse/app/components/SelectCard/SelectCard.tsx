import type { ReactNode } from "react";
import { Tag } from "../Tag";
import styles from "./SelectCard.module.css";

interface SelectCardProps {
  tags: string[];
  title: string;
  description: string;
  /** Small print in the footer, e.g. "12 cards". */
  meta?: ReactNode;
  actionLabel: string;
  /** A dashed outline marks the "make your own" option among ready-made ones. */
  dashed?: boolean;
  onClick: () => void;
}

/** One choice in a grid of sessions, sets or papers. */
export function SelectCard({
  tags,
  title,
  description,
  meta,
  actionLabel,
  dashed,
  onClick,
}: SelectCardProps) {
  return (
    <button
      type="button"
      className={styles.card}
      data-dashed={dashed || undefined}
      onClick={onClick}
    >
      <span className={styles.tags}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </span>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <span className={styles.footer}>
        <span>{meta}</span>
        <span className={styles.action}>
          {actionLabel} <span aria-hidden="true">-&gt;</span>
        </span>
      </span>
    </button>
  );
}

/** The responsive grid SelectCards sit in. */
export function SelectCardGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
