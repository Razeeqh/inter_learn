# Theory of Equations — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 4 — Theory of Equations**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> often with only the numbers changed. So the questions below are grouped by
> **"how often they appear"** rather than tagged to one exact year. Before your
> exam, cross-check against the official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIA paper:**

```
  +----------------------------------------------------------------------+
  |  MATHS IIA  --  75 marks                                             |
  |                                                                      |
  |  Section A   VSAQ   10 questions x 2 marks   answer ALL      = 20    |
  |  Section B   SAQ     7 questions x 4 marks   answer any 5    = 20    |
  |  Section C   LAQ     7 questions x 7 marks   answer any 5    = 35    |
  |                                                                      |
  |  Pass mark = 26                                                      |
  +----------------------------------------------------------------------+

  Theory of Equations usually sits at:

     Section A  ->  Q4 or Q5      (relations between roots and coefficients)
     Section B  ->  Q16 or Q17    (transformation / one root given)
     Section C  ->  Q22 or Q23    (solve a cubic or quartic with a condition,
                                   or solve a reciprocal equation)
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Forming an equation from given roots

### Q A1
Form the monic polynomial equation of degree 3 whose roots are 2, 3, -4.

**ANSWER:**
```
  s1 = 2 + 3 - 4                       =   1
  s2 = (2)(3) + (3)(-4) + (-4)(2)
     =   6    +  (-12)  +  (-8)        = -14
  s3 = (2)(3)(-4)                      = -24

  Equation:   x^3 - s1 x^2 + s2 x - s3 = 0

              x^3 -  x^2 - 14x + 24 = 0

  CHECK  x = 2 :   8 -  4 - 28 + 24 = 0    YES
  CHECK  x = 3 :  27 -  9 - 42 + 24 = 0    YES
  CHECK  x =-4 : -64 - 16 + 56 + 24 = 0    YES
```

---

### Q A2
Form the monic polynomial equation of degree 4 whose roots are 1, 2, 3, 4.

**ANSWER:**
```
  s1 = 1+2+3+4 = 10
  s2 = 2 + 3 + 4 + 6 + 8 + 12 = 35        (6 terms)
  s3 = 6 + 8 + 12 + 24 = 50               (4 terms)
  s4 = 24

  x^4 - 10x^3 + 35x^2 - 50x + 24 = 0

  CHECK x = 1 :  1 - 10 + 35 - 50 + 24 = 0        YES
  CHECK x = 4 : 256 - 640 + 560 - 200 + 24 = 0    YES
```

---

### Q A3
Form the monic polynomial equation of degree 3 whose roots are 1, 1, -2 (note the
repeated root).

**ANSWER:**
```
  s1 = 1 + 1 - 2       =  0
  s2 = 1 - 2 - 2       = -3
  s3 = (1)(1)(-2)      = -2

  x^3 - 0x^2 - 3x + 2 = 0     ->     x^3 - 3x + 2 = 0

  CHECK x = 1 :  1 - 3 + 2 = 0      YES
  CHECK x =-2 : -8 + 6 + 2 = 0      YES
```

---

### Q A4
Form the quadratic equation with rational coefficients whose one root is
`2 + sqrt(5)`.

**ANSWER:**
```
  Coefficients are rational, so  2 - sqrt(5)  is the other root.

  Sum     =  4
  Product =  (2)^2 - (sqrt 5)^2  =  4 - 5  =  -1

  Equation:   x^2 - 4x - 1 = 0

  CHECK x = 2 + sqrt5 :  (9 + 4sqrt5) - (8 + 4sqrt5) - 1 = 0     YES
       since (2+sqrt5)^2 = 4 + 4sqrt5 + 5 = 9 + 4sqrt5
```

---

### Q A5
Form the quadratic equation with real coefficients whose one root is `1 + i`.

**ANSWER:**
```
  Coefficients are real, so  1 - i  is the other root.

  Sum     =  2
  Product =  (1)^2 + (1)^2  =  2

  Equation:   x^2 - 2x + 2 = 0

  CHECK x = 1 + i :  (1+i)^2 - 2(1+i) + 2 = (2i) - 2 - 2i + 2 = 0   YES
```

---

## Topic: Reading s1, s2, s3 off an equation

### Q A6
If A, B, C are the roots of `4x^3 - 6x^2 + 7x + 3 = 0`, find `AB + BC + CA`.

**ANSWER:**
```
  s2 = + c/a = 7/4
```
**AB + BC + CA = 7/4**

---

### Q A7
If A, B, C are the roots of `x^3 - 2x^2 + 3x - 4 = 0`, find
(i) `AB + BC + CA`  (ii) `1/(AB) + 1/(BC) + 1/(CA)`.

**ANSWER:**
```
  s1 = 2 ,  s2 = 3 ,  s3 = 4

  (i)   AB + BC + CA  =  s2  =  3

  (ii)   1      1      1        C + A + B        s1       2      1
        ---- + ---- + ----  =  ------------  =  ----  =  ---  =  ---
         AB     BC     CA          ABC            s3       4      2
```

---

### Q A8
If A, B, C are the roots of `x^3 + px^2 + qx + r = 0`, find `A^2 + B^2 + C^2`.

**ANSWER:**
```
  s1 = -p ,  s2 = q

  A^2+B^2+C^2 = s1^2 - 2 s2 = p^2 - 2q
```

---

### Q A9
Find the sum of the squares of the roots of `x^3 - 6x^2 + 11x - 6 = 0`.

**ANSWER:**
```
  s1 = 6 , s2 = 11
  Sum of squares = 36 - 22 = 14

  CHECK: the roots are 1, 2, 3.   1 + 4 + 9 = 14    YES
```

---

### Q A10
If A, B, C are the roots of `x^3 - 6x^2 + 11x - 6 = 0`, find `1/A + 1/B + 1/C`.

**ANSWER:**
```
  s2 / s3  =  11 / 6

  CHECK: roots 1, 2, 3.  1 + 1/2 + 1/3 = 11/6     YES
