# Three Dimensional Coordinates — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 5 — Three Dimensional Coordinates**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So the questions below are grouped by **"how often they appear"** rather than tagged to
> one exact year. Before your exam, cross-check with the official question papers at
> **bie.ap.gov.in**. Nothing here claims to be from a named year.

---

## BE HONEST WITH YOURSELF ABOUT THIS CHAPTER

```
  +---------------------------------------------------------------------------+
  |                                                                           |
  |   THIS IS A  SECTION A  CHAPTER, WITH AN OCCASIONAL  SECTION B.           |
  |                                                                           |
  |   Section A  (2 marks, answer ALL 10)   ->  1 question almost every year,  |
  |                                             sometimes 2                    |
  |   Section B  (4 marks, answer any 5)    ->  appears in some years only     |
  |   Section C  (7 marks, answer any 5)    ->  essentially NEVER              |
  |                                                                           |
  |   REALISTIC HAUL:   2 marks near-guaranteed,  up to 6 in a good year.      |
  |                                                                           |
  +---------------------------------------------------------------------------+
```

**Do not sulk about that number.** These are the *cheapest* marks in the entire Maths IB
paper. A weak student can master this chapter in two evenings and then never lose those
2 marks again — while a "smart" student who skipped it because it looked like boring
3D geometry will drop them. You need 26 to pass. Two free marks matter.

And remember the compound interest: this chapter feeds directly into **Chapter 6
(Direction Cosines)** and **Chapter 7 (The Plane)**, which together add another 6 to
12 marks. The distance formula and the section formula you learn here are used in both.

**Where this chapter appears in the Maths IB paper:**

```
  Section A  (2 marks each, answer ALL 10)  ->  usually one of Q6 to Q10
  Section B  (4 marks each, answer any 5)   ->  occasionally Q11 to Q14
  Section C  (7 marks each, answer any 5)   ->  not a Section C chapter
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. You must answer ALL of Section A.
# ===============================================================

## Topic: the distance formula, straight

### Q A1
Find the distance between the points `(3, 4, -2)` and `(1, 0, 7)`.

**ANSWER:**
```
   x : 1 - 3   = -2      ->   4
   y : 0 - 4   = -4      ->  16
   z : 7 - (-2)=  9      ->  81
                            ----
                            101

   Distance = sqrt(101)
```

---

### Q A2
Find the distance between `(1, 2, 3)` and `(4, 6, 15)`.

**ANSWER:**
```
   differences: 3, 4, 12
   squares    : 9, 16, 144   ->  sum = 169

   Distance = sqrt(169) = 13
```

---

### Q A3
Find the distance of the point `P(3, 4, 12)` from the origin.

**ANSWER:**
```
   OP = sqrt(3^2 + 4^2 + 12^2) = sqrt(9 + 16 + 144) = sqrt(169) = 13
```

---

### Q A4
If the distance between `(5, -1, 7)` and `(x, 5, 1)` is `9`, find `x`.

**ANSWER:**
```
   (x - 5)^2 + (5 + 1)^2 + (1 - 7)^2 = 81
   (x - 5)^2 + 36 + 36 = 81
   (x - 5)^2 = 9
    x - 5 = +3  or  -3

   x = 8   or   x = 2      (BOTH values - write both)

   CHECK x = 8 :  9 + 36 + 36 = 81, sqrt = 9.   correct
   CHECK x = 2 :  9 + 36 + 36 = 81, sqrt = 9.   correct
```

---

## Topic: distance from the axes and the coordinate planes

### Q A5
Find the distance of `P(3, 4, 12)` from the **z-axis**.

**ANSWER:**
```
   Distance from the z-axis = sqrt(x^2 + y^2)      [drop the letter z]
                            = sqrt(9 + 16) = sqrt(25) = 5
```

---

### Q A6
Find the distance of `P(2, -3, 6)` from (a) the origin, (b) the `xy`-plane,
(c) the `yz`-plane, (d) the `x`-axis.

**ANSWER:**
```
   (a)  sqrt(4 + 9 + 36) = sqrt(49) = 7
   (b)  from the xy-plane  =  |z| = 6
   (c)  from the yz-plane  =  |x| = 2
   (d)  from the x-axis    =  sqrt(y^2 + z^2) = sqrt(9 + 36) = sqrt(45) = 3 sqrt(5)

   CHECK:  (3 sqrt 5)^2 + x^2 = 45 + 4 = 49 = OP^2.   correct
```

---

## Topic: octants

### Q A7
In which octant does the point `(-2, 3, -5)` lie?

**ANSWER:**
```
   (x, y) = (-, +)   ->   2D quadrant  2
   z is NEGATIVE     ->   add 4

   OCTANT VI
```

---

### Q A8
In which octant does `(4, -3, -5)` lie? And `(1, -2, 3)`?

**ANSWER:**
```
   (4, -3, -5):  (x,y) = (+, -)  ->  quadrant 4 ;  z < 0  ->  +4   ->  OCTANT VIII
   (1, -2,  3):  (x,y) = (+, -)  ->  quadrant 4 ;  z > 0  ->  +0   ->  OCTANT IV
```

---

## Topic: projections and images

### Q A9
Find the projections of `P(2, -3, 5)` on the three coordinate planes.

**ANSWER:**
```
   on the xy-plane (kill z)  ->  (2, -3, 0)
   on the yz-plane (kill x)  ->  (0, -3, 5)
   on the zx-plane (kill y)  ->  (2,  0, 5)
```

---

### Q A10
Find the projections of `P(4, -3, 7)` on the three coordinate axes.

**ANSWER:**
```
   on the x-axis  ->  (4,  0, 0)
   on the y-axis  ->  (0, -3, 0)
   on the z-axis  ->  (0,  0, 7)
