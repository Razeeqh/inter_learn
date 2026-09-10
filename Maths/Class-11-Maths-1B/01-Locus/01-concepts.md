# Locus — Concepts, Explained From Zero

**Maths 1B · Chapter 1**

Read this once slowly with a pen in your hand. Every worked example is written out
in full — copy them into your notebook line by line. By the end you will be able to
answer any locus question, including ones you have never seen.

---

# TOPIC 1 — WHAT IS A LOCUS?

## 1.1 The plain-English meaning

A **locus** is the **path traced out by a moving point that obeys a given rule**.

That is the whole definition. Two ingredients:

```
  +--------------------------------------------------------------+
  |                                                              |
  |    a POINT that is free to move                              |
  |                +                                             |
  |    a RULE that the point must obey at every instant          |
  |                =                                             |
  |    a PATH  --  and that path is called the LOCUS             |
  |                                                              |
  +--------------------------------------------------------------+
```

The word "locus" is just Latin for "place". The plural is **loci** (say "LOW-sigh").

## 1.2 Everyday pictures — get these into your head first

**Picture 1 — the tip of a clock hand.**

The minute hand of a clock is pinned at the centre. Its tip is a moving point.
The rule it obeys is: *"I am always exactly 6 cm from the pin."*
Where does the tip go? Round and round. Its locus is a **circle of radius 6 cm**.

```
                12
             .  |  .
          .     |     .          the pin is fixed at the centre
        .       |       .        the TIP is the moving point
       9 -------O------- 3       the rule: distance from O is always 6
        .               .        the LOCUS is the dotted circle
          .           .
             .  6  .
```

**Picture 2 — a goat tied to a peg.**

A goat is tied to a peg with a 5 metre rope. It walks around with the rope pulled
tight. The rule is: *"my distance from the peg is exactly 5 m."*
The worn ring of grass it leaves behind is its locus — again a **circle**.

(If the rope were allowed to be slack, the rule would be "distance is *at most* 5 m",
and the region it can reach is a filled disc. In this chapter we only deal with
exact equalities, so we always get a curve, not a region.)

**Picture 3 — walking exactly between two trees.**

Two trees, A and B, stand in a field. You are told: *"always stay exactly as far
from tree A as you are from tree B."* Where can you walk?

You must walk along the straight line that cuts AB in half at right angles — the
**perpendicular bisector** of AB. That line is your locus.

```
                       |
                       |   <-- your path (the locus)
                       |
        A *------------+------------* B
                       |
                       |   at every point of this line,
                       |   distance to A = distance to B
```

**Picture 4 — a ladder slipping down a wall.**

A ladder leans against a wall. Its foot slides out and its top slides down. Watch a
paint spot in the exact middle of the ladder. As the ladder slips, that spot traces
a beautiful quarter-circle. That quarter-circle is the locus of the midpoint.
(We solve this one properly in Topic 11.)

## 1.3 What the exam actually wants

In the exam, "describe the path" in English is **not** the answer. The answer is an
**equation in x and y**.

```
  QUESTION SAYS:   "Find the locus of P such that ..."
  YOU MUST GIVE:   an equation in x and y  (and then name the curve)
```

So the entire chapter is one skill: **turning a sentence of geometry into an
equation of algebra.**

> **TRAP:** Students write "the locus is a circle" and stop. That is worth almost
> nothing. The examiner wants the **equation** — `x^2 + y^2 - 4x + 6y - 12 = 0` —
> and *then* the name. Give both. Naming the curve at the end is often worth the
> final mark in a 4-mark question.

---

# TOPIC 2 — THE TWO CONDITIONS EVERY LOCUS MUST SATISFY

This is the bit of theory that gets asked as a definition question, and it is also
the reason some students lose marks without knowing why.

A curve C is **the locus** of a point obeying condition K only when **both** of these
are true:

```
  +====================================================================+
  |                                                                    |
  |   (i)   EVERY point that lies on C  obeys the condition K.         |
  |                                                                    |
  |   (ii)  EVERY point that obeys K   lies on C.                      |
  |                                                                    |
  |   Both directions must hold. One alone is not enough.              |
  |                                                                    |
  +====================================================================+
```

## 2.1 Why you need BOTH halves

Suppose the true locus is a circle of radius 5 around the origin.

**If only (ii) holds** — say you claim the locus is the whole plane. Every point
obeying the rule does lie in the plane, so (ii) is satisfied. But (i) fails badly:
most points of the plane are nowhere near 5 units from the origin. Your answer is
**too big**.

**If only (i) holds** — say you claim the locus is just the top half of the circle.
Every point on that half really is 5 units away, so (i) is satisfied. But (ii) fails:
the point (0, -5) obeys the rule and is *not* on your half-circle. Your answer is
**too small — you have lost part of the curve.**

```
  TOO BIG                    JUST RIGHT                 TOO SMALL
  (only (ii) holds)          (both hold)                (only (i) holds)

   #############              . - - - .                   . - - - .
   #############            .           .               .
   ####  . - .  ##         .             .             .
   ####  .   .  ##         .      O      .              (top half only —
   ####  . - .  ##          .           .                the bottom points
   #############              . - - - .                  are missing)
   #############
```

## 2.2 Where this bites you in a real question

The algebra step where students silently break condition (ii) is **squaring** and
**dropping an absolute value**.

```
  abs(3x + 4y - 5) = 10        <-- the honest condition

  3x + 4y - 5 = 10   OR   3x + 4y - 5 = -10       <-- BOTH branches are locus

  If you only write  3x + 4y - 5 = 10  you have thrown away half the locus.
```

> **TRAP:** Whenever an absolute value appears (and it always does with the area
> formula), you must write **both** the `+k` and the `-k` cases. The locus is then
> a **pair of parallel lines**, not one line. This is the single most common
> 1-mark loss in the chapter.

## 2.3 The other direction — extra points that sneak in

Squaring can also *add* points that were never allowed. If the condition was
`PA = 3` (a positive length) and you square to get `PA^2 = 9`, nothing is lost,
because distance is never negative. That case is safe.

But if you square something like `PA - PB = 8` (a *signed* difference) you get the
whole hyperbola, both branches, when the original condition described only one
branch. In Inter you are usually asked for `abs(PA - PB) = 8`, so both branches are
wanted and this is fine — just be aware of what squaring does.

**A one-line safety habit:** after you finish, take one specific point that clearly
obeys the original condition and check it satisfies your final equation. Every
worked example below does exactly that.

---

# TOPIC 3 — THE TOOLBOX: THE FIVE THINGS THAT DO THE TRANSLATING

You cannot do this chapter without these. They are all from Class 10 / Maths IA.
Learn them cold before going further.

## 3.1 The distance formula

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    A(x1, y1)        B(x2, y2)                                        |
  |                                                                      |
  |    AB  =  sqrt( (x2 - x1)^2  +  (y2 - y1)^2 )                        |
  |                                                                      |
  |    AND THE FORM YOU WILL ACTUALLY USE:                               |
  |                                                                      |
  |    AB^2  =  (x2 - x1)^2  +  (y2 - y1)^2                              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Where it comes from — it is just Pythagoras:

```
        y
        ^
        |                 B(x2, y2)
        |                /|
        |               / |
        |              /  |  (y2 - y1)
        |             /   |
        |   A(x1,y1) *----+
        |             (x2 - x1)
        +----------------------------> x
```

**Why you square:** square roots are horrible to simplify. So whenever the condition
is about *distances being equal*, or *distances in a ratio*, **square both sides
immediately**. The square roots vanish and you are left with clean algebra.

```
  PA = PB          ->    PA^2 = PB^2          (safe: both sides positive)
  PA = 5           ->    PA^2 = 25            (safe)
  PA = 2 PB        ->    PA^2 = 4 PB^2        (safe - square the 2 as well!)
```

> **TRAP:** `PA = 2 PB` becomes `PA^2 = 4 PB^2`, **not** `PA^2 = 2 PB^2`.
> The number gets squared too. Marks are lost here constantly.

