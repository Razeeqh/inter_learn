# Applications of Derivatives — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually
test.

---

# 1. THE TWO MEANINGS OF dy/dx

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   dy/dx  =  RATE of change of y with respect to x                  |
  |                                                                    |
  |   dy/dx  =  SLOPE of the tangent to the curve y = f(x)             |
  |                                                                    |
  |   d/dt   =  rate with respect to TIME (used in related rates)      |
  |                                                                    |
  |   CHAIN RULE (the engine of the whole chapter):                    |
  |                                                                    |
  |        dQ       dQ      dr                                         |
  |       ----  =  ---- .  ----                                        |
  |        dt       dr      dt                                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| dy/dx as a rate | any "how fast" question |
| dy/dx as a slope | any tangent / normal / angle question |
| dQ/dt = (dQ/dr)(dr/dt) | EVERY related-rates problem |
| dy/dx = (dy/dt) / (dx/dt) | parametric curves x = f(t), y = g(t) |

---

# 2. ERRORS AND APPROXIMATIONS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   delta x  =  dx           the small change made in x              |
  |                                                                    |
  |   delta y  =  f(x + dx) - f(x)          ACTUAL change (exact)      |
  |                                                                    |
  |   dy       =  f'(x) . dx                APPROXIMATE change         |
  |                                                                    |
  |   delta y  is approximately  dy                                    |
  |                                                                    |
  |   APPROXIMATE VALUE:                                               |
  |                                                                    |
  |        f(x + dx)   ~   f(x)  +  f'(x) . dx                         |
  |                                                                    |
  +--------------------------------------------------------------------+


  +--------------------------------------------------------------------+
  |                                                                    |
  |                            dy                                      |
  |    RELATIVE ERROR    =   ------                                    |
  |                             y                                      |
  |                                                                    |
  |                            dy                                      |
  |    PERCENTAGE ERROR  =   ------  x  100                            |
  |                             y                                      |
  |                                                                    |
  |    SHORTCUT for  y = x^n :                                         |
  |                                                                    |
  |        dy        dx                                                |
  |       ----  =  n ----      so   % error in y = n x (% error in x)  |
  |         y         x                                                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| f(x+dx) ~ f(x) + f'(x)dx | approximate sqrt(82), cbrt(65), sin(31 deg) |
| delta y = f(x+dx) - f(x) | when the question says "find delta y" |
| dy = f'(x)dx | when the question says "find dy" or "approximate error" |
| dy/y | "relative error" — has NO units |
| 100 dy/y | "percentage error" — write the % sign |
| % error in y = n x (% error in x) for y = x^n | the 10-second version of the whole topic |

**The multipliers you should recognise instantly:**

| Quantity | Formula | % error multiplier |
|----------|---------|--------------------|
| Circumference from radius | C = 2 pi r | 1 |
| Area of circle from radius | A = pi r^2 | 2 |
| Surface of sphere from radius | S = 4 pi r^2 | 2 |
| Volume of sphere from radius | V = (4/3) pi r^3 | 3 |
| Surface of cube from side | S = 6 x^2 | 2 |
| Volume of cube from side | V = x^3 | 3 |
| Side of cube from volume | x = V^(1/3) | 1/3 |
| Radius of sphere from volume | r proportional to V^(1/3) | 1/3 |

**Useful nearby values for approximations:**

```
  SQUARES :  16 25 36 49 64 81 100 121 144 169 196 225 256 289 324 361 400
  CUBES   :  1  8  27 64 125 216 343 512 729 1000
  ANGLES  :  30 deg = pi/6 ,  45 deg = pi/4 ,  60 deg = pi/3
             1 degree = pi/180 radians = 0.01745 radians
```

---

# 3. RATE OF CHANGE AND RELATED RATES

