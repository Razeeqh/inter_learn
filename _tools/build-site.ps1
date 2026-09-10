# Builds the browsable website in /site from the markdown chapters.
#
#   powershell -ExecutionPolicy Bypass -File _tools\build-site.ps1
#
# Plain-text notation in the source is typeset for the web:
#   x^2 -> x²   sqrt(x) -> √(x)   theta -> θ   <= -> ≤   ->  -> →   H2O -> H₂O
# ASCII diagrams keep their alignment: every substitution inside a diagram is
# padded back to the original character width so the +---+ boxes still line up.

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
$Site = Join-Path $Root 'site'

$SubjectOrder = @('Maths', 'Physics', 'Chemistry')

$FileKinds = [ordered]@{
    '00-mindmap'           = 'Mind map'
    '01-concepts'          = 'Concepts'
    '02-formulae'          = 'Formulae'
    '03-pyq-ap-board'      = 'Board questions'
    '04-pyq-competitive'   = 'JEE / EAPCET'
    '05-question-patterns' = 'Question patterns'
}

# ---------------------------------------------------------------- symbol maps

$SupChar = @{
    '0' = [char]0x2070; '1' = [char]0x00B9; '2' = [char]0x00B2; '3' = [char]0x00B3
    '4' = [char]0x2074; '5' = [char]0x2075; '6' = [char]0x2076; '7' = [char]0x2077
    '8' = [char]0x2078; '9' = [char]0x2079
    '+' = [char]0x207A; '-' = [char]0x207B; '=' = [char]0x207C
    '(' = [char]0x207D; ')' = [char]0x207E
    'a' = [char]0x1D43; 'b' = [char]0x1D47; 'c' = [char]0x1D9C; 'd' = [char]0x1D48
    'e' = [char]0x1D49; 'f' = [char]0x1DA0; 'g' = [char]0x1D4D; 'h' = [char]0x02B0
    'i' = [char]0x2071; 'j' = [char]0x02B2; 'k' = [char]0x1D4F; 'l' = [char]0x02E1
    'm' = [char]0x1D50; 'n' = [char]0x207F; 'o' = [char]0x1D52; 'p' = [char]0x1D56
    'r' = [char]0x02B3; 's' = [char]0x02E2; 't' = [char]0x1D57; 'u' = [char]0x1D58
    'v' = [char]0x1D5B; 'w' = [char]0x02B7; 'x' = [char]0x02E3; 'y' = [char]0x02B8
    'z' = [char]0x1DBB
}

$SubChar = @{
    '0' = [char]0x2080; '1' = [char]0x2081; '2' = [char]0x2082; '3' = [char]0x2083
    '4' = [char]0x2084; '5' = [char]0x2085; '6' = [char]0x2086; '7' = [char]0x2087
    '8' = [char]0x2088; '9' = [char]0x2089
    '+' = [char]0x208A; '-' = [char]0x208B; '(' = [char]0x208D; ')' = [char]0x208E
    'a' = [char]0x2090; 'e' = [char]0x2091; 'h' = [char]0x2095; 'i' = [char]0x1D62
    'j' = [char]0x2C7C; 'k' = [char]0x2096; 'l' = [char]0x2097; 'm' = [char]0x2098
    'n' = [char]0x2099; 'o' = [char]0x2092; 'p' = [char]0x209A; 'r' = [char]0x1D63
    's' = [char]0x209B; 't' = [char]0x209C; 'u' = [char]0x1D64; 'v' = [char]0x1D65
    'x' = [char]0x2093
}