**WORKED EXAMPLE 3.1**
Find the distance between A(3, -2) and B(-1, 4), and also AB^2.

```
  AB^2 = (-1 - 3)^2 + (4 - (-2))^2
       = (-4)^2 + (6)^2
       = 16 + 36
       = 52

  AB   = sqrt(52) = sqrt(4 x 13) = 2 sqrt(13)
```
**AB = 2 sqrt(13) units, AB^2 = 52**

## 3.2 The section formula

If P divides the segment joining A(x1, y1) and B(x2, y2) **internally** in the
ratio m : n, then

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |             m x2 + n x1          m y2 + n y1                         |
  |     P  =  ( -------------- ,  -------------- )                       |
  |                 m + n              m + n                             |
  |                                                                      |
  +----------------------------------------------------------------------+

        m           n
   A *-------P------------* B          AP : PB  =  m : n
```

**Remember it as: "cross the letters."** The m (which sits next to A) multiplies
x2 (which belongs to B). If you write `m x1` you have it backwards.

**A quick sanity check that never fails:** put m : n = 1 : 1. You must get the
midpoint. `(1·x2 + 1·x1)/2 = (x1+x2)/2`. Correct. If your version of the formula
does not survive this check, you have mis-remembered it.

For **external** division in m : n, change the sign of n:

```
             m x2 - n x1          m y2 - n y1
     P  =  ( -------------- ,  -------------- )
                 m - n              m - n
```

## 3.3 The midpoint

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |               x1 + x2        y1 + y2                                 |
  |       M  =  ( --------- ,   --------- )                              |
  |                   2             2                                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

In locus questions the midpoint is used **backwards** more often than forwards.
If M(x, y) is the midpoint of A(a, 0) and B(0, b), then instead of computing M
you *solve for a and b*:

```
       a + 0                             0 + b
  x = -------  ->  a = 2x           y = -------  ->  b = 2y
         2                                 2
```

This "work backwards from the midpoint" move is the whole trick of Topic 11.

## 3.4 Slope, parallel and perpendicular

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                 y2 - y1                                              |
  |     slope m =  ---------          (needs x2 not equal to x1)         |
  |                 x2 - x1                                              |
  |                                                                      |
  |     PARALLEL       ->   m1  =  m2                                    |
  |     PERPENDICULAR  ->   m1 x m2  =  -1                               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

The perpendicular condition is what converts the words "right angle" into algebra.

## 3.5 The area of a triangle from three vertices

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Vertices A(x1,y1) , B(x2,y2) , C(x3,y3)                            |
  |                                                                      |
  |            1                                                         |
  |   Area =  --- abs( x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2) )         |
  |            2                                                         |
  |                                                                      |
  |   The three points are COLLINEAR  <=>  this area is 0                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**How to remember the pattern:** each x is multiplied by *the difference of the
other two y's*, going in order 1, 2, 3 and wrapping round: (2-3), (3-1), (1-2).

**WORKED EXAMPLE 3.2**
Find the area of the triangle with vertices (1, 2), (4, 6) and (-2, 3).

```
         1
  Area = --- abs( 1(6 - 3) + 4(3 - 2) + (-2)(2 - 6) )
         2
         1
       = --- abs( 1(3) + 4(1) + (-2)(-4) )
         2
         1                        1              15
       = --- abs( 3 + 4 + 8 ) =  --- (15)   =   ----  =  7.5
         2                        2               2
```
**Area = 7.5 square units**

## 3.6 The summary table

| Words in the question | Tool you reach for |
|---|---|
| distance, equidistant, "as far from", "twice as far" | distance formula (squared) |
| sum of distances, difference of distances | distance formula (isolate one root, square twice) |
| midpoint, "middle point of" | midpoint formula |
| divides in the ratio, trisects | section formula |
| right angle, perpendicular, "subtends 90 degrees" | m1 m2 = -1 |
| angle, inclination | slope |
| area of triangle, collinear | area formula |
| distance from a point equals distance from a line | distance formula + perpendicular distance |

---

# TOPIC 4 — THE FIXED 5-STEP RECIPE

Every locus question in the AP syllabus is answered with exactly these five steps.
Write them at the top of your rough page in the exam.

```
  +======================================================================+
  |                                                                      |
  |   STEP 1   Let P(x, y) be ANY point on the locus.                    |
  |            (Write this sentence down. It is worth a mark.)           |
  |                                                                      |
  |   STEP 2   Write the given geometrical condition in WORDS.           |
  |            e.g. "PA = PB"  or  "PA : PB = 2 : 1"  or                 |
  |                 "angle APB = 90 degrees"                             |
  |                                                                      |
  |   STEP 3   TRANSLATE the words into an equation, using               |
  |            the distance formula / the section formula /              |
  |            the slope / the area of a triangle.                       |
  |            SQUARE at once to kill the square roots.                  |
  |                                                                      |
  |   STEP 4   SIMPLIFY down to a clean relation between x and y.        |
  |            Cancel x^2 and y^2 if they appear on both sides.          |
  |            Divide out any common factor.                             |
  |                                                                      |
  |   STEP 5   STATE the equation of the locus and NAME the curve.       |
  |            "The locus of P is  x^2 + y^2 = 4 , a circle with         |
  |             centre (0,0) and radius 2."                              |
  |                                                                      |
  +======================================================================+
```

## 4.1 How the 4 marks are actually split

```
  Step 1  "Let P(x, y) ..." and setting up the condition ......  1 mark
  Step 3  Correct translation into an equation ................  1 mark
  Step 4  Correct simplification ..............................  1 mark
  Step 5  Final equation stated (and curve named) .............  1 mark
```

This is why **writing Step 1 and Step 2 down is not optional**. Even if your algebra
collapses in the middle, a correct setup is worth marks. Never leave a locus
question blank.

> **TRAP:** Do not use the letters that already belong to the fixed points.
> If the question gives A(x1, y1), do not call your moving point (x1, y1) too.
> Always use **P(x, y)** for the mover and keep the fixed points as numbers.

---

# TOPIC 5 — LOCUS TYPE (a): EQUIDISTANT FROM TWO FIXED POINTS

## 5.1 The idea

**Condition:** PA = PB, where A and B are fixed.
**Answer:** the **perpendicular bisector** of AB — a straight line.

```
                       |
             locus --> |
                       |
                       |
        A *------------M------------* B
                       |
                       |    M is the midpoint of AB
                       |    the locus is perpendicular to AB through M
                       |
```

Why? A point that is the same distance from both ends of a stick must sit on the
line that slices the stick exactly in half at right angles. That is a fact you have
known since Class 9 geometry — this chapter just gets its equation.

## 5.2 The method

```
  PA = PB
  PA^2 = PB^2                       <-- square immediately
  (x - a1)^2 + (y - b1)^2  =  (x - a2)^2 + (y - b2)^2
  expand both sides
  the x^2 and y^2 CANCEL                <-- this is the signature of this type
  what is left is linear  ->  a straight line
```

> **KEY SIGN:** if `x^2` and `y^2` cancel, your answer **must** be a straight line.
> If you end up with a leftover `x^2`, you made an arithmetic slip. Go back.

## 5.3 WORKED EXAMPLE 5.1 (the standard 4-mark question)

**Find the equation of the locus of a point P which is equidistant from
A(2, 3) and B(-4, 5).**

```
  STEP 1   Let P(x, y) be any point on the locus.

  STEP 2   The condition is       PA = PB

  STEP 3   Square both sides:     PA^2 = PB^2

           (x - 2)^2 + (y - 3)^2  =  (x + 4)^2 + (y - 5)^2

  STEP 4   Expand each bracket carefully:

           LHS = x^2 - 4x + 4 + y^2 - 6y + 9
               = x^2 + y^2 - 4x - 6y + 13

           RHS = x^2 + 8x + 16 + y^2 - 10y + 25
               = x^2 + y^2 + 8x - 10y + 41

           Set them equal.  x^2 and y^2 cancel from both sides:

              -4x - 6y + 13  =  8x - 10y + 41

              -4x - 6y + 13 - 8x + 10y - 41 = 0

              -12x + 4y - 28 = 0

           Divide every term by -4:

               3x - y + 7 = 0

  STEP 5   The locus of P is   3x - y + 7 = 0 ,
           a STRAIGHT LINE (the perpendicular bisector of AB).
