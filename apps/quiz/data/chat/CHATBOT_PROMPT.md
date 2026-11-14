# Prompt for ChatGPT / Gemini / Claude / NotebookLM

## How to use
1. Copy everything inside the box below and change the six lines at the top.
2. Paste it into the chatbot. Use its thinking / reasoning mode if it has one: the questions come out noticeably better.
3. Use the chatbot's **"Copy code"** button on the answer (don't select the text by hand).
4. Save it as `apps/quiz/data/papers/<id>.json` (the `id` is in the answer) and refresh the app.

**Next papers in the same chat:** don't paste the prompt again. Send only the lines that change, for example:

```text
Next paper. Same rules. TOPIC: Rivers & Drainage of India, LEVEL: 8
```

**Tips**
- Ask for 10–15 questions at a time. Longer papers get cut off or get careless near the end.
- To add a level to a topic that is already on the topic map, type the TOPIC exactly as the map shows it (for example `Rivers & Drainage of India`). The app joins papers into one topic when their names differ only in the level.
- For a second paper on the same topic and level, change the TOPIC a little (for example `Rivers & Drainage of India II`), or the file name will clash.
- For current-affairs questions (Level 8+), turn on web search. In NotebookLM, upload your notes or book chapter first and write `FOCUS: use only the uploaded sources`.

**Which level?** Level 8 is the real exam. A good ladder for one topic is 2 → 5 → 8.

| Level | Who it's for | What the questions look like |
|---|---|---|
| 1–3 | Just starting, NCERT stage | Direct one-fact questions. Wrong options get closer to the right one as the level goes up. |
| 4–5 | Knows the basics | "Consider the following statements" with 2 statements. Level 5 adds small traps. |
| 6–7 | Has read the standard books | 3 statements, matching pairs, trap words like "only" or "all", numbers that are close. |
| **8** | **Ready for real Prelims** | **Actual UPSC Prelims paper: "How many of the above", "How many pairs", Statement-I / Statement-II.** |
| 9–10 | Aiming for top scores | The hardest third of a real paper and beyond: joins two topics, links news to static topics, elimination doesn't work. |

## The prompt

````text
SUBJECT: geography   (one of: polity, economy, history, geography, environment, science-tech, art-culture, international-relations, current-affairs)
TOPIC: Rivers & Drainage of India
LEVEL: 8   (1 = easiest, 8 = real UPSC Prelims, 10 = harder than UPSC; see the LEVEL RUBRIC)
NUMBER OF QUESTIONS: 10
FOCUS: none   (optional: sub-themes, a chapter, or "use only the uploaded sources")
SOURCE TAG: none   (or e.g. pyq-2026 for previous year questions, mock for a mock test)

You are a senior UPSC Civil Services Prelims (GS Paper I) question setter. Write a practice paper on the TOPIC above with exactly the NUMBER OF QUESTIONS asked for. EVERY question must match the LEVEL above exactly, as defined in the LEVEL RUBRIC: not easier, not harder, no mixing of levels. If FOCUS is not "none", stay inside it.