# pattern -> literal replacement, applied in order, no capture groups
$Symbols = [ordered]@{
    '-->'          = [string][char]0x27F6
    '<--'          = [string][char]0x27F5
    '->'           = [string][char]0x2192
    '<-'           = [string][char]0x2190
    '=>'           = [string][char]0x21D2
    '<='           = [string][char]0x2264
    '>='           = [string][char]0x2265
    '!='           = [string][char]0x2260
    '\+/-'         = [string][char]0x00B1
    '\.\.\.'       = [string][char]0x2026
    '\bsqrt\b'     = [string][char]0x221A
    '\bINT\b'      = [string][char]0x222B
    '\binfinity\b' = [string][char]0x221E
    '\bmu0\b'      = [string][char]0x03BC + [string][char]0x2080
    '\bepsilon0\b' = [string][char]0x03B5 + [string][char]0x2080
    '\balpha\b'    = [string][char]0x03B1
    '\bbeta\b'     = [string][char]0x03B2
    '\bgamma\b'    = [string][char]0x03B3
    '\bdelta\b'    = [string][char]0x03B4
    '\bepsilon\b'  = [string][char]0x03B5
    '\bzeta\b'     = [string][char]0x03B6
    '\beta\b'      = [string][char]0x03B7
    '\btheta\b'    = [string][char]0x03B8
    '\biota\b'     = [string][char]0x03B9
    '\bkappa\b'    = [string][char]0x03BA
    '\blambda\b'   = [string][char]0x03BB
    '\bmu\b'       = [string][char]0x03BC
    '\bnu\b'       = [string][char]0x03BD
    '\brho\b'      = [string][char]0x03C1
    '\bsigma\b'    = [string][char]0x03C3
    '\btau\b'      = [string][char]0x03C4
    '\bphi\b'      = [string][char]0x03C6
    '\bchi\b'      = [string][char]0x03C7
    '\bpsi\b'      = [string][char]0x03C8
    '\bomega\b'    = [string][char]0x03C9
    '\bpi\b'       = [string][char]0x03C0
    '(?-i)\bDelta\b'  = [string][char]0x0394
    '(?-i)\bSigma\b'  = [string][char]0x03A3
    '(?-i)\bOmega\b'  = [string][char]0x03A9
    '(?-i)\bTheta\b'  = [string][char]0x0398
    '(?-i)\bLambda\b' = [string][char]0x039B
    '(?-i)\bGamma\b'  = [string][char]0x0393
    '(?-i)\bPhi\b'    = [string][char]0x03A6
}

# ---------------------------------------------------------------- helpers

function Esc([string]$s) {
    $s -replace '&', '&amp;' -replace '<', '&lt;' -replace '>', '&gt;'
}

function Slug([string]$s) {
    $t = ($s -replace '<[^>]+>', '').ToLower()
    $t = $t -replace '[^a-z0-9]+', '-'
    $t.Trim('-')
}

# Superscript / subscript a run of characters using the unicode maps.
# Returns $null when any character has no unicode form.
function ToUni([string]$run, [hashtable]$map) {
    $out = ''
    foreach ($c in $run.ToCharArray()) {
        $k = [string]$c
        if (-not $map.ContainsKey($k)) { return $null }
        $out += $map[$k]
    }
    $out
}

function IsChemToken([string]$tok) {
    if ($tok -notmatch '\d') { return $false }
    if ($tok -match '[a-z]') { return $true }
    if (($tok.ToCharArray() | Where-Object { [char]::IsUpper($_) }).Count -ge 2) { return $true }
    return $tok -match '^(O2|N2|H2|F2|I2|P4|S8|Cl2|Br2)$'
}

# --------------------------------------------------- prose prettification

function PrettyText([string]$s) {
    foreach ($kv in $Symbols.GetEnumerator()) { $s = $s -creplace $kv.Key, $kv.Value }
    $s = [regex]::Replace($s, '(\d)\s+x\s+(\d)', ('$1 ' + [char]0x00D7 + ' $2'))
    $s = [regex]::Replace($s, '(\d)\s*degrees?\b', ('$1' + [char]0x00B0))
    $s
}

