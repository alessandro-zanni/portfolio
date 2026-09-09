import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

/** A white reading plate with the world's 2px ink keyline. */
export function Plate({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-2 border-ink bg-paper text-ink shadow-[0_3px_14px_-4px_rgba(9,20,35,0.22)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/** The mono count tag on a call-out, e.g. "live · 4 channels". */
export function PieceTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center border-2 border-ink bg-stud px-1.5 py-0.5 font-mono text-[0.7rem] leading-none font-medium text-[#141210]">
      {children}
    </span>
  )
}

/** A link styled as the instruction-book's primary / secondary button. */
export function ActionLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: "primary" | "secondary" }) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 border-2 border-ink px-4 py-2.5 text-sm font-semibold tracking-tight uppercase transition-transform active:translate-y-0.5",
        variant === "primary"
          ? "bg-bolt-fill text-primary-foreground"
          : "bg-paper text-ink hover:bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
