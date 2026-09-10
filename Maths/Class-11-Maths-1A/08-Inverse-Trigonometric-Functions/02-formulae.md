# Inverse Trigonometric Functions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use each formula — that is what exams actually test.

> **Every formula in this chapter has a CONDITION attached.**
> A formula written without its condition is worth about half marks.
> The condition column below is not decoration. Write it in the exam.

---

# 1. THE MASTER TABLE — DOMAIN AND PRINCIPAL VALUE RANGE

**Nothing else in this chapter works until this is memorised.**

```
  +-------------+---------------------------+-------------------------------+
  |  FUNCTION   |  DOMAIN (allowed x)       |  PRINCIPAL RANGE (the answer) |
  +-------------+---------------------------+-------------------------------+
  |  sin^-1 x   |  [ -1 , 1 ]               |  [ -pi/2 , pi/2 ]             |
  |  cos^-1 x   |  [ -1 , 1 ]               |  [   0   ,  pi  ]             |
  |  tan^-1 x   |  R  (every real number)   |  ( -pi/2 , pi/2 )   OPEN      |
  |  cot^-1 x   |  R  (every real number)   |  (   0   ,  pi  )   OPEN      |
  |  sec^-1 x   |  |x| >= 1                 |  [ 0 , pi ]  minus  pi/2      |
  | cosec^-1 x  |  |x| >= 1                 |  [-pi/2, pi/2] minus  0       |
  +-------------+---------------------------+-------------------------------+

     [ ] = endpoint included     ( ) = endpoint NOT included
```

| Fact | When to use |
|---|---|
| "sin family" — `sin^-1`, `cosec^-1`, `tan^-1` — answers in `[-pi/2, pi/2]`, CAN be negative | deciding the sign of an answer |
| "cos family" — `cos^-1`, `sec^-1`, `cot^-1` — answers in `[0, pi]`, NEVER negative | catching the classic wrong answer |
| `sin^-1 x` undefined for `|x| > 1` | "find `sin^-1(2)`" — answer: not defined |
| `sec^-1 x`, `cosec^-1 x` undefined for `|x| < 1` | "find `sec^-1(1/2)`" — answer: not defined |
| `pi/2` excluded from `sec^-1` range (`sec pi/2` undefined) | range statements |
| `0` excluded from `cosec^-1` range (`cosec 0` undefined) | range statements |
| `tan^-1`, `cot^-1` ranges are OPEN (asymptotes) | range statements |

---

# 2. STANDARD VALUES — LEARN THESE COLD

```
   x           0      1/2     1/sqrt2   sqrt3/2     1
  --------------------------------------------------------
   sin^-1 x    0      pi/6     pi/4      pi/3      pi/2
   cos^-1 x   pi/2    pi/3     pi/4      pi/6        0


   x           0    1/sqrt3     1       sqrt3
  --------------------------------------------------------
   tan^-1 x    0      pi/6     pi/4      pi/3
   cot^-1 x   pi/2    pi/3     pi/4      pi/6


   x           1     2/sqrt3   sqrt2       2
  --------------------------------------------------------
   sec^-1 x    0      pi/6     pi/4      pi/3
  cosec^-1 x  pi/2    pi/3     pi/4      pi/6
```

Notice the pattern: each "cos family" row is `pi/2` minus the row above it.

---

# 3. NEGATIVE ARGUMENT (ODD / SUPPLEMENTARY) PROPERTIES

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   SIN FAMILY  --  flip the sign                                         |
  |      sin^-1 (-x)   =  - sin^-1 x                    x in [-1, 1]        |
  |      tan^-1 (-x)   =  - tan^-1 x                    x in R              |
  |      cosec^-1(-x)  =  - cosec^-1 x                  |x| >= 1            |
  |                                                                         |
  |   COS FAMILY  --  subtract from pi                                      |
  |      cos^-1 (-x)   =  pi - cos^-1 x                 x in [-1, 1]        |
  |      cot^-1 (-x)   =  pi - cot^-1 x                 x in R              |
  |      sec^-1 (-x)   =  pi - sec^-1 x                 |x| >= 1            |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `sin^-1(-x) = -sin^-1 x` | any 2-mark principal value with a minus sign |
| `cos^-1(-x) = pi - cos^-1 x` | the most-tested single line in the chapter |
| `cot^-1(-x) = pi - cot^-1 x` | `cot^-1(-1) = 3pi/4`, a favourite |
| `sec^-1(-x) = pi - sec^-1 x` | `sec^-1(-2) = 2pi/3` |
| `cosec^-1(-x) = -cosec^-1 x` | `cosec^-1(-2) = -pi/6` |

