# Hyperbola — Competitive Exam Questions (EAPCET / JEE)

**Maths IIB · Chapter 5**

```
  +---------------+--------------------------+---------------+----------------+
  |  EXAM         |  Qs from HYPERBOLA       |  Difficulty   |  MARKING       |
  +---------------+--------------------------+---------------+----------------+
  |  AP EAPCET    |  1 - 2 (out of 80 maths) |  easy-medium  |  +1, NO minus  |
  |  TG EAPCET    |  1 - 2 (out of 80 maths) |  easy-medium  |  +1, NO minus  |
  |  JEE Main     |  1 (out of 25 maths)     |  medium       |  +4 , -1       |
  +---------------+--------------------------+---------------+----------------+

  EAPCET has NO NEGATIVE MARKING. Never leave a hyperbola question blank —
  even a guess after eliminating one option is worth taking.
  JEE Main has -1, so skip only what you genuinely cannot start.

  In EAPCET the hyperbola question is nearly always pure substitution:
  find a, find b, find e, read the answer. That is a 30-second mark.
  The most common single trick is testing whether you know that
  ae = sqrt( a^2 + b^2 )  and NOT  sqrt( a^2 - b^2 ) .
```

**The strip you must be able to write in 20 seconds:**

```
  x^2/a^2 - y^2/b^2 = 1     b^2 = a^2(e^2 - 1)     ae = sqrt(a^2 + b^2)
  Foci (±ae,0)  Directrices x = ±a/e  LR = 2b^2/a  e > 1
  ASYMPTOTES y = ±(b/a)x   angle = 2 tan^-1(b/a) = 2 sec^-1(e)
  CONJUGATE  1/e1^2 + 1/e2^2 = 1      RECTANGULAR a = b , e = sqrt2
  xy = c^2 : P(t) = (ct, c/t) , tangent x + t^2 y = 2ct , area 2c^2
  SP = e x1 - a ,  |S'P - SP| = 2a    P(th) = (a sec th, b tan th)
  Tangent c^2 = a^2m^2 - b^2 , contact ( -a^2m/c , -b^2/c )
  Normal a^2x/x1 + b^2y/y1 = a^2 + b^2
  T = 0 , T = S11 , S·S11 = T^2 , Director circle x^2 + y^2 = a^2 - b^2
```

---

# PATTERN 1 — READ OFF e / FOCI / DIRECTRICES / LATUS RECTUM

> **SHORTCUT:** divide until the right-hand side is 1, then take `a^2` from the
> term with the **PLUS** sign. Never from the bigger number.

### Q1
The eccentricity of `x^2/16 - y^2/9 = 1` is
**(a)** 3/4  **(b)** 5/4  **(c)** 4/5  **(d)** sqrt(7)/4

**ANSWER: (b) 5/4**
```
  ae = sqrt(16 + 9) = 5 ,  a = 4 ,  e = 5/4 .
  Option (d) is the ELLIPSE answer ( sqrt(16-9)/4 ) — the classic trap.
```

---

### Q2
The eccentricity of `9x^2 - 16y^2 = 144` is
**(a)** 5/4  **(b)** 5/3  **(c)** 4/3  **(d)** sqrt(2)

**ANSWER: (a) 5/4**
```
  Divide by 144 : x^2/16 - y^2/9 = 1 ,  a = 4 , b = 3 , ae = 5 , e = 5/4 .
```

---

### Q3
The eccentricity of `16y^2 - 9x^2 = 144` is
**(a)** 5/4  **(b)** 5/3  **(c)** 3/5  **(d)** 4/3

**ANSWER: (b) 5/3**
```
  y^2/9 - x^2/16 = 1 : the PLUS is on y^2 , so a^2 = 9 , b^2 = 16 .
  ae = sqrt(9+16) = 5 , a = 3 , e = 5/3 .
```

> **SHORTCUT:** whichever variable has the plus sign owns `a`. Size is irrelevant.

---

### Q4
The foci of `x^2/9 - y^2/16 = 1` are
**(a)** `(±5, 0)`  **(b)** `(0, ±5)`  **(c)** `(±sqrt7, 0)`  **(d)** `(±4, 0)`

**ANSWER: (a) (±5, 0)**
```
  ae = sqrt( 9 + 16 ) = 5 , and the transverse axis is the x-axis.
```

---

### Q5
The length of the latus rectum of `x^2/9 - y^2/16 = 1` is
**(a)** 8/3  **(b)** 32/3  **(c)** 9/2  **(d)** 16/3

**ANSWER: (b) 32/3**
```
  LR = 2 b^2 / a = 2 (16) / 3 = 32/3 .
  Trap (d) uses b^2/a instead of 2b^2/a .
```