```

---

### Q A11
Find the image of `P(3, -2, 5)` in (a) the `xy`-plane, (b) the `yz`-plane,
(c) the origin.

**ANSWER:**
```
   (a)  xy-plane owns x and y  ->  flip z only    ->  ( 3, -2, -5)
   (b)  yz-plane owns y and z  ->  flip x only    ->  (-3, -2,  5)
   (c)  origin owns nothing    ->  flip all three ->  (-3,  2, -5)
```

---

### Q A12
Find the image of `P(2, -5, 6)` in the **y-axis**.

**ANSWER:**
```
   The y-axis owns only y.  Flip x and z.

   Image = (-2, -5, -6)
```

---

## Topic: midpoint and section formula

### Q A13
Find the midpoint of the segment joining `(2, 3, 4)` and `(-2, 5, 8)`.

**ANSWER:**
```
   ( (2 + (-2))/2 , (3 + 5)/2 , (4 + 8)/2 )  =  (0, 4, 6)
```

---

### Q A14
Find the point which divides the join of `A(2, 3, 4)` and `B(6, 7, 8)` internally in the
ratio `1 : 3`.

**ANSWER:**
```
   m = 1 (with B),  n = 3 (with A),  m + n = 4

   x = (1(6) + 3(2))/4 = 12/4 = 3
   y = (1(7) + 3(3))/4 = 16/4 = 4
   z = (1(8) + 3(4))/4 = 20/4 = 5

   Point = (3, 4, 5)

   CHECK:  AP^2 = 1+1+1 = 3 ,  PB^2 = 9+9+9 = 27 ,  ratio 3:27 = 1:9  ->  1:3.   correct
```

---

### Q A15
Find the point which divides the join of `A(1, 2, 3)` and `B(3, 4, 5)` externally in the
ratio `2 : 1`.

**ANSWER:**
```
   x = (2(3) - 1(1))/(2 - 1) = 5
   y = (2(4) - 1(2))/1       = 6
   z = (2(5) - 1(3))/1       = 7

   Point = (5, 6, 7)

   CHECK:  AB = (2,2,2) ,  AP = (4,4,4) = 2 x AB  ->  AP : PB = 2 : 1 externally. correct
```

---

### Q A16
Find the distance between the midpoint of `A(6, 3, -4)`, `B(-2, -1, 2)` and the point
`C(2, 1, -3)`.

**ANSWER:**
```
   Midpoint M = ( (6-2)/2 , (3-1)/2 , (-4+2)/2 ) = (2, 1, -1)

   MC = sqrt( (2-2)^2 + (1-1)^2 + (-3+1)^2 ) = sqrt(0 + 0 + 4) = 2
```

---

## Topic: ratio in which a coordinate plane divides a segment

### Q A17
In what ratio does the `yz`-plane divide the join of `A(2, 4, 5)` and `B(3, 5, -4)`?

**ANSWER:**
```
   Ratio = -x1 : x2 = -2 : 3       ->   EXTERNALLY in the ratio 2 : 3

   CHECK:  m = -2, n = 3, m + n = 1
           x = (-2(3) + 3(2))/1 = (-6 + 6)/1 = 0    it lies on x = 0.   correct
```

---

### Q A18
In what ratio does the `xy`-plane divide the join of `A(-2, 4, 7)` and `B(3, -5, 8)`?

**ANSWER:**
```
   Ratio = -z1 : z2 = -7 : 8       ->   EXTERNALLY in the ratio 7 : 8

   (The ratio is negative, so the plane does NOT cut the segment itself -
    A and B are both above the xy-plane, since z = 7 and z = 8 are both positive.)
```

---

## Topic: centroid

### Q A19
Find the centroid of the triangle with vertices `(2, 4, 6)`, `(4, 6, 2)`, `(6, 2, 4)`.

**ANSWER:**
```
   x : (2 + 4 + 6)/3 = 4
   y : (4 + 6 + 2)/3 = 4
   z : (6 + 2 + 4)/3 = 4

   Centroid = (4, 4, 4)
```

---

### Q A20
Find the centroid of the tetrahedron with vertices `(0, 4, 0)`, `(4, 0, 0)`, `(0, 0, 4)`,
`(4, 4, 4)`.

**ANSWER:**
```
   Divide by FOUR, not three (a tetrahedron has 4 vertices).

   x : (0 + 4 + 0 + 4)/4 = 2
   y : (4 + 0 + 0 + 4)/4 = 2
   z : (0 + 0 + 4 + 4)/4 = 2

   Centroid = (2, 2, 2)
```

---

### Q A21
Two vertices of a triangle are `(3, 2, -4)` and `(-1, 4, 2)`, and its centroid is
`(1, 3, 1)`. Find the third vertex.

**ANSWER:**
```
   Third vertex  =  3G  -  (sum of the two given)

   3G           = (3, 9, 3)
   sum of given = (3 + (-1), 2 + 4, -4 + 2) = (2, 6, -2)

   Third vertex = (3 - 2, 9 - 6, 3 + 2) = (1, 3, 5)

   CHECK: (3 - 1 + 1)/3 = 1 ,  (2 + 4 + 3)/3 = 3 ,  (-4 + 2 + 5)/3 = 1.   correct
