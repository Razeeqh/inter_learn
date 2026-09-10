# Random Variables and Probability Distributions — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 10 — Random Variables and Probability Distributions**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.
> Never quote a specific exam year unless you have seen that paper yourself.

**Where this chapter appears in the Maths IIA paper (75 marks):**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q9 or Q10
  Section B  (4 marks each, answer any 5)    ->  sometimes Q18 or Q19
  Section C  (7 marks each, answer any 5)    ->  RELIABLY Q23 or Q24

  This chapter is the LAST chapter of the syllabus and it always supplies
  one of the seven long-answer questions. Because most students run out of
  time before reaching it, it is the least-prepared -- and therefore the
  easiest -- 7 marks in the paper.

  Realistic haul from this chapter:  2 + 4 + 7  =  13 marks
  Pass mark for the whole paper = 26.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Definitions

### Q A1
Define a random variable.

**ANSWER:**
```
  Let S be the sample space of a random experiment. A function

                       X :  S  --->  R

  which assigns exactly ONE real number to every outcome of S is called
  a RANDOM VARIABLE.

  EXAMPLE:  Two coins are tossed.  S = {HH, HT, TH, TT}.
            Let X = the number of heads.
            X(HH) = 2 ,  X(HT) = X(TH) = 1 ,  X(TT) = 0.
            Range of X = {0, 1, 2}.
```

---

### Q A2
Define a discrete random variable and give an example.

**ANSWER:**
```
  A random variable whose RANGE is a finite set or a countable set
  (its values can be listed one by one, with gaps between them)
  is called a DISCRETE random variable.

  EXAMPLES:  number of heads when 3 coins are tossed   -> {0,1,2,3}
             number on a die thrown once               -> {1,2,3,4,5,6}
             number of defective bulbs in a box of 20  -> {0,1,...,20}
```

---

### Q A3
Define a continuous random variable and give an example.

**ANSWER:**
```
  A random variable whose range is an INTERVAL of real numbers
  (it can take EVERY value between two limits, with no gaps)
  is called a CONTINUOUS random variable.

  EXAMPLES:  the height of a student
             the time a bus is late
             the life of an electric bulb in hours

  For a continuous random variable P(X = a) = 0 for any single value a.
```

---

### Q A4
State the two conditions that a probability distribution must satisfy.

**ANSWER:**
```
  If X is a discrete random variable with values x1, x2, ..., then
  P(x) is a probability distribution if and only if

     (i)   0  <=  P(xi)  <=  1     for every i
           (no probability is negative or greater than 1)

     (ii)  P(x1) + P(x2) + ...  =  1
           (the total probability is exactly 1)
```

---

### Q A5
Two coins are tossed. Write the probability distribution of X, the number of heads.

**ANSWER:**
```
  S = {HH, HT, TH, TT} ,   n(S) = 4

  X = 0 : TT           -> 1 outcome
  X = 1 : HT, TH       -> 2 outcomes
  X = 2 : HH           -> 1 outcome

  +----------+-------+-------+-------+
  |    x     |   0   |   1   |   2   |
  +----------+-------+-------+-------+
  |   P(x)   |  1/4  |  2/4  |  1/4  |
  +----------+-------+-------+-------+

  CHECK :  1/4 + 2/4 + 1/4 = 1        CORRECT
```

---

## Topic: Finding the constant k

### Q A6
Find k if the following is a probability distribution.

```
     x    :   0     1     2     3
    P(x)  :   k    2k    3k    4k
```

**ANSWER:**
```
     k + 2k + 3k + 4k  =  1
                  10k  =  1
                    k  =  1/10  =  0.1

  Distribution : 0.1 , 0.2 , 0.3 , 0.4
  CHECK : 0.1 + 0.2 + 0.3 + 0.4 = 1        CORRECT
```

---

### Q A7
Find k if `P(X = x) = kx` for `x = 1, 2, 3, 4, 5`.

**ANSWER:**
```
     k(1) + k(2) + k(3) + k(4) + k(5)  =  1
                                  15k  =  1
                                    k  =  1/15

  Distribution : 1/15 , 2/15 , 3/15 , 4/15 , 5/15
  CHECK : (1+2+3+4+5)/15 = 15/15 = 1        CORRECT
```

---

### Q A8
Find k, given the distribution below, and hence find `P(X <= 1)`.

```
     x    :   0      1      2
    P(x)  :  3k    4k-1    2k
```

**ANSWER:**
```
     3k + (4k - 1) + 2k  =  1
                  9k - 1 = 1
                      9k = 2
                       k = 2/9

  Then  P(0) = 3(2/9) = 6/9
        P(1) = 4(2/9) - 1 = 8/9 - 9/9 = -1/9

  This is NEGATIVE, so no such probability distribution exists.

  (If the exam instead writes P(1) = 4k - 1 with a different set-up,
   always test every value against 0 <= P(x) <= 1 before answering.)
```

> This is deliberately included as a warning: **always check the values, not
> just the sum.** If any probability comes out negative, say so.

---

### Q A9
Is the following a probability distribution? Give a reason.

```
     x    :   1      2      3      4
    P(x)  :  0.4    0.3    0.2    0.1
```

**ANSWER:**
```
  (i)  Every value lies between 0 and 1.                    OK
  (ii) 0.4 + 0.3 + 0.2 + 0.1 = 1.0                          OK

  YES -- both conditions hold, so it IS a probability distribution.
```

---

### Q A10
Is the following a probability distribution? Give a reason.

```
     x    :   0      1      2      3
    P(x)  :  0.3    0.6    0.2   -0.1
```

**ANSWER:**
```
  The sum is 0.3 + 0.6 + 0.2 - 0.1 = 1.0, so condition (ii) holds.

  BUT  P(3) = -0.1  is NEGATIVE.

  NO -- it is not a probability distribution, because a probability
  can never be negative.
```

---

## Topic: Mean and variance

### Q A11
Find the mean of the random variable with distribution

```
     x    :   1      2      3
    P(x)  :  1/6    1/3    1/2
```

