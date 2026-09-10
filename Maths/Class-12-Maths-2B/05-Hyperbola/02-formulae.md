# Hyperbola — Complete Formula Sheet

**Maths IIB · Chapter 5**

Everything in this chapter, in the order you will need it.
The right-hand column of every table tells you **when** to use the formula —
that is the part most students never learn.

Throughout this sheet, unless it says otherwise:

```
        x^2      y^2
        ---  -   ---  =  1               with       e  >  1
        a^2      b^2

        a = SEMI-TRANSVERSE axis      b = SEMI-CONJUGATE axis
        THERE IS NO RULE THAT a > b .  Either can be bigger.
```

**The one-line rule that generates this entire sheet from the Ellipse sheet:**

```
  +==========================================================================+
  |            TAKE ANY ELLIPSE FORMULA AND REPLACE   b^2   BY   -b^2 .      |
  +==========================================================================+
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
  |   FOR A HYPERBOLA :        e  >  1                                       |
  |                                                                          |
  +==========================================================================+
```

```
  +==========================================================================+
  |                                                                          |
  |   SECOND (FOCAL) DEFINITION OF A HYPERBOLA                               |
  |                                                                          |
  |               |   S' P   -   S P   |   =   2 a                           |
  |                                                                          |
  |   "the DIFFERENCE of the distances from the two foci is constant"        |
  |                                                                          |
  |   ( an ELLIPSE uses the SUM ;  a HYPERBOLA uses the DIFFERENCE )         |
  |                                                                          |
  +==========================================================================+
```

| Eccentricity | Conic | Discriminant condition on `ax^2+2hxy+by^2+2gx+2fy+c=0` |
|---|---|---|
| e = 0 | circle | `a = b`, `h = 0` |
| 0 < e < 1 | ellipse | `h^2 - ab < 0` |
| e = 1 | parabola | `h^2 - ab = 0` |
| **e > 1** | **HYPERBOLA** | **h^2 - ab > 0** |
| **e = sqrt 2** | **rectangular hyperbola** | `h^2 - ab > 0` **and** `a + b = 0` |

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
| `h^2 - ab > 0` and `Delta != 0` | "Show that the equation represents a hyperbola" |
| `a + b = 0` as well | "…represents a RECTANGULAR hyperbola" |
| `Delta = 0` | to rule OUT a degenerate pair of lines before naming the conic |
| `SP^2 = e^2 · PM^2` | to BUILD the equation from a focus, a directrix and e |
| `\|S'P - SP\| = 2a` | locus questions where two fixed points are given |

```
  +--------------------------------------------------------------------------+
  |  HYPERBOLA FROM FOCUS (x0,y0), DIRECTRIX l x + m y + n = 0, ECCENTRICITY e|
  |                                                                          |
  |                                       ( l x + m y + n )^2                |
  |    ( x - x0 )^2 + ( y - y0 )^2  =  e^2 --------------------              |
  |                                            l^2 + m^2                     |
  |                                                                          |
  |  Cross-multiply, expand both sides, collect everything on one side.      |
  |  For a hyperbola you must have  e > 1 .                                  |
  +--------------------------------------------------------------------------+
```

---

# SECTION 2 — THE STANDARD HYPERBOLA, BOTH ORIENTATIONS

```
  +==========================================================================+
  |                                                                          |
  |     x^2     y^2                                                          |
  |     --- -   --- = 1       TRANSVERSE AXIS ALONG x                        |
  |     a^2     b^2           (branches open LEFT and RIGHT)                 |
  |                                                                          |
  |     y^2     x^2                                                          |
  |     --- -   --- = 1       TRANSVERSE AXIS ALONG y                        |
  |     a^2     b^2           (branches open UP and DOWN)                    |
  |                                                                          |
  |     RULE: the TRANSVERSE axis is the axis of the variable carrying       |
  |           the PLUS sign.  SIZE OF THE DENOMINATOR IS IRRELEVANT.         |
  |                                                                          |
  +==========================================================================+
```

## 2.1 The master table

