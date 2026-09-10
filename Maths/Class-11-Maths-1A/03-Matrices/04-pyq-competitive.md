# Matrices — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Matrices & Determinants:**

```
  AP EAPCET  (Maths, 80 questions)  ->  4 to 6
  TG EAPCET  (Maths, 80 questions)  ->  4 to 6
  JEE Main   (Maths, 25 questions)  ->  2 to 3
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Order, trace, simple algebra (free marks)

### Q1
```
       +-------+
  A =  | 1   2 |     Then Tr(A^2) is
       | 3   4 |
       +-------+

  (a) 5      (b) 29      (c) 27      (d) 25
```
**ANSWER: (b)**
```
        +---------+
  A^2 = |  7   10 |          Tr = 7 + 22 = 29
        | 15   22 |
        +---------+
```

---

### Q2
The number of possible orders of a matrix with 12 elements is

(a) 3 &nbsp;&nbsp; (b) 6 &nbsp;&nbsp; (c) 12 &nbsp;&nbsp; (d) 1

**ANSWER: (b)** — the number of divisors of 12 is 6:
`1x12 , 2x6 , 3x4 , 4x3 , 6x2 , 12x1`

---

### Q3
A and B are square matrices of order 3 with Tr(A) = 3 and Tr(B) = -2.
Then Tr(2A - 3B) =

(a) 12 &nbsp;&nbsp; (b) 0 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) -12

**ANSWER: (a)** — `2(3) - 3(-2) = 6 + 6 = 12`

---

# PATTERN 2 — Powers of a matrix (JEE favourite)

### Q4
```
       +-------+
  A =  | 1   1 |     Then A^n  =  ?
       | 0   1 |
       +-------+
```
**ANSWER:**
```
        +-------+          +-------+          +-------+
  A^2 = | 1   2 |    A^3 = | 1   3 |    A^n = | 1   n |
        | 0   1 |          | 0   1 |          | 0   1 |
        +-------+          +-------+          +-------+
```
> **UNIVERSAL METHOD for any "find A^n" MCQ:**
> compute A^2 and A^3, spot the pattern, then test each option at n = 2.

---

### Q5
```
       +-------------------------+
  A =  |  cos t      sin t       |      Then A^n = ?
       | -sin t      cos t       |
       +-------------------------+
```
**ANSWER:**
```
        +--------------------------+
  A^n = |  cos(nt)      sin(nt)    |
        | -sin(nt)      cos(nt)    |
        +--------------------------+
```
Rotation matrices compose by ADDING the angles.

---

### Q6
```
       +-------+
  A =  | 0   1 |      Find  (aI + bA)^n
       | 0   0 |
       +-------+
```
**ANSWER:**
```
  Since A^2 = O, the binomial expansion STOPS after two terms:

  (aI + bA)^n  =  a^n I  +  n a^(n-1) b A

                  +-------------------------+
               =  | a^n      n a^(n-1) b    |
                  |  0            a^n       |
                  +-------------------------+
```
> **TRICK:** whenever A^2 = O, or A^2 = A, or A^2 = I, the binomial collapses
> to just a couple of terms.

---

# PATTERN 3 — Determinant value and properties

### Q7
A is a 3x3 matrix with det A = 4. Then det(2A) =

(a) 8 &nbsp;&nbsp; (b) 16 &nbsp;&nbsp; (c) 32 &nbsp;&nbsp; (d) 64

**ANSWER: (c)** — `det(kA) = k^n det A = 2^3 x 4 = 32`

---

### Q8
A is a 3x3 matrix with det A = 5. Then det(adj A) =

(a) 5 &nbsp;&nbsp; (b) 25 &nbsp;&nbsp; (c) 125 &nbsp;&nbsp; (d) 1/5

**ANSWER: (b)** — `det(adj A) = (det A)^(n-1) = 5^2 = 25`

---

### Q9
A is a 3x3 matrix with det A = 2. Then det( adj( adj A ) ) =

**ANSWER:** `(det A)^((n-1)^2) = 2^4 = 16`

---

### Q10
```
  |  1     w    w^2 |
  |  w    w^2    1  |      where w is a cube root of unity.
  | w^2    1     w  |

  (a) 1      (b) 0      (c) w      (d) w^2
```
**ANSWER: (b)**
```
  R1 -> R1 + R2 + R3

  Every entry of row 1 becomes  1 + w + w^2  =  0

  A determinant with a zero row is 0.
```

---

### Q11
```
  | x+1   x+2   x+a |
  | x+2   x+3   x+b |  =  0      Then a, b, c are in
  | x+3   x+4   x+c |

  (a) AP     (b) GP     (c) HP     (d) none
```
**ANSWER: (a) AP**
```
  R1 -> R1 - R2  and  R2 -> R2 - R3  reduce the condition to

        a - 2b + c = 0     which is exactly the AP condition  2b = a + c
```

---

# PATTERN 4 — Singular matrices / find the parameter

### Q12
```
       +-------------+
  A =  | 1   2    3  |     For what value of L is A singular?
       | 2   L    6  |
       | 3   6    9  |
       +-------------+
