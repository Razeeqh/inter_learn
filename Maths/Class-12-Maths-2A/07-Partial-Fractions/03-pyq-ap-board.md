# Partial Fractions — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 7 — Partial Fractions**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> and this chapter in particular repeats almost word for word with only the numbers
> changed. So the questions below are grouped by **"how often they appear"** rather
> than tagged to one exact year. Before your exam, cross-check with the official
> question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIA paper:**

```
  +--------------+------------------------------------+-------------------+
  |  SECTION A   |  Q1 - Q10 , 2 marks each           |  ANSWER ALL 10    |
  |              |  Partial Fractions may appear here |                   |
  |              |  as a short "find the coefficient" |                   |
  |              |  or "resolve" question.            |                   |
  +--------------+------------------------------------+-------------------+
  |  SECTION B   |  Q11 - Q17 , 4 marks each          |  ANSWER ANY 5     |
  |              |  This is the HOME of the chapter.  |                   |
  |              |  Expect one full "resolve into     |                   |
  |              |  partial fractions" question.      |                   |
  +--------------+------------------------------------+-------------------+
  |  SECTION C   |  Q18 - Q24 , 7 marks each          |  ANSWER ANY 5     |
  |              |  Partial Fractions is NOT normally |                   |
  |              |  asked here. See the honest note   |                   |
  |              |  at the end of this file.          |                   |
  +--------------+------------------------------------+-------------------+
```

**Strategy for a weak student:** this chapter is worth roughly 4 to 6 marks and it
is 100% mechanical. There is nothing to prove and nothing to remember except four
forms. Make it a certainty before touching harder chapters.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Find one coefficient (COVER-UP does this in seconds)

### Q A1
```
      3x + 7                A            B
  --------------   =   ----------  +  ----------      Find A.
  (x - 1)(x - 2)          x - 1          x - 2
```
**ANSWER:**
```
  Cover (x - 1) and put x = 1 into what is left:

           3(1) + 7          10
     A =  ----------  =  ---------  =  -10
             1 - 2            -1
```
**A = -10**

---

### Q A2
```
      3x + 7                A            B
  --------------   =   ----------  +  ----------      Find B.
  (x - 1)(x - 2)          x - 1          x - 2
```
**ANSWER:**
```
  Cover (x - 2) and put x = 2:

           3(2) + 7          13
     B =  ----------  =  ---------  =  13
             2 - 1            1
```
**B = 13**

---

### Q A3
Find the coefficient of `1/(x - 2)` in the partial fractions of
`(x - 4)/((x-1)(x-2)(x-3))`.

**ANSWER:**
```
  Cover (x - 2), put x = 2 into the rest:

           2 - 4             -2
      =  -------------  =  --------  =  2
         (2-1)(2-3)        (1)(-1)
```
**Coefficient = 2**

---

### Q A4
Find the coefficient of `1/(x + 2)` in the partial fractions of
`(x + 4)/((x^2 - 4)(x + 1))`.

**ANSWER:**
```
  First factorise:  x^2 - 4 = (x - 2)(x + 2)

  Cover (x + 2), put x = -2 into the rest:

           -2 + 4              2            2         1
      =  ---------------  =  ---------  =  ----  =  -----
         (-2 - 2)(-2 + 1)     (-4)(-1)       4        2
```
**Coefficient = 1/2**

---

### Q A5
```
             1                A           B           C
  ----------------------  =  -----  +  -----  +  -----     Find A.
  (x-1)(x-2)(x-3)             x-1        x-2        x-3
```
**ANSWER:**
```
  Cover (x - 1), put x = 1:

              1                 1           1
     A  =  -------------  =  --------  =  -----
           (1-2)(1-3)        (-1)(-2)       2
```
**A = 1/2**

---

### Q A6
For the same fraction as Q A5, find the value of `A + B + C`.

