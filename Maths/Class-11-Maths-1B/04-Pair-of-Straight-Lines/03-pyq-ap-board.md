# Pair of Straight Lines — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 4 — Pair of Straight Lines**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> often with only the numbers changed. So the questions below are grouped by
> **"how often they appear"** rather than tagged to one exact year — inventing a
> precise year would be dishonest and useless to you. Before your exam,
> cross-check against the official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IB paper:**

```
  +------------------------------------------------------------------+
  |  SECTION A   Q1 - Q10    2 marks each   ANSWER ALL       = 20     |
  |  SECTION B   Q11 - Q17   4 marks each   ANSWER ANY 5     = 20     |
  |  SECTION C   Q18 - Q24   7 marks each   ANSWER ANY 5     = 35     |
  |                                                          -------  |
  |                                                  TOTAL   =  75    |
  |                                              PASS MARK   =  26    |
  +------------------------------------------------------------------+

  Pair of Straight Lines usually sits at:

      Section A  ->  around Q4      (angle / perpendicular / bisectors)
      Section B  ->  around Q12-13  (find k, or separate the lines)
      Section C  ->  around Q19-20  (the big "show it is a pair" question,
                                     or the homogenisation question)
```

**Realistic haul from this chapter: 9 to 13 marks.**

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# You must answer ALL TEN of Section A. These are guaranteed marks.
# ===============================================================

## Topic: angle between a homogeneous pair

### Q A1
Find the angle between the lines represented by `x^2 - 7xy + 12y^2 = 0`.

**ANSWER:**
```
   a = 1 ,  2h = -7  ->  h = -7/2 ,  b = 12

   h^2 - ab = 49/4 - 12 = 49/4 - 48/4 = 1/4       sqrt = 1/2
   a + b = 1 + 12 = 13

                   2 (1/2)        1
   tan(theta)  =  ---------  =  -----
                      13          13

   theta = Arctan(1/13)
```
**theta = Arctan(1/13)**

*Verification: `x^2 - 7xy + 12y^2 = (x - 3y)(x - 4y)`, slopes 1/3 and 1/4;
`abs((1/3 - 1/4)/(1 + 1/12)) = (1/12)/(13/12) = 1/13`. Correct.*

---

### Q A2
Find the angle between the lines `3x^2 + 7xy + 2y^2 = 0`.

**ANSWER:**
```
   a = 3 ,  h = 7/2 ,  b = 2

   h^2 - ab = 49/4 - 6 = 25/4          sqrt = 5/2
   a + b = 5

   tan(theta) = 2(5/2)/5 = 5/5 = 1     ->    theta = 45 degrees
```
**45 degrees**

---

### Q A3
Find the angle between the lines `2x^2 + xy - 6y^2 = 0`.

**ANSWER:**
```
   a = 2 ,  h = 1/2 ,  b = -6

   h^2 - ab = 1/4 + 12 = 49/4          sqrt = 7/2
   a + b = 2 - 6 = -4 ,   abs(a + b) = 4

   tan(theta) = 2(7/2)/4 = 7/4         ->    theta = Arctan(7/4)
```
**theta = Arctan(7/4)**

*Verification: `2x^2 + xy - 6y^2 = (2x - 3y)(x + 2y)`, slopes 2/3 and -1/2;
`abs((2/3 + 1/2)/(1 - 1/3)) = (7/6)/(2/3) = 7/4`. Correct.*

---

### Q A4
Show that `x^2 + 2xy cot(alpha) - y^2 = 0` represents a pair of perpendicular
lines for every value of `alpha`.

**ANSWER:**
```
   a = 1 ,  b = -1

   a + b = 1 + (-1) = 0
```
Since the sum of the coefficient of `x^2` and the coefficient of `y^2` is zero,
the lines are **perpendicular**, whatever `alpha` may be.

---

### Q A5
Find the angle between the lines `x^2 - 2 x y sec(alpha) + y^2 = 0`.

**ANSWER:**
```
   a = 1 ,  h = -sec(alpha) ,  b = 1

   h^2 - ab = sec^2(alpha) - 1 = tan^2(alpha)      sqrt = abs(tan alpha)
   a + b = 2

                   2 abs(tan alpha)
   tan(theta) =  --------------------  =  abs( tan(alpha) )
                          2

   theta = alpha
```
**The angle between the lines is `alpha`.**

---

## Topic: perpendicular / coincident conditions

### Q A6
Find `k` if `k x^2 + 6xy - 3y^2 = 0` represents a pair of perpendicular lines.

**ANSWER:**
```
   Perpendicular  <=>  a + b = 0
                       k + (-3) = 0
                       k = 3
```
**k = 3**
*(Check it is real: h = 3, so `h^2 - ab = 9 - 3(-3) = 18 > 0`. Real and distinct.)*

---

### Q A7
Find `k` if `x^2 + 4xy + k y^2 = 0` represents a pair of coincident lines.

**ANSWER:**
```
   Coincident  <=>  h^2 = ab
                    2^2 = 1 . k
                    k = 4
```
**k = 4**
*(Check: `x^2 + 4xy + 4y^2 = (x + 2y)^2` — the single line `x + 2y = 0` twice.)*

---

### Q A8
Find `lambda` if `lambda x^2 + 10xy + 3y^2 = 0` represents a pair of coincident
lines.

**ANSWER:**
```
   h = 5 ,  a = lambda ,  b = 3

   h^2 = ab   ->   25 = 3 lambda   ->   lambda = 25/3
```
**lambda = 25/3**

---

### Q A9
State the nature of the lines given by `x^2 + xy + y^2 = 0`.

**ANSWER:**
```
   a = 1 ,  h = 1/2 ,  b = 1

   h^2 - ab = 1/4 - 1 = -3/4  <  0
```
The lines are **imaginary**. The only real point satisfying the equation is
the origin **(0, 0)**.

---

## Topic: slopes

### Q A10
Find the sum and the product of the slopes of the lines
`3x^2 - 5xy + 2y^2 = 0`.

**ANSWER:**
```
   a = 3 ,  h = -5/2 ,  b = 2

   m1 + m2 = -2h/b = -2(-5/2)/2 = 5/2
   m1 . m2 =  a/b  =  3/2
```
**Sum = 5/2 , Product = 3/2**

*Verification: `3x^2 - 5xy + 2y^2 = (3x - 2y)(x - y)`, slopes 3/2 and 1.
Sum = 5/2, product = 3/2. Correct.*

---

### Q A11
Find `k` so that `y = 2x` is one of the lines represented by
`3x^2 + k xy - 2y^2 = 0`.

**ANSWER:**
```
   y = m x  is a line of the pair  <=>  b m^2 + 2h m + a = 0

   Here  a = 3 ,  2h = k ,  b = -2 ,  m = 2 :

        -2 (4)  +  k (2)  +  3  =  0
        -8 + 2k + 3 = 0
        2k = 5      ->    k = 5/2
```
**k = 5/2**
*(Check: `3x^2 + 2.5xy - 2y^2` with `y = 2x` gives `3x^2 + 5x^2 - 8x^2 = 0`.)*