```

---

## Topic: Finding a missing root or a missing coefficient

### Q A11
If -1, 2 and A are the roots of `2x^3 + x^2 - 7x - 6 = 0`, find A.

**ANSWER:**
```
  Sum of roots = -b/a = -1/2

     -1 + 2 + A = -1/2
           1 + A = -1/2
               A = -3/2

  CHECK  x = -3/2 :  2(-27/8) + (9/4) - 7(-3/2) - 6
                   = -27/4 + 9/4 + 42/4 - 24/4  =  0/4  =  0     YES
```

---

### Q A12
If 1, 1 and A are the roots of `x^3 - 6x^2 + 9x - 4 = 0`, find A.

**ANSWER:**
```
  Sum of roots = 6      ->    1 + 1 + A = 6    ->    A = 4

  CHECK  x = 4 :  64 - 96 + 36 - 4 = 0        YES
```

---

### Q A13
If the product of the roots of `4x^3 + 16x^2 - 9x - a = 0` is 9, find a.

**ANSWER:**
```
  Product of roots  =  -d/a(coeff)  =  -(-a)/4  =  a/4

           a/4 = 9    ->    a = 36
```

---

### Q A14
If the sum of two of the roots of `x^3 - 6x^2 + 11x - 6 = 0` is 5, find the
third root.

**ANSWER:**
```
  Sum of all three roots  =  -b/a  =  6

  Two of them add up to 5, so

        third root  =  6 - 5  =  1

  CHECK  x = 1 :  1 - 6 + 11 - 6  =  0        YES
```

---

## Topic: Transformations

### Q A15
Find the polynomial equation whose roots are the **negatives** of the roots of
`x^4 + 5x^3 + 11x + 3 = 0`.

**ANSWER:**
```
  Replace x by -x :

     x^4 - 5x^3 + 0x^2 - 11x + 3 = 0

     i.e.   x^4 - 5x^3 - 11x + 3 = 0
```

---

### Q A16
Find the polynomial equation whose roots are the negatives of the roots of
`x^7 + 3x^5 + x^3 - x^2 + 7x + 2 = 0`.

**ANSWER:**
```
  Replace x by -x :
     -x^7 - 3x^5 - x^3 - x^2 - 7x + 2 = 0

  Multiply by -1 :
      x^7 + 3x^5 + x^3 + x^2 + 7x - 2 = 0
```

---

### Q A17
Find the polynomial equation whose roots are the **reciprocals** of the roots of
`x^4 + 3x^3 - 6x^2 + 2x - 4 = 0`.

**ANSWER:**
```
  Reverse the list of coefficients   1, 3, -6, 2, -4   ->   -4, 2, -6, 3, 1

     -4x^4 + 2x^3 - 6x^2 + 3x + 1 = 0

  Multiply by -1 :

      4x^4 - 2x^3 + 6x^2 - 3x - 1 = 0
```

---

### Q A18
Find the algebraic equation of degree 3 whose roots are **3 times** the roots of
`x^3 + 2x^2 - 4x + 1 = 0`.

**ANSWER:**
```
  Put x -> x/3 and multiply by 27  (or: multiply the coefficients by
  1, 3, 9, 27):

     1x1 = 1 ,  2x3 = 6 ,  -4x9 = -36 ,  1x27 = 27

      x^3 + 6x^2 - 36x + 27 = 0
```

---

### Q A19
Find the algebraic equation of degree 4 whose roots are 3 times the roots of
`6x^4 - 7x^3 + 8x^2 - 7x + 2 = 0`.

**ANSWER:**
```
  Multiply the coefficients by 1, 3, 9, 27, 81:

     6 , -21 , 72 , -189 , 162

     6x^4 - 21x^3 + 72x^2 - 189x + 162 = 0

  Divide by 3:

     2x^4 - 7x^3 + 24x^2 - 63x + 54 = 0
```

---

### Q A20
By how much must the roots of `x^3 - 6x^2 + 10x - 3 = 0` be diminished to remove
the second term?

**ANSWER:**
```
              - a1        -(-6)
      h  =  --------  =  --------  =  2
              n a0        3 x 1

  Diminish the roots by 2.
```

---

## Topic: Nature of roots, theory

### Q A21
State the Fundamental Theorem of Algebra and say how many roots
`3x^5 - 2x^3 + x - 7 = 0` has.

**ANSWER:**
```
  FUNDAMENTAL THEOREM OF ALGEBRA:
     Every polynomial equation of degree n >= 1 has at least one complex root.

  CONSEQUENCE: it therefore has exactly n roots, counting multiplicity.

  Degree = 5,  so the equation has exactly 5 roots.
```

---

### Q A22
If `2 + 3i` is a root of a polynomial equation with real coefficients, write down
the real quadratic factor it produces.

**ANSWER:**
```
  Since the coefficients are real,  2 - 3i  is also a root.

  Sum     =  4
  Product =  2^2 + 3^2  =  13

  Factor:   x^2 - 4x + 13
```

---

### Q A23
Determine the class and degree of the reciprocal equation
`x^5 - 5x^4 + 9x^3 - 9x^2 + 5x - 1 = 0`, and write down one root by inspection.

**ANSWER:**
```
  Coefficients:   1 , -5 ,  9 , -9 ,  5 , -1

  First and last:  1 and -1   -> opposite signs
  Second and second-last: -5 and 5 -> opposite signs
  Third and third-last:    9 and -9 -> opposite signs

  -> CLASS TWO reciprocal equation, of ODD degree 5.

  For class two, odd degree,  x = 1  is always a root.

  CHECK  x = 1 :  1 - 5 + 9 - 9 + 5 - 1 = 0     YES
```

---

### Q A24
Using Descartes' rule of signs, find the maximum number of positive real roots of
`x^3 + 3x^2 + 5x - 9 = 0`.

**ANSWER:**
```
  Signs of f(x):   +  +  +  -       one sign change

  -> at most 1 positive real root, and since the count is 1 it is EXACTLY 1.

  (Indeed x = 1 gives 1 + 3 + 5 - 9 = 0.)
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of 7. This chapter usually supplies one of them.
# ===============================================================

