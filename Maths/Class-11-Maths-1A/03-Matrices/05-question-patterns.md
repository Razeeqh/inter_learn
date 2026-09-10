# Matrices — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — CONSTRUCT A MATRIX FROM A RULE                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Construct a 2x3 matrix where a(i,j) = ..."
  METHOD    Substitute each (i,j) pair in order:
            (1,1) , (1,2) , (1,3) , (2,1) , (2,2) , (2,3)
            Write the results inside a bracket.
  TRAP      Writing the order backwards. ROWS first, then COLUMNS.
```

```
  PATTERN 2 — FIND UNKNOWNS FROM EQUALITY OF MATRICES             2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two matrices joined by "=" with letters inside them.
  METHOD    Equate corresponding positions.
            Each position gives one small ordinary equation. Solve them.
  TRAP      If the orders differ, the matrices can NEVER be equal.
            Say so - that is the full answer.
```

```
  PATTERN 3 — IDENTIFY THE TYPE OF MATRIX                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Is A symmetric / skew / singular / orthogonal / idempotent?"
  METHOD
            ASKED FOR           COMPUTE      CONCLUSION
            ----------------    ---------    -----------------------------
            symmetric           A'           A' = A
            skew-symmetric      A'           A' = -A and diagonal all zero
            singular            det A        det A = 0
            orthogonal          A A'         A A' = I
            idempotent          A^2          A^2 = A
            involutory          A^2          A^2 = I
            nilpotent           A^2, A^3     some power = O
```

```
  PATTERN 4 — FIND x SO THAT A IS SYMMETRIC / SKEW                2 marks
  ------------------------------------------------------------------------
  TRIGGER   A matrix with ONE letter in it, plus the word
            "symmetric" or "skew-symmetric".
  METHOD    symmetric  ->  set  a(i,j) = a(j,i)
            skew       ->  set  a(i,j) = -a(j,i)
            One equation, one answer.
```

```
  PATTERN 5 — TRACE                                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find Tr(A)" or the trace of some combination.
  METHOD    Add the diagonal entries.
            Use  Tr(aA + bB) = a Tr(A) + b Tr(B)  for combinations.
  TRAP      Trace only exists for SQUARE matrices.
```

```
  PATTERN 6 — MATRIX MULTIPLICATION / PRODUCT IS NULL          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find AB" , or "Show that AB = O" , or the
            cos^2 a / cos^2 b product question.
  METHOD    1. Check conformability (inner numbers match).
            2. Row of A times column of B, entry by entry.
            3. Simplify.
            For the trigonometric one: factor cos(a - b) out of every entry.
  TRAP      Multiplying in the wrong order. AB is not BA.
```

```
  PATTERN 7 — PROVE A TRANSPOSE IDENTITY                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   Anything with a dash mark:  "(AB)' = B'A'" ,
            "prove AB - BA is skew-symmetric".
  METHOD    1. Take the transpose of the WHOLE expression.
            2. Apply  (AB)' = B'A'  and  (A + B)' = A' + B'.
            3. Substitute the given conditions (A' = A , B' = -B ...).
            4. Compare the result with the original expression.
  TRAP      Forgetting that the order reverses in (AB)'.
