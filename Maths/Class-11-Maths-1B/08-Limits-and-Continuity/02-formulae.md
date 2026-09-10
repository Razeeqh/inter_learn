# Limits and Continuity — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use it — that is what the exam actually tests.

> **ONE WARNING BEFORE YOU START:** every trigonometric limit on this sheet is
> true only when the angle is in **RADIANS**. In degrees `lim (sin x)/x = pi/180`.

---

# 1. THE DEFINITION AND THE EXISTENCE TEST

```
  +===============================================================+
  |                                                               |
  |    lim  f(x)  =  L                                            |
  |   x->a                                                        |
  |                                                               |
  |   "as x gets close to a (but never equals a),                 |
  |    f(x) gets close to L"                                      |
  |                                                               |
  |                                                               |
  |   LEFT  HAND LIMIT   LHL  =   lim  f(x)  =  lim  f(a - h)     |
  |                              x->a-           h->0             |
  |                                                               |
  |   RIGHT HAND LIMIT   RHL  =   lim  f(x)  =  lim  f(a + h)     |
  |                              x->a+           h->0             |
  |                                                               |
  |                     ( h > 0 , h small )                       |
  |                                                               |
  |                                                               |
  |   THE LIMIT EXISTS   <=>   LHL  =  RHL  =  a finite number    |
  |                                                               |
  +===============================================================+
```

| Statement | When to use |
|---|---|
| `lim f(x) = L` iff `LHL = RHL = L` | ANY "does the limit exist?" question |
| `LHL = lim f(a - h)`, `h -> 0` | piecewise functions — forces the `x < a` branch |
| `RHL = lim f(a + h)`, `h -> 0` | piecewise functions — forces the `x > a` branch |
| `LHL != RHL` -> limit does not exist | `\|x\|/x`, `[x]` at an integer, jump graphs |

---

# 2. ALGEBRA OF LIMITS

Let `lim f(x) = L` and `lim g(x) = M` as `x -> a` (both finite).

```
  +===============================================================+
  |                                                               |
  |   SUM             lim [ f + g ]      =   L + M                |
  |                                                               |
  |   DIFFERENCE      lim [ f - g ]      =   L - M                |
  |                                                               |
  |   CONSTANT        lim [ k f ]        =   k L                  |
  |                                                               |
  |   PRODUCT         lim [ f . g ]      =   L . M                |
  |                                                               |
  |   QUOTIENT        lim [ f / g ]      =   L / M   ( M != 0 )   |
  |                                                               |
  |   POWER           lim [ f ]^n        =   L^n                  |
  |                                                               |
  |   ROOT            lim  n-rt( f )     =   n-rt( L )            |
  |                                                               |
  |   MODULUS         lim  | f |         =   | L |                |
  |                                                               |
  |   COMPOSITE       lim  f( g(x) )     =   f(M)                 |
  |                        (if f is continuous at M)              |
  |                                                               |
  +===============================================================+
```

| Rule | When to use |
|---|---|
| sum / difference | splitting `(e^x - sin x - 1)/x` into pieces |
| constant multiple | pulling a number outside the limit sign |
| product | `(e^(sinx) - 1)/sinx . sinx/x` type splits |
| quotient (M != 0) | only when the bottom does NOT go to 0 |
| composite | `sin(x^2 + 1)`, `e^(sin x)` at nice points |

> **The quotient rule is illegal when M = 0.** That is precisely the `0/0` case,
> and you must simplify before you may take limits.

---

# 3. INDETERMINATE FORMS

```
  +===============================================================+
  |                                                               |
  |    THE FIVE IN THE SYLLABUS                                   |
  |                                                               |
  |         0            inf                                      |
  |        ---          -----        inf - inf                    |
  |         0            inf                                      |
  |                                                               |
  |        0 x inf      1^inf                                     |
  |                                                               |
  |    THE TWO EXTRA ONES (competitive exams)                     |
  |                                                               |
  |        0^0          inf^0                                     |
  |                                                               |
  +===============================================================+
```

## NOT indeterminate — these have ordinary answers

| Expression | Value |
|---|---|
| `k / 0` (k != 0) | infinity (limit does not exist as a finite number) |
| `0 / k` (k != 0) | 0 |
| `inf + inf` | infinity |
| `inf x inf` | infinity |
| `k / inf` | 0 |
| `0 ^ inf` | 0 |
| `inf ^ inf` | infinity |

## The cure for each form

