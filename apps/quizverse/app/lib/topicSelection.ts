import type { Subject, TopicsBySubject } from "./subject";

// Pure updates for a TopicsBySubject selection. A subject with no topics left
// is dropped, so "is this subject picked?" is always just `subject in selection`.

export function setSubjectTopics(
  selection: TopicsBySubject,
  subject: Subject,
  topics: string[],
): TopicsBySubject {
  const next = { ...selection };
  if (topics.length === 0) delete next[subject];
  else next[subject] = topics;
  return next;
}

export function toggleTopic(
  selection: TopicsBySubject,
  subject: Subject,
  topic: string,
): TopicsBySubject {
  const current = selection[subject] ?? [];
  return setSubjectTopics(
    selection,
    subject,
    current.includes(topic) ? current.filter((t) => t !== topic) : [...current, topic],
  );
}

/** Keeps only the subjects and topics that still exist, e.g. when restoring a saved selection. */
export function pruneSelection(
  selection: unknown,
  getTopics: (subject: Subject) => string[],
): TopicsBySubject {
  if (!selection || typeof selection !== "object") return {};
  let pruned: TopicsBySubject = {};
  for (const [subject, topics] of Object.entries(selection)) {
    if (!Array.isArray(topics)) continue;
    const valid = getTopics(subject as Subject);
    pruned = setSubjectTopics(
      pruned,
      subject as Subject,
      topics.filter((topic) => valid.includes(topic)),
    );
  }
  return pruned;
}

/** Items from each picked subject whose topic is picked. */
export function filterBySelection<T extends { topic: string }>(
  selection: TopicsBySubject,
  itemsBySubject: Partial<Record<Subject, T[]>>,
): T[] {
  return (Object.entries(selection) as [Subject, string[]][]).flatMap(([subject, topics]) =>
    (itemsBySubject[subject] ?? []).filter((item) => topics.includes(item.topic)),
  );
}
