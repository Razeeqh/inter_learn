# Mathematical Induction — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 2 — Mathematical Induction**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> so everything below is grouped by **how often it appears**, not tagged to a
> single exam year. Before your exam, cross-check against the official question
> papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  Section A  (2 marks each, answer ALL 10)   ->  rarely from Ch 2    |
  |                                                                     |
  |  Section B  (4 marks each, answer any 5)    ->  rarely from Ch 2    |
  |                                                                     |
  |  Section C  (7 marks each, answer any 5)    ->  *** ONE QUESTION    |
  |                                                    ALMOST EVERY     |
  |                                                    YEAR ***         |
  |                                                 usually Q22         |
  |                                                 (sometimes Q21/23)  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Be honest with yourself about this chapter:** in the real BIEAP Maths IA paper
it is essentially a **Section C chapter**. The 2-mark and 4-mark questions below
are the ones that appear in **unit tests, model papers and school exams**, and
they are the building blocks of the 7-mark answer. Do them, but understand that
the money is in Section C.

```
  +=====================================================================+
  |                                                                     |
  |   WHY THIS CHAPTER IS YOUR BEST DEAL IN THE WHOLE PAPER             |
  |                                                                     |
  |   Section C gives you 7 questions and you answer any 5.             |
  |   One of those 7 is nearly always Mathematical Induction.           |
  |                                                                     |
  |   The METHOD NEVER CHANGES. Six steps, every single time.           |
  |   Even for a formula you have never seen, Steps 1, 2, 3, 4 and 6    |
  |   are worth about 5 of the 7 marks and require no cleverness.       |
  |                                                                     |
  |   Decide NOW that this is one of your five Section C answers.       |
  |                                                                     |
  +=====================================================================+
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# The building blocks. Fast, mechanical marks.
# ===============================================================

## Topic: The principle itself

### Q A1
State the Principle of Finite Mathematical Induction.

**ANSWER:**
```
  Let S(n) be a statement about a natural number n. If

     (i)  S(1) is true, and

     (ii) for every natural number k, S(k) being true implies
          that S(k+1) is true,

  then S(n) is true for every natural number n.
```

---

### Q A2
Name the two steps of a proof by mathematical induction.

**ANSWER:**
```
  1. The BASE STEP    - verify that S(1) is true.
  2. The INDUCTIVE STEP - assume S(k) is true and prove S(k+1) is true.
```

---

### Q A3
A student proves the inductive step correctly but never checks `n = 1`. Is the
proof complete? Give a reason.

**ANSWER:**
```
  NO. Without the base step no case is ever established, so the chain
  never starts.

  Example:  S(n):  1 + 2 + ... + n = n(n+1)/2 + 7
  The inductive step works (the +7 just carries through), but S(1) is
  false, so S(n) is false for every n.

  Domino picture: the dominoes are all lined up correctly, but nobody
  pushed the first one, so none of them fall.
```

---

## Topic: Writing S(1), S(k), S(k+1)

### Q A4
If `S(n): 1 + 2 + 3 + ... + n = n(n+1)/2`, write down `S(1)` and verify it.

**ANSWER:**
```
  S(1):  1 = 1(1+1)/2

  LHS = 1
  RHS = 1 x 2 / 2 = 1
  LHS = RHS, so S(1) is TRUE.
```

---

### Q A5
If `S(n): 1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6`, write down `S(k+1)`.

**ANSWER:**
```
  Replace every n by k+1:

  S(k+1):  1^2 + 2^2 + ... + k^2 + (k+1)^2  =  (k+1)(k+2)(2k+3)/6

  (because (k+1)+1 = k+2  and  2(k+1)+1 = 2k+3)
```

---

### Q A6
For `S(n): 1 + 3 + 5 + ... + (2n - 1) = n^2`, write the `(k+1)`th term of the LHS.

**ANSWER:**
```
  nth term  t(n) = 2n - 1
  So        t(k+1) = 2(k+1) - 1 = 2k + 2 - 1 = 2k + 1
```

---

### Q A7
Write the `n`th term of the series `1.2 + 2.3 + 3.4 + ...` and hence the
`(k+1)`th term.

**ANSWER:**
```
  Terms: 1x2, 2x3, 3x4 ...  each is (the number) x (the next number)

  t(n)   = n(n + 1)
  t(k+1) = (k + 1)(k + 2)
```

---

### Q A8
Write the `n`th term of `2 + 3.2 + 4.2^2 + 5.2^3 + ...`

**ANSWER:**
```
  Coefficients: 2, 3, 4, 5 ...        ->  (n + 1)
  Powers of 2:  2^0, 2^1, 2^2, 2^3 ... ->  2^(n-1)

  t(n) = (n + 1) 2^(n-1)

  Check n = 1:  2 x 2^0 = 2.  Correct.
```

---

### Q A9
Write the `n`th term of `1/(1.4) + 1/(4.7) + 1/(7.10) + ...`

**ANSWER:**
```
  First factors : 1, 4, 7, 10 ...  ->  3n - 2
  Second factors: 4, 7, 10, 13 ... ->  3n + 1

                    1
  t(n) = -----------------------
           (3n - 2)(3n + 1)

  Check n = 1:  1/(1 x 4) = 1/4.  Correct.
```

---

### Q A10
Write the `n`th term of `1.2^2 + 2.3^2 + 3.4^2 + ...` and of `1^2.2 + 2^2.3 + 3^2.4 + ...`

**ANSWER:**
```
  1.2^2 + 2.3^2 + ...    ->   t(n) = n (n + 1)^2      (square on the BIGGER)
  1^2.2 + 2^2.3 + ...    ->   t(n) = n^2 (n + 1)      (square on the SMALLER)
