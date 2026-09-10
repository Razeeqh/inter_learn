# Theory of Equations — Concepts, Explained From Zero

Read this with a pen. Every worked example is written out in full — copy each one
into your notebook before you look at the next.

---

# TOPIC 1 — WHAT A POLYNOMIAL EQUATION IS

A **polynomial in x** is an expression built only from x using multiplication,
whole-number powers, and addition:

```
  f(x)  =  a0 x^n  +  a1 x^(n-1)  +  a2 x^(n-2)  + ... +  a(n-1) x  +  an
```

- `a0, a1, ... an` are the **coefficients** (ordinary numbers).
- `a0` must NOT be zero. `a0` is called the **leading coefficient**.
- `n` is the **degree** — the highest power of x.
- Setting `f(x) = 0` gives a **polynomial equation of degree n**.

| Degree | Name | Example |
|--------|------|---------|
| 1 | linear | 3x - 6 = 0 |
| 2 | quadratic | x^2 - 5x + 6 = 0 |
| 3 | **cubic** | x^3 - 6x^2 + 11x - 6 = 0 |
| 4 | **biquadratic** (quartic) | x^4 - 10x^3 + 35x^2 - 50x + 24 = 0 |
| 5 | quintic | 2x^5 + x^4 - 12x^3 - 12x^2 + x + 2 = 0 |

Almost everything in your exam is degree 3 or degree 4.

A **root** (or solution, or zero) of f(x) = 0 is a number `A` such that `f(A) = 0`.
Plug it in, get zero. That is the entire definition.

```
  Check that 2 is a root of  x^3 - 6x^2 + 11x - 6 = 0 :

        (2)^3 - 6(2)^2 + 11(2) - 6
      =   8   -   24    +  22   - 6
      =   0                            YES, 2 is a root.
```

> **TRAP:** `x^2 + 3 sqrt(x) - 1 = 0` is NOT a polynomial equation — sqrt(x) is
> x^(1/2), not a whole-number power. Neither is `2/x + x = 3` until you clear the
> fraction. Clear fractions first, then count the degree.

---

# TOPIC 2 — HOW MANY ROOTS? THE FUNDAMENTAL THEOREM OF ALGEBRA

```
  +--------------------------------------------------------------------+
  |  FUNDAMENTAL THEOREM OF ALGEBRA                                    |
  |                                                                    |
  |  Every polynomial equation of degree n >= 1 has AT LEAST ONE root  |
  |  in the set of complex numbers.                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  CONSEQUENCE (this is the one you quote in exams)                  |
  |                                                                    |
  |  A polynomial equation of degree n has EXACTLY n roots,            |
  |  counting repeated roots as many times as they repeat.             |
  +--------------------------------------------------------------------+
```

**Why "at least one" becomes "exactly n":**

If `A` is a root, then `(x - A)` divides `f(x)`, so `f(x) = (x - A) g(x)` where
`g(x)` has degree n-1. Apply the theorem again to `g(x)`, and again, and again.
After n steps:

```
  f(x)  =  a0 (x - A1)(x - A2)(x - A3) ... (x - An)
```

n brackets, so n roots. This is called **factorising completely over the complex
numbers**, and it is always possible.

### Multiplicity

If a factor repeats, the root repeats.

```
  (x - 3)^2 (x + 1) = 0     degree 3

  Roots: 3, 3, -1     "3 is a root of MULTIPLICITY 2" (a double root)

  Count = 3 roots.  Not 2.
```

**WORKED EXAMPLE 2.1** — Write down the degree, roots and multiplicities of
`(x - 1)^3 (x + 2)^2 (x - 5) = 0`.

```
  Degree  = 3 + 2 + 1  =  6
  Roots   = 1 (multiplicity 3),  -2 (multiplicity 2),  5 (multiplicity 1)
  Total number of roots counted with multiplicity = 6.   CORRECT.
```

> **TRAP:** "How many roots?" and "how many DISTINCT roots?" are different
> questions. Above: 6 roots, but only 3 distinct roots. Read the word.

---

# TOPIC 3 — RELATION BETWEEN THE ROOTS AND THE COEFFICIENTS

This is the engine of the chapter. Everything else plugs into it.

### Where it comes from (the quadratic you already know)

If `x^2 - 5x + 6 = 0` has roots 2 and 3, then the equation must be

```
  (x - 2)(x - 3) = 0
   x^2 - (2 + 3)x + (2)(3) = 0
   x^2 -    5   x  +   6   = 0
```

So the middle coefficient is **minus the sum**, and the last is **plus the product**.
The same expansion, done for degree 3 and degree 4, gives everything below.

### THE CUBIC

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     a x^3 + b x^2 + c x + d = 0        with roots  A, B, C           |
  |                                                                      |
  |     s1  =  A + B + C           =  - b / a       (sum of roots)       |
  |                                                                      |
  |     s2  =  AB + BC + CA        =  + c / a       (two at a time)      |
  |                                                                      |
  |     s3  =  ABC                 =  - d / a       (all three)          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Because expanding `a(x - A)(x - B)(x - C)` gives

```
  a [ x^3  -  s1 x^2  +  s2 x  -  s3 ]  =  0
```

Notice the pattern of signs: `- + - `. They **alternate, starting with minus**.

### THE BIQUADRATIC (QUARTIC)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  a x^4 + b x^3 + c x^2 + d x + e = 0     with roots  A, B, C, D      |
  |                                                                      |
  |  s1 = A+B+C+D                        =  - b / a                      |
  |                                                                      |
  |  s2 = AB+AC+AD+BC+BD+CD              =  + c / a     (6 terms)        |
  |                                                                      |
  |  s3 = ABC+ABD+ACD+BCD                =  - d / a     (4 terms)        |
  |                                                                      |
  |  s4 = ABCD                           =  + e / a                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

How many terms does s2 have for a quartic? Choose 2 roots out of 4 = 6 terms.
s3: choose 3 out of 4 = 4 terms. That is your check that you have not missed one.

### THE GENERAL DEGREE n

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   a0 x^n + a1 x^(n-1) + a2 x^(n-2) + ... + an = 0                    |
  |                                                                      |
  |                                    r     a(r)                        |
  |         s(r)   =    ( -1 )   x   -------                             |
  |                                    a(0)                              |
  |                                                                      |
  |   where s(r) = the sum of the products of the roots taken r at a time |
  |                                                                      |
  |   s1 = -a1/a0     s2 = +a2/a0     s3 = -a3/a0     s4 = +a4/a0  ...   |
  |                                                                      |
  +----------------------------------------------------------------------+

  s(r) has  nCr  terms in it.
```

**WORKED EXAMPLE 3.1** — For `2x^4 - 5x^3 + 7x^2 - 3x + 8 = 0`, write s1, s2, s3, s4.

```
  a = 2 ,  b = -5 ,  c = 7 ,  d = -3 ,  e = 8

  s1 = -b/a = -(-5)/2 =  5/2
  s2 = +c/a =    7/2
  s3 = -d/a = -(-3)/2 =  3/2
  s4 = +e/a =    8/2  =  4
```

**WORKED EXAMPLE 3.2** — Form the monic cubic equation whose roots are 2, 3, -4.

```
  s1 = 2 + 3 + (-4)                    =  1
  s2 = (2)(3) + (3)(-4) + (-4)(2)
     =    6   +   (-12) +   (-8)       = -14
  s3 = (2)(3)(-4)                      = -24

  Equation:   x^3 - s1 x^2 + s2 x - s3 = 0

              x^3 -  1 x^2 - 14 x + 24 = 0

  CHECK by substituting:
     x = 2  :   8  -  4 - 28 + 24 = 0     YES
     x = 3  :  27  -  9 - 42 + 24 = 0     YES
     x = -4 : -64 - 16 + 56 + 24 = 0      YES