| Element | Transverse along **x** : `x^2/a^2 - y^2/b^2 = 1` | Transverse along **y** : `y^2/a^2 - x^2/b^2 = 1` |
|---|---|---|
| Centre | `(0, 0)` | `(0, 0)` |
| Vertices | `(a, 0)`, `(-a, 0)` | `(0, a)`, `(0, -a)` |
| Ends of conjugate axis | `(0, b)`, `(0, -b)` | `(b, 0)`, `(-b, 0)` |
| Transverse axis line / length | `y = 0` / `2a` | `x = 0` / `2a` |
| Conjugate axis line / length | `x = 0` / `2b` | `y = 0` / `2b` |
| Foci | `(ae, 0)`, `(-ae, 0)` | `(0, ae)`, `(0, -ae)` |
| Distance between foci | `2ae` | `2ae` |
| Directrices | `x = a/e`, `x = -a/e` | `y = a/e`, `y = -a/e` |
| Distance between directrices | `2a/e` | `2a/e` |
| Relation | `b^2 = a^2(e^2 - 1)` | `b^2 = a^2(e^2 - 1)` |
| `ae` | `sqrt(a^2 + b^2)` | `sqrt(a^2 + b^2)` |
| Eccentricity | `e = sqrt(1 + b^2/a^2)` | `e = sqrt(1 + b^2/a^2)` |
| Latus rectum length | `2b^2/a` | `2b^2/a` |
| Latus rectum lines | `x = ae`, `x = -ae` | `y = ae`, `y = -ae` |
| Ends of latus rectum | `(±ae, ±b^2/a)` | `(±b^2/a, ±ae)` |
| Focal distances of `(x1,y1)` | `\|e·x1 - a\|`, `\|e·x1 + a\|` | `\|e·y1 - a\|`, `\|e·y1 + a\|` |
| Parametric point | `(a sec th, b tan th)` | `(b tan th, a sec th)` |
| **Asymptotes** | `y = ±(b/a)x` | `y = ±(a/b)x` |
| Combined asymptote equation | `x^2/a^2 - y^2/b^2 = 0` | `y^2/a^2 - x^2/b^2 = 0` |
| Auxiliary circle | `x^2 + y^2 = a^2` | `x^2 + y^2 = a^2` |
| Director circle | `x^2 + y^2 = a^2 - b^2` | `x^2 + y^2 = a^2 - b^2` |
| Conjugate hyperbola | `y^2/b^2 - x^2/a^2 = 1` | `x^2/b^2 - y^2/a^2 = 1` |

## 2.2 The two sketches

```
   TRANSVERSE AXIS ALONG x :  x^2/a^2 - y^2/b^2 = 1

                                  y
                                  ^
             \ \                  |                  / /
                \ \               |               / /
                  \  \            |            /  /
                    \   \         |         /   /
                     \     \      |      /     /
                      |       \   |   /       |
      ------------+---+-----------C-----------+---+------------> x
                 S'  A'                       A   S
                      |       /   |   \       |
                     /     /      |      \     \
                    /   /         |         \   \
                  /  /            |            \  \
                / /               |               \ \
             / /                  |                  \ \

     A ( a , 0 )   A' ( -a , 0 )   S ( ae , 0 )   S' ( -ae , 0 )   C ( 0 , 0 )
     inner slanted lines = ASYMPTOTES  y = ± (b/a) x
     directrices are the vertical lines x = ± a/e (between C and the vertices)
```

```
   TRANSVERSE AXIS ALONG y :  y^2/a^2 - x^2/b^2 = 1

                            y
      \                     ^                     /
       \                    |                    /
        \  \                |                /  /
         \    \             |             /    /
          \      \__        |        __/      /
           \        `-.____ | ____.-'        /        <- UPPER branch,
            \               |               /            vertex ( 0 , a )
             \              |              /
   -----------\-------------C-------------/-------------> x
             /              |              \
            /               |               \
           /        _..---- | ----.._        \        <- LOWER branch,
          /      __/        |        \__      \          vertex ( 0 , -a )
         /    /             |             \    \
        /  /                |                \  \
       /                    |                    \
      /                     |                     \

     vertices ( 0 , ±a )   foci ( 0 , ±ae )   directrices y = ± a/e
     asymptotes  y = ± (a/b) x
```

| Formula | When to use |
|---|---|
| divide until RHS = 1 | ALWAYS the first line of any hyperbola question |
| plus sign = `a^2` | decides EVERY later answer — do it first |
| `ae = sqrt(a^2 + b^2)` | fastest route to the foci |
| `e = sqrt(1 + b^2/a^2)` | when the question asks for e directly |
| `LR = 2b^2/a` | "length of the latus rectum" — 2-mark lookup |
| `2a/e` | "distance between the directrices" |
| `2ae` | "distance between the foci" |
| RHS -> 0, factorise | "find the asymptotes" — never fails |

---

# SECTION 3 — ECCENTRICITY RELATIONS (all the rearrangements)

```
  +==========================================================================+
  |                                                                          |
  |     b^2  =  a^2 ( e^2 - 1 )              <-- the master relation         |
  |                                                                          |
  |     a^2 e^2  =  a^2  +  b^2                                              |
  |                                                                          |
  |     a e  =  sqrt( a^2 + b^2 )            distance centre -> focus        |
  |                                                                          |
  |                     b^2                             b^2                  |
  |     e^2  =  1  +   -----      e  =  sqrt( 1  +     ----- )               |
  |                     a^2                             a^2                  |
  |                                                                          |
  |     b  =  a sqrt( e^2 - 1 )                                              |
  |                                                                          |
  |                      b                                                   |
  |     a  =  ------------------            (when b and e are given)         |
  |            sqrt( e^2 - 1 )                                               |
  |                                                                          |
  |     e  ALWAYS  >  1                     <-- check this every time        |
  |                                                                          |
  +==========================================================================+
```

| Given | Get `a` and `b` like this | When to use |
|---|---|---|
| `a` and `b` | `e = sqrt(1 + b^2/a^2)` | the standard 2-mark question |
| `a` and `e` | `b^2 = a^2(e^2 - 1)` | "vertices and eccentricity given" |
| `b` and `e` | `a^2 = b^2/(e^2 - 1)` | rarer, but appears |
| foci `(±c,0)` and `a` | `e = c/a`, `b^2 = c^2 - a^2` | most common in Section A |
| LR and foci gap | `2b^2/a` and `2ae` — two equations | Section B |
| directrix gap `2a/e` and `2ae` | multiply them: `4a^2` | slick shortcut |

```
  +--------------------------------------------------------------------------+
  |   TWO PRODUCTS WORTH KNOWING                                             |
  |                                                                          |
  |   ( 2 a e ) * ( 2 a / e )  =  4 a^2       ( foci gap x directrix gap )   |
  |   ( 2 a e ) / ( 2 a / e )  =  e^2                                        |
  +--------------------------------------------------------------------------+
