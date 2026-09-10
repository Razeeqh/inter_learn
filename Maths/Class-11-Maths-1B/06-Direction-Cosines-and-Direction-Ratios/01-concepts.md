# Direction Cosines and Direction Ratios — Concepts

**Maths 1B · Chapter 6**

This is the longest file in the chapter. Read it with a pen in your hand. Every worked
example is written out in full — do not just read them, copy them onto paper.

Before you start, make sure you can do these three things from Chapter 5:

```
   1.  Plot a point P(x, y, z) roughly in space.
   2.  Find the distance  OP = sqrt(x^2 + y^2 + z^2).
   3.  Find the distance  AB = sqrt((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2).
```

If any of those three is shaky, go back and fix it first. This chapter is built on them.

---

# TOPIC 1 — WHAT IS A "DIRECTION" AND WHY DO WE NEED THREE NUMBERS?

## 1.1 The problem

In 2 dimensions, to describe which way a line points, one number is enough: the **slope**
`m`, or the angle it makes with the x-axis.

In 3 dimensions that falls apart. Stand in the middle of a room and point. "45 degrees
up" is not enough — 45 degrees up towards WHICH wall? You need more information.

So in space we describe a direction by giving the angles it makes with **all three axes**.

## 1.2 The three angles alpha, beta and gamma

Take a **directed line** — a line with an arrow on it, so it has a definite "forward" end.
Slide it (without turning it) until it passes through the origin `O`.

Now measure the angle it makes with each of the three **positive** axes.

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


        alpha  =  angle between OP and the POSITIVE x-axis
        beta   =  angle between OP and the POSITIVE y-axis
        gamma  =  angle between OP and the POSITIVE z-axis
```

Those three angles are called the **direction angles** of the line.

**Two rules about them:**

```
  RULE 1   Each angle is measured from the POSITIVE half of the axis,
           and is taken in the range     0 <= angle <= 180 degrees.

  RULE 2   An angle bigger than 90 degrees is perfectly normal.
           It just means the line leans BACKWARDS along that axis,
           and its cosine will come out NEGATIVE.
```

## 1.3 The room analogy

```
    Imagine a torch fixed at the corner of a dark room, shining somewhere.

       alpha small  ->  the beam hugs the x-axis (mostly "along the front wall")
       alpha = 90   ->  the beam is exactly sideways to x (no x-lean at all)
       alpha large  ->  the beam leans BACK, away from the positive x direction

    The three angles together pin the beam down completely.
```

> **TRAP:** The three angles are NOT independent and they do NOT add to anything nice.
> `alpha + beta + gamma` is not 180 degrees, not 270 degrees, not anything fixed. The
> relation between them is between their COSINES, which is Topic 2. Students lose whole
> questions by assuming the angles add up to something.

---

# TOPIC 2 — DIRECTION COSINES

## 2.1 The definition

```
  +---------------------------------------------------------------+
  |                                                               |
  |   If a directed line makes angles alpha, beta, gamma with     |
  |   the positive x, y and z axes, then                          |
  |                                                               |
  |        l  =  cos alpha                                        |
  |        m  =  cos beta                                         |
  |        n  =  cos gamma                                        |
  |                                                               |
  |   are called the DIRECTION COSINES of the line.               |
  |                                                               |
  |   We write them as the triple   (l, m, n).                    |
  |                                                               |
  +---------------------------------------------------------------+
```

Short form used everywhere: **d.c.'s**.

Why cosines and not the angles themselves? Because cosines are the numbers that behave.
The angles are awkward; their cosines obey one beautiful law, which is next.

## 2.2 THE LAW OF THE CHAPTER

```
  +===============================================================+
  |                                                               |
  |            l^2  +  m^2  +  n^2   =   1                        |
  |                                                               |
  |     i.e.   cos^2 alpha + cos^2 beta + cos^2 gamma  =  1       |
  |                                                               |
  +===============================================================+
```

This is true for **every** line in space, always, no exceptions.

## 2.3 THE PROOF — learn to write this, it is asked for marks

```
  Let the directed line pass through the origin O and through the point
  P(x, y, z).  Let  OP = r.

                          z
                          |
                          |             P(x, y, z)
                          |            /|
                          |     r    /  |
                          |        /    |
                          |      /      |  z
                          |    /        |
                          |  /  gamma   |
                          |/            |
                          O-------------+--------------- y
                         /|            /
                        / |           /
                       /  |          /
                      /   +---------+
                     /       (x, y, 0)
                    x

  STEP 1   Drop a perpendicular from P onto the x-axis. Its foot is the
           point A(x, 0, 0), so  OA = x.

           In the right-angled triangle OAP, the angle at O is alpha and
           the angle at A is 90 degrees.  Therefore

                          OA        x
              cos alpha = ---- =   ---            so     x  =  l r
                          OP        r

  STEP 2   Exactly the same argument with the y-axis and the z-axis gives

              cos beta  = y / r      so     y  =  m r
              cos gamma = z / r      so     z  =  n r

  STEP 3   But from the distance formula (Chapter 5),

              x^2 + y^2 + z^2  =  r^2

           Substituting x = lr, y = mr, z = nr :

              (l r)^2 + (m r)^2 + (n r)^2  =  r^2

              r^2 ( l^2 + m^2 + n^2 )  =  r^2

  STEP 4   Since P is not the origin, r is not 0, so we may divide by r^2 :

              l^2 + m^2 + n^2  =  1                      PROVED
```

**Two things this proof also hands you for free** (mark them, they are used constantly):

```
  +---------------------------------------------------------------+
  |                                                               |
  |   If a line through the ORIGIN has d.c.'s (l, m, n), then     |
  |   the point on it at distance r from O is                     |
  |                                                               |
  |               P  =  ( l r ,  m r ,  n r )                     |
  |                                                               |
  |   and conversely, for any point P(x, y, z) with OP = r,       |
  |   the d.c.'s of OP are                                        |
  |                                                               |
  |               ( x/r ,  y/r ,  z/r )                           |
  |                                                               |
  +---------------------------------------------------------------+
```

## 2.4 Two useful spin-offs of the law

Both of these have been asked as 2-mark questions in their own right.

```
  (i)    sin^2 alpha + sin^2 beta + sin^2 gamma  =  2

         PROOF:  sin^2 = 1 - cos^2 for each angle, so the left side is

                 (1 - cos^2 a) + (1 - cos^2 b) + (1 - cos^2 c)
               = 3 - (cos^2 a + cos^2 b + cos^2 c)
               = 3 - 1
               = 2


  (ii)   cos 2alpha + cos 2beta + cos 2gamma  =  -1

         PROOF:  cos 2A = 2 cos^2 A - 1 , so the left side is

                 (2cos^2 a - 1) + (2cos^2 b - 1) + (2cos^2 c - 1)
               = 2(cos^2 a + cos^2 b + cos^2 c) - 3
               = 2(1) - 3
               = -1
```

> **TRAP:** Students write `sin^2 a + sin^2 b + sin^2 c = 1`. It is **2**. Remember it as
> "three minus one".

## 2.5 The direction cosines of the coordinate axes

Just read them off. The x-axis makes 0 degrees with itself and 90 degrees with the others.

```
  +-------------+--------+-------+--------+---------------------+
  |   LINE      | alpha  | beta  | gamma  |   d.c.'s (l, m, n)  |
  +-------------+--------+-------+--------+---------------------+
  |   x - axis  |   0    |  90   |   90   |     ( 1, 0, 0 )     |
  |   y - axis  |  90    |   0   |   90   |     ( 0, 1, 0 )     |
  |   z - axis  |  90    |  90   |    0   |     ( 0, 0, 1 )     |
  +-------------+--------+-------+--------+---------------------+

  Check each row:   1+0+0 = 1  ,  0+1+0 = 1  ,  0+0+1 = 1      correct
