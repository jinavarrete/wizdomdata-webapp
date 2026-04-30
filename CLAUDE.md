# Project: WizdomData Website

## What this is

Marketing website for WizdomData, a Chilean data analytics consultancy.
Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Brand

**Before touching any styles, components, or copy: read `brand/BRAND.md`.**

That document defines all visual rules, color tokens, typography scale, voice/tone,
and anti-patterns. It is the single source of truth for "how does this look and sound."

The canonical CSS variable values live in `brand/tokens.css` — never hardcode colors
or font sizes in components. If a value isn't in tokens.css, propose adding it there
before using it inline.

The visual brand book (`brand/brand-book.html`) is for human reference. Open it in a
browser to see how the brand is supposed to feel. Don't try to parse it for rules —
those are extracted into `BRAND.md` already.

## Tailwind

`tailwind.config.ts` extends the theme using brand tokens. Always use Tailwind classes
that map to those tokens (`bg-tinta`, `text-bone`, `border-rule`) rather than arbitrary
values (`bg-[#0C0E12]`). If a brand value is missing from the Tailwind config, add it
to the config — don't bypass with `[arbitrary]` syntax.

Border radius default is `2px` (set in config). Never use `rounded-lg`, `rounded-xl`,
or any radius greater than 2px on brand elements.

## Voice rules (when writing copy or microcopy)

- Spanish for client-facing copy.
- Direct, technical when it matters, never flowery.
- Banned phrases (do not use): `soluciones inteligentes`, `transformación digital`,
  `data-driven`, `synergies`, `leverage`, `value-add`, `empoderamos`, `de punta`.
- See `brand/BRAND.md` § "Voice & copy" for the full list and CTA verbs.

## Things this site does NOT include in v1

Do not generate placeholder content for these — they were intentionally removed:

- Casos de éxito section (no fake case studies)
- "+10 years experience" or any inflated metrics
- Stats blocks like "50+ projects", "100% satisfaction", "24/7 support"
- Logos of past clients (no permission yet)
- Testimonials
- "Valores corporativos" / corporate values listicles
- Blog or resources section

If asked to add any of these, push back and ask whether real content is now available.

## Component conventions

- Components live in `app/components/`
- Each component is a single `.tsx` file
- Use semantic HTML first; reach for divs only when no semantic element fits
- Animations: Framer Motion is available, but use it for high-impact moments
  (one staggered hero reveal, scroll-triggered section entrances) — not for every element
- The mark/logo SVG should be defined once as a `<symbol>` in a top-level layout
  and referenced via `<use href="#mark"/>` everywhere else

## When making changes

1. Read `brand/BRAND.md` if you're touching anything visual.
2. Check `tokens.css` for the canonical value before introducing a new one.
3. Run `npm run lint` before committing.
4. If a change requires a new token (color, size, spacing), add it to `tokens.css`
   AND `tailwind.config.ts` in the same change — keep them in sync.

## Things to push back on

If the user asks for any of the following, ask for clarification before doing it —
these conflict with the brand:

- Adding gradient backgrounds anywhere
- Increasing border-radius beyond 2px
- Using a font other than Inter or JetBrains Mono
- Adding a third primary color to the palette
- Drop shadows for general "depth" (only `.ui-card:hover` may have a shadow)
- Stock illustrations of "data flowing" or generic tech imagery
- Marketing claims with numbers that aren't real

## Deployment

Site deploys to Vercel from the `main` branch.

## Owner contact

Juan Ignacio Navarrete — co-founder, primary technical contact.