# runs on already-escaped text, inserts <sup>/<sub>
function PrettyTags([string]$s) {
    $s = [regex]::Replace($s, '\^\(([^()]{1,14})\)', '<sup>$1</sup>')
    $s = [regex]::Replace($s, '\^(-?\d+)', '<sup>$1</sup>')
    $s = [regex]::Replace($s, '\^([A-Za-z])\b', '<sup>$1</sup>')
    # electronic configurations: 1s2 3d10
    $s = [regex]::Replace($s, '\b(\d[spdf])(\d{1,2})\b', '$1<sup>$2</sup>')
    # physics subscripts: n1, r2, V1 ...
    $s = [regex]::Replace($s,
        '(?<![A-Za-z0-9])(?<!Q )([nrTmqvPVIRCExyzgfcabdlSDBKtuwhkpsFGMNW])([0-9])(?![A-Za-z0-9])',
        '$1<sub>$2</sub>')
    # chemical formulas: H2SO4, K2Cr2O7
    $s = [regex]::Replace($s, '\b([A-Z][a-z]?\d{0,3}(?:[A-Z][a-z]?\d{0,3})+)\b', {
            param($m)
            if (-not (IsChemToken $m.Value)) { return $m.Value }
            [regex]::Replace($m.Value, '(\d+)', '<sub>$1</sub>')
        })
    $s
}

# ------------------------------------- diagram prettification (width safe)

function PrettyArt([string]$s) {
    foreach ($kv in $Symbols.GetEnumerator()) {
        $pat = $kv.Key; $rep = $kv.Value
        $s = [regex]::Replace($s, $pat, {
                param($m)
                if ($rep.Length -gt $m.Value.Length) { return $m.Value }
                $rep + (' ' * ($m.Value.Length - $rep.Length))
            })
    }
    # superscripts
    $s = [regex]::Replace($s, '\^\(([^()]{1,10})\)|\^(-?[0-9]+)|\^([A-Za-z])', {
            param($m)
            $run = if ($m.Groups[1].Success) { $m.Groups[1].Value }
            elseif ($m.Groups[2].Success) { $m.Groups[2].Value }
            else { $m.Groups[3].Value }
            $u = ToUni $run $SupChar
            if ($null -eq $u -or $u.Length -gt $m.Value.Length) { return $m.Value }
            $u + (' ' * ($m.Value.Length - $u.Length))
        })
    # chemical subscripts (same width, no padding needed)
    $s = [regex]::Replace($s, '\b([A-Z][a-z]?\d{0,3}(?:[A-Z][a-z]?\d{0,3})+)\b', {
            param($m)
            if (-not (IsChemToken $m.Value)) { return $m.Value }
            [regex]::Replace($m.Value, '\d', {
                    param($d) $SubChar[$d.Value]
                })
        })
    $s = [regex]::Replace($s, '(?<=\d )x(?= \d)', [string][char]0x00D7)
    $s
}

function IsArtBlock([string[]]$lines) {
    foreach ($l in $lines) {
        if ($l -match '\+[-=]{2,}' -or $l -match '\|' -or $l -match '^\s*[-_]{4,}\s*$' -or
            $l -match '^\s{2,}-{3,}\s*$' -or $l -match '[\\/]{2,}') { return $true }
    }
    return $false
}

# --------------------------------------------------------- inline markdown

function Inline([string]$s) {
    $store = New-Object System.Collections.ArrayList
    $mark = [char]0x0001

    # code spans
    $s = [regex]::Replace($s, '`([^`]+)`', {
            param($m)
            $null = $store.Add('<code class="inl">' + (Esc $m.Groups[1].Value) + '</code>')
            $mark + [string]($store.Count - 1) + $mark
        })
    # links
    $s = [regex]::Replace($s, '\[([^\]]+)\]\(([^)]+)\)', {
            param($m)
            $href = $m.Groups[2].Value -replace '\.md$', '.html'
            $null = $store.Add('<a href="' + (Esc $href) + '">' + (Esc $m.Groups[1].Value) + '</a>')
            $mark + [string]($store.Count - 1) + $mark
        })

    $s = PrettyText $s
    $s = Esc $s
    $s = PrettyTags $s
    $s = [regex]::Replace($s, '\*\*([^*]+)\*\*', '<strong>$1</strong>')

    for ($i = 0; $i -lt $store.Count; $i++) {
        $s = $s.Replace($mark + [string]$i + $mark, $store[$i])
    }
    $s
}

# ------------------------------------------------------- block converter

