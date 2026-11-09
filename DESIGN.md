---
name: Carlos Eduardo Portfolio
description: Dark proof-deck portfolio for a web developer — Signal Lime progress, Pulse Rose energy, recruiter-ready evidence.
colors:
  signal-lime: "#23ce6b"
  pulse-rose: "#E31F71"
  underline-blue: "#016fb9"
  studio-charcoal: "#212121"
  card-graphite: "#2b2b2b"
  soft-paper: "#f5f5f5"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Red Hat Display, sans-serif"
    fontSize: "7rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Red Hat Display, sans-serif"
    fontSize: "4rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Red Hat Display, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1rem"
  body:
    fontFamily: "Red Hat Display, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Red Hat Display, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  pill: "2rem"
  card: "1.2rem"
  contact: "1.4rem"
  field: "1.6rem"
  photo: "15%"
  toggle: "100px"
spacing:
  xs: "0.6rem"
  sm: "1rem"
  md: "1.8rem"
  lg: "2rem"
  xl: "5rem"
  section: "12rem"
  section-lg: "15rem"
  gutter: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "1.4rem 6rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.pure-white}"
  button-nav-cv:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 5rem"
  button-nav-cv-mobile:
    backgroundColor: "{colors.pulse-rose}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 5rem"
  card-project:
    backgroundColor: "{colors.card-graphite}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.card}"
    padding: "1rem"
  card-project-hover:
    backgroundColor: "{colors.pulse-rose}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.card}"
    padding: "1rem"
  contact-chip:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.studio-charcoal}"
    rounded: "{rounded.contact}"
    padding: "1.6rem 2.8rem"
  contact-chip-hover:
    backgroundColor: "{colors.pulse-rose}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.contact}"
    padding: "1.6rem 2.8rem"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.field}"
    padding: "1rem 2rem"
  nav-link:
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    padding: "0.6rem"
---

# Design System: Carlos Eduardo Portfolio

## Overview

**Creative North Star: "The Living Proof Deck"**

This is a dark, recruiter-facing portfolio that behaves like a living deck of proof: real projects, a clear personal brand mark, and kinetic accents that signal continuous evolution. The interface stays secondary to the evidence — name, photo, project cards, CV, and contact paths lead.

Personality is professional, confident, and kinetic. Density is medium-comfortable: generous section gaps, readable body type, and a particle field that adds atmosphere without competing with content. The system rejects purple-on-white SaaS templates and warm cream / terracotta editorial newspaper looks.

**Key Characteristics:**
- Dark-first Studio Charcoal canvas with optional Soft Paper light theme
- Single progress accent (Signal Lime) for CTAs, logo initials, and role emphasis
- Pulse Rose reserved for hover energy and mobile CTA contrast
- One type family (Red Hat Display) across all roles
- Soft pill CTAs + graphite project cards that lift and blush on hover
- Particle backdrop as ambient depth, not primary imagery

## Colors

A dark proof-deck palette: charcoal stage, lime signal, rose pulse, blue underline.

### Primary
- **Signal Lime** (`#23ce6b`): Primary action and progress signal — buttons, logo first/second letters, role title (`h3` in hero), contact chips at rest, theme toggle track (dark mode), tech-link underlines. Rarity matters: keep it as the affirmative voice, not wallpaper.

### Secondary
- **Pulse Rose** (`#E31F71`): Kinetic energy — project card hover fill, contact chip hover, theme toggle when light mode is active, mobile nav CV button. Appears when something is interactive or “alive.”

### Tertiary
- **Underline Blue** (`#016fb9`): Structural accent — section title underline on About (`border-bottom` on `h2`), folder icon color in project headers. Marks structure, not conversion.

### Neutral
- **Studio Charcoal** (`#212121`): Default page background and dark text on light surfaces / on lime chips.
- **Card Graphite** (`#2b2b2b`): Project cards and footer surface — one step above the canvas.
- **Soft Paper** (`#f5f5f5`): Light-theme body background.
- **Pure White** (`#FFFFFF`): Primary text on dark, form borders/placeholders, button labels.

### Named Rules
**The Signal Rarity Rule.** Signal Lime drives conversion and identity accents (CTA, logo letters, role). Do not flood large backgrounds with it.

**The Pulse-On-Interaction Rule.** Pulse Rose appears primarily as a response (hover, toggle-on, mobile CTA contrast), not as the resting brand field.

## Typography

**Display Font:** Red Hat Display (with sans-serif fallback)  
**Body Font:** Red Hat Display (with sans-serif fallback)  
**Label/Mono Font:** same family (no distinct mono)

**Character:** A single geometric humanist sans — clear for recruiters, slightly technical, never decorative. Root `html` uses `62.5%` so `1rem ≈ 10px`.

### Hierarchy
- **Display** (400, `7rem` / `5rem` ≤960px, ~1.1): Hero name only (`h1`).
- **Headline** (400, `4rem`, ~1.2): Section titles — Portfólio, Contato.
- **Title** (500, `1.8rem`, letter-spacing `0.1rem`): About body paragraphs and secondary emphasis.
- **Body** (400, `1.6rem`): Default running text; hero greeting / resume lines at `1.8rem`.
- **Label** (500, uppercase nav / form submit, tech list at `1.4rem` with opacity `0.6`): Navigation, buttons, meta tags on cards.

