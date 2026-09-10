# Quadratic Expressions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

Throughout: `f(x) = ax^2 + bx + c` with `a` not equal to 0,
roots `alpha` and `beta`, `S = alpha + beta`, `P = alpha . beta`,
`D = b^2 - 4ac`.

---

# 1. THE BASICS

```
  +-------------------------------------------------------------+
  |                                                             |
  |   QUADRATIC EXPRESSION      f(x) = a x^2 + b x + c          |
  |                                                             |
  |   QUADRATIC EQUATION        a x^2 + b x + c = 0             |
  |                                                             |
  |   a is NEVER 0.  Otherwise it is not quadratic.             |
  |                                                             |
  |   A ROOT is a value of x that makes the expression 0.       |
  |   A quadratic has exactly TWO roots (possibly equal,        |
  |   possibly complex).                                        |
  |                                                             |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `f(k)` = put k in place of x | "is k a root?" — if `f(k) = 0`, yes |
| `a` not 0 must be stated | any question where a letter multiplies x^2 |
| Degree 2 means exactly 2 roots | counting-roots MCQs |

---

# 2. SOLVING A QUADRATIC

```
  +=============================================================+
  |                                                             |
  |                       -b  +-  sqrt( b^2 - 4ac )             |
  |            x    =    ----------------------------           |
  |                                 2 a                         |
  |                                                             |
  +=============================================================+


  COMPLETING THE SQUARE FORM (used for max / min):

  +=============================================================+
  |                                                             |
  |                              b   2      4ac - b^2           |
  |     a x^2 + bx + c  =  a ( x + ---- )  + -----------        |
  |                             2a               4a             |
  |                                                             |
  +=============================================================+
```

| Method | When to use |
|--------|-------------|
| Factorisation (split the middle term) | when `D` is a small perfect square — fastest |
| Quadratic formula | always works; use when factorising fails |
| Completing the square | for max/min, range, and vertex questions |

---

# 3. THE DISCRIMINANT AND THE NATURE OF THE ROOTS

```
  +=============================================================+
  |                                                             |
  |             D  =  b^2  -  4 a c                             |
  |                                                             |
  +=============================================================+
```

```
  +----------------------------+--------------------------------------+
  |   D > 0                    |  REAL and DISTINCT                   |
  |   D = 0                    |  REAL and EQUAL,  both = -b/(2a)     |
  |   D < 0                    |  COMPLEX CONJUGATES  p + iq , p - iq |
  +----------------------------+--------------------------------------+
  |   a, b, c RATIONAL and                                            |
  |   D > 0 a PERFECT SQUARE   |  RATIONAL and DISTINCT               |
  |   D > 0 not perfect square |  IRRATIONAL conjugates  p +- sqrt q  |
  +----------------------------+--------------------------------------+
```

| Fact | When to use |
|------|-------------|
| `D = b^2 - 4ac` | every "nature of roots" question |
| `D = 0` | "equal roots", "repeated root", "touches the x-axis" |
| `D >= 0` | "real roots" (equal is allowed) |
| `D > 0` | "real and distinct", "cuts the x-axis at 2 points" |
| `D < 0` | "no real roots", "imaginary/complex roots" |
| D is a perfect square | "rational roots" / "can be factorised" |
| Irrational roots come in pairs `p + sqrt q` , `p - sqrt q` | given one root, write the other |
| Complex roots come in pairs `p + iq` , `p - iq` | given one root, write the other |
| Repeated root value `= -b/(2a)` | "find the equal root" |

---

# 4. ROOTS AND COEFFICIENTS

```
  +=============================================================+
  |                                                             |
  |                            -b                               |
  |     SUM        S  =  a + b = ----                           |
  |                             a                               |
  |                                                             |
  |                             c                               |
  |     PRODUCT    P  =  a . b = ----                           |
  |                             a                               |
  |                                                             |
  |     FORM AN EQUATION:     x^2  -  S x  +  P  =  0           |
  |                                                             |
  |     If the roots and the leading coefficient a are known:   |
  |         a ( x - alpha )( x - beta )  =  0                   |
  |                                                             |
  +=============================================================+