```
**ANSWER:** Row 3 = 3 x Row 1, so det A = 0 for **every** value of L.
> **LESSON:** always scan for proportional rows BEFORE you start expanding.

---

### Q13
```
  x + ky + 3z = 0
  3x + ky - 2z = 0        has a NON-ZERO solution.  Find k.
  2x + 3y - 4z = 0

  (a) 31/2     (b) 33/2     (c) 16     (d) 15
```
**ANSWER: (b) 33/2**
> **RULE:** homogeneous system + the words "non-trivial" or "non-zero solution"
> means you must set **det A = 0**.

---

### Q14
```
  2x + 3y + z = 5
  3x +  y + 5z = 7        This system has
  x + 4y - 2z = 3

  (a) unique solution   (b) infinitely many   (c) no solution   (d) two
```
**METHOD:**
```
  Compute det A.
      not 0   ->  unique solution
      = 0     ->  compare rank(A) with rank([A|B])
                     equal      ->  infinitely many
                     not equal  ->  no solution
```

---

# PATTERN 5 — Inverse and adjoint identities

### Q15
```
       +---------+
  A =  |  2  -3  |      Find  adj(3 A^2) + adj(12 A)
       | -4   1  |
       +---------+
```
**METHOD:**
```
  Use   adj(kA)  = k^(n-1) adj A       (here n = 2, so k^1 = k)
  Use   adj(A^2) = (adj A)^2

  ->  adj(3 A^2)  =  3 (adj A)^2
  ->  adj(12 A)   =  12 adj A
```

---

### Q16
A is non-singular of order 3. Then A x (adj A) =

(a) I &nbsp;&nbsp; (b) (det A) I &nbsp;&nbsp; (c) O &nbsp;&nbsp; (d) A^2

**ANSWER: (b)**

---

### Q17
If A satisfies `A^2 - 5A + 7I = O`, find A^-1.

**ANSWER:**
```
  Multiply the whole equation by A^-1:

      A - 5I + 7 A^-1  =  O
      7 A^-1           =  5I - A
      A^-1             =  (1/7)(5I - A)
```
> **UNIVERSAL METHOD** for "matrix satisfies a polynomial, find A^-1":
> multiply throughout by A^-1 and rearrange. Works every time.

---

### Q18
If A is an orthogonal matrix, then det A =

(a) 0 &nbsp;&nbsp; (b) +1 or -1 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) -1

**ANSWER: (b)**
```
  A A' = I   ->   det A x det A' = 1   ->   (det A)^2 = 1
```

---

# PATTERN 6 — Symmetric / skew-symmetric objective

### Q19
If A is skew-symmetric of order (2n + 1), then det A =

**ANSWER: 0** — the determinant of an odd-order skew-symmetric matrix is always 0.

---

### Q20
The number of independent entries in a symmetric matrix of order n is

**ANSWER:**
```
                        n(n + 1)
  symmetric      ->    ----------
                            2

                        n(n - 1)
  skew-symmetric ->    ----------      (the diagonal is forced to zero)
                            2
```

---

### Q21
A is symmetric, B is skew-symmetric, same order. Then AB + BA is

(a) symmetric &nbsp;&nbsp; (b) skew-symmetric &nbsp;&nbsp; (c) null &nbsp;&nbsp; (d) neither

**ANSWER: (b)**
```
  (AB + BA)'  =  B'A' + A'B'
              =  (-B)(A) + (A)(-B)        [B' = -B , A' = A]
              =  -BA - AB
              =  -(AB + BA)               ->  SKEW-SYMMETRIC
```

---

# PATTERN 7 — Rank (EAPCET asks this, JEE rarely does)

### Q22
```
       +-----------+
  A =  | 1   2   3 |      The rank of A is
       | 2   4   6 |
       | 3   6   9 |
       +-----------+

  (a) 0      (b) 1      (c) 2      (d) 3
```
**ANSWER: (b)** — Row 2 = 2 x Row 1 and Row 3 = 3 x Row 1. All rows proportional.

---

### Q23
```
       +-------+
  A =  | 1   2 |      If rank(A) = 1, find k.
       | 3   k |
       +-------+
```
**ANSWER:** rank 1 means det = 0, so `k - 6 = 0`, giving **k = 6**

---

# PATTERN 8 — Counting matrices (JEE Main)

### Q24
The number of 3x3 matrices with entries from {0, 1} whose trace is 3 is

**ANSWER: 64**
```
  Trace 3 with entries only 0 or 1
      ->  all THREE diagonal entries must be 1  (forced)
      ->  the remaining 6 off-diagonal entries are free
      ->  2^6  =  64
```

---

### Q25
The number of symmetric matrices of order 3 with entries from {0, 1, 2} is

**ANSWER: 729**
```
  Independent entries  =  3 x 4 / 2  =  6
  Each has 3 choices   ->  3^6  =  729
