# Theory of Equations — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use it — that is what the exam actually tests.

---

# 1. BASIC FACTS ABOUT ROOTS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   f(x) = a0 x^n + a1 x^(n-1) + ... + a(n-1) x + an  =  0             |
  |                                                                      |
  |   degree n ,  a0 not 0                                               |
  |                                                                      |
  |   FUNDAMENTAL THEOREM OF ALGEBRA                                     |
  |      -> f(x) = 0 has at least one complex root                       |
  |      -> f(x) = 0 has EXACTLY n roots, counting multiplicity          |
  |      -> f(x) = a0 (x - A1)(x - A2) ... (x - An)                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Fact | When to use |
|------|-------------|
| A is a root  <=>  f(A) = 0  <=>  (x - A) divides f(x) | "verify that 2 is a root" |
| Degree n  ->  exactly n roots (with multiplicity) | "how many roots?" 2-mark |
| Distinct roots may be fewer than n | "how many DISTINCT roots?" |
| A is a repeated root  <=>  f(A) = 0 AND f'(A) = 0 | "two roots are equal", fast MCQ method |
| Odd degree + real coefficients -> at least one REAL root | theory 2-mark |
| Remainder when f(x) is divided by (x - k) is f(k) | synthetic division checks |

---

# 2. RELATION BETWEEN ROOTS AND COEFFICIENTS — THE CORE

## 2.1 Quadratic

```
  +--------------------------------------------------+
  |   a x^2 + b x + c = 0        roots  A , B        |
  |                                                  |
  |       s1 = A + B   =  - b / a                    |
  |       s2 = A B     =  + c / a                    |
  +--------------------------------------------------+
```

## 2.2 Cubic  — MEMORISE THIS ONE

```
  +--------------------------------------------------+
  |   a x^3 + b x^2 + c x + d = 0     roots A, B, C  |
  |                                                  |
  |       s1 = A + B + C        =  - b / a           |
  |       s2 = AB + BC + CA     =  + c / a           |
  |       s3 = A B C            =  - d / a           |
  |                                                  |
  |   Equation from roots:                           |
  |       x^3 - s1 x^2 + s2 x - s3  =  0             |
  +--------------------------------------------------+
```

## 2.3 Biquadratic (quartic) — MEMORISE THIS ONE TOO

```
  +--------------------------------------------------------------+
  |  a x^4 + b x^3 + c x^2 + d x + e = 0    roots A, B, C, D     |
  |                                                              |
  |   s1 = A+B+C+D                     =  - b / a                |
  |   s2 = AB+AC+AD+BC+BD+CD           =  + c / a    (6 terms)   |
  |   s3 = ABC+ABD+ACD+BCD             =  - d / a    (4 terms)   |
  |   s4 = ABCD                        =  + e / a                |
  |                                                              |
  |   Equation from roots:                                       |
  |       x^4 - s1 x^3 + s2 x^2 - s3 x + s4  =  0                |
  +--------------------------------------------------------------+
```

## 2.4 General degree n

```
  +--------------------------------------------------------------+
  |                                r      a(r)                   |
  |          s(r)   =    ( -1 )    x    -------                  |
  |                                       a(0)                   |
  |                                                              |
  |   s(r) = sum of products of the roots taken r at a time       |
  |   s(r) has  nCr  terms                                        |
  |                                                              |
  |   SIGNS ALTERNATE:   -  +  -  +  -  +  ...                   |
  |                      starting with MINUS for s1              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| s1 = -b/a | "find the sum of the roots" |
| s2 = +c/a | "find the sum of products of roots taken two at a time" |
| s3 = -d/a (cubic) | "find the product of the roots" of a cubic |
| s4 = +e/a (quartic) | "find the product of the roots" of a quartic |
| x^3 - s1 x^2 + s2 x - s3 = 0 | "form the equation whose roots are ..." |
| sr = (-1)^r ar/a0 | degree 5 and above, theory questions |

---

# 3. SYMMETRIC FUNCTIONS OF THE ROOTS (cubic, roots A, B, C)

```
  +--------------------------------------------------------------+
  |                                                              |
  |   A^2 + B^2 + C^2            =  s1^2  -  2 s2                |
  |                                                              |
  |   1/A + 1/B + 1/C            =  s2 / s3                      |
  |                                                              |
  |   1/(AB) + 1/(BC) + 1/(CA)   =  s1 / s3                      |
  |                                                              |
  |   1/A^2 + 1/B^2 + 1/C^2      =  ( s2^2 - 2 s1 s3 ) / s3^2    |
  |                                                              |
  |   A^3 + B^3 + C^3            =  s1^3 - 3 s1 s2 + 3 s3        |
  |                                                              |
  |   A^2B + A^2C + B^2A + B^2C + C^2A + C^2B                    |
  |                              =  s1 s2  -  3 s3               |
  |                                                              |
  |   (A-B)^2+(B-C)^2+(C-A)^2    =  2 s1^2  -  6 s2              |
  |                                                              |
  +--------------------------------------------------------------+
