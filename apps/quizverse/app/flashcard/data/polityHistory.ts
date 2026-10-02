import type { Flashcard } from "./types";

// Laxmikanth — Chapter 1: Historical Background.
const COMPANY = "Historical Background – Company Rule (1773–1858)";
const CROWN = "Historical Background – Crown Rule (1858–1947)";
const FREEDOM = "Historical Background – Independence & First Governments";

function card(n: number, topic: string, front: string, back: string): Flashcard {
  return {
    id: `polity-history-fc-${String(n).padStart(3, "0")}`,
    subject: "Polity",
    topic,
    front,
    back,
  };
}

export const polityHistoryFlashcards: Flashcard[] = [
  // ---- Company Rule ----
  card(1, COMPANY, "1765: what did the Company obtain, and from whom?",
    "The 'diwani' (revenue + civil justice rights) of Bengal, Bihar and Orissa, granted by Shah Alam after Buxar (1764). Start of its career as a territorial power."),
  card(2, COMPANY, "Regulating Act 1773: why important?",
    "First step to control the Company; first recognition of its political and administrative functions; laid foundations of central administration."),
  card(3, COMPANY, "Regulating Act 1773: key features",
    "1. Governor of Bengal → Governor-General of Bengal (Warren Hastings) + 4-member Executive Council\n2. Bombay & Madras subordinate to Bengal\n3. Supreme Court at Calcutta, 1774 (CJ + 3 judges)\n4. Ban on private trade / bribes by servants\n5. Court of Directors must report to the British Govt"),
  card(4, COMPANY, "Amending Act 1781 — other name and main point",
    "Act of Settlement. Exempted Governor-General-in-Council & Company servants (for official acts) and revenue matters from the Supreme Court; appeals from Provincial Courts go to Governor-General-in-Council; personal law (Hindu/Muslim) applied."),
  card(5, COMPANY, "Pitt's India Act 1784",
    "Separated commercial and political functions → 'double government': Court of Directors (commercial) + Board of Control (political).\nTerritories first called 'British possessions in India'; British Govt got supreme control."),
  card(6, COMPANY, "Act of 1786",
    "Lord Cornwallis's two demands: power to override his council in special cases + be Commander-in-Chief."),
  card(7, COMPANY, "Charter Act 1793",
    "Extended overriding power to all future Governor-Generals and Governors; more control over Bombay & Madras; monopoly extended 20 years; Board of Control staff paid from Indian revenues."),
  card(8, COMPANY, "Charter Act 1813",
    "Ended the Company's trade monopoly (except tea and China trade); asserted Crown's sovereignty; allowed Christian missionaries; provided for western education; local govts could levy taxes."),
  card(9, COMPANY, "Charter Act 1833 — the 'centralisation' Act",
    "Governor-General of Bengal → Governor-General of India (Lord William Bentinck first). First Government of India. Bombay & Madras lost legislative powers; laws now called 'Acts' (earlier 'Regulations'). Company became purely administrative."),
  card(10, COMPANY, "Charter Act 1833 and civil services",
    "Attempted open competition and said Indians must not be debarred from office — negated after opposition from the Court of Directors."),
  card(11, COMPANY, "Charter Act 1853 — last Charter Act: features",
    "1. Separated legislative & executive functions of the council (6 legislative councillors; Central Legislative Council = 'mini-Parliament')\n2. Open competition for civil services (Macaulay Committee, 1854)\n3. Company retained territories with no fixed period\n4. Local representation: 4 of 6 members from Madras, Bombay, Bengal, Agra"),

  // ---- Crown Rule ----
  card(12, CROWN, "Government of India Act 1858 — background and key changes",
    "After the Revolt of 1857. Abolished the Company; India governed in the name of the Crown. Governor-General → Viceroy (Lord Canning first). Board of Control & Court of Directors abolished. Secretary of State for India (British Cabinet member) + 15-member advisory Council of India."),
  card(13, CROWN, "Indian Councils Act 1861",
    "Indians nominated as non-official members (1862: Raja of Benaras, Maharaja of Patiala, Sir Dinkar Rao).\nRestored legislative powers to Bombay & Madras (decentralisation).\nNew councils: Bengal 1862, NWFP 1886, Punjab 1897.\nPortfolio system recognised (Canning, 1859).\nOrdinances in emergency: life 6 months."),
  card(14, CROWN, "Indian Councils Act 1892",
    "More non-official members, official majority kept; councils could discuss the budget and ask questions; indirect 'election' by nomination on recommendation of bodies (word 'election' not used)."),
  card(15, CROWN, "Indian Councils Act 1909 (Morley-Minto)",
    "Central council 16 → 60 members; official majority at Centre, non-official allowed in provinces; supplementary questions & budget resolutions; first Indian in Viceroy's council (S.P. Sinha, Law Member); separate electorate for Muslims → Minto = Father of Communal Electorate."),
  card(16, CROWN, "Aug 20, 1917 declaration",
    "British objective: gradual introduction of responsible government in India. Led to the Government of India Act 1919."),
  card(17, CROWN, "Government of India Act 1919 (Montagu-Chelmsford) — key features",
    "In force 1921.\n1. Central/provincial subjects separated\n2. Dyarchy in provinces (transferred vs reserved)\n3. First bicameralism + direct elections (Council of State, Legislative Assembly)\n4. 3 of 6 Viceroy's executive council members Indian\n5. Separate electorates for Sikhs, Indian Christians, Anglo-Indians, Europeans\n6. High Commissioner for India in London\n7. Provincial budgets separated\n8. PSC provision (Central PSC 1926)\n9. Statutory commission after 10 years"),
  card(18, CROWN, "Dyarchy — meaning and structure",
    "From Greek 'di-arche' = double rule. Provincial subjects split: Transferred (Governor + ministers responsible to the legislature) and Reserved (Governor + executive council, not responsible). Largely unsuccessful."),
  card(19, CROWN, "Simon Commission",
    "Announced Nov 1927 (two years early); 7 members, chair Sir John Simon; all British → boycotted. Report 1930: abolish dyarchy, responsible govt in provinces, federation of British India & princely states, continue communal electorate. Followed by Round Table Conferences and a White Paper → Act of 1935."),
  card(20, CROWN, "Communal Award (1932) and Poona Pact",
    "Ramsay MacDonald extended separate electorates to depressed classes (SCs). Gandhi's fast unto death in Yerawada Jail → Poona Pact: Hindu joint electorate retained, reserved seats for depressed classes."),
  card(21, CROWN, "Government of India Act 1935 — size and lists",
    "321 Sections, 10 Schedules. Federal List 59 items, Provincial List 54, Concurrent List 36. Residuary powers to the Viceroy."),
  card(22, CROWN, "Government of India Act 1935 — federation and dyarchy",
    "All-India Federation (provinces + princely states) never came into being — princely states didn't join. Dyarchy at Centre never operated. Dyarchy in provinces abolished."),
  card(23, CROWN, "Government of India Act 1935 — provincial autonomy",
    "Governor acts on advice of ministers responsible to the legislature. Effective 1937, discontinued 1939."),
  card(24, CROWN, "Government of India Act 1935 — bicameral provinces",
    "6 of 11: Bengal, Bombay, Madras, Bihar, Assam, United Provinces."),
  card(25, CROWN, "Government of India Act 1935 — institutions and franchise",
    "Reserve Bank of India; Federal Court (set up 1937); Federal, Provincial & Joint PSCs; Council of India abolished; franchise to ~10% of population; separate electorates extended to SCs, women, labour."),

  // ---- Independence ----
  card(26, FREEDOM, "Path to Independence — key dates",
    "Feb 20, 1947: Atlee announces end of rule by June 1948\nJune 3, 1947: Mountbatten Plan (partition)\nJuly 4: Bill introduced; July 18: Royal Assent\nAug 15, 1947: Act in force"),
  card(27, FREEDOM, "Indian Independence Act 1947 — key features",
    "India & Pakistan as dominions (right to secede from Commonwealth); Viceroy's office abolished (Governor-General for each); Constituent Assemblies can frame & repeal any British Act; Secretary of State for India abolished; paramountcy lapsed; princely states free to join either/remain independent; 1935 Act governs until new constitutions; Monarch's veto removed; GG & governors nominal heads; 'Emperor of India' title dropped."),
  card(28, FREEDOM, "Who were the first Governor-General and Prime Minister of the Dominion of India?",
    "Lord Mountbatten (GG) swore in Jawaharlal Nehru (PM). The 1946 Constituent Assembly became the Dominion's Parliament."),
  card(29, FREEDOM, "Boundary between India and Pakistan",
    "Determined by Radcliffe's Boundary Commission. Pakistan: West Punjab, Sind, Baluchistan, East Bengal, NWFP, Sylhet (Assam). Referendum in NWFP and Sylhet favoured Pakistan."),
  card(30, FREEDOM, "Interim Government (1946) — portfolios",
    "Nehru: Vice-President of Council, External Affairs\nPatel: Home, Info & Broadcasting\nRajendra Prasad: Food & Agriculture\nJohn Mathai: Industries & Supplies\nJagjivan Ram: Labour\nBaldev Singh: Defence\nC.H. Bhabha: Works, Mines & Power\nLiaquat Ali Khan: Finance\nAbdur Rab Nishtar: Posts & Air\nAsaf Ali: Railways & Transport\nC. Rajagopalachari: Education & Arts\nI.I. Chundrigar: Commerce\nGhaznafar Ali Khan: Health\nJ.N. Mandal: Law"),
  card(31, FREEDOM, "First Cabinet of Free India (1947) — portfolios",
    "Nehru: PM, External Affairs, Scientific Research\nPatel: Home, Info & Broadcasting, States\nRajendra Prasad: Food & Agriculture\nAzad: Education\nJohn Mathai: Railways & Transport\nR.K. Shanmugham Chetty: Finance\nAmbedkar: Law\nJagjivan Ram: Labour\nBaldev Singh: Defence\nAmrit Kaur: Health\nC.H. Bhabha: Commerce\nRafi Ahmed Kidwai: Communication\nS.P. Mukherji: Industries & Supplies\nV.N. Gadgil: Works, Mines & Power"),

  // ---- Memory aids ----
  card(32, COMPANY, "Order the Company-era Acts",
    "1773 Regulating → 1781 Amending → 1784 Pitt's India → 1786 → 1793 Charter → 1813 Charter → 1833 Charter → 1853 Charter"),
  card(33, CROWN, "Order the Crown-era Acts",
    "1858 GoI → 1861 Councils → 1892 Councils → 1909 Councils (Morley-Minto) → 1919 GoI (Montagu-Chelmsford) → 1935 GoI → 1947 Independence"),
  card(34, CROWN, "Which Act first introduced: separate electorate / bicameralism & direct election / provincial autonomy?",
    "Separate electorate: 1909 (Muslims)\nBicameralism + direct elections: 1919\nProvincial autonomy: 1935"),
];
