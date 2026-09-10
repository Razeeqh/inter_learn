# Theory of Equations — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Theory of Equations:**

```
  AP EAPCET  (Maths, 80 questions)  ->  1 to 3
  TG EAPCET  (Maths, 80 questions)  ->  1 to 3
  JEE Main   (Maths, 25 questions)  ->  0 to 1  (usually blended into the
                                         Quadratic Equations question)
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

> **The single biggest EAPCET tip for this chapter:** most options can be killed
> by substituting a candidate root, or by checking the sum/product of the roots
> against `-b/a` and `-d/a`. You almost never have to solve anything fully.

---

# PATTERN 1 — Read s1, s2, s3 straight off the equation (free marks)

### Q1
The sum of the roots of `2x^3 - 5x^2 + 7x - 3 = 0` is

(a) 5/2 &nbsp;&nbsp; (b) -5/2 &nbsp;&nbsp; (c) 7/2 &nbsp;&nbsp; (d) 3/2

**ANSWER: (a)** — `s1 = -b/a = -(-5)/2 = 5/2`

---

### Q2
The product of the roots of `3x^4 + 2x^3 - x + 5 = 0` is

(a) -5/3 &nbsp;&nbsp; (b) 5/3 &nbsp;&nbsp; (c) -2/3 &nbsp;&nbsp; (d) 1/3

**ANSWER: (b)** — for a quartic the product is `+e/a = 5/3` (even degree, plus sign).

> **SHORTCUT:** product of the roots is `+` for even degree and `-` for odd degree.
> Odd degree: `-d/a`. Even degree: `+e/a`. Nothing else to remember.

---

### Q3
If A, B, C are the roots of `x^3 - 3x + 2 = 0`, then `AB + BC + CA` =

(a) 0 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) -3 &nbsp;&nbsp; (d) 2

**ANSWER: (c)** — `s2 = c/a = -3/1 = -3`. (The missing x^2 term means s1 = 0.)

---

### Q4
The sum of the squares of the roots of `x^3 - 3x^2 + 4x - 5 = 0` is

(a) 9 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 17 &nbsp;&nbsp; (d) -1

**ANSWER: (b)**
```
  s1 = 3 , s2 = 4
  Sum of squares = s1^2 - 2 s2 = 9 - 8 = 1
```

---

### Q5
If A, B, C are the roots of `x^3 + 2x^2 - 3x - 1 = 0`, then `1/A + 1/B + 1/C` =

(a) 3 &nbsp;&nbsp; (b) -3 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (b)**
```
  s2 = c/a = -3 ,   s3 = -d/a = -(-1)/1 = 1
  Sum of reciprocals = s2/s3 = -3/1 = -3
```

---

### Q6
If A, B, C are the roots of `x^3 + px^2 + qx + r = 0`, then `1/A + 1/B + 1/C` =

(a) q/r &nbsp;&nbsp; (b) -q/r &nbsp;&nbsp; (c) p/r &nbsp;&nbsp; (d) -p/q

**ANSWER: (b)** — `s2 = q`, `s3 = -r`, so `s2/s3 = q/(-r) = -q/r`.

---

### Q7
The sum of the cubes of the roots of `x^3 - 6x^2 + 11x - 6 = 0` is

(a) 36 &nbsp;&nbsp; (b) 14 &nbsp;&nbsp; (c) 27 &nbsp;&nbsp; (d) 6

**ANSWER: (a)**
```
  s1^3 - 3 s1 s2 + 3 s3 = 216 - 198 + 18 = 36
  (check: the roots are 1, 2, 3 and 1 + 8 + 27 = 36)
