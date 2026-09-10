# De Moivre's Theorem — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from De Moivre's Theorem (with Complex Numbers):**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 4
  TG EAPCET  (Maths, 80 questions)  ->  2 to 4
  JEE Main   (Maths, 25 questions)  ->  1 (very often an omega question)
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

> **Why this chapter is a gift in EAPCET:** almost every question is ONE LINE of
> work once you know three facts — `(r cis t)^n = r^n cis(nt)`, `1 + w + w^2 = 0`,
> and "sum of the nth roots of unity is 0". Do not grind through binomial
> expansions in an entrance exam. Convert to polar and spin.

---

# PATTERN 1 — Powers of a standard complex number

### Q1
`(1 + i)^16` =

(a) 256 &nbsp;&nbsp; (b) -256 &nbsp;&nbsp; (c) 128 &nbsp;&nbsp; (d) 256 i

**ANSWER: (a)**
```
  1 + i = sqrt2 cis(pi/4)
  (1+i)^16 = (sqrt2)^16 cis(4 pi) = 2^8 (1) = 256
```
> **SHORTCUT:** never use De Moivre for powers of `1 + i` that are multiples of 2.
> Just use `(1+i)^2 = 2i`. Here `(1+i)^16 = (2i)^8 = 256 i^8 = 256`.

---

### Q2
`(1 - i)^8` =

(a) 16 &nbsp;&nbsp; (b) -16 &nbsp;&nbsp; (c) 16 i &nbsp;&nbsp; (d) 8

**ANSWER: (a)**
```
  (1 - i)^2 = -2i     ->     (1 - i)^8 = (-2i)^4 = 16 i^4 = 16
```

---

### Q3
`(sqrt3 + i)^12` =

(a) 4096 &nbsp;&nbsp; (b) -4096 &nbsp;&nbsp; (c) 2048 &nbsp;&nbsp; (d) 0

**ANSWER: (a)**
```
  sqrt3 + i = 2 cis(pi/6)
  (sqrt3 + i)^12 = 2^12 cis( 12 x pi/6 ) = 4096 cis(2 pi) = 4096
```
> **SHORTCUT:** `sqrt3 + i` has amplitude `pi/6`, so the 12th power always
> lands back on the positive real axis. Power 6 lands on the NEGATIVE real
> axis: `(sqrt3 + i)^6 = -64`.

---

### Q4
`(1 + i sqrt3)^6` =

(a) 64 &nbsp;&nbsp; (b) -64 &nbsp;&nbsp; (c) 32 &nbsp;&nbsp; (d) -32

**ANSWER: (a)**
```
  1 + i sqrt3 = 2 cis(pi/3)
  ( . )^6 = 2^6 cis( 2 pi ) = 64
```

---

### Q5
`( (1 + i) / (1 - i) )^100` =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) i &nbsp;&nbsp; (d) -i

**ANSWER: (a)**
```
  (1 + i)/(1 - i) = i
  i^100 : 100 = 4 x 25 , remainder 0  ->  i^100 = 1
```
> **SHORTCUT:** memorise `(1+i)/(1-i) = i` and `(1-i)/(1+i) = -i`. Then every
> question of this shape becomes a powers-of-i question.

---

### Q6
`(-1 + i sqrt3)^15 + (-1 - i sqrt3)^15` =

(a) 0 &nbsp;&nbsp; (b) 2^15 &nbsp;&nbsp; (c) 2^16 &nbsp;&nbsp; (d) -2^16

**ANSWER: (c)**
```
  -1 + i sqrt3 = 2 cis( 2pi/3 )      ( Q2 , alpha = pi/3 , t = pi - pi/3 )
  -1 - i sqrt3 = 2 cis( -2pi/3 )

  Sum = 2^15 cis(10 pi) + 2^15 cis(-10 pi) = 2^15 (1) + 2^15 (1) = 2^16 = 65536
```
> **SHORTCUT:** the two numbers are conjugates, so the sum is
> `2 x 2^15 cos(10 pi) = 2^16`.

---

### Q7
The least positive integer n for which `(1 + i)^n` is a real number is

(a) 2 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) 8

