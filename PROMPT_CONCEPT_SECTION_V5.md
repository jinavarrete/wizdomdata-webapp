# Prompt para Claude Code · Sección "El Concepto" v5

> Animación de nebulosa de datos que converge en el rombo ámbar.
> Va entre el Hero y "Por qué existimos".
>
> Mockup de referencia: `reference/concepto-mockup-v5.html`
> (Versión v5 = v4 con contraste corregido en data bits y frase de cierre.)

---

## 0 · Setup previo

Antes de abrir Claude Code:

1. Copiá el mockup al repo en `reference/concepto-mockup-v5.html`.
2. Si todavía no aplicaste el recorte de copy (`COPY_RECORTADO_V2.md`),
   te recomiendo hacer ese trabajo PRIMERO en su propia rama y mergearlo.
   Esta sección se agrega encima de la web ya recortada.
3. Hacé commit del estado actual en una rama nueva:

```bash
git checkout -b feature/concept-section
git add reference/concepto-mockup-v5.html
git commit -m "chore: add concept section v5 mockup as reference"
```

---

## 1 · Prompt principal (Fase 1 · Plan)

Pegá esto como primer mensaje en Claude Code:

---

```
Vamos a agregar una sección nueva a la web: "El concepto". Es una
animación SVG/HTML que demuestra visualmente la tesis del sitio
(datos dispersos → rombo ámbar como insight → decisión revelada).

Antes de tocar código, leé:
1. `CLAUDE.md` y `brand/BRAND.md` (deberían existir del trabajo
   anterior — confirmá).
2. `reference/concepto-mockup-v5.html` ENTERO. La sección a replicar
   es la `<section class="concept">` y todo su JS asociado.

CONTEXTO DEL COMPONENTE:
- Va entre el Hero y la sección "Por qué existimos" (Narrative).
- Aspect ratio 16/10 en desktop, 4/5 en mobile.
- No tiene entrada en el navbar — se descubre al hacer scroll.
- Trigger: scroll-triggered con IntersectionObserver (umbral 0.3).
- Loop: spawning (5.5s) → converging (1.5s) → revealed (4s) →
  resetting (1.8s) → repite.
- Respeta prefers-reduced-motion: en ese caso muestra estado
  estático con rombo y decisión visibles, sin loop.

NOTAS DE CONTRASTE (importantes):
La v5 tiene ajustes específicos de contraste. NO los recortes:
- Los data bits usan color `var(--bone)` (NO bone-3). El bone-3
  daba contraste insuficiente y era ilegible.
- Las opacities mínimas son 0.55 (nunca menos). Tres tiers:
  pequeño (10px / 0.55), medio (12px / 0.7), grande (14px / 0.9).
- La frase de cierre usa `var(--bone)` también (NO bone-3),
  tamaño 13px, opacity base 0.7, opacity iluminado 1.0.

RESPONDEME PRIMERO (sin tocar código todavía):

A. ¿Cómo vas a estructurar el componente?
   - ¿Un solo `Concept.tsx` o lo separás en sub-componentes?
   - ¿Dónde va la lógica del ciclo de animación? Hook custom?
   - ¿Cómo manejás el cleanup del IntersectionObserver, los
     setTimeouts, y los DOM nodes generados al desmontar?

B. ¿Qué decisiones técnicas tomás sobre las animaciones?
   - El mockup usa setTimeout + clases CSS + transitions.
   - Framer Motion ya está en el proyecto. ¿Lo usás acá o no?
   - Mi recomendación: NO uses Framer Motion para los data bits
     (serían cientos de elementos, sobrecarga). SÍ podés usarlo
     para el rombo y la decisión revelada (pocos elementos).

C. ¿Identificaste algún conflicto con el resto del proyecto?
   - Z-index conflicts con el navbar sticky.
   - SSR issues (window/document references en useEffect).
   - Performance: 25-30 DOM nodes con drift transitions.

D. ¿Algún token del mockup que no esté ya en `brand/tokens.css`?

No empieces a codear hasta que apruebe tu plan.
```

---

### Qué validar en la respuesta

Lo que esperás ver:

