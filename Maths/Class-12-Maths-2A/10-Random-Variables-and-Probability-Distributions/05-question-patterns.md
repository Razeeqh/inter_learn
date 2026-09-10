# Random Variables and Probability Distributions — Every Question Pattern

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

There are only 32 shapes in the whole chapter, and 6 of them cover most of the marks.

---

```
  PATTERN 1 — DEFINE A RANDOM VARIABLE                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define a random variable." / "What is a random variable?"
  METHOD    1. Write the symbol form:   X : S ---> R
            2. Say it in words: a function that assigns exactly ONE
               real number to every outcome of the sample space.
            3. Give ONE example with its range.
               (Two coins, X = number of heads, range {0,1,2}.)
  TRAP      Calling it "a variable that takes random values". It is a
            FUNCTION on the sample space. The example carries a mark, so
            never leave it out.
```

```
  PATTERN 2 — DISCRETE vs CONTINUOUS                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define a discrete / continuous random variable with an example."
  METHOD    DISCRETE   : range is finite or countable; values can be
                         listed with gaps.  Example: number of heads in
                         3 tosses -> {0,1,2,3}.
            CONTINUOUS : range is an interval; every value between two
                         limits is possible.  Example: height of a student.
            Add: for a continuous variable P(X = a) = 0.
  TRAP      Giving "number of cars per minute" as continuous. If you COUNT
            it, it is discrete no matter how the sentence is phrased.
```

```
  PATTERN 3 — WRITE THE RANGE OF X                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the range of the random variable X where X = ..."
  METHOD    1. Find the SMALLEST value X can take.
            2. Find the LARGEST value X can take.
            3. List every value in between that is actually reachable.
               2 dice, X = sum   ->  {2,3,4,...,12}
               2 balls, X = black ->  {0,1,2}
  TRAP      Writing the range as a set of OUTCOMES ({HH,HT,...}) instead
            of a set of NUMBERS ({0,1,2}).
```

```
  PATTERN 4 — THE TWO CONDITIONS OF A DISTRIBUTION                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the conditions for P(x) to be a probability
            distribution."
  METHOD    (i)  0 <= P(x) <= 1  for every x
            (ii) sum of all P(x) = 1
  TRAP      Writing only condition (ii). Both carry a mark.
```

```
  PATTERN 5 — IS THIS A PROBABILITY DISTRIBUTION?                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   A table is given and the question says "verify / is this ..."
  METHOD    1. Scan for a NEGATIVE entry or an entry greater than 1.
               If you find one -> answer NO and say why. Stop.
            2. Otherwise add the row. If the total is 1 -> YES.
               If not 1 -> NO.
  TRAP      Only adding. The examiner routinely builds a row that sums to
            exactly 1 with a -0.1 hidden inside it.
```

```
  PATTERN 6 — FIND k FROM A LINEAR TABLE                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   Table entries are k, 2k, 3k, ... or contain "+ k" terms.
  METHOD    1. Add the whole P(x) row.
            2. Set the total equal to 1.
            3. Solve the linear equation for k.
            4. Rewrite the table with the numbers and CHECK the sum is 1.
  TRAP      Forgetting to state k as a fraction in lowest terms, or not
            substituting back to verify.
```

```
  PATTERN 7 — FIND THE CONSTANT FROM A QUADRATIC / CUBIC          7 marks
  ------------------------------------------------------------------------
  TRIGGER   P(X = 0) = 3c^3 , P(X = 1) = 4c - 10c^2 , P(X = 2) = 5c - 1
            -- probabilities given as POLYNOMIALS in c.
  METHOD    1. Add them all and set equal to 1.
            2. Get a polynomial equation = 0.
            3. Find one root by trial (try the simple fractions: 1/2,
               1/3, 1, 2), then factorise fully.
            4. TEST EVERY ROOT against 0 <= P(x) <= 1 and REJECT the
               bad ones. Write out why each is rejected.
            5. Write the final distribution table and check the sum.
            6. If asked, go on to the mean and variance.
  TRAP      Giving all the roots as the answer. Only ONE root gives a
            legal distribution. The rejection step is worth 1-2 marks --
            show the numbers that prove the other roots fail.
```

