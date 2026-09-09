"use client"

import { useEffect, useState } from "react"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const steps = [
  { id: "experience", n: "01", label: "Experience" },
  { id: "projects", n: "02", label: "Projects" },
  { id: "skills", n: "03", label: "Skills" },
  { id: "contact", n: "04", label: "Contact" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const next = resolvedTheme === "dark" ? "light" : "dark"
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="grid size-11 shrink-0 place-items-center border-2 border-ink bg-paper text-ink"
      aria-label={mounted ? `Switch to ${next} mode` : "Toggle colour mode"}
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <MoonStar className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}

export function StepTracker() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const targets = steps
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="sticky top-0 z-40 border-b-2 border-ink bg-blueprint/95 backdrop-blur">
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-2.5 sm:px-8"
      >
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center gap-2 font-display text-sm tracking-tight text-ink uppercase"
        >
          <span
            aria-hidden="true"
            className="grid size-6 place-items-center border-2 border-ink bg-brick"
          >
            <span className="grid grid-cols-2 gap-[3px]">
              <i className="size-1 rounded-full bg-white" />
              <i className="size-1 rounded-full bg-white" />
              <i className="size-1 rounded-full bg-white" />
              <i className="size-1 rounded-full bg-white" />
            </span>
          </span>
          <span className="hidden sm:inline">A. Zanni</span>
        </a>

        <ol className="flex min-w-0 flex-1 items-center justify-end gap-1.5 overflow-x-auto sm:gap-2">
          {steps.map((step) => {
            const on = active === step.id
            return (
              <li key={step.id} className="shrink-0">
                <a
                  href={`#${step.id}`}
                  aria-current={on ? "true" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-1.5 border-2 border-ink px-2.5 text-xs font-semibold tracking-tight transition-colors",
                    on ? "bg-bolt-fill text-primary-foreground" : "bg-paper text-ink hover:bg-muted"
                  )}
                >
                  <span className="font-mono text-[0.7rem] opacity-70">{step.n}</span>
                  <span>{step.label}</span>
                </a>
              </li>
            )
          })}
        </ol>

        <ThemeToggle />
      </nav>
    </div>
  )
}
