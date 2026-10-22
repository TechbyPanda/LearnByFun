import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import styles from "./Button.module.css";

/**
 * - primary: the main action on screen.
 * - secondary: an alternative action next to a primary one.
 * - warning: a "not yet" choice, e.g. "Still learning".
 * - text: a low-emphasis inline action such as "Clear" or "<- Back".
 */
export type ButtonVariant = "primary" | "secondary" | "warning" | "text";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  /** Stretch to the container's full width. */
  block?: boolean;
}

/** The app's only button. Layout (spacing, rows) belongs to the parent, so there is no className. */
export function Button({
  variant = "primary",
  block,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & ButtonStyleProps) {
  return (
    <button
      type="button"
      className={styles.button}
      data-variant={variant}
      data-block={block || undefined}
      {...props}
    />
  );
}

/** A link that looks exactly like a Button. */
export function ButtonLink({
  variant = "primary",
  block,
  ...props
}: Omit<ComponentProps<typeof Link>, "className"> & ButtonStyleProps) {
  return (
    <Link
      className={styles.button}
      data-variant={variant}
      data-block={block || undefined}
      {...props}
    />
  );
}
