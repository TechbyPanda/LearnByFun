import { economyChapter } from "./syllabus";

// Taxation, fiscal federalism, public debt and government revenue.
export const publicFinanceQuestions = economyChapter("Public Finance & Budget", [
  // ---- Taxation & GST ----
  {
    id: "economy-003",
    subtopic: "Taxation & GST",
    question: "GST in India is a:",
    options: [
      "Single-point origin-based tax",
      "Destination-based multi-stage tax",
      "Direct tax on income",
      "Tax levied only by the Union government",
    ],
    correctOptionId: "b",
    explanation: "GST is a destination-based tax levied at each stage of value addition, with credit for taxes paid at earlier stages, and revenue accruing to the state of consumption.",
  },
  // ---- Fiscal Federalism & Devolution ----
  {
    id: "economy-008",
    subtopic: "Fiscal Federalism & Devolution",
    question: "Consider the following statements regarding the devolution of taxes and cesses under Indian Fiscal Federalism:\n1. Under Article 270 of the Constitution, cesses and surcharges levied by the Union Government are excluded from the divisible pool of taxes devolved to states.\n2. Unspent cess revenue collected in a financial year can be reallocated by the Union Government for general administrative expenses in the following year.\n3. The 15th Finance Commission recommended a 41% vertical devolution share for states from the central divisible pool.\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "b",
    explanation: "Statement 1 is correct: Article 270 excludes cesses and surcharges from the divisible pool of taxes, allowing the Union Government to retain them entirely [9-11]. Statement 2 is incorrect: Cesses are earmarked for specific statutory/policy purposes; unspent funds must be carried forward for that designated purpose and cannot be repurposed for general administration [11]. Statement 3 is correct: The 15th Finance Commission recommended a 41% vertical devolution from the divisible pool to the states [12].",
  },
  // ---- Public Debt & Government Securities ----
  {
    id: "economy-010",
    subtopic: "Public Debt & Government Securities",
    question: "Consider the following statements regarding State Development Loans (SDLs) and Treasury Bills in India:\n1. Both the Union Government and State Governments are empowered to issue Treasury Bills to meet short-term liquidity mismatches.\n2. State Development Loans (SDLs) issued by state governments qualify as eligible securities for Statutory Liquidity Ratio (SLR) requirements by banks.\n3. SDLs are eligible collateral for Repo transactions with the Reserve Bank of India.\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "b",
    explanation: "Statement 1 is incorrect: State Governments are not permitted to issue Treasury Bills (T-bills); only the Union Government issues T-bills [15, 16]. Statements 2 and 3 are correct: SDLs qualify for Statutory Liquidity Ratio (SLR) requirements and are recognized as eligible collateral for RBI Repo transactions [16].",
  },
  // ---- Non-Tax Revenue ----
  {
    id: "economy-011",
    subtopic: "Non-Tax Revenue",
    question: "In the context of India's telecom sector, 'Adjusted Gross Revenue' (AGR) includes which of the following revenue-sharing components payable to the Union Government?\n1. Spectrum Usage Charges (SUC)\n2. Annual License Fees\n3. Corporate Income Tax\n\nSelect the correct answer using the code given below:",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3",
    ],
    correctOptionId: "a",
    explanation: "Adjusted Gross Revenue (AGR) refers to the revenue-sharing framework through which telecom operators pay License Fees and Spectrum Usage Charges (SUC) to the central government [17]. Corporate income tax is a separate direct tax levied under tax laws and is not a constituent of AGR calculations [17].",
  },
]);
