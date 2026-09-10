# Hyperbolic Functions — Competitive Exam Questions

**Chapter 9, Maths IA** — for **AP EAPCET**, **TG EAPCET** and **JEE Main**.

```
  +---------------+--------+---------+-----------+--------+----------------+
  |  EXAM         |  MATHS | PHYSICS | CHEMISTRY | TOTAL  |  MARKING       |
  +---------------+--------+---------+-----------+--------+----------------+
  |  AP EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  TG EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  JEE Main     |   25   |   25    |    25     |  300   |  +4 , -1       |
  +---------------+--------+---------+-----------+--------+----------------+
```

## HOW MANY QUESTIONS COME FROM THIS CHAPTER

| Exam | Questions from Hyperbolic Functions | Honest comment |
|---|---|---|
| **AP EAPCET** | **0 to 1** out of 80 | Hyperbolic Functions **is** in the syllabus, under Trigonometry. When it appears it is a one-line substitution question — easy marks. |
| **TG EAPCET** | **0 to 1** out of 80 | Same syllabus position, same style. |
| **JEE Main** | **0** directly | Hyperbolic functions are **not** a named JEE Main topic. They appear only in disguise: `INT dx/sqrt(x^2+a^2) = log(x + sqrt(x^2+a^2)) + c` is `sinh^-1(x/a)` wearing a hat. |

> **Be realistic.** This is not a big EAPCET chapter. But the questions it does
> set are **10-second questions** with no traps, and **EAPCET has no negative
> marking**, so a chapter that costs two hours and might hand you a free mark is
> worth doing. Learn it once, keep it forever.

---

# ===============================================================
# PATTERN 1 — GIVEN ONE VALUE, FIND THE DOUBLE ANGLE
# The single most likely question. Learn the decision table.
# ===============================================================

```
  +------------------------------------------------------------------+
  |   GIVEN sinh x  ->  cosh 2x = 1 + 2 sinh^2 x                     |
  |   GIVEN cosh x  ->  cosh 2x = 2 cosh^2 x - 1                     |
  |   GIVEN tanh x  ->  cosh 2x = (1 + tanh^2 x)/(1 - tanh^2 x)      |
  |                     sinh 2x = 2 tanh x /(1 - tanh^2 x)           |
  |   ALWAYS         ->  sinh 2x = 2 sinh x cosh x                   |
  +------------------------------------------------------------------+
```

### Q1. If `sinh x = 3`, then `cosh 2x =`
(A) 10  (B) 18  (C) **19**  (D) 20

**ANSWER: (C)**
```
  cosh 2x = 1 + 2 sinh^2 x = 1 + 2(9) = 19
```

---

### Q2. If `sinh x = 3`, then `sinh 2x =`
(A) 6  (B) `3 sqrt10`  (C) **`6 sqrt10`**  (D) `sqrt10`

**ANSWER: (C)**
```
  cosh x = sqrt(1 + 9) = sqrt10        (positive root always)
  sinh 2x = 2(3)(sqrt10) = 6 sqrt10
  CHECK: 19^2 - 360 = 361 - 360 = 1                            CORRECT
```

---

### Q3. If `cosh x = 5/2`, then `cosh 2x =`
(A) 25/4  (B) **23/2**  (C) 21/4  (D) 27/2

**ANSWER: (B)**
```
  cosh 2x = 2(25/4) - 1 = 25/2 - 1 = 23/2
```

---

### Q4. If `cosh x = 3`, then `cosh 2x =`
(A) 9  (B) 16  (C) **17**  (D) 18

**ANSWER: (C)**  `2(9) - 1 = 17`.

---

### Q5. If `tanh x = 1/2`, then `cosh 2x =`
(A) 3/5  (B) 4/3  (C) **5/3**  (D) 5/4

**ANSWER: (C)**
```
              1 + 1/4      5/4      5
  cosh 2x  =  --------  =  ---  =  ---
              1 - 1/4      3/4      3
```

