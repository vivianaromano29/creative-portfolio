import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, toneClass, tilt } from "@/lib/projects";
import { ScribbleArrow, ScribbleCircle, Star } from "@/components/Scribble";

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
      <header className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
        <Star className="absolute right-6 top-10 w-20 animate-[spin_14s_linear_infinite] text-primary md:w-32" />
        <p className="font-mono text-xs uppercase tracking-widest">Portfolio · 2026</p>
        <h1 className="relative mt-4 text-[22vw] md:text-[13rem]">
          Viviana
          <br />
          <span className="relative inline-block">
            Romano
            <ScribbleCircle className="-inset-x-6 -inset-y-4 h-[130%] w-[110%] text-lime" />
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <span className="sticker -rotate-3 bg-lime px-3 py-1 text-xl">Junior Social Media Manager</span>
          <ScribbleArrow className="hidden w-24 md:block" />
          <p className="max-w-md text-lg">
            Formata al master di <span className="font-serif text-2xl italic">RCS Academy</span>, dove ho lavorato su brief reali per Webboh e Paramount.
          </p>
        </div>
      </header>

      <div className="-rotate-1 border-y-2 border-border bg-primary py-3 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-4xl uppercase">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Webboh", "✶", "Paramount", "✶", "RCS Academy", "✶", "Strategia", "✶", "Contenuti", "✶", "Community", "✶"].map((w, j) => (
              <span key={`${i}-${j}`}>{w}</span>
            )),
          )}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="relative text-7xl md:text-9xl">
            <span className="sticker absolute -top-8 left-2 -rotate-6 text-3xl normal-case text-primary">i miei</span>
            Progetti
          </h2>
          <div className="flex gap-2 font-mono text-sm uppercase">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border-2 border-border px-4 py-1.5 transition-all ${filter === f ? "bg-foreground text-background" : "hover:-rotate-3 hover:bg-pink"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {list.map((p, i) => (
            <Link
              key={p.slug}
              to="/progetti/$slug"
              params={{ slug: p.slug }}
              className={`tape group relative block animate-in fade-in slide-in-from-bottom-6 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] ${tilt[i % tilt.length]} ${i % 2 ? "md:mt-16" : ""}`}
              style={{ animationDelay: `${i * 90}ms`, animationFillMode: "both" }}
            >
              <div className={`torn flex min-h-96 flex-col justify-between p-8 pt-10 ${toneClass[p.tone]}`}>
                <div className="flex items-start justify-between font-mono text-xs uppercase">
                  <span>{p.category === "Master" ? "Project work · RCS" : "Cliente"}</span>
                  <span>N°{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="sticker text-2xl">{p.client}</p>
                  <h3 className="mt-2 text-6xl">{p.title}</h3>
                  <p className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {p.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-3 border-2 border-current px-4 py-1.5 font-mono text-xs uppercase">
                    Apri il progetto
                    <span className="transition-transform group-hover:translate-x-2">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-pink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-20">
          <h2 className="text-7xl md:text-9xl">
            Hai un<br />progetto?
          </h2>
          <Link to="/contatti" className="sticker rotate-3 border-2 border-border bg-lime px-6 py-3 text-3xl shadow-brutal transition-transform hover:rotate-0">
            parliamone →
          </Link>
        </div>
      </section>
    </main>
  );
}
