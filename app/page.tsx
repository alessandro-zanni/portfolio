import { Colophon } from "@/components/portfolio/colophon"
import { Contact } from "@/components/portfolio/contact"
import { Education } from "@/components/portfolio/education"
import { Experience } from "@/components/portfolio/experience"
import { Inventory } from "@/components/portfolio/inventory"
import { Marks, Masthead } from "@/components/portfolio/masthead"
import { Projects } from "@/components/portfolio/projects"
import { StepTracker } from "@/components/portfolio/step-tracker"
import { experience, inventory, links, profile } from "@/lib/resume"
import { siteUrl } from "@/lib/site"

// Structured data for search engines and AI answers: the same facts the page
// shows, from the same source (lib/resume.ts).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.lead,
    email: profile.email,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    worksFor: { "@type": "Organization", name: experience[0].company },
    sameAs: links
      .filter((link) => link.href.startsWith("https://"))
      .map((link) => link.href),
    knowsAbout: inventory.flatMap((bin) => bin.items),
  },
}

export default function Page() {
  return (
    <div className="min-h-svh bg-blueprint">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border-2 focus:border-ink focus:bg-paper focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:tracking-tight focus:text-ink focus:uppercase"
      >
        Skip to content
      </a>
      <Masthead />
      <StepTracker />
      <Marks />
      <main id="content" tabIndex={-1} className="grid-ground focus:outline-none">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-5 py-14 sm:px-8 sm:py-20">
          <Experience />
          <Projects />
          <Inventory />
          <Education />
          <Contact />
        </div>
      </main>
      <Colophon />
    </div>
  )
}
