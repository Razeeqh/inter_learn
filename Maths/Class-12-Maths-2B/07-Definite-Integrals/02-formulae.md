# Definite Integrals — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use each formula — that is what the exam
actually tests.

Everything here can be checked. Differentiate the antiderivatives. Test the
properties on a simple function like f(x) = x. Do that once and you will
never doubt them.

---

# 1. THE DEFINITION AND THE FUNDAMENTAL THEOREM

## 1A. As the limit of a sum (first principles)

```
   +==================================================================+
   |                                                                  |
   |   INT from a to b of f(x) dx                                     |
   |                                                                  |
   |     =  lim   h [ f(a) + f(a+h) + f(a+2h) + ... + f(a+(n-1)h) ]   |
   |       n->inf                                                     |
   |                                                                  |
   |                        n-1                                       |
   |     =  lim      h  x   SUM   f( a + r h )                        |
   |       n->inf           r=0                                       |
   |                                                                  |
   |             b - a                                                |
   |   with  h = -------      and      n h  =  b - a                  |
   |               n                                                  |
   +==================================================================+
```

| Formula | When to use |
|---|---|
| the limit-of-a-sum definition above | ONLY when the question says "from first principles" / "as the limit of a sum" |
| 1 + 2 + ... + (n-1) = (n-1)n/2 | when f is linear |
| 1^2 + ... + (n-1)^2 = (n-1)n(2n-1)/6 | when f is quadratic |
| 1^3 + ... + (n-1)^3 = [(n-1)n/2]^2 | when f is cubic |
| GP sum, plus lim (e^h - 1)/h = 1 | when f is e^x or a^x |

## 1B. The Fundamental Theorem

```
   +==================================================================+
   |                                                                  |
   |   If  F'(x) = f(x)  and f is continuous on [a, b] , then         |
   |                                                                  |
   |                                          b                       |
   |     INT from a to b of f(x) dx  =  [ F(x) ]   =  F(b) - F(a)     |
   |                                          a                       |
   |                                                                  |
   |   TOP MINUS BOTTOM.   And NO  + c .                              |
   +==================================================================+
```

```
   +-----------------------------------------------------------------+
   |            d    [   x            ]                              |
   |           ---   [ INT  f(t) dt   ]   =   f( x )                 |
   |            dx   [   a            ]                              |
   +-----------------------------------------------------------------+
```

```
   +-----------------------------------------------------------------+
   |   The letter does not matter (dummy variable):                  |
   |                                                                 |
   |   INT a to b of f(x) dx = INT a to b of f(t) dt = INT a to b f(u) du
   +-----------------------------------------------------------------+
```

---

# 2. THE TWO TECHNIQUES

## 2A. Substitution — CHANGE THE LIMITS

```
   +==================================================================+
   |                                                                  |
   |   If  t = g(x)  then                                             |
   |                                                                  |
   |     INT from a to b of f( g(x) ) g'(x) dx                        |
   |                                                                  |
   |                     =  INT from g(a) to g(b) of f(t) dt          |
   |                                                                  |
   |   NEW VARIABLE  ->  NEW LIMITS.  Then never return to x.         |
   +==================================================================+
```

| Substitution | New limits when x runs ... | Note |
|---|---|---|
| t = sin x | 0 to pi/2 gives t : 0 to 1 | dt = cos x dx |
| t = cos x | 0 to pi/2 gives t : 1 to 0 | limits reverse; the minus sign cancels it |
| t = tan x | 0 to pi/4 gives t : 0 to 1 | dt = sec^2 x dx |
| t = tan(x/2) | 0 to pi/2 gives t : 0 to 1 | for 1/(a + b cos x) |
| t = log x | 1 to e gives t : 0 to 1 | dt = dx/x |
| t = e^x | 0 to 1 gives t : 1 to e | dt = e^x dx |
| t = x^2 + 1 | 0 to 1 gives t : 1 to 2 | dt = 2x dx |
| x = a sin(theta) | 0 to a gives theta : 0 to pi/2 | for sqrt(a^2 - x^2) |
| x = a tan(theta) | 0 to a gives theta : 0 to pi/4 | for a^2 + x^2 |