| Form | Trigger | Cure |
|---|---|---|
| `0/0` | polynomial fraction, both vanish at a | factorise & cancel `(x - a)` |
| `0/0` with `sqrt` | surds in top or bottom | rationalise with the conjugate |
| `0/0` with powers | `x^n - a^n` shape | `n a^(n-1)` formula |
| `0/0` with sin/cos/e/log | standard-limit shapes | Section 6 and 7 below |
| `inf/inf` | rational function, `x -> inf` | divide by the highest power of x |
| `inf - inf` | `sqrt(...) - sqrt(...)`, `x -> inf` | rationalise, then divide by x |
| `0 x inf` | `x . sin(1/x)` shapes | rewrite as a fraction |
| `1^inf` | base -> 1, power -> inf | exponential rule (Section 8) |

---

# 4. THE ALGEBRAIC STANDARD RESULT

```
  +===============================================================+
  |                                                               |
  |        lim    x^n  -  a^n                                     |
  |       x->a   -------------    =    n . a^(n - 1)              |
  |                 x  -  a                                       |
  |                                                               |
  |        (true for EVERY real n: positive, negative, fractional)|
  |                                                               |
  |                                                               |
  |   THE DOUBLE VERSION                                          |
  |                                                               |
  |        lim    x^n  -  a^n           n                         |
  |       x->a   -------------   =     ---  .  a^(n - m)          |
  |               x^m  -  a^m           m                         |
  |                                                               |
  +===============================================================+
```

| Formula | When to use |
|---|---|
| `(x^n - a^n)/(x - a) -> n a^(n-1)` | bottom is exactly `x - a` |
| `(x^n - a^n)/(x^m - a^m) -> (n/m) a^(n-m)` | both top and bottom are that shape, SAME a |
| works for `n = 3/2`, `n = -1`, `n = 2/3` | fractional / negative powers where factorising is horrible |

**Worked check:** `(x^5 - 32)/(x^3 - 8)` as `x -> 2` gives `(5/3) . 2^2 = 20/3`.

---

# 5. LIMITS AS x -> INFINITY

```
  +===============================================================+
  |                                                               |
  |   BASIC FACTS                                                 |
  |                                                               |
  |        lim   1/x   =  0            lim  1/x^n  =  0  (n > 0)  |
  |       x->inf                      x->inf                      |
  |                                                               |
  |        lim   e^x   =  infinity     lim   e^x   =  0           |
  |       x->inf                     x->-inf                      |
  |                                                               |
  |        lim   log x =  infinity     lim   log x = -infinity    |
  |       x->inf                      x->0+                       |
  |                                                               |
  |        lim   sin x / x  =  0       (bounded / unbounded)      |
  |       x->inf                                                  |
  |                                                               |
  +===============================================================+
```

## The rational-function shortcut

```
  +---------------------------------------------------------------+
  |                                                               |
  |         lim    a0 x^p + ...                                   |
  |        x->inf ---------------                                 |
  |                b0 x^q + ...                                   |
  |                                                               |
  |        p  <  q     ->      0                                  |
  |                                                               |
  |        p  =  q     ->      a0 / b0                            |
  |                                                               |
  |        p  >  q     ->      infinity                           |
  |                                                               |
  +---------------------------------------------------------------+
```

## Surd forms at infinity

```
  +---------------------------------------------------------------+
  |                                                               |
  |     lim  ( sqrt(x^2 + a x + b)  -  x )    =    a / 2          |
  |    x->inf                                                     |
  |                                                               |
  |     lim  ( sqrt(x + a) - sqrt(x + b) )    =    0              |
  |    x->inf                                                     |
  |                                                               |
  |     sqrt(x^2)  =  x    when  x -> +infinity                   |
  |     sqrt(x^2)  = -x    when  x -> -infinity     <-- TRAP      |
  |                                                               |
  +---------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| divide by the highest power of x | every `inf/inf` rational limit |
| `p<q -> 0`, `p=q -> a0/b0`, `p>q -> inf` | MCQ speed, no working needed |
| `sqrt(x^2+ax+b) - x -> a/2` | `inf - inf` with one square root |
| `sqrt(x^2) = -x` for `x -> -inf` | any limit with a negative-infinity arrow |

---

# 6. STANDARD TRIGONOMETRIC LIMITS

```
  +===============================================================+
  |                                                               |
  |     lim   sin x                     lim   tan x               |
  |    x->0  -------  =  1             x->0  -------  =  1        |
  |             x                               x                 |
  |                                                               |
  |     lim   1 - cos x      1          lim   1 - cos x           |
  |    x->0  ----------  =  ---        x->0  ----------  =  0     |
  |              x^2         2                    x               |
  |                                                               |
  |     lim   sin^-1 x                  lim   tan^-1 x            |
  |    x->0  ----------  =  1          x->0  ----------  =  1     |
  |               x                               x               |
  |                                                               |
  |     lim   x                         lim   x                   |
  |    x->0  ------  =  1              x->0  ------  =  1         |
  |          sin x                            tan x               |
  |                                                               |
  |     lim  cos x  =  1                lim  sin x / x  =  0      |
  |    x->0                            x->inf                     |
  |                                                               |
  |          ALL OF THESE NEED THE ANGLE IN RADIANS               |
  |                                                               |
  +===============================================================+
