# Binomial Theorem — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.
Nothing here assumes you remember anything. We start from what nCr means.

---

# TOPIC 1 — What nCr means (you need this before anything else)

nCr is read as "n choose r". It counts how many ways you can pick r things
out of n things.

```
  +------------------------------------------------+
  |                                                |
  |                     n !                        |
  |     nCr   =   ----------------                 |
  |                 r ! (n - r) !                  |
  |                                                |
  +------------------------------------------------+

  where  n! = n x (n-1) x (n-2) x ... x 2 x 1   and   0! = 1
```

But you should almost never use factorials. Use the **short way**:

```
  +--------------------------------------------------------+
  |                                                        |
  |            n (n-1) (n-2) ... (r factors)               |
  |    nCr =  ----------------------------------           |
  |            r (r-1) (r-2) ... (1)                       |
  |                                                        |
  |    r numbers on top, r numbers on the bottom           |
  |                                                        |
  +--------------------------------------------------------+
```

### Worked example — compute 10C3

```
             10 x 9 x 8          720
  10C3  =  --------------  =  ---------  =  120
              3 x 2 x 1           6

  3 numbers on top starting at 10 : 10, 9, 8
  3 numbers below starting at 3   : 3, 2, 1
```

### Worked example — compute 12C8 the SMART way

Doing 8 factors on top is slow. Use nCr = nC(n-r) first:

```
  12C8  =  12C(12-8)  =  12C4

             12 x 11 x 10 x 9        11880
        =  --------------------  =  --------  =  495
              4 x 3 x 2 x 1            24
```

**Numbers to just know:**

| nCr | Value | nCr | Value |
|-----|-------|-----|-------|
| nC0 | 1 | nCn | 1 |
| nC1 | n | nC(n-1) | n |
| 8C4 | 70 | 9C4 = 9C5 | 126 |
| 10C5 | 252 | 11C5 = 11C6 | 462 |
| 12C6 | 924 | 13C3 | 286 |
| 14C7 | 3432 | 15C7 = 15C8 | 6435 |

> **TRAP:** nC0 = 1, not 0. And nCr is only defined when r is a whole number
> with 0 <= r <= n. There is no such thing as 5C7 or 5C(-1).

---

# TOPIC 2 — Pascal's triangle

Before formulas existed, people found the coefficients from a triangle.
Start with 1. Each new number is the **sum of the two numbers above it**.

```
   n = 0                         1
   n = 1                      1     1
   n = 2                   1     2     1
   n = 3                1     3     3     1
   n = 4             1     4     6     4     1
   n = 5          1     5    10    10     5     1
   n = 6       1     6    15    20    15     6     1
   n = 7    1     7    21    35    35    21     7     1
   n = 8  1    8    28    56    70    56    28     8     1
```

How 20 appeared in row 6:

```
          row 5 :   ...   10      10   ...
                            \      /
                             \    /
          row 6 :   ...        20      ...      because 10 + 10 = 20
```

**What each row tells you:**

| Fact | Example (row 4: 1 4 6 4 1) |
|------|----------------------------|
| Row n = coefficients of (a + x)^n | (a+x)^4 = a^4 + 4a^3x + 6a^2x^2 + 4ax^3 + x^4 |
| Row n has n + 1 numbers | row 4 has 5 numbers |
| Row n adds up to 2^n | 1+4+6+4+1 = 16 = 2^4 |
| Row reads the same backwards | 1 4 6 4 1 — a palindrome |
| The r-th entry (starting at r = 0) is nCr | 4C2 = 6 |

The "sum of two above" rule IS a formula you must be able to write:

```
  +------------------------------------------+
  |                                          |
  |    nC(r-1)  +  nCr   =   (n+1)Cr         |    <- Pascal's rule
  |                                          |
  +------------------------------------------+

  Check with numbers:   6C2 + 6C3 = 15 + 20 = 35 = 7C3   YES
```

> **TRAP:** Pascal's triangle is fine up to n = 8 or so. Beyond that it is far
> too slow in an exam. Use the general term formula instead.

---

# TOPIC 3 — The Binomial Theorem for a positive integral index

For any positive whole number n:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  (a + x)^n  =  nC0 a^n                                              |
  |             +  nC1 a^(n-1) x                                        |
  |             +  nC2 a^(n-2) x^2                                      |
  |             +  ...                                                  |
  |             +  nCr a^(n-r) x^r                                      |
  |             +  ...                                                  |
  |             +  nCn x^n                                              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Read the pattern:**

```
  power of a  :  n , n-1 , n-2 , ... , 1 , 0      <- goes DOWN
  power of x  :  0 ,  1  ,  2  , ... ,n-1, n      <- goes UP
  coefficients:  nC0, nC1, nC2, ... , nC(n-1), nCn

  IN EVERY SINGLE TERM :   (power of a) + (power of x)  =  n
```

That last line is your free error-check. If the powers in a term do not add to
n, you have made a mistake.

**Number of terms = n + 1.** Always one more than the index.

### Worked example 1 — expand (2x + 3y)^4

Here a = 2x, x-slot = 3y, n = 4. Row 4 of Pascal is 1, 4, 6, 4, 1.

