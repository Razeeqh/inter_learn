# The Plane — Competitive Exam Questions (EAPCET · JEE Main)

**Chapter 7, Maths IB — but in the entrance exams this topic is BIGGER than it is in the
board paper.** In JEE Main, "Three Dimensional Geometry" is a guaranteed 1-2 question
topic, and the plane is the heart of it.

```
  +---------------+--------------------------------+---------------------------+
  |  EXAM         |  Questions from THE PLANE      |  Marking                  |
  +---------------+--------------------------------+---------------------------+
  |  AP EAPCET    |  1 - 2 (of 80 maths questions) |  +1 , NO negative marking |
  |  TG EAPCET    |  1 - 2                         |  +1 , NO negative marking |
  |  JEE Main     |  1 - 2 (3D geometry, of 25)    |  +4 , -1                  |
  +---------------+--------------------------------+---------------------------+

  EAPCET has NO negative marking  ->  NEVER leave a blank. Guess if you must.
  JEE Main has -1                 ->  Skip what you genuinely do not know.
```

The questions below are grouped by **PATTERN**, not by year. Learn the pattern once and
every future version of it becomes a 30-second question.

---

# PATTERN 1 — READ THE NORMAL OFF THE EQUATION

> **SHORTCUT:** The three coefficients ARE the normal. No working needed at all.

### Q1
The direction ratios of the normal to the plane `3x - 4y + 5z = 7` are
(A) `(3, 4, 5)`  (B) `(3, -4, 5)`  (C) `(7, 7, 7)`  (D) `(1/3, -1/4, 1/5)`

**ANSWER: (B)** — read the coefficients directly: `(3, -4, 5)`.

---

### Q2
The direction cosines of the normal to `2x + 2y - z + 5 = 0` are
(A) `(2, 2, -1)`  (B) `(2/3, 2/3, -1/3)`  (C) `(2/9, 2/9, -1/9)`  (D) `(1/2, 1/2, -1)`

**ANSWER: (B)**
```
  Length = sqrt(4 + 4 + 1) = 3   ->   (2/3, 2/3, -1/3)
  CHECK:  (4 + 4 + 1)/9 = 1     correct
```

---

### Q3
The equation of the plane through `(1, 2, 3)` and perpendicular to the z-axis is
(A) `x = 1`  (B) `y = 2`  (C) `z = 3`  (D) `x + y + z = 6`

**ANSWER: (C)** — perpendicular to the z-axis means the normal is along `(0,0,1)`, so the
plane is `z = k`, and it passes through a point with `z = 3`.

---

### Q4
The foot of the perpendicular from the origin to a plane is `(1, 2, 3)`. The plane is
(A) `x + 2y + 3z = 6`  (B) `x + 2y + 3z = 14`  (C) `x + y + z = 6`  (D) `3x + 2y + z = 10`

**ANSWER: (B)**
> **SHORTCUT:** If the foot from the origin is `(a, b, c)`, then `(a, b, c)` IS the normal,
> and the plane is `ax + by + cz = a^2 + b^2 + c^2`.
```
  Plane:  x + 2y + 3z = 1 + 4 + 9 = 14
  CHECK:  (1,2,3) gives 1 + 4 + 9 = 14        correct
```

---

# PATTERN 2 — DISTANCE FROM A POINT TO A PLANE

> **SHORTCUT:** Plug the point into the left side, take the modulus, divide by the length
> of the normal. Make sure the plane reads `= 0` first.

### Q5
The distance from `(1, 2, 3)` to the plane `2x - 3y + 6z - 5 = 0` is
(A) `9/7`  (B) `7/9`  (C) `9`  (D) `5/7`

**ANSWER: (A)**
```
  |2(1) - 3(2) + 6(3) - 5| / sqrt(4 + 9 + 36)
    = |2 - 6 + 18 - 5| / 7  =  9/7
```

---

### Q6
The distance of the plane `3x + 4y + 12z = 26` from the origin is
(A) `26`  (B) `13`  (C) `2`  (D) `1/2`

