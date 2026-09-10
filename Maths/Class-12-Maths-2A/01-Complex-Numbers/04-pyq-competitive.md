# Complex Numbers — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Complex Numbers (with De Moivre):**

```
  AP EAPCET  (Maths, 80 questions)  ->  3 to 5
  TG EAPCET  (Maths, 80 questions)  ->  3 to 5
  JEE Main   (Maths, 25 questions)  ->  1 to 2
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

> **Why this chapter is a gift in EAPCET:** most questions here are ONE LINE
> of work. `|z1 z2| = |z1||z2|`, `(1+i)^2 = 2i` and the remainder-of-4 rule
> between them answer roughly half of everything below.

---

# PATTERN 1 — Powers of i (free marks)

### Q1
The value of `i^1947` is

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) i &nbsp;&nbsp; (d) -i

**ANSWER: (d)**
```
  1947 = 4 x 486 + 3     ->  remainder 3   ->  i^3 = -i
```
> **SHORTCUT:** you only need the LAST TWO DIGITS. A number is divisible by 4
> if its last two digits are. Here 47 = 4 x 11 + 3, so the remainder is 3.

---

### Q2
`i^57 + i^70 + i^91 + i^101 + i^104` =

(a) 1 &nbsp;&nbsp; (b) i &nbsp;&nbsp; (c) -i &nbsp;&nbsp; (d) 0

**ANSWER: (b)**
```
  57  -> r 1 ->  i
  70  -> r 2 -> -1
  91  -> r 3 -> -i
  101 -> r 1 ->  i
  104 -> r 0 ->  1

  Sum = i - 1 - i + i + 1 = i
```

---

### Q3
For any positive integer n, `i^n + i^(n+1) + i^(n+2) + i^(n+3)` =

(a) 1 &nbsp;&nbsp; (b) i &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) -1

**ANSWER: (c)**
```
  Factor out i^n:   i^n ( 1 + i + i^2 + i^3 ) = i^n ( 1 + i - 1 - i ) = 0
```
> **SHORTCUT:** ANY four consecutive powers of i add to zero. Use this to
> chop huge sums down to at most three leftover terms.

---

### Q4
`sqrt(-3) x sqrt(-12)` =

(a) 6 &nbsp;&nbsp; (b) -6 &nbsp;&nbsp; (c) 6i &nbsp;&nbsp; (d) -6i

**ANSWER: (b)**
```
  Convert FIRST:  sqrt(-3) = i sqrt3 ,  sqrt(-12) = 2i sqrt3

  (i sqrt3)(2i sqrt3) = 2 i^2 (3) = -6
```
> **TRAP:** option (a) is there because students write sqrt(36) = 6.
> The rule sqrt(a)sqrt(b) = sqrt(ab) FAILS when both are negative.

---

# PATTERN 2 — Powers of (1 + i) and (1 - i)

Everything here comes from **three memorised lines**:

```
   (1 + i)^2 = 2i          (1 - i)^2 = -2i          (1+i)/(1-i) = i
```

### Q5
`(1 + i)^8` =

(a) 16 &nbsp;&nbsp; (b) -16 &nbsp;&nbsp; (c) 16i &nbsp;&nbsp; (d) 8

**ANSWER: (a)**
```
  (1+i)^2 = 2i
  (1+i)^4 = (2i)^2 = 4 i^2 = -4
  (1+i)^8 = (-4)^2 = 16
```

---

### Q6
`(1 + i)^6` =

(a) 8i &nbsp;&nbsp; (b) -8i &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) -8

**ANSWER: (b)**
```
  (1+i)^6 = [ (1+i)^2 ]^3 = (2i)^3 = 8 i^3 = -8i
```

---

### Q7
`((1 + i)/(1 - i))^100` =

(a) i &nbsp;&nbsp; (b) -i &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) -1

**ANSWER: (c)**
```
  (1+i)/(1-i) = i        ->    i^100 ,  100 / 4 leaves 0   ->   1
```

---

### Q8
The smallest positive integer n for which `(1 + i)^(2n) = (1 - i)^(2n)` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 8

**ANSWER: (b)**
```
  (1+i)^2 = 2i  ,  (1-i)^2 = -2i

  So we need   (2i)^n = (-2i)^n
               1 = (-1)^n
               n must be EVEN   ->   smallest is n = 2
