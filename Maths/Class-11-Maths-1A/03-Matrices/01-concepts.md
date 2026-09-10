# Matrices — Concepts Explained Simply

Read one topic. Do its worked examples. Then move to the next.
Nothing here assumes you remember anything from Class 10.

**How to use this file:** every worked example is written out in full, line by line.
Do NOT read them. COPY them into your notebook with a pen, then cover the page and
redo the example. That is the only thing that makes matrices stick.

This chapter is the single highest-scoring chapter in Maths IA. It is also the most
mechanical — there is almost nothing to "understand", only steps to follow correctly.
That is very good news for a weak student.

---

# TOPIC 1 — What is a matrix?

A matrix is a **box of numbers** arranged in rows and columns, written inside square
brackets. That's it. It is NOT a number and it has NO value.

```
        column 1   column 2   column 3
       +--------------------------------+
row 1  |    2          5          1     |
row 2  |    0         -3          4     |
       +--------------------------------+
```

- **Rows** go across  ( --> ).  This one has 2 rows.
- **Columns** go down ( | ).    This one has 3 columns.
- **Order** = rows x columns = **2 x 3**.
  Always say rows first. Memory hook: **R** comes before **C** in the alphabet.
- **Element a(i,j)** = the number in row i, column j.
  Here a(2,3) = 4  (row 2, column 3).
- Number of elements in an m x n matrix = m times n.

> **TRAP:** a 2x3 matrix and a 3x2 matrix are DIFFERENT, even with the same numbers.

### WORKED EXAMPLE 1.1
If A = [a(i,j)] of order 2x2, where a(i,j) = i + 2j, write A.

```
  a(1,1) = 1 + 2(1) = 3        a(1,2) = 1 + 2(2) = 5
  a(2,1) = 2 + 2(1) = 4        a(2,2) = 2 + 2(2) = 6

           +-------+
      A =  | 3   5 |
           | 4   6 |
           +-------+
```

**The order you must fill the boxes in — never change it:**

```
   (1,1)  ->  (1,2)  ->  (1,3)   ...finish row 1 first
     |
     v
   (2,1)  ->  (2,2)  ->  (2,3)   ...then row 2
     |
     v
   (3,1)  ->  (3,2)  ->  (3,3)   ...then row 3
```

### WORKED EXAMPLE 1.2
Construct the 2x2 matrix A = [a(i,j)] where a(i,j) = (i + j)^2 / 2.

```
  a(1,1) = (1 + 1)^2 / 2 = 4 / 2  = 2
  a(1,2) = (1 + 2)^2 / 2 = 9 / 2
  a(2,1) = (2 + 1)^2 / 2 = 9 / 2
  a(2,2) = (2 + 2)^2 / 2 = 16 / 2 = 8

       +---------------+
  A =  |  2      9/2   |
       | 9/2      8    |
       +---------------+
```

Notice a(1,2) came out equal to a(2,1). The rule (i + j)^2 / 2 does not care which
of i and j comes first, so the matrix is automatically **symmetric**. You will meet
that word properly in Topic 7 — spot it here for free.

### WORKED EXAMPLE 1.3
Construct the 3x2 matrix A = [a(i,j)] where a(i,j) = |2i - 3j| / 2.

3 rows, 2 columns, so i runs 1,2,3 and j runs 1,2.

```
  a(1,1) = |2(1) - 3(1)| / 2 = |-1| / 2 = 1/2
  a(1,2) = |2(1) - 3(2)| / 2 = |-4| / 2 = 2

  a(2,1) = |2(2) - 3(1)| / 2 = | 1| / 2 = 1/2
  a(2,2) = |2(2) - 3(2)| / 2 = |-2| / 2 = 1

  a(3,1) = |2(3) - 3(1)| / 2 = | 3| / 2 = 3/2
  a(3,2) = |2(3) - 3(2)| / 2 = | 0| / 2 = 0

       +-------------+
       | 1/2      2  |
  A =  | 1/2      1  |        order 3 x 2 , six elements
       | 3/2      0  |
       +-------------+
```

> **TRAP:** the modulus bars mean "throw away the minus sign". Students who forget
> them get a(1,1) = -1/2 and lose the mark.

### WORKED EXAMPLE 1.4  (rule given in two pieces)
Construct the 3x3 matrix where

```
  a(i,j) =  i + j     when  i >= j
  a(i,j) =  i - j     when  i <  j
```

First decide, for each box, which of the two rules applies:

```
           j=1        j=2        j=3
  i=1    i = j      i < j      i < j
  i=2    i > j      i = j      i < j
  i=3    i > j      i > j      i = j
```

So the boxes ON or BELOW the diagonal use i + j, the boxes ABOVE use i - j.

```
  a(1,1) = 1 + 1 =  2      a(1,2) = 1 - 2 = -1      a(1,3) = 1 - 3 = -2
  a(2,1) = 2 + 1 =  3      a(2,2) = 2 + 2 =  4      a(2,3) = 2 - 3 = -1
  a(3,1) = 3 + 1 =  4      a(3,2) = 3 + 2 =  5      a(3,3) = 3 + 3 =  6

       +---------------+
       |  2   -1   -2  |
  A =  |  3    4   -1  |
       |  4    5    6  |
       +---------------+
```

### WORKED EXAMPLE 1.5  (counting orders — a free EAPCET mark)
How many different orders can a matrix with 24 elements have? And with 13 elements?

```
  An m x n matrix has m x n elements.
  So we need every pair (m, n) of whole numbers with  m x n = 24.

  1 x 24 ,  2 x 12 ,  3 x 8 ,  4 x 6 ,  6 x 4 ,  8 x 3 ,  12 x 2 ,  24 x 1

  That is 8 orders  =  the number of DIVISORS of 24.

  For 13 elements:  13 is prime, divisors are 1 and 13 only
                    ->  2 orders:  1 x 13  and  13 x 1
```

```
  +------------------------------------------------------------------+
  |  RULE:  number of possible orders  =  number of divisors of N    |
  |         If you also need SQUARE, only m = n = sqrt(N) counts.    |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 1.6  (reading a matrix backwards)
In the matrix below, write down the order, a(2,1), a(1,3) and the total number
of elements.

```
       +-------------------+
  A =  |  7   -2    0    5 |
       |  1    3    9   -4 |
       +-------------------+

  Rows = 2 , Columns = 4     ->  ORDER = 2 x 4
  a(2,1) = row 2, column 1   =  1
  a(1,3) = row 1, column 3   =  0
  Number of elements = 2 x 4 =  8
```

> **TRAP:** a(2,1) is NOT a(1,2). a(2,1) = 1 but a(1,2) = -2. Row index first,
> every single time.

---

# TOPIC 2 — Types of matrices

Learn these by their SHAPE, not by their definition.

| Type | Condition | Example |
|------|-----------|---------|
| Row matrix | only 1 row | `[ 2  5  7 ]` |
| Column matrix | only 1 column | `[2 ; 5]` written vertically |
| Square matrix | rows = columns | 2x2, 3x3 |
| Rectangular | rows not equal columns | 2x3 |
| Null / Zero matrix (O) | every element is 0 | all zeros |
| Diagonal matrix | square, all OFF-diagonal entries are 0 | see below |
| Scalar matrix | diagonal, and all diagonal entries EQUAL | see below |
| Unit / Identity (I) | scalar matrix with diagonal entries = 1 | see below |
| Upper triangular | square, everything BELOW the diagonal is 0 | see below |
| Lower triangular | square, everything ABOVE the diagonal is 0 | see below |

```
 DIAGONAL          SCALAR           IDENTITY  I
 +-------+        +-------+         +-------+
 | 3   0 |        | 5   0 |         | 1   0 |
 | 0   7 |        | 0   5 |         | 0   1 |
 +-------+        +-------+         +-------+

 UPPER TRIANGULAR          LOWER TRIANGULAR
 +-----------+             +-----------+
 | 1   2   3 |             | 1   0   0 |
 | 0   4   5 |             | 2   4   0 |
 | 0   0   6 |             | 3   5   6 |
 +-----------+             +-----------+
   zeros below               zeros above
```

**The diagonal** of a square matrix = the entries a(1,1), a(2,2), a(3,3), ...
(top-left going down to bottom-right).

**Trace** = sum of the diagonal entries. Written Tr(A).
Only defined for SQUARE matrices.

```
       +-----------+
       | 1   2   3 |          Tr(A) = 1 + 5 + 9 = 15
  A =  | 4   5   6 |                  ^       ^   ^
       | 7   8   9 |                  the diagonal
       +-----------+