---

### Q A12
If the slope of one line of `x^2 + 2h xy + 2y^2 = 0` is twice the slope of the
other, find `h`.

**ANSWER:**
```
   Slopes in the ratio 1 : 2   ->   8 h^2 = 9 a b

   a = 1 ,  b = 2 :      8 h^2 = 18    ->    h^2 = 9/4    ->    h = +/- 3/2
```
**h = 3/2 or h = -3/2**
*(Check with h = 3/2: `x^2 + 3xy + 2y^2 = (x + y)(x + 2y)`, slopes -1 and -1/2,
and -1 = 2 x (-1/2). Correct.)*

---

### Q A13
Find the condition that the lines of `a x^2 + 2h xy + b y^2 = 0` are equally
inclined to the coordinate axes.

**ANSWER:**
Equally inclined to the axes means the slopes are `m` and `-m`, so their sum is 0.
```
   m1 + m2 = -2h/b = 0    ->    h = 0
```
**h = 0** (that is, the `xy` term is missing).

---

### Q A14
Find the condition that the sum of the slopes of `a x^2 + 2h xy + b y^2 = 0`
equals their product.

**ANSWER:**
```
   -2h / b  =  a / b        (multiply both sides by b)
   -2h = a
   a + 2h = 0
```
**a + 2h = 0**

---

## Topic: building new pairs

### Q A15
Find the equation of the pair of lines through the origin perpendicular to
`x^2 - 5xy + 4y^2 = 0`.

**ANSWER:**
```
   Rule:  swap a and b, flip the sign of h.

   a = 1 , 2h = -5 , b = 4     ->     4 x^2 + 5 x y + y^2 = 0
```
**`4x^2 + 5xy + y^2 = 0`**

*Verification: the given lines are `x - y = 0` and `x - 4y = 0` (slopes 1 and 1/4),
so the perpendicular ones have slopes -1 and -4:
`(y + x)(y + 4x) = 4x^2 + 5xy + y^2`. Correct.*

---

### Q A16
Find the equation of the pair of bisectors of the angles between
`x^2 - 5xy + 4y^2 = 0`.

**ANSWER:**
```
   a = 1 ,  h = -5/2 ,  b = 4

      x^2 - y^2        xy               x^2 - y^2        -2 xy
     -----------  =  ------      ->    -----------  =  --------
        1 - 4         -5/2                 -3               5

   Cross-multiply:   5 ( x^2 - y^2 )  =  (-3)(-2 xy)  =  6 xy

        5 x^2  -  6 x y  -  5 y^2  =  0
```
**`5x^2 - 6xy - 5y^2 = 0`**
*(Check: `5 + (-5) = 0`, so the bisectors are perpendicular, as they must be.)*

---

### Q A17
Find the pair of bisectors of the angles between `x y = 0`.

**ANSWER:**
```
   xy = 0  means  2h xy = xy , so  h = 1/2 ,  a = 0 ,  b = 0 .

   Since  a = b , the formula  (x^2 - y^2)/(a - b) = xy/h  becomes

        x^2 - y^2 = 0
```
**`x^2 - y^2 = 0`, i.e. the lines `y = x` and `y = -x`.**
*(Sensible: `xy = 0` is the pair of coordinate axes, and their bisectors are
indeed `y = x` and `y = -x`.)*

---

### Q A18
Find the equation of the pair of lines through the origin parallel to the pair
`2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0`.

**ANSWER:** Delete the `g`, `f`, `c` terms; they only shift, never tilt.
```
        2 x^2  +  3 x y  -  2 y^2  =  0
```
**`2x^2 + 3xy - 2y^2 = 0`**

---

## Topic: separating the lines

### Q A19
Find the separate equations of the lines `6x^2 - 5xy - 6y^2 = 0`.

**ANSWER:**
```
   Split -5xy so the pieces multiply to 6 x (-6) = -36 and add to -5:
   -9 and +4.

      6x^2 - 9xy + 4xy - 6y^2
    = 3x(2x - 3y) + 2y(2x - 3y)
    = (3x + 2y)(2x - 3y)
```
**`3x + 2y = 0` and `2x - 3y = 0`**
*(Note `a + b = 6 + (-6) = 0`, so they are perpendicular — and indeed the slopes
`-3/2` and `2/3` multiply to `-1`.)*

---

### Q A20
Find the separate equations of `3x^2 + 7xy + 2y^2 = 0`.

**ANSWER:**
```
   Split 7xy into 6 and 1  (since 6 x 1 = 3 x 2 = 6):

      3x^2 + 6xy + xy + 2y^2
    = 3x(x + 2y) + y(x + 2y)
    = (3x + y)(x + 2y)
```
**`3x + y = 0` and `x + 2y = 0`**

---

## Topic: the general equation

### Q A21
What is the condition for `a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0` to
represent a pair of straight lines? Write it in both forms.

**ANSWER:**
```
     a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2  =  0

   and, equivalently,

            +-----------------+
            |   a    h    g   |
            |   h    b    f   |   =   0
            |   g    f    c   |
            +-----------------+

   together with  h^2 >= ab  so that the lines are real.
```

---

### Q A22
Write down the two equations that give the point of intersection of the lines
represented by `S = a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0`.

**ANSWER:**
```
   Set the two partial derivatives to zero:

        dS/dx = 0    ->    a x  +  h y  +  g  =  0
        dS/dy = 0    ->    h x  +  b y  +  f  =  0

   Solving them:

              h f - b g                    g h - a f
        x = -------------- ,         y = --------------
              a b - h^2                    a b - h^2
```

---

### Q A23
Find the product of the perpendiculars from `(1, 1)` to `3x^2 + 7xy + 2y^2 = 0`.

**ANSWER:**
```
                abs( a alpha^2 + 2h alpha beta + b beta^2 )
   Product  =  --------------------------------------------
                       sqrt( (a - b)^2 + 4 h^2 )

   Top    = abs( 3(1) + 7(1)(1) + 2(1) ) = 12
   Bottom = sqrt( (3 - 2)^2 + 4 (7/2)^2 ) = sqrt(1 + 49) = sqrt(50)

              12          12         6 sqrt(2)
   Product = -------  =  --------- = -----------
             sqrt(50)     5 sqrt(2)       5
```
**`6 sqrt(2)/5`  (about 1.697)**

---

### Q A24
Find the distance between the parallel lines given by
`9x^2 - 6xy + y^2 + 18x - 6y + 8 = 0`.

