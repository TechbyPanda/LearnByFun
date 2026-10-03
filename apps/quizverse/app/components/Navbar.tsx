import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        Quizverse
      </Link>
      <nav className={styles.links}>
        <Link href="/quiz" className={styles.link}>
          Quiz
        </Link>
        <Link href="/flashcard" className={styles.link}>
          Flashcards
        </Link>
        <Link href="/learn" className={styles.link}>
          Learn
        </Link>
      </nav>
    </header>
  );
}
