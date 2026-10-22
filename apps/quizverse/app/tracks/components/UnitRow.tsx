import type { UnitView } from "../lib/coverage";
import { CountTags } from "./CountTags";
import styles from "./UnitRow.module.css";

/** One syllabus unit. Units with official wording open to show it. */
export function UnitRow({ unit }: { unit: UnitView }) {
  const heading = (
    <>
      <span className={styles.chevron} aria-hidden="true" />
      <span className={styles.title}>{unit.title}</span>
      <CountTags counts={unit.counts} />
    </>
  );

  if (unit.points.length === 0) {
    return (
      <li className={styles.unit}>
        <div className={styles.summary} data-static>
          {heading}
        </div>
      </li>
    );
  }

  return (
    <li className={styles.unit}>
      <details>
        <summary className={styles.summary}>{heading}</summary>
        <ul className={styles.points}>
          {unit.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </details>
    </li>
  );
}
