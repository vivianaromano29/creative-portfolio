import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, toneClass } from "@/lib/projects";

export const Route = createFileRoute("/progetti/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.client} — ${p.title} | Viviana Romano` : "Progetto | Viviana Romano";
    const desc = p?.summary ?? "Progetto del portfolio di Viviana Romano.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-7xl">Progetto non trovato</h1>
      <Link to="/" className="mt-6 inline-block font-semibold text-primary">← Torna ai progetti</Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main>
      <header className={`border-b-2 border-border ${toneClass[p.tone]}`}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link to="/" className="font-semibold opacity-80 hover:opacity-100">← Tutti i progetti</Link>
          <p className="mt-10 font-semibold uppercase opacity-75">{p.client} · {p.year}</p>
          <h1 className="mt-2 text-7xl md:text-9xl">{p.title}</h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="border-2 border-current px-3 py-1 text-sm font-semibold">{t}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr]">
        <h2 className="text-5xl">Il brief</h2>
        <p className="text-xl leading-relaxed">{p.brief}</p>

        <h2 className="text-5xl">Cosa ho fatto</h2>
        <ol className="space-y-4">
          {p.approach.map((a, i) => (
            <li key={a} className="flex items-baseline gap-4 border-b-2 border-border pb-4 text-lg">
              <span className="font-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</span>
              {a}
            </li>
          ))}
        </ol>

        <h2 className="text-5xl">Consegnati</h2>
        <div className="flex flex-wrap gap-3">
          {p.deliverables.map((d) => (
            <span key={d} className="bg-accent px-4 py-2 font-semibold text-accent-foreground">{d}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex aspect-[4/5] items-center justify-center border-2 border-dashed border-border bg-muted text-muted-foreground">
              Immagine {n} in arrivo
            </div>
          ))}
        </div>
      </section>

      <Link
        to="/progetti/$slug"
        params={{ slug: next.slug }}
        className="group block border-t-2 border-border bg-secondary text-secondary-foreground"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-14">
          <div>
            <p className="font-semibold uppercase opacity-70">Prossimo progetto</p>
            <p className="font-display text-5xl md:text-7xl">{next.client}</p>
          </div>
          <span className="font-display text-7xl transition-transform group-hover:translate-x-3">→</span>
        </div>
      </Link>
    </main>
  );
}
