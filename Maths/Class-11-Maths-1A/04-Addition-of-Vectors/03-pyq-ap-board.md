# Addition of Vectors — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 4 — Addition of Vectors**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> and the same problem appears in March, in the supplementary and again two years
> later with different numbers. So everything below is grouped by **how often it
> appears**, not by a single exam year. Never quote a year in your answer.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  +------------+------------------+--------------+------------------------+
  | SECTION    | MARKS EACH       | YOU ATTEMPT  | THIS CHAPTER USUALLY   |
  +------------+------------------+--------------+------------------------+
  | Section A  |  2 marks         | ALL 10 = 20  |  Q4  (sometimes Q5)    |
  | Section B  |  4 marks         | ANY 5  = 20  |  Q12 or Q13            |
  | Section C  |  7 marks         | ANY 5  = 35  |  Q21                   |
  +------------+------------------+--------------+------------------------+

  Q21 in Section C is ADDITION OF VECTORS and Q22 is PRODUCT OF VECTORS
  in almost every paper. Two vector long answers side by side = 14 marks.
```

**Realistic haul from this chapter: 11 to 13 marks out of 75.**

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are COMPULSORY. Answer all 10. This chapter gives you one.
# ===============================================================

## Topic: The vector joining two points

### Q A1
The position vectors of A and B are `2i + 3j - k` and `4i - 3j + 2k`.
Find `AB` and `|AB|`.

**ANSWER:**
```
  AB = b - a                                 (head minus tail)
     = (4i - 3j + 2k) - (2i + 3j - k)
     = (4-2) i + (-3-3) j + (2+1) k
     = 2i - 6j + 3k

  |AB| = sqrt( 2^2 + (-6)^2 + 3^2 )
       = sqrt( 4 + 36 + 9 )
       = sqrt(49)
       = 7
```

---

### Q A2
If the position vectors of P and Q are `i + 3j - 7k` and `5i - 2j + 4k`,
find `PQ` and `|PQ|`.

**ANSWER:**
```
  PQ = q - p = (5-1) i + (-2-3) j + (4+7) k  =  4i - 5j + 11k

  |PQ| = sqrt( 16 + 25 + 121 ) = sqrt(162) = sqrt(81 x 2) = 9 sqrt(2)
```

---

### Q A3
`OA = i + j + k`, `AB = 3i - 2j + k`, `BC = i + 2j - 2k`, `CD = 2i + j + 3k`.
Find `OD`.

**ANSWER:**
```
  By the polygon law:   OD = OA + AB + BC + CD

     i :  1 + 3 + 1 + 2  =  7
     j :  1 - 2 + 2 + 1  =  2
     k :  1 + 1 - 2 + 3  =  3

  OD = 7i + 2j + 3k
```

---

## Topic: Magnitude, unit vectors, vectors of a given magnitude

### Q A4
Find `|a|` and the unit vector in the direction of `a = 2i - 3j + 6k`.

**ANSWER:**
```
  |a| = sqrt( 4 + 9 + 36 ) = sqrt(49) = 7

              a       2i - 3j + 6k
  a-hat  =  ----- =  --------------
             |a|           7

  CHECK: (2/7)^2 + (3/7)^2 + (6/7)^2 = (4+9+36)/49 = 1.  It is a unit vector.
```

---

### Q A5
Find the unit vector in the direction of the sum of the vectors
`a = 2i + 2j - 5k` and `b = 2i + j + 3k`.

**ANSWER:**
```
  a + b = (2+2) i + (2+1) j + (-5+3) k  =  4i + 3j - 2k

  |a + b| = sqrt( 16 + 9 + 4 ) = sqrt(29)

                       4i + 3j - 2k
  unit vector  =  ---------------------
                        sqrt(29)
```

---

### Q A6
`a = i + 2j + 3k`, `b = 3i + j`. Find the unit vector in the direction of `a + b`.

**ANSWER:**
```
  a + b = 4i + 3j + 3k

  |a + b| = sqrt( 16 + 9 + 9 ) = sqrt(34)

  unit vector = ( 4i + 3j + 3k ) / sqrt(34)
```

---

### Q A7
Find the vector of magnitude 5 in the direction of `a = i + 2j + 2k`.

**ANSWER:**
```
  |a| = sqrt( 1 + 4 + 4 ) = sqrt(9) = 3

                      a          5
  required = 5 x  -------  =  ------ ( i + 2j + 2k )
                    |a|          3

           =  (5/3) i  +  (10/3) j  +  (10/3) k

  CHECK: magnitude = (5/3) sqrt(1+4+4) = (5/3)(3) = 5.   Correct.
```

---

### Q A8
Find a unit vector in the direction **opposite** to `a = 3i - 4j`.

**ANSWER:**
```
  |a| = sqrt( 9 + 16 ) = 5

  opposite unit vector  =  - a / |a|  =  ( -3i + 4j ) / 5
```

---

## Topic: Collinear vectors

### Q A9
If the vectors `-3i + 4j + p k` and `q i + 8j + 6k` are collinear, find p and q.

**ANSWER:**
```
  Collinear  =>  components proportional:

        q         8         6
      ----  =  -----  =  -----
      -3         4         p

  Middle ratio:  8/4 = 2, so the common multiplier is k = 2.

      q = 2(-3) = -6            6 = 2 p  =>  p = 3

  CHECK: (-6, 8, 6) = 2(-3, 4, 3).   Correct.

  p = 3 ,  q = -6
```

---

### Q A10
If `a = 2i + 5j + k` and `b = 4i + m j + n k` are collinear vectors, find m and n.

**ANSWER:**
```
  4/2 = 2, so k = 2 and b = 2a.

  m = 2(5) = 10           n = 2(1) = 2

  m = 10 ,  n = 2
