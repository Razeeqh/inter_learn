# System of Circles — Mind Map

**Maths IIB · Chapter 2 · The twin brother of Chapter 1 (Circle)**
Every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

Chapter 1 was about **ONE** circle. This chapter is about **TWO or THREE** circles
sitting on the same page and how they relate to each other.

Here is the good news, and read it twice:

```
  This chapter reuses the SAME symbols you already learned in Chapter 1.
  There are really only THREE new ideas in the whole chapter:

      1.  SUBTRACT two circle equations  ->  S1 - S2 = 0   (radical axis)
      2.  ADD two circle equations       ->  S1 + k S2 = 0 (family of circles)
      3.  COMPARE d with r1 and r2       ->  everything about position

  Learn those three moves and you own 13-15 marks.
```

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                       S Y S T E M   O F   C I R C L E S
                                      |
      +----------+----------+---------+---------+----------+----------+
      |          |          |         |         |          |          |
   ANGLE    ORTHOGONAL  RADICAL   RADICAL   COMMON    RELATIVE    FAMILY
  BETWEEN     CIRCLES     AXIS     CENTRE    CHORD    POSITION   OF CIRCLES
   CIRCLES       |          |         |         |         |          |
      |      theta = 90  S1-S2 = 0  3 axes   S1-S2 = 0  compare   S1 + k S2 = 0
  angle between    |         |      MEET at    (when      d       (through the
  the TANGENTS  d^2 =     locus of  ONE point  they      with   intersection of
  at a point   r1^2+r2^2  equal        |     CUT)     r1+r2      2 circles)
  of crossing     |       tangent   Its use:     |        and         |
      |       2g1g2 +    lengths    circle    LENGTH   |r1-r2|   S + k L = 0
   cos(theta)  2f1f2 =      |      ORTHOGONAL  = 2 sqrt    |     (through the
      =        c1 + c2   PERPENDICULAR to 3      (r^2-p^2)  |    intersection of
 d^2-r1^2-r2^2    |       to the    circles      |      5 CASES   a circle and
 -------------  Find a    LINE OF      |      maximum       |       a line)
   2 r1 r2      circle    CENTRES   centre =   when it    NUMBER OF     |
      |        orthogonal    |      radical    is a       COMMON     find k
   45, 60,     to 1, 2   3 cases:   centre     DIAMETER   TANGENTS   from ONE
   90 deg      or 3      cut  -> common       of the        |      extra
   answers     circles   chord         |      smaller    0,1,2,3,4  condition
                         touch-> common tangent circle       |
                         apart-> outside both              DIRECT and
                                                          TRANSVERSE
                                                          tangents
                                                               |
                                                        CENTRES OF
                                                        SIMILITUDE
                                                        (divide C1C2
                                                        in ratio r1:r2)
                                                               |
                                                          LENGTHS
                                                   direct = sqrt(d^2-(r1-r2)^2)
                                                   transv = sqrt(d^2-(r1+r2)^2)
```

---

## THE TWO MOVES THAT RUN THE WHOLE CHAPTER

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    Let    S1 = x^2 + y^2 + 2 g1 x + 2 f1 y + c1                  |
  |           S2 = x^2 + y^2 + 2 g2 x + 2 f2 y + c2                  |
  |                                                                  |
  |    (BOTH must start with x^2 + y^2 with coefficient 1.           |
  |     If not, DIVIDE first. This is the No.1 mark-loser.)          |
  |                                                                  |
  |  ------------------------------------------------------------    |
  |                                                                  |
  |    MOVE 1   SUBTRACT      S1 - S2 = 0                            |
  |                                                                  |
  |             The x^2 and y^2 cancel, leaving a STRAIGHT LINE:     |
  |                                                                  |
  |             2(g1-g2) x + 2(f1-f2) y + (c1 - c2) = 0              |
  |                                                                  |
  |             That line is the RADICAL AXIS.                       |
  |             If the circles cut, it is the COMMON CHORD.          |
  |                                                                  |
  |  ------------------------------------------------------------    |
  |                                                                  |
  |    MOVE 2   ADD WITH A WEIGHT     S1 + k S2 = 0   (k not = -1)   |
  |                                                                  |
  |             Every circle through the two intersection points     |
  |             of S1 and S2 looks like this, for some number k.     |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

## THE 60-SECOND VERSION

Put two circles on the same page. Only **three numbers** matter:

```
        r1  =  radius of circle 1
        r2  =  radius of circle 2
        d   =  distance between the two centres