```

Trace rules you can quote (they turn a long question into one line):

```
  Tr(A + B)  =  Tr(A) + Tr(B)
  Tr(A - B)  =  Tr(A) - Tr(B)
  Tr(kA)     =  k Tr(A)
  Tr(A')     =  Tr(A)               (transposing does not move the diagonal)
  Tr(AB)     =  Tr(BA)              (true even though AB is not BA !)
  Tr(I)      =  n     for the n x n identity
```

### WORKED EXAMPLE 2.1  (classify each one)

```
       +---------+           +-------------+           +-----------+
  P =  | 5   0   |     Q =   | 3   0   0   |     R =   | 4   0   0 |
       | 0   5   |           | 0   0   0   |           | 0   4   0 |
       +---------+           | 0   0  -2   |           | 0   0   4 |
                             +-------------+           +-----------+

  P : square, off-diagonal all 0, diagonal entries EQUAL (5, 5)
      ->  DIAGONAL and also SCALAR.

  Q : square, off-diagonal all 0, diagonal entries 3, 0, -2 (not equal)
      ->  DIAGONAL only.  A zero ON the diagonal is perfectly allowed.

  R : diagonal, all diagonal entries equal to 4
      ->  SCALAR.  In fact R = 4 I.
```

```
  +--------------------------------------------------------------+
  |  EVERY scalar matrix  =  k I   for some number k.            |
  |  I is the scalar matrix with k = 1.                          |
  |  So:  identity  ->  scalar  ->  diagonal  ->  square         |
  |       and the arrows NEVER run backwards.                    |
  +--------------------------------------------------------------+
```

### WORKED EXAMPLE 2.2
A is a scalar matrix of order 3 with trace 12:

```
       +---------------------+
  A =  | x+2    0      0     |
       |  0    y-3     0     |          Find x, y, z.
       |  0     0      z     |
       +---------------------+
```

```
  Scalar  ->  all three diagonal entries are the SAME number, call it k.
  Trace   ->  k + k + k = 12   ->   3k = 12   ->   k = 4

  x + 2 = 4   ->   x = 2
  y - 3 = 4   ->   y = 7
      z = 4   ->   z = 4
```

### WORKED EXAMPLE 2.3  (powers of a diagonal matrix — an EAPCET freebie)
If A = diag(2, -3, 5), find A^2, A^3 and Tr(A^3).

```
  To multiply diagonal matrices you just multiply the diagonal entries.
  Nothing else can happen, because every other position is 0.

  A   = diag( 2,  -3,   5)          Tr(A)   =  2 -  3 +   5 =    4
  A^2 = diag( 4,   9,  25)          Tr(A^2) =  4 +  9 +  25 =   38
  A^3 = diag( 8, -27, 125)          Tr(A^3) =  8 - 27 + 125 =  106

       +-------------------+
  A^3= |  8    0      0    |
       |  0  -27      0    |
       |  0    0    125    |
       +-------------------+
```

```
  +--------------------------------------------------------------+
  |  diag(a, b, c)^n  =  diag(a^n, b^n, c^n)                     |
  |  This is the ONLY shape where "raise every entry to the       |
  |  power n" is legal. Never do it to an ordinary matrix.        |
  +--------------------------------------------------------------+
```

### WORKED EXAMPLE 2.4  (trace of a combination)

```
       +--------------+          +--------------+
       |  2   1    3  |          |  1   0    0  |
  A =  |  0  -4    5  |    B =   |  2   3   -1  |     Find Tr(3A - 2B).
       |  6   7    1  |          |  4   5    2  |
       +--------------+          +--------------+
```

**Long way (fine, but slow):**

```
  Diagonal of 3A - 2B:
      3(2)  - 2(1)  =  6 - 2  =   4
      3(-4) - 2(3)  = -12 - 6 = -18
      3(1)  - 2(2)  =  3 - 4  =  -1

  Tr = 4 - 18 - 1 = -15
```

**Short way (use this in the exam):**

```
  Tr(A) = 2 + (-4) + 1 = -1
  Tr(B) = 1 +   3  + 2 =  6

  Tr(3A - 2B) = 3 Tr(A) - 2 Tr(B) = 3(-1) - 2(6) = -3 - 12 = -15
```

Same answer, one line. **Never expand the whole matrix if only the trace is asked.**

### WORKED EXAMPLE 2.5  (triangular times triangular)
Show that the product of two upper triangular matrices is upper triangular.

```
       +-----------+           +-----------+
  U =  | 1   2   3 |     V =   | 2   1   0 |
       | 0   4   5 |           | 0   3   4 |
       | 0   0   6 |           | 0   0   5 |
       +-----------+           +-----------+

  UV, entry by entry:

   (1,1) = 1(2) + 2(0) + 3(0) =  2
   (1,2) = 1(1) + 2(3) + 3(0) =  7
   (1,3) = 1(0) + 2(4) + 3(5) = 23
   (2,1) = 0(2) + 4(0) + 5(0) =  0
   (2,2) = 0(1) + 4(3) + 5(0) = 12
   (2,3) = 0(0) + 4(4) + 5(5) = 41
   (3,1) = 0(2) + 0(0) + 6(0) =  0
   (3,2) = 0(1) + 0(3) + 6(0) =  0
   (3,3) = 0(0) + 0(4) + 6(5) = 30

        +--------------+
  UV =  |  2   7   23  |     still UPPER TRIANGULAR
        |  0  12   41  |
        |  0   0   30  |
        +--------------+
```

Look at the diagonal of UV: 2 = 1x2, 12 = 4x3, 30 = 6x5.
The diagonal entries just multiply. That is why the determinant of a triangular
matrix is simply the product of its diagonal entries (Topic 8).

> **TRAP:** "diagonal matrix" needs the matrix to be SQUARE first. A 2x3 matrix
> like [[1,0,0],[0,2,0]] is NOT a diagonal matrix, however tidy it looks.

---

# TOPIC 3 — Equality of matrices

Two matrices are equal ONLY IF:
1. they have the **same order**, AND
2. **every** corresponding element is equal.

This is what makes the classic 2-mark question work: one matrix equation becomes
several small ordinary equations.

### WORKED EXAMPLE 3.1

```
   +-------------------+       +-----------+
   | x-3      2y-8     |   =   |  5     2  |
   | z+2       6       |       | -2     6  |
   +-------------------+       +-----------+
```

Compare position by position:

```
   x - 3  =  5     ->   x = 8
   2y - 8 =  2     ->   y = 5
   z + 2  = -2     ->   z = -4
```

### WORKED EXAMPLE 3.2  (two unknowns tangled together)

```
   +----------------+       +----------------+
   | 2x + y    4x   |   =   |  7    7y - 13  |     Find x and y.
   | 5x - 7    4x   |       |  y     x + 6   |
   +----------------+       +----------------+
```

**Strategy: hunt for the position that contains only ONE unknown.**

```
  Position (2,2):   4x = x + 6
                    3x = 6
                     x = 2

  Position (1,1):   2x + y = 7
                    2(2) + y = 7
                        y = 3

  CHECK the two positions we have not used yet:

  Position (2,1):   5x - 7 = 5(2) - 7 = 3      and  y = 3                MATCHES
  Position (1,2):   4x = 4(2) = 8              and  7y - 13 = 21 - 13 = 8  MATCHES

  ANSWER:  x = 2 ,  y = 3
```

> **TRAP:** you must check ALL four positions. If even one disagrees, there is no
> solution and that is the answer.

### WORKED EXAMPLE 3.3  (sum and product)

```
   +-------------+       +-----------+
   | x + y    2  |   =   |  6     2  |     Find x and y.
   |   5     xy  |       |  5     8  |
   +-------------+       +-----------+
```

```
  x + y = 6      and      xy = 8

  Two numbers adding to 6 and multiplying to 8  ->  4 and 2.
  (Or solve:  x(6 - x) = 8  ->  x^2 - 6x + 8 = 0  ->  (x-2)(x-4) = 0.)

  ANSWER:  x = 2 , y = 4    OR    x = 4 , y = 2
```

### WORKED EXAMPLE 3.4  (do not lose the negative root)

```
   +-----------+       +-----------+
   | x^2    3  |   =   |  9     3  |     Find x.
   |  1     4  |       |  1     4  |
   +-----------+       +-----------+
```

```
  x^2 = 9   ->   x = 3   OR   x = -3
```

> **TRAP:** writing only x = 3 loses half the mark. Any time an unknown appears
> SQUARED, write both signs.

### WORKED EXAMPLE 3.5  (the one-line answer)
Can these two matrices ever be equal?

```
   +-----------+              +-------+
   | 1   2   3 |      and     | 1   2 |
   | 4   5   6 |              | 3   4 |
   +-----------+              | 5   6 |
       2 x 3                  +-------+
                                3 x 2
```

**ANSWER:** No. Equality first demands the SAME ORDER. 2x3 is not 3x2, so they can
never be equal, whatever numbers are inside. That single sentence is the full answer.

---

# TOPIC 4 — Addition, subtraction, scalar multiplication

**Addition / subtraction rule:** only possible when both matrices have the SAME
order. Then just add the numbers sitting in the same position.

```
  +-------+     +--------+     +-------+
  | 1   2 |  +  |  5   0 |  =  | 6   2 |
  | 3   4 |     | -1   2 |     | 2   6 |
  +-------+     +--------+     +-------+
```

**Scalar multiplication:** multiply EVERY SINGLE element by the number.

```
      +-------+     +--------+
  3 x | 1   2 |  =  | 3    6 |
      | 3   4 |     | 9   12 |
      +-------+     +--------+
```

Properties you can quote in a proof:

```
  A + B = B + A                (commutative)
  (A + B) + C = A + (B + C)    (associative)
  A + O = A                    (O is the additive identity)
  A + (-A) = O
  k(A + B) = kA + kB
  (k + m)A = kA + mA
  k(mA) = (km)A
  1A = A ,   0A = O ,   (-1)A = -A
```

### WORKED EXAMPLE 4.1  (a combination like 3A - 2B)

```
       +-------------+            +---------------+
  A =  | 1   2   3   |     B =    |  3  -1    0   |     Find 3A - 2B.
       | 4   5   6   |            |  2   4   -2   |
       +-------------+            +---------------+
```

```
         +---------------+            +---------------+
   3A =  |  3    6    9  |     2B =   |  6   -2    0  |
         | 12   15   18  |            |  4    8   -4  |
         +---------------+            +---------------+

  Subtract position by position:

         3 - 6  = -3        6 - (-2) =  8        9 - 0    =  9
        12 - 4  =  8       15 -   8  =  7       18 - (-4) = 22

              +----------------+
   3A - 2B =  | -3    8     9  |
              |  8    7    22  |
              +----------------+
```

> **TRAP:** `6 - (-2)` is `8`, not `4`. Two-thirds of the errors in this topic are
> just minus-minus mistakes. Slow down on negative entries.

### WORKED EXAMPLE 4.2  (solve a matrix equation for X)

```
       +---------+           +----------+
  A =  |  3  -2  |     B =   |  7    0  |      Solve  2X + A = B.
       |  1   4  |           | -3    2  |
       +---------+           +----------+
```

```
  2X + A = B
      2X = B - A

            +-----------------------+     +----------+
       2X = |  7 - 3     0 - (-2)   |  =  |  4    2  |
            | -3 - 1     2 -   4    |     | -4   -2  |
            +-----------------------+     +----------+

  Now multiply by 1/2, that is, halve every entry:

            +----------+
        X = |  2    1  |
            | -2   -1  |
            +----------+

  CHECK:  2X + A = | 4+3   2-2 |  =  |  7   0 |  = B     YES
                   |-4+1  -2+4 |     | -3   2 |
```

### WORKED EXAMPLE 4.3  (two matrices, two equations)
Solve for X and Y:

```
              +---------+                    +-----------+
  X + Y  =    | 7   0   |      X - Y  =      | 3    0    |
              | 2   5   |                    | 0    3    |
              +---------+                    +-----------+
```

```
  ADD the two equations:      (X + Y) + (X - Y) = 2X

         +---------------+     +----------+                +---------+
   2X =  | 7+3    0+0    |  =  | 10    0  |     ->    X =  | 5   0   |
         | 2+0    5+3    |     |  2    8  |                | 1   4   |
         +---------------+     +----------+                +---------+

  SUBTRACT them:              (X + Y) - (X - Y) = 2Y

         +---------------+     +---------+                 +---------+
   2Y =  | 7-3    0-0    |  =  | 4    0  |      ->    Y =  | 2   0   |
         | 2-0    5-3    |     | 2    2  |                 | 1   1   |
         +---------------+     +---------+                 +---------+

  CHECK:  X + Y = | 5+2   0 |  =  | 7   0 |     YES
                  | 1+1   5 |     | 2   5 |
```

### WORKED EXAMPLE 4.4  (the harder elimination)
Solve for X and Y:

```
                 +---------+                       +-----------+
  2X + 3Y  =     | 8   4   |       3X + 2Y  =      |  7    6   |
                 | 9   5   |                       | 11   10   |
                 +---------+                       +-----------+
```

Exactly the same elimination you use for ordinary simultaneous equations.

```
  Multiply eq.1 by 3 :   6X + 9Y = 3 x | 8  4 |  =  | 24  12 |
                                       | 9  5 |     | 27  15 |

  Multiply eq.2 by 2 :   6X + 4Y = 2 x |  7   6 |  =  | 14  12 |
                                       | 11  10 |     | 22  20 |

  Subtract:              5Y = | 24-14   12-12 |  =  | 10    0 |
                             | 27-22   15-20 |     |  5   -5 |

                          Y = |  2    0 |
                              |  1   -1 |

  Put Y back into eq.1:

       2X = | 8  4 |  -  3 | 2   0 |  =  | 8-6   4-0 |  =  | 2   4 |
            | 9  5 |       | 1  -1 |     | 9-3   5+3 |     | 6   8 |

        X = | 1   2 |
            | 3   4 |

  CHECK in eq.2:  3X + 2Y = | 3   6 | + | 4   0 |  =  |  7    6 |     YES
                            | 9  12 |   | 2  -2 |     | 11   10 |
```

### WORKED EXAMPLE 4.5  (why order matters for addition)
Can you add a 2x3 matrix to a 3x2 matrix?

**ANSWER:** No. Addition needs IDENTICAL orders. There is no position in the second
matrix sitting "opposite" position (1,3) of the first. Write "not defined" — that is
the whole answer and it is worth the full mark.

---

# TOPIC 5 — Matrix multiplication (most students get this wrong)

## Rule 1 — Can I even multiply?

```
    A            x            B          =      AB
  m x n                     p x q            m x q

           +----------------------+
           |  n must equal p      |     <- INNER numbers must match
           +----------------------+

  Example:   A(2 x 3)  x  B(3 x 4)  =  AB(2 x 4)
                  \____/  \_
                   match     \__ OUTER numbers give the answer's order
```

## Rule 2 — How to do it: ROW times COLUMN

The entry in **row i, column j** of AB
= (row i of A) multiplied term-by-term with (column j of B), then added up.

### WORKED EXAMPLE 5.1

```
       +-------+           +-------+
  A =  | 1   2 |      B =  | 5   6 |
       | 3   4 |           | 7   8 |
       +-------+           +-------+
```

```
  position (1,1):  row 1 of A = (1, 2)   column 1 of B = (5, 7)
                   1x5 + 2x7 = 5 + 14 = 19

  position (1,2):  (1, 2) with (6, 8)
                   1x6 + 2x8 = 6 + 16 = 22

  position (2,1):  (3, 4) with (5, 7)
                   3x5 + 4x7 = 15 + 28 = 43

  position (2,2):  (3, 4) with (6, 8)
                   3x6 + 4x8 = 18 + 32 = 50

              +---------+
      AB  =   | 19   22 |
              | 43   50 |
              +---------+
```

### WORKED EXAMPLE 5.2  (rectangular — watch the order of the answer)

```
       +---------------+              +----------+
  A =  |  1   -1    2  |        B =   |  2    0  |     Find AB and BA.
       |  0    3    4  |              |  1    3  |
       +---------------+              | -1    5  |
            2 x 3                     +----------+
                                         3 x 2
```

```
  AB :   (2 x 3)(3 x 2)  ->  inner 3 = 3  OK  ->  answer is 2 x 2

   (1,1) = (1)(2) + (-1)(1) + (2)(-1) =  2 - 1 - 2 = -1
   (1,2) = (1)(0) + (-1)(3) + (2)(5)  =  0 - 3 + 10 =  7
   (2,1) = (0)(2) + (3)(1)  + (4)(-1) =  0 + 3 - 4  = -1
   (2,2) = (0)(0) + (3)(3)  + (4)(5)  =  0 + 9 + 20 = 29

               +----------+
      AB  =    | -1     7 |            order 2 x 2
               | -1    29 |
               +----------+


  BA :   (3 x 2)(2 x 3)  ->  inner 2 = 2  OK  ->  answer is 3 x 3

   row 1 of B = (2, 0) :   (2)(1)+(0)(0) = 2 ,  (2)(-1)+(0)(3) = -2 ,  (2)(2)+(0)(4) = 4
   row 2 of B = (1, 3) :   (1)(1)+(3)(0) = 1 ,  (1)(-1)+(3)(3) =  8 ,  (1)(2)+(3)(4) = 14
   row 3 of B = (-1,5) :  (-1)(1)+(5)(0)= -1 , (-1)(-1)+(5)(3)= 16 , (-1)(2)+(5)(4) = 18

               +-----------------+
      BA  =    |  2   -2     4   |        order 3 x 3
               |  1    8    14   |
               | -1   16    18   |
               +-----------------+
```

Here AB and BA are not even the SAME SIZE. That is the loudest possible proof that
**AB is not BA**.

### WORKED EXAMPLE 5.3  (a full 3x3 product — do this one twice)

```
       +---------------+            +---------------+
  A =  |  2    1   -1  |      B =   |  1    2    0  |
       |  0    3    2  |            | -1    1    3  |
       |  1    0    4  |            |  2    0    1  |
       +---------------+            +---------------+
```

Columns of B:  c1 = (1, -1, 2) ,  c2 = (2, 1, 0) ,  c3 = (0, 3, 1)

```
  ROW 1 of A = (2, 1, -1)
     with c1 :  (2)(1) + (1)(-1) + (-1)(2)  =  2 - 1 - 2  = -1
     with c2 :  (2)(2) + (1)(1)  + (-1)(0)  =  4 + 1 - 0  =  5
     with c3 :  (2)(0) + (1)(3)  + (-1)(1)  =  0 + 3 - 1  =  2

  ROW 2 of A = (0, 3, 2)
     with c1 :  (0)(1) + (3)(-1) + (2)(2)   =  0 - 3 + 4  =  1
     with c2 :  (0)(2) + (3)(1)  + (2)(0)   =  0 + 3 + 0  =  3
     with c3 :  (0)(0) + (3)(3)  + (2)(1)   =  0 + 9 + 2  = 11

  ROW 3 of A = (1, 0, 4)
     with c1 :  (1)(1) + (0)(-1) + (4)(2)   =  1 + 0 + 8  =  9
     with c2 :  (1)(2) + (0)(1)  + (4)(0)   =  2 + 0 + 0  =  2
     with c3 :  (1)(0) + (0)(3)  + (4)(1)   =  0 + 0 + 4  =  4

              +-----------------+
      AB  =   | -1     5     2  |
              |  1     3    11  |
              |  9     2     4  |
              +-----------------+
```

> **HOW TO NOT GET LOST:** put your left index finger on the row of A and your right
> index finger on the column of B. Walk both fingers along together. If your fingers
> ever run out at different times, you have picked the wrong row or column.

### WORKED EXAMPLE 5.4  (a matrix that satisfies its own equation)

```
       +----------+
  A =  |  3   -2  |         Show that  A^2 = A - 2I.
       |  4   -2  |
       +----------+
```

```
  A^2 :
    (1,1) = (3)(3)  + (-2)(4)  =  9 - 8  =  1
    (1,2) = (3)(-2) + (-2)(-2) = -6 + 4  = -2
    (2,1) = (4)(3)  + (-2)(4)  = 12 - 8  =  4
    (2,2) = (4)(-2) + (-2)(-2) = -8 + 4  = -4

         +----------+
   A^2 = |  1   -2  |
         |  4   -4  |
         +----------+

  A - 2I =  |  3  -2 |  -  | 2   0 |  =  | 3-2    -2-0 |  =  |  1   -2 |
            |  4  -2 |     | 0   2 |     | 4-0    -2-2 |     |  4   -4 |

  The two agree, so  A^2 = A - 2I.       PROVED
```

This shape ("A satisfies a polynomial") is the doorway to finding A^-1 without any
cofactors at all. See Topic 10.

### WORKED EXAMPLE 5.5  (a nilpotent matrix — A^3 = O)

```
       +-----------------+
  A =  |  1    1     3   |         Show that A^3 = O.
       |  5    2     6   |
       | -2   -1    -3   |
       +-----------------+
```

```
  Columns of A :  c1 = (1, 5, -2) ,  c2 = (1, 2, -1) ,  c3 = (3, 6, -3)

  A^2 :
   row1 (1,1,3)   with c1 :  1 +  5 -  6 =  0
                  with c2 :  1 +  2 -  3 =  0
                  with c3 :  3 +  6 -  9 =  0
   row2 (5,2,6)   with c1 :  5 + 10 - 12 =  3
                  with c2 :  5 +  4 -  6 =  3
                  with c3 : 15 + 12 - 18 =  9
   row3 (-2,-1,-3) with c1: -2 -  5 +  6 = -1
                  with c2 : -2 -  2 +  3 = -1
                  with c3 : -6 -  6 +  9 = -3

          +-----------------+
   A^2 =  |  0    0     0   |
          |  3    3     9   |
          | -1   -1    -3   |
          +-----------------+

  A^3 = A^2 x A :
   row1 is all zeros           ->  0, 0, 0
   row2 (3,3,9)   with c1 :  3 + 15 - 18 = 0
                  with c2 :  3 +  6 -  9 = 0
                  with c3 :  9 + 18 - 27 = 0
   row3 (-1,-1,-3) with c1: -1 -  5 +  6 = 0
                  with c2 : -1 -  2 +  3 = 0
                  with c3 : -3 -  6 +  9 = 0

   A^3 = O      ->  A is NILPOTENT of index 3.
```

Notice A is not the zero matrix, yet a power of it is. Matrices are allowed to do
things numbers are not.

## Three warnings (each has been a 2-mark question)

```
  1.  AB is NOT equal to BA in general.
      Matrix multiplication is NOT commutative.

  2.  AB = O does NOT mean A = O or B = O.
      Proof by example:
           +-------+     +-------+     +-------+
           | 0   1 |  x  | 0   1 |  =  | 0   0 |
           | 0   0 |     | 0   0 |     | 0   0 |
           +-------+     +-------+     +-------+

  3.  Cancellation FAILS:  AB = AC does NOT give B = C.
```

What IS true:

```
  A(BC) = (AB)C          (associative)
  A(B + C) = AB + AC     (distributive)
  A I = I A = A          (identity)
  A O = O A = O
  k(AB) = (kA)B = A(kB)
```

---

## THE FOUR TRAPS, EACH PROVED WITH REAL NUMBERS

These four "obvious" statements are FALSE. Every one of them has been an exam
question of the form *"give an example to show that ..."*. Learn one counter-example
for each and you can answer instantly.

### TRAP 1 — AB is not BA

```
       +-------+           +-------+
  A =  | 1   2 |      B =  | 5   6 |
       | 3   4 |           | 7   8 |
       +-------+           +-------+

  AB :  (1,1) = 1(5) + 2(7) =  5 + 14 = 19
        (1,2) = 1(6) + 2(8) =  6 + 16 = 22
        (2,1) = 3(5) + 4(7) = 15 + 28 = 43
        (2,2) = 3(6) + 4(8) = 18 + 32 = 50

  BA :  (1,1) = 5(1) + 6(3) =  5 + 18 = 23
        (1,2) = 5(2) + 6(4) = 10 + 24 = 34
        (2,1) = 7(1) + 8(3) =  7 + 24 = 31
        (2,2) = 7(2) + 8(4) = 14 + 32 = 46

        +---------+                 +---------+
  AB =  | 19   22 |          BA  =  | 23   34 |
        | 43   50 |                 | 31   46 |
        +---------+                 +---------+

              AB  is NOT equal to  BA.        PROVED BY EXAMPLE
```

### TRAP 2 — AB = O does not force A = O or B = O

```
       +----------+           +---------+
  A =  |  1   -1  |      B =  | 1    1  |      Neither is the zero matrix.
       | -1    1  |           | 1    1  |
       +----------+           +---------+

  AB :  (1,1) = (1)(1) + (-1)(1) = 1 - 1 = 0
        (1,2) = (1)(1) + (-1)(1) = 1 - 1 = 0
        (2,1) = (-1)(1) + (1)(1) = -1 + 1 = 0
        (2,2) = (-1)(1) + (1)(1) = -1 + 1 = 0

        +--------+
  AB =  | 0    0 |  =  O          yet  A is not O  and  B is not O.
        | 0    0 |
        +--------+
```

A second, even shorter one you can quote from memory:

```
  +-------+     +-------+     +-------+
  | 0   1 |  x  | 0   1 |  =  | 0   0 |          A^2 = O with A not O
  | 0   0 |     | 0   0 |     | 0   0 |
  +-------+     +-------+     +-------+
```

### TRAP 3 — AB = AC does not give B = C  (no cancellation)

```
       +-------+           +---------+           +---------+
  A =  | 0   1 |      B =  | 1    2  |      C =  | 5    6  |
       | 0   0 |           | 3    4  |           | 3    4  |
       +-------+           +---------+           +---------+

  B and C are clearly DIFFERENT (top rows disagree).

  AB :  (1,1) = 0(1) + 1(3) = 3      (1,2) = 0(2) + 1(4) = 4
        (2,1) = 0(1) + 0(3) = 0      (2,2) = 0(2) + 0(4) = 0

  AC :  (1,1) = 0(5) + 1(3) = 3      (1,2) = 0(6) + 1(4) = 4
        (2,1) = 0(5) + 0(3) = 0      (2,2) = 0(6) + 0(4) = 0

        +--------+                 +--------+
  AB =  | 3    4 |         AC  =   | 3    4 |          AB = AC
        | 0    0 |                 | 0    0 |
        +--------+                 +--------+

  but  B is NOT C.        CANCELLATION FAILS.
```

The reason: cancelling means multiplying by A^-1, and here det A = 0 so A^-1 does
not exist. **You may cancel only when A is non-singular.**

### TRAP 4 — (A + B)^2 is not A^2 + 2AB + B^2

Use the same A and B as Trap 1.

```
  A + B  =  | 1+5   2+6 |  =  |  6    8 |
            | 3+7   4+8 |     | 10   12 |

  (A + B)^2 :
     (1,1) =  6(6) +  8(10) =  36 +  80 = 116
     (1,2) =  6(8) +  8(12) =  48 +  96 = 144
     (2,1) = 10(6) + 12(10) =  60 + 120 = 180
     (2,2) = 10(8) + 12(12) =  80 + 144 = 224

        +-------------+
      = | 116    144  |          <-- the TRUTH
        | 180    224  |
        +-------------+

  Now the WRONG formula  A^2 + 2AB + B^2 :

     A^2 = | 1(1)+2(3)   1(2)+2(4) |  =  |  7   10 |
           | 3(1)+4(3)   3(2)+4(4) |     | 15   22 |

     B^2 = | 5(5)+6(7)   5(6)+6(8) |  =  | 67    78 |
           | 7(5)+8(7)   7(6)+8(8) |     | 91   106 |

     2AB = 2 | 19  22 |  =  | 38   44 |
             | 43  50 |     | 86  100 |

     A^2 + 2AB + B^2 = |  7+38+67    10+44+78  |  =  | 112   132 |
                       | 15+86+91    22+100+106|     | 192   228 |

        112 is not 116.       THE FORMULA IS WRONG.

  The CORRECT expansion keeps AB and BA apart:

     (A + B)^2 = A^2 + AB + BA + B^2

               = |  7+19+23+67    10+22+34+78  |  =  | 116   144 |
                 | 15+43+31+91    22+50+46+106 |     | 180   224 |

        which MATCHES the true answer.       CORRECT
```

```
  +------------------------------------------------------------------+
  |  ALL the school identities need fixing for matrices:              |
  |                                                                   |
  |    (A + B)^2   =  A^2 + AB + BA + B^2                              |
  |    (A - B)^2   =  A^2 - AB - BA + B^2                              |
  |    (A + B)(A - B) = A^2 - AB + BA - B^2                            |
  |                                                                   |
  |  They collapse to the familiar school versions ONLY when AB = BA. |
  +------------------------------------------------------------------+
```

### TRAP 5 — A^2 = I does not force A = I or A = -I

```
       +----------+                +----------+
  A =  | 1     0  |         A^2 =  | 1     0  |  =  I
       | 0    -1  |                | 0     1  |
       +----------+                +----------+
```

A is neither I nor -I, yet A^2 = I. Such a matrix is called **involutory**.

---

# TOPIC 6 — Transpose

**Transpose A'** (also written A^T) = flip rows into columns.
If A is m x n, then A' is n x m.

```
       +-----------+                 +-------+
  A =  | 1   2   3 |     ->    A' =  | 1   4 |
       | 4   5   6 |                 | 2   5 |
       +-----------+                 | 3   6 |
          2 x 3                      +-------+
                                       3 x 2
```

Properties — memorise these, they appear in almost every proof question:

```
  (A')'      =  A
  (A + B)'   =  A' + B'
  (kA)'      =  k A'
  (AB)'      =  B' A'        <--  THE ORDER REVERSES.  This is the one they test.
  (A^n)'     =  (A')^n
  (ABC)'     =  C' B' A'     <--  the whole chain reverses
```

### WORKED EXAMPLE 6.1  (plain transpose)

```
       +-------------------+                    +-----------+
  A =  |  2   -1    0    5 |         ->    A' = |  2    3   |
       |  3    7   -4    1 |                    | -1    7   |
       +-------------------+                    |  0   -4   |
              2 x 4                             |  5    1   |
                                                +-----------+
                                                    4 x 2
```

Row 1 of A became column 1 of A'. Row 2 of A became column 2 of A'. That is all
transposing ever does.

### WORKED EXAMPLE 6.2  (verify (AB)' = B'A' with real numbers)

```
       +-------+           +-------+
  A =  | 1   2 |      B =  | 5   6 |
       | 3   4 |           | 7   8 |
       +-------+           +-------+

  LEFT SIDE
       AB  =  | 19   22 |          (computed in Topic 5)
              | 43   50 |

     (AB)' =  | 19   43 |
              | 22   50 |

  RIGHT SIDE
       B' =  | 5   7 |        A' =  | 1   3 |
             | 6   8 |              | 2   4 |

     B'A' :  (1,1) = 5(1) + 7(2) =  5 + 14 = 19
             (1,2) = 5(3) + 7(4) = 15 + 28 = 43
             (2,1) = 6(1) + 8(2) =  6 + 16 = 22
             (2,2) = 6(3) + 8(4) = 18 + 32 = 50

     B'A'  =  | 19   43 |
              | 22   50 |

  LEFT = RIGHT.      (AB)' = B'A'  CONFIRMED
```

Now try the WRONG version A'B' on the same numbers:

```
     A'B' :  (1,1) = 1(5) + 3(6) =  5 + 18 = 23
             (1,2) = 1(7) + 3(8) =  7 + 24 = 31

     A'B'  =  | 23   31 |     which is NOT (AB)'.
              | 34   46 |
```

So the order really does have to reverse. **This single fact is worth 2 marks
almost every year.**

### WORKED EXAMPLE 6.3  (A A' and A' A are always symmetric)

```
       +-------------+
  A =  | 1   2   3   |          A' = | 1   4 |
       | 4   5   6   |               | 2   5 |
       +-------------+               | 3   6 |
```

```
  A A'  is (2x3)(3x2) = 2 x 2 :

     (1,1) = 1(1) + 2(2) + 3(3) =  1 +  4 +  9 = 14
     (1,2) = 1(4) + 2(5) + 3(6) =  4 + 10 + 18 = 32
     (2,1) = 4(1) + 5(2) + 6(3) =  4 + 10 + 18 = 32
     (2,2) = 4(4) + 5(5) + 6(6) = 16 + 25 + 36 = 77

           +-----------+
     AA' = | 14    32  |     symmetric (32 appears twice)
           | 32    77  |
           +-----------+


  A' A  is (3x2)(2x3) = 3 x 3 :

     (1,1) = 1(1) + 4(4) =  1 + 16 = 17
     (1,2) = 1(2) + 4(5) =  2 + 20 = 22
     (1,3) = 1(3) + 4(6) =  3 + 24 = 27
     (2,2) = 2(2) + 5(5) =  4 + 25 = 29
     (2,3) = 2(3) + 5(6) =  6 + 30 = 36
     (3,3) = 3(3) + 6(6) =  9 + 36 = 45

           +-----------------+
     A'A = | 17   22    27   |     symmetric across the diagonal
           | 22   29    36   |
           | 27   36    45   |
           +-----------------+
```

**One-line proof of why:**  (A A')' = (A')' A' = A A'. Since the transpose gives
back the same matrix, A A' is symmetric. Same argument for A'A.

### WORKED EXAMPLE 6.4  (a short proof question)
If A is a square matrix, prove that A + A' is symmetric.

```
   (A + A')'  =  A' + (A')'          [ (X + Y)' = X' + Y' ]
              =  A' + A              [ (A')' = A ]
              =  A + A'              [ addition is commutative ]

   The transpose returned the original expression, so A + A' is SYMMETRIC.