> **SHORTCUT:** for `tanh x = p/q`, `cosh 2x = (q^2 + p^2)/(q^2 - p^2)` and
> `sinh 2x = 2pq/(q^2 - p^2)`. With `p/q = 1/2`: `(4+1)/(4-1) = 5/3` and
> `4/3`. One line, no algebra.

---

### Q6. If `tanh x = 3/5`, then `sinh 2x =`
(A) 8/15  (B) **15/8**  (C) 17/8  (D) 15/17

**ANSWER: (B)**
```
  Shortcut with p = 3, q = 5 :  sinh 2x = 2pq/(q^2 - p^2) = 30/16 = 15/8
  (and cosh 2x = 34/16 = 17/8 , check 289/64 - 225/64 = 1)     CORRECT
```

---

### Q7. If `sinh x = 1/2`, then `cosh 2x =`
(A) 5/4  (B) **3/2**  (C) 5/2  (D) 2

**ANSWER: (B)**  `1 + 2(1/4) = 3/2`.

---

### Q8. If `cosh x = 5/3` and `x > 0`, then `tanh x =`
(A) 3/5  (B) 3/4  (C) **4/5**  (D) 5/4

**ANSWER: (C)**
```
  sinh x = sqrt(25/9 - 1) = 4/3 ,  tanh x = (4/3)/(5/3) = 4/5
```

> **SHORTCUT — the two triples.** `(3,4,5)` and `(5,12,13)` work here just as in
> trigonometry, but with the **hypotenuse playing the role of `cosh`**:
> `cosh = 5/3, sinh = 4/3` ; `cosh = 5/4, sinh = 3/4` ; `cosh = 13/5, sinh = 12/5`.
> Spot the Pythagorean triple and you are done.

---

# ===============================================================
# PATTERN 2 — EVALUATE AT x = log a
# The exponentials become the number a. Pure arithmetic.
# ===============================================================

```
  +------------------------------------------------------------------+
  |    If x = log a  then  e^x = a  and  e^-x = 1/a , so             |
  |                                                                  |
  |        sinh(log a) = (a - 1/a)/2  =  (a^2 - 1)/(2a)              |
  |        cosh(log a) = (a + 1/a)/2  =  (a^2 + 1)/(2a)              |
  |        tanh(log a) = (a^2 - 1)/(a^2 + 1)                         |
  +------------------------------------------------------------------+
```

### Q9. `sinh(log 3) =`
(A) 3/4  (B) **4/3**  (C) 5/3  (D) 8/3

**ANSWER: (B)**  `(9 - 1)/(2·3) = 8/6 = 4/3`.

---

### Q10. `cosh(log 5) =`
(A) 12/5  (B) **13/5**  (C) 5/13  (D) 26/5

**ANSWER: (B)**  `(25 + 1)/(2·5) = 26/10 = 13/5`.
(Note the 5-12-13 triple: `sinh(log5) = 24/10 = 12/5`.)

---

### Q11. `tanh(log 2) =`
(A) 4/5  (B) **3/5**  (C) 5/3  (D) 3/4

**ANSWER: (B)**  `(4 - 1)/(4 + 1) = 3/5`.

---

### Q12. `cosh(log 4) =`
(A) 15/8  (B) **17/8**  (C) 15/17  (D) 8/17

**ANSWER: (B)**  `(16 + 1)/8 = 17/8`.  (And `sinh(log 4) = 15/8`.)

---

### Q13. `sinh( log(2 + sqrt3) ) =`
(A) 2  (B) **`sqrt3`**  (C) `2 sqrt3`  (D) `sqrt3 / 2`

**ANSWER: (B)**
```
  e^x = 2 + sqrt3 ,  e^-x = 1/(2 + sqrt3) = 2 - sqrt3   (rationalise)

  sinh x = ((2 + sqrt3) - (2 - sqrt3))/2 = (2 sqrt3)/2 = sqrt3
  cosh x = ((2 + sqrt3) + (2 - sqrt3))/2 = 4/2 = 2

  CHECK: 4 - 3 = 1                                             CORRECT
```