**ANSWER: (b)**
```
  (1+i)^n = 2^(n/2) cis( n pi / 4 ) .
  It is real when n pi/4 is a multiple of pi , i.e. when 4 divides n.
  Least positive n = 4 .   ( (1+i)^4 = -4 , real )
```
> **RELATED:** `(1+i)^n` is purely IMAGINARY when `n = 2, 6, 10, ...`
> The least such n is 2, since `(1+i)^2 = 2i`.

---

### Q8
The amplitude (principal value) of `(1 + i sqrt3)^5` is

(a) `5pi/3` &nbsp;&nbsp; (b) `-pi/3` &nbsp;&nbsp; (c) `pi/3` &nbsp;&nbsp; (d) `2pi/3`

**ANSWER: (b)**
```
  amp(1 + i sqrt3) = pi/3  ->  amp of the 5th power = 5 pi / 3

  But the PRINCIPAL value must lie in ( -pi , pi ] :
        5pi/3 - 2pi = -pi/3
```
> **TRAP:** options often contain both `5pi/3` and `-pi/3`. The word
> "principal" means you must reduce into `(-pi, pi]`.

---

# PATTERN 2 — Simplifying products and quotients of cis terms

### Q9
`(cos t + i sin t)^5 (cos t - i sin t)^3` =

(a) `cos 8t + i sin 8t` &nbsp;&nbsp; (b) `cos 2t + i sin 2t` &nbsp;&nbsp;
(c) `cos 2t - i sin 2t` &nbsp;&nbsp; (d) 1

**ANSWER: (b)**
```
  cis(5t) x cis(-3t) = cis(2t)
```
> **SHORTCUT:** a MINUS in front of `i sin` means a MINUS on the angle. Then
> just add the signed angles: `5t + (-3t) = 2t`.

---

### Q10
`(cos 3t + i sin 3t)^5 / (cos 5t + i sin 5t)^3` =

(a) 1 &nbsp;&nbsp; (b) `cis(30t)` &nbsp;&nbsp; (c) `cis(-30t)` &nbsp;&nbsp; (d) `cis(15t)`

**ANSWER: (a)**
```
  cis(15t) / cis(15t) = cis(0) = 1
```

---

### Q11
`(sin t + i cos t)^5` =

(a) `sin 5t + i cos 5t` &nbsp;&nbsp; (b) `cos 5t + i sin 5t` &nbsp;&nbsp;
(c) `sin 5t - i cos 5t` &nbsp;&nbsp; (d) `-sin 5t + i cos 5t`

**ANSWER: (a)**
```
  sin t + i cos t = cos(pi/2 - t) + i sin(pi/2 - t) = cis( pi/2 - t )

  ( . )^5 = cis( 5pi/2 - 5t ) = cis( pi/2 - 5t )      [5pi/2 - 2pi = pi/2]

          = cos(pi/2 - 5t) + i sin(pi/2 - 5t) = sin 5t + i cos 5t

  CHECK t = 0 : LHS = i^5 = i ; RHS = 0 + i = i        correct
```
> **SHORTCUT:** for an ODD power, `(sin t + i cos t)^n = sin nt + i cos nt`.
> For an EVEN power it becomes `cos nt - i sin nt`. Test with `t = 0` if unsure.

---

### Q12
`(1 + cos t + i sin t) / (1 + cos t - i sin t)` =

(a) `cos t + i sin t` &nbsp;&nbsp; (b) `cos t - i sin t` &nbsp;&nbsp;
(c) `cos 2t + i sin 2t` &nbsp;&nbsp; (d) 1

**ANSWER: (a)**
```
  1 + cos t + i sin t = 2 cos(t/2) [ cos(t/2) + i sin(t/2) ]
  1 + cos t - i sin t = 2 cos(t/2) [ cos(t/2) - i sin(t/2) ]

  ratio = cis(t/2) / cis(-t/2) = cis( t )

  CHECK t = pi/2 : (1 + i)/(1 - i) = i = cis(pi/2)     correct
```
> **SHORTCUT:** a numerator and denominator that are CONJUGATES always give
> `cis(2 x half-angle)`. Whenever you see `1 + cos t`, split it as
> `2 cos^2(t/2)` immediately.

