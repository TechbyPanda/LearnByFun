import { environmentChapter } from "./syllabus";

// Levels of organisation, evolution of life and how organisms cope with abiotic stress.
export const ecologyBasicsQuestions = environmentChapter("Ecology Basics", [
  // ---- Levels of Ecological Organisation ----
  {
    id: "environment-001",
    subtopic: "Levels of Ecological Organisation",
    question: "Arrange the following levels of ecological organization in increasing order of scale and complexity:\n1. Community\n2. Population\n3. Biome\n4. Ecosystem\n5. Biosphere\n\nSelect the correct sequence:",
    options: [
      "2 -> 1 -> 4 -> 3 -> 5",
      "1 -> 2 -> 4 -> 3 -> 5",
      "2 -> 1 -> 3 -> 4 -> 5",
      "1 -> 2 -> 3 -> 4 -> 5",
    ],
    correctOptionId: "a",
    explanation: "The biological progression order from individual to global scale is: Individual -> Population -> Community -> Ecosystem -> Biome -> Biosphere.",
  },
  {
    id: "environment-012",
    subtopic: "Levels of Ecological Organisation",
    question: "Arrange the following levels of ecological organization in increasing order of scale and complexity:\n1. Community\n2. Population\n3. Biome\n4. Ecosystem\n5. Biosphere\n\nSelect the correct sequence:",
    options: [
      "2 -> 1 -> 4 -> 3 -> 5",
      "1 -> 2 -> 4 -> 3 -> 5",
      "2 -> 1 -> 3 -> 4 -> 5",
      "1 -> 2 -> 3 -> 4 -> 5",
    ],
    correctOptionId: "a",
    explanation: "According to the ecological hierarchy, biological organization progresses as follows: Individual -> Population -> Community -> Ecosystem -> Biome -> Biosphere [4].",
  },
  // ---- Evolution of Life on Earth ----
  {
    id: "environment-003",
    subtopic: "Evolution of Life on Earth",
    question: "Fill in the blanks regarding key milestones in terrestrial plant evolution:\n'Early land colonization started with ____ (a symbiotic association of algae and fungi) and mosses. To stand erect and grow tall against gravity, land plants later evolved structural tissue containing ____ and chitin.'\n\nChoose the correct pair of terms:",
    options: [
      "Cyanobacteria; Cellulose",
      "Lichens; Lignin",
      "Mycorrhizae; Suberin",
      "Plankton; Cutin",
    ],
    correctOptionId: "b",
    explanation: "Lichens (algae + fungi) were pioneer species on barren rocks that accelerated weathering alongside mosses. Later, land plants evolved lignin and chitin, which allowed them to stand erect, grow taller, develop deeper roots, and form complex forests.",
  },
  {
    id: "environment-014",
    subtopic: "Evolution of Life on Earth",
    question: "Fill in the blanks regarding the early evolution of life on Earth:\n'The origin of life on Earth began in the oceans with ____, which synthesized energy from inorganic chemicals without sunlight. Later, ____ evolved in oceans and released oxygen as a metabolic byproduct, leading to atmospheric oxygenation.'\n\nChoose the correct pair of terms:",
    options: [
      "Photoautotrophs; Lichens",
      "Chemoautotrophs; Cyanobacteria (Blue-green bacteria)",
      "Saprotrophs; Mosses",
      "Heterotrophs; Plankton",
    ],
    correctOptionId: "b",
    explanation: "Life originated in oceanic chemical mixtures with chemoautotrophs [15, 16]. Cyanobacteria (blue-green bacteria) evolved later around 3.5 billion years ago, utilizing dissolved CO2 and producing oxygen as a byproduct during the Great Oxidation Event [16-18].",
  },
  {
    id: "environment-015",
    subtopic: "Evolution of Life on Earth",
    question: "Consider the following statements regarding the colonization of land by plants:\n1. Pioneer land colonization was led by lichens (a symbiotic partnership of algae and fungi) and mosses, which accelerated rock weathering.\n2. The evolution of structural tissues containing lignin and chitin allowed land plants to stand erect, grow tall, and develop deeper root systems.\n3. Non-flowering plants represent over 75% of modern plant species due to their superior seed dispersal mechanisms.\n\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "a",
    explanation: "Statements 1 and 2 are correct [19-21]. Lichens and mosses pioneered land colonization and accelerated weathering [19]. Lignin and chitin enabled erect growth and deeper root systems [20, 21]. Statement 3 is incorrect because flowering plants (angiosperms) make up around 75% of plant species today due to insect pollination mechanisms [22].",
  },
  // ---- Responses to Abiotic Stress ----
  {
    id: "environment-007",
    subtopic: "Responses to Abiotic Stress",
    question: "Match the response mechanism to abiotic stress with its correct description:\n\n1. Regulate\n2. Conform\n3. Migrate\n4. Suspend\n\nA. Body temperature and internal parameters change directly with the surrounding environment\nB. Temporary movement from a stressful habitat to a more hospitable area\nC. Maintenance of constant internal homeostasis via physiological/behavioral mechanisms\nD. Postponement or halting of metabolic activities during adverse conditions\n\nSelect the correct option:",
    options: [
      "1-C, 2-A, 3-B, 4-D",
      "1-A, 2-C, 3-B, 4-D",
      "1-C, 2-B, 3-A, 4-D",
      "1-D, 2-A, 3-B, 4-C",
    ],
    correctOptionId: "a",
    explanation: "Regulate refers to maintaining homeostasis via thermoregulation and osmoregulation (e.g., mammals). Conform means body parameters shift with external conditions (plants, lower animals). Migrate is moving temporarily to favorable habitats. Suspend involves slowing or halting metabolic processes.",
  },
  {
    id: "environment-020",
    subtopic: "Responses to Abiotic Stress",
    question: "Match the organismal response mechanism to abiotic stress with its correct definition:\n\n1. Regulate\n2. Conform\n3. Migrate\n4. Suspend\n\nA. Body temperature and internal parameters change directly with external environmental conditions\nB. Temporary movement from a stressful habitat to a hospitable location\nC. Maintenance of internal homeostasis via physiological or behavioral means\nD. Postponement or halting of metabolic activities during adverse conditions\n\nSelect the correct option:",
    options: [
      "1-C, 2-A, 3-B, 4-D",
      "1-A, 2-C, 3-B, 4-D",
      "1-C, 2-B, 3-A, 4-D",
      "1-D, 2-A, 3-B, 4-C",
    ],
    correctOptionId: "a",
    explanation: "Regulate = maintaining homeostasis (mammals, birds) [9, 33]. Conform = internal parameters changing with the environment (plants, lower invertebrates) [9, 33]. Migrate = temporary movement to favorable areas [9, 34]. Suspend = halting metabolic activity [9, 10].",
  },
  // ---- Temperature Tolerance ----
  {
    id: "environment-018",
    subtopic: "Temperature Tolerance",
    question: "Which of the following statements regarding organisms' temperature tolerance is/are correct?\n1. Stenothermal organisms can tolerate and thrive across a wide range of temperature variations.\n2. Marine species are predominantly stenothermal because oceanic temperatures remain relatively homogeneous compared to terrestrial environments.\n3. Eurythermal organisms possess physiological mechanisms for thermoregulation and osmoregulation.\n\nSelect the correct answer using the code given below:",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2, and 3",
    ],
    correctOptionId: "b",
    explanation: "Statement 1 is incorrect because stenothermal organisms withstand only a very narrow temperature range, while eurythermal organisms withstand wide temperature variations [29]. Statement 2 is correct because stable marine water temperatures made aquatic species stenothermal and vulnerable to sudden thermal changes [29]. Statement 3 is correct because eurythermal animals (e.g., mammals) use thermoregulation and osmoregulation [30].",
  },
  // ---- Dormancy & Metabolic Suspension ----
  {
    id: "environment-008",
    subtopic: "Dormancy & Metabolic Suspension",
    question: "Consider the following pairs of metabolic suspension mechanisms and their characteristics:\n1. Hibernation - Winter sleep to conserve energy by slowing metabolism and lowering body temperature.\n2. Estivation - Summer dormancy to escape extreme heat and water scarcity.\n3. Diapause - Suspended development/metabolism seen in microscopic organisms and insect larvae.\n4. Cryptobiosis - Extreme metabolic shutdown in organisms capable of surviving freezing, vacuum, and mass extinctions.\n\nWhich of the pairs given above are correctly matched?",
    options: [
      "1 and 2 only",
      "1, 2, and 3 only",
      "3 and 4 only",
      "1, 2, 3, and 4",
    ],
    correctOptionId: "d",
    explanation: "All four pairs are correctly matched. Hibernation occurs during winter (bears, bats), Estivation during summer drought (snails, crocodiles), Diapause in insect larvae and microscopic species, and Cryptobiosis in organisms like tardigrades (water bears) that survived all 5 mass extinctions.",
  },
  {
    id: "environment-021",
    subtopic: "Dormancy & Metabolic Suspension",
    question: "Consider the following pairs regarding metabolic suspension mechanisms:\n1. Hibernation - Winter dormancy to conserve energy by lowering body temperature and metabolic rate.\n2. Estivation - Summer dormancy to escape extreme heat and water scarcity.\n3. Diapause - Suspended development observed in microscopic organisms and insect larvae.\n4. Cryptobiasis - Complete metabolic halt enabling survival in extreme conditions (e.g., Tardigrades).\n\nWhich of the pairs given above are correctly matched?",
    options: [
      "1 and 2 only",
      "1, 2, and 3 only",
      "3 and 4 only",
      "1, 2, 3, and 4",
    ],
    correctOptionId: "d",
    explanation: "All four pairs are correctly matched [35-37]. Hibernation occurs in winter (bears, bats) [35, 36]. Estivation occurs during summer heat/drought (snails, crocodiles) [36]. Diapause halts developmental stages in insect larvae [36, 37]. Cryptobiasis is a complete metabolic shutdown in organisms like tardigrades, which have survived all 5 mass extinctions [37].",
  },
]);
