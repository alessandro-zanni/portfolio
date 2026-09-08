export function Colophon() {
  return (
    <footer className="grid-ground border-t-2 border-ink">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <p className="text-[0.72rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
          Colophon
        </p>
        <p className="mt-2 max-w-md text-sm text-ink">
          Set in Archivo. Built, drawn, and maintained by Alessandro Zanni — the
          instructions and the model both.
        </p>
        <p className="mt-4 font-mono text-xs text-ink-soft">
          © {new Date().getFullYear()} Alessandro Zanni · Next.js · self-hosted
        </p>
      </div>
    </footer>
  )
}