---

### Q6
The equations of the directrices of `x^2/16 - y^2/9 = 1` are
**(a)** `x = ±5`  **(b)** `x = ±16/5`  **(c)** `x = ±5/4`  **(d)** `x = ±25/4`

**ANSWER: (b) x = ±16/5**
```
  e = 5/4 , a = 4 , a/e = 4 / (5/4) = 16/5 = 3.2 .
  Sanity check: a/e ( 3.2 ) < a ( 4 ) < ae ( 5 ) .
```

---

### Q7
The length of the transverse axis of `4x^2 - 9y^2 = 36` is
**(a)** 4  **(b)** 6  **(c)** 9  **(d)** 12

**ANSWER: (b) 6**
```
  x^2/9 - y^2/4 = 1  ->  a = 3  ->  transverse axis 2a = 6 .
  ( conjugate axis = 2b = 4 )
```

---

### Q8
The eccentricity of `x^2 - y^2 = 5` is
**(a)** 1  **(b)** sqrt(2)  **(c)** 2  **(d)** sqrt(5)

**ANSWER: (b) sqrt(2)**
```
  a = b = sqrt5 : RECTANGULAR. e = sqrt2 always.
```

> **SHORTCUT:** any equation of the form `x^2 - y^2 = k` has `e = sqrt2`. So does
> `xy = c^2`. Do not compute anything.

---

# PATTERN 2 — ECCENTRICITY FROM A STATED CONDITION

> **SHORTCUT:** translate every phrase into symbols first —
> transverse `2a`, conjugate `2b`, LR `2b^2/a`, foci gap `2ae`,
> directrix gap `2a/e` — then force `b^2/a^2` to appear and use `e^2 = 1 + b^2/a^2`.

### Q9
If the latus rectum of a hyperbola equals its transverse axis, then `e` is
**(a)** sqrt(2)  **(b)** sqrt(3)  **(c)** 2  **(d)** 3/2

**ANSWER: (a) sqrt(2)**
```
  2b^2/a = 2a  ->  b^2 = a^2  ->  a = b  ->  rectangular  ->  e = sqrt2 .
```

---

### Q10
If the latus rectum is half the transverse axis, then `e` is
**(a)** sqrt(3)/2  **(b)** sqrt(6)/2  **(c)** 1/sqrt(2)  **(d)** 3/2

**ANSWER: (b) sqrt(6)/2**
```
  2b^2/a = a  ->  2b^2 = a^2  ->  b^2/a^2 = 1/2
  e^2 = 1 + 1/2 = 3/2  ->  e = sqrt(3/2) = sqrt6 / 2 = 1.2247 .
  Option (a) is less than 1 and can be rejected on sight.
```

---

### Q11
If the angle between the asymptotes of a hyperbola is 60 degrees, then `e` is
**(a)** 2  **(b)** 2/sqrt(3)  **(c)** sqrt(3)  **(d)** sqrt(2)

**ANSWER: (b) 2/sqrt(3)**
```
  Angle = 2 sec^-1 ( e ) = 60  ->  sec^-1 e = 30  ->  e = sec 30 = 2/sqrt3 .
  ( Check: b/a = tan30 = 1/sqrt3 , e^2 = 1 + 1/3 = 4/3 . )
```

> **SHORTCUT:** angle between asymptotes = `2A` **means** `e = sec A`. One line.

---

### Q12
If the distance between the foci is twice the distance between the directrices, then
`e` is
**(a)** 1/2  **(b)** sqrt(2)  **(c)** 2  **(d)** 3

**ANSWER: (b) sqrt(2)**
```
  2 a e = 2 ( 2 a / e )   ->   e = 2/e   ->   e^2 = 2 .
```

---

### Q13
If the eccentricity of a hyperbola is 2, the eccentricity of its conjugate is
**(a)** 2  **(b)** 1/2  **(c)** 2/sqrt(3)  **(d)** sqrt(3)

**ANSWER: (c) 2/sqrt(3)**
```
  1/e1^2 + 1/e2^2 = 1  ->  1/e2^2 = 1 - 1/4 = 3/4  ->  e2^2 = 4/3
  e2 = 2/sqrt3 = 1.155 ( still > 1 , TICK )
```

---

### Q14
If the latus rectum of a hyperbola subtends a right angle at its centre, then `e` is
**(a)** `(1 + sqrt5)/2`  **(b)** sqrt(2)  **(c)** `(sqrt5 - 1)/2`  **(d)** 2