```

## The scaled versions — these are what questions actually use

```
  +---------------------------------------------------------------+
  |                                                               |
  |     lim  sin(ax)                    lim  tan(ax)              |
  |    x->0  --------  =  a            x->0  --------  =  a       |
  |              x                               x                |
  |                                                               |
  |     lim  sin(ax)      a             lim  tan(ax)      a       |
  |    x->0  --------  =  -            x->0  --------  =  -       |
  |          sin(bx)      b                  tan(bx)      b       |
  |                                                               |
  |     lim  1 - cos(ax)     a^2                                  |
  |    x->0  -----------  =  ---                                  |
  |               x^2         2                                   |
  |                                                               |
  |     lim  1 - cos(2mx)     2 m^2                               |
  |    x->0  ------------  =  -----                               |
  |           sin^2(nx)        n^2                                |
  |                                                               |
  |     lim  sin^-1(ax)                 lim  tan^-1(ax)           |
  |    x->0  ----------- =  a          x->0  ----------- =  a     |
  |               x                               x               |
  |                                                               |
  +---------------------------------------------------------------+
```

## Useful trig identities for these limits

```
   1 - cos 2A       =   2 sin^2 A
   1 + cos 2A       =   2 cos^2 A
   1 - cos A        =   2 sin^2 (A/2)
   sin C - sin D    =   2 cos( (C+D)/2 ) sin( (C-D)/2 )
   cos C - cos D    =   2 sin( (C+D)/2 ) sin( (D-C)/2 )
   tan A - sin A    =   sin A ( 1 - cos A ) / cos A
```

| Formula | When to use |
|---|---|
| `sin(ax)/x -> a` | anything with sin over a plain x |
| `sin(ax)/sin(bx) -> a/b` | sin over sin |
| `(1 - cos ax)/x^2 -> a^2/2` | `1 - cos` with `x^2` underneath |
| `1 - cos 2A = 2 sin^2 A` | to turn a cos limit into a sin limit |
| `cos C - cos D` product formula | the `(cos ax - cos bx)/x^2` board question |
| `(tan x - sin x)/x^3 -> 1/2` | a classic competitive-exam limit |

**Two named results worth memorising outright:**

```
   lim  (tan x - sin x)/x^3   =   1/2
  x->0

   lim  (x - sin x)/x^3       =   1/6
  x->0
```

---

# 7. EXPONENTIAL AND LOGARITHMIC LIMITS

```
  +===============================================================+
  |                                                               |
  |     lim   a^x - 1                   lim   e^x - 1             |
  |    x->0  ---------  =  log a       x->0  ---------  =  1      |
  |              x            e                   x               |
  |                                                               |
  |     lim   log(1 + x)                lim   a^x - b^x           |
  |    x->0  ------------  =  1        x->0  -----------  =       |
  |                x                              x               |
  |                                             log (a / b)       |
  |                                                               |
  |     lim  ( 1 + 1/x )^x  =  e        lim  ( 1 + x )^(1/x) = e  |
  |   x->inf                           x->0                       |
  |                                                               |
  |                                                               |
  |   SCALED VERSIONS                                             |
  |                                                               |
  |     lim  (e^(kx) - 1)/x   =  k                                |
  |    x->0                                                       |
  |                                                               |
  |     lim  (a^(kx) - 1)/x   =  k log a                          |
  |    x->0                                                       |
  |                                                               |
  |     lim  log(1 + kx)/x    =  k                                |
  |    x->0                                                       |
  |                                                               |
  |     lim  ( 1 + k/x )^x    =  e^k                              |
  |   x->inf                                                      |
  |                                                               |
  |     lim  ( 1 + kx )^(1/x) =  e^k                              |
  |    x->0                                                       |
  |                                                               |
  |   "log" ALWAYS means natural log (base e) in this chapter.    |
  |                                                               |
  +===============================================================+