```

---

### Q A11
Show that `a = 2i - 3j + 4k` and `b = -4i + 6j - 8k` are collinear, and state
whether they are like or unlike.

**ANSWER:**
```
  b = -2 ( 2i - 3j + 4k ) = -2 a

  b is a scalar multiple of a, so they are COLLINEAR.
  The multiplier k = -2 is NEGATIVE, so they are UNLIKE vectors
  (parallel but opposite in direction), and |b| = 2|a|.
```

---

## Topic: Direction cosines and direction ratios

### Q A12
Find the direction cosines of `a = 3i - 6j + 2k`, and its direction ratios.

**ANSWER:**
```
  |a| = sqrt( 9 + 36 + 4 ) = sqrt(49) = 7

  l = 3/7 ,   m = -6/7 ,   n = 2/7

  CHECK: l^2 + m^2 + n^2 = (9 + 36 + 4)/49 = 49/49 = 1.   Correct.

  Direction ratios:  3 : -6 : 2   (or any multiple, e.g. 6 : -12 : 4)
```

---

### Q A13
Find the direction cosines of the line joining `A(1, 2, 3)` and `B(4, 6, 3)`.

**ANSWER:**
```
  AB = (4-1) i + (6-2) j + (3-3) k  =  3i + 4j + 0k

  |AB| = sqrt( 9 + 16 + 0 ) = 5

  l = 3/5 ,   m = 4/5 ,   n = 0

  CHECK: 9/25 + 16/25 + 0 = 1.   Correct.
  (n = 0 means the line is perpendicular to the z-axis — both points have z = 3.)
```

---

### Q A14
Find the direction cosines of `3i - 4j + 5k`.

**ANSWER:**
```
  |a| = sqrt( 9 + 16 + 25 ) = sqrt(50) = 5 sqrt(2)

           3              -4               5           1
  l = ---------- , m = ---------- , n = ---------- = -------
      5 sqrt(2)        5 sqrt(2)        5 sqrt(2)     sqrt(2)

  CHECK: (9 + 16 + 25) / 50 = 50/50 = 1.   Correct.
```

---

## Topic: Midpoint, section formula, centroid

### Q A15
Find the position vector of the midpoint of the join of `P(2, 3, 4)` and `Q(4, 1, -2)`.

**ANSWER:**
```
       p + q      (2i + 3j + 4k) + (4i + j - 2k)      6i + 4j + 2k
  M = ------- =  -------------------------------- =  --------------
         2                      2                          2

    =  3i + 2j + k                so the midpoint is (3, 2, 1)
```

---

### Q A16
Find the point which divides the join of `A(i + 2j + 3k)` and `B(4i - j)`
internally in the ratio 2 : 1.

**ANSWER:**
```
       m b + n a      2(4i - j) + 1(i + 2j + 3k)      9i + 0j + 3k
  r = ----------- =  ---------------------------- =  --------------
         m + n                    3                        3

    =  3i + k                so the point is (3, 0, 1)

  CHECK: A + (2/3) AB = (1,2,3) + (2/3)(3,-3,-3) = (1,2,3) + (2,-2,-2)
                      = (3, 0, 1).   Correct.
```

---

### Q A17
Find the centroid of the triangle whose vertices have position vectors
`i + 2j + 3k`, `2i + 3j + k`, `3i + j + 2k`.

**ANSWER:**
```
       a + b + c      (1+2+3) i + (2+3+1) j + (3+1+2) k      6i + 6j + 6k
  G = ----------- =  ----------------------------------- =  --------------
           3                          3                            3

    =  2i + 2j + 2k
```

---

### Q A18
Find the centroid of the tetrahedron whose vertices are
`i + j + k`, `2i + 3j - k`, `3i - j + 2k`, `2i + j + 2k`.

**ANSWER:**
```
     i : 1 + 2 + 3 + 2 = 8        j : 1 + 3 - 1 + 1 = 4
     k : 1 - 1 + 2 + 2 = 4

       8i + 4j + 4k
  G = -------------- =  2i + j + k
             4
```

---

### Q A19
If G is the centroid of triangle ABC, show that `GA + GB + GC = 0`.

**ANSWER:**
```
  Take any origin O and write g = (a + b + c)/3.

  GA + GB + GC = (a - g) + (b - g) + (c - g)
               = (a + b + c) - 3g
                                    ( a + b + c )
               = (a + b + c) - 3 x  ---------------
                                          3
               = (a + b + c) - (a + b + c)
               = 0
```

---

## Topic: Vector equations of lines and planes

### Q A20
Find the vector equation of the line passing through the point `2i + 3j + k`
and parallel to the vector `4i - 2j + 3k`.

**ANSWER:**
```
  r = a + t b  =  ( 2i + 3j + k )  +  t ( 4i - 2j + 3k ) ,    t in R
```

---

### Q A21
Find the vector equation of the line joining the points `2i + j + 3k` and
`-4i + 3j - k`.

**ANSWER:**
```
  b - a = (-4-2) i + (3-1) j + (-1-3) k  =  -6i + 2j - 4k

  r = a + t (b - a)  =  ( 2i + j + 3k ) + t ( -6i + 2j - 4k ) ,   t in R
```

---

### Q A22
Find the vector equation of the plane passing through the points
`i - 2j + 5k`, `-5j - k` and `-3i + 5j`.

**ANSWER:**
```
  a = i - 2j + 5k ,  b = -5j - k ,  c = -3i + 5j

  r = (1 - s - t) a + s b + t c

  r = (1 - s - t)( i - 2j + 5k ) + s( -5j - k ) + t( -3i + 5j ) ,  s, t in R
```

---

## Topic: Definitions and short theory

### Q A23
State the parallelogram law of addition of vectors.

**ANSWER:**
```
  If two vectors are represented in magnitude and direction by two ADJACENT
  SIDES of a parallelogram drawn from a point, then their SUM is represented
  in magnitude and direction by the DIAGONAL of that parallelogram passing
  through the same point.

              D +-------------------+ C
               /                   /
          b   /       a + b       /            AB + AD = AC
             /                   /
            +-------------------+
            A         a          B