```
  (2x + 3y)^4
   = 1 (2x)^4
   + 4 (2x)^3 (3y)
   + 6 (2x)^2 (3y)^2
   + 4 (2x)   (3y)^3
   + 1        (3y)^4

  Now open each bracket carefully:

   1 (16x^4)                    =   16 x^4
   4 (8x^3)(3y)     = 4 x 24    =   96 x^3 y
   6 (4x^2)(9y^2)   = 6 x 36    =  216 x^2 y^2
   4 (2x)(27y^3)    = 4 x 54    =  216 x y^3
   1 (81y^4)                    =   81 y^4

  ANSWER:  16x^4 + 96x^3 y + 216x^2 y^2 + 216x y^3 + 81y^4
```

Check: every term has powers adding to 4. Good.

### Worked example 2 — expand (x - 2)^5

A minus sign is handled by writing it as **+ (-2)**.

```
  (x + (-2))^5 ,  row 5 = 1, 5, 10, 10, 5, 1

   1 x^5
   5 x^4 (-2)      =  -10 x^4
  10 x^3 (-2)^2    =  10 x 4   =  40 x^3
  10 x^2 (-2)^3    =  10 x(-8) = -80 x^2
   5 x   (-2)^4    =  5 x 16   =  80 x
   1     (-2)^5    =            -32

  ANSWER:  x^5 - 10x^4 + 40x^3 - 80x^2 + 80x - 32
```

> **TRAP:** With a minus sign, the signs of the terms go
> **+ , - , + , - , + , -** . If two of your signs in a row are the same,
> you have dropped a bracket somewhere.

---

# TOPIC 4 — THE GENERAL TERM (the heart of the chapter)

You almost never need the whole expansion. You need ONE term. This formula
gives it to you instantly.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   In the expansion of  (a + x)^n :                               |
  |                                                                  |
  |          T(r + 1)  =  nCr  a^(n - r)  x^r                        |
  |                                                                  |
  |   r = 0  ->  T1   (first term)                                   |
  |   r = 1  ->  T2                                                  |
  |   r = 5  ->  T6                                                  |
  |   r = n  ->  T(n+1)  (last term)                                 |
  |                                                                  |
  +------------------------------------------------------------------+

  GOLDEN RULE :   r  =  (term number)  -  1
```

**Why "r + 1"?** Because r starts at 0, not 1. The first term uses r = 0.
This single fact costs students more marks than anything else in the chapter.

### Worked example 1 — find the 4th term of (2a + 3b)^6

```
  Term number = 4   ->   r = 4 - 1 = 3
  n = 6 ,  first part = 2a ,  second part = 3b

  T4  =  6C3 (2a)^(6-3) (3b)^3
      =  20 (2a)^3 (3b)^3
      =  20 (8a^3)(27b^3)
      =  20 x 216 a^3 b^3
      =  4320 a^3 b^3
```

### Worked example 2 — find the 7th term of (1 - x/2)^10

```
  r = 7 - 1 = 6 ,  n = 10 ,  a = 1 ,  second part = (-x/2)

  T7  =  10C6 (1)^4 (-x/2)^6

  10C6 = 10C4 = (10 x 9 x 8 x 7)/(4 x 3 x 2 x 1) = 5040/24 = 210

  (-x/2)^6 = + x^6 / 64          (even power, so the sign is PLUS)

              210 x^6         105 x^6
  T7   =   ------------  =  -----------
                64               32
```

### Worked example 3 — write the general term of (2x + 3y)^12

Some questions ask only for the general term. Do not expand anything.

```
  T(r+1)  =  12Cr (2x)^(12-r) (3y)^r
          =  12Cr  2^(12-r)  3^r  x^(12-r)  y^r
```

> **TRAP:** The word "term" and the word "coefficient" are different.
> The 4th TERM of (2a+3b)^6 is 4320 a^3 b^3.
> Its COEFFICIENT is 4320. Read the question.

---

# TOPIC 5 — Number of terms, and sum of the coefficients

```
  +--------------------------------------------------------------+
  |                                                              |
  |  Number of terms in (a + x)^n                =  n + 1        |
  |                                                              |
  |  Number of terms in (a + b + c)^n            =  (n+1)(n+2)/2 |
  |                                                              |
  |  Sum of ALL coefficients : put every variable = 1            |
  |                                                              |
  +--------------------------------------------------------------+
```

### Worked example 1

Find the number of terms in (2x + 3y + z)^7.

```
  Three parts, so use (n+1)(n+2)/2  with n = 7:

      (8)(9)
     --------  =  36 terms
        2
```

### Worked example 2

Find the sum of the coefficients in the expansion of (3x - 4y)^7.

```
  Put x = 1 and y = 1 :

     (3 - 4)^7  =  (-1)^7  =  -1
```

### Worked example 3

Find the sum of the coefficients in (1 + x - 3x^2)^2143.

```
  Put x = 1 :

     (1 + 1 - 3)^2143  =  (-1)^2143  =  -1
```

Two more that examiners love:

```
  In  (1 + x)^n :

     C0 + C1 + C2 + ... + Cn          =  2^n         (put x = 1)

     C0 - C1 + C2 - C3 + ...          =  0           (put x = -1)

     C0 + C2 + C4 + ...  (even ones)  =  2^(n-1)
     C1 + C3 + C5 + ...  (odd ones)   =  2^(n-1)

     ODD-PLACE SUM  =  EVEN-PLACE SUM  =  half of 2^n
