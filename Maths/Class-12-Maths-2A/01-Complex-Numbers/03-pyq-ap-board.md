# Complex Numbers — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 1 — Complex Numbers**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIA paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q1 and Q2
  Section B  (4 marks each, answer any 5)    ->  usually Q11
  Section C  (7 marks each, answer any 5)    ->  usually shared with
                                                 Chapter 2 (De Moivre)

  Paper total:   10 x 2  +  5 x 4  +  5 x 7   =   20 + 20 + 35  =  75
```

> **Honest note:** Q1 and Q2 of Section A come from Complex Numbers and
> De Moivre's Theorem almost every single session — that is 4 marks you can
> bank before you even read the rest of the paper. The 7-mark questions from
> this chapter are less frequent, and when they appear they are usually
> polar-form or locus questions.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10.
# ===============================================================

## Topic: Powers of i

### Q A1
Find the value of `i^59`.

**ANSWER:**
```
  Divide the power by 4 and keep the remainder.
  59 = 4 x 14 + 3      ->   remainder 3

  remainder 3  ->  i^59 = i^3 = -i
```
**i^59 = -i**

---

### Q A2
Find the value of `i^18 + (1/i)^25`.

**ANSWER:**
```
  i^18 :   18 = 4 x 4 + 2   ->  remainder 2   ->  i^18 = -1

  1/i = -i   (because 1/i = 1/i x i/i = i/i^2 = i/(-1) = -i)

  (1/i)^25 = (-i)^25 = (-1)^25 x i^25
  25 = 4 x 6 + 1  ->  i^25 = i
  So (-i)^25 = -i

  Total = -1 + (-i) = -1 - i
```
**-1 - i**

---

### Q A3
Find `i^1 + i^2 + i^3 + ... + i^102`.

**ANSWER:**
```
  Any FOUR consecutive powers of i add to 0:   i - 1 - i + 1 = 0

  102 = 4 x 25 + 2
  The first 100 terms make 25 complete groups  ->  contribute 0.

  Left over:  i^101 + i^102
  101 -> remainder 1 -> i
  102 -> remainder 2 -> -1

  Sum = i - 1
```
**-1 + i**

---

### Q A4
Simplify `sqrt(-16) x sqrt(-4)`.

**ANSWER:**
```
  Convert to i FIRST (never multiply two negative surds directly):

  sqrt(-16) = 4i        sqrt(-4) = 2i

  (4i)(2i) = 8 i^2 = 8(-1) = -8
```
**-8**  (writing sqrt(64) = 8 would be WRONG)

---

## Topic: Express in the form a + ib

### Q A5
Express `(2 + 5i) / (-4 - 6i)` in the form a + ib.

**ANSWER:**
```
  Multiply top and bottom by the conjugate of the bottom, (-4 + 6i):

    (2 + 5i)(-4 + 6i)        -8 + 12i - 20i + 30i^2
   -------------------  =  --------------------------
     (-4)^2 + (-6)^2                16 + 36

                            -8 - 8i - 30       -38 - 8i
                         = --------------  =  ----------
                                 52               52

                            -19       2
                         =  ----  -  ---- i
                             26       13
```
**-19/26 - (2/13) i**

---

### Q A6
Express `(2 - i) / (1 + i)` in the form a + ib.

**ANSWER:**
```
    (2 - i)(1 - i)      2 - 2i - i + i^2      2 - 3i - 1       1 - 3i
   ----------------  = -----------------  =  ------------  =  --------
     1^2 + 1^2                 2                  2               2
```
**1/2 - (3/2) i**

---

### Q A7
Express `(1 + i) / (1 - i)` in the form a + ib.

**ANSWER:**
```
    (1 + i)(1 + i)      (1 + i)^2       2i
   ----------------  = -----------  =  ----  =  i
      1^2 + 1^2             2            2
```
**0 + 1i , that is i**

---

### Q A8
Find the real and imaginary parts of `(cos theta + i sin theta) / (cos theta - i sin theta)`.

**ANSWER:**
```
  Multiply top and bottom by (cos theta + i sin theta):

    (cos theta + i sin theta)^2       cos^2 t - sin^2 t + 2i sin t cos t
   ------------------------------ =  -----------------------------------
     cos^2 theta + sin^2 theta                      1

                                   =  cos 2theta + i sin 2theta
```
**Re = cos 2theta , Im = sin 2theta**

---

## Topic: Equality of complex numbers

### Q A9
If `4x + i(3x - y) = 3 + i(-6)`, where x and y are real, find x and y.

**ANSWER:**
```
  Compare REAL parts:        4x = 3        ->  x = 3/4
  Compare IMAGINARY parts:   3x - y = -6
                             3(3/4) - y = -6
                             9/4 + 6 = y
                             y = 9/4 + 24/4 = 33/4
