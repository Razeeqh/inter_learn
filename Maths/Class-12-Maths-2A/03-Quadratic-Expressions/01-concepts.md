# Quadratic Expressions — Concepts Explained Simply

Read one topic. Do its worked example. Then move to the next.
Nothing here assumes you remember anything from Class 10.
If a word looks scary, it is explained the first time it is used.

---

# TOPIC 1 — What is a quadratic expression?

**"Quad" means square.** A quadratic expression is any expression where the
**highest power of x is 2**.

```
  +----------------------------------------------------+
  |                                                    |
  |      f(x)  =  a x^2  +  b x  +  c                  |
  |                                                    |
  |      a , b , c  are numbers                        |
  |      a  must NOT be 0                              |
  |                                                    |
  +----------------------------------------------------+
```

- `a` is the **coefficient of x^2** (the number stuck to x^2)
- `b` is the **coefficient of x**
- `c` is the **constant term** (the lonely number with no x)

| Expression | a | b | c | Is it quadratic? |
|------------|---|---|---|------------------|
| `3x^2 - 5x + 2` | 3 | -5 | 2 | YES |
| `x^2 - 9` | 1 | 0 | -9 | YES (b is just 0) |
| `x^2 + 4x` | 1 | 4 | 0 | YES (c is just 0) |
| `5x + 7` | 0 | 5 | 7 | **NO** — a = 0, this is linear |
| `x^3 - x^2 + 1` | — | — | — | **NO** — power 3 is too high |

**Expression vs Equation** — this trips up beginners:

```
  ax^2 + bx + c            <-- an EXPRESSION.  Just a thing.
                               It has a VALUE for each x.

  ax^2 + bx + c  =  0      <-- an EQUATION.  A question.
                               It asks "which x make this zero?"
```

Those special x values are called the **ROOTS** (or **zeros**) of the expression.

> **TRAP:** If `a = 0` it is not a quadratic at all. In any question with a
> letter as the coefficient of x^2 (like `(k-1)x^2 + ...`), you must also say
> `k - 1` is not 0, otherwise you lose a mark.

### Worked example
For `f(x) = 2x^2 - 3x - 5`, find `f(0)`, `f(1)` and `f(-1)`.

```
  f(0)  = 2(0)^2 - 3(0) - 5   =  0 - 0 - 5   =  -5

  f(1)  = 2(1)^2 - 3(1) - 5   =  2 - 3 - 5   =  -6

  f(-1) = 2(-1)^2 - 3(-1) - 5 =  2 + 3 - 5   =   0
```

Since `f(-1) = 0`, the number **-1 is a root** of this expression.

---

# TOPIC 2 — Finding the roots (three tools)

## Tool 1 — Factorisation (fastest when it works)

Split the middle term. Find two numbers that **multiply to `a x c`** and
**add to `b`**.

### Worked example
Solve `2x^2 - 7x + 3 = 0`.

```
  a = 2 ,  b = -7 ,  c = 3

  a x c = 2 x 3 = 6          need two numbers with
  b     = -7                 PRODUCT 6  and  SUM -7

  Those numbers are  -6  and  -1     (-6 x -1 = 6  and  -6 + -1 = -7)

  2x^2 - 7x + 3
  = 2x^2 - 6x - x + 3           <-- split -7x into -6x and -x
  = 2x(x - 3) - 1(x - 3)        <-- take common from each pair
  = (2x - 1)(x - 3)

  Set each bracket to zero:

     2x - 1 = 0   ->   x = 1/2
      x - 3 = 0   ->   x = 3

  ROOTS:  x = 1/2  and  x = 3
```

## Tool 2 — Completing the square

Used to PROVE the quadratic formula, and used in max/min questions later.

### Worked example
Solve `x^2 - 6x + 4 = 0`.

```
  x^2 - 6x + 4 = 0

  Half of -6 is -3.   (-3)^2 = 9.

  x^2 - 6x + 9 - 9 + 4 = 0      <-- add 9 and subtract 9
  (x - 3)^2 - 5 = 0
  (x - 3)^2 = 5
  x - 3 = +sqrt(5)  or  -sqrt(5)

  x = 3 + sqrt(5)   or   x = 3 - sqrt(5)
```

## Tool 3 — The quadratic formula (always works)

```
  +==============================================================+
  |                                                              |
  |                     -b  +-  sqrt(b^2 - 4ac)                  |
  |            x   =   -----------------------------             |
  |                              2 a                             |
  |                                                              |
  +==============================================================+
```

### Worked example
Solve `3x^2 + 5x - 2 = 0`.

```
  a = 3 ,  b = 5 ,  c = -2

  b^2 - 4ac  =  25 - 4(3)(-2)  =  25 + 24  =  49

           -5 +- sqrt(49)        -5 +- 7
  x  =  ---------------------  = ---------
              2 x 3                  6

           -5 + 7      2      1                  -5 - 7     -12
  x  =  ------------ = ---  = ---     OR    x = --------- = ----- = -2
              6         6      3                     6         6

  ROOTS:  x = 1/3  and  x = -2
```

> **TRAP:** The whole of `-b` sits on top, not just `b`. If `b = -7`, then
> `-b = +7`. Sign slips here cost more marks than anything else in the chapter.

> **TRAP:** The `2a` divides the WHOLE top, including `-b`. Not just the square root.

---

# TOPIC 3 — The DISCRIMINANT and the NATURE of the roots

The part under the square root has its own name.

```
  +==============================================================+
  |                                                              |
  |        DISCRIMINANT      D  =  b^2  -  4 a c                 |
  |                                                              |
  +==============================================================+
```

"Discriminant" just means "the thing that tells the difference".
It lets you describe the roots **without finding them**. That is why examiners
love it — it is a 2-mark question every single year.

