# Matrices — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 3**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  Section A  (2 marks each, answer ALL 10)  ->  usually Q7 or Q8
  Section B  (4 marks each, answer any 5)   ->  usually Q18 or Q19
  Section C  (7 marks each, answer any 5)   ->  usually Q21
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10.
# ===============================================================

## Topic: Order, elements, construction

### Q A1
```
       +-----------+
  A =  | 1   2   3 |     Find the order of A and the value of a(2,3).
       | 4   5   6 |
       +-----------+
```
**ANSWER:** Order = 2 x 3. a(2,3) = row 2, column 3 = **6**

---

### Q A2
Construct a 2 x 3 matrix whose elements are a(i,j) = (i + 2j)^2 / 2

**ANSWER:**
```
  a(1,1) = (1+2)^2 / 2 = 9/2        a(1,2) = (1+4)^2 / 2 = 25/2
  a(1,3) = (1+6)^2 / 2 = 49/2       a(2,1) = (2+2)^2 / 2 = 8
  a(2,2) = (2+4)^2 / 2 = 18         a(2,3) = (2+6)^2 / 2 = 32

       +---------------------+
  A =  | 9/2   25/2   49/2   |
       |  8     18     32    |
       +---------------------+
```

---

## Topic: Equality of matrices

### Q A3
```
  +-----------------+       +-----------+
  | x-3      2y-8   |   =   |  5     2  |     Find x, y, z, a.
  | z+2      6      |       | -2    a-4 |
  +-----------------+       +-----------+
```
**ANSWER:**
```
  x - 3 = 5     ->  x = 8
  2y - 8 = 2    ->  y = 5
  z + 2 = -2    ->  z = -4
  a - 4 = 6     ->  a = 10
```

---

## Topic: Trace

### Q A4
```
       +--------------------+
       |  1     2    -1/2   |
  A =  |  0    -1     2     |     Find the trace of A.
       | -1/2   2     1     |
       +--------------------+
```
**ANSWER:** Tr(A) = 1 + (-1) + 1 = **1**

---

### Q A5
```
       +--------+
  A =  |  2   4 |     If A^2 = O, find k.
       | -1   k |
       +--------+
```
**ANSWER:**
```
        +--------------------------+     +-------+
  A^2 = |  4 - 4       8 + 4k      |  =  | 0   0 |
        | -2 - k      -4 + k^2     |     | 0   0 |
        +--------------------------+     +-------+

  From  -2 - k = 0   ->   k = -2

  Check:  8 + 4(-2) = 0  YES      -4 + (-2)^2 = 0  YES
```
**k = -2**

---

## Topic: Symmetric / skew-symmetric

### Q A6
```
       +--------------+
       | -1    2    3 |
  A =  |  2    5    6 |     A is symmetric.  Find x.
       |  3    x    7 |
       +--------------+
```
**ANSWER:** Symmetric means a(3,2) = a(2,3), so **x = 6**

---

### Q A7
```
       +----------------+
       |  0    4   -2   |
  A =  | -4    0    8   |     A is skew-symmetric.  Find x.
       |  x   -8    0   |
       +----------------+
```
**ANSWER:** Skew means a(3,1) = -a(1,3), so x = -(-2) = **2**

---

## Topic: Matrix multiplication

### Q A8
```
       +---------+
  A =  |  i    0 |     Find A^2.       (i is the imaginary unit)
       |  0   -i |
       +---------+
```
**ANSWER:**
```
        +--------------------+     +---------+
  A^2 = |  i^2       0       |  =  | -1    0 |  =  -I
        |   0     (-i)^2     |     |  0   -1 |
        +--------------------+     +---------+
```

---

### Q A9
```
       +------------------------+
       |  cos a      sin a      |
  A =  | -sin a      cos a      |     Show that A A' = I.
       +------------------------+
```
**ANSWER:**
```
         +--------------------------------------------------------+
  A A' = |  cos^2 a + sin^2 a       cos a sin a - sin a cos a      |
         |  sin a cos a - cos a sin a   sin^2 a + cos^2 a          |
         +--------------------------------------------------------+

       = +-------+
         | 1   0 |   =  I          (A is an ORTHOGONAL matrix)
         | 0   1 |
         +-------+
```

---

## Topic: Determinants (2 marks)

### Q A10
```
  |  1    4    2 |
  |  2   -1    4 |     Find the determinant.
  | -3    7   -6 |
```
**ANSWER:**
```
  = 1(6 - 28) - 4(-12 + 12) + 2(14 - 3)
  = 1(-22) - 4(0) + 2(11)
  = -22 - 0 + 22
  = 0          ->  the matrix is SINGULAR
```

---

### Q A11
```
  | a   h   g |
  | h   b   f |     Find the value when a = b = c = 0.
  | g   f   c |
```
**ANSWER:**
```
  = 0(0 - f^2) - h(0 - fg) + g(hf - 0)
  = 0 + hfg + ghf
  = 2fgh
```

---

### Q A12
If A is a skew-symmetric matrix of order 3, find det A.

**ANSWER:**
```
  det A = det(A')            [property 4]
        = det(-A)            [A is skew-symmetric]
        = (-1)^3 det(A)      [order 3]
        = -det(A)

  So  2 det(A) = 0   ->   det A = 0
```

---

### Q A13
```
  | x   2 |
  |       |  = 0        Find x.
  | 8   x |
```
**ANSWER:** x^2 - 16 = 0 -> **x = +4 or -4**

---

## Topic: Inverse (2 marks)

### Q A14
```
       +---------+
  A =  |  2   -3 |     Find adj A and A^-1.
       |  4    6 |
       +---------+
```
**ANSWER:**
```
  det A = (2)(6) - (-3)(4) = 12 + 12 = 24

           +---------+
  adj A =  |  6    3 |            (swap diagonal, flip off-diagonal signs)
           | -4    2 |
           +---------+

           1    +---------+
  A^-1 = ----- x|  6    3 |
          24    | -4    2 |
                +---------+
```

---

### Q A15
```
       +---------------------+
  A =  |  cos a    -sin a    |     Find A^-1.
       |  sin a     cos a    |
       +---------------------+
```
**ANSWER:**
```
  det A = cos^2 a + sin^2 a = 1

           +---------------------+
  A^-1  =  |  cos a     sin a    |   =  A'     (orthogonal matrix)
           | -sin a     cos a    |
           +---------------------+
```

---

## Topic: More trace and algebra

### Q A16
```
       +-------------+          +-------------+
  A =  | 1   2   3   |    B =   | 9   8   7   |    Find Tr(A + B).
       | 4   5   6   |          | 6   5   4   |
       | 7   8   9   |          | 3   2   1   |
       +-------------+          +-------------+
```
**ANSWER:**
```
  Tr(A) = 1 + 5 + 9 = 15
  Tr(B) = 9 + 5 + 1 = 15

  Tr(A + B) = Tr(A) + Tr(B) = 15 + 15 = 30
```
Do NOT add the whole matrices. The trace rule does it in one line.

---

### Q A17
```
       +---------+
  A =  |  1   2  |     Show that  A^2 - 5A - 2I = O.
       |  3   4  |
       +---------+
```
**ANSWER:**
```
        +----------------------------+     +-----------+
  A^2 = | 1(1)+2(3)      1(2)+2(4)   |  =  |  7    10  |
        | 3(1)+4(3)      3(2)+4(4)   |     | 15    22  |
        +----------------------------+     +-----------+

        +-----------+          +---------+
   5A = |  5    10  |    2I =  | 2    0  |
        | 15    20  |          | 0    2  |
        +-----------+          +---------+

  A^2 - 5A - 2I :
      (1,1) :  7 -  5 - 2 = 0        (1,2) : 10 - 10 - 0 = 0
      (2,1) : 15 - 15 - 0 = 0        (2,2) : 22 - 20 - 2 = 0

  = O          PROVED
```

---

### Q A18
```
       +---------+             +---------+
  A =  | 1   -1  |       B =   | 2    0  |      Find AB.
       | 2    3  |             | 1    4  |
       +---------+             +---------+
```
**ANSWER:**
```
  (1,1) = 1(2) + (-1)(1) =  2 - 1 =  1
  (1,2) = 1(0) + (-1)(4) =  0 - 4 = -4
  (2,1) = 2(2) +   3(1)  =  4 + 3 =  7
  (2,2) = 2(0) +   3(4)  =  0 +12 = 12

        +-----------+
  AB =  |  1    -4  |
        |  7    12  |
        +-----------+
```

---

### Q A19
A is a square matrix of order 3 with det A = 4.
Find (i) det(3A) (ii) det(adj A) (iii) det(A^-1).

**ANSWER:**
```
  (i)   det(3A)    = 3^3 x det A = 27 x 4 = 108      [ det(kA) = k^n det A ]
  (ii)  det(adj A) = (det A)^(n-1) = 4^2 = 16
  (iii) det(A^-1)  = 1 / det A = 1/4
```
> **TRAP:** for (i) the power is the ORDER 3, not the number 3 in front. 27, not 12.

---

