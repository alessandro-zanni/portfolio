"use client"

import "./globals.css"
import { Brick } from "@/components/portfolio/brick"
import { Plate } from "@/components/portfolio/kit"

// Replaces the root layout when it throws: own <html>/<body>, no fonts or theme.
export default function GlobalError({
  unstable_retry,
}: Readonly<{
  error: Error & { digest?: string }
  unstable_retry: () => void
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <title>Something went wrong</title>
        <main className="grid-ground grid min-h-svh place-items-center bg-blueprint px-5 py-16">
          <Plate className="w-full max-w-md p-6 sm:p-8">
            <Brick className="size-9" />

            <p className="mt-5 font-display text-2xl tracking-tight text-ink uppercase">
              Something went wrong
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              The build hit a snag loading this page. Give it another go.
            </p>

            <div className="mt-6 border-t-2 border-ink pt-5">
              <button
                type="button"
                onClick={() => unstable_retry()}
                className="inline-flex items-center gap-2 border-2 border-ink bg-bolt-fill px-4 py-2.5 text-sm font-semibold tracking-tight text-primary-foreground uppercase transition-transform active:translate-y-0.5"
              >
                Try again
              </button>
            </div>
          </Plate>
        </main>
      </body>
    </html>
  )
}