**ANSWER: (a) (1 + sqrt5)/2**
```
  Ends of the latus rectum : ( ae , b^2/a ) and ( ae , -b^2/a ) .
  Right angle at the centre  ->  product of slopes = -1 :

        ( b^2/a )/( ae ) * ( -b^2/a )/( ae ) = -1   ->   b^4 = a^4 e^2

  With b^2 = a^2 ( e^2 - 1 ) :  a^4 ( e^2-1 )^2 = a^4 e^2
        ( e^2 - 1 )^2 = e^2   ->   e^2 - 1 = e   ->   e^2 - e - 1 = 0
        e = ( 1 + sqrt5 ) / 2 = 1.618       ( the golden ratio )
  Option (c) is less than 1 : reject immediately.
```

---

### Q15
For the hyperbola `x^2/9 - y^2/4 = 1`, the eccentricity is
**(a)** sqrt(13)/3  **(b)** sqrt(5)/3  **(c)** 13/9  **(d)** 3/sqrt(13)

**ANSWER: (a) sqrt(13)/3**
```
  ae = sqrt( 9 + 4 ) = sqrt13 , a = 3 , e = sqrt13/3 = 1.202 .
  Option (d) is less than 1 : reject on sight.
```

---

# PATTERN 3 — BUILD THE EQUATION FROM GIVEN DATA

> **SHORTCUT:** the axis carrying the given foci/vertices is the transverse axis.
> Extract `a` and `ae`, then `b^2 = (ae)^2 - a^2`. **PLUS becomes minus. Nothing else.**

### Q16
The hyperbola with foci `(±5, 0)` and transverse axis of length 8 is
**(a)** `x^2/16 - y^2/9 = 1`  **(b)** `x^2/9 - y^2/16 = 1`
**(c)** `x^2/16 + y^2/9 = 1`  **(d)** `y^2/16 - x^2/9 = 1`

**ANSWER: (a) x²/16 - y²/9 = 1**
```
  a = 4 , ae = 5 , b^2 = 25 - 16 = 9 .
```

---

### Q17
The hyperbola with vertices `(±2, 0)` and foci `(±3, 0)` is
**(a)** `x^2/4 - y^2/5 = 1`  **(b)** `x^2/4 - y^2/9 = 1`
**(c)** `x^2/9 - y^2/4 = 1`  **(d)** `x^2/5 - y^2/4 = 1`

**ANSWER: (a) x²/4 - y²/5 = 1**
```
  a = 2 , ae = 3 , b^2 = 9 - 4 = 5 , e = 3/2 .
```

---

### Q18
The hyperbola with eccentricity 2 and foci `(±2, 0)` is
**(a)** `x^2 - y^2/3 = 1`  **(b)** `x^2/3 - y^2 = 1`
**(c)** `x^2/4 - y^2/3 = 1`  **(d)** `x^2/2 - y^2/2 = 1`

**ANSWER: (a) x² - y²/3 = 1**
```
  ae = 2 , e = 2  ->  a = 1 , b^2 = 4 - 1 = 3 .
  CHECK : e = sqrt( 1 + 3/1 ) = 2 .   TICK
```

---

### Q19
The rectangular hyperbola whose asymptotes are the coordinate axes and which passes
through `(2, 3)` is
**(a)** `xy = 5`  **(b)** `xy = 6`  **(c)** `x^2 - y^2 = -5`  **(d)** `xy = 1`

**ANSWER: (b) xy = 6**
```
  Asymptotes = the axes  ->  the curve is  x y = c^2 .
  Through ( 2 , 3 ) :  c^2 = 6 .
```

---

### Q20
The locus of a point whose distances from `(0, 5)` and `(0, -5)` differ by 6 is
**(a)** `y^2/9 - x^2/16 = 1`  **(b)** `x^2/9 - y^2/16 = 1`
**(c)** `y^2/16 - x^2/9 = 1`  **(d)** `x^2/25 + y^2/9 = 1`

**ANSWER: (a) y²/9 - x²/16 = 1**
```
  Foci on the y-axis :  2ae = 10 -> ae = 5 ;  2a = 6 -> a = 3 ; e = 5/3 .
  b^2 = 25 - 9 = 16 .
```

---

# PATTERN 4 — ASYMPTOTES AND THE CONJUGATE HYPERBOLA

> **SHORTCUT:** to get the asymptotes, set the right-hand side to **0** and factorise.
> To get the conjugate, flip the sign of the whole equation. Two seconds each.

### Q21
The asymptotes of `x^2/16 - y^2/9 = 1` are
**(a)** `3x ± 4y = 0`  **(b)** `4x ± 3y = 0`  **(c)** `x ± y = 0`  **(d)** `9x ± 16y = 0`

