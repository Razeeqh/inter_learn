# Partial Fractions — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.
Nothing here assumes you remember anything. We start from "what is a fraction".

---

# TOPIC 1 — What is a rational function?

A **polynomial** is an expression made only of powers of x with number
coefficients. No division by x, no square roots of x, no sin x.

```
  POLYNOMIALS               NOT POLYNOMIALS
  ------------------        --------------------
  5                         1/x
  2x + 3                    sqrt(x)
  x^2 - 5x + 6              x^(-2)
  x^3 + 1                   sin x
```

The **degree** of a polynomial = the HIGHEST power of x in it.

```
  5                 ->  degree 0
  2x + 3            ->  degree 1     (called LINEAR)
  x^2 - 5x + 6      ->  degree 2     (called QUADRATIC)
  x^3 + 1           ->  degree 3     (called CUBIC)
```

A **rational function** is simply one polynomial divided by another polynomial.

```
      N(x)              <-- N = numerator   (top)
    --------
      D(x)              <-- D = denominator (bottom)
```

Examples of rational functions:

```
    2x + 3               x^2 + 1              5
  ------------ ,      ------------ ,      --------
   x^2 - 5x + 6          x - 2              x + 1
```

> **TRAP:** the bottom must never be zero. In `1/(x-2)` the value x = 2 is not
> allowed. You are not asked about this in the exam, but never "cancel" a bracket
> that could be zero.

---

# TOPIC 2 — What does "resolve into partial fractions" mean?

You already know how to ADD two fractions. Watch:

```
      1             1            1(x + 2)  +  1(x - 1)          2x + 1
  ---------  +  ---------  =  ---------------------------  =  -------------
    x - 1         x + 2              (x - 1)(x + 2)            (x-1)(x+2)
```

Partial fractions is that **same process run backwards**. You are handed the big
fraction on the right, and asked to find the two small ones on the left.

```
     BIG FRACTION                    SMALL FRACTIONS
   (what you are given)             (what you must find)

       2x + 1                          1             1
   -------------      ------>      ---------  +  ---------
    (x-1)(x+2)                       x - 1         x + 2
```

The small fractions are called the **partial fractions**.
The whole chapter is a routine for finding them.

**Why it matters (this is the real reason it is in your syllabus):**

```
  You CANNOT integrate this easily:            1
                                        ---------------
                                         x^2 - 5x + 6

  But after partial fractions it becomes:    -1            1
                                          -------  +  -------
                                           x - 2       x - 3

  and now the integral is just  -log|x-2| + log|x-3| + c   in ONE line.
```

---

# TOPIC 3 — PROPER and IMPROPER fractions (do this check FIRST, always)

Compare the **degree of the top** with the **degree of the bottom**.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   degree of N(x)  <  degree of D(x)     ->   PROPER               |
  |                                              (go straight ahead) |
  |                                                                  |
  |   degree of N(x)  >=  degree of D(x)    ->   IMPROPER             |
  |                                              (DIVIDE FIRST!)     |
  |                                                                  |
  +------------------------------------------------------------------+
```

Look at these and decide:

| Fraction | Top degree | Bottom degree | Verdict |
|----------|-----------|---------------|---------|
| `(2x+3)/(x^2-5x+6)` | 1 | 2 | PROPER |
| `(x^2+1)/(x^2-3x+2)` | 2 | 2 | IMPROPER (equal counts as improper) |
| `x^3/((x-1)(x-2))` | 3 | 2 | IMPROPER |
| `(x^2-3)/((x-1)(x-2)(x-3))` | 2 | 3 | PROPER |

> **TRAP #1:** You must MULTIPLY OUT the bottom in your head to get its degree.
> `(x-1)(x-2)(x-3)` looks small but its degree is **3**, not 1.
>
> **TRAP #2:** EQUAL degrees means IMPROPER. `(x^2+1)/(x^2-3x+2)` must be divided
> first. Students lose the whole 4 marks by skipping this.

**Only a PROPER fraction can be split into partial fractions.**
If it is improper, you first turn it into
`Quotient + (Remainder / Denominator)` — and the remainder part is always proper.

---

# TOPIC 4 — Long division: turning an improper fraction into a proper one

This is ordinary division, exactly like 17 divided by 5 gives 3 remainder 2, so
that `17/5 = 3 + 2/5`.

### Worked example 4A — the easy kind (equal degrees)

Express `(x^2 + 1)/(x^2 - 3x + 2)` in the form Quotient + proper fraction.

```
  Because top degree = bottom degree = 2, the quotient is just a NUMBER.

  How many times does  x^2 - 3x + 2  go into  x^2 + 1 ?    Once.

  Subtract:     (x^2 + 1)  -  1 x (x^2 - 3x + 2)
              =  x^2 + 1 - x^2 + 3x - 2
              =  3x - 1                       <-- this is the REMAINDER

  So:
        x^2 + 1                     3x - 1
     --------------  =   1   +   --------------
      x^2 - 3x + 2                x^2 - 3x + 2
                          ^            ^
                       quotient     PROPER - now resolve this part
