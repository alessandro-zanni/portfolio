import type { Metadata } from "next"
import { Archivo, Archivo_Black, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/resume"
import { cn } from "@/lib/utils"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

const title = `${profile.name} — ${profile.title}`

// Set NEXT_PUBLIC_SITE_URL at deploy to the real domain; the fallback only
// affects absolute URLs in OG/Twitter tags.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alessandrozanni.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.pitch,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title,
    description: profile.pitch,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.pitch,
  },
}

// Direction contract — survives the production build as emitted markup.
const DIRECTION_CONTRACT = `<!--
IMPECCABLE DIRECTION CONTRACT · seed c599931a

THESIS: This CV is a build-instruction booklet — the reader assembles an
understanding of one engineer step by step. It refuses the dev-portfolio hero
and the equal-weight section scroll.

OWN-WORLD: Instruction-page sky-blue ground under a faint stud grid; white
reading plates; 2px ink keylines on every container; brick-red marks the one
new capability each step adds; bolt-blue is the only interactive colour;
build-yellow tags the parts inventory. Heavy grotesque numerals (Archivo
Black), Archivo body, mono only for counts and dates. Isometric-brick motif,
wordless arrows, a stack that grows one brick per role.

STORY: The visitor sees someone who owns whole products and ships production
conversational AI; believes the range is real because each step visibly clicks
another piece onto the stack; emails him or downloads the CV.

FIRST VIEWPORT: No hero card. A set-box masthead — "ALESSANDRO ZANNI" as the
set name in heavy grotesque on gridded blue; one plain-English lead line; a
"pieces in this set" spec panel; email (bolt, filled) and download CV (white,
keyline) on one printed rule; the numbered step-tracker nav directly below.

FORM: "Brick build-instruction booklet" — catalog challenger, won the roll on
product clarity; ranked #2 of 7 grounded directions. Seed key c599931a.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.
-->`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        archivo.variable,
        archivoBlack.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