```
  +------------------+----------------------------------------------------+
  |   D = b^2 - 4ac  |   NATURE OF THE ROOTS                              |
  +------------------+----------------------------------------------------+
  |   D > 0          |   REAL and DISTINCT  (two different real numbers)  |
  +------------------+----------------------------------------------------+
  |   D = 0          |   REAL and EQUAL  (one repeated root)              |
  |                  |   both roots are  x = -b / (2a)                    |
  +------------------+----------------------------------------------------+
  |   D < 0          |   NOT REAL. COMPLEX CONJUGATES  p + iq  and  p - iq|
  +------------------+----------------------------------------------------+
```

**Now the finer split, when a, b, c are RATIONAL numbers:**

```
  +----------------------------------+---------------------------------+
  |  D > 0 and D is a PERFECT SQUARE |  roots are RATIONAL and unequal |
  |  (D = 1, 4, 9, 16, 25, 49, ...)  |  -> expression FACTORISES       |
  +----------------------------------+---------------------------------+
  |  D > 0 but NOT a perfect square  |  roots are IRRATIONAL, and they |
  |                                  |  come as a conjugate pair       |
  |                                  |  p + sqrt(q)  and  p - sqrt(q)  |
  +----------------------------------+---------------------------------+
```

**Two conjugate facts you must be able to state in one line:**

> If `a, b, c` are **rational** and one root is `p + sqrt(q)`,
> the other root **must** be `p - sqrt(q)`.

> If `a, b, c` are **real** and one root is `p + iq`,
> the other root **must** be `p - iq`.

### Worked example 3.1 — describe the roots without solving

```
  (i)  x^2 - 5x + 6 = 0
       D = (-5)^2 - 4(1)(6) = 25 - 24 = 1
       D > 0 and 1 = 1^2 is a perfect square
       ->  roots are RATIONAL and DISTINCT     (they are 2 and 3)

  (ii) x^2 - 4x + 4 = 0
       D = 16 - 16 = 0
       ->  roots are REAL and EQUAL,  x = -b/2a = 4/2 = 2  (twice)

  (iii) x^2 - 4x + 1 = 0
       D = 16 - 4 = 12 ,  positive but 12 is not a perfect square
       ->  roots are IRRATIONAL conjugates   (2 + sqrt3 and 2 - sqrt3)

  (iv) x^2 + x + 1 = 0
       D = 1 - 4 = -3 < 0
       ->  roots are COMPLEX CONJUGATES
```

### Worked example 3.2 — find k for equal roots

Find k so that `3x^2 + 2kx + 27 = 0` has equal roots.

```
  Equal roots  ->  D = 0

  D = (2k)^2 - 4(3)(27)
    = 4k^2 - 324  =  0

  4k^2 = 324
   k^2 = 81
     k = 9   or   k = -9
```

> **TRAP:** "Equal roots" means `D = 0`, NOT `D > 0`.
> "Real roots" (without the word distinct) means `D >= 0` — the "or equal to"
> matters and examiners check for it.

---

# TOPIC 4 — Roots and coefficients: SUM and PRODUCT

You can get the sum and the product of the roots **without solving anything**.

```
  +==============================================================+
  |                                                              |
  |   For   a x^2 + b x + c = 0   with roots  alpha  and  beta   |
  |                                                              |
  |                             -b                               |
  |     SUM      alpha + beta = ----                             |
  |                              a                               |
  |                                                              |
  |                              c                               |
  |     PRODUCT  alpha . beta = ----                             |
  |                              a                               |
  |                                                              |
  +==============================================================+
```

Memory hook: **"minus b over a, then c over a"** — say it out loud ten times.

### Worked example
If alpha and beta are the roots of `2x^2 - 7x + 3 = 0`, find the sum and product.

```
  a = 2 ,  b = -7 ,  c = 3

               -b     -(-7)      7
  alpha+beta = ---- = ------- = ---
                a       2        2

               c      3
  alpha.beta = --- = ---
               a      2

  CHECK (we already found the roots 1/2 and 3 in Topic 2):
      1/2 + 3   = 7/2   YES
      1/2 x 3   = 3/2   YES
```

> **TRAP:** Before using these, the equation must be written with **0 on the
> right** and in the exact order `ax^2 + bx + c = 0`.
> For `3x = 2x^2 - 5`, first rewrite it as `2x^2 - 3x - 5 = 0`.

---

# TOPIC 5 — Forming a quadratic equation when the roots are given

This is the reverse job, and it is the easiest 2 marks in the paper.

```
  +==============================================================+
  |                                                              |
  |     x^2  -  (SUM of roots) x  +  (PRODUCT of roots)  =  0    |
  |                                                              |
  |     Short:   x^2 - S x + P = 0                               |
  |                                                              |
  +==============================================================+
```

Notice the **minus** in front of S and the **plus** in front of P. Always.

### Worked example 5.1
Form the equation whose roots are `2 + sqrt(3)` and `2 - sqrt(3)`.

```
  S = (2 + sqrt3) + (2 - sqrt3) = 4              <- the surds cancel

  P = (2 + sqrt3)(2 - sqrt3)
    = 2^2 - (sqrt3)^2                            <- (a+b)(a-b) = a^2 - b^2
    = 4 - 3
    = 1

  Equation:   x^2 - 4x + 1 = 0
```

### Worked example 5.2
Form the equation whose roots are `3/2` and `-1/3`.

```
  S = 3/2 + (-1/3)

      3     1       9      2      7
    = --- - --- =  ---- - ---- = ----
      2     3       6      6      6

  P = (3/2) x (-1/3) = -3/6 = -1/2

  Equation:      x^2 - (7/6)x - 1/2 = 0

  Multiply every term by 6 to clear fractions:

                 6x^2 - 7x - 3 = 0

  CHECK by factorising:  6x^2 - 7x - 3 = (2x - 3)(3x + 1)
                         roots 3/2 and -1/3    YES
```

> **TRAP:** Leaving fractions in the final answer is not wrong, but the board
> answer key uses whole numbers. Multiply through by the LCM.

---

# TOPIC 6 — Symmetric functions of the roots

"Symmetric" means if you swap alpha and beta, the expression does not change.
You will be asked for things like `alpha^2 + beta^2` **without being told the roots**.

The trick is always the same: **turn everything into S and P.**