---

### Q13
`[ (cos t + i sin t) / (cos t - i sin t) ]^n` =

(a) `cis(nt)` &nbsp;&nbsp; (b) `cis(2nt)` &nbsp;&nbsp;
(c) `cis(-2nt)` &nbsp;&nbsp; (d) 1

**ANSWER: (b)**
```
  cis(t)/cis(-t) = cis(2t) ,  so the nth power is cis(2nt) = cos 2nt + i sin 2nt
```

---

### Q14
`(cos 2t - i sin 2t)^4 (cos 5t + i sin 5t)^-3` =

(a) `cis(-23t)` &nbsp;&nbsp; (b) `cis(23t)` &nbsp;&nbsp;
(c) `cis(-7t)` &nbsp;&nbsp; (d) `cis(7t)`

**ANSWER: (a)**
```
  (-2t)(4) = -8t        (5t)(-3) = -15t        total = -23t
```
> **SHORTCUT:** write only the signed products under each bracket and add.
> No expansion, no algebra — five seconds.

---

# PATTERN 3 — Cube roots of unity (the highest-frequency pattern)

### Q15
If `w` is a complex cube root of unity, then `(1 + w - w^2)(1 - w + w^2)` =

(a) 4 &nbsp;&nbsp; (b) -4 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (a)**
```
  1 + w - w^2 = -2 w^2         1 - w + w^2 = -2 w

  product = ( -2w^2 )( -2w ) = 4 w^3 = 4
```
> **SHORTCUT:** learn the pair `1 - w + w^2 = -2w` and `1 + w - w^2 = -2w^2`.
> Between them they answer most omega MCQs in one step.

---

### Q16
`(1 + w)(1 + w^2)(1 + w^3)(1 + w^4)` =

(a) `-2 w^2` &nbsp;&nbsp; (b) `2 w` &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 1

**ANSWER: (a)**
```
  w^3 = 1  ->  1 + w^3 = 2
  w^4 = w  ->  1 + w^4 = 1 + w = -w^2

  = ( -w^2 )( -w )( 2 )( -w^2 )
  = ( w^3 )( 2 )( -w^2 )
  = ( 1 )( 2 )( -w^2 ) = -2 w^2
```
> **TRAP:** `1 + w^3` is **2**, not 0. Reduce every exponent first, then decide.

---

### Q17
`(1 + w - w^2)^7` =

(a) `128 w` &nbsp;&nbsp; (b) `-128 w^2` &nbsp;&nbsp;
(c) `128 w^2` &nbsp;&nbsp; (d) `-128 w`

**ANSWER: (b)**
```
  1 + w - w^2 = -2 w^2

  ( -2 w^2 )^7 = -128 w^14

  14 = 3 x 4 + 2  ->  w^14 = w^2

  = -128 w^2
```

---

### Q18
`1 + w^100 + w^200` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) `w`

**ANSWER: (a)**
```
  100 = 3(33) + 1  ->  w^100 = w
  200 = 3(66) + 2  ->  w^200 = w^2

  1 + w + w^2 = 0
```
> **SHORTCUT:** use the digit-sum test for division by 3.
> `100 -> 1+0+0 = 1`, `200 -> 2+0+0 = 2`. Done in two seconds.

---

### Q19
`(a + b w + c w^2) / (b + c w + a w^2)` =

(a) `w` &nbsp;&nbsp; (b) `w^2` &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) `-w`

**ANSWER: (a)**
```
  Multiply the denominator by w :
     w( b + c w + a w^2 ) = b w + c w^2 + a w^3 = a + b w + c w^2 = NUMERATOR

  So numerator = w x denominator , hence the ratio = w .
```
> **SHORTCUT:** look at where `a` sits. If `a` is on the `w^2` term of the
> denominator, the answer is `w`. If `a` is on the `w` term, the answer is `w^2`.

---

### Q20
If `x = a + b`, `y = a w + b w^2`, `z = a w^2 + b w`, then `xyz` =

(a) `a^3 + b^3` &nbsp;&nbsp; (b) `a^3 - b^3` &nbsp;&nbsp;
(c) `3ab` &nbsp;&nbsp; (d) `a^3 + b^3 - 3ab`

