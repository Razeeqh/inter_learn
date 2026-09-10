# Measures of Dispersion — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 8 — Measures of Dispersion**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> changing only the numbers. So the questions below are grouped by **how often they
> appear**, not tagged to a single exam year. Before your exam, cross-check with the
> official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIA paper (75 marks):**

```
  +---------------------------------------------------------------------+
  |  Section A   10 questions x 2 marks   answer ALL       =  20 marks  |
  |  Section B    7 questions x 4 marks   answer any 5     =  20 marks  |
  |  Section C    7 questions x 7 marks   answer any 5     =  35 marks  |
  |                                                          ---------  |
  |                                                             75      |
  |  Pass mark = 26                                                     |
  +---------------------------------------------------------------------+

  Measures of Dispersion usually appears as:

     Section A  ->  Q10        (mean deviation or variance of a short list)
     Section B  ->  Q19 or Q20 (M.D. or variance of a frequency table)
     Section C  ->  Q24        (variance/S.D. of continuous data, OR
                                coefficient of variation comparison)
```

**Why you must attempt this chapter's questions:** in Sections B and C you choose 5
out of 7. A dispersion question is always available and always follows the same
method. **Never leave it.** It is the most predictable 13 marks in the paper.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# You must answer ALL 10 in Section A. These are guaranteed marks.
# ===============================================================

## Topic: Range and coefficient of range

### Q A1
Find the range and the coefficient of range of
38, 70, 48, 40, 42, 55, 63, 46, 54, 44.

**ANSWER:**
```
  Largest  L = 70
  Smallest S = 38

  RANGE = L - S = 70 - 38 = 32

                           L - S      70 - 38       32
  COEFFICIENT OF RANGE = --------- = ---------- = ------ = 0.2963
                           L + S      70 + 38       108
```
**Range = 32, Coefficient of range = 0.30 (approximately)**

---

### Q A2
Find the coefficient of range for the following distribution.

| Class | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---|---|---|---|
| f | 4 | 9 | 12 | 5 |

**ANSWER:**
```
  For grouped data:
     L = upper boundary of the highest class = 50
     S = lower boundary of the lowest class  = 10

  Range = 50 - 10 = 40

                          50 - 10      40
  Coefficient of range = --------- = ------ = 0.6667
                          50 + 10      60
```
**Range = 40, Coefficient of range = 0.67**

---

## Topic: Mean deviation about the MEAN (ungrouped)

### Q A3
Find the mean deviation about the mean for 3, 6, 10, 4, 9, 10.

**ANSWER:**
```
  sum x = 3 + 6 + 10 + 4 + 9 + 10 = 42        n = 6
  x_bar = 42/6 = 7

  +-------+------------+---------------+
  |   x   |   x - 7    |   | x - 7 |   |
  +-------+------------+---------------+
  |    3  |     -4     |       4       |
  |    6  |     -1     |       1       |
  |   10  |     +3     |       3       |
  |    4  |     -3     |       3       |
  |    9  |     +2     |       2       |
  |   10  |     +3     |       3       |
  +-------+------------+---------------+
  |  42   |      0     |      16       |
  +-------+------------+---------------+

  M.D.(x_bar) = 16/6 = 2.6666...
```
**Mean deviation about the mean = 2.67**

---

### Q A4
Find the mean deviation about the mean for
38, 70, 48, 40, 42, 55, 63, 46, 54, 44.

**ANSWER:**
```
  sum x = 38+70+48+40+42+55+63+46+54+44 = 500      n = 10
  x_bar = 500/10 = 50

  +-------+-------------+----------------+
  |   x   |   x - 50    |  | x - 50 |    |
  +-------+-------------+----------------+
  |   38  |     -12     |       12       |
  |   70  |     +20     |       20       |
  |   48  |      -2     |        2       |
  |   40  |     -10     |       10       |
  |   42  |      -8     |        8       |
  |   55  |      +5     |        5       |
  |   63  |     +13     |       13       |
  |   46  |      -4     |        4       |
  |   54  |      +4     |        4       |
  |   44  |      -6     |        6       |
  +-------+-------------+----------------+
  |  500  |       0     |       84       |
  +-------+-------------+----------------+

  M.D.(x_bar) = 84/10 = 8.4
```
**Mean deviation about the mean = 8.4**

---

### Q A5
Find the mean deviation about the mean for 6, 7, 10, 12, 13, 4, 8, 12.

**ANSWER:**
```
  sum x = 72,  n = 8,  x_bar = 72/8 = 9

  | x - 9 | :   3,  2,  1,  3,  4,  5,  1,  3

  sum = 3+2+1+3+4+5+1+3 = 22

  M.D. = 22/8 = 2.75
```
**Mean deviation about the mean = 2.75**

---

### Q A6
Find the mean deviation about the mean for 4, 7, 8, 9, 10, 12, 13, 17.

**ANSWER:**
```
  sum x = 80,  n = 8,  x_bar = 80/8 = 10

  | x - 10 | :   6,  3,  2,  1,  0,  2,  3,  7      sum = 24

  M.D. = 24/8 = 3
```
**Mean deviation about the mean = 3**

---

## Topic: Mean deviation about the MEDIAN (ungrouped)

### Q A7
Find the mean deviation about the median for
13, 17, 16, 11, 13, 10, 16, 11, 18, 12, 17.

**ANSWER:**
```
  SORT:  10, 11, 11, 12, 13, 13, 16, 16, 17, 17, 18
          1   2   3   4   5   6   7   8   9  10  11

  n = 11 (odd)   ->   median = ((11+1)/2)-th = 6th value = 13

  | x - 13 | :   3, 2, 2, 1, 0, 0, 3, 3, 4, 4, 5

  sum = 3+2+2+1+0+0+3+3+4+4+5 = 27

  M.D.(M) = 27/11 = 2.4545...
```
**Median = 13, Mean deviation about the median = 2.45**

---

### Q A8
Find the mean deviation about the median for 4, 6, 9, 3, 10, 13, 2.

**ANSWER:**
```
  SORT:  2, 3, 4, 6, 9, 10, 13
         1  2  3  4  5   6   7

  n = 7 (odd)  ->  median = 4th value = 6

  | x - 6 | :   4, 3, 2, 0, 3, 4, 7      sum = 23

  M.D.(M) = 23/7 = 3.2857...
```
**Median = 6, Mean deviation about the median = 3.29**

---

### Q A9
Find the mean deviation about the median for 4, 7, 8, 9, 10, 12, 13, 17.

**ANSWER:**
```
  Already sorted.  n = 8 (even)

  4th value = 9,  5th value = 10
  Median = (9 + 10)/2 = 9.5

  | x - 9.5 | :   5.5, 2.5, 1.5, 0.5, 0.5, 2.5, 3.5, 7.5

  sum = 5.5+2.5+1.5+0.5+0.5+2.5+3.5+7.5 = 24

  M.D.(M) = 24/8 = 3
```
**Median = 9.5, Mean deviation about the median = 3**

