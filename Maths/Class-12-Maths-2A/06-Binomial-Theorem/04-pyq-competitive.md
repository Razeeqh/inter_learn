# Binomial Theorem — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

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

**How many questions come from Binomial Theorem:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 3
  TG EAPCET  (Maths, 80 questions)  ->  2 to 3
  JEE Main   (Maths, 25 questions)  ->  1 to 2
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with the official papers before the exam.

**The single most useful fact for objective papers:**

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   T(r+1) = nCr a^(n-r) x^r                                       |
  |                                                                  |
  |   Write the general term. Collect ALL x's into one power.        |
  |   Set that power equal to what is asked. Solve for r.            |
  |                                                                  |
  |   That is 70% of every binomial MCQ ever set.                    |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# PATTERN 1 — Number of terms and sum of coefficients (free marks)

### Q1
The number of terms in the expansion of (1 + 2x + x^2)^20 is

(a) 21 &nbsp;&nbsp; (b) 40 &nbsp;&nbsp; (c) 41 &nbsp;&nbsp; (d) 42

**ANSWER: (c)**
```
  1 + 2x + x^2 = (1 + x)^2

  So the expression is  (1 + x)^40 ,  which has  40 + 1 = 41 terms.
```
> **SHORTCUT:** Always test whether the trinomial is a perfect square.
> 1 + 2x + x^2, 1 - 2x + x^2, x^2 + 4x + 4 all collapse instantly.

---

### Q2
The number of terms in the expansion of (x + y + z)^10 is

(a) 55 &nbsp;&nbsp; (b) 66 &nbsp;&nbsp; (c) 72 &nbsp;&nbsp; (d) 78

**ANSWER: (b)**
```
      (n+1)(n+2)        11 x 12        132
     ------------  =   ---------  =  ------  =  66
           2                2            2
```

---

### Q3
The number of terms in the expansion of (sqrt2 + 1)^6 + (sqrt2 - 1)^6 is

(a) 3 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 6 &nbsp;&nbsp; (d) 7

**ANSWER: (b)**
```
  Adding kills every ODD-position term. Only r = 0, 2, 4, 6 survive.

  n even  ->  number of terms = n/2 + 1 = 3 + 1 = 4
```
> **SHORTCUT:** SUM keeps the even r's, DIFFERENCE keeps the odd r's.

---

### Q4
The sum of the coefficients in the expansion of (3x - 5y)^8 is

(a) 256 &nbsp;&nbsp; (b) -256 &nbsp;&nbsp; (c) 16 &nbsp;&nbsp; (d) 0

**ANSWER: (a)**
```
  Put x = 1 , y = 1 :    (3 - 5)^8  =  (-2)^8  =  256
```

---

### Q5
If the sum of the coefficients in the expansion of (a + b)^n is 4096, then the
greatest coefficient in the expansion is

(a) 924 &nbsp;&nbsp; (b) 792 &nbsp;&nbsp; (c) 1716 &nbsp;&nbsp; (d) 2048

**ANSWER: (a)**
```
  Sum of coefficients = 2^n = 4096 = 2^12    ->   n = 12  (even)

  Greatest coefficient = 12C6 = 924
```

---

# PATTERN 2 — Pick out a stated term

### Q6
The 5th term in the expansion of (2x - 1/x^2)^8 is

(a) 1120/x^4 &nbsp;&nbsp; (b) -1120/x^4 &nbsp;&nbsp; (c) 1120 x^4 &nbsp;&nbsp; (d) 560/x^4

**ANSWER: (a)**
```
  5th term  ->  r = 4

  T5 = 8C4 (2x)^4 (-1/x^2)^4
     = 70 x 16 x^4 x (+ x^(-8))          (even power -> plus)
     = 1120 x^(-4)
     = 1120 / x^4
```

---

### Q7
The 4th term from the END in the expansion of (2x - 1/x^2)^9 is

(a) 672/x^9 &nbsp;&nbsp; (b) -672/x^9 &nbsp;&nbsp; (c) 84/x^9 &nbsp;&nbsp; (d) 672 x^9

**ANSWER: (a)**
```
  p-th term from the END  =  (n - p + 2)-th term from the START

     9 - 4 + 2  =  7th term      ->    r = 6

  T7 = 9C6 (2x)^3 (-1/x^2)^6
     = 84 x 8x^3 x (+ x^(-12))
     = 672 x^(-9)  =  672 / x^9
```
> **SHORTCUT:** "from the end" = flip it. Use (n - p + 2). Do not re-expand.

