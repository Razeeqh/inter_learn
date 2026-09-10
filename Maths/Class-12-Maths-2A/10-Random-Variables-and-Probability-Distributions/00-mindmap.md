# Random Variables and Probability Distributions — Mind Map

**Maths IIA · Chapter 10 · The chapter that reliably gives you a 7-mark long answer**
Every year: 1 long answer (7M) + often a short answer (4M) + 1-2 very short answers (2M)

Why this chapter matters: it is the LAST chapter of Maths IIA and the one most weak
students skip — which is exactly why it is worth doing. There are only about six
formulas in the whole chapter, and the 7-mark question is nearly always the same
shape: "here is a table, find k, find the mean, find the variance." That is a
filling-in-a-table job. If you can multiply and add, you can score it.

This chapter is the follow-on to Chapter 9 (Probability). Chapter 9 taught you how to
find ONE probability. This chapter puts ALL the probabilities of an experiment into a
single table and then asks questions about the table.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
        RANDOM VARIABLES AND PROBABILITY DISTRIBUTIONS
                            |
    +---------------+-------+--------+------------------+
    |               |                |                  |
  WHAT IS A     THE DISTRIBUTION  NUMBERS THAT      THE TWO NAMED
  RANDOM        (the table)       DESCRIBE IT       DISTRIBUTIONS
  VARIABLE          |                 |                  |
    |          Probability mass    MEAN  E(X)         +--+--------+
  A RULE that  function P(x)       = sum x P(x)       |           |
  turns each       |                  |            BINOMIAL   POISSON
  outcome into  TWO CONDITIONS     VARIANCE           |           |
  a NUMBER      1. 0 <= P(x) <= 1  = E(X^2)        Fixed n     Rare events
    |           2. sum P(x) = 1      - [E(X)]^2    trials      big n, small p
  X : S --> R       |                  |             |           |
    |           BUILD THE TABLE     = sum x^2 P(x)  P(X=r)     P(X=r)
    +-- DISCRETE  from coins /        - mean^2      = nCr        = e^-m m^r
    |   (0,1,2,3  dice / balls          |             p^r q^n-r    --------
    |    countable)  |                STANDARD        |              r!
    |               |                 DEVIATION     Mean = np       |
    +-- CONTINUOUS  FIND k using      = sqrt(Var)   Var  = npq   Mean = m
        (any value  sum P(x) = 1        |           SD   =        Var  = m
         in a range)   |              PROPERTIES    sqrt(npq)       |
                   CUMULATIVE         E(aX+b)        |         (mean AND
                   F(x) = P(X <= x)   = aE(X)+b   VARIANCE       variance
                       |              Var(aX+b)   < MEAN         are equal
                   step function      = a^2 Var(X)  always!      -- that is
                                                     |           the giveaway)
                                              Find n and p
                                              from mean & var
                                                     |
                                              Most probable
                                              number of successes
```

---

## THE ONE PICTURE THAT EXPLAINS "RANDOM VARIABLE"

```
     THE EXPERIMENT            THE RANDOM VARIABLE X        THE NUMBER
     (toss 2 coins)            "count the heads"

     +--------+                                             +-----+
     |   HH   | ------------------------------------------> |  2  |
     +--------+                                             +-----+
     +--------+                                             +-----+
     |   HT   | ---------\                                  |  1  |
     +--------+           >------------------------------>  +-----+
     +--------+          /
     |   TH   | ---------/
     +--------+                                             +-----+
     +--------+                                             |  0  |
     |   TT   | ------------------------------------------> +-----+
     +--------+

     SAMPLE SPACE S               X is a MACHINE            RANGE of X
     (words / pictures)           that eats an outcome      = { 0, 1, 2 }
                                  and spits out a NUMBER    (numbers only)
```

A random variable is **not** a variable like `x` in algebra. It is a **function**.
It reads the result of the experiment and reports a number.

---

## THE 60-SECOND VERSION

```
   STEP 1   List the values X can take.            x  = 0, 1, 2
   STEP 2   Find the probability of each.       P(x) = 1/4, 1/2, 1/4
   STEP 3   Check they add to 1.                  sum = 1        <-- ALWAYS
   STEP 4   Multiply and add for the MEAN.       mean = sum x P(x)
   STEP 5   Multiply again for the VARIANCE.     Var  = sum x^2 P(x) - mean^2
