# Measures of Dispersion — Competitive Exam Questions

**Chapter 8 · Maths IIA** — for **AP EAPCET, TG EAPCET and JEE Main**

```
  +---------------+--------+---------+-----------+--------+----------------+
  |  EXAM         |  MATHS | PHYSICS | CHEMISTRY | TOTAL  |  MARKING       |
  +---------------+--------+---------+-----------+--------+----------------+
  |  AP EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  TG EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  JEE Main     |   25   |   25    |    25     |  300   |  +4 , -1       |
  +---------------+--------+---------+-----------+--------+----------------+
```

**How many questions come from this chapter**

| Exam | Questions from Measures of Dispersion | Notes |
|---|---|---|
| **AP EAPCET** | 1 to 2 out of 80 | Statistics is a small but reliable unit. Usually a direct variance/S.D./M.D. calculation. |
| **TG EAPCET** | 1 to 2 out of 80 | Same pattern as AP. Often a change-of-scale or "first n naturals" question. |
| **JEE Main** | 1 out of 25 | Statistics appears in almost every shift. Usually variance with missing observations, or a transformation. |

```
  +--------------------------------------------------------------------+
  |  EAPCET has NO NEGATIVE MARKING.                                   |
  |  ->  NEVER leave a blank. A guess costs you nothing.               |
  |                                                                    |
  |  JEE Main has -1 for a wrong answer.                               |
  |  ->  Skip only what you genuinely do not know. But statistics      |
  |      questions here are usually pure arithmetic - attempt them.    |
  +--------------------------------------------------------------------+
```

**Why this chapter is a gift in entrance exams:** there is no theory to recall
under pressure. Every question is arithmetic you can finish in under 90 seconds
if you know the shortcut formula.

---

# ===============================================================
# PATTERN 1 — VARIANCE / S.D. OF A SHORT LIST
# ===============================================================

> **SHORTCUT:** if the mean is a whole number, use the direct formula.
> If the mean is a decimal, use `sum(x^2)/n - mean^2`. Never mix them.

### Q1
The standard deviation of 4, 7, 8, 9, 10, 12, 13, 17 is

(A) 3.74  (B) 14  (C) 3.00  (D) 4.20

**ANSWER: (A)**
```
  sum x = 80, n = 8, mean = 10

  ( x - 10 )^2 :  36, 9, 4, 1, 0, 4, 9, 49     sum = 112

  variance = 112/8 = 14
  S.D. = sqrt(14) = 3.7416...
```

---

### Q2
The variance of 6, 8, 10, 12, 14 is

(A) 4  (B) 8  (C) 10  (D) 16

**ANSWER: (B)**
```
  mean = 50/5 = 10
  deviations: -4, -2, 0, 2, 4   ->  squares 16, 4, 0, 4, 16 = 40
  variance = 40/5 = 8
```

> **SHORTCUT:** 6, 8, 10, 12, 14 is `2 x (3,4,5,6,7)`, and 3,4,5,6,7 is a shift
> of 1,2,3,4,5 whose variance is `(25-1)/12 = 2`. So the answer is `2^2 x 2 = 8`.
> Three seconds, no table.

---

### Q3
The variance of 1, 3, 5, 7, 9 is

(A) 5  (B) 6  (C) 8  (D) 10

**ANSWER: (C)**
```
  mean = 25/5 = 5
  squared deviations: 16, 4, 0, 4, 16 = 40
  variance = 40/5 = 8
```

---

### Q4
The standard deviation of 5, 5, 5, 5, 5 is

(A) 5  (B) 1  (C) 0  (D) 25

**ANSWER: (C)**
```
  Every observation equals the mean, so every deviation is 0.
  Variance = 0, S.D. = 0.
```

> **SHORTCUT:** variance = 0 **if and only if** all observations are identical.
> This is an instant answer whenever you see a constant list.

---

# ===============================================================
# PATTERN 2 — USING sum x AND sum x^2 DIRECTLY
# ===============================================================

> **SHORTCUT:** the moment a question gives you `sum x` and `sum x^2`,
> the answer is `sum(x^2)/n - (sum x / n)^2`. Nothing else is needed.

### Q5
For 10 observations, `sum x = 60` and `sum x^2 = 1000`.
The standard deviation is

(A) 6  (B) 8  (C) 10  (D) 64

