import {
  ClipboardCheck,
  Target,
  BookOpen,
  Cpu,
  FolderKanban,
  Briefcase,
} from "lucide-react";

export const journeySteps = [
  {
    number: "01",
    title: "Qualification Test",
    description:
      "Assess your current skills and learning style.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Level Placement",
    description:
      "Get placed in the most suitable learning path.",
    icon: Target,
  },
  {
    number: "03",
    title: "Level Zero",
    description:
      "Master the essential technical foundations.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Technical Learning",
    description:
      "Develop advanced industry-ready skills.",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Projects & Practice",
    description:
      "Build real projects for your portfolio.",
    icon: FolderKanban,
  },
  {
    number: "06",
    title: "Career Preparation",
    description:
      "Interview preparation and job placement support.",
    icon: Briefcase,
  },
];