```
**x = 3/4 , y = 33/4**

---

### Q A10
If `(a + ib)^2 = x + iy`, find the value of `x^2 + y^2`.

**ANSWER:**
```
  (a + ib)^2 = a^2 - b^2 + 2iab
  So   x = a^2 - b^2  and  y = 2ab

  x^2 + y^2 = (a^2 - b^2)^2 + (2ab)^2
            = a^4 - 2a^2 b^2 + b^4 + 4a^2 b^2
            = a^4 + 2a^2 b^2 + b^4
            = (a^2 + b^2)^2
```
**x^2 + y^2 = (a^2 + b^2)^2**

---

## Topic: Multiplicative inverse

### Q A11
Find the multiplicative inverse of `7 + 24i`.

**ANSWER:**
```
   -1     x - iy        7 - 24i        7 - 24i
  z   =  ---------  =  ----------  =  ---------
          x^2+y^2       49 + 576         625
```
**7/625 - (24/625) i**

---

### Q A12
Find the multiplicative inverse of `sqrt5 + 3i`.

**ANSWER:**
```
   x^2 + y^2 = 5 + 9 = 14

   -1      sqrt5 - 3i
  z   =  --------------
              14
```
**sqrt5/14 - (3/14) i**

---

## Topic: Modulus

### Q A13
Find the modulus of `(1 + i)(2 + i) / (3 + i)`.

**ANSWER:**
```
  Use |z1 z2| = |z1||z2| and |z1/z2| = |z1|/|z2|.
  DO NOT multiply anything out.

   |1 + i| x |2 + i|      sqrt2 x sqrt5       sqrt10
  --------------------  = ---------------  =  --------  =  1
        |3 + i|              sqrt10            sqrt10
```
**1**

---

### Q A14
If `z = 2 - 3i`, show that `z^2 - 4z + 13 = 0`.

**ANSWER:**
```
  z^2  = (2 - 3i)^2 = 4 - 12i + 9i^2 = 4 - 12i - 9 = -5 - 12i
  -4z  = -4(2 - 3i) = -8 + 12i
  +13  = 13

  Sum  = (-5 - 8 + 13) + (-12 + 12)i  =  0 + 0i  =  0
```
**Proved**

---

## Topic: Modulus and principal amplitude

### Q A15
Find the modulus and principal amplitude of `-1 - i sqrt3`.

**ANSWER:**
```
  x = -1 (negative) , y = -sqrt3 (negative)  ->  QUADRANT 3

  r     = sqrt(1 + 3) = 2
  alpha = tan^-1 | -sqrt3 / -1 | = tan^-1(sqrt3) = pi/3
  Q3    ->  theta = alpha - pi = pi/3 - pi = -2pi/3
```
**modulus = 2 , principal amplitude = -2pi/3**

---

### Q A16
Find the modulus and principal amplitude of `-sqrt7 + i sqrt21`.

**ANSWER:**
```
  x = -sqrt7 (negative) , y = sqrt21 (positive)  ->  QUADRANT 2

  r     = sqrt(7 + 21) = sqrt28 = 2 sqrt7
  alpha = tan^-1 | sqrt21 / sqrt7 | = tan^-1(sqrt3) = pi/3
  Q2    ->  theta = pi - pi/3 = 2pi/3
```
**modulus = 2 sqrt7 , principal amplitude = 2pi/3**

---

### Q A17
Express `-1 + i` in modulus-amplitude (polar) form.

**ANSWER:**
```
  x = -1 , y = 1   ->  QUADRANT 2
  r = sqrt(1 + 1) = sqrt2
  alpha = tan^-1(1) = pi/4  ->  theta = pi - pi/4 = 3pi/4
```
**-1 + i = sqrt2 ( cos(3pi/4) + i sin(3pi/4) )**

---

### Q A18
Express `1 + i sqrt3` in modulus-amplitude form.

**ANSWER:**
```
  x = 1 , y = sqrt3  ->  QUADRANT 1
  r = sqrt(1 + 3) = 2
  theta = tan^-1(sqrt3) = pi/3
```
**1 + i sqrt3 = 2 ( cos(pi/3) + i sin(pi/3) )**

---

### Q A19
If `z1 = -1` and `z2 = i`, find `Arg(z1 z2)` and `Arg(z1 / z2)`.

**ANSWER:**
```
  z1 z2   = (-1)(i)  = -i        ->  point (0, -1)  ->  Arg = -pi/2

  z1 / z2 = -1 / i
          = -1 x (1/i)
          = -1 x (-i)            (because 1/i = -i)
          = i                    ->  point (0, 1)   ->  Arg = pi/2
