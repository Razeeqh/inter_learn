# Ellipse — Mind Map

**Maths IIB · Chapter 4 · The second conic — Parabola with a second constant bolted on**
Almost every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

Why it matters: everything you already learned in Chapter 3 (Parabola) — tangent, normal,
chord of contact, midpoint chord, pair of tangents, parametric point — comes back here
**with the same names and the same logic**. Only the equation changes. If Parabola went
well, this chapter is 80% free. If Parabola went badly, do Parabola first, then come back.

The one new idea is **eccentricity e**, a number strictly between 0 and 1 that says
"how squashed is this circle?". Find `a`, find `b`, get `e`, and the whole chapter falls out.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                              E L L I P S E
                                     |
   +-------------+-------------+-----+-------+-------------+-------------+
   |             |             |             |             |             |
 TWO          STANDARD      THE PARTS     SHIFTED      PARAMETRIC     LINE MEETS
 DEFINITIONS   FORM         (jargon)      ELLIPSE        FORM          ELLIPSE
   |             |             |             |             |             |
 1) SP = e PM  x^2   y^2     Centre     (x-h)^2      P(theta) =     Tangent
    with e < 1  --- + --- = 1  Vertices    ------  +     (a cos th,   condition
   |            a^2   b^2     Foci         a^2         b sin th)     c^2 =
 2) SP + S'P     |            Directrices (y-k)^2         |          a^2 m^2
    = 2a       b^2 = a^2      Major axis   ------ = 1   AUXILIARY      + b^2
    (the pin-   (1 - e^2)     Minor axis    b^2         CIRCLE           |
     and-string   |           Latus         |          x^2+y^2=a^2   Point of
     drawing)  e = sqrt       rectum     COMPLETE          |          contact
   |            (1 - b^2/a^2)  = 2b^2/a  THE SQUARE    Eccentric     (-a^2 m/c,
 e = 0 circle    |               |          |          angle          b^2/c)
 e < 1 ELLIPSE  a^2 e^2 =     Focal        Read off       |              |
 e = 1 parabola  a^2 - b^2    chord        centre,     Chord alpha,   POSITION
 e > 1 hyperbola  |           Focal        vertices,   beta:          OF A POINT
   |            TWO           distance     foci,       (x/a)cos((a+b)/2)  S11 > 0 out
 h^2 - ab < 0   ORIENTATIONS  SP = a - ex1 directrices +(y/b)sin((a+b)/2) S11 < 0 in
                x-major /     S'P= a + ex1     |       = cos((a-b)/2)  S11 = 0 on
                y-major       SUM = 2a         |            |
                   |             |          Centre       Focal chord:
                2 ASCII       AREA = pi a b (h, k)      tan(a/2)tan(b/2)
                sketches                                 = (e-1)/(e+1)
                                     |
        +----------------------------+----------------------------+
        |                            |                            |
    TANGENTS                     NORMALS                    CHORD FAMILY
        |                            |                            |
  At (x1,y1):  T = 0          At (x1,y1):                 Chord of contact
   x x1     y y1                a^2 x     b^2 y            from (x1,y1):
   ---- +   ----  = 1           -----  -  -----            x x1/a^2
   a^2      b^2                   x1        y1              + y y1/b^2 = 1
        |                       = a^2 - b^2                        |
  At theta:                            |                    Chord with a given
   x cos th   y sin th          At theta:                   MIDPOINT (x1,y1):
   -------- + -------- = 1      ax sec th - by cosec th          T = S1
      a          b               = a^2 - b^2                       |
        |                            |                     PAIR OF TANGENTS
  Slope form:                 Slope form:                     S * S11 = T^2
  y = mx +- sqrt(a^2m^2+b^2)  y = mx +- m(a^2-b^2)                 |
        |                          / sqrt(a^2 + b^2 m^2)    POLE and POLAR
  Contact (-a^2 m/c, b^2/c)          |                      polar of (x1,y1)
        |                     Foot of normal is the          is T = 0
  DIRECTOR CIRCLE             point (a cos th, b sin th)     pole of lx+my+n=0
  x^2 + y^2 = a^2 + b^2                                      is (-a^2 l/n,
  (perpendicular tangents)                                       -b^2 m/n)
                                     |
                        +------------+------------+
                        |                         |
              CONJUGATE DIAMETERS         SPECIAL PROPERTIES
              m1 * m2 = -b^2/a^2          - product of perpendiculars
              eccentric angles differ       from the two foci to any
              by 90 degrees                 tangent = b^2
              CP^2 + CD^2 = a^2 + b^2     - foot of perpendicular from a
              parallelogram area = 4ab      focus to a tangent lies on
                                            the AUXILIARY CIRCLE
                                          - reflection: a ray from S
                                            bounces to S' (whispering
                                            galleries, lithotripsy)
