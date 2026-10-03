import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ActionButton.module.css";

type Variant = "primary" | "secondary";

export function ActionButton({
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button type="button" className={styles.action} data-variant={variant} {...props} />;
}

export function ActionLink({
  variant = "primary",
  href,
  children,
}: {
  variant?: Variant;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={styles.action} data-variant={variant}>
      {children}
    </Link>
  );
}
