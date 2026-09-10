# Three Dimensional Coordinates — Mind Map

**Maths 1B · Chapter 5 · The easiest chapter in the whole of Maths IB**
Almost every year: 1 very short answer (2M), often a second one, and now and then a
short answer (4M).

> **Read this first — honestly.**
> This chapter will NOT give you a 7-mark long answer. It is a **Section A + Section B**
> chapter. But that is exactly why a weak student should learn it FIRST. There are only
> three real formulas in it, all three are one line long, and they are the same formulas
> you already used in 2D with one extra letter `z` stuck on the end.
>
> Two evenings of work here buys you **2 to 6 marks that almost nobody loses** — and those
> marks are the difference between 24 and 30. You need 26 to pass.
>
> It is also the **foundation** for Chapter 6 (Direction Cosines) and Chapter 7 (The Plane).
> If you skip this one, those two collapse.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
              T H R E E   D I M E N S I O N A L   C O O R D I N A T E S
                                       |
                              A point is P(x, y, z)
                          x = how far along,  y = how far across,
                                  z = how far UP
                                       |
   +-------------+-------------+-------+-------+-------------+-------------+
   |             |             |               |             |             |
 THE FRAME   ONE POINT     TWO POINTS      THREE POINTS   FOUR POINTS   MOVING THE
   |             |             |               |             |            AXES
 3 AXES      Projections   DISTANCE        Collinear?     Centroid of      |
 x, y, z     on axes:      FORMULA         AB + BC = AC   TETRAHEDRON   Translation
   |         (x,0,0)          |                 |          sum / 4      X = x - h
 3 PLANES    (0,y,0)      d = sqrt(            Type of        |         Y = y - k
 xy : z=0    (0,0,z)       (x2-x1)^2 +       TRIANGLE     4th vertex    Z = z - l
 yz : x=0        |         (y2-y1)^2 +          |         of a PARA-        |
 zx : y=0    Projections    (z2-z1)^2 )     equilateral   LLELOGRAM    (distances
   |         on planes:         |           isosceles     (diagonals    do NOT
 8 OCTANTS   (x,y,0)        SECTION         right angled   bisect)      change)
 signs of    (0,y,z)        FORMULA             |             |
 x, y, z     (x,0,z)            |            SQUARE /     Coplanar?
   |             |          internal        RHOMBUS       (parallelogram
 EQUATIONS   IMAGES         m:n                 |          test)
 of planes   (reflections)      |            CENTROID
 z = 0           |          external         sum / 3
 z = c       in a PLANE     m:n                 |
 (parallel)  in an AXIS         |            INCENTRE
             at the ORIGIN  MIDPOINT         (aA+bB+cC)
                 |          (average)        / (a+b+c)
             DISTANCES          |
             from origin    Which RATIO
             from an axis   does a PLANE
             from a plane   cut AB in?
                            yz : -x1 : x2
                            zx : -y1 : y2
                            xy : -z1 : z2
```

---

## THE PICTURE YOU MUST BE ABLE TO DRAW IN 10 SECONDS

```
                          z
                          |
                          |
                          |        . P(x, y, z)
                          |       /|
                          |      / |
                          |     /  |  z  (height above the floor)
                          |    /   |
                          |   /    |
              O           |  /     |
              +-----------+-/------+---------------- y
                         /|/      /
                        / |      /  y
                       /  |     /
                      /   +----+   <- (x, y, 0) is the SHADOW of P
                     /   x         on the floor
                    x
```

Think of a room:

| Coordinate | What it means in the room |
|---|---|
| `x` | how far you walk along the front wall |
| `y` | how far you walk into the room |
| `z` | how high above the FLOOR you are |
| the floor | the **xy-plane**, where `z = 0` |
| the left wall | the **yz-plane**, where `x = 0` |
| the front wall | the **zx-plane**, where `y = 0` |
| the corner where all three meet | the **ORIGIN** `O(0, 0, 0)` |

---

## THE 60-SECOND VERSION

Everything you learned in 2D still works. You just carry a third letter along.

```
  2D  (what you already know)          3D  (this chapter)
  -----------------------------        -------------------------------------
  P(x, y)                              P(x, y, z)

  d = sqrt((x2-x1)^2 + (y2-y1)^2)      d = sqrt((x2-x1)^2 + (y2-y1)^2
                                                          + (z2-z1)^2)

  ( (mx2+nx1)/(m+n) ,                  ( (mx2+nx1)/(m+n) ,
    (my2+ny1)/(m+n) )                    (my2+ny1)/(m+n) ,
                                         (mz2+nz1)/(m+n) )

  centroid = ( sum x / 3 ,             centroid = ( sum x / 3 ,
               sum y / 3 )                          sum y / 3 ,
                                                    sum z / 3 )