```

---

# TOPIC 7 — Symmetric and skew-symmetric

Only for SQUARE matrices.

| | Condition | In terms of elements | Diagonal |
|---|---|---|---|
| **Symmetric** | A' = A | a(i,j) = a(j,i) | anything |
| **Skew-symmetric** | A' = -A | a(i,j) = -a(j,i) | **all zeros** |

```
    SYMMETRIC                     SKEW-SYMMETRIC
  +-----------+                  +--------------+
  | 1   7   3 |                  |  0   2   -3  |
  | 7   4   5 |                  | -2   0    5  |
  | 3   5   9 |                  |  3  -5    0  |
  +-----------+                  +--------------+
   mirror image across            mirror image with
   the diagonal                   the sign flipped
```

**Why the diagonal of a skew-symmetric matrix is zero** (this 2-line proof is a
2-mark question):

```
  Put i = j  in  a(i,j) = -a(j,i)
      a(i,i) = -a(i,i)
     2a(i,i) = 0
      a(i,i) = 0
```

### Key results

```
  A + A'  is ALWAYS symmetric
  A - A'  is ALWAYS skew-symmetric

  Every square matrix splits uniquely:

        A  =  (1/2)(A + A')  +  (1/2)(A - A')
              \____________/    \____________/
               symmetric part    skew part

  Determinant of a SKEW-SYMMETRIC matrix of ODD order = 0
  (very common 2-mark question)
```

### WORKED EXAMPLE 7.1  (2x2 decomposition — the warm-up)
Express A as the sum of a symmetric and a skew-symmetric matrix.

```
       +----------+
  A =  |  3    5  |            A' =  |  3    1  |
       |  1   -1  |                  |  5   -1  |
       +----------+