```

| Formula | When to use |
|---------|-------------|
| `S = -b/a` | any question mentioning the sum of roots |
| `P = c/a` | any question mentioning the product of roots |
| `x^2 - Sx + P = 0` | "form the equation whose roots are ..." |
| If one root is 0 then `c = 0` | quick 2-mark / MCQ |
| If the roots are reciprocals then `a = c` | quick 2-mark / MCQ |
| If the roots are equal in size, opposite in sign then `b = 0` | quick 2-mark / MCQ |
| If one root is the negative of the other then `S = 0`, so `b = 0` | same as above |
| Sum of roots `= 0` and product `< 0` | "roots are equal and opposite" |

---

# 5. SYMMETRIC FUNCTIONS OF THE ROOTS

Everything must be turned into `S` and `P`.

```
  +=====================================================================+
  |                                                                     |
  |   alpha^2 + beta^2      =   S^2 - 2P                                |
  |                                                                     |
  |   (alpha - beta)^2      =   S^2 - 4P    =   D / a^2                 |
  |                                                                     |
  |   alpha - beta          =   +- sqrt(D) / a                          |
  |                                                                     |
  |   alpha^3 + beta^3      =   S^3 - 3 P S                             |
  |                                                                     |
  |   alpha^3 - beta^3      =   (alpha - beta)( S^2 - P )               |
  |                                                                     |
  |   alpha^4 + beta^4      =   ( S^2 - 2P )^2  -  2 P^2                |
  |                                                                     |
  |   alpha^2 . beta^2      =   P^2                                     |
  |                                                                     |
  |     1       1               S                                       |
  |   ----- + ------    =     -----                                     |
  |   alpha    beta             P                                       |
  |                                                                     |
  |     1        1            S^2 - 2P                                  |
  |   ------ + -------  =    ----------                                 |
  |   alpha^2  beta^2           P^2                                     |
  |                                                                     |
  |   alpha     beta          S^2 - 2P                                  |
  |   ----- + -------   =    ----------                                 |
  |   beta     alpha              P                                     |
  |                                                                     |
  |   |alpha - beta|        =   sqrt(D) / |a|                           |
  |                                                                     |
  +=====================================================================+
```

| Expression asked | Convert to | When to use |
|------------------|------------|-------------|
| `alpha^2 + beta^2` | `S^2 - 2P` | most common symmetric question |
| `alpha^3 + beta^3` | `S^3 - 3PS` | 2-mark question |
| `(alpha - beta)^2` | `S^2 - 4P` | needed for "difference of roots" |
| `1/alpha + 1/beta` | `S/P` | reciprocal-root questions |
| `alpha/beta + beta/alpha` | `(S^2 - 2P)/P` | 2-mark question |
| `alpha^4 + beta^4` | `(S^2 - 2P)^2 - 2P^2` | EAPCET objective |

---

# 6. FORMING A NEW EQUATION FROM AN OLD ONE

Old equation `ax^2 + bx + c = 0` has roots alpha, beta.

```
  +---------------------------+-------------------+------------------------+
  |  NEW ROOTS                |  REPLACE x BY     |  RESULTING EQUATION    |
  +---------------------------+-------------------+------------------------+
  |  1/alpha , 1/beta         |  1/x              |  c x^2 + b x + a = 0   |
  |                           |                   |  (REVERSE the coeffs)  |
  +---------------------------+-------------------+------------------------+
  |  -alpha , -beta           |  -x               |  a x^2 - b x + c = 0   |
  |                           |                   |  (flip the sign of b)  |
  +---------------------------+-------------------+------------------------+
  |  k.alpha , k.beta         |  x / k            |  a x^2 + kb x + k^2 c  |
  |                           |                   |  = 0                   |
  +---------------------------+-------------------+------------------------+
  |  alpha + k , beta + k     |  x - k            |  expand a(x-k)^2 +     |
  |                           |                   |  b(x-k) + c = 0        |
  +---------------------------+-------------------+------------------------+
  |  alpha - k , beta - k     |  x + k            |  expand a(x+k)^2 +     |
  |                           |                   |  b(x+k) + c = 0        |
  +---------------------------+-------------------+------------------------+
  |  alpha^2 , beta^2         |  sqrt(x)          |  x^2 - (S^2-2P)x       |
  |                           |  (then square)    |  + P^2 = 0             |
  +---------------------------+-------------------+------------------------+
