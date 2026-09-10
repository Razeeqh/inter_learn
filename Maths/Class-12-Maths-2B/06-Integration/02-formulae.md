# Integration — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

Every formula here can be checked by differentiating the right-hand side.
Do that once for each one and you will never forget them.

---

# 1. THE STANDARD INTEGRAL TABLE

## 1A. Algebraic

```
   +-----------------------------------------------------------------+
   |                        x^(n + 1)                                |
   |   INT x^n dx      =   -----------  +  c        ( n not = -1 )   |
   |                          n + 1                                  |
   |                                                                 |
   |   INT (1/x) dx    =   log | x |   +  c                          |
   |                                                                 |
   |   INT dx          =   x  +  c                                   |
   |                                                                 |
   |   INT sqrt(x) dx  =   (2/3) x^(3/2)  +  c                       |
   |                                                                 |
   |   INT 1/sqrt(x) dx =  2 sqrt(x)  +  c                           |
   +-----------------------------------------------------------------+
```

## 1B. Exponential

```
   +-----------------------------------------------------------------+
   |   INT e^x dx      =   e^x  +  c                                 |
   |                                                                 |
   |                        a^x                                      |
   |   INT a^x dx      =   ------- + c       ( a > 0 , a not = 1 )   |
   |                       log a                                     |
   +-----------------------------------------------------------------+
```

## 1C. Trigonometric — the six basic ones

| INT ... dx | Answer | When to use |
|-----------|--------|-------------|
| sin x | -cos x + c | direct recall, 2 marks |
| cos x | sin x + c | direct recall, 2 marks |
| sec^2 x | tan x + c | direct recall; also after tan^2 = sec^2 - 1 |
| cosec^2 x | -cot x + c | direct recall; also after cot^2 = cosec^2 - 1 |
| sec x tan x | sec x + c | direct recall |
| cosec x cot x | -cosec x + c | direct recall |

## 1D. Trigonometric — the four LOG ones (derived, often asked)

```
   +-------------------------------------------------------------------+
   |   INT tan x dx    =   - log | cos x |  +  c                       |
   |                   =     log | sec x |  +  c                       |
   |                                                                   |
   |   INT cot x dx    =     log | sin x |  +  c                       |
   |                                                                   |
   |   INT sec x dx    =     log | sec x + tan x |  +  c               |
   |                   =     log | tan( pi/4 + x/2 ) |  +  c           |
   |                                                                   |
   |   INT cosec x dx  =     log | cosec x - cot x |  +  c             |
   |                   =     log | tan( x/2 ) |  +  c                  |
   +-------------------------------------------------------------------+
```

| Memory line | |
|-------------|---|
| tan -> log of sec | "tan gives sec" |
| cot -> log of sin | "cot gives sin" |
| sec -> log of (sec + tan) | both plus |
| cosec -> log of (cosec - cot) | both minus (CO family) |

## 1E. The inverse-trigonometric results

```
   +--------------------------------------------------------------------+
   |          dx                                                        |
   |   INT ------------- =  Sin^-1 x  +  c                              |
   |       sqrt(1 - x^2)                                                |
   |                                                                    |
   |           -dx                                                      |
   |   INT ------------- =  Cos^-1 x  +  c                              |
   |       sqrt(1 - x^2)                                                |
   |                                                                    |
   |          dx                                                        |
   |   INT --------- =  Tan^-1 x  +  c                                  |
   |       1 + x^2                                                      |
   |                                                                    |
   |          -dx                                                       |
   |   INT --------- =  Cot^-1 x  +  c                                  |
   |       1 + x^2                                                      |
   |                                                                    |
   |             dx                                                     |
   |   INT ---------------- =  Sec^-1 x  +  c                           |
   |       x sqrt(x^2 - 1)                                              |
   |                                                                    |
   |            -dx                                                     |
   |   INT ---------------- =  Cosec^-1 x  +  c                         |
   |       x sqrt(x^2 - 1)                                              |
   +--------------------------------------------------------------------+
```

## 1F. Hyperbolic

