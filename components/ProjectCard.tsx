import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-foreground/10 p-6 transition-colors hover:border-foreground/30"
    >
      <h3 className="font-medium">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-foreground/70">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-foreground/10 px-2 py-0.5 text-xs text-foreground/60"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