```

---

# PATTERN 9 — Matrix equation A X = B, and 2x2 systems

### Q26
```
  2x +  y = 5
  3x + 2y = 8        Solve by the matrix inverse method.

  (a) x=2, y=1     (b) x=1, y=2     (c) x=3, y=-1     (d) x=2, y=-1
```
**ANSWER: (a)**
```
       +-------+        +---+        +---+
  A =  | 2   1 |   X =  | x |   B =  | 5 |
       | 3   2 |        | y |        | 8 |
       +-------+        +---+        +---+

  det A = 2(2) - 1(3) = 1          non-zero, so A^-1 exists

            1   +---------+       +---------+
  A^-1 =  ----- |  2   -1 |   =   |  2   -1 |
            1   | -3    2 |       | -3    2 |
                +---------+       +---------+

  X = A^-1 B :    x =  2(5) + (-1)(8) =  10 - 8  = 2
                  y = -3(5) +   2(8)  = -15 + 16 = 1

  CHECK:   2(2) + 1 = 5   YES        3(2) + 2(1) = 8   YES
```
> **SHORTCUT for every 2x2 inverse:** swap the two diagonal entries, flip the
> sign of the other two, divide by det. Three seconds, no cofactors.

---

### Q27
A is a non-singular matrix of order 3 and A X = B. Then X =

(a) B A^-1 &nbsp;&nbsp; (b) A^-1 B &nbsp;&nbsp; (c) A B^-1 &nbsp;&nbsp; (d) B^-1 A

**ANSWER: (b)**
```
  Multiply BOTH sides on the LEFT by A^-1  (the side A is on):

      A^-1 (A X)  =  A^-1 B
         (A^-1 A) X  =  A^-1 B
              I X    =  A^-1 B
                X    =  A^-1 B
```
> **TRAP:** `B A^-1` is a different matrix. The inverse must go on the SAME
> SIDE as the A you are cancelling. Left equation -> left multiply.

---

### Q28
The system `kx + 2y = 5` , `3x + y = 1` has NO solution when k =

(a) 6 &nbsp;&nbsp; (b) -6 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 1/6

**ANSWER: (a)**
```
  det A  =  k(1) - 2(3)  =  k - 6

  For "no solution" you first NEED  det A = 0   ->   k = 6

  Test k = 6 :     6x + 2y = 5
                   3x +  y = 1    ->  double it  ->  6x + 2y = 2

                   6x + 2y cannot be 5 and 2 at once  ->  NO SOLUTION
```
> **SHORTCUT:** det A = 0 covers BOTH "no solution" and "infinitely many".
> Decide which by scaling one equation and comparing the right-hand sides.
> Same -> infinitely many. Different -> no solution.

---

# PATTERN 10 — Trace identities (Tr(AB) = Tr(BA), trace of a power)

### Q29
```
       +-------+         +-------+
  A =  | 1   2 |    B =  | 0   1 |      Then  Tr(AB) - Tr(BA)  =
       | 3   4 |         | 1   0 |
       +-------+         +-------+

  (a) 5      (b) 0      (c) 10      (d) -5
```
**ANSWER: (b)**
```
        +-------+                     +-------+
  AB =  | 2   1 |   Tr = 5      BA =  | 3   4 |   Tr = 5
        | 4   3 |                     | 1   2 |
        +-------+                     +-------+

  5 - 5 = 0
```
> **SHORTCUT: Tr(AB) = Tr(BA) ALWAYS**, even though AB is not BA.
> Two consequences worth marks:
> - `Tr(AB - BA) = 0` for any square A, B.
> - So `AB - BA = I` is **impossible** — Tr(I) = n, which is not 0.
>   If an option says "AB - BA = I", kill it instantly.

---

### Q30
```
       +-------+
  A =  | 2   1 |      Then  Tr(A^3)  =
       | 0   3 |
       +-------+

  (a) 35      (b) 125      (c) 5      (d) 13
```
**ANSWER: (a)**
```
  A is TRIANGULAR (a zero below the diagonal), so the diagonal of A^k is
  just each diagonal entry raised to the power k.

      Tr(A^3)  =  2^3 + 3^3  =  8 + 27  =  35

  Longhand check:
        +-------+          +--------+
  A^2 = | 4   5 |    A^3 = | 8   19 |     Tr = 8 + 27 = 35   SAME
        | 0   9 |          | 0   27 |
        +-------+          +--------+
```
> **SHORTCUT:** for a triangular matrix, `Tr(A^k) = d1^k + d2^k + ... `
> using only the diagonal entries. Never multiply the whole matrix out.

---

### Q31
```
       +-------+
  A =  | 1   1 |      Then  Tr(A^5)  =
       | 1   1 |
       +-------+

  (a) 2      (b) 16      (c) 32      (d) 5
```
**ANSWER: (c)**
```
        +-------+
  A^2 = | 2   2 |  =  2A          ->   A^n = 2^(n-1) A
        | 2   2 |
        +-------+

  A^5 = 2^4 A = 16 A     ->    Tr(A^5) = 16 + 16 = 32   ( = 2^5 )
