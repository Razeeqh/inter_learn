# Hyperbolic Functions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use each formula — that is what exams actually test.

> **This is a SHORT chapter.** The whole sheet is about 30 formulas and you can
> rebuild most of them from the two definitions at the top. Do not memorise
> blindly — learn section 1, then check how far you can get on your own.

> **`log` means natural log (`log_e`, i.e. `ln`) everywhere in this chapter.**

---

# 1. THE DEFINITIONS — everything comes from here

```
  +====================================================================+
  |                                                                    |
  |                 e^x - e^-x                    e^x + e^-x           |
  |    sinh x  =   -------------      cosh x  =  -------------         |
  |                      2                             2               |
  |                                                                    |
  |                 sinh x       e^x - e^-x                            |
  |    tanh x  =   --------  =  -------------                          |
  |                 cosh x       e^x + e^-x                            |
  |                                                                    |
  |                   1          cosh x       e^x + e^-x               |
  |    coth x  =   --------  =  --------  =  -------------   x =/= 0   |
  |                 tanh x       sinh x       e^x - e^-x               |
  |                                                                    |
  |                   1              2                                 |
  |    sech x  =   --------  =  -------------                          |
  |                 cosh x       e^x + e^-x                            |
  |                                                                    |
  |                    1              2                                |
  |   cosech x =   --------  =  -------------               x =/= 0    |
  |                 sinh x       e^x - e^-x                            |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---|---|
| `sinh x = (e^x - e^-x)/2` | any "prove from first principles" question |
| `cosh x = (e^x + e^-x)/2` | any "prove from first principles" question |
| **`cosh x + sinh x = e^x`** | `(cosh x + sinh x)^n = cosh nx + sinh nx` — instant proof |
| **`cosh x - sinh x = e^-x`** | one-line proof of `cosh^2 - sinh^2 = 1` |
| `tanh x = (e^2x - 1)/(e^2x + 1)` | proving `-1 < tanh x < 1` |
| `coth x = (e^2x + 1)/(e^2x - 1)` | occasionally in log-form work |

---

# 2. VALUES AT ZERO, AND ODD / EVEN

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    sinh 0 = 0      cosh 0 = 1      tanh 0 = 0     sech 0 = 1     |
  |                                                                  |
  |    coth 0  and  cosech 0  are NOT DEFINED                        |
  |                                                                  |
  +------------------------------------------------------------------+

  +------------------------------------------------------------------+
  |   EVEN  (f(-x) = f(x))   :   cosh ,  sech                        |
  |   ODD   (f(-x) = -f(x))  :   sinh ,  tanh ,  coth ,  cosech      |
  |                                                                  |
  |   Same pattern as ordinary trig: only cos and sec are even.      |
  +------------------------------------------------------------------+
```

| Fact | When to use |
|---|---|
| `sinh 0 = 0`, `cosh 0 = 1` | sanity-testing any formula you are unsure of |
| `cosh(-x) = cosh x` | simplifying, and explaining why `cosh^-1` needs a restriction |
| `sinh(-x) = -sinh x` | getting subtraction formulas from addition formulas |
| `coth 0`, `cosech 0` undefined | "state the domain" questions |

---

# 3. DOMAIN AND RANGE

```
  +-------------+------------------------+---------------------------------+
  |  FUNCTION   |  DOMAIN                |  RANGE                          |
  +-------------+------------------------+---------------------------------+
  |  sinh x     |  R                     |  R                              |
  |  cosh x     |  R                     |  [ 1 , inf )                    |
  |  tanh x     |  R                     |  ( -1 , 1 )                     |
  |  coth x     |  R - {0}               |  ( -inf , -1 ) U ( 1 , inf )    |
  |  sech x     |  R                     |  ( 0 , 1 ]                      |
  |  cosech x   |  R - {0}               |  R - {0}                        |
  +-------------+------------------------+---------------------------------+

      [ ] = endpoint INCLUDED      ( ) = endpoint NOT included
```

