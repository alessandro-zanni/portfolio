import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Colophon } from "@/components/portfolio/colophon"
import { ActionLink, PieceTag, Plate } from "@/components/portfolio/kit"
import { ProjectLinks } from "@/components/portfolio/project-links"
import { StackTags } from "@/components/portfolio/stack-tags"
import { profile } from "@/lib/resume"
import { type ProjectKind, projectKinds, projects, statusLabel } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "AI systems, client products, personal builds and open-source work — shipped and in progress.",
}

const groups = (Object.entries(projectKinds) as [ProjectKind, string][]).map(([kind, label]) => ({
  kind,
  label,
  items: projects.filter((project) => project.kind === kind),
}))

export default function ProjectsPage() {
  return (
    <div className="min-h-svh bg-blueprint">
      <header className="grid-ground border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bolt underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to {profile.name}
          </Link>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] leading-[0.95] tracking-[-0.03em] text-ink uppercase">
            Projects
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Every piece, shipped or still on the bench — AI systems, client
            work, personal builds and open source.
          </p>
          <nav aria-label="Project groups" className="mt-5 flex flex-wrap gap-2">
            {groups.map(({ kind, label, items }) => (
              <a
                key={kind}
                href={`#${kind}`}
                className="border-2 border-ink bg-paper px-2.5 py-1 text-xs font-semibold tracking-tight text-ink uppercase hover:bg-muted"
              >
                {label} <span className="font-mono font-medium text-ink-soft">{items.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="grid-ground">
        <div className="mx-auto flex max-w-5xl flex-col gap-14 px-5 py-14 sm:px-8 sm:py-20">
          {groups.map(({ kind, label, items }) => (
            <section key={kind} id={kind} aria-labelledby={`${kind}-heading`} className="scroll-mt-8">
              <h2
                id={`${kind}-heading`}
                className="flex items-baseline gap-3 border-b-2 border-ink pb-3 font-display text-2xl tracking-tight text-ink uppercase"
              >
                {label}
                <span className="font-mono text-xs font-medium text-ink-soft">{items.length}</span>
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {items.map((project) => (
                  <Plate key={project.slug} className="flex flex-col p-0">
                    <Link
                      href={`/projects/${project.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="border-b-2 border-ink bg-paper p-1.5"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- covers mix svg/jpg, generated locally */}
                      <img
                        src={project.cover}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/10] w-full border border-plate object-cover object-top"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg tracking-tight text-ink uppercase">
                          {project.title}
                        </h3>
                        <div className="flex shrink-0 items-center gap-2">
                          <PieceTag>{statusLabel(project.status)}</PieceTag>
                          <span className="font-mono text-xs text-ink-soft">{project.period}</span>
                        </div>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-ink-soft">{project.role}</p>
                      <p className="mt-2 text-sm text-ink">{project.subtitle}</p>
                      <StackTags items={project.stack} />
                      <div className="mt-auto flex flex-wrap gap-3 pt-5">
                        <ActionLink href={`/projects/${project.slug}`} variant="primary">
                          Case study
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </ActionLink>
                        <ProjectLinks links={project.links} />
                      </div>
                    </div>
                  </Plate>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Colophon />
    </div>
  )
}
