# Measures of Dispersion — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

**Notation used everywhere below**

```
   x        an observation (or a class MIDPOINT for continuous data)
   n        number of observations (ungrouped data)
   f        frequency
   N        sum of f = total number of observations (grouped data)
   x_bar    the arithmetic mean
   M        the median
   a        the centre you are measuring about (mean OR median)
   sigma^2  variance
   sigma    standard deviation
   A        assumed mean (step deviation method)
   h        common class width
   u        (x - A)/h
```

---

# 1. MEASURES OF CENTRAL TENDENCY (the background)

## 1.1 Mean

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   UNGROUPED       x_bar  =  ( sum x ) / n                       |
  |                                                                 |
  |   DISCRETE        x_bar  =  ( sum f x ) / N                     |
  |                                                                 |
  |   CONTINUOUS      first  x = (lower limit + upper limit)/2      |
  |                   then   x_bar = ( sum f x ) / N                |
  |                                                                 |
  |   STEP DEVIATION  x_bar  =  A  +  ( sum f u / N ) x h           |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `x_bar = sum x / n` | a plain list of numbers |
| `x_bar = sum(fx) / N` | any frequency table |
| `x = (l + u)/2` | ALWAYS the first step for class intervals |
| `x_bar = A + (sum fu / N) x h` | continuous data with equal class widths — fastest |

## 1.2 Median

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   UNGROUPED — sort ascending first, then                        |
  |                                                                 |
  |     n ODD   :  M  =  the ((n+1)/2)-th value                     |
  |                                                                 |
  |     n EVEN  :  M  =  average of the (n/2)-th and                |
  |                      the (n/2 + 1)-th values                    |
  |                                                                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |   DISCRETE  — build a cumulative frequency (cf) column.         |
  |               The median is the x beside the first cf that      |
  |               reaches N/2.                                      |
  |                                                                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |   CONTINUOUS (grouped)                                          |
  |                                                                 |
  |                    ( N/2  -  cf )                               |
  |     M   =   l  +   ( ----------- )  x  h                        |
  |                    (      f      )                              |
  |                                                                 |
  |     l  = lower boundary of the median class                     |
  |     cf = cumulative frequency of the class BEFORE it            |
  |     f  = frequency OF the median class                          |
  |     h  = width of the median class                              |
  |                                                                 |
  |     MEDIAN CLASS = first class whose cf reaches N/2             |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| sort, then middle value | any short list of numbers |
| cf column | discrete frequency table |
| `l + [(N/2 - cf)/f] x h` | class intervals — needed for M.D. about the median |

## 1.3 Mode