```

## 2.6 A line has TWO sets of direction cosines

A line has two ends. Put the arrow on one end and you get angles `alpha, beta, gamma`.
Flip the arrow and every angle becomes its supplement: `180 - alpha`, and so on.

```
      cos(180 - alpha) = -cos alpha

   so the two sets are

              ( l ,  m ,  n )        and        ( -l , -m , -n )

                  <-------------- the same LINE -------------->
```

```
              (-l,-m,-n)                              (l,m,n)
         <---------------------O---------------------------->
                    one arrow           the other arrow
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |   A DIRECTED line (with an arrow) has ONE set of d.c.'s.      |
  |   An UNDIRECTED line has TWO sets, differing only in SIGN.    |
  |                                                               |
  |   Both are fully correct answers. If the question does not    |
  |   fix a direction, either set earns full marks.               |
  |                                                               |
  +---------------------------------------------------------------+
```

> **TRAP:** Do not "fix" a negative sign by dropping it. `(1/3, -2/3, 2/3)` is a valid set.
> `(1/3, 2/3, 2/3)` is a **different line**. You may flip **all three** signs together, or
> none. Never one or two.

## 2.7 WORKED EXAMPLE — the missing angle

**Q. A line makes angles 60 degrees and 45 degrees with the positive x and y axes. Find
the angle it makes with the positive z-axis.**

```
  alpha = 60      ->    l = cos 60 = 1/2
  beta  = 45      ->    m = cos 45 = 1/sqrt2

  Use  l^2 + m^2 + n^2 = 1 :

        (1/2)^2 + (1/sqrt2)^2 + n^2 = 1

           1/4    +    1/2      + n^2 = 1

                          n^2 = 1 - 1/4 - 1/2
                              = (4 - 1 - 2)/4
                              = 1/4

                          n   = +1/2   or   -1/2

        cos gamma = 1/2   ->  gamma = 60 degrees
        cos gamma = -1/2  ->  gamma = 120 degrees

  CHECK (take gamma = 60):  1/4 + 1/2 + 1/4 = 1        correct
```

**ANSWER: gamma = 60 degrees or 120 degrees.**

> **TRAP:** Writing only 60 and forgetting 120 costs a mark. Whenever you take a square
> root to find a direction cosine, **both signs are real answers** unless the question
> restricts the line (for example "the line makes an acute angle with the z-axis").

## 2.8 WORKED EXAMPLE — the equally inclined line

**Q. A line makes equal angles with all three coordinate axes. Find its direction cosines
and the common angle.**

```
  Equal angles  ->  alpha = beta = gamma  ->  l = m = n .   Call each one k.

        k^2 + k^2 + k^2 = 1
                  3 k^2 = 1
                    k^2 = 1/3
                    k   = +1/sqrt3   or   -1/sqrt3

  d.c.'s  =  ( 1/sqrt3 , 1/sqrt3 , 1/sqrt3 )   or the all-negative set.

  CHECK:  1/3 + 1/3 + 1/3 = 1        correct

  The angle:   cos alpha = 1/sqrt3   ->   alpha = cos^-1 (1/sqrt3)
                                              approximately 54 degrees 44 minutes
```

**ANSWER: `(1/sqrt3, 1/sqrt3, 1/sqrt3)`, common angle `cos^-1(1/sqrt3)`.**

This line is the **main diagonal of a cube** standing at the origin. Remember that picture;
EAPCET loves it.

---

# TOPIC 3 — DIRECTION RATIOS

## 3.1 Why we want something sloppier

Direction cosines are exact but painful — they almost always contain a square root in the
denominator. Working with `(1/3, 2/3, 2/3)` through five lines of algebra is miserable.

So we allow ourselves to use **any convenient multiple** instead.

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Three numbers (a, b, c), NOT all zero, are DIRECTION        |
  |   RATIOS of a line if they are PROPORTIONAL to the            |
  |   direction cosines of that line:                             |
  |                                                               |
  |            a  =  k l ,    b  =  k m ,    c  =  k n            |
  |                                                               |
  |   for some non-zero constant k.                               |
  |                                                               |
  |   Equivalently:      a / l  =  b / m  =  c / n                |
  |                                                               |
  +---------------------------------------------------------------+
```

Short form: **d.r.'s**.

## 3.2 A line has INFINITELY many sets of direction ratios

```
     (1, 2, 2)      (2, 4, 4)      (3, 6, 6)      (-1, -2, -2)
     (10, 20, 20)   (0.5, 1, 1)    (1/3, 2/3, 2/3)

                    ALL name the SAME line
```

That is the point. You are free to scale d.r.'s to whatever is convenient — clear the
fractions, cancel a common factor, flip all the signs. **None of it changes the line.**

```
  +----------------------+--------------------------+
  |  DIRECTION COSINES   |   DIRECTION RATIOS       |
  +----------------------+--------------------------+
  |  exactly 2 sets      |   infinitely many sets   |
  |  l^2+m^2+n^2 = 1     |   NO condition at all    |
  |  usually messy       |   you choose nice ones   |
  |  needed for angles   |   fine for angles too,   |
  |  and projections     |   with a longer formula  |
  +----------------------+--------------------------+
```

> **TRAP:** `(1, 2, 2)` are direction RATIOS, not direction cosines. If a question asks
> for **cosines** and you write `(1, 2, 2)`, you get zero. The giveaway is
> `1 + 4 + 4 = 9`, not 1.

## 3.3 Converting DIRECTION RATIOS to DIRECTION COSINES

```
  +===============================================================+
  |                                                               |
  |    Given d.r.'s  (a, b, c) ,   let                            |
  |                                                               |
  |             r  =  sqrt( a^2 + b^2 + c^2 )                     |
  |                                                               |
  |    Then the direction cosines are                             |
  |                                                               |
  |              a           b           c                        |
  |         ( +----- ,  +------- ,  +------- )                    |
  |            - r         - r         - r                        |
  |                                                               |
  |    with ALL THREE signs taken the same way.                   |
  |                                                               |
  +===============================================================+
```

**Why it works:** if `a = kl, b = km, c = kn` then

```
   a^2 + b^2 + c^2  =  k^2 (l^2 + m^2 + n^2)  =  k^2 (1)  =  k^2

   so  k = +/- sqrt(a^2+b^2+c^2) = +/- r ,  and  l = a/k = +/- a/r .
```

**The recipe in three words: divide by the length.**

## 3.4 WORKED EXAMPLE — the basic conversion

**Q. Find the direction cosines of the line whose direction ratios are `(2, -3, 6)`.**

```
  STEP 1    r = sqrt( 2^2 + (-3)^2 + 6^2 )
              = sqrt( 4 + 9 + 36 )
              = sqrt( 49 )
              = 7

  STEP 2    d.c.'s  =  ( 2/7 , -3/7 , 6/7 )      or   ( -2/7 , 3/7 , -6/7 )

  CHECK     (2/7)^2 + (-3/7)^2 + (6/7)^2
              =  4/49 + 9/49 + 36/49
              =  49/49
              =  1                                     correct
```