**ANSWER: (C)** — `|26| / sqrt(9 + 16 + 144) = 26/13 = 2`.

---

### Q7
The distance from `(1, -2, 3)` to the plane `x + y + z = 0` is
(A) `2/sqrt3`  (B) `sqrt3/2`  (C) `2`  (D) `0`

**ANSWER: (A)** — `|1 - 2 + 3| / sqrt3 = 2/sqrt3`.

---

### Q8
If the distance of `(1, 1, 1)` from the plane `x + y + z = k` is `sqrt3`, then `k` is
(A) `0` only  (B) `6` only  (C) `0` or `6`  (D) `3` or `-3`

**ANSWER: (C)**
```
  |1 + 1 + 1 - k| / sqrt(3) = sqrt(3)
  |3 - k| = 3
  3 - k = 3   ->  k = 0        3 - k = -3  ->  k = 6
```
> **SHORTCUT:** A modulus equation almost always gives TWO answers in these MCQs. If an
> option says "or", it is very often the right one.

---

# PATTERN 3 — DISTANCE BETWEEN PARALLEL PLANES

> **SHORTCUT:** Scale the two equations so the `x, y, z` coefficients are IDENTICAL, then
> subtract the constants and divide by the normal's length.

### Q9
The distance between `x + 2y + 2z = 5` and `x + 2y + 2z = 8` is
(A) `3`  (B) `1`  (C) `1/3`  (D) `9`

**ANSWER: (B)** — `|8 - 5| / sqrt(1 + 4 + 4) = 3/3 = 1`.

---

### Q10
The distance between `2x + 3y + 6z = 8` and `4x + 6y + 12z = -7` is
(A) `23/14`  (B) `15/7`  (C) `1/7`  (D) `23/7`

**ANSWER: (A)**
```
  Divide the second by 2 :   2x + 3y + 6z = -7/2

  Write both as "= 0":   d1 = -8 ,  d2 = 7/2
  Length of normal = sqrt(4 + 9 + 36) = 7

  D = | -8 - 7/2 | / 7 = (23/2)/7 = 23/14
```

---

### Q11
The plane `2x - y + 2z = 6` is moved parallel to itself so that its distance from the origin
becomes `4`. The new plane (on the same side) is
(A) `2x - y + 2z = 12`  (B) `2x - y + 2z = 8`  (C) `2x - y + 2z = 4`  (D) `2x - y + 2z = 16`

**ANSWER: (A)**
```
  Distance from origin = |k| / 3 = 4   ->   k = 12  (same side as the original k = 6 > 0)
  CHECK: |12|/3 = 4      correct
```

---

# PATTERN 4 — ANGLE BETWEEN TWO PLANES

> **SHORTCUT:** Dot the two normals, divide by the product of their lengths. Modulus for
> the acute angle. It is a pure Chapter 6 direction-cosine calculation.

### Q12
The angle between the planes `2x - y + z = 4` and `x + y + 2z = 3` is
(A) `30` deg  (B) `45` deg  (C) `60` deg  (D) `90` deg

**ANSWER: (C)**
```
  dot = 2 - 1 + 2 = 3 ;   lengths sqrt6 and sqrt6
  cos = 3/6 = 1/2   ->   60 degrees
```

---

### Q13
The angle between `x + y + z = 1` and `x - y + z = 2` is
(A) `cos^-1(1/3)`  (B) `cos^-1(1/sqrt3)`  (C) `60` deg  (D) `90` deg

**ANSWER: (A)** — `dot = 1 - 1 + 1 = 1`, lengths `sqrt3` and `sqrt3`, so `cos = 1/3`.

---

### Q14
If the planes `x - 2y + 4z = 1` and `3x + ky - 2z = 5` are perpendicular, then `k` is
(A) `-5/2`  (B) `5/2`  (C) `2`  (D) `-2`

**ANSWER: (A)**
```
  1(3) + (-2)(k) + 4(-2) = 0
  3 - 2k - 8 = 0
  -2k = 5     ->   k = -5/2
  CHECK: 3 - 2(-5/2) - 8 = 3 + 5 - 8 = 0     correct
```

