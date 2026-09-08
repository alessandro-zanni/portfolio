import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/resume"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const title = `${profile.name} — ${profile.title}`

export const metadata: Metadata = {
  metadataBase: new URL("https://alessandrozanni.dev"),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-mono", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
