# Ellipse — Complete Formula Sheet

**Maths IIB · Chapter 4**

Everything in this chapter, in the order you will need it.
The right-hand column of every table tells you **when** to use the formula —
that is the part most students never learn.

Throughout this sheet, unless it says otherwise:

```
        x^2      y^2
        ---  +   ---  =  1          with      a  >  b  >  0
        a^2      b^2

        a = SEMI-MAJOR axis        b = SEMI-MINOR axis        0 < e < 1
```

---

# SECTION 1 — CONIC DEFINITION AND CLASSIFICATION

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
  |   FOR AN ELLIPSE :        0  <  e  <  1                                  |
  |                                                                          |
  +==========================================================================+
```

```
  +==========================================================================+
  |                                                                          |
  |   SECOND (FOCAL) DEFINITION OF AN ELLIPSE                                |
  |                                                                          |
  |            S P   +   S' P   =   2 a        (the major axis)              |
  |                                                                          |
  |   "the sum of the distances from the two foci is constant"               |
  |                                                                          |
  +==========================================================================+
```

| Eccentricity | Conic | Discriminant condition on `ax^2+2hxy+by^2+2gx+2fy+c=0` |
|---|---|---|
| e = 0 | circle | `a = b`, `h = 0` |
| **0 < e < 1** | **ELLIPSE** | **h^2 - ab < 0** |
| e = 1 | parabola | `h^2 - ab = 0` |
| e > 1 | hyperbola | `h^2 - ab > 0` |
| e > 1, `a + b = 0` | rectangular hyperbola | `h^2 - ab > 0` and `a + b = 0` |

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
  |   Delta =  0   ->  DEGENERATE (pair of lines / point / nothing)          |
  |   Delta != 0   ->  proper conic, then use h^2 - ab as above              |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `h^2 - ab < 0` and `Delta != 0` | "Show that the equation represents an ellipse" |
| `Delta = 0` | to rule OUT a degenerate case before naming the conic |
| `SP^2 = e^2 · PM^2` | to BUILD the equation from a focus, a directrix and e |
| `SP + S'P = 2a` | locus questions where two fixed points are given |

```
  +--------------------------------------------------------------------------+
  |  ELLIPSE FROM FOCUS (x0,y0), DIRECTRIX  l x + m y + n = 0, ECCENTRICITY e|
  |                                                                          |
  |                                       ( l x + m y + n )^2                |
  |    ( x - x0 )^2 + ( y - y0 )^2  =  e^2 --------------------              |
  |                                            l^2 + m^2                     |
  |                                                                          |
  |  Cross-multiply, expand both sides, collect everything on the left.      |
  |  For an ellipse you must have  e < 1.                                    |
  +--------------------------------------------------------------------------+
```

---

# SECTION 2 — THE STANDARD ELLIPSE, BOTH ORIENTATIONS

```
  +==========================================================================+
  |                                                                          |
  |     x^2     y^2                                                          |
  |     --- +   --- = 1       a > b  ->  MAJOR AXIS ALONG x  (wide, short)   |
  |     a^2     b^2                                                          |
  |                                                                          |
  |     x^2     y^2                                                          |
  |     --- +   --- = 1       a > b  ->  MAJOR AXIS ALONG y  (tall, narrow)  |
  |     b^2     a^2                                                          |
  |                                                                          |
  |     RULE: the axis of the variable sitting over the BIGGER denominator   |
  |           is the MAJOR AXIS.                                             |
  |                                                                          |
  +==========================================================================+
```

## 2.1 The master table