**Ready-made answers (verify each by taking the trig ratio back):**

| Expression | Answer | Expression | Answer |
|---|---|---|---|
| `sin^-1(-1/2)` | `-pi/6` | `cos^-1(-1/2)` | `2pi/3` |
| `sin^-1(-1/sqrt2)` | `-pi/4` | `cos^-1(-1/sqrt2)` | `3pi/4` |
| `sin^-1(-sqrt3/2)` | `-pi/3` | `cos^-1(-sqrt3/2)` | `5pi/6` |
| `sin^-1(-1)` | `-pi/2` | `cos^-1(-1)` | `pi` |
| `tan^-1(-1)` | `-pi/4` | `cot^-1(-1)` | `3pi/4` |
| `tan^-1(-sqrt3)` | `-pi/3` | `cot^-1(-sqrt3)` | `5pi/6` |
| `tan^-1(-1/sqrt3)` | `-pi/6` | `cot^-1(-1/sqrt3)` | `2pi/3` |
| `cosec^-1(-2)` | `-pi/6` | `sec^-1(-2)` | `2pi/3` |
| `cosec^-1(-sqrt2)` | `-pi/4` | `sec^-1(-sqrt2)` | `3pi/4` |

---

# 4. CANCELLING RULES

```
  +-------------------------------------------------------------------------+
  |  ALWAYS TRUE (function outside, inverse inside)                         |
  |                                                                         |
  |     sin( sin^-1 x )    = x        x in [-1, 1]                          |
  |     cos( cos^-1 x )    = x        x in [-1, 1]                          |
  |     tan( tan^-1 x )    = x        x in R                                |
  |     cot( cot^-1 x )    = x        x in R                                |
  |     sec( sec^-1 x )    = x        |x| >= 1                              |
  |     cosec(cosec^-1 x)  = x        |x| >= 1                              |
  +-------------------------------------------------------------------------+

  +-------------------------------------------------------------------------+
  |  CONDITIONAL (inverse outside, function inside) -- CHECK THE RANGE      |
  |                                                                         |
  |     sin^-1( sin t )    = t   ONLY IF  t in [-pi/2, pi/2]                |
  |     cos^-1( cos t )    = t   ONLY IF  t in [ 0 , pi ]                   |
  |     tan^-1( tan t )    = t   ONLY IF  t in (-pi/2, pi/2)                |
  |     cot^-1( cot t )    = t   ONLY IF  t in ( 0 , pi )                   |
  |     sec^-1( sec t )    = t   ONLY IF  t in [0, pi] , t =/= pi/2         |
  |    cosec^-1(cosec t)   = t   ONLY IF  t in [-pi/2, pi/2] , t =/= 0      |
  +-------------------------------------------------------------------------+
```

**The repair kit when `t` is outside the range:**

```
  sin(t) = sin(pi - t) = sin(t + 2n pi)         period 2pi
  cos(t) = cos(-t) = cos(2pi - t) = cos(t + 2n pi)   period 2pi
  tan(t) = tan(t + n pi)                        period pi  (NOT 2pi)
```

| Expression | Answer | Why |
|---|---|---|
| `sin^-1(sin(3pi/4))` | `pi/4` | `sin(pi - 3pi/4) = sin(pi/4)` |
| `sin^-1(sin(5pi/6))` | `pi/6` | `sin(pi - 5pi/6) = sin(pi/6)` |
| `sin^-1(sin(-7pi/6))` | `pi/6` | add `2pi`, then `pi - 5pi/6` |
| `cos^-1(cos(4pi/3))` | `2pi/3` | `cos(2pi - 4pi/3) = cos(2pi/3)` |
| `cos^-1(cos(5pi/3))` | `pi/3` | `cos(2pi - 5pi/3) = cos(pi/3)` |
| `cos^-1(cos(13pi/6))` | `pi/6` | subtract `2pi` |
| `cos^-1(cos(7pi/6))` | `5pi/6` | `cos(2pi - 7pi/6) = cos(5pi/6)` |
| `tan^-1(tan(3pi/4))` | `-pi/4` | subtract `pi` |
| `tan^-1(tan(7pi/6))` | `pi/6` | subtract `pi` |
| `tan^-1(tan(2pi/3))` | `-pi/3` | subtract `pi` |

---

