# Random Variables and Probability Distributions — JEE Main / AP EAPCET / TG EAPCET

All multiple choice. This chapter is a gift in the entrance exams: the questions are
formula-substitution, the arithmetic is small, and most of them can be finished in
under 40 seconds.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 4
  TG EAPCET  (Maths, 80 questions)  ->  2 to 4
  JEE Main   (Maths, 25 questions)  ->  1     (usually binomial mean/variance
                                               or a mean-of-a-table question)
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Find k / is it a distribution (free marks)

### Q1
If `P(X = x) = kx` for `x = 1, 2, 3, 4`, then k is

(a) 1/10 &nbsp;&nbsp; (b) 1/5 &nbsp;&nbsp; (c) 1/15 &nbsp;&nbsp; (d) 1/4

**ANSWER: (a)**
```
  k(1 + 2 + 3 + 4) = 1
             10k   = 1
               k   = 1/10
```

---

### Q2
A random variable X takes values 1, 2, 3, ... with `P(X = r) = k / 2^r`.
Then k =

(a) 1/2 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 1/4

**ANSWER: (b)**
```
  sum = k(1/2 + 1/4 + 1/8 + ...)

  This is a GP with first term 1/2 and ratio 1/2:

        sum of GP = (1/2)/(1 - 1/2) = 1

  So   k x 1 = 1   ->   k = 1
```
> **SHORTCUT:** `1/2 + 1/4 + 1/8 + ... = 1`. Memorise it — it turns up constantly.

---

### Q3
If `P(X = r) = c (1/3)^r` for `r = 1, 2, 3, ...` then c =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 3/2

**ANSWER: (b)**
```
  sum = c [ (1/3) + (1/9) + (1/27) + ... ]

                (1/3)        (1/3)
      GP sum = --------- = --------- = 1/2
               1 - (1/3)     (2/3)

  So   c(1/2) = 1   ->   c = 2
```

---

### Q4
For the distribution below, k =

```
     x    :  0     1      2     3     4
    P(x)  : 0.1   0.25   0.3   0.2    k
```

(a) 0.1 &nbsp;&nbsp; (b) 0.15 &nbsp;&nbsp; (c) 0.2 &nbsp;&nbsp; (d) 0.05

**ANSWER: (b)**
```
  0.1 + 0.25 + 0.3 + 0.2 = 0.85
  k = 1 - 0.85 = 0.15
```

---

### Q5
Which of the following is NOT a probability distribution?

(a) 0.2, 0.3, 0.5 &nbsp;&nbsp; (b) 0.1, 0.4, 0.5 &nbsp;&nbsp;
(c) 0.6, 0.5, -0.1 &nbsp;&nbsp; (d) 1/4, 1/4, 1/2

**ANSWER: (c)**
```
  All four rows add to 1, but (c) contains -0.1.
  A probability can NEVER be negative.
```
> **SHORTCUT:** Scan for a MINUS SIGN first, then check the sum. The examiner
> always makes the sum equal 1 to trap you.

---

### Q6
The range of a random variable X is `{0, 1, 2}` with
`P(X=0) = 3c^3`, `P(X=1) = 4c - 10c^2`, `P(X=2) = 5c - 1`. Then c =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 1/3 &nbsp;&nbsp; (d) 1/2

**ANSWER: (c)**
```
  Sum = 1  gives  3c^3 - 10c^2 + 9c - 2 = 0
                = (3c - 1)(c - 1)(c - 2) = 0
  Roots 1/3, 1, 2. Only c = 1/3 keeps every P(x) between 0 and 1.
```
> **SHORTCUT in an MCQ:** do not solve the cubic. Just substitute each option into
> `P(X = 2) = 5c - 1`. c = 1 gives 4, c = 2 gives 9 — both impossible. c = 1/2
> gives `P(X=0) = 3/8`, `P(X=1) = 2 - 2.5 = -0.5`, negative. Only c = 1/3 survives.

