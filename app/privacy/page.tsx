import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { ActionLink, Plate } from "@/components/portfolio/kit"
import { profile } from "@/lib/resume"

// DRAFT privacy notice (GDPR art. 13), written without legal review — check it
// before relying on it. Keep it in step with what the site actually does: no
// cookies, hosting logs plus cookieless Vercel Web Analytics and Speed Insights.

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What this site collects about visitors: hosting logs and cookieless, aggregated usage statistics. No cookies.",
  alternates: { canonical: "/privacy" },
}

const sections: { title: string; body: string }[] = [
  {
    title: "Who is responsible",
    body: `${profile.name}, ${profile.location} — ${profile.email}. This is a personal site; I am the data controller.`,
  },
  {
    title: "What is collected",
    body: "No cookies and no tracking across sites. The hosting provider (Vercel Inc.) keeps technical request logs — IP address, browser, page requested, time — for security and to keep the service running. Vercel Web Analytics and Speed Insights record aggregated, cookieless statistics on page visits and loading performance. Your light/dark preference is stored only in your own browser.",
  },
  {
    title: "When you contact me",
    body: "If you email me, I use your details only to reply and to follow up on what you asked, and I delete them when they are no longer needed for that.",
  },
  {
    title: "Where the data goes",
    body: "Vercel processes the hosting logs and these statistics as my processor; it is based in the United States and covered by the EU–US Data Privacy Framework and standard contractual clauses. Nothing is sold or shared for advertising.",
  },
  {
    title: "Your rights",
    body: `You can ask to access, correct or delete your data, or object to its use, by writing to ${profile.email}. You can also complain to your data-protection authority (in Spain the AEPD, in Italy the Garante).`,
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-svh bg-blueprint grid-ground px-5 py-14 sm:px-8 sm:py-20">
      <Plate className="mx-auto w-full max-w-2xl p-6 sm:p-8">
        <h1 className="font-display text-2xl tracking-tight text-ink uppercase">
          Privacy
        </h1>
        <div className="mt-6 flex flex-col gap-6">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[0.72rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
                {section.title}
              </h2>
              <p className="mt-2 text-sm text-ink">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 border-t-2 border-ink pt-5">
          <ActionLink href="/" variant="secondary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to the start
          </ActionLink>
        </div>
      </Plate>
    </main>
  )
}
