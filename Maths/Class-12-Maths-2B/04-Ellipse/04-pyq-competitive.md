# Ellipse — Competitive Exam Questions (EAPCET / JEE)

**Maths IIB · Chapter 4**

```
  +---------------+--------------------------+---------------+----------------+
  |  EXAM         |  Qs from ELLIPSE         |  Difficulty   |  MARKING       |
  +---------------+--------------------------+---------------+----------------+
  |  AP EAPCET    |  1 - 2 (out of 80 maths) |  easy-medium  |  +1, NO minus  |
  |  TG EAPCET    |  1 - 2 (out of 80 maths) |  easy-medium  |  +1, NO minus  |
  |  JEE Main     |  1 (out of 25 maths)     |  medium       |  +4 , -1       |
  +---------------+--------------------------+---------------+----------------+

  EAPCET has NO NEGATIVE MARKING. Never leave an ellipse question blank —
  even a guess after eliminating one option is worth taking.
  JEE Main has -1, so skip only what you genuinely cannot start.

  In EAPCET the ellipse question is nearly always pure substitution:
  find a, find b, find e, read the answer. That is a 30-second mark.
```

**The strip you must be able to write in 20 seconds:**

```
  x^2/a^2 + y^2/b^2 = 1 (a>b)   b^2 = a^2(1-e^2)   ae = sqrt(a^2-b^2)
  Foci (±ae,0)   Directrices x = ±a/e   LR = 2b^2/a = 2a(1-e^2)
  SP = a - e x1 , SP + S'P = 2a       P(th) = (a cos th, b sin th)
  Tangent  c^2 = a^2 m^2 + b^2 ,  contact ( -a^2 m/c , b^2/c )
  T = 0 , T = S11 , S·S11 = T^2 ,  Director circle x^2+y^2 = a^2+b^2
  Auxiliary circle x^2 + y^2 = a^2 ,  Area = pi a b
```

---

# PATTERN 1 — READ OFF e / FOCI / DIRECTRICES / LATUS RECTUM

> **SHORTCUT:** divide until the right-hand side is 1, circle the bigger
> denominator, and everything else is a two-second lookup. Do NOT skip the divide.

### Q1
The eccentricity of `x^2/25 + y^2/9 = 1` is
**(a)** 3/5  **(b)** 4/5  **(c)** 5/4  **(d)** 9/25

**ANSWER: (b) 4/5**
```
  a^2 = 25 , b^2 = 9      ->      e = sqrt( 1 - 9/25 ) = sqrt( 16/25 ) = 4/5
```

---

### Q2
The foci of `16x^2 + 25y^2 = 400` are
**(a)** (±3, 0)  **(b)** (0, ±3)  **(c)** (±4, 0)  **(d)** (±5, 0)

**ANSWER: (a) (±3, 0)**
```
  Divide by 400:   x^2/25 + y^2/16 = 1     ->    a = 5 , b = 4
  a e = sqrt( 25 - 16 ) = 3     ->    FOCI ( ±3 , 0 )
```

---

### Q3
The length of the latus rectum of `x^2/9 + y^2/25 = 1` is
**(a)** 18/5  **(b)** 50/3  **(c)** 9/5  **(d)** 10/3

**ANSWER: (a) 18/5**
```
  25 > 9 and 25 is under y^2  ->  MAJOR axis is the y-axis, a = 5 , b = 3

  LR = 2 b^2 / a = 2(9)/5 = 18/5

  TRAP CHECK: the answer must be less than 2a = 10.  18/5 = 3.6. TICK.
  Option (b) 50/3 = 16.7 is bigger than 10, so it is impossible.
```

---

### Q4
The distance between the foci of `4x^2 + 9y^2 = 36` is
**(a)** sqrt(5)  **(b)** 2 sqrt(5)  **(c)** 5  **(d)** 4 sqrt(5)

**ANSWER: (b) 2 sqrt(5)**
```
  x^2/9 + y^2/4 = 1  ->  a = 3 , b = 2 ,  a e = sqrt( 9 - 4 ) = sqrt 5
  Distance between the foci = 2 a e = 2 sqrt(5)
```

> **SHORTCUT:** distance between foci `= 2·sqrt(a^2 - b^2)` — you never need `e` at all.

---

### Q5
The equations of the directrices of `x^2/4 + y^2/3 = 1` are
**(a)** x = ±2  **(b)** x = ±4  **(c)** x = ±8/3  **(d)** y = ±4

**ANSWER: (b) x = ±4**
```
  a = 2 , b^2 = 3    ->    e = sqrt( 1 - 3/4 ) = 1/2
  x = ± a/e = ± 2 / (1/2) = ± 4
```

---

