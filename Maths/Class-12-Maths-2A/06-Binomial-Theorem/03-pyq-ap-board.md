# Binomial Theorem — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 6**

> **About the year tags:** BIEAP recycles the same questions across many
> sessions, and the same problem appears in March, May and supplementary
> papers years apart. So the questions below are grouped by **"how often they
> appear"** rather than tagged to one exact year. Before your exam, cross-check
> with the official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIA paper:**

```
  +-------------+----------------------------+-----------------+
  |  SECTION A  |  10 questions x 2 marks    |  ANSWER ALL     |  = 20
  |  SECTION B  |   7 questions x 4 marks    |  ANSWER ANY 5   |  = 20
  |  SECTION C  |   7 questions x 7 marks    |  ANSWER ANY 5   |  = 35
  +-------------+----------------------------+-----------------+
                                                       TOTAL      = 75

  Binomial Theorem usually appears at:

     Section A  ->  Q6 or Q7        (a term, or a rational-index expansion)
     Section B  ->  Q16 or Q17      (middle term / coefficient of x^k)
     Section C  ->  Q22 and Q23     (greatest term, and infinite series)
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10.
# ===============================================================

## Topic: Number of terms

### Q A1
Find the number of terms in the expansion of (2x + 3y + z)^7.

**ANSWER:**
```
  Three parts, so use  (n+1)(n+2)/2   with  n = 7 :

        (7+1)(7+2)         8 x 9         72
       ------------  =   ---------  =  ------  =  36
             2                2            2
```
**36 terms**

---

### Q A2
Find the number of terms in the expansion of (1 + 2x + x^2)^20.

**ANSWER:**
```
  1 + 2x + x^2  is a perfect square :  (1 + x)^2

  So  (1 + 2x + x^2)^20  =  [ (1 + x)^2 ]^20  =  (1 + x)^40

  Number of terms  =  40 + 1  =  41
```
**41 terms**

> Never expand a trinomial if it factorises. Always look for (1 + x)^2 first.

---

### Q A3
Find the number of terms in the expansion of (3a + 2b)^15.

**ANSWER:** n = 15, so the number of terms = 15 + 1 = **16**

---

## Topic: Expansion

### Q A4
Expand (2x + 3y)^4.

**ANSWER:**
```
  Row 4 of Pascal's triangle :  1 , 4 , 6 , 4 , 1

  (2x + 3y)^4
     = (2x)^4 + 4(2x)^3(3y) + 6(2x)^2(3y)^2 + 4(2x)(3y)^3 + (3y)^4

     = 16x^4  + 4(8x^3)(3y) + 6(4x^2)(9y^2) + 4(2x)(27y^3) + 81y^4

     = 16x^4 + 96x^3 y + 216x^2 y^2 + 216x y^3 + 81y^4
```
Check: every term's powers add to 4. Correct.

---

## Topic: A stated term

### Q A5
Find the 4th term in the expansion of (2a + 3b)^6.

**ANSWER:**
```
  Term number 4   ->   r = 3

  T4 = 6C3 (2a)^(6-3) (3b)^3
     = 20 (2a)^3 (3b)^3
     = 20 (8a^3)(27b^3)
     = 20 x 216 a^3 b^3
     = 4320 a^3 b^3
```

---

### Q A6
Find the 7th term in the expansion of (1 - x/2)^10.

**ANSWER:**
```
  r = 6

  T7 = 10C6 (1)^4 (-x/2)^6

       10C6 = 10C4 = (10 x 9 x 8 x 7)/(4 x 3 x 2 x 1) = 210

       (-x/2)^6 = + x^6/64          (even power -> positive)

             210 x^6         105 x^6
  T7  =   ------------  =  -----------
                64              32
```

---

### Q A7
Write the general term in the expansion of (3x - 2y)^11.

**ANSWER:**
```
  T(r+1) = 11Cr (3x)^(11-r) (-2y)^r
         = 11Cr (-1)^r 3^(11-r) 2^r x^(11-r) y^r
