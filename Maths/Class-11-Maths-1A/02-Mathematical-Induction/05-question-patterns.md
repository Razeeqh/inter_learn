# Mathematical Induction — Every Question Pattern That Can Be Asked

**Maths 1A · Chapter 2**

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

```
  +=====================================================================+
  |                                                                     |
  |   READ THIS BEFORE THE PATTERNS                                     |
  |                                                                     |
  |   All 30 patterns below are answered with the SAME SIX STEPS.       |
  |   The only difference between them is what you write in Step 5.     |
  |                                                                     |
  |   1. Let S(n) be the statement ...                                  |
  |   2. BASE: n = 1, LHS = ..., RHS = ..., equal, so S(1) is true.     |
  |   3. ASSUME S(k) is true: ...                             ... (i)   |
  |   4. TO PROVE S(k+1): ...                                 ... (ii)  |
  |   5. LHS of (ii) = [LHS of S(k)] + [(k+1)th term] = ... = RHS.      |
  |   6. Hence by the principle of mathematical induction, S(n) is      |
  |      true for all n in N.                                           |
  |                                                                     |
  +=====================================================================+
```

For each pattern below, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps (only Step 5 differs)
- **TRAP** — where marks get lost

---

# GROUP A — SUM SERIES (the biggest Section C family)

```
  PATTERN 1 — SUM OF THE FIRST n NATURAL NUMBERS                  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1 + 2 + 3 + ... + n = n(n+1)/2"
  METHOD    1. Six-step template.
            2. (k+1)th term is (k+1).
            3. Step 5:  k(k+1)/2 + (k+1)
                        = [k(k+1) + 2(k+1)] / 2
                        = (k+1)(k+2)/2
  TRAP      Forgetting to put both pieces over the denominator 2 before
            taking out (k+1).
```

```
  PATTERN 2 — SUM OF SQUARES                                      7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6"
  METHOD    (k+1)th term is (k+1)^2.  Step 5:
              k(k+1)(2k+1)/6 + (k+1)^2
              = (k+1)[k(2k+1) + 6(k+1)] / 6
              = (k+1)(2k^2 + 7k + 6)/6
              = (k+1)(k+2)(2k+3)/6
  TRAP      Not factorising 2k^2 + 7k + 6.  Split 7k as 4k + 3k:
              2k(k+2) + 3(k+2) = (k+2)(2k+3).
            Also: the target has (2k+3), NOT (2k+1). Replace n by k+1
            in 2n+1 properly.
```

```
  PATTERN 3 — SUM OF CUBES                                        7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1^3 + 2^3 + ... + n^3 = n^2(n+1)^2/4"   (or  [n(n+1)/2]^2 )
  METHOD    (k+1)th term is (k+1)^3.  Step 5:
              k^2(k+1)^2/4 + (k+1)^3
              = (k+1)^2 [ k^2 + 4(k+1) ] / 4
              = (k+1)^2 (k+2)^2 / 4
  TRAP      Taking out (k+1) instead of (k+1)^2. Take out the HIGHEST
            common power.
```

```
  PATTERN 4 — SUM OF ODD (OR EVEN) NUMBERS                    4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1 + 3 + 5 + ... + (2n-1) = n^2"
            "2 + 4 + 6 + ... + 2n = n(n+1)"
  METHOD    Get the (k+1)th term FIRST:
              2n - 1  ->  2(k+1) - 1 = 2k + 1
              2n      ->  2(k+1)     = 2k + 2
            Step 5 is one line:  k^2 + 2k + 1 = (k+1)^2.
  TRAP      Writing the (k+1)th term as (2k - 1) + 1 by "guessing".
            Always substitute mechanically.
```

```
  PATTERN 5 — SUM OF AN ARITHMETIC PROGRESSION                    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "a + (a+d) + ... + [a + (n-1)d] = (n/2)[2a + (n-1)d]"
  METHOD    (k+1)th term is a + kd.  Step 5:
              (k/2)[2a + (k-1)d] + (a + kd)
              = [ 2ak + k(k-1)d + 2a + 2kd ] / 2
              group 'a' terms:  2ak + 2a = 2a(k+1)
              group 'd' terms:  k(k-1)d + 2kd = kd(k+1)
              = (k+1)(2a + kd)/2
  TRAP      Trying to expand and re-factorise blindly. GROUP the 'a'
            terms and the 'd' terms separately - that is the whole trick.
```