**ANSWER: (B)**
```
  mean = 60/10 = 6

  variance = 1000/10 - 6^2 = 100 - 36 = 64

  S.D. = sqrt(64) = 8
```

---

### Q6
For 20 observations, `sum x = 100` and `sum x^2 = 800`.
The variance is

(A) 15  (B) 25  (C) 40  (D) 35

**ANSWER: (A)**
```
  mean = 100/20 = 5
  variance = 800/20 - 25 = 40 - 25 = 15
```

---

### Q7
The mean of 100 items is 50 and their standard deviation is 4.
Then `sum x^2` equals

(A) 250000  (B) 251600  (C) 251000  (D) 240000

**ANSWER: (B)**
```
  sum x^2 = n( sigma^2 + mean^2 )
          = 100( 16 + 2500 )
          = 100 x 2516
          = 251600
```

> **SHORTCUT — memorise this rearrangement:**
> `sum x^2 = n(variance + mean^2)`. It turns half the JEE statistics
> questions into one line of arithmetic.

---

# ===============================================================
# PATTERN 3 — FIRST n NATURAL NUMBERS
# ===============================================================

> **SHORTCUT:** `variance of 1,2,...,n = (n^2 - 1)/12`. Learn it. It appears
> in EAPCET nearly every year in some disguise.

### Q8
The variance of the first 10 natural numbers is

(A) 5.5  (B) 8.25  (C) 33  (D) 2.87

**ANSWER: (B)**
```
  ( 10^2 - 1 )/12 = 99/12 = 8.25
```
(2.87 is the standard deviation — read the question word carefully.)

---

### Q9
The standard deviation of the first 20 natural numbers is approximately

(A) 33.25  (B) 5.77  (C) 10.5  (D) 4.75

**ANSWER: (B)**
```
  variance = ( 400 - 1 )/12 = 399/12 = 33.25
  S.D. = sqrt(33.25) = 5.766...
```

---

### Q10
If the standard deviation of the first n natural numbers is 2, then n is

(A) 5  (B) 7  (C) 9  (D) 11

**ANSWER: (B)**
```
  ( n^2 - 1 )/12 = 2^2 = 4

  n^2 - 1 = 48   ->   n^2 = 49   ->   n = 7
```

---

### Q11
The standard deviation of 2, 4, 6, 8, ... , 20 is

(A) 5.74  (B) 8.25  (C) 2.87  (D) 11.48

**ANSWER: (A)**
```
  2, 4, ..., 20  =  2 x ( 1, 2, ..., 10 )

  variance of 1..10 = 8.25
  variance of the given data = 2^2 x 8.25 = 33
  S.D. = sqrt(33) = 5.7445...
```

> **SHORTCUT:** any arithmetic progression of n terms with common difference d
> has `S.D. = |d| x sqrt[(n^2 - 1)/12]`. Here `2 x sqrt(8.25) = 2 x 2.872 = 5.74`.

---

# ===============================================================
# PATTERN 4 — CHANGE OF ORIGIN AND SCALE
# ===============================================================

> **SHORTCUT:** adding does nothing to the variance; multiplying by k
> multiplies the variance by k^2 and the S.D. by |k|. That single line
> answers every question in this pattern.

### Q12
The variance of 10 observations is 4. If each observation is multiplied
by 3, the new variance is

(A) 4  (B) 12  (C) 36  (D) 7

**ANSWER: (C)**
```
  new variance = 3^2 x 4 = 36
```

---

### Q13
The standard deviation of a data set is 5. If 10 is added to every
observation, the new standard deviation is

(A) 5  (B) 15  (C) 50  (D) 0

**ANSWER: (A)**
```
  Adding a constant shifts the whole data set. The gaps between the
  observations do not change, so the spread does not change.
```

---

### Q14
The mean and standard deviation of a data set are 20 and 4. If
`y = 2x + 3`, the mean and standard deviation of y are

(A) 43 and 8  (B) 43 and 11  (C) 40 and 8  (D) 43 and 4

**ANSWER: (A)**
```
  mean(y) = 2(20) + 3 = 43

  S.D.(y) = |2| x 4 = 8      (the +3 has no effect at all)
```

---

### Q15
The standard deviation of 7 observations is 7. If each observation is
multiplied by 5 and then 3 is added, the new standard deviation is

(A) 7  (B) 35  (C) 38  (D) 175

**ANSWER: (B)**
```
  S.D. -> |5| x 7 = 35.  The "+3" is ignored.
```