### Q6
The eccentricity of `3x^2 + 4y^2 = 12` is
**(a)** 1/2  **(b)** 1/sqrt(2)  **(c)** sqrt(3)/2  **(d)** 2/3

**ANSWER: (a) 1/2**
```
  x^2/4 + y^2/3 = 1  ->  e = sqrt( 1 - 3/4 ) = 1/2
```

---

### Q7
The length of the major axis of `25x^2 + 9y^2 = 225` is
**(a)** 6  **(b)** 10  **(c)** 5  **(d)** 3

**ANSWER: (b) 10**
```
  x^2/9 + y^2/25 = 1  ->  bigger denominator 25 is under y^2 ,
  so a = 5 (semi-major, along y) and the MAJOR AXIS = 2a = 10.
```

> **SHORTCUT:** never mind which axis it is on — the major axis length is always
> `2 × sqrt(bigger denominator)`.

---

### Q8
The equation `x^2/(10 - a) + y^2/(4 - a) = 1` represents an ellipse if
**(a)** a < 4  **(b)** a > 4  **(c)** 4 < a < 10  **(d)** a > 10

**ANSWER: (a) a < 4**
```
  Both denominators must be POSITIVE:
        10 - a > 0  ->  a < 10
         4 - a > 0  ->  a < 4
  Both hold together only when a < 4.
  (They can never be equal, so it is never a circle.)
```

---

# PATTERN 2 — ECCENTRICITY FROM A STATED CONDITION

> **SHORTCUT:** translate the sentence into an equation in `a` and `b` only,
> then divide through by `a^2` to make `b^2/a^2` appear, and use
> `e^2 = 1 - b^2/a^2`.

### Q9
If the latus rectum of an ellipse is half of its minor axis, then `e` is
**(a)** 1/2  **(b)** 1/sqrt(2)  **(c)** sqrt(3)/2  **(d)** 2/3

**ANSWER: (c) sqrt(3)/2**
```
  2 b^2 / a = ( 1/2 )( 2 b ) = b     ->     2 b = a     ->    b^2/a^2 = 1/4
  e^2 = 1 - 1/4 = 3/4     ->     e = sqrt(3)/2
```

---

### Q10
If the latus rectum of an ellipse is half of its major axis, then `e` is
**(a)** 1/2  **(b)** 1/sqrt(2)  **(c)** sqrt(3)/2  **(d)** 1/3

**ANSWER: (b) 1/sqrt(2)**
```
  2 b^2 / a = a     ->     b^2/a^2 = 1/2     ->     e^2 = 1/2
```

---

### Q11
If the minor axis of an ellipse equals the distance between its foci, then `e` is
**(a)** 1/sqrt(2)  **(b)** 1/2  **(c)** sqrt(2)/3  **(d)** sqrt(3)/2

**ANSWER: (a) 1/sqrt(2)**
```
  2 b = 2 a e   ->   b^2 = a^2 e^2 = a^2 - b^2   ->   2 b^2 = a^2
  e^2 = 1 - 1/2 = 1/2
```

---

### Q12
If the distance between the directrices is three times the distance between the foci,
then `e` is
**(a)** 1/3  **(b)** 1/sqrt(3)  **(c)** sqrt(3)  **(d)** 3

**ANSWER: (b) 1/sqrt(3)**
```
  2a/e = 3 ( 2 a e )   ->   1 = 3 e^2   ->   e = 1/sqrt(3)
```

---

### Q13
An ellipse has `e = 1/2` and the distance between its foci is `8`. Its latus
rectum is
**(a)** 12  **(b)** 6  **(c)** 16  **(d)** 24

**ANSWER: (a) 12**
```
  2 a e = 8   ->   a e = 4 ,  e = 1/2   ->   a = 8
  b^2 = a^2 - (ae)^2 = 64 - 16 = 48
  LR = 2 b^2 / a = 96 / 8 = 12

  CHECK: LR = 12 < 2a = 16. TICK.
```

---

### Q14
For the ellipse `x^2/a^2 + y^2/b^2 = 1`, the ratio (latus rectum) : (major axis) is
**(a)** e  **(b)** `1 - e^2`  **(c)** `b/a`  **(d)** `e^2`

**ANSWER: (b) 1 - e^2**
```
  LR / (2a) = ( 2 b^2 / a ) / ( 2 a ) = b^2 / a^2 = 1 - e^2
```

---

# PATTERN 3 — BUILD THE EQUATION FROM GIVEN DATA

> **SHORTCUT:** every one of these reduces to "find `a^2` and `b^2`".
> Write down `b^2 = a^2 - (ae)^2` first and hunt for `a` and `ae`.

