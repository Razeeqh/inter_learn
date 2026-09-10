# Addition of Vectors — Mind Map

**Maths 1A · Chapter 4 · The easiest 7-mark long answer in the whole paper**
This chapter is almost pure bookkeeping. There is no trigonometry, no calculus and
no determinant. You subtract, you add, you divide by a small number. If you learn
**four formulas** properly you can collect roughly **13 of the 75 marks**.

---

## A NOTE ON HOW VECTORS ARE WRITTEN HERE

```
  In print, a vector is BOLD.        In your exam answer book you CANNOT
  In these notes it is plain: a      go bold, so you must draw a BAR or an
                                     ARROW over the letter:   a-bar   or  a->
  AB with a bar over it  =  the vector from point A to point B.
  Here it is written simply as  AB.

  |a|  means the LENGTH (magnitude) of a.   It is a plain NUMBER, never a vector.

  i , j , k  are the three unit vectors along the x, y and z axes.
```

> **TRAP right at the start:** if you write `a = 5` instead of `|a| = 5`, the examiner
> treats it as a vector-equals-number error. Bars cost nothing. Draw them every time.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                      A D D I T I O N   O F   V E C T O R S
                                      |
     +----------+----------+----------+----------+----------+----------+
     |          |          |          |          |          |          |
   WHAT IS    TYPES     ADDING    POSITION   SECTION   COMPONENT  LINEAR
   A VECTOR    OF         &        VECTORS   FORMULA     FORM     COMBIN-
     |       VECTORS   SCALING       |          |          |      ATION
     |          |          |         |          |          |         |
  magnitude   zero     TRIANGLE   OP = r    INTERNAL   a = xi+yj+zk  a = xb+yc
    +        unit        LAW         |      (mb+na)        |            |
  direction  equal        |       AB = B-A   -------      |a| =      LINEARLY
     |       negative  PARALLELO-     |        m+n      sqrt(x^2   DEPENDENT
   drawn as  like/       GRAM      |AB| =        |       +y^2+z^2)  (one is a
   an ARROW  unlike      LAW      distance   EXTERNAL      |         combo of
     |       collinear     |      formula    (mb-na)   unit vector   the others)
   a SCALAR  coplanar   POLYGON      |        -------   a / |a|         |
   has size  position     LAW        |         m-n         |       LINEARLY
   only      free/         |         |            |    DIRECTION   INDEPENDENT
             localised  properties   |        MIDPOINT   COSINES        |
                           |         |        (a+b)/2   l,m,n      3 POINTS
                        commutative  |            |         |      COLLINEAR
                        associative  |        CENTROID  l^2+m^2    AB = t AC
                        identity 0   |        triangle   +n^2 = 1      |
                        inverse -a   |        (a+b+c)/3      |     4 POINTS
                           |         |            |      DIRECTION  COPLANAR
                       SUBTRACTION   |        TETRAHEDRON  RATIOS   AD = xAB+yAC
                       a - b =       |        (a+b+c+d)/4              |
                       a + (-b)      |                            EQUATIONS
                           |         |                            OF LINE
                       SCALAR        |                            & PLANE
                       MULTIPLE      |                                |
                       k a           +-------- GEOMETRY PROOFS -------+
                                                     |
                        +----------------+-----------+---------------+
                        |                |                           |
                  diagonals of a    medians of a              midpoint line
                  parallelogram     triangle are            is parallel to the
                  bisect each       concurrent at           third side and
                  other             the centroid            half of it
```

---

## THE 60-SECOND VERSION

A **scalar** has only a size: 5 kg, 30 degrees, 12 rupees.
A **vector** has a size **and** a direction: "6 km north-east", "a push of 10 N downwards".

Draw a vector as an **arrow**. The length of the arrow is the magnitude. Where it
points is the direction.

Now the entire chapter is four sentences:

```
  1. TO ADD two vectors, put them nose-to-tail.
     The arrow from the first tail to the last nose is the sum.

  2. TO NAME a point, draw an arrow to it from the origin O.
     That arrow is the POSITION VECTOR of the point.

  3. TO GET the vector from A to B, do  AB = (pv of B) - (pv of A).
     HEAD MINUS TAIL. Nothing else. This one line solves half the chapter.

  4. TO SPLIT a segment in a ratio m : n, weight the far end by m and the
     near end by n, add, and divide by (m + n).
```

Everything else — centroids, collinearity, coplanarity, lines, planes, geometry
proofs — is those four ideas used again in a different costume.

---

## HEAD MINUS TAIL — the single most useful line in the chapter

```
                        B  (position vector b)
                       /|
                      / |
                AB   /  |
                    /   |
                   /    |
                  A     |     A has position vector a
                   \    |
                 a  \   |  b
                     \  |
                      \ |
                       \|
                        O   (origin)

        Going  O -> A -> B  is the same as going  O -> B

              a  +  AB  =  b

        so    AB  =  b  -  a          <---  HEAD minus TAIL