```

---

### Q8
If A, B, C, D are the roots of `x^4 + x^3 + x^2 + x + 1 = 0`, then `ABCD` =

(a) -1 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) -2

**ANSWER: (b)** — `s4 = +e/a = 1`.

---

# PATTERN 2 — Transformation of equations

### Q9
The equation whose roots are the reciprocals of the roots of
`2x^3 - 3x^2 + 5x - 7 = 0` is

(a) 7x^3 - 5x^2 + 3x - 2 = 0 &nbsp;&nbsp; (b) 7x^3 + 5x^2 + 3x + 2 = 0
(c) 2x^3 - 5x^2 + 3x - 7 = 0 &nbsp;&nbsp; (d) 7x^3 - 3x^2 + 5x - 2 = 0

**ANSWER: (a)**
```
  Reverse the coefficients  2, -3, 5, -7   ->   -7, 5, -3, 2
      -7x^3 + 5x^2 - 3x + 2 = 0
  Multiply by -1:
       7x^3 - 5x^2 + 3x - 2 = 0
```

> **SHORTCUT:** "reciprocals of the roots" = **reverse the coefficient list**.
> One second. No algebra at all.

---

### Q10
The equation whose roots are twice the roots of `x^3 - 3x^2 + 2x - 1 = 0` is

(a) x^3 - 6x^2 + 8x - 8 = 0 &nbsp;&nbsp; (b) x^3 - 6x^2 + 4x - 2 = 0
(c) x^3 - 3x^2 + 4x - 8 = 0 &nbsp;&nbsp; (d) 8x^3 - 6x^2 + 2x - 1 = 0

**ANSWER: (a)**
```
  Multiply the coefficients by  1, k, k^2, k^3  with k = 2:
      1x1 = 1 ,  -3x2 = -6 ,  2x4 = 8 ,  -1x8 = -8
```

> **SHORTCUT:** "roots multiplied by k" = multiply the coefficients by
> 1, k, k^2, k^3, ... reading left to right.

---

### Q11
The equation whose roots are the negatives of the roots of
`x^3 - 3x^2 + 4x - 5 = 0` is

(a) x^3 + 3x^2 + 4x + 5 = 0 &nbsp;&nbsp; (b) x^3 + 3x^2 - 4x - 5 = 0
(c) x^3 - 3x^2 - 4x + 5 = 0 &nbsp;&nbsp; (d) x^3 + 3x^2 + 4x - 5 = 0

**ANSWER: (a)**
```
  Replace x by -x :   -x^3 - 3x^2 - 4x - 5 = 0
  Multiply by -1  :    x^3 + 3x^2 + 4x + 5 = 0
```

> **SHORTCUT:** "negatives of the roots" = flip the sign of every ODD-power term.

---

### Q12
The equation whose roots are the squares of the roots of
`x^3 - x^2 + 2x - 3 = 0` is

(a) y^3 + 3y^2 - 2y - 9 = 0 &nbsp;&nbsp; (b) y^3 - 3y^2 + 2y - 9 = 0
(c) y^3 + 3y^2 + 2y + 9 = 0 &nbsp;&nbsp; (d) y^3 - y^2 + 4y - 9 = 0

**ANSWER: (a)**
```
  Original:  s1 = 1 , s2 = 2 , s3 = 3

  new s1 = s1^2 - 2 s2   = 1 - 4          = -3
  new s2 = s2^2 - 2 s1 s3 = 4 - 6         = -2
  new s3 = s3^2           = 9

  Equation:  y^3 - (-3)y^2 + (-2)y - 9 = 0   ->   y^3 + 3y^2 - 2y - 9 = 0

  (Direct check:  x^3 + 2x = x^2 + 3  ->  x^2(x^2+2)^2 = (x^2+3)^2
                  y(y+2)^2 = (y+3)^2  ->  y^3 + 3y^2 - 2y - 9 = 0.  SAME.)
```

> **SHORTCUT for "squares of the roots":** use the three s-formulas
> `s1^2 - 2s2` , `s2^2 - 2 s1 s3` , `s3^2`. Far faster than the squaring method.

---

### Q13
The equation whose roots are those of `x^3 - 6x^2 + 11x - 6 = 0` each diminished
by 1 is

(a) y^3 - 3y^2 + 2y = 0 &nbsp;&nbsp; (b) y^3 - 3y^2 + 2y - 1 = 0
(c) y^3 + 3y^2 + 2y = 0 &nbsp;&nbsp; (d) y^3 - 9y^2 + 2y = 0

**ANSWER: (a)**
```
  The roots of the original are 1, 2, 3.  Diminished by 1 they become 0, 1, 2.
  s1 = 3 , s2 = 2 , s3 = 0
      y^3 - 3y^2 + 2y - 0 = 0
