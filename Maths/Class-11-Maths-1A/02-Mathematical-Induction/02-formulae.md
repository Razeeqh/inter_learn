# Mathematical Induction — Results Sheet

**Maths 1A · Chapter 2**

This chapter has almost no "formulae" of its own. It has **one template** and a
**list of results you may be asked to prove**. So this sheet is:

1. The template (memorise it perfectly),
2. Every standard result that gets set, with the key line of the proof,
3. The `(k+1)`th-term lookup table,
4. The palm list.

---

# SECTION 1 — THE ONLY "FORMULA" IN THE CHAPTER

```
  +======================================================================+
  |                                                                      |
  |   PRINCIPLE OF FINITE MATHEMATICAL INDUCTION                         |
  |                                                                      |
  |   If  (i)  S(1) is true,                              [ base step ]  |
  |   and (ii) S(k) true  =>  S(k+1) true, for all k     [ inductive ]   |
  |                                                                      |
  |   then S(n) is true for all n in N.                                  |
  |                                                                      |
  +======================================================================+


  +======================================================================+
  |                    THE SIX-STEP ANSWER TEMPLATE                      |
  |                                                                      |
  |  1.  Let S(n) be the statement  ...............................      |
  |  2.  BASE: n = 1.  LHS = ......   RHS = ......   equal, S(1) true.   |
  |  3.  ASSUME S(k) is true:  ..........................  ... (i)       |
  |  4.  TO PROVE S(k+1):      ..........................  ... (ii)      |
  |  5.  LHS of (ii) = [LHS of S(k)] + [(k+1)th term]                    |
  |                  = [RHS of (i)]  + [(k+1)th term]   ... simplify ... |
  |                  = RHS of (ii).   So S(k+1) is true.                 |
  |  6.  Hence by the principle of mathematical induction, S(n) is true  |
  |      for all n in N.                                                 |
  |                                                                      |
  +======================================================================+


  +======================================================================+
  |                    THE ONE LINE THAT DOES THE WORK                   |
  |                                                                      |
  |   SUMS        LHS of S(k+1) = [ LHS of S(k) ] + [ (k+1)th term ]     |
  |                                                                      |
  |   PRODUCTS    LHS of S(k+1) = [ LHS of S(k) ] x [ (k+1)th factor ]   |
  |                                                                      |
  |   DIVISIBLE   f(k+1) = (multiplier) x f(k) + (obvious multiple of d) |
  |                                                                      |
  |   INEQUALITY  multiply S(k) by a POSITIVE number, then one more      |
  |               small step to reach the S(k+1) target                  |
  |                                                                      |
  +======================================================================+
```

---

# SECTION 2 — SUM RESULTS YOU MAY BE ASKED TO PROVE

## 2.1 The four basic sums

```
  +----------------------------------------------------------------------+
  |                                          n(n + 1)                    |
  |   1 + 2 + 3 + ... + n            =     ------------                  |
  |                                             2                        |
  |                                                                      |
  |                                        n(n + 1)(2n + 1)              |
  |   1^2 + 2^2 + 3^2 + ... + n^2    =    ------------------             |
  |                                               6                      |
  |                                                                      |
  |                                        n^2 (n + 1)^2      [ n(n+1) ]2|
  |   1^3 + 2^3 + 3^3 + ... + n^3    =    ---------------  =  [ ------ ] |
  |                                               4           [   2    ] |
  |                                                                      |
  |   1 + 3 + 5 + ... + (2n - 1)     =    n^2                            |
  |                                                                      |
  |   2 + 4 + 6 + ... + 2n           =    n(n + 1)                       |
  +----------------------------------------------------------------------+
```

| Result | (k+1)th term | Key line of Step 5 |
|---|---|---|
| `1+2+...+n = n(n+1)/2` | `k+1` | `k(k+1)/2 + (k+1) = (k+1)(k+2)/2` |
| `1^2+...+n^2 = n(n+1)(2n+1)/6` | `(k+1)^2` | `2k^2 + 7k + 6 = (k+2)(2k+3)` |
| `1^3+...+n^3 = n^2(n+1)^2/4` | `(k+1)^3` | `k^2 + 4k + 4 = (k+2)^2` |
| `1+3+...+(2n-1) = n^2` | `2k+1` | `k^2 + 2k + 1 = (k+1)^2` |
| `2+4+...+2n = n(n+1)` | `2k+2` | `k(k+1) + 2(k+1) = (k+1)(k+2)` |

