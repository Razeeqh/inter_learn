# Partial Fractions — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from Partial Fractions:**

```
  AP EAPCET  (Maths, 80 questions)  ->  0 to 1 as a direct question
  TG EAPCET  (Maths, 80 questions)  ->  0 to 1 as a direct question
  JEE Main   (Maths, 25 questions)  ->  0 as a direct question
```

```
  +--------------------------------------------------------------------+
  |  HONEST NOTE - READ THIS FIRST                                     |
  |                                                                    |
  |  Partial Fractions is almost never asked on its own in EAPCET or   |
  |  JEE. It appears as a TOOL hidden inside other questions:          |
  |                                                                    |
  |      * INDEFINITE INTEGRATION   (3 to 5 questions in EAPCET)       |
  |      * DEFINITE INTEGRATION                                        |
  |      * Summation of series like  1/(1.2) + 1/(2.3) + ...           |
  |      * Inverse Laplace-type manipulations in engineering later     |
  |                                                                    |
  |  So the pay-off is INDIRECT but large. A student who splits a      |
  |  fraction in 20 seconds finishes integration questions that other  |
  |  students abandon.                                                 |
  +--------------------------------------------------------------------+
```

> Questions below are grouped by PATTERN, not by year, because the pattern is
> what repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Find ONE coefficient (pure cover-up, free marks)

### Q1
```
      3x + 7                A            B
  --------------   =   ----------  +  ----------      Then A =
  (x - 1)(x - 2)          x - 1          x - 2

  (a) -10        (b) 10        (c) 13        (d) -13
```
**ANSWER: (a)**
```
  Cover (x - 1) , put x = 1 :     (3 + 7)/(1 - 2)  =  10/(-1)  =  -10
```

---

### Q2
The coefficient of `1/(x - 3)` in the partial fractions of
`x^2/((x-1)(x-2)(x-3))` is

```
  (a) 9/2        (b) -4        (c) 1/2        (d) 9
```
**ANSWER: (a)**
```
  Cover (x - 3) , put x = 3 :     9 / ((3-1)(3-2))  =  9/2
```

---

### Q3
In the partial fractions of `(x + 4)/((x^2 - 4)(x + 1))`, the coefficient of
`1/(x + 1)` is

```
  (a) -1         (b) 1/2       (c) 1          (d) -1/2
```
**ANSWER: (a)**
```
  x^2 - 4 = (x-2)(x+2).  Cover (x+1) , put x = -1 :

        -1 + 4              3            3
    ----------------  =  ---------  =  -----  =  -1
    (-1-2)(-1+2)          (-3)(1)        -3
```

---

### Q4
```
      x + 1                  A            B
  --------------   =   ----------  +  ----------      Then A =
  (2x + 3)(x - 1)        2x + 3          x - 1

  (a) 1/5        (b) 2/5       (c) -1/5       (d) 5
```
**ANSWER: (a)**
```
  2x + 3 = 0 when x = -3/2 .  Cover it and put x = -3/2 :

      (-3/2 + 1)        -1/2         1
     -----------  =   --------  =  -----
      (-3/2 - 1)        -5/2         5
```

---

# PATTERN 2 — Sum of the constants (a 5-second question)

### Q5
```
             1                A          B          C
  ----------------------  =  -----  +  -----  +  -----     Then A + B + C =
  (x-1)(x-2)(x-3)             x-1        x-2        x-3

  (a) 0          (b) 1         (c) 1/2        (d) -1
```
**ANSWER: (a)**
```
  A + B + C is the coefficient of x^2 on the right after clearing denominators.
  The left side has top degree 0, so there is no x^2 term.  Hence the sum is 0.

  (Long way:  A = 1/2 , B = -1 , C = 1/2 , sum = 0.)
```

---

### Q6
For `x^2/((x-1)(x-2)(x-3)) = A/(x-1) + B/(x-2) + C/(x-3)`, the value of A + B + C is

```
  (a) 0          (b) 1         (c) 2          (d) 6
```
**ANSWER: (b)**
```
  A + B + C = coefficient of x^2 on the left = 1 .

  (Check: 1/2 - 4 + 9/2 = 1.)
```

> **RULE TO MEMORISE:** for n DISTINCT linear factors, `A + B + C + ...` equals the
> coefficient of `x^(n-1)` in the numerator. If the top degree is less than n-1,
> the sum is 0.