```

Everything in the chapter is those five steps. The binomial and Poisson
distributions are just ready-made shortcuts for step 2 so you do not have to
count by hand.

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Define things | random variable, discrete, continuous, pmf | A, 2 marks |
| Find k | set sum of probabilities = 1, solve | A or B |
| Build the table | count outcomes, one column per value of X | B, 4 marks |
| **Mean and variance** | **four-column table** | **C, 7 marks** |
| Binomial | nCr p^r q^(n-r), mean np, var npq | B or C |
| Poisson | e^-m m^r / r!, mean = var = m | B or C |

---

## WHERE THE MARKS ARE (AP Inter, Maths IIA — 75 marks)

| Topic | Section | Marks |
|-------|---------|-------|
| Define a random variable / discrete / continuous | A | 2 |
| Two conditions of a probability distribution | A | 2 |
| Find the constant k from a small table | A | 2 |
| Write the binomial or Poisson formula | A | 2 |
| Binomial: mean = 4, variance = 3, find n and p | A | 2 |
| Poisson: P(X=1) = P(X=2), find the mean | A | 2 |
| Build a distribution from balls / coins / dice | B | 4 |
| Binomial numerical (at least / at most / exactly) | B | 4 |
| Poisson numerical | B | 4 |
| **Find k, then the mean and the variance** | **C** | **7** |
| **Derive the mean and variance of a binomial** | **C** | **7** |
| **Full binomial or Poisson word problem** | **C** | **7** |

**Total realistically available from this one chapter: 11 to 13 marks out of 75.**
Together with Chapter 9 (Probability) the two chapters give you around 25 marks —
almost the entire pass mark of 26 from two chapters that need no algebra.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What a RANDOM VARIABLE is    (X : S --> R)
              |
  STEP 2   DISCRETE vs CONTINUOUS       (countable vs an interval)
              |
  STEP 3   PROBABILITY DISTRIBUTION table + the TWO CONDITIONS
              |
     +--------+--------+
     |                 |
  STEP 4          STEP 5
  FIND k          BUILD the table from coins / dice / balls
  (sum = 1)            |
     |                 |
     +--------+--------+
              |
  STEP 6   CUMULATIVE DISTRIBUTION FUNCTION   F(x) = P(X <= x)
              |
  STEP 7   MEAN            E(X) = sum x P(x)
              |
  STEP 8   VARIANCE        Var(X) = sum x^2 P(x) - [E(X)]^2
              |
  STEP 9   PROPERTIES      E(aX+b) = aE(X)+b ,  Var(aX+b) = a^2 Var(X)
              |
     +--------+--------+
     |                 |
  STEP 10         STEP 12
  BINOMIAL        POISSON
  P = nCr p^r q^  P = e^-m m^r / r!
  mean np         mean = m
  var npq         var  = m
     |                 |
  STEP 11         STEP 13
  Find n, p from  Poisson as the limit
  mean & variance of a binomial
     |            (n large, p small)
     |                 |
     +--------+--------+
              |
  STEP 14  Compare the two   <--  a favourite 2-mark question
```

---

## THE KEY BOX — these five lines unlock 80% of the chapter

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.   sum of all P(x)  =  1          <-- this finds k, always    |
  |                                                                   |
  |   2.   MEAN      mu = E(X)   =  sum of  x . P(x)                  |
  |                                                                   |
  |   3.   VARIANCE  Var(X)  =  sum of x^2 . P(x)  -  [ E(X) ]^2      |
  |                                                                   |
  |   4.   BINOMIAL   P(X = r) = nCr . p^r . q^(n-r) ,  q = 1 - p     |
  |                   mean = np ,  variance = npq ,  SD = sqrt(npq)   |
  |                                                                   |
  |                                 e^(-m) . m^r                      |
  |   5.   POISSON    P(X = r) =  ----------------                    |
  |                                      r!                           |
  |                   mean = m ,  variance = m                        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

And the layout that pays the 7 marks — **always draw these four columns**:

```
  +--------+----------+--------------+------------------+
  |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
  +--------+----------+--------------+------------------+
  |        |          |              |                  |
  |  ...   |   ...    |     ...      |       ...        |
  |        |          |              |                  |
  +--------+----------+--------------+------------------+
  | TOTAL  |    1     |   = MEAN     |   = E(X^2)       |
  +--------+----------+--------------+------------------+
                          |                  |
                          |                  |
                          +--------> Var = E(X^2) - (MEAN)^2
```

The "1" in the second total column is your **free self-check**. If it is not
exactly 1, something is wrong — stop and fix it before going on.

---

## DISCRETE vs CONTINUOUS — the picture