### Q15
The ellipse with foci `(±5, 0)` and eccentricity `1/2` is
**(a)** `x^2/100 + y^2/75 = 1`  **(b)** `x^2/75 + y^2/100 = 1`
**(c)** `x^2/25 + y^2/16 = 1`  **(d)** `x^2/100 + y^2/25 = 1`

**ANSWER: (a)**
```
  a e = 5 , e = 1/2   ->   a = 10 , a^2 = 100
  b^2 = 100 - 25 = 75
```

---

### Q16
The ellipse whose vertices are `(0, ±10)` and eccentricity `4/5` is
**(a)** `x^2/100 + y^2/36 = 1`  **(b)** `x^2/36 + y^2/100 = 1`
**(c)** `x^2/64 + y^2/100 = 1`  **(d)** `x^2/100 + y^2/64 = 1`

**ANSWER: (b)**
```
  Vertices on the y-axis   ->   MAJOR AXIS IS VERTICAL , a = 10
  b^2 = a^2 ( 1 - e^2 ) = 100 ( 1 - 16/25 ) = 100 (9/25) = 36
  So 100 goes UNDER y^2 and 36 under x^2.
```

> **TRAP:** options (a) and (b) differ only by which denominator is on top.
> Where the vertices are tells you where the big number goes.

---

### Q17
The ellipse with centre at the origin, axes along the coordinate axes, passing through
`(-3, 1)` with `e = sqrt(2/5)` is
**(a)** `3x^2 + 5y^2 = 32`  **(b)** `5x^2 + 3y^2 = 32`
**(c)** `3x^2 + 5y^2 = 48`  **(d)** `x^2 + y^2 = 10`

**ANSWER: (a) 3x^2 + 5y^2 = 32**
```
  b^2 = a^2 ( 1 - 2/5 ) = 3 a^2 / 5

        9/a^2  +  1/( 3a^2/5 )  =  1
        9/a^2  +  5/( 3 a^2 )   =  1
        ( 27 + 5 ) / ( 3 a^2 )  =  1     ->    a^2 = 32/3 ,  b^2 = 32/5

        3x^2/32 + 5y^2/32 = 1     ->     3 x^2 + 5 y^2 = 32

  CHECK ( -3 , 1 ) : 27 + 5 = 32. TICK.
```

> **SHORTCUT for MCQs:** just substitute `(-3, 1)` into each option. Only (a) and (c)
> can be checked instantly, and (c) fails.

---

### Q18
The ellipse whose latus rectum is `5` and eccentricity `2/3` is
**(a)** `4x^2/81 + 4y^2/45 = 1`  **(b)** `x^2/81 + y^2/45 = 1`
**(c)** `x^2/9 + y^2/5 = 1`  **(d)** `4x^2/45 + 4y^2/81 = 1`

**ANSWER: (a)**
```
  LR = 2 a ( 1 - e^2 ) = 2 a ( 5/9 ) = 5    ->    a = 9/2 ,  a^2 = 81/4
  b^2 = ( 5/9 )( 81/4 ) = 45/4
```

---

# PATTERN 4 — FOCAL DISTANCES

> **SHORTCUT:** `SP + S'P = 2a` instantly. And `SP = a - e·x1` for the x-major
> ellipse — if the answer options are ugly, this is the formula they want.

### Q19
The sum of the distances of any point on `9x^2 + 25y^2 = 225` from its two foci is
**(a)** 5  **(b)** 10  **(c)** 8  **(d)** 6

**ANSWER: (b) 10**
```
  x^2/25 + y^2/9 = 1   ->   a = 5   ->   SP + S'P = 2a = 10
```

---

### Q20
`P(4, 9/5)` lies on `x^2/25 + y^2/9 = 1`. Its distance from the focus `(4, 0)` is
**(a)** 9/5  **(b)** 41/5  **(c)** 16/5  **(d)** 5

**ANSWER: (a) 9/5**
```
  a = 5 , b = 3 , a e = 4 , e = 4/5
  S P = a - e x1 = 5 - ( 4/5 )( 4 ) = 5 - 16/5 = 9/5

  CHECK: S'P = 5 + 16/5 = 41/5 , and 9/5 + 41/5 = 10 = 2a. TICK.
```

> **SHORTCUT:** `(4, 9/5)` is an END OF THE LATUS RECTUM (`x = ae = 4`,
> `y = b^2/a = 9/5`), and the focal distance of a latus-rectum end is always `b^2/a`.

---

### Q21
For `P` on `x^2/16 + y^2/9 = 1` with foci `S`, `S'`, the **maximum** value of
`SP · S'P` is
**(a)** 9  **(b)** 16  **(c)** 25  **(d)** 12

