const items = [
  { href: "#experience", label: "./experience" },
  { href: "#projects", label: "./projects" },
  { href: "#skills", label: "./skills" },
  { href: "#contact", label: "./contact" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 text-xs sm:text-sm">
        <a href="#top" className="font-medium whitespace-nowrap">
          <span className="text-primary">azanni</span>
          <span className="text-muted-foreground">@portfolio</span>
        </a>
        <ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-muted-foreground">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
