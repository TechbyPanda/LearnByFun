import type { MCQQuestion } from "./types";

export const environmentQuestions: MCQQuestion[] = [
  {
    id: "environment-001",
    subject: "Environment",
    topic: "Ecological Hierarchy",
    question:
      "Arrange the following levels of ecological organization in increasing order of scale and complexity:\n1. Community\n2. Population\n3. Biome\n4. Ecosystem\n5. Biosphere\n\nSelect the correct sequence:",
    options: [
      { id: "a", text: "2 -> 1 -> 4 -> 3 -> 5" },
      { id: "b", text: "1 -> 2 -> 4 -> 3 -> 5" },
      { id: "c", text: "2 -> 1 -> 3 -> 4 -> 5" },
      { id: "d", text: "1 -> 2 -> 3 -> 4 -> 5" },
    ],
    correctOptionId: "a",
    explanation:
      "The biological progression order from individual to global scale is: Individual -> Population -> Community -> Ecosystem -> Biome -> Biosphere.",
  },
  {
    id: "environment-002",
    subject: "Environment",
    topic: "Primary Productivity & Solar Radiation",
    question:
      "Which of the following statements regarding Primary Productivity in an ecosystem is/are correct?\n1. Photosynthetically Active Radiation (PAR) encompasses the entire visible light spectrum emitted by the sun.\n2. Net Primary Productivity (NPP) is calculated as Gross Primary Productivity (GPP) minus energy lost through plant respiration and metabolism.\n3. NPP represents the organic matter available for consumption by heterotrophs.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statement 1 is incorrect because PAR represents only that specific fraction/wavelength of sunlight utilized by producers for photosynthesis, not the entire visible spectrum. Statements 2 and 3 are correct because NPP equals GPP minus energy consumed by plants for respiration and growth (NPP = GPP - R), which leaves the net energy available for the rest of the world.",
  },
  {
    id: "environment-003",
    subject: "Environment",
    topic: "Evolution of Terrestrial Life",
    question:
      "Fill in the blanks regarding key milestones in terrestrial plant evolution:\n'Early land colonization started with ____ (a symbiotic association of algae and fungi) and mosses. To stand erect and grow tall against gravity, land plants later evolved structural tissue containing ____ and chitin.'\n\nChoose the correct pair of terms:",
    options: [
      { id: "a", text: "Cyanobacteria; Cellulose" },
      { id: "b", text: "Lichens; Lignin" },
      { id: "c", text: "Mycorrhizae; Suberin" },
      { id: "d", text: "Plankton; Cutin" },
    ],
    correctOptionId: "b",
    explanation:
      "Lichens (algae + fungi) were pioneer species on barren rocks that accelerated weathering alongside mosses. Later, land plants evolved lignin and chitin, which allowed them to stand erect, grow taller, develop deeper roots, and form complex forests.",
  },
  {
    id: "environment-004",
    subject: "Environment",
    topic: "Stages of Decomposition",
    question:
      "Match Column-I (Stage of Decomposition) with Column-II (Characteristic Process):\n\nColumn-I:\n1. Fragmentation\n2. Leaching\n3. Catabolism\n4. Humification\n5. Mineralization\n\nColumn-II:\nA. Degradation by bacterial and fungal enzymes into simpler inorganic substances\nB. Breakdown of detritus into smaller fragments by detritivores\nC. Accumulation of a dark, amorphous, highly fertile organic substance\nD. Final degradation releasing inorganic nutrients back into the environment with no remaining organic matter\nE. Water-soluble inorganic nutrients and fluids seeping into the soil horizon\n\nSelect the correct match:",
    options: [
      { id: "a", text: "1-B, 2-E, 3-A, 4-C, 5-D" },
      { id: "b", text: "1-A, 2-E, 3-B, 4-C, 5-D" },
      { id: "c", text: "1-B, 2-C, 3-A, 4-E, 5-D" },
      { id: "d", text: "1-E, 2-B, 3-A, 4-D, 5-C" },
    ],
    correctOptionId: "a",
    explanation:
      "Fragmentation is the physical breakdown by detritivores. Leaching is the seeping of fluid content into the soil. Catabolism involves bacterial/fungal enzymatic breakdown. Humification forms dark amorphous humus. Mineralization completes the process by degrading humus into inorganic nutrients, leaving no organic matter.",
  },
  {
    id: "environment-005",
    subject: "Environment",
    topic: "Factors Affecting Decomposition & Regional Comparison",
    question:
      "Consider the following statements regarding decomposition rates in tropical rainforests (e.g., Congo) versus cold temperate regions (e.g., England):\n1. High temperatures and abundant moisture in tropical rainforests result in an extremely rapid rate of decomposition.\n2. Soils in tropical rainforests quickly reach the mineralization stage, resulting in lower long-term humus retention compared to temperate soils.\n3. Cold temperatures in temperate regions slow down decomposition, extending the humification phase and creating dark, fertile soils.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "All three statements are correct. High warmth and moisture in Congo drive rapid decomposition straight to mineralization, preventing long-term humus retention. In contrast, cooler temperatures in England slow decomposition, maintaining a long humification stage that produces dark, highly fertile soil.",
  },
  {
    id: "environment-006",
    subject: "Environment",
    topic: "Tropical Diversity & Abiotic Adaptation",
    question:
      "Which of the following factors explain why tropical regions exhibit significantly higher species diversity compared to temperate regions?\n1. Higher solar radiation leading to greater Net Primary Productivity (NPP).\n2. Relatively consistent climate throughout the year with less seasonal variation.\n3. Minimal impact from historical Ice Age glaciations compared to higher latitudes.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "All three factors contribute to high tropical speciation: intense solar insolation boosts NPP through photosynthesis, predictable climates with minimal seasonal variation encourage niche specialization, and tropical regions remained largely unaffected by glaciations during Ice Ages.",
  },
  {
    id: "environment-007",
    subject: "Environment",
    topic: "Organismal Responses to Abiotic Stress",
    question:
      "Match the response mechanism to abiotic stress with its correct description:\n\n1. Regulate\n2. Conform\n3. Migrate\n4. Suspend\n\nA. Body temperature and internal parameters change directly with the surrounding environment\nB. Temporary movement from a stressful habitat to a more hospitable area\nC. Maintenance of constant internal homeostasis via physiological/behavioral mechanisms\nD. Postponement or halting of metabolic activities during adverse conditions\n\nSelect the correct option:",
    options: [
      { id: "a", text: "1-C, 2-A, 3-B, 4-D" },
      { id: "b", text: "1-A, 2-C, 3-B, 4-D" },
      { id: "c", text: "1-C, 2-B, 3-A, 4-D" },
      { id: "d", text: "1-D, 2-A, 3-B, 4-C" },
    ],
    correctOptionId: "a",
    explanation:
      "Regulate refers to maintaining homeostasis via thermoregulation and osmoregulation (e.g., mammals). Conform means body parameters shift with external conditions (plants, lower animals). Migrate is moving temporarily to favorable habitats. Suspend involves slowing or halting metabolic processes.",
  },
  {
    id: "environment-008",
    subject: "Environment",
    topic: "Types of Metabolic Suspension",
    question:
      "Consider the following pairs of metabolic suspension mechanisms and their characteristics:\n1. Hibernation - Winter sleep to conserve energy by slowing metabolism and lowering body temperature.\n2. Estivation - Summer dormancy to escape extreme heat and water scarcity.\n3. Diapause - Suspended development/metabolism seen in microscopic organisms and insect larvae.\n4. Cryptobiosis - Extreme metabolic shutdown in organisms capable of surviving freezing, vacuum, and mass extinctions.\n\nWhich of the pairs given above are correctly matched?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "1, 2, and 3 only" },
      { id: "c", text: "3 and 4 only" },
      { id: "d", text: "1, 2, 3, and 4" },
    ],
    correctOptionId: "d",
    explanation:
      "All four pairs are correctly matched. Hibernation occurs during winter (bears, bats), Estivation during summer drought (snails, crocodiles), Diapause in insect larvae and microscopic species, and Cryptobiosis in organisms like tardigrades (water bears) that survived all 5 mass extinctions.",
  },
  {
    id: "environment-009",
    subject: "Environment",
    topic: "Migratory Birds & Indian Flyways",
    question:
      "Which of the following major avian migratory flyways pass through India?\n1. Central Asian Flyway\n2. West Asian - East African Flyway\n3. East Asian - Australian Flyway\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 only" },
      { id: "b", text: "1 and 2 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "India hosts a vast diversity of migratory birds because three major global flyways cross its geographic boundaries: Central Asian Flyway, West Asian - East African Flyway, and East Asian - Australian Flyway.",
  },
  {
    id: "environment-010",
    subject: "Environment",
    topic: "Protected Areas & Human-Wildlife Interaction",
    question:
      "Which of the following statements regarding Bandipur Tiger Reserve and regional ecological issues is/are correct?\n1. Bandipur Tiger Reserve is located at the tri-junction of Karnataka, Tamil Nadu, and Kerala within the Nilgiri Biosphere Reserve.\n2. The reserve is drained by the Moyar River.\n3. 'Kumki' elephants are specially trained elephants deployed to manage human-wildlife conflict and control wild herds.\n4. Proliferation of the invasive plant Lantana camara suppresses grass growth, restricting herbivore range and altering tiger hunting behavior toward livestock.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1, 2, 3, and 4" },
      { id: "b", text: "1, 2, and 4 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "2 and 4 only" },
    ],
    correctOptionId: "a",
    explanation:
      "All statements are correct. Bandipur lies at the tri-junction of Karnataka, Tamil Nadu, and Kerala in the Nilgiri Biosphere Reserve, is drained by the Moyar River, uses trained Kumki elephants for human-wildlife conflict mitigation, and suffers from invasive Lantana camara which blocks sunlight for grass, impacting deer distribution and driving tigers toward preying on cattle.",
  },
];