```

**CHECK 1 — the midpoint must lie on it.**
```
  Midpoint of AB = ( (2 + (-4))/2 , (3 + 5)/2 ) = (-1, 4)

  Put into 3x - y + 7 :   3(-1) - 4 + 7  =  -3 - 4 + 7  =  0     Correct.
```

**CHECK 2 — it must be perpendicular to AB.**
```
                      5 - 3        2         1
  slope of AB   =  ---------- = ------- = - ---
                     -4 - 2       -6         3

  slope of the locus  3x - y + 7 = 0   is   -a/b = -3/(-1) = 3

  Product = (-1/3) x 3 = -1        Perpendicular.   Correct.
```

**CHECK 3 — test an actual point of the locus.**
```
  Put x = 0 in 3x - y + 7 = 0   ->   y = 7.   So P(0, 7) is on the locus.

  PA^2 = (0-2)^2 + (7-3)^2 = 4 + 16 = 20
  PB^2 = (0+4)^2 + (7-5)^2 = 16 + 4 = 20        PA = PB.   Correct.
```

## 5.4 WORKED EXAMPLE 5.2

**Find the locus of a point equidistant from A(3, 4) and B(-2, 1).**

```
  Let P(x, y).            PA^2 = PB^2

  (x - 3)^2 + (y - 4)^2  =  (x + 2)^2 + (y - 1)^2

  x^2 - 6x + 9 + y^2 - 8y + 16  =  x^2 + 4x + 4 + y^2 - 2y + 1

  -6x - 8y + 25  =  4x - 2y + 5

  -10x - 6y + 20 = 0

  Divide by -2:      5x + 3y - 10 = 0
```
**Locus: 5x + 3y - 10 = 0, a straight line.**

```
  CHECK:  midpoint of AB = (0.5, 2.5)
          5(0.5) + 3(2.5) - 10 = 2.5 + 7.5 - 10 = 0        Correct.

          Another point: put y = 0  ->  5x = 10  ->  x = 2 , so P(2, 0).
          PA^2 = (2-3)^2 + (0-4)^2 = 1 + 16 = 17
          PB^2 = (2+2)^2 + (0-1)^2 = 16 + 1 = 17            Correct.
```

---

# TOPIC 6 — LOCUS TYPE (b): FIXED DISTANCE FROM A FIXED POINT (A CIRCLE)

## 6.1 The idea

**Condition:** PC = r, where C is fixed and r is a fixed number.
**Answer:** a **circle**, centre C, radius r. This is the goat-and-peg locus.

```
              . - - - - .
           .               .
         .                   .
        .          C          .        every point of the rim is
        .          *          .        exactly r away from C
         .   <---- r ---->   .
           .               .
              . - - - - .
```

## 6.2 WORKED EXAMPLE 6.1

**Find the equation of the locus of a point P whose distance from A(2, -3)
is always 5 units.**

```
  STEP 1   Let P(x, y) be any point on the locus.

  STEP 2   Condition:  PA = 5

  STEP 3   PA^2 = 25

           (x - 2)^2 + (y + 3)^2 = 25

  STEP 4   x^2 - 4x + 4 + y^2 + 6y + 9 = 25

           x^2 + y^2 - 4x + 6y + 13 - 25 = 0

           x^2 + y^2 - 4x + 6y - 12 = 0

  STEP 5   The locus is  x^2 + y^2 - 4x + 6y - 12 = 0 ,
           a CIRCLE with centre (2, -3) and radius 5.
```

**CHECK — pick a point that is obviously 5 away from (2,-3).**
```
  Go 5 units to the right of the centre:  P(7, -3).

  7^2 + (-3)^2 - 4(7) + 6(-3) - 12
   = 49 + 9 - 28 - 18 - 12
   = 58 - 58
   = 0                        Correct, P(7,-3) is on the locus.
```

## 6.3 Reading the centre and radius back out

For a circle written as

```
  x^2 + y^2 + 2gx + 2fy + c = 0

     centre  =  ( -g , -f )
     radius  =  sqrt( g^2 + f^2 - c )
```

Check that on our answer: `2g = -4 -> g = -2`, `2f = 6 -> f = 3`, `c = -12`.

```
  centre = (2, -3)                            matches
  radius = sqrt(4 + 9 + 12) = sqrt(25) = 5    matches
```

> **TRAP:** For an equation to be a circle, the coefficients of `x^2` and `y^2`
> must be **equal** and there must be **no xy term**. If you get `2x^2 + 2y^2 + ...`,
> divide the whole equation by 2 first, otherwise your centre and radius will be
> wrong.

---

# TOPIC 7 — LOCUS TYPE (c): DISTANCES IN A GIVEN RATIO (THE APOLLONIUS CIRCLE)

## 7.1 The idea

**Condition:** PA : PB = m : n, with m not equal to n.
**Answer:** a **circle** — called the **Apollonius circle**.

This surprises everyone. When the ratio is 1 : 1 you get a straight line (Topic 5).
The moment the ratio is anything else, the path bends into a circle that hugs the
*nearer* of the two points.

```
      the locus wraps around the point you must stay CLOSER to

               . - - - - - .
             .               .
            .    *B     *A    .        here PA = 2 PB, so P must stay
            .                 .        closer to B - and the circle
             .               .         curls around B
               . - - - - - .
```

## 7.2 The method — get rid of the fraction FIRST

```
   PA     m
  ---- = ---        ->      n x PA  =  m x PB
   PB     n

                    ->      n^2 x PA^2  =  m^2 x PB^2     <-- square BOTH sides
```

> **TRAP:** the number squares as well. `PA = 2 PB` gives `PA^2 = 4 PB^2`.
> Writing `PA^2 = 2 PB^2` is the classic way to lose all the marks in this question.

## 7.3 WORKED EXAMPLE 7.1

**Find the locus of a point P which moves so that its distance from A(4, 0) is
twice its distance from B(1, 0).**

```
  STEP 1   Let P(x, y).

  STEP 2   Condition:   PA = 2 PB

  STEP 3   Square:      PA^2 = 4 PB^2

           (x - 4)^2 + (y - 0)^2  =  4 [ (x - 1)^2 + (y - 0)^2 ]

  STEP 4   LHS = x^2 - 8x + 16 + y^2

           RHS = 4 ( x^2 - 2x + 1 + y^2 )
               = 4x^2 - 8x + 4 + 4y^2

           x^2 - 8x + 16 + y^2  =  4x^2 - 8x + 4 + 4y^2

           Bring everything to one side:

           x^2 - 8x + 16 + y^2 - 4x^2 + 8x - 4 - 4y^2 = 0

           -3x^2 - 3y^2 + 12 = 0

           Divide by -3:      x^2 + y^2 - 4 = 0

  STEP 5   The locus is   x^2 + y^2 = 4 ,
           a CIRCLE with centre (0, 0) and radius 2.
```

**CHECK — test two different points on the answer circle.**
```
  P(2, 0):   PA = distance from (4,0) = 2
             PB = distance from (1,0) = 1
             PA = 2 PB.     Correct.

  P(0, 2):   PA^2 = (0-4)^2 + (2-0)^2 = 16 + 4 = 20  ->  PA = 2 sqrt(5)
             PB^2 = (0-1)^2 + (2-0)^2 = 1 + 4 = 5    ->  PB = sqrt(5)
             PA = 2 PB.     Correct.
