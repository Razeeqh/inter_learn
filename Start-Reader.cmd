@echo off
rem Starts the notes reader. The markdown folders are read live from this
rem directory - nothing is copied or pre-built.
cd /d "%~dp0"
python reader\serve.py
pause
