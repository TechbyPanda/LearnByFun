import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Physical, Indian and economic geography. No questions yet.
export const geographySyllabus = [
  { title: "The Universe & the Earth", subtopics: ["Solar System", "Latitudes, Longitudes & Time"] },
  { title: "Geomorphology", subtopics: ["Interior of the Earth", "Plate Tectonics", "Landforms"] },
  { title: "Climatology", subtopics: ["Atmosphere & Insolation", "Winds & Pressure Belts", "Cyclones"] },
  { title: "Oceanography", subtopics: ["Ocean Relief", "Currents & Tides"] },
  { title: "Biogeography & Soils", subtopics: ["Biomes", "Soils"] },
  { title: "Indian Physiography", subtopics: ["Himalayas & Northern Plains", "Peninsular Plateau, Coasts & Islands"] },
  { title: "Indian Drainage System", subtopics: ["Himalayan Rivers", "Peninsular Rivers"] },
  { title: "Indian Climate & Monsoon", subtopics: ["Monsoon Mechanism", "Seasons"] },
  { title: "Indian Agriculture & Irrigation", subtopics: ["Crops & Cropping Patterns", "Irrigation"] },
  { title: "Minerals, Energy & Industries", subtopics: ["Mineral Resources", "Energy Resources", "Industries"] },
  { title: "Population, Settlement & Transport", subtopics: ["Population", "Transport"] },
  { title: "Places in News & Mapping", subtopics: ["India", "World"] },
] as const satisfies Syllabus;

export const geographyChapter = chapterBuilder("Geography", geographySyllabus);