| Fact | When to use |
|---|---|
| `cosh x >= 1` always (AM-GM on `e^x`, `e^-x`) | choosing the **positive** root for `cosh` |
| `cosh x = 1` only at `x = 0` | justifying the square bracket in `[1, inf)` |
| `-1 < tanh x < 1`, ends never reached | "is `tanh x = 1` possible?" — answer: no |
| `sech x` in `(0, 1]`, always positive | spotting impossible data in a question |
| `sinh x = 0` only at `x = 0` | why `coth` and `cosech` exclude `x = 0` |

---

# 4. THE THREE FUNDAMENTAL IDENTITIES

```
  +====================================================================+
  |                                                                    |
  |     (1)     cosh^2 x  -  sinh^2 x  =  1          <-- THE ONE       |
  |                                                                    |
  |     (2)     1  -  tanh^2 x  =  sech^2 x                            |
  |             (divide (1) by cosh^2 x)                               |
  |                                                                    |
  |     (3)     coth^2 x  -  1  =  cosech^2 x        x =/= 0           |
  |             (divide (1) by sinh^2 x)                               |
  |                                                                    |
  +====================================================================+

     REARRANGEMENTS YOU WILL ACTUALLY USE

        cosh^2 x = 1 + sinh^2 x        cosh x = + sqrt(1 + sinh^2 x)
        sinh^2 x = cosh^2 x - 1        sinh x = +/- sqrt(cosh^2 x - 1)
        sech^2 x = 1 - tanh^2 x        sech x = + sqrt(1 - tanh^2 x)
```

| Identity | When to use |
|---|---|
| **`cosh^2 x - sinh^2 x = 1`** | given one of sinh/cosh, get the other. **Used in 90% of questions.** |
| Same, as `(cosh+sinh)(cosh-sinh) = e^x · e^-x` | the fastest written proof |
| `1 - tanh^2 x = sech^2 x` | given `tanh x`, get `cosh x` and `sinh x` |
| `coth^2 x - 1 = cosech^2 x` | given `coth x` or `cosech x` |
| `cosh^4 x - sinh^4 x = cosh 2x` | a favourite 4-mark "prove that" |
| Final CHECK: does `cosh^2 - sinh^2 = 1` hold on your answer? | **always, before you move on** |

**Verified at `x = 1`:** `1.543080635^2 - 1.175201194^2 = 2.381097845 - 1.381097845 = 1`.

---

# 5. ADDITION AND SUBTRACTION FORMULAS

