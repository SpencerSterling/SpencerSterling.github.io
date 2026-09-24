"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function update() {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="band-fixed relative flex min-h-[94vh] flex-col overflow-hidden">
      <div ref={bgRef} className="hero-bg">
        <PhotoPlaceholder caption="Fig. 00 — Site visit, Fieldwork Transit" className="h-full w-full" />
      </div>

      <svg
        className="hero-contours"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-50,140 C 250,220 450,60 750,160 S 1150,260 1250,130"
          style={{ fill: "none", stroke: "var(--background)", strokeWidth: 2 }}
        />
        <path
          d="M-50,300 C 300,220 500,400 800,310 S 1150,180 1250,320"
          style={{ fill: "none", stroke: "var(--background)", strokeWidth: 2 }}
        />
        <path
          d="M-50,520 C 280,440 520,600 820,480 S 1160,380 1250,540"
          style={{ fill: "none", stroke: "var(--background)", strokeWidth: 2 }}
        />
      </svg>

      <div className="hero-scrim" />

      <header className="relative z-20 py-6">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-4 px-6 sm:px-8">
          <a href="#" className="text-lg font-bold text-background">
            {profile.name}
          </a>
          <nav className="flex gap-6 font-mono text-xs tracking-wider text-background/85 uppercase">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="relative z-20 mt-auto pb-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <span className="mb-6 inline-block border-2 border-accent px-3 py-2 text-center font-mono text-xs leading-snug tracking-wider text-accent uppercase">
            Est.
            <br />
            {profile.since}
          </span>
          <h1 className="max-w-[18ch] text-balance text-5xl leading-[0.96] font-medium text-background sm:text-6xl md:text-[5.5rem]">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-snug text-background/80">
            {profile.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
