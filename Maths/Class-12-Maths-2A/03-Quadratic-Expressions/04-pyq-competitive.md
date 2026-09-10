# Quadratic Expressions — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Quadratic Expressions / Equations:**

```
  AP EAPCET  (Maths, 80 questions)  ->  3 to 5
  TG EAPCET  (Maths, 80 questions)  ->  3 to 5
  JEE Main   (Maths, 25 questions)  ->  1 to 2
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Discriminant and the nature of the roots (free marks)

### Q1
The roots of `2x^2 - 6x + 3 = 0` are

(a) real and equal &nbsp;&nbsp; (b) real, distinct and irrational
&nbsp;&nbsp; (c) rational and distinct &nbsp;&nbsp; (d) complex

**ANSWER: (b)**
```
  D = (-6)^2 - 4(2)(3) = 36 - 24 = 12

  D > 0  ->  real and distinct
  12 is not a perfect square  ->  irrational
```

---

### Q2
If `x^2 - kx + 9 = 0` has equal roots, then k =

(a) 6 &nbsp;&nbsp; (b) +6 or -6 &nbsp;&nbsp; (c) +3 or -3 &nbsp;&nbsp; (d) 9

**ANSWER: (b)**
```
  D = k^2 - 36 = 0   ->   k^2 = 36   ->   k = 6 or -6
```

> **SHORTCUT:** whenever you land on `k^2 = number`, the answer has TWO signs.
> Options that give only the positive value are the trap option.

---

### Q3
`x^2 + 2(k + 2)x + 9k = 0` has equal roots for

(a) k = 1 or 4 &nbsp;&nbsp; (b) k = -1 or -4 &nbsp;&nbsp; (c) k = 2 or 3
&nbsp;&nbsp; (d) k = 1 or -4

**ANSWER: (a)**
```
  D = 4(k + 2)^2 - 36k = 0
      (k + 2)^2 - 9k    = 0
      k^2 + 4k + 4 - 9k = 0
      k^2 - 5k + 4      = 0
      (k - 1)(k - 4)    = 0     ->   k = 1 , 4
```

---

### Q4
If a, b, c are rational and the roots of `ax^2 + bx + c = 0` are irrational,
then `b^2 - 4ac` is

(a) zero &nbsp;&nbsp; (b) negative &nbsp;&nbsp;
(c) positive but not a perfect square &nbsp;&nbsp; (d) a perfect square

**ANSWER: (c)** — irrational roots need `D > 0` (so they are real) and `D` not
a perfect square (otherwise the square root would be rational).

---

### Q5
The number of real roots of `(x^2 + 2x + 3)(x^2 - 4x + 7) = 0` is

(a) 0 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (a)**
```
  First factor:   D = 4 - 12  = -8   < 0     no real roots
  Second factor:  D = 16 - 28 = -12  < 0     no real roots

  Total real roots = 0
```

> **SHORTCUT:** a product is zero only when a factor is zero. Test each factor's
> discriminant separately — never multiply the brackets out.

---

# PATTERN 2 — Sum, product and symmetric functions

### Q6
If alpha, beta are the roots of `x^2 - 6x + 8 = 0`, then `alpha^2 + beta^2` =

(a) 20 &nbsp;&nbsp; (b) 36 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 52

**ANSWER: (a)**
```
  S = 6 ,  P = 8
  alpha^2 + beta^2 = S^2 - 2P = 36 - 16 = 20
```

---

### Q7
If alpha, beta are the roots of `x^2 + 4x + 1 = 0`, then `alpha^3 + beta^3` =

(a) -52 &nbsp;&nbsp; (b) 52 &nbsp;&nbsp; (c) -64 &nbsp;&nbsp; (d) -76

**ANSWER: (a)**
```
  S = -4 ,  P = 1
  alpha^3 + beta^3 = S^3 - 3PS = (-64) - 3(1)(-4) = -64 + 12 = -52
```

---

### Q8
If alpha, beta are the roots of `x^2 - 5x + 3 = 0`, then `(alpha - beta)^2` =

(a) 13 &nbsp;&nbsp; (b) 19 &nbsp;&nbsp; (c) 37 &nbsp;&nbsp; (d) 25

**ANSWER: (a)**
```
  (alpha - beta)^2 = S^2 - 4P = 25 - 12 = 13
