# Locus — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Locus:**

```
  AP EAPCET  (Maths, 80 questions)  ->  1 , occasionally 2
  TG EAPCET  (Maths, 80 questions)  ->  1 , occasionally 2
  JEE Main   (Maths, 25 questions)  ->  0 to 1 asked as "locus" by name

  BUT: locus THINKING is hidden inside the conic-section questions.
  "Find the locus of the midpoint of a chord of the circle ..." ,
  "the locus of the point of intersection of perpendicular tangents ..."
  are standard JEE questions and they are built entirely on this chapter.
  Counting those, the real figure for JEE Main is 1 to 3.
```

This chapter is nearly all substitution and one round of algebra. In EAPCET a
locus question is usually finished in **40 to 60 seconds** if you recognise the
standard result and skip the derivation.

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Distance, section, midpoint and area (the free marks)

### Q1
The distance between the points `(a cos t, a sin t)` and `(a sin t, -a cos t)` is

(a) a &nbsp;&nbsp; (b) 2a &nbsp;&nbsp; (c) a sqrt(2) &nbsp;&nbsp; (d) 2a sqrt(2)

**ANSWER: (c)**
```
  d^2 = (a sin t - a cos t)^2 + (-a cos t - a sin t)^2
      = a^2 [ (sin t - cos t)^2 + (cos t + sin t)^2 ]
      = a^2 [ sin^2 - 2 sin cos + cos^2  +  cos^2 + 2 sin cos + sin^2 ]
      = a^2 [ 2 ]

  d = a sqrt(2)
```

> **SHORTCUT:** the cross terms `-2 sin t cos t` and `+2 sin t cos t` always
> cancel when you add a `(A - B)^2` and a `(A + B)^2`. Look for that pattern and
> jump straight to `2(A^2 + B^2)`.

---

### Q2
The point which divides the segment joining (2, -3) and (5, 6) internally in the
ratio 1 : 2 is

(a) (3, 0) &nbsp;&nbsp; (b) (4, 3) &nbsp;&nbsp; (c) (3, 3) &nbsp;&nbsp; (d) (4, 0)

**ANSWER: (a)**
```
        1(5) + 2(2)      9                1(6) + 2(-3)     0
   x = ------------ =  ----- = 3     y = ------------- = ---- = 0
          1 + 2          3                   1 + 2         3
```

---

### Q3
The area of the triangle whose vertices are (1, 1), (3, 4) and (5, -2) is

(a) 6 &nbsp;&nbsp; (b) 9 &nbsp;&nbsp; (c) 12 &nbsp;&nbsp; (d) 18

**ANSWER: (b)**
```
         1
  Area = --- abs( 1(4 - (-2)) + 3((-2) - 1) + 5(1 - 4) )
         2
         1                              1
       = --- abs( 6 - 9 - 15 )   =    --- (18)   =   9
         2                              2
```

---

### Q4
If the points (1, 2), (k, 6) and (3, 10) are collinear, then k =

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  Collinear  ->  area = 0:

  1(6 - 10) + k(10 - 2) + 3(2 - 6) = 0

  -4 + 8k - 12 = 0

  8k = 16    ->    k = 2
```

> **SHORTCUT:** here the y-values 2, 6, 10 go up in equal steps, so the x-values
> must too: 1, k, 3 gives k = 2 instantly. Spot arithmetic progressions.

---

# PATTERN 2 — Equidistant from two points (the perpendicular bisector)

### Q5
The locus of a point equidistant from (1, 2) and (3, 4) is

(a) x + y - 5 = 0 &nbsp;&nbsp; (b) x - y + 1 = 0 &nbsp;&nbsp;
(c) x + y - 1 = 0 &nbsp;&nbsp; (d) x - y - 5 = 0

**ANSWER: (a)**
```
  (x-1)^2 + (y-2)^2 = (x-3)^2 + (y-4)^2

  -2x + 1 - 4y + 4  =  -6x + 9 - 8y + 16

  4x + 4y - 20 = 0    ->    x + y - 5 = 0