```

| Method | When to use |
|--------|-------------|
| S-and-P method: find `S'`, `P'`, write `x^2 - S'x + P' = 0` | safe, always works; use in the board exam |
| Substitution method (table above) | faster; use in EAPCET / to check your answer |

---

# 7. COMMON ROOTS

For `a1 x^2 + b1 x + c1 = 0` and `a2 x^2 + b2 x + c2 = 0`:

## Exactly one common root

```
  +=====================================================================+
  |                                                                     |
  |                c1 a2 - c2 a1                     b1 c2 - b2 c1      |
  |    alpha  =  -----------------      alpha^2  =  -----------------   |
  |                a1 b2 - a2 b1                     a1 b2 - a2 b1      |
  |                                                                     |
  |    CONDITION:                                                       |
  |                                                                     |
  |      ( c1 a2 - c2 a1 )^2  =  ( a1 b2 - a2 b1 )( b1 c2 - b2 c1 )     |
  |                                                                     |
  +=====================================================================+
```

## Both roots common

```
  +=====================================================================+
  |                                                                     |
  |            a1        b1        c1                                   |
  |           ----  =   ----  =   ----                                  |
  |            a2        b2        c2                                   |
  |                                                                     |
  |   (the two equations are just multiples of each other)              |
  |                                                                     |
  +=====================================================================+
```

| Method | When to use |
|--------|-------------|
| SUBTRACT the equations to get a linear one, solve for x | fastest in the exam when `a1 = a2` |
| Cross-multiplication formula above | when the coefficients are messy or letters |
| `a1/a2 = b1/b2 = c1/c2` | "both roots common" / "identical equations" |

---

# 8. THE SIGN OF A QUADRATIC EXPRESSION

```
  +=====================================================================+
  |                                                                     |
  |   ax^2 + bx + c  has the SAME SIGN AS  a  for all real x,           |
  |   EXCEPT strictly BETWEEN the roots, where it is opposite to a.     |
  |                                                                     |
  |   If D < 0 there is no "between", so the sign of a holds            |
  |   for EVERY real x.                                                 |
  |                                                                     |
  +=====================================================================+
```

```
  a > 0                                    a < 0
  D > 0        \       /                   D > 0      ______
                \     /                              /      \
    ------------\-----/-----------          --------/--------\--------
            al   \   /   be                     al  \        /  be
                  \_/                                \      /

    + outside , - between                    - outside , + between


  a > 0 , D < 0     \     /               a < 0 , D < 0   ------------
                     \   /                                  /      \
    ------------------\_/--------                          /        \
                                                          /          \
    ALWAYS POSITIVE                         ALWAYS NEGATIVE
```

| Condition wanted | Requirement |
|------------------|-------------|
| `f(x) > 0` for all real x | `a > 0` and `D < 0` |
| `f(x) < 0` for all real x | `a < 0` and `D < 0` |
| `f(x) >= 0` for all real x | `a > 0` and `D <= 0` |
| `f(x) <= 0` for all real x | `a < 0` and `D <= 0` |
| `f(x)` takes both signs | `D > 0` |
| `f(x) = 0` for exactly one x | `D = 0` |

---

# 9. QUADRATIC INEQUATIONS

```
  +=====================================================================+
  |   RECIPE                                                            |
  |                                                                     |
  |   1.  Bring everything to one side, 0 on the other.                 |
  |   2.  Make the coefficient of x^2 POSITIVE                          |
  |       (multiply by -1 and FLIP the inequality if needed).           |
  |   3.  Find the roots r1 < r2.                                       |
  |   4.  Draw the number line and mark  +  -  +                        |
  |   5.  Pick the regions with the sign you want.                      |
  +=====================================================================+


                    +              -              +
          <------------------ r1 --------- r2 ------------------>


  ax^2 + bx + c > 0  with a > 0    ->   x < r1   OR   x > r2   (OUTSIDE)
  ax^2 + bx + c < 0  with a > 0    ->   r1 < x < r2            (BETWEEN)
