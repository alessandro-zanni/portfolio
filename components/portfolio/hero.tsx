import { ArrowDownToLine } from "lucide-react"

import { links, profile } from "@/lib/resume"

export function Hero() {
  return (
    <section id="top" className="pt-10 pb-2 sm:pt-16">
      <p className="text-sm text-muted-foreground">
        <span className="text-primary">~/alessandro</span>
        <span className="text-muted-foreground/60"> $ </span>whoami
      </p>

      <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
        {profile.name}
        <span className="ml-1 inline-block w-[0.6ch] animate-caret bg-primary text-transparent select-none">
          _
        </span>
      </h1>

      <p className="mt-2 text-base text-muted-foreground sm:text-lg">
        {profile.title} <span className="text-muted-foreground/50">·</span>{" "}
        {profile.subtitle}
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        <span className="text-primary/70"># </span>
        {profile.location}
      </p>

      <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-foreground/90 sm:text-base">
        {profile.pitch}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <a
          href={profile.cv}
          download
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-primary px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          <ArrowDownToLine className="size-4" />
          download CV
        </a>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