---

# PATTERN 2 — Mean of a small table

### Q7
A die is thrown once. The mean of the number obtained is

(a) 3 &nbsp;&nbsp; (b) 3.5 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 2.5

**ANSWER: (b)**
```
  E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5
```

---

### Q8
Two dice are thrown. The mean of the sum of the numbers is

(a) 6 &nbsp;&nbsp; (b) 6.5 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 7.5

**ANSWER: (c)**
```
  The mean of ONE die is 3.5, so the mean of the sum of two is
  3.5 + 3.5 = 7.
```
> **SHORTCUT:** Means always ADD. Never build the 11-row table for this.

---

### Q9
Four coins are tossed. The mean number of heads is

(a) 1 &nbsp;&nbsp; (b) 1.5 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 2.5

**ANSWER: (c)**
```
  Binomial with n = 4, p = 1/2.   mean = np = 4(1/2) = 2
```

---

### Q10
If X has the distribution `P(1) = 1/6, P(2) = 1/3, P(3) = 1/2`, then `E(X)` is

(a) 2 &nbsp;&nbsp; (b) 7/3 &nbsp;&nbsp; (c) 5/2 &nbsp;&nbsp; (d) 11/6

**ANSWER: (b)**
```
  E(X) = 1(1/6) + 2(1/3) + 3(1/2)
       = 1/6 + 4/6 + 9/6
       = 14/6 = 7/3
```

---

### Q11
A player pays Rs 5 to throw a die and receives Rs 30 if a six turns up
(and nothing otherwise). His expected gain per game is

(a) Rs 0 &nbsp;&nbsp; (b) Rs 5 &nbsp;&nbsp; (c) Rs 25 &nbsp;&nbsp; (d) Rs 30

**ANSWER: (a)**
```
  gain = +25 with probability 1/6 ,  -5 with probability 5/6

  E = 25(1/6) - 5(5/6) = 25/6 - 25/6 = 0

  The game is FAIR.
```

---

# PATTERN 3 — Variance and standard deviation

### Q12
The variance of the number obtained on throwing a die is

(a) 35/12 &nbsp;&nbsp; (b) 35/6 &nbsp;&nbsp; (c) 7/2 &nbsp;&nbsp; (d) 91/6

**ANSWER: (a)**
```
  E(X)   = 7/2
  E(X^2) = (1+4+9+16+25+36)/6 = 91/6

  Var = 91/6 - 49/4 = 182/12 - 147/12 = 35/12
```
> **SHORTCUT:** Memorise it. "Die: mean 3.5, variance 35/12" appears every year.

---

### Q13
If `E(X) = 2` and `E(X^2) = 6`, then `Var(X)` is

(a) 4 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 3

**ANSWER: (b)**
```
  Var = E(X^2) - [E(X)]^2 = 6 - 4 = 2
```
> **TRAP:** Option (a) is what you get from `E(X^2) - E(X) = 6 - 2 = 4`.
> That formula is WRONG. Square the mean.

---

### Q14
The variance of the number of heads when three coins are tossed is

(a) 1/2 &nbsp;&nbsp; (b) 3/4 &nbsp;&nbsp; (c) 3/2 &nbsp;&nbsp; (d) 1

**ANSWER: (b)**
```
  Binomial n = 3, p = q = 1/2

  Var = npq = 3(1/2)(1/2) = 3/4
```

---

### Q15
X takes the values 0, 1, 2 with probabilities 1/4, 1/2, 1/4. Then `Var(X)` is

(a) 1 &nbsp;&nbsp; (b) 1/4 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 3/4

**ANSWER: (c)**
```
  E(X)   = 0(1/4) + 1(1/2) + 2(1/4) = 1
  E(X^2) = 0 + 1(1/2) + 4(1/4) = 1/2 + 1 = 3/2

  Var = 3/2 - 1 = 1/2
```

