# Parabola — Mind Map

**Maths IIB · Chapter 3 · The friendliest chapter in the Coordinate Geometry block**
Almost every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

Why it matters: the parabola is the EASIEST conic. It has only ONE constant, `a`.
The ellipse and hyperbola that follow have two (`a` and `b`) plus an eccentricity to hunt for.
Everything you learn here — tangent, normal, chord of contact, parametric point —
comes back unchanged in Chapters 4 and 5. Learn it once, use it three times.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                              P A R A B O L A
                                     |
   +-------------+-------------+-----+-------+-------------+-------------+
   |             |             |             |             |             |
 CONIC        STANDARD      THE PARTS      SHIFTED     PARAMETRIC     LINE MEETS
 SECTIONS      FORMS        (jargon)       PARABOLA      FORM         PARABOLA
   |             |             |             |             |             |
 Cut a cone   y^2 = 4ax     Vertex       (y-k)^2 =     P = (at^2,   Tangent
 by a plane   y^2 = -4ax    Focus S      4a(x-h)        2at)        condition
   |          x^2 = 4ay     Axis            |             |          c = a/m
 e = 1  ->    x^2 = -4ay    Directrix    Complete       Chord           |
 PARABOLA        |          Latus         the         t1 & t2:      Point of
 e < 1  ->    Compare       rectum        square      (t1+t2)y      contact
 ELLIPSE      table:        = 4a            |         = 2x          (a/m^2, 2a/m)
 e > 1  ->    vertex,          |         Read off     + 2a t1t2         |
 HYPERBOLA    focus,       Focal chord   vertex,          |          POSITION
   |          directrix,   Focal dist    focus,       FOCAL CHORD    OF A POINT
 h^2 = ab     axis, LR     SP = x1 + a   directrix    t1 t2 = -1     S1 > 0 out
 (Delta != 0)    |            |             |             |         S1 < 0 in
   |          4 ASCII      Double        Axis stays    Length       S1 = 0 on
 Focus +      sketches     ordinate      parallel      a(t + 1/t)^2
 directrix                                to an axis   = 4a cosec^2 th
 + e definition
                                     |
        +----------------------------+----------------------------+
        |                            |                            |
    TANGENTS                     NORMALS                    CHORD FAMILY
        |                            |                            |
  At (x1,y1):  S1 = 0        At (x1,y1):                 Chord of contact
  y*y1 = 2a(x + x1)          y - y1 = -(y1/2a)(x - x1)   from (x1,y1):
        |                            |                    y*y1 = 2a(x + x1)
  At t:  ty = x + a t^2      At t:  y + tx = 2at + at^3          |
        |                            |                    Chord with a given
  Slope form:                Slope form:                  MIDPOINT (x1,y1):
  y = mx + a/m               y = mx - 2am - am^3                T = S1
        |                            |                            |
  Contact (a/m^2, 2a/m)      Foot (am^2, -2am)            PAIR OF TANGENTS
        |                            |                       S * S1 = T^2
  Tangents at t1,t2 meet     Normal at t1 meets
  at (a t1 t2, a(t1+t2))     again at t2 = -t1 - 2/t1
        |                            |
  Perpendicular tangents     3 normals from (h,k):
  meet ON THE DIRECTRIX      a t^3 + (2a - h) t - k = 0
  (directrix = director      t1 + t2 + t3 = 0
   circle of a parabola)
                                     |
                            REFLECTION PROPERTY
                    rays parallel to the axis  ->  all pass through S
                    (headlights, dish antennas, solar cookers)
```

---

## THE FAMILY OF CONICS (where the parabola sits)

```
                    CUT A DOUBLE CONE WITH A FLAT PLANE
                                   |
        +----------------+---------+---------+----------------+
        |                |                   |                |
   plane cuts       plane PARALLEL      plane cuts       plane cuts
   one nappe        to a SLANT          both nappes      through the
   only, tilted     SIDE of the cone                     apex
        |                |                   |                |
     ELLIPSE          PARABOLA          HYPERBOLA      DEGENERATE
     e < 1             e = 1             e > 1         point / line /
        |                |                   |         pair of lines
   h^2 < ab         h^2 = ab           h^2 > ab