**ANSWER: `(2/7, -3/7, 6/7)` (or the all-negative set).**

## 3.5 The Pythagorean triples worth memorising

Exam setters reuse these because the square root comes out whole. Recognising them saves
you 30 seconds each time.

```
  +---------------------+---------+-------------------------------+
  |   d.r.'s            |    r    |   d.c.'s                      |
  +---------------------+---------+-------------------------------+
  |   (1, 2, 2)         |    3    |   (1/3, 2/3, 2/3)             |
  |   (2, 2, 1)         |    3    |   (2/3, 2/3, 1/3)             |
  |   (1, -2, 2)        |    3    |   (1/3, -2/3, 2/3)            |
  |   (3, 4, 0)         |    5    |   (3/5, 4/5, 0)               |
  |   (2, -3, 6)        |    7    |   (2/7, -3/7, 6/7)            |
  |   (3, 6, -2)        |    7    |   (3/7, 6/7, -2/7)            |
  |   (6, 2, 3)         |    7    |   (6/7, 2/7, 3/7)             |
  |   (3, -4, 12)       |   13    |   (3/13, -4/13, 12/13)        |
  |   (4, 3, 12)        |   13    |   (4/13, 3/13, 12/13)         |
  |   (1, 1, 1)         | sqrt3   |   (1/sqrt3, 1/sqrt3, 1/sqrt3) |
  |   (1, 1, 0)         | sqrt2   |   (1/sqrt2, 1/sqrt2, 0)       |
  +---------------------+---------+-------------------------------+
```

## 3.6 WORKED EXAMPLE — clearing fractions first

**Q. Find the direction cosines of the line with direction ratios `(1/2, 1/3, 1/6)`.**

```
  You MAY work with these directly, but life is easier if you scale first.

  STEP 1    Multiply all three by the LCM of 2, 3 and 6, which is 6:

                 (1/2, 1/3, 1/6)  x 6   ->   (3, 2, 1)

            This is a legal move: d.r.'s may be multiplied by any non-zero number.

  STEP 2    r = sqrt(9 + 4 + 1) = sqrt(14)

  STEP 3    d.c.'s = ( 3/sqrt14 , 2/sqrt14 , 1/sqrt14 )

  CHECK     (9 + 4 + 1)/14 = 14/14 = 1                 correct
```

**ANSWER: `(3/sqrt14, 2/sqrt14, 1/sqrt14)`.**

> **TRAP:** Do not scale one number and forget the others. Multiply **all three** or none.

---

# TOPIC 4 — THE LINE JOINING TWO POINTS

This is the single most used fact in the chapter.

## 4.1 The rule

```
  +===============================================================+
  |                                                               |
  |   For the line joining  A(x1, y1, z1)  to  B(x2, y2, z2) :    |
  |                                                               |
  |     DIRECTION RATIOS  =  ( x2-x1 ,  y2-y1 ,  z2-z1 )          |
  |                                                               |
  |     and with  AB = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )  |
  |                                                               |
  |                        x2-x1     y2-y1     z2-z1              |
  |     DIRECTION COSINES = ( ----- ,  ----- ,  ----- )           |
  |                          AB        AB        AB               |
  |                                                               |
  +===============================================================+
```

**In words: SUBTRACT the coordinates. Then divide by the distance.**

## 4.2 Why it is true

Slide the segment `AB` until `A` sits on the origin. Then `B` moves to
`(x2-x1, y2-y1, z2-z1)`, and sliding does not change a direction. By the box in section
2.3, the d.c.'s of a line from the origin to a point are that point divided by its
distance from the origin — which is exactly the formula above.

```
                 B(x2,y2,z2)                       B'(x2-x1, y2-y1, z2-z1)
                /                                 /
               /            SLIDE                /
              /            ------->             /
             /                                 /
        A(x1,y1,z1)                           O(0,0,0)

        same direction, and now it starts at the origin
```

## 4.3 WORKED EXAMPLE

**Q. Find the direction ratios and direction cosines of the line joining
`A(4, 3, -5)` and `B(-2, 1, -8)`.**

```
  STEP 1    d.r.'s = ( -2 - 4 , 1 - 3 , -8 - (-5) )
                   = ( -6 , -2 , -3 )

  STEP 2    AB = sqrt( (-6)^2 + (-2)^2 + (-3)^2 )
               = sqrt( 36 + 4 + 9 )
               = sqrt( 49 )
               = 7

  STEP 3    d.c.'s = ( -6/7 , -2/7 , -3/7 )

  CHECK     36/49 + 4/49 + 9/49  =  49/49  =  1        correct
```

**ANSWER: d.r.'s `(-6, -2, -3)`; d.c.'s `(-6/7, -2/7, -3/7)`.**

If you had subtracted the other way round (`A - B`) you would get `(6, 2, 3)` and
`(6/7, 2/7, 3/7)` — the other set, equally correct. It is the direction from `B` to `A`
instead of from `A` to `B`.

> **TRAP:** Sign slips on `z`. `-8 - (-5)` is `-8 + 5 = -3`, not `-13`. Write the brackets
> out. This one mistake destroys more marks in this chapter than anything else.

## 4.4 WORKED EXAMPLE — through the origin

**Q. Find the direction cosines of the line joining the origin `O(0,0,0)` and
`P(2, 3, 6)`.**

```
  d.r.'s  = (2 - 0, 3 - 0, 6 - 0) = (2, 3, 6)

  OP      = sqrt(4 + 9 + 36) = sqrt(49) = 7

  d.c.'s  = ( 2/7 , 3/7 , 6/7 )

  CHECK   (4 + 9 + 36)/49 = 1                          correct
```

**ANSWER: `(2/7, 3/7, 6/7)`.**

---

# TOPIC 5 — PROJECTIONS

## 5.1 What a projection is

Shine a light straight down onto a line. The **shadow** of a segment is its projection.

```
                            B
                           /|
                          / |
                         /  |
                        /   |
                       /    |
                      A     |
                      |     |
                      |     |
      ----------------+-----+-------------------------  the line L
                      A'    B'

           A'B'  is the PROJECTION of the segment AB on the line L
           (both perpendiculars are dropped onto L)
```

## 5.2 The formula

```
  +===============================================================+
  |                                                               |
  |   The projection of the segment joining A(x1,y1,z1) and       |
  |   B(x2,y2,z2) on a line whose direction cosines are (l,m,n)   |
  |   is                                                          |
  |                                                               |
  |     l (x2 - x1)  +  m (y2 - y1)  +  n (z2 - z1)               |
  |                                                               |
  |   Equivalently, if AB has length d and makes an angle theta   |
  |   with the line, the projection is    d cos theta .           |
  |                                                               |
  +===============================================================+
```

> **TRAP:** The line you project ONTO must be given by direction **COSINES**. If you are
> handed direction **ratios**, convert them first (divide by `r`). Forgetting this is the
> classic error and gives an answer that is `r` times too big.

The projection can be **negative** — that simply means the shadow points backwards along
the line. If the question says "find the length of the projection", take the modulus.

## 5.3 Projections on the coordinate axes

Set `(l, m, n)` to `(1,0,0)`, `(0,1,0)`, `(0,0,1)` in turn:

```
  +--------------------------------------------------------------+
  |                                                              |
  |   Projection of AB on the x-axis  =  x2 - x1                 |
  |   Projection of AB on the y-axis  =  y2 - y1                 |
  |   Projection of AB on the z-axis  =  z2 - z1                 |
  |                                                              |
  |   So the DIRECTION RATIOS of AB are exactly its              |
  |   PROJECTIONS ON THE THREE AXES.                             |
  |                                                              |
  +--------------------------------------------------------------+
```

That is a satisfying way to remember Topic 4: **the differences of the coordinates are the
three shadows.**

Read backwards, this gives a useful 2-marker:

```
  If the projections of a segment on the three axes are p, q, r then

        the LENGTH of the segment  =  sqrt( p^2 + q^2 + r^2 )

        its direction cosines      =  ( p/L , q/L , r/L )   where L is that length
```

## 5.4 WORKED EXAMPLE

**Q. Find the projection of the segment joining `A(3, 4, 5)` and `B(4, 6, 3)` on the line
joining `C(-1, 2, 4)` and `D(1, 0, 5)`.**

```
  STEP 1   Direction ratios of the line CD (the line we project ONTO):

              ( 1 - (-1) , 0 - 2 , 5 - 4 )  =  ( 2 , -2 , 1 )

  STEP 2   Convert to direction COSINES (this step is compulsory):

              r  = sqrt(4 + 4 + 1) = sqrt(9) = 3

              (l, m, n) = ( 2/3 , -2/3 , 1/3 )

              CHECK: (4 + 4 + 1)/9 = 1                  correct

  STEP 3   The differences for the segment AB:

              ( 4 - 3 , 6 - 4 , 3 - 5 )  =  ( 1 , 2 , -2 )

  STEP 4   Projection = l(1) + m(2) + n(-2)

                      = (2/3)(1) + (-2/3)(2) + (1/3)(-2)

                      = 2/3 - 4/3 - 2/3

                      = -4/3
```

**ANSWER: projection `= -4/3`; its length is `4/3`.**

The minus sign says the shadow of `AB` runs opposite to the direction `C -> D`.

## 5.5 WORKED EXAMPLE — the other way round

**Q. The projections of a line segment on the x, y and z axes are `12, 4, 3`. Find the
length of the segment and its direction cosines.**

```
  Length  L = sqrt( 12^2 + 4^2 + 3^2 )
            = sqrt( 144 + 16 + 9 )
            = sqrt( 169 )
            = 13

  d.c.'s  = ( 12/13 , 4/13 , 3/13 )

  CHECK   (144 + 16 + 9)/169 = 169/169 = 1              correct
```

**ANSWER: length `13`, direction cosines `(12/13, 4/13, 3/13)`.**

---

# TOPIC 6 — THE ANGLE BETWEEN TWO LINES

This is the formula that earns the most marks in the chapter.

## 6.1 In terms of direction cosines

```
  +===============================================================+
  |                                                               |
  |   If two lines have direction cosines                         |
  |                                                               |
  |        (l1, m1, n1)     and     (l2, m2, n2)                  |
  |                                                               |
  |   and theta is the angle between them, then                   |
  |                                                               |
  |        cos theta  =  l1 l2  +  m1 m2  +  n1 n2                |
  |                                                               |
  +===============================================================+
```

**In words: multiply matching entries, add the three products. That is the cosine.**

There is no denominator, because both triples already have length 1.

**Where it comes from (short version):** put both lines through the origin. Take
`P = (l1, m1, n1)` on the first (it is at distance 1 from `O`, by the law of the chapter)
and `Q = (l2, m2, n2)` on the second. Apply the cosine rule to triangle `OPQ` with
`OP = OQ = 1`:

```
     PQ^2 = OP^2 + OQ^2 - 2 (OP)(OQ) cos theta = 2 - 2 cos theta

  and directly by the distance formula,

     PQ^2 = (l1-l2)^2 + (m1-m2)^2 + (n1-n2)^2
          = (l1^2+m1^2+n1^2) + (l2^2+m2^2+n2^2) - 2(l1l2 + m1m2 + n1n2)
          = 1 + 1 - 2(l1l2 + m1m2 + n1n2)

  Comparing the two:      cos theta  =  l1l2 + m1m2 + n1n2
```

## 6.2 In terms of direction ratios

If you only have d.r.'s, put in the two lengths yourself:

```
  +===============================================================+
  |                                                               |
  |                       a1a2  +  b1b2  +  c1c2                  |
  |   cos theta  =  --------------------------------------------  |
  |                 sqrt(a1^2+b1^2+c1^2) . sqrt(a2^2+b2^2+c2^2)   |
  |                                                               |
  |   For the ACUTE angle between the lines, put the numerator    |
  |   inside a modulus.                                           |
  |                                                               |
  +===============================================================+
```

## 6.3 The SINE form

Sometimes the sine is wanted (and it is safer when the angle is small).

```
  +===============================================================+
  |                                                               |
  |   With direction COSINES:                                     |
  |                                                               |
  |   sin theta = sqrt[ (l1 m2 - l2 m1)^2                         |
  |                   + (m1 n2 - m2 n1)^2                         |
  |                   + (n1 l2 - n2 l1)^2 ]                       |
  |                                                               |
  |                                                               |
  |   With direction RATIOS:                                      |
  |                                                               |
  |                sqrt[ (a1b2-a2b1)^2 + (b1c2-b2c1)^2            |
  |                                     + (c1a2-c2a1)^2 ]         |
  |   sin theta = -------------------------------------------     |
  |               sqrt(a1^2+b1^2+c1^2) . sqrt(a2^2+b2^2+c2^2)     |
  |                                                               |
  +===============================================================+
```

Those three bracketed quantities are exactly the **cross-product** entries you will meet
again in Topic 8. Learn them once, use them twice.

The sine form is really just `sin^2 = 1 - cos^2` written out, using the identity

```
   (a1^2+b1^2+c1^2)(a2^2+b2^2+c2^2) - (a1a2+b1b2+c1c2)^2
             =  (a1b2-a2b1)^2 + (b1c2-b2c1)^2 + (c1a2-c2a1)^2
```

## 6.4 WORKED EXAMPLE — both forms, with a cross-check

**Q. Find the angle between the lines whose direction ratios are `(1, 2, 1)` and
`(2, 3, -1)`.**

```
  STEP 1    The dot part:

              a1a2 + b1b2 + c1c2 = (1)(2) + (2)(3) + (1)(-1)
                                 = 2 + 6 - 1
                                 = 7

  STEP 2    The two lengths:

              sqrt(1 + 4 + 1) = sqrt6
              sqrt(4 + 9 + 1) = sqrt14

  STEP 3    cos theta = 7 / ( sqrt6 . sqrt14 )
                      = 7 / sqrt84
                      = 7 / (2 sqrt21)

            Rationalise:  = 7 sqrt21 / 42  =  sqrt21 / 6

  STEP 4    theta = cos^-1 ( sqrt21 / 6 )       approximately 40 degrees 12 minutes


  CROSS-CHECK WITH THE SINE FORM

            a1b2 - a2b1 = (1)(3) - (2)(2) = 3 - 4  = -1
            b1c2 - b2c1 = (2)(-1) - (3)(1) = -2 - 3 = -5
            c1a2 - c2a1 = (1)(2) - (-1)(1) = 2 + 1 =  3

            sqrt(1 + 25 + 9) = sqrt35

            sin theta = sqrt35 / sqrt84 = sqrt(35/84) = sqrt(5/12) = sqrt15 / 6

            NOW CHECK:  sin^2 + cos^2 = 15/36 + 21/36 = 36/36 = 1     correct
```

