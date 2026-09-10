# Three Dimensional Coordinates — Competitive Exam Questions (EAPCET · JEE Main)

**Maths IB, Chapter 5.** In the entrance exams this chapter rarely gets a question all to
itself — instead it is the **hidden first step** inside 3D-geometry questions about lines,
planes and spheres. Learning it makes those questions 30 seconds faster.

```
  +---------------+---------------------------------+---------------------------+
  |  EXAM         |  Questions from THIS chapter    |  Marking                  |
  +---------------+---------------------------------+---------------------------+
  |  AP EAPCET    |  1 (of 80 maths questions),     |  +1 , NO negative marking |
  |               |  plus it is a STEP inside       |                           |
  |               |  1-2 more                       |                           |
  |  TG EAPCET    |  1, same as above               |  +1 , NO negative marking |
  |  JEE Main     |  0-1 directly; used inside      |  +4 , -1                  |
  |               |  the 1-2 "3D Geometry" Qs       |                           |
  +---------------+---------------------------------+---------------------------+

  EAPCET has NO negative marking  ->  NEVER leave a blank. Guess if you must.
  JEE Main has -1                 ->  Skip what you genuinely do not know.
```

Every question below is grouped by **PATTERN**, not by year. Learn the pattern once and
every future version becomes a 20-second question.

---

# PATTERN 1 — PLAIN DISTANCE BETWEEN TWO POINTS

> **SHORTCUT:** Write the three differences in a vertical column, square them in your head,
> add. Do not write the formula out; you will not have time.

### Q1
The distance between `(1, 2, 3)` and `(4, 6, 15)` is
(A) `12`  (B) `13`  (C) `14`  (D) `15`

**ANSWER: (B)**
```
   differences  3, 4, 12   ->   9 + 16 + 144 = 169   ->   13
```

---

### Q2
The distance between `(-1, 3, -4)` and `(1, -3, 4)` is
(A) `2 sqrt(26)`  (B) `sqrt(26)`  (C) `104`  (D) `4 sqrt(13)`

**ANSWER: (A)**
```
   differences  2, -6, 8   ->   4 + 36 + 64 = 104
   sqrt(104) = sqrt(4 x 26) = 2 sqrt(26)
```

---

### Q3
If the distance between `(a, 0, 1)` and `(0, 1, 2)` is `sqrt(27)`, then `a` =
(A) `5`  (B) `±5`  (C) `-5`  (D) `±sqrt(5)`

**ANSWER: (B)**
```
   a^2 + 1 + 1 = 27   ->   a^2 = 25   ->   a = +5 or -5
```
> **SHORTCUT:** A squared unknown always gives **two** answers. If `±` is on the option
> list, it is almost always the answer.

---

### Q4
The perimeter of the triangle with vertices `(1,0,0)`, `(0,1,0)`, `(0,0,1)` is
(A) `3`  (B) `3 sqrt(2)`  (C) `sqrt(3)`  (D) `2 sqrt(3)`

**ANSWER: (B)**
```
   Every side has differences of the form (1, -1, 0)   ->   sqrt(2)
   Perimeter = 3 sqrt(2)      (the triangle is equilateral)
```

---

# PATTERN 2 — DISTANCE FROM THE ORIGIN, AN AXIS OR A PLANE

> **SHORTCUT — the two opposite rules, in six words:**
> **AXIS: drop the letter. PLANE: keep the missing one.**

### Q5
The distance of the point `(1, 2, 3)` from the **y-axis** is
(A) `sqrt(10)`  (B) `sqrt(13)`  (C) `sqrt(5)`  (D) `2`

**ANSWER: (A)**
```
   From the y-axis, DROP y  ->  sqrt(z^2 + x^2) = sqrt(9 + 1) = sqrt(10)
```

---

### Q6
The distance of `(-3, 4, -5)` from the origin is
(A) `50`  (B) `5 sqrt(2)`  (C) `sqrt(12)`  (D) `12`

**ANSWER: (B)**
```
   sqrt(9 + 16 + 25) = sqrt(50) = 5 sqrt(2)
```

---

### Q7
The distance of the point `(2, 3, -5)` from the `xy`-plane is
(A) `2`  (B) `3`  (C) `5`  (D) `sqrt(38)`

