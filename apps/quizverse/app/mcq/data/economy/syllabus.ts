import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Indian Economy, from basic concepts to the external sector.
export const economySyllabus = [
  {
    title: "National Income & Growth",
    subtopics: [
      "National Income Accounting",
      "Macroeconomic Indicators",
      "Growth & Development",
    ],
  },
  {
    title: "Inflation & Price Indices",
    subtopics: ["Price Indices", "Causes & Control of Inflation"],
  },
  {
    title: "Money, Banking & Monetary Policy",
    subtopics: [
      "Monetary Policy Instruments",
      "Monetary Policy Committee",
      "Banking System",
      "Digital Currency & Crypto Assets",
    ],
  },
  {
    title: "Financial Markets",
    subtopics: ["Capital Markets & SEBI", "Insurance & Pensions"],
  },
  {
    title: "Public Finance & Budget",
    subtopics: [
      "Taxation & GST",
      "Fiscal Federalism & Devolution",
      "Public Debt & Government Securities",
      "Non-Tax Revenue",
      "Budget & Fiscal Policy",
    ],
  },
  {
    title: "External Sector",
    subtopics: [
      "Balance of Payments",
      "Foreign Trade Policy & Export Incentives",
      "Exchange Rate & Forex Reserves",
      "Foreign Investment",
    ],
  },
  {
    title: "International Economic Organisations",
    subtopics: ["IMF, World Bank & Their Reports", "WTO & Trade Agreements"],
  },
  {
    title: "Agriculture",
    subtopics: ["Agricultural Pricing & MSP", "Food Security & PDS", "Agricultural Reforms"],
  },
  {
    title: "Industry & Infrastructure",
    subtopics: ["Industrial Policy", "Energy & Biofuels", "Transport & Communication"],
  },
  {
    title: "Poverty, Employment & Inclusive Growth",
    subtopics: ["Poverty & Inequality", "Unemployment", "Social Sector Schemes"],
  },
  {
    title: "Planning & Economic Reforms",
    subtopics: ["Planning in India", "1991 Reforms (LPG)"],
  },
] as const satisfies Syllabus;

export const economyChapter = chapterBuilder("Economy", economySyllabus);