```

Notice how the circle sits around B(1, 0) — the point P has to stay near — and
excludes A(4, 0), which is outside it. That is the Apollonius circle behaving
exactly as promised.

## 7.4 WORKED EXAMPLE 7.2 (messier numbers, exam-style)

**Find the locus of P such that PA : PB = 3 : 2 where A(-1, 2) and B(3, -1).**

```
  Let P(x, y).       PA / PB = 3 / 2      ->     2 PA = 3 PB
                                          ->     4 PA^2 = 9 PB^2

  PA^2 = (x + 1)^2 + (y - 2)^2 = x^2 + 2x + 1 + y^2 - 4y + 4
       = x^2 + y^2 + 2x - 4y + 5

  PB^2 = (x - 3)^2 + (y + 1)^2 = x^2 - 6x + 9 + y^2 + 2y + 1
       = x^2 + y^2 - 6x + 2y + 10

  4( x^2 + y^2 + 2x - 4y + 5 )  =  9( x^2 + y^2 - 6x + 2y + 10 )

  4x^2 + 4y^2 + 8x - 16y + 20  =  9x^2 + 9y^2 - 54x + 18y + 90

  0 = 5x^2 + 5y^2 - 62x + 34y + 70
```
**Locus: 5x^2 + 5y^2 - 62x + 34y + 70 = 0, a circle.**

**CHECK — the point that divides AB internally in 3 : 2 must be on the locus,
because for that point PA : PB is exactly 3 : 2.**
```
        3(3) + 2(-1)   3(-1) + 2(2)         9 - 2    -3 + 4         7   1
  P = ( ------------ , ------------ )  =  ( ------ , ------- ) =  ( --- , --- )
            3 + 2          3 + 2             5         5            5   5

  Substitute:
    5(49/25) + 5(1/25) - 62(7/5) + 34(1/5) + 70
  = 49/5 + 1/5 - 434/5 + 34/5 + 350/5
  = (49 + 1 - 434 + 34 + 350) / 5
  = 0 / 5
  = 0                                Correct.
```

---

# TOPIC 8 — LOCUS TYPES (d) AND (e): SUM AND DIFFERENCE OF DISTANCES

## 8.1 The idea

```
  PA + PB = constant          ->   ELLIPSE     (A and B are the FOCI)
  abs(PA - PB) = constant     ->   HYPERBOLA   (A and B are the FOCI)
```

**Ellipse picture — the two-pin-and-string trick.**
Push two pins into a board, loop a piece of string around them, and pull it taut
with a pencil. The pencil traces an ellipse, because the string length
(PA + PB) never changes.

```
         . - - - - - - - .
      .                     .
     .      *A       *B      .        PA + PB is the same at
     .                       .        every point of the rim
      .                     .
         . - - - - - - - .