**ANSWER:**
```
  B  =  1 / ((2-1)(2-3))  =  1 / (1)(-1)  =  -1
  C  =  1 / ((3-1)(3-2))  =  1 / (2)(1)   =   1/2

  A + B + C  =  1/2  -  1  +  1/2  =  0
```
**A + B + C = 0**
(Short cut: the top has degree 0 and there are 3 distinct linear factors,
so the sum of the constants must be 0.)

---

### Q A7
```
      3x + 5                A            B
  --------------   =   ----------  +  ----------      Find B.
  (x - 1)(x + 2)          x - 1          x + 2
```
**ANSWER:**
```
  Cover (x + 2), put x = -2:

           3(-2) + 5           -1          1
     B =  -----------  =  ----------  =  -----
             -2 - 1            -3          3
```
**B = 1/3**

---

### Q A8
```
      x + 1                  A            B
  --------------   =   ----------  +  ----------      Find A.
  (2x + 3)(x - 1)        2x + 3          x - 1
```
**ANSWER:**
```
  The bracket 2x + 3 is zero when x = -3/2.
  Cover (2x + 3) and put x = -3/2 into the rest:

           -3/2 + 1          -1/2          1
     A =  -----------  =  ----------  =  -----
           -3/2 - 1          -5/2          5
```
**A = 1/5**

---

## Topic: Resolve a small fraction completely

### Q A9
Resolve `1/((x - 1)(x + 2))` into partial fractions.

**ANSWER:**
```
  A  =  1/(1 + 2)   =  1/3          (cover x-1, put x = 1)
  B  =  1/(-2 - 1)  =  -1/3         (cover x+2, put x = -2)

        1                1/3           -1/3
   ------------  =  ----------  +  ----------
   (x-1)(x+2)          x - 1          x + 2
```

---

### Q A10
Resolve `1/(x^2 - 4)` into partial fractions.

**ANSWER:**
```
  x^2 - 4 = (x - 2)(x + 2)

  A  =  1/(2 + 2)   =  1/4
  B  =  1/(-2 - 2)  =  -1/4

        1              1/4           -1/4
   ----------  =  ----------  +  ----------
    x^2 - 4          x - 2          x + 2
```

---

### Q A11
Resolve `1/(x(x + 1))` into partial fractions.

**ANSWER:**
```
  A  =  1/(0 + 1)   =  1           (cover x, put x = 0)
  B  =  1/(-1)      =  -1          (cover x+1, put x = -1)

        1             1           1
   -----------  =  -------  -  -------
    x(x + 1)          x         x + 1
```

---

### Q A12
Resolve `x/((x - 1)(x - 2))` into partial fractions.

**ANSWER:**
```
  A  =  1/(1 - 2)  =  -1
  B  =  2/(2 - 1)  =   2

        x               -1            2
   ------------  =  --------  +  --------
   (x-1)(x-2)         x - 1        x - 2
```

---

### Q A13
Resolve `(2x + 3)/(x - 1)^2` into partial fractions.

**ANSWER:**
```
  Put y = x - 1 , so x = y + 1 :

     2x + 3  =  2(y + 1) + 3  =  2y + 5

     2y + 5        2         5
    --------  =  -----  +  -----
       y^2          y        y^2

  Put y = x - 1 back:

     2x + 3            2             5
   ----------  =  ---------  +  -----------
   (x - 1)^2         x - 1        (x-1)^2
```

---

## Topic: Proper / improper and long division

### Q A14
Is `(x^2 + 1)/(x^2 - 3x + 2)` a proper fraction? If not, express it as
quotient plus a proper fraction.

**ANSWER:**
```
  Top degree = 2 , bottom degree = 2 .  Equal  ->  IMPROPER.

  (x^2 + 1)  -  1 x (x^2 - 3x + 2)  =  3x - 1

        x^2 + 1                  3x - 1
     --------------  =   1  +  --------------
      x^2 - 3x + 2              x^2 - 3x + 2
```

