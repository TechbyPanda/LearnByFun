import type { TestPaper } from "./types";

export * from "./types";

export const testPapers: TestPaper[] = [
  {
    id: "polity-mock-20",
    title: "Polity Mock Test",
    description: "A focused mock test covering Indian Polity.",
    sections: [{ subject: "Polity", count: 20 }],
    shuffle: true,
  },
  {
    id: "economy-mock-15",
    title: "Economy Mock Test",
    description: "A focused mock test covering Indian Economy.",
    sections: [{ subject: "Economy", count: 15 }],
    shuffle: true,
  },
  {
    id: "polity-economy-mixed-20",
    title: "Polity + Economy Combined",
    description: "A balanced mock test mixing Polity and Economy questions.",
    sections: [
      { subject: "Polity", count: 10 },
      { subject: "Economy", count: 10 },
    ],
    shuffle: true,
  },
];
