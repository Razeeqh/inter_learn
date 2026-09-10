# Complex Numbers — Concepts Explained Simply

Read one topic. Do its worked example. Then move to the next.
Nothing here assumes you remember anything from Class 10 except how to
multiply out brackets and how to use Pythagoras.

---

# TOPIC 1 — Why complex numbers had to be invented

Try to solve this with ordinary numbers:

```
      x^2 + 1  =  0
      x^2      = -1
      x        =  sqrt(-1)
```

There is **no real number** whose square is -1, because:

```
      positive x positive = positive        3 x 3 = 9
      negative x negative = positive       -3 x -3 = 9
      zero x zero         = zero            0 x 0 = 0
```

Every real number squared is 0 or positive. So sqrt(-1) does not exist among
real numbers. Mathematicians did the only sensible thing: they **invented** a
new number, gave it the name **i** (for "imaginary"), and made one single rule:

```
  +--------------------------------------------+
  |                                            |
  |          i  =  sqrt(-1)                    |
  |                                            |
  |          i^2  =  -1                        |
  |                                            |
  +--------------------------------------------+
```

That is the entire foundation. Nothing else in this chapter is new.

**Square roots of other negative numbers** now become easy:

```
   sqrt(-9)   =  sqrt(9)  x sqrt(-1)  =  3i
   sqrt(-25)  =  sqrt(25) x sqrt(-1)  =  5i
   sqrt(-7)   =  sqrt(7)  x sqrt(-1)  =  i sqrt7
```

> **TRAP:** The rule `sqrt(a) x sqrt(b) = sqrt(ab)` **breaks** when BOTH a and b
> are negative. Look:
> ```
>   WRONG:  sqrt(-4) x sqrt(-9) = sqrt(36) = 6
>   RIGHT:  sqrt(-4) x sqrt(-9) = (2i)(3i) = 6 i^2 = -6
> ```
> **Always convert to i FIRST, then multiply.**

### Worked example
Simplify `sqrt(-16) x sqrt(-4) + sqrt(-9)`.

```
  Step 1  convert every square root to i form
          sqrt(-16) = 4i        sqrt(-4) = 2i        sqrt(-9) = 3i

  Step 2  now multiply
          (4i)(2i) = 8 i^2 = 8(-1) = -8

  Step 3  add the last term
          -8 + 3i

  ANSWER:  -8 + 3i
```

---

# TOPIC 2 — Powers of i (2-mark question every year)

Just keep multiplying by i and watch what happens:

```
   i^1  =  i
   i^2  =  -1
   i^3  =  i^2 x i  =  (-1)(i)  =  -i
   i^4  =  i^2 x i^2 =  (-1)(-1) =  1        <-- back to 1
   i^5  =  i^4 x i  =  1 x i  =  i           <-- and it starts again
```

So the powers of i go round in a **cycle of length 4**:

```
                  +-----------------------------+
                  |                             |
                  v                             |
        i   -->  -1   -->  -i   -->   1   ------+
       i^1      i^2       i^3        i^4
       i^5      i^6       i^7        i^8
       i^9      i^10      i^11       i^12
```

## The method for any i^n

```
  +----------------------------------------------------------+
  |   STEP 1   Divide n by 4.  Keep only the REMAINDER r.    |
  |   STEP 2   Look up:                                       |
  |                r = 0   ->  i^n =  1                       |
  |                r = 1   ->  i^n =  i                       |
  |                r = 2   ->  i^n = -1                       |
  |                r = 3   ->  i^n = -i                       |
  +----------------------------------------------------------+
```

### Worked example 1
Find `i^59`.

```
  59 divided by 4  =  14 remainder 3        (since 4 x 14 = 56, 59 - 56 = 3)
  remainder 3  ->  i^59  =  -i

  ANSWER:  -i
```

### Worked example 2
Find `i^2022`.

```
  2022 divided by 4:  4 x 505 = 2020 , remainder 2
  remainder 2  ->  i^2022  =  -1

  ANSWER:  -1
```

## Negative powers

```
   1        1     -i        -i        -i
  ---  =   --- x ---   =  ------  =  ----  =  -i
   i        i    -i        -i^2        1

  So   i^-1 = -i ,   i^-2 = -1 ,   i^-3 = i ,   i^-4 = 1
```

## The sum trick — worth memorising

```
  i + i^2 + i^3 + i^4  =  i - 1 - i + 1  =  0

  +--------------------------------------------------+
  |  ANY 4 CONSECUTIVE POWERS OF i ADD UP TO ZERO.   |
  +--------------------------------------------------+
```

### Worked example 3
Find `i^1 + i^2 + i^3 + ... + i^102`.

```
  Group them 4 at a time. 102 = 4 x 25 + 2
  The first 100 terms form 25 complete groups -> each group = 0 -> total 0.
  Left over:  i^101 + i^102

  101 / 4 -> remainder 1  ->  i^101 = i
  102 / 4 -> remainder 2  ->  i^102 = -1

  ANSWER:  i - 1     i.e.   -1 + i
```

---

# TOPIC 3 — What a complex number actually is

