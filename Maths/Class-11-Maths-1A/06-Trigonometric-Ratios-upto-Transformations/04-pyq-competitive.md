# Trigonometric Ratios upto Transformations — JEE Main / AP EAPCET / TG EAPCET

All multiple choice. This chapter is the **single largest supplier of
trigonometry questions** in every one of these three exams.

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

**How many questions come from this chapter:**

```
  AP EAPCET  (Maths, 80 questions)  ->  4 to 6
  TG EAPCET  (Maths, 80 questions)  ->  4 to 6
  JEE Main   (Maths, 25 questions)  ->  1 to 2   (usually max/min or a
                                                  transformation)
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — ALLIED ANGLES AND STRAIGHT EVALUATION

### Q1
The value of  sin(-1230 degrees)  is

(a) 1/2 &nbsp;&nbsp; (b) -1/2 &nbsp;&nbsp; (c) sqrt3/2 &nbsp;&nbsp; (d) -sqrt3/2

**ANSWER: (b)**
```
  Add 1440 (= 4 x 360) to bring it into range:

  sin(-1230) = sin(-1230 + 1440) = sin 210 = sin(180 + 30) = - sin30 = -1/2
```

> **SHORTCUT:** for negative angles just add enough multiples of 360 to make
> the angle land between 0 and 360. Never work with a negative angle.

---

### Q2
cos(-870 degrees) =

(a) 1/2 &nbsp;&nbsp; (b) -1/2 &nbsp;&nbsp; (c) sqrt3/2 &nbsp;&nbsp; (d) -sqrt3/2

**ANSWER: (d)**
```
  cos is EVEN, so cos(-870) = cos 870

  870 - 720 = 150

  cos 150 = cos(180 - 30) = - cos30 = - sqrt3/2
```

---

### Q3
tan 1 . tan 2 . tan 3 . ... . tan 89  (degrees)  equals

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 89 &nbsp;&nbsp; (d) not defined

**ANSWER: (b)**
```
  Pair the ends:  tan1 x tan89 = tan1 x cot1 = 1
                  tan2 x tan88 = 1
                  ...
                  tan44 x tan46 = 1

  The lonely middle term is tan45 = 1.

  Whole product = 1
```

> **SHORTCUT:** whenever two angles ADD TO 90, their tangents multiply to 1.

---

### Q4
cos 1 + cos 2 + cos 3 + ... + cos 179  (degrees)  equals

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) -1 &nbsp;&nbsp; (d) 90

**ANSWER: (a)**
```
  cos k + cos(180 - k) = cos k - cos k = 0

  So cos1 + cos179 = 0 , cos2 + cos178 = 0 , ... , cos89 + cos91 = 0

  The leftover middle term is cos 90 = 0.

  Total = 0
```

---

### Q5
If  sin x + cosec x = 2, then  sin^n x + cosec^n x  equals

(a) 2 &nbsp;&nbsp; (b) 2^n &nbsp;&nbsp; (c) 2^(n-1) &nbsp;&nbsp; (d) n

**ANSWER: (a)**
```
  sin x + 1/sin x = 2   ->   sin^2 x - 2 sinx + 1 = 0
                        ->   (sinx - 1)^2 = 0   ->   sin x = 1

  Then cosec x = 1 , and 1^n + 1^n = 2 for every n.
```

---

# PATTERN 2 — COMPOUND ANGLES

### Q6
cos 15 degrees =

(a) (sqrt3+1)/2 &nbsp;&nbsp; (b) (sqrt6+sqrt2)/4 &nbsp;&nbsp;
(c) (sqrt6-sqrt2)/4 &nbsp;&nbsp; (d) (sqrt3-1)/2

**ANSWER: (b)**
```
  cos15 = cos(45 - 30) = cos45 cos30 + sin45 sin30

        = (1/sqrt2)(sqrt3/2) + (1/sqrt2)(1/2)

        = (sqrt3 + 1)/(2 sqrt2)  =  (sqrt6 + sqrt2)/4  =  0.9659