```

---

## Topic: Middle term

### Q A8
Find the middle term in the expansion of (1 + x)^10.

**ANSWER:**
```
  n = 10 is EVEN  ->  one middle term, the (10/2 + 1) = 6th term, r = 5

  T6 = 10C5 x^5 = 252 x^5
```

---

### Q A9
How many middle terms are there in the expansion of (2x - 3y)^13, and which
terms are they?

**ANSWER:**
```
  n = 13 is ODD  ->  TWO middle terms

  the ((13+1)/2) = 7th   and   the ((13+3)/2) = 8th terms

  i.e.  T7  and  T8
```

---

## Topic: Term independent of x

### Q A10
Find the term independent of x in the expansion of (x + 1/x)^8.

**ANSWER:**
```
  T(r+1) = 8Cr x^(8-r) (1/x)^r = 8Cr x^(8 - 2r)

  Set  8 - 2r = 0   ->   r = 4

  T5 = 8C4 = 70
```

---

## Topic: Properties of nCr

### Q A11
If nC5 = nC6, find n.

**ANSWER:**
```
  nCr = nCs  =>  r = s  or  r + s = n

  5 is not 6, so  n = 5 + 6 = 11
```

---

### Q A12
If 21Cr = 21C(r+5), find r.

**ANSWER:**
```
  r + (r + 5) = 21
  2r + 5 = 21
  2r = 16
  r = 8

  CHECK: 21C8 = 21C13 and r + 5 = 13.  Correct.
```

---

### Q A13
If 2nC3 : nC3 = 11 : 1, find n.

**ANSWER:**
```
     2n(2n-1)(2n-2)          11
    -----------------  =    ----
      n(n-1)(n-2)             1

     2n(2n-1) x 2(n-1)  =  11 n(n-1)(n-2)

     4(2n - 1)  =  11(n - 2)              (cancel n and (n-1))

     8n - 4  =  11n - 22
        18   =  3n
         n   =  6

  CHECK: 12C3 = 220 , 6C3 = 20 , ratio = 11 : 1.  Correct.
```

---

## Topic: Sum of coefficients

### Q A14
Find the sum of the coefficients in the expansion of (3x - 4y)^7.

**ANSWER:**
```
  Put x = 1 and y = 1 :     (3 - 4)^7  =  (-1)^7  =  -1
```

---

### Q A15
Find the sum of the coefficients in the expansion of (1 + x - 3x^2)^2143.

**ANSWER:**
```
  Put x = 1 :     (1 + 1 - 3)^2143  =  (-1)^2143  =  -1
```

---

## Topic: Greatest coefficient

### Q A16
Find the largest binomial coefficient in the expansion of (1 + x)^19.

**ANSWER:**
```
  n = 19 is ODD  ->  two equal largest coefficients

       19C9  =  19C10  =  92378
```

---

### Q A17
Find the greatest coefficient in the expansion of (1 + x)^12.

**ANSWER:**
```
  n = 12 is EVEN  ->  greatest coefficient = 12C6 = 924
```

---

## Topic: Rational / negative index

### Q A18
Write the first three terms in the expansion of (1 + x/2)^(-5).

**ANSWER:**
```
  n = -5 , the "x" of the formula is (x/2)

  term 1 :  1

  term 2 :  (-5)(x/2)  =  -5x/2

  term 3 :  [ (-5)(-6)/2! ] (x/2)^2  =  15 x (x^2/4)  =  15x^2/4

           5x       15x^2
   1  -  ------  + --------  - ...            valid for |x| < 2
            2          4
```

---

### Q A19
Write the first three terms in the expansion of (1 - 2x)^(-3/4).

**ANSWER:**
```
  n = -3/4 ,  the "x" of the formula is (-2x)

  term 1 :  1

  term 2 :  (-3/4)(-2x)  =  3x/2

  term 3 :  [ (-3/4)(-7/4) / 2! ] (-2x)^2
            = (21/32)(4x^2)
            = 21x^2 / 8

           3x       21x^2
   1  +  ------ + ---------  + ...           valid for |x| < 1/2
            2          8
