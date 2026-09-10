# Random Variables and Probability Distributions — Concepts From Zero

Read this with a pen in your hand. Every worked example is written out with every
single step — copy them into a notebook exactly as they appear here.

Nothing in this chapter needs you to be good at maths. It needs you to be able to
**make a table and add up a column**. That is genuinely all it is.

One promise before you start: by the end of TOPIC 8 you will already be able to
answer the 7-mark question that BIEAP asks from this chapter almost every year.

---

# ==========================================================
# TOPIC 1 — WHAT IS A RANDOM VARIABLE?
# ==========================================================

## 1.1 The problem it solves

In Chapter 9 the outcomes of an experiment were **words and pictures**:
`HH`, `HT`, `TH`, `TT` ... the king of hearts ... a red ball.

You cannot do arithmetic with a picture of a king of hearts. You cannot find the
"average" of `{HH, HT, TH, TT}`.

So mathematicians invented a machine that turns every outcome into a **number**.
That machine is called a **random variable**.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   A RANDOM VARIABLE is a rule (a FUNCTION) that gives one real    |
  |   number to every outcome in the sample space S.                  |
  |                                                                   |
  |                        X :  S  --->  R                            |
  |                                                                   |
  |   We write random variables with CAPITAL letters:  X, Y, Z.       |
  |   We write the values they take with small letters: x, y, z.      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 1.2 The picture

Toss two coins. Let `X` = "the number of heads".

```
     SAMPLE SPACE S            THE MACHINE X          VALUES of X
     (outcomes)                "count the heads"      (numbers)

     +--------+                                        +-----+
     |   HH   | -------------------------------------> |  2  |
     +--------+                                        +-----+
     +--------+                                        +-----+
     |   HT   | ---------\                             |  1  |
     +--------+           >-------------------------->  +-----+
     +--------+          /
     |   TH   | ---------/
     +--------+                                        +-----+
     +--------+                                        |  0  |
     |   TT   | -------------------------------------> +-----+
     +--------+

     n(S) = 4                                          RANGE of X
                                                       = { 0, 1, 2 }
```

Notice two things:

1. **Every** outcome gets a number. Nothing is left out.
2. **Two different outcomes may get the SAME number** (`HT` and `TH` both give 1).
   That is completely allowed. It is a function, not a one-to-one matching.

Everyday analogy: think of an exam. Every student (outcome) gets one mark (number).
Two students can get the same mark. Every student must get some mark. The "marks"
rule is exactly a random variable.

## 1.3 The RANGE of a random variable

The **range** of `X` is simply the set of all numbers `X` can produce.

```
  EXPERIMENT                       X = ...                 RANGE of X
  ------------------------------   --------------------    ---------------
  Toss 2 coins                     number of heads         { 0, 1, 2 }
  Toss 3 coins                     number of heads         { 0, 1, 2, 3 }
  Throw 1 die                      number on top           { 1,2,3,4,5,6 }
  Throw 2 dice                     sum of the numbers      { 2,3,...,12 }
  Throw 2 dice                     difference (bigger-     { 0,1,2,3,4,5 }
                                   smaller)
  Draw 2 balls from a bag          number of black balls   { 0, 1, 2 }
  Draw 2 cards                     number of aces          { 0, 1, 2 }
  Toss a coin till a head shows    number of tosses        { 1, 2, 3, ... }
                                                           (infinite!)
```

> **TRAP:** The range of `X` is a set of NUMBERS, not a set of outcomes.
> Write `Range = {0, 1, 2}`, never `Range = {HH, HT, TH, TT}`. In a 2-mark
> question this alone can cost you a mark.

---

## WORKED EXAMPLE 1.1

**Two dice are thrown. `X` = the sum of the two numbers. Write the range of `X`
and find `P(X = 5)`.**

```
  SOLUTION

  Smallest possible sum  =  1 + 1  =  2
  Largest  possible sum  =  6 + 6  =  12
  Every whole number in between is possible.

      RANGE of X  =  { 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 }

  Now P(X = 5).   n(S) = 6 x 6 = 36

  Which outcomes give a sum of 5?
      (1,4) , (2,3) , (3,2) , (4,1)        ->   4 outcomes

                    4        1
      P(X = 5)  =  ----  =  ---
                    36       9
```

---

## WORKED EXAMPLE 1.2

**A bag has 3 red and 2 green balls. Two balls are drawn together.
`X` = number of green balls drawn. Write the range of `X`.**

```
  SOLUTION

  You draw exactly 2 balls. Out of those 2, the number of green ones can be
  0 (both red), 1 (one of each) or 2 (both green).
  It cannot be 3 -- there are only 2 green balls in the bag anyway.

      RANGE of X  =  { 0, 1, 2 }
```

---

# ==========================================================
# TOPIC 2 — DISCRETE AND CONTINUOUS RANDOM VARIABLES
# ==========================================================

## 2.1 The difference in one sentence

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   DISCRETE     :  you can LIST the values, one by one, with       |
  |                   gaps between them.  (0, 1, 2, 3, ...)           |
  |                   Usually the answer to "HOW MANY?"               |
  |                                                                   |
  |   CONTINUOUS   :  the values fill up a whole INTERVAL with no     |
  |                   gaps.  (any number between 0 and 5)             |
  |                   Usually the answer to "HOW MUCH?"               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 2.2 The picture

```
   DISCRETE                             CONTINUOUS

   P(x)                                  f(x)
    ^                                     ^
    |         |                           |        ______
    |    |    |                           |      /        \
    |    |    |    |                      |     /          \
    |  | |    |    |   |                  |    /            \
    +--+-+----+----+---+---> x            +---/--------------\----> x
       0 1    2    3   4                     0                5

   separate SPIKES with gaps            one smooth CURVE, no gaps
   between them                         (area under it = 1)

   P(X = 2) is a genuine number         P(X = 2) = 0 exactly
   like 0.3                             (a single point has no width)

   we use  P(x)                         we use  f(x), a "density"
   sum of all P(x) = 1                  total AREA under f(x) = 1
```

## 2.3 Examples you must be able to give

| DISCRETE (counting) | CONTINUOUS (measuring) |
|---|---|
| Number of heads when 5 coins are tossed | Height of a student |
| Number on a thrown die | Weight of a bag of rice |
| Number of defective bulbs in a box of 20 | Time a bus is late |
| Number of accidents on a road in a day | Temperature at noon tomorrow |
| Number of cars passing a signal in a minute | Life of an electric bulb in hours |
| Number of children in a family | Amount of rainfall in a day |

The quick test: **if you can count it on your fingers it is discrete; if you need
a ruler, a clock or a weighing machine it is continuous.**

> **TRAP:** "Number of cars in a minute" is DISCRETE (you count cars) even though
> "a minute" sounds continuous. Look at what X measures, not at the experiment.

**In the AP Inter exam every single numerical is about a DISCRETE random variable.**
Continuous random variables appear only in a 2-mark "define / give an example"
question. Learn the definition and two examples and move on.

---

# ==========================================================
# TOPIC 3 — THE PROBABILITY DISTRIBUTION OF A DISCRETE
#           RANDOM VARIABLE
# ==========================================================

## 3.1 What it is

A **probability distribution** is just a two-row table: the values `X` can take,
and the probability of each.

For two coins, `X` = number of heads:

```
  +----------+--------+--------+--------+
  |    x     |   0    |   1    |   2    |
  +----------+--------+--------+--------+
  |   P(x)   |  1/4   |  2/4   |  1/4   |
  +----------+--------+--------+--------+
                            \
                             the outcome HT and the outcome TH
                             both give X = 1, so we ADD their
                             probabilities:  1/4 + 1/4 = 2/4
```

The function `P(x) = P(X = x)` is called the **probability mass function**
(pmf) — "mass" because each value carries a lump of probability.

## 3.2 THE TWO CONDITIONS — learn these words

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   A function P(x) is a PROBABILITY DISTRIBUTION  if and only if   |
  |                                                                   |
  |     CONDITION 1     P(x)  >=  0     for every x                   |
  |                     (in fact  0 <= P(x) <= 1  -- no probability   |
  |                      can be negative or bigger than 1)            |
  |                                                                   |
  |     CONDITION 2     sum of ALL the P(x)  =  1                     |
  |                     (something must happen)                       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Condition 2 is the **most useful single fact in this chapter**. It is how you find
an unknown `k`, and it is how you check your own work for free.

Everyday analogy: cut a chapati into pieces. No piece can be a negative size
(condition 1), and all the pieces together must make exactly one chapati
(condition 2). A probability distribution is a chapati cut into pieces.

---

## WORKED EXAMPLE 3.1

