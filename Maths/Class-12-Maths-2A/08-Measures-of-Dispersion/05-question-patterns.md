# Measures of Dispersion — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

**This chapter has fewer distinct shapes than any other chapter in Maths IIA,
and the METHOD NEVER CHANGES.** Learn the twenty-four patterns below and there
is nothing left that the board or EAPCET can ask you.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — RANGE AND COEFFICIENT OF RANGE                       2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the range" / "Find the coefficient of range"
  METHOD    1. L = largest value, S = smallest value.
               (For grouped data: L = upper boundary of the highest class,
                S = lower boundary of the lowest class.)
            2. Range = L - S
            3. Coefficient of range = (L - S)/(L + S)
  TRAP      The coefficient is a RATIO - no units, no percent sign.
            Do not confuse "range" with "coefficient of range";
            the question always asks for one specific one.
```

```
  PATTERN 2 — MEAN OF UNGROUPED DATA                               2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the mean of ..." followed by a plain list.
  METHOD    1. Add all the values -> sum x
            2. Count them -> n
            3. x_bar = sum x / n
  TRAP      Miscounting n when a value repeats. Count the ENTRIES,
            not the distinct values.
```

```
  PATTERN 3 — MEDIAN OF UNGROUPED DATA                             2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the median of ..." followed by a plain list.
  METHOD    1. SORT into ascending order. Always. No exceptions.
            2. n ODD  -> median = the ((n+1)/2)-th value
               n EVEN -> median = average of the (n/2)-th and
                         the (n/2 + 1)-th values
  TRAP      Not sorting. This is the single commonest error in the
            whole chapter and it destroys everything that follows.
```

```
  PATTERN 4 — MEDIAN OF A GROUPED (CONTINUOUS) DISTRIBUTION        2 or 4 marks
  --------------------------------------------------------------------------
  TRIGGER   Class intervals given, and the word "median" appears.
  METHOD    1. Build a cumulative frequency (c.f.) column.
            2. N = sum of f.  Compute N/2.
            3. MEDIAN CLASS = the first class whose c.f. reaches N/2.
            4. Median = l + [ (N/2 - cf)/f ] x h
                  l  = lower boundary of the median class
                  cf = c.f. of the class BEFORE the median class
                  f  = frequency OF the median class
                  h  = class width
  TRAP      Using the c.f. OF the median class instead of the c.f.
            of the class BEFORE it. Mark the two rows clearly.
```

```
  PATTERN 5 — MEAN DEVIATION ABOUT THE MEAN, UNGROUPED DATA        2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the mean deviation about the mean for 3, 6, 10, ..."
  METHOD    1. x_bar = sum x / n
            2. Three-column table:   x | x - x_bar | | x - x_bar |
            3. CHECK: the middle column must total exactly ZERO.
            4. Total the last column.
            5. M.D. = that total / n
  TRAP      Leaving a minus sign in the modulus column.
            Every entry there must be positive or zero.
```

```
  PATTERN 6 — MEAN DEVIATION ABOUT THE MEDIAN, UNGROUPED DATA      2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the mean deviation about the median for 13, 17, 16, ..."
  METHOD    1. SORT the data.
            2. Find the median (Pattern 3).
            3. Table:   x | | x - M |
            4. M.D. = (total of the last column) / n
  TRAP      (a) Forgetting to sort.
            (b) Expecting the deviations to total zero - they do NOT
                when you centre on the median. Only the mean gives 0.
```

```
  PATTERN 7 — MEAN DEVIATION FOR A DISCRETE FREQUENCY TABLE        4 marks
  --------------------------------------------------------------------------
  TRIGGER   A two-row table  x / f  and the words "mean deviation".
  METHOD    ABOUT THE MEAN:
            1. Column f x. Total it. Total f -> N.
            2. x_bar = sum(fx)/N
            3. Column | x - x_bar |
            4. Column f | x - x_bar |. Total it.
            5. M.D. = total / N

            ABOUT THE MEDIAN:
            1. Column c.f. Find N and N/2.
            2. Median = the x beside the first c.f. reaching N/2.
               (If N is even, check the (N/2)-th and (N/2 + 1)-th values.)
            3. Columns | x - M |  and  f | x - M |. Total.
            4. M.D. = total / N
  TRAP      Multiplying f by x in the last column instead of by
            | x - a |. LABEL EVERY COLUMN HEADING.
