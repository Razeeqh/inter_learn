# Mathematical Induction — Competitive Exam Questions

**Chapter 2 · Maths IA · for AP EAPCET, TG EAPCET and JEE Main**

```
  +---------------+--------+---------+-----------+--------+----------------+
  |  EXAM         |  MATHS | PHYSICS | CHEMISTRY | TOTAL  |  MARKING       |
  +---------------+--------+---------+-----------+--------+----------------+
  |  AP EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  TG EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  JEE Main     |   25   |   25    |    25     |  300   |  +4 , -1       |
  +---------------+--------+---------+-----------+--------+----------------+
```

## How much does this chapter give you?

| Exam | Questions from Mathematical Induction | Honest verdict |
|---|---|---|
| AP EAPCET | 0 to 1 | Low yield, but the question (if it comes) is a 20-second one |
| TG EAPCET | 0 to 1 | Same |
| JEE Main | 0 to 1, and often disguised inside a "divisibility" question | Low yield, occasionally a free mark |

**Be realistic.** For the BOARD exam this chapter is worth a guaranteed 7 marks.
For the entrance exams it is worth maybe one mark. So:

```
  +=====================================================================+
  |                                                                     |
  |  DO NOT spend entrance-exam preparation time writing out six-step   |
  |  proofs. In EAPCET/JEE nobody asks you to PROVE anything.           |
  |                                                                     |
  |  Instead, learn:                                                    |
  |     - the standard sum formulas (so you can compute a value fast)   |
  |     - the standard divisibility facts (so you can pick the option)  |
  |     - the TEST-SMALL-n trick: substitute n = 1, 2, 3 and eliminate  |
  |                                                                     |
  |  In EAPCET there is NO negative marking, so never leave a blank.    |
  |  In JEE there is -1, so skip only what you genuinely cannot narrow. |
  |                                                                     |
  +=====================================================================+
```

---

# PATTERN 1 — SUBSTITUTE SMALL n AND ELIMINATE

> **SHORTCUT:** Almost every induction MCQ can be killed by putting `n = 1`
> and then `n = 2` into all four options. Do not prove anything.

### Q1
`1 + 2 + 3 + ... + n` equals
(a) `n(n+1)` (b) `n(n+1)/2` (c) `n(n-1)/2` (d) `n^2/2`

**ANSWER: (b)**
```
  Put n = 2:  LHS = 3.
  (a) 6   (b) 3   (c) 1   (d) 2      Only (b) gives 3.
```

---

### Q2
`1^2 + 2^2 + ... + n^2` equals
(a) `n(n+1)(2n+1)/6` (b) `n(n+1)/2` (c) `n^2(n+1)^2/4` (d) `n(n+1)(n+2)/6`

**ANSWER: (a)**
```
  Put n = 2:  LHS = 1 + 4 = 5.
  (a) 2 x 3 x 5 / 6 = 5   (b) 3   (c) 9   (d) 4.     Only (a).
```

---

### Q3
`1 + 3 + 5 + ... + (2n - 1)` equals
(a) `n(n+1)` (b) `n^2` (c) `2n - 1` (d) `n(2n-1)`

**ANSWER: (b)**
```
  n = 3:  1 + 3 + 5 = 9 = 3^2.
```

---

### Q4
`1.2 + 2.3 + 3.4 + ... + n(n+1)` equals
(a) `n(n+1)(n+2)/3` (b) `n(n+1)(n+2)/6` (c) `n(n+1)(2n+1)/6` (d) `n(n+1)(n+2)(n+3)/4`

**ANSWER: (a)**
```
  n = 2:  LHS = 2 + 6 = 8.
  (a) 2x3x4/3 = 8    (b) 4    (c) 5    (d) 30.      Only (a).
```

---

### Q5
The sum `1/(1.2) + 1/(2.3) + ... + 1/(n(n+1))` equals
(a) `1/(n+1)` (b) `n/(n+1)` (c) `n/(2n+1)` (d) `2n/(n+1)`

