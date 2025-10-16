# 🚀 Instrucciones Rápidas para Push a GitHub

## Opción 1: Usar el Script PowerShell (Más Fácil)

1. **Crea tu Personal Access Token:**
   - Ve a: https://github.com/settings/tokens/new
   - Token name: `wizdomdata-webapp`
   - Expiration: `90 days` (o lo que prefieras)
   - Selecciona scope: ✅ `repo` (marca toda la sección)
   - Click "Generate token"
   - **COPIA EL TOKEN** (lo necesitarás en el siguiente paso)

2. **Ejecuta el script:**
   - Abre PowerShell en esta carpeta (click derecho > "Abrir en Terminal")
   - Ejecuta:
     ```powershell
     .\push-to-github.ps1
     ```
   - Pega tu token cuando te lo pida
   - ¡Listo!

---

## Opción 2: Comando Directo (Rápido)

1. **Crea tu token** (ver Opción 1, paso 1)

2. **Ejecuta este comando** (reemplaza `TU_TOKEN_AQUI` con tu token):

   ### En PowerShell:
   ```powershell
   git push -u https://TU_TOKEN_AQUI@github.com/jinavarrete/wizdomdata-webapp.git main
   ```

   ### En Git Bash:
   ```bash
   git push -u https://TU_TOKEN_AQUI@github.com/jinavarrete/wizdomdata-webapp.git main
   ```

---

## Opción 3: Configurar Git Credential Manager

Si tienes Git Credential Manager instalado:

```bash
git config --global credential.helper manager-core
git push -u origin main
```

Se abrirá una ventana para autenticarte con GitHub (navegador).

---

## ⚠️ Importante

- **Nunca compartas tu token** con nadie
- **No lo subas a Git** (está en .gitignore por defecto)
- Guárdalo en un lugar seguro (gestor de contraseñas)
- Si lo pierdes, crea uno nuevo

---

## ✅ Verificación

Después del push exitoso, verifica:

1. **GitHub:** https://github.com/jinavarrete/wizdomdata-webapp
   - Deberías ver todos tus archivos

2. **Verifica el commit:**
   ```bash
   git log --oneline
   ```

3. **Verifica el remoto:**
   ```bash
   git remote -v
   ```

---

## 🆘 Si Algo Sale Mal

### "Authentication failed"
- Verifica que copiaste el token completo
- Asegúrate de que el token tiene permisos `repo`
- Verifica que el token no haya expirado

### "Repository not found"
- Confirma que el repo existe y es público
- Verifica la URL: https://github.com/jinavarrete/wizdomdata-webapp

### "Permission denied"
- Asegúrate de ser el dueño del repositorio
- Verifica tu usuario de GitHub

---

## 🎯 Después del Push

Una vez que tu código esté en GitHub:

### Deploy en Vercel (Recomendado - Gratis):

1. Ve a: https://vercel.com
2. Click "Continue with GitHub"
3. Click "New Project"
4. Busca: `wizdomdata-webapp`
5. Click "Import"
6. Click "Deploy"

**¡Tu sitio estará online en ~2 minutos!**

Vercel te dará una URL como: `https://wizdomdata-webapp.vercel.app`

### O Deploy con Netlify:

1. Ve a: https://app.netlify.com
2. Click "Import from Git"
3. Selecciona GitHub
4. Busca tu repo
5. Click "Deploy site"

---

## 📝 Comando Completo de Ejemplo

```bash
# Si tu token es: ghp_1234567890abcdefghijklmnopqrstuvwxyz

git push -u https://ghp_1234567890abcdefghijklmnopqrstuvwxyz@github.com/jinavarrete/wizdomdata-webapp.git main
```

---

## 💡 Tip Pro

Después del primer push exitoso, los siguientes pushes serán más simples:

```bash
# Hacer cambios
git add .
git commit -m "Update: descripción del cambio"
git push
```

---

¿Listo? ¡Crea tu token y ejecuta el push! 🚀