---

### Q A15
Find the quotient and remainder when `x^3` is divided by `(x - 1)(x - 2)`.

**ANSWER:**
```
  (x-1)(x-2) = x^2 - 3x + 2

  (x^2 - 3x + 2)(x + 3)  =  x^3 - 7x + 6

  Remainder  =  x^3  -  (x^3 - 7x + 6)  =  7x - 6
```
**Quotient = x + 3 , Remainder = 7x - 6**

---

## Topic: Write the correct FORM (half the marks are for this)

### Q A16
Write the form of the partial fractions of `(x + 1)/((x - 1)^2 (x^2 + 4))`
(do not find the constants).

**ANSWER:**
```
       x + 1                A            B           Cx + D
  ------------------  =  --------  +  ---------  +  ----------
  (x-1)^2 (x^2 + 4)        x - 1       (x-1)^2       x^2 + 4
```
`(x-1)` is repeated -> two terms. `x^2 + 4` is irreducible -> `Cx + D` on top.

---

### Q A17
How many unknown constants appear in the partial fraction form of
`x/((x - 1)(x^2 + 1)^2)` ?

**ANSWER:**
```
  Degree of the denominator  =  1 + 2 + 2  =  5

  Form:      A          Bx + C          Dx + E
          -------  +  ----------  +  -------------
           x - 1        x^2 + 1       (x^2 + 1)^2
```
**5 constants**

---

### Q A18
Which case does `3/((x - 1)(x^2 + x + 1))` belong to? Write its form.

**ANSWER:**
```
  For x^2 + x + 1 :  b^2 - 4ac = 1 - 4 = -3  which is negative
                     ->  IRREDUCIBLE  ->  CASE 3

           3                    A            Bx + C
  ----------------------  =  --------  +  --------------
  (x-1)(x^2 + x + 1)          x - 1        x^2 + x + 1
```

---

### Q A19
```
       x^2 + 1                A            B            C
  ------------------  =  --------  +  ---------  +  --------    Find B.
  (x - 1)^2 (x - 2)        x - 1       (x-1)^2        x - 2
```
**ANSWER:**
```
  Multiply through:   x^2 + 1 = A(x-1)(x-2) + B(x-2) + C(x-1)^2

  Put x = 1 :   1 + 1  =  B(1 - 2)
                2      =  -B          ->   B = -2
```
**B = -2**

---

### Q A20
```
         5                A          Bx + C
  ---------------  =  --------  +  ----------     Find A.
  (x+1)(x^2 + 4)        x + 1        x^2 + 4
```
**ANSWER:**
```
  Multiply through:  5 = A(x^2 + 4) + (Bx + C)(x + 1)

  Put x = -1 :   5  =  A((-1)^2 + 4)  =  A(5)     ->   A = 1
```
**A = 1**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# This is where the chapter really lives. Answer any 5 of Q11 - Q17.
# ===============================================================

### Q B1  (CASE 1 — the single most repeated type)
Resolve `(x + 4)/((x^2 - 4)(x + 1))` into partial fractions.

**ANSWER:**
```
  STEP 1  Factorise:   x^2 - 4 = (x - 2)(x + 2)

              x + 4                    A          B          C
     ------------------------  =    -------  +  -------  +  -------
     (x - 2)(x + 2)(x + 1)            x - 2       x + 2       x + 1

  STEP 2  Multiply by (x-2)(x+2)(x+1) :

     x + 4  =  A(x+2)(x+1)  +  B(x-2)(x+1)  +  C(x-2)(x+2)

  STEP 3  x = 2  :   6  =  A(4)(3)  =  12A        ->  A =  6/12  =  1/2
          x = -2 :   2  =  B(-4)(-1) =  4B        ->  B =  2/4   =  1/2
          x = -1 :   3  =  C(-3)(1)  = -3C        ->  C = -1

  ANSWER:
              x + 4                  1/2         1/2          1
     ------------------------  =  -------  +  -------  -  -------
     (x^2 - 4)(x + 1)               x - 2       x + 2       x + 1

  CHECK x = 0 :
     LHS = 4 / ((-4)(1)) = -1
     RHS = (1/2)/(-2) + (1/2)/(2) - 1/1 = -0.25 + 0.25 - 1 = -1     MATCHES
```

