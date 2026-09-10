# AP Intermediate MPC — Mind-Map Study Bank

**Maths · Physics · Chemistry — 1st Year and 2nd Year**

Built for a student who is **weak at studies and starting from zero**.
Every page is written bottom-up: plain-language concept first, then the formula,
then the exact question shapes that get asked.

```
  BOARD       :  Board of Intermediate Education, Andhra Pradesh (BIEAP)
  ENTRANCES   :  JEE Main  ·  AP EAPCET (EAMCET)  ·  TG EAPCET (TS EAMCET)
```

---

# HOW THIS IS WRITTEN (please read once)

Everything is **plain text**. No LaTeX, no diagram code, no special extensions
needed. You can read every file exactly as it appears, in any editor, on any phone.

```
  Formulas          ->  drawn inside boxes like this one
  Matrices          ->  drawn as grids with +---+ borders
  Mind maps         ->  drawn as text trees with | and +--
  Powers            ->  written as  T^-2  ,  10^5  ,  a^3
  Square root       ->  written as  sqrt( l / g )
  Greek letters     ->  spelled out:  theta , alpha , pi , rho
  Errors            ->  dA  means "the error in A"
  Answers           ->  written directly below the question, never hidden
```

If any page is still hard to read, say so and it will be rewritten.

---

# FOLDER STRUCTURE

```
  Inter_learning_bot/
  |
  +-- README.md            <- you are here
  +-- PROGRESS.md          <- which chapters are written
  +-- _tools/              <- script that builds the folder tree
  |
  +-- Maths/
  |     +-- Class-11-Maths-1A/
  |     |     +-- 01-Functions/
  |     |     +-- 02-Mathematical-Induction/
  |     |     +-- 03-Matrices/
  |     |     |     +-- 00-mindmap.md
  |     |     |     +-- 01-concepts.md
  |     |     |     +-- 02-formulae.md
  |     |     |     +-- 03-pyq-ap-board.md
  |     |     |     +-- 04-pyq-competitive.md
  |     |     |     +-- 05-question-patterns.md
  |     |     +-- ...
  |     +-- Class-11-Maths-1B/
  |     +-- Class-12-Maths-2A/
  |     +-- Class-12-Maths-2B/
  |
  +-- Physics/
  |     +-- Class-11-Physics/
  |     +-- Class-12-Physics/
  |
  +-- Chemistry/
        +-- Class-11-Chemistry/
        +-- Class-12-Chemistry/
```

## What is inside every chapter folder

```
  +--------------------------+------------------------------------------------+
  |  FILE                    |  WHAT IT CONTAINS                              |
  +--------------------------+------------------------------------------------+
  |  00-mindmap.md           |  One-page text map of the whole chapter,       |
  |                          |  plus where the marks are and what order       |
  |                          |  to study in                                   |
  |                          |                                                |
  |  01-concepts.md          |  Topic-by-topic explanation in simple English, |
  |                          |  with worked examples and a mistakes checklist |
  |                          |                                                |
  |  02-formulae.md          |  Every formula of every topic, with a          |
  |                          |  "when to use it" note beside each one         |
  |                          |                                                |
  |  03-pyq-ap-board.md      |  AP Inter board previous-year questions,       |
  |                          |  split into Section A / B / C with answers     |
  |                          |                                                |
  |  04-pyq-competitive.md   |  JEE Main / AP EAPCET / TG EAPCET questions,   |
  |                          |  grouped by pattern, plus exam-hall shortcuts  |
  |                          |                                                |
  |  05-question-patterns.md |  Every distinct question shape that can be     |
  |                          |  asked: trigger, method, trap                  |
  +--------------------------+------------------------------------------------+
```

**All 94 chapters are written** — 564 files, about 20 MB of material.
The full chapter list is in [PROGRESS.md](PROGRESS.md).

```
  +-----------------------------+----------+
  |  Maths      1A / 1B / 2A / 2B  |   38   |
  |  Physics    1st / 2nd Year     |   29   |
  |  Chemistry  1st / 2nd Year     |   27   |
  +-----------------------------+----------+
  |  TOTAL CHAPTERS                |   94   |
  +-----------------------------+----------+
```

---

# MASTER MIND MAP

```
                        A P   I N T E R   M P C
                                  |
        +-------------------------+-------------------------+
        |                         |                         |
      MATHS                    PHYSICS                  CHEMISTRY
        |                         |                         |
   +----+----+              +-----+-----+             +-----+-----+
   |         |              |           |             |           |
 1st YEAR  2nd YEAR      1st YEAR    2nd YEAR      1st YEAR    2nd YEAR
```

## MATHS