```

```
  PATTERN 8 — MEAN DEVIATION FOR A CONTINUOUS DISTRIBUTION         4 marks
  --------------------------------------------------------------------------
  TRIGGER   Class intervals + frequencies + "mean deviation".
  METHOD    1. MIDPOINT column FIRST:  x = (lower + upper)/2
            2. From here it is EXACTLY Pattern 7. Nothing else differs.
            3. Six columns:  class | f | x | fx | |x - a| | f|x - a|
  TRAP      Using the class limits (like 20 or 30) instead of the
            midpoint (25). This wrecks the entire table.
```

```
  PATTERN 9 — COEFFICIENT OF MEAN DEVIATION                        2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the coefficient of mean deviation."
  METHOD    Coefficient = M.D. / (the centre you used)
                        = M.D.(x_bar)/x_bar     if about the mean
                        = M.D.(M)/M             if about the median
            Multiply by 100 only if a percentage is asked for.
  TRAP      Dividing by n instead of by the mean or median.
            You already divided by n to get the M.D. itself.
```

```
  PATTERN 10 — "ABOUT WHICH MEASURE IS M.D. LEAST?"                2 marks
  --------------------------------------------------------------------------
  TRIGGER   A one-line theory question with no numbers.
  METHOD    Write:  "The mean deviation is least when taken about the
                     MEDIAN, because  sum |x - M| <= sum |x - a|
                     for every value of a."
  TRAP      Answering "the mean". It is the MEDIAN. Free two marks.
```

```
  PATTERN 11 — VARIANCE AND S.D. OF A SHORT LIST (DIRECT)          2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the variance / standard deviation of 6, 7, 10, ..."
            and the mean turns out to be a whole number.
  METHOD    1. x_bar = sum x / n
            2. Table:  x | x - x_bar | (x - x_bar)^2
            3. CHECK the middle column totals zero.
            4. Variance = (total of squares) / n
            5. S.D. = sqrt(variance)
  TRAP      Stopping at the variance when the question wanted the S.D.,
            or vice versa. Give BOTH if the question says "and".
```

```
  PATTERN 12 — VARIANCE BY THE SHORTCUT FORMULA                    2 or 4 marks
  --------------------------------------------------------------------------
  TRIGGER   The mean comes out as an ugly decimal, OR the question
            gives you  sum x  and  sum x^2  directly.
  METHOD    1. Column x^2. Total it.
            2. Variance = sum(x^2)/n  -  (x_bar)^2
               "mean of the squares minus square of the mean"
            3. S.D. = sqrt(variance)
  TRAP      sum(x^2) is NOT (sum x)^2. Square EACH value first,
            then add. These are wildly different numbers.
```

```
  PATTERN 13 — VARIANCE AND S.D. OF A DISCRETE FREQUENCY TABLE     4 marks
  --------------------------------------------------------------------------
  TRIGGER   A two-row table  x / f  and the word "variance" or
            "standard deviation".
  METHOD    1. Columns f x -> N and x_bar = sum(fx)/N
            2. If x_bar is whole:  columns (x - x_bar)^2 and
               f(x - x_bar)^2 ;  variance = total / N
               If x_bar is a decimal: columns x^2 and f x^2 ;
               variance = sum(f x^2)/N - (x_bar)^2
            3. S.D. = sqrt(variance)
  TRAP      Dividing by the number of DISTINCT x values instead of
            by N = sum of f.
