# System of Circles — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 0. THE SET-UP USED IN EVERY FORMULA BELOW

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   S1  =  x^2 + y^2 + 2 g1 x + 2 f1 y + c1  =  0                  |
  |          centre  C1 = ( -g1 , -f1 )                              |
  |          radius  r1 = sqrt( g1^2 + f1^2 - c1 )                   |
  |                                                                  |
  |   S2  =  x^2 + y^2 + 2 g2 x + 2 f2 y + c2  =  0                  |
  |          centre  C2 = ( -g2 , -f2 )                              |
  |          radius  r2 = sqrt( g2^2 + f2^2 - c2 )                   |
  |                                                                  |
  |   d   =  C1 C2  =  sqrt( (g1 - g2)^2 + (f1 - f2)^2 )             |
  |                                                                  |
  +------------------------------------------------------------------+

  RULE ZERO:  the coefficient of x^2 and of y^2 must be 1 in BOTH circles.
              If you are given 3x^2 + 3y^2 + ... , DIVIDE BY 3 FIRST.
              Nothing below works until you have done this.
```

Two old friends you will need on almost every question:

```
  DISTANCE between two points

       d  =  sqrt( (x2 - x1)^2  +  (y2 - y1)^2 )


  PERPENDICULAR DISTANCE from (x1, y1) to the line  ax + by + c = 0

                | a*x1 + b*y1 + c |
       p  =    ---------------------
                  sqrt(a^2 + b^2)


  SECTION FORMULA - the point dividing A(x1,y1), B(x2,y2) in m : n

       INTERNALLY  ( (m x2 + n x1)/(m + n) , (m y2 + n y1)/(m + n) )

       EXTERNALLY  ( (m x2 - n x1)/(m - n) , (m y2 - n y1)/(m - n) )
```

| Formula | When to use |
|---------|-------------|
| distance formula | to get d, the distance between the two centres |
| perpendicular distance | length of a common chord, testing tangency |
| section formula | point of contact, centres of similitude |

---

# 1. RELATIVE POSITION OF TWO CIRCLES

```
  +--------------------------+-------------------+---------------------+
  |   CONDITION              |   POSITION        |  COMMON TANGENTS    |
  +--------------------------+-------------------+---------------------+
  |   d  >  r1 + r2          |   lie APART       |        4            |
  |   d  =  r1 + r2          |   TOUCH externally|        3            |
  |   |r1-r2| < d < r1 + r2  |   CUT at 2 points |        2            |
  |   d  =  |r1 - r2|        |   TOUCH internally|        1            |
  |   d  <  |r1 - r2|        |   one INSIDE the  |        0            |
  |                          |   other           |                     |
  +--------------------------+-------------------+---------------------+
