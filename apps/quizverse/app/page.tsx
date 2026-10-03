import { LinkCard } from "./components/LinkCard";
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
          <LinkCard
            href="/quiz"
            index="01 / PRACTICE"
            title="Quiz"
            description="Mock tests or a quiz you configure yourself."
            actionLabel="Choose a quiz"
            variant="filled"
          />
          <LinkCard
            href="/flashcard"
            index="02 / REVIEW"
            title="Flashcards"
            description="Ready-made sessions or your own mix, one card at a time."
            actionLabel="Choose a session"
          />
          <LinkCard
            href="/learn"
            index="03 / LEARN"
            title="Daily Bites"
            description="One idea, about three minutes. Build a streak a little at a time."
            actionLabel="Start a bite"
          />
          <LinkCard
            href="/match"
            index="04 / DRILL"
            title="Quick Match"
            description="Race the clock to pair each Article with what it says."
            actionLabel="Start matching"
          />
        </div>
      </div>
    </main>
  );
}