```

---

### Q A22
Three vertices of a tetrahedron are `(2, 3, -4)`, `(-3, 3, -2)`, `(-1, 4, 2)` and its
centroid is `(3, 5, 1)`. Find the fourth vertex.

**ANSWER:**
```
   Fourth vertex  =  4G  -  (sum of the three given)

   4G                = (12, 20, 4)
   sum of the three  = (2 - 3 - 1, 3 + 3 + 4, -4 - 2 + 2) = (-2, 10, -4)

   Fourth vertex = (12 + 2, 20 - 10, 4 + 4) = (14, 10, 8)

   CHECK: (2 - 3 - 1 + 14)/4 = 12/4 = 3     correct
          (3 + 3 + 4 + 10)/4 = 20/4 = 5     correct
          (-4 - 2 + 2 + 8)/4 =  4/4 = 1     correct
```

---

## Topic: planes, axes, translation

### Q A23
Write the equation of the plane through `(1, 2, 3)` and parallel to the `yz`-plane.

**ANSWER:**
```
   The yz-plane is  x = 0.  A parallel plane is  x = a.
   It passes through a point whose x-coordinate is 1.

   Equation:  x = 1
```

---

### Q A24
The origin is shifted to `(1, 2, -3)` without changing the directions of the axes.
Find the new coordinates of the point `(0, 4, 5)`.

**ANSWER:**
```
   NEW = OLD - SHIFT

   X = 0 - 1    = -1
   Y = 4 - 2    =  2
   Z = 5 - (-3) =  8

   New coordinates = (-1, 2, 8)
```

---

### Q A25
Find the point on the `x`-axis which is equidistant from `A(1, 2, 3)` and `B(3, 2, 1)`.

**ANSWER:**
```
   Let P = (x, 0, 0).

   PA^2 = (x-1)^2 + 4 + 9 = (x-1)^2 + 13
   PB^2 = (x-3)^2 + 4 + 1 = (x-3)^2 + 5

   (x-1)^2 + 13 = (x-3)^2 + 5
   x^2 - 2x + 1 + 13 = x^2 - 6x + 9 + 5
   -2x + 14 = -6x + 14
   4x = 0   ->   x = 0

   P = (0, 0, 0),  the ORIGIN.

   CHECK: OA^2 = 1 + 4 + 9 = 14 ,  OB^2 = 9 + 4 + 1 = 14.   equal.   correct
```

---

### Q A26
Show that the points `(2, 3, 5)`, `(-1, 5, -1)`, `(4, -3, 2)` form a right angled
triangle.

**ANSWER:**
```
   Call them A, B, C.

   AB^2 = (-1-2)^2 + (5-3)^2 + (-1-5)^2 =  9 +  4 + 36 = 49
   BC^2 = (4+1)^2  + (-3-5)^2 + (2+1)^2 = 25 + 64 +  9 = 98
   CA^2 = (2-4)^2  + (3+3)^2  + (5-2)^2 =  4 + 36 +  9 = 49

   AB^2 + CA^2 = 49 + 49 = 98 = BC^2

   Hence the triangle is RIGHT ANGLED at A.
   Also AB = CA = 7, so it is right angled ISOSCELES.
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Complete solutions. Write every line - the method carries the marks.
# ===============================================================

### Q B1
Show that the points `A(1, 2, 3)`, `B(7, 0, 1)`, `C(-2, 3, 4)` are collinear.

**ANSWER:**
```
   AB^2 = (7-1)^2 + (0-2)^2 + (1-3)^2 = 36 + 4 + 4 = 44   ->  AB = 2 sqrt(11)
   BC^2 = (-2-7)^2 + (3-0)^2 + (4-1)^2 = 81 + 9 + 9 = 99  ->  BC = 3 sqrt(11)
   CA^2 = (1+2)^2 + (2-3)^2 + (3-4)^2  =  9 + 1 + 1 = 11  ->  CA =   sqrt(11)

   The LARGEST is BC = 3 sqrt(11).

   CA + AB = sqrt(11) + 2 sqrt(11) = 3 sqrt(11) = BC

   Since the sum of two of the distances equals the third,
   the points A, B, C are COLLINEAR (A lies between C and B).
```

---

### Q B2
Show that `A(5, 4, 2)`, `B(6, 2, -1)`, `C(8, -2, -7)` are collinear, and find the ratio
in which `B` divides `AC`.

**ANSWER:**
```
   AB^2 = 1 + 4 + 9   = 14   ->  AB =   sqrt(14)
   BC^2 = 4 + 16 + 36 = 56   ->  BC = 2 sqrt(14)
   AC^2 = 9 + 36 + 81 = 126  ->  AC = 3 sqrt(14)

   AB + BC = sqrt(14) + 2 sqrt(14) = 3 sqrt(14) = AC   ->  COLLINEAR.

   Since B lies between A and C,
        AB : BC = sqrt(14) : 2 sqrt(14) = 1 : 2

   B divides AC INTERNALLY in the ratio 1 : 2.

   CHECK with the section formula (m = 1 with C, n = 2 with A, m+n = 3):
       x = (1(8) + 2(5))/3 = 18/3 = 6      correct
       y = (1(-2) + 2(4))/3 = 6/3 = 2      correct
       z = (1(-7) + 2(2))/3 = -3/3 = -1    correct
```

---

### Q B3
Show that `A(3, -2, 4)`, `B(1, 1, 1)`, `C(-1, 4, -2)` are collinear.

**ANSWER:**
```
   AB^2 = (1-3)^2 + (1+2)^2 + (1-4)^2   =  4 +  9 +  9 = 22
   BC^2 = (-1-1)^2 + (4-1)^2 + (-2-1)^2 =  4 +  9 +  9 = 22
   AC^2 = (-1-3)^2 + (4+2)^2 + (-2-4)^2 = 16 + 36 + 36 = 88

   AB = BC = sqrt(22) ,   AC = sqrt(88) = 2 sqrt(22)

   AB + BC = 2 sqrt(22) = AC     ->   COLLINEAR.

   Moreover AB = BC, so B is the MIDPOINT of AC.
   Confirm: ( (3-1)/2 , (-2+4)/2 , (4-2)/2 ) = (1, 1, 1) = B.   correct
```

