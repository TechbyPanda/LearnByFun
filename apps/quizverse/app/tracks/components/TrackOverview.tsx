import { ProgressBar } from "../../components/ProgressBar";
import { plural } from "../../lib/format";
import { CONTENT_KINDS, CONTENT_LABELS, type ContentCounts } from "../lib/coverage";
import styles from "./TrackOverview.module.css";

interface TrackOverviewProps {
  counts: ContentCounts;
  coveredUnits: number;
  totalUnits: number;
}

/** The track at a glance: how much content it has, and how much of the syllabus that reaches. */
export function TrackOverview({ counts, coveredUnits, totalUnits }: TrackOverviewProps) {
  const percent = totalUnits > 0 ? Math.round((coveredUnits / totalUnits) * 100) : 0;

  return (
    <section className={styles.overview} aria-label="Overview">
      <div className={styles.coverage}>
        <span className={styles.value}>{percent}%</span>
        <span className={styles.label}>
          of the syllabus has practice content ({coveredUnits} of {totalUnits} units)
        </span>
        <ProgressBar value={coveredUnits} max={totalUnits} label="Syllabus units with practice content" />
      </div>
      {CONTENT_KINDS.map((kind) => (
        <div key={kind} className={styles.stat}>
          <span className={styles.value}>{counts[kind]}</span>
          <span className={styles.label}>
            {plural(counts[kind], CONTENT_LABELS[kind].one, CONTENT_LABELS[kind].many)}
          </span>
        </div>
      ))}
    </section>
  );
}