function ConvertMarkdown([string[]]$lines) {
    $out = New-Object System.Text.StringBuilder
    $heads = New-Object System.Collections.ArrayList
    $i = 0
    $n = $lines.Count

    while ($i -lt $n) {
        $line = $lines[$i]

        # fenced block
        if ($line -match '^\s*```') {
            $i++
            $buf = New-Object System.Collections.ArrayList
            while ($i -lt $n -and $lines[$i] -notmatch '^\s*```') { $null = $buf.Add($lines[$i]); $i++ }
            $i++
            $arr = $buf.ToArray()
            while ($arr.Count -gt 0 -and $arr[-1].Trim() -eq '') { $arr = $arr[0..($arr.Count - 2)] }
            $art = IsArtBlock $arr
            $cls = if ($art) { 'fig art' } else { 'fig math' }
            $body = ($arr | ForEach-Object { Esc (PrettyArt $_) }) -join "`n"
            $null = $out.Append('<div class="' + $cls + '"><pre>' + $body + "</pre></div>`n")
            continue
        }

        # heading
        if ($line -match '^(#{1,6})\s+(.*)$') {
            $lvl = $Matches[1].Length
            $txt = Inline ($Matches[2].Trim() -replace '\s*#+\s*$', '')
            $id = Slug $txt
            if ($lvl -le 3) { $null = $heads.Add(@{ level = $lvl; text = ($txt -replace '<[^>]+>', '') }) }
            $null = $out.Append("<h$lvl id=""$id"">$txt</h$lvl>`n")
            $i++
            continue
        }

        # horizontal rule
        if ($line -match '^\s*(-{3,}|\*{3,}|_{3,})\s*$') {
            $null = $out.Append("<hr>`n"); $i++; continue
        }

        # table
        if ($line -match '^\s*\|' -and $i + 1 -lt $n -and $lines[$i + 1] -match '^\s*\|[\s:|-]+\|?\s*$') {
            $cells = { param($r) ($r.Trim().Trim('|') -split '(?<!\\)\|') | ForEach-Object { $_.Trim() } }
            $head = & $cells $line
            $i += 2
            $null = $out.Append('<div class="tablewrap"><table><thead><tr>')
            foreach ($h in $head) { $null = $out.Append('<th>' + (Inline $h) + '</th>') }
            $null = $out.Append("</tr></thead><tbody>`n")
            while ($i -lt $n -and $lines[$i] -match '^\s*\|') {
                $row = & $cells $lines[$i]
                $null = $out.Append('<tr>')
                foreach ($c in $row) { $null = $out.Append('<td>' + (Inline $c) + '</td>') }
                $null = $out.Append("</tr>`n")
                $i++
            }
            $null = $out.Append("</tbody></table></div>`n")
            continue
        }

        # blockquote
        if ($line -match '^\s*>') {
            $buf = New-Object System.Collections.ArrayList
            while ($i -lt $n -and $lines[$i] -match '^\s*>') {
                $null = $buf.Add(($lines[$i] -replace '^\s*>\s?', '')); $i++
            }
            $null = $out.Append('<blockquote>')
            $para = @()
            foreach ($b in $buf) {
                if ($b.Trim() -eq '') {
                    if ($para.Count) { $null = $out.Append('<p>' + (Inline ($para -join ' ')) + '</p>'); $para = @() }
                }
                else { $para += $b.Trim() }
            }
            if ($para.Count) { $null = $out.Append('<p>' + (Inline ($para -join ' ')) + '</p>') }
            $null = $out.Append("</blockquote>`n")
            continue
        }

        # list
        if ($line -match '^\s*([-*]|\d+\.)\s+') {
            $ordered = $line -match '^\s*\d+\.\s'
            $isChk = $line -match '^\s*[-*]\s+\[[ x]\]'
            $tag = if ($ordered) { 'ol' } else { 'ul' }
            $cls = if ($isChk) { ' class="chk"' } else { '' }
            $null = $out.Append("<$tag$cls>`n")
            while ($i -lt $n -and $lines[$i] -match '^\s*([-*]|\d+\.)\s+') {
                $item = $lines[$i] -replace '^\s*([-*]|\d+\.)\s+', '' -replace '^\[[ x]\]\s*', ''
                $i++
                while ($i -lt $n -and $lines[$i] -match '^\s{2,}\S' -and $lines[$i] -notmatch '^\s*([-*]|\d+\.)\s+') {
                    $item += ' ' + $lines[$i].Trim(); $i++
                }
                $null = $out.Append('<li>' + (Inline $item) + "</li>`n")
            }
            $null = $out.Append("</$tag>`n")
            continue
        }

        # blank
        if ($line.Trim() -eq '') { $i++; continue }

        # paragraph
        $para = @()
        while ($i -lt $n -and $lines[$i].Trim() -ne '' -and
            $lines[$i] -notmatch '^\s*(```|#{1,6}\s|>|\||[-*]\s|\d+\.\s)' -and
            $lines[$i] -notmatch '^\s*(-{3,}|\*{3,}|_{3,})\s*$') {
            $para += $lines[$i].Trim(); $i++
        }
        if ($para.Count) { $null = $out.Append('<p>' + (Inline ($para -join ' ')) + "</p>`n") }
        else { $i++ }
    }

    return @{ html = $out.ToString(); heads = $heads }
}