```
> **SHORTCUT:** whenever `A^2 = kA`, every power collapses: `A^n = k^(n-1) A`.
> Spot this before you start multiplying.

---

# PATTERN 11 — Idempotent, involutory, nilpotent, orthogonal

```
  +---------------+------------------+--------------------------------------+
  |  NAME         |  DEFINITION      |  WHAT IT INSTANTLY GIVES YOU         |
  +---------------+------------------+--------------------------------------+
  |  idempotent   |  A^2 = A         |  det A = 0 or 1 ; I - A is idempotent|
  |  involutory   |  A^2 = I         |  A^-1 = A ; det A = +1 or -1         |
  |  nilpotent    |  A^k = O         |  det A = 0 ; A^-1 does NOT exist     |
  |  orthogonal   |  A A' = I        |  A^-1 = A' ; det A = +1 or -1        |
  +---------------+------------------+--------------------------------------+
```

### Q32
```
       +----------------+
       |  2   -2   -4   |
  A =  | -1    3    4   |      This matrix is
       |  1   -2   -3   |
       +----------------+

  (a) nilpotent   (b) idempotent   (c) involutory   (d) orthogonal
```
**ANSWER: (b)**
```
  Multiply A by itself. Row 1 of A times the three columns of A:

      (1,1) :  2(2) + (-2)(-1) + (-4)(1)   =  4 + 2 - 4   =  2
      (1,2) :  2(-2) + (-2)(3) + (-4)(-2)  = -4 - 6 + 8   = -2
      (1,3) :  2(-4) + (-2)(4) + (-4)(-3)  = -8 - 8 + 12  = -4

  Row 1 of A^2 is  ( 2, -2, -4 ) = row 1 of A.  Rows 2 and 3 do the same:

        +----------------+
        |  2   -2   -4   |
  A^2 = | -1    3    4   |  =  A          ->  IDEMPOTENT
        |  1   -2   -3   |
        +----------------+
```
> **SHORTCUT:** to test these four types, compute **A^2 once** and look at it:
> equals A -> idempotent, equals I -> involutory, equals O -> nilpotent.
> Only for "orthogonal" do you compute `A A'` instead.
> Bonus fact worth a mark: if A is idempotent then so is `I - A`, because
> `(I - A)^2 = I - 2A + A^2 = I - 2A + A = I - A`.

---

### Q33
```
       +----------+
  A =  |  4   -1  |      Then  A^-1  =
       | 15   -4  |
       +----------+

  (a) A      (b) -A      (c) I      (d) 2A
```
**ANSWER: (a)**
```
  Entry by entry:   16 - 15 = 1        -4 + 4  = 0
                    60 - 60 = 0       -15 + 16 = 1

        +-------+
  A^2 = | 1   0 |  =  I
        | 0   1 |
        +-------+

  A^2 = I   ->   A is INVOLUTORY   ->   A^-1 = A
```
Check with det: `det A = 4(-4) - (-1)(15) = -16 + 15 = -1`, and -1 is allowed
for an involutory matrix.
> **SHORTCUT:** "involutory" means the matrix is its own inverse. If a question
> gives you A^2 = I and asks for A^-1, A^5, A^99 — answer A. Even powers give I.

---

### Q34
```
       +----------------+
       |  1    1    3   |
  A =  |  5    2    6   |     The smallest k with  A^k = O  is
       | -2   -1   -3   |
       +----------------+

  (a) 1      (b) 2      (c) 3      (d) no such k
```
**ANSWER: (c)**
```
        +----------------+                    +----------------+
        |  0    0    0   |                    |  0   0   0     |
  A^2 = |  3    3    9   |            A^3 =   |  0   0   0     |  =  O
        | -1   -1   -3   |                    |  0   0   0     |
        +----------------+                    +----------------+

  A is not O and A^2 is not O, so the smallest k is 3.
```
> **SHORTCUT:** every nilpotent matrix has `det A = 0` (because
> `(det A)^k = det(A^k) = 0`), so it can never be inverted. If a question says
> "A is nilpotent, find A^-1", the answer is "it does not exist".

---

### Q35
```
                +----------------+
                |  1    2    2   |
  A  =  (1/3) x |  2    1   -2   |     is orthogonal.  Then  a + b  =
                |  a    2    b   |
                +----------------+

  (a) -3     (b) 3     (c) -1     (d) 1
```
**ANSWER: (a)**
```
  Orthogonal means A A' = I, which says:
      every row has length 1, and any two different rows are perpendicular.

  Row 3 has length 1 :      a^2 + 4 + b^2 = 9      ->   a^2 + b^2 = 5
  Row 3 . Row 1 = 0  :      a + 4 + 2b = 0         ->   a + 2b = -4
  Row 3 . Row 2 = 0  :      2a + 2 - 2b = 0        ->   a - b  = -1

  From the last:  a = b - 1.   Put into  a + 2b = -4 :
      (b - 1) + 2b = -4   ->   3b = -3   ->   b = -1 ,  a = -2

  CHECK:  a^2 + b^2 = 4 + 1 = 5   YES

  a + b = -2 + (-1) = -3
```
> **SHORTCUT:** never multiply the whole 3x3 product out. Use only the rows you
> need — one length equation and one dot-product equation is usually enough.

