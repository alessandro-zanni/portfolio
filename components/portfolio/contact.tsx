import { ArrowRight } from "lucide-react"

import { links, profile } from "@/lib/resume"
import { cn } from "@/lib/utils"

import { Brick } from "./brick"
import { ActionLink, Plate } from "./kit"
import { SectionHead } from "./step"

const email = links.find((l) => l.label === "email")!
const rest = links.filter((l) => l.label !== "email")

const contactRows = [
  { label: "email", href: email.href, handle: profile.email, blank: false },
  ...rest.map((l) => ({ label: l.label, href: l.href, handle: l.handle, blank: true })),
  {
    label: "phone",
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    handle: profile.phone,
    blank: false,
  },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <SectionHead id="contact" n="04" title="Contact" note="Build complete. Here's how to reach the builder." />

      <Plate className="mt-8 p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <Brick tone="brick" className="size-8" />
            <Brick tone="bolt" className="size-8" />
            <Brick tone="stud" className="size-8" />
          </div>
          <p className="min-w-0 flex-1 text-sm text-ink-soft">
            Open to full-stack and AI-engineering roles, and to freelance builds. Based in{" "}
            {profile.location}.
          </p>
        </div>

        <div className="mt-5 border-t-2 border-ink pt-5">
          <ActionLink href={email.href} variant="primary">
            Email Alessandro
            <ArrowRight className="size-4" aria-hidden="true" />
          </ActionLink>

          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {contactRows.map((row) => (
              <li key={row.label} className="flex flex-wrap gap-x-3">
                <span className="w-16 shrink-0 text-xs font-semibold tracking-wide text-ink-soft uppercase">
                  {row.label}
                </span>
                <a
                  href={row.href}
                  target={row.blank ? "_blank" : undefined}
                  rel={row.blank ? "noreferrer" : undefined}
                  className={cn(
                    "font-medium text-bolt underline-offset-4 hover:underline",
                    row.label === "phone" && "font-mono"
                  )}
                >
                  {row.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Plate>
    </section>
  )
}
