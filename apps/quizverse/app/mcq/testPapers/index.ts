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
  {
    id: "history-battles-mock-25",
    title: "Modern History Mock — Battles",
    description: "Wars and battles of modern India, from the Carnatic Wars to 1857 and the frontier.",
    category: "Subject",
    sections: [
      {
        subject: "History",
        topics: ["Modern – Wars & Battles"],
        count: 25,
      },
    ],
    shuffle: true,
  },
  {
    id: "history-governance-mock-25",
    title: "Modern History Mock — Governance",
    description: "How the Company and the Crown ruled: expansion policies, land revenue, services and reforms.",
    category: "Subject",
    sections: [
      {
        subject: "History",
        topics: ["Modern – British Administration & Policies"],
        count: 25,
      },
    ],
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
        topics: ["Historical Background"],
        count: 25,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-dpsp",
    title: "Drill — Directive Principles (DPSP)",
    description: "Laxmikanth Ch. 8: Articles 36–51, classification, amendments and the FR–DPSP conflict.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: ["Directive Principles of State Policy"],
        count: 25,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-parliament",
    title: "Drill — Parliament",
    description: "Composition, presiding officers, bills, motions, budget, privileges and Zero Hour.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: ["Parliament"],
        count: 14,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-lokpal",
    title: "Drill — Lokpal & Lokayukta",
    description: "Anti-corruption institutions, powers and jurisdiction.",
    category: "Topic Drill",
    sections: [{ subject: "Polity", topics: ["Lokpal & Lokayukta"], count: 20 }],
    shuffle: true,
  },
  {
    id: "drill-governance",
    title: "Drill — Governance",
    description: "RTI, CVC and CBI, citizen-centric governance, e-governance, statutory bodies and civil services.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: ["Governance"],
        count: 25,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-centre-state",
    title: "Drill — Centre-State & Inter-State Relations",
    description: "Union–State legislative and administrative relations, river water disputes and the Inter-State Council.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Polity",
        topics: ["Centre–State Relations", "Inter-State Relations"],
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
        topics: ["Public Finance & Budget", "Money, Banking & Monetary Policy"],
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
        topics: ["Functions of an Ecosystem"],
        count: 10,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-wildlife",
    title: "Drill — Wildlife & Protected Areas",
    description: "Biodiversity patterns, tiger reserves, migratory birds, invasive species and human-wildlife conflict.",
    category: "Topic Drill",
    sections: [
      {
        subject: "Environment",
        topics: ["Biodiversity", "Protected Area Network", "Wildlife Conservation"],
        count: 10,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-battles-south-bengal",
    title: "Drill — Carnatic, Bengal & Mysore Wars",
    description: "Anglo-French rivalry, Plassey and Buxar, Panipat, and the four Anglo-Mysore Wars.",
    category: "Topic Drill",
    sections: [
      {
        subject: "History",
        topics: ["Modern – Wars & Battles"],
        subtopics: [
          "Carnatic Wars & Anglo-French Rivalry",
          "Plassey, Buxar & Bengal",
          "18th-Century Contests (Karnal, Panipat, Colachel)",
          "Anglo-Mysore Wars",
        ],
        count: 25,
      },
    ],
    shuffle: true,
  },
  {
    id: "drill-battles-maratha-sikh-frontier",
    title: "Drill — Maratha, Sikh & Frontier Wars",
    description: "Anglo-Maratha and Anglo-Sikh Wars, Gurkha, Burmese and Afghan wars, 1857 and key treaties.",
    category: "Topic Drill",
    sections: [
      {
        subject: "History",
        topics: ["Modern – Wars & Battles"],
        subtopics: [
          "Anglo-Maratha Wars",
          "Anglo-Sikh Wars & Sindh",
          "Gurkha, Burmese, Afghan & Frontier Wars",
          "Revolt of 1857 & Local Resistance",
          "Chronology & Treaties",
        ],
        count: 25,
      },
    ],
    shuffle: true,
  },
];
