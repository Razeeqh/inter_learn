# Product of Vectors — AP EAPCET / TG EAPCET / JEE Main Questions

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

**How many questions come from Product of Vectors:**

```
  AP EAPCET  (Maths, 80 questions)  ->  3 to 5
  TG EAPCET  (Maths, 80 questions)  ->  3 to 5
  JEE Main   (Maths, 25 questions)  ->  1 to 2

  Add Addition of Vectors and 3D and the whole vector block is
  worth roughly 6 to 9 questions in EAPCET. That is a lot of marks
  for one short chapter.
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with the official papers before your exam.

---

# PATTERN 1 — Straight dot-product computation (free marks)

### Q1
If `a = 2i + 3j - k` and `b = i - j + 2k`, then `a . b` =

(a) -3 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 7

**ANSWER: (a)**
```
  a . b = (2)(1) + (3)(-1) + (-1)(2)
        =   2   +   (-3)  +   (-2)
        =  -3
```

---

### Q2
`i . (j x k) + j . (k x i) + k . (i x j)` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) -3

**ANSWER: (c)**
```
  j x k = i  ->  i . i = 1
  k x i = j  ->  j . j = 1
  i x j = k  ->  k . k = 1

  Total = 1 + 1 + 1 = 3
```
> **SHORTCUT:** Each of these is just `[i j k] = 1`. Three of them, so 3.

---

### Q3
If `|a| = 3`, `|b| = 4` and `|a x b| = 6`, then `|a . b|` =

(a) 6 &nbsp;&nbsp; (b) 12 &nbsp;&nbsp; (c) 6 sqrt3 &nbsp;&nbsp; (d) 3 sqrt3

**ANSWER: (c)**
```
  Lagrange:  |a x b|^2 + (a.b)^2 = |a|^2 |b|^2
                    36 + (a.b)^2 = 9 x 16 = 144
                        (a.b)^2  = 108
                        |a . b|  = sqrt(108) = 6 sqrt(3)
```
> **SHORTCUT:** Whenever a question gives you TWO of {|a|, |b|, a.b, |a x b|}
> and asks for a third, it is Lagrange. Nothing else.

---

### Q4
If `a . b = 0` and `a x b = 0`, then

(a) a is parallel to b &nbsp;&nbsp; (b) a is perpendicular to b
(c) a = 0 or b = 0 &nbsp;&nbsp; (d) the angle is 45 degrees

**ANSWER: (c)**
```
  a . b = 0  ->  perpendicular  (angle 90)
  a x b = 0  ->  parallel       (angle 0 or 180)

  A non-zero pair cannot be both at once.
  So at least one of them must be the zero vector.
```

---

# PATTERN 2 — Angle between two vectors

### Q5
The angle between `i - j` and `j - k` is

(a) 30 deg &nbsp;&nbsp; (b) 60 deg &nbsp;&nbsp; (c) 90 deg &nbsp;&nbsp; (d) 120 deg

**ANSWER: (d)**
```
  a = i - j + 0k          b = 0i + j - k

  a . b = (1)(0) + (-1)(1) + (0)(-1) = -1

  |a| = sqrt(1 + 1) = sqrt2      |b| = sqrt(1 + 1) = sqrt2

  cos theta = -1 / (sqrt2 x sqrt2) = -1/2

  theta = 120 degrees
```
> **SHORTCUT:** A negative dot product instantly rules out every acute option.
> Only 120 deg is obtuse, so you can tick it without finishing the arithmetic.

---

### Q6
If `|a + b| = |a - b|`, the angle between a and b is

(a) 0 &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 90 deg &nbsp;&nbsp; (d) 180 deg

**ANSWER: (c)**
```
  Square both sides and cancel:  4(a.b) = 0  ->  a.b = 0  ->  90 degrees
```

---

### Q7
If a and b are unit vectors with an angle theta between them, then `|a - b|` =

(a) 2 sin(theta/2) &nbsp;&nbsp; (b) 2 cos(theta/2) &nbsp;&nbsp;
(c) sin theta &nbsp;&nbsp; (d) 1 - cos theta

**ANSWER: (a)**
```
  |a - b|^2 = |a|^2 + |b|^2 - 2(a.b)
            = 1 + 1 - 2 cos theta
            = 2(1 - cos theta)
            = 2 x 2 sin^2(theta/2)          [ 1 - cos t = 2 sin^2(t/2) ]
            = 4 sin^2(theta/2)

  |a - b| = 2 sin(theta/2)
