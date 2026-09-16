import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { projects } from "@/lib/projects"

import { ActionLink } from "./kit"
import { StackTags } from "./stack-tags"
import { BuildStep, SectionHead } from "./step"

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
      <SectionHead
        id="projects"
        n="02"
        title="Projects"
        note="Sub-assemblies built solo, outside the day job."
      />
      <ol className="mt-8 flex flex-col gap-8">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <BuildStep
              n={`0${i + 1}`}
              company={project.title}
              piece={project.piece}
              pieceTag={project.status === "shipped" ? "shipped" : "in progress"}
              blurb={project.subtitle}
              bullets={project.bullets}
              last={i === projects.length - 1}
            >
              <StackTags items={project.stack} />
              <ActionLink href={`/projects/${project.slug}`} variant="secondary" className="mt-4">
                View project
                <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
            </BuildStep>
          </li>
        ))}
      </ol>

      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-1.5 pl-14 text-sm font-semibold text-bolt underline-offset-4 hover:underline sm:pl-16"
      >
        View all projects
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
