# System of Circles — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from System of Circles:**

```
  AP EAPCET  (Maths, 80 questions)  ->  2 to 3
  TG EAPCET  (Maths, 80 questions)  ->  2 to 3
  JEE Main   (Maths, 25 questions)  ->  0 to 1 (usually mixed into a
                                        Circle question)

  Combined with Chapter 1 (Circle) this pair gives you 4 to 6 EAPCET
  questions - roughly 5 percent of the whole Maths paper.
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. No exam year has been invented here. Verify with official papers
> before your exam.

**THE THREE LINES THAT ANSWER MOST OF THESE IN UNDER 30 SECONDS**

```
   ORTHOGONAL     2 g1 g2 + 2 f1 f2 = c1 + c2       (or d^2 = r1^2 + r2^2)
   RADICAL AXIS   S1 - S2 = 0
   POSITION       compare d with r1 + r2 and |r1 - r2| ; count 4,3,2,1,0
```

---

# PATTERN 1 — Orthogonality: test it or find k

### Q1
The circles `x^2 + y^2 + 4x + 2y + 1 = 0` and `x^2 + y^2 - 2x - 5 = 0` intersect at
an angle of

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (d)**
```
  g1 = 2 , f1 = 1 , c1 = 1        g2 = -1 , f2 = 0 , c2 = -5

  2 g1 g2 + 2 f1 f2 = 2(2)(-1) + 0 = -4
  c1 + c2           = 1 - 5        = -4      EQUAL  ->  orthogonal
```

> **SHORTCUT:** Before doing any cosine work, test `2g1g2 + 2f1f2 = c1 + c2`.
> If it holds, the answer is 90 degrees and you are done in 10 seconds.

---

### Q2
If `x^2 + y^2 - 6x - 8y + 12 = 0` and `x^2 + y^2 - 4x + 6y + k = 0` cut
orthogonally, then k =

(a) 24 &nbsp;&nbsp; (b) -24 &nbsp;&nbsp; (c) 12 &nbsp;&nbsp; (d) -12

**ANSWER: (b)**
```
  2(-3)(-2) + 2(-4)(3) = 12 + k

           12 - 24 = 12 + k     ->     k = -24
```

---

### Q3
If `x^2 + y^2 - 5x - 14y - 34 = 0` and `x^2 + y^2 + 2x + 4y + k = 0` are
orthogonal, then k =

(a) 1 &nbsp;&nbsp; (b) -1 &nbsp;&nbsp; (c) 34 &nbsp;&nbsp; (d) -34

**ANSWER: (a)**
```
  2(-5/2)(1) + 2(-7)(2) = -34 + k

           -5 - 28 = -34 + k     ->     k = 1
```

---

### Q4
The circles `x^2 + y^2 + 2gx + c = 0` and `x^2 + y^2 + 2fy + c' = 0` cut
orthogonally if

(a) g + f = 0 &nbsp;&nbsp; (b) gf = c c' &nbsp;&nbsp; (c) c + c' = 0 &nbsp;&nbsp; (d) g^2 + f^2 = c + c'

**ANSWER: (c)**
```
  g1 = g , f1 = 0 , c1 = c        g2 = 0 , f2 = f , c2 = c'

  2(g)(0) + 2(0)(f) = 0 = c + c'
```

---

### Q5
The circle `x^2 + y^2 = a^2` cuts `x^2 + y^2 + 2gx + 2fy + c = 0` orthogonally if

(a) c = a^2 &nbsp;&nbsp; (b) c = -a^2 &nbsp;&nbsp; (c) g^2 + f^2 = a^2 &nbsp;&nbsp; (d) g + f = a

**ANSWER: (a)**
```
  For x^2 + y^2 = a^2 :  g1 = 0 , f1 = 0 , c1 = -a^2

  2(0)g + 2(0)f = -a^2 + c     ->     0 = c - a^2     ->     c = a^2
```

> **SHORTCUT:** Any circle centred at the origin, radius a, is orthogonal to
> `S = 0` exactly when the constant term of S equals a^2.

---