```

> **SHORTCUT — 10 seconds, no algebra:** the answer must pass through the
> midpoint of the two points. Midpoint of (1,2) and (3,4) is (2, 3).
> Test the options: (a) 2 + 3 - 5 = 0. Only (a) works. Done.

---

### Q6
The locus of a point equidistant from the origin and (4, -2) is

(a) 2x - y - 5 = 0 &nbsp;&nbsp; (b) 2x + y - 5 = 0 &nbsp;&nbsp;
(c) 4x - 2y - 5 = 0 &nbsp;&nbsp; (d) x - 2y - 5 = 0

**ANSWER: (a)**
```
  x^2 + y^2  =  (x - 4)^2 + (y + 2)^2

  x^2 + y^2  =  x^2 - 8x + 16 + y^2 + 4y + 4

  0 = -8x + 4y + 20      ->      8x - 4y - 20 = 0     ->    2x - y - 5 = 0

  CHECK: midpoint (2, -1):   4 + 1 - 5 = 0.    Correct.
```

---

### Q7
The locus of a point which is equidistant from two fixed points A and B is

(a) the segment AB &nbsp;&nbsp; (b) the perpendicular bisector of AB
(c) a circle on AB as diameter &nbsp;&nbsp; (d) a parabola

**ANSWER: (b)**

---

### Q8
The locus of a point P such that PA^2 - PB^2 = constant (A, B fixed) is

(a) a circle &nbsp;&nbsp; (b) an ellipse &nbsp;&nbsp;
(c) a straight line perpendicular to AB &nbsp;&nbsp; (d) a parabola

**ANSWER: (c)**
```
  Subtracting the two squared distances cancels x^2 and y^2, leaving a
  linear equation. Its slope always works out perpendicular to AB.
```

> **SHORTCUT — memorise this pair:**
> `PA^2 + PB^2 = k`  ->  CIRCLE.
> `PA^2 - PB^2 = k`  ->  STRAIGHT LINE perpendicular to AB.

---

# PATTERN 3 — Fixed distance from a fixed point (a circle)

### Q9
The locus of a point whose distance from (-1, 2) is 3 is

(a) x^2 + y^2 + 2x - 4y - 4 = 0 &nbsp;&nbsp; (b) x^2 + y^2 - 2x + 4y - 4 = 0
(c) x^2 + y^2 + 2x - 4y + 4 = 0 &nbsp;&nbsp; (d) x^2 + y^2 + 2x + 4y - 4 = 0

**ANSWER: (a)**
```
  (x + 1)^2 + (y - 2)^2 = 9

  x^2 + 2x + 1 + y^2 - 4y + 4 = 9

  x^2 + y^2 + 2x - 4y - 4 = 0

  CHECK P(2, 2):  4 + 4 + 4 - 8 - 4 = 0.  And its distance from (-1,2) is 3.
```

> **SHORTCUT:** read the centre straight off each option using
> `centre = (-g, -f)`. Only (a) gives centre (-1, 2). Pick it without expanding.

---

### Q10
The centre and radius of `x^2 + y^2 - 4x + 6y - 3 = 0` are

(a) (2, -3), 4 &nbsp;&nbsp; (b) (-2, 3), 4 &nbsp;&nbsp;
(c) (2, -3), 16 &nbsp;&nbsp; (d) (4, -6), 4

**ANSWER: (a)**
```
  2g = -4 -> g = -2 ;   2f = 6 -> f = 3 ;   c = -3

  centre = (-g, -f) = (2, -3)

  radius = sqrt(g^2 + f^2 - c) = sqrt(4 + 9 + 3) = sqrt(16) = 4
```

---

### Q11
The locus of a point whose distance from the origin is three times its distance
from (0, 4) is

(a) x^2 + y^2 - 9y + 18 = 0 &nbsp;&nbsp; (b) x^2 + y^2 + 9y + 18 = 0
(c) x^2 + y^2 - 9y - 18 = 0 &nbsp;&nbsp; (d) x^2 + y^2 - 8y + 18 = 0

**ANSWER: (a)**
```
  OP = 3 PA      ->      OP^2 = 9 PA^2

  x^2 + y^2 = 9 [ x^2 + (y - 4)^2 ]

  x^2 + y^2 = 9x^2 + 9y^2 - 72y + 144

  0 = 8x^2 + 8y^2 - 72y + 144

  x^2 + y^2 - 9y + 18 = 0

  CHECK P(0, 3):  9 - 27 + 18 = 0.  OP = 3 , PA = 1 , OP = 3 PA.  Correct.
