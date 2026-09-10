# Random Variables and Probability Distributions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

There are only about a dozen formulas in the whole chapter. That is why it is the
best-value chapter in Maths IIA.

---

# 1. THE RANDOM VARIABLE ITSELF

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   A RANDOM VARIABLE is a function from the sample space to the    |
  |   real numbers:                                                   |
  |                                                                   |
  |                       X  :  S  --->  R                            |
  |                                                                   |
  |   It gives ONE real number to EVERY outcome of the experiment.    |
  |                                                                   |
  |   RANGE of X  =  the set of all numbers X can take.               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Term | Meaning | When to use |
|---|---|---|
| `X : S -> R` | the definition of a random variable | "Define a random variable" — 2 marks |
| DISCRETE | values can be listed: 0,1,2,3,... | counting questions ("how many") |
| CONTINUOUS | values fill an interval | measuring questions ("how much") |
| Range of `X` | the set of values, e.g. `{0,1,2}` | first line of nearly every answer |

```
   QUICK TEST
   Can you count it on your fingers?   -->  DISCRETE
   Do you need a ruler / clock / scale? -->  CONTINUOUS
```

---

# 2. THE PROBABILITY DISTRIBUTION (pmf)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   P(x) = P(X = x)  is a PROBABILITY DISTRIBUTION  if and only if  |
  |                                                                   |
  |     (i)    0  <=  P(x)  <=  1     for every x                     |
  |                                                                   |
  |     (ii)   sum of all P(x)  =  1                                  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `0 <= P(x) <= 1` | "Is this a probability distribution?" — check FIRST |
| `sum P(x) = 1` | to find an unknown k; and as a free self-check every time |
| `P(X = x) = (favourable outcomes)/n(S)` | building the table from coins/dice/balls |

**The single most used line in this chapter:**

```
  +-------------------------------------------------------------------+
  |     Add up the whole P(x) row, put it equal to 1, solve for k.    |
  +-------------------------------------------------------------------+
```

> If k comes out of a quadratic or a cubic, you MUST reject any root that makes
> some `P(x)` negative or bigger than 1. That rejection is worth marks.

---

# 3. COUNTING TOOLS FOR BUILDING THE TABLE

```
  n coins tossed              ->   n(S) = 2^n
  n dice thrown               ->   n(S) = 6^n
  r objects drawn together
      from n objects          ->   n(S) = nCr

                    n!
       nCr  =  ------------
                r! (n - r)!
```

| Situation | Count for `X = r` |
|---|---|
| `a` white + `b` black, draw 2, `X` = black | `P(X=r) = bCr x aC(2-r) / (a+b)C2` |
| 2 cards from 52, `X` = aces | `P(X=r) = 4Cr x 48C(2-r) / 52C2` |
| `n` coins, `X` = heads | `P(X=r) = nCr / 2^n` |
| `n` dice, `X` = sum | use the 6x6 sum grid |

Values worth knowing cold:

```
  4C2 = 6      5C2 = 10     5C3 = 10     6C2 = 15     6C3 = 20
  6C4 = 15     7C2 = 21     8C2 = 28    10C2 = 45    48C2 = 1128
  52C2 = 1326
```

The two-dice frequency row (memorise it — it saves two minutes every time):

```
   sum    2   3   4   5   6   7   8   9  10  11  12
   ways   1   2   3   4   5   6   5   4   3   2   1       total 36
```

---