```

> **SHORTCUT:** if the original roots are easy to spot, just shift them and rebuild.
> If not, use synthetic division. Also: the constant term of the new equation is
> always `f(k)` — an instant one-step check on the options.

---

### Q14
To remove the second term from `x^4 + 8x^3 + x - 5 = 0` the roots must be
diminished by

(a) 2 &nbsp;&nbsp; (b) -2 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) -8

**ANSWER: (b)**
```
       - a1        - 8
  h = ------- = --------- = -2
       n a0      4 x 1
```

---

# PATTERN 3 — Roots in AP / GP / HP (use the middle-root shortcut)

### Q15
If the roots of `x^3 - 12x^2 + 39x - 28 = 0` are in AP, then the roots are

(a) 1, 4, 7 &nbsp;&nbsp; (b) 2, 4, 6 &nbsp;&nbsp; (c) -1, 4, 9 &nbsp;&nbsp; (d) 1, 4, 6

**ANSWER: (a)**
```
  Middle root = -b/(3a) = 12/3 = 4.        (kills options with no 4 - none here)
  Sum must be 12 :  (a) 1+4+7 = 12  YES
                    (b) 2+4+6 = 12  YES
                    (c) -1+4+9 = 12 YES
                    (d) 1+4+6 = 11  no
  Product must be 28 : (a) 28  YES     (b) 48  no     (c) -36  no

  CHECK x = 7 :  343 - 588 + 273 - 28 = 0     YES
```

> **SHORTCUT:** roots in AP -> **middle root = -b/(3a)**, instantly.

---

### Q16
If the roots of `x^3 - 7x^2 + 14x - 8 = 0` are in GP, the middle root is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 8

**ANSWER: (b)** — middle root = cube root of `(-d/a)` = cube root of 8 = **2**.

---

### Q17
If the roots of `6x^3 - 11x^2 + 6x - 1 = 0` are in HP, the middle root is

(a) 1 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) 1/3 &nbsp;&nbsp; (d) 2

**ANSWER: (b)**
```
  Middle root = -3d/c = -3(-1)/6 = 1/2

  CHECK x = 1/2 :  6(1/8) - 11(1/4) + 3 - 1 = 3/4 - 11/4 + 8/4 = 0    YES
  (The roots are 1, 1/2, 1/3 -- reciprocals 1, 2, 3 are in AP.)
```

---

### Q18
If the roots of `27x^3 + 42x^2 - 28x - 8 = 0` are in GP, then the roots are

(a) -2, 2/3, -2/9 &nbsp;&nbsp; (b) 2, 2/3, 2/9 &nbsp;&nbsp; (c) -1, 2/3, -4/9 &nbsp;&nbsp; (d) 1, 2, 4

**ANSWER: (a)**
```
  Product = -d/a = 8/27   ->   middle root a = cube root(8/27) = 2/3

  CHECK 2/3 :  27(8/27) + 42(4/9) - 28(2/3) - 8
            =    8    +   168/9  -  56/3   - 8  =  168/9 - 168/9 = 0   YES

  Sum = -42/27 = -14/9 , so (2/3)(1/r + 1 + r) = -14/9
        1/r + r = -10/3   ->   3r^2 + 10r + 3 = 0   ->   r = -3 or -1/3

  r = -3  ->  roots  -2/9 , 2/3 , -2

  CHECK -2 :  27(-8) + 42(4) + 56 - 8 = -216 + 168 + 56 - 8 = 0        YES
```

---

### Q19
If the roots of `x^3 - px^2 + qx - r = 0` are in AP, then

(a) 2p^3 - 9pq + 27r = 0 &nbsp;&nbsp; (b) p^3 - 9pq + 27r = 0
(c) 2p^3 + 9pq - 27r = 0 &nbsp;&nbsp; (d) q^3 = p^3 r

**ANSWER: (a)**
```
  Middle root a = p/3, and it must satisfy the equation:

       (p/3)^3 - p(p/3)^2 + q(p/3) - r = 0        | x 27

        p^3 - 3p^3 + 9pq - 27r = 0
       -2p^3 + 9pq - 27r = 0
        2p^3 - 9pq + 27r = 0
