import { readFile } from "node:fs/promises"
import path from "node:path"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"

import { Colophon } from "@/components/portfolio/colophon"
import { ActionLink, PieceTag, Plate } from "@/components/portfolio/kit"
import { StackTags } from "@/components/portfolio/stack-tags"
import { profile } from "@/lib/resume"
import { getProject, projects } from "@/lib/projects"
import { mdxComponents } from "@/mdx-components"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.subtitle,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`)
  const source = await readFile(filePath, "utf-8")
  const { content } = await compileMDX({
    source,
    components: mdxComponents(),
  })

  return (
    <div className="min-h-svh bg-blueprint">
      <header className="grid-ground border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bolt underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h1 className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] leading-[0.98] tracking-[-0.03em] text-ink uppercase">
              {project.title}
            </h1>
            <div className="flex shrink-0 items-center gap-3">
              <PieceTag>{project.status === "shipped" ? "Shipped" : "In progress"}</PieceTag>
              <span className="font-mono text-xs text-ink-soft">{project.period}</span>
            </div>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {project.subtitle}
          </p>
          <StackTags items={project.stack} />

          {project.links ? (
            <div className="mt-6 flex flex-wrap gap-3 border-t-2 border-ink pt-5">
              {project.links.repo ? (
                <ActionLink href={project.links.repo} variant="secondary" target="_blank" rel="noreferrer">
                  <Code2 className="size-4" aria-hidden="true" />
                  View repo
                </ActionLink>
              ) : null}
              {project.links.demo ? (
                <ActionLink href={project.links.demo} variant="primary" target="_blank" rel="noreferrer">
                  Open live
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ActionLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </header>

      <main className="grid-ground">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Plate className="overflow-hidden p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- covers mix svg/png, generated locally */}
            <img
              src={project.cover}
              alt=""
              className="aspect-[16/9] w-full border border-plate object-cover"
            />
          </Plate>

          <div className="mt-10">{content}</div>
        </div>
      </main>

      <Colophon />
    </div>
  )
}
