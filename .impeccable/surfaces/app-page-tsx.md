---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

## Scope

The single-page portfolio / online CV (`app/page.tsx`). The whole site, for now.

## Visitor mode

Persuade (with Experience texture — the page's craft is part of the message).

## Audience, job, action

Four readers, one page, no mode switch: recruiters/hiring managers, non-technical
agency screeners, prospective freelance clients, technical peers. Job: decide
whether to reach out. Actions: email (primary), download the CV PDF, open LinkedIn.

## Proof / content

CV content verbatim from `lib/resume.ts` — roles, shipped products, named tech.
No testimonials, logos, screenshots, or metrics exist; do not fabricate them.

## Constraints

English only, one page, static (no form/backend). Two signals must stay legible in
any future change: production conversational-AI work, and end-to-end ownership.

## Chosen direction — "Exploded Assembly"

A build-instruction booklet for one engineer (catalog world
`games-toys-physics-play-brick-build-instructions`, won the roll as a challenger;
seed `c599931a`). Instruction-page sky-blue ground + faint stud grid; white reading
plates; 2px ink keylines; brick-red = the one new capability per step; bolt-blue =
interactive; build-yellow = the parts inventory. Archivo Black display / Archivo
body / mono for counts. Numbered steps down a chronological spine; each role a
"1:1 call-out" of its headline capability. Skills = the parts inventory.

## Memorable moment

The first viewport: name as a heavy set-box masthead, a "pieces in this set" spec
panel, the numbered step-tracker nav. Then each role's "new piece" settling into
place on scroll (one authored motion, motion-safe only).

## Unresolved

- Real GitHub URL and deploy domain (`metadataBase`) are placeholders in code.
- No true-mobile screenshot verification this session (tooling viewport locked).
- Italian version: out of scope unless asked.
