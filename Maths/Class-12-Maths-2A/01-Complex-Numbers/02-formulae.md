# Complex Numbers — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. THE LETTER i

```
  +----------------------------------------------------+
  |                                                    |
  |     i  =  sqrt(-1)              i^2  =  -1         |
  |                                                    |
  |     i^3 = -i                    i^4  =   1         |
  |                                                    |
  |     i^-1 = -i                   i^0  =   1         |
  |                                                    |
  +----------------------------------------------------+


   THE CYCLE OF LENGTH 4

        n / 4 leaves remainder    ->    i^n is
        ----------------------          -------
                 0                          1
                 1                          i
                 2                         -1
                 3                         -i
```

| Formula | When to use |
|---------|-------------|
| i^n by remainder of n divided by 4 | "Find i^59" type 2-mark question |
| Four consecutive powers of i add to 0 | "Find i^1 + i^2 + ... + i^n" |
| sqrt(-a) = i sqrt(a) for a > 0 | before ANY multiplication of surds |
| i^n + i^(n+1) + i^(n+2) + i^(n+3) = 0 | long sums of powers |

```
  DANGER ZONE

     sqrt(a) x sqrt(b) = sqrt(ab)   is TRUE only if a >= 0 or b >= 0.

     sqrt(-4) x sqrt(-9)  =  (2i)(3i)  =  -6         CORRECT
     sqrt(-4) x sqrt(-9)  =  sqrt(36)  =   6         WRONG
```

---

# 2. BASIC FORM AND EQUALITY

```
  +---------------------------------------------------------+
  |                                                         |
  |     z  =  x + i y         x, y are REAL numbers         |
  |                                                         |
  |     Re(z) = x             Im(z) = y   (NOT iy)          |
  |                                                         |
  |     ordered pair form:    z = (x, y)                    |
  |                                                         |
  |     EQUALITY                                            |
  |     x1 + i y1 = x2 + i y2   <=>   x1 = x2 and y1 = y2   |
  |                                                         |
  +---------------------------------------------------------+
```

| Statement | Condition |
|-----------|-----------|
| z is purely REAL | Im(z) = 0, i.e. y = 0 |
| z is purely IMAGINARY | Re(z) = 0 and z is not 0 |
| z = 0 | x = 0 AND y = 0 |
| z1 = z2 | real parts equal AND imaginary parts equal |

---

# 3. ALGEBRA OF COMPLEX NUMBERS

```
  ADDITION           (a + ib) + (c + id) = (a + c) + i(b + d)

  SUBTRACTION        (a + ib) - (c + id) = (a - c) + i(b - d)

  MULTIPLICATION     (a + ib)(c + id)  =  (ac - bd) + i(ad + bc)
                                           ^^^^^^^
                                    the MINUS comes from i^2 = -1

  DIVISION           a + ib      (a + ib)(c - id)
                    --------  =  ------------------
                     c + id          c^2 + d^2
```

## Identities you already know — they still work

```
  (a + ib)^2       =  a^2 - b^2  +  2iab
  (a - ib)^2       =  a^2 - b^2  -  2iab
  (a + ib)(a - ib) =  a^2 + b^2                 <-- always REAL
  (a + ib)^3       =  a^3 - 3ab^2 + i(3a^2 b - b^3)
```

## The five results to memorise cold

```
  +--------------------------------------------------+
  |    (1 + i)^2      =   2i                         |
  |    (1 - i)^2      =  -2i                         |
  |    (1 + i)(1 - i) =   2                          |
  |    (1 + i)/(1 - i) =   i                         |
  |    (1 - i)/(1 + i) =  -i                         |
  +--------------------------------------------------+

    Consequences:   (1+i)^4 = (2i)^2 = -4
                    (1+i)^8 = 16
                    the least positive n with ((1+i)/(1-i))^n = 1  is  n = 4
```

| Formula | When to use |
|---------|-------------|
| (a+ib)(c+id) = (ac-bd) + i(ad+bc) | any product, saves expanding |
| Multiply top and bottom by the conjugate | EVERY "express in a + ib form" |
| (1+i)^2 = 2i | powers of (1 + i) in EAPCET/JEE |
| (1+i)/(1-i) = i | the most reused shortcut in this chapter |

---

# 4. CONJUGATE

```
  +--------------------------------------------------+
  |                                                  |
  |    z = x + iy      ->      z bar = x - iy        |
  |                                                  |
  |    (flip the sign of the imaginary part only)    |
  |                                                  |
  +--------------------------------------------------+
```

