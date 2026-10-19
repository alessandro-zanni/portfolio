import { projects } from "@/lib/projects"
import { experience, links, profile } from "@/lib/resume"
import { siteUrl } from "@/lib/site"

// llms.txt (llmstxt.org): a plain-text digest for AI agents, built from the
// same source as the page so the two never drift.
export const dynamic = "force-static"

export function GET() {
  const body = [
    `# ${profile.name}`,
    `> ${profile.lead}`,
    profile.pitch,
    `## Experience`,
    ...experience.map((job) => `- ${job.role}, ${job.company} (${job.period})`),
    `## Projects`,
    ...projects.map(
      (project) =>
        `- [${project.title}](${siteUrl}/projects/${project.slug}): ${project.subtitle}`
    ),
    `## Contact`,
    ...links.map((link) => `- ${link.label}: ${link.href}`),
    `- CV (PDF): ${siteUrl}${profile.cv}`,
  ].join("\n\n")
  return new Response(body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
