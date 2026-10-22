import { polityChapter } from "./syllabus";

// Laxmikanth — Centre–State Relations (Part XI).
export const centreStateRelationsQuestions = polityChapter("Centre–State Relations", [
  // ---- Legislative Relations ----
  {
    id: "polity-008",
    subtopic: "Legislative Relations",
    question: "Which Schedule of the Constitution deals with the division of powers between the Union and the States?",
    options: [
      "Fifth Schedule",
      "Sixth Schedule",
      "Seventh Schedule",
      "Eighth Schedule",
    ],
    correctOptionId: "c",
    explanation: "The Seventh Schedule contains the Union List, State List, and Concurrent List, distributing legislative powers between the Centre and States.",
  },
  {
    id: "polity-013",
    subtopic: "Legislative Relations",
    question: "In State of Rajasthan v. G. Chawla (1959), the Supreme Court upheld a state law banning loudspeakers at night, even though it incidentally touched 'communication' (a Union List subject). Which doctrine did the Court apply?",
    options: [
      "Doctrine of Colourable Legislation",
      "Doctrine of Pith and Substance",
      "Doctrine of Repugnancy",
      "Doctrine of Severability",
    ],
    correctOptionId: "b",
    explanation: "Under the Doctrine of Pith and Substance, courts examine the true nature and real object of a law. Since its core was public health (State List), the incidental encroachment on communication (Union List) did not affect its validity.",
  },
  {
    id: "polity-014",
    subtopic: "Legislative Relations",
    question: "Residuary powers (subjects not enumerated in any of the three lists of the Seventh Schedule) vest with:",
    options: [
      "The States, as in the USA",
      "The Union",
      "Union and States concurrently",
      "The President, on the advice of the Finance Commission",
    ],
    correctOptionId: "b",
    explanation: "Article 248 vests residuary powers in Parliament. This is opposite to the US model, where residuary power lies with the states, and is cited as a key unitary-bias feature of the Indian Constitution.",
  },
  {
    id: "polity-015",
    subtopic: "Legislative Relations",
    question: "Under which Article can the Rajya Sabha, by a resolution supported by a two-thirds majority of members present and voting, empower Parliament to legislate on a State List subject in the national interest?",
    options: [
      "Article 248",
      "Article 249",
      "Article 252",
      "Article 356",
    ],
    correctOptionId: "b",
    explanation: "Article 249 allows such a resolution, valid for one year and renewable indefinitely through repeated Rajya Sabha resolutions.",
  },
  {
    id: "polity-016",
    subtopic: "Legislative Relations",
    question: "A law made by Parliament on a State List subject during a National Emergency (Article 250) continues in force after the Emergency is revoked for:",
    options: [
      "It lapses immediately",
      "6 months",
      "1 year, renewable",
      "Indefinitely, until repealed by the state legislature",
    ],
    correctOptionId: "b",
    explanation: "Under Article 250, such a law continues to be effective for 6 months after the Emergency ceases to operate, after which it lapses. This is distinct from Article 249's 1-year renewable validity.",
  },
  {
    id: "polity-017",
    subtopic: "Legislative Relations",
    question: "If two states pass resolutions requesting Parliament to legislate on a matter in the State List under Article 252, a law so made:",
    options: [
      "Applies automatically to all states",
      "Applies only to the requesting states",
      "Applies only during President's Rule",
      "Requires ratification by half the states to take effect",
    ],
    correctOptionId: "b",
    explanation: "A law made under Article 252 applies only to the states that requested it. Other states wanting uniform legislation must separately enact identical laws of their own.",
  },
  {
    id: "polity-018",
    subtopic: "Legislative Relations",
    question: "The 2020 farm laws, despite touching State List subjects like agriculture and intrastate trade, were held to be within Parliament's legislative competence primarily because of:",
    options: [
      "A National Emergency in force at the time",
      "Entry 33 of the Concurrent List, made permanent by the Constitution (Third Amendment) Act, 1954",
      "A Rajya Sabha resolution under Article 249",
      "Consent of all state legislatures under Article 252",
    ],
    correctOptionId: "b",
    explanation: "Entry 33 (List III) lets Parliament legislate on trade/commerce/production of industries declared to be in the 'public interest.' Originally a temporary 5-year provision meant to lapse in 1955, it was made permanent by the 1954 Third Amendment, giving Parliament competence to enact the farm laws (later repealed in 2021 for lack of consultation, not unconstitutionality).",
  },
  {
    id: "polity-019",
    subtopic: "Legislative Relations",
    question: "In case of a conflict between a Central law and a State law on a Concurrent List subject, the Central law prevails EXCEPT when:",
    options: [
      "The state law was enacted first",
      "The state law has received the President's assent",
      "The subject also appears in the State List",
      "The Rajya Sabha objects to the Central law",
    ],
    correctOptionId: "b",
    explanation: "Under Article 254, if a state law on a Concurrent List subject has received the President's assent, it prevails in that state, until Parliament legislates again on the same matter.",
  },
  // ---- Administrative Relations ----
  {
    id: "polity-020",
    subtopic: "Administrative Relations",
    question: "Which Article, added by the 7th Constitutional Amendment, allows a state to entrust some of its executive functions to the Union, subject to the Union's consent?",
    options: [
      "Article 256",
      "Article 258",
      "Article 258A",
      "Article 263",
    ],
    correctOptionId: "c",
    explanation: "Article 258A permits state-to-Union delegation, but only with the Union's consent. This is asymmetric with Article 258, under which Parliament can, by ordinary law, forcibly delegate Union functions onto unwilling states — there is no equivalent forcing mechanism the other way.",
  },
]);