```

---

## Topic: Base-step checks

### Q A11
Verify the base step for the statement "`49^n + 16n - 1` is divisible by 64".

**ANSWER:**
```
  n = 1:   49^1 + 16(1) - 1  =  49 + 16 - 1  =  64  =  64 x 1

  Divisible by 64, so S(1) is TRUE.
```

---

### Q A12
Verify the base step for "`3.5^(2n+1) + 2^(3n+1)` is divisible by 17".

**ANSWER:**
```
  n = 1:   3 x 5^3 + 2^4  =  3(125) + 16  =  375 + 16  =  391

           391 / 17 = 23,  so 391 = 17 x 23.

  Divisible by 17, so S(1) is TRUE.
```

---

### Q A13
Verify the base step for "`4^n - 3n - 1` is divisible by 9". Is your answer valid?

**ANSWER:**
```
  n = 1:   4 - 3 - 1  =  0  =  9 x 0

  Yes, it is valid: ZERO is divisible by every non-zero integer.
  So S(1) is TRUE.
  (Check n = 2 for reassurance: 16 - 6 - 1 = 9 = 9 x 1.)
```

---

### Q A14
For which values of `n` is `2^n > n^2` true? Find the base step value.

**ANSWER:**
```
  n = 1 :   2  >  1     TRUE
  n = 2 :   4  >  4     FALSE
  n = 3 :   8  >  9     FALSE
  n = 4 :  16  > 16     FALSE
  n = 5 :  32  > 25     TRUE

  So the statement is proved for n >= 5, and the BASE STEP is n = 5.
```

---

### Q A15
Find the smallest natural number `n` for which `n! > 2^n`.

**ANSWER:**
```
  n = 1 :   1  >  2   ?  no
  n = 2 :   2  >  4   ?  no
  n = 3 :   6  >  8   ?  no
  n = 4 :  24  > 16   ?  YES

  Smallest n = 4.
```

---

## Topic: Small assumption-writing

### Q A16
For "`n^3 + 2n` is divisible by 3", write the inductive hypothesis as an equation.

**ANSWER:**
```
  Assume S(k) is true, that is

        k^3 + 2k  =  3m ,  where m is an integer.

  (Always write it as an EQUATION. You cannot do algebra with the
   word "divisible".)
```

---

### Q A17
For "`2^(3n) - 1` is divisible by 7", write the assumption and rearrange it to make
`2^(3k)` the subject.

**ANSWER:**
```
  Assume:   2^(3k) - 1  =  7m ,  m an integer.

  So        2^(3k)  =  7m + 1.

  (Note 2^(3k) = (2^3)^k = 8^k, so this says 8^k = 7m + 1.)
```

---

### Q A18
Prove that `1 + 2 + 3 + ... + n = n(n+1)/2` is true for `n = 1, 2, 3`. Does this
prove the statement for all `n`? Why or why not?

**ANSWER:**
```
  n = 1:  LHS = 1,      RHS = 1(2)/2 = 1       agree
  n = 2:  LHS = 3,      RHS = 2(3)/2 = 3       agree
  n = 3:  LHS = 6,      RHS = 3(4)/2 = 6       agree

  NO, this does not prove it for all n. There are infinitely many
  natural numbers and only three have been checked. A proof needs the
  inductive step as well.
```

---

## Topic: Recognising the type

### Q A19
Classify each statement as SUM, DIVISIBILITY, INEQUALITY or PRODUCT type.

```
  (a)  3^n > 2^n
  (b)  11 divides 2.4^(2n+1) + 3^(3n+1)
  (c)  1.2 + 2.3 + ... + n(n+1) = n(n+1)(n+2)/3
  (d)  (1 + 1/1)(1 + 1/2)...(1 + 1/n) = n + 1
```

**ANSWER:**
```
  (a) INEQUALITY   (b) DIVISIBILITY   (c) SUM   (d) PRODUCT
```

---

### Q A20
Write the concluding sentence of a proof by mathematical induction.

**ANSWER:**
```
  "S(1) is true, and S(k) true implies S(k+1) is true.
   Hence, by the principle of finite mathematical induction, S(n) is
   true for all n in N."

  (If the claim starts at n = 5, the last words must be
   "for all natural numbers n >= 5".)
```

---

### Q A21
`a(1) = 1` and `a(n+1) = a(n) + 2`. Write the first four terms and guess a formula
for `a(n)`.

**ANSWER:**
```
  a(1) = 1
  a(2) = 1 + 2 = 3
  a(3) = 3 + 2 = 5
  a(4) = 5 + 2 = 7

  Guess:  a(n) = 2n - 1   (to be proved by induction).
```

---

### Q A22
Explain in one sentence why the inductive step must be proved for a **general** `k`
and not just for `k = 1`.

**ANSWER:**
```
  Because the chain must work at EVERY position: each domino must knock
  over the next one no matter where it stands in the row. Proving it only
  at k = 1 knocks over just the second domino and stops.
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Full six-step answers on the shorter results.
# ===============================================================

### Q B1
**Prove by induction that `1 + 3 + 5 + ... + (2n - 1) = n^2` for all n in N.**

