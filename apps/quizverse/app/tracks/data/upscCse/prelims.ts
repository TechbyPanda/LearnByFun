import type { TrackStage } from "../types";

// UPSC CSE Preliminary Examination, as notified by UPSC.
export const upscPrelims: TrackStage = {
  id: "prelims",
  title: "Prelims",
  description:
    "Two objective papers. GS Paper I decides who qualifies for Mains; CSAT only has to be passed at 33%.",
  modules: [
    {
      id: "prelims-gs1",
      title: "General Studies Paper I",
      facts: ["200 marks", "100 questions", "2 hours", "Counts for cut-off"],
      units: [
        {
          title: "Current Affairs",
          points: ["Current events of national and international importance."],
          covers: [{ subject: "Current Affairs" }],
        },
        {
          title: "History & the National Movement",
          points: ["History of India and Indian National Movement."],
          covers: [{ subject: "History" }, { subject: "Polity", topics: ["Historical Background"] }],
        },
        {
          title: "Indian & World Geography",
          points: ["Indian and World Geography – Physical, Social, Economic Geography of India and the World."],
          covers: [{ subject: "Geography" }],
        },
        {
          title: "Indian Polity & Governance",
          points: [
            "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
          ],
          covers: [{ subject: "Polity" }],
        },
        {
          title: "Economic & Social Development",
          points: [
            "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives, etc.",
          ],
          covers: [{ subject: "Economy" }],
        },
        {
          title: "Environment, Biodiversity & Climate Change",
          points: [
            "General issues on Environmental Ecology, Bio-diversity and Climate Change – that do not require subject specialisation.",
          ],
          covers: [{ subject: "Environment" }],
        },
        {
          title: "General Science",
          points: ["General Science."],
          covers: [{ subject: "Science & Technology" }],
        },
      ],
    },
    {
      id: "prelims-csat",
      title: "General Studies Paper II (CSAT)",
      facts: ["200 marks", "80 questions", "2 hours", "Qualifying · 33%"],
      units: [
        { title: "Comprehension" },
        { title: "Interpersonal Skills", points: ["Interpersonal skills including communication skills."] },
        { title: "Logical Reasoning & Analytical Ability" },
        { title: "Decision Making & Problem Solving" },
        { title: "General Mental Ability" },
        { title: "Basic Numeracy", points: ["Numbers and their relations, orders of magnitude, etc. (Class X level)."] },
        {
          title: "Data Interpretation",
          points: ["Charts, graphs, tables, data sufficiency, etc. (Class X level)."],
        },
      ],
    },
  ],
};