**ANSWER: (a)**
```
  y z = ( a w + b w^2 )( a w^2 + b w )
      = a^2 w^3 + ab w^2 + ab w^4 + b^2 w^3
      = a^2 + b^2 + ab( w^2 + w )
      = a^2 + b^2 - ab

  x y z = ( a + b )( a^2 - ab + b^2 ) = a^3 + b^3
```
> **RELATED:** for the same x, y, z we also get `x + y + z = 0`,
> `x^2 + y^2 + z^2 = 6ab` and `x^3 + y^3 + z^3 = 3(a^3 + b^3)`.

---

### Q21
If `w` is a non-real cube root of unity and `(1 + w)^7 = A + B w`, then `(A, B)` =

(a) (1, 1) &nbsp;&nbsp; (b) (0, 1) &nbsp;&nbsp; (c) (1, 0) &nbsp;&nbsp; (d) (-1, -1)

**ANSWER: (a)**
```
  1 + w = -w^2
  (1 + w)^7 = ( -w^2 )^7 = -w^14 = -w^2         [14 -> remainder 2]

  and  -w^2 = 1 + w        [from 1 + w + w^2 = 0]

  So A + B w = 1 + w  ->  A = 1 , B = 1
```

---

### Q22
If `z^2 + z + 1 = 0` where z is complex, then
`(z + 1/z)^2 + (z^2 + 1/z^2)^2 + ... + (z^6 + 1/z^6)^2` =

(a) 6 &nbsp;&nbsp; (b) 12 &nbsp;&nbsp; (c) 18 &nbsp;&nbsp; (d) 54

**ANSWER: (b)**
```
  z^2 + z + 1 = 0 means z is w or w^2 (a non-real cube root of unity).
  Take z = w , so 1/z = w^2 .

     z   + 1/z   = w   + w^2   = -1        square = 1
     z^2 + 1/z^2 = w^2 + w^4 = w^2 + w = -1   square = 1
     z^3 + 1/z^3 = 1 + 1 = 2                  square = 4
     z^4 + 1/z^4 = w + w^2 = -1               square = 1
     z^5 + 1/z^5 = w^2 + w = -1               square = 1
     z^6 + 1/z^6 = 1 + 1 = 2                  square = 4

  Total = 1 + 1 + 4 + 1 + 1 + 4 = 12
```
> **SHORTCUT:** the pattern of `z^k + 1/z^k` repeats with period 3 as
> `-1, -1, 2`. So the squares repeat as `1, 1, 4` (sum 6 per group of three).
> Six terms = two groups = 12.

---

### Q23
`(1 - w)(1 - w^2)(1 - w^4)(1 - w^8)` =

(a) 3 &nbsp;&nbsp; (b) 6 &nbsp;&nbsp; (c) 9 &nbsp;&nbsp; (d) 0

**ANSWER: (c)**
```
  w^4 = w , w^8 = w^2

  = [ (1 - w)(1 - w^2) ]^2

  (1 - w)(1 - w^2) = 1 - w - w^2 + w^3 = 1 - (-1) + 1 = 3

  = 3^2 = 9
```

---

# PATTERN 4 — nth roots of unity

### Q24
The sum of the 8th roots of unity is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) -1 &nbsp;&nbsp; (d) 8

**ANSWER: (a)**
```
  The sum of the n nth roots of unity is 0 for every n >= 2.
```
> **SHORTCUT:** it is 0 every time. Do not compute anything.

---

### Q25
The product of the 10th roots of unity is

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 10 &nbsp;&nbsp; (d) 0

**ANSWER: (b)**
```
  Product = (-1)^(n+1) = (-1)^11 = -1

  ( n = 10 is EVEN -> product = -1 )
```
> **SHORTCUT:** n odd gives +1, n even gives -1. That is the whole rule.

---

### Q26
If `1, a1, a2, ..., a(n-1)` are the n nth roots of unity, then
`(1 - a1)(1 - a2) ... (1 - a(n-1))` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) n &nbsp;&nbsp; (d) `n^2`