```
  PATTERN 8 — BUILD THE DISTRIBUTION: COINS                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "n coins are tossed. X = number of heads."
  METHOD    1. n(S) = 2^n.
            2. P(X = r) = nCr / 2^n.  (Or list the outcomes if n <= 3.)
            3. Draw the two-row table.
            4. CHECK the row adds to 1.
  TRAP      Missing that HT and TH are DIFFERENT outcomes but give the
            SAME value of X, so their probabilities must be ADDED.
```

```
  PATTERN 9 — BUILD THE DISTRIBUTION: DICE                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two dice are thrown. X = the sum / the larger number /
            the difference."
  METHOD    1. n(S) = 36. Draw the 6 x 6 grid ONCE.
            2. Count how many boxes give each value of X.
            3. P(x) = count / 36.
            4. CHECK the counts add to 36.
            For the SUM the counts are   1 2 3 4 5 6 5 4 3 2 1.
  TRAP      Forgetting that (2,3) and (3,2) are two different outcomes.
            The grid prevents this -- always draw it.
```

```
  PATTERN 10 — BUILD THE DISTRIBUTION: BALLS OR CARDS             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "a bag contains a white and b black balls; 2 are drawn" /
            "2 cards are drawn from a pack".
  METHOD    1. n(S) = (total)C(number drawn).
            2. For X = r, count  (wantedCr) x (otherC(drawn - r)).
               "one white AND one black" -> MULTIPLY.
            3. P(x) = that count / n(S).
            4. CHECK the counts add to n(S).
  TRAP      Adding instead of multiplying for the mixed case, and using
            nPr instead of nCr (the balls are drawn together, so order
            does not matter).
```

```
  PATTERN 11 — READ PROBABILITIES OFF A TABLE                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find P(X < 3) / P(X >= 2) / P(1 < X <= 4)."
  METHOD    1. Underline the inequality sign and decide which x values
               are included.
                   X < 3    ->  0, 1, 2      (NOT 3)
                   X <= 3   ->  0, 1, 2, 3
                   X >= 3   ->  3, 4, 5, ... ( = 1 - P(X < 3) )
                   1 < X <= 4 -> 2, 3, 4
            2. Add the chosen P(x) values.
            3. Cross-check with 1 minus the rest.
  TRAP      Including the endpoint when the sign is strict. This single
            slip is the most common 2-mark loss in the chapter.
```

```
  PATTERN 12 — CUMULATIVE DISTRIBUTION FUNCTION                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the cumulative distribution function F(x)."
  METHOD    1. F(x) = P(X <= x) -- a RUNNING TOTAL of the P(x) row.
            2. Write the F row under the P row.
            3. The last entry MUST be 1.
            4. If asked "fully", write it as a step function with the
               intervals: F(x) = 0 for x < x1, etc.
  TRAP      Writing F(x) = P(X = x). F is cumulative -- it never goes
            down and it ends at 1.
```

```
  PATTERN 13 — GO BACKWARDS FROM F(x) TO P(x)                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   The question GIVES F(x) values and asks for the distribution,
            or asks for P(X = 3) when only F is given.
  METHOD    1. P(X = x) = F(x) - F(previous value).
            2. P(a < X <= b) = F(b) - F(a).
            3. P(X > a) = 1 - F(a).
            4. Check the P values you get add to 1.
  TRAP      Using F(b) - F(a) for P(a <= X <= b). That version needs
            F(b) - F(a) + P(X = a). Watch the inequality signs.
```

```
  PATTERN 14 — MEAN OF A DISCRETE RANDOM VARIABLE               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the mean / the expectation / the average value of X."
  METHOD    1. Make a column x . P(x).
            2. Add it.   E(X) = sum x P(x).
            3. Sanity check: the answer must lie between the smallest
               and the largest value of x.
  TRAP      Averaging the x values and ignoring the probabilities.
            Also: the mean need NOT be one of the x values -- do not
            round 1.5 up to 2.
```