```

For a quartic:  `sum of squares = s1^2 - 2 s2`  and  `sum of reciprocals = s3 / s4`.

| Formula | When to use |
|---------|-------------|
| s1^2 - 2 s2 | "find the sum of the squares of the roots" |
| s2 / s3 | "find the sum of the reciprocals of the roots" |
| s1^3 - 3 s1 s2 + 3 s3 | "find the sum of the cubes of the roots" |
| s1 s2 - 3 s3 | the mixed A^2B type sum |

**Newton's shortcut for power sums** (S(k) = A^k + B^k + C^k):

```
  S1 = s1
  S2 = s1 S1 - 2 s2
  S3 = s1 S2 - s2 S1 + 3 s3
  S4 = s1 S3 - s2 S2 + s3 S1        (and so on)
```

---

# 4. ASSUMING THE ROOTS WHEN A RELATION IS GIVEN

```
  +--------------------------------------------------------------------------+
  |  RELATION GIVEN                     |  ASSUME THE ROOTS AS               |
  |-------------------------------------|------------------------------------|
  |  three roots in AP                  |  a - d ,  a ,  a + d               |
  |  four roots in AP                   |  a-3d , a-d , a+d , a+3d           |
  |  three roots in GP                  |  a/r  ,  a  ,  a r                 |
  |  four roots in GP                   |  a/r^3 , a/r , a r , a r^3         |
  |  three roots in HP                  |  put x = 1/y FIRST, then AP        |
  |  two roots equal                    |  a , a , b                         |
  |  all three roots equal              |  a , a , a                         |
  |  sum of two roots is zero           |  a , -a , c                        |
  |  one root is double another         |  a , 2a , b                        |
  |  roots in the ratio p : q           |  p k , q k , c                     |
  |  one root is reciprocal of another  |  a , 1/a , c                       |
  |  product of two roots is m (quartic)|  A,B,C,D with AB = m, CD = s4/m    |
  |  two pairs of equal roots (quartic) |  ( x^2 + p x + q )^2 = 0           |
  +--------------------------------------------------------------------------+
```

## The three middle-root shortcuts (fastest marks in the chapter)

```
  +--------------------------------------------------------------+
  |   For  a x^3 + b x^2 + c x + d = 0 :                         |
  |                                                              |
  |     roots in AP    ->   middle root  =   - b / (3a)          |
  |                                                              |
  |     roots in GP    ->   middle root  =   cube root of (-d/a) |
  |                                                              |
  |     roots in HP    ->   middle root  =   - 3d / c            |
  +--------------------------------------------------------------+
