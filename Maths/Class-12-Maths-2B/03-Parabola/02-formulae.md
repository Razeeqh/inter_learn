# Parabola — Complete Formula Sheet

**Maths IIB · Chapter 3**

Everything in this chapter, in the order you will need it.
The right-hand column of every table tells you **when** to use the formula —
that is the part most students never learn.

---

# SECTION 1 — CONIC SECTIONS AND CLASSIFICATION

```
  +==========================================================================+
  |                                                                          |
  |   DEFINITION OF A CONIC                                                  |
  |                                                                          |
  |          S P                                                             |
  |        --------  =  e         i.e.    S P  =  e * P M                    |
  |          P M                                                             |
  |                                                                          |
  |   S = FOCUS (a fixed point)                                              |
  |   directrix = a fixed line not through S                                 |
  |   PM = perpendicular distance from P to the directrix                    |
  |   e  = ECCENTRICITY                                                      |
  |                                                                          |
  +==========================================================================+
```

| Eccentricity | Conic | Discriminant condition |
|---|---|---|
| e = 0 | circle | a = b, h = 0 |
| 0 < e < 1 | ellipse | h^2 - ab < 0 |
| **e = 1** | **PARABOLA** | **h^2 - ab = 0** |
| e > 1 | hyperbola | h^2 - ab > 0 |
| e > 1 with a + b = 0 | rectangular hyperbola | h^2 - ab > 0 and a + b = 0 |

```
  +--------------------------------------------------------------------------+
  |  GENERAL SECOND DEGREE EQUATION                                          |
  |                                                                          |
  |    S = a x^2 + 2h x y + b y^2 + 2g x + 2f y + c = 0                      |
  |                                                                          |
  |            | a  h  g |                                                   |
  |   Delta =  | h  b  f |  =  abc + 2fgh - af^2 - bg^2 - ch^2               |
  |            | g  f  c |                                                   |
  |                                                                          |
  |   Delta =  0   ->  DEGENERATE (pair of lines / line / point)             |
  |   Delta != 0   ->  proper conic, then use h^2 - ab as above              |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `h^2 - ab = 0` and `Delta != 0` | "Show that the equation represents a parabola" |
| `Delta = 0` | to rule OUT a degenerate case before naming the conic |
| `SP = e·PM` written as `SP^2 = e^2·PM^2` | to build the equation of any conic from a focus, a directrix and e |

```
  +--------------------------------------------------------------------------+
  |  CONIC FROM FOCUS (x0, y0), DIRECTRIX  l x + m y + n = 0,  ECCENTRICITY e|
  |                                                                          |
  |                                       ( l x + m y + n )^2                |
  |    ( x - x0 )^2 + ( y - y0 )^2  =  e^2 --------------------              |
  |                                            l^2 + m^2                     |
  |                                                                          |
  |  For a PARABOLA put e = 1.                                               |
  +--------------------------------------------------------------------------+
```

---

# SECTION 2 — THE FOUR STANDARD FORMS

```
  +==========================================================================+
  |                                                                          |
  |         y^2 = 4 a x           opens RIGHT      (a > 0 always)            |
  |         y^2 = -4 a x          opens LEFT                                 |
  |         x^2 = 4 a y           opens UP                                   |
  |         x^2 = -4 a y          opens DOWN                                 |
  |                                                                          |
  |   y is squared -> HORIZONTAL axis    x is squared -> VERTICAL axis       |
  |   sign +  -> towards +x or +y        sign -  -> towards -x or -y         |
  |                                                                          |
  +==========================================================================+