---

### Q B4
Show that the points `A(1, 2, 3)`, `B(2, 3, 1)`, `C(3, 1, 2)` form an equilateral
triangle. Find its centroid and its area.

**ANSWER:**
```
   AB^2 = (2-1)^2 + (3-2)^2 + (1-3)^2 = 1 + 1 + 4 = 6
   BC^2 = (3-2)^2 + (1-3)^2 + (2-1)^2 = 1 + 4 + 1 = 6
   CA^2 = (1-3)^2 + (2-1)^2 + (3-2)^2 = 4 + 1 + 1 = 6

   AB = BC = CA = sqrt(6)     ->   EQUILATERAL, side sqrt(6).

   Centroid G = ( (1+2+3)/3 , (2+3+1)/3 , (3+1+2)/3 ) = (2, 2, 2)

   Area of an equilateral triangle = (sqrt(3)/4) x side^2
                                   = (sqrt(3)/4) x 6
                                   = 3 sqrt(3) / 2   square units

   CHECK G is equidistant from all three vertices (it must be, for an equilateral
   triangle):
       GA^2 = 1 + 0 + 1 = 2 ,  GB^2 = 0 + 1 + 1 = 2 ,  GC^2 = 1 + 1 + 0 = 2.   correct
```

---

### Q B5
Show that `A(0, 7, 10)`, `B(-1, 6, 6)`, `C(-4, 9, 6)` form a right angled isosceles
triangle.

**ANSWER:**
```
   AB^2 = (-1-0)^2 + (6-7)^2 + (6-10)^2 =  1 + 1 + 16 = 18
   BC^2 = (-4+1)^2 + (9-6)^2 + (6-6)^2  =  9 + 9 +  0 = 18
   CA^2 = (0+4)^2  + (7-9)^2 + (10-6)^2 = 16 + 4 + 16 = 36

   STEP 1  AB^2 = BC^2 = 18    ->   AB = BC = 3 sqrt(2)    ->   ISOSCELES

   STEP 2  AB^2 + BC^2 = 18 + 18 = 36 = CA^2

           By the converse of Pythagoras, the angle opposite CA is 90 degrees.
           AB and BC are the two sides meeting at B.

           ->   RIGHT ANGLED at B.

   Hence ABC is a RIGHT ANGLED ISOSCELES triangle, with the right angle at B.
```

---

### Q B6
Show that the points `A(0, 4, 1)`, `B(2, 3, -1)`, `C(4, 5, 0)`, `D(2, 6, 2)` are the
vertices of a **square**.

**ANSWER:**
```
   THE FOUR SIDES
   AB^2 = (2-0)^2 + (3-4)^2 + (-1-1)^2 = 4 + 1 + 4 = 9
   BC^2 = (4-2)^2 + (5-3)^2 + (0+1)^2  = 4 + 4 + 1 = 9
   CD^2 = (2-4)^2 + (6-5)^2 + (2-0)^2  = 4 + 1 + 4 = 9
   DA^2 = (0-2)^2 + (4-6)^2 + (1-2)^2  = 4 + 4 + 1 = 9

   All four sides = 3.   (So far this only proves a RHOMBUS.)

   THE TWO DIAGONALS
   AC^2 = (4-0)^2 + (5-4)^2 + (0-1)^2 = 16 + 1 + 1 = 18
   BD^2 = (2-2)^2 + (6-3)^2 + (2+1)^2 =  0 + 9 + 9 = 18

   AC = BD = 3 sqrt(2).

   Four equal sides AND two equal diagonals  ->  ABCD is a SQUARE of side 3.

   EXTRA CHECK:  for a square, diagonal^2 = 2 x side^2  ->  2 x 9 = 18.   correct
```

---

### Q B7
`A(3, -1, 2)`, `B(1, 2, -4)`, `C(-1, 1, 2)` are three vertices of the parallelogram
`ABCD`. Find the fourth vertex `D`.

**ANSWER:**
```
   In parallelogram ABCD the diagonals are AC and BD, and they BISECT each other.

   Midpoint of AC = ( (3 - 1)/2 , (-1 + 1)/2 , (2 + 2)/2 ) = (1, 0, 2)

   Let D = (p, q, r).
   Midpoint of BD = ( (1 + p)/2 , (2 + q)/2 , (-4 + r)/2 )

   Equating:
        (1 + p)/2  = 1    ->   p =  1
        (2 + q)/2  = 0    ->   q = -2
        (-4 + r)/2 = 2    ->   r =  8

   D = (1, -2, 8)

   CHECK:  AB = B - A = (-2,  3, -6)
           DC = C - D = (-2,  3, -6)      AB = DC, so AB is parallel and equal to DC.
   Also   AB^2 = 4 + 9 + 36 = 49  ->  AB = 7  =  CD
          BC^2 = 4 + 1 + 36 = 41  =  AD^2.        Opposite sides equal.   correct
```

---

### Q B8
Show that `A(1, 2, 3)`, `B(-1, -2, -1)`, `C(2, 3, 2)`, `D(4, 7, 6)` form a
**parallelogram but not a rectangle**.