**Is the following a probability distribution?**

```
     x     :   1      2      3      4
    P(x)   :  0.2    0.3    0.4    0.1
```

```
  SOLUTION

  CONDITION 1 : every value 0.2, 0.3, 0.4, 0.1 is between 0 and 1.   OK

  CONDITION 2 : 0.2 + 0.3 + 0.4 + 0.1  =  1.0                        OK

  Both conditions hold  ->  YES, it IS a probability distribution.
```

---

## WORKED EXAMPLE 3.2

**Is this one?**

```
     x     :   0      1      2      3
    P(x)   :  0.3    0.5    0.4   -0.2
```

```
  SOLUTION

  CONDITION 1 : P(3) = -0.2  which is NEGATIVE.       FAILS

  (The sum is 0.3 + 0.5 + 0.4 - 0.2 = 1.0, so condition 2 is fine,
   but ONE failure is enough.)

  ->  NO. It is not a probability distribution, because a probability
      can never be negative.
```

> **TRAP:** Students check only that the sum is 1. Always check BOTH conditions.
> Examiners deliberately make the sum come to 1 with a negative entry hidden in it.

---

# ==========================================================
# TOPIC 4 — BUILDING THE DISTRIBUTION TABLE
# ==========================================================

This is the skill that carries the whole chapter. There is a fixed 4-step recipe.

```
  +-------------------------------------------------------------------+
  |   THE RECIPE                                                      |
  |                                                                   |
  |   STEP 1   Write the sample space S and find n(S).                |
  |   STEP 2   Work out which value of X each outcome gives.          |
  |   STEP 3   For each value x, count the outcomes that give it.     |
  |   STEP 4   P(x) = (that count) / n(S). Then CHECK the sum is 1.   |
  +-------------------------------------------------------------------+
```

## 4.1 Coins

---

## WORKED EXAMPLE 4.1 — three coins

**Three coins are tossed. `X` = the number of heads. Find the probability
distribution of `X`.**

```
  SOLUTION

  STEP 1   S = { HHH, HHT, HTH, THH, HTT, THT, TTH, TTT }
           n(S) = 2^3 = 8

  STEP 2   Count the heads in each:

           HHH -> 3
           HHT -> 2      HTH -> 2      THH -> 2
           HTT -> 1      THT -> 1      TTH -> 1
           TTT -> 0

  STEP 3   value x        outcomes giving it        how many
           -------        ------------------        --------
              0           TTT                          1
              1           HTT, THT, TTH                3
              2           HHT, HTH, THH                3
              3           HHH                          1
                                                    -------
                                                       8   = n(S)  OK

  STEP 4   THE PROBABILITY DISTRIBUTION

  +----------+--------+--------+--------+--------+
  |    x     |   0    |   1    |   2    |   3    |
  +----------+--------+--------+--------+--------+
  |   P(x)   |  1/8   |  3/8   |  3/8   |  1/8   |
  +----------+--------+--------+--------+--------+

  CHECK :   1/8 + 3/8 + 3/8 + 1/8  =  8/8  =  1        CORRECT
```

Notice the pattern `1, 3, 3, 1` — those are the numbers `3C0, 3C1, 3C2, 3C3`.
That is your first glimpse of the **binomial distribution** (TOPIC 10).

---

## WORKED EXAMPLE 4.2 — two dice, the sum

**Two dice are thrown. `X` = the sum. Find the distribution of `X`.**

```
  SOLUTION

  n(S) = 6 x 6 = 36.  Draw the grid of sums once:

              SECOND DIE
           1     2     3     4     5     6
        +-----+-----+-----+-----+-----+-----+
    1   |  2  |  3  |  4  |  5  |  6  |  7  |
        +-----+-----+-----+-----+-----+-----+
    2   |  3  |  4  |  5  |  6  |  7  |  8  |
 F      +-----+-----+-----+-----+-----+-----+
 I  3   |  4  |  5  |  6  |  7  |  8  |  9  |
 R      +-----+-----+-----+-----+-----+-----+
 S  4   |  5  |  6  |  7  |  8  |  9  | 10  |
 T      +-----+-----+-----+-----+-----+-----+
    5   |  6  |  7  |  8  |  9  | 10  | 11  |
 D      +-----+-----+-----+-----+-----+-----+
 I  6   |  7  |  8  |  9  | 10  | 11  | 12  |
 E      +-----+-----+-----+-----+-----+-----+

  Count how many boxes hold each sum (count along the diagonals):

    x     :  2   3   4   5   6   7   8   9  10  11  12
   count  :  1   2   3   4   5   6   5   4   3   2   1
                                                        sum = 36  OK

  THE DISTRIBUTION

  +------+------+------+------+------+------+------+------+------+------+------+------+
  |  x   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |  9   |  10  |  11  |  12  |
  +------+------+------+------+------+------+------+------+------+------+------+------+
  | P(x) | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 |
  +------+------+------+------+------+------+------+------+------+------+------+------+

  CHECK :  (1+2+3+4+5+6+5+4+3+2+1)/36  =  36/36  =  1        CORRECT

  It is a perfect triangle, tallest at 7. That is why 7 is the most
  likely total with two dice.
```

---

## WORKED EXAMPLE 4.3 — balls from a bag (no replacement)

**A bag contains 4 white and 3 black balls. Two balls are drawn at random
together. `X` = the number of black balls drawn. Find the distribution of `X`.**

```
  SOLUTION

  Total balls = 4 + 3 = 7.  Choosing 2 out of 7 (order does not matter):

      n(S) = 7C2 = (7 x 6)/(2 x 1) = 21

  X can be 0, 1 or 2.

  X = 0  :  both balls WHITE
            choose 2 white from 4  ->  4C2 = 6
            P(X = 0) = 6/21

  X = 1  :  one white AND one black
            4C1 x 3C1 = 4 x 3 = 12
            P(X = 1) = 12/21

  X = 2  :  both balls BLACK
            3C2 = 3
            P(X = 2) = 3/21

  THE DISTRIBUTION

  +----------+--------+--------+--------+
  |    x     |   0    |   1    |   2    |
  +----------+--------+--------+--------+
  |   P(x)   |  6/21  | 12/21  |  3/21  |
  +----------+--------+--------+--------+

  CHECK :  (6 + 12 + 3)/21  =  21/21  =  1        CORRECT
```

> **TRAP:** For `X = 1` you must MULTIPLY `4C1 x 3C1`, not add. "One white AND
> one black" — the word AND means multiply.

---

## WORKED EXAMPLE 4.4 — cards

**Two cards are drawn at random from a well-shuffled pack of 52.
`X` = the number of aces. Find the distribution of `X`.**

```
  SOLUTION

  n(S) = 52C2 = (52 x 51)/2 = 1326
  There are 4 aces and 48 non-aces.

  X = 0  :  both non-aces      48C2 = (48 x 47)/2 = 1128
  X = 1  :  one ace, one not   4C1 x 48C1 = 4 x 48 = 192
  X = 2  :  both aces          4C2 = 6

  CHECK the counts first :  1128 + 192 + 6 = 1326 = n(S)   CORRECT

  +----------+-------------+------------+-----------+
  |    x     |      0      |     1      |     2     |
  +----------+-------------+------------+-----------+
  |   P(x)   |  1128/1326  |  192/1326  |   6/1326  |
  +----------+-------------+------------+-----------+
  | reduced  |   188/221   |   32/221   |   1/221   |
  +----------+-------------+------------+-----------+

  (divide top and bottom by 6:  1128/6 = 188, 192/6 = 32, 6/6 = 1,
   1326/6 = 221)

  CHECK :  (188 + 32 + 1)/221  =  221/221  =  1        CORRECT
```

---

# ==========================================================
# TOPIC 5 — FINDING THE UNKNOWN CONSTANT k
# ==========================================================

This is the single most asked short question from the chapter. It is one line long.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     THE ONLY IDEA:      sum of all P(x)  =  1                     |
  |                                                                   |
  |     Add up everything in the P(x) row, put it equal to 1,         |
  |     and solve for k.                                              |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

## WORKED EXAMPLE 5.1 — the easiest kind

**Find `k`:**

```
     x     :   0     1     2     3
    P(x)   :   k    2k    3k    4k
```

```
  SOLUTION

     k + 2k + 3k + 4k  =  1
                  10k  =  1
                    k  =  1/10  =  0.1

  So the distribution is  0.1 , 0.2 , 0.3 , 0.4
  CHECK :  0.1 + 0.2 + 0.3 + 0.4 = 1        CORRECT
```

---

## WORKED EXAMPLE 5.2 — mixed numbers and k