```

---

### Q A24
Define: (i) a unit vector (ii) coplanar vectors (iii) the zero vector.

**ANSWER:**
```
  (i)   UNIT VECTOR  — a vector whose magnitude is exactly 1.
                       The unit vector along a is  a-hat = a / |a|.

  (ii)  COPLANAR VECTORS — vectors that lie in the same plane, or in
                       parallel planes, when drawn from a common point.
                       Three vectors a, b, c are coplanar if one of them
                       can be written as a linear combination of the other
                       two, e.g.  c = x a + y b.

  (iii) ZERO (NULL) VECTOR — the vector of magnitude 0, whose direction is
                       indeterminate. Written 0. For any point A, AA = 0,
                       and a + (-a) = 0.
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks each, answer any 5 of 7)
# ===============================================================

### Q B1 — Right-angled triangle (very common)
Show that the points `A(2i - j + k)`, `B(i - 3j - 5k)`, `C(3i - 4j - 4k)`
form a right-angled triangle.

**ANSWER:**
```
  AB = b - a = (1-2)i + (-3+1)j + (-5-1)k  =  -i - 2j - 6k
  BC = c - b = (3-1)i + (-4+3)j + (-4+5)k  =  2i -  j +  k
  CA = a - c = (2-3)i + (-1+4)j + (1+4)k   =  -i + 3j + 5k

  |AB|^2 = 1 +  4 + 36 = 41
  |BC|^2 = 4 +  1 +  1 =  6
  |CA|^2 = 1 +  9 + 25 = 35

  |BC|^2 + |CA|^2 = 6 + 35 = 41 = |AB|^2

  Pythagoras is satisfied, so triangle ABC is RIGHT-ANGLED, with the
  right angle at C (the vertex opposite the longest side AB).
```

---

### Q B2 — Collinearity with non-coplanar a, b, c (very common)
If a, b, c are non-coplanar vectors, show that the points with position vectors
`a - 2b + 3c`, `2a + 3b - 4c`, `-7b + 10c` are collinear.

**ANSWER:**
```
  Let  P = a - 2b + 3c ,  Q = 2a + 3b - 4c ,  R = 0a - 7b + 10c

  PQ = Q - P = (2-1) a + (3+2) b + (-4-3) c  =   a + 5b - 7c

  PR = R - P = (0-1) a + (-7+2) b + (10-3) c = -a - 5b + 7c

  Clearly    PR  =  -1 ( a + 5b - 7c )  =  -1 (PQ)

  So PR is a scalar multiple of PQ, i.e. PR is parallel to PQ, and both
  pass through the point P.

  Therefore P, Q, R are COLLINEAR.
  (Since PR = -PQ, the point P is the MIDPOINT of QR.)
```

---

### Q B3 — Collinearity in i, j, k form
Show that the points with position vectors `-2i + 3j + 5k`, `i + 2j + 3k`,
`7i - k` are collinear.

**ANSWER:**
```
  P = -2i + 3j + 5k ,  Q = i + 2j + 3k ,  R = 7i + 0j - k

  PQ = (1+2) i + (2-3) j + (3-5) k  =  3i -  j - 2k
  PR = (7+2) i + (0-3) j + (-1-5) k =  9i - 3j - 6k

  PR = 3 ( 3i - j - 2k ) = 3 PQ

  PR is parallel to PQ and P is common, so P, Q, R are COLLINEAR.
  Also |PR| = 3|PQ|, so Q divides PR in the ratio PQ : QR = 1 : 2.
```

---

### Q B4 — Section formula, internal and external (very common)
Find the position vector of the point which divides the join of the points
`2a - 3b` and `3a - 2b` (i) internally and (ii) externally in the ratio 2 : 3.

**ANSWER:**
```
  Let  P = 2a - 3b  (first point) ,  Q = 3a - 2b  (second point) ,
       m = 2 , n = 3

  (i) INTERNALLY

         m Q + n P      2(3a - 2b) + 3(2a - 3b)      (6a - 4b) + (6a - 9b)
   r = ------------ =  -------------------------- =  ----------------------
           m + n                  5                            5

              12a - 13b
        =  --------------
                  5

  (ii) EXTERNALLY

         m Q - n P      2(3a - 2b) - 3(2a - 3b)      (6a - 4b) - (6a - 9b)
   r = ------------ =  -------------------------- =  ----------------------
           m - n              2 - 3                          -1

              0a + 5b
        =  ----------- =  -5 b
                -1

  CHECK on (ii):  with R = -5b,
        PR = R - P = -5b - 2a + 3b = -2(a + b)
        RQ = Q - R = 3a - 2b + 5b  =  3(a + b)
        PR : RQ = -2 : 3, and the minus sign confirms EXTERNAL division
        in the ratio 2 : 3.   Correct.
```

---

### Q B5 — Find the ratio
Find the ratio in which the point `P(4i - j)` divides the join of
`A(i + 2j + 3k)` and `B(5i - 2j - k)`.

**ANSWER:**
```
  Let P divide AB in the ratio  k : 1.  Then

          k b + a       k(5i - 2j - k) + (i + 2j + 3k)
   p  =  --------- =  ---------------------------------
           k + 1                    k + 1

  Compare the i components with p = 4i - j + 0k :

          5k + 1
         --------  =  4      =>   5k + 1 = 4k + 4    =>   k = 3
           k + 1

  CHECK with the j components:

          -2k + 2       -6 + 2       -4
         ---------  =  --------  =  ----  =  -1        matches.
           k + 1          4           4

  CHECK with the k components:

          -k + 3        -3 + 3
         ---------  =  --------  =  0                  matches.
           k + 1           4

  So P divides AB INTERNALLY in the ratio  3 : 1.
```