**ANSWER: (b)**
```
  n = 1:  1/2.    (a) 1/2 also!  So test n = 2:
  LHS = 1/2 + 1/6 = 2/3.   (a) 1/3   (b) 2/3.      Answer (b).
```
> **SHORTCUT:** If `n = 1` does not separate the options, go to `n = 2`.

---

### Q6
`1/(1.4) + 1/(4.7) + ... + 1/((3n-2)(3n+1))` equals
(a) `n/(3n+1)` (b) `n/(3n-2)` (c) `1/(3n+1)` (d) `n/(2n+1)`

**ANSWER: (a)**
```
  n = 2:  1/4 + 1/28 = 7/28 + 1/28 = 8/28 = 2/7.
  (a) 2/7.   Correct.
```

---

### Q7
`2 + 3.2 + 4.2^2 + ... + (n+1) 2^(n-1)` equals
(a) `n . 2^n` (b) `(n+1) 2^n` (c) `n . 2^(n-1)` (d) `2^(n+1)`

**ANSWER: (a)**
```
  n = 2:  2 + 3(2) = 8.
  (a) 2 x 4 = 8   (b) 12   (c) 4   (d) 8 also!
  Test n = 3:  2 + 6 + 4(4) = 24.
  (a) 3 x 8 = 24   (d) 16.        Answer (a).
```

---

### Q8
`(1 + 1/1)(1 + 1/2)(1 + 1/3) ... (1 + 1/n)` equals
(a) `n` (b) `n + 1` (c) `1/n` (d) `2n`

**ANSWER: (b)**
```
  n = 2:  2 x (3/2) = 3 = 2 + 1.
```

---

### Q9
`(1 - 1/4)(1 - 1/9)(1 - 1/16) ... (1 - 1/n^2)`, for `n >= 2`, equals
(a) `1/n` (b) `(n+1)/(2n)` (c) `(n-1)/(2n)` (d) `n/(2n+1)`

**ANSWER: (b)**
```
  n = 2:  1 - 1/4 = 3/4.
  (a) 1/2   (b) 3/4   (c) 1/4   (d) 2/5.       Answer (b).
```

---

### Q10
The sum `1 + (1+2) + (1+2+3) + ... ` to `n` terms is
(a) `n(n+1)/2` (b) `n(n+1)(n+2)/6` (c) `n(n+1)(2n+1)/6` (d) `n^2(n+1)^2/4`

**ANSWER: (b)**
```
  n = 3:  1 + 3 + 6 = 10.
  (b) 3 x 4 x 5 / 6 = 10.       Correct.
```

---

# PATTERN 2 — COMPUTE A NUMERICAL VALUE

> **SHORTCUT:** These are just the standard formulas. Know the five basic ones
> and this is pure arithmetic.

### Q11
`1^2 + 2^2 + ... + 10^2 =`
(a) 285 (b) 385 (c) 3025 (d) 55

**ANSWER: (b)**
```
  n(n+1)(2n+1)/6 = 10 x 11 x 21 / 6 = 2310/6 = 385
```

---

### Q12
`1^3 + 2^3 + ... + 10^3 =`
(a) 385 (b) 2025 (c) 3025 (d) 55

**ANSWER: (c)**
```
  [n(n+1)/2]^2 = [10 x 11 / 2]^2 = 55^2 = 3025
```
> **SHORTCUT:** Sum of cubes = (sum of the numbers) squared.

---

### Q13
`1 + 3 + 5 + ... + 39 =`
(a) 400 (b) 380 (c) 441 (d) 200

**ANSWER: (a)**
```
  39 = 2n - 1  ->  n = 20.   Sum = n^2 = 400.
```

---

### Q14
`1.2 + 2.3 + ... + 10.11 =`
(a) 385 (b) 440 (c) 550 (d) 1210

**ANSWER: (b)**
```
  n(n+1)(n+2)/3 = 10 x 11 x 12 / 3 = 1320/3 = 440
```

---

### Q15
`1.1! + 2.2! + 3.3! + ... + 8.8! =`
(a) `8! - 1` (b) `9! - 1` (c) `9!` (d) `8! + 1`