---

# PATTERN 12 — det(A + B) is NOT det A + det B (the classic trap)

### Q36
```
       +-------+         +---------+
  A =  | 1   0 |    B =  | -1   0  |     Then det(A+B) - (det A + det B) =
       | 0   1 |         |  0  -1  |
       +-------+         +---------+

  (a) 0      (b) -2      (c) 2      (d) 1
```
**ANSWER: (b)**
```
  det A = 1        det B = (-1)(-1) - 0 = 1        det A + det B = 2

             +-------+
  A + B  =   | 0   0 |      ->   det(A + B) = 0
             | 0   0 |
             +-------+

  0 - 2  =  -2
```
> **THE RULE TO BURN IN:**
> ```
>   det(AB) = det A x det B         TRUE  -- products are fine
>   det(A+B) = det A + det B        FALSE -- sums are NOT
> ```
> If a question asks for det of a SUM, **add the matrices first**, then take
> one determinant. There is no shortcut and the "obvious" one is wrong.

---

### Q37
A is a 3x3 matrix with det A = 5. Then det(A + A) =

(a) 10 &nbsp;&nbsp; (b) 40 &nbsp;&nbsp; (c) 20 &nbsp;&nbsp; (d) 25

**ANSWER: (b)**
```
  A + A  =  2A     (this IS a sum, but it is also a scalar multiple)

  det(2A) = 2^n det A = 2^3 x 5 = 8 x 5 = 40

  The trap answer 10 comes from writing det A + det A. Wrong.
```

---

# PATTERN 13 — A determinant with a parameter: "for how many values of k"

### Q38
```
  (k+1)x + 8y = 4k
     kx + (k+3)y = 3k - 1

  The number of values of k for which this system has NO solution is

  (a) 0      (b) 1      (c) 2      (d) infinitely many
```
**ANSWER: (b)**
```
  STEP 1   det = 0 is necessary:

      (k+1)(k+3) - 8k  =  k^2 + 4k + 3 - 8k  =  k^2 - 4k + 3  =  (k-1)(k-3)

      So the only candidates are  k = 1  and  k = 3.

  STEP 2   TEST each candidate - this is the step everyone skips.

      k = 1 :   2x + 8y = 4    ->  x + 4y = 2
                 x + 4y = 2    ->  x + 4y = 2
                The two equations are IDENTICAL  ->  infinitely many.

      k = 3 :   4x + 8y = 12   ->  x + 2y = 3
                3x + 6y = 8    ->  x + 2y = 8/3
                Same left side, different right side  ->  NO SOLUTION.

  Exactly ONE value of k gives no solution.
```
> **SHORTCUT and warning:** det = 0 only makes a candidate list. Always test
> each root — some give "no solution", some give "infinitely many". The whole
> question is designed around that difference.

---

### Q39
```
  |  k   1   1  |
  |  1   k   1  |  =  0     The number of real values of k is
  |  1   1   k  |

  (a) 1      (b) 2      (c) 3      (d) 0
```
**ANSWER: (b)**
```
  R1 -> R1 + R2 + R3  makes every entry of row 1 equal to (k + 2):

      det = (k + 2) x  | 1   1   1 |
                       | 1   k   1 |
                       | 1   1   k |

  C2 -> C2 - C1 ,  C3 -> C3 - C1 :

      det = (k + 2) x  | 1     0       0     |
                       | 1   k - 1     0     |   =  (k+2)(k-1)^2
                       | 1     0     k - 1   |

  So k = -2  or  k = 1 (twice).  Two DISTINCT real values.

  CHECK at k = 0 :  formula gives (2)(1) = 2.
  Direct: 0(0-1) - 1(0-1) + 1(1-0) = 0 + 1 + 1 = 2.   MATCH.
```
> **TRAP:** the question asks for the number of VALUES, not the number of
> roots. `k = 1` is a repeated root but it is still only one value.

---

### Q40
```
  x +  y +  z  = 1
  x + 2y + 4z  = k        is consistent.  Then k =
  x + 4y + 10z = k^2

  (a) 1 or 2     (b) -1 or -2     (c) 0 or 1     (d) 2 or 3
```
**ANSWER: (a)**
```
  det A = 1(20 - 16) - 1(10 - 4) + 1(4 - 2) = 4 - 6 + 2 = 0
  So A is singular - consistency is NOT automatic. Row-reduce [A | B]:

      R2 -> R2 - R1 :    0   1   3  |  k - 1
      R3 -> R3 - R1 :    0   3   9  |  k^2 - 1

      R3 -> R3 - 3 R2 :  0   0   0  |  k^2 - 1 - 3(k - 1)
                                    =  k^2 - 3k + 2
                                    =  (k - 1)(k - 2)

  A row "0 0 0 | something" is only allowed if that something is 0:

      k = 1   or   k = 2
```
> **SHORTCUT:** singular coefficient matrix + the word "consistent" means
> "force the last row of the augmented matrix to read 0 0 0 | 0".