```

| Result | When to use |
|--------|-------------|
| middle root = -b/(3a) | AP question — gives one root in 5 seconds |
| middle root = cube root of (-d/a) | GP question — gives one root in 5 seconds |
| middle root = -3d/c | HP question — gives one root in 5 seconds |
| pq b^2 = (p+q)^2 ac | quadratic whose roots are in the ratio p : q |
| For a, -a, c in a cubic: c = -b/a(coeff) and a^2 = -c/a(coeff) | sum-of-two-roots-zero |
| For a, 1/a, c in a cubic: c = -d/a | one root is the reciprocal of another |

---

# 5. NATURE OF THE ROOTS — CONJUGATE PAIRS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  REAL coefficients      ->   imaginary roots occur in CONJUGATE PAIRS    |
  |                              if  p + i q  is a root, so is  p - i q      |
  |                                                                          |
  |            quadratic factor:   x^2 - 2p x + ( p^2 + q^2 )                |
  |                                                                          |
  |--------------------------------------------------------------------------|
  |                                                                          |
  |  RATIONAL coefficients  ->   surd roots occur in CONJUGATE PAIRS         |
  |                              if  p + sqrt(q)  is a root, so is p - sqrt(q)|
  |                                                                          |
  |            quadratic factor:   x^2 - 2p x + ( p^2 - q )                  |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

Watch the sign in the constant: **plus** for imaginary, **minus** for surd.

| Fact | When to use |
|------|-------------|
| p + iq root -> p - iq root (real coeffs) | "solve, given 2 + i is a root" |
| p + sqrt(q) root -> p - sqrt(q) root (rational coeffs) | "solve, given 1 + sqrt(2) is a root" |
| Number of imaginary roots is always EVEN | theory 2-mark |
| Odd degree, real coefficients -> at least 1 real root | theory 2-mark |
| Factor = x^2 - 2p x + (p^2 + q^2) | build the real quadratic factor from an imaginary root |
| Factor = x^2 - 2p x + (p^2 - q) | build the rational quadratic factor from a surd root |

---

# 6. TRANSFORMATION OF EQUATIONS

```
  +--------------------------------------------------------------------------+
  |  WANTED ROOTS         |  SUBSTITUTE       |  SHORTCUT                    |
  |-----------------------|-------------------|------------------------------|
  |  k A , k B , k C      |  x -> x / k       |  multiply coefficients by    |
  |                       |                   |  1, k, k^2, k^3, ...         |
  |-----------------------|-------------------|------------------------------|
  |  A + k , B + k , ...  |  x -> x - k       |  Horner with  -k             |
  |  (INCREASED by k)     |                   |                              |
  |-----------------------|-------------------|------------------------------|
  |  A - k , B - k , ...  |  x -> x + k       |  Horner with  +k             |
  |  (DIMINISHED by k)    |                   |                              |
  |-----------------------|-------------------|------------------------------|
  |  -A , -B , -C         |  x -> -x          |  flip the sign of every      |
  |                       |                   |  ODD-power term              |
  |-----------------------|-------------------|------------------------------|
  |  1/A , 1/B , 1/C      |  x -> 1/x , then  |  REVERSE the list of         |
  |                       |  multiply by x^n  |  coefficients                |
  |-----------------------|-------------------|------------------------------|
  |  A^2 , B^2 , C^2      |  separate odd and |  put the odd-power terms on  |
  |                       |  even powers,     |  one side, square, then      |
  |                       |  then square      |  replace x^2 by y            |
  |-----------------------|-------------------|------------------------------|
  |  1/(A+k) type         |  x -> (1 - k y)/y |  rare; do it by substitution |
  +--------------------------------------------------------------------------+
```

## Squares of the roots — the s-formula version (use it to CHECK your answer)

```
  +--------------------------------------------------------------+
  |  new s1  =  s1^2 - 2 s2                                      |
  |  new s2  =  s2^2 - 2 s1 s3                                   |
  |  new s3  =  s3^2                                             |
  +--------------------------------------------------------------+
```

---

# 7. SYNTHETIC DIVISION AND REMOVING A TERM

```
  +--------------------------------------------------------------------------+
  |  SYNTHETIC DIVISION by (x - k)                                           |
  |                                                                          |
  |     k |   a0     a1      a2      a3                                      |
  |       |         k b0    k b1    k b2                                     |
  |       +---------------------------------                                 |
  |          b0=a0   b1      b2      R                                       |
  |                                                                          |
  |  Bring down, multiply by k, add. R = f(k) = the remainder.               |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |  HORNER'S METHOD - diminish the roots by k                               |
  |                                                                          |
  |  Divide by (x - k) again and again, keeping every remainder.             |
  |  The remainders READ FROM THE BOTTOM UP are the new coefficients.        |
  |                                                                          |
  |  For roots INCREASED by k, run the whole thing with  -k .                |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |  REMOVE THE SECOND TERM of  a0 x^n + a1 x^(n-1) + ... = 0                |
  |                                                                          |
  |                        - a1                                              |
  |        diminish by  h = --------                                         |
  |                          n a0                                            |
  |                                                                          |
  |  cubic  :  h = -a1/(3 a0)        quartic :  h = -a1/(4 a0)               |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| synthetic division | dividing out a known root, fast |
| Horner (repeated) | "roots diminished / increased by k" 4-mark |
| h = -a1/(n a0) | "remove the second term" 4-mark |
| Remainder = f(k) | checking your division is right |

---