- **Estructura propuesta:** un solo `Concept.tsx` con un hook custom
  (`useConceptAnimation`) que maneja el ciclo. Los data bits se generan
  dinámicamente.
- **Decisión sobre Framer Motion:** debería evitarlo para los bits y
  opcionalmente usarlo para el rombo. Si te dice "uso Framer Motion para
  todo", pedile que lo reconsidere.
- **Cleanup:** debería mencionar `useEffect` con función de cleanup que
  limpie el observer, los timeouts, y resetee el estado al desmontar.
- **SSR:** debería mencionar que la animación arranca en `useEffect`
  (client-side). Si no lo menciona, preguntale.

Si la respuesta es satisfactoria, mandás el siguiente prompt.

---

## 2 · Prompt de implementación (Fase 2)

```
Bien, avanzá con la implementación. Reglas:

1. UBICACIÓN:
   - Componente principal: `app/components/Concept.tsx`
   - Hook custom (si lo separás): `app/hooks/useConceptAnimation.ts`
   - Estilos: CSS Modules (`Concept.module.css`). Para este caso son
     mejores que Tailwind puro porque hay keyframes complejos y
     transiciones con estados encadenados.

2. INTEGRACIÓN:
   - Importá Concept en `app/page.tsx`.
   - Insertalo entre <HeroSection /> y <Narrative />.
   - NO agregues anchor en el navbar — esta sección no es navegable
     directamente.

3. NO TRADUCIR el mockup literalmente:
   - El mockup tiene un `<div class="status">` (debug) — NO lo
     incluyas en producción.
   - El mockup tiene `<div class="spacer-top">` y `spacer-bottom` —
     son simulación, NO los incluyas.

4. RESPETO AL BRANDBOOK:
   - Todos los colores vienen de `brand/tokens.css` (var(--ambar),
     var(--bone), etc.).
   - Cero hex literales en el componente.
   - El símbolo del rombo es un path SVG simple (`M50 12 L88 50
     L50 88 L12 50 Z`) — NO uses el sprite del logo completo, este
     rombo está intencionalmente solo (sin las aspas).

5. CONTRASTE — REGLAS NO NEGOCIABLES:
   - Data bits: color `var(--bone)`. Opacity mínima 0.55. Nunca menos.
   - Tres tiers de tamaño: 10px / 12px / 14px (mobile -1px cada uno).
   - Frase de cierre: color `var(--bone)`. Tamaño 13px. Opacity base
     0.7, opacity al iluminarse 1.0.
   - Estos valores NO son sugerencias estéticas — son requisitos de
     accesibilidad (WCAG AA).

6. ACCESIBILIDAD:
   - El stage con `role="img"` y `aria-label` descriptivo:
     "Animación: datos dispersos convergiendo en una decisión central."
   - Los data bits con `aria-hidden="true"` (decoración).
   - Detectar prefers-reduced-motion vía
     `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
   - En reduced-motion: mostrar estado estático (rombo + decisión
     visibles, ~10 data bits sin movimiento).

7. PERFORMANCE:
   - `will-change: transform, opacity` solo en bits activos.
   - Limitá pool de bits activos a máximo 30 simultáneos. Si se
     acumulan más, eliminá los más viejos antes de spawnear nuevos.
   - El IntersectionObserver se desconecta después del primer trigger
     (no necesitamos re-triggers).

8. CONFIGURACIÓN exportable:
   - Las constantes del ciclo (duraciones, cantidad inicial de bits,
     pool de datos) viven en un objeto `CONFIG` al inicio del
     componente, fáciles de tunear sin tocar lógica.

CUANDO TERMINES:
A. Mostrame el diff completo (Concept.tsx, hook si lo separaste,
   page.tsx, CSS).
B. Confirmá que `npm run dev` levanta sin errores y la animación
   se ve correctamente. Hacé scroll a la sección y verificá:
   - Spawn inicial denso (~20 bits)
   - Bits con buen contraste, legibles
   - Drift sutil
   - Convergencia al centro
   - Rombo aparece con pulse (scale 0.6 → 1.15 → 1)
   - Decisión revelada queda 4s
   - Frase de cierre cambia de opacity 0.7 a 1.0 al iluminarse
   - Reset y nuevo ciclo