---

### Q7
```
              1                A          B          C
  ------------------------  =  -----  +  -----  +  -----     Then B =
  (x+1)(x+2)(x+3)               x+1        x+2        x+3

  (a) 1/2        (b) -1        (c) 1          (d) -1/2
```
**ANSWER: (b)**
```
  Cover (x + 2) , put x = -2 :

           1                 1            1
    ----------------  =  ---------  =  -------  =  -1
    (-2+1)(-2+3)          (-1)(1)        -1
```

---

# PATTERN 3 — Repeated linear factors

### Q8
In the partial fractions of `(x^2 + 1)/((x-1)^2 (x-2))`, the coefficient of
`1/(x - 1)^2` is

```
  (a) -2         (b) 5         (c) -4         (d) 2
```
**ANSWER: (a)**
```
  x^2 + 1 = A(x-1)(x-2) + B(x-2) + C(x-1)^2

  Put x = 1 :   2 = B(-1)    ->   B = -2
```

---

### Q9
```
    x^2 - 5x + 7            A             B             C
   --------------  =   ---------  +  ---------  +  ---------
     (x - 3)^3            x - 3        (x-3)^2       (x-3)^3

  Then (A, B, C) =

  (a) (1, 1, 1)   (b) (1, -5, 7)   (c) (1, 6, 9)   (d) (1, -1, 1)
```
**ANSWER: (a)**
```
  Put y = x - 3 , x = y + 3 :

     (y+3)^2 - 5(y+3) + 7  =  y^2 + 6y + 9 - 5y - 15 + 7  =  y^2 + y + 1

     y^2 + y + 1         1         1         1
    -------------  =  -------  + -------  + -------      ->   A = B = C = 1
         y^3              y         y^2       y^3
```

---

### Q10
```
      2x + 3                A            B             C
    ----------   =    ---------  +  ---------  +  ---------      Then A =
    (x - 1)^3            x - 1        (x-1)^2       (x-1)^3

  (a) 0          (b) 2         (c) 5          (d) 3
```
**ANSWER: (a)**
```
  Put y = x - 1 :   2x + 3 = 2(y+1) + 3 = 2y + 5

       2y + 5          2          5
      --------  =   -------  +  -------      so there is NO 1/y term.
        y^3            y^2        y^3

  A = 0 ,  B = 2 ,  C = 5
```

---

# PATTERN 4 — Irreducible quadratic factors

### Q11
```
         5                A          Bx + C
  ---------------  =  --------  +  ----------      Then B =
  (x+1)(x^2 + 4)        x + 1        x^2 + 4

  (a) -1         (b) 1          (c) 0          (d) 1/5
```
**ANSWER: (a)**
```
  5 = A(x^2 + 4) + (Bx + C)(x + 1)

  x = -1  :   5 = A(5)         ->  A = 1
  x^2     :   0 = A + B        ->  B = -1
  const   :   5 = 4A + C       ->  C = 1
```

---

### Q12
`(2x^2 + 1)/(x^3 - 1)` resolves into

```
       1              x                   1              x
  (a) -----  +  --------------      (b)  -----  -  --------------
      x - 1      x^2 + x + 1             x - 1      x^2 + x + 1

       2              x                   1             2x
  (c) -----  +  --------------      (d)  -----  +  --------------
      x - 1      x^2 + x + 1             x - 1      x^2 + x + 1
```
**ANSWER: (a)**
```
  x^3 - 1 = (x - 1)(x^2 + x + 1)

  2x^2 + 1 = A(x^2 + x + 1) + (Bx + C)(x - 1)

  x = 1 :  3 = 3A        ->  A = 1
  x^2   :  2 = A + B     ->  B = 1
  const :  1 = A - C     ->  C = 0
```
Quick elimination trick: put x = 0 in the original. LHS = `1/(-1) = -1`.
Only option (a) gives `1/(-1) + 0 = -1`.

---

### Q13
The number of unknown constants in the partial fraction decomposition of
`x/((x - 1)(x^2 + 1)^2)` is

```
  (a) 3          (b) 4          (c) 5          (d) 6
```
**ANSWER: (c)**
```
  Number of constants = DEGREE of the denominator = 1 + 2 + 2 = 5

       A          Bx + C          Dx + E
    -------  +  ----------  +  -------------
     x - 1        x^2 + 1       (x^2 + 1)^2
```

