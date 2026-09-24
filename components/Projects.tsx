import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-center gap-4 font-mono text-xs font-bold tracking-widest text-accent uppercase">
          Work Log
          <span className="h-[3px] flex-1 bg-foreground" />
        </div>
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