```

**Standard eccentricity results to memorise (each is a 1-line MCQ):**

| Condition | Eccentricity |
|---|---|
| conjugate axis = transverse axis (`a = b`) | `e = sqrt 2` (rectangular) |
| latus rectum = transverse axis | `e = sqrt 2` |
| latus rectum = **half** the transverse axis | `e = sqrt(3/2) = sqrt6 / 2` |
| angle between asymptotes = 90° | `e = sqrt 2` |
| angle between asymptotes = 60° | `e = 2/sqrt3` |
| angle between asymptotes = `2A` | `e = sec A` |
| distance between foci = 2 × distance between directrices | `e = sqrt 2` |
| latus rectum subtends 90° at the centre | `e = (1 + sqrt5)/2` |
| `e1`, `e2` of a hyperbola and its conjugate | `1/e1^2 + 1/e2^2 = 1` |

---

# SECTION 4 — FOCAL DISTANCES

```
  +==========================================================================+
  |                                                                          |
  |   P ( x1 , y1 ) on the RIGHT branch of  x^2/a^2 - y^2/b^2 = 1 :          |
  |                                                                          |
  |          S P   =   e x1  -  a          ( S  = ( ae , 0 ) , NEAR focus )  |
  |          S' P  =   e x1  +  a          ( S' = ( -ae, 0 ) , FAR focus )   |
  |                                                                          |
  |          S' P  -  S P   =   2 a                                          |
  |                                                                          |
  |   ( on the LEFT branch the roles swap and  S P - S' P = 2a )             |
  |                                                                          |
  |   ALWAYS quote the result as   | S'P - SP | = 2a .                       |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `SP = e·x1 - a` | "find the focal distances of the point ..." |
| `\|S'P - SP\| = 2a` | "show that the difference of the focal distances is constant" |
| `SP · S'P = e^2x1^2 - a^2` | occasional MCQ |
| semi-latus rectum `b^2/a` | the focal distance at `x1 = ae` |

```
  +--------------------------------------------------------------------------+
  |  ELLIPSE  :  SP = a - e x1 ,   SP + S'P = 2a         SUM                 |
  |  HYPERBOLA:  SP = e x1 - a ,  |S'P - SP| = 2a        DIFFERENCE          |
  |                                                                          |
  |  Same letters. The a and the e x1 have swapped places, and the plus      |
  |  has become a minus. That is the entire difference.                      |
  +--------------------------------------------------------------------------+
```

---

# SECTION 5 — ASYMPTOTES

```
  +==========================================================================+
  |                                                                          |
  |   ASYMPTOTES of  x^2/a^2 - y^2/b^2 = 1                                   |
  |                                                                          |
  |          y  =  ( b / a ) x        and        y  =  - ( b / a ) x         |
  |                                                                          |
  |          b x - a y = 0            and        b x + a y = 0               |
  |                                                                          |
  |   COMBINED (pair) equation :        x^2/a^2  -  y^2/b^2   =   0          |
  |                                                                          |
  |   THE RECIPE : replace the 1 on the right by 0, then factorise.          |
  |                                                                          |
  +==========================================================================+
```

```
  +==========================================================================+
  |   HYPERBOLA  H :  x^2/a^2 - y^2/b^2 - 1  =  0                            |
  |   ASYMPTOTES A :  x^2/a^2 - y^2/b^2      =  0                            |
  |   CONJUGATE  C :  x^2/a^2 - y^2/b^2 + 1  =  0                            |
  |                                                                          |
  |                        H  +  C   =   2 A                                 |
  |                                                                          |
  |   All three differ only in the CONSTANT term.                            |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |   ANGLE BETWEEN THE ASYMPTOTES                                           |
  |                                                                          |
  |          2 A  =  2 tan^-1 ( b / a )   =   2 sec^-1 ( e )                 |
  |                                                                          |
  |                             2 a b                                        |
  |          tan ( 2 A )  =  -----------      ( when a != b )                |
  |                           a^2 - b^2                                      |
  |                                                                          |
  |          a = b   ->   90 degrees   ->   RECTANGULAR hyperbola            |
  +--------------------------------------------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |   ASYMPTOTES OF A GENERAL HYPERBOLA                                      |
  |     S = a x^2 + 2hxy + by^2 + 2gx + 2fy + c = 0                          |
  |                                                                          |
  |   1.  Asymptote pair is  S + lambda = 0  (only the constant changes).    |
  |   2.  A pair of lines needs  Delta = 0 :                                 |
  |          a b ( c + lambda ) + 2fgh - af^2 - bg^2 - ( c + lambda ) h^2 = 0|
  |   3.  Solve for lambda, substitute back, and FACTORISE into two lines.   |
  |   4.  CONJUGATE hyperbola is then  S + 2 lambda = 0 .                    |
  |   5.  CENTRE = the intersection of the two asymptotes,                   |
  |          i.e. solve   a x + h y + g = 0  and  h x + b y + f = 0 .        |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| RHS -> 0 and factorise | any standard hyperbola |
| `S + lambda = 0` with `Delta = 0` | a general 2nd-degree hyperbola (7-mark) |
| `S + 2 lambda = 0` | "find the conjugate hyperbola" in the same question |
| `2 tan^-1(b/a)` | "angle between the asymptotes" |
| asymptotes + constant | "find the hyperbola with these asymptotes through this point" |

---

# SECTION 6 — THE CONJUGATE HYPERBOLA

```
  +==========================================================================+
  |                                                                          |
  |   HYPERBOLA            x^2/a^2  -  y^2/b^2  =   1                        |
  |   CONJUGATE HYPERBOLA  x^2/a^2  -  y^2/b^2  =  -1                        |
  |                 i.e.   y^2/b^2  -  x^2/a^2  =   1                        |
  |                                                                          |
  |                    1        1                                            |
  |                   ----  +  ----   =   1                                  |
  |                   e1^2     e2^2                                          |
  |                                                                          |
  +==========================================================================+
```

| Item | `x^2/a^2 - y^2/b^2 = 1` | its conjugate `y^2/b^2 - x^2/a^2 = 1` |
|---|---|---|
| Transverse axis | `2a` along x | `2b` along y |
| Conjugate axis | `2b` along y | `2a` along x |
| Vertices | `(±a, 0)` | `(0, ±b)` |
| Foci | `(±sqrt(a^2+b^2), 0)` | `(0, ±sqrt(a^2+b^2))` |
| Eccentricity | `e1 = sqrt(1 + b^2/a^2)` | `e2 = sqrt(1 + a^2/b^2)` |
| Latus rectum | `2b^2/a` | `2a^2/b` |
| Directrices | `x = ±a/e1` | `y = ±b/e2` |
| Asymptotes | `y = ±(b/a)x` | **identical** |

| Formula | When to use |
|---|---|
| flip the sign of the whole equation | "write the conjugate hyperbola of ..." |
| `1/e1^2 + 1/e2^2 = 1` | given one eccentricity, find the other — 2-mark gift |
| foci of both at distance `sqrt(a^2+b^2)` | quick MCQ elimination |
| both `e = sqrt 2` | only for the rectangular case |

---

# SECTION 7 — RECTANGULAR (EQUILATERAL) HYPERBOLA

```
  +==========================================================================+
  |                                                                          |
  |   a = b       ->      x^2  -  y^2  =  a^2       and       e = sqrt 2     |
  |                                                                          |
  |   Vertices     ( ± a , 0 )                                               |
  |   Foci         ( ± a sqrt2 , 0 )                                         |
  |   Directrices  x = ± a / sqrt 2                                          |
  |   Asymptotes   y = x  and  y = -x       ( PERPENDICULAR )                |
  |   Latus rectum 2 a  =  the transverse axis                               |
  |                                                                          |
  |   In a general equation:  a + b = 0  (coefficients of x^2 and y^2 sum    |
  |   to zero) together with h^2 - ab > 0.                                   |
  |                                                                          |
  +==========================================================================+
```

```
  +==========================================================================+
  |                                                                          |
  |   ROTATE BY 45 DEGREES AND THE ASYMPTOTES BECOME THE AXES :              |
  |                                                                          |
  |                            x y  =  c^2                                   |
  |                                                                          |
  |   PARAMETRIC POINT     P ( t )  =  (  c t  ,  c / t  ) ,   t != 0        |
  |                                                                          |
  |   Asymptotes       x = 0  and  y = 0                                     |
  |   Vertices         ( c , c )  and  ( -c , -c )                           |
  |   a = b = c sqrt 2         e = sqrt 2                                    |
  |   Transverse axis  the line y = x , length 2 sqrt2 c                     |
  |   Foci             ( ± c sqrt2 , ± c sqrt2 )   (same sign in each pair)  |
  |   Directrices      x + y  =  ± c sqrt 2                                  |
  |   Latus rectum     2 sqrt 2 c                                            |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |   ON  x y = c^2                                                          |
  |                                                                          |
  |   TANGENT at  ( c t , c/t )   :     x  +  t^2 y   =   2 c t              |
  |   NORMAL  at  ( c t , c/t )   :     t^3 x  -  t y  =  c ( t^4 - 1 )      |
  |   CHORD joining t1 and t2     :     x  +  t1 t2 y  =  c ( t1 + t2 )      |
  |   TANGENT at ( x1 , y1 )      :     x y1  +  y x1  =  2 c^2             |
  |   NORMAL  at ( x1 , y1 )      :     x x1  -  y y1  =  x1^2 - y1^2       |
  |                                                                          |
  |   The tangent is BISECTED by the point of contact,                      |
  |   and the triangle it makes with the axes has AREA 2 c^2 (constant).     |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `e = sqrt 2` | any question saying "rectangular" or "equilateral" |
| `a + b = 0` | "show that the equation is a rectangular hyperbola" |
| `xy = c^2`, `P(t) = (ct, c/t)` | Boyle's law style and EAPCET parameter questions |
| `x + t^2y = 2ct` | tangent to `xy = c^2` |
| area `= 2c^2` | "constant area" property questions |

---

# SECTION 8 — SHIFTED HYPERBOLA, CENTRE `(h, k)`

```
  +==========================================================================+
  |                                                                          |
  |          ( x - h )^2       ( y - k )^2                                   |
  |          -----------   -   -----------   =   1                           |
  |              a^2               b^2                                       |
  |                                                                          |
  |   Centre        ( h , k )                                                |
  |   Vertices      ( h ± a , k )                                            |
  |   Foci          ( h ± a e , k )                                          |
  |   Directrices   x  =  h ± a / e                                          |
  |   Transverse axis   y = k , length 2a                                    |
  |   Conjugate  axis   x = h , length 2b                                    |
  |   Latus rectum  2 b^2 / a , on the lines  x = h ± a e                    |
  |   Asymptotes    y - k  =  ± ( b / a ) ( x - h )                          |
  |                                                                          |
  |   EVERY answer = the standard answer, shifted by ( h , k ).              |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |   COMPLETING THE SQUARE — the 7-mark recipe                              |
  |                                                                          |
  |   1.  Group x-terms and y-terms.                                         |
  |   2.  Factor out the coefficient of x^2 , and the coefficient of y^2     |
  |       INCLUDING ITS MINUS SIGN.                                          |
  |   3.  Complete each square: half the middle coefficient, then square.    |
  |   4.  Take the loose constants to the right.                             |
  |   5.  Divide so the RHS is exactly 1.                                    |
  |   6.  a^2 sits under the POSITIVE bracket.                               |
  |   7.  ae = sqrt(a^2+b^2) , e = ae/a , then list every element.           |
  |                                                                          |
  |   WATCH: -16y^2 - 32y  =  -16 ( y^2 + 2y ) . The signs inside FLIP.      |
  +--------------------------------------------------------------------------+
```

---

# SECTION 9 — AUXILIARY CIRCLE AND PARAMETRIC FORM

```
  +==========================================================================+
  |                                                                          |
  |   AUXILIARY CIRCLE :  x^2 + y^2 = a^2                                    |
  |   (the circle on the TRANSVERSE axis as diameter)                        |
  |                                                                          |
  |   PARAMETRIC POINT  :  P ( theta ) = ( a sec theta , b tan theta )       |
  |                                                                          |
  |   because   sec^2 theta - tan^2 theta = 1                                |
  |                                                                          |
  |   theta in ( -pi/2 , pi/2 )   ->  RIGHT branch                           |
  |   theta in ( pi/2 , 3pi/2 )   ->  LEFT branch                            |
  |   theta = ± pi/2  is not allowed                                         |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |   CHORD joining P(alpha) and Q(beta)                                     |
  |                                                                          |
  |     x        alpha - beta       y        alpha + beta          alpha+beta|
  |    ---  cos( ------------ ) -  ---  sin( ------------ )  = cos(---------)|
  |     a              2            b              2                   2     |
  |                                                                          |
  |   POINT OF INTERSECTION of the tangents at alpha and beta                |
  |                                                                          |
  |             a cos( (alpha-beta)/2 )                     alpha + beta     |
  |      x  =  --------------------------- ,      y = b tan( ----------- )   |
  |              cos( (alpha+beta)/2 )                            2          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `(a sec th, b tan th)` | "the point whose eccentric angle is ..." |
| chord formula | "find the chord joining the points alpha and beta" |
| intersection of tangents | locus questions from EAPCET |
| `x^2 + y^2 = a^2` | feet of perpendiculars from the foci to tangents |

---

# SECTION 10 — `S`, `S11`, `T` : THE THREE EXPRESSIONS

```
  +==========================================================================+
  |                                                                          |
  |             x^2      y^2                                                 |
  |     S   =   ---  -   ---  -  1              the curve itself             |
  |             a^2      b^2                                                 |
  |                                                                          |
  |             x1^2     y1^2                                                |
  |     S11 =   ----  -  ----  -  1             put the POINT in             |
  |             a^2      b^2                                                 |
  |                                                                          |
  |             x x1     y y1                                                |
  |     T   =   ----  -  ----  -  1             the half-and-half version    |
  |             a^2      b^2                                                 |
  |                                                                          |
  +==========================================================================+
```

| Equation | Meaning |
|---|---|
| `T = 0` | tangent at `(x1,y1)` if the point is ON the curve |
| `T = 0` | chord of contact if the point is OFF the curve |
| `T = 0` | the polar of `(x1,y1)`, always |
| `T = S11` | the chord whose MIDPOINT is `(x1,y1)` |
| `S · S11 = T^2` | the PAIR of tangents from `(x1,y1)` |

```
  +--------------------------------------------------------------------------+
  |   POSITION OF A POINT                                                    |
  |                                                                          |
  |        S11  >  0     INSIDE a branch (the focus side)                    |
  |        S11  =  0     ON the hyperbola                                    |
  |        S11  <  0     OUTSIDE (the region containing the centre)          |
  |                                                                          |
  |   OPPOSITE to the ellipse convention. Sanity-check with the centre       |
  |   ( S11 = -1 < 0 , outside ) and a focus ( S11 = e^2 - 1 > 0 , inside ). |
  +--------------------------------------------------------------------------+
```

**How to build `T` from `S` — mechanical, works for every conic:**

| In S you see | In T write |
|---|---|
| `x^2` | `x x1` |
| `y^2` | `y y1` |
| `xy` | `(x y1 + x1 y) / 2` |
| `x` | `(x + x1) / 2` |
| `y` | `(y + y1) / 2` |
| constant | unchanged |

---

# SECTION 11 — LINE AND HYPERBOLA

```
  +==========================================================================+
  |                                                                          |
  |   Substituting  y = m x + c  into  x^2/a^2 - y^2/b^2 = 1  gives          |
  |                                                                          |
  |   ( b^2 - a^2 m^2 ) x^2 - 2 a^2 m c x - a^2 ( c^2 + b^2 )  =  0          |
  |                                                                          |
  |   CONDITION FOR TANGENCY (equal roots)                                   |
  |                                                                          |
  |                  c^2   =   a^2 m^2   -   b^2                             |
  |                                                                          |
  |   c^2  >  a^2m^2 - b^2   ->  the line CUTS the hyperbola (2 points)      |
  |   c^2  =  a^2m^2 - b^2   ->  the line TOUCHES it (1 point)               |
  |   c^2  <  a^2m^2 - b^2   ->  the line MISSES it                          |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |   THE SLOPE RESTRICTION — a hyperbola-only trap                          |
  |                                                                          |
  |     | m |  >  b/a    two tangents of that slope exist                    |
  |     | m |  =  b/a    c = 0 : the "tangent" is the ASYMPTOTE              |
  |     | m |  <  b/a    NO tangent of that slope exists                     |
  |                                                                          |
  |   ( for the transverse-along-y form, replace b/a by a/b )                |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `c^2 = a^2m^2 - b^2` | "find the condition for the line to be a tangent" |
| `c^2 > a^2m^2 - b^2` | "show the line is a secant / find the chord" |
| `\|m\| >= b/a` | before claiming a tangent of a given slope exists |
| `l^2 a^2 - m^2 b^2 = n^2` | condition for `lx + my + n = 0` to touch |

---

# SECTION 12 — TANGENTS

```
  +==========================================================================+
  |                                                                          |
  |   (1)  AT ( x1 , y1 )         x x1 / a^2   -   y y1 / b^2   =   1        |
  |                                                                          |
  |   (2)  AT theta               ( x sec th )/a  -  ( y tan th )/b  =  1    |
  |                                                                          |
  |   (3)  SLOPE FORM             y  =  m x  ±  sqrt( a^2 m^2 - b^2 )        |
  |                                                                          |
  |        POINT OF CONTACT       (  - a^2 m / c  ,  - b^2 / c  )            |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `T = 0` | "tangent at the point ..." — the default |
| `theta` form | "tangent at the point whose eccentric angle is ..." |
| slope form | "tangents parallel / perpendicular to a given line" |
| `(-a^2m/c, -b^2/c)` | "find the point of contact" |
| `x x1/a^2 - y y1/b^2 = 1` | also the chord of contact and the polar |

```
  +--------------------------------------------------------------------------+
  |   USEFUL TANGENT FACTS                                                   |
  |                                                                          |
  |   * Tangent at the vertex ( a , 0 )  is  x = a .                        |
  |   * dy/dx  =  b^2 x / ( a^2 y )                                          |
  |   * The product of the perpendicular distances from the two FOCI to      |
  |     any tangent is  b^2 .                                                |
  |   * The foot of the perpendicular from a focus to any tangent lies on    |
  |     the AUXILIARY circle  x^2 + y^2 = a^2 .                              |
  |   * The tangent BISECTS the angle S P S' ( for an ellipse it was the     |
  |     normal that did this ).                                              |
  +--------------------------------------------------------------------------+