---

### Q15
The planes `2x - 3y + kz = 5` and `4x - 6y + 10z = 7` are parallel when `k =`
(A) `2`  (B) `5`  (C) `10`  (D) `1/2`

**ANSWER: (B)** — `2/4 = -3/-6 = k/10 = 1/2`, so `k = 5`.

---

# PATTERN 5 — INTERCEPTS AND THE TETRAHEDRON

> **SHORTCUT:** Intercepts of `ax + by + cz + d = 0` are `-d/a`, `-d/b`, `-d/c`.
> Do it in your head; do not rearrange into intercept form unless asked.

### Q16
The sum of the intercepts made by `2x + 3y - 6z = 12` on the axes is
(A) `8`  (B) `12`  (C) `4`  (D) `-8`

**ANSWER: (A)**
```
  x-intercept = 12/2 = 6      y = 12/3 = 4      z = 12/(-6) = -2
  Sum = 6 + 4 - 2 = 8
  CHECK: (6,0,0) gives 12  correct ;  (0,0,-2) gives 12  correct
```

---

### Q17
The equation of the plane whose intercepts are `1, 2, 3` is
(A) `x + 2y + 3z = 6`  (B) `6x + 3y + 2z = 6`  (C) `3x + 2y + z = 6`  (D) `x + y + z = 6`

**ANSWER: (B)**
```
  x/1 + y/2 + z/3 = 1     multiply by 6      6x + 3y + 2z = 6
  CHECK:  (1,0,0): 6  correct ;  (0,2,0): 6  correct ;  (0,0,3): 6  correct
```

---

### Q18
The volume of the tetrahedron formed by the plane `6x + 4y + 3z = 12` and the coordinate
planes is
(A) `4`  (B) `8`  (C) `12`  (D) `24`

**ANSWER: (A)**
```
  Intercepts:  12/6 = 2 ,  12/4 = 3 ,  12/3 = 4
  Volume = |a b c| / 6 = (2 x 3 x 4)/6 = 4
```

---

### Q19
A plane meets the axes at A, B, C and the centroid of triangle ABC is `(1, 2, 3)`.
The plane is
(A) `x + 2y + 3z = 14`  (B) `6x + 3y + 2z = 18`  (C) `x/1 + y/2 + z/3 = 1`  (D) `x+y+z=6`

**ANSWER: (B)**
> **SHORTCUT:** With intercepts `a, b, c`, the centroid of the triangle of intercepts is
> `(a/3, b/3, c/3)`. So `a = 3, b = 6, c = 9`.
```
  x/3 + y/6 + z/9 = 1      multiply by 18      6x + 3y + 2z = 18
  CHECK:  (3,0,0): 18  correct ;  (0,6,0): 18  correct ;  (0,0,9): 18  correct
```

---

### Q20
If `p` is the distance of the plane `x/a + y/b + z/c = 1` from the origin, then
`1/a^2 + 1/b^2 + 1/c^2` equals
(A) `p^2`  (B) `1/p^2`  (C) `1/p`  (D) `p`

**ANSWER: (B)**
```
  Test it on 2x + 3y + 4z = 12 :  intercepts 6, 4, 3
     1/36 + 1/16 + 1/9 = (4 + 9 + 16)/144 = 29/144
     p = 12/sqrt(29)  ->  1/p^2 = 29/144        MATCH
```

---

# PATTERN 6 — NORMAL FORM AND p

### Q21
The perpendicular distance of `2x - 3y + 6z - 21 = 0` from the origin is
(A) `21`  (B) `7`  (C) `3`  (D) `1/3`

**ANSWER: (C)** — `21 / sqrt(4 + 9 + 36) = 21/7 = 3`.

---

### Q22
In the normal form of `2x + 3y - 6z + 14 = 0`, the value of `p` is
(A) `-2`  (B) `2`  (C) `14`  (D) `7`