### Q6
If `x^2 + y^2 + 2x + 2ky + 6 = 0` and `x^2 + y^2 + 2ky + k = 0` intersect
orthogonally, then k =

(a) 2 or -3/2 &nbsp;&nbsp; (b) -2 or 3/2 &nbsp;&nbsp; (c) 3 or -2 &nbsp;&nbsp; (d) 1 or -6

**ANSWER: (a)**
```
  2(1)(0) + 2(k)(k) = 6 + k

        2k^2 - k - 6 = 0     ->     (2k + 3)(k - 2) = 0

        k = 2   or   k = -3/2
```

---

### Q7
Two circles of radii 3 and 4 cut each other orthogonally. The distance between
their centres is

(a) 1 &nbsp;&nbsp; (b) 5 &nbsp;&nbsp; (c) 7 &nbsp;&nbsp; (d) 25

**ANSWER: (b)**
```
  d^2 = r1^2 + r2^2 = 9 + 16 = 25   ->   d = 5
```

> **SHORTCUT:** Orthogonal = Pythagoras. Look for 3-4-5, 5-12-13, 8-15-17.

---

### Q8
The centre of the circle that cuts `x^2 + y^2 + 2x + 17y + 4 = 0`,
`x^2 + y^2 + 7x + 6y + 11 = 0` and `x^2 + y^2 - x + 22y + 3 = 0` orthogonally is

(a) (3, 2) &nbsp;&nbsp; (b) (-3, -2) &nbsp;&nbsp; (c) (2, 3) &nbsp;&nbsp; (d) (-2, -3)

**ANSWER: (a)**
```
  The centre is the RADICAL CENTRE.

  (A) - (B) :  (2x + 17y + 4) - (7x + 6y + 11) = 0  ->  -5x + 11y - 7 = 0
  (A) - (C) :  (2x + 17y + 4) - (-x + 22y + 3) = 0  ->   3x -  5y + 1 = 0

  Solve:  -5x + 11y = 7  ,  3x - 5y = -1

     x3:  -15x + 33y = 21
     x5:   15x - 25y = -5
     add:          8y = 16   ->   y = 2 ,  then  3x = -1 + 10 = 9 -> x = 3
```

> **SHORTCUT:** "Orthogonal to three circles" -> the centre is the radical
> centre. Never set up three orthogonality equations in an MCQ.

---

# PATTERN 2 — The angle between two circles

### Q9
The angle between the circles `x^2 + y^2 - 12x - 6y + 41 = 0` and
`x^2 + y^2 + 4x + 6y - 59 = 0` is

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (b)**
```
  C1 = (6, 3)  , r1 = sqrt(36 + 9 - 41) = 2
  C2 = (-2,-3) , r2 = sqrt(4 + 9 + 59)  = 6 sqrt(2)
  d^2 = 64 + 36 = 100

              100 - 4 - 72        24        1
  cos(theta) = ------------  =  --------- = ------     ->    45 deg
               2(2)(6 sqrt2)    24 sqrt2    sqrt2
```

---

### Q10
The angle between `x^2 + y^2 + 4x - 14y + 28 = 0` and `x^2 + y^2 + 4x - 5 = 0` is

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (c)**
```
  C1 = (-2, 7) , r1 = 5 ;  C2 = (-2, 0) , r2 = 3 ;  d^2 = 49

  cos(theta) = (49 - 25 - 9)/(2 x 5 x 3) = 15/30 = 1/2   ->   60 deg
```

---

### Q11
The angle between `x^2 + y^2 - 4x - 6y - 3 = 0` and `x^2 + y^2 + 8x - 4y + 11 = 0` is

(a) 45 deg &nbsp;&nbsp; (b) 60 deg &nbsp;&nbsp; (c) 90 deg &nbsp;&nbsp; (d) 120 deg

**ANSWER: (b)**
```
  C1 = (2, 3) , r1 = 4 ;  C2 = (-4, 2) , r2 = 3 ;  d^2 = 36 + 1 = 37

  cos(theta) = (37 - 16 - 9)/24 = 12/24 = 1/2   ->   60 deg
```

