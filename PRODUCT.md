# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The site serves one visitor goal — "decide whether to reach out to Alessandro" — across four audiences, and must land for all of them on a single page:

- **Recruiters and hiring managers** at product companies and startups, evaluating fit for a full-stack or AI-engineering role. Need seniority, stack, and current focus legible in seconds.
- **Non-technical screeners** at recruiting/head-hunting agencies doing first-pass filtering. Rely on plain-language summary, years, titles, and named technologies rather than nuance.
- **Prospective freelance clients** (SMEs, studios, agencies) looking for someone to build a web product or an AI/automation system end-to-end.
- **Technical peers** (other engineers, conference and community contacts) assessing credibility and taste.

Context of use: reached from a LinkedIn profile, a job application, a referral, or a CV link; often skimmed on mobile between other tabs; frequently a second or third portfolio seen in one sitting.

## Product Purpose

A personal portfolio / online CV for Alessandro Zanni. It presents the content of his CV (`public/alessandro-zanni-cv.pdf`, source `~/Documents/CV/CV-2026-07-20-EN.pdf`) as a self-hosted web page he controls, links from his professional profiles, and updates independently of the PDF. Success = a qualified visitor forms an accurate picture of his level and range and contacts him (email, LinkedIn), or downloads the CV to move him forward in a process.

## Positioning

Alessandro is an engineer who can **own a product end to end** — data model, backend, frontend, deploy, and self-hosted infrastructure — with two things most full-stack engineers his level don't pair:

- **Real production experience with LLM / conversational-AI systems** (multi-channel chatbot platforms handling live traffic across Telegram, WhatsApp, Messenger, Zendesk at Heres; LLM integrations; real-time Socket.IO/PubNub messaging), not demos or course projects.
- **A formal design background** (Academy Diploma in Advertising Graphics, Adobe Creative Suite) — visual and UX judgment unusual in someone comfortable in the backend and on a Linux server.

Breadth is deliberate and evidenced: employee and freelance, frontend and backend, web and mobile (Ionic), headless e-commerce for high-traffic retail (Tigotà, Pinalli), Docker/CI-CD self-hosting. The claim is range backed by shipped work, not "jack of all trades."

## Operating Context

- 6+ years' experience; currently Software Engineer — Generative AI & LLM Integration at Heres s.r.l. (08/2021–present).
- Based in Barcelona, Spain. Prior roles in Emilia-Romagna, Italy (Bologna, Reggio Emilia, Correggio). Open to the EU market and remote.
- Italian native; English B2.
- The visitor journey the site sits in: profile/application/referral → portfolio → email or LinkedIn reply, or CV download → internal process.

## Capabilities and Constraints

- **Scope:** single page, English only, static deploy — no contact form, no backend, no CMS. Content lives in `lib/resume.ts` as the single source of truth.
- **Content sections:** profile/pitch, professional experience (5 roles), freelance projects (3, description-only — no live links or screenshots), education, technical skills, languages, contact links, downloadable CV PDF.
- **Stack** (set by the existing codebase, not open): Next.js 16 (App Router), React 19, Tailwind v4, shadcn/ui, next-themes. Light/dark themes; `d` toggles.
- **Undecided / open:**
  - Final deploy domain — `metadataBase` and the GitHub URL in the code are placeholders awaiting real values.
  - Whether an Italian version is ever added (currently no).
- **Visual direction is explicitly open.** The current dev/terminal treatment was a starting point, not an identity commitment; a redesign may keep, evolve, or replace it on merit.

## Brand Commitments

- Name shown as **Alessandro Zanni**.
- Voice: direct, concrete, understated — lets shipped work and named technologies carry the weight; no hype, no superlatives, no "passionate about."
- No logo or established personal identity system yet.
- Real contact channels only: email (azanni098@gmail.com), LinkedIn (`in/alessandro-zanni-320262147`), GitHub (URL to be confirmed), phone (+39 333 743 4909).

## Evidence on Hand

- `public/alessandro-zanni-cv.pdf` — the current CV, full employment and project history, verbatim source for all site copy.
- `lib/resume.ts` — the same content structured.
- Named employers and clients from the CV: Heres, SpotView, ICT-GROUP, Studio il Granello, Graffo; retail clients Tigotà and Pinalli; a freelance CRM for an (unnamed) electrical-materials distributor.
- **Not available — do not fabricate:** company logos or permission to use them, testimonials or references, project screenshots or live URLs, quantified impact metrics (revenue, latency, user counts), GitHub activity, employment dates beyond those in the CV, any Italian-language copy.

## Product Principles

1. **Skimmable in ten seconds, credible in two minutes.** The non-technical agency screener and the technical peer both get what they need from the same page without a mode switch.
2. **Evidence over adjectives.** Every claim traces to a role, a shipped product, or a named technology in the CV. If it isn't in the CV, it isn't on the site.
3. **Two signals must survive any redesign: production AI/LLM work, and end-to-end ownership.** These are the reasons to contact him rather than the next engineer.
4. **The page is the proof.** For someone who claims full-stack skill and a design background, the site's own craft is a work sample — it has to hold up as one.
5. **He maintains this alone.** Content stays in one typed file; structure stays simple enough to edit in five minutes between jobs.

## Accessibility & Inclusion

No audience-specific standard established. Baseline: legible at mobile widths (primary reading context), real semantic structure and headings, both color themes meeting contrast, keyboard-navigable, and the CV PDF reachable as a plain link.