```
  +---------------------------------------------------------------+
  |                                                               |
  |            z  =  x  +  i y                                    |
  |                  ^      ^                                     |
  |                  |      |                                     |
  |         REAL PART      IMAGINARY PART                         |
  |         Re(z) = x      Im(z) = y                              |
  |                                                               |
  |         x and y are ORDINARY REAL NUMBERS.                    |
  |                                                               |
  +---------------------------------------------------------------+
```

> **TRAP:** In `z = 3 + 5i`, the imaginary part is **5**, NOT `5i`.
> Im(z) is always a plain real number. Losing this costs marks constantly.

| z | Re(z) | Im(z) | Name |
|---|-------|-------|------|
| 3 + 5i | 3 | 5 | complex |
| 7 (that is 7 + 0i) | 7 | 0 | purely real |
| -2i (that is 0 - 2i) | 0 | -2 | purely imaginary |
| 0 | 0 | 0 | both real and purely imaginary |

**A complex number is really an ORDERED PAIR** `z = (x, y)`.
Your textbook sometimes writes `(3, 5)` instead of `3 + 5i`. Same thing.

> **TRAP:** You cannot say one complex number is "bigger" than another.
> `2 + 3i > 1 + i` is **meaningless**. Inequalities only work on real numbers.
> But `|z1| > |z2|` IS fine, because moduli are real.

---

# TOPIC 4 — Equality of complex numbers

Two complex numbers are equal ONLY IF:
1. the **real parts** are equal, AND
2. the **imaginary parts** are equal.

```
  +-------------------------------------------------+
  |   x1 + i y1  =  x2 + i y2                       |
  |                                                 |
  |   <=>    x1 = x2    AND    y1 = y2              |
  +-------------------------------------------------+
```

This is what makes the classic 2-mark question work: **one** complex equation
becomes **two** ordinary equations.

### Worked example 1
If `4x + i(3x - y) = 3 + i(-6)`, find the real numbers x and y.

```
  Compare REAL parts:        4x = 3        ->   x = 3/4

  Compare IMAGINARY parts:   3x - y = -6
                             3(3/4) - y = -6
                             9/4 - y = -6
                             -y = -6 - 9/4
                             -y = -24/4 - 9/4 = -33/4
                              y = 33/4

  ANSWER:  x = 3/4 ,  y = 33/4
```

### Worked example 2
If `(x - 1) + i(y + 3) = 5 - 2i`, find x and y.

```
  Real:       x - 1 = 5    ->  x = 6
  Imaginary:  y + 3 = -2   ->  y = -5

  ANSWER:  x = 6 , y = -5
```

---

# TOPIC 5 — Addition, subtraction, multiplication

**Treat i like an ordinary letter. Only at the very end, replace i^2 by -1.**

## Addition and subtraction — collect like terms

```
  (a + ib) + (c + id)  =  (a + c) + i(b + d)
  (a + ib) - (c + id)  =  (a - c) + i(b - d)
```

```
   (3 + 5i) + (2 - 7i)  =  (3 + 2) + (5 - 7)i  =  5 - 2i
   (3 + 5i) - (2 - 7i)  =  (3 - 2) + (5 + 7)i  =  1 + 12i
```

## Multiplication — expand the brackets (FOIL), then use i^2 = -1

```
  (a + ib)(c + id)  =  ac + iad + ibc + i^2 bd
                    =  ac + iad + ibc - bd
                    =  (ac - bd)  +  i(ad + bc)
```

```
  +--------------------------------------------+
  |   (a + ib)(c + id) = (ac - bd) + i(ad+bc)  |
  |                       ^^^^^^^                |
  |         note the MINUS - that is the i^2    |
  +--------------------------------------------+
```

### Worked example
Find `(2 + 3i)(4 - 5i)`.

```
  Step 1  expand every pair
          2 x 4    =  8
          2 x -5i  = -10i
          3i x 4   =  12i
          3i x -5i = -15 i^2

  Step 2  replace i^2 by -1
          -15 i^2  =  -15(-1)  =  +15

  Step 3  collect
          real:       8 + 15  =  23
          imaginary: -10i + 12i  =  2i

  ANSWER:  23 + 2i
```

## Useful identities (they still work — nothing changes)

```
   (a + ib)^2  =  a^2 - b^2 + 2iab
   (a - ib)^2  =  a^2 - b^2 - 2iab
   (a + ib)(a - ib)  =  a^2 + b^2       <-- NO i , the answer is REAL

   (1 + i)^2  =  1 + 2i + i^2  =  2i          <-- MEMORISE
   (1 - i)^2  =  1 - 2i + i^2  = -2i          <-- MEMORISE
   (1 + i)(1 - i) = 1 - i^2 = 2               <-- MEMORISE
```

These three little results save you minutes in the exam.

---

# TOPIC 6 — The CONJUGATE (the key to the chapter)

```
  +-------------------------------------------------------+
  |                                                       |
  |    if   z      =  x + iy                              |
  |                                                       |
  |    then z bar  =  x - iy       (just flip the sign    |
  |                                 of the i part)        |
  +-------------------------------------------------------+
```

Your book writes it with a bar on top. Here we write **z bar**.

```
     z = 3 + 4i     ->    z bar = 3 - 4i
     z = -2 - 7i    ->    z bar = -2 + 7i
     z = 5          ->    z bar = 5           (real numbers don't change)
     z = 6i         ->    z bar = -6i
```

