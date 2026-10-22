import { LinkCard } from "./components/LinkCard";
import { Page } from "./components/Page";
import { PageIntro } from "./components/PageIntro";
import { PRACTICE_MODES } from "./lib/practiceModes";
import { tracks } from "./tracks/data";
import styles from "./page.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <Page>
      <PageIntro eyebrow="Your study space" title="Quizverse" size="hero">
        Build a steady study habit, one focused session at a time.
      </PageIntro>

      <section className={styles.section} aria-labelledby="tracks-heading">
        <h2 id="tracks-heading" className={styles.sectionTitle}>
          Your tracks
        </h2>
        <div className={styles.cardList}>
          {tracks.map((track) => (
            <LinkCard
              key={track.id}
              href={`/tracks/${track.id}`}
              index={track.subtitle.toUpperCase()}
              title={track.title}
              description={track.description}
              actionLabel="Open dashboard"
              variant="filled"
            />
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="practice-heading">
        <h2 id="practice-heading" className={styles.sectionTitle}>
          Practice modes
        </h2>
        <div className={styles.cardList}>
          {PRACTICE_MODES.map((mode, i) => (
            <LinkCard
              key={mode.href}
              href={mode.href}
              index={`${pad(i + 1)} / ${mode.kind}`}
              title={mode.title}
              description={mode.description}
              actionLabel={mode.actionLabel}
            />
          ))}
        </div>
      </section>
    </Page>
  );
}