```

---

### Q20
If the roots of `x^3 - px^2 + qx - r = 0` are in GP, then

(a) q^3 = p^3 r &nbsp;&nbsp; (b) p^3 = q^3 r &nbsp;&nbsp; (c) q^3 = p r^3 &nbsp;&nbsp; (d) p q = r

**ANSWER: (a)**
```
  Middle root a satisfies a^3 = r , so a = r^(1/3), and a is a root.
  Quick numerical test with  x^3 - 7x^2 + 14x - 8 = 0  (roots 1, 2, 4 in GP):
        p = 7 , q = 14 , r = 8
        q^3 = 2744 ,   p^3 r = 343 x 8 = 2744        EQUAL.   So (a).
```

> **SHORTCUT:** when a formula option looks abstract, plug in a small equation
> whose roots you already know. Only one option will survive.

---

# PATTERN 4 — Conjugate (imaginary and surd) roots

### Q21
If `1 - i` is a root of `x^2 + ax + b = 0` where a and b are real, then (a, b) =

(a) (2, 2) &nbsp;&nbsp; (b) (-2, 2) &nbsp;&nbsp; (c) (2, -2) &nbsp;&nbsp; (d) (-2, -2)

**ANSWER: (b)**
```
  Real coefficients -> the other root is 1 + i.
  Sum     = 2       ->  -a = 2   ->  a = -2
  Product = 1 + 1 = 2  ->  b = 2
```

---

### Q22
The polynomial equation of lowest degree with rational coefficients having
`sqrt(2) + sqrt(3)` as a root is

(a) x^4 - 10x^2 + 1 = 0 &nbsp;&nbsp; (b) x^4 - 10x^2 - 1 = 0
(c) x^4 - 5x^2 + 6 = 0 &nbsp;&nbsp; (d) x^2 - 5 = 0

**ANSWER: (a)**
```
  x = sqrt2 + sqrt3
  x^2 = 2 + 2 sqrt6 + 3 = 5 + 2 sqrt6
  x^2 - 5 = 2 sqrt6
  (x^2 - 5)^2 = 24
  x^4 - 10x^2 + 25 = 24
  x^4 - 10x^2 + 1 = 0
```

---

### Q23
A polynomial equation of degree 5 with real coefficients has `2 + 3i` and `1 - i`
among its roots. The number of REAL roots it must have is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 3

**ANSWER: (b)**
```
  The conjugates 2 - 3i and 1 + i are forced to be roots too -> 4 imaginary roots.
  5 - 4 = 1 real root.
```

> **SHORTCUT:** imaginary roots always come in pairs, so an odd-degree equation
> with real coefficients always has an odd number of real roots — at least one.

---

### Q24
If `2 + sqrt(3)` is a root of an equation with RATIONAL coefficients, the quadratic
factor it contributes is

(a) x^2 - 4x + 1 &nbsp;&nbsp; (b) x^2 - 4x + 7 &nbsp;&nbsp; (c) x^2 + 4x + 1 &nbsp;&nbsp; (d) x^2 - 4x - 1

**ANSWER: (a)** — sum = 4, product = `4 - 3 = 1`.

> **SHORTCUT:** the constant of the factor is `p^2 + q^2` for `p + iq` (PLUS)
> but `p^2 - q` for `p + sqrt(q)` (MINUS). That sign is the whole question.

---

### Q25
If `2 + i sqrt(3)` is a root of an equation with REAL coefficients, the quadratic
factor it contributes is

(a) x^2 - 4x + 1 &nbsp;&nbsp; (b) x^2 - 4x + 7 &nbsp;&nbsp; (c) x^2 + 4x + 7 &nbsp;&nbsp; (d) x^2 - 4x - 7

**ANSWER: (b)** — sum = 4, product = `4 + 3 = 7`.

---

# PATTERN 5 — Repeated roots and relations between roots

### Q26
The repeated root of `x^3 - 3x + 2 = 0` is

(a) -2 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -1

**ANSWER: (b)**
```
  A repeated root satisfies both f(x) = 0 and f'(x) = 0.
  f'(x) = 3x^2 - 3 = 0   ->   x = 1 or x = -1
  f(1) = 1 - 3 + 2 = 0        YES  ->  repeated root is 1
  f(-1) = -1 + 3 + 2 = 4      no
  (The roots are 1, 1, -2.)