```

---

### Q A20
For what values of x is the expansion of (2 + 3x)^(-2/3) valid?

**ANSWER:**
```
  Force the bracket to start with 1 :

      (2 + 3x)^(-2/3)  =  2^(-2/3) (1 + 3x/2)^(-2/3)

  Condition :  | 3x / 2 | < 1

               | x | < 2/3          i.e.   -2/3 < x < 2/3
```

---

### Q A21
Find the 6th term in the expansion of (1 - x)^(-3).

**ANSWER:**
```
  For (1 - x)^(-n) the general term is  (n + r - 1)Cr x^r ,  here n = 3.

  6th term  ->  r = 5

  T6 = (3 + 5 - 1)C5 x^5 = 7C5 x^5 = 21 x^5
```

---

### Q A22
Find an approximate value of the 6th root of 63.

**ANSWER:**
```
  63 = 64 - 1 = 64 (1 - 1/64)

  63^(1/6) = 64^(1/6) (1 - 1/64)^(1/6) = 2 (1 - 1/64)^(1/6)

  Since 1/64 is small, keep only two terms :

           = 2 [ 1 + (1/6)(-1/64) ]
           = 2 [ 1 - 1/384 ]
           = 2 - 2/384
           = 2 - 0.0052
           = 1.9948
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks) — answer any 5 of 7
# Binomial Theorem is almost always one of the seven.
# ===============================================================

### Q B1
Find the coefficient of x^7 in the expansion of (2x^2 + 1/x)^11.

**ANSWER:**
```
  STEP 1   General term

     T(r+1) = 11Cr (2x^2)^(11-r) (1/x)^r

  STEP 2   Collect the powers of x

     (x^2)^(11-r) = x^(22 - 2r)        (1/x)^r = x^(-r)

     T(r+1) = 11Cr  2^(11-r)  x^(22 - 3r)

  STEP 3   Set the power equal to 7

     22 - 3r = 7
     3r = 15
     r = 5                (a whole number between 0 and 11, so valid)

  STEP 4   Coefficient

     = 11C5 x 2^(11-5)
     = 462 x 2^6
     = 462 x 64
     = 29568
```
**Coefficient of x^7 = 29568**

---

### Q B2
Find the term independent of x in the expansion of (2x^2 + 1/x)^12.

**ANSWER:**
```
  T(r+1) = 12Cr (2x^2)^(12-r) (1/x)^r
         = 12Cr  2^(12-r)  x^(24 - 2r - r)
         = 12Cr  2^(12-r)  x^(24 - 3r)

  "Independent of x" means the power of x is ZERO :

     24 - 3r = 0
     r = 8                     ->   it is the 9th term

  T9 = 12C8 x 2^(12-8)
     = 12C4 x 2^4
     = 495 x 16
     = 7920
```
**The 9th term, value 7920**

---

### Q B3
Find the term independent of x in the expansion of (3x^2/2 - 1/(3x))^9.

**ANSWER:**
```
  T(r+1) = 9Cr (3x^2/2)^(9-r) (-1/(3x))^r

  Power of x :   2(9 - r) - r  =  18 - 3r

     18 - 3r = 0    ->    r = 6      ->   the 7th term

  T7 = 9C6 (3/2)^(9-6) (-1/3)^6

       9C6 = 9C3 = (9 x 8 x 7)/(3 x 2 x 1) = 84
       (3/2)^3 = 27/8
       (-1/3)^6 = + 1/729

              84 x 27          2268
  T7  =   --------------  =  ---------
             8 x 729           5832

       Divide top and bottom by 324 :

              7
       =  --------
             18
```
**The 7th term, value 7/18**

---

### Q B4
Find the coefficient of x^(-17) in the expansion of (x^4 - 1/x^3)^15.

**ANSWER:**
```
  T(r+1) = 15Cr (x^4)^(15-r) (-1/x^3)^r
         = 15Cr (-1)^r x^(60 - 4r) x^(-3r)
         = 15Cr (-1)^r x^(60 - 7r)

  Set  60 - 7r = -17
       7r = 77
       r = 11

  Coefficient = 15C11 (-1)^11
              = 15C4 x (-1)
              = 1365 x (-1)
              = -1365
```