### Q A20
```
  | x - 1     3 |
  |             |  =  0        Find x.
  |   2     x - 2 |
```
**ANSWER:**
```
  (x - 1)(x - 2) - (3)(2) = 0
        x^2 - 3x + 2 - 6  = 0
        x^2 - 3x - 4      = 0
        (x - 4)(x + 1)    = 0

        x = 4    or    x = -1

  CHECK x = 4 :  | 3   3 |  = (3)(2) - (3)(2) = 0      YES
                 | 2   2 |
```

---

## Topic: Minors, cofactors, singular matrices

### Q A21
```
       +---------------+
  A =  |  2   -1    4  |     Find the minor and the cofactor of the
       |  3    0    5  |     element in row 2, column 3.
       |  1    6   -2  |
       +---------------+
```
**ANSWER:**
```
  Delete row 2 and column 3:

     M(2,3) =  | 2   -1 |  =  (2)(6) - (-1)(1)  =  12 + 1  =  13
               | 1    6 |

  Sign at (2,3) :  (-1)^(2+3) = -1

     C(2,3) = -13
```

---

### Q A22
Find the cofactor of the element 5 in the matrix below.
```
  | 1   2   3 |
  | 4   5   6 |
  | 7   8   9 |
```
**ANSWER:**
```
  5 sits at position (2,2).  Sign = (-1)^(2+2) = +1.

  C(2,2) = + | 1   3 |  =  (1)(9) - (3)(7)  =  9 - 21  =  -12
             | 7   9 |
```

---

### Q A23
```
  For what value of x is the matrix   +-------------+   singular?
                                      |  x       2  |
                                      |  3    x - 1 |
                                      +-------------+
```
**ANSWER:**
```
  Singular means det = 0.

     x(x - 1) - (2)(3) = 0
     x^2 - x - 6 = 0
     (x - 3)(x + 2) = 0

     x = 3   or   x = -2
```

---

### Q A24
```
       +---------------+
  A =  |  0    5   -x  |     A is skew-symmetric.  Find x.
       | -5    0    7  |
       |  3   -7    0  |
       +---------------+
```
**ANSWER:**
```
  Skew means  a(1,3) = -a(3,1)

        -x = -(3) = -3      ->      x = 3
```

---

### Q A25
```
       +---------+
  A =  | 1   2   |      Find the rank of A.
       | 2   4   |
       +---------+
```
**ANSWER:**
```
  det A = (1)(4) - (2)(2) = 4 - 4 = 0        ->  rank is less than 2

  A is not the zero matrix                   ->  rank is at least 1

  RANK = 1
```

---

### Q A26
If A = diag(1, -1, 2), find det A and A^-1.

**ANSWER:**
```
  Determinant of a diagonal matrix = product of the diagonal entries.

     det A = (1)(-1)(2) = -2      (not zero, so the inverse exists)

  Inverse of a diagonal matrix = reciprocal of each diagonal entry.

     A^-1 = diag( 1 , -1 , 1/2 )

           +---------------------+
         = |  1    0      0      |
           |  0   -1      0      |
           |  0    0     1/2     |
           +---------------------+
```

---

### Q A27
A and B are square matrices of order 3 with det A = 2 and det B = -3.
Find det(AB) and det(2AB).

**ANSWER:**
```
  det(AB)  = det A x det B = (2)(-3) = -6

  det(2AB) = 2^3 x det(AB) = 8 x (-6) = -48
```

---

### Q A28
```
       +---------+
  A =  | 2   3   |     Express A as the sum of a symmetric and a
       | 4   5   |     skew-symmetric matrix.
       +---------+
```
**ANSWER:**
```
        +---------+
  A' =  | 2   4   |
        | 3   5   |
        +---------+

              1  +---------+     +-------------+
  P = ------ x   | 4    7  |  =  |  2     7/2  |      SYMMETRIC
              2  | 7   10  |     | 7/2     5   |
                 +---------+     +-------------+

              1  +----------+    +---------------+
  Q = ------ x   | 0    -1  |  = |  0     -1/2   |     SKEW-SYMMETRIC
              2  | 1     0  |    | 1/2      0    |
                 +----------+    +---------------+

  CHECK :  P + Q = | 2 + 0        7/2 - 1/2 |  =  | 2   3 |  =  A     YES
                   | 7/2 + 1/2    5 + 0     |     | 4   5 |
```

---

### Q A29
```
       +---------------------+
  A =  |  cos a     sin a    |     Find A^2.
       | -sin a     cos a    |
       +---------------------+
```
**ANSWER:**
```
  (1,1) = cos^2 a - sin^2 a = cos 2a
  (1,2) = cos a sin a + sin a cos a = 2 sin a cos a = sin 2a
  (2,1) = -sin a cos a - cos a sin a = -sin 2a
  (2,2) = -sin^2 a + cos^2 a = cos 2a

        +-------------------------+
  A^2 = |  cos 2a      sin 2a     |      the angle simply DOUBLES
        | -sin 2a      cos 2a     |
        +-------------------------+
```

---

### Q A30
If A is a square matrix such that A^2 = A, find the value of (I + A)^2 - 3A.