**ANSWER: (c)**
```
  z^n - 1 = ( z - 1 )( z - a1 )( z - a2 ) ... ( z - a(n-1) )

  Divide both sides by (z - 1) :

     1 + z + z^2 + ... + z^(n-1) = ( z - a1 ) ... ( z - a(n-1) )

  Now put z = 1 . The left side is n ones added, i.e. n .

     n = ( 1 - a1 )( 1 - a2 ) ... ( 1 - a(n-1) )
```
> **CHECK with n = 3:** `(1 - w)(1 - w^2) = 3`. Matches.

---

### Q27
How many roots of `z^6 = 1` are also roots of `z^4 = 1`?

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  The number of common roots is the H.C.F. of 6 and 4 , which is 2 .

  They are the 2nd roots of unity:  1 and -1 .
```

---

### Q28
If `a` is a non-real 7th root of unity, then `1 + a + a^2 + ... + a^6` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) -1

**ANSWER: (a)**
```
  a^7 - 1 = ( a - 1 )( 1 + a + ... + a^6 ) = 0 , and a is not 1 ,
  so the second bracket must be 0.
```
> **RELATED:** therefore `a + a^2 + ... + a^6 = -1`. Options often offer both.

---

### Q29
The nth roots of unity, plotted on the Argand plane, form

(a) a straight line &nbsp;&nbsp; (b) a circle of radius n &nbsp;&nbsp;
(c) a regular n-gon on the unit circle &nbsp;&nbsp; (d) n points on the real axis

**ANSWER: (c)**
```
  Every root has modulus 1 and the amplitudes are equally spaced by 2 pi / n .
```

---

# PATTERN 5 — Roots of a complex number, solving z^n = c

### Q30
The cube roots of `-8` are

(a) `-2, 1 + i sqrt3, 1 - i sqrt3` &nbsp;&nbsp; (b) `2, -1 + i sqrt3, -1 - i sqrt3`
&nbsp;&nbsp; (c) `-2, -1 + i sqrt3, -1 - i sqrt3` &nbsp;&nbsp; (d) `2, 1 + i sqrt3, 1 - i sqrt3`

**ANSWER: (a)**
```
  -8 = 8 cis( 2k pi + pi )
  roots = 2 cis( (2k+1) pi / 3 ) , k = 0,1,2
        = 2 cis(pi/3) , 2 cis(pi) , 2 cis(5pi/3)
        = 1 + i sqrt3 , -2 , 1 - i sqrt3

  CHECK: ( 1 + i sqrt3 )^3 = [2 cis(pi/3)]^3 = 8 cis(pi) = -8      correct
```
> **SHORTCUT:** the cube roots of `-8` are `-2` times the cube roots of unity:
> `-2, -2w, -2w^2 = -2, 1 - i sqrt3, 1 + i sqrt3`. Same set.

---

### Q31
The roots of `z^4 + 4 = 0` are

(a) `+/- 1 +/- i` &nbsp;&nbsp; (b) `+/- 2 +/- 2i` &nbsp;&nbsp;
(c) `+/- sqrt2 +/- i sqrt2` &nbsp;&nbsp; (d) `+/- i`

**ANSWER: (a)**
```
  z^4 = -4 = 4 cis( 2k pi + pi )
  z = sqrt2 cis( (2k+1) pi/4 )  ->  sqrt2 x ( +/-1/sqrt2 +/- i/sqrt2 ) = +/-1 +/- i

  CHECK: (1 + i)^4 = (2i)^2 = -4                                    correct
```
> **SHORTCUT:** in an MCQ, just raise one option to the 4th power.
> `(1+i)^2 = 2i`, `(2i)^2 = -4`. Ten seconds.

---

### Q32
`sqrt(i)` =

(a) `+/- i` &nbsp;&nbsp; (b) `+/- (1 + i)/sqrt2` &nbsp;&nbsp;
(c) `+/- (1 - i)/sqrt2` &nbsp;&nbsp; (d) `+/- (1 + i)`

**ANSWER: (b)**
```
  i = cis( pi/2 )
  square roots = cis( (2k pi + pi/2) / 2 ) , k = 0,1
               = cis( pi/4 ) and cis( 5pi/4 )
               = ( 1 + i )/sqrt2  and  -( 1 + i )/sqrt2

  CHECK: [ (1+i)/sqrt2 ]^2 = 2i/2 = i                               correct