**ANSWER:**
```
   a = 9 , h = -3 , b = 1 , g = 9 , f = -3 , c = 8

   Parallel check:  h^2 = 9 = ab = 9 .  YES

                    g^2 - a c                 81 - 72
   d  =  2 sqrt( ---------------- ) = 2 sqrt( --------- )
                   a ( a + b )                 9 x 10

                     9              3           2
      =  2 sqrt( ------- )  =  2 x -------  =  ---------
                    90              sqrt 90     sqrt(10)
```
**`d = 2/sqrt(10)`  (about 0.632)**

*Verification: `9x - 3y = -g +/- sqrt(g^2 - ac) = -9 +/- 3`, giving
`3x - y + 2 = 0` and `3x - y + 4 = 0`. Distance `= abs(2 - 4)/sqrt(9 + 1)
= 2/sqrt(10)`. Correct.*

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Seven are set, you answer any five. Two of them are usually easy.
# ===============================================================

### Q B1  (asked very often)
Find the value of `k` if `2x^2 + k xy - 6y^2 + 3x + y + 1 = 0` represents a pair
of straight lines.

**ANSWER:**
```
   a = 2 , h = k/2 , b = -6 , g = 3/2 , f = 1/2 , c = 1

   abc  = (2)(-6)(1)               = -12
   2fgh = 2 (1/2)(3/2)(k/2)        =  3k/4
   af^2 = 2 (1/2)^2 = 2(1/4)       =  1/2
   bg^2 = (-6)(3/2)^2 = -6(9/4)    = -27/2
   ch^2 = (1)(k/2)^2               =  k^2/4

   Condition:  abc + 2fgh - af^2 - bg^2 - ch^2 = 0

        -12  +  3k/4  -  1/2  +  27/2  -  k^2/4  =  0

        -12 - 0.5 + 13.5  +  0.75 k  -  0.25 k^2  =  0

              1  +  0.75 k  -  0.25 k^2  =  0        (multiply by -4)

              k^2  -  3 k  -  4  =  0

              (k - 4)(k + 1) = 0

              k = 4    or    k = -1
```
**k = 4 or k = -1**

*Verification for k = 4: `2x^2 + 4xy - 6y^2 + 3x + y + 1 = (x + 3y + 1)(2x - 2y + 1)`.
Expand-check: `2x^2 - 2xy + x + 6xy - 6y^2 + 3y + 2x - 2y + 1
= 2x^2 + 4xy - 6y^2 + 3x + y + 1`. Correct.*

---

### Q B2  (asked very often)
Find `lambda` if `lambda x^2 + 10xy + 3y^2 - 15x - 21y + 18 = 0` represents a pair
of straight lines. Find the two lines.

**ANSWER:**
```
   a = lambda , h = 5 , b = 3 , g = -15/2 , f = -21/2 , c = 18

   abc  = lambda (3)(18)                = 54 lambda
   2fgh = 2 (-21/2)(-15/2)(5) = 2(1575/4) = 787.5
   af^2 = lambda (441/4)                = 110.25 lambda
   bg^2 = 3 (225/4)                     = 168.75
   ch^2 = 18 (25)                       = 450

   54 lambda + 787.5 - 110.25 lambda - 168.75 - 450 = 0
   -56.25 lambda + 168.75 = 0
   lambda = 3

   With lambda = 3 :   3x^2 + 10xy + 3y^2 - 15x - 21y + 18 = 0
   Quadratic part: 3x^2 + 10xy + 3y^2 = (3x + y)(x + 3y)
   Write it as   (3x + y + p)(x + 3y + q) :

        x  terms :   3q + p = -15
        y  terms :   q + 3p = -21
        constant :   p q    =  18

        From the first: p = -15 - 3q.  Substitute:
             q + 3(-15 - 3q) = -21
             q - 45 - 9q = -21
             -8q = 24    ->    q = -3    and    p = -6
        Check: p q = (-6)(-3) = 18 .  CORRECT
```
**lambda = 3; the lines are `3x + y - 6 = 0` and `x + 3y - 3 = 0`.**

---

### Q B3
Find `lambda` if `x^2 - 3xy + lambda y^2 + 3x - 5y + 2 = 0` represents a pair of
straight lines, and find the lines.

**ANSWER:**
```
   a = 1 , h = -3/2 , b = lambda , g = 3/2 , f = -5/2 , c = 2

   abc  = 2 lambda
   2fgh = 2 (-5/2)(3/2)(-3/2) = 2 (45/8) = 45/4 = 11.25
   af^2 = 1 (25/4) = 6.25
   bg^2 = lambda (9/4) = 2.25 lambda
   ch^2 = 2 (9/4) = 4.5

   2 lambda + 11.25 - 6.25 - 2.25 lambda - 4.5 = 0
        -0.25 lambda + 0.5 = 0
        lambda = 2

   With lambda = 2 :  x^2 - 3xy + 2y^2 = (x - y)(x - 2y)
   Write  (x - y + p)(x - 2y + q) :
        x  : p + q  =  3
        y  : -2p - q = -5   ->  2p + q = 5
        constant : p q = 2
        Subtracting:  p = 2 , q = 1 , and pq = 2 .  CORRECT
```
**lambda = 2; the lines are `x - y + 2 = 0` and `x - 2y + 1 = 0`.**

---

### Q B4  (asked very often)
Show that `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` represents a pair of straight
lines and find the separate equations.

**ANSWER:**
```
   a = 2 , h = -13/2 , b = -7 , g = 1/2 , f = 23/2 , c = -6

   abc  = (2)(-7)(-6)                     =   84
   2fgh = 2 (23/2)(1/2)(-13/2) = -299/4   =  -74.75
   af^2 = 2 (529/4)                       =  264.5
   bg^2 = -7 (1/4)                        =   -1.75
   ch^2 = -6 (169/4)                      = -253.5

   84 - 74.75 - 264.5 + 1.75 + 253.5 = 339.25 - 339.25 = 0     IT IS A PAIR

   h^2 - ab = 169/4 + 14 = 56.25 > 0     real and distinct

   SEPARATING:
      2x^2 - 13xy - 7y^2 = 2x^2 - 14xy + xy - 7y^2
                         = 2x(x - 7y) + y(x - 7y)
                         = (2x + y)(x - 7y)

      Assume  (2x + y + p)(x - 7y + q) = 0
        x : 2q + p =  1
        y : q - 7p = 23
        constant : p q = -6

        p = 1 - 2q  ->  q - 7 + 14q = 23  ->  15q = 30  ->  q = 2 , p = -3
        Check: p q = (-3)(2) = -6 .   CORRECT
```
**The lines are `2x + y - 3 = 0` and `x - 7y + 2 = 0`.**

---

### Q B5
Show that `x^2 - 5xy + 4y^2 + x + 2y - 2 = 0` represents a pair of lines, and
find the point of intersection.