---

### Q16
If the standard deviation of X is 3, then `Var(2X + 5)` is

(a) 18 &nbsp;&nbsp; (b) 36 &nbsp;&nbsp; (c) 41 &nbsp;&nbsp; (d) 6

**ANSWER: (b)**
```
  Var(X) = 3^2 = 9

  Var(2X + 5) = 2^2 x 9 = 36        (the + 5 does nothing)
```

---

# PATTERN 4 — Properties E(aX + b) and Var(aX + b)

### Q17
If `E(X) = 3`, then `E(2X + 5)` is

(a) 6 &nbsp;&nbsp; (b) 11 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 16

**ANSWER: (b)**
```
  E(2X + 5) = 2(3) + 5 = 11
```

---

### Q18
If `Var(X) = 2`, then `Var(3X + 2)` is

(a) 6 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 18 &nbsp;&nbsp; (d) 20

**ANSWER: (c)**
```
  Var(3X + 2) = 3^2 x 2 = 18
```
> **TRAP:** Option (d) = 18 + 2 comes from wrongly adding b. Constants never
> add to a variance.

---

### Q19
If `SD(X) = 4`, then `SD(-3X + 7)` is

(a) -12 &nbsp;&nbsp; (b) 12 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 144

**ANSWER: (b)**
```
  SD(aX + b) = |a| SD(X) = |-3| x 4 = 12

  A standard deviation is never negative.
```

---

# PATTERN 5 — Binomial, direct substitution

### Q20
A fair coin is tossed 6 times. The probability of exactly 4 heads is

(a) 15/64 &nbsp;&nbsp; (b) 1/4 &nbsp;&nbsp; (c) 3/32 &nbsp;&nbsp; (d) 5/16

**ANSWER: (a)**
```
  P = 6C4 / 2^6 = 15/64
```
> **SHORTCUT:** For a FAIR coin, `P(exactly r heads in n tosses) = nCr / 2^n`.
> No powers of p needed at all.

---

### Q21
A die is thrown 4 times. The probability of getting exactly two sixes is

(a) 25/216 &nbsp;&nbsp; (b) 1/36 &nbsp;&nbsp; (c) 25/1296 &nbsp;&nbsp; (d) 5/72

**ANSWER: (a)**
```
  n = 4, p = 1/6, q = 5/6

  P(X=2) = 4C2 (1/6)^2 (5/6)^2
         = 6 x (1/36) x (25/36)
         = 150/1296
         = 25/216
```

---

### Q22
A die is thrown 4 times. The probability of getting at least one six is

(a) 671/1296 &nbsp;&nbsp; (b) 625/1296 &nbsp;&nbsp; (c) 1/6 &nbsp;&nbsp; (d) 4/6

**ANSWER: (a)**
```
  P(at least one) = 1 - P(none)
                  = 1 - (5/6)^4
                  = 1 - 625/1296
                  = 671/1296
```
> **SHORTCUT:** "At least one" is ALWAYS `1 - q^n`. One step.

---

### Q23
A coin is tossed 5 times. The probability of getting at least one head is

(a) 1/32 &nbsp;&nbsp; (b) 31/32 &nbsp;&nbsp; (c) 5/32 &nbsp;&nbsp; (d) 1/2

**ANSWER: (b)**
```
  1 - (1/2)^5 = 1 - 1/32 = 31/32
```

---

### Q24
If 10% of the bulbs made are defective, the probability that in a sample of
3 bulbs none is defective is

(a) 0.729 &nbsp;&nbsp; (b) 0.271 &nbsp;&nbsp; (c) 0.9 &nbsp;&nbsp; (d) 0.001

**ANSWER: (a)**
```
  q = 0.9 ,  P(X = 0) = (0.9)^3 = 0.729
```

---

# PATTERN 6 — Binomial: given the mean and the variance

### Q25
The mean and variance of a binomial distribution are 4 and 3. Then n =

