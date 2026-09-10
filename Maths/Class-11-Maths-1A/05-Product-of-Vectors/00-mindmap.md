# Product of Vectors — Mind Map

**Maths 1A · Chapter 5 · One of the most reliable scoring chapters in IA**
Every year this chapter supplies **one 7-mark long answer** in Section C plus
**two or three 2-mark questions** in Section A. Nothing here needs cleverness —
it needs one determinant and one square root, done carefully.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                       P R O D U C T   O F   V E C T O R S
                                      |
        +----------------+------------+------------+----------------+
        |                |                         |                |
   DOT PRODUCT      CROSS PRODUCT         SCALAR TRIPLE      VECTOR TRIPLE
     a . b             a x b                 [a b c]           a x (b x c)
        |                |                         |                |
   ANSWER IS A      ANSWER IS A             ANSWER IS A       ANSWER IS A
    NUMBER            VECTOR                  NUMBER            VECTOR
        |                |                         |                |
   |a||b|cos th     |a||b|sin th n           a . (b x c)      (a.c)b - (a.b)c
        |                |                         |                |
   a1b1+a2b2+a3b3   3x3 determinant         3x3 determinant   "BAC minus CAB"
        |                |                         |                |
        |                |                         |            Not associative
   +----+----+      +----+----+             +------+------+
   |         |      |         |             |             |
 a.b = 0   ANGLE  a x b = 0  AREA        VOLUME      COPLANARITY
 means     cos th  means      |             |             |
 PERPEN-   = a.b   PARALLEL   |         parallel-    [a b c] = 0
 DICULAR   -----   (collinear)|          epiped           |
           |a||b|            |         = |[a b c]|   4 points in one
             |               |              |         plane => 0
        PROJECTION     +-----+-----+   tetrahedron
        of a on b      |           |   = (1/6)|[a b c]|
        = (a.b)/|b| parallelo-  triangle
             |        gram      (1/2)|a x b|
        COMPONENTS   |a x b|
        along b and      |
        perp to b    UNIT VECTOR PERPENDICULAR
             |       = +/- (a x b) / |a x b|
        WORK DONE          |
        W = F . d      MOMENT OF A FORCE
                       about a point:  M = r x F
                       about a line :  [r F u]
                                          |
                                    FOUR VECTORS
                     (a x b).(c x d)   = (a.c)(b.d) - (a.d)(b.c)
                     (a x b) x (c x d) = [a b d] c - [a b c] d
```

---

## THE TWO PRODUCTS SIDE BY SIDE (learn this table first)

| | DOT product a . b | CROSS product a x b |
|---|---|---|
| Other name | scalar product | vector product |
| Answer is | a **number** | a **vector** |
| Definition | \|a\| \|b\| cos theta | \|a\| \|b\| sin theta n |
| Order matters? | No, a . b = b . a | **YES**, a x b = -(b x a) |
| Equals zero when | the vectors are perpendicular | the vectors are parallel |
| With itself | a . a = \|a\|^2 | a x a = 0 (the zero vector) |
| Used for | angle, projection, work | area, perpendicular, moment |
| Computed by | multiply matching parts, then add | one 3 x 3 determinant |

> If you remember only one line from this whole chapter, remember this:
> **DOT gives a NUMBER. CROSS gives a VECTOR.** Half the lost marks in this
> chapter come from writing a vector where a number belongs, or the reverse.

---

## THE 60-SECOND VERSION

Two arrows sit in space. There are only two useful ways to "multiply" them.

**Way 1 — the DOT product.** Ask: *how much do these two arrows agree?*
Drop the second arrow's shadow onto the first, then multiply the lengths.
If they point the same way you get a big positive number. If they stand at
90 degrees you get exactly **zero**. If they oppose, you get a negative number.

**Way 2 — the CROSS product.** Ask: *how much area do these two arrows sweep out?*
The answer is a brand new arrow that sticks out **perpendicular** to both of
them, and whose length equals the area of the parallelogram they make.

Everything else in the chapter is those two ideas stacked together:

| You want | You use |
|---|---|
| The angle between two vectors | dot |
| To check "are they perpendicular?" | dot = 0 |
| Shadow / projection / component | dot |
| Work done by a force | dot |
| A vector perpendicular to two others | cross |
| Area of a triangle or a parallelogram | cross |
| Moment (turning effect) of a force | cross |
| Volume of a box or of a tetrahedron | dot **and** cross together = [a b c] |
| Are 3 vectors / 4 points in one flat plane? | [a b c] = 0 |

---

## WHERE THE MARKS ARE (AP Inter, Maths IA — total 75 marks)

The paper is built like this:

```
  +------------+------------------+----------------+---------------+
  | SECTION    | QUESTIONS        | MARKS EACH     | YOU ATTEMPT   |
  +------------+------------------+----------------+---------------+
  | Section A  | Q1  to Q10       |  2 marks       | ALL 10  = 20  |
  | Section B  | Q11 to Q17       |  4 marks       | ANY 5   = 20  |
  | Section C  | Q18 to Q24       |  7 marks       | ANY 5   = 35  |
  +------------+------------------+----------------+---------------+
                                            TOTAL  =  75 marks
