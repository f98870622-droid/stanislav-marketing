@echo off
cd /d "%~dp0"
where npm >nul 2>&1
if errorlevel 1 (
  echo Установи Node.js: https://nodejs.org
  pause
  exit /b 1
)
call npm install
npm run dev