```

```
  PATTERN 14 — VARIANCE AND S.D. OF A CONTINUOUS DISTRIBUTION      7 marks
              BY THE STEP DEVIATION METHOD
              *** THE MOST IMPORTANT PATTERN IN THE CHAPTER ***
  --------------------------------------------------------------------------
  TRIGGER   Class intervals + frequencies + "variance and standard
            deviation" (or "mean, variance and standard deviation").
            Check the class widths are all EQUAL - they nearly always are.
  METHOD    1. Midpoint  x = (lower + upper)/2
            2. h = class width.  A = the midpoint nearest the middle
               of the table (the assumed mean).
            3. u = (x - A)/h    -> small whole numbers, ..., -1, 0, 1, ...
            4. fu   = f x u
            5. fu^2 = fu x u        (NOT f x u^2 - one step fewer)
            6. Totals:  N = sum f ,  sum fu ,  sum fu^2
            7. MEAN     = A + (sum fu / N) x h
            8. VARIANCE = h^2 x [ sum fu^2/N  -  (sum fu/N)^2 ]
            9. S.D.     = sqrt(variance)
  TRAP      (a) FORGETTING THE h^2. Your answer will be 100 times
                too small. This is the single biggest mark-loser.
            (b) sum fu is often negative - remember its SQUARE is
                positive when you subtract it.
            (c) If the class widths are UNEQUAL you cannot use this
                method. Fall back to sum(fx^2)/N - x_bar^2.
```

```
  PATTERN 15 — MEAN, VARIANCE AND S.D. ALL IN ONE QUESTION         7 marks
  --------------------------------------------------------------------------
  TRIGGER   "Calculate the mean, variance and standard deviation of
             the following frequency distribution."
  METHOD    Exactly Pattern 14. The mean falls out of the same table
            for free - that is the point of the step deviation method.
  TRAP      Presenting the variance as the final answer and forgetting
            to square-root it, or forgetting to state the mean at all.
            Write all three answers on separate labelled lines.
```

```
  PATTERN 16 — COEFFICIENT OF VARIATION FROM A GIVEN MEAN AND S.D. 2 marks
  --------------------------------------------------------------------------
  TRIGGER   "The mean is 25 and the S.D. is 5. Find the C.V."
  METHOD    C.V. = (sigma / x_bar) x 100 , written as a PERCENTAGE.
  TRAP      Forgetting the x 100, or forgetting the % sign.
```

```
  PATTERN 17 — WORK BACKWARDS FROM THE C.V.                        2 marks
  --------------------------------------------------------------------------
  TRIGGER   "The C.V. is 60 and the S.D. is 21. Find the mean."
            (or C.V. and mean given, S.D. wanted)
  METHOD    Rearrange the one formula:
                 x_bar = ( sigma x 100 ) / C.V.
                 sigma = ( C.V. x x_bar ) / 100
  TRAP      Putting the 100 on the wrong side. Sanity-check your answer
            by plugging it back into C.V. = 100 sigma / mean.
```

```
  PATTERN 18 — COMPARE THE CONSISTENCY OF TWO DATA SETS            7 marks
              *** THE OTHER BIG 7-MARK QUESTION ***
  --------------------------------------------------------------------------
  TRIGGER   Two lists (or two frequency tables) side by side, plus a
            question containing one of these words:
                 consistent / stable / uniform / variable / variability
  METHOD    1. UNDERLINE the key word in the question paper.
            2. For SET 1: find the mean, then the variance, then the S.D.
            3. C.V.(1) = (sigma1/mean1) x 100
            4. Repeat all of that for SET 2.
            5. Draw a small summary table: set | mean | S.D. | C.V.
            6. WRITE THE CONCLUSION SENTENCE:
                 "Since C.V. of ... is less than C.V. of ... ,
                  ... is more consistent."
  TRAP      (a) Comparing the raw S.D.s instead of the C.V.s. If the
                means differ, the raw S.D. tells you nothing.
            (b) Doing every calculation perfectly and then not writing
                the conclusion. That sentence carries a mark.
            (c) The question said "more VARIABLE" but you answered with
                the smaller C.V. Read the word twice.
