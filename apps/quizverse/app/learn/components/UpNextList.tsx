import Link from "next/link";
import { Tag } from "../../components/Tag";
import { biteHref } from "../lib/links";
import type { UpNextItem } from "../lib/schedule";
import styles from "./UpNextList.module.css";

interface UpNextListProps {
  items: UpNextItem[];
}

const MODE_TAG = {
  full: { label: "New · ~3 min", tone: "accent" },
  refresh: { label: "Refresher · ~1 min", tone: "highlight" },
} as const;

export function UpNextList({ items }: UpNextListProps) {
  return (
    <ul className={styles.list}>
      {items.map(({ bite, mode }) => (
        <li key={`${mode}-${bite.id}`}>
          <Link href={biteHref(bite.id, mode)} className={styles.item}>
            <span className={styles.badge}>
              <Tag tone={MODE_TAG[mode].tone}>{MODE_TAG[mode].label}</Tag>
            </span>
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