---

### Q12
The angle between `x^2 + y^2 = 9` and `x^2 + y^2 - 2x - 12y + 21 = 0` is

(a) 30 deg &nbsp;&nbsp; (b) 45 deg &nbsp;&nbsp; (c) 60 deg &nbsp;&nbsp; (d) 90 deg

**ANSWER: (c)**
```
  C1 = (0, 0) , r1 = 3
  C2 = (1, 6) , r2 = sqrt(1 + 36 - 21) = sqrt(16) = 4
  d^2 = 1 + 36 = 37

  cos(theta) = (37 - 9 - 16)/(2 x 3 x 4) = 12/24 = 1/2   ->   60 deg
```

> **SHORTCUT:** The answer in an MCQ is essentially always 30, 45, 60 or 90.
> Compute the numerator first — if it is 0 the answer is 90 and you can stop.

---

# PATTERN 3 — Radical axis and common chord (the easiest marks here)

### Q13
The radical axis of `x^2 + y^2 - 2x - 4y - 1 = 0` and `x^2 + y^2 - 4x - 6y + 11 = 0` is

(a) x + y - 6 = 0 &nbsp;&nbsp; (b) x - y + 6 = 0 &nbsp;&nbsp; (c) x + y + 6 = 0 &nbsp;&nbsp; (d) 2x + 2y - 3 = 0

**ANSWER: (a)**
```
  S1 - S2 :  (-2x - 4y - 1) + (4x + 6y - 11) = 2x + 2y - 12 = 0

             x + y - 6 = 0
```

---

### Q14
The equation of the common chord of `x^2 + y^2 = 25` and
`x^2 + y^2 - 8x - 6y + 5 = 0` is

(a) 4x + 3y - 15 = 0 &nbsp;&nbsp; (b) 4x + 3y + 15 = 0 &nbsp;&nbsp; (c) 3x + 4y - 15 = 0 &nbsp;&nbsp; (d) 8x + 6y - 5 = 0

**ANSWER: (a)**
```
  (x^2+y^2-25) - (x^2+y^2-8x-6y+5) = 0

           8x + 6y - 30 = 0    ->    4x + 3y - 15 = 0
```

---

### Q15
The common chord of `x^2 + y^2 - 4x - 4y = 0` and `x^2 + y^2 = 16` is

(a) x + y = 4 &nbsp;&nbsp; (b) x - y = 4 &nbsp;&nbsp; (c) x + y = 2 &nbsp;&nbsp; (d) x + y = 8

**ANSWER: (a)**
```
  S1 - S2 :  (-4x - 4y) - (-16) = -4x - 4y + 16 = 0    ->    x + y = 4
```

---

### Q16
Two **concentric** circles have

(a) one radical axis &nbsp; (b) two radical axes &nbsp; (c) no radical axis &nbsp; (d) infinitely many

**ANSWER: (c)**
```
  g1 = g2 and f1 = f2, so  S1 - S2 = c1 - c2 , a non-zero constant.
  "c1 - c2 = 0" is impossible, so no line exists.
```

---

### Q17
The radical axis of two circles is always

(a) parallel to the line of centres
(b) perpendicular to the line of centres
(c) at 45 degrees to the line of centres
(d) passing through the midpoint of the centres

**ANSWER: (b)**
```
  slope of radical axis  = -(g1-g2)/(f1-f2)
  slope of C1C2          =  (f1-f2)/(g1-g2)
  product = -1
```

---

### Q18
If the common chord of `x^2 + y^2 - 2x - 4y + 1 = 0` and `x^2 + y^2 + 2x + ky - 3 = 0`
passes through (1, 1), then k =

(a) 4 &nbsp;&nbsp; (b) -4 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) -2

**ANSWER: (b)**
```
  Common chord:  (-2x - 4y + 1) - (2x + ky - 3) = -4x - (4+k)y + 4 = 0

  At (1,1):  -4 - (4 + k) + 4 = 0   ->   4 + k = 0   ->   k = -4
```

---