# 4. CUMULATIVE DISTRIBUTION FUNCTION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |        F(x)  =  P( X <= x )  =  sum of P(t)  for all t <= x       |
  |                                                                   |
  |        It is simply a RUNNING TOTAL of the P(x) row.              |
  |                                                                   |
  |   Properties:                                                     |
  |        F is never decreasing                                      |
  |        F(-infinity) = 0 ,   F(+infinity) = 1                      |
  |        P(X = x)      =  F(x) - F(previous value)                  |
  |        P(a < X <= b) =  F(b) - F(a)                               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F(x) = P(X <= x)` | "Find the cumulative distribution function" |
| `P(X = x) = F(x) - F(x-1)` | the question GIVES you F and asks for the distribution |
| `P(a < X <= b) = F(b) - F(a)` | "probability that X lies between ..." |
| `P(X > a) = 1 - F(a)` | "more than a" |

---

# 5. MEAN (EXPECTATION)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     MEAN  =  mu  =  E(X)  =  sum of  x . P(x)                     |
  |                                                                   |
  |     "multiply every value by its probability and add up"          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `E(X) = sum x P(x)` | every "find the mean / expectation / average" question |
| `E(X^2) = sum x^2 P(x)` | only as a stepping stone to the variance |
| `E[g(X)] = sum g(x) P(x)` | "find the expected value of X^2 + 3" etc. |
| `E(constant) = constant` | 2-mark theory |

---

# 6. VARIANCE AND STANDARD DEVIATION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   DEFINITION       Var(X)  =  E[ (X - mu)^2 ]                     |
  |                            =  sum of (x - mu)^2 . P(x)            |
  |                                                                   |
  |   WORKING FORMULA  (always use this one)                          |
  |                                                                   |
  |       Var(X)  =  E(X^2)  -  [ E(X) ]^2                            |
  |                                                                   |
  |               =  sum x^2 P(x)   -   ( mean )^2                    |
  |                                                                   |
  |   STANDARD DEVIATION     sigma  =  sqrt( Var(X) )                 |
  |                                                                   |
  |   Var(X) is NEVER negative.                                       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `Var = E(X^2) - [E(X)]^2` | ALWAYS — it is far faster than the definition |
| `Var = sum (x - mu)^2 P(x)` | only if the question says "using the definition" |
| `SD = sqrt(Var)` | whenever "standard deviation" is asked |
| `Var >= 0` | sanity check — a negative answer means a slip |

**THE LAYOUT THAT EARNS THE 7 MARKS:**

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

     then      Var(X) = E(X^2) - (MEAN)^2
               SD     = sqrt(Var)
```

---

# 7. PROPERTIES OF MEAN AND VARIANCE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     E( aX + b )    =   a E(X)  +  b                               |
  |                                                                   |
  |     Var( aX + b )  =   a^2 Var(X)          (the b DISAPPEARS)     |
  |                                                                   |
  |     SD ( aX + b )  =   |a| . SD(X)                                |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `E(aX + b) = aE(X) + b` | "find E(2X + 3)" — the tail of many 7-mark questions |
| `Var(aX + b) = a^2 Var(X)` | "find Var(2X + 3)" — note b vanishes |
| `Var(X + b) = Var(X)` | shifting all values does not change the spread |
| `Var(aX) = a^2 Var(X)` | scaling |
| `E(b) = b` , `Var(b) = 0` | 2-mark theory questions |

> **Why b disappears:** adding b slides the whole picture sideways. The mean moves,
> but the values stay exactly as far from each other as before.

---

# 8. THE BINOMIAL DISTRIBUTION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     X ~ B(n, p)                                                   |
  |                                                                   |
  |         P( X = r )  =  nCr . p^r . q^(n - r)                      |
  |                                                                   |
  |         q = 1 - p ,   r = 0, 1, 2, ..., n                         |
  |                                                                   |
  |         MEAN      =  n p                                          |
  |         VARIANCE  =  n p q                                        |
  |         SD        =  sqrt( n p q )                                |
  |                                                                   |
  |         sum of all P(X = r)  =  (q + p)^n  =  1^n  =  1           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 8.1 The four conditions (a standard 2-mark question)

```
   1.  a FIXED number n of trials
   2.  each trial has only TWO outcomes (success / failure)
   3.  the trials are INDEPENDENT
   4.  p is CONSTANT for every trial
```

## 8.2 The "at least / at most / exactly" translations

| English | Symbols | Best way to compute |
|---|---|---|
| exactly r successes | `P(X = r)` | `nCr p^r q^(n-r)` |
| at least 1 | `P(X >= 1)` | `1 - q^n` |
| at least r | `P(X >= r)` | `1 - P(X <= r-1)` |
| at most r | `P(X <= r)` | `P(0)+P(1)+...+P(r)` |
| none | `P(X = 0)` | `q^n` |
| all | `P(X = n)` | `p^n` |
| more than r | `P(X > r)` | `1 - P(X <= r)` |
| fewer than r | `P(X < r)` | `P(0)+...+P(r-1)` |

## 8.3 The reverse trick — given mean and variance, find n and p

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |        variance     n p q                                         |
  |        --------  =  -----  =  q                                   |
  |          mean        n p                                          |
  |                                                                   |
  |   So:    STEP 1    q  =  variance / mean                          |
  |          STEP 2    p  =  1 - q                                    |
  |          STEP 3    n  =  mean / p                                 |
  |                                                                   |
  |   If the STANDARD DEVIATION is given, SQUARE it first.            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 8.4 Variance is always less than the mean

