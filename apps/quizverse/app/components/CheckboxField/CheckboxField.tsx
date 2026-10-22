import type { ReactNode } from "react";
import styles from "./CheckboxField.module.css";

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
}

/** A labelled on/off setting, e.g. "Shuffle cards". */
export function CheckboxField({ checked, onChange, children }: CheckboxFieldProps) {
  return (
    <label className={styles.field}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{children}</span>
    </label>
  );
}
