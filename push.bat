@echo off
title Push Portfolio to GitHub
set "PATH=C:\Users\maria\AppData\Local\Programs\Git\cmd;%PATH%"
echo ========================================================
echo Pushing Portfolio to GitHub: https://github.com/mariaakterbd1-coder/Portfolio
echo ========================================================
echo.
git push -u origin main
echo.
echo ========================================================
echo Done! If you saw any prompt, sign in with your browser.
echo ========================================================
pause
