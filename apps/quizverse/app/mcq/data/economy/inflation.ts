import { economyChapter } from "./syllabus";

// Inflation and how it is measured.
export const inflationQuestions = economyChapter("Inflation & Price Indices", [
  // ---- Price Indices ----
  {
    id: "economy-006",
    subtopic: "Price Indices",
    question: "With reference to the Consumer Price Index (CPI) and Wholesale Price Index (WPI) in India, consider the following statements:\n1. While WPI measures price changes for goods only, CPI measures price changes for both goods and services.\n2. CPI is compiled and published on a weekly basis, whereas WPI is published on a monthly basis.\n3. The Ministry of Statistics and Programme Implementation is updating the CPI base year from 2012 to 2024 using data from the Household Consumption Expenditure Survey.\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "b",
    explanation: "Statement 1 is correct: WPI measures only prices of goods, whereas CPI incorporates both goods and services [1, 2]. Statement 2 is incorrect: CPI is compiled and published on a monthly basis, not weekly [2]. Statement 3 is correct: The government is updating the base year for CPI from 2012 to 2024 based on the latest Household Consumption Expenditure Survey to eliminate outdated basket components and base effects [3, 4].",
  },
]);