---

### Q B5
Find the coefficient of x^11 in the expansion of (2x^2 + 3/x^3)^13.

**ANSWER:**
```
  T(r+1) = 13Cr (2x^2)^(13-r) (3/x^3)^r
         = 13Cr  2^(13-r)  3^r  x^(26 - 2r - 3r)
         = 13Cr  2^(13-r)  3^r  x^(26 - 5r)

  Set  26 - 5r = 11
       5r = 15
       r = 3

  Coefficient = 13C3 x 2^10 x 3^3
              = 286 x 1024 x 27
              = 292864 x 27
              = 7907328
```

---

### Q B6
Find the middle terms in the expansion of (3x - x^3/6)^9.

**ANSWER:**
```
  n = 9 is ODD, so there are TWO middle terms:
  the 5th (r = 4) and the 6th (r = 5).

  T5 = 9C4 (3x)^5 (-x^3/6)^4

       9C4 = 126
       (3x)^5 = 243 x^5
       (-x^3/6)^4 = + x^12/1296

             126 x 243 x^17        30618 x^17
       =   -----------------  =  --------------
                 1296                 1296

       Divide top and bottom by 162 :

             189 x^17
       =   ------------
                 8


  T6 = 9C5 (3x)^4 (-x^3/6)^5

       9C5 = 126
       (3x)^4 = 81 x^4
       (-x^3/6)^5 = - x^15/7776

              126 x 81 x^19          10206 x^19
       =  - -----------------  =  - -------------
                  7776                  7776

       Divide top and bottom by 486 :

              21 x^19
       =  - -----------
                 16
```
**Middle terms: (189/8) x^17 and -(21/16) x^19**

---

### Q B7
Find the middle term in the expansion of (3 + x/2)^8.

**ANSWER:**
```
  n = 8 is EVEN  ->  one middle term, the 5th term, r = 4

  T5 = 8C4 (3)^4 (x/2)^4
     = 70 x 81 x (x^4/16)

           5670 x^4        2835 x^4
     =  -------------  =  -----------
              16                8
```

---

### Q B8
If the coefficients of the 2nd, 3rd and 4th terms in the expansion of (1 + x)^n
are in arithmetic progression, find n.

**ANSWER:**
```
  The coefficients are  nC1 , nC2 , nC3.

  In AP  =>  2 x nC2 = nC1 + nC3

         n(n-1)                n(n-1)(n-2)
  2 x   --------   =   n   +  -------------
             2                      6

  Divide every term by n  (n is not zero) :

                            (n-1)(n-2)
      n - 1   =   1   +    ------------
                                 6

  Multiply by 6 :

      6n - 6  =  6 + (n^2 - 3n + 2)
      6n - 6  =  n^2 - 3n + 8
           0  =  n^2 - 9n + 14
           0  =  (n - 7)(n - 2)

      n = 7   or   n = 2

  n = 2 must be rejected because (1 + x)^2 has only 3 terms - there is no
  4th term.
```
**n = 7**

---

### Q B9
If the coefficients of the rth, (r+1)th and (r+2)th terms in the expansion of
(1 + x)^14 are in AP, find r.

**ANSWER:**
```
  The coefficients are  14C(r-1) , 14Cr , 14C(r+1).

  Use the standard result: if nC(r-1), nCr, nC(r+1) are in AP then

        (n - 2r)^2  =  n + 2

  Here n = 14 :

        (14 - 2r)^2  =  16
         14 - 2r  =  +4   or   -4

         2r = 10  or  2r = 18
          r = 5    or   r = 9

  CHECK r = 5 :  14C4 = 1001 , 14C5 = 2002 , 14C6 = 3003
                 2(2002) = 4004  and  1001 + 3003 = 4004     Correct.
```
**r = 5 or r = 9**

---

### Q B10
If the coefficients of the 9th, 10th and 11th terms in the expansion of
(1 + x)^n are in AP, find n.