```

**Hyperbola picture.**

```
        \                   /
         \                 /
          )   *A     *B   (        abs(PA - PB) is the same
         /                 \       on both branches
        /                   \
```

## 8.2 The method — the double-squaring routine

There are two square roots, so one squaring is not enough. Do this:

```
  1.  Isolate ONE square root on its own side.
  2.  Square. One root disappears, the other survives on one side.
  3.  Tidy up and isolate the surviving root.
  4.  Square again.
  5.  Simplify.
```

## 8.3 WORKED EXAMPLE 8.1 — the ellipse

**Find the locus of a point the sum of whose distances from A(-3, 0) and B(3, 0)
is 10.**

```
  STEP 1   Let P(x, y).

  STEP 2   Condition:   PA + PB = 10

  STEP 3   sqrt( (x+3)^2 + y^2 ) + sqrt( (x-3)^2 + y^2 )  =  10

           Isolate one root:

           sqrt( (x+3)^2 + y^2 )  =  10 - sqrt( (x-3)^2 + y^2 )

           Square both sides:

           (x+3)^2 + y^2  =  100 - 20 sqrt( (x-3)^2 + y^2 ) + (x-3)^2 + y^2

           x^2 + 6x + 9 + y^2 = 100 - 20 sqrt(...) + x^2 - 6x + 9 + y^2

           Cancel x^2, y^2 and 9 from both sides:

           6x = 100 - 20 sqrt(...) - 6x

           12x - 100 = -20 sqrt(...)

           20 sqrt(...) = 100 - 12x

           Divide by 4:      5 sqrt( (x-3)^2 + y^2 ) = 25 - 3x

           Square again:

           25 [ (x-3)^2 + y^2 ]  =  (25 - 3x)^2

           25 ( x^2 - 6x + 9 + y^2 )  =  625 - 150x + 9x^2

           25x^2 - 150x + 225 + 25y^2  =  625 - 150x + 9x^2

  STEP 4   25x^2 - 9x^2 + 25y^2 = 625 - 225

           16x^2 + 25y^2 = 400

           Divide by 400:

              x^2       y^2
            ------  +  ------  =  1
              25         16

  STEP 5   The locus is   16x^2 + 25y^2 = 400 ,  that is
           x^2/25 + y^2/16 = 1 , an ELLIPSE.
```

**CHECK — two points.**
```
  P(5, 0):   PA = distance to (-3,0) = 8 ,  PB = distance to (3,0) = 2
             PA + PB = 10.       Correct.
             16(25) + 25(0) = 400.        On the curve.  Correct.

  P(0, 4):   PA = sqrt(9 + 16) = 5 ,  PB = sqrt(9 + 16) = 5
             PA + PB = 10.       Correct.
             16(0) + 25(16) = 400.        On the curve.  Correct.
```

## 8.4 WORKED EXAMPLE 8.2 — the hyperbola

**Find the locus of a point the difference of whose distances from A(-5, 0)
and B(5, 0) is 8.**

```
  Let P(x, y).      PA - PB = 8

  sqrt( (x+5)^2 + y^2 )  =  8 + sqrt( (x-5)^2 + y^2 )

  Square:

  x^2 + 10x + 25 + y^2  =  64 + 16 sqrt( (x-5)^2 + y^2 ) + x^2 - 10x + 25 + y^2

  Cancel x^2, y^2, 25:

  10x  =  64 + 16 sqrt(...) - 10x

  20x - 64 = 16 sqrt(...)

  Divide by 4:      5x - 16 = 4 sqrt( (x-5)^2 + y^2 )

  Square again:

  25x^2 - 160x + 256  =  16 [ x^2 - 10x + 25 + y^2 ]

  25x^2 - 160x + 256  =  16x^2 - 160x + 400 + 16y^2

  9x^2 - 16y^2 = 144

  Divide by 144:

     x^2      y^2
   ------ - ------  =  1
     16        9
```
**Locus: 9x^2 - 16y^2 = 144, a HYPERBOLA.**

**CHECK.**
```
  P(4, 0):   PA = distance to (-5,0) = 9 ,  PB = distance to (5,0) = 1
             PA - PB = 8.       Correct.
             9(16) - 16(0) = 144.        On the curve.  Correct.

  P(5, 9/4): 9(25) - 16(81/16) = 225 - 81 = 144.   On the curve.
             PB = sqrt(0 + 81/16) = 9/4 = 2.25
             PA = sqrt(100 + 81/16) = sqrt(1681/16) = 41/4 = 10.25
             PA - PB = 10.25 - 2.25 = 8.       Correct.
```

> **TRAP:** After the *first* squaring you still have a square root. Students very
> often "finish" at that stage and hand in a wrong answer. Count your roots: you
> started with two, so you must square **twice**.

---

# TOPIC 9 — LOCUS TYPE (f): AB SUBTENDS A RIGHT ANGLE AT P

## 9.1 The idea

**Condition:** the segment AB subtends a right angle at P — that is,
angle APB = 90 degrees.
**Answer:** the **circle having AB as its diameter**.

This is the "angle in a semicircle is a right angle" theorem from Class 10,
turned into algebra.

```
                    P
                   / \
                  /   \        angle APB = 90
                 /     \
            A  *---------*  B
                    ^
                 AB is a DIAMETER of the circle through P

              . - - - - - .
            .       P       .
           .       / \       .
           A -----*---*----- B     P can be anywhere on the rim,
           .                 .     the angle at P is always 90
             .             .
                . - - - .
```

## 9.2 Two ways to write it — learn both

**Way 1 — slopes (safer to understand):**

```
  (slope of PA) x (slope of PB)  =  -1

     y - y1       y - y2
    --------  x  --------  =  -1
     x - x1       x - x2

  Cross-multiply:   (y - y1)(y - y2)  =  - (x - x1)(x - x2)
```

**Way 2 — the direct formula (faster, use it in the exam):**

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    ( x - x1 )( x - x2 )  +  ( y - y1 )( y - y2 )  =  0               |
  |                                                                      |
  |    A(x1,y1) and B(x2,y2) are the ends of the diameter                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Way 2 is just Way 1 rearranged. It is also the "circle on a diameter" formula you
will meet again in Maths IIB.

## 9.3 WORKED EXAMPLE 9.1

**Find the equation of the locus of a point P such that the segment joining
A(2, 3) and B(-4, 5) subtends a right angle at P.**

```
  STEP 1   Let P(x, y).

  STEP 2   Condition:  angle APB = 90 degrees
                       so   (slope of PA) x (slope of PB) = -1

  STEP 3    y - 3       y - 5
           -------  x  -------  =  -1
            x - 2       x + 4

           ( y - 3 )( y - 5 )  =  - ( x - 2 )( x + 4 )

  STEP 4   LHS = y^2 - 8y + 15
           RHS = - ( x^2 + 2x - 8 ) = -x^2 - 2x + 8

           y^2 - 8y + 15 + x^2 + 2x - 8 = 0

           x^2 + y^2 + 2x - 8y + 7 = 0

  STEP 5   The locus is   x^2 + y^2 + 2x - 8y + 7 = 0 ,
           a CIRCLE with AB as diameter.
```

**CHECK 1 — the centre must be the midpoint of AB.**
```
  From x^2 + y^2 + 2gx + 2fy + c = 0:  2g = 2 -> g = 1 ,  2f = -8 -> f = -4

  centre = (-g, -f) = (-1, 4)

  midpoint of AB = ( (2-4)/2 , (3+5)/2 ) = (-1, 4)      Match.  Correct.
```

**CHECK 2 — the radius must be half of AB.**
```
  radius^2 = g^2 + f^2 - c = 1 + 16 - 7 = 10

  AB^2 = (-4-2)^2 + (5-3)^2 = 36 + 4 = 40
  (AB/2)^2 = 40/4 = 10                                  Match.  Correct.
```

**CHECK 3 — find a real point on the locus and test the right angle.**
```
  Put x = 0 :   y^2 - 8y + 7 = 0   ->   (y-1)(y-7) = 0   ->   y = 1 or 7

  Take P(0, 1).
     vector PA = (2 - 0, 3 - 1) = (2, 2)
     vector PB = (-4 - 0, 5 - 1) = (-4, 4)
     dot product = (2)(-4) + (2)(4) = -8 + 8 = 0     Perpendicular.  Correct.
```

**Doing the same question with the direct formula (30 seconds):**
```
  (x - 2)(x + 4) + (y - 3)(y - 5) = 0
  x^2 + 2x - 8 + y^2 - 8y + 15 = 0
  x^2 + y^2 + 2x - 8y + 7 = 0          Same answer.
```

> **TRAP:** The points A and B themselves are *not* on the locus in the strict
> sense — at A the "angle APB" is not defined. Good textbooks exclude them.
> In a 4-mark board answer you simply give the circle; you do not lose marks.
> But if a question asks you to be careful, say "excluding the points A and B".

---

# TOPIC 10 — LOCUS TYPE (g): THE AREA OF TRIANGLE PAB IS CONSTANT

## 10.1 The idea

**Condition:** area of triangle PAB = k, with A, B fixed.
**Answer:** a **pair of parallel straight lines**, one on each side of AB.

Why parallel lines? The area of a triangle is `1/2 x base x height`. The base AB is
fixed. So the *height* — the distance from P to the line AB — must be fixed too.
The set of points at a fixed distance from a line is two lines parallel to it,
one on each side.

```
  ---------------------------------------  <-- locus (one branch)
                    ^
                    | fixed height h
          A *---------------* B             <-- the fixed base
                    | fixed height h
                    v
  ---------------------------------------  <-- locus (other branch)
```

## 10.2 The method

```
   1
  --- abs( x1(y2-y3) + x2(y3-y1) + x3(y1-y2) )  =  k
   2

  Multiply by 2:      abs( ... )  =  2k

  Remove the abs by writing BOTH cases:      ( ... ) = 2k    OR    ( ... ) = -2k
```

> **TRAP — THIS IS THE BIG ONE IN THIS CHAPTER:** the absolute value gives **two**
> equations. If you write only one line as your answer, you have found only half
> the locus and condition (ii) from Topic 2 fails. Always give both.

## 10.3 WORKED EXAMPLE 10.1

**Find the locus of a point P such that the area of the triangle formed by P,
A(2, 3) and B(-1, 4) is 6 square units.**

```
  STEP 1   Let P(x, y).

  STEP 2   Condition:  area of triangle PAB = 6

  STEP 3   Take (x1,y1) = P(x,y) , (x2,y2) = A(2,3) , (x3,y3) = B(-1,4).

            1
           --- abs( x(3 - 4) + 2(4 - y) + (-1)(y - 3) )  =  6
            2

  STEP 4   Simplify inside the modulus first:

           x(3 - 4)   = -x
           2(4 - y)   = 8 - 2y
           (-1)(y-3)  = -y + 3

           sum        = -x + 8 - 2y - y + 3
                      = -x - 3y + 11

            1
           --- abs( -x - 3y + 11 )  =  6

            2
           abs( -x - 3y + 11 ) = 12

           Since abs(-t) = abs(t), write it more neatly:

           abs( x + 3y - 11 ) = 12

           Two cases:

              x + 3y - 11 = 12     ->    x + 3y - 23 = 0
              x + 3y - 11 = -12    ->    x + 3y + 1  = 0

  STEP 5   The locus is the PAIR OF PARALLEL LINES

              x + 3y - 23 = 0     and     x + 3y + 1 = 0
```

**CHECK — take one point from each line and compute the area.**
```
  From the first line, put y = 0:  x = 23 , so P(23, 0).

      1                                          1
     --- abs( 23(3-4) + 2(4-0) + (-1)(0-3) ) =  --- abs( -23 + 8 + 3 )
      2                                          2
                                                 1
                                              = --- (12)  =  6      Correct.
                                                 2

  From the second line, put y = 0:  x = -1 , so P(-1, 0).

      1                                            1
     --- abs( -1(3-4) + 2(4-0) + (-1)(0-3) )  =   --- abs( 1 + 8 + 3 )
      2                                            2
                                                   1
                                                = --- (12)  =  6    Correct.
                                                   2
```

Both branches give area 6. The two lines are parallel (same `x + 3y`), exactly as
the picture promised.

## 10.4 The special case: area = 0

If the question says "P, A and B are **collinear**", the area is 0, the modulus
disappears (0 and -0 are the same), and you get **one** straight line — the line AB
itself.

**Mini example:** locus of P collinear with A(1,2) and B(3,6).
```
  x(2 - 6) + 1(6 - y) + 3(y - 2) = 0
  -4x + 6 - y + 3y - 6 = 0
  -4x + 2y = 0
  2x - y = 0
```
Check: A(1,2) gives 2-2 = 0 and B(3,6) gives 6-6 = 0. Both on the line. Correct.

---

# TOPIC 11 — LOCUS TYPE (i): THE MIDPOINT OF A MOVING SEGMENT

## 11.1 The idea and the key move

Here the moving thing is a *segment*, and you must follow its **midpoint**.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   THE KEY MOVE:                                                      |
  |                                                                      |
  |   Call the MIDPOINT P(x, y) — because that is what you want.         |
  |   Write the endpoints in terms of x and y using the midpoint         |
  |   formula BACKWARDS.                                                 |
  |   Then feed those endpoints into the condition you were given.       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## 11.2 WORKED EXAMPLE 11.1 — the sliding ladder (the classic)

**A rod (or ladder) of length 10 units moves with one end on the x-axis and the
other end on the y-axis. Find the locus of its midpoint.**

```
  STEP 1   Let the ends be  A(a, 0) on the x-axis  and  B(0, b) on the y-axis.
           Let P(x, y) be the midpoint of AB — this is what we want.

  STEP 2   Two facts are true:
              (i)   P is the midpoint of AB
              (ii)  AB = 10   (the rod has fixed length)
```

```
        y
        ^
        |
      B *
        | \
        |  \
        |   * P   <-- the midpoint we are tracking
        |    \
        |     \        AB = 10 always
        |      \
      --+-------*------> x
        O        A
```

```
  STEP 3   From the midpoint formula:

              a + 0                            0 + b
         x = -------  ->  a = 2x          y = -------  ->  b = 2y
                2                                2

           From the length condition:

              AB^2 = 100
              (a - 0)^2 + (0 - b)^2 = 100
              a^2 + b^2 = 100

  STEP 4   Substitute a = 2x and b = 2y:

              (2x)^2 + (2y)^2 = 100
              4x^2 + 4y^2 = 100
              x^2 + y^2 = 25

  STEP 5   The locus is  x^2 + y^2 = 25 ,
           a CIRCLE with centre at the origin and radius 5.
```

**Notice:** the radius 5 is exactly *half* the rod length. That makes sense — the
midpoint of the ladder is always half a ladder away from the corner O. This is the
paint-spot-on-the-ladder picture from Topic 1.

**CHECK — take three different positions of the rod.**
```
  Rod from A(10,0) to B(0,0):  midpoint (5, 0).   5^2 + 0 = 25.   Correct.
  Rod from A(6,0) to B(0,8):   AB^2 = 36 + 64 = 100, so AB = 10.  Good rod.
                               midpoint (3, 4).   9 + 16 = 25.    Correct.
  Rod from A(0,0) to B(0,10):  midpoint (0, 5).   0 + 25 = 25.    Correct.
```

## 11.3 WORKED EXAMPLE 11.2 — midpoint of a fixed point and a point on a curve

**A(2, 0) is a fixed point and Q moves on the circle x^2 + y^2 = 16.
Find the locus of the midpoint P of AQ.**

```
  STEP 1   Let P(x, y) be the midpoint, and let Q = (h, k) be the moving point.

  STEP 2   P is the midpoint of A(2,0) and Q(h,k) ,
           and Q lies on the circle, so  h^2 + k^2 = 16.

  STEP 3   Midpoint formula:

              2 + h                              0 + k
         x = -------  ->  h = 2x - 2        y = -------  ->  k = 2y
                2                                  2

  STEP 4   Put these into  h^2 + k^2 = 16 :

              (2x - 2)^2 + (2y)^2 = 16
              4(x - 1)^2 + 4y^2 = 16
              (x - 1)^2 + y^2 = 4

  STEP 5   The locus is  (x - 1)^2 + y^2 = 4 , that is
           x^2 + y^2 - 2x - 3 = 0 ,
           a CIRCLE with centre (1, 0) and radius 2.
```

**CHECK.**
```
  Take Q(4, 0) on the big circle.  Midpoint of A(2,0) and Q(4,0) is (3, 0).
      (3-1)^2 + 0 = 4.       Correct.

  Take Q(0, 4) on the big circle.  Midpoint of A(2,0) and Q(0,4) is (1, 2).
      (1-1)^2 + 2^2 = 4.     Correct.
```

Interesting: the answer is the original circle **shrunk to half size** and moved
so its centre is the midpoint of A and the original centre. That is always what
happens with midpoint loci — the shape survives, the size halves.

> **TRAP:** Do not use the letters x and y for the moving point Q as well.
> Use (h, k) — or (x1, y1) — for the mover and keep (x, y) for the point whose
> locus you want. Mixing them up guarantees a wrong answer.

---

# TOPIC 12 — LOCUS TYPE (j): A POINT DIVIDING A SEGMENT IN A GIVEN RATIO

This is Topic 11 with the section formula instead of the midpoint formula.
Everything else is identical.

## 12.1 WORKED EXAMPLE 12.1

**A(-1, 1) is a fixed point and Q moves on the circle x^2 + y^2 = 4.
Find the locus of the point P which divides AQ internally in the ratio 3 : 2.**

```
  STEP 1   Let P(x, y) and let Q = (h, k) with  h^2 + k^2 = 4.

  STEP 2   P divides A(-1,1) to Q(h,k) in the ratio m : n = 3 : 2.

  STEP 3   Section formula (remember: cross the letters):

              3h + 2(-1)        3h - 2
         x = ------------  =  ---------      ->    3h = 5x + 2
               3 + 2              5                h = (5x + 2)/3

              3k + 2(1)         3k + 2
         y = -----------  =  ---------       ->    3k = 5y - 2
               3 + 2             5                 k = (5y - 2)/3

  STEP 4   Put into  h^2 + k^2 = 4 :

            ( 5x + 2 )^2     ( 5y - 2 )^2
            ------------  +  ------------  =  4
                 9                9

           Multiply through by 9:

              (5x + 2)^2 + (5y - 2)^2 = 36

           Expanding:

              25x^2 + 20x + 4 + 25y^2 - 20y + 4 = 36

              25x^2 + 25y^2 + 20x - 20y - 28 = 0

  STEP 5   The locus is  25x^2 + 25y^2 + 20x - 20y - 28 = 0 ,
           a CIRCLE.  (Neater form: (5x + 2)^2 + (5y - 2)^2 = 36 ,
           i.e. centre (-2/5, 2/5) and radius 6/5.)
```

**CHECK.**
```
  Take Q(2, 0) on the circle x^2 + y^2 = 4.

  P divides A(-1,1) to Q(2,0) in 3 : 2 :

          3(2) + 2(-1)     6 - 2      4              3(0) + 2(1)      2
    x =  -------------- = ------- = -----      y =  ------------- =  ---
              5              5        5                   5           5

    So P = (4/5, 2/5).

  Substitute into  25x^2 + 25y^2 + 20x - 20y - 28 :

     25(16/25) + 25(4/25) + 20(4/5) - 20(2/5) - 28
   = 16 + 4 + 16 - 8 - 28
   = 36 - 36
   = 0                              Correct.
```

## 12.2 The general shape of the answer

```
  Q moves on a CIRCLE   ->   P moves on a CIRCLE  (smaller, shifted)
  Q moves on a LINE     ->   P moves on a LINE    (parallel, shifted)
  Q moves on a PARABOLA ->   P moves on a PARABOLA
```

The section formula only stretches and slides the picture. It never changes what
kind of curve it is. Use that as a sanity check on your answer.

---

# TOPIC 13 — LOCUS TYPE (h): DISTANCE FROM A POINT = DISTANCE FROM A LINE (PARABOLA)

## 13.1 The idea

**Condition:** PS = (perpendicular distance from P to a fixed line d).
**Answer:** a **parabola**. S is called the **focus**, d is the **directrix**.

```
        d  |
           |          . P
           |        .  |
           |      .    |      PS = PM  at every point
           |    .      |
           |   * S     |      S = focus     d = directrix
           |    .      |
           |      .    |
           |        .  |
           |          . 
        M -+-----------
```

## 13.2 The extra tool: distance from a point to a line

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Distance from P(x1, y1)  to  the line  ax + by + c = 0             |
  |                                                                      |
  |            abs( a x1 + b y1 + c )                                    |
  |        =  ----------------------------                               |
  |               sqrt( a^2 + b^2 )                                      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

If the directrix is a nice vertical line like `x + 2 = 0`, the distance is just
`abs(x + 2)` — no square root needed, because `sqrt(1^2 + 0^2) = 1`.

## 13.3 WORKED EXAMPLE 13.1 — vertical directrix (the easy version)

**Find the locus of a point P whose distance from the point S(2, 0) is equal to
its distance from the line x + 2 = 0.**

```
  STEP 1   Let P(x, y).

  STEP 2   Condition:  PS = (distance from P to the line x + 2 = 0)

  STEP 3   sqrt( (x - 2)^2 + y^2 )  =  abs( x + 2 )

           Square both sides (both sides are non-negative, so this is safe):

           (x - 2)^2 + y^2  =  (x + 2)^2

  STEP 4   x^2 - 4x + 4 + y^2  =  x^2 + 4x + 4

           Cancel x^2 and 4:

           -4x + y^2 = 4x

           y^2 = 8x

  STEP 5   The locus is  y^2 = 8x , a PARABOLA
           with vertex at the origin, opening to the right.
```

**CHECK.**
```
  Take P(2, 4).   Is it on the curve?   y^2 = 16 , 8x = 16.   Yes.

  PS = distance from (2,4) to (2,0) = 4
  distance from (2,4) to the line x = -2  is  abs(2 + 2) = 4

  Equal.   Correct.
```

## 13.4 WORKED EXAMPLE 13.2 — a slanted directrix (harder, worth seeing)

**Find the locus of P whose distance from (1, 1) equals its distance from the
line x + y + 1 = 0.**

```
  Let P(x, y).

                                     abs( x + y + 1 )
  sqrt( (x-1)^2 + (y-1)^2 )   =   --------------------
                                      sqrt(1 + 1)

  Square both sides:

                                ( x + y + 1 )^2
  (x-1)^2 + (y-1)^2   =   -----------------------
                                      2

  Multiply by 2:

  2[ x^2 - 2x + 1 + y^2 - 2y + 1 ]  =  x^2 + y^2 + 1 + 2xy + 2x + 2y

  2x^2 - 4x + 2 + 2y^2 - 4y + 2  =  x^2 + y^2 + 2xy + 2x + 2y + 1

  2x^2 - x^2 + 2y^2 - y^2 - 2xy - 4x - 2x - 4y - 2y + 4 - 1 = 0

  x^2 + y^2 - 2xy - 6x - 6y + 3 = 0
```
**Locus: x^2 + y^2 - 2xy - 6x - 6y + 3 = 0, a parabola.**
(You can see the parabola hiding in it: `(x - y)^2 = 6x + 6y - 3`.)

**CHECK.**
```
  Look for a point with x = y.  Then (x-y)^2 = 0, so 6x + 6x - 3 = 0 -> x = 1/4.
  So P(1/4, 1/4) should be on the locus.

  Distance to (1,1) = sqrt( (3/4)^2 + (3/4)^2 ) = (3/4) sqrt(2)

                                     abs(1/4 + 1/4 + 1)       3/2       3 sqrt(2)
  Distance to x + y + 1 = 0    =   --------------------- = --------- = ----------
                                          sqrt(2)            sqrt(2)        4

  (3/4) sqrt(2) = 3 sqrt(2) / 4.       Equal.   Correct.
```

> **TRAP:** The `xy` term is the fingerprint of a **tilted** conic. If your answer
> has an `xy` term, do NOT call it a circle. A circle can never have an xy term.

---

# TOPIC 14 — ELIMINATING A PARAMETER

## 14.1 The idea

Sometimes the moving point is handed to you already, written in terms of a helper
letter — usually `t`, `theta`, `m` or `k`. That helper letter is the **parameter**.

```
  P = ( f(t) , g(t) )         as t changes, P moves
```

The locus is what you get when you **remove t** and leave a plain relation between
x and y.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   THE JOB:  you have  x = f(t)  and  y = g(t).                       |
  |             Produce ONE equation containing x and y but NOT t.       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## 14.2 The three elimination tricks

```
  TRICK 1 - MAKE t THE SUBJECT
     Solve the easier equation for t, then substitute into the other.
     Works when t appears as a plain algebraic term.

  TRICK 2 - SQUARE AND ADD  (for sin and cos)
     Get cos(t) and sin(t) alone, square them, add.
     Uses:   cos^2(t) + sin^2(t) = 1

  TRICK 3 - SQUARE AND SUBTRACT  (for sec and tan)
     Get sec(t) and tan(t) alone, square them, subtract.
     Uses:   sec^2(t) - tan^2(t) = 1
     (Also:  cosec^2(t) - cot^2(t) = 1)
```

## 14.3 WORKED EXAMPLE 14.1 — trick 1

**Find the locus of the point P( 2t + 1 , t^2 - 2 ) as t varies.**

```
  STEP 1   Let P(x, y) be the point.  So

              x = 2t + 1        ...(1)
              y = t^2 - 2       ...(2)

  STEP 2   Equation (1) is the easier one. Make t the subject:

              2t = x - 1
                        x - 1
              t   =    -------
                          2

  STEP 3   Substitute into (2):

                    ( x - 1 )^2
              y  =  -----------  -  2
                          4

  STEP 4   Multiply through by 4:

              4y = (x - 1)^2 - 8

              4y = x^2 - 2x + 1 - 8

              x^2 - 2x - 4y - 7 = 0

  STEP 5   The locus is  x^2 - 2x - 4y - 7 = 0 , a PARABOLA
           (only x is squared, so it opens upwards).
```

**CHECK — feed in actual values of t.**
```
  t = 1  ->  P(3, -1):    9 - 6 + 4 - 7 = 0        Correct.
  t = 0  ->  P(1, -2):    1 - 2 + 8 - 7 = 0        Correct.
  t = -2 ->  P(-3, 2):    9 + 6 - 8 - 7 = 0        Correct.
```

## 14.4 WORKED EXAMPLE 14.2 — trick 2

**Find the locus of P( 3 + 2 cos(t) , -1 + 2 sin(t) ).**

```
  x = 3 + 2 cos(t)     ->    x - 3 = 2 cos(t)     ->    cos(t) = (x-3)/2
  y = -1 + 2 sin(t)    ->    y + 1 = 2 sin(t)     ->    sin(t) = (y+1)/2

  Square and ADD:

     ( x - 3 )^2     ( y + 1 )^2
     -----------  +  -----------  =  cos^2(t) + sin^2(t)  =  1
          4               4

     (x - 3)^2 + (y + 1)^2 = 4
```
**Locus: a CIRCLE with centre (3, -1) and radius 2.**

```
  CHECK:  t = 0    ->  P(5, -1):   (5-3)^2 + 0 = 4.        Correct.
          t = 90   ->  P(3,  1):   0 + (1+1)^2 = 4.        Correct.
          t = 180  ->  P(1, -1):   (1-3)^2 + 0 = 4.        Correct.
```

## 14.5 WORKED EXAMPLE 14.3 — trick 3

**Find the locus of P( a sec(t) , b tan(t) ).**

```
  x = a sec(t)   ->   sec(t) = x/a
  y = b tan(t)   ->   tan(t) = y/b

  Square and SUBTRACT:

     x^2      y^2
    -----  - -----  =  sec^2(t) - tan^2(t)  =  1
     a^2      b^2
```
**Locus: x^2/a^2 - y^2/b^2 = 1, a HYPERBOLA.**

## 14.6 WORKED EXAMPLE 14.4 — the "square and add" classic

**If `x cos(t) + y sin(t) = a` and `x sin(t) - y cos(t) = b`, find the locus of
the point (x, y) as t varies.**

```
  Square both equations and add them:

  (x cos t + y sin t)^2 + (x sin t - y cos t)^2  =  a^2 + b^2

  First bracket  = x^2 cos^2 t + 2xy sin t cos t + y^2 sin^2 t
  Second bracket = x^2 sin^2 t - 2xy sin t cos t + y^2 cos^2 t
                   -------------------------------------------
  Add:  the middle terms CANCEL

       = x^2 (cos^2 t + sin^2 t) + y^2 (sin^2 t + cos^2 t)
       = x^2 + y^2

  So    x^2 + y^2 = a^2 + b^2
```
**Locus: a CIRCLE, centre the origin, radius sqrt(a^2 + b^2).**

```
  CHECK with t = 0:   x = a  and  -y = b  ->  y = -b.
                      x^2 + y^2 = a^2 + b^2.       Correct.
```

> **TRAP:** After eliminating the parameter, **the parameter must be completely
> gone**. If a single `t` or `theta` survives in your final answer, it is not a
> locus. Re-read your working.

## 14.7 The parametric forms worth memorising

| Parametric point | Eliminate by | Locus |
|---|---|---|
| ( a cos t , a sin t ) | square, add | x^2 + y^2 = a^2 (circle) |
| ( a cos t , b sin t ) | divide, square, add | x^2/a^2 + y^2/b^2 = 1 (ellipse) |
| ( a sec t , b tan t ) | divide, square, subtract | x^2/a^2 - y^2/b^2 = 1 (hyperbola) |
| ( a t^2 , 2 a t ) | t = y/2a , substitute | y^2 = 4ax (parabola) |
| ( c t , c / t ) | multiply x by y | xy = c^2 (rect. hyperbola) |
| ( a + r cos t , b + r sin t ) | shift, square, add | (x-a)^2 + (y-b)^2 = r^2 (circle) |

---

# TOPIC 15 — NAMING THE CURVE FROM ITS EQUATION

Step 5 of the recipe asks you to say **what** the curve is. Here is how to tell,
in the order you should check.

```
  +======================================================================+
  |                                                                      |
  |   Q1.  Are there any squared terms at all?                           |
  |                                                                      |
  |        NO   ->  ax + by + c = 0                ->  STRAIGHT LINE     |
  |        YES  ->  go to Q2                                             |
  |                                                                      |
  |   Q2.  Is there an xy term?                                          |
  |                                                                      |
  |        YES  ->  a TILTED conic. Not a circle. Usually a parabola     |
  |                 in Inter questions (from focus-directrix work).      |
  |        NO   ->  go to Q3                                             |
  |                                                                      |
  |   Q3.  Are BOTH x^2 and y^2 present?                                 |
  |                                                                      |
  |        NO (only one) ->  PARABOLA                                    |
  |        YES           ->  go to Q4                                    |
  |                                                                      |
  |   Q4.  Compare the coefficients of x^2 and y^2:                      |
  |                                                                      |
  |        EQUAL and SAME sign     ->  CIRCLE                            |
  |        UNEQUAL but SAME sign   ->  ELLIPSE                           |
  |        OPPOSITE signs          ->  HYPERBOLA                         |
  |                                                                      |
  +======================================================================+
```

## 15.1 The table with examples

| Equation | Coefficients of x^2, y^2 | Curve |
|---|---|---|
| 3x - y + 7 = 0 | none | straight line |
| x^2 + y^2 - 4x + 6y - 12 = 0 | 1, 1 (equal, same sign) | circle, centre (2,-3), r = 5 |
| 16x^2 + 25y^2 = 400 | 16, 25 (same sign, unequal) | ellipse |
| 9x^2 - 16y^2 = 144 | 9, -16 (opposite signs) | hyperbola |
| y^2 = 8x | only y^2 | parabola |
| x^2 - 2x - 4y - 7 = 0 | only x^2 | parabola |
| xy = 4 | none, but an xy term | rectangular hyperbola |
| x^2 + y^2 - 2xy - 6x - 6y + 3 = 0 | has xy | tilted parabola |

## 15.2 The one extra test (for your own confidence, not compulsory)

For `ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0`:

```
  h^2 - ab  <  0    ->    ellipse (or circle if also a = b and h = 0)
  h^2 - ab  =  0    ->    parabola
  h^2 - ab  >  0    ->    hyperbola
```

Try it on `x^2 + y^2 - 2xy - 6x - 6y + 3 = 0`: here `a = 1`, `b = 1`, `2h = -2`
so `h = -1`. Then `h^2 - ab = 1 - 1 = 0` -> **parabola**. That matches Topic 13.4,
where we built it from a focus and a directrix. Good.

> **TRAP:** When you name a circle, always give the **centre and the radius** too.
> "It is a circle" earns less than "a circle with centre (2, -3) and radius 5".
> It takes ten seconds and it is often the fourth mark.

---

# TOPIC 16 — HOW TO LAY OUT A 4-MARK ANSWER

Here is exactly what your answer sheet should look like. Copy this shape.

```
  ----------------------------------------------------------------------
  Q.  Find the locus of P which is equidistant from A(2,3) and B(-4,5).

  Let P(x, y) be any point on the locus.

  Given condition:      PA = PB

  Therefore             PA^2 = PB^2

  (x - 2)^2 + (y - 3)^2  =  (x + 4)^2 + (y - 5)^2

  x^2 - 4x + 4 + y^2 - 6y + 9  =  x^2 + 8x + 16 + y^2 - 10y + 25

  -4x - 6y + 13  =  8x - 10y + 41

  -12x + 4y - 28 = 0

  3x - y + 7 = 0

  Therefore the locus of P is  3x - y + 7 = 0 ,
  which is a straight line (the perpendicular bisector of AB).
  ----------------------------------------------------------------------
```

Things the examiner is scanning for:

```
  [x]  the words "Let P(x, y) be any point on the locus"
  [x]  the condition written out before any algebra
  [x]  the squaring step shown, not skipped
  [x]  a clean final equation with everything on one side
  [x]  the sentence "Therefore the locus of P is ..."
  [x]  the name of the curve
```

---

# COMMON MISTAKES — THE LIST THAT COSTS MARKS

| Mistake | What to do instead |
|---|---|
| `PA = 2 PB` written as `PA^2 = 2 PB^2` | square the number too: `PA^2 = 4 PB^2` |
| Only one branch kept after removing `abs( )` | write both `= +k` and `= -k` |
| Squaring only once with two square roots | isolate, square, isolate, square again |
| Using (x, y) for both the mover and the tracked point | use (h, k) for the mover |
| Leaving the parameter `t` in the final answer | eliminate it completely |
| Answering "it is a circle" with no equation | always give the equation first |
| Forgetting the minus sign when expanding `(y - 5)^2` | write out `y^2 - 10y + 25` in full |
| Not dividing out the common factor at the end | `-12x + 4y - 28 = 0` becomes `3x - y + 7 = 0` |
| Cross-multiplying the section formula wrongly | check it reduces to the midpoint when m = n |
| Calling something with an `xy` term a circle | a circle NEVER has an xy term |

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write "Let P(x, y) be any point on the locus" at the start?

  [ ]  Did I write the geometrical condition in words BEFORE the algebra?

  [ ]  Did I square immediately, so no square roots survive?

  [ ]  If the number 2 or 3 multiplied a distance, did I square THAT too?

  [ ]  If there were two square roots, did I square TWICE?

  [ ]  If an abs( ) appeared, did I write BOTH the +k and the -k cases?

  [ ]  Did the x^2 and y^2 cancel where they should have (equidistant type)?

  [ ]  Did I divide out any common factor in the final equation?

  [ ]  Is everything on one side, equal to zero, in the standard order
       (x^2 term, y^2 term, xy term, x term, y term, constant)?

  [ ]  Is the parameter t / theta completely gone?

  [ ]  Did I NAME the curve — line, circle, parabola, ellipse, hyperbola?

  [ ]  For a circle, did I give the CENTRE and the RADIUS?

  [ ]  Did I test one specific point back in the ORIGINAL condition?

  [ ]  Did I write "Therefore the locus of P is ..." as a full sentence?
```

If every box is ticked, you have the full 4 marks. This chapter does not have
hidden depth — it rewards a clean, complete, standard write-up. Do it the same
way every time.
