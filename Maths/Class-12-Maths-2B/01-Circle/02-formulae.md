# Circle — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

Two things are used everywhere, so they go first:

```
  DISTANCE between two points

       d  =  sqrt( (x2 - x1)^2  +  (y2 - y1)^2 )


  PERPENDICULAR DISTANCE from (x1, y1) to the line  ax + by + c = 0

                | a*x1 + b*y1 + c |
       d  =    ---------------------
                  sqrt(a^2 + b^2)
```

---

# 1. THE THREE MASTER EXPRESSIONS

Everything after this point is written using these three symbols. Learn them
before anything else.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  S   =  x^2  +  y^2  +  2gx  +  2fy  +  c                         |
  |         (the circle itself, left side made equal to 0)            |
  |                                                                   |
  |  S1  =  x1^2 + y1^2 + 2g*x1 + 2f*y1 + c                           |
  |         (put the POINT (x1,y1) in, everywhere)                    |
  |                                                                   |
  |  T   =  x*x1 + y*y1 + g(x + x1) + f(y + y1) + c                   |
  |         (MIX x with x1, MIX y with y1, AVERAGE the linear parts)  |
  |                                                                   |
  |  S12 =  x1*x2 + y1*y2 + g(x1 + x2) + f(y1 + y2) + c               |
  |         (two points mixed together — used for conjugate points)   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| S1 | position of a point, length of tangent, power of a point |
| T = 0 | tangent at a point, chord of contact, polar |
| T = S1 | chord whose MIDPOINT is given |
| S * S1 = T^2 | pair of tangents from an external point |
| S12 = 0 | testing whether two points are conjugate |
| S - S' = 0 | common chord / radical axis of two circles |

---

# 2. EQUATIONS OF A CIRCLE

## 2.1 Standard (centre-radius) form

```
  +-----------------------------------------------------------+
  |                                                           |
  |    (x - h)^2  +  (y - k)^2  =  r^2                        |
  |                                                           |
  |    centre (h, k) ,  radius r                              |
  |                                                           |
  |    Centre at the origin:      x^2  +  y^2  =  r^2         |
  |                                                           |
  +-----------------------------------------------------------+
```

## 2.2 General form

```
  +-----------------------------------------------------------+
  |                                                           |
  |    x^2  +  y^2  +  2gx  +  2fy  +  c  =  0                |
  |                                                           |
  |    CENTRE  =  ( -g , -f )                                 |
  |                                                           |
  |    RADIUS  =  sqrt( g^2  +  f^2  -  c )                   |
  |                                                           |
  +-----------------------------------------------------------+

  If the equation starts with  a*x^2 + a*y^2 + ... ,
  DIVIDE THE WHOLE THING BY a FIRST. Always.
```

## 2.3 Diameter form

```
  +-----------------------------------------------------------+
  |                                                           |
  |   (x - x1)(x - x2)  +  (y - y1)(y - y2)  =  0             |
  |                                                           |
  |   when (x1,y1) and (x2,y2) are the ENDS OF A DIAMETER     |
  |                                                           |
  |   centre = midpoint = ( (x1+x2)/2 , (y1+y2)/2 )           |
  |   radius = half the distance between the two points       |
  |                                                           |
  +-----------------------------------------------------------+
```

## 2.4 Parametric form

```
  +-----------------------------------------------------------+
  |                                                           |
  |   x  =  h  +  r cos(theta)                                |
  |   y  =  k  +  r sin(theta)          0 <= theta < 360 deg  |
  |                                                           |
  |   For x^2 + y^2 = r^2 :     x = r cos t ,  y = r sin t    |
  |                                                           |
  +-----------------------------------------------------------+
```

| Form | When to use |
|------|-------------|
| (x-h)^2 + (y-k)^2 = r^2 | centre and radius are given directly |
| x^2 + y^2 + 2gx + 2fy + c = 0 | you are ASKED for centre / radius, or a circle through points |
| (x-x1)(x-x2)+(y-y1)(y-y2)=0 | the words "ends of a diameter" appear |
| Parametric | "write the parametric equations" / find a point at angle theta |
| Three unknowns g, f, c | the circle passes through THREE given points |

