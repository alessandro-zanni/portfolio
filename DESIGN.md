---
name: Alessandro Zanni Portfolio
description: A CV built as a brick build-instruction booklet — the reader assembles an understanding of one engineer step by step, with dedicated project pages as expansion sheets to the same set.
colors:
  blueprint: "#a9dffb"
  blueprint-line: "#7cc4ef"
  paper: "#ffffff"
  ink: "#10100f"
  ink-soft: "#2a4658"
  brick: "#e02b26"
  bolt: "#0f6fc4"
  stud: "#f5c000"
  plate: "#d7dbde"
  muted: "#cbe9fb"
  on-bolt: "#ffffff"
typography:
  display:
    fontFamily: "Archivo Black, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 7.4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo Black, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo Black, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.16em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tnum"
spacing:
  xs: "0.375rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "4rem"
components:
  action-link-primary:
    backgroundColor: "{colors.bolt}"
    textColor: "{colors.on-bolt}"
    typography: "{typography.body}"
    padding: "10px 16px"
  action-link-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "10px 16px"
  action-link-secondary-hover:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.ink}"
  nav-step:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "4px 8px"
  nav-step-active:
    backgroundColor: "{colors.bolt}"
    textColor: "{colors.on-bolt}"
    padding: "4px 8px"
  plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "20px"
  numeral:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    size: "44px"
  numeral-step:
    backgroundColor: "{colors.bolt}"
    textColor: "{colors.on-bolt}"
    typography: "{typography.title}"
    size: "44px"
  piece-tag:
    backgroundColor: "{colors.stud}"
    textColor: "#141210"
    typography: "{typography.mono}"
    padding: "2px 6px"
  part-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "2px 6px"
---

# Design System: Alessandro Zanni Portfolio

## Overview

**Creative North Star: "The Build-Instruction Booklet"**

The page is the printed instruction sheet that ships inside a brick set. The reader does not browse a portfolio; they follow numbered steps and watch a model of one engineer get assembled — one bright new piece clicking onto the stack per role. Every surface is drawn the way an instruction diagram is drawn: a sky-blue instruction-page ground under a faint stud grid, white reading plates floated on top, and a hard 2px ink keyline around every container. Illustration, not photography — the recurring mark is an isometric 2×2 brick.

The world is deliberately loud in structure and quiet in voice. Colour is rationed to three jobs and never decorates: brick-red marks the single new capability a step adds, bolt-blue is the only thing you can click, build-yellow tags the parts inventory. Type is two families doing opposite jobs — a heavy grotesque (Archivo Black) shouting uppercase headings and step numerals, Archivo carrying every sentence, and monospace reserved for numbers that are data. The layout refuses the dev-portfolio hero and the equal-weight section scroll: the first viewport is a set-box masthead with a spec panel, and the sections are numbered build steps of descending weight.

Confirmed rejections: no hero card, no glossy gradients, no photography, no drop-shadow depth stack, no second interactive colour. Dark mode is not a re-theme — it is "the night build", the same instruction sheet printed on blue-black.

**Key Characteristics:**
- Sky-blue gridded ground; white keylined plates; illustration over image.
- 2px ink keyline is the container grammar — depth is line-work, not shadow.
- Three rationed colours, each with exactly one job.
- Heavy grotesque uppercase for headings and numerals; mono only for counts and dates.
- Content reads as numbered assembly steps; a brick stack grows one piece per role.
- One authored motion: a piece settling into place on scroll-in.

## Colors

A three-signal palette on a single blue ground: everything structural is ink on blueprint-on-paper, and the three chromatic colours (brick, bolt, stud) are each locked to one meaning.

### Primary
- **Bolt Blue** (`#0f6fc4`): The only interactive colour. Every link, the active nav step, the primary button fill, the directional "next piece" arrow, and the focus ring. Never used decoratively and never for text that isn't a link.
- **Brick Red** (`#e02b26`): The "one new capability" mark. The lead brick in every build-step call-out, the newest (top) brick in the assembly stack, and the four marks strip under the nav. Appears once per step and nowhere else.

