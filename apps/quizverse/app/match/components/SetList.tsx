import type { MatchSet } from "../data";
import { formatSeconds } from "../lib/round";
import type { BestTimes } from "../lib/storage";
import styles from "./SetList.module.css";

interface SetListProps {
  sets: MatchSet[];
  bests: BestTimes;
  onStart: (set: MatchSet) => void;
}

export function SetList({ sets, bests, onStart }: SetListProps) {
  return (
    <div className={styles.grid}>
      {sets.map((set) => {
        const best = bests[set.id];
        return (
          <button key={set.id} type="button" className={styles.card} onClick={() => onStart(set)}>
            <span className={styles.tag}>{set.topic}</span>
            <span className={styles.title}>{set.title}</span>
            <span className={styles.description}>{set.description}</span>
            <span className={styles.footer}>
              <span>
                {set.pairs.length} pairs
                {best !== undefined && ` · Best ${formatSeconds(best)}`}
              </span>
              <span className={styles.go}>
                Play <span aria-hidden="true">-&gt;</span>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