### Q B1
If A, B, C are the roots of `x^3 - 6x^2 + 11x - 6 = 0`, find
(i) sum of the squares (ii) sum of the reciprocals (iii) sum of the cubes.

**ANSWER:**
```
  s1 = 6 ,  s2 = 11 ,  s3 = 6

  (i)   A^2 + B^2 + C^2  =  s1^2 - 2 s2
                         =  36 - 22            =  14

  (ii)  1/A + 1/B + 1/C  =  s2 / s3
                         =  11 / 6             =  11/6

  (iii) A^3 + B^3 + C^3  =  s1^3 - 3 s1 s2 + 3 s3
                         =  216 - 3(6)(11) + 3(6)
                         =  216 - 198 + 18     =  36

  CHECK: the equation is (x-1)(x-2)(x-3) = 0, roots 1, 2, 3.
       1 + 4 + 9 = 14        YES
       1 + 1/2 + 1/3 = 11/6  YES
       1 + 8 + 27 = 36       YES
```

---

### Q B2
Find the polynomial equation whose roots are the **squares** of the roots of
`x^3 + 3x^2 - 7x + 6 = 0`.

**ANSWER:**
```
  Separate odd and even powers:

        x^3 - 7x    =  -3x^2 - 6
        x(x^2 - 7)  =  -3(x^2 + 2)

  Square both sides:

        x^2 (x^2 - 7)^2  =  9 (x^2 + 2)^2

  Put  y = x^2 :

        y (y - 7)^2      =  9 (y + 2)^2
        y (y^2 - 14y + 49) = 9 (y^2 + 4y + 4)
        y^3 - 14y^2 + 49y  = 9y^2 + 36y + 36

        y^3 - 23y^2 + 13y - 36 = 0

  CHECK with the s-formulas.  Original: s1 = -3, s2 = -7, s3 = -6.
        new s1 = s1^2 - 2 s2   = 9 + 14        = 23    matches
        new s2 = s2^2 - 2 s1 s3 = 49 - 36      = 13    matches
        new s3 = s3^2          = 36            = 36    matches
```

---

### Q B3
Find the polynomial equation whose roots are those of
`x^4 - x^3 - 10x^2 + 4x + 24 = 0` each **diminished by 2**.

**ANSWER:**
```
  Repeated synthetic division by 2 (Horner's method):

     2 |   1    -1    -10      4     24
       |         2      2    -16    -24
       +--------------------------------
           1     1     -8    -12      0     <- R0 = 0
     2 |
       |         2      6     -4
       +--------------------------
           1     3     -2    -16           <- R1 = -16
     2 |
       |         2     10
       +-------------------
           1     5      8                  <- R2 = 8
     2 |
       |         2
       +------------
           1     7                         <- R3 = 7

           1                               <- leading coefficient

  Remainders read from the BOTTOM up:  1 , 7 , 8 , -16 , 0

     y^4 + 7y^3 + 8y^2 - 16y = 0

  CHECK by substituting x = y + 2 into the original:
     (y+2)^4  = y^4 + 8y^3 + 24y^2 + 32y + 16
    -(y+2)^3  =      -  y^3 -  6y^2 - 12y -  8
   -10(y+2)^2 =            - 10y^2 - 40y - 40
     4(y+2)   =                    +  4y +  8
        +24   =                           + 24
     ---------------------------------------------
       total  = y^4 + 7y^3 +  8y^2 - 16y +  0      MATCHES
```

---

### Q B4
Remove the second term from `x^3 - 6x^2 + 10x - 3 = 0`.

**ANSWER:**
```
  h = -a1/(n a0) = -(-6)/(3 x 1) = 2.   Diminish the roots by 2:

     2 |   1    -6     10     -3
       |         2     -8      4
       +-------------------------
           1    -4      2      1      <- R0 = 1
     2 |
       |         2     -4
       +------------------
           1    -2     -2             <- R1 = -2
     2 |
       |         2
       +-----------
           1     0                    <- R2 = 0      (second term gone)

           1

  New equation:   y^3 + 0y^2 - 2y + 1 = 0    ->    y^3 - 2y + 1 = 0

  CHECK x = y + 2 :
    (y+2)^3 - 6(y+2)^2 + 10(y+2) - 3
   = y^3+6y^2+12y+8 - 6y^2-24y-24 + 10y+20 - 3
   = y^3 + (12-24+10)y + (8-24+20-3)
   = y^3 - 2y + 1                              MATCHES
```

---

### Q B5
Remove the second term from `x^4 + 4x^3 + 2x^2 - 4x - 2 = 0`.

**ANSWER:**
```
  h = -a1/(n a0) = -4/(4 x 1) = -1.   Diminish the roots by -1:

    -1 |   1     4      2     -4     -2
       |        -1     -3      1      3
       +---------------------------------
           1     3     -1     -3      1     <- R0 = 1
    -1 |
       |        -1     -2      3
       +--------------------------
           1     2     -3      0            <- R1 = 0
    -1 |
       |        -1     -1
       +-----------------
           1     1     -4                   <- R2 = -4
    -1 |
       |        -1
       +-----------
           1     0                          <- R3 = 0

           1

  New equation:   y^4 + 0y^3 - 4y^2 + 0y + 1 = 0    ->    y^4 - 4y^2 + 1 = 0

  CHECK x = y - 1 :
     (y-1)^4  = y^4 - 4y^3 +  6y^2 -  4y + 1
    4(y-1)^3  =      4y^3  - 12y^2 + 12y - 4
    2(y-1)^2  =              2y^2  -  4y + 2
   -4(y-1)    =                     -  4y + 4
       -2     =                           - 2
    -------------------------------------------
     total    = y^4 + 0y^3 - 4y^2 + 0y + 1        MATCHES
```

---

### Q B6
Solve `x^3 - 3x^2 - 6x + 8 = 0`, given that the roots are in arithmetic progression.