```

---

## THE FAMILY OF CONICS (where the ellipse sits)

```
                    CUT A DOUBLE CONE WITH A FLAT PLANE
                                   |
        +----------------+---------+---------+----------------+
        |                |                   |                |
   plane cuts       plane PARALLEL      plane cuts       plane cuts
   ONE nappe        to a SLANT          BOTH nappes      through the
   right through    SIDE of the cone                     apex
        |                |                   |                |
     ELLIPSE          PARABOLA          HYPERBOLA      DEGENERATE
     e < 1             e = 1             e > 1         point / line /
        |                |                   |         pair of lines
   h^2 - ab < 0     h^2 - ab = 0       h^2 - ab > 0

   Special case of the ellipse:  e = 0  ->  CIRCLE  (both foci sit on top
   of each other at the centre, and a = b).
```

**A conic is the set of points whose distance from a fixed point (the FOCUS)
divided by its distance from a fixed line (the DIRECTRIX) is a constant e.**
When that constant is **less than 1**, you get an ellipse.

---

## THE 60-SECOND VERSION

An ellipse is a **squashed circle**. There are two honest ways to describe it.

**Way 1 — focus and directrix (the definition the board asks you to use):**

```
     the DIRECTRIX               S = the FOCUS
        |
        |   M............P
        |                 \             SP
        |                  \  S      -------- = e ,   0 < e < 1
        |                   .        PM
        |
        so P is always CLOSER to the focus than to the directrix
```

**Way 2 — two pins and a string (the picture you should keep in your head):**

```
       Push two pins in at S and S'. Loop a string of length 2a around them.
       Pull it tight with a pencil and go round.

            .-------------------------.
          .'         P                  `.
        .'          / \                    `.
       |      S' . '   ` . S                 |
        `.                                 .'
          `.                             .'
            `-------------------------.'

       At EVERY point:     S P  +  S' P  =  2a   (the string never changes length)
```

Both descriptions give the same curve and the same equation:

```
                          x^2     y^2
                          --- +   --- =  1          with   b^2 = a^2 ( 1 - e^2 )
                          a^2     b^2
```

| Job | What you actually do | Where it is asked |
|---|---|---|
| Recognise | is it an ellipse? which axis is the major one? | Section A, 2 marks |
| Extract | centre, vertices, foci, directrices, e, latus rectum | **Section C, 7 marks** |
| Touch it | tangent / normal at a point, or with a given slope | Section B, 4 marks |
| Cut it | chord of contact, midpoint chord, pole and polar | Section B or C |
| Prove | SP + S'P = 2a, director circle, conjugate diameters | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IIB — 75 marks)

| Topic | Section | Marks |
|---|---|---|
| Eccentricity / foci / latus rectum of a simple standard form | A | 2 |
| Equation of an ellipse from given data (axes, e, a point) | A | 2 |
| Condition for `y = mx + c` to be a tangent, `c^2 = a^2m^2 + b^2` | A | 2 |
| Tangent / normal at a given point or at a parametric point | B | 4 |
| Chord with a given midpoint, chord of contact, pole and polar | B | 4 |
| Locus problems using `SP + S'P = 2a` | B | 4 |
| **Reduce a general equation to standard form and find EVERY element** | **C** | **7** |
| **Derive the equation of an ellipse from focus + directrix + e** | **C** | **7** |
| **Prove the director circle / conjugate-diameter properties** | **C** | **7** |

**Total realistically available from this one chapter: about 9-13 marks out of 75.**