> **SHORTCUT:** `1/(2 + sqrt3) = 2 - sqrt3` because `(2+sqrt3)(2-sqrt3) = 1`.
> Whenever `a . b = 1` you get `sinh(log a) = (a - b)/2` instantly.

---

# ===============================================================
# PATTERN 3 — SIMPLIFY AN EXPRESSION USING THE IDENTITIES
# ===============================================================

### Q14. `(cosh x + sinh x)(cosh x - sinh x) =`
(A) 0  (B) **1**  (C) `e^2x`  (D) `cosh 2x`

**ANSWER: (B)**  `= e^x · e^-x = e^0 = 1`.

---

### Q15. `cosh^4 x - sinh^4 x =`
(A) 1  (B) `sinh 2x`  (C) **`cosh 2x`**  (D) `cosh 4x`

**ANSWER: (C)**
```
  = (cosh^2 - sinh^2)(cosh^2 + sinh^2) = 1 . cosh 2x = cosh 2x
```

---

### Q16. `cosh 2x - sinh 2x =`
(A) 1  (B) `e^2x`  (C) **`e^-2x`**  (D) `e^-x`

**ANSWER: (C)**  `cosh t - sinh t = e^-t` with `t = 2x`.

---

### Q17. `(1 + tanh x)/(1 - tanh x) =`
(A) `e^x`  (B) **`e^2x`**  (C) `e^-2x`  (D) `cosh 2x`

**ANSWER: (B)**
```
                 cosh x + sinh x       e^x
  Multiply by  ----------------- ->  -------  =  e^2x
                 cosh x - sinh x       e^-x
```

> **SHORTCUT:** memorise `(1 + tanh x)/(1 - tanh x) = e^2x`. It shows up
> constantly and saves a full minute.

---

### Q18. `sech^2 x + tanh^2 x =`
(A) 0  (B) **1**  (C) `cosh 2x`  (D) `-1`

**ANSWER: (B)**  Divide `cosh^2 - sinh^2 = 1` by `cosh^2 x`.

---

### Q19. `coth^2 x - cosech^2 x =`
(A) 0  (B) **1**  (C) `-1`  (D) `sech^2 x`

**ANSWER: (B)**  Divide `cosh^2 - sinh^2 = 1` by `sinh^2 x`.

---

### Q20. `(cosh x + sinh x)^2 =`
(A) 1  (B) `cosh 2x`  (C) **`cosh 2x + sinh 2x`**  (D) `2 cosh 2x`

**ANSWER: (C)**  `(e^x)^2 = e^2x = cosh 2x + sinh 2x`.

---

### Q21. If `sinh x = tan A`, then `cosh x =`
(A) `cos A`  (B) **`sec A`**  (C) `cosec A`  (D) `sin A`

**ANSWER: (B)**
```
  cosh^2 x = 1 + sinh^2 x = 1 + tan^2 A = sec^2 A
  cosh x = |sec A| ; taking A in (-pi/2, pi/2) so sec A > 0 , cosh x = sec A

  BONUS worth knowing: then tanh x = tan A / sec A = sin A ,
  and x = log( tan(pi/4 + A/2) ) .
```

> **SHORTCUT:** `sinh <-> tan`, `cosh <-> sec` is the standard substitution pair,
> because both satisfy "(second)^2 - (first)^2 = 1".

---

# ===============================================================
# PATTERN 4 — INVERSE HYPERBOLIC: USE THE LOG FORM
# ===============================================================

```
  +------------------------------------------------------------------+
  |   sinh^-1 x = log( x + sqrt(x^2 + 1) )                           |
  |   cosh^-1 x = log( x + sqrt(x^2 - 1) )       x >= 1              |
  |   tanh^-1 x = (1/2) log( (1+x)/(1-x) )       |x| < 1             |
  |   coth^-1 x = (1/2) log( (x+1)/(x-1) )       |x| > 1             |
  +------------------------------------------------------------------+
```

