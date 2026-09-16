import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Colophon } from "@/components/portfolio/colophon"
import { ActionLink, PieceTag, Plate } from "@/components/portfolio/kit"
import { StackTags } from "@/components/portfolio/stack-tags"
import { profile } from "@/lib/resume"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "Shipped and in-progress projects, built solo, outside the day job.",
}

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
            Every piece, shipped or still on the bench — client work and
            personal builds alike.
          </p>
        </div>
      </header>

      <main className="grid-ground">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 py-14 sm:grid-cols-2 sm:px-8 sm:py-20">
          {projects.map((project) => (
            <Plate key={project.slug} className="flex flex-col p-0">
              <div className="border-b-2 border-ink bg-paper p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element -- covers mix svg/png, generated locally */}
                <img
                  src={project.cover}
                  alt=""
                  className="aspect-[16/10] w-full border border-plate object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h2 className="font-display text-lg tracking-tight text-ink uppercase">
                    {project.title}
                  </h2>
                  <div className="flex shrink-0 items-center gap-2">
                    <PieceTag>{project.status === "shipped" ? "Shipped" : "In progress"}</PieceTag>
                    <span className="font-mono text-xs text-ink-soft">{project.period}</span>
                  </div>
                </div>
                <p className="mt-1.5 text-sm text-ink-soft">{project.subtitle}</p>
                <StackTags items={project.stack} />
                <div className="mt-auto pt-5">
                  <ActionLink href={`/projects/${project.slug}`} variant="secondary">
                    Open project
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </ActionLink>
                </div>
              </div>
            </Plate>
          ))}
        </div>
      </main>

      <Colophon />
    </div>
  )
}
