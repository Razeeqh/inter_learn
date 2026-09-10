# Hyperbola — Mind Map

**Maths IIB · Chapter 5 · The last conic — the ellipse with ONE sign flipped**
Almost every year: 1 long answer (7M) or 1 short answer (4M) + 1-2 very short answers (2M)

Why it matters: this is the **cheapest chapter in the whole paper**. Everything you learned
in Chapter 4 (Ellipse) comes back with the SAME names, the SAME shapes and the SAME steps.
The only change is that a **plus sign becomes a minus sign**:

```
        ELLIPSE        x^2/a^2  +  y^2/b^2  =  1        b^2 = a^2 ( 1 - e^2 )

        HYPERBOLA      x^2/a^2  -  y^2/b^2  =  1        b^2 = a^2 ( e^2 - 1 )
                                 ^                                    ^
                                 |                                    |
                        THIS is the whole chapter.           and here too.
```

Everywhere you see `b^2` in an ellipse formula, write `-b^2` instead and you have the
hyperbola formula. That single sentence is worth about 10 marks.

The two genuinely NEW ideas are:
1. **e > 1** — the curve breaks into **two separate branches** and runs off to infinity.
2. **ASYMPTOTES** — two straight lines the curve hugs forever but never touches.
   An ellipse has none. A hyperbola has exactly two.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                            H Y P E R B O L A
                                     |
   +-------------+-------------+-----+-------+-------------+-------------+
   |             |             |             |             |             |
 TWO          STANDARD      THE PARTS     SHIFTED      PARAMETRIC     LINE MEETS
 DEFINITIONS   FORM         (jargon)      HYPERBOLA      FORM         HYPERBOLA
   |             |             |             |             |             |
 1) SP = e PM  x^2   y^2     Centre     (x-h)^2      P(theta) =     Tangent
    with e > 1  --- - --- = 1  Vertices    ------  -    (a sec th,   condition
   |            a^2   b^2     Foci         a^2         b tan th)     c^2 =
 2) | S'P - SP |  |          Directrices (y-k)^2         |          a^2 m^2
    = 2a       b^2 = a^2     TRANSVERSE   ------ = 1   AUXILIARY      - b^2
    (distances  (e^2 - 1)     axis 2a       b^2        CIRCLE           |
     DIFFER by    |          CONJUGATE       |         x^2+y^2=a^2   Point of
     a constant) e = sqrt     axis 2b     COMPLETE         |          contact
   |            (1 + b^2/a^2) Latus       THE SQUARE   Chord th1,th2 (-a^2 m/c,
 e = 0 circle    |            rectum         |         (x/a)cos((A-B)/2)  -b^2/c)
 e < 1 ellipse  a^2 e^2 =    = 2b^2/a     Read off    -(y/b)sin((A+B)/2)   |
 e = 1 parabola  a^2 + b^2      |         centre,      = cos((A+B)/2)  POSITION
 e > 1 HYPERBOLA  |           Focal       vertices,        |         OF A POINT
   |            TWO           chord       foci,        Tangents meet  S11 > 0 IN
 h^2 - ab > 0   ORIENTATIONS  Focal       asymptotes   at (a cosA/cosB, S11 < 0 OUT
                x-transverse  distance        |          b tan B)     S11 = 0 ON
                y-transverse  SP = e x1 - a   |
                   |          S'P= e x1 + a   |
                2 ASCII       DIFFERENCE = 2a |
                sketches         |            |
                                 |            |
        +------------------------+------------+------------------------+
        |                        |                                     |
    TANGENTS                 NORMALS                            CHORD FAMILY
        |                        |                                     |
  At (x1,y1):  T = 0       At (x1,y1):                     Chord of contact
   x x1     y y1             a^2 x     b^2 y                from (x1,y1):
   ---- -   ----  = 1        -----  +  -----                 x x1/a^2
   a^2      b^2                x1        y1                   - y y1/b^2 = 1
        |                    = a^2 + b^2                            |
  At theta:                        |                        Chord with a given
   x sec th   y tan th       At theta:                      MIDPOINT (x1,y1):
   -------- - -------- = 1   a x cos th + b y cot th             T = S11
      a          b            = a^2 + b^2                          |
        |                          |                        PAIR OF TANGENTS
  Slope form:                Slope form:                       S * S11 = T^2
  y = mx +- sqrt(a^2m^2-b^2) y = mx +- m(a^2+b^2)                  |
        |                         / sqrt(a^2 - b^2 m^2)     POLE and POLAR
  Contact (-a^2m/c, -b^2/c)        |                        polar of (x1,y1)
        |                    Foot of the normal is           is T = 0
  DIRECTOR CIRCLE            ( a sec th , b tan th )         pole of lx+my+n=0
  x^2 + y^2 = a^2 - b^2                                      is (-a^2 l/n,
  (ONLY if a > b)                                                + b^2 m/n)
                                     |
        +----------------------------+----------------------------+
        |                            |                            |
   ASYMPTOTES               CONJUGATE HYPERBOLA           RECTANGULAR
        |                            |                    (EQUILATERAL)
  y = +- (b/a) x            x^2/a^2 - y^2/b^2 = -1              |
        |                   i.e. y^2/b^2 - x^2/a^2 = 1     a = b , e = sqrt 2
  Combined:                        |                            |
  x^2/a^2 - y^2/b^2 = 0      1     1                      x^2 - y^2 = a^2
        |                   ---- + ---- = 1                     |
  H + C = 2 A               e1^2   e2^2                   rotate 45 degrees
  (hyperbola + conjugate           |                            |
   = twice the asymptotes)   SAME asymptotes,                x y = c^2
        |                    SAME foci-distance                 |
  Angle between them         sqrt(a^2 + b^2)             P(t) = ( c t , c/t )
  = 2 tan^-1 (b/a)                                       tangent x + t^2 y = 2ct
  = 2 sec^-1 (e)                                         asymptotes are the AXES
