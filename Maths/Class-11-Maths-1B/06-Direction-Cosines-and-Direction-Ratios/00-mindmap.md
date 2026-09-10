# Direction Cosines and Direction Ratios — Mind Map

**Maths 1B · Chapter 6 · The middle chapter of the 3D block**
Almost every year: 1 very short answer (2M), and in many years a short answer (4M) as well.

> **Read this first — honestly.**
> This chapter will NOT give you a 7-mark long answer. It is a **Section A + Section B**
> chapter, exactly like Chapter 5 and Chapter 7 on either side of it.
>
> But it is the chapter that makes the other two work. Chapter 5 taught you to name a
> POINT in space. This chapter teaches you to name a **DIRECTION** in space. Chapter 7
> (The Plane) is then just "a point plus a direction", and every single normal-vector
> question in that chapter is really a question from THIS chapter wearing a hat.
>
> There are only **four** ideas here, and one formula does about 70% of the work:
>
> ```
>        cos theta  =  l1 l2 + m1 m2 + n1 n2
> ```
>
> Two evenings buys you **2 to 6 marks** in Maths IB and makes 3D geometry in EAPCET
> and JEE Main suddenly easy. You need 26 out of 75 to pass. These are cheap marks.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
        D I R E C T I O N   C O S I N E S   A N D   D I R E C T I O N   R A T I O S
                                          |
                        A LINE has a DIRECTION. Name it with 3 numbers.
                                          |
     +----------------+-----------------+-+-------------+------------------+
     |                |                 |               |                  |
  THE ANGLES     DIRECTION          DIRECTION      TWO LINES          SPECIAL
  alpha,beta,    COSINES            RATIOS         TOGETHER           DIRECTIONS
  gamma          (l, m, n)          (a, b, c)          |                  |
     |               |                  |         cos theta =         PERPENDICULAR
  with the      l = cos alpha      ANY numbers    l1l2+m1m2+n1n2      TO TWO LINES
  POSITIVE      m = cos beta       PROPORTIONAL       |                    |
  x, y, z       n = cos gamma      to l, m, n     with DRs:            CROSS
  axes              |                  |          a1a2+b1b2+c1c2      MULTIPLY
     |          l^2+m^2+n^2 = 1    infinitely     ------------------   (b1c2-b2c1,
  0 <= angle        |              many sets      sqrt(sum) sqrt(sum)  c1a2-c2a1,
    <= 180      TWO SETS:              |               |               a1b2-a2b1)
     |          (l,m,n) and        TO CONVERT     sin theta =              |
  cos of it     (-l,-m,-n)         divide by      sqrt(sum of the      CHECK with
  can be            |              sqrt(a^2       three "cross"        two DOT
  NEGATIVE      AXES:                 +b^2        terms squared)       products = 0
                x: (1,0,0)            +c^2)           |
                y: (0,1,0)            |          PERPENDICULAR:
                z: (0,0,1)        PLUS OR MINUS  a1a2+b1b2+c1c2 = 0
                                  both allowed       |
                                      |          PARALLEL:
                                  LINE JOINING   a1/a2 = b1/b2 = c1/c2
                                  TWO POINTS         |
                                  DRs = the      COLLINEAR POINTS
                                  DIFFERENCES    AB and BC have
                                  (x2-x1,        proportional DRs
                                   y2-y1,            |
                                   z2-z1)        ANGLE BISECTORS
                                      |          internal: (l1+l2, ...)
                                  divide by AB   external: (l1-l2, ...)
                                  to get DCs         |
                                      |          LINE vs a COORDINATE
                                  PROJECTIONS    PLANE
                                  of AB on a     xy-plane: sin = |n|
                                  line =         yz-plane: sin = |l|
                                  l(x2-x1)       zx-plane: sin = |m|
                                  +m(y2-y1)
                                  +n(z2-z1)