```
  +-----------------------------------------------------------------+
  |   UNGROUPED / DISCRETE :  the value with the largest frequency  |
  |                                                                 |
  |   CONTINUOUS :                                                  |
  |                            (      f1  -  f0        )            |
  |            MODE  =  l  +   ( ------------------- ) x h          |
  |                            (  2 f1  -  f0  -  f2   )            |
  |                                                                 |
  |            f1 = frequency of the modal class (largest f)        |
  |            f0 = frequency of the class before it                |
  |            f2 = frequency of the class after it                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |   EMPIRICAL RELATION                                            |
  |                                                                 |
  |            MODE  =  3 x MEDIAN  -  2 x MEAN                     |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| highest frequency | discrete data, 2-mark question |
| `Mode = 3 Median - 2 Mean` | when two of the three are given |

---

# 2. RANGE

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     RANGE  =  L  -  S                                           |
  |                                                                 |
  |                                    L  -  S                      |
  |     COEFFICIENT OF RANGE  =     -----------                     |
  |                                    L  +  S                      |
  |                                                                 |
  |     L = largest value  (upper boundary of the highest class)    |
  |     S = smallest value (lower boundary of the lowest class)     |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `R = L - S` | "find the range" — 10 seconds, 2 marks |
| `(L-S)/(L+S)` | "find the coefficient of range" — has NO units |
| L and S from class boundaries | when the data is grouped |

---

# 3. MEAN DEVIATION

## 3.1 The three data types, about the MEAN

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   UNGROUPED                sum | x - x_bar |                    |
  |               M.D.(x_bar) = ------------------                  |
  |                                     n                           |
  |                                                                 |
  |   DISCRETE                 sum f | x - x_bar |                  |
  |               M.D.(x_bar) = --------------------                |
  |                                     N                           |
  |                                                                 |
  |   CONTINUOUS   same as discrete, but first replace each class   |
  |                by its MIDPOINT  x = (lower + upper)/2           |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## 3.2 The three data types, about the MEDIAN

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   UNGROUPED                sum | x - M |                        |
  |               M.D.(M)   = ----------------                      |
  |                                  n                              |
  |                                                                 |
  |   DISCRETE                 sum f | x - M |                      |
  |               M.D.(M)   = ------------------                    |
  |                                  N                              |
  |                                                                 |
  |   CONTINUOUS   same, with midpoints, and M found from the       |
  |                grouped-median formula in section 1.2            |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## 3.3 Coefficient of mean deviation

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     Coefficient of M.D. about the mean   =  M.D.(x_bar)/x_bar   |
  |                                                                 |
  |     Coefficient of M.D. about the median =  M.D.(M) / M         |
  |                                                                 |
  |     (multiply by 100 if a percentage is wanted)                 |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## 3.4 The property

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     MEAN DEVIATION IS **MINIMUM** WHEN TAKEN ABOUT THE MEDIAN.  |
  |                                                                 |
  |          sum | x - M |   <=   sum | x - a |    for every a      |
  |                                                                 |
  |     Also:   sum ( x - x_bar )  =  0     always, exactly         |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `sum|x - x_bar| / n` | short list, "about the mean" |
| `sum|x - M| / n` | short list, "about the median" — SORT FIRST |
| `sum f|x - a| / N` | any frequency table |
| midpoint `x = (l+u)/2` | ALWAYS the first step for class intervals |
| `M.D. / centre` | "coefficient of mean deviation" |
| M.D. least about the median | 2-mark theory question |
| `sum(x - x_bar) = 0` | free arithmetic check on your table |

---

# 4. VARIANCE AND STANDARD DEVIATION

## 4.1 Ungrouped data

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   DIRECT               sum ( x - x_bar )^2                      |
  |          sigma^2  =  ------------------------                   |
  |                                n                                |
  |                                                                 |
  |   SHORTCUT             sum x^2                                  |
  |          sigma^2  =   ---------  -  ( x_bar )^2                 |
  |                            n                                    |
  |                                                                 |
  |          "mean of the squares MINUS square of the mean"         |
  |                                                                 |
  |   RAW-SUM FORM (no mean needed at all)                          |
  |                                                                 |
  |                      n sum(x^2)  -  ( sum x )^2                 |
  |          sigma^2  =  --------------------------                 |
  |                                 n^2                             |
  |                                                                 |
  |          sigma  =  sqrt( sigma^2 )      always the POSITIVE root|
  |                                                                 |
  +-----------------------------------------------------------------+
```

## 4.2 Discrete frequency distribution

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   DIRECT               sum f ( x - x_bar )^2                    |
  |          sigma^2  =  --------------------------                 |
  |                                 N                               |
  |                                                                 |
  |   SHORTCUT             sum f x^2                                |
  |          sigma^2  =   -----------  -  ( x_bar )^2               |
  |                             N                                   |
  |                                                                 |
  |   RAW-SUM FORM                                                  |
  |                      N sum(f x^2)  -  ( sum f x )^2             |
  |          sigma^2  =  -------------------------------            |
  |                                  N^2                            |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## 4.3 Continuous frequency distribution — THE STEP DEVIATION METHOD