(a) 6 &nbsp;&nbsp; (b) 12 &nbsp;&nbsp; (c) 16 &nbsp;&nbsp; (d) 24

**ANSWER: (c)**
```
  q = variance/mean = 3/4  ->  p = 1/4  ->  n = mean/p = 4/(1/4) = 16
```
> **SHORTCUT — the three-step chain, worth memorising:**
> `q = var/mean`, then `p = 1 - q`, then `n = mean/p`. Ten seconds.

---

### Q26
The mean of a binomial distribution is 20 and its standard deviation is 4.
Then n =

(a) 25 &nbsp;&nbsp; (b) 50 &nbsp;&nbsp; (c) 80 &nbsp;&nbsp; (d) 100

**ANSWER: (d)**
```
  SD = 4  ->  variance = 16

  q = 16/20 = 0.8  ->  p = 0.2  ->  n = 20/0.2 = 100
```
> **TRAP:** Do not use 4 as the variance. SQUARE the standard deviation first.

---

### Q27
For a binomial distribution mean = 4 and variance = 2. Then `P(X = 1)` is

(a) 1/32 &nbsp;&nbsp; (b) 1/16 &nbsp;&nbsp; (c) 7/64 &nbsp;&nbsp; (d) 1/8

**ANSWER: (a)**
```
  q = 2/4 = 1/2  ->  p = 1/2  ->  n = 4/(1/2) = 8

  P(X = 1) = 8C1 (1/2)^1 (1/2)^7 = 8/256 = 1/32

  (option (c) = 28/256 is P(X = 2) -- read the question's r carefully)
```

---

### Q28
Which of the following can NOT be the mean and variance of a binomial
distribution?

(a) mean 4, variance 3 &nbsp;&nbsp; (b) mean 5, variance 4 &nbsp;&nbsp;
(c) mean 3, variance 4 &nbsp;&nbsp; (d) mean 6, variance 2

**ANSWER: (c)**
```
  For a binomial,   variance = q x mean  <  mean   because q < 1.

  In (c) the variance 4 is BIGGER than the mean 3 -- impossible.
```
> **SHORTCUT:** In any binomial MCQ, glance at mean vs variance. If variance
> is not strictly smaller, that option is the answer to a "not possible" question.

---

### Q29
For a binomial distribution mean = 5 and variance = 4. Then p =

(a) 1/5 &nbsp;&nbsp; (b) 4/5 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 5/9

**ANSWER: (a)**
```
  q = 4/5   ->   p = 1 - 4/5 = 1/5
  (and n = 5/(1/5) = 25)
```

---

# PATTERN 7 — Binomial: an equation between two probabilities

### Q30
If X ~ B(6, p) and `9 P(X = 4) = P(X = 2)`, then p =

(a) 1/2 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 2/3

**ANSWER: (c)**
```
  9 x 6C4 p^4 q^2  =  6C2 p^2 q^4

  6C4 = 6C2 = 15, so they cancel:

           9 p^4 q^2 = p^2 q^4
              9 p^2  = q^2
               3p    = q = 1 - p
               4p    = 1
                p    = 1/4
```
> **SHORTCUT:** `nCr` and `nC(n-r)` are equal — spot that and half the work vanishes.

---

### Q31
If X ~ B(5, p) and `P(X = 2) = 9 P(X = 3)`, then p =

(a) 1/10 &nbsp;&nbsp; (b) 1/5 &nbsp;&nbsp; (c) 9/10 &nbsp;&nbsp; (d) 1/2

**ANSWER: (a)**
```
  5C2 = 5C3 = 10, so they cancel:

        p^2 q^3 = 9 p^3 q^2
              q = 9p
          1 - p = 9p
              p = 1/10
```

---

### Q32
If X ~ B(5, p) and `P(X = 2) = P(X = 3)`, then p =