```

---

## THE PICTURE YOU MUST BE ABLE TO DRAW IN 10 SECONDS

A line through the origin, and the three angles it makes with the three positive axes.

```
                          z
                          |
                          |                  P
                          |                /
                          |              /
                          |            /
                          |  gamma   /
                          |        /
                          |      /
                          |    /
                          |  /
                          |/  beta
                          O- - - - - - - - - - - - - - - - -  y
                         / \
                        /   \
                       /     \  alpha
                      /       \
                     /         \
                    x           (OP, the directed line)


       alpha  =  the angle between OP and the POSITIVE x-axis
       beta   =  the angle between OP and the POSITIVE y-axis
       gamma  =  the angle between OP and the POSITIVE z-axis

       l = cos alpha      m = cos beta      n = cos gamma

                    l^2 + m^2 + n^2  =  1        ALWAYS
```

Think of a torch shining from the corner of a dark room:

| Thing | What it means in the room |
|---|---|
| `alpha` | how much the beam leans towards the front wall direction (x) |
| `beta` | how much it leans into the room (y) |
| `gamma` | how much it leans towards the ceiling (z) |
| `l, m, n` | the "share" of the beam pointing along each of the three directions |
| `l^2+m^2+n^2 = 1` | the three shares must add up to one whole beam |
| a NEGATIVE `l` | the beam leans BACKWARDS along x (angle is more than 90 degrees) |

---

## THE 60-SECOND VERSION

```
  A LINE IS NAMED BY THREE NUMBERS.

  If those three numbers are the COSINES of the three axis-angles, they are called
  DIRECTION COSINES  (l, m, n),  and they obey   l^2 + m^2 + n^2 = 1.

  If they are just PROPORTIONAL to those cosines - any convenient multiple - they are
  called DIRECTION RATIOS  (a, b, c),  and they obey NOTHING. Any multiple works.

       (1, 2, 2)   (2, 4, 4)   (-3, -6, -6)   (0.5, 1, 1)
                       all name the SAME line

  TO GO  DRs  ->  DCs :     divide every number by   sqrt(a^2 + b^2 + c^2)

       (1, 2, 2)  ->  sqrt(1+4+4) = 3  ->  ( 1/3 , 2/3 , 2/3 )

       CHECK:  1/9 + 4/9 + 4/9  =  9/9  =  1        correct
```

Everything else is built on top of that. To find the angle between two lines you multiply
matching numbers and add. That is the whole chapter.

**The only genuinely NEW ideas** (compared with Chapter 5) are:

1. A line has **TWO** sets of direction cosines, `(l, m, n)` and `(-l, -m, -n)`, because a
   line has two ends. Both are correct. Never panic if the answer key shows the other sign.
2. **Direction ratios** are deliberately sloppy — that sloppiness is what makes them easy.
3. The **cross-multiplication rule** for finding a line perpendicular to two given lines.

---

## WHERE THE MARKS ARE (AP Inter, Maths IB) — the honest version

| Topic | Section | Marks | How often |
|-------|---------|-------|-----------|
| Find the DCs when the DRs are given | A | 2 | very often |
| Find the DRs / DCs of the line joining two points | A | 2 | very often |
| Find the missing angle / missing DC using `l^2+m^2+n^2=1` | A | 2 | often |
| Angle between two lines from their DRs | A or B | 2 or 4 | very often |
| Show two lines are perpendicular (`a1a2+b1b2+c1c2 = 0`) | A | 2 | often |
| Show three points are collinear using DRs | A or B | 2 or 4 | often |
| DRs of a line perpendicular to two given lines (cross product) | B | 4 | often |
| Prove `l^2+m^2+n^2 = 1` / `sin^2 a + sin^2 b + sin^2 c = 2` | A or B | 2 or 4 | often |
| Projection of a segment on a line | A or B | 2 or 4 | sometimes |
| DCs from two conditions like `l+m+n=0` and `lm+mn+nl=0` | B | 4 | sometimes |
| Foot of the perpendicular from a point to a line | B | 4 | sometimes |
| Direction cosines of the angle bisectors | B | 4 | rarely |
| Angle between a line and a coordinate plane | A | 2 | rarely |

```
  +--------------------------------------------------------------------+
  |  REALISTIC TOTAL FROM THIS CHAPTER                                  |
  |                                                                     |
  |    Section A  ->  1 question nearly every year, sometimes 2         |
  |                                                =  2 to 4 marks      |
  |    Section B  ->  1 question in many years     =  0 to 4 marks      |
  |    Section C  ->  essentially NEVER as a standalone question        |
  |                                                =  0 marks           |
  |                                                                     |
  |    So:  2 marks near-guaranteed, up to 6 in a good year.            |
  |                                                                     |
  |  That is a SMALL number. Read the next box before you dismiss it.   |
  +--------------------------------------------------------------------+