```

## 2.1 The master table

| Element | y^2 = 4ax | y^2 = -4ax | x^2 = 4ay | x^2 = -4ay |
|---|---|---|---|---|
| Vertex | (0, 0) | (0, 0) | (0, 0) | (0, 0) |
| Focus | (a, 0) | (-a, 0) | (0, a) | (0, -a) |
| Directrix | x = -a | x = a | y = -a | y = a |
| Axis | y = 0 | y = 0 | x = 0 | x = 0 |
| Tangent at vertex | x = 0 | x = 0 | y = 0 | y = 0 |
| Latus rectum (length) | 4a | 4a | 4a | 4a |
| Latus rectum (line) | x = a | x = -a | y = a | y = -a |
| Ends of latus rectum | (a, 2a), (a, -2a) | (-a, 2a), (-a, -2a) | (2a, a), (-2a, a) | (2a, -a), (-2a, -a) |
| Focal distance of (x1,y1) | x1 + a | a - x1 | y1 + a | a - y1 |
| Parametric point | (a t^2, 2at) | (-a t^2, 2at) | (2at, a t^2) | (2at, -a t^2) |
| Opens | right | left | up | down |

| Formula | When to use |
|---|---|
| `4a = coefficient`, so `a = coeff/4` | ALWAYS the first line of any parabola question |
| Focus `(a, 0)` etc. | "Find the focus" — 2 marks, straight lookup |
| Directrix `x = -a` etc. | must be written as an EQUATION, never as a point |
| LR = 4a | "Find the length of the latus rectum" — pure lookup |
| Ends of LR | "Find the ends of the latus rectum" — put x = a into the equation |

---

# SECTION 3 — SHIFTED PARABOLA (vertex at (h, k))

```
  +==========================================================================+
  |    ( y - k )^2  =   4a ( x - h )        opens RIGHT                      |
  |    ( y - k )^2  =  -4a ( x - h )        opens LEFT                       |
  |    ( x - h )^2  =   4a ( y - k )        opens UP                         |
  |    ( x - h )^2  =  -4a ( y - k )        opens DOWN                       |
  +==========================================================================+
```

| Element | (y-k)^2 = 4a(x-h) | (y-k)^2 = -4a(x-h) | (x-h)^2 = 4a(y-k) | (x-h)^2 = -4a(y-k) |
|---|---|---|---|---|
| Vertex | (h, k) | (h, k) | (h, k) | (h, k) |
| Focus | (h+a, k) | (h-a, k) | (h, k+a) | (h, k-a) |
| Directrix | x = h - a | x = h + a | y = k - a | y = k + a |
| Axis | y = k | y = k | x = h | x = h |
| Latus rectum | 4a | 4a | 4a | 4a |

```
  +--------------------------------------------------------------------------+
  |  REDUCING A GENERAL EQUATION — COMPLETING THE SQUARE                     |
  |                                                                          |
  |   1. All terms of the SQUARED variable on the left, rest on the right.   |
  |   2. Make the coefficient of that square equal to 1.                     |
  |   3.        y^2 + p y   ->   ( y + p/2 )^2  -  (p/2)^2                   |
  |   4. Factor the right side as  4a ( x - h )  or  -4a ( x - h ).          |
  |   5. Read h, k, 4a and use the table above.                              |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| complete the square | any equation with BOTH `y^2` and `y`, or `x^2` and `x` |
| `(y-k)^2 = 4a(x-h)` table | after completing the square, to write all five elements |
| vertex = midpoint of focus and foot of directrix | when only focus + directrix are given |
| `a = distance from vertex to focus` | when vertex + focus are given |

---

# SECTION 4 — PARTS OF A PARABOLA

```
  +--------------------------------------------------------------------------+
  |  Focal distance of P(x1,y1) on y^2 = 4ax    SP = x1 + a                  |
  |                                                                          |
  |  Latus rectum length                        = 4a                         |
  |  Semi-latus rectum                          = 2a                         |
  |                                                                          |
  |  Double ordinate at x = k on y^2 = 4ax      length = 4 sqrt( a k )       |
  |  (the latus rectum is the double ordinate at k = a)                      |
  |                                                                          |
  |  Distance from focus to directrix           = 2a                         |
  |  Distance from vertex to focus              = a                          |
  |  Distance from vertex to directrix          = a                          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `SP = x1 + a` | "focal distance", "find the point whose focal distance is ..." |
| length of double ordinate `4 sqrt(ak)` | "find the length of the chord perpendicular to the axis at x = k" |
| `1/SP + 1/SQ = 1/a` | when a focal chord is split into two pieces (harmonic-mean result) |
| `2a = 2·SP·SQ/(SP+SQ)` | same result stated as "semi-LR is the HM of the focal segments" |

---

# SECTION 5 — PARAMETRIC FORM

```
  +==========================================================================+
  |    Point  " t "  on  y^2 = 4ax  :        ( a t^2 ,  2 a t )              |
  |                                                                          |
  |    Recover the parameter of a known point:      t = y1 / ( 2 a )         |
  |                                                                          |
  |    CHORD joining t1 and t2:                                              |
  |                                                                          |
  |            ( t1 + t2 ) y  =  2 x  +  2 a t1 t2                           |
  |                                                                          |
  |                                          2                               |
  |            slope of that chord  =  -------------                         |
  |                                       t1 + t2                            |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `(a t^2, 2at)` | whenever the question says "the point t" or you want to avoid surds |
