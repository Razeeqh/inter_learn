# The Plane — Mind Map

**Maths 1B · Chapter 7 · The smallest chapter in IB with the best marks-per-hour**
Almost every year: 1 very short answer (2M), often a second one, sometimes a short answer (4M).

> **Read this first.** This chapter is TINY. There are about eight formulas in total and
> five of them are one line long. A weak student can finish this whole chapter in two
> evenings and walk into the exam with 2-6 nearly guaranteed marks. Do not skip it because
> it "sounds like 3D geometry". It is the easiest chapter in the whole of Maths IB.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                            T H E   P L A N E
                                    |
                     ax + by + cz + d = 0
              (a, b, c) = DIRECTION RATIOS OF THE NORMAL
                                    |
   +--------------+--------------+--+-----------+---------------+
   |              |              |              |               |
 FORMS OF      DISTANCE       ANGLES        POINT vs        LINE  &
 THE PLANE     PROBLEMS       PROBLEMS       PLANE          PLANE
   |              |              |              |               |
General       Point to      Plane vs       Same side /     Angle between
ax+by+cz+d=0  plane         plane          opposite side   line & plane
   |          |ax1+by1+     cos th =       (check the      sin th = |a.l+b.m
Normal form    cz1+d|       (a1a2+b1b2     SIGN of         +c.n| / (|n||d|)
lx+my+nz = p   ---------     +c1c2)        ax1+by1+            |
l^2+m^2+n^2=1  sqrt(a^2+     ---------     cz1+d)          PARALLEL:
p = dist from  b^2+c^2)     |n1||n2|           |           a.l+b.m+c.n = 0
    origin        |             |          Ratio in            |
   |          Between       PARALLEL       which plane     LIES IN:
Intercept     parallel      a1/a2 = b1/b2  cuts AB         above  AND
x/a+y/b+z/c=1 planes        = c1/c2        = -(P at A)     point on plane
   |          |d1 - d2|         |            : (P at B)        |
Through a     ---------     PERPENDICULAR       |           Point of
point +       sqrt(a^2+     a1a2+b1b2       Foot of        intersection
normal        b^2+c^2)      +c1c2 = 0       perpendicular  (put x,y,z of
a(x-x1)+...       |             |           & IMAGE        line into plane,
= 0           Foot from     Bisector        of a point     solve for t)
   |          origin        planes              |
Through 3     to plane      P1/|n1| =      x - x1     -(ax1+by1+cz1+d)
POINTS            |         +- P2/|n2|     ------  =  -------------------
(determinant) Volume of                       a         a^2 + b^2 + c^2
   |          tetrahedron                  (= k, then foot = x1 + ak,
Coordinate    = |abc| / 6                   image = x1 + 2ak)
planes
x=0, y=0, z=0                    FAMILY OF PLANES
   |                          P1 + k P2 = 0
Parallel to them              (through the line of intersection
x=k, y=k, z=k                  of two given planes; find k from
                               one extra condition)
```

---

## THE 60-SECOND VERSION

A **plane** is a flat surface that goes on for ever in all directions — a tabletop with no
edges. In 3D coordinates every plane is described by ONE equation of the first degree:

```
        a x  +  b y  +  c z  +  d  =  0
        ^^^^^^^^^^^^^
        the three numbers a, b, c are NOT points on the plane.
        They are the direction ratios of the NORMAL -
        the arrow that sticks straight out of the plane at 90 degrees.