```

---

### Q33
The number of distinct values of `(cos t + i sin t)^(3/4)` is

(a) 3 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 12

**ANSWER: (b)**
```
  For a rational index p/q in lowest terms there are exactly q values.
  Here q = 4 .
```
> **TRAP:** the numerator 3 has nothing to do with the count. And if the
> question said `6/8`, you would first reduce it to `3/4` — still 4 values.

---

### Q34
The fourth roots of `-16` are

(a) `+/- 2 , +/- 2i` &nbsp;&nbsp; (b) `+/- sqrt2 +/- i sqrt2` &nbsp;&nbsp;
(c) `+/- 1 +/- i` &nbsp;&nbsp; (d) `+/- 4`

**ANSWER: (b)**
```
  -16 = 16 cis( 2k pi + pi )
  roots = 2 cis( (2k+1) pi / 4 ) = 2 ( +/-1/sqrt2 +/- i/sqrt2 )
        = +/- sqrt2 +/- i sqrt2

  CHECK: ( sqrt2 + i sqrt2 )^4 = [ sqrt2 (1+i) ]^4 = 4 (1+i)^4 = 4(-4) = -16
```

---

# PATTERN 6 — Multiple angles

### Q35
If `z = cos t + i sin t`, then `z^5 + 1/z^5` =

(a) `2 cos 5t` &nbsp;&nbsp; (b) `2i sin 5t` &nbsp;&nbsp;
(c) `2 cos t` &nbsp;&nbsp; (d) `cos 5t`

**ANSWER: (a)**
```
  z^5 = cis(5t) ,  1/z^5 = cis(-5t) ,  sum = 2 cos 5t
```
> **SHORTCUT:** PLUS gives `2 cos`, MINUS gives `2i sin`. Nothing else to do.

---

### Q36
`cos^3 t` =

(a) `(cos 3t + 3 cos t)/4` &nbsp;&nbsp; (b) `(3 cos t - cos 3t)/4` &nbsp;&nbsp;
(c) `(cos 3t - 3 cos t)/4` &nbsp;&nbsp; (d) `(3 cos 3t + cos t)/4`

**ANSWER: (a)**
```
  From cos 3t = 4 cos^3 t - 3 cos t , rearrange:
       4 cos^3 t = cos 3t + 3 cos t
```
> **SHORTCUT:** test `t = 0`. Every `cos^n t` formula must give 1.
> (a) gives (1+3)/4 = 1. (b) gives (3-1)/4 = 1/2. Only (a) survives.

---

### Q37
`sin 5t` in powers of `sin t` is (writing `s = sin t`)

(a) `16 s^5 - 20 s^3 + 5 s` &nbsp;&nbsp; (b) `16 s^5 + 20 s^3 + 5 s`
&nbsp;&nbsp; (c) `16 s^5 - 20 s^3 - 5 s` &nbsp;&nbsp; (d) `5 s^5 - 20 s^3 + 16 s`

**ANSWER: (a)**
```
  Substitute t = pi/2 , so sin t = 1 and sin 5t = sin(5pi/2) = 1 .
  The correct option must give 1 .

     (a)  16 - 20 + 5  =  1        correct
     (b)  16 + 20 + 5  =  41       wrong
     (c)  16 - 20 - 5  =  -9       wrong
     (d)  5 - 20 + 16  =  1        also 1 , so test t = pi/6 :
          sin(5pi/6) = 1/2 , s = 1/2
          (a) 16/32 - 20/8 + 5/2 = 0.5 - 2.5 + 2.5 = 0.5      correct
          (d) 5/32 - 20/8 + 16/2 = 0.156 - 2.5 + 8 = 5.656     wrong
