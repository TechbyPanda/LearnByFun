import { SelectCard, SelectCardGrid } from "../../components/SelectCard";
import type { MatchSet } from "../data";
import { formatSeconds } from "../lib/round";
import type { BestTimes } from "../lib/storage";

interface SetListProps {
  sets: MatchSet[];
  bests: BestTimes;
  onStart: (set: MatchSet) => void;
}

export function SetList({ sets, bests, onStart }: SetListProps) {
  return (
    <SelectCardGrid>
      {sets.map((set) => {
        const best = bests[set.id];
        return (
          <SelectCard
            key={set.id}
            tags={[set.topic]}
            title={set.title}
            description={set.description}
            meta={`${set.pairs.length} pairs${best === undefined ? "" : ` · Best ${formatSeconds(best)}`}`}
            actionLabel="Play"
            onClick={() => onStart(set)}
          />
        );
      })}
    </SelectCardGrid>
  );
}
