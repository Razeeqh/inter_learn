# Addition of Vectors — AP EAPCET / TG EAPCET / JEE Main Questions

All multiple choice. Speed matters more than elegance here.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip only if you truly   |
  |                  |                      |  do not know              |
  +------------------+----------------------+---------------------------+
```

**How many questions come from Addition of Vectors:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 4
  TG EAPCET  (Maths, 80 questions)  ->  2 to 4
  JEE Main   (Maths, 25 questions)  ->  0 to 1 on its own, but the ideas
                                        (position vectors, section formula,
                                        collinearity) appear INSIDE almost
                                        every Product-of-Vectors and 3D
                                        Geometry question.

  Add Product of Vectors and 3D Geometry and the vector block is worth
  roughly 6 to 9 EAPCET questions. Learning AB = b - a properly pays
  three times over.
```

> Questions are grouped by **PATTERN**, not by year, because the pattern is what
> repeats. Verify with the official papers before your exam.

---

# PATTERN 1 — Magnitude, unit vector, vector of a given magnitude
*(the free marks — never get these wrong)*

### Q1
If `a = 2i - j + 2k`, then `|a|` =

(a) 3 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) sqrt(5) &nbsp;&nbsp; (d) 9

**ANSWER: (a)**
```
  |a| = sqrt( 2^2 + (-1)^2 + 2^2 ) = sqrt(4 + 1 + 4) = sqrt(9) = 3
```
> **SHORTCUT:** (1,2,2), (2,3,6), (3,4,12) and (1,4,8) all give whole-number
> magnitudes 3, 7, 13 and 9. Exam setters love them. Spot the triple and write
> the answer without working.

---

### Q2
The unit vector in the direction of `3i - 4j` is

(a) `3i - 4j` &nbsp;&nbsp; (b) `(3i - 4j)/5` &nbsp;&nbsp; (c) `(3i - 4j)/7` &nbsp;&nbsp; (d) `(3i - 4j)/25`

**ANSWER: (b)**
```
  |a| = sqrt(9 + 16) = 5        a-hat = (3i - 4j)/5
```

---

### Q3
The vector of magnitude 9 in the direction of `a = i + 2j + 2k` is

(a) `9i + 18j + 18k` &nbsp;&nbsp; (b) `3i + 6j + 6k` &nbsp;&nbsp; (c) `i + 2j + 2k` &nbsp;&nbsp; (d) `3(i + j + k)`

**ANSWER: (b)**
```
  |a| = 3          9 x a/|a| = 9(i + 2j + 2k)/3 = 3(i + 2j + 2k) = 3i + 6j + 6k

  CHECK: |3i + 6j + 6k| = sqrt(9 + 36 + 36) = sqrt(81) = 9.
```
> **SHORTCUT:** "magnitude p along a" = `(p / |a|) x a`. Compute `p/|a|` FIRST;
> it is nearly always a neat number, and the rest is one multiplication.

---

### Q4
If `a = i + j`, `b = j + k`, `c = k + i`, then `|a + b + c|` =

(a) 2 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 2 sqrt(3) &nbsp;&nbsp; (d) sqrt(6)

**ANSWER: (c)**
```
  a + b + c = 2i + 2j + 2k

  |a + b + c| = sqrt(4 + 4 + 4) = sqrt(12) = 2 sqrt(3)
```

---

### Q5
The unit vector parallel to `2a - b + 3c`, where `a = i + j + k`, `b = 2i - j + 3k`,
`c = i - 2j + k`, is

(a) `(3i - 3j + 2k)/sqrt(22)` &nbsp;&nbsp; (b) `(3i + 3j + 2k)/sqrt(22)`
(c) `(3i - 3j + 2k)/22` &nbsp;&nbsp; (d) `(i - j + k)/sqrt(3)`

**ANSWER: (a)**
```
   2a = 2i + 2j + 2k
   -b = -2i +  j - 3k
   3c =  3i - 6j + 3k
        ------------------
        3i - 3j + 2k

  magnitude = sqrt(9 + 9 + 4) = sqrt(22)

  unit vector = (3i - 3j + 2k)/sqrt(22)
```

---

### Q6
The vector with initial point `(2, 5, 0)` and terminal point `(-3, 7, 4)` is