**ANSWER:**
```
  Let the roots be  a - d ,  a ,  a + d.

  Sum      = 3      ->  3a = 3        ->  a = 1
  Product  = -8     ->  a(a^2 - d^2) = -8
                        1(1 - d^2)   = -8
                            d^2      =  9   ->  d = 3

  Roots :  -2 , 1 , 4

  VERIFY:  x = -2 :  -8 - 12 + 12 + 8 = 0     YES
           x =  1 :   1 -  3 -  6 + 8 = 0     YES
           x =  4 :  64 - 48 - 24 + 8 = 0     YES
```

---

### Q B7
Solve `x^3 - 7x^2 + 14x - 8 = 0`, given that the roots are in geometric progression.

**ANSWER:**
```
  Let the roots be  a/r ,  a ,  a r.

  Product  = 8      ->  a^3 = 8       ->  a = 2
  Sum      = 7      ->  2/r + 2 + 2r  = 7
                        2/r + 2r      = 5
                        2 + 2r^2      = 5r
                        2r^2 - 5r + 2 = 0
                        (2r - 1)(r - 2) = 0   ->  r = 2  (or 1/2)

  Roots :  1 , 2 , 4

  VERIFY:  x = 1 :   1 -   7 + 14 - 8 = 0     YES
           x = 2 :   8 -  28 + 28 - 8 = 0     YES
           x = 4 :  64 - 112 + 56 - 8 = 0     YES
```

---

### Q B8
Solve `x^3 - 3x^2 - 9x - 5 = 0`, given that two of its roots are equal.

**ANSWER:**
```
  Let the roots be  a , a , b.

  s1 :  2a + b     =  3        ->  b = 3 - 2a
  s2 :  a^2 + 2ab  = -9
  s3 :  a^2 b      =  5

  Put b = 3 - 2a into s2 :
        a^2 + 6a - 4a^2 = -9
             -3a^2 + 6a + 9 = 0
               a^2 - 2a - 3 = 0
              (a-3)(a+1) = 0    ->   a = 3  or  a = -1

  Test in s3 :
        a =  3 -> b = -3 -> a^2 b = -27    REJECT
        a = -1 -> b =  5 -> a^2 b =   5    ACCEPT

  Roots :  -1 , -1 , 5

  VERIFY:  x = -1 :  -1 -  3 +  9 - 5 = 0     YES
           x =  5 : 125 - 75 - 45 - 5 = 0     YES
```

---

### Q B9
Solve `x^3 - 5x^2 - 4x + 20 = 0`, given that the sum of two of its roots is zero.

**ANSWER:**
```
  Let the roots be  a , -a , c.

  s1 :  c = 5                          (the a's cancel)
  s2 :  -a^2 = -4     ->   a^2 = 4     ->   a = 2

  Roots :  2 , -2 , 5

  VERIFY:  x =  2 :    8 -  20 -  8 + 20 = 0    YES
           x = -2 :   -8 -  20 +  8 + 20 = 0    YES
           x =  5 :  125 - 125 - 20 + 20 = 0    YES
```

---

### Q B10
Solve `x^3 - 7x^2 + 36 = 0`, given that one root is double another.

**ANSWER:**
```
  Write it as  x^3 - 7x^2 + 0x + 36 = 0.  Let the roots be  a , 2a , b.

  s1 :  3a + b            =  7
  s2 :  2a^2 + 3ab        =  0     ->  a(2a + 3b) = 0
        a cannot be 0 (the product is -36), so  b = -2a/3
  s3 :  2a^2 b            = -36

  Put into s1 :  3a - 2a/3 = 7   ->   7a/3 = 7   ->   a = 3 ,  b = -2

  Roots :  3 , 6 , -2

  VERIFY:  x =  3 :   27 -  63 + 36 = 0     YES
           x =  6 :  216 - 252 + 36 = 0     YES
           x = -2 :   -8 -  28 + 36 = 0     YES
```

---

### Q B11
Solve `x^3 - 9x^2 + 14x + 24 = 0`, given that two of its roots are in the ratio 3:2.

**ANSWER:**
```
  Let the roots be  3k , 2k , c.

  s1 :  5k + c        =  9      ->  c = 9 - 5k
  s2 :  6k^2 + 5kc    = 14
  s3 :  6k^2 c        = -24     ->  k^2 c = -4

  Substituting c into s2 :
        6k^2 + 45k - 25k^2 = 14
             19k^2 - 45k + 14 = 0
        D = 2025 - 1064 = 961 = 31^2
        k = (45 +/- 31)/38   ->   k = 2   or   k = 7/19

  k = 2 gives c = -1 and k^2 c = -4       ACCEPT
  k = 7/19 gives a positive k^2 c         REJECT

  Roots :  6 , 4 , -1

  VERIFY:  x =  6 :  216 - 324 + 84 + 24 = 0     YES
           x =  4 :   64 - 144 + 56 + 24 = 0     YES
           x = -1 :   -1 -   9 - 14 + 24 = 0     YES
```

---

### Q B12
Solve `2x^3 - 11x^2 + 17x - 6 = 0`, given that one root is the reciprocal of another.

**ANSWER:**
```
  Let the roots be  a , 1/a , c.

  Product = a(1/a)c = c ,  and  s3 = -(-6)/2 = 3    ->   c = 3

  CHECK 3 is a root:  54 - 99 + 51 - 6 = 0     YES

  Divide out (x - 3):

     3 |   2   -11    17    -6
       |         6   -15     6
       +----------------------
           2    -5     2     0

     2x^2 - 5x + 2 = 0   ->  (2x - 1)(x - 2) = 0   ->  x = 1/2 , 2

  Roots :  2 , 1/2 , 3         (2 and 1/2 are reciprocals, as required)

  VERIFY x = 1/2 :  2(1/8) - 11(1/4) + 17/2 - 6
                 =  1/4 - 11/4 + 34/4 - 24/4  =  0    YES
```

---

### Q B13
Solve `3x^3 - 4x^2 + x + 88 = 0`, given that one root is `2 - i sqrt(7)`.

