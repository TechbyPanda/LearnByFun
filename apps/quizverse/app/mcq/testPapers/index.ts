import type { TestPaper } from "./types";

export * from "./types";

export const testPapers: TestPaper[] = [
  // Quick — short warm-ups
  {
    id: "quick-mixed-10",
    title: "Quick 10 — Mixed",
    description: "A fast warm-up across Polity, Economy and Environment.",
    category: "Quick",
    sections: [
      { subject: "Polity", count: 4 },
      { subject: "Economy", count: 3 },
      { subject: "Environment", count: 3 },
    ],
    shuffle: true,
  },
  {
    id: "quick-polity-10",
    title: "Quick 10 — Polity",
    description: "Ten Polity questions to keep the Constitution fresh.",
    category: "Quick",
    sections: [{ subject: "Polity", count: 10 }],
    shuffle: true,
  },

  // Full length — exam-style mixes
  {
    id: "full-mixed-40",
    title: "Full Mock — GS Mixed",
    description: "An exam-style mix weighted towards Polity, with Economy and Environment.",
    category: "Full Length",
    sections: [
      { subject: "Polity", count: 20 },
      { subject: "Economy", count: 10 },
      { subject: "Environment", count: 10 },
    ],
    shuffle: true,
  },
  {
    id: "polity-economy-mixed-20",
    title: "Polity + Economy Combined",
    description: "A balanced mock test mixing Polity and Economy questions.",
    category: "Full Length",
    sections: [
      { subject: "Polity", count: 10 },
      { subject: "Economy", count: 10 },
    ],
    shuffle: true,
  },

  // Subject — one subject, larger sets
  {
    id: "polity-mock-20",
    title: "Polity Mock Test",
    description: "A focused mock test covering Indian Polity.",
    category: "Subject",
    sections: [{ subject: "Polity", count: 20 }],
    shuffle: true,
  },
  {
    id: "economy-mock-15",
    title: "Economy Mock Test",
    description: "A focused mock test covering Indian Economy.",
    category: "Subject",
    sections: [{ subject: "Economy", count: 14 }],
    shuffle: true,
  },
  {
    id: "environment-mock-10",
    title: "Environment Mock Test",
    description: "A focused mock test covering Environment and Ecology.",
    category: "Subject",
    sections: [{ subject: "Environment", count: 20 }],
    shuffle: true,
  },

  // Topic drills — go deep on one theme
  {
    id: "drill-historical-background",
    title: "Drill — Historical Background",
    description: "Laxmikanth Ch. 1: Company Rule, Crown Rule and the road to Independence.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: [
          "Historical Background – Company Rule (1773–1858)",
          "Historical Background – Crown Rule (1858–1947)",
          "Historical Background – Independence & First Governments",
        ],
        count: 25,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-lokpal",
    title: "Drill — Lokpal & Lokayukta",
    description: "Anti-corruption institutions, powers and jurisdiction.",
    category: "Topic Drill",
    sections: [{ subject: "Polity", topics: ["Lokpal and Lokayukta"], count: 20 }],
    shuffle: true,
  },
  {
    id: "drill-centre-state",
    title: "Drill — Centre-State Relations",
    description: "Administrative and legislative relations between Union and States.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: ["Administrative Relations", "Legislative Relations", "Federalism"],
        count: 20,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-public-finance",
    title: "Drill — Taxation & Public Finance",
    description: "Taxes, fiscal federalism, public debt and monetary policy.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Economy",
        topics: [
          "Taxation",
          "Fiscal Federalism & Taxation",
          "Public Debt & Government Securities",
          "Monetary Policy",
        ],
        count: 10,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-decomposition",
    title: "Drill — Decomposition & Ecosystems",
    description: "Stages and rates of decomposition, productivity and soil fertility.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Environment",
        topics: [
          "Stages of Decomposition",
          "Decomposition Rates & Soil Fertility",
          "Factors Affecting Decomposition & Regional Comparison",
          "Primary Productivity & Solar Radiation",
        ],
        count: 10,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-wildlife",
    title: "Drill — Wildlife & Protected Areas",
    description: "Tiger reserves, migratory birds, invasive species and human-wildlife conflict.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Environment",
        topics: [
          "Bandipur Tiger Reserve & Regional Protected Areas",
          "Protected Areas & Human-Wildlife Interaction",
          "Human-Wildlife Conflict Mitigation",
          "Invasive Alien Species & Ecological Impact",
          "Migratory Birds & Indian Flyways",
        ],
        count: 10,
      },
    ],
    shuffle: true,
  },
];