**ANSWER:**
```
  E(X) = sum x P(x)

       = 1(1/6) + 2(1/3) + 3(1/2)

       = 1/6 + 4/6 + 9/6

       = 14/6  =  7/3  =  2.33 (approx)

  CHECK the P row : 1/6 + 2/6 + 3/6 = 1        CORRECT
```

---

### Q A12
A die is thrown once and X is the number that turns up. Find E(X).

**ANSWER:**
```
  Each face has probability 1/6.

  E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6
       = 21/6
       = 7/2  =  3.5
```

---

### Q A13
Write the formula for the variance of a discrete random variable.

**ANSWER:**
```
  Var(X) = E(X^2) - [E(X)]^2

         = sum of x^2 P(x)   -   ( sum of x P(x) )^2

  Standard deviation  sigma = sqrt( Var(X) ).

  (Equivalent definition:  Var(X) = sum (x - mu)^2 P(x)  where mu = E(X).)
```

---

### Q A14
If `E(X) = 3` and `E(X^2) = 11`, find the variance and the standard deviation.

**ANSWER:**
```
  Var(X) = E(X^2) - [E(X)]^2
         = 11 - 3^2
         = 11 - 9
         = 2

  SD = sqrt(2) = 1.414 (approx)
```

---

### Q A15
If `E(X) = 5` and `Var(X) = 4`, find `E(3X + 2)` and `Var(3X + 2)`.

**ANSWER:**
```
  E(3X + 2)   = 3 E(X) + 2  = 3(5) + 2  =  17

  Var(3X + 2) = 3^2 Var(X)  = 9(4)      =  36

  (The + 2 shifts the mean but does NOT change the variance.)
```

---

### Q A16
A die is thrown. `X` is the number shown. Given `Var(X) = 35/12`, find `Var(2X - 1)`.

**ANSWER:**
```
  Var(2X - 1) = 2^2 Var(X)
              = 4 x 35/12
              = 140/12
              = 35/3  =  11.67 (approx)
```

---

## Topic: Binomial distribution

### Q A17
Write the probability mass function of a binomial distribution and state its
mean and variance.

**ANSWER:**
```
  If X ~ B(n, p) with q = 1 - p, then

        P(X = r)  =  nCr . p^r . q^(n-r) ,     r = 0, 1, 2, ..., n

        MEAN     = n p
        VARIANCE = n p q
        SD       = sqrt(n p q)
```

---

### Q A18
State the conditions under which a binomial distribution can be used.

**ANSWER:**
```
  1.  There is a FIXED number n of trials.
  2.  Each trial has only TWO possible outcomes (success / failure).
  3.  The trials are INDEPENDENT of one another.
  4.  The probability of success p is the SAME in every trial.

  Then X = the number of successes follows B(n, p).
```

---

### Q A19
The mean of a binomial distribution is 4 and its variance is 3. Find n and p.

**ANSWER:**
```
     np  = 4          ... (1)
     npq = 3          ... (2)

  (2)/(1)  ->  q = 3/4      so   p = 1 - 3/4 = 1/4

  From (1)     n(1/4) = 4   ->   n = 16

     n = 16 ,  p = 1/4

  CHECK : mean = 16(1/4) = 4 , var = 16(1/4)(3/4) = 3        CORRECT
```

---

### Q A20
The mean of a binomial distribution is 2 and its variance is 1. Find `P(X >= 1)`.

**ANSWER:**
```
     np = 2 , npq = 1   ->   q = 1/2 ,  p = 1/2 ,  n = 4

     P(X >= 1) = 1 - P(X = 0)
               = 1 - 4C0 (1/2)^0 (1/2)^4
               = 1 - 1/16
               = 15/16
```

---

### Q A21
A fair coin is tossed 5 times. Find the probability of getting exactly 3 heads.

**ANSWER:**
```
  n = 5 , p = 1/2 , q = 1/2

  P(X = 3) = 5C3 (1/2)^3 (1/2)^2
           = 10 x (1/32)
           = 10/32
           = 5/16
```

---

### Q A22
Show that for a binomial distribution the variance is always less than the mean.

**ANSWER:**
```
     variance      n p q
     --------  =  -------  =  q
       mean         n p

  Since  0 < q < 1 ,        variance  =  q x mean  <  mean.

  Hence the variance of a binomial distribution can NEVER be greater
  than (or even equal to) its mean.

  Consequence: a binomial with mean 3 and variance 5 cannot exist.
```

---

### Q A23
A coin is tossed 5 times. Find the most probable number of heads.

**ANSWER:**
```
  n = 5 , p = 1/2       (n + 1)p = 6 x 1/2 = 3   -- a whole number

  When (n+1)p is a whole number there are TWO most probable values:
        r = 3   and   r = 3 - 1 = 2

  CHECK : P(2) = 5C2/32 = 10/32 ,  P(3) = 5C3/32 = 10/32   -- equal
          and both larger than P(1) = P(4) = 5/32.         CORRECT
```

---

## Topic: Poisson distribution

### Q A24
Write the probability mass function of a Poisson distribution and state its
mean and variance.

**ANSWER:**
```
                      e^(-m) . m^r
        P(X = r)  =  --------------- ,      r = 0, 1, 2, 3, ...
                            r!

        where m > 0 is the parameter.

        MEAN     = m
        VARIANCE = m         (the mean and the variance are EQUAL)
        SD       = sqrt(m)
```

---

### Q A25
If X follows a Poisson distribution with `P(X = 1) = P(X = 2)`, find the
parameter m.

**ANSWER:**
```
     e^(-m) m       e^(-m) m^2
     ---------  =  ------------
        1!              2!

  Cancel e^(-m) (it is never 0) :

          m  =  m^2 / 2
         2m  =  m^2
      m(m - 2) = 0

  m = 0 is rejected because m > 0 for a Poisson variable.

          m  =  2       (so the mean and the variance are both 2)
```

---

