# Measures of Dispersion — Mind Map

**Maths IIA · Chapter 8 · The EASIEST guaranteed marks in the whole paper**

Read this line twice: **the method in this chapter never changes.**
Not once. Not for any question. You build a table, you add up columns, you divide.
There is no trick to spot, no identity to remember, no "aha" moment needed.
If you can add, subtract, multiply and use a square-root, you can score every mark here.

Most weak students skip this chapter because it looks like "statistics".
That is a mistake. This is the cheapest chapter in Maths IIA.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                    M E A S U R E S   O F   D I S P E R S I O N
                     (how SPREAD OUT the numbers are)
                                    |
        +---------------+-----------+-----------+---------------+
        |               |                       |               |
   BACKGROUND        RANGE              MEAN DEVIATION      VARIANCE &
   (centre)                                  (M.D.)        STD DEVIATION
        |               |                       |               |
     Mean x-bar    Range = L - S          about MEAN       Variance = sigma^2
     Median        Coefficient            about MEDIAN     S.D. = sigma
     Mode          = (L-S)/(L+S)               |               |
        |                                      |               |
  ungrouped /                        +---------+--------+      |
  discrete /                         |         |        |      |
  continuous                    ungrouped  discrete  continuous|
                                     |         |        |      |
                                 sum|x-a|   sum f|x-a| sum f|x-a|
                                 -------    ---------- ----------
                                    n           N          N
                                                                |
                              +---------------+----------------++
                              |               |                 |
                          UNGROUPED       DISCRETE          CONTINUOUS
                              |               |                 |
                        sum(x - x_bar)^2  sum f(x-x_bar)^2   STEP DEVIATION
                        --------------    ---------------    u = (x - A)/h
                              n                 N                 |
                              |               |             sigma^2 = h^2 [ sum fu^2   ( sum fu )^2 ]
                        SHORTCUT:        SHORTCUT:                    [ -------- - ( ------- )   ]
                        sum x^2                sum f x^2              [    N       (    N    )   ]
                        ------ - (x_bar)^2     -------- - (x_bar)^2
                           n                       N
                                    |
        +---------------------------+---------------------------+
        |                           |                           |
  COEFFICIENT OF            SPECIAL RESULTS              COMBINED DATA
  VARIATION                        |                           |
        |                  var of 1,2,...,n                combined mean
  C.V. = sigma/x_bar x 100  = (n^2 - 1)/12                 combined variance
        |                          |                           |
  LOWER C.V.                add k  -> mean +k, var SAME
  = MORE CONSISTENT         mult k -> mean xk, var x k^2
```

---

## THE 60-SECOND VERSION

Two cricketers both average 50 runs.

```
   Player A :  48, 52, 49, 51, 50     <- always around 50.  RELIABLE.
   Player B :   0, 100,  5, 95, 50    <- wild.  UNRELIABLE.

   SAME MEAN (50).  COMPLETELY DIFFERENT PLAYERS.
```

The mean cannot tell them apart. **Dispersion** can.
Dispersion = a single number that says "how far, on average, do the values sit
from the centre".

There are only four such numbers in your syllabus:

| Measure | What it does | Formula in one line |
|---|---|---|
| Range | biggest minus smallest | `L - S` |
| Mean deviation | average of the distances, ignoring sign | `sum |x - a| / n` |
| Variance | average of the squared distances | `sum (x - x_bar)^2 / n` |
| Standard deviation | square root of variance | `sqrt(variance)` |

And one number to **compare** two different data sets:

```
   +-----------------------------------------------------------+
   |                        sigma                              |
   |     Coefficient of Variation  C.V. =  -------- x 100      |
   |                                        x_bar              |
   |                                                           |
   |          SMALLER C.V.   =   MORE CONSISTENT / STABLE      |
   |          LARGER  C.V.   =   MORE VARIABLE                 |
   +-----------------------------------------------------------+
