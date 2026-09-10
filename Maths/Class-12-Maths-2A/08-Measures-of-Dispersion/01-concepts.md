# Measures of Dispersion — Concepts, Explained From Zero

**Maths IIA · Chapter 8**

You do not need to have understood a single earlier chapter to do this one.
There is no algebra to manipulate, no identity to recall, no graph to draw.
There is one skill: **build a table, total the columns, divide.**

That is the whole chapter. Read that sentence again whenever you feel lost.

---

# TOPIC 1 — WHAT "DISPERSION" ACTUALLY MEANS

## The story that explains everything

Two shops sell mangoes. Both claim "average price Rs 50 per kg".

```
   SHOP A prices over 5 days :   48,  52,  49,  51,  50
   SHOP B prices over 5 days :   10,  90,  20,  80,  50

   Shop A :  sum = 48+52+49+51+50 = 250   ->  mean = 250/5 = 50
   Shop B :  sum = 10+90+20+80+50 = 250   ->  mean = 250/5 = 50
```

**Same mean. Totally different shops.**

If you walk into Shop A on any random day you will pay about Rs 50.
If you walk into Shop B you might pay Rs 10 or you might pay Rs 90.
Shop A is *consistent*. Shop B is *erratic*.

The mean is a single number that says **where the centre is**.
It says nothing at all about **how far the values wander from that centre**.

> **Dispersion (also called "scatter", "spread", or "variability") is a single
> number that measures how far the observations lie from the centre.**

```
       SMALL DISPERSION                    LARGE DISPERSION

            |                                   |
        * * * * *                        *      |      *
       -----+-----                    ---*------+------*---
            ^                            ^      ^      ^
          mean                                mean

     values huddle near               values scattered wide
     the mean                         of the mean
```

## Why we need it

| Situation | The mean alone | Dispersion tells you |
|---|---|---|
| Two batsmen, same average | looks identical | who you can rely on |
| Two machines, same average output | looks identical | which one is faulty |
| Two students, same average marks | looks identical | who is steady across subjects |
| Two share prices, same average | looks identical | which is the safer investment |

## The four measures in your syllabus

```
  +----------------------------------------------------------------------+
  |   MEASURE               WHAT IT MEASURES                  SYMBOL     |
  +----------------------------------------------------------------------+
  |   1. Range              the total width of the data       R          |
  |   2. Mean deviation     average distance from centre      M.D.       |
  |   3. Variance           average SQUARED distance          sigma^2    |
  |   4. Standard deviation square root of variance           sigma      |
  +----------------------------------------------------------------------+
  |   PLUS a comparison tool:                                            |
  |   5. Coefficient of variation   sigma/mean x 100          C.V.       |
  +----------------------------------------------------------------------+
```

Every one of the four is built the same way:

```
   STEP 1   find a centre  (mean, or median)
   STEP 2   measure how far each value is from that centre
   STEP 3   average those distances
```

Range is a shortcut that skips steps 1 and 3.
Mean deviation does step 2 with a modulus.
Variance does step 2 by squaring.
That is genuinely all the difference between them.

> **TRAP:** Students think dispersion is a new hard topic. It is not.
> If you can find an average, you can find every measure in this chapter.

---

# TOPIC 2 — THE THREE MEASURES OF CENTRAL TENDENCY (background you need)

You cannot measure distance from the centre until you can find the centre.
This section is background — but the **median for grouped data** is a formula
you will actually need in mean-deviation questions.

## 2.1 The MEAN (arithmetic average)

```
  +---------------------------------------------------------------+
  |   UNGROUPED  (a plain list of n numbers)                      |
  |                                                               |
  |               x1 + x2 + ... + xn        sum of x              |
  |     x_bar  =  --------------------  =   ----------            |
  |                       n                     n                 |
  +---------------------------------------------------------------+
  |   DISCRETE FREQUENCY  (values x with frequencies f)           |
  |                                                               |
  |               sum of (f x)                                    |
  |     x_bar  =  -------------      where  N = sum of f          |
  |                    N                                          |
  +---------------------------------------------------------------+
  |   CONTINUOUS  (class intervals)                               |
  |                                                               |
  |     First replace each class by its MIDPOINT                  |
  |                                                               |
  |               lower limit + upper limit                       |
  |         x  =  --------------------------                      |
  |                          2                                    |
  |                                                               |
  |     then use the same  sum(f x) / N                           |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 2.1 — mean of a list

Find the mean of 6, 7, 10, 12, 13, 4, 8, 12.

```
  sum = 6 + 7 + 10 + 12 + 13 + 4 + 8 + 12

      = 13 + 10 + 12 + 13 + 4 + 8 + 12
      = 72                                (add them in any order you like)

  n = 8

  x_bar = 72 / 8 = 9
```
**Mean = 9**

### WORKED EXAMPLE 2.2 — mean of a discrete frequency table

| x | 2 | 5 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|----|----|
| f | 2 | 8 | 10 | 7 | 8 | 5 |

```
  +--------+--------+-----------+
  |   x    |   f    |    f x    |
  +--------+--------+-----------+
  |    2   |    2   |      4    |
  |    5   |    8   |     40    |
  |    6   |   10   |     60    |
  |    8   |    7   |     56    |
  |   10   |    8   |     80    |
  |   12   |    5   |     60    |
  +--------+--------+-----------+
  | TOTAL  | N = 40 |    300    |
  +--------+--------+-----------+

  x_bar = 300 / 40 = 7.5
```
**Mean = 7.5**

## 2.2 The MEDIAN (the middle value)

The median is the value that sits exactly in the middle **after sorting**.
Half the data is below it, half above it.

```
  +---------------------------------------------------------------+
  |   UNGROUPED DATA — the two-case rule                          |
  |                                                               |
  |   STEP 1  Arrange the data in ASCENDING order. Always.        |
  |                                                               |
  |   STEP 2  If n is ODD   ->  Median = the ((n+1)/2)-th value   |
  |                                                               |
  |           If n is EVEN  ->  Median = average of the           |
  |                             (n/2)-th and (n/2 + 1)-th values  |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 2.3 — median, n odd

Find the median of 3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21.

```
  SORT:   3,  3,  4,  5,  7,  9,  10,  12,  18,  19,  21
  position 1   2   3   4   5   6    7    8    9   10   11

  n = 11  (odd)

  (n + 1)/2 = 12/2 = 6th value

  6th value = 9
```
**Median = 9**

### WORKED EXAMPLE 2.4 — median, n even

Find the median of 4, 7, 8, 9, 10, 12, 13, 17.

```
  Already sorted.   n = 8  (even)

  n/2 = 4th value      =  9
  n/2 + 1 = 5th value  = 10

  Median = (9 + 10)/2 = 19/2 = 9.5
```
**Median = 9.5**

> **TRAP:** Forgetting to sort. The median of 5, 1, 9 is **5**, not 1.
> Sorting takes ten seconds and saves the whole question.

### Median for a DISCRETE frequency distribution

```
  STEP 1  Make a CUMULATIVE FREQUENCY (cf) column - a running total of f.
  STEP 2  Find N = sum of f.
  STEP 3  Find N/2.
  STEP 4  Look down the cf column for the FIRST cf that is >= N/2.
          The x beside it is the median.
```

### WORKED EXAMPLE 2.5 — median of a discrete table

| x | 3 | 6 | 9 | 12 | 13 | 15 | 21 | 22 |
|---|---|---|---|----|----|----|----|----|
| f | 3 | 4 | 5 | 2 | 4 | 5 | 4 | 3 |

```
  +--------+--------+---------+
  |   x    |   f    |   c.f.  |
  +--------+--------+---------+
  |    3   |    3   |     3   |
  |    6   |    4   |     7   |
  |    9   |    5   |    12   |
  |   12   |    2   |    14   |
  |   13   |    4   |    18   |   <-- first cf that reaches 15
  |   15   |    5   |    23   |
  |   21   |    4   |    27   |
  |   22   |    3   |    30   |
  +--------+--------+---------+
  | TOTAL  | N = 30 |         |
  +--------+--------+---------+

  N = 30,  so N/2 = 15.

  We need the 15th and 16th observations (N is even).
  cf reaches 14 at x = 12, and reaches 18 at x = 13.
  So the 15th AND the 16th observations are both 13.

  Median = 13
```
**Median = 13**

### Median for a CONTINUOUS (grouped) frequency distribution

This one has a formula. Learn it — it is needed for mean deviation about
the median on grouped data.

```
  +---------------------------------------------------------------+
  |                                                               |
  |                     ( N/2  -  cf )                            |
  |     MEDIAN  =  l +  ( ----------- )  x  h                     |
  |                     (      f      )                           |
  |                                                               |
  |     l   = lower boundary of the MEDIAN CLASS                  |
  |     N   = total frequency (sum of f)                          |
  |     cf  = cumulative frequency of the class BEFORE            |
  |           the median class                                    |
  |     f   = frequency OF the median class                       |
  |     h   = class width of the median class                     |
  |                                                               |
  |     MEDIAN CLASS = the first class whose cf reaches N/2       |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 2.6 — median of grouped data

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 |
|---|---|---|---|---|---|---|
| f | 6 | 8 | 14 | 16 | 4 | 2 |

```
  +-----------+--------+---------+
  |   Class   |   f    |   c.f.  |
  +-----------+--------+---------+
  |    0-10   |    6   |     6   |
  |   10-20   |    8   |    14   |   <-- cf just BEFORE  => cf = 14
  |   20-30   |   14   |    28   |   <-- MEDIAN CLASS (first cf >= 25)
  |   30-40   |   16   |    44   |
  |   40-50   |    4   |    48   |
  |   50-60   |    2   |    50   |
  +-----------+--------+---------+
  |  TOTAL    | N = 50 |         |
  +-----------+--------+---------+

  N/2 = 50/2 = 25

  Median class = 20-30      so   l = 20,  f = 14,  cf = 14,  h = 10

                  ( 25 - 14 )
  Median = 20  +  ( -------- ) x 10
                  (    14    )

         = 20  +  (11/14) x 10

         = 20  +  110/14

         = 20  +  7.857...

         = 27.86      (2 decimal places)