**ANSWER:**
```
  The coefficients are real, so  2 + i sqrt(7)  is also a root.

  Sum of the pair     =  4
  Product of the pair =  2^2 + 7  =  11

  Product of ALL roots  =  -88/3
        11 x (third root)  =  -88/3
              third root   =  -8/3

  Roots :  2 + i sqrt(7) ,  2 - i sqrt(7) ,  -8/3

  VERIFY  x = -8/3  in  3x^3 - 4x^2 + x + 88 :
        3(-512/27) - 4(64/9) - 8/3 + 88
      = -512/9 - 256/9 - 24/9 + 792/9
      = ( -512 - 256 - 24 + 792 ) / 9  =  0/9  =  0        YES
```

---

### Q B14
Solve `x^4 + 4x^3 - 2x^2 - 12x + 9 = 0`, given that it has two pairs of equal roots.

**ANSWER:**
```
  Write it as  (x^2 + p x + q)^2 = 0.
  Expanding:   x^4 + 2p x^3 + (p^2 + 2q)x^2 + 2pq x + q^2

  2p = 4                ->  p = 2
  p^2 + 2q = -2         ->  4 + 2q = -2   ->  q = -3
  CHECK q^2 = 9         YES        CHECK 2pq = -12    YES

  (x^2 + 2x - 3)^2 = 0    ->    [(x+3)(x-1)]^2 = 0

  Roots :  -3 , -3 , 1 , 1

  VERIFY:  x =  1 :    1 +   4 -  2 - 12 + 9 = 0    YES
           x = -3 :   81 - 108 - 18 + 36 + 9 = 0    YES
```

---

### Q B15
Solve `x^4 - x^3 - 24x^2 + 4x + 80 = 0`, given that the sum of two of its roots
is zero.

**ANSWER:**
```
  Let the roots be  a , -a , c , e.

  s1 :  c + e         =  1                 (the a's cancel)
  s3 :  -a^2 (c + e)  = -4     ->  -a^2 = -4  ->  a = 2
  s2 :  -a^2 + ce     = -24    ->  ce = -20

  c + e = 1 , ce = -20   ->  t^2 - t - 20 = 0  ->  (t-5)(t+4) = 0

  Roots :  2 , -2 , 5 , -4

  VERIFY:  x =  2 :   16 -   8 -  96 +  8 + 80 = 0    YES
           x = -2 :   16 +   8 -  96 -  8 + 80 = 0    YES
           x =  5 :  625 - 125 - 600 + 20 + 80 = 0    YES
           x = -4 :  256 +  64 - 384 - 16 + 80 = 0    YES
```

---

### Q B16
Apply Descartes' rule of signs to discuss the nature of the roots of
`x^3 + 3x^2 + 5x - 9 = 0`, and hence solve it.

**ANSWER:**
```
  f(x)  signs  +  +  +  -    ->  1 change  ->  exactly 1 positive real root
  f(-x) = -x^3 + 3x^2 - 5x - 9
        signs  -  +  -  -    ->  2 changes ->  2 or 0 negative real roots

  Try x = 1 :  1 + 3 + 5 - 9 = 0.  So x = 1 is the positive root.

     1 |   1     3     5    -9
       |         1     4     9
       +------------------------
           1     4     9     0

     x^2 + 4x + 9 = 0 ,  D = 16 - 36 = -20 < 0   ->  imaginary roots

     x = ( -4 +/- sqrt(-20) ) / 2  =  -2 +/- i sqrt(5)

  Roots :  1 ,  -2 + i sqrt5 ,  -2 - i sqrt5
  So: 1 positive, 0 negative, 2 imaginary -- consistent with the rule.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of 7. Aim to make ONE of them come from this chapter.
# ===============================================================

### Q C1  *** the single most repeated 7-marker in this chapter ***
Solve `x^4 + x^3 - 16x^2 - 4x + 48 = 0`, given that the product of two of its
roots is 6.

**ANSWER (full model answer):**
```
  MARK SPLIT:  set-up 1 | CD from s4 1 | s1 and s3 equations 2 |
               solve for p and q 1 | two quadratics 1 | roots + check 1

  STEP 1  Let the roots be  A, B, C, D  with  AB = 6  (given).

  STEP 2  s4 = ABCD = e/a = 48/1 = 48

              6 x CD = 48     ->     CD = 8

  STEP 3  Let  p = A + B   and   q = C + D.

          s1 :  A+B+C+D  =  -b/a  =  -1/1  =  -1
                     p + q  =  -1                         ...(i)

          s3 :  ABC + ABD + ACD + BCD  =  -d/a  =  -(-4)/1  =  4
                AB(C + D) + CD(A + B)  =  4
                     6q  +  8p         =  4
                     8p + 6q           =  4                ...(ii)

  STEP 4  From (i),  q = -1 - p.  Put into (ii):

                8p + 6(-1 - p) = 4
                8p - 6 - 6p    = 4
                     2p        = 10
                      p        = 5   ,   q = -6

  STEP 5  CHECK with s2 (this is worth doing, it catches sign slips):
                s2 = AB + CD + (A+B)(C+D) = 6 + 8 + (5)(-6) = -16
                and  c/a = -16.       MATCHES.

  STEP 6  Build the two quadratics:

                A + B = 5 ,  AB = 6    ->   x^2 - 5x + 6 = 0
                                            (x - 2)(x - 3) = 0   ->  2 , 3

                C + D = -6 , CD = 8    ->   x^2 + 6x + 8 = 0
                                            (x + 2)(x + 4) = 0   ->  -2 , -4

  STEP 7  ROOTS :   2 , 3 , -2 , -4

          VERIFY every one in  x^4 + x^3 - 16x^2 - 4x + 48 :

            x =  2 :   16 +   8 -   64 -   8 + 48  =  0      YES
            x =  3 :   81 +  27 -  144 -  12 + 48  =  0      YES
            x = -2 :   16 -   8 -   64 +   8 + 48  =  0      YES
            x = -4 :  256 -  64 -  256 +  16 + 48  =  0      YES