```
  +======================================================================+
  |                                                                      |
  |   S = alpha + beta = -b/a          P = alpha . beta = c/a            |
  |                                                                      |
  |   alpha^2 + beta^2       =  S^2 - 2P                                 |
  |                                                                      |
  |   (alpha - beta)^2       =  S^2 - 4P                                 |
  |                                                                      |
  |   alpha - beta           =  +- sqrt(S^2 - 4P)  =  +- sqrt(D) / a     |
  |                                                                      |
  |   alpha^3 + beta^3       =  S^3 - 3 P S                              |
  |                                                                      |
  |   alpha^3 - beta^3       =  (alpha - beta)(S^2 - P)                  |
  |                                                                      |
  |   alpha^4 + beta^4       =  (S^2 - 2P)^2 - 2 P^2                     |
  |                                                                      |
  |    1       1              S                                          |
  |   ---  +  ---     =     -----                                        |
  |   alpha   beta            P                                          |
  |                                                                      |
  |    1        1           S^2 - 2P                                     |
  |  -------+-------  =    ----------                                    |
  |  alpha^2  beta^2          P^2                                        |
  |                                                                      |
  |   alpha    beta         S^2 - 2P                                     |
  |   ----- + -----   =    ----------                                    |
  |   beta    alpha            P                                         |
  |                                                                      |
  +======================================================================+
```

**Where these come from** (learn one, you can rebuild the rest):

```
  (alpha + beta)^2 = alpha^2 + 2.alpha.beta + beta^2

  so   alpha^2 + beta^2  =  (alpha+beta)^2 - 2.alpha.beta  =  S^2 - 2P
```

### Worked example
If alpha, beta are the roots of `x^2 - 5x + 3 = 0`, find
(i) `alpha^2 + beta^2`  (ii) `alpha^3 + beta^3`  (iii) `1/alpha + 1/beta`
(iv) `(alpha - beta)^2`.

```
  a = 1 , b = -5 , c = 3
  S = -b/a = 5           P = c/a = 3

  (i)   alpha^2 + beta^2  =  S^2 - 2P
                          =  25 - 6
                          =  19

  (ii)  alpha^3 + beta^3  =  S^3 - 3PS
                          =  125 - 3(3)(5)
                          =  125 - 45
                          =  80

  (iii)   1       1        S      5
         ---- + ------  = --- = -----
         alpha   beta      P      3

  (iv)  (alpha - beta)^2  =  S^2 - 4P
                          =  25 - 12
                          =  13
```

> **TRAP:** `alpha^3 + beta^3 = S^3 - 3PS`, NOT `S^3 - 3P`.
> The extra S at the end is forgotten by half the class.

---

# TOPIC 7 — Forming a NEW equation from an old one

You are given an equation with roots alpha and beta. You are asked for the
equation whose roots are `1/alpha, 1/beta` or `alpha^2, beta^2` or
`3alpha, 3beta` or `alpha + 2, beta + 2`.

**Two methods. Learn both — one checks the other.**

## Method A — the S and P method (safe, always works)

Find the new sum `S'` and the new product `P'`, then write `x^2 - S'x + P' = 0`.

## Method B — the substitution method (much faster)

```
  +---------------------------------+-------------------------------------+
  |  NEW ROOTS ARE ...              |  REPLACE x BY ...                   |
  +---------------------------------+-------------------------------------+
  |  1/alpha , 1/beta  (reciprocal) |  1/x   (or: reverse the coefficients)|
  |  alpha^2 , beta^2  (squares)    |  sqrt(x)                            |
  |  k.alpha , k.beta  (k times)    |  x/k                                |
  |  alpha + k , beta + k           |  x - k                              |
  |  alpha - k , beta - k           |  x + k                              |
  |  -alpha , -beta                 |  -x  (flip signs of the odd powers) |
  +---------------------------------+-------------------------------------+
```

**Why "x - k" for roots that are k MORE?** Because if the new root is
`y = alpha + k`, then `alpha = y - k`, and alpha is what satisfies the old
equation. Put `y - k` where x used to be.

### Worked example — all four cases on `x^2 - 5x + 3 = 0`

```
  Old equation:  x^2 - 5x + 3 = 0        S = 5 ,  P = 3
```

**(i) Roots `1/alpha` and `1/beta`**

```
  Method A:
                1       1       S      5
      S'  =   ----- + ------ = --- = -----
              alpha    beta     P      3

                 1         1
      P'  =   ----- x ------  =  1/P  =  1/3
              alpha    beta

      x^2 - (5/3)x + 1/3 = 0     -> multiply by 3 ->   3x^2 - 5x + 1 = 0

  Method B:  reverse the coefficients  1, -5, 3  ->  3, -5, 1

                                                      3x^2 - 5x + 1 = 0

  Same answer. Good.
```

**(ii) Roots `alpha^2` and `beta^2`**

```
  Method A:
      S' = alpha^2 + beta^2 = S^2 - 2P = 25 - 6 = 19
      P' = alpha^2 . beta^2 = P^2 = 9

      x^2 - 19x + 9 = 0

  Method B:  replace x by sqrt(x):

      x - 5 sqrt(x) + 3 = 0
      x + 3 = 5 sqrt(x)
      (x + 3)^2 = 25 x                 <- square both sides
      x^2 + 6x + 9 = 25x
      x^2 - 19x + 9 = 0                 Same answer.
```

**(iii) Roots `2alpha` and `2beta`**

```
      S' = 2(alpha + beta) = 2(5) = 10
      P' = 4(alpha . beta) = 4(3) = 12

      x^2 - 10x + 12 = 0
```

**(iv) Roots `alpha + 3` and `beta + 3`**

```
  Method A:
      S' = (alpha + 3) + (beta + 3) = S + 6 = 5 + 6 = 11
      P' = (alpha + 3)(beta + 3)
         = alpha.beta + 3alpha + 3beta + 9
         = P + 3S + 9
         = 3 + 15 + 9 = 27

      x^2 - 11x + 27 = 0

  Method B:  replace x by (x - 3):

      (x-3)^2 - 5(x-3) + 3 = 0
      x^2 - 6x + 9 - 5x + 15 + 3 = 0
      x^2 - 11x + 27 = 0                Same answer.
```

