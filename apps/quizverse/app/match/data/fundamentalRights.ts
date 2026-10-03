import type { MatchPair, MatchSet } from "./types";

const TOPIC = "Fundamental Rights";

function article(number: string, right: string): MatchPair {
  return { id: `fr-art-${number.toLowerCase()}`, left: `Art. ${number}`, right };
}

// ---- Right to Equality ----
const equality: MatchPair[] = [
  article("14", "Equality before law & equal protection of laws"),
  article("15", "Prohibition of discrimination"),
  article("16", "Equality of opportunity in public employment"),
  article("17", "Abolition of untouchability"),
  article("18", "Abolition of titles"),
];

// ---- Right to Freedom ----
const freedom: MatchPair[] = [
  article("19", "Six freedoms"),
  article("20", "Protection in respect of conviction for offences"),
  article("21", "Protection of life and personal liberty"),
  article("21A", "Right to education"),
  article("22", "Protection against arrest and detention in certain cases"),
];

// ---- Right against Exploitation ----
const exploitation: MatchPair[] = [
  article("23", "Human trafficking, begar and forced labour"),
  article("24", "Prohibition of child labour in factories, etc."),
];

// ---- Freedom of Religion ----
const religion: MatchPair[] = [
  article("25", "Freedom of conscience and religion"),
  article("26", "Freedom to manage religious affairs"),
  article("27", "No taxation for promotion of a particular religion"),
  article("28", "Religious instruction in educational institutions"),
];

// ---- Cultural & Educational Rights ----
const cultural: MatchPair[] = [
  article("29", "Protection of interests of minorities"),
  article("30", "Right of minorities to establish and administer educational institutions"),
];

// ---- Constitutional Remedies ----
const remedies: MatchPair[] = [
  article("32", "Right to move the Supreme Court for enforcement of Fundamental Rights"),
];

const SET_BASICS = {
  subject: "Polity",
  topic: TOPIC,
  leftLabel: "Article",
  rightLabel: "Provision",
} as const;

export const fundamentalRightsMatchSets: MatchSet[] = [
  {
    ...SET_BASICS,
    id: "fr-equality",
    title: "Right to Equality",
    description: "Articles 14 to 18. Which Article guarantees which kind of equality?",
    pairs: equality,
  },
  {
    ...SET_BASICS,
    id: "fr-freedom",
    title: "Right to Freedom",
    description: "Articles 19 to 22, including life, liberty and education.",
    pairs: freedom,
  },
  {
    ...SET_BASICS,
    id: "fr-23-32",
    title: "Exploitation, Religion, Culture & Remedies",
    description: "Articles 23 to 32: exploitation, religion, minorities and the right to move the Supreme Court.",
    pairs: [...exploitation, ...religion, ...cultural, ...remedies],
  },
  {
    ...SET_BASICS,
    id: "fr-all",
    title: "All Fundamental Rights",
    description: "Every Article from 14 to 32 in one pool. Five random pairs a round. The hard one.",
    pairs: [...equality, ...freedom, ...exploitation, ...religion, ...cultural, ...remedies],
  },
];
