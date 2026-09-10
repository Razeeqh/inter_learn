# Differentiation — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

Everywhere below, **log x means natural logarithm** (base e), and c is a constant.

---

# 1. THE DEFINITION (first principles / ab initio)

```
  +--------------------------------------------------------------+
  |                                                              |
  |                        f(x + h) - f(x)                       |
  |     f'(x)   =   lim   -----------------                      |
  |                h -> 0         h                              |
  |                                                              |
  |                                                              |
  |                        f(a + h) - f(a)              f(x)-f(a)|
  |     f'(a)   =   lim   -----------------  =   lim   ----------|
  |                h -> 0         h             x -> a   x - a   |
  |                                                              |
  +--------------------------------------------------------------+

   MEANING:   f'(a) = slope of the TANGENT to y = f(x) at x = a
                    = tan(theta), theta = angle the tangent makes with +x axis
```

| Formula | When to use |
|---------|-------------|
| lim h->0 [ f(x+h) - f(x) ] / h | the question says "from first principles" / "ab initio" / "by definition" |
| lim x->a [ f(x) - f(a) ] / (x - a) | derivative at ONE given point |
| Left derivative = Right derivative | "is f differentiable at x = a?" |
| differentiable ==> continuous | true. The converse is FALSE |

---

# 2. STANDARD LIMITS NEEDED IN FIRST-PRINCIPLES PROOFS

```
  +----------------------------------------------------------------+
  |                                                                |
  |        sin t                      tan t                        |
  |  lim  -------  =  1        lim   -------  =  1                 |
  | t->0     t                t->0      t                          |
  |                                                                |
  |        e^t - 1                    a^t - 1                      |
  |  lim  ---------  =  1      lim   ---------  =  log a           |
  | t->0     t                t->0      t                          |
  |                                                                |
  |        log(1 + t)                 (1 + t)^(1/t)                |
  |  lim  ------------  =  1   lim   -------------  =  e           |
  | t->0       t              t->0                                 |
  |                                                                |
  |        t^n - a^n                                               |
  |  lim  -----------  =  n a^(n-1)                                |
  | t->a     t - a                                                 |
  |                                                                |
  +----------------------------------------------------------------+
```

| Limit | Used to prove |
|-------|---------------|
| sin t / t -> 1 | derivative of sin x, cos x, tan x |
| (e^t - 1)/t -> 1 | derivative of e^x |
| (a^t - 1)/t -> log a | derivative of a^x |
| log(1+t)/t -> 1 | derivative of log x |
| (t^n - a^n)/(t - a) -> n a^(n-1) | derivative of x^n |

---

# 3. ALGEBRAIC FUNCTIONS

```
  +-----------------------------------------------------------+
  |                                                           |
  |   d                     d                                 |
  |  ---- ( c )  =  0      ---- ( x )  =  1                   |
  |   dx                    dx                                |
  |                                                           |
  |   d                                                       |
  |  ---- ( x^n )  =  n x^(n-1)          <-- the master rule  |
  |   dx                                                      |
  |                                                           |
  |   d  (  1  )        -1            d                  1    |
  |  ---- ( --- )  =  ------         ---- sqrt(x)  =  --------|
  |   dx  (  x  )      x^2            dx              2 sqrt x|
  |                                                           |
  |   d  (  1  )       -n                                     |
  |  ---- ( --- )  =  ------                                  |
  |   dx  ( x^n )     x^(n+1)                                 |
  |                                                           |
  +-----------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| d/dx (c) = 0 | any pure number, and also things like log 5, arctan 3, e^2 |
| d/dx (x^n) = n x^(n-1) | works for ALL n: positive, negative, fractional |
| d/dx (1/x^n): rewrite as x^(-n) first | any reciprocal power |
| d/dx sqrt(x): rewrite as x^(1/2) first | any root |
| d/dx (kx + c) = k | straight lines |

> **Rule for weak students:** before differentiating, rewrite every root as a
> fractional power and every 1/x^n as x^(-n). Then ONE formula does all of them.

---

# 4. EXPONENTIAL AND LOGARITHMIC FUNCTIONS

```
  +-------------------------------------------------------------+
  |                                                             |
  |   d                        d                                |
  |  ---- ( e^x )  =  e^x     ---- ( a^x )  =  a^x . log a      |
  |   dx                       dx                               |
  |                                                             |
  |   d                1       d                       1        |
  |  ---- ( log x ) = ---     ---- ( log_a x ) = -----------    |
  |   dx               x       dx                 x . log a     |
  |                                                             |
  |   d                                                         |
  |  ---- ( e^(ax+b) )  =  a . e^(ax+b)                         |
  |   dx                                                        |
  |                                                             |
  |   d                          a                              |
  |  ---- ( log(ax + b) )  =  --------                          |
  |   dx                       ax + b                           |
  |                                                             |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| d/dx e^x = e^x | the only function equal to its own derivative |
