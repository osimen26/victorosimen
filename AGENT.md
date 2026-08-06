# Victor Osimen — Antigravity Agent Context
> Load this file at the start of every session. This is the single source of truth for how to build, design, and ship in this project.

---

## Who I Am
I'm Victor Osimen — a Product Designer, Webflow Developer, and AI Builder based in Lagos, Nigeria. I build digital products using Webflow and AI-powered no-code tools. I do not write traditional code; I use AI agents to generate and manage code on my behalf.

Co-founder of ContentSplitHQ. 3+ years across fintech, real estate, and SaaS.

---

## How to Behave as My Agent

### Communication
- Be direct and output-first. Skip preamble, just build.
- Never explain what you're about to do — just do it.
- When you finish a task, summarise what changed in 3 bullet points max.
- Ask only one clarifying question at a time, and only when truly necessary.
- Use plain language. No jargon, no em dashes (—), no filler phrases.

### Code Quality Rules
- Never use inline styles. All styles go in CSS with token variables.
- Never use arbitrary z-index values (999, 9999). Use a named scale.
- All spacing must use CSS custom property tokens (--sp-1 through --sp-28).
- All colors must use CSS custom property tokens (--c-*).
- All buttons must have min-height: 2.75rem (44px touch target).
- Always add focus-visible outlines for keyboard navigation.
- Always add aria-label to interactive elements without visible text.
- Never animate layout properties (width, height, top, left). Only transform and opacity.
- Always include @media (prefers-reduced-motion: reduce) for every animation.
- Images must always have width and height attributes to prevent CLS.
- No em dashes in copy. Use commas, colons, or full stops instead.
- No numbered section scaffolding (01, 02, 03) — it's a generic AI pattern.
- No eyebrow labels on every section — use them sparingly.

---

## Design System Tokens

### Colors
```css
--c-bg:          oklch(0.09  0.005 265);  /* page background */
--c-bg-1:        oklch(0.11  0.005 265);  /* raised surface  */
--c-bg-2:        oklch(0.135 0.006 265);  /* card            */
--c-bg-3:        oklch(0.16  0.007 265);  /* elevated card   */
--c-text-hi:     oklch(0.93  0.005  70);  /* headings        */
--c-text-md:     oklch(0.76  0.008  70);  /* body copy       */
--c-text-lo:     oklch(0.60  0.006  70);  /* labels          */
--c-text-dim:    oklch(0.47  0.005  70);  /* disabled        */
--c-gold:        oklch(0.72  0.08   75);  /* primary accent  */
--c-gold-dim:    oklch(0.72  0.08   75 / 0.10);
--c-gold-bd:     oklch(0.72  0.08   75 / 0.30);
--c-bd:          oklch(0.93  0      0  / 0.07);
--c-bd-1:        oklch(0.93  0      0  / 0.13);
--c-bd-2:        oklch(0.93  0      0  / 0.22);
```

### Typography
```css
--ff-serif: 'Cormorant Garamond', Georgia, serif;   /* display headings */
--ff-sans:  'Instrument Sans', system-ui, sans-serif; /* body + UI       */
--ff-mono:  'DM Mono', 'Courier New', monospace;     /* labels + code    */
```

### Type Scale (Major Third 1.25×)
```css
--fs-2xs:  0.64rem;
--fs-xs:   0.75rem;
--fs-sm:   0.875rem;
--fs-base: 1rem;
--fs-lg:   1.25rem;
--fs-xl:   1.5rem;
--fs-2xl:  2rem;
--fs-3xl:  2.5rem;
--fs-4xl:  3.25rem;
--fs-5xl:  4.5rem;
```

### Spacing (8px base)
```css
--sp-1: 0.25rem;   --sp-2: 0.5rem;    --sp-3: 0.75rem;
--sp-4: 1rem;      --sp-5: 1.25rem;   --sp-6: 1.5rem;
--sp-8: 2rem;      --sp-10: 2.5rem;   --sp-12: 3rem;
--sp-16: 4rem;     --sp-20: 5rem;     --sp-24: 6rem;
--sp-28: 7rem;
```