```

---

### Q C2
Solve `8x^3 - 36x^2 - 18x + 81 = 0`, given that the roots are in arithmetic
progression.

**ANSWER (full model answer):**
```
  MARK SPLIT:  assume a-d, a, a+d 1 | sum -> a 2 | product -> d 2 |
               roots 1 | verification 1

  STEP 1  Let the roots be   a - d ,  a ,  a + d.

  STEP 2  Sum of roots  =  -b/a(coeff)  =  -(-36)/8  =  36/8  =  9/2

                (a - d) + a + (a + d)  =  9/2
                                  3a   =  9/2
                                   a   =  3/2

          (So 3/2 is a root.  Check:  8(27/8) - 36(9/4) - 18(3/2) + 81
                                    =  27 - 81 - 27 + 81 = 0     YES)

  STEP 3  Product of roots  =  -d/a(coeff)  =  -81/8

                (a - d)(a)(a + d)   =  -81/8
                    a (a^2 - d^2)   =  -81/8
                 (3/2)(9/4 - d^2)   =  -81/8

                       9/4 - d^2    =  -81/12  =  -27/4

                             d^2    =   9/4 + 27/4  =  36/4  =  9
                              d     =   3

  STEP 4  ROOTS :   3/2 - 3 ,  3/2 ,  3/2 + 3    =    -3/2 ,  3/2 ,  9/2

          (and -3/2, 3/2, 9/2 are in AP with common difference 3 -- correct)

  STEP 5  VERIFY in  8x^3 - 36x^2 - 18x + 81 :

            x = -3/2 :  8(-27/8) - 36(9/4) - 18(-3/2) + 81
                     =    -27    -   81    +    27    + 81  =  0     YES

            x =  3/2 :  8(27/8) - 36(9/4) - 18(3/2) + 81
                     =    27    -   81    -   27    + 81   =  0      YES

            x =  9/2 :  8(729/8) - 36(81/4) - 18(9/2) + 81
                     =    729    -   729    -    81   + 81 =  0      YES
```

---

### Q C3
Solve `3x^3 - 26x^2 + 52x - 24 = 0`, given that the roots are in geometric
progression.

**ANSWER (full model answer):**
```
  MARK SPLIT:  assume a/r, a, ar 1 | product -> a 2 | sum -> quadratic in r 2 |
               roots 1 | verification 1

  STEP 1  Let the roots be   a/r ,  a ,  a r.

  STEP 2  Product of roots  =  -d/a(coeff)  =  -(-24)/3  =  8

                (a/r)(a)(a r)  =  8
                        a^3    =  8
                          a    =  2

          (So 2 is a root.  Check: 24 - 104 + 104 - 24 = 0     YES)

  STEP 3  Sum of roots  =  -b/a(coeff)  =  26/3

                2/r + 2 + 2r    =  26/3
                2/r + 2r        =  26/3 - 2  =  20/3

          Multiply by 3r :      6 + 6r^2 = 20r
                                6r^2 - 20r + 6 = 0
                                3r^2 - 10r + 3 = 0
                               (3r - 1)(r - 3) = 0
                                r = 3   or   r = 1/3

  STEP 4  Take r = 3 :   roots are  2/3 ,  2 ,  6
          (r = 1/3 gives 6, 2, 2/3 -- the same three numbers)

  STEP 5  VERIFY in  3x^3 - 26x^2 + 52x - 24 :

            x = 2/3 :  3(8/27) - 26(4/9) + 52(2/3) - 24
                    =   8/9   -  104/9  +  312/9  - 216/9
                    =  ( 8 - 104 + 312 - 216 ) / 9  =  0/9  =  0     YES

            x = 2   :  24 - 104 + 104 - 24  =  0                     YES

            x = 6   :  3(216) - 26(36) + 312 - 24
                    =   648   -   936  + 312 - 24  =  0              YES
```

---

### Q C4
Solve `15x^3 - 23x^2 + 9x - 1 = 0`, given that the roots are in harmonic
progression.

**ANSWER (full model answer):**
```
  MARK SPLIT:  state HP -> reciprocals in AP 1 | substitute x = 1/y 2 |
               solve the AP cubic 2 | flip back 1 | verification 1

  STEP 1  The roots are in HP, so their RECIPROCALS are in AP.
          Put  x = 1/y  in the given equation:

                15      23      9
               ----  -  ---  +  --  -  1  =  0
               y^3      y^2     y

          Multiply throughout by y^3 :

                15 - 23y + 9y^2 - y^3  =  0

          Multiply by -1 and reorder:

                y^3 - 9y^2 + 23y - 15  =  0        ...(*)

          (Notice this is just the original coefficients REVERSED.)

  STEP 2  The roots of (*) are in AP.  Let them be  a - d , a , a + d.

                Sum      =  9      ->   3a = 9      ->   a = 3
                Product  =  15     ->   a(a^2 - d^2) = 15
                                        3(9 - d^2)   = 15
                                           9 - d^2   =  5
                                               d^2   =  4   ->  d = 2

  STEP 3  Roots of (*) :   1 , 3 , 5      (in AP -- correct)

          CHECK in (*) :  y = 1 :   1 -   9 +  23 - 15 = 0     YES
                          y = 3 :  27 -  81 +  69 - 15 = 0     YES
                          y = 5 : 125 - 225 + 115 - 15 = 0     YES

  STEP 4  ROOTS of the given equation  =  reciprocals  =  1 , 1/3 , 1/5
          (and 1, 1/3, 1/5 are in HP -- correct)

  STEP 5  VERIFY in  15x^3 - 23x^2 + 9x - 1 :

            x = 1   :  15 - 23 + 9 - 1  =  0                          YES

            x = 1/3 :  15(1/27) - 23(1/9) + 9(1/3) - 1
                    =   5/9  -  23/9  +  27/9  -  9/9
                    =  ( 5 - 23 + 27 - 9 ) / 9  =  0/9  =  0          YES

            x = 1/5 :  15(1/125) - 23(1/25) + 9(1/5) - 1
                    =   3/25  -  23/25  +  45/25  -  25/25
                    =  ( 3 - 23 + 45 - 25 ) / 25  =  0/25  =  0       YES