## 2B. Integration by parts

```
   +==================================================================+
   |                                                                  |
   |                          [            ] b        b (  du       ) |
   |   INT a to b of u v dx = [ u  INT v dx]     - INT  ( --- INT v ) dx
   |                          [            ] a        a (  dx      )  |
   |                                                                  |
   |   ILATE for choosing u :                                         |
   |     I nverse trig  >  L og  >  A lgebraic  >  T rig  >  E xp     |
   +==================================================================+
```

| Integral | Result | Check |
|---|---|---|
| INT 0 to pi/2 of x sin x dx | 1 | [-x cos x + sin x] |
| INT 0 to pi/2 of x cos x dx | pi/2 - 1 | [x sin x + cos x] |
| INT 0 to 1 of x e^x dx | 1 | [x e^x - e^x] |
| INT 1 to e of log x dx | 1 | [x log x - x] |
| INT 0 to 1 of Tan^-1 x dx | pi/4 - (1/2) log 2 | [x Tan^-1 x - (1/2)log(1+x^2)] |
| INT 0 to 1 of Sin^-1 x dx | pi/2 - 1 | [x Sin^-1 x + sqrt(1-x^2)] |

---

# 3. THE PROPERTIES — THE HEART OF THE CHAPTER

## 3A. All seven in one box

```
   +==================================================================+
   |                                                                  |
   |  P1   INT a to b f(x) dx  =  - INT b to a f(x) dx                |
   |       INT a to a f(x) dx  =  0                                   |
   |                                                                  |
   |  P2   INT a to b f  =  INT a to c f  +  INT c to b f             |
   |                                                                  |
   |  P3   INT 0 to a f(x) dx  =  INT 0 to a f(a - x) dx              |
   |                                                                  |
   |  P4   INT a to b f(x) dx  =  INT a to b f(a + b - x) dx          |
   |                                                                  |
   |  P5   INT 0 to 2a f(x) dx = INT 0 to a f(x) + INT 0 to a f(2a-x) |
   |                                                                  |
   |         if f(2a - x) =  f(x)   ->   = 2 INT 0 to a f(x) dx       |
   |         if f(2a - x) = -f(x)   ->   = 0                          |
   |                                                                  |
   |  P6   INT -a to a f(x) dx  =  2 INT 0 to a f(x) dx  if f EVEN    |
   |                            =  0                     if f ODD     |
   |                                                                  |
   |  P7   f periodic with period T :                                 |
   |         INT a to a+T f  =  INT 0 to T f                          |
   |         INT 0 to nT  f  =  n INT 0 to T f                        |
   |                                                                  |
   +==================================================================+
```

## 3B. The "when to use" table — read this one twice

| Property | The TRIGGER (what you see) | What you do |
|---|---|---|
| P1 | limits came out reversed after substitution | flip them, change the sign |
| P2 | a modulus, or a piecewise function, or `[x]` | split at the break point |
| P3 | limits `0 to a`, ugly symmetric-looking integrand | write I twice, ADD |
| P4 | limits `a to b`, and f(x) + f(a+b-x) looks nice | replace x by (a+b-x), ADD |
| P5 | limits `0 to 2a` | compute f(2a - x); double it or kill it |
| P6 | limits `-a to a` | test f(-x); even doubles, odd dies |
| P7 | limits are a whole number of periods | count the periods, multiply |

## 3C. The standard P3/P4 results you should just KNOW

