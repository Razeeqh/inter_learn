# Product of Vectors — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 5**

> **About the year tags:** BIEAP recycles the same questions across many
> sessions, and the same question often reappears with different numbers.
> So everything below is grouped by **"how often it appears"**, NOT tagged to
> one exact year. Before your exam, cross-check with the official question
> papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q5 or Q6
                                                 (sometimes both)
  Section B  (4 marks each, answer any 5)    ->  usually Q14 or Q15
  Section C  (7 marks each, answer any 5)    ->  usually Q20 or Q21
```

```
  +--------------------------------------------------------------+
  |  Realistic marks available from this chapter alone:          |
  |                                                              |
  |     Section A   2 or 4 marks   (one or two questions)        |
  |     Section B   4 marks        (one question)                |
  |     Section C   7 marks        (one question)                |
  |     -------------------------------------------------        |
  |     TOTAL       11 to 15 marks out of 75                     |
  +--------------------------------------------------------------+
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. You must answer all 10 in the
# paper, so never leave one of these blank.
# ===============================================================

## Topic: the dot product, straight computation

### Q A1
If `a = i + 2j - 3k` and `b = 3i - j + 2k`, find `a . b`.

**ANSWER:**
```
        i        j        k
  a :   1        2       -3
  b :   3       -1        2

  a . b = (1)(3) + (2)(-1) + (-3)(2)
        =    3   +   (-2)  +   (-6)
        =   -5
```
**a . b = -5** (negative, so the angle between them is obtuse)

---

### Q A2
If `|a| = 4`, `|b| = 3` and the angle between them is 60 degrees, find `a . b`.

**ANSWER:**
```
  a . b = |a| |b| cos theta
        = 4 x 3 x cos 60
        = 12 x (1/2)
        = 6
```
**a . b = 6**

---

### Q A3
Find the angle between `a = 2i + 2j - k` and `b = 6i - 3j + 2k`.

**ANSWER:**
```
  STEP 1   a . b = (2)(6) + (2)(-3) + (-1)(2) = 12 - 6 - 2 = 4

  STEP 2   |a| = sqrt(4 + 4 + 1) = sqrt(9) = 3

  STEP 3   |b| = sqrt(36 + 9 + 4) = sqrt(49) = 7

  STEP 4   cos theta = 4 / (3 x 7) = 4/21
```
**cos theta = 4/21, so theta is the angle whose cosine is 4/21**

---

## Topic: perpendicularity — find the missing letter

### Q A4
Find x if `a = 2i + x j + k` is perpendicular to `b = i - 2j + 3k`.

**ANSWER:**
```
  Perpendicular  =>  a . b = 0

  (2)(1) + (x)(-2) + (1)(3) = 0
       2  -  2x  +  3  = 0
              5 - 2x   = 0
                   2x  = 5
                    x  = 5/2
```
**x = 5/2**

---

### Q A5
Show that `a = 2i - j + k` and `b = i - 3j - 5k` are perpendicular.

**ANSWER:**
```
  a . b = (2)(1) + (-1)(-3) + (1)(-5)
        =   2    +     3    +   (-5)
        =   0

  Since a . b = 0 and neither vector is the zero vector,
  a is perpendicular to b.
```

---

### Q A6
If `|a + b| = |a - b|`, prove that a and b are perpendicular.

**ANSWER:**
```
  Square both sides:
        |a + b|^2 = |a - b|^2

  |a|^2 + |b|^2 + 2(a.b) = |a|^2 + |b|^2 - 2(a.b)

                 2(a.b) = -2(a.b)
                 4(a.b) = 0
                    a.b = 0

  Therefore a is perpendicular to b.
```

---

## Topic: magnitudes and expansions

### Q A7
If `|a| = 11`, `|b| = 23` and `|a - b| = 30`, find `|a + b|`.

**ANSWER:**
```
  STEP 1   |a - b|^2 = |a|^2 + |b|^2 - 2(a.b)
                900  =  121  +  529  - 2(a.b)
                900  =  650  - 2(a.b)
             2(a.b)  =  650 - 900  =  -250
                a.b  =  -125

  STEP 2   |a + b|^2 = |a|^2 + |b|^2 + 2(a.b)
                     =  121 + 529 + 2(-125)
                     =  650 - 250
                     =  400

  STEP 3   |a + b| = sqrt(400) = 20
```
**|a + b| = 20**

---

### Q A8
If `|a| = 3`, `|b| = 5`, `|c| = 7` and `a + b + c = 0`, find the angle
between a and b.

**ANSWER:**
```
  STEP 1   From a + b + c = 0,   c = -(a + b) ,  so  |c| = |a + b|.

  STEP 2   |c|^2 = |a + b|^2 = |a|^2 + |b|^2 + 2(a.b)
              49 =    9   +   25  + 2(a.b)
              49 =   34   + 2(a.b)
          2(a.b) =   15
            a.b  =   15/2

  STEP 3   cos theta = (a.b)/(|a||b|) = (15/2)/(3 x 5) = (15/2)/15 = 1/2

  STEP 4   theta = 60 degrees
```
**60 degrees**

---

## Topic: projection

### Q A9
Find the projection of `a = 3i - j - k` on `b = 2i - j + k`.

**ANSWER:**
```
  STEP 1   a . b = (3)(2) + (-1)(-1) + (-1)(1) = 6 + 1 - 1 = 6

  STEP 2   |b| = sqrt(4 + 1 + 1) = sqrt(6)

  STEP 3   Projection = (a.b)/|b| = 6/sqrt(6) = sqrt(6)
```
**Projection = sqrt(6)**

---

### Q A10
Find the projection of `a = i + 3j - k` on `b = 2i - 3j + 6k`.

**ANSWER:**
```
  a . b = (1)(2) + (3)(-3) + (-1)(6) = 2 - 9 - 6 = -13

  |b|   = sqrt(4 + 9 + 36) = sqrt(49) = 7

  Projection = -13/7
```
**-13/7** (the minus sign must be kept — the angle is obtuse)