---

### Q16
If the standard deviation of `x1, x2, ..., xn` is sigma, then the standard
deviation of `-x1, -x2, ..., -xn` is

(A) -sigma  (B) sigma  (C) sigma^2  (D) 0

**ANSWER: (B)**
```
  Multiplying by k = -1 multiplies the S.D. by |k| = 1.

  Also, standard deviation can NEVER be negative, so (A) is impossible
  on sight.
```

---

# ===============================================================
# PATTERN 5 — MISSING OBSERVATIONS FROM MEAN AND VARIANCE
# ===============================================================

> **SHORTCUT:** two equations, always the same two:
> `sum x = n x mean` and `sum x^2 = n(variance + mean^2)`.
> Subtract the known values, then solve `x + y` and `x^2 + y^2`.

### Q17
The mean of 5 observations is 4.4 and their variance is 8.24. If three
of the observations are 1, 2 and 6, the other two are

(A) 4 and 9  (B) 5 and 8  (C) 3 and 10  (D) 6 and 7

**ANSWER: (A)**
```
  sum x  = 5 x 4.4 = 22        ->   x + y = 22 - 9 = 13
  sum x^2 = 5(8.24 + 19.36) = 138  ->  x^2 + y^2 = 138 - 41 = 97

  2xy = 13^2 - 97 = 169 - 97 = 72   ->   xy = 36

  t^2 - 13t + 36 = 0   ->   t = 4 or 9
```

> **SHORTCUT for the exam hall:** you do not need to solve the quadratic.
> Just test the options — which pair adds to 13 AND has squares summing
> to 97? `4 + 9 = 13`, `16 + 81 = 97`. Done in five seconds.

---

### Q18
The mean and variance of 8 observations are 9 and 9.25. If six of the
observations are 6, 7, 10, 12, 13, 4, the other two are

(A) 8 and 12  (B) 9 and 11  (C) 7 and 13  (D) 10 and 10

**ANSWER: (A)**
```
  sum x = 8 x 9 = 72       known sum = 52     ->  x + y = 20
  sum x^2 = 8(9.25 + 81) = 722
  known squares = 36+49+100+144+169+16 = 514  ->  x^2 + y^2 = 208

  Test (A):  8 + 12 = 20  YES ;  64 + 144 = 208  YES
```

---

### Q19
The mean and variance of 7 observations are 8 and 16. If five of them
are 2, 4, 10, 12, 14, then the product of the other two is

(A) 42  (B) 48  (C) 54  (D) 36

**ANSWER: (B)**
```
  sum x = 56, known = 42       ->  x + y = 14
  sum x^2 = 7(16 + 64) = 560
  known squares = 460          ->  x^2 + y^2 = 100

  2xy = 14^2 - 100 = 196 - 100 = 96   ->   xy = 48
```
(The two observations are 6 and 8.)

---

# ===============================================================
# PATTERN 6 — COEFFICIENT OF VARIATION
# ===============================================================

> **SHORTCUT:** `C.V. = 100 sigma / mean`. Rearrange for whichever of the
> three is missing. LOWER C.V. always means MORE consistent.

### Q20
If the mean of a distribution is 60 and its standard deviation is 12,
its coefficient of variation is

(A) 5%  (B) 20%  (C) 0.2%  (D) 72%

**ANSWER: (B)**
```
  C.V. = (12/60) x 100 = 20 %
```

---

### Q21
The coefficient of variation of a distribution is 25 and its mean is 60.
Its standard deviation is

(A) 15  (B) 24  (C) 1.5  (D) 240

**ANSWER: (A)**
```
  sigma = ( C.V. x mean )/100 = (25 x 60)/100 = 15
```

---

### Q22
The coefficient of variation of a distribution is 70 and its standard
deviation is 16. Its arithmetic mean is approximately

(A) 11.2  (B) 22.86  (C) 43.75  (D) 4.375

**ANSWER: (B)**
```
  mean = ( sigma x 100 )/C.V. = (16 x 100)/70 = 1600/70 = 22.857...
```

---

### Q23
Series P has mean 20 and S.D. 4. Series Q has mean 25 and S.D. 5.
Which is more consistent?

(A) P  (B) Q  (C) both equally consistent  (D) cannot be decided

**ANSWER: (C)**
```
  C.V.(P) = (4/20) x 100 = 20 %
  C.V.(Q) = (5/25) x 100 = 20 %

  The coefficients of variation are EQUAL, so the two series are
  equally consistent.
```

