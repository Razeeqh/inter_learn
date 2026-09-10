# Binomial Theorem — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — EXPAND A BINOMIAL                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Expand (2x + 3y)^4"  -  a small index, 4 to 6.
  METHOD    1. Write down row n of Pascal's triangle.
            2. Powers of the first part go DOWN: n, n-1, ..., 0.
            3. Powers of the second part go UP: 0, 1, ..., n.
            4. Open every bracket fully, including the numbers.
  TRAP      Forgetting that (2x)^3 = 8x^3, not 2x^3.
            Also: with a minus sign the signs must alternate + - + -.
  CHECK     In every term the two powers must add to n.
```

```
  PATTERN 2 — NUMBER OF TERMS                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many terms are there in the expansion of ... ?"
  METHOD    Two parts  (a + x)^n            ->  n + 1
            Three parts (a + b + c)^n       ->  (n+1)(n+2)/2
            (a+x)^n + (a-x)^n , n even      ->  n/2 + 1
            (a+x)^n + (a-x)^n , n odd       ->  (n+1)/2
            (a+x)^n - (a-x)^n , n even      ->  n/2
            (a+x)^n - (a-x)^n , n odd       ->  (n+1)/2
  TRAP      A trinomial that is really a perfect square.
            (1 + 2x + x^2)^20 = (1 + x)^40  ->  41 terms, not 41x41.
```

```
  PATTERN 3 — SUM OF THE COEFFICIENTS                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the sum of the coefficients in ..."
  METHOD    Put EVERY variable equal to 1 and evaluate the number.
            (3x - 4y)^7  ->  (3 - 4)^7 = -1
            (1 + x)^n    ->  2^n
  TRAP      Putting x = 1 but forgetting y. Set them ALL to 1.
```

```
  PATTERN 4 — FIND A STATED TERM                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the 4th term / 7th term of ..."
  METHOD    1. r = (term number) - 1.
            2. T(r+1) = nCr a^(n-r) x^r.
            3. Compute nCr the short way, then open the brackets.
  TRAP      Using r = the term number. The 4th term uses r = 3.
            This single error costs more marks than anything else here.
```

```
  PATTERN 5 — WRITE THE GENERAL TERM                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the general term in the expansion of ..."
  METHOD    Substitute into T(r+1) = nCr a^(n-r) x^r and simplify the
            powers. Leave the answer in terms of r. Do NOT expand.
  TRAP      Losing the (-1)^r when the second part is negative.
```

```
  PATTERN 6 — A TERM COUNTED FROM THE END                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the 4th term from the END of ..."
  METHOD    p-th term from the end  =  (n - p + 2)-th term from the start.
            Then use PATTERN 4.
  SHORTCUT  Or: swap the two parts of the bracket and count normally.
  TRAP      Using (n - p + 1). It is (n - p + 2), because there are
            n + 1 terms in total.
```

```
  PATTERN 7 — MIDDLE TERM                                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   The word "middle".
  METHOD    n EVEN  ->  ONE middle term.  r = n/2 , it is T(n/2 + 1).
            n ODD   ->  TWO middle terms. r = (n-1)/2 and r = (n+1)/2,
                        i.e. T((n+1)/2) and T((n+3)/2).
            Then use the general term for each.
  TRAP      Writing only one middle term when n is odd. Half the marks gone.
            Also: n is the INDEX, not the number of terms.
```

```
  PATTERN 8 — COEFFICIENT OF A GIVEN POWER OF x                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the coefficient of x^7 in ..."
  METHOD    1. Write T(r+1) = nCr (first)^(n-r) (second)^r.
            2. Collect ALL the x's into a single power of x.
            3. Set that power equal to the number asked. Solve for r.
            4. Check r is a whole number with 0 <= r <= n.
            5. Substitute r back and compute the NUMBER.
  TRAP      Answering with the whole term when only the coefficient was
            asked (or the other way round). Read the question twice.
```

```
  PATTERN 9 — TERM INDEPENDENT OF x (CONSTANT TERM)               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "term independent of x" , "constant term" , "term free from x".
  METHOD    Exactly PATTERN 8 with the target power set to ZERO.
  TRAP      Stopping at "r = 8". You must compute the actual number,
            and also say WHICH term it is (r = 8 means the 9th term).