```

Everything in this chapter is one of these five jobs:

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Are they orthogonal? / find k | check 2g1g2 + 2f1f2 = c1 + c2 | Section A, 2 marks |
| Find the angle between them | cos(theta) formula with d, r1, r2 | Section A / B |
| Radical axis / common chord | SUBTRACT: S1 - S2 = 0 | Section A / B |
| How do they sit? How many tangents? | compare d with r1+r2 and |r1-r2| | Section A / B |
| Circle through the intersection, orthogonal circles, common tangents | S1 + k S2 = 0, radical centre | **Section C, 7 marks** |

---

## THE ONE BOX YOU MUST NEVER FORGET

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     CONDITION FOR TWO CIRCLES TO BE ORTHOGONAL                   |
  |     (to cut each other AT RIGHT ANGLES)                          |
  |                                                                  |
  |            2 g1 g2  +  2 f1 f2  =  c1  +  c2                     |
  |                                                                  |
  |     In pure geometry language, the same thing is                 |
  |                                                                  |
  |            d^2  =  r1^2  +  r2^2      (Pythagoras!)              |
  |                                                                  |
  +------------------------------------------------------------------+

  WHY it is Pythagoras — one picture explains the whole thing:

                            P
                           /|\
                          / | \
                    r1   /  |  \   r2
                        /   |   \
                       /  90 deg \
                      /           \
                    C1 ----------- C2
                          d

     The tangent to circle 1 at P is perpendicular to  C1 P.
     The tangent to circle 2 at P is perpendicular to  C2 P.
     So "tangents at 90 deg"  <=>  "radii at 90 deg"  <=>
     triangle C1 P C2 is right-angled at P  <=>  d^2 = r1^2 + r2^2.
```

**How to use it in 20 seconds:**

```
     S1 :  x^2 + y^2 + 4x + 2y + 1 = 0     ->  g1 = 2 , f1 = 1 , c1 = 1
     S2 :  x^2 + y^2 - 2x     - 5 = 0     ->  g2 = -1, f2 = 0 , c2 = -5

     LHS  =  2 g1 g2 + 2 f1 f2  =  2(2)(-1) + 2(1)(0)  =  -4
     RHS  =  c1 + c2            =  1 + (-5)            =  -4

     LHS = RHS   ->   THE CIRCLES ARE ORTHOGONAL.
```

---

## THE SECOND BOX — THE FIVE POSITIONS

```
  +-----------------------------------+-----------+---------------------+
  |  CONDITION ON d                   |  POSITION |  COMMON TANGENTS    |
  +-----------------------------------+-----------+---------------------+
  |  d  >  r1 + r2                    |  APART    |  4                  |
  |  d  =  r1 + r2                    |  TOUCH    |  3                  |
  |                                   |  OUTSIDE  |                     |
  |  |r1 - r2| < d < r1 + r2          |  CUT at   |  2                  |
  |                                   |  2 points |                     |
  |  d  =  |r1 - r2|                  |  TOUCH    |  1                  |
  |                                   |  INSIDE   |                     |
  |  d  <  |r1 - r2|                  |  ONE      |  0                  |
  |                                   |  INSIDE   |                     |
  |                                   |  THE OTHER|                     |
  +-----------------------------------+-----------+---------------------+

  MEMORY HOOK:   4 , 3 , 2 , 1 , 0   as the circles come closer together.
                 Just count DOWN. You cannot forget it.
```

---

## WHERE THE MARKS ARE (AP Inter, Maths IIB)

The Maths IIB paper is **75 marks**:

```
  SECTION A   10 questions x 2 marks = 20     ANSWER ALL 10
  SECTION B    7 questions x 4 marks = 20     ANSWER ANY 5
  SECTION C    7 questions x 7 marks = 35     ANSWER ANY 5
                                     ------
                                       75
```

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Angle between two circles | A | 2 |
| Show two circles are orthogonal / find k | A | 2 |
| Equation of the radical axis / common chord | A | 2 |
| Position of two circles, number of common tangents | A | 2 |
| Length of the common chord | B | 4 |
| Radical centre of three circles | B | 4 |
| Circle through the intersection of a circle and a line | B | 4 |
| Length of direct / transverse common tangents | B | 4 |
| **Circle through the intersection of two circles + one condition** | **C** | **7** |
| **Circle orthogonal to three given circles** | **C** | **7** |
| **Equations of the direct / transverse common tangents** | **C** | **7** |

**Total realistically available from this one chapter: about 13-15 marks out of 75.**

Chapter 1 (Circle) plus Chapter 2 (System of Circles) together are worth roughly
**20 of the 75 marks**, and the pass mark is 26. Two chapters, most of a pass.
Nothing else in IIB pays like this.

---

## WHERE IT SITS IN THE QUESTION PAPER

```
  +---------------------------------------------------------------+
  |  SECTION A  (2 marks, answer ALL)     ->  usually Q3 (or Q2)   |
  |  SECTION B  (4 marks, answer any 5)   ->  usually Q12 or Q13   |
  |  SECTION C  (7 marks, answer any 5)   ->  usually Q19          |
  +---------------------------------------------------------------+

  Chapter 1 is Q1/Q2, Q11, Q18.  Chapter 2 sits right after it.
  Do them BACK TO BACK in the exam - the formulas are still warm
  in your head.
```

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 0   REVISE from Chapter 1 (10 minutes, non-negotiable)
              centre = (-g, -f)  ,  radius = sqrt(g^2 + f^2 - c)
              S1 = value of the circle expression at a point
              length of tangent = sqrt(S1)
              perpendicular distance from a point to a line
                 |
  STEP 1   d = distance between the two centres. Compute r1, r2, d
           for every two-circle question, always, before anything else.
                 |
  STEP 2   THE FIVE POSITIONS + number of common tangents (4,3,2,1,0)
                 |
     +-----------+-----------+
     |                       |
  STEP 3                  STEP 4
  ANGLE between           RADICAL AXIS
  two circles             S1 - S2 = 0
  cos(theta) formula      (SUBTRACT - the easiest 2 marks
     |                     in the whole paper)
     |                       |
  STEP 5                  STEP 6
  ORTHOGONAL              Radical axis is PERPENDICULAR
  2g1g2 + 2f1f2           to the line of centres.
     = c1 + c2            Where does it lie?
     |                    cut -> common chord
     |                    touch -> common tangent
     |                    apart -> outside both
     |                       |
     |                    STEP 7
     |                    LENGTH of the common chord
     |                    = 2 sqrt(r^2 - p^2)
     |                       |
     +-----------+-----------+
                 |
  STEP 8   RADICAL CENTRE of three circles
           (take two radical axes and solve them together)
                 |
  STEP 9   Circle ORTHOGONAL to three given circles
           centre = radical centre , radius = tangent length
           <-- 7 MARK QUESTION
                 |
  STEP 10  FAMILY of circles   S1 + k S2 = 0   and   S + k L = 0
           Use ONE extra condition to pin down k.
           <-- 7 MARK QUESTION
                 |
  STEP 11  COMMON TANGENTS
           centres of similitude, lengths, equations
           <-- 7 MARK QUESTION