```

---

## THE FAMILY OF CONICS (where the hyperbola sits)

```
                    CUT A DOUBLE CONE WITH A FLAT PLANE
                                   |
        +----------------+---------+---------+----------------+
        |                |                   |                |
   plane cuts       plane PARALLEL      plane cuts       plane cuts
   ONE nappe        to a SLANT          BOTH nappes      through the
   right through    SIDE of the cone    (that is why      apex
        |                |               there are TWO         |
     ELLIPSE          PARABOLA           BRANCHES)       DEGENERATE
     e < 1             e = 1                |            point / line /
        |                |              HYPERBOLA        pair of lines
   h^2 - ab < 0     h^2 - ab = 0         e > 1
                                            |
                                      h^2 - ab > 0
                                            |
                              and if also  a + b = 0 :
                                 RECTANGULAR hyperbola
```

**A conic is the set of points whose distance from a fixed point (the FOCUS)
divided by its distance from a fixed line (the DIRECTRIX) is a constant e.**
When that constant is **bigger than 1**, you get a hyperbola.

---

## THE 60-SECOND VERSION

A hyperbola is **two open curves facing away from each other**. There are two honest
ways to describe it, and the board asks for both.

**Way 1 — focus and directrix (e > 1):**

```
     the DIRECTRIX               S = the FOCUS
        |
        |   M...................P
        |                        \          SP
        |                         \  S   -------- = e ,   e > 1
        |                          .      PM
        |
        so P is always FURTHER from the focus than from the directrix
```

**Way 2 — the DIFFERENCE of two distances is fixed:**

```
       Ellipse : SP + S'P = 2a       "the SUM is fixed"      -> closed curve
       Hyperbola: | S'P - SP | = 2a  "the DIFFERENCE is fixed" -> two branches

              LEFT BRANCH                RIGHT BRANCH
                  \                          /
                   )        S'   C   S      (      For any P on the right branch
                  /                          \        S'P - SP  =  2a
                                                   For any P on the left branch
                                                      SP - S'P  =  2a
```

Both descriptions give the same curve and the same equation:

```
                          x^2     y^2
                          --- -   --- =  1        with   b^2 = a^2 ( e^2 - 1 )
                          a^2     b^2