# PATTERN 4 — Length of the common chord

### Q19
The length of the common chord of `x^2 + y^2 = 25` and `x^2 + y^2 - 8x - 6y + 5 = 0` is

(a) 4 &nbsp;&nbsp; (b) 6 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 10

**ANSWER: (c)**
```
  Common chord: 4x + 3y - 15 = 0 ; C1 = (0,0) , r1 = 5

  p = |0 + 0 - 15| / sqrt(16 + 9) = 15/5 = 3

  L = 2 sqrt(25 - 9) = 2(4) = 8
```

---

### Q20
The length of the common chord of `x^2 + y^2 + 2x + 3y + 1 = 0` and
`x^2 + y^2 + 4x + 3y + 2 = 0` is

(a) 1 &nbsp;&nbsp; (b) sqrt(2) &nbsp;&nbsp; (c) 2 sqrt(2) &nbsp;&nbsp; (d) 3

**ANSWER: (c)**
```
  Common chord: -2x - 1 = 0  ->  x = -1/2

  C1 = (-1, -3/2) , r1 = sqrt(1 + 9/4 - 1) = 3/2
  p  = |-1 + 1/2| = 1/2

  L = 2 sqrt(9/4 - 1/4) = 2 sqrt(2)
```

---

### Q21
The length of the common chord of `x^2 + y^2 - 4x - 4y = 0` and `x^2 + y^2 = 16` is

(a) 2 sqrt(2) &nbsp;&nbsp; (b) 4 &nbsp;&nbsp; (c) 4 sqrt(2) &nbsp;&nbsp; (d) 8

**ANSWER: (c)**
```
  Common chord: x + y - 4 = 0
  C1 = (2, 2) , r1 = sqrt(4 + 4) = 2 sqrt(2)
  p1 = |2 + 2 - 4| / sqrt(2) = 0

  p1 = 0 means the chord is a DIAMETER of the first circle,
  so L = 2 r1 = 4 sqrt(2).

  CHECK with the second circle: C2 = (0,0), r2 = 4, p2 = 4/sqrt2 = 2 sqrt2
      L = 2 sqrt(16 - 8) = 2 (2 sqrt2) = 4 sqrt(2)             SAME
```

> **SHORTCUT:** If the perpendicular distance comes out 0, stop. The chord is a
> diameter and the length is just 2r.

---

### Q22
The maximum possible length of the common chord of two circles of radii 4 and 7 is

(a) 4 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 11 &nbsp;&nbsp; (d) 14

**ANSWER: (b)**
```
  A chord can never be longer than the diameter of its own circle,
  so the limit is the diameter of the SMALLER circle = 2(4) = 8.
```

---

# PATTERN 5 — Position of two circles and the number of common tangents

### Q23
The number of common tangents to `x^2 + y^2 = 4` and `x^2 + y^2 - 6x - 8y + 16 = 0` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  C1 = (0,0) , r1 = 2 ;  C2 = (3,4) , r2 = sqrt(9 + 16 - 16) = 3
  d = 5 = r1 + r2   ->   touch externally   ->   3 common tangents
```

---

### Q24
The number of common tangents to `x^2 + y^2 = 25` and `x^2 + y^2 - 4x - 5 = 0` is

(a) 0 &nbsp;&nbsp; (b) 1 &nbsp;&nbsp; (c) 2 &nbsp;&nbsp; (d) 3

**ANSWER: (b)**
```
  C1 = (0,0) , r1 = 5 ;  C2 = (2,0) , r2 = sqrt(4 + 5) = 3
  d = 2 = |5 - 3|   ->   touch internally   ->   1 common tangent
```

---

### Q25
The number of common tangents to `x^2 + y^2 - 2x - 4y + 1 = 0` and
`x^2 + y^2 + 4x + 4y - 1 = 0` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (c)**
```
  C1 = (1, 2)  , r1 = sqrt(1 + 4 - 1) = 2
  C2 = (-2, -2), r2 = sqrt(4 + 4 + 1) = 3
  d  = sqrt(9 + 16) = 5 = r1 + r2   ->   touch externally   ->   3