**ANSWER: (C)**
```
   The xy-plane is z = 0. Keep the MISSING letter: |z| = |-5| = 5
```
> **TRAP:** many students answer `sqrt(38)` (the distance from the origin) or `-5`.
> Distance is never negative.

---

### Q8
The points on the `x`-axis at a distance `sqrt(41)` from `(0, 4, 3)` are
(A) `(±4, 0, 0)`  (B) `(±5, 0, 0)`  (C) `(4, 0, 0)` only  (D) `(0, ±4, 0)`

**ANSWER: (A)**
```
   P(x, 0, 0) :  x^2 + 16 + 9 = 41   ->   x^2 = 16   ->   x = ±4
```

---

### Q9
For any point `P(x, y, z)`, the sum of the squares of its distances from the **three
coordinate axes** equals
(A) `OP^2`  (B) `2 OP^2`  (C) `3 OP^2`  (D) `OP^2 / 2`

**ANSWER: (B)**
```
   (y^2 + z^2) + (z^2 + x^2) + (x^2 + y^2) = 2(x^2 + y^2 + z^2) = 2 OP^2
```
> **SHORTCUT:** Every letter appears exactly twice. Answer is `2 OP^2`. Memorise it —
> this exact question is recycled constantly.

---

### Q10
For any point `P(x, y, z)`, the sum of the squares of its distances from the **three
coordinate planes** equals
(A) `OP^2`  (B) `2 OP^2`  (C) `3 OP^2`  (D) `0`

**ANSWER: (A)**
```
   |x|^2 + |y|^2 + |z|^2 = x^2 + y^2 + z^2 = OP^2
```

Learn Q9 and Q10 as a pair: **axes give `2 OP^2`, planes give `OP^2`.**

---

# PATTERN 3 — OCTANTS, PROJECTIONS AND IMAGES

> **SHORTCUT:** Octant = the 2D quadrant of `(x, y)`, then **add 4 if `z < 0`**.
> Projection = zeros. Image = minus signs.

### Q11
The point `(-3, 1, 2)` lies in the octant
(A) I  (B) II  (C) VI  (D) VII

**ANSWER: (B)**
```
   (x, y) = (-, +)  ->  quadrant 2 ;   z > 0  ->  add nothing   ->  OCTANT II
```

---

### Q12
The point `(2, -1, -4)` lies in the octant
(A) IV  (B) V  (C) VII  (D) VIII

**ANSWER: (D)**
```
   (x, y) = (+, -)  ->  quadrant 4 ;   z < 0  ->  add 4   ->  OCTANT VIII
```

---

### Q13
The image of `(1, 2, 3)` in the `xy`-plane is
(A) `(1, 2, 0)`  (B) `(1, 2, -3)`  (C) `(-1, -2, 3)`  (D) `(-1, -2, -3)`

**ANSWER: (B)** — the `xy`-plane owns `x` and `y`, so flip only `z`.
Option (A) is the **projection**, not the image. That is the trap.

---

### Q14
The projection of `(3, -4, 5)` on the `yz`-plane is
(A) `(3, -4, 0)`  (B) `(0, -4, 5)`  (C) `(-3, -4, 5)`  (D) `(3, 0, 5)`

**ANSWER: (B)** — the `yz`-plane kills `x`.

---

### Q15
The image of `(2, 3, 4)` in the **x-axis** is
(A) `(2, 0, 0)`  (B) `(2, -3, -4)`  (C) `(-2, 3, 4)`  (D) `(-2, -3, -4)`

**ANSWER: (B)** — an axis keeps ONE letter and flips the other two.
Option (D) is the image in the **origin**.

---

### Q16
The point `(2, 0, -3)` lies
(A) on the `y`-axis  (B) in the `zx`-plane  (C) in the `xy`-plane  (D) in octant I

**ANSWER: (B)**
```
   y = 0 is exactly the equation of the zx-plane.
```
> **SHORTCUT:** One zero → the point is in a PLANE. Two zeros → the point is on an AXIS.

---

### Q17
`P(x, y, z)`, its projection on the `xy`-plane and its image in the `xy`-plane. Which is
true?
(A) the three points are the vertices of a triangle
(B) the projection is the midpoint of the point and its image
(C) all three coincide
(D) the image is the midpoint