**This is the 7-mark formula. Know it perfectly.**

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     A = assumed mean (choose a midpoint near the centre)        |
  |     h = COMMON class width                                      |
  |                                                                 |
  |               x  -  A                                           |
  |       u   =  ---------            (small whole numbers)         |
  |                  h                                              |
  |                                                                 |
  |                          ( sum f u )                            |
  |       MEAN    x_bar =  A + ( -------- ) x h                     |
  |                          (    N     )                           |
  |                                                                 |
  |                        [ sum f u^2      ( sum f u )^2 ]         |
  |       VARIANCE = h^2 x [ ----------  -  ( -------- )  ]         |
  |                        [     N          (    N     )  ]         |
  |                                                                 |
  |       S.D.  =  h x sqrt[ sum f u^2 / N  -  ( sum f u / N )^2 ]  |
  |                                                                 |
  |   EQUIVALENT SINGLE-FRACTION FORM (some books use this)         |
  |                                                                 |
  |                     h^2                                         |
  |       VARIANCE  =  ------ [ N sum(f u^2)  -  ( sum f u )^2 ]    |
  |                     N^2                                         |
  |                                                                 |
  +-----------------------------------------------------------------+
```

**The six columns, in order:**

```
   +---------+-----+-----+-----+------+-------+
   |  CLASS  |  f  |  x  |  u  |  fu  |  fu^2 |
   +---------+-----+-----+-----+------+-------+
                   ^     ^            ^
        midpoint --+     |            +-- compute as  fu x u
                         +-- (x - A)/h    (one multiplication, not two)
```

## 4.4 Relationships to remember

```
  +-----------------------------------------------------------------+
  |     sigma       =  sqrt( variance )                             |
  |     variance    =  ( S.D. )^2                                   |
  |     sigma       >=  0      ALWAYS                               |
  |     variance    >=  0      ALWAYS                               |
  |                                                                 |
  |     variance = 0  <=>  every observation is identical           |
  |                                                                 |
  |     S.D. has the SAME units as the data                         |
  |     Variance has SQUARED units                                  |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `sum(x-x_bar)^2 / n` | short list AND the mean is a whole number |
| `sum(x^2)/n - x_bar^2` | short list AND the mean is a decimal |
| `sum f(x-x_bar)^2 / N` | discrete table, whole-number mean |
| `sum(fx^2)/N - x_bar^2` | discrete table, decimal mean |
| **step deviation** | **continuous data with EQUAL class widths — always** |
| `sum(fx^2)/N - x_bar^2` | continuous data with UNEQUAL class widths |

---

# 5. SPECIAL RESULTS

## 5.1 First n natural numbers

```
  +-----------------------------------------------------------------+
  |     For  1, 2, 3, ... , n                                       |
  |                                                                 |
  |            MEAN      =   ( n + 1 ) / 2                          |
  |                                                                 |
  |            VARIANCE  =   ( n^2  -  1 ) / 12                     |
  |                                                                 |
  |            S.D.      =   sqrt[ ( n^2 - 1 ) / 12 ]               |
  |                                                                 |
  |     Useful sums:                                                |
  |            sum of 1..n      =  n(n+1)/2                         |
  |            sum of 1^2..n^2  =  n(n+1)(2n+1)/6                   |
  +-----------------------------------------------------------------+
```

Quick values worth knowing:

| n | Mean | Variance `(n^2-1)/12` | S.D. |
|---|---|---|---|
| 5 | 3 | 2 | 1.41 |
| 7 | 4 | 4 | 2 |
| 10 | 5.5 | 8.25 | 2.87 |
| 11 | 6 | 10 | 3.16 |
| 13 | 7 | 14 | 3.74 |

## 5.2 Change of origin and scale

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   ADD k to every observation      ( y = x + k )                 |
  |                                                                 |
  |        new mean     =  old mean + k                             |
  |        new variance =  old variance        (NO CHANGE)          |
  |        new S.D.     =  old S.D.            (NO CHANGE)          |
  |                                                                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |   MULTIPLY every observation by k ( y = k x )                   |
  |                                                                 |
  |        new mean     =  k  x  old mean                           |
  |        new variance =  k^2 x old variance                       |
  |        new S.D.     = |k| x old S.D.                            |
  |                                                                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |   BOTH at once                    ( y = (x - A)/h )             |
  |                                                                 |
  |        x_bar    =  A  +  h x y_bar                              |
  |        var(x)   =  h^2 x var(y)                                 |
  |        sigma(x) = |h| x sigma(y)                                |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Result | When to use |
