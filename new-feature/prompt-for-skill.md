# Prompt para ui-ux-pro-max

Aplicá el sistema de elevación de superficies a la home de WizdomData (Next.js 14 + Tailwind + Framer Motion + Lucide).

**Contexto del problema**: la página actual usa un solo nivel de negro (`#0C0E12`) en toda la pantalla, lo que produce fatiga visual y le quita jerarquía a las secciones. La solución es introducir 5 niveles de superficie por luminosidad creciente, manteniendo estrictamente la paleta del Brand Book v1.0 — no se introducen colores nuevos.

**Inputs adjuntos**:
1. `tailwind.config.ts` — tokens nuevos a integrar en el theme.extend.colors
2. `globals.css` — CSS variables a agregar al :root
3. `elevation-system-rules.md` — reglas completas del sistema, mapeo sección por sección, y lo que NO hay que hacer

**Lo que necesito**:
1. Actualizar `tailwind.config.ts` y `globals.css` con los nuevos tokens.
2. Refactorizar los componentes de cada sección de la home para usar las clases nuevas según el mapeo de la tabla en `elevation-system-rules.md` (sección "Mapeo de secciones de la home").
3. Aplicar las 7 reglas del sistema en hovers, bordes, jerarquía de texto y comportamiento del header sticky.
4. Mantener intacta la tipografía, animaciones de Framer Motion existentes, iconos de Lucide y estructura de componentes — el cambio es de tokens y clases, no de arquitectura.

**Restricciones importantes**:
- No introducir colores fuera de los tokens definidos.
- No agregar sombras (en dark no se ven; usar elevación de surface).
- Body text de párrafo largo debe ir en `text-secondary` (`#C9C4B7`), no en bone puro.
- Ámbar máximo 1-2 elementos por viewport.
- Border-radius se mantiene en 2-4px (Brand Book lo dicta).

**Output esperado**: diff de archivos modificados, listo para revisar y hacer commit.