**ANSWER: (B)**
> **SHORTCUT:** `p = |d| / sqrt(a^2+b^2+c^2) = 14/7 = 2`. `p` can NEVER be negative — that
> instantly kills option (A) before you calculate anything.
```
  The full normal form (divide by -7, because 2x + 3y - 6z = -14):
       (-2/7)x + (-3/7)y + (6/7)z = 2
  CHECK: (4 + 9 + 36)/49 = 1     correct
```

---

# PATTERN 7 — PLANE THROUGH THREE POINTS / COPLANARITY

> **SHORTCUT:** Do not expand a determinant under time pressure. TEST THE OPTIONS instead —
> substitute the three given points into each option and eliminate. It is far faster.

### Q23
The plane through `(1, 0, 0)`, `(0, 1, 0)` and `(0, 0, 1)` is
(A) `x + y + z = 0`  (B) `x + y + z = 1`  (C) `x + y + z = 3`  (D) `xyz = 1`

**ANSWER: (B)** — each point gives `1`, so the intercepts are all `1`.

---

### Q24
The plane through `(2, 2, 1)`, `(9, 3, 6)` and `(3, 0, 4)` is
(A) `13x - 16y - 15z + 21 = 0`
(B) `13x + 16y + 15z - 21 = 0`
(C) `x + y + z - 5 = 0`
(D) `2x - 3y + z = 0`

**ANSWER: (A)**
```
  Testing option (A) is faster than building it:
     (2,2,1):  26 - 32 - 15 + 21 = 0     correct
     (9,3,6): 117 - 48 - 90 + 21 = 0     correct
     (3,0,4):  39 -  0 - 60 + 21 = 0     correct

  (Building it: v1 = (7,1,5), v2 = (1,-2,3),
   n = v1 x v2 = (3+10, 5-21, -14-1) = (13, -16, -15). Same answer.)
```

---

### Q25
The points `(0,-1,0)`, `(2,1,-1)`, `(1,1,1)`, `(3,3,0)` are
(A) collinear  (B) coplanar  (C) vertices of a tetrahedron  (D) none of these

**ANSWER: (B)**
```
  The plane through the first three is  4x - 3y + 2z - 3 = 0.
  Fourth point (3,3,0):  12 - 9 + 0 - 3 = 0       it lies on it too  ->  COPLANAR
```

---

# PATTERN 8 — FOOT OF THE PERPENDICULAR AND IMAGE

> **SHORTCUT:** One number does both.
> `k = -(value at the point)/(a^2+b^2+c^2)`; foot uses `k`, image uses `2k`.

### Q26
The image of `(1, 2, 3)` in the plane `x + y + z = 3` is
(A) `(0, 1, 2)`  (B) `(-1, 0, 1)`  (C) `(-1, -2, -3)`  (D) `(2, 3, 4)`

**ANSWER: (B)**
```
  value = 1 + 2 + 3 - 3 = 3 ,   a^2+b^2+c^2 = 3 ,   k = -1

  Foot  = (1-1, 2-1, 3-1) = (0, 1, 2)         [that is option (A) - the DECOY]
  Image = (1-2, 2-2, 3-2) = (-1, 0, 1)

  CHECK: midpoint of (1,2,3) and (-1,0,1) is (0,1,2) = the foot     correct
```
> **TRAP:** Option (A) is the FOOT. Exam setters always put the foot among the options for
> an image question. Read the question word again before you mark.

---

### Q27
The foot of the perpendicular from `(2, 3, 4)` to the plane `x + 2y + z = 3` is
(A) `(1/2, 0, 5/2)`  (B) `(1, 1, 0)`  (C) `(-1, -3, 1)`  (D) `(2, 0, 1)`

**ANSWER: (A)**
```
  value = 2 + 6 + 4 - 3 = 9 ,  a^2+b^2+c^2 = 1 + 4 + 1 = 6 ,  k = -9/6 = -3/2

  Foot = ( 2 + 1(-3/2) , 3 + 2(-3/2) , 4 + 1(-3/2) ) = ( 1/2 , 0 , 5/2 )
  CHECK: 1/2 + 0 + 5/2 = 3        correct
```

