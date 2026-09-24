import { experience } from "@/data/experience";
import TimelineEntry from "@/components/TimelineEntry";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-center gap-4 font-mono text-xs font-bold tracking-widest text-accent uppercase">
          Record
          <span className="h-[3px] flex-1 bg-foreground" />
        </div>
        <ul>
          {experience.map((entry, i) => (
            <TimelineEntry key={i} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  );
}