```

```
  PATTERN 10 — TERM CONTAINING x^k                                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the term containing x^5" (the TERM, not the coefficient).
  METHOD    Find r as in PATTERN 8, then write out the COMPLETE term
            including the x^k part.
  TRAP      Giving only the number. Here they want number times x^k.
```

```
  PATTERN 11 — THE POWER DOES NOT OCCUR                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any coefficient question where solving gives r = 7.5,
            r = -2, or r > n.
  METHOD    Write: "r is not a whole number in the range 0 to n, so this
            power of x does not occur in the expansion. The coefficient
            is 0."
  TRAP      Rounding r or forcing it. That is an automatic zero.
            The honest answer 0 is the FULL answer.
```

```
  PATTERN 12 — nCr = nCs , FIND n OR r                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If nC5 = nC6, find n"  /  "If 21Cr = 21C(r+5), find r".
  METHOD    Either  r = s  ,  or  r + s = n.
            If the two lower numbers are clearly different, use r + s = n.
  TRAP      Forgetting to check the answer. Substitute back; it takes
            ten seconds.
```

```
  PATTERN 13 — RATIO OF TWO nCr's , FIND n                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If 2nC3 : nC3 = 11 : 1, find n."
  METHOD    1. Write both using the short 3-factor form.
            2. Cancel aggressively BEFORE multiplying anything out.
            3. Solve the small equation that is left.
  SHORTCUT  nCr / nC(r-1) = (n - r + 1)/r . Use it whenever the two
            lower numbers differ by 1. Never expand factorials.
```

```
  PATTERN 14 — CONSECUTIVE COEFFICIENTS IN AP , FIND n OR r       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the coefficients of the 2nd, 3rd, 4th terms are in AP".
  METHOD    1. Name the three coefficients: nC(r-1), nCr, nC(r+1).
            2. AP means  2 x middle = first + last.
            3. Divide by the common nCr, or use the shortcut below.

            SHORTCUT (memorise it):     (n - 2r)^2  =  n + 2

  TRAP      Accepting a value of n that is too small for the terms to
            exist. If they mention a 4th term, n must be at least 3.
            Reject the impossible root and SAY why.
```

```
  PATTERN 15 — GREATEST COEFFICIENT                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "greatest / largest binomial coefficient" with NO value of x.
  METHOD    n EVEN  ->  nC(n/2)
            n ODD   ->  nC((n-1)/2) = nC((n+1)/2) , two equal ones
  TRAP      Confusing this with the numerically greatest TERM.
            No x is given here, so it cannot be the term question.
```

```
  PATTERN 16 — NUMERICALLY GREATEST TERM                   *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "numerically greatest term ... when x = (some number)".
  METHOD    STEP 1  Take a^n outside :  (a + x)^n = a^n (1 + y)^n , y = x/a
            STEP 2  Put in the given x and find |y|
            STEP 3  k = (n + 1)|y| / (1 + |y|)
            STEP 4  k not a whole number -> greatest term is T(m + 1),
                                            m = whole part of k
                    k IS a whole number  -> T(k) and T(k+1) are EQUAL
                                            and both greatest
            STEP 5  Compute that term and multiply a^n back in
  TIME      About 7 minutes.
  TRAP      Dividing by |y| instead of (1 + |y|).
            Forgetting to take a^n out first.
            Giving only one term when k is a whole number.
```

```
  PATTERN 17 — TWO TERMS ARE EQUAL , FIND x                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If the 21st and 22nd terms of (1 + x)^44 are equal, find x."
  METHOD    Set T(p) = T(p+1) and divide one by the other:

                 T(r+1)       n - r + 1
                --------  =  ----------- x  x   =  1
                  T(r)            r

            Solve for x.
  SHORTCUT  x = r / (n - r + 1) for (1 + x)^n. Never compute the nCr's.
