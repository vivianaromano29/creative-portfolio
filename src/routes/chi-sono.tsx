import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: "Chi sono — Viviana Romano" },
      { name: "description", content: "Viviana Romano, Junior Social Media Manager freelance formata al master di RCS Academy." },
      { property: "og:title", content: "Chi sono — Viviana Romano" },
      { property: "og:description", content: "Junior Social Media Manager freelance formata a RCS Academy." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const skills = ["Strategia social", "Piano editoriale", "Copywriting", "Instagram", "TikTok", "Canva", "Analisi dei dati", "Presentazioni"];

function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-8xl md:text-[10rem]">Ciao, sono <span className="text-primary">Viviana</span></h1>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-xl leading-relaxed">
          <p>Sono una Junior Social Media Manager freelance. Mi sono formata con il master di RCS Academy, dove ho lavorato a project work per brand come Webboh e Paramount.</p>
          <p>Mi piace trasformare un brief in una strategia chiara e in contenuti che le persone abbiano voglia di guardare.</p>
          <Link to="/contatti" className="inline-block border-2 border-border bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-brutal transition-transform hover:-translate-y-1">
            Scrivimi →
          </Link>
        </div>
        <div>
          <h2 className="mb-6 text-5xl">Competenze</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="cursor-default border-2 border-border bg-card px-4 py-2 font-semibold transition-all hover:-rotate-2 hover:bg-accent hover:shadow-brutal">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