```

```
  PATTERN 8 — EXPRESS A AS SYMMETRIC + SKEW-SYMMETRIC             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express as the sum of a symmetric and a skew-symmetric matrix."
  METHOD    P = (1/2)(A + A')       symmetric part
            Q = (1/2)(A - A')       skew part
            State  A = P + Q  and verify  P' = P  and  Q' = -Q.
  TRAP      Forgetting the 1/2. This loses half the marks.
```

```
  PATTERN 9 — EVALUATE A DETERMINANT                           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the value of det A."
  METHOD    1. FIRST look for zeros or proportional rows - the answer may
               be 0 with no work at all.
            2. Otherwise expand along the row or column that contains the
               MOST zeros, using the sign board  + - +.
```

```
  PATTERN 10 — PROVE A DETERMINANT IDENTITY               4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that | ... | = (some factorised expression)"
  METHOD    A fixed 4-step recipe:
            1. If every row sums to the same thing:
                  R1 -> R1 + R2 + R3   and take out the common factor.
            2. Create zeros:
                  C2 -> C2 - C1   and   C3 -> C3 - C1
                  (or the row version)
            3. Take out any common factor from a row or column.
            4. Expand the reduced determinant.
  TRAP      Never mix a ROW operation and a COLUMN operation in the same
            step. Do them one at a time and label each step.
```

```
  PATTERN 11 — DETERMINANT WITH A PARAMETER                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find k if the matrix is singular" / "if det A = 0".
  METHOD    Expand the determinant, set it equal to 0, solve for k.
```

```
  PATTERN 12 — MINORS, COFACTORS, ADJOINT                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the cofactor of a(2,3)" / "Find adj A".
  METHOD    1. Delete the row and column -> gives the MINOR.
            2. Apply the sign (-1)^(i+j) -> gives the COFACTOR.
            3. Assemble the cofactor matrix.
            4. TRANSPOSE it -> gives the ADJOINT.
  TRAP      Forgetting step 4. This is the single most common lost mark in
            the entire chapter.
```

```
  PATTERN 13 — FIND THE INVERSE                                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find A^-1."
  METHOD    1. Compute det A.
               If det A = 0, STOP and write "inverse does not exist".
            2. Find all cofactors.
            3. Transpose to get adj A.
            4. Divide by det A.
            5. Verify  A x A^-1 = I.
```

```
  PATTERN 14 — MATRIX SATISFIES A POLYNOMIAL, HENCE FIND A^-1     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that A^2 - 4A - 5I = O, hence find A^-1."
  METHOD    1. Verify the identity by direct multiplication.
            2. Multiply the identity through by A^-1:

                  A^2 - 4A - 5I = O
                  A - 4I - 5 A^-1 = O
                  A^-1 = (1/5)(A - 4I)
```

```
  PATTERN 15 — FIND A^n                                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A^n = ?" or "Prove by induction that A^n = ..."
  METHOD    1. Compute A^2 and A^3.
            2. Spot the pattern.
            3. Prove by induction: assume true for n = k, multiply by A.
  SHORTCUT  In an MCQ, just test each option at n = 2.
```

```
  PATTERN 16 — RANK OF A MATRIX                                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the rank of ..."
  METHOD    For 3x3:
               det A not 0                    ->  rank 3
               det A = 0, some 2x2 minor not 0 -> rank 2
               all 2x2 minors 0, A not O       -> rank 1
            For rectangular: row-reduce to echelon form,
               rank = number of non-zero rows.
  TRAP      Rank can never exceed the smaller of (rows, columns).
            Use this to sanity-check your answer.
```

```
  PATTERN 17 — SOLVE A X = B BY MATRIX INVERSION METHOD    *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The exact words "matrix inversion method".
  METHOD    1. Write A, X, B.
            2. Find det A.
            3. Find all 9 cofactors.
            4. TRANSPOSE the cofactor matrix -> adj A.
            5. X = (1 / det A) x (adj A) x B.
  TIME      About 8 minutes.
  ALWAYS    Substitute your answer back into ONE original equation.
```

```
  PATTERN 18 — SOLVE A X = B BY CRAMER'S RULE             *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The words "Cramer's rule" or "determinant method".
  METHOD    D  = det A
            D1 = D with column 1 replaced by B
            D2 = D with column 2 replaced by B
            D3 = D with column 3 replaced by B

            x = D1/D ,  y = D2/D ,  z = D3/D
  NOTE      This is the EASIEST of the three methods. If the question just
            says "solve", pick this one.
```

```
  PATTERN 19 — SOLVE A X = B BY GAUSS-JORDAN METHOD       *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The words "Gauss-Jordan" or "row reduction".
  METHOD    1. Build the augmented matrix [ A | B ].
            2. Use row operations until the left block becomes I.
            3. Read x, y, z off the right block.
  TRAP      COLUMN operations are NOT allowed in this method.
```

```
  PATTERN 20 — TEST CONSISTENCY OF A SYSTEM                       7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Examine the consistency" / "Show the system has infinitely
            many solutions".
  METHOD    Find rank(A) and rank([A|B]) from the echelon form, then:

               equal and = n   ->  unique solution
               equal and < n   ->  infinitely many
                                   (introduce a parameter, e.g. z = t)
               not equal       ->  inconsistent, no solution
```

```
  PATTERN 21 — HOMOGENEOUS SYSTEM WITH A NON-TRIVIAL SOLUTION     4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three equations all equal to 0, plus "has a non-zero solution".
  METHOD    Set det A = 0 and solve for the unknown constant.
```

```
  PATTERN 22 — SHORT OBJECTIVE IDENTITIES                        1 mark
  ------------------------------------------------------------------------
  TRIGGER   Quick MCQ asking det(kA), det(adj A), det(A^-1), adj(AB),
            or counting matrices.
  METHOD    Pure formula recall. See section 5 to 7 of 02-formulae.md.
```

```
  PATTERN 23 — FIND THE RANK BY REDUCING TO ECHELON FORM          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the rank of ..." where the matrix is 3x4, 4x3, 4x4, or
            any shape where determinants are awkward.
  METHOD    1. Get a 1 in the top-left corner. Swap two rows if that helps.
            2. Kill the rest of column 1:
                  R2 -> R2 - a(2,1) R1 ,   R3 -> R3 - a(3,1) R1 , ...
            3. Move down-right to the next pivot and kill the entries
               BELOW it in the same way. Ignore everything above.
            4. Stop when the matrix is a staircase (each row starts with
               more zeros than the row above).
            5. RANK = the number of NON-ZERO rows. Write that sentence.

            Shape you are aiming for:

                  +-----------------+
                  |  1   *   *   *  |
                  |  0   1   *   *  |     3 non-zero rows  ->  rank 3
                  |  0   0   1   *  |
                  |  0   0   0   0  |
                  +-----------------+

  TRAP      Row operations NEVER change the rank, so the number you count
            at the end IS the rank of the ORIGINAL matrix. Do not "adjust"
            it. Also: rank can never exceed the smaller of (rows, columns),
            and only the ZERO matrix has rank 0.
```

```
  PATTERN 24 — HOMOGENEOUS SYSTEM: WHEN IS THERE A NON-TRIVIAL
               SOLUTION, AND WHAT IS IT                      4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   Every right-hand side is 0:
                  a1 x + b1 y + c1 z = 0
                  a2 x + b2 y + c2 z = 0
                  a3 x + b3 y + c3 z = 0

  METHOD    1. Say this first, it is free marks:
                 "x = y = z = 0 always satisfies the system, so a
                  homogeneous system is NEVER inconsistent."
            2. Then the whole question is one test:

                  det A  not 0   ->  ONLY the trivial solution x=y=z=0
                  det A  =   0   ->  infinitely many solutions, so a
                                     NON-TRIVIAL solution exists

            3. If asked to FIND them:
                  a. Row-reduce to echelon form.
                  b. One variable is free. Put  z = t.
                  c. Back-substitute to get y and x in terms of t.
                  d. Write the answer as (x, y, z) = t (p, q, r).
            4. Check by substituting t = 1 into all three equations.

  TRAP      Writing "no solution". A homogeneous system ALWAYS has at
            least one solution. The only two possible answers are
            "only the trivial one" and "infinitely many".
```

```
  PATTERN 25 — MATRIX SATISFIES A POLYNOMIAL, HENCE FIND A POWER  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Given A^2 = 5A - 7I, find A^3"  /  "If A^2 - 4A + 3I = O,
            find A^4."   (Pattern 14 is the same set-up asking for A^-1.)

  METHOD    1. Rearrange the given relation into the form
                  A^2 = pA + qI
            2. Multiply BOTH sides by A:
                  A^3 = pA^2 + qA
            3. Substitute the step-1 result for A^2 again:
                  A^3 = p(pA + qI) + qA = (p^2 + q)A + pq I
            4. Repeat for A^4 if needed. The answer is always of the
               form  (number)A + (number)I .

            WORKED EXAMPLE:   A^2 = 5A - 7I

                  A^3 = 5A^2 - 7A
                      = 5(5A - 7I) - 7A
                      = 25A - 35I - 7A
                      = 18A - 35I

                  (Verified with A = | 2  -1 | , which has A^2 = 5A - 7I:
                                     | 1   3 |
                   A^3 = | 1  -18 |  and  18A - 35I = | 1  -18 | .  SAME.)
                         | 18  19 |                   | 18  19 |

  TRAP      Never compute A^4 by brute-force multiplication - that is four
            multiplications and a guaranteed arithmetic slip. Reduce first.
            Also remember A x I = A, not I.
```

```
  PATTERN 26 — PROVE A PROPERTY OF A PRODUCT USING TRANSPOSE RULES 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that A'A is symmetric" , "If A is symmetric prove that
            B'AB is symmetric" , "Prove (ABC)' = C'B'A'".

  METHOD    1. Give the whole product a name:  let P = B'AB.
            2. Take P' and REVERSE the order of every factor:
                  (B'AB)'  =  B' A' (B')'
            3. Use (B')' = B  and the given condition A' = A:
                  =  B' A B  =  P
            4. State the conclusion in words: "P' = P, so P is symmetric."

            The three rules you are allowed to quote:
                  (AB)'  = B'A'          (order reverses)
                  (ABC)' = C'B'A'        (order reverses completely)
                  (A')'  = A
                  (A + B)' = A' + B'     (order does NOT matter here)

  TRAP      Two marks die here every year:
            - forgetting that the order reverses, and writing A'B';
            - forgetting that (B')' = B and leaving B'' in the answer.
            Also note A'A is symmetric for EVERY matrix A, even
            rectangular ones - no condition on A is needed.
```

```
  PATTERN 27 — TWO UNKNOWN MATRICES / LINEAR COMBINATION       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Solve  2X + Y = P  and  3X - 2Y = Q  for X and Y"  /
            "Find x and y such that  A = xI + yB".

  METHOD    (a) TWO EQUATIONS, TWO UNKNOWN MATRICES
                1. Treat X and Y like ordinary letters. Addition and
                   scalar multiplication behave exactly as in algebra.
                2. Eliminate one of them:
                      2 x (first) + (second)   kills Y, and so on.
                3. You end with  kX = (a numerical matrix).
                   Multiply by the SCALAR 1/k, entry by entry.
                4. Put X back into the simpler equation to get Y.
                5. Check both original equations.

            (b) LINEAR COMBINATION  A = xI + yB
                1. Write xI + yB as ONE matrix, entry by entry.
                2. Equate two convenient positions -> two small equations.
                3. Solve for x and y.
                4. CHECK with a third position. If it fails, no such
                   x and y exist - say so, that is the answer.

  TRAP      There is no such thing as dividing by a matrix. You may only
            divide by a SCALAR. Also, every matrix in the equation must
            have the same order or nothing can be added at all.
```

```
  PATTERN 28 — ADJOINT AND DETERMINANT IDENTITIES (objective only) 1 mark
  ------------------------------------------------------------------------
  TRIGGER   A one-line MCQ made only of det, adj and inverse symbols.

  METHOD    Write n = 3 (or n = 2) on your paper FIRST, then read off:

            +--------------------------------------------------------+
            |  det(A')       =  det A                                |
            |  det(AB)       =  det A x det B                        |
            |  det(A + B)    is NOT det A + det B                    |
            |  det(kA)       =  k^n det A                            |
            |  det(A^-1)     =  1 / det A                            |
            |  A (adj A)     =  (det A) I                            |
            |  det(adj A)    =  (det A)^(n-1)                        |
            |  det(adj(adj A)) = (det A)^((n-1)^2)                   |
            |  adj(adj A)    =  (det A)^(n-2) A                      |
            |  adj(kA)       =  k^(n-1) adj A                        |
            |  adj(AB)       =  (adj B)(adj A)     -- order reverses |
            |  (adj A)^-1    =  adj(A^-1)  =  A / det A              |
            +--------------------------------------------------------+

  TRAP      Mixing up n and n - 1. det(kA) uses n; adj(kA) uses n - 1.
            Say the order out loud before substituting.
            Second trap: |adj A| = 16 gives |A| = +4 OR -4. Two answers.
```

```
  PATTERN 29 — "WHICH OF THESE STATEMENTS IS FALSE"              1 mark
  ------------------------------------------------------------------------
  TRIGGER   Four short statements about matrices; exactly one is wrong.

  METHOD    Do not think. Scan for these six classic traps - the false
            option is almost always one of them:

              1.  AB = BA                          FALSE in general
              2.  det(A + B) = det A + det B       FALSE
              3.  (AB)' = A'B'                     FALSE, it is B'A'
              4.  AB = O means A = O or B = O      FALSE
              5.  A, B symmetric -> AB symmetric   FALSE unless AB = BA
              6.  det(kA) = k det A                FALSE, it is k^n det A

            If none of the six appears, build a counterexample with these
            two tiny matrices - they break almost everything:

                  +-------+        +-------+              +-------+
             A =  | 1   0 |   B =  | 0   0 |        AB =  | 0   0 |  = O
                  | 0   0 |        | 0   1 |              | 0   0 |
                  +-------+        +-------+              +-------+

            Neither A nor B is the zero matrix, yet AB = O. That single
            example kills trap 4 and several others.

  TRAP      Assuming a statement is true because it looks like ordinary
            number algebra. Matrices break commutativity, cancellation and
            the zero-product rule. Those three are where the false option
            always hides.
```

```
  PATTERN 30 — USE THE DEFINING PROPERTY OF A SPECIAL MATRIX   1 or 2 marks
  ------------------------------------------------------------------------
  TRIGGER   The words idempotent, involutory, nilpotent or orthogonal
            appear anywhere in the question.

  METHOD    1. Write the defining equation down immediately.
            2. Answer using ONLY that equation - never multiply the
               matrix out.

            idempotent  A^2 = A   ->  A^n = A for every n
                                  ->  det A = 0 or 1
                                  ->  I - A is idempotent too
            involutory  A^2 = I   ->  A^-1 = A
                                  ->  even power = I, odd power = A
                                  ->  det A = +1 or -1
            nilpotent   A^k = O   ->  det A = 0, so A^-1 does NOT exist
                                  ->  (I - A)^-1 = I + A + A^2 + ...
            orthogonal  A A' = I  ->  A^-1 = A'
                                  ->  det A = +1 or -1
                                  ->  every row has length 1 and any two
                                      different rows are perpendicular

  TRAP      Being asked for A^-1 of a nilpotent matrix and trying to
            compute it. It does not exist - say so and move on.
            Second trap: for an orthogonal matrix, use ONE length equation
            and ONE dot product. Multiplying out the full 3x3 product
            wastes four minutes.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +--------------------------------------------------------+---------+
  |  QUESTION STEM                                         | PATTERN |
  +--------------------------------------------------------+---------+
  |  "... by Cramer's rule"                                |   18    |
  |  "... prove A + A' is symmetric"                       |    7    |
  |  "Find k if the system has a non-zero solution"        |   21    |
  |  "Find the rank of ..."                                |   16    |
  |  "... hence find A^-1"  after a polynomial identity    |   14    |
  |  "Show that | ... | = (a-b)(b-c)(c-a)"                 |   10    |
  |  "Construct a 2x3 matrix with a(i,j) = ..."            |    1    |
  |  "Express as sum of symmetric and skew-symmetric"      |    8    |
  |  "Find Tr(A)"                                          |    5    |
  |  "... by Gauss-Jordan method"                          |   19    |
  +--------------------------------------------------------+---------+
  |  "Find the rank by reducing to echelon form"           |   23    |
  |  "... has a non-trivial solution, solve it"            |   24    |
  |  "If A^2 = 5A - 7I, find A^3"                          |   25    |
  |  "Prove that A'A is symmetric"                         |   26    |
  |  "Solve 2X + Y = P , 3X - 2Y = Q"                      |   27    |
  |  "adj(adj A) = ?"  /  "(adj A)^-1 = ?"                 |   28    |
  |  "Which of the following is FALSE?"                    |   29    |
  |  "A is idempotent. Then I - A is ..."                  |   30    |
  +--------------------------------------------------------+---------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  TIER 1  --  the Section A two-markers. Learn these first.           |
  |                                                                      |
  |     Pattern 1   construct a matrix from a rule          2 marks      |
  |     Pattern 2   equality of matrices, find x, y, z      2 marks      |
  |     Pattern 5   trace                                   2 marks      |
  |     Pattern 3   identify the type of matrix             2 marks      |
  |     Pattern 12  minors, cofactors, adjoint              2 marks      |
  |                                                                      |
  |     -> 2 marks in Section A, and they take one minute each.          |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  TIER 2  --  the 4-mark machines. Fixed recipes, no thinking.        |
  |                                                                      |
  |     Pattern 8   symmetric + skew-symmetric split        4 marks      |
  |     Pattern 26  transpose proof about a product         4 marks      |
  |     Pattern 14  polynomial in A, hence A^-1             4 marks      |
  |     Pattern 23  rank by echelon form                    4 marks      |
  |                                                                      |
  |     -> 4 marks in Section B. Learn any two of the four.              |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  TIER 3  --  the 7-mark question. It is ALWAYS a system of           |
  |              equations. Learn Cramer first, it is the shortest.      |
  |                                                                      |
  |     Pattern 18  Cramer's rule    <- learn this one      7 marks      |
  |     Pattern 17  matrix inversion method                 7 marks      |
  |     Pattern 19  Gauss-Jordan method                     7 marks      |
  |     Pattern 20  consistency of a system                 7 marks      |
  |     Pattern 24  homogeneous system, solve it            7 marks      |
  |                                                                      |
  |     -> 7 marks in Section C. The wording of the question tells you   |
  |        which of the five to use, so learn to read the wording.       |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  TIER 4  --  MCQ only. Nothing to write, just recall. These are      |
  |              pure EAPCET and JEE marks.                              |
  |                                                                      |
  |     Pattern 22  short objective identities              1 mark       |
  |     Pattern 28  adjoint and determinant identities      1 mark       |
  |     Pattern 29  which statement is FALSE                1 mark       |
  |     Pattern 30  use the defining property               1 mark       |
  |                                                                      |
  |     -> 4 to 6 questions in EAPCET, 2 to 3 in JEE Main.               |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  REALISTIC TOTAL FROM THIS CHAPTER:   13 marks out of 75.            |
  |                                                                      |
  |  Pass mark is 26. This one chapter gets you halfway there, and       |
  |  every single step in it is a fixed recipe you can rehearse.         |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The last thing to do in every question

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   SUBSTITUTE YOUR ANSWER BACK.                                       |
  |                                                                      |
  |   Found x, y, z ?      Put them into ONE original equation.          |
  |   Found A^-1 ?         Multiply A x A^-1 and check you get I.        |
  |   Found adj A ?        Check A x adj A = (det A) I.                  |
  |   Split A = P + Q ?    Check P' = P and Q' = -Q.                     |
  |                                                                      |
  |   It costs two minutes and it turns "I think this is right" into     |
  |   "I know this is right".                                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**