```

**Why the last one works** (this two-line proof is a 2-mark answer):

```
  Adding the two results above:   2(C0 + C2 + C4 + ...) = 2^n
                                   so C0 + C2 + ... = 2^(n-1)
  and the rest must also be 2^(n-1) because the whole lot is 2^n.
```

---

# TOPIC 6 — The MIDDLE term

The expansion has n + 1 terms. Whether there is one middle term or two
depends on whether that count is odd or even.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   n is EVEN  ->  n+1 is odd  ->  ONE middle term                   |
  |                                                                    |
  |          the  (n/2 + 1)-th term    i.e.  use  r = n/2              |
  |                                                                    |
  |   n is ODD   ->  n+1 is even ->  TWO middle terms                  |
  |                                                                    |
  |          the  ((n+1)/2)-th  and  ((n+3)/2)-th terms                |
  |          i.e.  use  r = (n-1)/2   and   r = (n+1)/2                |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Quick picture for n = 6 (7 terms) and n = 7 (8 terms):

```
  n = 6 :   T1  T2  T3  [T4]  T5  T6  T7        one middle term, T4
                         ^^^
  n = 7 :   T1  T2  T3  [T4  T5]  T6  T7  T8    two middle terms, T4 and T5
                         ^^^^^^
```

### Worked example 1 — middle term of (3 + x/2)^8

```
  n = 8, EVEN.  One middle term:  r = 8/2 = 4,  so it is T5.

  T5  =  8C4 (3)^(8-4) (x/2)^4
      =  70 x 81 x (x^4 / 16)

                5670 x^4        2835 x^4
      =      ------------  =  ------------
                   16               8
```

### Worked example 2 — middle terms of (3x - x^3/6)^9

```
  n = 9, ODD.  Two middle terms: r = 4 (giving T5) and r = 5 (giving T6).

  T5  =  9C4 (3x)^5 (-x^3/6)^4

         9C4 = 126
         (3x)^5 = 243 x^5
         (-x^3/6)^4 = + x^12 / 1296        (even power -> plus)

              126 x 243 x^17          30618 x^17
         =  ------------------  =  ---------------
                  1296                   1296

         Divide top and bottom by 162:

              189 x^17
         =  ------------
                  8

  T6  =  9C5 (3x)^4 (-x^3/6)^5

         9C5 = 126
         (3x)^4 = 81 x^4
         (-x^3/6)^5 = - x^15 / 7776       (odd power -> minus)

               126 x 81 x^19            10206 x^19
         =  - ----------------  =  -  -------------
                   7776                    7776

         Divide top and bottom by 486:

                21 x^19
         =  -  ----------
                   16
```

> **TRAP:** For odd n students write only ONE middle term and lose half the
> marks. If n is odd there are ALWAYS two. Write both.

---

# TOPIC 7 — Coefficient of a particular power of x

This is where the general term earns its keep. The recipe never changes.

```
  RECIPE
  1. Write T(r+1) using the general term.
  2. Collect ALL the x's into a single power of x.
  3. Set that power equal to the power you were asked for.
  4. Solve for r  (it must be a whole number between 0 and n).
  5. Put that r back to get the coefficient.
```

### Worked example 1 — coefficient of x^7 in (2x^2 + 1/x)^11

```
  STEP 1
     T(r+1) = 11Cr (2x^2)^(11-r) (1/x)^r

  STEP 2   collect the x's
     (x^2)^(11-r) = x^(22-2r)          and       (1/x)^r = x^(-r)

     T(r+1) = 11Cr x 2^(11-r) x x^(22 - 2r - r)
            = 11Cr x 2^(11-r) x x^(22 - 3r)

  STEP 3   we want x^7
     22 - 3r = 7

  STEP 4
     3r = 15   ->   r = 5      (whole number, and 0 <= 5 <= 11, so it is valid)

  STEP 5
     coefficient = 11C5 x 2^(11-5) = 462 x 2^6 = 462 x 64 = 29568
```

### Worked example 2 — coefficient of x^(-17) in (x^4 - 1/x^3)^15

```
  T(r+1) = 15Cr (x^4)^(15-r) (-1/x^3)^r
         = 15Cr (-1)^r x^(60 - 4r) x x^(-3r)
         = 15Cr (-1)^r x^(60 - 7r)

  Set  60 - 7r = -17   ->   7r = 77   ->   r = 11

  coefficient = 15C11 (-1)^11 = 15C4 x (-1) = 1365 x (-1) = -1365
```

> **TRAP:** If solving gives r = 7.5 or r = -2, then **that power of x does not
> appear at all**, and the coefficient is 0. Write that as your answer — it is
> a correct and complete answer, not a mistake.

---

# TOPIC 8 — The term independent of x (the constant term)

Exactly the same as Topic 7, with the target power set to **zero**.
"Independent of x" just means "no x in it".

### Worked example 1 — term independent of x in (2x^2 + 1/x)^12

```
  T(r+1) = 12Cr (2x^2)^(12-r) (1/x)^r
         = 12Cr 2^(12-r) x^(24 - 2r - r)
         = 12Cr 2^(12-r) x^(24 - 3r)

  Set  24 - 3r = 0   ->   r = 8      so it is the 9th term

  T9 = 12C8 x 2^(12-8) = 495 x 2^4 = 495 x 16 = 7920