---

### Q14
The partial fraction form of `(x + 2)/((x - 1)(x^2 + 3))` is

```
       A         B                  A         Bx + C
  (a) -----  +  --------       (b) -----  +  ---------
      x-1        x^2+3             x-1        x^2 + 3

       Ax+B        C                 A          B          C
  (c) -------  +  -----         (d) -----  +  -----  +  ---------
       x-1        x^2+3             x-1        x+3        x^2+3
```
**ANSWER: (b)** — a quadratic denominator always carries `Bx + C` on top.

---

# PATTERN 5 — Only EVEN powers: substitute y = x^2

### Q15
```
          x^2
  -------------------   resolves into
  (x^2 + 1)(x^2 + 4)

       -1/3          4/3                   1/3           4/3
  (a) -------  +  -------          (b)   -------  +  -------
      x^2 + 1     x^2 + 4                x^2 + 1     x^2 + 4

       -1/3          -4/3                  1/3          -4/3
  (c) -------  +  -------          (d)   -------  +  -------
      x^2 + 1     x^2 + 4                x^2 + 1     x^2 + 4
```
**ANSWER: (a)**
```
  Let y = x^2 :        y                A          B
                 -------------  =  -------  +  -------
                 (y+1)(y+4)          y + 1       y + 4

     y = -1 :  A = (-1)/(-1 + 4) = -1/3
     y = -4 :  B = (-4)/(-4 + 1) =  4/3

  Fast check: put x = 0. LHS = 0 . Only (a) gives -1/3 + 4/12 = 0 .
```

---

### Q16
```
          1
  -------------------   =
  (x^2 + 1)(x^2 + 4)

        1        1          1                    1        1          1
  (a)  ---  [ ------- - ------- ]           (b) ---  [ ------- + ------- ]
        3      x^2+1     x^2+4                   3      x^2+1     x^2+4

        1        1          1                    1        1          1
  (c)  ---  [ ------- - ------- ]           (d) ---  [ ------- - ------- ]
        5      x^2+1     x^2+4                   2      x^2+1     x^2+4
```
**ANSWER: (a)**
```
  Let y = x^2 :   1/((y+1)(y+4))  =  A/(y+1) + B/(y+4)

     y = -1 :  A = 1/(-1 + 4) =  1/3
     y = -4 :  B = 1/(-4 + 1) = -1/3
```

---

### Q17
```
          x
  -------------------   =
  (x^2 + 1)(x^2 + 4)

        1        x          x                    1        x          x
  (a)  ---  [ ------- - ------- ]           (b) ---  [ ------- + ------- ]
        3      x^2+1     x^2+4                   3      x^2+1     x^2+4

        1        x          x                         x          x
  (c)  ---  [ ------- - ------- ]           (d)    ------- - -------
        5      x^2+1     x^2+4                      x^2+1     x^2+4
```
**ANSWER: (a)**
```
  Verify by adding option (a) back:

     (1/3) x [ (x^2 + 4) - (x^2 + 1) ]        (1/3) x (3x)             x
     ---------------------------------  =  ------------------  =  -----------
        (x^2 + 1)(x^2 + 4)                  (x^2+1)(x^2+4)         product
```

---

# PATTERN 6 — Improper fractions (divide first)

### Q18
```
     x^2                     A          B
  ---------  =   1   +   -------  +  -------      Then A =
   x^2 - 1                x - 1       x + 1

  (a) 1/2        (b) -1/2       (c) 1          (d) 2
```
**ANSWER: (a)**
```
  x^2/(x^2 - 1)  =  1  +  1/(x^2 - 1)

  1/((x-1)(x+1)) :   A = 1/(1+1) = 1/2 ,  B = 1/(-1-1) = -1/2
```

---

### Q19
The quotient when `x^4` is divided by `(x - 1)(x - 2)` is

```
  (a) x^2 + 3x + 7    (b) x^2 + 3x + 2    (c) x^2 - 3x + 2    (d) x^2 + 7
```
**ANSWER: (a)**
```
  (x^2 - 3x + 2)(x^2 + 3x + 7)  =  x^4 - 15x + 14

  Remainder = x^4 - (x^4 - 15x + 14) = 15x - 14

     x^4                                15x - 14
  ------------  =  x^2 + 3x + 7  +  ---------------
  (x-1)(x-2)                         (x-1)(x-2)

  CHECK x = 0 :  LHS = 0 .  RHS = 7 + (-14)/2 = 7 - 7 = 0
```