```
**Median = 27.86**

Check it makes sense: 25 of the 50 observations should lie below 27.86.
Below 20 there are 14; the class 20-30 holds 14 spread evenly, so about
14 x (7.86/10) = 11 more. 14 + 11 = 25. Correct.

## 2.3 The MODE (the most frequent value)

```
  UNGROUPED / DISCRETE  ->  the value with the HIGHEST frequency.

  CONTINUOUS  ->                    ( f1  -  f0 )
                    MODE  =  l  +   ( ------------------- )  x  h
                                    ( 2 f1 - f0 - f2 )

                    l  = lower boundary of the MODAL class
                    f1 = frequency of the modal class (the biggest f)
                    f0 = frequency of the class BEFORE it
                    f2 = frequency of the class AFTER it
                    h  = class width
```

The mode is background only — dispersion is never measured about the mode
in your syllabus. Know what it is; do not spend time on it.

### The empirical relation (a 2-mark freebie)

```
  +--------------------------------------------+
  |     MODE  =  3 x MEDIAN  -  2 x MEAN       |
  +--------------------------------------------+
```

---

# TOPIC 3 — RANGE AND THE COEFFICIENT OF RANGE

## The idea

The crudest possible measure of spread: **how wide is the data?**

```
  +---------------------------------------------------------------+
  |                                                               |
  |     RANGE  =  L  -  S                                         |
  |                                                               |
  |            L = largest observation                            |
  |            S = smallest observation                           |
  |                                                               |
  |                                    L - S                      |
  |     COEFFICIENT OF RANGE  =    -----------                    |
  |                                    L + S                      |
  |                                                               |
  +---------------------------------------------------------------+
```

For a **continuous** distribution, use the upper boundary of the highest
class as L and the lower boundary of the lowest class as S.

### WORKED EXAMPLE 3.1

Find the range and coefficient of range of
38, 70, 48, 40, 42, 55, 63, 46, 54, 44.

```
  Largest  L = 70
  Smallest S = 38

  RANGE = 70 - 38 = 32

                            70 - 38      32
  COEFFICIENT OF RANGE  =  ---------  = -----  =  0.2963  ~=  0.30
                            70 + 38      108
```
**Range = 32, Coefficient of range = 0.30 (approx)**

### WORKED EXAMPLE 3.2 — grouped data

| Class | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---|---|---|---|
| f | 4 | 9 | 12 | 5 |

```
  L = 50   (upper boundary of the highest class)
  S = 10   (lower boundary of the lowest class)

  RANGE = 50 - 10 = 40

  COEFFICIENT = (50 - 10)/(50 + 10) = 40/60 = 0.667  ~=  0.67
```
**Range = 40, Coefficient of range = 0.67**

## Why range is a poor measure

```
   Set P :  10, 11, 12, 13, 14, 15, 16, 17, 18, 100
   Set Q :  10, 30, 50, 55, 60, 70, 80, 90, 95, 100

   BOTH have range = 100 - 10 = 90.

   But P is nine numbers packed tight plus one freak value,
   while Q is genuinely spread all over.
```

Range only looks at TWO numbers and ignores the other eight completely.
That is why we need mean deviation and standard deviation, which use
**every** observation.

> **TRAP:** The coefficient of range is a **ratio** — it has no units and no
> percent sign unless the question asks for one. Do not write "0.30 kg".

---

# TOPIC 4 — MEAN DEVIATION: THE IDEA AND WHY THE MODULUS MATTERS

## The natural first attempt (which fails)

To measure spread, the obvious idea is: find how far each value is from the
mean, then average those distances.

Try it on 2, 4, 6, 8, 10. The mean is 6.

```
  +-------+---------------+
  |   x   |   x - x_bar   |
  +-------+---------------+
  |   2   |      -4       |
  |   4   |      -2       |
  |   6   |       0       |
  |   8   |      +2       |
  |  10   |      +4       |
  +-------+---------------+
  | TOTAL |       0       |   <-- ZERO. Every single time.
  +-------+---------------+
```

The negatives cancel the positives exactly.

```
  +------------------------------------------------------------------+
  |   THE SUM OF DEVIATIONS FROM THE MEAN IS ALWAYS EXACTLY ZERO.    |
  |                                                                  |
  |          sum of (x - x_bar)  =  0    for ANY data set            |
  |                                                                  |
  |   Proof in one line:                                             |
  |      sum(x - x_bar) = sum x - n x_bar = sum x - n(sum x / n)     |
  |                     = sum x - sum x = 0                          |
  +------------------------------------------------------------------+
```

So a plain average of deviations is useless — it is always 0, for tightly
packed data and for wildly scattered data alike.

## The two ways out

```
                sum(x - x_bar) = 0   is a dead end
                          |
              +-----------+-----------+
              |                       |
     KILL THE SIGN with a       KILL THE SIGN by
     MODULUS  |x - x_bar|       SQUARING  (x - x_bar)^2
              |                       |
              v                       v
       MEAN DEVIATION            VARIANCE
```

Both work. The modulus route gives mean deviation (Topic 5).
The squaring route gives variance (Topic 8).

## Why the modulus signs matter so much

```
   WITHOUT modulus :  -4 + -2 + 0 + 2 + 4  =  0        useless
   WITH    modulus :   4 +  2 + 0 + 2 + 4  = 12        meaningful
                                             ---
                       M.D. = 12/5 = 2.4
```

"On average, the values sit 2.4 units away from the mean." That is a real,
usable statement about the data.

> **TRAP:** In the `|x - a|` column of your table, **a negative number can
> never appear.** If you write one, you have lost the marks for that row and
> your total will be wrong. Before you total the column, run your eye down it
> and confirm every entry is 0 or positive.

## What "modulus" does, concretely

```
   |  5 |  =  5          |  -5 |  =  5          |  0 |  =  0

   It simply throws away the minus sign. Distance is never negative.
   The distance from your house to school is the same as from school
   to your house.
```

---

# TOPIC 5 — MEAN DEVIATION FOR UNGROUPED (INDIVIDUAL) DATA

## The formulas

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   ABOUT THE MEAN                                                 |
  |                                                                  |
  |                     sum of | x - x_bar |                         |
  |     M.D.(x_bar)  =  ----------------------                       |
  |                              n                                   |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |   ABOUT THE MEDIAN                                               |
  |                                                                  |
  |                     sum of | x - M |                             |
  |     M.D.(M)  =  ------------------------                         |
  |                              n                                   |
  |                                                                  |
  |     where M = median                                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The fixed method (never changes)

```
   STEP 1   Find the centre.
              about mean   -> x_bar = (sum x)/n
              about median -> SORT the data, then take the middle
   STEP 2   Draw a 3-column table:      x  |  x - a  |  | x - a |
   STEP 3   Fill it row by row.
   STEP 4   Total the LAST column only.
   STEP 5   Divide that total by n.
```

## WORKED EXAMPLE 5.1 — M.D. about the MEAN

Find the mean deviation about the mean for
**6, 7, 10, 12, 13, 4, 8, 12**

**Step 1 — the mean**

```
  sum x = 6 + 7 + 10 + 12 + 13 + 4 + 8 + 12 = 72
  n = 8
  x_bar = 72/8 = 9
```

**Step 2 to 4 — the table**

```
  +-------+----------------+------------------+
  |   x   |   x - 9        |    | x - 9 |     |
  +-------+----------------+------------------+
  |    6  |      -3        |         3        |
  |    7  |      -2        |         2        |
  |   10  |      +1        |         1        |
  |   12  |      +3        |         3        |
  |   13  |      +4        |         4        |
  |    4  |      -5        |         5        |
  |    8  |      -1        |         1        |
  |   12  |      +3        |         3        |
  +-------+----------------+------------------+
  | 72    |       0        |        22        |
  +-------+----------------+------------------+
            ^                       ^
     always 0 - use this      this is what you need
     as a CHECK on your
     arithmetic
```

**Step 5**

```
                    22
  M.D.(x_bar)  =  ------  =  2.75
                     8
```
**Mean deviation about the mean = 2.75**

Notice the free self-check built into the table: the middle column must total
exactly 0. If it does not, you have made a subtraction error — fix it before
going on.

## WORKED EXAMPLE 5.2 — M.D. about the MEDIAN (n odd)

Find the mean deviation about the median for
**3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21**

**Step 1 — sort and find the median**

```
  SORT:   3,  3,  4,  5,  7,  9,  10,  12,  18,  19,  21
          1   2   3   4   5   6    7    8    9   10   11

  n = 11 (odd),  so median = ((11+1)/2)-th = 6th value = 9

  M = 9