**ANSWER: (b) 16**
```
  SP * S'P = ( a - e x1 )( a + e x1 ) = a^2 - e^2 x1^2

  This is LARGEST when x1 = 0 (the ends of the minor axis):  = a^2 = 16
  and SMALLEST when x1 = ±a (the vertices):  a^2 - e^2 a^2 = b^2 = 9

  So the product runs between b^2 = 9 and a^2 = 16.
```

> **SHORTCUT worth memorising:** `b^2 <= SP·S'P <= a^2`.

---

# PATTERN 5 — TANGENCY CONDITION

> **SHORTCUT:** `c^2 = a^2 m^2 + b^2`. If the line is given as `lx + my + n = 0`,
> the equivalent form is `a^2 l^2 + b^2 m^2 = n^2`.

### Q22
If `y = x + c` touches `x^2/9 + y^2/4 = 1`, then `c` is
**(a)** ±5  **(b)** ±sqrt(13)  **(c)** ±13  **(d)** ±3

**ANSWER: (b) ±sqrt(13)**
```
  c^2 = a^2 m^2 + b^2 = 9(1) + 4 = 13
```

---

### Q23
The point of contact of `y = x + sqrt(13)` with `x^2/9 + y^2/4 = 1` is
**(a)** `(-9/sqrt13, 4/sqrt13)`  **(b)** `(9/sqrt13, 4/sqrt13)`
**(c)** `(-9/sqrt13, -4/sqrt13)`  **(d)** `(3, 2)`

**ANSWER: (a)**
```
  contact = ( -a^2 m / c , b^2 / c ) = ( -9(1)/sqrt13 , 4/sqrt13 )

  CHECK on the ellipse: (81/13)/9 + (16/13)/4 = 9/13 + 4/13 = 1. TICK.
  CHECK on the line: -9/sqrt13 + 13/sqrt13 = 4/sqrt13. TICK.
```

---

### Q24
The tangents to `x^2/25 + y^2/9 = 1` that are parallel to `y = 2x` are
**(a)** `y = 2x ± sqrt(109)`  **(b)** `y = 2x ± sqrt(34)`
**(c)** `y = 2x ± 7`  **(d)** `y = 2x ± sqrt(59)`

**ANSWER: (a)**
```
  c^2 = a^2 m^2 + b^2 = 25(4) + 9 = 109
```

---

### Q25
The number of tangents that can be drawn to `x^2/9 + y^2/4 = 1` from `(2, 3)` is
**(a)** 0  **(b)** 1  **(c)** 2  **(d)** infinitely many

**ANSWER: (c) 2**
```
  S11 = 4/9 + 9/4 - 1 = 0.444 + 2.25 - 1 = 1.694 > 0    ->   OUTSIDE
  From an outside point exactly TWO tangents can be drawn.
```

---

### Q26
The condition for `lx + my + n = 0` to touch `x^2/a^2 + y^2/b^2 = 1` is
**(a)** `a^2 l^2 + b^2 m^2 = n^2`  **(b)** `a^2 l^2 - b^2 m^2 = n^2`
**(c)** `l^2/a^2 + m^2/b^2 = n^2`  **(d)** `a^2 l + b^2 m = n`

**ANSWER: (a)**
```
  Rearranging gives y = -(l/m)x - n/m, so M = -l/m and C = -n/m.
  C^2 = a^2 M^2 + b^2   ->   n^2/m^2 = a^2 l^2/m^2 + b^2
  Multiply by m^2 :       n^2  =  a^2 l^2  +  b^2 m^2
```

---

### Q27
`4x + 3y = k` touches `x^2/16 + y^2/9 = 1` when `k` equals
**(a)** ±5  **(b)** ±sqrt(337)  **(c)** ±17  **(d)** ±25

**ANSWER: (b) ±sqrt(337)**
```
  Using a^2 l^2 + b^2 m^2 = n^2 with l = 4 , m = 3 , n = -k :
        16(16) + 9(9) = k^2
        256 + 81 = 337     ->     k = ± sqrt(337)
```

---

# PATTERN 6 — TANGENT AND NORMAL AT A POINT

> **SHORTCUT:** the tangent at `(x1,y1)` is got by "halving" the equation:
> `x^2 -> x x1`, `y^2 -> y y1`. Nothing else changes.

### Q28
The tangent to `x^2/25 + y^2/16 = 1` at `(3, 16/5)` is
**(a)** `3x + 5y = 25`  **(b)** `5x + 3y = 25`  **(c)** `3x - 5y = 25`  **(d)** `x + y = 5`

**ANSWER: (a) 3x + 5y = 25**
```
  3x/25 + (16/5)y/16 = 1   ->   3x/25 + y/5 = 1   ->   3x + 5y = 25
```

---