---

# 3. TYPE OF CIRCLE (the discriminant of a circle)

```
  +-----------------------------+-------------------------------------+
  |   g^2 + f^2 - c  >  0       |   REAL circle                       |
  +-----------------------------+-------------------------------------+
  |   g^2 + f^2 - c  =  0       |   POINT circle — just (-g, -f)      |
  +-----------------------------+-------------------------------------+
  |   g^2 + f^2 - c  <  0       |   IMAGINARY circle — no real points |
  +-----------------------------+-------------------------------------+
```

| Fact | When to use |
|------|-------------|
| coeff of x^2 = coeff of y^2, and NO xy term | "does this represent a circle?" |
| g^2 + f^2 - c > 0 | "find the values of k for which it is a real circle" |
| g^2 + f^2 - c = 0 | "show that it represents a point circle" |

---

# 4. SPECIAL POSITIONS

```
  +---------------------------------------+-----------------------------+
  |  Passes through the ORIGIN            |     c  =  0                 |
  +---------------------------------------+-----------------------------+
  |  TOUCHES the x-axis                   |     g^2  =  c               |
  +---------------------------------------+-----------------------------+
  |  TOUCHES the y-axis                   |     f^2  =  c               |
  +---------------------------------------+-----------------------------+
  |  TOUCHES BOTH axes                    |     g^2  =  f^2  =  c       |
  +---------------------------------------+-----------------------------+
  |  Centre lies ON the x-axis            |     f  =  0                 |
  +---------------------------------------+-----------------------------+
  |  Centre lies ON the y-axis            |     g  =  0                 |
  +---------------------------------------+-----------------------------+

  Length of the x-INTERCEPT  =  2 sqrt( g^2 - c )
  Length of the y-INTERCEPT  =  2 sqrt( f^2 - c )
```

Useful ready-made circles:

```
  Centre (h,k) TOUCHING the x-axis   :  (x-h)^2 + (y-k)^2 = k^2
  Centre (h,k) TOUCHING the y-axis   :  (x-h)^2 + (y-k)^2 = h^2
  Radius a, TOUCHING BOTH axes,
  in the first quadrant              :  (x-a)^2 + (y-a)^2 = a^2
```

| Formula | When to use |
|---------|-------------|
| c = 0 | "the circle passes through the origin" |
| g^2 = c | "touches the x-axis" — instantly gives one equation |
| f^2 = c | "touches the y-axis" |
| g^2 = f^2 = c | "touches both axes" |
| 2 sqrt(g^2 - c) | "find the intercept made on the x-axis" |

---

# 5. POSITION OF A POINT

```
  +-------------------------------------------------------------+
  |                                                             |
  |     S1  <  0    ->   the point is INSIDE                    |
  |     S1  =  0    ->   the point is ON the circle             |
  |     S1  >  0    ->   the point is OUTSIDE                   |
  |                                                             |
  |     LENGTH OF THE TANGENT from (x1,y1)  =  sqrt( S1 )       |
  |                                                             |
  |     POWER OF THE POINT (x1,y1)          =  S1               |
  |                                                             |
  |     Equivalently, with d = distance from centre:            |
  |            length of tangent = sqrt( d^2 - r^2 )            |
  |                                                             |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| sign of S1 | "find the position of the point ..." |
| sqrt(S1) | "find the length of the tangent from ..." |
| S1 | "find the power of the point ..." |
| S1 < 0 | needed before calling a point the MIDPOINT of a chord |

---

# 6. POSITION OF A LINE, AND CHORDS

```
  +----------------------------------------------------------------+
  |                                                                |
  |  d = perpendicular distance from the CENTRE to the line        |
  |                                                                |
  |      d  <  r   ->  SECANT (cuts at 2 points)                   |
  |      d  =  r   ->  TANGENT (touches at 1 point)                |
  |      d  >  r   ->  does NOT meet the circle                    |
  |                                                                |
  |  LENGTH OF THE CHORD  =  2 sqrt( r^2  -  d^2 )                 |
  |                                                                |
  |  d = 0  ->  the chord is a DIAMETER, length 2r                 |
  |                                                                |
  +----------------------------------------------------------------+
