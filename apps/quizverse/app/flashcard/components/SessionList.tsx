import {
  SESSION_CATEGORY_ORDER,
  flashcardSessions,
  type FlashcardSession,
} from "../sessions";
import { countSessionCards } from "../lib/deck";
import styles from "./SessionList.module.css";

interface SessionListProps {
  onStart: (session: FlashcardSession) => void;
}

export function SessionList({ onStart }: SessionListProps) {
  return (
    <div className={styles.list}>
      {SESSION_CATEGORY_ORDER.map((category) => {
        const sessions = flashcardSessions
          .filter((session) => session.category === category)
          .map((session) => ({ session, cards: countSessionCards(session) }))
          .filter(({ cards }) => cards > 0);
        if (sessions.length === 0) return null;

        return (
          <section key={category} aria-label={category}>
            <h3 className={styles.category}>{category}</h3>
            <div className={styles.grid}>
              {sessions.map(({ session, cards }) => (
                <button
                  key={session.id}
                  type="button"
                  className={styles.card}
                  onClick={() => onStart(session)}
                >
                  <span className={styles.tags}>
                    {Array.from(new Set(session.sections.map((s) => s.subject))).map(
                      (subject) => (
                        <span key={subject} className={styles.tag}>
                          {subject}
                        </span>
                      ),
                    )}
                  </span>
                  <span className={styles.title}>{session.title}</span>
                  <span className={styles.description}>{session.description}</span>
                  <span className={styles.footer}>
                    <span>{cards} {cards === 1 ? "card" : "cards"}</span>
                    <span className={styles.go}>
                      Start <span aria-hidden="true">-&gt;</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