```

**WORKED EXAMPLE 3.3** — If 1, 2, 3, 4 are the roots of
`x^4 + a x^3 + b x^2 + c x + d = 0`, find a, b, c, d.

```
  s1 = 1+2+3+4 = 10
  s2 = (1)(2)+(1)(3)+(1)(4)+(2)(3)+(2)(4)+(3)(4)
     =   2  +  3  +  4  +  6  +  8  + 12  = 35          (6 terms - correct)
  s3 = (1)(2)(3)+(1)(2)(4)+(1)(3)(4)+(2)(3)(4)
     =    6    +    8    +   12    +   24  = 50          (4 terms - correct)
  s4 = (1)(2)(3)(4) = 24

  Equation:  x^4 - s1 x^3 + s2 x^2 - s3 x + s4 = 0
             x^4 - 10 x^3 + 35 x^2 - 50 x + 24 = 0

  So   a = -10 ,  b = 35 ,  c = -50 ,  d = 24

  CHECK x = 1 :  1 - 10 + 35 - 50 + 24 = 0    YES
  CHECK x = 4 : 256 - 640 + 560 - 200 + 24 = 0   YES
```

> **TRAP:** The formula is `-b/a`, not `-b`. If the leading coefficient is not 1,
> you MUST divide by it. In `3x^3 - 26x^2 + ...` the sum of the roots is 26/3, not 26.

---

# TOPIC 4 — SYMMETRIC FUNCTIONS: THINGS YOU CAN FIND WITHOUT FINDING THE ROOTS

You are often asked for something like "the sum of the squares of the roots" when
the roots themselves are ugly. You never need the roots. Rewrite the request in
terms of s1, s2, s3.

```
  +----------------------------------------------------------------------+
  |   For a cubic with roots A, B, C:                                    |
  |                                                                      |
  |   Sum of squares                                                     |
  |      A^2 + B^2 + C^2          =  s1^2  -  2 s2                       |
  |                                                                      |
  |   Sum of reciprocals                                                 |
  |      1/A + 1/B + 1/C          =  s2 / s3                             |
  |                                                                      |
  |   Sum of reciprocals of products                                     |
  |      1/(AB) + 1/(BC) + 1/(CA) =  s1 / s3                             |
  |                                                                      |
  |   Sum of cubes                                                       |
  |      A^3 + B^3 + C^3          =  s1^3 - 3 s1 s2 + 3 s3               |
  |                                                                      |
  |   Mixed sum                                                          |
  |      A^2B+A^2C+B^2A+B^2C+C^2A+C^2B  =  s1 s2 - 3 s3                  |
  +----------------------------------------------------------------------+
```

Where the first one comes from — the identity you already know:

```
  (A + B + C)^2  =  A^2 + B^2 + C^2  +  2(AB + BC + CA)

        s1^2     =  (sum of squares)  +  2 s2

  so    sum of squares  =  s1^2 - 2 s2
```

Where the second one comes from:

```
   1     1     1        BC + CA + AB        s2
  --- + --- + ---  =  ----------------  =  ----
   A     B     C            ABC              s3
```

**WORKED EXAMPLE 4.1** — If A, B, C are the roots of `x^3 - 6x^2 + 11x - 6 = 0`,
find (i) A^2+B^2+C^2 (ii) 1/A + 1/B + 1/C (iii) A^3+B^3+C^3.

```
  s1 = 6 ,  s2 = 11 ,  s3 = 6

  (i)   s1^2 - 2 s2       =  36 - 22          =  14
  (ii)  s2 / s3           =  11 / 6           =  11/6
  (iii) s1^3 - 3 s1 s2 + 3 s3
                          =  216 - 3(6)(11) + 3(6)
                          =  216 - 198 + 18   =  36

  CHECK: this equation factorises as (x-1)(x-2)(x-3) = 0, roots 1, 2, 3.
     1 + 4 + 9      = 14     YES
     1 + 1/2 + 1/3  = 11/6   YES
     1 + 8 + 27     = 36     YES
```

> **TRAP:** `A^2 + B^2 + C^2 = s1^2 - 2 s2` — the minus sign is not optional and
> the 2 is not optional. Students write `s1^2 - s2` and lose the whole question.

---

# TOPIC 5 — SOLVING WHEN THE ROOTS ARE IN ARITHMETIC PROGRESSION (AP)

### The trick

If three numbers are in AP, the middle one is the average. So instead of calling
them A, B, C, call them:

```
  +-------------------------------------------+
  |                                           |
  |     a - d  ,      a     ,   a + d         |
  |                                           |
  |   The d's CANCEL when you add them:       |
  |   sum = 3a  --  one unknown gone instantly |
  |                                           |
  +-------------------------------------------+
```

For FOUR terms in AP use `a - 3d, a - d, a + d, a + 3d` (common difference 2d),
because again the sum is just 4a.

### The recipe

```
  STEP 1   Write the roots as  a - d ,  a ,  a + d
  STEP 2   Use  s1 = -b/a(coeff)  ->  3a = sum  ->  find a  IMMEDIATELY
  STEP 3   a is now a known root. Put it into  s3 = -d/a(coeff)
           because  s3 = (a-d)(a)(a+d) = a(a^2 - d^2)     ->  find d
  STEP 4   Write the three roots.
  STEP 5   SUBSTITUTE EACH ONE BACK into the original equation.
```

**WORKED EXAMPLE 5.1** — Solve `x^3 - 3x^2 - 6x + 8 = 0`, given that the roots
are in AP.

```
  STEP 1   Let the roots be   a - d ,  a ,  a + d

  STEP 2   Sum of roots  =  -(-3)/1  =  3
              (a - d) + a + (a + d)  =  3
                                 3a  =  3
                                  a  =  1

  STEP 3   Product of roots  =  -8/1  =  -8
              (a - d)(a)(a + d)   =  -8
                  a (a^2 - d^2)   =  -8
                  1 (1  - d^2)    =  -8
                       1 - d^2    =  -8
                          d^2     =  9
                            d     =  3     (or -3, same three roots)

  STEP 4   Roots  =  1 - 3 ,  1 ,  1 + 3   =   -2 ,  1 ,  4

  STEP 5   VERIFY in  x^3 - 3x^2 - 6x + 8 :
             x = -2 :  -8  - 3(4)  - 6(-2) + 8  =  -8 - 12 + 12 + 8  = 0   YES
             x =  1 :   1  -  3    -  6    + 8  =  0                       YES
             x =  4 :  64  - 3(16) - 24    + 8  =  64 - 48 - 24 + 8 = 0    YES
```

> **SHORTCUT for MCQs:** for a cubic with roots in AP, the middle root is always
> `-b / (3a)`. In the example: `-(-3)/(3 x 1) = 1`. You get one root free.

---

# TOPIC 6 — SOLVING WHEN THE ROOTS ARE IN GEOMETRIC PROGRESSION (GP)

### The trick

```
  +-------------------------------------------+
  |                                           |
  |      a / r   ,     a     ,    a r         |
  |                                           |
  |   The r's CANCEL when you MULTIPLY:       |
  |   product = a^3  --  one unknown gone      |
  |                                           |
  +-------------------------------------------+
```

For AP you start with the SUM. For GP you start with the PRODUCT. That is the
only difference in the recipe.

For FOUR terms in GP use `a/r^3, a/r, ar, ar^3` (common ratio r^2), product = a^4.

### The recipe

```
  STEP 1   Let the roots be  a/r ,  a ,  a r
  STEP 2   Use  s3 = -d/a(coeff)  ->  a^3 = product  ->  find a
  STEP 3   Put a into  s1  ->  a/r + a + a r = sum  ->  a quadratic in r
  STEP 4   Solve for r (you always get r and 1/r - both give the SAME set of roots)
  STEP 5   Write the roots and substitute back.
```

**WORKED EXAMPLE 6.1** — Solve `x^3 - 7x^2 + 14x - 8 = 0`, given the roots are in GP.

```
  STEP 1   Let the roots be   a/r ,  a ,  a r

  STEP 2   Product of roots  =  -(-8)/1  =  8
                (a/r)(a)(a r)  =  8
                        a^3    =  8
                          a    =  2

           (a = 2 must therefore BE a root.  Check:  8 - 28 + 28 - 8 = 0  YES)

  STEP 3   Sum of roots  =  -(-7)/1  =  7
                2/r + 2 + 2r  =  7
                2/r + 2r      =  5
           multiply by r :
                2 + 2r^2      =  5r
                2r^2 - 5r + 2 =  0
                (2r - 1)(r - 2) = 0
                r = 1/2   or   r = 2

  STEP 4   Take r = 2 :  roots are  2/2 , 2 , 2x2  =  1 , 2 , 4
           (r = 1/2 gives 4, 2, 1 - the same three numbers)

  STEP 5   VERIFY in  x^3 - 7x^2 + 14x - 8 :
             x = 1 :   1 -  7 + 14 - 8               = 0    YES
             x = 2 :   8 - 28 + 28 - 8               = 0    YES
             x = 4 :  64 - 112 + 56 - 8              = 0    YES