| Element | Major along **x** : `x^2/a^2 + y^2/b^2 = 1` | Major along **y** : `x^2/b^2 + y^2/a^2 = 1` |
|---|---|---|
| Centre | `(0, 0)` | `(0, 0)` |
| Vertices | `(a, 0)`, `(-a, 0)` | `(0, a)`, `(0, -a)` |
| Ends of minor axis | `(0, b)`, `(0, -b)` | `(b, 0)`, `(-b, 0)` |
| Major axis line / length | `y = 0` / `2a` | `x = 0` / `2a` |
| Minor axis line / length | `x = 0` / `2b` | `y = 0` / `2b` |
| Foci | `(ae, 0)`, `(-ae, 0)` | `(0, ae)`, `(0, -ae)` |
| Distance between foci | `2ae` | `2ae` |
| Directrices | `x = a/e`, `x = -a/e` | `y = a/e`, `y = -a/e` |
| Distance between directrices | `2a/e` | `2a/e` |
| Relation | `b^2 = a^2(1 - e^2)` | `b^2 = a^2(1 - e^2)` |
| Eccentricity | `e = sqrt(1 - b^2/a^2)` | `e = sqrt(1 - b^2/a^2)` |
| Latus rectum length | `2b^2/a` | `2b^2/a` |
| Latus rectum lines | `x = ae`, `x = -ae` | `y = ae`, `y = -ae` |
| Ends of latus rectum | `(±ae, ±b^2/a)` | `(±b^2/a, ±ae)` |
| Focal distances of `(x1,y1)` | `a - e·x1` and `a + e·x1` | `a - e·y1` and `a + e·y1` |
| Parametric point | `(a cos theta, b sin theta)` | `(b cos theta, a sin theta)` |
| Auxiliary circle | `x^2 + y^2 = a^2` | `x^2 + y^2 = a^2` |
| Director circle | `x^2 + y^2 = a^2 + b^2` | `x^2 + y^2 = a^2 + b^2` |
| Area | `pi·a·b` | `pi·a·b` |

## 2.2 The two sketches

```
   MAJOR AXIS ALONG x                          MAJOR AXIS ALONG y
                                                        y
             y                                          ^
             ^                                       (0,a)
          (0,b)                                      . -+- .
    . - - - -+- - - - .                           .'    |    `.
 . '        |         ' .                        .      |      .
.           |            .                      |    (0,ae)    |
+-----+-----C-----+------+---> x         (-b,0)-+------C-------+-(b,0) --> x
(-a,0) (-ae,0)  (ae,0) (a,0)                    |   (0,-ae)    |
.           |            .                       .      |      .
 ' .        |        . '                          `.    |    .'
    ' - - - +- - - '                                 ' -+- '
          (0,-b)                                     (0,-a)

 x = -a/e   |   x = a/e                        y =  a/e  (above)
                                               y = -a/e  (below)
```

| Formula | When to use |
|---|---|
| divide until RHS = 1 | ALWAYS the first line of any ellipse question |
| bigger denominator = `a^2` | decides EVERY later answer — do it first |
| `ae = sqrt(a^2 - b^2)` | fastest route to the foci |
| `e = sqrt(1 - b^2/a^2)` | when the question asks for e directly |
| `LR = 2b^2/a` | "length of the latus rectum" — 2-mark lookup |
| `2a/e` | "distance between the directrices" |
| `2ae` | "distance between the foci" |

---

# SECTION 3 — ECCENTRICITY RELATIONS (all the rearrangements)

```
  +==========================================================================+
  |                                                                          |
  |     b^2  =  a^2 ( 1 - e^2 )              <-- the master relation         |
  |                                                                          |
  |     a^2 e^2  =  a^2  -  b^2                                              |
  |                                                                          |
  |     a e  =  sqrt( a^2 - b^2 )            distance centre -> focus        |
  |                                                                          |
  |                     b^2                             b^2                  |
  |     e^2  =  1  -   -----      e  =  sqrt( 1  -     ----- )               |
  |                     a^2                             a^2                  |
  |                                                                          |
  |     b  =  a sqrt( 1 - e^2 )                                              |
  |                                                                          |
  |                      b                                                   |
  |     a  =  ------------------            (when b and e are given)         |
  |            sqrt( 1 - e^2 )                                               |
  |                                                                          |
  +==========================================================================+
```