```
**Arg(z1 z2) = -pi/2 , Arg(z1/z2) = pi/2**

---

## Topic: Square root

### Q A20
Find the square root of `7 + 24i`.

**ANSWER:**
```
  m = |7 + 24i| = sqrt(49 + 576) = 25

  real part = sqrt( (25 + 7)/2 ) = sqrt16 = 4
  imag part = sqrt( (25 - 7)/2 ) = sqrt9  = 3
  b = +24 is positive  ->  keep the plus

  CHECK: (4 + 3i)^2 = 16 + 24i - 9 = 7 + 24i
```
**+/- (4 + 3i)**

---

### Q A21
Find the square root of `-5 + 12i`.

**ANSWER:**
```
  m = sqrt(25 + 144) = 13

  real part = sqrt( (13 - 5)/2 ) = sqrt4 = 2
  imag part = sqrt( (13 + 5)/2 ) = sqrt9 = 3
  b = +12 positive  ->  plus sign

  CHECK: (2 + 3i)^2 = 4 + 12i - 9 = -5 + 12i
```
**+/- (2 + 3i)**

---

## Topic: Locus

### Q A22
If `|z - 3 + i| = 4`, determine the locus of z.

**ANSWER:**
```
  Rewrite:  | z - (3 - i) | = 4
  This is a CIRCLE with centre (3, -1) and radius 4.

  In x-y form, with z = x + iy:
     (x - 3)^2 + (y + 1)^2 = 16
     x^2 - 6x + 9 + y^2 + 2y + 1 = 16
```
**x^2 + y^2 - 6x + 2y - 6 = 0 — a circle, centre (3, -1), radius 4**

---

### Q A23
Find the least positive integer n such that `((1 + i)/(1 - i))^n = 1`.

**ANSWER:**
```
  (1 + i)/(1 - i) = i        (standard result)

  So we need i^n = 1  ->  n must be a multiple of 4.
```
**n = 4**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. This chapter is usually Q11.
# ===============================================================

### Q B1
If the amplitude of `(z - 2) / (z - 6i)` is `pi/2`, find the locus of z.

**ANSWER:**
```
  Amplitude = pi/2 means the number is PURELY IMAGINARY,
  so its REAL PART = 0.

  Put z = x + iy:
      z - 2  = (x - 2) + iy
      z - 6i = x + i(y - 6)

  Multiply top and bottom by the conjugate of the bottom:

     [ (x - 2) + iy ] [ x - i(y - 6) ]
     ---------------------------------
            x^2 + (y - 6)^2

  Real part of the numerator:
     (x - 2)(x) + (y)(y - 6)  =  x^2 - 2x + y^2 - 6y

  Set the real part to zero:
     x^2 + y^2 - 2x - 6y = 0
```
**Locus: x^2 + y^2 - 2x - 6y = 0 — a circle with centre (1, 3) and radius sqrt10,
passing through the origin.**

---

### Q B2
If the real part of `(z + 1) / (z + i)` is 1, find the locus of the point z.

**ANSWER:**
```
  Put z = x + iy:
     z + 1 = (x + 1) + iy
     z + i = x + i(y + 1)

  Real part of the quotient
        (x + 1)(x) + (y)(y + 1)          x^2 + x + y^2 + y
     = --------------------------  =  ------------------------
           x^2 + (y + 1)^2              x^2 + y^2 + 2y + 1

  Set equal to 1:
        x^2 + x + y^2 + y  =  x^2 + y^2 + 2y + 1
                 x + y     =  2y + 1
                 x - y - 1 =  0
```
**Locus: x - y - 1 = 0 — a straight line**

---

### Q B3
If `x + iy = 1 / (1 + cos theta + i sin theta)`, show that `4x^2 - 1 = 0`.

**ANSWER:**
```
  Use the half-angle identities:
     1 + cos theta = 2 cos^2(theta/2)
     sin theta     = 2 sin(theta/2) cos(theta/2)

  Denominator = 2 cos^2(t/2) + 2i sin(t/2) cos(t/2)
              = 2 cos(t/2) [ cos(t/2) + i sin(t/2) ]

  Multiply top and bottom by [ cos(t/2) - i sin(t/2) ] :

                    cos(t/2) - i sin(t/2)
   x + iy  =  --------------------------------------------
              2 cos(t/2) [ cos^2(t/2) + sin^2(t/2) ]

                cos(t/2) - i sin(t/2)
           =  ------------------------
                    2 cos(t/2)

                1        1
           =   ---  -   --- i tan(t/2)
                2        2

  Comparing REAL parts:   x = 1/2

  Therefore  4x^2 = 4 x (1/4) = 1