```

### Worked example 4B — full long division

Express `x^3 / ((x-1)(x-2))` as quotient + proper fraction.

```
  First multiply out the bottom:   (x-1)(x-2) = x^2 - 3x + 2

                       x  +  3
                   ---------------------
   x^2 - 3x + 2  )  x^3 + 0x^2 + 0x + 0
                    x^3 - 3x^2 + 2x                 <- x times divisor
                   ------------------
                          3x^2 - 2x + 0
                          3x^2 - 9x + 6             <- 3 times divisor
                         ----------------
                                 7x - 6             <- REMAINDER

  So:
        x^3                                  7x - 6
    -------------   =   x + 3   +   ---------------------
    (x-1)(x-2)                        (x - 1)(x - 2)
```

**How to check any long division instantly:** put x = 0 in both sides.

```
  LHS  =  0 / ((0-1)(0-2))  =  0/2  =  0

  RHS  =  0 + 3  +  (-6)/((-1)(-2))  =  3  +  (-6/2)  =  3 - 3  =  0    MATCHES
```

> **TRAP:** Write the missing powers as `0x^2` and `0x` when you set up the
> division. If you skip them your columns go crooked and everything is wrong.

---

# TOPIC 5 — Factorising the denominator (you cannot start without this)

Partial fractions only works when the bottom is written as a PRODUCT of brackets.
So if you are given `x^2 - 5x + 6`, factorise it first.

**The three factorisations you must be able to do on sight:**

```
  1. Middle-term split      x^2 - 5x + 6  =  (x - 2)(x - 3)
                            x^2 + 3x + 2  =  (x + 1)(x + 2)
                            2x^2 + 5x + 3 =  (2x + 3)(x + 1)

  2. Difference of squares  x^2 - 4       =  (x - 2)(x + 2)
                            x^2 - a^2     =  (x - a)(x + a)
                            x^2 - 1       =  (x - 1)(x + 1)

  3. Cubes                  x^3 - 1       =  (x - 1)(x^2 + x + 1)
                            x^3 + 1       =  (x + 1)(x^2 - x + 1)
                            x^3 + x       =  x (x^2 + 1)
```

**How to split the middle term of `x^2 - 5x + 6`:**

```
  Find two numbers that
       MULTIPLY to  +6   (the constant)
       ADD      to  -5   (the middle coefficient)

  Try:  -2 and -3.      (-2)(-3) = 6  YES      (-2)+(-3) = -5  YES

  So    x^2 - 5x + 6  =  (x - 2)(x - 3)
```

**How to tell if a quadratic will NOT factorise (this decides CASE 3):**

```
  For  a x^2 + b x + c ,   compute   b^2 - 4ac .

     b^2 - 4ac  is a perfect square (0,1,4,9,16,...)  ->  IT FACTORISES
     b^2 - 4ac  is negative or not a perfect square   ->  IT DOES NOT
                                                          (called IRREDUCIBLE)

  Example:  x^2 + 1        ->  b^2-4ac = 0 - 4(1)(1) = -4   negative -> CASE 3
  Example:  x^2 + x + 1    ->  1 - 4 = -3                   negative -> CASE 3
  Example:  x^2 - 5x + 6   ->  25 - 24 = 1  = 1^2           factorises -> CASE 1