```
  PATTERN 15 — MEAN AND VARIANCE FROM A TABLE          <-- THE 7-MARK ONE
  ------------------------------------------------------------------------
  TRIGGER   "Find the mean and the variance of X" with a table given
            (usually with a k in it).
  METHOD    1. If there is a k, find it from sum P(x) = 1.
            2. RULE FOUR COLUMNS:
                   x  |  P(x)  |  x P(x)  |  x^2 P(x)
            3. Total the P column -- it MUST be 1.
            4. Total the third column  ->  MEAN.
            5. Total the fourth column ->  E(X^2).
            6. Var = E(X^2) - (MEAN)^2 .  SD = sqrt(Var).
            7. State all three answers clearly at the end.
  TRAP      Var = E(X^2) - E(X). WRONG. The mean must be SQUARED.
            Also: negative x values give positive x^2 P(x) entries.
            Also: a negative variance means an arithmetic slip -- go back.
```

```
  PATTERN 16 — EXPECTED GAIN / FAIR GAME                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A man pays Rs a to play ... find his expected gain / is the
            game fair?"
  METHOD    1. Let X = the NET gain (prize minus the fee) in each case.
            2. Write the small table of X values and probabilities.
            3. E(X) = sum x P(x).
            4. E(X) = 0  -> the game is FAIR.
               E(X) > 0  -> favours the player.
               E(X) < 0  -> favours the organiser.
  TRAP      Using the prize instead of the NET gain. If he pays Rs 10 and
            wins Rs 100, his gain is +90, not +100.
```

```
  PATTERN 17 — E(aX + b) AND Var(aX + b)                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If E(X) = ... and Var(X) = ..., find E(2X+3) / Var(2X+3)."
  METHOD    E(aX + b)   = a E(X) + b
            Var(aX + b) = a^2 Var(X)         (b DISAPPEARS)
            SD (aX + b) = |a| SD(X)
  TRAP      Adding b to the variance. Shifting every value does not
            change the spread, so b has no effect on the variance.
```

```
  PATTERN 18 — STATE THE BINOMIAL DISTRIBUTION                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the pmf of a binomial distribution" / "state the
            conditions for a binomial distribution".
  METHOD    P(X = r) = nCr p^r q^(n-r) , q = 1 - p , r = 0,1,...,n
            Conditions: (1) fixed n  (2) two outcomes per trial
                        (3) independent trials  (4) p constant.
            Mean = np , Variance = npq , SD = sqrt(npq).
  TRAP      Writing q^r p^(n-r) with the powers swapped. The power on p
            must match the number of SUCCESSES, r.
```

```
  PATTERN 19 — BINOMIAL, EXACTLY r SUCCESSES                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "exactly 3 heads in 6 tosses" / "exactly 2 defectives out
            of 5".
  METHOD    1. Write down n, p, q. (q = 1 - p.)
            2. Substitute into nCr p^r q^(n-r).
            3. Simplify to a single fraction or a decimal.
  TRAP      Getting p and q the wrong way round. Decide FIRST which
            event you are calling a "success", then p is ITS probability.
            For a fair coin the shortcut is nCr / 2^n.
```

```
  PATTERN 20 — BINOMIAL: AT LEAST / AT MOST                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "at least one", "at most two", "more than three".
  METHOD    at least 1  ->  1 - q^n            (ONE line)
            at least r  ->  1 - [P(0)+...+P(r-1)]
            at most r   ->  P(0)+P(1)+...+P(r)
            none        ->  q^n
            all         ->  p^n
            Count the terms both ways and use whichever is SHORTER.
  TRAP      Adding five or six terms for "at least one" and running out
            of time. Always use the complement when it is shorter.
```

```
  PATTERN 21 — BINOMIAL: GIVEN MEAN AND VARIANCE, FIND n AND p    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The mean of a binomial is 4 and the variance is 3."
  METHOD    1. q = variance / mean
            2. p = 1 - q
            3. n = mean / p
            4. If asked, write P(X = r) = nCr p^r q^(n-r).
            5. CHECK: np should give back the mean, npq the variance.
  TRAP      If the STANDARD DEVIATION is given instead, SQUARE it first
            to get the variance. Using the SD directly is the single
            most common error in this pattern.
```