```
      variance / mean  =  q ,   and  0 < q < 1
                 so     variance  =  q x mean  <  mean

   A binomial with mean 3 and variance 5 CANNOT EXIST. Say so if asked.
   Also, npq is largest when p = q = 1/2, so   variance <= n/4.
```

## 8.5 Most probable number of successes (the mode)

```
  +-------------------------------------------------------------------+
  |   Compute  (n + 1) p                                              |
  |                                                                   |
  |   NOT a whole number  ->  mode = integer part of (n+1)p           |
  |   IS  a whole number  ->  TWO modes: (n+1)p and (n+1)p - 1        |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `P(X=r) = nCr p^r q^(n-r)` | any "fixed number of trials" question |
| `mean = np` | given n and p, or to find the other one |
| `var = npq`, `SD = sqrt(npq)` | "find the variance / SD of the binomial" |
| `q = var/mean` | given mean and variance, find n and p |
| `P(X>=1) = 1 - q^n` | "at least one" — one line |
| `(n+1)p` | "most probable number of successes" |

---

# 9. THE POISSON DISTRIBUTION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                        e^(-m) . m^r                               |
  |       P( X = r )  =  ------------------  ,   r = 0, 1, 2, ...     |
  |                             r!                                    |
  |                                                                   |
  |       m > 0  is the parameter (sometimes written lambda)          |
  |                                                                   |
  |       MEAN      =  m                                              |
  |       VARIANCE  =  m          <--  MEAN = VARIANCE                |
  |       SD        =  sqrt(m)                                        |
  |                                                                   |
  |       sum of all P(X = r)  =  e^(-m) . e^m  =  1                  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 9.1 The conditions

```
   1.  events occur at RANDOM and INDEPENDENTLY
   2.  two events practically never occur at the same instant
   3.  the average rate m is CONSTANT
   4.  there is NO upper limit -- X = 0, 1, 2, 3, ...
```

## 9.2 Poisson from a binomial

```
  +-------------------------------------------------------------------+
  |    n LARGE  ,  p SMALL  ,  m = n p moderate                       |
  |                                                                   |
  |    ->  use Poisson with  m = n p  instead of the binomial         |
  |                                                                   |
  |    Trigger words: "1 in 1000 items", "2% defective out of 500",   |
  |                   "on average", "mean number of ... per ..."      |
  +-------------------------------------------------------------------+
```

## 9.3 Ratio shortcut for "P(X = a) = c P(X = b)" questions

```
       P(X = r+1)        m
       ----------   =   -----
        P(X = r)         r+1

   So   P(X=1) = P(X=2)  ->  m/2 = 1  ->  m = 2
        P(X=2) = P(X=3)  ->  m/3 = 1  ->  m = 3
        P(X=0) = P(X=1)  ->  m = 1
```

## 9.4 Values of e^(-m)

```
  +--------+----------+     +--------+----------+
  |   m    |  e^(-m)  |     |   m    |  e^(-m)  |
  +--------+----------+     +--------+----------+
  |  0.1   |  0.9048  |     |  2.0   |  0.1353  |
  |  0.5   |  0.6065  |     |  2.5   |  0.0821  |
  |  1.0   |  0.3679  |     |  3.0   |  0.0498  |
  |  1.5   |  0.2231  |     |  4.0   |  0.0183  |
  +--------+----------+     +--------+----------+
                             |  5.0   |  0.0067  |
                             +--------+----------+
```

| Formula | When to use |
|---|---|
| `P(X=r) = e^(-m) m^r / r!` | "on average / mean number of ... per ..." |
| `mean = variance = m` | identifying a Poisson; 2-mark theory |
| `m = np` | large n, small p (defective items in a big batch) |
| `P(X>=1) = 1 - e^(-m)` | "at least one" |
| `P(X<=2) = e^(-m)(1 + m + m^2/2)` | "at most two" |

---

# 10. BINOMIAL versus POISSON — the comparison table

```
  +---------------------+---------------------------+---------------------------+
  |                     |      BINOMIAL             |       POISSON             |
  +---------------------+---------------------------+---------------------------+
  |  Formula            |  nCr p^r q^(n-r)          |  e^(-m) m^r / r!          |
  |  Parameters         |  two: n and p             |  one: m                   |
  |  Range of X         |  0,1,...,n  (FINITE)      |  0,1,2,...  (INFINITE)    |
  |  Mean               |  n p                      |  m                        |
  |  Variance           |  n p q                    |  m                        |
  |  Mean vs variance   |  variance  <  mean        |  variance  =  mean        |
  |  Number of trials   |  fixed and known          |  not fixed / very large   |
  |  p                  |  any value in (0,1)       |  very small               |
  |  Wording            |  "tossed 6 times"         |  "average 3 per hour"     |
  |  Examples           |  coins, dice, shooting,   |  accidents, misprints,    |
  |                     |  small samples            |  phone calls, rare faults |
  |  Link               |  n -> big, p -> small, np = m  gives Poisson          |
  +---------------------+---------------------------+---------------------------+