| INT ... dx | Answer |
|-----------|--------|
| sinh x | cosh x + c |
| cosh x | sinh x + c |
| sech^2 x | tanh x + c |
| cosech^2 x | -coth x + c |
| sech x tanh x | -sech x + c |
| cosech x coth x | -cosech x + c |
| tanh x | log(cosh x) + c |
| coth x | log abs(sinh x) + c |

---

# 2. THE RULES

```
   +-----------------------------------------------------------------+
   |                                                                 |
   |   INT [ f(x) ± g(x) ] dx  =  INT f dx  ±  INT g dx              |
   |                                                                 |
   |   INT k f(x) dx           =  k INT f(x) dx     ( k a NUMBER )   |
   |                                                                 |
   |                               1                                 |
   |   INT f(ax + b) dx        =  --- F(ax + b) + c                  |
   |                               a                                 |
   |                              where INT f(x) dx = F(x)           |
   |                                                                 |
   |   d/dx [ INT f(x) dx ]    =  f(x)          (they undo each other)|
   +-----------------------------------------------------------------+
```

## NOT TRUE — the four traps

```
   INT f(x) g(x) dx  =  (INT f dx)(INT g dx)      <-- FALSE
   INT [f/g] dx      =  (INT f dx)/(INT g dx)     <-- FALSE
   INT x f(x) dx     =  x INT f(x) dx             <-- FALSE (x is not constant)
   INT f(x^2) dx     =  (1/2x) F(x^2)             <-- FALSE (only ax+b works)
```

## The f(ax + b) table you will actually use

| Integral | Answer | When to use |
|----------|--------|-------------|
| INT (ax+b)^n dx | (ax+b)^(n+1) / [ a(n+1) ] + c | any bracket to a power |
| INT 1/(ax+b) dx | (1/a) log abs(ax+b) + c | linear on the bottom |
| INT e^(ax+b) dx | (1/a) e^(ax+b) + c | exponential |
| INT sin(ax+b) dx | -(1/a) cos(ax+b) + c | sin of a linear |
| INT cos(ax+b) dx | (1/a) sin(ax+b) + c | cos of a linear |
| INT sec^2(ax+b) dx | (1/a) tan(ax+b) + c | sec^2 of a linear |
| INT 1/sqrt(ax+b) dx | (2/a) sqrt(ax+b) + c | root on the bottom |

---

# 3. SUBSTITUTION — the shapes

```
   +--------------------------------------------------------------------+
   |                                                                    |
   |          f'(x)                                                     |
   |   INT --------- dx    =   log | f(x) |  +  c                       |
   |          f(x)                                                      |
   |                                                                    |
   |                                 [ f(x) ]^(n+1)                     |
   |   INT [f(x)]^n f'(x) dx    =   ---------------- + c   (n not = -1) |
   |                                      n + 1                         |
   |                                                                    |
   |          f'(x)                                                     |
   |   INT ----------- dx  =   2 sqrt( f(x) )  +  c                     |
   |       sqrt(f(x))                                                   |
   |                                                                    |
   |   INT e^(f(x)) f'(x) dx    =   e^(f(x))  +  c                      |
   |                                                                    |
   |   INT f'(x) sin(f(x)) dx   =   - cos( f(x) )  +  c                 |
   +--------------------------------------------------------------------+
```

| Shape | When to use |
|-------|-------------|
| INT f'/f = log abs f | the top is the derivative of the bottom (check in 3 seconds) |
| INT f^n f' | a bracket/root to a power, with its derivative outside |
| INT f'/sqrt(f) = 2 sqrt f | root on the bottom, derivative on top |
| put t = inside function | anything of the form g(inside) times (inside)' |

## The substitutions worth memorising

| You see | Put | When to use |
|---------|-----|-------------|
| sqrt(a^2 - x^2) | x = a sin(theta) | root with a minus, no derivative around |
| sqrt(a^2 + x^2) | x = a tan(theta) | root with a plus |
| sqrt(x^2 - a^2) | x = a sec(theta) | root with x^2 first |
| sin x and cos x mixed with a constant | t = tan(x/2) | 1/(a + b cos x) family |
| only even powers of tan / sec | t = tan x | 1/(a + b tan^2 x) family |
| x in both numerator and denominator, symmetric | t = 1/x | rare, EAPCET |
| log x present | t = log x | INT (log x)^n / x dx |
| e^x present everywhere | t = e^x | INT dx/(1 + e^x) etc |

