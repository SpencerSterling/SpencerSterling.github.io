import { experience } from "@/data/experience";
import TimelineEntry from "@/components/TimelineEntry";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <ul className="mt-8 space-y-10">
        {experience.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