```
  +====================================================================+
  |                                                                    |
  |   sinh(x + y) = sinh x cosh y  +  cosh x sinh y                    |
  |   sinh(x - y) = sinh x cosh y  -  cosh x sinh y                    |
  |                                                                    |
  |   cosh(x + y) = cosh x cosh y  +  sinh x sinh y     <-- PLUS!      |
  |   cosh(x - y) = cosh x cosh y  -  sinh x sinh y                    |
  |                                                                    |
  |                    tanh x + tanh y                                 |
  |   tanh(x + y) =  ---------------------                             |
  |                   1 + tanh x tanh y                 <-- PLUS!      |
  |                                                                    |
  |                    tanh x - tanh y                                 |
  |   tanh(x - y) =  ---------------------                             |
  |                   1 - tanh x tanh y                                |
  |                                                                    |
  |                   coth x coth y + 1                                |
  |   coth(x + y) =  ---------------------                             |
  |                    coth x + coth y                                 |
  |                                                                    |
  |                   coth x coth y - 1                                |
  |   coth(x - y) =  ---------------------                             |
  |                    coth y - coth x                                 |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---|---|
| `sinh(x+y)` | deriving `sinh 2x`, `sinh 3x` |
| `cosh(x+y)` | deriving `cosh 2x`, `cosh 3x` |
| `tanh(x+y)` | deriving `tanh 2x`; occasional direct question |
| Replace `y -> -y` to get the minus versions | saves memorising six more lines |

**The two sign traps in one line:**
`cosh` addition takes **+**, `tanh` addition takes **+** in the denominator.
Both are the opposite of the ordinary trigonometric versions.

**Verified at `x = 1, y = 2`:**
`sinh 1 cosh 2 + cosh 1 sinh 2 = 4.421338 + 5.596538 = 10.017876 = sinh 3`.
`cosh 1 cosh 2 + sinh 1 sinh 2 = 5.805372 + 4.262291 = 10.067663 = cosh 3`.

---

# 6. PRODUCT AND SUM-TO-PRODUCT (rarely asked, quoted for completeness)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   2 sinh x cosh y = sinh(x+y) + sinh(x-y)                        |
  |   2 cosh x sinh y = sinh(x+y) - sinh(x-y)                        |
  |   2 cosh x cosh y = cosh(x+y) + cosh(x-y)                        |
  |   2 sinh x sinh y = cosh(x+y) - cosh(x-y)                        |
  |                                                                  |
  |   sinh A + sinh B = 2 sinh((A+B)/2) cosh((A-B)/2)                |
  |   sinh A - sinh B = 2 cosh((A+B)/2) sinh((A-B)/2)                |
  |   cosh A + cosh B = 2 cosh((A+B)/2) cosh((A-B)/2)                |
  |   cosh A - cosh B = 2 sinh((A+B)/2) sinh((A-B)/2)                |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `2 sinh x sinh y = cosh(x+y) - cosh(x-y)` | note the sign is opposite to trig |
| `cosh A - cosh B = 2 sinh(...) sinh(...)` | no minus out front, unlike `cos A - cos B` |

> These are **low priority** for BIEAP. Learn sections 1, 4, 7 and 9 first.

---

# 7. DOUBLE ANGLE — the 2-mark engine

```
  +====================================================================+
  |                                                                    |
  |    sinh 2x  =  2 sinh x cosh x                                     |
  |                                                                    |
  |                     2 tanh x                                       |
  |    sinh 2x  =  ------------------                                  |
  |                   1 - tanh^2 x                                     |
  |                                                                    |
  |    cosh 2x  =  cosh^2 x + sinh^2 x            ... form (1)         |
  |             =  2 cosh^2 x - 1                 ... form (2)         |
  |             =  1 + 2 sinh^2 x                 ... form (3)         |
  |                                                                    |
  |                   1 + tanh^2 x                                     |
  |             =  ------------------             ... form (4)         |
  |                   1 - tanh^2 x                                     |
  |                                                                    |
  |                     2 tanh x                                       |
  |    tanh 2x  =  ------------------                                  |
  |                   1 + tanh^2 x                                     |
  |                                                                    |
  |                   1 + coth^2 x                                     |
  |    coth 2x  =  ------------------                                  |
  |                    2 coth x                                        |
  |                                                                    |
  +====================================================================+