```

---

### Q7
If tan A = 1/2 and tan B = 1/3, then A + B =

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (b)**
```
                1/2 + 1/3         5/6
  tan(A + B) = -------------  =  ------  =  1     ->    A + B = 45 deg
                1 - 1/6           5/6
```

---

### Q8
If sin A + sin B = a and cos A + cos B = b, then cos(A - B) =

(a) (a^2 + b^2 - 2)/2 &nbsp;&nbsp; (b) (a^2 + b^2)/2 &nbsp;&nbsp;
(c) (a^2 - b^2)/2 &nbsp;&nbsp; (d) 2 - a^2 - b^2

**ANSWER: (a)**
```
  a^2 + b^2 = (sinA + sinB)^2 + (cosA + cosB)^2
            = 2 + 2(sinA sinB + cosA cosB)
            = 2 + 2 cos(A - B)

  cos(A - B) = (a^2 + b^2 - 2)/2
```

> **SHORTCUT:** any question giving you "sinA + sinB" AND "cosA + cosB"
> wants you to SQUARE AND ADD.

---

### Q9
(cos 9 + sin 9) / (cos 9 - sin 9)  =

(a) tan 36 &nbsp;&nbsp; (b) tan 54 &nbsp;&nbsp; (c) cot 54 &nbsp;&nbsp; (d) 1

**ANSWER: (b)**
```
  Divide top and bottom by cos 9 :

    (1 + tan9)/(1 - tan9) = tan(45 + 9) = tan 54     ( = cot 36 )
```

---

### Q10
tan 20 + tan 25 + tan 20 . tan 25  =

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) sqrt3 &nbsp;&nbsp; (d) 2

**ANSWER: (b)**
```
  20 + 25 = 45 , so  tan45 = (tan20 + tan25)/(1 - tan20 tan25) = 1

  tan20 + tan25 = 1 - tan20 tan25

  tan20 + tan25 + tan20 tan25 = 1
```

> **SHORTCUT:** if the two angles ADD TO 45, the answer is 1.
> If they ADD TO 60, the pattern gives sqrt3 with a sqrt3 in front of the product.

---

# PATTERN 3 — MULTIPLE AND HALF ANGLES

### Q11
If cos x = 3/5, then cos 2x =

(a) 7/25 &nbsp;&nbsp; (b) -7/25 &nbsp;&nbsp; (c) 24/25 &nbsp;&nbsp; (d) 18/25

**ANSWER: (b)**
```
  Only cos is given, so use  cos2x = 2 cos^2 x - 1

  = 2(9/25) - 1 = 18/25 - 25/25 = -7/25
```

---

### Q12
If tan x = 3/4 and x is acute, then sin 2x =

(a) 24/25 &nbsp;&nbsp; (b) 7/25 &nbsp;&nbsp; (c) 12/25 &nbsp;&nbsp; (d) -24/25

**ANSWER: (a)**
```
              2 tan x         2(3/4)         3/2        24
  sin 2x  =  ------------  =  --------  =  --------  =  ----
              1 + tan^2 x     1 + 9/16      25/16        25
```

> **SHORTCUT:** when only tan is given, use the tan-forms of sin2x and cos2x.
> Do NOT go back and find sin x and cos x separately — that wastes 40 seconds.

---

### Q13
(sin 3x / sin x)  -  (cos 3x / cos x)  =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  sin3x/sinx = (3 sinx - 4 sin^3 x)/sinx = 3 - 4 sin^2 x
  cos3x/cosx = (4 cos^3 x - 3 cosx)/cosx = 4 cos^2 x - 3

  Difference = 3 - 4 sin^2 x - 4 cos^2 x + 3 = 6 - 4 = 2
```

---

### Q14
tan(pi/8) =

(a) sqrt2 + 1 &nbsp;&nbsp; (b) sqrt2 - 1 &nbsp;&nbsp; (c) 1/sqrt2 &nbsp;&nbsp; (d) 2 - sqrt3