## Why the conjugate matters

```
   z x z bar  =  (x + iy)(x - iy)
              =  x^2 - (iy)^2
              =  x^2 - i^2 y^2
              =  x^2 + y^2                <-- REAL, and never negative
```

**Multiplying by the conjugate kills i.** That is the whole point.

## Properties of the conjugate

```
  +----------------------------------------------------------------+
  |  1.  (z bar) bar    =  z                                       |
  |  2.  z + z bar      =  2x      =  2 Re(z)                      |
  |  3.  z - z bar      =  2iy     =  2i Im(z)                     |
  |  4.  z x z bar      =  x^2+y^2 =  |z|^2                        |
  |  5.  (z1 + z2) bar  =  z1 bar + z2 bar                         |
  |  6.  (z1 - z2) bar  =  z1 bar - z2 bar                         |
  |  7.  (z1 z2) bar    =  (z1 bar)(z2 bar)                        |
  |  8.  (z1/z2) bar    =  (z1 bar)/(z2 bar)                       |
  |  9.  z is REAL              <=>   z = z bar                    |
  | 10.  z is PURELY IMAGINARY  <=>   z + z bar = 0  (and z not 0) |
  +----------------------------------------------------------------+
```

So from properties 2 and 3:

```
            z + z bar                       z - z bar
   Re(z) = -----------          Im(z) =  --------------
                2                              2i
```

### Worked example
If `z = 4 - 3i`, verify that `z + z bar = 2 Re(z)` and `z z bar = x^2 + y^2`.

```
  z = 4 - 3i        so   z bar = 4 + 3i

  z + z bar = (4 - 3i) + (4 + 3i) = 8
  2 Re(z)   = 2 x 4 = 8                       MATCHES

  z x z bar = (4 - 3i)(4 + 3i) = 16 - 9i^2 = 16 + 9 = 25
  x^2 + y^2 = 4^2 + (-3)^2 = 16 + 9 = 25      MATCHES
```

---

# TOPIC 7 — Division: "express in the form a + ib"

**This is the most common 2-mark question in the whole paper.**

You are never allowed to leave i in the denominator. The fix is always the same:

```
  +--------------------------------------------------------------+
  |   MULTIPLY TOP AND BOTTOM BY THE CONJUGATE OF THE BOTTOM.    |
  +--------------------------------------------------------------+
```

```
    a + ib      a + ib     c - id      (a + ib)(c - id)
   --------  = -------- x --------  = -------------------
    c + id      c + id     c - id          c^2 + d^2
                           ^^^^^^^
                        conjugate of the bottom
```

The new bottom `c^2 + d^2` is a plain real number, so you can just split it.

### Worked example 1
Express `(2 + 5i) / (-4 - 6i)` in the form a + ib. *(a real AP board question)*

```
  Bottom = -4 - 6i     ->   its conjugate = -4 + 6i

    2 + 5i     -4 + 6i        (2 + 5i)(-4 + 6i)
   -------- x ---------  =  ----------------------
   -4 - 6i     -4 + 6i       (-4)^2 + (-6)^2

  TOP:   (2)(-4) + (2)(6i) + (5i)(-4) + (5i)(6i)
       =  -8 + 12i - 20i + 30 i^2
       =  -8 + 12i - 20i - 30
       =  -38 - 8i

  BOTTOM: 16 + 36 = 52

        -38 - 8i      -38      8i        -19      2i
      = ---------  =  ----  -  ---   =   ----  -  ---
           52          52       52        26       13

  ANSWER:   -19/26  -  (2/13) i
```

### Worked example 2
Express `(1 + i) / (1 - i)` in the form a + ib.

```
  Fast way - use the memorised identity:

    1 + i     (1 + i)     (1 + i)      (1 + i)^2       2i
   -------  = ------- x  --------  =  -----------  =  ----  =  i
    1 - i     (1 - i)     (1 + i)          2            2

  ANSWER:  0 + 1i , that is  i
```

> **Remember these two forever — they appear constantly:**
> ```
>     (1 + i)/(1 - i)  =  i          (1 - i)/(1 + i)  =  -i
> ```

### Worked example 3
Find the real and imaginary parts of `(cos theta + i sin theta) / (cos theta - i sin theta)`.

```
  Multiply top and bottom by (cos theta + i sin theta):

     (cos theta + i sin theta)^2          cos^2 theta - sin^2 theta + 2i sin theta cos theta
   = -----------------------------   =   ---------------------------------------------------
     cos^2 theta + sin^2 theta                            1

   = cos 2theta  +  i sin 2theta

  Re = cos 2theta        Im = sin 2theta
```

---

# TOPIC 8 — Multiplicative inverse

The multiplicative inverse of z is the number you multiply z by to get 1.
It is written `z^-1` or `1/z`.

```
  +-------------------------------------------------------+
  |                                                       |
  |    -1        1        z bar         x - iy            |
  |   z    =    ---   =  --------  =  -----------         |
  |              z        |z|^2        x^2 + y^2          |
  |                                                       |
  |    (exists for every z except z = 0)                  |
  +-------------------------------------------------------+
```