|---|---|
| add k: variance unchanged | "each observation increased by 5" |
| multiply by k: variance x k^2 | "each observation multiplied by 3" |
| `y = ax + b` -> `var(y) = a^2 var(x)` | combined transformation |
| `(n^2-1)/12` | "variance of the first n natural numbers" |

---

# 6. COEFFICIENT OF VARIATION

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |                          sigma                                  |
  |         C.V.   =      ----------   x   100        (a PERCENT)   |
  |                          x_bar                                  |
  |                                                                 |
  |     Rearranged:                                                 |
  |                                                                 |
  |         sigma  =  ( C.V. x x_bar ) / 100                        |
  |                                                                 |
  |         x_bar  =  ( sigma x 100 ) / C.V.                        |
  |                                                                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |      LOWER  C.V.   ->   MORE consistent / stable / uniform      |
  |      HIGHER C.V.   ->   MORE variable / less stable             |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Related relative measures:

```
      Coefficient of standard deviation  =  sigma / x_bar
      Coefficient of range               =  (L - S)/(L + S)
      Coefficient of mean deviation      =  M.D. / centre used
```

| Formula | When to use |
|---|---|
| `(sigma/x_bar) x 100` | "which set is more consistent?" — the 7-mark question |
| `x_bar = sigma x 100 / C.V.` | mean is unknown, C.V. and S.D. given |
| `sigma = C.V. x x_bar / 100` | S.D. is unknown, C.V. and mean given |
| smaller C.V. wins | the conclusion sentence — carries marks |

---

# 7. COMBINED MEAN AND COMBINED VARIANCE

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   TWO GROUPS                                                    |
  |     Group 1:  n1 items, mean x1_bar, variance sigma1^2          |
  |     Group 2:  n2 items, mean x2_bar, variance sigma2^2          |
  |                                                                 |
  |                        n1 x1_bar  +  n2 x2_bar                  |
  |     COMBINED MEAN  =  --------------------------                |
  |                              n1 + n2                            |
  |                                                                 |
  |     d1 = x1_bar - combined mean                                 |
  |     d2 = x2_bar - combined mean                                 |
  |                                                                 |
  |                        n1(sigma1^2 + d1^2) + n2(sigma2^2 + d2^2)|
  |     COMBINED VARIANCE= ---------------------------------------- |
  |                                    n1  +  n2                    |
  |                                                                 |
  |     COMBINED S.D.  =  sqrt( combined variance )                 |
  |                                                                 |
  +-----------------------------------------------------------------+
  |                                                                 |
  |   FOR k GROUPS  (same idea)                                     |
  |                                                                 |
  |     combined mean     =  sum( ni xi_bar ) / sum( ni )           |
  |     combined variance =  sum[ ni( sigmai^2 + di^2 ) ] / sum(ni) |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| weighted mean | "two classes merged, find the overall mean" |
| combined variance with `d^2` terms | "find the S.D. of all the observations together" |
| sanity check | combined S.D. is normally LARGER than both group S.D.s |

---

# 8. USEFUL IDENTITIES FOR OBJECTIVE QUESTIONS

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   sum x      =  n  x  x_bar                                     |
  |                                                                 |
  |   sum x^2    =  n ( sigma^2  +  x_bar^2 )                       |
  |                                                                 |
  |   sum(x - x_bar)   =  0                                         |
  |                                                                 |
  |   sum(x - x_bar)^2 =  n sigma^2  =  sum x^2  -  n x_bar^2       |
  |                                                                 |
  |   For a corrected observation (wrong value w replaced by c):    |
  |                                                                 |
  |        corrected sum x   = old sum x   - w   + c                |
  |        corrected sum x^2 = old sum x^2 - w^2 + c^2              |
  |        then recompute the mean and the variance                 |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Identity | When to use |
|---|---|
| `sum x^2 = n(sigma^2 + x_bar^2)` | "find the missing observations" problems |
| `sum(x - x_bar) = 0` | proving results, checking tables |
| corrected sums | "one value was wrongly copied" problems |

---

