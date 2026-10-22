import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Indian History, Ancient to Modern. Constitutional Acts of British India live in Polity.
export const historySyllabus = [
  { title: "Ancient – Prehistoric Cultures", subtopics: ["Stone Age", "Chalcolithic Cultures"] },
  { title: "Ancient – Indus Valley Civilisation", subtopics: ["Sites & Town Planning", "Economy, Society & Decline"] },
  { title: "Ancient – Vedic Age", subtopics: ["Early Vedic Period", "Later Vedic Period"] },
  { title: "Ancient – Buddhism & Jainism", subtopics: ["Buddhism", "Jainism"] },
  { title: "Ancient – Mahajanapadas & the Mauryas", subtopics: ["Mahajanapadas & Rise of Magadha", "Mauryan Empire & Ashoka"] },
  { title: "Ancient – Post-Mauryan & Sangam Age", subtopics: ["Post-Mauryan Kingdoms", "Sangam Age"] },
  { title: "Ancient – Gupta & Post-Gupta Age", subtopics: ["Gupta Empire", "Harsha & Southern Kingdoms"] },
  { title: "Medieval – Early Medieval Kingdoms", subtopics: ["Rajputs & Tripartite Struggle", "Cholas"] },
  { title: "Medieval – Delhi Sultanate", subtopics: ["Dynasties", "Administration & Economy"] },
  { title: "Medieval – Vijayanagara & Bahmani", subtopics: ["Vijayanagara Empire", "Bahmani Kingdom"] },
  { title: "Medieval – Bhakti & Sufi Movements", subtopics: ["Bhakti Movement", "Sufi Movement"] },
  { title: "Medieval – Mughal Empire", subtopics: ["Rulers & Expansion", "Administration & Culture"] },
  { title: "Medieval – Marathas & Regional States", subtopics: ["Marathas", "Regional States"] },
  { title: "Modern – Advent of the Europeans", subtopics: ["Portuguese & Dutch", "English & French"] },
  {
    title: "Modern – Wars & Battles",
    subtopics: [
      "Carnatic Wars & Anglo-French Rivalry",
      "Plassey, Buxar & Bengal",
      "18th-Century Contests (Karnal, Panipat, Colachel)",
      "Anglo-Mysore Wars",
      "Anglo-Maratha Wars",
      "Anglo-Sikh Wars & Sindh",
      "Gurkha, Burmese, Afghan & Frontier Wars",
      "Revolt of 1857 & Local Resistance",
      "Chronology & Treaties",
    ],
  },
  {
    title: "Modern – British Administration & Policies",
    subtopics: [
      "Subsidiary Alliance, Lapse & Paramountcy",
      "Land Revenue Settlements",
      "Civil Services, Judiciary, Police & Army",
      "Governor-Generals & Their Reforms",
      "Local Self-Government, Press & Education",
      "Chronology",
    ],
  },
  { title: "Modern – Economic Impact of British Rule", subtopics: ["Drain of Wealth", "Deindustrialisation & Agriculture"] },
  { title: "Modern – Socio-Religious Reform Movements", subtopics: ["Reformers & Organisations", "Social Legislation"] },
  { title: "Modern – Revolt of 1857", subtopics: ["Causes & Leaders", "Consequences"] },
  { title: "Modern – Early Nationalism & the INC", subtopics: ["Moderates & Extremists", "Partition of Bengal & Swadeshi"] },
  { title: "Modern – Gandhian Era", subtopics: ["Non-Cooperation & Khilafat", "Civil Disobedience", "Quit India"] },
  { title: "Modern – Revolutionary Movements", subtopics: ["Revolutionaries in India", "Revolutionaries Abroad & INA"] },
  { title: "Modern – Towards Independence & Partition", subtopics: ["Missions & Plans", "Partition & Integration of States"] },
] as const satisfies Syllabus;

export const historyChapter = chapterBuilder("History", historySyllabus);
