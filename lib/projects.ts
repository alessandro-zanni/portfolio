// Project index — the summary metadata for the homepage teaser and the
// /projects listing. The long-form write-up per project lives as MDX in
// content/projects/<slug>.mdx and is read from there by the detail route.

export type ProjectStatus = "shipped" | "in-progress"

/** Groups on the /projects page, in this order. */
export const projectKinds = {
  ai: "AI & LLM",
  client: "Client work",
  personal: "Personal builds",
  oss: "Open source",
} as const

export type ProjectKind = keyof typeof projectKinds

export type ProjectMeta = {
  slug: string
  title: string
  kind: ProjectKind
  /** Shown on the homepage. */
  featured?: boolean
  /** Who did what, in a few words, for the fact sheet. */
  role: string
  /** Short label for the 1:1 call-out box. */
  piece: string
  subtitle: string
  status: ProjectStatus
  period: string
  stack?: string[]
  links?: { repo?: string; demo?: string }
  /** public/projects/<slug>/cover.(svg|jpg) */
  cover: string
  /** Short teaser bullets for the homepage build step. */
  bullets: string[]
}

export const projects: ProjectMeta[] = [
  {
    slug: "invoice-extractor",
    title: "Invoice Extractor",
    kind: "ai",
    featured: true,
    role: "Solo — design, eval, deploy",
    piece: "LLM extraction, eval-driven",
    subtitle:
      "Structured data from invoices and receipts with Claude, checked by deterministic rules, escalated to the strong model only when the checks fail",
    status: "shipped",
    period: "2026",
    stack: ["Claude API", "Next.js", "TypeScript", "Zod", "Supabase", "Vercel"],
    links: { repo: "https://github.com/alessandro-zanni/invoice-extractor" },
    cover: "/projects/invoice-extractor/cover.jpg",
    bullets: [
      "Haiku extracts, deterministic checks verify (line math, totals, VAT and tax-id checksums), Opus runs only when the checks fail",
      "Routing reaches 89.1% fully-correct documents with zero false alarms, at 36% of the cost of running Opus on everything",
      "Every design choice backed by an eval on a held-out test set of synthetic and public-dataset documents",
    ],
  },
  {
    slug: "drug-label-rag",
    title: "Drug Label RAG",
    kind: "ai",
    featured: true,
    role: "Solo — API, retrieval, eval, infra",
    piece: "Cited RAG over public data",
    subtitle:
      "Question answering over public drug labels (openFDA), where every answer cites the label section it comes from",
    status: "in-progress",
    period: "2026 – present",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "AWS Bedrock", "Terraform", "React"],
    links: { repo: "https://github.com/alessandro-zanni/drug-label-rag" },
    cover: "/projects/drug-label-rag/cover.svg",
    bullets: [
      "Ingestion pipeline: openFDA labels split into sections, embedded with Titan on Bedrock, stored in pgvector",
      "Hybrid retrieval (vector + full-text) and a hard rule: no cited source, no answer",
      "Eval suite with a golden set and LLM-judge scoring, meant to gate merges on recall and faithfulness",
    ],
  },
  {
    slug: "scouty",
    title: "Scouty",
    kind: "client",
    featured: true,
    role: "Sole developer, with a domain product owner",
    piece: "Youth football scouting platform",
    subtitle: "Field evaluation and player ranking system for a youth football academy",
    status: "in-progress",
    period: "2026 – present",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Vercel"],
    cover: "/projects/scouty/cover.jpg",
    bullets: [
      "Mobile-first observation forms: scouts score players across eight common axes plus role-specific detail, right from the field",
      "Player profiles with a radar chart, cross-role score composition, and ranking always scoped to a role and category",
      "Multi-tenant Postgres schema with row-level security, roles for scouts vs. managers, and an audit trail for weight and merge decisions",
      "Imported a club's historical paper/spreadsheet archive (700+ past evaluations) into the same schema without touching live data",
    ],
  },
  {
    slug: "crm-platform",
    title: "CRM Platform for Electrical Materials Distributor",
    kind: "client",
    featured: true,
    role: "Freelance, end to end",
    piece: "B2B sales-operations platform",
    subtitle:
      "Custom business management system for offer and client management (B2B sales operations platform)",
    status: "shipped",
    period: "2025",
    stack: ["Next.js", "React", "Node.js", "Supabase", "PostgreSQL", "Vercel", "TypeScript"],
    cover: "/projects/crm-platform/cover.jpg",
    bullets: [
      "Built a modern web application enabling the sales team to manage client offers, quotations, and business workflows",
      "Full-stack development spanning responsive frontend (Next.js), backend APIs, and database architecture",
      "Integrated authentication and real-time data synchronization for concurrent user operations",
      "Deployed to production on Vercel with zero-downtime deployments",
    ],
  },
  {
    slug: "bodytrack",
    title: "BodyTrack",
    kind: "client",
    role: "Sole developer, for a fitness coach",
    piece: "Coaching app, as a PWA",
    subtitle:
      "Fitness coaching web app: clients log their day, the coach follows the trend over time",
    status: "in-progress",
    period: "2026 – present",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Vercel"],
    links: { demo: "https://bodytrack.it" },
    cover: "/projects/bodytrack/cover.jpg",
    bullets: [
      "Clients record weight, measurements, photos, meals, workouts and adherence every day",
      "The coach sees trend charts and compares progress photos over time",
      "Invite-only, installable as a PWA on a phone home screen",
    ],
  },
  {
    slug: "freelance-web-solutions",
    title: "Freelance Web Solutions",
    kind: "client",
    role: "Freelance, brief to deploy",
    piece: "Client sites, end to end",
    subtitle: "Responsive corporate and portfolio websites for multiple B2B and B2C clients",
    status: "shipped",
    period: "2023 – 2026",
    stack: ["HTML5", "CSS3", "JavaScript", "Astro", "Next.js", "various backend frameworks"],
    cover: "/projects/freelance-web-solutions/cover.jpg",
    bullets: [
      "Multiple production websites with custom integrations and SEO optimization",
      "Focus on responsive design, performance, and user experience",
      "Direct client relationship, from brief to deployment",
    ],
  },
  {
    slug: "flightlog",
    title: "Flightlog",
    kind: "personal",
    role: "Solo",
    piece: "Personal flight history",
    subtitle:
      "Flight history with a route map and statistics, filled automatically from airline confirmation emails",
    status: "shipped",
    period: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "MapLibre", "Claude API", "Cloudflare Workers"],
    links: { repo: "https://github.com/alessandro-zanni/flightlog" },
    cover: "/projects/flightlog/cover.svg",
    bullets: [
      "Route map, statistics and a full list of past flights",
      "Forwarded booking emails reach a Cloudflare Email Worker; Claude extracts the legs, including changes and cancellations",
      "Sender authentication checked before anything is parsed, failures bounce back instead of disappearing",
    ],
  },
  {
    slug: "self-hosted-cloud",
    title: "Self-Hosted Cloud",
    kind: "personal",
    role: "Solo — hardware to monitoring",
    piece: "DevOps & self-hosted infra",
    subtitle:
      "A personal Ubuntu server running photo storage, Mac backups, and media services on redundant storage with offsite backup",
    status: "in-progress",
    period: "2026 – present",
    stack: [
      "Docker Compose",
      "Immich",
      "mergerfs",
      "SnapRAID",
      "Borg Backup",
      "Backblaze B2",
      "Tailscale",
      "Cloudflare Tunnel",
    ],
    cover: "/projects/self-hosted-cloud/cover.svg",
    bullets: [
      "Immich (photos/video) and Time Machine backup on Docker Compose, storage unified with mergerfs across 7 HDDs",
      "Disk parity via SnapRAID; nightly Borg backups, local and offsite to Backblaze B2",
      "Remote access over Tailscale; public access via Cloudflare Tunnel with no open router ports",
      "Monitoring, smartd disk health, and a Telegram bot for alerts and remote commands",
    ],
  },
  {
    slug: "immich-kodi",
    title: "Immich for Kodi",
    kind: "oss",
    role: "Author and maintainer",
    piece: "Open-source Kodi addon",
    subtitle: "Unofficial Kodi addon to browse and play the photos and videos on an Immich server",
    status: "shipped",
    period: "2026",
    stack: ["Python"],
    links: { repo: "https://github.com/alessandro-zanni/immich-kodi" },
    cover: "/projects/immich-kodi/cover.svg",
    bullets: [
      "Written from scratch to replace an unmaintained addon, fixing the two design choices that broke it",
      "Reads the Immich API as plain dicts instead of modelling it, so new API fields never crash a listing",
      "One request per screen — timeline, albums, people, places, search, and more, all from Immich's own bucket endpoints",
      "Stdlib only: no runtime dependencies to resolve on install",
    ],
  },
  {
    slug: "open-source-contributions",
    title: "Open-Source Contributions",
    kind: "oss",
    role: "Contributor",
    piece: "Fixes sent upstream",
    subtitle:
      "Fixes and features contributed to open-source apps I use every day: a terminal music player and a Jellyfin client",
    status: "shipped",
    period: "2026",
    stack: ["Rust", "React Native", "Expo", "Swift"],
    links: { repo: "https://github.com/LargeModGames/spotatui/pulls?q=author%3Aalessandro-zanni" },
    cover: "/projects/open-source-contributions/cover.svg",
    bullets: [
      "spotatui: two merged PRs — two playback freezes fixed and alternative audio sources enabled on macOS, plus nested-folder scanning for local libraries",
      "Streamyfin: a native Mac Catalyst build of the Jellyfin client, with the matching player slice proposed to MPVKit, both awaiting maintainers",
    ],
  },
]

export const statusLabel = (status: ProjectStatus) =>
  status === "shipped" ? "Shipped" : "In progress"

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