# 5. COMPLEMENTARY (SUM = pi/2) PROPERTIES

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |     sin^-1 x  +  cos^-1 x   =  pi/2          x in [-1, 1]               |
  |     tan^-1 x  +  cot^-1 x   =  pi/2          x in R                     |
  |     sec^-1 x  + cosec^-1 x  =  pi/2          |x| >= 1                   |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `sin^-1 x + cos^-1 x = pi/2` | given one, find the other; spotting cancelling pairs |
| `tan^-1 x + cot^-1 x = pi/2` | same |
| `sec^-1 x + cosec^-1 x = pi/2` | same |
| `tan^-1 a + tan^-1(1/a) = pi/2` for `a > 0` | the boundary case `xy = 1` — appears constantly |
| `tan^-1 a + tan^-1(1/a) = -pi/2` for `a < 0` | the negative version |

---

# 6. RECIPROCAL RELATIONS

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |     sin^-1 (1/x)   =  cosec^-1 x            |x| >= 1                    |
  |     cosec^-1(1/x)  =  sin^-1 x              0 < |x| <= 1                |
  |                                                                         |
  |     cos^-1 (1/x)   =  sec^-1 x              |x| >= 1                    |
  |     sec^-1 (1/x)   =  cos^-1 x              0 < |x| <= 1                |
  |                                                                         |
  |     tan^-1 (1/x)   =  cot^-1 x              x > 0     <-- x > 0 ONLY    |
  |     tan^-1 (1/x)   =  cot^-1 x  -  pi       x < 0                       |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

> **The tan one is the odd one out.** `tan^-1(-1) = -pi/4` but `cot^-1(-1) = 3pi/4`.
> They differ by `pi`. `sin^-1`/`cosec^-1` and `cos^-1`/`sec^-1` never have this
> problem because each pair shares a range.

---

# 7. SUM AND DIFFERENCE OF TWO `tan^-1` — THE 4-MARK ENGINE

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |                                      x + y                               |
  |   CASE 1   tan^-1 x + tan^-1 y = tan^-1 -------      if  x y < 1         |
  |                                      1 - x y                             |
  |                                                                          |
  |                                           x + y                          |
  |   CASE 2   tan^-1 x + tan^-1 y = pi + tan^-1 -------                     |
  |                                           1 - x y                        |
  |                                       if  x y > 1 ,  x > 0 ,  y > 0      |
  |                                                                          |
  |                                            x + y                         |
  |   CASE 3   tan^-1 x + tan^-1 y = -pi + tan^-1 -------                    |
  |                                            1 - x y                       |
  |                                       if  x y > 1 ,  x < 0 ,  y < 0      |
  |                                                                          |
  |   BOUNDARY  x y = 1 :   sum = pi/2  if x > 0 ;   sum = -pi/2  if x < 0   |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                      x - y                               |
  |   CASE 1   tan^-1 x - tan^-1 y = tan^-1 -------      if  x y > -1        |
  |                                      1 + x y                             |
  |                                                                          |
  |   CASE 2   add  + pi        if  x y < -1 ,  x > 0 ,  y < 0               |
  |   CASE 3   add  - pi        if  x y < -1 ,  x < 0 ,  y > 0               |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| Case 1 sum | almost every board question (the fractions given are small) |
| Case 2 sum (`+pi`) | `tan^-1 2 + tan^-1 3 = 3pi/4`, EAPCET favourite |
| Case 3 sum (`-pi`) | `tan^-1(-2) + tan^-1(-3) = -3pi/4` |
| Boundary `xy = 1` | `tan^-1(4/3) + tan^-1(3/4) = pi/2` |
| Difference | rearranging equations, `tan^-1((1-x)/(1+x))` questions |
| `tan^-1((1-x)/(1+x)) = pi/4 - tan^-1 x`, `x > -1` | instant recognition, saves 3 minutes |
| `tan^-1(x/y) - tan^-1((x-y)/(x+y)) = pi/4`, `x, y > 0` | a standard 4-mark proof |

---

# 8. DOUBLE AND TRIPLE ANGLE