```

| Sign wanted (after making a > 0) | Answer |
|----------------------------------|--------|
| `> 0` | `x < r1` or `x > r2` |
| `>= 0` | `x <= r1` or `x >= r2` |
| `< 0` | `r1 < x < r2` |
| `<= 0` | `r1 <= x <= r2` |
| `> 0` and `D < 0` | all real x |
| `< 0` and `D < 0` | no solution (empty set) |

**For a fraction inequation** `N(x)/M(x) > 0`: mark the zeros of BOTH the
numerator and the denominator on the number line, but the denominator zeros
are **always excluded** (open circles).

---

# 10. MAXIMUM, MINIMUM AND RANGE

```
  +=====================================================================+
  |                                                                     |
  |                                        -b                           |
  |     The turning point is at    x  =  ------                         |
  |                                        2a                           |
  |                                                                     |
  |                                    4ac - b^2        -D              |
  |     The value there is       f  =  -----------  =  ------           |
  |                                        4a           4a              |
  |                                                                     |
  |     a > 0   ->   this is the MINIMUM.   No maximum exists.          |
  |     a < 0   ->   this is the MAXIMUM.   No minimum exists.          |
  |                                                                     |
  |     RANGE                                                           |
  |                                                                     |
  |       a > 0   ->   [ -D/(4a) ,  infinity )                          |
  |       a < 0   ->   ( -infinity ,  -D/(4a) ]                         |
  |                                                                     |
  +=====================================================================+
```

| Formula | When to use |
|---------|-------------|
| `x = -b/(2a)` | "at what value of x is the max/min attained?" |
| `-D/(4a)` = `(4ac - b^2)/(4a)` | "find the maximum/minimum value" |
| Range `[-D/4a, inf)` when `a > 0` | "find the range of the expression" |
| Range `(-inf, -D/4a]` when `a < 0` | "find the range of the expression" |
| Vertex form `a(x + b/2a)^2 + (4ac-b^2)/4a` | to PROVE the max/min result |
| Two numbers with fixed sum have max product when equal | word problems |

---

# 11. RANGE OF A RATIONAL EXPRESSION  (the 7-mark question)

```
                  a1 x^2 + b1 x + c1
            y  =  --------------------
                  a2 x^2 + b2 x + c2
```

```
  +=====================================================================+
  |                                                                     |
  |   1.  Show the DENOMINATOR never vanishes:  b2^2 - 4 a2 c2 < 0.     |
  |                                                                     |
  |   2.  Cross-multiply:   y(a2 x^2 + b2 x + c2) = a1 x^2 + b1 x + c1  |
  |                                                                     |
  |   3.  Collect as a quadratic IN x :                                 |
  |                                                                     |
  |         (a2 y - a1) x^2 + (b2 y - b1) x + (c2 y - c1)  =  0         |
  |            \_____/          \_____/          \_____/                |
  |               A                B                C                   |
  |                                                                     |
  |   4.  x is real   ->   B^2 - 4 A C  >=  0                           |
  |                                                                     |
  |       ( b2 y - b1 )^2  -  4 ( a2 y - a1 )( c2 y - c1 )  >=  0       |
  |                                                                     |
  |   5.  Solve this INEQUATION IN y by the number-line method.         |
  |       The solution set IS the range.                                |
  |                                                                     |
  +=====================================================================+
```

| Step | Why the examiner gives marks for it |
|------|------------------------------------|
| Stating the denominator has `D < 0` | 1 mark, and it justifies "for all real x" |
| Getting the correct quadratic in x | 2 marks |
| Writing `B^2 - 4AC >= 0` | 1 mark |
| Simplifying to a quadratic inequation in y | 2 marks |
| Solving and writing the range as an interval | 1 mark |

**Worth remembering:** the answer is almost always a closed interval `[m, M]`
because of the "or equal to" in `>= 0`.

---

# 12. RESOLVING INTO LINEAR FACTORS

```
  +=====================================================================+
  |                                                                     |
  |  ONE VARIABLE                                                       |
  |                                                                     |
  |    ax^2 + bx + c  (a,b,c rational) splits into two rational         |
  |    linear factors   <=>   D = b^2 - 4ac  is a PERFECT SQUARE.       |
  |                                                                     |
  +=====================================================================+
  |                                                                     |
  |  TWO VARIABLES                                                      |
  |                                                                     |
  |    ax^2 + 2hxy + by^2 + 2gx + 2fy + c   splits into two linear      |
  |    factors                                                          |
  |                                                                     |
  |     <=>   a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2  =  0     |
  |                                                                     |
  +=====================================================================+
