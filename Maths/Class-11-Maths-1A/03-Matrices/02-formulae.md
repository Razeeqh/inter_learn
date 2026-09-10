# Matrices — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. BASICS

```
  Order of a matrix          =  m x n     (rows x columns)
  Number of elements         =  m x n
  Trace  Tr(A)               =  a(1,1) + a(2,2) + ... + a(n,n)      [square only]
```

| Formula | When to use |
|---------|-------------|
| Order = rows x columns | any "find the order" question |
| Elements = m x n | "how many elements in a 3x4 matrix?" |
| Number of possible orders with N elements = number of divisors of N | objective / EAPCET |
| Tr(A ± B) = Tr(A) ± Tr(B) | trace identities |
| Tr(kA) = k Tr(A) | trace identities |
| Tr(AB) = Tr(BA) | trace identities |
| Tr(A') = Tr(A) | trace identities |
| Tr(I n) = n | objective |

**MICRO-EXAMPLE — Tr(AB) = Tr(BA), even though AB is not BA**

```
  A = | 1  2 |     B = | 5  6 |
      | 3  4 |         | 7  8 |

  AB = | 19  22 |      Tr(AB) = 19 + 50 = 69
       | 43  50 |

  BA = | 23  34 |      Tr(BA) = 23 + 46 = 69          SAME
       | 31  46 |
```

**MICRO-EXAMPLE — counting orders**

```
  N = 24  ->  divisors 1,2,3,4,6,8,12,24  ->  8 possible orders
  N = 13  ->  divisors 1,13              ->  2 possible orders
  N = 36 , and it must be SQUARE  ->  only 6 x 6  ->  1 order
```

---

# 2. ALGEBRA OF MATRICES

```
  A = B                 only if same order AND every a(i,j) = b(i,j)

  (A + B)(i,j)          =  a(i,j) + b(i,j)          [same order needed]

  (kA)(i,j)             =  k x a(i,j)

  A(m x n) x B(n x p)   =  AB(m x p)                [inner numbers must match]

  (AB)(i,j)             =  sum of  a(i,k) x b(k,j)  over k = 1 to n
                           i.e. ROW i of A times COLUMN j of B

  A(BC) = (AB)C
  A(B + C) = AB + AC
  A I = I A = A
  A^m x A^n = A^(m+n)
  (A^m)^n = A^(mn)
```

## NOT TRUE — the four traps

```
  AB = BA                          <-- FALSE in general
  AB = O  =>  A = O or B = O       <-- FALSE
  AB = AC =>  B = C                <-- FALSE
  (A + B)^2 = A^2 + 2AB + B^2      <-- FALSE

  CORRECT:  (A + B)^2 = A^2 + AB + BA + B^2
            (A - B)^2 = A^2 - AB - BA + B^2
            (A+B)(A-B) = A^2 - AB + BA - B^2
```

**MICRO-EXAMPLE — one counter-example for each trap (memorise these four)**

```
  AB not BA      A = | 1  2 |  B = | 5  6 |   AB = | 19 22 |  BA = | 23 34 |
                     | 3  4 |      | 7  8 |        | 43 50 |       | 31 46 |

  AB = O         A = |  1 -1 |  B = | 1  1 |   AB = | 0  0 |   neither is O
                     | -1  1 |      | 1  1 |        | 0  0 |

  no cancelling  A = | 0  1 |  B = | 1  2 |  C = | 5  6 |
                     | 0  0 |      | 3  4 |      | 3  4 |
                 AB = AC = | 3  4 |   but  B is not C
                           | 0  0 |

  square trap    with the A, B of the first line:
                 (A+B)^2      = | 116  144 |
                                | 180  224 |
                 A^2+2AB+B^2  = | 112  132 |     <-- WRONG, they differ
                                | 192  228 |
```

**MICRO-EXAMPLE — is the product even defined?**

```
  A(2 x 3) x B(3 x 4)   ->  inner 3 = 3   OK   ->  AB is 2 x 4
  B(3 x 4) x A(2 x 3)   ->  inner 4 =/= 2      ->  BA is NOT DEFINED
```

---

# 3. TRANSPOSE

```
  (A')'      =  A
  (A + B)'   =  A' + B'
  (kA)'      =  k A'
  (AB)'      =  B' A'        <--  ORDER REVERSES.  Most tested property.
  (A^n)'     =  (A')^n
  (ABC)'     =  C' B' A'
  A A'  and  A' A  are ALWAYS symmetric
```

**MICRO-EXAMPLE — the order really does reverse**

```
  A = | 1  2 |    B = | 5  6 |      AB = | 19  22 |    (AB)' = | 19  43 |
      | 3  4 |        | 7  8 |           | 43  50 |            | 22  50 |

  B'A' = | 5  7 | x | 1  3 |  =  | 19  43 |      MATCHES (AB)'
         | 6  8 |   | 2  4 |     | 22  50 |

  A'B' = | 1  3 | x | 5  7 |  =  | 23  31 |      DOES NOT MATCH
         | 2  4 |   | 6  8 |     | 34  46 |
```

---

# 4. SPECIAL SQUARE MATRICES

| Type | Defining condition | Extra facts |
|------|--------------------|-------------|
| Symmetric | A' = A , i.e. a(i,j) = a(j,i) | A + A' is always symmetric |
| Skew-symmetric | A' = -A , i.e. a(i,j) = -a(j,i) | all diagonal entries = 0 |
| Orthogonal | A A' = A' A = I | so A^-1 = A' , and det A = +1 or -1 |
| Idempotent | A^2 = A | then A^n = A for all n |
| Involutory | A^2 = I | so A^-1 = A |
| Nilpotent | A^k = O for some k | det A = 0 |
| Periodic | A^(k+1) = A | idempotent is the case k = 1 |
| Singular | det A = 0 | no inverse |
| Non-singular | det A not 0 | inverse exists |

```
  DECOMPOSITION (guaranteed 4-mark question):

        A  =  (1/2)(A + A')  +  (1/2)(A - A')
              \____________/    \____________/
                symmetric          skew-symmetric

  SKEW-SYMMETRIC of ODD order  ->  det A = 0        (instant 2-mark answer)

  Independent entries:   symmetric  n x n  ->  n(n+1)/2
                         skew-sym.  n x n  ->  n(n-1)/2
```

---

## 4A. ONE NUMERIC EXAMPLE OF EVERY SPECIAL MATRIX

Learn these nine little matrices by heart. Any objective question of the form
*"give an example of ..."* or *"which of the following is ..."* is then instant.

### SYMMETRIC   ( A' = A )

```
       +-------------+
  A =  |  1   7   3  |      Mirror across the diagonal:
       |  7   4   5  |         a(1,2) = a(2,1) = 7
       |  3   5   9  |         a(1,3) = a(3,1) = 3
       +-------------+         a(2,3) = a(3,2) = 5
```

### SKEW-SYMMETRIC   ( A' = -A )

```
       +---------------+     Diagonal MUST be all zeros.
  A =  |  0    2   -3  |     Mirror entries carry opposite signs.
       | -2    0    5  |
       |  3   -5    0  |     det A = 0(0+25) - 2(0-15) + (-3)(10-0)
       +---------------+           = 0 + 30 - 30  =  0     (odd order)
```

### ORTHOGONAL   ( A A' = I )

```
             1    +-----------------+
       A =  ---  |  1    2     2    |
              3  |  2    1    -2    |
                 | -2    2    -1    |
                 +-----------------+

  Every row dotted with itself gives 9 (then /9 = 1):
        1 + 4 + 4 = 9  ,  4 + 1 + 4 = 9  ,  4 + 4 + 1 = 9

  Every row dotted with a different row gives 0:
        row1 . row2 =  2 + 2 - 4  =  0
        row1 . row3 = -2 + 4 - 2  =  0
        row2 . row3 = -4 + 2 + 2  =  0

  So A A' = I ,  A^-1 = A' ,  and det A = +1.
```

A tiny one you can write in three seconds:

```
       +---------+                  +---------+
  A =  | 0    1  |      A A'  =     | 1    0  |  =  I
       | 1    0  |                  | 0    1  |
       +---------+                  +---------+
```

### IDEMPOTENT   ( A^2 = A )

```
       +---------+                   +-----------------------+
  A =  |  2  -2  |     A^2  =        | 4-2      -4+2         |
       |  1  -1  |                   | 2-1      -2+1         |
       +---------+                   +-----------------------+

                                   = |  2   -2  |  =  A          YES
                                     |  1   -1  |
```

A 3x3 one that BIEAP likes:

```
       +-----------------+
  A =  |  2   -2   -4    |      A^2 = A  (check any entry, e.g.
       | -1    3    4    |       (1,1) = 2(2) + (-2)(-1) + (-4)(1)
       |  1   -2   -3    |             = 4 + 2 - 4 = 2 = a(1,1) )
       +-----------------+

  Consequence:  A^2 = A  ->  A^3 = A  ->  A^n = A  for every n >= 1
                and det A is 0 or 1
```

### INVOLUTORY   ( A^2 = I )

```
       +-----------+                 +-------------------------+
  A =  |  4    3   |     A^2  =      | 16-15      12-12        |
       | -5   -4   |                 | -20+20    -15+16        |
       +-----------+                 +-------------------------+

                                   = | 1   0 |  =  I           YES
                                     | 0   1 |

  So  A^-1 = A .   Also det A = -16 + 15 = -1 , and (det A)^2 = 1 as required.
```

The two-second version:

```
       +----------+
  A =  | 1    0   |      A^2 = I , but A is neither I nor -I.
       | 0   -1   |
       +----------+
```

### NILPOTENT   ( A^k = O )

```
  Index 2 :        +----------+                  +---------+
              A =  |  2   -4  |       A^2  =     | 0    0  |  = O
                   |  1   -2  |                  | 0    0  |
                   +----------+                  +---------+

  Index 3 :        +-----------------+
              A =  |  1    1     3   |       A^2 is not O , but A^3 = O
                   |  5    2     6   |
                   | -2   -1    -3   |
                   +-----------------+

  For ANY nilpotent matrix:  det A = 0 , and A can never be invertible.
```

### DIAGONAL / SCALAR / IDENTITY

```
  DIAGONAL            SCALAR              IDENTITY
  +-------------+     +-------------+     +-------------+
  | 3   0   0   |     | 5   0   0   |     | 1   0   0   |
  | 0   0   0   |     | 0   5   0   |     | 0   1   0   |
  | 0   0  -2   |     | 0   0   5   |     | 0   0   1   |
  +-------------+     +-------------+     +-------------+
   det = 0             det = 125           det = 1
   (a zero on the      = 5^3               scalar with k = 1
    diagonal)          scalar = k I
```

### TRIANGULAR

```
  UPPER                LOWER
  +-------------+      +-------------+
  | 2   5  -3   |      | 2   0   0   |      det = product of the diagonal
  | 0   4   7   |      | 5   4   0   |      = 2 x 4 x 6 = 48  in both cases
  | 0   0   6   |      | 9   7   6   |
  +-------------+      +-------------+
```

### SINGULAR vs NON-SINGULAR

```
  SINGULAR                          NON-SINGULAR
  +-------------+                   +-------------+
  | 1   2   3   |  R2 = 2 R1        | 1   4  -1   |   det = -12
  | 2   4   6   |  det = 0          | 2   3   0   |   inverse exists
  | 1   1   1   |  NO inverse       | 0   1   2   |
  +-------------+                   +-------------+
```

---

# 5. DETERMINANTS

## The two expansion rules

```
  2 x 2:      | a   b |
              |       |  =  ad - bc
              | c   d |


  3 x 3:      | a1  b1  c1 |
              | a2  b2  c2 |
              | a3  b3  c3 |

      =  a1 (b2 c3 - b3 c2)  -  b1 (a2 c3 - a3 c2)  +  c1 (a2 b3 - a3 b2)


  SIGN BOARD:      +   -   +
                   -   +   -
                   +   -   +
```

## Properties

| Property | Result |
|----------|--------|
| det(A') | = det(A) |
| det(AB) | = det(A) x det(B) , so det(A^n) = [det A]^n |
| det(kA) for order n | = k^n x det(A) |
| Two rows/columns identical or proportional | det = 0 |
| Any row/column all zeros | det = 0 |
| Swap two rows/columns | sign changes |
| Add a multiple of one row to another | det unchanged |
| det(I) | = 1 |
| det of a triangular / diagonal matrix | = product of the diagonal entries |
| det(A^-1) | = 1 / det(A) |
| Skew-symmetric of odd order | det = 0 |
| det(A + B) | NO formula. It is NOT det A + det B |
| det A = 0 | SINGULAR (no inverse) |
| det A not 0 | NON-SINGULAR (inverse exists) |

**MICRO-EXAMPLE — every property on one matrix**

Take A with det A = -3:

```
       +--------------+
  A =  | 1   2    3   |     det A = 1(50-48) - 2(40-42) + 3(32-35)
       | 4   5    6   |           = 2 + 4 - 9  =  -3
       | 7   8   10   |
       +--------------+
```

| Do this to A | New determinant | Rule used |
|---|---|---|
| swap R1 and R2 | +3 | sign changes |
| copy R1 into R2 | 0 | identical rows |
| multiply R1 by 5 | -15 | one row scaled by k |
| form 3A (all rows scaled) | 27 x (-3) = -81 | det(kA) = k^n det A |
| transpose it | -3 | det(A') = det(A) |
| R2 -> R2 - 4R1 | -3 | adding a multiple changes nothing |

```
  det(AB) micro-check with 2x2 :

     A = | 1  2 |  det = -2       B = | 5  6 |  det = -2
         | 3  4 |                     | 7  8 |

     AB = | 19  22 |    det(AB) = 950 - 946 = 4  =  (-2)(-2)     CORRECT
          | 43  50 |
```

```
  det(A + B) trap :

     A = I ,  B = I  (order 2).    det A = 1 , det B = 1
     A + B = 2I ,  det(A + B) = 4       but   det A + det B = 2

     THERE IS NO ADDITION FORMULA.
```

---

## Standard determinants worth memorising

Every one of these has been a Section B or Section C question. Each is followed by a
**numeric check with a = 1, b = 2, c = 3** so you can trust the formula and also
recover it in the exam if you blank out.

### 1. Vandermonde (row form)

```
  | 1    1    1  |
  | a    b    c  |   =  (a - b)(b - c)(c - a)
  | a^2  b^2  c^2|

  CHECK  a=1, b=2, c=3 :
     | 1  1  1 |
     | 1  2  3 |  = 1(18 - 12) - 1(9 - 3) + 1(4 - 2) = 6 - 6 + 2 = 2
     | 1  4  9 |
     (a-b)(b-c)(c-a) = (-1)(-1)(2) = 2          MATCHES
```

### 2. Vandermonde (column form) — the same value

```
  | 1   a   a^2 |
  | 1   b   b^2 |   =  (a - b)(b - c)(c - a)
  | 1   c   c^2 |

  CHECK  a=1, b=2, c=3 :
     | 1  1  1 |
     | 1  2  4 |  = 1(18 - 12) - 1(9 - 4) + 1(3 - 2) = 6 - 5 + 1 = 2    MATCHES
     | 1  3  9 |
```

### 3. The cube-sum determinant

```
  | a   b   c |
  | b   c   a |   =  -(a^3 + b^3 + c^3 - 3abc)
  | c   a   b |

                  =  -(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)

  CHECK  a=1, b=2, c=3 :
     | 1  2  3 |
     | 2  3  1 |  = 1(6 - 1) - 2(4 - 3) + 3(2 - 9) = 5 - 2 - 21 = -18
     | 3  1  2 |
     -(1 + 8 + 27 - 3x6) = -(36 - 18) = -18       MATCHES
```

### 4. The "1 + a^3" determinant  (a classic 7-mark proof)

```
  | a   a^2   1 + a^3 |
  | b   b^2   1 + b^3 |   =  (a - b)(b - c)(c - a)(1 + abc)
  | c   c^2   1 + c^3 |

  CHECK  a=1, b=2, c=3 :
     | 1  1   2 |
     | 2  4   9 |  = 1(112 - 81) - 1(56 - 27) + 2(18 - 12)
     | 3  9  28 |  = 31 - 29 + 12 = 14
     (a-b)(b-c)(c-a)(1 + abc) = (-1)(-1)(2)(1 + 6) = 2 x 7 = 14    MATCHES
```

### 5. The (a + b + c)^3 determinant

```
  | a-b-c    2a       2a    |
  |   2b   b-c-a      2b    |   =  (a + b + c)^3
  |   2c     2c     c-a-b   |

  CHECK  a = b = c = 1 :
     | -1   2   2 |
     |  2  -1   2 |  = -1(1 - 4) - 2(-2 - 4) + 2(4 + 2) = 3 + 12 + 12 = 27
     |  2   2  -1 |
     (1 + 1 + 1)^3 = 27                          MATCHES
```

### 6. The 4abc determinant

```
  | b+c    a      a  |
  |  b    c+a     b  |   =  4abc
  |  c     c     a+b |

  CHECK  a=1, b=2, c=3 :
     | 5  1  1 |
     | 2  4  2 |  = 5(12 - 6) - 1(6 - 6) + 1(6 - 12) = 30 - 0 - 6 = 24
     | 3  3  3 |
     4abc = 4(1)(2)(3) = 24                      MATCHES
```

### 7. The cubed-row Vandermonde

```
  | 1     1     1   |
  | a     b     c   |   =  (a - b)(b - c)(c - a)(a + b + c)
  | a^3   b^3   c^3 |

  CHECK  a=1, b=2, c=3 :
     | 1  1   1 |
     | 1  2   3 |  = 1(54 - 24) - 1(27 - 3) + 1(8 - 2) = 30 - 24 + 6 = 12
     | 1  8  27 |
     (-1)(-1)(2)(6) = 12                         MATCHES
```

### 8. The bc, ca, ab determinant

```
  | 1    1    1  |
  | a    b    c  |   =  (a - b)(b - c)(c - a)
  | bc   ca   ab |

  CHECK  a=1, b=2, c=3  (so bc=6, ca=3, ab=2) :
     | 1  1  1 |
     | 1  2  3 |  = 1(4 - 9) - 1(2 - 18) + 1(3 - 12) = -5 + 16 - 9 = 2
     | 6  3  2 |
     (a-b)(b-c)(c-a) = 2                         MATCHES
```

### 9. The x-and-a determinant

```
  | x   a   a |
  | a   x   a |   =  (x + 2a)(x - a)^2
  | a   a   x |

  CHECK  x = 3 , a = 1 :
     | 3  1  1 |
     | 1  3  1 |  = 3(9 - 1) - 1(3 - 1) + 1(1 - 3) = 24 - 2 - 2 = 20
     | 1  1  3 |
     (3 + 2)(3 - 1)^2 = 5 x 4 = 20               MATCHES
```

### 10. The x^2 determinant

```
  | a+x    b      c   |
  |  a    b+x     c   |   =  x^2 (x + a + b + c)
  |  a     b     c+x  |

  CHECK  x = a = b = c = 1 :
     | 2  1  1 |
     | 1  2  1 |  = 2(4 - 1) - 1(2 - 1) + 1(1 - 2) = 6 - 1 - 1 = 4
     | 1  1  2 |
     1^2 (1 + 1 + 1 + 1) = 4                     MATCHES
```

### 11. The general skew-symmetric 3x3

```
  |  0    b   -c |
  | -b    0    a |   =  0        (odd-order skew-symmetric)
  |  c   -a    0 |

  CHECK by expansion :  0(0 + a^2) - b(0 - ac) + (-c)(ab - 0) = abc - abc = 0
```

### 12. Cube roots of unity

```
  |  1     w    w^2 |
  |  w    w^2    1  |   =  0       because 1 + w + w^2 = 0 , so
  | w^2    1     w  |              R1 + R2 + R3 gives a row of zeros
```

> **THE FASTEST WAY TO PROVE ANY OF THESE IN THE EXAM:**
> `R1 -> R1 + R2 + R3` if the columns sum to something tidy, take out the common
> factor, then `C2 -> C2 - C1` and `C3 -> C3 - C1` to make zeros, then expand.
> That single recipe cracks numbers 3, 5, 6 and 9 above.

---

# 6. MINORS, COFACTORS, ADJOINT

```
  M(i,j)    =  determinant after DELETING row i and column j

  C(i,j)    =  (-1)^(i+j) x M(i,j)          <- always apply the sign

  adj A     =  TRANSPOSE of the cofactor matrix

  A (adj A) =  (adj A) A  =  det(A) x I     <- master identity
```

| Formula | When to use |
|---------|-------------|
| det(adj A) = [det A]^(n-1) | objective questions |
| adj(AB) = (adj B)(adj A) | objective questions |
| det(adj(adj A)) = [det A]^((n-1)^2) | JEE objective |

**2x2 shortcut — saves 2 minutes:**

```
       +-------+                    +--------+
  A =  | a   b |     ->     adj A = |  d  -b |
       | c   d |                    | -c   a |
       +-------+                    +--------+
       swap the diagonal, flip the sign of the other two
```

**MICRO-EXAMPLE — 2x2 adjoint and the master identity**

```
  A = | 4   7 |     det A = 24 - 35 = -11      adj A = |  6   -7 |
      | 5   6 |                                        | -5    4 |

  A (adj A) = | 24-35    -28+28 |  =  | -11     0 |  = (det A) I    CORRECT
              | 30-30    -35+24 |     |   0   -11 |
```

**MICRO-EXAMPLE — a full 3x3 adjoint (all nine cofactors)**

```
       +-------------+
  A =  | 1   2   3   |        det A = 1(12-6) - 2(8-6) + 3(6-9) = 6 - 4 - 9 = -7
       | 2   3   2   |
       | 3   3   4   |
       +-------------+

  C(1,1)= +(12-6)= 6     C(1,2)= -(8-6) = -2     C(1,3)= +(6-9) = -3
  C(2,1)= -(8-9) = 1     C(2,2)= +(4-9) = -5     C(2,3)= -(3-6) =  3
  C(3,1)= +(4-9) =-5     C(3,2)= -(2-6) =  4     C(3,3)= +(3-4) = -1

   cofactor matrix            adj A = its TRANSPOSE
   +----------------+         +----------------+
   |  6   -2   -3   |         |  6    1   -5   |
   |  1   -5    3   |  ---->  | -2   -5    4   |
   | -5    4   -1   |         | -3    3   -1   |
   +----------------+         +----------------+

  CHECK :  A (adj A) = -7 I .   Row 1 (1,2,3) with column 1 (6,-2,-3) :
           6 - 4 - 9 = -7      and with column 2 (1,-5,3) : 1 - 10 + 9 = 0

  And det(adj A) = 49 = (-7)^2 = (det A)^(n-1) with n = 3.
```

---

# 7. INVERSE

```
              adj A
   A^-1  =  ---------          requires det A not equal to 0
              det A

   A A^-1  =  A^-1 A  =  I     <- use this to CHECK your answer
```

| Formula | Note |
|---------|------|
| (A^-1)^-1 = A | |
| (AB)^-1 = B^-1 A^-1 | order reverses |
| (A')^-1 = (A^-1)' | |
| det(A^-1) = 1 / det(A) | |
| (kA)^-1 = (1/k) A^-1 | |
| (A^n)^-1 = (A^-1)^n | |
| A orthogonal | A^-1 = A' |
| A involutory (A^2 = I) | A^-1 = A |
| A^2 + pA + qI = O | A^-1 = -(1/q)(A + pI) |

**MICRO-EXAMPLE — the ordinary way**

```
  A = | 3   1 |    det A = 12 - 2 = 10      adj A = |  4   -1 |
      | 2   4 |                                     | -2    3 |

              1    |  4   -1 |
  A^-1  =   ----- x| -2    3 |
             10    +---------+

  CHECK :  A (adj A) = | 12-2    -3+3 |  =  | 10    0 |  = 10 I      CORRECT
                       |  8-8   -2+12 |     |  0   10 |
```

**MICRO-EXAMPLE — the polynomial way (no cofactors at all)**

```
  Given  A^2 - 4A - 5I = O.   Multiply throughout by A^-1 :

        A - 4I - 5 A^-1 = O   ->   A^-1 = (1/5)(A - 4I)

  With A = | 1  2  2 |   we get   A^-1 = (1/5) | -3   2   2 |
           | 2  1  2 |                         |  2  -3   2 |
           | 2  2  1 |                         |  2   2  -3 |

  CHECK : row 1 of A (1,2,2) with column 1 of (A - 4I) which is (-3,2,2) :
          -3 + 4 + 4 = 5    ->  A(A - 4I) = 5I     CORRECT
```

> **RULE:** whenever the question says *"...hence find A^-1"* right after a
> polynomial identity, do NOT compute cofactors. Multiply through by A^-1.

---

# 8. RANK

```
  rank(A)  =  order of the LARGEST square submatrix whose determinant is not 0

  rank(A) <= smaller of (m, n)
  rank(O)  = 0
  rank(A)  = rank(A')
```

**Fast method for a 3x3:**

```
  det A not 0                        ->  rank 3
  det A = 0 but some 2x2 minor not 0 ->  rank 2
  all 2x2 minors 0 but A not O       ->  rank 1
  A = O                              ->  rank 0
```

**Echelon method:** row-reduce, then rank = number of non-zero rows.

**MICRO-EXAMPLE — echelon reduction with the operations written down**

```
       | 1   2   3 |
  A =  | 2   3   4 |
       | 0   1   2 |

  R2 -> R2 - 2 R1 :   ( 0 , -1 , -2 )

       | 1    2    3 |
       | 0   -1   -2 |
       | 0    1    2 |

  R3 -> R3 + R2   :   ( 0 ,  0 ,  0 )

       | 1    2    3 |
       | 0   -1   -2 |      two non-zero rows   ->   RANK = 2
       | 0    0    0 |
```

**The three legal row operations (they never change the rank):**

```
   Ri <-> Rj              swap
   Ri -> k Ri             scale by k , k not 0
   Ri -> Ri + k Rj        add a multiple of another row
```

---

# 9. SYSTEM OF LINEAR EQUATIONS   A X = B

## Matrix Inversion Method

```
                          1
   X  =  A^-1 B  =  ----------- x (adj A) x B
                       det A
```

## Cramer's Rule

```
        D1           D2           D3
   x = ----     y = ----     z = ----        where D = det A , and D is not 0
         D            D            D

   D1 = D with COLUMN 1 replaced by B
   D2 = D with COLUMN 2 replaced by B
   D3 = D with COLUMN 3 replaced by B
```

## Gauss-Jordan Method

```
   [ A | B ]  --- row operations only --->  [ I | X ]
```

## Consistency table   (n = number of unknowns)

```
  +---------------------------------------+----------------------------+
  |  rank(A) = rank([A|B]) = n            |  UNIQUE solution           |
  +---------------------------------------+----------------------------+
  |  rank(A) = rank([A|B]) < n            |  INFINITELY MANY solutions |
  +---------------------------------------+----------------------------+
  |  rank(A) not equal to rank([A|B])     |  NO solution               |
  +---------------------------------------+----------------------------+
```

## Homogeneous system   A X = O

```
  +----------------+--------------------------------------+
  | det A not 0    |  only the trivial solution x=y=z=0    |
  +----------------+--------------------------------------+
  | det A = 0      |  infinitely many non-trivial solutions|
  +----------------+--------------------------------------+

  Number of free parameters in the solution  =  n - rank(A)
```

**MICRO-EXAMPLE — Cramer's rule end to end**

```
       x + y + z = 9 ,   2x + 5y + 7z = 52 ,   2x + y - z = 0

        | 1   1    1 |
   D  = | 2   5    7 |  =  1(-5-7) - 1(-2-14) + 1(2-10)  =  -12 + 16 - 8  =  -4
        | 2   1   -1 |

        |  9   1    1 |
   D1 = | 52   5    7 |  =  9(-12) - 1(-52) + 1(52)  =  -108 + 52 + 52  =  -4
        |  0   1   -1 |

        | 1    9    1 |
   D2 = | 2   52    7 |  =  1(-52) - 9(-16) + 1(-104) =  -52 + 144 - 104 = -12
        | 2    0   -1 |

        | 1   1    9 |
   D3 = | 2   5   52 |  =  1(-52) - 1(-104) + 9(-8)  =  -52 + 104 - 72   = -20
        | 2   1    0 |

   x = -4/-4 = 1     y = -12/-4 = 3     z = -20/-4 = 5

   CHECK:  1 + 3 + 5 = 9 ,  2 + 15 + 35 = 52 ,  2 + 3 - 5 = 0     ALL CORRECT
```

**MICRO-EXAMPLE — spotting inconsistency from the echelon form**

```
     | 1   1   1 |  6 |            R2 -> R2 - 2R1        | 1  1  1 |  6 |
     | 2   3   4 | 20 |     --->   R3 -> R3 -  R1  --->  | 0  1  2 |  8 |
     | 1   2   3 | 13 |            then R3 -> R3 - R2    | 0  0  0 | -1 |

     The last row reads   0 = -1 .   IMPOSSIBLE.

     rank(A) = 2  ,  rank([A|B]) = 3   ->   INCONSISTENT, no solution.
```

**MICRO-EXAMPLE — "non-trivial solution" means det = 0**

```
       x + ky + 3z = 0 ,  3x + ky - 2z = 0 ,  2x + 3y - 4z = 0

       det A = 1(-4k + 6) - k(-12 + 4) + 3(9 - 2k)
             = -4k + 6 + 8k + 27 - 6k
             = -2k + 33  =  0        ->     k = 33/2
```

---

# THE 15 FORMULAE TO WRITE ON YOUR PALM

```
   1.  (AB)'      =  B' A'
   2.  (AB)^-1    =  B^-1 A^-1
   3.  A^-1       =  adj A / det A
   4.  A (adj A)  =  det(A) x I
   5.  det(AB)    =  det A x det B
   6.  det(kA)    =  k^n x det A          (n = ORDER, not a power of A)
   7.  det(adj A) =  (det A)^(n-1)
   8.  Skew-symmetric of ODD order  ->  det = 0
   9.  Cramer:  x = D1/D ,  y = D2/D ,  z = D3/D
  10.  Sign board:   +  -  +
                     -  +  -
                     +  -  +
  11.  A  =  (1/2)(A + A')  +  (1/2)(A - A')      <- do NOT drop the 1/2
  12.  rank = number of non-zero rows in the echelon form
  13.  rank(A) = rank([A|B]) = n  ->  unique ;  < n  ->  infinite ;
       unequal  ->  no solution
  14.  Homogeneous:  det A not 0  ->  trivial only ;  det A = 0  ->  non-trivial
  15.  A^2 + pA + qI = O   ->   A^-1 = -(1/q)(A + pI)
```

---

# THE 60-SECOND FORMULA DRILL

Cover the right-hand column and say the answer out loud. Do it every morning for a
week and this chapter is finished.

| Question | Answer |
|---|---|
| (AB)' = ? | B'A' |
| (AB)^-1 = ? | B^-1 A^-1 |
| adj of a 2x2 [[a,b],[c,d]] = ? | [[d,-b],[-c,a]] |
| det(2A) for a 3x3 with det A = 5 | 2^3 x 5 = 40 |
| det(adj A) for a 3x3 with det A = 5 | 5^2 = 25 |
| det(A^-1) if det A = 4 | 1/4 |
| Trace of I of order 4 | 4 |
| A skew-symmetric, order 5, det A = ? | 0 |
| A orthogonal, det A = ? | +1 or -1 |
| A idempotent, A^7 = ? | A |
| A involutory, A^-1 = ? | A |
| Independent entries, symmetric 3x3 | 6 |
| Independent entries, skew 3x3 | 3 |
| Rank of the 3x3 zero matrix | 0 |
| System has infinitely many solutions when | rank(A) = rank([A\|B]) < n |