**In words: flip the sign of the i part, then divide by (x^2 + y^2).**
That is a 20-second answer.

### Worked example 1
Find the multiplicative inverse of `7 + 24i`.

```
  x = 7 , y = 24
  x^2 + y^2 = 49 + 576 = 625

        -1      7 - 24i        7        24
       z    =  ---------  =   -----  -  ----- i
                 625           625       625

  ANSWER:  7/625  -  (24/625) i
```

### Worked example 2
Find the multiplicative inverse of `sqrt5 + 3i`.

```
  x^2 + y^2 = 5 + 9 = 14

        -1     sqrt5 - 3i       sqrt5        3
       z    = ------------  =   -----  -  ----- i
                   14            14         14
```

---

# TOPIC 9 — The ARGAND PLANE (drawing complex numbers)

Since `z = x + iy` is really the pair `(x, y)`, you can **plot it** exactly like
a point in coordinate geometry. The picture is called the **Argand diagram**.

```
                        IMAGINARY AXIS
                              |
                          3   +          * P (2, 3)  =  2 + 3i
                              |         /
                          2   +        /
                              |       /
                          1   +      /
                              |     /
      ------+-----+-----+-----O----+-----+-----+-----+------ REAL AXIS
           -3    -2    -1     |    1     2     3     4
                              |
                         -1   +
                              |
                         -2   +          * Q (3, -2)  =  3 - 2i
                              |
```

```
  +---------------------------------------------------------------+
  |   HORIZONTAL axis = REAL axis        (x = Re z)               |
  |   VERTICAL   axis = IMAGINARY axis   (y = Im z)               |
  |                                                               |
  |   Every point on the real axis      -> purely real number     |
  |   Every point on the imaginary axis -> purely imaginary       |
  +---------------------------------------------------------------+
```

## z as a VECTOR

You can also draw z as an **arrow from the origin O to the point P**.

```
              |
              |        P
              |       /|
              |      / |
              |     /  |  y
              |    /   |
              |   / <-- this arrow OP is the vector form of z
              |  /theta|
        ------O--------+---------
                   x
```

Then:
- **Adding** two complex numbers = the parallelogram law of vectors.
- **Subtracting** `z1 - z2` = the arrow from the point z2 to the point z1.
- `|z1 - z2|` = the **DISTANCE between the two points** z1 and z2.

```
  +-------------------------------------------------------------+
  |   |z|          =  distance of the point z from the ORIGIN   |
  |   |z1 - z2|    =  distance between the points z1 and z2     |
  +-------------------------------------------------------------+
```

That second line is the secret to every locus question in Topic 14.

---

# TOPIC 10 — MODULUS |z|

```
  +----------------------------------------------+
  |                                              |
  |     |z|  =  |x + iy|  =  sqrt(x^2 + y^2)     |
  |                                              |
  +----------------------------------------------+
```

It is just Pythagoras on the Argand diagram: the length of the arrow OP.

```
              |
              |          * P(x, y)
              |         /|
              |    r   / |
              |       /  | y
              |      /   |
        ------O-----+----+------
                 x

        r^2 = x^2 + y^2      ->     r = sqrt(x^2 + y^2)
```

```
   |3 + 4i|      =  sqrt(9 + 16)   =  sqrt25  =  5
   |-5 + 12i|    =  sqrt(25 + 144) =  sqrt169 =  13
   |1 + i|       =  sqrt(1 + 1)    =  sqrt2
   |-7|          =  7
   |3i|          =  3
```

> **TRAP:** The modulus is ALWAYS a non-negative REAL number.
> If your answer has an i in it, you have made a mistake.
> And remember the **squares kill the minus signs**: `|-3 - 4i| = 5`, not -5.

## Properties of the modulus

```
  +--------------------------------------------------------------+
  |  1.  |z| >= 0 , and |z| = 0 only when z = 0                  |
  |  2.  |z| = |z bar| = |-z| = |-z bar|                         |
  |  3.  z x z bar = |z|^2                                       |
  |  4.  |z1 z2|   = |z1| x |z2|                                 |
  |  5.  |z1 / z2| = |z1| / |z2|      (z2 not 0)                 |
  |  6.  |z^n|     = |z|^n                                       |
  |  7.  |z1 + z2| <= |z1| + |z2|      TRIANGLE INEQUALITY       |
  |  8.  |z1 - z2| >= | |z1| - |z2| |                            |
  |  9.  |z1+z2|^2 + |z1-z2|^2 = 2(|z1|^2 + |z2|^2)              |
  |                                    (parallelogram law)       |
  | 10.  Re(z) <= |z|   and   Im(z) <= |z|                       |
  +--------------------------------------------------------------+
```

Property 4 is the big time-saver.

### Worked example 1
Find `|(3 + 4i)(1 - 2i) / (2 + i)|`.

```
  DO NOT multiply anything out. Use property 4 and 5:

   |3 + 4i| x |1 - 2i|      sqrt25 x sqrt5       5 sqrt5
  ---------------------  = ----------------  =  ---------  =  5
        |2 + i|                 sqrt5             sqrt5

  ANSWER:  5
```

### Worked example 2
If `z = 2 - 3i`, show that `z^2 - 4z + 13 = 0`.