```

**Reading off the letters — do this slowly, it is where marks are lost:**

```
    a x^2            ->   a
    (coeff of xy)    ->   2h      so   h = (coeff of xy) / 2
    b y^2            ->   b
    (coeff of x)     ->   2g      so   g = (coeff of x) / 2
    (coeff of y)     ->   2f      so   f = (coeff of y) / 2
    constant         ->   c
```

| Formula | When to use |
|---------|-------------|
| `D` is a perfect square | "can `ax^2+bx+c` be factorised over the rationals?" |
| `abc + 2fgh - af^2 - bg^2 - ch^2 = 0` | "find k so that the expression is resolvable into linear factors" |
| Same condition | "show that the equation represents a pair of straight lines" |

---

# 13. LOCATION OF THE ROOTS

`f(x) = ax^2 + bx + c`, `S = -b/a`, `P = c/a`, `D = b^2 - 4ac`.

```
  +--------------------------------+-----------------------------------------+
  |  REQUIREMENT                   |  CONDITIONS (ALL must hold)             |
  +--------------------------------+-----------------------------------------+
  |  Both roots POSITIVE           |  D >= 0 ,  S > 0 ,  P > 0               |
  |  Both roots NEGATIVE           |  D >= 0 ,  S < 0 ,  P > 0               |
  |  Roots of OPPOSITE SIGNS       |  P < 0                                  |
  |  One root is ZERO              |  c = 0                                  |
  |  Both roots ZERO               |  b = 0  and  c = 0                      |
  |  Roots equal and opposite      |  b = 0  (and D > 0)                     |
  |  Roots are reciprocals         |  a = c                                  |
  |  Both roots GREATER than k     |  D >= 0 , a.f(k) > 0 , -b/(2a) > k      |
  |  Both roots LESS than k        |  D >= 0 , a.f(k) > 0 , -b/(2a) < k      |
  |  k lies BETWEEN the roots      |  a . f(k) < 0                           |
  |  Roots lie inside (k1 , k2)    |  D >= 0 , a.f(k1) > 0 , a.f(k2) > 0 ,   |
  |                                |  k1 < -b/(2a) < k2                      |
  |  Exactly one root in (k1, k2)  |  f(k1) . f(k2) < 0                      |
  +--------------------------------+-----------------------------------------+
```

| Tool | When to use |
|------|-------------|
| `P < 0` | the fastest test — "roots of opposite signs" |
| `a . f(k)` sign test | any "roots greater / less than k" question |
| Vertex `-b/(2a)` position | tells you which side of k the roots sit |
| Number-line overlap of all conditions | the final step of every location question |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
   1.   x  =  ( -b +- sqrt(b^2 - 4ac) ) / (2a)

   2.   D  =  b^2 - 4ac
        D > 0 real distinct , D = 0 real equal , D < 0 complex

   3.   S  =  alpha + beta  =  -b / a

   4.   P  =  alpha . beta  =   c / a

   5.   Equation from roots:   x^2 - Sx + P = 0

   6.   alpha^2 + beta^2  =  S^2 - 2P

   7.   alpha^3 + beta^3  =  S^3 - 3PS

   8.   (alpha - beta)^2  =  S^2 - 4P  =  D / a^2

   9.   Same sign as a, EXCEPT between the roots

  10.   Turning point at  x = -b/(2a) ,  value  = -D/(4a)
        a > 0 minimum , a < 0 maximum

  11.   Range of a fraction:  cross-multiply, quadratic in x,
        then  B^2 - 4AC >= 0

  12.   Opposite signs  ->  P < 0
        Both roots > k  ->  D >= 0 , a.f(k) > 0 , -b/2a > k
```