```

**The picture, with the asymptotes drawn in:**

```
              y
     \        ^        /            TWO SEPARATE BRANCHES.
       \      |      /              The curve NEVER crosses the y-axis.
         \    |    /
    \      \  |  /      /           Asymptotes   y = +- (b/a) x
     \      \ | /      /            Vertices     ( +- a , 0 )
      |      \|/      |             Foci         ( +- ae , 0 )
   ---+-------C-------+---> x       Directrices  x = +- a/e
      |      /|\      |             Transverse axis  2a  (along x)
     /      / | \      \            Conjugate  axis  2b  (along y)
    /      /  |  \      \           Latus rectum  = 2 b^2 / a
         /    |    \                e = sqrt( 1 + b^2/a^2 )  >  1
       /      |      \
     /        |        \            The curve hugs the two slanted lines
                                    for ever but never touches them.
```

| Job | What you actually do | Where it is asked |
|---|---|---|
| Recognise | is it a hyperbola? which axis is the transverse one? | Section A, 2 marks |
| Extract | centre, vertices, foci, directrices, e, LR, asymptotes | **Section C, 7 marks** |
| Touch it | tangent / normal at a point, or with a given slope | Section B, 4 marks |
| Cut it | chord of contact, midpoint chord, pole and polar | Section B or C |
| Prove | the standard equation, `S'P - SP = 2a`, asymptotes | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IIB — 75 marks)

| Topic | Section | Marks |
|---|---|---|
| Eccentricity / foci / latus rectum of a simple standard form | A | 2 |
| Equation of a hyperbola from given data (axes, e, foci) | A | 2 |
| Asymptotes of `x^2/a^2 - y^2/b^2 = 1`, angle between them | A | 2 |
| Conjugate hyperbola, `1/e1^2 + 1/e2^2 = 1` | A | 2 |
| Condition for `y = mx + c` to be a tangent, `c^2 = a^2m^2 - b^2` | A | 2 |
| Tangent / normal at a given point or at a parametric point | B | 4 |
| Chord with a given midpoint, chord of contact, pole and polar | B | 4 |
| Locus problems using `S'P - SP = 2a` | B | 4 |
| **Reduce a general equation to standard form and find EVERY element** | **C** | **7** |
| **Derive `x^2/a^2 - y^2/b^2 = 1` from focus + directrix + e** | **C** | **7** |
| **Asymptotes of a general second-degree hyperbola** | **C** | **7** |

**Total realistically available from this one chapter: about 9-13 marks out of 75.**

Circle + System of Circles + Parabola + Ellipse + Hyperbola together carry roughly a
third of the IIB paper. All five share one toolkit. You are on the LAST one — most
of the work is already done.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 0   Revise the ELLIPSE master table for 20 minutes.
              |          Then flip every + to a - as you go.
              v
  STEP 1   The conic definition:  SP = e * PM  with  e > 1
              |     plus the second definition  | S'P - SP | = 2a
              v
  STEP 2   DERIVE  x^2/a^2 - y^2/b^2 = 1   and   b^2 = a^2(e^2 - 1)
              |                            (this is a 7-mark question by itself)
              v
  STEP 3   THE MASTER TABLE: both orientations.
           Centre, vertices, foci, directrices, axes, e, LR, asymptotes.
              |                 (memorise ONE table, not two derivations)
              v
  STEP 4   The parts:  transverse axis 2a, conjugate axis 2b, LR = 2b^2/a,
           focal distances SP = e x1 - a and S'P = e x1 + a, DIFFERENCE 2a
              |
              v
  STEP 5   ASYMPTOTES  y = +- (b/a) x .  Hyperbola, conjugate and asymptote
           pair differ only by a CONSTANT.  Angle = 2 tan^-1 (b/a).
              |
              v
  STEP 6   CONJUGATE HYPERBOLA and  1/e1^2 + 1/e2^2 = 1
              |
              v
  STEP 7   RECTANGULAR hyperbola  x^2 - y^2 = a^2 , e = sqrt 2 ,
           and the rotated form  x y = c^2  with  P(t) = ( ct , c/t )
              |
              v
  STEP 8   SHIFTED HYPERBOLA, centre (h, k).
           COMPLETE THE SQUARE on a general equation.
              |                        <-- the 7-mark favourite
              v
  STEP 9   PARAMETRIC point ( a sec theta , b tan theta ) and the chord
           joining two parameters
              |
     +--------+--------+------------------+
     |                 |                  |
  STEP 10          STEP 11            STEP 12
  Position of      TANGENT            NORMAL
  a point          c^2 = a^2m^2-b^2   a^2 x/x1 + b^2 y/y1
  using S11        x x1/a^2                    = a^2 + b^2
     |             - y y1/b^2 = 1     a x cos th + b y cot th
     |                 |                       = a^2 + b^2
     |            STEP 13                  |
     |            Chord of contact         |
     |            Midpoint chord T = S11   |
     |            Pair of tangents SS11=T^2|
     |            Pole and polar           |
     +--------+--------+------------------+
              |
              v
  STEP 14  DIRECTOR CIRCLE  x^2 + y^2 = a^2 - b^2   (only when a > b)
              |
              v
  STEP 15  The pretty properties: product of the perpendiculars from the
           foci to a tangent = b^2 ; the foot of that perpendicular lies
           on the auxiliary circle ; the reflection property