```

```
  PATTERN 18 — PROVE A SUM OF BINOMIAL COEFFICIENTS        *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Prove that C0 + C1 + ... " or any statement written with
            C0, C1, C2, ... .
  METHOD    Pick the right tool:
            plain sum, no r's         ->  put x = 1 or x = -1 in (1+x)^n
            an r multiplying Cr       ->  use  r Cr = n (n-1)C(r-1)
            an (r+1) dividing Cr      ->  use  Cr/(r+1) = (n+1)C(r+1)/(n+1)
            squares of the Cr's       ->  compare coefficients in
                                          (1+x)^n (1+x)^n = (1+x)^(2n)
            Cr / C(r-1)               ->  use  (n - r + 1)/r
  ALWAYS    Finish by testing the identity with n = 2 or n = 3.
            It proves to the examiner (and to you) that it is right.
```

```
  PATTERN 19 — SUM OF SQUARES OF THE COEFFICIENTS          *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Prove C0^2 + C1^2 + ... + Cn^2 = (2n)Cn."
  METHOD    1. Write (1 + x)^n forwards.
            2. Write (1 + x)^n backwards (allowed since Cr = C(n-r)).
            3. Multiply: the left side becomes (1 + x)^(2n).
            4. Compare the coefficient of x^n on both sides.
  TRAP      Not saying WHY you may reverse the second expansion.
            One line - "because Cr = C(n-r)" - earns that mark.
```

```
  PATTERN 20 — DIVISIBILITY PROOF                                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that 49^n + 16n - 1 is divisible by 64."
  METHOD    1. Rewrite the base as (divisor +/- 1) or as (1 + something).
                 16 = 15 + 1 ,  49 = 1 + 48 ,  9 = 1 + 8 ,  50 = 49 + 1
            2. Expand by the binomial theorem.
            3. Show every leftover term contains the divisor as a factor.
            4. Conclude "= divisor x (whole number)".
  TRAP      Not explaining why the leftover bracket is a multiple of the
            divisor. For 48^2 = 2304 = 64 x 36, SAY that.
```

```
  PATTERN 21 — REMAINDER PROBLEM                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the remainder when 7^103 is divided by 25."
  METHOD    1. Split the power so the base becomes (divisor +/- 1):
                 7^103 = 7 x (7^2)^51 = 7 x (50 - 1)^51
            2. Expand: (50 - 1)^51 = 50K - 1.
            3. Multiply back and reduce.
            4. Make the leftover POSITIVE by adding the divisor.
  TRAP      Answering -7. A remainder must lie between 0 and divisor - 1,
            so the answer is 25 - 7 = 18.
```

```
  PATTERN 22 — LAST DIGIT / LAST TWO DIGITS                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the last digit of 7^100."
  METHOD    Rearrange the power until the base is 10K +/- 1
            (for one digit) or 100K +/- 1 (for two digits), then expand.
                 7^100 = 49^50 = (50 - 1)^50 = 50K + 1  ->  ends in 1
                 3^400 = 9^200 = (10 - 1)^200           ->  ends in 01
  TRAP      For TWO digits you must keep the last two terms of the
            expansion, not just the last one.
```

```
  PATTERN 23 — RATIONAL INDEX: FIRST THREE TERMS                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the first three terms of (1 + x/2)^(-5)."
  METHOD    Use  1 + nx + [n(n-1)/2!] x^2 + ...
            where "x" is WHATEVER is sitting next to the 1, brackets and
            all.
  TRAP      Trying to use nCr. There is no nCr for a fractional or
            negative index.
            Forgetting to square the whole bracket in the third term.
```

```
  PATTERN 24 — RATIONAL INDEX: VALIDITY INTERVAL                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "For what values of x is the expansion valid?"
  METHOD    1. Force the bracket to start with 1:
                 (2 + 3x)^p = 2^p (1 + 3x/2)^p
            2. The condition is |that thing| < 1:
                 |3x/2| < 1   ->   |x| < 2/3
  TRAP      Writing |x| < 1 without adjusting. The condition applies to
            the WHOLE second piece, not to x alone.
