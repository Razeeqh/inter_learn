# Partial Fractions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use each form — that is what the exam tests.

---

# 1. THE TWO CHECKS YOU DO BEFORE ANYTHING ELSE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  CHECK 1   degree of TOP  <  degree of BOTTOM   ->  PROPER          |
  |            degree of TOP  >= degree of BOTTOM   ->  IMPROPER        |
  |                                                                    |
  |            IMPROPER  ->  LONG DIVISION FIRST:                       |
  |                                                                    |
  |               N(x)                          R(x)                   |
  |             --------   =   Q(x)   +      ----------                 |
  |               D(x)                          D(x)                   |
  |                                                                    |
  |            (Q = quotient, R = remainder, and R/D is always PROPER)  |
  |                                                                    |
  |                                                                    |
  |  CHECK 2   FACTORISE the denominator completely before writing      |
  |            any letters.                                             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Rule | When to use |
|------|-------------|
| Degree of `(x-1)(x-2)(x-3)` is 3, not 1 | every proper/improper test |
| Equal degrees counts as IMPROPER | `(x^2+1)/(x^2-3x+2)` |
| Quotient is a plain number when degrees are equal | fast division |
| Quotient has degree (top − bottom) | `x^3/(x^2-3x+2)` gives a linear quotient |

---

# 2. FACTORISING TOOLKIT (needed before every question)

```
  x^2 - a^2       =  (x - a)(x + a)
  x^2 - 1         =  (x - 1)(x + 1)
  x^2 - 4         =  (x - 2)(x + 2)
  x^2 - 5x + 6    =  (x - 2)(x - 3)
  x^2 + 3x + 2    =  (x + 1)(x + 2)
  x^3 - 1         =  (x - 1)(x^2 + x + 1)
  x^3 + 1         =  (x + 1)(x^2 - x + 1)
  x^3 - a^3       =  (x - a)(x^2 + ax + a^2)
  x^3 + x         =  x (x^2 + 1)
  x^3 + x^2       =  x^2 (x + 1)
```

## Is this quadratic irreducible?

```
  For  a x^2 + b x + c   compute   D = b^2 - 4ac

  +--------------------------------+-------------------------------------+
  |  D is a perfect square         |  IT FACTORISES  ->  CASE 1 or 2      |
  |  (0, 1, 4, 9, 16, 25, ...)     |                                     |
  +--------------------------------+-------------------------------------+
  |  D is negative                 |  IRREDUCIBLE    ->  CASE 3 or 4      |
  |  or not a perfect square       |                                     |
  +--------------------------------+-------------------------------------+
```

| Quadratic | b^2 - 4ac | Verdict |
|-----------|-----------|---------|
| x^2 + 1 | -4 | irreducible — CASE 3 |
| x^2 + x + 1 | -3 | irreducible — CASE 3 |
| x^2 + 4 | -16 | irreducible — CASE 3 |
| x^2 - 4 | 16 = 4^2 | factorises — CASE 1 |
| x^2 - 5x + 6 | 1 = 1^2 | factorises — CASE 1 |

---

# 3. THE FOUR DECOMPOSITION RULES  (memorise these boxes exactly)

## CASE 1 — distinct linear factors

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |         N(x)                 A               B                     |
  |    ---------------  =  -----------  +  -----------                 |
  |    (x - a)(x - b)         x - a           x - b                    |
  |                                                                    |
  |                                                                    |
  |            N(x)               A            B            C          |
  |   ----------------------  = -------  +  -------  +  -------        |
  |   (x - a)(x - b)(x - c)      x - a       x - b       x - c         |
  |                                                                    |
  |   ONE NUMBER on top of each different bracket.                     |
  +--------------------------------------------------------------------+
```

## CASE 2 — repeated linear factor

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |        N(x)                A               B                       |
  |    ------------   =   ---------   +   -----------                  |
  |     (x - a)^2            x - a          (x - a)^2                  |
  |                                                                    |
  |                                                                    |
  |        N(x)                A               B               C       |
  |    ------------   =   ---------   +   -----------  +  ----------   |
  |     (x - a)^3            x - a          (x - a)^2      (x - a)^3   |
  |                                                                    |
  |                                                                    |
  |          N(x)              A             B              C          |
  |    ---------------  =  ---------  +  ---------  +  -----------     |
  |    (x-b)(x - a)^2        x - b         x - a         (x - a)^2     |
  |                                                                    |
  |   A power of n means you write ALL n terms: ^1, ^2, ... , ^n.      |
  +--------------------------------------------------------------------+
```