**ANSWER: (B)**
```
   Midpoint of (x,y,z) and (x,y,-z) is (x, y, 0) = the projection.
```

---

# PATTERN 4 — SECTION FORMULA AND RATIOS

> **SHORTCUT:** "m goes with the SECOND point, n with the FIRST." For "find the ratio",
> set the ratio `k : 1`, use only the **easiest coordinate**, and never check the others
> in an MCQ — the options do that work for you.

### Q18
The point dividing the join of `(2, 3, 4)` and `(6, 7, 8)` internally in the ratio `1 : 3`
is
(A) `(5, 6, 7)`  (B) `(3, 4, 5)`  (C) `(4, 5, 6)`  (D) `(2, 3, 4)`

**ANSWER: (B)**
```
   x = (1(6) + 3(2))/4 = 3      (and the pattern gives 4 and 5)
```
> **SHORTCUT:** Ratio `1 : 3` means the point is **closer to the FIRST point**. `(3,4,5)`
> is closer to `(2,3,4)`. You can pick the answer without any arithmetic.

---

### Q19
The midpoint of the join of `(1, -2, 3)` and `(3, 4, -1)` is
(A) `(2, 1, 1)`  (B) `(4, 2, 2)`  (C) `(1, 3, -2)`  (D) `(2, 2, 1)`

**ANSWER: (A)** — average each coordinate: `(2, 1, 1)`.

---

### Q20
The point `(5, 4, -6)` divides the join of `(3, 2, -4)` and `(9, 8, -10)` in the ratio
(A) `1 : 2` internally  (B) `2 : 1` internally  (C) `1 : 2` externally  (D) `2 : 3`

**ANSWER: (A)**
```
   (9k + 3)/(k + 1) = 5   ->   9k + 3 = 5k + 5   ->   k = 1/2   ->   1 : 2
   k is POSITIVE -> internal.
```
> **SHORTCUT:** `(5,4,-6)` is much nearer `(3,2,-4)` than `(9,8,-10)`, so the first part
> of the ratio must be the smaller number. Only (A) and (C) survive; the point lies
> between the two, so it is internal.

---

### Q21
The point dividing `(1, 2, 3)` and `(3, 4, 5)` externally in the ratio `2 : 1` is
(A) `(2, 3, 4)`  (B) `(5, 6, 7)`  (C) `(-1, 0, 1)`  (D) `(4, 5, 6)`

**ANSWER: (B)**
```
   x = (2(3) - 1(1))/(2 - 1) = 5 ,   similarly 6 and 7.
```
> **SHORTCUT:** External `2 : 1` means "go past B by the same length again", i.e. the
> point is `B + (B - A)`. Here `(3,4,5) + (2,2,2) = (5,6,7)`. Instant.

---

# PATTERN 5 — IN WHAT RATIO DOES A COORDINATE PLANE CUT AB?

> **SHORTCUT — one line, no working:**
> `yz`-plane → `-x1 : x2`, `zx`-plane → `-y1 : y2`, `xy`-plane → `-z1 : z2`.
> A **positive** answer means internal, a **negative** one means external.

### Q22
The `yz`-plane divides the join of `(2, 4, 5)` and `(3, 5, -4)` in the ratio
(A) `2 : 3` internally  (B) `2 : 3` externally  (C) `3 : 2` internally  (D) `4 : 5`

**ANSWER: (B)**
```
   -x1 : x2 = -2 : 3      negative  ->  EXTERNAL 2 : 3
```
> **SHORTCUT for the sign:** both `x`-coordinates (`2` and `3`) are positive, so A and B
> are on the SAME side of the `yz`-plane, so the plane cannot cut the segment — it must be
> external. You can answer from the signs alone.

---

### Q23
The `xy`-plane divides the join of `(-3, 4, -8)` and `(5, -6, 4)` in the ratio
(A) `2 : 1` internally  (B) `1 : 2` internally  (C) `2 : 1` externally  (D) `8 : 4` ext.

**ANSWER: (A)**
```
   -z1 : z2 = 8 : 4 = 2 : 1      positive  ->  INTERNAL
   (z goes from -8 to +4, so it crosses z = 0 - internal is obviously right.)
```