```

---

## THE KEY BOX — the formulas that unlock most questions

```
  +==========================================================================+
  |                                                                          |
  |          x^2     y^2                                                     |
  |          --- -   --- =  1        e > 1        <--- MEMORISE              |
  |          a^2     b^2                                                     |
  |                                                                          |
  |    Centre           ( 0 , 0 )                                            |
  |    Vertices         ( a , 0 ) and ( -a , 0 )                             |
  |    Foci             ( ae , 0 ) and ( -ae , 0 )                           |
  |    Directrices        x = a/e   and   x = -a/e                           |
  |    TRANSVERSE axis  length 2a  along  y = 0  (the axis it DOES cut)      |
  |    CONJUGATE  axis  length 2b  along  x = 0  (the axis it does NOT cut)  |
  |    Latus rectum     length 2 b^2 / a   on the lines  x = +- ae           |
  |    Eccentricity     b^2 = a^2 ( e^2 - 1 )   so   e = sqrt(1 + b^2/a^2)   |
  |    a e              = sqrt( a^2 + b^2 )       <-- PLUS, not minus        |
  |    ASYMPTOTES       y = ( b/a ) x   and   y = - ( b/a ) x                |
  |    Parametric       P(theta) = ( a sec theta , b tan theta )             |
  |    Focal distances  SP = e x1 - a ,  S'P = e x1 + a ,  DIFFERENCE = 2a   |
  |                                                                          |
  +==========================================================================+

  +==========================================================================+
  |                                                                          |
  |   STEP 1 OF EVERY HYPERBOLA QUESTION:                                    |
  |                                                                          |
  |   (i)   Get the equation into the form  X^2/A - Y^2/B = 1                |
  |         (divide by the number on the right-hand side!).                  |
  |   (ii)  a^2 is the denominator of the term with the PLUS sign.           |
  |         b^2 is the denominator of the term with the MINUS sign.          |
  |   (iii) The TRANSVERSE axis is the axis of the POSITIVE variable.        |
  |                                                                          |
  |   x^2/16 - y^2/9 = 1   ->  a^2 = 16 , b^2 = 9 , transverse along x       |
  |   y^2/9 - x^2/16 = 1   ->  a^2 =  9 , b^2 = 16, transverse along y       |
  |                                                                          |
  |   IT IS NOT "THE BIGGER ONE". THAT WAS THE ELLIPSE.                      |
  |   FOR A HYPERBOLA, b CAN BE BIGGER THAN a. THE SIGN DECIDES, NOT SIZE.   |
  |                                                                          |
  +==========================================================================+
```

And the three expressions that drive every tangent / chord question — exactly the same
machinery as Parabola and Ellipse, with one sign changed:

```
  +--------------------------------------------------------------------------+
  |   For the hyperbola     x^2     y^2                                      |
  |                    S =  --- -   --- -  1  =  0                           |
  |                         a^2     b^2                                      |
  |                                                                          |
  |           x1^2    y1^2                                                   |
  |   S11  =  ---- -  ---- - 1              (put the POINT into S)           |
  |           a^2     b^2                                                    |
  |                                                                          |
  |           x x1    y y1                                                   |
  |   T    =  ---- -  ---- - 1              (the "half-and-half" version)    |
  |           a^2     b^2                                                    |
  |                                                                          |
  |   T = 0       -> tangent at (x1,y1)  AND  chord of contact from (x1,y1)  |
  |                  AND the polar of (x1,y1)                                |
  |   T = S11     -> chord whose MIDPOINT is (x1,y1)                         |
  |   S * S11 = T^2 -> the PAIR of tangents from (x1,y1)                     |
  |                                                                          |
  |   S11 > 0  P is INSIDE a branch (the focus side)                         |
  |   S11 = 0  P is ON the curve                                             |
  |   S11 < 0  P is OUTSIDE (the region containing the centre)               |
  |                                                                          |
  |   NOTE: this is the OPPOSITE WAY ROUND from the ellipse. For an          |
  |   ellipse S11 < 0 meant inside. Here S11 > 0 means inside a branch.      |
  +--------------------------------------------------------------------------+