### Q22. `sinh^-1(1) =`
(A) 0  (B) `log 2`  (C) **`log(1 + sqrt2)`**  (D) `log(sqrt2 - 1)`

**ANSWER: (C)**  `log(1 + sqrt(1+1)) = log(1 + sqrt2) = 0.881374`.

---

### Q23. `sinh^-1(4/3) =`
(A) `log 2`  (B) **`log 3`**  (C) `log(4/3)`  (D) `log 4`

**ANSWER: (B)**
```
  = log( 4/3 + sqrt(16/9 + 1) ) = log( 4/3 + 5/3 ) = log 3
  CHECK: sinh(log3) = (3 - 1/3)/2 = 4/3                        CORRECT
```

---

### Q24. `cosh^-1(5/3) =`
(A) `log 2`  (B) **`log 3`**  (C) `log(5/3)`  (D) `log 5`

**ANSWER: (B)**  `log(5/3 + sqrt(25/9 - 1)) = log(5/3 + 4/3) = log 3`.

---

### Q25. `tanh^-1(4/5) =`
(A) `log 2`  (B) **`log 3`**  (C) `(1/2) log 3`  (D) `log 9`

**ANSWER: (B)**
```
  = (1/2) log( (1 + 4/5)/(1 - 4/5) ) = (1/2) log( (9/5)/(1/5) )
  = (1/2) log 9 = (1/2)(2 log 3) = log 3
```

> **SHORTCUT — the `log 3` family.** `sinh^-1(4/3) = cosh^-1(5/3)
> = tanh^-1(4/5) = log 3`, because all three describe the same `x = log 3`.
> Likewise the `log 2` family: `sinh^-1(3/4) = cosh^-1(5/4) = tanh^-1(3/5) = log 2`.
> If you see 3/4, 5/4, 3/5 the answer is `log 2`. If you see 4/3, 5/3, 4/5 it is
> `log 3`.

---

### Q26. `coth^-1(5/3) =`
(A) **`log 2`**  (B) `log 3`  (C) `(1/2) log 2`  (D) `log 4`

**ANSWER: (A)**
```
  = (1/2) log( (5/3 + 1)/(5/3 - 1) ) = (1/2) log( (8/3)/(2/3) )
  = (1/2) log 4 = log 2
```

---

### Q27. `sech^-1(3/5) =`
(A) `log 2`  (B) **`log 3`**  (C) `log(3/5)`  (D) `log 5`

**ANSWER: (B)**
```
              1 + sqrt(1 - 9/25)        1 + 4/5        9/5
  = log  ----------------------- = log --------- = log ----- = log 3
                    3/5                   3/5           3/5
```

---

### Q28. `cosech^-1(3/4) =`
(A) `log 2`  (B) **`log 3`**  (C) `log(4/3)`  (D) `log(3/4)`

**ANSWER: (B)**
```
                1 + sqrt(1 + 9/16)          1 + 5/4          9/4
  = log   ------------------------  = log  ---------  = log -----
                     3/4                      3/4            3/4

  and (9/4) / (3/4) = (9/4)(4/3) = 3 , so the value is log 3 .
```

---

### Q29. If `sinh x = 5`, then `x =`
(A) `log(5 + sqrt24)`  (B) **`log(5 + sqrt26)`**  (C) `log(5 + sqrt25)`  (D) `log 5`

**ANSWER: (B)**  `log(5 + sqrt(25 + 1)) = log(5 + sqrt26)`.
> **SHORTCUT:** `sinh^-1` gets **`+1`** under the root; `cosh^-1` gets **`-1`**.
> Option (A) is the `cosh^-1` trap; option (C) is the "forgot the root" trap.

---

