import { experience } from "@/lib/resume"

import { StackTags } from "./stack-tags"
import { BuildStep, SectionHead } from "./step"

export function Experience() {
  const n = experience.length

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-16">
      <SectionHead
        id="experience"
        n="01"
        title="Experience"
        note={`${n} roles, newest first — each step shows the model as it stood by then.`}
      />
      <ol className="mt-8 flex flex-col gap-8">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`}>
            <BuildStep
              n={String(n - i).padStart(2, "0")}
              company={job.company}
              role={job.role}
              meta={`${job.period} · ${job.location}`}
              piece={job.piece}
              pieceTag={job.pieceTag}
              blurb={job.blurb}
              bullets={job.bullets}
              stackCount={n - i}
              last={i === n - 1}
              compact={job.compact}
            >
              {!job.compact ? <StackTags items={job.stack} /> : null}
            </BuildStep>
          </li>
        ))}
      </ol>
    </section>
  )
}
