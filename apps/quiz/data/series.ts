/**
 * Levels and topic order. No file-system code here, so client components can import it.
 *
 * Papers whose id ends with `-level-N` and share the rest of the id are one topic ("series"),
 * e.g. `geography-rivers-drainage-of-india-level-1` and `...-level-2`.
 */

/** Topic order on the topic map, per subject, with an icon. Topics not listed come last. */
export const SYLLABUS: Record<string, Array<{ series: string; icon: string }>> = {
  geography: [
    { series: "geography-solar-system-latitudes-longitudes", icon: "🪐" },
    { series: "geography-earth-interior-rocks", icon: "🪨" },
    { series: "geography-earthquakes-volcanoes", icon: "🌋" },
    { series: "geography-landforms-agents-of-erosion", icon: "🏔️" },
    { series: "geography-atmosphere-pressure-winds", icon: "🌬️" },
    { series: "geography-cyclones-rainfall-climate-types", icon: "🌀" },
    { series: "geography-oceans-currents-tides", icon: "🌊" },
    { series: "geography-world-mapping-straits-seas-lakes", icon: "🗺️" },
    { series: "geography-physiography-of-india", icon: "⛰️" },
    { series: "geography-rivers-drainage-of-india", icon: "🏞️" },
    { series: "geography-indian-monsoon-climate", icon: "🌧️" },
    { series: "geography-soils-natural-vegetation-of-india", icon: "🌳" },
    { series: "geography-agriculture-irrigation-in-india", icon: "🌾" },
    { series: "geography-minerals-energy-industries-of-india", icon: "⛏️" },
  ],
};

export const SUBJECT_ICONS: Record<string, string> = {
  polity: "🏛️",
  economy: "💰",
  history: "🏺",
  geography: "🌍",
  environment: "🌿",
  "science-tech": "🔬",
  "art-culture": "🎭",
  "international-relations": "🤝",
  "current-affairs": "📰",
};

const LEVEL_ID = /^(.*)-level-(\d+)$/;

/** Subject, level and series of a paper, worked out from its id and tags. */
export function paperMeta(id: string, tags: string[]) {
  const match = LEVEL_ID.exec(id);
  const levelTag = tags.find((tag) => /^level-\d+$/.test(tag));
  const level = match ? Number(match[2]) : levelTag ? Number(levelTag.slice(6)) : null;
  return { subject: tags[0] ?? "other", level, series: match ? match[1]! : null };
}

/** "Geography – Rivers & Drainage of India (Level 2)" → "Rivers & Drainage of India". */
export function topicTitle(name: string) {
  return name.replace(/\s*\(Level \d+\)$/, "").replace(/^[^–-]+[–-]\s*/, "");
}

/** "science-tech" → "Science tech". */
export function label(tag: string) {
  const text = tag.replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}