```

| Fact | When to use |
|------|-------------|
| d > r1 + r2 | "show the circles do not intersect", 4 tangents |
| d = r1 + r2 | "show the circles touch each other externally" |
| \|r1-r2\| < d < r1+r2 | "show they intersect at two points" / common chord exists |
| d = \|r1 - r2\| | "show the circles touch internally" |
| d < \|r1 - r2\| | "one circle lies wholly inside the other" |
| Count 4, 3, 2, 1, 0 | "how many common tangents can be drawn?" |

## Points of contact when the circles touch

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  TOUCH EXTERNALLY   ->  point of contact divides C1C2            |
  |                         INTERNALLY in r1 : r2                    |
  |                                                                  |
  |         ( r1 x2 + r2 x1     r1 y2 + r2 y1 )                      |
  |         ( -------------- ,  -------------- )                     |
  |         (    r1 + r2           r1 + r2     )                     |
  |                                                                  |
  |  TOUCH INTERNALLY   ->  point of contact divides C1C2            |
  |                         EXTERNALLY in r1 : r2                    |
  |                                                                  |
  |         ( r1 x2 - r2 x1     r1 y2 - r2 y1 )                      |
  |         ( -------------- ,  -------------- )                     |
  |         (    r1 - r2           r1 - r2     )                     |
  |                                                                  |
  |  where  C1 = (x1, y1) ,  C2 = (x2, y2)                           |
  |                                                                  |
  |  SHORTCUT: the point of contact is also the intersection of      |
  |  the radical axis S1 - S2 = 0 with the line C1C2.                |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# 2. ANGLE BETWEEN TWO INTERSECTING CIRCLES

**Definition:** the angle between the **tangents** to the two circles at a point
where they cross.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    GEOMETRIC FORM                                                |
  |                                                                  |
  |                     d^2  -  r1^2  -  r2^2                        |
  |      cos(theta)  =  --------------------                         |
  |                          2 r1 r2                                 |
  |                                                                  |
  |    COEFFICIENT FORM                                              |
  |                                                                  |
  |                       c1  +  c2  -  2 g1 g2  -  2 f1 f2          |
  |      cos(theta) = ---------------------------------------------  |
  |                   2 sqrt(g1^2+f1^2-c1) . sqrt(g2^2+f2^2-c2)      |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  +------------------------------------------------------------------+
  |  THE SIGN-FLIPPED VERSION PRINTED IN MANY BOOKS                  |
  |                                                                  |
  |                     r1^2 + r2^2 - d^2                            |
  |      cos(theta)  =  -----------------                            |
  |                        2 r1 r2                                   |
  |                                                                  |
  |                     2 g1 g2  +  2 f1 f2  -  c1  -  c2            |
  |                =  ---------------------------------------------  |
  |                   2 sqrt(g1^2+f1^2-c1) . sqrt(g2^2+f2^2-c2)      |
  |                                                                  |
  |  This measures the angle C1 P C2 INSIDE the triangle of the two  |
  |  centres and the crossing point. It is the SUPPLEMENT of the     |
  |  other one: the two answers always add up to 180 degrees.        |
  |                                                                  |
  |  IN THE EXAM: compute, then quote the ACUTE angle as the         |
  |  "angle between the circles". For orthogonality (theta = 90) the |
  |  two versions give the IDENTICAL condition, so it never matters  |
  |  where the marks are.                                            |
  +------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| cos(theta) with d, r1, r2 | centres and radii already known or easy |
| cos(theta) with g, f, c | circles are given as equations (usually faster) |
| theta = 90 | orthogonal — go straight to the condition in Section 3 |
| \|cos(theta)\| > 1 | impossible — the circles do not intersect at all |

**The answer is nearly always 30, 45, 60 or 90 degrees. Anything else, recheck.**

---

# 3. ORTHOGONAL CIRCLES (cutting at right angles)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    THE CONDITION FOR ORTHOGONALITY                               |
  |                                                                  |
  |          2 g1 g2   +   2 f1 f2   =   c1   +   c2                 |
  |                                                                  |
  |    (both TWOS on the left; nothing is halved)                    |
  |                                                                  |
  |    Equivalent geometric form (Pythagoras):                       |
  |                                                                  |
  |          d^2   =   r1^2   +   r2^2                               |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  THE PICTURE THAT PROVES IT

                          P
                         /|\
                        / | \
                  r1   /  |  \   r2
                      /   |   \
                     /  90 deg \
                    /           \
                  C1 ----------- C2
                        d

    tangents perpendicular  <=>  radii perpendicular
                            <=>  triangle right-angled at P
                            <=>  d^2 = r1^2 + r2^2
```

## Special cases worth memorising

```
  +--------------------------------------+---------------------------+
  |  x^2+y^2+2gx+c = 0  and              |                           |
  |  x^2+y^2+2fy+c' = 0  orthogonal      |    c + c' = 0             |
  +--------------------------------------+---------------------------+
  |  circle through the ORIGIN           |    c = 0 , so the         |
  |  orthogonal to S' = 0                |    condition becomes      |
  |                                      |    2gg' + 2ff' = c'       |
  +--------------------------------------+---------------------------+
  |  two circles CONCENTRIC              |    can never be           |
  |                                      |    orthogonal (d = 0)     |
  +--------------------------------------+---------------------------+
```

## Building a circle orthogonal to given circles

Let the required circle be `x^2 + y^2 + 2gx + 2fy + c = 0` — three unknowns,
so you need three conditions. **Every one of these is LINEAR in g, f, c:**

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  "orthogonal to x^2+y^2+2g'x+2f'y+c' = 0"                        |
  |                              ->   2 g g' + 2 f f' = c + c'       |
  |                                                                  |
  |  "passes through (x1, y1)"   ->   x1^2+y1^2+2g x1+2f y1+c = 0    |
  |                                                                  |
  |  "centre on ax + by + k = 0" ->   -a g - b f + k = 0             |
  |                                                                  |
  |  "passes through the origin" ->   c = 0                          |
  |                                                                  |
  |  "touches the x-axis"        ->   g^2 = c                        |
  |  "touches the y-axis"        ->   f^2 = c                        |
  |                                                                  |
  |  "radius is R"               ->   g^2 + f^2 - c = R^2            |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Task | When to use |