```
  +--------------------------------------------------------------------------+
  |                              2x                                          |
  |   2 tan^-1 x  =  tan^-1  ---------            |x| < 1                    |
  |                           1 - x^2                                        |
  |                                                                          |
  |                              2x                                          |
  |   2 tan^-1 x  =  sin^-1  ---------            |x| <= 1                   |
  |                           1 + x^2                                        |
  |                                                                          |
  |                           1 - x^2                                        |
  |   2 tan^-1 x  =  cos^-1  ---------            x >= 0                     |
  |                           1 + x^2                                        |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |   2 sin^-1 x  =  sin^-1 ( 2x sqrt(1 - x^2) )       |x| <= 1/sqrt2        |
  |   2 cos^-1 x  =  cos^-1 ( 2x^2 - 1 )               0 <= x <= 1           |
  |                                                                          |
  |                             3x - x^3                                     |
  |   3 tan^-1 x  =  tan^-1  ------------              |x| < 1/sqrt3         |
  |                            1 - 3x^2                                      |
  |                                                                          |
  |   3 sin^-1 x  =  sin^-1 ( 3x - 4x^3 )              |x| <= 1/2            |
  |   3 cos^-1 x  =  cos^-1 ( 4x^3 - 3x )              1/2 <= x <= 1         |
  +--------------------------------------------------------------------------+
```

**Where the conditions come from:**

| Form | Answer must lie in | So `tan^-1 x` must lie in | Giving |
|---|---|---|---|
| `tan^-1` form | `(-pi/2, pi/2)` | `(-pi/4, pi/4)` | `|x| < 1` |
| `sin^-1` form | `[-pi/2, pi/2]` | `[-pi/4, pi/4]` | `|x| <= 1` |
| `cos^-1` form | `[0, pi]` | `[0, pi/2)` | `x >= 0` |

---

# 9. SUM OF TWO `sin^-1` AND TWO `cos^-1`

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   sin^-1 x + sin^-1 y                                                    |
  |      = sin^-1 ( x sqrt(1-y^2) + y sqrt(1-x^2) )                          |
  |            if  x^2 + y^2 <= 1 ,  OR  ( x^2 + y^2 > 1  and  x y < 0 )     |
  |                                                                          |
  |      = pi  - sin^-1 (same)   if  x > 0 , y > 0 , x^2 + y^2 > 1           |
  |      = -pi - sin^-1 (same)   if  x < 0 , y < 0 , x^2 + y^2 > 1           |
  |                                                                          |
  |   sin^-1 x - sin^-1 y = sin^-1 ( x sqrt(1-y^2) - y sqrt(1-x^2) )         |
  |            if  x^2 + y^2 <= 1 ,  OR  ( x^2 + y^2 > 1  and  x y > 0 )     |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |   cos^-1 x + cos^-1 y                                                    |
  |      = cos^-1 ( x y - sqrt(1-x^2) sqrt(1-y^2) )       if  x + y >= 0     |
  |      = 2pi - cos^-1 ( same )                          if  x + y < 0      |
  |                                                                          |
  |   cos^-1 x - cos^-1 y                                                    |
  |      = cos^-1 ( x y + sqrt(1-x^2) sqrt(1-y^2) )       if  x <= y         |
  |      = - cos^-1 ( same )                              if  x >= y         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Memory hook:** the `cos^-1` bracket is exactly `cos(A+B) = cosA cosB - sinA sinB`
read backwards. The `sin^-1` bracket is `sin(A+B) = sinA cosB + cosA sinB`.

---

# 10. CONVERTING ONE INVERSE INTO ANOTHER

Method: draw a right triangle, label two sides, get the third by Pythagoras.

```
                 |\
                 | \
       opposite  |  \  hypotenuse
                 |   \
                 |____\
                adjacent
```

```
  +--------------------------------------------------------------------------+
  |   For  0 <= x <= 1 :                                                     |
  |                                                                          |
  |     sin^-1 x = cos^-1 sqrt(1 - x^2) = tan^-1 ( x / sqrt(1 - x^2) )       |
  |                                                                          |
  |     cos^-1 x = sin^-1 sqrt(1 - x^2) = tan^-1 ( sqrt(1 - x^2) / x )       |
  |                                                                          |
  |   For  x >= 0 :                                                          |
  |                                                                          |
  |     tan^-1 x = sin^-1 ( x / sqrt(1 + x^2) ) = cos^-1 ( 1 / sqrt(1+x^2) ) |
  |                                                                          |
  |   For NEGATIVE x, first pull the sign out with the Section 3 rules,      |
  |   THEN convert.                                                          |
  +--------------------------------------------------------------------------+
```

**The Pythagorean triples that keep coming back:**

