import Link from "next/link";
import styles from "./LinkCard.module.css";

export interface LinkCardProps {
  href: string;
  index: string;
  title: string;
  description: string;
  actionLabel: string;
  /** "filled" is the dark primary card; "outline" is the light secondary one. */
  variant?: "filled" | "outline";
}

export function LinkCard({
  href,
  index,
  title,
  description,
  actionLabel,
  variant = "outline",
}: LinkCardProps) {
  return (
    <Link href={href} className={styles.card} data-variant={variant}>
      <span className={styles.index}>{index}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <span className={styles.action}>
        {actionLabel} <span aria-hidden="true">-&gt;</span>
      </span>
    </Link>
  );
}