```

---

# PATTERN 4 — Distances in a given ratio (the Apollonius circle)

### Q12
If A and B are fixed and `PA : PB = k : 1` with k not equal to 1, then the locus
of P is

(a) a straight line &nbsp;&nbsp; (b) a circle &nbsp;&nbsp;
(c) an ellipse &nbsp;&nbsp; (d) a parabola

**ANSWER: (b)** — the Apollonius circle. (Only when k = 1 does it collapse into
the perpendicular bisector, a straight line.)

---

### Q13
The locus of P such that PO = 2 PA, where O is the origin and A is (3, 0), is

(a) x^2 + y^2 - 8x + 12 = 0 &nbsp;&nbsp; (b) x^2 + y^2 + 8x + 12 = 0
(c) x^2 + y^2 - 8x - 12 = 0 &nbsp;&nbsp; (d) 3x^2 + 3y^2 - 8x + 12 = 0

**ANSWER: (a)**
```
  x^2 + y^2 = 4 [ (x - 3)^2 + y^2 ]

  x^2 + y^2 = 4x^2 - 24x + 36 + 4y^2

  0 = 3x^2 + 3y^2 - 24x + 36

  x^2 + y^2 - 8x + 12 = 0

  CHECK P(2, 0):  4 - 16 + 12 = 0.   PO = 2 , PA = 1.        Correct.
        P(6, 0):  36 - 48 + 12 = 0.  PO = 6 , PA = 3.        Correct.
```

> **SHORTCUT:** the two points where the Apollonius circle meets the line OA are
> the **internal and external division points** of OA in the ratio k : 1.
> Here that is (2, 0) and (6, 0). Substitute one of them into the options —
> it kills three of them at once.

---

### Q14
The locus of P such that its distance from (4, 0) is twice its distance from
(1, 0) is a circle of radius

(a) 1 &nbsp;&nbsp; (b) 2 &nbsp;&nbsp; (c) 3 &nbsp;&nbsp; (d) 4

**ANSWER: (b)**
```
  (x - 4)^2 + y^2 = 4[ (x - 1)^2 + y^2 ]

  x^2 - 8x + 16 + y^2 = 4x^2 - 8x + 4 + 4y^2

  -3x^2 - 3y^2 + 12 = 0     ->     x^2 + y^2 = 4

  Radius = 2.
```

---

# PATTERN 5 — A segment subtending a right angle

### Q15
The locus of a point at which a given segment AB subtends a right angle is

(a) the perpendicular bisector of AB &nbsp;&nbsp;
(b) the circle with AB as diameter
(c) a parabola with AB as latus rectum &nbsp;&nbsp;
(d) a pair of lines through A and B

**ANSWER: (b)**

---

### Q16
The locus of P such that the segment joining A(2, 0) and B(-2, 0) subtends a
right angle at P is

(a) x^2 + y^2 = 2 &nbsp;&nbsp; (b) x^2 + y^2 = 4 &nbsp;&nbsp;
(c) x^2 + y^2 = 8 &nbsp;&nbsp; (d) x^2 + y^2 = 16

**ANSWER: (b)**
```
  (x - 2)(x + 2) + (y - 0)(y - 0) = 0

  x^2 - 4 + y^2 = 0     ->     x^2 + y^2 = 4
```

> **SHORTCUT — do this in 5 seconds:** the circle has AB as diameter, so its
> centre is the midpoint of AB and its radius is AB/2. Here midpoint = (0,0)
> and AB/2 = 2, so the answer is `x^2 + y^2 = 4`. No algebra at all.

---

### Q17
The locus of P such that the segment joining A(1, 3) and B(-2, 4) subtends a
right angle at P is

(a) x^2 + y^2 + x - 7y + 10 = 0 &nbsp;&nbsp; (b) x^2 + y^2 - x + 7y + 10 = 0
(c) x^2 + y^2 + x - 7y - 10 = 0 &nbsp;&nbsp; (d) x^2 + y^2 + x + 7y + 10 = 0

**ANSWER: (a)**
```
  (x - 1)(x + 2) + (y - 3)(y - 4) = 0

  x^2 + x - 2 + y^2 - 7y + 12 = 0

  x^2 + y^2 + x - 7y + 10 = 0

  CHECK: centre = (-1/2, 7/2) = midpoint of (1,3) and (-2,4).   Correct.
         radius^2 = 1/4 + 49/4 - 10 = 10/4 ;  AB^2/4 = (9+1)/4 = 10/4. Correct.
```

---

### Q18
A circle has (2, 3) and (-4, 5) as the ends of a diameter. Its equation is

(a) x^2 + y^2 + 2x - 8y + 7 = 0 &nbsp;&nbsp; (b) x^2 + y^2 - 2x + 8y + 7 = 0
(c) x^2 + y^2 + 2x - 8y - 7 = 0 &nbsp;&nbsp; (d) x^2 + y^2 - 2x - 8y + 7 = 0

**ANSWER: (a)**
```
  (x - 2)(x + 4) + (y - 3)(y - 5) = 0

  x^2 + 2x - 8 + y^2 - 8y + 15 = 0

  x^2 + y^2 + 2x - 8y + 7 = 0