OUTPUT RULES (very important, the output is loaded directly by an app):
- Reply with ONE fenced code block marked ```json and nothing else: no intro, no notes after it, no questions back to me.
- It must be valid JSON that JSON.parse accepts. No comments, no trailing commas, straight double quotes (") only around keys and strings.
- Do NOT escape characters Markdown-style. Never write \. or \- or \* or \\n. The only escapes allowed are \n (a line break inside a string) and \" (a double quote inside a string). Prefer single quotes inside text.
- No source citations, links or reference markers like [1] or [2, 3] anywhere.
- No letters or numbers in front of options ("(a)", "A.", "1)"). The app adds them.

FORMAT:
{
  "id": "geography-rivers-drainage-of-india-level-8",
  "name": "Geography – Rivers & Drainage of India (Level 8)",
  "tags": ["geography", "level-8"],
  "subtags": ["indian-drainage", "himalayan-rivers", "peninsular-rivers"],
  "questions": [
    {
      "question": "Consider the following statements:\n1. First statement.\n2. Second statement.\n3. Third statement.\nHow many of the statements given above are correct?",
      "options": ["Only one", "Only two", "All three", "None"],
      "answer": 1,
      "explanation": "Statement 1 is correct: ...\nStatement 2 is incorrect: ... (Trap: ...)\nStatement 3 is correct: ...\nSo only two statements are correct."
    }
  ]
}

FIELD RULES:
- "name": exactly "<Subject> – <TOPIC> (Level N)". <Subject> is SUBJECT with capital first letters and spaces instead of hyphens (science-tech becomes "Science Tech"). <TOPIC> is the TOPIC line copied word for word: do not reword, shorten or extend it. Use the en dash "–" after the subject.
- "id": the name in lowercase, with every run of characters that are not letters or digits replaced by one hyphen, and no hyphen at the start or end. Example: "Geography – Rivers & Drainage of India (Level 8)" gives "geography-rivers-drainage-of-india-level-8".
- "tags": first SUBJECT exactly as given, then "level-N" (for example "level-8"), then SOURCE TAG if it is not "none". Nothing else.
- "subtags": 2 to 5 topics the questions actually cover, lowercase, words joined by hyphens: the main topic first, then key sub-themes.
- "options": exactly 4 different strings.
- "answer": the index of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth.
- "explanation": see CONTENT RULES.

STANDARD WORDINGS (use these exact stems and options whenever the LEVEL RUBRIC names the format):
- 2 statements: "...Which of the statements given above is/are correct?" Options: "1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2".
- 3 statements, which ones: "...Which of the statements given above is/are correct?" Options are four different combinations, such as "1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3" (also use "1 only", "2 only", "3 only" in some questions).
- How many statements: "...How many of the statements given above are correct?" Options: "Only one", "Only two", "All three", "None" (with 4 statements: "Only one", "Only two", "Only three", "All four").
- How many pairs: "Consider the following pairs:\n1. X – Y\n2. X – Y\n3. X – Y\nHow many of the pairs given above are correctly matched?" Options: "Only one pair", "Only two pairs", "All three pairs", "None of the pairs". State what the two sides are, in a first line such as "River – Tributary".
- Statement-I / Statement-II: "Consider the following statements:\nStatement-I: ...\nStatement-II: ...\nWhich one of the following is correct in respect of the above statements?" Options, in this order: "Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I", "Both Statement-I and Statement-II are correct and Statement-II is not the correct explanation for Statement-I", "Statement-I is correct but Statement-II is incorrect", "Statement-I is incorrect but Statement-II is correct".
- Pick from a list: "Which of the following ... ?\n1. ...\n2. ...\n3. ...\n4. ...\nSelect the correct answer using the code given below." Options are four combinations such as "1, 2 and 3 only", "2 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4".
- Sequence: "Arrange the following from north to south / west to east / earliest to latest: ..." Options are four orders such as "2-1-3-4".

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
- Format: about 60% 2-statement questions, 40% direct questions.
- Facts: standard-book facts. Each statement is one plain fact.
- Wrong statements: changed in one obvious way (wrong body, wrong number, opposite claim).
- Thinking: 2 steps (check each statement on its own).

LEVEL 5 – Statements with small traps
- Format: about 70% 2-statement questions, 30% direct or matching-pair questions.
- Facts: standard-book facts, including the details students usually skip (who appoints, who removes, the exact time limit, which bank of the river).
- Wrong statements: change ONE small detail (President vs Parliament, 'may' vs 'shall', 14 days vs 30 days). The statement must still sound believable.
- Thinking: 2 steps, careful reading needed.

LEVEL 6 – Three statements
- Format: about 70% 3-statement "which ones" questions, 30% pick-from-a-list, matching pairs or direct questions.
- Facts: the whole standard book, including exceptions and special provisions.
- Wrong statements: one small detail changed. At least one question per 5 has an exception-based statement (for example "a Money Bill can be introduced in either House").
- Thinking: 3 steps. Build the options so that knowing just 1 statement is not enough to find the answer.

LEVEL 7 – Trap level (the easier half of a real paper)
- Format: 3-statement "which ones" questions, pick-from-a-list, sequence questions, and up to 30% "How many" questions.
- Facts: standard book plus key Acts, landmark cases, committees, reports, and for geography and environment, exact locations.
- Wrong statements: use the traps UPSC loves: absolute words ('only', 'all', 'always', 'exclusively'), close numbers, Articles next to each other, two bodies or places with similar names, a true fact attached to the wrong subject. Some statements must be TRUE even though they contain 'only' or 'all', so the student can't just reject every extreme word.
- Thinking: 3 steps, and each statement needs exact knowledge.

LEVEL 8 – Real UPSC Prelims
- Target: these questions could be placed in this year's actual Prelims paper without standing out. Copy the current pattern (2023 onwards).
- Format mix: about 40% "How many statements", about 20% "How many pairs", about 20% Statement-I / Statement-II, about 20% pick-from-a-list, sequence or direct conceptual questions. Follow UPSC STYLE below.
- Facts: standard books plus the current affairs that touch the topic (places, species, schemes, technologies, reports and bodies that were in the news in the last two years).
- Wrong statements: as in Level 7. In "How many" questions every statement has to be judged, so make each one a separate, checkable claim.
- Thinking: 3+ steps. Most questions need understanding of why or where, not only what.

LEVEL 9 – Hard UPSC Prelims (the toughest third of a real paper)
- Format: as Level 8, but at least 70% "How many" (statements or pairs) and Statement-I / Statement-II. Up to 4 statements or 4 pairs allowed.
- Facts: lesser-known but verifiable details: specific amendments, report recommendations, constitutional vs statutory bodies, the year something was set up, tributaries and their banks, international bodies and reports linked to India.
- Wrong statements: very close to true. Each one differs from the truth by a single precise detail that only a student who has truly mastered the topic would notice.
- Thinking: 4 steps. At least 30% of questions connect two sub-topics or two subjects (for example a river and the protected area it flows through, a committee and the Article it comes from).

LEVEL 10 – Beyond UPSC (topper level)
- Format: as Level 9, with mostly 4-statement "How many" and Statement-I / Statement-II questions.
- Facts: joining several areas: static topics linked to recent news, the reasoning behind provisions, comparisons (India vs other countries, old law vs new law), conceptual questions where memory alone isn't enough.
- Wrong statements: true in one context but false in the one asked about, or half-true. Each must still be clearly wrong when checked against an official source.
- Thinking: 4+ steps. Every question needs understanding, not just recall. Hard means deep, never obscure trivia or opinion.

UPSC STYLE (applies from Level 6 up, fully from Level 8):
- Open like UPSC does: "With reference to ..., consider the following statements:", "Consider the following pairs:", "Which of the following is/are ...?", "In the context of ..., what is ...?".
- Test understanding and application: causes and effects, why a provision exists, what follows from a principle, where something is located relative to something else. Avoid pure definition questions.
- One question, several sub-themes: let the statements of one question come from different parts of the topic, so that one remembered line is not enough.
- Statements are short (one line, one claim each), formal and neutral. No hints in the grammar, no jokes, no "all of the above" or "none of the above" as an option outside the standard wordings.
- Statement-I / Statement-II must have a real cause-and-effect link to judge. Use all four outcomes across the paper.
- Subject habits to copy:
  - geography: map knowledge (which states or countries a river, range or line passes through; north-south and west-east order; what lies on which bank or coast), processes and their effects, resources and where they occur.
  - polity: the exact Article or Schedule, who holds a power and its limits, exceptions, Supreme Court judgments, constitutional vs statutory vs executive bodies.
  - economy: concepts and what happens when a variable changes, who regulates what, terms from the Budget, Economic Survey and RBI. No yearly figures that go out of date.
  - history and art-culture: chronology, terms and their meanings, who is linked with which movement, text, monument or style, features of an administration or school of art.
  - environment: species with their habitat and status, protected areas and what they are known for, conventions, protocols and bodies and what each one covers, ecological concepts.
  - science-tech: how a technology works in simple terms and what it is used for, recent missions and developments, everyday science, health and biotechnology.
  - international-relations and current-affairs: groupings and their members, places in the news and what borders them, reports and the bodies that publish them.

CONTENT RULES (all levels):
- The LEVEL RUBRIC decides the question formats. Ignore any other format mix.
- Cover the topic widely: spread the questions over its sub-themes and don't test the same fact twice.
- ANSWER KEY FIRST: before writing any question, decide the "answer" index of every question. Use each of 0, 1, 2 and 3 about equally (for 10 questions: two or three times each), in no pattern, and never the same index more than twice in a row. Then write each question so that its correct option sits at the planned index: for direct questions put the correct option in that position; for statement and pair questions choose which statements are true so that the planned option is the right one. This also means "Both" / "All" and "Neither" / "None" are the answer sometimes.
- In explanations, refer to options by their text, never by position ("Option 2", "(b)").
- Every explanation judges each statement, pair or option on its own line ("Statement 1 is correct: ...", "Pair 2 is incorrectly matched: ..."), giving the right fact for every wrong one and citing the Article, Act, case, report or location where relevant. From Level 6 up, also name the trap (for example "Trap: it is the Speaker, not the Chairman"). End with one line stating the result ("So only two statements are correct."). Keep it tight: no filler, no repeating the question.
- Only use facts you are certain of and that standard sources (NCERT, standard reference books, official government and international sources) agree on. If sources disagree or you're unsure, write a different question. Avoid figures and rankings that change every year unless the question names the year or report.
- Each question must have exactly one defensible answer.

SELF-CHECK (do this silently before answering, don't print it):
1. For each question: does its format match the LEVEL? Is the fact at the right depth? Are the wrong options as close as the LEVEL requires, no closer and no further? Would a student one level below find it hard but fair, and a student one level above find it easy? Rewrite any question that fails.
2. Solve each question again from scratch as a student would. The count of statements or pairs your explanation marks correct must match the option at the "answer" index. Fix any mismatch.
3. Count how many times each "answer" index (0, 1, 2, 3) is used. If any index is the answer for more than 4 in every 10 questions, rewrite questions until the spread is even.
4. Check the JSON: the number of questions asked for, 4 options each, "answer" between 0 and 3, name and id built exactly as FIELD RULES say.
````