---

### Q8
The coefficient of x^5 in the expansion of (x + 3)^8 is

(a) 1512 &nbsp;&nbsp; (b) 504 &nbsp;&nbsp; (c) 56 &nbsp;&nbsp; (d) 4536

**ANSWER: (a)**
```
  T(r+1) = 8Cr x^(8-r) 3^r

  8 - r = 5   ->   r = 3

  coefficient = 8C3 x 3^3 = 56 x 27 = 1512
```

---

### Q9
If the 21st and 22nd terms in the expansion of (1 + x)^44 are equal, then x is

(a) 7/8 &nbsp;&nbsp; (b) 8/7 &nbsp;&nbsp; (c) 21/22 &nbsp;&nbsp; (d) 20/21

**ANSWER: (a)**
```
  T21 = 44C20 x^20        T22 = 44C21 x^21

  Equal  ->   44C20 x^20  =  44C21 x^21

                44C20            r            21          21        7
        x  =  ---------  =  -----------  =  --------  =  ----  =  ---
                44C21         n - r + 1      44-21+1       24       8
```
> **SHORTCUT:** use nCr/nC(r-1) = (n - r + 1)/r. Never compute 44C20.

---

# PATTERN 3 — Coefficient of x^k / term independent of x

### Q10
The term independent of x in the expansion of (x - 1/x)^10 is

(a) 252 &nbsp;&nbsp; (b) -252 &nbsp;&nbsp; (c) 210 &nbsp;&nbsp; (d) -210

**ANSWER: (b)**
```
  T(r+1) = 10Cr x^(10-r) (-1/x)^r = 10Cr (-1)^r x^(10 - 2r)

  10 - 2r = 0   ->   r = 5

  T6 = 10C5 (-1)^5 = 252 x (-1) = -252
```

---

### Q11
The term independent of x in the expansion of ( 3x^2/2 - 1/(3x) )^9 is

(a) 7/18 &nbsp;&nbsp; (b) -7/18 &nbsp;&nbsp; (c) 18/7 &nbsp;&nbsp; (d) 1/3

**ANSWER: (a)**
```
  Power of x :  2(9 - r) - r  =  18 - 3r  =  0   ->   r = 6

  T7 = 9C6 (3/2)^3 (-1/3)^6

     = 84 x (27/8) x (1/729)

           84 x 27         2268          7
     =  ------------  =  --------  =  ------
           8 x 729         5832          18
```

---

### Q12
The coefficient of x^(-17) in the expansion of (x^4 - 1/x^3)^15 is

(a) 1365 &nbsp;&nbsp; (b) -1365 &nbsp;&nbsp; (c) 455 &nbsp;&nbsp; (d) -455

**ANSWER: (b)**
```
  Power of x :  4(15 - r) - 3r  =  60 - 7r  =  -17   ->   r = 11

  coefficient = 15C11 (-1)^11 = 15C4 x (-1) = -1365
```

---

### Q13
If the coefficient of x^7 in (ax^2 + 1/(bx))^11 equals the coefficient of
x^(-7) in (ax - 1/(bx^2))^11, then

(a) ab = 1 &nbsp;&nbsp; (b) ab = 2 &nbsp;&nbsp; (c) a + b = 1 &nbsp;&nbsp; (d) a = b

**ANSWER: (a)**
```
  FIRST expansion :
     power of x = 2(11 - r) - r = 22 - 3r = 7   ->   r = 5

           coefficient = 11C5  a^6 / b^5

  SECOND expansion :
     power of x = (11 - r) - 2r = 11 - 3r = -7  ->   r = 6

           coefficient = 11C6  a^5 (-1)^6 / b^6  =  11C6  a^5 / b^6

  Since 11C5 = 11C6 = 462 , they cancel :

            a^6           a^5
          -------   =   -------
            b^5           b^6

           a^6 b^6  =  a^5 b^5

              ab   =  1
```

---

### Q14
The number of terms in the expansion of (x + 1/x)^n that are independent of x,
when n is odd, is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) n

**ANSWER: (a)**
```
  Power of x  =  n - 2r ,  which is ODD whenever n is odd.

  An odd number can never be 0, so there is NO constant term.
```
> **SHORTCUT:** whenever solving for r gives a fraction, the answer is
> "does not exist", coefficient 0. Do not force it.

