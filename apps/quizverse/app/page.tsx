import { LinkCard, type LinkCardProps } from "./components/LinkCard";
import { Page } from "./components/Page";
import { PageIntro } from "./components/PageIntro";
import styles from "./page.module.css";

const FEATURES: LinkCardProps[] = [
  {
    href: "/quiz",
    index: "01 / PRACTICE",
    title: "Quiz",
    description: "Mock tests or a quiz you configure yourself.",
    actionLabel: "Choose a quiz",
    variant: "filled",
  },
  {
    href: "/flashcard",
    index: "02 / REVIEW",
    title: "Flashcards",
    description: "Ready-made sessions or your own mix, one card at a time.",
    actionLabel: "Choose a session",
  },
  {
    href: "/learn",
    index: "03 / LEARN",
    title: "Daily Bites",
    description: "One idea, about three minutes. Build a streak a little at a time.",
    actionLabel: "Start a bite",
  },
  {
    href: "/match",
    index: "04 / DRILL",
    title: "Quick Match",
    description: "Race the clock to pair each Article with what it says.",
    actionLabel: "Start matching",
  },
];

export default function Home() {
  return (
    <Page>
      <PageIntro eyebrow="Your study space" title="Quizverse" size="hero">
        Build a steady study habit, one focused session at a time.
      </PageIntro>

      <div className={styles.cardList}>
        {FEATURES.map((feature) => (
          <LinkCard key={feature.href} {...feature} />
        ))}
      </div>
    </Page>
  );
}