```

What THIS chapter contributes:

| Topic | Section | Marks | How often |
|-------|---------|-------|-----------|
| Find a . b , or the angle between two vectors | A | 2 | almost every year |
| Find x so that two vectors are perpendicular | A | 2 | very often |
| Projection of a on b | A | 2 | very often |
| Find a x b , or a unit vector perpendicular to a and b | A | 2 | very often |
| Area of a triangle / parallelogram | A or B | 2 or 4 | very often |
| Prove a small identity using dot or cross | B | 4 | often |
| Scalar triple product value, or coplanarity | B | 4 | often |
| Volume of a parallelepiped or a tetrahedron | B | 4 | often |
| **Angle / area / volume problem with full working** | **C** | **7** | **every year** |
| **Prove a vector identity (sine rule, cosine rule, [a b c] result)** | **C** | **7** | **often** |

**Realistic haul from this one chapter: about 11 to 15 marks out of 75.**
Add Chapter 4 (Addition of Vectors) and the vector block is worth roughly
20 marks — more than a quarter of the whole paper.

---

## THE KEY BOX — write these lines first in the exam

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   DOT  (SCALAR)  PRODUCT                                            |
  |                                                                     |
  |        a . b  =  |a| |b| cos(theta)        0 <= theta <= 180 deg    |
  |                                                                     |
  |   If  a = a1 i + a2 j + a3 k   and   b = b1 i + b2 j + b3 k         |
  |                                                                     |
  |        a . b  =  a1 b1  +  a2 b2  +  a3 b3        <-- A NUMBER      |
  |                                                                     |
  |        a . b = 0    <=>    a is PERPENDICULAR to b                  |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   CROSS  (VECTOR)  PRODUCT                                          |
  |                                                                     |
  |        a x b  =  |a| |b| sin(theta) n      n = the unit vector      |
  |                                            perpendicular to both,   |
  |                                            by the right-hand rule   |
  |                                                                     |
  |                    | i    j    k  |                                 |
  |        a x b  =    | a1   a2   a3 |               <-- A VECTOR      |
  |                    | b1   b2   b3 |                                 |
  |                                                                     |
  |        a x b = 0    <=>    a is PARALLEL to b                       |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   SCALAR TRIPLE PRODUCT                                             |
  |                                                                     |
  |                              | a1   a2   a3 |                       |
  |     [a b c] = a . (b x c) =  | b1   b2   b3 |     <-- A NUMBER      |
  |                              | c1   c2   c3 |                       |
  |                                                                     |
  |     Volume of parallelepiped = |[a b c]|                            |
  |     Volume of tetrahedron    = (1/6) |[a b c]|                      |
  |     Coplanar                 <=>  [a b c] = 0                       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

## THE PICTURES YOU MUST BE ABLE TO DRAW

**1. Projection — the shadow idea**

```
              b
              ^
             /|
            / |
           /  |
     |b|  /   |   the dotted line drops straight down onto a
         /    |   and meets a at 90 degrees
        /     |
       /theta |
      +-------+--------------->  a
      |<----->|
       this length is the
       PROJECTION of b on a
       =  |b| cos theta  =  (a . b) / |a|
