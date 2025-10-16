# Script PowerShell para hacer push a GitHub
# Ejecuta este script desde PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  WizdomData - Push to GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Solicitar token
Write-Host "Necesitas un Personal Access Token de GitHub" -ForegroundColor Yellow
Write-Host "Si no lo tienes, crealo aqui: https://github.com/settings/tokens" -ForegroundColor Yellow
Write-Host ""
Write-Host "El token debe tener permisos de 'repo'" -ForegroundColor Yellow
Write-Host ""

$token = Read-Host "Pega tu GitHub Personal Access Token"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "Error: Token vacio" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Haciendo push a GitHub..." -ForegroundColor Green

# Hacer push usando el token
$repoUrl = "https://$($token)@github.com/jinavarrete/wizdomdata-webapp.git"

try {
    git push -u $repoUrl main

    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  ¡Push exitoso!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Tu codigo esta en: https://github.com/jinavarrete/wizdomdata-webapp" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Proximos pasos:" -ForegroundColor Yellow
        Write-Host "1. Ve a https://vercel.com" -ForegroundColor White
        Write-Host "2. Click en 'New Project'" -ForegroundColor White
        Write-Host "3. Importa tu repositorio de GitHub" -ForegroundColor White
        Write-Host "4. Click en 'Deploy'" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "Error al hacer push. Verifica tu token y repositorio." -ForegroundColor Red
    }
} catch {
    Write-Host ""
    Write-Host "Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Presiona cualquier tecla para salir..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