```

**That is genuinely it.** Add `z`. Everything else is the same arithmetic you did in
Chapter 1 and Chapter 3 of this very book.

The only genuinely NEW ideas are:

1. There are now **three planes** (`xy`, `yz`, `zx`) and **eight octants** instead of four
   quadrants.
2. A point has a **projection** and an **image** in each axis and each plane — this is
   almost pure memory work and it is a free 2 marks.
3. The **tetrahedron** (a triangular pyramid, 4 corners) has a centroid = sum / 4.

---

## WHERE THE MARKS ARE (AP Inter, Maths IB) — the honest version

| Topic | Section | Marks | How often |
|-------|---------|-------|-----------|
| Distance between two points | A | 2 | very often |
| Distance of a point from origin / an axis / a plane | A | 2 | often |
| Octant of a point; projections; images | A | 2 | often |
| Midpoint / section formula (find the point) | A | 2 | often |
| Ratio in which a coordinate plane divides AB | A | 2 | often |
| Centroid of a triangle / of a tetrahedron | A | 2 | often |
| Find the 4th vertex when the centroid is given | A | 2 | often |
| Show three points are collinear | A or B | 2 or 4 | often |
| Show a triangle is equilateral / isosceles / right angled | B | 4 | sometimes |
| Show four points form a square / rhombus / parallelogram | B | 4 | sometimes |
| Find the point equidistant from given points | B | 4 | sometimes |
| Locus-type: `PA^2 + PB^2 = k` in space | B | 4 | rarely |

```
  +--------------------------------------------------------------------+
  |  REALISTIC TOTAL FROM THIS CHAPTER                                  |
  |                                                                     |
  |    Section A  ->  1 question, sometimes 2      =  2 to 4 marks      |
  |    Section B  ->  1 question in some years     =  0 to 4 marks      |
  |    Section C  ->  essentially NEVER            =  0 marks           |
  |                                                                     |
  |    So:  2 marks near-guaranteed, up to 6 in a good year.            |
  |                                                                     |
  |  Do NOT be disappointed by that number. Read the next line.         |
  +--------------------------------------------------------------------+
```

**Why it is still worth more than 6 marks:** this chapter is the doorway to

```
   Ch 5  THREE DIMENSIONAL COORDINATES   (you are here)
            |
            +---->  Ch 6  DIRECTION COSINES AND DIRECTION RATIOS   ~ 4-6 marks
                            |
                            +---->  Ch 7  THE PLANE                ~ 2-6 marks
```

Those three chapters together are **8 to 16 marks of Maths IB**, and all three are short.
Chapter 5 is the cheapest entry ticket in the syllabus.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   The three axes, the three planes, the eight octants
              |   (30 minutes. Pure picture + one table.)
              v
  STEP 2   Coordinates of a point.  PROJECTIONS and IMAGES.
              |   (Free 2 marks. It is a memory table, nothing else.)
              v
  STEP 3   Distance from the ORIGIN, from an AXIS, from a PLANE
              |   sqrt(x^2+y^2+z^2)  /  sqrt(y^2+z^2)  /  |z|
              v
  STEP 4   ***  THE DISTANCE FORMULA  ***
              |   Everything below this line is built on it.
              |
     +--------+-----------------+------------------+
     |                          |                  |
  STEP 5                     STEP 6            STEP 7
  Collinear points           Type of           Equidistant point /
  AB + BC = AC               triangle          locus problems
     |                          |                  |
     +--------+-----------------+------------------+
              |
              v
  STEP 8   ***  THE SECTION FORMULA  ***  (internal, external, midpoint)
              |
     +--------+-----------------+------------------+
     |                          |                  |
  STEP 9                    STEP 10            STEP 11
  Ratio in which a          Centroid of a      4th vertex of a
  coordinate plane          triangle and of    PARALLELOGRAM /
  divides AB                a TETRAHEDRON      coplanar points
                                |
                            Incentre
              |
              v
  STEP 12  Translation of axes in 3D    (X = x - h, Y = y - k, Z = z - l)
              |
              v
  STEP 13  Equations of the coordinate planes  ->  leads into Chapter 7
```

---

## THE KEY BOX — these two formulas unlock 90% of the chapter