---

# PATTERN 14 — Adjoint and inverse identities (pure formula marks)

```
  +--------------------------------------------------------------------+
  |   THE FIVE IDENTITIES, for a matrix of ORDER n (use n = 3)         |
  |                                                                    |
  |     A (adj A)      =  (det A) I                                    |
  |     det(adj A)     =  (det A)^(n-1)          = (det A)^2           |
  |     adj(adj A)     =  (det A)^(n-2) A        = (det A) A           |
  |     adj(kA)        =  k^(n-1) adj A          = k^2 adj A           |
  |     (adj A)^-1     =  adj(A^-1)  =  A / det A                      |
  +--------------------------------------------------------------------+
```

### Q41
A is 3x3 with det A = 4. Then det( adj(2A) ) =

(a) 1024 &nbsp;&nbsp; (b) 256 &nbsp;&nbsp; (c) 64 &nbsp;&nbsp; (d) 16

**ANSWER: (a)**
```
  ROUTE 1 (fastest)   det(adj M) = (det M)^2   with   M = 2A

        det(2A) = 2^3 x 4 = 32
        det(adj(2A)) = 32^2 = 1024

  ROUTE 2 (check)     adj(2A) = 2^2 adj A = 4 adj A

        det(4 adj A) = 4^3 x det(adj A) = 64 x 4^2 = 64 x 16 = 1024

  Both routes agree.
```

---

### Q42
A is a non-singular matrix of order 3. Then adj(adj A) =

(a) (det A) A &nbsp;&nbsp; (b) (det A)^2 A &nbsp;&nbsp; (c) A &nbsp;&nbsp; (d) A^-1

**ANSWER: (a)** — `adj(adj A) = (det A)^(n-2) A`, and n - 2 = 1 for order 3.

> **TRAP:** the exponent `(n-2)` is 1 for a 3x3 and **0** for a 2x2. So for a
> 2x2 matrix `adj(adj A) = A` exactly. Read the order before you answer.

---

### Q43
A is a non-singular matrix of order 3. Then (adj A)^-1 =

(a) A / det A &nbsp;&nbsp; (b) (det A) A &nbsp;&nbsp; (c) A^-1 / det A &nbsp;&nbsp; (d) A

**ANSWER: (a)**
```
  Start from      A (adj A) = (det A) I

  Divide both sides by det A :

            A
        --------- x (adj A)  =  I
          det A

  Whatever multiplies adj A to give I IS its inverse, so

        (adj A)^-1  =  A / det A  =  adj(A^-1)
```

---

### Q44
A is 3x3 and |adj A| = 16. Then |A| =

(a) 4 &nbsp;&nbsp; (b) +4 or -4 &nbsp;&nbsp; (c) 16 &nbsp;&nbsp; (d) +2 or -2

**ANSWER: (b)**
```
  |adj A| = |A|^(n-1) = |A|^2 = 16    ->    |A| = +4  or  -4
```
> **TRAP:** the square root has TWO signs. Nothing in the question forbids a
> negative determinant. Option (a) is the trap and most students pick it.

---

# PATTERN 15 — Rank: of a product, and after row operations

### Q45
A and B are 3x3 matrices with rank(A) = 1 and rank(B) = 2.
Then rank(AB) is at most

(a) 3 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 0

**ANSWER: (c)**
```
  rank(AB)  <=  the SMALLER of  rank(A)  and  rank(B)  =  min(1, 2) = 1
```
> **SHORTCUT:** multiplying can only destroy rank, never create it. Two useful
> consequences: if A is singular then AB is singular, and rank can never exceed
> the smaller of (number of rows, number of columns).

---

### Q46
```
       +---------------+
       | 1    2   -1   |
  A =  | 2    4   -2   |    After  R2 -> R2 - 2R1  and  R3 -> R3 - 3R1
       | 3    6   -3   |    the rank of A is
       +---------------+

  (a) 3      (b) 2      (c) 1      (d) 0
```
**ANSWER: (c)**
```
       +---------------+
       | 1    2   -1   |
  -->  | 0    0    0   |     one non-zero row  ->  rank = 1
       | 0    0    0   |
       +---------------+
```
> **THE POINT OF THIS QUESTION:** row operations **never change the rank**.
> The rank of the original A was already 1, so the row operations were only a
> way of seeing it. Never "recompute" the rank after row-reducing — the value
> you get IS the rank of the original matrix.

---

### Q47
```
       +-------------+
       | 1   1   1   |
  A =  | 1   2   3   |     If rank(A) = 2, then k =
       | 1   4   k   |
       +-------------+

  (a) 7      (b) 5      (c) 10      (d) 0
```
**ANSWER: (a)**
```
  rank 2 (not 3) means det A = 0 :

      det A = 1(2k - 12) - 1(k - 3) + 1(4 - 2)
            = 2k - 12 - k + 3 + 2
            = k - 7                ->   k = 7

  Confirm it really is rank 2 and not less: the minor  | 1  1 |  = 1,
                                                       | 1  2 |
  which is non-zero, so the rank is exactly 2.
```
> **SHORTCUT:** "rank = 2 for a 3x3" is a two-part statement: det A = 0 gives
> you k, and ONE non-zero 2x2 minor confirms it. Write both lines.