```

### Worked example 2 — term independent of x in (3x^2/2 - 1/(3x))^9

```
  T(r+1) = 9Cr (3x^2/2)^(9-r) (-1/(3x))^r

  Power of x :  2(9 - r) - r  =  18 - 3r
  Set 18 - 3r = 0   ->   r = 6      so it is the 7th term

  T7 = 9C6 (3/2)^3 (-1/3)^6

       9C6 = 9C3 = 84
       (3/2)^3 = 27/8
       (-1/3)^6 = + 1/729

              84 x 27          2268
  T7  =   --------------  =  ---------
             8 x 729           5832

       Divide top and bottom by 324:

              7
       =  --------
             18
```

### Worked example 3 — constant term of (x - 1/x)^14

```
  T(r+1) = 14Cr x^(14-r) (-1/x)^r = 14Cr (-1)^r x^(14 - 2r)

  14 - 2r = 0   ->   r = 7

  T8 = 14C7 (-1)^7 = 3432 x (-1) = -3432
```

> **TRAP:** "Term independent of x" asks for the TERM (a number). Do not leave
> the answer as "r = 7". Compute the number.

---

# TOPIC 9 — Ratio of consecutive terms

Divide one term by the one before it. Almost everything cancels.

```
  +---------------------------------------------------------------+
  |                                                               |
  |     T(r+1)        n - r + 1        x                          |
  |    --------   =   ----------   x  ---                         |
  |      T(r)              r           a                          |
  |                                                               |
  |     for the expansion of  (a + x)^n                           |
  |                                                               |
  +---------------------------------------------------------------+

  It comes from   nCr / nC(r-1)  =  (n - r + 1) / r
```

Check that coefficient ratio with numbers:

```
   7C3 / 7C2  =  35 / 21  =  5/3       and   (n - r + 1)/r = (7-3+1)/3 = 5/3  YES
```

This one line is the engine behind the numerically greatest term, and behind
every "coefficients are in AP / GP" question.

---

# TOPIC 10 — The NUMERICALLY GREATEST term (a 7-mark question)

"Numerically greatest" means largest **ignoring the minus sign**.

```
  THE FIXED RECIPE

  STEP 1  Force the expression into the shape  a^n (1 + y)^n
          by taking a^n outside.
  STEP 2  Put in the given value of x and find |y|.
  STEP 3  Compute
                       (n + 1) |y|
              k   =   -------------
                        1  +  |y|
  STEP 4  If k is NOT a whole number:
              the greatest term is  T(m + 1)  where m = the whole-number
              part of k  (just chop off the decimals).
          If k IS a whole number:
              T(k) and T(k+1) are EQUAL and both are greatest.
  STEP 5  Compute that term and put the a^n back.
```

### Worked example 1 — the whole-number case

Find the numerically greatest term in (1 + 4x)^8 when x = 1/2.

```
  STEP 1-2   y = 4x = 4(1/2) = 2 ,  so |y| = 2 ,  n = 8

  STEP 3
              (8 + 1)(2)        18
       k  =  -------------  =  ----  =  6      <- a whole number
                1 + 2            3

  STEP 4   So T6 and T7 are equal and both are the greatest.

  STEP 5
       T6 = 8C5 (2)^5 = 56 x 32 = 1792
       T7 = 8C6 (2)^6 = 28 x 64 = 1792        (equal, as promised)

  ANSWER: T6 = T7 = 1792
```

### Worked example 2 — the standard board question

Find the numerically greatest term in (4 + 3x)^15 when x = 7/2.

```
  STEP 1   Take 4 outside:

       (4 + 3x)^15  =  4^15 (1 + 3x/4)^15

  STEP 2   Put x = 7/2 :

               3      7        21
       y  =  ----- x ---  =  ------          |y| = 21/8
               4      2         8

  STEP 3
              (15 + 1)(21/8)         42          42 x 8       336
       k  =  -----------------  =  --------  =  --------  =  ------  =  11.58...
                1 + (21/8)          29/8           29          29

  STEP 4   Not a whole number. Whole-number part is 11.
           So the greatest term is  T(11 + 1)  =  T12.

  STEP 5
       T12 = 4^15 x 15C11 x (21/8)^11

             15C11 = 15C4 = 1365

             4^15 = (2^2)^15 = 2^30       and     8^11 = (2^3)^11 = 2^33

                        2^30            1
             so   ------------- x  =  -----
                        2^33            2^3

                     1365 x 21^11
       T12  =    --------------------
                          8

  ANSWER: the 12th term, equal to (1365 x 21^11)/8
```

> **TRAP:** You must divide by (1 + |y|), NOT by |y|. And you must take a^n
> out FIRST, otherwise the formula gives the wrong r.

---

# TOPIC 11 — The GREATEST COEFFICIENT

Different question. Here x is not given at all — you only look at the nCr's.
Since Pascal's rows go up and then down, the biggest coefficient is in the middle.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   In  (1 + x)^n :                                                |
  |                                                                  |
  |   n EVEN  ->  greatest coefficient  =  nC(n/2)                   |
  |                                                                  |
  |   n ODD   ->  TWO equal greatest coefficients                    |
  |                     nC((n-1)/2)   =   nC((n+1)/2)                |
  |                                                                  |
  +------------------------------------------------------------------+
```