```
  1st YEAR
  |
  +-- PAPER 1A  (Algebra & Trigonometry)
  |     +-- Functions
  |     +-- Mathematical Induction
  |     +-- Matrices                    <-- biggest scorer
  |     +-- Addition of Vectors
  |     +-- Product of Vectors
  |     +-- Trigonometric Ratios
  |     +-- Trigonometric Equations
  |     +-- Inverse Trigonometric Functions
  |     +-- Hyperbolic Functions
  |     +-- Properties of Triangles
  |
  +-- PAPER 1B  (Coordinate Geometry & Calculus)
        +-- Locus
        +-- Transformation of Axes
        +-- The Straight Line
        +-- Pair of Straight Lines
        +-- Three Dimensional Coordinates
        +-- Direction Cosines and Ratios
        +-- The Plane
        +-- Limits and Continuity
        +-- Differentiation
        +-- Applications of Derivatives

  2nd YEAR
  |
  +-- PAPER 2A  (Algebra & Probability)
  |     +-- Complex Numbers
  |     +-- De Moivre's Theorem
  |     +-- Quadratic Expressions
  |     +-- Theory of Equations
  |     +-- Permutations and Combinations
  |     +-- Binomial Theorem
  |     +-- Partial Fractions             <-- easy marks
  |     +-- Measures of Dispersion
  |     +-- Probability
  |     +-- Random Variables
  |
  +-- PAPER 2B  (Conics & Calculus)
        +-- Circle
        +-- System of Circles
        +-- Parabola
        +-- Ellipse
        +-- Hyperbola
        +-- Integration                   <-- biggest scorer
        +-- Definite Integrals
        +-- Differential Equations
```

## PHYSICS

```
  1st YEAR
  |
  +-- MECHANICS
  |     +-- Physical World
  |     +-- Units and Measurements        <-- easiest chapter, do it first
  |     +-- Motion in a Straight Line
  |     +-- Motion in a Plane
  |     +-- Laws of Motion
  |     +-- Work, Energy and Power
  |     +-- Systems of Particles and Rotational Motion
  |     +-- Gravitation
  |
  +-- PROPERTIES OF MATTER
  |     +-- Mechanical Properties of Solids
  |     +-- Mechanical Properties of Fluids
  |
  +-- HEAT
  |     +-- Thermal Properties of Matter
  |     +-- Thermodynamics
  |     +-- Kinetic Theory
  |
  +-- Oscillations

  2nd YEAR
  |
  +-- WAVES AND OPTICS
  |     +-- Waves
  |     +-- Ray Optics and Optical Instruments
  |     +-- Wave Optics
  |
  +-- ELECTRICITY AND MAGNETISM
  |     +-- Electric Charges and Fields
  |     +-- Electrostatic Potential and Capacitance
  |     +-- Current Electricity
  |     +-- Moving Charges and Magnetism
  |     +-- Magnetism and Matter
  |     +-- Electromagnetic Induction
  |     +-- Alternating Current
  |     +-- Electromagnetic Waves
  |
  +-- MODERN PHYSICS
        +-- Dual Nature of Radiation and Matter
        +-- Atoms
        +-- Nuclei
        +-- Semiconductor Electronics
```

## CHEMISTRY

```
  1st YEAR
  |
  +-- PHYSICAL
  |     +-- Atomic Structure
  |     +-- States of Matter: Gases and Liquids
  |     +-- Stoichiometry
  |     +-- Thermodynamics
  |     +-- Chemical Equilibrium and Acids-Bases
  |
  +-- INORGANIC
  |     +-- Classification of Elements and Periodicity
  |     +-- Chemical Bonding and Molecular Structure
  |     +-- Hydrogen and its Compounds
  |     +-- The s-Block Elements
  |     +-- p-Block Group 13 (Boron Family)
  |     +-- p-Block Group 14 (Carbon Family)
  |
  +-- ORGANIC
  |     +-- Some Basic Principles and Techniques
  |
  +-- Environmental Chemistry

  2nd YEAR
  |
  +-- PHYSICAL
  |     +-- Solid State
  |     +-- Solutions
  |     +-- Electrochemistry and Chemical Kinetics
  |     +-- Surface Chemistry
  |
  +-- INORGANIC
  |     +-- General Principles of Metallurgy
  |     +-- p-Block Elements (Groups 15 to 18)
  |     +-- d and f Block Elements
  |     +-- Coordination Compounds
  |
  +-- ORGANIC
        +-- Haloalkanes and Haloarenes
        +-- Compounds containing C, H and O
        +-- Compounds containing Nitrogen
        +-- Biomolecules
        +-- Polymers
        +-- Chemistry in Everyday Life
```

---

# EXAM BLUEPRINT — where the marks actually come from

## AP Inter MATHS  (papers 1A, 1B, 2A, 2B) — 75 marks each

```
  +-----------+---------------+-----------+--------------+---------+
  |  SECTION  |  QUESTIONS    |  ATTEMPT  |  MARKS EACH  |  TOTAL  |
  +-----------+---------------+-----------+--------------+---------+
  |  A  VSAQ  |      10       |   ALL 10  |      2       |   20    |
  |  B  SAQ   |       7       |   any 5   |      4       |   20    |
  |  C  LAQ   |       7       |   any 5   |      7       |   35    |
  +-----------+---------------+-----------+--------------+---------+
                                              TOTAL  =     75
                                              PASS   =     26  (35%)
```