```
**4x^2 - 1 = 0 — Proved.** (As a bonus, y = -(1/2) tan(theta/2).)

---

### Q B4
If `|z| = 1` (and z is not -1), show that `(z - 1)/(z + 1)` is purely imaginary.

**ANSWER:**
```
  A number w is purely imaginary  <=>  w + w bar = 0.

  Let  w = (z - 1)/(z + 1) ,  so  w bar = (z bar - 1)/(z bar + 1).

  Since |z| = 1 ,  z x z bar = |z|^2 = 1 ,  so  z bar = 1/z.

               (1/z) - 1        1 - z
  w bar  =  --------------  =  --------      [multiplied top and bottom by z]
               (1/z) + 1        1 + z

                 -(z - 1)
         =    -------------   =   - w
                 (z + 1)

  So  w + w bar = 0.
```
**Hence (z - 1)/(z + 1) is purely imaginary. Proved.**

---

### Q B5
Show that `((1+i)/(1-i))^3 - ((1-i)/(1+i))^3 = -2i`.

**ANSWER:**
```
  First simplify each bracket:

     1 + i     (1 + i)^2       2i
    -------  = -----------  = ----  =  i
     1 - i         2            2

     1 - i     (1 - i)^2      -2i
    -------  = -----------  = -----  =  -i
     1 + i         2            2

  Now cube them:

     i^3    = i^2 x i = -i
     (-i)^3 = (-1)^3 x i^3 = -(-i) = i

  Difference = (-i) - (i) = -2i
```
**Proved.**

---

### Q B6
If `|z + ai| = |z - ai|` (a real, a not 0), find the locus of z.

**ANSWER:**
```
  Put z = x + iy:
     |x + i(y + a)|  =  |x + i(y - a)|

  Square both sides:
     x^2 + (y + a)^2  =  x^2 + (y - a)^2
     y^2 + 2ay + a^2  =  y^2 - 2ay + a^2
              4ay     =  0
              y       =  0        (since a is not 0)
```
**Locus: y = 0 — the REAL AXIS.**
(Geometrically it is the perpendicular bisector of the segment joining
the points (0, -a) and (0, a).)

---

### Q B7
Find the locus of z if `|z - 2 - 3i| = |z + 1 - i|`.

**ANSWER:**
```
  This is |z - z1| = |z - z2| with z1 = (2, 3) and z2 = (-1, 1),
  so the answer must be the perpendicular bisector - a straight line.

  Put z = x + iy and square both sides:

     (x - 2)^2 + (y - 3)^2  =  (x + 1)^2 + (y - 1)^2

     x^2 - 4x + 4 + y^2 - 6y + 9  =  x^2 + 2x + 1 + y^2 - 2y + 1

              -4x - 6y + 13  =  2x - 2y + 2
                          0  =  6x + 4y - 11
```
**Locus: 6x + 4y - 11 = 0 — a straight line
(the perpendicular bisector of the segment joining 2 + 3i and -1 + i).**

---

### Q B8
Find the square root of `-8 - 6i` by BOTH methods.

**ANSWER:**
```
  METHOD 1 - formula

  m = |-8 - 6i| = sqrt(64 + 36) = 10

  real part = sqrt( (10 - 8)/2 ) = sqrt1 = 1
  imag part = sqrt( (10 + 8)/2 ) = sqrt9 = 3
  b = -6 is NEGATIVE  ->  the i-part takes a minus sign

  Answer:  +/- (1 - 3i)


  METHOD 2 - comparing

  Let  sqrt(-8 - 6i) = x + iy.   Square both sides:

     x^2 - y^2 + 2ixy  =  -8 - 6i

     x^2 - y^2 = -8         2xy = -6  ->  xy = -3  ->  y = -3/x

     x^2 - 9/x^2 = -8
     x^4 + 8x^2 - 9 = 0
     (x^2 + 9)(x^2 - 1) = 0
     x^2 = 1   (x^2 = -9 rejected, x is real)
     x = 1 or x = -1

     x = 1  ->  y = -3          x = -1  ->  y = 3

  CHECK: (1 - 3i)^2 = 1 - 6i + 9i^2 = 1 - 6i - 9 = -8 - 6i