| d/dx a^x = a^x log a | base is a NUMBER, power contains x (e.g. 2^x, 5^x) |
| d/dx x^n = n x^(n-1) | base contains x, power is a NUMBER |
| **neither of the two above** | base AND power both contain x — use LOGARITHMIC differentiation |
| d/dx log x = 1/x | natural log |
| d/dx log_a x = 1/(x log a) | when a base is written, e.g. log base 10 |

> **The three-way test that trips everyone up:**
> `x^5` -> power rule. `5^x` -> a^x log a. `x^x` -> log differentiation.
> Look at where the x is BEFORE you pick a rule.

---

# 5. THE SIX TRIGONOMETRIC FUNCTIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   d                            d                             |
  |  ---- ( sin x )  =   cos x    ---- ( cos x )  =  - sin x     |
  |   dx                           dx                            |
  |                                                              |
  |   d                            d                             |
  |  ---- ( tan x )  =  sec^2 x   ---- ( cot x )  = - cosec^2 x  |
  |   dx                           dx                            |
  |                                                              |
  |   d                                 d                        |
  |  ---- ( sec x ) = sec x tan x      ---- ( cosec x )          |
  |   dx                                dx  = - cosec x cot x    |
  |                                                              |
  +--------------------------------------------------------------+

   MEMORY HOOK:  every "CO-" function (cos, cot, cosec) picks up a MINUS.
                 The other three are all positive.
```

| Function | Derivative | When to use |
|----------|------------|-------------|
| sin x | cos x | direct |
| cos x | -sin x | direct |
| tan x | sec^2 x | also = 1 + tan^2 x if the options are in tan |
| cot x | -cosec^2 x | also = -(1 + cot^2 x) |
| sec x | sec x tan x | direct |
| cosec x | -cosec x cot x | direct |
| sin(ax + b) | a cos(ax + b) | angle is not plain x |
| cos(ax + b) | -a sin(ax + b) | angle is not plain x |
| tan(ax + b) | a sec^2(ax + b) | angle is not plain x |
| sin^n x | n sin^(n-1) x . cos x | a power OF a trig function |

> **TRAP:** sin^2 x means (sin x)^2, so its derivative is 2 sin x cos x = sin 2x.
> It does NOT mean sin(x^2), whose derivative is 2x cos(x^2). Read carefully.

---

# 6. THE SIX INVERSE TRIGONOMETRIC FUNCTIONS

```
  +---------------------------------------------------------------+
  |                                                               |
  |   d                      1          d                   -1    |
  |  ---- arcsin x  =  -------------   ---- arccos x = ---------- |
  |   dx               sqrt(1 - x^2)    dx             sqrt(1-x^2)|
  |                                                               |
  |   d                    1            d                   -1    |
  |  ---- arctan x  =  ---------       ---- arccot x  =  ---------|
  |   dx                1 + x^2         dx                1 + x^2 |
  |                                                               |
  |   d                        1                                  |
  |  ---- arcsec x  =  ---------------------                      |
  |   dx                abs(x) sqrt(x^2 - 1)                      |
  |                                                               |
  |   d                          -1                               |
  |  ---- arccosec x  =  ---------------------                    |
  |   dx                  abs(x) sqrt(x^2 - 1)                    |
  |                                                               |
  +---------------------------------------------------------------+