```

> **SHORTCUT:** `(alpha - beta)^2 = D / a^2`. Here `D = 25 - 12 = 13` and
> `a = 1`, so the answer is 13 in one line.

---

### Q9
If alpha, beta are the roots of `3x^2 - 6x + 4 = 0`, then

```
    alpha     beta          1        1
    ----- +  ------  +  2 ( ----- + ------ )  +  3 alpha beta   =
    beta     alpha         alpha    beta
```

(a) 6 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 10 &nbsp;&nbsp; (d) 12

**ANSWER: (b)**
```
  S = 6/3 = 2 ,   P = 4/3

  alpha/beta + beta/alpha = (S^2 - 2P)/P = (4 - 8/3)/(4/3)
                          = (4/3) / (4/3) = 1

  2(1/alpha + 1/beta)     = 2 (S/P) = 2 x ( 2 / (4/3) ) = 2 x (3/2) = 3

  3 alpha beta            = 3 (4/3) = 4

  TOTAL = 1 + 3 + 4 = 8
```

---

### Q10
One root of `x^2 + px + 12 = 0` is 4. If `x^2 + px + q = 0` has equal roots,
then q =

(a) 49/4 &nbsp;&nbsp; (b) 4/49 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 12

**ANSWER: (a)**
```
  4 is a root:   16 + 4p + 12 = 0   ->   4p = -28   ->   p = -7

  Equal roots:   p^2 - 4q = 0   ->   49 - 4q = 0   ->   q = 49/4
```

---

### Q11
If one root of `x^2 + px + q = 0` is double the other, then

(a) `p^2 = 9q` &nbsp;&nbsp; (b) `2p^2 = 9q` &nbsp;&nbsp;
(c) `9p^2 = 2q` &nbsp;&nbsp; (d) `p^2 = 4q`

**ANSWER: (b)**
```
  Let the roots be  alpha  and  2 alpha.

  SUM:      3 alpha  = -p        ->   alpha = -p/3

  PRODUCT:  2 alpha^2 = q        ->   2 (p^2/9) = q

                                 ->   2 p^2 = 9 q
```

---

### Q12
If the roots of `(a - b)x^2 + (b - c)x + (c - a) = 0` are equal, then

(a) `a + b = 2c` &nbsp;&nbsp; (b) `b + c = 2a` &nbsp;&nbsp;
(c) `c + a = 2b` &nbsp;&nbsp; (d) `a = b = c`

**ANSWER: (b)**
```
  Add the coefficients:  (a - b) + (b - c) + (c - a) = 0

  So x = 1 always satisfies the equation - 1 is always a root.

  If the roots are EQUAL, both roots must be 1, so the product is 1:

       c - a
      ------- = 1     ->   c - a = a - b   ->   b + c = 2a
       a - b
```

> **SHORTCUT:** if the coefficients of a quadratic add up to 0, then `x = 1` is
> a root. If they alternate to 0 (`a - b + c = 0`), then `x = -1` is a root.
> This kills many EAPCET questions in five seconds.

---

# PATTERN 3 — Forming a new equation from an old one

### Q13
If alpha, beta are the roots of `x^2 - 3x + 2 = 0`, the equation whose roots
are `1/alpha` and `1/beta` is

(a) `2x^2 - 3x + 1 = 0` &nbsp;&nbsp; (b) `x^2 - 3x + 2 = 0` &nbsp;&nbsp;
(c) `2x^2 + 3x + 1 = 0` &nbsp;&nbsp; (d) `x^2 + 3x + 2 = 0`

**ANSWER: (a)**
```
  REVERSE the coefficients   1 , -3 , 2   ->   2 , -3 , 1

                             2x^2 - 3x + 1 = 0
```

---

### Q14
The equation whose roots are 3 more than the roots of `x^2 - 5x + 6 = 0` is

(a) `x^2 - 11x + 30 = 0` &nbsp;&nbsp; (b) `x^2 + 11x + 30 = 0` &nbsp;&nbsp;
(c) `x^2 - 11x - 30 = 0` &nbsp;&nbsp; (d) `x^2 - 5x + 30 = 0`

**ANSWER: (a)**
```
  Replace x by  (x - 3) :

      (x - 3)^2 - 5(x - 3) + 6 = 0
      x^2 - 6x + 9 - 5x + 15 + 6 = 0
      x^2 - 11x + 30 = 0

  CHECK: old roots 2, 3  ->  new roots 5, 6
         5 + 6 = 11 , 5 x 6 = 30    YES