**ANSWER: (a) 3x ± 4y = 0**
```
  x^2/16 - y^2/9 = 0  ->  9x^2 = 16y^2  ->  3x = ± 4y ,  i.e. y = ±(3/4)x .
```

---

### Q22
The combined equation of the asymptotes of `9x^2 - 16y^2 = 144` is
**(a)** `9x^2 - 16y^2 = 0`  **(b)** `9x^2 + 16y^2 = 0`
**(c)** `16x^2 - 9y^2 = 0`  **(d)** `9x^2 - 16y^2 = 288`

**ANSWER: (a) 9x² - 16y² = 0**
```
  Same second-degree part, constant replaced by 0.
```

---

### Q23
The conjugate hyperbola of `x^2/9 - y^2/16 = 1` is
**(a)** `y^2/16 - x^2/9 = 1`  **(b)** `x^2/16 - y^2/9 = 1`
**(c)** `x^2/9 + y^2/16 = 1`  **(d)** `y^2/9 - x^2/16 = 1`

**ANSWER: (a) y²/16 - x²/9 = 1**
```
  Multiply the whole equation by -1 .
```

---

### Q24
If the eccentricity of a hyperbola is `5/4`, that of its conjugate is
**(a)** 4/5  **(b)** 5/3  **(c)** 3/5  **(d)** 4/3

**ANSWER: (b) 5/3**
```
  1/e2^2 = 1 - 16/25 = 9/25  ->  e2 = 5/3 .
  Options (a) and (c) are below 1 : reject immediately.
```

---

### Q25
The hyperbola with asymptotes `3x ± 5y = 0` passing through `(1, -1)` is
**(a)** `9x^2 - 25y^2 = 16`  **(b)** `25y^2 - 9x^2 = 16`
**(c)** `9x^2 - 25y^2 = 34`  **(d)** `25y^2 - 9x^2 = 34`

**ANSWER: (b) 25y² - 9x² = 16**
```
  The asymptote pair is  ( 3x - 5y )( 3x + 5y ) = 9x^2 - 25y^2 = 0 .
  A hyperbola with the same asymptotes is  9x^2 - 25y^2 = k .
  At ( 1 , -1 ) :  k = 9 - 25 = -16 .
  So  9x^2 - 25y^2 = -16 ,  i.e.  25y^2 - 9x^2 = 16 .
  ( Option (a) has the sign of k wrong — the commonest slip. )
```

---

### Q26
The angle between the asymptotes of a rectangular hyperbola is
**(a)** 30°  **(b)** 45°  **(c)** 60°  **(d)** 90°

**ANSWER: (d) 90°**
```
  a = b ,  slopes +1 and -1 , product -1 . "Rectangular" literally means
  right-angled asymptotes.
```

---

### Q27
The asymptotes of `xy = c^2` are
**(a)** `x = 0` and `y = 0`  **(b)** `y = ±x`
**(c)** `x + y = 0` only  **(d)** it has none

**ANSWER: (a) x = 0 and y = 0 (the coordinate axes)**

---

### Q28
A hyperbola, its conjugate hyperbola and its pair of asymptotes `A` satisfy
**(a)** `H + C = A`  **(b)** `H + C = 2A`  **(c)** `H - C = 2A`  **(d)** `H C = A^2`

**ANSWER: (b) H + C = 2A**
```
  ( x^2/a^2 - y^2/b^2 - 1 ) + ( x^2/a^2 - y^2/b^2 + 1 )
        = 2 ( x^2/a^2 - y^2/b^2 )
```

---

# PATTERN 5 — TANGENCY CONDITION

> **SHORTCUT:** `c^2 = a^2m^2 - b^2`. If the right-hand side comes out **negative**,
> the answer is "no such tangent" — and that is often one of the options.

### Q29
The line `y = mx + c` touches `x^2/a^2 - y^2/b^2 = 1` if
**(a)** `c^2 = a^2m^2 + b^2`  **(b)** `c^2 = a^2m^2 - b^2`
**(c)** `c^2 = b^2m^2 - a^2`  **(d)** `c = a/m`

**ANSWER: (b) c² = a²m² - b²**

---

### Q30
The values of `c` for which `y = 2x + c` touches `x^2/16 - y^2/9 = 1` are
**(a)** `±sqrt(55)`  **(b)** `±sqrt(73)`  **(c)** `±5`  **(d)** `±sqrt(7)`

**ANSWER: (a) ±sqrt(55)**
```
  c^2 = 16 ( 4 ) - 9 = 55 .   ( option (b) is the ELLIPSE answer 64 + 9 )
```