---

## Topic: work done

### Q A11
If `F = 2i + j - k` and the displacement is `d = 3i + 2j - 5k`, find the
work done.

**ANSWER:**
```
  W = F . d = (2)(3) + (1)(2) + (-1)(-5)
            =   6    +   2    +    5
            =  13
```
**W = 13 units**

---

### Q A12
A force `F = 4i + j - 3k` moves a particle from `A(1, 2, 3)` to `B(5, 4, 1)`.
Find the work done.

**ANSWER:**
```
  STEP 1   d = AB = B - A = (5-1)i + (4-2)j + (1-3)k = 4i + 2j - 2k

  STEP 2   W = F . d = (4)(4) + (1)(2) + (-3)(-2)
                     =  16 + 2 + 6
                     =  24
```
**W = 24 units**

---

## Topic: the cross product, straight computation

### Q A13
If `a = 2i - 3j + 5k` and `b = -i + 4j + 2k`, find `a x b`.

**ANSWER:**
```
             |  i     j     k  |
    a x b =  |  2    -3     5  |
             | -1     4     2  |

  i part :   (-3)(2) - (5)(4)      = -6 - 20 = -26
  j part : -[ (2)(2) - (5)(-1) ]   = -[4 + 5] =  -9
  k part :   (2)(4) - (-3)(-1)     =  8 - 3  =    5

  a x b = -26i - 9j + 5k

  CHECK: a.(a x b) = 2(-26) + (-3)(-9) + 5(5) = -52 + 27 + 25 = 0   OK
```
**a x b = -26i - 9j + 5k**

---

### Q A14
If `|a| = 2`, `|b| = 3` and the angle between them is 30 degrees, find `|a x b|`.

**ANSWER:**
```
  |a x b| = |a| |b| sin theta
          = 2 x 3 x sin 30
          = 6 x (1/2)
          = 3
```
**|a x b| = 3**

---

### Q A15
If `|a| = 13`, `|b| = 5` and `a . b = 60`, find `|a x b|`.

**ANSWER:**
```
  Lagrange:  |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
                       = (169)(25) - 3600
                       = 4225 - 3600
                       = 625

  |a x b| = sqrt(625) = 25
```
**|a x b| = 25**

---

### Q A16
Find a unit vector perpendicular to both `a = 2i - 6j - 3k` and `b = 4i + 3j - k`.

**ANSWER:**
```
             |  i     j     k  |
    a x b =  |  2    -6    -3  |
             |  4     3    -1  |

  i part :   (-6)(-1) - (-3)(3)     =  6 + 9  = 15
  j part : -[ (2)(-1) - (-3)(4) ]   = -[-2 + 12] = -10
  k part :   (2)(3) - (-6)(4)       =  6 + 24 = 30

  a x b = 15i - 10j + 30k = 5(3i - 2j + 6k)

  |a x b| = 5 sqrt(9 + 4 + 36) = 5 sqrt(49) = 5 x 7 = 35

  Unit vector = +/- 5(3i - 2j + 6k)/35 = +/- (3i - 2j + 6k)/7
```
**+/- (3i - 2j + 6k)/7**

---

## Topic: areas

### Q A17
Find the area of the parallelogram whose adjacent sides are `a = 2i - 3k`
and `b = 4j + 2k`.

**ANSWER:**
```
  Write both fully:  a = 2i + 0j - 3k ,  b = 0i + 4j + 2k

             |  i     j     k  |
    a x b =  |  2     0    -3  |
             |  0     4     2  |

  i part :   (0)(2) - (-3)(4)   = 0 + 12 = 12
  j part : -[ (2)(2) - (-3)(0) ] = -[4]   = -4
  k part :   (2)(4) - (0)(0)    = 8      =  8

  a x b = 12i - 4j + 8k

  |a x b| = sqrt(144 + 16 + 64) = sqrt(224) = sqrt(16 x 14) = 4 sqrt(14)
```
**Area = 4 sqrt(14) square units**

---

### Q A18
Find the area of the triangle two of whose sides are `a = 3i + 4j` and
`b = -5i + 7j`.

**ANSWER:**
```
             |  i     j     k  |
    a x b =  |  3     4     0  |
             | -5     7     0  |

  i part :   (4)(0) - (0)(7)   = 0
  j part : -[ (3)(0) - (0)(-5) ] = 0
  k part :   (3)(7) - (4)(-5)  = 21 + 20 = 41

  a x b = 41k       so    |a x b| = 41

  Area = (1/2)(41) = 41/2
```
**Area = 41/2 square units**

---

## Topic: cross-product properties

### Q A19
Show that `(a - b) x (a + b) = 2 (a x b)`.

**ANSWER:**
```
  (a - b) x (a + b)
      =  a x a  +  a x b  -  b x a  -  b x b
      =    0    +  a x b  -  b x a  -    0        (since a x a = 0)
      =  a x b  +  a x b                          (since -(b x a) = a x b)
      =  2 (a x b)
```

---

### Q A20
Prove that the cross product is not associative, using i and j.

**ANSWER:**
```
  LEFT :   i x (i x j)  =  i x k  =  -j

  RIGHT:   (i x i) x j  =  0 x j  =  0   (the zero vector)

  -j is not the zero vector, so  a x (b x c)  is not  (a x b) x c .
  The cross product is NOT associative.
```

---

## Topic: the scalar triple product

### Q A21
If `a = 2i - 3j + k`, `b = i - j + 2k`, `c = 2i + j - k`, find `[a b c]`.

**ANSWER:**
```
             |  2    -3     1  |
   [a b c] = |  1    -1     2  |
             |  2     1    -1  |

  Expand along the top row, sign board  + - + :

   +2 x | -1    2 |  = 2 x [ (-1)(-1) - (2)(1) ] = 2 x (1 - 2)   =  -2
        |  1   -1 |

   -(-3) x |  1    2 | = +3 x [ (1)(-1) - (2)(2) ] = 3 x (-1 - 4) = -15
           |  2   -1 |

   +1 x |  1   -1 |  = 1 x [ (1)(1) - (-1)(2) ] = 1 x (1 + 2)     =   3
        |  2    1 |

   [a b c] = -2 - 15 + 3 = -14
```
**[a b c] = -14**