**ANSWER:**
```
  Let S(n):  1 + 3 + 5 + ... + (2n - 1) = n^2

  BASE:  n = 1.   LHS = 2(1) - 1 = 1 ;  RHS = 1^2 = 1.
                  LHS = RHS, so S(1) is TRUE.

  ASSUME S(k):    1 + 3 + ... + (2k - 1) = k^2                      ... (i)

  TO PROVE:       1 + 3 + ... + (2k - 1) + (2k + 1) = (k + 1)^2     ... (ii)
                  [ the (k+1)th term is 2(k+1) - 1 = 2k + 1 ]

  PROOF:  LHS of (ii) = [ 1 + 3 + ... + (2k-1) ] + (2k + 1)
                      = k^2 + 2k + 1                                by (i)
                      = (k + 1)^2  = RHS of (ii)

  Hence by the principle of mathematical induction, S(n) is true
  for all n in N.
```

---

### Q B2
**Prove that `2 + 4 + 6 + ... + 2n = n(n + 1)` for all n in N.**

**ANSWER:**
```
  Let S(n):  2 + 4 + ... + 2n = n(n + 1)

  BASE:  n = 1.  LHS = 2 ;  RHS = 1 x 2 = 2.   S(1) TRUE.

  ASSUME:  2 + 4 + ... + 2k = k(k + 1)                              ... (i)

  TO PROVE: 2 + 4 + ... + 2k + (2k + 2) = (k + 1)(k + 2)            ... (ii)

  PROOF:  LHS of (ii) = k(k + 1) + (2k + 2)          by (i)
                      = k(k + 1) + 2(k + 1)
                      = (k + 1)(k + 2)  = RHS of (ii)

  Hence by the principle of mathematical induction, S(n) is true
  for all n in N.
```

---

### Q B3
**Prove that `3` divides `n^3 + 2n` for all n in N.**

**ANSWER:**
```
  Let S(n):  n^3 + 2n is divisible by 3.

  BASE:  n = 1.  1 + 2 = 3 = 3 x 1.  Divisible by 3, so S(1) TRUE.

  ASSUME:  k^3 + 2k = 3m,  m an integer.                            ... (i)

  TO PROVE: (k+1)^3 + 2(k+1) is divisible by 3.

  PROOF:  (k+1)^3 + 2(k+1)
            = k^3 + 3k^2 + 3k + 1 + 2k + 2
            = (k^3 + 2k) + 3k^2 + 3k + 3
            = 3m + 3(k^2 + k + 1)                     by (i)
            = 3( m + k^2 + k + 1 )

  which is 3 times an integer, so it is divisible by 3.

  Hence by the principle of mathematical induction, 3 divides n^3 + 2n
  for all n in N.
```

---

### Q B4
**Prove that `2^(3n) - 1` is divisible by 7 for all n in N.**

**ANSWER:**
```
  Note 2^(3n) = 8^n.  Let S(n): 8^n - 1 is divisible by 7.

  BASE:  n = 1.  8 - 1 = 7 = 7 x 1.  S(1) TRUE.

  ASSUME:  8^k - 1 = 7m,  so  8^k = 7m + 1.                         ... (i)

  TO PROVE: 8^(k+1) - 1 is divisible by 7.

  PROOF:  8^(k+1) - 1 = 8 . 8^k - 1
                      = 8(7m + 1) - 1                 by (i)
                      = 56m + 8 - 1
                      = 56m + 7
                      = 7(8m + 1)

  Hence by the principle of mathematical induction, 7 divides 2^(3n) - 1
  for all n in N.
```

---

### Q B5
**Prove that `3^(2n) - 1` is divisible by 8 for all n in N.**

**ANSWER:**
```
  Note 3^(2n) = 9^n.  Let S(n): 9^n - 1 is divisible by 8.

  BASE:  n = 1.  9 - 1 = 8 = 8 x 1.  S(1) TRUE.

  ASSUME:  9^k - 1 = 8m,  so  9^k = 8m + 1.                         ... (i)

  TO PROVE: 9^(k+1) - 1 is divisible by 8.

  PROOF:  9^(k+1) - 1 = 9 . 9^k - 1
                      = 9(8m + 1) - 1                 by (i)
                      = 72m + 9 - 1
                      = 72m + 8
                      = 8(9m + 1)

  Hence by the principle of mathematical induction, 8 divides 3^(2n) - 1
  for all n in N.
```

---

### Q B6
**Prove that `4^n - 3n - 1` is divisible by 9 for all n in N.**

**ANSWER:**
```
  Let S(n):  4^n - 3n - 1 is divisible by 9.

  BASE:  n = 1.  4 - 3 - 1 = 0 = 9 x 0.  (Zero is divisible by 9.)
                 S(1) is TRUE.

  ASSUME:  4^k - 3k - 1 = 9m,  so  4^k = 9m + 3k + 1.               ... (i)

  TO PROVE: 4^(k+1) - 3(k+1) - 1 is divisible by 9.

  PROOF:  4^(k+1) - 3(k+1) - 1
            = 4 . 4^k - 3k - 4
            = 4(9m + 3k + 1) - 3k - 4                 by (i)
            = 36m + 12k + 4 - 3k - 4
            = 36m + 9k
            = 9(4m + k)

  Hence by the principle of mathematical induction, 9 divides 4^n - 3n - 1
  for all n in N.
```

---

### Q B7
**Prove that `2^n > n` for all n in N.**

**ANSWER:**
```
  Let S(n):  2^n > n.

  BASE:  n = 1.  2^1 = 2 and 2 > 1.  S(1) TRUE.

  ASSUME:  2^k > k.                                                 ... (i)

  TO PROVE: 2^(k+1) > k + 1.

  PROOF:  2^(k+1) = 2 . 2^k
                  > 2k              multiplying (i) by 2  (2 > 0)
                  = k + k
                  >= k + 1          since k >= 1

          Therefore 2^(k+1) > k + 1.

  Hence by the principle of mathematical induction, 2^n > n for all n in N.
```