### Q A26
The mean of a Poisson distribution is 3. Find `P(X = 0)` and `P(X >= 1)`.
Take `e^(-3) = 0.0498`.

**ANSWER:**
```
  m = 3

  P(X = 0) = e^(-3) . 3^0 / 0!  =  e^(-3)  =  0.0498

  P(X >= 1) = 1 - P(X = 0) = 1 - 0.0498 = 0.9502
```

---

### Q A27
For a Poisson distribution, what is the relation between the mean and the
variance? How does this help you identify a Poisson distribution?

**ANSWER:**
```
  MEAN = VARIANCE = m.

  So if a data set has a mean and a variance that are (nearly) equal,
  a Poisson model is appropriate.

  Contrast:  BINOMIAL  ->  variance < mean   (npq < np)
             POISSON   ->  variance = mean
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of 7. This chapter usually gives you one.
# ===============================================================

### Q B1
A random variable X has the distribution below. Find k, `P(X < 3)` and `P(X >= 3)`.

```
     x    :  0     1     2     3     4     5
    P(x)  : 0.1    k    0.2   2k    0.3   3k
```

**ANSWER:**
```
  STEP 1   sum = 1

     0.1 + k + 0.2 + 2k + 0.3 + 3k = 1
                          0.6 + 6k = 1
                                6k = 0.4
                                 k = 1/15

  STEP 2   Rewrite everything in thirtieths:

     0.1 = 3/30 ,  k = 2/30 ,  0.2 = 6/30 ,
     2k  = 4/30 ,  0.3 = 9/30 ,  3k = 6/30

  +--------+------+------+------+------+------+------+
  |   x    |  0   |  1   |  2   |  3   |  4   |  5   |
  +--------+------+------+------+------+------+------+
  |  P(x)  | 3/30 | 2/30 | 6/30 | 4/30 | 9/30 | 6/30 |
  +--------+------+------+------+------+------+------+

  CHECK : (3+2+6+4+9+6)/30 = 30/30 = 1        CORRECT

  STEP 3   P(X < 3) = P(0) + P(1) + P(2)
                    = 3/30 + 2/30 + 6/30
                    = 11/30

  STEP 4   P(X >= 3) = 1 - P(X < 3)
                     = 1 - 11/30
                     = 19/30

           (long check: 4/30 + 9/30 + 6/30 = 19/30   CORRECT)
```

---

### Q B2
Three coins are tossed. Find the probability distribution of X, the number
of heads, and find its mean.

**ANSWER:**
```
  n(S) = 2^3 = 8

  X = 0 : TTT                    1 way
  X = 1 : HTT, THT, TTH          3 ways
  X = 2 : HHT, HTH, THH          3 ways
  X = 3 : HHH                    1 way            total 8   CORRECT

  +----------+-------+-------+-------+-------+
  |    x     |   0   |   1   |   2   |   3   |
  +----------+-------+-------+-------+-------+
  |   P(x)   |  1/8  |  3/8  |  3/8  |  1/8  |
  +----------+-------+-------+-------+-------+

  MEAN  E(X) = 0(1/8) + 1(3/8) + 2(3/8) + 3(1/8)
             = 0 + 3/8 + 6/8 + 3/8
             = 12/8
             = 3/2  =  1.5

  (Cross-check with the binomial: mean = np = 3(1/2) = 3/2.   CORRECT)
```

---

### Q B3
A bag contains 4 white and 3 black balls. Two balls are drawn at random.
Find the probability distribution of the number of black balls drawn, and
find the mean.

**ANSWER:**
```
  Total = 7 balls.   n(S) = 7C2 = 21

  X = 0 (both white) :  4C2 = 6            P = 6/21
  X = 1 (one of each):  4C1 x 3C1 = 12     P = 12/21
  X = 2 (both black) :  3C2 = 3            P = 3/21

  CHECK : 6 + 12 + 3 = 21 = n(S)        CORRECT

  +----------+-------+--------+-------+
  |    x     |   0   |   1    |   2   |
  +----------+-------+--------+-------+
  |   P(x)   | 6/21  | 12/21  | 3/21  |
  +----------+-------+--------+-------+

  MEAN  E(X) = 0(6/21) + 1(12/21) + 2(3/21)
             = (0 + 12 + 6)/21
             = 18/21
             = 6/7  =  0.857 (approx)
```

---

### Q B4
Two cards are drawn at random from a pack of 52 cards. Find the probability
distribution of the number of aces.

**ANSWER:**
```
  n(S) = 52C2 = (52 x 51)/2 = 1326
  4 aces, 48 others.

  X = 0 : 48C2 = (48 x 47)/2 = 1128
  X = 1 : 4C1 x 48C1 = 4 x 48 = 192
  X = 2 : 4C2 = 6

  CHECK : 1128 + 192 + 6 = 1326        CORRECT

  +----------+------------+-----------+----------+
  |    x     |     0      |     1     |    2     |
  +----------+------------+-----------+----------+
  |   P(x)   | 1128/1326  | 192/1326  |  6/1326  |
  |          |  = 188/221 |  = 32/221 | = 1/221  |
  +----------+------------+-----------+----------+

  CHECK : (188 + 32 + 1)/221 = 221/221 = 1        CORRECT

  (Mean, if asked: E(X) = (192 + 12)/1326 = 204/1326 = 2/13.)
```

---

### Q B5
Two dice are thrown. If X is the sum of the numbers shown, find the mean of X.

**ANSWER:**
```
  n(S) = 36.  Frequencies of each sum:

     x    :  2  3  4  5  6  7  8  9 10 11 12
    ways  :  1  2  3  4  5  6  5  4  3  2  1     total 36  CORRECT

  E(X) = sum ( x . ways ) / 36

       = [2(1)+3(2)+4(3)+5(4)+6(5)+7(6)+8(5)+9(4)+10(3)+11(2)+12(1)] / 36

       = [2 + 6 + 12 + 20 + 30 + 42 + 40 + 36 + 30 + 22 + 12] / 36

       = 252/36

       = 7

  (Sensible: the distribution is symmetric about 7.)