---

### Q B6 — Polygon identity (very common)
In a pentagon ABCDE, show that
`AB + AE + BC + DC + ED + AC = 3 AC`.

**ANSWER:**
```
  Regroup the six vectors into three nose-to-tail journeys that all
  start at A and finish at C:

     Journey 1 :   AB + BC             =  AC
     Journey 2 :   AE + ED + DC        =  AC
     Journey 3 :   AC                  =  AC

  Every one of the six given vectors is used exactly once.

  Adding the three journeys:

     AB + AE + BC + DC + ED + AC  =  AC + AC + AC  =  3 AC     [proved]
```

---

### Q B7 — Regular hexagon (very common)
`ABCDEF` is a regular hexagon with centre O. Show that `AD + EB + FC = 4 AB`.

**ANSWER:**
```
                 C ------------- B
                /                 \
               /                   \
              /          O          \
           D  +           *          +  A
              \                     /
               \                   /
                \                 /
                 E ------------- F

  Step 1   Take the CENTRE O as the origin and let  OA = a ,  OB = b.

           In a regular hexagon O is the midpoint of each main diagonal
           AD, BE and CF, so the six vertices are

              A = a ,  B = b ,  C = b - a ,
              D = -a ,  E = -b ,  F = a - b

           (OABC is a rhombus so C = b - a; D, E, F are the points
            diametrically opposite A, B, C.)

  Step 2   Compute each vector by HEAD MINUS TAIL:

              AB = B - A = b - a
              AD = D - A = -a - a          = -2a
              EB = B - E = b - (-b)        =  2b
              FC = C - F = (b - a) - (a - b) = 2b - 2a

  Step 3   Add the last three:

              AD + EB + FC = (-2a) + (2b) + (2b - 2a)
                           = -4a + 4b
                           =  4 ( b - a )
                           =  4 AB                            [proved]
```

---

### Q B8 — Parallelogram midpoints (very common)
`ABCD` is a parallelogram. L and M are the midpoints of BC and CD.
(i) Express `AL` and `AM` in terms of `AB` and `AD`.
(ii) Prove that `AL + AM = (3/2) AC`.

**ANSWER:**
```
              D -------------------- C
             /                    /  /
            /                    M  /
           /                    /  L
          /                    /  /
         A -------------------- B

  Take A as the origin and let  AB = b ,  AD = d.
  Then  B = b ,  D = d ,  C = b + d  (parallelogram law), and AC = b + d.

  (i)  L = midpoint of BC = ( b + (b + d) ) / 2  =  b + d/2
       M = midpoint of CD = ( (b + d) + d ) / 2  =  b/2 + d

       AL = b + (1/2) d  =  AB + (1/2) AD
       AM = (1/2) b + d  =  (1/2) AB + AD

  (ii) AL + AM = ( b + d/2 ) + ( b/2 + d )
                = (3/2) b + (3/2) d
                = (3/2) ( b + d )
                = (3/2) AC                                    [proved]
```

---

### Q B9 — Linear combination (very common)
Express `d = 3i + 2j + 5k` as a linear combination of
`a = 2i - j + k`, `b = i + 3j - 2k`, `c = -2i + j - 3k`.

**ANSWER:**
```
  Let  d = x a + y b + z c.  Compare i, j, k coefficients:

     i :   2x +  y - 2z = 3        ...(1)
     j :   -x + 3y +  z = 2        ...(2)
     k :    x - 2y - 3z = 5        ...(3)

  From (1):  y = 3 - 2x + 2z

  Into (2):  -x + 3(3 - 2x + 2z) + z = 2
             -x + 9 - 6x + 6z + z = 2
             -7x + 7z = -7    =>    z = x - 1

  Into (3):  x - 2(3 - 2x + 2z) - 3z = 5
             x - 6 + 4x - 4z - 3z = 5
             5x - 7z = 11
             5x - 7(x - 1) = 11
             -2x = 4      =>    x = -2 ,  z = -3 ,  y = 3 + 4 - 6 = 1

  CHECK all three:
     (1)  2(-2) + 1 - 2(-3) = -4 + 1 + 6 = 3   OK
     (2)  2 + 3 - 3 = 2                        OK
     (3)  -2 - 2 + 9 = 5                       OK

  ANSWER:   d = -2 a + b - 3 c
```

---

### Q B10 — Coplanarity in i, j, k form
Show that the points `4i + 5j + k`, `-j - k`, `3i + 9j + 4k`, `-4i + 4j + 4k`
are coplanar.

**ANSWER:**
```
  A = 4i + 5j +  k ,  B =  0i -  j -  k
  C = 3i + 9j + 4k ,  D = -4i + 4j + 4k

  AB = B - A = -4i - 6j - 2k
  AC = C - A =  -i + 4j + 3k
  AD = D - A = -8i -  j + 3k

  Try  AD = x (AB) + y (AC):

     i :  -4x -  y  =  -8        ...(1)
     j :  -6x + 4y  =  -1        ...(2)
     k :  -2x + 3y  =   3        ...(3)

  From (1):  y = 8 - 4x
  Into (3):  -2x + 3(8 - 4x) = 3
             -2x + 24 - 12x = 3
             -14x = -21     =>   x = 3/2 ,  y = 8 - 6 = 2

  VERIFY with (2):  -6(3/2) + 4(2) = -9 + 8 = -1     matches.

  So   AD = (3/2) AB + 2 AC.

  AD is a linear combination of AB and AC, and all four points share A.
  Therefore A, B, C, D are COPLANAR.
```

---

### Q B11 — Diagonals of a parallelogram
Prove by the vector method that the diagonals of a parallelogram bisect each other.