```
  PATTERN 22 — SHOW VARIANCE < MEAN FOR A BINOMIAL                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the variance of a binomial is less than its mean"
            or "Can a binomial have mean 3 and variance 5?"
  METHOD    variance / mean = npq / np = q , and 0 < q < 1,
            so variance = q x mean < mean.
            Therefore mean 3 with variance 5 is IMPOSSIBLE.
  TRAP      Trying to prove it with numbers. One line of algebra with the
            ratio is the full answer.
```

```
  PATTERN 23 — DERIVE THE MEAN AND VARIANCE OF A BINOMIAL         7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the mean and variance of a binomial distribution."
  METHOD    MEAN
            1. E(X) = sum r nCr p^r q^(n-r), start the sum at r = 1.
            2. Use r/r! = 1/(r-1)! and n! = n(n-1)! to pull out np.
            3. Recognise the remaining sum as (q+p)^(n-1) = 1.
            4. E(X) = np.
            VARIANCE
            5. Find E[X(X-1)] the same way -> n(n-1)p^2.
            6. E(X^2) = E[X(X-1)] + E(X) = n(n-1)p^2 + np.
            7. Var = E(X^2) - (np)^2 = np - np^2 = npq.
  TRAP      Trying to compute E(X^2) directly. Always go through
            E[X(X-1)] -- the r(r-1) is what cancels the factorials.
            Also, do not forget to ADD E(X) back in step 6.
```

```
  PATTERN 24 — BINOMIAL: AN EQUATION BETWEEN TWO PROBABILITIES  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If 9 P(X = 4) = P(X = 2) for B(6, p), find p."
  METHOD    1. Write both probabilities in full.
            2. Cancel any equal nCr values (remember nCr = nC(n-r)).
            3. Cancel the common powers of p and q.
            4. Replace q by 1 - p and solve the (usually linear or
               quadratic) equation.
            5. Reject any root outside 0 < p < 1.
  TRAP      Forgetting that q = 1 - p at the last step and leaving the
            answer as a relation between p and q.
```

```
  PATTERN 25 — BINOMIAL: DIFFERENCE OF MEAN AND VARIANCE          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The difference between the mean and the variance is 1 and
            the difference of their squares is 11."
  METHOD    1. Write  np - npq = A  and  (np)^2 - (npq)^2 = B.
            2. Factorise the second as (np - npq)(np + npq) = B.
            3. Substitute A to get np + npq = B/A.
            4. Divide the two equations to eliminate np and find q.
            5. p = 1 - q, then n from np.
            6. CHECK both given conditions with your numbers.
  TRAP      Expanding everything instead of using the difference of
            squares. The factorisation is what makes it a 4-mark
            question instead of an hour of algebra.
```

```
  PATTERN 26 — MOST PROBABLE NUMBER OF SUCCESSES                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the most probable number of ..." / "the mode of the
            binomial distribution".
  METHOD    1. Compute (n + 1)p.
            2. If it is NOT a whole number -> mode = its integer part.
            3. If it IS a whole number -> TWO modes, (n+1)p and (n+1)p-1.
            4. Verify by computing those two probabilities.
  TRAP      Using np instead of (n+1)p, and forgetting the two-mode case.
            When (n+1)p is a whole number you MUST give both values.
```

```
  PATTERN 27 — EXPECTED FREQUENCY IN N REPETITIONS                7 marks
  ------------------------------------------------------------------------
  TRIGGER   "8 coins are tossed 256 times. In how many tosses would you
            expect at least 6 heads?"
  METHOD    1. Build the binomial distribution for ONE repetition.
            2. Find the probability of the described event.
            3. Expected frequency = N x that probability.
            4. Round sensibly and state it as "about ... times".
  TRAP      Forgetting the final multiplication by N, or multiplying by
            n (the number of coins) instead of N (the number of
            repetitions).
```

```
  PATTERN 28 — STATE THE POISSON DISTRIBUTION                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the pmf of a Poisson distribution" / "state its mean
            and variance".
  METHOD    P(X = r) = e^(-m) m^r / r! ,  r = 0, 1, 2, ...
            Mean = m , Variance = m , SD = sqrt(m).
            Conditions: rare independent events, constant average rate,
            no fixed upper limit.
  TRAP      Writing e^(m) instead of e^(-m), or forgetting that the
            range is INFINITE (0, 1, 2, ... with no last value).
```