# 8. RECIPROCAL EQUATIONS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  DEFINITION:  A is a root  =>  1/A is a root.                            |
  |                                                                          |
  |  CLASS ONE :   a(i) =  a(n-i)     coefficients read the same backwards   |
  |  CLASS TWO :   a(i) = -a(n-i)     same size, opposite signs              |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +----------------+-----------+-------------------------------------------+
  |  CLASS         |  DEGREE   |  FREE ROOT(S) / FIRST MOVE                |
  +----------------+-----------+-------------------------------------------+
  |  ONE           |  ODD      |  x = -1 is a root; divide out (x + 1)     |
  |  ONE           |  EVEN     |  no free root; go to the y-substitution   |
  |  TWO           |  ODD      |  x = +1 is a root; divide out (x - 1)     |
  |  TWO           |  EVEN     |  x = +1 and x = -1; divide out (x^2 - 1); |
  |                |           |  the middle coefficient must be 0         |
  +----------------+-----------+-------------------------------------------+

  +--------------------------------------------------------------------------+
  |  THE STANDARD METHOD (class one, even degree n)                          |
  |                                                                          |
  |   1.  Note that x = 0 is not a root, then divide throughout by x^(n/2).  |
  |   2.  Group into ( x^k + 1/x^k ) brackets.                               |
  |   3.  Put   y = x + 1/x .                                                |
  |   4.  Solve the resulting equation in y.                                 |
  |   5.  For each y solve   x^2 - y x + 1 = 0 .                             |
  |                                                                          |
  |   IDENTITIES YOU NEED:                                                   |
  |        x^2 + 1/x^2  =  y^2 - 2                                           |
  |        x^3 + 1/x^3  =  y^3 - 3y                                          |
  |        x^4 + 1/x^4  =  y^4 - 4y^2 + 2                                    |
  |        x   - 1/x    =  sqrt( y^2 - 4 )                                   |
  +--------------------------------------------------------------------------+
```

| Fact | When to use |
|------|-------------|
| palindrome coefficients -> class one | identifying the type, 2-mark |
| class one + odd degree -> x = -1 | first move on a degree-5 reciprocal |
| class two + odd degree -> x = +1 | first move |
| class two + even degree -> x = 1 and x = -1 | first move |
| y = x + 1/x, x^2 + 1/x^2 = y^2 - 2 | the 7-mark reciprocal question |
| every reciprocal equation of odd degree has +1 or -1 as a root | theory 2-mark |

---

# 9. DESCARTES' RULE OF SIGNS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  p = number of sign changes in  f(x)                                     |
  |        -> number of POSITIVE real roots is  p , p-2 , p-4 , ...          |
  |                                                                          |
  |  q = number of sign changes in  f(-x)                                    |
  |        -> number of NEGATIVE real roots is  q , q-2 , q-4 , ...          |
  |                                                                          |
  |  Number of imaginary roots  >=  n - p - q                                |
  |                                                                          |
  |  If p = 0 there are NO positive roots.  If p = 1 there is EXACTLY one.   |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Fact | When to use |
|------|-------------|
| count sign changes in f(x) | "maximum number of positive real roots" |
| count sign changes in f(-x) | "maximum number of negative real roots" |
| all coefficients positive -> no positive real root | instant MCQ |
| x^(2n) + ... all positive -> no real roots at all | instant MCQ |

---

# 10. USEFUL QUADRATIC RESULTS THAT KEEP APPEARING HERE

```
  +--------------------------------------------------------------+
  |   Equation from sum S and product P:                         |
  |                                                              |
  |            x^2  -  S x  +  P   =   0                         |
  |                                                              |
  |   Discriminant  D = b^2 - 4ac                                |
  |        D > 0 and a perfect square  ->  real, rational, distinct|
  |        D > 0 not a perfect square  ->  real, irrational       |
  |        D = 0                       ->  real and EQUAL         |
  |        D < 0                       ->  imaginary (conjugates) |
  |                                                              |
  |   x + 1/x = y    ->    x^2 - y x + 1 = 0                     |
  +--------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
   1.   s1 = -b/a ,  s2 = +c/a ,  s3 = -d/a          (cubic)

   2.   s1 = -b/a , s2 = +c/a , s3 = -d/a , s4 = +e/a  (quartic)

   3.   Equation from roots:  x^3 - s1 x^2 + s2 x - s3 = 0

   4.   Sum of squares of roots  =  s1^2 - 2 s2

   5.   Sum of reciprocals       =  s2 / s3

   6.   Roots in AP  ->  a - d , a , a + d      (start with the SUM)

   7.   Roots in GP  ->  a/r , a , a r          (start with the PRODUCT)

   8.   Roots in HP  ->  put x = 1/y first, then use AP

   9.   Imaginary roots in pairs:   factor  x^2 - 2p x + (p^2 + q^2)
        Surd roots in pairs     :   factor  x^2 - 2p x + (p^2 - q)

  10.   Reciprocals of the roots  ->  REVERSE the coefficients
        k times the roots        ->  multiply coefficients by 1, k, k^2, ...
        Negatives of the roots   ->  flip the sign of odd-power terms

  11.   Remove the second term  ->  diminish the roots by  h = -a1/(n a0)

  12.   Reciprocal equation:  put y = x + 1/x  with  x^2 + 1/x^2 = y^2 - 2
```