```

> **SHORTCUT:** you can skip the algebra completely. Find the old roots
> (2 and 3), add 3 to each (5 and 6), then test which option has sum 11 and
> product 30.

---

### Q15
The equation whose roots are the squares of the roots of `x^2 + 3x - 2 = 0` is

(a) `x^2 - 13x + 4 = 0` &nbsp;&nbsp; (b) `x^2 + 13x + 4 = 0` &nbsp;&nbsp;
(c) `x^2 - 13x - 4 = 0` &nbsp;&nbsp; (d) `x^2 - 5x + 4 = 0`

**ANSWER: (a)**
```
  S = -3 ,  P = -2

  New sum     = S^2 - 2P = 9 + 4 = 13
  New product = P^2      = 4

  x^2 - 13x + 4 = 0
```

---

### Q16
If alpha, beta are the roots of `ax^2 + bx + c = 0`, then the equation whose
roots are `alpha + 1/beta` and `beta + 1/alpha` is

(a) `acx^2 + b(a + c)x + (a + c)^2 = 0` &nbsp;&nbsp;
(b) `acx^2 - b(a + c)x + (a + c)^2 = 0`
(c) `acx^2 + b(a - c)x + (a - c)^2 = 0` &nbsp;&nbsp;
(d) `x^2 + bx + c = 0`

**ANSWER: (a)**
```
  S = -b/a ,  P = c/a

  Since  1/beta = alpha / (alpha beta) = alpha / P :

      alpha + 1/beta = alpha (1 + 1/P) = alpha (P + 1)/P
      beta  + 1/alpha = beta  (P + 1)/P

  NEW SUM      = S (P + 1)/P

                    -b     (c + a)/a       -b (a + c)
               =   ---- x -----------  =  -------------
                     a       c/a               a c

  NEW PRODUCT  = P . [(P + 1)/P]^2 = (P + 1)^2 / P

                  (c + a)^2 / a^2       (a + c)^2
               = ------------------ =  -----------
                       c/a                 a c

  x^2 - (new sum) x + (new product) = 0

           b(a + c)        (a + c)^2
   x^2 +  ----------- x + ------------  = 0
              a c              a c

  Multiply by ac:    a c x^2 + b(a + c) x + (a + c)^2 = 0
```

---

# PATTERN 4 — Common roots

### Q17
The common root of `x^2 - 5x + 6 = 0` and `x^2 - 8x + 15 = 0` is

(a) 2 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 6

**ANSWER: (b)**
```
  SUBTRACT the two equations:

      (-5x + 6) - (-8x + 15) = 0
             3x - 9          = 0
                        x    = 3
```

> **SHORTCUT:** when both leading coefficients are 1, just subtract. The x^2
> terms vanish and you are left with one linear equation.

---

### Q18
If `x^2 + 3x + 5 = 0` and `ax^2 + bx + c = 0` have a common root and
a, b, c are rational, then `a : b : c` =

(a) 1 : 3 : 5 &nbsp;&nbsp; (b) 3 : 1 : 5 &nbsp;&nbsp;
(c) 5 : 3 : 1 &nbsp;&nbsp; (d) 1 : 5 : 3

**ANSWER: (a)**
```
  D = 9 - 20 = -11 < 0 , so the roots of x^2 + 3x + 5 = 0 are
  COMPLEX CONJUGATES.

  Complex roots of a rational-coefficient equation always come in pairs.
  So if ONE is common, the OTHER must be common too - both roots are common.

  Therefore     a/1 = b/3 = c/5     ->    a : b : c  =  1 : 3 : 5
```

---

### Q19
`2x^2 + kx + 6 = 0` and `4x^2 + 10x + 12 = 0` have both roots common. Then k =

(a) 4 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) 10

**ANSWER: (b)**
```
   2       k        6
  --- =  ----- =  ------
   4      10        12

   1/2  =  k/10  =  1/2       ->    k = 5
```

---

# PATTERN 5 — Sign of a quadratic expression

### Q20
The expression `x^2 + 2x + 3` is

(a) positive for all real x &nbsp;&nbsp; (b) negative for all real x
(c) positive only when x > 0 &nbsp;&nbsp; (d) sometimes positive, sometimes negative

**ANSWER: (a)**
```
  a = 1 > 0   and   D = 4 - 12 = -8 < 0
  ->  the parabola opens upward and never meets the x-axis
  ->  positive for every real x