```
> **SHORTCUT:** Companion result: `|a + b| = 2 cos(theta/2)` for unit vectors.
> Memorise the pair.

---

### Q8
If `|a| = |b| = 1` and `|a + b| = sqrt3`, then `(2a - 5b) . (3a + b)` =

(a) -11/2 &nbsp;&nbsp; (b) 11/2 &nbsp;&nbsp; (c) -5 &nbsp;&nbsp; (d) 0

**ANSWER: (a)**
```
  STEP 1   |a + b|^2 = 3
              1 + 1 + 2(a.b) = 3   ->   a.b = 1/2

  STEP 2   Expand like ordinary brackets.
              (2a - 5b).(3a + b)
                 = 6(a.a) + 2(a.b) - 15(b.a) - 5(b.b)
                 = 6(1) + 2(1/2) - 15(1/2) - 5(1)
                 = 6 + 1 - 7.5 - 5
                 = -5.5  =  -11/2
```

---

### Q9
If `|a| = |b|`, then the angle between `a + b` and `a - b` is

(a) 0 &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 90 deg &nbsp;&nbsp; (d) 60 deg

**ANSWER: (c)**
```
  (a + b).(a - b) = |a|^2 - |b|^2 = 0        (since |a| = |b|)
```
> **SHORTCUT:** This is the "diagonals of a rhombus" fact in disguise.

---

# PATTERN 3 — Find the missing letter (perpendicular / parallel)

### Q10
The value of lambda for which `2i + lambda j + k` and `i + 2j - 3k` are
perpendicular is

(a) 1/2 &nbsp;&nbsp; (b) -1/2 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (a)**
```
  Dot = 0:   (2)(1) + (lambda)(2) + (1)(-3) = 0
                  2 + 2 lambda - 3 = 0
                      2 lambda = 1
                        lambda = 1/2
```

---

### Q11
If `3i + 2j + 9k` and `i + lambda j + 3k` are parallel, then lambda =

(a) 2/3 &nbsp;&nbsp; (b) 3/2 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) 1/6

**ANSWER: (a)**
```
  Parallel means the components are proportional:

       3       2        9
      ---  =  ---  =   ---
       1     lambda     3

  From the outside pair:  3/1 = 9/3 = 3.
  So  2/lambda = 3   ->   lambda = 2/3
```
> **SHORTCUT:** For "parallel", never build the cross product. Just take the
> ratio of the two components that have no letter in them, then match.

---

### Q12
The vectors `2i - j + k`, `i - 3j - 5k` and `3i - 4j - 4k` form

(a) an equilateral triangle &nbsp;&nbsp; (b) an isosceles triangle
(c) a right-angled triangle &nbsp;&nbsp; (d) no triangle at all

**ANSWER: (c)**
```
  First:  (2i - j + k) + (i - 3j - 5k) = 3i - 4j - 4k        so they close
                                                              into a triangle
  Then:   (2i - j + k) . (i - 3j - 5k) = 2 + 3 - 5 = 0

  A zero dot product means those two sides meet at 90 degrees.
```

---

# PATTERN 4 — Projection and components

### Q13
The projection of `a = i + 3j + 7k` on `b = 7i - j + 8k` is

(a) 60/sqrt(114) &nbsp;&nbsp; (b) 60/sqrt(59) &nbsp;&nbsp;
(c) 60 &nbsp;&nbsp; (d) 6/sqrt(114)

**ANSWER: (a)**
```
  a . b = (1)(7) + (3)(-1) + (7)(8) = 7 - 3 + 56 = 60

  |b|   = sqrt(49 + 1 + 64) = sqrt(114)

  Projection = 60 / sqrt(114)
```
> **SHORTCUT:** "Projection of a ON b" -> divide by the length of the vector
> that comes AFTER the word "on". Circle that word in the question paper.

---

### Q14
The projection of `a = 2i + j + 2k` on `b = 5i - 3j + k` is

(a) 9/sqrt(35) &nbsp;&nbsp; (b) 9/3 &nbsp;&nbsp;
(c) 9/sqrt(9) &nbsp;&nbsp; (d) 3/sqrt(35)

**ANSWER: (a)**
```
  a . b = (2)(5) + (1)(-3) + (2)(1) = 10 - 3 + 2 = 9

  |b|   = sqrt(25 + 9 + 1) = sqrt(35)

  Projection = 9/sqrt(35)