## 2.2 Arithmetic and geometric progressions

```
  +----------------------------------------------------------------------+
  |                                              n                       |
  |   a + (a+d) + ... + [a + (n-1)d]   =        --- [ 2a + (n-1)d ]      |
  |                                              2                       |
  |                                                                      |
  |                                             a ( r^n - 1 )            |
  |   a + ar + ar^2 + ... + a r^(n-1)  =       --------------- , r =/= 1 |
  |                                                 r - 1                |
  +----------------------------------------------------------------------+
```

| Result | (k+1)th term | Key line of Step 5 |
|---|---|---|
| AP sum | `a + kd` | `2a(k+1) + kd(k+1) = (k+1)(2a + kd)` |
| GP sum | `a r^k` | `r^k - 1 + r^(k+1) - r^k = r^(k+1) - 1` |

**Special APs that appear as questions:**

| Series | Sum |
|---|---|
| `1 + 4 + 7 + ... + (3n - 2)` | `n(3n - 1)/2` |
| `1 + 5 + 9 + ... + (4n - 3)` | `n(2n - 1)` |
| `2 + 7 + 12 + ... + (5n - 3)` | `n(5n - 1)/2` |
| `3 + 7 + 11 + ... + (4n - 1)` | `n(2n + 1)` |

*(All are just the AP formula with particular `a` and `d`. Check each with n = 1.)*

## 2.3 Products of consecutive integers

```
  +----------------------------------------------------------------------+
  |                                              n(n+1)(n+2)             |
  |   1.2 + 2.3 + 3.4 + ... + n(n+1)      =    ---------------           |
  |                                                   3                  |
  |                                                                      |
  |                                            n(n+1)(n+2)(n+3)          |
  |   1.2.3 + 2.3.4 + ... + n(n+1)(n+2)   =   --------------------       |
  |                                                    4                 |
  +----------------------------------------------------------------------+

    THE PATTERN:  stick the NEXT consecutive integer on the end,
                  then divide by (number of factors + 1).
```

## 2.4 Mixed-power series (the two that look alike)

```
  +----------------------------------------------------------------------+
  |                                              n(n+1)(n+2)(3n + 5)     |
  |   1.2^2 + 2.3^2 + 3.4^2 + ...  n terms  =  ---------------------     |
  |     [ nth term = n(n+1)^2 ]                          12              |
  |                                                                      |
  |                                              n(n+1)(n+2)(3n + 1)     |
  |   1^2.2 + 2^2.3 + 3^2.4 + ...  n terms  =  ---------------------     |
  |     [ nth term = n^2(n+1) ]                          12              |
  +----------------------------------------------------------------------+

     MEMORY HOOK:  square on the BIG number  ->  3n + 5
                   square on the SMALL number ->  3n + 1
```

| Result | Key factorisation in Step 5 |
|---|---|
| `3n+5` version | `3k^2 + 17k + 24 = (k+3)(3k+8)` |
| `3n+1` version | `3k^2 + 13k + 12 = (k+3)(3k+4)` |

## 2.5 Fraction (telescoping-style) series

```
  +----------------------------------------------------------------------+
  |     1       1              1                n                        |
  |   ----- + ----- + ... + --------      =   -------                    |
  |    1.2     2.3           n(n+1)            n + 1                     |
  |                                                                      |
  |     1       1                 1                 n                    |
  |   ----- + ----- + ... + --------------  =   ---------                |
  |    1.3     3.5           (2n-1)(2n+1)        2n + 1                  |
  |                                                                      |
  |     1       1                 1                 n                    |
  |   ----- + ----- + ... + --------------  =   ---------                |
  |    1.4     4.7           (3n-2)(3n+1)        3n + 1                  |
  |                                                                      |
  |      1          1                    1            n(n + 3)           |
  |   ------- + --------- + ... + -------------- = ------------------    |
  |    1.2.3     2.3.4             n(n+1)(n+2)      4(n+1)(n+2)          |
  +----------------------------------------------------------------------+
```