---

### Q A10
About which measure of central tendency is the mean deviation the least?

**ANSWER:** About the **MEDIAN**.
```
  For any number a :     sum | x - M |  <=  sum | x - a |

  The median is the value that minimises the total absolute deviation.
```

---

## Topic: Variance and standard deviation (ungrouped)

### Q A11
Find the variance and standard deviation of 6, 7, 10, 12, 13, 4, 8, 12.

**ANSWER:**
```
  x_bar = 72/8 = 9

  ( x - 9 )^2 :   9, 4, 1, 9, 16, 25, 1, 9      sum = 74

  VARIANCE = 74/8 = 9.25

  S.D. = sqrt(9.25) = 3.0414...
```
**Variance = 9.25, Standard deviation = 3.04**

---

### Q A12
Find the variance and standard deviation of 2, 4, 6, 8, 10.

**ANSWER:**
```
  sum x = 30,  n = 5,  x_bar = 6

  ( x - 6 )^2 :   16, 4, 0, 4, 16      sum = 40

  VARIANCE = 40/5 = 8

  S.D. = sqrt(8) = 2.8284...
```
**Variance = 8, Standard deviation = 2.83**

---

### Q A13
Find the variance of 5, 12, 3, 18, 6, 8, 2, 10 using the shortcut formula.

**ANSWER:**
```
  sum x = 64,  n = 8,  x_bar = 8

  x^2 :  25, 144, 9, 324, 36, 64, 4, 100      sum x^2 = 706

              sum x^2                706
  VARIANCE = --------- - (x_bar)^2 = ----- - 64 = 88.25 - 64 = 24.25
                 n                     8

  S.D. = sqrt(24.25) = 4.9244...
```
**Variance = 24.25, Standard deviation = 4.92**

---

### Q A14
If the variance of a data set is 121, find its standard deviation.

**ANSWER:**
```
  S.D. = sqrt(variance) = sqrt(121) = 11
```
**Standard deviation = 11**

---

### Q A15
The mean and standard deviation of 8 items are 15 and 3 respectively.
Find `sum x` and `sum x^2`.

**ANSWER:**
```
  sum x = n x x_bar = 8 x 15 = 120

  sum x^2 = n ( sigma^2 + x_bar^2 )
          = 8 ( 3^2 + 15^2 )
          = 8 ( 9 + 225 )
          = 8 x 234
          = 1872
```
**sum x = 120, sum x^2 = 1872**

---

## Topic: Variance of the first n natural numbers

### Q A16
Find the variance of the first 10 natural numbers.

**ANSWER:**
```
                       n^2 - 1
  For 1, 2, ..., n :  ---------  is the variance
                          12

  n = 10 :     ( 100 - 1 )/12  =  99/12  =  8.25
```
**Variance = 8.25** (and S.D. = sqrt(8.25) = 2.87)

---

### Q A17
Find the standard deviation of the first 11 natural numbers.

**ANSWER:**
```
  Variance = ( 11^2 - 1 )/12 = ( 121 - 1 )/12 = 120/12 = 10

  S.D. = sqrt(10) = 3.1622...
```
**Variance = 10, Standard deviation = 3.16**

---

## Topic: Coefficient of variation

### Q A18
If the mean of a data set is 25 and its standard deviation is 5,
find the coefficient of variation.

**ANSWER:**
```
            sigma            5
  C.V. =  --------- x 100 = ---- x 100 = 20
            x_bar            25
```
**Coefficient of variation = 20%**

---

### Q A19
The coefficient of variation of a distribution is 60 and its standard
deviation is 21. Find its arithmetic mean.

**ANSWER:**
```
            sigma                        sigma x 100
  C.V. =  --------- x 100     =>  x_bar = -------------
            x_bar                            C.V.

  x_bar = (21 x 100)/60 = 2100/60 = 35
```
**Mean = 35**

Check: `(21/35) x 100 = 60`. Correct.

---

### Q A20
Two distributions have coefficients of variation 45% and 30%.
Which one is more consistent, and why?

**ANSWER:**
```
  The distribution with the LOWER coefficient of variation is more consistent.

  30 % < 45 %,  so the SECOND distribution is more consistent.
```
**The second distribution (C.V. = 30%) is more consistent.**

---

## Topic: Effect of change of origin and scale

### Q A21
If every observation of a data set is increased by 5, what happens to
(i) the mean and (ii) the variance?

**ANSWER:**
```
  (i)  The mean INCREASES by 5.

  (ii) The variance is UNCHANGED.

  Reason: adding a constant slides the whole data set sideways. The
  distances between the observations do not change, so the spread
  cannot change.
```

---

### Q A22
The variance of 20 observations is 5. If each observation is multiplied
by 2, find the variance of the new data.

**ANSWER:**
```
  Multiplying every observation by k multiplies the VARIANCE by k^2.

  New variance = 2^2 x 5 = 4 x 5 = 20
```
**New variance = 20** (new S.D. = sqrt(20) = 4.47)

---

## Topic: Definitions and theory

### Q A23
Define the coefficient of variation and state its use.

**ANSWER:**
```
                     standard deviation
        C.V.  =    ----------------------  x  100
                            mean

  It is a RELATIVE measure of dispersion, expressed as a percentage
  and having NO units.

  USE: to compare the variability (consistency) of two or more data
  sets that have different means or different units.
  The set with the SMALLER C.V. is the MORE CONSISTENT one.
```

---

### Q A24
Which is the best measure of dispersion, and why?

**ANSWER:**
```
  STANDARD DEVIATION is the best measure of dispersion, because it:

    (i)   uses EVERY observation in the data
    (ii)  has the SAME UNITS as the original data
    (iii) is capable of further algebraic treatment (variances of
          separate groups can be combined)
    (iv)  is the least affected by sampling fluctuations
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. A dispersion question is nearly always there.
# ===============================================================

### Q B1 — M.D. about the mean, discrete frequency distribution
Find the mean deviation about the mean for the following data.

| x | 2 | 5 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|----|----|
| f | 2 | 8 | 10 | 7 | 8 | 5 |

**ANSWER:**
```
  +--------+--------+---------+--------------+-----------------+
  |   x    |   f    |   f x   | | x - 7.5 |  |  f | x - 7.5 |  |
  +--------+--------+---------+--------------+-----------------+
  |    2   |    2   |     4   |     5.5      |      11.0       |
  |    5   |    8   |    40   |     2.5      |      20.0       |
  |    6   |   10   |    60   |     1.5      |      15.0       |
  |    8   |    7   |    56   |     0.5      |       3.5       |
  |   10   |    8   |    80   |     2.5      |      20.0       |
  |   12   |    5   |    60   |     4.5      |      22.5       |
  +--------+--------+---------+--------------+-----------------+
  | TOTAL  | N = 40 |   300   |              |      92.0       |
  +--------+--------+---------+--------------+-----------------+

  N = 2 + 8 + 10 + 7 + 8 + 5 = 40

  sum(f x) = 4 + 40 + 60 + 56 + 80 + 60 = 300

  x_bar = 300/40 = 7.5

  sum f | x - 7.5 | = 11 + 20 + 15 + 3.5 + 20 + 22.5 = 92

                92
  M.D.(x_bar) = ---- = 2.3
                40