| Given | Find `a` and `b` like this |
|---|---|
| `a` and `b` | `e = sqrt(1 - b^2/a^2)` |
| `a` and `e` | `b^2 = a^2(1 - e^2)` |
| `b` and `e` | `a = b / sqrt(1 - e^2)` |
| foci `(±c, 0)` and `a` | `c = ae`, so `e = c/a`, `b^2 = a^2 - c^2` |
| LR and `e` | `2b^2/a = LR` with `b^2 = a^2(1-e^2)` → `2a(1-e^2) = LR` |
| LR and distance between foci | `2b^2/a = LR`, `2ae = d`, and `b^2 = a^2 - (ae)^2` |
| directrix `x = k` and `a` | `a/e = k` → `e = a/k` |

```
  +--------------------------------------------------------------------------+
  |  A USEFUL SHORTCUT                                                       |
  |                                                                          |
  |          2 b^2                                                           |
  |    LR = ------- = 2 a ( 1 - e^2 )        because b^2 = a^2 ( 1 - e^2 )   |
  |            a                                                             |
  |                                                                          |
  |    Also, in terms of the FULL axes,                                      |
  |                                                                          |
  |          ( minor axis )^2      ( 2 b )^2      4 b^2      2 b^2           |
  |    LR = ------------------- = ----------- =  -------  =  -----   TICK    |
  |            major axis            2 a           2 a         a            |
  +--------------------------------------------------------------------------+
```

---

# SECTION 4 — FOCAL DISTANCES

```
  +==========================================================================+
  |                                                                          |
  |   For  P ( x1 , y1 )  on   x^2/a^2 + y^2/b^2 = 1   with a > b :          |
  |                                                                          |
  |         S P   =   a  -  e x1          ( S  = the focus ( ae, 0) )        |
  |         S' P  =   a  +  e x1          ( S' = the focus (-ae, 0) )        |
  |                                                                          |
  |         S P  +  S' P   =   2 a           ALWAYS                          |
  |                                                                          |
  |   For the tall ellipse, replace x1 by y1.                                |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `SP = a - e x1` | "find the focal distance of the point ..." |
| `SP + S'P = 2a` | any locus question, or "find the other focal distance" |
| `SP = a - e x1` at `x1 = a` | shortest focal distance `a - ae = a(1-e)` (at the near vertex) |
| `SP = a + e x1` at `x1 = a` | longest focal distance `a(1+e)` (from the far focus) |

```
  +--------------------------------------------------------------------------+
  |  MAXIMUM and MINIMUM focal distance                                      |
  |                                                                          |
  |     nearest a focus can be to the curve  =  a ( 1 - e )  =  a - ae       |
  |     farthest                             =  a ( 1 + e )  =  a + ae       |
  |     their sum = 2a  TICK ,  their product = a^2(1-e^2) = b^2             |
  +--------------------------------------------------------------------------+
```

---

# SECTION 5 — SHIFTED ELLIPSE, CENTRE `(h, k)`

