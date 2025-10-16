# WizdomData - Sitio Web Oficial

Sitio web moderno y responsive para WizdomData, consultora especializada en Data Analytics, Business Intelligence y Data Engineering.

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

## Características

- Diseño moderno con paleta oscura y acentos azules (#00C4FF)
- Animaciones suaves con Framer Motion
- 100% responsive (mobile-first)
- SEO optimizado
- Performance optimizado
- Formulario de contacto funcional

## Estructura del Proyecto

```
wizdomdata-site/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Barra de navegación
│   │   ├── Footer.tsx          # Pie de página
│   │   ├── HeroSection.tsx     # Sección hero principal
│   │   ├── Services.tsx        # Servicios ofrecidos
│   │   ├── Methodology.tsx     # Metodología Lean Analytics
│   │   ├── Cases.tsx           # Casos de éxito
│   │   ├── Team.tsx            # Información del equipo
│   │   └── ContactForm.tsx     # Formulario de contacto
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página de inicio
├── public/
│   └── images/                 # Imágenes y assets
├── tailwind.config.ts          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
└── package.json                # Dependencias del proyecto
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración del Formulario de Contacto

Para configurar el formulario de contacto con Formspree:

1. Crear una cuenta en [Formspree.io](https://formspree.io)
2. Crear un nuevo formulario y obtener el ID
3. Actualizar el endpoint en `app/components/ContactForm.tsx`:

```typescript
const response = await fetch("https://formspree.io/f/TU_FORM_ID", {
  // ...
});
```

## Personalización

### Colores

Los colores principales están definidos en `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00C4FF",        // Azul principal
  dark: "#0B1220",           // Fondo oscuro
  "dark-secondary": "#0E1B2C", // Fondo secundario
  "dark-tertiary": "#1A2332",  // Fondo terciario
}
```

### Contenido

Actualizar el contenido en los componentes correspondientes:
- Servicios: `app/components/Services.tsx`
- Casos de éxito: `app/components/Cases.tsx`
- Información del equipo: `app/components/Team.tsx`

## Construcción para Producción

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Instalar Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

O conectar el repositorio de GitHub directamente en [vercel.com](https://vercel.com).

## SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Twitter Cards
- Sitemap automático
- Robots.txt

## Performance

- Lazy loading de imágenes
- Code splitting automático
- Optimización de fuentes
- CSS optimizado con Tailwind

## Soporte para Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

© 2025 WizdomData. Todos los derechos reservados.

## Contacto

Para consultas sobre el sitio web:
- Email: contacto@wizdomdata.com
- Sitio: https://wizdomdata.com