```
**Mean = 7.5, Mean deviation about the mean = 2.3**

---

### Q B2 — M.D. about the median, discrete frequency distribution
Find the mean deviation about the median for the following data.

| x | 3 | 6 | 9 | 12 | 13 | 15 | 21 | 22 |
|---|---|---|---|----|----|----|----|----|
| f | 3 | 4 | 5 | 2 | 4 | 5 | 4 | 3 |

**ANSWER:**
```
  +--------+--------+---------+-------------+----------------+
  |   x    |   f    |   c.f.  | | x - 13 |  |  f | x - 13 |  |
  +--------+--------+---------+-------------+----------------+
  |    3   |    3   |     3   |     10      |       30       |
  |    6   |    4   |     7   |      7      |       28       |
  |    9   |    5   |    12   |      4      |       20       |
  |   12   |    2   |    14   |      1      |        2       |
  |   13   |    4   |    18   |      0      |        0       |
  |   15   |    5   |    23   |      2      |       10       |
  |   21   |    4   |    27   |      8      |       32       |
  |   22   |    3   |    30   |      9      |       27       |
  +--------+--------+---------+-------------+----------------+
  | TOTAL  | N = 30 |         |             |      149       |
  +--------+--------+---------+-------------+----------------+

  N = 30 (even). We need the 15th and 16th observations.
  c.f. is 14 at x = 12 and 18 at x = 13, so both the 15th and the
  16th observations equal 13.

  MEDIAN M = 13

  sum f | x - 13 | = 30+28+20+2+0+10+32+27 = 149

             149
  M.D.(M) = ------ = 4.9666...
             30
```
**Median = 13, Mean deviation about the median = 4.97**

---

### Q B3 — M.D. about the mean, discrete distribution
Find the mean deviation about the mean for the following data.

| x | 10 | 30 | 50 | 70 | 90 |
|---|----|----|----|----|----|
| f | 4 | 24 | 28 | 16 | 8 |

**ANSWER:**
```
  +--------+--------+----------+-------------+----------------+
  |   x    |   f    |   f x    | | x - 50 |  | f | x - 50 |   |
  +--------+--------+----------+-------------+----------------+
  |   10   |    4   |     40   |     40      |      160       |
  |   30   |   24   |    720   |     20      |      480       |
  |   50   |   28   |   1400   |      0      |        0       |
  |   70   |   16   |   1120   |     20      |      320       |
  |   90   |    8   |    720   |     40      |      320       |
  +--------+--------+----------+-------------+----------------+
  | TOTAL  | N = 80 |   4000   |             |     1280       |
  +--------+--------+----------+-------------+----------------+

  N = 4 + 24 + 28 + 16 + 8 = 80

  sum(f x) = 40 + 720 + 1400 + 1120 + 720 = 4000

  x_bar = 4000/80 = 50

  sum f|x - 50| = 160 + 480 + 0 + 320 + 320 = 1280

               1280
  M.D.(x_bar) = ------ = 16
                 80
```
**Mean = 50, Mean deviation about the mean = 16**

---

### Q B4 — M.D. about the mean, continuous distribution
Find the mean deviation about the mean for the following data.

| Class | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 |
|---|---|---|---|---|---|---|---|
| f | 2 | 3 | 8 | 14 | 8 | 3 | 2 |

**ANSWER:**
```
  +----------+--------+--------+----------+-------------+---------------+
  |  Class   |   f    |   x    |   f x    | | x - 45 |  | f | x - 45 |  |
  +----------+--------+--------+----------+-------------+---------------+
  |  10 - 20 |    2   |   15   |     30   |     30      |      60       |
  |  20 - 30 |    3   |   25   |     75   |     20      |      60       |
  |  30 - 40 |    8   |   35   |    280   |     10      |      80       |
  |  40 - 50 |   14   |   45   |    630   |      0      |       0       |
  |  50 - 60 |    8   |   55   |    440   |     10      |      80       |
  |  60 - 70 |    3   |   65   |    195   |     20      |      60       |
  |  70 - 80 |    2   |   75   |    150   |     30      |      60       |
  +----------+--------+--------+----------+-------------+---------------+
  |  TOTAL   | N = 40 |        |   1800   |             |     400       |
  +----------+--------+--------+----------+-------------+---------------+

  Midpoint x = (lower limit + upper limit)/2

  N = 2+3+8+14+8+3+2 = 40

  sum(f x) = 30+75+280+630+440+195+150 = 1800

  x_bar = 1800/40 = 45

  sum f|x - 45| = 60+60+80+0+80+60+60 = 400

                400
  M.D.(x_bar) = ----- = 10
                 40
```
**Mean = 45, Mean deviation about the mean = 10**

---

### Q B5 — M.D. about the median, continuous distribution
Find the mean deviation about the median for the following data.

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 |
|---|---|---|---|---|---|---|
| f | 6 | 8 | 14 | 16 | 4 | 2 |

**ANSWER:**

**Step 1 — the median**
```
  +----------+--------+---------+
  |  Class   |   f    |   c.f.  |
  +----------+--------+---------+
  |   0 - 10 |    6   |     6   |
  |  10 - 20 |    8   |    14   |   <-- cf before the median class
  |  20 - 30 |   14   |    28   |   <-- MEDIAN CLASS
  |  30 - 40 |   16   |    44   |
  |  40 - 50 |    4   |    48   |
  |  50 - 60 |    2   |    50   |
  +----------+--------+---------+
  |          | N = 50 |         |
  +----------+--------+---------+

  N/2 = 25.  First c.f. that reaches 25 is 28, so median class = 20-30.

  l = 20,  cf = 14,  f = 14,  h = 10

               ( N/2 - cf )           ( 25 - 14 )
  M  =  l  +   ( --------- ) x h = 20 + ( ------- ) x 10
               (     f     )           (    14    )

     =  20 + 110/14  =  20 + 7.857  =  27.86
```

**Step 2 — the deviation table**
```
  +----------+--------+--------+----------------+------------------+
  |  Class   |   f    |   x    | | x - 27.86 |  | f | x - 27.86 |  |
  +----------+--------+--------+----------------+------------------+
  |   0 - 10 |    6   |    5   |     22.86      |      137.16      |
  |  10 - 20 |    8   |   15   |     12.86      |      102.88      |
  |  20 - 30 |   14   |   25   |      2.86      |       40.04      |
  |  30 - 40 |   16   |   35   |      7.14      |      114.24      |
  |  40 - 50 |    4   |   45   |     17.14      |       68.56      |
  |  50 - 60 |    2   |   55   |     27.14      |       54.28      |
  +----------+--------+--------+----------------+------------------+
  |  TOTAL   | N = 50 |        |                |      517.16      |
  +----------+--------+--------+----------------+------------------+

               517.16
  M.D.(M)  =  --------  =  10.3432
                 50
