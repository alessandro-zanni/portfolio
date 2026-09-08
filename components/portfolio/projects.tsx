import { projects } from "@/lib/resume"

import { StackTags, TerminalBlock } from "./terminal-block"

export function Projects() {
  return (
    <TerminalBlock id="projects" command="cat projects.md" title="Freelance projects">
      <ol className="flex flex-col divide-y divide-border">
        {projects.map((project) => (
          <li key={project.title} className="py-5 first:pt-0 last:pb-0">
            <h3 className="font-medium text-primary">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground italic">{project.subtitle}</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="text-primary/60 select-none">
                    –
                  </span>
                  <span className="text-foreground/90">{bullet}</span>
                </li>
              ))}
            </ul>
            <StackTags items={project.stack} />
          </li>
        ))}
      </ol>
    </TerminalBlock>
  )
}