# ---------------------------------------------------------------- model

function CourseTitle([string]$folder) {
    $t = $folder
    $year = if ($t -like 'Class-11-*') { '1st Year' } else { '2nd Year' }
    $t = $t -replace '^Class-1[12]-', ''
    $t = $t -replace '-', ' '
    "$t ($year)"
}

Write-Host 'Scanning chapters...'
$subjects = @()
foreach ($sname in $SubjectOrder) {
    $sdir = Join-Path $Root $sname
    if (-not (Test-Path $sdir)) { continue }
    $courses = @()
    foreach ($cdir in (Get-ChildItem $sdir -Directory | Sort-Object Name)) {
        $chapters = @()
        foreach ($chdir in (Get-ChildItem $cdir.FullName -Directory | Sort-Object Name)) {
            $num, $nm = $chdir.Name -split '-', 2
            $chapters += [pscustomobject]@{
                Num  = $num
                Name = ($nm -replace '-', ' ')
                Path = "$sname/$($cdir.Name)/$($chdir.Name)"
                Dir  = $chdir.FullName
            }
        }
        if ($chapters.Count) {
            $courses += [pscustomobject]@{
                Name     = CourseTitle $cdir.Name
                Path     = "$sname/$($cdir.Name)"
                Chapters = $chapters
            }
        }
    }
    $subjects += [pscustomobject]@{ Name = $sname; Courses = $courses }
}

# ---------------------------------------------------------------- shell

$Shell = @'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>@@TITLE@@</title>
<link rel="stylesheet" href="@@ROOT@@assets/style.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='26' font-size='26'>&#128218;</text></svg>">
</head>
<body data-root="@@ROOT@@" data-path="@@PATH@@">

<header class="topbar">
  <button class="iconbtn" id="navtoggle" title="Menu">&#9776;</button>
  <a class="brand" href="@@ROOT@@index.html">
    <span class="logo">M</span>
    <span>AP Inter MPC<small>Maths &middot; Physics &middot; Chemistry</small></span>
  </a>
  <div class="searchwrap">
    <span class="si">&#128269;</span>
    <input id="q" type="search" placeholder="Search chapters and topics" autocomplete="off" spellcheck="false">
    <kbd>/</kbd>
    <div class="results" id="results"></div>
  </div>
  <button class="iconbtn" id="themebtn" title="Theme">&#9790;</button>
</header>

<div class="layout">
  <nav class="sidebar" id="sidebar"></nav>
  <main class="main">
@@BODY@@
  </main>
  <aside class="toc" id="toc"></aside>
</div>
<div id="scrim"></div>

<script src="@@ROOT@@assets/nav.js"></script>
<script src="@@ROOT@@assets/search.js"></script>
<script src="@@ROOT@@assets/app.js"></script>
</body>
</html>
'@

function WritePage([string]$outFile, [string]$title, [string]$rootRel, [string]$pathKey, [string]$body) {
    $html = $Shell.Replace('@@TITLE@@', $title).Replace('@@ROOT@@', $rootRel).Replace('@@PATH@@', $pathKey).Replace('@@BODY@@', $body)
    $dir = Split-Path -Parent $outFile
    if (-not (Test-Path $dir)) { $null = New-Item -ItemType Directory -Path $dir -Force }
    [System.IO.File]::WriteAllText($outFile, $html, (New-Object System.Text.UTF8Encoding $false))
}

