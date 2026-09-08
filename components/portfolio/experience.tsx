import { experience } from "@/lib/resume"

import { StackTags, TerminalBlock } from "./terminal-block"

export function Experience() {
  return (
    <TerminalBlock id="experience" command="ls -la experience/" title="Experience">
      <ol className="flex flex-col divide-y divide-border">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="py-5 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-medium text-foreground">
                <span className="text-primary">{job.company}</span>
                <span className="text-muted-foreground/60"> — </span>
                {job.role}
              </h3>
              <span className="shrink-0 text-xs text-muted-foreground">{job.period}</span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">{job.location}</p>
            {job.blurb ? (
              <p className="mt-2 text-sm text-muted-foreground italic">{job.blurb}</p>
            ) : null}
            <ul className="mt-2 flex flex-col gap-1.5 text-sm">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="text-primary/60 select-none">
                    –
                  </span>
                  <span className="text-foreground/90">{bullet}</span>
                </li>
              ))}
            </ul>
            <StackTags items={job.stack} />
          </li>
        ))}
      </ol>
    </TerminalBlock>
  )
}