(a) 1/3 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) 2/3 &nbsp;&nbsp; (d) 1/5

**ANSWER: (b)**
```
  5C2 = 5C3, so   p^2 q^3 = p^3 q^2   ->   q = p   ->   p = 1/2
```

---

# PATTERN 8 — Most probable number of successes

### Q33
A coin is tossed 7 times. The most probable number of heads is

(a) 3 only &nbsp;&nbsp; (b) 4 only &nbsp;&nbsp; (c) 3 and 4 &nbsp;&nbsp; (d) 7

**ANSWER: (c)**
```
  (n + 1)p = 8 x (1/2) = 4  -- a WHOLE NUMBER

  So the two modes are 4 and 4 - 1 = 3.

  CHECK : P(3) = 7C3/128 = 35/128 ,  P(4) = 7C4/128 = 35/128 -- equal
```

---

### Q34
A die is thrown 5 times. The most probable number of sixes is

(a) 0 only &nbsp;&nbsp; (b) 1 only &nbsp;&nbsp; (c) 0 and 1 &nbsp;&nbsp; (d) 2

**ANSWER: (c)**
```
  (n + 1)p = 6 x (1/6) = 1  -- a whole number, so modes are 1 and 0.

  CHECK : P(0) = (5/6)^5 = 3125/7776
          P(1) = 5(1/6)(5/6)^4 = 5 x 625/7776 = 3125/7776   -- equal
```

---

### Q35
A die is thrown 6 times. The most probable number of sixes is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 0 and 1

**ANSWER: (b)**
```
  (n + 1)p = 7/6 = 1.166... -- NOT a whole number

  mode = integer part = 1
```

---

# PATTERN 9 — Poisson distribution

### Q36
If X is a Poisson variable with `P(X = 1) = P(X = 2)`, then its variance is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 1/2

**ANSWER: (b)**
```
  m / 1! = m^2 / 2!   ->   m = m^2/2   ->   m = 2

  For a Poisson,  variance = m = 2.
```
> **SHORTCUT:** `P(X = r) = P(X = r+1)` always gives `m = r + 1`.
> So `P(1)=P(2)` gives m = 2, `P(2)=P(3)` gives m = 3, `P(0)=P(1)` gives m = 1.

---

### Q37
If X is a Poisson variable with `P(X = 2) = P(X = 3)`, then `P(X = 0)` is

(a) e^(-2) &nbsp;&nbsp; (b) e^(-3) &nbsp;&nbsp; (c) 3 e^(-3) &nbsp;&nbsp; (d) e^(-1)

**ANSWER: (b)**
```
  By the shortcut, m = 3.

  P(X = 0) = e^(-3) m^0 / 0! = e^(-3)     ( = 0.0498 )
```

---

### Q38
For a Poisson distribution with mean 2, `P(X = 2)` is

(a) 2 e^(-2) &nbsp;&nbsp; (b) 4 e^(-2) &nbsp;&nbsp; (c) e^(-2) &nbsp;&nbsp; (d) e^(-2)/2

**ANSWER: (a)**
```
  P(X = 2) = e^(-2) x 2^2 / 2!  =  e^(-2) x 4/2  =  2 e^(-2)  = 0.2707
```

---

### Q39
The variance of a Poisson distribution is 4. Its standard deviation is

(a) 4 &nbsp;&nbsp; (b) 16 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 1/2

**ANSWER: (c)**
```
  SD = sqrt(variance) = sqrt(4) = 2
  (and the mean is also 4, since mean = variance for a Poisson)
```

---

### Q40
If the mean of a Poisson distribution is 1, then `P(X >= 1)` is

(a) e^(-1) &nbsp;&nbsp; (b) 1 - e^(-1) &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 2 e^(-1)

**ANSWER: (b)**
```
  P(X >= 1) = 1 - P(X = 0) = 1 - e^(-1) = 1 - 0.3679 = 0.6321
```

---