**ANSWER:**
```
              D -------------------- C
             /                      /
            /                      /
           /                      /
          /                      /
         A -------------------- B

  Take A as the origin. Let  AB = b  and  AD = d.
  Since ABCD is a parallelogram,  AC = AB + AD = b + d,
  so the position vectors are   A = 0 , B = b , D = d , C = b + d.

  Midpoint of diagonal AC  =  ( A + C ) / 2  =  ( 0 + b + d ) / 2 = (b + d)/2

  Midpoint of diagonal BD  =  ( B + D ) / 2  =  ( b + d ) / 2

  The two midpoints are the SAME POINT.

  Therefore each diagonal passes through the midpoint of the other,
  i.e. the diagonals BISECT EACH OTHER.                        [proved]
```

---

### Q B12 — Midpoint theorem
Prove by the vector method that the line joining the midpoints of two sides of
a triangle is parallel to the third side and half of its length.

**ANSWER:**
```
                            A (a)
                            /\
                      E    /  \    F
                     *----/----\----*
                         /      \
              B ----------------------- C
             (b)                       (c)

  Let A, B, C have position vectors a, b, c.
  E = midpoint of AB = (a + b)/2        F = midpoint of AC = (a + c)/2

  EF = F - E                                       (head minus tail)

          a + c     a + b       (a + c) - (a + b)       c - b
      =  ------- - -------  =  -------------------  =  -------
            2         2                 2                 2

  But   BC = c - b.       Hence     EF = (1/2) BC

  (i)  EF is a scalar multiple of BC, so EF is PARALLEL to BC.
  (ii) |EF| = (1/2)|BC|, so EF is HALF the length of BC.        [proved]
```

---

### Q B13 — Centroid identity
If G is the centroid of triangle ABC and P is any point, prove that
`PA + PB + PC = 3 PG`.

**ANSWER:**
```
  Take any origin O. Let the position vectors be a, b, c and p, and

       g = ( a + b + c ) / 3            (centroid)

  PA + PB + PC = (a - p) + (b - p) + (c - p)
               = (a + b + c) - 3p
               = 3g - 3p
               = 3 ( g - p )
               = 3 PG                                          [proved]

  Special case P = O :     OA + OB + OC = 3 OG
  Special case P = G :     GA + GB + GC = 3 GG = 0
```

---

### Q B14 — Plane through three points
Find the vector equation of the plane passing through the points
`(0, 0, 0)`, `(0, 5, 0)` and `(2, 0, 1)`.

**ANSWER:**
```
  a = 0 ,   b = 5j ,   c = 2i + k

  b - a = 5j                c - a = 2i + k

  r  =  a + s ( b - a ) + t ( c - a )

  r  =  0 + s ( 5j ) + t ( 2i + k )

  r  =  5s j  +  t ( 2i + k ) ,        s, t in R
```

---

### Q B15 — Vector of a given magnitude along a join
Find the vector of magnitude 14 along the line joining `A(1, 2, 3)` to `B(3, 5, 9)`.

**ANSWER:**
```
  AB = (3-1) i + (5-2) j + (9-3) k  =  2i + 3j + 6k

  |AB| = sqrt( 4 + 9 + 36 ) = sqrt(49) = 7

                            2i + 3j + 6k
  required = 14 x  --------------------  =  2 ( 2i + 3j + 6k )
                                7

           =  4i + 6j + 12k

  CHECK: |4i + 6j + 12k| = sqrt(16 + 36 + 144) = sqrt(196) = 14.  Correct.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks each, answer any 5 of 7)
# Q21 of the paper is almost always one of the six shapes below.
# ===============================================================

### Q C1 — PROVE FOUR POINTS ARE COPLANAR  (the most frequent 7-marker)

If a, b, c are non-coplanar vectors, prove that the four points

```
   P = -a + 4b - 3c ,    Q =  3a + 2b - 5c ,
   R = -3a + 8b - 5c ,   S = -3a + 2b +  c
```

are coplanar.

**ANSWER (full 7-mark write-up):**

```
  MARK SPLIT:  forming the three vectors 2M , setting up the comparison 2M ,
               solving 2M , conclusion sentence 1M.

  Step 1  Form three vectors starting from the SAME point P.

     PQ = Q - P = (3+1) a + (2-4) b + (-5+3) c  =   4a - 2b - 2c
     PR = R - P = (-3+1) a + (8-4) b + (-5+3) c =  -2a + 4b - 2c
     PS = S - P = (-3+1) a + (2-4) b + (1+3) c  =  -2a - 2b + 4c

  Step 2  If the four points are coplanar, PS must lie in the plane of
          PQ and PR, i.e. there must exist scalars x, y with

                 PS  =  x (PQ)  +  y (PR)

  Step 3  Since a, b, c are NON-COPLANAR they are linearly independent,
          so we may COMPARE COEFFICIENTS of a, b and c :

             a :    4x - 2y  =  -2      ...(1)
             b :   -2x + 4y  =  -2      ...(2)
             c :   -2x - 2y  =   4      ...(3)

  Step 4  Simplify (1):   2x -  y = -1
          Simplify (2):    -x + 2y = -1      =>   x = 2y + 1

          Substitute into the simplified (1):

               2(2y + 1) - y = -1
                  4y + 2 - y = -1
                          3y = -3      =>   y = -1
                                             x = 2(-1) + 1 = -1

  Step 5  VERIFY with the unused equation (3):

               -2(-1) - 2(-1)  =  2 + 2  =  4        matches the RHS.

  Step 6  Therefore    PS  =  -1 (PQ)  -  1 (PR)  =  -(PQ + PR)

          PS is a linear combination of PQ and PR, so PS lies in the plane
          determined by PQ and PR. All four points contain the point P.

          Hence P, Q, R, S are COPLANAR.                        [proved]


  ALTERNATIVE FINISH (the "coefficients sum to zero" form):

     From  PS = -PQ - PR :

        S - P  =  -(Q - P)  -  (R - P)
        S - P  =  -Q + P - R + P
            S  =  3P - Q - R                (P appears three times:
                                             once on the left, and once
                                             from each bracket)

     CHECK:  3(-a + 4b - 3c) - (3a + 2b - 5c) - (-3a + 8b - 5c)
             a : -3 - 3 + 3 = -3        b : 12 - 2 - 8 = 2
             c : -9 + 5 + 5 =  1
             = -3a + 2b + c = S.    Correct.

     So        3 P  -  Q  -  R  -  S  =  0

     with coefficients  3, -1, -1, -1  which are NOT all zero and whose
     sum is   3 - 1 - 1 - 1 = 0.

     That is exactly the condition  xP + yQ + zR + wS = 0  with
     x + y + z + w = 0. Hence the four points are COPLANAR.
