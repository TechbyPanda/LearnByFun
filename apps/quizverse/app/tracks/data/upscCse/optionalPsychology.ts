import type { TrackStage } from "../types";

// UPSC CSE Mains optional subject: Psychology (Papers VI and VII), as notified by UPSC.
// To change optional, add another file like this one and swap it in upscCse/index.ts.
// No Psychology content exists yet; once "Psychology" is added to the Subject list
// in app/lib/subject.ts, give units `covers` so the dashboard counts their content.
export const upscOptionalPsychology: TrackStage = {
  id: "optional-psychology",
  title: "Optional: Psychology",
  description: "Mains Papers VI and VII. Your optional subject counts for 500 of the 1,750 Mains merit marks.",
  modules: [
    {
      id: "psychology-paper-1",
      title: "Paper I: Foundations of Psychology",
      facts: ["250 marks", "3 hours"],
      units: [
        {
          title: "Introduction",
          points: [
            "Definition of Psychology; historical antecedents of Psychology and trends in the 21st century.",
            "Psychology and scientific methods; Psychology in relation to other social sciences and natural sciences.",
            "Application of Psychology to societal problems.",
          ],
        },
        {
          title: "Methods of Psychology",
          points: [
            "Types of research: descriptive, evaluative, diagnostic and prognostic.",
            "Methods of research: survey, observation, case-study and experiments.",
            "Characteristics of experimental, non-experimental and quasi-experimental designs.",
            "Focussed group discussions, brainstorming, grounded theory approach.",
          ],
        },
        {
          title: "Research Methods",
          points: [
            "Major steps in psychological research: problem statement, hypothesis formulation, research design, sampling, tools of data collection, analysis and interpretation, and report writing.",
            "Fundamental versus applied research; methods of data collection (interview, observation, questionnaire).",
            "Research designs (ex-post facto and experimental).",
            "Statistical techniques: t-test, two-way ANOVA, correlation, regression and factor analysis; Item Response Theory.",
          ],
        },
        {
          title: "Development of Human Behaviour",
          points: [
            "Growth and development; principles of development.",
            "Role of genetic and environmental factors in determining human behaviour; influence of cultural factors in socialisation.",
            "Life span development – characteristics, development tasks, promoting psychological well-being across major stages of the life span.",
          ],
        },
        {
          title: "Sensation, Attention and Perception",
          points: [
            "Sensation: concepts of threshold, absolute and difference thresholds, signal detection and vigilance.",
            "Factors influencing attention, including set and characteristics of the stimulus.",
            "Definition and concept of perception; biological factors in perception.",
            "Perceptual organisation – influence of past experiences, perceptual defence; factors influencing space and depth perception, size estimation and perceptual readiness.",
            "Plasticity of perception; extrasensory perception; culture and perception; subliminal perception.",
          ],
        },
        {
          title: "Learning",
          points: [
            "Concept and theories of learning (Behaviourists, Gestaltalist and information processing models).",
            "Processes of extinction, discrimination and generalisation.",
            "Programmed learning, probability learning, self-instructional learning.",
            "Concepts, types and schedules of reinforcement; escape, avoidance and punishment; modelling and social learning.",
          ],
        },
        {
          title: "Memory",
          points: [
            "Encoding and remembering; short-term, long-term, sensory, iconic and echoic memory.",
            "The multistore model, levels of processing, organisation and mnemonic techniques to improve memory.",
            "Theories of forgetting: decay, interference and retrieval failure; metamemory.",
            "Amnesia: anterograde and retrograde.",
          ],
        },
        {
          title: "Thinking and Problem Solving",
          points: [
            "Piaget's theory of cognitive development; concept formation processes; information processing.",
            "Reasoning and problem solving; facilitating and hindering factors; methods of problem solving.",
            "Creative thinking and fostering creativity; factors influencing decision making and judgement; recent trends.",
          ],
        },
        {
          title: "Motivation and Emotion",
          points: [
            "Psychological and physiological basis of motivation and emotion; measurement of motivation and emotion.",
            "Effects of motivation and emotion on behaviour; extrinsic and intrinsic motivation; factors influencing intrinsic motivation.",
            "Emotional competence and related issues.",
          ],
        },
        {
          title: "Intelligence and Aptitude",
          points: [
            "Concept of intelligence and aptitude; nature and theories of intelligence – Spearman, Thurstone, Guilford, Vernon, Sternberg and J.P. Das.",
            "Emotional intelligence, social intelligence; measurement of intelligence and aptitudes.",
            "Concept of IQ, deviation IQ, constancy of IQ; measurement of multiple intelligence; fluid and crystallised intelligence.",
          ],
        },
        {
          title: "Personality",
          points: [
            "Definition and concept of personality.",
            "Theories of personality: psychoanalytical, socio-cultural, interpersonal, developmental, humanistic, behaviouristic, trait and type approaches.",
            "Measurement of personality (projective tests, pencil-paper tests); the Indian approach to personality.",
            "Training for personality development; latest approaches like the Big 5-factor theory; the notion of self in different traditions.",
          ],
        },
        {
          title: "Attitudes, Values and Interests",
          points: [
            "Definition of attitudes, values and interests; components of attitudes; formation and maintenance of attitudes.",
            "Measurement of attitudes, values and interests; theories of attitude change; strategies for fostering values.",
            "Formation of stereotypes and prejudices; changing others' behaviour; theories of attribution; recent trends.",
          ],
        },
        {
          title: "Language and Communication",
          points: [
            "Human language – properties, structure and linguistic hierarchy.",
            "Language acquisition – predisposition, critical period hypothesis; theories of language development – Skinner and Chomsky.",
            "Process and types of communication – effective communication training.",
          ],
        },
        {
          title: "Issues and Perspectives in Modern Contemporary Psychology",
          points: [
            "Computer application in the psychological laboratory and psychological testing; artificial intelligence; psychocybernetics.",
            "Study of consciousness – sleep-wake schedules, dreams, stimulus deprivation, meditation, hypnotic/drug-induced states.",
            "Extrasensory perception; intersensory perception; simulation studies.",
          ],
        },
      ],
    },
    {
      id: "psychology-paper-2",
      title: "Paper II: Psychology – Issues and Applications",
      facts: ["250 marks", "3 hours"],
      units: [
        {
          title: "Psychological Measurement of Individual Differences",
          points: [
            "The nature of individual differences; characteristics and construction of standardised psychological tests.",
            "Types of psychological tests; use, misuse and limitations of psychological tests; ethical issues in their use.",
          ],
        },
        {
          title: "Psychological Well-being and Mental Disorders",
          points: [
            "Concept of health and ill-health; positive health, well-being.",
            "Causal factors in mental disorders: anxiety disorders, mood disorders, schizophrenia and delusional disorders, personality disorders, substance abuse disorders.",
            "Factors influencing positive health, well-being, lifestyle and quality of life; happiness disposition.",
          ],
        },
        {
          title: "Therapeutic Approaches",
          points: [
            "Psychodynamic therapies; behaviour therapies; client-centred therapy; cognitive therapies.",
            "Indigenous therapies (Yoga, Meditation); bio-feedback therapy.",
            "Prevention and rehabilitation of the mentally ill; fostering mental health.",
          ],
        },
        {
          title: "Work Psychology and Organisational Behaviour",
          points: [
            "Personnel selection and training; use of psychological tests in industry; training and human resource development.",
            "Theories of work motivation – Herzberg, Maslow, Adams' equity theory, Porter and Lawler, Vroom.",
            "Leadership and participatory management; advertising and marketing; stress and its management; ergonomics; consumer psychology.",
            "Managerial effectiveness; transformational leadership; sensitivity training; power and politics in organisations.",
          ],
        },
        {
          title: "Application of Psychology to the Educational Field",
          points: [
            "Psychological principles underlying an effective teaching-learning process; learning styles.",
            "Gifted, retarded and learning-disabled students and their training; training for improving memory and better academic achievement.",
            "Personality development and value education; educational and vocational guidance and career counselling.",
            "Use of psychological tests in educational institutions; effective strategies in guidance programmes.",
          ],
        },
        {
          title: "Community Psychology",
          points: [
            "Definition and concept of community psychology; use of small groups in social action.",
            "Arousing community consciousness and action for handling social problems.",
            "Group decision making and leadership for social change; effective strategies for social change.",
          ],
        },
        {
          title: "Rehabilitation Psychology",
          points: [
            "Primary, secondary and tertiary prevention programmes – the role of psychologists.",
            "Organising services for rehabilitation of physically, mentally and socially challenged persons, including old persons.",
            "Rehabilitation of persons suffering from substance abuse, juvenile delinquency, criminal behaviour; of victims of violence; of HIV/AIDS victims.",
            "The role of social agencies.",
          ],
        },
        {
          title: "Application of Psychology to Disadvantaged Groups",
          points: [
            "The concepts of disadvantage and deprivation.",
            "Social, physical, cultural and economic consequences for disadvantaged and deprived groups.",
            "Educating and motivating the disadvantaged towards development; relative and prolonged deprivation.",
          ],
        },
        {
          title: "Psychological Problems of Social Integration",
          points: [
            "The concept of social integration; the problem of caste, class, religion and language conflicts and prejudice.",
            "Nature and manifestation of prejudice between the in-group and out-group; causal factors of such conflicts and prejudices.",
            "Psychological strategies for handling the conflicts and prejudices; measures to achieve social integration.",
          ],
        },
        {
          title: "Application of Psychology in Information Technology and Mass Media",
          points: [
            "The present scenario of information technology and the mass media boom, and the role of psychologists.",
            "Selection and training of psychology professionals to work in IT and mass media; distance learning through IT and mass media.",
            "Entrepreneurship through e-commerce; multilevel marketing; impact of TV and fostering values through IT and mass media.",
            "Psychological consequences of recent developments in information technology.",
          ],
        },
        {
          title: "Psychology and Economic Development",
          points: [
            "Achievement motivation and economic development; characteristics of entrepreneurial behaviour.",
            "Motivating and training people for entrepreneurship and economic development.",
            "Consumer rights and consumer awareness; government policies for promoting entrepreneurship among youth, including women entrepreneurs.",
          ],
        },
        {
          title: "Application of Psychology to Environment and Related Fields",
          points: [
            "Environmental psychology – effects of noise, pollution and crowding.",
            "Population psychology: psychological consequences of population explosion and high population density; motivating for the small family norm.",
            "Impact of rapid scientific and technological growth on degradation of the environment.",
          ],
        },
        {
          title: "Application of Psychology in Other Fields",
          points: [
            "Military psychology: psychological tests for selection, training and counselling of defence personnel; psychologists promoting positive health among them; human engineering in defence.",
            "Sports psychology: psychological interventions for improving the performance of athletes and people engaged in sports.",
            "Media influences on pro- and anti-social behaviour.",
            "Psychology of terrorism.",
          ],
        },
        {
          title: "Psychology of Gender",
          points: [
            "Issues of discrimination; management of diversity.",
            "Glass ceiling effect; self-fulfilling prophecy; women and Indian society.",
          ],
        },
      ],
    },
  ],
};
