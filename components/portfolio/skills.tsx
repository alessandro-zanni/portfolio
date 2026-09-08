import { skills } from "@/lib/resume"

import { TerminalBlock } from "./terminal-block"

export function Skills() {
  return (
    <TerminalBlock id="skills" command="skills --list" title="Technical skills">
      <dl className="flex flex-col gap-2.5 text-sm">
        {skills.map((skill) => (
          <div key={skill.group} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
            <dt className="shrink-0 text-primary sm:w-48">{skill.group}</dt>
            <dd className="text-foreground/90">{skill.items}</dd>
          </div>
        ))}
      </dl>
    </TerminalBlock>
  )
}
