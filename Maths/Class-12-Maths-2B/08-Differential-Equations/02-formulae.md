# Differential Equations — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. ORDER AND DEGREE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   ORDER   =  order of the HIGHEST derivative present             |
  |                                                                  |
  |   DEGREE  =  the POWER of that highest derivative,               |
  |              AFTER the equation is made free of radicals         |
  |              and fractional powers                               |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Rule | When to use |
|------|-------------|
| Clear all square roots and fractional powers FIRST | every order/degree question |
| Order ignores powers: d2y/dx2 beats (dy/dx)^9 | when a low derivative has a big power |
| Degree is not defined if a derivative sits inside sin, cos, tan, log or e^( ) | "degree not defined" questions |
| Order is ALWAYS defined, even when degree is not | never write "order not defined" |
| Order of the D.E. formed = number of arbitrary constants | formation questions |
| Number of arbitrary constants in the general solution = order | theory 2-markers |

**Quick reference table:**

```
  +---------------------------------------------+-------+---------+
  |  EQUATION                                   | ORDER | DEGREE  |
  +---------------------------------------------+-------+---------+
  |  dy/dx + y = x                              |   1   |    1    |
  |  (dy/dx)^4 + y = 0                          |   1   |    4    |
  |  d2y/dx2 + 3(dy/dx)^2 = 5y                  |   2   |    1    |
  |  (d2y/dx2)^3 + (dy/dx)^5 = 0                |   2   |    3    |
  |  sqrt(1 + (dy/dx)^2) = d2y/dx2              |   2   |    2    |
  |  [1 + (dy/dx)^2]^(3/2) = a d2y/dx2          |   2   |    2    |
  |  [(d2y/dx2)^2 + (dy/dx)^3]^(6/5) = 6y       |   2   |   12    |
  |  d2y/dx2 = [1 + (dy/dx)^2]^(1/3)            |   2   |    3    |
  |  d2y/dx2 + sin(dy/dx) = 0                   |   2   |  none   |
  |  dy/dx + log(dy/dx) = x                     |   1   |  none   |
  |  (d3y/dx3)^2 - 3(dy/dx)^2 - e^x = 4         |   3   |    2    |
  +---------------------------------------------+-------+---------+
```

---

# 2. FORMING A DIFFERENTIAL EQUATION

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   1.  Count the arbitrary constants.  Call it  n .               |
  |   2.  Differentiate the given relation  n  times.                |
  |   3.  Eliminate the n constants between the n + 1 equations.     |
  |   4.  The result has ORDER n and contains NO letters.            |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Given family | Differential equation | When it appears |