```
  PATTERN 6 — SUM OF A GEOMETRIC PROGRESSION                      7 marks
  ------------------------------------------------------------------------
  TRIGGER   "a + ar + ... + a r^(n-1) = a(r^n - 1)/(r - 1)"
  METHOD    (k+1)th term is a r^k.  Step 5:
              a(r^k - 1)/(r-1) + a r^k
              = a[ r^k - 1 + r^(k+1) - r^k ] / (r-1)
              = a[ r^(k+1) - 1 ] / (r-1)          (r^k cancels)
  TRAP      1. Forgetting to state r =/= 1.
            2. Not multiplying a r^k by (r-1) when putting it over the
               common denominator.
```

```
  PATTERN 7 — PRODUCTS OF CONSECUTIVE INTEGERS                    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1.2 + 2.3 + ... + n(n+1)"
            "1.2.3 + 2.3.4 + ... + n(n+1)(n+2)"
  METHOD    RULE: sum = (the term with ONE MORE factor) / (no. of factors + 1)
              n(n+1)          ->  n(n+1)(n+2)/3
              n(n+1)(n+2)     ->  n(n+1)(n+2)(n+3)/4
            Step 5: take out the WHOLE product (k+1)(k+2)[(k+3)] and the
            bracket left over is (k + 3) or (k + 4).
  TRAP      Expanding the products. NEVER expand. Factor out.
```

```
  PATTERN 8 — MIXED POWER SERIES  (the 3n+5 / 3n+1 pair)          7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1.2^2 + 2.3^2 + 3.4^2 + ..."     nth term n(n+1)^2
            "1^2.2 + 2^2.3 + 3^2.4 + ..."     nth term n^2(n+1)
  METHOD    1.2^2 + ...  =  n(n+1)(n+2)(3n+5)/12
            1^2.2 + ...  =  n(n+1)(n+2)(3n+1)/12
            Step 5: take out (k+1)(k+2)/12 and factorise the bracket
              3k^2 + 17k + 24 = (k+3)(3k+8)     [ 3n+5 version ]
              3k^2 + 13k + 12 = (k+3)(3k+4)     [ 3n+1 version ]
  TRAP      Mixing up the two. MEMORY HOOK:
            square on the BIG number -> 3n + 5
            square on the SMALL number -> 3n + 1
```

```
  PATTERN 9 — FRACTION (TELESCOPING-STYLE) SERIES                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1/(1.2) + 1/(2.3) + ..."        ->  n/(n+1)
            "1/(1.3) + 1/(3.5) + ..."        ->  n/(2n+1)
            "1/(1.4) + 1/(4.7) + ..."        ->  n/(3n+1)
  METHOD    1. Write the nth term:  1/((an - b)(an - b + a))
            2. (k+1)th term: substitute k+1 carefully.
            3. Step 5: common denominator, then factorise the numerator.
                 k(k+2) + 1 = (k+1)^2
                 k(2k+3) + 1 = (k+1)(2k+1)
                 k(3k+4) + 1 = (k+1)(3k+1)
            4. Cancel the repeated bracket.
  TRAP      Getting the (k+1)th term wrong. For 1/((3n-2)(3n+1)):
              3(k+1) - 2 = 3k + 1  and  3(k+1) + 1 = 3k + 4.
            So the new term is 1/((3k+1)(3k+4)) - note that 3k+1 REAPPEARS.
```

```
  PATTERN 10 — SERIES WITH A POWER OF 2                           7 marks
  ------------------------------------------------------------------------
  TRIGGER   "2 + 3.2 + 4.2^2 + ... + (n+1)2^(n-1) = n . 2^n"
  METHOD    (k+1)th term = (k+2) 2^k.  Step 5:
              k . 2^k + (k+2) 2^k
              = 2^k (2k + 2)
              = 2^k . 2(k+1)
              = (k+1) 2^(k+1)
  TRAP      Not taking 2^k out as a common factor and instead trying to
            expand powers of 2 numerically.
```

```
  PATTERN 11 — SERIES WHOSE TERM MUST BE SIMPLIFIED FIRST         7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1^3/1 + (1^3+2^3)/(1+3) + (1^3+2^3+3^3)/(1+3+5) + ..."
            = n(2n^2 + 9n + 13)/24
  METHOD    STEP 0 (before the template!):  simplify the nth term.
              numerator = [k(k+1)/2]^2 ,  denominator = k^2
              so  t(k) = (k+1)^2 / 4  and  t(k+1) = (k+2)^2 / 4
            Then run the template.
            Step 5: put over 24, expand BOTH sides and compare:
              2k^3 + 15k^2 + 37k + 24  on each side.
  TRAP      Not simplifying t(n) first. Without that step the algebra is
            impossible in exam time.
```