---

### Q28
The image of the origin in the plane `2x - 3y + 4z - 29 = 0` is
(A) `(2, -3, 4)`  (B) `(4, -6, 8)`  (C) `(-4, 6, -8)`  (D) `(29, 29, 29)`

**ANSWER: (B)**
```
  value at origin = -29 ,  a^2+b^2+c^2 = 4 + 9 + 16 = 29 ,  k = 1

  Foot  = (2, -3, 4)         CHECK: 4 + 9 + 16 - 29 = 0     correct
  Image = (4, -6, 8)         (twice the foot, since we started at the origin)
```

---

# PATTERN 9 — LINE AND PLANE

> **SHORTCUT:** Plane-plane = COS (normal with normal).
> Line-plane = SIN (direction with normal). Getting this backwards is the number one
> error in 3D geometry MCQs.

### Q29
The angle between the line `x/2 = y/3 = z/6` and the plane `10x + 2y - 11z = 3` is
(A) `sin^-1(8/21)`  (B) `cos^-1(8/21)`  (C) `sin^-1(21/8)`  (D) `45` deg

**ANSWER: (A)**
```
  dot = 20 + 6 - 66 = -40 ;  |d| = 7 ,  |n| = 15
  sin(theta) = 40/105 = 8/21
```

---

### Q30
The line with direction ratios `(1, 2, 3)` is parallel to the plane `x + ky + 2z = 0` when
`k =`
(A) `-7/2`  (B) `7/2`  (C) `-2/7`  (D) `1`

**ANSWER: (A)**
```
  Parallel  =>  al + bm + cn = 0
  1(1) + k(2) + 2(3) = 0
  1 + 2k + 6 = 0    ->    k = -7/2
  CHECK: 1 + 2(-7/2) + 6 = 1 - 7 + 6 = 0      correct
```

---

### Q31
The line `(x-1)/1 = (y-2)/2 = (z-3)/3` meets the plane `x + y + z = 12` at
(A) `(2, 4, 6)`  (B) `(1, 2, 3)`  (C) `(3, 6, 9)`  (D) it does not meet the plane

**ANSWER: (A)**
```
  x = 1 + t , y = 2 + 2t , z = 3 + 3t
  (1+t) + (2+2t) + (3+3t) = 12
   6 + 6t = 12   ->   t = 1
  Point = (2, 4, 6)      CHECK: 2 + 4 + 6 = 12     correct
```

---

### Q32
The line `(x-1)/2 = (y-2)/3 = (z-3)/4` and the plane `x + 2y - 2z + 1 = 0` are related how?
(A) the line is perpendicular to the plane
(B) the line lies in the plane
(C) the line is parallel to but outside the plane
(D) the line cuts the plane at one point

**ANSWER: (B)**
```
  al + bm + cn = 2 + 6 - 8 = 0        ->  parallel to the plane
  point (1,2,3):  1 + 4 - 6 + 1 = 0   ->  and it is ON the plane
  Both  ->  the line LIES IN the plane
```
> **TRAP:** Option (C) is the decoy for anyone who checks only the dot product.

---

### Q33
The line through `(4, 1, 0)` with direction ratios `(1, 2, 2)` is at a distance from the
plane `2x + y - 2z = 5` of
(A) `0`  (B) `4/3`  (C) `9/3`  (D) `3`

**ANSWER: (B)**
```
  Dot: 2(1) + 1(2) + (-2)(2) = 0   ->  parallel, so the distance is constant.
  Use the point:  |8 + 1 - 0 - 5| / 3 = 4/3
```

---

# PATTERN 10 — FAMILY OF PLANES  P1 + k P2 = 0

> **SHORTCUT:** In an MCQ, do not compute `k` — test which option contains the line of
> intersection. An option that fails at ONE point of the line is dead. But if the options
> are close, compute `k`; it is only one linear equation.

