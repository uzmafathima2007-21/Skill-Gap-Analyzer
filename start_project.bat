@echo off

start cmd /k "cd /d %~dp0backend && python app.py"

timeout /t 2 /nobreak >nul

start cmd /k "cd /d %~dp0 && npx http-server . -c-1"

timeout /t 3 /nobreak >nul

start http://127.0.0.1:8081