**ANSWER:**
```
   a = 1 , h = -5/2 , b = 4 , g = 1/2 , f = 1 , c = -2

   abc  = (1)(4)(-2)      =  -8
   2fgh = 2 (1)(1/2)(-5/2)=  -2.5
   af^2 = 1 (1)           =   1
   bg^2 = 4 (1/4)         =   1
   ch^2 = -2 (25/4)       = -12.5

   -8 - 2.5 - 1 - 1 + 12.5 = 0                       IT IS A PAIR

   POINT OF INTERSECTION:
      a x + h y + g = 0  ->   x - (5/2)y + 1/2 = 0   ->   2x - 5y + 1 = 0  ...(I)
      h x + b y + f = 0  ->  -(5/2)x + 4y + 1 = 0    ->  -5x + 8y + 2 = 0  ...(II)

      From (I):  x = (5y - 1)/2 .  Put into (II), multiplied by 2:
         -5(5y - 1) + 16y + 4 = 0
         -25y + 5 + 16y + 4 = 0
         -9y + 9 = 0     ->    y = 1
         x = (5 - 1)/2 = 2
```
**The point of intersection is `(2, 1)`.**

*Verification: the lines factorise as `(x - y - 1)(x - 4y + 2) = 0`.
At `(2,1)`: `2 - 1 - 1 = 0` and `2 - 4 + 2 = 0`. Correct.*

---

### Q B6
Show that `2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0` represents a pair of perpendicular
lines and find their point of intersection.

**ANSWER:**
```
   a = 2 , h = 3/2 , b = -2 , g = -5/2 , f = 5/2 , c = -3

   abc  = (2)(-2)(-3)             =  12
   2fgh = 2 (5/2)(-5/2)(3/2)      = -18.75
   af^2 = 2 (25/4)                =  12.5
   bg^2 = -2 (25/4)               = -12.5
   ch^2 = -3 (9/4)                =  -6.75

   12 - 18.75 - 12.5 + 12.5 + 6.75 = 0               IT IS A PAIR

   PERPENDICULAR ?     a + b = 2 + (-2) = 0          YES, 90 degrees

   POINT OF INTERSECTION:
      2x + (3/2)y - 5/2 = 0   ->   4x + 3y - 5 = 0   ...(I)
      (3/2)x - 2y + 5/2 = 0   ->   3x - 4y + 5 = 0   ...(II)

      (I) x 4 :  16x + 12y =  20
      (II) x 3 :  9x - 12y = -15
      Add      :  25x = 5    ->    x = 1/5
      From (I) :  4/5 + 3y = 5  ->  3y = 21/5  ->  y = 7/5
```
**Perpendicular lines meeting at `(1/5 , 7/5)`.**

*Verification: `(x + 2y - 3)(2x - y + 1) = 0`; slopes `-1/2` and `2`, product `-1`.
At `(1/5, 7/5)`: `1/5 + 14/5 - 3 = 0` and `2/5 - 7/5 + 1 = 0`. Correct.*

---

### Q B7
Show that `4x^2 + 12xy + 9y^2 + 8x + 12y - 5 = 0` represents a pair of parallel
lines and find the distance between them.

**ANSWER:**
```
   a = 4 , h = 6 , b = 9 , g = 4 , f = 6 , c = -5

   IS IT A PAIR ?
      abc  = (4)(9)(-5) = -180
      2fgh = 2(6)(4)(6) =  288
      af^2 = 4(36)      =  144
      bg^2 = 9(16)      =  144
      ch^2 = (-5)(36)   = -180
      -180 + 288 - 144 - 144 + 180 = 0                 YES

   PARALLEL ?
      h^2 = 36 ,  ab = 36        ->   h^2 = ab         YES
      a f^2 = 4(36) = 144 ,  b g^2 = 9(16) = 144       YES

   DISTANCE:
                    g^2 - a c                16 + 20              36
      d = 2 sqrt( ------------- ) = 2 sqrt( --------- ) = 2 sqrt(-----)
                    a (a + b)                4 (13)                52

               6            6
        = 2 x -------  =  ---------
              sqrt 52      sqrt(13)
```
**`d = 6/sqrt(13)`  (about 1.664)**

*Verification: `4x + 6y = -4 +/- 6`, giving `2x + 3y - 1 = 0` and `2x + 3y + 5 = 0`.
Distance `= abs(-1 - 5)/sqrt(4 + 9) = 6/sqrt(13)`. Correct.*

---

### Q B8
Find the equations of the bisectors of the angles between the lines represented
by `2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0`.

**ANSWER:**
```
   a = 2 , h = 3/2 , b = 1 , g = -5/2 , f = -2 , c = 3

   CHECK it is a pair:
      abc = 6 ,  2fgh = 2(-2)(-5/2)(3/2) = 15 ,  af^2 = 8 ,
      bg^2 = 25/4 = 6.25 ,  ch^2 = 27/4 = 6.75
      6 + 15 - 8 - 6.25 - 6.75 = 0                       YES

   POINT OF INTERSECTION:
      2x + 1.5y - 2.5 = 0   ->   4x + 3y - 5 = 0
      1.5x + y - 2   = 0    ->   3x + 2y - 4 = 0

      x 2 :  8x + 6y = 10
      x 3 :  9x + 6y = 12
      Subtract:  x = 2 ;  then 3(2) + 2y = 4  ->  y = -1
      Meeting point  (2, -1)

   BISECTORS (shift the origin to (2, -1)):

        ( x - 2 )^2 - ( y + 1 )^2         ( x - 2 )( y + 1 )
       ----------------------------  =  ----------------------
                 2 - 1                           3/2

        (3/2) [ (x - 2)^2 - (y + 1)^2 ]  =  (x - 2)(y + 1)
```
**`3[(x - 2)^2 - (y + 1)^2] = 2(x - 2)(y + 1)`**

*Verification: the lines are `x + y - 1 = 0` and `2x + y - 3 = 0`, which do meet
at `(2, -1)`. With `X = x - 2`, `Y = y + 1`, the answer is `3X^2 - 2XY - 3Y^2 = 0`,
whose `A + B = 3 - 3 = 0` — the bisectors are perpendicular, as required.*

---

### Q B9
Find the area of the triangle formed by the lines `18x^2 - 9xy + y^2 = 0` and the
line `y = 9`.

**ANSWER:**
```
   a = 18 , h = -9/2 , b = 1 .   Line:  0.x + 1.y - 9 = 0  ->  l = 0, m = 1, n = -9

   h^2 - ab = 81/4 - 18 = 9/4        sqrt = 3/2

   a m^2 - 2h l m + b l^2 = 18(1) - 0 + 0 = 18

              n^2 sqrt(h^2 - ab)        81 x (3/2)        243        27
   Area  =  ----------------------  =  ------------  =  --------  =  ----
             abs(am^2 - 2hlm + bl^2)        18              72         4
```
**Area = 27/4 square units**