### Q29
The tangent to `x^2/16 + y^2/4 = 1` at the point whose eccentric angle is `45°` is
**(a)** `x + 2y = 4 sqrt(2)`  **(b)** `2x + y = 4 sqrt(2)`
**(c)** `x + y = 4`  **(d)** `x - 2y = 4 sqrt(2)`

**ANSWER: (a) x + 2y = 4 sqrt(2)**
```
  a = 4 , b = 2 ,  cos45 = sin45 = 1/sqrt2

        x(1/sqrt2)/4  +  y(1/sqrt2)/2  =  1

        Multiply by 4 sqrt(2) :        x  +  2 y  =  4 sqrt(2)

  CHECK the point ( 4 cos45 , 2 sin45 ) = ( 2 sqrt2 , sqrt2 ):
        2 sqrt2 + 2 sqrt2 = 4 sqrt2. TICK.
```

---

### Q30
The normal to `x^2/25 + y^2/16 = 1` at `(3, 16/5)` is
**(a)** `25x - 15y = 27`  **(b)** `15x - 25y = 27`  **(c)** `3x + 5y = 25`  **(d)** `5x - 3y = 9`

**ANSWER: (a) 25x - 15y = 27**
```
  a^2 x/x1 - b^2 y/y1 = a^2 - b^2
        25x/3  -  16y/(16/5)  =  9
        25x/3  -  5y          =  9      ->    25x - 15y = 27

  CHECK perpendicularity: tangent slope -3/5 , normal slope 25/15 = 5/3 ,
        product = -1. TICK.
```

---

### Q31
The slope of the tangent to `x^2/a^2 + y^2/b^2 = 1` at `(x1, y1)` is
**(a)** `-b^2 x1 / (a^2 y1)`  **(b)** `-a^2 x1 / (b^2 y1)`
**(c)** `b^2 y1 / (a^2 x1)`  **(d)** `a^2 y1 / (b^2 x1)`

**ANSWER: (a)**
```
  Differentiate:  2x/a^2 + (2y/b^2) dy/dx = 0   ->   dy/dx = - b^2 x / ( a^2 y )
  (Option (d) is the NORMAL slope — do not pick it by reflex.)
```

---

### Q32
The normal to `x^2/16 + y^2/9 = 1` at the point whose eccentric angle is `45°` is
**(a)** `4x - 3y = 7 / sqrt(2)`  **(b)** `sqrt(2)(4x - 3y) = 7`
**(c)** `4x + 3y = 7 sqrt(2)`  **(d)** `4x - 3y = 7`

**ANSWER: (b) sqrt(2)(4x - 3y) = 7**
```
  a x sec th - b y cosec th = a^2 - b^2
        4 x ( sqrt2 )  -  3 y ( sqrt2 )  =  16 - 9  =  7
        sqrt(2) ( 4x - 3y ) = 7

  CHECK at ( 4/sqrt2 , 3/sqrt2 ) : sqrt2 ( 16/sqrt2 - 9/sqrt2 ) = 16 - 9 = 7. TICK.
```

---

# PATTERN 7 — CHORD OF CONTACT, MIDPOINT CHORD, POLE AND POLAR

> **SHORTCUT:** all three are the SAME expression `T`.
> `T = 0` for contact/polar, `T = S11` for a midpoint.

### Q33
The chord of contact of `(2, 3)` with respect to `x^2/9 + y^2/4 = 1` is
**(a)** `8x + 27y = 36`  **(b)** `2x + 3y = 6`  **(c)** `27x + 8y = 36`  **(d)** `4x + 9y = 12`

**ANSWER: (a) 8x + 27y = 36**
```
  T = 0 :  2x/9 + 3y/4 = 1      Multiply by 36 :     8 x  +  27 y  =  36
```

---

### Q34
The chord of `x^2/9 + y^2/4 = 1` whose midpoint is `(1, 1)` is
**(a)** `4x + 9y = 13`  **(b)** `9x + 4y = 13`  **(c)** `x + y = 2`  **(d)** `4x + 9y = 36`

**ANSWER: (a) 4x + 9y = 13**
```
  T = S11 :   x/9 + y/4  =  1/9 + 1/4  =  13/36
  Multiply by 36 :        4 x  +  9 y  =  13

  CHECK (1,1) is on it: 4 + 9 = 13. TICK.
  CHECK (1,1) is INSIDE: S11 = 1/9 + 1/4 - 1 = -0.639 < 0. TICK
        (a midpoint of a real chord must be inside).
```

---

### Q35
The pole of the line `x + y = 1` with respect to `x^2/9 + y^2/4 = 1` is
**(a)** `(9, 4)`  **(b)** `(-9, -4)`  **(c)** `(3, 2)`  **(d)** `(1, 1)`