### Q34
The plane through the intersection of `x - 2y + z = 1` and `2x + y + z = 8` and passing
through the origin is
(A) `6x - 17y + 7z = 0`  (B) `x + y + z = 0`  (C) `3x - y + 2z = 0`  (D) `6x + 17y - 7z = 0`

**ANSWER: (A)**
```
  Family:  (x - 2y + z - 1) + k(2x + y + z - 8) = 0
  Origin:  -1 - 8k = 0   ->   k = -1/8

  Multiply by 8:   8(x - 2y + z - 1) - (2x + y + z - 8) = 0
                   8x - 16y + 8z - 8 - 2x - y - z + 8 = 0
                   6x - 17y + 7z = 0

  CHECK - a point on BOTH original planes: put z = 0,
      x - 2y = 1 and 2x + y = 8  ->  x = 17/5 , y = 6/5
      Substitute:  6(17/5) - 17(6/5) + 0 = 102/5 - 102/5 = 0      correct
```

---

### Q35
The plane through the intersection of `x + 2y + 3z = 4` and `2x + y - z + 5 = 0` and
perpendicular to `5x + 3y + 6z + 8 = 0` is
(A) `51x + 15y - 50z + 173 = 0`  (B) `51x - 15y - 50z + 173 = 0`
(C) `x + y + z = 0`  (D) `33x + 45y + 50z = 41`

**ANSWER: (A)**
```
  Family coefficients:  x : 1 + 2k ,  y : 2 + k ,  z : 3 - k ,  const : -4 + 5k

  Perpendicular to (5, 3, 6):
      5(1+2k) + 3(2+k) + 6(3-k) = 0
      5 + 10k + 6 + 3k + 18 - 6k = 0
      29 + 7k = 0     ->    k = -29/7

  Multiply the family by 7:
      7(x + 2y + 3z - 4) - 29(2x + y - z + 5) = 0
      7x + 14y + 21z - 28 - 58x - 29y + 29z - 145 = 0
      -51x - 15y + 50z - 173 = 0
      51x + 15y - 50z + 173 = 0

  CHECK perpendicular: 51(5) + 15(3) + (-50)(6) = 255 + 45 - 300 = 0     correct
```

---

# PATTERN 11 — SIDES OF A PLANE AND THE RATIO IT CUTS

> **SHORTCUT:** Ratio `= -(value at A) : (value at B)`. Positive means internal.
> Signs different means the points straddle the plane.

### Q36
The plane `2x + 3y + 5z = 1` divides the segment joining `(1, 0, -3)` and `(1, -5, 7)` in
the ratio
(A) `2 : 3`  (B) `3 : 2`  (C) `1 : 4` externally  (D) `2 : 3` externally

**ANSWER: (A)**
```
  S1 = 2(1) + 0 + 5(-3) - 1 = -14
  S2 = 2(1) + 3(-5) + 5(7) - 1 = 2 - 15 + 35 - 1 = 21

  Ratio = -S1 : S2 = 14 : 21 = 2 : 3      (positive  ->  INTERNAL)

  CHECK - the 2:3 point is
     x = (2(1) + 3(1))/5 = 1
     y = (2(-5) + 3(0))/5 = -2
     z = (2(7) + 3(-3))/5 = 1
     Substitute: 2(1) + 3(-2) + 5(1) = 2 - 6 + 5 = 1      correct
```

---

### Q37
The points `(1, 2, 3)` and `(4, -1, 2)` with respect to the plane `x - y + z = 3` are
(A) on the same side  (B) on opposite sides  (C) both on the plane  (D) cannot be decided

**ANSWER: (B)** — values `-1` and `+4`, opposite signs.

---

# PATTERN 12 — DEGENERATE AND SPECIAL PLANES

### Q38
The equation `x = 5` in three-dimensional space represents
(A) a point  (B) a line parallel to the x-axis
(C) a plane parallel to the YOZ plane  (D) the x-axis

**ANSWER: (C)** — one linear equation in 3D is always a plane; its normal is `(1,0,0)`,
so it is parallel to `x = 0`, the YOZ plane.

---