```
  +==========================================================================+
  |                                                                          |
  |     ( x - h )^2      ( y - k )^2                                         |
  |     -----------  +   -----------  =  1                                   |
  |         a^2              b^2                                             |
  |                                                                          |
  |     If a > b (WIDE):                                                     |
  |         Centre        ( h , k )                                          |
  |         Vertices      ( h + a , k ) , ( h - a , k )                      |
  |         Ends of minor ( h , k + b ) , ( h , k - b )                      |
  |         Foci          ( h + a e , k ) , ( h - a e , k )                  |
  |         Directrices     x = h + a/e   and   x = h - a/e                  |
  |         Major axis      y = k   (length 2a)                              |
  |         Minor axis      x = h   (length 2b)                              |
  |         Latus rectum    2b^2/a  on the lines  x = h ± a e                |
  |                                                                          |
  |     If b > a (TALL): swap the roles of x and y in everything above,      |
  |     using the LARGER denominator as a^2 throughout.                      |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |  COMPLETING THE SQUARE — the recipe                                      |
  |                                                                          |
  |   A x^2 + B y^2 + D x + E y + F = 0        with A > 0, B > 0, A != B     |
  |                                                                          |
  |   1. A ( x^2 + (D/A) x )  +  B ( y^2 + (E/B) y )  =  -F                  |
  |   2. x^2 + p x  =  ( x + p/2 )^2 - ( p/2 )^2                             |
  |   3. move the leftover constants to the right                            |
  |   4. DIVIDE so the right-hand side is exactly 1                          |
  |   5. read h, k, a^2, b^2                                                 |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| complete the square | any equation with `x` and `y` terms as well as `x^2`, `y^2` |
| `h = -D/(2A)`, `k = -E/(2B)` | quick shortcut for the CENTRE only |
| shift back: add `h` to every x, `k` to every y | the last line of every shifted-ellipse answer |

---

# SECTION 6 — AUXILIARY CIRCLE AND PARAMETRIC FORM

```
  +==========================================================================+
  |                                                                          |
  |   AUXILIARY CIRCLE      x^2  +  y^2  =  a^2                              |
  |   (the circle drawn on the MAJOR AXIS as diameter)                       |
  |                                                                          |
  |   ECCENTRIC ANGLE theta of a point P on the ellipse:                     |
  |   drop/raise the ordinate of P to meet the auxiliary circle at Q ;       |
  |   theta is the angle that CQ makes with the positive x-axis.             |
  |                                                                          |
  |   PARAMETRIC POINT                                                       |
  |                                                                          |
  |         P ( theta )  =  ( a cos theta ,  b sin theta )                   |
  |                                                                          |
  |   (for the tall ellipse:  ( b cos theta , a sin theta ) )                |
  |                                                                          |
  +==========================================================================+
```

```
  +==========================================================================+
  |                                                                          |
  |   CHORD JOINING THE POINTS alpha AND beta                                |
  |                                                                          |
  |    x       alpha+beta       y       alpha+beta         alpha-beta        |
  |   --- cos( ---------- ) +  --- sin( ---------- )  = cos( -------- )      |
  |    a            2           b            2                  2           |
  |                                                                          |
  |   Letting beta -> alpha gives the TANGENT at alpha.                      |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |  POINT OF INTERSECTION OF THE TANGENTS AT alpha AND beta                 |
  |                                                                          |
  |      (   a cos( (alpha+beta)/2 )      b sin( (alpha+beta)/2 )   )        |
  |      (  ------------------------- ,  -------------------------  )        |
  |      (   cos( (alpha-beta)/2 )        cos( (alpha-beta)/2 )     )        |
  |                                                                          |
  |  FOCAL CHORD CONDITION (chord through S( ae , 0 ) )                      |
  |                                                                          |
  |          alpha        beta        e - 1                                  |
  |     tan( ----- ) tan( ---- )  =  -------      (negative, since e < 1)    |
  |            2           2          e + 1                                  |
  |                                                                          |
  |  For the other focus S'(-ae, 0) the right-hand side is (e+1)/(e-1).      |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `(a cos th, b sin th)` | any question mentioning "eccentric angle" or a parameter |
| chord formula | "chord joining the points with eccentric angles ..." |
| tangent-intersection point | "tangents at alpha and beta meet at ..." — locus questions |
| `tan(a/2)tan(b/2) = (e-1)/(e+1)` | "if the chord alpha-beta is a focal chord, show that ..." |
| auxiliary circle | "foot of the perpendicular from a focus to a tangent" |

---

# SECTION 7 — S, S11, T : THE THREE EXPRESSIONS

