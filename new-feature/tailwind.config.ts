// tailwind.config.ts
// WizdomData · Sistema de elevación dark mode
// Reemplaza el theme.extend.colors actual con este bloque.

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ============================================================
        // BRAND ORIGINAL — del Brand Book v1.0
        // ============================================================
        tinta:     '#0C0E12',  // Negro profundo, no negro puro
        'tinta-2': '#2A2D33',  // Gris oscuro secundario
        bone:      '#E8E3D6',  // Blanco cálido
        'bone-3':  '#A8A498',  // Gris cálido (texto secundario)
        ambar:     '#E8800C',  // Acento de marca · 5-10% del uso

        // ============================================================
        // SISTEMA DE ELEVACIÓN — NUEVO
        // 5 niveles de superficie por luminosidad creciente.
        // surface-0 y surface-4 son tokens del brand book (Tinta y Tinta-2).
        // surface-1, 2, 3 son interpolaciones derivadas — no colores nuevos.
        // ============================================================
        surface: {
          0: '#0C0E12',  // Base · fondo página, secciones de texto
          1: '#15181E',  // +1 elevation · header sticky, footer
          2: '#1A1D24',  // +2 elevation · contenedores de cards
          3: '#1F2229',  // +3 elevation · cards individuales
          4: '#2A2D33',  // +4 elevation · hover, estados activos, inputs focused
        },

        // ============================================================
        // JERARQUÍA DE TEXTO — NUEVO
        // 3 niveles de luminosidad sobre dark.
        // ============================================================
        text: {
          primary:   '#E8E3D6',  // Bone puro · titulares H1-H3
          secondary: '#C9C4B7',  // Bone atenuado · body de párrafo, descripciones
          tertiary:  '#A8A498',  // Bone-3 · meta, labels, captions, code inline
        },

        // ============================================================
        // BORDERS · hairlines — NUEVO
        // Bone con opacidad creciente. Reemplazan sombras (invisibles en dark).
        // ============================================================
        border: {
          subtle:  'rgba(232, 227, 214, 0.06)',  // Divisores entre secciones
          DEFAULT: 'rgba(232, 227, 214, 0.10)',  // Bordes de cards en reposo
          strong:  'rgba(232, 227, 214, 0.18)',  // Hover, focus, énfasis
        },
      },

      // Sombras: dejarlas vacías o con transform.
      // En dark mode las sombras casi no se ven — usar elevación de surface.
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
}

export default config