```

```
  PATTERN 19 — VARIANCE OF THE FIRST n NATURAL NUMBERS             2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the variance / S.D. of the first n natural numbers"
            or of 1, 2, 3, ..., 10.
  METHOD    Variance = ( n^2 - 1 ) / 12
            Mean     = ( n + 1 ) / 2
            S.D.     = sqrt[ (n^2 - 1)/12 ]
  TRAP      Reporting the variance when the S.D. was asked for.
            For n = 10 the variance is 8.25 but the S.D. is 2.87.
```

```
  PATTERN 20 — PROVE THE VARIANCE OF 1, 2, ..., n IS (n^2-1)/12    4 marks
  --------------------------------------------------------------------------
  TRIGGER   The word "prove" or "show that" with the natural numbers.
  METHOD    1. sum x = n(n+1)/2  ->  x_bar = (n+1)/2
            2. sum x^2 = n(n+1)(2n+1)/6
            3. Variance = sum(x^2)/n - (x_bar)^2
                        = (n+1)(2n+1)/6 - (n+1)^2/4
            4. Take (n+1)/12 out as a common factor:
                        = (n+1)[2(2n+1) - 3(n+1)]/12
                        = (n+1)(n-1)/12
                        = (n^2 - 1)/12
  TRAP      Sign slip in  4n + 2 - 3n - 3 = n - 1.  Write that line out.
```

```
  PATTERN 21 — EFFECT OF ADDING OR MULTIPLYING BY A CONSTANT       2 marks
  --------------------------------------------------------------------------
  TRIGGER   "If each observation is increased by 5 / multiplied by 3,
             find the new mean and variance."
  METHOD    ADD k       ->  mean + k ,   VARIANCE UNCHANGED
            MULTIPLY k  ->  mean x k ,   variance x k^2 ,  S.D. x |k|
            Both (y = ax + b) -> mean = a(mean) + b , variance = a^2 var
  TRAP      Multiplying the variance by k instead of by k^2.
            The "+ b" part NEVER affects the variance - ignore it.
```

```
  PATTERN 22 — FIND THE MISSING OBSERVATIONS                       4 marks
  --------------------------------------------------------------------------
  TRIGGER   "The mean of 5 observations is 4.4 and the variance is 8.24.
             Three of them are 1, 2, 6. Find the other two."
  METHOD    1. sum x = n x mean.  Subtract the known values -> x + y
            2. sum x^2 = n( variance + mean^2 ).
               Subtract the known squares -> x^2 + y^2
            3. 2xy = (x + y)^2 - (x^2 + y^2)   ->  xy
            4. Form  t^2 - (x+y)t + xy = 0  and solve.
            5. VERIFY by putting both values back into the mean.
  TRAP      Forgetting the identity  sum x^2 = n(variance + mean^2).
            Without it you cannot start. Write it in your formula list.
```

```
  PATTERN 23 — COMBINED MEAN AND COMBINED VARIANCE                 4 or 7 marks
  --------------------------------------------------------------------------
  TRIGGER   Two groups with their own sizes, means and S.D.s, then
            "find the mean and S.D. of all the observations together".
  METHOD    1. Combined mean = (n1 m1 + n2 m2)/(n1 + n2)
            2. d1 = m1 - combined mean ,  d2 = m2 - combined mean
            3. Combined variance
                 = [ n1(s1^2 + d1^2) + n2(s2^2 + d2^2) ] / (n1 + n2)
            4. Combined S.D. = sqrt(that)
  TRAP      (a) Taking the plain average of m1 and m2. It is WEIGHTED.
            (b) Omitting the d1^2 and d2^2 terms - they are the whole
                point, they account for the gap between the two centres.
            (c) Sanity check: the combined S.D. should normally be
                BIGGER than both individual S.D.s.
