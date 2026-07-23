import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-foreground/70">{profile.role}</p>
      <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70">
        {profile.tagline}
      </p>
      <p className="mt-4 max-w-xl text-base leading-7 text-foreground/70">
        {profile.bio}
      </p>
    </section>
  );
}