| Integral | Answer |
|---|---|
| INT 0 to pi/2 of sin x/(sin x + cos x) dx | pi/4 |
| INT 0 to pi/2 of cos x/(sin x + cos x) dx | pi/4 |
| INT 0 to pi/2 of dx/(1 + tan x) | pi/4 |
| INT 0 to pi/2 of dx/(1 + cot x) | pi/4 |
| INT 0 to pi/2 of sqrt(sin x)/(sqrt(sin x)+sqrt(cos x)) dx | pi/4 |
| INT 0 to pi/2 of sin^n x/(sin^n x + cos^n x) dx | pi/4 (any n) |
| INT 0 to pi/2 of log(tan x) dx | 0 |
| INT 0 to pi/4 of log(1 + tan x) dx | (pi/8) log 2 |
| INT 0 to pi of x sin x/(1 + cos^2 x) dx | pi^2 / 4 |
| INT 0 to pi of x/(1 + sin x) dx | pi |
| INT 0 to 1 of x(1 - x)^n dx | 1 / ((n+1)(n+2)) |
| INT 0 to a of x^m (a - x)^n type | use P3, then expand |

**The general shape:** if `f(x) + f(a - x)` simplifies to a constant `k`,
then `INT 0 to a of f(x) dx = k a / 2`. Almost every P3 question is this.

## 3D. The x-in-front rule (P3 with a lone x)

```
   +-----------------------------------------------------------------+
   |   If  f( pi - x )  =  f( x )   then                             |
   |                                                                 |
   |                                    pi                   pi      |
   |   INT 0 to pi of x f(x) dx  =    ----  INT   f(x) dx           |
   |                                    2      0                     |
   |                                                                 |
   |   "Replace the x in front by pi/2 and pull it out."             |
   |                                                                 |
   |   More generally, if f(a - x) = f(x) :                           |
   |                                                                 |
   |   INT 0 to a of x f(x) dx  =  (a/2) INT 0 to a of f(x) dx       |
   +-----------------------------------------------------------------+
```

Used for: `INT 0 to pi of x sin^3 x dx`, `INT 0 to pi of x sinx/(1+cos^2x) dx`,
`INT 0 to pi of x/(1 + sin x) dx`, and anything else with a lone x in front.

## 3E. Even and odd — the quick test

| f(x) | f(-x) | Type | INT -a to a |
|---|---|---|---|
| x^2, x^4, x^6 | same | EVEN | 2 INT 0 to a |
| x, x^3, x^5 | negated | ODD | 0 |
| cos x, sec x, cos^2 x | same | EVEN | 2 INT 0 to a |
| sin x, tan x, cot x, sin^3 x | negated | ODD | 0 |
| Sin^-1 x, Tan^-1 x | negated | ODD | 0 |
| \|x\|, e^(x^2), sqrt(a^2 - x^2) | same | EVEN | 2 INT 0 to a |
| e^x | neither | neither | no shortcut |
| x sin x | same (odd x odd) | EVEN | 2 INT 0 to a |
| x^2 sin x | negated (even x odd) | ODD | 0 |
| x cos x | negated | ODD | 0 |

```
   even x even = even        odd x odd = even        even x odd = odd
```

---

# 4. REDUCTION FORMULAE

## 4A. sin^n and cos^n (INDEFINITE)

```
   +==================================================================+
   |                        sin^(n-1) x . cos x       n - 1           |
   |   INT sin^n x dx  =  - --------------------  +  -------  I_(n-2) |
   |                                 n                  n             |
   |                                                                  |
   |                        cos^(n-1) x . sin x       n - 1           |
   |   INT cos^n x dx  =    --------------------  +  -------  I_(n-2) |
   |                                 n                  n             |
   |                                                                  |
   |   ( I_(n-2) means the same integral with power n - 2 )           |
   +==================================================================+
```

```
   REMEMBER THE SIGNS:   sin gets a MINUS in front (because d/dx cos = -sin)
                         cos gets a PLUS
   In both, the "other" trig function appears in the first term.
```

## 4B. tan^n, cot^n, sec^n, cosec^n

