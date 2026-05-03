# WizdomData · Reglas del sistema de elevación

Sistema de superficies por luminosidad para dark mode. Reemplaza el "single-surface dark" actual (todo en `#0C0E12`) por una jerarquía de 5 niveles que reduce la fatiga visual y crea ritmo de lectura.

---

## Tokens disponibles

### Surfaces — orden de elevación creciente

| Token | Hex | Luminosidad | Uso |
|---|---|---|---|
| `surface-0` | `#0C0E12` | 5.7% | Fondo página · base |
| `surface-1` | `#15181E` | 9.4% | Header sticky · footer |
| `surface-2` | `#1A1D24` | 12.5% | Contenedores de cards |
| `surface-3` | `#1F2229` | 15.6% | Cards individuales |
| `surface-4` | `#2A2D33` | 23.5% | Hover · activos · inputs focused |

### Texto

| Token | Hex | Uso |
|---|---|---|
| `text-primary` | `#E8E3D6` | Titulares (H1-H3), CTAs, énfasis |
| `text-secondary` | `#C9C4B7` | Body de párrafo, descripciones largas |
| `text-tertiary` | `#A8A498` | Meta, labels, captions, código inline |

### Borders (reemplazan sombras en dark)

| Token | Valor | Uso |
|---|---|---|
| `border-subtle` | `rgba(232, 227, 214, 0.06)` | Divisores entre secciones |
| `border` (DEFAULT) | `rgba(232, 227, 214, 0.10)` | Bordes de cards en reposo |
| `border-strong` | `rgba(232, 227, 214, 0.18)` | Hover, focus, énfasis |

### Acento — sin cambios

`ambar #E8800C` — solo para: rombo del logo, una palabra de énfasis por viewport, focus state crítico, números de capacidades. **Nunca como fondo extenso.** Regla del brand book: 5-10% del uso total.

---

## Reglas de aplicación

### Regla 1 — Anidación: cada nivel sube exactamente uno

Una card no puede saltar niveles respecto a su contenedor. Si una sección está en `surface-2`, sus cards van en `surface-3`. Las cards en `surface-3` pueden tener un sub-elemento en `surface-4` (input, código inline, badge), pero no más alto.

```
✅ section[surface-2] > card[surface-3] > input-focused[surface-4]
❌ section[surface-0] > card[surface-3]   ← saltó dos niveles
❌ section[surface-2] > card[surface-2]   ← misma luminosidad, no se distingue
```

### Regla 2 — Alternancia entre secciones contiguas

Secciones consecutivas alternan entre `surface-0` y `surface-2`. Esto crea ritmo visual y le dice al ojo "entrás en una zona distinta".

```
hero        → surface-0
por qué     → surface-0  (continuación textual del hero, no rompe)
impacto     → surface-2  (cambia · primera zona estructurada)
postura     → surface-0  (vuelve · sección de texto con divisores)
capacidades → surface-2  (cambia · cards de servicios)
equipo      → surface-0  (vuelve)
contacto    → surface-2  (cierra)
```

### Regla 3 — Header y footer siempre `surface-1`

El header sticky usa `surface-1` con `backdrop-filter: blur(12px)` y opacidad reducida para que el contenido se "sienta" por debajo cuando hay scroll. El footer también `surface-1` para enmarcar cierre.

### Regla 4 — Hover sube exactamente un nivel

```
card en reposo:  surface-3 + border (DEFAULT)
card en hover:   surface-4 + border-strong + translateY(-2px)
```

Sin sombras. La elevación se siente por luminosidad, el `translateY` da el toque kinético.

### Regla 5 — Texto por contexto, no por nivel de surface

- **Titulares (H1-H3)** siempre `text-primary`, en cualquier surface.
- **Body de párrafo largo** siempre `text-secondary` — más cómodo para lectura prolongada que el contraste máximo de bone puro.
- **Meta, labels, captions, código** siempre `text-tertiary`.

No bajar `text-primary` a `text-secondary` "porque la card es más oscura". El cambio de luminosidad de fondo ya da la jerarquía; cambiar el texto también la rompe.

### Regla 6 — Bordes en lugar de sombras

En dark mode las sombras casi no se ven. Reemplazar todo `box-shadow` por `border: 0.5px solid` con el token apropiado:

- Divisores entre secciones: `border-subtle`
- Cards en reposo: `border` (DEFAULT)
- Hover, focus, card "featured": `border-strong`
- Card destacada con acento: `border-color: var(--ambar)` (raro, solo CTA principal)

### Regla 7 — Ámbar es acento, no decoración

Limitar a máximo 1-2 elementos con ámbar por viewport. Si la página tenía ámbar repartido en muchos puntos para "destacarse contra el negro", retirar la mayoría — con la jerarquía de surfaces ya no es necesario gritar.

---

## Mapeo de secciones de la home

| Sección | Fondo | Cards internas | Notas |
|---|---|---|---|
| Header | `surface-1` + blur | — | sticky, border-bottom subtle |
| Hero | `surface-0` | "decision pill" en `surface-2` | el pill ancla el ojo sin competir con el H1 |
| Por qué existimos | `surface-0` | — | texto puro, sin contenedores |
| Lo que cambia (Impacto) | `surface-2` | `surface-3` | grid 2×2 |
| Cómo trabajamos (Postura) | `surface-0` | filas con border-y subtle | alternar para romper ritmo |
| Capacidades | `surface-2` | `surface-3` | grid 2×2, stack pills en `surface-1` |
| Equipo | `surface-0` | `surface-2` | cards más prominentes (perfiles humanos) |
| Contacto | `surface-2` | `surface-3` | card "featured" con `border-strong` |
| Footer | `surface-1` | — | border-top subtle |

---

## Detalles importantes

- **Stack pills (badges de tecnología)** sobre cards en `surface-3`: usar `surface-1` con `border-subtle`. Quedan "hundidos" dentro de la card, lo cual visualmente refuerza que son metadata.

- **Inputs en focus**: `background: surface-4`, `border: 0.5px solid var(--ambar)`, sin glow ni box-shadow.

- **Botón primario**: `background: var(--text-primary)` (Bone), `color: var(--surface-0)`. En hover, `background: #fff`. Es la única vez que aparece blanco puro en la página.

- **Botón ghost**: transparente, `border: 0.5px solid var(--border)`, hover sube a `surface-2` y `border-strong`.

- **Transiciones**: 0.2s ease para todos los hovers de card. 0.15s para links de texto. Nunca más de 0.25s.

- **Mantener todo lo demás del Brand Book v1.0**: tipografía (Inter + JetBrains Mono), border-radius 2px-4px (NO redondeo grande), padding 32px en cards, italics editoriales del wordmark.

---

## Lo que NO hay que hacer

- ❌ No introducir colores nuevos fuera de los tokens listados.
- ❌ No usar `surface-4` como fondo de sección — solo para hover/activos.
- ❌ No agregar sombras.
- ❌ No subir el body text de vuelta a Bone puro "porque se ve más fuerte". El contraste reducido es intencional.
- ❌ No usar ámbar en bordes de cards en reposo, solo en hover de card "featured" o focus de input.
- ❌ No agregar gradientes. La paleta es plana por diseño.
