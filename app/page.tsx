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
      <Masthead />
      <StepTracker />
      <Marks />
      <main className="grid-ground">
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
