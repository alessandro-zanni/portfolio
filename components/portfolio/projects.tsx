import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { projects, statusLabel } from "@/lib/projects"

import { ActionLink, Plate } from "./kit"
import { ProjectLinks } from "./project-links"
import { StackTags } from "./stack-tags"
import { BuildStep, SectionHead } from "./step"

const featured = projects.filter((project) => project.featured)

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
      <SectionHead
        id="projects"
        n="02"
        title="Projects"
        note="Selected work: AI systems and client products, built end to end."
      />
      <ol className="mt-8 flex flex-col gap-8">
        {featured.map((project, i) => (
          <li key={project.slug}>
            <BuildStep
              n={`0${i + 1}`}
              company={project.title}
              meta={project.period}
              role={project.role}
              piece={project.piece}
              pieceTag={statusLabel(project.status).toLowerCase()}
              blurb={project.subtitle}
              bullets={project.bullets}
              last={i === featured.length - 1}
            >
              <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
                <Plate className="mt-4 max-w-md p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element -- covers mix svg/jpg, generated locally */}
                  <img
                    src={project.cover}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full border border-plate object-cover object-top"
                  />
                </Plate>
              </Link>
              <StackTags items={project.stack} />
              <div className="mt-4 flex flex-wrap gap-3">
                <ActionLink href={`/projects/${project.slug}`} variant="primary">
                  Case study
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ActionLink>
                <ProjectLinks links={project.links} />
              </div>
            </BuildStep>
          </li>
        ))}
      </ol>

      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-1.5 pl-14 text-sm font-semibold text-bolt underline-offset-4 hover:underline sm:pl-16"
      >
        View all {projects.length} projects
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
