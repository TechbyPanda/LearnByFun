import type { TestPaper } from "./types";

export * from "./types";

export const testPapers: TestPaper[] = [
  {
    id: "polity-mock-20",
    title: "Polity Mock Test",
    description: "A focused mock test covering Indian Polity.",
    sections: [{ subject: "Polity", count: 5 }],
    shuffle: true,
  },
  {
    id: "economy-mock-15",
    title: "Economy Mock Test",
    description: "A focused mock test covering Indian Economy.",
    sections: [{ subject: "Economy", count: 5 }],
    shuffle: true,
  },
  {
    id: "environment-mock-10",
    title: "Environment Mock Test",
    description: "A focused mock test covering Environment and Ecology.",
    sections: [{ subject: "Environment", count: 5 }],
    shuffle: true,
  },
  {
    id: "polity-economy-mixed-20",
    title: "Polity + Economy Combined",
    description: "A balanced mock test mixing Polity and Economy questions.",
    sections: [
      { subject: "Polity", count: 5 },
      { subject: "Economy", count: 5 },
    ],
    shuffle: true,
  },
];