### Q41
2% of the items made by a machine are defective. In a sample of 100 items,
the probability (using the Poisson approximation) of exactly 2 defectives is

(a) e^(-2) &nbsp;&nbsp; (b) 2 e^(-2) &nbsp;&nbsp; (c) 4 e^(-2) &nbsp;&nbsp; (d) e^(-4)

**ANSWER: (b)**
```
  m = n p = 100 x 0.02 = 2

  P(X = 2) = e^(-2) x 4 / 2 = 2 e^(-2) = 0.2707
```
> **SHORTCUT:** Whenever you see a percentage and a large sample, `m = np` and
> switch to Poisson immediately. Never attempt 100C2 (0.02)^2 (0.98)^98.

---

# PATTERN 10 — Theory / identification

### Q42
Which distribution has its mean equal to its variance?

(a) Binomial &nbsp;&nbsp; (b) Poisson &nbsp;&nbsp; (c) both &nbsp;&nbsp; (d) neither

**ANSWER: (b)**
```
  Poisson : mean = variance = m
  Binomial: mean = np , variance = npq , and npq < np
```

---

### Q43
For a binomial distribution with n = 10, the maximum possible variance is

(a) 10 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 2.5 &nbsp;&nbsp; (d) 1

**ANSWER: (c)**
```
  variance = n p q = n p (1 - p)

  p(1 - p) is largest when p = 1/2, giving 1/4.

  maximum variance = n/4 = 10/4 = 2.5
```

---

### Q44
The range of a Poisson random variable is

(a) {0, 1, 2, ..., n} &nbsp;&nbsp; (b) {1, 2, 3, ...} &nbsp;&nbsp;
(c) {0, 1, 2, 3, ...} (infinite) &nbsp;&nbsp; (d) all real numbers

**ANSWER: (c)**
```
  A Poisson variable counts occurrences with NO upper limit,
  and 0 occurrences is possible. So the range is 0, 1, 2, 3, ...
  It is discrete but infinite.
```

---

### Q45
If `F(x)` is the cumulative distribution function of a discrete random
variable and `F(2) = 0.6`, `F(1) = 0.3`, then `P(X = 2)` is

(a) 0.9 &nbsp;&nbsp; (b) 0.3 &nbsp;&nbsp; (c) 0.6 &nbsp;&nbsp; (d) 0.18

**ANSWER: (b)**
```
  P(X = 2) = F(2) - F(1) = 0.6 - 0.3 = 0.3
```

---

### Q46
A bag has 3 red and 2 white balls. Two balls are drawn together.
The mean number of white balls drawn is

(a) 2/5 &nbsp;&nbsp; (b) 4/5 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 3/5

**ANSWER: (b)**
```
  n(S) = 5C2 = 10
  X = 0 : 3C2 = 3      P = 3/10
  X = 1 : 3 x 2 = 6    P = 6/10
  X = 2 : 2C2 = 1      P = 1/10        check: 3 + 6 + 1 = 10  OK

  E(X) = 0(3/10) + 1(6/10) + 2(1/10) = 8/10 = 4/5
```
> **SHORTCUT:** For "draw n balls, count a colour", the mean is always
> `n x (number of that colour) / (total)` = `2 x 2/5 = 4/5`. Instant.

---

### Q47
X ~ B(n, p) with mean 3 and variance 3/2. Then `P(X = 0)` is

(a) 1/64 &nbsp;&nbsp; (b) 1/32 &nbsp;&nbsp; (c) 1/16 &nbsp;&nbsp; (d) 1/8

**ANSWER: (a)**
```
  q = (3/2)/3 = 1/2  ->  p = 1/2  ->  n = 3/(1/2) = 6

  P(X = 0) = (1/2)^6 = 1/64
```

---

### Q48
The sum of all the probabilities of a binomial distribution `B(n, p)` equals

