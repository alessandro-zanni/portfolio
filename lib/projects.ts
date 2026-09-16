// Project index — the summary metadata for the homepage teaser and the
// /projects listing. The long-form write-up per project lives as MDX in
// content/projects/<slug>.mdx and is read from there by the detail route.

export type ProjectStatus = "shipped" | "in-progress"

export type ProjectMeta = {
  slug: string
  title: string
  /** Short label for the 1:1 call-out box. */
  piece: string
  subtitle: string
  status: ProjectStatus
  period: string
  stack?: string[]
  links?: { repo?: string; demo?: string }
  /** public/projects/<slug>/cover.(svg|png) */
  cover: string
  /** Short teaser bullets for the homepage build step. */
  bullets: string[]
}

export const projects: ProjectMeta[] = [
  {
    slug: "crm-platform",
    title: "CRM Platform for Electrical Materials Distributor",
    piece: "B2B sales-operations platform",
    subtitle:
      "Custom business management system for offer and client management (B2B sales operations platform)",
    status: "shipped",
    period: "2025",
    stack: ["Next.js", "React", "Node.js", "Supabase", "PostgreSQL", "Vercel", "TypeScript"],
    cover: "/projects/crm-platform/cover.svg",
    bullets: [
      "Built a modern web application enabling the sales team to manage client offers, quotations, and business workflows",
      "Full-stack development spanning responsive frontend (Next.js), backend APIs, and database architecture",
      "Integrated authentication and real-time data synchronization for concurrent user operations",
      "Deployed to production on Vercel with zero-downtime deployments",
    ],
  },
  {
    slug: "freelance-web-solutions",
    title: "Freelance Web Solutions",
    piece: "Client sites, end to end",
    subtitle: "Responsive corporate and portfolio websites for multiple B2B and B2C clients",
    status: "shipped",
    period: "2023 – 2026",
    stack: ["HTML5", "CSS3", "JavaScript", "Astro", "Next.js", "various backend frameworks"],
    cover: "/projects/freelance-web-solutions/cover.svg",
    bullets: [
      "Multiple production websites with custom integrations and SEO optimization",
      "Focus on responsive design, performance, and user experience",
      "Direct client relationship, from brief to deployment",
    ],
  },
  {
    slug: "self-hosted-cloud",
    title: "Self-Hosted Cloud",
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
    slug: "traccia",
    title: "Traccia",
    piece: "Coaching diary, as a PWA",
    subtitle: "Daily diary for tracking a training journey together with a coach",
    status: "in-progress",
    period: "2026 – present",
    stack: ["Next.js", "TypeScript"],
    links: { demo: "https://bodytrack.it" },
    cover: "/projects/traccia/cover.svg",
    bullets: [
      "A shared daily log between a client and their coach — training, meals, notes — in one place",
      "Built as a Next.js PWA, installable on a phone home screen",
      "In active development",
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