---

### Q24
The `xy`-plane divides the join of `(1, 2, 3)` and `(4, 2, 1)` in the ratio
(A) `3 : 1` internally  (B) `3 : 1` externally  (C) `1 : 3` externally  (D) `1 : 3` int.

**ANSWER: (B)**
```
   -z1 : z2 = -3 : 1     negative  ->  EXTERNAL 3 : 1
   (Both z-values, 3 and 1, are positive -> same side -> external. Confirmed.)
```

---

### Q25
The `zx`-plane divides the join of `(-2, 3, 4)` and `(1, 2, 3)` in the ratio
(A) `3 : 2` internally  (B) `2 : 3` externally  (C) `3 : 2` externally  (D) `1 : 1`

**ANSWER: (C)**
```
   -y1 : y2 = -3 : 2     negative  ->  EXTERNAL 3 : 2
```

---

# PATTERN 6 — CENTROIDS AND MISSING VERTICES

> **SHORTCUT:** Triangle → divide by **3**. Tetrahedron → divide by **4**.
> Missing vertex → `(number of vertices) x centroid − (sum of the given ones)`.

### Q26
The centroid of the triangle `(2, 4, 6)`, `(4, 6, 2)`, `(6, 2, 4)` is
(A) `(4, 4, 4)`  (B) `(12, 12, 12)`  (C) `(3, 3, 3)`  (D) `(2, 2, 2)`

**ANSWER: (A)** — each column sums to 12, divided by 3 gives 4.

---

### Q27
The centroid of the tetrahedron `(1,2,3)`, `(3,2,1)`, `(2,1,3)`, `(2,3,1)` is
(A) `(8, 8, 8)`  (B) `(2, 2, 2)`  (C) `(8/3, 8/3, 8/3)`  (D) `(4, 4, 4)`

**ANSWER: (B)**
```
   Each column sums to 8.  FOUR vertices  ->  divide by 4  ->  (2, 2, 2)
```
> **TRAP:** option (C) is what you get if you divide by 3. Count the vertices first.

---

### Q28
Two vertices of a triangle are `(3, 2, -4)` and `(-1, 4, 2)` and the centroid is
`(1, 3, 1)`. The third vertex is
(A) `(1, 3, 5)`  (B) `(-1, 3, 5)`  (C) `(1, -3, 5)`  (D) `(1, 3, -5)`

**ANSWER: (A)**
```
   3G = (3, 9, 3) ;  sum of given = (2, 6, -2)
   third = (3-2, 9-6, 3+2) = (1, 3, 5)
```

---

### Q29
If the origin is the centroid of the triangle with vertices `(a, 1, 3)`, `(-2, b, -5)`,
`(4, 7, c)`, then `(a, b, c)` =
(A) `(-2, -8, 2)`  (B) `(2, 8, -2)`  (C) `(-2, 8, 2)`  (D) `(-6, -8, 6)`

**ANSWER: (A)**
```
   Each column must sum to ZERO:
       a - 2 + 4 = 0   ->   a = -2
       1 + b + 7 = 0   ->   b = -8
       3 - 5 + c = 0   ->   c =  2
```

---

### Q30
Three vertices of a tetrahedron are `(3, 2, -1)`, `(4, 1, 1)`, `(6, 2, 5)` and its
centroid is `(4, 2, 2)`. The fourth vertex is
(A) `(3, 3, 3)`  (B) `(1, 1, 1)`  (C) `(4, 2, 2)`  (D) `(13, 5, 5)`

**ANSWER: (A)**
```
   4G = (16, 8, 8) ;   sum of the three = (13, 5, 5)
   fourth = (3, 3, 3)
   CHECK: (13+3, 5+3, 5+3)/4 = (16, 8, 8)/4 = (4, 2, 2).   correct
```

---

# PATTERN 7 — COLLINEARITY AND THE TYPE OF TRIANGLE

> **SHORTCUT:** For an MCQ, do NOT compute square roots. Compare the SQUARED lengths.
> For collinearity, the fastest test of all is: are the direction differences
> `(x2-x1, y2-y1, z2-z1)` **proportional**?