---

### Q15
The number of rational terms in the expansion of ( 3^(1/2) + 5^(1/8) )^256 is

(a) 32 &nbsp;&nbsp; (b) 33 &nbsp;&nbsp; (c) 34 &nbsp;&nbsp; (d) 35

**ANSWER: (b)**
```
  T(r+1) = 256Cr x 3^((256 - r)/2) x 5^(r/8)

  Need  r/8  to be a whole number  ->  r = 0, 8, 16, ... , 256
  (then 256 - r is automatically even, so the power of 3 is fine too)

  Count :  256/8 + 1  =  32 + 1  =  33
```

---

# PATTERN 4 — Middle term and greatest coefficient

### Q16
The middle term in the expansion of (1 + x)^12 is

(a) 792 x^6 &nbsp;&nbsp; (b) 924 x^6 &nbsp;&nbsp; (c) 924 x^7 &nbsp;&nbsp; (d) 495 x^6

**ANSWER: (b)**
```
  n = 12 even  ->  one middle term, the 7th,  r = 6

  T7 = 12C6 x^6 = 924 x^6
```

---

### Q17
The middle terms in the expansion of (2x - 3y)^11 are

(a) T5 and T6 &nbsp;&nbsp; (b) T6 and T7 &nbsp;&nbsp; (c) T6 only &nbsp;&nbsp; (d) T5 and T7

**ANSWER: (b)**
```
  n = 11 is ODD   ->  two middle terms

     the ((11+1)/2) = 6th   and   the ((11+3)/2) = 7th
```

---

### Q18
The greatest coefficient in the expansion of (1 + x)^15 is

(a) 5005 &nbsp;&nbsp; (b) 6435 &nbsp;&nbsp; (c) 3003 &nbsp;&nbsp; (d) 12870

**ANSWER: (b)**
```
  n = 15 is odd  ->  two equal greatest coefficients

     15C7  =  15C8  =  6435
```

---

### Q19
The coefficient of the middle term in the expansion of (1 + x)^(2n) is

(a) (2n)C(n-1) &nbsp;&nbsp; (b) (2n)Cn &nbsp;&nbsp; (c) 2^n &nbsp;&nbsp; (d) n!

**ANSWER: (b)**
```
  2n is even  ->  one middle term, the (n + 1)-th,  r = n

  coefficient = (2n)Cn ,  and this is also the GREATEST coefficient.
```

---

### Q20
The middle term in the expansion of (1 - 2x + x^2)^n is

(a) (2n)Cn x^n &nbsp;&nbsp; (b) (-1)^n (2n)Cn x^n &nbsp;&nbsp; (c) (2n)C(n+1) x^n &nbsp;&nbsp; (d) -2^n x^n

**ANSWER: (b)**
```
  1 - 2x + x^2 = (1 - x)^2 , so the expression is (1 - x)^(2n).

  Middle term  ->  r = n :

     T(n+1) = (2n)Cn (-x)^n = (-1)^n (2n)Cn x^n
```

---

# PATTERN 5 — Properties and sums of the coefficients

### Q21
C0 + C1 + C2 + ... + Cn is equal to

(a) 2^n &nbsp;&nbsp; (b) 2^(n-1) &nbsp;&nbsp; (c) n 2^(n-1) &nbsp;&nbsp; (d) 0

**ANSWER: (a)** — put x = 1 in (1 + x)^n.

---

### Q22
For n = 10, the value of C1 + 2C2 + 3C3 + ... + 10 C10 is

(a) 1024 &nbsp;&nbsp; (b) 5120 &nbsp;&nbsp; (c) 512 &nbsp;&nbsp; (d) 10240

**ANSWER: (b)**
```
  C1 + 2C2 + ... + nCn  =  n x 2^(n-1)

  = 10 x 2^9 = 10 x 512 = 5120
```

---

### Q23
Three consecutive coefficients in the expansion of (1 + x)^n are 165, 330, 462.
Then n =

(a) 9 &nbsp;&nbsp; (b) 10 &nbsp;&nbsp; (c) 11 &nbsp;&nbsp; (d) 12