```
**Median = 27.86, Mean deviation about the median = 10.34**

---

### Q B6 — Variance and S.D., discrete frequency distribution
Find the variance and standard deviation of the following data.

| x | 4 | 8 | 11 | 17 | 20 | 24 | 32 |
|---|---|---|----|----|----|----|----|
| f | 3 | 5 | 9 | 5 | 4 | 3 | 1 |

**ANSWER:**
```
  +--------+--------+---------+----------+---------------+------------------+
  |   x    |   f    |   f x   | x - 14   | ( x - 14 )^2  | f ( x - 14 )^2   |
  +--------+--------+---------+----------+---------------+------------------+
  |    4   |    3   |    12   |   -10    |      100      |       300        |
  |    8   |    5   |    40   |    -6    |       36      |       180        |
  |   11   |    9   |    99   |    -3    |        9      |        81        |
  |   17   |    5   |    85   |    +3    |        9      |        45        |
  |   20   |    4   |    80   |    +6    |       36      |       144        |
  |   24   |    3   |    72   |   +10    |      100      |       300        |
  |   32   |    1   |    32   |   +18    |      324      |       324        |
  +--------+--------+---------+----------+---------------+------------------+
  | TOTAL  | N = 30 |   420   |          |               |      1374        |
  +--------+--------+---------+----------+---------------+------------------+

  N = 3+5+9+5+4+3+1 = 30

  sum(f x) = 12+40+99+85+80+72+32 = 420

  x_bar = 420/30 = 14

  sum f( x - 14 )^2 = 300+180+81+45+144+300+324 = 1374

              1374
  VARIANCE = ------ = 45.8
               30

  S.D. = sqrt(45.8) = 6.7676...
```
**Mean = 14, Variance = 45.8, Standard deviation = 6.77**

---

### Q B7 — Variance and S.D. by the shortcut formula
Find the variance and standard deviation of the following data.

| x | 10 | 30 | 50 | 70 | 90 |
|---|----|----|----|----|----|
| f | 4 | 24 | 28 | 16 | 8 |

**ANSWER:**
```
  +--------+--------+----------+-----------+--------------+
  |   x    |   f    |   f x    |   x^2     |   f x^2      |
  +--------+--------+----------+-----------+--------------+
  |   10   |    4   |     40   |     100   |       400    |
  |   30   |   24   |    720   |     900   |     21600    |
  |   50   |   28   |   1400   |    2500   |     70000    |
  |   70   |   16   |   1120   |    4900   |     78400    |
  |   90   |    8   |    720   |    8100   |     64800    |
  +--------+--------+----------+-----------+--------------+
  | TOTAL  | N = 80 |   4000   |           |    235200    |
  +--------+--------+----------+-----------+--------------+

  x_bar = 4000/80 = 50

              sum f x^2                 235200
  VARIANCE = ----------- - (x_bar)^2 = --------- - 2500
                  N                       80

           = 2940 - 2500 = 440

  S.D. = sqrt(440) = 20.976...
```
**Mean = 50, Variance = 440, Standard deviation = 20.98**

*Check by the direct method:* deviations from 50 are -40, -20, 0, 20, 40;
`f(x-50)^2` = 6400, 9600, 0, 6400, 12800 -> total 35200; `35200/80 = 440`.
Same answer.

---

### Q B8 — Mean deviation about the mean, continuous distribution
Find the mean deviation about the mean for the following data.

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---|---|---|---|---|
| f | 5 | 8 | 15 | 16 | 6 |

**ANSWER:**
```
  +----------+--------+--------+---------+-------------+---------------+
  |  Class   |   f    |   x    |   f x   | | x - 27 |  | f | x - 27 |  |
  +----------+--------+--------+---------+-------------+---------------+
  |   0 - 10 |    5   |    5   |     25  |     22      |      110      |
  |  10 - 20 |    8   |   15   |    120  |     12      |       96      |
  |  20 - 30 |   15   |   25   |    375  |      2      |       30      |
  |  30 - 40 |   16   |   35   |    560  |      8      |      128      |
  |  40 - 50 |    6   |   45   |    270  |     18      |      108      |
  +----------+--------+--------+---------+-------------+---------------+
  |  TOTAL   | N = 50 |        |   1350  |             |      472      |
  +----------+--------+--------+---------+-------------+---------------+

  N = 5 + 8 + 15 + 16 + 6 = 50

  sum(f x) = 25 + 120 + 375 + 560 + 270 = 1350

  x_bar = 1350/50 = 27

  sum f|x - 27| = 110 + 96 + 30 + 128 + 108 = 472

                472
  M.D.(x_bar) = ----- = 9.44
                 50
```
**Mean = 27, Mean deviation about the mean = 9.44**

---

### Q B9 — Find the missing observations (mean and variance given)
The mean of 5 observations is 4.4 and their variance is 8.24.
If three of the observations are 1, 2 and 6, find the other two.

**ANSWER:**
```
  Let the two unknown observations be x and y.

  STEP 1 - use the mean
     sum of all 5 = n x mean = 5 x 4.4 = 22
     1 + 2 + 6 = 9
     so    x + y = 22 - 9 = 13                          ... (i)

  STEP 2 - use the variance
     sum x^2 = n ( variance + mean^2 )
             = 5 ( 8.24 + 4.4^2 )
             = 5 ( 8.24 + 19.36 )
             = 5 x 27.6
             = 138

     1^2 + 2^2 + 6^2 = 1 + 4 + 36 = 41
     so    x^2 + y^2 = 138 - 41 = 97                    ... (ii)

  STEP 3 - solve (i) and (ii)
     ( x + y )^2 = x^2 + y^2 + 2xy
          13^2   =    97     + 2xy
           169   =    97     + 2xy
           2xy   =    72     ->   xy = 36               ... (iii)

  STEP 4 - form the quadratic
     t^2 - (x + y) t + xy = 0
     t^2 - 13 t + 36 = 0

     t = [ 13 +/- sqrt(169 - 144) ] / 2
       = [ 13 +/- sqrt(25) ] / 2
       = ( 13 +/- 5 ) / 2

     t = 18/2 = 9      or      t = 8/2 = 4
