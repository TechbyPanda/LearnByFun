import type { ButtonHTMLAttributes } from "react";
import styles from "./TextButton.module.css";

/** A low-emphasis, text-only action such as "Select all" or "Clear". */
export function TextButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={styles.button} {...props} />;
}