```
  +==========================================================================+
  |                                                                          |
  |             x^2     y^2                                                  |
  |     S   =   --- +   ---  -  1                                            |
  |             a^2     b^2                                                  |
  |                                                                          |
  |             x1^2    y1^2                                                 |
  |     S11 =   ---- +  ----  -  1              (put the POINT into S)       |
  |             a^2     b^2                                                  |
  |                                                                          |
  |             x x1    y y1                                                 |
  |     T   =   ---- +  ----  -  1              (half x, half x1)            |
  |             a^2     b^2                                                  |
  |                                                                          |
  +==========================================================================+
```

| Statement | Meaning |
|---|---|
| `S11 < 0` | the point is **INSIDE** the ellipse |
| `S11 = 0` | the point is **ON** the ellipse |
| `S11 > 0` | the point is **OUTSIDE** the ellipse |
| `T = 0` | tangent at a point ON / chord of contact from OUTSIDE / polar of ANY point |
| `T = S11` | chord whose **MIDPOINT** is `(x1, y1)` |
| `S · S11 = T^2` | the **PAIR** of tangents from `(x1, y1)` |

How T is built from S — mechanical, and the same for circle, parabola, ellipse, hyperbola:

| In S you see | In T write |
|---|---|
| `x^2` | `x·x1` |
| `y^2` | `y·y1` |
| `x` | `(x + x1)/2` |
| `y` | `(y + y1)/2` |
| constant | leave it alone |

---

# SECTION 8 — LINE AND ELLIPSE

```
  +==========================================================================+
  |                                                                          |
  |   Substituting y = m x + c into x^2/a^2 + y^2/b^2 = 1 gives              |
  |                                                                          |
  |   ( b^2 + a^2 m^2 ) x^2  +  2 a^2 m c x  +  a^2 ( c^2 - b^2 )  =  0      |
  |                                                                          |
  |   c^2  >  a^2 m^2 + b^2      line MISSES the ellipse   (0 points)        |
  |   c^2  =  a^2 m^2 + b^2      line TOUCHES it - TANGENT (1 point)         |
  |   c^2  <  a^2 m^2 + b^2      line CUTS it - SECANT     (2 points)        |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |  CONDITION FOR  l x + m y + n = 0  TO BE A TANGENT                       |
  |                                                                          |
  |            a^2 l^2  +  b^2 m^2   =   n^2                                 |
  |                                                                          |
  |  (rearrange lx+my+n=0 as y = -(l/m)x - n/m and substitute if you forget) |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `c^2 = a^2m^2 + b^2` | "find c so that the line touches", or "prove it is a tangent" |
| `a^2l^2 + b^2m^2 = n^2` | when the line is given as `lx + my + n = 0` |
| `c^2 < a^2m^2+b^2` | "show the line cuts the ellipse in two points" |
| length of the chord | solve the quadratic, then `sqrt(1+m^2)·|x1 - x2|` |

---

# SECTION 9 — TANGENTS

```
  +==========================================================================+
  |                                                                          |
  |  (1)  TANGENT AT ( x1 , y1 )  ON the ellipse         [ T = 0 ]           |
  |                                                                          |
  |             x x1       y y1                                              |
  |             ----   +   ----   =   1                                      |
  |             a^2        b^2                                               |
  |                                                                          |
  |  (2)  TANGENT AT THE PARAMETRIC POINT theta                              |
  |                                                                          |
  |             x cos theta       y sin theta                                |
  |             -----------  +    -----------  =  1                          |
  |                  a                 b                                     |
  |                                                                          |
  |  (3)  TANGENT WITH SLOPE m                                               |
  |                                                                          |
  |             y  =  m x  ±  sqrt( a^2 m^2 + b^2 )                          |
  |                                                                          |
  |             POINT OF CONTACT   ( - a^2 m / c ,  b^2 / c )                |
  |             where c is the value of the constant actually used           |
  |                                                                          |
  |  SLOPE OF THE TANGENT AT ( x1 , y1 )   =   -  b^2 x1 / ( a^2 y1 )        |
  |  SLOPE OF THE TANGENT AT theta         =   -  ( b cos th )/( a sin th )  |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `x·x1/a^2 + y·y1/b^2 = 1` | "tangent at the point (x1, y1)" — CHECK the point is on the curve first |
