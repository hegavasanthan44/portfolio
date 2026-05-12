@echo off
REM Portfolio Website Setup Script for Windows

echo.
echo ========================================
echo   Hega's Portfolio Website Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version
echo.
echo [OK] npm is installed
npm --version
echo.

echo ========================================
echo Installing Dependencies...
echo ========================================
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Failed to install dependencies
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo.
echo 1. Customize your portfolio:
echo    - Edit components in src/components/
echo    - Update your personal information
echo    - Add your projects and skills
echo.
echo 2. Start development server:
echo    npm run dev
echo.
echo 3. Build for production:
echo    npm run build
echo.
echo 4. Deploy to Vercel, Netlify, or your hosting provider
echo.
echo For more details, see SETUP_INSTRUCTIONS.md
echo.
echo Happy coding! 🚀
echo.
pause