**ANSWER: (b)**
```
  Standard result:  1.1! + ... + n.n! = (n+1)! - 1.
  n = 8  ->  9! - 1.

  Quick check with n = 2:  1 + 4 = 5  and  3! - 1 = 5.  Correct.
```

---

### Q16
`1/(1.2.3) + 1/(2.3.4) + ... ` to `n` terms equals
(a) `n(n+3)/(4(n+1)(n+2))` (b) `n/(2(n+1))` (c) `n(n+1)/(4(n+2))` (d) `1/(n(n+1))`

**ANSWER: (a)**
```
  n = 1:  1/6.    (a) 1 x 4 /(4 x 2 x 3) = 4/24 = 1/6.   Correct.
  n = 2:  1/6 + 1/24 = 5/24.  (a) 2 x 5 /(4 x 3 x 4) = 10/48 = 5/24.  Correct.
```

---

# PATTERN 3 — "IS DIVISIBLE BY ..." — PICK THE DIVISOR

> **SHORTCUT:** Compute the expression at `n = 1` and at `n = 2`, then take
> their **HCF**. The answer is almost always that HCF.

### Q17
For all `n` in N, `2^(3n) - 1` is divisible by
(a) 5 (b) 7 (c) 8 (d) 9

**ANSWER: (b)**
```
  n = 1:  8 - 1 = 7
  n = 2:  64 - 1 = 63 = 7 x 9
  HCF(7, 63) = 7.        Answer (b).
```

---

### Q18
For all `n` in N, `3^(2n) - 1` is divisible by
(a) 5 (b) 6 (c) 8 (d) 7

**ANSWER: (c)**
```
  n = 1:  9 - 1 = 8
  n = 2:  81 - 1 = 80
  HCF(8, 80) = 8.
```

---

### Q19
`4^n - 3n - 1` is divisible by
(a) 3 (b) 9 (c) 5 (d) 27

**ANSWER: (b)**
```
  n = 1:  4 - 3 - 1 = 0    (no information - zero is divisible by everything)
  n = 2:  16 - 6 - 1 = 9
  n = 3:  64 - 9 - 1 = 54 = 9 x 6
  HCF(9, 54) = 9.
```
> **SHORTCUT:** If `n = 1` gives 0, move straight to `n = 2`.

---

### Q20
`3 . 5^(2n+1) + 2^(3n+1)` is divisible by
(a) 7 (b) 11 (c) 17 (d) 19

**ANSWER: (c)**
```
  n = 1:  3(125) + 16 = 391 = 17 x 23.
  Only 17 divides 391 (391 / 7, / 11, / 19 are not whole).
```

---

### Q21
`2 . 4^(2n+1) + 3^(3n+1)` is divisible by
(a) 7 (b) 11 (c) 13 (d) 17

**ANSWER: (b)**
```
  n = 1:  2(64) + 81 = 209 = 11 x 19.       Answer (b).
```

---

### Q22
`49^n + 16n - 1` is divisible by
(a) 32 (b) 48 (c) 64 (d) 68

**ANSWER: (c)**
```
  n = 1:  49 + 16 - 1 = 64
  n = 2:  2401 + 32 - 1 = 2432 = 64 x 38
  HCF = 64.
```

---

### Q23
`11^(n+2) + 12^(2n+1)` is divisible by
(a) 113 (b) 123 (c) 133 (d) 143

**ANSWER: (c)**
```
  n = 1:  11^3 + 12^3 = 1331 + 1728 = 3059
  3059 / 133 = 23  exactly.        Answer (c).
```

---

### Q24
`2^(4n) - 15n - 1` is divisible by
(a) 15 (b) 100 (c) 225 (d) 125

**ANSWER: (c)**
```
  n = 1:  16 - 15 - 1 = 0    (no information)
  n = 2:  256 - 30 - 1 = 225
  n = 3:  4096 - 45 - 1 = 4050 = 225 x 18
  HCF = 225.
```

---

### Q25
`3^(2n+2) - 8n - 9` is divisible by
(a) 8 (b) 16 (c) 64 (d) 128