# ---------------------------------------------------------------- clean

foreach ($s in $SubjectOrder) {
    $p = Join-Path $Site $s
    if (Test-Path $p) { Remove-Item $p -Recurse -Force }
}

# ---------------------------------------------------------------- chapters

$searchRows = New-Object System.Collections.ArrayList
$pageCount = 0

foreach ($subject in $subjects) {
    foreach ($course in $subject.Courses) {
        foreach ($ch in $course.Chapters) {

            $kinds = @($FileKinds.Keys)
            for ($k = 0; $k -lt $kinds.Count; $k++) {
                $kind = $kinds[$k]
                $md = Join-Path $ch.Dir "$kind.md"
                if (-not (Test-Path $md)) { continue }

                $lines = [System.IO.File]::ReadAllLines($md)
                $res = ConvertMarkdown $lines

                $rootRel = '../../../'
                $pathKey = $ch.Path

                $sb = New-Object System.Text.StringBuilder
                $null = $sb.Append('<div class="crumbs"><a href="' + $rootRel + 'index.html">Home</a><span>/</span>' +
                    '<a href="' + $rootRel + $subject.Name + '/index.html">' + $subject.Name + '</a><span>/</span>' +
                    '<a href="' + $rootRel + $course.Path + '/index.html">' + (Esc $course.Name) + '</a><span>/</span>' +
                    (Esc $ch.Name) + '</div>')

                $null = $sb.Append('<div class="tabs">')
                foreach ($kk in $kinds) {
                    if (-not (Test-Path (Join-Path $ch.Dir "$kk.md"))) { continue }
                    $active = if ($kk -eq $kind) { ' class="active"' } else { '' }
                    $null = $sb.Append('<a href="' + $kk + '.html"' + $active + '>' + $FileKinds[$kk] + '</a>')
                }
                $null = $sb.Append('</div>')

                $null = $sb.Append('<article class="doc">' + $res.html + '</article>')

                # prev / next within the chapter
                $prev = if ($k -gt 0) { $kinds[$k - 1] } else { $null }
                $next = if ($k -lt $kinds.Count - 1) { $kinds[$k + 1] } else { $null }
                $null = $sb.Append('<div class="pager">')
                if ($prev -and (Test-Path (Join-Path $ch.Dir "$prev.md"))) {
                    $null = $sb.Append('<a href="' + $prev + '.html"><span>Previous</span>&larr; ' + $FileKinds[$prev] + '</a>')
                }
                else { $null = $sb.Append('<span></span>') }
                if ($next -and (Test-Path (Join-Path $ch.Dir "$next.md"))) {
                    $null = $sb.Append('<a href="' + $next + '.html"><span>Next</span>' + $FileKinds[$next] + ' &rarr;</a>')
                }
                $null = $sb.Append('</div>')

                $title = "$($ch.Name) - $($FileKinds[$kind]) | AP Inter MPC"
                WritePage (Join-Path $Site "$($ch.Path)/$kind.html") $title $rootRel $pathKey $sb.ToString()
                $pageCount++

                $hs = ($res.heads | Where-Object { $_.level -ge 2 } | ForEach-Object { $_.text }) -join ' '
                if ($hs.Length -gt 500) { $hs = $hs.Substring(0, 500) }
                $null = $searchRows.Add([pscustomobject]@{
                        p = "$($ch.Path)/$kind"
                        c = $ch.Name
                        s = $course.Name
                        h = $hs
                    })
            }
        }

        # course index
        $body = New-Object System.Text.StringBuilder
        $null = $body.Append('<div class="crumbs"><a href="../../index.html">Home</a><span>/</span><a href="../index.html">' + $subject.Name + '</a></div>')
        $null = $body.Append('<article class="doc"><h1>' + (Esc $course.Name) + '</h1><p>' + $course.Chapters.Count + ' chapters. Pick one to open its mind map.</p></article>')
        $null = $body.Append('<div class="chapgrid">')
        foreach ($ch in $course.Chapters) {
            $null = $body.Append('<a href="' + $ch.Num + '-' + ($ch.Name -replace ' ', '-') + '/00-mindmap.html">' +
                '<div class="n">CHAPTER ' + $ch.Num + '</div><div class="t">' + (Esc $ch.Name) + '</div></a>')
        }
        $null = $body.Append('</div>')
        WritePage (Join-Path $Site "$($course.Path)/index.html") ($course.Name + ' | AP Inter MPC') '../../' $course.Path $body.ToString()
        $pageCount++
    }

    # subject index
    $body = New-Object System.Text.StringBuilder
    $null = $body.Append('<div class="crumbs"><a href="../index.html">Home</a></div>')
    $null = $body.Append('<article class="doc"><h1>' + $subject.Name + '</h1></article><div class="cards">')
    foreach ($course in $subject.Courses) {
        $null = $body.Append('<div class="card"><h3>' + (Esc $course.Name) + '</h3><div class="sub">' +
            $course.Chapters.Count + ' chapters</div><ul>')
        foreach ($ch in $course.Chapters) {
            $null = $body.Append('<li><a href="' + ($course.Path -replace '^[^/]+/', '') + '/' + $ch.Num + '-' +
                ($ch.Name -replace ' ', '-') + '/00-mindmap.html">' + (Esc $ch.Name) + '<em>' + $ch.Num + '</em></a></li>')
        }
        $null = $body.Append('</ul></div>')
    }
    $null = $body.Append('</div>')
    WritePage (Join-Path $Site "$($subject.Name)/index.html") ($subject.Name + ' | AP Inter MPC') '../' $subject.Name $body.ToString()
    $pageCount++
}

