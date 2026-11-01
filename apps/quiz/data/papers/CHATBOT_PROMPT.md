# Prompt for ChatGPT / Gemini / NotebookLM

Copy everything inside the box below, change the three lines at the top, and paste it into the chatbot.
When it answers, use the chatbot's **"Copy code"** button on the code block (don't select the text by hand),
paste it into a new file here named `<id>.json` (the `id` from its answer), and refresh the app.

````text
TOPIC: Parliament – Parliamentary Committees
NUMBER OF QUESTIONS: 10
SOURCE TAG: none   (or e.g. pyq-2026 for previous year questions, mock for a mock test)

You are a UPSC Prelims question setter. Create a practice paper on the TOPIC above with the given NUMBER OF QUESTIONS.

OUTPUT RULES (very important, the output is loaded directly by an app):
- Reply with ONE fenced code block marked ```json and nothing else: no intro, no notes after it.
- It must be valid JSON that JSON.parse accepts. No comments, no trailing commas.
- Do NOT escape characters Markdown-style. Never write \. or \- or \* or \\n. The only escapes allowed are \n (a line break inside a string) and \" (a double quote inside a string). Prefer single quotes inside text.
- No source citations or reference markers like [1] or [2, 3] anywhere.

FORMAT:
{
  "id": "parliament-committees-financial-control",
  "name": "Parliament – Committees & Financial Control",
  "tags": ["polity"],
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
- "name": a specific, descriptive title naming the exact sub-themes the questions actually cover, in the form "<Subject> – <Theme> & <Theme>" (for example "Polity – Fundamental Rights & Writs", "Economy – Inflation & Monetary Policy"). Never a generic name like "Paper 1" or "Parliament Quiz".
- "id": the name in lowercase with words joined by hyphens, letters, digits and hyphens only (for example "polity-fundamental-rights-writs").
- All tags and subtags are lowercase, words joined by hyphens.
- "tags" (main tags): first the subject, exactly one of: polity, economy, history, geography, environment, science-tech, art-culture, international-relations, current-affairs. Then add SOURCE TAG below if it is not "none".
- "subtags": 2 to 5 topics the questions cover: the topic first (for example "parliament"), then key sub-themes (for example "money-bills", "committees").
- "options": exactly 4 strings.
- "answer": the index of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth.

CONTENT RULES:
- Real UPSC Prelims style. Mix about 60% "Consider the following statements" questions (2 or 3 statements) with 40% direct questions.
- Spread the correct answers evenly across 0, 1, 2 and 3. For statement questions, "Both" / "All" and "Neither" / "None" must also be correct sometimes.
- Make wrong options plausible: common confusions, close numbers, similar Articles.
- Every explanation says why the correct answer is right AND why each wrong statement is wrong, citing the Article, Act, case or report where relevant.
- Only use facts you are certain of. If you're unsure of a fact, write a different question.
````
