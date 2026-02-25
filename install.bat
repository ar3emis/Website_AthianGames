@echo off
cd /d D:\MyWebsite\athian-games
call npm install --verbose
if %ERRORLEVEL% neq 0 (
    echo Install failed with error code %ERRORLEVEL%
    exit /b %ERRORLEVEL%
)
echo Installation completed successfully