### Worked examples

```
  (1 + x)^10 :  n even, greatest coefficient = 10C5 = 252

  (1 + x)^15 :  n odd,  greatest coefficients = 15C7 = 15C8 = 6435

  (1 + x)^19 :  n odd,  greatest coefficients = 19C9 = 19C10 = 92378
```

> **TRAP:** "Greatest coefficient" and "numerically greatest term" are two
> different questions. The greatest coefficient never depends on x.

---

# TOPIC 12 — Properties of the binomial coefficients

Write C0, C1, C2, ... for nC0, nC1, nC2, ... . Board proofs use this shorthand.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  1.  nCr  =  nC(n - r)                                           |
  |                                                                  |
  |  2.  nC(r-1) + nCr  =  (n+1)Cr                    (Pascal)       |
  |                                                                  |
  |  3.  If nCr = nCs  then  r = s   OR   r + s = n                  |
  |                                                                  |
  |       nCr        n - r + 1                                       |
  |  4.  ------  =  -----------                                      |
  |      nC(r-1)          r                                          |
  |                                                                  |
  |  5.  r x nCr  =  n x (n-1)C(r-1)                                 |
  |                                                                  |
  |        nCr          (n+1)C(r+1)                                  |
  |  6.  -------  =    -------------                                 |
  |       r + 1            n + 1                                     |
  |                                                                  |
  +------------------------------------------------------------------+
```

### Worked example 1 — using property 3

If 21Cr = 21C(r+5), find r.

```
  Either  r = r + 5  (impossible)
  or      r + (r + 5) = 21
          2r = 16
          r  = 8            CHECK: 21C8 = 21C13 and r+5 = 13   YES
```

### Worked example 2 — using property 1

If nC5 = nC6, find n.

```
  5 + 6 = n   ->   n = 11
```

### Worked example 3 — a ratio question

If 2nC3 : nC3 = 11 : 1, find n.

```
       2n(2n-1)(2n-2)/6           11
     -----------------------  =  ----
        n(n-1)(n-2)/6              1

       2n(2n-1)(2n-2)  =  11 n(n-1)(n-2)

       2n(2n-1) x 2(n-1)  =  11 n(n-1)(n-2)

       4(2n - 1)  =  11(n - 2)         (cancel n and (n-1))

       8n - 4  =  11n - 22

       18  =  3n     ->    n = 6

  CHECK:  12C3 = 220 ,  6C3 = 20 ,  and 220/20 = 11    YES
```

---

# TOPIC 13 — Coefficients in AP (a favourite 4-mark question)

Three things p, q, s are in AP when **2q = p + s**.

### Worked example 1

If the coefficients of the 2nd, 3rd and 4th terms of (1 + x)^n are in AP,
find n.

```
  Coefficients are  nC1 , nC2 , nC3.

     2 x nC2  =  nC1 + nC3

           n(n-1)                n(n-1)(n-2)
     2 x  --------  =   n   +   -------------
              2                       6

     Divide every term by n  (n is not zero):

                                (n-1)(n-2)
        n - 1     =    1   +   ------------
                                     6

     Multiply by 6:

        6n - 6  =  6 + (n-1)(n-2)
        6n - 6  =  6 + n^2 - 3n + 2
        6n - 6  =  n^2 - 3n + 8
             0  =  n^2 - 9n + 14
             0  =  (n - 7)(n - 2)

        n = 7  or  n = 2

     n = 2 is rejected: (1+x)^2 has only 3 terms, so there is no 4th term.

  ANSWER: n = 7
```

### Worked example 2 — and a shortcut worth memorising

If the coefficients of the 9th, 10th and 11th terms of (1 + x)^n are in AP,
find n.

```
  Those coefficients are  nC8 , nC9 , nC10.

  SHORTCUT: whenever  nC(r-1) , nCr , nC(r+1)  are in AP,

       +--------------------------+
       |    (n - 2r)^2  =  n + 2  |
       +--------------------------+

  Here r = 9 :

       (n - 18)^2  =  n + 2
       n^2 - 36n + 324  =  n + 2
       n^2 - 37n + 322  =  0

       discriminant = 37^2 - 4(322) = 1369 - 1288 = 81 ,  square root 9

              37 +/- 9
       n  =  ----------   =   23   or   14
                  2

  CHECK n = 14 :  14C8 = 3003 , 14C9 = 2002 , 14C10 = 1001
                  2(2002) = 4004  and  3003 + 1001 = 4004    YES

  ANSWER: n = 14 or n = 23