```
  PATTERN 12 — SUM OF TRIANGULAR NUMBERS                     4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1 + (1+2) + (1+2+3) + ... to n terms"
  METHOD    nth term = n(n+1)/2 ;  sum = n(n+1)(n+2)/6.
            Step 5:  k(k+1)(k+2)/6 + (k+1)(k+2)/2
                     = (k+1)(k+2)[k + 3]/6
  TRAP      Reading the nth term as "n" instead of "1+2+...+n".
```

```
  PATTERN 13 — FACTORIAL SERIES                              4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "1.1! + 2.2! + ... + n.n! = (n+1)! - 1"
  METHOD    (k+1)th term = (k+1).(k+1)!.  Step 5:
              (k+1)! - 1 + (k+1)(k+1)!
              = (k+1)! [ 1 + (k+1) ] - 1
              = (k+1)! (k+2) - 1
              = (k+2)! - 1
  TRAP      Not knowing that (k+1)! (k+2) = (k+2)!.
```

---

# GROUP B — DIVISIBILITY (the second big Section C family)

```
  +---------------------------------------------------------------------+
  |  THE MASTER RULE FOR EVERY DIVISIBILITY QUESTION                    |
  |                                                                     |
  |  1. BEFORE ANYTHING: put n = 1 and divide. Confirm the divisor.     |
  |  2. Write the assumption as an EQUATION:  f(k) = d.m , m an integer.|
  |  3. Rearrange to make the awkward power the SUBJECT.                |
  |  4. Write f(k+1) and PEEL the extra powers:                         |
  |        a^(k+1) = a . a^k        a^(2k+3) = a^2 . a^(2k+1)           |
  |  5. Substitute, collect, and factor out d.                          |
  |  6. Say "which is d times an integer, hence divisible by d".        |
  +---------------------------------------------------------------------+
```

```
  PATTERN 14 — DIVISIBILITY, ONE BASE                        4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "7 divides 2^(3n) - 1" , "8 divides 3^(2n) - 1" ,
            "10 divides 11^n - 1"
  METHOD    1. Convert:  2^(3n) = 8^n ,  3^(2n) = 9^n.
            2. Assume 8^k - 1 = 7m , so 8^k = 7m + 1.
            3. 8^(k+1) - 1 = 8(7m+1) - 1 = 56m + 7 = 7(8m+1).
  TRAP      Not converting 2^(3n) into 8^n first. It makes the whole
            question one line.
```

```
  PATTERN 15 — DIVISIBILITY, TWO BASES (the "peel and subtract")  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "17 divides 3.5^(2n+1) + 2^(3n+1)"
            "11 divides 2.4^(2n+1) + 3^(3n+1)"
            "7 divides 3^(2n+1) + 2^(n+2)"
            "133 divides 11^(n+2) + 12^(2n+1)"
  METHOD    1. Peel:  5^(2k+3) = 25 . 5^(2k+1) ,  2^(3k+4) = 8 . 2^(3k+1)
            2. Note the two multipliers (here 25 and 8).
            3. SUBSTITUTE for the term with the SMALLER multiplier.
            4. The two multipliers subtract to give the divisor:
                 25 - 8 = 17 ,  27 - 16 = 11 ,  9 - 2 = 7 , 144 - 11 = 133
  TRAP      Substituting for the wrong term. If the answer does not
            collapse, substitute for the OTHER one instead.
```

```
  PATTERN 16 — DIVISIBILITY WITH A LINEAR TERM IN n               7 marks
  ------------------------------------------------------------------------
  TRIGGER   "64 divides 49^n + 16n - 1"
            "9 divides 4^n - 3n - 1"
            "225 divides 2^(4n) - 15n - 1"
            "64 divides 3^(2n+2) - 8n - 9"
            "576 divides 5^(2n+2) - 24n - 25"
  METHOD    1. Assume f(k) = d.m and make the POWER the subject:
                 49^k = 64m - 16k + 1
            2. f(k+1) = 49 . 49^k + 16k + 15 ;  substitute.
            3. Multiply out CAREFULLY and check every coefficient is a
               multiple of d.
  TRAP      Arithmetic slips. Always verify at the end:
               49 x 64 = 3136 ; 784 - 16 = 768 = 64 x 12 ; 49 + 15 = 64.
```

