import { ButtonLink } from "../../components/Button";
import { ProgressBar } from "../../components/ProgressBar";
import { Tag } from "../../components/Tag";
import type { Bite, LearningPath } from "../bites";
import { biteHref } from "../lib/links";
import styles from "./PathCard.module.css";

interface PathCardProps {
  path: LearningPath;
  done: number;
  total: number;
  /** The next bite to take; absent once the path is finished. */
  nextBite?: Bite;
}

export function PathCard({ path, done, total, nextBite }: PathCardProps) {
  return (
    <article className={styles.card}>
      <Tag>{path.subject}</Tag>
      <h3 className={styles.title}>{path.title}</h3>
      <p className={styles.description}>{path.description}</p>

      <ProgressBar value={done} max={total} label={`${path.title} progress`} />

      <div className={styles.footer}>
        <span className={styles.count}>
          {done} of {total} bites
        </span>
        {nextBite ? (
          <ButtonLink variant="text" href={biteHref(nextBite.id)}>
            {done === 0 ? "Start" : "Continue"} <span aria-hidden="true">-&gt;</span>
          </ButtonLink>
        ) : (
          done === total && <span className={styles.complete}>Path complete</span>
        )}
      </div>
    </article>
  );
}
