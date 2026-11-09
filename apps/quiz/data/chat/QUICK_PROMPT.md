# Prompt for quick-revision papers (short questions for the timer)

Use this for short questions you can answer in 5–10 seconds, such as fill in the blanks, which Article is it, or spotting a changed word. It's for memorisation, so set the timer in ⚙ Settings to 5 or 10 seconds.
For full UPSC-style questions use `CHATBOT_PROMPT.md` instead.

Copy everything inside the box below, change the lines at the top, and paste it into the chatbot.
When it answers, use the chatbot's **"Copy code"** button on the code block (don't select the text by hand),
paste it into a new file here named `<id>.json` (the `id` from its answer), and refresh the app.

**PATTERNS**: keep the ones you want, delete the rest (or write `all`):

| Pattern | Example |
|---|---|
| `fill-blank` | "Article ___ abolishes untouchability." → 14 / 15 / 17 / 21 |
| `which-article` | "Which Article provides for President's Rule in a state?" → 352 / 356 / 360 / 249 |
| `what-it-says` | "Article 249 deals with:" → four short one-line descriptions |
| `spot-the-change` | "Which statement correctly gives Article 14?" → four almost identical lines, only one exactly right |
| `correct-pair` | "Which pair is correctly matched?" → four 'Article – subject' pairs, only one right |
| `number-recall` | "Minimum age to become a member of Rajya Sabha?" → 25 / 30 / 35 / 21 |
| `odd-one-out` | "Which of these is NOT a Fundamental Right?" |

````text
TOPIC: Polity – Fundamental Rights (Articles 12–35)
NUMBER OF QUESTIONS: 20
PATTERNS: fill-blank, which-article, what-it-says, spot-the-change, correct-pair, number-recall, odd-one-out
SOURCE TAG: none   (or e.g. mock)

You are making a QUICK REVISION paper for UPSC aspirants. Each question must be answerable in 5-10 seconds by someone who has memorised the facts. Test recall of exact facts (Article numbers, definitions, key words, numbers, years), not long reasoning. Use ONLY the PATTERNS listed above, mixed evenly, and don't put two questions of the same pattern next to each other.

PATTERNS (how to write each one):
- fill-blank: one short definition or fact with the key word or number replaced by "___". The 4 options are candidates for the blank.
  Example: "Article ___ abolishes untouchability and forbids its practice in any form." Options: ["14", "15", "17", "21"]
- which-article: describe what a provision does in a few words. The options are 4 Article numbers.
  Example: "Which Article provides for President's Rule in a state?" Options: ["Article 352", "Article 356", "Article 360", "Article 249"]
- what-it-says: give the Article or term. The options are 4 one-line descriptions.
  Example: "Article 249 deals with:" Options: ["Parliament's power to legislate on a State List subject in the national interest", "Proclamation of Emergency", "Financial Emergency", "Inter-State Council"]
- spot-the-change: the UPSC trick. "Which of the following correctly states <provision>?" Give 4 almost identical one-line statements. Only ONE is exactly correct. Each wrong one changes a single small detail (citizens vs persons, shall vs may, Parliament vs President, a number, 'and' vs 'or', 'only' added or removed).
  Example: "Which of the following correctly states Article 14?" Options: ["The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India", "The State shall not deny to any citizen equality before the law or the equal protection of the laws within the territory of India", "The State shall not deny to any person equality before the law and the equal protection of the laws throughout the world", "Parliament shall not deny to any person equality before the law or the equal protection of the laws within the territory of India"]
- correct-pair: "Which one of the following pairs is correctly matched?" Each option is a short 'X – Y' pair. Only one is right.
- number-recall: ask for one exact number, age, year, percentage or count. The options are 4 close values.
- odd-one-out: "Which of the following is NOT ...?" with 3 true items and 1 that doesn't belong.

OUTPUT RULES (very important, the output is loaded directly by an app):
- Reply with ONE fenced code block marked ```json and nothing else: no intro, no notes after it.
- It must be valid JSON that JSON.parse accepts. No comments, no trailing commas.
- Do NOT escape characters Markdown-style. Never write \. or \- or \* or \\n. The only escapes allowed are \n (a line break inside a string) and \" (a double quote inside a string). Prefer single quotes inside text.
- No source citations or reference markers like [1] or [2, 3] anywhere.

FORMAT:
{
  "id": "polity-quick-revision-fundamental-rights-articles",
  "name": "Polity – Quick Revision: Fundamental Rights Articles",
  "tags": ["polity", "quick-revision"],
  "subtags": ["fundamental-rights", "articles"],
  "questions": [
    {
      "question": "Article ___ abolishes untouchability and forbids its practice in any form.",
      "options": ["14", "15", "17", "21"],
      "answer": 2,
      "explanation": "Article 17 abolishes untouchability. Article 14 = equality before law, 15 = no discrimination, 21 = life and personal liberty."
    }
  ]
}

FIELD RULES:
- "name": "<Subject> – Quick Revision: <Theme>" (for example "Polity – Quick Revision: Emergency Provisions"). Never a generic name.
- "id": the name in lowercase with words joined by hyphens, letters, digits and hyphens only (for example "polity-quick-revision-emergency-provisions").
- All tags and subtags are lowercase, words joined by hyphens.
- "tags": first the subject, exactly one of: polity, economy, history, geography, environment, science-tech, art-culture, international-relations, current-affairs. Then always "quick-revision". Then add SOURCE TAG if it is not "none".
- "subtags": 2 to 5 topics covered: the topic first, then key sub-themes.
- "options": exactly 4 strings, short (spot-the-change options may be one full sentence).
- "answer": the index of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth.

CONTENT RULES:
- Keep questions SHORT: at most about 25 words (spot-the-change: the question line is short, the options carry the text).
- Spread the correct answers evenly across 0, 1, 2 and 3.
- Wrong options must be the confusions students really make: neighbouring Articles (14/15/16, 352/356/360), similar terms, close numbers.
- Explanation: 1-2 short lines. State the correct fact, then briefly what the confusing options actually are (for example "352 = National Emergency, 360 = Financial Emergency"). This is how the student memorises.
- Cover different facts. Don't ask the same fact twice in different patterns.
- Only use facts you are certain of. For spot-the-change, use the exact constitutional or official wording. If you're unsure of the exact wording, use another pattern.
````