### Secondary
- **Stud Yellow** (`#f5c000`): The parts-inventory colour. The `PieceTag` count chip, the inventory plate header, and the stud-toned brick beside each inventory bin. It never becomes a page surface or a general accent. Also the text-selection highlight.

### Neutral
- **Blueprint** (`#a9dffb`): The instruction-page ground — the body background, the masthead and colophon fields, and the sticky nav (at 95% opacity over blur).
- **Blueprint Line** (`#7cc4ef`): The stud-grid dots only, drawn as a 1px radial-gradient pattern at 45% opacity on the blueprint ground.
- **Paper** (`#ffffff`): Every reading plate and every keylined chip/button that isn't filled bolt.
- **Ink** (`#10100f`): All primary text, and the 2px keyline on every container. Also the fill of the default `Numeral` marker and the scrollbar-adjacent hard rules.
- **Ink Soft** (`#2a4658`): Secondary text — section notes, metadata, captions, `dt` labels — and the scrollbar thumb.
- **Plate Grey** (`#d7dbde`): 1px internal dividers inside a plate (spec rows, education list). The only soft divider in the system.
- **Muted** (`#cbe9fb`): Hover fill for secondary buttons and inactive nav chips; tint background for inventory part chips (at 50%).

### Dark Mode ("the night build")
The `.dark` class remaps the same token names to a blue-black print: blueprint `#08213c`, blueprint-line `#1c4370`, paper `#0f2b48`, ink `#eef5fd`, ink-soft `#a6c6df`, brick `#ff6152`, bolt `#2f86cf`, stud `#ffcf33`, plate `#5b7ba6`. Roles are identical; only the ink/paper polarity flips. Text sitting on the always-yellow stud fill stays near-black (`#141210`) in both modes by design.

### Named Rules
**The Bolt-Only Rule.** Bolt blue is the only colour that signals "interactive". If it's blue, it's a link, a control, or a directional arrow — never a heading, a rule, or a fill for emphasis. Nothing else in the system is blue-for-clicking.

**The One New Piece Rule.** Brick red appears exactly once per build step — on the single new capability that step adds. It is never used for body text, borders, bullet marks, or decoration. Its scarcity is the argument the page is making.

**The Yellow Is Inventory Rule.** Stud yellow only tags parts and counts. If yellow appears, it is labelling a piece, a bin, or a quantity — it is never a surface, a heading colour, or a general accent.

## Typography

**Display Font:** Archivo Black (with Archivo, Helvetica Neue, Arial fallback) — set via `next/font` as `--font-display`.
**Body Font:** Archivo (with Helvetica Neue, Arial fallback) — `--font-sans`, weights 400/500/600/700.
**Mono Font:** Geist Mono (with `ui-monospace`, Menlo fallback) — `--font-mono`, weights 400/500.

**Character:** A single grotesque superfamily doing two jobs at opposite extremes — Archivo Black as die-cut catalogue lettering, Archivo as plain instruction prose. The mono is the parts-list voice: it only ever speaks in numbers. `font-synthesis-weight: none` — no faux-bold fallback.

### Hierarchy
- **Display** (Archivo Black 400, `clamp(2.35rem, 7.4vw, 4.75rem)`, line-height 0.9, tracking −0.035em, uppercase): The masthead set-name "ALESSANDRO / ZANNI" only. One per page.
- **Headline** (Archivo Black 400, 1.5–1.875rem, tracking-tight, uppercase): Section heads (`SectionHead` `<h2>`), paired with a bolt-filled step numeral.
- **Title** (Archivo Black 400, 1.125rem, tracking-tight, uppercase): The company / project name inside a build step (`<h3>`), and the Education and Colophon sub-heads.
- **Numeral** (Archivo Black 400, 1.5rem, `tabular-nums`): The two-digit step marker inside a 44px keylined square.
- **Body** (Archivo 400, 0.875rem, line-height ~1.6): All prose. Bullets cap at 64ch, blurbs at 62ch, notes at 60ch. The masthead lead steps up to 1–1.125rem.
- **Label** (Archivo 700, 0.72rem, tracking 0.16em, uppercase): Small all-caps field labels ("Pieces in this set", "Colophon"). See not-canonized note.
- **Mono** (Geist Mono 400, 0.7–0.75rem): Dates, role periods, `×N` counts, step indices in the nav. Numbers that are data — never prose, never labels.