| Result | (k+1)th term | Key line of Step 5 |
|---|---|---|
| `n/(n+1)` | `1/((k+1)(k+2))` | `k(k+2) + 1 = (k+1)^2` |
| `n/(2n+1)` | `1/((2k+1)(2k+3))` | `k(2k+3) + 1 = (k+1)(2k+1)` |
| `n/(3n+1)` | `1/((3k+1)(3k+4))` | `k(3k+4) + 1 = (k+1)(3k+1)` |

## 2.6 Other named sums

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   2 + 3.2 + 4.2^2 + ... + (n+1) 2^(n-1)   =   n . 2^n                |
  |                                                                      |
  |                                                n(n+1)(n+2)           |
  |   1 + (1+2) + (1+2+3) + ... to n terms    =  ---------------         |
  |                                                     6                |
  |                                                                      |
  |   1.1! + 2.2! + 3.3! + ... + n.n!         =   (n+1)! - 1             |
  |                                                                      |
  |    1^3     1^3+2^3     1^3+2^3+3^3           n(2n^2 + 9n + 13)       |
  |   ----- + --------- + ------------- + ... = ---------------------    |
  |     1       1 + 3        1 + 3 + 5                   24              |
  |            [ nth term simplifies to (n+1)^2 / 4 ]                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# SECTION 3 — DIVISIBILITY RESULTS

```
  +======================================================================+
  |   THE METHOD, ONCE, FOR ALL OF THEM                                  |
  |                                                                      |
  |   1.  Write the assumption as an EQUATION:   f(k) = d . m            |
  |   2.  Make the awkward power the SUBJECT:    a^k = d.m - (rest)      |
  |   3.  Write f(k+1), peel the extra powers off:                       |
  |            a^(k+1) = a . a^k ,   a^(2k+3) = a^2 . a^(2k+1) , etc.    |
  |   4.  Substitute step 2 into step 3.                                 |
  |   5.  Collect until you can write  d x (integer).                    |
  |                                                                      |
  |   TIP: substitute for the term whose MULTIPLIER IS SMALLER, then the |
  |        two multipliers subtract to give exactly the divisor.         |
  +======================================================================+
```

| Divisor | Expression | Peeled multipliers | Why it collapses |
|---|---|---|---|
| 3 | `n^3 + 2n` | — | `3k^2 + 3k + 3 = 3(k^2+k+1)` |
| 3 | `n^3 - n` | — | `3k^2 + 3k = 3k(k+1)` |
| 6 | `n(n+1)(n+2)` | — | extra `3(k+1)(k+2)`, and `(k+1)(k+2)` is even |
| 7 | `2^(3n) - 1` (= `8^n - 1`) | `8` | `8(7m+1) - 1 = 7(8m+1)` |
| 7 | `3^(2n+1) + 2^(n+2)` | `9` and `2` | `9 - 2 = 7` |
| 8 | `3^(2n) - 1` (= `9^n - 1`) | `9` | `9(8m+1) - 1 = 8(9m+1)` |
| 9 | `4^n - 3n - 1` | `4` | `36m + 9k = 9(4m+k)` |
| 9 | `10^n + 3.4^(n+2) + 5` | `10` and `4` | `9(10m - 2.4^(k+2) - 5)` |
| 10 | `11^n - 1` | `11` | `11(10m+1) - 1 = 10(11m+1)` |
| 11 | `2.4^(2n+1) + 3^(3n+1)` | `16` and `27` | `27 - 16 = 11` |
| 17 | `3.5^(2n+1) + 2^(3n+1)` | `25` and `8` | `25 - 8 = 17` |
| 24 | `2.7^n + 3.5^n - 5` | `7` and `5` | needs the helper fact: 6 divides `7^k - 1` |
| 25 | `7^(2n) + 2^(3n-3) . 3^(n-1)` (= `49^n + 24^(n-1)`) | `49` and `24` | `49 - 24 = 25` |
| 64 | `49^n + 16n - 1` | `49` | `3136m - 768k + 64 = 64(49m - 12k + 1)` |
| 64 | `3^(2n+2) - 8n - 9` | `9` | `576m + 64k + 64 = 64(9m + k + 1)` |
| 133 | `11^(n+2) + 12^(2n+1)` | `11` and `144` | `144 - 11 = 133` |
| 225 | `2^(4n) - 15n - 1` (= `16^n - 15n - 1`) | `16` | `3600m + 225k = 225(16m + k)` |
| 576 | `5^(2n+2) - 24n - 25` | `25` | `14400m + 576k + 576 = 576(25m+k+1)` |
| `x - y` | `x^n - y^n` | — | add & subtract `x y^k` |
| `x + y` | `x^(2n) - y^(2n)` | — | `x^2` and `y^2` version of the above |

