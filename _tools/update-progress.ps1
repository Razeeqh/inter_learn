# Regenerates PROGRESS.md from the folder tree.
# A chapter counts as complete when its folder holds all 6 expected files.

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
$Expected = @('00-mindmap.md', '01-concepts.md', '02-formulae.md',
    '03-pyq-ap-board.md', '04-pyq-competitive.md', '05-question-patterns.md')

$Courses = [ordered]@{
    'Maths/Class-11-Maths-1A'      = 'Maths 1A (1st Year)'
    'Maths/Class-11-Maths-1B'      = 'Maths 1B (1st Year)'
    'Maths/Class-12-Maths-2A'      = 'Maths 2A (2nd Year)'
    'Maths/Class-12-Maths-2B'      = 'Maths 2B (2nd Year)'
    'Physics/Class-11-Physics'     = 'Physics (1st Year)'
    'Physics/Class-12-Physics'     = 'Physics (2nd Year)'
    'Chemistry/Class-11-Chemistry' = 'Chemistry (1st Year)'
    'Chemistry/Class-12-Chemistry' = 'Chemistry (2nd Year)'
}

$done = 0; $total = 0
$body = New-Object System.Text.StringBuilder

foreach ($course in $Courses.Keys) {
    [void]$body.AppendLine("## $($Courses[$course])")
    [void]$body.AppendLine('')
    [void]$body.AppendLine('| # | Chapter | Status |')
    [void]$body.AppendLine('|---|---------|--------|')

    $dir = Join-Path $Root ($course -replace '/', '\')
    foreach ($chapter in (Get-ChildItem -Path $dir -Directory | Sort-Object Name)) {
        $total++
        $have = $Expected | Where-Object { Test-Path (Join-Path $chapter.FullName $_) }
        $num, $name = $chapter.Name -split '-', 2
        $name = $name -replace '-', ' '
        if ($have.Count -eq 6) {
            $done++
            $link = "$course/$($chapter.Name)/00-mindmap.md"
            [void]$body.AppendLine("| $num | [$name]($link) | DONE |")
        }
        else {
            [void]$body.AppendLine("| $num | $name | pending ($($have.Count)/6) |")
        }
    }
    [void]$body.AppendLine('')
}

$pct = [math]::Round(100 * $done / $total)
$header = @"
# Progress Tracker

Every chapter folder holds 6 files:

``````
  00-mindmap.md            one-page text map of the chapter
  01-concepts.md           topic-by-topic explanation in simple English
  02-formulae.md           every formula, with a "when to use" note
  03-pyq-ap-board.md       AP Inter board questions, Section A / B / C
  04-pyq-competitive.md    JEE Main / AP EAPCET / TG EAPCET questions
  05-question-patterns.md  every question shape: trigger, method, trap
``````

**CHAPTERS COMPLETE:  $done / $total   ($pct%)**

Regenerate this file with:  ``powershell -File _tools\update-progress.ps1``

---

"@

Set-Content -LiteralPath (Join-Path $Root 'PROGRESS.md') -Value ($header + $body.ToString()) -Encoding UTF8
Write-Host "PROGRESS.md updated: $done / $total chapters complete."