```
  PATTERN 17 — DIVISIBILITY OF A POLYNOMIAL IN n             4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "3 divides n^3 + 2n" , "3 divides n^3 - n" ,
            "6 divides n(n+1)(n+2)"
  METHOD    1. Assume k^3 + 2k = 3m.
            2. Expand (k+1)^3 + 2(k+1) fully.
            3. GROUP the terms that make up the k-expression:
                 = (k^3 + 2k) + 3k^2 + 3k + 3
            4. Substitute and factor out 3.
  TRAP      Not spotting the k-expression hidden inside the expansion.
            Write out the expansion in full, then circle k^3 + 2k.
```

```
  PATTERN 18 — DIVISIBILITY NEEDING AN EXTRA EVEN/ODD ARGUMENT    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "6 divides n(n+1)(n+2)"
  METHOD    Left over after substitution: 3(k+1)(k+2).
            Argue: (k+1) and (k+2) are CONSECUTIVE, so one is even,
            so (k+1)(k+2) = 2t. Then 3(2t) = 6t.
  TRAP      Stopping at "6m + 3(k+1)(k+2)" and claiming it is divisible
            by 6. You must justify why 3(k+1)(k+2) is a multiple of 6.
```

```
  PATTERN 19 — DIVISIBILITY BY (x - y) OR (x + y)            4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "x - y divides x^n - y^n"
            "x + y divides x^(2n) - y^(2n)"
  METHOD    The ADD-AND-SUBTRACT move:
              x^(k+1) - y^(k+1)
                = x.x^k - x.y^k + x.y^k - y.y^k
                = x(x^k - y^k) + y^k (x - y)
            Both pieces have the factor (x - y).
  TRAP      Not seeing the trick. Memorise the middle line - it is the
            only line that matters.
```

```
  PATTERN 20 — HARD DIVISIBILITY NEEDING A HELPER FACT            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "24 divides 2.7^n + 3.5^n - 5"
  METHOD    1. Substitute for 3.5^k using the assumption.
            2. You are left with 4.7^k + 120m + 20.
            3. Rewrite 4.7^k + 20 = 4(7^k - 1) + 24.
            4. HELPER FACT: 7^k - 1 = (7-1)(7^(k-1)+...+1) = 6t.
            5. So it equals 24t + 120m + 24 = 24(t + 5m + 1).
  TRAP      This is genuinely harder than the usual board question.
            Attempt it LAST, and only if the easier ones are secure.
```

---

# GROUP C — INEQUALITIES, PRODUCTS AND RECURRENCES

```
  PATTERN 21 — SIMPLE EXPONENTIAL INEQUALITY                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "2^n > n" , "3^n > 2^n" , "2^n >= n + 1"
  METHOD    1. Base step: n = 1.
            2. Multiply the assumption by the POSITIVE base:
                 2^(k+1) = 2.2^k > 2k = k + k >= k + 1  (since k >= 1)
            3. State the final inequality explicitly.
  TRAP      1. Multiplying by a negative (never do it without flipping).
            2. Stopping at "> 2k" without the extra step to "> k+1".
```

```
  PATTERN 22 — INEQUALITY WITH A BASE STEP THAT IS NOT n = 1      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "2^n > n^2 for n >= 5" , "n! > 2^n for n >= 4"
  METHOD    1. TEST n = 1,2,3,4,5 to find where it starts.
            2. Base step at THAT value.
            3. Inductive step, plus a small side-argument such as
                 2k^2 >= (k+1)^2  because  k^2 - 2k - 1 > 0 for k >= 5.
            4. CONCLUSION must say "for all n >= 5".
  TRAP      Writing "for all n in N" in the conclusion. That is wrong
            and costs the mark.
```

```
  PATTERN 23 — BERNOULLI'S INEQUALITY                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "(1 + x)^n >= 1 + nx  for x > -1"
  METHOD    (1+x)^(k+1) = (1+x)^k (1+x)
                       >= (1 + kx)(1 + x)          [since 1 + x > 0]
                        = 1 + (k+1)x + k x^2
                       >= 1 + (k+1)x               [since k x^2 >= 0]
  TRAP      Forgetting to say 1 + x > 0, which is what makes the
            multiplication safe.
```