```
  z^2 = (2 - 3i)^2 = 4 - 12i + 9i^2 = 4 - 12i - 9 = -5 - 12i
  -4z = -4(2 - 3i) = -8 + 12i
  +13 = 13

  Add:   (-5 - 12i) + (-8 + 12i) + 13
       =  (-5 - 8 + 13)  +  (-12 + 12)i
       =  0 + 0i
       =  0            PROVED
```

## Triangle inequality — the picture

```
                       z1 + z2
                     *
                    / \
                   /   \        The direct route O -> (z1+z2)
                  /     \       is never longer than going
       |z1+z2|   /       \ |z2| O -> z1 -> (z1+z2).
                /         \
               /           \
              O-------------* z1
                    |z1|

           |z1 + z2|  <=  |z1| + |z2|

  Equality happens ONLY when z1 and z2 point the same way,
  i.e. when arg z1 = arg z2.
```

---

# TOPIC 11 — AMPLITUDE (argument) and the QUADRANT RULE

The **amplitude** (also called **argument**) of z is the **angle** the arrow OP
makes with the positive real axis, measured anticlockwise.

```
              |
              |        * P
              |       /
              |      /
              |     /
              |    /  theta
        ------O---+--_)-------------
              |

        tan theta  =  y / x
```

## The problem with tan

`tan` gives the same value in two opposite quadrants. `tan theta = 1` could mean
45 degrees **or** 225 degrees. So you MUST decide the quadrant by looking at the
SIGNS of x and y, not by trusting the calculator.

```
                          IMAGINARY
                              |
          QUADRANT 2          |         QUADRANT 1
          x < 0 , y > 0       |         x > 0 , y > 0
                              |
          theta = pi - alpha  |         theta = alpha
                              |
        ----------------------O---------------------- REAL
                              |
          QUADRANT 3          |         QUADRANT 4
          x < 0 , y < 0       |         x > 0 , y < 0
                              |
          theta = alpha - pi  |         theta = -alpha
          (= -(pi - alpha))   |
                              |
```

```
  +-----------------------------------------------------------------+
  |   THE METHOD (never fails)                                      |
  |                                                                 |
  |   STEP 1  Find r = |z| = sqrt(x^2 + y^2)                        |
  |   STEP 2  Find the ACUTE angle  alpha = tan^-1 | y / x |        |
  |           (use only the SIZES of x and y, ignore signs;         |
  |            alpha is always between 0 and pi/2)                  |
  |   STEP 3  Decide the quadrant from the SIGNS of x and y.        |
  |   STEP 4  Apply the quadrant rule above.                        |
  +-----------------------------------------------------------------+
```

## Principal amplitude

There are infinitely many angles for the same point (add 360 degrees as often
as you like). The **PRINCIPAL** value is the one in the range:

```
        -pi  <  theta  <=  pi          (that is  -180 deg < theta <= 180 deg)
```

Written `Amp z` or `Arg z` with a capital A. When the exam says "principal
amplitude", your answer MUST lie in that range.

## The angles you need to recognise instantly

| tan alpha | alpha |
|-----------|-------|
| 1 / sqrt3 | pi/6 (30 deg) |
| 1 | pi/4 (45 deg) |
| sqrt3 | pi/3 (60 deg) |
| 0 | 0 |
| undefined (x = 0) | pi/2 (90 deg) |

## Special cases (no working needed)

```
   z = 5      (positive real)      ->  Amp = 0
   z = -5     (negative real)      ->  Amp = pi
   z = 3i     (positive imaginary) ->  Amp = pi/2
   z = -3i    (negative imaginary) ->  Amp = -pi/2
   z = 0                           ->  Amp is UNDEFINED
```

### Worked example 1
Find the modulus and principal amplitude of `-1 - i sqrt3`.

```
  x = -1 ,  y = -sqrt3       ->  BOTH NEGATIVE  ->  QUADRANT 3

  Step 1   r = sqrt( (-1)^2 + (-sqrt3)^2 ) = sqrt(1 + 3) = sqrt4 = 2

  Step 2   alpha = tan^-1 | -sqrt3 / -1 | = tan^-1 (sqrt3) = pi/3

  Step 3   Quadrant 3.

  Step 4   theta = alpha - pi = pi/3 - pi = -2pi/3

  ANSWER:  modulus = 2 ,  principal amplitude = -2pi/3
```

```
   Picture check:
                      |
                      |
             ---------O---------
                     /|
                    / |
                   /  |
                  *   |     the point (-1, -sqrt3) is DOWN and LEFT,
             (-1,-sqrt3)     so the angle must be negative and large.
                             -2pi/3 = -120 degrees.  Correct.
```

### Worked example 2
Find the modulus and principal amplitude of `-sqrt7 + i sqrt21`.

```
  x = -sqrt7 (negative) ,  y = sqrt21 (positive)  ->  QUADRANT 2

  r = sqrt( 7 + 21 ) = sqrt28 = 2 sqrt7

  alpha = tan^-1 | sqrt21 / sqrt7 |  =  tan^-1 ( sqrt3 )  =  pi/3

  Quadrant 2  ->  theta = pi - pi/3 = 2pi/3

  ANSWER:  modulus = 2 sqrt7 ,  principal amplitude = 2pi/3
```