---

### Q B8
**Prove that `3^n > 2^n` for all n in N.**

**ANSWER:**
```
  Let S(n):  3^n > 2^n.

  BASE:  n = 1.  3 > 2.  S(1) TRUE.

  ASSUME:  3^k > 2^k.                                               ... (i)

  TO PROVE: 3^(k+1) > 2^(k+1).

  PROOF:  3^(k+1) = 3 . 3^k
                  > 3 . 2^k         multiplying (i) by 3  (3 > 0)
                  > 2 . 2^k         since 3 > 2 and 2^k > 0
                  = 2^(k+1)

  Hence by the principle of mathematical induction, 3^n > 2^n
  for all n in N.
```

---

### Q B9
**Prove that `(1 + 1/1)(1 + 1/2)(1 + 1/3) ... (1 + 1/n) = n + 1` for all n in N.**

**ANSWER:**
```
  Let S(n):  (1 + 1/1)(1 + 1/2) ... (1 + 1/n) = n + 1

  BASE:  n = 1.  LHS = 1 + 1/1 = 2 ;  RHS = 1 + 1 = 2.  S(1) TRUE.

  ASSUME:  (1 + 1/1) ... (1 + 1/k) = k + 1                          ... (i)

  TO PROVE: (1 + 1/1) ... (1 + 1/k)(1 + 1/(k+1)) = k + 2            ... (ii)

  PROOF:  LHS of (ii) = [ (1+1/1)...(1+1/k) ] x ( 1 + 1/(k+1) )
                      = (k + 1) ( 1 + 1/(k+1) )            by (i)

                                     k + 2
                      = (k + 1) x  ---------
                                     k + 1

                      = k + 2  = RHS of (ii)

  Hence by the principle of mathematical induction, S(n) is true
  for all n in N.
```

---

### Q B10
**Prove that `1/(1.2) + 1/(2.3) + ... + 1/(n(n+1)) = n/(n+1)` for all n in N.**

**ANSWER:**
```
  BASE:  n = 1.  LHS = 1/(1 x 2) = 1/2 ;  RHS = 1/2.  S(1) TRUE.

  ASSUME:  1/(1.2) + ... + 1/(k(k+1)) = k/(k+1)                     ... (i)

  TO PROVE: ... + 1/((k+1)(k+2)) = (k+1)/(k+2)                      ... (ii)

  PROOF:  LHS of (ii) =   k          1
                        ------ + -------------
                        k + 1     (k+1)(k+2)

                        k(k + 2) + 1
                      = ---------------
                         (k+1)(k+2)

                        k^2 + 2k + 1        (k+1)^2        k + 1
                      = -------------- = -------------- = -------
                         (k+1)(k+2)       (k+1)(k+2)       k + 2

                      = RHS of (ii)

  Hence by the principle of mathematical induction, S(n) is true
  for all n in N.
```

---

### Q B11
**Prove that `(x - y)` divides `x^n - y^n` for all n in N (`x` not equal to `y`).**

**ANSWER:**
```
  BASE:  n = 1.  x - y = (x - y) x 1.  Divisible.  S(1) TRUE.

  ASSUME:  x^k - y^k = (x - y) m.                                   ... (i)

  TO PROVE: x^(k+1) - y^(k+1) is divisible by (x - y).

  PROOF:  x^(k+1) - y^(k+1)
            = x . x^k - y . y^k
            = x . x^k - x . y^k + x . y^k - y . y^k     [add & subtract x y^k]
            = x ( x^k - y^k ) + y^k ( x - y )
            = x (x - y) m + y^k (x - y)                 by (i)
            = (x - y) [ x m + y^k ]

  Hence by the principle of mathematical induction, (x - y) divides
  x^n - y^n for all n in N.
```

---

### Q B12
**A sequence is given by `a(1) = 3` and `a(n+1) = 2 a(n) + 1`. Prove by induction
that `a(n) = 2^(n+1) - 1`.**

**ANSWER:**
```
  BASE:  n = 1.  a(1) = 3 (given);  2^(1+1) - 1 = 4 - 1 = 3.  S(1) TRUE.

  ASSUME:  a(k) = 2^(k+1) - 1.                                      ... (i)

  TO PROVE: a(k+1) = 2^(k+2) - 1.

  PROOF:  a(k+1) = 2 a(k) + 1                    (given recurrence)
                 = 2 [ 2^(k+1) - 1 ] + 1         by (i)
                 = 2^(k+2) - 2 + 1
                 = 2^(k+2) - 1

  Hence by the principle of mathematical induction, a(n) = 2^(n+1) - 1
  for all n in N.
```

---

### Q B13
**Prove that `n(n+1)(n+2)` is divisible by 6 for all n in N.**

**ANSWER:**
```
  BASE:  n = 1.  1 x 2 x 3 = 6 = 6 x 1.  S(1) TRUE.

  ASSUME:  k(k+1)(k+2) = 6m.                                        ... (i)

  TO PROVE: (k+1)(k+2)(k+3) is divisible by 6.

  PROOF:  (k+1)(k+2)(k+3)
            = (k+1)(k+2) k  +  (k+1)(k+2) . 3         since k+3 = k + 3
            = k(k+1)(k+2)  +  3(k+1)(k+2)
            = 6m  +  3(k+1)(k+2)                      by (i)

          Now (k+1) and (k+2) are consecutive integers, so one of them
          is even; write (k+1)(k+2) = 2t.

            = 6m + 3(2t) = 6m + 6t = 6(m + t)

  Hence by the principle of mathematical induction, 6 divides n(n+1)(n+2)
  for all n in N.
```