**A random variable `X` has the distribution below. Find `k`, then `P(X < 3)`
and `P(X >= 3)`.**

```
     x     :   0     1     2     3     4     5
    P(x)   :  0.1    k    0.2   2k    0.3   3k
```

```
  SOLUTION

  STEP 1   Sum = 1

     0.1 + k + 0.2 + 2k + 0.3 + 3k  =  1
              (0.1 + 0.2 + 0.3) + 6k = 1
                             0.6 + 6k = 1
                                   6k = 0.4
                                    k = 0.4/6 = 1/15

  STEP 2   Write the whole table with thirtieths so the arithmetic is easy.

           0.1 = 3/30 ,  k = 1/15 = 2/30 ,  0.2 = 6/30 ,
           2k = 2/15 = 4/30 ,  0.3 = 9/30 ,  3k = 3/15 = 6/30

  +----------+------+------+------+------+------+------+
  |    x     |  0   |  1   |  2   |  3   |  4   |  5   |
  +----------+------+------+------+------+------+------+
  |   P(x)   | 3/30 | 2/30 | 6/30 | 4/30 | 9/30 | 6/30 |
  +----------+------+------+------+------+------+------+

  CHECK :  (3+2+6+4+9+6)/30 = 30/30 = 1        CORRECT

  STEP 3   P(X < 3)  means X = 0, 1 or 2   (STRICTLY less than 3)

           = 3/30 + 2/30 + 6/30  =  11/30

  STEP 4   P(X >= 3)  =  1 - P(X < 3)  =  1 - 11/30  =  19/30

           (check the long way: 4/30 + 9/30 + 6/30 = 19/30    CORRECT)
```

> **TRAP:** `P(X < 3)` does NOT include `x = 3`. `P(X <= 3)` DOES.
> Read the inequality sign twice before you start adding.

---

## WORKED EXAMPLE 5.3 — k appears with powers (the 7-mark version)

**The range of a random variable `X` is `{0, 1, 2}` and**

```
     P(X = 0) = 3c^3 ,   P(X = 1) = 4c - 10c^2 ,   P(X = 2) = 5c - 1
```

**Find `c`.**

```
  SOLUTION

  STEP 1   Sum of the probabilities = 1

     3c^3 + (4c - 10c^2) + (5c - 1)  =  1
     3c^3 - 10c^2 + 4c + 5c - 1      =  1
     3c^3 - 10c^2 + 9c - 1           =  1
     3c^3 - 10c^2 + 9c - 2           =  0

  STEP 2   Solve the cubic. Try c = 1/3 :

     3(1/27) - 10(1/9) + 9(1/3) - 2
        = 1/9 - 10/9 + 3 - 2
        = -9/9 + 1
        = -1 + 1  =  0            so c = 1/3 IS a root.

     Divide out (3c - 1) :

     3c^3 - 10c^2 + 9c - 2  =  (3c - 1)(c^2 - 3c + 2)
                            =  (3c - 1)(c - 1)(c - 2)

     Roots :   c = 1/3 ,  c = 1 ,  c = 2

  STEP 3   REJECT the impossible roots (this is where the marks are!)

     c = 1  ->  P(X = 2) = 5(1) - 1 = 4        4 > 1, IMPOSSIBLE
     c = 2  ->  P(X = 2) = 5(2) - 1 = 9        9 > 1, IMPOSSIBLE
     c = 1/3 ->  all three come out between 0 and 1.   ACCEPT

              c  =  1/3

  STEP 4   The actual distribution

     P(X = 0) = 3(1/3)^3 = 3/27 = 1/9
     P(X = 1) = 4/3 - 10/9 = 12/9 - 10/9 = 2/9
     P(X = 2) = 5/3 - 1 = 2/3 = 6/9

  +----------+------+------+------+
  |    x     |  0   |  1   |  2   |
  +----------+------+------+------+
  |   P(x)   | 1/9  | 2/9  | 6/9  |
  +----------+------+------+------+

  CHECK :  (1 + 2 + 6)/9 = 9/9 = 1        CORRECT
```

> **TRAP:** You MUST reject `c = 1` and `c = 2`. A student who writes all three
> roots and stops loses 2 of the 7 marks. Always test each root against
> `0 <= P(x) <= 1`.

---

# ==========================================================
# TOPIC 6 — THE CUMULATIVE DISTRIBUTION FUNCTION
# ==========================================================

## 6.1 What it means

`P(x)` answers "what is the chance of **exactly** x?"
`F(x)` answers "what is the chance of **x or less**?"

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    CUMULATIVE DISTRIBUTION FUNCTION                               |
  |                                                                   |
  |         F(x)  =  P(X <= x)  =  sum of all P(t) for t <= x         |
  |                                                                   |
  |    It is a RUNNING TOTAL of the P(x) row.                         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Everyday analogy: `P(x)` is your mark in each individual test.
`F(x)` is your total marks so far in the year.

---

## WORKED EXAMPLE 6.1

**Find the cumulative distribution function for `X` = number of heads in 3 tosses.**

```
  SOLUTION

  Start from the distribution found in Worked Example 4.1:

  +----------+--------+--------+--------+--------+
  |    x     |   0    |   1    |   2    |   3    |
  +----------+--------+--------+--------+--------+
  |   P(x)   |  1/8   |  3/8   |  3/8   |  1/8   |
  +----------+--------+--------+--------+--------+

  Now just keep a running total:

  +----------+--------+--------+--------+--------+
  |    x     |   0    |   1    |   2    |   3    |
  +----------+--------+--------+--------+--------+
  |   F(x)   |  1/8   |  4/8   |  7/8   |  8/8   |
  +----------+--------+--------+--------+--------+
                 |        |        |        |
              1/8     1/8+3/8   4/8+3/8  7/8+1/8
                                            = 1

  Written out fully:

        F(x) = 0        for x < 0
        F(x) = 1/8      for 0 <= x < 1
        F(x) = 4/8      for 1 <= x < 2
        F(x) = 7/8      for 2 <= x < 3
        F(x) = 1        for x >= 3
```

## 6.2 The staircase picture

```
   F(x)
    1  |                             +--------------
       |                             |
  7/8  |                  +----------+
       |                  |
  4/8  |        +---------+
       |        |
  1/8  |--------+
       |
    0  +--------+---------+----------+--------------> x
       0        1         2          3

   It only goes UP, never down. It starts at 0 and ends at 1.
   The HEIGHT of each step is P(x) itself.
```

## 6.3 The three facts to quote

```
  +-------------------------------------------------------------------+
  |   1.   F is never decreasing:  a < b  =>  F(a) <= F(b)            |
  |   2.   F(-infinity) = 0    and    F(+infinity) = 1                |
  |   3.   P(X = x)  =  F(x)  -  F(previous value)                    |
  |        P(a < X <= b)  =  F(b) - F(a)                              |
  +-------------------------------------------------------------------+
```

Fact 3 works backwards too: if the exam gives you `F(x)` and asks for `P(x)`,
just subtract each step from the one before it.

---

# ==========================================================
# TOPIC 7 — MEAN (EXPECTATION) OF A DISCRETE RANDOM VARIABLE
# ==========================================================

## 7.1 The idea

The **mean** is the long-run average value of `X` — what you would get if you ran
the experiment thousands of times and averaged the answers.

It is a **weighted average**: values with a bigger probability pull the average
towards themselves.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     MEAN  =  EXPECTATION  =  mu  =  E(X)                          |
  |                                                                   |
  |         E(X)  =  sum of  x . P(x)                                 |
  |                                                                   |
  |     "multiply each value by its probability, then add up"         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Everyday analogy: your class has 40 students. 10 scored 40 marks, 30 scored 80.
The class average is not `(40 + 80)/2 = 60`. It is
`40(10/40) + 80(30/40) = 10 + 60 = 70`, because more students scored 80.
The probability is the weight.

> **TRAP:** The mean does not have to be one of the values `X` can take.
> "The mean number of heads is 1.5" is perfectly correct even though you can
> never actually see 1.5 heads. Do not round it off.

---

## WORKED EXAMPLE 7.1

**Find the mean number of heads when 3 coins are tossed.**

```
  SOLUTION -- always rule the table

  +--------+----------+---------------+
  |   x    |   P(x)   |   x . P(x)    |
  +--------+----------+---------------+
  |   0    |   1/8    |   0 x 1/8 = 0 |
  |   1    |   3/8    |   1 x 3/8 = 3/8 |
  |   2    |   3/8    |   2 x 3/8 = 6/8 |
  |   3    |   1/8    |   3 x 1/8 = 3/8 |
  +--------+----------+---------------+
  | TOTAL  |  8/8 = 1 |   12/8        |
  +--------+----------+---------------+
                 ^            ^
                 |            |
            must be 1     this is the MEAN

       E(X)  =  12/8  =  3/2  =  1.5

  Sensible? You toss 3 fair coins, so on average half of them
  (1.5) come up heads. Yes.
```