```

## THE DECISION TABLE — this is the whole 2-mark question

| You are GIVEN | Use this form of `cosh 2x` | And for `sinh 2x` |
|---|---|---|
| `sinh x` | `1 + 2 sinh^2 x` | find `cosh x = +sqrt(1 + sinh^2 x)`, then `2 sinh x cosh x` |
| `cosh x` | `2 cosh^2 x - 1` | find `sinh x = +/-sqrt(cosh^2 x - 1)`, then `2 sinh x cosh x` |
| `tanh x` | `(1 + tanh^2 x)/(1 - tanh^2 x)` | `2 tanh x / (1 - tanh^2 x)` |
| both | `cosh^2 x + sinh^2 x` | `2 sinh x cosh x` |

**Ready-made answers (each checked with `cosh^2 2x - sinh^2 2x = 1`):**

| Given | `cosh 2x` | `sinh 2x` | Check |
|---|---|---|---|
| `sinh x = 3` | `19` | `6 sqrt10` | `361 - 360 = 1` |
| `sinh x = 5` | `51` | `10 sqrt26` | `2601 - 2600 = 1` |
| `sinh x = 3/4` | `17/8` | `15/8` | `289/64 - 225/64 = 1` |
| `cosh x = 5/2` | `23/2` | `5 sqrt21 / 2` | `529/4 - 525/4 = 1` |
| `cosh x = 5/3` | `41/9` | `40/9` | `1681/81 - 1600/81 = 1` |
| `tanh x = 1/2` | `5/3` | `4/3` | `25/9 - 16/9 = 1` |
| `tanh x = 1/4` | `17/15` | `8/15` | `289/225 - 64/225 = 1` |
| `tanh x = 3/5` | `17/8` | `15/8` | `289/64 - 225/64 = 1` |

**Verified at `x = 1`:** `2 sinh 1 cosh 1 = 3.626860 = sinh 2`;
`2 cosh^2 1 - 1 = 3.762196 = cosh 2`; `2 tanh 1/(1 + tanh^2 1) = 0.964028 = tanh 2`.

---

# 8. HALF ANGLE

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    cosh x - 1  =  2 sinh^2 (x/2)                                 |
  |    cosh x + 1  =  2 cosh^2 (x/2)                                 |
  |                                                                  |
  |                       cosh x - 1                                 |
  |    tanh^2 (x/2)  =  -------------                                |
  |                       cosh x + 1                                 |
  |                                                                  |
  |    sinh x  =  2 sinh(x/2) cosh(x/2)                              |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `tanh^2(x/2) = (cosh x - 1)/(cosh x + 1)` | **the `cosh x = sec theta` question** |
| `cosh x - 1 = 2 sinh^2(x/2)` | any half-angle rearrangement |

---

# 9. TRIPLE ANGLE

```
  +====================================================================+
  |                                                                    |
  |    sinh 3x  =  3 sinh x  +  4 sinh^3 x        <-- PLUS            |
  |                                                                    |
  |    cosh 3x  =  4 cosh^3 x  -  3 cosh x        <-- same as trig    |
  |                                                                    |
  |                  3 tanh x + tanh^3 x                               |
  |    tanh 3x  =  -----------------------                             |
  |                    1 + 3 tanh^2 x                                  |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---|---|
| `sinh 3x = 3 sinh x + 4 sinh^3 x` | 4-mark "prove that", by expanding `sinh(2x + x)` |
| `cosh 3x = 4 cosh^3 x - 3 cosh x` | 4-mark "prove that", by expanding `cosh(2x + x)` |
| Memory: same numbers 3 and 4 as trig; only `sinh` flips a sign | fast recall |

**Verified at `x = 1`:** `3(1.175201) + 4(1.623068) = 10.017876 = sinh 3`;
`4(3.674226) - 3(1.543081) = 10.067662 = cosh 3`.

---

# 10. OSBORNE'S RULE

```
  +====================================================================+
  |                                                                    |
  |   To turn ANY trigonometric identity into its hyperbolic form:     |
  |                                                                    |
  |     1.  sin -> sinh , cos -> cosh , tan -> tanh ,                  |
  |         cot -> coth , sec -> sech , cosec -> cosech                |
  |                                                                    |
  |     2.  CHANGE THE SIGN of every term containing a PRODUCT OF      |
  |         TWO SINES (whether visible or hidden).                     |
  |                                                                    |
  |   Hidden sine-pairs:  sin^2 , sin^3 , sin x sin y ,                |
  |                       tan^2 , tan x tan y , cot^2 , cot x cot y    |
  |                                                                    |
  |   sin^4 = (sin^2)^2 : TWO pairs -> flips twice -> NO change        |
  |                                                                    |
  +====================================================================+
```