```

---

### Q21
`k x^2 - 2x + k < 0` for every real x when

(a) `k < -1` &nbsp;&nbsp; (b) `k > 1` &nbsp;&nbsp;
(c) `-1 < k < 1` &nbsp;&nbsp; (d) `k < 0`

**ANSWER: (a)**
```
  Two conditions are needed:

  (i)  k < 0                       (the parabola must open downward)

  (ii) D < 0 :   4 - 4k^2 < 0
                 k^2 > 1
                 ->  k < -1  or  k > 1

  Overlap of (i) and (ii):    k < -1
```

---

### Q22
`x^2 - (a - 3)x + a > 0` for all real x when

(a) `a < 1` &nbsp;&nbsp; (b) `a > 9` &nbsp;&nbsp;
(c) `1 < a < 9` &nbsp;&nbsp; (d) `a > 1`

**ANSWER: (c)**
```
  The coefficient of x^2 is 1 > 0 already, so we only need D < 0.

  (a - 3)^2 - 4a  <  0
  a^2 - 6a + 9 - 4a < 0
  a^2 - 10a + 9   <  0
  (a - 1)(a - 9)  <  0

                  +             -             +
          <------------- 1 ----------- 9 ------------>

  ->   1 < a < 9
```

---

# PATTERN 6 — Inequations

### Q23
The solution set of `x^2 - 7x + 12 < 0` is

(a) `(3, 4)` &nbsp;&nbsp; (b) `(-inf, 3) U (4, inf)` &nbsp;&nbsp;
(c) `[3, 4]` &nbsp;&nbsp; (d) empty

**ANSWER: (a)**
```
  x^2 - 7x + 12 = (x - 3)(x - 4)     roots 3, 4 ,  a = 1 > 0

                  +             -             +
          <------------- 3 ----------- 4 ------------>

  We want < 0  ->  BETWEEN the roots, endpoints excluded  ->  (3, 4)
```

---

### Q24
The solution set of `x^2 - 9 >= 0` is

(a) `[-3, 3]` &nbsp;&nbsp; (b) `(-inf, -3] U [3, inf)` &nbsp;&nbsp;
(c) `(-3, 3)` &nbsp;&nbsp; (d) all real numbers

**ANSWER: (b)**
```
  (x - 3)(x + 3) >= 0      roots -3 , 3 ,  a > 0

  >= 0  ->  OUTSIDE, endpoints included.
```

---

### Q25
The solution set of `(x - 2)/(x + 3) > 0` is

(a) `(-3, 2)` &nbsp;&nbsp; (b) `(-inf, -3) U (2, inf)` &nbsp;&nbsp;
(c) `[-3, 2]` &nbsp;&nbsp; (d) `(2, inf)`

**ANSWER: (b)**
```
  Critical points:  x = 2  (numerator zero)  and  x = -3  (denominator zero).

                  +             -             +
          <------------ -3 ----------- 2 ------------>
                       (open)        (open)

  We want > 0  ->  the outside regions.
  x = -3 is NEVER allowed, and x = 2 makes the fraction 0, not > 0.

  ANSWER:   x < -3   or   x > 2
```

> **SHORTCUT:** for a fraction, mark the zeros of the TOP and the BOTTOM on the
> same number line and use the same `+ - +` pattern. Bottom zeros are always
> excluded.

---

# PATTERN 7 — Maximum, minimum and range

### Q26
The minimum value of `x^2 + 6x + 11` is

(a) 2 &nbsp;&nbsp; (b) 11 &nbsp;&nbsp; (c) -3 &nbsp;&nbsp; (d) 6

**ANSWER: (a)**
```
  a = 1 > 0  ->  minimum.
  x = -b/(2a) = -6/2 = -3
  value = 9 - 18 + 11 = 2
```

> **SHORTCUT:** for `x^2 + bx + c` with a = 1, the minimum is `c - b^2/4`.
> Here `11 - 36/4 = 11 - 9 = 2`.

---

### Q27
The maximum value of `5 + 20x - 4x^2` is

(a) 25 &nbsp;&nbsp; (b) 30 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 20

**ANSWER: (b)**
```
  a = -4 < 0  ->  maximum.

           -20        5
  x  =  --------- = -----
          2(-4)       2

  value = 5 + 20(5/2) - 4(25/4) = 5 + 50 - 25 = 30
