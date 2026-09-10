# Trigonometric Ratios upto Transformations — Formula Sheet

**Maths 1A · Chapter 6**

This is the single most useful page in Maths IA. Copy it by hand into a
notebook — writing it once beats reading it ten times.
The "When to use" column is what the exam actually tests.

---

# 1. ANGLE MEASUREMENT

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |        D            G            2 R                            |
  |      ------   =   ------   =   -------                          |
  |        90          100           pi                             |
  |                                                                 |
  |   D = degrees ,  G = grades ,  R = radians                      |
  +-----------------------------------------------------------------+

  1 right angle  =  90 degrees  =  100 grades  =  pi/2 radians

  1 degree = 60 minutes (60')      1 minute = 60 seconds (60")
  1 grade  = 100 minutes           1 grade-minute = 100 grade-seconds

  1 radian  =  180/pi degrees  =  57 deg 17' 45"  (approx 57.2958 deg)
  1 degree  =  pi/180 radians  =  0.01746 radian
  pi radians = 180 degrees
```

| Formula | When to use |
|---|---|
| degrees x pi/180 = radians | any "convert to radians" question |
| radians x 180/pi = degrees | any "convert to degrees" question |
| D/90 = G/100 | grade questions (rare but free marks) |
| G = D x 10/9 | quick grade conversion |

## Arc and sector — theta MUST be in radians

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   arc length      s      =  r theta                             |
  |                                                                 |
  |                          1                1                     |
  |   area of sector  A      =  - r^2 theta =  - r s                |
  |                          2                2                     |
  |                                                                 |
  |   perimeter of a sector  =  2r + s                              |
  |                                                                 |
  |   theta  =  s / r        (this is the DEFINITION of a radian)   |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| s = r theta | length of arc, distance travelled by a pendulum bob, railway curve |
| A = (1/2) r^2 theta | area swept out |
| A = (1/2) r s | when the arc is already known |
| theta = s/r | "find the angle subtended" |

## The common radian values — learn as a strip

```
  0     30      45      60      90     120     135     150     180
  0    pi/6    pi/4    pi/3    pi/2   2pi/3   3pi/4   5pi/6    pi

  210     225     240     270     300     315     330     360
 7pi/6   5pi/4   4pi/3   3pi/2   5pi/3   7pi/4  11pi/6   2pi
```

---

# 2. THE SIX RATIOS AND THEIR RELATIONS

```
  +-----------------------------------------------------------------+
  |  RECIPROCAL RELATIONS                                           |
  |                                                                 |
  |     sin A . cosec A  = 1          cosec A = 1 / sin A           |
  |     cos A . sec A    = 1          sec A   = 1 / cos A           |
  |     tan A . cot A    = 1          cot A   = 1 / tan A           |
  |                                                                 |
  |  QUOTIENT RELATIONS                                             |
  |                                                                 |
  |               sin A                      cos A                  |
  |     tan A =  -------          cot A  =  -------                 |
  |               cos A                      sin A                  |
  |                                                                 |
  |  PYTHAGOREAN IDENTITIES  (the three that earn the most marks)   |
  |                                                                 |
  |     sin^2 A + cos^2 A  =  1                                     |
  |     1 + tan^2 A        =  sec^2 A                               |
  |     1 + cot^2 A        =  cosec^2 A                             |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The rearranged forms — these are what you actually substitute

| Form | When to use |
|---|---|
| sin^2 A = 1 - cos^2 A | to turn everything into cos |
| cos^2 A = 1 - sin^2 A | to turn everything into sin |
| sec^2 A - tan^2 A = 1 | any sec/tan mixture |
| cosec^2 A - cot^2 A = 1 | any cosec/cot mixture |
| (sec A + tan A)(sec A - tan A) = 1 | "if sec A + tan A = k, find sec A - tan A" |
| (cosec A + cot A)(cosec A - cot A) = 1 | same trick with cosec |
| sin^4 + cos^4 = 1 - 2 sin^2 cos^2 | "find the value of sin^4 A + cos^4 A" |
| sin^6 + cos^6 = 1 - 3 sin^2 cos^2 | same, sixth powers |
| tan A + cot A = 2 cosec 2A | simplify a sum of tan and cot |
| cot A - tan A = 2 cot 2A | simplify a difference |

## Domains where each ratio is undefined

```
  tan A , sec A     undefined at  A = 90, 270, ... (odd multiples of 90 deg)
  cot A , cosec A   undefined at  A = 0, 180, 360, ... (multiples of 180 deg)
```

---

# 3. SIGNS, RANGES AND STANDARD VALUES

## ASTC

```
                        y
                        |
          II            |            I
     sin , cosec  +     |     ALL SIX  +
                        |
      S                 |       A
  ----------------------+----------------------  x
      T                 |       C
                        |
     tan , cot  +       |     cos , sec  +
          III           |           IV
                        |

     A - S - T - C   read ANTICLOCKWISE  =  "All  Silver  Tea  Cups"
```

| Quadrant | Positive ratios |
|---|---|
| I (0 to 90) | all six |
| II (90 to 180) | sin, cosec |
| III (180 to 270) | tan, cot |
| IV (270 to 360) | cos, sec |

## Ranges

```
  -1 <= sin A <= 1                  -1 <= cos A <= 1

  tan A , cot A     : any real number

  sec A , cosec A   : (-inf, -1]  union  [1, inf)
                      NEVER strictly between -1 and 1
```

| Fact | When to use |
|---|---|
| sin A = k has a solution only if -1 <= k <= 1 | "is sin A = 5/4 possible?" |
| sec A = k has a solution only if abs(k) >= 1 | "is sec A = 1/2 possible?" |
| max sin A = 1, min sin A = -1 | range questions |

## Standard angles

| Angle | 0 | 30 | 45 | 60 | 90 | 180 | 270 | 360 |
|---|---|---|---|---|---|---|---|---|
| **sin** | 0 | 1/2 | 1/sqrt2 | sqrt3/2 | 1 | 0 | -1 | 0 |
| **cos** | 1 | sqrt3/2 | 1/sqrt2 | 1/2 | 0 | -1 | 0 | 1 |
| **tan** | 0 | 1/sqrt3 | 1 | sqrt3 | ND | 0 | ND | 0 |
| **cot** | ND | sqrt3 | 1 | 1/sqrt3 | 0 | ND | 0 | ND |
| **sec** | 1 | 2/sqrt3 | sqrt2 | 2 | ND | -1 | ND | 1 |
| **cosec** | ND | 2 | sqrt2 | 2/sqrt3 | 1 | ND | -1 | ND |

`ND = not defined`

## Extra exact values worth knowing

```
  sin 15 = cos 75 = (sqrt3 - 1) / (2 sqrt2)  =  (sqrt6 - sqrt2)/4
  cos 15 = sin 75 = (sqrt3 + 1) / (2 sqrt2)  =  (sqrt6 + sqrt2)/4

  tan 15 = 2 - sqrt3            tan 75 = 2 + sqrt3
  cot 15 = 2 + sqrt3            cot 75 = 2 - sqrt3

  tan 22.5 = sqrt2 - 1          tan 67.5 = sqrt2 + 1
```

---

# 4. ALLIED ANGLES

```
  +-----------------------------------------------------------------+
  |  THE RULE — two lines, replaces the whole table                 |
  |                                                                 |
  |  1.  ODD  multiple of 90  ( 90 , 270 )  ->  RATIO CHANGES       |
  |      EVEN multiple of 90  ( 180 , 360 ) ->  RATIO STAYS         |
  |                                                                 |
  |         sin <-> cos      tan <-> cot      sec <-> cosec         |
  |                                                                 |
  |  2.  SIGN: treat A as a small acute angle, see which quadrant   |
  |      the whole angle lands in, apply ASTC to the ORIGINAL ratio |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Angle | sin | cos | tan | cot | sec | cosec |
|---|---|---|---|---|---|---|
| **-A** | -sin A | cos A | -tan A | -cot A | sec A | -cosec A |
| **90 - A** | cos A | sin A | cot A | tan A | cosec A | sec A |
| **90 + A** | cos A | -sin A | -cot A | -tan A | -cosec A | sec A |
| **180 - A** | sin A | -cos A | -tan A | -cot A | -sec A | cosec A |
| **180 + A** | -sin A | -cos A | tan A | cot A | -sec A | -cosec A |
| **270 - A** | -cos A | -sin A | cot A | tan A | -cosec A | -sec A |
| **270 + A** | -cos A | sin A | -cot A | -tan A | cosec A | -sec A |
| **360 - A** | -sin A | cos A | -tan A | -cot A | sec A | -cosec A |
| **360 + A** | sin A | cos A | tan A | cot A | sec A | cosec A |

## Complementary angles (the special case you use most)

```
  sin(90 - A) = cos A          cos(90 - A) = sin A
  tan(90 - A) = cot A          cot(90 - A) = tan A
  sec(90 - A) = cosec A        cosec(90 - A) = sec A
```

| Result | When to use |
|---|---|
| sin(n x 360 + A) = sin A | reduce sin 750, sin 1470 etc. |
| cos(n x 360 + A) = cos A | reduce cos 1290 etc. |
| tan(n x 180 + A) = tan A | tan repeats every 180, not 360 |
| sin(-A) = -sin A | negative angles |
| cos(-A) = cos A | cos is EVEN — the only even one along with sec |

---

# 5. PERIODICITY, ODD/EVEN, GRAPHS

```
  +-----------------------------------------------------------------+
  |   FUNCTION            PERIOD        DOMAIN GAP                  |
  |                                                                 |
  |   sin x , cos x       2 pi          all reals                   |
  |   sec x , cosec x     2 pi          holes where cos/sin = 0     |
  |   tan x , cot x       pi            holes at odd/even mult pi/2 |
  |                                                                 |
  |   sin(ax + b)         2 pi / |a|                                |
  |   cos(ax + b)         2 pi / |a|                                |
  |   tan(ax + b)           pi / |a|                                |
  |                                                                 |
  |   |sin x| , |cos x|     pi                                      |
  |   sin^2 x , cos^2 x     pi                                      |
  |   |tan x|               pi                                      |
  +-----------------------------------------------------------------+
```

| Rule | When to use |
|---|---|
| period of sum = LCM of the periods | "period of sin x + cos 2x" |
| squaring or taking modulus HALVES the period of sin and cos | period MCQs |
| ODD: sin, tan, cot, cosec | f(-x) = -f(x) |
| EVEN: cos, sec | f(-x) = f(x) |

---

# 6. COMPOUND ANGLES

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   sin(A + B)  =  sin A cos B  +  cos A sin B                    |
  |   sin(A - B)  =  sin A cos B  -  cos A sin B                    |
  |                                                                 |
  |   cos(A + B)  =  cos A cos B  -  sin A sin B                    |
  |   cos(A - B)  =  cos A cos B  +  sin A sin B                    |
  |                                                                 |
  |                     tan A + tan B                               |
  |   tan(A + B)  =   -------------------                           |
  |                    1 - tan A tan B                              |
  |                                                                 |
  |                     tan A - tan B                               |
  |   tan(A - B)  =   -------------------                           |
  |                    1 + tan A tan B                              |
  |                                                                 |
  |                    cot A cot B - 1                              |
  |   cot(A + B)  =   -------------------                           |
  |                    cot B + cot A                                |
  |                                                                 |
  |                    cot A cot B + 1                              |
  |   cot(A - B)  =   -------------------                           |
  |                    cot B - cot A                                |
  |                                                                 |
  |   MEMORY:   "sin KEEPS the sign, cos FLIPS the sign"            |
  +-----------------------------------------------------------------+
```

## The product pair (asked every year in Section A or B)

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   sin(A + B) . sin(A - B)  =  sin^2 A - sin^2 B                 |
  |                            =  cos^2 B - cos^2 A                 |
  |                                                                 |
  |   cos(A + B) . cos(A - B)  =  cos^2 A - sin^2 B                 |
  |                            =  cos^2 B - sin^2 A                 |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## Three angles

```
                       S1  -  S3
  tan(A + B + C)  =  -------------
                       1  -  S2

     S1 = tanA + tanB + tanC
     S2 = tanA tanB + tanB tanC + tanC tanA
     S3 = tanA tanB tanC

  sin(A+B+C) = sinA cosB cosC + cosA sinB cosC + cosA cosB sinC
               - sinA sinB sinC

  cos(A+B+C) = cosA cosB cosC - cosA sinB sinC - sinA cosB sinC
               - sinA sinB cosC
```

## Useful special cases

```
  tan(45 + A) = (1 + tanA) / (1 - tanA)
  tan(45 - A) = (1 - tanA) / (1 + tanA)

  tan(45 + A) . tan(45 - A) = 1
  tan(45 + A) - tan(45 - A) = 2 tan 2A
  tan(45 + A) + tan(45 - A) = 2 sec 2A

  cot(45 + A) = (cotA - 1)/(cotA + 1)
```

| Formula | When to use |
|---|---|
| sin(A+-B), cos(A+-B) | find sin 75, cos 105, or when given sinA and cosB |
| tan(A+-B) | anything in tan only; also "prove A + B = 45 deg" |
| sin(A+B) sin(A-B) | when you see a difference of two squares of sines |
| tan(45 + A) forms | expressions containing (1 + tan A)/(1 - tan A) |

---

# 7. MULTIPLE ANGLES — 2A

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   sin 2A  =  2 sin A cos A                                      |
  |                                                                 |
  |                 2 tan A                                         |
  |           =  --------------                                     |
  |                1 + tan^2 A                                      |
  |                                                                 |
  |   cos 2A  =  cos^2 A  -  sin^2 A          [form 1]              |
  |           =  2 cos^2 A  -  1              [form 2]              |
  |           =  1  -  2 sin^2 A              [form 3]              |
  |                                                                 |
  |                1 - tan^2 A                                      |
  |           =  --------------               [form 4]              |
  |                1 + tan^2 A                                      |
  |                                                                 |
  |                 2 tan A                                         |
  |   tan 2A  =  --------------                                     |
  |                1 - tan^2 A                                      |
  |                                                                 |
  |                cot^2 A - 1                                      |
  |   cot 2A  =  --------------                                     |
  |                  2 cot A                                        |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## Which form of cos 2A to choose

| The question contains | Use |
|---|---|
| only cos | cos 2A = 2 cos^2 A - 1 |
| only sin | cos 2A = 1 - 2 sin^2 A |
| both sin and cos | cos 2A = cos^2 A - sin^2 A |
| only tan | cos 2A = (1 - tan^2 A)/(1 + tan^2 A) |

## Power-reduction (you will use these again in Integration)

```
              1 + cos 2A                     1 - cos 2A
  cos^2 A  = ------------        sin^2 A  = ------------
                  2                              2

              1 - cos 2A
  tan^2 A  = ------------
              1 + cos 2A

  1 + cos 2A = 2 cos^2 A          1 - cos 2A = 2 sin^2 A

           1 - cos 2A                    sin 2A
  tan A = ------------     =     ---------------------
             sin 2A                  1 + cos 2A
```

---

# 8. MULTIPLE ANGLES — 3A

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   sin 3A  =  3 sin A  -  4 sin^3 A                              |
  |                                                                 |
  |   cos 3A  =  4 cos^3 A  -  3 cos A                              |
  |                                                                 |
  |                3 tan A  -  tan^3 A                              |
  |   tan 3A  =  ---------------------                              |
  |                  1  -  3 tan^2 A                                |
  |                                                                 |
  |                3 cot A  -  cot^3 A                              |
  |   cot 3A  =  ---------------------                              |
  |                  1  -  3 cot^2 A                                |
  |                                                                 |
  |   REARRANGED (for "find sin^3 A" questions):                    |
  |                                                                 |
  |        sin^3 A = (3 sinA - sin3A) / 4                           |
  |        cos^3 A = (3 cosA + cos3A) / 4                           |
  |                                                                 |
  +-----------------------------------------------------------------+

  MEMORY:   sin3A -> "3 first, minus in the middle"
            cos3A -> "4 first, minus at the end"
```

---

# 9. HALF ANGLES AND THE t-SUBSTITUTION

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   sin A  =  2 sin(A/2) cos(A/2)                                 |
  |                                                                 |
  |   cos A  =  cos^2(A/2) - sin^2(A/2)                             |
  |          =  2 cos^2(A/2) - 1                                    |
  |          =  1 - 2 sin^2(A/2)                                    |
  |                                                                 |
  |                2 tan(A/2)                                       |
  |   tan A  =  ------------------                                  |
  |              1 - tan^2(A/2)                                     |
  |                                                                 |
  |   1 + cos A  =  2 cos^2(A/2)                                    |
  |   1 - cos A  =  2 sin^2(A/2)                                    |
  |                                                                 |
  |    1 - cos A                        sin A                       |
  |   ----------- = tan^2(A/2)      ----------- = tan(A/2)          |
  |    1 + cos A                     1 + cos A                      |
  |                                                                 |
  |    1 - cos A                                                    |
  |   ----------- = tan(A/2)        (the other half-angle form)     |
  |      sin A                                                      |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The t = tan(A/2) block

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |     Let  t = tan(A/2) .  Then                                   |
  |                                                                 |
  |                2 t                    1 - t^2                   |
  |     sin A  =  --------    cos A  =   ---------                  |
  |               1 + t^2                 1 + t^2                   |
  |                                                                 |
  |                2 t                    1 + t^2                   |
  |     tan A  =  --------    sec A  =   ---------                  |
  |               1 - t^2                 1 - t^2                   |
  |                                                                 |
  |               1 - t^2                 1 + t^2                   |
  |     cot A  =  --------    cosec A =  ---------                  |
  |                 2 t                     2 t                     |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Use it when | Example |
|---|---|
| a question mixes sin A and cos A and you want one variable | prove an identity in tan(A/2) |
| you must express sin A, cos A "in terms of tan(A/2)" | direct 2-mark question |
| solving a cos x + b sin x = c | reduces to a quadratic in t |

## Square-root half-angle forms (sign decided by the quadrant of A/2)

```
  sin(A/2) = +- sqrt( (1 - cos A)/2 )
  cos(A/2) = +- sqrt( (1 + cos A)/2 )
  tan(A/2) = +- sqrt( (1 - cos A)/(1 + cos A) )

  sin(A/2) + cos(A/2) = +- sqrt(1 + sin A)
  sin(A/2) - cos(A/2) = +- sqrt(1 - sin A)
```

---

# 10. SUBMULTIPLE ANGLES — 18, 36, 54, 72

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |                sqrt5 - 1                                        |
  |   sin 18  =  ------------  =  cos 72         = 0.3090           |
  |                    4                                            |
  |                                                                 |
  |              sqrt(10 + 2 sqrt5)                                 |
  |   cos 18  =  ------------------  =  sin 72   = 0.9511           |
  |                      4                                          |
  |                                                                 |
  |              sqrt(10 - 2 sqrt5)                                 |
  |   sin 36  =  ------------------  =  cos 54   = 0.5878           |
  |                      4                                          |
  |                                                                 |
  |                sqrt5 + 1                                        |
  |   cos 36  =  ------------  =  sin 54         = 0.8090           |
  |                    4                                            |
  |                                                                 |
  +-----------------------------------------------------------------+

  TANGENTS

                sqrt(25 - 10 sqrt5)
  tan 18  =  ------------------------  = 0.3249
                        5

  tan 36  =  sqrt(5 - 2 sqrt5)         = 0.7265

                sqrt(25 + 10 sqrt5)
  tan 54  =  ------------------------  = 1.3764
                        5

  tan 72  =  sqrt(5 + 2 sqrt5)         = 3.0777
```

## The neat products (instant 2-mark answers)

```
  sin 18 . cos 36  =  1/4
  cos 36 . cos 72  =  1/4
  sin 18 . sin 54  =  1/4

  cos 36 - cos 72  =  1/2           (= cos 36 - sin 18)
  cos 36 + cos 72  =  sqrt5 / 2     (= sin 18 + cos 36)

  sin 18 + sin 54  =  sqrt5 / 2
```

Verify the two you will actually be asked:

```
  cos36 - cos72 = (sqrt5+1)/4 - (sqrt5-1)/4 = 2/4 = 1/2       correct
  cos36 . cos72 = [(sqrt5+1)(sqrt5-1)] / 16 = 4/16 = 1/4      correct
```

## How the values are derived (write this in the exam)

```
  For sin 18 :   let A = 18 , then 5A = 90 , so 2A = 90 - 3A
                 sin 2A = cos 3A
                 2 sinA cosA = 4 cos^3 A - 3 cosA
                 divide by cosA :  2 sinA = 4 cos^2 A - 3 = 1 - 4 sin^2 A
                 4 sin^2 A + 2 sinA - 1 = 0
                 sinA = (-1 + sqrt5)/4          [take + since 18 deg is acute]

  For cos 36 :   cos 36 = 1 - 2 sin^2 18 = (sqrt5 + 1)/4
```

---

# 11. TRANSFORMATIONS — SUM TO PRODUCT

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |                              C + D           C - D              |
  |    sin C  +  sin D   =  2 sin -----   cos  --------             |
  |                                 2              2                |
  |                                                                 |
  |                              C + D           C - D              |
  |    sin C  -  sin D   =  2 cos -----   sin  --------             |
  |                                 2              2                |
  |                                                                 |
  |                              C + D           C - D              |
  |    cos C  +  cos D   =  2 cos -----   cos  --------             |
  |                                 2              2                |
  |                                                                 |
  |                               C + D           C - D             |
  |    cos C  -  cos D   =  -2 sin -----   sin  --------            |
  |                                  2              2               |
  |                                                                 |
  |                               C + D           D - C             |
  |                      =   2 sin -----   sin  --------            |
  |                                  2              2               |
  |                                                                 |
  +-----------------------------------------------------------------+

  PATTERN:   half-SUM always FIRST , half-DIFFERENCE always SECOND

     sin + sin  ->  2 sin cos
     sin - sin  ->  2 cos sin       (the two swap)
     cos + cos  ->  2 cos cos
     cos - cos  ->  -2 sin sin      (MINUS — most forgotten sign in IA)
```

---

# 12. TRANSFORMATIONS — PRODUCT TO SUM

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    2 sin A cos B   =   sin(A + B)  +  sin(A - B)                |
  |                                                                 |
  |    2 cos A sin B   =   sin(A + B)  -  sin(A - B)                |
  |                                                                 |
  |    2 cos A cos B   =   cos(A + B)  +  cos(A - B)                |
  |                                                                 |
  |    2 sin A sin B   =   cos(A - B)  -  cos(A + B)                |
  |                                                                 |
  |    (note the LAST one runs (A-B) first — the only one that does)|
  |                                                                 |
  +-----------------------------------------------------------------+
```

## WHEN TO USE WHICH

```
  +--------------------------------------+---------------------------+
  |  WHAT YOU SEE ON THE PAGE            |  DO THIS                  |
  +--------------------------------------+---------------------------+
  |  a SUM of sines / cosines            |  SUM -> PRODUCT           |
  |  a fraction with sums top and bottom |  SUM -> PRODUCT both ways |
  |  a PRODUCT of sines / cosines        |  PRODUCT -> SUM           |
  |  three or more terms                 |  pair the two whose       |
  |                                      |  angles add to something  |
  |                                      |  simple; leave the third  |
  |  A + B + C = 180 anywhere            |  SUM -> PRODUCT, always   |
  +--------------------------------------+---------------------------+
```

## Chain products worth memorising

```
                                                       sin(2^n A)
  cosA . cos2A . cos4A ... cos(2^(n-1) A)   =    ------------------
                                                    2^n  sin A

  sin A . sin(60 - A) . sin(60 + A)  =  (1/4) sin 3A
  cos A . cos(60 - A) . cos(60 + A)  =  (1/4) cos 3A
  tan A . tan(60 - A) . tan(60 + A)  =  tan 3A

  cos 20 . cos 40 . cos 80  =  1/8
  sin 20 . sin 40 . sin 80  =  sqrt3 / 8
  cos(pi/7) cos(2pi/7) cos(3pi/7) = 1/8
```

---

# 13. MAXIMUM AND MINIMUM VALUES

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    y  =  a cos theta  +  b sin theta                            |
  |                                                                 |
  |         MAX  =  + sqrt(a^2 + b^2)                               |
  |         MIN  =  - sqrt(a^2 + b^2)                               |
  |                                                                 |
  |    y  =  a cos theta  +  b sin theta  +  c                      |
  |                                                                 |
  |         MAX  =  c + sqrt(a^2 + b^2)                             |
  |         MIN  =  c - sqrt(a^2 + b^2)                             |
  |                                                                 |
  |    RANGE = [ c - sqrt(a^2+b^2) ,  c + sqrt(a^2+b^2) ]           |
  |                                                                 |
  |    Reason:  a cos th + b sin th = r cos(th - alpha)             |
  |             with r = sqrt(a^2 + b^2)                            |
  +-----------------------------------------------------------------+
```

| Expression | Max | Min |
|---|---|---|
| a cos th + b sin th | sqrt(a^2+b^2) | -sqrt(a^2+b^2) |
| a cos th + b sin th + c | c + sqrt(a^2+b^2) | c - sqrt(a^2+b^2) |
| sin th . cos th = (1/2) sin 2th | 1/2 | -1/2 |
| a sin^2 th + b cos^2 th | larger of a, b | smaller of a, b |
| sec^2 th + cosec^2 th | no maximum | 4 |
| tan^2 th + cot^2 th | no maximum | 2 |
| sin th + cosec th (th acute) | no maximum | 2 |
| sin^4 th + cos^4 th | 1 | 1/2 |
| sin^6 th + cos^6 th | 1 | 1/4 |

---

# 14. CONDITIONAL IDENTITIES — A + B + C = 180 degrees

```
  +-----------------------------------------------------------------+
  |  THE STARTING LINE (write it first, it carries marks)           |
  |                                                                 |
  |     A + B = 180 - C                                             |
  |                                                                 |
  |     sin(A + B) =  sin C          cos(A + B) = - cos C           |
  |     tan(A + B) = -tan C          cot(A + B) = - cot C           |
  |                                                                 |
  |     (A + B)/2 = 90 - C/2                                        |
  |                                                                 |
  |     sin( (A+B)/2 ) = cos(C/2)                                   |
  |     cos( (A+B)/2 ) = sin(C/2)                                   |
  |     tan( (A+B)/2 ) = cot(C/2)                                   |
  +-----------------------------------------------------------------+
```

## The standard results (memorise the right-hand sides)

| Left side (with A + B + C = 180) | equals |
|---|---|
| sin 2A + sin 2B + sin 2C | 4 sin A sin B sin C |
| sin 2A + sin 2B - sin 2C | 4 cos A cos B sin C |
| cos 2A + cos 2B + cos 2C | -1 - 4 cos A cos B cos C |
| cos 2A + cos 2B - cos 2C | 1 - 4 sin A sin B cos C |
| sin A + sin B + sin C | 4 cos(A/2) cos(B/2) cos(C/2) |
| sin A + sin B - sin C | 4 sin(A/2) sin(B/2) cos(C/2) |
| cos A + cos B + cos C | 1 + 4 sin(A/2) sin(B/2) sin(C/2) |
| cos A + cos B - cos C | -1 + 4 cos(A/2) cos(B/2) sin(C/2) |
| tan A + tan B + tan C | tan A tan B tan C |
| cot A cot B + cot B cot C + cot C cot A | 1 |
| tan(A/2)tan(B/2) + tan(B/2)tan(C/2) + tan(C/2)tan(A/2) | 1 |
| cot(A/2) + cot(B/2) + cot(C/2) | cot(A/2) cot(B/2) cot(C/2) |
| sin^2 A + sin^2 B + sin^2 C | 2 + 2 cos A cos B cos C |
| cos^2 A + cos^2 B + cos^2 C | 1 - 2 cos A cos B cos C |
| sin^2 A + sin^2 B - sin^2 C | 2 sin A sin B cos C |
| sin^2(A/2) + sin^2(B/2) + sin^2(C/2) | 1 - 2 sin(A/2) sin(B/2) sin(C/2) |
| cos^2(A/2) + cos^2(B/2) + cos^2(C/2) | 2 + 2 sin(A/2) sin(B/2) sin(C/2) |

## The two other conditions that appear

```
  If  A + B + C = 90 degrees :

     tan A tanB + tanB tanC + tanC tanA = 1
     cot A + cot B + cot C = cot A cot B cot C

  If  A + B + C = 0 (or the angles sum to 2 pi) :

     sin 2A + sin 2B + sin 2C = -4 sinA sinB sinC   [for A+B+C = 0]
     cos 2A + cos 2B + cos 2C = 1 + 4 cosA cosB cosC  [for A+B+C = 0]
```

## The universal proof method

```
  1.  Take the FIRST TWO terms.
  2.  Sum -> product.
  3.  Replace (A+B) or (A+B)/2 using the starting-line box.
  4.  Convert the THIRD term with a double- or half-angle formula so it
      carries the SAME factor.
  5.  Take the common factor out.
  6.  Convert the bracket back to a product.
  7.  Write "Hence proved".
```

---

# 15. ELIMINATION OF theta

| Given | Eliminate using | Result |
|---|---|---|
| x = a cos th, y = b sin th | sin^2 + cos^2 = 1 | x^2/a^2 + y^2/b^2 = 1 |
| x = a sec th, y = b tan th | sec^2 - tan^2 = 1 | x^2/a^2 - y^2/b^2 = 1 |
| x = a cosec th, y = b cot th | cosec^2 - cot^2 = 1 | x^2/a^2 - y^2/b^2 = 1 |
| x = a cos th + b sin th, y = a sin th - b cos th | add the squares | x^2 + y^2 = a^2 + b^2 |
| tan th + sin th = m, tan th - sin th = n | m^2 - n^2 and mn | m^2 - n^2 = 4 sqrt(mn) |
| sec th + tan th = m, sec th - tan th = n | multiply | mn = 1 |
| a cos th + b sin th = c | square and use sin^2+cos^2 | (a sin th - b cos th)^2 = a^2+b^2-c^2 |

---

# 16. THE 15 FORMULAE TO WRITE ON YOUR PALM

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   1.   sin^2 A + cos^2 A = 1                                    |
  |        1 + tan^2 A = sec^2 A      1 + cot^2 A = cosec^2 A       |
  |                                                                 |
  |   2.   A S T C   (All Silver Tea Cups) - anticlockwise          |
  |                                                                 |
  |   3.   ODD multiple of 90 CHANGES the ratio, EVEN keeps it;     |
  |        sign from the quadrant                                   |
  |                                                                 |
  |   4.   sin(A +- B) = sinA cosB +- cosA sinB                     |
  |                                                                 |
  |   5.   cos(A +- B) = cosA cosB -+ sinA sinB    (SIGN FLIPS)     |
  |                                                                 |
  |   6.   tan(A +- B) = (tanA +- tanB)/(1 -+ tanA tanB)            |
  |                                                                 |
  |   7.   sin 2A = 2 sinA cosA                                     |
  |                                                                 |
  |   8.   cos 2A = 2cos^2A - 1 = 1 - 2sin^2A = cos^2A - sin^2A     |
  |                                                                 |
  |   9.   sin 3A = 3 sinA - 4 sin^3 A                              |
  |        cos 3A = 4 cos^3 A - 3 cosA                              |
  |                                                                 |
  |  10.   t = tan(A/2):  sinA = 2t/(1+t^2), cosA = (1-t^2)/(1+t^2) |
  |                                                                 |
  |  11.   sinC + sinD = 2 sin((C+D)/2) cos((C-D)/2)                |
  |        cosC + cosD = 2 cos((C+D)/2) cos((C-D)/2)                |
  |        cosC - cosD = -2 sin((C+D)/2) sin((C-D)/2)               |
  |                                                                 |
  |  12.   2 sinA sinB = cos(A-B) - cos(A+B)                        |
  |                                                                 |
  |  13.   max/min of a cos th + b sin th = +- sqrt(a^2 + b^2)      |
  |                                                                 |
  |  14.   sin18 = (sqrt5 - 1)/4 ,  cos36 = (sqrt5 + 1)/4           |
  |                                                                 |
  |  15.   A + B + C = 180  =>  sin(A+B) = sinC ,                   |
  |                             cos((A+B)/2) = sin(C/2)             |
  |                                                                 |
  +-----------------------------------------------------------------+
```

If you can write those 15 from memory, you can attempt every question
this chapter has ever set.
