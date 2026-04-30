# WizdomData — Brand Implementation Guide

> Operational rules for implementing the WizdomData brand in code.
> For visual reference and brand philosophy, see `brand-book.html`.
> For canonical token values, see `tokens.css`.

---

## Critical rules — read first

**Always:**
- Use only the tokens defined in `tokens.css`. No hardcoded colors, no hex literals in components.
- Inter for everything except metadata, code, and technical numbers (those use JetBrains Mono).
- Border radius: `2px`. Never `8px`, never `12px`, never `rounded-lg`.
- Borders: `1px solid` using `--rule` or `--rule-strong`.
- Tinta + Bone are dominant (90% of any view). Ámbar is accent only (5–10% maximum).

**Never:**
- Decorative gradients of any kind. No purple→blue, no fades, no glow effects.
- Drop shadows for "depth." A subtle hover shadow on cards is the only exception.
- Generic stock imagery, illustrations of "data flowing," abstract tech graphics.
- Three colors competing for attention simultaneously.
- Ámbar as a background fill on large surfaces. It is a highlight color.
- Border radius greater than 2px on any element.
- The brand voice writing "synergies", "leveraging", "value-add", "soluciones inteligentes", "transformación digital".

---

## Color tokens

All colors live in `tokens.css` as CSS custom properties.

| Token | Hex | Use |
|-------|-----|-----|
| `--tinta` | `#0C0E12` | Primary dark background, primary text on bone |
| `--tinta-2` | `#2A2D33` | Secondary dark, borders on bone, code inline backgrounds |
| `--bone` | `#E8E3D6` | Primary light background, primary text on tinta |
| `--bone-light` | `#F3EFE7` | Subtle elevated surfaces on bone backgrounds |
| `--bone-3` | `#A8A498` | Secondary text on tinta, "Data" in wordmark |
| `--ambar` | `#E8800C` | Brand accent — rombo, focus states, single emphasized words |
| `--mute` | `#6B6A60` | Tertiary text, captions, deep meta |
| `--rule` | `rgba(12,14,18,.12)` on bone / `rgba(232,227,214,.12)` on tinta | Subtle dividers, card borders |
| `--rule-strong` | `rgba(12,14,18,.22)` on bone / `rgba(232,227,214,.22)` on tinta | Active dividers, focused inputs |

### Color pairings (allowed combinations)

Only use these four pairings. Never invent new ones.

1. **Tinta on Bone** — default for light mode body content
2. **Bone on Tinta** — default for dark mode body content
3. **Ámbar on Tinta** — accent on dark backgrounds (recommended)
4. **Ámbar on Bone** — accent on light backgrounds (use sparingly)

**Never:** Ámbar on Bone-3, Ámbar on Tinta-2, Bone-3 on Bone.

---

## Typography

### Families

```css
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

Load both via Google Fonts in the document head. No other fonts.

### Scale (use these, don't invent)

| Class / role | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| `h-display` (hero title) | clamp(48px, 7.5vw, 96px) | 600 | 0.98 | -0.035em |
| `h-1` | 56px | 600 | 1.05 | -0.025em |
| `h-2` (section title) | 40px | 600 | 1.1 | -0.02em |
| `h-3` | 22px | 500 | 1.25 | -0.015em |
| `h-4` | 18px | 500 | 1.3 | normal |
| `body-l` | 17px | 400 | 1.6 | normal |
| `body` | 15px | 400 | 1.65 | normal |
| `meta-mono` | 11px | 400 (mono) | 1.5 | 0.06em |
| `eyebrow` | 11px | 400 (mono) | 1.5 | 0.16em, UPPERCASE |

### When to use mono

JetBrains Mono is for: section numbers (01, 02), metadata labels, stack listings ("dbt · BigQuery"), code blocks, technical specs, eyebrows above section titles, button mono labels in dev contexts.

Mono is **not** for: body copy, headings (ever), prose paragraphs, marketing claims.

### Letter-spacing rules

- Display headlines: tight (`-0.025em` to `-0.035em`)
- Body: default (`normal`)
- Eyebrows and metadata mono: wide (`0.16em`)
- Mono inline labels: medium (`0.06em` to `0.1em`)

---

## Spacing & layout

### Container

```css
max-width: 1280px;
padding-x: 64px (desktop), 28px (mobile <960px);
```

### Spacing scale

Use multiples of 4: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100, 120`. Section padding-y is typically 100–140px on desktop.

### Section structure

Every major section follows this pattern:

```
[ section header — 2-column grid ]
[ left:  eyebrow (sticky)        ] [ right: h-section + body-l ]
[                                                              ]
[ ======== content ======== ]
```

Sections are separated by 1px `--rule` borders, not by background color changes.

---

## Components

### Buttons

Two variants only. Both use `border-radius: 2px`, `padding: 14px 22px`.

**Primary (CTA):**
```css
background: var(--ambar);
color: var(--tinta);
border: 1px solid transparent;
/* hover: background → bone */
```

**Secondary:**
```css
background: transparent;
color: var(--bone);  /* on dark */
border: 1px solid var(--rule-strong);
/* hover: border → bone */
```

No tertiary buttons. No icon-only buttons unless the icon is the rombo.

### Cards (`.ui-card`)

```css
background: var(--bone-light);  /* on bone bg */
border: 1px solid var(--rule);
border-radius: 2px;
padding: 32px;
transition: all 0.2s ease;
```

Hover: `transform: translateY(-2px); box-shadow: 0 12px 28px -16px rgba(12,14,18,.18);`