## CASE 3 — distinct irreducible quadratic factor

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |          N(x)                  A             Bx + C                |
  |   -------------------  =  -----------  +  ------------             |
  |   (x - a)(x^2 + p)           x - a          x^2 + p                |
  |                                                                    |
  |                                                                    |
  |           N(x)                Ax + B          Cx + D               |
  |   --------------------  =  ------------  +  ------------           |
  |   (x^2 + p)(x^2 + q)          x^2 + p         x^2 + q              |
  |                                                                    |
  |   QUADRATIC on the bottom  ->  Bx + C on top. NEVER just B.        |
  +--------------------------------------------------------------------+
```

## CASE 4 — repeated irreducible quadratic factor

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |        N(x)                Ax + B             Cx + D               |
  |   --------------  =  --------------  +  ----------------           |
  |   (x^2 + p)^2            x^2 + p           (x^2 + p)^2             |
  |                                                                    |
  |                                                                    |
  |         N(x)              A           Bx + C          Dx + E       |
  |   ----------------  =  -------  +  ----------  +  --------------   |
  |   (x-a)(x^2+p)^2        x - a        x^2 + p       (x^2 + p)^2     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The master table

| Factor in the denominator | What you write for it | When to use |
|---------------------------|-----------------------|-------------|
| `(x - a)` appearing once | `A/(x - a)` | CASE 1, most common |
| `(ax + b)` appearing once | `A/(ax + b)` | same, root is x = -b/a |
| `(x - a)^2` | `A/(x-a) + B/(x-a)^2` | CASE 2 |
| `(x - a)^3` | `A/(x-a) + B/(x-a)^2 + C/(x-a)^3` | CASE 2 |
| `(x^2 + p)` irreducible, once | `(Ax + B)/(x^2 + p)` | CASE 3 |
| `(x^2 + p)^2` irreducible | `(Ax+B)/(x^2+p) + (Cx+D)/(x^2+p)^2` | CASE 4 |

**The counting rule:** the number of unknown letters always equals the DEGREE of
the denominator. Use this to check you have written the form correctly.

```
  (x-1)(x-2)          degree 2  ->  2 letters   (A, B)
  (x-1)^2 (x-2)       degree 3  ->  3 letters   (A, B, C)
  (x+1)(x^2+1)        degree 3  ->  3 letters   (A, B, C)
  (x^2+1)^2           degree 4  ->  4 letters   (A, B, C, D)
  (x-1)(x^2+1)^2      degree 5  ->  5 letters   (A, B, C, D, E)
```

---

# 4. THE COVER-UP (HEAVISIDE) RULE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                    N(x)                A                           |
  |   If         ---------------   =   ---------  +  (other stuff)     |
  |               (x - a) D1(x)          x - a                         |
  |                                                                    |
  |                        N(a)                                        |
  |   then        A  =  ---------          (put x = a into everything  |
  |                        D1(a)            EXCEPT the covered bracket)|
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Situation | Does cover-up work? |
|-----------|---------------------|
| Distinct linear factor `(x - a)` | YES — instant |
| The HIGHEST power of a repeated factor, e.g. B in `B/(x-a)^2` | YES |
| The LOWER powers of a repeated factor, e.g. A in `A/(x-a)` | NO — compare coefficients |
| A quadratic factor `(x^2 + p)` | NO — compare coefficients |
| Bracket like `(2x + 3)` | YES — use x = -3/2 |

---

# 5. THE THREE METHODS OF FINDING THE CONSTANTS

```
  +--------------------+------------------------------+-------------------+
  |  METHOD            |  WHAT YOU DO                 |  WHEN TO USE      |
  +--------------------+------------------------------+-------------------+
  |  Substituting      |  Multiply out denominators,  |  Distinct linear  |
  |  convenient values |  then put x = root of each   |  factors. Fastest |
  |  of x              |  bracket, one at a time.     |  legal method.    |
  +--------------------+------------------------------+-------------------+
  |  Comparing         |  Expand both sides, match    |  Quadratic and    |
  |  coefficients      |  the x^3, x^2, x, constant   |  repeated factors |
  |                    |  terms. Solve the system.    |                   |
  +--------------------+------------------------------+-------------------+
  |  Cover-up          |  Cover a bracket, put its    |  2-mark "find A"  |
  |  (Heaviside)       |  root into the rest.         |  questions        |
  +--------------------+------------------------------+-------------------+
```

**Which x values to substitute:**

```
  bracket  (x - 3)    ->   use  x = 3
  bracket  (x + 2)    ->   use  x = -2
  bracket  x          ->   use  x = 0
  bracket  (2x + 3)   ->   use  x = -3/2
  bracket  (3x - 1)   ->   use  x = 1/3
  irreducible quadratic -> no real root, so COMPARE COEFFICIENTS instead