---

# 4. INTEGRATION BY PARTS

```
   +--------------------------------------------------------------------+
   |                                                                    |
   |   INT u v dx  =  u ( INT v dx )  -  INT [ u' ( INT v dx ) ] dx     |
   |                                                                    |
   |   Short form: INT u dv  =  uv  -  INT v du                         |
   |                                                                    |
   +--------------------------------------------------------------------+

   CHOOSE  u  BY  I L A T E :

   +---+------------------------+---------------------------+
   | I | Inverse trigonometric  | Sin^-1 x , Tan^-1 x       |
   | L | Logarithmic            | log x                     |
   | A | Algebraic              | x , x^2 , x^3             |
   | T | Trigonometric          | sin x , cos x             |
   | E | Exponential            | e^x , a^x                 |
   +---+------------------------+---------------------------+
        whichever appears FIRST in this list is  u
```

## The special results

```
   +--------------------------------------------------------------------+
   |                                                                    |
   |   INT e^x [ f(x) + f'(x) ] dx      =   e^x f(x)   +  c             |
   |                                                                    |
   |   INT e^(ax) [ a f(x) + f'(x) ] dx =   e^(ax) f(x)  +  c           |
   |                                                                    |
   |                                 e^(ax)                             |
   |   INT e^(ax) sin(bx) dx  =   ----------- ( a sin bx - b cos bx ) +c|
   |                               a^2 + b^2                            |
   |                                                                    |
   |                                 e^(ax)                             |
   |   INT e^(ax) cos(bx) dx  =   ----------- ( a cos bx + b sin bx ) +c|
   |                               a^2 + b^2                            |
   +--------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| INT u dv = uv - INT v du | product of two unrelated functions |
| ILATE | to decide which one is u |
| INT log x dx = x log x - x + c | log alone (write it as log x times 1) |
| INT Sin^-1 x dx = x Sin^-1 x + sqrt(1-x^2) + c | inverse trig alone |
| INT Tan^-1 x dx = x Tan^-1 x - (1/2) log(1+x^2) + c | inverse trig alone |
| INT e^x [f + f'] = e^x f | one bracket piece is the derivative of the other |
| INT e^(ax) sin bx | the "returning integral" — or quote the formula |

## Standard by-parts answers worth knowing cold

| Integral | Answer |
|----------|--------|
| INT x sin x dx | -x cos x + sin x + c |
| INT x cos x dx | x sin x + cos x + c |
| INT x e^x dx | e^x (x - 1) + c |
| INT x^2 e^x dx | e^x (x^2 - 2x + 2) + c |
| INT x log x dx | (x^2/2) log x - x^2/4 + c |
| INT x^2 log x dx | (x^3/3) log x - x^3/9 + c |
| INT e^x sin x dx | (e^x/2)(sin x - cos x) + c |
| INT e^x cos x dx | (e^x/2)(sin x + cos x) + c |

---

# 5. TRIGONOMETRIC TRANSFORMATION FORMULAE

You cannot integrate a PRODUCT of sines and cosines. Convert to a SUM first.

```
   +-------------------------------------------------------------+
   |   2 sin A cos B  =  sin(A + B)  +  sin(A - B)               |
   |   2 cos A sin B  =  sin(A + B)  -  sin(A - B)               |
   |   2 cos A cos B  =  cos(A + B)  +  cos(A - B)               |
   |   2 sin A sin B  =  cos(A - B)  -  cos(A + B)               |
   +-------------------------------------------------------------+
```

## Power-reducing identities

```
   +-------------------------------------------------------------+
   |               1 - cos 2x                    1 + cos 2x      |
   |   sin^2 x =  ------------      cos^2 x  =  ------------     |
   |                   2                             2           |
   |                                                             |
   |               3 sin x - sin 3x              3 cos x + cos 3x|
   |   sin^3 x =  ----------------   cos^3 x =  ----------------|
   |                     4                             4         |
   |                                                             |
   |   tan^2 x  =  sec^2 x - 1        cot^2 x  =  cosec^2 x - 1  |
   |                                                             |
   |   1 - cos x = 2 sin^2 (x/2)      1 + cos x = 2 cos^2 (x/2)  |
   |   sin x     = 2 sin(x/2) cos(x/2)                           |
   +-------------------------------------------------------------+