# ===============================================================
# PATTERN 5 — DOMAIN, RANGE, "IS IT DEFINED?"
# Free marks. Learn the two tables.
# ===============================================================

### Q30. The range of `cosh x` is
(A) `R`  (B) `(0, inf)`  (C) **`[1, inf)`**  (D) `(1, inf)`

**ANSWER: (C)**  By AM-GM, `cosh x >= 1`, with equality at `x = 0`, so the
endpoint **is** attained — square bracket.

---

### Q31. The range of `sech x` is
(A) `[0, 1]`  (B) **`(0, 1]`**  (C) `(-1, 1)`  (D) `[1, inf)`

**ANSWER: (B)**  Reciprocal of `[1, inf)`. Never 0, and equals 1 at `x = 0`.

---

### Q32. The domain of `tanh^-1 x` is
(A) `R`  (B) `[-1, 1]`  (C) **`(-1, 1)`**  (D) `|x| >= 1`

**ANSWER: (C)**  The range of `tanh` is the open interval `(-1, 1)`.

---

### Q33. Which of the following is **NOT** defined?
(A) `sinh^-1(-7)`  (B) `tanh^-1(-0.9)`  (C) **`cosh^-1(1/2)`**  (D) `coth^-1(3)`

**ANSWER: (C)**  `cosh^-1` needs `x >= 1`.
(A) fine — `sinh^-1` accepts everything. (B) fine — `|x| < 1`.
(D) fine — `coth^-1` needs `|x| > 1`.

---

### Q34. The number of real solutions of `cosh x = 0` is
(A) 1  (B) 2  (C) infinitely many  (D) **0**

**ANSWER: (D)**  `cosh x >= 1` for every real `x`.

> **SHORTCUT:** any equation asking for `cosh x = k` with `k < 1`, or
> `tanh x = +/-1`, or `sech x > 1` has **no solution**. Answer 0 and move on.

---

# ===============================================================
# PATTERN 6 — OSBORNE'S RULE / "WHICH IDENTITY IS CORRECT?"
# One sign is wrong in three of the four options. Find it.
# ===============================================================

### Q35. Which is correct?
(A) `cosh^2 x + sinh^2 x = 1`
(B) **`cosh(x+y) = cosh x cosh y + sinh x sinh y`**
(C) `tanh(x+y) = (tanh x + tanh y)/(1 - tanh x tanh y)`
(D) `sinh 3x = 3 sinh x - 4 sinh^3 x`

**ANSWER: (B)**
```
  (A) wrong: it is cosh^2 - sinh^2 = 1 (MINUS).
  (C) wrong: the denominator is 1 PLUS tanh x tanh y.
  (D) wrong: it is 3 sinh x PLUS 4 sinh^3 x.
  Osborne's Rule flips the sign of every sine-pair -- and (A), (C), (D)
  are exactly the three places a sine-pair hides.
```

---

### Q36. By Osborne's Rule, `cosec^2 A = 1 + cot^2 A` becomes
(A) `cosech^2 x = 1 + coth^2 x`
(B) **`cosech^2 x = coth^2 x - 1`**
(C) `cosech^2 x = 1 - coth^2 x`
(D) `cosech^2 x = coth^2 x + 1`

**ANSWER: (B)**  `cot^2` hides a `sin^2` in its denominator, so its sign flips:
`cosech^2 = -1 + coth^2`.

---

### Q37. By Osborne's Rule, `cos 2A = (1 - tan^2 A)/(1 + tan^2 A)` becomes
(A) `(1 - tanh^2 x)/(1 + tanh^2 x)`
(B) **`(1 + tanh^2 x)/(1 - tanh^2 x)`**
(C) `(1 + tanh^2 x)/(1 + tanh^2 x)`
(D) `(tanh^2 x - 1)/(tanh^2 x + 1)`

**ANSWER: (B)**  Both `tan^2` terms carry a hidden sine-pair, so **both** signs flip.
Numerical check at `x = 1`: `1.580026/0.419974 = 3.762196 = cosh 2`. Correct.