**ANSWER: `theta = cos^-1(sqrt21 / 6)`, equivalently `sin^-1(sqrt15 / 6)`.**

Notice how clean the check is: `15 + 21 = 36`. Do this every time — it catches arithmetic
slips instantly.

## 6.5 WORKED EXAMPLE — a nice 60 degrees

**Q. Show that the lines with direction ratios `(1, 1, 2)` and
`(sqrt3 - 1, -sqrt3 - 1, 4)` are inclined at 60 degrees.**

```
  STEP 1    Numerator:

              (1)(sqrt3 - 1) + (1)(-sqrt3 - 1) + (2)(4)

              = sqrt3 - 1 - sqrt3 - 1 + 8

              = 6                      (the sqrt3 terms cancel)

  STEP 2    First length:  sqrt(1 + 1 + 4) = sqrt6

  STEP 3    Second length:

              (sqrt3 - 1)^2 = 3 - 2 sqrt3 + 1 = 4 - 2 sqrt3
              (-sqrt3 - 1)^2 = 3 + 2 sqrt3 + 1 = 4 + 2 sqrt3
              4^2 = 16

              sum = (4 - 2sqrt3) + (4 + 2sqrt3) + 16 = 24

              length = sqrt24 = 2 sqrt6

  STEP 4    cos theta =  6 / ( sqrt6 . 2 sqrt6 )
                      =  6 / ( 2 . 6 )
                      =  6 / 12
                      =  1/2

            theta = 60 degrees                                    PROVED
```

## 6.6 WORKED EXAMPLE — a 60 degrees with clean numbers

**Q. Find the angle between the lines with d.r.'s `(4, -3, 5)` and `(3, 4, 5)`.**

```
  Numerator = (4)(3) + (-3)(4) + (5)(5) = 12 - 12 + 25 = 25

  Lengths   = sqrt(16 + 9 + 25) = sqrt50 = 5 sqrt2
              sqrt(9 + 16 + 25) = sqrt50 = 5 sqrt2

  cos theta = 25 / (5 sqrt2 . 5 sqrt2) = 25 / 50 = 1/2

  theta = 60 degrees
```

**ANSWER: 60 degrees.**

---

# TOPIC 7 — PERPENDICULAR AND PARALLEL LINES

These two tests are pure gift marks. Learn them and never lose them.

## 7.1 PERPENDICULAR

```
  +===============================================================+
  |                                                               |
  |   theta = 90   <=>   cos theta = 0   <=>   numerator = 0      |
  |                                                               |
  |     with d.c.'s :     l1 l2 + m1 m2 + n1 n2  =  0             |
  |                                                               |
  |     with d.r.'s :     a1 a2 + b1 b2 + c1 c2  =  0             |
  |                                                               |
  +===============================================================+
```

Multiply matching entries, add them, get zero. Two lines of working.

## 7.2 PARALLEL

```
  +===============================================================+
  |                                                               |
  |   The lines are PARALLEL when their directions are the same   |
  |   apart from scale:                                           |
  |                                                               |
  |         a1       b1       c1                                  |
  |        ----  =  ----  =  ----                                 |
  |         a2       b2       c2                                  |
  |                                                               |
  |   With direction COSINES it is even simpler:                  |
  |                                                               |
  |        l1 = l2 ,  m1 = m2 ,  n1 = n2                          |
  |        (or all three with the opposite sign)                  |
  |                                                               |
  +===============================================================+
```

> **TRAP:** If one of `a2, b2, c2` is zero, do not write the fraction. Say it in words
> instead: "the d.r.'s are proportional, with constant of proportionality `k = ...`", and
> show the matching zero on the other side. For example `(2, 0, 3)` and `(4, 0, 6)` are
> parallel even though `0/0` is meaningless.

## 7.3 WORKED EXAMPLE — perpendicular

**Q. Show that the line joining `A(1, 2, 3)` and `B(3, 1, 4)` is perpendicular to the line
joining `C(2, 0, 1)` and `D(3, 2, 1)`.**

```
  STEP 1   d.r.'s of AB = (3-1, 1-2, 4-3) = ( 2, -1, 1 )

  STEP 2   d.r.'s of CD = (3-2, 2-0, 1-1) = ( 1,  2, 0 )

  STEP 3   a1a2 + b1b2 + c1c2 = (2)(1) + (-1)(2) + (1)(0)
                              = 2 - 2 + 0
                              = 0

           Therefore AB is perpendicular to CD.                   PROVED
```

## 7.4 WORKED EXAMPLE — find the unknown

**Q. Find `k` if the lines with d.r.'s `(k, 2, 3)` and `(2, -3, 4)` are perpendicular.**

```
  Perpendicular  ->  (k)(2) + (2)(-3) + (3)(4) = 0

                     2k - 6 + 12 = 0

                     2k + 6 = 0

                     k = -3

  CHECK  with k = -3:  (-3)(2) + (2)(-3) + (3)(4) = -6 - 6 + 12 = 0   correct
```

**ANSWER: `k = -3`.**

## 7.5 WORKED EXAMPLE — find the unknown, parallel version

**Q. Find `p` and `q` if the lines with d.r.'s `(2, p, 3)` and `(4, -6, q)` are parallel.**

```
  Parallel  ->  2/4 = p/(-6) = 3/q

  From 2/4 = 1/2, the scale factor from the first to the second is 2.

     p . 2 = -6      ->  p = -3
     3 . 2 =  q      ->  q =  6

  CHECK   (2, -3, 3) x 2 = (4, -6, 6)                             correct
```

**ANSWER: `p = -3`, `q = 6`.**

---

# TOPIC 8 — A LINE PERPENDICULAR TO TWO GIVEN LINES

## 8.1 The situation

You are given two lines. You want a third line at right angles to **both** of them.

```
                       the line we WANT
                              ^
                              |
                              |
                              |
                              O ----------->  line 2   (a2, b2, c2)
                             /
                            /
                           /
                          v
                       line 1  (a1, b1, c1)

              the new line is perpendicular to BOTH
```

Call the unknown d.r.'s `(a, b, c)`. The two perpendicularity conditions give

```
        a1 a  +  b1 b  +  c1 c  =  0
        a2 a  +  b2 b  +  c2 c  =  0
```

Two equations, three unknowns. That is fine — we only need the **ratio** `a : b : c`, and
the cross-multiplication rule delivers exactly that.

## 8.2 THE CROSS-MULTIPLICATION DIAGRAM

Write the two rows of coefficients, then **repeat the first column at the end**, and drop
the first column from the front. Then multiply across the diagonals.

```
   Write:                 b1      c1      a1      b1
                            \    /  \    /  \    /
                             \  /    \  /    \  /
                              \/      \/      \/
                              /\      /\      /\
                             /  \    /  \    /  \
                            /    \  /    \  /    \
                          b2      c2      a2      b2

   Each crossing gives   (down-right product) - (down-left product) :

              a                 b                 c
        -------------     -------------     -------------
        b1 c2 - b2 c1     c1 a2 - c2 a1     a1 b2 - a2 b1
```

```
  +===============================================================+
  |                                                               |
  |   d.r.'s of the line perpendicular to BOTH given lines:       |
  |                                                               |
  |    ( b1c2 - b2c1 ,   c1a2 - c2a1 ,   a1b2 - a2b1 )            |
  |                                                               |
  |   This is the CROSS PRODUCT of the two direction vectors.     |
  |                                                               |
  +===============================================================+
```