```

> **TRAP:** Never leave `x^2 - 4` sitting as a quadratic and write `(Ax+B)/(x^2-4)`.
> It FACTORISES into `(x-2)(x+2)`, so it is CASE 1, not CASE 3. Always test first.

---

# TOPIC 6 — CASE 1: DISTINCT LINEAR FACTORS

**Rule:** every different bracket `(x - a)` gets ONE constant on top.

```
  +--------------------------------------------------------------+
  |                                                              |
  |        N(x)                A            B                    |
  |    --------------  =  ----------  +  ----------              |
  |    (x - a)(x - b)        x - a          x - b                |
  |                                                              |
  +--------------------------------------------------------------+
```

### Worked example 6A — every single step shown

Resolve `(3x + 7)/((x - 1)(x - 2))` into partial fractions.

```
  STEP 1  Proper?   top degree 1 , bottom degree 2 .  1 < 2  ->  PROPER. Good.

  STEP 2  Both brackets are linear and DIFFERENT  ->  CASE 1.

  STEP 3  Write the form:

              3x + 7                A            B
          --------------   =   ----------  +  ----------
          (x - 1)(x - 2)          x - 1          x - 2

  STEP 4  Multiply BOTH sides by (x - 1)(x - 2). All denominators vanish:

          3x + 7  =  A(x - 2)  +  B(x - 1)             ... (*)

  STEP 5  Put x = 2   (this kills the A term because 2 - 2 = 0):

          3(2) + 7  =  A(0)  +  B(2 - 1)
          6 + 7     =  B(1)
          13        =  B                ->   B = 13

  STEP 6  Put x = 1   (this kills the B term because 1 - 1 = 0):

          3(1) + 7  =  A(1 - 2)  +  B(0)
          10        =  A(-1)
                       A = -10

  STEP 7  Write the answer:

              3x + 7               -10             13
          --------------   =   ----------  +  ----------
          (x - 1)(x - 2)          x - 1          x - 2
```

**CHECK (do this every time — put x = 0):**

```
  LHS  =  (0 + 7) / ((0-1)(0-2))  =  7 / 2   =  3.5

  RHS  =  -10/(0-1)  +  13/(0-2)  =  10  -  6.5  =  3.5      MATCHES
```

### Worked example 6B — the denominator must be factorised first

Resolve `(2x + 3)/(x^2 - 5x + 6)`.

```
  STEP 1  Factorise the bottom:   x^2 - 5x + 6 = (x - 2)(x - 3)

  STEP 2  Proper?  1 < 2  YES.

  STEP 3        2x + 3                A            B
            --------------   =   ----------  +  ----------
            (x - 2)(x - 3)          x - 2          x - 3

  STEP 4    2x + 3  =  A(x - 3)  +  B(x - 2)

  STEP 5    x = 3 :   2(3) + 3 = B(3 - 2)      ->   9 = B      ->  B = 9
            x = 2 :   2(2) + 3 = A(2 - 3)      ->   7 = -A     ->  A = -7

  ANSWER:
                2x + 3                -7             9
            --------------   =   ----------  +  ----------
             x^2 - 5x + 6           x - 2          x - 3

  CHECK x = 0 :  LHS = 3/6 = 0.5 .  RHS = -7/(-2) + 9/(-3) = 3.5 - 3 = 0.5  OK
```

### Worked example 6C — three linear factors

Resolve `(x^2 - 3)/((x - 1)(x - 2)(x - 3))`.

```
  Proper?  top degree 2 , bottom degree 3 .  YES.

        x^2 - 3                 A            B            C
   ----------------------  =  -------  +  -------  +  -------
   (x-1)(x-2)(x-3)              x-1          x-2          x-3

   Multiply through:

   x^2 - 3  =  A(x-2)(x-3)  +  B(x-1)(x-3)  +  C(x-1)(x-2)

   x = 1 :   1 - 3   =  A(1-2)(1-3)      ->  -2 = A(-1)(-2) = 2A   ->  A = -1
   x = 2 :   4 - 3   =  B(2-1)(2-3)      ->   1 = B(1)(-1) = -B    ->  B = -1
   x = 3 :   9 - 3   =  C(3-1)(3-2)      ->   6 = C(2)(1) = 2C     ->  C = 3

  ANSWER:
        x^2 - 3                -1           -1            3
   ----------------------  =  -------  +  -------  +  -------
   (x-1)(x-2)(x-3)              x-1          x-2          x-3

  CHECK x = 0 :
     LHS = -3 / ((-1)(-2)(-3)) = -3/(-6) = 0.5
     RHS = -1/(-1) + (-1)/(-2) + 3/(-3) = 1 + 0.5 - 1 = 0.5     MATCHES