| `(x cos th)/a + (y sin th)/b = 1` | "tangent at the point whose eccentric angle is ..." |
| `y = mx ± sqrt(a^2m^2+b^2)` | "tangent(s) parallel/perpendicular to a given line" |
| `(-a^2m/c, b^2/c)` | "find the point of contact" |
| slope `= -b^2x1/(a^2y1)` | when you must show two tangents are parallel or perpendicular |

```
  +--------------------------------------------------------------------------+
  |  TANGENTS FROM AN EXTERNAL POINT ( x1 , y1 ) — the working method        |
  |                                                                          |
  |    1. Write  y - y1 = m ( x - x1 )  so  c = y1 - m x1                    |
  |    2. Impose  c^2 = a^2 m^2 + b^2                                        |
  |    3. Solve the resulting quadratic in m — TWO slopes                    |
  |    4. Put each m back into  y - y1 = m ( x - x1 )                        |
  |    5. Also check the vertical line x = x1 separately                     |
  +--------------------------------------------------------------------------+
```

---

# SECTION 10 — NORMALS

```
  +==========================================================================+
  |                                                                          |
  |  (1)  NORMAL AT ( x1 , y1 )                                              |
  |                                                                          |
  |             a^2 x       b^2 y                                            |
  |             -----   -   -----   =   a^2  -  b^2                          |
  |               x1          y1                                             |
  |                                                                          |
  |  (2)  NORMAL AT THE PARAMETRIC POINT theta                               |
  |                                                                          |
  |             a x sec theta  -  b y cosec theta  =  a^2 - b^2              |
  |                                                                          |
  |             i.e.    a x / cos th  -  b y / sin th  =  a^2 - b^2          |
  |                                                                          |
  |  (3)  NORMAL WITH SLOPE m                                                |
  |                                                                          |
  |                            m ( a^2  -  b^2 )                             |
  |             y  =  m x  ∓  --------------------                           |
  |                           sqrt( a^2 + b^2 m^2 )                          |
  |                                                                          |
  |  SLOPE OF THE NORMAL AT ( x1 , y1 )  =   + a^2 y1 / ( b^2 x1 )           |
  |  SLOPE OF THE NORMAL AT theta        =   ( a sin th ) / ( b cos th )     |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |  DO NOT MIX THESE UP                                                     |
  |                                                                          |
  |     TANGENT slope form :  y = m x ± sqrt( a^2 m^2 + b^2 )                |
  |                                        --------------                    |
  |                                        m sits with a                     |
  |                                                                          |
  |     NORMAL  slope form :  y = m x ∓ m(a^2-b^2) / sqrt( a^2 + b^2 m^2 )   |
  |                                                       --------------     |
  |                                                       m sits with b      |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `a^2x/x1 - b^2y/y1 = a^2 - b^2` | "normal at the point (x1, y1)" |
| `ax·sec th - by·cosec th = a^2 - b^2` | "normal at the point whose eccentric angle is ..." |
| normal slope form | "normal parallel to a given line" |
| `(tangent slope)(normal slope) = -1` | always check this before you write the final answer |

---

# SECTION 11 — CHORDS, POLE AND POLAR

```
  +==========================================================================+
  |                                                                          |
  |  CHORD OF CONTACT from an EXTERNAL point ( x1 , y1 ) :     T = 0         |
  |                                                                          |
  |             x x1     y y1                                                |
  |             ---- +   ----  =  1                                          |
  |             a^2      b^2                                                 |
  |                                                                          |
  |  CHORD WITH MIDPOINT ( x1 , y1 ) :                        T = S11        |
  |                                                                          |
  |             x x1     y y1        x1^2     y1^2                           |
  |             ---- +   ----   =    ----  +  ----                           |
  |             a^2      b^2         a^2      b^2                            |
  |                                                                          |
  |  PAIR OF TANGENTS from ( x1 , y1 ) :                   S * S11 = T^2     |
  |                                                                          |
  |  POLAR of ( x1 , y1 ) :                                   T = 0          |
  |                                                                          |
  |  POLE of the line  l x + m y + n = 0 :                                   |
  |                                                                          |
  |                (  - a^2 l / n  ,  - b^2 m / n  )                         |
  |                                                                          |
  +==========================================================================+