```

> **SHORTCUT for MCQs:** for a cubic with roots in GP, the middle root is the
> **cube root of (-d/a)**. Above: cube root of 8 = 2.

> **TRAP:** For GP you must use the PRODUCT first. If you start with the sum you
> get one equation in two unknowns and you will get stuck and lose 5 minutes.

---

# TOPIC 7 — SOLVING WHEN THE ROOTS ARE IN HARMONIC PROGRESSION (HP)

### What HP means

Numbers are in **HP** when their **RECIPROCALS are in AP**. That is the definition
and it is also the whole method.

```
  1 , 1/3 , 1/5     are in HP    because    1 , 3 , 5   are in AP
```

### The recipe

```
  STEP 1   In the given equation put  x = 1/y  and clear the denominators.
           (Practical shortcut: this just REVERSES the list of coefficients.)
  STEP 2   The new equation in y has its roots in AP.
  STEP 3   Solve it by the AP method (a-d, a, a+d).
  STEP 4   The roots of the ORIGINAL equation are the RECIPROCALS of the y's.
  STEP 5   Substitute back into the ORIGINAL equation.
```

**WORKED EXAMPLE 7.1** — Solve `15x^3 - 23x^2 + 9x - 1 = 0`, given the roots are in HP.

```
  STEP 1   Put x = 1/y :

              15      23     9
             ---  -  ---- + --- - 1  =  0
             y^3     y^2     y

           Multiply throughout by y^3 :

              15 - 23y + 9y^2 - y^3 = 0

           Multiply by -1 and write in descending order:

              y^3 - 9y^2 + 23y - 15 = 0

           (Notice: coefficients 15, -23, 9, -1  became  -1, 9, -23, 15
            -- simply reversed. That is always what x = 1/y does.)

  STEP 2/3  This equation has roots in AP.  Let them be  a - d , a , a + d.

              Sum      = 9      ->   3a = 9        ->   a = 3
              Product  = 15     ->   a(a^2 - d^2) = 15
                                     3(9 - d^2)   = 15
                                        9 - d^2   =  5
                                            d^2   =  4
                                              d   =  2

              y = 1 , 3 , 5           (and 1, 3, 5 really are in AP)

              CHECK in y^3 - 9y^2 + 23y - 15 :
                 y = 1 :   1 -  9 +  23 - 15  = 0    YES
                 y = 3 :  27 - 81 +  69 - 15  = 0    YES
                 y = 5 : 125 - 225 + 115 - 15 = 0    YES

  STEP 4   Roots of the original  =  1 , 1/3 , 1/5      (these ARE in HP)

  STEP 5   VERIFY in  15x^3 - 23x^2 + 9x - 1 :

           x = 1    :  15 - 23 + 9 - 1  =  0                          YES

           x = 1/3  :  15(1/27) - 23(1/9) + 9(1/3) - 1
                    =   5/9  -  23/9  +  3  -  1
                    =  -18/9 + 2  =  -2 + 2  =  0                     YES

           x = 1/5  :  15(1/125) - 23(1/25) + 9(1/5) - 1
                    =   3/25  -  23/25  +  45/25  -  25/25
                    =   0/25  =  0                                    YES
```

> **SHORTCUT for MCQs:** for a cubic with roots in HP, the middle root is `-3d/c`
> (last coefficient over the x-coefficient, times -3). Above: `-3(-1)/9 = 1/3`. Correct.

> **TRAP:** Do NOT try "a-d, a, a+d" directly on an HP question. HP terms are not
> equally spaced. Flip to reciprocals FIRST. This is the single most common mistake
> in this chapter.

---

# TOPIC 8 — OTHER RELATIONS BETWEEN THE ROOTS

The idea never changes: **use the relation to reduce the number of unknowns, then
feed s1, s2, s3 in.**

## 8A. TWO ROOTS ARE EQUAL

Let the roots be `a , a , b`.

```
  s1 = 2a + b
  s2 = a^2 + 2ab
  s3 = a^2 b
```

**WORKED EXAMPLE 8.1** — Solve `x^3 - 3x^2 - 9x - 5 = 0`, given two roots are equal.

```
  Let the roots be  a , a , b.

  s1 :  2a + b        =  3            ->   b = 3 - 2a
  s2 :  a^2 + 2ab     = -9
  s3 :  a^2 b         =  5

  Put b = 3 - 2a into s2 :
        a^2 + 2a(3 - 2a)  = -9
        a^2 + 6a - 4a^2   = -9
           -3a^2 + 6a + 9 =  0
             a^2 - 2a - 3 =  0
            (a - 3)(a + 1)=  0
             a = 3   or   a = -1

  Test each in s3 (a^2 b = 5) :
        a = 3  ->  b = 3 - 6 = -3  ->  a^2 b = 9(-3) = -27    NOT 5.  Reject.
        a = -1 ->  b = 3 + 2 =  5  ->  a^2 b = 1( 5) =   5    YES.  Accept.

  Roots :  -1 , -1 , 5

  VERIFY in  x^3 - 3x^2 - 9x - 5 :
     x = -1 :  -1 - 3(1) - 9(-1) - 5  =  -1 - 3 + 9 - 5  =  0   YES
     x =  5 : 125 - 3(25) - 45   - 5  = 125 - 75 - 45 - 5 = 0   YES
```

> **The other way to find a repeated root:** `A` is a repeated root of f(x) = 0
> exactly when `f(A) = 0` AND `f'(A) = 0`. Here f'(x) = 3x^2 - 6x - 9 = 3(x-3)(x+1),
> so the candidates are x = 3 and x = -1; f(-1) = 0 so -1 is the double root.
> Same answer, and it is a fast MCQ method.

## 8B. THE SUM OF TWO ROOTS IS ZERO

Let the roots be `a , -a , c` (cubic) or `a , -a , c , e` (quartic).

**WORKED EXAMPLE 8.2** — Solve `x^3 - 5x^2 - 4x + 20 = 0`, given that the sum of
two roots is zero.

```
  Let the roots be  a , -a , c.

  s1 :  a + (-a) + c  =  5      ->  c = 5          (the d's cancel again!)

  So 5 is a root.  Check:  125 - 125 - 20 + 20 = 0   YES

  s2 :  (a)(-a) + (-a)(c) + (c)(a)  =  -4
              -a^2 + 0                =  -4          (the ac terms cancel)
                a^2                  =   4
                  a                  =   2

  Roots :  2 , -2 , 5

  VERIFY in  x^3 - 5x^2 - 4x + 20 :
     x =  2 :   8 - 20 -  8 + 20  =  0     YES
     x = -2 :  -8 - 20 +  8 + 20  =  0     YES
     x =  5 : 125 -125 - 20 + 20  =  0     YES
```

**WORKED EXAMPLE 8.3 (quartic)** — Solve `x^4 - x^3 - 24x^2 + 4x + 80 = 0`, given
that the sum of two of its roots is zero.

```
  Let the roots be  a , -a , c , e.

  s1 :  c + e            =  1            (the a's cancel)
  s3 :  -a^2 (c + e)     =  -4/1 = -4    (all other triple products cancel)
           -a^2 (1)      =  -4
                 a^2     =   4    ->  a = 2

  s2 :  -a^2 + ce        = -24
            -4 + ce      = -24    ->  ce = -20

  c + e = 1 , ce = -20   ->   t^2 - t - 20 = 0  ->  (t-5)(t+4) = 0
                              c = 5 ,  e = -4

  Roots :  2 , -2 , 5 , -4

  VERIFY in  x^4 - x^3 - 24x^2 + 4x + 80 :
     x =  2 :  16 -  8 -  96 +  8 + 80  =  0     YES
     x = -2 :  16 +  8 -  96 -  8 + 80  =  0     YES
     x =  5 : 625 -125 - 600 + 20 + 80  =  0     YES
     x = -4 : 256 + 64 - 384 - 16 + 80  =  0     YES
```

## 8C. ONE ROOT IS DOUBLE ANOTHER