---

# PATTERN 16 — More counting problems (JEE style)

### Q48
The number of 3x3 skew-symmetric matrices with entries from {-1, 0, 1} is

(a) 27 &nbsp;&nbsp; (b) 81 &nbsp;&nbsp; (c) 729 &nbsp;&nbsp; (d) 512

**ANSWER: (a)**
```
  Skew-symmetric forces the diagonal to be 0 - no choice there.
  It also forces  a(j,i) = -a(i,j) - so the LOWER half is decided by the upper.

  FREE entries = the 3 above the diagonal :   a(1,2) , a(1,3) , a(2,3)
  Each has 3 choices  ->   3^3  =  27
```

---

### Q49
The number of 3x3 matrices with entries from {0, 1} whose trace is 1 is

(a) 64 &nbsp;&nbsp; (b) 192 &nbsp;&nbsp; (c) 128 &nbsp;&nbsp; (d) 512

**ANSWER: (b)**
```
  Trace 1 with entries 0 or 1 means EXACTLY ONE diagonal entry is 1.

      choose which diagonal position holds the 1   ->   3 ways
      the other 6 (off-diagonal) entries are free  ->   2^6 = 64

      3 x 64  =  192
```
> **UNIVERSAL METHOD for every counting MCQ:**
> ```
>   STEP 1   Which entries are FORCED by the condition?
>   STEP 2   Count the entries that are still FREE. Call it f.
>   STEP 3   Answer = (number of allowed values)^f  x  (choices in step 1)
> ```

---

# PATTERN 17 — Matrices with complex entries, and their powers

### Q50
```
       +----------+
  A =  |  0   -i  |      Then  A^100  =        ( i^2 = -1 )
       |  i    0  |
       +----------+

  (a) I      (b) A      (c) -I      (d) O
```
**ANSWER: (a)**
```
        +--------------------------------+     +-------+
  A^2 = | 0(0) + (-i)(i)     0(-i)+(-i)0 |  =  | 1   0 |  =  I
        | i(0) + 0(i)        i(-i)+0(0)  |     | 0   1 |
        +--------------------------------+     +-------+

  ( -i x i = -(i^2) = -(-1) = 1 )

  A^2 = I , so A is INVOLUTORY :

      even power  ->  I           odd power  ->  A

  100 is even  ->  A^100 = I
```

---

### Q51
```
       +---------+
  A =  |  i   0  |      Then  A^2023  =
       |  0   i  |
       +---------+

       +----------+        +-----------+        +---------+        +-------+
  (a)  |  i   0   |   (b)  | -i    0   |   (c)  | -1   0  |   (d)  | 1   0 |
       |  0   i   |        |  0   -i   |        |  0  -1  |        | 0   1 |
       +----------+        +-----------+        +---------+        +-------+
```
**ANSWER: (b)**
```
  A = i I , so  A^n = i^n I.   The powers of i repeat every 4 :

      i^1 = i     i^2 = -1     i^3 = -i     i^4 = 1     then it repeats

  2023 = 4(505) + 3      ->      i^2023 = i^3 = -i

              +-----------+
  A^2023 =    | -i    0   |
              |  0   -i   |
              +-----------+
```
> **SHORTCUT for any huge power:** find the PERIOD first (here 4, because
> `A^4 = I`), then divide the exponent by the period and use only the
> remainder. A^2023 = A^3. This works for rotation matrices too.

---

# PATTERN 18 — Assertion and Reason (JEE Main format)

```
  In every one of these, choose:
     (a)  A true , R true , and R IS the correct explanation of A
     (b)  A true , R true , but R is NOT the correct explanation
     (c)  A true , R false
     (d)  A false , R true
```

### Q52
**Assertion (A):** If A and B are symmetric matrices of the same order, then
AB is symmetric.
**Reason (R):** `(AB)' = B' A'` for all conformable matrices A and B.

**ANSWER: (d)**
```
  R is a true, standard result.

  A is FALSE. Test it:
      (AB)' = B'A' = B A        (using B' = B , A' = A)
  and B A is not the same as A B unless they happen to commute.

  Counterexample:
       +-------+        +-------+              +-------+
  A =  | 1   2 |   B =  | 1   0 |        AB =  | 1   4 |   not symmetric
       | 2   1 |        | 0   2 |              | 2   2 |
       +-------+        +-------+              +-------+

  A false , R true   ->   (d)
```
> **The correct statement:** AB is symmetric **if and only if AB = BA**.
> Examiners test this every single year.

---

### Q53
**Assertion (A):** Every 3x3 skew-symmetric matrix has determinant 0.
**Reason (R):** All the diagonal entries of a skew-symmetric matrix are zero.