| Triple | `sin^-1` | equals `cos^-1` | equals `tan^-1` |
|---|---|---|---|
| 3, 4, 5 | `sin^-1(3/5)` | `cos^-1(4/5)` | `tan^-1(3/4)` |
| 3, 4, 5 | `sin^-1(4/5)` | `cos^-1(3/5)` | `tan^-1(4/3)` |
| 5, 12, 13 | `sin^-1(5/13)` | `cos^-1(12/13)` | `tan^-1(5/12)` |
| 8, 15, 17 | `sin^-1(8/17)` | `cos^-1(15/17)` | `tan^-1(8/15)` |
| 7, 24, 25 | `sin^-1(7/25)` | `cos^-1(24/25)` | `tan^-1(7/24)` |
| 16, 63, 65 | `sin^-1(16/65)` | `cos^-1(63/65)` | `tan^-1(16/63)` |
| 33, 56, 65 | `sin^-1(33/65)` | `cos^-1(56/65)` | `tan^-1(33/56)` |
| 13, 84, 85 | `sin^-1(13/85)` | `cos^-1(84/85)` | `tan^-1(13/84)` |
| 77, 36, 85 | `sin^-1(77/85)` | `cos^-1(36/85)` | `tan^-1(77/36)` |
| 20, 21, 29 | `sin^-1(20/29)` | `cos^-1(21/29)` | `tan^-1(20/21)` |

---

# 11. CONDITIONAL IDENTITIES (the "if ... then prove" family)

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  tan^-1 x + tan^-1 y + tan^-1 z = pi      =>   x + y + z = x y z         |
  |                                                                          |
  |  tan^-1 x + tan^-1 y + tan^-1 z = pi/2    =>   x y + y z + z x = 1       |
  |                                                                          |
  |  cos^-1 x + cos^-1 y + cos^-1 z = pi      =>   x^2+y^2+z^2 + 2xyz = 1    |
  |                                                                          |
  |  sin^-1 x + sin^-1 y + sin^-1 z = pi      =>                             |
  |        x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2 x y z           |
  |                                                                          |
  |  sin^-1 x + sin^-1 y + sin^-1 z = 3pi/2   =>   x = y = z = 1             |
  |                                               so  x + y + z = 3          |
  |                                                                          |
  |  cos^-1 x + cos^-1 y + cos^-1 z = 3pi     =>   x = y = z = -1            |
  |                                               so  x y + y z + z x = 3    |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**How they are proved (all the same way):** put `A = tan^-1 x` etc., so
`A + B + C = pi`, then use `tan(A + B) = tan(pi - C) = -tan C`.

---

# 12. RESULTS YOU CAN QUOTE DIRECTLY

These are proved often enough that quoting them (with a one-line justification)
is accepted.

```
  tan^-1(1/2)  + tan^-1(1/5)  + tan^-1(1/8)                     =  pi/4
  tan^-1(1/3)  + tan^-1(1/5)  + tan^-1(1/7) + tan^-1(1/8)       =  pi/4
  tan^-1(1/2)  + tan^-1(1/3)                                    =  pi/4
  tan^-1(1/7)  + tan^-1(1/13)                                   =  tan^-1(2/9)
  tan^-1(1/2)  + tan^-1(2/11)                                   =  tan^-1(3/4)
  4 tan^-1(1/5) - tan^-1(1/70) + tan^-1(1/99)                   =  pi/4
  tan^-1 2 + tan^-1 3                                           =  3pi/4
  cot^-1 9 + cosec^-1(sqrt41 / 4)                               =  pi/4

  sin^-1(4/5)  + sin^-1(5/13) + sin^-1(16/65)                   =  pi/2
  sin^-1(3/5)  + sin^-1(8/17)                                   =  cos^-1(36/85)
  sin^-1(3/5)  - sin^-1(8/17)                                   =  cos^-1(84/85)
  sin^-1(4/5)  + 2 tan^-1(1/3)                                  =  pi/2
  cos^-1(4/5)  + cos^-1(12/13)                                  =  cos^-1(33/65)
  sin^-1(4/5)  + sin^-1(12/13)                       =  pi - sin^-1(56/65)

  tan^-1((1-x)/(1+x))            =  pi/4 - tan^-1 x         for x > -1
  tan^-1((sqrt(1+x^2) - 1)/x)    =  (1/2) tan^-1 x          for x > 0
  tan^-1(sqrt((1-cos x)/(1+cos x))) = x/2                   for 0 < x < pi
```

**Why that last `sin^-1` result has a `pi` in it — the classic trap.**