(a) `-i + 12j + 4k` &nbsp;&nbsp; (b) `5i - 2j - 4k` &nbsp;&nbsp; (c) `-5i + 2j + 4k` &nbsp;&nbsp; (d) `-5i - 2j + 4k`

**ANSWER: (c)**
```
  head minus tail:  (-3-2) i + (7-5) j + (4-0) k  =  -5i + 2j + 4k
```
> **SHORTCUT:** if two options differ only by an overall minus sign, one of them
> is the "tail minus head" trap. Terminal MINUS initial. Always.

---

# PATTERN 2 — Collinear / parallel vectors, find the missing letter

### Q7
If `2i + 3j + p k` and `4i + 6j - 8k` are collinear, then p =

(a) 4 &nbsp;&nbsp; (b) -4 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) -8

**ANSWER: (b)**
```
  4/2 = 2 and 6/3 = 2, so the multiplier is 2.

  -8 = 2 p    =>    p = -4
```

---

### Q8
If `2i - q j + 3k` and `4i - 5j + 6k` are collinear, then q =

(a) 5/2 &nbsp;&nbsp; (b) -5/2 &nbsp;&nbsp; (c) 10 &nbsp;&nbsp; (d) 5

**ANSWER: (a)**
```
  4/2 = 2 and 6/3 = 2, so the multiplier is 2.

  -5 = 2 (-q)   =>   -5 = -2q   =>   q = 5/2
```

---

### Q9
`a = 2i - 3j` and `b = -6i + 9j`. Then a and b are

(a) equal &nbsp;&nbsp; (b) like parallel vectors &nbsp;&nbsp;
(c) unlike parallel vectors &nbsp;&nbsp; (d) not parallel

**ANSWER: (c)**
```
  b = -3 a.  The multiplier is NEGATIVE, so they are parallel but
  point in OPPOSITE directions: UNLIKE parallel vectors.
```
> **SHORTCUT:** ratio positive -> like. Ratio negative -> unlike. That is the
> whole question.

---

### Q10
If a and b are non-collinear vectors and `(x - 2) a + (y - 1) b = 0`, then

(a) x = 0, y = 0 &nbsp;&nbsp; (b) x = 2, y = 1 &nbsp;&nbsp;
(c) x = 1, y = 2 &nbsp;&nbsp; (d) no solution

**ANSWER: (b)**
```
  Non-collinear = linearly independent, so the ONLY way a combination
  can be the zero vector is if every coefficient is zero:

       x - 2 = 0   =>   x = 2
       y - 1 = 0   =>   y = 1
```
> **SHORTCUT:** the words "non-collinear" (2 vectors) or "non-coplanar"
> (3 vectors) always mean: **set every coefficient to zero**.

---

# PATTERN 3 — Section formula, midpoints, ratios

### Q11
The point dividing the join of `A(i + 2j)` and `B(4i + 8j)` internally in the
ratio 1 : 2 is

(a) `2i + 4j` &nbsp;&nbsp; (b) `3i + 6j` &nbsp;&nbsp; (c) `-2i - 4j` &nbsp;&nbsp; (d) `5i + 10j`

**ANSWER: (a)**
```
      1 b + 2 a      (4i + 8j) + 2(i + 2j)      6i + 12j
   = ----------- =  ----------------------- =  ---------- =  2i + 4j
        1 + 2                 3                    3
```

---

### Q12
The point dividing the same join `A(i + 2j)`, `B(4i + 8j)` **externally** in the
ratio 1 : 2 is

(a) `2i + 4j` &nbsp;&nbsp; (b) `-2i - 4j` &nbsp;&nbsp; (c) `6i + 12j` &nbsp;&nbsp; (d) `-6i - 12j`

**ANSWER: (b)**
```
      1 b - 2 a      (4i + 8j) - 2(i + 2j)      2i + 4j
   = ----------- =  ----------------------- =  ---------  =  -2i - 4j
        1 - 2                -1                   -1
```
> **SHORTCUT:** internal and external answers always appear as two of the four
> options. Read the word **internally / externally** before you compute.

---

### Q13
R divides the join of `P(i + 2j - k)` and `Q(-i + j + k)` internally in the
ratio 2 : 1. Then R =

(a) `(-i + 4j + k)/3` &nbsp;&nbsp; (b) `(i + 4j + k)/3` &nbsp;&nbsp;
(c) `-3i + 3k` &nbsp;&nbsp; (d) `(i + 4j - k)/3`