Let the roots be `a , 2a , b`.

**WORKED EXAMPLE 8.4** — Solve `x^3 - 7x^2 + 36 = 0`, given one root is twice another.

```
  Note the missing x term:  x^3 - 7x^2 + 0x + 36 = 0

  Let the roots be  a , 2a , b.

  s1 :  3a + b               =  7
  s2 :  2a^2 + 2ab + ab
        = 2a^2 + 3ab         =  0/1  =  0
  s3 :  2a^2 b               =  -36

  From s2 :  a(2a + 3b) = 0.  a = 0 is impossible (then the product would be 0,
             but the product is -36).  So   2a + 3b = 0   ->   b = -2a/3.

  Put in s1 :   3a - 2a/3 = 7
                (9a - 2a)/3 = 7
                 7a/3 = 7      ->   a = 3     ->  b = -2

  Roots :  3 , 6 , -2

  CHECK s3 :  2a^2 b = 2(9)(-2) = -36    YES

  VERIFY in  x^3 - 7x^2 + 36 :
     x =  3 :   27 -  63 + 36  =  0    YES
     x =  6 :  216 - 252 + 36  =  0    YES
     x = -2 :   -8 -  28 + 36  =  0    YES
```

## 8D. TWO ROOTS ARE IN THE RATIO p : q

Let the two roots be `p k` and `q k` — one unknown k instead of two roots.

**WORKED EXAMPLE 8.5** — Solve `x^3 - 9x^2 + 14x + 24 = 0`, given that two of its
roots are in the ratio 3 : 2.

```
  Let the roots be  3k , 2k , c.

  s1 :  5k + c            =  9        ->  c = 9 - 5k
  s2 :  6k^2 + 3kc + 2kc
        = 6k^2 + 5kc      = 14
  s3 :  6 k^2 c           = -24       ->  k^2 c = -4

  Put c = 9 - 5k into s2 :
        6k^2 + 5k(9 - 5k)  = 14
        6k^2 + 45k - 25k^2 = 14
            -19k^2 + 45k   = 14
             19k^2 - 45k + 14 = 0

        Discriminant = 45^2 - 4(19)(14) = 2025 - 1064 = 961 = 31^2

             k = (45 +/- 31)/38   ->   k = 76/38 = 2   or   k = 14/38 = 7/19

  Test in  k^2 c = -4 :
        k = 2      ->  c = 9 - 10 = -1  ->  k^2 c = 4(-1) = -4     YES
        k = 7/19   ->  c = 9 - 35/19 = 136/19 ->  k^2 c is positive.  Reject.

  Roots :  6 , 4 , -1

  VERIFY in  x^3 - 9x^2 + 14x + 24 :
     x =  6 :  216 - 324 + 84 + 24  =  0     YES
     x =  4 :   64 - 144 + 56 + 24  =  0     YES
     x = -1 :   -1 -   9 - 14 + 24  =  0     YES
```

**Useful quadratic version (appears in EAPCET):** if the roots of
`a x^2 + b x + c = 0` are in the ratio p : q, then

```
  +----------------------------------+
  |     p q b^2  =  (p + q)^2 a c    |
  +----------------------------------+
```

## 8E. ONE ROOT IS THE RECIPROCAL OF ANOTHER

Let the roots be `a , 1/a , c`. Then the product is `a x (1/a) x c = c`.
So for a cubic **the third root is handed to you free**:

```
  +---------------------------------------------------------+
  |   roots  a , 1/a , c   in  a x^3+b x^2+c x+d = 0        |
  |                                                         |
  |          c (the odd root)  =  s3  =  - d / a            |
  +---------------------------------------------------------+
```

**WORKED EXAMPLE 8.6** — Solve `2x^3 - 11x^2 + 17x - 6 = 0`, given that one root
is the reciprocal of another.

```
  Let the roots be  a , 1/a , c.

  Product = a x (1/a) x c = c   and   s3 = -(-6)/2 = 3
        ->  c = 3

  Check that 3 is a root:  2(27) - 11(9) + 51 - 6 = 54 - 99 + 51 - 6 = 0   YES

  Divide out (x - 3) by synthetic division:

        3 |   2    -11     17     -6
          |         6    -15       6
          +--------------------------
              2     -5      2      0        <- remainder 0, good

        Quotient:  2x^2 - 5x + 2 = 0
                   (2x - 1)(x - 2) = 0
                   x = 1/2   or   x = 2       (and these ARE reciprocals)

  Roots :  2 , 1/2 , 3

  VERIFY in  2x^3 - 11x^2 + 17x - 6 :
     x = 2   :  16 - 44 + 34 - 6  =  0                              YES
     x = 1/2 :  2(1/8) - 11(1/4) + 17/2 - 6
             =  1/4 - 11/4 + 34/4 - 24/4  =  0/4  =  0              YES
     x = 3   :  54 - 99 + 51 - 6  =  0                              YES
```

## 8F. THE PRODUCT OF TWO ROOTS IS GIVEN (quartic — a favourite 7-mark question)

Let the roots be `A, B, C, D` with `AB = k` given. Then from `s4`, `CD = s4 / k`.
Now let `p = A + B` and `q = C + D` and use s1 and s3.

```
  s1 :  p + q                   =  -b/a
  s3 :  AB(C+D) + CD(A+B)
        =  k q  +  (s4/k) p     =  -d/a
```

Two linear equations in p and q. Solve, then build two quadratics.

**WORKED EXAMPLE 8.7** — Solve `x^4 + x^3 - 16x^2 - 4x + 48 = 0`, given that the
product of two of its roots is 6.

```
  Roots A, B, C, D with  AB = 6.

  s4 = ABCD = 48/1 = 48    ->   6 x CD = 48   ->   CD = 8

  Let  p = A + B ,  q = C + D.

  s1 :  p + q  =  -1/1  =  -1

  s3 :  AB(C+D) + CD(A+B)  =  -(-4)/1  =  4
             6q  +  8p     =  4
              8p + 6q      =  4        ...(i)
               p +  q      = -1        ...(ii)

  From (ii):  q = -1 - p.  Put into (i):
        8p + 6(-1 - p) = 4
        8p - 6 - 6p    = 4
             2p        = 10   ->  p = 5 ,  q = -6

  CHECK with s2 :  AB + CD + (A+B)(C+D) = 6 + 8 + (5)(-6) = 14 - 30 = -16
                   and c/a = -16.    MATCHES - so p and q are right.

  Now build the two quadratics:
        A + B = 5 , AB = 6   ->   x^2 - 5x + 6 = 0  ->  (x-2)(x-3)=0  ->  2 , 3
        C + D = -6, CD = 8   ->   x^2 + 6x + 8 = 0  ->  (x+2)(x+4)=0  ->  -2 , -4

  Roots :  2 , 3 , -2 , -4

  VERIFY in  x^4 + x^3 - 16x^2 - 4x + 48 :
     x =  2 :  16 +  8 -  64 -  8 + 48  =  0     YES
     x =  3 :  81 + 27 - 144 - 12 + 48  =  0     YES
     x = -2 :  16 -  8 -  64 +  8 + 48  =  0     YES
     x = -4 : 256 - 64 - 256 + 16 + 48  =  0     YES
```

## 8G. TWO PAIRS OF EQUAL ROOTS

Roots `a, a, b, b`. Then the quartic is a perfect square: `(x^2 + px + q)^2`.

**WORKED EXAMPLE 8.8** — Solve `x^4 + 4x^3 - 2x^2 - 12x + 9 = 0` given that it has
two pairs of equal roots.

```
  Write it as  ( x^2 + p x + q )^2 = 0.

  Expanding:  x^4 + 2p x^3 + (p^2 + 2q) x^2 + 2pq x + q^2

  Compare:
        2p        =  4      ->  p = 2
        q^2       =  9      ->  q = 3  or  q = -3
        p^2 + 2q  = -2      ->  4 + 2q = -2  ->  q = -3      (so q = -3)
        CHECK 2pq = 2(2)(-3) = -12       matches the -12x term.   GOOD.

  So   (x^2 + 2x - 3)^2 = 0
       [(x + 3)(x - 1)]^2 = 0

  Roots :  -3 , -3 , 1 , 1

  VERIFY in  x^4 + 4x^3 - 2x^2 - 12x + 9 :
     x =  1 :    1 +   4 -  2 - 12 + 9  =  0     YES
     x = -3 :   81 - 108 - 18 + 36 + 9  =  0     YES
```