**ANSWER: (c)**
```
  n = 1:  3^4 - 8 - 9 = 81 - 17 = 64
  n = 2:  3^6 - 16 - 9 = 729 - 25 = 704 = 64 x 11
  HCF = 64.
```

---

### Q26
`5^(2n+2) - 24n - 25` is divisible by
(a) 24 (b) 576 (c) 625 (d) 100

**ANSWER: (b)**
```
  n = 1:  5^4 - 24 - 25 = 625 - 49 = 576
  n = 2:  5^6 - 48 - 25 = 15625 - 73 = 15552 = 576 x 27
  HCF = 576.
```

---

### Q27
`7^(2n) + 2^(3n-3) . 3^(n-1)` is divisible by
(a) 15 (b) 25 (c) 35 (d) 45

**ANSWER: (b)**
```
  Simplify first:  2^(3n-3) . 3^(n-1) = 8^(n-1) . 3^(n-1) = 24^(n-1)
  So the expression is  49^n + 24^(n-1).

  n = 1:  49 + 1 = 50
  n = 2:  2401 + 24 = 2425 = 25 x 97
  HCF(50, 2425) = 25.
```

---

### Q28
`10^n + 3 . 4^(n+2) + k` is divisible by 9 for all `n` in N. The least positive
value of `k` is
(a) 1 (b) 3 (c) 5 (d) 7

**ANSWER: (c)**
```
  n = 1:  10 + 3(64) + k = 202 + k

  202 = 9 x 22 + 4,  so we need k such that 4 + k is a multiple of 9.
  Least positive k = 5.

  Check n = 2:  100 + 3(256) + 5 = 873 = 9 x 97.   Consistent.
```
> This is a classic JEE Main question. The answer `k = 5` is worth memorising.

---

# PATTERN 4 — "THE GREATEST NUMBER THAT ALWAYS DIVIDES ..."

> **SHORTCUT:** Evaluate at `n = 1, 2, 3` and take the HCF of the three values.

### Q29
The greatest number that divides `n(n+1)(n+2)` for every `n` in N is
(a) 2 (b) 3 (c) 6 (d) 12

**ANSWER: (c)**
```
  n = 1:  6     n = 2:  24     n = 3:  60
  HCF(6, 24, 60) = 6.
```

---

### Q30
The greatest number that divides `n^5 - n` for every `n` in N is
(a) 5 (b) 10 (c) 30 (d) 120

**ANSWER: (c)**
```
  n = 2:  32 - 2 = 30
  n = 3:  243 - 3 = 240
  n = 4:  1024 - 4 = 1020
  HCF(30, 240, 1020) = 30.
```

---

### Q31
The greatest number that divides `n^3 + (n+1)^3 + (n+2)^3` for every `n` in N is
(a) 3 (b) 6 (c) 9 (d) 18

**ANSWER: (c)**
```
  n = 1:  1 + 8 + 27 = 36
  n = 2:  8 + 27 + 64 = 99
  HCF(36, 99) = 9.
```

---

### Q32
`23^n - 7^n` is divisible by
(a) 8 (b) 16 (c) 30 (d) 14

**ANSWER: (b)**
```
  n = 1:  16
  n = 2:  529 - 49 = 480 = 16 x 30
  HCF = 16.   (This is the "x - y divides x^n - y^n" result with
               x = 23, y = 7, x - y = 16.)
```

---

# PATTERN 5 — THE LOGIC OF INDUCTION (the trick questions)

> **SHORTCUT:** These test whether you understand that BOTH steps are needed.
> Read the question for which step is present and which is missing.

### Q33
Let `S(k): 1 + 3 + 5 + ... + (2k - 1) = 3 + k^2`. It can be shown that
`S(k) => S(k+1)`. Then `S(n)` is true for
(a) all `n` in N (b) all `n > 1` (c) all `n > 3` (d) no `n`