```

---

### Q B6
A die is thrown 6 times. If "getting a number greater than 4" is a success,
find the probability of (i) exactly 2 successes (ii) at least 1 success.

**ANSWER:**
```
  "greater than 4" = {5, 6}   ->   p = 2/6 = 1/3 ,  q = 2/3 ,  n = 6

  (i)   P(X = 2) = 6C2 (1/3)^2 (2/3)^4
                 = 15 x (1/9) x (16/81)
                 = 240/729
                 = 80/243
                 = 0.329 (approx)

  (ii)  P(X >= 1) = 1 - P(X = 0)
                  = 1 - (2/3)^6
                  = 1 - 64/729
                  = 665/729
                  = 0.912 (approx)
```

---

### Q B7
It is known that 20% of the bolts produced by a machine are defective.
Four bolts are chosen at random. Find the probability that (i) none is
defective (ii) at most two are defective.

**ANSWER:**
```
  p = 0.2 (defective) ,  q = 0.8 ,  n = 4

  (i)   P(X = 0) = (0.8)^4 = 0.4096

  (ii)  P(X = 0) = 0.4096
        P(X = 1) = 4C1 (0.2)(0.8)^3 = 4(0.2)(0.512)  = 0.4096
        P(X = 2) = 4C2 (0.2)^2(0.8)^2 = 6(0.04)(0.64) = 0.1536
                                                        -------
        P(X <= 2)                                     = 0.9728

  CHECK the whole distribution:
        P(3) = 4(0.008)(0.8) = 0.0256 ,  P(4) = 0.0016
        0.4096+0.4096+0.1536+0.0256+0.0016 = 1.0000     CORRECT
```

---

### Q B8
The probability that a bomb dropped from a plane hits a target is 1/5.
Six bombs are dropped. Find the probability that (i) exactly 2 hit the target
(ii) at least 2 hit the target.

**ANSWER:**
```
  n = 6 ,  p = 1/5 ,  q = 4/5.    Note (1/5)^r (4/5)^(6-r) = 4^(6-r)/15625.

  (i)   P(X = 2) = 6C2 (1/5)^2 (4/5)^4
                 = 15 x (1/25) x (256/625)
                 = 15 x 256 / 15625
                 = 3840/15625
                 = 0.2458 (approx)

  (ii)  P(X = 0) = (4/5)^6 = 4096/15625
        P(X = 1) = 6(1/5)(4/5)^5 = 6 x 1024/15625 = 6144/15625

        P(X >= 2) = 1 - (4096 + 6144)/15625
                  = 1 - 10240/15625
                  = 5385/15625
                  = 0.3446 (approx)
```

---

### Q B9
A man hits a target with probability 0.6. He fires 5 shots. Find the
probability that he hits the target at least 3 times.

**ANSWER:**
```
  n = 5 ,  p = 0.6 ,  q = 0.4

  P(X = 3) = 5C3 (0.6)^3 (0.4)^2 = 10(0.216)(0.16)  = 0.34560
  P(X = 4) = 5C4 (0.6)^4 (0.4)   =  5(0.1296)(0.4)  = 0.25920
  P(X = 5) =      (0.6)^5                            = 0.07776
                                                      ---------
  P(X >= 3)                                          = 0.68256

  So he hits at least 3 times about 68% of the time.
```

---

### Q B10
For a binomial distribution the mean is 6 and the standard deviation is 2.
Find n, p and write `P(X = r)`.

**ANSWER:**
```
     np = 6                    ... (1)
     SD = 2  ->  npq = 4       ... (2)     (SQUARE the SD to get the variance)

  (2)/(1) :   q = 4/6 = 2/3    ->   p = 1/3

  From (1):   n(1/3) = 6       ->   n = 18

     n = 18 ,  p = 1/3 ,  q = 2/3

     P(X = r) = 18Cr (1/3)^r (2/3)^(18-r) ,   r = 0, 1, ..., 18

  CHECK : mean = 18/3 = 6 ; var = 18(1/3)(2/3) = 4 ; SD = 2   CORRECT
```

---

### Q B11
The mean and the variance of a binomial distribution are 4 and 4/3.
Find `P(X >= 1)`.

**ANSWER:**
```
     np = 4 ,  npq = 4/3

     q = (4/3)/4 = 1/3     ->    p = 2/3

     n(2/3) = 4            ->    n = 6

     P(X >= 1) = 1 - P(X = 0)
               = 1 - (1/3)^6
               = 1 - 1/729
               = 728/729
               = 0.9986 (approx)

  CHECK : mean = 6(2/3) = 4 ; var = 6(2/3)(1/3) = 4/3      CORRECT
```

---

### Q B12
The average number of accidents on a road is 2 per week. Assuming a Poisson
distribution, find the probability that in a given week there are
(i) no accidents (ii) exactly 3 accidents (iii) at least one accident.
Take `e^(-2) = 0.1353`.

**ANSWER:**
```
  m = 2

  (i)   P(X = 0) = e^(-2) (2^0)/0!  =  0.1353

  (ii)  P(X = 3) = e^(-2) (2^3)/3!
                 = 0.1353 x 8/6
                 = 0.1353 x 1.3333
                 = 0.1804

  (iii) P(X >= 1) = 1 - P(X = 0)
                  = 1 - 0.1353
                  = 0.8647
```

---

### Q B13
In a factory 1 item out of every 500 is defective. A sample of 1000 items is
examined. Using the Poisson distribution find the probability that the sample
contains (i) no defective item (ii) at most 2 defective items.
Take `e^(-2) = 0.1353`.

**ANSWER:**
```
  n = 1000 is LARGE, p = 1/500 = 0.002 is SMALL, so use Poisson with

        m = n p = 1000 x (1/500) = 2

  (i)   P(X = 0) = e^(-2) = 0.1353

  (ii)  P(X = 1) = e^(-2) x 2/1!  = 2 e^(-2)
        P(X = 2) = e^(-2) x 4/2!  = 2 e^(-2)

        P(X <= 2) = e^(-2)(1 + 2 + 2)
                  = 5 x 0.1353
                  = 0.6765