---

### Q B2  (CASE 1 — three distinct factors)
Resolve `(x^2 - 3)/((x - 1)(x - 2)(x - 3))` into partial fractions.

**ANSWER:**
```
     x^2 - 3  =  A(x-2)(x-3)  +  B(x-1)(x-3)  +  C(x-1)(x-2)

     x = 1 :   1 - 3  =  A(-1)(-2)  =  2A     ->  A = -1
     x = 2 :   4 - 3  =  B(1)(-1)   = -B      ->  B = -1
     x = 3 :   9 - 3  =  C(2)(1)    =  2C     ->  C =  3

           x^2 - 3                -1          -1           3
     ----------------------  =  -------  +  -------  +  -------
     (x-1)(x-2)(x-3)              x-1          x-2         x-3

  CHECK x = 0 :  LHS = -3/(-6) = 0.5
                 RHS = 1 + 0.5 - 1 = 0.5      MATCHES
```

---

### Q B3  (CASE 1 — bottom must be factorised first)
Resolve `x^2/((x - 1)(x - 2)(x - 3))` into partial fractions.

**ANSWER:**
```
     x^2  =  A(x-2)(x-3)  +  B(x-1)(x-3)  +  C(x-1)(x-2)

     x = 1 :   1  =  A(-1)(-2) = 2A       ->  A = 1/2
     x = 2 :   4  =  B(1)(-1)  = -B       ->  B = -4
     x = 3 :   9  =  C(2)(1)   = 2C       ->  C = 9/2

            x^2                  1/2          -4          9/2
     ----------------------  =  -------  +  -------  +  -------
     (x-1)(x-2)(x-3)              x-1          x-2         x-3

  CHECK (sum of constants must equal the x^2 coefficient = 1):
     1/2 - 4 + 9/2  =  0.5 - 4 + 4.5  =  1      MATCHES
```

---

### Q B4  (CASE 1 — small but a very common wording)
Resolve `(x - 1)/((x + 1)(x - 2))` into partial fractions.

**ANSWER:**
```
     x - 1  =  A(x - 2)  +  B(x + 1)

     x = -1 :  -2  =  A(-3)     ->  A = 2/3
     x =  2 :   1  =  B(3)      ->  B = 1/3

        x - 1               2/3          1/3
     ------------   =   ---------  +  ---------
     (x+1)(x-2)            x + 1        x - 2

  CHECK x = 0 :  LHS = -1/(-2) = 0.5 .  RHS = 2/3 - 1/6 = 0.5     MATCHES
```

---

### Q B5  (CASE 2 — repeated linear factor)
Resolve `(x^2 + 1)/((x - 1)^2 (x - 2))` into partial fractions.

**ANSWER:**
```
       x^2 + 1               A             B             C
   -----------------  =  ---------  +  ---------  +  ---------
   (x-1)^2 (x-2)            x - 1        (x-1)^2        x - 2

   x^2 + 1  =  A(x-1)(x-2)  +  B(x-2)  +  C(x-1)^2

   x = 1 :   2  =  B(-1)          ->  B = -2
   x = 2 :   5  =  C(1)^2         ->  C =  5

   Compare x^2 :   1  =  A + C    ->  A = 1 - 5 = -4

  ANSWER:
       x^2 + 1               -4            -2             5
   -----------------  =  ---------  +  ---------  +  ---------
   (x-1)^2 (x-2)            x - 1        (x-1)^2        x - 2

  CHECK x = 0 :  LHS = 1/((1)(-2)) = -0.5
                 RHS = 4 - 2 - 2.5 = -0.5        MATCHES
```

