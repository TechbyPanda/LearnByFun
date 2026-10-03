import styles from "./SegmentedControl.module.css";

export interface SegmentedOption<T extends string | number> {
  value: T;
  label: string;
}

interface SegmentedControlProps<T extends string | number> {
  options: readonly SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  size?: "sm" | "md";
}

/** A row of mutually exclusive choices, e.g. a view switcher or a size picker. */
export function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  label,
  size = "sm",
}: SegmentedControlProps<T>) {
  return (
    <div className={styles.control} data-size={size} role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={styles.segment}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