```

| Situation | Name of the line `T = 0` |
|---|---|
| point ON the ellipse | tangent |
| point OUTSIDE | chord of contact |
| point INSIDE | polar (does not meet the ellipse) |

```
  +--------------------------------------------------------------------------+
  |  CONJUGATE POINTS      P lies on the polar of Q  <=>  Q lies on the      |
  |                        polar of P.                                       |
  |                        Condition:  x1 x2 / a^2  +  y1 y2 / b^2  =  1     |
  |                                                                          |
  |  CONJUGATE LINES       each line contains the pole of the other.         |
  |                        For  l1x+m1y+n1=0 and l2x+m2y+n2=0 :              |
  |                        a^2 l1 l2  +  b^2 m1 m2  =  n1 n2                 |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `T = 0` | "chord of contact", "polar", "tangent at" — one formula, three names |
| `T = S11` | the words **midpoint** or **bisected at** appear |
| `S·S11 = T^2` | "combined equation of the pair of tangents" |
| pole `(-a^2l/n, -b^2m/n)` | "find the pole of the line ... " |
| `x1x2/a^2 + y1y2/b^2 = 1` | "show that these two points are conjugate" |

---

# SECTION 12 — DIRECTOR CIRCLE AND CONJUGATE DIAMETERS

```
  +==========================================================================+
  |                                                                          |
  |     DIRECTOR CIRCLE       x^2  +  y^2   =   a^2  +  b^2                  |
  |                                                                          |
  |     = the LOCUS of a point from which the two tangents drawn to the      |
  |       ellipse are PERPENDICULAR.                                         |
  |                                                                          |
  |     Centre ( 0 , 0 ) , radius sqrt( a^2 + b^2 ).                         |
  |     For a shifted ellipse: ( x - h )^2 + ( y - k )^2 = a^2 + b^2         |
  |                                                                          |
  +==========================================================================+
```

```
  +==========================================================================+
  |                                                                          |
  |     CONJUGATE DIAMETERS   y = m1 x   and   y = m2 x                      |
  |                                                                          |
  |                                b^2                                       |
  |                m1 * m2  =  -  -----                                      |
  |                                a^2                                       |
  |                                                                          |
  |     - eccentric angles of their ends differ by 90 degrees                |
  |            P = ( a cos th , b sin th )   D = ( -a sin th , b cos th )    |
  |                                                                          |
  |     - C P^2  +  C D^2  =  a^2 + b^2       (sum of squares is constant)   |
  |                                                                          |
  |     - area of the parallelogram formed by the tangents at the four ends  |
  |       of a pair of conjugate diameters  =  4 a b   (constant)            |
  |                                                                          |
  |     - EQUICONJUGATE diameters:  m1 = b/a , m2 = -b/a ,                   |
  |       each of length sqrt( 2 ( a^2 + b^2 ) )                             |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `x^2+y^2 = a^2+b^2` | "locus of the point of intersection of perpendicular tangents" |
| `m1m2 = -b^2/a^2` | "find the conjugate diameter of ..." |
| `CP^2 + CD^2 = a^2+b^2` | a 4-mark proof that appears regularly |
| parallelogram area `4ab` | a 7-mark proof, if conjugate diameters are in your syllabus |

---

# SECTION 13 — AREA AND SPECIAL PROPERTIES

```
  +==========================================================================+
  |                                                                          |
  |          AREA OF THE ELLIPSE   =   pi  *  a  *  b                        |
  |                                                                          |
  |          (check: a = b = r gives pi r^2 , the circle)                    |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |  1. Product of the perpendiculars from the two FOCI to any tangent = b^2 |
  |                                                                          |
  |  2. The foot of the perpendicular from a focus to any tangent lies on    |
  |     the AUXILIARY CIRCLE  x^2 + y^2 = a^2.                               |
  |                                                                          |
  |  3. REFLECTION: a ray from one focus reflects to the other focus.        |
  |     Equivalently, the NORMAL at P bisects the angle S P S'.              |
  |                                                                          |
  |  4. Sum of the focal distances S P + S' P = 2a — the defining property.  |
  |                                                                          |
  |  5. The tangent at P and the normal at P bisect the EXTERNAL and the     |
  |     INTERNAL angle of S P S' respectively.                              |
  +--------------------------------------------------------------------------+