### Named Rules
**The Grotesque Numeral Rule.** Archivo Black is reserved for uppercase headings and the step numerals. It never sets a sentence, never runs in sentence case, and never carries body copy.

**The Mono-For-Counts Rule.** Geist Mono is only for a number that is a fact — a date, a period, a quantity, an index. If it isn't countable data, it's set in Archivo.

## Layout

**Container:** `max-w-5xl` (64rem) centred, with `px-5` rising to `sm:px-8`. Every band — masthead, nav, marks strip, main, colophon — shares this measure.

**Vertical rhythm:** Tailwind 4px base scale. The load-bearing steps: `gap-16` (4rem) between main sections, `gap-8` (2rem) between build steps within a section, `gap-4`/`gap-5` inside a step, and `1.25rem` (`p-5`) as the default plate padding. Main content runs `py-14` → `sm:py-20`.

**Grid models:**
- Masthead: `lg:grid-cols-[1fr_17rem]` — lead column plus a fixed 17rem spec plate; single column below `lg`.
- Build step: `grid-cols-[2.75rem_1fr]` — a 44px numeral/stack rail and the content column, joined by a 2px ink connector line that runs between steps.
- Marks strip: 1 / 2 / 4 columns at base / `sm` / `lg`.
- Inventory row: `sm:grid-cols-[13rem_1fr]` — bin name and its part chips.

**Sticky nav:** `sticky top-0 z-40`, `bg-blueprint/95` with `backdrop-blur`, `border-b-2 border-ink`. Step chips right-aligned in a horizontally scrollable list; active step tracked by `IntersectionObserver` (`-45%` top/bottom rootMargin). Sections carry `scroll-mt-16`.

**Stud grid:** the `grid-ground` utility paints a radial-gradient dot pattern at `--grid-unit` (26px) spacing, `center top`, on the blueprint ground. Applied to the masthead, `<main>`, and the colophon.

**Breakpoints:** Tailwind defaults; only `sm` (640px) and `lg` (1024px) are used.

## Elevation & Depth

The system is flat by doctrine. Depth is carried by the 2px ink keyline on every container and by the isometric brick illustrations — not by shadow. Layering reads through the paper plate sitting on the gridded blueprint ground, and through the drawn faces of the bricks.

There is exactly one shadow in the system.

### Shadow Vocabulary
- **Plate lift** (`box-shadow: 0 3px 14px -4px rgba(9, 20, 35, 0.22)`): A single soft, blurred, slightly-offset drop under the white `Plate`. It lifts the reading surface a millimetre off the instruction page. It is not a hard offset shadow and it is the only `box-shadow` any element carries.

### Named Rules
**The Flat-Keyline Rule.** Depth is the 2px ink border and the brick line-work. No element casts a shadow except the `Plate`, whose shadow is soft and blurred (`0 3px 14px -4px`). No hard offset shadows (`Npx Npx 0`) anywhere — that is a different world's costume, not this one's diagram line.

## Shapes

**Corners are square.** Every plate, button, chip, numeral square, and nav element is a hard-cornered keylined box — border-radius 0. The only rounded things in the whole surface are the scrollbar thumb (`999px`) and the four tiny dots inside the nav wordmark brick. The `--radius-*` scale defined in `globals.css` (3 / 5 / 8 / 12px) exists only to keep stock shadcn components coherent and is not part of the portfolio's form language.

**Border weights:**
- **2px ink** — every primary container, button, numeral, nav chip, and section rule (`border-b-2` / `border-t-2`). Also `divide-y-2 divide-ink` for the inventory list.
- **1px ink** — chip-scale parts only (`StackTags`, inventory part chips).
- **1px plate-grey** — soft internal dividers inside a plate (spec rows, education list).