```
  +--------------------------------------------------------------------+
  |   GEOMETRY FORMULAS YOU MUST HAVE READY                            |
  |                                                                    |
  |   CIRCLE      A = pi r^2                C = 2 pi r                 |
  |   SPHERE      V = (4/3) pi r^3          S = 4 pi r^2               |
  |   CUBE        V = x^3                   S = 6 x^2                  |
  |   CYLINDER    V = pi r^2 h              S = 2 pi r^2 + 2 pi r h    |
  |   CONE        V = (1/3) pi r^2 h        curved S = pi r l          |
  |   SQUARE      A = x^2                   perimeter = 4x             |
  |   RIGHT TRIANGLE (ladder)   x^2 + y^2 = L^2                        |
  |                                                                    |
  +--------------------------------------------------------------------+


  +--------------------------------------------------------------------+
  |   AFTER DIFFERENTIATING WITH RESPECT TO t                          |
  |                                                                    |
  |   Circle area      dA/dt  =  2 pi r . dr/dt                        |
  |   Sphere volume    dV/dt  =  4 pi r^2 . dr/dt                      |
  |   Sphere surface   dS/dt  =  8 pi r . dr/dt                        |
  |   Cube volume      dV/dt  =  3 x^2 . dx/dt                         |
  |   Cube surface     dS/dt  =  12 x . dx/dt                          |
  |   Ladder           x . dx/dt  +  y . dy/dt  =  0                   |
  |   Cone (r = kh)    dV/dt  =  pi k^2 h^2 . dh/dt                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| v = ds/dt | velocity of a particle |
| a = dv/dt = d^2s/dt^2 | acceleration |
| v = 0 | "when is the particle at rest" |
| dV/dt = 4 pi r^2 (dr/dt) | expanding / deflating balloon |
| x dx/dt + y dy/dt = 0 | sliding ladder |
| dV/dt = pi h^2 (dh/dt) when r = h | cone with 45 degree semi-vertical angle |
| dA/dt = 2 pi r (dr/dt) | spreading oil slick, ripple on water |

> **GOLDEN RULE:** differentiate FIRST, substitute the numbers LAST.

---

# 4. TANGENTS AND NORMALS

```
  +====================================================================+
  |                                                                    |
  |   At the point P(x1, y1) on the curve y = f(x) ,                   |
  |   put   m  =  [ dy/dx ]  at (x1, y1)                               |
  |                                                                    |
  |   SLOPE OF TANGENT   =   m                                         |
  |                                                                    |
  |                             -1                                     |
  |   SLOPE OF NORMAL    =   -------                                   |
  |                              m                                     |
  |                                                                    |
  |   EQUATION OF TANGENT :    y - y1  =  m ( x - x1 )                 |
  |                                                                    |
  |                                        -1                          |
  |   EQUATION OF NORMAL  :    y - y1  =  ---- ( x - x1 )              |
  |                                         m                          |
  |                                                                    |
  |   or   m ( y - y1 )  +  ( x - x1 )  =  0                           |
  |                                                                    |
  +====================================================================+
```

## Special positions of the tangent

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   dy/dx = 0          tangent HORIZONTAL   ->  tangent  y = y1      |
  |                      (parallel to x-axis)     normal   x = x1      |
  |                                                                    |
  |   dy/dx = infinity   tangent VERTICAL     ->  tangent  x = x1      |
  |                      (parallel to y-axis)     normal   y = y1      |
  |                                                                    |
  |   tangent parallel to line of slope k       ->  set  dy/dx = k     |
  |                                                                    |
  |   tangent perpendicular to line of slope k  ->  set  dy/dx = -1/k  |
  |                                                                    |
  |   tangent makes angle theta with x-axis     ->  dy/dx = tan(theta) |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| y - y1 = m(x - x1) | the tangent, every time |
| y - y1 = (-1/m)(x - x1) | the normal, every time |
| m1 m2 = -1 | check your tangent and normal are perpendicular |
| dy/dx = k | "tangent parallel to a given line" |
| dy/dx = -1/k | "tangent perpendicular to a given line" |
| dy/dx = tan(theta) | "tangent makes 45 degrees with the x-axis" |
| dy/dx = (dy/dt)/(dx/dt) | curve given as x = f(t), y = g(t) |

---

# 5. LENGTHS OF TANGENT, NORMAL, SUBTANGENT, SUBNORMAL

```
  +====================================================================+
  |   At P(x1, y1) with  m = dy/dx  :                                  |
  |                                                                    |
  |                            y1                                      |
  |     SUBTANGENT     =     ------                                    |
  |                            m                                       |
  |                                                                    |
  |     SUBNORMAL      =     y1 . m                                    |
  |                                                                    |
  |                            y1 . sqrt( 1 + m^2 )                    |
  |     LENGTH OF      =     ------------------------                  |
  |     TANGENT                        m                               |
  |                                                                    |
  |     LENGTH OF      =     y1 . sqrt( 1 + m^2 )                      |
  |     NORMAL                                                         |
  |                                                                    |
  |     Take the MODULUS of each - a length is never negative.         |
  +====================================================================+

     MEMORY HOOK
     -----------
     SUBTANGENT  =  y  DIVIDED BY  m          ( "sub-T, T for divide-Top" )
     SUBNORMAL   =  y  TIMES       m
     LENGTHS     =  the "sub" answer  x  sqrt(1 + m^2)