|------|-------------|
| 2g1g2 + 2f1f2 = c1 + c2 | "show these circles are orthogonal" |
| same, solved for k | "find k so that they cut orthogonally" |
| 3 linear equations | "find the circle orthogonal to these three circles" |
| radical centre shortcut (Section 6) | same question, half the time |

---

# 4. THE RADICAL AXIS

**Definition:** the locus of a point from which the **lengths of the tangents**
to the two circles are **equal**.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     RADICAL AXIS        S1  -  S2  =  0                          |
  |                                                                  |
  |     2 (g1 - g2) x  +  2 (f1 - f2) y  +  (c1 - c2)  =  0          |
  |                                                                  |
  |     It is always a STRAIGHT LINE (x^2 and y^2 cancel).           |
  |                                                                  |
  |     It is always PERPENDICULAR to the line of centres C1 C2.     |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  DERIVATION IN FOUR LINES (worth 2 marks on its own)

     sqrt(S1 at P)  =  sqrt(S2 at P)        equal tangent lengths
     S1 at P  =  S2 at P                    square both sides
     x^2 and y^2 cancel                     the key step
     S1 - S2 = 0                            a straight line
```

## Where the radical axis lies — THREE CASES

```
  +-------------------------+----------------------------------------+
  |  circles CUT at 2 pts   |  it IS the COMMON CHORD                |
  +-------------------------+----------------------------------------+
  |  circles TOUCH          |  it IS the COMMON TANGENT at the       |
  |                         |  point of contact                      |
  +-------------------------+----------------------------------------+
  |  circles do NOT meet    |  it lies OUTSIDE both circles.         |
  |                         |  It is NOT a common chord - do not     |
  |                         |  call it one.                          |
  +-------------------------+----------------------------------------+
  |  circles CONCENTRIC     |  NO radical axis exists at all         |
  +-------------------------+----------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| S1 - S2 = 0 | "find the radical axis" |
| S1 - S2 = 0 | "find the equation of the common chord" |
| S1 - S2 = 0 | "find the common tangent at the point of contact" |
| m1 m2 = -1 | "show the radical axis is perpendicular to the line of centres" |

---

# 5. THE COMMON CHORD AND ITS LENGTH

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   EQUATION OF THE COMMON CHORD      S1  -  S2  =  0              |
  |                                                                  |
  |   LENGTH OF THE COMMON CHORD                                     |
  |                                                                  |
  |          L  =  2 sqrt( r1^2  -  p1^2 )                           |
  |                                                                  |
  |   p1 = perpendicular distance from C1 to the common chord        |
  |                                                                  |
  |   (Using r2 and p2 gives the same L. Use it as a free check.)    |
  |                                                                  |
  +------------------------------------------------------------------+

           A
          /|
         / |
     r1 /  | half chord = sqrt(r1^2 - p1^2)
       /   |
     C1 -- M
        p1
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   THE COMMON CHORD IS A DIAMETER OF CIRCLE 1                     |
  |                                                                  |
  |      <=>  the centre C1 lies ON the radical axis                 |
  |      <=>  substituting C1 into S1 - S2 = 0 gives 0               |
  |      <=>  d^2  =  r2^2  -  r1^2                                  |
  |                                                                  |
  |   MAXIMUM POSSIBLE LENGTH of a common chord                      |
  |            =  2 x (the SMALLER of the two radii)                 |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Task | When to use |
|------|-------------|
| S1 - S2 = 0, then 2 sqrt(r^2 - p^2) | "find the length of the common chord" |
| put the point into S1 - S2 = 0 | "the common chord passes through (a,b), find k" |
| put C1 into S1 - S2 = 0 | "the common chord is a diameter of the first circle" |
| L = 2 x smaller radius | "find the maximum length of the common chord" |

---

# 6. THE RADICAL CENTRE OF THREE CIRCLES

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   THE THREE RADICAL AXES OF THREE CIRCLES ARE CONCURRENT.        |
  |   Their common point is the RADICAL CENTRE R.                    |
  |                                                                  |
  |   TO FIND IT:  solve   S1 - S2 = 0   and   S1 - S3 = 0           |
  |                simultaneously (two lines, one point).            |
  |                                                                  |
  |   CHECK: S2 - S3 = 0 must also pass through R.                   |
  |                                                                  |
  |   From R, the tangent lengths to ALL THREE circles are equal.    |
  |                                                                  |
  |   (It fails only if the three centres are COLLINEAR - then the   |
  |    three radical axes are parallel and there is no radical       |
  |    centre.)                                                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