```
  PATTERN 24 — PRODUCT (TELESCOPING) RESULT                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "(1 + 1/1)(1 + 1/2)...(1 + 1/n) = n + 1"
            "(1 - 1/4)(1 - 1/9)...(1 - 1/n^2) = (n+1)/(2n)"
  METHOD    Same template, but Step 5 uses MULTIPLY not add:
              LHS of S(k+1) = [LHS of S(k)] x [the (k+1)th FACTOR]
            Simplify the new factor first:
              1 + 1/(k+1) = (k+2)/(k+1)
              1 - 1/(k+1)^2 = [(k+1)^2 - 1]/(k+1)^2 = k(k+2)/(k+1)^2
  TRAP      1. Adding instead of multiplying.
            2. Missing that these products start at n = 2, not n = 1.
```

```
  PATTERN 25 — SEQUENCE DEFINED BY A RECURRENCE                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "a(1) = ... and a(n+1) = ... Prove that a(n) = ..."
  METHOD    Step 5 has NO invention in it:
              a(k+1) = (the given recurrence)
                     = (substitute a(k) from the assumption)
                     = (simplify to the target)
  TRAP      Not using the recurrence as the FIRST line of Step 5.
            The recurrence IS the domino push.
```

```
  PATTERN 26 — POWER OF A MATRIX                             4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If A = [ ... ], prove that A^n = [ ... ]"
  METHOD    1. Base step: check A^1 matches the formula with n = 1.
            2. Assume A^k = (the given form).
            3. Step 5:  A^(k+1) = A^k . A  (in that order), multiply out
               entry by entry, and show it is the form with k+1.
  TRAP      1. Writing A . A^k when the given form makes A^k . A easier.
               (Both are valid here, but be consistent.)
            2. Sloppy matrix multiplication. Show each entry's working.
```

---

# GROUP D — SMALL SECTION A / CONCEPT QUESTIONS

```
  PATTERN 27 — STATE THE PRINCIPLE                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the principle of finite mathematical induction."
  METHOD    Write both conditions and the conclusion:
              If S(1) is true, and S(k) true implies S(k+1) true for
              every k in N, then S(n) is true for all n in N.
  TRAP      Writing only one of the two conditions.
```

```
  PATTERN 28 — WRITE S(1), S(k) OR S(k+1)                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If S(n): ... , write S(k+1)."
  METHOD    Replace EVERY n in the statement by k+1 and simplify the
            brackets:   2n+1 -> 2k+3 ,  3n-2 -> 3k+1 ,  n+1 -> k+2.
  TRAP      Replacing n only in some places. Do it everywhere.
```

```
  PATTERN 29 — FIND THE nth OR (k+1)th TERM                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the nth term of 1.2 + 2.3 + 3.4 + ..."
  METHOD    Look at the FIRST factor across terms, then the SECOND.
              1, 2, 3, ...  ->  n
              2, 3, 4, ...  ->  n + 1
            So t(n) = n(n+1). ALWAYS check by putting n = 1.
  TRAP      Not verifying with n = 1. Ten seconds, and it catches
            every error.
```