---

### Q B6  (CASE 2 — repeated factor with a plain x^2)
Resolve `(2x^2 + 2x + 1)/(x^3 + x^2)` into partial fractions.

**ANSWER:**
```
  STEP 1  Factorise:   x^3 + x^2  =  x^2 (x + 1)

       2x^2 + 2x + 1           A          B           C
     ------------------  =  -------  +  -------  +  -------
        x^2 (x + 1)             x         x^2         x + 1

  STEP 2   2x^2 + 2x + 1  =  A x(x+1)  +  B(x+1)  +  C x^2

  STEP 3   x =  0 :   1  =  B(1)              ->  B = 1
           x = -1 :   2 - 2 + 1 = C(1)        ->  C = 1
           Compare x^2 :  2 = A + C           ->  A = 1

  ANSWER:
       2x^2 + 2x + 1            1          1           1
     ------------------  =  -------  +  -------  +  -------
        x^3 + x^2               x         x^2         x + 1

  CHECK x = 1 :  LHS = 5/2 .  RHS = 1 + 1 + 1/2 = 5/2      MATCHES
```

---

### Q B7  (CASE 2 — whole denominator is one cube)
Resolve `(x^2 + 5x + 7)/(x - 3)^3` into partial fractions.

**ANSWER:**
```
  Put  y = x - 3 , so  x = y + 3 :

     x^2 + 5x + 7  =  (y+3)^2 + 5(y+3) + 7
                   =  y^2 + 6y + 9 + 5y + 15 + 7
                   =  y^2 + 11y + 31

     y^2 + 11y + 31           1            11           31
   ------------------  =   -------  +   -------  +   -------
          y^3                  y            y^2          y^3

  Put y = x - 3 back:

     x^2 + 5x + 7            1              11             31
   ----------------  =   ---------  +  -----------  +  -----------
       (x - 3)^3            x - 3         (x-3)^2         (x-3)^3

  CHECK x = 4 :  LHS = (16 + 20 + 7)/1 = 43 .  RHS = 1 + 11 + 31 = 43  MATCHES
```

---

### Q B8  (CASE 2 — mixed brackets, one repeated)
Resolve `1/((x - 1)(x + 2)^2)` into partial fractions.

**ANSWER:**
```
       1                A            B             C
  --------------  =  -------  +  -------  +  -----------
  (x-1)(x+2)^2         x - 1       x + 2       (x+2)^2

   1  =  A(x+2)^2  +  B(x-1)(x+2)  +  C(x-1)

   x =  1 :  1  =  A(9)            ->  A =  1/9
   x = -2 :  1  =  C(-3)           ->  C = -1/3
   Compare x^2 :  0 = A + B        ->  B = -1/9

  ANSWER:
       1              1/9          -1/9          -1/3
  --------------  =  -------  +  -------  +  -----------
  (x-1)(x+2)^2         x - 1       x + 2       (x+2)^2

  CHECK x = 0 :  LHS = -1/4
                 RHS = -1/9 - 1/18 - 1/12 = -4/36 - 2/36 - 3/36 = -1/4  MATCHES
```

---

### Q B9  (CASE 2 — the "(2x+3)" flavour, a favourite)
Resolve `(x^2 + 13x + 15)/((2x + 3)(x + 3)^2)` into partial fractions.