```

If a question gives you **points**, your very first line should always be
`AB = b - a`. If it gives you **coordinates**, subtract them:
`A(x1,y1,z1)`, `B(x2,y2,z2)` gives `AB = (x2-x1)i + (y2-y1)j + (z2-z1)k`.

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

  In almost every AP paper, Section C question number 21 is
  ADDITION OF VECTORS, and question 22 is PRODUCT OF VECTORS.
  Two vector long answers, 14 marks, sitting next to each other.
```

What THIS chapter contributes:

| Topic | Section | Marks | How often |
|-------|---------|-------|-----------|
| Find AB and \|AB\| from two position vectors | A | 2 | almost every year |
| Unit vector in the direction of a given vector | A | 2 | very often |
| Direction cosines / angles with the axes | A | 2 | very often |
| Find x so that two vectors are collinear (parallel) | A | 2 | often |
| Point dividing a join in a given ratio | A or B | 2 or 4 | very often |
| Vector equation of a line through two points | A or B | 2 or 4 | very often |
| Vector equation of a plane through three points | B | 4 | often |
| Prove three points are collinear | B | 4 | very often |
| Regular hexagon / polygon sum identity | B | 4 | often |
| **Prove four points are COPLANAR (non-coplanar a, b, c)** | **C** | **7** | **very often** |
| **Point of intersection of two lines given by position vectors** | **C** | **7** | **very often** |
| **Geometry proof: medians concurrent / diagonals bisect / trisection** | **C** | **7** | **often** |

**Realistic haul from this one chapter: about 11 to 13 marks out of 75.**
Add Chapter 5 (Product of Vectors) and the vector block is worth roughly
22 to 26 marks — a third of the whole paper, from two short chapters.

---

## THE KEY BOX — write these lines first in the exam

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   1.  THE VECTOR JOINING TWO POINTS                                 |
  |                                                                     |
  |            AB  =  b  -  a          (head minus tail)                |
  |                                                                     |
  |       If  A(x1,y1,z1)  and  B(x2,y2,z2) :                           |
  |                                                                     |
  |       AB = (x2-x1) i + (y2-y1) j + (z2-z1) k                        |
  |                                                                     |
  |       |AB| = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )              |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   2.  MAGNITUDE AND UNIT VECTOR                                     |
  |                                                                     |
  |       a = x i + y j + z k                                           |
  |                                                                     |
  |       |a| = sqrt( x^2 + y^2 + z^2 )              <-- a NUMBER       |
  |                                                                     |
  |                    a          x i + y j + z k                       |
  |       a-hat  =  -------  =  --------------------   <-- a VECTOR     |
  |                   |a|        sqrt(x^2+y^2+z^2)        of length 1   |
  |                                                                     |
  |       Vector of magnitude p along a   =   p * a-hat                 |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   3.  THE SECTION FORMULA   (P divides AB in the ratio m : n)       |
  |                                                                     |
  |                        m b  +  n a                                  |
  |       INTERNALLY :  ------------------                              |
  |                          m  +  n                                    |
  |                                                                     |
  |                        m b  -  n a                                  |
  |       EXTERNALLY :  ------------------          (m not equal to n)  |
  |                          m  -  n                                    |
  |                                                                     |
  |                        a + b                                        |
  |       MIDPOINT    :  ---------          (this is just m = n = 1)    |
  |                          2                                          |
  |                                                                     |
  |       MEMORY HOOK:  the FAR letter gets the FIRST number.           |
  |                     m sits with b,   n sits with a.   "m-b, n-a"    |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   4.  CENTROIDS                                                     |
  |                                                                     |
  |       Triangle ABC       G  =  ( a + b + c ) / 3                    |
  |                                                                     |
  |       Tetrahedron ABCD   G  =  ( a + b + c + d ) / 4                |
  |                                                                     |
  |       (count the corners, add them, divide by how many)             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

## THE PICTURES YOU MUST BE ABLE TO DRAW

**1. The TRIANGLE LAW — nose to tail**

```
                          C
                         /|
                        / |
                   b   /  |
                      /   |
                     /    |   a + b        Put the tail of b on the
                    /     |                head of a. The arrow that
                   B      |                closes the triangle from
                    \     |                the first tail to the last
                 a   \    |                head is  a + b.
                      \   |
                       \  |
                        \ |
                         \|
                          A

              AB  +  BC  =  AC
```

**2. The PARALLELOGRAM LAW — tail to tail**

```
              D +-------------------+ C
               /                   /
              /                   /
         b   /       a + b       /          Put both tails at the same
            /      (diagonal)   /           corner A. Complete the
           /                   /            parallelogram. The DIAGONAL
          /                   /             from A is  a + b.
         /                   /
        +-------------------+
        A         a          B

              AB  +  AD  =  AC

        And the OTHER diagonal is the DIFFERENCE:   DB = a - b
```

