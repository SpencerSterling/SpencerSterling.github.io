import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="band-fixed scroll-mt-20 mt-4 bg-foreground py-12 text-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 font-mono text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} className="text-accent underline">
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
