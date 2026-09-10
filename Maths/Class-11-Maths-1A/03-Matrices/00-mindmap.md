# Matrices — Mind Map

**Maths 1A · Chapter 3 · Highest-scoring chapter in IA**
Every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                            M A T R I C E S
                                  |
    +-----------+-----------+-----+-----+-----------+-----------+
    |           |           |           |           |           |
  BASICS     ALGEBRA     SPECIAL    DETERMINANT   RANK      SOLVING
    |           |          TYPES         |          |       EQUATIONS
    |           |           |            |          |           |
  Order       Add /      Symmetric    2x2 rule    By minors  Matrix
  m x n       Subtract   A' = A       ad - bc                Inversion
    |           |           |            |          |           |
  Element     Scalar     Skew-sym     3x3 rule    By echelon  Cramer's
  a(i,j)      k x A      A' = -A      + - +       form         Rule
    |           |           |            |          |           |
  Types       Multiply   Orthogonal   Properties  rank <=     Gauss-
  (see below) row x col  A A' = I     (9 rules)   min(m,n)    Jordan
    |           |           |            |                      |
  Trace       Transpose  Idempotent   Minors                  Check
  = sum of    A'         A^2 = A      Cofactors               consistency
  diagonal      |           |            |                    using rank
                |        Involutory   Adjoint
            (AB)' = B'A' A^2 = I         |
                                      INVERSE
                                   A^-1 = adjA / detA
```

---

## TYPES OF MATRICES (the family tree)

```
                        SQUARE MATRIX
                       (rows = columns)
                              |
        +---------------------+---------------------+
        |                                           |
   TRIANGULAR                                   DIAGONAL
        |                                     (all off-diagonal
   +----+----+                                   entries = 0)
   |         |                                        |
 Upper     Lower                                   SCALAR
 (zeros    (zeros                            (all diagonal entries
  below)    above)                                  equal)
                                                      |
                                                  IDENTITY  I
                                            (diagonal entries = 1)
```

Read it downwards: every identity matrix is scalar, every scalar matrix is diagonal,
every diagonal matrix is square. **The reverse is NOT true.**

---

## THE 60-SECOND VERSION

A matrix is just numbers arranged in a rectangle. Nothing more.

Everything in this chapter is one of four jobs:

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Arrange & combine | add, subtract, multiply matrices | Section A, 2 marks |
| Classify | is it symmetric / skew / singular? | Section A, 2 marks |
| Measure | determinant, rank | Section B, 4 marks |
| Solve | 3 equations in 3 unknowns | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IA)

| Topic | Section | Marks |
|-------|---------|-------|
| Order, equality, trace, find x and y | A | 2 |
| Symmetric / skew-symmetric check | A or B | 2 or 4 |
| Determinant value or property proof | B | 4 |
| Rank of a 3x3 matrix | B | 4 |
| **Solve 3 equations (named method)** | **C** | **7** |
| Determinant identity proof | C | 7 |

**Total available from this one chapter: about 13-15 marks out of 75.**

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Basics & Types
              |
  STEP 2   Addition / Multiplication
              |
     +--------+--------+
     |                 |
  STEP 3          STEP 5
  Transpose       Determinant
     |                 |
  STEP 4          STEP 6
  Symmetric &     Minors & Cofactors
  Skew-symmetric       |
                  STEP 7
                  Adjoint
                       |
                  STEP 8
                  Inverse
                       |
     +-----------------+-----------------+
     |                 |                 |
  STEP 9          STEP 10           STEP 11
  Matrix          Cramer's          Gauss-Jordan
  Inversion       Rule
     |                 |                 |
     +--------+--------+-----------------+
              |
        SOLVE 3 EQUATIONS  (the 7-mark question)
              |
        STEP 12  Rank  ->  Consistency
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning** — Types of matrices + trace + equality. All 2-mark questions.

**Day 1 evening** — 3x3 determinant + adjoint + inverse. Do 5 problems.

**Day 2 morning** — Cramer's Rule. It is the EASIEST of the three methods:
you only compute 4 determinants. No transposes, no cofactor matrix.

**Day 2 evening** — Matrix Inversion Method on the SAME question you already
did with Cramer. Same answer = you know you got it right.

That alone is worth about 13 of the 75 marks in Maths IA.