```

| Formula | When to use |
|---------|-------------|
| y1/m | "length of the subtangent" |
| y1 m | "length of the subnormal" |
| y1 sqrt(1+m^2)/m | "length of the tangent" |
| y1 sqrt(1+m^2) | "length of the normal" |

## Standard results worth memorising

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   y^2 = 4ax          subnormal  = 2a  (CONSTANT)                   |
  |                      subtangent = 2x                               |
  |                                                                    |
  |   y = a e^(x/b)      subtangent = b   (CONSTANT)                   |
  |                                                                    |
  |   x^m y^n = k        subtangent = n x1 / m  (in modulus)           |
  |                                                                    |
  |   xy = c^2           tangent cuts off a triangle from the axes     |
  |                      of AREA = 2 c^2  (the same for every point)   |
  |                                                                    |
  |   sqrt(x)+sqrt(y)    sum of the intercepts of the tangent          |
  |        = sqrt(a)     on the axes  =  a   (CONSTANT)                |
  |                                                                    |
  |   x^(2/3)+y^(2/3)    the part of the tangent between the axes      |
  |        = a^(2/3)     has LENGTH  a  (CONSTANT)                     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 6. ANGLE BETWEEN TWO CURVES

```
  +====================================================================+
  |                                                                    |
  |   m1 = slope of curve 1 at the point of intersection               |
  |   m2 = slope of curve 2 at the SAME point                          |
  |                                                                    |
  |                    |  m1  -  m2  |                                 |
  |     tan(theta) =   | ----------- |                                 |
  |                    | 1 + m1 . m2 |                                 |
  |                                                                    |
  |     ORTHOGONAL  (cut at 90 degrees)   <=>    m1 . m2  =  -1        |
  |                                                                    |
  |     TOUCHING    (angle = 0)           <=>    m1  =  m2             |
  |                                                                    |
  |     One of them vertical:  the angle is  90 - (angle of the other) |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---------|-------------|
| Solve the two curve equations together | ALWAYS the first step |
| tan theta = |(m1-m2)/(1+m1m2)| | "find the angle between the curves" |
| m1 m2 = -1 | "show the curves cut orthogonally" |
| m1 = m2 | "show the curves touch each other" |
| 1 + m1m2 = 0 | the same orthogonality condition rearranged |

---

# 7. ROLLE'S THEOREM AND LAGRANGE'S MEAN VALUE THEOREM

```
  +====================================================================+
  |   ROLLE'S THEOREM                                                  |
  |                                                                    |
  |   (i)   f continuous on [a, b]                                     |
  |   (ii)  f differentiable on (a, b)                                 |
  |   (iii) f(a) = f(b)                                                |
  |                                                                    |
  |   =>  there exists c in (a, b) with     f'(c)  =  0                |
  |                                                                    |
  |   GEOMETRY: somewhere the tangent is HORIZONTAL.                   |
  +====================================================================+


  +====================================================================+
  |   LAGRANGE'S MEAN VALUE THEOREM                                    |
  |                                                                    |
  |   (i)   f continuous on [a, b]                                     |
  |   (ii)  f differentiable on (a, b)                                 |
  |                                                                    |
  |   =>  there exists c in (a, b) with                                |
  |                                                                    |
  |                       f(b)  -  f(a)                                |
  |            f'(c)  =  ----------------                              |
  |                          b  -  a                                   |
  |                                                                    |
  |   GEOMETRY: somewhere the tangent is PARALLEL to the CHORD.        |
  +====================================================================+
```

| Item | Rolle | Lagrange |
|------|-------|----------|
| Number of conditions | 3 | 2 |
| Extra condition | f(a) = f(b) | none |
| Conclusion | f'(c) = 0 | f'(c) = [f(b)-f(a)]/(b-a) |
| Geometry | horizontal tangent | tangent parallel to chord |
| Everyday meaning | you return to where you started | your speed equals the average speed |