```
  PATTERN 29 — POISSON NUMERICAL FROM AN AVERAGE                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "On average 2 accidents per week ..." / "the mean number of
            misprints per page is ..."
  METHOD    1. Read m straight off the sentence (it IS the average).
            2. P(X = r) = e^(-m) m^r / r!.
            3. "at least one" -> 1 - e^(-m).
               "at most two"  -> e^(-m)(1 + m + m^2/2).
            4. Use the e^(-m) value given; if none is given, leave the
               answer in terms of e^(-m).
  TRAP      Forgetting 0! = 1 and m^0 = 1, so P(X = 0) = e^(-m) exactly.
            Also, if the interval changes (per week -> per fortnight),
            m must be scaled too.
```

```
  PATTERN 30 — POISSON REPLACING A BINOMIAL                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "1 item in 500 is defective; 1000 items are examined" --
            a LARGE n with a SMALL p.
  METHOD    1. Identify n and p.
            2. m = n p.
            3. Use the Poisson formula from here on.
            4. Say in one line WHY: n is large, p is small, so the
               binomial is approximated by a Poisson with m = np.
  TRAP      Attempting the binomial. 1000C3 (0.002)^3 (0.998)^997 cannot
            be done by hand. Spotting "large n, small p" is the whole
            skill in this pattern.
```

```
  PATTERN 31 — POISSON: AN EQUATION BETWEEN TWO PROBABILITIES     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "P(X = 1) = P(X = 2)" / "3 P(X = 4) = P(X = 2)".
  METHOD    1. Write both sides with e^(-m) m^r / r!.
            2. Cancel e^(-m) -- it is never zero.
            3. Cancel the lower power of m.
            4. Solve for m and REJECT m = 0 and any negative root.
            5. Remember mean = variance = m, so the answer often IS the
               variance the question wants.
            SHORTCUT: P(X = r) = P(X = r+1)  gives  m = r + 1.
  TRAP      Accepting m = 0. A Poisson parameter must be strictly
            positive.
```

```
  PATTERN 32 — DERIVE THE MEAN AND VARIANCE OF A POISSON          7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the mean and variance of a Poisson distribution."
  METHOD    0. (Optional opener) show sum P(r) = e^(-m) e^m = 1.
            1. E(X) = sum r e^(-m) m^r / r!, start at r = 1.
            2. r/r! = 1/(r-1)!, pull out m, the rest is e^m. E(X) = m.
            3. E[X(X-1)] = e^(-m) sum m^r/(r-2)! from r = 2 = m^2.
            4. E(X^2) = m^2 + m.
            5. Var = m^2 + m - m^2 = m.
            6. Conclude: mean = variance = m.
  TRAP      Losing the e^(-m) factor half way through, or forgetting to
            add E(X) back when building E(X^2).
```