## THE STAR RESULT — circle orthogonal to three given circles

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   CENTRE  =  the RADICAL CENTRE  R = (a, b)                      |
  |                                                                  |
  |   RADIUS  =  the length of the tangent from R                    |
  |           =  sqrt( S1 evaluated at R )                           |
  |                                                                  |
  |   EQUATION:   (x - a)^2 + (y - b)^2  =  S1(R)                    |
  |                                                                  |
  |   If S1(R) is NEGATIVE, no real orthogonal circle exists.        |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Task | When to use |
|------|-------------|
| solve two radical axes | "find the radical centre" |
| radical centre + tangent length | "find the circle orthogonal to these three circles" |
| equal tangent lengths | "find the point from which tangents to all three circles are equal" |

---

# 7. COMMON TANGENTS

## Centres of similitude

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  INTERNAL centre of similitude I                                 |
  |     divides C1C2 INTERNALLY in r1 : r2                           |
  |     the TRANSVERSE (internal) common tangents pass through I     |
  |                                                                  |
  |  EXTERNAL centre of similitude E                                 |
  |     divides C1C2 EXTERNALLY in r1 : r2                           |
  |     the DIRECT (external) common tangents pass through E         |
  |                                                                  |
  |  MEMORY:  I -> Internal -> transverse (they cross INSIDE)        |
  |           E -> External -> direct (they meet OUTSIDE)            |
  |                                                                  |
  |  If r1 = r2 there is no external centre of similitude and the    |
  |  two direct common tangents are PARALLEL to C1 C2.               |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Lengths

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   LENGTH OF A DIRECT (external) COMMON TANGENT                   |
  |                                                                  |
  |        L1  =  sqrt( d^2  -  (r1 - r2)^2 )                        |
  |                                                                  |
  |   LENGTH OF A TRANSVERSE (internal) COMMON TANGENT               |
  |                                                                  |
  |        L2  =  sqrt( d^2  -  (r1 + r2)^2 )                        |
  |                                                                  |
  |   The DIRECT one is always the LONGER of the two.                |
  |                                                                  |
  |   L2 only exists when d >= r1 + r2                               |
  |   L1 only exists when d >= |r1 - r2|                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Finding the EQUATIONS of the common tangents

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  1.  Get C1, r1, C2, r2, d. Decide how many tangents there are.  |
  |  2.  DIRECT     -> find E   |   TRANSVERSE -> find I             |
  |  3.  Line through it:   y - y0 = m (x - x0)                      |
  |                    ->   m x - y + (y0 - m x0) = 0                |
  |  4.  Set the perpendicular distance from a centre = its radius   |
  |      (use the SMALLER circle - the numbers are kinder).          |
  |  5.  Square, get a quadratic in m, solve.                        |
  |  6.  Put each m back to get the two lines.                       |
  |  7.  CHECK the distance from the OTHER centre equals its radius. |
  |  8.  Test the VERTICAL line x = x0 separately - the slope method |
  |      can never find it.                                          |
  |                                                                  |
  |  When the circles TOUCH, one common tangent is simply the        |
  |  RADICAL AXIS  S1 - S2 = 0.                                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| L1 = sqrt(d^2 - (r1-r2)^2) | "length of the direct/external common tangent" |
| L2 = sqrt(d^2 - (r1+r2)^2) | "length of the transverse/internal common tangent" |
| E, section formula (external) | equations of the DIRECT common tangents |
| I, section formula (internal) | equations of the TRANSVERSE common tangents |
| S1 - S2 = 0 | the single tangent at the point of contact |

---

# 8. FAMILY OF CIRCLES

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  THROUGH THE INTERSECTION OF TWO CIRCLES                         |
  |                                                                  |
  |            S1  +  k S2  =  0            ( k not equal to -1 )    |
  |                                                                  |
  |  k = -1 gives the RADICAL AXIS (a line), not a circle.           |
  |                                                                  |
  |  Written out:                                                    |
  |  (1+k)x^2 + (1+k)y^2 + (2g1+2k g2)x + (2f1+2k f2)y + (c1+k c2)=0 |
  |                                                                  |
  |  So after dividing by (1+k):                                     |
  |                                                                  |
  |        g1 + k g2            f1 + k f2            c1 + k c2       |
  |   g = -----------  ,   f = -----------  ,   c = -----------      |
  |          1 + k                1 + k                1 + k         |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  THROUGH THE INTERSECTION OF A CIRCLE AND A LINE                 |
  |                                                                  |
  |            S  +  k L  =  0                                       |
  |                                                                  |
  |  Here the x^2, y^2 coefficients stay 1, so g, f, c are easy:     |
  |                                                                  |
  |  S + k L :  x^2 + y^2 + (2g + k a)x + (2f + k b)y + (c + k e)= 0 |
  |             for the line  L = a x + b y + e = 0                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The extra condition that fixes k