**ANSWER: (a) (9, 4)**
```
  Line as  x + y - 1 = 0   ->   l = 1 , m = 1 , n = -1
  Pole = ( -a^2 l/n , -b^2 m/n ) = ( 9 , 4 )

  CHECK: polar of ( 9 , 4 ) is 9x/9 + 4y/4 = 1 , i.e. x + y = 1. TICK.
```

---

### Q36
The points `(x1, y1)` and `(x2, y2)` are conjugate with respect to
`x^2/a^2 + y^2/b^2 = 1` if
**(a)** `x1x2/a^2 + y1y2/b^2 = 1`  **(b)** `x1x2 + y1y2 = a^2 + b^2`
**(c)** `x1x2/a^2 - y1y2/b^2 = 1`  **(d)** `x1x2/a^2 + y1y2/b^2 = 0`

**ANSWER: (a)**
```
  "Conjugate" means each lies on the polar of the other.
  The polar of (x1,y1) is  x x1/a^2 + y y1/b^2 = 1 .
  Putting (x2,y2) into it gives exactly option (a).
```

---

# PATTERN 8 — DIRECTOR CIRCLE AND PERPENDICULAR TANGENTS

> **SHORTCUT:** the words "perpendicular tangents", "tangents at right angles" or
> "the tangents include 90 degrees" mean **`x^2 + y^2 = a^2 + b^2`** and nothing else.

### Q37
The locus of the point of intersection of perpendicular tangents to
`x^2/9 + y^2/4 = 1` is
**(a)** `x^2 + y^2 = 5`  **(b)** `x^2 + y^2 = 13`  **(c)** `x^2 + y^2 = 36`  **(d)** `x^2 + y^2 = 9`

**ANSWER: (b) x^2 + y^2 = 13**
```
  Director circle:  x^2 + y^2 = a^2 + b^2 = 9 + 4 = 13
```

---

### Q38
Two perpendicular tangents are drawn to `16x^2 + 25y^2 = 400`. They meet on the circle
of radius
**(a)** sqrt(41)  **(b)** 41  **(c)** 9  **(d)** 3

**ANSWER: (a) sqrt(41)**
```
  x^2/25 + y^2/16 = 1   ->   director circle x^2 + y^2 = 41 , radius sqrt(41)
```

---

### Q39
The locus of the foot of the perpendicular drawn from a focus of
`x^2/a^2 + y^2/b^2 = 1` to any tangent is
**(a)** `x^2 + y^2 = a^2`  **(b)** `x^2 + y^2 = b^2`
**(c)** `x^2 + y^2 = a^2 + b^2`  **(d)** the directrix

**ANSWER: (a) x^2 + y^2 = a^2 — the AUXILIARY circle**

> **SHORTCUT — do not confuse these three circles:**
> ```
>   AUXILIARY circle   x^2 + y^2 = a^2          (on the major axis as diameter)
>   DIRECTOR  circle   x^2 + y^2 = a^2 + b^2    (perpendicular tangents)
>   the ellipse itself x^2/a^2 + y^2/b^2 = 1
> ```

---

# PATTERN 9 — LOCUS BY ELIMINATING THE PARAMETER

> **SHORTCUT:** write the moving point as `(h, k)`, get `cos theta` and `sin theta`
> separately, then use `cos^2 + sin^2 = 1`. Replace `(h,k)` by `(x,y)` at the end.

### Q40
The tangent at any point of `x^2/a^2 + y^2/b^2 = 1` meets the axes at `M` and `N`.
The locus of the midpoint of `MN` is
**(a)** `a^2/x^2 + b^2/y^2 = 4`  **(b)** `x^2/a^2 + y^2/b^2 = 4`
**(c)** `a^2/x^2 + b^2/y^2 = 1`  **(d)** `x^2 + y^2 = a^2 + b^2`

**ANSWER: (a) a^2/x^2 + b^2/y^2 = 4**
```
  Tangent at theta:  ( x cos th )/a + ( y sin th )/b = 1

        Put y = 0 :  M = ( a / cos th , 0 )
        Put x = 0 :  N = ( 0 , b / sin th )

        Midpoint ( h , k ) = ( a / (2 cos th) , b / (2 sin th) )

        cos th = a / ( 2 h ) ,   sin th = b / ( 2 k )

        cos^2 + sin^2 = 1  ->  a^2/(4h^2) + b^2/(4k^2) = 1

                   a^2      b^2
                  -----  + -----  =  4
                   x^2      y^2
```

---

### Q41
`P` is any point on `x^2/16 + y^2/9 = 1` and `N` is the foot of the perpendicular from
`P` to the x-axis. The locus of the midpoint of `PN` is
**(a)** `x^2/16 + 4y^2/9 = 1`  **(b)** `x^2/16 + y^2/9 = 1/4`
**(c)** `x^2/4 + y^2/9 = 1`  **(d)** `x^2/16 + y^2/36 = 1`

