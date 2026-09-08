import { Contact } from "@/components/portfolio/contact"
import { Education } from "@/components/portfolio/education"
import { Experience } from "@/components/portfolio/experience"
import { Footer } from "@/components/portfolio/footer"
import { Hero } from "@/components/portfolio/hero"
import { Nav } from "@/components/portfolio/nav"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"

export default function Page() {
  return (
    <div className="min-h-svh">
      <Nav />
      <main className="mx-auto flex max-w-3xl flex-col gap-10 px-4 pb-16">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