```
**The other two observations are 4 and 9.**

*Verify:* 1, 2, 6, 4, 9 -> sum = 22, mean = 4.4. Correct.
Squares: 1, 4, 36, 16, 81 -> sum = 138. Variance = 138/5 - 19.36
= 27.6 - 19.36 = 8.24. Correct.

---

### Q B10 — Find the missing observations
The mean and variance of 7 observations are 8 and 16. Five of the
observations are 2, 4, 10, 12 and 14. Find the other two.

**ANSWER:**
```
  sum of all 7 = 7 x 8 = 56
  2 + 4 + 10 + 12 + 14 = 42
  so   x + y = 56 - 42 = 14                             ... (i)

  sum x^2 = n(variance + mean^2) = 7(16 + 64) = 7 x 80 = 560
  4 + 16 + 100 + 144 + 196 = 460
  so   x^2 + y^2 = 560 - 460 = 100                      ... (ii)

  (x + y)^2 = x^2 + y^2 + 2xy
     14^2   =   100    + 2xy
      196   =   100    + 2xy   ->   xy = 48             ... (iii)

  t^2 - 14t + 48 = 0
  t = [14 +/- sqrt(196 - 192)]/2 = (14 +/- 2)/2 = 8 or 6
```
**The other two observations are 6 and 8.**

*Verify:* 2,4,10,12,14,6,8 -> sum = 56, mean = 8. Correct.
Squares: 4,16,100,144,196,36,64 = 560. Variance = 560/7 - 64 = 80 - 64 = 16. Correct.

---

### Q B11 — Correcting a wrong observation
The mean and standard deviation of 100 observations are 20 and 3.
Later it was found that one observation was recorded as 12 instead
of the correct value 21. Find the correct mean and standard deviation.

**ANSWER:**
```
  STEP 1 - correct the sum
     old sum x = n x mean = 100 x 20 = 2000
     correct sum x = 2000 - 12 + 21 = 2009

     CORRECT MEAN = 2009/100 = 20.09

  STEP 2 - correct the sum of squares
     old sum x^2 = n( sigma^2 + mean^2 ) = 100( 9 + 400 ) = 40900
     correct sum x^2 = 40900 - 12^2 + 21^2
                     = 40900 - 144 + 441
                     = 41197

  STEP 3 - correct variance
                        41197
     correct variance = ------- - ( 20.09 )^2
                          100

                      = 411.97 - 403.6081
                      = 8.3619

     correct S.D. = sqrt(8.3619) = 2.8917...
```
**Correct mean = 20.09, correct standard deviation = 2.89**

---

### Q B12 — Combined mean and combined variance
Group A has 5 observations with mean 12 and variance 4.
Group B has 10 observations with mean 15 and variance 9.
Find the mean and variance of all 15 observations taken together.

**ANSWER:**
```
  n1 = 5,  x1_bar = 12,  sigma1^2 = 4
  n2 = 10, x2_bar = 15,  sigma2^2 = 9

  COMBINED MEAN

                n1 x1_bar + n2 x2_bar      5(12) + 10(15)
    x_bar  =   ----------------------- =  ----------------
                      n1 + n2                  5 + 10

                60 + 150      210
           =   ---------- =  -----  =  14
                   15          15

  THE GAPS

    d1 = 12 - 14 = -2   ->  d1^2 = 4
    d2 = 15 - 14 = +1   ->  d2^2 = 1

  COMBINED VARIANCE

               n1( sigma1^2 + d1^2 ) + n2( sigma2^2 + d2^2 )
    sigma^2 = ----------------------------------------------
                             n1 + n2

               5( 4 + 4 ) + 10( 9 + 1 )      5(8) + 10(10)
            = -------------------------- =  ---------------
                          15                       15

               40 + 100      140
            = ---------- =  -----  =  9.3333...
                  15          15

    sigma = sqrt(9.3333) = 3.0550...
```
**Combined mean = 14, combined variance = 9.33, combined S.D. = 3.06**

---

### Q B13 — Comparing consistency from given means and S.D.s
The average marks of section A are 40 with standard deviation 8, and
of section B are 60 with standard deviation 9. Which section is more
consistent?

**ANSWER:**
```
             sigma
  C.V. =  ---------- x 100
             x_bar

                 8
  C.V.(A) =  -------- x 100  =  20 %
                40

                 9
  C.V.(B) =  -------- x 100  =  15 %
                60

  Since  C.V.(B) = 15 %  <  C.V.(A) = 20 % ,

  SECTION B IS MORE CONSISTENT.
```
**Section B is more consistent.**

Note how the raw standard deviation would have misled you — B's S.D. (9)
is larger than A's (8), yet B is the more consistent section, because its
mean is much larger.

---

### Q B14 — Prove the variance of the first n natural numbers
Prove that the variance of the first n natural numbers is `(n^2 - 1)/12`.

**ANSWER:**
```
  The data is  1, 2, 3, ... , n.

  sum x   = n(n + 1)/2

                    sum x       n(n+1)/2      n + 1
  MEAN    x_bar  =  ------  =  ----------  =  -------
                       n           n             2

  sum x^2 = n(n + 1)(2n + 1)/6

  Using  VARIANCE = ( sum x^2 )/n  -  ( x_bar )^2 :

                 n(n+1)(2n+1)/6      ( n+1 )^2
  VARIANCE  =   ----------------  -  ( --- )
                        n            (  2  )

                 (n+1)(2n+1)      (n+1)^2
            =   ------------- -  ---------
                      6              4

                 ( n+1 ) [ 2(2n+1)  -  3(n+1) ]
            =   -------------------------------
                              12

                 ( n+1 )( 4n + 2 - 3n - 3 )
            =   ---------------------------
                            12

                 ( n+1 )( n - 1 )        n^2 - 1
            =   ------------------  =   ---------
                        12                  12
```
**Hence the variance of 1, 2, ..., n is `(n^2 - 1)/12`.**

*Check with n = 5:* formula gives `(25 - 1)/12 = 2`.
By hand: 1,2,3,4,5 has mean 3; squared deviations 4,1,0,1,4 = 10;
variance = 10/5 = 2. Correct.

---

### Q B15 — Effect of a transformation
The mean and variance of 20 observations are 10 and 4. If each
observation is multiplied by 3 and then 5 is subtracted from it,
find the new mean and the new variance.

**ANSWER:**
```
  New observation  y = 3x - 5

  MEAN:      multiplying by 3 multiplies the mean by 3
             subtracting 5 subtracts 5 from the mean

             y_bar = 3(10) - 5 = 30 - 5 = 25

  VARIANCE:  multiplying by 3 multiplies the variance by 3^2 = 9
             subtracting 5 does NOT change the variance at all

             var(y) = 9 x 4 = 36

  S.D. = sqrt(36) = 6