```

```
  STEP 1   A + A' =  |  3+3    5+1 |  =  |  6    6 |
                     |  1+5   -1-1 |     |  6   -2 |

           P = (1/2)(A + A') =  |  3    3 |          CHECK P' = P   YES
                                |  3   -1 |

  STEP 2   A - A' =  |  3-3    5-1 |  =  |  0    4 |
                     |  1-5   -1+1 |     | -4    0 |

           Q = (1/2)(A - A') =  |  0    2 |          CHECK Q' = -Q  YES
                                | -2    0 |

  STEP 3   P + Q =  |  3+0    3+2 |  =  |  3    5 |  =  A       VERIFIED
                    |  3-2   -1+0 |     |  1   -1 |
```

### WORKED EXAMPLE 7.2  (3x3 decomposition, whole numbers)

```
       +-----------------+                +-----------------+
  A =  |  2    4     6   |          A' =  |  2    8    14   |
       |  8   10    12   |                |  4   10    16   |
       | 14   16    18   |                |  6   12    18   |
       +-----------------+                +-----------------+
```

```
  STEP 1   A + A' :
              row 1 :   2+2 = 4 ,   4+8  = 12 ,   6+14 = 20
              row 2 :   8+4 = 12,  10+10 = 20 ,  12+16 = 28
              row 3 :  14+6 = 20,  16+12 = 28 ,  18+18 = 36

                     +-----------------+                +-----------------+
           A + A' =  |  4   12    20   |     P =        |  2    6    10   |
                     | 12   20    28   |    (halve it)  |  6   10    14   |
                     | 20   28    36   |                | 10   14    18   |
                     +-----------------+                +-----------------+

           P' = P ?   Reflect across the diagonal:  6 <-> 6 , 10 <-> 10 , 14 <-> 14
                      YES, P is SYMMETRIC.

  STEP 2   A - A' :
              row 1 :   2-2 = 0 ,   4-8  = -4 ,   6-14 = -8
              row 2 :   8-4 = 4 ,  10-10 =  0 ,  12-16 = -4
              row 3 :  14-6 = 8 ,  16-12 =  4 ,  18-18 =  0

                     +-----------------+                +-----------------+
           A - A' =  |  0   -4    -8   |     Q =        |  0   -2    -4   |
                     |  4    0    -4   |    (halve it)  |  2    0    -2   |
                     |  8    4     0   |                |  4    2     0   |
                     +-----------------+                +-----------------+

           Diagonal is all zeros and the mirror entries have opposite signs.
           YES, Q is SKEW-SYMMETRIC.

  STEP 3   P + Q :
              row 1 :  2+0 = 2 ,   6-2  =  4 ,  10-4  =  6
              row 2 :  6+2 = 8 ,  10+0  = 10 ,  14-2  = 12
              row 3 : 10+4 = 14,  14+2  = 16 ,  18+0  = 18

                     +-----------------+
              P+Q =  |  2    4     6   |   =  A        VERIFIED
                     |  8   10    12   |
                     | 14   16    18   |
                     +-----------------+
```

### WORKED EXAMPLE 7.3  (3x3 decomposition where the halves are fractions)

Most exam matrices do NOT halve neatly. Do not panic and do not round — just leave
the fractions.

```
       +-----------------+                +-----------------+
  A =  |  3   -2    -4   |          A' =  |  3    3    -1   |
       |  3   -2    -5   |                | -2   -2     1   |
       | -1    1     2   |                | -4   -5     2   |
       +-----------------+                +-----------------+
```

```
  A + A' :
    row 1 :   3+3 =  6 ,  -2+3 =  1 ,  -4-1 = -5
    row 2 :   3-2 =  1 ,  -2-2 = -4 ,  -5+1 = -4
    row 3 :  -1-4 = -5 ,   1-5 = -4 ,   2+2 =  4

            +-----------------+                 +---------------------------+
  A + A' =  |  6    1    -5   |       P =       |    3      1/2     -5/2    |
            |  1   -4    -4   |    (halve it)   |   1/2     -2       -2     |
            | -5   -4     4   |                 |  -5/2     -2        2     |
            +-----------------+                 +---------------------------+

  A - A' :
    row 1 :   3-3 =  0 ,  -2-3 = -5 ,  -4+1 = -3
    row 2 :   3+2 =  5 ,  -2+2 =  0 ,  -5-1 = -6
    row 3 :  -1+4 =  3 ,   1+5 =  6 ,   2-2 =  0

            +-----------------+                 +---------------------------+
  A - A' =  |  0   -5    -3   |       Q =       |    0     -5/2    -3/2     |
            |  5    0    -6   |    (halve it)   |   5/2      0      -3      |
            |  3    6     0   |                 |   3/2      3       0      |
            +-----------------+                 +---------------------------+

  CHECK  P + Q :
    (1,1)  3 + 0     =  3          (1,2)  1/2 - 5/2  = -2      (1,3) -5/2 - 3/2 = -4
    (2,1)  1/2 + 5/2 =  3          (2,2)  -2 + 0     = -2      (2,3)  -2 - 3    = -5
    (3,1) -5/2 + 3/2 = -1          (3,2)  -2 + 3     =  1      (3,3)   2 + 0    =  2

    That is exactly A.        VERIFIED
```

> **TRAP:** the single biggest loss in this question is forgetting the 1/2. If you
> write P = A + A' you get 2A, not A, and you lose half the marks.

### WORKED EXAMPLE 7.4  (find the unknown entries)

```
       +-----------------+
  A =  |  1    x     3   |     A is symmetric.  Find x, y, z.
       |  2    5     y   |
       |  z    7     9   |
       +-----------------+
```

```
  Symmetric means  a(i,j) = a(j,i).  Match the mirror pairs:

     a(1,2) = a(2,1)   ->   x = 2
     a(2,3) = a(3,2)   ->   y = 7
     a(1,3) = a(3,1)   ->   3 = z    ->   z = 3
```

And the skew version:

```
       +-----------------+
  B =  |  0    3     p   |     B is skew-symmetric.  Find p, q, r.
       |  q    0    -5   |
       |  4    r     0   |
       +-----------------+

  Skew means  a(i,j) = -a(j,i) :

     a(2,1) = -a(1,2)  ->   q = -3
     a(1,3) = -a(3,1)  ->   p = -4
     a(3,2) = -a(2,3)  ->   r = -(-5) = 5

  (The diagonal is already 0, as it must be.)
```

### WORKED EXAMPLE 7.5  (skew of odd order — proved, then checked)

**Proof (the 2-mark answer):**

```
   det A = det(A')                     [ det of transpose is the same ]
         = det(-A)                     [ A is skew, so A' = -A ]
         = (-1)^3 det(A)               [ det(kA) = k^n det A , n = 3 ]
         = - det(A)

   So  det A + det A = 0   ->   2 det A = 0   ->   det A = 0
```

**Now watch it happen on a real matrix:**

```
       +-----------------+
  A =  |  0    2    -3   |
       | -2    0     5   |
       |  3   -5     0   |
       +-----------------+

  det A = 0 (0 x 0 - 5 x (-5))  -  2 ((-2) x 0 - 5 x 3)  +  (-3)((-2)(-5) - 0 x 3)
        = 0 (0 + 25)  -  2 (0 - 15)  +  (-3)(10 - 0)
        = 0  +  30  -  30
        = 0                     EXACTLY AS PREDICTED
```

> **TRAP:** the result is only for ODD order. A skew-symmetric matrix of order 2,
> such as [[0, 3],[-3, 0]], has determinant 0 - (-9) = 9, which is NOT zero.

### WORKED EXAMPLE 7.6  (a standard 4-mark proof)
If A and B are symmetric of the same order, prove AB - BA is skew-symmetric.

```
   Given:  A' = A   and   B' = B.

   (AB - BA)'  =  (AB)' - (BA)'          [ (X - Y)' = X' - Y' ]
               =  B'A'  - A'B'           [ order reverses in each bracket ]
               =  BA    - AB             [ substitute A' = A , B' = B ]
               =  -(AB - BA)

   The transpose is MINUS the original  ->  AB - BA is SKEW-SYMMETRIC.
```

And the companion result, worth knowing:

```
   (AB + BA)'  =  B'A' + A'B'  =  BA + AB  =  AB + BA     ->  SYMMETRIC
```

### WORKED EXAMPLE 7.7  (orthogonal matrix)
Show that the matrix below is orthogonal, and write down its inverse.

```
       +---------------------------+
  A =  |  cos t      sin t         |
       | -sin t      cos t         |
       +---------------------------+

  A'  =  |  cos t     -sin t  |
         |  sin t      cos t  |

  A A' :
     (1,1) = cos t (cos t) + sin t (sin t) = cos^2 t + sin^2 t = 1
     (1,2) = cos t (-sin t) + sin t (cos t) = -sin t cos t + sin t cos t = 0
     (2,1) = -sin t (cos t) + cos t (sin t) = 0
     (2,2) = -sin t (-sin t) + cos t (cos t) = sin^2 t + cos^2 t = 1

     A A' = | 1   0 |  =  I        ->  A is ORTHOGONAL
            | 0   1 |

  For an orthogonal matrix,  A^-1 = A' , so

     A^-1 = |  cos t   -sin t |
            |  sin t    cos t |
```

Also det A = cos^2 t + sin^2 t = 1, which fits the rule **det of an orthogonal
matrix is +1 or -1**.

### Counting entries (a one-line EAPCET question)

```
  +-----------------------------------------------------------------+
  |  Independent entries in a SYMMETRIC   n x n matrix = n(n+1)/2   |
  |  Independent entries in a SKEW-SYM.   n x n matrix = n(n-1)/2   |
  +-----------------------------------------------------------------+

  For n = 3 :   symmetric  ->  3(4)/2 = 6      (3 diagonal + 3 above it)
                skew       ->  3(2)/2 = 3      (diagonal forced to 0)
```

---

# TOPIC 8 — Determinants

A **determinant** is a single NUMBER squeezed out of a SQUARE matrix.
Written det A or |A|. Note the straight bars, not square brackets.

## 2x2 — cross multiply and subtract

```
  | a   b |
  |       |  =  ad - bc
  | c   d |

          a       b
           \     /
            \   /            (down-right product) MINUS (down-left product)
             \ /
             / \
            /   \
          c       d
```

### WORKED EXAMPLE 8.0  (four quick 2x2s — do them in your head by the end)

```
  | 3   5 |  =  (3)(2)  -  (5)(4)   =   6 - 20  =  -14
  | 4   2 |

  | 2  -1 |  =  (2)(4)  -  (-1)(3)  =   8 + 3   =   11
  | 3   4 |

  | -5  2 |  =  (-5)(-1) - (2)(7)   =   5 - 14  =   -9
  |  7 -1 |

  | 6   9 |  =  (6)(3)  -  (9)(2)   =  18 - 18  =    0     <- SINGULAR
  | 2   3 |                                              (rows proportional)
```

> **TRAP:** `- (5)(4)` and `- (-1)(3)`. Write the minus sign FIRST, then the
> product, then simplify. Doing it in one jump is where the sign errors come from.

### WORKED EXAMPLE 8.0b  (determinant equation — a standard 2-mark question)

```
  | x+1    3 |
  |          |  =  0        Find x.
  |  2      x |

  (x + 1)(x) - (3)(2) = 0
         x^2 + x - 6 = 0
       (x + 3)(x - 2) = 0

       x = -3   or   x = 2

  CHECK x = 2 :  | 3  3 |  =  (3)(2) - (3)(2) = 0    YES
                 | 2  2 |
  CHECK x = -3:  | -2  3 |  =  (-2)(-3) - (3)(2) = 6 - 6 = 0   YES
                 |  2 -3 |
```

## 3x3 — expand along the first row using the sign pattern  + - +

```
  | a1  b1  c1 |
  | a2  b2  c2 |  =  a1 x |b2 c2|  -  b1 x |a2 c2|  +  c1 x |a2 b2|
  | a3  b3  c3 |          |b3 c3|          |a3 c3|          |a3 b3|
```

To get the small 2x2 determinant for an element:
**cover its row and its column**, and use whatever is left.

```
  For a1:  cover row 1 and column 1
                              | -   -   - |
                              | -  b2  c2 |    ->  left with  | b2  c2 |
                              | -  b3  c3 |                   | b3  c3 |
```

### WORKED EXAMPLE 8.1  (expand along ROW 1 — the default)

```
  | 1   2   3 |
  | 4   5   6 |  =  1(5x10 - 6x8) - 2(4x10 - 6x7) + 3(4x8 - 5x7)
  | 7   8  10 |

                  =  1(50 - 48) - 2(40 - 42) + 3(32 - 35)
                  =  1(2) - 2(-2) + 3(-3)
                  =  2 + 4 - 9
                  =  -3
```

### WORKED EXAMPLE 8.2  (the SAME determinant expanded along COLUMN 2)

You are allowed to expand along **any row or any column**. The answer must come
out the same. Here is the proof on the very same matrix.

```
  | 1   2   3 |
  | 4   5   6 |          Column 2 holds the entries  2 , 5 , 8
  | 7   8  10 |          sitting at positions (1,2) , (2,2) , (3,2).

  Signs from the board for column 2  :   -  ,  +  ,  -

         +-------------+
         |  +   -   +  |
         |  -   +   -  |          <- read the middle COLUMN downwards
         |  +   -   +  |
         +-------------+

  For 2 at (1,2) :  cover row 1 and column 2
         | -   -   - |
         | 4   -   6 |     minor  =  | 4    6 |  =  40 - 42  =  -2
         | 7   -  10 |               | 7   10 |

  For 5 at (2,2) :  cover row 2 and column 2
         | 1   -   3 |
         | -   -   - |     minor  =  | 1    3 |  =  10 - 21  = -11
         | 7   -  10 |               | 7   10 |

  For 8 at (3,2) :  cover row 3 and column 2
         | 1   -   3 |
         | 4   -   6 |     minor  =  | 1    3 |  =   6 - 12  =  -6
         | -   -   - |               | 4    6 |

  Now put the signs on:

     det  =  -(2)(-2)  +  (5)(-11)  -  (8)(-6)
          =     4      -     55     +     48
          =  -3
```

**Same answer, -3.** Row 1 gave -3, column 2 gave -3. That is the guarantee.

### WORKED EXAMPLE 8.3  (ALWAYS expand along the line with the most zeros)

```
  |  1    3   -2 |
  |  4    0    5 |          Column 2 has TWO zeros in it.
  | -3    0    7 |
```

**The lazy (correct) way — expand along column 2:**

```
  Only the entry 3 at position (1,2) survives; the other two are multiplied by 0.

  Sign at (1,2) is MINUS.

  minor of 3  =  cover row 1, column 2  =  |  4    5 |  =  28 - (-15)  =  43
                                           | -3    7 |

  det  =  -(3)(43)  =  -129
```

**The long way — expand along row 1, to prove it agrees:**

```
  det = 1 (0 x 7 - 5 x 0)  -  3 (4 x 7 - 5 x (-3))  +  (-2)(4 x 0 - 0 x (-3))
      = 1 (0 - 0)  -  3 (28 + 15)  +  (-2)(0 - 0)
      = 0  -  3(43)  +  0
      = -129                    SAME ANSWER
```

The first way needed ONE 2x2 determinant. The second needed three.
**Always scan for zeros before you start writing.**

### WORKED EXAMPLE 8.4  (triangular matrices are free marks)

```
  | 2    5   -3 |
  | 0    4    7 |          Expand along column 1: only the 2 survives.
  | 0    0    6 |

  det  =  +2 x | 4    7 |  =  2 (24 - 0)  =  48
               | 0    6 |

  And notice:  2 x 4 x 6  =  48.
```

```
  +--------------------------------------------------------------------+
  |  For an UPPER or LOWER TRIANGULAR matrix (and for a DIAGONAL one)  |
  |  the determinant is just the PRODUCT OF THE DIAGONAL ENTRIES.      |
  |                                                                    |
  |  So det(I) = 1 , and any triangular matrix with a 0 on the         |
  |  diagonal is SINGULAR.                                             |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 8.5  (create the zeros yourself, then expand)

Same matrix as 8.1, but done the smart way.

```
  | 1   2   3 |
  | 4   5   6 |
  | 7   8  10 |

  R2 -> R2 - 4 R1  :   (4-4 , 5-8 , 6-12)  =  (0, -3, -6)
  R3 -> R3 - 7 R1  :   (7-7 , 8-14, 10-21) =  (0, -6, -11)

  | 1    2     3  |
  | 0   -3    -6  |          These operations do NOT change the value.
  | 0   -6   -11  |

  Now expand along column 1 — only the 1 survives:

  det  =  1 x |  -3    -6 |  =  (-3)(-11) - (-6)(-6)  =  33 - 36  =  -3
              |  -6   -11 |

  SAME ANSWER, and only one 2x2 to compute.
```

## The sign board — never forget it

```
        +-------------+
        |  +   -   +  |
        |  -   +   -  |
        |  +   -   +  |
        +-------------+
```

## Properties that save time in the exam

```
  1.  Swap two rows (or two columns)       ->  determinant CHANGES SIGN
  2.  Two rows/columns identical or           ->  det = 0
      proportional
  3.  Any row/column is all zeros          ->  det = 0
  4.  det(A') = det(A)
  5.  Multiply one row by k                ->  determinant multiplied by k
      so  det(kA) = k^n x det(A)   for order n
  6.  Add a multiple of one row to another ->  determinant UNCHANGED
      (this is the trick used to create zeros before expanding)
  7.  det(AB) = det(A) x det(B)
  8.  det(I) = 1  ,  det(O) = 0
  9.  det(A^n) = [det(A)]^n
```

---

## EVERY PROPERTY, DEMONSTRATED ON REAL NUMBERS

Do not take these on trust. Here is each one happening. Throughout, the base matrix is

```
       +--------------+
  A =  | 1   2    3   |          det A = -3      (computed in 8.1)
       | 4   5    6   |
       | 7   8   10   |
       +--------------+
```

### DEMO 1 — swapping two rows flips the sign

```
  Swap R1 and R2 :

  | 4   5    6 |
  | 1   2    3 |  =  4(2x10 - 3x8) - 5(1x10 - 3x7) + 6(1x8 - 2x7)
  | 7   8   10 |

                  =  4(20 - 24) - 5(10 - 21) + 6(8 - 14)
                  =  4(-4) - 5(-11) + 6(-6)
                  = -16 + 55 - 36
                  =  +3

  Original was -3.  New is +3.       SIGN FLIPPED, size unchanged.
```

**Consequence:** swap TWICE and you are back to -3. An even number of swaps changes
nothing; an odd number flips the sign.

### DEMO 2 — two identical rows give 0

```
  Copy row 1 into row 2 :

  | 1   2    3 |
  | 1   2    3 |  =  1(2x10 - 3x8) - 2(1x10 - 3x7) + 3(1x8 - 2x7)
  | 7   8   10 |

                  =  1(20 - 24) - 2(10 - 21) + 3(8 - 14)
                  =  -4 + 22 - 18
                  =  0                          AS PROMISED
```

**And PROPORTIONAL rows do the same** (row 2 = 2 x row 1):

```
  | 1   2    3 |
  | 2   4    6 |  =  1(4x10 - 6x8) - 2(2x10 - 6x7) + 3(2x8 - 4x7)
  | 7   8   10 |

                  =  1(40 - 48) - 2(20 - 42) + 3(16 - 28)
                  =  -8 + 44 - 36
                  =  0                          AS PROMISED
```

> This is the single most useful property in the whole chapter. Before expanding
> ANY determinant, spend three seconds looking for a repeated or proportional
> row/column. If you find one, write "det = 0" and move on.

### DEMO 3 — a zero row gives 0

```
  | 1   2    3 |
  | 0   0    0 |  =  0(...) - 0(...) + 0(...)  =  0
  | 7   8   10 |

  Expand along the row of zeros. Every term has a factor 0. Done in one line.
```

### DEMO 4 — det(A') = det(A)

```
        +--------------+
   A' = | 1   4    7   |
        | 2   5    8   |
        | 3   6   10   |
        +--------------+

  det A' = 1(5x10 - 8x6) - 4(2x10 - 8x3) + 7(2x6 - 5x3)
         = 1(50 - 48) - 4(20 - 24) + 7(12 - 15)
         = 2 + 16 - 21
         = -3                                SAME as det A
```

**Why you care:** it means every row property is automatically also a column
property. You never have to learn two lists.

### DEMO 5 — multiplying ONE row by k multiplies the determinant by k

```
  Multiply row 1 by 5 :

  |  5   10   15 |
  |  4    5    6 |  =  5(5x10 - 6x8) - 10(4x10 - 6x7) + 15(4x8 - 5x7)
  |  7    8   10 |

                    =  5(2) - 10(-2) + 15(-3)
                    =  10 + 20 - 45
                    =  -15      =   5 x (-3)          CORRECT
```

**Now the famous consequence.** `3A` multiplies EVERY row by 3 — that is three
separate applications of the rule:

```
        +----------------+
   3A = |  3    6     9  |
        | 12   15    18  |
        | 21   24    30  |
        +----------------+

   det(3A)  =  3 x 3 x 3 x det A  =  27 x (-3)  =  -81

   General rule for order n :     det(kA)  =  k^n  x  det(A)
```

> **TRAP:** for a 3x3, det(3A) is **27** det A, not 3 det A. Students lose this
> mark constantly. The exponent is the ORDER of the matrix, not the power on A.

### DEMO 6 — adding a multiple of one row to another changes NOTHING

```
  R2 -> R2 - 4 R1 :   (4-4 , 5-8 , 6-12)   =  (0, -3, -6)
  R3 -> R3 - 7 R1 :   (7-7 , 8-14 , 10-21) =  (0, -6, -11)

  | 1    2     3 |
  | 0   -3    -6 |   =  1 x | -3    -6 |  =  33 - 36  =  -3
  | 0   -6   -11 |          | -6   -11 |

  Still -3.        THE VALUE DID NOT MOVE.
```

This is the engine of every 7-mark determinant proof: keep adding multiples of rows
until zeros appear, because it costs you nothing.

> **TRAP:** `R2 -> R2 - 4R1` is legal. `R2 -> 4R2 - R1` is NOT the same operation —
> it multiplies the determinant by 4. If you must use it, remember to divide by 4
> at the end. Safest habit: **always keep the coefficient of the row being changed
> equal to 1.**

### DEMO 7 — det(AB) = det(A) x det(B)

Use 2x2 matrices so you can check it in seconds.

```
       +-------+                    +-------+
  A =  | 1   2 |   det A = 4 - 6 = -2      B =  | 5   6 |   det B = 40 - 42 = -2
       | 3   4 |                                | 7   8 |
       +-------+                                +-------+

  AB  =  | 19   22 |      det(AB) = (19)(50) - (22)(43) = 950 - 946 = 4
         | 43   50 |

  det A x det B  =  (-2)(-2)  =  4                MATCHES
```

**Consequences you will use in MCQs:**

```
   det(A^2) = (det A)^2        det(A^n) = (det A)^n
   det(A^-1) = 1 / det(A)      because det(A) x det(A^-1) = det(I) = 1
```

### DEMO 8 — det(A + B) is NOT det A + det B

```
       +-------+           +-------+
  A =  | 1   0 |      B =  | 1   0 |        det A = 1 ,  det B = 1
       | 0   1 |           | 0   1 |
       +-------+           +-------+

  A + B  =  | 2   0 |        det(A + B) = 4
            | 0   2 |

  det A + det B  =  1 + 1  =  2      which is NOT 4.
```

> **TRAP:** determinants multiply nicely but they do NOT add. There is no formula
> for det(A + B). If an MCQ offers you one, it is the wrong option.

**Singular vs non-singular:**

```
  det A = 0        ->  SINGULAR       ->  no inverse exists
  det A not 0      ->  NON-SINGULAR   ->  inverse exists
```

### WORKED EXAMPLE 8.6  (find the parameter that makes it singular)

```
  |  1    2    3 |
  |  2    k    6 |   =  0        Find k.
  |  1    1    1 |
```

```
  Expand along row 1:

  det = 1(k x 1 - 6 x 1)  -  2(2 x 1 - 6 x 1)  +  3(2 x 1 - k x 1)
      = 1(k - 6)  -  2(2 - 6)  +  3(2 - k)
      = k - 6  +  8  +  6 - 3k
      = -2k + 8

  Set  -2k + 8 = 0   ->   k = 4

  CHECK with k = 4 :
     | 1  2  3 |
     | 2  4  6 |     row 2 = 2 x row 1   ->  det = 0        CONFIRMED
     | 1  1  1 |
```

---

# TOPIC 9 — Minors, cofactors, adjoint

```
  MINOR M(i,j)     =  the determinant left after DELETING row i and column j

  COFACTOR C(i,j)  =  (-1)^(i+j) x M(i,j)
                      i.e. the minor with the sign from the sign board

  COFACTOR MATRIX  =  replace every element by its cofactor

  ADJOINT adj A    =  TRANSPOSE of the cofactor matrix
```

> **BIGGEST MISTAKE IN THIS CHAPTER:** students forget the transpose at the last
> step. That single slip costs the whole 7-mark question.

**Shortcut for 2x2 only** — swap the diagonal, flip the sign of the off-diagonal:

```
       +-------+                    +--------+
  A =  | a   b |     ->     adj A = |  d  -b |
       | c   d |                    | -c   a |
       +-------+                    +--------+
```

**Master identity:**

```
  A x (adj A)  =  (adj A) x A  =  det(A) x I
```

### WORKED EXAMPLE 9.1  (one minor, one cofactor)

```
       +-----------------+
  A =  |  2   -1    4    |     Find the minor and the cofactor of the
       |  3    0    5    |     element in row 2, column 3  (that is, 5).
       |  1    6   -2    |
       +-----------------+
```

```
  MINOR M(2,3) :  delete row 2 and delete column 3

        | 2   -1    - |
        | -    -    - |     what is left  =  | 2   -1 |
        | 1    6    - |                      | 1    6 |

        M(2,3) = (2)(6) - (-1)(1) = 12 + 1 = 13

  COFACTOR C(2,3) :  apply the sign  (-1)^(2+3) = (-1)^5 = -1

        C(2,3) = -13
```

> **TRAP:** minor and cofactor are DIFFERENT numbers whenever i + j is odd.
> Read which one the question wants.

### WORKED EXAMPLE 9.2  (ALL NINE COFACTORS, then the adjoint)

This is the full 7-mark skeleton. Learn the layout, not the numbers.

```
       +-----------------+
  A =  |  1    2    3    |
       |  2    3    2    |
       |  3    3    4    |
       +-----------------+
```

**STEP 1 — the determinant** (you need it later anyway)

```
  det A = 1(3x4 - 2x3) - 2(2x4 - 2x3) + 3(2x3 - 3x3)
        = 1(12 - 6) - 2(8 - 6) + 3(6 - 9)
        = 6 - 4 - 9
        = -7                    (not zero, so the inverse will exist)
```

**STEP 2 — all nine cofactors, written out in order**

Remember the sign board:

```
        +-------------+
        |  +   -   +  |
        |  -   +   -  |
        |  +   -   +  |
        +-------------+
```

```
  ROW 1
  -----
  C(1,1) = +  | 3   2 |  =  + (3x4 - 2x3)   =  + (12 - 6)   =   6
              | 3   4 |

  C(1,2) = -  | 2   2 |  =  - (2x4 - 2x3)   =  - (8 - 6)    =  -2
              | 3   4 |

  C(1,3) = +  | 2   3 |  =  + (2x3 - 3x3)   =  + (6 - 9)    =  -3
              | 3   3 |

  ROW 2
  -----
  C(2,1) = -  | 2   3 |  =  - (2x4 - 3x3)   =  - (8 - 9)    =   1
              | 3   4 |

  C(2,2) = +  | 1   3 |  =  + (1x4 - 3x3)   =  + (4 - 9)    =  -5
              | 3   4 |

  C(2,3) = -  | 1   2 |  =  - (1x3 - 2x3)   =  - (3 - 6)    =   3
              | 3   3 |

  ROW 3
  -----
  C(3,1) = +  | 2   3 |  =  + (2x2 - 3x3)   =  + (4 - 9)    =  -5
              | 3   2 |

  C(3,2) = -  | 1   3 |  =  - (1x2 - 3x2)   =  - (2 - 6)    =   4
              | 2   2 |

  C(3,3) = +  | 1   2 |  =  + (1x3 - 2x2)   =  + (3 - 4)    =  -1
              | 2   3 |
```

**STEP 3 — assemble the cofactor matrix**

```
                        +-----------------+
  cofactor matrix  =    |  6   -2    -3   |
                        |  1   -5     3   |
                        | -5    4    -1   |
                        +-----------------+
```

**STEP 4 — TRANSPOSE it. This is the step everybody forgets.**

```
        +-----------------+                +-----------------+
        |  6   -2    -3   |                |  6    1    -5   |
        |  1   -5     3   |    ------->    | -2   -5     4   |   =  adj A
        | -5    4    -1   |   transpose    | -3    3    -1   |
        +-----------------+                +-----------------+

  Row 1 of the cofactor matrix ( 6, -2, -3 )  became COLUMN 1 of adj A.
```

**STEP 5 — check with the master identity  A (adj A) = det(A) I**

```
  Columns of adj A :  c1 = (6, -2, -3) ,  c2 = (1, -5, 3) ,  c3 = (-5, 4, -1)

  row 1 of A = (1, 2, 3) :
      with c1 :   6  -  4  -  9  =  -7          <- det A on the diagonal
      with c2 :   1  - 10  +  9  =   0
      with c3 :  -5  +  8  -  3  =   0

  row 2 of A = (2, 3, 2) :
      with c1 :  12  -  6  -  6  =   0
      with c2 :   2  - 15  +  6  =  -7          <- det A
      with c3 : -10  + 12  -  2  =   0

  row 3 of A = (3, 3, 4) :
      with c1 :  18  -  6  - 12  =   0
      with c2 :   3  - 15  + 12  =   0
      with c3 : -15  + 12  -  4  =  -7          <- det A

              +-----------------+
  A (adj A) = | -7    0     0   |  =  -7 I  =  (det A) I       CORRECT
              |  0   -7     0   |
              |  0    0    -7   |
              +-----------------+
```

**If the off-diagonal entries are not all zero, you have made an arithmetic slip.
Go back and find it before continuing — this check takes one minute and protects
seven marks.**

### WORKED EXAMPLE 9.3  (why the off-diagonal zeros appear)

The zeros are not luck. They are this rule:

```
  +-------------------------------------------------------------------+
  |  a(i,1)C(i,1) + a(i,2)C(i,2) + a(i,3)C(i,3)  =  det A             |
  |     (a row multiplied by ITS OWN cofactors)                       |
  |                                                                   |
  |  a(i,1)C(j,1) + a(i,2)C(j,2) + a(i,3)C(j,3)  =  0    when i =/= j |
  |     (a row multiplied by ANOTHER row's cofactors)                 |
  +-------------------------------------------------------------------+
```

Check it on the matrix above, using row 1 with row 2's cofactors:

```
  a(1,1)C(2,1) + a(1,2)C(2,2) + a(1,3)C(2,3)
     = (1)(1)  +  (2)(-5)  +  (3)(3)
     =    1    -    10     +    9
     =    0                              EXACTLY AS THE RULE SAYS
```

### WORKED EXAMPLE 9.4  (the 2x2 shortcut, checked)

```
       +---------+
  A =  |  4    7 |          det A = 4(6) - 7(5) = 24 - 35 = -11
       |  5    6 |
       +---------+

  Swap the diagonal (4 and 6), flip the sign of the other two (7 and 5):

              +----------+
   adj A  =   |  6   -7  |
              | -5    4  |
              +----------+

  CHECK :  A (adj A) = |  4(6)+7(-5)    4(-7)+7(4) |  =  | 24-35     -28+28 |
                       |  5(6)+6(-5)    5(-7)+6(4) |     | 30-30     -35+24 |

                     = | -11     0  |  =  -11 I  =  (det A) I      CORRECT
                       |   0   -11  |
```

### Useful adjoint formulas (mostly for objective papers)

```
   det(adj A)   =  (det A)^(n-1)          for order n
   adj(AB)      =  (adj B)(adj A)         order reverses, like transpose
   adj(kA)      =  k^(n-1) adj A
   adj(A')      =  (adj A)'
   A is singular  ->  det(adj A) = 0
```

**Numeric check of the first one** on our 3x3 (n = 3, det A = -7, so we expect 49):

```
        +-----------------+
  adj A=|  6    1    -5   |
        | -2   -5     4   |
        | -3    3    -1   |
        +-----------------+

  det(adj A) = 6[(-5)(-1) - (4)(3)]  -  1[(-2)(-1) - (4)(-3)]  +  (-5)[(-2)(3) - (-5)(-3)]
             = 6[5 - 12]  -  1[2 + 12]  +  (-5)[-6 - 15]
             = 6(-7)  -  14  +  (-5)(-21)
             = -42 - 14 + 105
             = 49        =  (-7)^2        CORRECT
```

---

# TOPIC 10 — Inverse of a matrix

```
      +----------------------------+
      |            adj A           |
      |   A^-1  =  -------         |     exists ONLY when det A is not 0
      |            det A           |
      +----------------------------+

  Check:   A x A^-1  =  A^-1 x A  =  I
```

Properties:

```
  (A^-1)^-1  =  A
  (AB)^-1    =  B^-1 A^-1      <-- order reverses, just like transpose
  (A')^-1    =  (A^-1)'
  det(A^-1)  =  1 / det(A)
  (kA)^-1    =  (1/k) A^-1
  (A^n)^-1   =  (A^-1)^n
  I^-1 = I
```

### WORKED EXAMPLE 10.1  (2x2, determinant happens to be 1)

```
       +-------+
  A =  | 2   1 |      det A = (2)(4) - (1)(7) = 8 - 7 = 1
       | 7   4 |
       +-------+
                      +--------+
             adj A =  |  4  -1 |      (swap diagonal, flip off-diagonal)
                      | -7   2 |
                      +--------+

                      +--------+
             A^-1  =  |  4  -1 |      (divide by det A = 1)
                      | -7   2 |
                      +--------+

  CHECK :  A A^-1 = | 2(4)+1(-7)    2(-1)+1(2) |  =  | 8-7    -2+2 |  =  | 1  0 |
                    | 7(4)+4(-7)    7(-1)+4(2) |     | 28-28  -7+8 |     | 0  1 |
```

### WORKED EXAMPLE 10.2  (2x2 with a real fraction out front)

```
       +---------+
  A =  |  3   1  |      det A = (3)(4) - (1)(2) = 12 - 2 = 10
       |  2   4  |
       +---------+

              +----------+
   adj A  =   |  4   -1  |
              | -2    3  |
              +----------+

              1     +----------+          +-------------------+
   A^-1  =  ----- x |  4   -1  |    =     |  4/10     -1/10   |
             10     | -2    3  |          | -2/10      3/10   |
                    +----------+          +-------------------+

                                          +-------------------+
                                     =    |  2/5      -1/10   |
                                          | -1/5       3/10   |
                                          +-------------------+

  CHECK the un-divided version first (much easier):

     A (adj A) = | 3(4)+1(-2)   3(-1)+1(3) |  =  | 12-2    -3+3 |  =  | 10   0 |
                 | 2(4)+4(-2)   2(-1)+4(3) |     |  8-8    -2+12|     |  0  10 |

               = 10 I  =  (det A) I           CORRECT
```

> **EXAM TIP:** leave the answer as `(1/10) x [matrix]`. Do NOT convert to decimals.
> The examiner wants to see the fraction outside the bracket.

### WORKED EXAMPLE 10.3  (the full 3x3 inverse)

Carry straight on from WORKED EXAMPLE 9.2, where we already found

```
   det A = -7                +-----------------+
                     adj A = |  6    1    -5   |
                             | -2   -5     4   |
                             | -3    3    -1   |
                             +-----------------+
```

```
                    1      +-----------------+
      A^-1  =    -------  x|  6    1    -5   |
                   (-7)    | -2   -5     4   |
                           | -3    3    -1   |
                           +-----------------+


  Preferred way to write it (push the minus inside so the fraction is positive):

                    1      +-----------------+
      A^-1  =    -------  x| -6   -1     5   |
                    7      |  2    5    -4   |
                           |  3   -3     1   |
                           +-----------------+
```

**Verification** — we already showed A (adj A) = -7 I in Example 9.2. Dividing that
whole equation by -7 gives A A^-1 = I. Nothing more to do.

### WORKED EXAMPLE 10.4  (inverse WITHOUT any cofactors)

Sometimes the question hands you a polynomial the matrix satisfies. Then the inverse
falls out in three lines and you never touch a cofactor.

```
       +-----------------+
  A =  |  1    2    2    |     Show A^2 - 4A - 5I = O, hence find A^-1.
       |  2    1    2    |
       |  2    2    1    |
       +-----------------+
```

```
  STEP 1 — compute A^2

    row 1 (1,2,2) with column 1 (1,2,2) :  1 + 4 + 4 = 9
    row 1 (1,2,2) with column 2 (2,1,2) :  2 + 2 + 4 = 8
    row 1 (1,2,2) with column 3 (2,2,1) :  2 + 4 + 2 = 8

    A is symmetric, so the pattern repeats:

          +-----------+
    A^2 = | 9   8   8 |
          | 8   9   8 |
          | 8   8   9 |
          +-----------+

  STEP 2 — subtract

          +-----------+          +-----------+
    4A =  | 4   8   8 |    5I =  | 5   0   0 |
          | 8   4   8 |          | 0   5   0 |
          | 8   8   4 |          | 0   0   5 |
          +-----------+          +-----------+

    A^2 - 4A - 5I  :
        (1,1) :  9 - 4 - 5 = 0        (1,2) :  8 - 8 - 0 = 0
        (2,2) :  9 - 4 - 5 = 0        (2,3) :  8 - 8 - 0 = 0
        ... every entry is 0

    A^2 - 4A - 5I = O           PROVED

  STEP 3 — multiply the whole equation by A^-1

        A^2 A^-1  -  4A A^-1  -  5I A^-1  =  O A^-1
             A    -    4I     -   5 A^-1  =  O
                            5 A^-1        =  A - 4I
                              A^-1        =  (1/5)(A - 4I)

                    1     +-----------------+
        A^-1  =  ------- x| -3    2     2   |
                    5     |  2   -3     2   |
                          |  2    2    -3   |
                          +-----------------+

  CHECK :  A x (A - 4I) should give 5I.

     row 1 of A (1,2,2) with column 1 of (A-4I) which is (-3,2,2) :
              -3 + 4 + 4 = 5          <- 5 on the diagonal, good
     row 1 with column 2 (2,-3,2) :  2 - 6 + 4 = 0
     row 1 with column 3 (2,2,-3) :  2 + 4 - 6 = 0

     So A(A - 4I) = 5I , i.e. A x (1/5)(A - 4I) = I.        CORRECT
```

> **This trick works every single time** the question says *"show that A satisfies
> ... hence find A^-1"*. Multiply through by A^-1, then make A^-1 the subject.

### WORKED EXAMPLE 10.5  (when there is NO inverse)

```
       +-----------+
  A =  | 1   2   3 |
       | 2   4   6 |          Find A^-1 if it exists.
       | 1   1   1 |
       +-----------+
```

```
  Row 2 = 2 x Row 1     ->    det A = 0     ->    A is SINGULAR

  A^-1 DOES NOT EXIST.
```

That two-line answer is worth full marks. **Always compute det A first** — if it is
zero, you must stop, and any cofactor work after that earns nothing.

---

# TOPIC 11 — Rank of a matrix

**Plain idea:** rank = how many rows are GENUINELY different from each other.

**Formal definition:** the order of the LARGEST square submatrix whose determinant
is not zero.

Written rank(A). Always rank(A) <= smaller of (m, n). And rank(O) = 0.

## Method for a 3x3 matrix — check from the top down

```
  STEP 1   Is det A not equal to 0 ?   ->  RANK = 3.  Stop.
             |
             | (det A = 0)
             v
  STEP 2   Find ANY 2x2 submatrix with
           determinant not equal to 0 ?  ->  RANK = 2.  Stop.
             |
             | (all 2x2 minors = 0)
             v
  STEP 3   Is some element not zero ?    ->  RANK = 1.
             |
             v
  STEP 4   All elements zero             ->  RANK = 0.
```

### WORKED EXAMPLE 11.1  (the minor method)

```
       +-----------+
  A =  | 1   2   3 |
       | 2   4   6 |     Notice: Row 2 = 2 x Row 1
       | 1   1   1 |
       +-----------+

  So det A = 0  ->  rank is less than 3.

  Try any 2x2:   | 1   2 |  =  (1)(1) - (2)(1)  =  -1     (not zero)
                 | 1   1 |

  ->  RANK = 2
```

### WORKED EXAMPLE 11.2  (rank 3 — stop at step 1)

```
       +--------------+
  A =  | 1    4   -1  |
       | 2    3    0  |
       | 0    1    2  |
       +--------------+

  det A = 1(3x2 - 0x1) - 4(2x2 - 0x0) + (-1)(2x1 - 3x0)
        = 1(6 - 0) - 4(4 - 0) - 1(2 - 0)
        = 6 - 16 - 2
        = -12          (not zero)

  ->  RANK = 3.   No further work needed.
```

---

## THE ECHELON-FORM METHOD — write this out properly

For anything bigger than 3x3, or for a rectangular matrix, hunting through minors is
hopeless. Row-reduce instead.

**The three legal row operations (they never change the rank):**

```
  1.  Swap two rows                       Ri  <->  Rj
  2.  Multiply a row by a non-zero number Ri  ->   k Ri     (k not 0)
  3.  Add a multiple of one row to another Ri ->   Ri + k Rj
```

**Echelon form** means a staircase of zeros:

```
       +---------------------+
       | *    *    *    *    |      * = the leading (first non-zero) entry
       | 0    *    *    *    |
       | 0    0    *    *    |      each leading entry is strictly further
       | 0    0    0    0    |      RIGHT than the one above it, and any
       +---------------------+      all-zero rows sit at the BOTTOM
```

```
  +-----------------------------------------------------------------+
  |   RANK  =  the number of NON-ZERO ROWS in the echelon form      |
  +-----------------------------------------------------------------+
```

### WORKED EXAMPLE 11.3  (every row operation written out)

```
       +-----------+
  A =  | 1   2   3 |     Find the rank.
       | 2   3   4 |
       | 0   1   2 |
       +-----------+
```

```
  START
       | 1   2   3 |
       | 2   3   4 |
       | 0   1   2 |


  R2 -> R2 - 2 R1        ( 2-2 ,  3-4 ,  4-6 )  =  ( 0 , -1 , -2 )

       | 1    2    3 |
       | 0   -1   -2 |
       | 0    1    2 |

       (R3 already starts with 0, so nothing to do to it yet.)


  R3 -> R3 + R2          ( 0+0 ,  1-1 ,  2-2 )  =  ( 0 ,  0 ,  0 )

       | 1    2    3 |
       | 0   -1   -2 |          <-- ECHELON FORM
       | 0    0    0 |


  Non-zero rows = 2         ->    RANK = 2
```

**Cross-check with the minor method:**

```
  det A = 1(3x2 - 4x1) - 2(2x2 - 4x0) + 3(2x1 - 3x0)
        = 1(6 - 4) - 2(4 - 0) + 3(2 - 0)
        = 2 - 8 + 6  =  0            ->  rank < 3

  2x2 minor  | 1   2 |  =  3 - 4  =  -1   (not 0)     ->  rank = 2    SAME
             | 2   3 |
```

### WORKED EXAMPLE 11.4  (rank 3 by echelon)

```
       +-------------+
  A =  | 1   2    3  |
       | 2   5    7  |
       | 3   7   11  |
       +-------------+
```

```
  R2 -> R2 - 2 R1     ( 2-2 , 5-4 ,  7-6  )  =  ( 0 , 1 , 1 )
  R3 -> R3 - 3 R1     ( 3-3 , 7-6 , 11-9  )  =  ( 0 , 1 , 2 )

       | 1   2   3 |
       | 0   1   1 |
       | 0   1   2 |

  R3 -> R3 - R2       ( 0-0 , 1-1 ,  2-1  )  =  ( 0 , 0 , 1 )

       | 1   2   3 |
       | 0   1   1 |          <-- ECHELON FORM, three non-zero rows
       | 0   0   1 |

  RANK = 3
```

(And indeed det A = 1(55 - 49) - 2(22 - 21) + 3(14 - 15) = 6 - 2 - 3 = 1, not zero.)

### WORKED EXAMPLE 11.5  (a rectangular 3x4 — minors would be a nightmare)

```
       +------------------+
  A =  | 1   2   -1    3  |
       | 2   4    1   -2  |
       | 3   6    3   -7  |
       +------------------+
```

```
  R2 -> R2 - 2 R1    ( 2-2 , 4-4 , 1+2 , -2-6  )  =  ( 0 , 0 ,  3 ,  -8 )
  R3 -> R3 - 3 R1    ( 3-3 , 6-6 , 3+3 , -7-9  )  =  ( 0 , 0 ,  6 , -16 )

       | 1   2   -1     3 |
       | 0   0    3    -8 |
       | 0   0    6   -16 |

  R3 -> R3 - 2 R2    ( 0 , 0 , 6-6 , -16+16 )  =  ( 0 , 0 , 0 , 0 )

       | 1   2   -1     3 |
       | 0   0    3    -8 |          <-- ECHELON FORM
       | 0   0    0     0 |

  RANK = 2
```

Sanity check: rank cannot exceed the smaller of (3, 4) = 3. We got 2. Fine.

### WORKED EXAMPLE 11.6  (a 4x4 — echelon is the only sane route)

```
       +---------------------+
  A =  | 0    1   -3   -1    |
       | 1    0    1    1    |
       | 3    1    0    2    |
       | 1    1   -2    0    |
       +---------------------+
```

```
  R1 <-> R2      (get a 1 into the top-left corner)

       | 1    0    1    1 |
       | 0    1   -3   -1 |
       | 3    1    0    2 |
       | 1    1   -2    0 |

  R3 -> R3 - 3 R1    ( 3-3 , 1-0 , 0-3 , 2-3 )  =  ( 0 , 1 , -3 , -1 )
  R4 -> R4 -   R1    ( 1-1 , 1-0 , -2-1 , 0-1 ) =  ( 0 , 1 , -3 , -1 )

       | 1    0    1    1 |
       | 0    1   -3   -1 |
       | 0    1   -3   -1 |
       | 0    1   -3   -1 |

  R3 -> R3 - R2   ->  ( 0, 0, 0, 0 )
  R4 -> R4 - R2   ->  ( 0, 0, 0, 0 )

       | 1    0    1    1 |
       | 0    1   -3   -1 |          <-- ECHELON FORM
       | 0    0    0    0 |
       | 0    0    0    0 |

  RANK = 2
```

### WORKED EXAMPLE 11.7  (rank 1)

```
       +-----------+
  A =  | 2   4   6 |
       | 1   2   3 |          Every row is a multiple of ( 1 , 2 , 3 ).
       | 3   6   9 |
       +-----------+

  R1 -> R1 - 2 R2   ->  ( 0, 0, 0 )
  R3 -> R3 - 3 R2   ->  ( 0, 0, 0 )
  then swap the surviving row to the top:

       | 1   2   3 |
       | 0   0   0 |          one non-zero row
       | 0   0   0 |

  RANK = 1
```

### WORKED EXAMPLE 11.8  (rank with a parameter)

```
       +--------------+
  A =  | 1   -1    2  |     Find k so that rank(A) = 2.
       | 3   -2    5  |
       | 2   -1    k  |
       +--------------+
```

```
  rank 2 means det A = 0 (so it is not 3) but some 2x2 minor is non-zero.

  det A = 1( -2k - 5(-1) )  -  (-1)( 3k - 5(2) )  +  2( 3(-1) - (-2)(2) )
        = 1( -2k + 5 )  +  ( 3k - 10 )  +  2( -3 + 4 )
        = -2k + 5 + 3k - 10 + 2
        = k - 3

  Set  k - 3 = 0   ->   k = 3

  Confirm the rank is exactly 2, not less:
        | 1   -1 |  =  (1)(-2) - (-1)(3)  =  -2 + 3  =  1     (not zero)
        | 3   -2 |

  ->  for k = 3 , RANK = 2.   For every other k , RANK = 3.
```

### Rank facts worth quoting

```
  rank(A)  <=  smaller of (m , n)
  rank(O)   =  0        (the ONLY matrix with rank 0)
  rank(A)   =  rank(A')
  rank(I n) =  n
  A is a non-singular n x n matrix  <->  rank(A) = n
```

> **TRAP:** rank is a whole number counting rows, never a fraction and never
> negative. If your answer is not one of 0, 1, 2, 3 for a 3x3, you have slipped.

---

# TOPIC 12 — Solving 3 equations in 3 unknowns (the 7-mark question)

Given:

```
  a1 x + b1 y + c1 z = d1
  a2 x + b2 y + c2 z = d2
  a3 x + b3 y + c3 z = d3
```

Write it as **A X = B** where:

```
       +-------------+          +-----+          +-----+
  A =  | a1  b1  c1  |     X =  |  x  |     B =  | d1  |
       | a2  b2  c2  |          |  y  |          | d2  |
       | a3  b3  c3  |          |  z  |          | d3  |
       +-------------+          +-----+          +-----+
   coefficient matrix         unknowns         constants
```

## METHOD A — Matrix Inversion Method

```
                   1
   X = A^-1 B = ------- x (adj A) x B
                 det A
```

Steps: find det A -> find all 9 cofactors -> write cofactor matrix ->
**TRANSPOSE it** to get adj A -> multiply by B -> divide by det A.

## METHOD B — Cramer's Rule  (EASIEST — recommended for a weak student)

```
         D1              D2              D3
   x = ------      y = ------      z = ------      where D = det A
          D               D               D
```

D1, D2, D3 are D with the **1st, 2nd, 3rd column replaced by B**:

```
   D  =  | a1  b1  c1 |        D1 =  | d1  b1  c1 |     <- column 1 replaced
         | a2  b2  c2 |              | d2  b2  c2 |
         | a3  b3  c3 |              | d3  b3  c3 |

   D2 =  | a1  d1  c1 |        D3 =  | a1  b1  d1 |
         | a2  d2  c2 |              | a2  b2  d2 |
         | a3  d3  c3 |              | a3  b3  d3 |
          ^ column 2 replaced                  ^ column 3 replaced
```

Only four 3x3 determinants. No transposes. No cofactor matrix.

## METHOD C — Gauss-Jordan Method

Write the augmented matrix [ A | B ], then use ROW OPERATIONS ONLY until the
left side becomes I. Whatever is on the right is then x, y, z.

```
  +--------------------+                    +-----------------+
  | a1  b1  c1  |  d1  |     row            | 1  0  0  |  x   |
  | a2  b2  c2  |  d2  |  operations  --->  | 0  1  0  |  y   |
  | a3  b3  c3  |  d3  |                    | 0  0  1  |  z   |
  +--------------------+                    +-----------------+
```

## Which one do I use?

The board question usually says *"Solve by matrix inversion method"* or
*"by Cramer's rule"* or *"by Gauss-Jordan method"*.
**You MUST use the named method.** If it just says "solve", pick Cramer.

---

## ONE SYSTEM, ALL THREE METHODS, FULLY WORKED

Every step below is for the same system, so you can compare the methods honestly.

```
        x  +  y  +  z  =  9
       2x  + 5y  + 7z  =  52
       2x  +  y  -  z  =  0
```

```
       +--------------+          +-----+          +------+
  A =  | 1   1    1   |     X =  |  x  |     B =  |   9  |
       | 2   5    7   |          |  y  |          |  52  |
       | 2   1   -1   |          |  z  |          |   0  |
       +--------------+          +-----+          +------+
```

---

### METHOD A — MATRIX INVERSION, every step

**STEP 1 — det A**

```
  det A = 1( 5(-1) - 7(1) )  -  1( 2(-1) - 7(2) )  +  1( 2(1) - 5(2) )
        = 1( -5 - 7 )  -  1( -2 - 14 )  +  1( 2 - 10 )
        = -12  +  16  -  8
        = -4                     (not zero -> a unique solution exists)
```

**STEP 2 — all nine cofactors**

```
  C(1,1) = + | 5   7 |  =  + ( 5(-1) - 7(1) )   =  -5 - 7    =  -12
             | 1  -1 |

  C(1,2) = - | 2   7 |  =  - ( 2(-1) - 7(2) )   =  -(-2 - 14) =   16
             | 2  -1 |

  C(1,3) = + | 2   5 |  =  + ( 2(1) - 5(2) )    =   2 - 10   =   -8
             | 2   1 |

  C(2,1) = - | 1   1 |  =  - ( 1(-1) - 1(1) )   =  -(-1 - 1)  =    2
             | 1  -1 |

  C(2,2) = + | 1   1 |  =  + ( 1(-1) - 1(2) )   =  -1 - 2    =   -3
             | 2  -1 |

  C(2,3) = - | 1   1 |  =  - ( 1(1) - 1(2) )    =  -(1 - 2)   =    1
             | 2   1 |

  C(3,1) = + | 1   1 |  =  + ( 1(7) - 1(5) )    =   7 - 5    =    2
             | 5   7 |

  C(3,2) = - | 1   1 |  =  - ( 1(7) - 1(2) )    =  -(7 - 2)   =   -5
             | 2   7 |

  C(3,3) = + | 1   1 |  =  + ( 1(5) - 1(2) )    =   5 - 2    =    3
             | 2   5 |
```

**STEP 3 — cofactor matrix, then TRANSPOSE**

```
   cofactor matrix                 adj A  (= its transpose)
   +-------------------+           +-------------------+
   | -12    16    -8   |           | -12     2     2   |
   |   2    -3     1   |   ---->   |  16    -3    -5   |
   |   2    -5     3   |           |  -8     1     3   |
   +-------------------+           +-------------------+
                                   ^^^ THE TRANSPOSE. DO NOT SKIP IT.
```

Quick safety check with the master identity, using row 1 of A = (1, 1, 1):

```
   with column 1 of adj A (-12, 16, -8) :  -12 + 16 - 8  =  -4   = det A   GOOD
   with column 2 of adj A (  2, -3,  1) :    2 -  3 + 1  =   0            GOOD
   with column 3 of adj A (  2, -5,  3) :    2 -  5 + 3  =   0            GOOD
```

**STEP 4 — X = (1 / det A) x (adj A) x B**

```
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
```

**STEP 5 — CHECK in all three original equations (30 seconds)**

```
    1 +  3 +  5  =  9        YES
   2(1) + 5(3) + 7(5)  =  2 + 15 + 35  =  52     YES
   2(1) +   3  -   5   =  2 +  3 -  5  =   0     YES
```

---

### METHOD B — CRAMER'S RULE, every step

Four determinants, nothing else.

```
        | 1   1    1 |
   D =  | 2   5    7 |  =  1(-5 - 7) - 1(-2 - 14) + 1(2 - 10)
        | 2   1   -1 |

                       =  -12 + 16 - 8   =   -4
```

```
   D1  =  D with COLUMN 1 replaced by ( 9 , 52 , 0 ) :

        |  9   1    1 |
        | 52   5    7 |  =  9( 5(-1) - 7(1) ) - 1( 52(-1) - 7(0) ) + 1( 52(1) - 5(0) )
        |  0   1   -1 |

                        =  9(-12)  -  1(-52)  +  1(52)
                        =  -108 + 52 + 52
                        =  -4
                                        -4
                        ->    x  =    ------   =   1
                                        -4
```

```
   D2  =  D with COLUMN 2 replaced by ( 9 , 52 , 0 ) :

        | 1    9    1 |
        | 2   52    7 |  = 1( 52(-1) - 7(0) ) - 9( 2(-1) - 7(2) ) + 1( 2(0) - 52(2) )
        | 2    0   -1 |

                        = 1(-52)  -  9(-16)  +  1(-104)
                        = -52 + 144 - 104
                        = -12
                                       -12
                        ->    y  =   -------  =   3
                                        -4
```

```
   D3  =  D with COLUMN 3 replaced by ( 9 , 52 , 0 ) :

        | 1   1    9 |
        | 2   5   52 |  = 1( 5(0) - 52(1) ) - 1( 2(0) - 52(2) ) + 9( 2(1) - 5(2) )
        | 2   1    0 |

                        = 1(-52)  -  1(-104)  +  9(-8)
                        = -52 + 104 - 72
                        = -20
                                       -20
                        ->    z  =   -------  =   5
                                        -4
```

```
   ANSWER:  x = 1 ,  y = 3 ,  z = 5        (same as Method A)
```

> **Cramer is the safest method for a weak student.** There is no transpose to
> forget and no cofactor sign board to get wrong — just four determinants of the
> kind you already practise in Section A.

---

### METHOD C — GAUSS-JORDAN, every row operation written out

Build the augmented matrix and drive the LEFT block to I.

```
  START                                   [ A | B ]

     +----------------------+
     |  1    1    1   |   9 |     R1
     |  2    5    7   |  52 |     R2
     |  2    1   -1   |   0 |     R3
     +----------------------+


  STEP 1   make column 1 into ( 1 , 0 , 0 )

     R2 -> R2 - 2 R1 :   ( 2-2 , 5-2 , 7-2 | 52-18 )  =  ( 0 ,  3 ,  5 |  34 )
     R3 -> R3 - 2 R1 :   ( 2-2 , 1-2 ,-1-2 |  0-18 )  =  ( 0 , -1 , -3 | -18 )

     +----------------------+
     |  1    1    1   |   9 |
     |  0    3    5   |  34 |
     |  0   -1   -3   | -18 |
     +----------------------+


  STEP 2   get a 1 in the (2,2) position

     R2 <-> R3          (swap, so the -1 comes up)

     +----------------------+
     |  1    1    1   |   9 |
     |  0   -1   -3   | -18 |
     |  0    3    5   |  34 |
     +----------------------+

     R2 -> (-1) R2 :    ( 0 , 1 , 3 | 18 )

     +----------------------+
     |  1    1    1   |   9 |
     |  0    1    3   |  18 |
     |  0    3    5   |  34 |
     +----------------------+


  STEP 3   clear the rest of column 2

     R1 -> R1 - R2   :  ( 1 , 1-1 , 1-3 |  9-18 )  =  ( 1 , 0 , -2 |  -9 )
     R3 -> R3 - 3 R2 :  ( 0 , 3-3 , 5-9 | 34-54 )  =  ( 0 , 0 , -4 | -20 )

     +----------------------+
     |  1    0   -2   |  -9 |
     |  0    1    3   |  18 |
     |  0    0   -4   | -20 |
     +----------------------+


  STEP 4   get a 1 in the (3,3) position

     R3 -> R3 / (-4) :  ( 0 , 0 , 1 | 5 )

     +----------------------+
     |  1    0   -2   |  -9 |
     |  0    1    3   |  18 |
     |  0    0    1   |   5 |
     +----------------------+


  STEP 5   clear the rest of column 3

     R1 -> R1 + 2 R3 :  ( 1 , 0 , -2+2 |  -9+10 )  =  ( 1 , 0 , 0 |  1 )
     R2 -> R2 - 3 R3 :  ( 0 , 1 ,  3-3 |  18-15 )  =  ( 0 , 1 , 0 |  3 )

     +----------------------+
     |  1    0    0   |   1 |
     |  0    1    0   |   3 |
     |  0    0    1   |   5 |
     +----------------------+

     The left block is now I.

     READ OFF:     x = 1 ,   y = 3 ,   z = 5
```

> **TRAP:** in Gauss-Jordan you may use ROW operations only. A column operation
> mixes up the unknowns and destroys the answer.

> **TRAP:** whatever you do to the left of the bar you MUST do to the right of it.
> The commonest slip is forgetting to update the constant column.

```
  +--------------------------------------------------------------------+
  |  THE ORDER TO CLEAR THE COLUMNS - memorise this march:             |
  |                                                                    |
  |     column 1  ->  column 2  ->  column 3                           |
  |     first make the pivot 1, THEN kill everything else in           |
  |     that column (above AND below).                                 |
  +--------------------------------------------------------------------+
```

---

### A SECOND FULLY WORKED SYSTEM (Cramer)

```
        2x  -  y  + 3z  =  9
         x  +  y  +  z  =  6
         x  -  y  +  z  =  2
```

```
        |  2  -1   3 |
   D =  |  1   1   1 |  =  2(1 + 1)  + 1(1 - 1)  + 3(-1 - 1)
        |  1  -1   1 |

                       =  2(2) + 1(0) + 3(-2)  =  4 + 0 - 6  =  -2


        |  9  -1   3 |
   D1 = |  6   1   1 |  =  9(1 + 1)  + 1(6 - 2)  + 3(-6 - 2)
        |  2  -1   1 |

                       =  18 + 4 - 24  =  -2         ->  x = -2 / -2 = 1


        |  2   9   3 |
   D2 = |  1   6   1 |  =  2(6 - 2)  - 9(1 - 1)  + 3(2 - 6)
        |  1   2   1 |

                       =  8 - 0 - 12  =  -4          ->  y = -4 / -2 = 2


        |  2  -1   9 |
   D3 = |  1   1   6 |  =  2(2 + 6)  + 1(2 - 6)  + 9(-1 - 1)
        |  1  -1   2 |

                       =  16 - 4 - 18  =  -6         ->  z = -6 / -2 = 3


   ANSWER:  x = 1 , y = 2 , z = 3

   CHECK :  2(1) - 2 + 3(3) = 2 - 2 + 9 = 9    YES
            1 + 2 + 3 = 6                       YES
            1 - 2 + 3 = 2                       YES
```

### A THIRD FULLY WORKED SYSTEM (Cramer, bigger numbers)

```
       3x + 4y + 5z = 18
       2x -  y + 8z = 13
       5x - 2y + 7z = 20
```

```
        | 3   4   5 |
   D =  | 2  -1   8 |  =  3( -7 + 16 )  -  4( 14 - 40 )  +  5( -4 + 5 )
        | 5  -2   7 |

                       =  3(9) - 4(-26) + 5(1)
                       =  27 + 104 + 5   =   136


        | 18   4   5 |
   D1 = | 13  -1   8 |  =  18( -7 + 16 )  -  4( 91 - 160 )  +  5( -26 + 20 )
        | 20  -2   7 |

                       =  18(9) - 4(-69) + 5(-6)
                       =  162 + 276 - 30  =  408      ->  x = 408/136 = 3


        | 3   18   5 |
   D2 = | 2   13   8 |  =  3( 91 - 160 )  -  18( 14 - 40 )  +  5( 40 - 65 )
        | 5   20   7 |

                       =  3(-69) - 18(-26) + 5(-25)
                       =  -207 + 468 - 125  =  136    ->  y = 136/136 = 1


        | 3   4   18 |
   D3 = | 2  -1   13 |  =  3( -20 + 26 )  -  4( 40 - 65 )  +  18( -4 + 5 )
        | 5  -2   20 |

                       =  3(6) - 4(-25) + 18(1)
                       =  18 + 100 + 18  =  136       ->  z = 136/136 = 1


   ANSWER:  x = 3 , y = 1 , z = 1

   CHECK :  3(3) + 4(1) + 5(1) =  9 + 4 + 5 = 18     YES
            2(3) - 1   + 8(1)  =  6 - 1 + 8 = 13     YES
            5(3) - 2(1)+ 7(1)  = 15 - 2 + 7 = 20     YES
```

---

# TOPIC 13 — Consistency of a system

- **Consistent** = has at least one solution.
- **Inconsistent** = has no solution.

Let A = coefficient matrix, [A|B] = augmented matrix, n = number of unknowns (= 3).

```
  +-----------------------------------------+---------------------------+
  | rank(A) = rank([A|B]) = n               | UNIQUE solution           |
  +-----------------------------------------+---------------------------+
  | rank(A) = rank([A|B]) < n               | INFINITELY MANY solutions |
  +-----------------------------------------+---------------------------+
  | rank(A) is NOT equal to rank([A|B])     | NO solution (inconsistent)|
  +-----------------------------------------+---------------------------+
```

## Homogeneous system (all the right-hand sides are 0)

Always consistent, because x = y = z = 0 always works (the **trivial solution**).

```
  det A not 0     ->  ONLY the trivial solution  x = y = z = 0
  det A = 0       ->  INFINITELY MANY non-trivial solutions exist
```

---

## HOW TO ACTUALLY DO IT — reduce [A | B] and read the ranks off

You never need to compute two separate ranks. Row-reduce the augmented matrix ONCE
and both ranks are sitting there in front of you.

```
     +---------------------------+
     |   A   part    |   B part  |
     +---------------------------+
      count non-zero    count non-zero rows
      rows in the       of the WHOLE row
      LEFT block
      = rank(A)         = rank([A|B])
```

### WORKED EXAMPLE 13.1  (consistent, unique solution)

```
       x + y + z = 6 ,   x - y + z = 2 ,   2x - y + 3z = 9
```

```
     +--------------------+
     | 1    1    1  |  6  |
     | 1   -1    1  |  2  |
     | 2   -1    3  |  9  |
     +--------------------+

  R2 -> R2 -   R1 :   ( 0 , -2 , 0 |  2 - 6 )  =  ( 0 , -2 , 0 | -4 )
  R3 -> R3 - 2 R1 :   ( 0 , -3 , 1 |  9 - 12 ) =  ( 0 , -3 , 1 | -3 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0   -2    0  | -4  |
     | 0   -3    1  | -3  |
     +--------------------+

  R2 -> R2 / (-2) :   ( 0 , 1 , 0 |  2 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0    1    0  |  2  |
     | 0   -3    1  | -3  |
     +--------------------+

  R3 -> R3 + 3 R2 :   ( 0 , 0 , 1 | -3 + 6 )  =  ( 0 , 0 , 1 |  3 )

     +--------------------+
     | 1    1    1  |  6  |
     | 0    1    0  |  2  |
     | 0    0    1  |  3  |
     +--------------------+

  rank(A) = 3       rank([A|B]) = 3       n = 3

     3 = 3 = 3    ->   CONSISTENT with a UNIQUE solution

  Read it back upwards:
      z = 3
      y = 2
      x + 2 + 3 = 6   ->   x = 1

  ANSWER:  x = 1 , y = 2 , z = 3
```

### WORKED EXAMPLE 13.2  (consistent, INFINITELY MANY solutions)

```
       x + y + z = 3 ,   2x + 2y - z = 3 ,   x + y - z = 1
```

```
     +--------------------+
     | 1    1    1  |  3  |
     | 2    2   -1  |  3  |
     | 1    1   -1  |  1  |
     +--------------------+

  R2 -> R2 - 2 R1 :   ( 0 , 0 , -3 |  3 - 6 )  =  ( 0 , 0 , -3 | -3 )
  R3 -> R3 -   R1 :   ( 0 , 0 , -2 |  1 - 3 )  =  ( 0 , 0 , -2 | -2 )

     +--------------------+
     | 1    1    1  |  3  |
     | 0    0   -3  | -3  |
     | 0    0   -2  | -2  |
     +--------------------+

  R2 -> R2 / (-3) :   ( 0 , 0 , 1 | 1 )
  R3 -> R3 + 2 R2 :   ( 0 , 0 , 0 | 0 )

     +--------------------+
     | 1    1    1  |  3  |
     | 0    0    1  |  1  |
     | 0    0    0  |  0  |
     +--------------------+

  rank(A) = 2       rank([A|B]) = 2       n = 3

     2 = 2  but  2 < 3    ->   CONSISTENT with INFINITELY MANY solutions

  How many free parameters?   n - rank  =  3 - 2  =  ONE.

  From row 2 :   z = 1
  From row 1 :   x + y + 1 = 3   ->   x + y = 2

  Let  x = t  (any real number).  Then  y = 2 - t.

  SOLUTION SET:   ( t , 2 - t , 1 )   for every real t.

  CHECK with t = 5 :  x = 5 , y = -3 , z = 1
       5 + (-3) + 1 = 3            YES
       2(5) + 2(-3) - 1 = 10 - 6 - 1 = 3    YES
       5 + (-3) - 1 = 1            YES
```

> **TRAP:** "infinitely many solutions" is not the end of the answer. You must
> introduce a parameter t and write the whole family. Half the marks live there.

### WORKED EXAMPLE 13.3  (INCONSISTENT — no solution)

```
       x + y + z = 6 ,   2x + 3y + 4z = 20 ,   x + 2y + 3z = 13
```

```
     +--------------------+
     | 1    1    1  |   6 |
     | 2    3    4  |  20 |
     | 1    2    3  |  13 |
     +--------------------+

  R2 -> R2 - 2 R1 :   ( 0 , 1 , 2 |  20 - 12 )  =  ( 0 , 1 , 2 |  8 )
  R3 -> R3 -   R1 :   ( 0 , 1 , 2 |  13 -  6 )  =  ( 0 , 1 , 2 |  7 )

     +--------------------+
     | 1    1    1  |   6 |
     | 0    1    2  |   8 |
     | 0    1    2  |   7 |
     +--------------------+

  R3 -> R3 - R2 :     ( 0 , 0 , 0 |  7 - 8 )  =  ( 0 , 0 , 0 | -1 )

     +--------------------+
     | 1    1    1  |   6 |
     | 0    1    2  |   8 |
     | 0    0    0  |  -1 |     <-- LOOK AT THIS ROW
     +--------------------+

  The last row says      0x + 0y + 0z  =  -1        which is IMPOSSIBLE.

  rank(A) = 2   but   rank([A|B]) = 3      They are NOT equal.

  ->  THE SYSTEM IS INCONSISTENT.  It has NO solution.
```

```
  +--------------------------------------------------------------------+
  |  THE GIVEAWAY:  a row of the form   0  0  0  |  (something not 0)  |
  |  means INCONSISTENT.  Stop and write that down.                    |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 13.4  (homogeneous — only the trivial solution)

```
       x + y + z = 0 ,   2x + y - z = 0 ,   x - 2y + z = 0
```

```
  det A =  | 1   1    1 |
           | 2   1   -1 |   =  1( 1(1) - (-1)(-2) )  -  1( 2(1) - (-1)(1) )
           | 1  -2    1 |                                + 1( 2(-2) - 1(1) )

        =  1( 1 - 2 )  -  1( 2 + 1 )  +  1( -4 - 1 )
        =  -1  -  3  -  5
        =  -9              (not zero)

  ->  ONLY the trivial solution:   x = 0 , y = 0 , z = 0
```

### WORKED EXAMPLE 13.5  (homogeneous — non-trivial solutions, and find them)

```
       x + 2y + 3z = 0 ,   2x + 3y + 4z = 0 ,   3x + 5y + 7z = 0
```

```
  det A =  | 1   2   3 |
           | 2   3   4 |   =  1(21 - 20)  -  2(14 - 12)  +  3(10 - 9)
           | 3   5   7 |

        =  1 - 4 + 3  =  0        ->  NON-TRIVIAL solutions exist

  Find them.  Row-reduce:

     R2 -> R2 - 2 R1 :  ( 0 , -1 , -2 )
     R3 -> R3 - 3 R1 :  ( 0 , -1 , -2 )
     R3 -> R3 -   R2 :  ( 0 ,  0 ,  0 )

     | 1    2    3 |
     | 0   -1   -2 |          rank = 2  ,  n = 3  ->  one free parameter
     | 0    0    0 |

  From row 2 :   -y - 2z = 0   ->   y = -2z
  From row 1 :   x + 2(-2z) + 3z = 0   ->   x - 4z + 3z = 0   ->   x = z

  Put  z = t :        ( x , y , z )  =  ( t , -2t , t )

  CHECK with t = 1 :   x = 1 , y = -2 , z = 1
        1 + 2(-2) + 3(1)  =  1 - 4 + 3  =  0     YES
        2 + 3(-2) + 4(1)  =  2 - 6 + 4  =  0     YES
        3 + 5(-2) + 7(1)  =  3 - 10 + 7 =  0     YES
```

### WORKED EXAMPLE 13.6  (find the parameter for a NON-TRIVIAL solution)

```
       x  + ky + 3z = 0
      3x  + ky - 2z = 0        has a non-zero solution.  Find k.
      2x  + 3y - 4z = 0
```

```
  "Non-zero / non-trivial solution"  ->  set  det A = 0.  Nothing else.

  det A =  | 1   k    3 |
           | 3   k   -2 |
           | 2   3   -4 |

        =  1( k(-4) - (-2)(3) )  -  k( 3(-4) - (-2)(2) )  +  3( 3(3) - k(2) )
        =  1( -4k + 6 )  -  k( -12 + 4 )  +  3( 9 - 2k )
        =  -4k + 6  +  8k  +  27 - 6k
        =  -2k + 33

  Set  -2k + 33 = 0     ->     k  =  33 / 2
```

### WORKED EXAMPLE 13.7  (find the parameter for a UNIQUE solution)

```
       x + y +  z = 2
      2x + y -  z = 3
      3x + 2y + kz = 4
```

```
  Unique solution  <->  det A is NOT zero.

  det A =  | 1   1    1 |
           | 2   1   -1 |
           | 3   2    k |

        =  1( 1(k) - (-1)(2) )  -  1( 2(k) - (-1)(3) )  +  1( 2(2) - 1(3) )
        =  1( k + 2 )  -  1( 2k + 3 )  +  1( 4 - 3 )
        =  k + 2 - 2k - 3 + 1
        =  -k

  det A not 0   ->   -k not 0   ->   k is NOT 0.

  ANSWER:  the system has a unique solution for every k except k = 0.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write order as ROWS x COLUMNS ?
  [ ]  Did I check the inner dimensions match before multiplying ?
  [ ]  Did I use the sign board  + - +  when expanding the determinant ?
  [ ]  Did I look for a zero row / proportional rows BEFORE expanding ?
  [ ]  Did I expand along the row or column with the MOST zeros ?
  [ ]  Did I TRANSPOSE the cofactor matrix to get the adjoint ?
  [ ]  Did I check  A (adj A) = (det A) I  before going on ?
  [ ]  Did I divide by det A at the end of A^-1 ?
  [ ]  Did I remember the 1/2 in the symmetric + skew decomposition ?
  [ ]  Did I use k^n (n = ORDER) and not just k, for det(kA) ?
  [ ]  In Gauss-Jordan, did I use ROW operations only, and update the
       constant column every single time ?
  [ ]  For "infinitely many solutions", did I write the family with a
       parameter t, not just the words ?
  [ ]  Did I use the method the question ASKED for ?
  [ ]  Did I substitute my answer back into one original equation to check ?
       (Takes 20 seconds. Saves 7 marks.)
```

---

# THE SIX MISTAKES THAT COST THE MOST MARKS IN THIS CHAPTER

```
  +------+-------------------------------------+---------------------------+
  | RANK |  THE MISTAKE                        |  THE FIX                  |
  +------+-------------------------------------+---------------------------+
  |  1   |  Forgetting to transpose the        |  Say "COFACTOR then       |
  |      |  cofactor matrix                    |  TRANSPOSE" out loud      |
  +------+-------------------------------------+---------------------------+
  |  2   |  Sign errors in the cofactors       |  Draw the + - + board at  |
  |      |                                     |  the top of the page      |
  +------+-------------------------------------+---------------------------+
  |  3   |  Dropping the 1/2 in                |  Write the 1/2 BEFORE you |
  |      |  (1/2)(A + A')                      |  write the bracket        |
  +------+-------------------------------------+---------------------------+
  |  4   |  det(3A) = 3 det A for a 3x3        |  It is 27 det A. The      |
  |      |                                     |  power is the ORDER       |
  +------+-------------------------------------+---------------------------+
  |  5   |  Using a method the question did    |  Underline the method     |
  |      |  not ask for                        |  name in the question     |
  +------+-------------------------------------+---------------------------+
  |  6   |  Minus-minus arithmetic slips       |  Write the minus, then    |
  |      |                                     |  the bracket, then expand |
  +------+-------------------------------------+---------------------------+
```
