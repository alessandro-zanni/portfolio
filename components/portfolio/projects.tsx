import { projects } from "@/lib/resume"

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
          <li key={project.title}>
            <BuildStep
              n={`0${i + 1}`}
              company={project.title}
              piece={project.piece}
              blurb={project.subtitle}
              bullets={project.bullets}
              last={i === projects.length - 1}
            >
              <StackTags items={project.stack} />
            </BuildStep>
          </li>
        ))}
      </ol>
    </section>
  )
}