**ANSWER: (a) x^2/16 + 4y^2/9 = 1**
```
  P = ( 4 cos th , 3 sin th ) ,  N = ( 4 cos th , 0 )

  Midpoint ( h , k ) = ( 4 cos th , (3/2) sin th )

        cos th = h/4 ,  sin th = 2k/3

        h^2/16  +  4 k^2 / 9  =  1
```

---

### Q42
The eccentric angles of the ends of a pair of conjugate diameters differ by
**(a)** 45°  **(b)** 60°  **(c)** 90°  **(d)** 180°

**ANSWER: (c) 90°**
```
  P = ( a cos th , b sin th ) ,  D = ( a cos(th+90) , b sin(th+90) )
                                   = ( -a sin th , b cos th )
  slope(CP) * slope(CD) = [ b sin/a cos ] * [ b cos / (-a sin) ] = - b^2/a^2 . TICK.
```

---

### Q43
If `CP` and `CD` are conjugate semi-diameters of `x^2/25 + y^2/9 = 1`, then
`CP^2 + CD^2` equals
**(a)** 16  **(b)** 34  **(c)** 25  **(d)** 9

**ANSWER: (b) 34**
```
  CP^2 + CD^2 = a^2 + b^2 = 25 + 9 = 34   (always constant)
```

---

# PATTERN 10 — SHIFTED ELLIPSE, AREA, MISCELLANEOUS

### Q44
The centre of `9x^2 + 16y^2 - 36x + 32y - 92 = 0` is
**(a)** `(2, -1)`  **(b)** `(-2, 1)`  **(c)** `(4, -2)`  **(d)** `(1, -2)`

**ANSWER: (a) (2, -1)**
```
  SHORTCUT:  centre = ( -D/(2A) , -E/(2B) )
             A = 9 , D = -36  ->  x = 36/18 = 2
             B = 16 , E = 32  ->  y = -32/32 = -1
  No need to complete the square at all for the centre alone.
```

---

### Q45
The eccentricity of `4x^2 + y^2 - 8x + 2y + 1 = 0` is
**(a)** 1/2  **(b)** sqrt(3)/2  **(c)** 1/sqrt(2)  **(d)** 2/sqrt(3)

**ANSWER: (b) sqrt(3)/2**
```
  4(x-1)^2 + (y+1)^2 = 4   ->   (x-1)^2/1 + (y+1)^2/4 = 1
  Bigger denominator 4 is under y   ->   a^2 = 4 , b^2 = 1
  e = sqrt( 1 - 1/4 ) = sqrt(3)/2
```

---

### Q46
The area enclosed by `9x^2 + 16y^2 = 144` is
**(a)** `12 pi`  **(b)** `144 pi`  **(c)** `7 pi`  **(d)** `24 pi`

**ANSWER: (a) 12 pi**
```
  x^2/16 + y^2/9 = 1  ->  a = 4 , b = 3  ->  AREA = pi a b = 12 pi
```

---

### Q47
The auxiliary circle of `x^2/25 + y^2/9 = 1` is
**(a)** `x^2 + y^2 = 9`  **(b)** `x^2 + y^2 = 25`
**(c)** `x^2 + y^2 = 34`  **(d)** `x^2 + y^2 = 16`

**ANSWER: (b) x^2 + y^2 = 25**
```
  Auxiliary circle is drawn on the MAJOR axis as diameter: radius a = 5.
```

---

### Q48
The product of the perpendicular distances from the two foci of
`x^2/25 + y^2/16 = 1` to any tangent is
**(a)** 25  **(b)** 16  **(c)** 9  **(d)** 41

**ANSWER: (b) 16**
```
  The product is always b^2 = 16 , whatever the tangent.
```

---

### Q49
An arch is a semi-ellipse `20 m` wide at the base and `8 m` high at the centre.
Its height at a point `5 m` from the centre of the base is
**(a)** 4 m  **(b)** `4 sqrt(3)` m  **(c)** 6 m  **(d)** `2 sqrt(3)` m

**ANSWER: (b) 4 sqrt(3) m**
```
  Semi-major a = 10 (half of 20) along x , semi-minor b = 8 along y.

        x^2/100 + y^2/64 = 1

  Put x = 5 :   25/100 + y^2/64 = 1   ->   y^2/64 = 3/4   ->   y^2 = 48

        y = sqrt(48) = 4 sqrt(3)  =  6.93 m

  CHECK: it must be less than the 8 m centre height. TICK.
```

---

### Q50
The tangent at the vertex `(a, 0)` of `x^2/a^2 + y^2/b^2 = 1` is
**(a)** `x = a`  **(b)** `y = b`  **(c)** `x = a/e`  **(d)** `x = ae`