```

---

# TOPIC 14 — Series made of binomial coefficients

These are the "prove that" 7-mark questions. Learn the five standard results
and the trick behind each.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  (i)    C0 + C1 + C2 + ... + Cn   =  2^n            (put x = 1)    |
  |                                                                    |
  |  (ii)   C0 - C1 + C2 - ... = 0                      (put x = -1)   |
  |                                                                    |
  |  (iii)  C1 + 2C2 + 3C3 + ... + n Cn  =  n 2^(n-1)                  |
  |                                                                    |
  |                C1     C2           Cn        2^(n+1) - 1           |
  |  (iv)   C0 +  ---- + ---- + ... + ------  =  -------------         |
  |                 2      3           n+1           n + 1             |
  |                                                                    |
  |  (v)    C0^2 + C1^2 + C2^2 + ... + Cn^2  =  (2n)Cn                 |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### Worked proof of (iii)

```
  Use  r Cr = n x (n-1)C(r-1) :

  C1 + 2C2 + ... + nCn
     = sum over r = 1 to n of  r x nCr
     = sum over r = 1 to n of  n x (n-1)C(r-1)
     = n [ (n-1)C0 + (n-1)C1 + ... + (n-1)C(n-1) ]
     = n x 2^(n-1)                     (by result (i) applied to n-1)
```

### Worked proof of (v)

```
  (1 + x)^n (1 + x)^n  =  (1 + x)^(2n)

  On the LEFT, write the first bracket forwards and the second BACKWARDS
  (allowed because Cr = C(n-r)) and pick out the coefficient of x^n:

       C0 C0 + C1 C1 + C2 C2 + ... + Cn Cn   =   C0^2 + C1^2 + ... + Cn^2

  On the RIGHT the coefficient of x^n in (1 + x)^(2n) is  (2n)Cn.

  Both sides are the coefficient of the same power, so they are equal.
```

### Worked example — a ratio series

Prove that C1/C0 + 2C2/C1 + 3C3/C2 + ... + nCn/C(n-1) = n(n+1)/2.

```
  The general piece is

       r Cr           n - r + 1
      -------  =  r x -----------  =  n - r + 1
      C(r-1)               r

  So the sum is   (n) + (n-1) + (n-2) + ... + 1

                    n(n + 1)
              =   -----------
                       2
```

---

# TOPIC 15 — Divisibility and remainder problems

The whole trick: **split the number so that one part is the divisor.**

```
  IDEA:   (D + 1)^n  =  D x (something)  +  1

          because every term except the last contains D.

          (D - 1)^n  =  D x (something)  +  (-1)^n
```

### Worked example 1 — show that 2^(4n) - 1 is divisible by 15

```
  2^(4n)  =  (2^4)^n  =  16^n  =  (15 + 1)^n

  (15 + 1)^n  =  nC0 15^n + nC1 15^(n-1) + ... + nC(n-1) 15 + 1
              =  15 K + 1          where K is a whole number

  So  2^(4n) - 1  =  15K ,  which is divisible by 15.
```

### Worked example 2 — show that 49^n + 16n - 1 is divisible by 64

```
  49^n = (1 + 48)^n
       = 1 + nC1(48) + nC2(48)^2 + nC3(48)^3 + ...
       = 1 + 48n + [ nC2 (48)^2 + nC3 (48)^3 + ... ]

  Every bracketed term has 48^2 = 2304 = 64 x 36 in it, so the bracket is 64M.

  49^n + 16n - 1  =  (1 + 48n + 64M) + 16n - 1
                  =  64n + 64M
                  =  64 (n + M)          divisible by 64.
```

### Worked example 3 — find the remainder when 7^103 is divided by 25

```
  7^103  =  7 x 7^102  =  7 x (7^2)^51  =  7 x 49^51  =  7 x (50 - 1)^51

  (50 - 1)^51  =  50 K + (-1)^51  =  50K - 1

  So  7^103  =  7(50K - 1)  =  350K - 7

  350K is a multiple of 25.  We need a POSITIVE remainder, so write

       - 7  =  - 25 + 18

  ANSWER: remainder = 18
```

### Worked example 4 — last digit of 7^100

```
  7^100 = (7^2)^50 = 49^50 = (50 - 1)^50 = 50K + 1

  A multiple of 50 ends in 0, so 7^100 ends in 1.   Last digit = 1
```

> **TRAP:** A remainder must be between 0 and (divisor - 1). If your working
> gives -7, add the divisor to make it positive.

---

# TOPIC 16 — Binomial theorem for a RATIONAL or NEGATIVE index

Up to now n had to be a positive whole number. Now n can be anything —
a fraction, a negative number, whatever.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  For ANY rational n , and ONLY when  |x| < 1 :                     |
  |                                                                   |
  |                     n(n-1)        n(n-1)(n-2)                     |
  |  (1 + x)^n = 1 + nx + -------x^2 + -------------x^3 + ...          |
  |                        2 !              3 !                       |
  |                                                                   |
  |  GENERAL TERM:                                                    |
  |                                                                   |
  |               n(n-1)(n-2)...(n - r + 1)                           |
  |   T(r+1)  =  --------------------------- x^r                      |
  |                        r !                                        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Four differences from the positive-integer case — memorise this table:**

| | Positive whole n | Rational / negative n |
|---|---|---|
| Number of terms | exactly n + 1 | **infinite** |
| Coefficients | nCr | fractions, no nCr |
| Needs a condition on x? | no | **yes, must have \|x\| < 1** |
| Must start with 1? | no | **yes, the bracket must be (1 + something)** |

**The four small expansions you MUST know by heart:**

```
  +--------------------------------------------------------------+
  |                                                              |
  |  (1 - x)^(-1)  =  1 + x + x^2 + x^3 + x^4 + ...              |
  |                   general term :  x^r                        |
  |                                                              |
  |  (1 + x)^(-1)  =  1 - x + x^2 - x^3 + x^4 - ...              |
  |                   general term :  (-1)^r x^r                 |
  |                                                              |
  |  (1 - x)^(-2)  =  1 + 2x + 3x^2 + 4x^3 + ...                 |
  |                   general term :  (r + 1) x^r                |
  |                                                              |
  |  (1 + x)^(-2)  =  1 - 2x + 3x^2 - 4x^3 + ...                 |
  |                   general term :  (-1)^r (r + 1) x^r         |
  |                                                              |
  |               all valid only for  |x| < 1                    |
  +--------------------------------------------------------------+