```
   +==================================================================+
   |                       tan^(n-1) x                                |
   |   INT tan^n x dx   =  ------------  -  INT tan^(n-2) x dx        |
   |                          n - 1                                   |
   |                                                                  |
   |                        cot^(n-1) x                               |
   |   INT cot^n x dx   = - ------------  -  INT cot^(n-2) x dx       |
   |                           n - 1                                  |
   |                                                                  |
   |                       sec^(n-2) x . tan x      n - 2             |
   |   INT sec^n x dx   =  ---------------------  + -------  I_(n-2)  |
   |                              n - 1              n - 1            |
   |                                                                  |
   |                       - cosec^(n-2) x . cot x      n - 2         |
   |   INT cosec^n x dx =  ------------------------  + -------  I_(n-2)
   |                                n - 1               n - 1         |
   +==================================================================+
```

## 4C. The definite versions

```
   +==================================================================+
   |   I_n  =  INT from 0 to pi/2 of sin^n x dx                       |
   |        =  INT from 0 to pi/2 of cos^n x dx                       |
   |                                                                  |
   |                 n - 1                                            |
   |        I_n  =  -------  I_(n-2)                                  |
   |                   n                                              |
   |                                                                  |
   |        I_0 = pi/2       I_1 = 1                                  |
   +------------------------------------------------------------------+
   |   I_n  =  INT from 0 to pi/4 of tan^n x dx                       |
   |                                                                  |
   |                  1                                               |
   |        I_n  =  -------  -  I_(n-2)                               |
   |                 n - 1                                            |
   |                                                                  |
   |        I_0 = pi/4       I_1 = (1/2) log 2                        |
   +==================================================================+
```

| n | INT 0 to pi/4 of tan^n x dx |
|---|---|
| 0 | pi/4 |
| 1 | (1/2) log 2 |
| 2 | 1 - pi/4 |
| 3 | (1/2) - (1/2) log 2 |
| 4 | pi/4 - 2/3 |
| 5 | (1/2) log 2 - 1/4 |

---

# 5. THE WALLIS FORMULAE — LEARN THESE COLD

## 5A. Single power

```
   +==================================================================+
   |                                                                  |
   |   INT 0 to pi/2 of sin^n x dx  =  INT 0 to pi/2 of cos^n x dx    |
   |                                                                  |
   |         n-1     n-3     n-5                                      |
   |    =   ----- x ----- x ----- x  ...  x  K                        |
   |          n      n-2     n-4                                      |
   |                                                                  |
   |    n EVEN :  last factor 1/2 ,  then  K = pi / 2                 |
   |    n ODD  :  last factor 2/3 ,  then  K = 1                      |
   +==================================================================+
```

| n | Value | Numeric |
|---|---|---|
| 0 | pi/2 | 1.5708 |
| 1 | 1 | 1.0000 |
| 2 | pi/4 | 0.7854 |
| 3 | 2/3 | 0.6667 |
| 4 | 3 pi / 16 | 0.5890 |
| 5 | 8/15 | 0.5333 |
| 6 | 5 pi / 32 | 0.4909 |
| 7 | 16/35 | 0.4571 |
| 8 | 35 pi / 256 | 0.4295 |
| 9 | 128/315 | 0.4063 |

Notice the values decrease steadily — a good sanity check. If your answer for
n = 6 is bigger than your answer for n = 4, you have made an error.

## 5B. Mixed powers sin^m cos^n

```
   +==================================================================+
   |   INT from 0 to pi/2 of  sin^m x . cos^n x  dx                   |
   |                                                                  |
   |      [(m-1)(m-3)...] x [(n-1)(n-3)...]                           |
   |   =  --------------------------------------  x  K                |
   |      [ (m+n)(m+n-2)(m+n-4) ...          ]                        |
   |                                                                  |
   |   Every bracket steps DOWN BY 2 and stops at 2 or 1.             |
   |                                                                  |
   |   K = pi/2   ONLY if  m AND n are BOTH EVEN                      |
   |   K = 1      otherwise                                           |
   +==================================================================+
```