```
**sqrt(-8 - 6i) = +/- (1 - 3i)**

---

### Q B9
If `(x - iy)^(1/3) = a - ib`, show that `x/a + y/b = 4(a^2 - b^2)`.

**ANSWER:**
```
  Cube both sides:

  x - iy = (a - ib)^3
         = a^3 - 3a^2(ib) + 3a(ib)^2 - (ib)^3
         = a^3 - 3ia^2 b + 3a(i^2 b^2) - (i^3 b^3)
         = a^3 - 3ia^2 b - 3ab^2 + i b^3
         = (a^3 - 3ab^2)  +  i(b^3 - 3a^2 b)

  Compare REAL parts:        x  =  a^3 - 3ab^2
  Compare IMAGINARY parts:  -y  =  b^3 - 3a^2 b
                       so    y  =  3a^2 b - b^3

  Divide:
      x        a^3 - 3ab^2      a(a^2 - 3b^2)
     ---  =  ---------------  = --------------  =  a^2 - 3b^2
      a            a                  a

      y        3a^2 b - b^3      b(3a^2 - b^2)
     ---  =  ---------------  =  --------------  =  3a^2 - b^2
      b            b                   b

  Add:
      x     y
     --- + --- = (a^2 - 3b^2) + (3a^2 - b^2) = 4a^2 - 4b^2
      a     b
```
**x/a + y/b = 4(a^2 - b^2) — Proved.**

---

### Q B10
Prove the parallelogram law: `|z1 + z2|^2 + |z1 - z2|^2 = 2(|z1|^2 + |z2|^2)`.

**ANSWER:**
```
  Use  |z|^2 = z x z bar  throughout.

  |z1 + z2|^2 = (z1 + z2)(z1 bar + z2 bar)
              = z1 z1 bar + z1 z2 bar + z2 z1 bar + z2 z2 bar
              = |z1|^2 + |z2|^2 + (z1 z2 bar + z2 z1 bar)

  |z1 - z2|^2 = (z1 - z2)(z1 bar - z2 bar)
              = |z1|^2 + |z2|^2 - (z1 z2 bar + z2 z1 bar)

  ADD the two lines. The middle brackets cancel:

  |z1 + z2|^2 + |z1 - z2|^2 = 2|z1|^2 + 2|z2|^2
```
**Proved.**

---

### Q B11
If z = x + iy and `(z - i)/(z - 1)` is purely imaginary, find the locus of z.

**ANSWER:**
```
  Purely imaginary  ->  REAL PART = 0.

     z - i = x + i(y - 1)
     z - 1 = (x - 1) + iy

  Multiply top and bottom by the conjugate of the bottom, (x - 1) - iy:

  Real part of the numerator
     = (x)(x - 1) + (y - 1)(y)
     = x^2 - x + y^2 - y

  Set it to zero:
```
**Locus: x^2 + y^2 - x - y = 0 — a circle with centre (1/2, 1/2) and radius
1/sqrt2, passing through the origin (excluding the point z = 1).**

---

### Q B12
Show that the points represented by `2 + i`, `4 + 3i`, `2 + 5i`, `3i` in the
Argand plane form a **square**.

**ANSWER:**
```
  Write them as points:
     A(2, 1)     B(4, 3)     C(2, 5)     D(0, 3)

  SIDES (use |z1 - z2| = distance):

     AB = sqrt( (4-2)^2 + (3-1)^2 ) = sqrt(4 + 4) = sqrt8
     BC = sqrt( (2-4)^2 + (5-3)^2 ) = sqrt(4 + 4) = sqrt8
     CD = sqrt( (0-2)^2 + (3-5)^2 ) = sqrt(4 + 4) = sqrt8
     DA = sqrt( (2-0)^2 + (1-3)^2 ) = sqrt(4 + 4) = sqrt8

     All four sides are EQUAL.

  DIAGONALS:

     AC = sqrt( (2-2)^2 + (5-1)^2 ) = sqrt(0 + 16) = 4
     BD = sqrt( (0-4)^2 + (3-3)^2 ) = sqrt(16 + 0) = 4

     Both diagonals are EQUAL.

  A quadrilateral with 4 equal sides AND equal diagonals is a SQUARE.
```

```
                 C(2,5)
                  *
                 / \
                /   \
       D(0,3)  *     *  B(4,3)
                \   /
                 \ /
                  *
                 A(2,1)
```
**Hence the four points form a square. Proved.**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. Show EVERY step - method marks matter.
# ===============================================================

### Q C1
(a) Express `1 + i sqrt3` and `-1 + i` in modulus-amplitude form.
(b) Hence find the modulus and the principal amplitude of their **product**
and of their **quotient** `(1 + i sqrt3) / (-1 + i)`.

**ANSWER:**

```
  PART (a) - first number:  z1 = 1 + i sqrt3

     x = 1 (positive) , y = sqrt3 (positive)   ->   QUADRANT 1

     r1 = sqrt( 1^2 + (sqrt3)^2 ) = sqrt(1 + 3) = sqrt4 = 2

     alpha = tan^-1 | sqrt3 / 1 | = tan^-1(sqrt3) = pi/3

     Quadrant 1  ->  theta1 = pi/3

     z1 = 2 ( cos(pi/3) + i sin(pi/3) )
