# Binomial Theorem — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. nCr — THE BUILDING BLOCK

```
  +--------------------------------------------------------------+
  |                                                              |
  |                   n !                                        |
  |    nCr  =  ------------------                                |
  |              r ! (n - r) !                                   |
  |                                                              |
  |  FAST WAY (use this in the exam):                            |
  |                                                              |
  |              n (n-1) (n-2) ... (r factors)                   |
  |    nCr  =  --------------------------------                  |
  |                  r (r-1) ... (1)                             |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| nC0 = nCn = 1 | first and last coefficient |
| nC1 = nC(n-1) = n | second and second-last coefficient |
| nCr = nC(n-r) | to make the arithmetic shorter (12C8 -> 12C4) |
| nCr = nCs => r = s or r + s = n | "if 21Cr = 21C(r+5), find r" |
| nC(r-1) + nCr = (n+1)Cr | Pascal's rule; any "prove" question |
| nCr / nC(r-1) = (n - r + 1)/r | greatest term, AP/GP coefficient questions |
| r x nCr = n x (n-1)C(r-1) | proving C1 + 2C2 + ... = n 2^(n-1) |
| nCr/(r+1) = (n+1)C(r+1)/(n+1) | proving C0 + C1/2 + ... series |

**Values worth memorising:**

| n | nC(n/2) or middle values |
|---|--------------------------|
| 6 | 6C3 = 20 |
| 8 | 8C4 = 70 |
| 9 | 9C4 = 9C5 = 126 |
| 10 | 10C5 = 252 |
| 11 | 11C5 = 11C6 = 462 |
| 12 | 12C6 = 924 |
| 14 | 14C7 = 3432 |
| 15 | 15C7 = 15C8 = 6435 |
| 20 | 20C10 = 184756 |

---

# 2. PASCAL'S TRIANGLE

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

| Fact | When to use |
|------|-------------|
| Each number = sum of the two above it | quick expansion for small n |
| Row n has n + 1 entries | "how many terms?" |
| Row n sums to 2^n | sum-of-coefficients questions |
| Row n is a palindrome | this IS nCr = nC(n-r) |
| Entry number r (from r = 0) is nCr | reading coefficients off directly |

> Use the triangle only up to about n = 8. After that, use the general term.

---

# 3. THE BINOMIAL THEOREM (POSITIVE INTEGRAL INDEX)

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  (a + x)^n = nC0 a^n + nC1 a^(n-1) x + nC2 a^(n-2) x^2            |
  |                      + ... + nCr a^(n-r) x^r + ... + nCn x^n     |
  |                                                                  |
  |  (a - x)^n = nC0 a^n - nC1 a^(n-1) x + nC2 a^(n-2) x^2 - ...      |
  |                      + (-1)^r nCr a^(n-r) x^r + ...              |
  |                                                                  |
  |  (1 + x)^n = 1 + nC1 x + nC2 x^2 + ... + nCn x^n                 |
  |                                                                  |
  |  (1 - x)^n = 1 - nC1 x + nC2 x^2 - ... + (-1)^n nCn x^n          |
  |                                                                  |
  +------------------------------------------------------------------+

  IN EVERY TERM :  (power of a) + (power of x)  =  n
```

| Formula | When to use |
|---------|-------------|
| Number of terms in (a + x)^n = n + 1 | 2-mark question |
| Number of terms in (a + b + c)^n = (n+1)(n+2)/2 | 2-mark question |
| Terms in (a+x)^n + (a-x)^n : n/2 + 1 (n even), (n+1)/2 (n odd) | EAPCET |
| Terms in (a+x)^n - (a-x)^n : n/2 (n even), (n+1)/2 (n odd) | EAPCET |
| Sum of coefficients = put every variable equal to 1 | 2-mark question |
| Sum of coefficients of (ax + by)^n = (a + b)^n | 2-mark question |

---

# 4. THE GENERAL TERM — THE MOST IMPORTANT BOX IN THE CHAPTER

```
  +==================================================================+
  |                                                                  |
  |        T(r + 1)   =   nCr   a^(n - r)   x^r                      |
  |                                                                  |
  |        in the expansion of  (a + x)^n                            |
  |                                                                  |
  |        r  =  (term number)  -  1                                 |
  |                                                                  |
  +==================================================================+
```

| Question asked | What you set | When to use |
|----------------|--------------|-------------|
| "Find the p-th term" | r = p - 1 | direct 2-mark |
| "Coefficient of x^k" | power of x = k, solve for r | 4-mark |
| "Term independent of x" | power of x = 0, solve for r | 4-mark |
| "Term containing x^k" | power of x = k, then write the whole term | 4-mark |
| "General term" | leave the answer in r | 2-mark |