| m | n | Value | Numeric |
|---|---|---|---|
| 2 | 2 | pi/16 | 0.1963 |
| 2 | 4 | pi/32 | 0.0982 |
| 4 | 4 | 3pi/256 | 0.0368 |
| 3 | 2 | 2/15 | 0.1333 |
| 2 | 3 | 2/15 | 0.1333 |
| 3 | 3 | 1/12 | 0.0833 |
| 4 | 5 | 8/315 | 0.0254 |
| 5 | 2 | 8/105 | 0.0762 |
| 1 | n | 1/(n+1) | — |
| m | 1 | 1/(m+1) | — |

**The two easiest cases, worth spotting instantly:**

```
   INT 0 to pi/2 of sin x cos^n x dx  =  1 / ( n + 1 )
   INT 0 to pi/2 of sin^m x cos x dx  =  1 / ( m + 1 )

   (just substitute t = cos x or t = sin x )
```

## 5C. Stretching Wallis past pi/2

```
   +-----------------------------------------------------------------+
   |   INT 0 to pi of sin^n x dx    =  2 x ( Wallis value )          |
   |                                                                 |
   |   INT 0 to pi of cos^n x dx    =  0             if n ODD        |
   |                                =  2 x Wallis    if n EVEN       |
   |                                                                 |
   |   INT 0 to 2pi of sin^n x dx   =  0             if n ODD        |
   |                                =  4 x Wallis    if n EVEN       |
   |                                                                 |
   |   INT 0 to 2pi of cos^n x dx   =  0             if n ODD        |
   |                                =  4 x Wallis    if n EVEN       |
   +-----------------------------------------------------------------+
```

Examples: `INT 0 to pi of sin^4 x dx = 2(3pi/16) = 3pi/8`.
`INT 0 to 2pi of cos^2 x dx = 4(pi/4) = pi`.

---

# 6. AREAS

## 6A. The four area formulas

```
   +==================================================================+
   |                                                                  |
   |  (1)  Curve, x-axis, x = a , x = b                               |
   |                                                                  |
   |            A  =  INT from a to b of | y | dx                     |
   |                                                                  |
   |  (2)  Curve, y-axis, y = c , y = d                               |
   |                                                                  |
   |            A  =  INT from c to d of | x | dy                     |
   |                                                                  |
   |  (3)  Between two curves, from x = a to x = b                    |
   |                                                                  |
   |            A  =  INT from a to b of ( y_upper - y_lower ) dx     |
   |                                                                  |
   |  (4)  Between two curves, from y = c to y = d                    |
   |                                                                  |
   |            A  =  INT from c to d of ( x_right - x_left ) dy      |
   |                                                                  |
   +==================================================================+
```

## 6B. Standard areas — memorise the three starred ones

| Region | Area | How |
|---|---|---|
| **circle x^2 + y^2 = a^2** | **pi a^2** | 4 INT 0 to a sqrt(a^2 - x^2) dx |
| **ellipse x^2/a^2 + y^2/b^2 = 1** | **pi a b** | 4 (b/a) INT 0 to a sqrt(a^2-x^2) dx |
| **y^2 = 4ax up to latus rectum x = a** | **8 a^2 / 3** | 2 INT 0 to a 2 sqrt(ax) dx |
| y^2 = 4ax up to x = h | (8/3) sqrt(a) h^(3/2) | same, limit h |
| y^2 = 4ax and x^2 = 4ay | 16 a^2 / 3 | INT 0 to 4a (2sqrt(ax) - x^2/4a) dx |
| y = x^2 and y = 2x | 4/3 | INT 0 to 2 (2x - x^2) dx |
| y = x^2 and y = x + 2 | 9/2 | INT -1 to 2 (x + 2 - x^2) dx |
| y = 4 - x^2 and the x-axis | 32/3 | INT -2 to 2 (4 - x^2) dx |
| y = sin x, 0 to pi | 2 | [-cos x] |
| y = sin x, 0 to 2pi (AREA) | 4 | split at pi, take moduli |
| y = x^3, x = -1 to 1 (AREA) | 1/2 | split at 0, take moduli |
| ellipse quarter (first quadrant) | pi a b / 4 | one quadrant only |