```

> **TRAP:** with three brackets you get three equations — but you get them ONE AT
> A TIME by choosing x = 1, then x = 2, then x = 3. Never try to solve all three
> simultaneously; that is slow and error-prone.

---

# TOPIC 7 — The COVER-UP (Heaviside) method: the 10-second shortcut

This works **only for a DISTINCT LINEAR factor**, but that is exactly what most
2-mark questions ask about.

```
  +--------------------------------------------------------------------+
  |  TO FIND THE CONSTANT SITTING ON TOP OF  (x - a) :                 |
  |                                                                    |
  |  1. COVER UP the bracket (x - a) with your finger.                 |
  |  2. In everything that is LEFT, put  x = a .                       |
  |  3. The number you get IS the constant. Done.                      |
  +--------------------------------------------------------------------+
```

### Worked example 7A

Find A and B in `(3x + 7)/((x-1)(x-2)) = A/(x-1) + B/(x-2)`.

```
  For A :  cover (x - 1) ->     3x + 7                3(1) + 7        10
                            -------------   then  =  ----------  =  -----  = -10
                             (      )(x-2)              1 - 2          -1

  For B :  cover (x - 2) ->     3x + 7                3(2) + 7        13
                            -------------   then  =  ----------  =  -----  =  13
                             (x-1)(     )              2 - 1           1
```

Same answers as Worked example 6A, in about eight seconds.

### Worked example 7B — a typical 2-mark board question

Find the coefficient of `1/(x - 2)` in the partial fractions of
`(x - 4)/((x-1)(x-2)(x-3))`.

```
  Cover (x - 2), then put x = 2 into the rest:

           x - 4                     2 - 4              -2
     ------------------   ->    ---------------  =  ---------  =  2
     (x-1)(   )(x-3)             (2-1)(2-3)          (1)(-1)

  ANSWER:  2
```

You did not have to find A or C at all. That is the whole 2 marks.

> **TRAP:** cover-up does **NOT** give you the constant on a repeated bracket's
> LOWER powers, and it does **NOT** work on a quadratic factor. Use it only for
> the highest power of a linear bracket.

---

# TOPIC 8 — CASE 2: REPEATED LINEAR FACTORS

If a bracket carries a power, you must write **every** power from 1 up to that power.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |       N(x)               A             B                           |
  |   -------------  =  ----------  +  -----------                     |
  |    (x - a)^2           x - a         (x - a)^2                     |
  |                                                                    |
  |                                                                    |
  |       N(x)               A             B              C            |
  |   -------------  =  ----------  +  -----------  +  ----------      |
  |    (x - a)^3           x - a         (x - a)^2      (x - a)^3      |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### Worked example 8A

Resolve `(x^2 + 1)/((x - 1)^2 (x - 2))`.

```
  Proper?  2 < 3  YES.
  Factors: (x-1) repeated twice, and (x-2) once.

        x^2 + 1                A            B             C
   ------------------  =  ---------  +  ---------  +  ---------
   (x - 1)^2 (x - 2)         x - 1       (x-1)^2        x - 2

  Multiply both sides by (x-1)^2 (x-2):

   x^2 + 1  =  A(x-1)(x-2)  +  B(x-2)  +  C(x-1)^2      ... (*)

  STEP 1  Put x = 1   (kills A and C):
          1 + 1  =  B(1 - 2)
          2      =  -B                ->   B = -2

  STEP 2  Put x = 2   (kills A and B):
          4 + 1  =  C(2 - 1)^2
          5      =  C                 ->   C = 5

  STEP 3  A is still missing. Compare the x^2 terms in (*):
          LHS x^2 coefficient  =  1
          RHS x^2 coefficient  =  A  +  C           (B(x-2) has no x^2)
          So   1 = A + 5       ->   A = -4

  ANSWER:
        x^2 + 1                -4            -2            5
   ------------------  =  ---------  +  ---------  +  ---------
   (x - 1)^2 (x - 2)         x - 1       (x-1)^2        x - 2

  CHECK x = 0 :
     LHS = 1 / ((1)(-2)) = -0.5
     RHS = -4/(-1) + (-2)/(1) + 5/(-2) = 4 - 2 - 2.5 = -0.5      MATCHES