```

| Function | Derivative | Valid for | When to use |
|----------|------------|-----------|-------------|
| arcsin x | 1 / sqrt(1 - x^2) | -1 < x < 1 | direct |
| arccos x | -1 / sqrt(1 - x^2) | -1 < x < 1 | direct |
| arctan x | 1 / (1 + x^2) | all x | direct |
| arccot x | -1 / (1 + x^2) | all x | direct |
| arcsec x | 1 / ( abs(x) sqrt(x^2 - 1) ) | abs(x) > 1 | direct |
| arccosec x | -1 / ( abs(x) sqrt(x^2 - 1) ) | abs(x) > 1 | direct |

**Free 2-mark facts (these sums are CONSTANTS, so they differentiate to 0):**

```
   arcsin x  +  arccos x     =  pi/2
   arctan x  +  arccot x     =  pi/2
   arcsec x  +  arccosec x   =  pi/2
```

---

# 7. HYPERBOLIC FUNCTIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |            e^x - e^(-x)                    e^x + e^(-x)      |
  |  sinh x = --------------      cosh x =  --------------       |
  |                 2                             2              |
  |                                                              |
  |  cosh^2 x  -  sinh^2 x  =  1                                 |
  |                                                              |
  +--------------------------------------------------------------+

  +--------------------------------------------------------------+
  |                                                              |
  |   d                             d                            |
  |  ---- sinh x  =  cosh x        ---- cosh x  =  sinh x        |
  |   dx                            dx                           |
  |                                       ^^^^^^ PLUS, not minus |
  |   d                             d                            |
  |  ---- tanh x  =  sech^2 x      ---- coth x  =  - cosech^2 x  |
  |   dx                            dx                           |
  |                                                              |
  |   d                             d                            |
  |  ---- sech x  = - sech x tanh x  ---- cosech x               |
  |   dx                             dx  = - cosech x coth x     |
  |                                                              |
  +--------------------------------------------------------------+
```

| Function | Derivative | Compare with trig |
|----------|------------|-------------------|
| sinh x | cosh x | same shape as sin -> cos |
| cosh x | **+ sinh x** | trig has a MINUS here, hyperbolic does NOT |
| tanh x | sech^2 x | same shape |
| coth x | -cosech^2 x | same shape |
| sech x | -sech x tanh x | same shape |
| cosech x | -cosech x coth x | same shape |

> **TRAP:** d/dx (cosh x) = + sinh x. This is the single most-tested sign
> difference between trig and hyperbolic functions.

---

# 8. INVERSE HYPERBOLIC FUNCTIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   d                     1            d                  1    |
  |  ---- sinh^-1 x = -------------     ---- cosh^-1 x = ---------
  |   dx              sqrt(x^2 + 1)      dx            sqrt(x^2-1)
  |                                                              |
  |   d                     1            d                  1    |
  |  ---- tanh^-1 x = ---------         ---- coth^-1 x = ------- |
  |   dx               1 - x^2           dx              1 - x^2 |
  |                                                              |
  |   d                       -1                                 |
  |  ---- sech^-1 x  =  ------------------                       |
  |   dx                 x sqrt(1 - x^2)                         |
  |                                                              |
  |   d                          -1                              |
  |  ---- cosech^-1 x  =  ----------------------                 |
  |   dx                  abs(x) sqrt(1 + x^2)                   |
  |                                                              |
  +--------------------------------------------------------------+
```

| Function | Derivative | Valid for |
|----------|------------|-----------|
| sinh^-1 x | 1 / sqrt(x^2 + 1) | all x |
| cosh^-1 x | 1 / sqrt(x^2 - 1) | x > 1 |
| tanh^-1 x | 1 / (1 - x^2) | abs(x) < 1 |
| coth^-1 x | 1 / (1 - x^2) | abs(x) > 1 |
| sech^-1 x | -1 / ( x sqrt(1 - x^2) ) | 0 < x < 1 |
| cosech^-1 x | -1 / ( abs(x) sqrt(1 + x^2) ) | x not 0 |

**Log forms (occasionally asked):**

```
   sinh^-1 x  =  log ( x + sqrt(x^2 + 1) )
   cosh^-1 x  =  log ( x + sqrt(x^2 - 1) )
   tanh^-1 x  =  (1/2) log ( (1 + x) / (1 - x) )
```

---

# 9. THE FOUR RULES

## 9.1 Sum, difference, constant multiple

```
  +----------------------------------------------------------+
  |                                                          |
  |   ( u + v )'  =  u'  +  v'                               |
  |   ( u - v )'  =  u'  -  v'                               |
  |   ( k u   )'  =  k u'              (k a constant)        |
  |                                                          |
  +----------------------------------------------------------+
