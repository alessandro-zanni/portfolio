import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

type Tone = "brick" | "bolt" | "stud" | "plate"

const toneVar: Record<Tone, string> = {
  brick: "var(--brick)",
  bolt: "var(--bolt)",
  stud: "var(--stud)",
  plate: "var(--plate)",
}

/**
 * The signature isometric 2×2 brick. `ghost` renders it as the dashed
 * outline of a piece not yet placed. Decorative — always aria-hidden.
 */
export function Brick({
  tone = "brick",
  ghost = false,
  className,
  style,
}: {
  tone?: Tone
  ghost?: boolean
  className?: string
  style?: CSSProperties
}) {
  const fill = toneVar[tone]
  const top = `color-mix(in oklab, ${fill} 88%, white)`
  const left = `color-mix(in oklab, ${fill} 78%, black)`
  const right = fill

  if (ghost) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={cn("h-8 w-8", className)}
        style={style}
        aria-hidden="true"
        fill="none"
        stroke="var(--ink)"
        strokeWidth={3}
        strokeDasharray="6 5"
        strokeLinejoin="round"
      >
        <path d="M50 12 L91 33 L50 54 L9 33 Z" />
        <path d="M9 33 L50 54 L50 88 L9 67 Z" />
        <path d="M91 33 L50 54 L50 88 L91 67 Z" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-8 w-8", className)}
      style={style}
      aria-hidden="true"
      stroke="var(--ink)"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <path d="M9 33 L50 54 L50 88 L9 67 Z" fill={left} />
      <path d="M91 33 L50 54 L50 88 L91 67 Z" fill={right} />
      <path d="M50 12 L91 33 L50 54 L9 33 Z" fill={top} />
      <ellipse cx="34" cy="27" rx="7" ry="4" fill={top} />
      <ellipse cx="52" cy="18" rx="7" ry="4" fill={top} />
      <ellipse cx="48" cy="39" rx="7" ry="4" fill={top} />
      <ellipse cx="66" cy="30" rx="7" ry="4" fill={top} />
    </svg>
  )
}

/**
 * The model so far: a stack of the same iso bricks, one gained per role.
 * `count` bricks are placed; the newest (top) is the bright new piece.
 * Static — the page's one motion is elsewhere.
 */
export function AssemblyStack({
  count,
  className,
}: {
  count: number
  className?: string
}) {
  const n = Math.max(count, 1)
  const SIZE = 30
  const STEP = 11 // vertical rise per brick
  const bricks = Array.from({ length: n })
  return (
    <div
      className={cn("relative", className)}
      style={{ width: SIZE, height: SIZE + (n - 1) * STEP }}
      aria-hidden="true"
    >
      {bricks.map((_, i) => (
        <Brick
          key={i}
          tone={i === 0 ? "brick" : "plate"}
          className="absolute left-0"
          style={{ top: i * STEP, width: SIZE, height: SIZE, zIndex: n - i }}
        />
      ))}
    </div>
  )
}