> **TRAP:** For "k times the roots", students replace x by `kx`. It is `x/k`.
> Test it: if the old root is 2 and k = 3, the new root should be 6.
> Putting `x/3` gives `6/3 = 2` back into the old equation. Correct.

---

# TOPIC 8 — COMMON ROOTS of two quadratic equations

## Case 1 — exactly ONE common root

Take the two equations

```
  a1 x^2 + b1 x + c1 = 0
  a2 x^2 + b2 x + c2 = 0
```

If `alpha` is common to both, then

```
  +====================================================================+
  |                                                                    |
  |               c1 a2 - c2 a1                    b1 c2 - b2 c1       |
  |   alpha  =  -----------------      alpha^2 = -----------------     |
  |               a1 b2 - a2 b1                    a1 b2 - a2 b1       |
  |                                                                    |
  |   CONDITION for one common root:                                   |
  |                                                                    |
  |      (c1 a2 - c2 a1)^2  =  (a1 b2 - a2 b1)(b1 c2 - b2 c1)          |
  |                                                                    |
  +====================================================================+
```

**The exam-friendly shortcut (use this in the paper):**

```
  STEP 1   SUBTRACT one equation from the other.
           The x^2 terms cancel if a1 = a2, leaving a LINEAR equation.
           (If a1 is not a2, first multiply to make them match.)
  STEP 2   Solve that linear equation for x. That x is the common root.
  STEP 3   Substitute back into either original equation to find the
           unknown constant.
```

### Worked example 8.1
Find the common root of `x^2 - 7x + 12 = 0` and `x^2 - 8x + 15 = 0`.

```
  Subtract the second from the first:

     (x^2 - 7x + 12) - (x^2 - 8x + 15) = 0
      x^2 - 7x + 12 - x^2 + 8x - 15    = 0
                        x  -  3        = 0
                               x = 3

  CHECK:   3^2 - 7(3) + 12 = 9 - 21 + 12 = 0   YES
           3^2 - 8(3) + 15 = 9 - 24 + 15 = 0   YES

  Common root = 3
```

### Worked example 8.2
Find k if `x^2 + 4x + k = 0` and `x^2 + kx + 4 = 0` have a common root.

```
  Subtract:
     (x^2 + 4x + k) - (x^2 + kx + 4) = 0
              4x - kx + k - 4        = 0
              (4 - k)x - (4 - k)     = 0
              (4 - k)(x - 1)         = 0

  So either  k = 4     or     x = 1.

  CASE  x = 1 :  put x = 1 in the first equation
                 1 + 4 + k = 0   ->   k = -5
                 check in the second: 1 + (-5) + 4 = 0   YES

  CASE  k = 4 :  both equations become x^2 + 4x + 4 = 0.
                 They are IDENTICAL, so BOTH roots are common.

  ANSWER:  k = -5  (one common root)   or   k = 4  (both roots common)
```

## Case 2 — BOTH roots common

If both roots are the same, the two equations are just multiples of each other.

```
  +====================================================================+
  |                                                                    |
  |          a1        b1        c1                                    |
  |         ----  =   ----  =   ----                                   |
  |          a2        b2        c2                                    |
  |                                                                    |
  +====================================================================+
```

### Worked example
For what values of k do `2x^2 + kx + 6 = 0` and `4x^2 + 10x + 12 = 0`
have both roots common?

```
    2       k        6
   ---  =  ----  =  ----
    4      10        12

    2/4  = 1/2  ,   6/12 = 1/2       so we need   k/10 = 1/2

                                                  k = 5
```

---

# TOPIC 9 — The SIGN of a quadratic expression

This is the heart of the chapter. The question is:
**"For which values of x is `ax^2 + bx + c` positive, and for which is it negative?"**

Everything follows from the shape of the parabola.

## The master rule

```
  +==========================================================================+
  |                                                                          |
  |   ax^2 + bx + c  has the SAME SIGN AS  a  for every real x,              |
  |   EXCEPT for the x values lying strictly BETWEEN the roots,              |
  |   where it has the OPPOSITE sign to a.                                   |
  |                                                                          |
  |   (If the roots are not real, there is no "between", so the              |
  |    expression keeps the sign of a for ALL x.)                            |
  |                                                                          |
  +==========================================================================+
```

## The six pictures

### a > 0  (opens UPWARD)

```
   D > 0                    D = 0                    D < 0
   two real roots           equal roots              no real roots

     \              /         \          /             \        /
      \            /           \        /               \      /
       \          /             \      /                 \    /
   -----\--------/------     ----\----/-----              \__/
     al  \      /  be             \  /              -------------------
          \____/                   \/  <- touches
                                    x = -b/2a

   f(x) > 0  for x < al         f(x) > 0 everywhere    f(x) > 0
   f(x) < 0  for al < x < be    EXCEPT f(-b/2a) = 0    for ALL real x
   f(x) > 0  for x > be         so  f(x) >= 0 always
```

### a < 0  (opens DOWNWARD)

```
   D > 0                    D = 0                    D < 0

        ______                   /\                 -------------------
       /      \                 /  \                  __
      /        \               /    \                /  \
  ---/----------\-----    ----/------\----          /    \
   al            be      -------------------       /      \
  /                \                              /        \

   f(x) < 0  for x < al         f(x) <= 0 always      f(x) < 0
   f(x) > 0  for al < x < be    (only 0 at -b/2a)     for ALL real x
   f(x) < 0  for x > be
```

## The two conditions you must be able to write instantly

```
  +--------------------------------------+---------------------------+
  |  ax^2 + bx + c > 0  for ALL real x   |   a > 0   AND   D < 0     |
  +--------------------------------------+---------------------------+
  |  ax^2 + bx + c < 0  for ALL real x   |   a < 0   AND   D < 0     |
  +--------------------------------------+---------------------------+
  |  ax^2 + bx + c >= 0 for ALL real x   |   a > 0   AND   D <= 0    |
  +--------------------------------------+---------------------------+
  |  ax^2 + bx + c <= 0 for ALL real x   |   a < 0   AND   D <= 0    |
  +--------------------------------------+---------------------------+
```

