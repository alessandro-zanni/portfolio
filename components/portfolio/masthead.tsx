import { ArrowRight, Download } from "lucide-react"

import { links, marks, profile, spec } from "@/lib/resume"

import { Brick } from "./brick"
import { ActionLink, Plate } from "./kit"

const email = links.find((l) => l.label === "email")!

/** The four things Alessandro is known for — a strip directly under the nav. */
export function Marks() {
  return (
    <div className="border-b-2 border-ink bg-paper">
      <ul className="mx-auto grid max-w-5xl gap-x-6 gap-y-4 px-5 py-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {marks.map((mark) => (
          <li key={mark.title} className="flex gap-3">
            <Brick tone="brick" className="mt-0.5 size-6 shrink-0" />
            <div>
              <p className="text-sm font-bold tracking-tight text-ink">{mark.title}</p>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-ink-soft">{mark.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Masthead() {
  return (
    <header id="top" className="grid-ground border-b-2 border-ink">
      <div className="mx-auto max-w-5xl px-5 pt-12 pb-8 sm:px-8 sm:pt-16 sm:pb-10">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[1fr_17rem]">
          <div className="min-w-0">
            <h1 className="animate-press-set font-display text-[clamp(2.6rem,7.4vw,4.75rem)] leading-[0.9] tracking-[-0.035em] text-ink uppercase">
              Alessandro
              <br />
              Zanni
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
              {profile.lead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t-2 border-ink pt-5">
              <ActionLink href={email.href} variant="primary">
                Email Alessandro
                <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink href={profile.cv} download variant="secondary">
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </ActionLink>
            </div>
          </div>

          <Plate className="h-fit p-5">
            <p className="text-[0.72rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
              Pieces in this set
            </p>
            <dl className="mt-3 flex flex-col gap-2.5">
              {spec.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-3 border-b border-plate pb-2 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-ink-soft">{row.label}</dt>
                  <dd className="text-right text-sm font-semibold text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Plate>
        </div>
      </div>
    </header>
  )
}
