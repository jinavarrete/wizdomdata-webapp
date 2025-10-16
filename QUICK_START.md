# 🚀 Quick Start - WizdomData Website

## El servidor de desarrollo ya está corriendo!

**Abre tu navegador y visita:** http://localhost:3000

---

## 📋 Checklist de Personalización Rápida

### Paso 1: Información de Contacto (5 minutos)

**Archivos a editar:**

1. **app/components/Footer.tsx** (línea 44):
```typescript
<a href="mailto:TU_EMAIL@wizdomdata.com">
```

2. **app/components/ContactForm.tsx** (línea 68):
```typescript
<a href="mailto:TU_EMAIL@wizdomdata.com">
```

3. **app/layout.tsx** (línea 12):
```typescript
url: "https://TU_DOMINIO.com",
```

### Paso 2: Configurar Formulario de Contacto (10 minutos)

1. Ve a https://formspree.io y crea una cuenta
2. Crea un nuevo formulario
3. Copia tu Form ID
4. Edita **app/components/ContactForm.tsx** línea 29:

```typescript
const response = await fetch("https://formspree.io/f/TU_FORM_ID", {
```

### Paso 3: Redes Sociales (5 minutos)

**Edita app/components/Footer.tsx** (líneas 33-55):

```typescript
<a href="https://linkedin.com/company/TU_EMPRESA">
<a href="https://github.com/TU_USUARIO">
```

### Paso 4: Logo (Opcional - 5 minutos)

1. Coloca tu logo en `public/images/logo.png`
2. Edita **app/components/Navbar.tsx** línea 47:

```typescript
<Image src="/images/logo.png" alt="WizdomData" width={180} height={50} />
```

---

## 🎨 Personalización de Contenido

### Servicios

**Archivo:** `app/components/Services.tsx`

```typescript
const services = [
  {
    icon: Database,
    title: "TU SERVICIO",
    description: "TU DESCRIPCIÓN",
    // ...
  }
];
```

### Casos de Éxito

**Archivo:** `app/components/Cases.tsx`

```typescript
const cases = [
  {
    title: "TU PROYECTO",
    description: "DESCRIPCIÓN DEL PROYECTO",
    tags: ["Tecnología1", "Tecnología2"],
    // ...
  }
];
```

### Estadísticas en Hero

**Archivo:** `app/components/HeroSection.tsx` (líneas 89-111)

```typescript
<div className="text-3xl font-bold text-white">50+</div>
<div className="text-gray-400">Proyectos Completados</div>
```

---

## 🎯 Próximos Pasos

### Desarrollo Local

Tu servidor ya está corriendo. Cualquier cambio que hagas se reflejará automáticamente en el navegador.

### Ver cambios en vivo

1. Edita cualquier archivo
2. Guarda el archivo (Ctrl+S / Cmd+S)
3. El navegador se actualizará automáticamente

### Detener el servidor

Presiona `Ctrl+C` en la terminal donde está corriendo `npm run dev`

### Reiniciar el servidor

```bash
npm run dev
```

---

## 📚 Documentación Completa

- **README.md** - Documentación general del proyecto
- **SETUP.md** - Guía de configuración detallada
- **DEPLOYMENT.md** - Guía para publicar el sitio
- **PROJECT_SUMMARY.md** - Resumen completo del proyecto

---

## 🛠️ Comandos Útiles

```bash
# Ver el sitio
npm run dev

# Construir para producción
npm run build

# Probar build de producción
npm run build && npm start

# Revisar código
npm run lint
```

---

## 🎨 Cambiar Colores

**Archivo:** `tailwind.config.ts`

```typescript
colors: {
  primary: "#00C4FF",  // Cambia este color
  dark: "#0B1220",
  // ...
}
```

Después de cambiar colores, reinicia el servidor.

---

## 📱 Probar en Móvil

1. En tu terminal, busca tu IP local:
   ```bash
   ipconfig  # Windows
   ifconfig  # Mac/Linux
   ```

2. En tu móvil, abre: `http://TU_IP:3000`

---

## ❓ Problemas Comunes

### El servidor no inicia

```bash
# Mata procesos en puerto 3000
npx kill-port 3000

# Reinicia
npm run dev
```

### Cambios no se reflejan

1. Guarda el archivo (Ctrl+S)
2. Refresca el navegador (F5)
3. Si no funciona, reinicia el servidor

### Error de TypeScript

```bash
npm run build
```

Revisa los errores y corrígelos en los archivos indicados.

---

## 🚀 Listo para Deploy?

Cuando termines de personalizar:

1. Lee **DEPLOYMENT.md**
2. Sube tu código a GitHub
3. Deploy en Vercel (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 💡 Tips

- **Guarda frecuentemente** - Los cambios se aplican al guardar
- **Usa el inspector** - F12 para ver la consola del navegador
- **Prueba en móvil** - El diseño es responsive
- **Lee los comentarios** - El código tiene comentarios útiles

---

## 📞 Necesitas Ayuda?

1. Revisa la consola del navegador (F12)
2. Revisa la terminal donde corre el servidor
3. Lee los archivos de documentación
4. Busca el error en Google

---

**¡Todo listo! Tu sitio WizdomData está funcionando en http://localhost:3000** 🎉

Comienza editando los archivos y ve los cambios en tiempo real.