## 6C. The key integral behind circles and ellipses

```
   +==================================================================+
   |                              x                     a^2       x   |
   |  INT sqrt(a^2 - x^2) dx  =  --- sqrt(a^2 - x^2) + ---- Sin^-1(---)|
   |                              2                      2         a  |
   |                                                                  |
   |                                              pi a^2              |
   |  INT from 0 to a of sqrt(a^2 - x^2) dx  =   --------             |
   |                                                 4                |
   |     ( = one quarter of the circle, as it must be )               |
   |                                                                  |
   |                                              pi a^2              |
   |  INT from -a to a of sqrt(a^2 - x^2) dx =   --------             |
   |                                                 2                |
   +==================================================================+
```

## 6D. The parabolic-segment shortcut (use it to CHECK, not to answer)

```
   +-----------------------------------------------------------------+
   |   A parabolic segment fills exactly TWO THIRDS of the smallest   |
   |   rectangle that encloses it.                                    |
   |                                                                  |
   |   Check y = 4 - x^2 :  rectangle 4 wide, 4 tall = 16.            |
   |                        (2/3)(16) = 32/3.  Correct.               |
   |                                                                  |
   |   Check y^2 = 4ax to x = a : rectangle a by 4a = 4a^2 .          |
   |                        (2/3)(4a^2) = 8a^2/3.  Correct.           |
   +-----------------------------------------------------------------+
```

---

# 7. LIMITS THAT ARE SECRETLY INTEGRALS (EAPCET / JEE)

```
   +==================================================================+
   |                    n                                             |
   |         lim   1   SUM      (  r  )              1                |
   |        n->inf --        f ( --- )      =   INT     f(x) dx       |
   |                n   r=1     (  n  )             0                 |
   |                                                                  |
   |   Pull out 1/n  ->  that is dx . Replace r/n by x .              |
   +==================================================================+
```

| Limit | Integral | Value |
|---|---|---|
| lim SUM n/(n^2 + r^2), r=1..n | INT 0 to 1 dx/(1+x^2) | pi/4 |
| lim SUM 1/(n + r), r=1..n | INT 0 to 1 dx/(1+x) | log 2 |
| lim (1/n) SUM sin(r pi/n) | (1/pi) INT 0 to pi sin x dx | 2/pi |
| lim (1/n) SUM (r/n)^2 | INT 0 to 1 x^2 dx | 1/3 |
| lim SUM 1/sqrt(n^2 - r^2), r=1..n-1 | INT 0 to 1 dx/sqrt(1-x^2) | pi/2 |
| lim [ n! / n^n ]^(1/n) | take log: INT 0 to 1 log x dx = -1 | 1/e |

---

# 8. USEFUL STANDARD VALUES (for substituting limits fast)

| x | sin x | cos x | tan x |
|---|---|---|---|
| 0 | 0 | 1 | 0 |
| pi/6 | 1/2 | sqrt3/2 | 1/sqrt3 |
| pi/4 | 1/sqrt2 | 1/sqrt2 | 1 |
| pi/3 | sqrt3/2 | 1/2 | sqrt3 |
| pi/2 | 1 | 0 | undefined |
| pi | 0 | -1 | 0 |
| 3pi/2 | -1 | 0 | undefined |
| 2pi | 0 | 1 | 0 |