**ANSWER:**
```
  Those coefficients are  nC8 , nC9 , nC10 ,  so the middle index is r = 9.

        (n - 2r)^2 = n + 2
        (n - 18)^2 = n + 2
        n^2 - 36n + 324 = n + 2
        n^2 - 37n + 322 = 0

        discriminant = 1369 - 1288 = 81 ,  square root = 9

               37 +/- 9
        n  =  ----------   =   23   or   14
                   2

  CHECK n = 14 :  14C8 = 3003 , 14C9 = 2002 , 14C10 = 1001
                  2(2002) = 4004 = 3003 + 1001            Correct.
```
**n = 14 or n = 23**

---

### Q B11
Show that 49^n + 16n - 1 is divisible by 64 for every positive integer n.

**ANSWER:**
```
  Write 49 = 1 + 48 :

  49^n = (1 + 48)^n
       = 1 + nC1(48) + nC2(48)^2 + nC3(48)^3 + ...
       = 1 + 48n + [ nC2 (48)^2 + nC3 (48)^3 + ... ]

  Every term inside the bracket contains (48)^2 = 2304 = 64 x 36,
  so the bracket is  64M  for some whole number M.

  Therefore

     49^n + 16n - 1  =  (1 + 48n + 64M) + 16n - 1
                     =  48n + 16n + 64M
                     =  64n + 64M
                     =  64 (n + M)

  which is divisible by 64.
```

---

### Q B12
Find the remainder when 7^103 is divided by 25.

**ANSWER:**
```
  7^103  =  7 x 7^102
         =  7 x (7^2)^51
         =  7 x 49^51
         =  7 x (50 - 1)^51

  Expanding (50 - 1)^51 , every term except the last contains 50 :

       (50 - 1)^51  =  50K + (-1)^51  =  50K - 1

  So   7^103  =  7(50K - 1)  =  350K - 7

  350K is a multiple of 25. So

       7^103  =  25(14K)  -  7
              =  25(14K - 1)  +  18

  A remainder must be positive and less than 25.
```
**Remainder = 18**

---

### Q B13
Find the first three terms in the expansion of (1 - 2x/3)^(-1/2), and state
the values of x for which it is valid.

**ANSWER:**
```
  n = -1/2 ,  the "x" of the formula is (-2x/3)

  term 1 :  1

  term 2 :  (-1/2)(-2x/3)  =  x/3

  term 3 :  [ (-1/2)(-3/2)/2! ] (-2x/3)^2
            = (3/8)(4x^2/9)

               12 x^2        x^2
            = --------  =  -------
                 72           6

                x        x^2
      1   +   -----  +  -----  +  ...
                3         6

  Valid when  | 2x/3 | < 1 ,  that is  | x | < 3/2
```

---

### Q B14
Find the coefficient of x^3 in the expansion of (1 - 2x)^(-1/2).

**ANSWER:**
```
  First expand (1 - y)^(-1/2) :

                  1          1 x 3            1 x 3 x 5
     =  1  +  ------ y  +  ---------- y^2 + -------------- y^3 + ...
                  2          2 x 4            2 x 4 x 6

              y      3 y^2      5 y^3
     =  1 + ----- + ------- + -------- + ...
              2        8         16

  Now put y = 2x :

                  5              5              40 x^3
     term in x^3 = ---- (2x)^3 = ---- (8 x^3) = -------- = (5/2) x^3
                   16             16              16
```
**Coefficient of x^3 = 5/2**

---

### Q B15
Find an approximate value of the cube root of 1002 correct to 5 decimal places.