**ANSWER: (b)**
```
  pi/8 = 22.5 deg = half of 45 deg.  Use  tan(A/2) = (1 - cosA)/sinA :

           1 - cos45        1 - 1/sqrt2
        = -----------  =  --------------  =  sqrt2 - 1  =  0.4142
             sin45            1/sqrt2
```

---

### Q15
cos^2(pi/8) + cos^2(3pi/8) + cos^2(5pi/8) + cos^2(7pi/8) =

(a) 1 &nbsp;&nbsp; (b) 3/2 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  The angles are 22.5 , 67.5 , 112.5 , 157.5 degrees.

  cos 67.5  =  sin 22.5           ->  square = sin^2 22.5
  cos 112.5 = -sin 22.5           ->  square = sin^2 22.5
  cos 157.5 = -cos 22.5           ->  square = cos^2 22.5

  Sum = cos^2 22.5 + sin^2 22.5 + sin^2 22.5 + cos^2 22.5
      = 1 + 1
      = 2
```

> **SHORTCUT:** in any "sum of squares of cosines" MCQ, look for two angles
> that add to 90 — each such pair gives exactly 1.

---

### Q16
If  t = tan(A/2), then  (1 + cos A)/(1 - cos A)  =

(a) t^2 &nbsp;&nbsp; (b) 1/t^2 &nbsp;&nbsp; (c) 2t &nbsp;&nbsp; (d) 1 - t^2

**ANSWER: (b)**
```
  1 + cosA = 2 cos^2(A/2)          1 - cosA = 2 sin^2(A/2)

  Ratio = cot^2(A/2) = 1/t^2
```

---

# PATTERN 4 — TRANSFORMATIONS AND CHAIN PRODUCTS

### Q17
(sin 3x + sin x) / (cos 3x + cos x) =

(a) tan x &nbsp;&nbsp; (b) tan 2x &nbsp;&nbsp; (c) cot 2x &nbsp;&nbsp; (d) tan 4x

**ANSWER: (b)**
```
  Numerator   = 2 sin2x cos x
  Denominator = 2 cos2x cos x

  Ratio = tan 2x
```

> **SHORTCUT:** in a fraction "sum of sines over sum of cosines", the answer is
> always the tangent of the HALF-SUM of the two angles. Here (3x + x)/2 = 2x.
> You can answer this in 3 seconds without writing anything.

---

### Q18
cos 20 . cos 40 . cos 80  =

(a) 1/2 &nbsp;&nbsp; (b) 1/4 &nbsp;&nbsp; (c) 1/8 &nbsp;&nbsp; (d) 1/16

**ANSWER: (c)**
```
  The angles DOUBLE each time, so use

                                                    sin(2^n A)
    cosA cos2A cos4A ... cos(2^(n-1) A)  =  --------------------------
                                                  2^n  sin A

  Here A = 20 , n = 3 :

     sin 160 / (8 sin 20) = sin20 / (8 sin20) = 1/8
```

---

### Q19
sin 10 . sin 50 . sin 70  =

(a) 1/2 &nbsp;&nbsp; (b) 1/4 &nbsp;&nbsp; (c) 1/8 &nbsp;&nbsp; (d) sqrt3/8

**ANSWER: (c)**
```
  50 = 60 - 10  and  70 = 60 + 10 , so this is

     sinA . sin(60 - A) . sin(60 + A)  =  (1/4) sin 3A

  with A = 10 :   (1/4) sin30 = (1/4)(1/2) = 1/8
```

> **SHORTCUT — spot the shape:** if the three angles are `A`, `60 - A`, `60 + A`
> the answer is a quarter of sin3A (or cos3A for cosines). Nothing to compute.

---

### Q20
cos(pi/7) . cos(2pi/7) . cos(3pi/7)  =

(a) 1/8 &nbsp;&nbsp; (b) -1/8 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 1/2

**ANSWER: (a)**
```
  Multiply and divide by 2 sin(pi/7) and use the doubling trick repeatedly.

  NUMERICAL CHECK:
     cos 25.71 x cos 51.43 x cos 77.14
   = 0.90097 x 0.62349 x 0.22252
   = 0.125  =  1/8