---

### Q38. `sin^4 A` under Osborne's Rule becomes
(A) `- sinh^4 x`  (B) **`sinh^4 x`**  (C) `cosh^4 x`  (D) `- cosh^4 x`

**ANSWER: (B)**  `sin^4 = (sin^2)^2` is **two** sine-pairs, so the sign flips
twice and returns to `+`.

---

# ===============================================================
# PATTERN 7 — MULTIPLE ANGLE AND POWERS
# ===============================================================

### Q39. `(cosh x + sinh x)^5 =`
(A) `cosh 5x`  (B) `sinh 5x`  (C) **`cosh 5x + sinh 5x`**  (D) `5(cosh x + sinh x)`

**ANSWER: (C)**  `(e^x)^5 = e^5x = cosh 5x + sinh 5x`.

---

### Q40. If `sinh x = 1`, then `sinh 3x =`
(A) 3  (B) 4  (C) **7**  (D) 10

**ANSWER: (C)**  `3(1) + 4(1)^3 = 7`.
```
  CHECK: sinh x = 1 => x = log(1 + sqrt2) = 0.881374 , 3x = 2.644121
         e^2.644121 = 14.071068 , e^-2.644121 = 0.071068
         sinh 3x = (14.071068 - 0.071068)/2 = 14/2 = 7          CORRECT
```

---

### Q41. If `cosh x = 2`, then `cosh 3x =`
(A) 8  (B) 14  (C) **26**  (D) 32

**ANSWER: (C)**  `4(8) - 3(2) = 32 - 6 = 26`.
```
  CHECK: cosh x = 2 => e^x = 2 + sqrt3 = 3.732051
         e^3x = 3.732051^3 = 51.980762 , e^-3x = 0.019238
         cosh 3x = (51.980762 + 0.019238)/2 = 52/2 = 26         CORRECT
```

---

### Q42. If `tanh x = 1/3`, then `tanh 2x =`
(A) 2/3  (B) **3/5**  (C) 5/3  (D) 1/5

**ANSWER: (B)**
```
              2(1/3)         2/3       2/3      3
  tanh 2x = ----------  =  --------  = ---  .  ---  =  3/5
             1 + 1/9        10/9        3      10
```

> **SHORTCUT:** `tanh 2x = 2t/(1 + t^2)` — the denominator is **plus**, unlike
> `tan 2x = 2t/(1 - t^2)`. Getting this sign right is the whole question.

---

# ===============================================================
# PATTERN 8 — WHERE THE CHAPTER HIDES IN OTHER TOPICS
# (calculus crossover -- this is how JEE Main touches it)
# ===============================================================

### Q43. `d/dx (cosh x) =`
(A) `- sinh x`  (B) **`sinh x`**  (C) `cosh x`  (D) `sech^2 x`

**ANSWER: (B)**
```
  d/dx [ (e^x + e^-x)/2 ] = (e^x - e^-x)/2 = sinh x

  NO minus sign -- unlike d/dx(cos x) = -sin x .
```

---

### Q44. `INT dx / sqrt(x^2 + 9) =`
(A) `cosh^-1(x/3) + c`  (B) **`sinh^-1(x/3) + c`**  (C) `tanh^-1(x/3) + c`  (D) `(1/3) sinh^-1 x + c`

**ANSWER: (B)**
```
  Standard form: INT dx/sqrt(x^2 + a^2) = sinh^-1(x/a) + c
                                        = log( x + sqrt(x^2 + a^2) ) + c

  PLUS a^2 under the root  ->  sinh^-1 .
  MINUS a^2 under the root ->  cosh^-1 .
```

---

### Q45. `lim (x -> infinity) tanh x =`
(A) 0  (B) **1**  (C) `-1`  (D) does not exist

