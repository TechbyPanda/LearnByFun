import type { FlashcardSession, FlashcardSessionCategory } from "./types";

export * from "./types";

export const SESSION_CATEGORY_ORDER: FlashcardSessionCategory[] = [
  "Quick",
  "Mixed",
  "Subject",
  "Topic Drill",
];

export const flashcardSessions: FlashcardSession[] = [
  // Quick — short warm-ups
  {
    id: "quick-mixed-10",
    title: "Quick 10 — Mixed",
    description: "A fast warm-up across Polity, Economy and Environment.",
    category: "Quick",
    sections: [
      { subject: "Polity", count: 5 },
      { subject: "Economy", count: 3 },
      { subject: "Environment", count: 2 },
    ],
    shuffle: true,
  },
  {
    id: "quick-polity-10",
    title: "Quick 10 — Polity",
    description: "Ten Polity cards to keep the Constitution fresh.",
    category: "Quick",
    sections: [{ subject: "Polity", count: 10 }],
    shuffle: true,
  },

  // Mixed — combine subjects
  {
    id: "polity-economy-10",
    title: "Polity + Economy",
    description: "Ten cards, split evenly between Polity and Economy.",
    category: "Mixed",
    sections: [
      { subject: "Polity", count: 5 },
      { subject: "Economy", count: 5 },
    ],
    shuffle: true,
  },
  {
    id: "environment-economy",
    title: "Environment + Economy",
    description: "Every Environment and Economy card, shuffled together.",
    category: "Mixed",
    sections: [{ subject: "Environment" }, { subject: "Economy" }],
    shuffle: true,
  },

  // Subject — one subject in full
  {
    id: "polity-all",
    title: "All of Polity",
    description: "Every Polity card, from the Constitution to local government.",
    category: "Subject",
    sections: [{ subject: "Polity" }],
    shuffle: true,
  },
  {
    id: "economy-all",
    title: "All of Economy",
    description: "Every Economy card in one session.",
    category: "Subject",
    sections: [{ subject: "Economy" }],
    shuffle: true,
  },
  {
    id: "environment-all",
    title: "All of Environment",
    description: "Every Environment card in one session.",
    category: "Subject",
    sections: [{ subject: "Environment" }],
    shuffle: true,
  },

  // Topic drills — go deep on one theme
  {
    id: "drill-polity-historical-background",
    title: "Polity — Historical Background",
    description:
      "Laxmikanth Ch. 1 in order: Company Rule, Crown Rule and the road to Independence.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: [
          "Historical Background – Company Rule (1773–1858)",
          "Historical Background – Crown Rule (1858–1947)",
          "Historical Background – Independence & First Governments",
        ],
      },
    ],
    // Chronological order matters for history, so this one stays unshuffled.
    shuffle: false,
  },
];