---

### Q B14
**Prove that `2^n > n^2` for all natural numbers `n >= 5`.**

**ANSWER:**
```
  BASE:  n = 5.  2^5 = 32 and 5^2 = 25 ;  32 > 25.  S(5) TRUE.

  ASSUME (for some k >= 5):  2^k > k^2.                             ... (i)

  TO PROVE: 2^(k+1) > (k+1)^2.

  PROOF:  2^(k+1) = 2 . 2^k > 2 k^2                     by (i)

          It is enough to show 2k^2 >= (k+1)^2 for k >= 5:

              2k^2 - (k+1)^2 = 2k^2 - k^2 - 2k - 1 = k^2 - 2k - 1
                             = k(k - 2) - 1
                             >= 5(3) - 1 = 14 > 0        for k >= 5

          So  2^(k+1) > 2k^2 >= (k+1)^2.

  Hence by the principle of mathematical induction, 2^n > n^2 for all
  natural numbers n >= 5.

  (NOTE: the conclusion says n >= 5, NOT "for all n in N".)
```

---

### Q B15
**If `A = [ 1  1 ; 0  1 ]`, prove by induction that `A^n = [ 1  n ; 0  1 ]`.**

**ANSWER:**
```
  BASE:  n = 1.
              +---------+
        A^1 = | 1     1 |    which is the given form with n = 1.  S(1) TRUE.
              | 0     1 |
              +---------+

  ASSUME:
              +---------+
        A^k = | 1     k |                                          ... (i)
              | 0     1 |
              +---------+

  TO PROVE:
                  +-------------+
        A^(k+1) = | 1     k + 1 |
                  | 0       1   |
                  +-------------+

  PROOF:  A^(k+1) = A^k . A

              +---------+   +---------+     +---------------------------+
           =  | 1     k | x | 1     1 |  =  | 1(1)+k(0)     1(1)+k(1)   |
              | 0     1 |   | 0     1 |     | 0(1)+1(0)     0(1)+1(1)   |
              +---------+   +---------+     +---------------------------+

              +-------------+
           =  | 1     1 + k |    which is the required form.
              | 0       1   |
              +-------------+

  Hence by the principle of mathematical induction, A^n = [1 n ; 0 1]
  for all n in N.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# THE MAIN EVENT. One of these shapes appears almost every year.
# ===============================================================

```
  +---------------------------------------------------------------------+
  |  MARK SPLIT (this is how the examiner reads your answer)            |
  |                                                                     |
  |    Writing S(n)                                        1/2  mark    |
  |    Base step, LHS and RHS shown separately             1 1/2 marks  |
  |    Assumption S(k) written out fully                     1  mark    |
  |    Statement of what S(k+1) requires                     1  mark    |
  |    Correct algebra reaching the required RHS             2  marks   |
  |    Conclusion sentence                                   1  mark    |
  |                                                        --------     |
  |                                                          7  marks   |
  +---------------------------------------------------------------------+
```

---

### Q C1 — THE SINGLE MOST LIKELY QUESTION FAMILY
**Prove by mathematical induction that**
`1^2 + 2^2 + 3^2 + ... + n^2 = n(n+1)(2n+1)/6` **for all n in N.**

**ANSWER:**
```
STEP 1   Let S(n) be the statement

              1^2 + 2^2 + ... + n^2  =  n(n+1)(2n+1) / 6


STEP 2   BASE STEP.   Put n = 1.

              LHS = 1^2 = 1

                    1(1+1)(2.1+1)     1 x 2 x 3      6
              RHS = --------------- = ----------- = --- = 1
                          6                6         6

         Since LHS = RHS, S(1) is TRUE.


STEP 3   ASSUME that S(k) is true for some k in N, that is

              1^2 + 2^2 + ... + k^2  =  k(k+1)(2k+1) / 6        ... (i)


STEP 4   WE MUST PROVE S(k+1), i.e.

              1^2 + ... + k^2 + (k+1)^2  =  (k+1)(k+2)(2k+3) / 6   ... (ii)

         [ replacing n by k+1 :  (k+1)((k+1)+1)(2(k+1)+1)/6 ]


STEP 5   LHS of (ii)

              = [ 1^2 + 2^2 + ... + k^2 ]  +  (k+1)^2

                  k(k+1)(2k+1)
              = ---------------- + (k+1)^2                       using (i)
                       6

                  k(k+1)(2k+1) + 6(k+1)^2
              = ---------------------------
                            6

                  (k+1) [ k(2k+1) + 6(k+1) ]
              = ------------------------------      taking out (k+1)
                             6

                  (k+1) [ 2k^2 + k + 6k + 6 ]      (k+1)(2k^2 + 7k + 6)
              = ------------------------------  = ----------------------
                             6                              6

         Now 2k^2 + 7k + 6 = 2k^2 + 4k + 3k + 6
                           = 2k(k + 2) + 3(k + 2)
                           = (k + 2)(2k + 3)

                  (k+1)(k+2)(2k+3)
              = --------------------   =  RHS of (ii)
                          6

         Therefore S(k+1) is TRUE.


STEP 6   S(1) is true, and S(k) true implies S(k+1) true.
         Hence, by the principle of finite mathematical induction,

              1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6   for all n in N.