```

| Formula | When to use |
|---|---|
| `(e^x - 1)/x -> 1` | any `e^(something)` minus 1 over that something |
| `(a^x - 1)/x -> log a` | bases like `2^x`, `3^x`, `5^x` |
| `(a^x - b^x)/x -> log(a/b)` | two different exponentials subtracted |
| `log(1+x)/x -> 1` | log of "1 plus something small" |
| `(1 + 1/x)^x -> e` | the defining limit of e |
| `(1 + x)^(1/x) -> e` | same thing with `x -> 0` |
| `e^(a+x) - e^a = e^a (e^x - 1)` | shifted exponentials — factor out `e^a` |

---

# 8. THE `1^infinity` RULE

```
  +===============================================================+
  |                                                               |
  |   If   lim f(x) = 1   and   lim g(x) = infinity  ,            |
  |                                                               |
  |   then                                                        |
  |                                lim  g(x) [ f(x) - 1 ]         |
  |         lim  f(x)^g(x)   =   e                                |
  |                                                               |
  |                                                               |
  |   IN WORDS:   e  to the power of                              |
  |               ( the index )  x  ( the base minus 1 )          |
  |                                                               |
  +===============================================================+
```

| Formula | When to use |
|---|---|
| `f^g -> e^(g(f-1))` | ANY `1^infinity` form |
| `(1 + a/x)^(bx) -> e^(ab)` | the most common exam shape |
| `((x+a)/(x+b))^x -> e^(a-b)` | ratio-of-linears raised to x |

**Worked check:** `((x+2)/(x-1))^x` -> `e^(2 - (-1))` = `e^3`, matching the long
method in the concepts file.

---

# 9. CONTINUITY AT A POINT

```
  +===============================================================+
  |                                                               |
  |   f is CONTINUOUS at x = a  when ALL THREE hold:              |
  |                                                               |
  |     (1)   f(a)  exists                                        |
  |                                                               |
  |     (2)   lim f(x)  exists       (i.e.  LHL = RHL)            |
  |           x->a                                                |
  |                                                               |
  |     (3)   lim f(x)  =  f(a)                                   |
  |           x->a                                                |
  |                                                               |
  |   ONE LINE:        LHL   =   RHL   =   f(a)                   |
  |                                                               |
  +===============================================================+


  +---------------------------------------------------------------+
  |   LEFT  CONTINUOUS at a   :   LHL  =  f(a)                    |
  |   RIGHT CONTINUOUS at a   :   RHL  =  f(a)                    |
  |                                                               |
  |   CONTINUOUS on (a, b) : continuous at every interior point   |
  |                                                               |
  |   CONTINUOUS on [a, b] : continuous on (a, b)   AND           |
  |                          right-continuous at a  AND           |
  |                          left-continuous at b                 |
  +---------------------------------------------------------------+
```

| Statement | When to use |
|---|---|
| `LHL = RHL = f(a)` | every "is f continuous at a?" question |
| set `limit = f(a)` and solve | every "find k" question |
| endpoints need only ONE side | continuity on a closed interval `[a, b]` |

---

# 10. TYPES OF DISCONTINUITY

```
  +---------------------------------------------------------------+
  |                                                               |
  |   TYPE            CONDITION                    FIXABLE?       |
  |   -------------   --------------------------   ------------   |
  |   REMOVABLE       LHL = RHL  but not f(a),     YES - redefine |
  |                   or f(a) undefined                f(a)       |
  |                                                               |
  |   JUMP            LHL and RHL both finite      NO             |
  |   (1st kind)      but LHL != RHL                              |
  |                                                               |
  |   INFINITE        LHL or RHL is +/- infinity   NO             |
  |   (2nd kind)                                                  |
  |                                                               |
  |   OSCILLATORY     one-sided limit does not     NO             |
  |                   settle (e.g. sin(1/x))                      |
  |                                                               |
  |   JUMP SIZE   =   | RHL  -  LHL |                             |
  |                                                               |
  +---------------------------------------------------------------+