```
  IF r COMES OUT AS A FRACTION OR A NEGATIVE NUMBER:

      that power of x does NOT occur in the expansion.
      The coefficient is 0.  Write that. It is the full answer.
```

**Term from the END:** the p-th term from the end of (a + x)^n
= the (n - p + 2)-th term from the beginning.

---

# 5. MIDDLE TERM

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   n EVEN  ->  ONE middle term                                    |
  |                                                                  |
  |          T( n/2 + 1 )     use  r = n/2                           |
  |                                                                  |
  |   n ODD   ->  TWO middle terms                                   |
  |                                                                  |
  |          T( (n+1)/2 )  and  T( (n+3)/2 )                         |
  |          use  r = (n-1)/2   and   r = (n+1)/2                    |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Case | Example | Middle term(s) |
|------|---------|----------------|
| n = 10 (even) | (1 + x)^10 | T6 only |
| n = 8 (even) | (3 + x/2)^8 | T5 only |
| n = 9 (odd) | (3x - x^3/6)^9 | T5 and T6 |
| n = 7 (odd) | (2x + 3y)^7 | T4 and T5 |

**Coefficient of the middle term of (1 + x)^(2n):**

```
  +--------------------------------------------------------------+
  |                                                              |
  |                    1 x 3 x 5 x ... x (2n - 1)                |
  |    (2n)Cn   =   ------------------------------- x 2^n        |
  |                              n !                             |
  |                                                              |
  |    It is also the GREATEST coefficient in that expansion.     |
  +--------------------------------------------------------------+
```

---

# 6. RATIO OF CONSECUTIVE TERMS

```
  +--------------------------------------------------------------+
  |                                                              |
  |     T(r+1)       n - r + 1        x                          |
  |    --------  =  ------------  x  ---     for  (a + x)^n      |
  |      T(r)             r           a                          |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| T(r+1)/T(r) = [(n-r+1)/r](x/a) | numerically greatest term |
| Coefficients in AP: 2 x middle = sum of outer two | "find n" questions |
| For nC(r-1), nCr, nC(r+1) in AP: (n - 2r)^2 = n + 2 | fast shortcut |
| Coefficients in GP: (middle)^2 = product of outer two | rare, EAPCET |

---

# 7. NUMERICALLY GREATEST TERM

```
  +==================================================================+
  |                                                                  |
  |  STEP 1  Write  (a + x)^n  =  a^n (1 + y)^n   where  y = x/a     |
  |                                                                  |
  |  STEP 2  Put in the given value and find |y|                     |
  |                                                                  |
  |  STEP 3                                                          |
  |                    (n + 1) |y|                                   |
  |             k  =  --------------                                 |
  |                     1  +  |y|                                    |
  |                                                                  |
  |  STEP 4  k NOT a whole number  ->  greatest term is T(m + 1)     |
  |                                    where m = whole part of k     |
  |                                                                  |
  |          k IS a whole number   ->  T(k) and T(k+1) are EQUAL     |
  |                                    and both are greatest         |
  |                                                                  |
  |  STEP 5  Compute the term and multiply the a^n back in           |
  |                                                                  |
  +==================================================================+
```

| Point | Note |
|-------|------|
| "Numerically" | means ignore the minus sign; use \|y\| |
| Divide by (1 + \|y\|) | dividing by \|y\| alone is the classic error |
| Take a^n out FIRST | otherwise r comes out wrong |

---

# 8. GREATEST COEFFICIENT

```
  +--------------------------------------------------------------+
  |                                                              |
  |   In  (1 + x)^n :                                            |
  |                                                              |
  |   n EVEN  ->  greatest coefficient  =  nC(n/2)               |
  |                                                              |
  |   n ODD   ->  two equal greatest coefficients                |
  |                    nC((n-1)/2)  =  nC((n+1)/2)               |
  |                                                              |
  +--------------------------------------------------------------+
```

| Example | Answer |
|---------|--------|
| (1 + x)^10 | 10C5 = 252 |
| (1 + x)^12 | 12C6 = 924 |
| (1 + x)^15 | 15C7 = 15C8 = 6435 |
| (1 + x)^19 | 19C9 = 19C10 = 92378 |

> Greatest COEFFICIENT does not depend on x. Numerically greatest TERM does.

---

# 9. SUMS OF BINOMIAL COEFFICIENTS

Write C0, C1, ... for nC0, nC1, ... .

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  C0 + C1 + C2 + ... + Cn          =  2^n                         |
  |                                                                  |
  |  C0 - C1 + C2 - C3 + ...          =  0                           |
  |                                                                  |
  |  C0 + C2 + C4 + ...               =  2^(n-1)                     |
  |  C1 + C3 + C5 + ...               =  2^(n-1)                     |
  |                                                                  |
  |  C1 + 2C2 + 3C3 + ... + n Cn      =  n x 2^(n-1)                 |
  |                                                                  |
  |         C1     C2           Cn         2^(n+1) - 1               |
  |  C0 +  ---- + ---- + ... + ------  =  --------------             |
  |          2      3           n+1           n + 1                  |
  |                                                                  |
  |         C1     C2                          1                     |
  |  C0 -  ---- + ---- - ...            =  ---------                 |
  |          2      3                        n + 1                   |
  |                                                                  |
  |  C0^2 + C1^2 + C2^2 + ... + Cn^2  =  (2n)Cn                      |
  |                                                                  |
  |   C1      2C2      3C3           nCn        n(n + 1)             |
  |  ---- +  ----- +  ----- + ... + -------  =  ----------           |
  |   C0      C1        C2          C(n-1)          2                |
  |                                                                  |
  +------------------------------------------------------------------+
```