```

---

### Q26
The number of common tangents to `x^2 + y^2 = 1` and `x^2 + y^2 - 10x + 21 = 0` is

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (d)**
```
  C1 = (0,0) , r1 = 1 ;  C2 = (5,0) , r2 = sqrt(25 - 21) = 2
  d = 5 > r1 + r2 = 3   ->   the circles lie apart   ->   4
```

---

### Q27
The circles `x^2 + y^2 = 25` and `x^2 + y^2 - 2x - 3 = 0`

(a) intersect at two points
(b) touch externally
(c) touch internally
(d) one lies completely inside the other

**ANSWER: (d)**
```
  C1 = (0,0) , r1 = 5 ;  C2 = (1,0) , r2 = sqrt(1 + 3) = 2
  d = 1 ,  |r1 - r2| = 3

  d = 1 < 3   ->   the second circle lies wholly inside the first.
  (0 common tangents.)
```

---

### Q28
The circles `x^2 + y^2 + 2ax + c = 0` and `x^2 + y^2 + 2by + c = 0` touch each
other if

(a) 1/a + 1/b = 1/c &nbsp;&nbsp; (b) 1/a^2 + 1/b^2 = 1/c &nbsp;&nbsp; (c) a^2 + b^2 = c &nbsp;&nbsp; (d) a + b = c

**ANSWER: (b)**
```
  C1 = (-a, 0) , r1 = sqrt(a^2 - c)
  C2 = (0, -b) , r2 = sqrt(b^2 - c)
  d^2 = a^2 + b^2

  TOUCHING (externally):   d = r1 + r2

     a^2 + b^2 = (a^2 - c) + (b^2 - c) + 2 sqrt((a^2-c)(b^2-c))

            2c = 2 sqrt((a^2-c)(b^2-c))

            c^2 = a^2 b^2 - c(a^2 + b^2) + c^2

     c(a^2 + b^2) = a^2 b^2

  Divide both sides by a^2 b^2 c :

          a^2 + b^2      1              1     1     1
          ---------  =  ---     i.e.   --- + --- = ---
           a^2 b^2       c             a^2   b^2    c
```

---

# PATTERN 6 — Lengths of the common tangents

### Q29
The length of the direct (external) common tangent to `x^2 + y^2 = 49` and
`x^2 + y^2 - 12x - 16y + 99 = 0` is

(a) 6 &nbsp;&nbsp; (b) 8 &nbsp;&nbsp; (c) 10 &nbsp;&nbsp; (d) 12

**ANSWER: (b)**
```
  C1 = (0,0) , r1 = 7 ;  C2 = (6,8) , r2 = sqrt(36 + 64 - 99) = 1 ;  d = 10

  L = sqrt(d^2 - (r1 - r2)^2) = sqrt(100 - 36) = 8
```

---

### Q30
For the same two circles, the length of the transverse (internal) common tangent is

(a) 4 &nbsp;&nbsp; (b) 6 &nbsp;&nbsp; (c) 8 &nbsp;&nbsp; (d) 9

**ANSWER: (b)**
```
  L = sqrt(d^2 - (r1 + r2)^2) = sqrt(100 - 64) = 6
```

> **SHORTCUT:** direct uses **minus** inside `(r1 - r2)`; transverse uses **plus**.
> The direct one must be the LARGER answer — use that to check instantly.

---

### Q31
The length of the transverse common tangent to `x^2 + y^2 + 22x - 4y - 100 = 0`
and `x^2 + y^2 - 22x + 4y + 100 = 0` is

(a) 10 &nbsp;&nbsp; (b) 20 &nbsp;&nbsp; (c) 5 &nbsp;&nbsp; (d) 25

**ANSWER: (a)**
```
  C1 = (-11, 2) , r1 = sqrt(121 + 4 + 100) = 15
  C2 = ( 11,-2) , r2 = sqrt(121 + 4 - 100) = 5
  d^2 = 22^2 + 4^2 = 500

  L2 = sqrt(500 - (15 + 5)^2) = sqrt(500 - 400) = sqrt(100) = 10
  (and the direct one is sqrt(500 - 100) = 20)