C. Test mobile (DevTools, ~390px viewport): aspect ratio cambia a
   4/5, decisión se posiciona correctamente, contraste se mantiene.
D. Build limpio: `npm run build` sin errores ni warnings.

Stop después del diff. Yo apruebo y vos commiteás.
```

---

## 3 · QA visual (después de implementar)

```
Antes del commit, hagamos QA visual.

Preview en localhost:3000. Compará contra
`reference/concepto-mockup-v5.html` en pestañas adyacentes.

CHECKLIST:
[ ] Eyebrow "El concepto" centrado, mono ámbar 11px
[ ] Stage con grid background sutil (radial gradient mask)
[ ] Bits con tres tamaños (10/12/14px) y tres opacities (0.55/0.7/0.9)
[ ] Bits son LEGIBLES — los más chicos no se desvanecen al fondo
[ ] Distribución radial (centro vacío para el rombo)
[ ] Drift sutil constante (transform sobre 8-14s)
[ ] Convergencia: bits colapsan al centro con scale(0.3)
[ ] Rombo aparece con animación de pulse (scale 0.6 → 1.15 → 1)
[ ] Glow ámbar radial sutil detrás del rombo
[ ] Decisión: pill mono ámbar + frase con "segmento B" y
    "+12% revenue Q3" en ámbar itálica
[ ] Frase de cierre: "Eso es lo que hacemos. Encontrar la decisión
    en los datos que ya tienes."
[ ] Frase de cierre LEGIBLE en estado base (opacity 0.7)
[ ] Frase de cierre claramente más visible al iluminarse (opacity 1.0)
[ ] Reset suave: decisión y rombo se desvanecen, vuelve el caos
[ ] Loop continuo

TEST prefers-reduced-motion:
1. DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce
2. Recargar
3. Verificar: estado estático con rombo y decisión visibles, ~10 data
   bits sin movimiento, sin loop.

TEST mobile (~390px):
[ ] Aspect ratio cambia a 4/5
[ ] Bits siguen legibles a tamaños reducidos
[ ] Decisión no se sale del viewport
[ ] No hay scroll horizontal

Si algo falla, lo ajustamos antes del commit.
```

---

## 4 · Commit y deploy

```bash
git add .
git commit -m "feat: add concept section with data convergence animation

- New Concept.tsx component between Hero and Narrative
- SVG + CSS animation (no canvas, no Three.js, no heavy libs)
- Scroll-triggered with IntersectionObserver
- Loop: spawning → converging → revealed → resetting (~13s cycle)
- Contrast-corrected data bits (var(--bone), min opacity 0.55)
- Respects prefers-reduced-motion (static state)
- Mobile-responsive (aspect ratio 4/5 on small screens)
- Accessibility: role=img, aria-label, decorative bits hidden"

git push origin feature/concept-section
```

PR contra main, revisión en preview de Vercel, merge.

---

## Notas finales

**Tiempo estimado:** 1-2 horas activas.

**Si Claude Code propone usar una librería nueva** (Framer Motion para
todo, GSAP, animejs), pedile que lo justifique. Regla: si se puede
hacer con CSS + JS vanilla, mejor.

**Sospechosos típicos si la animación se ve "saltona":**
1. Demasiados bits simultáneos → bajar el límite a 25.
2. Bits usan `top`/`left` en vez de `transform` → cambiar a transform.
3. Falta `will-change` en bits activos.

**Si arranca antes de tiempo en mobile** (cuando la sección entera ya
está visible en pantallas chicas):
- Subir threshold del IntersectionObserver de 0.3 a 0.5.
- O delay inicial de 800ms después del trigger.

**Nota sobre la auditoría general de contraste:**
Después de mergear esta sección, vale la pena hacer una auditoría
sistemática del contraste en toda la web. El problema que encontramos
(`bone-3` + opacity baja = ilegible) probablemente afecta otras
secciones también. Es trabajo de ~30 min en Claude Code y mejora la
accesibilidad general.