> **TRAP:** Q has the larger S.D. (5 versus 4) so students pick P. But the
> means differ too. Always finish the calculation.

---

### Q24
Two distributions have coefficients of variation 45% and 30%.
The distribution with C.V. 30% is

(A) more variable  (B) more consistent  (C) larger in mean  (D) larger in S.D.

**ANSWER: (B)**
```
  Lower C.V.  ->  less relative variation  ->  MORE consistent.
```

---

# ===============================================================
# PATTERN 7 — MEAN DEVIATION
# ===============================================================

> **SHORTCUT:** for "about the mean", the deviations must total zero before
> you take the modulus — use that as an instant arithmetic check.

### Q25
The mean deviation about the mean of 3, 10, 10, 4, 7, 10, 5 is

(A) 2  (B) 2.57  (C) 3  (D) 7

**ANSWER: (B)**
```
  sum x = 49, n = 7, mean = 7

  | x - 7 | :   4, 3, 3, 3, 0, 3, 2      sum = 18

  M.D. = 18/7 = 2.571...
```

---

### Q26
The mean deviation about the median of
34, 66, 30, 38, 44, 50, 40, 60, 42, 51 is

(A) 8.7  (B) 43  (C) 9.2  (D) 7.8

**ANSWER: (A)**
```
  SORT:  30, 34, 38, 40, 42, 44, 50, 51, 60, 66
  n = 10 (even)  ->  median = (42 + 44)/2 = 43

  | x - 43 | :  13, 9, 5, 3, 1, 1, 7, 8, 17, 23    sum = 87

  M.D.(M) = 87/10 = 8.7
```

---

### Q27
The mean deviation about the mean of the first 5 natural numbers is

(A) 1.2  (B) 2  (C) 3  (D) 1.5

**ANSWER: (A)**
```
  1, 2, 3, 4, 5 has mean 3
  | x - 3 | :  2, 1, 0, 1, 2      sum = 6
  M.D. = 6/5 = 1.2
```

---

### Q28
The mean deviation of a data set is least when it is taken about the

(A) mean  (B) median  (C) mode  (D) range

**ANSWER: (B)**
```
  sum | x - M |  <=  sum | x - a |    for every number a.
  The median minimises the total absolute deviation.
```

---

### Q29
The mean deviation about the mean for the following data is

| x | 1 | 2 | 3 |
|---|---|---|---|
| f | 1 | 2 | 1 |

(A) 0.5  (B) 1  (C) 1.5  (D) 2

**ANSWER: (A)**
```
  N = 4,  sum(fx) = 1 + 4 + 3 = 8,  mean = 2

  | x - 2 | :  1, 0, 1
  f | x - 2 | :  1, 0, 1        sum = 2

  M.D. = 2/4 = 0.5
```

---

# ===============================================================
# PATTERN 8 — FREQUENCY TABLE VARIANCE (SHORT)
# ===============================================================

### Q30
The variance of the following data is

| x | 1 | 2 | 3 |
|---|---|---|---|
| f | 1 | 2 | 1 |

(A) 0.5  (B) 1  (C) 1.5  (D) 2

**ANSWER: (A)**
```
  N = 4,  sum(fx) = 8,  mean = 2
  sum(f x^2) = 1(1) + 2(4) + 1(9) = 1 + 8 + 9 = 18

  variance = 18/4 - 2^2 = 4.5 - 4 = 0.5
```

---

### Q31
For the distribution below, the standard deviation is

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| f | 1 | 9 | 7 | 5 | 3 |

(A) 1.10  (B) 1.20  (C) 2.00  (D) 1.44

**ANSWER: (A)**
```
  N = 25,  sum(fx) = 0 + 9 + 14 + 15 + 12 = 50,  mean = 2
  sum(f x^2) = 0 + 9 + 28 + 45 + 48 = 130

  variance = 130/25 - 4 = 5.2 - 4 = 1.2
  S.D. = sqrt(1.2) = 1.0954...
```
(1.20 is the variance — read the question word.)

---

# ===============================================================
# PATTERN 9 — COMBINED GROUPS
# ===============================================================

> **SHORTCUT:** combined mean is a **weighted** average — never a plain
> average of the two means unless the group sizes are equal.

