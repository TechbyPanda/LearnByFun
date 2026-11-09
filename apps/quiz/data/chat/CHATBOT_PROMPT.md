# Prompt for ChatGPT / Gemini / NotebookLM

Copy everything inside the box below, change the four lines at the top, and paste it into the chatbot.
When it answers, use the chatbot's **"Copy code"** button on the code block (don't select the text by hand),
paste it into a new file here named `<id>.json` (the `id` from its answer), and refresh the app.

**LEVEL** goes from 1 (complete beginner) to 10 (harder than real UPSC). Rough guide:

| Level | Who it's for | What the questions look like |
|---|---|---|
| 1–3 | Just starting, NCERT stage | Direct one-fact questions. Wrong options get closer to the right one as the level goes up. |
| 4–5 | Knows the basics | "Consider the following statements" with 2 statements. Level 5 adds small traps. |
| 6–7 | Has read the standard books | 3 statements, matching pairs, trap words like "only" or "all", numbers that are close. |
| 8 | Ready for real Prelims | Actual UPSC Prelims level: "How many of the above", Statement-I / Statement-II. |
| 9–10 | Aiming for top scores | Hard Prelims questions that join two topics or link news to static topics. Guessing by elimination doesn't work. |

Each paper gets a `level-N` tag, so you can filter by level in the app.

````text
TOPIC: Parliament – Parliamentary Committees
NUMBER OF QUESTIONS: 10
LEVEL: 4   (1 = easiest, 10 = harder than UPSC; see the LEVEL RUBRIC below)
SOURCE TAG: none   (or e.g. pyq-2026 for previous year questions, mock for a mock test)

You are a UPSC Prelims question setter who writes questions at a fixed difficulty. Create a practice paper on the TOPIC above with the given NUMBER OF QUESTIONS. EVERY question must match the LEVEL above exactly, as defined in the LEVEL RUBRIC. Not easier, not harder, no mixing of levels.