---

### Q A22
Find the volume of the parallelepiped whose coterminous edges are
`3i + 4j`, `2i + 3j + 4k` and `5k`.

**ANSWER:**
```
             |  3    4    0  |
   [a b c] = |  2    3    4  |
             |  0    0    5  |

  Expand along the BOTTOM row (it has two zeros):

   +5 x |  3    4 |  =  5 x [ (3)(3) - (4)(2) ] = 5 x (9 - 8) = 5
        |  2    3 |

   [a b c] = 5

   Volume = |5| = 5
```
**Volume = 5 cubic units**

---

### Q A23
Find `[i j k]` and `[i k j]`.

**ANSWER:**
```
             |  1   0   0  |
   [i j k] = |  0   1   0  |  =  1
             |  0   0   1  |

   [i k j] is [i j k] with the last two letters SWAPPED,
   so its sign flips:   [i k j] = -1
```
**[i j k] = 1 and [i k j] = -1**

---

### Q A24
Simplify `a x (b x c) + b x (c x a) + c x (a x b)`.

**ANSWER:**
```
  Apply  x x (y x z) = (x.z) y - (x.y) z  to each term:

    a x (b x c) = (a.c) b - (a.b) c
    b x (c x a) = (b.a) c - (b.c) a
    c x (a x b) = (c.b) a - (c.a) b

  Add them. Remember a.b = b.a, b.c = c.b, c.a = a.c:

    b terms :  (a.c) b - (c.a) b  =  0
    c terms : -(a.b) c + (b.a) c  =  0
    a terms : -(b.c) a + (c.b) a  =  0

  Total = 0  (the zero vector)
```
**= 0 (the zero vector)**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. One of them is usually from this chapter.
# ===============================================================

### Q B1
Show that the vectors `a = 2i - j + k`, `b = i - 3j - 5k`, `c = 3i - 4j - 4k`
form the sides of a right-angled triangle.

**ANSWER:**
```
  STEP 1   Check that they really close up into a triangle.
              a + b = (2 + 1)i + (-1 - 3)j + (1 - 5)k
                    = 3i - 4j - 4k
                    = c

           So the three vectors form a triangle (two sides joined end to
           end give the third).

  STEP 2   Test each pair with the dot product.

              a . b = (2)(1) + (-1)(-3) + (1)(-5) = 2 + 3 - 5 = 0

  STEP 3   a . b = 0 means the angle between a and b is 90 degrees.

  STEP 4   Therefore the triangle is RIGHT-ANGLED (at the vertex where
           sides a and b meet).
```

---

### Q B2
Prove that the angle in a semicircle is a right angle.

**ANSWER:**
```
                    P
                   /|\
                  / | \
                 /  |  \
                A---O---B

  STEP 1   Take the centre O as the origin, radius r.
              Let  OA = a .   Since AB is a diameter,  OB = -a .
              Let  OP = p , where P is any point on the circle.

  STEP 2   Both A and P lie on the circle, so  |p| = |a| = r .

  STEP 3   The two vectors that meet at P are
              PA = a - p       and       PB = -a - p

  STEP 4   Take the dot product.
              PA . PB = (a - p) . (-a - p)
                      = -(a.a) - (a.p) + (p.a) + (p.p)
                      = -|a|^2 + |p|^2          (the middle terms cancel)
                      = -r^2 + r^2
                      = 0

  STEP 5   PA . PB = 0 , so the angle APB is 90 degrees.
```
**Proved.**

---

### Q B3
Find the components of `a = i + 2j + 3k` along and perpendicular to
`b = 2i - j + k`.

**ANSWER:**
```
  STEP 1   a . b = (1)(2) + (2)(-1) + (3)(1) = 2 - 2 + 3 = 3

  STEP 2   |b|^2 = 4 + 1 + 1 = 6      (no square root - we need |b|^2)

  STEP 3   Component ALONG b:
              ((a.b)/|b|^2) b = (3/6)(2i - j + k)
                              = (1/2)(2i - j + k)
                              = i - (1/2) j + (1/2) k

  STEP 4   Component PERPENDICULAR to b:
              a - (component along b)
                = (i + 2j + 3k) - ( i - (1/2)j + (1/2)k )
                = 0i + (2 + 1/2) j + (3 - 1/2) k
                = (5/2) j + (5/2) k

  STEP 5   CHECK the two pieces add back to a:
              (i - (1/2)j + (1/2)k) + ((5/2)j + (5/2)k)
                = i + 2j + 3k   = a          OK

           CHECK the second piece is perpendicular to b:
              ((5/2)j + (5/2)k) . (2i - j + k) = 0 - 5/2 + 5/2 = 0   OK
```
**Along b: i - (1/2)j + (1/2)k.  Perpendicular to b: (5/2)j + (5/2)k**

---

### Q B4
Prove Lagrange's identity: `|a x b|^2 + (a . b)^2 = |a|^2 |b|^2`.

**ANSWER:**
```
  STEP 1   Let theta be the angle between a and b.

  STEP 2   By definition,
              |a x b| = |a| |b| sin theta
              a . b   = |a| |b| cos theta

  STEP 3   Square both and add.
              |a x b|^2 + (a.b)^2
                 = |a|^2 |b|^2 sin^2 theta  +  |a|^2 |b|^2 cos^2 theta
                 = |a|^2 |b|^2 ( sin^2 theta + cos^2 theta )
                 = |a|^2 |b|^2 x 1
                 = |a|^2 |b|^2
```
**Proved.**

---

### Q B5
Find the area of the triangle whose vertices are `A(1, 2, 3)`, `B(2, -1, 4)`
and `C(4, 5, -1)`, and a unit vector perpendicular to the plane ABC.