```

Condition for **y = mx + c** to touch:

```
  +----------------------------------------------------------------+
  |                                                                |
  |  For  x^2 + y^2 = a^2 :        c^2  =  a^2 ( 1 + m^2 )         |
  |                                                                |
  |  TANGENT IN SLOPE FORM :  y  =  mx  +/-  a sqrt(1 + m^2)       |
  |                                                                |
  |  POINT OF CONTACT      :  (  -a^2 m / c  ,   a^2 / c  )        |
  |                                                                |
  |  For the general circle (centre (-g,-f), radius r):            |
  |                                                                |
  |      y + f  =  m ( x + g )  +/-  r sqrt(1 + m^2)               |
  |                                                                |
  +----------------------------------------------------------------+
```

Condition for **lx + my + n = 0** to touch x^2 + y^2 = a^2:

```
        n^2  =  a^2 ( l^2 + m^2 )
```

| Formula | When to use |
|---------|-------------|
| compare d with r | "find the position of the line ..." |
| d = r | "find k so that the line touches the circle" |
| 2 sqrt(r^2 - d^2) | "find the length of the chord cut off by ..." |
| c^2 = a^2(1 + m^2) | the line is given in the y = mx + c shape |
| y = mx +/- a sqrt(1+m^2) | "find the tangent(s) of slope m" |
| n^2 = a^2(l^2 + m^2) | the line is given as lx + my + n = 0 |

---

# 7. TANGENT, NORMAL, CHORD OF CONTACT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  TANGENT at (x1,y1) LYING ON the circle       :   T  =  0         |
  |                                                                   |
  |     x*x1 + y*y1 + g(x + x1) + f(y + y1) + c  =  0                 |
  |                                                                   |
  |     For x^2 + y^2 = a^2 :      x*x1  +  y*y1  =  a^2              |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  NORMAL at (x1,y1) = the line through the CENTRE and the point    |
  |                                                                   |
  |     (y1 + f)(x - x1)  -  (x1 + g)(y - y1)  =  0                   |
  |                                                                   |
  |     For x^2 + y^2 = a^2 :      y1 * x  -  x1 * y  =  0            |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  CHORD OF CONTACT of an EXTERNAL point (x1,y1)  :   T  =  0       |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  PAIR OF TANGENTS from an external point       :  S * S1 = T^2    |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  CHORD whose MIDPOINT is (x1,y1)               :   T  =  S1       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Extra results worth knowing:

```
  Angle between the two tangents from an external point P:

              theta                r
         tan( ----- )   =   ----------------
                2            sqrt( S1 )

  Length of the chord of contact from P, with d = CP:

                              2 * r * sqrt(S1)
         length          =   ------------------
                                    d

  Area of the triangle formed by the pair of tangents and the
  chord of contact:

                       r * ( S1 )^(3/2)
         area    =    ------------------
                          d^2