```

---

# SECTION 14 — BUILDING AN ELLIPSE FROM GIVEN DATA

| Given | Equation to write down |
|---|---|
| vertices `(±a, 0)`, foci `(±ae, 0)` | `e = (ae)/a`, then `b^2 = a^2 - (ae)^2` |
| major axis `2a`, minor axis `2b` | straight into `x^2/a^2 + y^2/b^2 = 1` |
| focus, directrix, `e` | `SP^2 = e^2 PM^2` — expand fully |
| two foci and the sum `2a` | `b^2 = a^2 - (ae)^2`, centre = midpoint of the foci |
| `e` and one point | `b^2 = a^2(1-e^2)`, then substitute the point |
| two points | `x^2/A + y^2/B = 1`, solve two linear equations in `1/A`, `1/B` |
| latus rectum and `e` | `2a(1-e^2) = LR` |
| latus rectum and distance between foci | `2b^2/a = LR`, `2ae = d`, `b^2 = a^2 - (ae)^2` |
| ends of the major and minor axes | read `a` and `b` straight off |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +==========================================================================+
  |                                                                          |
  |   1.   x^2/a^2  +  y^2/b^2  =  1            ( a > b )                    |
  |                                                                          |
  |   2.   b^2  =  a^2 ( 1 - e^2 )       and     a e = sqrt( a^2 - b^2 )     |
  |                                                                          |
  |   3.   Foci ( ± a e , 0 )     Directrices  x = ± a / e                   |
  |                                                                          |
  |   4.   LATUS RECTUM  =  2 b^2 / a                                        |
  |                                                                          |
  |   5.   S P = a - e x1 ,  S' P = a + e x1 ,  SUM = 2 a                    |
  |                                                                          |
  |   6.   Parametric point   ( a cos theta , b sin theta )                  |
  |                                                                          |
  |   7.   TANGENT at (x1,y1)   x x1/a^2  +  y y1/b^2  =  1                  |
  |                                                                          |
  |   8.   TANGENT at theta     (x cos th)/a  +  (y sin th)/b  =  1          |
  |                                                                          |
  |   9.   TANGENT condition    c^2 = a^2 m^2 + b^2                          |
  |        contact point        ( -a^2 m / c , b^2 / c )                     |
  |                                                                          |
  |  10.   NORMAL at (x1,y1)    a^2 x/x1  -  b^2 y/y1  =  a^2 - b^2          |
  |        NORMAL at theta      a x sec th - b y cosec th = a^2 - b^2        |
  |                                                                          |
  |  11.   T = 0 (tangent / chord of contact / polar)                        |
  |        T = S11 (midpoint chord)                                          |
  |        S S11 = T^2 (pair of tangents)                                    |
  |                                                                          |
  |  12.   DIRECTOR CIRCLE  x^2 + y^2 = a^2 + b^2      AREA = pi a b         |
  |                                                                          |
  +==========================================================================+
```

If you can write those twelve lines from memory, you can attempt every ellipse
question that has ever appeared in this paper.