**ANSWER: (b)**
```
  A is TRUE :   det A = det A' = det(-A) = (-1)^3 det A = -det A
                ->  2 det A = 0  ->  det A = 0        (odd order only)

  R is TRUE :   a(i,i) = -a(i,i)  forces  a(i,i) = 0.

  But R does NOT explain A. A zero diagonal does not force det = 0:
       +-------+
       | 0   1 |     zero diagonal, but det = -1, not 0
       | 1   0 |
       +-------+

  Both true, R not the explanation   ->   (b)
```

---

### Q54
**Assertion (A):** For a 3x3 matrix A, `det(adj A) = (det A)^2`.
**Reason (R):** `A (adj A) = (det A) I`.

**ANSWER: (a)**
```
  Take the determinant of both sides of R :

      det(A) x det(adj A)  =  det( (det A) I )  =  (det A)^3 x det(I)
                           =  (det A)^3

  Cancel one det A  ->  det(adj A) = (det A)^2 .   That is exactly A.

  Both true and R really is the reason   ->   (a)
```

---

### Q55
**Assertion (A):** If A is a 3x3 matrix then `det(2A) = 8 det A`.
**Reason (R):** `det(kA) = k det A` for every scalar k.

**ANSWER: (c)**
```
  A is TRUE :   det(kA) = k^n det A = 2^3 det A = 8 det A.

  R is FALSE :  the scalar comes out of EVERY ROW, so it comes out n times,
                giving k^n, not k.

  A true , R false   ->   (c)
```
> **HOW TO ATTACK ANY ASSERTION-REASON ITEM:**
> ```
>   STEP 1   Judge A on its own. True or false?
>   STEP 2   Judge R on its own. True or false?
>   STEP 3   Only if BOTH are true, ask: does R actually prove A?
>            Try to find a case where R holds but A fails - if you can,
>            the answer is (b).
> ```

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  Two rows/columns proportional    |  determinant is 0 - don't expand   |
  |  "non-trivial / non-zero solution"|  set det A = 0                     |
  |  "find A^n"                       |  compute A^2, A^3, spot pattern,   |
  |                                   |  then test options at n = 2        |
  |  A satisfies a polynomial in A    |  multiply by A^-1 to get inverse   |
  |  det(kA) asked                    |  k^n x det A  (n = ORDER)          |
  |  det(adj A) asked                 |  (det A)^(n-1)                     |
  |  2x2 inverse needed               |  swap diagonal, flip off-diagonal, |
  |                                   |  divide by det                     |
  |  symmetric/skew question          |  take transpose of the WHOLE       |
  |                                   |  expression and compare            |
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
  |  A X = B , A invertible           |  X = A^-1 B (inverse on the LEFT)  |
  |  2x2 system, "no solution" or     |  det = 0 first, THEN scale one row |
  |  "infinitely many"                |  and compare right-hand sides      |
  |  Tr(AB) vs Tr(BA)                 |  they are ALWAYS equal             |
  |  AB - BA = I ?                    |  impossible: trace of I is not 0   |
  |  Tr(A^k) , A triangular           |  d1^k + d2^k + d3^k , diagonal only|
  |  A^2 = kA seen                    |  A^n = k^(n-1) A                   |
  |  A^2 = A  (idempotent)            |  det A = 0 or 1 ; I - A is too     |
  |  A^2 = I  (involutory)            |  A^-1 = A . No calculation.        |
  |  A^k = O  (nilpotent)             |  det A = 0 ; no inverse exists     |
  |  A A' = I  (orthogonal)           |  A^-1 = A' ; det A = +1 or -1      |
  |  det(A + B) asked                 |  add FIRST. It is NOT detA + detB  |
  |  det(A + A) asked                 |  = det(2A) = 2^n det A             |
  |  "how many values of k"           |  det = 0, solve, then TEST each    |
  |  |adj A| given, order 3           |  det A = + or - sqrt(it)           |
  |  adj(adj A), order 3              |  (det A) x A                       |
  |  (adj A)^-1 asked                 |  A / det A                         |
  |  adj(kA) asked                    |  k^(n-1) adj A   (n = order)       |
  |  rank(AB) asked                   |  at most min(rank A , rank B)      |
  |  row operations already done      |  rank is UNCHANGED                 |
  |  count matrices from a set        |  (size of set)^(free entries)      |
  |  entries contain i                |  use i^4 = 1 ; reduce the power    |
  |  Assertion-Reason question        |  test A, test R, then ask if R     |
  |                                   |  really explains A                 |
  +-----------------------------------+------------------------------------+
```

---

# THE NUMBER-SUBSTITUTION TRICK

If a question asks for the value of a determinant "in terms of a, b, c" and the
options are algebraic expressions:

```
  STEP 1   Put easy numbers in:   a = 1 ,  b = 2 ,  c = 3
  STEP 2   Compute the determinant with those numbers.
  STEP 3   Compute each OPTION with those numbers.
  STEP 4   Whichever option matches is the answer.
```

This turns a 4-minute algebra proof into a 40-second arithmetic check.
Use it whenever the options are formulas, not numbers.
