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
    question:
      "The Monetary Policy Committee (MPC), which decides the repo rate, is headed by:",
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
    question:
      "A country's Current Account records all of the following EXCEPT:",
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
  {
    id: "economy-006",
    subject: "Economy",
    topic: "Consumer Price Index & Price Indices",
    question:
      "With reference to the Consumer Price Index (CPI) and Wholesale Price Index (WPI) in India, consider the following statements:\n1. While WPI measures price changes for goods only, CPI measures price changes for both goods and services.\n2. CPI is compiled and published on a weekly basis, whereas WPI is published on a monthly basis.\n3. The Ministry of Statistics and Programme Implementation is updating the CPI base year from 2012 to 2024 using data from the Household Consumption Expenditure Survey.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "1 and 3 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statement 1 is correct: WPI measures only prices of goods, whereas CPI incorporates both goods and services [1, 2]. Statement 2 is incorrect: CPI is compiled and published on a monthly basis, not weekly [2]. Statement 3 is correct: The government is updating the base year for CPI from 2012 to 2024 based on the latest Household Consumption Expenditure Survey to eliminate outdated basket components and base effects [3, 4].",
  },
  {
    id: "economy-007",
    subject: "Economy",
    topic: "Digital Assets & Financial Regulation",
    question:
      "With reference to cryptocurrency regulations and Central Bank Digital Currencies (CBDC) in India, consider the following statements:\n1. Cryptocurrency is recognized as a legal tender for debt settlement under the Income Tax Act, 1961.\n2. The Financial Intelligence Unit (FIU) operates under the Ministry of Home Affairs to regulate virtual digital asset service providers.\n3. Virtual Digital Asset (VDA) service providers are required to register with the FIU for Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance.\n\nWhich of the statements given above is/are correct?",
    options: [
      { id: "a", text: "3 only" },
      { id: "b", text: "1 and 2 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "a",
    explanation:
      "Statement 1 is incorrect: Cryptocurrency is not a legal tender in India, although income from crypto transactions is taxed under the Income Tax Act [5]. Statement 2 is incorrect: The Financial Intelligence Unit (FIU) functions under the Department of Revenue, Ministry of Finance [6, 7]. Statement 3 is correct: FIU has designated crypto exchanges as Virtual Digital Asset (VDA) service providers, making registration and compliance mandatory [6-8].",
  },
  {
    id: "economy-008",
    subject: "Economy",
    topic: "Fiscal Federalism & Taxation",
    question:
      "Consider the following statements regarding the devolution of taxes and cesses under Indian Fiscal Federalism:\n1. Under Article 270 of the Constitution, cesses and surcharges levied by the Union Government are excluded from the divisible pool of taxes devolved to states.\n2. Unspent cess revenue collected in a financial year can be reallocated by the Union Government for general administrative expenses in the following year.\n3. The 15th Finance Commission recommended a 41% vertical devolution share for states from the central divisible pool.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "1 and 3 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statement 1 is correct: Article 270 excludes cesses and surcharges from the divisible pool of taxes, allowing the Union Government to retain them entirely [9-11]. Statement 2 is incorrect: Cesses are earmarked for specific statutory/policy purposes; unspent funds must be carried forward for that designated purpose and cannot be repurposed for general administration [11]. Statement 3 is correct: The 15th Finance Commission recommended a 41% vertical devolution from the divisible pool to the states [12].",
  },
  {
    id: "economy-009",
    subject: "Economy",
    topic: "Energy & Biofuels Policy",
    question:
      "With reference to the National Policy on Biofuels 2018, consider the following statements:\n1. The policy targets 20% ethanol blending in petrol by 2025–26.\n2. The policy sets a target of 5% biodiesel blending in diesel by 2030.\n3. India has currently achieved over 5% biodiesel blending in commercial diesel fuel.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "a",
    explanation:
      "Statements 1 and 2 are correct: The National Policy on Biofuels (2018) targets 20% ethanol blending in petrol by 2025–26 and 5% biodiesel blending in diesel by 2030 [13]. Statement 3 is incorrect: Biodiesel blending in diesel currently remains below 1% in India [13, 14].",
  },
  {
    id: "economy-010",
    subject: "Economy",
    topic: "Public Debt & Government Securities",
    question:
      "Consider the following statements regarding State Development Loans (SDLs) and Treasury Bills in India:\n1. Both the Union Government and State Governments are empowered to issue Treasury Bills to meet short-term liquidity mismatches.\n2. State Development Loans (SDLs) issued by state governments qualify as eligible securities for Statutory Liquidity Ratio (SLR) requirements by banks.\n3. SDLs are eligible collateral for Repo transactions with the Reserve Bank of India.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statement 1 is incorrect: State Governments are not permitted to issue Treasury Bills (T-bills); only the Union Government issues T-bills [15, 16]. Statements 2 and 3 are correct: SDLs qualify for Statutory Liquidity Ratio (SLR) requirements and are recognized as eligible collateral for RBI Repo transactions [16].",
  },
  {
    id: "economy-011",
    subject: "Economy",
    topic: "Telecom Sector & Government Revenues",
    question:
      "In the context of India's telecom sector, 'Adjusted Gross Revenue' (AGR) includes which of the following revenue-sharing components payable to the Union Government?\n1. Spectrum Usage Charges (SUC)\n2. Annual License Fees\n3. Corporate Income Tax\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "a",
    explanation:
      "Adjusted Gross Revenue (AGR) refers to the revenue-sharing framework through which telecom operators pay License Fees and Spectrum Usage Charges (SUC) to the central government [17]. Corporate income tax is a separate direct tax levied under tax laws and is not a constituent of AGR calculations [17].",
  },
  {
    id: "economy-012",
    subject: "Economy",
    topic: "Industrial Production & Macroeconomic Indicators",
    question:
      "With reference to the Index of Industrial Production (IIP) in India, consider the following statements:\n1. The Eight Core Sectors account for over 40% of the weight of items included in the IIP.\n2. Electricity generation holds the single highest weight among the Eight Core Sectors.\n3. The IIP data is compiled and released on a monthly basis by the National Statistical Office (NSO).\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "1 and 3 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statement 1 is correct: The Eight Core Sectors account for approximately 40.27% of the total weight in the IIP [18]. Statement 2 is incorrect: Petroleum Refinery Products holds the single highest weight among the eight core sectors, not Electricity [18]. Statement 3 is correct: IIP is compiled and published monthly by the NSO, Ministry of Statistics and Programme Implementation [19, 20].",
  },
  {
    id: "economy-013",
    subject: "Economy",
    topic: "External Sector & Export Incentives",
    question:
      "Consider the following statements regarding export promotion initiatives in India:\n1. The Remission of Duties and Taxes on Exported Products (RoDTEP) scheme remits un-refunded embedded taxes to ensure zero-rated exports.\n2. Under the Export Promotion Mission (EPM), collateral-free credit support to MSME exporters is supported by the Credit Guarantee Fund Trust for Micro and Small Enterprises.\n3. RoDTEP applies exclusively to public sector agricultural trading enterprises.\n\nWhich of the statements given above is/are correct?",
    options: [
      { id: "a", text: "1 only" },
      { id: "b", text: "1 and 2 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2 and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statements 1 and 2 are correct: RoDTEP remits central, state, and local taxes embedded in export items to make them competitive internationally [21], and the Export Promotion Mission provides interest subvention and collateral support via CGTMSE for MSME exporters [22, 23]. Statement 3 is incorrect: RoDTEP applies across diverse private and public sector export categories [21, 23].",
  },
  {
    id: "economy-014",
    subject: "Economy",
    topic: "International Financial Reports",
    question:
      "Which international organization publishes the biannual 'World Economic Outlook' report containing global GDP growth projections?",
    options: [
      { id: "a", text: "World Bank" },
      { id: "b", text: "World Economic Forum (WEF)" },
      { id: "c", text: "International Monetary Fund (IMF)" },
      {
        id: "d",
        text: "United Nations Conference on Trade and Development (UNCTAD)",
      },
    ],
    correctOptionId: "c",
    explanation:
      "The 'World Economic Outlook' is published twice a year (April and October, with updates in July and January) by the International Monetary Fund (IMF) [24].",
  },
];