```

**Why it is worth far more than 6 marks:**

```
   Ch 5  THREE DIMENSIONAL COORDINATES        ~ 2-6 marks
            |
            +---->  Ch 6  DIRECTION COSINES AND RATIOS   ~ 2-6 marks
                             |      (you are here)
                             |
                             +---->  Ch 7  THE PLANE     ~ 2-6 marks
```

Every "normal to the plane" question in Chapter 7 is a direction-ratios question.
Every "angle between two planes" is `cos theta = l1l2 + m1m2 + n1n2` in disguise.
Learn this chapter properly and Chapter 7 costs you almost nothing.

And in **EAPCET / JEE Main**, 3D geometry is a guaranteed 1-3 question area, and this
chapter is the engine room of all of it.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   The three angles alpha, beta, gamma. Draw the picture.
              |   (20 minutes. One diagram, nothing to calculate.)
              v
  STEP 2   DIRECTION COSINES  l = cos a , m = cos b , n = cos c
              |   and the one law:   l^2 + m^2 + n^2 = 1
              |   (Learn the PROOF. It is asked as a 2 or 4 mark question.)
              v
  STEP 3   DIRECTION RATIOS and how to convert DRs -> DCs
              |   divide by sqrt(a^2+b^2+c^2)   ... plus or minus
              v
  STEP 4   ***  THE LINE JOINING TWO POINTS  ***
              |   DRs = (x2-x1 , y2-y1 , z2-z1)
              |   Everything below this line uses it.
              |
     +--------+-----------------+------------------+
     |                          |                  |
  STEP 5                     STEP 6            STEP 7
  COLLINEAR POINTS           ANGLE BETWEEN     PROJECTIONS
  AB, BC proportional        TWO LINES         of a segment
     |                       cos = l1l2+...    on a line
     |                          |                  |
     |                    +-----+-----+            |
     |                    |           |            |
     |               PERPENDICULAR  PARALLEL       |
     |               dot = 0        ratios equal   |
     |                    |           |            |
     +--------------------+-----+-----+------------+
                                |
                             STEP 8
                    LINE PERPENDICULAR TO TWO LINES
                    (the cross-multiplication rule)
                                |
                          +-----+-----+
                          |           |
                       STEP 9      STEP 10
                     BISECTORS    LINE vs a
                     l1+l2 and    COORDINATE
                     l1-l2        PLANE (use SIN)
```

---

## THE KEY BOX — the formulas that unlock most of the paper