**ANSWER:**
```
     x^2 + 13x + 15             A            B             C
   ---------------------  =  --------  +  -------  +  -----------
   (2x + 3)(x + 3)^2          2x + 3       x + 3       (x+3)^2

   x^2 + 13x + 15  =  A(x+3)^2  +  B(x+3)(2x+3)  +  C(2x+3)

   x = -3 :    9 - 39 + 15  =  C(2(-3)+3)
               -15          =  C(-3)             ->  C = 5

   x = -3/2 :  9/4 - 39/2 + 15  =  A(-3/2 + 3)^2
               -9/4             =  A(9/4)        ->  A = -1

   Compare x^2 :   1  =  A + 2B   ->  1 = -1 + 2B   ->  B = 1

  ANSWER:
     x^2 + 13x + 15              -1             1             5
   ---------------------  =  --------  +  -------  +  -----------
   (2x + 3)(x + 3)^2           2x + 3       x + 3       (x+3)^2

  CHECK x = 0 :  LHS = 15/(3 x 9) = 5/9
                 RHS = -1/3 + 1/3 + 5/9 = 5/9        MATCHES
```

---

### Q B10  (CASE 3 — irreducible quadratic)
Resolve `(x + 3)/((x + 1)(x^2 + 1))` into partial fractions.

**ANSWER:**
```
        x + 3                A          Bx + C
   -----------------  =  --------  +  ----------
   (x+1)(x^2 + 1)          x + 1        x^2 + 1

   x + 3  =  A(x^2 + 1)  +  (Bx + C)(x + 1)

   x = -1 :   2  =  A(2)               ->  A =  1
   x^2     :   0  =  A + B              ->  B = -1
   constant:   3  =  A + C              ->  C =  2

  ANSWER:
        x + 3                1           -x + 2
   -----------------  =  --------  +  ------------
   (x+1)(x^2 + 1)          x + 1        x^2 + 1

  CHECK x = 0 :  LHS = 3 .  RHS = 1 + 2 = 3       MATCHES
```

---

### Q B11  (CASE 3 — cubic denominator, factorise first)
Resolve `(2x^2 + 1)/(x^3 - 1)` into partial fractions.

**ANSWER:**
```
  STEP 1  x^3 - 1  =  (x - 1)(x^2 + x + 1)
          For x^2 + x + 1 :  b^2 - 4ac = 1 - 4 = -3  <  0  ->  irreducible

  STEP 2       2x^2 + 1                A            Bx + C
          --------------------  =  ---------  +  --------------
          (x-1)(x^2 + x + 1)          x - 1        x^2 + x + 1

  STEP 3   2x^2 + 1  =  A(x^2 + x + 1)  +  (Bx + C)(x - 1)

  STEP 4   x = 1    :   3  =  A(3)          ->  A = 1
           x^2      :   2  =  A + B         ->  B = 1
           constant :   1  =  A - C         ->  C = 0

  ANSWER:
              2x^2 + 1               1               x
          --------------------  =  -------  +  --------------
          (x-1)(x^2 + x + 1)        x - 1       x^2 + x + 1

  CHECK x = 0 :  LHS = 1/(-1) = -1 .  RHS = -1 + 0 = -1      MATCHES
```

---

### Q B12  (CASE 3 — quadratic written in a scrambled order)
Resolve `(3x - 1)/((x^2 - x + 1)(x + 2))` into partial fractions.

**ANSWER:**
```
        3x - 1                  A          Bx + C
   ------------------  =    -------  +  --------------
   (x + 2)(x^2 - x + 1)      x + 2       x^2 - x + 1

   3x - 1  =  A(x^2 - x + 1)  +  (Bx + C)(x + 2)

   x = -2   :  -7  =  A(4 + 2 + 1) = 7A     ->  A = -1
   x^2      :   0  =  A + B                  ->  B =  1
   constant :  -1  =  A + 2C = -1 + 2C       ->  C =  0

  ANSWER:
        3x - 1                 -1                x
   ------------------  =    -------  +  --------------
   (x + 2)(x^2 - x + 1)      x + 2       x^2 - x + 1

  CHECK x = 0 :  LHS = -1/2 .  RHS = -1/2 + 0 = -1/2      MATCHES
```

---

### Q B13  (CASE 3 — two different quadratic factors)
Resolve `(x^3 + x^2 + 1)/((x^2 + 2)(x^2 + 3))` into partial fractions.