```

That single fact is 80% of the chapter. Once you can read `(a, b, c)` off the equation as
"the normal", every other question becomes a question about **two arrows**, and you already
know how to handle arrows from Chapter 6 (Direction Cosines) and Chapter 5 (Vectors).

| If the question asks about ... | You are really being asked about ... |
|---|---|
| angle between two planes | angle between their two normals |
| planes parallel | normals proportional |
| planes perpendicular | normals have dot product 0 |
| line parallel to a plane | line direction is perpendicular to the normal |
| foot / image of a point | walking along the normal from that point |
| distance from a point | how far you walk along the normal to hit the plane |

**Everything is the normal. Learn to spot the normal in one second.**

---

## WHERE THE MARKS ARE (AP Inter, Maths IB)

| Topic | Section | Marks |
|-------|---------|-------|
| Direction cosines / ratios of the normal to a given plane | A | 2 |
| Reduce a plane to NORMAL form; distance of plane from origin | A | 2 |
| Intercepts of a plane on the axes / intercept form | A | 2 |
| Equation of a plane through a point with a given normal | A | 2 |
| Distance from a point to a plane | A | 2 |
| Distance between two parallel planes | A | 2 |
| Angle between two planes | A or B | 2 or 4 |
| Find k so that two planes are perpendicular / parallel | A | 2 |
| Equation of the plane through THREE points | B | 4 |
| Foot of perpendicular / image of a point in a plane | B | 4 |
| Plane through the line of intersection of two planes | B | 4 |
| Ratio in which a plane divides a segment | A or B | 2 or 4 |

**Realistic total from this one chapter: 2 to 6 marks out of 75.**

Small — but they are the CHEAPEST marks in the paper. A 2-mark question here takes about
90 seconds. Compare that with a 7-mark question that takes 15 minutes. Per minute of exam
time, this chapter pays better than any long answer in IB.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What a plane is + the general equation ax + by + cz + d = 0
           and "(a, b, c) is the NORMAL"
              |
  STEP 2   Plane through a point with a given normal
           a(x - x1) + b(y - y1) + c(z - z1) = 0
              |
     +--------+--------+------------------+
     |                 |                  |
  STEP 3          STEP 4             STEP 5
  NORMAL form     INTERCEPT form     Coordinate planes
  lx+my+nz = p    x/a + y/b + z/c=1  x=0, y=0, z=0
     |                 |                  |
     +--------+--------+------------------+
              |
  STEP 6   DISTANCE from a point to a plane
           |a x1 + b y1 + c z1 + d| / sqrt(a^2 + b^2 + c^2)
              |
     +--------+---------------+
     |                        |
  STEP 7                  STEP 8
  Distance between        Sides of a plane
  parallel planes         (sign test) + ratio
     |                        |
  STEP 9   ANGLE between two planes (normals)
           -> parallel condition, perpendicular condition
              |
  STEP 10  FOOT of perpendicular  ->  IMAGE of a point
              |
  STEP 11  Plane through THREE points (determinant)
              |
  STEP 12  LINE and PLANE: angle, parallel, lies in, intersection point
              |
  STEP 13  FAMILY of planes  P1 + k P2 = 0
              |
  STEP 14  Bisector planes  (last, least asked)
```

---

## THE KEY BOX — the two formulas that unlock most of the chapter

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PLANE :   a x  +  b y  +  c z  +  d  =  0                        |
  |                                                                    |
  |   NORMAL of that plane  =  ( a , b , c )                           |
  |                                                                    |
  |--------------------------------------------------------------------|
  |                                                                    |
  |   DISTANCE from the point P(x1, y1, z1) to that plane:             |
  |                                                                    |
  |                  | a x1 + b y1 + c z1 + d |                        |
  |          D  =   ----------------------------                       |
  |                    sqrt(a^2 + b^2 + c^2)                           |
  |                                                                    |
  +--------------------------------------------------------------------+

  Nickname the top line  "P at the point"  -  just plug the point into the
  left-hand side of the plane.  Nearly every question in this chapter needs
  that number:

        distance          ->  |P at the point| / sqrt(a^2+b^2+c^2)
        which side        ->  the SIGN of  P at the point
        foot / image      ->  k = -(P at the point) / (a^2+b^2+c^2)
        ratio A:B cut     ->  -(P at A) : (P at B)
        point lies on it  ->  P at the point = 0
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning (1 hour)** — Read `01-concepts.md` TOPIC 1 to TOPIC 5.
Learn only this: `(a, b, c)` is the normal; how to write the plane through a point;
normal form; intercept form. Do six tiny questions of each type. These are 2-mark answers.

**Day 1 evening (1 hour)** — The distance formula. Do ten of them, including:
point to plane, origin to plane, distance between two parallel planes.
The whole hour is one formula used ten times.

**Day 2 morning (1 hour)** — Angle between two planes, plus the parallel and
perpendicular conditions and the "find k" questions. Then the plane through three points
(the determinant). Write the determinant grid out five times until the pattern is automatic.

**Day 2 evening (1 hour)** — Foot of the perpendicular and image of a point (one recipe,
two answers), then the family of planes `P1 + k P2 = 0`. Finish by copying
`02-formulae.md` by hand.

Two evenings. Two to six marks. Nothing else in Maths IB is that cheap.