```

---

### Q15
The component of `a = 2i + 3j + k` along `b = i + j + k` is

(a) 2i + 2j + 2k &nbsp;&nbsp; (b) j - k &nbsp;&nbsp;
(c) 6(i + j + k) &nbsp;&nbsp; (d) (6/sqrt3)(i + j + k)

**ANSWER: (a)**
```
  a . b = 2 + 3 + 1 = 6            |b|^2 = 1 + 1 + 1 = 3

  along b = ((a.b)/|b|^2) b = (6/3)(i + j + k) = 2i + 2j + 2k
```
> **SHORTCUT:** Note the denominator is `|b|^2 = 3`, NOT `|b| = sqrt3`.
> Option (d) is the trap for exactly that mistake.

---

# PATTERN 5 — Cross-product computation

### Q16
If `a = 3i + j + 2k` and `b = 2i - 2j + 4k`, then `|a x b|` =

(a) 8 sqrt3 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 24 &nbsp;&nbsp; (d) 4 sqrt3

**ANSWER: (a)**
```
             |  i    j    k  |
    a x b =  |  3    1    2  |
             |  2   -2    4  |

  i part :   (1)(4) - (2)(-2)     = 4 + 4  =  8
  j part : -[ (3)(4) - (2)(2) ]   = -[12-4] = -8
  k part :   (3)(-2) - (1)(2)     = -6 - 2 = -8

  a x b = 8i - 8j - 8k = 8(i - j - k)

  |a x b| = 8 sqrt(1 + 1 + 1) = 8 sqrt(3)
```
> **SHORTCUT:** Pull the common factor out of `a x b` BEFORE squaring.
> `8 sqrt3` in two seconds instead of `sqrt(192)` in twenty.

---

### Q17
A unit vector perpendicular to both `i + j` and `j + k` is

(a) (i - j + k)/sqrt3 &nbsp;&nbsp; (b) (i + j + k)/sqrt3
(c) (i + j - k)/sqrt3 &nbsp;&nbsp; (d) (i - j - k)/sqrt3

**ANSWER: (a)**
```
             |  i    j    k  |
             |  1    1    0  |
             |  0    1    1  |

  i part :   (1)(1) - (0)(1)    =  1
  j part : -[ (1)(1) - (0)(0) ] = -1
  k part :   (1)(1) - (1)(0)    =  1

  cross = i - j + k ,  magnitude = sqrt3

  unit vector = (i - j + k)/sqrt3
```
> **SHORTCUT:** Test the options instead of computing. The right one must give
> zero when dotted with BOTH given vectors. Option (a): (1)(1)+(-1)(1)+0 = 0
> and 0+(-1)(1)+(1)(1) = 0. Done.

---

### Q18
A vector of magnitude 5 perpendicular to both `i + 2j + k` and `2i - j + k` is

(a) 5(3i + j - 5k)/sqrt(35) &nbsp;&nbsp; (b) 5(3i + j - 5k)
(c) (3i + j - 5k)/sqrt(35) &nbsp;&nbsp; (d) 5(3i + j + 5k)/sqrt(35)

**ANSWER: (a)**
```
             |  i    j    k  |
             |  1    2    1  |
             |  2   -1    1  |

  i part :   (2)(1) - (1)(-1)     = 2 + 1  =  3
  j part : -[ (1)(1) - (1)(2) ]   = -[1-2]  =  1
  k part :   (1)(-1) - (2)(2)     = -1 - 4 = -5

  cross = 3i + j - 5k ,  magnitude = sqrt(9 + 1 + 25) = sqrt(35)

  required = 5 (3i + j - 5k)/sqrt(35)
```

---

### Q19
If `a x b = c x d` and `a x c = b x d`, then `(a - d)` is

(a) parallel to (b - c) &nbsp;&nbsp; (b) perpendicular to (b - c)
(c) equal to (b - c) &nbsp;&nbsp; (d) the zero vector

**ANSWER: (a)**
```
  (a - d) x (b - c)
      = (a x b) - (a x c) - (d x b) + (d x c)
      = (a x b) - (a x c) + (b x d) - (c x d)
      = [ (a x b) - (c x d) ]  -  [ (a x c) - (b x d) ]
      =        0               -          0
      = 0

  A zero cross product means the two vectors are PARALLEL.