```

---

# 6. USEFUL STANDARD SPLITS (learn these five by heart)

```
        1                1             1
   -----------   =    -------   -   -------
    x (x + 1)            x           x + 1


        1                  1        1           1
   ---------------  =  ------- [ ------- -  ------- ]
   (x - a)(x - b)       a - b     x - a      x - b


        1                 1        1           1
   -------------   =    -----  [ -------  -  ------- ]
    x^2 - a^2             2a      x - a       x + a


        1              1          x
   -----------  =   -----  -  ---------
    x (x^2+1)          x       x^2 + 1


        x                1            x            x
   ----------------  =  ---  [  ---------  -  --------- ]
   (x^2+1)(x^2+4)        3        x^2 + 1      x^2 + 4
```

---

# 7. SUBSTITUTION SHORTCUTS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  SHORTCUT 1   Whole denominator is one bracket to a power:         |
  |                                                                    |
  |          N(x)                                                      |
  |       ----------      put  y = x - a  , i.e.  x = y + a ,          |
  |       (x - a)^n       rewrite the top in y, then split by powers.  |
  |                                                                    |
  |                                                                    |
  |  SHORTCUT 2   ONLY even powers of x appear anywhere:               |
  |                                                                    |
  |       put  y = x^2 , solve the easy CASE 1 problem in y ,          |
  |       then put  y = x^2  back at the end.                          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Shortcut | When to use |
|----------|-------------|
| `y = x - a` | `(x^2+5x+7)/(x-3)^3` and similar |
| `y = x^2` | `x^2/((x^2+1)(x^2+4))`, `1/((x^2+1)(x^2+9))` |
| Sum of constants = 0 | proper fraction, n distinct linear factors, top degree <= n-2 |

---

# 8. INTEGRATION RESULTS YOU NEED AFTER SPLITTING

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Integral of  1/(x - a) dx        =  log |x - a|  +  c            |
  |                                                                    |
  |   Integral of  1/(x - a)^2 dx      =  -1/(x - a)  +  c             |
  |                                                                    |
  |                                        (x - a)^(1-n)               |
  |   Integral of  1/(x - a)^n dx      =  --------------  +  c         |
  |                                            1 - n                   |
  |                                                                    |
  |   Integral of  1/(x^2 + a^2) dx    =  (1/a) Tan^-1 (x/a)  +  c     |
  |                                                                    |
  |                                        1        | x - a |          |
  |   Integral of  1/(x^2 - a^2) dx    =  ---- log  | ----- |  +  c    |
  |                                        2a       | x + a |          |
  |                                                                    |
  |   Integral of  f'(x)/f(x) dx       =  log |f(x)|  +  c             |
  |                                       (use this BEFORE splitting!) |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Result | When to use |
|--------|-------------|
| log of mod(x - a) | every CASE 1 piece |
| `-1/(x-a)` | every `B/(x-a)^2` piece |
| `Tan^-1 (x/a)` | leftover `1/(x^2 + p)` piece from CASE 3 |
| log of mod f(x) | top is exactly the derivative of the bottom — no splitting needed |

---

# 9. THE FULL PROCEDURE IN ONE BOX

```
  +--------------------------------------------------------------------+
  |  1.  Compare degrees.  Improper?  ->  LONG DIVIDE.                 |
  |  2.  Factorise the denominator completely.                         |
  |  3.  Identify CASE 1 / 2 / 3 / 4 for EACH factor.                  |
  |  4.  Write the form with A, B, C ...                               |
  |      (number of letters = degree of the denominator).              |
  |  5.  Multiply both sides by the whole denominator.                 |
  |  6.  Put x = each root  ->  gets the easy constants.               |
  |  7.  Compare coefficients  ->  gets the remaining constants.       |
  |  8.  Write the final answer as a SUM OF FRACTIONS.                 |
  |  9.  Put x = 0 in both sides to CHECK.                             |
  +--------------------------------------------------------------------+
```

---

# THE 10 THINGS TO WRITE ON YOUR PALM

```
   1.  Top degree >= bottom degree  ->  DIVIDE FIRST.

   2.  Linear bracket   ->  A on top.
       Quadratic bracket ->  Ax + B on top.

   3.  Power n on a bracket  ->  write ALL powers 1, 2, ..., n.

   4.  Number of letters  =  degree of the denominator.

   5.  COVER-UP:  cover (x - a), put x = a in the rest.  That IS the constant.

   6.  Bracket (2x + 3)  ->  root is x = -3/2.

   7.  b^2 - 4ac < 0  ->  the quadratic is irreducible. Leave it alone.

   8.  Whole bottom is (x - a)^n  ->  substitute y = x - a. Fastest route.

   9.  Only even powers  ->  substitute y = x^2.

  10.  ALWAYS check by putting x = 0 in both sides.
```