```

One sentence to remember: **a conic is the set of points whose distance from a fixed
point (the FOCUS) divided by its distance from a fixed line (the DIRECTRIX) is a
constant e.** When that constant is exactly 1, you get a parabola.

---

## THE 60-SECOND VERSION

A parabola is the set of all points that are **equally far** from one dot and one line.

```
        the DIRECTRIX (a line)              the FOCUS (a dot)
                |                                  .S
                |          P .....................
                |  <--- same distance --->
```

Drag a point around keeping those two distances equal and it traces a parabola.

That single sentence produces the whole chapter:

| Job | What you actually do | Where it is asked |
|---|---|---|
| Recognise | is it a parabola? which of the 4 forms? | Section A, 2 marks |
| Extract | vertex, focus, directrix, axis, latus rectum | **Section C, 7 marks** |
| Touch it | tangent at a point / with a given slope | Section B, 4 marks |
| Cut it | normal, focal chord, chord of contact, midpoint chord | Section B or C |

Only **one number** controls everything: `a`. Get `4a` right and the rest is filling a table.

---

## WHERE THE MARKS ARE (AP Inter, Maths IIB — 75 marks)

| Topic | Section | Marks |
|---|---|---|
| Latus rectum / focus / directrix of a simple standard form | A | 2 |
| Equation of a parabola from vertex + focus (or focus + directrix) | A | 2 |
| Focal distance of a point, ends of the latus rectum | A | 2 |
| Tangent condition c = a/m, point of contact | A or B | 2 or 4 |
| Tangent / normal at a given point or a given slope | B | 4 |
| Chord of contact, chord with a given midpoint | B | 4 |
| **Vertex, focus, directrix, axis, LR of a general equation** | **C** | **7** |
| **Derive y^2 = 4ax from the focus-directrix definition** | **C** | **7** |
| **Normal-chord / focal-chord property proof** | **C** | **7** |

**Total realistically available from this one chapter: about 11-15 marks out of 75.**

Add Ellipse and Hyperbola (which reuse the same machinery) and the conics block is
worth roughly a third of the whole IIB paper.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What a conic is: focus, directrix, eccentricity e
              |                        e = 1 is the whole chapter
              v
  STEP 2   Derive y^2 = 4ax    (this is a 7-mark question by itself)
              |
              v
  STEP 3   The FOUR standard forms + the comparison table
              |                 (memorise the table, not four derivations)
              v
  STEP 4   The parts: vertex, focus, axis, directrix,
           latus rectum = 4a, focal distance SP = x1 + a
              |
              v
  STEP 5   Shifted parabola (y - k)^2 = 4a(x - h)
           COMPLETE THE SQUARE on a general equation
              |                        <-- the 7-mark favourite
              v
  STEP 6   Parametric point (a t^2, 2 a t)
              |
     +--------+--------+------------------+
     |                 |                  |
  STEP 7           STEP 8             STEP 9
  Position of      TANGENT            NORMAL
  a point          c = a/m            y = mx - 2am - am^3
  using S1         ty = x + a t^2     y + tx = 2at + at^3
     |                 |                  |
     |            STEP 10             STEP 11
     |            Chord of contact    t2 = -t1 - 2/t1
     |            Midpoint chord      3 normals from a point
     |            Pair of tangents         |
     |            S S1 = T^2               |
     +--------+--------+------------------+
              |
              v
  STEP 12  FOCAL CHORD:  t1 t2 = -1 , length = a(t + 1/t)^2
              |
              v
  STEP 13  Reflection property + applications
```

---

## THE KEY BOX — the formulas that unlock most questions