```

---

### Q28
The range of `x^2 - 4x + 9` is

(a) `[5, inf)` &nbsp;&nbsp; (b) `(-inf, 5]` &nbsp;&nbsp;
(c) `[9, inf)` &nbsp;&nbsp; (d) all real numbers

**ANSWER: (a)**
```
  a = 1 > 0  ->  minimum at x = 2 , value = 4 - 8 + 9 = 5
  The curve rises without limit above that.
  Range = [5 , infinity)
```

---

### Q29
If `f(x) = x^2 + 2bx + 2c^2` and `g(x) = -x^2 - 2cx + b^2` and
`min f(x) > max g(x)`, then

(a) `|c| > |b| sqrt(2)` &nbsp;&nbsp; (b) `|c| < |b| sqrt(2)` &nbsp;&nbsp;
(c) `0 < c < b sqrt(2)` &nbsp;&nbsp; (d) no such b, c exist

**ANSWER: (a)**
```
  min f(x) :  a = 1 > 0 ,  D = 4b^2 - 8c^2

                 -D      -(4b^2 - 8c^2)
      min f  =  ----- = ----------------- = 2c^2 - b^2
                 4a            4

  max g(x) :  a = -1 < 0 ,  D = 4c^2 + 4b^2

                 -D      -(4c^2 + 4b^2)
      max g  =  ----- = ----------------- = b^2 + c^2
                 4a           -4

  Require   2c^2 - b^2  >  b^2 + c^2
                  c^2   >  2 b^2
                 |c|    >  sqrt(2) |b|
```

---

# PATTERN 8 — Range of a rational expression

### Q30
If x is real, the range of `(x^2 - 2x + 4) / (x^2 + 2x + 4)` is

(a) `[1/3, 3]` &nbsp;&nbsp; (b) `[1/2, 2]` &nbsp;&nbsp;
(c) `(0, 1]` &nbsp;&nbsp; (d) all real numbers

**ANSWER: (a)**
```
  Denominator x^2 + 2x + 4 :  D = 4 - 16 = -12 < 0 , never zero.

  y(x^2 + 2x + 4) = x^2 - 2x + 4

  (y - 1)x^2 + (2y + 2)x + (4y - 4) = 0

  B^2 - 4AC >= 0 :

     4(y + 1)^2 - 16(y - 1)^2 >= 0

     (y + 1)^2 - 4(y - 1)^2   >= 0

     ( y + 1 - 2y + 2 )( y + 1 + 2y - 2 ) >= 0

          ( 3 - y )( 3y - 1 ) >= 0

     ->   1/3 <= y <= 3
```

---

### Q31
The number of INTEGERS in the range of `(x + 2) / (2x^2 + 3x + 6)` for real x is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 3

**ANSWER: (b)**
```
  From the standard working, the range is  [ -1/13 , 1/3 ].

                 -1/13  ~  -0.077        1/3  ~  0.333

  The only integer inside that interval is  0.

  So the count is 1.
```

> **SHORTCUT:** once you know the range is a short interval around 0, just ask
> "how many whole numbers fit inside?" Do not re-derive anything.

---

### Q32
If x is real, the range of `1 / (x^2 - 3x + 4)` is

(a) `(0, 4/7]` &nbsp;&nbsp; (b) `[4/7, inf)` &nbsp;&nbsp;
(c) `(0, 7/4]` &nbsp;&nbsp; (d) all real numbers

**ANSWER: (a)**
```
  Look at the DENOMINATOR first.

  x^2 - 3x + 4 :  a = 1 > 0 ,  D = 9 - 16 = -7 < 0
  ->  always positive.

  Its minimum:   x = 3/2 ,  value = 9/4 - 9/2 + 4 = 7/4

  So   x^2 - 3x + 4   runs over   [ 7/4 , infinity )

  Taking reciprocals of positive numbers FLIPS the interval:

       1 / (x^2 - 3x + 4)   runs over   ( 0 , 4/7 ]
