import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>YOUR STUDY SPACE</p>
        <h1 className={styles.title}>Quizverse</h1>
        <p className={styles.subtitle}>
          Build a steady study habit, one focused session at a time.
        </p>

        <div className={styles.cardList}>
          <Link href="/quiz" className={`${styles.card} ${styles.quizCard}`}>
            <span className={styles.cardIndex}>01 / PRACTICE</span>
            <span className={styles.cardTitle}>Quiz</span>
            <span className={styles.cardDescription}>
              Mock tests or a quiz you configure yourself.
            </span>
            <span className={styles.cardAction}>
              Choose a quiz <span aria-hidden="true">-&gt;</span>
            </span>
          </Link>

          <Link href="/flashcard" className={`${styles.card} ${styles.flashcardCard}`}>
            <span className={styles.cardIndex}>02 / REVIEW</span>
            <span className={styles.cardTitle}>Flashcards</span>
            <span className={styles.cardDescription}>
              A new way to review is on its way.
            </span>
            <span className={styles.cardAction}>Coming soon</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