(a) `p^n` &nbsp;&nbsp; (b) `q^n` &nbsp;&nbsp; (c) `(q + p)^n = 1` &nbsp;&nbsp; (d) `n p`

**ANSWER: (c)**
```
  sum over r of nCr p^r q^(n-r)  =  (q + p)^n  =  1^n  =  1
  by the binomial theorem.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +------------------------------------+------------------------------------+
  |   IF YOU SEE THIS ...              |   DO THIS IMMEDIATELY              |
  +------------------------------------+------------------------------------+
  |  an unknown k in a table           |  add the whole row, set = 1        |
  +------------------------------------+------------------------------------+
  |  a negative number in a P(x) row   |  that option is NOT a distribution |
  +------------------------------------+------------------------------------+
  |  "mean of a die"                   |  3.5 (memorised)                   |
  +------------------------------------+------------------------------------+
  |  "variance of a die"               |  35/12 (memorised)                 |
  +------------------------------------+------------------------------------+
  |  "mean of the sum of two dice"     |  7 -- means just ADD               |
  +------------------------------------+------------------------------------+
  |  E(X) and E(X^2) given             |  Var = E(X^2) - [E(X)]^2           |
  |                                    |  SQUARE the mean                   |
  +------------------------------------+------------------------------------+
  |  Var(aX + b)                       |  a^2 Var(X) -- b vanishes          |
  +------------------------------------+------------------------------------+
  |  mean and variance of a binomial   |  q = var/mean , p = 1-q , n = mean/p|
  +------------------------------------+------------------------------------+
  |  variance BIGGER than the mean     |  it cannot be binomial             |
  +------------------------------------+------------------------------------+
  |  a STANDARD DEVIATION is given     |  square it before dividing         |
  +------------------------------------+------------------------------------+
  |  "at least one"                    |  1 - q^n   (binomial)              |
  |                                    |  1 - e^(-m) (Poisson)              |
  +------------------------------------+------------------------------------+
  |  a FAIR coin, n tosses, r heads    |  nCr / 2^n -- no p powers needed   |
  +------------------------------------+------------------------------------+
  |  aP(X=r) = bP(X=s) in a binomial   |  cancel nCr with nC(n-r) if equal, |
  |                                    |  then cancel powers of p and q     |
  +------------------------------------+------------------------------------+
  |  "most probable number"            |  (n+1)p ; whole number -> TWO modes|
  +------------------------------------+------------------------------------+
  |  P(X = r) = P(X = r+1) in Poisson  |  m = r + 1                         |
  +------------------------------------+------------------------------------+
  |  "on average ... per ..."          |  POISSON, m = that average         |
  +------------------------------------+------------------------------------+
  |  a % defective + a big sample      |  POISSON with m = np               |
  +------------------------------------+------------------------------------+
  |  "mean = variance"                 |  POISSON                           |
  +------------------------------------+------------------------------------+
  |  "draw n balls, count a colour"    |  mean = n x (that colour)/(total)  |
  +------------------------------------+------------------------------------+
  |  F(x) values given                 |  P(X=x) = F(x) - F(previous)       |
  +------------------------------------+------------------------------------+
  |  you have 10 seconds left (EAPCET) |  GUESS -- there is no negative     |
  |                                    |  marking. Never leave a blank.     |
  +------------------------------------+------------------------------------+
```

## THE FOUR NUMBERS TO MEMORISE BEFORE YOU WALK IN

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    die:   mean = 3.5        variance = 35/12                      |
  |                                                                   |
  |    e^(-1) = 0.3679     e^(-2) = 0.1353     e^(-3) = 0.0498        |
  |                                                                   |
  |    1/2 + 1/4 + 1/8 + ...  =  1                                    |
  |                                                                   |
  |    nCr = nC(n-r)      (6C4 = 6C2 = 15 ,  5C2 = 5C3 = 10)          |
  |                                                                   |
  +-------------------------------------------------------------------+
```