**Functions that are automatically continuous AND differentiable everywhere**
(so conditions (i) and (ii) are one line of work):
```
  polynomials,  sin x,  cos x,  e^x,  and sums/products of these
```
**Watch out for these — they can FAIL a condition:**
```
  |x|        not differentiable at x = 0
  1/x        not continuous at x = 0
  tan x      not continuous at pi/2
  x^(1/3)    not differentiable at x = 0
  log x      needs x > 0
  sqrt(x)    not differentiable at x = 0
```

---

# 8. INCREASING AND DECREASING FUNCTIONS

```
  +====================================================================+
  |                                                                    |
  |     f'(x)  >  0   on an interval    ->   f is INCREASING there     |
  |     f'(x)  <  0   on an interval    ->   f is DECREASING there     |
  |     f'(x)  =  0   on an interval    ->   f is CONSTANT there       |
  |                                                                    |
  |     f'(x) >= 0    ->  non-decreasing / monotonically increasing    |
  |     f'(x) <= 0    ->  non-increasing / monotonically decreasing    |
  |                                                                    |
  +====================================================================+


  THE SIGN LINE METHOD

     1. Find f'(x) and FACTORISE it fully.
     2. Mark the roots of f'(x) = 0 on a number line.
     3. Test one number in each region.
     4. Write the answer as INTERVALS.

                    root1               root2
     ----------------+-------------------+---------------------
        f' sign         f' sign             f' sign
        from test       from test           from test
```

| Formula | When to use |
|---------|-------------|
| f'(x) > 0 | prove a function is increasing |
| f'(x) < 0 | prove a function is decreasing |
| f'(x) > 0 for ALL x | "show f is increasing on R" — argue the sign algebraically |
| Sign line | "find the intervals of increase / decrease" |
| f increasing and f(a) = 0 => f(x) > 0 for x > a | proving inequalities |

---

# 9. MAXIMA AND MINIMA

```
  +====================================================================+
  |   STATIONARY (CRITICAL) POINTS :  solve  f'(x) = 0                 |
  +====================================================================+


  +====================================================================+
  |   FIRST DERIVATIVE TEST                                            |
  |                                                                    |
  |     f' changes  +  ->  -   at c    ->   MAXIMUM at c               |
  |     f' changes  -  ->  +   at c    ->   MINIMUM at c               |
  |     f' does NOT change sign        ->   NEITHER (inflexion)        |
  +====================================================================+


  +====================================================================+
  |   SECOND DERIVATIVE TEST      (use this one in the exam)           |
  |                                                                    |
  |     f'(c) = 0  and  f''(c)  <  0    ->    MAXIMUM at c             |
  |     f'(c) = 0  and  f''(c)  >  0    ->    MINIMUM at c             |
  |     f'(c) = 0  and  f''(c)  =  0    ->    test FAILS, use the      |
  |                                            first derivative test   |
  |                                                                    |
  |     The maximum / minimum VALUE is  f(c) .                         |
  |                                                                    |
  |     REMEMBER: f'' NEGATIVE gives MAXIMUM. The signs feel backwards.|
  +====================================================================+


  +====================================================================+
  |   ABSOLUTE MAX / MIN ON A CLOSED INTERVAL  [a, b]                  |
  |                                                                    |
  |     1. Solve f'(x) = 0; keep only the roots inside [a, b].         |
  |     2. Make the list:  those roots , a , b .                       |
  |     3. Evaluate f at every value in the list.                      |
  |     4. Biggest = absolute maximum. Smallest = absolute minimum.    |
  |                                                                    |
  |     No derivative TEST is needed - just compare the numbers.       |
  +====================================================================+
```

| Formula | When to use |
|---------|-------------|
| f'(x) = 0 | always the first line of any max/min question |
| f''(c) < 0 | conclude MAXIMUM |
| f''(c) > 0 | conclude MINIMUM |
| First derivative test | when f''(c) = 0 or f'' is messy |
| Compare f at endpoints and critical points | "greatest and least value on [a, b]" |

---