```

## 9.2 PRODUCT rule

```
  +----------------------------------------------------------+
  |                                                          |
  |    d                    dv           du                  |
  |   ---- ( u v )  =  u . ----   +  v . ----                |
  |    dx                   dx            dx                 |
  |                                                          |
  |         ( u v )'  =  u' v  +  u v'                       |
  |                                                          |
  |   THREE factors:                                         |
  |         ( u v w )'  =  u'vw  +  uv'w  +  uvw'            |
  |                                                          |
  +----------------------------------------------------------+
```

Say it: *"first times derivative of second, plus second times derivative of first."*

## 9.3 QUOTIENT rule

```
  +----------------------------------------------------------+
  |                                                          |
  |             du          dv                               |
  |        v . ----  -  u . ----                             |
  |   d ( u )   dx           dx                              |
  |  --- ( - ) = -----------------                           |
  |   dx ( v )         v^2                                   |
  |                                                          |
  |         ( u/v )'  =  ( u' v  -  u v' ) / v^2             |
  |                                                          |
  +----------------------------------------------------------+
```

Say it: *"bottom times derivative of top, MINUS top times derivative of bottom,
all over bottom squared."*

## 9.4 CHAIN rule (function of a function)

```
  +----------------------------------------------------------+
  |                                                          |
  |    dy         dy        du                               |
  |   ----  =    ----  x   ----          y = f(u), u = g(x)  |
  |    dx         du        dx                               |
  |                                                          |
  |    d                                                     |
  |   ---- [ f( g(x) ) ]  =  f'( g(x) )  x  g'(x)            |
  |    dx                                                    |
  |                                                          |
  |   THREE layers:                                          |
  |    dy      dy     du     dv                              |
  |   ---- =  ---- x ---- x ----                             |
  |    dx      du     dv     dx                              |
  |                                                          |
  +----------------------------------------------------------+
```

| Rule | Recognise it by | When to use |
|------|-----------------|-------------|
| Sum / difference | terms joined by + or - | almost every question, first step |
| Constant multiple | a plain number in front | pull it outside and forget it |
| **Product** | two functions MULTIPLIED | x^2 sin x, e^x log x, x tan x |
| **Quotient** | one function DIVIDED by another | sin x / x, (2x+3)/(3x-5) |
| **Chain** | one function INSIDE another | sin 3x, e^(x^2), (2x+1)^7, log(sin x) |

> **TRAP:** (uv)' is NOT u'v'. And (u/v)' is NOT u'/v'. Multiplying or dividing
> the two derivatives is the commonest wrong answer in the entire chapter.

---

# 10. CHAIN-RULE SHORTCUTS WORTH MEMORISING

| Function | Derivative |
|----------|------------|
| (ax + b)^n | n a (ax + b)^(n-1) |
| sqrt(ax + b) | a / ( 2 sqrt(ax + b) ) |
| e^(ax + b) | a e^(ax + b) |
| a^(f(x)) | a^(f(x)) . log a . f'(x) |
| log( f(x) ) | f'(x) / f(x) |
| sin(ax + b) | a cos(ax + b) |
| cos(ax + b) | -a sin(ax + b) |
| tan(ax + b) | a sec^2(ax + b) |
| sin^n x | n sin^(n-1) x . cos x |
| e^(f(x)) | e^(f(x)) . f'(x) |
| sqrt( f(x) ) | f'(x) / ( 2 sqrt( f(x) ) ) |
| arctan( f(x) ) | f'(x) / ( 1 + [f(x)]^2 ) |
| arcsin( f(x) ) | f'(x) / sqrt( 1 - [f(x)]^2 ) |

**The single most useful one:**

```
  +-----------------------------------------------+
  |    d                    f'(x)                 |
  |   ---- [ log f(x) ] =  --------               |
  |    dx                    f(x)                 |
  |                                               |
  |   "derivative of the inside, over the inside" |
  +-----------------------------------------------+