| `t = y1/(2a)` | to convert a given point into a parameter before using t-formulas |
| `(t1+t2) y = 2x + 2a t1t2` | "find the chord joining ...", and to derive the focal-chord condition |
| slope `= 2/(t1+t2)` | when the chord's slope or direction is given |

---

# SECTION 6 — POSITION OF A POINT

```
  +--------------------------------------------------------------------------+
  |     S  =  y^2 - 4 a x                                                    |
  |     S1 =  y1^2 - 4 a x1        (substitute the point into S)             |
  |                                                                          |
  |     S1 < 0   ->   INSIDE   (same side as the focus)                      |
  |     S1 = 0   ->   ON the parabola                                        |
  |     S1 > 0   ->   OUTSIDE                                                |
  |                                                                          |
  |  Self-check: the focus (a,0) gives S1 = -4a^2 < 0, and the focus is      |
  |  obviously inside. So NEGATIVE = INSIDE.                                 |
  +--------------------------------------------------------------------------+
```

| Result | When to use |
|---|---|
| `S1 > 0` | before writing a pair of tangents or a chord of contact |
| `S1 < 0` | before writing a chord with a given midpoint |
| `S1 = 0` | to verify a point lies on the curve — do this as a check every time |

---

# SECTION 7 — THE THREE MASTER EXPRESSIONS

```
  +==========================================================================+
  |    For the parabola  y^2 = 4 a x  and the point  ( x1 , y1 ) :          |
  |                                                                          |
  |     S   =  y^2  -  4 a x                                                 |
  |     S1  =  y1^2 -  4 a x1                                                |
  |     T   =  y y1 -  2 a ( x + x1 )                                        |
  |                                                                          |
  |     T  = 0     ->  tangent at (x1,y1)  /  chord of contact from (x1,y1)  |
  |     T  = S1    ->  chord whose MIDPOINT is (x1,y1)                       |
  |     S S1 = T^2 ->  PAIR OF TANGENTS from (x1,y1)                         |
  +==========================================================================+
```

How T is manufactured from S (mechanical rule, works for every conic):

| In S | becomes in T |
|---|---|
| y^2 | y·y1 |
| x^2 | x·x1 |
| x | (x + x1)/2 |
| y | (y + y1)/2 |
| xy | (x·y1 + x1·y)/2 |
| constant | unchanged |

---

# SECTION 8 — TANGENTS

```
  +==========================================================================+
  |                                                                          |
  |  AT A POINT (x1, y1)  :       y y1  =  2 a ( x + x1 )       [ T = 0 ]    |
  |                                                                          |
  |  AT THE PARAMETER t   :       t y   =  x  +  a t^2          slope = 1/t  |
  |                                                                          |
  |  SLOPE FORM           :       y  =  m x  +  a / m           (m != 0)     |
  |                                                                          |
  |  CONDITION for y = mx + c to touch y^2 = 4ax :      c  =  a / m         |
  |                                                                          |
  |  POINT OF CONTACT of y = mx + a/m  :        ( a / m^2 ,  2 a / m )      |
  |                                                                          |
  |  CONDITION for l x + m y + n = 0 to touch y^2 = 4ax :   l n  =  a m^2   |
  |                                                                          |
  |  TANGENTS AT t1 AND t2 MEET AT  :   ( a t1 t2 ,  a ( t1 + t2 ) )        |
  |                                                                          |
  +==========================================================================+
```

Slope of the tangent at `(x1, y1)`:  `dy/dx = 2a / y1`.

| Formula | When to use |
|---|---|
| `y y1 = 2a(x + x1)` | "find the tangent at the point (…, …)" |
| `t y = x + a t^2` | "find the tangent at t", or any t-based proof |
| `y = mx + a/m` | "tangent parallel / perpendicular to a given line", "tangent of slope m" |
| `c = a/m` | "show that the line touches the parabola" / "find c so that it touches" |
| `ln = am^2` | when the line is given as `lx + my + n = 0` and you must not rearrange |
| `(a/m^2, 2a/m)` | "find the point of contact" |
| `(a t1t2, a(t1+t2))` | "where do the tangents at t1 and t2 meet?" and all locus questions |