```

> This is the SAME formula as the right-angle locus. One formula, two question
> types.

---

# PATTERN 6 — Constant area of a triangle

### Q19
The locus of P such that the area of the triangle formed by P, (0, 0) and (4, 0)
is 4 square units is

(a) y = 2 only &nbsp;&nbsp; (b) y = -2 only &nbsp;&nbsp;
(c) y = 2 and y = -2 &nbsp;&nbsp; (d) x = 2 and x = -2

**ANSWER: (c)**
```
         1
  Area = --- abs( x(0 - 0) + 0(0 - y) + 4(y - 0) )   =   2 abs(y)
         2

  2 abs(y) = 4     ->     abs(y) = 2     ->     y = 2  or  y = -2
```

> **SHORTCUT:** base = 4 along the x-axis, so `(1/2)(4)(h) = 4` gives `h = 2`.
> A height of 2 can be above OR below. Two lines. Options that give only one
> line are traps.

---

### Q20
The locus of a point P such that the area of the triangle PAB is constant
(A and B fixed) is

(a) a circle &nbsp;&nbsp; (b) a single straight line
(c) a pair of parallel straight lines &nbsp;&nbsp; (d) an ellipse

**ANSWER: (c)**

---

### Q21
The locus of a point collinear with (1, 2) and (3, 6) is

(a) 2x - y = 0 &nbsp;&nbsp; (b) x - 2y = 0 &nbsp;&nbsp;
(c) 2x + y = 0 &nbsp;&nbsp; (d) x + 2y = 0

**ANSWER: (a)**
```
  Collinear -> the locus is simply the line through the two points.

  slope = (6 - 2)/(3 - 1) = 2

  y - 2 = 2(x - 1)   ->   y = 2x   ->   2x - y = 0

  CHECK: (1,2) gives 0 , (3,6) gives 0.        Correct.
```

---

# PATTERN 7 — Sum and difference of distances (conic recognition)

### Q22
The locus of a point the sum of whose distances from two fixed points is a
constant greater than the distance between them is

(a) a circle &nbsp;&nbsp; (b) an ellipse &nbsp;&nbsp;
(c) a hyperbola &nbsp;&nbsp; (d) a parabola

**ANSWER: (b)**

---

### Q23
The locus of a point the sum of whose distances from (3, 0) and (-3, 0) is 8 is

(a) 7x^2 + 16y^2 = 112 &nbsp;&nbsp; (b) 16x^2 + 7y^2 = 112 &nbsp;&nbsp;
(c) 7x^2 - 16y^2 = 112 &nbsp;&nbsp; (d) x^2 + y^2 = 16

**ANSWER: (a)**
```
  2a = 8   ->   a = 4        c = 3        b^2 = a^2 - c^2 = 16 - 9 = 7

     x^2      y^2
    -----  + -----  =  1        ->        7x^2 + 16y^2 = 112
     16        7

  CHECK P(4, 0):  distances 1 and 7 , sum 8.    7(16) = 112.   Correct.
```

> **SHORTCUT — do not derive it.** Half the given constant is `a`,
> half the distance between the points is `c`, then `b^2 = a^2 - c^2`.
> Three seconds instead of two minutes of double squaring.

---

### Q24
The locus of a point the difference of whose distances from (-5, 0) and (5, 0)
is 6 is

(a) 16x^2 - 9y^2 = 144 &nbsp;&nbsp; (b) 9x^2 - 16y^2 = 144 &nbsp;&nbsp;
(c) 16x^2 + 9y^2 = 144 &nbsp;&nbsp; (d) 9x^2 + 16y^2 = 144

**ANSWER: (a)**
```
  2a = 6  ->  a = 3        c = 5        b^2 = c^2 - a^2 = 25 - 9 = 16

     x^2      y^2
    -----  - -----  =  1        ->        16x^2 - 9y^2 = 144
      9       16

  CHECK P(3, 0):  distances 8 and 2 , difference 6.  16(9) = 144.  Correct.
