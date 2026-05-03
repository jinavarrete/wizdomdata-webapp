# WizdomData · Copy Recortado v2

> Reemplazo completo del copy de la landing.
> Reducción aproximada: 1,420 → 450 palabras (-68%).
> Estructura de secciones se mantiene, solo cambia el contenido textual.

---

## Cómo aplicarlo

1. Copiá este archivo al repo en `reference/copy-recortado-v2.md`.
2. Hacé commit en una rama nueva: `git checkout -b feature/copy-trim-v2`.
3. Abrí Claude Code en la raíz del repo.
4. Pegá el prompt de la sección final como primer mensaje.

---

## El copy nuevo, sección por sección

### 1 · Hero

**Eyebrow** (sin cambios):
```
CONSULTORA DE DATA ANALYTICS · CHILE
```

**Tagline** (sin cambios):
```
from raw data to real impact
```

**Título principal** (sin cambios):
```
El dato existe.
La decisión, no siempre.
```
(Con "decisión" en ámbar itálica, como ya está.)

**Subtítulo** (RECORTADO):
```
WizdomData es el partner analítico que ayuda a tu equipo a definir qué medir, qué construir, y qué decisiones priorizar.
```

**CTAs** (sin cambios):
- Primario: `Conversemos un proyecto →`
- Secundario: `Cómo trabajamos`

**Pillars debajo** (sin cambios): `Data · Analytics · AI`

---

### 2 · Sección NUEVA: "El concepto"

> Esta sección la implementás separadamente con el prompt de animación
> (`PROMPT_CONCEPT_SECTION.md`). Va entre el Hero y "Por qué existimos".
> No requiere cambios de copy en este recorte.

---

### 3 · Por qué existimos (REESCRITURA COMPLETA)

> ⚠️ Este es el cambio más grande. Los **3 movimientos** ("El problema",
> "El insight", "La transformación") se ELIMINAN ENTEROS y se reemplazan
> por un bloque corto único.
>
> Implicancia técnica: el componente `Narrative.tsx` se simplifica
> radicalmente — ya no tiene 3 sub-bloques con grid de 2 columnas y
> headlines grandes. Pasa a ser un bloque único, centrado, prosa breve.

**Eyebrow:**
```
01 · POR QUÉ EXISTIMOS
```

**Bloque único** (reemplaza los 3 movimientos enteros):

```
Las empresas modernas tienen más datos de los que pueden leer, y menos decisiones claras de las que necesitan tomar.

El problema no es la falta de datos. Es la falta de un puente entre los datos y la decisión.

Ese puente no se compra: se construye con criterio. Eso es lo que hacemos.
```

**Decisiones de diseño:**
- Una sola columna, max-width ~620px, centrado en la sección.
- 3 párrafos cortos separados por espacio normal (no separadores con borde).
- Tamaño tipográfico generoso (h-mid o equivalente: ~22-26px en desktop).
- La palabra "criterio" puede ir en ámbar itálica para acentuar.
- La palabra "decisiones" en el primer párrafo también puede ir en ámbar.
- Sin animación scroll-triggered, sin números numerados, sin grid 2-col.

---

### 4 · Lo que cambia (antes "Por qué importa")

> Renombramos de "Por qué importa" a "Lo que cambia". Más concreto, menos
> abstracto.

**Eyebrow:**
```
02 · LO QUE CAMBIA
```

**Título de sección:**
```
Cuando los datos llegan a la decisión.
```
(Sin bajada — el título lo dice todo. ELIMINAR la bajada actual
"Los efectos de una capa analítica bien construida...")

**Los 4 bloques de impacto, recortados:**

**01 · Decisiones más rápidas, no más reportes.**
```
El directorio deja de pedir el mismo dato tres veces porque las cifras nunca cuadran.
```

**02 · Eficiencia donde había trabajo manual.**
```
Las cinco horas semanales que tu analista pasa en Excel dejan de existir.
```

**03 · Ventaja antes que el resto.**
```
Cuando tu competencia recién pide un dashboard de churn, vos ya tenés el modelo en producción.
```