---

## WORKED EXAMPLE 7.2

**A die is thrown. `X` = the number shown. Find `E(X)`.**

```
  SOLUTION

  +--------+----------+---------------+
  |   x    |   P(x)   |   x . P(x)    |
  +--------+----------+---------------+
  |   1    |   1/6    |     1/6       |
  |   2    |   1/6    |     2/6       |
  |   3    |   1/6    |     3/6       |
  |   4    |   1/6    |     4/6       |
  |   5    |   1/6    |     5/6       |
  |   6    |   1/6    |     6/6       |
  +--------+----------+---------------+
  | TOTAL  |    1     |    21/6       |
  +--------+----------+---------------+

       E(X)  =  21/6  =  7/2  =  3.5
```

---

## WORKED EXAMPLE 7.3 — a "fair game" question

**A person pays Rs 10 to throw a die. He receives Rs 100 if he throws a 6, and
nothing otherwise. Find his expected gain.**

```
  SOLUTION

  Let X = his NET gain in rupees.

     throws a 6      :  gains 100 - 10 = +90     probability 1/6
     anything else   :  gains  0  - 10 = -10     probability 5/6

  +--------+----------+---------------+
  |   x    |   P(x)   |   x . P(x)    |
  +--------+----------+---------------+
  |  +90   |   1/6    |    90/6       |
  |  -10   |   5/6    |   -50/6       |
  +--------+----------+---------------+
  | TOTAL  |    1     |    40/6       |
  +--------+----------+---------------+

       E(X) = 40/6 = 20/3 = Rs 6.67 (approximately)

  He gains about Rs 6.67 per game on average, so the game favours HIM.
```

---

# ==========================================================
# TOPIC 8 — VARIANCE AND STANDARD DEVIATION
# ==========================================================

## 8.1 The idea

The mean tells you where the values sit **on average**. The **variance** tells you
how **spread out** they are around that mean.

```
   SMALL variance                       LARGE variance

   P(x)                                 P(x)
    ^                                    ^
    |     | |                            |  |        |
    |   | | | |                          |  |   |    |   |
    +---+-+-+-+-+---> x                  +--+---+----+---+---> x
          mean                              mean

   values huddle near the mean          values scatter far from the mean
   (a consistent batsman)               (a hit-or-miss batsman)
```

## 8.2 The formulas

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   DEFINITION       Var(X)  =  E[ (X - mu)^2 ]                     |
  |                            =  sum of (x - mu)^2 . P(x)            |
  |                                                                   |
  |   WORKING FORMULA  (use this one -- it is far faster)             |
  |                                                                   |
  |       Var(X)  =  E(X^2)  -  [ E(X) ]^2                            |
  |                                                                   |
  |               =  sum of x^2 . P(x)   -   ( mean )^2               |
  |                                                                   |
  |   STANDARD DEVIATION      sigma  =  sqrt( Var(X) )                |
  |                                                                   |
  |   Variance is written  sigma^2  or  Var(X).                       |
  |   Variance is NEVER negative.                                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

> **TRAP:** `Var(X) = E(X^2) - [E(X)]^2`. The last term is the **mean squared**,
> NOT `E(X)` and NOT `E(X^2)`. Writing `E(X^2) - E(X)` is the most common single
> error in this whole chapter. Square the mean.

> **TRAP:** `E(X^2)` is NOT `[E(X)]^2`. To get `E(X^2)` you square each **x**
> first and then multiply by `P(x)`. You do not square the answer for the mean.

## 8.3 THE FOUR-COLUMN LAYOUT — draw this every single time

```
  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |        |          |              |                  |
  +--------+----------+--------------+------------------+
  | TOTAL  |    1     |    = MEAN    |    = E(X^2)      |
  +--------+----------+--------------+------------------+

  Then, underneath:      Var(X) = E(X^2) - (MEAN)^2
                         SD     = sqrt(Var)
```

A useful shortcut for the last column: `x^2 P(x) = x . (x P(x))`, so you can just
multiply the third column by `x` again instead of starting fresh.

---

## WORKED EXAMPLE 8.1 — three coins

**Find the mean, variance and standard deviation of `X` = number of heads
when 3 coins are tossed.**

```
  SOLUTION

  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |   0    |   1/8    |      0       |       0          |
  |   1    |   3/8    |     3/8      |    1(3/8) = 3/8  |
  |   2    |   3/8    |     6/8      |    4(3/8) = 12/8 |
  |   3    |   1/8    |     3/8      |    9(1/8) = 9/8  |
  +--------+----------+--------------+------------------+
  | TOTAL  |    1     |    12/8      |      24/8        |
  +--------+----------+--------------+------------------+

  MEAN      E(X)   = 12/8 = 3/2 = 1.5

  E(X^2)           = 24/8 = 3

  VARIANCE  Var(X) = E(X^2) - [E(X)]^2
                   = 3 - (3/2)^2
                   = 3 - 9/4
                   = 12/4 - 9/4
                   = 3/4  =  0.75

  SD        sigma  = sqrt(3/4) = sqrt(3)/2 = 0.866 (approx)

  CROSS-CHECK using the binomial formulas of TOPIC 10:
       n = 3, p = 1/2, q = 1/2
       mean = np  = 3(1/2)     = 3/2      MATCHES
       var  = npq = 3(1/2)(1/2) = 3/4     MATCHES
```

---

## WORKED EXAMPLE 8.2 — a table with mixed signs

**Find the mean and variance of:**

```
     x     :  -2    -1     0     1     2     3
    P(x)   :  0.1    k    0.2   2k    0.3    k
```

```
  SOLUTION

  STEP 1   FIND k

     0.1 + k + 0.2 + 2k + 0.3 + k  =  1
              0.6 + 4k = 1
                    4k = 0.4
                     k = 0.1

     So the row is :  0.1 , 0.1 , 0.2 , 0.2 , 0.3 , 0.1

     CHECK : 0.1+0.1+0.2+0.2+0.3+0.1 = 1.0        CORRECT

  STEP 2   THE FOUR-COLUMN TABLE

  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |  -2    |   0.1    |    -0.2      |  4(0.1) = 0.4    |
  |  -1    |   0.1    |    -0.1      |  1(0.1) = 0.1    |
  |   0    |   0.2    |     0.0      |  0(0.2) = 0.0    |
  |   1    |   0.2    |     0.2      |  1(0.2) = 0.2    |
  |   2    |   0.3    |     0.6      |  4(0.3) = 1.2    |
  |   3    |   0.1    |     0.3      |  9(0.1) = 0.9    |
  +--------+----------+--------------+------------------+
  | TOTAL  |   1.0    |     0.8      |      2.8         |
  +--------+----------+--------------+------------------+

  MEAN      E(X)   = 0.8

  VARIANCE  Var(X) = 2.8 - (0.8)^2
                   = 2.8 - 0.64
                   = 2.16

  SD        sigma  = sqrt(2.16) = 1.47 (approx)
```

> **TRAP:** Negative values of `x` give NEGATIVE entries in the `x P(x)` column
> but POSITIVE entries in the `x^2 P(x)` column, because squaring kills the minus
> sign. Students who carry the minus into the fourth column get the variance wrong.

---

## WORKED EXAMPLE 8.3 — balls from a bag

**A bag has 4 white and 3 black balls. Two are drawn together.
`X` = number of black balls. Find the mean and the variance.**

```
  SOLUTION

  From Worked Example 4.3 the distribution is  6/21 , 12/21 , 3/21.

  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |   0    |  6/21    |      0       |        0         |
  |   1    | 12/21    |    12/21     |   1(12/21)=12/21 |
  |   2    |  3/21    |     6/21     |   4(3/21) =12/21 |
  +--------+----------+--------------+------------------+
  | TOTAL  | 21/21=1  |    18/21     |      24/21       |
  +--------+----------+--------------+------------------+

  MEAN      E(X)   = 18/21 = 6/7  = 0.857 (approx)

  E(X^2)           = 24/21 = 8/7

  VARIANCE  Var(X) = 8/7 - (6/7)^2
                   = 8/7 - 36/49
                   = 56/49 - 36/49
                   = 20/49  =  0.408 (approx)

  SD        sigma  = sqrt(20/49) = sqrt(20)/7 = 0.639 (approx)
```

---