```

That box alone is worth 7 marks nearly every single year.

---

## WHERE THE MARKS ARE (AP Inter, Maths IIA, 75 marks)

| Topic | Section | Marks | How often |
|---|---|---|---|
| Range and coefficient of range | A | 2 | occasional |
| M.D. about mean, ungrouped data | A | 2 | very common |
| M.D. about median, ungrouped data | A | 2 | very common |
| Variance / S.D. of a small ungrouped set | A | 2 | very common |
| Variance of first n natural numbers | A | 2 | occasional |
| C.V. from a given mean and S.D. | A | 2 | occasional |
| M.D. of a discrete frequency distribution | B | 4 | common |
| M.D. of a continuous frequency distribution | B | 4 | common |
| Variance / S.D. of a discrete distribution | B | 4 | common |
| **Variance and S.D. of a continuous distribution (step deviation)** | **C** | **7** | **very common** |
| **Compare consistency of two sets using C.V.** | **C** | **7** | **very common** |
| Combined mean and combined variance | B or C | 4 or 7 | occasional |

```
  +----------------------------------------------------------------+
  |  REALISTIC TOTAL FROM THIS ONE CHAPTER                         |
  |                                                                |
  |     Section A   1 question x 2 marks    =   2                  |
  |     Section B   1 question x 4 marks    =   4                  |
  |     Section C   1 question x 7 marks    =   7                  |
  |                                          -------              |
  |                                            13  out of 75       |
  |                                                                |
  |  Pass mark for Maths IIA is 26.  This chapter alone is HALF    |
  |  a pass, and it is the easiest half you will ever get.         |
  +----------------------------------------------------------------+
```

---

## WHERE IT SITS IN THE PAPER

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q10
  Section B  (4 marks each, answer any 5)    ->  usually Q19 or Q20
  Section C  (7 marks each, answer any 5)    ->  usually Q24
```

Note: in Section B you choose 5 out of 7, and in Section C you choose 5 out of 7.
So a dispersion question is one you can **always** pick. Never leave it.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Mean, Median, Mode
           - mean = sum / n
           - median for ungrouped (sort, pick the middle)
           - median for grouped  (the l + [(N/2 - cf)/f] x h formula)
              |
              |   (you cannot measure spread until you know the centre)
              v
  STEP 2   RANGE
           - the 30-second measure.  L - S.  Coefficient = (L-S)/(L+S)
              |
              v
  STEP 3   MEAN DEVIATION about the MEAN, ungrouped
           - build the table:  x  |  x - x_bar  |  |x - x_bar|
              |
              v
  STEP 4   MEAN DEVIATION about the MEDIAN, ungrouped
           - identical table, just centre on the median instead
              |
              v
  STEP 5   MEAN DEVIATION for DISCRETE frequency data
           - one extra column:  f |x - a|,  and divide by N = sum f
              |
              v
  STEP 6   MEAN DEVIATION for CONTINUOUS frequency data
           - one extra column FIRST: the midpoint x = (lower + upper)/2
              |
              v
  STEP 7   VARIANCE and S.D., ungrouped
           - direct formula, then the SHORTCUT  (sum x^2)/n - (x_bar)^2
              |
              v
  STEP 8   VARIANCE and S.D., DISCRETE frequency data
              |
              v
  STEP 9   VARIANCE and S.D., CONTINUOUS data by STEP DEVIATION
           - THE 7-MARK QUESTION.  Learn this cold.
              |
              +-------------------------+
              |                         |
              v                         v
  STEP 10  COEFFICIENT OF          STEP 11  COMBINED mean
           VARIATION                        and COMBINED variance
           - compare two sets               - two groups merged
           - THE OTHER 7-MARK
             QUESTION
              |
              v
  STEP 12  Special results
           - variance of 1, 2, 3, ..., n  =  (n^2 - 1)/12
           - effect of adding / multiplying by a constant
