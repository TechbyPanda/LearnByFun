import type { ReactNode } from "react";
import styles from "./ToggleChip.module.css";

interface ToggleChipProps {
  pressed: boolean;
  onClick: () => void;
  /** A small trailing number, e.g. how many cards a topic has. */
  count?: number;
  children: ReactNode;
}

/** A pill that is on or off: a topic, a filter, a preset. */
export function ToggleChip({ pressed, onClick, count, children }: ToggleChipProps) {
  return (
    <button type="button" className={styles.chip} aria-pressed={pressed} onClick={onClick}>
      {children}
      {count !== undefined && <span className={styles.count}>{count}</span>}
    </button>
  );
}

/** A wrapping row of ToggleChips, labelled for screen readers. */
export function ChipGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.group} role="group" aria-label={label}>
      {children}
    </div>
  );
}