```
**New mean = 25, new variance = 36, new S.D. = 6**

---

### Q B16 — Range, M.D. and S.D. of the same small data set
For the data 4, 6, 8, 10, 12 find (i) the range, (ii) the mean deviation
about the mean, and (iii) the standard deviation.

**ANSWER:**
```
  sum x = 40,  n = 5,  x_bar = 8

  (i)   RANGE = 12 - 4 = 8
        Coefficient of range = (12 - 4)/(12 + 4) = 8/16 = 0.5

  (ii)  +-------+----------+--------------+---------------+
        |   x   |  x - 8   |  | x - 8 |   |  ( x - 8 )^2  |
        +-------+----------+--------------+---------------+
        |    4  |    -4    |       4      |       16      |
        |    6  |    -2    |       2      |        4      |
        |    8  |     0    |       0      |        0      |
        |   10  |    +2    |       2      |        4      |
        |   12  |    +4    |       4      |       16      |
        +-------+----------+--------------+---------------+
        |  40   |     0    |      12      |       40      |
        +-------+----------+--------------+---------------+

        M.D.(x_bar) = 12/5 = 2.4

  (iii) VARIANCE = 40/5 = 8
        S.D. = sqrt(8) = 2.8284... = 2.83
```
**Range = 8, M.D. = 2.4, Variance = 8, S.D. = 2.83**

Sanity check: `M.D. (2.4)  <  S.D. (2.83)  <  Range (8)`. As expected.

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. This chapter's question is usually Q24.
# ===============================================================

### Q C1 — Variance and S.D. of a continuous distribution (step deviation)
**THE most-repeated 7-mark question from this chapter.**

Find the mean, variance and standard deviation of the following distribution.

| Class | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 | 80-90 | 90-100 |
|---|---|---|---|---|---|---|---|
| Frequency | 3 | 7 | 12 | 15 | 8 | 3 | 2 |

**ANSWER:**

```
  MARK SPLIT you should aim for:
     writing the formulas ..................... 1 mark
     the completed table (x, u, fu, fu^2) ..... 3 marks
     the mean ................................. 1 mark
     the variance ............................. 1 mark
     the standard deviation ................... 1 mark
                                                -------
                                                7 marks
```

**Step 1 — set up.** All class widths are 10, so `h = 10`.
Midpoints are 35, 45, 55, 65, 75, 85, 95. Take the assumed mean `A = 65`.

**Step 2 — the table.**
```
  +------------+--------+--------+-----------+-----------+-------------+
  |   CLASS    |   f    |   x    |     u     |    f u    |    f u^2    |
  |            |        |        | (x-65)/10 |           |             |
  +------------+--------+--------+-----------+-----------+-------------+
  |   30 - 40  |    3   |   35   |    -3     |     -9    |      27     |
  |   40 - 50  |    7   |   45   |    -2     |    -14    |      28     |
  |   50 - 60  |   12   |   55   |    -1     |    -12    |      12     |
  |   60 - 70  |   15   |   65   |     0     |      0    |       0     |
  |   70 - 80  |    8   |   75   |     1     |      8    |       8     |
  |   80 - 90  |    3   |   85   |     2     |      6    |      12     |
  |  90 - 100  |    2   |   95   |     3     |      6    |      18     |
  +------------+--------+--------+-----------+-----------+-------------+
  |   TOTAL    | N = 50 |        |           |    -15    |     105     |
  +------------+--------+--------+-----------+-----------+-------------+

  N        = 3 + 7 + 12 + 15 + 8 + 3 + 2 = 50
  sum fu   = -9 - 14 - 12 + 0 + 8 + 6 + 6 = -35 + 20 = -15
  sum fu^2 = 27 + 28 + 12 + 0 + 8 + 12 + 18 = 105
```

**Step 3 — the mean.**
```
                     ( sum f u )              ( -15 )
  x_bar   =   A  +   ( -------- ) x h  =  65 + ( ---- ) x 10
                     (    N     )              (  50 )

          =   65  +  ( -0.3 ) x 10   =   65 - 3   =   62
```

**Step 4 — the variance.**
```
                       [ sum f u^2      ( sum f u )^2 ]
  VARIANCE  =   h^2  x [ ----------  -  ( -------- )  ]
                       [     N          (    N     )  ]

                       [  105        ( -15 )^2 ]
            =   10^2 x [ ------  -   ( ---- )  ]
                       [   50        (  50 )   ]

            =   100 x [ 2.1  -  ( -0.3 )^2 ]

            =   100 x [ 2.1  -  0.09 ]

            =   100 x 2.01

            =   201
```

**Step 5 — the standard deviation.**
```
  S.D. = sqrt(201)

     14^2   = 196
     14.2^2 = 201.64        (slightly too big)
     14.18^2 = 201.0724     (very close)

  S.D. ~= 14.18
```

**ANSWER: Mean = 62, Variance = 201, Standard deviation = 14.18**

---

### Q C2 — Compare the consistency of two data sets (coefficient of variation)
**The other most-repeated 7-mark question.**

The prices of a share X and a share Y over the last 10 trading days are
given below. Find which share is more stable in value.

```
  X :   35,  54,  52,  53,  56,  58,  52,  50,  51,  49
  Y :  108, 107, 105, 105, 106, 107, 104, 103, 104, 101
```

**ANSWER:**

```
  MARK SPLIT:
     mean and S.D. of X ....................... 2.5 marks
     mean and S.D. of Y ....................... 2.5 marks
     both C.V.s ............................... 1 mark
     the conclusion sentence .................. 1 mark
                                                --------
                                                7 marks
```

**PART 1 — SHARE X**
```
  sum X = 35+54+52+53+56+58+52+50+51+49 = 510
  n = 10       mean of X = 510/10 = 51

  +--------+---------------+------------------+
  |   X    |   X - 51      |   ( X - 51 )^2   |
  +--------+---------------+------------------+
  |   35   |     -16       |        256       |
  |   54   |      +3       |          9       |
  |   52   |      +1       |          1       |
  |   53   |      +2       |          4       |
  |   56   |      +5       |         25       |
  |   58   |      +7       |         49       |
  |   52   |      +1       |          1       |
  |   50   |      -1       |          1       |
  |   51   |       0       |          0       |
  |   49   |      -2       |          4       |
  +--------+---------------+------------------+
  |  510   |       0       |        350       |
  +--------+---------------+------------------+
              ^
     zero-check passes:  (3+1+2+5+7+1) - (16+1+2) = 19 - 19 = 0

  Variance of X = 350/10 = 35

  S.D. of X = sqrt(35) = 5.9160...

                 5.9160
  C.V. of X  =  --------- x 100  =  11.60 %
                    51
```

**PART 2 — SHARE Y**
```
  sum Y = 108+107+105+105+106+107+104+103+104+101 = 1050
  n = 10       mean of Y = 1050/10 = 105

  +--------+---------------+-------------------+
  |   Y    |   Y - 105     |   ( Y - 105 )^2   |
  +--------+---------------+-------------------+
  |  108   |      +3       |          9        |
  |  107   |      +2       |          4        |
  |  105   |       0       |          0        |
  |  105   |       0       |          0        |
  |  106   |      +1       |          1        |
  |  107   |      +2       |          4        |
  |  104   |      -1       |          1        |
  |  103   |      -2       |          4        |
  |  104   |      -1       |          1        |
  |  101   |      -4       |         16        |
  +--------+---------------+-------------------+
  | 1050   |       0       |         40        |
  +--------+---------------+-------------------+
              ^
     zero-check passes:  (3+2+1+2) - (1+2+1+4) = 8 - 8 = 0

  Variance of Y = 40/10 = 4

  S.D. of Y = sqrt(4) = 2

                    2
  C.V. of Y  =  --------- x 100  =  1.9047...  =  1.90 %
                  105