**ANSWER: (a)**
```
      2 q + 1 p      2(-i + j + k) + (i + 2j - k)      -i + 4j + k
   = ----------- =  ------------------------------ =  -------------
        2 + 1                    3                          3
```

---

### Q14
For the same P and Q as in Q13, the point dividing PQ **externally** in the
ratio 2 : 1 is

(a) `-3i + 3k` &nbsp;&nbsp; (b) `3i - 3k` &nbsp;&nbsp; (c) `-3i - 3k` &nbsp;&nbsp; (d) `-i + 4j + k`

**ANSWER: (a)**
```
      2 q - 1 p      2(-i + j + k) - (i + 2j - k)      -3i + 0j + 3k
   = ----------- =  ------------------------------ =  --------------- 
        2 - 1                    1                            1

   = -3i + 3k
```

---

### Q15
The point `5i` divides the join of `i` and `7i` in the ratio

(a) 1 : 2 &nbsp;&nbsp; (b) 2 : 1 &nbsp;&nbsp; (c) 3 : 1 &nbsp;&nbsp; (d) 1 : 3

**ANSWER: (b)**
```
  Let the ratio be k : 1.

      7k + 1
     --------  =  5     =>   7k + 1 = 5k + 5   =>   2k = 4   =>   k = 2
       k + 1

  Ratio = 2 : 1     (positive k, so the division is INTERNAL)
```
> **SHORTCUT:** always set the ratio as `k : 1`. One unknown instead of two.
> A **negative** k means the division is external.

---

### Q16
The position vector of the point dividing the join of `2a - 3b` and `a + b`
in the ratio 3 : 1 is

(a) `(5/4) a` &nbsp;&nbsp; (b) `(5/4) b` &nbsp;&nbsp; (c) `(5a - 3b)/4` &nbsp;&nbsp; (d) `3a + b`

**ANSWER: (a)**
```
      3(a + b) + 1(2a - 3b)      3a + 3b + 2a - 3b       5a         5
   = ----------------------- =  ------------------- =  ------  =  --- a
              3 + 1                      4                4        4
```

---

# PATTERN 4 — Centroid and the standard centroid identities

### Q17
The centroid of the triangle whose vertices are `i + j`, `j + k`, `k + i` is

(a) `i + j + k` &nbsp;&nbsp; (b) `(2/3)(i + j + k)` &nbsp;&nbsp;
(c) `(1/3)(i + j + k)` &nbsp;&nbsp; (d) `2(i + j + k)`

**ANSWER: (b)**
```
  Sum = (i + j) + (j + k) + (k + i) = 2i + 2j + 2k

  G = (2i + 2j + 2k)/3 = (2/3)(i + j + k)
```

---

### Q18
If G is the centroid of triangle ABC, then `GA + GB + GC` =

(a) `3 G` &nbsp;&nbsp; (b) `0` &nbsp;&nbsp; (c) `a + b + c` &nbsp;&nbsp; (d) `-3 G`

**ANSWER: (b)**
```
  GA + GB + GC = (a - g) + (b - g) + (c - g)
               = (a + b + c) - 3g
               = 3g - 3g
               = 0
```
> **SHORTCUT:** anything of the form "sum of vectors FROM the centroid TO the
> vertices" is **0**. Anything "FROM a point O TO the vertices" is **3 OG**.

---

### Q19
If O is any point and G is the centroid of triangle ABC, then `OA + OB + OC` =

(a) `OG` &nbsp;&nbsp; (b) `2 OG` &nbsp;&nbsp; (c) `3 OG` &nbsp;&nbsp; (d) `0`

**ANSWER: (c)**
```
  OA + OB + OC = a + b + c = 3 x (a+b+c)/3 = 3 g = 3 OG
```

---

### Q20
If D, E, F are the midpoints of the sides BC, CA, AB of triangle ABC, then
`AD + BE + CF` =

(a) `0` &nbsp;&nbsp; (b) `3 AG` &nbsp;&nbsp; (c) `(a+b+c)/3` &nbsp;&nbsp; (d) `2 AD`

**ANSWER: (a)**
```
  AD = (b + c)/2 - a          BE = (c + a)/2 - b          CF = (a + b)/2 - c

  Sum = (2a + 2b + 2c)/2 - (a + b + c)
      = (a + b + c) - (a + b + c)
      = 0
```