*Verification: `18x^2 - 9xy + y^2 = (3x - y)(6x - y)`, so the lines are `y = 3x`
and `y = 6x`. With `y = 9` the vertices are `(0,0)`, `(3, 9)`, `(3/2, 9)`, and
`Area = (1/2) abs(3 x 9 - (3/2) x 9) = (1/2)(13.5) = 27/4`. Correct.*

---

### Q B10
Show that the lines joining the origin to the points of intersection of the curve
`7x^2 - 4xy + 8y^2 + 2x - 4y - 8 = 0` and the line `3x - y = 2` are mutually
perpendicular.

**ANSWER:**
```
   STEP 1  Write the line as "= 1" :      (3x - y)/2 = 1 = U

   STEP 2  Homogenise:

      7x^2 - 4xy + 8y^2  +  (2x - 4y) U  -  8 U^2  =  0

           (2x - 4y)(3x - y)/2  =  (x - 2y)(3x - y)
                                =  3x^2 - xy - 6xy + 2y^2
                                =  3x^2 - 7xy + 2y^2

           8 U^2 = 8 (3x - y)^2 / 4 = 2(9x^2 - 6xy + y^2) = 18x^2 - 12xy + 2y^2
           with the minus sign:  -18x^2 + 12xy - 2y^2

   STEP 3  Collect:
           x^2 :  7 + 3 - 18  =  -8
           xy  : -4 - 7 + 12  =   1
           y^2 :  8 + 2 -  2  =   8

           -8 x^2 + x y + 8 y^2 = 0

   STEP 4  Coefficient of x^2 + coefficient of y^2 = -8 + 8 = 0
```
**The two lines are perpendicular. Proved.**

---

### Q B11
Find the value of `k` if the lines joining the origin to the points of
intersection of the curve `2x^2 - 2xy + 3y^2 + 2x - y - 1 = 0` and the line
`x + 2y = k` are mutually perpendicular.

**ANSWER:**
```
   STEP 1   (x + 2y)/k = 1 = U

   STEP 2   2x^2 - 2xy + 3y^2 + (2x - y) U - 1 . U^2 = 0

            Multiply everything by k^2 to clear fractions:

            2k^2 x^2 - 2k^2 xy + 3k^2 y^2 + k(2x - y)(x + 2y) - (x + 2y)^2 = 0

            (2x - y)(x + 2y) = 2x^2 + 4xy - xy - 2y^2 = 2x^2 + 3xy - 2y^2
            (x + 2y)^2       = x^2 + 4xy + 4y^2

   STEP 3   coefficient of x^2 :   2k^2 + 2k - 1
            coefficient of y^2 :   3k^2 - 2k - 4

   STEP 4   Perpendicular  <=>  sum = 0 :

            (2k^2 + 2k - 1) + (3k^2 - 2k - 4) = 0
             5k^2 - 5 = 0
             k^2 = 1        ->      k = 1   or   k = -1
```
**k = +1 or k = -1**

---

### Q B12
Find the condition that the chord `l x + m y = 1` of the circle `x^2 + y^2 = a^2`
subtends a right angle at the centre.

**ANSWER:**
```
   The line already reads "= 1", so U = l x + m y.

   Homogenise  x^2 + y^2 - a^2 = 0 :

        x^2 + y^2  -  a^2 ( l x + m y )^2  =  0

        ( 1 - a^2 l^2 ) x^2  -  2 a^2 l m x y  +  ( 1 - a^2 m^2 ) y^2  =  0

   Right angle at the origin  <=>  (coeff x^2) + (coeff y^2) = 0 :

        2  -  a^2 ( l^2 + m^2 )  =  0
```
**`a^2 (l^2 + m^2) = 2`**

*Verification: take `a = 2` and the line `x + y = 2`, i.e. `l = m = 1/2`. Then
`a^2(l^2 + m^2) = 4(1/2) = 2`. The line meets `x^2 + y^2 = 4` at `(2,0)` and
`(0,2)`, and the lines from the origin are the two axes — perpendicular. Correct.*

---

### Q B13
If the slopes of the lines `a x^2 + 2h xy + b y^2 = 0` are in the ratio `p : q`,
prove that `4 p q h^2 = a b (p + q)^2`.

**ANSWER:**
```
   Let  m1 = p t  and  m2 = q t .

        m1 + m2 = t (p + q)  =  -2h / b        ...(1)
        m1 m2   = p q t^2    =   a / b         ...(2)

   From (1):        t  =  -2h / ( b (p + q) )

   Substituting in (2):

                          4 h^2                a
             p q  x  ------------------  =   -----
                      b^2 ( p + q )^2          b

             4 p q h^2  =  a b ( p + q )^2                    PROVED
```
*(Putting p = 1, q = 2 gives the familiar `8h^2 = 9ab` when one slope is twice
the other.)*

---

### Q B14
Find the equation of the pair of lines passing through the origin and
perpendicular to the pair `a x^2 + 2h xy + b y^2 = 0`.

**ANSWER:**
```
   The given lines are y = m1 x and y = m2 x, with

        m1 + m2 = -2h/b   and   m1 m2 = a/b .

   The perpendicular lines have slopes  -1/m1  and  -1/m2 , so their combined
   equation is

        ( y + x/m1 )( y + x/m2 ) = 0

                     1     1              x^2
        y^2  +  xy ( --- + --- )   +   -------- = 0
                     m1    m2            m1 m2

                    m1 + m2      -2h/b       -2h                 1        b
   Now  1/m1 + 1/m2 = -------- = -------  =  -----   and     -------- =  ---
                      m1 m2        a/b         a              m1 m2       a

                  2h            b
        y^2  -  ---- x y  +  ---- x^2  =  0        (multiply by a)
                  a             a
```
**`b x^2 - 2h xy + a y^2 = 0`**  (swap a and b, flip the sign of h)

---

### Q B15
Find the angle between the lines represented by
`2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0`.

**ANSWER:**
```
   a = 2 , h = 3/2 , b = 1

   (The g, f, c terms do not affect the angle at all.)

   h^2 - ab = 9/4 - 2 = 1/4          sqrt = 1/2
   a + b = 3

   tan(theta) = 2(1/2)/3 = 1/3       ->     theta = Arctan(1/3)
```
**theta = Arctan(1/3)**

*Verification: the lines are `x + y - 1 = 0` and `2x + y - 3 = 0`, slopes `-1` and
`-2`; `abs((-1 + 2)/(1 + 2)) = 1/3`. Correct.*

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Seven are set, you answer any five. This chapter supplies one of them
# almost every year.
# ===============================================================

### Q C1  — THE most repeated long answer from this chapter
Show that the equation `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` represents a pair of
straight lines. Also find the angle between them and the coordinates of their
point of intersection.

**MARK SPLIT:** condition 3 · angle 2 · point of intersection 2

**ANSWER:**