## WORKED EXAMPLE 8.4 — the full 7-mark shape

**A random variable `X` has the distribution below. Find `k`, the mean and
the variance.**

```
     x     :   0     1     2     3     4
    P(x)   :   k    3k    5k    7k    9k
```

```
  SOLUTION

  STEP 1   k + 3k + 5k + 7k + 9k = 1
                             25k = 1
                               k = 1/25

           Row:  1/25 , 3/25 , 5/25 , 7/25 , 9/25
           CHECK: (1+3+5+7+9)/25 = 25/25 = 1        CORRECT

  STEP 2

  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |   0    |  1/25    |      0       |        0         |
  |   1    |  3/25    |     3/25     |   1(3/25) = 3/25 |
  |   2    |  5/25    |    10/25     |   4(5/25) =20/25 |
  |   3    |  7/25    |    21/25     |   9(7/25) =63/25 |
  |   4    |  9/25    |    36/25     |  16(9/25)=144/25 |
  +--------+----------+--------------+------------------+
  | TOTAL  |    1     |    70/25     |     230/25       |
  +--------+----------+--------------+------------------+

  MEAN      E(X)   = 70/25 = 14/5 = 2.8

  E(X^2)           = 230/25 = 46/5 = 9.2

  VARIANCE  Var(X) = 9.2 - (2.8)^2
                   = 9.2 - 7.84
                   = 1.36

  SD        sigma  = sqrt(1.36) = 1.166 (approx)
```

---

# ==========================================================
# TOPIC 9 — PROPERTIES OF MEAN AND VARIANCE
# ==========================================================

## 9.1 The two rules

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     E( aX + b )   =   a . E(X)  +  b                              |
  |                                                                   |
  |     Var( aX + b ) =   a^2 . Var(X)                                |
  |                                                                   |
  |     SD ( aX + b ) =   |a| . SD(X)                                 |
  |                                                                   |
  |     Special cases:                                                |
  |         E(b) = b            (a constant has mean b)               |
  |         Var(b) = 0          (a constant never varies)             |
  |         Var(X + b) = Var(X) (shifting does NOT change spread)     |
  |         Var(aX) = a^2 Var(X)                                      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 9.2 Why the `+b` disappears from the variance

```
   Original values                Add 5 to every value

   |  |    |  |                        |  |    |  |
   +--+----+--+---> x                  +--+----+--+---> x
      mean = 10                            mean = 15

   The whole picture SLID along by 5. The mean moved by 5, but the
   SPREAD (how far apart the spikes are) did not change at all.
   That is why Var(X + b) = Var(X).

   Multiplying by a STRETCHES the picture, so the spread does change --
   and since variance is built from SQUARED distances, it grows by a^2.
```

---

## WORKED EXAMPLE 9.1

**A die is thrown and `X` is the number shown. We know `E(X) = 3.5` and
`Var(X) = 35/12`. Find `E(2X + 3)` and `Var(2X + 3)`.**

```
  SOLUTION

  Here a = 2 and b = 3.

  E(2X + 3)   = 2 E(X) + 3
              = 2(3.5) + 3
              = 7 + 3
              = 10

  Var(2X + 3) = 2^2 Var(X)
              = 4 x 35/12
              = 140/12
              = 35/3  =  11.67 (approx)

  SD(2X + 3)  = sqrt(35/3) = 3.42 (approx)
```

Quick verification of `Var(X) = 35/12` for a die:
```
   E(X^2) = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6
   Var    = 91/6 - (7/2)^2 = 91/6 - 49/4
          = 182/12 - 147/12 = 35/12        CORRECT
```

---

## WORKED EXAMPLE 9.2

**If `E(X) = 4` and `Var(X) = 9`, find `E(3X - 5)` and `SD(3X - 5)`.**

```
  SOLUTION

  a = 3 , b = -5

  E(3X - 5)  = 3(4) - 5  =  12 - 5  =  7

  Var(3X - 5) = 3^2 (9) = 9 x 9 = 81

  SD(3X - 5)  = sqrt(81) = 9        ( = |3| x sqrt(9) = 3 x 3 = 9 )
```

---

# ==========================================================
# TOPIC 10 — THE BINOMIAL DISTRIBUTION
# ==========================================================

## 10.1 The situation it describes

A **Bernoulli trial** is any experiment with exactly two results, which we call
**success** and **failure**.

```
   TRIAL                          SUCCESS            FAILURE
   ---------------------------    ---------------    ---------------
   toss a coin                    head               tail
   throw a die                    a six              not a six
   test a bulb                    defective          good
   fire at a target               hit                miss
   ask a voter                    votes for A        does not
```

Now repeat that trial `n` times. Count the successes. That count is a
**binomial random variable**.

```
  +-------------------------------------------------------------------+
  |   THE FOUR CONDITIONS -- all must hold                            |
  |                                                                   |
  |   1.  There is a FIXED number of trials, n.                       |
  |   2.  Each trial has only TWO outcomes: success or failure.       |
  |   3.  The trials are INDEPENDENT (one does not affect another).   |
  |   4.  p, the probability of success, is the SAME in every trial.  |
  |                                                                   |
  |   X = number of successes in the n trials.                        |
  |   Range of X = { 0, 1, 2, ..., n }                                |
  +-------------------------------------------------------------------+
```

Condition 4 is why "drawing balls **without** replacement" is NOT binomial: once
you remove a ball, `p` changes for the next draw. **With** replacement it is
binomial.

## 10.2 The formula

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     P( X = r )  =  nCr . p^r . q^(n - r)                          |
  |                                                                   |
  |     where   q = 1 - p ,     r = 0, 1, 2, ..., n                   |
  |                                                                   |
  |     We write   X ~ B(n, p)                                        |
  |                                                                   |
  |     MEAN      = n p                                               |
  |     VARIANCE  = n p q                                             |
  |     SD        = sqrt( n p q )                                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Where each piece comes from:

```
   p^r          the r successes, each of probability p, all happening
   q^(n-r)      the (n - r) failures, each of probability q
   nCr          the number of DIFFERENT ORDERS in which those r successes
                could be arranged among the n trials
```

Example with `n = 3`: getting exactly 2 heads can happen as `HHT`, `HTH`, `THH` —
that is `3C2 = 3` orders. Hence the `nCr`.

## 10.3 Why the probabilities add to 1

```
     sum over r of  nCr p^r q^(n-r)   =   (q + p)^n        (binomial theorem)
                                      =   1^n
                                      =   1                CORRECT
```

That is a neat 2-mark answer if it is asked.

---

## WORKED EXAMPLE 10.1

**A fair coin is tossed 6 times. Find the probability of getting
(i) exactly 4 heads (ii) at least 4 heads.**

```
  SOLUTION

  n = 6 ,  p = 1/2 ,  q = 1/2 ,  so  p^r q^(n-r) = (1/2)^6 = 1/64 always.

  (i)   P(X = 4) = 6C4 (1/2)^4 (1/2)^2
                 = 15 x 1/64
                 = 15/64

  (ii)  "at least 4"  means  X = 4 or 5 or 6

        P(X = 4) = 6C4/64 = 15/64
        P(X = 5) = 6C5/64 =  6/64
        P(X = 6) = 6C6/64 =  1/64
                            -------
        P(X >= 4)         = 22/64  =  11/32
```

---

## WORKED EXAMPLE 10.2

**A die is thrown 6 times. Getting a number greater than 4 is a "success".
Find the probability of (i) exactly 2 successes (ii) at least one success.**

```
  SOLUTION

  "greater than 4" means 5 or 6  ->  2 favourable faces out of 6

       p = 2/6 = 1/3 ,   q = 2/3 ,   n = 6

  (i)   P(X = 2) = 6C2 (1/3)^2 (2/3)^4
                 = 15 x (1/9) x (16/81)
                 = 15 x 16 / 729
                 = 240/729
                 = 80/243        (divide top and bottom by 3)
                 = 0.329 (approx)

  (ii)  "at least one"  ->  use the complement, NEVER add five terms.

        P(X >= 1) = 1 - P(X = 0)
                  = 1 - 6C0 (1/3)^0 (2/3)^6
                  = 1 - (2/3)^6
                  = 1 - 64/729
                  = 665/729
                  = 0.912 (approx)
```

> **TRAP:** "At least one" = `1 - P(none)`. Every single year a student adds
> `P(1) + P(2) + ... + P(6)` and runs out of time. One line does the whole job.

---

## WORKED EXAMPLE 10.3 — defective items

**20% of the bolts made by a machine are defective. Four bolts are chosen at
random. Find the probability that (i) none is defective (ii) at most 2 are
defective.**

