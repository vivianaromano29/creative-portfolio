import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viviana Romano — Junior Social Media Manager freelance" },
      { name: "description", content: "Portfolio di Viviana Romano: strategie social, contenuti e progetti per brand e attività." },
      { property: "og:title", content: "Viviana Romano — Social Media Manager" },
      { property: "og:description", content: "Strategie social, contenuti e progetti per brand e attività." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Strategia social", d: "Analisi, obiettivi e piano editoriale su misura per il tuo brand." },
  { n: "02", t: "Contenuti", d: "Post, caroselli, Reel e Stories pensati per fermare lo scroll." },
  { n: "03", t: "Community", d: "Gestione di commenti e messaggi per far crescere relazioni vere." },
  { n: "04", t: "Report", d: "Numeri chiari ogni mese: cosa funziona e cosa migliorare." },
];

const projects = [
  { client: "Caffè di quartiere", tag: "Instagram · Reel", result: "+180%", label: "follower in 3 mesi", tone: "bg-primary text-primary-foreground" },
  { client: "Brand moda sostenibile", tag: "Instagram · TikTok", result: "4,2%", label: "engagement medio", tone: "bg-accent text-accent-foreground" },
  { client: "Studio di yoga", tag: "Facebook · Instagram", result: "+60", label: "nuove iscrizioni", tone: "bg-secondary text-secondary-foreground" },
  { client: "Ristorante a Roma", tag: "Instagram · Ads", result: "x3", label: "prenotazioni dai social", tone: "bg-card text-card-foreground" },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl">VIVIANA ROMANO</span>
        <a href="#contatti" className="border-2 border-border bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-brutal transition-transform hover:-translate-y-0.5">
          Lavoriamo insieme
        </a>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-20">
        <p className="mb-6 inline-block -rotate-2 bg-accent px-3 py-1 font-semibold text-accent-foreground">
          Junior Social Media Manager · Freelance
        </p>
        <h1 className="text-[18vw] md:text-[11rem]">
          Storie che <span className="text-primary">fermano</span> lo scroll.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          Aiuto piccoli brand e attività locali a crescere sui social con strategia, contenuti creativi e tanta costanza.
        </p>
      </header>

      <div className="border-y-2 border-border bg-secondary py-4 text-secondary-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-4xl">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Instagram", "★", "TikTok", "★", "Facebook", "★", "LinkedIn", "★", "Reel", "★", "Copywriting", "★"].map((w, j) => (
              <span key={`${i}-${j}`} className={w === "★" ? "text-accent" : ""}>{w}</span>
            )),
          )}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-7xl md:text-8xl">Progetti</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.client} className={`flex min-h-72 flex-col justify-between border-2 border-border p-8 shadow-brutal ${p.tone}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-4xl">{p.client}</h3>
                <span className="text-sm font-semibold uppercase opacity-75">{p.tag}</span>
              </div>
              <div>
                <div className="font-display text-8xl leading-none">{p.result}</div>
                <p className="font-medium">{p.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-12 text-7xl md:text-8xl">Cosa faccio</h2>
          <div className="grid gap-px border-2 border-border bg-border md:grid-cols-4">
            {services.map((s) => (
              <div key={s.n} className="bg-background p-6">
                <span className="font-display text-2xl text-primary">{s.n}</span>
                <h3 className="mt-4 text-3xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-[16vw] md:text-[9rem]">Scrivimi!</h2>
          <p className="mt-4 max-w-lg text-lg">Hai un progetto in mente? Raccontamelo, ti rispondo entro 24 ore.</p>
          <a href="mailto:ciao@vivianaromano.it" className="mt-8 inline-block border-2 border-border bg-accent px-6 py-4 font-display text-3xl text-accent-foreground shadow-brutal">
            ciao@vivianaromano.it
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-muted-foreground">
        <span>© 2026 Viviana Romano</span>
        <span>Roma, Italia</span>
      </footer>
    </main>
  );
}