**ANSWER: (d)**
```
  The inductive step really does hold:
      LHS of S(k+1) = (3 + k^2) + (2k + 1) = 3 + (k+1)^2.

  But check the base:  n = 1 gives LHS = 1 and RHS = 3 + 1 = 4.
  S(1) is FALSE. And S(2): LHS = 4, RHS = 7 - false. In fact S(n) is
  false for every n, because the "+3" never disappears.

  The dominoes are perfectly spaced, but nobody pushes the first one.
```
> This is the single most-repeated induction MCQ in Indian entrance exams.
> Recognise it instantly: **inductive step holds, base step fails, answer = "no n".**

---

### Q34
`P(n)` is a statement such that `P(k) => P(k+1)` for every `k` in N, and `P(5)`
is true. Which is correct?
(a) `P(n)` is true for all `n` in N
(b) `P(n)` is true for all `n >= 5`
(c) `P(n)` is true for all `n <= 5`
(d) `P(n)` is false for all `n`

**ANSWER: (b)**
```
  The chain starts at the domino you actually pushed. Everything from
  5 onwards falls. Nothing is known about n = 1, 2, 3, 4.
```

---

### Q35
`P(n): n^2 + n + 41` is a prime number. Then
(a) `P(n)` is true for all `n` in N
(b) `P(n)` is true for `n = 1` to `39` only
(c) `P(n)` is false for all `n`
(d) `P(n)` is true only for `n = 1`

**ANSWER: (b)**
```
  n = 40:  1600 + 40 + 41 = 1681 = 41 x 41,  which is NOT prime.
  It is prime for n = 1 up to 39.

  MORAL: checking 39 cases is not a proof.
```

---

### Q36
Which statement about a proof by mathematical induction is FALSE?
(a) The base step must be verified
(b) The inductive step assumes `S(k)` and proves `S(k+1)`
(c) It is enough to verify the statement for `n = 1, 2, 3, ..., 100`
(d) The conclusion covers all natural numbers from the base value onwards

**ANSWER: (c)**

---

# PATTERN 6 — SMALLEST `n` FOR WHICH SOMETHING HOLDS

> **SHORTCUT:** Just substitute `n = 1, 2, 3, 4, 5` in your head. Stop at the
> first one that works.

### Q37
`2^n > n^2` holds for all `n >= ?`
(a) 2 (b) 3 (c) 4 (d) 5

**ANSWER: (d)**
```
  n = 2:  4 > 4   no
  n = 3:  8 > 9   no
  n = 4: 16 > 16  no
  n = 5: 32 > 25  YES
```

---

### Q38
`n! > 2^n` holds for all `n >= ?`
(a) 2 (b) 3 (c) 4 (d) 5

**ANSWER: (c)**
```
  n = 3:  6 > 8   no
  n = 4: 24 > 16  YES
```

---

### Q39
`n! > n^2` holds for all `n >= ?`
(a) 2 (b) 3 (c) 4 (d) 5

**ANSWER: (c)**
```
  n = 3:  6 > 9   no
  n = 4: 24 > 16  YES
```

---

### Q40
The least positive integer `n` for which `n! < ( n(n+1)/2 )^n` is
(a) 1 (b) 2 (c) 3 (d) 4

**ANSWER: (b)**
```
  n = 1:  1! = 1 ;  (1 x 2/2)^1 = 1.   1 < 1 is FALSE.
  n = 2:  2! = 2 ;  (2 x 3/2)^2 = 3^2 = 9.   2 < 9 is TRUE.

  Least n = 2.
```
> A well-known JEE Main question. Memorise the answer 2.

---

# PATTERN 7 — RECURRENCE AND MATRIX POWERS

### Q41
`a(1) = 1` and `a(n+1) = 3 a(n) + 1`. Then `a(n)` equals
(a) `3^n - 1` (b) `(3^n - 1)/2` (c) `3^(n-1)` (d) `(3^n + 1)/2`

**ANSWER: (b)**
```
  a(1) = 1, a(2) = 4, a(3) = 13.
  (b):  n=1 -> (3-1)/2 = 1  ok
        n=2 -> (9-1)/2 = 4  ok
        n=3 -> (27-1)/2 = 13 ok
```

---