```
   DISCRETE random variable            CONTINUOUS random variable
   (you can LIST the values)           (values fill a whole interval)

   P(x)                                 f(x)
    ^                                    ^
    |    |                               |      ____
    |    |    |                          |    /      \
    |  | |    |   |                      |   /        \
    |  | |  | |   |                      |  /          \
    +--+-+--+-+---+----> x               +-/------------\----> x
       0 1  2 3   4                       0              5

   separate spikes, gaps between        one smooth curve, no gaps
   P(X = 2) is a real number > 0        P(X = 2) = 0  (a single point
                                        has zero width)

   EXAMPLES                             EXAMPLES
   number of heads in 5 tosses          height of a student
   number of defective bulbs            time a bus is late
   number on a die                      temperature tomorrow
   number of accidents in a day         weight of a rice bag
```

**In the AP Inter exam almost every numerical is about DISCRETE random variables.**
Continuous ones only appear in a 2-mark "give an example" question.

---

## BINOMIAL OR POISSON? — decide in five seconds

```
  +---------------------------------+---------------------------------+
  |  THE QUESTION SAYS ...          |  USE                            |
  +---------------------------------+---------------------------------+
  |  "a coin is tossed 8 times"     |  BINOMIAL   n = 8               |
  |  "5 bolts are chosen"           |  BINOMIAL   n = 5               |
  |  "he fires 6 shots"             |  BINOMIAL   n = 6               |
  |  a clear FIXED number of tries  |  BINOMIAL                       |
  +---------------------------------+---------------------------------+
  |  "on average 3 per hour"        |  POISSON    m = 3               |
  |  "the mean number of ... is 2"  |  POISSON    m = 2               |
  |  "1 in 500 is defective, out of |  POISSON    m = np = 1000/500   |
  |   1000 items"  (n big, p tiny)  |             = 2                 |
  |  no fixed n, only an average    |  POISSON                        |
  +---------------------------------+---------------------------------+
```

---

## IS THE NORMAL DISTRIBUTION IN THE SYLLABUS?

**No.** The AP Inter (BIEAP) Maths IIA syllabus for this chapter contains only:

```
  10.1  Random Variables  --  definition, discrete and continuous,
                              probability distribution, mean, variance
  10.2  Theoretical Distributions  --  BINOMIAL and POISSON only
```

The **normal distribution is NOT part of the AP Inter Maths IIA syllabus** and has
never been asked in the board paper. Do not waste your last two days on it. (You
will meet it in a degree statistics course, not here.)

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning** — The definitions. Write down, in your own words: what a random
variable is, discrete vs continuous with two examples each, and the two conditions
of a probability distribution. That is 4 marks of Section A already. Then do five
"find k" questions — they take one line each.

**Day 1 evening** — The four-column table. Do the three-coin example, the two-dice
example and the balls-from-a-bag example until you can rule the four columns
without thinking. Every time, check the P(x) column adds to exactly 1.

**Day 2 morning** — Binomial. Learn `P(X=r) = nCr p^r q^(n-r)`, `mean = np`,
`variance = npq`. Then drill the one trick that appears every year: given the mean
and the variance, divide variance by mean to get q, then p = 1 - q, then n = mean/p.
Do it five times with different numbers.

**Day 2 evening** — Poisson. Learn `P(X=r) = e^-m m^r / r!` and that mean = variance
= m. Memorise `e^-1 = 0.3679`, `e^-2 = 0.1353`, `e^-3 = 0.0498`. Then re-do one
full 7-mark "find k, mean and variance" question start to finish, timed.

That plan alone is worth about 11 of the 75 marks in Maths IIA — and it is the
easiest 11 marks in the paper because nothing has to be proved.

---

## THE THREE MISTAKES THAT KILL THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  1.  Var(X)  IS NOT  E(X^2) - E(X)                                |
  |      Var(X)  =  E(X^2)  -  [ E(X) ]^2      <-- the mean SQUARED   |
  |                                                                   |
  |  2.  In a binomial, VARIANCE CAN NEVER BE BIGGER THAN THE MEAN.   |
  |      npq < np because q < 1. If a question says                   |
  |      "mean 3, variance 5, binomial" -- it is impossible. Say so.  |
  |                                                                   |
  |  3.  "AT LEAST one" means 1 or 2 or 3 or ... -- do NOT add them   |
  |      all. Use   P(X >= 1) = 1 - P(X = 0).   One line instead of   |
  |      five.                                                        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Learn those three now and you have protected almost every mark in the chapter.