**ANSWER:**
```
   STEP 1 - is it a parallelogram?  Test the diagonals AC and BD.

   Midpoint of AC = ( (1+2)/2 , (2+3)/2 , (3+2)/2 ) = (3/2, 5/2, 5/2)
   Midpoint of BD = ( (-1+4)/2 , (-2+7)/2 , (-1+6)/2 ) = (3/2, 5/2, 5/2)

   Same midpoint  ->  the diagonals bisect each other  ->  ABCD IS A PARALLELOGRAM.
   (This also proves the four points are COPLANAR, since two crossing lines
    determine a plane.)

   STEP 2 - is it a rectangle?  A parallelogram is a rectangle only if its
            diagonals are EQUAL.

   AC^2 = (2-1)^2 + (3-2)^2 + (2-3)^2 = 1 + 1 + 1 = 3
   BD^2 = (4+1)^2 + (7+2)^2 + (6+1)^2 = 25 + 81 + 49 = 155

   AC^2 is NOT equal to BD^2.

   Hence ABCD is a parallelogram but NOT a rectangle.
```

---

### Q B9
In what ratio does the `xy`-plane divide the join of `A(-3, 4, -8)` and `B(5, -6, 4)`?
Also find the point of intersection.

**ANSWER:**
```
   The xy-plane is z = 0, so use the z-coordinates:

   Ratio = -z1 : z2 = -(-8) : 4 = 8 : 4 = 2 : 1        POSITIVE  ->  INTERNAL

   Point (m = 2 with B, n = 1 with A, m + n = 3):

   x = (2(5)  + 1(-3))/3 = (10 - 3)/3   =  7/3
   y = (2(-6) + 1(4)) /3 = (-12 + 4)/3  = -8/3
   z = (2(4)  + 1(-8))/3 = (8 - 8)/3    =  0     <- confirms it is on z = 0

   The xy-plane divides AB internally in the ratio 2 : 1, at the point
   (7/3, -8/3, 0).
```

---

### Q B10
Find the point on the `z`-axis which is equidistant from `A(1, 5, 7)` and `B(5, 1, -4)`.

**ANSWER:**
```
   A point on the z-axis is  P(0, 0, z).

   PA^2 = (0-1)^2 + (0-5)^2 + (z-7)^2 =  1 + 25 + (z-7)^2 = 26 + (z-7)^2
   PB^2 = (0-5)^2 + (0-1)^2 + (z+4)^2 = 25 +  1 + (z+4)^2 = 26 + (z+4)^2

   PA^2 = PB^2   ->   (z-7)^2 = (z+4)^2

   z^2 - 14z + 49 = z^2 + 8z + 16
        -14z + 49 = 8z + 16
               33 = 22 z
                z = 3/2

   P = (0, 0, 3/2)

   CHECK:  PA^2 = 26 + (3/2 - 7)^2 = 26 + 121/4 = 225/4   ->  PA = 15/2
           PB^2 = 26 + (3/2 + 4)^2 = 26 + 121/4 = 225/4   ->  PB = 15/2   equal. correct
```

---

### Q B11
Find the point which is equidistant from `O(0, 0, 0)`, `A(2, 0, 0)`, `B(0, 4, 0)` and
`C(0, 0, 6)`.

**ANSWER:**
```
   Let P = (x, y, z).   PO^2 = x^2 + y^2 + z^2.

   PO^2 = PA^2 :   x^2 = (x - 2)^2      ->   0 = -4x + 4    ->   x = 1
   PO^2 = PB^2 :   y^2 = (y - 4)^2      ->   0 = -8y + 16   ->   y = 2
   PO^2 = PC^2 :   z^2 = (z - 6)^2      ->   0 = -12z + 36  ->   z = 3

   P = (1, 2, 3)

   CHECK:  PO^2 = 1 + 4 + 9 = 14
           PA^2 = 1 + 4 + 9 = 14
           PB^2 = 1 + 4 + 9 = 14
           PC^2 = 1 + 4 + 9 = 14      all equal.   correct

   The common distance is sqrt(14).
```

---

### Q B12
Find the incentre of the triangle whose vertices are `A(0, 0, 0)`, `B(3, 0, 0)`,
`C(0, 4, 0)`.

**ANSWER:**
```
   First the side lengths, using the standard naming
   (a is the side OPPOSITE A, i.e. BC, and so on):

   a = BC = sqrt((0-3)^2 + (4-0)^2 + 0) = sqrt(9 + 16) = 5
   b = CA = sqrt(0 + 16 + 0)            = 4
   c = AB = sqrt(9 + 0 + 0)             = 3

   a + b + c = 12

   x = (a x1 + b x2 + c x3)/12 = (5(0) + 4(3) + 3(0))/12 = 12/12 = 1
   y = (a y1 + b y2 + c y3)/12 = (5(0) + 4(0) + 3(4))/12 = 12/12 = 1
   z = 0

   Incentre = (1, 1, 0)

   CHECK: this is a 3-4-5 right angled triangle lying flat in z = 0, right angle at
   the origin.  Its inradius is  r = (3 + 4 - 5)/2 = 1,  so the incentre must be
   1 unit from each leg  ->  (1, 1, 0).   correct
```

---

### Q B13
Find the locus of the point `P` which is equidistant from `A(1, 2, 3)` and `B(3, 2, -1)`.

**ANSWER:**
```
   Let P = (x, y, z).   PA = PB   ->   PA^2 = PB^2.

   (x-1)^2 + (y-2)^2 + (z-3)^2  =  (x-3)^2 + (y-2)^2 + (z+1)^2

   Cancel (y-2)^2 from both sides, then expand:

   x^2 - 2x + 1 + z^2 - 6z + 9  =  x^2 - 6x + 9 + z^2 + 2z + 1

           -2x - 6z + 10        =  -6x + 2z + 10
            4x - 8z             =  0
             x - 2z             =  0

   LOCUS:  x - 2z = 0     (a plane - the perpendicular bisector plane of AB)

   CHECK: the midpoint of AB is (2, 2, 1) and it must lie on the locus:
          2 - 2(1) = 0.   correct
```