```

---

### Q C5  *** the reciprocal-equation 7-marker ***
Solve `6x^4 - 35x^3 + 62x^2 - 35x + 6 = 0`.

**ANSWER (full model answer):**
```
  MARK SPLIT:  identify class one even 1 | divide by x^2 1 | y-substitution 2 |
               solve for y 1 | solve for x 1 | verification 1

  STEP 1  Coefficients  6, -35, 62, -35, 6  read the same forwards and
          backwards, so this is a CLASS ONE reciprocal equation of EVEN degree 4.
          This is already the standard form.

  STEP 2  x = 0 is not a root (the constant term is 6, not 0),
          so we may divide throughout by x^2 :

                6x^2 - 35x + 62 - 35/x + 6/x^2  =  0

  STEP 3  Group the reciprocal pairs:

                6 ( x^2 + 1/x^2 )  -  35 ( x + 1/x )  +  62  =  0

  STEP 4  Put  y = x + 1/x .   Then  x^2 + 1/x^2 = y^2 - 2 :

                6 ( y^2 - 2 ) - 35 y + 62  =  0
                6y^2 - 12 - 35y + 62       =  0
                6y^2 - 35y + 50            =  0

  STEP 5  D = 35^2 - 4(6)(50) = 1225 - 1200 = 25 ,  sqrt(D) = 5

                y = (35 +/- 5)/12    ->    y = 10/3   or   y = 5/2

  STEP 6  Solve  x + 1/x = y  in each case.

          y = 10/3 :   3x^2 - 10x + 3 = 0
                       (3x - 1)(x - 3) = 0     ->   x = 1/3 ,  3

          y = 5/2  :   2x^2 - 5x + 2 = 0
                       (2x - 1)(x - 2) = 0     ->   x = 1/2 ,  2

  STEP 7  ROOTS :   3 ,  1/3 ,  2 ,  1/2      (two reciprocal pairs -- correct)

          VERIFY in  6x^4 - 35x^3 + 62x^2 - 35x + 6 :

            x = 2 :  6(16) - 35(8) + 62(4) - 35(2) + 6
                  =    96  -  280  +  248  -   70  + 6  =  0        YES

            x = 3 :  6(81) - 35(27) + 62(9) - 105 + 6
                  =   486  -   945  +  558  - 105 + 6   =  0        YES

            Sum of all roots = 3 + 1/3 + 2 + 1/2 = 35/6 = -b/a       YES
            Product of all roots = (3)(1/3)(2)(1/2) = 1 = e/a = 6/6  YES
```

---

### Q C6  *** the odd-degree reciprocal 7-marker ***
Solve `2x^5 + x^4 - 12x^3 - 12x^2 + x + 2 = 0`.

**ANSWER (full model answer):**
```
  MARK SPLIT:  identify class one odd 1 | x = -1 and division 2 |
               y-substitution 2 | solve 1 | verification 1

  STEP 1  Coefficients  2, 1, -12, -12, 1, 2  read the same both ways
          -> CLASS ONE reciprocal equation of ODD degree 5
          -> x = -1 is a root.

          CHECK:  2(-1) + 1 - 12(-1) - 12 + (-1) + 2
                = -2 + 1 + 12 - 12 - 1 + 2  =  0                YES

  STEP 2  Divide out (x + 1) by synthetic division:

            -1 |   2     1    -12    -12      1      2
               |        -2      1     11      1     -2
               +--------------------------------------
                   2    -1    -11     -1      2      0

          Left with:   2x^4 - x^3 - 11x^2 - x + 2 = 0
          (class one, even degree -- exactly as the theory predicts)

  STEP 3  x = 0 is not a root, so divide by x^2 :

                2x^2 - x - 11 - 1/x + 2/x^2  =  0

                2 ( x^2 + 1/x^2 )  -  ( x + 1/x )  -  11  =  0

  STEP 4  Put  y = x + 1/x ,  so  x^2 + 1/x^2 = y^2 - 2 :

                2(y^2 - 2) - y - 11  =  0
                2y^2 - 4 - y - 11    =  0
                2y^2 - y - 15        =  0
                (2y + 5)(y - 3)      =  0
                 y = -5/2   or   y = 3

  STEP 5  y = 3    :   x^2 - 3x + 1 = 0

                              3 +/- sqrt(9 - 4)      3 +/- sqrt 5
                       x  =  ---------------------  = --------------
                                      2                     2

          y = -5/2 :   x + 1/x = -5/2
                       2x^2 + 5x + 2 = 0
                       (2x + 1)(x + 2) = 0    ->   x = -1/2 ,  -2

  STEP 6  ROOTS :   -1 ,  -2 ,  -1/2 ,  (3 + sqrt5)/2 ,  (3 - sqrt5)/2

  STEP 7  VERIFY in  2x^5 + x^4 - 12x^3 - 12x^2 + x + 2 :

            x = -1   :  -2 + 1 + 12 - 12 - 1 + 2  =  0                 YES

            x = -2   :  2(-32) + 16 - 12(-8) - 12(4) - 2 + 2
                     =   -64  + 16  +  96   -  48  - 2 + 2  =  0       YES

            x = -1/2 :  2(-1/32) + 1/16 - 12(-1/8) - 12(1/4) - 1/2 + 2
                     =  -1/16 + 1/16 + 3/2 - 3 - 1/2 + 2  =  0         YES

            Surd pair: sum = 3 , product = (9 - 5)/4 = 1.
            Total sum of roots = -1 - 2 - 1/2 + 3 = -1/2 = -b/a = -1/2  YES
            Total product = (-1)(-2)(-1/2)(1) = -1 ;  and  -a5/a0 = -1  YES
