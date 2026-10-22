import { polityChapter } from "./syllabus";

// Laxmikanth — Parliament.
export const parliamentQuestions = polityChapter("Parliament", [
  // ---- Composition ----
  {
    id: "polity-005",
    subtopic: "Composition",
    question: "What is the maximum strength of the Lok Sabha as per the Constitution?",
    options: [
      "530",
      "545",
      "552",
      "550",
    ],
    correctOptionId: "c",
    explanation: "The Constitution originally fixed the maximum strength of the Lok Sabha at 552 (530 from states, 20 from UTs, 2 nominated Anglo-Indians, since removed by the 104th Amendment).",
  },
  {
    id: "polity-parliament-001",
    subtopic: "Composition",
    question: "Which Schedule of the Constitution of India deals with the allocation of seats in the Rajya Sabha to the States and Union Territories?",
    options: [
      "Third Schedule",
      "Fourth Schedule",
      "Fifth Schedule",
      "Seventh Schedule",
    ],
    correctOptionId: "b",
    explanation: "The Fourth Schedule of the Constitution deals with the allocation of seats in the Rajya Sabha to the states and union territories.",
  },
  // ---- Membership ----
  {
    id: "polity-parliament-011",
    subtopic: "Membership",
    question: "If a sitting member of one House of Parliament is elected to the other House, what happens to his seat in the first House?",
    options: [
      "He can retain both seats for 6 months.",
      "His seat in the first House automatically becomes vacant.",
      "His seat in the second House becomes vacant if he does not choose within 10 days.",
      "The Election Commission decides which seat he must vacate.",
    ],
    correctOptionId: "b",
    explanation: "Under the Representation of the People Act (1951), if a sitting member of one House is elected to the other House, his seat in the first House becomes vacant. If a person is elected to both Houses simultaneously, he must intimate within 10 days which House he desires to serve, failing which his seat in the Rajya Sabha becomes vacant.",
  },
  // ---- Disqualification ----
  {
    id: "polity-parliament-002",
    subtopic: "Disqualification",
    question: "Who decides the question of disqualification of a Member of Parliament under the Tenth Schedule (Anti-Defection Law)?",
    options: [
      "The President of India on the advice of the Election Commission",
      "The Supreme Court of India",
      "The Chairman in Rajya Sabha and Speaker in Lok Sabha",
      "The Election Commission of India",
    ],
    correctOptionId: "c",
    explanation: "The question of disqualification under the Tenth Schedule is decided by the Chairman in the case of Rajya Sabha and the Speaker in the case of Lok Sabha. Unlike constitutional disqualifications where the President's decision is final based on the Election Commission's opinion, defection matters are decided by the respective presiding officers and are subject to judicial review.",
  },
  // ---- Presiding Officers ----
  {
    id: "polity-parliament-004",
    subtopic: "Presiding Officers",
    question: "Consider the following statements regarding the Speaker of the Lok Sabha:\n1. The Speaker exercises a casting vote only in the case of an equality of votes.\n2. The Speaker's decision on whether a bill is a Money Bill or not is final.\n3. The Speaker presides over a joint sitting of both Houses of Parliament.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "d",
    explanation: "All three statements are correct. The Speaker does not vote in the first instance but exercises a casting vote in the event of a tie. The Speaker has final authority to certify whether a bill is a Money Bill, and presides over joint sittings of both Houses.",
  },
  // ---- Devices of Proceedings ----
  {
    id: "polity-parliament-012",
    subtopic: "Devices of Proceedings",
    question: "What is the 'Zero Hour' in the Indian Parliamentary system?",
    options: [
      "The first hour of every parliamentary sitting dedicated to asking questions to ministers.",
      "An informal device starting immediately after Question Hour to raise matters without prior notice.",
      "The time allotted specifically for voting on demands for grants on the last day of budget discussion.",
      "The formal session held exclusively at midnight to pass emergency legislations.",
    ],
    correctOptionId: "b",
    explanation: "Zero Hour is an informal device (an Indian parliamentary innovation since 1962, not mentioned in the Rules of Procedure) that starts immediately after the Question Hour and lasts until the regular agenda is taken up. The first hour of a sitting is the Question Hour.",
  },
  // ---- Parliamentary Motions ----
  {
    id: "polity-parliament-007",
    subtopic: "Parliamentary Motions",
    question: "Consider the following statements regarding the Adjournment Motion:\n1. It requires the support of 50 members to be admitted.\n2. It involves an element of censure against the government.\n3. The Rajya Sabha is not permitted to use this device.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "d",
    explanation: "All three statements are correct. An Adjournment Motion requires the support of 50 members to be admitted. Because it interrupts the normal business of the House and carries an element of censure against the government, the Rajya Sabha is not permitted to use this device.",
  },
  // ---- Legislative Procedure ----
  {
    id: "polity-006",
    subtopic: "Legislative Procedure",
    question: "A Money Bill can only be introduced in which House of Parliament?",
    options: [
      "Rajya Sabha",
      "Lok Sabha",
      "Either House",
      "Joint sitting only",
    ],
    correctOptionId: "b",
    explanation: "Under Article 110, a Money Bill can be introduced only in the Lok Sabha, and the Speaker's decision on whether a bill is a Money Bill is final.",
  },
  {
    id: "polity-parliament-005",
    subtopic: "Legislative Procedure",
    question: "What is a key procedural difference between a Money Bill and a Financial Bill (I) under Article 117(1)?",
    options: [
      "Financial Bill (I) can be introduced in either House, whereas a Money Bill can only be introduced in Lok Sabha.",
      "Financial Bill (I) can be amended or rejected by the Rajya Sabha, whereas a Money Bill cannot.",
      "Financial Bill (I) does not require the recommendation of the President for introduction.",
      "There is no provision for a joint sitting in the case of a Financial Bill (I).",
    ],
    correctOptionId: "b",
    explanation: "Both Money Bills and Financial Bills (I) can be introduced only in the Lok Sabha on the recommendation of the President. However, unlike a Money Bill which the Rajya Sabha cannot amend or reject, a Financial Bill (I) can be amended or rejected by the Rajya Sabha, and a joint sitting can be summoned in case of deadlock.",
  },
  // ---- Lapsing of Bills ----
  {
    id: "polity-parliament-003",
    subtopic: "Lapsing of Bills",
    question: "Which of the following bills DOES NOT lapse on the dissolution of the Lok Sabha?",
    options: [
      "A bill pending in the Lok Sabha",
      "A bill passed by the Lok Sabha but pending in the Rajya Sabha",
      "A bill pending in the Rajya Sabha but not passed by the Lok Sabha",
      "A bill originating in the Lok Sabha and transmitted to the Rajya Sabha",
    ],
    correctOptionId: "c",
    explanation: "A bill pending in the Rajya Sabha which has not been passed by the Lok Sabha does not lapse on the dissolution of the Lok Sabha. Conversely, bills pending in the Lok Sabha or passed by the Lok Sabha and pending in the Rajya Sabha automatically lapse.",
  },
  // ---- Joint Sitting ----
  {
    id: "polity-parliament-006",
    subtopic: "Joint Sitting",
    question: "Who among the following CANNOT preside over a joint sitting of the two Houses of Parliament?",
    options: [
      "Speaker of the Lok Sabha",
      "Deputy Speaker of the Lok Sabha",
      "Chairman of the Rajya Sabha",
      "Deputy Chairman of the Rajya Sabha",
    ],
    correctOptionId: "c",
    explanation: "The Chairman of the Rajya Sabha (Vice-President) does not preside over a joint sitting because he is not a member of either House of Parliament. The joint sitting is presided over by the Speaker, or in his absence the Deputy Speaker, or if he is also absent, the Deputy Chairman of the Rajya Sabha.",
  },
  // ---- Budget & Funds ----
  {
    id: "polity-parliament-008",
    subtopic: "Budget & Funds",
    question: "Which of the following cut motions expresses disapproval of the policy underlying a demand for grant and states that the amount of the demand be reduced to Re 1?",
    options: [
      "Economy Cut Motion",
      "Policy Cut Motion",
      "Token Cut Motion",
      "Disapproval Cut Motion",
    ],
    correctOptionId: "b",
    explanation: "A Policy Cut Motion represents disapproval of the policy underlying the demand for grant and seeks to reduce the amount of the demand to Re 1. An Economy Cut Motion seeks a specific monetary reduction, while a Token Cut Motion reduces the demand by ₹100 to ventilate a specific grievance.",
  },
  // ---- Special Powers of Rajya Sabha ----
  {
    id: "polity-parliament-009",
    subtopic: "Special Powers of Rajya Sabha",
    question: "Under which Article of the Constitution of India can the Rajya Sabha pass a resolution empowering Parliament to create a new All-India Service?",
    options: [
      "Article 249",
      "Article 312",
      "Article 262",
      "Article 368",
    ],
    correctOptionId: "b",
    explanation: "Under Article 312, the Rajya Sabha can pass a resolution authorizing Parliament to create new All-India Services common to the Centre and the states. Article 249 empowers Rajya Sabha to authorize Parliament to make laws on State List subjects.",
  },
  // ---- Privileges ----
  {
    id: "polity-parliament-010",
    subtopic: "Privileges",
    question: "The individual parliamentary privilege of freedom from arrest for Members of Parliament applies to:",
    options: [
      "Civil cases, criminal cases, and preventive detention cases",
      "Civil cases only",
      "Criminal cases and civil cases, but not preventive detention",
      "Preventive detention cases only",
    ],
    correctOptionId: "b",
    explanation: "Members of Parliament cannot be arrested during the session of Parliament and 40 days before its commencement and 40 days after its conclusion. However, this privilege is available ONLY in civil cases and NOT in criminal cases or preventive detention cases.",
  },
]);