```
  SOLUTION

  p = 0.2 (defective = "success" here) ,  q = 0.8 ,  n = 4

  (i)   P(X = 0) = 4C0 (0.2)^0 (0.8)^4
                 = 1 x 1 x 0.4096
                 = 0.4096

  (ii)  "at most 2"  ->  X = 0, 1 or 2

        P(X = 0) = 0.4096
        P(X = 1) = 4C1 (0.2)(0.8)^3 = 4 x 0.2 x 0.512 = 0.4096
        P(X = 2) = 4C2 (0.2)^2(0.8)^2 = 6 x 0.04 x 0.64 = 0.1536
                                                        --------
        P(X <= 2)                                      = 0.9728

  CHECK the whole distribution adds to 1:
        P(3) = 4C3 (0.2)^3 (0.8) = 4 x 0.008 x 0.8 = 0.0256
        P(4) = (0.2)^4 = 0.0016
        0.4096 + 0.4096 + 0.1536 + 0.0256 + 0.0016 = 1.0000    CORRECT
```

---

## WORKED EXAMPLE 10.4 — target shooting

**A man hits a target with probability 0.6. He fires 5 shots. Find the probability
that he hits the target at least 3 times.**

```
  SOLUTION

  n = 5 ,  p = 0.6 ,  q = 0.4

  P(X = 3) = 5C3 (0.6)^3 (0.4)^2 = 10 x 0.216 x 0.16  = 0.34560
  P(X = 4) = 5C4 (0.6)^4 (0.4)^1 =  5 x 0.1296 x 0.4  = 0.25920
  P(X = 5) = 5C5 (0.6)^5         =  1 x 0.07776       = 0.07776
                                                       ---------
  P(X >= 3)                                          = 0.68256

  So he hits at least 3 times about 68% of the time.
```

---

## WORKED EXAMPLE 10.5 — the classic bomb question

**The probability that a bomb hits a target is 1/5. Two direct hits are needed to
destroy a building. If 6 bombs are dropped, find the probability that the building
is destroyed.**

```
  SOLUTION

  n = 6 ,  p = 1/5 ,  q = 4/5

  "Destroyed"  means  AT LEAST 2 hits.

  P(X >= 2) = 1 - P(X = 0) - P(X = 1)

  P(X = 0) = (4/5)^6 = 4096/15625

  P(X = 1) = 6C1 (1/5)(4/5)^5
           = 6 x (1/5) x (1024/3125)
           = 6144/15625

  P(X >= 2) = 1 - 4096/15625 - 6144/15625
            = 1 - 10240/15625
            = 5385/15625
            = 0.3446 (approx)

  About a 34% chance the building is destroyed.
```

---

# ==========================================================
# TOPIC 11 — MEAN AND VARIANCE OF THE BINOMIAL
#            (the 7-mark derivation)
# ==========================================================

## 11.1 The mean

```
   E(X)  =  sum from r = 0 to n  of   r . nCr p^r q^(n-r)

   The r = 0 term is zero, so start at r = 1:

                              n!
   E(X)  =  sum (r = 1..n)  r . ---------- p^r q^(n-r)
                            r! (n-r)!

   Now use    r / r!  =  1 / (r-1)!    and    n! = n (n-1)! :

                                n (n-1)!
         =  sum (r = 1..n)   ---------------- p^r q^(n-r)
                             (r-1)! (n-r)!

   Pull out n and one p:

         =  n p  sum (r = 1..n)  (n-1)C(r-1)  p^(r-1) q^(n-r)

   Let s = r - 1. As r runs 1..n, s runs 0..(n-1), and n - r = (n-1) - s:

         =  n p  sum (s = 0..n-1)  (n-1)Cs  p^s q^((n-1)-s)

         =  n p  (q + p)^(n-1)              [binomial theorem]

         =  n p  (1)^(n-1)

   +---------------------------+
   |        E(X)  =  n p       |
   +---------------------------+
```

## 11.2 The variance

The trick is to find `E[X(X-1)]` first, because the `r(r-1)` cancels two factorials.

```
   E[X(X-1)]  =  sum (r = 2..n)  r(r-1) . nCr p^r q^(n-r)

                                    n (n-1) (n-2)!
              =  sum (r = 2..n)  --------------------- p^r q^(n-r)
                                  (r-2)! (n-r)!

              =  n(n-1) p^2  sum (r = 2..n) (n-2)C(r-2) p^(r-2) q^(n-r)

              =  n(n-1) p^2  (q + p)^(n-2)

              =  n(n-1) p^2

   Now       E(X^2)  =  E[X(X-1)]  +  E(X)
                     =  n(n-1)p^2  +  np
                     =  n^2 p^2 - n p^2 + n p

   So        Var(X)  =  E(X^2) - [E(X)]^2
                     =  n^2 p^2 - n p^2 + n p  -  n^2 p^2
                     =  n p  -  n p^2
                     =  n p (1 - p)

   +---------------------------------------------+
   |    Var(X) = n p q        SD = sqrt(n p q)   |
   +---------------------------------------------+
```

## 11.3 The fact examiners love

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   In a BINOMIAL distribution the VARIANCE is ALWAYS LESS THAN     |
  |   the MEAN.                                                       |
  |                                                                   |
  |   Reason:   variance   npq                                        |
  |             --------  =  ---  =  q  ,   and  0 < q < 1            |
  |               mean       np                                       |
  |                                                                   |
  |   so       variance  =  q x mean  <  mean.                        |
  |                                                                   |
  |   Therefore "a binomial with mean 3 and variance 5" is            |
  |   IMPOSSIBLE. If a question says that, the answer is              |
  |   "no such binomial distribution exists".                         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

That ratio also gives you the fastest trick in the chapter:

```
  +-------------------------------------------------------------------+
  |     GIVEN the mean and the variance of a binomial:                |
  |                                                                   |
  |         q  =  variance / mean                                     |
  |         p  =  1 - q                                               |
  |         n  =  mean / p                                            |
  +-------------------------------------------------------------------+
```

---

## WORKED EXAMPLE 11.1

**The mean of a binomial distribution is 4 and its variance is 3.
Find `n`, `p` and `P(X >= 1)`.**

```
  SOLUTION

     np  = 4        ... (1)
     npq = 3        ... (2)

  (2) / (1):     q = 3/4

  So             p = 1 - 3/4 = 1/4

  From (1):      n(1/4) = 4    ->    n = 16

     n = 16 ,  p = 1/4 ,  q = 3/4

  P(X = r) = 16Cr (1/4)^r (3/4)^(16-r)

  P(X >= 1) = 1 - P(X = 0)
            = 1 - (3/4)^16
            = 1 - 0.01002
            = 0.99 (approx)

  CHECK :  mean = 16 x 1/4 = 4    CORRECT
           var  = 16 x 1/4 x 3/4 = 3    CORRECT
```

---

## WORKED EXAMPLE 11.2

**For a binomial distribution the mean is 6 and the standard deviation is 2.
Find `n` and `p`.**

```
  SOLUTION

     np = 6                  ... (1)
     SD = 2   ->  npq = 4    ... (2)      (square the SD to get the variance)

  (2)/(1):    q = 4/6 = 2/3
              p = 1 - 2/3 = 1/3

  From (1):   n(1/3) = 6   ->   n = 18

     n = 18 ,  p = 1/3

  CHECK :  mean = 18/3 = 6    CORRECT
           var  = 18 x (1/3)(2/3) = 4 ,  SD = 2    CORRECT
```

> **TRAP:** If the question gives the STANDARD DEVIATION, square it before you
> divide. `npq` is the variance, not the SD.

---

## WORKED EXAMPLE 11.3 — the "difference" question

**The difference between the mean and the variance of a binomial distribution
is 1, and the difference between their squares is 11. Find `n` and `p`.**

```
  SOLUTION

  mean = np ,  variance = npq

  Given:   np - npq  = 1                    ... (1)
           (np)^2 - (npq)^2 = 11            ... (2)

  Factorise (2) as a difference of squares:

      (np - npq)(np + npq) = 11
              1 x (np + npq) = 11          [using (1)]
                  np + npq  = 11            ... (3)

  From (1):   np(1 - q) = 1
  From (3):   np(1 + q) = 11

  Divide:      1 - q       1
              -------  =  ----
               1 + q       11

              11 - 11q = 1 + q
                    10 = 12q
                     q = 5/6      ->     p = 1/6

  Put back in (1):    np(1 - 5/6) = 1
                      np (1/6) = 1
                      np = 6
                      n (1/6) = 6
                      n = 36

     n = 36 ,  p = 1/6

  CHECK :  mean = 36 x 1/6 = 6
           var  = 36 x (1/6)(5/6) = 5
           difference       = 6 - 5 = 1              CORRECT
           difference of squares = 36 - 25 = 11      CORRECT
```