**ANSWER: (B)**  `tanh x = 1 - 2/(e^2x + 1)`, and `e^2x -> infinity`, so the
second term `-> 0`.

---

### Q46. `lim (x -> 0) (sinh x)/x =`
(A) 0  (B) **1**  (C) `1/2`  (D) infinity

**ANSWER: (B)**  Near 0, `sinh x = x + x^3/6 + ...`, so the ratio `-> 1`.
(Exactly like `lim (sin x)/x = 1`.)

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +----------------------------------+---------------------------------------+
  |   IF YOU SEE THIS ...            |   DO THIS IMMEDIATELY                 |
  +----------------------------------+---------------------------------------+
  |  "sinh x = k , find cosh 2x"     |  cosh 2x = 1 + 2k^2 . Done.           |
  +----------------------------------+---------------------------------------+
  |  "cosh x = k , find cosh 2x"     |  cosh 2x = 2k^2 - 1 . Done.           |
  +----------------------------------+---------------------------------------+
  |  "tanh x = p/q"                  |  cosh2x = (q^2+p^2)/(q^2-p^2)         |
  |                                  |  sinh2x = 2pq/(q^2-p^2)               |
  +----------------------------------+---------------------------------------+
  |  x = log a  anywhere             |  e^x = a , e^-x = 1/a . Substitute.   |
  |                                  |  sinh = (a^2-1)/2a , cosh = (a^2+1)/2a|
  +----------------------------------+---------------------------------------+
  |  3/4 , 5/4 , 3/5 in an inverse   |  the answer is  log 2                 |
  |  4/3 , 5/3 , 4/5 in an inverse   |  the answer is  log 3                 |
  |  5/12, 13/12, 5/13 in an inverse |  the answer is  log(3/2) or log(2/3)  |
  +----------------------------------+---------------------------------------+
  |  cosh^-1 of anything < 1         |  NOT DEFINED. Tick it and move on.    |
  |  tanh^-1 of anything with |x|>=1 |  NOT DEFINED.                         |
  |  sech^-1 of anything > 1         |  NOT DEFINED.                         |
  +----------------------------------+---------------------------------------+
  |  "cosh x = 0" or "tanh x = 1"    |  ZERO solutions. Tick and move on.    |
  +----------------------------------+---------------------------------------+
  |  (cosh x +/- sinh x)^n           |  it is e^(+/- nx) = cosh nx +/- sinh nx|
  +----------------------------------+---------------------------------------+
  |  (1 + tanh x)/(1 - tanh x)       |  = e^2x                               |
  +----------------------------------+---------------------------------------+
  |  cosh^4 - sinh^4                 |  factor as a^2-b^2  ->  cosh 2x       |
  +----------------------------------+---------------------------------------+
  |  A "which identity is correct"   |  Find the SINE-PAIR. Whichever option |
  |  option set                      |  flipped that sign is the right one.  |
  +----------------------------------+---------------------------------------+
  |  sqrt(x^2 + a^2) in an integral  |  sinh^-1(x/a)                         |
  |  sqrt(x^2 - a^2) in an integral  |  cosh^-1(x/a)                         |
  +----------------------------------+---------------------------------------+
  |  d/dx cosh x                     |  = sinh x  (NO minus sign)            |
  +----------------------------------+---------------------------------------+
  |  Time is running out on EAPCET   |  EAPCET has NO negative marking.      |
  |                                  |  NEVER leave a blank. Guess.          |
  |                                  |  On JEE Main (-1), skip if clueless.  |
  +----------------------------------+---------------------------------------+
```

## THE THREE-SECOND SANITY CHECK

```
  Whatever answer you get, ask:
      cosh must be >= 1        (if you got 0.7 , you are wrong)
      |tanh| must be < 1       (if you got 1.4 , you are wrong)
      sech must be in (0, 1]   (if you got 2 , you are wrong)
      cosh^2 - sinh^2 must be 1

  That last check catches nearly every arithmetic slip in this chapter.
```
