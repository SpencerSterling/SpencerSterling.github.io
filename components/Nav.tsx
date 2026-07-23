const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm sm:px-8">
        <a href="#about" className="font-medium tracking-tight">
          Spencer Sterling
        </a>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