```
   STEP 1  (1 mark)  --  Write the six coefficients.

        Comparing with  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0 :

             a =  2                2h = -13   ->   h = -13/2
             b = -7                2g =   1   ->   g =   1/2
             c = -6                2f =  23   ->   f =  23/2


   STEP 2  (2 marks)  --  Test the condition.

        abc     =  (2)(-7)(-6)                       =    84

                        23     1     -13        -299
        2fgh    = 2 x ( -- ) ( - ) ( --- )  =  ------  =  -74.75
                        2      2      2           4

        af^2    =  2 (23/2)^2  = 2 (529/4)          =   264.5

        bg^2    = -7 (1/2)^2   = -7 (1/4)           =    -1.75

        ch^2    = -6 (-13/2)^2 = -6 (169/4)         =  -253.5

        abc + 2fgh - af^2 - bg^2 - ch^2
             =  84 - 74.75 - 264.5 + 1.75 + 253.5
             =  339.25 - 339.25
             =  0

        Equivalently, the determinant

             |   2     -13/2    1/2  |
             | -13/2    -7     23/2  |   =   0
             |  1/2    23/2     -6   |

        Also  h^2 - ab = 169/4 - (2)(-7) = 42.25 + 14 = 56.25 > 0 ,
        so the lines are REAL and DISTINCT.

        HENCE the equation represents a pair of straight lines.


   STEP 3  (2 marks)  --  The angle between them.

        h^2 - ab = 225/4        ->      sqrt(h^2 - ab) = 15/2
        a + b = 2 + (-7) = -5   ->      abs(a + b) = 5

                        2 sqrt(h^2 - ab)       2 x (15/2)       15
        tan(theta)  =  ------------------  =  ------------  =  ----  =  3
                            abs(a + b)              5            5

        theta  =  Arctan(3)     (approximately 71 degrees 34 minutes)


   STEP 4  (2 marks)  --  The point of intersection.

        dS/dx = 0  ->   a x + h y + g = 0
                        2x - (13/2)y + 1/2 = 0        (x 2)
                        4x - 13y + 1 = 0                       ...(I)

        dS/dy = 0  ->   h x + b y + f = 0
                        -(13/2)x - 7y + 23/2 = 0      (x 2)
                        -13x - 14y + 23 = 0
                         13x + 14y - 23 = 0                    ...(II)

        From (I):   x = (13y - 1)/4

        Into (II):  13(13y - 1)/4 + 14y - 23 = 0            (x 4)
                    169y - 13 + 56y - 92 = 0
                    225y = 105
                    y = 105/225 = 7/15

                    x = (13(7/15) - 1)/4 = (91/15 - 15/15)/4 = (76/15)/4 = 19/15

        Point of intersection  =  ( 19/15 , 7/15 )
```

**FINAL ANSWER:** the equation represents a pair of real distinct straight lines;
the angle between them is `Arctan(3)`, and they meet at `(19/15 , 7/15)`.

**VERIFICATION (do this if you have spare time):**
```
   Factorising,  2x^2 - 13xy - 7y^2 = (2x + y)(x - 7y) , and matching the
   remaining terms gives  (2x + y - 3)(x - 7y + 2) = 0 .

   At (19/15, 7/15):  2(19/15) + 7/15 - 3 = 38/15 + 7/15 - 45/15 = 0    OK
                      19/15 - 7(7/15) + 2 = 19/15 - 49/15 + 30/15 = 0   OK

   Slopes are -2 and 1/7 :
        abs( (-2 - 1/7) / (1 + (-2)(1/7)) ) = abs( (-15/7)/(5/7) ) = 3   OK
```

---

### Q C2  — the second most repeated long answer
Find the angle between the lines joining the origin to the points of intersection
of the curve `x^2 + 2xy + y^2 + 2x + 2y - 5 = 0` and the line `3x - y + 1 = 0`.

**MARK SPLIT:** setting up `U = 1` 1 · homogenising 3 · collecting 1 · angle 2

**ANSWER:**

```
   STEP 1   Let the curve meet the line at A and B. We want the pair OA, OB.
            Since both pass through the origin, their joint equation must be
            HOMOGENEOUS of degree 2.

   STEP 2   Rearrange the line so that the right-hand side is 1 :

                 3x - y + 1 = 0      ->      y - 3x  =  1

            Put   U = y - 3x  ,  so  U = 1  at A and at B.

   STEP 3   Homogenise the curve: multiply the degree-1 terms by U once and the
            constant by U^2 .

            x^2 + 2xy + y^2  +  (2x + 2y) U  -  5 U^2  =  0

            x^2 + 2xy + y^2 + (2x + 2y)(y - 3x) - 5(y - 3x)^2 = 0

   STEP 4   Expand.

            (2x + 2y)(y - 3x) = 2xy - 6x^2 + 2y^2 - 6xy
                              = -6x^2 - 4xy + 2y^2

            (y - 3x)^2 = 9x^2 - 6xy + y^2
            x (-5)     = -45x^2 + 30xy - 5y^2

   STEP 5   Collect.

            x^2 :   1  -  6  -  45   =  -50
            xy  :   2  -  4  +  30   =   28
            y^2 :   1  +  2  -   5   =   -2

            -50 x^2 + 28 x y - 2 y^2 = 0

            Divide by -2 :

                 25 x^2  -  14 x y  +  y^2  =  0        <- the pair OA, OB

   STEP 6   Angle.    a = 25 ,  2h = -14  ->  h = -7 ,  b = 1

            h^2 - ab = 49 - 25 = 24       sqrt(24) = 2 sqrt(6)
            a + b = 26

                            2 x 2 sqrt(6)      4 sqrt(6)      2 sqrt(6)
            tan(theta)  =  ---------------  =  -----------  =  ----------
                                 26                26              13
```

**FINAL ANSWER:** `theta = Arctan( 2 sqrt(6) / 13 )`, about 20 degrees 39 minutes.

**VERIFICATION:**
```
   The curve is (x + y)^2 + 2(x + y) - 5 = 0 , so x + y = -1 +/- sqrt(6).
   On the line y = 3x + 1, x + y = 4x + 1, giving x = (-2 +/- sqrt 6)/4 .

   A = (0.11237, 1.33712)  ->  slope OA = 11.899
   B = (-1.11237, -2.33712) ->  slope OB = 2.101

   Roots of  m^2 - 14m + 25 = 0  (from 25x^2 - 14xy + y^2 = 0 divided by x^2)
   are  7 +/- sqrt(24) = 11.899 and 2.101 .   MATCH

   abs( (11.899 - 2.101)/(1 + 11.899 x 2.101) ) = 9.798/26.00 = 0.3769
   and  2 sqrt(6)/13 = 0.3769 .                   CORRECT
```

---

### Q C3  — a standard "prove the theorem" long answer
If the equation `S = a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0` represents a
pair of **parallel** straight lines, prove that `h^2 = ab` and `a f^2 = b g^2`,
and that the distance between the two lines is

