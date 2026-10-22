import { economyChapter } from "./syllabus";

// RBI, monetary policy, banking and digital currency.
export const moneyAndBankingQuestions = economyChapter("Money, Banking & Monetary Policy", [
  // ---- Monetary Policy Instruments ----
  {
    id: "economy-002",
    subtopic: "Monetary Policy Instruments",
    question: "The repo rate is the rate at which:",
    options: [
      "Commercial banks lend to the public",
      "RBI lends short-term funds to commercial banks",
      "Commercial banks lend to RBI",
      "The government borrows from RBI",
    ],
    correctOptionId: "b",
    explanation: "Repo rate is the rate at which the RBI lends short-term money to commercial banks against government securities.",
  },
  // ---- Monetary Policy Committee ----
  {
    id: "economy-004",
    subtopic: "Monetary Policy Committee",
    question: "The Monetary Policy Committee (MPC), which decides the repo rate, is headed by:",
    options: [
      "The Finance Minister",
      "The Governor of RBI",
      "The Chief Economic Adviser",
      "The NITI Aayog Vice-Chairman",
    ],
    correctOptionId: "b",
    explanation: "The MPC is a 6-member body chaired by the RBI Governor, established under the RBI Act, 1934 (as amended in 2016) to set the policy repo rate.",
  },
  // ---- Digital Currency & Crypto Assets ----
  {
    id: "economy-007",
    subtopic: "Digital Currency & Crypto Assets",
    question: "With reference to cryptocurrency regulations and Central Bank Digital Currencies (CBDC) in India, consider the following statements:\n1. Cryptocurrency is recognized as a legal tender for debt settlement under the Income Tax Act, 1961.\n2. The Financial Intelligence Unit (FIU) operates under the Ministry of Home Affairs to regulate virtual digital asset service providers.\n3. Virtual Digital Asset (VDA) service providers are required to register with the FIU for Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance.\n\nWhich of the statements given above is/are correct?",
    options: [
      "3 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "a",
    explanation: "Statement 1 is incorrect: Cryptocurrency is not a legal tender in India, although income from crypto transactions is taxed under the Income Tax Act [5]. Statement 2 is incorrect: The Financial Intelligence Unit (FIU) functions under the Department of Revenue, Ministry of Finance [6, 7]. Statement 3 is correct: FIU has designated crypto exchanges as Virtual Digital Asset (VDA) service providers, making registration and compliance mandatory [6-8].",
  },
]);