```
  PATTERN 33 — COMPARE BINOMIAL AND POISSON                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between the binomial and Poisson distributions."
  METHOD    Make a two-column table with at least four rows:
                             BINOMIAL          POISSON
              formula        nCr p^r q^(n-r)   e^(-m) m^r / r!
              parameters     n and p           m only
              range          0..n (finite)     0,1,2,... (infinite)
              mean           np                m
              variance       npq               m
              relation       var < mean        var = mean
            Add one line: n large + p small + np = m turns a binomial
            into a Poisson.
  TRAP      Listing only the formulas. The mean-versus-variance row is
            the one the examiner is looking for.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the stem, say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "Define a random variable with an example." | 1 |
| "Give an example of a continuous random variable." | 2 |
| "Two dice are thrown, X = sum. Write the range of X." | 3 |
| "State the conditions for a probability distribution." | 4 |
| "Verify whether the following is a probability distribution." | 5 |
| "If P(x) = kx for x = 1..5, find k." | 6 |
| "P(X=0)=3c^3, P(X=1)=4c-10c^2, P(X=2)=5c-1. Find c." | 7 |
| "Three coins are tossed. Find the distribution of the heads." | 8 |
| "Two dice are thrown. Find the distribution of the sum." | 9 |
| "A bag has 5 white and 3 black balls; 2 are drawn ..." | 10 |
| "Find P(X < 3) and P(X >= 3)." | 11 |
| "Find the cumulative distribution function." | 12 |
| "Given F(2) = 0.6 and F(1) = 0.3, find P(X = 2)." | 13 |
| "Find the mean of the following distribution." | 14 |
| "Find k, the mean and the variance." | **15** |
| "He pays Rs 10 to throw a die and gets Rs 100 for a six ..." | 16 |
| "If E(X) = 5 and Var(X) = 4, find E(3X+2) and Var(3X+2)." | 17 |
| "Write the probability mass function of a binomial." | 18 |
| "A coin is tossed 6 times. Find P(exactly 4 heads)." | 19 |
| "Find the probability of at least two hits in 6 shots." | 20 |
| "Mean of a binomial is 4 and variance is 3. Find n and p." | **21** |
| "Show that the variance is less than the mean." | 22 |
| "Find the mean and variance of a binomial distribution." | **23** |
| "If 9 P(X=4) = P(X=2) for B(6,p), find p." | 24 |
| "The difference of the mean and variance is 1 ..." | 25 |
| "Find the most probable number of successes." | 26 |
| "8 coins are tossed 256 times. How often do 6+ heads appear?" | 27 |
| "Write the pmf of a Poisson distribution." | 28 |
| "On average 2 accidents occur per week ..." | 29 |
| "1 in 500 items is defective; 1000 are examined ..." | 30 |
| "If P(X=1) = P(X=2), find m." | 31 |
| "Find the mean and variance of a Poisson distribution." | **32** |
| "Distinguish between binomial and Poisson." | 33 |

The bold ones are the long answers. If you can do 15, 21, 23 and 32 you have
covered the 7-mark question whichever way it is set.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 1 -- DO THESE FIRST. Four hours of work, ~9 marks.         |
  |                                                                   |
  |     PATTERN 15   mean and variance from a table       7 marks     |
  |     PATTERN 21   mean & variance -> n and p           2 marks     |
  |                                                                   |
  |     Both are pure arithmetic. Neither needs a proof.              |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 2 -- The 2-mark theory. One hour, ~4 more marks.           |
  |                                                                   |
  |     PATTERN 1,2  definitions with examples                        |
  |     PATTERN 4    the two conditions                               |
  |     PATTERN 6    find k from a linear table                       |
  |     PATTERN 28   the Poisson pmf, mean = variance = m             |
  |     PATTERN 31   P(X=1) = P(X=2) gives m = 2                      |
  |                                                                   |
  |     Pure recall. Write each one out five times tonight.           |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 3 -- If you have another day.                              |
  |                                                                   |
  |     PATTERN 20   at least / at most                    4 marks    |
  |     PATTERN 10   distribution from balls in a bag      4 marks    |
  |     PATTERN 29   Poisson from an average               4 marks    |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 4 -- Only if the rest is solid.                            |
  |                                                                   |
  |     PATTERN 7    the cubic-in-c question               7 marks    |
  |     PATTERN 23   derive the binomial mean & variance   7 marks    |
  |     PATTERN 32   derive the Poisson mean & variance    7 marks    |
  |                                                                   |
  |     These are the hardest, but 23 and 32 are pure memory work --  |
  |     eight lines each. Learn them like a poem.                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## THE FOUR-LINE SUMMARY OF THE WHOLE CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.  sum P(x) = 1                    finds k, checks everything  |
  |                                                                   |
  |   2.  mean = sum x P(x)                                           |
  |                                                                   |
  |   3.  Var  = sum x^2 P(x) - (mean)^2                              |
  |                                                                   |
  |   4.  BINOMIAL  np , npq        POISSON  m , m                    |
  |                                                                   |
  +-------------------------------------------------------------------+
```

If you write nothing else in the exam, write the four-column table
`x | P(x) | x P(x) | x^2 P(x)` and fill it in. Examiners award method marks
for the table even when the arithmetic goes wrong.
