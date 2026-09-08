import { inventory } from "@/lib/resume"

import { Brick } from "./brick"
import { Plate } from "./kit"
import { SectionHead } from "./step"

const totalParts = inventory.reduce((sum, bin) => sum + bin.items.length, 0)

export function Inventory() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-16">
      <SectionHead
        id="skills"
        n="03"
        title="Skills"
        note="The parts inventory — every bin the builds above are made from."
      />

      <Plate className="mt-8">
        <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-stud px-4 py-2.5">
          <span className="font-display text-sm tracking-tight text-[#141210] uppercase">
            Pieces in this set
          </span>
          <span className="font-mono text-xs font-medium text-[#141210]">×{totalParts}</span>
        </div>

        <ul className="divide-y-2 divide-ink">
          {inventory.map((bin) => (
            <li key={bin.bin} className="grid gap-x-4 gap-y-2 p-4 sm:grid-cols-[13rem_1fr]">
              <div className="flex items-center gap-2.5">
                <Brick tone="stud" className="size-6 shrink-0" />
                <span className="font-display text-sm tracking-tight text-ink uppercase">
                  {bin.bin}
                </span>
                <span className="font-mono text-xs text-ink-soft">×{bin.items.length}</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {bin.items.map((item) => (
                  <li
                    key={item}
                    className="border border-ink bg-blueprint/50 px-2 py-1 text-xs leading-none font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Plate>
    </section>
  )
}