OUTPUT RULES (very important, the output is loaded directly by an app):
- Reply with ONE fenced code block marked ```json and nothing else: no intro, no notes after it.
- It must be valid JSON that JSON.parse accepts. No comments, no trailing commas.
- Do NOT escape characters Markdown-style. Never write \. or \- or \* or \\n. The only escapes allowed are \n (a line break inside a string) and \" (a double quote inside a string). Prefer single quotes inside text.
- No source citations or reference markers like [1] or [2, 3] anywhere.

FORMAT:
{
  "id": "polity-committees-financial-control-level-4",
  "name": "Polity – Committees & Financial Control (Level 4)",
  "tags": ["polity", "level-4"],
  "subtags": ["parliament", "committees", "financial-control"],
  "questions": [
    {
      "question": "Consider the following statements:\n1. First statement.\n2. Second statement.\nWhich of the statements given above is/are correct?",
      "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
      "answer": 0,
      "explanation": "Statement 1 is correct: ... Statement 2 is incorrect: ..."
    }
  ]
}

FIELD RULES:
- "name": a specific, descriptive title naming the exact sub-themes the questions actually cover, in the form "<Subject> – <Theme> & <Theme> (Level N)" (for example "Polity – Fundamental Rights & Writs (Level 6)"). Never a generic name like "Paper 1" or "Parliament Quiz".
- "id": the name in lowercase with words joined by hyphens, letters, digits and hyphens only (for example "polity-fundamental-rights-writs-level-6").
- All tags and subtags are lowercase, words joined by hyphens.
- "tags" (main tags): first the subject, exactly one of: polity, economy, history, geography, environment, science-tech, art-culture, international-relations, current-affairs. Then "level-N" (for example "level-6"). Then add SOURCE TAG if it is not "none".
- "subtags": 2 to 5 topics the questions cover: the topic first (for example "parliament"), then key sub-themes (for example "money-bills", "committees").
- "options": exactly 4 strings.
- "answer": the index of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth.

LEVEL RUBRIC (each level has fixed rules for question format, how deep the fact goes, how close the wrong options are, and how many thinking steps are needed. Follow the rules for the chosen LEVEL exactly):

LEVEL 1 – Foundation
- Format: direct one-line questions only. No statement questions.
- Facts: the most basic, well-known facts from NCERT Class 6-8 (who, what, which).
- Wrong options: clearly wrong. Same type of answer (all persons, all bodies), but none of them can easily be confused with the right answer.
- Thinking: 1 step, plain recall.
- Example: "Who presides over the joint sitting of both Houses of Parliament?" Options: Speaker of Lok Sabha / Prime Minister / Chief Justice of India / President

LEVEL 2 – Basic recall
- Format: direct questions only.
- Facts: core NCERT Class 9-10 facts and well-known Article numbers or terms.
- Wrong options: same type of answer, a little closer, but a student who read the chapter once rejects them easily.
- Thinking: 1 step.
- Example: "Which House of Parliament can be dissolved?" Options: Lok Sabha / Rajya Sabha / Both / Neither

LEVEL 3 – Solid recall
- Format: direct questions, plus up to 30% "Which one of the following pairs is correctly matched?" (4 pairs, 1 correct).
- Facts: NCERT Class 11-12 and the basic chapters of a standard book (for example Laxmikanth). Exact numbers, Articles and terms.
- Wrong options: real confusions (neighbouring Articles, a related body, a close number).
- Thinking: 1 step, but the recall must be exact.
- Example: "The maximum gap allowed between two sessions of Parliament is:" Options: 3 months / 6 months / 9 months / 1 year

LEVEL 4 – Introduction to statements
- Format: about 60% "Consider the following statements" with exactly 2 statements, 40% direct questions.
- Facts: standard-book facts. Each statement is one plain fact.
- Wrong statements: changed in one obvious way (wrong body, wrong number, opposite claim).
- Thinking: 2 steps (check each statement on its own).
- Options for statement questions: "1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2".

LEVEL 5 – Statements with small traps
- Format: about 70% 2-statement questions, 30% direct or matching-pair questions.
- Facts: standard-book facts, including the details students usually skip (who appoints, who removes, the exact time limit).
- Wrong statements: change ONE small detail (President vs Parliament, 'may' vs 'shall', 14 days vs 30 days). The statement must still sound believable.
- Thinking: 2 steps, careful reading needed.

LEVEL 6 – Three statements
- Format: about 70% "Consider the following statements" with 3 statements (options such as "1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"), 30% matching pairs or direct questions.
- Facts: the whole standard book, including exceptions and special provisions.
- Wrong statements: one small detail changed. At least one question per 5 has an exception-based statement (for example "a Money Bill can be introduced in either House").
- Thinking: 3 steps. The options must be built so that knowing just 1 statement is not enough to find the answer.

LEVEL 7 – Trap level
- Format: 3-statement questions, plus "Consider the following pairs" (3 pairs) with "Which of the pairs given above is/are correctly matched?"
- Facts: standard book plus key Acts, landmark cases, committees and reports.
- Wrong statements: use the traps UPSC loves: absolute words ('only', 'all', 'always', 'exclusively'), close numbers, Articles next to each other, two bodies with similar names. Some statements must be TRUE even though they contain 'only' or 'all', so the student can't just reject every extreme word.
- Thinking: 3 steps, and each statement needs exact knowledge.

LEVEL 8 – Real UPSC Prelims (easy to moderate questions)
- Format: copy the current UPSC Prelims pattern. Mix: (a) "How many of the above statements are correct?" with 3 statements, options "Only one", "Only two", "All three", "None"; (b) "Consider the following pairs ... How many of the pairs given above are correctly matched?" with options "Only one pair", "Only two pairs", "All three pairs", "None of the pairs"; (c) "Statement-I / Statement-II" questions with the 4 standard UPSC options (both correct and II explains I / both correct and II does not explain I / I correct, II incorrect / I incorrect, II correct); (d) a few direct questions.
- Facts: standard books plus the matching current affairs.
- Wrong statements: as in Level 7. In "How many" questions every statement must be checked, because elimination doesn't help.
- Thinking: 3+ steps.

LEVEL 9 – Hard UPSC Prelims
- Format: same as Level 8, but use "How many" and Statement-I/II for at least 70% of questions. Up to 4 statements allowed (options "Only one", "Only two", "Only three", "All four").
- Facts: lesser-known but verifiable details: specific amendments, report recommendations, constitutional bodies vs statutory bodies, the year something was set up, international bodies and reports linked to India.
- Wrong statements: very close to true. Each one differs from the truth by a single precise detail that only a student who has truly mastered the topic would notice.
- Thinking: 4 steps. At least 30% of questions connect two sub-topics (for example a committee and the Article it comes from).

LEVEL 10 – Beyond UPSC (topper level)
- Format: same as Level 9, with mostly 4-statement "How many" and Statement-I/II questions.
- Facts: joining several areas: static topics linked to recent news, the reasoning behind provisions, comparisons (India vs other countries, old law vs new law), conceptual questions where memory alone isn't enough.
- Wrong statements: true in one context but false in the one asked about, or half-true. Each must still be clearly wrong when checked against an official source.
- Thinking: 4+ steps. Every question needs understanding, not just recall. Still only use facts you are certain of: hard means deep, never obscure guesswork or opinion.

CONTENT RULES (all levels):
- The LEVEL RUBRIC decides the question formats. Ignore any other format mix.
- Spread the correct answers evenly across 0, 1, 2 and 3. For statement questions, "Both" / "All" and "Neither" / "None" must also be correct sometimes.
- Every explanation says why the correct answer is right AND why each wrong statement or option is wrong, citing the Article, Act, case or report where relevant. From Level 6 up, also name the trap (for example "Trap: it is the Speaker, not the Chairman").
- Only use facts you are certain of. If you're unsure of a fact, write a different question.

SELF-CHECK (do this silently before answering, don't print it):
For each question ask: Does its format match the LEVEL? Is the fact at the right depth? Are the wrong options as close as the LEVEL requires, no closer and no further? Would a student one level below find it hard but fair, and a student one level above find it easy? Rewrite any question that fails.
````