```

---

# SECTION 13 — NORMALS

```
  +==========================================================================+
  |                                                                          |
  |   (1)  AT ( x1 , y1 )      a^2 x / x1   +   b^2 y / y1   =   a^2 + b^2   |
  |                                                                          |
  |   (2)  AT theta            a x cos th   +   b y cot th   =   a^2 + b^2   |
  |                                                                          |
  |                                            m ( a^2 + b^2 )               |
  |   (3)  SLOPE FORM          y  =  m x   ∓  ---------------------          |
  |                                            sqrt( a^2 - b^2 m^2 )         |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| form (1) | "normal at the point ..." |
| form (2) | "normal at eccentric angle ..." |
| form (3) | "normal with a given slope" (rare in the board paper) |
| normal slope `= -a^2y1/(b^2x1)` | to check perpendicularity |

```
  +--------------------------------------------------------------------------+
  |   ELLIPSE   a^2 x/x1  -  b^2 y/y1  =  a^2 - b^2                          |
  |   HYPERBOLA a^2 x/x1  +  b^2 y/y1  =  a^2 + b^2                          |
  |                                                                          |
  |   TWO signs change. Both come from replacing b^2 by -b^2.                |
  +--------------------------------------------------------------------------+
```

---

# SECTION 14 — CHORDS, POLE AND POLAR

