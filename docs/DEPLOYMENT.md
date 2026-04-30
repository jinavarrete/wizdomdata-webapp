# Guía de Deployment - WizdomData

## Pre-requisitos

Antes de hacer el deploy, asegúrate de:

1. ✅ Haber configurado el formulario de contacto (Formspree)
2. ✅ Haber personalizado todo el contenido
3. ✅ Haber agregado las imágenes necesarias
4. ✅ Haber actualizado la información de contacto
5. ✅ Haber probado localmente (`npm run dev`)

## Opción 1: Deploy en Vercel (Más Recomendado)

Vercel es la plataforma creada por los desarrolladores de Next.js y ofrece la mejor integración.

### Método A: Deploy desde GitHub

1. **Sube tu código a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: WizdomData website"
git remote add origin TU_REPO_URL
git push -u origin main
```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

3. **Configurar dominio personalizado:**
   - Ve a Settings > Domains
   - Agrega tu dominio (ej: wizdomdata.com)
   - Sigue las instrucciones para configurar los DNS

### Método B: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Hacer login
vercel login

# Deploy a producción
vercel --prod
```

**Ventajas de Vercel:**
- ✅ Deploy automático en cada push
- ✅ Preview deployments para cada PR
- ✅ CDN global ultra-rápido
- ✅ SSL automático
- ✅ Análisis de performance
- ✅ 100% gratis para proyectos personales

## Opción 2: Deploy en Netlify

### Desde GitHub

1. **Sube tu código a GitHub** (ver pasos arriba)

2. **Conecta con Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio
   - Configura:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Haz clic en "Deploy site"

3. **Configurar dominio:**
   - Ve a Domain settings
   - Agrega tu dominio personalizado

### Con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Opción 3: Deploy en AWS (Amplify)

1. **Desde la consola de AWS Amplify:**
   - Ve a AWS Amplify
   - Haz clic en "New app" > "Host web app"
   - Conecta tu repositorio de GitHub
   - Configura:
     - Build command: `npm run build`
     - Output directory: `.next`

2. **Deploy automático:**
   - Amplify detectará cambios en tu rama main
   - Deploy automático en cada push

## Opción 4: Deploy en VPS/Servidor Propio

### Usando Node.js

```bash
# En tu servidor
git clone TU_REPO_URL
cd wizdomdata-site
npm install
npm run build
npm start
```

### Usando PM2 (Proceso persistente)

```bash
# Instalar PM2
npm install -g pm2

# Iniciar la aplicación
pm2 start npm --name "wizdomdata" -- start

# Configurar inicio automático
pm2 startup
pm2 save
```

### Configurar Nginx como Reverse Proxy

```nginx
server {
    listen 80;
    server_name wizdomdata.com www.wizdomdata.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Configurar SSL con Let's Encrypt

```bash
sudo certbot --nginx -d wizdomdata.com -d www.wizdomdata.com
```

## Opción 5: Deploy con Docker

### Crear Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Construir y ejecutar

```bash
# Construir imagen
docker build -t wizdomdata-site .

# Ejecutar contenedor
docker run -p 3000:3000 wizdomdata-site
```

## Variables de Entorno

Si necesitas configurar variables de entorno:

1. **Crear archivo `.env.local`:**
```env
NEXT_PUBLIC_SITE_URL=https://wizdomdata.com
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

2. **En Vercel/Netlify:**
   - Ve a Settings > Environment Variables
   - Agrega cada variable

## Configuración de Dominio

### Registrar dominio

Proveedores recomendados:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### Configurar DNS

Para Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Para Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [tu-sitio].netlify.app
```

## Optimizaciones Post-Deploy

### 1. Configurar Analytics

```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Configurar Sitemap

Crea `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wizdomdata.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

### 3. Configurar robots.txt

Crea `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://wizdomdata.com/sitemap.xml',
  }
}
```

## Monitoreo

### Herramientas recomendadas:

- **Uptime:** [UptimeRobot](https://uptimerobot.com)
- **Performance:** [Google PageSpeed Insights](https://pagespeed.web.dev)
- **Errores:** [Sentry](https://sentry.io)
- **Analytics:** Google Analytics, Vercel Analytics

## Checklist Final de Deploy

- [ ] Código en GitHub
- [ ] Deploy en plataforma elegida
- [ ] Dominio configurado y funcionando
- [ ] SSL habilitado (HTTPS)
- [ ] Formulario de contacto funcional
- [ ] Google Analytics configurado
- [ ] Sitemap y robots.txt configurados
- [ ] Performance verificado (>90 en PageSpeed)
- [ ] Responsive probado en móviles
- [ ] SEO verificado
- [ ] Enlaces sociales funcionando
- [ ] Email de contacto correcto

## Troubleshooting

### Error: Build failed

```bash
# Limpia la caché y vuelve a construir
rm -rf .next node_modules
npm install
npm run build
```

### Error: 404 en producción

- Verifica que todas las rutas usen paths relativos
- Asegúrate de que `basePath` esté configurado correctamente en `next.config.js`

### Error: Environment variables no funcionan

- Variables del cliente deben empezar con `NEXT_PUBLIC_`
- Reinicia el servidor después de cambiar variables

## Soporte

Para problemas con el deployment:
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- AWS: https://aws.amazon.com/support/

¡Tu sitio WizdomData está listo para producción! 🚀