### Worked example 9.1
Find the sign of `x^2 - 5x + 6` for different values of x.

```
  a = 1 > 0   ->  upward parabola
  D = 25 - 24 = 1 > 0   ->  two real roots

  Roots:  x^2 - 5x + 6 = (x - 2)(x - 3)  ->  x = 2 , 3

  Number line:

            +ve            -ve            +ve
     <-------------- 2 ------------- 3 -------------->
                    |               |
        x < 2       |    2 < x < 3  |     x > 3

  ANSWER:  positive when x < 2 or x > 3
           zero when x = 2 or x = 3
           negative when 2 < x < 3
```

### Worked example 9.2
Show that `2x^2 + 3x + 5` is positive for all real x.

```
  a = 2 > 0
  D = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0

  a > 0 and D < 0  ->  the parabola opens upward and never touches
  the x-axis, so it lies entirely above it.

  Therefore  2x^2 + 3x + 5 > 0  for all real x.
```

### Worked example 9.3
Find k so that `x^2 + kx + 4 > 0` for every real x.

```
  a = 1 > 0 already.  So we only need  D < 0.

  D = k^2 - 4(1)(4) = k^2 - 16 < 0
      k^2 < 16
      -4 < k < 4
```

> **TRAP:** `k^2 < 16` does NOT give `k < 4` alone. It gives `-4 < k < 4`.
> Squares always produce a two-sided answer.

---

# TOPIC 10 — Quadratic INEQUATIONS (the number-line method)

An inequation is the same expression with `>` `<` `>=` `<=` instead of `=`.

```
  +==========================================================================+
  |   THE 5-STEP RECIPE                                                      |
  |                                                                          |
  |   1.  Move everything to one side so the other side is 0.                |
  |   2.  Make the coefficient of x^2 POSITIVE.                              |
  |       (If it is negative, multiply by -1 and FLIP the inequality sign.)  |
  |   3.  Factorise, or use the formula, to find the roots.                  |
  |   4.  Mark the roots on a number line. They split it into 3 regions.     |
  |   5.  With a > 0 the signs go   +  -  +  from left to right.             |
  |       Pick the regions that match the sign you want.                     |
  +==========================================================================+
```

```
                   +              -              +
          <----------------- r1 ------- r2 ----------------->
                  (outside)   (between)   (outside)

          "OUTSIDE for greater than zero,  BETWEEN for less than zero"
          (when a > 0)
```

### Worked example 10.1
Solve `x^2 - x - 6 < 0`.

```
  Step 1-2: already 0 on the right, a = 1 > 0.  Good.

  Step 3:   x^2 - x - 6 = (x - 3)(x + 2)      roots  x = -2 , 3

  Step 4-5:
                  +             -             +
          <------------ -2 ----------- 3 ------------>

  We want  < 0  ->  the MINUS region  ->  between the roots.

  ANSWER:   -2 < x < 3        or in interval form   ( -2 , 3 )
```

### Worked example 10.2
Solve `2x^2 + 5x - 3 <= 0`.

```
  a = 2 > 0.

  2x^2 + 5x - 3 = 2x^2 + 6x - x - 3
                = 2x(x + 3) - 1(x + 3)
                = (2x - 1)(x + 3)

  Roots:  x = 1/2 ,  x = -3

                  +             -             +
          <------------ -3 --------- 1/2 ------------>

  We want  <= 0  ->  the minus region, and the roots are ALLOWED
  because of the "or equal to".

  ANSWER:   -3 <= x <= 1/2
```

### Worked example 10.3 — the flip
Solve `-x^2 + 4x - 3 > 0`.

```
  Multiply both sides by -1 and FLIP the sign:

      x^2 - 4x + 3 < 0

      (x - 1)(x - 3) < 0      roots 1 and 3

                  +             -             +
          <------------- 1 ----------- 3 ------------>

  We want < 0  ->  between.

  ANSWER:   1 < x < 3
```

> **TRAP:** Forgetting to flip the inequality sign when multiplying by a
> negative number. This turns a correct answer into the exact opposite.

---

# TOPIC 11 — MAXIMUM and MINIMUM value of a quadratic expression

The parabola turns around at one point. That point is called the **vertex**.

```
  +==========================================================================+
  |                                                                          |
  |   For  f(x) = a x^2 + b x + c :                                          |
  |                                                                          |
  |                                    -b                                    |
  |     the turning point is at   x = ------                                 |
  |                                     2a                                   |
  |                                                                          |
  |                                     4ac - b^2        -D                  |
  |     and the value there is    f =  ------------  =  ------               |
  |                                        4a            4a                  |
  |                                                                          |
  |     a > 0  ->  this is the MINIMUM value  (curve opens up)               |
  |     a < 0  ->  this is the MAXIMUM value  (curve opens down)             |
  |                                                                          |
  +==========================================================================+
```

**Where it comes from** — complete the square:

```
                                       b        c
   a x^2 + b x + c   =   a [ x^2  +  ----- x + --- ]
                                       a        a

                                    b   2          b^2
                     =   a [ ( x + ---- )   +  c/a - ------ ]
                                   2a               4a^2

                              b   2       4ac - b^2
                     =   a ( x + ---- ) + -----------
                                 2a           4a

   The squared bracket is never negative. Its smallest value is 0,
   which happens exactly when  x = -b/(2a).
```

### Worked example 11.1
Find the minimum value of `2x^2 - 4x + 5` and the x where it occurs.

```
  a = 2 > 0   ->  MINIMUM exists (no maximum, the curve goes up forever)

           -b      -(-4)      4
  x  =  -------- = -------- = --- = 1
           2a       2(2)       4

  Minimum value = f(1) = 2(1)^2 - 4(1) + 5 = 2 - 4 + 5 = 3

  CHECK with the formula:
     D = (-4)^2 - 4(2)(5) = 16 - 40 = -24

          -D      -(-24)     24
         ---- =  --------- = ---- = 3        YES
          4a       4(2)        8
```