```

---

### Q21
sin 20 . sin 40 . sin 60 . sin 80  =

(a) 1/16 &nbsp;&nbsp; (b) 3/16 &nbsp;&nbsp; (c) 1/8 &nbsp;&nbsp; (d) sqrt3/16

**ANSWER: (b)**
```
  sin20 sin40 sin80 = (1/4) sin60 = sqrt3/8

  x sin60 = (sqrt3/8)(sqrt3/2) = 3/16
```

---

### Q22
cos 12 + cos 84 + cos 132 + cos 156  (degrees)  =

(a) 1/2 &nbsp;&nbsp; (b) -1/2 &nbsp;&nbsp; (c) 0 &nbsp;&nbsp; (d) 1

**ANSWER: (b)**
```
  cos12 + cos132 = 2 cos72 cos60 = cos72
  cos84 + cos156 = 2 cos120 cos36 = -cos36

  Sum = cos72 - cos36 = (sqrt5-1)/4 - (sqrt5+1)/4 = -1/2
```

---

# PATTERN 5 — MAXIMUM, MINIMUM AND RANGE (the JEE favourite)

### Q23
The maximum value of  3 sin x + 4 cos x  is

(a) 3 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 7

**ANSWER: (c)** — `sqrt(3^2 + 4^2) = 5`

---

### Q24
The minimum value of  5 cos x + 3 cos(x + pi/3) + 3  is

(a) -4 &nbsp;&nbsp; (b) -3 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 4

**ANSWER: (a)**
```
  STEP 1  Expand the second term:
          3 cos(x + pi/3) = 3[ cosx cos60 - sinx sin60 ]
                          = (3/2) cosx - (3 sqrt3 / 2) sinx

  STEP 2  Whole expression
          = 5 cosx + (3/2) cosx - (3 sqrt3/2) sinx + 3
          = (13/2) cosx - (3 sqrt3/2) sinx + 3

  STEP 3  a^2 + b^2 = 169/4 + 27/4 = 196/4 = 49  ->  sqrt = 7

  STEP 4  MIN = 3 - 7 = -4
```

> **SHORTCUT:** the moment you see two cosines with different phases, EXPAND
> everything into `a cos x + b sin x + c` and use `c +- sqrt(a^2 + b^2)`.

---

### Q25
The range of  1 / (3 sin x - 4 cos x + 7)  is

(a) [1/12 , 1/2] &nbsp;&nbsp; (b) [1/2 , 1] &nbsp;&nbsp;
(c) [-1/2 , 1/2] &nbsp;&nbsp; (d) [1/7 , 1]

**ANSWER: (a)**
```
  3 sinx - 4 cosx lies in [-5 , 5]

  So the denominator lies in [7 - 5 , 7 + 5] = [2 , 12]  (always positive)

  Therefore the whole fraction lies in [1/12 , 1/2]
```

---

### Q26
The minimum value of  sin^4 x + cos^4 x  is

(a) 0 &nbsp;&nbsp; (b) 1/4 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 1

**ANSWER: (c)**
```
  sin^4 + cos^4 = 1 - 2 sin^2 x cos^2 x
                = 1 - (1/2) sin^2 2x

  sin^2 2x is largest at 1, so the minimum is 1 - 1/2 = 1/2
  (and the maximum is 1)
```

```
  WORTH MEMORISING:
     sin^4 x + cos^4 x   ->  min 1/2 , max 1
     sin^6 x + cos^6 x   ->  min 1/4 , max 1