### Named Rules
**The One Voice Type Rule.** Never introduce a second display family. Hierarchy is size, weight, case, and color — not font shopping.

## Layout

Horizontal gutters `10rem` on main (`4rem` ≤740px, `2rem` ≤360px). Header pads `1.8rem 10rem` (`1.8rem 3rem` ≤960px). Sections stack with large vertical rhythm: About `margin-top: 12rem`, Portfolio `15rem`, Contact `20rem`, Footer `15rem`.

Hero is a two-column flex (`gap: 8rem`) until `960px`, then stacks and hides the illustration. About is a two-column grid until `960px`. Portfolio is a 3-column card grid → 2 at `960px` → 1 at `740px`. Contact chips sit in a centered row that stacks on small screens.

Fixed header with `scroll-padding-top: 10rem` keeps in-page anchors clear of the bar. Mobile navigation is a full-viewport overlay tinted Signal Lime.

### Named Rules
**The Recruiter Scan Rule.** First viewport = brand name + role + one CTA + one dominant image. Defer projects, stats, and contact details below.

## Elevation & Depth

Hybrid flat + motion + blur. Surfaces are mostly flat tonal layers (Charcoal → Graphite). Depth comes from: frosted fixed header (`backdrop-filter: blur(6px)`, translucent `#21212150`), particle field behind content (`z-index: -1`), and card hover lift (`translateY(-5px)`). No multi-layer drop-shadow vocabulary.

### Shadow Vocabulary
- None as a reusable token. Prefer tonal shift + transform over `box-shadow`.

### Named Rules
**The Flat-By-Default Rule.** At rest, surfaces are flat. Elevation appears as interaction (card lift / color blush) or chrome (header blur), not decorative shadow stacks.

## Shapes

Soft and approachable, never sharp-corporate. CTAs are near-pills (`border-radius: 2rem`). Cards use gentle rounding (`1.2rem`). Contact chips `1.4rem`, form fields `1.6rem`. Profile photo uses organic rounding (`15%`) with grayscale → color on hover. Theme toggle is fully pill (`100px`) with a circular knob.

Borders are minimal: white 1px strokes on dark form fields; blue underline under About `h2`; green underline on in-copy project links.

### Named Rules
**The Soft Affordance Rule.** Interactive primary elements are pill-soft; content cards are softer rectangles — never hard 0-radius chrome.

## Components

### Buttons
Confident and kinetic.
- **Shape:** Pill soft (`2rem`)
- **Primary:** Signal Lime fill, white text, weight 500; hero padding `1.4rem 6rem`; form submit uppercase `1rem 6rem`
- **Hover / Focus:** `filter: brightness(0.8)` on `.button` / `button` (0.25s). Prefer `:focus-visible` rings in future work without inventing a new accent.
- **Nav CV:** Same lime pill, tighter padding `0.6rem 5rem`; on mobile overlay becomes Pulse Rose for contrast against lime menu field

### Cards / Containers
- **Corner Style:** Soft (`1.2rem`)
- **Background:** Card Graphite → Pulse Rose on hover
- **Shadow Strategy:** None; lift `translateY(-5px)` on hover (0.25s)
- **Border:** None
- **Internal Padding:** `1rem`; flex column with footer tech list pushed to bottom (`margin-top: auto`)

### Inputs / Fields
- **Style:** Transparent fill, white 1px border, pill-soft (`1.6rem`), padding `1rem 2rem`, weight 600, white placeholder; width `60rem` desktop / full width ≤740px
- **Focus:** Outline removed (`outline: none`) in incumbent — preserve look; improve a11y with visible focus without changing brand colors
- **Light theme:** Border and text shift to Studio Charcoal

### Navigation
- Fixed frosted bar; links uppercase, weight 500, white, hover brightness 0.6
- Logo wordmark with Signal Lime on first letters of first/last name
- Theme switch: lime track → Pulse Rose when checked
- ≤960px: hamburger; full-screen Signal Lime nav; CV button Pulse Rose

### Contact chips
- Signal Lime panels with charcoal text; hover Pulse Rose + white text; icon + mailto/tel

### Signature: Particle stage
- Full-bleed `tsparticles` behind main content; interactive push on click; stays behind (`z-index: -1`) so proof content always wins

### Signature: Profile photo
- Grayscale at rest, color on hover (0.5s); rounded `15%`; about column visual anchor

## Do's and Don'ts

### Do:
- **Do** keep Signal Lime as the affirmative CTA / identity accent and Pulse Rose as interaction energy.
- **Do** lead with name, role, and proof (projects, CV, real contacts) over decorative chrome.
- **Do** preserve Red Hat Display as the sole family and the dark-first / Soft Paper dual theme.
- **Do** use large section rhythm and the 3→2→1 project grid breakpoints already in code.
- **Do** treat the particle field and header blur as ambient depth only.

### Don't:
- **Don't** introduce a second accent family (purple gradients, terracotta/cream editorial, neon rainbow).
- **Don't** invent testimonials, fake metrics, or unverified client claims in the UI.
- **Don't** cover hero media with floating badges, stat strips, or promo chips.
- **Don't** replace soft pill CTAs with sharp rectangular “enterprise” buttons without an explicit redesign.
- **Don't** let particles, icons, or motion overpower project evidence or contact paths.
