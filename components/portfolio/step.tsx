import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { AssemblyStack, Brick } from "./brick"
import { PieceTag, Plate } from "./kit"
import { Reveal } from "./reveal"

/** Drop the legal suffix — noise for a non-technical reader. */
function cleanCompany(name: string) {
  return name.replace(/\s+(s\.r\.l\.|s\.c\.s\.|s\.n\.c\.|S\.r\.l\.|srl)\.?$/i, "").trim()
}

/** A big display numeral in a keylined square — the world's step marker. */
function Numeral({ n, tone = "ink" }: { n: string; tone?: "ink" | "bolt" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center border-2 border-ink font-display text-2xl leading-none tabular-nums",
        tone === "bolt"
          ? "bg-bolt-fill text-primary-foreground"
          : "bg-ink text-paper"
      )}
    >
      {n}
    </span>
  )
}

/** Section-level heading — one per section, carries the real <h2>. */
export function SectionHead({
  id,
  n,
  title,
  note,
}: {
  id: string
  n: string
  title: string
  note?: string
}) {
  return (
    <div className="flex items-center gap-4 border-b-2 border-ink pb-4">
      <Numeral n={n} tone="bolt" />
      <div>
        <h2
          id={`${id}-heading`}
          className="font-display text-2xl tracking-tight text-ink uppercase sm:text-3xl"
        >
          {title}
        </h2>
        {note ? <p className="mt-0.5 text-sm text-ink-soft">{note}</p> : null}
      </div>
    </div>
  )
}

/** One build step: a role or a project — the new piece clicking onto the stack. */
export function BuildStep({
  n,
  company,
  role,
  meta,
  piece,
  pieceTag,
  blurb,
  bullets,
  stackCount,
  last = false,
  compact = false,
  children,
}: {
  n: string
  company: string
  role?: string
  meta?: string
  piece: string
  pieceTag?: string
  blurb?: string
  bullets: string[]
  /** When set, the numeral column shows the model assembled so far (N bricks). */
  stackCount?: number
  last?: boolean
  compact?: boolean
  children?: ReactNode
}) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4 sm:gap-5">
      <div className="relative flex flex-col items-center">
        <Numeral n={n} />
        {stackCount != null ? (
          <AssemblyStack count={stackCount} className="mt-2" />
        ) : null}
        {!last ? <span aria-hidden="true" className="mt-2 w-0.5 flex-1 bg-ink" /> : null}
      </div>

      <div className={cn("min-w-0", !last && "pb-2")}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="font-display text-lg tracking-tight text-ink uppercase">
            {cleanCompany(company)}
          </h3>
          {meta ? <span className="font-mono text-xs text-ink-soft">{meta}</span> : null}
        </div>
        {role ? <p className="mt-0.5 text-sm font-medium text-ink-soft">{role}</p> : null}

        {compact ? (
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink">
            <Brick tone="brick" className="size-6" />
            <span className="font-semibold">{piece}</span>
            {pieceTag ? <PieceTag>{pieceTag}</PieceTag> : null}
            {bullets[0] ? <span className="text-ink-soft"> — {bullets[0]}</span> : null}
          </p>
        ) : (
          <>
            <Reveal className="mt-3">
              <Plate className="flex w-fit max-w-full items-center gap-2.5 p-3 pr-4">
                {/* the new piece drops into its slot */}
                <Brick tone="brick" className="size-9 shrink-0" />
                <ArrowRight className="size-3.5 shrink-0 text-bolt" aria-hidden="true" />
                <Brick ghost className="size-9 shrink-0" />
                <p className="pl-1 text-sm leading-tight font-semibold text-ink">{piece}</p>
                {pieceTag ? <PieceTag>{pieceTag}</PieceTag> : null}
              </Plate>
            </Reveal>

            {blurb ? (
              <p className="mt-3 max-w-[62ch] text-sm text-ink-soft italic">{blurb}</p>
            ) : null}

            <ul className="mt-3 flex max-w-[64ch] flex-col gap-2 text-sm text-ink">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-bolt" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {children}
      </div>
    </div>
  )
}
