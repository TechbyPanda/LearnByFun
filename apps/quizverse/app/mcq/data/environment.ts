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
  {
    id: "environment-012",
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
      "According to the ecological hierarchy, biological organization progresses as follows: Individual -> Population -> Community -> Ecosystem -> Biome -> Biosphere [4].",
  },
  {
    id: "environment-013",
    subject: "Environment",
    topic: "Primary Productivity & Solar Radiation",
    question:
      "Which of the following statements regarding Primary Productivity in an ecosystem is/are correct?\n1. Photosynthetically Active Radiation (PAR) encompasses the specific wavelength fraction of sunlight utilized by photoautotrophs for photosynthesis.\n2. Net Primary Productivity (NPP) is calculated as Gross Primary Productivity (GPP) minus energy lost through plant respiration and metabolism.\n3. NPP represents the net organic matter available for consumption by heterotrophs.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "All three statements are correct [5, 13]. PAR refers to the specific fraction of solar radiation harvested during photosynthesis [5, 14]. GPP is total energy created, while NPP is GPP minus metabolic/respiratory energy loss (NPP = GPP - R), leaving the remaining energy available to the rest of the ecosystem [13].",
  },
  {
    id: "environment-014",
    subject: "Environment",
    topic: "Evolution of Life & Chemoautotrophs",
    question:
      "Fill in the blanks regarding the early evolution of life on Earth:\n'The origin of life on Earth began in the oceans with ____, which synthesized energy from inorganic chemicals without sunlight. Later, ____ evolved in oceans and released oxygen as a metabolic byproduct, leading to atmospheric oxygenation.'\n\nChoose the correct pair of terms:",
    options: [
      { id: "a", text: "Photoautotrophs; Lichens" },
      { id: "b", text: "Chemoautotrophs; Cyanobacteria (Blue-green bacteria)" },
      { id: "c", text: "Saprotrophs; Mosses" },
      { id: "d", text: "Heterotrophs; Plankton" },
    ],
    correctOptionId: "b",
    explanation:
      "Life originated in oceanic chemical mixtures with chemoautotrophs [15, 16]. Cyanobacteria (blue-green bacteria) evolved later around 3.5 billion years ago, utilizing dissolved CO2 and producing oxygen as a byproduct during the Great Oxidation Event [16-18].",
  },
  {
    id: "environment-015",
    subject: "Environment",
    topic: "Evolution of Terrestrial Life",
    question:
      "Consider the following statements regarding the colonization of land by plants:\n1. Pioneer land colonization was led by lichens (a symbiotic partnership of algae and fungi) and mosses, which accelerated rock weathering.\n2. The evolution of structural tissues containing lignin and chitin allowed land plants to stand erect, grow tall, and develop deeper root systems.\n3. Non-flowering plants represent over 75% of modern plant species due to their superior seed dispersal mechanisms.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "a",
    explanation:
      "Statements 1 and 2 are correct [19-21]. Lichens and mosses pioneered land colonization and accelerated weathering [19]. Lignin and chitin enabled erect growth and deeper root systems [20, 21]. Statement 3 is incorrect because flowering plants (angiosperms) make up around 75% of plant species today due to insect pollination mechanisms [22].",
  },
  {
    id: "environment-016",
    subject: "Environment",
    topic: "Stages of Decomposition",
    question:
      "Match Column-I (Stage of Decomposition) with Column-II (Characteristic Process):\n\nColumn-I:\n1. Fragmentation\n2. Leaching\n3. Catabolism\n4. Humification\n5. Mineralization\n\nColumn-II:\nA. Degradation by bacterial and fungal enzymes into simpler inorganic compounds\nB. Breakdown of detritus into smaller particles by detritivores\nC. Accumulation of a dark, amorphous, highly fertile organic substance\nD. Complete degradation releasing inorganic nutrients back into soil with no remaining organic matter\nE. Water-soluble inorganic nutrients and fluids seeping into the soil horizon\n\nSelect the correct match:",
    options: [
      { id: "a", text: "1-B, 2-E, 3-A, 4-C, 5-D" },
      { id: "b", text: "1-A, 2-E, 3-B, 4-C, 5-D" },
      { id: "c", text: "1-B, 2-C, 3-A, 4-E, 5-D" },
      { id: "d", text: "1-E, 2-B, 3-A, 4-D, 5-C" },
    ],
    correctOptionId: "a",
    explanation:
      "Fragmentation is the physical breakdown by detritivores/insects [6]. Leaching involves water-soluble fluids seeping into soil [23]. Catabolism is enzymatic degradation by microbes [23]. Humification creates dark amorphous humus [24]. Mineralization completes decomposition by breaking down humus into inorganic nutrients [25, 26].",
  },
  {
    id: "environment-017",
    subject: "Environment",
    topic: "Decomposition Rates & Soil Fertility",
    question:
      "Consider the following statements regarding decomposition in tropical rainforests (e.g., Congo) versus cold temperate regions (e.g., England):\n1. Warm temperatures and abundant moisture in tropical rainforests cause rapid decomposition, reaching the mineralization stage quickly.\n2. Rapid mineralization in tropical rainforest soils leaves lower long-term humus retention, making the topsoil less fertile over time.\n3. Cooler temperate climates slow down the decomposition rate, prolonging the humification stage and creating dark, highly fertile soil.\n\nWhich of the statements given above are correct?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "All three statements are correct [27, 28]. High heat and moisture in Congo accelerate decomposition directly to mineralization, preventing long-term humus accumulation [27, 28]. In contrast, cooler temperate climates (like England) retard microbial action, extending the humification stage and building dark, fertile soils [27, 28].",
  },
  {
    id: "environment-018",
    subject: "Environment",
    topic: "Temperature Tolerance (Stenothermal vs Eurythermal)",
    question:
      "Which of the following statements regarding organisms' temperature tolerance is/are correct?\n1. Stenothermal organisms can tolerate and thrive across a wide range of temperature variations.\n2. Marine species are predominantly stenothermal because oceanic temperatures remain relatively homogeneous compared to terrestrial environments.\n3. Eurythermal organisms possess physiological mechanisms for thermoregulation and osmoregulation.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "b",
    explanation:
      "Statement 1 is incorrect because stenothermal organisms withstand only a very narrow temperature range, while eurythermal organisms withstand wide temperature variations [29]. Statement 2 is correct because stable marine water temperatures made aquatic species stenothermal and vulnerable to sudden thermal changes [29]. Statement 3 is correct because eurythermal animals (e.g., mammals) use thermoregulation and osmoregulation [30].",
  },
  {
    id: "environment-019",
    subject: "Environment",
    topic: "Factors Driving Tropical Diversity",
    question:
      "Which of the following reasons explain why tropical regions display significantly higher speciation and biodiversity than temperate regions?\n1. Greater solar insulation leading to higher Net Primary Productivity (NPP).\n2. Predictable tropical climate with minimal seasonal temperature variation.\n3. Minimal disruption from historical Ice Age glaciations compared to higher latitudes.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "All three reasons are correct [31, 32]. Tropical zones receive higher solar energy (boosting NPP) [31], experience consistent year-round climate (encouraging niche specialization) [31], and remained largely unglaciated during geological Ice Ages [32].",
  },
  {
    id: "environment-020",
    subject: "Environment",
    topic: "Organismal Responses to Abiotic Stress",
    question:
      "Match the organismal response mechanism to abiotic stress with its correct definition:\n\n1. Regulate\n2. Conform\n3. Migrate\n4. Suspend\n\nA. Body temperature and internal parameters change directly with external environmental conditions\nB. Temporary movement from a stressful habitat to a hospitable location\nC. Maintenance of internal homeostasis via physiological or behavioral means\nD. Postponement or halting of metabolic activities during adverse conditions\n\nSelect the correct option:",
    options: [
      { id: "a", text: "1-C, 2-A, 3-B, 4-D" },
      { id: "b", text: "1-A, 2-C, 3-B, 4-D" },
      { id: "c", text: "1-C, 2-B, 3-A, 4-D" },
      { id: "d", text: "1-D, 2-A, 3-B, 4-C" },
    ],
    correctOptionId: "a",
    explanation:
      "Regulate = maintaining homeostasis (mammals, birds) [9, 33]. Conform = internal parameters changing with the environment (plants, lower invertebrates) [9, 33]. Migrate = temporary movement to favorable areas [9, 34]. Suspend = halting metabolic activity [9, 10].",
  },
  {
    id: "environment-021",
    subject: "Environment",
    topic: "Types of Metabolic Suspension",
    question:
      "Consider the following pairs regarding metabolic suspension mechanisms:\n1. Hibernation - Winter dormancy to conserve energy by lowering body temperature and metabolic rate.\n2. Estivation - Summer dormancy to escape extreme heat and water scarcity.\n3. Diapause - Suspended development observed in microscopic organisms and insect larvae.\n4. Cryptobiasis - Complete metabolic halt enabling survival in extreme conditions (e.g., Tardigrades).\n\nWhich of the pairs given above are correctly matched?",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "1, 2, and 3 only" },
      { id: "c", text: "3 and 4 only" },
      { id: "d", text: "1, 2, 3, and 4" },
    ],
    correctOptionId: "d",
    explanation:
      "All four pairs are correctly matched [35-37]. Hibernation occurs in winter (bears, bats) [35, 36]. Estivation occurs during summer heat/drought (snails, crocodiles) [36]. Diapause halts developmental stages in insect larvae [36, 37]. Cryptobiasis is a complete metabolic shutdown in organisms like tardigrades, which have survived all 5 mass extinctions [37].",
  },
  {
    id: "environment-022",
    subject: "Environment",
    topic: "Migratory Birds & Indian Flyways",
    question:
      "Which of the following major avian migratory flyways cross through India?\n1. Central Asian Flyway\n2. West Asian - East African Flyway\n3. East Asian - Australian Flyway\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 only" },
      { id: "b", text: "1 and 2 only" },
      { id: "c", text: "2 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "India acts as a major hub for avian species because three global flyways intersect its geography: Central Asian Flyway, West Asian - East African Flyway, and East Asian - Australian Flyway [10].",
  },
  {
    id: "environment-023",
    subject: "Environment",
    topic: "Bandipur Tiger Reserve & Regional Protected Areas",
    question:
      "Which of the following statements regarding Bandipur Tiger Reserve is/are correct?\n1. It is located at the tri-junction of Karnataka, Tamil Nadu, and Kerala within the Nilgiri Biosphere Reserve.\n2. It forms an ecological confluence connecting the Western Ghats and Eastern Ghats.\n3. The reserve is drained by the Moyar River.\n4. It forms a contiguous forest network with Mudumalai, Wayanad, and Nagarhole national parks.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1, 2, 3, and 4" },
      { id: "b", text: "1, 2, and 4 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "2 and 3 only" },
    ],
    correctOptionId: "a",
    explanation:
      "All statements are correct [8, 38-40]. Bandipur lies at the Karnataka-Tamil Nadu-Kerala tri-junction in the Nilgiri Biosphere Reserve [39], connects the Western and Eastern Ghats [39], is drained by the Moyar River [38], and forms a contiguous landscape with Mudumalai (TN), Wayanad (KL), and Nagarhole (KA) [40].",
  },
  {
    id: "environment-024",
    subject: "Environment",
    topic: "Human-Wildlife Conflict Mitigation",
    question:
      "In the context of wildlife management in southern India, what are 'Kumki' elephants?",
    options: [
      { id: "a", text: "Captive temple elephants trained for religious processions" },
      { id: "b", text: "Specially trained working elephants deployed to handle wild elephant herds and reduce human-wildlife conflict" },
      { id: "c", text: "Critically endangered wild elephant sub-species endemic to the Nilgiri mountains" },
      { id: "d", text: "Elephants fitted with GPS collars for radio telemetry tracking" },
    ],
    correctOptionId: "b",
    explanation:
      "Kumki elephants are specially trained captive elephants utilized by forest departments to manage wild elephant herds, capture rogue tuskers, and reduce human-elephant conflicts [41, 42].",
  },
  {
    id: "environment-025",
    subject: "Environment",
    topic: "Invasive Alien Species & Ecological Impact",
    question:
      "Which of the following statements explains how the proliferation of *Lantana camara* impacts predator-prey dynamics in tiger reserves?\n1. *Lantana camara* forms thick bushes that block sunlight, suppressing native grass growth required by herbivores like deer.\n2. Reduced grass availability restricts herbivore range, causing deer populations to concentrate in smaller areas.\n3. Tigers utilize thick *Lantana* cover to ambush domestic cattle, altering their hunting behavior and reducing their fear of humans.\n\nSelect the correct answer using the code given below:",
    options: [
      { id: "a", text: "1 and 2 only" },
      { id: "b", text: "2 and 3 only" },
      { id: "c", text: "1 and 3 only" },
      { id: "d", text: "1, 2, and 3" },
    ],
    correctOptionId: "d",
    explanation:
      "All three statements are correct [3, 43]. The invasive weed *Lantana camara* blocks sunlight, halting grass growth [3]. This restricts deer foraging grounds [3]. Tigers take cover in *Lantana* bushes to hunt grazing cattle, leading to altered predatory habits and increased human-animal conflict [3, 43].",
  },
];