### Q31
The points `(1, 2, 3)`, `(7, 0, 1)`, `(-2, 3, 4)` are
(A) vertices of a right angled triangle  (B) collinear
(C) vertices of an equilateral triangle  (D) vertices of an isosceles triangle

**ANSWER: (B)**
```
   FAST WAY - direction differences from the first point:
      (1,2,3) -> (7,0,1)   gives  ( 6, -2, -2)
      (1,2,3) -> (-2,3,4)  gives  (-3,  1,  1)

   ( 6, -2, -2)  =  -2 x (-3, 1, 1)      PROPORTIONAL  ->  COLLINEAR

   (Long way, if you prefer: AB = 2 sqrt 11, BC = 3 sqrt 11, CA = sqrt 11,
    and CA + AB = BC.)
```
> **SHORTCUT:** The proportionality test takes 5 seconds and never needs a square root.
> Use it in every entrance exam.

---

### Q32
The triangle with vertices `(0, 7, 10)`, `(-1, 6, 6)`, `(-4, 9, 6)` is
(A) equilateral  (B) isosceles only  (C) right angled isosceles  (D) scalene

**ANSWER: (C)**
```
   squared sides:  18 , 18 , 36
   two equal  ->  isosceles ;   18 + 18 = 36  ->  right angled
```
> **SHORTCUT:** When the three squared sides look like `k, k, 2k`, the answer is always
> "right angled isosceles". Spot that shape instantly.

---

### Q33
The triangle with vertices `(2, 3, 5)`, `(-1, 5, -1)`, `(4, -3, 2)` is
(A) equilateral  (B) right angled isosceles  (C) scalene  (D) collinear

**ANSWER: (B)**
```
   squared sides:  49 , 98 , 49        ->  the k, k, 2k shape again
   49 + 49 = 98    ->  right angled, and two sides equal  ->  isosceles
```

---

### Q34
The triangle with vertices `(1, 2, 3)`, `(2, 3, 1)`, `(3, 1, 2)` is
(A) right angled  (B) equilateral  (C) isosceles only  (D) scalene

**ANSWER: (B)** — all three squared sides equal `6`.

---

### Q35
The points `(3, 2, -4)`, `(5, 4, -6)`, `(9, 8, -10)` are collinear, and `B(5,4,-6)`
divides `AC` in the ratio
(A) `1 : 2`  (B) `2 : 1`  (C) `1 : 3`  (D) `3 : 1`

**ANSWER: (A)**
```
   A -> B = (2, 2, -2) ,   A -> C = (6, 6, -6) = 3 x (A -> B)
   So AB is one third of AC   ->   AB : BC = 1 : 2
```

---

# PATTERN 8 — QUADRILATERALS AND THE FOURTH VERTEX

> **SHORTCUT:** For a parallelogram `ABCD`, `D = A + C − B`. Do it coordinate by
> coordinate; it takes 4 seconds.

### Q36
`A(3, -1, 2)`, `B(1, 2, -4)`, `C(-1, 1, 2)` are three vertices of the parallelogram
`ABCD`. Then `D` =
(A) `(1, -2, 8)`  (B) `(-1, 2, 8)`  (C) `(1, 2, -8)`  (D) `(5, -2, 8)`

**ANSWER: (A)**
```
   D = A + C - B = (3 - 1 - 1 , -1 + 1 - 2 , 2 + 2 + 4) = (1, -2, 8)
```

---

### Q37
`A(0, 4, 1)`, `B(2, 3, -1)`, `C(4, 5, 0)`, `D(2, 6, 2)` are the vertices of a
(A) rhombus but not a square  (B) square  (C) rectangle but not a square  (D) trapezium

**ANSWER: (B)**
```
   all four squared sides = 9 ;  both squared diagonals = 18
   equal sides AND equal diagonals  ->  SQUARE
```
> **TRAP:** If you stop after finding four equal sides you will pick (A). Always check the
> diagonals.

---

### Q38
`A(0,0,0)`, `B(3,0,4)`, `C(3,3,8)`, `D(0,3,4)` are the vertices of a
(A) square  (B) rhombus but not a square  (C) rectangle  (D) scalene quadrilateral