**ANSWER:**
```
  STEP 1   Two side vectors from the same vertex A.
              AB = B - A = (2-1)i + (-1-2)j + (4-3)k  =  i - 3j + k
              AC = C - A = (4-1)i + (5-2)j + (-1-3)k  =  3i + 3j - 4k

  STEP 2   Cross them.
                       |  i    j    k  |
             AB x AC = |  1   -3    1  |
                       |  3    3   -4  |

             i part :   (-3)(-4) - (1)(3)      = 12 - 3  =  9
             j part : -[ (1)(-4) - (1)(3) ]    = -[-4-3]  =  7
             k part :   (1)(3) - (-3)(3)       = 3 + 9   = 12

             AB x AC = 9i + 7j + 12k

  STEP 3   |AB x AC| = sqrt(81 + 49 + 144) = sqrt(274)

  STEP 4   Area = (1/2) sqrt(274)

  STEP 5   Unit vector perpendicular to the plane
              = +/- (9i + 7j + 12k) / sqrt(274)

  CHECK:  AB . (AB x AC) = (1)(9) + (-3)(7) + (1)(12) = 9 - 21 + 12 = 0  OK
```
**Area = sqrt(274)/2 sq units.  Unit normal = +/- (9i + 7j + 12k)/sqrt(274)**

---

### Q B6
Find the area of the parallelogram whose diagonals are `d1 = 3i + j - 2k`
and `d2 = i - 3j + 4k`.

**ANSWER:**
```
  DIAGONALS are given, so   Area = (1/2) |d1 x d2| .

                       |  i    j    k  |
             d1 x d2 = |  3    1   -2  |
                       |  1   -3    4  |

             i part :   (1)(4) - (-2)(-3)     = 4 - 6  =  -2
             j part : -[ (3)(4) - (-2)(1) ]   = -[12+2] = -14
             k part :   (3)(-3) - (1)(1)      = -9 - 1 = -10

             d1 x d2 = -2i - 14j - 10k

             |d1 x d2| = sqrt(4 + 196 + 100) = sqrt(300)
                       = sqrt(100 x 3) = 10 sqrt(3)

             Area = (1/2)(10 sqrt3) = 5 sqrt(3)
```
**Area = 5 sqrt(3) square units**

---

### Q B7
Find the moment about the point `M(-2, 4, -6)` of the force represented by
`AB`, where `A = (1, 2, -3)` and `B = (3, -4, 2)`.

**ANSWER:**
```
  STEP 1   The force vector.
              F = AB = B - A = (3-1)i + (-4-2)j + (2+3)k = 2i - 6j + 5k

  STEP 2   The vector from the PIVOT M to the point A where the force acts.
              r = MA = A - M = (1+2)i + (2-4)j + (-3+6)k = 3i - 2j + 3k

  STEP 3   Moment = r x F.
                     |  i    j    k  |
             r x F = |  3   -2    3  |
                     |  2   -6    5  |

             i part :   (-2)(5) - (3)(-6)    = -10 + 18 =   8
             j part : -[ (3)(5) - (3)(2) ]   = -[15 - 6] =  -9
             k part :   (3)(-6) - (-2)(2)    = -18 + 4  = -14
```
**Moment = 8i - 9j - 14k**

---

### Q B8
Prove that `[a + b , b + c , c + a] = 2 [a b c]`.

**ANSWER:**
```
  STEP 1   Write the left side as a dot with a cross.
              [a+b , b+c , c+a] = (a + b) . [ (b + c) x (c + a) ]

  STEP 2   Expand the cross first.
              (b + c) x (c + a)
                 = (b x c) + (b x a) + (c x c) + (c x a)
                 = (b x c) + (b x a) + 0 + (c x a)

  STEP 3   Dot (a + b) into that, term by term.

              a . (b x c) = [a b c]
              a . (b x a) = 0        (two vectors are the same -> 0)
              a . (c x a) = 0        (two vectors are the same -> 0)
              b . (b x c) = 0
              b . (b x a) = 0
              b . (c x a) = [b c a] = [a b c]     (cyclic property)

  STEP 4   Add the survivors.
              [a+b , b+c , c+a] = [a b c] + [a b c] = 2 [a b c]
```
**Proved.**

---

### Q B9
Find lambda so that `a = 2i - j + k`, `b = i + 2j - 3k` and
`c = 3i + lambda j + 5k` are coplanar.

**ANSWER:**
```
  STEP 1   Coplanar  <=>  [a b c] = 0.

                     |  2     -1        1  |
           [a b c] = |  1      2       -3  |  =  0
                     |  3   lambda      5  |

  STEP 2   Expand along the top row, sign board  + - + .

           +2 x |  2      -3 | = 2 [ (2)(5) - (-3)(lambda) ]
                | lambda   5 |  = 2 (10 + 3 lambda) = 20 + 6 lambda

           -(-1) x | 1   -3 | = +1 [ (1)(5) - (-3)(3) ] = 5 + 9 = 14
                   | 3    5 |

           +1 x | 1      2    | = (1)(lambda) - (2)(3) = lambda - 6
                | 3   lambda  |

  STEP 3   Add and set to zero.
              20 + 6 lambda + 14 + lambda - 6 = 0
                                 7 lambda + 28 = 0
                                      lambda = -4
```
**lambda = -4**

---

### Q B10
Find the volume of the tetrahedron whose vertices are `A(1, 2, 1)`,
`B(3, 2, 5)`, `C(2, -1, 0)` and `D(-1, 0, 1)`.

