import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, toneClass } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viviana Romano — Junior Social Media Manager freelance" },
      { name: "description", content: "Portfolio di Viviana Romano: project work del master RCS Academy con Webboh e Paramount e progetti per clienti." },
      { property: "og:title", content: "Viviana Romano — Portfolio social" },
      { property: "og:description", content: "Project work con Webboh e Paramount e progetti per clienti freelance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const filters = ["Tutti", "Master", "Clienti"] as const;

function Index() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tutti");
  const list = projects.filter((p) => filter === "Tutti" || p.category === filter);

  return (
    <main>
      <header className="mx-auto max-w-6xl px-6 pb-14 pt-12 md:pt-20">
        <p className="mb-6 inline-block -rotate-2 bg-accent px-3 py-1 font-semibold text-accent-foreground">
          Junior Social Media Manager · Freelance
        </p>
        <h1 className="text-[17vw] md:text-[10rem]">
          Idee social <span className="text-primary">con</span> strategia.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          Formata al master di RCS Academy, dove ho lavorato su brief reali per Webboh e Paramount. Oggi aiuto brand e attività a comunicare sui social.
        </p>
      </header>

      <div className="border-y-2 border-border bg-secondary py-4 text-secondary-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-4xl">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Webboh", "★", "Paramount", "★", "RCS Academy", "★", "Strategia", "★", "Contenuti", "★", "Piano editoriale", "★"].map((w, j) => (
              <span key={`${i}-${j}`} className={w === "★" ? "text-accent" : ""}>{w}</span>
            )),
          )}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-7xl md:text-8xl">Progetti</h2>
          <div className="flex border-2 border-border shadow-brutal">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-semibold transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-card hover:bg-accent"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <Link
              key={p.slug}
              to="/progetti/$slug"
              params={{ slug: p.slug }}
              className={`group relative flex min-h-80 animate-in fade-in slide-in-from-bottom-4 flex-col justify-between overflow-hidden border-2 border-border p-8 shadow-brutal transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] ${toneClass[p.tone]}`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="border-2 border-current px-2 py-0.5 text-xs font-bold uppercase">
                  {p.category === "Master" ? "Master RCS" : "Cliente"}
                </span>
                <span className="font-display text-2xl">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <p className="font-semibold uppercase opacity-75">{p.client}</p>
                <h3 className="mt-1 text-5xl md:text-6xl">{p.title}</h3>
                <p className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                  {p.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold">
                  Scopri il progetto
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-16">
          <h2 className="text-6xl md:text-7xl">Hai un progetto?</h2>
          <Link to="/contatti" className="border-2 border-border bg-accent px-6 py-3 font-display text-3xl text-accent-foreground shadow-brutal transition-transform hover:-translate-y-1">
            Parliamone →
          </Link>
        </div>
      </section>
    </main>
  );
}
