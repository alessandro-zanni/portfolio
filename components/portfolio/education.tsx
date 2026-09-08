import { education, languages } from "@/lib/resume"

import { TerminalBlock } from "./terminal-block"

export function Education() {
  return (
    <TerminalBlock id="education" command="cat education.txt" title="Education & languages">
      <ol className="flex flex-col divide-y divide-border">
        {education.map((item) => (
          <li key={item.title} className="py-4 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <span className="shrink-0 text-xs text-muted-foreground">{item.period}</span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {item.school} · {item.location}
            </p>
            <p className="mt-2 text-sm text-foreground/90">{item.note}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-border pt-4 text-sm">
        {languages.map((lang) => (
          <span key={lang.name}>
            <span className="text-primary">{lang.name}</span>
            <span className="text-muted-foreground/60"> = </span>
            <span className="text-foreground/90">{lang.level}</span>
          </span>
        ))}
      </div>
    </TerminalBlock>
  )
}