---

### Q B14
Show that `A(3, 2, -4)`, `B(5, 4, -6)`, `C(9, 8, -10)` are collinear and find the ratio
in which `B` divides `AC`.

**ANSWER:**
```
   AB^2 = 4 + 4 + 4    = 12   ->  AB = 2 sqrt(3)
   BC^2 = 16 + 16 + 16 = 48   ->  BC = 4 sqrt(3)
   AC^2 = 36 + 36 + 36 = 108  ->  AC = 6 sqrt(3)

   AB + BC = 2 sqrt(3) + 4 sqrt(3) = 6 sqrt(3) = AC     ->   COLLINEAR

   AB : BC = 2 sqrt(3) : 4 sqrt(3) = 1 : 2

   B divides AC INTERNALLY in the ratio 1 : 2.

   CHECK: (1(9) + 2(3))/3 = 15/3 = 5   correct
          (1(8) + 2(2))/3 = 12/3 = 4   correct
          (1(-10) + 2(-4))/3 = -18/3 = -6  correct
```

---

### Q B15
Find the ratio in which the point `P(5, 4, -6)` divides the join of `A(3, 2, -4)` and
`B(9, 8, -10)`. Is the division internal or external?

**ANSWER:**
```
   Let the ratio be  k : 1.   Use the x-coordinate:

        (9k + 3)/(k + 1) = 5
         9k + 3 = 5k + 5
         4k = 2
         k = 1/2

   Ratio = 1/2 : 1 = 1 : 2 ,  and k is POSITIVE, so the division is INTERNAL.

   VERIFY in the other two coordinates (this is where the marks are):
        y : (8(1/2) + 2)/(3/2) = 6/(3/2) = 4        matches P
        z : (-10(1/2) - 4)/(3/2) = -9/(3/2) = -6    matches P

   P divides AB internally in the ratio 1 : 2.
```

---

### Q B16
Prove, using the section formula, that the three medians of a triangle are concurrent,
and that the point of concurrence divides each median in the ratio `2 : 1`.

**ANSWER:**
```
   Let the triangle be A(x1,y1,z1), B(x2,y2,z2), C(x3,y3,z3).

   STEP 1  D, the midpoint of BC, is
           D = ( (x2+x3)/2 , (y2+y3)/2 , (z2+z3)/2 )

   STEP 2  Take the point G that divides the median AD in the ratio 2 : 1 from A.
           Here m = 2 (with D) and n = 1 (with A), m + n = 3.

           x-coordinate of G  =  ( 2 x (x2+x3)/2  +  1 x x1 ) / 3
                              =  ( x2 + x3 + x1 ) / 3

           Similarly           y = (y1 + y2 + y3)/3 ,  z = (z1 + z2 + z3)/3

           So  G = ( (x1+x2+x3)/3 , (y1+y2+y3)/3 , (z1+z2+z3)/3 )

   STEP 3  This expression is completely SYMMETRIC in A, B and C.
           If we had started from the median BE (E the midpoint of CA), or from
           CF (F the midpoint of AB), the identical calculation would give the
           SAME point G.

   STEP 4  Therefore all three medians pass through G.
           The three medians are CONCURRENT, and G divides each of them in the
           ratio 2 : 1 from the vertex.

           G is called the CENTROID of the triangle.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# ===============================================================

> **AN HONEST WARNING — READ THIS.**
>
> In the AP Inter Maths IB paper, **Section C questions are not set from this chapter.**
> The 7-mark long answers come from Locus, The Straight Line, Pair of Straight Lines,
> Differentiation, Tangents & Normals, Maxima & Minima and Rate Measure.
>
> So the questions below are **NOT** claimed to be past Section C questions. They are
> **revision-grade combined problems**, built by stitching together three or four of
> the Section A / Section B skills. Their real job is:
>
> - to give you a full workout on one set of points, so the chapter locks in, and
> - to prepare you for the 7-mark questions in Chapter 6 and Chapter 7, which DO exist
>   and which use exactly these formulas.
>
> Treat each one as "four small questions in a row". Do not expect to see them in the
> board paper in this form.

---

### Q C1 — a complete study of one triangle (revision-grade)

For the points `A(1, 2, 3)`, `B(2, 3, 1)`, `C(3, 1, 2)`:
(i) find the lengths of all three sides and name the type of triangle;
(ii) find the centroid;
(iii) find the incentre;
(iv) show that the centroid is equidistant from the three vertices and find that
distance;
(v) find the midpoint of `BC` and the length of the median from `A`.

**ANSWER (with the mark split):**
```
   (i)  SIDES  [2 marks]
        AB^2 = 1 + 1 + 4 = 6 ,  BC^2 = 1 + 4 + 1 = 6 ,  CA^2 = 4 + 1 + 1 = 6
        AB = BC = CA = sqrt(6)      ->  EQUILATERAL triangle of side sqrt(6).

   (ii) CENTROID  [1 mark]
        G = ( (1+2+3)/3 , (2+3+1)/3 , (3+1+2)/3 ) = (2, 2, 2)

   (iii) INCENTRE  [1 mark]
        a = BC = b = CA = c = AB = sqrt(6), so all three weights are equal
        and the incentre formula collapses to the centroid:
        I = (2, 2, 2)
        (For an equilateral triangle the incentre, centroid, circumcentre and
         orthocentre are all the same point.)

   (iv) G EQUIDISTANT  [2 marks]
        GA^2 = (1-2)^2 + (2-2)^2 + (3-2)^2 = 1 + 0 + 1 = 2
        GB^2 = (2-2)^2 + (3-2)^2 + (1-2)^2 = 0 + 1 + 1 = 2
        GC^2 = (3-2)^2 + (1-2)^2 + (2-2)^2 = 1 + 1 + 0 = 2
        GA = GB = GC = sqrt(2)

        SANITY CHECK: for an equilateral triangle of side s, the distance from
        the centroid to a vertex is s / sqrt(3) = sqrt(6)/sqrt(3) = sqrt(2).  correct

   (v)  MEDIAN FROM A  [1 mark]
        Midpoint of BC = D = ( (2+3)/2 , (3+1)/2 , (1+2)/2 ) = (5/2, 2, 3/2)
        AD^2 = (5/2 - 1)^2 + (2-2)^2 + (3/2 - 3)^2 = 9/4 + 0 + 9/4 = 18/4 = 9/2
        AD = 3/sqrt(2) = 3 sqrt(2)/2

        CHECK: for an equilateral triangle the median is (sqrt(3)/2) x side
               = (sqrt 3 / 2) x sqrt(6) = sqrt(18)/2 = 3 sqrt(2)/2.   correct
        CHECK: AG : GD should be 2 : 1.  AG = sqrt 2 ; AD = 3 sqrt2 / 2 ;
               GD = AD - AG = 3 sqrt2/2 - sqrt2 = sqrt2/2.
               AG : GD = sqrt2 : sqrt2/2 = 2 : 1.   correct