```

| Formula | When to use |
|---------|-------------|
| T = 0 with S1 = 0 | "find the tangent at the point (x1,y1)" |
| T = 0 with S1 > 0 | "find the chord of contact of ..." |
| line through centre | "find the equation of the normal at ..." |
| S * S1 = T^2 | "find the pair of tangents from ..." |
| T = S1 | "find the chord whose midpoint is ..." |

---

# 8. POLE, POLAR, CONJUGATES

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  POLAR of the point (x1, y1)      :    T  =  0                    |
  |                                                                   |
  |     (x1,y1) is called the POLE of that line.                      |
  |                                                                   |
  |     P ON the circle       ->  polar = the tangent at P            |
  |     P OUTSIDE             ->  polar = the chord of contact of P   |
  |     P INSIDE              ->  polar = a line that misses the      |
  |                               circle entirely                     |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  POLE of  l*x + m*y + n = 0  w.r.t.  x^2 + y^2 = a^2  is          |
  |                                                                   |
  |             (  - a^2 * l / n  ,  - a^2 * m / n  )                 |
  |                                                                   |
  |  (or just compare coefficients of x*x1 + y*y1 - a^2 = 0 with      |
  |   the given line — safer and always works)                        |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  CONJUGATE POINTS (x1,y1) and (x2,y2)  :    S12  =  0             |
  |                                                                   |
  |     x1*x2 + y1*y2 + g(x1+x2) + f(y1+y2) + c  =  0                 |
  |                                                                   |
  |     For x^2 + y^2 = a^2  :   x1*x2 + y1*y2  =  a^2                |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |  CONJUGATE LINES  l1x + m1y + n1 = 0 ,  l2x + m2y + n2 = 0        |
  |                                                                   |
  |     w.r.t. x^2 + y^2 = a^2  :                                     |
  |                                                                   |
  |            a^2 ( l1*l2  +  m1*m2 )   =   n1 * n2                  |
  |                                                                   |
  |     w.r.t. the general circle, with r^2 = g^2 + f^2 - c :         |
  |                                                                   |
  |     r^2 ( l1*l2 + m1*m2 )                                         |
  |            =  ( -g*l1 - f*m1 + n1 ) ( -g*l2 - f*m2 + n2 )         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| T = 0 | "find the polar of the point ..." |
| compare coefficients | "find the pole of the line ..." |
| S12 = 0 | "show that the points are conjugate" / "find k" |
| a^2(l1l2 + m1m2) = n1n2 | "show that the lines are conjugate" / "find k" |

---

# 9. TWO CIRCLES

Let d = distance between the centres.

```
  +---------------------------+--------------------------+--------------+
  |  CONDITION                |  POSITION                |  COMMON      |
  |                           |                          |  TANGENTS    |
  +---------------------------+--------------------------+--------------+
  |  d  >  r1 + r2            |  apart, no contact       |      4       |
  |  d  =  r1 + r2            |  touch EXTERNALLY        |      3       |
  |  |r1-r2| < d < r1 + r2    |  cut at 2 points         |      2       |
  |  d  =  |r1 - r2|          |  touch INTERNALLY        |      1       |
  |  d  <  |r1 - r2|          |  one inside the other    |      0       |
  +---------------------------+--------------------------+--------------+
```

## Angle between two circles

```
  +----------------------------------------------------------------+
  |                                                                |
  |                        d^2  -  r1^2  -  r2^2                   |
  |     cos(theta)   =    -------------------------                |
  |                             2 * r1 * r2                        |
  |                                                                |
  |  (Some books use ( r1^2 + r2^2 - d^2 )/(2 r1 r2), which gives  |
  |   the supplement. The orthogonality condition is the same.)    |
  |                                                                |
  +----------------------------------------------------------------+
```

## Orthogonal circles (cutting at 90 degrees)

```
  +----------------------------------------------------------------+
  |                                                                |
  |        d^2   =   r1^2  +  r2^2                                 |
  |                                                                |
  |   equivalently, in general-equation form,                      |
  |                                                                |
  |        2*g1*g2  +  2*f1*f2   =   c1  +  c2                     |
  |                                                                |
  |   (BOTH circles must first be written with coefficient of      |
  |    x^2 equal to 1)                                             |
  |                                                                |
  +----------------------------------------------------------------+
```

## Common chord and radical axis

```
  +----------------------------------------------------------------+
  |                                                                |
  |   RADICAL AXIS  :   S  -  S'  =  0                             |
  |                                                                |
  |      2(g1 - g2) x  +  2(f1 - f2) y  +  (c1 - c2)  =  0         |
  |                                                                |
  |   * If the circles CUT, this line is the COMMON CHORD.         |
  |   * If they TOUCH, it is the common tangent at the contact.    |
  |   * It is always PERPENDICULAR to the line of centres.         |
  |   * On it, the tangent lengths to both circles are equal.      |
  |                                                                |
  |   LENGTH OF THE COMMON CHORD                                   |
  |        =  2 sqrt( r1^2  -  p1^2 )                              |
  |     where p1 = distance from centre 1 to the radical axis      |
  |                                                                |
  |   RADICAL CENTRE = the single point where the three radical    |
  |   axes of three circles (taken in pairs) all meet.             |
  |                                                                |
  +----------------------------------------------------------------+