```
   z + z bar   =  2x        =  2 Re(z)
   z - z bar   =  2iy       =  2i Im(z)
   z x z bar   =  x^2 + y^2 =  |z|^2         <-- MASTER IDENTITY

                z + z bar                     z - z bar
     Re(z)  =  -----------        Im(z)  =  -------------
                    2                            2i
```

| Property | Note |
|----------|------|
| (z bar) bar = z | conjugate twice returns to start |
| (z1 + z2) bar = z1 bar + z2 bar | distributes over + and - |
| (z1 z2) bar = (z1 bar)(z2 bar) | distributes over x |
| (z1/z2) bar = (z1 bar)/(z2 bar) | distributes over / |
| (z^n) bar = (z bar)^n | powers |
| z = z bar | z is REAL |
| z + z bar = 0 | z is PURELY IMAGINARY |
| z x z bar is always real and >= 0 | why the conjugate clears i |

---

# 5. MODULUS

```
  +--------------------------------------------------------+
  |                                                        |
  |     |z|  =  |x + iy|  =  sqrt( x^2 + y^2 )             |
  |                                                        |
  |     |z| is a POSITIVE REAL NUMBER (or zero).           |
  |     It is the distance of z from the ORIGIN.           |
  |                                                        |
  +--------------------------------------------------------+
```

```
   |z|^2      =  z x z bar
   |z|        =  |z bar|  =  |-z|  =  |-z bar|
   |z1 z2|    =  |z1| x |z2|
   |z1 / z2|  =  |z1| / |z2|
   |z^n|      =  |z|^n
   |z1 - z2|  =  DISTANCE between the points z1 and z2
```

| Property | When to use |
|----------|-------------|
| \|z1 z2\| = \|z1\|\|z2\| | modulus of a big product — never expand it |
| \|z1/z2\| = \|z1\|/\|z2\| | modulus of a fraction |
| \|z^n\| = \|z\|^n | modulus of a power |
| \|z\|^2 = z x z bar | every "show that" proof |
| \|z1 - z2\| = distance | every locus question |

## Inequalities

```
  +--------------------------------------------------------------+
  |  TRIANGLE INEQUALITY                                         |
  |                                                              |
  |      |z1 + z2|  <=  |z1| + |z2|                              |
  |                                                              |
  |      equality only when arg z1 = arg z2                      |
  |      (the two arrows point the same way)                     |
  |                                                              |
  |  REVERSE TRIANGLE INEQUALITY                                 |
  |                                                              |
  |      |z1 - z2|  >=  | |z1| - |z2| |                          |
  |                                                              |
  |  PARALLELOGRAM LAW                                           |
  |                                                              |
  |      |z1 + z2|^2 + |z1 - z2|^2  =  2( |z1|^2 + |z2|^2 )      |
  |                                                              |
  |  EXPANSION                                                   |
  |                                                              |
  |      |z1 + z2|^2  =  |z1|^2 + |z2|^2 + 2 Re( z1 x z2 bar )   |
  |      |z1 - z2|^2  =  |z1|^2 + |z2|^2 - 2 Re( z1 x z2 bar )   |
  |                                                              |
  |  BOUNDS                                                      |
  |                                                              |
  |      Re(z) <= |z|        Im(z) <= |z|                        |
  +--------------------------------------------------------------+
```

---

# 6. MULTIPLICATIVE INVERSE

```
  +---------------------------------------------------------+
  |                                                         |
  |    -1       1        z bar        x - i y               |
  |   z    =   ---  =  ---------  =  -----------            |
  |             z        |z|^2        x^2 + y^2             |
  |                                                         |
  |   exists for every z EXCEPT z = 0                       |
  |                                                         |
  +---------------------------------------------------------+

   In words:  FLIP THE SIGN OF i , THEN DIVIDE BY (x^2 + y^2).
```

| Example | Inverse |
|---------|---------|
| 7 + 24i | (7 - 24i)/625 |
| sqrt5 + 3i | (sqrt5 - 3i)/14 |
| i | -i |
| 1 + i | (1 - i)/2 |
| 3 - 4i | (3 + 4i)/25 |

---

# 7. ARGAND PLANE

```
                    IMAGINARY AXIS (y)
                          |
                          |         * z = x + iy
                          |        /|
                          |   r   / |
                          |      /  | y = r sin theta
                          | theta/  |
       -------------------O--_)-----+------------- REAL AXIS (x)
                          |    x = r cos theta
                          |

   |z| = r = OP = distance from the origin
   amplitude theta = angle measured ANTICLOCKWISE from the +ve real axis
```

| Idea | Meaning on the diagram |
|------|------------------------|
| z | the point (x, y), or the arrow from O to that point |
| z bar | the MIRROR IMAGE of z in the real axis |
| -z | the point rotated 180 degrees about O |
| z1 + z2 | parallelogram law of vectors |
| z1 - z2 | the arrow FROM z2 TO z1 |
| \|z1 - z2\| | length of that arrow = distance between the points |
| i x z | z rotated 90 degrees ANTICLOCKWISE |