```
                     g^2 - a c
        2 . sqrt( ----------------- )
                    a ( a + b )
```

**ANSWER:**

```
   PART 1  (2 marks)   Why h^2 = ab .

        The two lines of S = 0 are parallel to the two lines of
        a x^2 + 2h xy + b y^2 = 0 .  Parallel means the angle is zero, so

               2 sqrt(h^2 - ab)
              ------------------  =  tan(0)  =  0     ->      h^2 = ab
                 abs(a + b)


   PART 2  (3 marks)   Getting the two lines.

        Multiply S by a and complete the square:

           a S = a^2x^2 + 2ahxy + ab y^2 + 2agx + 2afy + ac

        Using ab = h^2 , the first three terms are (a x + h y)^2 :

           a S = (a x + h y)^2 + 2 a g x + 2 a f y + a c

        Write   2 a g x = 2 g ( a x + h y ) - 2 g h y :

           a S = (a x + h y)^2 + 2 g ( a x + h y ) + 2 ( a f - g h ) y + a c

        For this to be a product of two PARALLEL lines it must be a quadratic
        in the single quantity ( a x + h y ), so the leftover y term must vanish:

                 a f - g h = 0     ->     a f = g h
        Squaring:  a^2 f^2 = g^2 h^2 = g^2 (a b) , and dividing by a :

                 a f^2  =  b g^2                                 PROVED

        With that term gone,

           (a x + h y)^2 + 2 g (a x + h y) + a c = 0

           a x + h y  =  -g  +/-  sqrt( g^2 - a c )

        so the two parallel lines are

           a x + h y + g - sqrt(g^2 - ac) = 0
           a x + h y + g + sqrt(g^2 - ac) = 0


   PART 3  (2 marks)   The distance.

        For two parallel lines A x + B y + C1 = 0 and A x + B y + C2 = 0,

              d = abs(C1 - C2)/sqrt(A^2 + B^2)

              2 sqrt(g^2 - a c)         2 sqrt(g^2 - a c)
        d = --------------------- = -----------------------      (h^2 = ab)
              sqrt( a^2 + h^2 )         sqrt( a^2 + a b )

                          g^2 - a c
          =  2 . sqrt( ----------------- )                       PROVED
                         a ( a + b )
```

**Worked check of the formula:** for `4x^2 + 12xy + 9y^2 + 8x + 12y - 5 = 0`
(a = 4, h = 6, b = 9, g = 4, c = -5) the formula gives
`2 sqrt(36/52) = 6/sqrt(13)`, and separating the lines gives `2x + 3y - 1 = 0`
and `2x + 3y + 5 = 0`, whose distance is `6/sqrt(13)`. **Correct.**

---

### Q C4  — a standard "prove the theorem" long answer
Prove that the equation of the pair of bisectors of the angles between the lines
`a x^2 + 2h xy + b y^2 = 0` is `h ( x^2 - y^2 ) = ( a - b ) x y`.

**ANSWER:**

```
   Let the two lines be  y = m1 x  and  y = m2 x , with inclinations alpha1 and
   alpha2, so that  m1 = tan(alpha1) ,  m2 = tan(alpha2) .

   From the pair,        m1 + m2 = -2h/b        m1 m2 = a/b          ...(*)

   STEP 1   A bisector lies exactly midway between the two lines, so if its
            inclination is theta then

                        alpha1 + alpha2
            theta  =  -------------------      i.e.   2 theta = alpha1 + alpha2
                               2

   STEP 2   Take tangents and use tan(A + B):

                              tan(alpha1) + tan(alpha2)          m1 + m2
            tan(2 theta)  =  ---------------------------  =  ---------------
                             1 - tan(alpha1) tan(alpha2)        1 - m1 m2

            Substitute (*) :

                              -2h / b            -2h / b            2h
            tan(2 theta)  =  ----------   =   -------------   =   -------
                              1 - a/b           (b - a)/b          a - b

   STEP 3   Let P(x, y) be any point on the bisector. Since the bisector passes
            through the origin with inclination theta,   tan(theta) = y/x .

            By the double-angle formula,

                              2 tan(theta)        2 (y/x)             2 x y
            tan(2 theta)  =  ---------------  =  -------------  =  -------------
                             1 - tan^2 theta      1 - y^2/x^2        x^2 - y^2

   STEP 4   The two expressions for tan(2 theta) must be equal:

                 2 x y             2 h
              -----------   =   ---------
               x^2 - y^2         a  -  b

                 x^2 - y^2          x y
                -----------   =   -------                  i.e.
                   a - b             h

                 h ( x^2 - y^2 )  =  ( a - b ) x y                 PROVED
```

**Note for the examiner (and a free check for you):** writing the result as
`h x^2 - (a - b) xy - h y^2 = 0`, the sum of the coefficients of `x^2` and `y^2`
is `h + (-h) = 0`, so the two bisectors are perpendicular — which they must be.

**Numerical check:** for `x^2 - 5xy + 4y^2 = 0` (a = 1, h = -5/2, b = 4) the
formula gives `5x^2 - 6xy - 5y^2 = 0`. The original slopes are 1 and 1/4
(inclinations 45.000 and 14.036 degrees), so the bisectors should have
inclinations 29.518 and 119.518, i.e. slopes 0.5662 and -1.7662. And
`5m^2 + 6m - 5 = 0` gives exactly `0.5662` and `-1.7662`. **Correct.**

---

### Q C5  — a standard "prove the theorem" long answer
Show that the area of the triangle formed by the lines
`a x^2 + 2h xy + b y^2 = 0` and the line `l x + m y + n = 0` is

```
             n^2 sqrt( h^2 - ab )
        --------------------------------
          abs( a m^2 - 2 h l m + b l^2 )
```

**ANSWER:**

```
   Let the pair be  y = m1 x  and  y = m2 x , meeting at the origin O.

   STEP 1   Find A, where y = m1 x cuts l x + m y + n = 0 :

                 l x + m (m1 x) + n = 0     ->     x = -n / (l + m m1)

                         -n                -n m1
            A  =  ( ------------- ,  ------------- )
                     l + m m1           l + m m1

            Similarly with m2 :

                         -n                -n m2
            B  =  ( ------------- ,  ------------- )
                     l + m m2           l + m m2

   STEP 2   Area of triangle OAB with O at the origin:

            Area = (1/2) abs( x_A y_B  -  x_B y_A )

                        1          n^2 m2                n^2 m1
                 = (1/2) abs( ------------------- - ------------------- )
                              (l+m m1)(l+m m2)      (l+m m2)(l+m m1)

                        n^2 . abs( m2 - m1 )
                 =  ---------------------------------
                       2 . abs( (l + m m1)(l + m m2) )

   STEP 3   Expand the denominator using the sum and product of the slopes:

            (l + m m1)(l + m m2) = l^2 + l m (m1 + m2) + m^2 m1 m2

                                            -2h            a
                                 = l^2 + lm(-----) + m^2 (---)
                                              b            b

                                    b l^2 - 2 h l m + a m^2
                                 = --------------------------
                                              b

   STEP 4   And, from  (m1 - m2)^2 = (m1 + m2)^2 - 4 m1 m2 ,

                                     2 sqrt( h^2 - a b )
            abs( m1 - m2 )   =    -----------------------
                                          abs( b )

   STEP 5   Put them together; the abs(b) cancels:

                        n^2         2 sqrt(h^2 - ab)          abs(b)
            Area  =  --------- x  -------------------- x --------------------
                         2              abs(b)            abs(am^2-2hlm+bl^2)

                        n^2 sqrt( h^2 - a b )
                  =  --------------------------------           PROVED
                      abs( a m^2 - 2 h l m + b l^2 )
```

