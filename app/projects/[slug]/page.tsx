import { readFile } from "node:fs/promises"
import path from "node:path"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"

import { Colophon } from "@/components/portfolio/colophon"
import { PieceTag, Plate } from "@/components/portfolio/kit"
import { ProjectLinks } from "@/components/portfolio/project-links"
import { StackTags } from "@/components/portfolio/stack-tags"
import { profile } from "@/lib/resume"
import { getProject, projectKinds, projects, statusLabel } from "@/lib/projects"
import { mdxComponents, remarkUnwrapImages } from "@/mdx-components"

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
  const url = `/projects/${project.slug}`
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.subtitle,
      siteName: `${profile.name} — ${profile.title}`,
    },
  }
}

export default async function ProjectPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`)
  const source = await readFile(filePath, "utf-8")
  const { content } = await compileMDX({
    source,
    components: mdxComponents(),
    options: { mdxOptions: { remarkPlugins: [remarkUnwrapImages] } },
  })

  const i = projects.indexOf(project)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  const facts = [
    ["Role", project.role],
    ["Type", projectKinds[project.kind]],
    ["Status", statusLabel(project.status)],
    ["Period", project.period],
  ]

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
              <PieceTag>{statusLabel(project.status)}</PieceTag>
              <span className="font-mono text-xs text-ink-soft">{project.period}</span>
            </div>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {project.subtitle}
          </p>
        </div>
      </header>

      <main className="grid-ground">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Plate className="overflow-hidden p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- covers mix svg/jpg, generated locally */}
            <img
              src={project.cover}
              alt=""
              className="aspect-[16/9] w-full border border-plate object-cover object-top"
            />
          </Plate>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_17rem]">
            <aside className="lg:order-2">
              <Plate className="p-5 lg:sticky lg:top-8">
                <h2 className="font-display text-sm tracking-tight text-ink uppercase">Fact sheet</h2>
                <dl className="mt-3 flex flex-col gap-3 text-sm">
                  {facts.map(([term, value]) => (
                    <div key={term}>
                      <dt className="font-mono text-[0.7rem] tracking-wide text-ink-soft uppercase">
                        {term}
                      </dt>
                      <dd className="mt-0.5 font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-[0.7rem] tracking-wide text-ink-soft uppercase">
                      Stack
                    </dt>
                    <dd>
                      <StackTags items={project.stack} />
                    </dd>
                  </div>
                </dl>
                {project.links ? (
                  <div className="mt-5 flex flex-wrap gap-3 border-t-2 border-ink pt-4">
                    <ProjectLinks links={project.links} />
                  </div>
                ) : null}
              </Plate>
            </aside>
            <div className="min-w-0 lg:order-1">{content}</div>
          </div>

          <nav
            aria-label="More projects"
            className="mt-16 grid gap-4 border-t-2 border-ink pt-6 sm:grid-cols-2"
          >
            <Link href={`/projects/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-bolt uppercase">
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Previous
              </span>
              <span className="font-display text-base tracking-tight text-ink uppercase group-hover:underline">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col gap-1 sm:items-end sm:text-right"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-bolt uppercase">
                Next
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="font-display text-base tracking-tight text-ink uppercase group-hover:underline">
                {next.title}
              </span>
            </Link>
          </nav>
        </div>
      </main>

      <Colophon />
    </div>
  )
}