```

> **TRAP:** Putting x = 1 gives you **B** (the top-power one), never A.
> To get A you must compare coefficients or substitute one extra easy value
> such as x = 0. Many students stop after finding B and C and lose marks.

### Worked example 8B — the substitution trick when the WHOLE bottom is (x - a)^n

Resolve `(x^2 + 5x + 7)/(x - 3)^3`.

```
  SHORTCUT: let  y = x - 3 ,  so  x = y + 3 . Rewrite the top in terms of y:

     x^2 + 5x + 7  =  (y+3)^2 + 5(y+3) + 7
                   =  y^2 + 6y + 9 + 5y + 15 + 7
                   =  y^2 + 11y + 31

  So the fraction becomes

     y^2 + 11y + 31          y^2         11y          31
    ------------------  =  --------  +  --------  +  --------
          y^3                y^3          y^3          y^3

                             1            11           31
                        =  ------  +   -------   +  -------
                             y            y^2          y^3

  Put  y = x - 3  back:

        x^2 + 5x + 7            1             11             31
      ----------------  =  ---------  +  -----------  +  -----------
         (x - 3)^3            x - 3        (x-3)^2         (x-3)^3

  CHECK x = 4 :  LHS = (16 + 20 + 7)/1 = 43 .  RHS = 1 + 11 + 31 = 43   MATCHES
```

This substitution turns a 4-mark question into 60 seconds of arithmetic.
**Use it whenever the ENTIRE denominator is one bracket raised to a power.**

### Worked example 8C — repeated factor plus another factor

Resolve `1/((x - 1)(x + 2)^2)`.

```
        1               A            B             C
   --------------  =  -------  +  -------  +  -----------
   (x-1)(x+2)^2         x-1         x+2         (x+2)^2

   1  =  A(x+2)^2  +  B(x-1)(x+2)  +  C(x-1)

   x = 1  :  1 = A(3)^2 = 9A            ->  A = 1/9
   x = -2 :  1 = C(-2-1) = -3C          ->  C = -1/3

   Compare x^2 :   0 = A + B            ->  B = -1/9

  ANSWER:
        1              1/9          -1/9          -1/3
   --------------  =  -------  +  -------  +  -----------
   (x-1)(x+2)^2         x-1         x+2         (x+2)^2

  CHECK x = 0 :
     LHS = 1/((-1)(4)) = -1/4
     RHS = (1/9)/(-1) + (-1/9)/(2) + (-1/3)/(4)
         = -1/9 - 1/18 - 1/12
         = -4/36 - 2/36 - 3/36  =  -9/36  =  -1/4          MATCHES
```

---

# TOPIC 9 — CASE 3: A NON-REPEATED IRREDUCIBLE QUADRATIC FACTOR

If a bracket is a quadratic that will not factorise, the thing on top of it must
be a **linear expression** `Bx + C`, not just a number.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |          N(x)                  A             Bx + C                 |
  |   -------------------  =  ----------  +  ----------------           |
  |   (x - a)(x^2 + p)           x - a           x^2 + p                |
  |                                                                     |
  |   Reason: the top of a partial fraction must always have degree      |
  |   ONE LESS than its bottom.                                          |
  |         bottom degree 1  ->  top is a number  (degree 0)             |
  |         bottom degree 2  ->  top is Bx + C    (degree 1)             |
  +---------------------------------------------------------------------+
```

### Worked example 9A

Resolve `(x + 3)/((x + 1)(x^2 + 1))`.