```

> **SHORTCUT:** repeated root  <=>  f(x) = 0 AND f'(x) = 0. Solve the derivative
> first — it is one degree lower and usually factorises instantly.

---

### Q27
The multiplicity of the root `x = 1` in `x^4 - 2x^3 + 2x - 1 = 0` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  Divide by (x - 1) repeatedly:

     1 |  1   -2    0    2   -1        1 |  1   -1   -1    1
       |       1   -1   -1    1          |       1    0   -1
       +-------------------------        +--------------------
          1   -1   -1    1    0             1    0   -1    0

  Quotient now x^2 - 1 = (x-1)(x+1), so one more factor of (x - 1).
  Altogether  (x - 1)^3 (x + 1) = 0  ->  multiplicity of 1 is 3.

  CHECK: (x-1)^3(x+1) = (x^3-3x^2+3x-1)(x+1) = x^4 - 2x^3 + 2x - 1    YES
```

---

### Q28
If the sum of two roots of `x^3 - 5x^2 - 4x + 20 = 0` is zero, the third root is

(a) -5 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (b)** — the two cancel in `s1`, so the third root = `s1 = 5`.
Check: `125 - 125 - 20 + 20 = 0`.

---

### Q29
If one root of `2x^3 - 11x^2 + 17x - 6 = 0` is the reciprocal of another, the third
root is

(a) 2 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) -3

**ANSWER: (c)** — the reciprocal pair multiplies to 1, so the third root equals the
product of all roots = `-d/a = 6/2 = 3`. Check: `54 - 99 + 51 - 6 = 0`.

---

### Q30
If the roots of `a x^2 + b x + c = 0` are in the ratio p : q, then

(a) pq b^2 = (p+q)^2 ac &nbsp;&nbsp; (b) pq a^2 = (p+q)^2 bc
(c) (p+q) b^2 = pq ac &nbsp;&nbsp; (d) pq c^2 = (p+q)^2 ab

**ANSWER: (a)**
```
  Roots pk and qk :   (p+q)k = -b/a  and  pq k^2 = c/a
  Square the first:  (p+q)^2 k^2 = b^2/a^2 ,  and k^2 = c/(a pq)

       (p+q)^2 c        b^2
       ----------  =  -------      ->    pq b^2 = (p+q)^2 a c
         a pq            a^2
```

---

# PATTERN 6 — Reciprocal equations

### Q31
`x^5 - 5x^4 + 9x^3 - 9x^2 + 5x - 1 = 0` is a reciprocal equation of

(a) class one, odd degree &nbsp;&nbsp; (b) class two, odd degree
(c) class one, even degree &nbsp;&nbsp; (d) not a reciprocal equation

**ANSWER: (b)**
```
  Coefficients 1, -5, 9, -9, 5, -1 : equidistant pairs are EQUAL IN SIZE but
  OPPOSITE IN SIGN  ->  class two.  Degree 5 is odd.
  Hence x = +1 is a root:  1 - 5 + 9 - 9 + 5 - 1 = 0     YES
```

---

### Q32
For a class ONE reciprocal equation of ODD degree, one root is always

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) i

**ANSWER: (b)**

```
  +-------------------------------------------------------+
  |   class ONE  + odd degree   ->   x = -1               |
  |   class TWO  + odd degree   ->   x = +1               |
  |   class TWO  + even degree  ->   x = +1  and  x = -1  |
  +-------------------------------------------------------+
```

---

### Q33
The roots of `x^4 - 10x^3 + 26x^2 - 10x + 1 = 0` are

