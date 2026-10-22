import type { TrackStage } from "../types";

// UPSC CSE Main Examination, as notified by UPSC. The optional subject's two
// papers (VI and VII) are their own stage; see optionalPsychology.ts.
export const upscMains: TrackStage = {
  id: "mains",
  title: "Mains",
  description:
    "Nine descriptive papers. Two language papers only have to be passed; Essay, GS I–IV and the two optional papers make up 1,750 marks.",
  modules: [
    {
      id: "mains-language",
      title: "Paper A & B: Indian Language and English",
      facts: ["300 marks each", "Qualifying · 25%"],
      description: "Paper A is an Indian language of your choice from the Eighth Schedule; Paper B is English.",
      units: [
        { title: "Comprehension of given passages" },
        { title: "Précis writing" },
        { title: "Usage and vocabulary" },
        { title: "Short essays" },
        { title: "Translation", points: ["From English to the Indian language and vice versa (Paper A only)."] },
      ],
    },
    {
      id: "mains-essay",
      title: "Paper I: Essay",
      facts: ["250 marks", "3 hours"],
      units: [
        {
          title: "Essays on multiple topics",
          points: [
            "Write two essays, one from each section, keeping closely to the subject and arranging your ideas in an orderly fashion.",
            "Credit is given for effective and exact expression.",
          ],
        },
      ],
    },
    {
      id: "mains-gs1",
      title: "Paper II: General Studies I",
      facts: ["250 marks", "3 hours"],
      description: "Indian Heritage and Culture, History and Geography of the World and Society.",
      units: [
        {
          title: "Indian Culture",
          points: ["Salient aspects of Art Forms, Literature and Architecture from ancient to modern times."],
          covers: [{ subject: "Art & Culture" }],
        },
        {
          title: "Modern Indian History",
          points: [
            "Modern Indian history from about the middle of the eighteenth century until the present – significant events, personalities, issues.",
          ],
          covers: [
            { subject: "History", topics: ["Modern"] },
            { subject: "Polity", topics: ["Historical Background"] },
          ],
        },
        {
          title: "The Freedom Struggle",
          points: ["Its various stages and important contributors/contributions from different parts of the country."],
          covers: [
            {
              subject: "History",
              topics: [
                "Modern – Revolt of 1857",
                "Modern – Early Nationalism & the INC",
                "Modern – Gandhian Era",
                "Modern – Revolutionary Movements",
                "Modern – Towards Independence & Partition",
              ],
            },
          ],
        },
        {
          title: "Post-Independence India",
          points: ["Post-independence consolidation and reorganisation within the country."],
          covers: [
            { subject: "History", topics: ["Modern – Towards Independence & Partition"] },
            { subject: "Polity", topics: ["Union, Territory & Citizenship"] },
          ],
        },
        {
          title: "World History",
          points: [
            "Events from the 18th century such as the industrial revolution, world wars, redrawal of national boundaries, colonisation, decolonisation.",
            "Political philosophies like communism, capitalism, socialism etc. – their forms and effect on society.",
          ],
        },
        { title: "Indian Society", points: ["Salient features of Indian Society, Diversity of India."] },
        {
          title: "Social Issues",
          points: [
            "Role of women and women's organisations, population and associated issues, poverty and developmental issues, urbanisation, their problems and their remedies.",
          ],
        },
        { title: "Globalisation", points: ["Effects of globalisation on Indian society."] },
        { title: "Social Empowerment", points: ["Social empowerment, communalism, regionalism & secularism."] },
        {
          title: "World Physical Geography",
          points: ["Salient features of world's physical geography."],
          covers: [
            {
              subject: "Geography",
              topics: ["The Universe & the Earth", "Geomorphology", "Climatology", "Oceanography", "Biogeography & Soils"],
            },
          ],
        },
        {
          title: "Resources & Industrial Location",
          points: [
            "Distribution of key natural resources across the world (including South Asia and the Indian sub-continent).",
            "Factors responsible for the location of primary, secondary, and tertiary sector industries in various parts of the world (including India).",
          ],
          covers: [{ subject: "Geography", topics: ["Minerals, Energy & Industries"] }],
        },
        {
          title: "Geophysical Phenomena",
          points: [
            "Important geophysical phenomena such as earthquakes, tsunami, volcanic activity, cyclones etc.",
            "Geographical features and their location – changes in critical geographical features (including water-bodies and ice-caps) and in flora and fauna, and the effects of such changes.",
          ],
          covers: [{ subject: "Geography", topics: ["Geomorphology", "Climatology", "Places in News & Mapping"] }],
        },
      ],
    },
    {
      id: "mains-gs2",
      title: "Paper III: General Studies II",
      facts: ["250 marks", "3 hours"],
      description: "Governance, Constitution, Polity, Social Justice and International Relations.",
      units: [
        {
          title: "Indian Constitution",
          points: ["Historical underpinnings, evolution, features, amendments, significant provisions and basic structure."],
          covers: [
            {
              subject: "Polity",
              topics: [
                "Historical Background",
                "Making of the Constitution",
                "Salient Features & Sources",
                "Preamble",
                "Union, Territory & Citizenship",
                "Fundamental Rights",
                "Directive Principles of State Policy",
                "Fundamental Duties",
                "Amendment of the Constitution",
                "Basic Structure",
                // Flashcard topic names for the same chapters.
                "Constitution",
                "Articles",
                "DPSP",
                "Amendments",
              ],
            },
          ],
        },
        {
          title: "Union, States & Federalism",
          points: [
            "Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure.",
            "Devolution of powers and finances up to local levels and challenges therein.",
          ],
          covers: [
            {
              subject: "Polity",
              topics: [
                "Parliamentary & Federal System",
                "Centre–State Relations",
                "Inter-State Relations",
                "Emergency Provisions",
                "Local Government",
                "Federalism",
              ],
            },
          ],
        },
        {
          title: "Separation of Powers & Dispute Redressal",
          points: ["Separation of powers between various organs, dispute redressal mechanisms and institutions."],
          covers: [{ subject: "Polity", topics: ["Judiciary"] }],
        },
        {
          title: "Comparing Constitutions",
          points: ["Comparison of the Indian constitutional scheme with that of other countries."],
          covers: [{ subject: "Polity", topics: ["Salient Features & Sources"] }],
        },
        {
          title: "Parliament & State Legislatures",
          points: ["Structure, functioning, conduct of business, powers & privileges and issues arising out of these."],
          covers: [{ subject: "Polity", topics: ["Parliament", "Parliamentary Committees", "State Government"] }],
        },
        {
          title: "Executive, Judiciary & Pressure Groups",
          points: [
            "Structure, organisation and functioning of the Executive and the Judiciary; Ministries and Departments of the Government.",
            "Pressure groups and formal/informal associations and their role in the Polity.",
          ],
          covers: [{ subject: "Polity", topics: ["Union Executive", "State Government", "Judiciary"] }],
        },
        {
          title: "Representation of People's Act",
          points: ["Salient features of the Representation of People's Act."],
          covers: [{ subject: "Polity", topics: ["Elections"] }],
        },
        {
          title: "Constitutional Bodies",
          points: ["Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies."],
          covers: [{ subject: "Polity", topics: ["Constitutional Bodies"] }],
        },
        {
          title: "Statutory, Regulatory & Quasi-Judicial Bodies",
          covers: [
            { subject: "Polity", topics: ["Non-Constitutional Bodies", "Lokpal & Lokayukta"] },
            {
              subject: "Polity",
              topics: ["Governance"],
              subtopics: ["Statutory, Regulatory & Quasi-Judicial Bodies", "CVC, CBI & Anti-Corruption Laws"],
            },
          ],
        },
        {
          title: "Government Policies & Interventions",
          points: [
            "Government policies and interventions for development in various sectors and issues arising out of their design and implementation.",
          ],
          covers: [{ subject: "Current Affairs", topics: ["Government Schemes"] }],
        },
        {
          title: "Development Processes & Civil Society",
          points: [
            "The development industry – the role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders.",
          ],
          covers: [{ subject: "Polity", topics: ["Governance"], subtopics: ["NGOs, SHGs & Civil Society"] }],
        },
        {
          title: "Welfare of Vulnerable Sections",
          points: [
            "Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes.",
            "Mechanisms, laws, institutions and bodies constituted for the protection and betterment of these vulnerable sections.",
          ],
        },
        {
          title: "Social Sector: Health, Education & Human Resources",
          points: ["Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources."],
        },
        {
          title: "Poverty & Hunger",
          points: ["Issues relating to poverty and hunger."],
          covers: [{ subject: "Economy", topics: ["Poverty, Employment & Inclusive Growth"] }],
        },
        {
          title: "Governance, Transparency & Accountability",
          points: [
            "Important aspects of governance, transparency and accountability, e-governance – applications, models, successes, limitations, and potential.",
            "Citizens charters, transparency & accountability and institutional and other measures.",
          ],
          covers: [
            {
              subject: "Polity",
              topics: ["Governance"],
              subtopics: [
                "Right to Information",
                "Citizen's Charter, Social Audit & Service Delivery",
                "E-Governance, Aadhaar & Data Protection",
              ],
            },
          ],
        },
        {
          title: "Role of Civil Services",
          points: ["Role of civil services in a democracy."],
          covers: [{ subject: "Polity", topics: ["Governance"], subtopics: ["Civil Services & Administrative Reforms"] }],
        },
        {
          title: "India & Its Neighbourhood",
          points: ["India and its neighbourhood – relations."],
          covers: [{ subject: "International Relations", topics: ["India & Its Neighbourhood"] }],
        },
        {
          title: "Groupings & Agreements",
          points: ["Bilateral, regional and global groupings and agreements involving India and/or affecting India's interests."],
          covers: [
            {
              subject: "International Relations",
              topics: ["Regional Groupings", "India & Major Powers", "India & Extended Neighbourhood"],
            },
          ],
        },
        {
          title: "Other Countries' Policies & the Diaspora",
          points: ["Effect of policies and politics of developed and developing countries on India's interests, Indian diaspora."],
          covers: [{ subject: "International Relations", topics: ["Indian Diaspora & Foreign Policy"] }],
        },
        {
          title: "International Institutions",
          points: ["Important International institutions, agencies and fora – their structure, mandate."],
          covers: [
            { subject: "International Relations", topics: ["International Organisations"] },
            { subject: "Economy", topics: ["International Economic Organisations", "International Financial Reports"] },
          ],
        },
      ],
    },
    {
      id: "mains-gs3",
      title: "Paper IV: General Studies III",
      facts: ["250 marks", "3 hours"],
      description: "Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management.",
      units: [
        {
          title: "Indian Economy: Planning, Growth & Employment",
          points: [
            "Indian Economy and issues relating to planning, mobilisation of resources, growth, development and employment.",
          ],
          covers: [
            {
              subject: "Economy",
              topics: [
                "National Income & Growth",
                "Inflation & Price Indices",
                "Money, Banking & Monetary Policy",
                "Financial Markets",
                "External Sector",
                "Planning & Economic Reforms",
                // Flashcard topic names.
                "Basics",
                "Monetary Policy",
              ],
            },
          ],
        },
        {
          title: "Inclusive Growth",
          points: ["Inclusive growth and issues arising from it."],
          covers: [{ subject: "Economy", topics: ["Poverty, Employment & Inclusive Growth"] }],
        },
        {
          title: "Government Budgeting",
          covers: [{ subject: "Economy", topics: ["Public Finance & Budget", "Taxation"] }],
        },
        {
          title: "Crops, Irrigation & Agricultural Marketing",
          points: [
            "Major crops – cropping patterns in various parts of the country; different types of irrigation and irrigation systems.",
            "Storage, transport and marketing of agricultural produce and issues and related constraints; e-technology in the aid of farmers.",
          ],
          covers: [
            { subject: "Economy", topics: ["Agriculture"] },
            { subject: "Geography", topics: ["Indian Agriculture & Irrigation"] },
          ],
        },
        {
          title: "Farm Subsidies, MSP & Food Security",
          points: [
            "Issues related to direct and indirect farm subsidies and minimum support prices.",
            "Public Distribution System – objectives, functioning, limitations, revamping; issues of buffer stocks and food security.",
            "Technology missions; economics of animal-rearing.",
          ],
          covers: [{ subject: "Economy", topics: ["Agriculture"], subtopics: ["Agricultural Pricing & MSP", "Food Security & PDS"] }],
        },
        {
          title: "Food Processing",
          points: [
            "Food processing and related industries in India – scope and significance, location, upstream and downstream requirements, supply chain management.",
          ],
        },
        {
          title: "Land Reforms",
          points: ["Land reforms in India."],
          covers: [{ subject: "Economy", topics: ["Agriculture"], subtopics: ["Agricultural Reforms"] }],
        },
        {
          title: "Liberalisation & Industrial Policy",
          points: ["Effects of liberalisation on the economy, changes in industrial policy and their effects on industrial growth."],
          covers: [
            { subject: "Economy", topics: ["Planning & Economic Reforms"], subtopics: ["1991 Reforms (LPG)"] },
            { subject: "Economy", topics: ["Industry & Infrastructure"], subtopics: ["Industrial Policy"] },
          ],
        },
        {
          title: "Infrastructure",
          points: ["Energy, Ports, Roads, Airports, Railways etc."],
          covers: [
            {
              subject: "Economy",
              topics: ["Industry & Infrastructure"],
              subtopics: ["Energy & Biofuels", "Transport & Communication"],
            },
          ],
        },
        { title: "Investment Models" },
        {
          title: "Science & Technology in Everyday Life",
          points: ["Science and Technology – developments and their applications and effects in everyday life."],
          covers: [
            {
              subject: "Science & Technology",
              topics: ["Health & Diseases", "Biotechnology & Genetics", "Nanotechnology & New Materials"],
            },
          ],
        },
        {
          title: "Indian Achievements & Indigenisation",
          points: ["Achievements of Indians in science & technology; indigenisation of technology and developing new technology."],
          covers: [{ subject: "Science & Technology", topics: ["Defence Technology", "Nuclear Technology", "Space Technology"] }],
        },
        {
          title: "IT, Space, Robotics, Biotech & IPR",
          points: [
            "Awareness in the fields of IT, Space, Computers, robotics, nano-technology, bio-technology and issues relating to intellectual property rights.",
          ],
          covers: [
            {
              subject: "Science & Technology",
              topics: [
                "ICT, AI & Emerging Technologies",
                "Space Technology",
                "Biotechnology & Genetics",
                "Nanotechnology & New Materials",
                "Intellectual Property Rights",
              ],
            },
          ],
        },
        {
          title: "Conservation, Pollution & EIA",
          points: ["Conservation, environmental pollution and degradation, environmental impact assessment."],
          covers: [{ subject: "Environment" }],
        },
        { title: "Disaster Management", points: ["Disaster and disaster management."] },
        { title: "Development & Extremism", points: ["Linkages between development and spread of extremism."] },
        {
          title: "External Actors & Internal Security",
          points: ["Role of external state and non-state actors in creating challenges to internal security."],
        },
        {
          title: "Communication Networks & Cyber Security",
          points: [
            "Challenges to internal security through communication networks, role of media and social networking sites in internal security challenges.",
            "Basics of cyber security; money-laundering and its prevention.",
          ],
        },
        {
          title: "Border Management & Organised Crime",
          points: ["Security challenges and their management in border areas – linkages of organised crime with terrorism."],
        },
        { title: "Security Forces & Agencies", points: ["Various security forces and agencies and their mandate."] },
      ],
    },
    {
      id: "mains-gs4",
      title: "Paper V: General Studies IV",
      facts: ["250 marks", "3 hours"],
      description: "Ethics, Integrity and Aptitude. Includes case studies on all of the units below.",
      units: [
        {
          title: "Ethics and Human Interface",
          points: [
            "Essence, determinants and consequences of ethics in human actions; dimensions of ethics; ethics in private and public relationships.",
            "Human values – lessons from the lives and teachings of great leaders, reformers and administrators; role of family, society and educational institutions in inculcating values.",
          ],
        },
        {
          title: "Attitude",
          points: [
            "Content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion.",
          ],
        },
        {
          title: "Aptitude & Foundational Values for Civil Service",
          points: [
            "Integrity, impartiality and non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker sections.",
          ],
        },
        {
          title: "Emotional Intelligence",
          points: ["Concepts, and their utilities and application in administration and governance."],
        },
        { title: "Moral Thinkers & Philosophers", points: ["Contributions of moral thinkers and philosophers from India and the world."] },
        {
          title: "Public Service Values & Ethics in Public Administration",
          points: [
            "Status and problems; ethical concerns and dilemmas in government and private institutions; laws, rules, regulations and conscience as sources of ethical guidance.",
            "Accountability and ethical governance; strengthening of ethical and moral values in governance; ethical issues in international relations and funding; corporate governance.",
          ],
        },
        {
          title: "Probity in Governance",
          points: [
            "Concept of public service; philosophical basis of governance and probity.",
            "Information sharing and transparency in government, Right to Information, Codes of Ethics, Codes of Conduct, Citizen's Charters, work culture, quality of service delivery, utilisation of public funds, challenges of corruption.",
          ],
          covers: [
            {
              subject: "Polity",
              topics: ["Governance"],
              subtopics: ["Right to Information", "Citizen's Charter, Social Audit & Service Delivery"],
            },
          ],
        },
        { title: "Case Studies", points: ["Case studies on the above issues."] },
      ],
    },
  ],
};