```
  +==========================================================================+
  |                                                                          |
  |   CHORD OF CONTACT from ( x1 , y1 ) :                                    |
  |             x x1 / a^2   -   y y1 / b^2   =   1               ( T = 0 )  |
  |                                                                          |
  |   CHORD WITH MIDPOINT ( x1 , y1 ) :                                      |
  |             x x1 / a^2  -  y y1 / b^2  =  x1^2/a^2  -  y1^2/b^2          |
  |                                                          ( T = S11 )     |
  |                                                                          |
  |   PAIR OF TANGENTS from ( x1 , y1 ) :                                    |
  |             S * S11   =   T^2                                            |
  |                                                                          |
  |   POLAR of ( x1 , y1 ) :        x x1/a^2  -  y y1/b^2  =  1              |
  |                                                                          |
  |   POLE of  l x + m y + n = 0 :  (  - a^2 l / n  ,  + b^2 m / n  )        |
  |                                                                          |
  |   CONJUGATE POINTS :   x1 x2 / a^2   -   y1 y2 / b^2   =   1             |
  |                                                                          |
  |   CONJUGATE LINES  :  a^2 l1 l2   -   b^2 m1 m2   =   n1 n2              |
  |                                                                          |
  +==========================================================================+
```

| Formula | When to use |
|---|---|
| `T = 0` | "chord of contact of the tangents drawn from ..." |
| `T = S11` | "chord bisected at the point ..." / "midpoint of the chord is ..." |
| `S·S11 = T^2` | "combined equation of the pair of tangents from ..." |
| pole formula | "find the pole of the line ..." |
| polar `= T = 0` | "find the polar of the point ..." |
| conjugate-point test | "show that the points are conjugate" |

