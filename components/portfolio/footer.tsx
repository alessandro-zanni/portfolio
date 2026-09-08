export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 py-10 text-xs text-muted-foreground">
      <p>
        <span className="text-primary">~/alessandro</span>
        <span className="text-muted-foreground/60"> $ </span>
        <span className="animate-caret select-none">_</span>
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} Alessandro Zanni · built with Next.js · press{" "}
        <kbd className="rounded border border-border px-1">d</kbd> to toggle theme
      </p>
    </footer>
  )
}
