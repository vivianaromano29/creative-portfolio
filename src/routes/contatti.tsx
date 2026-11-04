import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Viviana Romano" },
      { name: "description", content: "Contatta Viviana Romano per la gestione dei tuoi social o una strategia su misura." },
      { property: "og:title", content: "Contatti — Viviana Romano" },
      { property: "og:description", content: "Parliamo del tuo progetto social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="text-[18vw] md:text-[11rem]">Scrivimi!</h1>
        <p className="mt-4 max-w-lg text-xl">Hai un progetto in mente o vuoi vedere le presentazioni complete? Ti rispondo entro 24 ore.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:ciao@vivianaromano.it" className="border-2 border-border bg-lime px-6 py-4 font-display text-3xl uppercase text-foreground -rotate-2 shadow-brutal transition-transform hover:-translate-y-1">
            ciao@vivianaromano.it
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border-2 border-border bg-pink px-6 py-4 font-display text-3xl uppercase text-foreground rotate-1 shadow-brutal transition-transform hover:-translate-y-1">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border-2 border-border bg-sky px-6 py-4 font-display text-3xl uppercase text-foreground -rotate-1 shadow-brutal transition-transform hover:-translate-y-1">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