---

### Q21
In triangle ABC, if `AB = a` and `AC = b`, then the median `AD` (D the midpoint
of BC) equals

(a) `(a + b)/2` &nbsp;&nbsp; (b) `(a - b)/2` &nbsp;&nbsp; (c) `a + b` &nbsp;&nbsp; (d) `(b - a)/2`

**ANSWER: (a)**
```
  Take A as the origin: B = a, C = b.

  D = midpoint of BC = (a + b)/2      so     AD = D - A = (a + b)/2
```

---

### Q22
The centroid of the tetrahedron with vertices at the origin, `2i`, `4j` and `6k` is

(a) `i + 2j + 3k` &nbsp;&nbsp; (b) `(2i + 4j + 6k)/3` &nbsp;&nbsp;
(c) `(i + 2j + 3k)/2` &nbsp;&nbsp; (d) `2i + 4j + 6k`

**ANSWER: (c)**
```
  Sum = 0 + 2i + 4j + 6k = 2i + 4j + 6k

  G = (2i + 4j + 6k)/4 = (i + 2j + 3k)/2
```
> **SHORTCUT:** count the corners. Triangle -> divide by 3. Tetrahedron -> by 4.

---

### Q23
If P is the point of intersection of the diagonals of parallelogram ABCD and O
is any point, then `OA + OB + OC + OD` =

(a) `OP` &nbsp;&nbsp; (b) `2 OP` &nbsp;&nbsp; (c) `3 OP` &nbsp;&nbsp; (d) `4 OP`

**ANSWER: (d)**
```
  The diagonals of a parallelogram BISECT each other, so P is the
  midpoint of BOTH AC and BD:

       (a + c)/2 = p     =>   a + c = 2p
       (b + d)/2 = p     =>   b + d = 2p

  OA + OB + OC + OD = a + b + c + d = 2p + 2p = 4p = 4 OP
```

---

# PATTERN 5 — Direction cosines and direction ratios

### Q24
The direction cosines of `i + j + k` are

(a) 1, 1, 1 &nbsp;&nbsp; (b) `1/3, 1/3, 1/3` &nbsp;&nbsp;
(c) `1/sqrt3, 1/sqrt3, 1/sqrt3` &nbsp;&nbsp; (d) `sqrt3, sqrt3, sqrt3`

**ANSWER: (c)**
```
  |a| = sqrt(1 + 1 + 1) = sqrt(3)

  l = m = n = 1/sqrt(3)

  CHECK: 1/3 + 1/3 + 1/3 = 1.   Correct.
```
> **SHORTCUT:** direction cosines must satisfy `l^2 + m^2 + n^2 = 1`.
> Test each option against that and three of the four die instantly.

---

### Q25
A line makes angles 90 degrees and 60 degrees with the x and y axes.
The angle it makes with the z-axis is

(a) 0 degrees &nbsp;&nbsp; (b) 30 or 150 degrees &nbsp;&nbsp;
(c) 45 degrees &nbsp;&nbsp; (d) 60 degrees

**ANSWER: (b)**
```
  l = cos 90 = 0        m = cos 60 = 1/2

  l^2 + m^2 + n^2 = 1
        0 + 1/4 + n^2 = 1
                 n^2  = 3/4
                  n   = +/- sqrt(3)/2

  gamma = 30 degrees   or   150 degrees
```

---

### Q26
If a line makes angles alpha, beta, gamma with the coordinate axes, then
`sin^2 alpha + sin^2 beta + sin^2 gamma` =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 0

**ANSWER: (b)**
```
  sin^2 = 1 - cos^2 for each angle, so

  sum = (1 - l^2) + (1 - m^2) + (1 - n^2)
      = 3 - (l^2 + m^2 + n^2)
      = 3 - 1
      = 2
```
> **SHORTCUT:** memorise the pair —
> `cos^2 + cos^2 + cos^2 = 1` and `sin^2 + sin^2 + sin^2 = 2`.

---

### Q27
The direction ratios of the line joining `(1, 2, 3)` and `(4, 5, 6)` are

(a) 4, 5, 6 &nbsp;&nbsp; (b) 3, 3, 3 &nbsp;&nbsp; (c) 5, 7, 9 &nbsp;&nbsp; (d) 1, 2, 3