**ANSWER: (B)**
```
   squared sides:  25, 25, 25, 25       all sides = 5
   squared diagonals:  AC^2 = 9+9+64 = 82 ,  BD^2 = 9+9+0 = 18     NOT equal
   ->  RHOMBUS, not a square
```

---

# PATTERN 9 — EQUIDISTANT POINTS AND LOCUS

> **SHORTCUT:** Write `PA^2 = PB^2` and never take a square root. The `x^2, y^2, z^2`
> terms always cancel, leaving a LINEAR equation — which is a PLANE.

### Q39
The locus of the point equidistant from `A(1, 2, 3)` and `B(3, 2, -1)` is
(A) `x - 2z = 0`  (B) `x + 2z = 0`  (C) `x - 2y = 0`  (D) a sphere

**ANSWER: (A)**
```
   (x-1)^2 + (z-3)^2 = (x-3)^2 + (z+1)^2      [the y terms are identical, cancel]
   -2x + 1 - 6z + 9 = -6x + 9 + 2z + 1
    4x - 8z = 0    ->    x - 2z = 0

   CHECK: the midpoint (2, 2, 1) must satisfy it:  2 - 2 = 0.   correct
```
> **SHORTCUT:** The answer is always the **perpendicular bisector plane**, so it must be
> satisfied by the midpoint of `AB`. Test the midpoint in each option and stop at the one
> that works.

---

### Q40
The point on the `z`-axis equidistant from `(1, 5, 7)` and `(5, 1, -4)` is
(A) `(0, 0, 3/2)`  (B) `(0, 0, -3/2)`  (C) `(0, 0, 3)`  (D) `(3/2, 0, 0)`

**ANSWER: (A)**
```
   26 + (z-7)^2 = 26 + (z+4)^2   ->   -14z + 49 = 8z + 16   ->   z = 3/2
```
> **SHORTCUT:** "On the z-axis" instantly kills (D), which has a non-zero `x`.

---

### Q41
The locus of a point whose distance from the origin is `3` is
(A) `x^2 + y^2 + z^2 = 3`  (B) `x^2 + y^2 + z^2 = 9`  (C) `x + y + z = 3`  (D) `z = 3`

**ANSWER: (B)** — square both sides of `sqrt(x^2+y^2+z^2) = 3`. It is a sphere of radius 3.

---

### Q42
The locus of a point which is equidistant from the `x`-axis and the `y`-axis is
(A) `x = y`  (B) `x^2 = y^2`  (C) `z = 0`  (D) `x^2 + y^2 = z^2`

**ANSWER: (B)**
```
   distance from x-axis = sqrt(y^2 + z^2) ,   from y-axis = sqrt(z^2 + x^2)

   y^2 + z^2 = z^2 + x^2   ->   x^2 = y^2   (that is, x = y  OR  x = -y)
```
> **TRAP:** (A) is only half the answer. Squared equations give both signs.

---

# PATTERN 10 — TRANSLATION OF AXES AND ODDS AND ENDS

### Q43
The origin is shifted to `(1, 2, -3)` with the axes unchanged. The new coordinates of
`(0, 4, 5)` are
(A) `(1, 6, 2)`  (B) `(-1, 2, 8)`  (C) `(-1, 2, 2)`  (D) `(1, 2, 8)`

**ANSWER: (B)**
```
   NEW = OLD - SHIFT   ->   (0-1, 4-2, 5+3) = (-1, 2, 8)
```
> **SHORTCUT:** The new origin itself must become `(0,0,0)`. That tells you the operation
> is SUBTRACT, never add.

---

### Q44
Under a translation of axes in three dimensions, which of the following is UNCHANGED?
(A) the coordinates of a point  (B) the distance between two points
(C) the equation of a plane  (D) the octant of a point

**ANSWER: (B)**
```
   (x2 - h) - (x1 - h) = x2 - x1 ,   so every difference - and hence every
   distance, ratio, area and volume - is unaffected.
```

---

### Q45
The equation of the plane through `(2, -3, 5)` parallel to the `zx`-plane is
(A) `x = 2`  (B) `y = -3`  (C) `z = 5`  (D) `y = 3`

**ANSWER: (B)** — the `zx`-plane is `y = 0`, so parallel planes are `y = b`.

---