# 10. STANDARD OPTIMISATION RESULTS (learn the ANSWERS)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  PROBLEM                                     ANSWER                  |
  |  ------------------------------------------  ----------------------  |
  |  Largest rectangle in a circle of radius r   a SQUARE of side        |
  |                                              r sqrt(2);              |
  |                                              max area = 2 r^2        |
  |                                                                      |
  |  Open box from a square sheet of side a      cut squares of side     |
  |  (squares of side x cut from corners)        x = a/6;                |
  |                                              max volume = 2a^3 / 27  |
  |                                                                      |
  |  Cylinder of given volume,                   h = 2r                  |
  |  least total surface area                    (height = diameter)     |
  |                                                                      |
  |  Cylinder of given surface area,             h = 2r                  |
  |  greatest volume                                                     |
  |                                                                      |
  |  Two positive numbers with a fixed SUM,      the numbers are EQUAL   |
  |  greatest PRODUCT                                                    |
  |                                                                      |
  |  Two positive numbers with a fixed SUM,      the numbers are EQUAL   |
  |  least SUM OF SQUARES                                                |
  |                                                                      |
  |  x + y = S , maximise x^m y^n                x = mS/(m+n)            |
  |                                              y = nS/(m+n)            |
  |                                                                      |
  |  Rectangle of given PERIMETER,               a SQUARE                |
  |  greatest area                                                       |
  |                                                                      |
  |  Rectangle of given AREA,                    a SQUARE                |
  |  least perimeter                                                     |
  |                                                                      |
  |  Cone of greatest volume inscribed           h = 4R/3                |
  |  in a sphere of radius R                                             |
  |                                                                      |
  |  Shortest distance from a point to a curve   minimise d^2, never d   |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 11. DERIVATIVES YOU MUST ALREADY KNOW (quick recall)

```
  d/dx (x^n)      = n x^(n-1)          d/dx (sqrt x)   = 1 / (2 sqrt x)
  d/dx (1/x)      = -1 / x^2           d/dx (e^x)      = e^x
  d/dx (log x)    = 1/x                d/dx (a^x)      = a^x log a
  d/dx (sin x)    = cos x              d/dx (cos x)    = -sin x
  d/dx (tan x)    = sec^2 x            d/dx (cot x)    = -cosec^2 x
  d/dx (sec x)    = sec x tan x        d/dx (cosec x)  = -cosec x cot x

  PRODUCT   (uv)'   = u'v + uv'
                        u'v - uv'
  QUOTIENT  (u/v)'  = -------------
                            v^2
  CHAIN     dy/dx = (dy/du)(du/dx)
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

If you remember nothing else on exam morning, remember these twelve.

```
  +----+------------------------------------------------------------------+
  |  1 |  f(x + dx)  ~  f(x) + f'(x) dx                                   |
  +----+------------------------------------------------------------------+
  |  2 |  percentage error = (dy / y) x 100 ;  for y = x^n it is n times  |
  |    |  the percentage error in x                                       |
  +----+------------------------------------------------------------------+
  |  3 |  dQ/dt = (dQ/dr)(dr/dt)   - differentiate first, substitute last |
  +----+------------------------------------------------------------------+
  |  4 |  slope of tangent  m = dy/dx  at the point                       |
  +----+------------------------------------------------------------------+
  |  5 |  tangent :  y - y1 = m (x - x1)                                  |
  +----+------------------------------------------------------------------+
  |  6 |  normal  :  y - y1 = (-1/m)(x - x1)                              |
  +----+------------------------------------------------------------------+
  |  7 |  subtangent = y1/m      subnormal = y1 m                         |
  +----+------------------------------------------------------------------+
  |  8 |  length of tangent = |y1 sqrt(1+m^2) / m|                        |
  |    |  length of normal  = |y1 sqrt(1+m^2)|                            |
  +----+------------------------------------------------------------------+
  |  9 |  tan(theta) = |(m1 - m2) / (1 + m1 m2)| ;  orthogonal if m1m2=-1 |
  +----+------------------------------------------------------------------+
  | 10 |  Rolle : f(a)=f(b) gives f'(c) = 0                               |
  |    |  Lagrange : f'(c) = [f(b) - f(a)] / (b - a)                      |
  +----+------------------------------------------------------------------+
  | 11 |  f' > 0 increasing ,  f' < 0 decreasing                          |
  +----+------------------------------------------------------------------+
  | 12 |  f'(c)=0 and f''(c)<0 -> MAXIMUM ;  f''(c)>0 -> MINIMUM          |
  +----+------------------------------------------------------------------+
```