## Tangent condition for the other three forms

| Parabola | Tangent of slope m | Condition |
|---|---|---|
| y^2 = 4ax | y = mx + a/m | c = a/m |
| y^2 = -4ax | y = mx - a/m | c = -a/m |
| x^2 = 4ay | y = mx - a m^2 | c = -a m^2 |
| x^2 = -4ay | y = mx + a m^2 | c = a m^2 |

---

# SECTION 9 — NORMALS

```
  +==========================================================================+
  |                                                                          |
  |  AT A POINT (x1, y1) :     y - y1  =  - ( y1 / 2a ) ( x - x1 )          |
  |                            slope of the normal = - y1 / ( 2 a )         |
  |                                                                          |
  |  AT THE PARAMETER t  :     y  +  t x  =  2 a t  +  a t^3                |
  |                            slope = - t                                   |
  |                                                                          |
  |  SLOPE FORM          :     y  =  m x  -  2 a m  -  a m^3                |
  |                                                                          |
  |  FOOT of that normal :     ( a m^2 ,  -2 a m )        [ m = -t ]        |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |  NORMAL AT t1 MEETS THE PARABOLA AGAIN AT t2 :                           |
  |                                                                          |
  |                                2                                         |
  |               t2  =  - t1  -  ----                                       |
  |                                t1                                        |
  |                                                                          |
  |  LENGTH of that normal chord :                                           |
  |                                    ( 1 + t1^2 ) ^ (3/2)                  |
  |            P Q  =  4 a  *  ---------------------------------             |
  |                                          t1^2                            |
  |                                                                          |
  |            ( equivalently  PQ^2 = 16 a^2 ( 1 + t1^2 )^3 / t1^4 )         |
  |                                                                          |
  |  A normal chord subtends a RIGHT ANGLE AT THE VERTEX when t1^2 = 2.      |
  |  The normal chord at t1 = 2 (the point where y = x) subtends a           |
  |  RIGHT ANGLE AT THE FOCUS, meeting the curve again at t2 = -3.           |
  +--------------------------------------------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  NORMALS FROM AN EXTERNAL POINT ( h , k )                                |
  |                                                                          |
  |   In slopes:       a m^3  +  ( 2a - h ) m  +  k  =  0                    |
  |   In parameters:   a t^3  +  ( 2a - h ) t  -  k  =  0                    |
  |                                                                          |
  |   Three normals in general. Sum/product of roots:                        |
  |                                                                          |
  |      m1 + m2 + m3        =  0            t1 + t2 + t3        =  0        |
  |      sum of products     =  (2a - h)/a   sum of products     =  (2a-h)/a |
  |      m1 m2 m3            =  - k / a      t1 t2 t3            =  k / a    |
  |                                                                          |
  |   THREE REAL DISTINCT normals require  h > 2 a.                          |
  |   TWO of them coincide when   27 a k^2  =  4 ( h - 2a )^3.               |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `y - y1 = -(y1/2a)(x - x1)` | "find the normal at the point (…, …)" |
| `y + tx = 2at + at^3` | "normal at t", and every normal-chord proof |
| `y = mx - 2am - am^3` | "normal parallel / perpendicular to a given line" |
| `(a m^2, -2am)` | "find the foot of the normal" |
| `t2 = -t1 - 2/t1` | "the normal at P meets the curve again at Q — find Q" |
| `am^3 + (2a-h)m + k = 0` | "how many normals can be drawn from …", "find the normals from …" |
| `m1 + m2 + m3 = 0` | any EAPCET question about three concurrent normals |

---

# SECTION 10 — CHORDS

```
  +==========================================================================+
  |                                                                          |
  |  CHORD OF CONTACT from (x1, y1)  :     y y1  =  2 a ( x + x1 )          |
  |                                        (i.e.  T = 0 )                    |
  |                                                                          |
  |  CHORD WITH MIDPOINT (x1, y1)    :     T  =  S1                         |
  |                                                                          |
  |          y y1 - 2 a ( x + x1 )  =  y1^2 - 4 a x1                        |
  |                                                                          |
  |          slope of that chord  =  2 a / y1                                |
  |                                                                          |
  |  PAIR OF TANGENTS from (x1, y1)  :     S  S1  =  T^2                    |
  |                                                                          |
  |  CHORD joining t1 and t2         :   (t1+t2) y = 2x + 2 a t1 t2         |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `T = 0` | "chord of contact", "the tangents from P touch at A and B — find AB" |
