# Guía para Subir el Código a GitHub

## ✅ Estado Actual

Tu código está listo en Git con un commit inicial. Solo falta hacer push a GitHub.

```
✅ Repositorio Git inicializado
✅ Archivos agregados
✅ Commit inicial creado
✅ Remoto configurado: https://github.com/jinavarrete/wizdomdata-webapp.git
✅ Rama renombrada a 'main'
⏳ Pendiente: Push a GitHub
```

---

## 🔐 Problema: Autenticación

GitHub requiere autenticación. Necesitas usar un Personal Access Token (PAT) en lugar de tu contraseña.

---

## 📝 Solución: Crear un Personal Access Token

### Paso 1: Crear el Token en GitHub

1. Ve a GitHub: https://github.com/settings/tokens
2. Haz clic en "Generate new token" > "Generate new token (classic)"
3. Dale un nombre: `wizdomdata-webapp`
4. Selecciona los siguientes scopes:
   - ✅ `repo` (todos los permisos de repositorio)
   - ✅ `workflow` (si usarás GitHub Actions)
5. Haz clic en "Generate token"
6. **⚠️ IMPORTANTE:** Copia el token AHORA (no podrás verlo después)

### Paso 2: Usar el Token para Push

Opción A - Push con token en la URL (una vez):

```bash
git push -u https://TU_TOKEN@github.com/jinavarrete/wizdomdata-webapp.git main
```

Reemplaza `TU_TOKEN` con el token que copiaste.

Opción B - Configurar Git Credential Manager (recomendado):

```bash
# Cuando ejecutes git push, te pedirá usuario y contraseña
git push -u origin main

# Usuario: jinavarrete
# Contraseña: [PEGA TU TOKEN AQUÍ]
```

### Paso 3: Verificar

Después del push exitoso, ve a:
https://github.com/jinavarrete/wizdomdata-webapp

Deberías ver todos tus archivos.

---

## 🚀 Comandos Completos

```bash
# Opción 1: Push con token en URL (una sola vez)
git push -u https://TU_TOKEN@github.com/jinavarrete/wizdomdata-webapp.git main

# Opción 2: Push normal (te pedirá credenciales)
git push -u origin main
# Usuario: jinavarrete
# Password: [TU_TOKEN_AQUÍ]

# Verificar que subió correctamente
git remote -v
git branch -a
```

---

## 🔄 Alternativa: Usar SSH

Si prefieres usar SSH (más seguro):

### 1. Generar clave SSH

```bash
ssh-keygen -t ed25519 -C "tu_email@example.com"
# Presiona Enter para guardar en la ubicación por defecto
# Ingresa una contraseña (opcional pero recomendado)
```

### 2. Agregar la clave a GitHub

```bash
# Copiar la clave pública
cat ~/.ssh/id_ed25519.pub
```

- Ve a GitHub: https://github.com/settings/keys
- Haz clic en "New SSH key"
- Pega tu clave pública
- Guarda

### 3. Cambiar remote a SSH

```bash
git remote set-url origin git@github.com:jinavarrete/wizdomdata-webapp.git
git push -u origin main
```

---

## 🆘 Problemas Comunes

### Error: "Authentication failed"
- Asegúrate de usar el token, no tu contraseña de GitHub
- Verifica que el token tenga permisos de `repo`

### Error: "Repository not found"
- Verifica que el repositorio existe: https://github.com/jinavarrete/wizdomdata-webapp
- Si no existe, créalo en GitHub primero

### Error: "Permission denied"
- Verifica que eres el dueño del repositorio
- Verifica que tu token no haya expirado

---

## ✅ Después del Push Exitoso

Una vez que el código esté en GitHub:

1. **Verifica en GitHub:**
   https://github.com/jinavarrete/wizdomdata-webapp

2. **Deploy en Vercel:**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel

   # Login y deploy
   vercel
   ```

3. **O usa la web de Vercel:**
   - Ve a https://vercel.com
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Haz clic en "Deploy"

---

## 📋 Resumen de Pasos

1. ✅ Crea un Personal Access Token en GitHub
2. ⏳ Ejecuta: `git push -u origin main` (usa el token como contraseña)
3. ✅ Verifica que aparezca en GitHub
4. 🚀 Deploy en Vercel (opcional)

---

## 💡 Tips

- **Guarda tu token en un lugar seguro** (como un gestor de contraseñas)
- El token expirará según la configuración que elegiste
- Puedes crear tokens diferentes para diferentes proyectos
- SSH es más conveniente una vez configurado

---

## 🔗 Enlaces Útiles

- Crear token: https://github.com/settings/tokens
- Configurar SSH: https://docs.github.com/es/authentication/connecting-to-github-with-ssh
- Tu repositorio: https://github.com/jinavarrete/wizdomdata-webapp
- Vercel: https://vercel.com

---

**¿Necesitas ayuda?** Revisa la documentación de GitHub sobre autenticación:
https://docs.github.com/es/authentication
