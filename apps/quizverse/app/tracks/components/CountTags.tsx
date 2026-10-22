import { Tag } from "../../components/Tag";
import { plural } from "../../lib/format";
import { CONTENT_KINDS, CONTENT_LABELS, type ContentCounts } from "../lib/coverage";
import styles from "./CountTags.module.css";

/** How much practice content a unit has, e.g. "50 MCQs" "12 flashcards", or "No content yet". */
export function CountTags({ counts }: { counts: ContentCounts }) {
  const present = CONTENT_KINDS.filter((kind) => counts[kind] > 0);

  return (
    <span className={styles.tags}>
      {present.length === 0 ? (
        <Tag tone="neutral">No content yet</Tag>
      ) : (
        present.map((kind) => (
          <Tag key={kind}>
            {counts[kind]} {plural(counts[kind], CONTENT_LABELS[kind].one, CONTENT_LABELS[kind].many)}
          </Tag>
        ))
      )}
    </span>
  );
}