### Motion
```css
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--dur-fast:    160ms;
--dur-base:    260ms;
--dur-slow:    500ms;
--dur-enter:   640ms;
```

### Z-index Scale
```css
--z-base:  0;
--z-above: 10;
--z-nav:   50;
--z-modal: 100;
```

### Border Radius
```css
--r-sm: 4px;
--r-md: 8px;
```

---

## Design Principles

### Typography Rules
- Hero/display headings: font-family serif (Cormorant Garamond), font-weight 300, italic for accent words
- Body copy: font-family sans (Instrument Sans), font-size var(--fs-sm) to var(--fs-base)
- Labels, tags, nav links: font-family mono (DM Mono), uppercase, letter-spacing 0.08–0.16em
- Hero font-size ceiling: clamp max ≤ 6rem. Never go above.
- letter-spacing floor: -0.02em on display headings. Never tighter.
- Use text-wrap: balance on h1–h3. Use text-wrap: pretty on body paragraphs.

### Layout Rules
- Section padding: 6rem vertical, 3rem horizontal (desktop). Use tokens.
- Max content width: 1140px centered with margin: 0 auto.
- Two-column grids for most layouts. Three columns for cards/testimonials.
- No nested cards. Cards are used sparingly — only when truly needed.
- Flexbox for 1D layouts, Grid for 2D.

### Motion Rules
- Scroll reveals: use IntersectionObserver. Never gate content on JS — always visible without JS.
- Hero entrance animations: staggered fadeUp with cubic-bezier(0.22, 1, 0.36, 1).
- Hover interactions: transform + border-color only. No layout changes.
- No bounce, no elastic easing. Exponential ease-out only.

### Component Patterns
- Buttons: always use .btn base class + modifier (.btn-primary, .btn-ghost, .btn-dark)
- Project cards: dark background, gold border on hover, translateY(-2px) lift, image scale on hover
- Pills/tags: mono font, uppercase, small border, gold on hover
- Section headings: serif display, weight 300, italic em for accent word in gold

---

## Brand Voice (Copy Rules)
- Active voice always. "I design and ship" not "Design is delivered by me."
- No em dashes. Use commas, colons, or full stops.
- No filler: "innovative", "passionate", "leverage", "synergy" — banned.
- Short sentences. One idea per sentence.
- Specific over vague: "3 years in fintech and real estate" not "years of experience."
- No numbered service cards (01/02/03).

---

## Project: Victor Osimen Portfolio
**File:** `index.html` (single self-contained file)
**Stack:** Vanilla HTML, CSS custom properties, vanilla JS
**No frameworks.** No npm. No build step. Pure HTML/CSS/JS.

### Current Sections (in order)
1. Nav (fixed, glass blur, compact on scroll, mobile drawer)
2. Hero (split grid, photo right, text left, stat card, custom cursor)
3. About (two-column, sticky heading)
4. Services (list layout, gold underline wipe on hover)
5. Selected Works (2-col grid, category filter tabs: All / Webflow / UI/UX / AI Built)
6. Testimonials (3-col cards, serif quotes, pending placeholders)
7. Skills (sticky heading + pill cloud)
8. Strip (gold background CV callout)
9. Contact (centered, large serif heading)
10. Footer (name + social links + copyright)

### Filter Categories (data-category values)
- `webflow` — Webflow-built sites only
- `uiux` — UI/UX design work
- `ai` — AI-built products

### Key IDs
`#about` `#work` `#projects` `#testimonials` `#skills` `#contact`

---

## What NOT to Do
- Do not add frameworks (React, Vue, Tailwind) — this is vanilla HTML/CSS/JS
- Do not use inline styles
- Do not use arbitrary magic numbers for spacing or z-index
- Do not add more than 3 font families
- Do not use em dashes in any copy
- Do not number sections (01, 02, 03)
- Do not add eyebrow labels to every section
- Do not animate layout properties
- Do not gate content visibility on JavaScript

