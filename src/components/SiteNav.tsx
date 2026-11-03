import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Progetti" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="font-display text-2xl transition-colors hover:text-primary">
          VIVIANA ROMANO
        </Link>
        <div className="flex gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="px-2 py-1 font-semibold transition-colors hover:bg-accent hover:text-accent-foreground sm:px-3"
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
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
    <footer className="border-t-2 border-border">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-muted-foreground">
        <span>© 2026 Viviana Romano</span>
        <span>Junior Social Media Manager</span>
      </div>
    </footer>
  );
}
