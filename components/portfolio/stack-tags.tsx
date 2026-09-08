/** The tech stack for a step, rendered as small keylined part chips. */
export function StackTags({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="border border-ink bg-paper px-1.5 py-0.5 text-[0.72rem] leading-none font-medium text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