> After finding a midpoint chord on a **hyperbola**, substitute back and check the
> discriminant. Unlike the ellipse, a real chord with that midpoint need not exist.

---

# SECTION 15 — DIRECTOR CIRCLE AND THE PRETTY PROPERTIES

```
  +==========================================================================+
  |                                                                          |
  |   DIRECTOR CIRCLE   ( locus of the point of intersection of              |
  |                       PERPENDICULAR tangents )                           |
  |                                                                          |
  |                    x^2  +  y^2   =   a^2  -  b^2                         |
  |                                                                          |
  |        a > b   real circle, radius sqrt( a^2 - b^2 )   ( e < sqrt 2 )    |
  |        a = b   just the CENTRE ( rectangular hyperbola )                 |
  |        a < b   NO real points — no perpendicular tangents exist          |
  |                                                                          |
  +==========================================================================+
```

```
  +--------------------------------------------------------------------------+
  |   THE THREE CIRCLES — do not mix them up                                 |
  |                                                                          |
  |     AUXILIARY circle    x^2 + y^2 = a^2         ( feet of perpendiculars |
  |                                                   from a focus )         |
  |     DIRECTOR  circle    x^2 + y^2 = a^2 - b^2   ( perpendicular tangents)|
  |     the hyperbola       x^2/a^2 - y^2/b^2 = 1                            |
  +--------------------------------------------------------------------------+
```