```

> **SHORTCUT:** ellipse uses `b^2 = a^2 - c^2` , hyperbola uses `b^2 = c^2 - a^2`.
> Always subtract the smaller from the larger — `b^2` can never be negative.

---

### Q25
If A and B are fixed points and P moves so that PA + PB = AB, then the locus of
P is

(a) an ellipse &nbsp;&nbsp; (b) the segment AB &nbsp;&nbsp;
(c) the perpendicular bisector of AB &nbsp;&nbsp; (d) the whole line AB

**ANSWER: (b)**
```
  PA + PB is always >= AB (the triangle inequality), with equality only
  when P lies BETWEEN A and B. So the locus is the segment AB itself -
  a degenerate ellipse squashed completely flat.
```

---

# PATTERN 8 — Midpoints and dividing points

### Q26
A rod of length 8 slides with its ends on the coordinate axes. The locus of its
midpoint is

(a) x^2 + y^2 = 4 &nbsp;&nbsp; (b) x^2 + y^2 = 8 &nbsp;&nbsp;
(c) x^2 + y^2 = 16 &nbsp;&nbsp; (d) x^2 + y^2 = 64

**ANSWER: (c)**
```
  A(a,0) , B(0,b) , a^2 + b^2 = 64 ,  midpoint gives a = 2x , b = 2y

  4x^2 + 4y^2 = 64      ->     x^2 + y^2 = 16
```

> **SHORTCUT:** the midpoint of a rod of length L always traces a circle of
> radius **L / 2** about the origin. Here L = 8, radius 4, so `x^2 + y^2 = 16`.
> Zero working.

---

### Q27
A(2, 4) is fixed and Q moves on the circle `x^2 + y^2 = 4`. The locus of the
midpoint of AQ is

(a) (x - 1)^2 + (y - 2)^2 = 1 &nbsp;&nbsp; (b) (x - 1)^2 + (y - 2)^2 = 4
(c) (x - 2)^2 + (y - 4)^2 = 1 &nbsp;&nbsp; (d) x^2 + y^2 = 1

**ANSWER: (a)**
```
  Let P(x, y) be the midpoint and Q(h, k) with h^2 + k^2 = 4.

  h = 2x - 2 ,  k = 2y - 4

  (2x - 2)^2 + (2y - 4)^2 = 4

  4(x - 1)^2 + 4(y - 2)^2 = 4      ->      (x - 1)^2 + (y - 2)^2 = 1

  CHECK Q(2, 0):  midpoint of (2,4) and (2,0) is (2, 2);
                  (2-1)^2 + (2-2)^2 = 1.        Correct.
```

> **SHORTCUT:** a midpoint locus is always the original curve **halved in size**
> and centred at the midpoint of A and the original centre. Original radius 2
> becomes 1; original centre (0,0) with A(2,4) gives new centre (1,2). Done in
> five seconds.

---

### Q28
Q moves on the circle `x^2 + y^2 = 9`. The locus of the point P dividing OQ
(O = origin) internally in the ratio 1 : 2 is

(a) x^2 + y^2 = 1 &nbsp;&nbsp; (b) x^2 + y^2 = 3 &nbsp;&nbsp;
(c) x^2 + y^2 = 9 &nbsp;&nbsp; (d) x^2 + y^2 = 1/9

**ANSWER: (a)**
```
        1(h) + 2(0)      h
   x = ------------  =  ---     ->     h = 3x   ,   similarly k = 3y
          1 + 2          3

  9x^2 + 9y^2 = 9      ->      x^2 + y^2 = 1
```

> **SHORTCUT:** P is one third of the way out from the centre, so the radius
> shrinks from 3 to 1.

---

# PATTERN 9 — Focus and directrix (parabolas)

### Q29
The locus of a point equidistant from (1, 0) and the line x + 1 = 0 is

(a) y^2 = 4x &nbsp;&nbsp; (b) y^2 = -4x &nbsp;&nbsp;
(c) x^2 = 4y &nbsp;&nbsp; (d) x^2 + y^2 = 1

**ANSWER: (a)**
```
  (x - 1)^2 + y^2 = (x + 1)^2

  x^2 - 2x + 1 + y^2 = x^2 + 2x + 1

  y^2 = 4x
```

---

### Q30
The locus of a point equidistant from (0, 2) and the line y + 2 = 0 is

(a) x^2 = 8y &nbsp;&nbsp; (b) y^2 = 8x &nbsp;&nbsp;
(c) x^2 = 4y &nbsp;&nbsp; (d) x^2 = -8y

**ANSWER: (a)**
```
  x^2 + (y - 2)^2 = (y + 2)^2

  x^2 + y^2 - 4y + 4 = y^2 + 4y + 4

  x^2 = 8y

  CHECK P(4, 2):  x^2 = 16 , 8y = 16.  On the curve.
     Distance to (0,2) = 4 ; distance to y = -2 is 4.        Correct.
