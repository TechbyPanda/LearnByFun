import type { Track } from "../types";
import { upscInterview } from "./interview";
import { upscMains } from "./mains";
import { upscOptionalPsychology } from "./optionalPsychology";
import { upscPrelims } from "./prelims";

export const upscCse: Track = {
  id: "upsc-cse",
  title: "UPSC CSE",
  subtitle: "Civil Services Examination",
  description:
    "The complete Prelims and Mains syllabus with your Psychology optional, and how much of each part you can already practise here.",
  stages: [upscPrelims, upscMains, upscOptionalPsychology, upscInterview],
};