```

---

### Q9
`(1 + i)^4 + (1 - i)^4` =

(a) 0 &nbsp;&nbsp; (b) -8 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 16

**ANSWER: (b)**
```
  (1+i)^4 = (2i)^2  = -4
  (1-i)^4 = (-2i)^2 = -4
  Sum = -8
```

---

# PATTERN 3 — Express in a + ib , real and imaginary parts

### Q10
The real part of `(3 + 2i)/(2 - 5i)` is

(a) -4/29 &nbsp;&nbsp; (b) 4/29 &nbsp;&nbsp; (c) 19/29 &nbsp;&nbsp; (d) 6/29

**ANSWER: (a)**
```
   (3 + 2i)(2 + 5i)      6 + 15i + 4i + 10i^2      -4 + 19i
  -------------------  = ----------------------  = ----------
      2^2 + 5^2                  4 + 25                29

  Real part = -4/29
```

---

### Q11
If `(a + ib)/(a - ib) = x + iy`, then `x^2 + y^2` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) a^2 + b^2 &nbsp;&nbsp; (d) 2

**ANSWER: (b)**
```
  x^2 + y^2 = |x + iy|^2

              |a + ib|^2      a^2 + b^2
            = -----------  =  ---------  =  1
              |a - ib|^2      a^2 + b^2
```
> **SHORTCUT:** never expand. `x^2 + y^2` is just the modulus squared, and
> `|z| = |z bar|`, so any expression of the form (z / z bar) has modulus 1.

---

### Q12
The multiplicative inverse of `3 - 4i` is

(a) (3 + 4i)/25 &nbsp;&nbsp; (b) (3 - 4i)/25 &nbsp;&nbsp; (c) (3 + 4i)/7 &nbsp;&nbsp; (d) 3 + 4i

**ANSWER: (a)**
```
   -1      x - iy        3 + 4i        3 + 4i
  z    =  ---------  =  ---------  =  --------
           x^2+y^2       9 + 16          25
```

---

### Q13
If `z = 1 + i`, then the quadratic equation with real coefficients having z as a
root is

(a) z^2 - 2z + 2 = 0 &nbsp;&nbsp; (b) z^2 + 2z + 2 = 0 &nbsp;&nbsp;
(c) z^2 - 2z - 2 = 0 &nbsp;&nbsp; (d) z^2 + 2 = 0

**ANSWER: (a)**
```
  Complex roots come in conjugate pairs:  roots are 1 + i and 1 - i.

  Sum     = 2
  Product = (1+i)(1-i) = 1 - i^2 = 2

  Equation:  z^2 - (sum) z + (product) = 0   ->   z^2 - 2z + 2 = 0
```
> **SHORTCUT:** just substitute. `(1+i)^2 = 2i`, so option (a) gives
> `2i - 2(1+i) + 2 = 2i - 2 - 2i + 2 = 0`. Done in five seconds.

---

# PATTERN 4 — Modulus (never expand anything)

### Q14
`| (1 + i)^10 |` =

(a) 32 &nbsp;&nbsp; (b) 16 &nbsp;&nbsp; (c) 1024 &nbsp;&nbsp; (d) 64

**ANSWER: (a)**
```
  |z^n| = |z|^n  =  (sqrt2)^10  =  2^5  =  32
```

---

### Q15
If `|z1| = 3` and `|z2| = 4`, the greatest possible value of `|z1 + z2|` is

(a) 1 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 12

**ANSWER: (c)**
```
  Triangle inequality:  |z1 + z2| <= |z1| + |z2| = 3 + 4 = 7
  (reached when the two arrows point the same way)
```

---

### Q16
If `|z - 3 - 4i| = 2`, then the maximum value of `|z|` is

(a) 3 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 2

**ANSWER: (c)**
```
  z lies on a circle with centre (3, 4) and radius 2.
  Distance of the centre from the origin = sqrt(9 + 16) = 5.

  max |z| = 5 + 2 = 7            min |z| = 5 - 2 = 3

              circle
              . - .
            .   C   .        O------->C is 5 units
      O ---------*----->     add the radius for the far point
                 5      2
```
> **SHORTCUT for every "max/min of |z|" question:**
> ```
>   max = (distance of centre from O) + radius
>   min = (distance of centre from O) - radius
> ```

---

### Q17
If `|z| = 1`, then `|1 + z|^2 + |1 - z|^2` =

(a) 2 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 0

**ANSWER: (b)**
```
  Parallelogram law:  |a+b|^2 + |a-b|^2 = 2( |a|^2 + |b|^2 )

  with a = 1 and b = z :   = 2( 1 + 1 ) = 4