```

---

### Q C2
**Prove by mathematical induction that**
`1.2^2 + 2.3^2 + 3.4^2 + ... upto n terms = n(n+1)(n+2)(3n+5)/12`.

**ANSWER:**
```
STEP 1   The nth term is n(n+1)^2.  Let S(n) be the statement

              1.2^2 + 2.3^2 + ... + n(n+1)^2 = n(n+1)(n+2)(3n+5)/12


STEP 2   BASE STEP.   n = 1.

              LHS = 1 x 2^2 = 4

                    1(2)(3)(3.1 + 5)     1 x 2 x 3 x 8     48
              RHS = ------------------ = --------------- = ---- = 4
                            12                 12           12

         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k) is true:

              1.2^2 + ... + k(k+1)^2 = k(k+1)(k+2)(3k+5)/12       ... (i)


STEP 4   TO PROVE S(k+1):

              1.2^2 + ... + k(k+1)^2 + (k+1)(k+2)^2
                                = (k+1)(k+2)(k+3)(3k+8)/12       ... (ii)

         [ n -> k+1 gives (k+1)(k+2)(k+3)(3(k+1)+5)/12,
           and 3(k+1)+5 = 3k+8 ]


STEP 5   LHS of (ii)

                  k(k+1)(k+2)(3k+5)
              = ---------------------- + (k+1)(k+2)^2            using (i)
                          12

                  k(k+1)(k+2)(3k+5) + 12(k+1)(k+2)^2
              = --------------------------------------
                                 12

                  (k+1)(k+2) [ k(3k+5) + 12(k+2) ]
              = -------------------------------------  take out (k+1)(k+2)
                                 12

                  (k+1)(k+2) [ 3k^2 + 5k + 12k + 24 ]
              = ---------------------------------------
                                 12

                  (k+1)(k+2)( 3k^2 + 17k + 24 )
              = ---------------------------------
                                 12

         Factorise:  3k^2 + 17k + 24 = 3k^2 + 9k + 8k + 24
                                     = 3k(k + 3) + 8(k + 3)
                                     = (k + 3)(3k + 8)

                  (k+1)(k+2)(k+3)(3k+8)
              = ---------------------------  =  RHS of (ii)
                            12

         Therefore S(k+1) is TRUE.


STEP 6   Hence, by the principle of finite mathematical induction, the
         result is true for all n in N.
```

---

### Q C3
**Prove by mathematical induction that**
`1/(1.4) + 1/(4.7) + 1/(7.10) + ... + 1/((3n-2)(3n+1)) = n/(3n+1)`.

**ANSWER:**
```
STEP 1   Let S(n) be the statement

                1          1                    1              n
             ------- + --------- + ... + ----------------- = -------
              1 . 4     4 . 7             (3n-2)(3n+1)        3n + 1


STEP 2   BASE STEP.   n = 1.

              LHS = 1 / ((3 - 2)(3 + 1)) = 1/(1 x 4) = 1/4

              RHS = 1 / (3 + 1) = 1/4

         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k) is true:

              1/(1.4) + ... + 1/((3k-2)(3k+1))  =  k/(3k+1)       ... (i)


STEP 4   TO PROVE S(k+1):

              1/(1.4) + ... + 1/((3k-2)(3k+1)) + 1/((3k+1)(3k+4))
                                          =  (k+1)/(3k+4)         ... (ii)

         [ the (k+1)th term: 3(k+1)-2 = 3k+1 and 3(k+1)+1 = 3k+4;
           the RHS: (k+1)/(3(k+1)+1) = (k+1)/(3k+4) ]


STEP 5   LHS of (ii)

                    k                1
              = --------  +  -------------------                  using (i)
                 3k + 1       (3k+1)(3k+4)

                  k(3k + 4) + 1
              = ---------------------          common denominator
                  (3k+1)(3k+4)

                  3k^2 + 4k + 1
              = ---------------------
                  (3k+1)(3k+4)

         Factorise the numerator:
              3k^2 + 4k + 1 = 3k^2 + 3k + k + 1
                            = 3k(k + 1) + 1(k + 1)
                            = (k + 1)(3k + 1)

                  (k + 1)(3k + 1)         k + 1
              = -------------------- = -----------   =  RHS of (ii)
                  (3k + 1)(3k + 4)       3k + 4

         Therefore S(k+1) is TRUE.


STEP 6   Hence, by the principle of finite mathematical induction, the
         result is true for all n in N.
```

---

### Q C4
**Prove by mathematical induction that**
`2 + 3.2 + 4.2^2 + ... + (n+1) 2^(n-1) = n . 2^n` **for all n in N.**

**ANSWER:**
```
STEP 1   Let S(n):   2 + 3.2 + 4.2^2 + ... + (n+1) 2^(n-1)  =  n . 2^n


STEP 2   BASE STEP.   n = 1.

              LHS = (1 + 1) 2^(1-1) = 2 x 2^0 = 2 x 1 = 2
              RHS = 1 x 2^1 = 2

         LHS = RHS, so S(1) is TRUE.

         (Reassurance at n = 2:  LHS = 2 + 3(2) = 8 ;  RHS = 2 x 4 = 8.)


STEP 3   ASSUME S(k) is true:

              2 + 3.2 + ... + (k+1) 2^(k-1)  =  k . 2^k            ... (i)


STEP 4   TO PROVE S(k+1):

              2 + 3.2 + ... + (k+1)2^(k-1) + (k+2) 2^k
                                          =  (k+1) 2^(k+1)         ... (ii)

         [ the (k+1)th term:  ((k+1)+1) 2^((k+1)-1) = (k+2) 2^k ]