**ANSWER:**
```
     x^3 + x^2 + 1             Ax + B          Cx + D
   --------------------  =  ------------  +  ------------
   (x^2 + 2)(x^2 + 3)          x^2 + 2         x^2 + 3

   x^3 + x^2 + 1  =  (Ax + B)(x^2 + 3)  +  (Cx + D)(x^2 + 2)
                  =  Ax^3 + Bx^2 + 3Ax + 3B  +  Cx^3 + Dx^2 + 2Cx + 2D

   x^3      :   A +  C  =  1
   x^2      :   B +  D  =  1
   x        :  3A + 2C  =  0
   constant :  3B + 2D  =  1

   From A + C = 1 ,  C = 1 - A .  Then 3A + 2(1 - A) = 0  ->  A = -2 , C = 3
   From B + D = 1 ,  D = 1 - B .  Then 3B + 2(1 - B) = 1  ->  B = -1 , D = 2

  ANSWER:
     x^3 + x^2 + 1             -2x - 1          3x + 2
   --------------------  =  ------------  +  ------------
   (x^2 + 2)(x^2 + 3)          x^2 + 2         x^2 + 3

  CHECK x = 0 :  LHS = 1/6 .  RHS = -1/2 + 2/3 = 1/6      MATCHES
```

---

### Q B14  (IMPROPER — divide first)
Resolve `(x^2 + 1)/(x^2 - 3x + 2)` into partial fractions.

**ANSWER:**
```
  STEP 1  Degrees are EQUAL  ->  improper  ->  divide.

     (x^2 + 1)  -  1 x (x^2 - 3x + 2)  =  3x - 1

        x^2 + 1                 3x - 1
     -------------  =   1  +  --------------
      x^2 - 3x + 2             (x - 1)(x - 2)

  STEP 2  Split the proper part:

     3x - 1  =  A(x - 2)  +  B(x - 1)

     x = 1 :   2  =  A(-1)        ->  A = -2
     x = 2 :   5  =  B(1)         ->  B =  5

  ANSWER:
        x^2 + 1                    -2             5
     -------------  =   1   +   --------  +   --------
      x^2 - 3x + 2                x - 1         x - 2

  CHECK x = 0 :  LHS = 1/2 .  RHS = 1 + 2 - 2.5 = 0.5      MATCHES
```

---

### Q B15  (IMPROPER — full long division)
Resolve `x^3/((x - 1)(x - 2))` into partial fractions.

**ANSWER:**
```
  STEP 1  (x-1)(x-2) = x^2 - 3x + 2 .  Top degree 3 > bottom degree 2 -> divide.

                       x  +  3
                   ---------------------
   x^2 - 3x + 2  )  x^3 + 0x^2 + 0x + 0
                    x^3 - 3x^2 + 2x
                   ------------------
                          3x^2 - 2x + 0
                          3x^2 - 9x + 6
                         ----------------
                                 7x - 6

        x^3                             7x - 6
     ------------  =   x + 3   +   ----------------
     (x-1)(x-2)                     (x - 1)(x - 2)

  STEP 2  7x - 6  =  A(x - 2)  +  B(x - 1)

          x = 1 :   1  =  A(-1)       ->  A = -1
          x = 2 :   8  =  B(1)        ->  B =  8

  ANSWER:
        x^3                              -1             8
     ------------  =   x + 3   +     --------   +   --------
     (x-1)(x-2)                        x - 1          x - 2

  CHECK x = 0 :  LHS = 0 .  RHS = 3 + 1 - 4 = 0      MATCHES
```

---

### Q B16  (CASE 4 — repeated quadratic)
Resolve `(x^3 + 3x - 2)/(x^2 + 2)^2` into partial fractions.

