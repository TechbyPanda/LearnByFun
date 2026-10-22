import { economyChapter } from "./syllabus";

// Balance of payments, trade policy and export incentives.
export const externalSectorQuestions = economyChapter("External Sector", [
  // ---- Balance of Payments ----
  {
    id: "economy-005",
    subtopic: "Balance of Payments",
    question: "A country's Current Account records all of the following EXCEPT:",
    options: [
      "Trade in goods and services",
      "Net income from abroad",
      "Net transfers",
      "Foreign direct investment inflows",
    ],
    correctOptionId: "d",
    explanation: "FDI inflows are recorded in the Capital Account, not the Current Account, which covers trade, income, and unilateral transfers.",
  },
  // ---- Foreign Trade Policy & Export Incentives ----
  {
    id: "economy-013",
    subtopic: "Foreign Trade Policy & Export Incentives",
    question: "Consider the following statements regarding export promotion initiatives in India:\n1. The Remission of Duties and Taxes on Exported Products (RoDTEP) scheme remits un-refunded embedded taxes to ensure zero-rated exports.\n2. Under the Export Promotion Mission (EPM), collateral-free credit support to MSME exporters is supported by the Credit Guarantee Fund Trust for Micro and Small Enterprises.\n3. RoDTEP applies exclusively to public sector agricultural trading enterprises.\n\nWhich of the statements given above is/are correct?",
    options: [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "b",
    explanation: "Statements 1 and 2 are correct: RoDTEP remits central, state, and local taxes embedded in export items to make them competitive internationally [21], and the Export Promotion Mission provides interest subvention and collateral support via CGTMSE for MSME exporters [22, 23]. Statement 3 is incorrect: RoDTEP applies across diverse private and public sector export categories [21, 23].",
  },
]);