> **Strategy for a weak student:**
> Section A repeats almost word-for-word every year. Memorise the VSAQ bank in
> `03-pyq-ap-board.md` and you have **20 marks guaranteed**.
> Add just 2 long answers you like (14 marks) and you are at 34 — a comfortable pass.

## AP Inter PHYSICS and CHEMISTRY — 60 marks each

```
  +-----------+---------------+-----------+--------------+---------+
  |  SECTION  |  QUESTIONS    |  ATTEMPT  |  MARKS EACH  |  TOTAL  |
  +-----------+---------------+-----------+--------------+---------+
  |  A  VSAQ  |      10       |   ALL 10  |      2       |   20    |
  |  B  SAQ   |       8       |   any 6   |      4       |   24    |
  |  C  LAQ   |       3       |   any 2   |      8       |   16    |
  +-----------+---------------+-----------+--------------+---------+
                                              TOTAL  =     60
                                              PASS   =     21  (35%)
```

> The 10 short answers (20 marks) plus ONE long answer (8 marks) already
> clears the pass mark with room to spare.

## Entrance exams

```
  +---------------+--------+---------+-----------+--------+----------------+
  |  EXAM         |  MATHS | PHYSICS | CHEMISTRY | TOTAL  |  MARKING       |
  +---------------+--------+---------+-----------+--------+----------------+
  |  AP EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  TG EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  JEE Main     |   25   |   25    |    25     |  300   |  +4 , -1       |
  +---------------+--------+---------+-----------+--------+----------------+
```

> **EAPCET has NO negative marking.** Never leave a single blank.
> **JEE Main does.** Skip questions you genuinely cannot do.

---

# HOW TO USE THIS — daily routine

```
  STEP 1   Open  00-mindmap.md
           Five minutes. Just LOOK at the picture of the chapter.
              |
  STEP 2   Read  01-concepts.md  topic by topic.
           Do not move on until you can explain the topic out loud.
              |
  STEP 3   Copy  02-formulae.md  by HAND into a notebook.
           Writing beats re-reading. This is not optional.
              |
  STEP 4   Do the SECTION A part of  03-pyq-ap-board.md  first.
           These are the free marks. Get them before anything else.
              |
  STEP 5   Read  05-question-patterns.md
           Learn the SHAPE of each question, not the numbers.
              |
  STEP 6   Only for chapters you already feel safe in:
           do  04-pyq-competitive.md
```

## Which chapters to study first (best marks per hour of effort)

```
  +----------+------------------------------+---------------------------+
  | PRIORITY |  MATHS                       |  PHYSICS                  |
  +----------+------------------------------+---------------------------+
  |    1     |  Matrices                    |  Units and Measurements   |
  |          |  Partial Fractions           |  Motion in a Straight Line|
  |          |  Integration                 |                           |
  |    2     |  Complex Numbers             |  Work, Energy and Power   |
  |          |  Binomial Theorem, Circle    |  Thermodynamics           |
  |    3     |  Straight Line               |  Current Electricity      |
  |          |  Differentiation, Probability|  Ray Optics, Semiconductors|
  |    4     |  Vectors, Trigonometry       |  Electrostatics, EMI & AC |
  |          |  Conics                      |  Modern Physics           |
  +----------+------------------------------+---------------------------+

  +----------+---------------------------------------------------------+
  | PRIORITY |  CHEMISTRY                                              |
  +----------+---------------------------------------------------------+
  |    1     |  Atomic Structure , Stoichiometry                       |
  |    2     |  Chemical Bonding , s-Block , p-Block                   |
  |    3     |  Solutions , Electrochemistry , Coordination Compounds  |
  |    4     |  Organic chains (name reactions)                        |
  +----------+---------------------------------------------------------+
```

---

# ACCURACY NOTE — please read

```
  +----------------------------------------------------------------------+
  |  Formulae, concepts and question patterns here are standard and       |
  |  reliable.                                                            |
  |                                                                       |
  |  Previous-year questions are grouped as "REPEATEDLY ASKED" rather     |
  |  than tagged with one exact year, because BIEAP recycles the same     |
  |  questions across many sessions. Where a year is mentioned, treat     |
  |  it as INDICATIVE.                                                    |
  |                                                                       |
  |  Before your exam, cross-check with the OFFICIAL question papers:     |
  |     BIEAP        ->  bie.ap.gov.in                                    |
  |     JEE Main     ->  official NTA papers                              |
  |     EAPCET       ->  official APSCHE / TGCHE papers                   |
  |                                                                       |
  |  Treat this as your PRACTICE BANK, not a replacement for the          |
  |  official papers.                                                     |
  +----------------------------------------------------------------------+
```