```

---

### Q18
`| (3 + 4i)(5 - 12i) / (4 + 3i) |` =

(a) 13 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 65 &nbsp;&nbsp; (d) 1

**ANSWER: (a)**
```
   |3 + 4i| x |5 - 12i|      5 x 13
  ---------------------- =  --------  =  13
        |4 + 3i|                5
```

---

# PATTERN 5 — Argument and polar form

### Q19
The principal argument of `-1 - i` is

(a) pi/4 &nbsp;&nbsp; (b) 3pi/4 &nbsp;&nbsp; (c) -3pi/4 &nbsp;&nbsp; (d) -pi/4

**ANSWER: (c)**
```
  x = -1 , y = -1  ->  QUADRANT 3
  alpha = tan^-1(1) = pi/4
  Q3  ->  theta = alpha - pi = pi/4 - pi = -3pi/4
```
> **SHORTCUT:** sketch the point in 2 seconds. Down-and-left means the
> principal argument must be a NEGATIVE angle bigger than pi/2 in size.
> That alone eliminates (a), (b) and (d).

---

### Q20
The amplitude of `(1 + i sqrt3) / (sqrt3 + i)` is

(a) pi/3 &nbsp;&nbsp; (b) pi/6 &nbsp;&nbsp; (c) pi/2 &nbsp;&nbsp; (d) -pi/6

**ANSWER: (b)**
```
  arg(z1/z2) = arg z1 - arg z2

  arg(1 + i sqrt3) = pi/3          (Q1, tan alpha = sqrt3)
  arg(sqrt3 + i)   = pi/6          (Q1, tan alpha = 1/sqrt3)

  pi/3 - pi/6 = pi/6
```
> **SHORTCUT:** never divide the complex numbers. Subtract the arguments.

---

### Q21
The principal argument of `(1 - i) / (1 + i sqrt3)` is

(a) -7pi/12 &nbsp;&nbsp; (b) 7pi/12 &nbsp;&nbsp; (c) -pi/12 &nbsp;&nbsp; (d) pi/12

**ANSWER: (a)**
```
  arg(1 - i)       = -pi/4       (Q4)
  arg(1 + i sqrt3) =  pi/3       (Q1)

  -pi/4 - pi/3 = -3pi/12 - 4pi/12 = -7pi/12

  -7pi/12 lies inside  -pi < theta <= pi , so it IS the principal value.
```

---

### Q22
If `|z| = 2` and `arg(z) = pi/4`, then z =

(a) 1 + i &nbsp;&nbsp; (b) sqrt2 + i sqrt2 &nbsp;&nbsp; (c) 2 + 2i &nbsp;&nbsp; (d) sqrt2(1 - i)

**ANSWER: (b)**
```
  z = r(cos theta + i sin theta)
    = 2( cos(pi/4) + i sin(pi/4) )
    = 2( 1/sqrt2 + i/sqrt2 )
    = sqrt2 + i sqrt2

  CHECK:  | sqrt2 + i sqrt2 | = sqrt(2 + 2) = 2       CORRECT
```

---

### Q23
If z is a non-zero complex number with `arg(z) = pi/2`, then z is

(a) purely real &nbsp;&nbsp; (b) purely imaginary with positive Im &nbsp;&nbsp;
(c) purely imaginary with negative Im &nbsp;&nbsp; (d) zero

**ANSWER: (b)**
```
  arg = pi/2 points straight UP the imaginary axis.
  So Re(z) = 0 and Im(z) > 0.

  (arg = -pi/2 would be straight DOWN.)
```
> **SHORTCUT:** this single fact drives every "amp( ... ) = pi/2, find the
> locus" question: **set the REAL part to zero.**

---

# PATTERN 6 — Square root of a complex number

### Q24
`sqrt(-15 - 8i)` =

(a) +/- (1 - 4i) &nbsp;&nbsp; (b) +/- (1 + 4i) &nbsp;&nbsp;
(c) +/- (4 - i) &nbsp;&nbsp; (d) +/- (2 - 3i)

**ANSWER: (a)**
```
  m = sqrt(225 + 64) = sqrt289 = 17
  real = sqrt( (17 - 15)/2 ) = 1
  imag = sqrt( (17 + 15)/2 ) = 4
  b = -8 negative  ->  minus on the i-part