```

| Situation | Do this |
|-----------|---------|
| sin(mx) cos(nx) , cos(mx) cos(nx) , sin(mx) sin(nx) | transformation formulae |
| sin^2 x , cos^2 x | power-reducing identity |
| sin^3 x , cos^3 x | either identity, or peel one factor and substitute |
| sin^m x cos^n x with an ODD power | peel one factor off, substitute the other |
| sin^m x cos^n x with both EVEN | power-reducing identities |
| 1/(1 ± cos x) , 1/(1 ± sin x) | half-angle identities |
| tan^2 x , cot^2 x | convert to sec^2 / cosec^2 |

---

# 6. THE NINE STANDARD FORMS  (the heart of the chapter)

## Group 1 — no root

```
   +----------------------------------------------------------------+
   |            dx           1            x                         |
   |   INT ------------ =   --- Tan^-1 ( --- )  +  c                |
   |        x^2 + a^2        a            a                         |
   |                                                                |
   |            dx           1          | x - a |                   |
   |   INT ------------ =  ------ log   | ------ |  +  c            |
   |        x^2 - a^2        2a         | x + a |                   |
   |                                                                |
   |            dx           1          | a + x |                   |
   |   INT ------------ =  ------ log   | ------ |  +  c            |
   |        a^2 - x^2        2a         | a - x |                   |
   +----------------------------------------------------------------+
```

## Group 2 — root on the bottom

```
   +----------------------------------------------------------------+
   |             dx                    x                            |
   |   INT --------------- =  Sin^-1 ( --- )  +  c                  |
   |       sqrt(a^2 - x^2)             a                            |
   |                                                                |
   |             dx                                                 |
   |   INT --------------- =  log | x + sqrt(x^2 + a^2) |  +  c     |
   |       sqrt(x^2 + a^2)                                          |
   |                       =  Sinh^-1 ( x/a )  +  c                 |
   |                                                                |
   |             dx                                                 |
   |   INT --------------- =  log | x + sqrt(x^2 - a^2) |  +  c     |
   |       sqrt(x^2 - a^2)                                          |
   |                       =  Cosh^-1 ( x/a )  +  c                 |
   +----------------------------------------------------------------+
```

## Group 3 — root on the top

```
   +---------------------------------------------------------------------+
   |                             x                   a^2         x       |
   |  INT sqrt(a^2 - x^2) dx =  --- sqrt(a^2-x^2) + ---- Sin^-1 ---  + c |
   |                             2                    2          a       |
   |                                                                     |
   |                             x                   a^2                 |
   |  INT sqrt(x^2 + a^2) dx =  --- sqrt(x^2+a^2) + ---- log|x+sqrt(x^2+a^2)| + c
   |                             2                    2                  |
   |                                                                     |
   |                             x                   a^2                 |
   |  INT sqrt(x^2 - a^2) dx =  --- sqrt(x^2-a^2) - ---- log|x+sqrt(x^2-a^2)| + c
   |                             2                    2                  |
   +---------------------------------------------------------------------+
