import { ArrowUpRight, Code2 } from "lucide-react"

import type { ProjectMeta } from "@/lib/projects"

import { ActionLink } from "./kit"

/** Repo and live-demo buttons for a project; renders nothing when it has neither. */
export function ProjectLinks({ links }: Readonly<{ links: ProjectMeta["links"] }>) {
  if (!links?.repo && !links?.demo) return null
  return (
    <>
      {links.repo ? (
        <ActionLink href={links.repo} variant="secondary" target="_blank" rel="noreferrer">
          <Code2 className="size-4" aria-hidden="true" />
          Code
        </ActionLink>
      ) : null}
      {links.demo ? (
        <ActionLink href={links.demo} variant="secondary" target="_blank" rel="noreferrer">
          Live
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </ActionLink>
      ) : null}
    </>
  )
}