```

> **SHORTCUT:** focus `(0, a)` with directrix `y = -a` always gives `x^2 = 4ay`.
> Here a = 2, so `x^2 = 8y`. Similarly focus `(a, 0)` with directrix `x = -a`
> gives `y^2 = 4ax`.

---

### Q31
The locus of a point whose distance from (2, 3) equals its distance from the
x-axis is

(a) x^2 - 4x - 6y + 13 = 0 &nbsp;&nbsp; (b) x^2 - 4x + 6y + 13 = 0
(c) y^2 - 4x - 6y + 13 = 0 &nbsp;&nbsp; (d) x^2 + 4x - 6y + 13 = 0

**ANSWER: (a)**
```
  (x - 2)^2 + (y - 3)^2 = y^2

  x^2 - 4x + 4 + y^2 - 6y + 9 = y^2

  x^2 - 4x - 6y + 13 = 0

  CHECK: the vertex is halfway between (2,3) and the x-axis, at (2, 3/2).
         4 - 8 - 9 + 13 = 0.        Correct.
```

---

# PATTERN 10 — Eliminating a parameter

### Q32
The locus of the point `(3 + 2 cos t, 1 + 2 sin t)` is

(a) (x-3)^2 + (y-1)^2 = 4 &nbsp;&nbsp; (b) (x+3)^2 + (y+1)^2 = 4
(c) (x-3)^2 + (y-1)^2 = 2 &nbsp;&nbsp; (d) (x-2)^2 + (y-2)^2 = 4

**ANSWER: (a)**
```
  cos t = (x - 3)/2 ,   sin t = (y - 1)/2

  Square and add:    (x-3)^2/4 + (y-1)^2/4 = 1

                     (x - 3)^2 + (y - 1)^2 = 4
```

> **SHORTCUT:** `(h + r cos t, k + r sin t)` is ALWAYS the circle of centre
> (h, k) and radius r. Read the answer straight off — no working.

---

### Q33
The locus of the point `(t^2, 2t)` is

(a) y^2 = 4x &nbsp;&nbsp; (b) x^2 = 4y &nbsp;&nbsp;
(c) y = 2x &nbsp;&nbsp; (d) xy = 4

**ANSWER: (a)**
```
  y = 2t     ->     t = y/2

  x = t^2 = y^2/4     ->     y^2 = 4x
```

---

### Q34
The locus of the point `( t + 1/t , t - 1/t )` is

(a) x^2 + y^2 = 4 &nbsp;&nbsp; (b) x^2 - y^2 = 4 &nbsp;&nbsp;
(c) x^2 - y^2 = 2 &nbsp;&nbsp; (d) xy = 4

**ANSWER: (b)**
```
  x^2 = t^2 + 2 + 1/t^2
  y^2 = t^2 - 2 + 1/t^2

  Subtract:    x^2 - y^2 = 4

  CHECK t = 1:  P(2, 0):   4 - 0 = 4.       Correct.
```

> **SHORTCUT:** whenever you see `t + 1/t` and `t - 1/t` together, **subtract the
> squares**. The answer is always `x^2 - y^2 = 4`.

---

### Q35
The locus of the point of intersection of `x cos t + y sin t = a` and
`x sin t - y cos t = b` is

(a) x^2 + y^2 = a^2 - b^2 &nbsp;&nbsp; (b) x^2 + y^2 = a^2 + b^2
(c) x^2 - y^2 = a^2 + b^2 &nbsp;&nbsp; (d) x^2 + y^2 = ab

**ANSWER: (b)**
```
  Square both and add. The 2xy sin t cos t terms cancel:

  x^2(cos^2 t + sin^2 t) + y^2(sin^2 t + cos^2 t) = a^2 + b^2

  x^2 + y^2 = a^2 + b^2
```

> **SHORTCUT:** two equations, both linear in x and y, with `cos t` and `sin t`
> swapped and one sign changed — the answer is always
> `x^2 + y^2 = (RHS1)^2 + (RHS2)^2`.

---

### Q36
The locus of the point `( 2t/(1 + t^2) , (1 - t^2)/(1 + t^2) )` is

(a) x^2 + y^2 = 1 &nbsp;&nbsp; (b) x^2 + y^2 = 4 &nbsp;&nbsp;
(c) x^2 - y^2 = 1 &nbsp;&nbsp; (d) xy = 1

**ANSWER: (a)**
```
                     4t^2 + (1 - t^2)^2         4t^2 + 1 - 2t^2 + t^4
  x^2 + y^2  =     ---------------------   =   -----------------------
                       (1 + t^2)^2                   (1 + t^2)^2

                     t^4 + 2t^2 + 1        (1 + t^2)^2
             =     -----------------   =  --------------   =   1
                      (1 + t^2)^2           (1 + t^2)^2