```

## The nine as one lookup table

| Form | Answer | When to use |
|------|--------|-------------|
| 1/(x^2 + a^2) | (1/a) Tan^-1(x/a) | bottom is a sum of squares |
| 1/(x^2 - a^2) | (1/2a) log abs((x-a)/(x+a)) | bottom is difference, x^2 first |
| 1/(a^2 - x^2) | (1/2a) log abs((a+x)/(a-x)) | bottom is difference, a^2 first |
| 1/sqrt(a^2 - x^2) | Sin^-1(x/a) | root with a^2 first |
| 1/sqrt(x^2 + a^2) | log abs(x + sqrt(x^2+a^2)) | root with a plus |
| 1/sqrt(x^2 - a^2) | log abs(x + sqrt(x^2-a^2)) | root with x^2 first |
| sqrt(a^2 - x^2) | (x/2)sqrt(...) + (a^2/2)Sin^-1(x/a) | root on TOP, a^2 first |
| sqrt(x^2 + a^2) | (x/2)sqrt(...) + (a^2/2)log abs(x+sqrt(...)) | root on TOP, plus |
| sqrt(x^2 - a^2) | (x/2)sqrt(...) - (a^2/2)log abs(x+sqrt(...)) | root on TOP, minus |

```
   +-----------------------------------------------------------------+
   |  HOW TO REMEMBER GROUP 3:                                        |
   |                                                                  |
   |     (x/2) x THE ROOT      plus      (a^2/2) x ITS GROUP-2 ANSWER |
   |                                                                  |
   |  The ONLY minus sign in the whole of Group 3 is in x^2 - a^2.    |
   +-----------------------------------------------------------------+
```

---

# 7. COMPLETING THE SQUARE  (turning ANY quadratic into a standard form)

```
   +--------------------------------------------------------------------+
   |                            b            b^2                        |
   |   ax^2 + bx + c  =  a [ (x + ---- )^2 + ---- ]                     |
   |                            2a           ...                        |
   |                                                                    |
   |   Practical recipe:                                                |
   |     1. Take the coefficient of x^2 outside the WHOLE bracket.      |
   |     2. Half the coefficient of x. Square it.                       |
   |     3. Add it and subtract it.                                     |
   |     4. You now have  ( x + h )^2  ±  k^2                           |
   +--------------------------------------------------------------------+
```

| Integral type | Method | When to use |
|---------------|--------|-------------|
| INT dx/(ax^2+bx+c) | complete the square -> Group 1 | no x on top, no root |
| INT dx/sqrt(ax^2+bx+c) | complete the square -> Group 2 | no x on top, root present |
| INT sqrt(ax^2+bx+c) dx | complete the square -> Group 3 | root on top |

## Which Group-1 form do I land on?

```
   ( x + h )^2  +  k^2      ->    Tan^-1
   ( x + h )^2  -  k^2      ->    log | (X - k)/(X + k) |
   k^2  -  ( x + h )^2      ->    log | (k + X)/(k - X) |     [ or Sin^-1 under a root ]

   where  X = x + h
```

---

# 8. NUMERATOR px + q  — the splitting formula

```
   +--------------------------------------------------------------------+
   |                                                                    |
   |     px + q   =   A ( 2ax + b )   +   B                             |
   |                     ^^^^^^^^^                                      |
   |                  derivative of the quadratic ax^2+bx+c             |
   |                                                                    |
   |     Compare x  :   p = 2aA        =>   A = p / 2a                  |
   |     Compare 1  :   q = bA + B     =>   B = q - bA                  |
   |                                                                    |
   +--------------------------------------------------------------------+
```

```
   +----------------------------------------------------------------------+
   |         px + q                    2ax + b                dx          |
   |  INT ------------ dx  =  A INT ------------ dx + B INT ---------     |
   |      ax^2+bx+c                 ax^2+bx+c               ax^2+bx+c     |
   |                                                                      |
   |                       =  A log|ax^2+bx+c|  +  B x (Group 1 answer)   |
   |                                                                      |
   |                                                                      |
   |         px + q                        2ax + b                 dx     |
   |  INT --------------- dx = A INT --------------- dx + B INT ----------|
   |      sqrt(ax^2+bx+c)            sqrt(ax^2+bx+c)            sqrt(...) |
   |                                                                      |
   |                       = 2A sqrt(ax^2+bx+c) + B x (Group 2 answer)    |
   +----------------------------------------------------------------------+
