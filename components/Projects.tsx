import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
