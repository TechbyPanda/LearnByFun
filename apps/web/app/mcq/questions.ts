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
  {
  id: "polity-013",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "In State of Rajasthan v. G. Chawla (1959), the Supreme Court upheld a state law banning loudspeakers at night, even though it incidentally touched 'communication' (a Union List subject). Which doctrine did the Court apply?",
  options: [
    { id: "a", text: "Doctrine of Colourable Legislation" },
    { id: "b", text: "Doctrine of Pith and Substance" },
    { id: "c", text: "Doctrine of Repugnancy" },
    { id: "d", text: "Doctrine of Severability" },
  ],
  correctOptionId: "b",
  explanation:
    "Under the Doctrine of Pith and Substance, courts examine the true nature and real object of a law. Since its core was public health (State List), the incidental encroachment on communication (Union List) did not affect its validity.",
},
{
  id: "polity-014",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "Residuary powers (subjects not enumerated in any of the three lists of the Seventh Schedule) vest with:",
  options: [
    { id: "a", text: "The States, as in the USA" },
    { id: "b", text: "The Union" },
    { id: "c", text: "Union and States concurrently" },
    { id: "d", text: "The President, on the advice of the Finance Commission" },
  ],
  correctOptionId: "b",
  explanation:
    "Article 248 vests residuary powers in Parliament. This is opposite to the US model, where residuary power lies with the states, and is cited as a key unitary-bias feature of the Indian Constitution.",
},
{
  id: "polity-015",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "Under which Article can the Rajya Sabha, by a resolution supported by a two-thirds majority of members present and voting, empower Parliament to legislate on a State List subject in the national interest?",
  options: [
    { id: "a", text: "Article 248" },
    { id: "b", text: "Article 249" },
    { id: "c", text: "Article 252" },
    { id: "d", text: "Article 356" },
  ],
  correctOptionId: "b",
  explanation:
    "Article 249 allows such a resolution, valid for one year and renewable indefinitely through repeated Rajya Sabha resolutions.",
},
{
  id: "polity-016",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "A law made by Parliament on a State List subject during a National Emergency (Article 250) continues in force after the Emergency is revoked for:",
  options: [
    { id: "a", text: "It lapses immediately" },
    { id: "b", text: "6 months" },
    { id: "c", text: "1 year, renewable" },
    { id: "d", text: "Indefinitely, until repealed by the state legislature" },
  ],
  correctOptionId: "b",
  explanation:
    "Under Article 250, such a law continues to be effective for 6 months after the Emergency ceases to operate, after which it lapses. This is distinct from Article 249's 1-year renewable validity.",
},
{
  id: "polity-017",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "If two states pass resolutions requesting Parliament to legislate on a matter in the State List under Article 252, a law so made:",
  options: [
    { id: "a", text: "Applies automatically to all states" },
    { id: "b", text: "Applies only to the requesting states" },
    { id: "c", text: "Applies only during President's Rule" },
    { id: "d", text: "Requires ratification by half the states to take effect" },
  ],
  correctOptionId: "b",
  explanation:
    "A law made under Article 252 applies only to the states that requested it. Other states wanting uniform legislation must separately enact identical laws of their own.",
},
{
  id: "polity-018",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "The 2020 farm laws, despite touching State List subjects like agriculture and intrastate trade, were held to be within Parliament's legislative competence primarily because of:",
  options: [
    { id: "a", text: "A National Emergency in force at the time" },
    { id: "b", text: "Entry 33 of the Concurrent List, made permanent by the Constitution (Third Amendment) Act, 1954" },
    { id: "c", text: "A Rajya Sabha resolution under Article 249" },
    { id: "d", text: "Consent of all state legislatures under Article 252" },
  ],
  correctOptionId: "b",
  explanation:
    "Entry 33 (List III) lets Parliament legislate on trade/commerce/production of industries declared to be in the 'public interest.' Originally a temporary 5-year provision meant to lapse in 1955, it was made permanent by the 1954 Third Amendment, giving Parliament competence to enact the farm laws (later repealed in 2021 for lack of consultation, not unconstitutionality).",
},
{
  id: "polity-019",
  subject: "Polity",
  topic: "Legislative Relations",
  question:
    "In case of a conflict between a Central law and a State law on a Concurrent List subject, the Central law prevails EXCEPT when:",
  options: [
    { id: "a", text: "The state law was enacted first" },
    { id: "b", text: "The state law has received the President's assent" },
    { id: "c", text: "The subject also appears in the State List" },
    { id: "d", text: "The Rajya Sabha objects to the Central law" },
  ],
  correctOptionId: "b",
  explanation:
    "Under Article 254, if a state law on a Concurrent List subject has received the President's assent, it prevails in that state, until Parliament legislates again on the same matter.",
},
{
  id: "polity-020",
  subject: "Polity",
  topic: "Administrative Relations",
  question:
    "Which Article, added by the 7th Constitutional Amendment, allows a state to entrust some of its executive functions to the Union, subject to the Union's consent?",
  options: [
    { id: "a", text: "Article 256" },
    { id: "b", text: "Article 258" },
    { id: "c", text: "Article 258A" },
    { id: "d", text: "Article 263" },
  ],
  correctOptionId: "c",
  explanation:
    "Article 258A permits state-to-Union delegation, but only with the Union's consent. This is asymmetric with Article 258, under which Parliament can, by ordinary law, forcibly delegate Union functions onto unwilling states — there is no equivalent forcing mechanism the other way.",
},
{
  id: "polity-021",
  subject: "Polity",
  topic: "Administrative Relations",
  question:
    "Which of the following statutory bodies uniquely includes State Governors as members, alongside Chief Ministers, distinguishing it from the five Zonal Councils?",
  options: [
    { id: "a", text: "Inter-State Council" },
    { id: "b", text: "North Eastern Council" },
    { id: "c", text: "National Integration Council" },
    { id: "d", text: "GST Council" },
  ],
  correctOptionId: "b",
  explanation:
    "The North Eastern Council, established by the North Eastern Council Act, 1971, includes Governors as members along with CMs and 3 Presidential nominees, and functions as a regional planning body rather than a purely consultative one — unlike the five Zonal Councils under the States Reorganisation Act, 1956.",
},
{
  id: "polity-022",
  subject: "Polity",
  topic: "Administrative Relations",
  question:
    "Article 262, under which Parliament can bar the Supreme Court's jurisdiction over interstate river water disputes, excludes the Court's:",
  options: [
    { id: "a", text: "Original jurisdiction only" },
    { id: "b", text: "Appellate jurisdiction only" },
    { id: "c", text: "Both original and appellate jurisdiction" },
    { id: "d", text: "Writ jurisdiction under Article 32 entirely" },
  ],
  correctOptionId: "a",
  explanation:
    "Only the Supreme Court's original jurisdiction is barred. It can still hear appeals against a tribunal's award (e.g., for violating natural justice), and can be approached directly for Fundamental Rights enforcement, since the right to livelihood is a Fundamental Right.",
},
{
  id: "polity-023",
  subject: "Polity",
  topic: "Administrative Relations",
  question:
    "The Inter-State Council under Article 263 differs from river water dispute tribunals under Article 262 in that it is:",
  options: [
    { id: "a", text: "Adjudicative and legally binding" },
    { id: "b", text: "Consultative/advisory only" },
    { id: "c", text: "Concerned exclusively with river water sharing" },
    { id: "d", text: "A body that cannot be dissolved once constituted" },
  ],
  correctOptionId: "b",
  explanation:
    "The Inter-State Council (first set up in 1990) is a consultative body that investigates/advises on disputes between states, unlike the legally binding tribunal mechanism under Article 262. It exists only as long as the President (i.e., the government of the day) chooses to maintain it. Reform proposals seek to make it adjudicative.",
},
];
