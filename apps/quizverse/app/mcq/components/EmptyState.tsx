import Link from "next/link";
import styles from "./quiz.module.css";

export function EmptyState() {
  return (
    <div className={styles.page}>
      <div className={styles.emptyCard}>
        <h1>No quiz configured</h1>
        <p>Pick some subjects on the quiz page to start.</p>
        <Link className={`${styles.button} ${styles.primary}`} href="/quiz">
          Go to Quiz Setup
        </Link>
      </div>
    </div>
  );
}