```

---

# PATTERN 6 — Areas

### Q20
The area of the triangle with vertices `(1,1,2)`, `(2,3,5)`, `(1,5,5)` is

(a) sqrt(61)/2 &nbsp;&nbsp; (b) sqrt(61) &nbsp;&nbsp;
(c) 61/2 &nbsp;&nbsp; (d) sqrt(21)/2

**ANSWER: (a)**
```
  AB = (2-1, 3-1, 5-2) = (1, 2, 3)
  AC = (1-1, 5-1, 5-2) = (0, 4, 3)

             |  i    j    k  |
             |  1    2    3  |
             |  0    4    3  |

  i part :   (2)(3) - (3)(4)    =  6 - 12 = -6
  j part : -[ (1)(3) - (3)(0) ] = -3
  k part :   (1)(4) - (2)(0)    =  4

  cross = -6i - 3j + 4k ,  magnitude = sqrt(36 + 9 + 16) = sqrt(61)

  Area = (1/2) sqrt(61)
```

---

### Q21
The area of the parallelogram whose diagonals are `2i` and `3k` is

(a) 6 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 1.5 &nbsp;&nbsp; (d) 12

**ANSWER: (b)**
```
  DIAGONALS given, so  Area = (1/2)|d1 x d2|

  2i x 3k = 6 (i x k) = 6(-j) = -6j       magnitude = 6

  Area = (1/2)(6) = 3
```
> **SHORTCUT:** Diagonals -> use 1/2. Sides -> no 1/2. Option (a) is the trap
> for people who forget the 1/2.

---

### Q22
If a and b are the adjacent sides of a parallelogram with `|a| = 4`,
`|b| = 5` and the angle between them 30 degrees, the area is

(a) 10 &nbsp;&nbsp; (b) 20 &nbsp;&nbsp; (c) 10 sqrt3 &nbsp;&nbsp; (d) 5

**ANSWER: (a)**
```
  Area = |a x b| = |a| |b| sin theta = 4 x 5 x sin 30 = 20 x (1/2) = 10
```

---

# PATTERN 7 — Scalar triple product and volume

### Q23
`[ 2i , 3j , 5k ]` =

(a) 30 &nbsp;&nbsp; (b) 10 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) 15

**ANSWER: (a)**
```
  [2i, 3j, 5k] = 2 x 3 x 5 x [i j k] = 30 x 1 = 30
```
> **SHORTCUT:** Constants slide straight out of a scalar triple product.

---

### Q24
`[ i + j , j + k , k + i ]` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 3

**ANSWER: (c)**
```
        |  1    1    0  |
        |  0    1    1  |
        |  1    0    1  |

  = 1(1x1 - 1x0) - 1(0x1 - 1x1) + 0
  = 1(1) - 1(-1) + 0
  = 1 + 1 = 2
```
> **SHORTCUT:** Same as the volume of the parallelepiped built on those three
> edges, which is 2. Memorise this one — it appears constantly.

---

### Q25
`[ a - b , b - c , c - a ]` =

(a) 2[a b c] &nbsp;&nbsp; (b) [a b c] &nbsp;&nbsp;
(c) 0 &nbsp;&nbsp; (d) -[a b c]

**ANSWER: (c)**
```
  Notice that   (a - b) + (b - c) + (c - a) = 0.

  Three vectors that add to zero must lie in one plane,
  so they are COPLANAR, so their scalar triple product is 0.
```
> **SHORTCUT:** MINUS signs -> answer 0. PLUS signs -> answer 2[a b c].
> `[a+b, b+c, c+a] = 2[a b c]` and `[a-b, b-c, c-a] = 0`. Learn the pair.

---

### Q26
If `[a b c] = 4`, the volume of the tetrahedron with coterminous edges
a, b, c is

(a) 4 &nbsp;&nbsp; (b) 2/3 &nbsp;&nbsp; (c) 24 &nbsp;&nbsp; (d) 4/3

**ANSWER: (b)**
```
  Volume of tetrahedron = (1/6)|[a b c]| = 4/6 = 2/3
```
> **SHORTCUT:** Parallelepiped -> no fraction. Tetrahedron -> 1/6.
> Option (a) is the trap for forgetting the 1/6.

---

### Q27
The vectors `i - 2j + 3k`, `-2i + 3j - 4k`, `i - 3j + 5k` are

(a) coplanar &nbsp;&nbsp; (b) mutually perpendicular
(c) collinear &nbsp;&nbsp; (d) forming a box of volume 1

**ANSWER: (a)**
```
        |  1   -2    3  |
        | -2    3   -4  |
        |  1   -3    5  |

  = 1(15 - 12) + 2(-10 + 4) + 3(6 - 3)
  = 3 - 12 + 9
  = 0

  Zero triple product  ->  COPLANAR