**ANSWER: (c)**
```
  Let the coefficients be nCr, nC(r+1), nC(r+2).

     nC(r+1)        n - r          330
    ---------  =  ---------  =  ------- =  2      ->   n - r = 2r + 2
      nCr           r + 1          165

     nC(r+2)        n - r - 1        462        7
    ---------  =  -----------  =  ------- =  -----
     nC(r+1)         r + 2          330        5

        5(n - r - 1)  =  7(r + 2)      ->   5n = 12r + 19

  Substitute  n = 3r + 2 :

        5(3r + 2)  =  12r + 19
        15r + 10   =  12r + 19
             3r    =  9
              r    =  3  ,   n  =  11

  CHECK: 11C3 = 165 , 11C4 = 330 , 11C5 = 462.   Correct.
```

---

### Q24
nCr + 2 nC(r-1) + nC(r-2) is equal to

(a) (n+1)Cr &nbsp;&nbsp; (b) (n+2)Cr &nbsp;&nbsp; (c) (n+2)C(r+1) &nbsp;&nbsp; (d) (n+1)C(r-1)

**ANSWER: (b)**
```
  Group them into two Pascal pairs:

  [ nCr + nC(r-1) ] + [ nC(r-1) + nC(r-2) ]

     =  (n+1)Cr  +  (n+1)C(r-1)

     =  (n+2)Cr
```
> **SHORTCUT:** coefficients 1, 2, 1 means "apply Pascal twice". With 1, 3, 3, 1
> you would get (n+3)Cr.

---

### Q25
If n = 5, then C0^2 + C1^2 + C2^2 + C3^2 + C4^2 + C5^2 =

(a) 32 &nbsp;&nbsp; (b) 120 &nbsp;&nbsp; (c) 252 &nbsp;&nbsp; (d) 1024

**ANSWER: (c)**
```
  C0^2 + C1^2 + ... + Cn^2 = (2n)Cn

  = 10C5 = 252

  (Direct check: 1 + 25 + 100 + 100 + 25 + 1 = 252.)
```

---

### Q26
If nC4, nC5 and nC6 are in AP, then n =

(a) 7 or 14 &nbsp;&nbsp; (b) 7 only &nbsp;&nbsp; (c) 14 only &nbsp;&nbsp; (d) 9 or 12

**ANSWER: (a)**
```
  For nC(r-1), nCr, nC(r+1) in AP :   (n - 2r)^2 = n + 2 ,  here r = 5

     (n - 10)^2  =  n + 2
     n^2 - 20n + 100  =  n + 2
     n^2 - 21n + 98   =  0
     (n - 7)(n - 14)  =  0

     n = 7  or  n = 14
```

---

### Q27
If 20Cr = 20C(r+4), then r =

(a) 6 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 10 &nbsp;&nbsp; (d) 12

**ANSWER: (b)**
```
  r + (r + 4) = 20   ->   2r = 16   ->   r = 8
```

---

# PATTERN 6 — Numerically greatest term

### Q28
The numerically greatest term in the expansion of (1 + 4x)^8 when x = 1/2 is

(a) 1792 &nbsp;&nbsp; (b) 896 &nbsp;&nbsp; (c) 3584 &nbsp;&nbsp; (d) 1120

**ANSWER: (a)**
```
  y = 4x = 2 ,   |y| = 2 ,   n = 8

           (n + 1)|y|        9 x 2        18
    k  =  ------------  =  --------  =  ------  =  6      (a whole number)
            1 + |y|          1 + 2         3

  So T6 and T7 are EQUAL and both greatest.

    T6 = 8C5 (2)^5 = 56 x 32 = 1792
    T7 = 8C6 (2)^6 = 28 x 64 = 1792
```
> **SHORTCUT:** if k comes out a whole number, TWO terms tie. If it is a
> decimal, chop the decimals off and add 1 to get the term number.

---

### Q29
In the expansion of (2 + 3x)^9 with x = 3/2, the numerically greatest term is

(a) T6 &nbsp;&nbsp; (b) T7 &nbsp;&nbsp; (c) T8 &nbsp;&nbsp; (d) T5

**ANSWER: (b)**
```
  (2 + 3x)^9 = 2^9 (1 + 3x/2)^9

  y = (3/2)(3/2) = 9/4 ,   |y| = 9/4

           10 x (9/4)        90/4         90
    k  =  -------------  =  -------  =  ------  =  6.92...
           1 + (9/4)         13/4         13

  Not a whole number, whole part 6, so the greatest term is T7.
```

---

# PATTERN 7 — Divisibility, remainders, last digits

### Q30
The remainder when 7^103 is divided by 25 is