```

---

### Q B14
A random variable X has the distribution below. Find the cumulative
distribution function `F(x)`, and hence `P(1 < X <= 3)`.

```
     x    :   0     1     2     3     4
    P(x)  :  0.1   0.2   0.3   0.3   0.1
```

**ANSWER:**
```
  CHECK first : 0.1 + 0.2 + 0.3 + 0.3 + 0.1 = 1.0        CORRECT

  F(x) is the running total:

  +--------+------+------+------+------+------+
  |   x    |  0   |  1   |  2   |  3   |  4   |
  +--------+------+------+------+------+------+
  |  F(x)  | 0.1  | 0.3  | 0.6  | 0.9  | 1.0  |
  +--------+------+------+------+------+------+

  Written out:   F(x) = 0     for x < 0
                 F(x) = 0.1   for 0 <= x < 1
                 F(x) = 0.3   for 1 <= x < 2
                 F(x) = 0.6   for 2 <= x < 3
                 F(x) = 0.9   for 3 <= x < 4
                 F(x) = 1     for x >= 4

  P(1 < X <= 3) = F(3) - F(1)
                = 0.9 - 0.3
                = 0.6

  (long check: P(2) + P(3) = 0.3 + 0.3 = 0.6        CORRECT)
```

---

### Q B15
If X has the distribution below, find `E(2X + 3)` and `Var(2X + 3)`.

```
     x    :   1     2     3     4
    P(x)  :  1/4   1/4   1/4   1/4
```

**ANSWER:**
```
  +--------+--------+-------------+---------------+
  |   x    |  P(x)  |  x . P(x)   |  x^2 . P(x)   |
  +--------+--------+-------------+---------------+
  |   1    |  1/4   |    1/4      |    1/4        |
  |   2    |  1/4   |    2/4      |    4/4        |
  |   3    |  1/4   |    3/4      |    9/4        |
  |   4    |  1/4   |    4/4      |   16/4        |
  +--------+--------+-------------+---------------+
  | TOTAL  |   1    |   10/4      |   30/4        |
  +--------+--------+-------------+---------------+

  E(X)   = 10/4 = 2.5
  E(X^2) = 30/4 = 7.5
  Var(X) = 7.5 - (2.5)^2 = 7.5 - 6.25 = 1.25

  E(2X + 3)   = 2(2.5) + 3 = 5 + 3 = 8

  Var(2X + 3) = 2^2 (1.25) = 4 x 1.25 = 5
```

---

### Q B16
A die is thrown 6 times. Find the most probable number of sixes, and the mean
and variance of the number of sixes.

**ANSWER:**
```
  n = 6 ,  p = 1/6 ,  q = 5/6

  MOST PROBABLE VALUE :   (n + 1)p = 7 x (1/6) = 7/6 = 1.166...

  Not a whole number, so mode = integer part = 1.

  CHECK : P(0) = (5/6)^6 = 15625/46656 = 0.3349
          P(1) = 6(1/6)(5/6)^5 = 3125/7776 = 0.4019   <-- largest
          P(2) = 15(1/36)(5/6)^4 = 9375/46656 = 0.2009    CORRECT

  MEAN     = np  = 6(1/6)       = 1
  VARIANCE = npq = 6(1/6)(5/6)  = 5/6  =  0.833 (approx)
  SD       = sqrt(5/6) = 0.913 (approx)

  (Note variance 5/6 < mean 1, as it must be.)
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of 7. This chapter RELIABLY supplies one of them.
# ===============================================================

### Q C1  (the most repeated long answer from this chapter)
The range of a random variable X is `{0, 1, 2}`. Given that

```
     P(X = 0) = 3c^3 ,   P(X = 1) = 4c - 10c^2 ,   P(X = 2) = 5c - 1
```

find the value of c, and hence find the mean and the variance of X.

**ANSWER:**
```
  STEP 1   USE  sum P(x) = 1                                   (1 mark)

     3c^3 + (4c - 10c^2) + (5c - 1)  =  1
     3c^3 - 10c^2 + 9c - 1           =  1
     3c^3 - 10c^2 + 9c - 2           =  0

  STEP 2   SOLVE THE CUBIC                                     (2 marks)

     Try c = 1/3 :
        3(1/27) - 10(1/9) + 9(1/3) - 2
           = 1/9 - 10/9 + 3 - 2
           = -1 + 1 = 0        so (3c - 1) is a factor.

     3c^3 - 10c^2 + 9c - 2  =  (3c - 1)(c^2 - 3c + 2)
                            =  (3c - 1)(c - 1)(c - 2)

     Roots :  c = 1/3 ,  c = 1 ,  c = 2

  STEP 3   REJECT THE IMPOSSIBLE ROOTS                         (1 mark)

     c = 1  ->  P(X = 2) = 5(1) - 1 = 4  >  1    IMPOSSIBLE
     c = 2  ->  P(X = 2) = 5(2) - 1 = 9  >  1    IMPOSSIBLE

     Only c = 1/3 gives probabilities between 0 and 1.

                        c = 1/3

  STEP 4   WRITE THE DISTRIBUTION                              (1 mark)

     P(X = 0) = 3(1/3)^3 = 3/27 = 1/9
     P(X = 1) = 4(1/3) - 10(1/9) = 12/9 - 10/9 = 2/9
     P(X = 2) = 5(1/3) - 1 = 5/3 - 3/3 = 2/3 = 6/9

  +--------+--------+--------+--------+
  |   x    |   0    |   1    |   2    |
  +--------+--------+--------+--------+
  |  P(x)  |  1/9   |  2/9   |  6/9   |
  +--------+--------+--------+--------+

  CHECK : (1 + 2 + 6)/9 = 9/9 = 1        CORRECT

  STEP 5   MEAN AND VARIANCE                                   (2 marks)

  +--------+--------+-------------+---------------+
  |   x    |  P(x)  |  x . P(x)   |  x^2 . P(x)   |
  +--------+--------+-------------+---------------+
  |   0    |  1/9   |     0       |      0        |
  |   1    |  2/9   |    2/9      |   1(2/9)=2/9  |
  |   2    |  6/9   |   12/9      |   4(6/9)=24/9 |
  +--------+--------+-------------+---------------+
  | TOTAL  |   1    |   14/9      |     26/9      |
  +--------+--------+-------------+---------------+

     MEAN     E(X) = 14/9  =  1.556 (approx)

     E(X^2)        = 26/9

     VARIANCE Var(X) = 26/9 - (14/9)^2
                     = 26/9 - 196/81
                     = 234/81 - 196/81
                     = 38/81
                     = 0.469 (approx)

     SD = sqrt(38)/9 = 6.164/9 = 0.685 (approx)
```