**ANSWER:**
```
  STEP 1   Three edge vectors from the SAME vertex A.
              AB = B - A = (3-1)i + (2-2)j + (5-1)k   =  2i + 0j + 4k
              AC = C - A = (2-1)i + (-1-2)j + (0-1)k  =   i - 3j -  k
              AD = D - A = (-1-1)i + (0-2)j + (1-1)k  = -2i - 2j + 0k

  STEP 2   The determinant.
                            |   2    0    4  |
           [AB AC AD]   =   |   1   -3   -1  |
                            |  -2   -2    0  |

  STEP 3   Expand along the top row (the 0 saves work).

           +2 x |  -3   -1 |  = 2 [ (-3)(0) - (-1)(-2) ] = 2 (0 - 2) =  -4
                |  -2    0 |

           -0 x ( anything )                                          =   0

           +4 x |   1   -3 |  = 4 [ (1)(-2) - (-3)(-2) ] = 4 (-2 - 6) = -32
                |  -2   -2 |

           [AB AC AD] = -4 + 0 - 32 = -36

  STEP 4   Volume = (1/6) |-36| = 36/6 = 6
```
**Volume = 6 cubic units**

---

### Q B11
If a, b, c are unit vectors and `a + b + c = 0`, find `a.b + b.c + c.a`.

**ANSWER:**
```
  STEP 1   Take the square of the length of both sides.
              |a + b + c|^2 = 0

  STEP 2   Expand.
              |a|^2 + |b|^2 + |c|^2 + 2( a.b + b.c + c.a ) = 0

  STEP 3   Unit vectors, so |a| = |b| = |c| = 1.
              1 + 1 + 1 + 2( a.b + b.c + c.a ) = 0
                      3 + 2( a.b + b.c + c.a ) = 0

  STEP 4   Solve.
              a.b + b.c + c.a = -3/2
```
**-3/2**

---

### Q B12
Prove that `[ a x b , b x c , c x a ] = [a b c]^2`.

**ANSWER:**
```
  STEP 1   Write the triple product as a dot with a cross.
              [ axb , bxc , cxa ] = (a x b) . [ (b x c) x (c x a) ]

  STEP 2   Simplify the inside using the VECTOR triple product,
           treating (b x c) as one single vector p:

              p x (c x a) = (p . a) c - (p . c) a
                          = [ (b x c) . a ] c  -  [ (b x c) . c ] a
                          = [a b c] c  -  0            (two c's give 0)
                          = [a b c] c

  STEP 3   Now dot with (a x b).
              (a x b) . ( [a b c] c )
                 = [a b c] x { (a x b) . c }
                 = [a b c] x [a b c]
                 = [a b c]^2
```
**Proved.**

---

### Q B13
If `a = i - 2j + 3k`, `b = 2i + j - k` and `c = j + k`, find `a x (b x c)`.

**ANSWER:**
```
  STEP 1   Use the formula, not two separate crosses.
              a x (b x c) = (a.c) b - (a.b) c

  STEP 2   a . c = (1)(0) + (-2)(1) + (3)(1) = 0 - 2 + 3 = 1
           (write c fully as 0i + 1j + 1k)

  STEP 3   a . b = (1)(2) + (-2)(1) + (3)(-1) = 2 - 2 - 3 = -3

  STEP 4   Substitute.
              a x (b x c) = 1(2i + j - k) - (-3)(j + k)
                          = 2i + j - k + 3j + 3k
                          = 2i + 4j + 2k
```
**a x (b x c) = 2i + 4j + 2k**

---

### Q B14
Using the dot product, prove that `cos(A - B) = cos A cos B + sin A sin B`.

**ANSWER:**
```
  STEP 1   Draw two unit vectors from the origin making angles A and B
           with the positive x-axis.

                     y
                     ^
                     |    p (angle A)
                     |   /
                     |  /  q (angle B)
                     | /  /
                     |/ /
                     +-------------> x

              p = cos A i + sin A j        |p| = 1
              q = cos B i + sin B j        |q| = 1

  STEP 2   Compute p . q by components.
              p . q = cos A cos B + sin A sin B

  STEP 3   Compute p . q by the definition. The angle between p and q
           is (A - B).
              p . q = |p| |q| cos(A - B) = 1 x 1 x cos(A - B)
                    = cos(A - B)

  STEP 4   The two answers must agree.
              cos(A - B) = cos A cos B + sin A sin B
```
**Proved.**

---

### Q B15
Show that the points `A(-1, 4, -3)`, `B(3, 2, -5)`, `C(-3, 8, -5)` and
`D(-3, 2, 1)` are coplanar.

**ANSWER:**
```
  STEP 1   Three vectors from the same point A.
              AB = B - A = (3+1)i + (2-4)j + (-5+3)k   =  4i - 2j - 2k
              AC = C - A = (-3+1)i + (8-4)j + (-5+3)k  = -2i + 4j - 2k
              AD = D - A = (-3+1)i + (2-4)j + (1+3)k   = -2i - 2j + 4k

  STEP 2   The determinant.
                          |   4   -2   -2  |
           [AB AC AD]  =  |  -2    4   -2  |
                          |  -2   -2    4  |

  STEP 3   Expand along the top row.

           +4 x |  4   -2 |  = 4 [ (4)(4) - (-2)(-2) ] = 4 (16 - 4)  =  48
                | -2    4 |

           -(-2) x | -2   -2 | = +2 [ (-2)(4) - (-2)(-2) ]
                   | -2    4 |   = 2 (-8 - 4) = 2(-12)               = -24

           +(-2) x | -2    4 | = -2 [ (-2)(-2) - (4)(-2) ]
                   | -2   -2 |   = -2 (4 + 8) = -2(12)               = -24

           [AB AC AD] = 48 - 24 - 24 = 0

  STEP 4   Since the scalar triple product is 0, the four points are
           COPLANAR.
```
**Proved.**

---

### Q B16
Find the perpendicular distance from the point `P(2, 3, -1)` to the line
through `A(1, 0, 1)` with direction vector `u = 2i - j + 2k`.