STEP 5   LHS of (ii)

              = [ 2 + 3.2 + ... + (k+1)2^(k-1) ]  +  (k+2) 2^k

              = k . 2^k  +  (k+2) 2^k                             using (i)

              = 2^k [ k + k + 2 ]                                 take out 2^k

              = 2^k [ 2k + 2 ]

              = 2^k . 2 (k + 1)

              = (k + 1) . 2^(k+1)   =  RHS of (ii)

         Therefore S(k+1) is TRUE.


STEP 6   Hence, by the principle of finite mathematical induction,
         2 + 3.2 + ... + (n+1)2^(n-1) = n . 2^n  for all n in N.
```

---

### Q C5
**Prove by mathematical induction that the sum of the first n terms of an
arithmetic progression is**
`a + (a+d) + (a+2d) + ... + [a + (n-1)d] = (n/2) [ 2a + (n-1)d ]`.

**ANSWER:**
```
STEP 1   Let S(n):

              a + (a+d) + ... + [a + (n-1)d]  =  (n/2)[ 2a + (n-1)d ]


STEP 2   BASE STEP.   n = 1.

              LHS = a + (1 - 1)d = a + 0 = a

              RHS = (1/2)[ 2a + (1-1)d ] = (1/2)(2a) = a

         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k) is true:

              a + (a+d) + ... + [a + (k-1)d]  =  (k/2)[ 2a + (k-1)d ]  ... (i)


STEP 4   TO PROVE S(k+1):

              a + (a+d) + ... + [a+(k-1)d] + (a + kd)
                             =  ((k+1)/2)[ 2a + kd ]                   ... (ii)

         [ the (k+1)th term is a + ((k+1)-1)d = a + kd ;
           the RHS replaces n by k+1 ]


STEP 5   LHS of (ii)

                  k
              = ----- [ 2a + (k-1)d ]  +  (a + kd)                 using (i)
                  2

                  k [ 2a + (k-1)d ] + 2 (a + kd)
              = ----------------------------------
                                2

                  2ak + k(k-1)d + 2a + 2kd
              = ------------------------------
                                2

         Group the 'a' terms and the 'd' terms:

              2ak + 2a       = 2a(k + 1)
              k(k-1)d + 2kd  = kd[ (k-1) + 2 ] = kd(k + 1)

                  2a(k+1) + kd(k+1)        (k + 1)( 2a + kd )
              = ---------------------- = ----------------------
                          2                        2

              =  RHS of (ii)

         Therefore S(k+1) is TRUE.


STEP 6   Hence, by the principle of finite mathematical induction, the sum
         of the first n terms of an A.P. is (n/2)[2a + (n-1)d] for all n in N.
```

---

### Q C6 — THE DIVISIBILITY FAVOURITE
**Prove by mathematical induction that `49^n + 16n - 1` is divisible by 64
for all n in N.**

**ANSWER:**
```
STEP 1   Let S(n) be the statement:  49^n + 16n - 1 is divisible by 64.


STEP 2   BASE STEP.   n = 1.

              49^1 + 16(1) - 1  =  49 + 16 - 1  =  64  =  64 x 1

         Divisible by 64, so S(1) is TRUE.


STEP 3   ASSUME S(k) is true, i.e.

              49^k + 16k - 1  =  64m ,   where m is an integer.

         Rearranging,   49^k  =  64m - 16k + 1                     ... (i)


STEP 4   TO PROVE S(k+1), i.e. we must show that

              49^(k+1) + 16(k+1) - 1   is divisible by 64.


STEP 5   49^(k+1) + 16(k+1) - 1

              = 49 . 49^k  +  16k + 16 - 1

              = 49 [ 64m - 16k + 1 ]  +  16k + 15               using (i)

              = 49 x 64 m  -  49 x 16 k  +  49  +  16k  +  15

              = 3136 m  -  784 k  +  16 k  +  64

              = 3136 m  -  768 k  +  64

              = 64 [ 49 m  -  12 k  +  1 ]

         Since m and k are integers, ( 49m - 12k + 1 ) is an integer.
         Therefore 49^(k+1) + 16(k+1) - 1 is divisible by 64,
         i.e. S(k+1) is TRUE.


STEP 6   S(1) is true, and S(k) true implies S(k+1) true.
         Hence, by the principle of finite mathematical induction,
         49^n + 16n - 1 is divisible by 64 for all n in N.

         [ Arithmetic check:  49 x 64 = 3136 ;  49 x 16 = 784 ;
           -784k + 16k = -768k  and 768 = 64 x 12 ;  49 + 15 = 64. ]
```

---

### Q C7 — THE OTHER DIVISIBILITY FAVOURITE
**Prove by mathematical induction that `3 . 5^(2n+1) + 2^(3n+1)` is divisible
by 17 for all n in N.**

**ANSWER:**
```
STEP 1   Let S(n):  3 . 5^(2n+1) + 2^(3n+1)  is divisible by 17.


STEP 2   BASE STEP.   n = 1.

              3 . 5^3 + 2^4  =  3(125) + 16  =  375 + 16  =  391

              391 = 17 x 23

         Divisible by 17, so S(1) is TRUE.


STEP 3   ASSUME S(k) is true, i.e.

              3 . 5^(2k+1) + 2^(3k+1)  =  17m ,  m an integer.

         Rearranging,   2^(3k+1)  =  17m - 3 . 5^(2k+1)            ... (i)