```
  +===================================================================+
  |                                                                   |
  |   1.  DISTANCE BETWEEN  A(x1, y1, z1)  AND  B(x2, y2, z2)         |
  |                                                                   |
  |         AB = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )            |
  |                                                                   |
  |       Distance from the ORIGIN is the special case x1=y1=z1=0 :   |
  |                                                                   |
  |         OP = sqrt( x^2 + y^2 + z^2 )                              |
  |                                                                   |
  +===================================================================+
  |                                                                   |
  |   2.  POINT DIVIDING  AB  IN THE RATIO  m : n                     |
  |                                                                   |
  |       INTERNALLY        ( m x2 + n x1     m y2 + n y1             |
  |                           -----------  ,  -----------  ,          |
  |                             m + n             m + n               |
  |                                                                   |
  |                                            m z2 + n z1 )          |
  |                                            -----------            |
  |                                              m + n                |
  |                                                                   |
  |       EXTERNALLY        same thing with every  +  turned into  -  |
  |                         ( m x2 - n x1 ) / ( m - n )   etc.        |
  |                                                                   |
  |       MIDPOINT          m = n = 1  ->  ( (x1+x2)/2 ,              |
  |                                          (y1+y2)/2 ,              |
  |                                          (z1+z2)/2 )              |
  |                                                                   |
  +===================================================================+

  MEMORY HOOK for the section formula:
      the m sits with the SECOND point,  the n sits with the FIRST point.
      "m goes to 2, n goes to 1."   Cross over. That is the whole trick.
```

---

## THE THREE MEMORY TABLES YOU MUST OWN

```
  +--------------------+---------------------+--------------------------+
  |  For P(x, y, z)    |  PROJECTION on it   |  IMAGE (reflection) in it|
  +--------------------+---------------------+--------------------------+
  |  x - axis          |  (x,  0,  0)        |  ( x, -y, -z)            |
  |  y - axis          |  (0,  y,  0)        |  (-x,  y, -z)            |
  |  z - axis          |  (0,  0,  z)        |  (-x, -y,  z)            |
  +--------------------+---------------------+--------------------------+
  |  xy - plane (z=0)  |  (x,  y,  0)        |  ( x,  y, -z)            |
  |  yz - plane (x=0)  |  (0,  y,  z)        |  (-x,  y,  z)            |
  |  zx - plane (y=0)  |  (x,  0,  z)        |  ( x, -y,  z)            |
  +--------------------+---------------------+--------------------------+
  |  the ORIGIN        |  (0,  0,  0)        |  (-x, -y, -z)            |
  +--------------------+---------------------+--------------------------+

  THE ONE-LINE RULE:
     PROJECTION  ->  KILL the coordinates that do not belong  (set them 0)
     IMAGE       ->  FLIP the sign of the coordinates that do not belong

     "Project = make them ZERO.   Reflect = make them NEGATIVE."
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 — morning (1.5 hours).**
Draw the axes picture ten times on paper until you can do it without looking.
Learn the octant sign table. Learn the projection / image table above — cover it and
write it out from memory three times. That alone is a whole 2-mark question.

**Day 1 — evening (1.5 hours).**
The distance formula. Do 8 straight "find the distance between A and B" sums.
Then do 3 "distance from the origin / from the y-axis / from the xy-plane" sums.
Then do 2 collinearity sums (`AB + BC = AC`) and 2 triangle-type sums.

**Day 2 — morning (1.5 hours).**
The section formula. Do 4 internal-division sums, 2 external, 3 midpoints.
Then the plane-ratio shortcut: `yz` cuts `AB` in `-x1 : x2`. Do 3 of those.

**Day 2 — evening (1 hour).**
Centroid of a triangle (÷3), centroid of a tetrahedron (÷4), the "find the 4th vertex"
question in both its forms (centroid given / parallelogram). Then read
`05-question-patterns.md` once from top to bottom.

```
  +------------------------------------------------------------------+
  |  After those 5.5 hours you should be able to walk into the exam   |
  |  and take the Section A question from this chapter in under two   |
  |  minutes, without hesitating.                                     |
  |                                                                   |
  |  That is the best marks-per-hour trade in the whole of Maths IB.  |
  +------------------------------------------------------------------+
```

---

## THE FIVE THINGS THAT LOSE MARKS HERE

```
  1.  Forgetting the third term (z2 - z1)^2 in the distance formula.
  2.  Writing the section formula upside down (n with x2 instead of x1).
  3.  Confusing PROJECTION (make it 0) with IMAGE (make it negative).
  4.  Distance from the x-AXIS is sqrt(y^2 + z^2)  -  you DROP x, you do not keep it.
      Distance from the xy-PLANE is just |z|.
  5.  Not writing "hence the points are collinear" / "hence it is a right angled
      triangle" at the end. The conclusion sentence carries a mark.
```