**ANSWER: (b)**
```
  AB = (4-1, 5-2, 6-3) = (3, 3, 3)

  Direction ratios 3 : 3 : 3, or equally 1 : 1 : 1.
  (Direction COSINES would be 1/sqrt3 each.)
```

---

# PATTERN 6 — Collinear points and coplanar points

### Q28
The points with position vectors `a - 2b`, `3a + b`, `5a + 4b` (a, b non-collinear)
are

(a) collinear &nbsp;&nbsp; (b) vertices of a triangle &nbsp;&nbsp;
(c) coincident &nbsp;&nbsp; (d) nothing can be said

**ANSWER: (a)**
```
  P = a - 2b ,  Q = 3a + b ,  R = 5a + 4b

  PQ = Q - P = 2a + 3b
  PR = R - P = 4a + 6b = 2 (2a + 3b) = 2 PQ

  PR is a multiple of PQ and P is common, so the points are COLLINEAR.
```
> **SHORTCUT:** in an MCQ, just subtract the first point from the other two and
> look for one being a clean multiple of the other. Two subtractions, done.

---

### Q29
The points `A(1, 2, 3)`, `B(-1, -2, -1)`, `C(2, 3, 2)`, `D(4, 7, 6)` are

(a) collinear &nbsp;&nbsp; (b) coplanar &nbsp;&nbsp;
(c) vertices of a tetrahedron &nbsp;&nbsp; (d) coincident

**ANSWER: (b)**
```
  AB = (-2, -4, -4)      AC = (1, 1, -1)      AD = (3, 5, 3)

  Try AD = x AB + y AC :

      i :  -2x +  y = 3        ...(1)
      j :  -4x +  y = 5        ...(2)
      k :  -4x -  y = 3        ...(3)

  (2) - (1):   -2x = 2   =>   x = -1
  From (1):     y = 3 + 2x = 3 - 2 = 1

  VERIFY (3):  -4(-1) - 1 = 4 - 1 = 3      matches.

  So AD = -AB + AC : the four points are COPLANAR.
```

---

### Q30
If a, b, c are non-coplanar and the points `2a + 3b - c`, `a - 2b + 3c`,
`3a + 4b - 2c`, `a - 6b + 6c` are considered, then the lines joining the first
pair and the second pair

(a) are parallel &nbsp;&nbsp; (b) are skew &nbsp;&nbsp;
(c) intersect at `a + 2b` &nbsp;&nbsp; (d) intersect at `2a + b`

**ANSWER: (c)**
```
  Line 1 through 2a+3b-c and 3a+4b-2c :   r = (2+t)a + (3+t)b + (-1-t)c
  Line 2 through a-2b+3c and a-6b+6c   :   r = (1)a + (-2-4s)b + (3+3s)c

  Compare coefficients (legal: a, b, c non-coplanar):

     a :   2 + t = 1          =>   t = -1
     b :   3 + t = -2 - 4s    =>   2 = -2 - 4s   =>   s = -1
     c :  -1 - t = 3 + 3s     =>   0 = 0         consistent

  With t = -1 :   r = a + 2b + 0c = a + 2b
```

---

### Q31
Four points with position vectors a, b, c, d are coplanar if there exist scalars
x, y, z, w not all zero with `x a + y b + z c + w d = 0` and

(a) `x = y = z = w` &nbsp;&nbsp; (b) `x + y + z + w = 0` &nbsp;&nbsp;
(c) `x + y + z + w = 1` &nbsp;&nbsp; (d) `xyzw = 0`

**ANSWER: (b)**
```
  The extra condition "the coefficients add up to ZERO" is exactly what
  turns a statement about VECTORS into a statement about POINTS.

  (For three points to be COLLINEAR the same condition applies with
   three scalars:  xa + yb + zc = 0  and  x + y + z = 0.)
```

---

# PATTERN 7 — Polygon and hexagon identities

### Q32
In triangle ABC, `AB + BC + CA` =

(a) `0` &nbsp;&nbsp; (b) `2 AB` &nbsp;&nbsp; (c) `AC` &nbsp;&nbsp; (d) `3 AB`

**ANSWER: (a)**
```
  A closed journey returns to the start, so the total displacement is 0.
```

---