```

---

# 11. WHAT IS *NOT* IN THE SYLLABUS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   THE NORMAL DISTRIBUTION IS NOT IN THE AP INTER MATHS IIA        |
  |   SYLLABUS.                                                       |
  |                                                                   |
  |   Chapter 10 covers exactly:                                      |
  |       10.1  Random variables, distributions, mean, variance       |
  |       10.2  BINOMIAL and POISSON distributions only               |
  |                                                                   |
  |   Do not learn z-scores or normal tables for this exam.           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Also not required from this chapter: the geometric distribution, the negative
binomial, moment generating functions, and continuous probability density
integrals.

---

# 12. FULLY WORKED MODEL — the shape of the 7-mark answer

```
  QUESTION:  X has distribution   x    : 1    2    3    4
                                  P(x) : k   3k   3k    k
             Find k, the mean and the variance.

  STEP 1   k + 3k + 3k + k = 8k = 1     ->     k = 1/8

  STEP 2   +--------+----------+--------------+------------------+
           |   x    |   P(x)   |   x . P(x)   |   x^2 . P(x)     |
           +--------+----------+--------------+------------------+
           |   1    |   1/8    |     1/8      |   1(1/8) =  1/8  |
           |   2    |   3/8    |     6/8      |   4(3/8) = 12/8  |
           |   3    |   3/8    |     9/8      |   9(3/8) = 27/8  |
           |   4    |   1/8    |     4/8      |  16(1/8) = 16/8  |
           +--------+----------+--------------+------------------+
           | TOTAL  | 8/8 = 1  |    20/8      |      56/8        |
           +--------+----------+--------------+------------------+

  STEP 3   MEAN     = 20/8 = 5/2 = 2.5

  STEP 4   E(X^2)   = 56/8 = 7

           VARIANCE = 7 - (2.5)^2 = 7 - 6.25 = 0.75 = 3/4

           SD       = sqrt(3/4) = 0.866 (approx)

  CHECK    P column added to exactly 1.  Variance is positive.  Done.
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+--------------------------------------------------------------+
  | 1  |  sum of all P(x)  =  1                    <-- finds k        |
  +----+--------------------------------------------------------------+
  | 2  |  0 <= P(x) <= 1                           <-- rejects roots  |
  +----+--------------------------------------------------------------+
  | 3  |  MEAN  E(X) = sum x P(x)                                     |
  +----+--------------------------------------------------------------+
  | 4  |  E(X^2) = sum x^2 P(x)                                       |
  +----+--------------------------------------------------------------+
  | 5  |  Var(X) = E(X^2) - [E(X)]^2               <-- mean SQUARED   |
  +----+--------------------------------------------------------------+
  | 6  |  SD = sqrt(Var)                                              |
  +----+--------------------------------------------------------------+
  | 7  |  E(aX + b) = a E(X) + b                                      |
  +----+--------------------------------------------------------------+
  | 8  |  Var(aX + b) = a^2 Var(X)                 <-- b vanishes     |
  +----+--------------------------------------------------------------+
  | 9  |  BINOMIAL  P(X=r) = nCr p^r q^(n-r) ,  q = 1 - p             |
  +----+--------------------------------------------------------------+
  | 10 |  BINOMIAL  mean = np , variance = npq , SD = sqrt(npq)       |
  +----+--------------------------------------------------------------+
  | 11 |  POISSON   P(X=r) = e^(-m) m^r / r! ,  mean = variance = m   |
  +----+--------------------------------------------------------------+
  | 12 |  P(at least one) = 1 - P(none)  =  1 - q^n   or  1 - e^(-m)  |
  +----+--------------------------------------------------------------+
```

Learn 1, 3, 5, 9, 10 and 11 first. Those six alone are worth about 9 of the
11-13 marks this chapter offers.