### Worked example 11.2
Find the maximum value of `-3x^2 + 12x - 7`.

```
  a = -3 < 0   ->  MAXIMUM exists

           -b       -12       -12
  x  =  -------- = ------- = ------ = 2
           2a       2(-3)      -6

  Maximum value = f(2) = -3(4) + 12(2) - 7 = -12 + 24 - 7 = 5

  CHECK:  D = 12^2 - 4(-3)(-7) = 144 - 84 = 60

          -D       -60      -60
         ---- =  -------- = ------ = 5        YES
          4a      4(-3)      -12
```

### Worked example 11.3 — the word-problem version
The sum of two numbers is 16. Find the numbers so that their product is
maximum, and find that maximum product.

```
  Let one number be x.  The other is  16 - x.

  Product  P(x) = x(16 - x) = -x^2 + 16x

  a = -1 < 0  ->  maximum exists.

           -b      -16
  x  =  -------- = ------ = 8
           2a       -2

  So the numbers are 8 and 8, and

  Maximum product = 8 x 8 = 64
```

> **TRAP:** If `a > 0` there is NO maximum (the curve rises without limit).
> If `a < 0` there is NO minimum. Saying "maximum = ..." for an upward
> parabola is an instant zero.

---

# TOPIC 12 — RANGE of a quadratic expression

The **range** is the complete set of values the expression can take as x runs
over all real numbers.

```
  +==========================================================================+
  |                                                                          |
  |   a > 0   ->   Range  =  [ -D/(4a) ,  infinity )                         |
  |                          from the minimum value, upward                  |
  |                                                                          |
  |   a < 0   ->   Range  =  ( -infinity ,  -D/(4a) ]                        |
  |                          everything below the maximum value              |
  |                                                                          |
  +==========================================================================+
```

```
      a > 0                                 a < 0
        \        /                            ______
         \      /                            /      \
          \____/  <-- lowest point m         /        \  <-- highest point M
                                            /          \

     value can be m or anything above    value can be M or anything below
     Range = [m , infinity)              Range = (-infinity , M]
```

### Worked example 12.1
Find the range of `x^2 - 4x + 7`.

```
  a = 1 > 0  ->  there is a minimum.

  x = -b/2a = 4/2 = 2
  minimum value = f(2) = 4 - 8 + 7 = 3

  RANGE  =  [ 3 , infinity )        that is,  f(x) >= 3
```

### Worked example 12.2
Find the range of `-2x^2 + 8x - 3`.

```
  a = -2 < 0  ->  there is a maximum.

           -8       -8
  x  =  -------- = ------ = 2
          2(-2)      -4

  maximum = f(2) = -2(4) + 8(2) - 3 = -8 + 16 - 3 = 5

  RANGE  =  ( -infinity , 5 ]       that is,  f(x) <= 5
```

---

# TOPIC 13 — RANGE OF A RATIONAL EXPRESSION  *** the 7-mark question ***

This is the question AP asks in Section C almost every year. It looks hard.
It is actually a **fixed 5-step recipe**. Learn the recipe, not the algebra.

```
                          a1 x^2 + b1 x + c1
  Find the range of   y = --------------------
                          a2 x^2 + b2 x + c2
```

```
  +==========================================================================+
  |   THE 5-STEP RECIPE                                                      |
  |                                                                          |
  |   1.  Check the DENOMINATOR is never zero:                               |
  |       show its discriminant  b2^2 - 4 a2 c2  <  0.                       |
  |       (Say this in one line - it earns a mark.)                          |
  |                                                                          |
  |   2.  Put  y = the fraction , then CROSS-MULTIPLY.                       |
  |                                                                          |
  |   3.  Collect everything as a QUADRATIC IN x with y inside the           |
  |       coefficients:     A x^2 + B x + C = 0                              |
  |       where A, B, C each contain y.                                      |
  |                                                                          |
  |   4.  x must be REAL, so the discriminant of THAT quadratic              |
  |       must satisfy   B^2 - 4AC  >=  0.                                   |
  |       This gives an INEQUATION IN y.                                     |
  |                                                                          |
  |   5.  Solve that inequation using the number-line method.                |
  |       The answer IS the range.                                           |
  +==========================================================================+
```

### Worked example 13.1  (the classic)

```
                                       x^2 + 14x + 9
        Find the range of      y  =  -----------------
                                       x^2 + 2x + 3
```

```
  STEP 1   Denominator  x^2 + 2x + 3
           D = 2^2 - 4(1)(3) = 4 - 12 = -8 < 0 , and a = 1 > 0
           So the denominator is positive for all x - never zero. Good.

  STEP 2   y ( x^2 + 2x + 3 )  =  x^2 + 14x + 9

           y x^2 + 2y x + 3y   =  x^2 + 14x + 9

  STEP 3   Bring everything to the left and group by powers of x:

           (y - 1) x^2  +  (2y - 14) x  +  (3y - 9)  =  0

  STEP 4   x is real  ->  B^2 - 4AC >= 0

           (2y - 14)^2  -  4 (y - 1)(3y - 9)  >=  0

           4(y - 7)^2   -  4 (y - 1) . 3(y - 3)  >=  0

           divide every term by 4:

           (y - 7)^2  -  3(y - 1)(y - 3)  >=  0

           (y^2 - 14y + 49)  -  3(y^2 - 4y + 3)  >=  0

            y^2 - 14y + 49 - 3y^2 + 12y - 9      >=  0

                 -2y^2 - 2y + 40                 >=  0

           divide by -2 and FLIP the sign:

                  y^2 + y - 20                   <=  0

  STEP 5   Factorise:   (y + 5)(y - 4)  <=  0

                   +             -             +
           <------------- -5 ---------- 4 ------------>

           We want <= 0, so we take the region BETWEEN, roots included.

           RANGE  =  [ -5 , 4 ]        i.e.   -5 <= y <= 4
```

### Worked example 13.2

```
                                       x^2 - x + 1
        Find the range of      y  =  ---------------
                                       x^2 + x + 1
```