### Q32
Group 1 has 10 observations with mean 20; group 2 has 15 observations
with mean 25. The mean of all 25 observations is

(A) 22.5  (B) 23  (C) 24  (D) 22

**ANSWER: (B)**
```
            10(20) + 15(25)      200 + 375      575
  mean  =  ----------------- =  ----------- =  ----- = 23
                10 + 15              25          25
```

> **TRAP:** (A) 22.5 is the plain average of 20 and 25. Wrong, because
> group 2 is bigger and pulls the mean towards 25.

---

### Q33
Two groups of 100 observations each have means 40 and 60, and each has
standard deviation 10. The standard deviation of all 200 observations is

(A) 10  (B) 14.14  (C) 20  (D) 200

**ANSWER: (B)**
```
  combined mean = (100 x 40 + 100 x 60)/200 = 10000/200 = 50

  d1 = 40 - 50 = -10   ->  d1^2 = 100
  d2 = 60 - 50 = +10   ->  d2^2 = 100

               100(100 + 100) + 100(100 + 100)      40000
  variance =  ---------------------------------  = -------  = 200
                            200                      200

  S.D. = sqrt(200) = 14.142...
```

> **SHORTCUT for equal-sized groups with equal variances:**
> `combined variance = sigma^2 + (m1 - m2)^2 / 4 = 100 + 400/4 = 200`.

---

# ===============================================================
# PATTERN 10 — CORRECTING A WRONG OBSERVATION
# ===============================================================

### Q34
The mean of 20 observations is 15. One observation was recorded as 30
instead of the correct value 20. The correct mean is

(A) 14.5  (B) 15.5  (C) 14  (D) 16

**ANSWER: (A)**
```
  old sum = 20 x 15 = 300
  correct sum = 300 - 30 + 20 = 290
  correct mean = 290/20 = 14.5
```

---

# ===============================================================
# PATTERN 11 — RANGE
# ===============================================================

### Q35
The range of 6, 7, 10, 12, 13, 4, 8, 12 is

(A) 8  (B) 9  (C) 13  (D) 4

**ANSWER: (B)**
```
  L = 13,  S = 4,  Range = 13 - 4 = 9
```

---

### Q36
The coefficient of range of 5, 10, 15, 20, 25 is

(A) 0.5  (B) 0.67  (C) 20  (D) 0.75

**ANSWER: (B)**
```
  L = 25,  S = 5

  coefficient = (25 - 5)/(25 + 5) = 20/30 = 0.6666...
```

---

# ===============================================================
# PATTERN 12 — THEORY AND DEFINITIONS
# ===============================================================

### Q37
Which of the following is NOT a measure of dispersion?

(A) Range  (B) Mean deviation  (C) Mode  (D) Standard deviation

**ANSWER: (C)**
```
  Mode is a measure of CENTRAL TENDENCY, not of dispersion.
```

---

### Q38
The variance of a data set is measured in

(A) the same units as the data  (B) squared units
(C) no units  (D) percentage

**ANSWER: (B)**
```
  Variance averages SQUARED deviations, so its units are squared.
  Standard deviation (the square root) restores the original units.
```

---

### Q39
The coefficient of variation is

(A) measured in the units of the data  (B) always greater than 100
(C) a unit-free relative measure  (D) never used for comparison

**ANSWER: (C)**
```
  C.V. = (sigma/mean) x 100. Both sigma and the mean carry the same
  units, so they cancel. It is a pure percentage - which is exactly
  why it can compare data sets with different units.
```

---

### Q40
`sum ( x - x_bar )` for any data set equals

(A) n x_bar  (B) 0  (C) the variance  (D) the mean deviation

**ANSWER: (B)**
```
  sum(x - x_bar) = sum x - n x_bar = sum x - sum x = 0

  This is why the mean deviation needs a MODULUS - without it, the
  answer would always be zero.
```

---

### Q41
Which measure of dispersion is the best?

(A) Range  (B) Quartile deviation
(C) Mean deviation  (D) Standard deviation

**ANSWER: (D)**
```
  Standard deviation uses every observation, keeps the units of the
  data, is capable of further algebraic treatment (variances combine
  across groups), and is least affected by sampling fluctuations.
```

---

### Q42
If the variance of a data set is zero, then

(A) all observations are zero  (B) all observations are equal
(C) the mean is zero  (D) the data set is empty