```

```
  PART (a) - second number:  z2 = -1 + i

     x = -1 (negative) , y = 1 (positive)   ->   QUADRANT 2

     r2 = sqrt( (-1)^2 + 1^2 ) = sqrt2

     alpha = tan^-1 | 1 / -1 | = tan^-1(1) = pi/4

     Quadrant 2  ->  theta2 = pi - pi/4 = 3pi/4

     z2 = sqrt2 ( cos(3pi/4) + i sin(3pi/4) )
```

```
  PART (b) - the PRODUCT

     MULTIPLY the moduli, ADD the amplitudes:

     |z1 z2|   = r1 x r2 = 2 x sqrt2 = 2 sqrt2

     arg(z1 z2) = theta1 + theta2
                = pi/3 + 3pi/4
                = 4pi/12 + 9pi/12
                = 13pi/12

     13pi/12 is BIGGER than pi, so it is not the principal value.
     Bring it back into  -pi < theta <= pi  by subtracting 2pi:

     13pi/12 - 24pi/12 = -11pi/12

     z1 z2 = 2 sqrt2 [ cos(-11pi/12) + i sin(-11pi/12) ]

     modulus = 2 sqrt2 ,  principal amplitude = -11pi/12
```

```
  PART (b) - the QUOTIENT

     DIVIDE the moduli, SUBTRACT the amplitudes:

     | z1 / z2 |  =  r1 / r2  =  2 / sqrt2  =  sqrt2

     arg(z1 / z2) = theta1 - theta2
                  = pi/3 - 3pi/4
                  = 4pi/12 - 9pi/12
                  = -5pi/12

     -5pi/12 is already inside  -pi < theta <= pi.  Good.

     z1 / z2 = sqrt2 [ cos(-5pi/12) + i sin(-5pi/12) ]

     modulus = sqrt2 ,  principal amplitude = -5pi/12
```

```
  CHECK the quotient the long way (worth doing if time allows):

     1 + i sqrt3      (1 + i sqrt3)(-1 - i)
    -------------  = ------------------------
       -1 + i               1 + 1

                      -1 - i - i sqrt3 - i^2 sqrt3
                   = ------------------------------
                                  2

                      (-1 + sqrt3)  +  i(-1 - sqrt3)
                   = --------------------------------
                                  2

     modulus = (1/2) sqrt( (sqrt3 - 1)^2 + (1 + sqrt3)^2 )
             = (1/2) sqrt( 4 - 2sqrt3 + 4 + 2sqrt3 )
             = (1/2) sqrt8  =  sqrt2                    MATCHES
```

---

### Q C2
If the amplitude of `(z - 2) / (z - 6i)` is `pi/2`, find the equation of the
locus of z. Identify the curve and state its centre and radius, and show that
it passes through the origin.

**ANSWER:**

```
  STEP 1 - translate the condition

     amplitude = pi/2  means the complex number points straight UP the
     imaginary axis. A number w = u + iv has amplitude pi/2 exactly when

              u = Re(w) = 0     and     v = Im(w) > 0

     For the locus we use the condition   Re(w) = 0.
```

```
  STEP 2 - substitute z = x + iy

     z - 2  =  (x - 2) + i y
     z - 6i =  x + i(y - 6)

              (x - 2) + iy
     w  =  --------------------
              x + i(y - 6)
```

```
  STEP 3 - rationalise (multiply by the conjugate of the bottom)

           [ (x - 2) + iy ] [ x - i(y - 6) ]
     w = -------------------------------------
                 x^2 + (y - 6)^2

     Expand the TOP:

        (x - 2)(x)              =  x^2 - 2x
        (x - 2)( -i(y - 6) )    =  -i (x - 2)(y - 6)
        (iy)(x)                 =  i x y
        (iy)( -i(y - 6) )       =  -i^2 y(y - 6)  =  y(y - 6) = y^2 - 6y

     REAL part of the top       =  x^2 - 2x + y^2 - 6y
     IMAGINARY part of the top  =  xy - (x - 2)(y - 6)
```

```
  STEP 4 - set the real part to zero

     x^2 - 2x + y^2 - 6y  =  0

     x^2 + y^2 - 2x - 6y  =  0            <---  THE LOCUS