---

# PATTERN 7 — INTEGRATION BY PARTIAL FRACTIONS (the real reason to learn this)

### Q20
```
  The integral of   1/(x^2 - 9)  dx   is

  (a)  (1/6) log | (x - 3)/(x + 3) |  +  c
  (b)  (1/3) log | (x - 3)/(x + 3) |  +  c
  (c)  (1/6) log | (x + 3)/(x - 3) |  +  c
  (d)  log | x^2 - 9 |  +  c
```
**ANSWER: (a)**
```
        1                 1        1           1
   -----------   =     -------  [ -------  -  ------- ]
    x^2 - 9              2(3)      x - 3       x + 3

   Integral  =  (1/6)[ log|x-3| - log|x+3| ]  +  c
             =  (1/6) log | (x-3)/(x+3) |  +  c
```

---

### Q21
```
  The integral of   1/(x(x + 1))  dx   is

  (a)  log | x / (x + 1) |  +  c
  (b)  log | (x + 1) / x |  +  c
  (c)  log | x(x + 1) |  +  c
  (d)  (1/2) log | x / (x + 1) |  +  c
```
**ANSWER: (a)**
```
        1            1          1
   -----------  =  -----  -  -------
    x(x + 1)         x        x + 1

   Integral  =  log|x|  -  log|x + 1|  +  c  =  log | x/(x+1) |  +  c
```

---

### Q22
```
  The integral of   1/((x - 1)(x - 2))  dx   is

  (a)  log | (x - 2)/(x - 1) |  +  c
  (b)  log | (x - 1)/(x - 2) |  +  c
  (c)  log | (x-1)(x-2) |  +  c
  (d)  (1/2) log | (x - 2)/(x - 1) |  +  c
```
**ANSWER: (a)**
```
  Cover-up:  A = 1/(1 - 2) = -1 ,   B = 1/(2 - 1) = 1

        1              -1            1
   ------------  =  --------  +  --------
   (x-1)(x-2)         x - 1        x - 2

   Integral  =  -log|x-1| + log|x-2| + c  =  log | (x-2)/(x-1) |  +  c
```

---

### Q23
```
  The integral of   (x + 1)/(x(x + 2))  dx   is

  (a)  (1/2) log | x(x + 2) |  +  c
  (b)  log | x(x + 2) |  +  c
  (c)  (1/2) log | x/(x + 2) |  +  c
  (d)  log | (x + 2)/x |  +  c
```
**ANSWER: (a)**
```
  A = (0 + 1)/(0 + 2) = 1/2        B = (-2 + 1)/(-2) = 1/2

       x + 1            1/2         1/2
   ------------  =  --------  +  --------
    x(x + 2)             x         x + 2

   Integral = (1/2) log|x| + (1/2) log|x+2| + c = (1/2) log |x(x+2)| + c
```

---

### Q24
```
  The integral of   1/(x^3 + x)  dx   is

  (a)  log | x |  -  (1/2) log (x^2 + 1)  +  c
  (b)  log | x |  +  (1/2) log (x^2 + 1)  +  c
  (c)  (1/2) log | x^3 + x |  +  c
  (d)  Tan^-1 x  +  c
```
**ANSWER: (a)**
```
  x^3 + x = x(x^2 + 1)

        1             1          x
    ----------  =   -----  -  ---------
    x(x^2 + 1)        x        x^2 + 1

  (A = 1 from x = 0 ; comparing x^2 gives B = -1 ; comparing x gives C = 0)

  Integral = log|x| - (1/2) log(x^2 + 1) + c
```

---

### Q25
```
  The integral of   (3x + 1)/((x - 1)(x + 3))  dx   is

  (a)  log | x - 1 |  +  2 log | x + 3 |  +  c
  (b)  2 log | x - 1 |  +  log | x + 3 |  +  c
  (c)  log | x - 1 |  -  2 log | x + 3 |  +  c
  (d)  3 log | (x-1)(x+3) |  +  c
```
**ANSWER: (a)**
```
  Cover-up:
     A  (x = 1)  :   (3 + 1)/(1 + 3)     =   4/4    =  1
     B  (x = -3) :   (-9 + 1)/(-3 - 1)   =  -8/-4   =  2

  Integral = 1 x log|x-1| + 2 x log|x+3| + c
```

