import { ArrowRight } from "lucide-react"

import { Brick } from "@/components/portfolio/brick"
import { ActionLink, Plate } from "@/components/portfolio/kit"

export default function NotFound() {
  return (
    <main className="grid-ground grid min-h-svh place-items-center bg-blueprint px-5 py-16">
      <Plate className="w-full max-w-md p-6 sm:p-8">
        <div className="flex items-center gap-3" aria-hidden="true">
          <Brick ghost className="size-9 shrink-0" />
          <ArrowRight className="size-4 shrink-0 text-bolt" />
          <Brick tone="plate" className="size-9 shrink-0" />
        </div>

        <p className="mt-5 font-display text-2xl tracking-tight text-ink uppercase">
          Piece not in this set
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          That page isn&rsquo;t part of the build. Head back to the first step.
        </p>

        <div className="mt-6 border-t-2 border-ink pt-5">
          <ActionLink href="/" variant="primary">
            Back to the start
            <ArrowRight className="size-4" aria-hidden="true" />
          </ActionLink>
        </div>
      </Plate>
    </main>
  )
}