```

---

# 11. IMPLICIT DIFFERENTIATION

```
  +-------------------------------------------------------------+
  |                                                             |
  |   Given F(x, y) = 0 , differentiate BOTH sides w.r.t. x.    |
  |                                                             |
  |    d                                                        |
  |   ---- ( y^n )      =  n y^(n-1) . dy/dx                    |
  |    dx                                                       |
  |                                                             |
  |    d                                                        |
  |   ---- ( sin y )    =  cos y . dy/dx                        |
  |    dx                                                       |
  |                                                             |
  |    d                                                        |
  |   ---- ( x y )      =  x . dy/dx  +  y      (product rule)  |
  |    dx                                                       |
  |                                                             |
  |    d                                                        |
  |   ---- ( e^y )      =  e^y . dy/dx                          |
  |    dx                                                       |
  |                                                             |
  |   Then COLLECT the dy/dx terms, factor, and divide.         |
  |                                                             |
  +-------------------------------------------------------------+
```

**Shortcut (fast, safe for objective questions only):**

```
                dy         (dF/dx)          partial derivative w.r.t x
   F(x,y)=0 =>  ---- =  -  --------    with y treated as a constant
                dx         (dF/dy)          and vice-versa
```

| Situation | What to do |
|-----------|------------|
| x and y are mixed together and y cannot be isolated | implicit differentiation |
| a term like xy, x^2 y^3, sin(xy) appears | product rule PLUS the dy/dx factor |
| answer contains both x and y | that is normal and correct |

**Standard results worth knowing:**

```
   x^2 + y^2 = a^2       ->   dy/dx = - x / y

   x^3 + y^3 = 3axy      ->   dy/dx = ( a y - x^2 ) / ( y^2 - a x )

   ax^2 + 2hxy + by^2 = 0  ->  dy/dx = - (ax + hy) / (hx + by)

   x^y = y^x             ->   dy/dx = y ( x log y - y ) / ( x ( y log x - x ) )
```

---

# 12. PARAMETRIC DIFFERENTIATION

```
  +-------------------------------------------------------------+
  |                                                             |
  |   x = f(t)   and   y = g(t)                                 |
  |                                                             |
  |                dy/dt                                        |
  |     dy/dx  =  --------          provided dx/dt is not 0     |
  |                dx/dt                                        |
  |                                                             |
  |                                                             |
  |     d2y        d  (  dy  )        1                         |
  |    -----  =   ---- ( ---- )  x  -------                     |
  |     dx^2       dt  (  dx  )      dx/dt                      |
  |                                                             |
  +-------------------------------------------------------------+
```

> **TRAP:** d2y/dx2 is NOT (d2y/dt2) divided by (d2x/dt2). Differentiate dy/dx
> with respect to **t**, then divide by dx/dt.

**Standard parametric results:**

| Curve | dy/dx |
|-------|-------|
| x = a cos t , y = a sin t | -cot t |
| x = a cos^3 t , y = a sin^3 t | -tan t |
| x = a(t - sin t) , y = a(1 - cos t) | cot(t/2) |
| x = at^2 , y = 2at | 1 / t |
| x = a sec t , y = b tan t | (b / a) cosec t |
| x = a(cos t + t sin t) , y = a(sin t - t cos t) | tan t |
| x = 3cos t - 2cos^3 t , y = 3sin t - 2sin^3 t | cot t |

---

# 13. LOGARITHMIC DIFFERENTIATION

```
  +-------------------------------------------------------------+
  |                                                             |
  |   USE IT WHEN:                                              |
  |     (a)  y = [ f(x) ] ^ [ g(x) ]    both base and power     |
  |          contain x                                          |
  |     (b)  y is a long product / quotient / root              |
  |                                                             |
  |   STEP 1   log y = log ( expression )                       |
  |   STEP 2   break it up with the log laws                    |
  |   STEP 3   differentiate:  LHS becomes (1/y) . dy/dx        |
  |   STEP 4   multiply by y                                    |
  |   STEP 5   replace y by the original expression             |
  |                                                             |
  +-------------------------------------------------------------+

   LOG LAWS YOU NEED:
      log(AB)   = log A + log B
      log(A/B)  = log A - log B
      log(A^n)  = n log A
      log e     = 1