| Trig identity | Becomes | Sign flipped? |
|---|---|---|
| `cos^2 + sin^2 = 1` | `cosh^2 - sinh^2 = 1` | yes |
| `sec^2 = 1 + tan^2` | `sech^2 = 1 - tanh^2` | yes |
| `cosec^2 = 1 + cot^2` | `cosech^2 = coth^2 - 1` | yes |
| `sin(x+y) = sin x cos y + cos x sin y` | same with h's | no |
| `cos(x+y) = cos x cos y - sin x sin y` | `... + sinh x sinh y` | yes |
| `tan(x+y) = (t1+t2)/(1 - t1 t2)` | `... /(1 + T1 T2)` | yes |
| `sin 2x = 2 sin x cos x` | same with h's | no |
| `cos 2x = 2cos^2 x - 1` | `cosh 2x = 2cosh^2 x - 1` | no |
| `cos 2x = 1 - 2 sin^2 x` | `cosh 2x = 1 + 2 sinh^2 x` | yes |
| `sin 3x = 3 sin x - 4 sin^3 x` | `sinh 3x = 3 sinh x + 4 sinh^3 x` | yes |
| `cos 3x = 4cos^3 x - 3 cos x` | same with h's | no |

**Does NOT transfer:** periodicity, boundedness (`|sin| <= 1`), special values,
solutions of equations. Identities only.

---

# 11. INVERSE HYPERBOLIC FUNCTIONS — DOMAIN AND RANGE

```
  +---------------+--------------------------+------------------------+
  |  FUNCTION     |  DOMAIN                  |  RANGE                 |
  +---------------+--------------------------+------------------------+
  |  sinh^-1 x    |  R                       |  R                     |
  |  cosh^-1 x    |  [ 1 , inf )             |  [ 0 , inf )           |
  |  tanh^-1 x    |  ( -1 , 1 )              |  R                     |
  |  coth^-1 x    |  (-inf,-1) U (1, inf)    |  R - {0}               |
  |  sech^-1 x    |  ( 0 , 1 ]               |  [ 0 , inf )           |
  |  cosech^-1 x  |  R - {0}                 |  R - {0}               |
  +---------------+--------------------------+------------------------+
```

| Fact | When to use |
|---|---|
| Domain of the inverse = range of the original | rebuilding the table from section 3 |
| `cosh^-1` restricted to `y >= 0` (because `cosh` is even) | explaining why we pick the `+` root |
| `cosh^-1(0.5)` not defined | "is it defined?" 2-mark question |
| `tanh^-1(2)` not defined | same |
| `sinh^-1` defined for every real number | same |

---

# 12. THE LOGARITHMIC FORMS

```
  +====================================================================+
  |                                                                    |
  |   sinh^-1 x  =  log( x + sqrt(x^2 + 1) )        all real x         |
  |                                                                    |
  |   cosh^-1 x  =  log( x + sqrt(x^2 - 1) )        x >= 1             |
  |                                                                    |
  |                  1        1 + x                                    |
  |   tanh^-1 x  =  ---  log -------                |x| < 1            |
  |                  2        1 - x                                    |
  |                                                                    |
  |                  1        x + 1                                    |
  |   coth^-1 x  =  ---  log -------                |x| > 1            |
  |                  2        x - 1                                    |
  |                                                                    |
  |                        1 + sqrt(1 - x^2)                           |
  |   sech^-1 x  =  log  --------------------       0 < x <= 1         |
  |                               x                                    |
  |                                                                    |
  |                        1 + sqrt(1 + x^2)                           |
  |  cosech^-1 x =  log  --------------------       x > 0              |
  |                               x                                    |
  |                                                                    |
  |                        1 - sqrt(1 + x^2)                           |
  |              =  log  --------------------       x < 0              |
  |                               x                                    |
  |                                                                    |
  +====================================================================+
```