```

---

### Q C2 — a complete study of one quadrilateral (revision-grade)

For `A(0, 4, 1)`, `B(2, 3, -1)`, `C(4, 5, 0)`, `D(2, 6, 2)`:
(i) prove that `ABCD` is a square;
(ii) find its perimeter and area;
(iii) find the centre of the square;
(iv) prove that the four points are coplanar;
(v) find the length of the diagonal and verify `diagonal^2 = 2 x side^2`.

**ANSWER:**
```
   (i)  SIDES AND DIAGONALS  [3 marks]
        AB^2 = 4 + 1 + 4 = 9        BC^2 = 4 + 4 + 1 = 9
        CD^2 = 4 + 1 + 4 = 9        DA^2 = 4 + 4 + 1 = 9      all sides = 3

        AC^2 = 16 + 1 + 1 = 18      BD^2 = 0 + 9 + 9 = 18     both diagonals equal

        Four equal sides AND equal diagonals  ->  ABCD is a SQUARE.

   (ii) PERIMETER AND AREA  [1 mark]
        Perimeter = 4 x 3 = 12 units
        Area      = 3^2   = 9 square units

   (iii) CENTRE  [1 mark]
        The centre is the common midpoint of the diagonals.
        Midpoint of AC = ( (0+4)/2 , (4+5)/2 , (1+0)/2 ) = (2, 9/2, 1/2)
        Midpoint of BD = ( (2+2)/2 , (3+6)/2 , (-1+2)/2 ) = (2, 9/2, 1/2)
        Same point  ->  centre = (2, 9/2, 1/2)

   (iv) COPLANAR  [1 mark]
        The diagonals AC and BD meet at (2, 9/2, 1/2). Two lines that intersect
        determine exactly one plane, and A, C lie on the first while B, D lie on
        the second. Hence all four points lie in that one plane -> COPLANAR.

   (v)  DIAGONAL  [1 mark]
        diagonal = sqrt(18) = 3 sqrt(2)
        2 x side^2 = 2 x 9 = 18 = diagonal^2.   correct
```

---

### Q C3 — the section formula, every version, on one segment (revision-grade)

For `A(2, -3, 4)` and `B(-1, 2, 1)`:
(i) find the midpoint;
(ii) find the point dividing `AB` internally in the ratio `2 : 1`;
(iii) find the point dividing `AB` externally in the ratio `2 : 1`;
(iv) find the ratio in which each of the three coordinate planes divides `AB`, and the
three points where `AB` (extended if necessary) meets them.

**ANSWER:**
```
   (i)  MIDPOINT  [1 mark]
        M = ( (2-1)/2 , (-3+2)/2 , (4+1)/2 ) = (1/2, -1/2, 5/2)

   (ii) INTERNAL 2 : 1  [1 mark]
        m = 2 (with B), n = 1 (with A), m + n = 3
        x = (2(-1) + 1(2))/3 = 0
        y = (2(2) + 1(-3))/3 = 1/3
        z = (2(1) + 1(4))/3  = 2
        P = (0, 1/3, 2)

   (iii) EXTERNAL 2 : 1  [1 mark]
        m - n = 1
        x = (2(-1) - 1(2))/1 = -4
        y = (2(2) - 1(-3))/1 =  7
        z = (2(1) - 1(4))/1  = -2
        Q = (-4, 7, -2)
        CHECK: AB = (-3, 5, -3) ,  AQ = (-6, 10, -6) = 2 x AB.   correct

   (iv) THE THREE COORDINATE PLANES  [4 marks]

        yz-plane (x = 0):  ratio = -x1 : x2 = -2 : -1 = 2 : 1     INTERNAL
             Point = (0, 1/3, 2)     [the same point as part (ii) - a nice check]

        zx-plane (y = 0):  ratio = -y1 : y2 = 3 : 2               INTERNAL
             m = 3, n = 2, m + n = 5
             x = (3(-1) + 2(2))/5  = 1/5
             y = (3(2)  + 2(-3))/5 = 0        confirms y = 0
             z = (3(1)  + 2(4))/5  = 11/5
             Point = (1/5, 0, 11/5)

        xy-plane (z = 0):  ratio = -z1 : z2 = -4 : 1              EXTERNAL 4 : 1
             m = -4, n = 1, m + n = -3
             x = (-4(-1) + 1(2))/(-3) = 6/(-3)   = -2
             y = (-4(2)  + 1(-3))/(-3) = -11/-3  = 11/3
             z = (-4(1)  + 1(4))/(-3) = 0/(-3)   = 0    confirms z = 0
             Point = (-2, 11/3, 0)

        FINAL CHECK - all three points must be collinear with A and B.
        Direction of AB = (-3, 5, -3).
           A -> (0, 1/3, 2)     = (-2, 10/3, -2)   = (2/3)(-3, 5, -3)     yes
           A -> (1/5, 0, 11/5)  = (-9/5, 3, -9/5)  = (3/5)(-3, 5, -3)     yes
           A -> (-2, 11/3, 0)   = (-4, 20/3, -4)   = (4/3)(-3, 5, -3)     yes
        All are multiples of the same direction, so all lie on the line AB.  correct