```

> **SHORTCUT:** these are the "half-angle" substitutions
> `sin A = 2t/(1+t^2)` and `cos A = (1-t^2)/(1+t^2)`. Recognise them and the
> answer `x^2 + y^2 = 1` is instant.

---

### Q37
The locus of the point `(a sec t, b tan t)` is

(a) x^2/a^2 + y^2/b^2 = 1 &nbsp;&nbsp; (b) x^2/a^2 - y^2/b^2 = 1
(c) x^2/b^2 - y^2/a^2 = 1 &nbsp;&nbsp; (d) x^2 + y^2 = a^2 + b^2

**ANSWER: (b)**
```
  sec t = x/a ,  tan t = y/b

  sec^2 t - tan^2 t = 1     ->     x^2/a^2 - y^2/b^2 = 1
```

---

# PATTERN 11 — Naming the curve from its equation

### Q38
The equation `2x^2 + 2y^2 - 4x + 8y - 1 = 0` represents

(a) a circle &nbsp;&nbsp; (b) an ellipse &nbsp;&nbsp;
(c) a parabola &nbsp;&nbsp; (d) a hyperbola

**ANSWER: (a)**
```
  Coefficients of x^2 and y^2 are EQUAL (both 2) and there is no xy term.
  Divide by 2 to get the standard circle form.
```

---

### Q39
The equation `3x^2 - 5y^2 + 2x = 0` represents

(a) a circle &nbsp;&nbsp; (b) an ellipse &nbsp;&nbsp;
(c) a parabola &nbsp;&nbsp; (d) a hyperbola

**ANSWER: (d)** — the coefficients of `x^2` and `y^2` have **opposite** signs.

---

### Q40
The equation `x^2 + y^2 - 2xy + 4x = 0` represents

(a) a circle &nbsp;&nbsp; (b) a parabola &nbsp;&nbsp;
(c) an ellipse &nbsp;&nbsp; (d) a pair of straight lines

**ANSWER: (b)**
```
  a = 1 , b = 1 , 2h = -2 so h = -1

  h^2 - ab = 1 - 1 = 0     ->     PARABOLA

  (It is  (x - y)^2 = -4x , a parabola tilted at 45 degrees.)