```

---

### Q27
The minimum value of  sec^2 x + cosec^2 x  is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) no minimum

**ANSWER: (c)**
```
  sec^2 x + cosec^2 x = 1/cos^2 x + 1/sin^2 x

                        sin^2 x + cos^2 x            1              4
                     = -------------------  =  -------------  =  --------
                         sin^2 x cos^2 x        sin^2x cos^2x     sin^2 2x

  sin^2 2x is at most 1, so the smallest value of the whole thing is 4.
```

---

### Q28
The maximum value of  4 sin^2 x + 3 cos^2 x  is

(a) 3 &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 7

**ANSWER: (b)**
```
  For  a sin^2 x + b cos^2 x :
      MAX = the LARGER of a and b
      MIN = the SMALLER of a and b

  So max = 4 , min = 3.
```

---

# PATTERN 6 — PERIODICITY

### Q29
The period of  sin 4x + cos 4x  is

(a) pi/4 &nbsp;&nbsp; (b) pi/2 &nbsp;&nbsp; (c) pi &nbsp;&nbsp; (d) 2 pi

**ANSWER: (b)**
```
  sin4x + cos4x = sqrt2 sin(4x + pi/4)

  Period = 2 pi / 4 = pi/2
```

---

### Q30
The period of  |sin x| + |cos x|  is

(a) pi/4 &nbsp;&nbsp; (b) pi/2 &nbsp;&nbsp; (c) pi &nbsp;&nbsp; (d) 2 pi

**ANSWER: (b)**
```
  Replace x by x + pi/2 :
     |sin(x + pi/2)| + |cos(x + pi/2)| = |cos x| + |sin x|   -- unchanged.

  So pi/2 works, and nothing smaller does.
```

> **SHORTCUT:** the modulus signs HALVE the period of sin and cos.
> `|sin x|` has period pi ; `|sin x| + |cos x|` collapses further to pi/2.

---

### Q31
The period of  tan(x/2)  is

(a) pi/2 &nbsp;&nbsp; (b) pi &nbsp;&nbsp; (c) 2 pi &nbsp;&nbsp; (d) 4 pi

**ANSWER: (c)** — `period of tan(ax) = pi/|a| = pi/(1/2) = 2 pi`

---

# PATTERN 7 — TRIANGLE / CONDITIONAL IDENTITIES

### Q32
In a triangle ABC,  tan A + tan B + tan C  equals

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) tan A tan B tan C &nbsp;&nbsp; (d) cot A cot B cot C

**ANSWER: (c)**
```
  A + B = 180 - C   ->   tan(A + B) = -tan C

    (tanA + tanB)/(1 - tanA tanB) = -tanC

    tanA + tanB + tanC = tanA tanB tanC
```

---

### Q33
In a triangle ABC,  sin 2A + sin 2B + sin 2C  equals

(a) 4 sinA sinB sinC &nbsp;&nbsp; (b) 4 cosA cosB cosC &nbsp;&nbsp;
(c) -1 - 4 cosA cosB cosC &nbsp;&nbsp; (d) 1 + 4 sinA sinB sinC

**ANSWER: (a)**

> **SHORTCUT for the whole family:**
> - `sin 2A` family -> answer has **sin A sin B sin C**
> - `cos 2A` family -> answer has **-1 - 4 cos A cos B cos C**
> - `sin A` family -> answer has **cos(A/2) cos(B/2) cos(C/2)**
> - `cos A` family -> answer has **1 + 4 sin(A/2) sin(B/2) sin(C/2)**
>
> **The rule: full angles give full angles; half angles come with a leading 1.**

---

### Q34
In a triangle ABC, the maximum value of  cos A + cos B + cos C  is

(a) 1 &nbsp;&nbsp; (b) 3/2 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 3

**ANSWER: (b)**
```
  cosA + cosB + cosC = 1 + 4 sin(A/2) sin(B/2) sin(C/2)

  which is largest when the triangle is EQUILATERAL (A = B = C = 60):

     1 + 4 (1/2)^3 = 1 + 1/2 = 3/2