```

How T is built from S — the rule is mechanical and identical for every conic:

| In S you see | In T write |
|---|---|
| `x^2` | `x * x1` |
| `y^2` | `y * y1` |
| `x` | `(x + x1) / 2` |
| `y` | `(y + y1) / 2` |
| `xy` | `(x y1 + x1 y) / 2` |
| constant | leave it alone |

---

## ELLIPSE vs HYPERBOLA — the translation table

**This is the single most valuable table in the chapter.** Learn it and you have
already learned the chapter.

| Idea | Ellipse `x^2/a^2 + y^2/b^2 = 1` | Hyperbola `x^2/a^2 - y^2/b^2 = 1` |
|---|---|---|
| Sign in the equation | `+` | `-` |
| Eccentricity | `0 < e < 1` | `e > 1` |
| a versus b | `a > b` always | **no restriction**, b may exceed a |
| Master relation | `b^2 = a^2(1 - e^2)` | `b^2 = a^2(e^2 - 1)` |
| `ae` | `sqrt(a^2 - b^2)` | `sqrt(a^2 + b^2)` |
| Shape | one closed oval | two open branches |
| Names of the axes | major `2a`, minor `2b` | transverse `2a`, conjugate `2b` |
| Focal property | `SP + S'P = 2a` (SUM) | `\| S'P - SP \| = 2a` (DIFFERENCE) |
| Focal distance | `SP = a - e x1` | `SP = e x1 - a` |
| Latus rectum | `2b^2/a` | `2b^2/a` (same!) |
| Parametric point | `(a cos th, b sin th)` | `(a sec th, b tan th)` |
| Tangency condition | `c^2 = a^2m^2 + b^2` | `c^2 = a^2m^2 - b^2` |
| Point of contact | `(-a^2m/c, b^2/c)` | `(-a^2m/c, -b^2/c)` |
| Normal at `(x1,y1)` | `a^2x/x1 - b^2y/y1 = a^2 - b^2` | `a^2x/x1 + b^2y/y1 = a^2 + b^2` |
| Director circle | `x^2 + y^2 = a^2 + b^2` | `x^2 + y^2 = a^2 - b^2` |
| Asymptotes | none | `y = ±(b/a)x` |
| Position test | inside if `S11 < 0` | inside a branch if `S11 > 0` |

```
  +--------------------------------------------------------------------------+
  |   THE ONE-LINE RULE                                                      |
  |                                                                          |
  |         TAKE ANY ELLIPSE FORMULA AND REPLACE  b^2  BY  -b^2 .            |
  |                                                                          |
  |   b^2 = a^2(1-e^2)   ->  -b^2 = a^2(1-e^2)  ->  b^2 = a^2(e^2-1)   TICK  |
  |   c^2 = a^2m^2 + b^2 ->  c^2  = a^2m^2 - b^2                       TICK  |
  |   x^2+y^2 = a^2+b^2  ->  x^2+y^2 = a^2 - b^2                       TICK  |
  |   a^2x/x1 - b^2y/y1 = a^2-b^2 -> a^2x/x1 + b^2y/y1 = a^2+b^2       TICK  |
  |                                                                          |
  |   It works EVERY time. If you forget a hyperbola formula in the exam,    |
  |   write the ellipse one and flip b^2.                                    |
  +--------------------------------------------------------------------------+