(a) 7 &nbsp;&nbsp; (b) 18 &nbsp;&nbsp; (c) 20 &nbsp;&nbsp; (d) 24

**ANSWER: (b)**
```
  7^103 = 7 x (7^2)^51 = 7 x (50 - 1)^51 = 7(50K - 1) = 350K - 7

  350K is a multiple of 25, so  7^103 = 25M - 7 = 25(M - 1) + 18
```
> **SHORTCUT:** a negative leftover is not a remainder. Add the divisor:
> -7 + 25 = 18.

---

### Q31
The last digit of 7^100 is

(a) 1 &nbsp;&nbsp; (b) 3 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 9

**ANSWER: (a)**
```
  7^100 = (7^2)^50 = 49^50 = (50 - 1)^50 = 50K + 1

  Any multiple of 50 ends in 0, so the number ends in 1.
```

---

### Q32
For every positive integer n, 2^(4n) - 1 is divisible by

(a) 7 &nbsp;&nbsp; (b) 15 &nbsp;&nbsp; (c) 17 &nbsp;&nbsp; (d) 31

**ANSWER: (b)**
```
  2^(4n) = 16^n = (15 + 1)^n = 15K + 1

  So  2^(4n) - 1 = 15K
```
> **SHORTCUT:** turn the base into (divisor +/- 1). 16 = 15 + 1, 49 = 50 - 1,
> 9 = 8 + 1, 8 = 7 + 1.

---

### Q33
The last two digits of 3^400 are

(a) 01 &nbsp;&nbsp; (b) 03 &nbsp;&nbsp; (c) 09 &nbsp;&nbsp; (d) 81

**ANSWER: (a)**
```
  3^400 = (3^2)^200 = 9^200 = (10 - 1)^200

  Only the last two terms matter for the last two digits :

     ... + 200C199 (10)(-1)^199 + (-1)^200
   = (multiple of 100) - 2000 + 1

  -2000 is itself a multiple of 100, so the whole thing is 100K + 1.
```

---

# PATTERN 8 — Rational index and approximations

### Q34
The coefficient of x^r in the expansion of (1 - x)^(-2) is

(a) r &nbsp;&nbsp; (b) r + 1 &nbsp;&nbsp; (c) (-1)^r (r+1) &nbsp;&nbsp; (d) 2r

**ANSWER: (b)**
```
  (1 - x)^(-2) = 1 + 2x + 3x^2 + 4x^3 + ...

  The coefficient of x^r is (r + 1).
```
> **SHORTCUT — the four to memorise:**
> (1-x)^-1 -> 1 ; (1+x)^-1 -> (-1)^r ;
> (1-x)^-2 -> (r+1) ; (1+x)^-2 -> (-1)^r (r+1).

---

### Q35
The expansion of (2 + 3x)^(-2/3) is valid for

(a) |x| < 1 &nbsp;&nbsp; (b) |x| < 2/3 &nbsp;&nbsp; (c) |x| < 3/2 &nbsp;&nbsp; (d) all x

**ANSWER: (b)**
```
  (2 + 3x)^(-2/3) = 2^(-2/3) (1 + 3x/2)^(-2/3)

  Need  | 3x/2 | < 1     ->    | x | < 2/3
```

---

### Q36
The coefficient of x^3 in the expansion of (1 - 2x)^(-1/2) is

(a) 3/2 &nbsp;&nbsp; (b) 5/2 &nbsp;&nbsp; (c) 5/16 &nbsp;&nbsp; (d) 15/8

**ANSWER: (b)**
```
  (1 - y)^(-1/2) = 1 + y/2 + 3y^2/8 + 5y^3/16 + ...

  Put y = 2x :   (5/16)(8x^3) = (5/2) x^3
```

---

### Q37
Using the binomial theorem, the approximate value of (1.02)^(-3) is

(a) 0.94 &nbsp;&nbsp; (b) 0.9424 &nbsp;&nbsp; (c) 1.06 &nbsp;&nbsp; (d) 1.0612

**ANSWER: (b)**
```
  n = -3 , x = 0.02

  (1 + x)^n = 1 + nx + [n(n-1)/2] x^2
            = 1 + (-3)(0.02) + [(-3)(-4)/2](0.0004)
            = 1 - 0.06 + 6(0.0004)
            = 1 - 0.06 + 0.0024
            = 0.9424
```

---