---

## 11.4 The most probable number of successes (the MODE)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   The MOST PROBABLE number of successes is the value of r that    |
  |   makes P(X = r) biggest. Compute  (n + 1) p.                     |
  |                                                                   |
  |   If (n+1)p is NOT a whole number:                                |
  |         mode = the whole-number part of (n+1)p                    |
  |                                                                   |
  |   If (n+1)p IS a whole number:                                    |
  |         there are TWO modes, (n+1)p and (n+1)p - 1                |
  |         (they have equal probability)                             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

## WORKED EXAMPLE 11.4

**A coin is tossed 5 times. Find the most probable number of heads.**

```
  SOLUTION

  n = 5 , p = 1/2      (n + 1)p = 6 x 1/2 = 3      a whole number

  So there are TWO most probable values:  r = 3 and r = 2.

  CHECK :  P(X = 2) = 5C2/32 = 10/32
           P(X = 3) = 5C3/32 = 10/32       equal, and both the largest
           (P(1) = 5/32 , P(4) = 5/32 are smaller)      CORRECT
```

---

## WORKED EXAMPLE 11.5

**A die is thrown 6 times. Find the most probable number of sixes.**

```
  SOLUTION

  n = 6 , p = 1/6      (n + 1)p = 7 x 1/6 = 7/6 = 1.1666...

  Not a whole number, so   mode = 1.
  The most probable number of sixes is 1.

  CHECK :  P(0) = (5/6)^6 = 15625/46656 = 0.3349
           P(1) = 6(1/6)(5/6)^5 = 3125/7776 = 0.4019   <-- largest
           P(2) = 15(1/36)(5/6)^4 = 0.2009             CORRECT
```

---

# ==========================================================
# TOPIC 12 — THE POISSON DISTRIBUTION
# ==========================================================

## 12.1 When it applies

The Poisson distribution counts how many times a **rare** event happens in a fixed
stretch of time, space or material — when there is **no fixed n**, only an average.

```
  +-------------------------------------------------------------------+
  |   THE CONDITIONS                                                  |
  |                                                                   |
  |   1.  The events happen at random and INDEPENDENTLY.              |
  |   2.  Two events (practically) never happen at the exact same     |
  |       instant.                                                    |
  |   3.  The AVERAGE rate m is constant over the interval.           |
  |   4.  There is no fixed upper limit -- X can be 0,1,2,3,...       |
  |       (an infinite range).                                        |
  +-------------------------------------------------------------------+
```

Typical situations:

```
   number of accidents on a road per day
   number of misprints per page of a book
   number of phone calls at an exchange per minute
   number of defective items in a very large batch
   number of customers arriving per hour
   number of radioactive particles emitted per second
```

## 12.2 The formula

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                          e^(-m) . m^r                             |
  |        P( X = r )  =  --------------------                        |
  |                               r!                                  |
  |                                                                   |
  |        r = 0, 1, 2, 3, ...   (no upper limit)                     |
  |        m > 0 is the PARAMETER (also written lambda)               |
  |                                                                   |
  |        MEAN      =  m                                             |
  |        VARIANCE  =  m                                             |
  |        SD        =  sqrt(m)                                       |
  |                                                                   |
  |        MEAN AND VARIANCE ARE EQUAL. That is the signature of      |
  |        a Poisson distribution.                                    |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 12.3 The probabilities add to 1

```
                       e^(-m) m^r                    m^r
   sum (r = 0..inf)  --------------  =  e^(-m) . sum -----
                          r!                          r!

                                     =  e^(-m) . e^m          [series for e^m]

                                     =  e^0  =  1        CORRECT
```

## 12.4 Values of e^(-m) to memorise

```
  +----------+-----------+       +----------+-----------+
  |    m     |  e^(-m)   |       |    m     |  e^(-m)   |
  +----------+-----------+       +----------+-----------+
  |   0.5    |  0.6065   |       |   2.5    |  0.0821   |
  |   1.0    |  0.3679   |       |   3.0    |  0.0498   |
  |   1.5    |  0.2231   |       |   4.0    |  0.0183   |
  |   2.0    |  0.1353   |       |   5.0    |  0.0067   |
  +----------+-----------+       +----------+-----------+
```

If the exam does not give you the table, leave the answer as `e^(-2)` etc.
That is perfectly acceptable and loses no marks.

## 12.5 Mean and variance of the Poisson (derivation)

```
   MEAN

                            e^(-m) m^r
   E(X)  =  sum (r=0..inf) r ------------
                                 r!

            the r = 0 term is 0, so start at r = 1 and use r/r! = 1/(r-1)!

                                m^r
         =  e^(-m) sum (r=1..)  --------
                                (r-1)!

            put s = r - 1:

                                    m^s
         =  e^(-m) . m . sum (s=0..) ----
                                     s!

         =  e^(-m) . m . e^m   =   m

   +---------------------+
   |     E(X)  =  m      |
   +---------------------+

   VARIANCE   (again go through E[X(X-1)])

                                        m^r
   E[X(X-1)]  =  e^(-m) sum (r=2..)  ---------
                                      (r-2)!

              =  e^(-m) . m^2 . e^m   =   m^2

   E(X^2)  =  E[X(X-1)] + E(X)  =  m^2 + m

   Var(X)  =  E(X^2) - [E(X)]^2  =  m^2 + m - m^2  =  m

   +--------------------------------------+
   |   Var(X) = m       SD = sqrt(m)      |
   +--------------------------------------+
```

## 12.6 Poisson as a limit of the binomial

```
  +-------------------------------------------------------------------+
  |   When   n is LARGE   (n >= 50 or so)                             |
  |   and    p is SMALL   (p <= 0.1 or so)                            |
  |   but    m = n p      stays moderate,                             |
  |                                                                   |
  |   the binomial B(n, p) is very close to a Poisson with m = np.    |
  |                                                                   |
  |   Use it when the question says something like                    |
  |   "1 in 1000 items is defective; 2000 items are examined".        |
  |   Computing 2000C3 (0.001)^3 (0.999)^1997 by hand is impossible;  |
  |   the Poisson version with m = 2 takes ten seconds.               |
  +-------------------------------------------------------------------+
```

---

## WORKED EXAMPLE 12.1

**The average number of accidents on a stretch of road is 2 per week.
Find the probability that in a given week there are (i) no accidents
(ii) exactly 3 accidents (iii) at least 1 accident. Take `e^(-2) = 0.1353`.**

```
  SOLUTION

  m = 2

  (i)   P(X = 0) = e^(-2) x 2^0 / 0!
                 = 0.1353 x 1 / 1
                 = 0.1353

  (ii)  P(X = 3) = e^(-2) x 2^3 / 3!
                 = 0.1353 x 8 / 6
                 = 0.1353 x 1.3333
                 = 0.1804

  (iii) P(X >= 1) = 1 - P(X = 0)
                  = 1 - 0.1353
                  = 0.8647
```

---

## WORKED EXAMPLE 12.2

**If `X` is a Poisson variable with `P(X = 1) = P(X = 2)`, find `m` and `P(X = 0)`.**

```
  SOLUTION

     P(X = 1) = P(X = 2)

     e^(-m) m^1        e^(-m) m^2
     -----------  =  ------------
         1!               2!

  Cancel e^(-m) (never zero) and cross-multiply:

           m  =  m^2 / 2
          2m  =  m^2
       m^2 - 2m = 0
       m(m - 2) = 0

  m = 0 is rejected (a Poisson variable must have m > 0).

           m  =  2

  Then    P(X = 0) = e^(-2) = 0.1353

  Also, since mean = variance = m, both the mean and the variance are 2.
```

---

## WORKED EXAMPLE 12.3 — Poisson replacing a binomial

**In a factory, 1 out of every 500 items is defective. A sample of 1000 items is
taken. Find the probability that the sample contains (i) no defective item
(ii) at most 2 defective items. Take `e^(-2) = 0.1353`.**

```
  SOLUTION

  n = 1000 (large) ,  p = 1/500 = 0.002 (small)

     m = n p = 1000 x (1/500) = 2

  (i)   P(X = 0) = e^(-2) = 0.1353

  (ii)  P(X <= 2) = P(0) + P(1) + P(2)

        P(1) = e^(-2) x 2/1!  = 2 e^(-2)
        P(2) = e^(-2) x 4/2!  = 2 e^(-2)

        P(X <= 2) = e^(-2) (1 + 2 + 2)
                  = 5 x 0.1353
                  = 0.6765
```