```
  PATTERN 30 — THE LOGIC / TRICK QUESTION            2 marks or MCQ
  ------------------------------------------------------------------------
  TRIGGER   "S(k) => S(k+1) is true. Then S(n) is true for ..."
            "A student omits the base step. Is the proof valid?"
  METHOD    Check S(1) yourself.
              S(1) true  and inductive step  ->  true for all n
              S(1) FALSE and inductive step  ->  true for NO n
              S(5) true  and inductive step  ->  true for all n >= 5
  TRAP      Assuming the inductive step alone is enough. It is not.
            Use the domino picture: nobody pushed the first one.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right column.

| Question stem | Pattern |
|---|---|
| "Prove `1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6`" | 2 |
| "Show `17` divides `3.5^(2n+1) + 2^(3n+1)`" | 15 |
| "Prove `1/(1.4) + 1/(4.7) + ... = n/(3n+1)`" | 9 |
| "Show `64` divides `49^n + 16n - 1`" | 16 |
| "Prove `2 + 3.2 + 4.2^2 + ... = n.2^n`" | 10 |
| "Prove `1.2^2 + 2.3^2 + ... = n(n+1)(n+2)(3n+5)/12`" | 8 |
| "Prove `2^n > n` for all n" | 21 |
| "Prove `2^n > n^2` for n >= 5" | 22 |
| "Prove `(1 + 1/1)(1 + 1/2)...(1 + 1/n) = n+1`" | 24 |
| "Prove `3` divides `n^3 + 2n`" | 17 |
| "Prove the sum of an A.P. formula" | 5 |
| "Prove the sum of a G.P. formula" | 6 |
| "Prove `1.2.3 + 2.3.4 + ... = n(n+1)(n+2)(n+3)/4`" | 7 |
| "Prove `x - y` divides `x^n - y^n`" | 19 |
| "`a(1)=3`, `a(n+1)=2a(n)+1`; prove `a(n)=2^(n+1)-1`" | 25 |
| "If `A = [1 1; 0 1]`, prove `A^n = [1 n; 0 1]`" | 26 |
| "Prove `6` divides `n(n+1)(n+2)`" | 18 |
| "Prove `7` divides `2^(3n) - 1`" | 14 |
| "Prove `24` divides `2.7^n + 3.5^n - 5`" | 20 |
| "Write `S(k+1)` for the given `S(n)`" | 28 |
| "State the principle of mathematical induction" | 27 |
| "`S(k) => S(k+1)` but `S(1)` is false. Then?" | 30 |
| "Prove `1 + 3 + 5 + ... + (2n-1) = n^2`" | 4 |
| "Prove `1.1! + 2.2! + ... + n.n! = (n+1)! - 1`" | 13 |
| "Prove `1^3/1 + (1^3+2^3)/(1+3) + ... = n(2n^2+9n+13)/24`" | 11 |
| "Prove `(1+x)^n >= 1 + nx`" | 23 |
| "Prove `1 + (1+2) + (1+2+3) + ... = n(n+1)(n+2)/6`" | 12 |
| "Prove `1^3 + 2^3 + ... + n^3 = n^2(n+1)^2/4`" | 3 |
| "Write the nth term of `1/(1.4) + 1/(4.7) + ...`" | 29 |
| "Prove `1 + 2 + ... + n = n(n+1)/2`" | 1 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +=====================================================================+
  |                                                                     |
  |   THE SELLING POINT, ONE MORE TIME                                  |
  |                                                                     |
  |   In Section C you get 7 questions and answer any 5.                |
  |   One of the 7 is almost always Mathematical Induction.             |
  |                                                                     |
  |   Whatever they print, YOU WRITE THE SAME SIX STEPS.                |
  |                                                                     |
  +=====================================================================+
```

### Tier 1 — do this even if you do nothing else (worth about 5 of the 7 marks)

```
  Learn to write, from memory, for ANY statement:

     STEP 1   "Let S(n) be the statement ..."        [copy the question]
     STEP 2   "For n = 1, LHS = ... , RHS = ... .
               Since LHS = RHS, S(1) is true."       [pure arithmetic]
     STEP 3   "Assume S(k) is true, that is ... (i)" [copy with n -> k]
     STEP 4   "We must prove that ... (ii)"          [copy with n -> k+1]
     STEP 6   "Hence, by the principle of finite mathematical induction,
               S(n) is true for all n in N."

  You can do all five of those for a formula you have never seen.
  That is about 5 marks, before any algebra.
```

### Tier 2 — the four Step-5 moves that finish nearly every sum

```
  1. Split off the last term.
  2. Substitute the assumption.
  3. Take out the common factor - NEVER expand.
  4. Factorise the leftover bracket and compare with the target.
```

### Tier 3 — the divisibility engine

```
  1. Assumption as an EQUATION:  f(k) = d.m
  2. Make the power the subject.
  3. Peel the extra powers in f(k+1).
  4. Substitute, collect, factor out d.
  5. Say "which is d times an integer".
```

### Tier 4 — the seven questions to have written out in full before the exam

```
  1.  1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6
  2.  1.2^2 + 2.3^2 + ... = n(n+1)(n+2)(3n+5)/12
  3.  1/(1.4) + 1/(4.7) + ... = n/(3n+1)
  4.  2 + 3.2 + 4.2^2 + ... = n . 2^n
  5.  a + (a+d) + ... = (n/2)[2a + (n-1)d]
  6.  64 divides 49^n + 16n - 1
  7.  17 divides 3.5^(2n+1) + 2^(3n+1)

  Those seven cover the overwhelming majority of what gets set.
```

### The realistic target

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   Section C, one question from this chapter          7 marks        |
  |   Occasional Section A question                      2 marks        |
  |                                                    -----------      |
  |   REALISTIC TAKE FROM THIS CHAPTER                   7 - 9 marks    |
  |                                                                     |
  |   Pass mark for Maths IA is 26.                                     |
  |   This one chapter, with one fixed method, gives you                |
  |   more than a quarter of it.                                        |
  |                                                                     |
  |   There is no easier deal in the paper. Take it.                    |
  |                                                                     |
  +---------------------------------------------------------------------+
```