> **TRAP:** The single most common mistake in this chapter is writing
> `theta = tan^-1(y/x)` straight off the calculator. For `-1 - i sqrt3` the
> calculator gives `tan^-1(sqrt3) = pi/3`, which points into Quadrant 1 —
> the completely **wrong** direction. **Always sketch the point first.**

## Properties of the amplitude

```
  +-----------------------------------------------------------+
  |   arg(z1 z2)   =  arg z1  +  arg z2                       |
  |   arg(z1 / z2) =  arg z1  -  arg z2                       |
  |   arg(z^n)     =  n arg z                                 |
  |   arg(z bar)   =  - arg z                                 |
  |   arg(1/z)     =  - arg z                                 |
  |                                                           |
  |   (you may have to add or subtract 2pi to bring the       |
  |    answer back into the principal range)                  |
  +-----------------------------------------------------------+
```

---

# TOPIC 12 — POLAR FORM (modulus-amplitude form)

From the picture in Topic 11:

```
        x = r cos theta            y = r sin theta

   so   z = x + iy = r cos theta + i r sin theta
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |     z  =  r ( cos theta  +  i sin theta )                     |
  |                                                               |
  |     r     = |z| = sqrt(x^2 + y^2)     the MODULUS             |
  |     theta = the AMPLITUDE (use the principal value)           |
  |                                                               |
  +---------------------------------------------------------------+
```

> **TRAP:** r must be POSITIVE and the sign inside must be a **PLUS**.
> `2(cos A - i sin A)` is NOT in polar form. Fix it with
> `cos(-A) = cos A` and `sin(-A) = -sin A`, giving `2(cos(-A) + i sin(-A))`.

## Converting BOTH ways

```
   CARTESIAN  ------------------------->  POLAR
   x + iy       r = sqrt(x^2+y^2)         r(cos theta + i sin theta)
                theta by quadrant rule


   POLAR  ------------------------------>  CARTESIAN
   r(cos theta + i sin theta)              x = r cos theta
                                           y = r sin theta
```

### Worked example 1
Express `1 + i sqrt3` in modulus-amplitude form.

```
  x = 1 (+ve) ,  y = sqrt3 (+ve)   ->  QUADRANT 1

  r = sqrt(1 + 3) = 2
  alpha = tan^-1( sqrt3 / 1 ) = pi/3 ,  Quadrant 1  ->  theta = pi/3

  ANSWER:   1 + i sqrt3  =  2 ( cos(pi/3) + i sin(pi/3) )
```

### Worked example 2
Express `-1 + i` in modulus-amplitude form.

```
  x = -1 (-ve) , y = 1 (+ve)   ->  QUADRANT 2

  r = sqrt(1 + 1) = sqrt2
  alpha = tan^-1 |1 / -1| = tan^-1(1) = pi/4
  Quadrant 2  ->  theta = pi - pi/4 = 3pi/4

  ANSWER:  -1 + i  =  sqrt2 ( cos(3pi/4) + i sin(3pi/4) )
```

### Worked example 3
Express `1 - i` in modulus-amplitude form.

```
  x = 1 (+ve) , y = -1 (-ve)   ->  QUADRANT 4

  r = sqrt2 ,  alpha = pi/4 ,  Quadrant 4  ->  theta = -pi/4

  ANSWER:  sqrt2 ( cos(-pi/4) + i sin(-pi/4) )
```

## Why polar form is worth the trouble

```
   MULTIPLY  ->  multiply the moduli , ADD the angles
   DIVIDE    ->  divide the moduli   , SUBTRACT the angles

   r1(cos A + i sin A) x r2(cos B + i sin B)
                  =  r1 r2 ( cos(A+B) + i sin(A+B) )
```

Geometrically: **multiplying by a complex number STRETCHES by r and ROTATES
by theta.** Multiplying by i is a pure 90-degree anticlockwise turn.

---

# TOPIC 13 — SQUARE ROOT of a complex number

To find `sqrt(a + ib)`:

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   Let  m = |a + ib| = sqrt(a^2 + b^2)                            |
  |                                                                  |
  |                       ---------          ---------               |
  |                      / m + a            / m - a                  |
  |   sqrt(a+ib) = +/-  /  -------   +  i  /  -------                |
  |                   \/      2          \/      2                   |
  |                                                                  |
  |   ...then make the SIGN of the i-part match the sign of b.       |
  |   (if b is negative, put a minus in front of the i-part)         |
  |                                                                  |
  |   THE ANSWER ALWAYS HAS  +/-  IN FRONT.                          |
  +------------------------------------------------------------------+
```

### Worked example 1
Find `sqrt(7 + 24i)`.

```
  a = 7 , b = 24  (b is POSITIVE)

  m = sqrt(7^2 + 24^2) = sqrt(49 + 576) = sqrt625 = 25

  real part = sqrt( (25 + 7)/2 ) = sqrt(32/2) = sqrt16 = 4
  imag part = sqrt( (25 - 7)/2 ) = sqrt(18/2) = sqrt9  = 3

  b > 0  ->  keep the plus sign

  ANSWER:   +/- ( 4 + 3i )

  CHECK:  (4 + 3i)^2 = 16 + 24i + 9i^2 = 16 + 24i - 9 = 7 + 24i    CORRECT