```

| Example | Type |
|---|---|
| `(x^2 - 4)/(x - 2)` at `x = 2` | removable |
| `\|x\|/x` at `x = 0` | jump, size 2 |
| `[x]` at every integer | jump, size 1 |
| `1/x` at `x = 0` | infinite |
| `1/(x-2)^2` at `x = 2` | infinite |
| `tan x` at `x = pi/2` | infinite |

---

# 11. CONTINUITY OF STANDARD FUNCTIONS

| Function | Continuous where |
|---|---|
| constant `c` | all real x |
| polynomial | all real x |
| `\|x\|` | all real x (including 0) |
| `sin x`, `cos x` | all real x |
| `e^x`, `a^x` | all real x |
| `sinh x`, `cosh x` | all real x |
| `p(x)/q(x)` | all x with `q(x) != 0` |
| `tan x`, `sec x` | all x except odd multiples of `pi/2` |
| `cot x`, `cosec x` | all x except multiples of `pi` |
| `log x` | `x > 0` |
| `sqrt(x)` | `x >= 0` |
| `[x]` greatest integer | all x EXCEPT integers |
| `1/x` | all x except 0 |

## Algebra of continuous functions

```
  +===============================================================+
  |                                                               |
  |   If f and g are continuous at a, then so are:                |
  |                                                               |
  |        f + g       f - g       k f       f . g                |
  |                                                               |
  |        | f |       f^n         f / g     ( if g(a) != 0 )     |
  |                                                               |
  |                                                               |
  |   COMPOSITE:  g continuous at a  AND  f continuous at g(a)    |
  |               =>  f o g  continuous at a                      |
  |                                                               |
  +===============================================================+
```

## The one-way street

```
  +---------------------------------------------------------------+
  |                                                               |
  |     DIFFERENTIABLE   ==>   CONTINUOUS                         |
  |                                                               |
  |     CONTINUOUS      does NOT ==>  DIFFERENTIABLE              |
  |                                                               |
  |     Counter-example:  |x|  at  x = 0                          |
  |         continuous (no break) but not differentiable (corner) |
  |                                                               |
  +---------------------------------------------------------------+
```

---

# 12. QUICK-REFERENCE ANSWER TABLE

Memorise the right-hand column. These appear verbatim in Section A.

| Limit (all as `x -> 0` unless shown) | Value |
|---|---|
| `sin x / x` | 1 |
| `tan x / x` | 1 |
| `sin(ax)/x` | a |
| `sin(ax)/sin(bx)` | a/b |
| `(1 - cos x)/x` | 0 |
| `(1 - cos x)/x^2` | 1/2 |
| `(1 - cos ax)/x^2` | a^2/2 |
| `sin^-1 x / x` | 1 |
| `tan^-1 x / x` | 1 |
| `(tan x - sin x)/x^3` | 1/2 |
| `(x - sin x)/x^3` | 1/6 |
| `(e^x - 1)/x` | 1 |
| `(e^(ax) - 1)/x` | a |
| `(a^x - 1)/x` | log a |
| `(a^x - b^x)/x` | log(a/b) |
| `log(1 + x)/x` | 1 |
| `(1 + x)^(1/x)` | e |
| `(1 + 1/x)^x`  (as `x -> inf`) | e |
| `(1 + k/x)^x`  (as `x -> inf`) | e^k |
| `(sqrt(1+x) - 1)/x` | 1/2 |
| `(sqrt(1+x) - sqrt(1-x))/x` | 1 |
| `(x^n - a^n)/(x - a)`  (as `x -> a`) | n a^(n-1) |
| `sqrt(x^2 + ax + b) - x`  (as `x -> inf`) | a/2 |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +===============================================================+
  |                                                               |
  |    1.   LIMIT EXISTS   <=>   LHL  =  RHL                      |
  |                                                               |
  |    2.   CONTINUOUS at a   <=>   LHL  =  RHL  =  f(a)          |
  |                                                               |
  |    3.   lim  sin x / x   =  1              [radians!]         |
  |        x->0                                                   |
  |                                                               |
  |    4.   lim  tan x / x   =  1                                 |
  |        x->0                                                   |
  |                                                               |
  |    5.   lim  (1 - cos x)/x^2   =  1/2                         |
  |        x->0                                                   |
  |                                                               |
  |    6.   lim  sin(ax)/x   =  a          "inside goes below"    |
  |        x->0                                                   |
  |                                                               |
  |    7.   lim  (e^x - 1)/x   =  1                               |
  |        x->0                                                   |
  |                                                               |
  |    8.   lim  (a^x - 1)/x   =  log a                           |
  |        x->0                                                   |
  |                                                               |
  |    9.   lim  log(1 + x)/x  =  1                               |
  |        x->0                                                   |
  |                                                               |
  |   10.   lim  (1 + 1/x)^x   =  e   ,   lim (1+x)^(1/x) = e     |
  |       x->inf                          x->0                    |
  |                                                               |
  |   11.   lim  (x^n - a^n)/(x - a)   =   n a^(n-1)              |
  |        x->a                                                   |
  |                                                               |
  |   12.   1^inf   ->   answer  =  e^( power x (base - 1) )      |
  |                                                               |
  +===============================================================+
```

```
   Those twelve lines cover well over 90% of everything this
   chapter has ever asked in Section A and Section B.
```
