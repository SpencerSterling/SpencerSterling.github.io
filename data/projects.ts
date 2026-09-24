import { profile } from "@/data/profile";

export type Project = {
  title: string;
  org: string;
  year: string;
  link: string;
  imageCaption: string;
};

export const projects: Project[] = [
  {
    title: "TODO: Placeholder Project 1",
    org: "TODO: Company or client name",
    year: "TODO: e.g. 2024",
    link: profile.github,
    imageCaption: "TODO: short figure caption for the project photo",
  },
  {
    title: "TODO: Placeholder Project 2",
    org: "TODO: Company or client name",
    year: "TODO: e.g. 2022",
    link: profile.github,
    imageCaption: "TODO: short figure caption for the project photo",
  },
  {
    title: "TODO: Placeholder Project 3",
    org: "TODO: Company or client name",
    year: "TODO: e.g. 2020",
    link: profile.github,
    imageCaption: "TODO: short figure caption for the project photo",
  },
];
