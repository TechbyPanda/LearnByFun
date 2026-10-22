import Link from "next/link";
import styles from "./Navbar.module.css";

export interface NavLink {
  href: string;
  label: string;
}

/** The top bar: the brand, then whatever links the layout passes in. */
export function Navbar({ links }: { links: NavLink[] }) {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        Quizverse
      </Link>
      <nav className={styles.links}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
