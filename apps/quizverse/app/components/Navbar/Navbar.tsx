import Link from "next/link";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "/quiz", label: "Quiz" },
  { href: "/flashcard", label: "Flashcards" },
  { href: "/learn", label: "Learn" },
  { href: "/match", label: "Match" },
];

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        Quizverse
      </Link>
      <nav className={styles.links}>
        {LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