```

**The general result, worth memorising:**

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   y = [f(x)]^g(x)                                                    |
  |                                                                      |
  |   dy          g(x)  (                       f'(x)  )                 |
  |  ---- = [f(x)]^     ( g'(x) . log f(x) + g(x) ----- )                |
  |   dx                (                         f(x)  )                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Function | Derivative |
|----------|------------|
| x^x | x^x ( 1 + log x ) |
| x^(1/x) | x^(1/x) ( 1 - log x ) / x^2 |
| (log x)^x | (log x)^x [ log(log x) + 1/(log x) ] |
| (sin x)^x | (sin x)^x [ log(sin x) + x cot x ] |
| x^(sin x) | x^(sin x) [ cos x . log x + (sin x)/x ] |
| x^(tan x) | x^(tan x) [ sec^2 x . log x + (tan x)/x ] |
| (sin x)^(cos x) | (sin x)^(cos x) [ cos x cot x - sin x log(sin x) ] |

> **TRAP:** you cannot take the log of a SUM. If y = u + v where both are
> power-type, differentiate u and v SEPARATELY and add.

---

# 14. DIFFERENTIATING ONE FUNCTION W.R.T. ANOTHER

```
  +--------------------------------------------------+
  |                                                  |
  |    d u        du/dx                              |
  |   ------  =  --------                            |
  |    d v        dv/dx                              |
  |                                                  |
  |   "differentiate the first w.r.t. x,             |
  |    differentiate the second w.r.t. x,            |
  |    then divide."                                 |
  |                                                  |
  +--------------------------------------------------+
```

| Question wording | What it means |
|------------------|---------------|
| "differentiate f(x) with respect to g(x)" | find (df/dx) / (dg/dx) |
| "find du/dv where u = ..., v = ..." | the same thing |

---

# 15. SUBSTITUTIONS FOR INVERSE TRIG EXPRESSIONS

```
  +---------------------------------------+------------------------+
  |  IF THE EXPRESSION CONTAINS ...       |  SUBSTITUTE            |
  +---------------------------------------+------------------------+
  |  1 + x^2   or  2x/(1 - x^2)           |  x = tan(theta)        |
  |  sqrt(1 - x^2)  or  3x - 4x^3         |  x = sin(theta)        |
  |  4x^3 - 3x  or  sqrt((1-x)/(1+x))     |  x = cos(theta)        |
  |  a^2 - x^2                            |  x = a sin(theta)      |
  |  a^2 + x^2                            |  x = a tan(theta)      |
  |  x^2 - a^2                            |  x = a sec(theta)      |
  |  sqrt(a^2 - x^2) / sqrt(a^2 + x^2)    |  x = a cos(2 theta)    |
  +---------------------------------------+------------------------+
```

**The standard simplifications — learn the RESULT, show the working in the exam:**

| Expression | Simplifies to | Derivative |
|------------|---------------|------------|
| arctan( 2x / (1 - x^2) ) | 2 arctan x | 2 / (1 + x^2) |
| arcsin( 2x / (1 + x^2) ) | 2 arctan x | 2 / (1 + x^2) |
| arccos( (1 - x^2)/(1 + x^2) ) | 2 arctan x | 2 / (1 + x^2) |
| arctan( (1 - x^2)/(2x) ) | pi/2 - 2 arctan x | -2 / (1 + x^2) |
| arcsin( 3x - 4x^3 ) | 3 arcsin x | 3 / sqrt(1 - x^2) |
| arccos( 4x^3 - 3x ) | 3 arccos x | -3 / sqrt(1 - x^2) |
| arctan( sqrt((1-x)/(1+x)) ) | (1/2) arccos x | -1 / ( 2 sqrt(1 - x^2) ) |
| arctan( (sqrt(1+x^2) - 1)/x ) | (1/2) arctan x | 1 / ( 2 (1 + x^2) ) |
| arctan( (a - x)/(1 + ax) ) | arctan a - arctan x | -1 / (1 + x^2) |
| arctan( (cos x)/(1 + sin x) ) | pi/4 - x/2 | -1/2 |
| arcsin( 2x sqrt(1 - x^2) ) | 2 arcsin x | 2 / sqrt(1 - x^2) |

**Trig identities that power the substitutions:**

```
   tan 2t = 2 tan t / (1 - tan^2 t)      sin 2t = 2 tan t / (1 + tan^2 t)

   cos 2t = (1 - tan^2 t)/(1 + tan^2 t)  = 1 - 2 sin^2 t  =  2 cos^2 t - 1

   sin 3t = 3 sin t - 4 sin^3 t          cos 3t = 4 cos^3 t - 3 cos t

   1 - cos 2t = 2 sin^2 t                1 + cos 2t = 2 cos^2 t