**Numerical check:** for `18x^2 - 9xy + y^2 = 0` and `y = 9` (l = 0, m = 1, n = -9)
the formula gives `81 (3/2)/18 = 27/4`. The lines are `y = 3x` and `y = 6x`,
so the triangle has vertices `(0,0)`, `(3,9)`, `(3/2,9)` and area
`(1/2)(27 - 13.5) = 27/4`. **Correct.**

---

### Q C6
Find the value of `k` if the equation `2x^2 + k xy - 6y^2 + 3x + y + 1 = 0`
represents a pair of straight lines. For that value, find the point of
intersection and the angle between the lines.

**MARK SPLIT:** finding k 3 · point of intersection 2 · angle 2

**ANSWER:**

```
   STEP 1   a = 2 , h = k/2 , b = -6 , g = 3/2 , f = 1/2 , c = 1

   STEP 2   Apply the condition.

        abc  = (2)(-6)(1)                = -12
        2fgh = 2 (1/2)(3/2)(k/2)         =  3k/4
        af^2 = 2 (1/4)                   =  1/2
        bg^2 = (-6)(9/4)                 = -27/2
        ch^2 = (1)(k^2/4)                =  k^2/4

        -12 + 3k/4 - 1/2 + 27/2 - k^2/4 = 0
        -12 + 13.5 - 0.5 + 0.75k - 0.25k^2 = 0
              1 + 0.75 k - 0.25 k^2 = 0          (x by -4)
              k^2 - 3k - 4 = 0
              (k - 4)(k + 1) = 0
              k = 4    or    k = -1

        Take  k = 4 .   Then  h = 2 .

   STEP 3   Check the lines are real:  h^2 - ab = 4 - (2)(-6) = 16 > 0 .  YES

   STEP 4   Point of intersection.

        a x + h y + g = 0   ->   2x + 2y + 3/2 = 0   ->   4x + 4y + 3 = 0  ...(I)
        h x + b y + f = 0   ->   2x - 6y + 1/2 = 0   ->   4x - 12y + 1 = 0 ...(II)

        (I) - (II):   16y + 2 = 0    ->    y = -1/8

        From (I):     4x + 4(-1/8) + 3 = 0
                      4x - 1/2 + 3 = 0
                      4x = -5/2      ->     x = -5/8

        Point of intersection  =  ( -5/8 , -1/8 )

   STEP 5   Angle.

        h^2 - ab = 16       sqrt = 4
        a + b = 2 + (-6) = -4 ,  abs(a + b) = 4

        tan(theta) = 2(4)/4 = 2      ->     theta = Arctan(2)
```

**FINAL ANSWER:** `k = 4` (also `k = -1` works); the lines meet at `(-5/8, -1/8)`
and the angle between them is `Arctan(2)`, about 63 degrees 26 minutes.

**VERIFICATION:**
```
   With k = 4:  2x^2 + 4xy - 6y^2 = 2(x + 3y)(x - y) , and matching the rest
   gives  (x + 3y + 1)(2x - 2y + 1) = 0 .

   At (-5/8, -1/8):   -5/8 - 3/8 + 1 = 0                     OK
                      -10/8 + 2/8 + 1 = 0                    OK

   Slopes: -1/3 and 1 .
        abs( (-1/3 - 1)/(1 + (-1/3)(1)) ) = abs( (-4/3)/(2/3) ) = 2      OK
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Marks | Chance it appears |
|------|---------------|---------|-------|-------------------|
| 1 | Show `S = 0` is a pair; find the angle and the point of intersection | C | 7 | **Very high** |
| 2 | Homogenisation — angle subtended at the origin by a chord | C | 7 | **Very high** |
| 3 | Find `k` / `lambda` so the equation is a pair of lines | B | 4 | **Very high** |
| 4 | Angle between a homogeneous pair `a x^2 + 2h xy + b y^2 = 0` | A | 2 | **Very high** |
| 5 | Show the lines joining the origin are perpendicular (homogenisation) | B or C | 4 or 7 | High |
| 6 | Find `k` for a perpendicular / coincident pair | A | 2 | High |
| 7 | Separate the two lines of a 6-term equation | B | 4 | High |
| 8 | Prove the bisector formula `h(x^2 - y^2) = (a - b)xy` | C | 7 | Medium-high |
| 9 | Prove the area-of-triangle formula | C | 7 | Medium |
| 10 | Parallel pair: prove `h^2 = ab`, `af^2 = bg^2`, find the distance | C | 7 | Medium |
| 11 | Equations of the bisectors for a numerical pair | A or B | 2 or 4 | Medium |
| 12 | Product of the perpendiculars from a point | B | 4 | Medium |
| 13 | Pair through the origin perpendicular to a given pair | A | 2 | Medium |
| 14 | Slope conditions (`8h^2 = 9ab`, ratio `p : q`, `a + 2h = 0`) | A or B | 2 or 4 | Medium |
| 15 | Distance between the parallel lines (numerical) | A or B | 2 or 4 | Low-medium |

---

# HOW TO SPEND YOUR TIME IN THE EXAM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   1.  In SECTION A, find this chapter's question first.  It is      |
  |       almost always "find the angle" or "find k for perpendicular". |
  |       Both take under 90 seconds. Bank those 2 marks immediately.   |
  |                                                                    |
  |   2.  In SECTION B, if you see "find the value of k so that the     |
  |       equation represents a pair of lines" -- DO IT. It is pure     |
  |       arithmetic and it is the fastest 4 marks in the paper.        |
  |                                                                    |
  |   3.  In SECTION C, the pair-of-lines question has THREE separate   |
  |       parts (condition / angle / meeting point) worth roughly       |
  |       3 + 2 + 2. They do not depend on each other's answers.        |
  |       Even if one goes wrong, write the other two.                  |
  |                                                                    |
  |   4.  Never leave the first line blank. Just writing                |
  |       "a = _, h = _, b = _, g = _, f = _, c = _" correctly is       |
  |       worth a mark on its own.                                      |
  |                                                                    |
  +--------------------------------------------------------------------+
```
