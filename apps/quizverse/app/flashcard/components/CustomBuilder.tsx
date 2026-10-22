import { OptionGroup, OptionsBar, StartBar } from "../../components/BuilderBar";
import { CheckboxField } from "../../components/CheckboxField";
import { SegmentedControl } from "../../components/SegmentedControl";
import { SubjectTopicPicker } from "../../components/SubjectTopicPicker";
import type { TopicsBySubject } from "../../lib/subject";
import { plural } from "../../lib/format";
import { useCardSelection } from "../hooks/useCardSelection";
import { SESSION_SIZES, type DeckOptions } from "../lib/deck";
import { PICKER_SUBJECTS, UPCOMING_SUBJECTS } from "../lib/subjects";

const SIZE_OPTIONS = SESSION_SIZES.map((size) => ({
  value: size,
  label: size === 0 ? "All" : String(size),
}));

interface CustomBuilderProps {
  onStart: (topicsBySubject: TopicsBySubject, options: DeckOptions) => void;
}

export function CustomBuilder({ onStart }: CustomBuilderProps) {
  const selection = useCardSelection();
  const { deckSize, cardCount, options } = selection;

  return (
    <>
      <SubjectTopicPicker
        subjects={PICKER_SUBJECTS}
        upcoming={UPCOMING_SUBJECTS}
        unit="card"
        value={selection.topicsBySubject}
        onChange={selection.setTopicsBySubject}
      />

      <OptionsBar label="Session options">
        <OptionGroup label="Session size">
          <SegmentedControl
            label="Session size"
            options={SIZE_OPTIONS}
            value={options.limit}
            onChange={(limit) => selection.setOptions({ ...options, limit })}
          />
        </OptionGroup>
        <CheckboxField
          checked={options.shuffle}
          onChange={(shuffle) => selection.setOptions({ ...options, shuffle })}
        >
          Shuffle cards
        </CheckboxField>
      </OptionsBar>

      <StartBar
        summary={
          selection.canStart ? (
            <>
              <strong>{deckSize}</strong> {plural(deckSize, "card")} in this session
              {deckSize < cardCount && ` (of ${cardCount} selected)`}
            </>
          ) : (
            "Pick a subject or topic to begin"
          )
        }
        actionLabel="Start session"
        disabled={!selection.canStart}
        onStart={() => onStart(selection.topicsBySubject, options)}
      />
    </>
  );
}