```

**A second question of exactly the same shape (practise on it):**

If a, b, c are non-coplanar, show that `6a + 2b - c`, `2a - b + 3c`,
`-a + 2b - 4c`, `-12a - b - 3c` are coplanar.

**ANSWER:**
```
  P = 6a + 2b - c ,  Q = 2a - b + 3c ,  R = -a + 2b - 4c ,  S = -12a - b - 3c

  PQ =  -4a - 3b + 4c
  PR =  -7a + 0b - 3c
  PS = -18a - 3b - 2c

  PS = x PQ + y PR :

     a :  -4x - 7y = -18       ...(1)
     b :  -3x + 0y =  -3       ...(2)
     c :   4x - 3y =  -2       ...(3)

  From (2):  x = 1.        From (3):  4 - 3y = -2  =>  y = 2.
  VERIFY (1):  -4(1) - 7(2) = -18      matches.

  So PS = PQ + 2 PR, hence the four points are COPLANAR.
```

---

### Q C2 — POINT OF INTERSECTION OF TWO LINES  (equally frequent)

If a, b, c are non-coplanar vectors, find the point of intersection of the line
passing through the points `2a + 3b - c` and `3a + 4b - 2c` with the line joining
the points `a - 2b + 3c` and `a - 6b + 6c`.

**ANSWER (full 7-mark write-up):**

```
  MARK SPLIT:  writing line 1 in parametric form 2M , line 2 2M ,
               comparing coefficients and solving 2M , the point 1M.

  LINE 1 through  P = 2a + 3b - c  and  Q = 3a + 4b - 2c :

     r = (1 - t) P + t Q
       = (1-t)(2a + 3b - c) + t(3a + 4b - 2c)

     a :  2(1-t) + 3t = 2 - 2t + 3t =  2 + t
     b :  3(1-t) + 4t = 3 - 3t + 4t =  3 + t
     c : -(1-t)  - 2t = -1 + t - 2t = -1 - t

     r = (2 + t) a + (3 + t) b + (-1 - t) c                ...(I)


  LINE 2 through  R = a - 2b + 3c  and  S = a - 6b + 6c :

     r = (1 - s) R + s S
       = (1-s)(a - 2b + 3c) + s(a - 6b + 6c)

     a :  (1-s) + s      = 1
     b : -2(1-s) - 6s    = -2 + 2s - 6s = -2 - 4s
     c :  3(1-s) + 6s    =  3 - 3s + 6s =  3 + 3s

     r = (1) a + (-2 - 4s) b + (3 + 3s) c                  ...(II)


  At the point of intersection (I) = (II). Since a, b, c are NON-COPLANAR
  they are linearly independent, so we may compare coefficients:

     a :   2 + t  =  1                     ...(1)
     b :   3 + t  =  -2 - 4s               ...(2)
     c :  -1 - t  =  3 + 3s                ...(3)

  From (1):        t = -1

  Put t = -1 in (2):     3 - 1 = -2 - 4s
                             2 = -2 - 4s
                            4s = -4          =>   s = -1

  VERIFY in (3):    LHS = -1 - (-1) = 0
                    RHS =  3 + 3(-1) = 0        they agree,
  so the two lines really do intersect.

  Point of intersection, from (I) with t = -1 :

        r = (2 - 1) a + (3 - 1) b + (-1 + 1) c   =   a + 2b

  CHECK using (II) with s = -1 :

        r = a + (-2 + 4) b + (3 - 3) c = a + 2b        same point.

  +--------------------------------------------------------+
  |   THE POINT OF INTERSECTION IS   a  +  2b              |
  +--------------------------------------------------------+
```

> **TRAP:** use **two different parameters** (t and s). If you write t in both
> lines you are forcing them to arrive at the same "time", and you will
> wrongly conclude that the lines do not meet.

---

### Q C3 — MEDIANS OF A TRIANGLE ARE CONCURRENT

Prove by the vector method that the medians of a triangle are concurrent,
and find the point of concurrence.

**ANSWER:**

```
                            A (a)
                            /\
                           /  \
                      F   /    \   E        D = midpoint of BC
                     *   /  G   \   *       E = midpoint of CA
                        /   *    \          F = midpoint of AB
                       /          \
              B --------- * ---------- C
             (b)          D           (c)

  MARK SPLIT:  midpoints 1M , section formula on the first median 2M ,
               repeating on the other two 3M , conclusion 1M.

  Step 1  Let the vertices A, B, C have position vectors a, b, c
          with respect to any origin O. The midpoints of the sides are

               D = ( b + c ) / 2      (midpoint of BC)
               E = ( c + a ) / 2      (midpoint of CA)
               F = ( a + b ) / 2      (midpoint of AB)

          The medians are AD, BE and CF.

  Step 2  Take the point G1 on AD which divides AD in the ratio 2 : 1.
          By the section formula (m = 2 with the far point D, n = 1 with A):

                     2 D + 1 A       2 (b+c)/2 + a         a + b + c
             G1 =  ------------- =  ---------------  =  ---------------
                       2 + 1               3                   3

  Step 3  Take the point G2 on BE dividing BE in the ratio 2 : 1 :

                     2 E + 1 B       2 (c+a)/2 + b         a + b + c
             G2 =  ------------- =  ---------------  =  ---------------
                       2 + 1               3                   3

  Step 4  Take the point G3 on CF dividing CF in the ratio 2 : 1 :

                     2 F + 1 C       2 (a+b)/2 + c         a + b + c
             G3 =  ------------- =  ---------------  =  ---------------
                       2 + 1               3                   3

  Step 5  G1 = G2 = G3.  A single point lies on all three medians.

          Therefore THE MEDIANS OF A TRIANGLE ARE CONCURRENT.

  Step 6  The point of concurrence is the CENTROID

                          a + b + c
                    G  =  -----------
                               3

          and it divides each median in the ratio 2 : 1 measured from
          the vertex.                                          [proved]

  WHY THE PROOF WORKS IN ONE SENTENCE:  the answer (a+b+c)/3 is SYMMETRIC
  in a, b and c, so it cannot possibly depend on which median we started with.
