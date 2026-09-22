export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQQuestion {
  id: string;
  subject: "Polity";
  topic: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
}

export const polityQuestions: MCQQuestion[] = [
  {
    id: "polity-001",
    subject: "Polity",
    topic: "Constitution",
    question: "Who is known as the Chief Architect of the Indian Constitution?",
    options: [
      { id: "a", text: "Jawaharlal Nehru" },
      { id: "b", text: "B. R. Ambedkar" },
      { id: "c", text: "Rajendra Prasad" },
      { id: "d", text: "Sardar Patel" },
    ],
    correctOptionId: "b",
    explanation:
      "B. R. Ambedkar chaired the Drafting Committee of the Constituent Assembly and is regarded as the chief architect of the Constitution.",
  },
  {
    id: "polity-002",
    subject: "Polity",
    topic: "Constitution",
    question: "On which date did the Constitution of India come into force?",
    options: [
      { id: "a", text: "15 August 1947" },
      { id: "b", text: "26 November 1949" },
      { id: "c", text: "26 January 1950" },
      { id: "d", text: "2 October 1950" },
    ],
    correctOptionId: "c",
    explanation:
      "The Constitution was adopted on 26 November 1949 but came into force on 26 January 1950, celebrated as Republic Day.",
  },
  {
    id: "polity-003",
    subject: "Polity",
    topic: "Fundamental Rights",
    question: "The Right to Constitutional Remedies is guaranteed under which Article?",
    options: [
      { id: "a", text: "Article 19" },
      { id: "b", text: "Article 21" },
      { id: "c", text: "Article 32" },
      { id: "d", text: "Article 44" },
    ],
    correctOptionId: "c",
    explanation:
      "Article 32 empowers citizens to move the Supreme Court for enforcement of Fundamental Rights; Dr. Ambedkar called it the 'heart and soul' of the Constitution.",
  },
  {
    id: "polity-004",
    subject: "Polity",
    topic: "DPSP",
    question: "The Directive Principles of State Policy are contained in which Part of the Constitution?",
    options: [
      { id: "a", text: "Part III" },
      { id: "b", text: "Part IV" },
      { id: "c", text: "Part V" },
      { id: "d", text: "Part IX" },
    ],
    correctOptionId: "b",
    explanation:
      "Part IV (Articles 36-51) contains the Directive Principles of State Policy, borrowed from the Irish Constitution.",
  },
  {
    id: "polity-005",
    subject: "Polity",
    topic: "Parliament",
    question: "What is the maximum strength of the Lok Sabha as per the Constitution?",
    options: [
      { id: "a", text: "530" },
      { id: "b", text: "545" },
      { id: "c", text: "552" },
      { id: "d", text: "550" },
    ],
    correctOptionId: "c",
    explanation:
      "The Constitution originally fixed the maximum strength of the Lok Sabha at 552 (530 from states, 20 from UTs, 2 nominated Anglo-Indians, since removed by the 104th Amendment).",
  },
  {
    id: "polity-006",
    subject: "Polity",
    topic: "Parliament",
    question: "A Money Bill can only be introduced in which House of Parliament?",
    options: [
      { id: "a", text: "Rajya Sabha" },
      { id: "b", text: "Lok Sabha" },
      { id: "c", text: "Either House" },
      { id: "d", text: "Joint sitting only" },
    ],
    correctOptionId: "b",
    explanation:
      "Under Article 110, a Money Bill can be introduced only in the Lok Sabha, and the Speaker's decision on whether a bill is a Money Bill is final.",
  },
  {
    id: "polity-007",
    subject: "Polity",
    topic: "Judiciary",
    question: "Who appoints the Chief Justice of India?",
    options: [
      { id: "a", text: "The Prime Minister" },
      { id: "b", text: "The Parliament" },
      { id: "c", text: "The President of India" },
      { id: "d", text: "The Law Minister" },
    ],
    correctOptionId: "c",
    explanation:
      "Under Article 124, the Chief Justice of India is appointed by the President, generally following the collegium's recommendation.",
  },
  {
    id: "polity-008",
    subject: "Polity",
    topic: "Federalism",
    question: "Which Schedule of the Constitution deals with the division of powers between the Union and the States?",
    options: [
      { id: "a", text: "Fifth Schedule" },
      { id: "b", text: "Sixth Schedule" },
      { id: "c", text: "Seventh Schedule" },
      { id: "d", text: "Eighth Schedule" },
    ],
    correctOptionId: "c",
    explanation:
      "The Seventh Schedule contains the Union List, State List, and Concurrent List, distributing legislative powers between the Centre and States.",
  },
  {
    id: "polity-009",
    subject: "Polity",
    topic: "Amendments",
    question: "The 'Basic Structure' doctrine of the Constitution was propounded in which case?",
    options: [
      { id: "a", text: "Golaknath v. State of Punjab" },
      { id: "b", text: "Kesavananda Bharati v. State of Kerala" },
      { id: "c", text: "Minerva Mills v. Union of India" },
      { id: "d", text: "Shankari Prasad v. Union of India" },
    ],
    correctOptionId: "b",
    explanation:
      "In Kesavananda Bharati v. State of Kerala (1973), the Supreme Court held that Parliament cannot amend the 'basic structure' of the Constitution.",
  },
  {
    id: "polity-010",
    subject: "Polity",
    topic: "Constitutional Bodies",
    question: "The Election Commission of India is established under which Article?",
    options: [
      { id: "a", text: "Article 280" },
      { id: "b", text: "Article 324" },
      { id: "c", text: "Article 315" },
      { id: "d", text: "Article 76" },
    ],
    correctOptionId: "b",
    explanation:
      "Article 324 vests the superintendence, direction, and control of elections in the Election Commission of India.",
  },
  {
    id: "polity-011",
    subject: "Polity",
    topic: "Emergency Provisions",
    question: "Under which Article can the President declare a National Emergency?",
    options: [
      { id: "a", text: "Article 352" },
      { id: "b", text: "Article 356" },
      { id: "c", text: "Article 360" },
      { id: "d", text: "Article 368" },
    ],
    correctOptionId: "a",
    explanation:
      "Article 352 allows the President to proclaim a National Emergency on grounds of war, external aggression, or armed rebellion.",
  },
  {
    id: "polity-012",
    subject: "Polity",
    topic: "Local Government",
    question: "Which Constitutional Amendment gave constitutional status to Panchayati Raj Institutions?",
    options: [
      { id: "a", text: "42nd Amendment" },
      { id: "b", text: "61st Amendment" },
      { id: "c", text: "73rd Amendment" },
      { id: "d", text: "74th Amendment" },
    ],
    correctOptionId: "c",
    explanation:
      "The 73rd Constitutional Amendment Act, 1992, gave constitutional status to Panchayati Raj Institutions via Part IX.",
  },
];