|--------------|-----------------------|-----------------|
| y = c x | x dy/dx - y = 0 | lines through origin |
| x^2 + y^2 = a^2 | x + y dy/dx = 0 | circles about origin |
| y = c e^(m x) (c only) | dy/dx = m y | growth curves |
| y = A e^x + B e^(-x) | d2y/dx2 - y = 0 | 4-mark standard |
| y = A cos(n x) + B sin(n x) | d2y/dx2 + n^2 y = 0 | SHM family |
| y = a x^2 + b x | x^2 y'' - 2x y' + 2y = 0 | 4-mark standard |
| x y = a e^x + b e^(-x) | x y'' + 2 y' - x y = 0 | AP favourite |
| y = c (x - c)^2 | (y')^3 = 4 x y y' - 8 y^2 | order 1, degree 3 |
| (x - a)^2 + (y - b)^2 = r^2 | order 2 (2 constants) | circles, fixed radius |

**Shortcut worth memorising:** if part of the derivative equals the original
expression, substitute it straight back. Example: y = c e^(3x) gives
y' = 3 c e^(3x) = 3y at once.

---

# 3. TYPES OF FIRST-ORDER EQUATION — THE RECOGNITION TABLE

```
  +--------------------------+--------------------------+-------------------+
  |  FORM YOU SEE            |  NAME                    |  WHAT TO DO       |
  +--------------------------+--------------------------+-------------------+
  |  f(y) dy = g(x) dx       |  Variables separable     |  integrate        |
  |  dy/dx = f(x) g(y)       |  Variables separable     |  divide, integrate|
  |  dy/dx = f(ax + by + c)  |  Reducible to separable  |  v = ax + by + c  |
  |  same degree everywhere  |  Homogeneous             |  y = v x          |
  |  (ax+by+c)/(Ax+By+C)     |  Non-homogeneous         |  see section 7    |
  |  dy/dx + P y = Q         |  Linear in y             |  IF = e^(INT Pdx) |
  |  dx/dy + P x = Q         |  Linear in x             |  IF = e^(INT Pdy) |
  |  dy/dx + P y = Q y^n     |  Bernoulli               |  v = y^(1-n)      |
  +--------------------------+--------------------------+-------------------+
```

---

# 4. VARIABLES SEPARABLE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    dy                                                            |
  |    --  =  f(x) . g(y)                                            |
  |    dx                                                            |
  |                                                                  |
  |         dy                                                       |
  |    -----------   =   f(x) dx                                     |
  |        g(y)                                                      |
  |                                                                  |
  |             dy                                                   |
  |    INT  ---------   =   INT  f(x) dx   +   c                     |
  |            g(y)                                                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Situation | Move | When to use |
|-----------|------|-------------|
| e^(x + y) appears | split as e^x · e^y | any exponential D.E. |
| e^(x - y) appears | split as e^x · e^(-y) | same |
| Answer will be full of logs | write the constant as log c | keeps the answer tidy |
| log|y| = log|x| + log c | rewrite as y = c x | final tidy-up |
| Denominator is quadratic in y | complete the square, then tan^-1 | (y^2+y+1) type |

**The tidy-up conversions you will need constantly:**

```
  log A  +  log B   =   log (A B)

  log A  -  log B   =   log (A / B)

  n log A           =   log (A^n)

  e^( log A )       =   A                <-- the single most useful line
```

---

# 5. REDUCIBLE TO VARIABLES SEPARABLE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    dy                                                            |
  |    --  =  f ( a x  +  b y  +  c )                                |
  |    dx                                                            |
  |                                                                  |
  |    PUT      v  =  a x  +  b y  +  c                              |
  |                                                                  |
  |             dv           dy                                      |
  |             --  =  a  +  b --                                    |
  |             dx           dx                                      |
  |                                                                  |
  |             dy       1   ( dv       )                            |
  |             --  =   ---  ( --  -  a )                            |
  |             dx       b   ( dx       )                            |
  |                                                                  |
  |    RESULT   dv/dx  =  a  +  b f(v)     <-- always separates      |
  |                                                                  |
  |                 dv                                               |
  |    SO      INT --------------   =   x   +   c                    |
  |                a + b f(v)                                        |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Equation | Substitution | When to use |
|----------|--------------|-------------|
| dy/dx = (x + y)^2 | v = x + y | bracket squared |
| dy/dx = sin(x + y) | v = x + y | trig of a bracket |
| dy/dx = (4x + 6y + 5)/(2x + 3y + 4) | v = 2x + 3y | the SAME bracket top and bottom |
| dy/dx = cos(x + y) + sin(x + y) | v = x + y | sum of trig functions |

**The linear-over-linear division trick** (you will need it every single time):

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    p v  +  q            p        (  q  -  p s / r )              |
  |   -----------   =      ---   +   ------------------              |
  |    r v  +  s            r            r v  +  s                   |
  |                                                                  |
  |   In words: force the top to look like the bottom, then the      |
  |   leftover is a constant over a linear term  ->  a log.          |
  |                                                                  |
  |   Example:   2v + 5        2(v + 2) + 1                1         |
  |             --------  =   --------------   =   2  +  -----      |
  |               v + 2            v + 2                 v + 2       |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# 6. HOMOGENEOUS EQUATIONS

## Recognising one

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   TEST 1:  every term has the SAME total degree in x and y       |
  |            e.g.  x^2 + 3xy + y^2   (all degree 2)                |
  |                                                                  |
  |   TEST 2:  replace x by k x and y by k y.                        |
  |            If all the k's cancel, it is homogeneous.             |
  |                                                                  |
  |   TEST 3:  the whole right side can be written using y/x only    |
  |            e.g.  dy/dx = y/x + tan(y/x)                          |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The method

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    PUT      y  =  v x          (so   v = y / x)                  |
  |                                                                  |
  |             dy            dv                                     |
  |             --  =  v  +  x --          <-- the product rule      |
  |             dx            dx                                     |
  |                                                                  |
  |    The x's cancel.  You get                                      |
  |                                                                  |
  |                dv                                                |
  |         v  +  x --  =  F(v)                                      |
  |                dx                                                |
  |                                                                  |
  |             dv                                                   |
  |            ------      =     dx / x       <-- SEPARATED          |
  |            F(v) - v                                              |
  |                                                                  |
  |    FINALLY  put   v  =  y / x   back.                            |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Alternative | When to use |
|-------------|-------------|
| Put x = v y instead of y = v x | when the equation is tidier in x/y, e.g. dx/dy = ... |
| Look for f'(v)/f(v) in the separated integral | gives an instant log — very common |
| Answer often comes out as x^n × (expression in v) = C | expect this shape |

**Standard results worth recognising:**

```
  +---------------------------------+-------------------------------+
  |  EQUATION                       |  SOLUTION                     |
  +---------------------------------+-------------------------------+
  |  2xy dy/dx = x^2 + y^2          |  x^2 - y^2 = C x              |
  |  dy/dx = y/x + tan(y/x)         |  sin(y/x) = C x               |
  |  dy/dx = (x - y)/(x + y)        |  x^2 - 2xy - y^2 = C          |
  |  x dy - y dx = sqrt(x^2+y^2) dx |  y + sqrt(x^2+y^2) = C x^2    |
  |  (x^3+3xy^2)dx+(y^3+3x^2y)dy=0  |  x^4 + 6x^2y^2 + y^4 = C      |
  +---------------------------------+-------------------------------+
```

---

# 7. NON-HOMOGENEOUS EQUATIONS

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    dy       a x  +  b y  +  c                                    |
  |    --  =  ---------------------                                  |
  |    dx       A x  +  B y  +  C                                    |
  |                                                                  |
  |    THE TEST:      compare   a / A   with   b / B                 |
  |                   (equivalently: is  a B  -  A b  =  0 ?)        |
  |                                                                  |
  +------------------------------------------------------------------+
```

## CASE 1 — a/A is NOT equal to b/B  (lines intersect)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   1.  Solve   a x + b y + c = 0                                  |
  |               A x + B y + C = 0     giving   x = h ,  y = k      |
  |                                                                  |
  |   2.  Put     x = X + h ,   y = Y + k                            |
  |               so   dy/dx  =  dY/dX                               |
  |                                                                  |
  |   3.  The equation becomes                                       |
  |                                                                  |
  |          dY       a X  +  b Y                                    |
  |          --  =  ---------------      <-- HOMOGENEOUS             |
  |          dX       A X  +  B Y                                    |
  |                                                                  |
  |   4.  Solve it with  Y = v X .                                   |
  |                                                                  |
  |   5.  Put back  X = x - h ,  Y = y - k .                         |
  |                                                                  |
  +------------------------------------------------------------------+
```

## CASE 2 — a/A EQUALS b/B  (lines parallel)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   1.  Put   v  =  a x  +  b y                                    |
  |                                                                  |
  |   2.  Then  A x + B y  is just a MULTIPLE of v.                  |
  |                                                                  |
  |   3.  dv/dx  =  a  +  b dy/dx , so substitute and the equation   |
  |       becomes SEPARABLE in v and x.                              |
  |                                                                  |
  |   4.  Put back  v = a x + b y .                                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Situation | Action | When to use |
|-----------|--------|-------------|
| a/A ≠ b/B | shift origin to (h, k) | Case 1 |
| a/A = b/B | put v = ax + by | Case 2 |
| Solving for h, k gives a contradiction like 0 = 5 | you are in Case 2, not Case 1 | safety check |
| c = 0 AND C = 0 | it was already homogeneous — no shift needed | saves 3 minutes |

---

# 8. LINEAR EQUATIONS — THE BIG ONE

```
  +==================================================================+
  ||                                                                ||
  ||       dy                                                       ||
  ||       --   +   P y   =   Q          P, Q are functions of x    ||
  ||       dx                                                       ||
  ||                                                                ||
  ||       INTEGRATING FACTOR                                       ||
  ||                                                                ||
  ||            IF   =   e^( INT P dx )                             ||
  ||                                                                ||
  ||       SOLUTION                                                 ||
  ||                                                                ||
  ||            y . (IF)   =   INT   Q . (IF) dx   +   c            ||
  ||                                                                ||
  ||       "y times IF equals integral of Q times IF"               ||
  ||                                                                ||
  +==================================================================+
```

**Step zero, never skip it:** make the coefficient of dy/dx equal to **1** before
you read off P and Q.

## The integrating factors you must recognise instantly

```
  +---------------------------+--------------------------------------+
  |  P                        |  IF  =  e^(INT P dx)                 |
  +---------------------------+--------------------------------------+
  |  k  (constant)            |  e^(k x)                             |
  |  1 / x                    |  x                                   |
  |  - 1 / x                  |  1 / x                               |
  |  n / x                    |  x^n                                 |
  |  tan x                    |  sec x                               |
  |  - tan x                  |  cos x                               |
  |  cot x                    |  sin x                               |
  |  2x / (1 + x^2)           |  1 + x^2                             |
  |  1 / (1 + x^2)            |  e^(tan^-1 x)                        |
  |  1 / (x log x)            |  log x                               |
  |  sec x                    |  sec x + tan x                       |
  +---------------------------+--------------------------------------+
```

**Why these work:** whenever INT P dx turns into a logarithm, use
**e^(log A) = A**. The integrating factor is simply whatever was inside the log.

## Worked standard results

```
  +------------------------------------+-----------------------------------+
  |  EQUATION                          |  SOLUTION                         |
  +------------------------------------+-----------------------------------+
  |  dy/dx + y/x = x^2                 |  y x = x^4/4 + c                  |
  |  dy/dx + y tan x = sin 2x          |  y = c cos x - 2 cos^2 x          |
  |  (1+x^2) dy/dx + 2xy = 4x^2        |  y(1+x^2) = (4x^3)/3 + c          |
  |  dy/dx - 3y = e^(2x)               |  y = c e^(3x) - e^(2x)            |
  |  cos x dy/dx + y sin x = sec^2 x   |  y sec x = tan x + (tan^3 x)/3 + c|
  +------------------------------------+-----------------------------------+
```

---

# 9. LINEAR IN x  (the flipped form)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |       dx                                                         |
  |       --   +   P x   =   Q          P, Q are functions of y      |
  |       dy                                                         |
  |                                                                  |
  |            IF   =   e^( INT P dy )                               |
  |                                                                  |
  |            x . (IF)   =   INT   Q . (IF) dy   +   c              |
  |                                                                  |
  |       Remember:      dx / dy   =   1 / ( dy / dx )               |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Trigger | Action | When to use |
|---------|--------|-------------|
| The equation is degree 1 in x but ugly in y | flip to dx/dy | (x + y + 1) dy/dx = 1 |
| Contains tan^-1 y, log y, e^y | flip to dx/dy | (1+y^2)dx = (tan^-1 y - x) dy |
| dy/dx = 1 / (something linear in x) | flip to dx/dy | very common trigger |

```
  +------------------------------------------+-------------------------------+
  |  EQUATION                                |  SOLUTION                     |
  +------------------------------------------+-------------------------------+
  |  (x + y + 1) dy/dx = 1                   |  x + y + 2 = c e^y            |
  |  (1 + y^2) dx = (tan^-1 y - x) dy        |  x = tan^-1 y - 1             |
  |                                          |      + c e^(-tan^-1 y)        |
  +------------------------------------------+-------------------------------+
```

---

# 10. BERNOULLI'S EQUATION

```
  +------------------------------------------------------------------+
  |                                                                  |
  |       dy                                                         |
  |       --   +   P y   =   Q y^n        ( n not 0 , n not 1 )      |
  |       dx                                                         |
  |                                                                  |
  |   STEP 1   Divide every term by  y^n :                           |
  |                                                                  |
  |               -n  dy              (1-n)                          |
  |              y    --   +   P y          =   Q                    |
  |                   dx                                             |
  |                                                                  |
  |   STEP 2   Put   v  =  y^(1 - n)                                 |
  |                                                                  |
  |               dv                 -n  dy                          |
  |               --  =  ( 1 - n )  y    --                          |
  |               dx                     dx                          |
  |                                                                  |
  |   STEP 3       1     dv                                          |
  |             ------   --   +   P v   =   Q      <-- LINEAR in v   |
  |             1 - n    dx                                          |
  |                                                                  |
  |   STEP 4   Solve by the integrating-factor method,               |
  |            then put  v = y^(1 - n)  back.                        |
  |                                                                  |
  +------------------------------------------------------------------+
```

| n | Substitution v | Derivative link |
|---|----------------|-----------------|
| 2 | v = 1/y | dv/dx = -(1/y^2) dy/dx |
| 3 | v = 1/y^2 | dv/dx = -(2/y^3) dy/dx |
| 1/2 | v = sqrt(y) | dv/dx = (1/(2 sqrt y)) dy/dx |
| -1 | v = y^2 | dv/dx = 2y dy/dx |

## Bernoulli in disguise — other reducing substitutions

```
  +--------------------------------------+---------------------------+
  |  IF THE EQUATION CONTAINS            |  PUT                      |
  +--------------------------------------+---------------------------+
  |  sec^2 y (dy/dx) , or sin 2y / cos^2 |  v = tan y                |
  |  cos y (dy/dx) with sin y elsewhere  |  v = sin y                |
  |  (1/y)(dy/dx) with log y elsewhere   |  v = log y                |
  |  e^y (dy/dx) with e^y elsewhere      |  v = e^y                  |
  +--------------------------------------+---------------------------+
```

```
  +------------------------------------------+-------------------------------+
  |  EQUATION                                |  SOLUTION                     |
  +------------------------------------------+-------------------------------+
  |  dy/dx + y/x = y^2                       |  1/y = x (c - log|x|)         |
  |  x dy/dx + y = 2 x^2 y^2                 |  1/y = c x - 2 x^2            |
  |  dy/dx + x sin 2y = x^3 cos^2 y          |  tan y = (x^2-1)/2            |
  |                                          |          + c e^(-x^2)         |
  +------------------------------------------+-------------------------------+
```

---

# 11. THE INTEGRALS YOU WILL ACTUALLY USE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   INT x^n dx          =   x^(n+1)/(n+1) + c     ( n not -1 )     |
  |                                                                  |
  |   INT (1/x) dx        =   log | x | + c                          |
  |                                                                  |
  |   INT e^x dx          =   e^x + c                                |
  |                                                                  |
  |   INT e^(ax) dx       =   e^(ax) / a + c                         |
  |                                                                  |
  |   INT sin x dx        =   - cos x + c                            |
  |                                                                  |
  |   INT cos x dx        =   sin x + c                              |
  |                                                                  |
  |   INT sec^2 x dx      =   tan x + c                              |
  |                                                                  |
  |   INT tan x dx        =   log | sec x | + c                      |
  |                                                                  |
  |   INT cot x dx        =   log | sin x | + c                      |
  |                                                                  |
  |   INT sec x dx        =   log | sec x + tan x | + c              |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The three shape-recognition integrals (these do most of the work)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |         f '(x)                                                   |
  |   INT  --------- dx   =   log | f(x) |  +  c                     |
  |          f(x)                                                    |
  |                                                                  |
  |   -> use whenever the TOP is the derivative of the BOTTOM.       |
  |      Example:  INT 2x/(1+x^2) dx = log(1+x^2)                    |
  |                                                                  |
  +------------------------------------------------------------------+

  +------------------------------------------------------------------+
  |                                                                  |
  |          dx           1        -1  ( x )                         |
  |   INT ---------  =   ---  tan     ( - )  +  c                    |
  |       x^2 + a^2       a           ( a )                          |
  |                                                                  |
  |   -> after completing the square in a quadratic denominator.     |
  |                                                                  |
  +------------------------------------------------------------------+

  +------------------------------------------------------------------+
  |                                                                  |
  |            dx                                                    |
  |   INT --------------  =  log | x + sqrt(x^2 + a^2) |  +  c       |
  |       sqrt(x^2+a^2)                                              |
  |                                                                  |
  |            dx              -1 ( x )                              |
  |   INT --------------  =  sin  ( - )  +  c                        |
  |       sqrt(a^2-x^2)           ( a )                              |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Integration by parts — used in almost every 7-mark linear question

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   INT u dv   =   u v   -   INT v du                              |
  |                                                                  |
  |   Choose u by  I L A T E                                         |
  |                Inverse, Log, Algebraic, Trig, Exponential        |
  |                                                                  |
  |   Two results you will use again and again:                      |
  |                                                                  |
  |       INT t e^t dt        =  ( t - 1 ) e^t  +  c                 |
  |                                                                  |
  |       INT x log x dx      =  (x^2/2) log x  -  x^2/4  +  c       |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# 12. EXACT DIFFERENTIALS — INSTANT ANSWERS

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    x dy  +  y dx           =    d ( x y )                        |
  |                                                                  |
  |    x dy  -  y dx                   ( y )                         |
  |    ---------------         =    d  ( - )                         |
  |         x^2                        ( x )                         |
  |                                                                  |
  |    y dx  -  x dy                   ( x )                         |
  |    ---------------         =    d  ( - )                         |
  |         y^2                        ( y )                         |
  |                                                                  |
  |    x dx  +  y dy           =    (1/2) d ( x^2 + y^2 )            |
  |                                                                  |
  |    x dy  -  y dx                       -1 ( y )                  |
  |    ---------------         =    d  tan    ( - )                  |
  |      x^2 + y^2                            ( x )                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Equation | Instant answer | When to use |
|----------|----------------|-------------|
| x dy + y dx = 0 | x y = c | spot the product rule |
| x dy - y dx = 0 | y = c x | divide by x^2 first |
| x dx + y dy = 0 | x^2 + y^2 = c | circles |

---

# 13. APPLICATIONS

## Growth and decay

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     dN                                                           |
  |     --  =  k N            ->        N   =   N0 e^( k t )         |
  |     dt                                                           |
  |                                                                  |
  |     k > 0  growth        k < 0  decay                            |
  |     N0  =  the amount at time t = 0                              |
  |                                                                  |
  |     HALF LIFE  T :        1/2  =  e^( - k T )                    |
  |                                                                  |
  |                                    log 2                         |
  |                            k  =  ---------                       |
  |                                      T                           |
  |                                                                  |
  |     DOUBLING TIME  T :     k T  =  log 2                         |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Newton's law of cooling

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     dT                                                           |
  |     --  =  - k ( T  -  S )                                       |
  |     dt                                                           |
  |                                                                  |
  |     T  =  temperature of the body                                |
  |     S  =  temperature of the surroundings (constant)             |
  |                                                                  |
  |     SOLUTION:                                                    |
  |                                                                  |
  |         T  -  S   =   ( T0  -  S )  e^( - k t )                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Trick | When to use |
|-------|-------------|
| Never find k as a decimal — keep e^(-kt0) as a fraction | 2-stage cooling problems |
| e^(-2kt) = [e^(-kt)]^2 | "after a further 20 minutes" questions |
| Use log 2 = 0.693, log 3 = 1.099 | numeric answers |

---

# THE 10 THINGS TO WRITE ON YOUR PALM

```
  +----+-------------------------------------------------------------------+
  |  1 |  CLEAR the radicals BEFORE reading the degree.                     |
  +----+-------------------------------------------------------------------+
  |  2 |  Order of the formed D.E.  =  number of arbitrary constants.       |
  +----+-------------------------------------------------------------------+
  |  3 |  Homogeneous:   y = v x   and   dy/dx = v + x dv/dx .              |
  +----+-------------------------------------------------------------------+
  |  4 |  Non-homogeneous test:  a/A vs b/B.                                |
  |    |  Different -> shift origin.   Same -> put v = a x + b y.           |
  +----+-------------------------------------------------------------------+
  |  5 |  LINEAR:  IF = e^(INT P dx)   and   y(IF) = INT Q(IF) dx + c .     |
  +----+-------------------------------------------------------------------+
  |  6 |  e^(log A) = A .  This turns every log into an easy IF.            |
  +----+-------------------------------------------------------------------+
  |  7 |  IF for tan x is sec x. IF for 1/x is x. IF for 2x/(1+x^2) is      |
  |    |  1 + x^2. Those three cover most exam questions.                   |
  +----+-------------------------------------------------------------------+
  |  8 |  Bernoulli:  divide by y^n , then  v = y^(1-n) .                   |
  +----+-------------------------------------------------------------------+
  |  9 |  INT f'(x)/f(x) dx = log|f(x)| .  Look for it in every integral.   |
  +----+-------------------------------------------------------------------+
  | 10 |  ADD  + c .  PUT  v = y/x  BACK.  Every single time.               |
  +----+-------------------------------------------------------------------+
```