```

---

### Q C4 — TRISECTION OF A DIAGONAL OF A PARALLELOGRAM

In a parallelogram ABCD, E and F are the midpoints of the sides AB and CD
respectively. Show that the line segments DE and BF trisect the diagonal AC.

**ANSWER:**

```
              D ---------- F --------- C
             /                       /
            /                      /
           /                     /
          /                    /
         A ---------- E ------ B

  Take A as the origin.  Let  AB = b  and  AD = d.
  Then      A = 0 ,  B = b ,  D = d ,  C = b + d
            E = midpoint of AB = b / 2
            F = midpoint of DC = d + b / 2

  Every point of the diagonal AC can be written as   k ( b + d ).

  PART (i) — where does DE meet AC?

     A general point of DE is
          D + u ( E - D )  =  d + u ( b/2 - d )
                           =  (u/2) b  +  (1 - u) d

     Set this equal to k ( b + d ). Since b and d are NOT parallel
     (they are adjacent sides of a parallelogram) we may compare
     coefficients:

          b :    u / 2   =  k          ...(1)
          d :    1 - u   =  k          ...(2)

     From (1) and (2):   u/2 = 1 - u
                          u  = 2 - 2u
                         3u  = 2       =>   u = 2/3
                                             k = u/2 = 1/3

     So DE cuts AC at the point   P = (1/3)( b + d ).

  PART (ii) — where does BF meet AC?

     A general point of BF is
          B + v ( F - B )  =  b + v ( d + b/2 - b )
                           =  b + v ( d - b/2 )
                           =  (1 - v/2) b  +  v d

     Set equal to k ( b + d ) and compare:

          b :   1 - v/2  =  k          ...(3)
          d :        v   =  k          ...(4)

     From (3) and (4):   v = 1 - v/2
                        2v = 2 - v
                        3v = 2        =>   v = 2/3
                                            k = v = 2/3

     So BF cuts AC at the point   Q = (2/3)( b + d ).

  PART (iii) — conclusion

     Along AC the parameter k runs   0 (at A) -> 1 (at C).

          A  at  k = 0
          P  at  k = 1/3
          Q  at  k = 2/3
          C  at  k = 1

     So AP = PQ = QC, i.e. P and Q cut AC into THREE EQUAL PARTS.

     Therefore DE and BF TRISECT the diagonal AC.               [proved]
```

---

### Q C5 — REGULAR HEXAGON IDENTITY

`ABCDEF` is a regular hexagon with centre O. Show that
`AB + AC + AD + AE + AF = 3 AD = 6 AO`.

**ANSWER:**

```
                 C ------------- B
                /                 \
               /                   \
              /          O          \
           D  +           *          +  A
              \                     /
               \                   /
                \                 /
                 E ------------- F

  FACTS ABOUT A REGULAR HEXAGON (state these first, 2M):

     F1.  O is the MIDPOINT of each main diagonal AD, BE, CF.
          Hence     AD = 2 AO.                                  ...(1)

     F2.  BC and FE are each parallel to AD, of the same length as the
          radius, and point the same way as AO. Hence
                    BC = AO      and      FE = AO.              ...(2)

     F3.  ABOF is a rhombus with AB and AF as adjacent sides, so by the
          parallelogram law its diagonal from A is
                    AB + AF = AO.                               ...(3)

  Step 1  Split AC and AE using the triangle law:

             AC = AB + BC = AB + AO         (by (2))            ...(4)
             AE = AF + FE = AF + AO         (by (2))            ...(5)

  Step 2  Substitute (4) and (5) into the required sum:

       AB + AC + AD + AE + AF
          = AB + (AB + AO) + AD + (AF + AO) + AF
          = 2 AB + 2 AF + 2 AO + AD
          = 2 ( AB + AF ) + 2 AO + AD
          = 2 ( AO ) + 2 AO + AD                (by (3))
          = 4 AO + AD

  Step 3  Use (1),  AD = 2 AO :

          = 4 AO + 2 AO
          = 6 AO

  Step 4  And since AD = 2 AO, we have 6 AO = 3 (2 AO) = 3 AD.

          Therefore   AB + AC + AD + AE + AF  =  3 AD  =  6 AO.   [proved]


  COORDINATE CHECK (do this in rough work, not in the answer book).
  Put O at the origin and the circumradius equal to 1:

     A = ( 1 , 0 )                B = ( 1/2 ,  sqrt3/2 )
     C = ( -1/2 , sqrt3/2 )       D = ( -1 , 0 )
     E = ( -1/2 , -sqrt3/2 )      F = ( 1/2 , -sqrt3/2 )

     AB = (-1/2,  sqrt3/2)        AC = (-3/2,  sqrt3/2)
     AD = (-2, 0)                 AE = (-3/2, -sqrt3/2)
     AF = (-1/2, -sqrt3/2)

     Sum = ( -1/2 - 3/2 - 2 - 3/2 - 1/2 ,  sqrt3/2 + sqrt3/2 - sqrt3/2 - sqrt3/2 )
         = ( -6 , 0 )

     3 AD = 3(-2, 0) = (-6, 0)          AO = (-1, 0), so 6 AO = (-6, 0)

     All three agree.   Correct.
