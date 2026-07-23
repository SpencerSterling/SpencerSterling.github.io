import type { ExperienceEntry } from "@/data/experience";

export default function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="relative border-l border-foreground/10 pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground/30" />
      <p className="text-sm text-foreground/60">
        {entry.start} – {entry.end}
      </p>
      <h3 className="mt-1 font-medium">{entry.role}</h3>
      <p className="text-sm text-foreground/70">{entry.org}</p>
      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-foreground/70">
        {entry.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </li>
  );
}