```

| Type | Answer shape | When to use |
|------|--------------|-------------|
| (px+q)/(ax^2+bx+c) | A log(quadratic) + B (Tan^-1 or log of a ratio) | linear over quadratic |
| (px+q)/sqrt(ax^2+bx+c) | 2A sqrt(quadratic) + B (Sin^-1 or log) | linear over root |
| (px+q) sqrt(ax^2+bx+c) | A x (2/3)(quad)^(3/2) + B x Group 3 | rarer, 7 marks |

---

# 9. PARTIAL FRACTIONS

```
   +--------------------------------------------------------------------+
   |  STEP 0  If degree(top) >= degree(bottom):  DIVIDE FIRST.          |
   |  STEP 1  Factorise the bottom.                                     |
   |  STEP 2  Write the correct shape.                                  |
   |  STEP 3  Multiply out, substitute smart values of x, find A,B,C.   |
   |  STEP 4  Integrate each small fraction.                            |
   +--------------------------------------------------------------------+
```

| Factor present | Shape you must write |
|----------------|----------------------|
| (x - a) | A/(x - a) |
| (x - a)(x - b) | A/(x - a) + B/(x - b) |
| (x - a)(x - b)(x - c) | A/(x-a) + B/(x-b) + C/(x-c) |
| (x - a)^2 | A/(x - a) + B/(x - a)^2 |
| (x - a)^3 | A/(x-a) + B/(x-a)^2 + C/(x-a)^3 |
| (x - a)(x^2 + b^2) | A/(x-a) + (Bx + C)/(x^2 + b^2) |
| (x^2 + a^2)^2 | (Ax+B)/(x^2+a^2) + (Cx+D)/(x^2+a^2)^2 |

## The little integrals you end up with

```
        A
   INT ------- dx      =   A log | x - a |  +  c
       x - a

        B                     -B
   INT --------- dx    =   ---------  +  c
       (x-a)^2               x - a

       Bx + C            B                     C          x
   INT --------- dx  =  --- log(x^2+a^2)  +   --- Tan^-1 ---  +  c
       x^2 + a^2         2                     a          a
```

> **COVER-UP SHORTCUT (for distinct linear factors only):**
> To find the constant over `(x - a)`, cover `(x - a)` in the original fraction
> and substitute `x = a` into everything that is left. That number IS the
> constant. Saves 2-3 minutes in the exam.

---

# 10. THE t = tan(x/2) SUBSTITUTION

```
   +--------------------------------------------------------------------+
   |                                                                    |
   |   Put   t = tan ( x / 2 )                                          |
   |                                                                    |
   |                 2t                     1 - t^2                     |
   |     sin x  =  ---------      cos x  =  ---------                   |
   |               1 + t^2                  1 + t^2                     |
   |                                                                    |
   |                 2t                       2 dt                      |
   |     tan x  =  ---------      dx     =  ---------                   |
   |               1 - t^2                   1 + t^2                    |
   |                                                                    |
   +--------------------------------------------------------------------+
```

| Integral type | After substituting you get | When to use |
|---------------|----------------------------|-------------|
| INT dx/(a + b cos x) | INT 2 dt / [ (a+b) + (a-b)t^2 ] | only cos x present |
| INT dx/(a + b sin x) | INT 2 dt / [ a t^2 + 2b t + a ] | only sin x present |
| INT dx/(a sin x + b cos x + c) | INT 2 dt / [ (c-b)t^2 + 2a t + (b+c) ] | both present |

Then finish with **completing the square** (Section 7) or **partial
fractions** (Section 9), whichever the quadratic in t needs.

## The alternative for a sin x + b cos x

```
   a sin x + b cos x  =  r sin( x + A )

        where  r = sqrt(a^2 + b^2)   and   tan A = b / a

   so    INT dx/(a sin x + b cos x)  =  (1/r) INT cosec(x + A) dx

                                     =  (1/r) log | tan( (x + A)/2 ) | + c