```

---

# PATTERN 7 — Family of circles

### Q32
In `S1 + k S2 = 0`, the value k = -1 gives

(a) circle S1 &nbsp; (b) circle S2 &nbsp; (c) the radical axis &nbsp; (d) a point circle

**ANSWER: (c)**
```
  The x^2 and y^2 coefficients become (1 + k) = 0, so no squared terms
  survive and you are left with the straight line S1 - S2 = 0.
```

---

### Q33
The circle through the points of intersection of `x^2 + y^2 - 8x - 6y + 21 = 0`
and `x^2 + y^2 - 2x - 15 = 0` and through (1, 2) is

(a) x^2 + y^2 - 6x - 4y + 9 = 0
(b) x^2 + y^2 - 6x - 4y - 9 = 0
(c) x^2 + y^2 - 4x - 6y + 9 = 0
(d) x^2 + y^2 + 6x + 4y + 9 = 0

**ANSWER: (a)**
```
  S1 at (1,2) = 1 + 4 - 8 - 12 + 21 = 6
  S2 at (1,2) = 1 + 4 - 2 - 15      = -12

  6 + k(-12) = 0   ->   k = 1/2

  2 S1 + S2 = 3x^2 + 3y^2 - 18x - 12y + 27 = 0

              ->   x^2 + y^2 - 6x - 4y + 9 = 0
```

> **SHORTCUT in an MCQ:** just substitute (1, 2) into each option and keep the
> one that gives 0 — but check it is also of the form S1 + k S2. Option (a)
> gives 1 + 4 - 6 - 8 + 9 = 0.

---

### Q34
The circle through the intersection of `x^2 + y^2 = 9` and `x + y = 3` whose
centre lies on `x + 2y = 3` is

(a) x^2 + y^2 - 2x - 2y - 3 = 0
(b) x^2 + y^2 + 2x + 2y - 3 = 0
(c) x^2 + y^2 - 2x - 2y - 9 = 0
(d) x^2 + y^2 - 3x - 3y = 0

**ANSWER: (a)**
```
  FAMILY:  x^2 + y^2 - 9 + k(x + y - 3) = 0
           centre = (-k/2, -k/2)

  On x + 2y = 3 :   -k/2 - k = 3   ->   -3k/2 = 3   ->   k = -2

           x^2 + y^2 - 2x - 2y - 9 + 6 = 0    ->    x^2+y^2-2x-2y-3 = 0
```

---

### Q35
The circle through the intersection of `x^2 + y^2 - 4x - 6y - 12 = 0` and
`x^2 + y^2 + 6x + 4y - 12 = 0` whose centre lies on the x-axis is

(a) x^2 + y^2 + 2x - 12 = 0 &nbsp;&nbsp; (b) x^2 + y^2 - 2x - 12 = 0
(c) x^2 + y^2 + 2y - 12 = 0 &nbsp;&nbsp; (d) x^2 + y^2 + 2x + 12 = 0

**ANSWER: (a)**
```
  y-coefficient of the family = (-6 + 4k)/(1 + k) = 2f

  centre on the x-axis  ->  f = 0  ->  -6 + 4k = 0  ->  k = 3/2

  2 S1 + 3 S2 = 5x^2 + 5y^2 + 10x - 60 = 0

              ->   x^2 + y^2 + 2x - 12 = 0     (centre (-1, 0))
```

---

# PATTERN 8 — Radical centre and equal tangent lengths

### Q36
The radical centre of `x^2 + y^2 + 4x - 7 = 0`, `2x^2 + 2y^2 + 3x + 5y - 9 = 0`
and `x^2 + y^2 + y = 0` is

(a) (1, 2) &nbsp;&nbsp; (b) (2, 1) &nbsp;&nbsp; (c) (-2, -1) &nbsp;&nbsp; (d) (2, -1)

**ANSWER: (b)**
```
  Divide the second by 2 first.

  S1 - S2 :  (5/2)x - (5/2)y - 5/2 = 0    ->    x - y - 1 = 0
  S1 - S3 :  4x - y - 7 = 0

  Subtracting:  3x - 6 = 0  ->  x = 2 ,  y = 1