```

```
  PATTERN 25 — RATIONAL INDEX: A PARTICULAR COEFFICIENT           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the coefficient of x^3 in (1 - 2x)^(-1/2)."
  METHOD    Either
            (a) write out four terms of the standard expansion and read
                off the one you want, or
            (b) use the general term
                     n(n-1)(n-2)...(n - r + 1)
                    -------------------------- x^r
                             r !
            Then substitute for the inner bracket.
  KNOW COLD (1-x)^-1 -> x^r
            (1+x)^-1 -> (-1)^r x^r
            (1-x)^-2 -> (r+1) x^r
            (1+x)^-2 -> (-1)^r (r+1) x^r
            (1-x)^-n -> (n + r - 1)Cr x^r
```

```
  PATTERN 26 — APPROXIMATION                                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find an approximate value of the 6th root of 63."
  METHOD    1. Write the number as (a perfect power) x (1 + small).
                 63 = 64(1 - 1/64) ,  1002 = 1000(1 + 0.002)
            2. Take the perfect power out of the root.
            3. Use (1 + x)^n = 1 + nx  (add one more term if 4 marks).
            4. Multiply out to the number of decimals asked for.
  TRAP      Not pulling the perfect power out first, so the "small" piece
            is not small at all and the approximation is wrong.
```

```
  PATTERN 27 — SUM OF AN INFINITE SERIES                   *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   A never-ending series of products such as
                 1 + 1/3 + (1x3)/(3x6) + (1x3x5)/(3x6x9) + ...
  METHOD    STEP 1  Confirm it starts with 1.
            STEP 2  A = term after the 1 ,  B = the next term.
            STEP 3  q/p = 2B/A^2 - 1 , then flip to get p/q.
            STEP 4  z = A / (p/q).
            STEP 5  SUM = (1 - z)^(-p/q). Simplify to a surd.
  CHECK     Put your p, q, z back and regenerate B. It must match.
```

```
  PATTERN 28 — SERIES THAT DOES NOT START WITH 1           *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "If x = 1/5 + (1x3)/(5x10) + ... , find 3x^2 + 6x."
            The series begins with a fraction, not with 1.
  METHOD    STEP 1  Write  1 + x  =  1 + (the given series).
            STEP 2  Run PATTERN 27 on  1 + x.
            STEP 3  You get  1 + x = (1 - z)^(-p/q) , a surd.
            STEP 4  SQUARE or CUBE both sides to kill the surd.
            STEP 5  Rearrange into exactly the expression asked for.
  TRAP      Forgetting the leading 1 at STEP 1. This is the number one
            source of lost marks in the whole chapter.
            Also: answer the question asked (3x^2 + 6x), not just x.