**Signature silhouette — the isometric 2×2 brick.** Drawn in SVG on a `0 0 100 100` viewBox: three rhombus faces (top / left / right) with a 3px ink stroke and `strokeLinejoin: round`, plus four stud ellipses on the top face. Face shading is derived from one tone via `color-mix` — top = tone + 88% white, left = tone + 78% black, right = the tone itself. Tones: `brick`, `bolt`, `stud`, `plate`. The **ghost** variant is the same three faces with no fill and a dashed stroke (`strokeDasharray: "6 5"`) — a piece not yet placed.

## Components

The portfolio ships its own primitives (below). `components/ui/button.tsx` — the stock shadcn button — is present but unused by the portfolio surface; the interactive element is `ActionLink`.

### Buttons — `ActionLink`
A link drawn as an instruction-booklet button.
- **Shape:** hard square, `border-2 border-ink`, padding `10px 16px` (`px-4 py-2.5`).
- **Type:** `text-sm font-semibold uppercase tracking-tight`.
- **Primary:** `bg-bolt` fill, `#ffffff` text. Used for "Email Alessandro" (masthead and contact).
- **Secondary:** `bg-paper`, `text-ink`, keyline only; hover fills `bg-muted`. Used for "Download CV".
- **Interaction:** `transition-transform`, `active:translate-y-0.5` — a physical press-down. No hover lift, no colour shift on primary.

### Nav step chips — `StepTracker`
- **Shape:** `border-2 border-ink`, padding `4px 8px`, `text-xs font-semibold tracking-tight`.
- **Inactive:** `bg-paper text-ink`, hover `bg-muted`.
- **Active** (`aria-current="true"`): `bg-bolt`, `#ffffff` text.
- Each chip carries a mono two-digit index (`text-[0.7rem] opacity-70`) before its label.
- **Theme toggle:** an 8px-square keylined `bg-paper` button at the end of the nav; sun / moon-star icon; `d` key also toggles.

### Chips — parts & counts
- **`PieceTag`** (the count call-out, e.g. "live · 4 channels"): `border-2 border-ink`, `bg-stud`, `font-mono text-[0.7rem]`, near-black text (`#141210`), padding `2px 6px`.
- **`StackTags` / part chip** (tech-stack list): `border border-ink` (1px), `bg-paper`, `text-[0.72rem] font-medium`, padding `2px 6px`.
- **Inventory part chip:** same 1px keyline, `bg-blueprint/50` tint, `text-xs`, padding `4px 8px`.

### Cards / Containers — `Plate`
- **Corner:** square, `border-2 border-ink`.
- **Background:** `bg-paper`, `text-ink`.
- **Shadow:** the single Plate-lift soft drop (see Elevation).
- **Padding:** contextual — `p-3` (call-out), `p-5` (default / spec panel), `p-5 sm:p-7` (contact), `p-4` (inventory rows).

### Inputs / Fields
None — the site is static, with no forms. Contact is a list of `mailto:` / `tel:` / profile links (bolt, underline-on-hover, `underline-offset-4`).

### Navigation
Sticky top bar, blueprint-at-95% over blur, 2px ink base rule. Left: a wordmark — an isometric brick glyph (brick fill, four white dots) plus "A. Zanni" in display uppercase, hidden below `sm`. Right: horizontally-scrollable numbered step chips. Active state is scroll-driven, not click-state.

### Signature Component — the build step & assembly stack
- **`BuildStep`:** a numbered step. The rail column shows the `Numeral` (ink square), then the `AssemblyStack`, then a 2px ink connector line down to the next step. The content column: company (`<h3>` display uppercase), mono period·location, role, then the new-piece call-out inside a `Plate` — `[brick] → [bolt arrow] → [ghost brick]  piece name  [PieceTag]` — then an italic blurb, then bolt-square bulleted achievements, then `StackTags`.
- **`AssemblyStack`:** the model so far. `count` isometric bricks stacked with an 11px vertical rise, 30px each; the top (newest) brick is `brick`-toned, the rest `plate`-toned. Static — it is the visual proof that "the range is real".
- **Compact step:** early/junior roles collapse to a single inline row — small brick, piece name, tag, first bullet — no plate, no stack.
- **`Numeral`:** 44px keylined square, display 1.5rem, `tabular-nums`. `ink` tone (`bg-ink text-paper`) on steps; `bolt` tone (`bg-bolt` + white) on section heads.