```

> **SHORTCUT:** when the numerator is a constant, do NOT cross-multiply. Find
> the range of the denominator and take reciprocals. It is three lines instead
> of fifteen.

---

# PATTERN 9 — Location of the roots

### Q33
Both roots of `x^2 - 2kx + k^2 + k - 5 = 0` are less than 5. Then

(a) `k < 4` &nbsp;&nbsp; (b) `4 <= k <= 5` &nbsp;&nbsp;
(c) `5 < k <= 6` &nbsp;&nbsp; (d) `k > 6`

**ANSWER: (a)**
```
  f(x) = x^2 - 2kx + k^2 + k - 5 ,   a = 1 > 0

  (1)  D >= 0 :
       4k^2 - 4(k^2 + k - 5) >= 0
       -4k + 20 >= 0     ->    k <= 5

  (2)  a . f(5) > 0 :
       25 - 10k + k^2 + k - 5 > 0
       k^2 - 9k + 20 > 0
       (k - 4)(k - 5) > 0    ->   k < 4  or  k > 5

  (3)  vertex left of 5 :
       -b/(2a) = k  <  5

  Overlap:

      (1)  <===================5]
      (2)  <=========4)             (5======>
      (3)  <===================5)

      Common part:   k < 4
```

---

### Q34
Both roots of `x^2 + m x + 4 = 0` are negative when

(a) `m >= 4` &nbsp;&nbsp; (b) `m <= -4` &nbsp;&nbsp;
(c) `-4 < m < 4` &nbsp;&nbsp; (d) `m > 0`

**ANSWER: (a)**
```
  (1)  D >= 0 :   m^2 - 16 >= 0   ->   m <= -4  or  m >= 4

  (2)  SUM < 0 :  -m < 0          ->   m > 0

  (3)  PRODUCT > 0 :  4 > 0       ->   always true

  Overlap of (1) and (2):   m >= 4

  CHECK m = 5 :  x^2 + 5x + 4 = (x + 1)(x + 4)  ->  roots -1 , -4   YES
```

---

### Q35
The roots of `x^2 + (k - 2)x + k = 0` are of opposite signs when

(a) `k > 0` &nbsp;&nbsp; (b) `k < 0` &nbsp;&nbsp;
(c) `k = 0` &nbsp;&nbsp; (d) `0 < k < 2`

**ANSWER: (b)**
```
  Opposite signs  ->  PRODUCT < 0

       c       k
  P = --- =  ----- = k  <  0     ->    k < 0
       a       1
```

> **SHORTCUT:** "opposite signs" is a ONE-STEP question. Look only at `c/a`.
> Never compute the discriminant — `P < 0` already forces `D > 0`.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  "equal roots" / "repeated root"  |  set  D = b^2 - 4ac = 0            |
  |  "real roots"                     |  D >= 0   (allow equality!)        |
  |  "no real roots" / "imaginary"    |  D < 0                             |
  |  "rational roots"                 |  D is a perfect square             |
  |  coefficients add up to 0         |  x = 1 is a root - factor it out   |
  |  a - b + c = 0                    |  x = -1 is a root                  |
  |  "roots of opposite signs"        |  only check  c/a < 0               |
  |  "both roots positive"            |  D >= 0 , -b/a > 0 , c/a > 0       |
  |  "both roots greater than k"      |  D >= 0 , a.f(k) > 0 , -b/2a > k   |
  |  "k lies between the roots"       |  a . f(k) < 0   (one line!)        |
  |  "positive for all x"             |  a > 0  AND  D < 0                 |
  |  "negative for all x"             |  a < 0  AND  D < 0                 |
  |  max or min asked                 |  x = -b/2a , value = -D/4a         |
  |  a > 0 and "maximum" is an option |  it is a trap - there is no max    |
  |  range of a fraction              |  cross-multiply, then B^2-4AC >= 0 |
  |  numerator is a CONSTANT          |  range the denominator, then       |
  |                                   |  take reciprocals - much faster    |
  |  "form the equation with roots.." |  x^2 - Sx + P = 0                  |
  |  reciprocal roots wanted          |  reverse the coefficients          |
  |  options are algebraic formulas   |  plug in easy numbers and test     |
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
```

---

# THE ROOT-SUBSTITUTION TRICK

If a question asks for "the equation whose roots are ..." and the options are
four quadratic equations:

```
  STEP 1   Find the ACTUAL roots of the given equation (they are usually
           small whole numbers like 2 and 3).
  STEP 2   Apply the transformation to those numbers by hand.
           (squares -> 4 and 9 ;  plus 3 -> 5 and 6 ;  reciprocals -> 1/2, 1/3)
  STEP 3   Compute the SUM and PRODUCT of the new numbers.
  STEP 4   The correct option is the one with  -sum  as the middle coefficient
           and  product  as the constant.
```

This turns a 3-minute algebra derivation into a 20-second arithmetic check.
Use it every single time the options are equations rather than numbers.