**ANSWER:**
```
  1002 = 1000 (1 + 0.002)

  1002^(1/3) = 1000^(1/3) (1 + 0.002)^(1/3)
             = 10 (1 + 0.002)^(1/3)

  Since 0.002 is small, keep two terms :

             = 10 [ 1 + (1/3)(0.002) ]
             = 10 [ 1 + 0.0006667 ]
             = 10 x 1.0006667
             = 10.00667
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks) — answer any 5 of 7
# Binomial Theorem very often supplies TWO of the seven.
# ===============================================================

### Q C1  (the most repeated 7-mark question in this chapter)
Find the numerically greatest term in the expansion of (4 + 3x)^15 when
x = 7/2.

**ANSWER:**
```
  STEP 1 — Force the shape  a^n (1 + y)^n

     (4 + 3x)^15  =  4^15 ( 1 + 3x/4 )^15


  STEP 2 — Put in x = 7/2

              3       7          21
     y  =   ----- x  ---   =   ------ ,     so   |y| = 21/8
              4       2           8


  STEP 3 — Apply the test formula

                (n + 1) |y|          (15 + 1)(21/8)
        k   =   -------------   =   ----------------
                  1  +  |y|            1 + (21/8)

                    42            42 x 8         336
            =   ---------   =   ---------   =   -----   =  11.586...
                   29/8             29            29


  STEP 4 — k is NOT a whole number.
           Its whole-number part is 11.
           So the numerically greatest term is  T(11 + 1)  =  T12.


  STEP 5 — Compute T12

     T12  =  4^15  x  15C11  x  (21/8)^11

             15C11 = 15C4 = (15 x 14 x 13 x 12)/(4 x 3 x 2 x 1) = 1365

             4^15 = (2^2)^15 = 2^30            8^11 = (2^3)^11 = 2^33

                2^30          1         1
             ---------  =  -------  =  ---
                2^33         2^3        8

                    1365  x  21^11
     T12  =     ----------------------
                         8
```
**The numerically greatest term is the 12th term, T12 = (1365 x 21^11)/8**

> The same recipe with different numbers is worth 7 marks every time.
> Practice it until Steps 1-4 take you 90 seconds.

---

### Q C2  (the second most repeated 7-mark question)
If x = 1/5 + (1 x 3)/(5 x 10) + (1 x 3 x 5)/(5 x 10 x 15) + ... ,
find the value of 3x^2 + 6x.

**ANSWER:**
```
  STEP 1 — The series does not begin with 1, so add a 1 in front.

     1 + x  =  1 + 1/5 + 3/50 + 15/750 + ...
            =  1 + 1/5 + 3/50 + 1/50 + ...


  STEP 2 — Name the two terms after the 1.

     A  =  1/5             B  =  3/50


  STEP 3 — Find q/p and then p/q.

        B          3/50         3       25        3
      -----  =  ----------  =  ----  x -----  =  ---
       A^2        (1/5)^2       50       1         2


        q          2B                3
       ---  =    ------  -  1  =  2( --- ) - 1  =  3 - 1  =  2
        p          A^2               2

                         p        1
       so              -----  =  ---
                         q        2


  STEP 4 — Find z.

               A            1/5           1      2         2
       z  =  -------   =  -------   =   ----- x -----  =  ----
              p/q           1/2           5      1          5


  STEP 5 — Write the sum using the standard form (1 - z)^(-p/q).

       1 + x  =  ( 1 - 2/5 )^(-1/2)
              =  ( 3/5 )^(-1/2)
              =  ( 5/3 )^(1/2)


  STEP 6 — Now answer what was asked.

       Square both sides :

              (1 + x)^2  =  5/3

              1 + 2x + x^2  =  5/3

       Multiply throughout by 3 :

              3 + 6x + 3x^2  =  5

              3x^2 + 6x  =  2
```
**3x^2 + 6x = 2**

> **Same question, different disguise:** if the answer form asked for is
> "prove 3x^2 + 6x - 2 = 0", it is exactly this working.

---

### Q C3
Find the sum of the infinite series
1 + 1/3 + (1 x 3)/(3 x 6) + (1 x 3 x 5)/(3 x 6 x 9) + ...
and hence find the sum of
3/4 + (3 x 5)/(4 x 8) + (3 x 5 x 7)/(4 x 8 x 12) + ...

**ANSWER — first series:**
```
  It already begins with 1.  Good.

     A = 1/3         B = 3/18 = 1/6

        B          1/6          1       9        3
      -----  =  ---------  =  ----- x -----  =  ---
       A^2        (1/9)         6       1         2

        q          3
       ---  =  2( --- ) - 1  =  2          ->     p/q = 1/2
        p          2

               1/3
       z  =  -------  =  2/3
               1/2

     SUM  =  (1 - 2/3)^(-1/2)  =  (1/3)^(-1/2)  =  3^(1/2)