### Motion
- **The reveal** (`.reveal-piece`): the one authored motion. Opacity 0 + `translateY(-12px)` → resting, over `0.44s cubic-bezier(0.2, 0.9, 0.25, 1)`, triggered when the step scrolls into view (`IntersectionObserver`). The pre-animation state is applied **only after mount**, so no-JS and pre-hydration render fully visible.
- **`animate-press-set`** (`press-set` keyframe): `scale(1.03)` → `scale(1)` with fade, `0.5s cubic-bezier(0.16, 1, 0.3, 1)`. Used once, on the masthead set-name.
- **`active:translate-y-0.5`** on `ActionLink` — the button press.
- **`prefers-reduced-motion`**: all animation and transition durations are forced to `0.001ms` globally.

**The One Motion Rule.** The page has a single authored motion — a piece settling into place. The assembly stack does not animate; nothing loops; nothing moves on hover. If it moves, it is a piece arriving, once.

## Extending the world: project pages

`/projects` (index) and `/projects/[slug]` (detail) are expansion sheets, not a
different site — the same rules apply, just at a second altitude.

- **Header:** a "back" link (bolt, `ArrowLeft`) replaces the sticky step nav —
  these pages are a branch off the main build, not another step in it.
  Title in display uppercase; status (`shipped` / `in progress`) as a
  `PieceTag`, period in mono, next to it.
- **Cover art:** every project gets a `Plate`-framed cover image, 16:9 (detail)
  or 16:10 (index card). Where no live screenshot exists to show honestly
  (private client work, a UI-less tool), the cover is drawn in-system — flat
  ink-stroke icons on the blueprint grid, plus the isometric brick mark as a
  signature — never a fabricated product photo.
- **Body copy:** case-study prose runs through the same primitives as a build
  step — `##`/`###` in display uppercase, bolt-square bullets, `64ch` measure
  — via the MDX component map in `mdx-components.tsx`, so a `.mdx` file reads
  as part of the instruction booklet, not a generic blog post.
- **Links out:** repo (`ActionLink` secondary, GitHub glyph) and live demo
  (`ActionLink` primary) sit under a 2px ink rule beneath the header, same as
  the masthead's email/CV row.

## Do's and Don'ts

### Do:
- **Do** wrap every container in a 2px ink keyline (`border-2 border-ink`). It is the world's line-work.
- **Do** keep corners square. Reach for the `--radius-*` scale only inside stock shadcn components, never on portfolio surfaces.
- **Do** ration colour: brick = the one new thing, bolt = the one interactive thing, stud = parts and counts. One job each.
- **Do** set headings and step numerals in Archivo Black, uppercase, tight tracking; set every sentence in Archivo.
- **Do** use Geist Mono only for dates, periods, counts, and indices.
- **Do** cap reading measure — body copy at ~62–64ch.
- **Do** float white `Plate`s on the gridded blueprint ground; use the single soft Plate-lift shadow and no other.
- **Do** keep text on any stud-yellow fill at near-black (`#141210`) in both themes.
- **Do** treat dark mode as a polarity flip of the same token names — do not introduce dark-only colours or roles.

### Don't:
- **Don't** add a second interactive colour, or use bolt blue for anything that isn't a link, control, or directional arrow.
- **Don't** use brick red for body text, borders, bullet marks, or decoration — only the one new capability per step.
- **Don't** use any hard offset shadow (`Npx Npx 0`) or stack multiple shadows. This is an instruction diagram, not a neobrutalist surface.
- **Don't** build a hero card or give sections equal visual weight — the page is descending numbered steps.
- **Don't** animate on hover, loop anything, or animate the assembly stack. One motion only.
- **Don't** introduce photography or gradients beyond the stud-grid dot pattern.
- **Don't** set body copy or labels in Archivo Black, or set prose in mono.
