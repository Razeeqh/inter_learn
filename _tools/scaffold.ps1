# Generates the folder tree for the AP Intermediate (MPC) study bank.
# Safe to re-run: existing files are never overwritten.

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot

$Syllabus = [ordered]@{
    'Maths/Class-11-Maths-1A'  = @(
        'Functions', 'Mathematical Induction', 'Matrices', 'Addition of Vectors',
        'Product of Vectors', 'Trigonometric Ratios upto Transformations',
        'Trigonometric Equations', 'Inverse Trigonometric Functions',
        'Hyperbolic Functions', 'Properties of Triangles'
    )
    'Maths/Class-11-Maths-1B'  = @(
        'Locus', 'Transformation of Axes', 'The Straight Line', 'Pair of Straight Lines',
        'Three Dimensional Coordinates', 'Direction Cosines and Direction Ratios',
        'The Plane', 'Limits and Continuity', 'Differentiation', 'Applications of Derivatives'
    )
    'Maths/Class-12-Maths-2A'  = @(
        'Complex Numbers', 'De Moivre Theorem', 'Quadratic Expressions', 'Theory of Equations',
        'Permutations and Combinations', 'Binomial Theorem', 'Partial Fractions',
        'Measures of Dispersion', 'Probability', 'Random Variables and Probability Distributions'
    )
    'Maths/Class-12-Maths-2B'  = @(
        'Circle', 'System of Circles', 'Parabola', 'Ellipse', 'Hyperbola',
        'Integration', 'Definite Integrals', 'Differential Equations'
    )
    'Physics/Class-11-Physics' = @(
        'Physical World', 'Units and Measurements', 'Motion in a Straight Line',
        'Motion in a Plane', 'Laws of Motion', 'Work Energy and Power',
        'Systems of Particles and Rotational Motion', 'Oscillations', 'Gravitation',
        'Mechanical Properties of Solids', 'Mechanical Properties of Fluids',
        'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory'
    )
    'Physics/Class-12-Physics' = @(
        'Waves', 'Ray Optics and Optical Instruments', 'Wave Optics',
        'Electric Charges and Fields', 'Electrostatic Potential and Capacitance',
        'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter',
        'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves',
        'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei',
        'Semiconductor Electronics'
    )
    'Chemistry/Class-11-Chemistry' = @(
        'Atomic Structure', 'Classification of Elements and Periodicity',
        'Chemical Bonding and Molecular Structure', 'States of Matter Gases and Liquids',
        'Stoichiometry', 'Thermodynamics', 'Chemical Equilibrium and Acids Bases',
        'Hydrogen and its Compounds', 'The s-Block Elements',
        'p-Block Elements Group 13 Boron Family', 'p-Block Elements Group 14 Carbon Family',
        'Environmental Chemistry', 'Organic Chemistry Some Basic Principles and Techniques'
    )
    'Chemistry/Class-12-Chemistry' = @(
        'Solid State', 'Solutions', 'Electrochemistry and Chemical Kinetics',
        'Surface Chemistry', 'General Principles of Metallurgy',
        'p-Block Elements Group 15 to 18', 'd and f Block Elements',
        'Coordination Compounds', 'Polymers', 'Biomolecules', 'Chemistry in Everyday Life',
        'Haloalkanes and Haloarenes', 'Organic Compounds containing C H and O',
        'Organic Compounds containing Nitrogen'
    )
}

# Expected file set per chapter folder (created by hand, not by this script):
#   00-mindmap.md, 01-concepts.md, 02-formulae.md,
#   03-pyq-ap-board.md, 04-pyq-competitive.md, 05-question-patterns.md

function Get-SafeName([string]$name) {
    ($name -replace '[^A-Za-z0-9 \-]', '' -replace '\s+', '-')
}

$made = 0
foreach ($course in $Syllabus.Keys) {
    $i = 0
    foreach ($chapter in $Syllabus[$course]) {
        $i++
        $folder = Join-Path $Root (Join-Path $course ('{0:D2}-{1}' -f $i, (Get-SafeName $chapter)))
        if (-not (Test-Path $folder)) { $made++ }
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }
}

$chapterCount = 0
foreach ($course in $Syllabus.Keys) { $chapterCount += $Syllabus[$course].Count }
Write-Host "Chapters: $chapterCount  |  New folders: $made"