```

---

# 16. SECOND AND HIGHER ORDER DERIVATIVES

```
  +----------------------------------------------------------+
  |                                                          |
  |          dy               d2y      d ( dy )              |
  |   y1 =  ----       y2 =  -----  = --- ( ---- )           |
  |          dx               dx^2     dx ( dx )             |
  |                                                          |
  |   IMPLICIT:  find y1, differentiate again, then          |
  |              SUBSTITUTE y1 back in                       |
  |                                                          |
  |   PARAMETRIC: y2 = [ d/dt ( dy/dx ) ] / ( dx/dt )        |
  |                                                          |
  +----------------------------------------------------------+
```

**n-th derivatives (occasionally asked in objective papers):**

| Function | n-th derivative |
|----------|-----------------|
| e^(ax) | a^n e^(ax) |
| sin(ax) | a^n sin( ax + n pi / 2 ) |
| cos(ax) | a^n cos( ax + n pi / 2 ) |
| x^m (m a positive integer, n <= m) | m(m-1)...(m-n+1) x^(m-n) |
| 1 / (ax + b) | (-1)^n n! a^n / (ax + b)^(n+1) |
| log(ax + b) | (-1)^(n-1) (n-1)! a^n / (ax + b)^n |

**Standard "prove the relation" results — these repeat every year:**

| If y = | Then |
|--------|------|
| a e^(mx) + b e^(-mx) | y2 = m^2 y |
| a cos(nx) + b sin(nx) | y2 + n^2 y = 0 |
| a sin(mx) + b cos(mx) | y2 + m^2 y = 0 |
| e^( a arcsin x ) | (1 - x^2) y2 - x y1 - a^2 y = 0 |
| ( x + sqrt(1 + x^2) )^m | (1 + x^2) y2 + x y1 - m^2 y = 0 |
| a cos(log x) + b sin(log x) | x^2 y2 + x y1 + y = 0 |
| ( arcsin x )^2 | (1 - x^2) y2 - x y1 - 2 = 0 |
| x^x | y2 = y1^2 / y + y / x |

---

# THE 15 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else, learn these. They cover the majority of the marks.

```
  +----+---------------------------------------------------------------+
  | 1  |  d/dx ( x^n )  =  n x^(n-1)                                   |
  +----+---------------------------------------------------------------+
  | 2  |  d/dx ( e^x )  =  e^x        and   d/dx ( a^x ) = a^x log a   |
  +----+---------------------------------------------------------------+
  | 3  |  d/dx ( log x )  =  1/x                                       |
  +----+---------------------------------------------------------------+
  | 4  |  d/dx ( sin x ) = cos x      d/dx ( cos x ) = - sin x         |
  +----+---------------------------------------------------------------+
  | 5  |  d/dx ( tan x ) = sec^2 x    d/dx ( cot x ) = - cosec^2 x     |
  +----+---------------------------------------------------------------+
  | 6  |  d/dx ( sec x ) = sec x tan x                                 |
  |    |  d/dx ( cosec x ) = - cosec x cot x                           |
  +----+---------------------------------------------------------------+
  | 7  |  d/dx ( arcsin x ) = 1 / sqrt(1 - x^2)                        |
  +----+---------------------------------------------------------------+
  | 8  |  d/dx ( arctan x ) = 1 / (1 + x^2)                            |
  +----+---------------------------------------------------------------+
  | 9  |  d/dx ( sinh x ) = cosh x    d/dx ( cosh x ) = + sinh x       |
  +----+---------------------------------------------------------------+
  | 10 |  PRODUCT     ( u v )'  =  u' v  +  u v'                       |
  +----+---------------------------------------------------------------+
  | 11 |  QUOTIENT    ( u/v )'  =  ( u' v  -  u v' ) / v^2             |
  +----+---------------------------------------------------------------+
  | 12 |  CHAIN       dy/dx  =  (dy/du) x (du/dx)                      |
  +----+---------------------------------------------------------------+
  | 13 |  PARAMETRIC  dy/dx  =  (dy/dt) / (dx/dt)                      |
  +----+---------------------------------------------------------------+
  | 14 |  LOG-DIFF    y = [f]^[g]  ->  log y = g log f , then          |
  |    |              (1/y) dy/dx = ...                                |
  +----+---------------------------------------------------------------+
  | 15 |  d/dx [ log f(x) ]  =  f'(x) / f(x)                           |
  +----+---------------------------------------------------------------+
```