| Result | How it is proved (say this in the exam) |
|--------|------------------------------------------|
| Sum = 2^n | put x = 1 in (1 + x)^n |
| Alternating sum = 0 | put x = -1 in (1 + x)^n |
| Odd sum = even sum = 2^(n-1) | add and subtract the two above |
| C1 + 2C2 + ... = n 2^(n-1) | use r Cr = n (n-1)C(r-1) |
| C0 + C1/2 + ... | use Cr/(r+1) = (n+1)C(r+1)/(n+1) |
| Sum of squares = (2n)Cn | compare coefficient of x^n in (1+x)^n (1+x)^n |

---

# 10. DIVISIBILITY AND REMAINDERS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   (D + 1)^n   =   D x (whole number)   +   1                 |
  |                                                              |
  |   (D - 1)^n   =   D x (whole number)   +   (-1)^n            |
  |                                                              |
  |   Split the number so ONE PART IS THE DIVISOR.               |
  |                                                              |
  +--------------------------------------------------------------+
```

| Problem type | Move to make |
|--------------|--------------|
| 2^(4n) - 1 divisible by 15 | 2^4 = 16 = 15 + 1 |
| 3^(2n+2) - 8n - 9 divisible by 64 | 3^(2n+2) = 9^(n+1) = (1 + 8)^(n+1) |
| 49^n + 16n - 1 divisible by 64 | 49 = 1 + 48, and 48^2 is a multiple of 64 |
| Remainder of 7^103 by 25 | 7^102 = 49^51 = (50 - 1)^51 |
| Last digit / last two digits | make the base 10K +/- 1 or 100K +/- 1 |

> A remainder must be positive and smaller than the divisor.
> If you get -7 with divisor 25, the answer is 25 - 7 = 18.

---

# 11. BINOMIAL THEOREM FOR A RATIONAL / NEGATIVE INDEX

```
  +==================================================================+
  |                                                                  |
  |  For ANY rational n, valid ONLY when |x| < 1 :                    |
  |                                                                  |
  |                      n(n-1)         n(n-1)(n-2)                  |
  |  (1 + x)^n = 1 + nx + --------x^2 + --------------x^3 + ...      |
  |                         2 !               3 !                    |
  |                                                                  |
  |  GENERAL TERM :                                                  |
  |                                                                  |
  |               n (n-1) (n-2) ... (n - r + 1)                      |
  |   T(r+1)  =  ------------------------------- x^r                 |
  |                          r !                                     |
  |                                                                  |
  +==================================================================+
```

| Point | Note |
|-------|------|
| Infinitely many terms | there is no "last term" and no middle term |
| Bracket must start with 1 | (3 + 2x)^p -> 3^p (1 + 2x/3)^p |
| Validity | \|x\| < 1 on the ADJUSTED x, e.g. \|2x/3\| < 1 |
| No nCr | the coefficients are ordinary fractions |

## The four you must know cold

```
  +--------------------------------------------------------------+
  |                                                              |
  |  (1 - x)^(-1)  =  1 + x + x^2 + x^3 + ...                    |
  |                   general term :  x^r                        |
  |                                                              |
  |  (1 + x)^(-1)  =  1 - x + x^2 - x^3 + ...                    |
  |                   general term :  (-1)^r x^r                 |
  |                                                              |
  |  (1 - x)^(-2)  =  1 + 2x + 3x^2 + 4x^3 + ...                 |
  |                   general term :  (r + 1) x^r                |
  |                                                              |
  |  (1 + x)^(-2)  =  1 - 2x + 3x^2 - 4x^3 + ...                 |
  |                   general term :  (-1)^r (r + 1) x^r         |
  |                                                              |
  +--------------------------------------------------------------+
```

Two more, for a positive whole number n:

```
  (1 - x)^(-n)  :  general term  =  (n + r - 1)Cr  x^r

  (1 + x)^(-n)  :  general term  =  (-1)^r (n + r - 1)Cr  x^r