Memory hook for the middle entry: the pattern is `bc`, then `ca`, then `ab` — the letters
**cycle**: `a -> b -> c -> a`. The middle one is `ca`, **not** `ac`. Getting that backwards
flips the sign of the middle entry and is the number-one error here.

## 8.3 The determinant layout (same thing, different picture)

If you prefer determinants:

```
        | i    j    k  |
        | a1   b1   c1 |     ->   i (b1c2 - b2c1)
        | a2   b2   c2 |          - j (a1c2 - a2c1)
                                  + k (a1b2 - a2b1)

        The minus in front of j is exactly what turns  (a1c2 - a2c1)
        into  (c1a2 - c2a1).
```

## 8.4 THE CHECK YOU MUST ALWAYS DO

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Dot your answer with line 1  ->  must be 0                  |
  |   Dot your answer with line 2  ->  must be 0                  |
  |                                                               |
  |   Two lines of arithmetic. It catches every sign error.       |
  |                                                               |
  +---------------------------------------------------------------+
```

## 8.5 WORKED EXAMPLE

**Q. Find the direction cosines of the line perpendicular to both the lines whose
direction ratios are `(1, -1, 1)` and `(2, 1, -1)`.**

```
  STEP 1    Set up the cross-multiplication:

                    -1       1       1      -1
                      \     / \     / \     /
                       \   /   \   /   \   /
                        \ /     \ /     \ /
                        / \     / \     / \
                       /   \   /   \   /   \
                      /     \ /     \ /     \
                     1      -1       2       1

              a = (-1)(-1) - (1)(1)  =  1 - 1  =  0
              b = (1)(2)   - (-1)(1) =  2 + 1  =  3
              c = (1)(1)   - (-1)(2) =  1 + 2  =  3

              d.r.'s = ( 0 , 3 , 3 )

  STEP 2    Simplify by dividing by 3 (always allowed for d.r.'s):

              d.r.'s = ( 0 , 1 , 1 )

  STEP 3    CHECK both dot products:

              (1, -1, 1) . (0, 1, 1) = 0 - 1 + 1 = 0        correct
              (2,  1,-1) . (0, 1, 1) = 0 + 1 - 1 = 0        correct

  STEP 4    Convert to direction cosines:

              r = sqrt(0 + 1 + 1) = sqrt2

              d.c.'s = ( 0 , 1/sqrt2 , 1/sqrt2 )

              CHECK: 0 + 1/2 + 1/2 = 1                      correct
```

**ANSWER: d.r.'s `(0, 1, 1)`; d.c.'s `(0, 1/sqrt2, 1/sqrt2)`.**

## 8.6 WORKED EXAMPLE — with points instead of ratios

**Q. Find the direction ratios of the line perpendicular to both `AB` and `CD`, where
`A(1, 0, 2)`, `B(2, 2, 5)`, `C(0, 1, 1)` and `D(2, 4, 7)`.**

```
  STEP 1    d.r.'s of AB = (2-1, 2-0, 5-2) = ( 1, 2, 3 )
            d.r.'s of CD = (2-0, 4-1, 7-1) = ( 2, 3, 6 )

  STEP 2    Cross-multiply:

              a = (2)(6) - (3)(3) = 12 - 9  =  3
              b = (3)(2) - (6)(1) =  6 - 6  =  0
              c = (1)(3) - (2)(2) =  3 - 4  = -1

              d.r.'s = ( 3 , 0 , -1 )

  STEP 3    CHECK:

              (1,2,3) . (3,0,-1) = 3 + 0 - 3 = 0            correct
              (2,3,6) . (3,0,-1) = 6 + 0 - 6 = 0            correct

  STEP 4    d.c.'s:  r = sqrt(9 + 0 + 1) = sqrt10

              ( 3/sqrt10 , 0 , -1/sqrt10 )

              CHECK: 9/10 + 0 + 1/10 = 1                    correct
```

**ANSWER: d.r.'s `(3, 0, -1)`; d.c.'s `(3/sqrt10, 0, -1/sqrt10)`.**

> **TRAP:** If the cross product comes out `(0, 0, 0)`, that means the two given lines were
> **parallel** — there is no unique perpendicular direction, there are infinitely many.
> Say so; do not try to divide by zero.

---

# TOPIC 9 — COLLINEAR POINTS

## 9.1 The idea

Three points `A`, `B`, `C` lie on one straight line exactly when the direction `A -> B` is
the same as the direction `B -> C`.

```
        A---------B----------------C          same direction, collinear

        A---------B
                   \
                    \
                     C                        different direction, NOT collinear
```

```
  +===============================================================+
  |                                                               |
  |   A, B, C are COLLINEAR                                       |
  |                                                               |
  |        <=>   d.r.'s of AB  are PROPORTIONAL to  d.r.'s of BC  |
  |                                                               |
  |   That is,  (x2-x1, y2-y1, z2-z1) = k (x3-x2, y3-y2, z3-z2)   |
  |   for the SAME k in all three positions.                      |
  |                                                               |
  +===============================================================+
```

The alternative from Chapter 5 (`AB + BC = AC`) also works, but it needs three square
roots. The direction-ratio method is faster and never involves a surd.

## 9.2 WORKED EXAMPLE

**Q. Show that the points `A(2, 3, -4)`, `B(1, -2, 3)` and `C(3, 8, -11)` are collinear.**

```
  STEP 1   d.r.'s of AB = ( 1-2 , -2-3 , 3-(-4) ) = ( -1 , -5 ,  7 )

  STEP 2   d.r.'s of BC = ( 3-1 , 8-(-2) , -11-3 ) = ( 2 , 10 , -14 )

  STEP 3   Compare, entry by entry:

                2 / (-1)  = -2
               10 / (-5)  = -2
              -14 /   7   = -2

           All three ratios equal -2, so BC = -2 (AB).

           The direction ratios are proportional, so AB and BC are
           parallel lines. They also share the point B.
           Two parallel lines through a common point are the SAME line.

           Therefore A, B, C are collinear.                       PROVED
```

The negative constant `-2` tells you something extra: `B` lies **between**... actually it
tells you `C` is on the opposite side of `B` from `A`, at twice the distance. You do not
need that for marks, but it is a good sanity check on the picture.

## 9.3 WORKED EXAMPLE — find the missing coordinate

**Q. Find `k` so that `A(1, 2, 3)`, `B(4, 0, 4)` and `C(-2, k, 2)` are collinear.**

```
  STEP 1   d.r.'s of AB = (4-1, 0-2, 4-3) = ( 3, -2, 1 )

  STEP 2   d.r.'s of BC = (-2-4, k-0, 2-4) = ( -6, k, -2 )

  STEP 3   For collinearity these must be proportional:

              -6 / 3  =  k / (-2)  =  -2 / 1

           The first and third both give -2, which is consistent.
           So the middle must also be -2:

              k / (-2) = -2    ->    k = 4

  CHECK    d.r.'s of BC = (-6, 4, -2) = -2 (3, -2, 1)             correct
```

**ANSWER: `k = 4`.**

> **TRAP:** Do not just match one pair of entries and stop. All three ratios must agree,
> and you must **say** that they agree. That sentence is worth a mark.

---

# TOPIC 10 — THE BISECTORS OF THE ANGLE BETWEEN TWO LINES

## 10.1 The rule

```
  +===============================================================+
  |                                                               |
  |   Two lines through a point have direction COSINES            |
  |   (l1, m1, n1) and (l2, m2, n2). Then                         |
  |                                                               |
  |   INTERNAL bisector:  d.r.'s  ( l1+l2 , m1+m2 , n1+n2 )       |
  |                                                               |
  |   EXTERNAL bisector:  d.r.'s  ( l1-l2 , m1-m2 , n1-n2 )       |
  |                                                               |
  |   Convert each to direction cosines in the usual way.         |
  |                                                               |
  +===============================================================+
```

```
                         internal bisector
                                |
                    line 1      |      line 2
                        \       |       /
                         \      |      /
                          \     |     /
                           \    |    /
                            \   |   /
                             \  |  /
                              \ | /
        -----------------------\|/------------------------
        external bisector        O

        The internal and external bisectors are always
        PERPENDICULAR to each other. Use that as your check.
```

## 10.2 Why the sum works

Both `(l1, m1, n1)` and `(l2, m2, n2)` have length **1**. Adding two arrows of equal length
gives the diagonal of a **rhombus**, and the diagonal of a rhombus bisects its angle. That
is the whole reason.

> **TRAP:** This rule needs direction **COSINES**, not ratios. If you add two sets of
> ratios of different lengths, you get the diagonal of a parallelogram that is not a
> rhombus, and it does **not** bisect the angle. **Convert to cosines first.**

## 10.3 WORKED EXAMPLE

**Q. Two lines have direction cosines `(1/3, 2/3, 2/3)` and `(2/3, -2/3, 1/3)`. Find the
direction cosines of the bisectors of the angles between them.**

```
  STEP 0    Confirm they really are direction cosines:
              1/9 + 4/9 + 4/9 = 1                            correct
              4/9 + 4/9 + 1/9 = 1                            correct

  STEP 1    INTERNAL bisector, d.r.'s = sum:

              ( 1/3 + 2/3 , 2/3 - 2/3 , 2/3 + 1/3 )  =  ( 1 , 0 , 1 )

              r = sqrt(1 + 0 + 1) = sqrt2

              d.c.'s = ( 1/sqrt2 , 0 , 1/sqrt2 )

              CHECK: 1/2 + 0 + 1/2 = 1                       correct

  STEP 2    EXTERNAL bisector, d.r.'s = difference:

              ( 1/3 - 2/3 , 2/3 + 2/3 , 2/3 - 1/3 )  =  ( -1/3 , 4/3 , 1/3 )

              Multiply by 3 to clear fractions:  ( -1 , 4 , 1 )

              r = sqrt(1 + 16 + 1) = sqrt18 = 3 sqrt2

              d.c.'s = ( -1/(3 sqrt2) , 4/(3 sqrt2) , 1/(3 sqrt2) )

              CHECK: (1 + 16 + 1)/18 = 18/18 = 1             correct

  STEP 3    FINAL CHECK - the two bisectors must be perpendicular:

              ( 1, 0, 1 ) . ( -1, 4, 1 )  =  -1 + 0 + 1  =  0    correct
```

**ANSWER: internal `(1/sqrt2, 0, 1/sqrt2)`; external
`(-1/(3sqrt2), 4/(3sqrt2), 1/(3sqrt2))`.**

---

# TOPIC 11 — THE ANGLE BETWEEN A LINE AND A COORDINATE PLANE

## 11.1 The key switch: use SINE, not cosine

The angle between a line and a plane is measured between the line and its **shadow** in
the plane — not between the line and the normal.

```
                          z
                          |
                          |        the line
                          |       /
                          |      /
                          |     /
                          |    /
                          |   /
                          |  /
                          | /  \  phi   <- the angle we want
                          |/     \
        ------------------O-------\--------------- (the xy-plane, seen edge-on)
                                    shadow of the line
```

The `z`-axis is the normal to the `xy`-plane. If the line makes `gamma` with the `z`-axis,
then it makes `90 - gamma` with the plane. And `cos gamma = n`, so

```
   sin (angle with the xy-plane) = cos gamma = |n|
```

```
  +===============================================================+
  |                                                               |
  |   For a line with direction cosines (l, m, n) :               |
  |                                                               |
  |     angle with the  yz - plane :   sin phi  =  |l|            |
  |     angle with the  zx - plane :   sin phi  =  |m|            |
  |     angle with the  xy - plane :   sin phi  =  |n|            |
  |                                                               |
  |   MEMORY RULE: the letter MISSING from the plane's name is    |
  |   the one you use.  xy-plane is missing z, so use n.          |
  |                                                               |
  +===============================================================+
```

Because `l^2 + m^2 + n^2 = 1`, you also get for free:

```
   sin^2(angle with yz) + sin^2(angle with zx) + sin^2(angle with xy)  =  1
```

> **TRAP:** LINE vs LINE uses **cos**. LINE vs PLANE uses **sin**. Write the two words in
> the margin of your answer sheet before you start: `line-line = COS, line-plane = SIN`.

## 11.2 WORKED EXAMPLE

**Q. A line has direction ratios `(1, 2, 2)`. Find the angles it makes with the three
coordinate planes.**

```
  STEP 1    r = sqrt(1 + 4 + 4) = 3 ,   d.c.'s = ( 1/3 , 2/3 , 2/3 )

            CHECK: (1 + 4 + 4)/9 = 1                          correct

  STEP 2    With the yz-plane :  sin phi = |l| = 1/3
                                 phi = sin^-1(1/3)   about 19 deg 28 min

            With the zx-plane :  sin phi = |m| = 2/3
                                 phi = sin^-1(2/3)   about 41 deg 49 min

            With the xy-plane :  sin phi = |n| = 2/3
                                 phi = sin^-1(2/3)   about 41 deg 49 min

  STEP 3    CHECK the free identity:

              (1/3)^2 + (2/3)^2 + (2/3)^2 = 1/9 + 4/9 + 4/9 = 1   correct
```

**ANSWER: `sin^-1(1/3)`, `sin^-1(2/3)`, `sin^-1(2/3)` with the yz, zx and xy planes.**

---

# TOPIC 12 — TWO CONDITIONS ON l, m, n (the classic 4-mark question)

## 12.1 The shape of the question

You are given **two equations** connecting `l`, `m`, `n` — one linear, one quadratic — and
asked to find the two lines, or the angle between them.

```
  THE FIXED METHOD

  STEP 1   Use the LINEAR equation to write one letter in terms of
           the other two.  (Usually  l = -(m + n).)

  STEP 2   Substitute into the QUADRATIC equation. You will get a
           homogeneous quadratic in the remaining two letters.

  STEP 3   FACTORISE it. You will get two cases.

  STEP 4   Each case gives a RATIO l : m : n. Those are two sets of
           direction ratios - the two lines.

  STEP 5   If asked, find the angle with cos theta = the DR formula.
           If asked for d.c.'s, divide each set by its own length.
```

## 12.2 WORKED EXAMPLE 1

**Q. Find the angle between two lines whose direction cosines satisfy
`l + m + n = 0` and `l^2 + m^2 - n^2 = 0`.**

```
  STEP 1    From the first equation:   n = -(l + m)

  STEP 2    Substitute into the second:

              l^2 + m^2 - ( -(l+m) )^2 = 0

              l^2 + m^2 - (l^2 + 2lm + m^2) = 0

              -2 l m = 0

  STEP 3    So   l = 0   or   m = 0.   Two cases.

  STEP 4    CASE 1:  l = 0
                     Then n = -(0 + m) = -m
                     Ratios:  ( 0 , m , -m )  ->  ( 0 , 1 , -1 )

            CASE 2:  m = 0
                     Then n = -(l + 0) = -l
                     Ratios:  ( l , 0 , -l )  ->  ( 1 , 0 , -1 )

  STEP 5    Angle between (0, 1, -1) and (1, 0, -1):

              numerator = (0)(1) + (1)(0) + (-1)(-1) = 1

              lengths   = sqrt(0+1+1) = sqrt2
                          sqrt(1+0+1) = sqrt2

              cos theta = 1 / (sqrt2 . sqrt2) = 1/2

              theta = 60 degrees

  The actual direction cosines, if wanted:
              ( 0 , 1/sqrt2 , -1/sqrt2 )   and   ( 1/sqrt2 , 0 , -1/sqrt2 )

  CHECK       0 + 1/2 + 1/2 = 1     and     1/2 + 0 + 1/2 = 1     correct
```

**ANSWER: 60 degrees.**

## 12.3 WORKED EXAMPLE 2 — the perpendicular case

**Q. Show that the lines whose direction cosines satisfy `2l + 2m - n = 0` and
`mn + nl + lm = 0` are perpendicular to each other.**

```
  STEP 1    From the first:   n = 2l + 2m

  STEP 2    Substitute into  mn + nl + lm = 0 :

              m(2l + 2m) + (2l + 2m)l + lm = 0

              2lm + 2m^2 + 2l^2 + 2lm + lm = 0

              2 l^2 + 5 l m + 2 m^2 = 0

  STEP 3    Factorise:   ( 2l + m )( l + 2m ) = 0

              expand to verify: 2l^2 + 4lm + lm + 2m^2 = 2l^2 + 5lm + 2m^2   correct

  STEP 4    CASE 1:  m = -2l
                     n = 2l + 2(-2l) = 2l - 4l = -2l
                     Ratios:  ( l , -2l , -2l )  ->  ( 1 , -2 , -2 )

            CASE 2:  l = -2m
                     n = 2(-2m) + 2m = -4m + 2m = -2m
                     Ratios:  ( -2m , m , -2m )  ->  ( -2 , 1 , -2 )

  STEP 5    Test for perpendicularity:

              (1)(-2) + (-2)(1) + (-2)(-2)  =  -2 - 2 + 4  =  0

              Therefore the two lines are perpendicular.          PROVED

  The direction cosines (each length is sqrt(1+4+4) = 3):

              ( 1/3 , -2/3 , -2/3 )    and    ( -2/3 , 1/3 , -2/3 )

  CHECK       (1+4+4)/9 = 1   for both                            correct
```

## 12.4 BONUS — the foot of the perpendicular from a point to a line

This appears as a 4-mark question and it uses almost everything above.

**Q. `A(1, 8, 4)`, `B(0, -11, 4)`, `C(2, -3, 1)`. Find the foot `D` of the perpendicular
drawn from `A` to the line `BC`.**

```
                       A(1, 8, 4)
                          |
                          |  (perpendicular)
                          |
       B(0,-11,4) --------D-------- C(2,-3,1)


  STEP 1    d.r.'s of BC = ( 2-0 , -3-(-11) , 1-4 ) = ( 2 , 8 , -3 )

  STEP 2    D lies on BC, so D divides BC in some ratio. Write D as
            B plus t times the direction:

              D = ( 0 + 2t , -11 + 8t , 4 - 3t )

  STEP 3    d.r.'s of AD = ( 2t - 1 , -11 + 8t - 8 , 4 - 3t - 4 )
                         = ( 2t - 1 , 8t - 19 , -3t )

  STEP 4    AD is perpendicular to BC, so the dot product is zero:

              2(2t - 1) + 8(8t - 19) + (-3)(-3t) = 0

              4t - 2 + 64t - 152 + 9t = 0

              77 t - 154 = 0

              t = 2

  STEP 5    D = ( 2(2) , -11 + 8(2) , 4 - 3(2) )
              = ( 4 , 5 , -2 )

  CHECK     d.r.'s of AD = (4-1, 5-8, -2-4) = (3, -3, -6)

            (3)(2) + (-3)(8) + (-6)(-3) = 6 - 24 + 18 = 0         correct
```

**ANSWER: `D(4, 5, -2)`.**

---

# THE FIVE MISTAKES THAT COST THE MOST MARKS

```
  +----+--------------------------------------------------------------+
  | 1  |  Giving RATIOS when COSINES were asked for.                   |
  |    |  Cure: if the question says "cosines", your answer MUST       |
  |    |  satisfy l^2+m^2+n^2 = 1. Check it before you move on.        |
  +----+--------------------------------------------------------------+
  | 2  |  Sign slips when subtracting coordinates, especially with     |
  |    |  a negative z.   -8 - (-5) = -3 , not -13.                    |
  |    |  Cure: always write the bracket first, then simplify.         |
  +----+--------------------------------------------------------------+
  | 3  |  Flipping ONE sign in a set of direction cosines.             |
  |    |  Cure: all three together, or none.                           |
  +----+--------------------------------------------------------------+
  | 4  |  The middle entry of the cross product.                       |
  |    |  It is  c1a2 - c2a1 , NOT  a1c2 - a2c1 .                      |
  |    |  Cure: after every cross product, do the two dot-product      |
  |    |  checks that must both give 0.                                |
  +----+--------------------------------------------------------------+
  | 5  |  Using COS for a line and a plane.                            |
  |    |  Line-to-line uses COS. Line-to-plane uses SIN.               |
  +----+--------------------------------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Tick every box for every question you attempted from this chapter.

```
  [ ]  Did I read whether the question wanted RATIOS or COSINES?

  [ ]  If I wrote direction cosines, did I write the line
       l^2 + m^2 + n^2 = 1  underneath and show it works out?

  [ ]  Did I subtract the coordinates in a consistent order
       (always second point minus first point)?

  [ ]  Did I get the brackets right on every negative coordinate?

  [ ]  Are all three signs in my direction-cosine triple consistent
       (I did not flip just one of them)?

  [ ]  For an ANGLE question: did I divide by BOTH lengths?

  [ ]  For an ACUTE angle: did I put the numerator in a modulus?

  [ ]  After a cross product: did I check BOTH dot products give 0?

  [ ]  For collinearity: did I show ALL THREE ratios are equal, and
       did I write the sentence "therefore the points are collinear"?

  [ ]  For a bisector: did I convert to direction COSINES before
       adding, and did I check the two bisectors are perpendicular?

  [ ]  For a line and a coordinate PLANE: did I use SIN, not COS?

  [ ]  When I took a square root for a direction cosine, did I write
       BOTH the plus and the minus answer (and both angles)?

  [ ]  Did I state the final answer as a clear triple in brackets,
       not leave it buried in the working?
```

## The one line to write in the margin before you start

```
        l^2 + m^2 + n^2 = 1            cos = l1l2 + m1m2 + n1n2

        d.r. -> d.c. : divide by sqrt(a^2+b^2+c^2)

        perp: dot = 0        parallel: ratios equal

        cross:  b1c2-b2c1 ,  c1a2-c2a1 ,  a1b2-a2b1

        line-line = COS      line-plane = SIN
```

If you can write those five lines from memory, you can attempt every question this chapter
has ever set in the AP Inter board paper.