```

---

### Q C4 — the tetrahedron (revision-grade)

For the tetrahedron with vertices `A(0, 0, 0)`, `B(4, 0, 0)`, `C(0, 4, 0)`, `D(0, 0, 4)`:
(i) find all six edge lengths;
(ii) find the centroid `G`;
(iii) find the centroid `G1` of the face `BCD`;
(iv) verify that `G` divides `AG1` in the ratio `3 : 1`;
(v) find the point equidistant from all four vertices.

**ANSWER:**
```
   (i)  THE SIX EDGES  [2 marks]
        AB = 4 ,  AC = 4 ,  AD = 4          (each along one axis)
        BC^2 = 16 + 16 + 0 = 32  ->  BC = 4 sqrt(2)
        BD^2 = 16 + 0 + 16 = 32  ->  BD = 4 sqrt(2)
        CD^2 = 0 + 16 + 16 = 32  ->  CD = 4 sqrt(2)

        Three edges of length 4 meeting at A, and the opposite face BCD is an
        equilateral triangle of side 4 sqrt(2).

   (ii) CENTROID OF THE TETRAHEDRON  [1 mark]
        G = ( (0+4+0+0)/4 , (0+0+4+0)/4 , (0+0+0+4)/4 ) = (1, 1, 1)

   (iii) CENTROID OF FACE BCD  [1 mark]
        G1 = ( (4+0+0)/3 , (0+4+0)/3 , (0+0+4)/3 ) = (4/3, 4/3, 4/3)

   (iv) G DIVIDES A G1 IN 3 : 1  [2 marks]
        Using the section formula with m = 3 (with G1) and n = 1 (with A):
             x = (3(4/3) + 1(0))/4 = 4/4 = 1
             y = (3(4/3) + 1(0))/4 = 1
             z = (3(4/3) + 1(0))/4 = 1
        This is exactly G = (1,1,1).   correct

        Check by lengths:  AG  = sqrt(1+1+1)          = sqrt(3)
                           GG1 = sqrt(3 x (1/3)^2)    = sqrt(1/3) = sqrt(3)/3
                           AG : GG1 = sqrt3 : sqrt3/3 = 3 : 1.   correct

   (v)  POINT EQUIDISTANT FROM ALL FOUR VERTICES  [1 mark]
        Let P = (x, y, z) with PA^2 = PB^2 = PC^2 = PD^2, taking A as the origin:
             x^2 = (x-4)^2   ->  8x = 16  ->  x = 2
             y^2 = (y-4)^2   ->  y = 2
             z^2 = (z-4)^2   ->  z = 2
        P = (2, 2, 2)
        CHECK: PA^2 = 4+4+4 = 12 ; PB^2 = 4+4+4 = 12 ; PC^2 = 12 ; PD^2 = 12.  equal.
        Common distance = 2 sqrt(3).

        NOTE that this circumcentre (2,2,2) is NOT the same as the centroid (1,1,1).
        For a tetrahedron they only coincide when it is regular, and this one is not.
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| **1** | Distance between two points / distance from the origin | A | very high |
| **2** | Centroid of a triangle or of a tetrahedron; find the missing vertex from the centroid | A | very high |
| **3** | Ratio in which a coordinate plane divides `AB` | A | high |
| **4** | Section formula — find the dividing point (internal or external) | A | high |
| **5** | Distance of a point from an axis or a coordinate plane | A | high |
| **6** | Octant of a given point | A | medium-high |
| **7** | Projections / images of a point in an axis, a plane or the origin | A | medium-high |
| **8** | Find the unknown coordinate when the distance is given | A | medium |
| **9** | Show three points are collinear | A or B | medium |
| **10** | Show a triangle is equilateral / isosceles / right angled | B | medium |
| **11** | Show four points form a square / rhombus / parallelogram | B | medium |
| **12** | Find the point on an axis equidistant from two given points | B | medium |
| **13** | Fourth vertex of a parallelogram | B | medium |
| **14** | Midpoint questions, translation of axes | A | low-medium |
| **15** | Incentre of a triangle | B | low |
| **16** | Locus `PA = PB` in space | B | low |

```
  +-------------------------------------------------------------------------+
  |  THE THREE-LINE EXAM PLAN FOR THIS CHAPTER                              |
  |                                                                         |
  |  1.  Know the distance formula perfectly, including the z term.         |
  |  2.  Know "m with the second, n with the first", and the plane-ratio    |
  |      shortcut  -x1 : x2 .                                               |
  |  3.  Know that a triangle centroid divides by 3 and a tetrahedron       |
  |      centroid divides by 4.                                             |
  |                                                                         |
  |  Those three things cover roughly EIGHTY PERCENT of everything this     |
  |  chapter has ever been asked.                                           |
  +-------------------------------------------------------------------------+
```