**ANSWER:**
```
  STEP 1   AP = P - A = (2-1)i + (3-0)j + (-1-1)k = i + 3j - 2k

  STEP 2   AP x u.
                      |  i    j    k  |
             AP x u = |  1    3   -2  |
                      |  2   -1    2  |

             i part :   (3)(2) - (-2)(-1)    = 6 - 2  =  4
             j part : -[ (1)(2) - (-2)(2) ]  = -[2+4]  = -6
             k part :   (1)(-1) - (3)(2)     = -1 - 6 = -7

             AP x u = 4i - 6j - 7k

  STEP 3   |AP x u| = sqrt(16 + 36 + 49) = sqrt(101)
           |u|      = sqrt(4 + 1 + 4)    = sqrt(9) = 3

  STEP 4   d = |AP x u| / |u| = sqrt(101)/3
```
**Distance = sqrt(101)/3 units**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. This chapter supplies one of them almost
# every year. Write EVERY step - the marks are for the steps.
# ===============================================================

### Q C1
In triangle ABC, prove by vector methods that
`a^2 = b^2 + c^2 - 2 b c cos A` (the cosine rule).

**MODEL ANSWER:**
```
                    A
                   / \
             c    /   \    b
                 /     \
                B-------C
                    a

  Here a, b, c denote the LENGTHS of the sides opposite to A, B, C.

  STEP 1   Set up vectors at the vertex A.
              Let  AB = p  (a vector) ,   so   |p| = c
              Let  AC = q  (a vector) ,   so   |q| = b

           The angle between p and q, measured at A, is the angle A.

  STEP 2   Express the third side as a vector.
              BC = AC - AB = q - p
              and its length is a, so |q - p| = a.

  STEP 3   Square the length. A length squared is the vector dotted with
           itself:
              a^2 = |q - p|^2 = (q - p) . (q - p)

  STEP 4   Expand using the distributive property of the dot product.
              (q - p).(q - p) = q.q - q.p - p.q + p.p

           Since the dot product is commutative, q.p = p.q, so

              = |q|^2 - 2 (p . q) + |p|^2

  STEP 5   Replace each piece.
              |q|^2 = b^2
              |p|^2 = c^2
              p . q = |p| |q| cos A = c b cos A

  STEP 6   Substitute.
              a^2 = b^2 + c^2 - 2 b c cos A

  STEP 7   By working from the vertices B and C in exactly the same way,
              b^2 = c^2 + a^2 - 2 c a cos B
              c^2 = a^2 + b^2 - 2 a b cos C
```
**Proved.**

---

### Q C2
In triangle ABC, prove by vector methods that
`sin A / a = sin B / b = sin C / c` (the sine rule).

**MODEL ANSWER:**
```
                    A
                   / \
             c    /   \    b
                 /     \
                B-------C
                    a

  STEP 1   Give the three sides directions that chase right round the
           triangle:
              p = BC ,   q = CA ,   r = AB

           Going all the way round returns you to where you started, so
              p + q + r = 0
           with |p| = a , |q| = b , |r| = c .

  STEP 2   Cross the whole equation on the left with p.
              p x (p + q + r) = p x 0
              (p x p) + (p x q) + (p x r) = 0
                 0    + (p x q) + (p x r) = 0
              so   p x q = -(p x r) = r x p

  STEP 3   Now cross the same equation on the left with q.
              (q x p) + (q x q) + (q x r) = 0
              (q x p) +    0    + (q x r) = 0
              so   q x r = -(q x p) = p x q

  STEP 4   Putting STEP 2 and STEP 3 together:
              p x q  =  q x r  =  r x p

  STEP 5   Take the magnitude of each.
              |p x q| = |p| |q| sin(angle between p and q)

           The angle between the vectors BC and CA is (180 - C), and
           sin(180 - C) = sin C. So
              |p x q| = a b sin C

           In the same way
              |q x r| = b c sin A
              |r x p| = c a sin B

  STEP 6   Since the three cross products are equal, so are their
           magnitudes:
              a b sin C  =  b c sin A  =  c a sin B

  STEP 7   Divide every term by  a b c :

                sin C          sin A          sin B
               -------   =    -------   =    -------
                  c              a              b

           which is the sine rule.
```
**Proved.**

---

### Q C3
If `a = i - 2j + 3k`, `b = 2i + j - k` and `c = j + k`, find `a x (b x c)`
and `(a x b) x c`, and hence show that the cross product is not associative.

**MODEL ANSWER:**
```
  Write c fully as  c = 0i + 1j + 1k .

  PART 1 --- a x (b x c)

  STEP 1   Use  a x (b x c) = (a.c) b - (a.b) c .

  STEP 2   a . c = (1)(0) + (-2)(1) + (3)(1) = 0 - 2 + 3 = 1

  STEP 3   a . b = (1)(2) + (-2)(1) + (3)(-1) = 2 - 2 - 3 = -3

  STEP 4   a x (b x c) = (1)(2i + j - k) - (-3)(0i + j + k)
                       = 2i + j - k + 3j + 3k
                       = 2i + 4j + 2k

  STEP 5   CHECK by the long route.
              b x c :
                    |  i    j    k  |
                    |  2    1   -1  |
                    |  0    1    1  |
              i part :   (1)(1) - (-1)(1)   = 1 + 1 =  2
              j part : -[ (2)(1) - (-1)(0) ] = -2
              k part :   (2)(1) - (1)(0)    =  2
              b x c = 2i - 2j + 2k

              a x (b x c) :
                    |  i    j    k  |
                    |  1   -2    3  |
                    |  2   -2    2  |
              i part :   (-2)(2) - (3)(-2)   = -4 + 6 =  2
              j part : -[ (1)(2) - (3)(2) ]  = -[2-6]  =  4
              k part :   (1)(-2) - (-2)(2)   = -2 + 4 =  2
              = 2i + 4j + 2k          SAME ANSWER   OK


  PART 2 --- (a x b) x c

  STEP 6   Use  (a x b) x c = (a.c) b - (b.c) a .

  STEP 7   b . c = (2)(0) + (1)(1) + (-1)(1) = 0 + 1 - 1 = 0

  STEP 8   (a x b) x c = (1)(2i + j - k) - (0)(a)
                       = 2i + j - k

  STEP 9   CHECK by the long route.
              a x b :
                    |  i    j    k  |
                    |  1   -2    3  |
                    |  2    1   -1  |
              i part :   (-2)(-1) - (3)(1)   = 2 - 3  = -1
              j part : -[ (1)(-1) - (3)(2) ] = -[-1-6] =  7
              k part :   (1)(1) - (-2)(2)    = 1 + 4  =  5
              a x b = -i + 7j + 5k

              (a x b) x c :
                    |  i    j    k  |
                    | -1    7    5  |
                    |  0    1    1  |
              i part :   (7)(1) - (5)(1)    = 2
              j part : -[ (-1)(1) - (5)(0) ] = 1
              k part :   (-1)(1) - (7)(0)   = -1
              = 2i + j - k            SAME ANSWER   OK


  CONCLUSION

     a x (b x c) = 2i + 4j + 2k
     (a x b) x c = 2i +  j -  k

     These are DIFFERENT vectors, so
             a x (b x c)  is not equal to  (a x b) x c .
     The cross product is NOT associative.
```