```

> **SHORTCUT in an MCQ:** substitute each option into all three circle
> expressions. The radical centre is the one that gives the SAME value
> every time. Here (2,1) gives 6, 6, 6.

---

### Q37
The circle cutting `x^2 + y^2 + 4x - 7 = 0`, `2x^2 + 2y^2 + 3x + 5y - 9 = 0` and
`x^2 + y^2 + y = 0` orthogonally is

(a) x^2 + y^2 - 4x - 2y - 1 = 0 &nbsp;&nbsp; (b) x^2 + y^2 - 4x - 2y + 1 = 0
(c) x^2 + y^2 + 4x + 2y - 1 = 0 &nbsp;&nbsp; (d) x^2 + y^2 - 2x - 4y - 1 = 0

**ANSWER: (a)**
```
  Centre = radical centre = (2, 1)   [see Q36]
  Radius^2 = S1 at (2,1) = 4 + 1 + 8 - 7 = 6

  (x - 2)^2 + (y - 1)^2 = 6    ->    x^2 + y^2 - 4x - 2y - 1 = 0
```

---

### Q38
The point from which the lengths of the tangents to three given non-concentric
circles are equal is called the

(a) radical axis &nbsp; (b) radical centre &nbsp; (c) centre of similitude &nbsp; (d) orthocentre

**ANSWER: (b)**

---

# PATTERN 9 — Point of contact and centres of similitude

### Q39
The circles `x^2 + y^2 - 6x - 2y + 1 = 0` and `x^2 + y^2 + 2x - 8y + 13 = 0` touch
each other at

(a) (3/5, 14/5) &nbsp;&nbsp; (b) (14/5, 3/5) &nbsp;&nbsp; (c) (1, 2) &nbsp;&nbsp; (d) (-1, 4)

**ANSWER: (a)**
```
  C1 = (3,1) , r1 = 3 ;  C2 = (-1,4) , r2 = 2 ;  d = 5 = r1 + r2 (external)

  Divide C1C2 internally in 3 : 2 :

     ( (3(-1) + 2(3))/5 , (3(4) + 2(1))/5 ) = ( 3/5 , 14/5 )
```

---

### Q40
The internal centre of similitude of `x^2 + y^2 = 4` and `x^2 + y^2 - 6x - 8y + 16 = 0` is

(a) (6/5, 8/5) &nbsp;&nbsp; (b) (-6, -8) &nbsp;&nbsp; (c) (3/2, 2) &nbsp;&nbsp; (d) (6, 8)

**ANSWER: (a)**
```
  C1 = (0,0) , r1 = 2 ;  C2 = (3,4) , r2 = 3 ;  ratio 2 : 3 internally

     ( (2(3) + 3(0))/5 , (2(4) + 3(0))/5 ) = ( 6/5 , 8/5 )
```

---

### Q41
The external centre of similitude of the same two circles is

(a) (6/5, 8/5) &nbsp;&nbsp; (b) (-6, -8) &nbsp;&nbsp; (c) (6, 8) &nbsp;&nbsp; (d) (-3, -4)

**ANSWER: (b)**
```
  Divide C1C2 externally in 2 : 3 :

     ( (2(3) - 3(0))/(2 - 3) , (2(4) - 3(0))/(2 - 3) ) = ( 6/(-1) , 8/(-1) )
                                                       = ( -6 , -8 )