# ---------------------------------------------------------------- home

$totalCh = ($subjects | ForEach-Object { $_.Courses | ForEach-Object { $_.Chapters.Count } } | Measure-Object -Sum).Sum

# $home is a read-only automatic variable in PowerShell, so the builder uses $homeSb.
$homeSb = New-Object System.Text.StringBuilder
$null = $homeSb.Append(@"
<section class="hero">
  <h1>Every chapter of AP Inter MPC,<br>written for someone starting from zero.</h1>
  <p class="lede">Mind maps, concepts in plain English, complete formula sheets, board previous-year
  questions with open answers, JEE&nbsp;/&nbsp;EAPCET question banks, and every question pattern that
  can be asked &mdash; for all three subjects, both years.</p>
  <div class="pills">
    <span class="pill">Board of Intermediate Education, Andhra Pradesh</span>
    <span class="pill">JEE Main</span>
    <span class="pill">AP EAPCET</span>
    <span class="pill">TG EAPCET</span>
  </div>
</section>

<div class="stats">
  <div class="stat"><b>$totalCh</b><span>chapters</span></div>
  <div class="stat"><b>$($totalCh * 6)</b><span>study pages</span></div>
  <div class="stat"><b>3</b><span>subjects, 2 years</span></div>
  <div class="stat"><b>0</b><span>prior knowledge assumed</span></div>
</div>

<div class="cards">
"@)

$blurb = @{
    Maths     = 'Papers 1A, 1B, 2A and 2B &mdash; 75 marks each'
    Physics   = 'First and second year &mdash; 60 marks each'
    Chemistry = 'First and second year &mdash; 60 marks each'
}
foreach ($subject in $subjects) {
    $cnt = ($subject.Courses | ForEach-Object { $_.Chapters.Count } | Measure-Object -Sum).Sum
    $null = $homeSb.Append('<div class="card"><h3><span class="dot ' + $subject.Name.Substring(0, 1).ToLower() + '"></span>' +
        $subject.Name + '</h3><div class="sub">' + $blurb[$subject.Name] + ' &middot; ' + $cnt + ' chapters</div><ul>')
    foreach ($course in $subject.Courses) {
        $null = $homeSb.Append('<li><a href="' + $course.Path + '/index.html">' + (Esc $course.Name) +
            '<em>' + $course.Chapters.Count + '</em></a></li>')
    }
    $null = $homeSb.Append('</ul></div>')
}

$null = $homeSb.Append(@'
</div>

<article class="doc">
<h2 id="how-to-use">How to use this</h2>
<p>Every chapter has the same six pages, in the order you should read them.</p>
<div class="tablewrap"><table><thead><tr><th>Page</th><th>What it gives you</th></tr></thead><tbody>
<tr><td><strong>Mind map</strong></td><td>The whole chapter on one page, where the marks are, and what order to study in.</td></tr>
<tr><td><strong>Concepts</strong></td><td>Topic by topic in plain English, with a worked example for every idea.</td></tr>
<tr><td><strong>Formulae</strong></td><td>Every formula with a &ldquo;when to use it&rdquo; note, ending in a short palm list.</td></tr>
<tr><td><strong>Board questions</strong></td><td>AP Inter questions split into Section A, B and C, with the answers written out.</td></tr>
<tr><td><strong>JEE / EAPCET</strong></td><td>Multiple choice questions grouped by pattern, plus exam-hall shortcuts.</td></tr>
<tr><td><strong>Question patterns</strong></td><td>Every question shape as trigger &rarr; method &rarr; trap.</td></tr>
</tbody></table></div>

<h2 id="blueprint">Exam blueprint</h2>
<div class="tablewrap"><table><thead><tr><th>Paper</th><th>Section A</th><th>Section B</th><th>Section C</th><th>Total</th><th>Pass</th></tr></thead><tbody>
<tr><td><strong>Maths</strong> 1A / 1B / 2A / 2B</td><td>10 &times; 2, answer all</td><td>7 &times; 4, answer any 5</td><td>7 &times; 7, answer any 5</td><td>75</td><td>26</td></tr>
<tr><td><strong>Physics</strong> and <strong>Chemistry</strong></td><td>10 &times; 2, answer all</td><td>8 &times; 4, answer any 6</td><td>3 &times; 8, answer any 2</td><td>60</td><td>21</td></tr>
</tbody></table></div>

<div class="tablewrap"><table><thead><tr><th>Entrance</th><th>Maths</th><th>Physics</th><th>Chemistry</th><th>Marking</th></tr></thead><tbody>
<tr><td>AP EAPCET</td><td>80</td><td>40</td><td>40</td><td>+1, <strong>no negative marking</strong></td></tr>
<tr><td>TG EAPCET</td><td>80</td><td>40</td><td>40</td><td>+1, <strong>no negative marking</strong></td></tr>
<tr><td>JEE Main</td><td>25</td><td>25</td><td>25</td><td>+4, &minus;1 for a wrong answer</td></tr>
</tbody></table></div>

<blockquote><p><strong>About the previous-year questions.</strong> BIEAP recycles the same questions across
many sessions, so they are grouped by how often they appear rather than tagged to one exact year.
Cross-check against the official papers at <a href="https://bie.ap.gov.in">bie.ap.gov.in</a> before your exam.</p></blockquote>
</article>
'@)

WritePage (Join-Path $Site 'index.html') 'AP Inter MPC - Maths, Physics, Chemistry' '' 'home' $homeSb.ToString()
$pageCount++

# ---------------------------------------------------------------- data files

$navJson = ($subjects | ForEach-Object {
        [pscustomobject]@{
            name    = $_.Name
            courses = @($_.Courses | ForEach-Object {
                    [pscustomobject]@{
                        name     = $_.Name
                        path     = $_.Path
                        chapters = @($_.Chapters | ForEach-Object {
                                [pscustomobject]@{ num = $_.Num; name = $_.Name; path = $_.Path }
                            })
                    }
                })
        }
    }) | ConvertTo-Json -Depth 8 -Compress

[System.IO.File]::WriteAllText((Join-Path $Site 'assets/nav.js'), "window.NAV=$navJson;", (New-Object System.Text.UTF8Encoding $false))

$searchJson = $searchRows | ConvertTo-Json -Depth 4 -Compress
[System.IO.File]::WriteAllText((Join-Path $Site 'assets/search.js'), "window.SEARCH=$searchJson;", (New-Object System.Text.UTF8Encoding $false))

Write-Host ("Built {0} pages into {1}" -f $pageCount, $Site)
Write-Host ("Open: {0}" -f (Join-Path $Site 'index.html'))
