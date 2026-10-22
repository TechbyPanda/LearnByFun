import { economyChapter } from "./syllabus";

// National income, growth and macroeconomic indicators.
export const nationalIncomeQuestions = economyChapter("National Income & Growth", [
  // ---- National Income Accounting ----
  {
    id: "economy-001",
    subtopic: "National Income Accounting",
    question: "Which organization releases India's GDP growth estimates?",
    options: [
      "Reserve Bank of India",
      "National Statistical Office (NSO)",
      "NITI Aayog",
      "Ministry of Finance",
    ],
    correctOptionId: "b",
    explanation: "The National Statistical Office (NSO), under MoSPI, compiles and releases India's GDP estimates.",
  },
  // ---- Macroeconomic Indicators ----
  {
    id: "economy-012",
    subtopic: "Macroeconomic Indicators",
    question: "With reference to the Index of Industrial Production (IIP) in India, consider the following statements:\n1. The Eight Core Sectors account for over 40% of the weight of items included in the IIP.\n2. Electricity generation holds the single highest weight among the Eight Core Sectors.\n3. The IIP data is compiled and released on a monthly basis by the National Statistical Office (NSO).\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "b",
    explanation: "Statement 1 is correct: The Eight Core Sectors account for approximately 40.27% of the total weight in the IIP [18]. Statement 2 is incorrect: Petroleum Refinery Products holds the single highest weight among the eight core sectors, not Electricity [18]. Statement 3 is correct: IIP is compiled and published monthly by the NSO, Ministry of Statistics and Programme Implementation [19, 20].",
  },
]);