```

**Step 2 to 4 — the table**

```
  +-------+----------------+------------------+
  |   x   |    x - 9       |    | x - 9 |     |
  +-------+----------------+------------------+
  |    3  |      -6        |         6        |
  |    3  |      -6        |         6        |
  |    4  |      -5        |         5        |
  |    5  |      -4        |         4        |
  |    7  |      -2        |         2        |
  |    9  |       0        |         0        |
  |   10  |      +1        |         1        |
  |   12  |      +3        |         3        |
  |   18  |      +9        |         9        |
  |   19  |     +10        |        10        |
  |   21  |     +12        |        12        |
  +-------+----------------+------------------+
  |       |                |        58        |
  +-------+----------------+------------------+

  Running the total:  6+6=12, +5=17, +4=21, +2=23, +0=23,
                      +1=24, +3=27, +9=36, +10=46, +12=58
```

**Step 5**

```
                 58
  M.D.(M)  =  ------  =  5.2727...  =  5.27   (2 d.p.)
                 11
```
**Mean deviation about the median = 5.27**

> **TRAP:** Here the middle column does **NOT** total zero (it totals +12).
> That zero-check only applies when you centre on the **mean**. Do not panic
> when it fails for the median.

## WORKED EXAMPLE 5.3 — M.D. about the MEDIAN (n even)

Find the mean deviation about the median for
**4, 7, 8, 9, 10, 12, 13, 17**

```
  Already sorted.  n = 8 (even)

  4th value = 9,  5th value = 10
  Median M = (9 + 10)/2 = 9.5

  +-------+------------------+
  |   x   |   | x - 9.5 |    |
  +-------+------------------+
  |    4  |        5.5       |
  |    7  |        2.5       |
  |    8  |        1.5       |
  |    9  |        0.5       |
  |   10  |        0.5       |
  |   12  |        2.5       |
  |   13  |        3.5       |
  |   17  |        7.5       |
  +-------+------------------+
  | TOTAL |       24.0       |
  +-------+------------------+

  Total check: 5.5+2.5 = 8.0, +1.5 = 9.5, +0.5 = 10.0, +0.5 = 10.5,
               +2.5 = 13.0, +3.5 = 16.5, +7.5 = 24.0

  M.D.(M) = 24/8 = 3
```
**Mean deviation about the median = 3**

## THE PROPERTY EXAMINERS ASK ABOUT

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   MEAN DEVIATION IS **LEAST** WHEN MEASURED ABOUT THE MEDIAN.    |
  |                                                                  |
  |   For any data set and any number a :                            |
  |                                                                  |
  |        sum |x - M|   <=   sum |x - a|                            |
  |                                                                  |
  |   The median is the point that minimises total absolute distance.|
  |                                                                  |
  +------------------------------------------------------------------+
```

### Seeing it happen

Take **4, 7, 8, 9, 10, 12, 13, 17** again. Sum = 80, so the mean is 80/8 = 10.
The median is 9.5.

```
  ABOUT THE MEAN (a = 10)              ABOUT THE MEDIAN (a = 9.5)
  +-------+-----------+                +-------+-------------+
  |   x   | | x - 10 ||                |   x   | | x - 9.5 | |
  +-------+-----------+                +-------+-------------+
  |    4  |     6     |                |    4  |     5.5     |
  |    7  |     3     |                |    7  |     2.5     |
  |    8  |     2     |                |    8  |     1.5     |
  |    9  |     1     |                |    9  |     0.5     |
  |   10  |     0     |                |   10  |     0.5     |
  |   12  |     2     |                |   12  |     2.5     |
  |   13  |     3     |                |   13  |     3.5     |
  |   17  |     7     |                |   17  |     7.5     |
  +-------+-----------+                +-------+-------------+
  | TOTAL |    24     |                | TOTAL |    24.0     |
  +-------+-----------+                +-------+-------------+

  M.D. about mean   = 24/8 = 3
  M.D. about median = 24/8 = 3        <-- equal here (a tie is allowed)
```

Now shift the centre away from the median, say to a = 12:

```
  | x - 12 | :  8, 5, 4, 3, 2, 0, 1, 5   ->  total = 28   ->  28/8 = 3.5
```

3.5 is **bigger** than 3. Move the centre anywhere away from the median and
the total absolute distance grows. The median sits at the bottom of the valley.

> **The exam version of this fact:** "About which measure of central tendency
> is the mean deviation least?" **ANSWER: the median.** Two marks, ten seconds.

## THE COEFFICIENT OF MEAN DEVIATION

Mean deviation carries units (rupees, kg, marks). To compare two data sets
with different units or very different sizes, you strip the units off by
dividing by the centre you used.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                                        M.D. about the mean       |
  |   COEFFICIENT OF M.D. (about mean)  =  ---------------------     |
  |                                              mean                |
  |                                                                  |
  |                                        M.D. about the median     |
  |   COEFFICIENT OF M.D. (about median)= ---------------------      |
  |                                             median               |
  |                                                                  |
  |   It has NO UNITS. Multiply by 100 if a percentage is wanted.    |
  |                                                                  |
  +------------------------------------------------------------------+
```

### WORKED EXAMPLE 5.4

For 6, 7, 10, 12, 13, 4, 8, 12 we found mean = 9 and M.D. about mean = 2.75.

```
  Coefficient of M.D. = 2.75 / 9 = 0.3056  ~=  0.31

  As a percentage: 0.3056 x 100 = 30.56 %
```
**Coefficient of mean deviation = 0.31 (about 30.56%)**

---

# TOPIC 6 — MEAN DEVIATION FOR A DISCRETE FREQUENCY DISTRIBUTION

## What "discrete frequency" means

Instead of listing the value 5 eight separate times, the data is compressed:

```
   RAW LIST :   5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, ...

   COMPRESSED:   x  |  5  |  6  | ...
                 f  |  8  |  3  | ...
```

`f` is just "how many times this value occurs". Nothing more.
Everything you do gets multiplied by `f` because that value counts `f` times.

## The formulas

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     N  =  sum of f          (the total number of observations)   |
  |                                                                  |
  |               sum of ( f x )                                     |
  |     x_bar  =  ---------------                                    |
  |                     N                                            |
  |                                                                  |
  |                     sum of  f | x - x_bar |                      |
  |     M.D.(x_bar)  =  ------------------------                     |
  |                              N                                   |
  |                                                                  |
  |                     sum of  f | x - M |                          |
  |     M.D.(M)      =  --------------------                         |
  |                              N                                   |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The fixed method

```
   STEP 1   Column f x. Total it. Total the f column to get N.
   STEP 2   x_bar = sum(fx) / N        [or find the median via a cf column]
   STEP 3   Column | x - a |           (a = mean or median)
   STEP 4   Column f | x - a |         (multiply the previous column by f)
   STEP 5   Total the last column, divide by N.
```

Five columns: `x | f | fx | |x-a| | f|x-a|`. Always the same five.

## WORKED EXAMPLE 6.1 — M.D. about the MEAN, discrete data

Find the mean deviation about the mean for:

| x | 2 | 5 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|----|----|
| f | 2 | 8 | 10 | 7 | 8 | 5 |

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
```

**Working shown in full**

```
  N = 2 + 8 + 10 + 7 + 8 + 5 = 40

  sum(fx) = 4 + 40 + 60 + 56 + 80 + 60
          = 44 + 60 + 56 + 80 + 60
          = 300

  x_bar = 300 / 40 = 7.5

  Last column total:  11.0 + 20.0 = 31.0
                      31.0 + 15.0 = 46.0
                      46.0 +  3.5 = 49.5
                      49.5 + 20.0 = 69.5
                      69.5 + 22.5 = 92.0

                    92
  M.D.(x_bar)  =  ------  =  2.3
                    40
```
**Mean = 7.5, Mean deviation about the mean = 2.3**

## WORKED EXAMPLE 6.2 — M.D. about the MEDIAN, discrete data

Find the mean deviation about the median for:

| x | 3 | 6 | 9 | 12 | 13 | 15 | 21 | 22 |
|---|---|---|---|----|----|----|----|----|
| f | 3 | 4 | 5 | 2 | 4 | 5 | 4 | 3 |

**Step 1 — find the median using a cumulative frequency column**

```
  +--------+--------+---------+
  |   x    |   f    |   c.f.  |
  +--------+--------+---------+
  |    3   |    3   |     3   |
  |    6   |    4   |     7   |
  |    9   |    5   |    12   |
  |   12   |    2   |    14   |
  |   13   |    4   |    18   |  <-- 15th and 16th values are both here
  |   15   |    5   |    23   |
  |   21   |    4   |    27   |
  |   22   |    3   |    30   |
  +--------+--------+---------+
  |        | N = 30 |         |
  +--------+--------+---------+

  N = 30 (even).  We need the 15th and 16th observations.
  cf = 14 at x = 12 (so observations 13 and 14 are 12).
  cf = 18 at x = 13 (so observations 15, 16, 17, 18 are all 13).

  15th value = 13,  16th value = 13
  Median M = (13 + 13)/2 = 13
```

**Step 2 — the deviation table**

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

  Running total:  30+28 = 58, +20 = 78, +2 = 80, +0 = 80,
                  +10 = 90, +32 = 122, +27 = 149

               149
  M.D.(M)  =  -----  =  4.9666...  =  4.97   (2 d.p.)
                30