| Formula | When to use |
|---|---|
| **`sinh^-1 x = log(x + sqrt(x^2+1))`** | "if `sinh x = 3` show `x = log(3+sqrt10)`" — every year |
| **`cosh^-1 x = log(x + sqrt(x^2-1))`** | same shape, given `cosh` |
| **`tanh^-1 x = (1/2)log((1+x)/(1-x))`** | given `tanh`, and 4-mark derivations |
| `coth^-1 x = (1/2)log((x+1)/(x-1))` | just `tanh^-1` with the fraction inverted |
| Sign of the root: always take `+`, reject `x - sqrt(...)` | that rejection line carries a mark |

## THE THREE-STEP DERIVATION (works for all six)

```
  STEP 1   Put y = f^-1(x) , so x = f(y) .
  STEP 2   Use the exponential definition, set t = e^y (note t > 0),
           clear the fraction -> you always get a QUADRATIC in t.
  STEP 3   Solve, REJECT the root that is not positive (or not >= 1
           for cosh^-1), take logs.

  sinh^-1 :  2x = t - 1/t  =>  t^2 - 2xt - 1 = 0  =>  t = x + sqrt(x^2+1)
  cosh^-1 :  2x = t + 1/t  =>  t^2 - 2xt + 1 = 0  =>  t = x + sqrt(x^2-1)
  tanh^-1 :  x = (e^2y - 1)/(e^2y + 1)  =>  e^2y = (1+x)/(1-x)
```

## READY-MADE VALUES (all verified)

| Expression | Value | Check |
|---|---|---|
| `sinh^-1 0` | `0` | `log(0 + 1) = 0` |
| `sinh^-1 1` | `log(1 + sqrt2) = 0.881374` | `sinh 0.881374 = 1` |
| `sinh^-1 (3/4)` | `log 2` | `sinh(log2) = (2 - 0.5)/2 = 3/4` |
| `sinh^-1 3` | `log(3 + sqrt10) = 1.818446` | `(6.162278 - 0.162278)/2 = 3` |
| `sinh^-1 5` | `log(5 + sqrt26)` | `sqrt26 = 5.099020` |
| `cosh^-1 1` | `0` | `log(1 + 0) = 0` |
| `cosh^-1 (5/4)` | `log 2` | `cosh(log2) = (2 + 0.5)/2 = 5/4` |
| `cosh^-1 2` | `log(2 + sqrt3) = 1.316958` | `cosh 1.316958 = 2` |
| `tanh^-1 0` | `0` | `(1/2)log 1 = 0` |
| `tanh^-1 (1/2)` | `(1/2) log 3 = 0.549306` | `tanh 0.549306 = 0.5` |
| `tanh^-1 (3/5)` | `(1/2) log 4 = log 2` | `tanh(log2) = (3/4)/(5/4) = 3/5` |
| `coth^-1 3` | `(1/2) log 2` | `= tanh^-1(1/3) = (1/2)log((4/3)/(2/3))` |

> **The `log 2` trio.** `sinh(log 2) = 3/4`, `cosh(log 2) = 5/4`, `tanh(log 2) = 3/5`.
> Learn this one set of numbers; it appears constantly.

---

# 13. STANDARD RESULTS WORTH QUOTING

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   (cosh x + sinh x)^n  =  cosh nx + sinh nx      (= e^(nx))      |
  |   (cosh x - sinh x)^n  =  cosh nx - sinh nx      (= e^(-nx))     |
  |                                                                  |
  |   cosh^4 x - sinh^4 x  =  cosh 2x                                |
  |   cosh^2 x + sinh^2 x  =  cosh 2x                                |
  |   cosh^2 x - sinh^2 x  =  1                                      |
  |                                                                  |
  |   sinh x . cosech x = 1 ,  cosh x . sech x = 1 ,                 |
  |   tanh x . coth x = 1                                            |
  |                                                                  |
  |   If cosh x = sec A  then  tanh^2(x/2) = tan^2(A/2)              |
  |                                                                  |
  |   If x = log(cot(pi/4 + A))  then                                |
  |          cosh x = sec 2A ,  sinh x = -tan 2A ,  tanh x = -sin 2A |
  |                                                                  |
  |   If x = log(tan(pi/4 + A/2))  then                              |
  |          cosh x = sec A ,   sinh x = tan A ,    tanh x = sin A   |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Result | When to use |