### Q39
The plane through `(1, 2, 3)` and `(2, 3, 4)` and parallel to the z-axis is
(A) `x - y + 1 = 0`  (B) `x + y - 3 = 0`  (C) `z = 3`  (D) `x - y + z = 2`

**ANSWER: (A)**
```
  Parallel to the z-axis  ->  no z term:   ax + by + d = 0
     (1,2):  a + 2b + d = 0
     (2,3): 2a + 3b + d = 0
  Subtract:  a + b = 0  ->  a = -b .  Then -b + 2b + d = 0 -> d = -b.
  Take b = 1 :  -x + y - 1 = 0 ,  i.e.  x - y + 1 = 0

  CHECK: (1,2,3): 1 - 2 + 1 = 0    correct
         (2,3,4): 2 - 3 + 1 = 0    correct
```

---

# PATTERN 13 — CROSS-PRODUCT CONSTRUCTIONS

> **SHORTCUT:** "Perpendicular to two planes" or "through two points and perpendicular to
> a plane" both mean: the new normal is a CROSS PRODUCT.

### Q40
The plane through `(1, 2, 3)` perpendicular to both `x + y + z = 1` and `2x + 3y + 4z = 5`
is
(A) `x - 2y + z = 0`  (B) `x + 2y + z = 8`  (C) `2x - y + z = 3`  (D) `x - y + z = 2`

**ANSWER: (A)**
```
  n = (1,1,1) x (2,3,4) :
     i : (1)(4) - (1)(3) = 1
     j : -[ (1)(4) - (1)(2) ] = -2
     k : (1)(3) - (1)(2) = 1
     n = (1, -2, 1)

  Plane: (x - 1) - 2(y - 2) + (z - 3) = 0  ->  x - 2y + z = 0

  CHECK point:  1 - 4 + 3 = 0                              correct
  CHECK perp 1: (1)(1) + (-2)(1) + (1)(1) = 0              correct
  CHECK perp 2: (1)(2) + (-2)(3) + (1)(4) = 2 - 6 + 4 = 0  correct
```

---

# PATTERN 14 — ANGLE-BISECTOR PLANES

### Q41
The bisector of the angle containing the origin between `x + 2y + 2z - 3 = 0` and
`3x + 4y + 12z + 1 = 0` is
(A) `11x + 19y + 31z - 18 = 0`  (B) `11x - 19y + 31z + 18 = 0`
(C) `2x + 3y + 5z = 0`  (D) `x + y + z = 1`