| `T = S1` | "find the chord whose midpoint is (…)", "find the locus of midpoints of ..." |
| `S S1 = T^2` | "find the pair of tangents from (…)" |
| slope `= 2a/y1` | "find the chord of slope m with a given midpoint" (rearrange for y1) |

---

# SECTION 11 — FOCAL CHORDS

```
  +==========================================================================+
  |                                                                          |
  |  CONDITION :          t1  t2  =  -1                                      |
  |                       (if one end is t, the other is -1/t)               |
  |                                                                          |
  |                                     1  2                                 |
  |  LENGTH    :    PQ  =  a  ( t  +  --- )    =   4 a cosec^2 ( theta )    |
  |                                     t                                    |
  |                                                                          |
  |         theta = angle the focal chord makes with the axis                |
  |                                                                          |
  |  MINIMUM focal chord = 4 a = the LATUS RECTUM (at t = 1, theta = 90)     |
  |                                                                          |
  |  SP = a ( 1 + t^2 )       SQ = a ( 1 + 1/t^2 )                          |
  |                                                                          |
  |         1       1        1                                               |
  |       ----  +  ----  =  ---           (semi-LR = HM of the segments)    |
  |         SP      SQ       a                                               |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `t1 t2 = -1` | any question containing the words "focal chord" |
| `a(t + 1/t)^2` | "find the length of the focal chord through the point ..." |
| `4a cosec^2 theta` | "focal chord making an angle theta with the axis" |
| minimum `= 4a` | "find the shortest focal chord" — it is the latus rectum |
| `1/SP + 1/SQ = 1/a` | "prove the semi-latus rectum is the harmonic mean of ..." |

---

# SECTION 12 — STANDARD PROPERTIES TO QUOTE

```
  +--------------------------------------------------------------------------+
  |  1.  Tangents at the ends of a focal chord meet AT RIGHT ANGLES          |
  |      ON THE DIRECTRIX.                                                   |
  |                                                                          |
  |  2.  The locus of the point of intersection of PERPENDICULAR tangents    |
  |      is the DIRECTRIX  (the parabola's "director circle").               |
  |                                                                          |
  |  3.  The foot of the perpendicular from the FOCUS to any tangent lies    |
  |      on the TANGENT AT THE VERTEX ( x = 0 ).                             |
  |                                                                          |
  |  4.  The circle on a FOCAL CHORD as diameter TOUCHES THE DIRECTRIX.      |
  |                                                                          |
  |  5.  The circle on a FOCAL RADIUS as diameter touches x = 0.             |
  |                                                                          |
  |  6.  A chord joining t1, t2 subtends a RIGHT ANGLE AT THE VERTEX         |
  |      <=> t1 t2 = -4, and every such chord passes through ( 4a , 0 ).     |
  |                                                                          |
  |  7.  Area of the triangle formed by the TANGENTS at t1, t2, t3           |
  |          =  ( a^2 / 2 ) | ( t1 - t2 )( t2 - t3 )( t3 - t1 ) |            |
  |                                                                          |
  |      Equivalently, for contact points (x1,y1),(x2,y2),(x3,y3):           |
  |                                                                          |
  |          =  ( 1 / 16a ) | ( y1 - y2 )( y2 - y3 )( y3 - y1 ) |            |
  |                                                                          |
  |  8.  Area of the triangle inscribed with vertices t1, t2, t3             |
  |          =  a^2 | ( t1 - t2 )( t2 - t3 )( t3 - t1 ) |                    |
  |      (so INSCRIBED area = 2 x TANGENT-triangle area)                     |
  |                                                                          |
  |  9.  If tangents from P make angles th1, th2 with the axis and           |
  |      tan(th1) + tan(th2) = b (constant), then P lies on  y = b x.        |
  |                                                                          |
  | 10.  Common tangent to  x^2 + y^2 = 2a^2  and  y^2 = 8 a x :             |
  |          y  =  ± ( x + 2 a )                                             |
  +--------------------------------------------------------------------------+
```

---

# SECTION 13 — REFLECTION PROPERTY

```
  +--------------------------------------------------------------------------+
  |  A ray PARALLEL TO THE AXIS is reflected THROUGH THE FOCUS.              |
  |  A ray FROM THE FOCUS is reflected PARALLEL TO THE AXIS.                 |
  |                                                                          |
  |  Reason: for the tangent at t, its x-intercept T = (-a t^2, 0) gives    |
  |          ST = a(1 + t^2) = SP , so triangle STP is isosceles and the     |
  |          tangent makes equal angles with SP and with the axis direction. |
  |                                                                          |
  |  USES: headlights, torches, dish antennas, radio telescopes,             |
  |        solar cookers, reflecting telescopes, parabolic microphones.      |
  +--------------------------------------------------------------------------+
```

---

# SECTION 14 — QUICK NUMERICAL LOOKUP (save time in the exam)

| Equation | a | Focus | Directrix | LR |
|---|---|---|---|---|
| y^2 = 4x | 1 | (1, 0) | x = -1 | 4 |
| y^2 = 8x | 2 | (2, 0) | x = -2 | 8 |
| y^2 = 12x | 3 | (3, 0) | x = -3 | 12 |
| y^2 = 16x | 4 | (4, 0) | x = -4 | 16 |
| y^2 = 24x | 6 | (6, 0) | x = -6 | 24 |
| y^2 = -8x | 2 | (-2, 0) | x = 2 | 8 |
| x^2 = 4y | 1 | (0, 1) | y = -1 | 4 |
| x^2 = 6y | 3/2 | (0, 3/2) | y = -3/2 | 6 |
| x^2 = -12y | 3 | (0, -3) | y = 3 | 12 |
| 3y^2 = 5x → y^2 = (5/3)x | 5/12 | (5/12, 0) | x = -5/12 | 5/3 |
| 2y^2 = 3x → y^2 = (3/2)x | 3/8 | (3/8, 0) | x = -3/8 | 3/2 |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +==========================================================================+
  |                                                                          |
  |   1.   y^2 = 4 a x   ->   Vertex (0,0)  Focus (a,0)                     |
  |                           Directrix x = -a   Axis y = 0   LR = 4a       |
  |                                                                          |
  |   2.   Point on it     :   ( a t^2 , 2 a t )        t = y1 / 2a         |
  |                                                                          |
  |   3.   Focal distance  :   S P  =  x1 + a                               |
  |                                                                          |
  |   4.   Shifted form    :   ( y - k )^2 = 4a ( x - h ) ,  vertex (h,k)   |
  |                            focus (h+a, k) ,  directrix x = h - a        |
  |                                                                          |
  |   5.   Chord t1 t2     :   ( t1 + t2 ) y = 2 x + 2 a t1 t2              |
  |                                                                          |
  |   6.   FOCAL chord     :   t1 t2 = -1 ,  length = a ( t + 1/t )^2       |
  |                                                                          |
  |   7.   Tangent at t    :   t y = x + a t^2                              |
  |                                                                          |
  |   8.   Tangent slope   :   y = m x + a/m   ,  contact ( a/m^2 , 2a/m )  |
  |                            TANGENCY CONDITION   c = a / m               |
  |                                                                          |
  |   9.   Normal at t     :   y + t x = 2 a t + a t^3                      |
  |                                                                          |
  |  10.   Normal slope    :   y = m x - 2 a m - a m^3                      |
  |                            foot ( a m^2 , -2 a m )                      |
  |                                                                          |
  |  11.   T = y y1 - 2a(x + x1)  ,  S1 = y1^2 - 4a x1                      |
  |            T = 0    chord of contact / tangent                          |
  |            T = S1   chord with midpoint (x1,y1)                         |
  |            S S1 = T^2   pair of tangents                                |
  |                                                                          |
  |  12.   Normal at t1 meets again at   t2 = - t1 - 2 / t1                 |
  |        Three normals from (h,k):  a t^3 + (2a - h) t - k = 0            |
  |        ->   t1 + t2 + t3 = 0                                            |
  |                                                                          |
  +==========================================================================+
```

If you can write those twelve boxes from memory, you can attempt every parabola
question that BIEAP, EAPCET or JEE Main has ever set on this chapter.