```

**PART 3 — THE CONCLUSION**
```
  +---------------+------------+----------+-----------+----------+
  |    SHARE      |    MEAN    | VARIANCE |   S.D.    |   C.V.   |
  +---------------+------------+----------+-----------+----------+
  |      X        |     51     |    35    |   5.92    |  11.60 % |
  |      Y        |    105     |     4    |   2.00    |   1.90 % |
  +---------------+------------+----------+-----------+----------+

  Since  C.V. of Y (1.90 %)  <  C.V. of X (11.60 %) ,
```
**SHARE Y IS MORE STABLE (more consistent) in value.
Share X shows greater variability.**

> Write that final sentence. It carries a mark on its own, and every
> year students who did all the arithmetic correctly lose it by stopping
> after computing the two C.V.s.

---

### Q C3 — Mean, variance and S.D. with a large class width
Calculate the mean, variance and standard deviation of the following
frequency distribution.

| Class | 0-30 | 30-60 | 60-90 | 90-120 | 120-150 | 150-180 | 180-210 |
|---|---|---|---|---|---|---|---|
| Frequency | 2 | 3 | 5 | 10 | 3 | 5 | 2 |

**ANSWER:**

All class widths are 30, so `h = 30`. Midpoints are 15, 45, 75, 105, 135,
165, 195. Take `A = 105`.

```
  +--------------+--------+--------+------------+-----------+-------------+
  |    CLASS     |   f    |   x    |     u      |    f u    |    f u^2    |
  |              |        |        | (x-105)/30 |           |             |
  +--------------+--------+--------+------------+-----------+-------------+
  |     0 -  30  |    2   |   15   |     -3     |     -6    |      18     |
  |    30 -  60  |    3   |   45   |     -2     |     -6    |      12     |
  |    60 -  90  |    5   |   75   |     -1     |     -5    |       5     |
  |    90 - 120  |   10   |  105   |      0     |      0    |       0     |
  |   120 - 150  |    3   |  135   |      1     |      3    |       3     |
  |   150 - 180  |    5   |  165   |      2     |     10    |      20     |
  |   180 - 210  |    2   |  195   |      3     |      6    |      18     |
  +--------------+--------+--------+------------+-----------+-------------+
  |    TOTAL     | N = 30 |        |            |      2    |      76     |
  +--------------+--------+--------+------------+-----------+-------------+

  N        = 2 + 3 + 5 + 10 + 3 + 5 + 2 = 30
  sum fu   = -6 - 6 - 5 + 0 + 3 + 10 + 6 = -17 + 19 = 2
  sum fu^2 = 18 + 12 + 5 + 0 + 3 + 20 + 18 = 76

  MEAN
                     (  2  )
      x_bar = 105 +  ( --- ) x 30  =  105 + 2  =  107
                     ( 30  )

  VARIANCE
                        [  76      (  2  )^2 ]
      sigma^2 = 30^2  x [ ----  -  ( --- )   ]
                        [  30      ( 30  )   ]

              = 900 x [ 2.53333...  -  0.00444... ]

      Exactly:   900 x 76/30 = 30 x 76 = 2280
                 900 x (2/30)^2 = 900 x 4/900 = 4

      sigma^2 = 2280 - 4 = 2276

  STANDARD DEVIATION
      sigma = sqrt(2276)

         47^2   = 2209
         48^2   = 2304
         47.7^2 = 2275.29        (just under)
         47.71^2 = 2276.24       (just over)

      sigma ~= 47.70
```

**ANSWER: Mean = 107, Variance = 2276, Standard deviation = 47.70**

---

### Q C4 — Consistency comparison from two frequency tables
The number of goals scored by two football teams in 25 matches each is
given below. Which team is more consistent?

| Goals scored (x) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Team A (f) | 1 | 9 | 7 | 5 | 3 |
| Team B (f) | 5 | 4 | 6 | 5 | 5 |

**ANSWER:**

**TEAM A**
```
  +--------+--------+---------+-----------+
  |   x    |   f    |   f x   |   f x^2   |
  +--------+--------+---------+-----------+
  |    0   |    1   |     0   |      0    |
  |    1   |    9   |     9   |      9    |
  |    2   |    7   |    14   |     28    |
  |    3   |    5   |    15   |     45    |
  |    4   |    3   |    12   |     48    |
  +--------+--------+---------+-----------+
  | TOTAL  | N = 25 |    50   |    130    |
  +--------+--------+---------+-----------+

  mean = 50/25 = 2

  variance = 130/25 - 2^2 = 5.2 - 4 = 1.2

  S.D. = sqrt(1.2) = 1.0954...

                1.0954
  C.V.(A)  =  ---------- x 100  =  54.77 %
                   2
```

**TEAM B**
```
  +--------+--------+---------+-----------+
  |   x    |   f    |   f x   |   f x^2   |
  +--------+--------+---------+-----------+
  |    0   |    5   |     0   |      0    |
  |    1   |    4   |     4   |      4    |
  |    2   |    6   |    12   |     24    |
  |    3   |    5   |    15   |     45    |
  |    4   |    5   |    20   |     80    |
  +--------+--------+---------+-----------+
  | TOTAL  | N = 25 |    51   |    153    |
  +--------+--------+---------+-----------+

  mean = 51/25 = 2.04

  variance = 153/25 - (2.04)^2 = 6.12 - 4.1616 = 1.9584

  S.D. = sqrt(1.9584) = 1.3994...

                1.3994
  C.V.(B)  =  ---------- x 100  =  68.60 %
                 2.04
```

**CONCLUSION**
```
  +--------+---------+-----------+----------+-----------+
  |  TEAM  |  MEAN   | VARIANCE  |   S.D.   |    C.V.   |
  +--------+---------+-----------+----------+-----------+
  |    A   |  2.00   |   1.20    |   1.10   |  54.77 %  |
  |    B   |  2.04   |   1.96    |   1.40   |  68.60 %  |
  +--------+---------+-----------+----------+-----------+

  Since  C.V.(A) = 54.77 %  <  C.V.(B) = 68.60 % ,
```
**TEAM A is more consistent. Team B, although it scores a slightly
higher average, is far more variable.**

---

### Q C5 — Combined mean and combined standard deviation
The mean and standard deviation of 100 observations of one group are 50
and 5. For a second group of 150 observations the mean and standard
deviation are 40 and 6. Find the mean and standard deviation of all 250
observations taken together.

**ANSWER:**

```
  n1 = 100,  x1_bar = 50,  sigma1 = 5   ->  sigma1^2 = 25
  n2 = 150,  x2_bar = 40,  sigma2 = 6   ->  sigma2^2 = 36