### Q33
In a pentagon ABCDE, `AB + BC + CD + DE` =

(a) `0` &nbsp;&nbsp; (b) `AE` &nbsp;&nbsp; (c) `EA` &nbsp;&nbsp; (d) `2 AE`

**ANSWER: (b)**
```
  Nose-to-tail from A to E:   AB + BC + CD + DE = AE
```

---

### Q34
`ABCDEF` is a regular hexagon with centre O. Then `AB + AC + AD + AE + AF` =

(a) `2 AO` &nbsp;&nbsp; (b) `3 AO` &nbsp;&nbsp; (c) `4 AO` &nbsp;&nbsp; (d) `6 AO`

**ANSWER: (d)**
```
  Put O at the origin with OA = a and OB = b. The six vertices of a
  regular hexagon are then

      A = a ,  B = b ,  C = b - a ,  D = -a ,  E = -b ,  F = a - b

  Now take HEAD MINUS TAIL for each of the five vectors:

      AB = b - a
      AC = (b - a) - a  =  b - 2a
      AD = (-a) - a     =  -2a
      AE = (-b) - a     =  -a - b
      AF = (a - b) - a  =  -b

  Add them, collecting a and b separately:

      a : -1 - 2 - 2 - 1 + 0  =  -6      ->   -6a
      b : +1 + 1 + 0 - 1 - 1  =   0      ->     0

      Sum  =  -6a

  And   AO = O - A = -a ,  so  -6a = 6 AO.
  Also  AD = -2a = 2 AO ,  so  -6a = 3 AD as well.

  Therefore  AB + AC + AD + AE + AF  =  6 AO  =  3 AD.
```

---

### Q35
`ABCDEF` is a regular hexagon with centre O. Then `AD + EB + FC` =

(a) `2 AB` &nbsp;&nbsp; (b) `3 AB` &nbsp;&nbsp; (c) `4 AB` &nbsp;&nbsp; (d) `0`

**ANSWER: (c)**
```
  With A = a, B = b, C = b - a, D = -a, E = -b, F = a - b :

     AD = D - A = -2a
     EB = B - E = b - (-b) = 2b
     FC = C - F = (b - a) - (a - b) = 2b - 2a

     Sum = -2a + 2b + 2b - 2a = -4a + 4b = 4(b - a) = 4 AB
```

---

### Q36
If ABCD is a quadrilateral and E, F are the midpoints of the diagonals AC and BD,
then `AB + AD + CB + CD` =

(a) `2 EF` &nbsp;&nbsp; (b) `4 EF` &nbsp;&nbsp; (c) `EF` &nbsp;&nbsp; (d) `0`

**ANSWER: (b)**
```
  AB + AD + CB + CD = (b - a) + (d - a) + (b - c) + (d - c)
                    = 2b + 2d - 2a - 2c
                    = 2 [ (b + d) - (a + c) ]

  E = (a + c)/2 ,  F = (b + d)/2 ,  so  EF = F - E = [ (b+d) - (a+c) ] / 2

  Hence the sum = 2 x 2 EF = 4 EF
```

---

# PATTERN 8 — Linear dependence and independence

### Q37
Which of the following sets is linearly DEPENDENT?

(a) `i, j, k` &nbsp;&nbsp; (b) `i + j, j + k, k + i` &nbsp;&nbsp;
(c) `i - j, j - k, k - i` &nbsp;&nbsp; (d) `i, i + j, i + j + k`

**ANSWER: (c)**
```
  (i - j) + (j - k) + (k - i) = 0

  The three coefficients are 1, 1, 1 — NOT all zero — yet the combination
  is the zero vector. So the set is LINEARLY DEPENDENT (the three vectors
  are coplanar).

  For (b):  the only combination giving 0 is the all-zero one, so
            i+j, j+k, k+i are INDEPENDENT.
```
> **SHORTCUT:** if the three vectors visibly add to zero, they are dependent.
> Scan the options for that first — it takes two seconds.

---

### Q38
Two non-zero vectors a and b are linearly dependent if and only if they are

(a) perpendicular &nbsp;&nbsp; (b) collinear &nbsp;&nbsp;
(c) coplanar &nbsp;&nbsp; (d) equal