```

Two more that appear in EAPCET (n a positive whole number, |x| < 1):

```
  (1 - x)^(-n)  :   general term  =  (n + r - 1)Cr  x^r

  (1 + x)^(-n)  :   general term  =  (-1)^r (n + r - 1)Cr  x^r

  Check with n = 2 :  (2 + r - 1)Cr = (r+1)Cr = r + 1 ,
  which matches  (1 - x)^(-2) = 1 + 2x + 3x^2 + ...    YES
```

### Worked example 1 — first three terms of (1 + x/2)^(-5)

```
  Here n = -5 and the "x" of the formula is (x/2).

  term 1 :  1

  term 2 :  n (x/2) = -5 (x/2) = -5x/2

  term 3 :  [ n(n-1)/2! ] (x/2)^2
            = [ (-5)(-6)/2 ] (x^2/4)
            = 15 x (x^2/4)
            = 15x^2 / 4

  ANSWER:  1 - 5x/2 + 15x^2/4 - ...       valid for |x/2| < 1, i.e. |x| < 2
```

### Worked example 2 — first three terms of (1 - 2x)^(-3/4)

```
  n = -3/4 ,  the "x" of the formula is (-2x).

  term 1 : 1

  term 2 : (-3/4)(-2x)  =  3x/2

  term 3 : [ n(n-1)/2! ] (-2x)^2
           n - 1 = -3/4 - 1 = -7/4

           = [ (-3/4)(-7/4) / 2 ] (4x^2)

               21/16                 21
           = --------- x 4x^2  =  ------- x 4x^2
                 2                   32

               84 x^2         21 x^2
           =  ---------  =  ----------
                  32              8

  ANSWER:  1 + 3x/2 + 21x^2/8 + ...        valid for |2x| < 1, i.e. |x| < 1/2
```

### Worked example 3 — coefficient of x^3 in (1 - 2x)^(-1/2)

```
  First expand (1 - y)^(-1/2) :

                  1        1 x 3          1 x 3 x 5
     = 1  +  ---- y  +  ---------- y^2 + ------------- y^3 + ...
                  2        2 x 4          2 x 4 x 6

     = 1 + y/2 + 3y^2/8 + 5y^3/16 + ...

  Now put y = 2x :

     term in x^3  =  (5/16)(2x)^3 = (5/16)(8x^3) = 5x^3/2

  ANSWER: coefficient of x^3 is 5/2
```

> **TRAP:** If the bracket does not start with 1, you MUST force it to.
> (3 + 2x)^(-2) is NOT ready. Write it as
> 3^(-2) (1 + 2x/3)^(-2) , and the condition becomes |2x/3| < 1, i.e. |x| < 3/2.

---

# TOPIC 17 — Approximations

For a **very small** x, the terms x^2, x^3, ... are tiny, so throw them away.

```
  +--------------------------------------------------+
  |                                                  |
  |   (1 + x)^n  is about  1 + nx      for small x   |
  |                                                  |
  |   keep one more term for better accuracy :       |
  |                                                  |
  |                       n(n-1)                     |
  |   (1 + x)^n  =  1 + nx + ------ x^2              |
  |                          2                       |
  |                                                  |
  +--------------------------------------------------+
```

### Worked example 1 — approximate the 6th root of 63

```
  63 = 64 - 1 = 64 (1 - 1/64)

  63^(1/6)  =  64^(1/6) x (1 - 1/64)^(1/6)
            =  2 x (1 - 1/64)^(1/6)              since 2^6 = 64

  Now  (1 - 1/64)^(1/6)  is about  1 + (1/6)(-1/64)  =  1 - 1/384

            = 2 (1 - 1/384)
            = 2 - 2/384
            = 2 - 0.0052
            = 1.9948

  ANSWER: about 1.9948
```

### Worked example 2 — approximate the cube root of 1002

```
  1002 = 1000 (1 + 0.002)

  1002^(1/3) = 10 (1 + 0.002)^(1/3)
             = 10 (1 + (1/3)(0.002))
             = 10 (1 + 0.000667)
             = 10.00667
```

### Worked example 3 — approximate (1.02)^(-3)

```
  n = -3 , x = 0.02

  = 1 + (-3)(0.02) + [(-3)(-4)/2](0.02)^2
  = 1 - 0.06 + 6(0.0004)
  = 1 - 0.06 + 0.0024
  = 0.9424