```
**First sum = square root of 3**

**ANSWER — second series:**
```
  It does NOT begin with 1. Call the sum x and add a 1 in front.

     1 + x  =  1 + 3/4 + 15/32 + 105/384 + ...

     A = 3/4         B = 15/32

        B          15/32          15       16        5
      -----  =  -----------  =  ------ x ------  =  ---
       A^2        (9/16)          32        9         6

        q          5           5             2
       ---  =  2( --- ) - 1 = --- - 1  =   -----     ->    p/q = 3/2
        p          6           3             3

               3/4          3       2         1
       z  =  -------  =   ----- x  -----  =  ---
               3/2          4       3         2

     1 + x  =  (1 - 1/2)^(-3/2)  =  (1/2)^(-3/2)  =  2^(3/2)  =  2 x sqrt(2)

         x  =  2 sqrt(2)  -  1
```
**Second sum = 2 x (square root of 2) - 1**

---

### Q C4
If C0, C1, C2, ... , Cn are the binomial coefficients in the expansion of
(1 + x)^n, prove that

```
          C1     C2     C3            Cn        2^(n+1) - 1
   C0 +  ---- + ---- + ---- + ... + ------  =  --------------
           2      3      4           n+1           n + 1
```

**ANSWER:**
```
  STEP 1 — Handle the general piece.

     The general term of the left side is  Cr / (r + 1) ,  i.e.  nCr/(r+1).

     Now,

                       (n+1)!
     (n+1)C(r+1)  =  ------------------
                      (r+1)! (n - r)!

                       (n + 1)            n!
                  =  ----------- x ----------------
                        r + 1        r! (n - r)!

                       (n + 1)
                  =  ----------- x  nCr
                        r + 1

     Rearranging :

           nCr          (n+1)C(r+1)
         --------  =   -------------
          r + 1            n + 1


  STEP 2 — Add up from r = 0 to r = n.

       LHS  =  sum of  nCr/(r+1)   for r = 0 to n

                    1
            =  ---------  [ (n+1)C1 + (n+1)C2 + ... + (n+1)C(n+1) ]
                 n + 1


  STEP 3 — Use the basic sum result on index (n + 1).

       (n+1)C0 + (n+1)C1 + ... + (n+1)C(n+1)  =  2^(n+1)

       The bracket in STEP 2 is missing only the first piece, (n+1)C0 = 1.

       So the bracket  =  2^(n+1)  -  1.


  STEP 4 — Put it together.

                 2^(n+1) - 1
       LHS  =  ---------------   =   RHS          Proved.
                    n + 1


  CHECK with n = 2 :   C0 = 1, C1 = 2, C2 = 1

       LHS = 1 + 2/2 + 1/3 = 1 + 1 + 1/3 = 7/3

       RHS = (2^3 - 1)/3 = 7/3            Correct.
```

---

### Q C5
If a1, a2, a3, a4 are the coefficients of any four consecutive terms in the
expansion of (1 + x)^n, prove that

```
       a1            a3            2 a2
   ---------  +  ---------  =  -----------
    a1 + a2       a3 + a4       a2 + a3