```
> **SHORTCUT:** substitute `t = pi/2` (so `sin t = 1`) and see which option
> gives 1. That usually kills three options instantly. If two survive, use
> `t = pi/6`.

---

### Q37b
`cos 4t` in powers of `cos t` is (writing `c = cos t`)

(a) `8c^4 - 8c^2 + 1` &nbsp;&nbsp; (b) `8c^4 - 8c^2 - 1` &nbsp;&nbsp;
(c) `4c^4 - 4c^2 + 1` &nbsp;&nbsp; (d) `8c^4 + 8c^2 - 1`

**ANSWER: (a)**
```
  Put t = 0 (so c = 1). cos 0 = 1 , so the option must give 1 .
     (a) 8 - 8 + 1 = 1   correct
     (b) 8 - 8 - 1 = -1  wrong
     (c) 4 - 4 + 1 = 1   also 1 , so put t = pi/2 (c = 0): cos 2pi = 1 .
         (a) gives 1 , (c) gives 1 . Try t = pi/3 (c = 1/2), cos(4pi/3) = -1/2 :
         (a) 8/16 - 8/4 + 1 = 0.5 - 2 + 1 = -0.5    correct
         (c) 4/16 - 4/4 + 1 = 0.25 - 1 + 1 = 0.25    wrong
     (d) 8 + 8 - 1 = 15  wrong
```

---

### Q38
`tan 3t` =

(a) `(3T - T^3)/(1 - 3T^2)` &nbsp;&nbsp; (b) `(3T + T^3)/(1 + 3T^2)` &nbsp;&nbsp;
(c) `(T^3 - 3T)/(1 - 3T^2)` &nbsp;&nbsp; (d) `(3T - T^3)/(1 + 3T^2)`
&nbsp;&nbsp; (where `T = tan t`)

**ANSWER: (a)**
```
  CHECK t = pi/6 : T = 1/sqrt3 and tan(pi/2) is undefined,
  so the correct option must have denominator 0 there.
     (a): 1 - 3(1/3) = 0     UNDEFINED     correct
     (b): 1 + 1 = 2          finite        wrong
     (d): 1 + 1 = 2          finite        wrong
     (c): also 0, but the numerator sign is wrong; check t = pi/4 :
          tan(3pi/4) = -1 ; (a) gives (3-1)/(1-3) = -1 correct ;
          (c) gives (1-3)/(1-3) = +1 wrong.
```

---

# PATTERN 7 — Mixed / trickier

### Q39
If A, B, C are the angles of a triangle and `x = cis A`, `y = cis B`, `z = cis C`,
then `x^2 y^2 z^2 + 1/(x^2 y^2 z^2)` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (c)**
```
  x y z = cis( A + B + C ) = cis( pi ) = -1

  ( x y z )^2 = 1 , so the expression is 1 + 1/1 = 2
```

---

### Q40
`(1 + i)^6 + (1 - i)^6` =

(a) 0 &nbsp;&nbsp; (b) 16 &nbsp;&nbsp; (c) -16 &nbsp;&nbsp; (d) 32

**ANSWER: (a)**
```
  Use  (1+i)^n + (1-i)^n = 2^((n+2)/2) cos( n pi / 4 )  with n = 6 :

        2^4 cos( 6 pi / 4 ) = 16 cos( 3 pi / 2 ) = 16 x 0 = 0

  DIRECT CHECK:  (1+i)^2 = 2i  ->  (1+i)^6 = (2i)^3 = -8i
                 (1-i)^2 = -2i ->  (1-i)^6 = (-2i)^3 = 8i
                 sum = 0                                            correct
```
> **THE TABLE WORTH MEMORISING** for `(1+i)^n + (1-i)^n` :
>
> ```
>    n  :  1    2    3    4    5    6    7    8
>  value:  2    0   -4   -8   -8    0   16   32
> ```
> It is zero whenever `n` leaves remainder 2 on division by 4.

---

### Q41
The value of `w^2018 + w^2019 + w^2020` (w a non-real cube root of unity) is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) `w` &nbsp;&nbsp; (d) 3

**ANSWER: (a)**
```
  Three CONSECUTIVE powers of w always give 1 + w + w^2 in some order,
  so their sum is 0.

  (Detail: 2018 -> digit sum 11 -> 2 , so the three are w^2 , w^3=1 , w^4=w .
   Sum = w^2 + 1 + w = 0. )