```

```
  STEP 5 - identify the curve

     Compare with the general circle  x^2 + y^2 + 2gx + 2fy + c = 0 :

        2g = -2   ->   g = -1
        2f = -6   ->   f = -3
        c  =  0

        CENTRE = (-g, -f) = (1, 3)

        RADIUS = sqrt( g^2 + f^2 - c ) = sqrt( 1 + 9 - 0 ) = sqrt10
```

```
  STEP 6 - does it pass through the origin?

     Put x = 0 , y = 0 in  x^2 + y^2 - 2x - 6y :
        0 + 0 - 0 - 0 = 0        YES.
     (Any circle with c = 0 passes through the origin.)
```

```
  PICTURE

              y
              |
            6 +      . - - .
              |    .         .
            3 +   .     C     .        C = centre (1, 3)
              |   .   (1,3)   .        radius sqrt10 = about 3.16
              |    .         .
        ------O------.-.-.------------ x
              |      1
```

**Locus: x^2 + y^2 - 2x - 6y = 0 — a circle with centre (1, 3), radius sqrt10,
passing through the origin.**

> Strictly, the points z = 2 and z = 6i must be removed: at z = 2 the number is
> 0 (no amplitude) and at z = 6i the expression is undefined. Mentioning this
> earns the final accuracy mark.

---

### Q C3
Show that the points in the Argand diagram represented by the complex numbers
`2 + 2i`, `-2 - 2i` and `-2 sqrt3 + 2 sqrt3 i` form an **equilateral triangle**.

**ANSWER:**

```
  STEP 1 - write them as points

     A  =  2 + 2i                 ->  A( 2 , 2 )
     B  = -2 - 2i                 ->  B( -2 , -2 )
     C  = -2 sqrt3 + 2 sqrt3 i    ->  C( -2 sqrt3 , 2 sqrt3 )
```

```
  STEP 2 - side AB  (use |z1 - z2| = distance)

     AB^2 = (2 - (-2))^2 + (2 - (-2))^2
          = 4^2 + 4^2
          = 16 + 16 = 32

     AB   = sqrt32 = 4 sqrt2
```

```
  STEP 3 - side BC

     BC^2 = ( -2 - (-2 sqrt3) )^2  +  ( -2 - 2 sqrt3 )^2
          = ( 2 sqrt3 - 2 )^2  +  ( -(2 + 2 sqrt3) )^2

     ( 2 sqrt3 - 2 )^2 = 12 - 8 sqrt3 + 4 = 16 - 8 sqrt3
     ( 2 + 2 sqrt3 )^2 = 4 + 8 sqrt3 + 12 = 16 + 8 sqrt3

     BC^2 = (16 - 8 sqrt3) + (16 + 8 sqrt3) = 32

     BC   = sqrt32 = 4 sqrt2
```

```
  STEP 4 - side CA

     CA^2 = ( 2 - (-2 sqrt3) )^2  +  ( 2 - 2 sqrt3 )^2
          = ( 2 + 2 sqrt3 )^2  +  ( 2 - 2 sqrt3 )^2
          = (4 + 8 sqrt3 + 12) + (4 - 8 sqrt3 + 12)
          = (16 + 8 sqrt3) + (16 - 8 sqrt3)
          = 32

     CA   = sqrt32 = 4 sqrt2
```

```
  STEP 5 - conclusion

     AB  =  BC  =  CA  =  4 sqrt2

     All three sides are equal, so the triangle is EQUILATERAL.
```

```
  PICTURE (roughly to scale)

                  y
                  |
        C         |
    (-3.46,3.46)  |         * A(2, 2)
          *       |        /
            \     |      /
              \   |    /
        --------\-O--/-------------- x
                  \ /
                   *
                B(-2, -2)
```

> **Notice the trick:** every side works out to the same value 32 because the
> surd terms `8 sqrt3` cancel out. If your surds do NOT cancel, recheck the
> squaring — that is where marks are lost.

**Hence the three points form an equilateral triangle. Proved.**

---

### Q C4
(a) If `z = x + iy` and `|z - 3 + i| = 4`, find the locus and identify it.
(b) If `|z + ai| = |z - ai|`, find the locus and identify it.
(c) If `|z - 2 - 3i| = |z + 1 - i|`, find the locus and identify it.
State clearly, in each case, which standard geometrical form you used.

**ANSWER:**

```
  THE TWO STANDARD FORMS YOU ARE USING

     |z - z1| = r          ->  CIRCLE, centre z1, radius r
     |z - z1| = |z - z2|   ->  PERPENDICULAR BISECTOR of the segment z1 z2