```
**Median = 13, Mean deviation about the median = 4.97**

> **TRAP:** Students multiply `f` by `x` in the last column instead of by
> `|x - M|`. Label your columns. Every year marks are lost to unlabelled tables.

---

# TOPIC 7 — MEAN DEVIATION FOR A CONTINUOUS FREQUENCY DISTRIBUTION

## The one new idea: the MIDPOINT

Continuous data does not give you individual values — it gives you class
intervals like `20 - 30`. You do not know whether a value was 21 or 29.

**Assumption:** every observation in a class sits at the centre of that class.

```
  +---------------------------------------------------------------+
  |                       lower limit  +  upper limit             |
  |     MIDPOINT   x  =  -----------------------------            |
  |                                  2                            |
  |                                                               |
  |     Class 20-30  ->  x = (20 + 30)/2 = 25                     |
  |     Class 0-10   ->  x = (0 + 10)/2  =  5                     |
  |     Class 45-55  ->  x = (45 + 55)/2 = 50                     |
  +---------------------------------------------------------------+
```

Once you have the midpoint column, **the problem is identical to Topic 6.**
Nothing else changes at all.

```
     CONTINUOUS DATA           add midpoint             DISCRETE DATA
     (class intervals)   ---------------------->   (values + frequencies)
                          x = (l + u)/2
```

## The fixed method

```
   STEP 1   Midpoint column  x = (lower + upper)/2
   STEP 2   Column f x, total it.  Total f to get N.
   STEP 3   x_bar = sum(fx)/N     [or the median via the grouped formula]
   STEP 4   Column | x - a |
   STEP 5   Column f | x - a |, total it
   STEP 6   Divide by N.
```

Six columns: `class | f | x | fx | |x-a| | f|x-a|`.

## WORKED EXAMPLE 7.1 — M.D. about the MEAN, continuous data

Find the mean deviation about the mean:

| Class | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 |
|---|---|---|---|---|---|---|---|
| f | 2 | 3 | 8 | 14 | 8 | 3 | 2 |

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
```

**Working shown in full**

```
  N = 2 + 3 + 8 + 14 + 8 + 3 + 2 = 40

  sum(fx) = 30 + 75 + 280 + 630 + 440 + 195 + 150
          = 105 + 280 + 630 + 440 + 195 + 150
          = 385 + 630 + 440 + 195 + 150
          = 1015 + 440 + 195 + 150
          = 1455 + 195 + 150
          = 1650 + 150
          = 1800

  x_bar = 1800 / 40 = 45

  Last column: 60 + 60 + 80 + 0 + 80 + 60 + 60 = 400

                    400
  M.D.(x_bar)  =  -------  =  10
                     40
```
**Mean = 45, Mean deviation about the mean = 10**

(This distribution is perfectly symmetric about 45, which is why the answer
comes out so clean. Do not expect that every time.)

## WORKED EXAMPLE 7.2 — M.D. about the MEDIAN, continuous data

Find the mean deviation about the median:

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 |
|---|---|---|---|---|---|---|
| f | 6 | 8 | 14 | 16 | 4 | 2 |

**Step 1 — the median (we computed this in Worked Example 2.6)**

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

  N/2 = 25.  Median class = 20-30.  l = 20, f = 14, cf = 14, h = 10

  Median = 20 + [(25 - 14)/14] x 10 = 20 + 110/14 = 20 + 7.857 = 27.86
```

**Step 2 — the deviation table (M = 27.86)**

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

  Running total: 137.16 + 102.88 = 240.04
                 240.04 +  40.04 = 280.08
                 280.08 + 114.24 = 394.32
                 394.32 +  68.56 = 462.88
                 462.88 +  54.28 = 517.16

               517.16
  M.D.(M)  =  --------  =  10.3432  ~=  10.34
                 50
```
**Median = 27.86, Mean deviation about the median = 10.34**

> **TRAP:** With a decimal median like 27.86 the arithmetic is ugly. Keep two
> decimal places throughout — do not round to 28 early, and do not carry six
> decimals either. Two is the exam convention.

## Summary of all six mean-deviation cases

| Data type | Centre | Formula | Extra column needed |
|---|---|---|---|
| Ungrouped | mean | `sum|x - x_bar| / n` | none |
| Ungrouped | median | `sum|x - M| / n` | sort first |
| Discrete | mean | `sum f|x - x_bar| / N` | `fx` |
| Discrete | median | `sum f|x - M| / N` | `cf` |
| Continuous | mean | `sum f|x - x_bar| / N` | midpoint `x`, then `fx` |
| Continuous | median | `sum f|x - M| / N` | midpoint `x`, then `cf` |

**One method. Six wrappers. That is the whole of mean deviation.**

---

# TOPIC 8 — VARIANCE AND STANDARD DEVIATION: THE IDEA

## Why we need a second measure

Mean deviation works, but the modulus is awkward: you cannot do algebra with
`|x|` easily, and it treats a value 10 units away as merely twice as bad as
one 5 units away.

**Squaring** is the alternative way to kill the minus signs. It is smoother
algebraically, and it punishes big deviations harder — which is usually what
you want, because a wild outlier really is worse than a small wobble.

```
   deviation :   1    2    3    4    5   10
   squared   :   1    4    9   16   25  100
                                          ^
                       a deviation of 10 is treated as 100 times
                       as bad as a deviation of 1
```

## The definitions

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   VARIANCE  =  the mean of the squared deviations                |
  |                                                                  |
  |                    sum of ( x - x_bar )^2                        |
  |     sigma^2  =  -----------------------------                    |
  |                              n                                   |
  |                                                                  |
  |                                                                  |
  |   STANDARD DEVIATION  =  the positive square root of variance    |
  |                                                                  |
  |     sigma  =  sqrt( variance )                                   |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Why we then take the square root

Suppose the data is in **kilograms**.

```
   x - x_bar     is in kg
   (x - x_bar)^2 is in kg^2         <- variance has SQUARED units. Odd.
   sqrt of that  is in kg           <- standard deviation matches the data
```

So we compute the variance (nice algebra) and report the standard deviation
(sensible units). Both are asked for in exams — always give both.

```
  +--------------------------+--------------------------+
  |  VARIANCE  sigma^2       |  STD DEVIATION  sigma    |
  +--------------------------+--------------------------+
  |  units are SQUARED       |  units MATCH the data    |
  |  always >= 0             |  always >= 0             |
  |  easy to compute with    |  easy to interpret       |
  |  = (S.D.)^2              |  = sqrt(variance)        |
  +--------------------------+--------------------------+
```

> **TRAP:** Variance can never be negative — it is an average of squares.
> If you get a negative variance, there is an arithmetic error. Find it.

---

# TOPIC 9 — VARIANCE AND S.D. FOR UNGROUPED DATA

## The two formulas

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   DIRECT FORMULA (use when the mean is a whole number)           |
  |                                                                  |
  |                  sum ( x - x_bar )^2                             |
  |     sigma^2  =  -----------------------                          |
  |                          n                                       |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |   SHORTCUT FORMULA (use when the mean is a decimal)              |
  |                                                                  |
  |                  sum ( x^2 )                                     |
  |     sigma^2  =  -------------  -  ( x_bar )^2                    |
  |                       n                                          |
  |                                                                  |
  |     in words:  "mean of the squares  minus  square of the mean"  |
  |                                                                  |
  +------------------------------------------------------------------+
```

**Both give exactly the same answer.** They are the same formula rearranged:

```
   sum(x - x_bar)^2     sum(x^2 - 2 x x_bar + x_bar^2)
   ----------------  =  -------------------------------
          n                          n

                       sum x^2       2 x_bar sum x     n x_bar^2
                    =  --------  -   -------------  +  ---------
                          n                n               n

                       sum x^2
                    =  --------  -  2 x_bar (x_bar)  +  x_bar^2
                          n

                       sum x^2
                    =  --------  -  x_bar^2
                          n
```

## Which one to use

```
   +--------------------------------------------------------------+
   |  Is the mean a nice whole number?                            |
   |          |                            |                      |
   |         YES                          NO                      |
   |          |                            |                      |
   |    DIRECT formula            SHORTCUT formula                |
   |    (deviations are           (you never have to subtract     |
   |     whole numbers)            an ugly decimal from anything) |
   +--------------------------------------------------------------+
```

## WORKED EXAMPLE 9.1 — direct formula

Find the variance and standard deviation of
**6, 7, 10, 12, 13, 4, 8, 12**

```
  sum x = 72,  n = 8,  x_bar = 72/8 = 9      (a whole number - use DIRECT)

  +-------+--------------+-------------------+
  |   x   |   x - 9      |   ( x - 9 )^2     |
  +-------+--------------+-------------------+
  |    6  |     -3       |         9         |
  |    7  |     -2       |         4         |
  |   10  |     +1       |         1         |
  |   12  |     +3       |         9         |
  |   13  |     +4       |        16         |
  |    4  |     -5       |        25         |
  |    8  |     -1       |         1         |
  |   12  |     +3       |         9         |
  +-------+--------------+-------------------+
  |  72   |      0       |        74         |
  +-------+--------------+-------------------+
                 ^
        CHECK: must be zero

  Running total of squares: 9+4 = 13, +1 = 14, +9 = 23, +16 = 39,
                            +25 = 64, +1 = 65, +9 = 74

                74
  VARIANCE  =  ----  =  9.25
                 8

  S.D.  =  sqrt(9.25)  =  3.0414...  ~=  3.04
```
**Variance = 9.25, Standard deviation = 3.04**

## WORKED EXAMPLE 9.2 — the SAME data by the shortcut formula

```
  +-------+-----------+
  |   x   |   x^2     |
  +-------+-----------+
  |    6  |     36    |
  |    7  |     49    |
  |   10  |    100    |
  |   12  |    144    |
  |   13  |    169    |
  |    4  |     16    |
  |    8  |     64    |
  |   12  |    144    |
  +-------+-----------+
  |  72   |    722    |
  +-------+-----------+

  Running total: 36+49 = 85, +100 = 185, +144 = 329, +169 = 498,
                 +16 = 514, +64 = 578, +144 = 722

               sum x^2                722
  VARIANCE =  --------- - (x_bar)^2 = ----- - 9^2  =  90.25 - 81  =  9.25
                  n                     8

  S.D. = sqrt(9.25) = 3.04