---

### Q C2
A random variable X has the following probability distribution. Find k, the
mean and the variance of X.

```
     x    :  0     1     2     3     4     5
    P(x)  : 0.1    k    0.2   2k    0.3   3k
```

**ANSWER:**
```
  STEP 1   FIND k                                              (1 mark)

     0.1 + k + 0.2 + 2k + 0.3 + 3k = 1
                         0.6 + 6k  = 1
                               6k  = 0.4
                                k  = 1/15

  STEP 2   REWRITE IN THIRTIETHS (keeps the arithmetic exact)  (1 mark)

     0.1 = 3/30 , k = 2/30 , 0.2 = 6/30 , 2k = 4/30 ,
     0.3 = 9/30 , 3k = 6/30

     CHECK : (3+2+6+4+9+6)/30 = 30/30 = 1        CORRECT

  STEP 3   THE FOUR-COLUMN TABLE                               (3 marks)

  +--------+--------+---------------+-------------------+
  |   x    |  P(x)  |   x . P(x)    |   x^2 . P(x)      |
  +--------+--------+---------------+-------------------+
  |   0    |  3/30  |      0        |        0          |
  |   1    |  2/30  |     2/30      |   1(2/30) =  2/30 |
  |   2    |  6/30  |    12/30      |   4(6/30) = 24/30 |
  |   3    |  4/30  |    12/30      |   9(4/30) = 36/30 |
  |   4    |  9/30  |    36/30      |  16(9/30) =144/30 |
  |   5    |  6/30  |    30/30      |  25(6/30) =150/30 |
  +--------+--------+---------------+-------------------+
  | TOTAL  | 30/30  |    92/30      |      356/30       |
  +--------+--------+---------------+-------------------+

  STEP 4   MEAN                                                (1 mark)

     E(X) = 92/30 = 46/15 = 3.067 (approx)

  STEP 5   VARIANCE                                            (1 mark)

     E(X^2) = 356/30 = 178/15

     Var(X) = 178/15 - (46/15)^2
            = 178/15 - 2116/225
            = 2670/225 - 2116/225
            = 554/225
            = 2.462 (approx)

     SD = sqrt(2.462) = 1.569 (approx)
```

---

### Q C3
Find the mean and the variance of a binomial distribution `B(n, p)`.
Hence, if the mean is 4 and the variance is 3, find n, p and `P(X >= 1)`.

**ANSWER:**
```
  PART 1 -- THE MEAN                                           (3 marks)

     P(X = r) = nCr p^r q^(n-r) ,  q = 1 - p

                       n
     E(X)  =  sum    r . nCr p^r q^(n-r)          (the r = 0 term is 0)
                    r=1

                       n           n!
           =  sum    r . -------------- p^r q^(n-r)
                    r=1   r! (n-r)!

           use   r/r! = 1/(r-1)!   and   n! = n(n-1)!

                          n        (n-1)!
           =  n p  sum   ------------------- p^(r-1) q^(n-r)
                    r=1   (r-1)! (n-r)!

                          n
           =  n p  sum   (n-1)C(r-1) p^(r-1) q^(n-r)
                    r=1

           put s = r - 1 ; then s runs 0 to n-1 and n-r = (n-1)-s

                          n-1
           =  n p  sum   (n-1)Cs p^s q^((n-1)-s)
                    s=0

           =  n p (q + p)^(n-1)          [binomial theorem]

           =  n p (1)^(n-1)

                    E(X) = n p

  PART 2 -- THE VARIANCE                                       (3 marks)

     First find E[X(X-1)] :

                         n
     E[X(X-1)] = sum   r(r-1) nCr p^r q^(n-r)     (r = 0 and 1 give 0)
                       r=2

                              n         (n-2)!
               = n(n-1)p^2 sum  ------------------ p^(r-2) q^(n-r)
                              r=2 (r-2)! (n-r)!

               = n(n-1)p^2 (q + p)^(n-2)

               = n(n-1) p^2

     Then      E(X^2) = E[X(X-1)] + E(X)
                      = n(n-1)p^2 + np
                      = n^2 p^2 - n p^2 + n p

     So        Var(X) = E(X^2) - [E(X)]^2
                      = n^2 p^2 - n p^2 + n p - n^2 p^2
                      = n p - n p^2
                      = n p (1 - p)

                    Var(X) = n p q ,   SD = sqrt(n p q)

  PART 3 -- THE NUMERICAL PART                                 (1 mark)

     np = 4 , npq = 3    ->   q = 3/4 , p = 1/4 , n = 16

     P(X >= 1) = 1 - P(X = 0) = 1 - (3/4)^16
               = 1 - 0.0100
               = 0.99 (approx)
```

---

### Q C4
Find the mean and the variance of a Poisson distribution with parameter m.
Hence, if `3 P(X = 4) = P(X = 2)` for a Poisson variable, find m and `P(X = 0)`.
Take `e^(-2) = 0.1353`.

