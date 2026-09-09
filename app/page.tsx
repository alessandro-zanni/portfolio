import { Colophon } from "@/components/portfolio/colophon"
import { Contact } from "@/components/portfolio/contact"
import { Education } from "@/components/portfolio/education"
import { Experience } from "@/components/portfolio/experience"
import { Inventory } from "@/components/portfolio/inventory"
import { Marks, Masthead } from "@/components/portfolio/masthead"
import { Projects } from "@/components/portfolio/projects"
import { StepTracker } from "@/components/portfolio/step-tracker"

export default function Page() {
  return (
    <div className="min-h-svh bg-blueprint">
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