### Q38
The sum of the infinite series
1 + 1/3 + (1 x 3)/(3 x 6) + (1 x 3 x 5)/(3 x 6 x 9) + ... is

(a) sqrt(2) &nbsp;&nbsp; (b) sqrt(3) &nbsp;&nbsp; (c) 3/2 &nbsp;&nbsp; (d) 2

**ANSWER: (b)**
```
  A = 1/3 ,  B = 1/6

     B          1/6
   -----  =  ---------  =  3/2         ->    q/p = 2(3/2) - 1 = 2
    A^2         1/9

     p/q = 1/2       z = (1/3)/(1/2) = 2/3

  SUM = (1 - 2/3)^(-1/2) = (1/3)^(-1/2) = sqrt(3)
```

---

### Q39
The 6th term in the expansion of (1 - x)^(-3) is

(a) 15 x^5 &nbsp;&nbsp; (b) 21 x^5 &nbsp;&nbsp; (c) 28 x^5 &nbsp;&nbsp; (d) 6 x^5

**ANSWER: (b)**
```
  For (1 - x)^(-n) the general term is (n + r - 1)Cr x^r , with n = 3.

  6th term  ->  r = 5 :   (3 + 5 - 1)C5 x^5 = 7C5 x^5 = 21 x^5
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------+----------------------------------+
  |  WHEN YOU SEE                    |  DO THIS IMMEDIATELY             |
  +----------------------------------+----------------------------------+
  |  "coefficient of x^k"            |  general term, collect x's,      |
  |                                  |  set power = k, solve for r      |
  +----------------------------------+----------------------------------+
  |  "independent of x" /            |  same thing with power = 0       |
  |  "constant term"                 |                                  |
  +----------------------------------+----------------------------------+
  |  r comes out a fraction          |  answer is 0 - that power does   |
  |  or negative                     |  not occur. Move on.             |
  +----------------------------------+----------------------------------+
  |  "middle term", n even           |  T(n/2 + 1) , one term only      |
  +----------------------------------+----------------------------------+
  |  "middle term", n odd            |  TWO terms. Never one.           |
  +----------------------------------+----------------------------------+
  |  "greatest coefficient"          |  nC(n/2) if n even,              |
  |                                  |  nC((n-1)/2) if n odd            |
  +----------------------------------+----------------------------------+
  |  "numerically greatest term"     |  take a^n out, then              |
  |                                  |  k = (n+1)|y| / (1 + |y|)        |
  +----------------------------------+----------------------------------+
  |  k is a whole number             |  TWO terms tie: T(k) and T(k+1)  |
  +----------------------------------+----------------------------------+
  |  a trinomial like 1 + 2x + x^2   |  factor it: (1 + x)^2. Always    |
  |                                  |  check for a perfect square.     |
  +----------------------------------+----------------------------------+
  |  "sum of the coefficients"       |  put every variable = 1          |
  +----------------------------------+----------------------------------+
  |  (a+x)^n + (a-x)^n               |  even r's survive:  n/2 + 1      |
  |                                  |  terms if n even                 |
  +----------------------------------+----------------------------------+
  |  ratio of two nCr's              |  nCr/nC(r-1) = (n-r+1)/r .       |
  |                                  |  Never compute 44C20.            |
  +----------------------------------+----------------------------------+
  |  1, 2, 1 in front of nCr's       |  apply Pascal twice -> (n+2)Cr   |
  +----------------------------------+----------------------------------+
  |  "divisible by D" or             |  rewrite the base as (D + 1)     |
  |  "find the remainder"            |  or (D - 1) and expand           |
  +----------------------------------+----------------------------------+
  |  a negative leftover             |  add the divisor to make it      |
  |                                  |  positive                        |
  +----------------------------------+----------------------------------+
  |  a fractional or negative power  |  force the bracket to start      |
  |                                  |  with 1, then state |x| < 1      |
  +----------------------------------+----------------------------------+
  |  "approximate value"             |  keep only 1 + nx , sometimes    |
  |                                  |  one more term                   |
  +----------------------------------+----------------------------------+
  |  an infinite series of products  |  insert the leading 1, find      |
  |  like 1.3.5 / 5.10.15            |  p/q and z, answer (1-z)^(-p/q)  |
  +----------------------------------+----------------------------------+
  |  Nothing works and it is EAPCET  |  GUESS. There is no negative     |
  |                                  |  marking. Never leave a blank.   |
  +----------------------------------+----------------------------------+
```
