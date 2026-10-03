import Link from "next/link";
import type { Bite, LearningPath } from "../bites";
import styles from "./PathCard.module.css";

interface PathCardProps {
  path: LearningPath;
  done: number;
  total: number;
  /** The next bite to take; absent once the path is finished. */
  nextBite?: Bite;
}

export function PathCard({ path, done, total, nextBite }: PathCardProps) {
  const isComplete = done === total;
  const href = nextBite ? `/learn/bite?id=${nextBite.id}` : undefined;

  return (
    <article className={styles.card}>
      <span className={styles.tag}>{path.subject}</span>
      <h3 className={styles.title}>{path.title}</h3>
      <p className={styles.description}>{path.description}</p>

      <div
        className={styles.bar}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
        aria-label={`${path.title} progress`}
      >
        <div className={styles.fill} style={{ width: `${(done / total) * 100}%` }} />
      </div>

      <div className={styles.footer}>
        <span className={styles.count}>
          {done} of {total} bites
        </span>
        {href ? (
          <Link href={href} className={styles.action}>
            {done === 0 ? "Start" : "Continue"} <span aria-hidden="true">-&gt;</span>
          </Link>
        ) : (
          isComplete && <span className={styles.complete}>Path complete</span>
        )}
      </div>
    </article>
  );
}