```

```
  PATTERN 24 — CORRECT THE MEAN AND S.D. AFTER A WRONG READING     4 marks
  --------------------------------------------------------------------------
  TRIGGER   "One observation was wrongly recorded as 12 instead of 21.
             Find the correct mean and standard deviation."
  METHOD    1. old sum x   = n x old mean
               correct sum = old sum - wrong + right
               correct mean = correct sum / n
            2. old sum x^2 = n( old variance + old mean^2 )
               correct sum x^2 = old sum x^2 - (wrong)^2 + (right)^2
            3. correct variance = correct sum x^2 / n - (correct mean)^2
            4. correct S.D. = sqrt(that)
  TRAP      Subtracting the wrong value from the sum of SQUARES without
            squaring it first. It is  - w^2 + c^2 , not  - w + c.
```

```
  PATTERN 25 — COMPARISON TABLE OF THE MEASURES (THEORY)           2 or 4 marks
  --------------------------------------------------------------------------
  TRIGGER   "State the merits and demerits of ..." /
            "Which is the best measure of dispersion? Why?" /
            "Distinguish between absolute and relative measures."
  METHOD    RANGE      simple, but uses only 2 values and is ruined by
                       an extreme value
            M.D.       uses all data, easy to interpret, but the modulus
                       blocks further algebra
            S.D.       BEST - uses all data, same units as the data,
                       allows algebra (variances combine), least affected
                       by sampling fluctuation
            C.V.       BEST for COMPARING two sets - unit-free
            Absolute measures carry units: range, M.D., S.D.
            Relative measures carry none: coefficient of range,
                       coefficient of M.D., coefficient of variation
  TRAP      Writing only "standard deviation is best" without the
            reasons. The reasons are where the marks are.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right-hand column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "Find the range and coefficient of range of 38, 70, 48, ..." | 1 |
| "Find the median of 20, 24, 31, 27, 29, ..." | 3 |
| "The median class of the following distribution is ..." | 4 |
| "Find the mean deviation about the mean for 3, 6, 10, 4, 9, 10" | 5 |
| "Find the mean deviation about the median for 13, 17, 16, 11, ..." | 6 |
| "x: 2 5 6 8 10 12 / f: 2 8 10 7 8 5. Find the M.D. about the mean." | 7 |
| "Classes 10-20, 20-30, ... Find the mean deviation about the mean." | 8 |
| "Find the coefficient of mean deviation." | 9 |
| "About which measure of central tendency is the M.D. least?" | 10 |
| "Find the variance and S.D. of 6, 7, 10, 12, 13, 4, 8, 12" | 11 |
| "For 10 observations sum x = 60 and sum x^2 = 1000. Find the S.D." | 12 |
| "x: 4 8 11 17 20 24 32 / f: 3 5 9 5 4 3 1. Find the variance." | 13 |
| **"Classes 30-40, 40-50, ... Find the variance and standard deviation."** | **14** |
| **"Calculate the mean, variance and S.D. of the following distribution."** | **15** |
| "The mean is 25 and the S.D. is 5. Find the coefficient of variation." | 16 |
| "The C.V. is 60 and the S.D. is 21. Find the arithmetic mean." | 17 |
| **"Which of the two shares is more stable in value?"** | **18** |
| **"Which team / batsman / section is more consistent?"** | **18** |
| "Find the variance of the first 10 natural numbers." | 19 |
| "Prove that the variance of the first n natural numbers is (n^2-1)/12." | 20 |
| "If each observation is increased by 5, what happens to the variance?" | 21 |
| "The variance of 20 observations is 5. Each is multiplied by 2. Find ..." | 21 |
| "The mean of 5 observations is 4.4 and variance 8.24. Three are 1, 2, 6 ..." | 22 |
| "Find the mean and S.D. of all 250 observations taken together." | 23 |
| "One observation was recorded as 12 instead of 21. Find the correct mean." | 24 |
| "Which is the best measure of dispersion and why?" | 25 |

---