**04 · El directorio decide con la misma data que opera la línea.**
```
Cuando esa alineación existe, las decisiones se toman rápido. Cuando no existe, tarde y mal.
```

**Estructura visual:** mantener la grid 2x2 con bordes 1px que ya está. Solo cambia el contenido textual de cada card.

---

### 5 · Cómo trabajamos

**Eyebrow** (sin cambios):
```
03 · CÓMO TRABAJAMOS
```

**Título de sección** (RECORTADO):
```
Partner, no proveedor.
```
(Antes: "Partner analítico, no proveedor." Sacamos "analítico" — redundante
en contexto.)

**Bajada** (RECORTADA, antes eran 2 frases largas):
```
Un proveedor entrega lo que se le pide. Un partner discute si lo que se está pidiendo es lo correcto.
```

**Las 3 posturas, recortadas:**

**Postura · 01 — Pensamos antes de implementar.**
```
Cada proyecto empieza con una conversación de negocio, no con un kickoff técnico. Si lo que pediste originalmente no es lo que necesitas, lo decimos.
```

**Postura · 02 — Traemos know-how, no manos.**
```
Después de años en industrias tradicionales, sabemos qué proyectos generan valor real y cuáles son cementerios de tiempo. Ese criterio es lo que se compra.
```

**Postura · 03 — Construimos para tu autonomía.**
```
Documentamos el código, capacitamos al equipo, dejamos el repositorio en tu organización. No vendemos dependencia.
```

**ELIMINAR:** la cita final del `wizdomdata-framework`. No aporta a un cliente
nuevo y agrega ruido. Si querés mencionar el framework en algún lado, va en
una página /sobre futura, no en la home.

---

### 6 · Capacidades

**Eyebrow** (sin cambios):
```
04 · CAPACIDADES
```

**Título de sección** (sin cambios):
```
Cuando la decisión está clara, sabemos qué construir.
```