---

### Q C4
The points `A(1, 2, 3)`, `B(2, -1, 4)` and `C(4, 5, -1)` are given. Find
(i) the area of triangle ABC, (ii) a unit vector perpendicular to the plane
ABC, and (iii) the angle A of the triangle.

**MODEL ANSWER:**
```
  STEP 1   Two side vectors from the vertex A.
              AB = B - A = (2-1)i + (-1-2)j + (4-3)k =  i - 3j +  k
              AC = C - A = (4-1)i + (5-2)j + (-1-3)k = 3i + 3j - 4k

  ---- (i) AREA ----------------------------------------------------

  STEP 2   AB x AC.
                       |  i     j     k  |
             AB x AC = |  1    -3     1  |
                       |  3     3    -4  |

             i part :   (-3)(-4) - (1)(3)     = 12 - 3  =  9
             j part : -[ (1)(-4) - (1)(3) ]   = -(-7)   =  7
             k part :   (1)(3) - (-3)(3)      = 3 + 9   = 12

             AB x AC = 9i + 7j + 12k

  STEP 3   |AB x AC| = sqrt(9^2 + 7^2 + 12^2)
                     = sqrt(81 + 49 + 144)
                     = sqrt(274)

  STEP 4   Area of triangle ABC = (1/2) sqrt(274) square units.

  ---- (ii) UNIT NORMAL --------------------------------------------

  STEP 5   AB x AC is already perpendicular to the plane, so

              n = +/- (9i + 7j + 12k) / sqrt(274)

           (the +/- is required - there are two such unit vectors,
            one on each side of the plane)

  ---- (iii) THE ANGLE A -------------------------------------------

  STEP 6   AB . AC = (1)(3) + (-3)(3) + (1)(-4)
                   = 3 - 9 - 4
                   = -10

  STEP 7   |AB| = sqrt(1 + 9 + 1)  = sqrt(11)
           |AC| = sqrt(9 + 9 + 16) = sqrt(34)

  STEP 8   cos A = (AB . AC)/(|AB| |AC|)
                 = -10 / ( sqrt(11) x sqrt(34) )
                 = -10 / sqrt(374)

           The cosine is negative, so angle A is OBTUSE.

  STEP 9   CHECK (worth doing):
              AB . (AB x AC) = (1)(9) + (-3)(7) + (1)(12)
                             = 9 - 21 + 12 = 0        OK
              AC . (AB x AC) = (3)(9) + (3)(7) + (-4)(12)
                             = 27 + 21 - 48 = 0       OK
```
**(i) sqrt(274)/2 sq units  (ii) +/- (9i + 7j + 12k)/sqrt(274)
(iii) cos A = -10/sqrt(374), an obtuse angle**

---

### Q C5
(i) Show that the points `A(-1, 4, -3)`, `B(3, 2, -5)`, `C(-3, 8, -5)`,
`D(-3, 2, 1)` are coplanar.
(ii) Find the volume of the tetrahedron whose vertices are `A(1, 2, 1)`,
`B(3, 2, 5)`, `C(2, -1, 0)`, `D(-1, 0, 1)`.

**MODEL ANSWER:**
```
  ---- PART (i) ----------------------------------------------------

  STEP 1   Four points are coplanar exactly when [AB AC AD] = 0.

  STEP 2   AB = B - A = (3+1)i + (2-4)j + (-5+3)k  =  4i - 2j - 2k
           AC = C - A = (-3+1)i + (8-4)j + (-5+3)k = -2i + 4j - 2k
           AD = D - A = (-3+1)i + (2-4)j + (1+3)k  = -2i - 2j + 4k

  STEP 3                    |   4    -2    -2  |
           [AB AC AD]   =   |  -2     4    -2  |
                            |  -2    -2     4  |

  STEP 4   Expand along the top row, sign board  + - + .

           +4 x |  4   -2 | = 4 [ 16 - 4 ]  = 4(12)      =  48
                | -2    4 |

           -(-2) x | -2   -2 | = +2 [ (-2)(4) - (-2)(-2) ]
                   | -2    4 |   = 2 [ -8 - 4 ] = 2(-12) = -24

           +(-2) x | -2    4 | = -2 [ (-2)(-2) - (4)(-2) ]
                   | -2   -2 |   = -2 [ 4 + 8 ] = -2(12) = -24

  STEP 5   [AB AC AD] = 48 - 24 - 24 = 0

  STEP 6   The scalar triple product is zero, so the box built on
           AB, AC, AD has zero volume. Therefore the four points lie in
           one plane: they are COPLANAR.


  ---- PART (ii) ---------------------------------------------------

  STEP 7   Volume of a tetrahedron = (1/6) | [AB AC AD] |

  STEP 8   AB = B - A = (3-1)i + (2-2)j + (5-1)k   =  2i + 0j + 4k
           AC = C - A = (2-1)i + (-1-2)j + (0-1)k  =   i - 3j -  k
           AD = D - A = (-1-1)i + (0-2)j + (1-1)k  = -2i - 2j + 0k

  STEP 9                    |   2     0     4  |
           [AB AC AD]   =   |   1    -3    -1  |
                            |  -2    -2     0  |

  STEP 10  Expand along the top row (the 0 saves a whole 2 x 2).

           +2 x |  -3   -1 | = 2 [ (-3)(0) - (-1)(-2) ]
                |  -2    0 |   = 2 [ 0 - 2 ] = 2(-2)            =  -4

           -0 x ( anything )                                     =   0

           +4 x |   1   -3 | = 4 [ (1)(-2) - (-3)(-2) ]
                |  -2   -2 |   = 4 [ -2 - 6 ] = 4(-8)           = -32

           [AB AC AD] = -4 + 0 - 32 = -36

  STEP 11  Volume = (1/6) |-36| = 36/6 = 6

           (Take the modulus - a volume can never be negative.)
```
**(i) Coplanar, since [AB AC AD] = 0.  (ii) Volume = 6 cubic units**