```

---

## THE FOUR FORMULAS THAT UNLOCK MOST QUESTIONS

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  1.  RADICAL AXIS  /  COMMON CHORD                               |
  |                                                                  |
  |         S1 - S2 = 0                                              |
  |                                                                  |
  |  2.  ORTHOGONALITY                                               |
  |                                                                  |
  |         2 g1 g2 + 2 f1 f2 = c1 + c2       (same as d^2=r1^2+r2^2)|
  |                                                                  |
  |  3.  LENGTH OF A CHORD at perpendicular distance p from centre   |
  |                                                                  |
  |         L = 2 sqrt( r^2 - p^2 )                                  |
  |                                                                  |
  |  4.  FAMILY THROUGH THE INTERSECTION                             |
  |                                                                  |
  |         S1 + k S2 = 0        (two circles)                       |
  |         S  + k L  = 0        (circle and line)                   |
  |                                                                  |
  +------------------------------------------------------------------+
```

---

## THE MOST COMMON WAY STUDENTS THROW AWAY MARKS HERE

```
  +---+--------------------------------------------------------------+
  | 1 | Not dividing by the leading coefficient first.               |
  |   | 3x^2 + 3y^2 + ... is NOT in the g,f,c form. DIVIDE BY 3.     |
  +---+--------------------------------------------------------------+
  | 2 | Writing the orthogonality condition as g1g2 + f1f2 = c1+c2.  |
  |   | The TWOS are on the left only:  2g1g2 + 2f1f2 = c1 + c2.     |
  +---+--------------------------------------------------------------+
  | 3 | Forgetting that d is the distance between CENTRES, not       |
  |   | between the circles.                                         |
  +---+--------------------------------------------------------------+
  | 4 | Calling S1 - S2 = 0 the "common chord" when the circles do   |
  |   | not even meet. Then it is only the RADICAL AXIS.             |
  +---+--------------------------------------------------------------+
  | 5 | Using |r1 - r2| without the modulus and getting a negative   |
  |   | distance.                                                    |
  +---+--------------------------------------------------------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  MORNING   (2.5 hours)
  ----------------------------------------------------------------
   0:00 - 0:20   Revise Chapter 1: centre, radius, length of tangent.
                 Write them on a card. You will use them all day.
   0:20 - 0:50   Compute r1, r2, d for 8 pairs of circles and state
                 the position + number of common tangents. Nothing else.
   0:50 - 1:30   Orthogonality. Do 10 questions of the type
                 "show orthogonal" and "find k".
   1:30 - 2:10   Radical axis: 10 questions of S1 - S2 = 0.
                 Also show it is perpendicular to the line of centres.
   2:10 - 2:30   Angle between circles. 4 questions. Answers are
                 almost always 45, 60 or 90 degrees.

  DAY 1  EVENING  (2 hours)
  ----------------------------------------------------------------
   0:00 - 0:45   Length of the common chord (6 questions).
   0:45 - 1:30   Radical centre (5 questions) and then the
                 CIRCLE ORTHOGONAL TO THREE CIRCLES (3 questions).
   1:30 - 2:00   Re-write today's formula card from memory.

  DAY 2  MORNING  (2.5 hours)
  ----------------------------------------------------------------
   0:00 - 1:00   Family of circles S1 + k S2 = 0. Six questions where
                 one extra condition fixes k (a point, a radius,
                 a centre on a line).
   1:00 - 1:30   Family S + k L = 0 with a circle and a line.
   1:30 - 2:30   Common tangents: lengths first (easy), then the
                 centres of similitude, then two full 7-mark
                 "find the equations of the common tangents".

  DAY 2  EVENING  (2 hours)
  ----------------------------------------------------------------
   0:00 - 1:00   Work straight through 03-pyq-ap-board.md Section A.
                 Cover the answer, write yours, then compare.
   1:00 - 1:45   Two Section C questions under a timer: 12 min each.
   1:45 - 2:00   Read 05-question-patterns.md end to end. Do the
                 5-second self-test.
```

---

## THE HONEST SUMMARY

```
  If you learn NOTHING else from this chapter, learn these three lines:

     S1 - S2 = 0                        (radical axis / common chord)
     2 g1 g2 + 2 f1 f2 = c1 + c2        (orthogonal)
     compare d with r1 + r2 and |r1-r2| (position, 4/3/2/1/0 tangents)

  Those three lines alone are worth about 6 marks in Section A every
  single year, and they take one evening to learn.
```