---

### Q31
The point of contact of the tangent `y = x + 3` with `x^2/25 - y^2/16 = 1` is
**(a)** `(25/3, 16/3)`  **(b)** `(-25/3, -16/3)`
**(c)** `(-25/3, 16/3)`  **(d)** `(5, 4)`

**ANSWER: (b) (-25/3, -16/3)**
```
  ( -a^2 m/c , -b^2/c ) = ( -25/3 , -16/3 ) .
  CHECK on the curve : 25/9 - 16/9 = 1 . On the line : -25/3 + 3 = -16/3 . TICK
```

> **SHORTCUT:** for a hyperbola BOTH coordinates of the contact point carry a
> minus sign in front. For an ellipse only the first does.

---

### Q32
The number of tangents of slope `1/2` that can be drawn to `x^2/4 - y^2/9 = 1` is
**(a)** 0  **(b)** 1  **(c)** 2  **(d)** infinitely many

**ANSWER: (a) 0**
```
  c^2 = 4 ( 1/4 ) - 9 = -8  < 0 .   No real c exists.
  ( b/a = 3/2 , and |m| = 1/2 < 3/2 . Lines flatter than the asymptote
    always CUT the curve; they can never touch it. )
```

---

### Q33
With respect to `x^2/16 - y^2/9 = 1`, the line `3x - 4y = 0` is
**(a)** a tangent  **(b)** a chord  **(c)** an asymptote  **(d)** a directrix

**ANSWER: (c) an asymptote**
```
  m = 3/4 = b/a exactly, so c^2 = a^2m^2 - b^2 = 9 - 9 = 0 : the "tangent"
  degenerates into the asymptote y = (3/4) x .
```

---

### Q34
The line `lx + my + n = 0` touches `x^2/a^2 - y^2/b^2 = 1` if
**(a)** `a^2l^2 + b^2m^2 = n^2`  **(b)** `a^2l^2 - b^2m^2 = n^2`
**(c)** `a^2l^2 - b^2m^2 = 1`  **(d)** `a^2m^2 - b^2l^2 = n^2`

**ANSWER: (b) a²l² - b²m² = n²**
```
  Slope = -l/m , c = -n/m . Put into c^2 = a^2m_slope^2 - b^2 :
        n^2/m^2 = a^2 l^2/m^2 - b^2   ->   n^2 = a^2 l^2 - b^2 m^2 .
```

---

# PATTERN 6 — TANGENT AND NORMAL AT A POINT

### Q35
The tangent to `x^2/16 - y^2/9 = 1` at `(5, 9/4)` is
**(a)** `5x - 4y = 16`  **(b)** `5x + 4y = 16`  **(c)** `4x - 5y = 16`  **(d)** `5x - 4y = 9`

**ANSWER: (a) 5x - 4y = 16**
```
  T = 0 :  5x/16 - ( 9/4 ) y / 9 = 1  ->  5x/16 - y/4 = 1  ->  5x - 4y = 16 .
```

---

### Q36
The normal to `x^2/16 - y^2/9 = 1` at `(5, 9/4)` is
**(a)** `16x + 20y = 125`  **(b)** `16x - 20y = 125`
**(c)** `20x + 16y = 125`  **(d)** `16x + 20y = 7`

**ANSWER: (a) 16x + 20y = 125**
```
  a^2x/x1 + b^2y/y1 = a^2 + b^2 :  16x/5 + 4y = 25  ->  16x + 20y = 125 .
  CHECK slopes 5/4 and -4/5 : product -1 .    TICK
```

> **SHORTCUT:** hyperbola normal = **PLUS** in the middle and **PLUS** on the right.
> Ellipse normal = minus in both places.

---

### Q37
The tangent to `x^2/a^2 - y^2/b^2 = 1` at `(a sec th, b tan th)` is
**(a)** `(x sec th)/a + (y tan th)/b = 1`  **(b)** `(x sec th)/a - (y tan th)/b = 1`
**(c)** `(x cos th)/a - (y sin th)/b = 1`  **(d)** `ax sec th - by tan th = 1`

**ANSWER: (b) (x sec th)/a - (y tan th)/b = 1**

---

### Q38
The slope of the tangent to `x^2/a^2 - y^2/b^2 = 1` at `(x1, y1)` is
**(a)** `-b^2x1/(a^2y1)`  **(b)** `b^2x1/(a^2y1)`  **(c)** `a^2y1/(b^2x1)`  **(d)** `-a^2y1/(b^2x1)`

**ANSWER: (b) b²x1/(a²y1)**
```
  Differentiate : 2x/a^2 - (2y/b^2) y' = 0 .
  ( option (d) is the NORMAL slope )
```