**ANSWER: (B)**
```
  Variance = 0  means every squared deviation is 0, so every
  observation equals the mean. They need not be zero - the list
  7, 7, 7, 7 has variance 0.
```

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+---------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY                  |
  +-----------------------------------+---------------------------------------+
  |  "first n natural numbers"        |  variance = (n^2 - 1)/12              |
  |                                   |  Do NOT list the numbers out.         |
  +-----------------------------------+---------------------------------------+
  |  "each observation is increased   |  Variance UNCHANGED.                  |
  |   / decreased by k"               |  Mean shifts by k. Answer in 2 sec.   |
  +-----------------------------------+---------------------------------------+
  |  "each observation is multiplied  |  Variance x k^2 , S.D. x |k| .        |
  |   by k"                           |  Never x k for the variance.          |
  +-----------------------------------+---------------------------------------+
  |  "y = ax + b"                     |  mean(y) = a mean(x) + b              |
  |                                   |  var(y)  = a^2 var(x)   -- b is IGNORED|
  +-----------------------------------+---------------------------------------+
  |  sum x and sum x^2 are given      |  variance = sum(x^2)/n - (sum x/n)^2  |
  |                                   |  One line. No table.                  |
  +-----------------------------------+---------------------------------------+
  |  mean and variance given,         |  sum x^2 = n(variance + mean^2)       |
  |  sum x^2 wanted                   |                                       |
  +-----------------------------------+---------------------------------------+
  |  "find the missing observations"  |  Get x+y from the mean and x^2+y^2    |
  |                                   |  from the variance, then TEST THE     |
  |                                   |  OPTIONS instead of solving.          |
  +-----------------------------------+---------------------------------------+
  |  "which is more consistent /      |  Compute both C.V.s.                  |
  |   stable / uniform"               |  SMALLER C.V. wins.                   |
  +-----------------------------------+---------------------------------------+
  |  "which is more variable"         |  LARGER C.V. wins. Read the word      |
  |                                   |  twice before choosing.               |
  +-----------------------------------+---------------------------------------+
  |  an arithmetic progression        |  S.D. = |d| x sqrt[(n^2 - 1)/12]      |
  +-----------------------------------+---------------------------------------+
  |  all observations identical       |  Variance = 0, S.D. = 0. Instant.     |
  +-----------------------------------+---------------------------------------+
  |  a NEGATIVE option for a variance |  Eliminate it. Variance and S.D.      |
  |  or an S.D.                       |  are never negative.                  |
  +-----------------------------------+---------------------------------------+
  |  "mean deviation is least about"  |  MEDIAN. Always.                      |
  +-----------------------------------+---------------------------------------+
  |  two groups being merged          |  Combined mean is a WEIGHTED average, |
  |                                   |  not the plain average of the means.  |
  +-----------------------------------+---------------------------------------+
  |  the answer options contain both  |  Re-read whether the question said    |
  |  a number and its square root     |  VARIANCE or STANDARD DEVIATION.      |
  |                                   |  This is the commonest trap.          |
  +-----------------------------------+---------------------------------------+
  |  a continuous table with equal    |  STEP DEVIATION. Pick the middle      |
  |  class widths                     |  midpoint as A. u will be -3 to +3.   |
  +-----------------------------------+---------------------------------------+
  |  you are stuck and it is EAPCET   |  GUESS. There is no negative marking. |
  |                                   |  Never leave a blank.                 |
  +-----------------------------------+---------------------------------------+
```

---

# THE 60-SECOND REVISION BEFORE YOU ENTER THE HALL

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   variance = sum(x^2)/n  -  mean^2                                 |
  |                                                                    |
  |   sum x^2  = n( variance + mean^2 )                                |
  |                                                                    |
  |   variance of 1..n  =  (n^2 - 1)/12                                |
  |                                                                    |
  |   y = ax + b   ->   mean x a, then + b ;   variance x a^2          |
  |                                                                    |
  |   C.V. = 100 sigma / mean       LOWER C.V. = MORE CONSISTENT       |
  |                                                                    |
  |   S.D. of an A.P. = |d| sqrt[(n^2 - 1)/12]                         |
  |                                                                    |
  |   combined mean = (n1 m1 + n2 m2)/(n1 + n2)                        |
  |                                                                    |
  |   M.D. is least about the MEDIAN                                   |
  |                                                                    |
  |   variance and S.D. are NEVER negative                             |
  |                                                                    |
  +--------------------------------------------------------------------+
```