```

---

### Q28
`[ a x b , b x c , c x a ]` =

(a) [a b c] &nbsp;&nbsp; (b) [a b c]^2 &nbsp;&nbsp;
(c) 2[a b c] &nbsp;&nbsp; (d) 0

**ANSWER: (b)**
```
  (b x c) x (c x a) = [b c a] c - [b c c] a = [a b c] c

  So the whole thing = (a x b) . ( [a b c] c )
                     = [a b c] x { (a x b).c }
                     = [a b c] x [a b c]
                     = [a b c]^2
```

---

### Q29
If a, b, c are non-coplanar with `[a b c] = 2`, then
`[ a + 2b , b + 2c , c + 2a ]` =

(a) 6 &nbsp;&nbsp; (b) 9 &nbsp;&nbsp; (c) 18 &nbsp;&nbsp; (d) 2

**ANSWER: (c)**
```
  Standard result:  [ a + m b , b + m c , c + m a ] = (1 + m^3) [a b c]

  Here m = 2 , so the factor is 1 + 8 = 9.

  Value = 9 x 2 = 18
```
> **SHORTCUT:** With m = 1 this gives `1 + 1 = 2`, which is the familiar
> `[a+b, b+c, c+a] = 2[a b c]`. Same formula, one memory slot.

---

### Q30
If a, b, c are mutually perpendicular UNIT vectors, then `|[a b c]|` =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) sqrt3

**ANSWER: (b)**
```
  Mutually perpendicular unit vectors behave exactly like i, j, k,
  and [i j k] = 1.

  So |[a b c]| = 1.   (The sign depends on the handedness.)
```

---

### Q31
If a, b, c are mutually perpendicular unit vectors, then `|a + b + c|` =

(a) 1 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) sqrt3 &nbsp;&nbsp; (d) 0

**ANSWER: (c)**
```
  |a+b+c|^2 = |a|^2 + |b|^2 + |c|^2 + 2(a.b + b.c + c.a)
            = 1 + 1 + 1 + 2(0 + 0 + 0)
            = 3

  |a + b + c| = sqrt(3)
```

---

# PATTERN 8 — Vector triple product

### Q32
`i x (j x k) + j x (k x i) + k x (i x j)` =

(a) i + j + k &nbsp;&nbsp; (b) 0 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) i - j + k

**ANSWER: (b)**
```
  j x k = i   ->   i x i = 0
  k x i = j   ->   j x j = 0
  i x j = k   ->   k x k = 0

  Sum = 0  (the zero vector)
```
> **SHORTCUT:** Any `x x (y x z) + y x (z x x) + z x (x x y)` is always the
> zero vector. It never needs computing.

---

### Q33
If `a = 2i - j + 3k`, `b = i + j - k`, `c = 3i - 2j + k`, then `a x (b x c)` =

(a) 17i + 7j - 9k &nbsp;&nbsp; (b) 17i - 7j + 9k
(c) 11i + 11j - 11k &nbsp;&nbsp; (d) 6i - 4j + 2k

**ANSWER: (a)**
```
  a x (b x c) = (a.c) b - (a.b) c

  a . c = (2)(3) + (-1)(-2) + (3)(1) = 6 + 2 + 3 = 11
  a . b = (2)(1) + (-1)(1) + (3)(-1) = 2 - 1 - 3 = -2

  = 11(i + j - k) + 2(3i - 2j + k)
  = 11i + 11j - 11k + 6i - 4j + 2k
  = 17i + 7j - 9k
```
> **SHORTCUT:** NEVER compute two cross products in an MCQ. The BAC-CAB
> formula turns a 90-second job into a 20-second job.

---

### Q34
`a x (b x c) = (a x b) x c` holds for all b if and only if

(a) a and b are collinear &nbsp;&nbsp; (b) a and c are collinear
(c) b and c are collinear &nbsp;&nbsp; (d) always

**ANSWER: (b)**
```
  LEFT  = (a.c) b - (a.b) c
  RIGHT = (a.c) b - (b.c) a

  Equal  =>  (a.b) c = (b.c) a

  The left side is a multiple of c and the right side is a multiple of a.
  For this to hold for every b, a and c must point along the same line,
  i.e. a and c are COLLINEAR.
```

---

### Q35
`(a x b) . (c x d)` equals

(a) (a.c)(b.d) - (a.d)(b.c) &nbsp;&nbsp; (b) (a.b)(c.d) - (a.d)(b.c)
(c) (a.d)(b.c) - (a.c)(b.d) &nbsp;&nbsp; (d) [a b c] d

**ANSWER: (a)**
```
        |  a.c    a.d  |
        |  b.c    b.d  |   =  (a.c)(b.d) - (a.d)(b.c)

  First letters (a, b) go DOWN the rows.
  Second letters (c, d) go ACROSS the columns.
