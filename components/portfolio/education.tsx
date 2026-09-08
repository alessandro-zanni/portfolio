import { education, languages } from "@/lib/resume"

export function Education() {
  return (
    <section aria-labelledby="education-heading" className="scroll-mt-16">
      <h2
        id="education-heading"
        className="border-b-2 border-ink pb-3 font-display text-lg tracking-tight text-ink uppercase"
      >
        Education &amp; languages
      </h2>

      <ul className="mt-5 flex flex-col divide-y divide-plate">
        {education.map((item) => (
          <li key={item.title} className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-sm font-bold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-0.5 text-xs text-ink-soft">
                {item.school} · {item.location}
              </p>
              <p className="mt-1.5 max-w-[60ch] text-sm text-ink">{item.note}</p>
            </div>
            <span className="font-mono text-xs text-ink-soft sm:text-right">{item.period}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t-2 border-ink pt-4 text-sm">
        {languages.map((lang) => (
          <li key={lang.name}>
            <span className="font-semibold text-ink">{lang.name}</span>
            <span className="text-ink-soft"> — {lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