```

---

### Q C6 — RATIO IN WHICH TWO CEVIANS CUT EACH OTHER

In triangle OAB, E is the midpoint of OB and D is the point on AB such that
`AD : DB = 2 : 1`. If OD and AE intersect at P, determine the ratios
`AP : PE` and `DP : PO`.

**ANSWER:**

```
                            B
                           /|
                          / |
                         /  * D              E = midpoint of OB
                        /   |                D on AB with AD : DB = 2 : 1
                    E  *    |                P = OD  intersect  AE
                        \ P |
                         \* |
                          \ |
                     O ---- A

  MARK SPLIT:  setting up D and E 2M , the two parametric forms 2M ,
               solving 2M , reading off both ratios 1M.

  Step 1  Take O as the origin.  Let  OA = a  and  OB = b.

          E is the midpoint of OB :          E = b / 2

          D divides AB in the ratio AD : DB = 2 : 1, so by the section
          formula (the 2 goes with the FAR point B, the 1 with A):

                    2 b + 1 a        a + 2b
              D  =  ----------  =  ----------
                      2 + 1             3

  Step 2  P lies on OD, so for some scalar t

                                    t ( a + 2b )
              P  =  t D    =    -------------------                ...(I)
                                          3

  Step 3  P lies on AE, so for some scalar s

              P  =  A + s ( E - A )
                 =  a + s ( b/2 - a )
                 =  (1 - s) a  +  (s/2) b                          ...(II)

  Step 4  a and b are two sides of a triangle, so they are NOT parallel
          and we may compare coefficients of a and b in (I) and (II):

              a :     t / 3   =  1 - s            ...(1)
              b :   2 t / 3   =  s / 2            ...(2)

          From (2):    4 t / 3 = s ,  i.e.  s = 4t/3

          Substitute in (1):     t/3  =  1 - 4t/3
                                 t/3 + 4t/3 = 1
                                      5t/3  = 1
                                          t = 3/5
                                          s = 4/5

  Step 5  Therefore

              P  =  (3/5) ( a + 2b ) / 3   =   ( a + 2b ) / 5

          CHECK from (II):  (1 - 4/5) a + (4/10) b = a/5 + 2b/5
                          = (a + 2b)/5.        Same point.  Correct.

  Step 6  READ OFF THE RATIOS.

          On AE the parameter s runs from 0 at A to 1 at E, and s = 4/5, so

                 AP : PE  =  4/5 : 1/5  =  4 : 1

          On OD the parameter t runs from 0 at O to 1 at D, and t = 3/5, so

                 OP : PD  =  3/5 : 2/5  =  3 : 2

          and reversing the order,   DP : PO  =  2 : 3

  +-----------------------------------------------------------+
  |     AP : PE  =  4 : 1            DP : PO  =  2 : 3        |
  +-----------------------------------------------------------+
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Marks | Chance it appears |
|---|---|---|---|---|
| 1 | Find `AB` and `\|AB\|` from two position vectors | A | 2 | very high |
| 2 | Unit vector / vector of given magnitude along a | A | 2 | very high |
| 3 | Prove FOUR points are COPLANAR (non-coplanar a, b, c) | C | 7 | very high |
| 4 | Point of INTERSECTION of two lines given by position vectors | C | 7 | very high |
| 5 | Direction cosines / direction ratios | A | 2 | high |
| 6 | Section formula: internal AND external in a given ratio | B | 4 | high |
| 7 | Prove THREE points are COLLINEAR | B | 4 | high |
| 8 | Vector equation of a line through two points | A or B | 2 or 4 | high |
| 9 | Centroid of a triangle / tetrahedron | A | 2 | high |
| 10 | Regular hexagon identity | B or C | 4 or 7 | medium-high |
| 11 | Geometry proof: medians concurrent / diagonals bisect / midpoint theorem | C | 7 | medium-high |
| 12 | Parallelogram midpoint problem (`AL + AM = (3/2) AC`) | B | 4 | medium |
| 13 | Express one vector as a linear combination of three others | B | 4 | medium |
| 14 | Vector equation of a plane through three points | A or B | 2 or 4 | medium |
| 15 | Ratio in which two cevians cut each other (`AP : PE`) | C | 7 | medium |
| 16 | Pentagon / polygon identity | B | 4 | medium |
| 17 | Show a triangle is right-angled / isosceles from position vectors | B | 4 | medium |
| 18 | Find the ratio in which a point divides a join | B | 4 | medium |
| 19 | Collinear vectors — find the missing letters | A | 2 | medium |
| 20 | Definitions and the parallelogram law statement | A | 2 | low-medium |

---

# THE SMALLEST STUDY PLAN THAT STILL PASSES

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   LEARN 4 THINGS AND YOU CAN ATTEMPT Q4, Q12 AND Q21:               |
  |                                                                     |
  |   1.  AB = b - a   and   |AB| = sqrt(...)          -> Q4  (2 marks) |
  |   2.  a-hat = a/|a|  and direction cosines          -> Q4  (2 marks) |
  |   3.  the section formula (internal + external)     -> Q12 (4 marks) |
  |   4.  "PS = x PQ + y PR" for coplanarity            -> Q21 (7 marks) |
  |                                                                     |
  |   That is 13 marks from four formulas.                              |
  |   The pass mark for the whole 75-mark paper is 26.                  |
  |                                                                     |
  +---------------------------------------------------------------------+
```