**3. The SECTION FORMULA — internal division**

```
                         n                m
              A *----------------* P ---------------* B
                                                          AP : PB = m : n
             pv = a           pv = r              pv = b

                       m b  +  n a
                 r  = --------------
                         m  +  n

        NOTICE:  P is CLOSER to A when n is SMALL.
                 The weight m (the far number) travels with b.
```

**External division (P is outside the segment):**

```
                                    n
              A *----------------* B ------------* P       AP : PB = m : n
                                                            with m > n
             pv = a           pv = b          pv = r
              |<------------ m ---------------->|

                       m b  -  n a
                 r  = --------------
                         m  -  n

        Same formula with n replaced by -n. That is all "external" means.
```

**4. The CENTROID of a triangle**

```
                            A (a)
                            /\
                           /  \
                          /    \
                     F   /      \   E          D, E, F are the MIDPOINTS
                    *   /    G   \   *         AD, BE, CF are the MEDIANS
                       /     *    \            G is the CENTROID
                      /            \
                     /              \          G lies on every median and
              B ----------- * ---------- C     splits it in the ratio
             (b)            D            (c)                2 : 1
                                                    (from the vertex)

                        a  +  b  +  c
                  G  =  --------------
                              3
```

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Scalars vs vectors, magnitude, direction, types of vectors
              |
  STEP 2   Triangle law, parallelogram law, polygon law
              |
  STEP 3   Properties of addition, subtraction, k times a
              |
  STEP 4   POSITION VECTORS  and  AB = b - a
              |                         (<-- everything below needs this)
     +--------+-----------------+------------------+
     |                          |                  |
  STEP 5                     STEP 7            STEP 9
  COMPONENT FORM             SECTION           LINEAR COMBINATION
  a = xi + yj + zk           FORMULA           & DEPENDENCE
     |                          |                  |
  STEP 6                     STEP 8            STEP 10
  |a|, unit vector,          Midpoint,         COLLINEAR (3 points)
  direction cosines          CENTROID          COPLANAR (4 points)
     |                          |                  |
     +--------+-----------------+------------------+
              |
  STEP 11  Vector equation of a LINE and of a PLANE
              |
  STEP 12  GEOMETRY PROOFS  <-- the 7-mark question
```

---

## THE FOUR SENTENCES THAT UNLOCK EVERY 7-MARK QUESTION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  "COLLINEAR"  means one vector is a NUMBER times another,           |
  |               and they share a point.                               |
  |                     AB = t * AC   =>   A, B, C are collinear        |
  |                                                                     |
  |  "COPLANAR"   means one vector is a COMBINATION of two others.      |
  |                     AD = x AB + y AC  =>  A,B,C,D are coplanar      |
  |                                                                     |
  |  "INTERSECT"  means write BOTH lines with parameters t and s,       |
  |               set them equal, and compare the coefficients of       |
  |               the non-coplanar vectors a, b, c.                     |
  |                                                                     |
  |  "PROVE ..."  means put the origin at a clever corner, name two     |
  |               sides b and d, write every other point in terms of    |
  |               b and d, and compare.                                 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning (2 hours) — the free 2-mark marks.**
Learn `AB = b - a`, `|a| = sqrt(x^2+y^2+z^2)`, `unit vector = a/|a|`, and
direction cosines. Do 10 tiny numerical questions. These four things alone are
worth 2 to 4 guaranteed marks and they take one evening.

**Day 1 evening (2 hours) — the section formula.**
Internal, external, midpoint, centroid of a triangle, centroid of a tetrahedron.
Do 6 problems. Always check your answer by putting the ratio 1:1 back in and
seeing whether you get the midpoint.

**Day 2 morning (3 hours) — the 7-mark machine.**
Only two shapes, and they are asked over and over:
1. "Show these four points are coplanar" — write `PS = x PQ + y PR`, get x and y
   from two of the three coefficient equations, then **verify** with the third.
2. "Find the point of intersection of two lines" — write both with t and s,
   equate coefficients of a, b, c, solve two equations, verify with the third.
Do three of each. That is the whole 7 marks.

**Day 2 evening (2 hours) — one geometry proof.**
Learn **one** proof word for word: *the diagonals of a parallelogram bisect each
other*. It is six lines long. If a proof question appears and it is a different
one, the same trick (origin at a corner, name two sides) still gets you 4 of the
7 marks.

```
  Skip if you are truly out of time:  free vs localised vectors,
  the formal definition of linear independence with epsilon language,
  and the vector equation of a plane in normal form (that is Maths IIB).

  NEVER skip:  AB = b - a  ,  the section formula  ,  the centroid.
```

**That plan alone is worth about 11 of the 75 marks in Maths IA — and it is
the least amount of thinking per mark anywhere in the syllabus.**
