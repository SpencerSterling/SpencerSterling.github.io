import { profile } from "@/data/profile";

export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Placeholder Project 1",
    description:
      "TODO: Replace with a real project description, what it does, and your role in it.",
    link: profile.github,
    tags: ["TODO"],
  },
  {
    title: "Placeholder Project 2",
    description:
      "TODO: Replace with a real project description, what it does, and your role in it.",
    link: profile.github,
    tags: ["TODO"],
  },
  {
    title: "Placeholder Project 3",
    description:
      "TODO: Replace with a real project description, what it does, and your role in it.",
    link: profile.github,
    tags: ["TODO"],
  },
];