```

### Worked example 2
Find `sqrt(-8 - 6i)`.

```
  a = -8 , b = -6  (b is NEGATIVE)

  m = sqrt(64 + 36) = sqrt100 = 10

  real part = sqrt( (10 - 8)/2 ) = sqrt(2/2) = 1
  imag part = sqrt( (10 + 8)/2 ) = sqrt(18/2) = 3

  b < 0  ->  the i-part takes a MINUS

  ANSWER:   +/- ( 1 - 3i )

  CHECK:  (1 - 3i)^2 = 1 - 6i + 9i^2 = 1 - 6i - 9 = -8 - 6i         CORRECT
```

## The alternative method (if you forget the formula)

Let `sqrt(a + ib) = x + iy`. Square both sides:

```
   x^2 - y^2 + 2ixy  =  a + ib

   Compare real parts:       x^2 - y^2 = a
   Compare imaginary parts:  2xy       = b

   Solve the two equations. Always give both sign options.
```

### Worked example 3 — by the alternative method
Find `sqrt(3 + 4i)`.

```
   x^2 - y^2 = 3        2xy = 4  ->  xy = 2  ->  y = 2/x

   x^2 - 4/x^2 = 3      ->   x^4 - 3x^2 - 4 = 0
                        ->   (x^2 - 4)(x^2 + 1) = 0
                        ->   x^2 = 4  (x^2 = -1 is rejected, x is real)
                        ->   x = 2  or  x = -2

   x = 2  ->  y = 1          x = -2  ->  y = -1

   ANSWER:  +/- (2 + i)
```

---

# TOPIC 14 — LOCUS problems (the 4-mark question)

A **locus** is the path traced by the point z when it obeys a rule.
The method is always one of two routes.

```
  +------------------------------------------------------------------+
  |  ROUTE 1 (fast) - recognise the standard shape                   |
  |                                                                  |
  |    |z - z1| = r            ->  CIRCLE, centre z1, radius r       |
  |    |z| = r                 ->  CIRCLE, centre origin, radius r   |
  |    |z - z1| = |z - z2|     ->  PERPENDICULAR BISECTOR of the     |
  |                                segment joining z1 and z2         |
  |    |z-z1| + |z-z2| = 2a    ->  ELLIPSE                           |
  |    |z-z1| - |z-z2| = 2a    ->  HYPERBOLA                         |
  |                                                                  |
  |  ROUTE 2 (always works) - substitute z = x + iy and grind        |
  |                                                                  |
  |    1. put z = x + iy                                             |
  |    2. simplify (rationalise if there is a fraction)              |
  |    3. take the modulus, or set the Real / Imaginary part to      |
  |       whatever the question demands                              |
  |    4. SQUARE both sides to remove the square roots               |
  |    5. tidy into a standard x-y equation                          |
  +------------------------------------------------------------------+
```

## The pictures

```
    |z - z1| = r                      |z - z1| = |z - z2|

         .---.                              |  <- perpendicular bisector
        /     \                             |
       |   *   |  radius r          z1 *----+----* z2
        \  z1 /                           / \
         `---'                          equal distances

    every point at a FIXED           every point EQUALLY FAR
    distance from z1                 from z1 and from z2
```

### Worked example 1
If `|z - 3 + i| = 4`, find the locus of z.

```
  Step 1  rewrite in the form |z - z1|
          |z - (3 - i)| = 4        so z1 = 3 - i , r = 4

  Step 2  RECOGNISE: circle with centre (3, -1) and radius 4.

  Step 3  as an equation, put z = x + iy:
          | (x - 3) + i(y + 1) | = 4
          sqrt( (x-3)^2 + (y+1)^2 ) = 4
          (x - 3)^2 + (y + 1)^2 = 16
          x^2 - 6x + 9 + y^2 + 2y + 1 = 16

  ANSWER:  x^2 + y^2 - 6x + 2y - 6 = 0
           a CIRCLE with centre (3, -1) and radius 4
```

### Worked example 2
If `|z + ai| = |z - ai|`, find the locus of z.

```
  This is |z - z1| = |z - z2| with z1 = -ai = (0, -a) and z2 = ai = (0, a).
  So the locus is the perpendicular bisector of the segment joining
  (0, -a) and (0, a) - which is the REAL AXIS.

  Proof by substitution:
     z = x + iy
     | x + i(y + a) |  =  | x + i(y - a) |
     x^2 + (y + a)^2   =  x^2 + (y - a)^2          (squared both sides)
     y^2 + 2ay + a^2   =  y^2 - 2ay + a^2
     4ay = 0
     y = 0

  ANSWER:  y = 0 , the REAL AXIS
```

### Worked example 3
If the amplitude of `(z - 2) / (z - 6i)` is `pi/2`, find the locus of z.

