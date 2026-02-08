# Production Database Setup - Quick Start

Write-Host "🚀 Athian Games - Production Database Setup" -ForegroundColor Cyan
Write-Host ""

# Check if Turso CLI is installed
$tursoInstalled = Get-Command turso -ErrorAction SilentlyContinue

if (!$tursoInstalled) {
    Write-Host "❌ Turso CLI not found" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installing Turso CLI..." -ForegroundColor Yellow
    iwr -useb https://turso.tech/install.ps1 | iex
    
    Write-Host ""
    Write-Host "✅ Turso CLI installed!" -ForegroundColor Green
    Write-Host "Please restart your terminal and run this script again." -ForegroundColor Yellow
    exit
}

Write-Host "✅ Turso CLI found" -ForegroundColor Green
Write-Host ""

# Login to Turso
Write-Host "🔐 Logging in to Turso..." -ForegroundColor Cyan
turso auth login

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to login to Turso" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Logged in to Turso" -ForegroundColor Green
Write-Host ""

# Create database
Write-Host "📦 Creating database 'athian-games'..." -ForegroundColor Cyan
$createOutput = turso db create athian-games 2>&1

if ($createOutput -match "already exists") {
    Write-Host "⚠️  Database 'athian-games' already exists" -ForegroundColor Yellow
} elseif ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Database created successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to create database" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Get database URL
Write-Host "🔗 Getting database URL..." -ForegroundColor Cyan
$dbUrl = turso db show athian-games --url

Write-Host "✅ Database URL: $dbUrl" -ForegroundColor Green
Write-Host ""

# Create auth token
Write-Host "🔑 Creating auth token..." -ForegroundColor Cyan
$authToken = turso db tokens create athian-games

Write-Host "✅ Auth token created!" -ForegroundColor Green
Write-Host ""

# Construct full URL
$fullUrl = "$dbUrl?authToken=$authToken"

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📝 COPY THIS TO YOUR NETLIFY ENVIRONMENT VARIABLES" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "Variable Name: DATABASE_URL" -ForegroundColor White
Write-Host "Value:" -ForegroundColor White
Write-Host $fullUrl -ForegroundColor Green
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to push schema
Write-Host "Would you like to push your Prisma schema to this database now? (Y/N)" -ForegroundColor Yellow
$response = Read-Host

if ($response -eq "Y" -or $response -eq "y") {
    Write-Host ""
    Write-Host "📤 Pushing schema to database..." -ForegroundColor Cyan
    
    # Set DATABASE_URL temporarily
    $env:DATABASE_URL = $fullUrl
    
    # Push schema
    npx prisma db push
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Schema pushed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to push schema" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📋 NEXT STEPS" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to Netlify Dashboard → Your Site → Site Settings" -ForegroundColor White
Write-Host "2. Click 'Environment Variables'" -ForegroundColor White
Write-Host "3. Add a new variable:" -ForegroundColor White
Write-Host "   - Name: DATABASE_URL" -ForegroundColor White
Write-Host "   - Value: (the URL shown above)" -ForegroundColor White
Write-Host "4. Deploy your site" -ForegroundColor White
Write-Host "5. Test beta signup at: https://athiangames.com/products/fabric-ai" -ForegroundColor White
Write-Host "6. View signups at: https://athiangames.com/admin/beta" -ForegroundColor White
Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""