```

## Centres of similitude (for the common tangents)

```
  INTERNAL centre  =  the point dividing C1C2 INTERNALLY in r1 : r2
                      (the transverse tangents meet here)

  EXTERNAL centre  =  the point dividing C1C2 EXTERNALLY in r1 : r2
                      (the direct tangents meet here)
```

| Formula | When to use |
|---------|-------------|
| compare d with r1+r2, |r1-r2| | "find the position of the two circles" |
| the table above | "find the number of common tangents" |
| 2g1g2 + 2f1f2 = c1 + c2 | "show they cut orthogonally" / "find k" |
| S - S' = 0 | "find the common chord" or "the radical axis" |
| 2 sqrt(r1^2 - p1^2) | "find the LENGTH of the common chord" |
| cos formula | "find the angle between the circles" |

---

# 10. QUICK SANITY CHECKS

Use these to catch your own mistakes in 10 seconds.

| Check | What it should give |
|-------|---------------------|
| Put the given point back into your circle | must give 0 |
| Distance from your centre to your tangent | must equal your radius |
| Does your normal pass through the centre? | it must |
| Does your chord pass through its midpoint? | it must |
| Is your (chord length) <= 2r ? | it must be |
| Is your radius positive and real? | it must be |
| Sign of S1 vs distance from centre | inside means d < r |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else, learn these twelve. They cover more than 90% of every
Circle question ever set in Maths IIB.

```
  +----+---------------------------------------------------------------+
  | 1  |  x^2 + y^2 + 2gx + 2fy + c = 0                                |
  |    |  CENTRE = (-g, -f)     RADIUS = sqrt(g^2 + f^2 - c)           |
  +----+---------------------------------------------------------------+
  | 2  |  (x - h)^2 + (y - k)^2 = r^2                                  |
  +----+---------------------------------------------------------------+
  | 3  |  Diameter form:  (x-x1)(x-x2) + (y-y1)(y-y2) = 0              |
  +----+---------------------------------------------------------------+
  | 4  |  S1 = x1^2 + y1^2 + 2g*x1 + 2f*y1 + c                         |
  |    |  S1 < 0 inside , S1 = 0 on , S1 > 0 outside                   |
  +----+---------------------------------------------------------------+
  | 5  |  Length of the tangent  =  sqrt(S1)                           |
  +----+---------------------------------------------------------------+
  | 6  |  Line vs circle:  d < r secant , d = r tangent , d > r none   |
  +----+---------------------------------------------------------------+
  | 7  |  Length of a chord  =  2 sqrt(r^2 - d^2)                      |
  +----+---------------------------------------------------------------+
  | 8  |  T = x*x1 + y*y1 + g(x + x1) + f(y + y1) + c                  |
  |    |  T = 0  ->  tangent / chord of contact / polar                |
  +----+---------------------------------------------------------------+
  | 9  |  Chord with midpoint (x1,y1):   T = S1                        |
  +----+---------------------------------------------------------------+
  | 10 |  Pair of tangents:   S * S1 = T^2                             |
  +----+---------------------------------------------------------------+
  | 11 |  y = mx + c touches x^2 + y^2 = a^2  <=>  c^2 = a^2(1 + m^2)  |
  |    |  Tangent of slope m:   y = mx +/- a sqrt(1 + m^2)             |
  +----+---------------------------------------------------------------+
  | 12 |  Orthogonal circles:  2*g1*g2 + 2*f1*f2 = c1 + c2             |
  |    |  Radical axis / common chord:   S - S' = 0                    |
  +----+---------------------------------------------------------------+
```