```

---

### Q C7
Solve `6x^4 - 13x^3 - 35x^2 - x + 3 = 0`, given that one root is `2 + sqrt(3)`.

**ANSWER (full model answer):**
```
  MARK SPLIT:  state the conjugate theorem 1 | build the quadratic factor 2 |
               long division 2 | solve the quotient 1 | verification 1

  STEP 1  The coefficients are RATIONAL, so surd roots occur in conjugate pairs.
          Hence  2 - sqrt(3)  is also a root.

  STEP 2  Sum of the pair     =  ( 2 + sqrt3 ) + ( 2 - sqrt3 )  =  4
          Product of the pair =  2^2 - (sqrt3)^2  =  4 - 3      =  1

          So  x^2 - 4x + 1  is a factor of the left side.

  STEP 3  Divide:

                          6x^2 + 11x + 3
                      ------------------------------------
       x^2 - 4x + 1 )  6x^4 - 13x^3 - 35x^2 -   x  +  3
                       6x^4 - 24x^3 +  6x^2
                       -------------------
                              11x^3 - 41x^2 -    x
                              11x^3 - 44x^2 +  11x
                              --------------------
                                       3x^2 - 12x + 3
                                       3x^2 - 12x + 3
                                       --------------
                                              0       <- remainder 0, correct

  STEP 4  Solve the quotient:

                6x^2 + 11x + 3 = 0
                6x^2 + 9x + 2x + 3 = 0
                3x(2x + 3) + 1(2x + 3) = 0
                (3x + 1)(2x + 3) = 0
                 x = -1/3   or   x = -3/2

  STEP 5  ROOTS :   2 + sqrt3 ,  2 - sqrt3 ,  -1/3 ,  -3/2

  STEP 6  VERIFY in  6x^4 - 13x^3 - 35x^2 - x + 3 :

            x = -1/3 :  6(1/81) + 13(1/27) - 35(1/9) + 1/3 + 3
                     =   2/27 + 13/27 - 105/27 + 9/27 + 81/27
                     =  ( 2 + 13 - 105 + 9 + 81 ) / 27  =  0          YES

            x = -3/2 :  6(81/16) + 13(27/8) - 35(9/4) + 3/2 + 3
                     =  486/16 + 702/16 - 1260/16 + 24/16 + 48/16
                     =  ( 486 + 702 - 1260 + 24 + 48 ) / 16  =  0     YES

            Sum of all roots = 4 - 1/3 - 3/2 = 13/6 = -b/a = 13/6     YES
```

---

### Q C8
Solve `x^4 - 4x^2 + 8x + 35 = 0`, given that `2 + i sqrt(3)` is a root.

**ANSWER (full model answer):**
```
  STEP 1  The coefficients are REAL, so imaginary roots occur in conjugate
          pairs.  Hence  2 - i sqrt(3)  is also a root.

  STEP 2  Sum     =  4
          Product =  2^2 + (sqrt3)^2  =  4 + 3  =  7

          Factor:  x^2 - 4x + 7

  STEP 3  Divide  (note the missing x^3 term - write 0x^3):

                          x^2 + 4x + 5
                      --------------------------------
       x^2 - 4x + 7 )  x^4 + 0x^3 -  4x^2 +  8x + 35
                       x^4 - 4x^3 +  7x^2
                       -----------------
                             4x^3 - 11x^2 +  8x
                             4x^3 - 16x^2 + 28x
                             ------------------
                                     5x^2 - 20x + 35
                                     5x^2 - 20x + 35
                                     ---------------
                                             0

  STEP 4  x^2 + 4x + 5 = 0

                        -4 +/- sqrt(16 - 20)      -4 +/- 2i
                  x  =  ----------------------  = ------------  =  -2 +/- i
                                  2                     2

  STEP 5  ROOTS :  2 + i sqrt3 ,  2 - i sqrt3 ,  -2 + i ,  -2 - i

  STEP 6  VERIFY  x = -2 + i :
                x^2 = 4 - 4i + i^2 = 3 - 4i
                x^4 = (3 - 4i)^2 = 9 - 24i + 16i^2 = -7 - 24i

                x^4 - 4x^2 + 8x + 35
              = (-7 - 24i) - 4(3 - 4i) + 8(-2 + i) + 35
              = -7 - 24i - 12 + 16i - 16 + 8i + 35
              = ( -7 - 12 - 16 + 35 ) + ( -24 + 16 + 8 ) i
              = 0 + 0i                                            YES

          Sum of all roots = 4 + (-4) = 0 = -b/a  (no x^3 term)     YES
          Product = 7 x 5 = 35 = e/a                               YES
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| 1 | Solve a cubic given the roots are in **AP** or **GP** | C (7M) | Very high |
| 2 | Solve a quartic given the **product of two roots** | C (7M) | Very high |
| 3 | Solve a **reciprocal equation** (degree 4 or 5) | C (7M) | High |
| 4 | Solve given the roots are in **HP** | C (7M) | High |
| 5 | Solve given one **surd or imaginary** root | B or C | High |
| 6 | **Diminish the roots by k** / **remove the second term** | B (4M) | High |
| 7 | Find s1, s2, s3, or the sum of squares of the roots | A (2M) | Very high |
| 8 | **Form the equation** whose roots are given numbers | A (2M) | Very high |
| 9 | Equation whose roots are k times / negatives / reciprocals | A (2M) | Very high |
| 10 | Equation whose roots are the **squares** of the roots | B (4M) | Medium |
| 11 | Two roots equal / sum of two roots zero / ratio p:q | B or C | Medium |
| 12 | Descartes' rule of signs | A (2M) | Low-Medium |

## The realistic plan

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  Learn ONLY these five things and you have a very good chance of     |
  |  13 marks from this chapter:                                         |
  |                                                                      |
  |     1.  s1, s2, s3, s4 with alternating signs        (2 marks)       |
  |     2.  Form the equation from given roots           (2 marks)       |
  |     3.  Diminish the roots / remove second term      (4 marks)       |
  |     4.  Roots in AP and roots in GP                  (7 marks)       |
  |     5.  Reciprocal equation, y = x + 1/x             (7 marks - the  |
  |                                                       backup choice) |
  |                                                                      |
  |  Every one of them is a fixed recipe. None of them needs insight.    |
  |                                                                      |
  +----------------------------------------------------------------------+
```