**ELIMINAR la bajada larga actual** ("Diseñamos, construimos y operamos la
capa de datos completa..."). El título lo dice.

**Las 4 capacidades, descripciones recortadas a una línea:**

**01 · Data Engineering**
```
Pipelines, warehouses, integraciones en tiempo real.
```
*Stack: dbt · BigQuery · Databricks · AWS · Azure · GCP · SQL Server · Snowflake*

**02 · Business Intelligence**
```
Dashboards que tu equipo abre todos los días.
```
*Stack: Power BI · Tableau · Looker · Metabase*

**03 · AI & Machine Learning**
```
Modelos predictivos, agentes con LLMs, automatización con IA.
```
*Stack: Python · scikit-learn · MLflow · OpenAI · Anthropic · LangChain · Vertex AI*

**04 · Automatización & Data Products**
```
Apps internas, integraciones, herramientas a medida.
```
*Stack: Python · Streamlit · n8n · APIs custom · Cloud Functions*

**ELIMINAR el footer de sección** ("No vendemos paquetes cerrados. Cada
proyecto se diseña según lo que el negocio necesita resolver..."). Ya
queda implícito en el resto de la página.

---

### 7 · Equipo

**Eyebrow** (sin cambios):
```
05 · EQUIPO
```

**Título de sección** (sin cambios):
```
Dos ingenieros. Sin intermediarios.
```

**ELIMINAR la bajada actual** ("WizdomData es una consultora boutique
fundada en 2026. No tenemos un equipo de ventas..."). El título lo
dice y la bajada repite. Saltamos directo a las personas.

**Juan Ignacio Navarrete**
Role: `Co-fundador · Data Engineering & Analytics`
Bio (RECORTADA):
```
Ingeniero Civil Industrial UTFSM. AWS Certified Data Engineer. Siete años trabajando con datos en industrias tradicionales.
```
*Stack: dbt · BigQuery · SQL Server · Power BI · Python · AWS*

**Stefano Schiappacasse**
Role: `Co-fundador · Data Science`
Bio (RECORTADA):
```
Ingeniero Civil Industrial UTFSM. Magíster en Data Science, Universidad de Chile.
```
*Stack: Python · Databricks · scikit-learn · MLflow · PySpark*

**ELIMINAR la línea de cierre** ("Si tu proyecto necesita más manos,
traemos especialistas de nuestra red..."). No aporta. Si alguien
pregunta, se responde en conversación.

---

### 8 · Hablemos

**Eyebrow** (sin cambios):
```
06 · HABLEMOS
```

**Título de sección** (RECORTADO):
```
¿Tu negocio decide con la información que necesita?
```
(Antes: "¿Tu negocio toma decisiones con la información que necesita?"
Sacamos "toma decisiones" — redundante con "decide".)

**ELIMINAR la bajada larga** ("Si la respuesta es 'no estoy seguro' —
esa es la primera conversación que vale la pena tener..."). Es un párrafo
explicativo que repite cosas ya dichas.

**Las 2 cards (recortadas):**

**Card 1 — Tenés un proyecto en mente**
Título: `Conversemos un proyecto.`
Body (RECORTADO):
```
Contanos qué problema querés resolver. Respondemos en 48 horas.
```
CTA: `Escribir a hola@wizdomdata.cl →`

**Card 2 — No estás seguro si tenés un proyecto**
Título: `Diagnóstico de madurez analítica.`
Body (RECORTADO):
```
Una hora, sin costo. Si no hay proyecto, te lo decimos.
```
CTA: `Solicitar diagnóstico →`

**Línea meta debajo** (sin cambios):
```
hola@wizdomdata.cl · respondemos en menos de 48 horas hábiles · Chile · operaciones remotas
```

---

### 9 · Footer

Sin cambios estructurales. Solo verificar que el email es
`hola@wizdomdata.cl` (no `contacto@wizdomdata.com` que detecté en el
preview actual — esto está pendiente de la migración anterior).

---

## Resumen visual del recorte

```
ANTES (~1,420 palabras de copy)        DESPUÉS (~450 palabras de copy)
═══════════════════════════════════    ═══════════════════════════════════
Hero subtítulo: 38 palabras            Hero subtítulo: 22 palabras (-42%)

Sección 01: 3 movimientos largos       Sección 01: 1 bloque corto
  - El problema (~110 palabras)          - 3 párrafos cortos (50 palabras)
  - El insight (~110 palabras)           
  - La transformación (~110 palabras)  

Sección 02: bajada + 4 cards largas    Sección 02: solo título + 4 líneas
  ~280 palabras                          ~80 palabras

Sección 03: bajada + 3 posturas +      Sección 03: bajada corta + 3 posturas
framework footer                        cortas, sin framework
  ~280 palabras                          ~110 palabras

Sección 04: bajada + 4 caps largas +   Sección 04: solo 4 caps de 1 línea
footer                                   ~70 palabras
  ~190 palabras                        

Sección 05: bajada + 2 bios largas +   Sección 05: solo 2 bios cortas
footer                                   ~70 palabras
  ~150 palabras                        

Sección 06: bajada + 2 cards largas    Sección 06: 2 cards cortas
  ~140 palabras                          ~50 palabras
```

---

## Prompt para Claude Code

Después de poner este archivo en `reference/copy-recortado-v2.md`, abrí
Claude Code y pegá esto:

---

```
Tarea: aplicar un recorte de copy en toda la landing.

Antes de empezar, leé:
1. `reference/copy-recortado-v2.md` ENTERO. Este archivo tiene el copy
   nuevo sección por sección, con instrucciones explícitas de qué
   ELIMINAR y qué REEMPLAZAR.
2. `brand/BRAND.md` § "Voice & copy" — para confirmar que el copy
   nuevo respeta las reglas del brandbook.

CONTEXTO IMPORTANTE:
- Esto es un recorte de copy, NO un rediseño visual. La estructura
  visual se mantiene en casi todas las secciones (mismas grids, mismos
  componentes, mismas posiciones).
- LA EXCEPCIÓN es la sección "Por qué existimos" (Narrative.tsx): los
  tres movimientos largos se eliminan completos y se reemplazan por
  un bloque único corto y centrado. Esto SÍ requiere ajuste estructural
  del componente.
- Otras eliminaciones son solo de texto, no de DOM nodes. Por ejemplo,
  "ELIMINAR la bajada larga" significa borrar el `<p>` correspondiente,
  no rediseñar la sección.

RESPONDEME PRIMERO (sin tocar código todavía):

A. Lista de archivos que vas a modificar (debería ser ~7 componentes:
   HeroSection, Narrative, Impact, Stance/Methodology, Services/Capacidades,
   Team, Closing/ContactForm).

B. Para `Narrative.tsx` específicamente: ¿cómo vas a reestructurarlo?
   El componente actual tiene 3 sub-bloques de "movement" con grid de
   2 columnas. El componente nuevo es un bloque único centrado con 3
   párrafos. Confirmá que entendiste la simplificación.

C. ¿Detectaste alguna inconsistencia entre el copy actual del sitio y
   el copy del documento de recorte que requiera aclaración? Por ejemplo,
   si el sitio dice una cosa y el doc dice otra de forma irreconciliable.

D. ¿El email "hola@wizdomdata.cl" ya está aplicado en el código? El
   documento detectó que en el preview todavía aparece
   "contacto@wizdomdata.com". Si está pendiente, lo arreglás en la
   misma pasada.

No empieces a editar hasta que apruebe tu plan.
```

---

### Después de aprobar el plan:

```
Avanzá. Reglas para la implementación:

1. Aplicá los cambios sección por sección, en el orden del documento
   (Hero → Narrative → Impact → Stance → Capabilities → Team → Closing).

2. Cada cambio significa, en este orden de prioridad:
   a) Eliminar lo que el documento dice "ELIMINAR"
   b) Reemplazar lo que está en bloques de código (```)
   c) NO TOCAR lo que el documento dice "sin cambios"

3. Para Narrative.tsx, simplificación estructural:
   - Sacá los 3 sub-bloques de movement
   - Reemplazá por un único contenedor centrado, max-width ~620px
   - 3 párrafos en prosa, separados por margin natural (no por borders)
   - Tamaño tipográfico h-mid (~22-26px en desktop)
   - Las palabras "decisiones" (1er párrafo) y "criterio" (3er párrafo)
     en ámbar itálica, usando el mismo span class que ya usás en otros
     lados.

4. Verificá que ningún componente quede con código muerto: estilos no
   usados, props que ya no se necesitan, imports huérfanos.

5. Después de aplicar todo:
   a) `npm run dev` corriendo limpio.
   b) Recorré la página de arriba a abajo y verificá que el copy
      coincide con el documento.
   c) `npm run build` sin errores.

