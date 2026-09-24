import type { ExperienceEntry } from "@/data/experience";

export default function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-4 border-t border-rule py-6 first:border-t">
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-xl font-bold">{entry.role}</span>
        <span className="font-medium text-accent">{entry.org}</span>
      </div>
      <span className="font-mono text-sm whitespace-nowrap text-foreground-muted">
        {entry.start} — {entry.end}
      </span>
    </li>
  );
}