| The question says | Write this equation |
|---|---|
| "passes through the point (a, b)" | S1(a,b) + k S2(a,b) = 0 |
| "has radius R" | g^2 + f^2 - c = R^2 for the family |
| "centre lies on the line px + qy + s = 0" | p(-g) + q(-f) + s = 0 |
| "passes through the origin" | constant term = 0 |
| "touches the x-axis" | g^2 = c |
| "the common chord is a diameter" | the family's centre lies on S1 - S2 = 0 |
| "is orthogonal to S3 = 0" | 2 g g3 + 2 f f3 = c + c3 for the family |

> If the condition is a **radius** or a **tangency**, the equation in k is
> **quadratic** — expect TWO answers and write both.

---

# 9. THE PROOF LINES EXAMINERS LOOK FOR

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  "PROVE THE RADICAL AXIS IS PERPENDICULAR TO C1C2"               |
  |                                                                  |
  |     slope of radical axis   m1 = -(g1 - g2)/(f1 - f2)            |
  |     slope of C1C2           m2 =  (f1 - f2)/(g1 - g2)            |
  |     m1 m2 = -1                                                   |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  "PROVE THE THREE RADICAL AXES ARE CONCURRENT"                   |
  |                                                                  |
  |     At R: tangent to 1 = tangent to 2  (R on axis of 1,2)        |
  |           tangent to 1 = tangent to 3  (R on axis of 1,3)        |
  |     therefore tangent to 2 = tangent to 3                        |
  |     so R lies on the axis of 2 and 3 as well.                    |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  "DERIVE THE CONDITION FOR ORTHOGONALITY"                        |
  |                                                                  |
  |     d^2 = r1^2 + r2^2                                            |
  |     (g1-g2)^2 + (f1-f2)^2 = (g1^2+f1^2-c1) + (g2^2+f2^2-c2)      |
  |     cancel the squares                                           |
  |     -2 g1 g2 - 2 f1 f2 = -c1 - c2                                |
  |     2 g1 g2 + 2 f1 f2 = c1 + c2                                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+-------------------------------------------------------------+
  | 1  |  Centre (-g, -f)   Radius sqrt(g^2 + f^2 - c)               |
  +----+-------------------------------------------------------------+
  | 2  |  d = distance between C1 and C2                             |
  +----+-------------------------------------------------------------+
  | 3  |  RADICAL AXIS / COMMON CHORD :     S1 - S2 = 0              |
  +----+-------------------------------------------------------------+
  | 4  |  ORTHOGONAL :   2 g1 g2 + 2 f1 f2 = c1 + c2                 |
  +----+-------------------------------------------------------------+
  | 5  |  ORTHOGONAL (geometry) :   d^2 = r1^2 + r2^2                |
  +----+-------------------------------------------------------------+
  | 6  |  ANGLE :   cos(theta) = (d^2 - r1^2 - r2^2) / (2 r1 r2)     |
  +----+-------------------------------------------------------------+
  | 7  |  LENGTH OF COMMON CHORD :   L = 2 sqrt(r^2 - p^2)           |
  +----+-------------------------------------------------------------+
  | 8  |  POSITION :  4, 3, 2, 1, 0 common tangents as d shrinks     |
  |    |  d>r1+r2 ; d=r1+r2 ; |r1-r2|<d<r1+r2 ; d=|r1-r2| ; d<|r1-r2||
  +----+-------------------------------------------------------------+
  | 9  |  DIRECT TANGENT LENGTH     = sqrt(d^2 - (r1 - r2)^2)        |
  +----+-------------------------------------------------------------+
  | 10 |  TRANSVERSE TANGENT LENGTH = sqrt(d^2 - (r1 + r2)^2)        |
  +----+-------------------------------------------------------------+
  | 11 |  CENTRES OF SIMILITUDE divide C1C2 in r1 : r2               |
  |    |  internally -> transverse ; externally -> direct            |
  +----+-------------------------------------------------------------+
  | 12 |  FAMILY :   S1 + k S2 = 0   and   S + k L = 0               |
  +----+-------------------------------------------------------------+
```

```
  IF YOU CAN ONLY REMEMBER THREE LINES, MAKE THEM THESE:

       S1 - S2 = 0                       radical axis / common chord
       2 g1 g2 + 2 f1 f2 = c1 + c2       orthogonal
       compare d with r1+r2 and |r1-r2|  position and tangent count

  They alone carry about 6 marks in Section A every year.
```