```

---

## THE KEY BOX — these three unlock nearly every question

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  (1)  MEAN DEVIATION about a centre  a  (a = mean or median)       |
  |                                                                    |
  |            sum of f |x - a|                                        |
  |     M.D. = -------------------      (for ungrouped, take all f = 1 |
  |                    N                 so N = n)                     |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  (2)  VARIANCE by the STEP DEVIATION method                        |
  |       (continuous data - the 7-mark question)                      |
  |                                                                    |
  |       Let  A = assumed mean (a convenient midpoint)                |
  |            h = common class width                                  |
  |            u = (x - A) / h        <- these come out as small       |
  |                                      whole numbers like -3..+3     |
  |                                                                    |
  |                        sum f u                                     |
  |       MEAN   x_bar = A + ------- x h                               |
  |                            N                                       |
  |                                                                    |
  |                         [ sum f u^2     ( sum f u )^2 ]            |
  |       VARIANCE = h^2 x  [ ----------  - ( -------- )  ]            |
  |                         [     N         (    N     )  ]            |
  |                                                                    |
  |       S.D. = sqrt(variance)                                        |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  (3)  COEFFICIENT OF VARIATION  (the "which is more consistent"    |
  |       7-mark question)                                             |
  |                                                                    |
  |                 sigma                                              |
  |       C.V. =  --------- x 100        LOWER C.V. = MORE CONSISTENT  |
  |                 x_bar                                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

## THE FIVE FACTS EXAMINERS LOVE

```
  1.  Mean deviation is LEAST when taken about the MEDIAN.
      (Not the mean. The MEDIAN.)  <- a free 2-mark question

  2.  Variance is never negative. If you get a negative number, you
      made an arithmetic slip. Go back.

  3.  Variance of the first n natural numbers = (n^2 - 1)/12

  4.  Add a constant k to every observation:
          mean increases by k,  VARIANCE DOES NOT CHANGE.
      Multiply every observation by k:
          mean becomes k x mean,  variance becomes k^2 x variance.

  5.  Standard deviation carries the SAME UNITS as the data (kg, cm, runs).
      Variance carries SQUARED units. C.V. has NO units - which is exactly
      why it is the only fair way to compare two different data sets.
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — the 2-mark bank (about 90 minutes)**
Learn mean, median for ungrouped data, range, and mean deviation about the
mean and about the median for a small list of numbers.
Do five of each from `03-pyq-ap-board.md` Section A. Nothing else.
You now have a locked-in 2 marks.

**Day 1 evening — the table habit (about 90 minutes)**
Do three mean-deviation problems on discrete frequency tables and two on
continuous tables. The only new skill is the midpoint column
`x = (lower limit + upper limit)/2`. That is it.
You now have a locked-in 4 marks.

**Day 2 morning — the step deviation method (about 2 hours)**
This is the single most valuable 2 hours in the chapter.
Do the SAME continuous distribution three times until the six-column table
(`class | f | x | u | fu | fu^2`) comes out of your pen automatically.
You now have a locked-in 7 marks.

**Day 2 evening — coefficient of variation (about 60 minutes)**
Two data sets, find mean and S.D. of each, find C.V. of each,
write the sentence: *"Since C.V. of X is less than C.V. of Y, X is more
consistent."* That final sentence carries marks. Never leave it out.

```
  TWO DAYS  ->  about 13 marks out of 75.
  There is no other chapter in Maths IIA with that return on effort.
```

---

## WHAT MAKES STUDENTS LOSE MARKS HERE (all four are avoidable)

```
  +-------------------------------------+-------------------------------+
  |  MISTAKE                            |  FIX                          |
  +-------------------------------------+-------------------------------+
  |  Dropping the modulus - writing     |  |x - a| is ALWAYS positive.  |
  |  -3 instead of 3 in the M.D. column |  Column can never hold a      |
  |                                     |  negative number.             |
  +-------------------------------------+-------------------------------+
  |  Using class limits instead of      |  Continuous data ALWAYS needs |
  |  midpoints for continuous data      |  x = (lower + upper)/2 first. |
  +-------------------------------------+-------------------------------+
  |  Forgetting to multiply by h^2      |  Step deviation variance has  |
  |  in the step deviation variance     |  h^2 outside the bracket.     |
  +-------------------------------------+-------------------------------+
  |  Finding both C.V.s and then not    |  Write the conclusion         |
  |  writing which set is consistent    |  sentence. It is worth marks. |
  +-------------------------------------+-------------------------------+
```

---

## ONE LAST THING

Every question in this chapter is answered by drawing a table and adding
up columns. Draw the table with a ruler, label the column headings, and
show the totals row. Examiners award method marks for a correctly built
table even if the final arithmetic slips.

**Build the table. Always build the table.**