### Q42
`a(1) = 2` and `a(n+1) = a(n) + 2n`. Then `a(n)` equals
(a) `n^2 + 2` (b) `n^2 - n + 2` (c) `2n^2` (d) `n^2 + n`

**ANSWER: (b)**
```
  a(1) = 2, a(2) = 2 + 2 = 4, a(3) = 4 + 4 = 8.
  (b):  1 - 1 + 2 = 2 ; 4 - 2 + 2 = 4 ; 9 - 3 + 2 = 8.   All match.
```

---

### Q43
If `A = [ 1  1 ; 0  1 ]` then `A^n` equals

```
  (a)  | 1   n |      (b)  | 1   n^2 |     (c)  | n   n |     (d)  | 1   1 |
       | 0   1 |           | 0    1  |          | 0   n |          | 0   n |
```

**ANSWER: (a)**
```
  A^2 = | 1  1 | | 1  1 |  =  | 1  2 |     which matches (a) with n = 2.
        | 0  1 | | 0  1 |     | 0  1 |
```

---

### Q44
If `A = [ 3  -4 ; 1  -1 ]` then `A^n` equals

```
  (a)  | 1+2n   -4n  |     (b)  | 1+2n    4n  |
       |   n    1-2n |          |  -n    1-2n |

  (c)  | 1-2n   -4n  |     (d)  | 3^n   -4^n |
       |   n    1+2n |          | 1^n   -1^n |
```

**ANSWER: (a)**
```
  Check n = 1:  (a) gives | 3  -4 |  which is A.  Good.
                          | 1  -1 |

  Check n = 2:  A^2 = | 3(3)+(-4)(1)   3(-4)+(-4)(-1) | = | 5  -8 |
                      | 1(3)+(-1)(1)   1(-4)+(-1)(-1) |   | 2  -3 |

               (a) with n = 2:  | 1+4   -8  |  =  | 5  -8 |   Match.
                                |  2   1-4  |     | 2  -3 |
```

---

# PATTERN 8 — INEQUALITY AND MISCELLANEOUS

### Q45
For all `n` in N and `x > -1`, `(1 + x)^n` is
(a) `<= 1 + nx` (b) `>= 1 + nx` (c) `= 1 + nx` (d) `< nx`

**ANSWER: (b)**
```
  Bernoulli's inequality.  Check n = 2, x = 1:  4 >= 3.  True.
```

---

### Q46
For `n >= 2`, `1/(n+1) + 1/(n+2) + ... + 1/(2n)` is
(a) `> 13/24` (b) `< 1/2` (c) `= 1` (d) `< 13/24`

**ANSWER: (a)**
```
  n = 2:  1/3 + 1/4 = 7/12 = 14/24 > 13/24.
  n = 3:  1/4 + 1/5 + 1/6 = 15/60 + 12/60 + 10/60 = 37/60,
          and 13/24 = 32.5/60.  So still greater.
```

---

### Q47
`n^7/7 + n^5/5 + 2n^3/3 - n/105` is, for every `n` in N,
(a) a positive integer (b) always a fraction (c) always negative (d) an integer only for even `n`

**ANSWER: (a)**
```
  n = 1:  1/7 + 1/5 + 2/3 - 1/105
        = 15/105 + 21/105 + 70/105 - 1/105 = 105/105 = 1     integer

  n = 2:  128/7 + 32/5 + 16/3 - 2/105
        = 1920/105 + 672/105 + 560/105 - 2/105 = 3150/105 = 30  integer
```

---

### Q48
`10^(2n-1) + 1` is divisible by
(a) 9 (b) 11 (c) 13 (d) 101

**ANSWER: (b)**
```
  n = 1:  10 + 1 = 11
  n = 2:  1000 + 1 = 1001 = 11 x 91
  HCF = 11.
```

---

### Q49
`x^(2n) - y^(2n)` is divisible by
(a) `x - y` only (b) `x + y` only (c) both `x + y` and `x - y` (d) neither