```
  x = 4/5 , y = 12/13 .
  x^2 + y^2 = 16/25 + 144/169 = (2704 + 3600)/4225 = 6304/4225 > 1
  and x > 0 , y > 0        ->  the  " pi - "  case applies

  x sqrt(1-y^2) + y sqrt(1-x^2) = (4/5)(5/13) + (12/13)(3/5)
                                = 20/65 + 36/65 = 56/65

  So the sum is  pi - sin^-1(56/65) ,  NOT  sin^-1(56/65) .

  DECIMAL CHECK:  sin^-1(0.8) = 0.9273 , sin^-1(12/13) = 1.1760 , total 2.1033
                  sin^-1(56/65) = 1.0383 ,  pi - 1.0383 = 2.1033 .   MATCHES.
                  (sin^-1(56/65) alone = 1.0383 would have been WRONG.)
```

Whenever `x` and `y` are both large and positive, expect the `pi` correction.

---

# 13. THE HYPERBOLIC SIDE (Chapter 9, listed here for completeness)

```
  +--------------------------------------------------------------------------+
  |   sinh^-1 x   = log( x + sqrt(x^2 + 1) )              x in R             |
  |   cosh^-1 x   = log( x + sqrt(x^2 - 1) )              x >= 1             |
  |   tanh^-1 x   = (1/2) log( (1 + x)/(1 - x) )          |x| < 1            |
  |   coth^-1 x   = (1/2) log( (x + 1)/(x - 1) )          |x| > 1            |
  |   sech^-1 x   = log( (1 + sqrt(1 - x^2)) / x )        0 < x <= 1         |
  |  cosech^-1 x  = log( (1/x) + sqrt(1 + x^2)/|x| )      x =/= 0            |
  +--------------------------------------------------------------------------+
```
`sinh` is one-one on all of R, so `sinh^-1` needs no restricted domain at all.
`cosh` is even (many-one), so `cosh^-1` is restricted to `x >= 1` with a
non-negative answer — the same logic as `cos^-1`.

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  1.  sin^-1 : [-1,1] -> [-pi/2, pi/2]      cos^-1 : [-1,1] -> [0, pi]    |
  |      tan^-1 : R -> (-pi/2, pi/2)           cot^-1 : R -> (0, pi)         |
  |      sec^-1 : |x|>=1 -> [0,pi]\{pi/2}   cosec^-1 : |x|>=1 -> [-pi/2,pi/2]\{0}
  |                                                                          |
  |  2.  sin^-1(-x) = -sin^-1 x        cos^-1(-x) = pi - cos^-1 x            |
  |      tan^-1(-x) = -tan^-1 x        cot^-1(-x) = pi - cot^-1 x            |
  |                                                                          |
  |  3.  sin^-1 x + cos^-1 x = pi/2          x in [-1, 1]                    |
  |                                                                          |
  |  4.  tan^-1 x + cot^-1 x = pi/2          x in R                          |
  |                                                                          |
  |  5.  sec^-1 x + cosec^-1 x = pi/2        |x| >= 1                        |
  |                                                                          |
  |  6.  sin^-1(1/x) = cosec^-1 x            |x| >= 1                        |
  |      cos^-1(1/x) = sec^-1 x              |x| >= 1                        |
  |      tan^-1(1/x) = cot^-1 x              x > 0  ONLY                     |
  |                                                                          |
  |  7.  tan^-1 x + tan^-1 y = tan^-1((x+y)/(1-xy))       if xy < 1          |
  |             + pi   if xy > 1, x,y > 0                                    |
  |             - pi   if xy > 1, x,y < 0                                    |
  |                                                                          |
  |  8.  tan^-1 x - tan^-1 y = tan^-1((x-y)/(1+xy))       if xy > -1         |
  |                                                                          |
  |  9.  2 tan^-1 x = tan^-1(2x/(1-x^2))   |x| < 1                           |
  |                 = sin^-1(2x/(1+x^2))   |x| <= 1                          |
  |                 = cos^-1((1-x^2)/(1+x^2))   x >= 0                       |
  |                                                                          |
  | 10.  sin^-1 x + sin^-1 y = sin^-1( x sqrt(1-y^2) + y sqrt(1-x^2) )       |
  |                            if x^2 + y^2 <= 1                             |
  |                                                                          |
  | 11.  cos^-1 x + cos^-1 y = cos^-1( xy - sqrt(1-x^2) sqrt(1-y^2) )        |
  |                            if x + y >= 0                                 |
  |                                                                          |
  | 12.  sin^-1(sin t) = t ONLY IF t is in [-pi/2, pi/2].                    |
  |      Otherwise use sin t = sin(pi - t) first.                            |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**And the one habit that earns marks on its own:**
next to every formula you write, write its condition.