```

> **SHORTCUT:** an `xy` term rules out a circle immediately. Then use
> `h^2 - ab`: negative = ellipse, zero = parabola, positive = hyperbola.

---

### Q41
The locus of a point equidistant from the three vertices of a triangle is

(a) the centroid &nbsp;&nbsp; (b) the circumcentre &nbsp;&nbsp;
(c) the incentre &nbsp;&nbsp; (d) the orthocentre

**ANSWER: (b)**
```
  Equidistant from A and B  ->  the perpendicular bisector of AB
  Equidistant from B and C  ->  the perpendicular bisector of BC

  The locus is where the two lines meet - a single point, the CIRCUMCENTRE.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +=======================================+==================================+
  |  IF YOU SEE THIS ...                  |  DO THIS IMMEDIATELY             |
  +=======================================+==================================+
  |  "equidistant from A and B"           |  Answer is a LINE. Test which    |
  |                                       |  option the MIDPOINT of AB       |
  |                                       |  satisfies. Usually one option.  |
  +---------------------------------------+----------------------------------+
  |  "distance from C is r"               |  Circle, centre C, radius r.     |
  |                                       |  Match centre = (-g, -f).        |
  +---------------------------------------+----------------------------------+
  |  "PA = k PB"  (k not 1)               |  Circle. Square the k too.       |
  |                                       |  Test the internal division      |
  |                                       |  point of AB in k : 1.           |
  +---------------------------------------+----------------------------------+
  |  "subtends a right angle at P"        |  Circle on AB as DIAMETER.       |
  |                                       |  Centre = midpoint of AB,        |
  |                                       |  radius = AB/2. No algebra.      |
  +---------------------------------------+----------------------------------+
  |  "area of triangle PAB = k"           |  A PAIR of parallel lines.       |
  |                                       |  Reject any single-line option.  |
  +---------------------------------------+----------------------------------+
  |  "sum of distances = 2a"              |  ELLIPSE. a = half the constant, |
  |                                       |  c = half the gap,               |
  |                                       |  b^2 = a^2 - c^2.                |
  +---------------------------------------+----------------------------------+
  |  "difference of distances = 2a"       |  HYPERBOLA. a = half constant,   |
  |                                       |  c = half the gap,               |
  |                                       |  b^2 = c^2 - a^2.                |
  +---------------------------------------+----------------------------------+
  |  "PA + PB = AB"                       |  Just the SEGMENT AB.            |
  +---------------------------------------+----------------------------------+
  |  "PA^2 + PB^2 = k"                    |  CIRCLE.                         |
  +---------------------------------------+----------------------------------+
  |  "PA^2 - PB^2 = k"                    |  STRAIGHT LINE, perpendicular    |
  |                                       |  to AB.                          |
  +---------------------------------------+----------------------------------+
  |  "midpoint of a rod of length L       |  Circle, radius L/2, centre O.   |
  |   sliding on the axes"                |  Any OTHER dividing point gives  |
  |                                       |  an ELLIPSE, not a circle.       |
  +---------------------------------------+----------------------------------+
  |  "midpoint of A and a moving point    |  Same curve, HALF size, centred  |
  |   on a curve"                         |  at the midpoint of A and the    |
  |                                       |  original centre.                |
  +---------------------------------------+----------------------------------+
  |  "distance from a point = distance    |  PARABOLA. Focus (a,0),          |
  |   from a line"                        |  directrix x = -a gives y^2=4ax. |
  +---------------------------------------+----------------------------------+
  |  ( h + r cos t , k + r sin t )        |  Circle: centre (h,k), radius r. |
  +---------------------------------------+----------------------------------+
  |  ( a cos t , b sin t )                |  Ellipse x^2/a^2 + y^2/b^2 = 1.  |
  +---------------------------------------+----------------------------------+
  |  ( a sec t , b tan t )                |  Hyperbola x^2/a^2 - y^2/b^2 = 1.|
  +---------------------------------------+----------------------------------+
  |  ( at^2 , 2at )                       |  Parabola y^2 = 4ax.             |
  +---------------------------------------+----------------------------------+
  |  ( ct , c/t )                         |  xy = c^2.                       |
  +---------------------------------------+----------------------------------+
  |  ( t + 1/t , t - 1/t )                |  x^2 - y^2 = 4.                  |
  +---------------------------------------+----------------------------------+
  |  x cos t + y sin t = a  AND           |  x^2 + y^2 = a^2 + b^2.          |
  |  x sin t - y cos t = b                |  (square and add)                |
  +---------------------------------------+----------------------------------+
  |  An xy term in an option              |  It is NOT a circle. Ever.       |
  +---------------------------------------+----------------------------------+
  |  Coefficients of x^2 and y^2:         |  equal, same sign -> circle      |
  |                                       |  unequal, same sign -> ellipse   |
  |                                       |  opposite signs -> hyperbola     |
  |                                       |  only one present -> parabola    |
  +---------------------------------------+----------------------------------+
  |  You are stuck and the clock is       |  Take ONE easy point that        |
  |  running                              |  clearly obeys the condition and |
  |                                       |  substitute it into all four     |
  |                                       |  options. Usually three die.     |
  +=======================================+==================================+
```

## The single most useful trick in this chapter

```
  +======================================================================+
  |                                                                      |
  |   DO NOT DERIVE. TEST A POINT.                                       |
  |                                                                      |
  |   Nearly every locus MCQ can be killed by finding one obvious point  |
  |   that satisfies the stated condition and substituting it into the   |
  |   four options.                                                      |
  |                                                                      |
  |   Where to find that obvious point:                                  |
  |                                                                      |
  |     "equidistant"        ->  the MIDPOINT of AB                      |
  |     "PA = k PB"          ->  the point dividing AB in k : 1          |
  |     "right angle"        ->  the midpoint is the CENTRE; test        |
  |                              a point r away from it                  |
  |     "sum of distances"   ->  a point on the line AB, outside         |
  |     "area = k"           ->  drop a perpendicular of height          |
  |                              2k / AB from the midpoint               |
  |     parameter questions  ->  put t = 0 or t = 1                      |
  |                                                                      |
  |   In EAPCET there is no negative marking, so even a half-eliminated  |
  |   guess is worth making. NEVER leave a locus question blank.         |
  |                                                                      |
  +======================================================================+
```