```

---

# TOPIC 18 — Sum of an infinite series (the classic 7-mark question)

This looks terrifying and is actually the most mechanical question in the paper.

The AP textbook form you compare against is:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                 p        p(p + q)          p(p+q)(p+2q)          |
  |  (1 - z)^(-p/q) = 1 + ---z + ------------z^2 + --------------z^3 |
  |                 q       2! q^2               3! q^3              |
  |                                                                  |
  +------------------------------------------------------------------+

  Look at the shape:
     TOP    :  p , then p(p+q) , then p(p+q)(p+2q) , ...   (goes up by q)
     BOTTOM :  q , then 2! q^2 , then 3! q^3 , ...
```

**The mechanical recipe:**

```
  RECIPE

  STEP 1  Make sure the series starts with 1. If it does not, add 1 and
          subtract it later.
  STEP 2  Call the term after the 1 by the name A.
          Call the next term B.
  STEP 3  Compute
                 B                q                 2B
              ------  ,  then    ---  =   -------  -  1
                A^2               p                 A^2

          then flip it to get  p/q.
  STEP 4  Find  z  from     z  =  A  /  (p/q)
  STEP 5  The sum is   (1 - z)^(-p/q).
  STEP 6  Answer whatever the question actually asked.
```

### Worked example 1 — the most-repeated board question

If x = 1/5 + (1x3)/(5x10) + (1x3x5)/(5x10x15) + ... , find 3x^2 + 6x.

```
  STEP 1   Add a 1 in front:

     1 + x  =  1 + 1/5 + 3/50 + 15/750 + ...
            =  1 + 1/5 + 3/50 + 1/50 + ...

  STEP 2   A = 1/5 ,   B = 3/50

  STEP 3
           B        3/50        3      25       3
         ----  =  --------  =  ---- x ----  =  ---
          A^2      (1/25)       50      1       2

           q        2 x (3/2)
          ---  =   ------------ - 1  =  3 - 1  =  2
           p            1

     so  q/p = 2 ,  which means  p/q = 1/2

  STEP 4
           z  =  A / (p/q)  =  (1/5) / (1/2)  =  2/5

  STEP 5
           1 + x  =  (1 - 2/5)^(-1/2)  =  (3/5)^(-1/2)  =  (5/3)^(1/2)

  STEP 6   Square both sides:

           (1 + x)^2  =  5/3
           1 + 2x + x^2  =  5/3

           Multiply by 3:

           3 + 6x + 3x^2  =  5

           3x^2 + 6x  =  2
```

### Worked example 2 — a pure "find the sum" version

Find the sum of  1 + 1/3 + (1x3)/(3x6) + (1x3x5)/(3x6x9) + ...

```
  A = 1/3 ,  B = 3/18 = 1/6

     B        1/6
   ----  =  -------  =  9/6  =  3/2
    A^2      1/9

   q/p  =  2(3/2) - 1  =  2      ->    p/q = 1/2

   z    =  (1/3) / (1/2)  =  2/3

   SUM  =  (1 - 2/3)^(-1/2)  =  (1/3)^(-1/2)  =  3^(1/2)  =  square root of 3
```

### Worked example 3 — series that does NOT start with 1

Find the sum of  3/4 + (3x5)/(4x8) + (3x5x7)/(4x8x12) + ...

```
  Call the sum x. Add 1 to the front:

    1 + x  =  1 + 3/4 + 15/32 + ...

    A = 3/4 ,  B = 15/32

     B        15/32       15     16       5
   ----  =  ---------  = ---- x ----  =  ---
    A^2       9/16        32      9        6

   q/p  =  2(5/6) - 1  =  5/3 - 1  =  2/3     ->   p/q = 3/2

   z    =  (3/4) / (3/2)  =  1/2

   1 + x  =  (1 - 1/2)^(-3/2)  =  (1/2)^(-3/2)  =  2^(3/2)  =  2 x sqrt(2)

   x  =  2 sqrt(2)  -  1
```

> **TRAP:** Forgetting STEP 1. If the printed series does not begin with 1, you
> must put the 1 in yourself and take it away at the end. Almost every lost
> mark in this question is that one missing 1.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Tick every line. Each one is a real mark that students throw away.

```
  [ ]  Did I use  r = (term number) - 1  and not r = term number?

  [ ]  In every term, do the two powers add up to n?

  [ ]  For a MINUS sign inside the bracket, did I keep (-1)^r
       and check that the signs alternate + - + - ?

  [ ]  If n is ODD, did I write BOTH middle terms?

  [ ]  Did I answer what was asked - the TERM, or its COEFFICIENT?

  [ ]  If solving for r gave a fraction or a negative number, did I write
       "that power does not occur, coefficient = 0" instead of forcing it?

  [ ]  For the numerically greatest term, did I take a^n outside FIRST,
       and divide by (1 + |y|) and not by |y| ?

  [ ]  For the greatest term, if k came out a whole number, did I give
       BOTH T(k) and T(k+1) ?

  [ ]  For a rational index, did I state the validity condition |x| < 1
       (in terms of the actual x)?

  [ ]  For a rational index, did I first force the bracket to start with 1?

  [ ]  In an infinite-series sum, did I insert the leading 1 and remove it
       at the end?

  [ ]  Is my remainder a POSITIVE number less than the divisor?

  [ ]  Did I simplify the final fraction (divide top and bottom fully)?

  [ ]  Did I write the final answer on its own line with the word ANSWER?
```