```
  STEP 1   Denominator  x^2 + x + 1 :  D = 1 - 4 = -3 < 0 , a = 1 > 0
           -> never zero.  Good.

  STEP 2   y(x^2 + x + 1) = x^2 - x + 1

  STEP 3   (y - 1) x^2  +  (y + 1) x  +  (y - 1)  =  0

  STEP 4   (y + 1)^2  -  4 (y - 1)(y - 1)  >=  0

           (y + 1)^2  -  [ 2(y - 1) ]^2    >=  0

           Use  A^2 - B^2 = (A - B)(A + B)  with A = y+1 , B = 2y-2 :

           ( y + 1 - 2y + 2 )( y + 1 + 2y - 2 )  >=  0

                ( 3 - y )( 3y - 1 )              >=  0

           Multiply by -1 and flip:

                ( y - 3 )( 3y - 1 )              <=  0

  STEP 5   Roots of the left side:  y = 3  and  y = 1/3

                   +             -             +
           <------------ 1/3 ---------- 3 ------------>

           RANGE  =  [ 1/3 , 3 ]
```

### Worked example 13.3 — denominator quadratic, numerator LINEAR

```
                                          x + 2
        Find the range of      y  =  ----------------
                                     2x^2 + 3x + 6
```

```
  STEP 1   Denominator:  D = 3^2 - 4(2)(6) = 9 - 48 = -39 < 0 , a = 2 > 0
           -> never zero.

  STEP 2   y(2x^2 + 3x + 6) = x + 2

  STEP 3   2y x^2 + (3y - 1) x + (6y - 2) = 0

  STEP 4   (3y - 1)^2 - 4(2y)(6y - 2) >= 0

           9y^2 - 6y + 1 - 48y^2 + 16y >= 0

                -39y^2 + 10y + 1       >= 0

           multiply by -1 and flip:

                 39y^2 - 10y - 1       <= 0

  STEP 5   Solve 39y^2 - 10y - 1 = 0 by the formula:

                  10 +- sqrt(100 + 156)      10 +- sqrt(256)     10 +- 16
           y  =  ------------------------  = ------------------= ----------
                          78                        78              78

                  26      1                    -6       1
           y  =  ---- = -----      and    y = ----- = - ----
                  78      3                    78       13

                   +              -              +
           <---------- -1/13 ----------- 1/3 ---------->

           RANGE  =  [ -1/13 , 1/3 ]
```

> **TRAP:** Step 3 gives a quadratic **in x**, not in y. The coefficients
> contain y. Do not mix them up — write A, B, C clearly before applying
> `B^2 - 4AC`.

> **TRAP:** If the coefficient of x^2 becomes 0 for some particular y (here
> `y = 1` in example 13.1), the equation becomes linear. Check that this y is
> still allowed by solving the linear equation. In 13.1, `y = 1` gives
> `-12x - 6 = 0`, so `x = -1/2` — a real value, so `y = 1` is in the range
> (and indeed 1 lies inside `[-5, 4]`).

---

# TOPIC 14 — When can a quadratic be split into LINEAR FACTORS?

## One variable

```
  +==========================================================================+
  |                                                                          |
  |   ax^2 + bx + c  (with a, b, c RATIONAL) can be written as the product   |
  |   of two LINEAR factors with rational coefficients                       |
  |                                                                          |
  |                 if and only if   D = b^2 - 4ac  is a PERFECT SQUARE      |
  |                 (including 0)                                            |
  |                                                                          |
  +==========================================================================+
```

### Worked example
Can `6x^2 - x - 2` be factorised over the rationals?

```
  D = (-1)^2 - 4(6)(-2) = 1 + 48 = 49 = 7^2       <- perfect square

  YES.   6x^2 - x - 2 = (3x - 2)(2x + 1)

  Check:  6x^2 + 3x - 4x - 2 = 6x^2 - x - 2      YES
```

## Two variables (the second-degree expression)

```
  +==========================================================================+
  |                                                                          |
  |   ax^2 + 2hxy + by^2 + 2gx + 2fy + c                                     |
  |                                                                          |
  |   is resolvable into two LINEAR factors                                  |
  |                                                                          |
  |            if and only if                                                |
  |                                                                          |
  |         a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2   =   0          |
  |                                                                          |
  +==========================================================================+
```

Read off a, h, b, g, f, c **carefully** — the 2's belong to h, g and f.

### Worked example
Find k so that `2x^2 + 3xy - 2y^2 + 5x + 5y + k` is resolvable into
linear factors.

```
  Match term by term:

     a x^2      -> a = 2
     2h xy = 3xy-> h = 3/2
     b y^2      -> b = -2
     2g x  = 5x -> g = 5/2
     2f y  = 5y -> f = 5/2
     c          -> c = k

  Condition:  abc + 2fgh - af^2 - bg^2 - ch^2 = 0

     abc    = 2 x (-2) x k          = -4k
     2fgh   = 2 (5/2)(5/2)(3/2)     =  75/4
     a f^2  = 2 (25/4)              =  50/4
     b g^2  = (-2)(25/4)            = -50/4
     c h^2  = k (9/4)               =  9k/4

     -4k + 75/4 - 50/4 - (-50/4) - 9k/4 = 0

     -4k + 75/4 - 50/4 + 50/4 - 9k/4    = 0

     -4k - 9k/4 + 75/4                  = 0

     multiply by 4:   -16k - 9k + 75    = 0

                             -25k + 75  = 0

                                     k  = 3

  CHECK:  2x^2 + 3xy - 2y^2 = (2x - y)(x + 2y)
          (2x - y + 3)(x + 2y + 1)
          = 2x^2 + 4xy + 2x - xy - 2y^2 - y + 3x + 6y + 3
          = 2x^2 + 3xy - 2y^2 + 5x + 5y + 3            YES
```

---

# TOPIC 15 — LOCATION OF THE ROOTS

Sometimes you are not asked *what* the roots are, only *where* they sit.
Let `f(x) = ax^2 + bx + c`, `S = -b/a`, `P = c/a`.