That subtle hover shadow is the **only** allowed shadow in the system.

### Inputs

Underline style, not boxed:

```css
border: none;
border-bottom: 1px solid var(--rule-strong);
padding: 12px 0 14px;
background: transparent;
/* focus: border-bottom → ámbar */
```

No filled input boxes. No rounded input fields.

### Dividers / decorative element

The brand uses the **mark symbol** (5-aspas diaphragm with ámbar rombo) as a divider in eyebrows and inline lists. Render at 10–14px size between mono-text elements:

```html
<span>Data</span>
<span class="divider"><svg class="mark"><use href="#mark"/></svg></span>
<span>Analytics</span>
```

Never use bullets (`•`), em dashes for visual divisions, or pipe characters (`|`) where the rombo would work.

---

## Logo & mark

### The mark (symbol alone)

5-aspa rotational diaphragm with central ámbar rombo. Defined as SVG symbol in `tokens.css` snippet. Always rendered via `<use href="#mark"/>`.

**Versions:**
- `.mk-tinta` — aspas in tinta (light backgrounds)
- `.mk-bone` — aspas in bone (dark backgrounds)
- `.mk-rombo` — central rombo always ámbar (apply alongside one of the above)

**Minimum sizes:**
- Symbol alone: 16px
- Lockup (symbol + wordmark): 120px wide

### Wordmark

```html
<span class="wm">
  <em>Wizdom</em><span>Data</span>
</span>
```

Where `Wizdom` is in current foreground (bone or tinta) and `Data` is `--bone-3` (a softer secondary color). The italic `<em>` has `font-style: normal` overridden — it's a semantic emphasis, not visual italic.

### Don'ts

- Never recolor the rombo to anything except ámbar.
- Never stretch, skew, rotate (except the controlled hero animation), or recolor aspas to non-brand colors.
- Never apply gradients, shadows, or outlines to the mark.
- Never put the mark on photos or busy backgrounds without sufficient quiet space.

---

## Voice & copy

This is enforced in copy reviews, but it affects component design (line lengths, label tone, CTA verbs).

### Rules

- Direct, not flowery.
- Technical when it matters, clear always.
- Verbs active, not passive.
- One idea per sentence.
- Name tools by name (dbt, BigQuery, Power BI) — not "modern technologies" or "leading platforms".
- Spanish for all client-facing copy unless explicitly bilingual context.

### Banned phrases

`soluciones inteligentes`, `transformación digital`, `data-driven`, `synergies`, `leverage`, `value-add`, `empoderamos`, `insights accionables` (use `decisiones` instead), `de punta`, `vanguardia`, `next-gen`, `revolucionario`.

### CTA verbs (preferred)

`Conversemos un proyecto`, `Hablemos`, `Contanos el problema`, `Empezar discovery`, `Solicitar propuesta`.

Avoid: `Agenda una reunión` (SaaS-y), `Get started`, `Learn more`, `Click here`, `Aprende más`.

---

## Accessibility minimums

- Body text contrast ratio ≥ 4.5:1 (Bone on Tinta = 14.7:1, well above)
- Bone-3 on Tinta = 7.2:1 — OK for body text but not for fine print under 12px
- Mute on Tinta = 4.6:1 — only for non-essential text, captions
- Ámbar on Tinta = 6.1:1 — OK for body text and CTAs
- All interactive elements: focus state with 2px ámbar outline or border change
- All images: descriptive `alt`. Mark SVG: `aria-hidden="true"` (it's decorative when paired with wordmark text)

---

## Anti-patterns to detect & reject

When reviewing or generating code, flag and replace these patterns:

| Pattern | Replacement |
|---|---|
| `border-radius: 8px` (or higher) | `border-radius: 2px` |
| `linear-gradient(...)` for backgrounds | Solid `--tinta` or `--bone` |
| `box-shadow: 0 4px 12px ...` (general use) | Remove. Only `.ui-card:hover` uses shadow. |
| `font-family: 'Roboto'`, `'Open Sans'`, `'Poppins'` | `Inter` or `JetBrains Mono` |
| Multiple bright colors (red + green + blue) | Tinta + Bone + ámbar accent only |
| `color: #00C4FF` or any cyan/electric blue | This is the OLD palette. Replace with brand tokens. |
| `<button>` with gradient background | `.btn-primary` (ámbar solid) or `.btn-secondary` (outline) |
| Decorative emoji (✨🚀💡) in UI | Remove. Use the rombo divider if a separator is needed. |
| Placeholder Latin (lorem ipsum) in committed code | Replace with real copy or `// TODO: copy from JI`. |

---

## File structure conventions

```
src/
├── styles/
│   ├── tokens.css         ← imported first, defines all CSS variables
│   └── globals.css        ← uses tokens, never defines raw colors
├── components/
│   └── *.tsx              ← uses Tailwind classes mapped to tokens, OR CSS modules referencing tokens
└── ...
```

If using Tailwind, the `tailwind.config.ts` must extend the theme using the tokens — never inline hex values:

```ts
theme: {
  extend: {
    colors: {
      tinta: 'var(--tinta)',
      bone: 'var(--bone)',
      ambar: 'var(--ambar)',
      // ...
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    borderRadius: {
      DEFAULT: '2px',  // override Tailwind's default
    },
  }
}
```

---

## When in doubt

1. Check `brand-book.html` for visual reference.
2. Check `tokens.css` for the canonical value.
3. If a pattern isn't covered here, default to: **less ornamentation, more typography, more whitespace**.
4. Editorial sobriety wins. The brand is built on restraint.