# THE THREE PATTERNS THAT CARRY THE MOST MARKS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PATTERN 14 / 15   Step deviation variance & S.D.        7 marks   |
  |   PATTERN 18        C.V. consistency comparison           7 marks   |
  |   PATTERN 7 / 8     M.D. of a frequency table             4 marks   |
  |                                                                    |
  |   Master these three and you have 11 marks locked in every year.   |
  |   Add any Section A pattern (5, 6, 11, 19, 21) for 2 more = 13.    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
                    THE ONLY METHOD IN THIS CHAPTER
                                 |
        +------------------------+------------------------+
        |                        |                        |
   1. FIND THE            2. BUILD A TABLE          3. TOTAL THE
      CENTRE                 OF DISTANCES              LAST COLUMN
   (mean or median)          FROM THE CENTRE           AND DIVIDE
        |                        |                        |
        +------------------------+------------------------+
                                 |
                        Everything else is a
                        wrapper around this.
```

## The four-step plan

**STEP 1 — lock in Section A (2 marks). Time needed: about 90 minutes.**

```
  Practise ONLY these, five each:
      Pattern 5   M.D. about the mean, short list
      Pattern 6   M.D. about the median, short list
      Pattern 11  variance and S.D., short list
      Pattern 19  variance of first n naturals
      Pattern 21  add / multiply by a constant

  These five patterns cover every 2-mark question this chapter has
  ever produced. None of them takes more than four minutes.
```

**STEP 2 — lock in Section B (4 marks). Time needed: about 90 minutes.**

```
  Practise ONLY these, three each:
      Pattern 7   M.D. of a discrete frequency table
      Pattern 8   M.D. of a continuous distribution
      Pattern 13  variance and S.D. of a discrete table

  The single new skill compared with Step 1 is the MIDPOINT column.
  That is genuinely all that is new. Nothing else changes.
```

**STEP 3 — lock in Section C (7 marks). Time needed: about 2 hours.**

```
  Do Pattern 14 THREE TIMES on the same data set until the six columns

        class | f | x | u | fu | fu^2

  come out of your pen without thinking. Then do Pattern 18 twice.

  These two patterns between them are the Section C question in
  practically every sitting of Maths IIA.
```

**STEP 4 — the 10-minute exam-morning revision.**

```
  Write these out from memory on a rough sheet:

      1.  M.D. = sum f | x - a | / N
      2.  u = (x - A)/h
      3.  mean = A + (sum fu / N) x h
      4.  variance = h^2 [ sum fu^2/N - (sum fu/N)^2 ]
      5.  S.D. = sqrt(variance)
      6.  C.V. = (S.D./mean) x 100 ,  LOWER = MORE CONSISTENT
      7.  variance of 1..n = (n^2 - 1)/12
      8.  add k -> variance unchanged ; multiply k -> variance x k^2
      9.  sum x^2 = n(variance + mean^2)
     10.  M.D. is least about the MEDIAN

  If you can write those ten lines, you cannot lose a mark in this
  chapter.
```

## The realistic mark tally

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    Section A   Pattern 5, 6, 11, 19 or 21     ->    2 marks     |
  |    Section B   Pattern 7, 8 or 13             ->    4 marks     |
  |    Section C   Pattern 14/15 or 18            ->    7 marks     |
  |                                                     ---------   |
  |                                                     13 marks    |
  |                                                                 |
  |    Maths IIA is out of 75.  Pass mark is 26.                    |
  |                                                                 |
  |    This chapter is HALF a pass, and it is the half that         |
  |    requires no cleverness at all - only a ruler, a pen,         |
  |    and the willingness to draw a table.                         |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The last word

```
  There is no chapter in the whole of Maths IIA where the method
  changes less from year to year.

  The board cannot ask you to "spot" anything.
  It cannot ask you to remember an obscure identity.
  It cannot give you a question that needs an idea you have not seen.

  It can only give you a list or a table and ask you to grind it.

  Draw the table. Label the columns. Total them. Divide.

  Then write the answer, box it, and move on.
```