---

### Q26  (the trap question — do NOT use partial fractions here)
```
  The integral of   2x/(x^2 - 1)  dx   is

  (a)  log | x^2 - 1 |  +  c
  (b)  log | (x - 1)/(x + 1) |  +  c
  (c)  (1/2) log | x^2 - 1 |  +  c
  (d)  2 log | x^2 - 1 |  +  c
```
**ANSWER: (a)**
```
  The TOP is exactly the derivative of the BOTTOM.

     Integral of  f'(x)/f(x) dx  =  log | f(x) |  +  c

  Splitting it into 1/(x-1) + 1/(x+1) also works, but wastes 90 seconds.
  ALWAYS check for this shape before writing A and B.
```

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  "Find A" or "the coefficient     |  COVER-UP. Cover the bracket, put  |
  |  of 1/(x - a)"                    |  x = a into the rest. 10 seconds.  |
  +-----------------------------------+------------------------------------+
  |  "Find A + B + C" with distinct   |  It is the coefficient of x^(n-1)  |
  |  linear factors                   |  in the numerator. Often just 0.   |
  +-----------------------------------+------------------------------------+
  |  Top degree >= bottom degree      |  DIVIDE FIRST. Do not split yet.   |
  +-----------------------------------+------------------------------------+
  |  The whole bottom is (x - a)^n    |  Put y = x - a and expand the top. |
  +-----------------------------------+------------------------------------+
  |  Only EVEN powers of x anywhere   |  Put y = x^2 , solve, put back.    |
  +-----------------------------------+------------------------------------+
  |  Four algebraic options given     |  Put x = 0 (or x = 1) into the     |
  |                                   |  question AND into every option.   |
  |                                   |  Only the right one matches.       |
  +-----------------------------------+------------------------------------+
  |  Top is exactly the derivative    |  Answer is log|bottom| + c.        |
  |  of the bottom                    |  Do NOT split.                     |
  +-----------------------------------+------------------------------------+
  |  1/(x^2 - a^2) to integrate       |  (1/2a) log |(x-a)/(x+a)| + c      |
  +-----------------------------------+------------------------------------+
  |  1/(x^2 + a^2) to integrate       |  (1/a) Tan^-1 (x/a) + c            |
  |                                   |  (this one NEVER splits)           |
  +-----------------------------------+------------------------------------+
  |  Options differ only in a sign    |  Compute ONE constant by cover-up  |
  |                                   |  and eliminate. Don't do them all. |
  +-----------------------------------+------------------------------------+
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
```

---

# THE COVER-UP (HEAVISIDE) METHOD — the single most valuable trick here

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                  N(x)                A                             |
  |   Given    ----------------  =   ---------  +  (rest)              |
  |             (x - a) x REST         x - a                           |
  |                                                                    |
  |   1.  Put your finger over the bracket  (x - a) .                  |
  |   2.  Into everything that is still visible, substitute  x = a .   |
  |   3.  The number you get IS A. There is no step 4.                 |
  |                                                                    |
  |   WORKS FOR:   distinct linear factors                             |
  |                the HIGHEST power of a repeated linear factor       |
  |                brackets like (2x + 3) - use x = -3/2               |
  |                                                                    |
  |   DOES NOT WORK FOR:                                               |
  |                lower powers of a repeated factor                   |
  |                any quadratic factor                                |
  |                (for those, compare coefficients)                   |
  +--------------------------------------------------------------------+
```

**Worked demonstration on a 3-factor fraction, done entirely in your head:**

```
            2x + 1
     ----------------------
     (x)(x - 1)(x + 2)

   A  (cover x , put x = 0)   :   1 / ((-1)(2))    =  -1/2
   B  (cover x-1, put x = 1)  :   3 / ((1)(3))     =   1
   C  (cover x+2, put x = -2) :  -3 / ((-2)(-3))   =  -1/2

            2x + 1              -1/2          1           -1/2
     ---------------------  =  -------  +  -------  +  ---------
     x (x - 1)(x + 2)              x         x - 1        x + 2

   CHECK  A + B + C  =  -1/2 + 1 - 1/2  =  0 .   Correct, since the top
   has degree 1 and there are 3 factors (need degree 2 for a non-zero sum).
```