```

**ANSWER:**
```
  STEP 1 — Name the four coefficients.

     Let  a1 = nCr ,  a2 = nC(r+1) ,  a3 = nC(r+2) ,  a4 = nC(r+3).


  STEP 2 — Use Pascal's rule on each denominator.

     a1 + a2  =  nCr + nC(r+1)          =  (n+1)C(r+1)
     a2 + a3  =  nC(r+1) + nC(r+2)      =  (n+1)C(r+2)
     a3 + a4  =  nC(r+2) + nC(r+3)      =  (n+1)C(r+3)


  STEP 3 — Simplify the first fraction.

        a1              nCr
     ---------  =  ---------------
      a1 + a2       (n+1)C(r+1)

                        n!            (r+1)! (n - r)!
                =  ------------- x  ------------------
                    r! (n - r)!          (n + 1)!

                     r + 1
                =  ---------
                     n + 1


  STEP 4 — The same working on the other two.

        a3           nC(r+2)            r + 3
     ---------  =  -------------  =  ----------
      a3 + a4       (n+1)C(r+3)         n + 1


        a2           nC(r+1)            r + 2
     ---------  =  -------------  =  ----------
      a2 + a3       (n+1)C(r+2)         n + 1


  STEP 5 — Add the first and the third.

        a1          a3         r + 1       r + 3
     --------- + --------- =  -------  +  -------
      a1 + a2     a3 + a4      n + 1       n + 1

                                2r + 4          2(r + 2)
                            =  --------   =   -----------
                                n + 1            n + 1

                                    a2
                            =  2 ( --------- )
                                   a2 + a3

                                2 a2
                            =  ---------           Proved.
                                a2 + a3
```

---

### Q C6
If C0, C1, ... , Cn are the binomial coefficients of (1 + x)^n, prove that
C0^2 + C1^2 + C2^2 + ... + Cn^2 = (2n)Cn.

**ANSWER:**
```
  STEP 1 — Write down the same expansion twice.

     (1 + x)^n  =  C0 + C1 x + C2 x^2 + ... + Cn x^n            ... (i)

     Replace x by 1/x in (i) and multiply through by x^n :

     (1 + x)^n  =  C0 x^n + C1 x^(n-1) + C2 x^(n-2) + ... + Cn  ... (ii)

     (This is the same expansion written BACKWARDS, which is allowed
      because Cr = C(n-r).)


  STEP 2 — Multiply (i) and (ii).

     LEFT  side :   (1 + x)^n (1 + x)^n  =  (1 + x)^(2n)


  STEP 3 — Compare the coefficient of x^n on both sides.

     RIGHT side, gathering all the ways to reach x^n :

         C0 C0 + C1 C1 + C2 C2 + ... + Cn Cn
       = C0^2 + C1^2 + C2^2 + ... + Cn^2

     LEFT side : the coefficient of x^n in (1 + x)^(2n) is  (2n)Cn.


  STEP 4 — Equate.

         C0^2 + C1^2 + ... + Cn^2  =  (2n)Cn           Proved.


  CHECK with n = 2 :   C0 = 1, C1 = 2, C2 = 1

       LHS = 1 + 4 + 1 = 6            RHS = 4C2 = 6      Correct.
```

---

# WHICH QUESTIONS REPEAT MOST

Ranked by how often the shape appears in BIEAP Maths IIA papers.

| Rank | Question shape | Section | Marks | How often |
|------|----------------|---------|-------|-----------|
| 1 | Numerically greatest term, given a value of x | C | 7 | almost every year |
| 2 | Sum of an infinite series (rational index), "find 3x^2 + 6x" type | C | 7 | almost every year |
| 3 | Coefficient of x^k or term independent of x | B | 4 | very often |
| 4 | Middle term(s) of an expansion | B | 4 | very often |
| 5 | Prove a binomial-coefficient identity (C0 + C1/2 + ..., or sum of squares) | C | 7 | often |
| 6 | Coefficients of consecutive terms in AP, find n or r | B | 4 | often |
| 7 | First three terms of a rational-index expansion + validity | A | 2 | often |
| 8 | Find a stated term (4th, 7th, ...) | A | 2 | often |
| 9 | Number of terms / sum of coefficients | A | 2 | often |
| 10 | Approximation (6th root of 63, cube root of 1002) | A or B | 2-4 | sometimes |
| 11 | Divisibility / remainder using the expansion | B | 4 | sometimes |
| 12 | Greatest coefficient | A | 2 | sometimes |

**The honest strategy:** master ranks 1, 2, 3, 4 and you have secured about
15 marks from this single chapter. Ranks 5 to 12 are bonus.