**ANSWER:**
```
  PART 1 -- FIRST CHECK IT IS A DISTRIBUTION                   (1 mark)

                inf   e^(-m) m^r              inf  m^r
     sum P(r) = sum   ------------ = e^(-m) . sum  -----  = e^(-m) e^m = 1
                r=0        r!                 r=0   r!

  PART 2 -- THE MEAN                                           (2 marks)

                 inf     e^(-m) m^r
     E(X)  =  sum    r . ------------          (r = 0 term is 0)
                 r=0          r!

                            inf     m^r
           =  e^(-m)  sum        ---------          [ r/r! = 1/(r-1)! ]
                            r=1    (r-1)!

           put s = r - 1 :

                                  inf   m^s
           =  e^(-m) . m .  sum       ------
                                  s=0    s!

           =  e^(-m) . m . e^m

                    E(X) = m

  PART 3 -- THE VARIANCE                                       (2 marks)

                            inf      m^r
     E[X(X-1)] = e^(-m) sum      ---------      (r = 0, 1 terms are 0)
                            r=2    (r-2)!

               = e^(-m) . m^2 . e^m
               = m^2

     E(X^2) = E[X(X-1)] + E(X) = m^2 + m

     Var(X) = E(X^2) - [E(X)]^2 = m^2 + m - m^2 = m

                    Var(X) = m ,   SD = sqrt(m)

     So for a Poisson distribution  MEAN = VARIANCE = m.

  PART 4 -- THE NUMERICAL PART                                 (2 marks)

     3 P(X = 4) = P(X = 2)

     3 e^(-m) m^4 / 4!  =  e^(-m) m^2 / 2!

     Cancel e^(-m) :        3 m^4 / 24  =  m^2 / 2

                                m^4 / 8  =  m^2 / 2

                                2 m^4 = 8 m^2

                             m^2 (m^2 - 4) = 0

     m > 0, so  m = 2.   (m = 0 and m = -2 are rejected.)

     P(X = 0) = e^(-2) = 0.1353

     Mean = variance = 2.
```

---

### Q C5
A bag contains 5 white and 3 black balls. Two balls are drawn at random
without replacement. Let X be the number of black balls drawn. Find the
probability distribution of X, its cumulative distribution function, its
mean and its variance.

**ANSWER:**
```
  STEP 1   THE SAMPLE SPACE                                    (1 mark)

     Total balls = 8.     n(S) = 8C2 = (8 x 7)/2 = 28

  STEP 2   THE DISTRIBUTION                                    (2 marks)

     X = 0 (both white) :  5C2 = 10          P = 10/28
     X = 1 (one of each):  5C1 x 3C1 = 15    P = 15/28
     X = 2 (both black) :  3C2 = 3           P =  3/28

     CHECK : 10 + 15 + 3 = 28 = n(S)        CORRECT

  +--------+--------+--------+--------+
  |   x    |   0    |   1    |   2    |
  +--------+--------+--------+--------+
  |  P(x)  | 10/28  | 15/28  |  3/28  |
  +--------+--------+--------+--------+

  STEP 3   CUMULATIVE DISTRIBUTION FUNCTION                    (1 mark)

  +--------+--------+--------+--------+
  |   x    |   0    |   1    |   2    |
  +--------+--------+--------+--------+
  |  F(x)  | 10/28  | 25/28  | 28/28  |
  +--------+--------+--------+--------+
                                  = 1   CORRECT

  STEP 4   MEAN AND VARIANCE                                   (3 marks)

  +--------+--------+-------------+------------------+
  |   x    |  P(x)  |  x . P(x)   |   x^2 . P(x)     |
  +--------+--------+-------------+------------------+
  |   0    | 10/28  |     0       |        0         |
  |   1    | 15/28  |   15/28     |  1(15/28)= 15/28 |
  |   2    |  3/28  |    6/28     |  4( 3/28)= 12/28 |
  +--------+--------+-------------+------------------+
  | TOTAL  | 28/28  |   21/28     |      27/28       |
  +--------+--------+-------------+------------------+

     MEAN     E(X) = 21/28 = 3/4 = 0.75

     E(X^2)        = 27/28

     VARIANCE Var(X) = 27/28 - (3/4)^2
                     = 27/28 - 9/16

                       LCM of 28 and 16 is 112

                     = 108/112 - 63/112
                     = 45/112
                     = 0.402 (approx)

     SD = sqrt(45/112) = 0.634 (approx)
```

---

### Q C6
The probability that a man hits a target is 1/3. He fires 5 shots. Find
(i) the probability that he hits the target at least twice, (ii) the mean and
variance of the number of hits, (iii) the most probable number of hits.

**ANSWER:**
```
  n = 5 ,  p = 1/3 ,  q = 2/3

  (i)  AT LEAST TWICE                                          (3 marks)

     P(X = 0) = (2/3)^5 = 32/243

     P(X = 1) = 5C1 (1/3)(2/3)^4
              = 5 x (1/3) x (16/81)
              = 80/243

     P(X >= 2) = 1 - 32/243 - 80/243
               = 1 - 112/243
               = 131/243
               = 0.539 (approx)

  (ii) MEAN AND VARIANCE                                       (2 marks)

     MEAN     = np  = 5(1/3)       = 5/3   = 1.667 (approx)
     VARIANCE = npq = 5(1/3)(2/3)  = 10/9  = 1.111 (approx)
     SD       = sqrt(10)/3 = 1.054 (approx)

     (Note 10/9 < 5/3, i.e. variance < mean, as it must be.)

  (iii) MOST PROBABLE NUMBER OF HITS                           (2 marks)

     (n + 1)p = 6 x (1/3) = 2 -- a WHOLE NUMBER

     So there are TWO most probable values:  r = 2 and r = 1.

     CHECK : P(1) = 80/243 and
             P(2) = 5C2 (1/3)^2 (2/3)^3 = 10 x (1/9) x (8/27) = 80/243
             They are equal, and P(3) = 10(1/27)(4/9) = 40/243 is
             smaller.                                    CORRECT
```

---

### Q C7
Eight coins are tossed together. This experiment is repeated 256 times.
Find (i) the probability distribution of the number of heads in one toss of
the eight coins, (ii) the expected number of times that at least six heads
appear, (iii) the mean and variance of the number of heads.