```

## The textbook (p/q) forms — used for infinite-series questions

```
  +------------------------------------------------------------------+
  |                                                                  |
  |                   p       p(p + q)         p(p+q)(p+2q)          |
  |  (1 - z)^(-p/q) = 1 + ---z + ---------z^2 + -------------z^3 +...|
  |                   q      2! q^2               3! q^3             |
  |                                                                  |
  |                   p       p(p - q)         p(p-q)(p-2q)          |
  |  (1 + z)^( p/q) = 1 + ---z + ---------z^2 + -------------z^3 +...|
  |                   q      2! q^2               3! q^3             |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

# 12. APPROXIMATIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   For a SMALL x :                                            |
  |                                                              |
  |        (1 + x)^n   is about   1 + n x                        |
  |                                                              |
  |   Better (two extra terms) :                                 |
  |                                                              |
  |                            n(n-1)                            |
  |        (1 + x)^n = 1 + nx + -------- x^2                     |
  |                               2                              |
  |                                                              |
  +--------------------------------------------------------------+
```

| Job | Move |
|-----|------|
| 6th root of 63 | 63 = 64(1 - 1/64), answer about 1.9948 |
| cube root of 1002 | 1002 = 1000(1 + 0.002), answer about 10.00667 |
| (1.02)^(-3) | n = -3, x = 0.02, answer about 0.9424 |
| (0.99)^5 | n = 5, x = -0.01, answer about 0.95 |

---

# 13. SUM OF AN INFINITE SERIES — THE RECIPE

```
  +==================================================================+
  |                                                                  |
  |  STEP 1  Make the series start with 1 (add the 1 yourself if     |
  |          it is missing, and subtract it at the end)              |
  |                                                                  |
  |  STEP 2  A = the term after the 1                                |
  |          B = the next term                                       |
  |                                                                  |
  |  STEP 3       q         2B                                       |
  |              ---   =  ------  -  1        then flip to get p/q   |
  |               p         A^2                                      |
  |                                                                  |
  |  STEP 4       z   =   A  /  (p/q)                                |
  |                                                                  |
  |  STEP 5   SUM  =  (1 - z)^(-p/q)                                 |
  |                                                                  |
  |  STEP 6   Answer what was actually asked                         |
  |                                                                  |
  +==================================================================+
```

**Three worked results to recognise instantly:**

| Series (after inserting the leading 1) | Sum |
|----------------------------------------|-----|
| 1 + 1/5 + 1.3/(5.10) + 1.3.5/(5.10.15) + ... | (5/3)^(1/2) |
| 1 + 1/3 + 1.3/(3.6) + 1.3.5/(3.6.9) + ... | square root of 3 |
| 1 + 3/4 + 3.5/(4.8) + 3.5.7/(4.8.12) + ... | 2 x square root of 2 |
| 1 + 4/5 + 4.7/(5.10) + 4.7.10/(5.10.15) + ... | (5/2)^(4/3) |
| 1 + 4/5 + 4.6/(5.10) + 4.6.8/(5.10.15) + ... | 25/9 |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+----------------------------------------------------------------+
  |  1 |  T(r+1) = nCr a^(n-r) x^r        and   r = (term no.) - 1       |
  +----+----------------------------------------------------------------+
  |  2 |  number of terms in (a+x)^n = n + 1                            |
  +----+----------------------------------------------------------------+
  |  3 |  nCr = nC(n-r)                                                 |
  +----+----------------------------------------------------------------+
  |  4 |  nC(r-1) + nCr = (n+1)Cr                                       |
  +----+----------------------------------------------------------------+
  |  5 |  middle term: n even -> T(n/2 + 1)                             |
  |    |               n odd  -> T((n+1)/2) and T((n+3)/2)              |
  +----+----------------------------------------------------------------+
  |  6 |  coefficient of x^k : set the power of x equal to k, find r    |
  +----+----------------------------------------------------------------+
  |  7 |  term independent of x : set the power of x equal to 0         |
  +----+----------------------------------------------------------------+
  |  8 |  T(r+1)/T(r) = [(n - r + 1)/r](x/a)                            |
  +----+----------------------------------------------------------------+
  |  9 |  greatest term :  k = (n+1)|y| / (1 + |y|)   after taking a^n  |
  |    |  outside                                                       |
  +----+----------------------------------------------------------------+
  | 10 |  C0 + C1 + ... + Cn = 2^n  ;  odd sum = even sum = 2^(n-1)     |
  +----+----------------------------------------------------------------+
  | 11 |  rational index: (1+x)^n = 1 + nx + n(n-1)x^2/2! + ... , |x|<1 |
  +----+----------------------------------------------------------------+
  | 12 |  (1-x)^-1, (1+x)^-1, (1-x)^-2, (1+x)^-2  -- the four small ones|
  +----+----------------------------------------------------------------+
```
