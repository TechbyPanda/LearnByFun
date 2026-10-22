import { ChipGroup, ToggleChip } from "../../components/ToggleChip";
import styles from "./CountPicker.module.css";

interface CountPickerProps {
  value: number;
  max: number;
  presets: number[];
  onChange: (value: number) => void;
}

/** Preset chips plus a slider for choosing how many questions to attempt. */
export function CountPicker({ value, max, presets, onChange }: CountPickerProps) {
  const options = Array.from(new Set([...presets, max]))
    .filter((n) => n >= 1 && n <= max)
    .sort((a, b) => a - b);

  return (
    <div className={styles.picker}>
      <ChipGroup label="Number of questions">
        {options.map((n) => (
          <ToggleChip key={n} pressed={value === n} onClick={() => onChange(n)}>
            {n === max ? `All (${n})` : n}
          </ToggleChip>
        ))}
      </ChipGroup>
      {max > 1 && (
        <input
          type="range"
          className={styles.slider}
          min={1}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label="Number of questions"
        />
      )}
      <span className={styles.hint}>
        {value} of {max} questions
      </span>
    </div>
  );
}
