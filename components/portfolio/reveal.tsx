"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * The page's one authored motion: the "new piece" settles into place as its
 * step scrolls in. The pre-animation state is applied only after mount, so
 * with no JS (or before hydration) the content renders fully visible.
 * prefers-reduced-motion is neutralised in globals.css.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    // Skip the entrance entirely under reduced-motion — content just renders in place.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const raf = requestAnimationFrame(() => setMounted(true))
    const el = ref.current
    if (!el) return () => cancelAnimationFrame(raf)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    )
    io.observe(el)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      data-mounted={mounted}
      data-revealed={seen}
      className={cn("reveal-piece", className)}
    >
      {children}
    </div>
  )
}
