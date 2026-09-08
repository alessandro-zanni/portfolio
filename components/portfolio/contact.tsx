import { links, profile } from "@/lib/resume"

import { TerminalBlock } from "./terminal-block"

export function Contact() {
  return (
    <TerminalBlock id="contact" command="contact --links" title="Contact">
      <p className="text-sm text-muted-foreground">
        Open to full-stack and AI engineering roles. Based in {profile.location}.
      </p>
      <ul className="mt-4 flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.label} className="flex flex-wrap gap-x-3">
            <span className="w-20 shrink-0 text-primary">{link.label}</span>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-foreground/90 underline-offset-4 hover:underline"
            >
              {link.handle}
            </a>
          </li>
        ))}
        <li className="flex flex-wrap gap-x-3">
          <span className="w-20 shrink-0 text-primary">phone</span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-foreground/90 underline-offset-4 hover:underline">
            {profile.phone}
          </a>
        </li>
      </ul>
    </TerminalBlock>
  )
}