```

---

# 11. REDUCTION FORMULAE

```
   +---------------------------------------------------------------------+
   |                        - sin^(n-1)x cos x       n-1                 |
   |  INT sin^n x dx    =  --------------------- + ----- INT sin^(n-2)x dx
   |                                n                n                   |
   |                                                                     |
   |                          cos^(n-1)x sin x       n-1                 |
   |  INT cos^n x dx    =  -------------------- + ----- INT cos^(n-2)x dx|
   |                                n                n                   |
   |                                                                     |
   |                        tan^(n-1) x                                  |
   |  INT tan^n x dx    =  ------------- -  INT tan^(n-2) x dx           |
   |                           n - 1                                     |
   |                                                                     |
   |                        - cot^(n-1) x                                |
   |  INT cot^n x dx    =  -------------- -  INT cot^(n-2) x dx          |
   |                           n - 1                                     |
   |                                                                     |
   |                       sec^(n-2)x tan x      n-2                     |
   |  INT sec^n x dx    = ------------------ + ----- INT sec^(n-2) x dx  |
   |                            n - 1           n-1                      |
   |                                                                     |
   |                      - cosec^(n-2)x cot x    n-2                    |
   |  INT cosec^n x dx  = -------------------- + ----- INT cosec^(n-2)x dx
   |                            n - 1             n-1                    |
   +---------------------------------------------------------------------+
```

| When to use |
|-------------|
| The question says "obtain a reduction formula" — derive it by parts (7 marks) |
| A high power like sin^4 x, sec^5 x, tan^6 x appears |
| Chapter 7 (definite integrals) — the same formulae give you Walli's rule |

---

# 12. QUICK-FIRE RESULTS THAT SAVE TIME

| Integral | Answer |
|----------|--------|
| INT dx/(1 + cos x) | tan(x/2) + c |
| INT dx/(1 - cos x) | -cot(x/2) + c |
| INT dx/(1 + sin x) | tan(x/2 - pi/4) + c , equivalently -2/(1 + tan(x/2)) + c |
| INT (1 + tan^2 x) dx | tan x + c |
| INT tan^2 x dx | tan x - x + c |
| INT cot^2 x dx | -cot x - x + c |
| INT sin 2x dx | -(1/2) cos 2x + c |
| INT dx/(x^2 + x) | log abs(x/(x+1)) + c |
| INT dx/(e^x + 1) | x - log(1 + e^x) + c |
| INT e^x/(1 + e^x) dx | log(1 + e^x) + c |
| INT 2^x dx | 2^x / log 2 + c |
| INT (sin x + cos x)^2 dx | x - (1/2) cos 2x + c |
| INT dx/(x(x^n + 1)) | (1/n) log abs( x^n/(x^n + 1) ) + c |
| INT f'(x) e^(f(x)) dx | e^(f(x)) + c |

---

# THE 15 FORMULAE TO WRITE ON YOUR PALM

```
   1.   INT x^n dx  =  x^(n+1)/(n+1) + c            [ n not = -1 ]

   2.   INT (1/x) dx  =  log |x| + c

   3.   INT f(ax+b) dx  =  (1/a) F(ax+b) + c

   4.   INT f'(x)/f(x) dx  =  log |f(x)| + c

   5.   INT [f(x)]^n f'(x) dx  =  [f(x)]^(n+1)/(n+1) + c

   6.   INT f'(x)/sqrt(f(x)) dx  =  2 sqrt(f(x)) + c

   7.   INT u v dx  =  u INT v dx  -  INT ( u' INT v dx ) dx    [ ILATE ]

   8.   INT e^x [ f(x) + f'(x) ] dx  =  e^x f(x) + c

   9.   INT dx/(x^2 + a^2)  =  (1/a) Tan^-1 (x/a) + c

  10.   INT dx/(x^2 - a^2)  =  (1/2a) log | (x-a)/(x+a) | + c

  11.   INT dx/sqrt(a^2 - x^2)  =  Sin^-1 (x/a) + c

  12.   INT dx/sqrt(x^2 ± a^2)  =  log | x + sqrt(x^2 ± a^2) | + c

  13.   INT sqrt(a^2 - x^2) dx = (x/2)sqrt(a^2-x^2) + (a^2/2) Sin^-1(x/a) + c

  14.   px + q  =  A (2ax + b) + B          [ split against the DERIVATIVE ]

  15.   t = tan(x/2)  =>  sin x = 2t/(1+t^2) , cos x = (1-t^2)/(1+t^2) ,
                          dx = 2dt/(1+t^2)
```

```
   +--------------------------------------------------------------+
   |  AND THE ONE RULE THAT IS NOT A FORMULA:                      |
   |                                                               |
   |          ALWAYS  WRITE  + c                                   |
   +--------------------------------------------------------------+
```