**ANSWER: (a) x = a**
```
  T = 0 with ( x1 , y1 ) = ( a , 0 ) :   x a / a^2  +  0  =  1   ->   x = a
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------------+----------------------------------------+
  |  IF YOU SEE THIS ...                   |  DO THIS IMMEDIATELY                   |
  +---------------------------------------+----------------------------------------+
  |  any ellipse equation                  |  DIVIDE until the RHS is 1, then       |
  |                                        |  circle the BIGGER denominator = a^2   |
  +---------------------------------------+----------------------------------------+
  |  "find the foci"                       |  ae = sqrt( a^2 - b^2 ) , put it on    |
  |                                        |  the axis of the bigger denominator    |
  +---------------------------------------+----------------------------------------+
  |  "distance between the foci"           |  2 sqrt( a^2 - b^2 )  (skip e entirely)|
  +---------------------------------------+----------------------------------------+
  |  "latus rectum"                        |  2 b^2 / a . Sanity: it must be < 2a   |
  +---------------------------------------+----------------------------------------+
  |  "sum of focal distances"              |  2a . No calculation at all.           |
  +---------------------------------------+----------------------------------------+
  |  "distance between the directrices"    |  2 a / e                               |
  +---------------------------------------+----------------------------------------+
  |  "LR = half of the minor axis"         |  a = 2b  ->  e = sqrt(3)/2             |
  |  "LR = half of the major axis"         |  a^2 = 2b^2  ->  e = 1/sqrt(2)         |
  |  "minor axis = distance between foci"  |  e = 1/sqrt(2)                         |
  +---------------------------------------+----------------------------------------+
  |  "does the line touch it?"             |  c^2 = a^2 m^2 + b^2                   |
  |  line given as lx + my + n = 0         |  a^2 l^2 + b^2 m^2 = n^2               |
  +---------------------------------------+----------------------------------------+
  |  "point of contact"                    |  ( -a^2 m / c , b^2 / c )              |
  +---------------------------------------+----------------------------------------+
  |  "tangent at (x1,y1)"                  |  halve it: x^2 -> x x1 , y^2 -> y y1   |
  +---------------------------------------+----------------------------------------+
  |  "normal at (x1,y1)"                   |  a^2 x/x1 - b^2 y/y1 = a^2 - b^2       |
  +---------------------------------------+----------------------------------------+
  |  "eccentric angle" appears             |  use ( a cos th , b sin th ) at once   |
  +---------------------------------------+----------------------------------------+
  |  "chord of contact" / "polar"          |  T = 0                                 |
  |  "midpoint" / "bisected at"            |  T = S11                               |
  |  "pair of tangents"                    |  S · S11 = T^2                         |
  +---------------------------------------+----------------------------------------+
  |  "perpendicular tangents" / "at 90"    |  DIRECTOR circle x^2 + y^2 = a^2 + b^2 |
  +---------------------------------------+----------------------------------------+
  |  "foot of perpendicular from a focus   |  AUXILIARY circle x^2 + y^2 = a^2      |
  |   to a tangent"                        |                                        |
  +---------------------------------------+----------------------------------------+
  |  "product of perpendiculars from the   |  b^2                                   |
  |   two foci to a tangent"               |                                        |
  +---------------------------------------+----------------------------------------+
  |  "conjugate diameters"                 |  m1 m2 = -b^2/a^2 , CP^2+CD^2 = a^2+b^2|
  +---------------------------------------+----------------------------------------+
  |  "area of the ellipse"                 |  pi a b                                |
  +---------------------------------------+----------------------------------------+
  |  x^2 and y^2 with x and y terms too    |  centre = ( -D/2A , -E/2B ) — that     |
  |                                        |  alone answers many MCQs               |
  +---------------------------------------+----------------------------------------+
  |  an answer with e > 1                  |  IT IS WRONG. Recheck which            |
  |                                        |  denominator was bigger.               |
  +---------------------------------------+----------------------------------------+
  |  running out of time in EAPCET         |  GUESS. There is no negative marking.  |
  +---------------------------------------+----------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  THE 60-SECOND ELIMINATION TRICKS FOR MCQs                               |
  |                                                                          |
  |  1. Any option with e >= 1 is wrong.                                     |
  |  2. Any latus rectum bigger than the major axis is wrong.                |
  |  3. If the vertices are on the y-axis, the big number goes under y^2.    |
  |  4. If a POINT is given in the question, substitute it into each option. |
  |     That kills three options in ten seconds.                             |
  |  5. Foci and vertices are POINTS; directrices are EQUATIONS. An option   |
  |     of the wrong TYPE can be crossed out without any working.            |
  +--------------------------------------------------------------------------+
```