```
  x^2 + 1 does not factorise (b^2 - 4ac = -4, negative).  ->  CASE 3.

        x + 3                A          Bx + C
   -----------------  =  --------  +  ----------
   (x+1)(x^2 + 1)          x + 1        x^2 + 1

  Multiply by (x+1)(x^2+1):

   x + 3  =  A(x^2 + 1)  +  (Bx + C)(x + 1)          ... (*)

  STEP 1  Put x = -1 :
          -1 + 3  =  A((-1)^2 + 1)
          2       =  A(2)              ->  A = 1

  STEP 2  Compare x^2 coefficients in (*):
          LHS: 0        RHS: A + B
          0 = 1 + B     ->  B = -1

  STEP 3  Compare constant terms in (*)  (put x = 0 mentally):
          LHS: 3        RHS: A(1) + C(1) = A + C
          3 = 1 + C     ->  C = 2

  ANSWER:
        x + 3                1           -x + 2
   -----------------  =  --------  +  ------------
   (x+1)(x^2 + 1)          x + 1        x^2 + 1

  CHECK x = 0 :  LHS = 3/(1 x 1) = 3 .  RHS = 1 + 2 = 3      MATCHES
```

### Worked example 9B — a cubic denominator hiding a quadratic factor

Resolve `(2x^2 + 1)/(x^3 - 1)`.

```
  STEP 1  Factorise:   x^3 - 1  =  (x - 1)(x^2 + x + 1)
          Check x^2+x+1 :  b^2-4ac = 1 - 4 = -3  negative  ->  irreducible.

  STEP 2       2x^2 + 1                  A            Bx + C
          ---------------------  =  ---------  +  --------------
          (x-1)(x^2 + x + 1)          x - 1        x^2 + x + 1

  STEP 3   2x^2 + 1  =  A(x^2 + x + 1)  +  (Bx + C)(x - 1)

  STEP 4   x = 1 :   2 + 1 = A(1 + 1 + 1)   ->  3 = 3A  ->  A = 1

  STEP 5   Compare x^2 :   2 = A + B    ->  2 = 1 + B   ->  B = 1
           Compare const :  1 = A - C    ->  1 = 1 - C   ->  C = 0

  ANSWER:
             2x^2 + 1                  1               x
          ---------------------  =  ---------  +  --------------
          (x-1)(x^2 + x + 1)          x - 1        x^2 + x + 1

  CHECK x = 0 :  LHS = 1/(-1) = -1 .  RHS = 1/(-1) + 0 = -1     MATCHES
```

### Worked example 9C — two different quadratic factors

Resolve `(x^3 + x^2 + 1)/((x^2 + 2)(x^2 + 3))`.

```
  Proper?  3 < 4  YES.  Both quadratics are irreducible.

     x^3 + x^2 + 1            Ax + B          Cx + D
   -------------------  =  ------------  +  ------------
   (x^2+2)(x^2+3)             x^2 + 2         x^2 + 3

   x^3 + x^2 + 1  =  (Ax + B)(x^2 + 3)  +  (Cx + D)(x^2 + 2)

   Expand:
      =  Ax^3 + 3Ax + Bx^2 + 3B  +  Cx^3 + 2Cx + Dx^2 + 2D

   Compare:
      x^3 :   A + C  = 1
      x^2 :   B + D  = 1
      x   :  3A + 2C = 0
      1   :  3B + 2D = 1

   From A + C = 1 ,  C = 1 - A .  Put into 3A + 2C = 0 :
        3A + 2 - 2A = 0   ->  A + 2 = 0  ->  A = -2 ,  C = 3

   From B + D = 1 ,  D = 1 - B .  Put into 3B + 2D = 1 :
        3B + 2 - 2B = 1   ->  B + 2 = 1  ->  B = -1 ,  D = 2

  ANSWER:
     x^3 + x^2 + 1            -2x - 1          3x + 2
   -------------------  =  ------------  +  ------------
   (x^2+2)(x^2+3)             x^2 + 2         x^2 + 3

  CHECK x = 0 :  LHS = 1/(2 x 3) = 1/6 .  RHS = -1/2 + 2/3 = 1/6    MATCHES
```

> **TRAP:** Writing `A/(x^2 + 1)` instead of `(Bx + C)/(x^2 + 1)`.
> The equations then have no solution and you will waste ten minutes.
> **Quadratic bottom means Bx + C on top. Every time.**

---

# TOPIC 10 — CASE 4: REPEATED QUADRATIC FACTOR

Same idea as CASE 2, but each level gets `Ax + B` on top.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |       N(x)                Ax + B             Cx + D                 |
  |   --------------  =  --------------  +  -----------------           |
  |   (x^2 + p)^2            x^2 + p           (x^2 + p)^2              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

### Worked example 10A

Resolve `(x^3 + 3x - 2)/(x^2 + 2)^2`.