Circle + System of Circles + Parabola + Ellipse + Hyperbola together carry roughly a
third of the IIB paper. The three conics share one toolkit, so time spent here is
spent three times over.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   The conic definition:  SP = e * PM  with  e < 1
              |               plus the second definition SP + S'P = 2a
              v
  STEP 2   DERIVE  x^2/a^2 + y^2/b^2 = 1   and   b^2 = a^2(1 - e^2)
              |                            (this is a 7-mark question by itself)
              v
  STEP 3   THE MASTER TABLE: both orientations.
           Centre, vertices, foci, directrices, axes, e, latus rectum.
              |                 (memorise ONE table, not two derivations)
              v
  STEP 4   The parts:  major axis 2a, minor axis 2b, LR = 2b^2/a,
           focal distances SP = a - e x1 and S'P = a + e x1
              |
              v
  STEP 5   SHIFTED ELLIPSE, centre (h, k).
           COMPLETE THE SQUARE on a general equation.
              |                        <-- the 7-mark favourite
              v
  STEP 6   AUXILIARY CIRCLE x^2 + y^2 = a^2, eccentric angle theta,
           parametric point ( a cos theta , b sin theta )
              |
     +--------+--------+------------------+
     |                 |                  |
  STEP 7           STEP 8             STEP 9
  Position of      TANGENT            NORMAL
  a point          c^2 = a^2m^2+b^2   a^2 x/x1 - b^2 y/y1
  using S11        x x1/a^2                    = a^2 - b^2
     |             + y y1/b^2 = 1     ax sec th - by cosec th
     |                 |                       = a^2 - b^2
     |            STEP 10                  |
     |            Chord of contact         |
     |            Midpoint chord T = S1    |
     |            Pair of tangents SS11=T^2|
     |            Pole and polar           |
     +--------+--------+------------------+
              |
              v
  STEP 11  DIRECTOR CIRCLE  x^2 + y^2 = a^2 + b^2
              |
              v
  STEP 12  CONJUGATE DIAMETERS  m1 m2 = -b^2/a^2 ,  CP^2 + CD^2 = a^2 + b^2
              |
              v
  STEP 13  Area = pi a b , reflection property, real-life uses
```

---

## THE KEY BOX — the formulas that unlock most questions

```
  +==========================================================================+
  |                                                                          |
  |          x^2     y^2                                                     |
  |          --- +   --- =  1        with   a > b     <--- MEMORISE          |
  |          a^2     b^2                                                     |
  |                                                                          |
  |    Centre        ( 0 , 0 )                                               |
  |    Vertices      ( a , 0 ) and ( -a , 0 )       (ends of the MAJOR axis) |
  |    Ends of minor ( 0 , b ) and ( 0 , -b )                                |
  |    Foci          ( ae , 0 ) and ( -ae , 0 )                              |
  |    Directrices     x = a/e   and   x = -a/e                              |
  |    Major axis    length 2a  along  y = 0                                 |
  |    Minor axis    length 2b  along  x = 0                                 |
  |    Latus rectum  length 2 b^2 / a   on the lines  x = ae  and  x = -ae   |
  |    Eccentricity  b^2 = a^2 ( 1 - e^2 )   so   e = sqrt( 1 - b^2/a^2 )    |
  |    Parametric    P(theta) = ( a cos theta , b sin theta )                |
  |    Area          pi a b                                                  |
  |                                                                          |
  +==========================================================================+

  +==========================================================================+
  |                                                                          |
  |   STEP 1 OF EVERY ELLIPSE QUESTION:                                      |
  |                                                                          |
  |   (i)   Get the equation into the form  x^2/A + y^2/B = 1                |
  |         (divide by the number on the right-hand side!).                  |
  |   (ii)  The BIGGER of A and B is  a^2. The smaller is  b^2.              |
  |   (iii) The MAJOR AXIS lies along the axis of the variable sitting       |
  |         over the BIGGER denominator.                                     |
  |                                                                          |
  |   x^2/25 + y^2/9 = 1   ->  25 > 9   ->  a = 5, b = 3, MAJOR along x      |
  |   x^2/9 + y^2/25 = 1   ->  25 > 9   ->  a = 5, b = 3, MAJOR along y      |
  |                                                                          |
  |   GET THIS STEP WRONG AND EVERY ONE OF THE 7 MARKS IS GONE.              |
  |                                                                          |
  +==========================================================================+
```

And the three expressions that drive every tangent / chord question — exactly the same
machinery as the Parabola chapter:

```
  +--------------------------------------------------------------------------+
  |   For the ellipse       x^2     y^2                                      |
  |                    S =  --- +   --- -  1  =  0                           |
  |                         a^2     b^2                                      |
  |                                                                          |
  |           x1^2    y1^2                                                   |
  |   S11  =  ---- +  ---- - 1              (put the POINT into S)           |
  |           a^2     b^2                                                    |
  |                                                                          |
  |           x x1    y y1                                                   |
  |   T    =  ---- +  ---- - 1              (the "half-and-half" version)    |
  |           a^2     b^2                                                    |
  |                                                                          |
  |   T = 0       -> tangent at (x1,y1)  AND  chord of contact from (x1,y1)  |
  |                  AND the polar of (x1,y1)                                |
  |   T = S11     -> chord whose MIDPOINT is (x1,y1)                         |
  |   S * S11 = T^2 -> the PAIR of tangents from (x1,y1)                     |
  |                                                                          |
  |   S11 < 0  point is INSIDE     S11 = 0  ON     S11 > 0  OUTSIDE          |
  +--------------------------------------------------------------------------+