```
> **SHORTCUT:** any THREE consecutive powers of `w` add to 0, just as any FOUR
> consecutive powers of `i` add to 0.

---

### Q42
If `z = cis(2 pi / 5)`, then `1 + z + z^2 + z^3 + z^4` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) `z`

**ANSWER: (a)**
```
  z is a 5th root of unity other than 1 , and the five 5th roots of unity are
  exactly 1, z, z^2, z^3, z^4 . Their sum is 0 .
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +------------------------------------+-------------------------------------+
  |   IF YOU SEE THIS ...              |   DO THIS IMMEDIATELY               |
  +------------------------------------+-------------------------------------+
  |  (1 + i) to any power              |  use (1+i)^2 = 2i , then square     |
  |                                    |  again. Never expand.               |
  +------------------------------------+-------------------------------------+
  |  (1+i)/(1-i) anywhere              |  replace it by i . Then it is a     |
  |                                    |  powers-of-i question.              |
  +------------------------------------+-------------------------------------+
  |  cos t - i sin t                   |  write cis(-t) . Flip the sign of   |
  |                                    |  the angle, nothing else.           |
  +------------------------------------+-------------------------------------+
  |  a big product of cis brackets     |  write only the signed angles and   |
  |                                    |  add them. Ignore everything else.  |
  +------------------------------------+-------------------------------------+
  |  sin t + i cos t                   |  write cis(pi/2 - t) .              |
  +------------------------------------+-------------------------------------+
  |  1 + cos t + i sin t               |  write 2 cos(t/2) cis(t/2) .        |
  +------------------------------------+-------------------------------------+
  |  any w (omega) at all              |  write 1 + w + w^2 = 0 and w^3 = 1  |
  |                                    |  in the margin BEFORE reading on.   |
  +------------------------------------+-------------------------------------+
  |  a high power of w                 |  digit-sum the exponent, divide by  |
  |                                    |  3, keep the remainder.             |
  +------------------------------------+-------------------------------------+
  |  1 - w + w^2  or  1 + w - w^2      |  -2w  and  -2w^2 . Straight in.     |
  +------------------------------------+-------------------------------------+
  |  "sum of the nth roots of unity"   |  0 . Do not compute.                |
  +------------------------------------+-------------------------------------+
  |  "product of the nth roots"        |  n odd -> +1 , n even -> -1 .       |
  +------------------------------------+-------------------------------------+
  |  "how many values does (..)^(p/q)  |  q , after reducing p/q to lowest   |
  |   have"                            |  terms. Ignore p.                   |
  +------------------------------------+-------------------------------------+
  |  "find the roots of z^n = c"       |  one root x the n roots of unity.   |
  +------------------------------------+-------------------------------------+
  |  z^n = -1                          |  ODD multiples of pi/n .            |
  |  z^n = +1                          |  EVEN multiples of pi/n .           |
  +------------------------------------+-------------------------------------+
  |  a trig identity in the options    |  substitute t = 0 or t = pi/2 and   |
  |                                    |  eliminate. Faster than deriving.   |
  +------------------------------------+-------------------------------------+
  |  a "find the root" MCQ             |  raise the OPTIONS to the power     |
  |                                    |  instead of taking the root.        |
  +------------------------------------+-------------------------------------+
  |  "principal amplitude" of a power  |  compute n x t , then add or        |
  |                                    |  subtract 2 pi until it is in       |
  |                                    |  ( -pi , pi ] .                     |
  +------------------------------------+-------------------------------------+
  |  A + B + C = pi with cis           |  xyz = cis(pi) = -1 . One line.     |
  +------------------------------------+-------------------------------------+
```

```
   EAPCET HAS NO NEGATIVE MARKING.

   If you are out of time on this chapter, guess with these priors:
      "sum of ... roots of unity"     ->  0
      "product of ... roots of unity" ->  +1 if n odd , -1 if n even
      any expression in 1, w, w^2     ->  the options containing 0, 1, -1,
                                          w or w^2 are far more likely
      a "how many values" question    ->  the denominator of the index

   NEVER leave a blank in EAPCET. In JEE Main, skip only if you cannot
   even reduce the expression to cis form.
```