```
> **SHORTCUT:** don't use the formula at all — SQUARE THE OPTIONS.
> `(1 - 4i)^2 = 1 - 8i - 16 = -15 - 8i`. Found in ten seconds.

---

### Q25
`sqrt(i)` =

(a) +/- (1 + i) &nbsp;&nbsp; (b) +/- (1 + i)/sqrt2 &nbsp;&nbsp;
(c) +/- i &nbsp;&nbsp; (d) +/- (1 - i)/sqrt2

**ANSWER: (b)**
```
  i = 0 + 1i ,  m = 1
  real = sqrt( (1 + 0)/2 ) = 1/sqrt2
  imag = sqrt( (1 - 0)/2 ) = 1/sqrt2
  b > 0  ->  plus

  CHECK:  [ (1+i)/sqrt2 ]^2 = (1 + 2i - 1)/2 = 2i/2 = i     CORRECT
```

---

### Q26
`sqrt(3 + 4i)` =

(a) +/- (2 + i) &nbsp;&nbsp; (b) +/- (1 + 2i) &nbsp;&nbsp;
(c) +/- (2 - i) &nbsp;&nbsp; (d) +/- (3 + i)

**ANSWER: (a)**
```
  (2 + i)^2 = 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i         CORRECT
```

---

# PATTERN 7 — Locus (recognise the shape, don't grind)

### Q27
The locus of z if `|z - 1| = |z + 1|` is

(a) the real axis &nbsp;&nbsp; (b) the imaginary axis &nbsp;&nbsp;
(c) a circle &nbsp;&nbsp; (d) an ellipse

**ANSWER: (b)**
```
  |z - z1| = |z - z2| with z1 = (1, 0) and z2 = (-1, 0).
  Perpendicular bisector of the segment joining (1,0) and (-1,0)
  = the vertical line x = 0 = the IMAGINARY AXIS.
```

---

### Q28
The locus of z if `|z + 3i| = |z - 3i|` is

(a) x = 0 &nbsp;&nbsp; (b) y = 0 &nbsp;&nbsp; (c) x + y = 0 &nbsp;&nbsp; (d) a circle

**ANSWER: (b)**
```
  The two fixed points are (0, -3) and (0, 3), which sit on the
  IMAGINARY axis. The perpendicular bisector is therefore horizontal:
  y = 0, the REAL AXIS.
```
> **SHORTCUT:** for `|z - z1| = |z - z2|`, just find the midpoint and draw
> the line at right angles to z1 z2. No algebra needed for an MCQ.

---

### Q29
If `arg( (z - 1)/(z + 1) ) = pi/2`, then the locus of z is

(a) x^2 + y^2 = 1 &nbsp;&nbsp; (b) x^2 + y^2 = 2 &nbsp;&nbsp;
(c) x + y = 1 &nbsp;&nbsp; (d) a straight line through the origin

**ANSWER: (a)**
```
  arg = pi/2  ->  real part = 0.  Put z = x + iy:

  Real part of (x - 1 + iy)(x + 1 - iy)
     = (x - 1)(x + 1) + (y)(y)
     = x^2 - 1 + y^2

  Set to 0:   x^2 + y^2 = 1
```
> **SHORTCUT:** `arg( (z - z1)/(z - z2) ) = pi/2` is ALWAYS the circle with
> z1 z2 as a diameter. Here z1 = 1 and z2 = -1, so the circle has centre 0
> and radius 1: `x^2 + y^2 = 1`. Instant.

---

### Q30
`|z - 2 + i| = 3` represents

(a) a circle, centre (2, -1), radius 3 &nbsp;&nbsp;
(b) a circle, centre (-2, 1), radius 3 &nbsp;&nbsp;
(c) a straight line &nbsp;&nbsp; (d) an ellipse

**ANSWER: (a)**
```
  Rewrite:  | z - (2 - i) | = 3   ->  centre 2 - i = (2, -1) , radius 3