---

# 8. AMPLITUDE / ARGUMENT

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    tan theta = y / x       BUT you must fix the quadrant.        |
  |                                                                  |
  |    STEP 1  alpha = tan^-1 | y / x |      (acute, 0 to pi/2)      |
  |    STEP 2  look at the SIGNS of x and y                          |
  |    STEP 3  apply the table below                                 |
  |                                                                  |
  |    QUADRANT   SIGNS        PRINCIPAL AMPLITUDE                   |
  |    --------   ----------   -----------------------               |
  |       1       x>0 , y>0    theta =  alpha                        |
  |       2       x<0 , y>0    theta =  pi - alpha                   |
  |       3       x<0 , y<0    theta =  alpha - pi                   |
  |       4       x>0 , y<0    theta = -alpha                        |
  |                                                                  |
  |    PRINCIPAL RANGE:      -pi < theta <= pi                       |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Instant values (learn by sight, do not calculate)

| z | modulus | principal amplitude |
|---|---------|---------------------|
| 1 | 1 | 0 |
| -1 | 1 | pi |
| i | 1 | pi/2 |
| -i | 1 | -pi/2 |
| 1 + i | sqrt2 | pi/4 |
| -1 + i | sqrt2 | 3pi/4 |
| -1 - i | sqrt2 | -3pi/4 |
| 1 - i | sqrt2 | -pi/4 |
| 1 + i sqrt3 | 2 | pi/3 |
| -1 + i sqrt3 | 2 | 2pi/3 |
| -1 - i sqrt3 | 2 | -2pi/3 |
| 1 - i sqrt3 | 2 | -pi/3 |
| sqrt3 + i | 2 | pi/6 |
| -sqrt3 + i | 2 | 5pi/6 |
| 0 | 0 | UNDEFINED |

## Properties of the argument

```
   arg(z1 z2)    =  arg z1  +  arg z2
   arg(z1 / z2)  =  arg z1  -  arg z2
   arg(z^n)      =  n arg z
   arg(z bar)    =  - arg z
   arg(1 / z)    =  - arg z
   arg(z) = 0    <=>  z is a POSITIVE real number
   arg(z) = pi   <=>  z is a NEGATIVE real number
   arg(z) = +/- pi/2  <=>  z is PURELY IMAGINARY
```

| Property | When to use |
|----------|-------------|
| arg(z1 z2) = arg z1 + arg z2 | "find Arg of a product" 2-mark question |
| arg(z1/z2) = arg z1 - arg z2 | quotients |
| arg = pi/2 means real part is 0 | the standard locus question |
| Add or subtract 2pi to return to the principal range | if the sum leaves the range |

---

# 9. POLAR (MODULUS-AMPLITUDE) FORM

```
  +--------------------------------------------------------------+
  |                                                              |
  |    z  =  r ( cos theta  +  i sin theta )                     |
  |                                                              |
  |         r = |z| > 0                                          |
  |         theta = amplitude (principal value unless told)      |
  |                                                              |
  |    Conversion:   x = r cos theta ,   y = r sin theta         |
  |                                                              |
  +--------------------------------------------------------------+
```

```
   MULTIPLYING:
   r1(cos A + i sin A) x r2(cos B + i sin B)
                     =  r1 r2 [ cos(A + B) + i sin(A + B) ]

   DIVIDING:
   r1(cos A + i sin A) / [ r2(cos B + i sin B) ]
                     =  (r1/r2) [ cos(A - B) + i sin(A - B) ]

   MULTIPLY moduli, ADD angles.    DIVIDE moduli, SUBTRACT angles.
```

| Fix-it rule | Reason |
|-------------|--------|
| r must be positive | if you get a negative r, add pi to theta |
| the sign inside must be + | use cos(-A) = cos A , sin(-A) = -sin A |
| cos A - i sin A = cos(-A) + i sin(-A) | the standard repair |
| sin A + i cos A = cos(pi/2 - A) + i sin(pi/2 - A) | the other standard repair |

---

# 10. SQUARE ROOT OF A COMPLEX NUMBER

```
  +----------------------------------------------------------------+
  |                                                                |
  |   let  m  =  |a + ib|  =  sqrt(a^2 + b^2)                      |
  |                                                                |
  |                       ---------           ---------            |
  |                      / m + a             / m - a               |
  |   sqrt(a+ib) = +/-  /  -------   +/-  i /  -------             |
  |                   \/      2           \/     2                 |
  |                                                                |
  |   the sign of the i-part must MATCH the sign of b              |
  |                                                                |
  |   the whole answer always carries a  +/-  in front             |
  |                                                                |
  +----------------------------------------------------------------+
```