```

---

### Q42
The DIRECT common tangents to two circles always pass through

(a) the internal centre of similitude
(b) the external centre of similitude
(c) the radical centre
(d) the midpoint of the centres

**ANSWER: (b)**

> **SHORTCUT:** **E**xternal centre of similitude goes with the **E**xternal
> (direct) tangents; **I**nternal goes with the **I**nternal (transverse) ones.

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------+----------------------------------+
  |  IF YOU SEE THIS ...             |  DO THIS IMMEDIATELY             |
  +----------------------------------+----------------------------------+
  |  Any two-circle question         |  Write r1, r2, d in the margin   |
  |                                  |  before reading the options.     |
  +----------------------------------+----------------------------------+
  |  "orthogonally" / "at right      |  2g1g2 + 2f1f2 = c1 + c2         |
  |  angles" / "angle is 90"         |  (never use the cosine formula)  |
  +----------------------------------+----------------------------------+
  |  "angle between the circles"     |  cos = (d^2 - r1^2 - r2^2)/2r1r2 |
  |                                  |  Answer is 30/45/60/90. If the   |
  |                                  |  numerator is 0, answer 90.      |
  +----------------------------------+----------------------------------+
  |  "radical axis" or               |  SUBTRACT the two equations.     |
  |  "common chord"                  |  10 seconds, no thinking.        |
  +----------------------------------+----------------------------------+
  |  A circle starting with 2x^2 or  |  DIVIDE first. Every single time.|
  |  3x^2                            |                                  |
  +----------------------------------+----------------------------------+
  |  "length of the common chord"    |  Chord = S1 - S2 = 0, then       |
  |                                  |  L = 2 sqrt(r^2 - p^2).          |
  |                                  |  If p = 0, answer is 2r.         |
  +----------------------------------+----------------------------------+
  |  "number of common tangents"     |  Compare d with r1+r2 and        |
  |                                  |  |r1-r2|. Count 4,3,2,1,0.       |
  +----------------------------------+----------------------------------+
  |  "touch each other"              |  d = r1 + r2 (external) or       |
  |                                  |  d = |r1 - r2| (internal)        |
  +----------------------------------+----------------------------------+
  |  "point of contact"              |  Section formula on C1C2 in      |
  |                                  |  r1 : r2. Internal if they touch |
  |                                  |  externally, and vice versa.     |
  +----------------------------------+----------------------------------+
  |  "length of direct common        |  sqrt(d^2 - (r1 - r2)^2)         |
  |  tangent"                        |  MINUS inside the bracket.       |
  +----------------------------------+----------------------------------+
  |  "length of transverse common    |  sqrt(d^2 - (r1 + r2)^2)         |
  |  tangent"                        |  PLUS inside the bracket.        |
  +----------------------------------+----------------------------------+
  |  "orthogonal to THREE circles"   |  Centre = radical centre.        |
  |                                  |  Radius^2 = S1 at that point.    |
  +----------------------------------+----------------------------------+
  |  "through the intersection of"   |  S1 + k S2 = 0  (or S + k L = 0) |
  |                                  |  and use the extra condition.    |
  +----------------------------------+----------------------------------+
  |  A family question in an MCQ     |  Substitute the given point into |
  |                                  |  the OPTIONS. Far faster than    |
  |                                  |  finding k.                      |
  +----------------------------------+----------------------------------+
  |  A "radical centre" MCQ          |  Substitute each option into all |
  |                                  |  three circles. The right one    |
  |                                  |  gives the SAME number 3 times.  |
  +----------------------------------+----------------------------------+
  |  EAPCET and you are stuck        |  GUESS. There is no negative     |
  |                                  |  marking. Never leave a blank.   |
  +----------------------------------+----------------------------------+
  |  JEE Main and you are stuck      |  Leave it. -1 is expensive.      |
  +----------------------------------+----------------------------------+
```

```
  THE 60-SECOND PRE-EXAM RECAP

     r1 , r2 , d  first - always.

     2 g1 g2 + 2 f1 f2 = c1 + c2        orthogonal
     S1 - S2 = 0                        radical axis / common chord
     cos = (d^2 - r1^2 - r2^2)/(2r1r2)  angle
     L = 2 sqrt(r^2 - p^2)              common chord length
     4 , 3 , 2 , 1 , 0                  common tangents as d shrinks
     sqrt(d^2 - (r1 -+ r2)^2)           tangent lengths (direct , transverse)
     S1 + k S2 = 0                      family
     radical centre                     circle orthogonal to three
```
