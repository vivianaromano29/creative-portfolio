export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Master" | "Clienti";
  year: string;
  tags: string[];
  tone: "primary" | "accent" | "secondary" | "card";
  summary: string;
  brief: string;
  approach: string[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "webboh",
    title: "Strategia social per la Gen Z",
    client: "Webboh",
    category: "Master",
    year: "2026",
    tags: ["Project work", "RCS Academy", "TikTok", "Instagram"],
    tone: "primary",
    summary: "Project work del master: una strategia per far crescere la community di Webboh tra i più giovani.",
    brief: "Webboh è il punto di riferimento per i ragazzi su musica, creator e tendenze. L'obiettivo era rafforzare la presenza sui social e aumentare il coinvolgimento della community.",
    approach: [
      "Analisi del pubblico e dei competitor",
      "Definizione di tono di voce e linee guida editoriali",
      "Piano editoriale con format ricorrenti per TikTok e Instagram",
      "Proposte di collaborazioni con creator",
    ],
    deliverables: ["Presentazione strategica", "Piano editoriale", "Mockup dei contenuti"],
  },
  {
    slug: "paramount",
    title: "Campagna social di lancio",
    client: "Paramount",
    category: "Master",
    year: "2026",
    tags: ["Project work", "RCS Academy", "Campagna", "Contenuti"],
    tone: "accent",
    summary: "Project work del master: un'idea di campagna social per Paramount, dal concept ai contenuti.",
    brief: "Il brief chiedeva di creare attesa e conversazione online attorno ai contenuti Paramount, coinvolgendo il pubblico in modo creativo.",
    approach: [
      "Studio del pubblico e dei contenuti di riferimento",
      "Concept creativo della campagna",
      "Calendario dei contenuti prima, durante e dopo il lancio",
      "KPI per misurare i risultati",
    ],
    deliverables: ["Presentazione della campagna", "Concept creativo", "Esempi di post e Stories"],
  },
  {
    slug: "cliente-gestione-social",
    title: "Gestione dei profili social",
    client: "Cliente freelance",
    category: "Clienti",
    year: "2026",
    tags: ["Freelance", "Gestione", "Instagram"],
    tone: "secondary",
    summary: "Il mio primo cliente: gestisco i suoi social, dal piano editoriale alla pubblicazione.",
    brief: "Il cliente voleva una presenza online più curata e costante per farsi conoscere da nuovi clienti.",
    approach: [
      "Revisione dei profili esistenti",
      "Piano editoriale mensile",
      "Creazione e pubblicazione dei contenuti",
      "Monitoraggio dei risultati",
    ],
    deliverables: ["Piano editoriale", "Contenuti mensili", "Report"],
  },
  {
    slug: "cliente-proposta-strategica",
    title: "Proposta strategica",
    client: "Cliente freelance",
    category: "Clienti",
    year: "2026",
    tags: ["Freelance", "Strategia", "Presentazione"],
    tone: "card",
    summary: "Una presentazione di progetto per impostare da zero la comunicazione social del cliente.",
    brief: "Prima di partire con la gestione, il cliente aveva bisogno di una visione chiara: dove essere presente, cosa comunicare e come.",
    approach: [
      "Analisi del brand e del settore",
      "Scelta dei canali più adatti",
      "Proposta di format e tono di voce",
      "Roadmap per i primi mesi",
    ],
    deliverables: ["Presentazione di progetto"],
  },
];

export const toneClass: Record<Project["tone"], string> = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  card: "bg-card text-card-foreground",
};