```
  +--------------------------------+------------------------------------------+
  |  YOU WANT ...                  |  CONDITIONS (all must hold)              |
  +--------------------------------+------------------------------------------+
  |  Both roots POSITIVE           |  D >= 0 ,  S > 0 ,  P > 0                |
  +--------------------------------+------------------------------------------+
  |  Both roots NEGATIVE           |  D >= 0 ,  S < 0 ,  P > 0                |
  +--------------------------------+------------------------------------------+
  |  Roots of OPPOSITE signs       |  P < 0     (this alone forces D > 0)     |
  +--------------------------------+------------------------------------------+
  |  Both roots GREATER than k     |  D >= 0 ,  a . f(k) > 0 ,  -b/(2a) > k   |
  +--------------------------------+------------------------------------------+
  |  Both roots LESS than k        |  D >= 0 ,  a . f(k) > 0 ,  -b/(2a) < k   |
  +--------------------------------+------------------------------------------+
  |  k lies BETWEEN the roots      |  a . f(k) < 0                            |
  +--------------------------------+------------------------------------------+
  |  Roots lie between k1 and k2   |  D >= 0 , a.f(k1) > 0 , a.f(k2) > 0 ,    |
  |                                |  k1 < -b/(2a) < k2                       |
  +--------------------------------+------------------------------------------+
```

**Why `a . f(k) > 0` means k is outside the roots** — picture it:

```
        \                     /       f(k) has the same sign as a
         \                   /        whenever k is OUTSIDE the roots.
      k   \                 /   k
       .   \               /     .    Between the roots the sign flips,
   ---------\-------------/---------  so a . f(k) < 0 there.
          al \           / be
              \_________/
                   .
                   k  (here a.f(k) < 0)
```

### Worked example 15.1 — opposite signs
Find m if the roots of `x^2 + (m - 3)x + m = 0` are of opposite signs.

```
  Opposite signs  ->  PRODUCT of roots < 0

         c      m
   P =  --- =  ---  =  m   <  0
         a      1

  ANSWER:   m < 0
```

### Worked example 15.2 — both roots positive
Find m so that both roots of `x^2 - (m + 1)x + (m + 4) = 0` are positive.

```
  a = 1 , b = -(m+1) , c = m + 4

  (1) D >= 0 :
      (m + 1)^2 - 4(m + 4)  >=  0
      m^2 + 2m + 1 - 4m - 16 >= 0
      m^2 - 2m - 15          >= 0
      (m - 5)(m + 3)         >= 0
      ->  m <= -3   or   m >= 5

  (2) SUM > 0 :
      m + 1 > 0    ->   m > -1

  (3) PRODUCT > 0 :
      m + 4 > 0    ->   m > -4

  Now take the OVERLAP of all three on a number line:

      (1)   <=======-3        [                5=======>
      (2)              (-1====================================>
      (3)        (-4=======================================>

      Only  m >= 5  survives all three.

  ANSWER:   m >= 5
```

### Worked example 15.3 — both roots greater than a number
Find m so that both roots of `x^2 - 6x + m = 0` are greater than 1.

```
  f(x) = x^2 - 6x + m ,   a = 1 > 0

  (1) D >= 0 :
      36 - 4m >= 0   ->   m <= 9

  (2) a . f(1) > 0 :
      1 x (1 - 6 + m) > 0
              m - 5   > 0    ->   m > 5

  (3) vertex to the right of 1 :
      -b/(2a) = 6/2 = 3 ,  and  3 > 1   YES  (always true here)

  ANSWER:   5 < m <= 9

  CHECK m = 8 :  x^2 - 6x + 8 = 0  ->  roots 2 and 4 , both > 1   YES
  CHECK m = 5 :  x^2 - 6x + 5 = 0  ->  roots 1 and 5 , but 1 is not
                 GREATER than 1  ->  correctly excluded.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  +----+------------------------------------------------------------------+
  | 1  | Did I write the equation as  ax^2 + bx + c = 0  BEFORE using     |
  |    | -b/a and c/a ?                                                   |
  +----+------------------------------------------------------------------+
  | 2  | Did I state that a is not 0 wherever a letter sits on x^2 ?      |
  +----+------------------------------------------------------------------+
  | 3  | D = b^2 - 4ac. Did I square the WHOLE b, keeping the sign of a   |
  |    | negative b in mind?  (-5)^2 = +25.                               |
  +----+------------------------------------------------------------------+
  | 4  | "Equal roots" -> D = 0.  "Real roots" -> D >= 0.                 |
  |    | "Distinct real roots" -> D > 0.  Did I use the right one?        |
  +----+------------------------------------------------------------------+
  | 5  | Forming an equation: is it  x^2 - Sx + P = 0  with a MINUS       |
  |    | before S ?                                                        |
  +----+------------------------------------------------------------------+
  | 6  | alpha^3 + beta^3 = S^3 - 3PS.  Did I keep the final S ?          |
  +----+------------------------------------------------------------------+
  | 7  | Inequation: did I make the x^2 coefficient positive first, and   |
  |    | FLIP the sign if I multiplied by a negative?                     |
  +----+------------------------------------------------------------------+
  | 8  | Number line: for a > 0 the pattern is  + - +.  Did I pick the    |
  |    | right regions, and did I include/exclude the endpoints correctly |
  |    | for <= versus < ?                                                |
  +----+------------------------------------------------------------------+
  | 9  | Max/min: a > 0 gives a MINIMUM only. a < 0 gives a MAXIMUM only. |
  |    | Did I claim the right one?                                       |
  +----+------------------------------------------------------------------+
  | 10 | Range of a fraction: did I first state the denominator is never  |
  |    | zero (its D < 0) ?                                               |
  +----+------------------------------------------------------------------+
  | 11 | Range of a fraction: did I apply B^2 - 4AC >= 0 (with "equal to")|
  |    | so the endpoints are included in the range?                      |
  +----+------------------------------------------------------------------+
  | 12 | Did I write the final answer in a box, in interval or            |
  |    | inequality form, and not leave it buried in the working?         |
  +----+------------------------------------------------------------------+
```