---

# TOPIC 9 — THE NATURE OF THE ROOTS: CONJUGATE PAIRS

## 9A. IMAGINARY ROOTS COME IN CONJUGATE PAIRS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  THEOREM.  If the coefficients of f(x) = 0 are all REAL, and         |
  |            a + i b  is a root  (b not 0),                            |
  |            then  a - i b  is ALSO a root.                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**Why:** replacing every number in `f(a + ib) = 0` by its conjugate changes nothing
on the left except turning `a + ib` into `a - ib` (real coefficients are their own
conjugates), and the right side `0` stays `0`. So `f(a - ib) = 0` too.

**Three consequences you can quote for 2 marks:**

1. Imaginary roots occur in pairs, so an equation with real coefficients has an
   **even number** of imaginary roots.
2. Therefore an equation of **odd degree** with real coefficients has **at least
   one real root**. (A cubic always has at least one real root.)
3. If `a + ib` and `a - ib` are roots, then the real quadratic factor is
   `x^2 - 2a x + (a^2 + b^2)`, because sum = 2a and product = a^2 + b^2.

## 9B. IRRATIONAL (SURD) ROOTS COME IN CONJUGATE PAIRS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  THEOREM.  If the coefficients of f(x) = 0 are all RATIONAL, and     |
  |            a + sqrt(b)  is a root  (sqrt(b) irrational),             |
  |            then  a - sqrt(b)  is ALSO a root.                        |
  |                                                                      |
  |  Quadratic factor:   x^2 - 2a x + (a^2 - b)                          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Note the difference: imaginary pairs need **real** coefficients; surd pairs need
**rational** coefficients. Examiners test that word.

**WORKED EXAMPLE 9.1** — Solve `x^4 - 4x^2 + 8x + 35 = 0`, given that `2 + i sqrt(3)`
is a root.

```
  Coefficients are real, so  2 - i sqrt(3)  is also a root.

  Their sum     =  4
  Their product =  (2)^2 + (sqrt 3)^2  =  4 + 3  =  7

  So  x^2 - 4x + 7  is a factor.  Divide:

                        x^2 + 4x + 5
                    ----------------------------------
     x^2 - 4x + 7 )  x^4 + 0x^3 - 4x^2 + 8x + 35
                     x^4 - 4x^3 + 7x^2
                     -----------------
                           4x^3 - 11x^2 +  8x
                           4x^3 - 16x^2 + 28x
                           ------------------
                                   5x^2 - 20x + 35
                                   5x^2 - 20x + 35
                                   ---------------
                                          0            <- remainder 0

  Other factor:   x^2 + 4x + 5 = 0

                        -4 +/- sqrt(16 - 20)     -4 +/- 2i
                  x  =  ---------------------  = ----------- = -2 +/- i
                                 2                    2

  Roots :   2 + i sqrt(3) ,  2 - i sqrt(3) ,  -2 + i ,  -2 - i

  VERIFY  x = -2 + i  in  x^4 - 4x^2 + 8x + 35 :
        x^2 = 4 - 4i + i^2 = 3 - 4i
        x^4 = (3 - 4i)^2 = 9 - 24i + 16 i^2 = -7 - 24i

        (-7 - 24i) - 4(3 - 4i) + 8(-2 + i) + 35
      = -7 - 24i - 12 + 16i - 16 + 8i + 35
      = (-7 - 12 - 16 + 35) + (-24 + 16 + 8) i
      = 0 + 0i                                            YES
```

**WORKED EXAMPLE 9.2** — Solve `6x^4 - 13x^3 - 35x^2 - x + 3 = 0`, given that
`2 + sqrt(3)` is a root.

```
  Coefficients are rational, so  2 - sqrt(3)  is also a root.

  Sum     =  4
  Product =  (2)^2 - (sqrt 3)^2  =  4 - 3  =  1

  So  x^2 - 4x + 1  is a factor.  Divide:

                        6x^2 + 11x + 3
                    ------------------------------------
     x^2 - 4x + 1 )  6x^4 - 13x^3 - 35x^2 -  x + 3
                     6x^4 - 24x^3 +  6x^2
                     -------------------
                            11x^3 - 41x^2 -   x
                            11x^3 - 44x^2 + 11x
                            -------------------
                                     3x^2 - 12x + 3
                                     3x^2 - 12x + 3
                                     --------------
                                            0        <- remainder 0

  Other factor:  6x^2 + 11x + 3 = 0
                 (3x + 1)(2x + 3) = 0
                  x = -1/3   or   x = -3/2

  Roots :  2 + sqrt(3) ,  2 - sqrt(3) ,  -1/3 ,  -3/2

  VERIFY  x = -1/3  in  6x^4 - 13x^3 - 35x^2 - x + 3 :
        6(1/81) + 13(1/27) - 35(1/9) + 1/3 + 3
      =  2/27  +  13/27  -  105/27  +  9/27  +  81/27
      =  (2 + 13 - 105 + 9 + 81) / 27  =  0/27  =  0          YES

  VERIFY  x = -3/2 :
        6(81/16) + 13(27/8) - 35(9/4) + 3/2 + 3
      =  486/16 + 702/16 - 1260/16 + 24/16 + 48/16
      =  (486 + 702 - 1260 + 24 + 48)/16  =  0/16  =  0       YES
```

**WORKED EXAMPLE 9.3** — Solve `3x^3 - 4x^2 + x + 88 = 0`, given that `2 - i sqrt(7)`
is a root.

```
  Conjugate  2 + i sqrt(7)  is also a root.
  Sum = 4 ,  Product = 4 + 7 = 11   ->  factor  x^2 - 4x + 11

  Third root: use  s3 = product of all roots = -88/3
        (11) x (third root) = -88/3   ->   third root = -8/3

  VERIFY  x = -8/3  in  3x^3 - 4x^2 + x + 88 :
        3(-512/27) - 4(64/9) - 8/3 + 88
      = -512/9 - 256/9 - 24/9 + 792/9
      = (-512 - 256 - 24 + 792)/9  =  0/9  =  0               YES

  Roots :  2 + i sqrt(7) ,  2 - i sqrt(7) ,  -8/3
```

> **TRAP:** "3 + 2i is a root of x^2 + bx + c = 0 where b, c are REAL" — you may
> use the conjugate. "3 + 2i is a root of an equation with complex coefficients" —
> you may NOT. The theorem needs real (or rational) coefficients. Always say the
> words "since the coefficients are real" in your answer; it carries a mark.

---

# TOPIC 10 — TRANSFORMATION OF EQUATIONS

You have `f(x) = 0` with roots `A, B, C`. You want the equation whose roots are
some modification of them. **Every one of these is just a substitution.**

The logic: if the new root is `y = (something with x)`, then rearrange to get
`x = (something with y)`, substitute that into f, and clean up.

```
  +--------------------------------------------------------------------------+
  |  NEW ROOTS ARE ...            |  SUBSTITUTE          |  QUICK METHOD     |
  |-------------------------------|----------------------|-------------------|
  |  k times the old roots        |  x  ->  x / k        |  multiply the     |
  |  (roots  kA, kB, kC)          |                      |  coefficients by  |
  |                               |                      |  1, k, k^2, k^3.. |
  |-------------------------------|----------------------|-------------------|
  |  k MORE than the old roots    |  x  ->  x - k        |  synthetic        |
  |  (roots  A+k, B+k, C+k)       |                      |  division by k    |
  |  = "roots INCREASED by k"     |                      |                   |
  |-------------------------------|----------------------|-------------------|
  |  k LESS than the old roots    |  x  ->  x + k        |  synthetic        |
  |  (roots  A-k, B-k, C-k)       |                      |  division by k    |
  |  = "roots DIMINISHED by k"    |                      |  (see Topic 11)   |
  |-------------------------------|----------------------|-------------------|
  |  the NEGATIVES of the roots   |  x  ->  -x           |  change the sign  |
  |  (roots  -A, -B, -C)          |                      |  of every ODD-    |
  |                               |                      |  power term       |
  |-------------------------------|----------------------|-------------------|
  |  the RECIPROCALS of the roots |  x  ->  1/x  then    |  REVERSE the list |
  |  (roots  1/A, 1/B, 1/C)       |  multiply by x^n     |  of coefficients  |
  |-------------------------------|----------------------|-------------------|
  |  the SQUARES of the roots     |  x  ->  sqrt(y)      |  separate odd and |
  |  (roots  A^2, B^2, C^2)       |                      |  even powers,     |
  |                               |                      |  then square      |
  +--------------------------------------------------------------------------+
```