```

**Identical answer — 9.25. The two formulas always agree.**
Use this as a self-check in the exam if you have spare time.

## WORKED EXAMPLE 9.3 — when the mean is ugly, the shortcut saves you

Find the variance of **5, 12, 3, 18, 6, 8, 2, 10**

```
  sum x = 5+12+3+18+6+8+2+10 = 64
  n = 8
  x_bar = 64/8 = 8         (still whole here, but let's show the shortcut)

  +-------+-----------+
  |   x   |   x^2     |
  +-------+-----------+
  |    5  |     25    |
  |   12  |    144    |
  |    3  |      9    |
  |   18  |    324    |
  |    6  |     36    |
  |    8  |     64    |
  |    2  |      4    |
  |   10  |    100    |
  +-------+-----------+
  |  64   |    706    |
  +-------+-----------+

  Running: 25+144 = 169, +9 = 178, +324 = 502, +36 = 538,
           +64 = 602, +4 = 606, +100 = 706

              706
  VARIANCE = ----- - 8^2 = 88.25 - 64 = 24.25
               8

  S.D. = sqrt(24.25) = 4.9244... ~= 4.92
```

Verify by the direct route: deviations from 8 are
-3, 4, -5, 10, -2, 0, -6, 2 (sum = 0, good).
Squares: 9, 16, 25, 100, 4, 0, 36, 4 = 194.
`194/8 = 24.25`. **Matches.**

**Variance = 24.25, S.D. = 4.92**

> **TRAP:** `sum(x^2)` is **not** `(sum x)^2`.
> Here `sum(x^2) = 706` but `(sum x)^2 = 64^2 = 4096`. Completely different.
> Square each value FIRST, then add.

---

# TOPIC 10 — VARIANCE AND S.D. FOR A DISCRETE FREQUENCY DISTRIBUTION

## The formulas

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     N = sum f            x_bar = sum(f x) / N                    |
  |                                                                  |
  |   DIRECT                                                         |
  |                  sum f ( x - x_bar )^2                           |
  |     sigma^2  =  -------------------------                        |
  |                             N                                    |
  |                                                                  |
  |   SHORTCUT                                                       |
  |                  sum ( f x^2 )                                   |
  |     sigma^2  =  ---------------  -  ( x_bar )^2                  |
  |                        N                                         |
  |                                                                  |
  |   S.D. = sqrt( sigma^2 )                                         |
  |                                                                  |
  +------------------------------------------------------------------+
```

## WORKED EXAMPLE 10.1 — direct method

Find the variance and standard deviation:

| x | 4 | 8 | 11 | 17 | 20 | 24 | 32 |
|---|---|---|----|----|----|----|----|
| f | 3 | 5 | 9 | 5 | 4 | 3 | 1 |

```
  +--------+--------+---------+-------------+----------------+-------------------+
  |   x    |   f    |   f x   |  x - 14     |  ( x - 14 )^2  |  f ( x - 14 )^2   |
  +--------+--------+---------+-------------+----------------+-------------------+
  |    4   |    3   |    12   |    -10      |      100       |        300        |
  |    8   |    5   |    40   |     -6      |       36       |        180        |
  |   11   |    9   |    99   |     -3      |        9       |         81        |
  |   17   |    5   |    85   |     +3      |        9       |         45        |
  |   20   |    4   |    80   |     +6      |       36       |        144        |
  |   24   |    3   |    72   |    +10      |      100       |        300        |
  |   32   |    1   |    32   |    +18      |      324       |        324        |
  +--------+--------+---------+-------------+----------------+-------------------+
  | TOTAL  | N = 30 |   420   |             |                |       1374        |
  +--------+--------+---------+-------------+----------------+-------------------+
```

**Full working**

```
  N = 3 + 5 + 9 + 5 + 4 + 3 + 1 = 30

  sum(fx) = 12 + 40 + 99 + 85 + 80 + 72 + 32
          = 52 + 99 + 85 + 80 + 72 + 32
          = 151 + 85 + 80 + 72 + 32
          = 236 + 80 + 72 + 32
          = 316 + 72 + 32
          = 388 + 32
          = 420

  x_bar = 420/30 = 14

  Last column: 300 + 180 = 480, +81 = 561, +45 = 606,
               +144 = 750, +300 = 1050, +324 = 1374

               1374
  VARIANCE =  ------  =  45.8
                 30

  S.D. = sqrt(45.8) = 6.7676... ~= 6.77
```
**Mean = 14, Variance = 45.8, Standard deviation = 6.77**

## WORKED EXAMPLE 10.2 — the same idea, shortcut method

| x | 10 | 30 | 50 | 70 | 90 |
|---|----|----|----|----|----|
| f | 4 | 24 | 28 | 16 | 8 |

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

  N = 4 + 24 + 28 + 16 + 8 = 80

  sum(fx) = 40 + 720 + 1400 + 1120 + 720 = 4000
            (40+720 = 760, +1400 = 2160, +1120 = 3280, +720 = 4000)

  x_bar = 4000/80 = 50

  sum(f x^2) = 400 + 21600 + 70000 + 78400 + 64800
             = 22000 + 70000 + 78400 + 64800
             = 92000 + 78400 + 64800
             = 170400 + 64800
             = 235200

               235200
  VARIANCE =  --------  -  50^2  =  2940  -  2500  =  440
                  80

  S.D. = sqrt(440) = 20.976... ~= 20.98
```

Verify directly: deviations from 50 are -40, -20, 0, 20, 40;
squares 1600, 400, 0, 400, 1600;
`f x` squares: 6400, 9600, 0, 6400, 12800 -> total 35200;
`35200/80 = 440`. **Matches.**

**Mean = 50, Variance = 440, Standard deviation = 20.98**

---

# TOPIC 11 — VARIANCE AND S.D. FOR CONTINUOUS DATA (THE STEP DEVIATION METHOD)

**This is the 7-mark question. Learn this section better than any other.**

## The problem with big numbers

Look at the numbers in Worked Example 10.2: 235200. Now imagine class
midpoints of 355, 365, 375 and frequencies in the twenties. You would be
squaring five-figure numbers by hand under exam pressure. You will slip.

**The step deviation method makes all the numbers tiny.**

## The trick, in plain language

```
   Instead of working with midpoints  35, 45, 55, 65, 75, 85, 95

   pick a middle one as the ASSUMED MEAN,  A = 65,
   subtract it,                            -30, -20, -10, 0, 10, 20, 30
   and divide by the class width h = 10:    -3,  -2,  -1, 0,  1,  2,  3

   You are now multiplying and squaring numbers between -3 and +3.
   No calculator needed. Almost impossible to get wrong.
```

At the end you undo the shift and the scaling, which is what the `h` and the
`+ A` in the formulas do.

## The formulas

```
  +------------------------------------------------------------------+
  |                                                                  |
  |             x - A                                                |
  |     u  =  ---------      A = assumed mean (a convenient midpoint)|
  |               h          h = COMMON class width                  |
  |                                                                  |
  |                                                                  |
  |                        ( sum f u )                               |
  |     MEAN   x_bar = A + ( -------- )  x  h                        |
  |                        (    N     )                              |
  |                                                                  |
  |                                                                  |
  |                       [  sum f u^2       ( sum f u )^2  ]        |
  |     VARIANCE = h^2 x  [ -----------  -   ( -------- )   ]        |
  |                       [      N           (    N     )   ]        |
  |                                                                  |
  |                                                                  |
  |     S.D. = sqrt( VARIANCE )                                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The fixed method — memorise these six columns

```
   +---------+-----+-----+-----+------+-------+
   |  CLASS  |  f  |  x  |  u  |  fu  |  fu^2 |
   +---------+-----+-----+-----+------+-------+

   STEP 1  x    = midpoint = (lower + upper)/2
   STEP 2  A    = the midpoint nearest the centre of the table
           h    = class width (upper - lower of any class)
   STEP 3  u    = (x - A)/h        -> should be ..., -2, -1, 0, 1, 2, ...
   STEP 4  fu   = f times u        -> can be negative
   STEP 5  fu^2 = fu times u       -> ALWAYS positive or zero
   STEP 6  Total  f (= N),  fu,  fu^2
   STEP 7  Put the totals into the two boxed formulas.
```

> **SPEED TIP:** compute `fu^2` as `fu x u`, not as `f x u^2`.
> You already have `fu` sitting in the previous column — one multiplication
> instead of two.

## WORKED EXAMPLE 11.1 — the full 7-mark question

Find the mean, variance and standard deviation of the following distribution:

| Class | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 | 80-90 | 90-100 |
|---|---|---|---|---|---|---|---|
| f | 3 | 7 | 12 | 15 | 8 | 3 | 2 |

**Set up:** class width `h = 10`. Midpoints are 35, 45, 55, 65, 75, 85, 95.
Take the assumed mean `A = 65` (the middle midpoint).

```
  +------------+--------+--------+---------+-----------+-------------+
  |   CLASS    |   f    |   x    |    u    |    f u    |    f u^2    |
  |            |        |        |(x-65)/10|           |             |
  +------------+--------+--------+---------+-----------+-------------+
  |   30 - 40  |    3   |   35   |   -3    |     -9    |      27     |
  |   40 - 50  |    7   |   45   |   -2    |    -14    |      28     |
  |   50 - 60  |   12   |   55   |   -1    |    -12    |      12     |
  |   60 - 70  |   15   |   65   |    0    |      0    |       0     |
  |   70 - 80  |    8   |   75   |    1    |      8    |       8     |
  |   80 - 90  |    3   |   85   |    2    |      6    |      12     |
  |  90 - 100  |    2   |   95   |    3    |      6    |      18     |
  +------------+--------+--------+---------+-----------+-------------+
  |   TOTAL    | N = 50 |        |         |    -15    |     105     |
  +------------+--------+--------+---------+-----------+-------------+
```

**Every total shown**

```
  N = 3 + 7 + 12 + 15 + 8 + 3 + 2 = 50

  sum(fu)   = (-9) + (-14) + (-12) + 0 + 8 + 6 + 6
            = -35 (the negatives) + 20 (the positives)
            = -15

  sum(fu^2) = 27 + 28 + 12 + 0 + 8 + 12 + 18
            = 55 + 12 + 0 + 8 + 12 + 18
            = 67 + 8 + 12 + 18
            = 75 + 12 + 18
            = 87 + 18
            = 105
```

**The mean**

```
                    ( -15 )
  x_bar  =  65  +   ( ---- )  x  10
                    (  50  )

         =  65  +  ( -0.3 ) x 10

         =  65  -  3

         =  62
```

**The variance**

```
                     [  105       ( -15 )^2 ]
  VARIANCE  =  10^2 x[ ------  -  ( ---- )  ]
                     [   50       (  50 )   ]

            =  100 x [ 2.1  -  ( -0.3 )^2 ]

            =  100 x [ 2.1  -  0.09 ]

            =  100 x  2.01

            =  201
```

**The standard deviation**

```
  S.D. = sqrt(201)

  14^2 = 196     15^2 = 225      so the answer is between 14 and 15
  14.1^2 = 198.81
  14.2^2 = 201.64      slightly too big
  14.18^2 = 201.07     very close

  S.D. ~= 14.18
```

**ANSWER: Mean = 62, Variance = 201, Standard deviation = 14.18**

## WORKED EXAMPLE 11.2 — a second one, with a positive sum(fu)

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---|---|---|---|---|
| f | 5 | 8 | 15 | 16 | 6 |

`h = 10`, midpoints 5, 15, 25, 35, 45, take `A = 25`.

```
  +------------+--------+--------+---------+-----------+-------------+
  |   CLASS    |   f    |   x    |    u    |    f u    |    f u^2    |
  |            |        |        |(x-25)/10|           |             |
  +------------+--------+--------+---------+-----------+-------------+
  |    0 - 10  |    5   |    5   |   -2    |    -10    |      20     |
  |   10 - 20  |    8   |   15   |   -1    |     -8    |       8     |
  |   20 - 30  |   15   |   25   |    0    |      0    |       0     |
  |   30 - 40  |   16   |   35   |    1    |     16    |      16     |
  |   40 - 50  |    6   |   45   |    2    |     12    |      24     |
  +------------+--------+--------+---------+-----------+-------------+
  |   TOTAL    | N = 50 |        |         |     10    |      68     |
  +------------+--------+--------+---------+-----------+-------------+

  sum(fu)   = -10 - 8 + 0 + 16 + 12  =  -18 + 28  =  10
  sum(fu^2) =  20 + 8 + 0 + 16 + 24  =  68

  MEAN     = 25 + (10/50) x 10 = 25 + 0.2 x 10 = 25 + 2 = 27

  VARIANCE = 10^2 x [ 68/50 - (10/50)^2 ]
           = 100 x [ 1.36 - (0.2)^2 ]
           = 100 x [ 1.36 - 0.04 ]
           = 100 x 1.32
           = 132

  S.D. = sqrt(132) = 11.489... ~= 11.49
```

**Verification by the direct method** (worth doing once so you trust the formula):

```
  +------------+--------+--------+-------------+----------------+------------------+
  |   CLASS    |   f    |   x    |   x - 27    |  ( x - 27 )^2  |  f ( x - 27 )^2  |
  +------------+--------+--------+-------------+----------------+------------------+
  |    0 - 10  |    5   |    5   |    -22      |       484      |       2420       |
  |   10 - 20  |    8   |   15   |    -12      |       144      |       1152       |
  |   20 - 30  |   15   |   25   |     -2      |         4      |         60       |
  |   30 - 40  |   16   |   35   |     +8      |        64      |       1024       |
  |   40 - 50  |    6   |   45   |    +18      |       324      |       1944       |
  +------------+--------+--------+-------------+----------------+------------------+
  |   TOTAL    | N = 50 |        |             |                |       6600       |
  +------------+--------+--------+-------------+----------------+------------------+

  2420 + 1152 = 3572, +60 = 3632, +1024 = 4656, +1944 = 6600

  VARIANCE = 6600/50 = 132       <-- SAME ANSWER. The formula is safe.
```

**ANSWER: Mean = 27, Variance = 132, Standard deviation = 11.49**

Look at the two tables. The step-deviation table used numbers up to 24.
The direct table used numbers up to 2420. In an exam, under time pressure,
which one are you less likely to fumble?

> **TRAP 1:** Forgetting the `h^2` in front of the variance. Without it you
> would report 1.32 instead of 132 — a hundred times too small.
>
> **TRAP 2:** Step deviation needs a **common class width**. If the classes are
> 0-10, 10-30, 30-60 (widths 10, 20, 30), you **cannot** use it. Fall back to
> the direct or the shortcut method.
>
> **TRAP 3:** `sum(fu)` is often negative. Its **square** is positive. Writing
> `-(0.3)^2 = -0.09` and then subtracting again gives the wrong variance.

## Which method for which situation

```
  +-----------------------------------+-------------------------------+
  |  SITUATION                        |  METHOD                       |
  +-----------------------------------+-------------------------------+
  |  Short list, whole-number mean    |  DIRECT                       |
  |  Short list, decimal mean         |  SHORTCUT sum(x^2)/n - mean^2 |
  |  Discrete table, whole-number mean|  DIRECT with f column         |
  |  Discrete table, decimal mean     |  SHORTCUT with f x^2 column   |
  |  Continuous, EQUAL class widths   |  STEP DEVIATION  <-- always   |
  |  Continuous, UNEQUAL class widths |  SHORTCUT with f x^2 column   |
  +-----------------------------------+-------------------------------+
```

---

# TOPIC 12 — SPECIAL RESULTS YOU CAN QUOTE

## 12.1 The first n natural numbers

```
  +------------------------------------------------------------------+
  |   For the data  1, 2, 3, ... , n :                               |
  |                                                                  |
  |                        n + 1                                     |
  |          MEAN     =  ---------                                   |
  |                          2                                       |
  |                                                                  |
  |                        n^2 - 1                                   |
  |          VARIANCE =  -----------                                 |
  |                           12                                     |
  |                                                                  |
  |                              /  n^2 - 1                          |
  |          S.D.     =    sqrt (  ---------  )                      |
  |                              \      12                           |
  +------------------------------------------------------------------+
```

### Where it comes from

```
  sum of 1..n        = n(n+1)/2          so mean = (n+1)/2

  sum of 1^2..n^2    = n(n+1)(2n+1)/6

                   sum x^2                n(n+1)(2n+1)/6      ( n+1 )^2
  VARIANCE   =    --------- - mean^2  =  ---------------  -  ( --- )
                      n                        n             (  2  )

             =  (n+1)(2n+1)/6  -  (n+1)^2/4

                  ( n + 1 ) [ 2(2n+1) - 3(n+1) ]
             =    -------------------------------
                              12

                  ( n + 1 )( 4n + 2 - 3n - 3 )        (n+1)(n-1)      n^2 - 1
             =    -----------------------------  =   ------------  =  --------
                              12                          12             12
```

### WORKED EXAMPLE 12.1

Find the variance of the first 10 natural numbers.

```
  n = 10

               n^2 - 1       100 - 1       99
  VARIANCE  =  --------  =  ---------  =  ----  =  8.25
                  12            12         12

  S.D. = sqrt(8.25) = 2.8722... ~= 2.87
```
**Variance = 8.25, S.D. = 2.87**

Sanity check with a small case, n = 5: formula gives `(25-1)/12 = 2`.
By hand: data 1,2,3,4,5, mean 3, deviations -2,-1,0,1,2,
squares 4,1,0,1,4 = 10, variance = 10/5 = **2**. Correct.

## 12.2 Effect of adding a constant (change of ORIGIN)

```
  +------------------------------------------------------------------+
  |   Add k to EVERY observation:   y = x + k                        |
  |                                                                  |
  |        NEW MEAN     =  old mean  +  k                            |
  |        NEW VARIANCE =  old variance      (UNCHANGED)             |
  |        NEW S.D.     =  old S.D.          (UNCHANGED)             |
  +------------------------------------------------------------------+
```

**Why:** sliding the whole data set sideways moves the centre with it. The
distances between the points do not change at all, so the spread cannot change.

```
   BEFORE :   2   4   6   8  10          mean 6,  variance 8

   ADD 100:  102 104 106 108 110         mean 106, variance STILL 8

              |<--- gaps identical --->|
```

Check: deviations from 106 are -4, -2, 0, 2, 4; squares 16, 4, 0, 4, 16 = 40;
`40/5 = 8`. Confirmed.

## 12.3 Effect of multiplying by a constant (change of SCALE)

```
  +------------------------------------------------------------------+
  |   Multiply EVERY observation by k:   y = k x                     |
  |                                                                  |
  |        NEW MEAN     =  k  x  old mean                            |
  |        NEW VARIANCE =  k^2 x old variance                        |
  |        NEW S.D.     =  |k| x old S.D.                            |
  +------------------------------------------------------------------+
```

**Why:** stretching the data by a factor of k stretches every distance by k.
Variance uses squared distances, so it is stretched by `k^2`.

```
   BEFORE :   2   4   6   8  10          mean 6,   variance 8,  S.D. 2.83
   TIMES 3:   6  12  18  24  30          mean 18,  variance 72, S.D. 8.49
                                                            ^
                                                     8 x 3^2 = 72
```

Check: mean of 6,12,18,24,30 = 90/5 = 18. Deviations -12, -6, 0, 6, 12;
squares 144, 36, 0, 36, 144 = 360; `360/5 = 72`. Confirmed.

## 12.4 The combined rule

```
  +------------------------------------------------------------------+
  |   If   y = ( x - A ) / h    then                                 |
  |                                                                  |
  |        x_bar     =  A  +  h  x  y_bar                            |
  |        var(x)    =  h^2 x  var(y)                                |
  |        sigma(x)  =  |h| x  sigma(y)                              |
  +------------------------------------------------------------------+
```

**That is exactly the step deviation method.** You have been using this rule
all along without a name for it.

### WORKED EXAMPLE 12.2

The mean and variance of 20 observations are 10 and 4. If every observation
is multiplied by 3 and then 5 is subtracted, find the new mean and variance.

```
  New value  y = 3x - 5

  MEAN:      y_bar = 3 x (old mean) - 5 = 3(10) - 5 = 30 - 5 = 25

  VARIANCE:  multiplying by 3 multiplies variance by 3^2 = 9
             subtracting 5 changes nothing
             var(y) = 9 x 4 = 36

  S.D. = sqrt(36) = 6
```
**New mean = 25, new variance = 36, new S.D. = 6**

> **TRAP:** Students multiply the variance by 3 instead of by 9.
> Variance scales by the SQUARE of the multiplier. Always.

---

# TOPIC 13 — THE COEFFICIENT OF VARIATION (THE OTHER 7-MARK QUESTION)

## The problem it solves

```
   ELEPHANTS :  mean weight 4000 kg,  S.D. 200 kg
   MICE      :  mean weight   30 g ,  S.D.   6 g
```

Which group is more variable? The elephants have an S.D. of 200 and the mice
have an S.D. of 6, so elephants look far more variable — **but that is wrong.**
200 kg out of 4000 kg is a 5% wobble. 6 g out of 30 g is a 20% wobble.
**Relative to their own size, the mice vary four times as much.**

You cannot compare raw standard deviations when the means are different or
the units are different. You must go relative.

## The formula

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                                        sigma                     |
  |     COEFFICIENT OF VARIATION,  C.V. = ------- x 100              |
  |                                        x_bar                     |
  |                                                                  |
  |     - It is a PERCENTAGE. It has NO units.                       |
  |     - It measures spread RELATIVE to the size of the mean.       |
  |     - Defined only when the mean is not zero.                    |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |     LOWER  C.V.  ->  LESS variation  ->  MORE CONSISTENT         |
  |                                          MORE STABLE             |
  |                                          MORE UNIFORM            |
  |                                                                  |
  |     HIGHER C.V.  ->  MORE variation  ->  LESS CONSISTENT         |
  |                                          MORE VARIABLE           |
  |                                                                  |
  +------------------------------------------------------------------+
```

Elephants: `C.V. = (200/4000) x 100 = 5%`
Mice: `C.V. = (6/30) x 100 = 20%`
**The mice are the more variable group.** Now the comparison is honest.

## The vocabulary trap

The board asks the same thing in many different words. All of these mean
"find the smaller C.V.":

```
   "which is MORE CONSISTENT"          -> smaller C.V.
   "which is MORE STABLE"              -> smaller C.V.
   "which is MORE UNIFORM"             -> smaller C.V.
   "which has GREATER CONSISTENCY"     -> smaller C.V.
   "which is LESS VARIABLE"            -> smaller C.V.

   "which is MORE VARIABLE"            -> LARGER C.V.
   "which shows GREATER VARIABILITY"   -> LARGER C.V.
   "which is LESS STABLE"              -> LARGER C.V.
```

> **TRAP:** Half the marks lost on this question come from students who compute
> both C.V.s perfectly and then pick the **wrong** one because the question
> said "more variable" instead of "more consistent". **Underline that word in
> the question paper before you start.**

## WORKED EXAMPLE 13.1 — the classic 7-mark board question

The prices of two shares X and Y over 10 days are given below.
Which share is more stable in value?

```
  X :   35,  54,  52,  53,  56,  58,  52,  50,  51,  49
  Y :  108, 107, 105, 105, 106, 107, 104, 103, 104, 101
```

### SHARE X

```
  sum X = 35 + 54 + 52 + 53 + 56 + 58 + 52 + 50 + 51 + 49

        = 89 + 52 + 53 + 56 + 58 + 52 + 50 + 51 + 49
        = 141 + 53 + 56 + 58 + 52 + 50 + 51 + 49
        = 194 + 56 + 58 + 52 + 50 + 51 + 49
        = 250 + 58 + 52 + 50 + 51 + 49
        = 308 + 52 + 50 + 51 + 49
        = 360 + 50 + 51 + 49
        = 410 + 51 + 49
        = 461 + 49
        = 510

  n = 10,   mean of X = 510/10 = 51

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
     CHECK: -16+3+1+2+5+7+1-1+0-2
          = (3+1+2+5+7+1) - (16+1+2)
          = 19 - 19 = 0    CORRECT

  Squares total: 256+9 = 265, +1 = 266, +4 = 270, +25 = 295,
                 +49 = 344, +1 = 345, +1 = 346, +0 = 346, +4 = 350

  Variance of X = 350/10 = 35

  S.D. of X = sqrt(35) = 5.9160... ~= 5.92

                        5.9160
  C.V. of X  =  ------------------ x 100  =  11.60 %
                          51
```

### SHARE Y

```
  sum Y = 108 + 107 + 105 + 105 + 106 + 107 + 104 + 103 + 104 + 101

        = 215 + 105 + 105 + 106 + 107 + 104 + 103 + 104 + 101
        = 320 + 105 + 106 + 107 + 104 + 103 + 104 + 101
        = 425 + 106 + 107 + 104 + 103 + 104 + 101
        = 531 + 107 + 104 + 103 + 104 + 101
        = 638 + 104 + 103 + 104 + 101
        = 742 + 103 + 104 + 101
        = 845 + 104 + 101
        = 949 + 101
        = 1050

  n = 10,   mean of Y = 1050/10 = 105

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
     CHECK: (3+2+0+0+1+2) - (1+2+1+4) = 8 - 8 = 0    CORRECT

  Squares total: 9+4 = 13, +0 = 13, +0 = 13, +1 = 14, +4 = 18,
                 +1 = 19, +4 = 23, +1 = 24, +16 = 40

  Variance of Y = 40/10 = 4

  S.D. of Y = sqrt(4) = 2

                     2
  C.V. of Y  =  --------- x 100  =  1.9047...  ~=  1.90 %
                   105
```

### THE CONCLUSION (this sentence carries marks — never omit it)

```
  +---------------+------------+----------+----------+
  |    SHARE      |    MEAN    |   S.D.   |   C.V.   |
  +---------------+------------+----------+----------+
  |      X        |     51     |   5.92   |  11.60 % |
  |      Y        |    105     |   2.00   |   1.90 % |
  +---------------+------------+----------+----------+

  Since  C.V. of Y (1.90 %)  <  C.V. of X (11.60 %),

  SHARE Y IS MORE STABLE (more consistent) in value.
  Share X shows greater variability.
```

Notice how misleading the raw S.D. alone would be if you only glanced at it:
5.92 versus 2.00 — but the means are 51 versus 105, so you **must** go relative.

## WORKED EXAMPLE 13.2 — working backwards

The coefficients of variation of two distributions are 60 and 70, and their
standard deviations are 21 and 16. Find their arithmetic means.

```
                sigma                              sigma x 100
  C.V.  =  ------------ x 100      =>     x_bar = -------------
              x_bar                                    C.V.

  First distribution :   x_bar = (21 x 100)/60 = 2100/60 = 35

  Second distribution:   x_bar = (16 x 100)/70 = 1600/70 = 22.857... ~= 22.86
```
**Means are 35 and 22.86**

Check: `21/35 x 100 = 60` correct. `16/22.857 x 100 = 70.0` correct.

## WORKED EXAMPLE 13.3 — a short comparison

The average marks of section A are 40 with S.D. 8. Section B averages 60 with
S.D. 9. Which section is more consistent?

```
  C.V.(A) = (8/40) x 100  = 20 %
  C.V.(B) = (9/60) x 100  = 15 %

  15 % < 20 %,  so SECTION B is more consistent.
```

Again the raw S.D. would have misled you: B's S.D. (9) is bigger than A's (8),
yet B is the more consistent section.

---

# TOPIC 14 — COMBINED MEAN AND COMBINED VARIANCE

## The situation

Two separate groups are merged into one. You know each group's size, mean and
variance. What are the mean and variance of the whole merged set?

```
   GROUP 1 :  n1 observations,  mean x1_bar,  variance sigma1^2
   GROUP 2 :  n2 observations,  mean x2_bar,  variance sigma2^2
                        |
                        v
   MERGED  :  n1 + n2 observations,  mean = ?  variance = ?
```

## Combined mean

Easy and obvious: total of everything divided by how many there are.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                      n1 x1_bar  +  n2 x2_bar                     |
  |     x_bar (combined) = -------------------------                 |
  |                              n1 + n2                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Combined variance

The merged data is spread out for **two** reasons: each group has its own
internal spread, AND the two group means sit at different places.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                     n1 ( sigma1^2 + d1^2 ) + n2 ( sigma2^2 + d2^2)|
  |   sigma^2(combined)= -------------------------------------------- |
  |                                    n1 + n2                        |
  |                                                                  |
  |     where   d1 = x1_bar  -  x_bar(combined)                      |
  |             d2 = x2_bar  -  x_bar(combined)                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

Read it as:

```
   combined variance  =  (weighted average of the two internal variances)
                      +  (weighted average of how far each group mean sits
                          from the combined mean)
```

## WORKED EXAMPLE 14.1

Group 1 has 100 observations with mean 50 and S.D. 5.
Group 2 has 150 observations with mean 40 and S.D. 6.
Find the mean and standard deviation of all 250 observations.

**Step 1 — combined mean**

```
  n1 = 100, x1_bar = 50, sigma1 = 5  ->  sigma1^2 = 25
  n2 = 150, x2_bar = 40, sigma2 = 6  ->  sigma2^2 = 36

                 100(50) + 150(40)       5000 + 6000       11000
  x_bar   =     -------------------  =  -------------  =  -------  =  44
                    100 + 150                250            250
```

**Step 2 — the two gaps**

```
  d1 = 50 - 44 = +6      ->  d1^2 = 36
  d2 = 40 - 44 = -4      ->  d2^2 = 16
```

**Step 3 — combined variance**

```
              100 ( 25 + 36 )  +  150 ( 36 + 16 )
  sigma^2  =  -----------------------------------
                            250

              100 ( 61 )  +  150 ( 52 )
           =  ---------------------------
                         250

              6100  +  7800        13900
           =  --------------  =   -------   =  55.6
                   250              250
```

**Step 4 — combined S.D.**

```
  sigma = sqrt(55.6)

  7^2 = 49,  8^2 = 64        so it lies between 7 and 8
  7.4^2 = 54.76
  7.5^2 = 56.25
  7.46^2 = 55.6516           very close

  sigma ~= 7.46
```

**ANSWER: Combined mean = 44, combined variance = 55.6, combined S.D. = 7.46**

Sanity check: the combined S.D. (7.46) is **larger** than either group's S.D.
(5 and 6). That is exactly what you should expect — merging two groups whose
centres are 10 apart adds extra spread. If your combined S.D. ever comes out
smaller than both individual S.D.s, you have made an error.

## WORKED EXAMPLE 14.2 — a smaller one

Group A: 5 observations, mean 12, variance 4.
Group B: 10 observations, mean 15, variance 9.

```
                5(12) + 10(15)      60 + 150      210
  x_bar    =   ---------------  =  ----------  =  ----  =  14
                   5 + 10              15          15

  d1 = 12 - 14 = -2   ->  d1^2 = 4
  d2 = 15 - 14 = +1   ->  d2^2 = 1

              5( 4 + 4 )  +  10( 9 + 1 )       5(8) + 10(10)
  sigma^2 =  ---------------------------  =   ---------------
                       15                            15

              40 + 100      140
           =  ---------  =  -----  =  9.333...  ~=  9.33
                 15           15

  sigma = sqrt(9.333) = 3.055... ~= 3.06
```
**Combined mean = 14, combined variance = 9.33, combined S.D. = 3.06**

---

# TOPIC 15 — COMPARING ALL THE MEASURES

## The comparison table (a written 4-mark answer)

| Measure | Formula | Uses all data? | Merits | Demerits |
|---|---|---|---|---|
| **Range** | `L - S` | NO — only 2 values | Simplest and fastest to compute. Useful for quality control and for share-price movement. | Ignores every value in between. Ruined by a single extreme value. Cannot be treated algebraically. |
| **Quartile deviation** | `(Q3 - Q1)/2` | NO — middle 50% only | Not affected by extreme values. Good for open-ended classes. | Ignores the outer half of the data completely. Not suited to further algebra. |
| **Mean deviation** | `sum f|x - a| / N` | YES | Uses every observation. Easy to understand — it is a genuine average distance. Less affected by extremes than S.D. | The modulus makes further algebra impossible. Ignoring the signs is mathematically unnatural. Not used in advanced statistics. |
| **Variance** | `sum f(x - x_bar)^2 / N` | YES | Uses every observation. Perfect for algebra — combines across groups. The foundation of all higher statistics. | Units are squared, so it cannot be compared with the original data directly. Heavily influenced by outliers. |
| **Standard deviation** | `sqrt(variance)` | YES | Same units as the data. Uses every observation. Least affected by sampling fluctuation. The most widely used and most reliable measure. | Harder to compute by hand than range. Still sensitive to extreme values. |
| **Coefficient of variation** | `(sigma / x_bar) x 100` | YES | Unit-free, so it can compare two data sets with different units or very different means. The only correct consistency measure. | Meaningless when the mean is zero or near zero. Unstable for data with negative values. |

## Which is "best"?

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   STANDARD DEVIATION is the BEST measure of dispersion.          |
  |                                                                  |
  |   Because it:   - uses every observation                         |
  |                 - is expressed in the same units as the data     |
  |                 - is capable of further algebraic treatment      |
  |                   (variances of groups can be combined)          |
  |                 - is least affected by sampling fluctuations     |
  |                                                                  |
  |   And COEFFICIENT OF VARIATION is the best measure for           |
  |   COMPARING two different data sets.                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Absolute versus relative measures

```
                    MEASURES OF DISPERSION
                              |
            +-----------------+-----------------+
            |                                   |
      ABSOLUTE                              RELATIVE
   (has the units of                      (no units at all -
    the original data)                     a pure number or %)
            |                                   |
    Range                              Coefficient of range
    Quartile deviation                 Coefficient of Q.D.
    Mean deviation                     Coefficient of M.D.
    Standard deviation                 Coefficient of variation
```

**Use an ABSOLUTE measure to describe one data set.**
**Use a RELATIVE measure to compare two data sets.**

A 2-mark question sometimes asks simply: *"Name a relative measure of
dispersion."* **ANSWER: the coefficient of variation** (or the coefficient of
range / coefficient of mean deviation).

## The order of magnitude (a useful sanity check)

For most real data sets:

```
   MEAN DEVIATION  <  STANDARD DEVIATION  <  RANGE

   Approximate relationships:
       Quartile deviation  ~=  (2/3) x S.D.
       Mean deviation      ~=  (4/5) x S.D.
```

So if you compute an M.D. of 40 and an S.D. of 3 for the same data, something
has gone badly wrong. Check.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write the FORMULA before starting the table?
       (Method marks are given for the formula alone.)

  [ ]  Is every column of my table LABELLED at the top?

  [ ]  For continuous data — did I make a MIDPOINT column before
       doing anything else?     x = (lower + upper)/2

  [ ]  Is N (= sum of f) written down, and does it match the total
       stated in the question?

  [ ]  In any | x - a | column — is every single entry positive or zero?
       (A negative entry there is guaranteed to be wrong.)

  [ ]  For M.D. about the median — did I SORT the data first?
       Did I use the (n+1)/2 rule for odd n and the average of the
       two middle values for even n?

  [ ]  Did I check that the (x - x_bar) column totals exactly ZERO?
       (Only applies when centred on the mean - free error detector.)

  [ ]  In the step deviation method — did I multiply the whole
       bracket by h^2 ?

  [ ]  Is my variance POSITIVE?  A negative variance is impossible.

  [ ]  Did I take the SQUARE ROOT to give the standard deviation as
       well as the variance?  Questions usually want both.

  [ ]  Are answers rounded to 2 decimal places (the exam convention)?

  [ ]  For a coefficient-of-variation question — did I write the
       final CONCLUSION SENTENCE naming which set is more consistent,
       and did I check whether the question asked for "more consistent"
       or "more variable"?

  [ ]  Does the S.D. have the same UNITS as the data, and does the
       variance have squared units?

  [ ]  Sanity check: is the S.D. roughly a quarter of the range?
       If S.D. is bigger than the range, redo the arithmetic.

  [ ]  Did I underline or box the final answer?
```

---

# THE HONEST SUMMARY

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   This chapter has ONE method:                                    |
  |                                                                   |
  |       1.  Find the centre.                                        |
  |       2.  Build a table of distances from the centre.             |
  |       3.  Total the last column.                                  |
  |       4.  Divide by n or N.                                       |
  |                                                                   |
  |   Everything else is a variation on those four lines:             |
  |                                                                   |
  |       modulus the distance  ->  MEAN DEVIATION                    |
  |       square the distance   ->  VARIANCE                          |
  |       square-root that      ->  STANDARD DEVIATION                |
  |       divide by the mean    ->  COEFFICIENT OF VARIATION          |
  |                                                                   |
  |   There is nothing to "understand" that you have not already      |
  |   understood by reading this far. From here it is only practice.  |
  |   Do twenty problems and you will not lose a mark in this         |
  |   chapter for the rest of your life.                              |
  |                                                                   |
  +-------------------------------------------------------------------+
```