```

```
  PART (a)   |z - 3 + i| = 4

     Rewrite as  | z - (3 - i) | = 4 .
     This is the FIRST standard form with z1 = 3 - i and r = 4.

     Put z = x + iy:
        | (x - 3) + i(y + 1) |  =  4

     Square both sides:
        (x - 3)^2 + (y + 1)^2  =  16
        x^2 - 6x + 9 + y^2 + 2y + 1 = 16
        x^2 + y^2 - 6x + 2y - 6 = 0

     CIRCLE , centre (3, -1) , radius 4.
```

```
  PART (b)   |z + ai| = |z - ai|

     Rewrite as  | z - (-ai) |  =  | z - (ai) | .
     SECOND standard form, with z1 = (0, -a) and z2 = (0, a).
     So the answer must be the perpendicular bisector of the segment
     joining (0, -a) and (0, a) - which is a horizontal line.

     Put z = x + iy and square:
        x^2 + (y + a)^2  =  x^2 + (y - a)^2
        y^2 + 2ay + a^2  =  y^2 - 2ay + a^2
                    4ay  =  0
                      y  =  0          (a is not zero)

     STRAIGHT LINE  y = 0 , the REAL AXIS.
```

```
  PART (c)   |z - 2 - 3i| = |z + 1 - i|

     Rewrite as  | z - (2 + 3i) |  =  | z - (-1 + i) | .
     SECOND standard form, z1 = (2, 3) and z2 = (-1, 1).

     Put z = x + iy and square:
        (x - 2)^2 + (y - 3)^2  =  (x + 1)^2 + (y - 1)^2

        x^2 - 4x + 4 + y^2 - 6y + 9  =  x^2 + 2x + 1 + y^2 - 2y + 1

        -4x - 6y + 13  =  2x - 2y + 2
                    0  =  6x + 4y - 11

     STRAIGHT LINE  6x + 4y - 11 = 0.

     CHECK it really is the perpendicular bisector:
        midpoint of z1 z2 = ( (2 + (-1))/2 , (3 + 1)/2 ) = ( 1/2 , 2 )
        substitute:  6(1/2) + 4(2) - 11 = 3 + 8 - 11 = 0     PASSES
```

```
  SUMMARY TABLE

  +---------------------------+--------------------------+---------------+
  |  CONDITION                |  EQUATION                |  CURVE        |
  +---------------------------+--------------------------+---------------+
  |  |z - 3 + i| = 4          | x^2+y^2-6x+2y-6 = 0      | circle        |
  |                           |                          | (3,-1) , r=4  |
  +---------------------------+--------------------------+---------------+
  |  |z + ai| = |z - ai|      | y = 0                    | real axis     |
  +---------------------------+--------------------------+---------------+
  |  |z-2-3i| = |z+1-i|       | 6x + 4y - 11 = 0         | straight line |
  +---------------------------+--------------------------+---------------+
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

| Rank | Question type | Section | Marks | How often |
|------|---------------|---------|-------|-----------|
| 1 | Express in the form a + ib (divide by the conjugate) | A | 2 | Almost every session |
| 2 | Modulus and PRINCIPAL amplitude of a given z | A | 2 | Almost every session |
| 3 | Powers of i / simplify i^n | A | 2 | Very often |
| 4 | Multiplicative inverse of a + ib | A | 2 | Very often |
| 5 | Find x and y from an equality of complex numbers | A | 2 | Very often |
| 6 | Square root of a complex number | A or B | 2 or 4 | Often |
| 7 | Locus from amp( ... ) = pi/2 or Re( ... ) = k | B | 4 | Often |
| 8 | Locus from \|z - z1\| = r or \|z - z1\| = \|z - z2\| | B | 4 | Often |
| 9 | x + iy = 1/(1 + cos theta + i sin theta) proof | B | 4 | Often |
| 10 | Show 4 points form a square / equilateral triangle | B or C | 4 or 7 | Often |
| 11 | (x - iy)^(1/3) = a - ib type proof | B | 4 | Moderate |
| 12 | Prove \|z\| or conjugate properties | B | 4 | Moderate |
| 13 | Polar form of a product / quotient with amplitudes | C | 7 | Moderate |
| 14 | Show that (z-1)/(z+1) is purely imaginary when \|z\| = 1 | B | 4 | Moderate |

```
  +-----------------------------------------------------------------+
  |  IF YOU ONLY LEARN THE TOP 5 ROWS OF THIS TABLE, YOU STILL      |
  |  WALK IN WITH 4 GUARANTEED MARKS FROM SECTION A.                |
  |  Rows 6 to 10 add another 4 marks from Section B.               |
  +-----------------------------------------------------------------+
```