---

### Q39
The tangent to `xy = 16` at the point `(4, 4)` is
**(a)** `x + y = 8`  **(b)** `x - y = 0`  **(c)** `x + y = 16`  **(d)** `x + 4y = 20`

**ANSWER: (a) x + y = 8**
```
  c = 4 , the point ( ct , c/t ) = ( 4 , 4 ) gives t = 1 .
  Tangent x + t^2 y = 2ct  ->  x + y = 8 .
```

---

### Q40
The tangent at the vertex `(a, 0)` of `x^2/a^2 - y^2/b^2 = 1` is
**(a)** `x = a`  **(b)** `y = b`  **(c)** `x = ae`  **(d)** `x = a/e`

**ANSWER: (a) x = a**
```
  T = 0 with ( x1 , y1 ) = ( a , 0 ) :  x a / a^2 - 0 = 1  ->  x = a .
```

---

# PATTERN 7 — CHORD OF CONTACT, MIDPOINT CHORD, POLE AND POLAR

> **SHORTCUT:** the SAME expression `T` does all of these. Write `T` once, then
> set it equal to `0` (contact/polar) or to `S11` (midpoint).

### Q41
The chord of contact of the tangents drawn from `(3, 2)` to `x^2/9 - y^2/4 = 1` is
**(a)** `2x - 3y = 6`  **(b)** `2x + 3y = 6`  **(c)** `3x - 2y = 6`  **(d)** `x - y = 1`

**ANSWER: (a) 2x - 3y = 6**
```
  T = 0 :  3x/9 - 2y/4 = 1  ->  x/3 - y/2 = 1  ->  2x - 3y = 6 .
```

---

### Q42
The chord of `x^2 - 4y^2 = 4` bisected at `(3, 1)` is
**(a)** `3x - 4y = 5`  **(b)** `3x + 4y = 5`  **(c)** `4x - 3y = 9`  **(d)** `x - y = 2`

**ANSWER: (a) 3x - 4y = 5**
```
  x^2/4 - y^2 = 1 .  T = S11 :  3x/4 - y = 9/4 - 1 = 5/4  ->  3x - 4y = 5 .
  ( substituting back gives 5x^2 - 30x + 41 = 0 , whose roots sum to 6 ,
    so the midpoint really is x = 3 )
```

---

### Q43
The pole of `3x + 4y = 12` with respect to `x^2/16 - y^2/9 = 1` is
**(a)** `(4, -3)`  **(b)** `(4, 3)`  **(c)** `(-4, 3)`  **(d)** `(3, -4)`

**ANSWER: (a) (4, -3)**
```
  l = 3 , m = 4 , n = -12 .   Pole = ( -a^2 l/n , + b^2 m/n )
                                   = ( -48/-12 , 36/-12 ) = ( 4 , -3 ) .
  CHECK : the polar of ( 4 , -3 ) is x/4 + y/3 = 1 , i.e. 3x + 4y = 12 . TICK
```

> **SHORTCUT:** hyperbola pole = `(-a^2l/n, +b^2m/n)`. The **second sign flips**
> compared with the ellipse.

---

### Q44
The points `(x1, y1)` and `(x2, y2)` are conjugate with respect to
`x^2/a^2 - y^2/b^2 = 1` if
**(a)** `x1x2/a^2 + y1y2/b^2 = 1`  **(b)** `x1x2/a^2 - y1y2/b^2 = 1`
**(c)** `x1x2 - y1y2 = a^2 - b^2`  **(d)** `x1x2 = y1y2`

**ANSWER: (b) x1x2/a² - y1y2/b² = 1**
```
  "Conjugate" means each lies on the polar of the other; put ( x2 , y2 )
  into the polar of ( x1 , y1 ) .
```

---

### Q45
The point `(2, 3)` with respect to `x^2/4 - y^2/9 = 1` lies
**(a)** inside a branch  **(b)** on the curve  **(c)** outside  **(d)** at a focus

**ANSWER: (c) outside**
```
  S11 = 4/4 - 9/9 - 1 = 1 - 1 - 1 = -1  <  0  ->  OUTSIDE
  ( for a hyperbola, S11 > 0 is INSIDE — the opposite of the ellipse )
```

---

# PATTERN 8 — DIRECTOR CIRCLE AND PERPENDICULAR TANGENTS

### Q46
Two perpendicular tangents are drawn to `x^2/16 - y^2/9 = 1`. They meet on the circle
**(a)** `x^2 + y^2 = 25`  **(b)** `x^2 + y^2 = 7`  **(c)** `x^2 + y^2 = 16`  **(d)** `x^2 + y^2 = 9`

