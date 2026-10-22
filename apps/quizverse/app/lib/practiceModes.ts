/** The ways to practise, shared by the navbar, the home page and every track dashboard. */
export interface PracticeMode {
  href: string;
  /** Short name for the navbar. */
  label: string;
  /** Upper-case kind shown on cards, e.g. "PRACTICE". */
  kind: string;
  title: string;
  description: string;
  actionLabel: string;
}

export const PRACTICE_MODES: PracticeMode[] = [
  {
    href: "/quiz",
    label: "Quiz",
    kind: "PRACTICE",
    title: "Quiz",
    description: "Mock tests or a quiz you configure yourself.",
    actionLabel: "Choose a quiz",
  },
  {
    href: "/flashcard",
    label: "Flashcards",
    kind: "REVIEW",
    title: "Flashcards",
    description: "Ready-made sessions or your own mix, one card at a time.",
    actionLabel: "Choose a session",
  },
  {
    href: "/learn",
    label: "Learn",
    kind: "LEARN",
    title: "Daily Bites",
    description: "One idea, about three minutes. Build a streak a little at a time.",
    actionLabel: "Start a bite",
  },
  {
    href: "/match",
    label: "Match",
    kind: "DRILL",
    title: "Quick Match",
    description: "Race the clock to pair each Article with what it says.",
    actionLabel: "Start matching",
  },
];