```
  Proper?  top degree 3 , bottom degree 4 .  YES.

     x^3 + 3x - 2            Ax + B            Cx + D
   ----------------  =  --------------  +  ---------------
     (x^2 + 2)^2            x^2 + 2          (x^2 + 2)^2

  Multiply by (x^2+2)^2 :

     x^3 + 3x - 2  =  (Ax + B)(x^2 + 2)  +  Cx + D
                   =  Ax^3 + Bx^2 + 2Ax + 2B + Cx + D

  Compare:
     x^3 :   A = 1
     x^2 :   B = 0
     x   :   2A + C = 3   ->   2(1) + C = 3   ->  C = 1
     1   :   2B + D = -2  ->   0 + D = -2     ->  D = -2

  ANSWER:
     x^3 + 3x - 2               x                x - 2
   ----------------  =  --------------  +  ---------------
     (x^2 + 2)^2            x^2 + 2          (x^2 + 2)^2

  CHECK x = 1 :  LHS = (1 + 3 - 2)/(3^2) = 2/9
                 RHS = 1/3 + (-1)/9 = 3/9 - 1/9 = 2/9        MATCHES
```

### Worked example 10B — a short one

Resolve `(x^3 + x + 1)/(x^2 + 1)^2`.

```
     x^3 + x + 1  =  (Ax + B)(x^2 + 1)  +  Cx + D
                  =  Ax^3 + Bx^2 + Ax + B + Cx + D

     x^3 :  A = 1
     x^2 :  B = 0
     x   :  A + C = 1   ->  C = 0
     1   :  B + D = 1   ->  D = 1

  ANSWER:
     x^3 + x + 1             x                1
   --------------  =  ------------  +  ---------------
    (x^2 + 1)^2          x^2 + 1         (x^2 + 1)^2
```

---

# TOPIC 11 — The shortcut when only EVEN powers of x appear

If **every** power of x in the fraction is even, substitute `y = x^2`,
solve the easy CASE 1 problem in y, then put `y = x^2` back.

### Worked example 11A

Resolve `x^2 / ((x^2 + 1)(x^2 + 4))`.

```
  Let  y = x^2 :
                          y                 A            B
                 -------------------  =  --------  +  --------
                 (y + 1)(y + 4)            y + 1        y + 4

  Cover-up in y :
       y = -1 :   A = (-1)/(-1 + 4) = -1/3
       y = -4 :   B = (-4)/(-4 + 1) = -4/(-3) = 4/3

  Put y = x^2 back:

          x^2                 -1/3            4/3
   -------------------  =  ----------  +  ----------
   (x^2 + 1)(x^2 + 4)        x^2 + 1        x^2 + 4

  CHECK x = 0 :  LHS = 0 .  RHS = -1/3 + 4/12 = -1/3 + 1/3 = 0     MATCHES
```

> **TRAP:** This works ONLY if there is no odd power of x anywhere.
> `x/((x^2+1)(x^2+4))` has an odd power on top — but you can still substitute
> y = x^2 after writing the top as x times 1, because
> `x/((x^2+1)(x^2+4)) = (1/3)[ x/(x^2+1) - x/(x^2+4) ]`.

---

# TOPIC 12 — The two official methods (what to write in the exam)

## Method 1 — Substituting convenient values of x

Multiply out the denominators, then choose x values that make brackets vanish.

```
  BEST FOR:  distinct linear factors, and the top power of a repeated factor.
  WHY:       each chosen x kills all but one unknown.
  WHICH x:   the ROOT of each bracket.
                bracket (x - 3)   ->  use x = 3
                bracket (x + 2)   ->  use x = -2
                bracket (2x + 3)  ->  use x = -3/2
```

## Method 2 — Comparing coefficients

Multiply out fully, collect like powers of x, and match both sides.

```
  BEST FOR:  quadratic factors, repeated factors, anything the first method
             cannot finish.
  HOW:       write one equation for x^3, one for x^2, one for x, one for the
             constant. Solve them.
  SPEEDUP:   you rarely need all of them. Usually the x^(highest) equation and
             the constant equation are enough.
```

**In the exam, MIX them.** Use substitution to get the easy constants instantly,
then use one coefficient comparison to mop up the last unknown. That is the fastest
correct method and it earns full marks.

