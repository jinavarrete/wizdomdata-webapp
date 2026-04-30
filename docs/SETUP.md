# Guía de Configuración Rápida - WizdomData

## Paso 1: Instalar Dependencias

Ya completado. Las dependencias están instaladas.

## Paso 2: Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: http://localhost:3000

## Paso 3: Configurar el Formulario de Contacto

1. Ve a [Formspree.io](https://formspree.io) y crea una cuenta gratuita
2. Crea un nuevo formulario
3. Copia el ID del formulario (formato: `YOUR_FORM_ID`)
4. Abre el archivo `app/components/ContactForm.tsx`
5. En la línea 29, reemplaza `YOUR_FORM_ID` con tu ID real:

```typescript
const response = await fetch("https://formspree.io/f/TU_ID_AQUI", {
```

## Paso 4: Personalizar Contenido

### Logo
- Coloca tu logo en `public/images/logo.png`
- Actualiza `app/components/Navbar.tsx` para usar el logo

### Servicios
Edita `app/components/Services.tsx` para modificar:
- Títulos de servicios
- Descripciones
- Iconos

### Casos de Éxito
Edita `app/components/Cases.tsx` para agregar tus proyectos reales:
- Nombre del proyecto
- Descripción
- Tecnologías utilizadas
- Resultados obtenidos

### Equipo
Edita `app/components/Team.tsx` para actualizar:
- Descripción del equipo
- Certificaciones
- Valores

### Información de Contacto
Actualiza en `app/components/Footer.tsx` y `ContactForm.tsx`:
- Email de contacto
- Ubicación
- Redes sociales (LinkedIn, GitHub)

## Paso 5: Configurar SEO

Edita `app/layout.tsx` para personalizar:
- Title y description
- Keywords
- Open Graph metadata
- URL del sitio

## Paso 6: Construir para Producción

```bash
npm run build
```

Esto generará una versión optimizada en la carpeta `.next/`

## Paso 7: Deploy

### Opción A: Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción B: Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configura:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Opción C: Servidor Propio

1. Construye el proyecto:
```bash
npm run build
```

2. Inicia el servidor:
```bash
npm start
```

3. El sitio correrá en el puerto 3000

## Personalizaciones Adicionales

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: "#TU_COLOR_AQUI",
  dark: "#TU_COLOR_AQUI",
  // ...
}
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `app/components/`
2. Importa y úsalo en `app/page.tsx`

### Modificar Animaciones

Las animaciones están configuradas en cada componente usando Framer Motion.
Puedes ajustar:
- Duración: `duration`
- Delay: `delay`
- Tipo: `ease`, `easeIn`, `easeOut`, etc.

## Solución de Problemas

### Error: Cannot find module

```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 en uso

```bash
npm run dev -- -p 3001
```

### Errores de TypeScript

```bash
npm run build
```

Revisa los errores mostrados y corrígelos en los archivos indicados.

## Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Guía de Formspree](https://help.formspree.io/)

## Soporte

Para consultas técnicas sobre el sitio:
- Revisa la documentación en `README.md`
- Consulta los comentarios en el código
- Contacta al desarrollador

¡Listo! Tu sitio WizdomData está configurado y listo para usar.
