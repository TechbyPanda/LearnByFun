import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Environment & Ecology, from ecological basics to conservation, laws and climate.
export const environmentSyllabus = [
  {
    title: "Ecology Basics",
    subtopics: [
      "Levels of Ecological Organisation",
      "Evolution of Life on Earth",
      "Responses to Abiotic Stress",
      "Temperature Tolerance",
      "Dormancy & Metabolic Suspension",
    ],
  },
  {
    title: "Functions of an Ecosystem",
    subtopics: [
      "Primary Productivity",
      "Stages of Decomposition",
      "Decomposition Rates & Factors",
      "Food Chains, Food Webs & Ecological Pyramids",
      "Biogeochemical Cycles",
      "Ecological Succession",
    ],
  },
  {
    title: "Terrestrial & Aquatic Ecosystems",
    subtopics: ["Forests & Grasslands", "Wetlands, Mangroves & Coral Reefs"],
  },
  {
    title: "Biodiversity",
    subtopics: [
      "Latitudinal Diversity Gradient",
      "Biodiversity Hotspots",
      "Invasive Alien Species",
      "Migratory Birds & Flyways",
    ],
  },
  {
    title: "Protected Area Network",
    subtopics: ["Tiger Reserves & National Parks", "Biosphere Reserves & Ramsar Sites"],
  },
  {
    title: "Wildlife Conservation",
    subtopics: ["Human-Wildlife Conflict", "Species Conservation Projects", "Wildlife Protection Act"],
  },
  {
    title: "Environmental Pollution",
    subtopics: ["Air Pollution", "Water Pollution", "Solid & Hazardous Waste"],
  },
  {
    title: "Climate Change",
    subtopics: ["Greenhouse Effect & Global Warming", "Mitigation & Adaptation", "Climate Finance & Carbon Markets"],
  },
  {
    title: "Environmental Laws & Institutions",
    subtopics: ["Acts & Policies", "Regulatory Bodies & Tribunals", "Environmental Impact Assessment"],
  },
  {
    title: "International Conventions",
    subtopics: ["Biodiversity Conventions", "Climate Conventions (UNFCCC)", "Pollution & Chemical Conventions"],
  },
  {
    title: "Renewable Energy & Sustainable Development",
    subtopics: ["Renewable Energy", "Sustainable Agriculture"],
  },
] as const satisfies Syllabus;

export const environmentChapter = chapterBuilder("Environment", environmentSyllabus);
