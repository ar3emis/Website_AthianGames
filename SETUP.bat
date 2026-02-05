@echo off
echo ========================================
echo Athian Games Website - Quick Setup
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install dependencies
    echo Please check the error message above
    pause
    exit /b 1
)

echo.
echo Step 2: Checking for .env file...
if not exist .env (
    echo .env file not found. Creating from example...
    copy .env.example .env
    echo.
    echo IMPORTANT: Edit .env file with your credentials before running dev server
    echo Required: MongoDB URI, Stripe keys, Payload secret
    echo.
) else (
    echo .env file already exists
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env file with your credentials
echo 2. Run: npm run dev
echo 3. Visit: http://localhost:3000
echo.
echo Documentation:
echo - Quick Start: QUICK_START.md
echo - Full Guide: README.md
echo.
pause