## Worth memorising (they appear again and again)

```
   sqrt( 3 + 4i)   =  +/- (2 + i)
   sqrt( 3 - 4i)   =  +/- (2 - i)
   sqrt(-5 + 12i)  =  +/- (2 + 3i)
   sqrt(-8 - 6i)   =  +/- (1 - 3i)
   sqrt( 7 + 24i)  =  +/- (4 + 3i)
   sqrt(-15 - 8i)  =  +/- (1 - 4i)
   sqrt( 2i)       =  +/- (1 + i)
   sqrt(-2i)       =  +/- (1 - i)
   sqrt( i)        =  +/- (1 + i)/sqrt2
```

**Always check by squaring.** It takes 10 seconds and guarantees the mark.

---

# 11. GEOMETRY AND LOCUS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   |z| = r                 CIRCLE, centre O, radius r               |
  |                                                                    |
  |   |z - z1| = r            CIRCLE, centre z1, radius r              |
  |                                                                    |
  |   |z - z1| < r            INSIDE that circle                       |
  |   |z - z1| > r            OUTSIDE that circle                      |
  |                                                                    |
  |   |z - z1| = |z - z2|     PERPENDICULAR BISECTOR of z1 z2          |
  |                                                                    |
  |   |z-z1| + |z-z2| = 2a    ELLIPSE with foci z1, z2 (2a > |z1-z2|)  |
  |                                                                    |
  |   | |z-z1| - |z-z2| | = 2a   HYPERBOLA with foci z1, z2            |
  |                                                                    |
  |   |z - z1| / |z - z2| = k   CIRCLE (k not 1) , LINE (k = 1)        |
  |                                                                    |
  |   arg(z) = theta          a RAY from the origin                    |
  |                                                                    |
  |   arg( (z-z1)/(z-z2) ) = pi/2                                      |
  |                           CIRCLE with z1 z2 as DIAMETER            |
  |                                                                    |
  |   Re(z) = k               VERTICAL line x = k                      |
  |   Im(z) = k               HORIZONTAL line y = k                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Locus rule | Method |
|------------|--------|
| \|z - z1\| = r | recognise the circle, then square to get the x-y form |
| \|z - z1\| = \|z - z2\| | square both sides, the x^2 and y^2 cancel |
| amp( ... ) = pi/2 | rationalise, then set the REAL part to 0 |
| Re( ... ) = k or Im( ... ) = k | rationalise, then compare the correct part |
| any other | put z = x + iy and grind |

---

# 12. USEFUL STANDARD RESULTS

```
   z = cos theta + i sin theta     ->   |z| = 1 ,  1/z = cos theta - i sin theta
                                        z + 1/z = 2 cos theta
                                        z - 1/z = 2i sin theta

   |z| = 1                         ->   z bar = 1/z

   (a + ib)^2 = x + iy             ->   x^2 + y^2 = (a^2 + b^2)^2

   z is real                       ->   z = z bar
   z is purely imaginary           ->   z + z bar = 0

   Least positive n with i^n = 1                 ->  n = 4
   Least positive n with ((1+i)/(1-i))^n = 1     ->  n = 4
   Least positive n with (1+i)^n REAL            ->  n = 4
        because (1+i)^2 = 2i (not real) but (1+i)^4 = (2i)^2 = -4 (real)
```

```
   CUBE ROOTS OF UNITY (details belong to Chapter 2, but keep them handy)

        1 ,  omega ,  omega^2

        1 + omega + omega^2 = 0            omega^3 = 1
        omega = (-1 + i sqrt3)/2           omega^2 = (-1 - i sqrt3)/2
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
   1.  i^2 = -1        i^n by remainder of n / 4

   2.  z x z bar  =  x^2 + y^2  =  |z|^2

   3.  express in a + ib  ->  multiply top and bottom by the CONJUGATE

   4.  z^-1  =  (x - iy) / (x^2 + y^2)

   5.  |z| = sqrt(x^2 + y^2)        |z1 z2| = |z1| |z2|

   6.  QUADRANT RULE   Q1: alpha   Q2: pi - alpha
                       Q3: alpha - pi   Q4: -alpha

   7.  z = r(cos theta + i sin theta)

   8.  arg(z1 z2) = arg z1 + arg z2

   9.  sqrt(a+ib) = +/- [ sqrt((m+a)/2) + i sqrt((m-a)/2) ] , m = |a+ib|

  10.  |z - z1| = r  is a CIRCLE ;  |z - z1| = |z - z2|  is a LINE
```
