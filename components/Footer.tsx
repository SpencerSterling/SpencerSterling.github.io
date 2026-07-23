import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