```
> **TRAP:** the sign flips. `|z - 2 + i|` means centre `2 - i`, NOT `-2 + i`.

---

# PATTERN 8 — Mixed identities

### Q31
If `(x + iy)^(1/3) = a + ib`, then `x/a + y/b` =

(a) 2(a^2 - b^2) &nbsp;&nbsp; (b) 4(a^2 - b^2) &nbsp;&nbsp;
(c) 4(a^2 + b^2) &nbsp;&nbsp; (d) a^2 - b^2

**ANSWER: (b)**
```
  x + iy = (a + ib)^3 = a^3 - 3ab^2 + i(3a^2 b - b^3)

  x = a^3 - 3ab^2   ->   x/a = a^2 - 3b^2
  y = 3a^2 b - b^3  ->   y/b = 3a^2 - b^2

  Sum = 4a^2 - 4b^2 = 4(a^2 - b^2)
```

---

### Q32
If `z = cos theta + i sin theta`, then `z + 1/z` =

(a) 2 cos theta &nbsp;&nbsp; (b) 2i sin theta &nbsp;&nbsp;
(c) 2 sin theta &nbsp;&nbsp; (d) 1

**ANSWER: (a)**
```
  |z| = 1  ->  1/z = z bar = cos theta - i sin theta

  z + 1/z = 2 cos theta        z - 1/z = 2i sin theta
```

---

### Q33
If `z` is a non-zero complex number with `z = z bar`, then z is

(a) purely imaginary &nbsp;&nbsp; (b) purely real &nbsp;&nbsp;
(c) zero &nbsp;&nbsp; (d) of modulus 1

**ANSWER: (b)**
```
  z = x + iy , z bar = x - iy.
  Equal  ->  iy = -iy  ->  2iy = 0  ->  y = 0  ->  z is real.
```

---

### Q34
The number of real values of x for which `(x + i)/(x - i)` is purely imaginary is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) infinitely many

**ANSWER: (c)**
```
  Rationalise:
     (x + i)^2       x^2 - 1 + 2ix
    -----------  =  ---------------
      x^2 + 1           x^2 + 1

  Purely imaginary  ->  real part = 0  ->  x^2 - 1 = 0  ->  x = 1 or -1

  Two values.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +-------------------------------------+------------------------------------+
  |  WHEN YOU SEE ...                   |  DO THIS IMMEDIATELY               |
  +-------------------------------------+------------------------------------+
  |  i to a huge power                  |  divide the last two digits by 4   |
  |                                     |  and keep only the remainder       |
  +-------------------------------------+------------------------------------+
  |  (1 + i) or (1 - i) to a power      |  square it first: (1+i)^2 = 2i     |
  +-------------------------------------+------------------------------------+
  |  modulus of a product or quotient   |  split it - NEVER multiply out     |
  |                                     |  |z1 z2| = |z1| |z2|               |
  +-------------------------------------+------------------------------------+
  |  argument of a product or quotient  |  ADD or SUBTRACT the arguments     |
  +-------------------------------------+------------------------------------+
  |  "find the square root of a + ib"   |  SQUARE THE OPTIONS instead        |
  +-------------------------------------+------------------------------------+
  |  x^2 + y^2 where x + iy = something |  it is just |z|^2 - use moduli     |
  +-------------------------------------+------------------------------------+
  |  amp( ... ) = pi/2                  |  set the REAL PART to zero         |
  +-------------------------------------+------------------------------------+
  |  arg( (z-z1)/(z-z2) ) = pi/2        |  circle with z1 z2 as DIAMETER     |
  +-------------------------------------+------------------------------------+
  |  |z - z1| = |z - z2|                |  perpendicular bisector - find the |
  |                                     |  midpoint, done                    |
  +-------------------------------------+------------------------------------+
  |  |z - z1| = r , max/min of |z|      |  (distance of z1 from O) +/- r     |
  +-------------------------------------+------------------------------------+
  |  |z| = 1 anywhere in the question   |  replace z bar by 1/z              |
  +-------------------------------------+------------------------------------+
  |  z = cos t + i sin t                |  z + 1/z = 2cos t                  |
  |                                     |  z - 1/z = 2i sin t                |
  +-------------------------------------+------------------------------------+
  |  two negative numbers under sqrt    |  convert to i BEFORE multiplying   |
  +-------------------------------------+------------------------------------+
  |  a messy expression, clean options  |  substitute the options backwards  |
  +-------------------------------------+------------------------------------+
```

```
  +-----------------------------------------------------------------+
  |  EAPCET REMINDER:  there is NO negative marking.                |
  |  If 30 seconds pass and you are stuck, eliminate what you can   |
  |  and TICK SOMETHING. A blank is a guaranteed zero.              |
  +-----------------------------------------------------------------+
```