**The three AP board favourites are the shaded ones in your memory:**

```
  +----------------------------------------------------------------------+
  |   64  divides   49^n + 16n - 1                                       |
  |   17  divides   3 . 5^(2n+1) + 2^(3n+1)                              |
  |   11  divides   2 . 4^(2n+1) + 3^(3n+1)                              |
  +----------------------------------------------------------------------+
```

**Base-step values (so you can check instantly):**

```
   n^3 + 2n                 at n=1  ->  3        = 3 x 1
   2^(3n) - 1               at n=1  ->  7        = 7 x 1
   3^(2n+1) + 2^(n+2)       at n=1  ->  35       = 7 x 5
   4^n - 3n - 1             at n=1  ->  0        = 9 x 0
   10^n + 3.4^(n+2) + 5     at n=1  ->  207      = 9 x 23
   2.4^(2n+1) + 3^(3n+1)    at n=1  ->  209      = 11 x 19
   3.5^(2n+1) + 2^(3n+1)    at n=1  ->  391      = 17 x 23
   2.7^n + 3.5^n - 5        at n=1  ->  24       = 24 x 1
   7^(2n) + 2^(3n-3).3^(n-1) at n=1 ->  50       = 25 x 2
   49^n + 16n - 1           at n=1  ->  64       = 64 x 1
   3^(2n+2) - 8n - 9        at n=1  ->  64       = 64 x 1
   11^(n+2) + 12^(2n+1)     at n=1  ->  3059     = 133 x 23
   2^(4n) - 15n - 1         at n=1  ->  0        = 225 x 0
   5^(2n+2) - 24n - 25      at n=1  ->  576      = 576 x 1
```

> **Zero is divisible by every number.** If your base step gives 0, that is a
> perfectly valid base step. Say so: "0 = 9 x 0, which is divisible by 9."

---

# SECTION 4 — INEQUALITY RESULTS

```
  +----------------------------------------------------------------------+
  |   2^n  >  n                          for all n in N                  |
  |   2^n  >=  n + 1                     for all n in N                  |
  |   3^n  >  2^n                        for all n in N                  |
  |   2^n  >  n^2                        for all n >= 5                  |
  |   n!   >  2^n                        for all n >= 4                  |
  |   (1 + x)^n  >=  1 + n x             for x > -1  (Bernoulli)         |
  +----------------------------------------------------------------------+
```

| Result | Base step | Step 5 chain |
|---|---|---|
| `2^n > n` | `n=1: 2 > 1` | `2.2^k > 2k = k + k >= k + 1` |
| `3^n > 2^n` | `n=1: 3 > 2` | `3.3^k > 3.2^k > 2.2^k` |
| `2^n > n^2` | `n=5: 32 > 25` | `2.2^k > 2k^2 >= (k+1)^2` since `k^2-2k-1>0` for `k>=5` |
| `n! > 2^n` | `n=4: 24 > 16` | `(k+1)! = (k+1)k! > (k+1)2^k > 2.2^k` since `k+1 >= 5 > 2` |
| Bernoulli | `n=1: 1+x >= 1+x` | `(1+x)^(k+1) >= (1+kx)(1+x) = 1+(k+1)x + kx^2 >= 1+(k+1)x` |

