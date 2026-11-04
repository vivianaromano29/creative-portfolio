import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Progetti" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="sticker -rotate-3 text-2xl transition-transform hover:rotate-0">
          viviana*
        </Link>
        <div className="flex gap-1 font-mono text-xs uppercase sm:gap-4 sm:text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-1 py-1 transition-colors hover:border-primary"
              activeProps={{ className: "!border-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-sky">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6 py-10">
        <p className="font-display text-5xl uppercase leading-none">Stay<br />social*</p>
        <p className="sticker rotate-2 text-lg">© 2026 Viviana Romano</p>
        <p className="font-mono text-xs uppercase">Junior Social Media Manager</p>
      </div>
    </footer>
  );
}