**ANSWER: (c)**
```
  x^(2n) - y^(2n) = (x^n - y^n)(x^n + y^n)  ... and also
                  = (x^2)^n - (y^2)^n , which is divisible by x^2 - y^2
                  = (x + y)(x - y).

  Check n = 1:  x^2 - y^2 = (x+y)(x-y).   Both factors divide it.
```

---

### Q50
The `n`th term of the series `1.2^2 + 2.3^2 + 3.4^2 + ...` is
(a) `n^2(n+1)` (b) `n(n+1)^2` (c) `n(n+1)(n+2)` (d) `(n+1)^2`

**ANSWER: (b)**
```
  1st term: 1 x 2^2  ->  n(n+1)^2 with n = 1 gives 1 x 4 = 4.  Correct.
  (a) would give 1 x 2 = 2.  Wrong.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +-----------------------------------+-------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY                |
  +-----------------------------------+-------------------------------------+
  |  A sum with four formula options  |  Put n = 2 into the LHS and into    |
  |                                   |  all four options. Eliminate.       |
  +-----------------------------------+-------------------------------------+
  |  n = 1 does not separate options  |  Go straight to n = 2, then n = 3.  |
  +-----------------------------------+-------------------------------------+
  |  "is divisible by" with 4 numbers |  Evaluate at n = 1 and n = 2,       |
  |                                   |  take the HCF. That is the answer.  |
  +-----------------------------------+-------------------------------------+
  |  n = 1 gives ZERO                 |  Zero tells you nothing. Use        |
  |                                   |  n = 2 and n = 3 instead.           |
  +-----------------------------------+-------------------------------------+
  |  "greatest number that divides    |  HCF of the values at               |
  |   ... for all n"                  |  n = 1, 2, 3.                       |
  +-----------------------------------+-------------------------------------+
  |  "S(k) => S(k+1) is true.         |  Check S(1). If S(1) is FALSE the   |
  |   Then S(n) is true for ..."      |  answer is "for NO n".              |
  +-----------------------------------+-------------------------------------+
  |  "P(k) => P(k+1) and P(5) true"   |  Answer: true for all n >= 5.       |
  +-----------------------------------+-------------------------------------+
  |  "smallest n such that ..."       |  Substitute 1, 2, 3, 4, 5. Stop at  |
  |                                   |  the first that works.              |
  +-----------------------------------+-------------------------------------+
  |  Sum of cubes                     |  = (sum of the numbers) squared.    |
  |                                   |  1^3+...+n^3 = [n(n+1)/2]^2         |
  +-----------------------------------+-------------------------------------+
  |  Sum of the first n ODD numbers   |  = n^2 . Instantly.                 |
  +-----------------------------------+-------------------------------------+
  |  A matrix raised to power n       |  Compute A^2 and test the options   |
  |                                   |  at n = 2. Do not multiply n times. |
  +-----------------------------------+-------------------------------------+
  |  A recurrence with 4 closed-form  |  Generate a(1), a(2), a(3) and      |
  |  options                          |  test the options on those three.   |
  +-----------------------------------+-------------------------------------+
  |  "10^n + 3.4^(n+2) + k divisible  |  Answer is k = 5. Memorised.        |
  |   by 9, least k"                  |                                     |
  +-----------------------------------+-------------------------------------+
  |  "least n with n! < (n(n+1)/2)^n" |  Answer is n = 2. Memorised.        |
  +-----------------------------------+-------------------------------------+
  |  EAPCET, and you are unsure       |  NEVER leave it blank - there is no |
  |                                   |  negative marking. Guess.           |
  +-----------------------------------+-------------------------------------+
  |  JEE Main, and you cannot narrow  |  Skip it. -1 is not worth it.       |
  |  it to two options                |                                     |
  +-----------------------------------+-------------------------------------+
```

```
  +=====================================================================+
  |                                                                     |
  |   THE ONE SENTENCE FOR THE ENTRANCE EXAMS                           |
  |                                                                     |
  |   You will never be asked to WRITE an induction proof.              |
  |   You will only be asked to RECOGNISE a result.                     |
  |                                                                     |
  |   So: substitute n = 1 and n = 2, and let the options do the work.  |
  |                                                                     |
  +=====================================================================+
```
