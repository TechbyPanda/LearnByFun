import type { TrackStage } from "../types";

// UPSC CSE Personality Test, the last stage after Mains.
export const upscInterview: TrackStage = {
  id: "interview",
  title: "Interview",
  description: "The Personality Test. Its marks are added to Mains for the final merit list (2,025 marks in all).",
  modules: [
    {
      id: "interview-personality-test",
      title: "Personality Test",
      facts: ["275 marks", "Counts for merit"],
      units: [
        {
          title: "Suitability for a career in public service",
          points: [
            "Assessed by a board of competent and unbiased observers, based on your Detailed Application Form (DAF).",
            "Tests mental calibre: intellectual qualities, social traits and interest in current affairs.",
          ],
        },
        {
          title: "Qualities assessed",
          points: [
            "Mental alertness, critical powers of assimilation, clear and logical exposition, balance of judgement.",
            "Variety and depth of interest, ability for social cohesion and leadership, intellectual and moral integrity.",
          ],
        },
      ],
    },
  ],
};