**ANSWER: (b) x² + y² = 7**
```
  Director circle x^2 + y^2 = a^2 - b^2 = 16 - 9 = 7 .
  ( option (a) is the ELLIPSE answer a^2 + b^2 )
```

---

### Q47
For `x^2/9 - y^2/16 = 1`, the number of points from which a pair of perpendicular
tangents can be drawn is
**(a)** 0  **(b)** 1  **(c)** 2  **(d)** infinitely many

**ANSWER: (a) 0**
```
  a^2 - b^2 = 9 - 16 = -7 < 0 , so x^2 + y^2 = -7 has no real points.
  ( equivalently e = 5/3 > sqrt2 )
```

> **SHORTCUT:** a real director circle exists only when `a > b`, i.e. `e < sqrt2`.

---

### Q48
The locus of the foot of the perpendicular drawn from a focus of
`x^2/a^2 - y^2/b^2 = 1` to any tangent is
**(a)** `x^2 + y^2 = a^2`  **(b)** `x^2 + y^2 = b^2`
**(c)** `x^2 + y^2 = a^2 - b^2`  **(d)** the directrix

**ANSWER: (a) x² + y² = a² — the AUXILIARY circle**

> **SHORTCUT — do not confuse the three circles:**
> ```
>   AUXILIARY circle   x^2 + y^2 = a^2          (feet of perpendiculars)
>   DIRECTOR  circle   x^2 + y^2 = a^2 - b^2    (perpendicular tangents)
>   the hyperbola itself x^2/a^2 - y^2/b^2 = 1
> ```

---

### Q49
The product of the perpendicular distances from the two foci of
`x^2/16 - y^2/9 = 1` to any tangent is
**(a)** 16  **(b)** 9  **(c)** 25  **(d)** 7

**ANSWER: (b) 9**
```
  The product is always b^2 , whatever the tangent. Here b^2 = 9 .
```

---

# PATTERN 9 — PARAMETRIC POINTS AND LOCUS

> **SHORTCUT:** write the moving point as `(h, k)`, get `sec th` and `tan th`
> separately, then use `sec^2 - tan^2 = 1`. Replace `(h,k)` by `(x,y)` at the end.

### Q50
The point on `x^2/9 - y^2/4 = 1` whose eccentric angle is 60 degrees is
**(a)** `(6, 2sqrt3)`  **(b)** `(3/2, sqrt3)`  **(c)** `(6, sqrt3)`  **(d)** `(3, 2)`

**ANSWER: (a) (6, 2√3)**
```
  ( a sec60 , b tan60 ) = ( 3*2 , 2*sqrt3 ) .  Check 36/9 - 12/4 = 1 . TICK
```

---

### Q51
The locus of the midpoint of the portion of a tangent to `xy = c^2` intercepted
between the axes is
**(a)** `xy = c^2`  **(b)** `xy = 2c^2`  **(c)** `x^2 + y^2 = c^2`  **(d)** `x + y = 2c`

**ANSWER: (a) xy = c² — the same hyperbola**
```
  Tangent at ( ct , c/t ) is x + t^2 y = 2ct .
  It meets the axes at ( 2ct , 0 ) and ( 0 , 2c/t ) .
  Midpoint = ( ct , c/t ) , which is the point of contact and lies on xy = c^2 .
```

---

### Q52
The area of the triangle formed by any tangent to `xy = c^2` and the coordinate axes is
**(a)** `c^2`  **(b)** `2c^2`  **(c)** `4c^2`  **(d)** it varies

**ANSWER: (b) 2c²**
```
  (1/2)( 2ct )( 2c/t ) = 2 c^2 , independent of t .
```

---

### Q53
The vertices of `xy = 16` are
**(a)** `(4, 4)` and `(-4, -4)`  **(b)** `(4, -4)` and `(-4, 4)`
**(c)** `(16, 1)` and `(-16, -1)`  **(d)** `(2, 8)` and `(-2, -8)`

**ANSWER: (a) (4, 4) and (-4, -4)**
```
  c = 4 ; the vertices of xy = c^2 are ( c , c ) and ( -c , -c ) ,
  which lie on the transverse axis y = x .
```

---

### Q54
The focal distances of the point `(8, 3sqrt3)` on `x^2/16 - y^2/9 = 1` are
**(a)** 6 and 14  **(b)** 4 and 12  **(c)** 10 and 18  **(d)** 5 and 13

**ANSWER: (a) 6 and 14**
```
  e = 5/4 :  e x1 - a = 10 - 4 = 6 ,  e x1 + a = 10 + 4 = 14 .
  Difference 8 = 2a .   TICK
```