```

---

# SELF-TEST

Cover the right-hand column. If you cannot answer in 10 seconds, go back to
that topic.

| # | Question | Answer |
|---|----------|--------|
| 1 | The general term of (a + x)^n | T(r+1) = nCr a^(n-r) x^r |
| 2 | For the 6th term, r = ? | 5 |
| 3 | Number of terms in (a + x)^n | n + 1 |
| 4 | Number of terms in (a + b + c)^n | (n+1)(n+2)/2 |
| 5 | How do you get the sum of the coefficients? | put every variable = 1 |
| 6 | Sum of the coefficients of (1 + x)^n | 2^n |
| 7 | C0 + C2 + C4 + ... | 2^(n-1) |
| 8 | Middle term when n is even | T(n/2 + 1), one term |
| 9 | Middle terms when n is odd | T((n+1)/2) and T((n+3)/2) |
| 10 | Middle term of (1 + x)^10 | 252 x^5 |
| 11 | How do you find the constant term? | set the power of x to 0 |
| 12 | If r comes out 7.5, the coefficient is | 0, that power does not occur |
| 13 | T(r+1)/T(r) for (a + x)^n | [(n - r + 1)/r](x/a) |
| 14 | Test number for the greatest term | k = (n+1)\|y\| / (1 + \|y\|) |
| 15 | If k is a whole number, the greatest term is | T(k) and T(k+1), equal |
| 16 | Greatest coefficient, n even | nC(n/2) |
| 17 | Greatest coefficient of (1 + x)^15 | 15C7 = 15C8 = 6435 |
| 18 | Pascal's rule | nC(r-1) + nCr = (n+1)Cr |
| 19 | nCr = nCs implies | r = s or r + s = n |
| 20 | Shortcut for three coefficients in AP | (n - 2r)^2 = n + 2 |
| 21 | C1 + 2C2 + ... + nCn | n 2^(n-1) |
| 22 | C0^2 + C1^2 + ... + Cn^2 | (2n)Cn |
| 23 | C0 + C1/2 + ... + Cn/(n+1) | (2^(n+1) - 1)/(n+1) |
| 24 | Condition for a rational-index expansion | \|x\| < 1 (after adjusting) |
| 25 | Expansion of (1 - x)^(-2) | 1 + 2x + 3x^2 + 4x^3 + ... |
| 26 | Coefficient of x^r in (1 + x)^(-2) | (-1)^r (r + 1) |
| 27 | Approximation formula for a small x | (1 + x)^n = 1 + nx |
| 28 | 6th root of 63, approximately | 1.9948 |
| 29 | First move for "divisible by 15" | write 16 = 15 + 1 |
| 30 | Remainder of 7^103 by 25 | 18 |
| 31 | First move for an infinite series sum | make it start with 1 |
| 32 | Sum of 1 + 1/3 + 1.3/(3.6) + ... | square root of 3 |
| 33 | If x = 1/5 + 1.3/(5.10) + ..., then 3x^2 + 6x | 2 |
| 34 | (1 + 2x + x^2)^20 has how many terms? | 41 |
| 35 | 4th term from the end of (a + x)^9 | the 7th term from the start |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 1 - LEARN THESE OR NOTHING ELSE MATTERS      (about 6 marks)  |
  |                                                                     |
  |    PATTERN 4   find a stated term                          2 marks  |
  |    PATTERN 2   number of terms                             2 marks  |
  |    PATTERN 23  first three terms, rational index           2 marks  |
  |                                                                     |
  |    All three are one-line formula questions in Section A.           |
  |    Time to learn: one evening.                                      |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 2 - ONE SECTION B QUESTION IS YOURS          (about 4 marks)  |
  |                                                                     |
  |    PATTERN 8   coefficient of x^k                          4 marks  |
  |    PATTERN 9   term independent of x                       4 marks  |
  |    PATTERN 7   middle term(s)                              4 marks  |
  |                                                                     |
  |    These are the SAME question with a different target. Learn one   |
  |    and you have learnt all three.                                   |
  |    Time to learn: one evening.                                      |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 3 - THE TWO BIG ONES                        (about 14 marks)  |
  |                                                                     |
  |    PATTERN 16  numerically greatest term                   7 marks  |
  |    PATTERN 28  sum of an infinite series                   7 marks  |
  |                                                                     |
  |    Both are fixed recipes with NO thinking required. Neither one    |
  |    needs you to be clever. They need you to have done them five     |
  |    times each.                                                      |
  |    Time to learn: two evenings.                                     |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 4 - IF THERE IS TIME LEFT                                     |
  |                                                                     |
  |    PATTERN 18  prove a coefficient identity                7 marks  |
  |    PATTERN 14  coefficients in AP                          4 marks  |
  |    PATTERN 20  divisibility                                4 marks  |
  |    PATTERN 21  remainder                                   4 marks  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Realistic total from this chapter alone: 13 to 20 marks out of 75.**

```
  THE FOUR-WEEK VERSION

  Week 1   Patterns 1 to 6.      Do 15 "find the term" questions.
  Week 2   Patterns 7 to 11.     Do 10 middle-term / coefficient questions.
  Week 3   Patterns 16 and 27-28. Do the greatest term 5 times and the
                                   infinite series 5 times. Nothing else.
  Week 4   Patterns 12-15, 18-22, 23-26. Then redo Week 3 from memory.

  THE NIGHT BEFORE
  Read only three things:
     1.  T(r+1) = nCr a^(n-r) x^r   and   r = term number - 1
     2.  k = (n+1)|y| / (1 + |y|)   after taking a^n outside
     3.  q/p = 2B/A^2 - 1 ,  z = A/(p/q) ,  sum = (1 - z)^(-p/q)
```