```

> **SHORTCUT:** in every "maximum in a triangle" MCQ, test the EQUILATERAL
> triangle first. It is the answer more than 90% of the time.

---

# PATTERN 8 — THE 18 / 36 / 54 / 72 VALUES

### Q35
sin 18 degrees =

(a) (sqrt5 + 1)/4 &nbsp;&nbsp; (b) (sqrt5 - 1)/4 &nbsp;&nbsp;
(c) (sqrt5 - 1)/2 &nbsp;&nbsp; (d) (1 - sqrt5)/4

**ANSWER: (b)** — `(2.236 - 1)/4 = 0.309 = sin 18 deg`

> **SHORTCUT to never mix (a) and (b):** sin 18 is SMALL (about 0.31), so the
> numerator must be the SMALL one, `sqrt5 - 1`. cos 36 is LARGE (about 0.81),
> so it takes `sqrt5 + 1`.

---

### Q36
cos 36 - cos 72  =

(a) 1/4 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) sqrt5/2 &nbsp;&nbsp; (d) 1

**ANSWER: (b)**
```
  (sqrt5 + 1)/4  -  (sqrt5 - 1)/4  =  2/4  =  1/2
```

---

### Q37
4 sin 18 . cos 36  =

(a) 1/4 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) 1 &nbsp;&nbsp; (d) 2

**ANSWER: (c)**
```
  sin18 cos36 = [(sqrt5-1)/4][(sqrt5+1)/4] = 4/16 = 1/4

  4 x 1/4 = 1
```

---

# PATTERN 9 — GIVEN ONE RELATION, FIND ANOTHER

### Q38
If  tan theta + sec theta = 3, then cos theta =

(a) 3/5 &nbsp;&nbsp; (b) 4/5 &nbsp;&nbsp; (c) 5/3 &nbsp;&nbsp; (d) 1/3

**ANSWER: (a)**
```
  sec^2 - tan^2 = 1   ->   (sec + tan)(sec - tan) = 1
                    ->   sec theta - tan theta = 1/3

  Add:   2 sec theta = 3 + 1/3 = 10/3   ->   sec theta = 5/3

  cos theta = 3/5
```

---

### Q39
If  sin theta + cos theta = 1/2, then  sin theta . cos theta =

(a) 3/8 &nbsp;&nbsp; (b) -3/8 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) -1/4

**ANSWER: (b)**
```
  Square both sides:  1 + 2 sin th cos th = 1/4

  2 sin th cos th = -3/4    ->    sin th cos th = -3/8
```

Follow-up that often comes with it:

```
  sin^3 th + cos^3 th = (sin + cos)(1 - sin cos)
                      = (1/2)(1 + 3/8)
                      = (1/2)(11/8)  =  11/16
