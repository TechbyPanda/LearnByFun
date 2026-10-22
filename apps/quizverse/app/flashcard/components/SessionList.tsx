import { Eyebrow } from "../../components/Eyebrow";
import { SelectCard, SelectCardGrid } from "../../components/SelectCard";
import { plural } from "../../lib/format";
import { countSessionCards } from "../lib/deck";
import {
  SESSION_CATEGORY_ORDER,
  flashcardSessions,
  type FlashcardSession,
} from "../sessions";
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
          <section key={category} className={styles.category} aria-label={category}>
            <Eyebrow as="h3">{category}</Eyebrow>
            <SelectCardGrid>
              {sessions.map(({ session, cards }) => (
                <SelectCard
                  key={session.id}
                  tags={[...new Set(session.sections.map((s) => s.subject))]}
                  title={session.title}
                  description={session.description}
                  meta={`${cards} ${plural(cards, "card")}`}
                  actionLabel="Start"
                  onClick={() => onStart(session)}
                />
              ))}
            </SelectCardGrid>
          </section>
        );
      })}
    </div>
  );
}
