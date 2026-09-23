import type { MCQQuestion } from "./types";

export const economyQuestions: MCQQuestion[] = [
  {
    id: "economy-001",
    subject: "Economy",
    topic: "Basics",
    question: "Which organization releases India's GDP growth estimates?",
    options: [
      { id: "a", text: "Reserve Bank of India" },
      { id: "b", text: "National Statistical Office (NSO)" },
      { id: "c", text: "NITI Aayog" },
      { id: "d", text: "Ministry of Finance" },
    ],
    correctOptionId: "b",
    explanation:
      "The National Statistical Office (NSO), under MoSPI, compiles and releases India's GDP estimates.",
  },
  {
    id: "economy-002",
    subject: "Economy",
    topic: "Monetary Policy",
    question: "The repo rate is the rate at which:",
    options: [
      { id: "a", text: "Commercial banks lend to the public" },
      { id: "b", text: "RBI lends short-term funds to commercial banks" },
      { id: "c", text: "Commercial banks lend to RBI" },
      { id: "d", text: "The government borrows from RBI" },
    ],
    correctOptionId: "b",
    explanation:
      "Repo rate is the rate at which the RBI lends short-term money to commercial banks against government securities.",
  },
  {
    id: "economy-003",
    subject: "Economy",
    topic: "Taxation",
    question: "GST in India is a:",
    options: [
      { id: "a", text: "Single-point origin-based tax" },
      { id: "b", text: "Destination-based multi-stage tax" },
      { id: "c", text: "Direct tax on income" },
      { id: "d", text: "Tax levied only by the Union government" },
    ],
    correctOptionId: "b",
    explanation:
      "GST is a destination-based tax levied at each stage of value addition, with credit for taxes paid at earlier stages, and revenue accruing to the state of consumption.",
  },
  {
    id: "economy-004",
    subject: "Economy",
    topic: "Institutions",
    question: "The Monetary Policy Committee (MPC), which decides the repo rate, is headed by:",
    options: [
      { id: "a", text: "The Finance Minister" },
      { id: "b", text: "The Governor of RBI" },
      { id: "c", text: "The Chief Economic Adviser" },
      { id: "d", text: "The NITI Aayog Vice-Chairman" },
    ],
    correctOptionId: "b",
    explanation:
      "The MPC is a 6-member body chaired by the RBI Governor, established under the RBI Act, 1934 (as amended in 2016) to set the policy repo rate.",
  },
  {
    id: "economy-005",
    subject: "Economy",
    topic: "External Sector",
    question: "A country's Current Account records all of the following EXCEPT:",
    options: [
      { id: "a", text: "Trade in goods and services" },
      { id: "b", text: "Net income from abroad" },
      { id: "c", text: "Net transfers" },
      { id: "d", text: "Foreign direct investment inflows" },
    ],
    correctOptionId: "d",
    explanation:
      "FDI inflows are recorded in the Capital Account, not the Current Account, which covers trade, income, and unilateral transfers.",
  },
];