|---|---|
| `(cosh + sinh)^n = cosh nx + sinh nx` | a 2-line proof question — free marks |
| `cosh^4 - sinh^4 = cosh 2x` | classic 4-mark, factorise as `a^2 - b^2` |
| `cosh x = sec A => tanh^2(x/2) = tan^2(A/2)` | classic 4-mark, use the half-angle box |
| `x = log(cot(pi/4 + A))` results | classic 4-mark, write `e^x = cot A`, `e^-x = tan A` |

---

# 14. NUMERICAL TABLE (for checking your work)

```
   x      sinh x        cosh x        tanh x
  ---------------------------------------------
   0      0.000000      1.000000      0.000000
   0.5    0.521095      1.127626      0.462117
   1      1.175201      1.543081      0.761594
   1.5    2.129279      2.352410      0.905148
   2      3.626860      3.762196      0.964028
   3     10.017875     10.067662      0.995055

   Every row satisfies  cosh^2 - sinh^2 = 1 . Check one and see.
   Example x = 2 :  3.762196^2 - 3.626860^2 = 14.154118 - 13.154118 = 1
```

> You will not have a calculator in the board exam and you will not need one.
> This table exists so you can test any formula you are unsure about **while
> revising**.

---

# 15. WHAT THIS CHAPTER FEEDS INTO

| Later topic | Formula that reappears |
|---|---|
| Maths IB — Differentiation | `d/dx sinh x = cosh x`, `d/dx cosh x = sinh x` (**no minus**), `d/dx tanh x = sech^2 x` |
| Maths IIB — Integration | `INT dx/sqrt(x^2 + a^2) = sinh^-1(x/a) + c` |
| Maths IIB — Integration | `INT dx/sqrt(x^2 - a^2) = cosh^-1(x/a) + c` |
| Physics | catenary (hanging cable), terminal velocity `v = v_t tanh(gt/v_t)` |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +====================================================================+
  |                                                                    |
  |   1.   sinh x = (e^x - e^-x)/2                                     |
  |                                                                    |
  |   2.   cosh x = (e^x + e^-x)/2                                     |
  |                                                                    |
  |   3.   cosh x + sinh x = e^x   ,   cosh x - sinh x = e^-x          |
  |                                                                    |
  |   4.   cosh^2 x - sinh^2 x = 1              <-- THE ONE            |
  |                                                                    |
  |   5.   1 - tanh^2 x = sech^2 x                                     |
  |                                                                    |
  |   6.   coth^2 x - 1 = cosech^2 x                                   |
  |                                                                    |
  |   7.   sinh 2x = 2 sinh x cosh x                                   |
  |                                                                    |
  |   8.   cosh 2x = 1 + 2 sinh^2 x = 2 cosh^2 x - 1                   |
  |                = cosh^2 x + sinh^2 x                               |
  |                                                                    |
  |   9.   sinh(x+y) = sinh x cosh y + cosh x sinh y                   |
  |        cosh(x+y) = cosh x cosh y + sinh x sinh y   (PLUS)          |
  |                                                                    |
  |  10.   sinh 3x = 3 sinh x + 4 sinh^3 x                             |
  |        cosh 3x = 4 cosh^3 x - 3 cosh x                             |
  |                                                                    |
  |  11.   sinh^-1 x = log( x + sqrt(x^2 + 1) )                        |
  |        cosh^-1 x = log( x + sqrt(x^2 - 1) )  ,  x >= 1             |
  |                                                                    |
  |  12.   tanh^-1 x = (1/2) log( (1+x)/(1-x) )  ,  |x| < 1            |
  |                                                                    |
  +====================================================================+
```

If you can write those twelve lines, you can answer every question this chapter
has ever asked in the AP board exam.