```

**2. Cross product — the area idea**

```
                 +---------------------+
                /                     /
               /                     /
          b   /                     /
             /        AREA         /
            /     = |a x b|       /
           /                     /
          +---------------------+
                    a

       and the vector  a x b  points straight UP out of this
       flat sheet, at 90 degrees to BOTH a and b.

       Half of that parallelogram is a triangle,
       so   area of triangle = (1/2) |a x b|
```

**3. Scalar triple product — the volume idea**

```
                    c
                    ^        +-------------------+
                    |       /                   /|
                    |      /                   / |
                    |     +-------------------+  |
                    |     |                   |  |
                    |     |     VOLUME        |  +
                    |     |  = |[a b c]|      | /
                    |     |                   |/
                    +---> +-------------------+
                   /              a
                  /
                 b

       Squash the box flat (all three vectors in one plane)
       and the volume becomes 0.
       That is exactly what COPLANARITY means:  [a b c] = 0
```

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Recall from Chapter 4: |a| , unit vector, the i j k form
              |
  STEP 2   DOT PRODUCT definition  +  i.i = 1 , i.j = 0
              |
  STEP 3   Component form   a1b1 + a2b2 + a3b3
              |
     +--------+------------------+------------------+
     |                           |                  |
  STEP 4                      STEP 5             STEP 6
  Angle between               Perpendicular      Projection and
  two vectors                 condition a.b = 0  components
     |                           |                  |
     +--------+------------------+------------------+
              |
  STEP 7   Work done by a force   W = F . d
              |
  STEP 8   CROSS PRODUCT definition  +  i x j = k
              |
  STEP 9   The 3 x 3 determinant method    <-- practise TEN of these
              |
     +--------+------------------+------------------+
     |                           |                  |
  STEP 10                     STEP 11            STEP 12
  Unit vector                 Area of triangle   Moment of a force
  perpendicular               & parallelogram    r x F  and  [r F u]
     |                           |                  |
     +--------+------------------+------------------+
              |
  STEP 13  SCALAR TRIPLE PRODUCT  [a b c]  = one 3 x 3 determinant
              |
     +--------+--------+
     |                 |
  STEP 14         STEP 15
  Volume of       Coplanarity
  parallelepiped  [a b c] = 0
  & tetrahedron
     |                 |
     +--------+--------+
              |
  STEP 16  VECTOR TRIPLE PRODUCT   a x (b x c) = (a.c) b - (a.b) c
              |
  STEP 17  Products of four vectors   (last, and least asked)
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — the dot product.**
Learn `a . b = a1b1 + a2b2 + a3b3` and `cos theta = (a . b) / (|a| |b|)`.
Do 8 questions: find a . b, find the angle, find x so that a is perpendicular
to b, find the projection. Every one of those is a 2-mark Section A question.
By lunch you should manage them without looking at anything.

**Day 1 evening — the cross product.**
Learn only the determinant layout. Write i, j, k on the top row, a's numbers
in the middle row, b's numbers in the bottom row. Remember the middle term is
SUBTRACTED. Do 6 questions: find a x b, find a unit vector perpendicular to
both, find the area of the triangle whose vertices are given.

**Day 2 morning — the scalar triple product.**
It is just ONE 3 x 3 determinant. If you can do determinants from Chapter 3,
you can already do this. Three uses only: volume of a parallelepiped, volume
of a tetrahedron (stick a 1/6 in front), and coplanarity (set it equal to 0).
Do 5 questions.

**Day 2 evening — the vector triple product and one full 7-mark answer.**
Memorise `a x (b x c) = (a.c) b - (a.b) c`. Then write out ONE complete
Section C answer from start to finish, on paper, timed at 12 minutes.

Do that and you have locked in roughly 11 to 13 of the 75 marks in Maths IA,
from a chapter most weak students skip entirely.
