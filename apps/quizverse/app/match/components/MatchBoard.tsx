import type { MatchPair } from "../data";
import { MatchItem, type MatchItemState } from "./MatchItem";
import styles from "./MatchBoard.module.css";

interface MatchBoardProps {
  lefts: MatchPair[];
  rights: MatchPair[];
  leftLabel: string;
  rightLabel: string;
  matched: Set<string>;
  selectedLeft: string | null;
  selectedRight: string | null;
  /** The pair of items that were just matched wrongly, if any. */
  flash: { left: string; right: string } | null;
  onSelect: (side: "left" | "right", id: string) => void;
}

export function MatchBoard({
  lefts,
  rights,
  leftLabel,
  rightLabel,
  matched,
  selectedLeft,
  selectedRight,
  flash,
  onSelect,
}: MatchBoardProps) {
  function stateOf(id: string, selectedId: string | null, flashedId?: string): MatchItemState {
    if (matched.has(id)) return "matched";
    if (flashedId === id) return "wrong";
    return selectedId === id ? "selected" : "idle";
  }

  return (
    <div className={styles.board}>
      <section className={styles.column} aria-label={leftLabel}>
        <h2 className={styles.heading}>{leftLabel}</h2>
        {lefts.map((pair) => (
          <MatchItem
            key={pair.id}
            label={pair.left}
            state={stateOf(pair.id, selectedLeft, flash?.left)}
            onSelect={() => onSelect("left", pair.id)}
          />
        ))}
      </section>

      <section className={styles.column} aria-label={rightLabel}>
        <h2 className={styles.heading}>{rightLabel}</h2>
        {rights.map((pair) => (
          <MatchItem
            key={pair.id}
            label={pair.right}
            state={stateOf(pair.id, selectedRight, flash?.right)}
            onSelect={() => onSelect("right", pair.id)}
          />
        ))}
      </section>
    </div>
  );
}