## 10A. ROOTS MULTIPLIED BY k

**WORKED EXAMPLE 10.1** — Find the equation whose roots are 3 times the roots of
`x^3 + 2x^2 - 4x + 1 = 0`.

```
  New root  y = 3x   ->   x = y/3.  Substitute:

     (y/3)^3 + 2(y/3)^2 - 4(y/3) + 1  =  0

      y^3      2y^2     4y
     -----  +  ----- -  ---- + 1  =  0
       27        9       3

  Multiply throughout by 27:

     y^3 + 6y^2 - 36y + 27 = 0

  QUICK CHECK by the shortcut: multiply the coefficients 1, 2, -4, 1
  by k^0, k^1, k^2, k^3 = 1, 3, 9, 27:
       1x1 = 1 ,  2x3 = 6 ,  -4x9 = -36 ,  1x27 = 27       SAME.  Good.
```

## 10B. ROOTS INCREASED / DIMINISHED

Diminishing by k means every new root is `old root - k`. Since `y = x - k`, we put
`x = y + k` — i.e. **substitute x -> x + k**.

The clean way to do this is synthetic division (Topic 11), but here is the raw way:

**WORKED EXAMPLE 10.2** — Find the equation whose roots are those of
`x^3 - 6x^2 + 10x - 3 = 0` each **diminished by 2**.

```
  Substitute  x = y + 2 :

     (y+2)^3 - 6(y+2)^2 + 10(y+2) - 3

   = y^3 + 6y^2 + 12y + 8  -  6(y^2 + 4y + 4)  +  10y + 20  -  3

   = y^3 + 6y^2 + 12y + 8  -  6y^2 - 24y - 24  +  10y + 20  -  3

   = y^3 + (6-6)y^2 + (12 - 24 + 10)y + (8 - 24 + 20 - 3)

   = y^3 - 2y + 1  =  0
```

## 10C. ROOTS NEGATED

**WORKED EXAMPLE 10.3** — Find the equation whose roots are the negatives of the
roots of `x^7 + 3x^5 + x^3 - x^2 + 7x + 2 = 0`.

```
  Substitute x -> -x :

     -x^7 - 3x^5 - x^3 - x^2 - 7x + 2  =  0

  Multiply by -1 :

      x^7 + 3x^5 + x^3 + x^2 + 7x - 2  =  0

  SHORTCUT: keep even-power terms as they are, flip the sign of odd-power terms
  (x^7, x^5, x^3, x), then tidy. Same result.
```

## 10D. RECIPROCALS OF THE ROOTS

**WORKED EXAMPLE 10.4** — Find the equation whose roots are the reciprocals of the
roots of `x^4 + 3x^3 - 6x^2 + 2x - 4 = 0`.

```
  Substitute  x = 1/y  and multiply by y^4 :

      1     3      6     2
     ---  + --  -  --  + -  - 4   =  0        | x y^4
     y^4    y^3    y^2   y

      1  +  3y  -  6y^2  +  2y^3  -  4y^4  =  0

  Multiply by -1 and write in descending order:

      4y^4 - 2y^3 + 6y^2 - 3y - 1  =  0

  SHORTCUT: just REVERSE the coefficient list
      1, 3, -6, 2, -4    reversed is    -4, 2, -6, 3, 1
      -> -4x^4 + 2x^3 - 6x^2 + 3x + 1 = 0
      -> multiply by -1:  4x^4 - 2x^3 + 6x^2 - 3x - 1 = 0     SAME.
```

## 10E. SQUARES OF THE ROOTS

This is the only one that needs a small piece of algebra: put the **even-power
terms on one side and the odd-power terms on the other, then square both sides.**
Squaring turns every x^2 into y.

**WORKED EXAMPLE 10.5** — Find the equation whose roots are the squares of the
roots of `x^3 + 3x^2 - 7x + 6 = 0`.

```
  Separate odd and even powers:

        x^3 - 7x    =  -3x^2 - 6
        x (x^2 - 7) =  -3 (x^2 + 2)

  Square both sides:

        x^2 (x^2 - 7)^2  =  9 (x^2 + 2)^2

  Now put  y = x^2 :

        y (y - 7)^2      =  9 (y + 2)^2

        y (y^2 - 14y + 49)  =  9(y^2 + 4y + 4)

        y^3 - 14y^2 + 49y   =  9y^2 + 36y + 36

        y^3 - 23y^2 + 13y - 36  =  0

  CHECK using symmetric functions (always do this):
     original:  s1 = -3 ,  s2 = -7 ,  s3 = -6

     sum of squares          = s1^2 - 2 s2  = 9 + 14        = 23    matches -(-23)
     sum of prod of squares  = s2^2 - 2 s1 s3
                             = 49 - 2(-3)(-6) = 49 - 36     = 13    matches +13
     product of squares      = s3^2 = 36                            matches -(-36)
                                                                    ALL MATCH.
```

> **TRAP:** For "squares of the roots" you cannot simply replace x by sqrt(y) and
> stop — you get a surd. The separate-and-square step is compulsory. And you must
> pick the split so that ONE side is x times (even powers) — that is what makes
> the square come out in y only.

---

# TOPIC 11 — SYNTHETIC DIVISION (HORNER'S METHOD) AND REMOVING A TERM

## 11A. What synthetic division does

Dividing `f(x)` by `(x - k)` the short way. Write only the coefficients.

```
  Divide  x^3 - 6x^2 + 10x - 3   by  (x - 2) :

        2 |   1    -6     10     -3
          |         2     -8      4
          +-----------------------------
              1    -4      2      1

        Quotient:  x^2 - 4x + 2       Remainder:  1
```

**The rule:** bring the first number straight down. Multiply it by k, write the
result under the next coefficient, add. Repeat.

## 11B. Diminishing the roots by k, using repeated synthetic division

To diminish the roots by k, you need the coefficients of `f(y + k)`. Horner's
method gets them by dividing by `(x - k)` **over and over**, keeping the remainders.

```
  +--------------------------------------------------------------------------+
  |  HORNER'S METHOD                                                         |
  |                                                                          |
  |  1. Synthetic-divide f by (x - k). Note the remainder R0.                |
  |  2. Synthetic-divide the QUOTIENT by (x - k). Note R1.                   |
  |  3. Keep going until nothing is left.                                    |
  |  4. The new equation is                                                  |
  |         (last quotient) y^n + ... + R2 y^2 + R1 y + R0 = 0               |
  |     i.e. THE REMAINDERS, READ FROM THE BOTTOM UP, are the coefficients.  |
  |                                                                          |
  |  For roots INCREASED by k, do exactly the same with  -k .                |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 11.1** — Find the equation whose roots are those of
`x^4 - x^3 - 10x^2 + 4x + 24 = 0` each diminished by 2.

```
        2 |   1    -1    -10      4     24
          |         2      2    -16    -24
          +--------------------------------
              1     1     -8    -12      0   <- R0 = 0
        2 |
          |         2      6     -4
          +---------------------------
              1     3     -2    -16         <- R1 = -16
        2 |
          |         2     10
          +--------------------
              1     5      8                <- R2 = 8
        2 |
          |         2
          +-------------
              1     7                       <- R3 = 7

              1                             <- leading coefficient

  Reading the remainders from the BOTTOM up:  1 , 7 , 8 , -16 , 0

  New equation:   y^4 + 7y^3 + 8y^2 - 16y + 0 = 0
                  y^4 + 7y^3 + 8y^2 - 16y = 0

  VERIFY by direct substitution x = y + 2 :
     (y+2)^4 = y^4 + 8y^3 + 24y^2 + 32y + 16
    -(y+2)^3 =     -  y^3 -  6y^2 - 12y -  8
   -10(y+2)^2 =           - 10y^2 - 40y - 40
     4(y+2)  =                    +  4y +  8
       +24   =                           + 24
     -------------------------------------------
      total  = y^4 + 7y^3 +  8y^2 - 16y +  0     YES, identical.
