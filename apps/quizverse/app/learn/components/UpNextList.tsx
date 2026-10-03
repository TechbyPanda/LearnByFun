import Link from "next/link";
import type { UpNextItem } from "../lib/schedule";
import styles from "./UpNextList.module.css";

interface UpNextListProps {
  items: UpNextItem[];
}

const MODE_LABEL = { full: "New · ~3 min", refresh: "Refresher · ~1 min" } as const;

export function UpNextList({ items }: UpNextListProps) {
  return (
    <ul className={styles.list}>
      {items.map(({ bite, mode }) => (
        <li key={`${mode}-${bite.id}`}>
          <Link
            href={`/learn/bite?id=${bite.id}${mode === "refresh" ? "&mode=refresh" : ""}`}
            className={styles.item}
            data-mode={mode}
          >
            <span className={styles.badge}>{MODE_LABEL[mode]}</span>
            <span className={styles.title}>{bite.title}</span>
            <span className={styles.arrow} aria-hidden="true">
              -&gt;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
