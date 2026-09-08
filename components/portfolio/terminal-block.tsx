import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type TerminalBlockProps = {
  id?: string
  command: string
  title: string
  children: ReactNode
  className?: string
}

// A section rendered as a terminal pane: a prompt line on top, output below.
// `title` is the real accessible heading; `command` is decorative chrome.
export function TerminalBlock({ id, command, title, children, className }: TerminalBlockProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={cn(
        "scroll-mt-20 overflow-hidden rounded-lg border bg-card text-card-foreground",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b bg-muted/50 px-3 py-2 text-xs">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        </span>
        <span className="truncate text-muted-foreground">
          <span className="text-primary">~/alessandro</span>
          <span className="text-muted-foreground/60"> $ </span>
          {command}
        </span>
      </div>
      <h2 id={id ? `${id}-heading` : undefined} className="sr-only">
        {title}
      </h2>
      <div className="px-4 py-4 text-sm leading-relaxed sm:px-5 sm:py-5">{children}</div>
    </section>
  )
}

// Renders `#tag` chips for a tech stack.
export function StackTags({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
      {items.map((item) => (
        <li key={item}>
          <span className="text-primary/70">#</span>
          {item.replace(/\s+/g, "-").toLowerCase()}
        </li>
      ))}
    </ul>
  )
}