> **When to use each starting value:** always test `n = 1, 2, 3, 4, 5` first and
> start at the first one that works. Then say `n >= that` in the conclusion.

---

# SECTION 5 — PRODUCT RESULTS

```
  +----------------------------------------------------------------------+
  |   (  1 )(  1 )(  1 )     (  1 )                                      |
  |   (1+-)(1+-)(1+-) ... (1+-)   =   n + 1        for n >= 1            |
  |   (  1 )(  2 )(  3 )     (  n )                                      |
  |                                                                      |
  |   (  1 )(  1 )     (  1 )         1                                  |
  |   (1--)(1--) ... (1--)        =  ---           for n >= 2            |
  |   (  2 )(  3 )     (  n )         n                                  |
  |                                                                      |
  |   (  1 )(  1 )     (   1  )      n + 1                               |
  |   (1--)(1--) ... (1----)      =  --------      for n >= 2            |
  |   (  4 )(  9 )     (  n^2 )       2n                                 |
  +----------------------------------------------------------------------+
```

| Result | Multiply by | Key line |
|---|---|---|
| `= n+1` | `1 + 1/(k+1)` | `(k+1)(k+2)/(k+1) = k+2` |
| `= 1/n` | `1 - 1/(k+1)` | `(1/k)(k/(k+1)) = 1/(k+1)` |
| `= (n+1)/(2n)` | `1 - 1/(k+1)^2` | `(k+1)^2 - 1 = k(k+2)` |

---

# SECTION 6 — RECURRENCE RESULTS

```
  +----------------------------------------------------------------------+
  |   a(1) = 1 ,  a(n+1) = a(n) + 2        =>   a(n) = 2n - 1            |
  |   a(1) = 3 ,  a(n+1) = 2 a(n) + 1      =>   a(n) = 2^(n+1) - 1       |
  |   a(1) = 1 ,  a(n+1) = 3 a(n)          =>   a(n) = 3^(n-1)           |
  |   a(1) = 2 ,  a(n+1) = a(n) + 2n       =>   a(n) = n^2 - n + 2       |
  +----------------------------------------------------------------------+
```

**Method:** Step 5 is always *"a(k+1) = (recurrence) = (substitute (i)) = (target)"*.
There is no algebra to invent — the recurrence hands it to you.

*Check the last one:* `a(1)=2`; `a(2)=2+2=4` and `4-2+2=4`; `a(3)=4+4=8` and `9-3+2=8`.

**Matrix version (links to Chapter 3):**

```
      +---------+                 +---------+
  A = | 1     1 |    =>    A^n =  | 1     n |
      | 0     1 |                 | 0     1 |
      +---------+                 +---------+

      +---------------------+              +-------------------------+
  A = | cos t     -sin t    |   =>  A^n =  | cos nt     -sin nt      |
      | sin t      cos t    |              | sin nt      cos nt      |
      +---------------------+              +-------------------------+
```

---

# SECTION 7 — THE `(k+1)`th TERM LOOKUP TABLE

**Rule: write `t(n)` from the question, cross out every `n`, write `k+1`.**

| `t(n)` | `t(k+1)` |
|---|---|
| `n` | `k + 1` |
| `2n` | `2k + 2` |
| `2n - 1` | `2k + 1` |
| `3n - 2` | `3k + 1` |
| `4n - 3` | `4k + 1` |
| `n^2` | `(k+1)^2` |
| `n^3` | `(k+1)^3` |
| `n(n+1)` | `(k+1)(k+2)` |
| `n(n+1)(n+2)` | `(k+1)(k+2)(k+3)` |
| `n(n+1)^2` | `(k+1)(k+2)^2` |
| `n^2 (n+1)` | `(k+1)^2 (k+2)` |
| `1/(n(n+1))` | `1/((k+1)(k+2))` |
| `1/((2n-1)(2n+1))` | `1/((2k+1)(2k+3))` |
| `1/((3n-2)(3n+1))` | `1/((3k+1)(3k+4))` |
| `1/(n(n+1)(n+2))` | `1/((k+1)(k+2)(k+3))` |
| `a + (n-1)d` | `a + kd` |
| `a r^(n-1)` | `a r^k` |
| `(n+1) 2^(n-1)` | `(k+2) 2^k` |
| `n . n!` | `(k+1) . (k+1)!` |
| `n(n+1)/2` | `(k+1)(k+2)/2` |