| Property | Statement |
|---|---|
| Product of focal perpendiculars | `p1 · p2 = b^2` for every tangent |
| Foot of focal perpendicular | lies on `x^2 + y^2 = a^2` |
| Reflection | a ray aimed at one focus reflects towards the other focus |
| Tangent at `P` | bisects the angle `S P S'` |
| Asymptote–tangent triangle | the tangent cuts the asymptotes at points whose midpoint is the point of contact; the triangle formed with the asymptotes has constant area `ab` |
| Tangent to `xy = c^2` | is bisected by the point of contact; triangle area `= 2c^2` |

---

# SECTION 16 — BUILDING A HYPERBOLA FROM GIVEN DATA

| You are given | Do this |
|---|---|
| vertices `(±a, 0)` and `e` | `b^2 = a^2(e^2 - 1)` |
| foci `(±c, 0)` and `e` | `a = c/e`, `b^2 = c^2 - a^2` |
| foci `(±c, 0)` and transverse axis `2a` | `b^2 = c^2 - a^2` |
| foci and latus rectum | `ae = c`, `2b^2/a = LR`, `b^2 = c^2 - a^2` — solve for `a` |
| transverse and conjugate axes | read `a` and `b` straight off |
| focus, directrix, `e` | `SP^2 = e^2 PM^2` |
| two points on the curve | put `x^2/A - y^2/B = 1` and solve two linear equations in `1/A`, `1/B` |
| asymptotes and a point | asymptote pair `= k`, find `k` from the point |
| difference of distances from two fixed points | centre = midpoint, `2a` = the difference, `2ae` = the gap |

```
  +--------------------------------------------------------------------------+
  |   ALWAYS FINISH WITH THESE THREE CHECKS                                  |
  |                                                                          |
  |     1.  e  >  1 ?                                                        |
  |     2.  ( a e )^2 = a^2 + b^2 ?                                          |
  |     3.  Does the given point actually satisfy my final equation ?        |
  +--------------------------------------------------------------------------+
```

---

# SECTION 17 — ELLIPSE vs HYPERBOLA — EXACTLY WHICH SIGNS CHANGE