```
  Amplitude pi/2 means the number is PURELY IMAGINARY,
  so its REAL PART = 0.

  Put z = x + iy:

     z - 2  = (x - 2) + iy
     z - 6i = x + i(y - 6)

  Multiply top and bottom by the conjugate of the bottom:

     [ (x-2) + iy ] [ x - i(y-6) ]
     -----------------------------
        x^2 + (y - 6)^2

  Real part of the TOP:   (x - 2)(x)  +  (y)(y - 6)
                       =  x^2 - 2x + y^2 - 6y

  Set the real part to 0:

  ANSWER:  x^2 + y^2 - 2x - 6y = 0
           a CIRCLE through the origin, centre (1, 3), radius sqrt10
```

### Worked example 4
If the real part of `(z + 1) / (z + i)` is 1, find the locus of z.

```
  z = x + iy
  z + 1 = (x + 1) + iy
  z + i = x + i(y + 1)

  Real part of the quotient
        (x + 1)(x)  +  (y)(y + 1)         x^2 + x + y^2 + y
     = ---------------------------   =  ---------------------
           x^2 + (y + 1)^2               x^2 + y^2 + 2y + 1

  Set equal to 1:

     x^2 + x + y^2 + y  =  x^2 + y^2 + 2y + 1
             x + y      =  2y + 1
             x - y - 1  =  0

  ANSWER:  x - y - 1 = 0 , a STRAIGHT LINE
```

### Worked example 5
If `x + iy = 1 / (1 + cos theta + i sin theta)`, show that `4x^2 - 1 = 0`.

```
  Use the half-angle identities:
      1 + cos theta = 2 cos^2(theta/2)
      sin theta     = 2 sin(theta/2) cos(theta/2)

  Denominator = 2 cos^2(t/2) + 2i sin(t/2) cos(t/2)
              = 2 cos(t/2) [ cos(t/2) + i sin(t/2) ]

  So
                         1                    cos(t/2) - i sin(t/2)
   x + iy = ---------------------------  =  --------------------------
            2cos(t/2)[cos(t/2)+i sin(t/2)]      2 cos(t/2) x 1

           (multiplied top and bottom by cos(t/2) - i sin(t/2),
            and used cos^2 + sin^2 = 1)

            1        1
          = ---  -  --- i tan(t/2)
            2        2

  Comparing real parts:   x = 1/2

  Therefore   4x^2 = 4 x (1/4) = 1     ->    4x^2 - 1 = 0     PROVED
```

---

# TOPIC 15 — Standard "show that" proofs

These use nothing but `z z bar = |z|^2`.

### Worked example 1
If `|z| = 1` and z is not equal to -1, show that `(z - 1)/(z + 1)` is purely imaginary.

```
  A number w is purely imaginary  <=>  w + w bar = 0.

  Let w = (z - 1)/(z + 1).

  w bar = (z bar - 1)/(z bar + 1)

  Since |z| = 1 , z x z bar = 1 , so  z bar = 1/z.

  w bar = (1/z - 1)/(1/z + 1)
        = (1 - z)/(1 + z)          [multiplied top and bottom by z]
        = -(z - 1)/(z + 1)
        = -w

  So  w + w bar = 0  ->  w is purely imaginary.      PROVED
```

### Worked example 2
Show that `((1+i)/(1-i))^3 - ((1-i)/(1+i))^3 = -2i`.

```
  We already know:   (1+i)/(1-i) = i    and    (1-i)/(1+i) = -i

  So the expression =  i^3  -  (-i)^3

     i^3    = -i
     (-i)^3 = (-1)^3 x i^3 = -(-i) = i

  Expression = (-i) - (i) = -2i         PROVED
```

### Worked example 3
If `z = cos theta + i sin theta`, find `z - 1/z`.

```
  1/z = z bar / |z|^2 .  Here |z|^2 = cos^2 + sin^2 = 1 ,
  so  1/z = cos theta - i sin theta.

  z - 1/z = (cos theta + i sin theta) - (cos theta - i sin theta)
          = 2i sin theta

  ANSWER:  2i sin theta
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  [ ]  Did I replace every  i^2  by  -1 ?                             |
  |                                                                      |
  |  [ ]  Is my final answer written in the form  a + ib  ,              |
  |       with NO i left in any denominator?                             |
  |                                                                      |
  |  [ ]  Is Im(z) written as a plain number (5) and not as 5i ?         |
  |                                                                      |
  |  [ ]  Is every modulus a POSITIVE REAL number with no i in it?       |
  |                                                                      |
  |  [ ]  For amplitude: did I check the QUADRANT from the signs of      |
  |       x and y, instead of just trusting tan^-1 ?                     |
  |                                                                      |
  |  [ ]  Is my principal amplitude inside  -pi < theta <= pi ?          |
  |                                                                      |
  |  [ ]  In polar form, is r positive and is the sign inside a PLUS?    |
  |                                                                      |
  |  [ ]  Did I put  +/-  in front of every square-root answer?          |
  |                                                                      |
  |  [ ]  For a locus, did I finish with a clean x-y equation AND        |
  |       name the shape (circle / straight line) with its centre        |
  |       and radius?                                                    |
  |                                                                      |
  |  [ ]  Did I convert sqrt(-4) to 2i BEFORE multiplying anything?      |
  |                                                                      |
  |  [ ]  Did I answer ALL 10 questions in Section A? They are           |
  |       compulsory and there is no choice.                             |
  |                                                                      |
  +----------------------------------------------------------------------+
```