```
  +======================================================================+
  |                                                                      |
  |   1.   THE LAW OF THE CHAPTER                                        |
  |                                                                      |
  |             l^2 + m^2 + n^2  =  1                                    |
  |                                                                      |
  |        Use it to find a missing DC, and to CHECK every answer        |
  |        you ever write in this chapter.                               |
  |                                                                      |
  |                                                                      |
  |   2.   DIRECTION RATIOS  ->  DIRECTION COSINES                       |
  |                                                                      |
  |                       a                b                c            |
  |        (l, m, n) = ( --- ,           ----- ,          ----- )        |
  |                       r                 r               r            |
  |                                                                      |
  |             where   r = sqrt(a^2 + b^2 + c^2)     (and +/- r)        |
  |                                                                      |
  |                                                                      |
  |   3.   THE ANGLE BETWEEN TWO LINES                                   |
  |                                                                      |
  |        cos theta  =  l1 l2 + m1 m2 + n1 n2                           |
  |                                                                      |
  |                            | a1a2 + b1b2 + c1c2 |                    |
  |        cos theta  =  ---------------------------------------         |
  |                      sqrt(a1^2+b1^2+c1^2) sqrt(a2^2+b2^2+c2^2)       |
  |                                                                      |
  |        PERPENDICULAR   <=>   a1a2 + b1b2 + c1c2  =  0                |
  |        PARALLEL        <=>   a1/a2 = b1/b2 = c1/c2                   |
  |                                                                      |
  |                                                                      |
  |   4.   PERPENDICULAR TO TWO LINES  (cross-multiplication)            |
  |                                                                      |
  |        ( b1c2 - b2c1 ,  c1a2 - c2a1 ,  a1b2 - a2b1 )                 |
  |                                                                      |
  +======================================================================+
```

If you can write those four boxes from memory you can attempt every 2-mark and most
4-mark questions this chapter has ever produced.

---

## IF YOU ONLY HAVE 2 DAYS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   DAY 1  (about 3 hours)                                            |
  |                                                                     |
  |   Hour 1   Draw the alpha/beta/gamma picture five times from        |
  |            memory. Learn  l = cos a, m = cos b, n = cos c.          |
  |            Learn and WRITE OUT the proof of l^2+m^2+n^2 = 1.        |
  |            Memorise the DCs of the three axes.                      |
  |                                                                     |
  |   Hour 2   DRs -> DCs. Do 15 conversions. Every single time,        |
  |            finish with the check  l^2+m^2+n^2 = 1.                  |
  |            Use easy triples first: (1,2,2)/3, (2,-3,6)/7,           |
  |            (3,-4,12)/13, (1,1,1)/sqrt3.                             |
  |                                                                     |
  |   Hour 3   Line joining two points: DRs are the DIFFERENCES.        |
  |            Do 10 of them. Then do 5 "are these 3 points            |
  |            collinear?" questions.                                   |
  |                                                                     |
  |   ---------------------------------------------------------------   |
  |                                                                     |
  |   DAY 2  (about 3 hours)                                            |
  |                                                                     |
  |   Hour 1   cos theta = l1l2 + m1m2 + n1n2, and the DR version.      |
  |            Do 10 "angle between two lines" questions.               |
  |                                                                     |
  |   Hour 2   Perpendicular test (dot = 0) and parallel test.          |
  |            Then the CROSS-MULTIPLICATION rule for a line            |
  |            perpendicular to two lines. Do 6 of them, and CHECK      |
  |            each answer with two dot products that must give 0.      |
  |                                                                     |
  |   Hour 3   Projections, then work Section A of 03-pyq-ap-board.md   |
  |            straight through with the answers covered.               |
  |                                                                     |
  |   ---------------------------------------------------------------   |
  |                                                                     |
  |   IF YOU GET A THIRD EVENING                                        |
  |            The l+m+n=0 simultaneous-condition questions,            |
  |            the angle bisectors, the foot of the perpendicular,      |
  |            and 04-pyq-competitive.md for EAPCET speed.              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The one habit that will save you marks in this chapter

```
   AFTER EVERY ANSWER THAT PRODUCES DIRECTION COSINES,
   WRITE ONE MORE LINE:

        l^2 + m^2 + n^2  =  ....  =  1

   It takes eight seconds. It catches a wrong square root, a dropped
   minus sign and a slipped denominator. Examiners also give credit
   for the verification line itself.
```