**ANSWER:**
```
  n = 8 ,  p = 1/2 ,  q = 1/2 ,   so  P(X = r) = 8Cr / 256

  (i)  THE DISTRIBUTION                                        (3 marks)

  +--------+-----+-----+-----+-----+-----+-----+-----+-----+-----+
  |   r    |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |
  +--------+-----+-----+-----+-----+-----+-----+-----+-----+-----+
  |  8Cr   |  1  |  8  | 28  | 56  | 70  | 56  | 28  |  8  |  1  |
  +--------+-----+-----+-----+-----+-----+-----+-----+-----+-----+
  | P(X=r) | 1   |  8  | 28  | 56  | 70  | 56  | 28  |  8  |  1  |
  |        | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  |        | 256 | 256 | 256 | 256 | 256 | 256 | 256 | 256 | 256 |
  +--------+-----+-----+-----+-----+-----+-----+-----+-----+-----+

  CHECK : 1+8+28+56+70+56+28+8+1 = 256 ,  so the sum of the
          probabilities is 256/256 = 1.                  CORRECT

  (ii) AT LEAST SIX HEADS                                      (2 marks)

     P(X >= 6) = (28 + 8 + 1)/256 = 37/256

     Expected number of times in 256 repetitions
          = 256 x 37/256
          = 37 times

  (iii) MEAN AND VARIANCE                                      (2 marks)

     MEAN     = np  = 8(1/2)      = 4
     VARIANCE = npq = 8(1/2)(1/2) = 2
     SD       = sqrt(2) = 1.414 (approx)
```

---

### Q C8  (harder — attempt only if you have time)
The range of a random variable X is `{1, 2, 3, ...}` and
`P(X = k) = c^k / k!` for `k = 1, 2, 3, ...`. Find the value of c and
the variance of X.

**ANSWER:**
```
  STEP 1   USE  sum P(x) = 1

                inf   c^k
        sum          -----  =  1
                k=1    k!

     Recall the exponential series:

                inf   c^k                      inf  c^k
        e^c =  sum   -----  =  1  +  sum      -----
                k=0    k!                k=1    k!

     So the sum starting from k = 1 is  e^c - 1.

              e^c - 1 = 1
                  e^c = 2
                    c = log 2       (natural logarithm, about 0.6931)

  STEP 2   THE MEAN

                inf       c^k         inf    c^k
        E(X) = sum   k . -----  =  sum      -------
                k=1        k!        k=1    (k-1)!

             = c . e^c              (put s = k - 1)

             = c x 2   =  2c        [ since e^c = 2 ]

             = 2 log 2  =  1.386 (approx)

  STEP 3   E(X^2)  via  E[X(X-1)]

        E[X(X-1)] = sum (k>=2)  k(k-1) c^k / k!
                  = sum (k>=2)  c^k / (k-2)!
                  = c^2 e^c
                  = 2 c^2

        E(X^2) = E[X(X-1)] + E(X) = 2c^2 + 2c

  STEP 4   THE VARIANCE

        Var(X) = E(X^2) - [E(X)]^2
               = (2c^2 + 2c) - (2c)^2
               = 2c^2 + 2c - 4c^2
               = 2c - 2c^2
               = 2c (1 - c)

               = 2 (log 2) (1 - log 2)

  NUMERICAL CHECK with c = 0.6931 :
        mean   = 2(0.6931) = 1.3863
        E(X^2) = 2(0.4804) + 1.3863 = 0.9609 + 1.3863 = 2.3472
        Var    = 2.3472 - (1.3863)^2 = 2.3472 - 1.9218 = 0.4254
        2c(1-c) = 2(0.6931)(0.3069) = 0.4254          CORRECT
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| 1 | Find k, then the mean and variance of a given table | C (7M) | **Very high** |
| 2 | Range {0,1,2} with `3c^3`, `4c-10c^2`, `5c-1` — find c | C (7M) | **Very high** |
| 3 | Mean and variance of a binomial (derivation) + numerical | C (7M) | High |
| 4 | Mean and variance of a Poisson (derivation) + numerical | C (7M) | High |
| 5 | Given mean and variance of a binomial, find n and p | A (2M) | **Very high** |
| 6 | Define a random variable / discrete / continuous | A (2M) | Very high |
| 7 | Find k from a simple table (`k, 2k, 3k, 4k`) | A (2M) | Very high |
| 8 | Poisson: `P(X=1) = P(X=2)`, find m | A (2M) | High |
| 9 | Build a distribution from balls drawn from a bag | B (4M) | High |
| 10 | Binomial "at least / at most" numerical | B (4M) | High |
| 11 | Two conditions of a probability distribution | A (2M) | High |
| 12 | `E(aX+b)` and `Var(aX+b)` | A (2M) | Medium |
| 13 | Most probable number of successes | B (4M) | Medium |
| 14 | Cumulative distribution function | B (4M) | Medium |
| 15 | Poisson replacing a binomial (1 in 500 defective) | B (4M) | Medium |
| 16 | Show that variance < mean for a binomial | A (2M) | Medium |

---

# THE THREE-QUESTION GUARANTEE

If you learn **only** these three things you will still collect roughly
11 marks from this chapter:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  1.  THE FOUR-COLUMN TABLE                          -> 7 marks    |
  |      x | P(x) | x P(x) | x^2 P(x)                                 |
  |      Find k with sum = 1, then mean and variance.                 |
  |                                                                   |
  |  2.  q = variance / mean ,  p = 1 - q ,  n = mean / p  -> 2 marks |
  |      The binomial "find n and p" question.                        |
  |                                                                   |
  |  3.  POISSON: mean = variance = m , P(X=r) = e^-m m^r / r!        |
  |      and P(X=1) = P(X=2) gives m = 2.              -> 2 marks     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Nothing there requires a proof, a construction or a clever idea. It is
arithmetic in a table. That is why this is the cheapest 11 marks in Maths IIA.