```
  +==========================================================================+
  |                                                                          |
  |            y^2 = 4 a x        <---  MEMORISE THIS SHAPE                  |
  |                                                                          |
  |    Vertex     ( 0 , 0 )                                                  |
  |    Focus      ( a , 0 )               "a to the RIGHT, inside the curve" |
  |    Directrix    x = -a                "a to the LEFT, outside the curve" |
  |    Axis         y = 0                                                    |
  |    Latus rectum length = 4 a          ends ( a , 2a ) and ( a , -2a )    |
  |    Focal distance of P(x1, y1)  =  S P  =  x1 + a                        |
  |    Parametric point   P(t)  =  ( a t^2 , 2 a t )                         |
  |                                                                          |
  +==========================================================================+

  +==========================================================================+
  |                                                                          |
  |     STEP 1 OF EVERY QUESTION:  match the given equation to y^2 = 4ax     |
  |     and read off  4a.  Then  a = (that number) / 4.                      |
  |                                                                          |
  |     y^2 = 12x   ->  4a = 12  ->  a = 3                                   |
  |     x^2 = 6y    ->  4a = 6   ->  a = 3/2                                 |
  |     3y^2 = 5x   ->  y^2 = (5/3)x  ->  4a = 5/3  ->  a = 5/12             |
  |                                                                          |
  |     GET  a  WRONG AND YOU LOSE ALL 7 MARKS. Check it twice.              |
  |                                                                          |
  +==========================================================================+
```

And the three expressions that drive every tangent / chord question:

```
  +--------------------------------------------------------------------------+
  |   For the parabola   S  =  y^2 - 4 a x  =  0                             |
  |                                                                          |
  |   S1  =  y1^2 - 4 a x1                 (put the POINT into S)            |
  |                                                                          |
  |   T   =  y*y1 - 2a( x + x1 )           (the "half-and-half" version)     |
  |                                                                          |
  |   T = 0    ->  tangent at (x1,y1)   AND   chord of contact from (x1,y1)  |
  |   T = S1   ->  chord whose MIDPOINT is (x1,y1)                           |
  |   S S1 = T^2 -> the PAIR of tangents from (x1,y1)                        |
  +--------------------------------------------------------------------------+
```

How T is built from S — the rule is mechanical:

| In S you see | In T write |
|---|---|
| `y^2` | `y * y1` |
| `x` | `(x + x1) / 2` |
| `y` | `(y + y1) / 2` |
| constant | leave it alone |

---

## IF YOU ONLY HAVE 3 DAYS

**Day 1 morning — the table.**
Copy the four-standard-forms table onto one card and draw the four sketches.
Do 10 "find the focus / directrix / latus rectum" questions from Section A.
Nothing else. If you know only this you already have 4 marks in the bag.

**Day 1 evening — completing the square.**
Take 6 general equations like `y^2 - 4y + 4x + 8 = 0` and reduce each to
`(y - k)^2 = 4a(x - h)`. Then read off vertex, focus, directrix, axis, LR.
This ONE skill is the most-asked 7-mark question in the chapter.

**Day 2 morning — parametric point + focal chord.**
`(a t^2, 2 a t)`, chord `(t1 + t2) y = 2x + 2a t1 t2`, focal chord `t1 t2 = -1`.
Derive the chord equation once yourself; after that it is memory.

**Day 2 evening — tangent and normal.**
Only four lines to hold:
```
  tangent at (x1,y1)   y*y1 = 2a(x + x1)
  tangent at t         t y = x + a t^2
  tangent slope form   y = m x + a/m        contact ( a/m^2 , 2a/m )
  normal slope form    y = m x - 2am - am^3 foot   ( a m^2 , -2am )
```

**Day 3 morning — the three chord formulas** (contact / midpoint / pair) and the
normal property `t2 = -t1 - 2/t1`.

**Day 3 evening — write the derivation of y^2 = 4ax from memory, twice.**
It is a guaranteed 7 marks and it needs no cleverness at all, only neatness.

That plan alone is worth about 13 of the 75 marks in Maths IIB, plus 3-4 EAPCET
questions which are pure formula substitution.

---

## THE ONE-LINE WARNINGS

```
  +--------------------------------------------------------------------------+
  |  1.  4a is the LATUS RECTUM. a is the focal distance. Do not swap them.  |
  |  2.  y^2 = ...  opens LEFT or RIGHT.   x^2 = ...  opens UP or DOWN.      |
  |  3.  The MINUS sign only flips the DIRECTION. All lengths stay positive. |
  |  4.  a is always taken POSITIVE in the standard forms.                   |
  |  5.  The focus is INSIDE the curve, the directrix is OUTSIDE it,         |
  |      and the vertex sits exactly halfway between them.                   |
  +--------------------------------------------------------------------------+
```