(a) 2 +/- sqrt3 , 3 +/- 2 sqrt2 &nbsp;&nbsp; (b) 1 +/- sqrt2 , 2 +/- sqrt3
(c) 2 +/- sqrt5 , 3 +/- sqrt5 &nbsp;&nbsp; (d) 1, -1, 5, 1/5

**ANSWER: (a)**
```
  Class one, even degree.  Divide by x^2 and put y = x + 1/x :

     (y^2 - 2) - 10y + 26 = 0   ->   y^2 - 10y + 24 = 0   ->   y = 4 , 6

     y = 4 :  x^2 - 4x + 1 = 0   ->   x = 2 +/- sqrt3
     y = 6 :  x^2 - 6x + 1 = 0   ->   x = 3 +/- 2 sqrt2

  CHECK: product of all roots = (4-3)(9-8) = 1 = e/a     YES
         sum of all roots = 4 + 6 = 10 = -b/a            YES
```

> **SHORTCUT:** in a reciprocal equation the roots must come in pairs whose
> product is 1. Option (b) fails that test instantly — `(1+sqrt2)(1-sqrt2) = -1`.

---

### Q34
In a class TWO reciprocal equation of even degree, the middle coefficient must be

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) equal to the leading coefficient

**ANSWER: (c)** — the middle coefficient is its own opposite, so it is 0.

---

# PATTERN 7 — Descartes' rule of signs

### Q35
The maximum number of positive real roots of `x^4 - 3x^2 + 2x - 1 = 0` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  Signs:  +   -   +   -      (the missing x^3 term is simply skipped)
  Changes: + to -, - to +, + to -   =  3
```

---

### Q36
The number of real roots of `x^4 + 2x^2 + 3 = 0` is

(a) 0 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 1

**ANSWER: (a)**
```
  f(x)  : + + +   ->  0 sign changes  ->  no positive real roots
  f(-x) : + + +   ->  0 sign changes  ->  no negative real roots
  x = 0 is not a root (constant is 3).
  So there are NO real roots at all.
```

> **SHORTCUT:** if every coefficient is positive, there is **no positive real root**.
> If the equation is also even in x, there is no real root at all.

---

### Q37
`x^3 + 2x^2 + 5x + 1 = 0` has

(a) 3 positive roots &nbsp;&nbsp; (b) no positive root
(c) 2 positive roots &nbsp;&nbsp; (d) exactly 1 positive root

**ANSWER: (b)** — all coefficients are positive, so there are 0 sign changes in f(x).

---

# PATTERN 8 — Mixed / common roots

### Q38
The common root of `x^2 - 3x + 2 = 0` and `x^2 - 5x + 6 = 0` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 6

**ANSWER: (b)**
```
  Subtract the two equations:   ( -3x + 2 ) - ( -5x + 6 ) = 0
                                    2x - 4 = 0    ->    x = 2
  Check: 4 - 6 + 2 = 0   and   4 - 10 + 6 = 0     BOTH ZERO.
```

> **SHORTCUT:** to find the common root of two quadratics, SUBTRACT them. The
> x^2 terms vanish and you are left with a linear equation.

---

### Q39
If A, B, C are the roots of `x^3 + px^2 + qx + r = 0`, then
`A^2B + A^2C + B^2A + B^2C + C^2A + C^2B` =

(a) 3r - pq &nbsp;&nbsp; (b) pq - 3r &nbsp;&nbsp; (c) pq + 3r &nbsp;&nbsp; (d) -pq - 3r

**ANSWER: (a)**
```
  The identity is   s1 s2 - 3 s3   with  s1 = -p , s2 = q , s3 = -r :

       (-p)(q) - 3(-r)  =  -pq + 3r  =  3r - pq

  CHECK with x^3 - 6x^2 + 11x - 6 (roots 1, 2, 3; p=-6, q=11, r=-6):
       3r - pq = -18 + 66 = 48
       direct : 2+3+4+12+9+18 = 48        MATCH.
