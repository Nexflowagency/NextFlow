# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Static export to /out
npm run start    # Serve the production build
npm run lint     # ESLint via Next.js
```

There are no tests in this project.

## Architecture

Nextflow.ai is a **Romanian-language AI agency landing page** built with Next.js 16, React 18, TypeScript, and Tailwind CSS 3. It is configured as a **fully static export** (`output: 'export'` in `next.config.js`), meaning no server-side rendering — every page is pre-rendered to HTML.

### Pages

- `/` — single-page landing site (`app/page.tsx`). Assembles all section components in order and sets up the global scroll-reveal observer.
- `/download` — standalone download page (`app/download/page.tsx`) that serves `public/nextflow-ai.zip`. This page inlines all styles directly rather than using the global CSS.

### Component layout

All section components live in `components/` and are imported in sequence in `app/page.tsx`:

```
Navbar → Hero → ProblemSection → SolutionSection → MetricsSection → HowItWorks → Testimonials → FinalCTA → Footer
```

`CalendlyButton` is rendered globally at the bottom of the page — it injects the Calendly widget script and intercepts any click on an `<a>` whose `href="#cta"` or whose text contains "book", "call", or "demo".

### Styling conventions

All custom utility classes are defined in `app/globals.css` under `@layer components`. Use these instead of re-implementing inline styles:

| Class | Purpose |
|---|---|
| `.container-main` | Max-width 1200px, responsive horizontal padding |
| `.section-py` | Vertical section padding (fluid clamp) |
| `.btn-primary` | Yellow (#F5C518) CTA button |
| `.btn-secondary` | Ghost white button (dark backgrounds) |
| `.btn-ghost-dark` | Ghost dark button (light backgrounds) |
| `.card` | Dark card (#111111, for dark sections) |
| `.card-light` | White card (for light sections) |
| `.section-label` | Green uppercase tag above section headings |
| `.text-gradient-yellow` | Yellow gradient text |
| `.text-gradient-green` | Green gradient text |
| `.dot-grid-bg` | Dark dot-grid background pattern |
| `.dot-grid-light` | Light dot-grid background pattern |
| `.yellow-dot` / `.green-dot` | Small colored status dot |

CSS custom properties (defined in `:root`): `--yellow` (#F5C518), `--green` (#10B981), `--black` (#0B0B0B), `--border-dark`, `--border-light`, etc.

Tailwind is extended with a `brand` color palette, custom `fontSize` scales (`display`, `display-lg`, `h2`, `h3`), and named animations (`fade-up`, `fade-in`, `pulse-soft`).

### Scroll-reveal animation

Any element with the `.reveal` class starts invisible and animates in when it enters the viewport. The observer is set up globally in `app/page.tsx`'s `useEffect`. Add `.reveal-delay-1` through `.reveal-delay-4` for staggered timing (80ms increments).

The `hooks/useScrollReveal.ts` hook provides the same behavior scoped to a ref'd container — use it when a component manages its own reveal without relying on the global observer.

### Calendly integration

`CALENDLY_URL` in `components/CalendlyButton.tsx` must be updated to the live Calendly link before deploying:

```ts
const CALENDLY_URL = 'https://calendly.com/YOUR_USERNAME/30min'
```

All CTA buttons site-wide use `href="#cta"` — `CalendlyButton` intercepts those clicks and opens the Calendly popup. No button needs to directly call the Calendly API.

### Path alias

`@/` resolves to the project root. Components are imported as `@/components/ComponentName`.
