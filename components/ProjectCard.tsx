import type { Project } from "@/data/projects";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      <PhotoPlaceholder caption={project.imageCaption} className="mb-5 aspect-[4/3]" />
      <h3 className="text-xl leading-tight font-semibold sm:text-2xl">{project.title}</h3>
      <p className="mt-1 font-mono text-xs tracking-wide text-foreground-muted uppercase">
        {project.org} — {project.year}
      </p>
    </a>
  );
}