**ANSWER:**
```
  (I + A)^2 = I^2 + IA + AI + A^2         [ keep the two middle terms apart ]
            = I + A + A + A               [ since A^2 = A ]
            = I + 3A

  So   (I + A)^2 - 3A  =  I + 3A - 3A  =  I
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

## Topic: Symmetric / skew-symmetric proofs

### Q B1
If A is any square matrix, prove that A + A' is symmetric and A - A' is skew-symmetric.

**SOLUTION:**
```
  (A + A')'  =  A' + (A')'  =  A' + A  =  A + A'
                                          ^^^^^^^  same as the original
  ->  A + A' is SYMMETRIC

  (A - A')'  =  A' - (A')'  =  A' - A  =  -(A - A')
                                          ^^^^^^^^^  negative of the original
  ->  A - A' is SKEW-SYMMETRIC
```

---

### Q B2
```
       +---------+
  A =  | 2    4  |     Express A as the sum of a symmetric and a
       | 6    8  |     skew-symmetric matrix.
       +---------+
```
**SOLUTION:**
```
        +---------+
  A' =  | 2    6  |
        | 4    8  |
        +---------+

              1    +----------+     +---------+
  P = (1/2)(A+A') = | 4    10 |  =  | 2    5  |     SYMMETRIC
                2   | 10   16 |     | 5    8  |
                    +----------+     +---------+

              1    +----------+     +---------+
  Q = (1/2)(A-A') = | 0    -2 |  =  | 0   -1  |     SKEW-SYMMETRIC
                2   | 2     0 |     | 1    0  |
                    +----------+     +---------+

  Check:  P + Q  =  | 2+0   5-1 |  =  | 2   4 |  =  A     YES
                    | 5+1   8+0 |     | 6   8 |
```

---

### Q B3
If A and B are symmetric matrices of the same order, prove that AB - BA is skew-symmetric.

**SOLUTION:**
```
  (AB - BA)'  =  (AB)' - (BA)'
              =  B'A'  - A'B'          [order reverses]
              =  BA    - AB            [A' = A and B' = B, since symmetric]
              =  -(AB - BA)

  ->  AB - BA is SKEW-SYMMETRIC
```

---

### Q B4  (asked very often)
If  a - b = 90 degrees, prove that the following product is the null matrix:
```
  +----------------------------+     +----------------------------+
  | cos^2 a      cos a sin a   |  x  | cos^2 b      cos b sin b   |
  | cos a sin a  sin^2 a       |     | cos b sin b  sin^2 b       |
  +----------------------------+     +----------------------------+
```
**FULL SOLUTION:**
```
  Call the two matrices A and B and multiply them out entry by entry.

  ENTRY (1,1) :  cos^2 a . cos^2 b   +   cos a sin a . cos b sin b
              =  cos a cos b ( cos a cos b  +  sin a sin b )
              =  cos a cos b . cos(a - b)

  ENTRY (1,2) :  cos^2 a . cos b sin b   +   cos a sin a . sin^2 b
              =  cos a sin b ( cos a cos b  +  sin a sin b )
              =  cos a sin b . cos(a - b)

  ENTRY (2,1) :  cos a sin a . cos^2 b   +   sin^2 a . cos b sin b
              =  sin a cos b ( cos a cos b  +  sin a sin b )
              =  sin a cos b . cos(a - b)

  ENTRY (2,2) :  cos a sin a . cos b sin b   +   sin^2 a . sin^2 b
              =  sin a sin b ( cos a cos b  +  sin a sin b )
              =  sin a sin b . cos(a - b)

  EVERY entry carries the same factor  cos(a - b).

  Given  a - b = 90 degrees  ->  cos(a - b) = cos 90 = 0

  So every entry is (something) x 0 = 0 :

            +---------+
     AB  =  | 0    0  |  =  O         THE NULL MATRIX.      PROVED
            | 0    0  |
            +---------+
```

> **The whole question turns on recognising  cos a cos b + sin a sin b = cos(a - b).**
> Write that line first and the rest is bookkeeping.

---

## Topic: Determinant proofs

### Q B5
```
  | a   b   c |
  | b   c   a |   =  -(a^3 + b^3 + c^3 - 3abc)      Prove it.
  | c   a   b |
```
**FULL SOLUTION:**
```
  STEP 1   R1 -> R1 + R2 + R3

           Every entry of the new row 1 becomes  a + b + c :

           | a+b+c   a+b+c   a+b+c |
           |   b       c       a   |
           |   c       a       b   |

           Take (a + b + c) out of row 1 as a common factor:

                              | 1   1   1 |
           D = (a + b + c) x  | b   c   a |
                              | c   a   b |


  STEP 2   C2 -> C2 - C1     and     C3 -> C3 - C1

           row 1 :  1 ,  1-1 = 0 ,  1-1 = 0
           row 2 :  b ,  c-b     ,  a-b
           row 3 :  c ,  a-c     ,  b-c

                              | 1    0      0   |
           D = (a + b + c) x  | b   c-b    a-b  |
                              | c   a-c    b-c  |


  STEP 3   Expand along row 1 - only the leading 1 survives:

           D = (a + b + c) x  | c-b    a-b |
                              | a-c    b-c |

             = (a + b + c) [ (c-b)(b-c)  -  (a-b)(a-c) ]


  STEP 4   Expand the bracket

           (c-b)(b-c)  =  -(b-c)^2  =  -b^2 + 2bc - c^2
           (a-b)(a-c)  =  a^2 - ac - ab + bc

           bracket = (-b^2 + 2bc - c^2) - (a^2 - ac - ab + bc)
                   = -a^2 - b^2 - c^2 + ab + bc + ca
                   = -( a^2 + b^2 + c^2 - ab - bc - ca )

           D = -(a + b + c)( a^2 + b^2 + c^2 - ab - bc - ca )

             = -( a^3 + b^3 + c^3 - 3abc )          PROVED

           (using the standard identity
              a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca) )


  NUMERIC CHECK with a = 1 , b = 2 , c = 3 :

     | 1  2  3 |
     | 2  3  1 |  = 1(6 - 1) - 2(4 - 3) + 3(2 - 9) = 5 - 2 - 21 = -18
     | 3  1  2 |

     -(1 + 8 + 27 - 3(1)(2)(3)) = -(36 - 18) = -18        MATCHES
```

---

### Q B6
```
  | 1   a   a^2 |
  | 1   b   b^2 |   =  (a - b)(b - c)(c - a)        Prove it.
  | 1   c   c^2 |
```
**FULL SOLUTION:**
```
  STEP 1   R1 -> R1 - R2      and     R2 -> R2 - R3

           row 1 :  1-1 = 0 ,  a - b ,  a^2 - b^2
           row 2 :  1-1 = 0 ,  b - c ,  b^2 - c^2
           row 3 :  1       ,  c     ,  c^2

           | 0    a-b     a^2 - b^2 |
           | 0    b-c     b^2 - c^2 |
           | 1     c         c^2    |


  STEP 2   Take (a - b) out of row 1 and (b - c) out of row 2.

           Because  a^2 - b^2 = (a - b)(a + b)  and  b^2 - c^2 = (b - c)(b + c) :

                                  | 0    1     a + b |
           D = (a - b)(b - c)  x  | 0    1     b + c |
                                  | 1    c      c^2  |


  STEP 3   Expand along COLUMN 1.  Only the 1 at position (3,1) survives,
           and its sign is  (-1)^(3+1) = +1 :

           D = (a - b)(b - c)  x  | 1    a + b |
                                  | 1    b + c |

             = (a - b)(b - c) [ (b + c) - (a + b) ]

             = (a - b)(b - c)(c - a)                 PROVED


  NUMERIC CHECK with a = 1 , b = 2 , c = 3 :

     | 1  1  1 |
     | 1  2  4 |  = 1(18 - 12) - 1(9 - 4) + 1(3 - 2) = 6 - 5 + 1 = 2
     | 1  3  9 |

     (a-b)(b-c)(c-a) = (-1)(-1)(2) = 2                    MATCHES
```

> The row form  | 1 1 1 ; a b c ; a^2 b^2 c^2 |  has exactly the same value.
> Transposing does not change a determinant.

---

### Q B7
```
  | a-b   b-c   c-a |
  | b-c   c-a   a-b |   =  0        Prove it.
  | c-a   a-b   b-c |
```
**SOLUTION:**
```
  R1 -> R1 + R2 + R3

  Row 1 becomes:  (a-b)+(b-c)+(c-a) ,  (b-c)+(c-a)+(a-b) ,  (c-a)+(a-b)+(b-c)
               =        0            ,        0            ,        0

  A determinant with a zero row is 0.     DONE.
```

---

## Topic: Rank

### Q B8
```
       +-----------+
  A =  | 1   2   3 |     Find the rank of A.
       | 2   3   4 |
       | 0   1   2 |
       +-----------+
```
**SOLUTION:**
```
  det A = 1(6 - 4) - 2(4 - 0) + 3(2 - 0)
        = 2 - 8 + 6
        = 0                    ->  rank is less than 3

  Try a 2x2:   | 1   2 |  =  3 - 4  =  -1    (not zero)
               | 2   3 |

  ->  RANK = 2
```

---

### Q B9
```
       +-----------+
  A =  | 1   1   1 |     Find the rank.
       | 1   1   1 |
       | 1   1   1 |
       +-----------+
```
**ANSWER:** All rows are identical, so every 2x2 minor is 0. Elements are non-zero.
**RANK = 1**

---

### Q B10
```
       +-----------+
  A =  | 1   4  -1 |     Find the rank.
       | 2   3   0 |
       | 0   1   2 |
       +-----------+
```
**SOLUTION:**
```
  det A = 1(6 - 0) - 4(4 - 0) + (-1)(2 - 0)
        = 6 - 16 - 2
        = -12          (not zero)

  ->  RANK = 3
```

---

## Topic: Adjoint and inverse

### Q B11
```
       +-----------+
  A =  | 1   2   2 |     Show that  A^2 - 4A - 5I = O.
       | 2   1   2 |     Hence find A^-1.
       | 2   2   1 |
       +-----------+
```
**SOLUTION:**
```
        +-----------+          +-----------+          +-----------+
  A^2 = | 9   8   8 |    4A =  | 4   8   8 |    5I =  | 5   0   0 |
        | 8   9   8 |          | 8   4   8 |          | 0   5   0 |
        | 8   8   9 |          | 8   8   4 |          | 0   0   5 |
        +-----------+          +-----------+          +-----------+

  A^2 - 4A - 5I:
        row 1:  9-4-5 = 0 ,  8-8-0 = 0 ,  8-8-0 = 0
        row 2:  8-8-0 = 0 ,  9-4-5 = 0 ,  8-8-0 = 0
        row 3:  8-8-0 = 0 ,  8-8-0 = 0 ,  9-4-5 = 0

  ->  A^2 - 4A - 5I = O        PROVED

  HENCE:  multiply the whole equation by A^-1

     A - 4I - 5 A^-1  =  O
     5 A^-1           =  A - 4I
     A^-1             =  (1/5)(A - 4I)
```

---

### Q B12
```
       +-----------+
  A =  | 1   2   1 |     Find A^-1.
       | 3   2   3 |
       | 1   1   2 |
       +-----------+
```
**SOLUTION:**
```
  STEP 1 — determinant

  det A = 1(2x2 - 3x1) - 2(3x2 - 3x1) + 1(3x1 - 2x1)
        = 1(4 - 3) - 2(6 - 3) + 1(3 - 2)
        = 1 - 6 + 1
        = -4                    (not zero, so A^-1 exists)


  STEP 2 — all nine cofactors

   C(1,1) = + | 2   3 |  = + (4 - 3)  =   1
              | 1   2 |

   C(1,2) = - | 3   3 |  = - (6 - 3)  =  -3
              | 1   2 |

   C(1,3) = + | 3   2 |  = + (3 - 2)  =   1
              | 1   1 |

   C(2,1) = - | 2   1 |  = - (4 - 1)  =  -3
              | 1   2 |

   C(2,2) = + | 1   1 |  = + (2 - 1)  =   1
              | 1   2 |

   C(2,3) = - | 1   2 |  = - (1 - 2)  =   1
              | 1   1 |

   C(3,1) = + | 2   1 |  = + (6 - 2)  =   4
              | 2   3 |

   C(3,2) = - | 1   1 |  = - (3 - 3)  =   0
              | 3   3 |

   C(3,3) = + | 1   2 |  = + (2 - 6)  =  -4
              | 3   2 |


  STEP 3 — cofactor matrix, then TRANSPOSE

   cofactor matrix              adj A
   +--------------+             +--------------+
   |  1   -3    1 |             |  1   -3    4 |
   | -3    1    1 |   ------>   | -3    1    0 |
   |  4    0   -4 |             |  1    1   -4 |
   +--------------+             +--------------+


  STEP 4 — divide by det A

            -1    +--------------+              1     +--------------+
    A^-1 = ----- x|  1   -3    4 |    =      ------- x| -1    3   -4 |
             4    | -3    1    0 |              4     |  3   -1    0 |
                  |  1    1   -4 |                    | -1   -1    4 |
                  +--------------+                    +--------------+


  STEP 5 — VERIFY  A (adj A) = (det A) I = -4 I

    columns of adj A :  c1 = (1,-3,1) , c2 = (-3,1,1) , c3 = (4,0,-4)

    row 1 of A (1,2,1) . c1 =  1 - 6 + 1 = -4       <- det A
    row 1 . c2               = -3 + 2 + 1 =  0
    row 1 . c3               =  4 + 0 - 4 =  0
    row 2 of A (3,2,3) . c2  = -9 + 2 + 3 = -4      <- det A
    row 3 of A (1,1,2) . c3  =  4 + 0 - 8 = -4      <- det A

    All off-diagonal entries are 0.          CORRECT
```

---

## Topic: Rank by echelon form

### Q B13
```
       +------------------+
  A =  | 1   2   -1    3  |     Find the rank of A.
       | 2   4    1   -2  |
       | 3   6    3   -7  |
       +------------------+
```
**SOLUTION:**
```
  This is 3 x 4, so minors are painful. Row-reduce instead.

  R2 -> R2 - 2 R1 :   ( 2-2 , 4-4 , 1+2 , -2-6  )  =  ( 0 , 0 , 3 ,  -8 )
  R3 -> R3 - 3 R1 :   ( 3-3 , 6-6 , 3+3 , -7-9  )  =  ( 0 , 0 , 6 , -16 )

       | 1   2   -1     3 |
       | 0   0    3    -8 |
       | 0   0    6   -16 |

  R3 -> R3 - 2 R2 :   ( 0 , 0 , 6-6 , -16+16 )  =  ( 0 , 0 , 0 , 0 )

       | 1   2   -1     3 |
       | 0   0    3    -8 |          <-- echelon form
       | 0   0    0     0 |

  Number of non-zero rows = 2

  RANK = 2
```
> Sanity check: rank can never exceed the smaller of (3, 4) = 3. We got 2. Fine.

---

### Q B14
```
       +-----------+
  A =  |  3   -4   |     Prove by induction that
       |  1   -1   |             +---------------------+
       +-----------+     A^n  =  |  1 + 2n     -4n     |
                                 |     n      1 - 2n   |
                                 +---------------------+
```
**SOLUTION:**
```
  BASE CASE  n = 1 :

     +-----------------------+     +----------+
     | 1 + 2(1)     -4(1)    |  =  |  3   -4  |  =  A          TRUE
     |    1        1 - 2(1)  |     |  1   -1  |
     +-----------------------+     +----------+


  INDUCTIVE STEP.  Assume the formula holds for n = k :

           +---------------------+
     A^k = |  1 + 2k     -4k     |
           |     k      1 - 2k   |
           +---------------------+

  Then  A^(k+1) = A^k x A :

     (1,1) = (1 + 2k)(3) + (-4k)(1)  =  3 + 6k - 4k  =  3 + 2k  =  1 + 2(k+1)
     (1,2) = (1 + 2k)(-4) + (-4k)(-1) = -4 - 8k + 4k = -4 - 4k  =  -4(k+1)
     (2,1) = (k)(3) + (1 - 2k)(1)    =  3k + 1 - 2k  =  k + 1
     (2,2) = (k)(-4) + (1 - 2k)(-1)  = -4k - 1 + 2k  = -1 - 2k  =  1 - 2(k+1)

           +-----------------------------+
   A^(k+1)=| 1 + 2(k+1)     -4(k+1)      |     which is the formula with
           |    k+1        1 - 2(k+1)    |     n replaced by k + 1.
           +-----------------------------+

  By the principle of mathematical induction the result holds for all n >= 1.
```

---

### Q B15
```
       +-----------------+
  A =  |  2   -2   -4    |     Show that A is idempotent (A^2 = A).
       | -1    3    4    |
       |  1   -2   -3    |
       +-----------------+
```
**SOLUTION:**
```
  Columns of A :  c1 = (2, -1, 1) , c2 = (-2, 3, -2) , c3 = (-4, 4, -3)

  row 1 = (2, -2, -4) :
     . c1 :  2(2) + (-2)(-1) + (-4)(1)  =  4 + 2 - 4  =   2
     . c2 :  2(-2) + (-2)(3) + (-4)(-2) = -4 - 6 + 8  =  -2
     . c3 :  2(-4) + (-2)(4) + (-4)(-3) = -8 - 8 + 12 =  -4

  row 2 = (-1, 3, 4) :
     . c1 : -1(2) + 3(-1) + 4(1)   = -2 - 3 + 4  =  -1
     . c2 : -1(-2) + 3(3) + 4(-2)  =  2 + 9 - 8  =   3
     . c3 : -1(-4) + 3(4) + 4(-3)  =  4 + 12 - 12=   4

  row 3 = (1, -2, -3) :
     . c1 :  1(2) + (-2)(-1) + (-3)(1)  =  2 + 2 - 3  =   1
     . c2 :  1(-2) + (-2)(3) + (-3)(-2) = -2 - 6 + 6  =  -2
     . c3 :  1(-4) + (-2)(4) + (-3)(-3) = -4 - 8 + 9  =  -3

        +-----------------+
  A^2 = |  2   -2   -4    |   =  A         A IS IDEMPOTENT
        | -1    3    4    |
        |  1   -2   -3    |
        +-----------------+

  Consequence:  A^3 = A^2 . A = A . A = A^2 = A , so A^n = A for every n >= 1.
```

---

### Q B16
```
       +-----------------+
  A =  |  2   -1    1    |     Find A^-1.
       | -1    2   -1    |
       |  1   -1    2    |
       +-----------------+
```
**SOLUTION:**
```
  det A = 2(2x2 - (-1)(-1)) - (-1)((-1)(2) - (-1)(1)) + 1((-1)(-1) - 2x1)
        = 2(4 - 1) + 1(-2 + 1) + 1(1 - 2)
        = 6 - 1 - 1
        = 4

  Cofactors:

    C(1,1) = + (4 - 1)      =  3        C(1,2) = - (-2 + 1)   =  1
    C(1,3) = + (1 - 2)      = -1        C(2,1) = - (-2 + 1)   =  1
    C(2,2) = + (4 - 1)      =  3        C(2,3) = - (-2 + 1)   =  1
    C(3,1) = + (1 - 2)      = -1        C(3,2) = - (-2 + 1)   =  1
    C(3,3) = + (4 - 1)      =  3

    cofactor matrix               adj A (= its transpose)
    +--------------+              +--------------+
    |  3    1   -1 |              |  3    1   -1 |
    |  1    3    1 |   ------>    |  1    3    1 |
    | -1    1    3 |              | -1    1    3 |
    +--------------+              +--------------+
    (A is symmetric, so the transpose happens to look the same -
     do NOT assume this in general.)

              1     +--------------+
    A^-1  =  ----- x|  3    1   -1 |
              4     |  1    3    1 |
                    | -1    1    3 |
                    +--------------+

  VERIFY  A (adj A) = 4 I :
    row 1 of A (2,-1,1) . column 1 of adj A (3,1,-1) =  6 - 1 - 1 =  4    YES
    row 1 . column 2 (1,3,1)                          =  2 - 3 + 1 =  0    YES
    row 1 . column 3 (-1,1,3)                         = -2 - 1 + 3 =  0    YES
```

---

### Q B17
If A is a symmetric matrix and B is any matrix such that the product B'AB is
defined, prove that B'AB is symmetric.

**SOLUTION:**
```
  Given  A' = A.

  (B'AB)'  =  B' A' (B')'          [ (XYZ)' = Z'Y'X' , applied to B', A, B ]
           =  B' A' B              [ (B')' = B ]
           =  B' A B               [ A' = A , since A is symmetric ]
           =  B'AB

  The transpose gives back the original, so B'AB is SYMMETRIC.
```
> **Companion result:** if A is SKEW-symmetric, the same three lines give
> (B'AB)' = B'(-A)B = -(B'AB), so B'AB is skew-symmetric.

---

### Q B18
Find the matrices X and Y if
```
                 +---------+                       +-----------+
  2X + 3Y  =     | 8   4   |       3X + 2Y  =      |  7    6   |
                 | 9   5   |                       | 11   10   |
                 +---------+                       +-----------+
```
**SOLUTION:**
```
  Eliminate X exactly as with ordinary simultaneous equations.

  3 x (first)  :  6X + 9Y = | 24   12 |
                            | 27   15 |

  2 x (second) :  6X + 4Y = | 14   12 |
                            | 22   20 |

  Subtract     :     5Y   = | 24-14   12-12 |  =  | 10    0 |
                            | 27-22   15-20 |     |  5   -5 |

                      Y   = |  2    0 |
                            |  1   -1 |

  Put Y back into the first equation:

              2X = | 8   4 |  -  3 | 2    0 |  =  | 8-6   4-0 |  =  | 2   4 |
                   | 9   5 |       | 1   -1 |     | 9-3   5+3 |     | 6   8 |

               X = | 1   2 |
                   | 3   4 |

  CHECK in the second equation:

      3X + 2Y = | 3    6 | + | 4    0 |  =  |  7    6 |         YES
                | 9   12 |   | 2   -2 |     | 11   10 |
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)   <-- THE BIG ONE
# ===============================================================

> **HOW SECTION C IS MARKED.** Seven marks are given for the METHOD, laid out in
> visible steps. Even if your arithmetic slips at the end, a clearly labelled
> STEP 1 / STEP 2 / STEP 3 layout keeps most of the marks. Never write only the
> final answer.

**Every question below has a complete step-by-step model answer. There are no
bare questions in this section.**

---

## QUESTION C1 — SOLVE BY MATRIX INVERSION METHOD

```
     2x - y + 3z = 9 ,      x + y + z = 6 ,      x - y + z = 2
```

### FULL MODEL ANSWER — copy this layout in the exam

```
  STEP 1 — Write A, X, B

        +-------------+        +-----+        +-----+
   A =  |  2  -1   3  |   X =  |  x  |   B =  |  9  |
        |  1   1   1  |        |  y  |        |  6  |
        |  1  -1   1  |        |  z  |        |  2  |
        +-------------+        +-----+        +-----+


  STEP 2 — Find det A

   det A = 2(1 + 1) - (-1)(1 - 1) + 3(-1 - 1)
         = 2(2) + 1(0) + 3(-2)
         = 4 + 0 - 6
         = -2                     (not zero, so A^-1 exists)


  STEP 3 — Find all 9 cofactors

   C(1,1) = + (1 + 1)  =  2       C(1,2) = - (1 - 1)  =  0
   C(1,3) = + (-1 - 1) = -2       C(2,1) = - (-1 + 3) = -2
   C(2,2) = + (2 - 3)  = -1       C(2,3) = - (-2 + 1) =  1
   C(3,1) = + (-1 - 3) = -4       C(3,2) = - (2 - 3)  =  1
   C(3,3) = + (2 + 1)  =  3


  STEP 4 — Cofactor matrix, then TRANSPOSE it to get adj A

   cofactor matrix        adj A  (= its transpose)
   +--------------+       +--------------+
   |  2   0   -2  |       |  2   -2   -4 |
   | -2  -1    1  |  -->  |  0   -1    1 |
   | -4   1    3  |       | -2    1    3 |
   +--------------+       +--------------+
                          ^^^ DO NOT FORGET THIS TRANSPOSE


  STEP 5 — Compute X = (1 / det A) x (adj A) x B

         1     +--------------+     +-----+
   X = ------ x|  2   -2   -4 |  x  |  9  |
        (-2)   |  0   -1    1 |     |  6  |
               | -2    1    3 |     |  2  |
               +--------------+     +-----+

         1     +----------------------+       1     +------+
     = ------ x| 18 - 12 - 8          |  = ------ x |  -2  |
        (-2)   |  0 -  6 + 2          |     (-2)    |  -4  |
               |-18 +  6 + 6          |             |  -6  |
               +----------------------+             +------+

         +-----+
     =   |  1  |          ->   x = 1 ,  y = 2 ,  z = 3
         |  2  |
         |  3  |
         +-----+


  STEP 6 — CHECK (20 seconds, saves 7 marks)

   2(1) - (2) + 3(3)  =  2 - 2 + 9  =  9    YES
   (1) + (2) + (3)    =  6                  YES
   (1) - (2) + (3)    =  2                  YES
```

---

## QUESTION C2 — SOLVE BY MATRIX INVERSION METHOD

```
     x + y + z = 9 ,      2x + 5y + 7z = 52 ,      2x + y - z = 0
```

### FULL MODEL ANSWER

```
  STEP 1 — Write A, X, B

        +--------------+        +-----+        +------+
   A =  | 1   1    1   |   X =  |  x  |   B =  |   9  |
        | 2   5    7   |        |  y  |        |  52  |
        | 2   1   -1   |        |  z  |        |   0  |
        +--------------+        +-----+        +------+


  STEP 2 — Find det A

   det A = 1( 5(-1) - 7(1) )  -  1( 2(-1) - 7(2) )  +  1( 2(1) - 5(2) )
         = 1( -5 - 7 )  -  1( -2 - 14 )  +  1( 2 - 10 )
         = -12  +  16  -  8
         = -4                    (not zero, so A^-1 exists)


  STEP 3 — Find all 9 cofactors

   C(1,1) = + | 5   7 |  =  + ( -5 - 7 )    =  -12
              | 1  -1 |

   C(1,2) = - | 2   7 |  =  - ( -2 - 14 )   =   16
              | 2  -1 |

   C(1,3) = + | 2   5 |  =  + ( 2 - 10 )    =   -8
              | 2   1 |

   C(2,1) = - | 1   1 |  =  - ( -1 - 1 )    =    2
              | 1  -1 |

   C(2,2) = + | 1   1 |  =  + ( -1 - 2 )    =   -3
              | 2  -1 |

   C(2,3) = - | 1   1 |  =  - ( 1 - 2 )     =    1
              | 2   1 |

   C(3,1) = + | 1   1 |  =  + ( 7 - 5 )     =    2
              | 5   7 |

   C(3,2) = - | 1   1 |  =  - ( 7 - 2 )     =   -5
              | 2   7 |

   C(3,3) = + | 1   1 |  =  + ( 5 - 2 )     =    3
              | 2   5 |


  STEP 4 — Cofactor matrix, then TRANSPOSE it to get adj A

   cofactor matrix              adj A  (= its transpose)
   +-------------------+        +-------------------+
   | -12    16    -8   |        | -12     2     2   |
   |   2    -3     1   |  -->   |  16    -3    -5   |
   |   2    -5     3   |        |  -8     1     3   |
   +-------------------+        +-------------------+
                                ^^^ DO NOT FORGET THIS TRANSPOSE

   Quick safety check with row 1 of A = (1, 1, 1) :
      . column 1 of adj A (-12, 16, -8)  =  -12 + 16 - 8  =  -4  = det A   GOOD
      . column 2 of adj A (  2, -3,  1)  =    2 -  3 + 1  =   0            GOOD
      . column 3 of adj A (  2, -5,  3)  =    2 -  5 + 3  =   0            GOOD


  STEP 5 — Compute X = (1 / det A) x (adj A) x B

         1      +-------------------+     +------+
   X = ------ x | -12     2     2   |  x  |   9  |
        (-4)    |  16    -3    -5   |     |  52  |
                |  -8     1     3   |     |   0  |
                +-------------------+     +------+

   row 1 :  (-12)(9) +  (2)(52) +  (2)(0)  =  -108 + 104 + 0  =   -4
   row 2 :   (16)(9) + (-3)(52) + (-5)(0)  =   144 - 156 + 0  =  -12
   row 3 :   (-8)(9) +  (1)(52) +  (3)(0)  =   -72 +  52 + 0  =  -20

         1      +-------+          +-----+
   X = ------ x |   -4  |    =     |  1  |
        (-4)    |  -12  |          |  3  |
                |  -20  |          |  5  |
                +-------+          +-----+

   x = 1 ,  y = 3 ,  z = 5


  STEP 6 — CHECK in all three equations

     1 + 3 + 5            =  9      YES
     2(1) + 5(3) + 7(5)   =  2 + 15 + 35  =  52    YES
     2(1) + 3 - 5         =  2 +  3 -  5  =   0    YES
```

---

## QUESTION C3 — SOLVE BY CRAMER'S RULE

```
     2x - y + 3z = 9 ,      x + y + z = 6 ,      x - y + z = 2
```

### FULL MODEL ANSWER

```
        |  2  -1   3 |
   D =  |  1   1   1 |  = 2(1+1) +1(1-1) +3(-1-1) = 4 + 0 - 6 = -2
        |  1  -1   1 |


   D1 = D with COLUMN 1 replaced by (9, 6, 2):

        |  9  -1   3 |
        |  6   1   1 |  = 9(1+1) +1(6-2) +3(-6-2) = 18 + 4 - 24 = -2
        |  2  -1   1 |

                   -2
        ->   x = ------ = 1
                   -2


   D2 = D with COLUMN 2 replaced by (9, 6, 2):

        |  2   9   3 |
        |  1   6   1 |  = 2(6-2) -9(1-1) +3(2-6) = 8 - 0 - 12 = -4
        |  1   2   1 |

                   -4
        ->   y = ------ = 2
                   -2


   D3 = D with COLUMN 3 replaced by (9, 6, 2):

        |  2  -1   9 |
        |  1   1   6 |  = 2(2+6) +1(2-6) +9(-1-1) = 16 - 4 - 18 = -6
        |  1  -1   2 |

                   -6
        ->   z = ------ = 3
                   -2


   ANSWER:  x = 1 ,  y = 2 ,  z = 3

   CHECK :  2(1) - 2 + 3(3) = 2 - 2 + 9 = 9      YES
            1 + 2 + 3 = 6                        YES
            1 - 2 + 3 = 2                        YES
```

---

## QUESTION C4 — SOLVE BY CRAMER'S RULE

```
     3x + 4y + 5z = 18 ,     2x - y + 8z = 13 ,     5x - 2y + 7z = 20
```

### FULL MODEL ANSWER

```
  STEP 1 — the main determinant D

        | 3   4   5 |
   D =  | 2  -1   8 |  =  3( (-1)(7) - (8)(-2) )
        | 5  -2   7 |        - 4( (2)(7) - (8)(5) )
                             + 5( (2)(-2) - (-1)(5) )

                       =  3( -7 + 16 )  -  4( 14 - 40 )  +  5( -4 + 5 )
                       =  3(9)  -  4(-26)  +  5(1)
                       =  27 + 104 + 5
                       =  136              (not zero -> unique solution)


  STEP 2 — D1  (column 1 replaced by 18, 13, 20)

        | 18   4   5 |
   D1 = | 13  -1   8 |  =  18( -7 + 16 )  -  4( (13)(7) - (8)(20) )
        | 20  -2   7 |                      + 5( (13)(-2) - (-1)(20) )

                       =  18(9)  -  4( 91 - 160 )  +  5( -26 + 20 )
                       =  162  -  4(-69)  +  5(-6)
                       =  162 + 276 - 30
                       =  408
                                    408
                       ->  x  =   -------  =  3
                                    136


  STEP 3 — D2  (column 2 replaced by 18, 13, 20)

        | 3   18   5 |
   D2 = | 2   13   8 |  =  3( (13)(7) - (8)(20) )
        | 5   20   7 |        - 18( (2)(7) - (8)(5) )
                              + 5( (2)(20) - (13)(5) )

                       =  3( 91 - 160 )  -  18( 14 - 40 )  +  5( 40 - 65 )
                       =  3(-69)  -  18(-26)  +  5(-25)
                       =  -207 + 468 - 125
                       =  136
                                    136
                       ->  y  =   -------  =  1
                                    136


  STEP 4 — D3  (column 3 replaced by 18, 13, 20)

        | 3   4   18 |
   D3 = | 2  -1   13 |  =  3( (-1)(20) - (13)(-2) )
        | 5  -2   20 |        - 4( (2)(20) - (13)(5) )
                              + 18( (2)(-2) - (-1)(5) )

                       =  3( -20 + 26 )  -  4( 40 - 65 )  +  18( -4 + 5 )
                       =  3(6)  -  4(-25)  +  18(1)
                       =  18 + 100 + 18
                       =  136
                                    136
                       ->  z  =   -------  =  1
                                    136


  ANSWER:  x = 3 ,  y = 1 ,  z = 1

  CHECK :  3(3) + 4(1) + 5(1)  =   9 + 4 + 5  =  18     YES
           2(3) -  1   + 8(1)  =   6 - 1 + 8  =  13     YES
           5(3) - 2(1) + 7(1)  =  15 - 2 + 7  =  20     YES
```

---

## QUESTION C5 — SOLVE BY CRAMER'S RULE

```
     x + y + z = 1 ,      2x + 2y + 3z = 6 ,      x + 4y + 9z = 3
```

### FULL MODEL ANSWER

```
  STEP 1 — D

        | 1   1   1 |
   D =  | 2   2   3 |  =  1( (2)(9) - (3)(4) )  -  1( (2)(9) - (3)(1) )
        | 1   4   9 |                             + 1( (2)(4) - (2)(1) )

                       =  1( 18 - 12 )  -  1( 18 - 3 )  +  1( 8 - 2 )
                       =  6  -  15  +  6
                       =  -3


  STEP 2 — D1  (column 1 replaced by 1, 6, 3)

        | 1   1   1 |
   D1 = | 6   2   3 |  =  1( 18 - 12 )  -  1( (6)(9) - (3)(3) )
        | 3   4   9 |                     + 1( (6)(4) - (2)(3) )

                       =  6  -  ( 54 - 9 )  +  ( 24 - 6 )
                       =  6 - 45 + 18
                       =  -21
                                   -21
                       ->  x  =   ------  =  7
                                    -3


  STEP 3 — D2  (column 2 replaced by 1, 6, 3)

        | 1   1   1 |
   D2 = | 2   6   3 |  =  1( (6)(9) - (3)(3) )  -  1( (2)(9) - (3)(1) )
        | 1   3   9 |                             + 1( (2)(3) - (6)(1) )

                       =  ( 54 - 9 )  -  ( 18 - 3 )  +  ( 6 - 6 )
                       =  45 - 15 + 0
                       =  30
                                    30
                       ->  y  =   ------  =  -10
                                    -3


  STEP 4 — D3  (column 3 replaced by 1, 6, 3)

        | 1   1   1 |
   D3 = | 2   2   6 |  =  1( (2)(3) - (6)(4) )  -  1( (2)(3) - (6)(1) )
        | 1   4   3 |                             + 1( (2)(4) - (2)(1) )

                       =  ( 6 - 24 )  -  ( 6 - 6 )  +  ( 8 - 2 )
                       =  -18 - 0 + 6
                       =  -12
                                   -12
                       ->  z  =   ------  =  4
                                    -3


  ANSWER:  x = 7 ,  y = -10 ,  z = 4

  CHECK :  7 + (-10) + 4                =  1     YES
           2(7) + 2(-10) + 3(4)         =  14 - 20 + 12  =  6     YES
           7 + 4(-10) + 9(4)            =   7 - 40 + 36  =  3     YES
```

> **Notice that the answers are not small friendly numbers.** That is normal. Do
> NOT assume you have gone wrong just because y = -10. The substitution check is
> the only thing that tells you.

---

## QUESTION C6 — SOLVE BY GAUSS-JORDAN METHOD

```
     x + y + z = 9 ,      2x + 5y + 7z = 52 ,      2x + y - z = 0
```

### FULL MODEL ANSWER

```
  STEP 0 — Write the augmented matrix  [ A | B ]

     +----------------------+
     |  1    1    1   |   9 |     R1
     |  2    5    7   |  52 |     R2
     |  2    1   -1   |   0 |     R3
     +----------------------+


  STEP 1 — make column 1 read ( 1 , 0 , 0 )

     R2 -> R2 - 2 R1 :   ( 2-2 , 5-2 ,  7-2 | 52-18 )  =  ( 0 ,  3 ,  5 |  34 )
     R3 -> R3 - 2 R1 :   ( 2-2 , 1-2 , -1-2 |  0-18 )  =  ( 0 , -1 , -3 | -18 )

     +----------------------+
     |  1    1    1   |   9 |
     |  0    3    5   |  34 |
     |  0   -1   -3   | -18 |
     +----------------------+


  STEP 2 — get a 1 in the (2,2) position

     R2 <-> R3    (swap, so the -1 comes up where it is easy to fix)

     +----------------------+
     |  1    1    1   |   9 |
     |  0   -1   -3   | -18 |
     |  0    3    5   |  34 |
     +----------------------+

     R2 -> (-1) R2 :     ( 0 , 1 , 3 | 18 )

     +----------------------+
     |  1    1    1   |   9 |
     |  0    1    3   |  18 |
     |  0    3    5   |  34 |
     +----------------------+


  STEP 3 — clear the rest of column 2

     R1 -> R1 -   R2 :   ( 1 , 1-1 , 1-3 |  9-18 )  =  ( 1 , 0 , -2 |  -9 )
     R3 -> R3 - 3 R2 :   ( 0 , 3-3 , 5-9 | 34-54 )  =  ( 0 , 0 , -4 | -20 )

     +----------------------+
     |  1    0   -2   |  -9 |
     |  0    1    3   |  18 |
     |  0    0   -4   | -20 |
     +----------------------+


  STEP 4 — get a 1 in the (3,3) position

     R3 -> R3 / (-4) :   ( 0 , 0 , 1 | 5 )

     +----------------------+
     |  1    0   -2   |  -9 |
     |  0    1    3   |  18 |
     |  0    0    1   |   5 |
     +----------------------+


  STEP 5 — clear the rest of column 3

     R1 -> R1 + 2 R3 :   ( 1 , 0 , -2+2 |  -9 + 10 )  =  ( 1 , 0 , 0 |  1 )
     R2 -> R2 - 3 R3 :   ( 0 , 1 ,  3-3 |  18 - 15 )  =  ( 0 , 1 , 0 |  3 )

     +----------------------+
     |  1    0    0   |   1 |
     |  0    1    0   |   3 |
     |  0    0    1   |   5 |
     +----------------------+

     The left block is now I, so read the answer straight off the right block.


  ANSWER:  x = 1 ,  y = 3 ,  z = 5

  CHECK :   1 + 3 + 5           =  9      YES
            2 + 15 + 35         = 52      YES
            2 + 3 - 5           =  0      YES
```

> **TRAP:** in Gauss-Jordan you may use ROW operations only. Column operations
> are NOT allowed here — they scramble the unknowns.

> **TRAP:** whatever you do to the left of the bar you MUST do to the right of it.
> Forgetting to update the constant column is the commonest way to lose this
> question after doing all the hard work correctly.

---

## QUESTION C7 — SOLVE BY GAUSS-JORDAN METHOD

```
     x + y + z = 6 ,      x - y + z = 2 ,      2x - y + 3z = 9
```

### FULL MODEL ANSWER

```
  STEP 0 — augmented matrix

     +--------------------+
     | 1    1    1  |  6  |
     | 1   -1    1  |  2  |
     | 2   -1    3  |  9  |
     +--------------------+


  STEP 1 — clear column 1

     R2 -> R2 -   R1 :   ( 0 , -1-1 , 1-1 |  2 - 6 )  =  ( 0 , -2 , 0 | -4 )
     R3 -> R3 - 2 R1 :   ( 0 , -1-2 , 3-2 |  9 - 12 ) =  ( 0 , -3 , 1 | -3 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0   -2    0  | -4  |
     | 0   -3    1  | -3  |
     +--------------------+


  STEP 2 — make the (2,2) entry equal to 1

     R2 -> R2 / (-2) :   ( 0 , 1 , 0 | 2 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0    1    0  |  2  |
     | 0   -3    1  | -3  |
     +--------------------+


  STEP 3 — clear the rest of column 2

     R1 -> R1 -   R2 :   ( 1 , 1-1 , 1-0 |  6 - 2 )  =  ( 1 , 0 , 1 |  4 )
     R3 -> R3 + 3 R2 :   ( 0 , -3+3 , 1-0 | -3 + 6 ) =  ( 0 , 0 , 1 |  3 )

     +--------------------+
     | 1    0    1  |  4  |
     | 0    1    0  |  2  |
     | 0    0    1  |  3  |
     +--------------------+


  STEP 4 — clear the rest of column 3

     R1 -> R1 - R3 :     ( 1 , 0 , 1-1 |  4 - 3 )  =  ( 1 , 0 , 0 |  1 )

     +--------------------+
     | 1    0    0  |  1  |
     | 0    1    0  |  2  |
     | 0    0    1  |  3  |
     +--------------------+


  ANSWER:  x = 1 ,  y = 2 ,  z = 3

  CHECK :   1 + 2 + 3        =  6     YES
            1 - 2 + 3        =  2     YES
            2(1) - 2 + 3(3)  =  2 - 2 + 9  =  9     YES
```

---

## QUESTION C8 — EXAMINE THE CONSISTENCY OF A SYSTEM (three cases)

### FULL MODEL ANSWER

The method is always the same: row-reduce **[ A | B ]** once, then compare
rank(A) with rank([A|B]) and with n = 3.

```
  +-----------------------------------------+---------------------------+
  | rank(A) = rank([A|B]) = n               | UNIQUE solution           |
  | rank(A) = rank([A|B]) < n               | INFINITELY MANY solutions |
  | rank(A) is NOT equal to rank([A|B])     | NO solution (inconsistent)|
  +-----------------------------------------+---------------------------+
```

**CASE 1 — a consistent system with a unique solution**

```
     x + y + z = 6 ,     x - y + z = 2 ,     2x - y + 3z = 9

     +--------------------+
     | 1    1    1  |  6  |
     | 1   -1    1  |  2  |
     | 2   -1    3  |  9  |
     +--------------------+

  R2 -> R2 -   R1 :  ( 0 , -2 , 0 | -4 )
  R3 -> R3 - 2 R1 :  ( 0 , -3 , 1 | -3 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0   -2    0  | -4  |
     | 0   -3    1  | -3  |
     +--------------------+

  R2 -> R2 / (-2) :  ( 0 , 1 , 0 | 2 )
  R3 -> R3 + 3 R2 :  ( 0 , 0 , 1 | -3 + 6 ) = ( 0 , 0 , 1 | 3 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0    1    0  |  2  |
     | 0    0    1  |  3  |
     +--------------------+

  Non-zero rows in the LEFT block  = 3   ->  rank(A) = 3
  Non-zero rows in the WHOLE matrix= 3   ->  rank([A|B]) = 3
  n = 3

     3 = 3 = 3    ->    CONSISTENT with a UNIQUE solution.

  Back-substitute:   z = 3 ,  y = 2 ,  x + 2 + 3 = 6  ->  x = 1

  ANSWER:  x = 1 , y = 2 , z = 3
```

**CASE 2 — a consistent system with INFINITELY MANY solutions**

```
     x + y + z = 3 ,     2x + 2y - z = 3 ,     x + y - z = 1

     +--------------------+
     | 1    1    1  |  3  |
     | 2    2   -1  |  3  |
     | 1    1   -1  |  1  |
     +--------------------+

  R2 -> R2 - 2 R1 :  ( 0 , 0 , -3 |  3 - 6 )  =  ( 0 , 0 , -3 | -3 )
  R3 -> R3 -   R1 :  ( 0 , 0 , -2 |  1 - 3 )  =  ( 0 , 0 , -2 | -2 )

     +--------------------+
     | 1    1    1  |  3  |
     | 0    0   -3  | -3  |
     | 0    0   -2  | -2  |
     +--------------------+

  R2 -> R2 / (-3) :  ( 0 , 0 , 1 | 1 )
  R3 -> R3 + 2 R2 :  ( 0 , 0 , 0 | 0 )

     +--------------------+
     | 1    1    1  |  3  |
     | 0    0    1  |  1  |
     | 0    0    0  |  0  |
     +--------------------+

  rank(A) = 2  ,  rank([A|B]) = 2  ,  n = 3

     2 = 2  but  2 < 3   ->   INFINITELY MANY solutions.

  Number of free parameters = n - rank = 3 - 2 = 1.

  From row 2 :   z = 1
  From row 1 :   x + y + 1 = 3    ->    x + y = 2

  Put x = t (any real number).  Then y = 2 - t.

  SOLUTION SET :   ( x , y , z )  =  ( t , 2 - t , 1 )   for every real t.

  CHECK with t = 5 :   ( 5 , -3 , 1 )
        5 - 3 + 1 = 3                         YES
        2(5) + 2(-3) - 1 = 10 - 6 - 1 = 3     YES
        5 - 3 - 1 = 1                         YES
```

**CASE 3 — an INCONSISTENT system**

```
     x + y + z = 6 ,     2x + 3y + 4z = 20 ,     x + 2y + 3z = 13

     +--------------------+
     | 1    1    1  |   6 |
     | 2    3    4  |  20 |
     | 1    2    3  |  13 |
     +--------------------+

  R2 -> R2 - 2 R1 :  ( 0 , 1 , 2 |  20 - 12 )  =  ( 0 , 1 , 2 |  8 )
  R3 -> R3 -   R1 :  ( 0 , 1 , 2 |  13 -  6 )  =  ( 0 , 1 , 2 |  7 )

     +--------------------+
     | 1    1    1  |   6 |
     | 0    1    2  |   8 |
     | 0    1    2  |   7 |
     +--------------------+

  R3 -> R3 - R2 :    ( 0 , 0 , 0 |  7 - 8 )  =  ( 0 , 0 , 0 | -1 )

     +--------------------+
     | 1    1    1  |   6 |
     | 0    1    2  |   8 |
     | 0    0    0  |  -1 |     <-- this row says   0 = -1
     +--------------------+

  rank(A) = 2   but   rank([A|B]) = 3.    They are NOT equal.

  ->  THE SYSTEM IS INCONSISTENT.  It has NO solution.
```

---

## QUESTION C9 — FIND THE PARAMETER (unique / non-trivial)

### PART (a)
Find k so that the system below has a **unique** solution.
```
     x + y + z = 2 ,     2x + y - z = 3 ,     3x + 2y + kz = 4
```
**FULL MODEL ANSWER**
```
  A unique solution exists  <->  det A is NOT zero.

        | 1   1    1 |
  det A=| 2   1   -1 |
        | 3   2    k |

      = 1( (1)(k) - (-1)(2) )  -  1( (2)(k) - (-1)(3) )  +  1( (2)(2) - (1)(3) )
      = 1( k + 2 )  -  1( 2k + 3 )  +  1( 4 - 3 )
      = k + 2 - 2k - 3 + 1
      = -k

  det A not 0    ->    -k not 0    ->    k is not 0.

  ANSWER: the system has a unique solution for every value of k except k = 0.

  (When k = 0 the determinant vanishes, so you would then have to compare
   ranks to decide between "infinitely many" and "no solution".)
```

### PART (b)
Find k so that the homogeneous system below has a **non-trivial** solution.
```
     x + ky + 3z = 0 ,     3x + ky - 2z = 0 ,     2x + 3y - 4z = 0
```
**FULL MODEL ANSWER**
```
  A homogeneous system always has the trivial solution x = y = z = 0.
  It has EXTRA (non-trivial) solutions exactly when  det A = 0.

        | 1   k    3 |
  det A=| 3   k   -2 |
        | 2   3   -4 |

      = 1( k(-4) - (-2)(3) )  -  k( 3(-4) - (-2)(2) )  +  3( 3(3) - k(2) )
      = 1( -4k + 6 )  -  k( -12 + 4 )  +  3( 9 - 2k )
      = -4k + 6  +  8k  +  27 - 6k
      = -2k + 33

  Set  -2k + 33 = 0     ->     k  =  33 / 2

  ANSWER:  k = 33/2
```

---

## QUESTION C10 — DETERMINANT IDENTITY PROOF

```
  |  a    a^2    1 + a^3  |
  |  b    b^2    1 + b^3  |   =   (a - b)(b - c)(c - a)(1 + abc)
  |  c    c^2    1 + c^3  |
```

### FULL MODEL ANSWER

```
  STEP 1 — split the last column into two determinants.
           (A determinant is additive in ONE column at a time.)

       | a  a^2   1 |        | a  a^2  a^3 |
   D = | b  b^2   1 |   +    | b  b^2  b^3 |
       | c  c^2   1 |        | c  c^2  c^3 |

       \___ call this D_p ___/  \___ call this D_q ___/


  STEP 2 — deal with D_q.  Take a, b, c out of rows 1, 2, 3:

       | a  a^2  a^3 |              | 1   a   a^2 |
       | b  b^2  b^3 |  =   abc  x  | 1   b   b^2 |
       | c  c^2  c^3 |              | 1   c   c^2 |


  STEP 3 — deal with D_p.  Move the last column to the front.

       C1 <-> C3   (one swap, sign changes)  gives  | 1  a^2   a |
                                                    | 1  b^2   b |
                                                    | 1  c^2   c |
                                                    with a factor (-1)

       C2 <-> C3   (a second swap, sign changes again) gives

                                                    | 1   a   a^2 |
                                                    | 1   b   b^2 |
                                                    | 1   c   c^2 |
                                                    with factor (-1)(-1) = +1

       So    D_p  =  | 1   a   a^2 |
                     | 1   b   b^2 |
                     | 1   c   c^2 |


  STEP 4 — add them back together:

       D  =  ( 1 + abc )  x  | 1   a   a^2 |
                             | 1   b   b^2 |
                             | 1   c   c^2 |


  STEP 5 — evaluate the Vandermonde determinant.

       R1 -> R1 - R2   and   R2 -> R2 - R3 :

            | 0    a-b     a^2 - b^2 |
            | 0    b-c     b^2 - c^2 |
            | 1     c         c^2    |

       Take (a - b) out of row 1 and (b - c) out of row 2,
       using  a^2 - b^2 = (a-b)(a+b)  and  b^2 - c^2 = (b-c)(b+c) :

                                | 0   1   a+b |
            = (a - b)(b - c) x  | 0   1   b+c |
                                | 1   c   c^2 |

       Expand along column 1. Only the 1 at (3,1) survives; its sign is +.

            = (a - b)(b - c) x  | 1   a+b |
                                | 1   b+c |

            = (a - b)(b - c) [ (b + c) - (a + b) ]

            = (a - b)(b - c)(c - a)


  STEP 6 — put it together:

       D  =  (a - b)(b - c)(c - a)(1 + abc)          PROVED


  NUMERIC CHECK with a = 1 , b = 2 , c = 3 :

       | 1   1    2 |
       | 2   4    9 |  = 1(4x28 - 9x9) - 1(2x28 - 9x3) + 2(2x9 - 4x3)
       | 3   9   28 |  = 1(112 - 81) - 1(56 - 27) + 2(18 - 12)
                       = 31 - 29 + 12  =  14

       (a-b)(b-c)(c-a)(1 + abc) = (-1)(-1)(2)(1 + 6) = 2 x 7 = 14    MATCHES
```

---

## QUESTION C11 — DETERMINANT IDENTITY PROOF

```
  | a - b - c      2a           2a      |
  |    2b       b - c - a       2b      |   =   (a + b + c)^3
  |    2c          2c        c - a - b  |
```

### FULL MODEL ANSWER

```
  STEP 1 — R1 -> R1 + R2 + R3.   Add the three rows column by column.

     column 1 :  (a - b - c) + 2b + 2c  =  a + b + c
     column 2 :  2a + (b - c - a) + 2c  =  a + b + c
     column 3 :  2a + 2b + (c - a - b)  =  a + b + c

     | a+b+c    a+b+c      a+b+c   |
     |   2b    b - c - a     2b    |
     |   2c        2c     c - a - b|


  STEP 2 — take the common factor (a + b + c) out of row 1:

                             |  1        1         1     |
     D  =  (a + b + c)   x   | 2b    b - c - a    2b     |
                             | 2c       2c     c - a - b |


  STEP 3 — create zeros:   C2 -> C2 - C1   and   C3 -> C3 - C1

     row 1 :  1 ,  1 - 1 = 0 ,  1 - 1 = 0

     row 2 :  2b ,  (b - c - a) - 2b = -a - b - c = -(a + b + c) ,
                    2b - 2b = 0

     row 3 :  2c ,  2c - 2c = 0 ,
                    (c - a - b) - 2c = -a - b - c = -(a + b + c)

                             |  1        0             0        |
     D  =  (a + b + c)   x   | 2b   -(a+b+c)           0        |
                             | 2c       0         -(a+b+c)      |


  STEP 4 — expand along row 1. Only the leading 1 survives.

     D  =  (a + b + c)  x  1  x  | -(a+b+c)      0      |
                                 |     0     -(a+b+c)   |

        =  (a + b + c)  x  [ (a+b+c)^2 - 0 ]

        =  (a + b + c)^3                          PROVED


  NUMERIC CHECK with a = b = c = 1 :

     | -1    2    2 |
     |  2   -1    2 |  =  -1(1 - 4) - 2(-2 - 4) + 2(4 + 2)
     |  2    2   -1 |  =  3 + 12 + 12  =  27

     (1 + 1 + 1)^3 = 27                            MATCHES
```

---

## QUESTION C12 — DETERMINANT IDENTITY PROOF

```
  | b + c     a        a    |
  |   b     c + a      b    |   =   4abc
  |   c       c      a + b  |
```

### FULL MODEL ANSWER

```
  STEP 1 — R1 -> R1 - R2 - R3.   Subtract rows 2 and 3 from row 1.

     column 1 :  (b + c) - b - c            =  0
     column 2 :  a - (c + a) - c            =  a - c - a - c  =  -2c
     column 3 :  a - b - (a + b)            =  a - b - a - b  =  -2b

     |  0    -2c    -2b  |
     |  b    c+a     b   |
     |  c     c     a+b  |


  STEP 2 — expand along row 1 (its first entry is 0, so only two terms survive).

     D  =  0  -  (-2c) x  | b     b   |   +  (-2b) x  | b    c+a |
                          | c    a+b  |                | c     c  |

        =  2c [ b(a + b) - bc ]   -   2b [ bc - c(c + a) ]

        =  2c . b (a + b - c)     -   2b . c (b - c - a)

        =  2bc [ (a + b - c)  -  (b - c - a) ]

        =  2bc [ a + b - c - b + c + a ]

        =  2bc ( 2a )

        =  4abc                                   PROVED


  NUMERIC CHECK with a = 1 , b = 2 , c = 3 :

     | 5   1   1 |
     | 2   4   2 |  =  5(12 - 6) - 1(6 - 6) + 1(6 - 12)  =  30 - 0 - 6  =  24
     | 3   3   3 |

     4abc = 4(1)(2)(3) = 24                        MATCHES
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

```
  RANK  QUESTION TYPE                                SECTION   CHANCE
  ----  -------------------------------------------  -------   -----------
   1    Solve 3 equations (named method)                C       almost every year
   2    Determinant identity proof                      C       almost every year
   3    Rank of a 3x3 matrix                            B       very high
   4    Symmetric / skew-symmetric proof                A / B   very high
   5    Trace, or find x from equality                  A       very high
   6    Adjoint and inverse of a 2x2                    A       high
   7    Determinant of a given 3x3                      A       high
   8    Express A as symmetric + skew-symmetric         B       high
   9    Consistency / infinitely many solutions         C       high
  10    Inverse of a 3x3 by adjoint                     B       high
  11    A^2 - 4A - 5I = O verification, hence A^-1      B       moderate
  12    Product of the cos^2 matrices is null           B       moderate
  13    Find A^n by induction                           B       moderate
  14    Minor / cofactor of one element                 A       moderate
  15    Find k for a non-trivial solution               C       moderate
```

---

# ===============================================================
# HOW TO SPEND THE MARKS — a realistic plan for this chapter
# ===============================================================

```
  +------------------------------------------------------------------+
  |  From Maths IA you will normally see:                            |
  |                                                                  |
  |     1 x Section C question   (7 marks)                           |
  |     1 x Section B question   (4 marks)                           |
  |     1 to 2 Section A questions (2 marks each)                    |
  |                                                                  |
  |     -> about 13 to 15 marks out of 75, from ONE chapter.         |
  +------------------------------------------------------------------+


  IF YOU LEARN ONLY THREE THINGS FROM THIS FILE:

    1.  Cramer's rule.        Four determinants. No transposes. 7 marks.
    2.  The symmetric + skew decomposition, WITH the 1/2.   4 marks.
    3.  Trace, order, equality, and det of a 2x2.           2 marks each.

  That is already 13 marks, and none of it needs cleverness -
  only careful arithmetic.
```

---

# ===============================================================
# THE 60-SECOND SELF-CHECK AFTER EVERY SECTION C ANSWER
# ===============================================================

```
  [ ]  Did I use the method the question NAMED ?
  [ ]  Did I write det A before doing anything else ?
  [ ]  If I used cofactors, did I TRANSPOSE before calling it adj A ?
  [ ]  Did I check  A (adj A) = (det A) I  on at least one row ?
  [ ]  Did I substitute x, y, z back into ALL THREE equations ?
  [ ]  Did I label my steps STEP 1, STEP 2, ... so the examiner can
       award method marks even if a number is wrong ?
```
