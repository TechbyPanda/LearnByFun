import { environmentChapter } from "./syllabus";

// Productivity, decomposition and nutrient flow.
export const ecosystemFunctionsQuestions = environmentChapter("Functions of an Ecosystem", [
  // ---- Primary Productivity ----
  {
    id: "environment-002",
    subtopic: "Primary Productivity",
    question: "Which of the following statements regarding Primary Productivity in an ecosystem is/are correct?\n1. Photosynthetically Active Radiation (PAR) encompasses the entire visible light spectrum emitted by the sun.\n2. Net Primary Productivity (NPP) is calculated as Gross Primary Productivity (GPP) minus energy lost through plant respiration and metabolism.\n3. NPP represents the organic matter available for consumption by heterotrophs.\n\nSelect the correct answer using the code given below:",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "b",
    explanation: "Statement 1 is incorrect because PAR represents only that specific fraction/wavelength of sunlight utilized by producers for photosynthesis, not the entire visible spectrum. Statements 2 and 3 are correct because NPP equals GPP minus energy consumed by plants for respiration and growth (NPP = GPP - R), which leaves the net energy available for the rest of the world.",
  },
  {
    id: "environment-013",
    subtopic: "Primary Productivity",
    question: "Which of the following statements regarding Primary Productivity in an ecosystem is/are correct?\n1. Photosynthetically Active Radiation (PAR) encompasses the specific wavelength fraction of sunlight utilized by photoautotrophs for photosynthesis.\n2. Net Primary Productivity (NPP) is calculated as Gross Primary Productivity (GPP) minus energy lost through plant respiration and metabolism.\n3. NPP represents the net organic matter available for consumption by heterotrophs.\n\nSelect the correct answer using the code given below:",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "d",
    explanation: "All three statements are correct [5, 13]. PAR refers to the specific fraction of solar radiation harvested during photosynthesis [5, 14]. GPP is total energy created, while NPP is GPP minus metabolic/respiratory energy loss (NPP = GPP - R), leaving the remaining energy available to the rest of the ecosystem [13].",
  },
  // ---- Stages of Decomposition ----
  {
    id: "environment-004",
    subtopic: "Stages of Decomposition",
    question: "Match Column-I (Stage of Decomposition) with Column-II (Characteristic Process):\n\nColumn-I:\n1. Fragmentation\n2. Leaching\n3. Catabolism\n4. Humification\n5. Mineralization\n\nColumn-II:\nA. Degradation by bacterial and fungal enzymes into simpler inorganic substances\nB. Breakdown of detritus into smaller fragments by detritivores\nC. Accumulation of a dark, amorphous, highly fertile organic substance\nD. Final degradation releasing inorganic nutrients back into the environment with no remaining organic matter\nE. Water-soluble inorganic nutrients and fluids seeping into the soil horizon\n\nSelect the correct match:",
    options: [
      "1-B, 2-E, 3-A, 4-C, 5-D",
      "1-A, 2-E, 3-B, 4-C, 5-D",
      "1-B, 2-C, 3-A, 4-E, 5-D",
      "1-E, 2-B, 3-A, 4-D, 5-C",
    ],
    correctOptionId: "a",
    explanation: "Fragmentation is the physical breakdown by detritivores. Leaching is the seeping of fluid content into the soil. Catabolism involves bacterial/fungal enzymatic breakdown. Humification forms dark amorphous humus. Mineralization completes the process by degrading humus into inorganic nutrients, leaving no organic matter.",
  },
  {
    id: "environment-016",
    subtopic: "Stages of Decomposition",
    question: "Match Column-I (Stage of Decomposition) with Column-II (Characteristic Process):\n\nColumn-I:\n1. Fragmentation\n2. Leaching\n3. Catabolism\n4. Humification\n5. Mineralization\n\nColumn-II:\nA. Degradation by bacterial and fungal enzymes into simpler inorganic compounds\nB. Breakdown of detritus into smaller particles by detritivores\nC. Accumulation of a dark, amorphous, highly fertile organic substance\nD. Complete degradation releasing inorganic nutrients back into soil with no remaining organic matter\nE. Water-soluble inorganic nutrients and fluids seeping into the soil horizon\n\nSelect the correct match:",
    options: [
      "1-B, 2-E, 3-A, 4-C, 5-D",
      "1-A, 2-E, 3-B, 4-C, 5-D",
      "1-B, 2-C, 3-A, 4-E, 5-D",
      "1-E, 2-B, 3-A, 4-D, 5-C",
    ],
    correctOptionId: "a",
    explanation: "Fragmentation is the physical breakdown by detritivores/insects [6]. Leaching involves water-soluble fluids seeping into soil [23]. Catabolism is enzymatic degradation by microbes [23]. Humification creates dark amorphous humus [24]. Mineralization completes decomposition by breaking down humus into inorganic nutrients [25, 26].",
  },
  // ---- Decomposition Rates & Factors ----
  {
    id: "environment-005",
    subtopic: "Decomposition Rates & Factors",
    question: "Consider the following statements regarding decomposition rates in tropical rainforests (e.g., Congo) versus cold temperate regions (e.g., England):\n1. High temperatures and abundant moisture in tropical rainforests result in an extremely rapid rate of decomposition.\n2. Soils in tropical rainforests quickly reach the mineralization stage, resulting in lower long-term humus retention compared to temperate soils.\n3. Cold temperatures in temperate regions slow down decomposition, extending the humification phase and creating dark, fertile soils.\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "d",
    explanation: "All three statements are correct. High warmth and moisture in Congo drive rapid decomposition straight to mineralization, preventing long-term humus retention. In contrast, cooler temperatures in England slow decomposition, maintaining a long humification stage that produces dark, highly fertile soil.",
  },
  {
    id: "environment-017",
    subtopic: "Decomposition Rates & Factors",
    question: "Consider the following statements regarding decomposition in tropical rainforests (e.g., Congo) versus cold temperate regions (e.g., England):\n1. Warm temperatures and abundant moisture in tropical rainforests cause rapid decomposition, reaching the mineralization stage quickly.\n2. Rapid mineralization in tropical rainforest soils leaves lower long-term humus retention, making the topsoil less fertile over time.\n3. Cooler temperate climates slow down the decomposition rate, prolonging the humification stage and creating dark, highly fertile soil.\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "d",
    explanation: "All three statements are correct [27, 28]. High heat and moisture in Congo accelerate decomposition directly to mineralization, preventing long-term humus accumulation [27, 28]. In contrast, cooler temperate climates (like England) retard microbial action, extending the humification stage and building dark, fertile soils [27, 28].",
  },
]);