---

# TOPIC 13 — Using partial fractions to INTEGRATE (this is why the chapter exists)

Once split, every piece integrates using just two standard results:

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    Integral of   1/(x - a)   dx    =   log |x - a|  +  c        |
  |                                                                 |
  |                                       (x - a)^(1-n)             |
  |    Integral of   1/(x-a)^n   dx    =  --------------  +  c      |
  |                                            1 - n                |
  |                                       (for n not equal to 1)    |
  |                                                                 |
  +-----------------------------------------------------------------+
```

### Worked example 13A

Find the integral of `1/((x - 1)(x + 2))` with respect to x.

```
  STEP 1  Split (cover-up):
             A = 1/(1 + 2) = 1/3          B = 1/(-2 - 1) = -1/3

               1                  1/3           -1/3
          ------------  =  ------------  +  ------------
          (x-1)(x+2)           x - 1           x + 2

  STEP 2  Integrate term by term:

          = (1/3) log|x - 1|  -  (1/3) log|x + 2|  +  c

          = (1/3) log | (x - 1)/(x + 2) |  +  c
```

### Worked example 13B — the standard result you should memorise

```
        1                1              1           1
   -----------  =  -----------  x  [ -------  -  ------- ]
    x^2 - a^2           2a             x - a       x + a

   So the integral of 1/(x^2 - a^2) dx

               1           | x - a |
        =   -------  log   | ------- |   +   c
              2a           | x + a |
```

Example: the integral of `1/(x^2 - 9)` is `(1/6) log|(x - 3)/(x + 3)| + c`.

### Worked example 13C

Find the integral of `(2x + 1)/((x + 1)(x + 2))`.

```
  Cover-up:
     A  (cover x+1, put x = -1) :  (2(-1) + 1)/(-1 + 2)  =  (-1)/(1)  =  -1
     B  (cover x+2, put x = -2) :  (2(-2) + 1)/(-2 + 1)  =  (-3)/(-1) =   3

       2x + 1              -1            3
   --------------  =  ---------  +  ---------
   (x+1)(x+2)            x + 1        x + 2

  Integral  =  -log|x + 1|  +  3 log|x + 2|  +  c
```

> **TRAP:** if the top is exactly the derivative of the bottom, DO NOT use partial
> fractions. `2x/(x^2 - 1)` integrates straight to `log|x^2 - 1| + c`.
> Always glance for that first — it saves four minutes.

---

# TOPIC 14 — Two extra facts that win 2-mark questions

**Fact 1 — the sum of the constants.**
For a proper fraction with n DISTINCT linear factors, if the top degree is at most
n - 2, then `A + B + C + ... = 0`.

```
  Example:      1/((x-1)(x-2)(x-3))
                top degree 0 ,  n = 3 ,  0 <= 3 - 2  ->  A + B + C = 0

  Quick proof idea: A + B + C is the coefficient of x^2 on the right, and there
  is no x^2 on the left.
```

**Fact 2 — a bracket like (2x + 3).**
The root is where `2x + 3 = 0`, i.e. `x = -3/2`. Use that value in cover-up.

```
  Example:   find A in    x + 1                A            B
                       -------------  =  ----------  +  --------
                       (2x+3)(x-1)         2x + 3         x - 1

  Cover (2x + 3), put x = -3/2 :

                -3/2 + 1          -1/2          1
        A  =  -------------  =  --------  =  -----
                -3/2 - 1          -5/2          5
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I compare the DEGREES first and divide if it was improper ?
  [ ]  Did I FACTORISE the denominator completely ?
  [ ]  Did I test each quadratic with b^2 - 4ac before calling it irreducible ?
  [ ]  Did a repeated bracket get EVERY power written out (^1, ^2, ^3) ?
  [ ]  Did every QUADRATIC bracket get  Bx + C  on top, not just B ?
  [ ]  Did I find ALL the letters, not just the easy ones ?
  [ ]  Did I put x = 0 into both sides to CHECK ?   (20 seconds, saves 4 marks)
  [ ]  Did I write the FINAL answer as a sum of fractions, not just "A = 3, B = 5" ?
  [ ]  For an improper fraction, did I remember to add the QUOTIENT back on ?
  [ ]  In an integration question, did I put  + c  at the end ?
```