**ANSWER: (b)**
```
  x a + y b = 0 with x, y not both zero  =>  a = -(y/x) b  =>  a is a
  scalar multiple of b  =>  a and b are COLLINEAR (parallel).

  Remember the ladder:
      2 vectors dependent  <=>  COLLINEAR
      3 vectors dependent  <=>  COPLANAR
      4 or more in 3D      <=>  ALWAYS dependent
```

---

# PATTERN 9 — Magnitudes of sums, the triangle inequality

### Q39
If `|a| = 3`, `|b| = 4` and a, b are LIKE parallel vectors, then `|a + b|` =

(a) 1 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 12

**ANSWER: (c)**
```
  Like (same direction) means the arrows lie end to end along one line,
  so the lengths simply add:  |a + b| = 3 + 4 = 7.

  This is the MAXIMUM possible value of |a + b|.
```

---

### Q40
With the same `|a| = 3`, `|b| = 4` but a, b UNLIKE (opposite directions),
`|a + b|` =

(a) 1 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 0

**ANSWER: (a)**
```
  Opposite directions, so the lengths subtract:  |4 - 3| = 1.

  This is the MINIMUM possible value of |a + b|.

  In general:      | |a| - |b| |  <=  |a + b|  <=  |a| + |b|
                          1      <=  |a + b|  <=       7
```
> **SHORTCUT:** any question giving only `|a|`, `|b|` and asking for `|a+b|`
> without an angle must be one of the two extreme cases. Check "like/unlike"
> and answer in three seconds.

---

# PATTERN 10 — Vector equations of lines and planes

### Q41
The vector equation `r = (1 - t) a + t b` represents

(a) the plane through a and b &nbsp;&nbsp; (b) the line through the points a and b
(c) the midpoint of ab &nbsp;&nbsp; (d) a circle

**ANSWER: (b)**
```
  Rewrite:  r = a + t (b - a).  A fixed point a plus a multiple of the
  direction (b - a) is a straight LINE through A and B.

  t = 0 -> A ,  t = 1 -> B ,  t = 1/2 -> the midpoint.
```
> **SHORTCUT:** if the coefficients add up to 1 and there is ONE parameter,
> it is a LINE. If they add up to 1 with TWO parameters, it is a PLANE.

---

### Q42
The vector equation of the line through `2i - j + k` parallel to `3i + 4j - 2k` is

(a) `r = (3i + 4j - 2k) + t(2i - j + k)` &nbsp;&nbsp;
(b) `r = (2i - j + k) + t(3i + 4j - 2k)`
(c) `r = t(2i - j + k)` &nbsp;&nbsp;
(d) `r = (2i - j + k) + t(2i - j + k)`

**ANSWER: (b)**
```
  r = (point) + t (direction).   Point first, direction attached to t.
```
> **SHORTCUT:** option (a) is the classic swap trap. The POINT is the free
> term; the DIRECTION always sits with the parameter.

---

### Q43
`r = (1 - s - t) a + s b + t c` (with a, b, c the position vectors of three
non-collinear points) represents

(a) a line &nbsp;&nbsp; (b) a plane through the three points &nbsp;&nbsp;
(c) a sphere &nbsp;&nbsp; (d) a tetrahedron

**ANSWER: (b)**
```
  Two independent parameters s and t, and the coefficients (1-s-t) + s + t = 1.
  Two parameters = a two-dimensional set = a PLANE, and putting
  (s,t) = (0,0), (1,0), (0,1) gives a, b, c, so it passes through all three.
```

---

### Q44
If `a`, `b`, `c` are the position vectors of three collinear points, then the
vector equation `r = (1 - s - t) a + s b + t c` represents

(a) a plane &nbsp;&nbsp; (b) a line &nbsp;&nbsp; (c) a point &nbsp;&nbsp; (d) empty set