**ANSWER:**
```
     x^3 + 3x - 2            Ax + B            Cx + D
   ----------------  =  --------------  +  ---------------
     (x^2 + 2)^2            x^2 + 2          (x^2 + 2)^2

   x^3 + 3x - 2  =  (Ax + B)(x^2 + 2)  +  Cx + D
                 =  Ax^3 + Bx^2 + 2Ax + 2B + Cx + D

   x^3      :  A = 1
   x^2      :  B = 0
   x        :  2A + C = 3     ->  C = 1
   constant :  2B + D = -2    ->  D = -2

  ANSWER:
     x^3 + 3x - 2                x                x - 2
   ----------------  =  --------------  +  ---------------
     (x^2 + 2)^2            x^2 + 2          (x^2 + 2)^2

  CHECK x = 1 :  LHS = 2/9 .  RHS = 1/3 - 1/9 = 2/9      MATCHES
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# ===============================================================

```
  +--------------------------------------------------------------------+
  |  HONEST NOTE                                                       |
  |                                                                    |
  |  Partial Fractions is NOT a Section C (7-mark) topic in Maths IIA. |
  |  Section C in IIA is dominated by:                                 |
  |      Theory of Equations, Permutations & Combinations,             |
  |      Binomial Theorem, Probability, Measures of Dispersion.        |
  |                                                                    |
  |  Do NOT prepare a "long answer" for partial fractions.             |
  |                                                                    |
  |  WHERE IT COMES BACK AS A BIG QUESTION:                            |
  |  In MATHS IIB, integration questions worth 4 or 7 marks are often  |
  |  solved BY partial fractions. So the skill is still earning you    |
  |  marks - just on the other paper. Example:                         |
  |                                                                    |
  |         Evaluate the integral of  1/(x^2 - a^2)  dx                |
  |                                                                    |
  |  needs exactly the CASE 1 split you learned here.                  |
  +--------------------------------------------------------------------+
```

**One worked example of that crossover (Maths IIB style):**

```
  Evaluate the integral of  (2x + 1)/((x + 1)(x + 2))  dx

  STEP 1  Split by cover-up:
          A = (2(-1) + 1)/(-1 + 2)  =  (-1)/(1)   =  -1
          B = (2(-2) + 1)/(-2 + 1)  =  (-3)/(-1)  =   3

              2x + 1               -1             3
          --------------  =    --------   +   --------
          (x+1)(x+2)             x + 1          x + 2

  STEP 2  Integrate each piece:

          =  -log |x + 1|  +  3 log |x + 2|  +  c
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

| Rank | Question type | Section | Marks | How often |
|------|---------------|---------|-------|-----------|
| 1 | Resolve with DISTINCT LINEAR factors (2 or 3 brackets) | B | 4 | Very often |
| 2 | Find ONE coefficient by cover-up | A | 2 | Very often |
| 3 | Resolve with a REPEATED LINEAR factor `(x-a)^2` | B | 4 | Often |
| 4 | Resolve with an IRREDUCIBLE QUADRATIC factor | B | 4 | Often |
| 5 | Denominator must be FACTORISED first (`x^2-4`, `x^3-1`) | A or B | 2 or 4 | Often |
| 6 | IMPROPER fraction — divide, then resolve | B | 4 | Fairly often |
| 7 | Whole denominator is `(x-a)^3` (use y = x - a) | B | 4 | Fairly often |
| 8 | Write the FORM / count the constants | A | 2 | Sometimes |
| 9 | Repeated QUADRATIC factor `(x^2+p)^2` | B | 4 | Rarely |
| 10 | Value of A + B + C | A | 2 | Rarely |

```
  +--------------------------------------------------------------------+
  |  THE ONE-LINE EXAM PLAN FOR THIS CHAPTER                           |
  |                                                                    |
  |  Master ranks 1 and 2 above and you will almost certainly collect  |
  |  6 marks (one 4-mark + one 2-mark) with no thinking required.      |
  |  Add ranks 3 and 4 and this chapter becomes completely safe.       |
  +--------------------------------------------------------------------+
```