---

### Q55
`P` is any point on `x^2/25 - y^2/16 = 1` with foci `S` and `S'`. Then `|S'P - SP|` is
**(a)** 10  **(b)** 8  **(c)** `2 sqrt41`  **(d)** 16

**ANSWER: (a) 10**
```
  | S'P - SP | = 2 a = 2 ( 5 ) = 10 .
  ( Trap (b) uses 2b ; trap (c) uses the distance between the foci 2ae. )
```

---

### Q56
The equation `3x^2 - 5xy - 2y^2 + 5x + 11y - 8 = 0` represents
**(a)** an ellipse  **(b)** a parabola  **(c)** a hyperbola  **(d)** a pair of lines

**ANSWER: (c) a hyperbola**
```
  h^2 - ab = ( -5/2 )^2 - ( 3 )( -2 ) = 25/4 + 6 = 49/4 > 0 ,
  and Delta = -49 != 0 so it is not degenerate.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+-----------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY              |
  +--------------------------------------+-----------------------------------+
  |  a minus sign between x^2 and y^2    |  it is a HYPERBOLA, e > 1         |
  |                                      |  reject every option with e < 1   |
  +--------------------------------------+-----------------------------------+
  |  "find e / foci / LR"                |  divide until RHS = 1 ;           |
  |                                      |  a^2 = the PLUS denominator ;     |
  |                                      |  ae = sqrt( a^2 + b^2 )           |
  +--------------------------------------+-----------------------------------+
  |  x^2 - y^2 = k   or   xy = c^2       |  e = sqrt 2 . Do not compute.     |
  +--------------------------------------+-----------------------------------+
  |  "angle between asymptotes = 2A"     |  e = sec A                        |
  +--------------------------------------+-----------------------------------+
  |  "asymptotes"                        |  put the RHS to 0 and factorise   |
  +--------------------------------------+-----------------------------------+
  |  "conjugate hyperbola" + one e       |  1/e1^2 + 1/e2^2 = 1              |
  +--------------------------------------+-----------------------------------+
  |  "tangent with slope m"              |  c^2 = a^2m^2 - b^2 .             |
  |                                      |  If negative -> answer is ZERO    |
  |                                      |  tangents.                        |
  +--------------------------------------+-----------------------------------+
  |  "point of contact"                  |  ( -a^2 m/c , -b^2/c )            |
  |                                      |  BOTH coordinates negative-signed |
  +--------------------------------------+-----------------------------------+
  |  "perpendicular tangents"            |  x^2 + y^2 = a^2 - b^2 .          |
  |                                      |  If a < b -> NONE exist.          |
  +--------------------------------------+-----------------------------------+
  |  "foot of perpendicular from focus"  |  x^2 + y^2 = a^2 (auxiliary)      |
  +--------------------------------------+-----------------------------------+
  |  "product of perpendiculars from     |  b^2 , always                     |
  |   the foci to a tangent"             |                                   |
  +--------------------------------------+-----------------------------------+
  |  "difference of the distances from   |  2a ( not 2b , not 2ae )          |
  |   two fixed points"                  |                                   |
  +--------------------------------------+-----------------------------------+
  |  "chord of contact / polar"          |  T = 0                            |
  |  "chord with midpoint (x1,y1)"       |  T = S11                          |
  |  "pair of tangents"                  |  S * S11 = T^2                    |
  +--------------------------------------+-----------------------------------+
  |  a general 2nd degree equation       |  h^2 - ab > 0 -> hyperbola ;      |
  |                                      |  and a + b = 0 -> rectangular     |
  +--------------------------------------+-----------------------------------+
  |  you have forgotten a formula        |  write the ELLIPSE version and    |
  |                                      |  replace b^2 by -b^2              |
  +--------------------------------------+-----------------------------------+
  |  you are stuck with 20 seconds left  |  EAPCET: mark ANY option.         |
  |                                      |  There is no negative marking.    |
  +--------------------------------------+-----------------------------------+
```

```
  THE FIVE INSTANT ELIMINATIONS
  1.  Any option giving  e <= 1  for a hyperbola is wrong.
  2.  Any option using  sqrt( a^2 - b^2 )  for ae is the ellipse trap.
  3.  Any option with only ONE focus / ONE directrix / ONE asymptote is wrong.
  4.  Directrices are always CLOSER to the centre than the vertices,
      and the foci are always FURTHER out:   a/e  <  a  <  ae .
  5.  Latus rectum is 2b^2/a — the same as an ellipse, never 4a.
```