```

---

### Q40
The equation whose roots are the reciprocals of the roots of
`x^3 - 6x^2 + 11x - 6 = 0` is

(a) 6x^3 - 11x^2 + 6x - 1 = 0 &nbsp;&nbsp; (b) x^3 - 11x^2 + 6x - 6 = 0
(c) 6x^3 + 11x^2 + 6x + 1 = 0 &nbsp;&nbsp; (d) x^3 - 6x^2 + 11x - 1 = 0

**ANSWER: (a)** — reverse the coefficients `1, -6, 11, -6` to get `-6, 11, -6, 1`,
then multiply by -1: `6x^3 - 11x^2 + 6x - 1 = 0`.
Check at `x = 1/2`: `6/8 - 11/4 + 3 - 1 = 0`. Correct.

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+--------------------------------------+
  |   IF YOU SEE THIS ...                |   DO THIS IMMEDIATELY                |
  +--------------------------------------+--------------------------------------+
  |  "sum of the roots"                  |  -b/a . Nothing else.                |
  +--------------------------------------+--------------------------------------+
  |  "product of the roots"              |  ODD degree -> -(last)/(first)       |
  |                                      |  EVEN degree -> +(last)/(first)      |
  +--------------------------------------+--------------------------------------+
  |  "sum of the SQUARES of the roots"   |  s1^2 - 2 s2                         |
  +--------------------------------------+--------------------------------------+
  |  "sum of the RECIPROCALS"            |  s2 / s3   (cubic)                   |
  +--------------------------------------+--------------------------------------+
  |  "reciprocals of the roots"          |  REVERSE the coefficient list        |
  +--------------------------------------+--------------------------------------+
  |  "k times the roots"                 |  multiply coefficients by            |
  |                                      |  1, k, k^2, k^3, ...                 |
  +--------------------------------------+--------------------------------------+
  |  "negatives of the roots"            |  flip the sign of ODD-power terms    |
  +--------------------------------------+--------------------------------------+
  |  "squares of the roots"              |  s1^2-2s2 , s2^2-2s1s3 , s3^2        |
  +--------------------------------------+--------------------------------------+
  |  "roots are in AP"                   |  middle root = -b/(3a)               |
  +--------------------------------------+--------------------------------------+
  |  "roots are in GP"                   |  middle root = cube root of (-d/a)   |
  +--------------------------------------+--------------------------------------+
  |  "roots are in HP"                   |  middle root = -3d/c                 |
  +--------------------------------------+--------------------------------------+
  |  "sum of two roots is zero"          |  third root = s1 (the whole sum)     |
  +--------------------------------------+--------------------------------------+
  |  "one root is reciprocal of another" |  third root = product of all roots   |
  +--------------------------------------+--------------------------------------+
  |  "two roots are equal"               |  solve f'(x) = 0 , test in f(x)      |
  +--------------------------------------+--------------------------------------+
  |  a + i b is a root, real coeffs      |  a - i b is a root;                  |
  |                                      |  factor x^2 - 2a x + (a^2 + b^2)     |
  +--------------------------------------+--------------------------------------+
  |  a + sqrt(b) is a root, rational     |  a - sqrt(b) is a root;              |
  |  coeffs                              |  factor x^2 - 2a x + (a^2 - b)       |
  +--------------------------------------+--------------------------------------+
  |  palindrome coefficients             |  reciprocal equation.                |
  |                                      |  Roots pair up with product 1 --     |
  |                                      |  use that to kill wrong options.     |
  +--------------------------------------+--------------------------------------+
  |  ALL coefficients positive           |  NO positive real root               |
  +--------------------------------------+--------------------------------------+
  |  "remove the second term"            |  h = -a1 / (n a0)                    |
  +--------------------------------------+--------------------------------------+
  |  abstract formula in the options     |  plug in a small equation whose      |
  |                                      |  roots you know (e.g. 1, 2, 3) and   |
  |                                      |  see which option survives           |
  +--------------------------------------+--------------------------------------+
  |  options are lists of numbers        |  SUBSTITUTE them. Fastest method     |
  |                                      |  in the entire chapter.              |
  +--------------------------------------+--------------------------------------+
  |  you are stuck, EAPCET               |  check sum and product against       |
  |                                      |  -b/a and the last/first ratio,      |
  |                                      |  then guess. NEVER leave a blank.    |
  +--------------------------------------+--------------------------------------+
```