```

---

## IF YOU ONLY HAVE 3 DAYS

**Day 1 morning — the master table.**
Copy the two-orientation table onto one card and draw both sketches WITH the asymptotes.
Then do 10 "find the eccentricity / foci / latus rectum / asymptotes of `9x^2 - 16y^2 = 144`"
style questions. Nothing else. That alone is 2-4 guaranteed marks.

**Day 1 evening — building a hyperbola from given data.**
`b^2 = a^2(e^2 - 1)`, LR `= 2b^2/a`, distance between foci `= 2ae`,
distance between directrices `= 2a/e`. Six practice questions, all of the shape
"given two of these, find the equation".

**Day 2 morning — asymptotes and the conjugate hyperbola.**
```
  asymptotes  y = ±(b/a) x     combined  x^2/a^2 - y^2/b^2 = 0
  hyperbola + conjugate = 2 * (asymptote pair)
  angle between asymptotes = 2 tan^-1 (b/a) = 2 sec^-1 (e)
  conjugate of x^2/a^2 - y^2/b^2 = 1  is  y^2/b^2 - x^2/a^2 = 1
  1/e1^2 + 1/e2^2 = 1
  rectangular: a = b, e = sqrt 2, asymptotes perpendicular, xy = c^2
```

**Day 2 evening — completing the square.**
Take 6 equations like `9x^2 - 16y^2 - 36x - 32y - 124 = 0` and reduce each to
`(x-h)^2/a^2 - (y-k)^2/b^2 = 1`. Then read off centre, vertices, foci, directrices,
eccentricity, latus rectum and asymptotes.
**This is the most-asked long-answer question in the chapter.**

**Day 3 morning — tangent and normal.**
Only these lines to hold:
```
  tangent at (x1,y1)   x x1/a^2 - y y1/b^2 = 1
  tangent at theta     (x sec th)/a - (y tan th)/b = 1
  tangent slope form   y = m x ± sqrt(a^2 m^2 - b^2) ,  c^2 = a^2m^2 - b^2
  contact point        ( -a^2 m / c , -b^2 / c )
  normal at (x1,y1)    a^2 x / x1 + b^2 y / y1 = a^2 + b^2
  normal at theta      a x cos th + b y cot th = a^2 + b^2
```

**Day 3 evening — write from memory, twice:**
(1) the derivation of `x^2/a^2 - y^2/b^2 = 1` from `SP = e·PM`, and
(2) the proof that `| S'P - SP | = 2a`.
Both are guaranteed 7-mark questions and neither needs any cleverness, only neatness.

That plan is worth about 11 of the 75 marks in Maths IIB plus 1-2 EAPCET questions
that are pure formula substitution.

---

## THE ONE-LINE WARNINGS

```
  +--------------------------------------------------------------------------+
  |  1.  a^2 sits under the POSITIVE term. NOT under the bigger number.      |
  |      x^2/9 - y^2/16 = 1 has a = 3 and b = 4. b IS bigger. That is fine.  |
  |  2.  b^2 = a^2(e^2 - 1). The MINUS ONE is inside the bracket for a       |
  |      hyperbola, and the ONE MINUS was the ellipse. Do not mix them.      |
  |  3.  ae = sqrt(a^2 + b^2) for a hyperbola. PLUS. (Ellipse had minus.)    |
  |  4.  e is always GREATER than 1. If you get e < 1 you have flipped a     |
  |      sign — go back.                                                    |
  |  5.  TRANSVERSE axis 2a, CONJUGATE axis 2b. Not "major" and "minor".     |
  |      Using ellipse words in a hyperbola answer loses presentation marks. |
  |  6.  Latus rectum is 2b^2/a — the SAME as the ellipse. Do not "fix" it.  |
  |  7.  There are TWO foci, TWO directrices, TWO latus rectums, TWO         |
  |      asymptotes and TWO branches. Give both of everything.               |
  |  8.  No tangent exists with slope numerically less than b/a, because     |
  |      c^2 = a^2m^2 - b^2 would be negative. Slope exactly b/a gives       |
  |      c = 0 — that is the ASYMPTOTE, not a tangent.                       |
  |  9.  The director circle x^2 + y^2 = a^2 - b^2 exists ONLY if a > b.     |
  |      If a < b there are no perpendicular tangents at all.                |
  | 10.  Distance between foci = 2ae. Distance between directrices = 2a/e.   |
  |      These are NOT the same thing.                                      |
  +--------------------------------------------------------------------------+
```