```
> **SHORTCUT:** Put `c = a` and `d = b` and this collapses to Lagrange:
> `|a x b|^2 = |a|^2|b|^2 - (a.b)^2`. If you ever forget the layout, rebuild
> it from Lagrange in five seconds.

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+--------------------------------------+
  |  WHAT YOU SEE                        |  WHAT YOU DO, IMMEDIATELY            |
  +--------------------------------------+--------------------------------------+
  |  "angle between"                     |  cos th = (a.b)/(|a||b|)             |
  +--------------------------------------+--------------------------------------+
  |  "perpendicular" / "orthogonal"      |  set a . b = 0                       |
  +--------------------------------------+--------------------------------------+
  |  "parallel" / "collinear"            |  match the ratios, do NOT cross      |
  +--------------------------------------+--------------------------------------+
  |  "projection of a ON b"              |  (a.b)/|b| , divide by the one       |
  |                                      |  named after ON                      |
  +--------------------------------------+--------------------------------------+
  |  "component ALONG b"                 |  ((a.b)/|b|^2) b   - square it       |
  +--------------------------------------+--------------------------------------+
  |  two of {|a|,|b|,a.b,|a x b|} given  |  Lagrange, every single time         |
  +--------------------------------------+--------------------------------------+
  |  "area of TRIANGLE"                  |  (1/2)|AB x AC|                      |
  +--------------------------------------+--------------------------------------+
  |  "parallelogram from SIDES"          |  |a x b|      NO half                 |
  +--------------------------------------+--------------------------------------+
  |  "parallelogram from DIAGONALS"      |  (1/2)|d1 x d2|   YES half           |
  +--------------------------------------+--------------------------------------+
  |  "volume of parallelepiped"          |  |[a b c]|        NO sixth           |
  +--------------------------------------+--------------------------------------+
  |  "volume of tetrahedron"             |  (1/6)|[a b c]|   YES sixth          |
  +--------------------------------------+--------------------------------------+
  |  "coplanar" / "lie in one plane"     |  [a b c] = 0                         |
  +--------------------------------------+--------------------------------------+
  |  a bracket inside a cross            |  BAC minus CAB, never two crosses    |
  +--------------------------------------+--------------------------------------+
  |  [ ... with MINUS signs ... ]        |  the answer is 0                     |
  +--------------------------------------+--------------------------------------+
  |  [ a+b , b+c , c+a ]                 |  2 [a b c]                           |
  +--------------------------------------+--------------------------------------+
  |  [ a x b , b x c , c x a ]           |  [a b c]^2                           |
  +--------------------------------------+--------------------------------------+
  |  any repeated letter inside [ ]      |  the answer is 0, no work needed     |
  +--------------------------------------+--------------------------------------+
  |  "unit vector perpendicular to both" |  cross, then divide by its length,   |
  |                                      |  or just TEST the four options       |
  +--------------------------------------+--------------------------------------+
  |  a NEGATIVE dot product              |  the angle is obtuse - cross out     |
  |                                      |  every acute option instantly        |
  +--------------------------------------+--------------------------------------+
  |  a common factor inside a x b        |  pull it out BEFORE squaring         |
  +--------------------------------------+--------------------------------------+
  |  the answer must be a NUMBER but an  |  wrong option - eliminate it         |
  |  option contains i, j or k           |  without any calculation             |
  +--------------------------------------+--------------------------------------+
  |  the answer must be a VECTOR but an  |  wrong option - eliminate it         |
  |  option is a plain number            |  without any calculation             |
  +--------------------------------------+--------------------------------------+
```

```
  +-----------------------------------------------------------------+
  |  THE 10-SECOND ELIMINATION                                      |
  |                                                                 |
  |  Before doing ANY arithmetic, ask: should the answer be a       |
  |  NUMBER or a VECTOR?                                            |
  |                                                                 |
  |     a . b  and  [a b c]      ->  NUMBER                         |
  |     a x b  and  a x (b x c)  ->  VECTOR                         |
  |                                                                 |
  |  In EAPCET this alone kills one or two options in most vector   |
  |  questions, and there is no negative marking, so a 1-in-2 guess |
  |  is always worth taking.                                        |
  +-----------------------------------------------------------------+
```