```

## 11C. REMOVING THE SECOND TERM

"Remove the second term" means: produce an equation with **no x^(n-1) term**.
The new sum of roots must be zero, so you shift every root by the average.

```
  +--------------------------------------------------------------------------+
  |  To remove the SECOND term of                                            |
  |          a0 x^n + a1 x^(n-1) + ... = 0                                   |
  |                                                                          |
  |  DIMINISH the roots by      h  =  - a1 / ( n a0 )                        |
  |                                                                          |
  |  (i.e. do Horner's method with that value of h)                          |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 11.2** — Remove the second term from `x^3 - 6x^2 + 10x - 3 = 0`.

```
  a0 = 1 , a1 = -6 , n = 3

        h  =  - a1 / (n a0)  =  -(-6) / (3 x 1)  =  2

  Diminish the roots by 2:

        2 |   1    -6     10     -3
          |         2     -8      4
          +-------------------------
              1    -4      2      1        <- R0 = 1
        2 |
          |         2     -4
          +------------------
              1    -2     -2               <- R1 = -2
        2 |
          |         2
          +-----------
              1     0                      <- R2 = 0     (this zero is the point!)

              1

  New equation:   y^3 + 0y^2 - 2y + 1 = 0
                  y^3 - 2y + 1 = 0            <- second term gone.

  VERIFY x = y + 2 :
     (y+2)^3 - 6(y+2)^2 + 10(y+2) - 3
   = y^3+6y^2+12y+8 - 6y^2-24y-24 + 10y+20 - 3
   = y^3 + 0y^2 + (12-24+10)y + (8-24+20-3)
   = y^3 - 2y + 1                                     YES
```

**WORKED EXAMPLE 11.3** — Remove the second term from `x^4 + 4x^3 + 2x^2 - 4x - 2 = 0`.

```
  a0 = 1 , a1 = 4 , n = 4       ->   h = -4 / (4 x 1) = -1

  So diminish the roots by -1 (synthetic division by -1):

       -1 |   1     4      2     -4     -2
          |        -1     -3      1      3
          +---------------------------------
              1     3     -1     -3      1     <- R0 = 1
       -1 |
          |        -1     -2      3
          +--------------------------
              1     2     -3      0            <- R1 = 0
       -1 |
          |        -1     -1
          +-----------------
              1     1     -4                   <- R2 = -4
       -1 |
          |        -1
          +-----------
              1     0                          <- R3 = 0

              1

  New equation:  y^4 + 0y^3 - 4y^2 + 0y + 1 = 0
                 y^4 - 4y^2 + 1 = 0

  VERIFY x = y - 1 :
     (y-1)^4  = y^4 - 4y^3 +  6y^2 -  4y + 1
    4(y-1)^3  =      4y^3  - 12y^2 + 12y - 4
    2(y-1)^2  =              2y^2  -  4y + 2
   -4(y-1)    =                     -  4y + 4
       -2     =                           - 2
    -------------------------------------------
     total    = y^4 + 0y^3 - 4y^2 + 0y + 1        YES
```

> **TRAP:** The formula is `h = -a1/(n a0)`, with n = the DEGREE, not 3 every time.
> For a quartic you divide by 4. Get n wrong and every later number is wrong.

---

# TOPIC 12 — RECIPROCAL EQUATIONS

## 12A. What they are

An equation `f(x) = 0` is a **reciprocal equation** if, whenever `A` is a root,
`1/A` is also a root. The roots pair up as `A and 1/A`.

The test is on the **coefficients**, read forwards and backwards:

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   CLASS ONE  (Type 1)  :   a(i)  =  a(n-i)                               |
  |          coefficients equidistant from the ends are EQUAL                |
  |          e.g.   6 , -35 , 62 , -35 , 6     (a palindrome)                |
  |                                                                          |
  |   CLASS TWO  (Type 2)  :   a(i)  =  - a(n-i)                             |
  |          coefficients equidistant from the ends are EQUAL IN SIZE        |
  |          but OPPOSITE IN SIGN                                            |
  |          e.g.   1 , -5 , 9 , -9 , 5 , -1                                 |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

## 12B. The four cases and the free roots they give you

```
  +----------------+---------------+--------------------------------------+
  |   CLASS        |   DEGREE      |   FREE ROOT(S) YOU GET AT ONCE       |
  +----------------+---------------+--------------------------------------+
  |   ONE          |   ODD         |   x = -1                             |
  |   ONE          |   EVEN        |   none - go straight to y = x + 1/x  |
  |   TWO          |   ODD         |   x = +1                             |
  |   TWO          |   EVEN        |   x = +1  AND  x = -1                |
  |                |               |   (middle coefficient must be 0)     |
  +----------------+---------------+--------------------------------------+

  After removing the free root(s), what is LEFT is always a
  CLASS ONE EVEN-DEGREE reciprocal equation - the standard form.
```

Quick sanity checks:
- Class one, odd: `x^3 + 2x^2 + 2x + 1 = 0` at x = -1 gives `-1 + 2 - 2 + 1 = 0`. Yes.
- Class two, odd: `x^3 - 2x^2 + 2x - 1 = 0` at x = 1 gives `1 - 2 + 2 - 1 = 0`. Yes.

## 12C. The standard method (the 7-mark method)

```
  +--------------------------------------------------------------------------+
  |  SOLVING A CLASS ONE, EVEN-DEGREE (say degree 4) RECIPROCAL EQUATION     |
  |                                                                          |
  |  STEP 1   Divide every term by  x^(n/2)   -- for degree 4 that is x^2.   |
  |                                                                          |
  |  STEP 2   Group:   ( x^2 + 1/x^2 )  and  ( x + 1/x )                     |
  |                                                                          |
  |  STEP 3   Put   y = x + 1/x .   Then                                     |
  |                                                                          |
  |               x^2 + 1/x^2  =  y^2 - 2                                    |
  |               x^3 + 1/x^3  =  y^3 - 3y                                   |
  |                                                                          |
  |  STEP 4   You now have a QUADRATIC in y. Solve it.                       |
  |                                                                          |
  |  STEP 5   For each y, solve  x + 1/x = y ,  i.e.  x^2 - y x + 1 = 0 .    |
  |                                                                          |
  |  STEP 6   Collect all the x values and substitute back.                  |
  +--------------------------------------------------------------------------+

  Where  x^2 + 1/x^2 = y^2 - 2  comes from:
        ( x + 1/x )^2  =  x^2 + 2 + 1/x^2      ->    x^2 + 1/x^2 = y^2 - 2
```

**WORKED EXAMPLE 12.1** — Solve `6x^4 - 35x^3 + 62x^2 - 35x + 6 = 0`.

```
  Coefficients:  6 , -35 , 62 , -35 , 6     -> reads the same both ways
                 -> CLASS ONE, degree 4 (EVEN).

  STEP 1   x = 0 is not a root (constant term is 6, not 0), so we may divide by x^2:

              6x^2  -  35x  +  62  -  35/x  +  6/x^2  =  0

  STEP 2   Group:

              6 ( x^2 + 1/x^2 )  -  35 ( x + 1/x )  +  62  =  0

  STEP 3   Put  y = x + 1/x   so  x^2 + 1/x^2 = y^2 - 2 :

              6 ( y^2 - 2 )  -  35 y  +  62  =  0
              6y^2 - 12 - 35y + 62           =  0
              6y^2 - 35y + 50                =  0

  STEP 4   Discriminant = 35^2 - 4(6)(50) = 1225 - 1200 = 25 ,  sqrt = 5

              y = (35 +/- 5) / 12    ->    y = 40/12 = 10/3    or    y = 30/12 = 5/2

  STEP 5   CASE y = 10/3 :
              x + 1/x = 10/3
              3x^2 - 10x + 3 = 0
              (3x - 1)(x - 3) = 0     ->    x = 1/3 ,  x = 3

           CASE y = 5/2 :
              x + 1/x = 5/2
              2x^2 - 5x + 2 = 0
              (2x - 1)(x - 2) = 0     ->    x = 1/2 ,  x = 2

  ROOTS :  3 , 1/3 , 2 , 1/2       (note the reciprocal pairs - as expected)

  STEP 6   VERIFY in  6x^4 - 35x^3 + 62x^2 - 35x + 6 :

      x = 2 :  6(16) - 35(8) + 62(4) - 70 + 6
            =    96  -  280  +  248  - 70 + 6  =  0                YES

      x = 3 :  6(81) - 35(27) + 62(9) - 105 + 6
            =   486  -   945  +  558  - 105 + 6 =  0               YES

      (1/2 and 1/3 follow automatically, since the equation is reciprocal.)
```

**WORKED EXAMPLE 12.2 (odd degree)** — Solve `2x^5 + x^4 - 12x^3 - 12x^2 + x + 2 = 0`.

```
  Coefficients:  2 , 1 , -12 , -12 , 1 , 2     -> palindrome
                 -> CLASS ONE, degree 5 (ODD)   ->   x = -1 is a root.

  Check:  2(-1) + 1 - 12(-1) - 12 + (-1) + 2 = -2 + 1 + 12 - 12 - 1 + 2 = 0   YES

  Remove it by synthetic division with -1:

       -1 |   2     1    -12    -12      1      2
          |        -2      1     11      1     -2
          +--------------------------------------
              2    -1    -11     -1      2      0    <- remainder 0, good

  Left with:   2x^4 - x^3 - 11x^2 - x + 2 = 0     (class one, even - as promised)

  Divide by x^2:      2x^2 - x - 11 - 1/x + 2/x^2 = 0

                      2( x^2 + 1/x^2 ) - ( x + 1/x ) - 11 = 0

  Put y = x + 1/x :   2( y^2 - 2 ) - y - 11 = 0
                      2y^2 - 4 - y - 11     = 0
                      2y^2 - y - 15         = 0
                      (2y + 5)(y - 3)       = 0
                       y = -5/2   or   y = 3

  CASE y = 3    :  x^2 - 3x + 1 = 0   ->   x = ( 3 +/- sqrt 5 ) / 2

  CASE y = -5/2 :  x + 1/x = -5/2
                   2x^2 + 5x + 2 = 0
                   (2x + 1)(x + 2) = 0    ->    x = -1/2 ,  x = -2

  ROOTS :   -1 ,  -2 ,  -1/2 ,  (3 + sqrt 5)/2 ,  (3 - sqrt 5)/2

  VERIFY  x = -2  in  2x^5 + x^4 - 12x^3 - 12x^2 + x + 2 :
        2(-32) + 16 - 12(-8) - 12(4) + (-2) + 2
      =  -64  + 16  +  96   -  48   -  2  + 2   =  0                  YES

  VERIFY  x = -1/2 :
        2(-1/32) + 1/16 - 12(-1/8) - 12(1/4) - 1/2 + 2
      =  -1/16 + 1/16 + 3/2 - 3 - 1/2 + 2  =  0                       YES

  CHECK the surd pair:  their sum = 3 and product = (9-5)/4 = 1.
        Total sum of all roots = -1 - 2 - 1/2 + 3 = -1/2 = -b/a = -1/2   YES
        Total product = (-1)(-2)(-1/2)(1) = -1 ;  and -a5/a0 = -2/2 = -1  YES
```

> **TRAP 1:** Before dividing by x^2 you should note that x = 0 is not a root
> (otherwise dividing by x is illegal). One line: "the constant term is not zero,
> so x = 0 is not a root". Examiners give a mark for it.

> **TRAP 2:** For a class TWO even-degree equation, both +1 and -1 are roots, so
> take out `(x^2 - 1)` — not just `(x - 1)`.

---

# TOPIC 13 — DESCARTES' RULE OF SIGNS

This tells you how many **real** roots to expect, without solving anything.
It is quick marks in EAPCET and a useful sanity check in the board exam.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  Write f(x) with the terms in descending order and count how many times  |
  |  the SIGN CHANGES from one term to the next. Call it  p .                |
  |                                                                          |
  |     number of POSITIVE real roots  <=  p ,  and differs from p by an     |
  |     even number (p, p-2, p-4, ...)                                       |
  |                                                                          |
  |  Do the same for f(-x). Call the count  q .                              |
  |                                                                          |
  |     number of NEGATIVE real roots  <=  q ,  and differs from q by an     |
  |     even number.                                                         |
  |                                                                          |
  |  Missing terms are simply skipped, not counted as sign changes.          |
  +--------------------------------------------------------------------------+
```

**WORKED EXAMPLE 13.1** — Discuss the roots of `x^3 + 3x^2 + 5x - 9 = 0`.

```
  f(x)  signs:   +   +   +   -        changes:  (+ to -) once      p = 1
        -> EXACTLY 1 positive real root (it cannot be 1-2 = -1).

  f(-x) = -x^3 + 3x^2 - 5x - 9
        signs:   -   +   -   -        changes: (- to +), (+ to -)  q = 2
        -> 2 or 0 negative real roots.

  Degree 3, so:   1 positive + 2 negative + 0 imaginary
              or  1 positive + 0 negative + 2 imaginary.

  CHECK the truth:  x = 1 gives 1 + 3 + 5 - 9 = 0, so 1 is a root.
        x^3 + 3x^2 + 5x - 9 = (x - 1)(x^2 + 4x + 9)
        For x^2 + 4x + 9 the discriminant is 16 - 36 = -20 < 0, so both remaining
        roots are imaginary.  So: 1 positive, 0 negative, 2 imaginary.
        Consistent with the rule.
```

**WORKED EXAMPLE 13.2** — `x^4 + x^2 + 1 = 0`.

```
  f(x)  : + + +     ->  p = 0  ->  NO positive real roots
  f(-x) = x^4 + x^2 + 1 : + + + ->  q = 0  ->  NO negative real roots
  And x = 0 is not a root (constant is 1).

  So this equation has NO real roots at all - all four roots are imaginary.
```

> **TRAP:** Descartes' rule gives a MAXIMUM, not an exact count — unless the count
> is 0 or 1, in which case it is exact. Write "at most" unless p is 0 or 1.

---

# TOPIC 14 — PUTTING IT TOGETHER: HOW TO ATTACK ANY 7-MARK QUESTION

```
                   READ THE CONDITION AFTER THE COMMA
                                 |
        +------------------------+------------------------+
        |                        |                        |
   "roots are in ..."     "one root is ..."      "product/sum of two
        |                        |                 roots is ..."
    +---+---+---+                |                        |
    AP  GP  HP  equal       real -> divide           set up p and q,
    |   |   |    |          surd -> conjugate        use s1 and s3
  a-d a/r flip  a,a,b       imag -> conjugate              |
   a   a   to     |               |                   two quadratics
  a+d  ar reci-   |          form x^2 - (sum)x
        |  procals|          + (product), divide
        +---------+---------------+------------------------+
                                  |
                       WRITE ALL n ROOTS
                                  |
                    SUBSTITUTE EVERY ROOT BACK IN
                    (this is what separates 7/7 from 4/7)
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I divide by the leading coefficient?  (s1 = -b/a, NOT -b)

  [ ]  Did I get the ALTERNATING SIGNS right?   - + - +   starting with minus.

  [ ]  For s2 of a quartic, did I write all SIX terms?  For s3, all FOUR?

  [ ]  AP question: did I start with the SUM?

  [ ]  GP question: did I start with the PRODUCT?

  [ ]  HP question: did I flip to reciprocals BEFORE using a-d, a, a+d?

  [ ]  "Two roots equal": did I TEST both candidate values of a in the third
       equation and REJECT the one that fails?

  [ ]  Conjugate pair question: did I write the sentence
       "since the coefficients are real/rational, the conjugate is also a root"?

  [ ]  Diminishing roots: did I use  x -> x + k  (not x - k)?

  [ ]  Removing the second term: did I use  h = -a1/(n a0)  with the RIGHT n?

  [ ]  Reciprocal equation: did I state "x = 0 is not a root" before dividing?

  [ ]  Reciprocal equation: did I remember  x^2 + 1/x^2 = y^2 - 2 (minus 2)?

  [ ]  Did I write down ALL n roots?  A cubic must have 3, a quartic must have 4.

  [ ]  DID I SUBSTITUTE EVERY ROOT BACK INTO THE ORIGINAL EQUATION?
       Two extra minutes. It converts a guess into a certainty.
```
