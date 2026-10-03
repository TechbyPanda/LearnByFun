import styles from "./MatchItem.module.css";

export type MatchItemState = "idle" | "selected" | "matched" | "wrong";

interface MatchItemProps {
  label: string;
  state: MatchItemState;
  onSelect: () => void;
}

export function MatchItem({ label, state, onSelect }: MatchItemProps) {
  return (
    <button
      type="button"
      className={styles.item}
      data-state={state}
      onClick={onSelect}
      disabled={state === "matched"}
      aria-pressed={state === "selected"}
    >
      {label}
      {state === "matched" && <span aria-hidden="true">{"✓"}</span>}
    </button>
  );
}