STEP 4   TO PROVE S(k+1), i.e. we must show that

              3 . 5^(2(k+1)+1) + 2^(3(k+1)+1)  =  3 . 5^(2k+3) + 2^(3k+4)

         is divisible by 17.


STEP 5   3 . 5^(2k+3) + 2^(3k+4)

              = 5^2 [ 3 . 5^(2k+1) ]  +  2^3 [ 2^(3k+1) ]   peel the powers

              = 25 . 3 . 5^(2k+1)  +  8 [ 17m - 3 . 5^(2k+1) ]     using (i)

              = 25 . 3 . 5^(2k+1)  +  136 m  -  8 . 3 . 5^(2k+1)

              = ( 25 - 8 ) . 3 . 5^(2k+1)  +  136 m

              = 17 . 3 . 5^(2k+1)  +  136 m

              = 17 [ 3 . 5^(2k+1)  +  8 m ]

         Since 3.5^(2k+1) + 8m is an integer, the expression is divisible
         by 17, i.e. S(k+1) is TRUE.


STEP 6   Hence, by the principle of finite mathematical induction,
         3 . 5^(2n+1) + 2^(3n+1) is divisible by 17 for all n in N.

         [ Note why it worked: 5^2 = 25, 2^3 = 8, and 25 - 8 = 17. ]
```

---

## MORE SECTION C QUESTIONS TO PRACTISE (same six steps)

Write each of these out in full at least once. The key line of Step 5 is given
so you can check yourself.

| Question | Key line of Step 5 |
|---|---|
| `1 + 2 + ... + n = n(n+1)/2` | `k(k+1)/2 + (k+1) = (k+1)(k+2)/2` |
| `1^3 + 2^3 + ... + n^3 = n^2(n+1)^2/4` | `k^2 + 4k + 4 = (k+2)^2` |
| `1.2 + 2.3 + ... + n(n+1) = n(n+1)(n+2)/3` | factor out `(k+1)(k+2)`, bracket `k+3` |
| `1.2.3 + ... + n(n+1)(n+2) = n(n+1)(n+2)(n+3)/4` | factor out `(k+1)(k+2)(k+3)`, bracket `k+4` |
| `1^2.2 + 2^2.3 + ... = n(n+1)(n+2)(3n+1)/12` | `3k^2 + 13k + 12 = (k+3)(3k+4)` |
| `1/(1.3) + ... + 1/((2n-1)(2n+1)) = n/(2n+1)` | `2k^2 + 3k + 1 = (k+1)(2k+1)` |
| GP sum `= a(r^n - 1)/(r-1)` | `r^k - 1 + r^(k+1) - r^k = r^(k+1) - 1` |
| `2 . 4^(2n+1) + 3^(3n+1)` divisible by 11 | `27 - 16 = 11` |
| `10^n + 3.4^(n+2) + 5` divisible by 9 | `90m - 18.4^(k+2) - 45 = 9(...)` |
| `3^(2n+1) + 2^(n+2)` divisible by 7 | `9 - 2 = 7` |
| `2.7^n + 3.5^n - 5` divisible by 24 | needs `7^k - 1 = 6t` |
| `1^3/1 + (1^3+2^3)/(1+3) + ... = n(2n^2+9n+13)/24` | reduce `t(k)` to `(k+1)^2/4` first |

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|---|---|---|---|
| 1 | **A sum series proved by induction** (any of the standard list) | C (7M) | Very high |
| 2 | **A divisibility result proved by induction** | C (7M) | High — alternates with rank 1 |
| 3 | `1.2^2 + 2.3^2 + ...` or `1^2.2 + 2^2.3 + ...` (the `3n+5` / `3n+1` pair) | C (7M) | High |
| 4 | `1/(1.4) + 1/(4.7) + ...` or `1/(1.2) + 1/(2.3) + ...` | C (7M) | High |
| 5 | `2 + 3.2 + 4.2^2 + ... = n.2^n` | C (7M) | Medium-high |
| 6 | `49^n + 16n - 1` divisible by 64 | C (7M) | Medium-high |
| 7 | `3.5^(2n+1) + 2^(3n+1)` divisible by 17 | C (7M) | Medium-high |
| 8 | `2.4^(2n+1) + 3^(3n+1)` divisible by 11 | C (7M) | Medium |
| 9 | AP sum or GP sum proved by induction | C (7M) | Medium |
| 10 | Sum of squares / sum of cubes | C (7M) | Medium |
| 11 | `1.2.3 + 2.3.4 + ...` | C (7M) | Medium |
| 12 | `1^3/1 + (1^3+2^3)/(1+3) + ...` | C (7M) | Low-medium (the hardest one) |
| 13 | State the principle of mathematical induction | A (2M) | Low |
| 14 | Inequality (`2^n > n`, `3^n > 2^n`) | B (4M) | Low |
| 15 | Product or recurrence result | B (4M) | Low |

```
  +=====================================================================+
  |                                                                     |
  |   THE PLAN THAT ALWAYS WORKS                                        |
  |                                                                     |
  |   You do NOT need to know which of the 15 will appear.              |
  |                                                                     |
  |   Every one of them is answered with the SAME SIX STEPS.            |
  |   Learn the six steps. Practise five different questions with them. |
  |   Then walk into the exam and use them on whatever they print.      |
  |                                                                     |
  |   Even a total blank on the algebra still earns about 5 of 7 marks  |
  |   if Steps 1, 2, 3, 4 and 6 are written correctly.                  |
  |                                                                     |
  +=====================================================================+
```