```

---

### Q40
If  x = a sec theta  and  y = b tan theta, then

(a) x^2/a^2 + y^2/b^2 = 1 &nbsp;&nbsp; (b) x^2/a^2 - y^2/b^2 = 1 &nbsp;&nbsp;
(c) x^2 + y^2 = a^2 + b^2 &nbsp;&nbsp; (d) xy = ab

**ANSWER: (b)** — `sec^2 - tan^2 = 1`

---

### Q41
tan 9 - tan 27 - tan 63 + tan 81  (degrees)  =

(a) 0 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 4 &nbsp;&nbsp; (d) 1

**ANSWER: (c)**
```
  tan81 = cot9  and  tan63 = cot27 , so group as

    (tan9 + cot9) - (tan27 + cot27)

  and  tanX + cotX = 1/(sinX cosX) = 2/sin2X :

    = 2/sin18  -  2/sin54
    = 8/(sqrt5 - 1)  -  8/(sqrt5 + 1)
    = 8 [ (sqrt5+1) - (sqrt5-1) ] / (5 - 1)
    = 8 (2/4)
    = 4
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...                  |  DO THIS IMMEDIATELY               |
  +---------------------------------------+------------------------------------+
  |  An angle bigger than 360             |  Subtract multiples of 360 first.  |
  +---------------------------------------+------------------------------------+
  |  A negative angle                     |  ADD multiples of 360 until it is  |
  |                                       |  between 0 and 360.                |
  +---------------------------------------+------------------------------------+
  |  90 or 270 inside the bracket         |  CHANGE the ratio (sin<->cos).     |
  |                                       |  Sign from the quadrant.           |
  +---------------------------------------+------------------------------------+
  |  180 or 360 inside the bracket        |  KEEP the ratio. Sign from ASTC.   |
  +---------------------------------------+------------------------------------+
  |  (sum of sines)/(sum of cosines)      |  Answer = tan(half-sum of the      |
  |                                       |  two angles). Write it instantly.  |
  +---------------------------------------+------------------------------------+
  |  Angles that DOUBLE: A, 2A, 4A, 8A    |  sin(2^n A) / (2^n sin A)          |
  +---------------------------------------+------------------------------------+
  |  Angles of the shape A, 60-A, 60+A    |  (1/4) sin3A , (1/4) cos3A ,       |
  |                                       |  or tan3A for tangents.            |
  +---------------------------------------+------------------------------------+
  |  Two angles that ADD TO 90            |  sin of one = cos of the other;    |
  |                                       |  their tangents multiply to 1.     |
  +---------------------------------------+------------------------------------+
  |  Two angles that ADD TO 45            |  tanA + tanB + tanA tanB = 1       |
  +---------------------------------------+------------------------------------+
  |  a sin x + b cos x anywhere           |  Range is +- sqrt(a^2 + b^2).      |
  +---------------------------------------+------------------------------------+
  |  Two cosines with different phases    |  Expand both, collect into         |
  |                                       |  a cos x + b sin x + c, then       |
  |                                       |  c +- sqrt(a^2 + b^2).             |
  +---------------------------------------+------------------------------------+
  |  Only tan is given                    |  Use the tan-forms:                |
  |                                       |  sin2x = 2t/(1+t^2),               |
  |                                       |  cos2x = (1-t^2)/(1+t^2)           |
  +---------------------------------------+------------------------------------+
  |  "sinA + sinB = a and cosA + cosB = b"|  SQUARE AND ADD.                   |
  +---------------------------------------+------------------------------------+
  |  "a sinA + b cosA = c, find           |  Square and add the two            |
  |   b sinA - a cosA"                    |  expressions; they total a^2+b^2.  |
  +---------------------------------------+------------------------------------+
  |  A modulus or a square on sin / cos   |  The period HALVES: pi, not 2pi.   |
  +---------------------------------------+------------------------------------+
  |  "Maximum in a triangle ABC"          |  Test the EQUILATERAL triangle.    |
  +---------------------------------------+------------------------------------+
  |  Options contain sqrt5                |  It is an 18/36/54/72 question.    |
  |                                       |  Small value -> sqrt5 - 1;         |
  |                                       |  large value -> sqrt5 + 1.         |
  +---------------------------------------+------------------------------------+
  |  You are completely stuck (EAPCET)    |  Substitute a convenient angle     |
  |                                       |  (x = 0, 30, 45, 60) into the      |
  |                                       |  expression AND into every option. |
  |                                       |  Keep the one that matches.        |
  +---------------------------------------+------------------------------------+
  |  You are completely stuck (JEE)       |  Same substitution trick. If it    |
  |                                       |  still fails, SKIP - there is -1.  |
  +---------------------------------------+------------------------------------+
```

```
  +----------------------------------------------------------------+
  |  THE 30-SECOND RULE                                            |
  |                                                                |
  |  No trigonometry MCQ in EAPCET should take you over 45         |
  |  seconds. If it does, you have missed a shortcut. Mark it,     |
  |  move on, and come back. There are 80 questions and 180        |
  |  minutes - that is 2 minutes each, and you need the spare      |
  |  time for coordinate geometry and calculus.                    |
  +----------------------------------------------------------------+
```