```

**Step 1 — combined mean**
```
                n1 x1_bar + n2 x2_bar      100(50) + 150(40)
    x_bar  =   ----------------------- =  -------------------
                      n1 + n2                  100 + 150

                5000 + 6000       11000
           =   -------------  =  -------  =  44
                    250            250
```

**Step 2 — the gaps between each group mean and the combined mean**
```
    d1 = x1_bar - x_bar = 50 - 44 = +6    ->  d1^2 = 36
    d2 = x2_bar - x_bar = 40 - 44 = -4    ->  d2^2 = 16
```

**Step 3 — combined variance**
```
                n1( sigma1^2 + d1^2 ) + n2( sigma2^2 + d2^2 )
    sigma^2 =  ----------------------------------------------
                                n1 + n2

                100( 25 + 36 ) + 150( 36 + 16 )
            =  ---------------------------------
                             250

                100 x 61  +  150 x 52
            =  -----------------------
                         250

                6100  +  7800       13900
            =  ---------------  =  -------  =  55.6
                     250             250
```

**Step 4 — combined standard deviation**
```
    sigma = sqrt(55.6)

       7^2    = 49
       8^2    = 64
       7.4^2  = 54.76
       7.5^2  = 56.25
       7.46^2 = 55.6516        (very close)

    sigma ~= 7.46
```

**ANSWER: Combined mean = 44, combined variance = 55.6,
combined standard deviation = 7.46**

*Sanity check:* the combined S.D. (7.46) is larger than both individual
S.D.s (5 and 6). That is correct — merging two groups whose means are
10 apart adds extra spread. If your combined S.D. ever comes out smaller
than both group S.D.s, you have made an error.

---

### Q C6 — Mean deviation about the mean, continuous distribution (full)
Find the mean deviation about the mean for the following distribution,
and also find the coefficient of mean deviation.

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---|---|---|---|---|
| f | 5 | 8 | 15 | 16 | 6 |

**ANSWER:**

```
  +----------+--------+--------+---------+-------------+---------------+
  |  Class   |   f    |   x    |   f x   | | x - 27 |  | f | x - 27 |  |
  +----------+--------+--------+---------+-------------+---------------+
  |   0 - 10 |    5   |    5   |     25  |     22      |      110      |
  |  10 - 20 |    8   |   15   |    120  |     12      |       96      |
  |  20 - 30 |   15   |   25   |    375  |      2      |       30      |
  |  30 - 40 |   16   |   35   |    560  |      8      |      128      |
  |  40 - 50 |    6   |   45   |    270  |     18      |      108      |
  +----------+--------+--------+---------+-------------+---------------+
  |  TOTAL   | N = 50 |        |   1350  |             |      472      |
  +----------+--------+--------+---------+-------------+---------------+

  x_bar = 1350/50 = 27

  M.D.(x_bar) = 472/50 = 9.44

                                M.D.       9.44
  Coefficient of M.D.  =      --------- = ------- = 0.3496...
                                x_bar        27
```

For comparison, the variance and S.D. of the SAME data by the step
deviation method (`A = 25`, `h = 10`):

```
  +----------+--------+--------+-----------+---------+-----------+
  |  Class   |   f    |   x    |     u     |   f u   |   f u^2   |
  +----------+--------+--------+-----------+---------+-----------+
  |   0 - 10 |    5   |    5   |    -2     |   -10   |     20    |
  |  10 - 20 |    8   |   15   |    -1     |    -8   |      8    |
  |  20 - 30 |   15   |   25   |     0     |     0   |      0    |
  |  30 - 40 |   16   |   35   |     1     |    16   |     16    |
  |  40 - 50 |    6   |   45   |     2     |    12   |     24    |
  +----------+--------+--------+-----------+---------+-----------+
  |  TOTAL   | N = 50 |        |           |    10   |     68    |
  +----------+--------+--------+-----------+---------+-----------+

  MEAN     = 25 + (10/50) x 10 = 25 + 2 = 27      <-- matches the table above

  VARIANCE = 10^2 x [ 68/50 - (10/50)^2 ]
           = 100 x [ 1.36 - 0.04 ]
           = 100 x 1.32
           = 132

  S.D.     = sqrt(132) = 11.489...
```

**ANSWER: Mean = 27, M.D. about the mean = 9.44,
coefficient of M.D. = 0.35, Variance = 132, S.D. = 11.49**

*Sanity check:* `M.D. (9.44) < S.D. (11.49)`, and M.D. is roughly
(4/5) x S.D. = 9.19. Both are in the expected range.

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Marks | Chance of appearing |
|---|---|---|---|---|
| 1 | Variance and S.D. of a **continuous** distribution by the step deviation method | C | 7 | **Very high** |
| 2 | Compare consistency of two data sets using the **coefficient of variation** | C | 7 | **Very high** |
| 3 | Mean deviation about the mean for a **discrete or continuous** frequency table | B | 4 | **High** |
| 4 | Variance and S.D. of a **discrete** frequency table | B | 4 | **High** |
| 5 | Mean deviation about the **mean** of a short list of numbers | A | 2 | **High** |
| 6 | Mean deviation about the **median** of a short list of numbers | A | 2 | **High** |
| 7 | Variance / S.D. of a short list (5-10 numbers) | A | 2 | High |
| 8 | Mean deviation about the median for a frequency table | B | 4 | Medium |
| 9 | Find missing observations when mean and variance are given | B | 4 | Medium |
| 10 | Combined mean and combined variance of two groups | B or C | 4 or 7 | Medium |
| 11 | Variance of the first n natural numbers | A | 2 | Medium |
| 12 | C.V. given, find the mean (or vice versa) | A | 2 | Medium |
| 13 | Effect of adding / multiplying by a constant | A | 2 | Medium |
| 14 | Range and coefficient of range | A | 2 | Low-Medium |
| 15 | Correct the mean and S.D. after a wrongly recorded value | B | 4 | Low-Medium |
| 16 | "About which measure is M.D. least?" / "Best measure of dispersion?" | A | 2 | Low-Medium |

---

# THE HONEST STRATEGY FOR THIS CHAPTER

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  In Section C you choose 5 questions out of 7.                     |
  |  Q24 is almost always from this chapter, and it is almost always   |
  |  ONE OF ONLY TWO THINGS:                                           |
  |                                                                    |
  |     (a) step deviation variance / S.D. of a continuous table       |
  |     (b) coefficient of variation comparison of two data sets       |
  |                                                                    |
  |  If you can do those two questions, you have a guaranteed 7 marks  |
  |  in every single sitting of Maths IIA, forever.                    |
  |                                                                    |
  |  Add the Section B table question (4) and the Section A short-list |
  |  question (2) and this chapter alone gives you 13 marks.           |
  |                                                                    |
  |  You need 26 to pass.                                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```