---

### Q C6
A force `F = 2i + j - 3k` acts at the point `A(1, -2, 1)`. Find
(i) the moment of F about the point `B(2, 0, -2)`, and
(ii) the moment of F about the line through B whose direction is
`2i - j + 2k`.

**MODEL ANSWER:**
```
  ---- PART (i) : MOMENT ABOUT A POINT (answer is a VECTOR) ---------

  STEP 1   The position vector runs from the PIVOT B to the point A
           where the force acts.
              r = BA = A - B = (1-2)i + (-2-0)j + (1+2)k
                             = -i - 2j + 3k

  STEP 2   Moment = r x F.
                       |  i    j    k  |
              r x F =  | -1   -2    3  |
                       |  2    1   -3  |

              i part :   (-2)(-3) - (3)(1)     = 6 - 3  = 3
              j part : -[ (-1)(-3) - (3)(2) ]  = -[3-6]  = 3
              k part :   (-1)(1) - (-2)(2)     = -1 + 4 = 3

  STEP 3   Moment about B = 3i + 3j + 3k


  ---- PART (ii) : MOMENT ABOUT A LINE (answer is a NUMBER) ---------

  STEP 4   The direction vector must first be made a UNIT vector.
              |2i - j + 2k| = sqrt(4 + 1 + 4) = sqrt(9) = 3

              u = (2i - j + 2k)/3

  STEP 5   Moment about the line = (r x F) . u  =  [ r  F  u ]

              (3i + 3j + 3k) . (2i - j + 2k)/3

                 = [ (3)(2) + (3)(-1) + (3)(2) ] / 3
                 = [ 6 - 3 + 6 ] / 3
                 = 9 / 3
                 = 3

  STEP 6   Moment about the line = 3

  NOTE     About a POINT the moment is a VECTOR.
           About a LINE the moment is a NUMBER.
           Losing this distinction loses marks even when the arithmetic
           is perfect.
```
**(i) 3i + 3j + 3k   (ii) 3**

---

# WHICH QUESTIONS REPEAT MOST

Work down this table from the top. The first six lines alone will cover
most of what this chapter throws at you.

| Rank | Question type | Section | Marks | How often it appears |
|---|---|---|---|---|
| 1 | Find the angle between two vectors | A | 2 | Almost every year |
| 2 | Find x / lambda so two vectors are perpendicular | A | 2 | Almost every year |
| 3 | Find the projection of a on b | A | 2 | Very often |
| 4 | Find a x b, and a unit vector perpendicular to both | A or B | 2 or 4 | Very often |
| 5 | Area of a triangle from three vertices | A or B | 2 or 4 | Very often |
| 6 | Volume of a parallelepiped / tetrahedron | B | 4 | Very often |
| 7 | Find lambda so that three vectors are coplanar | B | 4 | Very often |
| 8 | Show four points are coplanar | B or C | 4 or 7 | Often |
| 9 | Components along and perpendicular to a vector | B | 4 | Often |
| 10 | Work done by a force / forces | A or B | 2 or 4 | Often |
| 11 | Moment of a force about a point | B | 4 | Often |
| 12 | Prove the cosine rule by vectors | C | 7 | Often |
| 13 | Prove the sine rule by vectors | C | 7 | Often |
| 14 | Vector triple product, and non-associativity | B or C | 4 or 7 | Often |
| 15 | Area of a parallelogram from its DIAGONALS | A or B | 2 or 4 | Often |
| 16 | \|a+b\| given \|a\|, \|b\| and \|a-b\| | A | 2 | Often |
| 17 | Prove [a+b, b+c, c+a] = 2[a b c] | B | 4 | Fairly often |
| 18 | Prove [a x b, b x c, c x a] = [a b c]^2 | B or C | 4 or 7 | Fairly often |
| 19 | Prove cos(A-B) = cosA cosB + sinA sinB by vectors | B | 4 | Fairly often |
| 20 | Angle in a semicircle / diagonals of a rhombus | B | 4 | Fairly often |
| 21 | Moment of a force about a LINE | B or C | 4 or 7 | Sometimes |
| 22 | Perpendicular distance from a point to a line | B | 4 | Sometimes |
| 23 | Products of four vectors | B | 4 | Rarely |

```
  +-----------------------------------------------------------------+
  |  A SENSIBLE PLAN                                                |
  |                                                                 |
  |  Learn ranks 1 to 7 perfectly  ->  you can always answer the    |
  |                                    2-mark and 4-mark questions  |
  |                                                                 |
  |  Then learn ranks 12 and 13    ->  you have a 7-mark Section C  |
  |  (cosine rule, sine rule)          answer that never changes    |
  |                                                                 |
  |  Then rank 14 (vector triple)  ->  a second 7-mark option, so   |
  |                                    you are never stuck          |
  +-----------------------------------------------------------------+
```