| Value | Meaning |
|---|---|
| Tan^-1 1 = pi/4 | comes up in almost every 1/(1+x^2) question |
| Tan^-1 0 = 0 | |
| Tan^-1(-1) = -pi/4 | so INT -1 to 1 dx/(1+x^2) = pi/2 |
| Sin^-1 1 = pi/2 | circle and ellipse areas |
| Sin^-1 0 = 0 | |
| log 1 = 0 | |
| log e = 1 | |
| e^0 = 1 | |

---

# 9. QUICK-EVALUATION TABLE (write these straight down)

| Integral | Value |
|---|---|
| INT 0 to 1 of x^n dx | 1/(n+1) |
| INT 0 to a of x^n dx | a^(n+1)/(n+1) |
| INT 1 to e of dx/x | 1 |
| INT 0 to 1 of e^x dx | e - 1 |
| INT 0 to 1 of dx/(1 + x^2) | pi/4 |
| INT 0 to a of dx/(a^2 + x^2) | pi/(4a) |
| INT 0 to 1 of dx/sqrt(1 - x^2) | pi/2 |
| INT 0 to a of dx/sqrt(a^2 - x^2) | pi/2 |
| INT 0 to pi/2 of sin x dx | 1 |
| INT 0 to pi of sin x dx | 2 |
| INT 0 to pi/2 of cos x dx | 1 |
| INT 0 to pi of cos x dx | 0 |
| INT 0 to pi/4 of sec^2 x dx | 1 |
| INT 0 to pi/4 of tan x dx | (1/2) log 2 |
| INT 0 to pi/2 of sin^2 x dx | pi/4 |
| INT 0 to pi of sin^2 x dx | pi/2 |
| INT 0 to 2pi of sin^2 x dx | pi |
| INT 0 to 2pi of \| sin x \| dx | 4 |
| INT -a to a of x^3 dx | 0 |
| INT 0 to 2 of x^2 dx | 8/3 |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
   +==================================================================+
   |                                                                  |
   |  1.  INT a to b of f(x) dx  =  F(b) - F(a)      (no + c)         |
   |                                                                  |
   |  2.  Substituting? CHANGE THE LIMITS:  x=a -> t=g(a) etc.        |
   |                                                                  |
   |  3.  INT 0 to a f(x) dx = INT 0 to a f(a - x) dx                 |
   |                                                                  |
   |  4.  INT a to b f(x) dx = INT a to b f(a + b - x) dx             |
   |                                                                  |
   |  5.  INT -a to a f = 2 INT 0 to a f  (EVEN)  or  0  (ODD)        |
   |                                                                  |
   |  6.  INT 0 to 2a f = 2 INT 0 to a f  if f(2a-x)= f(x)            |
   |                    = 0               if f(2a-x)=-f(x)            |
   |                                                                  |
   |  7.  INT 0 to nT f = n INT 0 to T f     (period T)               |
   |                                                                  |
   |  8.  WALLIS:  (n-1)/n x (n-3)/(n-2) x ... x [ pi/2 if n even ]   |
   |                                             [ 1    if n odd  ]   |
   |                                                                  |
   |  9.  MIXED WALLIS: pi/2 tail ONLY if m and n are BOTH even       |
   |                                                                  |
   | 10.  n I_n = - sin^(n-1)x cos x + (n-1) I_(n-2)  (reduction)     |
   |                                                                  |
   | 11.  AREA = INT | y | dx , or INT (upper - lower) dx             |
   |                                                                  |
   | 12.  circle  pi a^2 ,  ellipse  pi a b ,  parabola  8a^2/3       |
   |                                                                  |
   +==================================================================+
```

```
   +------------------------------------------------------------------+
   |  IF YOU ARE OUT OF TIME AND CAN ONLY MEMORISE THREE LINES:       |
   |                                                                  |
   |     F(b) - F(a)                                                  |
   |     INT 0 to a f(x) = INT 0 to a f(a - x)                        |
   |     WALLIS:  even n gets pi/2 , odd n does not                   |
   |                                                                  |
   |  Those three lines are worth about 11 marks.                     |
   +------------------------------------------------------------------+
```
