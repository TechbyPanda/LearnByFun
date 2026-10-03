import type { Bite, LearningPath } from "./types";

// Laxmikanth — Chapter 1: Historical Background.
// Flashcard and question ids point at flashcard/data/polityHistory.ts and mcq/data/polityHistory.ts.
const COMPANY = "Historical Background – Company Rule (1773–1858)";
const CROWN = "Historical Background – Crown Rule (1858–1947)";
const FREEDOM = "Historical Background – Independence & First Governments";

const fc = (n: number) => `polity-history-fc-${String(n).padStart(3, "0")}`;
const q = (n: number) => `polity-history-${String(n).padStart(3, "0")}`;

export const polityHistoryBites: Bite[] = [
  {
    id: "polity-history-regulating-act-1773",
    subject: "Polity",
    topic: COMPANY,
    title: "The Regulating Act, 1773",
    lesson: [
      "Before 1773 the Company ruled India with almost no oversight from the British Government. This Act was the first attempt to control it.",
      "The Governor of Bengal became the Governor-General of Bengal (Warren Hastings), helped by a 4-member Executive Council.",
      "Bombay and Madras were made subordinate to Bengal.",
      "A Supreme Court was set up at Calcutta in 1774: a Chief Justice and 3 judges.",
    ],
    mnemonic: "1773 = the first leash on the Company.",
    flashcardIds: [fc(2), fc(3)],
    questionId: q(2),
  },
  {
    id: "polity-history-amending-and-pitts-act",
    subject: "Polity",
    topic: COMPANY,
    title: "Amending Act 1781 and Pitt's India Act 1784",
    lesson: [
      "The Amending Act of 1781 (the Act of Settlement) limited the Supreme Court: official acts of the Governor-General-in-Council and revenue matters were exempt from its reach.",
      "Pitt's India Act of 1784 split control in two: the Court of Directors for commercial matters, the Board of Control for political ones. This is 'double government'.",
      "Company territories were first called 'British possessions in India', and the British Government got supreme control.",
    ],
    mnemonic: "Pitt = two bosses: Directors for trade, Board for politics.",
    flashcardIds: [fc(4), fc(5)],
    questionId: q(8),
  },
  {
    id: "polity-history-charter-acts-1793-1813",
    subject: "Polity",
    topic: COMPANY,
    title: "1786 to 1813: the monopoly loosens",
    lesson: [
      "1786: Cornwallis demanded the power to override his council and to be Commander-in-Chief. Both were granted.",
      "1793: the overriding power was extended to all future Governor-Generals and Governors, and the trade monopoly was renewed for 20 years.",
      "1813: the Company's trade monopoly ended, except for tea and the China trade. The Crown's sovereignty was asserted and missionaries were allowed in.",
    ],
    flashcardIds: [fc(6), fc(7), fc(8)],
    questionId: q(12),
  },
  {
    id: "polity-history-charter-act-1833",
    subject: "Polity",
    topic: COMPANY,
    title: "The Charter Act, 1833",
    lesson: [
      "The Governor-General of Bengal became the Governor-General of India. Lord William Bentinck was the first.",
      "This created the first Government of India, with authority over all British territory.",
      "Bombay and Madras lost their legislative powers. Laws were now called 'Acts', not 'Regulations'.",
      "The Company became a purely administrative body.",
    ],
    mnemonic: "1833 = centralisation: one India, one Government.",
    flashcardIds: [fc(9), fc(10)],
    questionId: q(15),
  },
  {
    id: "polity-history-charter-act-1853",
    subject: "Polity",
    topic: COMPANY,
    title: "The Charter Act, 1853, and the Company era in order",
    lesson: [
      "The last of the Charter Acts. It separated legislative from executive functions of the council: 6 legislative councillors, a 'mini-Parliament'.",
      "It introduced open competition for the civil services (Macaulay Committee, 1854).",
      "The Company kept its territories with no fixed period.",
      "The Company-era Acts in order: 1773, 1781, 1784, 1786, 1793, 1813, 1833, 1853.",
    ],
    flashcardIds: [fc(11), fc(32)],
    questionId: q(17),
  },
  {
    id: "polity-history-govt-of-india-act-1858",
    subject: "Polity",
    topic: CROWN,
    title: "The Government of India Act, 1858",
    lesson: [
      "Passed after the Revolt of 1857. The Company was abolished and India was governed in the name of the Crown.",
      "The Governor-General became the Viceroy. Lord Canning was the first.",
      "The Board of Control and the Court of Directors were abolished, ending 'double government'.",
      "A Secretary of State for India (a British Cabinet member) took charge, with a 15-member advisory Council of India.",
    ],
    mnemonic: "1858 = the Crown takes over.",
    flashcardIds: [fc(12)],
    questionId: q(22),
  },
  {
    id: "polity-history-councils-acts-1861-1892",
    subject: "Polity",
    topic: CROWN,
    title: "Indian Councils Acts, 1861 and 1892",
    lesson: [
      "1861: Indians were nominated as non-official members (in 1862: the Raja of Benaras, the Maharaja of Patiala and Sir Dinkar Rao).",
      "1861 also restored legislative powers to Bombay and Madras, the start of decentralisation, and recognised the portfolio system.",
      "1892: more non-official members, and councils could discuss the budget and ask questions.",
      "Even then there were no formal elections. Members were nominated on the recommendation of bodies.",
    ],
    flashcardIds: [fc(13), fc(14)],
    questionId: q(23),
  },
  {
    id: "polity-history-morley-minto-1909",
    subject: "Polity",
    topic: CROWN,
    title: "The Morley-Minto Reforms, 1909",
    lesson: [
      "The central council grew from 16 to 60 members.",
      "An official majority was kept at the Centre, with non-official members allowed in the provinces.",
      "S.P. Sinha became the first Indian in the Viceroy's council, as Law Member.",
      "Separate electorates were given to Muslims, so Minto is called the 'Father of Communal Electorate'.",
    ],
    mnemonic: "Minto, Muslims, separate electorate.",
    flashcardIds: [fc(15)],
    questionId: q(28),
  },
  {
    id: "polity-history-act-1919-dyarchy",
    subject: "Polity",
    topic: CROWN,
    title: "The 1919 Act and dyarchy",
    lesson: [
      "On Aug 20, 1917 Britain promised the gradual introduction of responsible government. That led to the 1919 Act (Montagu-Chelmsford), in force from 1921.",
      "Dyarchy in the provinces: Transferred subjects (Governor + ministers answerable to the legislature) and Reserved subjects (Governor + executive council).",
      "It brought the first bicameralism and direct elections: the Council of State and the Legislative Assembly.",
      "Separate electorates were extended to Sikhs, Indian Christians, Anglo-Indians and Europeans.",
    ],
    mnemonic: "Dyarchy comes from 'di-arche': double rule.",
    flashcardIds: [fc(16), fc(17), fc(18)],
    questionId: q(32),
  },
  {
    id: "polity-history-simon-and-communal-award",
    subject: "Polity",
    topic: CROWN,
    title: "Simon Commission and the Communal Award",
    lesson: [
      "The Simon Commission (announced Nov 1927) had 7 members under Sir John Simon. All were British, so Indian parties boycotted it.",
      "Its 1930 report recommended ending dyarchy, responsible government in provinces, and a federation of British India and the princely states.",
      "The Communal Award (1932, Ramsay MacDonald) gave separate electorates to the depressed classes.",
      "Gandhi's fast unto death in Yerawada Jail led to the Poona Pact: a joint electorate with reserved seats.",
    ],
    flashcardIds: [fc(19), fc(20)],
    questionId: q(36),
  },
  {
    id: "polity-history-govt-of-india-act-1935",
    subject: "Polity",
    topic: CROWN,
    title: "The Government of India Act, 1935",
    lesson: [
      "A huge Act: 321 sections and 10 schedules. Three lists: Federal (59 items), Provincial (54) and Concurrent (36).",
      "The proposed All-India Federation never came into being because the princely states did not join.",
      "Dyarchy in the provinces was abolished and replaced by provincial autonomy, effective 1937.",
      "It created the Reserve Bank of India, a Federal Court and Public Service Commissions.",
    ],
    mnemonic: "Lists 59, 54, 36: Federal, Provincial, Concurrent.",
    flashcardIds: [fc(21), fc(22), fc(23)],
    questionId: q(41),
  },
  {
    id: "polity-history-independence-act-1947",
    subject: "Polity",
    topic: FREEDOM,
    title: "The Indian Independence Act, 1947",
    lesson: [
      "Feb 20, 1947: Atlee announces the end of British rule. June 3: the Mountbatten Plan. Royal Assent on July 18. In force on Aug 15, 1947.",
      "India and Pakistan became dominions. The Viceroy's office was abolished and each dominion got a Governor-General.",
      "Constituent Assemblies could frame and repeal any British Act, and paramountcy over the princely states lapsed.",
      "Until new constitutions were made, the Government of India Act 1935 continued to govern.",
    ],
    flashcardIds: [fc(26), fc(27), fc(28)],
    questionId: q(45),
  },
];

export const polityHistoryPath: LearningPath = {
  id: "polity-historical-background",
  title: "Polity: Historical Background",
  description: "From the Regulating Act of 1773 to Independence, one Act at a time.",
  subject: "Polity",
  biteIds: polityHistoryBites.map((bite) => bite.id),
};