6. Mostrame el diff completo antes de hacer commit. Si hay alguna
   decisión que tomaste por tu cuenta (por ejemplo, qué `<span>` usar
   para acentos), señalala.

Stop después del diff. Yo apruebo y vos commiteás.
```

---

### Commit final:

```bash
git add .
git commit -m "refactor: trim landing copy by ~68%

- Reduced total copy from ~1,420 to ~450 words
- Narrative.tsx: 3 movements → single centered block
- Impact, Stance, Capabilities, Team, Closing: shorter descriptions
- Removed redundant section bajadas and footers
- Goal: scannable landing readable in 2-3 minutes"

git push origin feature/copy-trim-v2
```

---

## Notas finales

**Tiempo estimado:** 30-60 minutos de Claude Code activo. Es trabajo de
edición de strings principalmente, salvo el ajuste de Narrative.tsx que
es estructural.

**Lo más importante a verificar después del deploy:**
1. La página entera se siente respirable, no apilada de texto.
2. La sección "Por qué existimos" quedó corta y centrada — si quedó
   gigante con 3 párrafos en grid de 2 columnas, algo salió mal.
3. La grid 2x2 de "Lo que cambia" ahora tiene cards mucho más cortas
   (1 línea cada una) — visualmente debería verse más liviana.

**Si algo se siente "demasiado vacío"** después del recorte, no es problema:
es lo que estábamos buscando. El espacio en blanco es un activo, no un
defecto. Pero si hay alguna sección puntual que te quedó incómoda, la
ajustamos en una segunda pasada.