### Q46
The distance between the parallel planes `z = 4` and `z = -3` is
(A) `1`  (B) `7`  (C) `12`  (D) `sqrt(7)`

**ANSWER: (B)** — `|4 - (-3)| = 7`.

---

# SPEED RULES FOR THE EXAM HALL

```
  +-----------------------------------------+--------------------------------------+
  |  IF YOU SEE THIS ...                    |  DO THIS IMMEDIATELY                 |
  +-----------------------------------------+--------------------------------------+
  |  "distance between two points"          |  three differences, square, add,     |
  |                                         |  root. Do not write the formula.     |
  +-----------------------------------------+--------------------------------------+
  |  "distance from the x-axis"             |  DROP x :  sqrt(y^2 + z^2)           |
  +-----------------------------------------+--------------------------------------+
  |  "distance from the xy-plane"           |  KEEP the missing letter :  |z|      |
  +-----------------------------------------+--------------------------------------+
  |  "sum of squares of distances from the  |  2 OP^2   (axes)                     |
  |   axes / from the planes"               |    OP^2   (planes)                   |
  +-----------------------------------------+--------------------------------------+
  |  "which octant"                         |  2D quadrant of (x,y), then +4 if    |
  |                                         |  z is negative                       |
  +-----------------------------------------+--------------------------------------+
  |  the word "projection"                  |  make the outsiders ZERO             |
  |  the word "image" / "reflection"        |  make the outsiders NEGATIVE         |
  +-----------------------------------------+--------------------------------------+
  |  "divides in the ratio m : n"           |  m with the SECOND point,            |
  |                                         |  n with the FIRST                    |
  +-----------------------------------------+--------------------------------------+
  |  "externally in the ratio m : n"        |  same formula, every + becomes -     |
  |                                         |  (or just use m : (-n))              |
  +-----------------------------------------+--------------------------------------+
  |  "in what ratio does P divide AB"       |  ratio k : 1, use ONE coordinate,    |
  |                                         |  solve for k. k > 0 internal.        |
  +-----------------------------------------+--------------------------------------+
  |  "ratio in which the yz-plane divides"  |  -x1 : x2      (zx -> -y1:y2 ,       |
  |                                         |                 xy -> -z1:z2)        |
  +-----------------------------------------+--------------------------------------+
  |  both z-coordinates the SAME sign       |  the xy-plane must divide EXTERNALLY |
  +-----------------------------------------+--------------------------------------+
  |  "centroid"                             |  count the vertices! 3 -> /3 ,       |
  |                                         |  4 -> /4                             |
  +-----------------------------------------+--------------------------------------+
  |  "find the missing vertex"              |  n x centroid  -  sum of the given   |
  +-----------------------------------------+--------------------------------------+
  |  "fourth vertex of parallelogram ABCD"  |  D = A + C - B                       |
  +-----------------------------------------+--------------------------------------+
  |  "are the points collinear?"            |  are the difference triples          |
  |                                         |  PROPORTIONAL? 5 seconds, no roots.  |
  +-----------------------------------------+--------------------------------------+
  |  "what type of triangle"                |  compare SQUARED sides.              |
  |                                         |  k, k, 2k  ->  right angled isosceles|
  +-----------------------------------------+--------------------------------------+
  |  "square or rhombus?"                   |  CHECK THE DIAGONALS. Equal -> square|
  +-----------------------------------------+--------------------------------------+
  |  "locus of P with PA = PB"              |  a PLANE. Test which option the      |
  |                                         |  MIDPOINT of AB satisfies.           |
  +-----------------------------------------+--------------------------------------+
  |  "origin shifted to (h,k,l)"            |  NEW = OLD - SHIFT                   |
  +-----------------------------------------+--------------------------------------+
  |  a squared unknown anywhere             |  expect TWO answers. Look for the    |
  |                                         |  option with a ± sign.               |
  +-----------------------------------------+--------------------------------------+
  |  EAPCET, and you are out of time        |  NEVER leave a blank. No negative    |
  |                                         |  marking. Fill every bubble.         |
  +-----------------------------------------+--------------------------------------+
  |  JEE Main, and you genuinely do not know|  SKIP IT. -1 is real.                |
  +-----------------------------------------+--------------------------------------+
```