---

## WORKED EXAMPLE 12.4

**A Poisson variable satisfies `3 P(X = 4) = P(X = 2)`. Find its variance.**

```
  SOLUTION

        3 e^(-m) m^4        e^(-m) m^2
        -------------  =  -------------
             4!                2!

     Cancel e^(-m). Then  3 m^4 / 24  =  m^2 / 2

                          m^4 / 8  =  m^2 / 2

                          2 m^4 = 8 m^2

                          m^2 (m^2 - 4) = 0

     m = 0 rejected, m = -2 rejected (m > 0), so   m = 2.

     For a Poisson distribution  VARIANCE = m = 2.
```

---

## WORKED EXAMPLE 12.5 — misprints

**A book of 200 pages contains 100 misprints scattered at random.
Find the probability that a page chosen at random contains
(i) no misprint (ii) exactly 2 misprints. Take `e^(-0.5) = 0.6065`.**

```
  SOLUTION

  average misprints per page   m = 100/200 = 0.5

  (i)   P(X = 0) = e^(-0.5) = 0.6065

  (ii)  P(X = 2) = e^(-0.5) x (0.5)^2 / 2!
                 = 0.6065 x 0.25 / 2
                 = 0.6065 x 0.125
                 = 0.0758
```

---

# ==========================================================
# TOPIC 13 — BINOMIAL versus POISSON
# ==========================================================

```
  +---------------------+---------------------------+---------------------------+
  |                     |      BINOMIAL             |       POISSON             |
  +---------------------+---------------------------+---------------------------+
  |  Formula            |  nCr p^r q^(n-r)          |  e^(-m) m^r / r!          |
  +---------------------+---------------------------+---------------------------+
  |  Parameters         |  two:  n and p            |  one:  m                  |
  +---------------------+---------------------------+---------------------------+
  |  Range of X         |  0, 1, 2, ..., n          |  0, 1, 2, ...  (no end)   |
  |                     |  FINITE                   |  INFINITE                 |
  +---------------------+---------------------------+---------------------------+
  |  Mean               |  n p                      |  m                        |
  +---------------------+---------------------------+---------------------------+
  |  Variance           |  n p q                    |  m                        |
  +---------------------+---------------------------+---------------------------+
  |  Mean vs variance   |  variance < mean ALWAYS   |  variance = mean ALWAYS   |
  +---------------------+---------------------------+---------------------------+
  |  Number of trials   |  fixed and known          |  not known / very large   |
  +---------------------+---------------------------+---------------------------+
  |  Typical wording    |  "tossed 8 times",        |  "on average 3 per hour", |
  |                     |  "5 bolts chosen"         |  "mean number of ... is"  |
  +---------------------+---------------------------+---------------------------+
  |  Typical use        |  coins, dice, small       |  accidents, misprints,    |
  |                     |  samples, shooting        |  calls, rare defects      |
  +---------------------+---------------------------+---------------------------+
  |  Relationship       |  n -> large, p -> small, np = m  gives the Poisson    |
  +---------------------+---------------------------+---------------------------+
```

**The one-line test in the exam hall:**

```
   Can you point at a number and say "that is n"?   ->  BINOMIAL
   Does the question only give you an AVERAGE?      ->  POISSON
```

---

# ==========================================================
# TOPIC 14 — IS THE NORMAL DISTRIBUTION IN THE SYLLABUS?
# ==========================================================

**No — and this is worth saying plainly so you do not waste time.**

The BIEAP (AP Inter 2nd year) Maths IIA syllabus for Chapter 10 contains exactly
two sections:

```
   10.1  Random Variables
         - definition of a random variable
         - discrete and continuous random variables
         - probability distribution of a discrete random variable
         - mean and variance of a random variable

   10.2  Theoretical Distributions
         - BINOMIAL distribution and its mean and variance
         - POISSON distribution and its mean and variance
```

The **normal distribution is NOT in the AP Inter Maths IIA syllabus**, is not in
the Telugu Akademi textbook for this chapter, and is not asked in the board exam.
It is also not asked from this chapter in EAPCET. You will meet it later in a
degree-level statistics course.

Spend that time instead on the four-column mean/variance table — that is where
the marks actually are.

---

# ==========================================================
# THE MASTER WORKED EXAMPLE — a full 7-mark answer
# ==========================================================

**A random variable `X` has the following distribution. Find `k`, the
cumulative distribution function, the mean, the variance, and `E(2X + 3)`.**

```
     x     :   1     2     3     4     5
    P(x)   :   k    2k    3k    2k     k
```

```
  SOLUTION

  STEP 1   FIND k                                              (1 mark)

     k + 2k + 3k + 2k + k = 1
                       9k = 1
                        k = 1/9

     Distribution:  1/9 , 2/9 , 3/9 , 2/9 , 1/9
     CHECK: (1+2+3+2+1)/9 = 9/9 = 1        CORRECT

  STEP 2   CUMULATIVE DISTRIBUTION FUNCTION                    (1 mark)

  +--------+------+------+------+------+------+
  |   x    |  1   |  2   |  3   |  4   |  5   |
  +--------+------+------+------+------+------+
  |  F(x)  | 1/9  | 3/9  | 6/9  | 8/9  | 9/9  |
  +--------+------+------+------+------+------+
                                          = 1  CORRECT

  STEP 3   THE FOUR-COLUMN TABLE                               (2 marks)

  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |   1    |   1/9    |     1/9      |   1(1/9) =  1/9  |
  |   2    |   2/9    |     4/9      |   4(2/9) =  8/9  |
  |   3    |   3/9    |     9/9      |   9(3/9) = 27/9  |
  |   4    |   2/9    |     8/9      |  16(2/9) = 32/9  |
  |   5    |   1/9    |     5/9      |  25(1/9) = 25/9  |
  +--------+----------+--------------+------------------+
  | TOTAL  |  9/9 = 1 |    27/9      |      93/9        |
  +--------+----------+--------------+------------------+

  STEP 4   MEAN                                                (1 mark)

     E(X) = 27/9 = 3

     (Sensible -- the table is symmetric about x = 3.)

  STEP 5   VARIANCE                                            (1 mark)

     E(X^2) = 93/9 = 31/3

     Var(X) = E(X^2) - [E(X)]^2
            = 31/3 - 9
            = 31/3 - 27/3
            = 4/3
            = 1.333 (approx)

     SD = sqrt(4/3) = 2/sqrt(3) = 1.155 (approx)

  STEP 6   E(2X + 3)                                           (1 mark)

     E(2X + 3) = 2 E(X) + 3 = 2(3) + 3 = 9

     (and if asked:  Var(2X + 3) = 4 Var(X) = 4 x 4/3 = 16/3)
```

That is a complete 7-mark answer. Nothing in it is harder than multiplying
whole numbers by ninths.

---

# ==========================================================
# CHECKLIST BEFORE YOU HAND IN THE PAPER
# ==========================================================

```
  [ ]  Did I write the RANGE of X as a set of NUMBERS, not outcomes?

  [ ]  Does my P(x) row add up to EXACTLY 1?  (Check it every time --
       it is a free proof that the rest is right.)

  [ ]  Did I check BOTH conditions (0 <= P(x) <= 1 AND sum = 1) when
       asked "is this a probability distribution?"

  [ ]  When I found k from a quadratic or cubic, did I REJECT the roots
       that give a probability above 1 or below 0?

  [ ]  Is my variance   E(X^2) - [MEAN]^2   and not   E(X^2) - E(X)?

  [ ]  In the x^2 P(x) column, did I square the NEGATIVE x values
       correctly (making them positive)?

  [ ]  Is my variance POSITIVE? A negative variance means an arithmetic
       slip -- go back.

  [ ]  For "at least one", did I use  1 - P(X = 0)  instead of adding
       everything up?

  [ ]  Did I read "exactly / at least / at most" correctly?
         exactly r    ->  P(X = r)
         at least r   ->  P(X >= r) = 1 - P(X <= r-1)
         at most r    ->  P(X <= r) = P(0)+P(1)+...+P(r)

  [ ]  In a binomial, is q = 1 - p, and did I check that
       variance < mean?

  [ ]  If the question gave the STANDARD DEVIATION, did I square it
       before dividing to get q?

  [ ]  In a Poisson, did I remember that mean = variance = m, and that
       0! = 1 and m^0 = 1?

  [ ]  Did I write the final answer with its units / as a fraction in
       lowest terms?

  [ ]  Did I draw the four-column table? Examiners give method marks for
       the table even when the arithmetic slips.
```

Do those fourteen checks and this chapter will not lose you a single mark.