---

# SECTION 8 — THE ALGEBRA FACTORISATIONS THAT KEEP APPEARING

Keep these in your head; they are the exit line of Step 5 in most questions.

```
  +----------------------------------------------------------------------+
  |   k^2 + 2k + 1        =  (k + 1)^2                                   |
  |   k^2 + 4k + 4        =  (k + 2)^2                                   |
  |   k^2 + 3k + 2        =  (k + 1)(k + 2)                              |
  |   2k^2 + 7k + 6       =  (k + 2)(2k + 3)                             |
  |   3k^2 + 4k + 1       =  (k + 1)(3k + 1)                             |
  |   2k^2 + 3k + 1       =  (k + 1)(2k + 1)                             |
  |   3k^2 + 13k + 12     =  (k + 3)(3k + 4)                             |
  |   3k^2 + 17k + 24     =  (k + 3)(3k + 8)                             |
  |   k^2 + 2k            =  k(k + 2)                                    |
  |   (k+1)^2 - 1         =  k(k + 2)                                    |
  +----------------------------------------------------------------------+
```

**How to check a factorisation in 5 seconds:** multiply out only the `k^2` term,
the constant term, and the middle term. If all three match, it is right.

---

# SECTION 9 — WORDS THE EXAMINER IS LOOKING FOR

Copy these exact phrases. They carry marks on their own.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  "Let S(n) be the statement ..."                                     |
  |                                                                      |
  |  "For n = 1, LHS = ... and RHS = ... Since LHS = RHS, S(1) is true." |
  |                                                                      |
  |  "Assume that S(k) is true for some k in N."                         |
  |                                                                      |
  |  "... = 3m, where m is an integer."          (divisibility)          |
  |                                                                      |
  |  "We have to prove that S(k+1) is true, i.e. ..."                    |
  |                                                                      |
  |  "Therefore S(k+1) is true whenever S(k) is true."                   |
  |                                                                      |
  |  "Hence, by the principle of finite mathematical induction,          |
  |   S(n) is true for all n in N."                                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# THE 12 THINGS TO WRITE ON YOUR PALM

```
  +======================================================================+
  |                                                                      |
  |   1.  The 6 steps:  Statement / Base / Assume / To Prove /           |
  |                     Algebra / Conclusion                             |
  |                                                                      |
  |   2.  LHS of S(k+1) = [LHS of S(k)] + [(k+1)th term]                 |
  |                                                                      |
  |   3.  (k+1)th term  =  t(n) with n replaced by k+1                   |
  |                                                                      |
  |   4.  1 + 2 + ... + n  =  n(n+1)/2                                   |
  |                                                                      |
  |   5.  1^2 + ... + n^2  =  n(n+1)(2n+1)/6                             |
  |                                                                      |
  |   6.  1^3 + ... + n^3  =  n^2(n+1)^2/4                               |
  |                                                                      |
  |   7.  AP:  (n/2)[2a + (n-1)d]        GP:  a(r^n - 1)/(r - 1)         |
  |                                                                      |
  |   8.  1.2 + 2.3 + ... + n(n+1)  =  n(n+1)(n+2)/3                     |
  |                                                                      |
  |   9.  1/(1.2) + ... + 1/(n(n+1))  =  n/(n+1)                         |
  |                                                                      |
  |  10.  Divisibility: write  f(k) = d.m , make the power the subject,  |
  |       substitute, factor out d.                                      |
  |                                                                      |
  |  11.  The three AP favourites:  64|49^n+16n-1 ,                      |
  |       17|3.5^(2n+1)+2^(3n+1) ,  11|2.4^(2n+1)+3^(3n+1)               |
  |                                                                      |
  |  12.  The last sentence:  "Hence by the principle of mathematical    |
  |       induction, S(n) is true for all n in N."                       |
  |                                                                      |
  +======================================================================+
```