**ANSWER: (A)**
```
  First make BOTH constants positive. Multiply the first equation by -1:
        -x - 2y - 2z + 3 = 0        and       3x + 4y + 12z + 1 = 0

  Lengths:  sqrt(1+4+4) = 3    and    sqrt(9+16+144) = 13

  Origin-containing bisector uses the "+" sign:

        -x - 2y - 2z + 3        3x + 4y + 12z + 1
       ------------------  =   -------------------
               3                        13

     13(-x - 2y - 2z + 3) = 3(3x + 4y + 12z + 1)
     -13x - 26y - 26z + 39 = 9x + 12y + 36z + 3
     0 = 22x + 38y + 62z - 36
     11x + 19y + 31z - 18 = 0

  CHECK - take the point (18/11, 0, 0) on it:
     distance to plane 1 = |18/11 - 3| / 3 = (15/11)/3 = 5/11
     distance to plane 2 = |3(18/11) + 1| / 13 = (65/11)/13 = 5/11
     EQUAL                                             correct
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------------+-----------------------------------------+
  |  IF YOU SEE THIS ...                  |  DO THIS IMMEDIATELY                    |
  +---------------------------------------+-----------------------------------------+
  |  ax + by + cz + d = 0                 |  Write (a,b,c) in the margin.           |
  |                                       |  That is the NORMAL. You will need it.  |
  +---------------------------------------+-----------------------------------------+
  |  "direction ratios of the normal"     |  Copy the coefficients. Zero working.   |
  +---------------------------------------+-----------------------------------------+
  |  "direction cosines of the normal"    |  Coefficients / sqrt(a^2+b^2+c^2).      |
  +---------------------------------------+-----------------------------------------+
  |  "distance from the origin" or        |  |d| / sqrt(a^2+b^2+c^2).                |
  |  "value of p"                         |  Never write a negative p.              |
  +---------------------------------------+-----------------------------------------+
  |  "distance from a point"              |  Plug point in, modulus,                |
  |                                       |  divide by sqrt(a^2+b^2+c^2).           |
  |                                       |  First make sure the plane reads "= 0". |
  +---------------------------------------+-----------------------------------------+
  |  TWO parallel planes                  |  Scale to identical coefficients FIRST, |
  |                                       |  then |d1 - d2| / sqrt(a^2+b^2+c^2).    |
  +---------------------------------------+-----------------------------------------+
  |  "angle between two PLANES"           |  COS of the normals.                    |
  |  "angle between a LINE and a PLANE"   |  SIN of direction with normal.          |
  +---------------------------------------+-----------------------------------------+
  |  "perpendicular planes"               |  a1a2 + b1b2 + c1c2 = 0. One line.      |
  |  "parallel planes"                    |  a1/a2 = b1/b2 = c1/c2. One line.       |
  +---------------------------------------+-----------------------------------------+
  |  "intercepts"                         |  -d/a , -d/b , -d/c. In your head.      |
  +---------------------------------------+-----------------------------------------+
  |  "volume of the tetrahedron"          |  Find intercepts, then |abc| / 6.       |
  +---------------------------------------+-----------------------------------------+
  |  "centroid of the intercept triangle" |  (a/3, b/3, c/3). Work backwards.       |
  +---------------------------------------+-----------------------------------------+
  |  "plane through 3 points"             |  TEST THE OPTIONS. Do not expand a      |
  |                                       |  determinant under time pressure.       |
  +---------------------------------------+-----------------------------------------+
  |  "image" or "reflection"              |  k = -(value)/(a^2+b^2+c^2), then 2k.   |
  |                                       |  The FOOT will be among the decoys.     |
  +---------------------------------------+-----------------------------------------+
  |  "foot of perpendicular from origin   |  That point IS the normal. Plane is     |
  |   is (a,b,c)"                         |  ax+by+cz = a^2+b^2+c^2.                |
  +---------------------------------------+-----------------------------------------+
  |  "line lies in the plane"             |  TWO checks: dot = 0 AND point on plane.|
  +---------------------------------------+-----------------------------------------+
  |  "through the intersection of two     |  P1 + k P2 = 0, then one extra          |
  |   planes"                             |  condition gives k.                     |
  +---------------------------------------+-----------------------------------------+
  |  "ratio in which the plane divides"   |  -(value at A) : (value at B).          |
  |                                       |  Positive = internal.                   |
  +---------------------------------------+-----------------------------------------+
  |  "same side / opposite sides"         |  Compare the SIGNS of the two values.   |
  +---------------------------------------+-----------------------------------------+
  |  EAPCET and you are stuck             |  GUESS. There is no negative marking.   |
  |  JEE Main and you are stuck           |  SKIP. -1 is real.                      |
  +---------------------------------------+-----------------------------------------+
```

---

## THE 60-SECOND PRE-EXAM SCAN

```
  Normal        = (a, b, c)
  p             = |d| / sqrt(a^2+b^2+c^2)
  Point dist    = |ax1+by1+cz1+d| / sqrt(a^2+b^2+c^2)
  Parallel gap  = |d1-d2| / sqrt(a^2+b^2+c^2)      (scale first)
  Intercepts    = -d/a , -d/b , -d/c
  Volume        = |abc| / 6
  Planes angle  = COS      Line-plane angle = SIN
  Perp planes   = a1a2+b1b2+c1c2 = 0
  k             = -(value)/(a^2+b^2+c^2) ;  foot = +k n ,  image = +2k n
  Family        = P1 + k P2 = 0
  Ratio         = -(value at A) : (value at B)
```

Read that box in the last minute before the paper starts. It is the whole chapter.