```

How T is built from S — the rule is mechanical and identical for every conic:

| In S you see | In T write |
|---|---|
| `x^2` | `x * x1` |
| `y^2` | `y * y1` |
| `x` | `(x + x1) / 2` |
| `y` | `(y + y1) / 2` |
| constant | leave it alone |

---

## PARABOLA vs ELLIPSE — the translation table

If you know Chapter 3, you already know Chapter 4. Only the right-hand column changes.

| Idea | Parabola `y^2 = 4ax` | Ellipse `x^2/a^2 + y^2/b^2 = 1` |
|---|---|---|
| Eccentricity | e = 1 | 0 < e < 1 |
| Centre | none (open curve) | (0, 0) |
| Foci | one: (a, 0) | two: (±ae, 0) |
| Directrices | one: x = -a | two: x = ±a/e |
| Latus rectum | 4a | 2b^2/a |
| Parametric point | (a t^2, 2at) | (a cos theta, b sin theta) |
| Tangent at a point | T = 0 | T = 0 (same idea) |
| Tangent slope form | y = mx + a/m | y = mx ± sqrt(a^2m^2 + b^2) |
| Perpendicular tangents meet on | the directrix | the director circle x^2 + y^2 = a^2 + b^2 |
| Focal distance | SP = x1 + a | SP = a - e x1 , S'P = a + e x1 |

---

## IF YOU ONLY HAVE 3 DAYS

**Day 1 morning — the master table.**
Copy the two-orientation table onto one card and draw both sketches. Then do 10
"find the eccentricity / foci / latus rectum of `9x^2 + 16y^2 = 144`" style questions.
Nothing else. That alone is 2-4 guaranteed marks.

**Day 1 evening — building an ellipse from given data.**
`b^2 = a^2(1 - e^2)`, LR `= 2b^2/a`, distance between foci `= 2ae`,
distance between directrices `= 2a/e`. Six practice questions, all of the shape
"given two of these, find the equation".

**Day 2 morning — completing the square.**
Take 6 equations like `9x^2 + 16y^2 - 36x + 32y - 92 = 0` and reduce each to
`(x-h)^2/a^2 + (y-k)^2/b^2 = 1`. Then read off centre, vertices, foci, directrices,
eccentricity, latus rectum. **This is the most-asked 7-mark question in the chapter.**

**Day 2 evening — tangent and normal.**
Only these lines to hold:
```
  tangent at (x1,y1)   x x1/a^2 + y y1/b^2 = 1
  tangent at theta     (x cos th)/a + (y sin th)/b = 1
  tangent slope form   y = m x ± sqrt(a^2 m^2 + b^2) ,  c^2 = a^2m^2 + b^2
  contact point        ( -a^2 m / c , b^2 / c )
  normal at (x1,y1)    a^2 x / x1 - b^2 y / y1 = a^2 - b^2
  normal at theta      a x sec th - b y cosec th = a^2 - b^2
```

**Day 3 morning — the chord family** (contact / midpoint `T = S1` / pair `S S11 = T^2` /
pole and polar) and the **director circle** `x^2 + y^2 = a^2 + b^2`.

**Day 3 evening — write from memory, twice:**
(1) the derivation of `x^2/a^2 + y^2/b^2 = 1` from `SP = e·PM`, and
(2) the proof that `SP + S'P = 2a`.
Both are guaranteed 7-mark questions and neither needs any cleverness, only neatness.

That plan is worth about 11 of the 75 marks in Maths IIB plus 1-2 EAPCET questions
that are pure formula substitution.

---

## THE ONE-LINE WARNINGS

```
  +--------------------------------------------------------------------------+
  |  1.  a is ALWAYS the SEMI-MAJOR axis, so a > b, ALWAYS.                  |
  |      If your working gives b > a, you have mixed up the orientation.     |
  |  2.  b^2 = a^2(1 - e^2). Never write a^2 = b^2(1 - e^2) for an           |
  |      x-major ellipse. The BIG one carries the (1 - e^2).                 |
  |  3.  MAJOR axis = 2a , SEMI-major = a. The question usually wants the    |
  |      FULL length. Read it twice.                                         |
  |  4.  Latus rectum of an ellipse is 2b^2/a , NOT 4a. That was Parabola.   |
  |  5.  DIRECTRIX is an EQUATION (x = a/e). FOCUS is a POINT (ae, 0).       |
  |  6.  There are TWO foci, TWO directrices, TWO latus rectums. Give both.  |
  |  7.  e is always between 0 and 1. If you get e > 1 you have made an      |
  |      arithmetic slip — go back and check which denominator is bigger.    |
  |  8.  Distance between the foci = 2ae. Distance between directrices       |
  |      = 2a/e. These are NOT the same thing.                              |
  +--------------------------------------------------------------------------+
```