# 9. TYPICAL ORDER OF MAGNITUDE (sanity checks)

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     Quartile deviation  ~=  (2/3) x standard deviation          |
  |     Mean deviation      ~=  (4/5) x standard deviation          |
  |                                                                 |
  |     so roughly:   Q.D.  <  M.D.  <  S.D.  <  RANGE              |
  |                                                                 |
  |     and for most data:  S.D. is about  RANGE / 4                |
  |                                                                 |
  +-----------------------------------------------------------------+
```

Use these only to check whether your answer is plausible. Never quote them
as an exact result.

---

# 10. THE COMPLETE DECISION FLOWCHART

```
                      WHAT DOES THE QUESTION ASK FOR?
                                  |
        +-------------+-----------+-----------+---------------+
        |             |                       |               |
      RANGE      MEAN DEVIATION      VARIANCE / S.D.    COMPARE 2 SETS
        |             |                       |               |
     L - S            |                       |          Find mean & S.D.
   (L-S)/(L+S)        |                       |          of EACH set,
                      |                       |          then C.V. of each,
        +-------------+                       |          then state which
        |             |                       |          has the LOWER C.V.
     about         about                      |
     MEAN          MEDIAN                     |
        |             |                       |
   x_bar = sum/n   sort & find M              |
        |             |                       |
        +------+------+                       |
               |                              |
      WHAT KIND OF DATA?                WHAT KIND OF DATA?
               |                              |
    +----------+----------+       +-----------+-----------+
    |          |          |       |           |           |
 UNGROUPED  DISCRETE  CONTINUOUS UNGROUPED DISCRETE  CONTINUOUS
    |          |          |       |           |           |
 sum|x-a|  sum f|x-a| midpoint  sum(x-a)^2 sum f(x-a)^2  STEP
 --------  ---------- first,    ---------- ------------ DEVIATION
    n           N     then as      n            N        (equal h)
                      discrete                              |
                                                       h^2[fu^2/N
                                                        -(fu/N)^2]
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   1.  x_bar  =  sum(fx) / N                                        |
  |                                                                    |
  |   2.  MEDIAN (grouped)  =  l + [ (N/2 - cf) / f ] x h              |
  |                                                                    |
  |   3.  RANGE  =  L - S        Coefficient = (L - S)/(L + S)         |
  |                                                                    |
  |   4.  M.D.  =  sum f | x - a | / N      (a = mean or median)       |
  |                                                                    |
  |   5.  Coefficient of M.D.  =  M.D. / (the centre used)             |
  |                                                                    |
  |   6.  VARIANCE (direct)  =  sum f (x - x_bar)^2 / N                |
  |                                                                    |
  |   7.  VARIANCE (shortcut)  =  sum(f x^2)/N  -  (x_bar)^2           |
  |                                                                    |
  |   8.  STEP DEVIATION:   u = (x - A)/h                              |
  |                                                                    |
  |            x_bar  =  A + (sum fu / N) x h                          |
  |                                                                    |
  |            sigma^2 = h^2 [ sum fu^2/N  -  (sum fu/N)^2 ]           |
  |                                                                    |
  |   9.  sigma  =  sqrt(variance)                                     |
  |                                                                    |
  |  10.  C.V.  =  (sigma / x_bar) x 100        LOWER = MORE CONSISTENT|
  |                                                                    |
  |  11.  Variance of 1,2,...,n  =  ( n^2 - 1 ) / 12                   |
  |                                                                    |
  |  12.  COMBINED:  x_bar = (n1 x1 + n2 x2)/(n1 + n2)                 |
  |                                                                    |
  |            sigma^2 = [n1(s1^2 + d1^2) + n2(s2^2 + d2^2)]/(n1 + n2) |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**Plus the three facts that are pure 2-mark gifts:**

```
   *  Mean deviation is LEAST about the MEDIAN.
   *  Add a constant  ->  variance UNCHANGED.
      Multiply by k   ->  variance x k^2.
   *  Standard deviation is the BEST measure of dispersion; coefficient of
      variation is the best measure for COMPARING two data sets.
```
