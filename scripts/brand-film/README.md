# WizdomData — Antes de construir, hay que entender

Pieza de marca de 26 segundos. Motion typography, sin audio, con la identidad original de WizdomData. Formato MP4 H.264, 1280 × 720, 30 fps.

## Idea
La comprensión del negocio guía el criterio; el criterio define el producto analítico. WizdomData acompaña toda esa relación como partner estratégico.

## Secuencia
- 00–04: Antes de construir, hay que entender.
- 04–09: Tu negocio. Tus procesos. Tus decisiones.
- 09–13: Elegimos qué resolver. Y para qué.
- 13–18: Lo convertimos en un producto analítico.
- 18–22: Valor para tu equipo. Impacto en tu negocio.
- 22–26: WizdomData. Tu partner estratégico en datos e inteligencia artificial.

## Reproducir y editar
Ejecutar `python scripts/brand-film/render.py` desde la raíz del repositorio. Requiere Pillow y FFmpeg en PATH. La fuente Inter y las conversiones PNG del isotipo existente se incluyen para reproducibilidad. El render genera el MP4 y su poster en `public/media`, y una hoja de revisión en `artifacts/brand-film`.

Las imágenes de referencia del isotipo se derivan de `public/images/logo-negativo.svg` y `logo-positivo.svg`. La pieza no contiene material de stock, testimonios ni cifras de resultados.

## Segunda versión: Dentro del negocio

`python scripts/brand-film/render-dynamic.py` genera una variante de 30 segundos en `public/media/wizdomdata-dentro-del-negocio.mp4`, conservando el primer video.

La secuencia animada es ilustrativa: Comercial, Operación y Finanzas se conectan dentro del marco de la empresa. El isotipo de WizdomData entra en ese marco, recibe señales del flujo e identifica fricciones, prioridades y oportunidades. El conocimiento se convierte en un producto analítico y una flecha de retorno conecta el producto con las decisiones operativas. No representa un proceso específico de un cliente.
