# MCQ Practice

## Ai Prompt for question creation
```typescript
export interface MCQQuestion {
  id: string;
  subject: "Polity";
  topic: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
}

```

id will start from 

```typescript
polity-013
```

till what we covered in this chat


```typescript
{
    id: "polity-012",
    subject: "Polity",
    topic: "Local Government",
    question: "Which Constitutional Amendment gave constitutional status to Panchayati Raj Institutions?",
    options: [
      { id: "a", text: "42nd Amendment" },
      { id: "b", text: "61st Amendment" },
      { id: "c", text: "73rd Amendment" },
      { id: "d", text: "74th Amendment" },
    ],
    correctOptionId: "c",
    explanation:
      "The 73rd Constitutional Amendment Act, 1992, gave constitutional status to Panchayati Raj Institutions via Part IX.",
  },
```

above is one sample