**ANSWER: (b)**
```
  If the three points are collinear, then (c - a) is already a multiple of
  (b - a), so there is really only ONE independent direction.
  The "plane" collapses to a LINE.

  This is exactly why the plane formula requires the three points to be
  NON-COLLINEAR.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +------------------------------------+--------------------------------------+
  |  IF YOU SEE THIS ...               |  DO THIS IMMEDIATELY                 |
  +------------------------------------+--------------------------------------+
  |  Two POINTS given                  |  Write AB = b - a. Head minus tail.  |
  +------------------------------------+--------------------------------------+
  |  "unit vector in the direction of" |  Divide by the magnitude. Nothing    |
  |                                    |  else.                               |
  +------------------------------------+--------------------------------------+
  |  "vector of magnitude p along a"   |  Compute p/|a| first, then multiply. |
  +------------------------------------+--------------------------------------+
  |  "collinear / parallel vectors"    |  Set components proportional. Read   |
  |  with a missing letter             |  the ratio off the pair you already  |
  |                                    |  know.                               |
  +------------------------------------+--------------------------------------+
  |  "ratio m : n" anywhere            |  (m b + n a)/(m + n). CROSS OVER:    |
  |                                    |  m goes with the SECOND point.       |
  +------------------------------------+--------------------------------------+
  |  The word "externally"             |  Same formula, both signs flip to    |
  |                                    |  minus:  (m b - n a)/(m - n).        |
  +------------------------------------+--------------------------------------+
  |  "in what ratio does P divide AB"  |  Let the ratio be k : 1. One         |
  |                                    |  equation, one unknown.              |
  +------------------------------------+--------------------------------------+
  |  "centroid"                        |  Add the corners, divide by how      |
  |                                    |  many. 3 for a triangle, 4 for a     |
  |                                    |  tetrahedron.                        |
  +------------------------------------+--------------------------------------+
  |  Anything starting "from G" in a   |  The answer is 0.                    |
  |  triangle (GA + GB + GC)           |                                      |
  +------------------------------------+--------------------------------------+
  |  Anything "from O" to the vertices |  The answer is 3 OG.                 |
  +------------------------------------+--------------------------------------+
  |  "direction cosines"               |  Test the options with               |
  |                                    |  l^2 + m^2 + n^2 = 1. Three options  |
  |                                    |  usually die at once.                |
  +------------------------------------+--------------------------------------+
  |  angles with the axes, one missing |  cos^2 + cos^2 + cos^2 = 1           |
  +------------------------------------+--------------------------------------+
  |  sin^2 alpha + sin^2 beta +        |  The answer is 2. Always.            |
  |  sin^2 gamma                       |                                      |
  +------------------------------------+--------------------------------------+
  |  "prove 3 points collinear"        |  AB and AC: is one a clean multiple  |
  |                                    |  of the other?                       |
  +------------------------------------+--------------------------------------+
  |  "prove 4 points coplanar"         |  AD = x AB + y AC. Solve two of the  |
  |                                    |  three equations, verify the third.  |
  +------------------------------------+--------------------------------------+
  |  "non-collinear" or "non-coplanar" |  You may COMPARE COEFFICIENTS. Set   |
  |                                    |  each one equal / to zero.           |
  +------------------------------------+--------------------------------------+
  |  A closed figure (triangle,        |  The sum of the sides taken in order |
  |  pentagon, hexagon)                |  is 0.                               |
  +------------------------------------+--------------------------------------+
  |  A regular hexagon ABCDEF, centre O|  Put O at the origin, OA = a, OB = b,|
  |                                    |  then C = b-a, D = -a, E = -b,       |
  |                                    |  F = a-b. Every identity falls out.  |
  +------------------------------------+--------------------------------------+
  |  Only |a| and |b| given, no angle, |  It is the like/unlike extreme case: |
  |  and |a+b| is asked                |  the answer is |a|+|b| or ||a|-|b||. |
  +------------------------------------+--------------------------------------+
  |  Two parameters and coefficients   |  It is a PLANE. One parameter -> a   |
  |  summing to 1                      |  LINE.                               |
  +------------------------------------+--------------------------------------+
  |  You have 20 seconds left and no   |  EAPCET has NO negative marking.     |
  |  idea                              |  MARK SOMETHING. Never leave a blank.|
  +------------------------------------+--------------------------------------+
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   THE THREE-SECOND SANITY CHECK BEFORE YOU BUBBLE AN ANSWER:        |
  |                                                                     |
  |     * Did the question want a VECTOR or a NUMBER?                   |
  |     * Is my "unit vector" really of length 1?                       |
  |     * Did I read INTERNALLY or EXTERNALLY?                          |
  |     * Did I do HEAD minus TAIL, not tail minus head?                |
  |                                                                     |
  |   Those four checks catch almost every wrong answer in this chapter.|
  |                                                                     |
  +---------------------------------------------------------------------+
```