| Item | Ellipse `x^2/a^2 + y^2/b^2 = 1` (a > b) | Hyperbola `x^2/a^2 - y^2/b^2 = 1` | Changed? |
|---|---|---|---|
| Equation | `+` | `-` | **YES** |
| Eccentricity | `0 < e < 1` | `e > 1` | **YES** |
| Size rule | `a > b` always | no rule | **YES** |
| Master relation | `b^2 = a^2(1 - e^2)` | `b^2 = a^2(e^2 - 1)` | **YES** |
| `ae` | `sqrt(a^2 - b^2)` | `sqrt(a^2 + b^2)` | **YES** |
| Centre | `(0,0)` | `(0,0)` | no |
| Vertices | `(±a, 0)` | `(±a, 0)` | no |
| Foci | `(±ae, 0)` | `(±ae, 0)` | no |
| Directrices | `x = ±a/e` | `x = ±a/e` | no |
| Axis names | major / minor | transverse / conjugate | **YES** |
| Latus rectum | `2b^2/a` | `2b^2/a` | no |
| Focal property | `SP + S'P = 2a` | `\|S'P - SP\| = 2a` | **YES** |
| Focal distance | `a - e x1` | `e x1 - a` | **YES** |
| Parametric point | `(a cos th, b sin th)` | `(a sec th, b tan th)` | **YES** |
| Auxiliary circle | `x^2 + y^2 = a^2` | `x^2 + y^2 = a^2` | no |
| `S` | `x^2/a^2 + y^2/b^2 - 1` | `x^2/a^2 - y^2/b^2 - 1` | **YES** |
| Inside test | `S11 < 0` | `S11 > 0` | **YES** |
| Tangent at `(x1,y1)` | `x x1/a^2 + y y1/b^2 = 1` | `x x1/a^2 - y y1/b^2 = 1` | **YES** |
| Tangency condition | `c^2 = a^2m^2 + b^2` | `c^2 = a^2m^2 - b^2` | **YES** |
| Slope restriction | none | `\|m\| >= b/a` | **YES** |
| Point of contact | `(-a^2m/c, b^2/c)` | `(-a^2m/c, -b^2/c)` | **YES** |
| Normal at `(x1,y1)` | `a^2x/x1 - b^2y/y1 = a^2 - b^2` | `a^2x/x1 + b^2y/y1 = a^2 + b^2` | **YES** |
| Normal at `theta` | `ax sec th - by cosec th = a^2 - b^2` | `ax cos th + by cot th = a^2 + b^2` | **YES** |
| `T = 0`, `T = S11`, `S S11 = T^2` | same three rules | same three rules | no |
| Pole of `lx+my+n=0` | `(-a^2l/n, -b^2m/n)` | `(-a^2l/n, +b^2m/n)` | **YES** |
| Director circle | `x^2 + y^2 = a^2 + b^2` | `x^2 + y^2 = a^2 - b^2` | **YES** |
| Focal perpendicular product | `b^2` | `b^2` | no |
| Asymptotes | none | `y = ±(b/a)x` | **NEW** |
| Conjugate curve | none | `y^2/b^2 - x^2/a^2 = 1` | **NEW** |
| Shape | one closed oval | two open branches | **YES** |
| Area | `pi a b` | infinite (open curve) | **YES** |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +==========================================================================+
  |                                                                          |
  |   1.   x^2/a^2  -  y^2/b^2  =  1                                         |
  |                                                                          |
  |   2.   b^2 = a^2 ( e^2 - 1 )        e = sqrt( 1 + b^2/a^2 )   >  1       |
  |                                                                          |
  |   3.   a e = sqrt( a^2 + b^2 )      foci ( ± ae , 0 )                    |
  |                                                                          |
  |   4.   directrices  x = ± a/e       vertices ( ± a , 0 )                 |
  |                                                                          |
  |   5.   transverse axis 2a           conjugate axis 2b                    |
  |                                                                          |
  |   6.   LATUS RECTUM  =  2 b^2 / a                                        |
  |                                                                          |
  |   7.   SP = e x1 - a ,  S'P = e x1 + a ,  | S'P - SP | = 2a              |
  |                                                                          |
  |   8.   ASYMPTOTES  y = ± ( b/a ) x   ( put the RHS to 0 and factorise )  |
  |        angle between them  = 2 tan^-1 ( b/a ) = 2 sec^-1 ( e )           |
  |                                                                          |
  |   9.   CONJUGATE : y^2/b^2 - x^2/a^2 = 1 ,  1/e1^2 + 1/e2^2 = 1          |
  |                                                                          |
  |  10.   RECTANGULAR : a = b , e = sqrt2 ; rotated form x y = c^2 ,        |
  |        P(t) = ( ct , c/t ) , tangent x + t^2 y = 2ct                     |
  |                                                                          |
  |  11.   TANGENT   x x1/a^2 - y y1/b^2 = 1                                 |
  |        y = mx ± sqrt( a^2m^2 - b^2 ) ,  contact ( -a^2m/c , -b^2/c )     |
  |                                                                          |
  |  12.   NORMAL    a^2 x/x1 + b^2 y/y1 = a^2 + b^2                         |
  |        DIRECTOR CIRCLE  x^2 + y^2 = a^2 - b^2   ( needs a > b )          |
  |                                                                          |
  +==========================================================================+
```

```
  IF YOU FORGET ONE OF THEM IN THE EXAM HALL:
  write the ELLIPSE version, then replace  b^2  by  -b^2 .  It always works.
```
