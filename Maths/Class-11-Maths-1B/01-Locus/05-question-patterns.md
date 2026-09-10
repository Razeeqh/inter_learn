# Locus — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Every pattern in this chapter begins with the same line, so write it before you
even read the question properly:

```
  Let P(x, y) be any point on the locus.
```

---

```
  PATTERN 1 — DISTANCE BETWEEN TWO POINTS                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the distance between (2,3) and (-1,7)."
  METHOD    1. AB^2 = (x2 - x1)^2 + (y2 - y1)^2
            2. Add, then take the square root.
            3. Simplify the surd: sqrt(52) = sqrt(4 x 13) = 2 sqrt(13).
  TRAP      Sign errors when a coordinate is negative:
            7 - (-3) is 10, not 4. Write the brackets out.
```

```
  PATTERN 2 — FIND AN UNKNOWN COORDINATE FROM A DISTANCE          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find x if the distance between (x, 2) and (3, 4) is 2 sqrt(2)."
  METHOD    1. Square the given distance FIRST.
            2. Write the distance-squared equation.
            3. You get a quadratic in the unknown. Solve it.
  TRAP      There are usually TWO answers, one on each side. Give both.
            Also: (2 sqrt(2))^2 = 8, not 4. Square the number AND the surd.
```

```
  PATTERN 3 — MIDPOINT OR SECTION POINT                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the midpoint of ...", "Find the point dividing AB
            internally in the ratio 2 : 3."
  METHOD    midpoint :  ( (x1+x2)/2 , (y1+y2)/2 )
            section  :  ( (m x2 + n x1)/(m+n) , (m y2 + n y1)/(m+n) )
  TRAP      Crossing the letters wrongly. m sits beside A but multiplies the
            B coordinates. Check by putting m : n = 1 : 1 - you must get
            the midpoint back.
```

```
  PATTERN 4 — AREA OF A TRIANGLE / COLLINEARITY                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area of the triangle with vertices ..." or
            "Show that the points ... are collinear" or
            "Find k if the points ... are collinear."
  METHOD    1. Area = (1/2) abs( x1(y2-y3) + x2(y3-y1) + x3(y1-y2) )
            2. For collinear, set the bracket = 0 and solve for k.
  TRAP      Forgetting the 1/2, or forgetting the modulus and reporting a
            negative area. Area is never negative.
```

```
  PATTERN 5 — DEFINE A LOCUS / STATE THE TWO CONDITIONS           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the locus of a point." / "State the conditions for a
            curve to be the locus of ..."
  METHOD    1. "The locus is the path traced by a point moving under a
                given geometrical condition."
            2. Then state BOTH halves:
                  (i)  every point on the curve obeys the condition
                  (ii) every point obeying the condition is on the curve
  TRAP      Giving only half the definition. The examiner wants both
            directions - one mark each.
```

```
  PATTERN 6 — FIXED DISTANCE FROM A FIXED POINT (CIRCLE)      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "distance from A(2,-3) is always 5" , "PC = r" ,
            "at a constant distance from".
  METHOD    1. Let P(x, y).
            2. PC^2 = r^2 :   (x - h)^2 + (y - k)^2 = r^2
            3. Expand and collect into
                  x^2 + y^2 + 2gx + 2fy + c = 0
            4. Name it: "a circle with centre (h,k) and radius r".
  TRAP      Stopping at the bracket form when the question asks for the
            equation of the locus. Expand it. And always NAME the curve.
```

```
  PATTERN 7 — EQUIDISTANT FROM TWO FIXED POINTS                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "equidistant from A and B" , "PA = PB" ,
            "as far from A as from B".
  METHOD    1. Let P(x, y).
            2. Write PA = PB , then PA^2 = PB^2.
            3. Expand BOTH sides fully.
            4. The x^2 and y^2 cancel - a straight line is left.
            5. Divide out the common factor.
            6. Name it: the perpendicular bisector of AB.
  TRAP      If x^2 survives, you made an expansion error. Also check your
            answer by putting the midpoint of AB into it - it must give 0.
```

```
  PATTERN 8 — EQUIDISTANT FROM A POINT AND A COORDINATE AXIS      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "equidistant from (2,3) and the x-axis" ,
            "distance from A equals its distance from the y-axis".
  METHOD    1. Distance from P(x,y) to the x-axis is abs(y).
               Distance from P(x,y) to the y-axis is abs(x).
            2. Square both sides:  (x-h)^2 + (y-k)^2 = y^2  (for the x-axis)
            3. The y^2 cancels. You are left with a PARABOLA.
  TRAP      Using x instead of y (or the other way round) for the axis
            distance. Distance from the x-axis is the HEIGHT, abs(y).
```

```
  PATTERN 9 — DISTANCE-FROM-THE-AXES RATIO CONDITIONS             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "distance from the y-axis is twice its distance from the
            x-axis" , "equidistant from the coordinate axes".
  METHOD    1. Translate: abs(x) = 2 abs(y)  (or abs(x) = abs(y)).
            2. Square:    x^2 = 4y^2         (or x^2 = y^2).
            3. Factorise if asked: x^2 - 4y^2 = 0 means x = 2y and x = -2y.
  TRAP      Writing only x = 2y. The modulus gives a PAIR of lines.
```

```
  PATTERN 10 — DISTANCES IN A GIVEN RATIO (APOLLONIUS CIRCLE)     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "PA : PB = 2 : 3" , "distance from A is twice its distance
            from B" , "PA = 3 PB".
  METHOD    1. Let P(x, y).
            2. Clear the fraction FIRST:  n PA = m PB.
            3. Square BOTH sides:  n^2 PA^2 = m^2 PB^2.
            4. Expand, collect, divide by the common factor.
            5. It is always a CIRCLE (when the ratio is not 1 : 1).
  TRAP      THE BIG ONE: PA = 2 PB gives PA^2 = 4 PB^2, not 2 PB^2.
            The multiplier gets squared too.
```

```
  PATTERN 11 — SUM OF SQUARED DISTANCES CONSTANT                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "PA^2 + PB^2 = 26" , "PA^2 + PB^2 + PC^2 = k".
  METHOD    1. Write each squared distance out and ADD them.
            2. The x^2 and y^2 terms REINFORCE (2x^2, 2y^2, ...).
            3. Divide by the coefficient to get x^2 + y^2 + ... = 0.
            4. It is a CIRCLE. Give its centre and radius.
  TRAP      Forgetting to divide by 2 (or 3) at the end, which makes the
            centre and radius wrong.
```

```
  PATTERN 12 — DIFFERENCE OF SQUARED DISTANCES CONSTANT           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "PA^2 - PB^2 = 12".
  METHOD    1. Write both squared distances out.
            2. SUBTRACT term by term - the x^2 and y^2 vanish.
            3. What is left is linear: a STRAIGHT LINE.
            4. It is always perpendicular to AB (a good check).
  TRAP      Sign slips during the subtraction, especially -(-6y) = +6y.
            Do it in a vertical column, one term per line.
```

```
  PATTERN 13 — A SEGMENT SUBTENDS A RIGHT ANGLE AT P              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "AB subtends a right angle at P" , "angle APB = 90 degrees" ,
            "PA is perpendicular to PB".
  METHOD    FAST WAY:  (x - x1)(x - x2) + (y - y1)(y - y2) = 0 , expand.
            SLOW WAY:  (slope PA)(slope PB) = -1 , cross-multiply.
            Then name it: the circle on AB as diameter.
            CHECK: centre must equal the midpoint of AB, radius = AB/2.
  TRAP      Writing the slope product as +1. Perpendicular means -1.
            Also, strictly the points A and B themselves are excluded.
```

```
  PATTERN 14 — CIRCLE ON A GIVEN DIAMETER                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "(2,3) and (-4,5) are the ends of a diameter. Find the circle."
  METHOD    Exactly the same formula as Pattern 13:
               (x - x1)(x - x2) + (y - y1)(y - y2) = 0
  TRAP      None, if you notice it is the same formula. Students who do
            not notice waste time finding the centre and radius separately.
```

```
  PATTERN 15 — CONSTANT AREA OF TRIANGLE PAB                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the area of the triangle PAB is 6 square units".
  METHOD    1. Let P(x, y) be the FIRST vertex in the area formula.
            2. (1/2) abs( ... ) = k , so abs( ... ) = 2k.
            3. Split into TWO cases: ( ... ) = 2k and ( ... ) = -2k.
            4. Write both lines as your answer.
            5. They are parallel to AB.
  TRAP      THE BIG ONE: giving only one line. The modulus always gives a
            PAIR of parallel lines. Half the answer = half the marks.
```

```
  PATTERN 16 — LOCUS OF A POINT COLLINEAR WITH TWO FIXED POINTS   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "P, A, B are collinear" , "the area of triangle PAB is zero".
  METHOD    1. Set the area bracket = 0 (no modulus needed when it is 0).
            2. Simplify.
            3. The answer is just the line AB itself.
  TRAP      Over-complicating. You can also simply find the line through
            A and B directly - it is the same answer, and faster.
```

```
  PATTERN 17 — SUM OF DISTANCES CONSTANT (ELLIPSE)                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the sum of whose distances from A and B is 10".
  METHOD    1. sqrt(...) + sqrt(...) = 2a
            2. ISOLATE one square root on one side.
            3. Square. One root dies, one survives.
            4. Tidy up, isolate the surviving root, divide by any common
               factor to keep the numbers small.
            5. Square again. Simplify to x^2/a^2 + y^2/b^2 = 1.
            6. Name it: an ELLIPSE.
  TRAP      Squaring only ONCE. Two square roots need two squarings.
            Also (m + n)^2 = m^2 + 2mn + n^2 - do NOT drop the middle term.
```

```
  PATTERN 18 — DIFFERENCE OF DISTANCES CONSTANT (HYPERBOLA)       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the difference of whose distances from A and B is 8".
  METHOD    Identical to Pattern 17, but written as
               sqrt(P) = 2a + sqrt(Q)
            so that squaring is comfortable. Two squarings again.
            Final form: x^2/a^2 - y^2/b^2 = 1.
  TRAP      Mixing up which of a and c is bigger.
            ELLIPSE:   b^2 = a^2 - c^2   (a > c)
            HYPERBOLA: b^2 = c^2 - a^2   (c > a)
            b^2 must come out POSITIVE. If it does not, you swapped them.
```

```
  PATTERN 19 — DISTANCE FROM A POINT = DISTANCE FROM A            4 marks
               HORIZONTAL OR VERTICAL LINE (PARABOLA)
  ------------------------------------------------------------------------
  TRIGGER   "distance from S(3,0) equals its distance from x + 3 = 0" ,
            "focus and directrix are given".
  METHOD    1. Distance to x = k is abs(x - k). Distance to y = k is
               abs(y - k). No square root needed.
            2. Square both sides.
            3. One of x^2 or y^2 cancels - that is the parabola appearing.
            4. Name it and say which way it opens.
  TRAP      Using the full point-to-line formula and mishandling
            sqrt(a^2 + b^2). For x = k it is just 1. Keep it simple.
```

```
  PATTERN 20 — DISTANCE FROM A POINT = DISTANCE FROM A            4 marks
               SLANTED LINE
  ------------------------------------------------------------------------
  TRIGGER   the directrix is something like  x + y + 1 = 0  or 3x - 4y = 5.
  METHOD    1. PS^2 = ( a x + b y + c )^2 / ( a^2 + b^2 )
            2. Multiply both sides by ( a^2 + b^2 ) at once.
            3. Expand carefully - the right side has an xy term.
            4. Collect everything on one side.
  TRAP      Forgetting the cross term 2xy when expanding (x + y + 1)^2.
            The xy term is supposed to be there - it means the parabola
            is tilted. Do not "cancel" it because it looks wrong.
```

```
  PATTERN 21 — MIDPOINT OF A ROD SLIDING ON THE AXES              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "a rod / ladder of length 12 slides with its ends on the
            coordinate axes; find the locus of its midpoint".
  METHOD    1. Let the ends be A(a, 0) and B(0, b).
            2. Fixed length gives  a^2 + b^2 = L^2.
            3. Midpoint P(x,y) gives  a = 2x , b = 2y.
            4. Substitute:  4x^2 + 4y^2 = L^2 , so x^2 + y^2 = L^2/4.
            5. A CIRCLE of radius L/2.
  TRAP      Writing a = x/2 instead of a = 2x. Think: the midpoint is
            HALF of a, so a is DOUBLE of x.
```

```
  PATTERN 22 — A DIVIDING POINT OF A ROD SLIDING ON THE AXES      4 marks
  ------------------------------------------------------------------------
  TRIGGER   same as Pattern 21 but "the point P with AP : PB = 2 : 1".
  METHOD    1. A(a,0) , B(0,b) , a^2 + b^2 = L^2.
            2. Use the SECTION formula to get x and y in terms of a and b.
            3. Invert to get a and b in terms of x and y.
            4. Substitute into a^2 + b^2 = L^2.
            5. The answer is an ELLIPSE, not a circle.
  TRAP      Assuming the answer must be a circle because Pattern 21 was.
            Only the MIDPOINT gives a circle. Any other ratio gives an
            ellipse.
```

```
  PATTERN 23 — MIDPOINT OF A FIXED POINT AND A POINT ON A CURVE   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A(-2,3) is fixed, Q moves on x^2 + y^2 = 25, find the locus
            of the midpoint of AQ".
  METHOD    1. Let P(x, y) be the midpoint and Q = (h, k) the mover.
            2. From the midpoint formula:  h = 2x - x_A , k = 2y - y_A.
            3. Substitute h and k into the equation Q obeys.
            4. Simplify. h and k must both disappear.
  TRAP      Using (x, y) for Q as well. Use (h, k) - or the whole thing
            collapses into nonsense.
  CHECK     The answer is the original curve at HALF size. If your radius
            is not half the original, you have slipped.
```

```
  PATTERN 24 — A POINT DIVIDING A SEGMENT IN A GIVEN RATIO        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "P divides AQ in the ratio 1 : 2, where Q moves on the line
            2x + 3y = 5".
  METHOD    1. Let P(x, y) and Q = (h, k).
            2. Section formula, then INVERT to get h and k in terms of
               x and y.
            3. Substitute into the equation Q obeys.
            4. Simplify.
  TRAP      Inverting the section formula wrongly. Do it slowly:
               x = (h + 2a)/3  gives  3x = h + 2a  gives  h = 3x - 2a.
  CHECK     If Q moved on a line, P must move on a PARALLEL line.
            If Q moved on a circle, P must move on a circle.
```

```
  PATTERN 25 — ELIMINATE AN ALGEBRAIC PARAMETER               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the locus of the point (2t + 1, t^2 - 2)."
  METHOD    1. Pick the SIMPLER equation and make t the subject.
            2. Substitute into the other equation.
            3. Clear fractions, collect on one side.
            4. Name the curve.
  TRAP      Leaving a t in the final answer. If any t survives, it is not
            a locus. Also check with two values of t before moving on.
```

```
  PATTERN 26 — ELIMINATE sin AND cos (SQUARE AND ADD)        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   the point contains cos(t) and sin(t) , e.g.
            (3 + 2 cos t , -1 + 2 sin t)  or  (a cos t , b sin t).
  METHOD    1. Rearrange each equation so cos t and sin t stand alone.
            2. Square both.
            3. ADD, using cos^2 t + sin^2 t = 1.
  TRAP      Forgetting to divide by a and b first when the amplitudes are
            different: cos t = x/a , NOT cos t = x.
```

```
  PATTERN 27 — ELIMINATE sec AND tan (SQUARE AND SUBTRACT)   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   the point contains sec(t) and tan(t) (or cosec and cot).
  METHOD    1. sec t = x/a , tan t = y/b.
            2. Square both.
            3. SUBTRACT, using sec^2 t - tan^2 t = 1.
  TRAP      Adding instead of subtracting and calling the answer an
            ellipse. sec and tan mean HYPERBOLA. cos and sin mean
            ellipse or circle.
```

```
  PATTERN 28 — ELIMINATE t FROM TWO LINE EQUATIONS                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the locus of the point of intersection of
             x cos t + y sin t = a  and  x sin t - y cos t = b".
  METHOD    1. Both equations hold at the point of intersection.
            2. SQUARE both and ADD.
            3. The 2xy sin t cos t terms cancel exactly.
            4. Left with x^2 + y^2 = a^2 + b^2 - a circle.
  TRAP      Trying to solve the simultaneous equations for x and y first.
            That works but takes four times as long. Square and add.
```

```
  PATTERN 29 — NAME THE CURVE / FIND THE CENTRE AND RADIUS        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does x^2 + y^2 - 6x + 8y = 0 represent?" ,
            "Find the centre and radius of ..."
  METHOD    1. Check for an xy term first - if present it is NOT a circle.
            2. Compare coefficients of x^2 and y^2:
                  equal, same sign     -> circle
                  unequal, same sign   -> ellipse
                  opposite signs       -> hyperbola
                  only one present     -> parabola
            3. For a circle:  centre = (-g, -f) ,
                              radius = sqrt(g^2 + f^2 - c).
  TRAP      Applying the circle formula when the coefficients of x^2 and
            y^2 are 2 and 2 without dividing by 2 first.
```

```
  PATTERN 30 — SEVERAL CONDITIONS IN ONE QUESTION            4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   parts (a), (b), (c) all about the same pair of fixed points.
  METHOD    Do NOT restart from scratch each time. Compute PA^2 and PB^2
            once, in expanded form, at the top of your answer:

               PA^2 = x^2 + y^2 + 2ax + 2by + c1
               PB^2 = x^2 + y^2 + 2dx + 2ey + c2

            Then every part is one line of combining:
               PA^2 = PB^2         -> subtract
               PA^2 = k^2 PB^2     -> scale and subtract
               PA^2 + PB^2 = k     -> add
               PA^2 - PB^2 = k     -> subtract
  TRAP      Recomputing the expansions four times and running out of time
            (or making a different slip each time).
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right-hand column. Read the stem, name the pattern number and the
shape of the answer, then check.

| Question stem | Pattern | Answer is a ... |
|---|---|---|
| "equidistant from (1,2) and (5,-3)" | 7 | straight line |
| "distance from (2,-3) is always 5" | 6 | circle |
| "PA : PB = 3 : 2" | 10 | circle (Apollonius) |
| "PA^2 + PB^2 = 40" | 11 | circle |
| "PA^2 - PB^2 = 12" | 12 | straight line |
| "AB subtends 90 degrees at P" | 13 | circle on AB as diameter |
| "area of triangle PAB is 6" | 15 | pair of parallel lines |
| "P, A, B are collinear" | 16 | the line AB |
| "sum of distances from A and B is 10" | 17 | ellipse |
| "difference of distances is 8" | 18 | hyperbola |
| "equidistant from (3,0) and x + 3 = 0" | 19 | parabola |
| "equidistant from (1,1) and x + y + 1 = 0" | 20 | tilted parabola (has xy) |
| "equidistant from (2,3) and the x-axis" | 8 | parabola |
| "distance from y-axis is twice that from x-axis" | 9 | pair of lines |
| "midpoint of a rod of length 12 on the axes" | 21 | circle, radius 6 |
| "the point dividing that rod in 2 : 1" | 22 | ellipse |
| "midpoint of AQ, Q on a given circle" | 23 | circle, half size |
| "P divides AQ in 1 : 2, Q on a line" | 24 | parallel line |
| "the point (2t + 1, t^2 - 2)" | 25 | parabola |
| "the point (3 + 2 cos t, 1 + 2 sin t)" | 26 | circle |
| "the point (a sec t, b tan t)" | 27 | hyperbola |
| "intersection of x cos t + y sin t = a and x sin t - y cos t = b" | 28 | circle |
| "What does 4x^2 + 9y^2 = 36 represent?" | 29 | ellipse |
| "Find k if (1,2), (k,6), (3,10) are collinear" | 4 | a number |
| "ends of a diameter are (2,3) and (-4,5)" | 14 | circle |
| "Define locus" | 5 | two-part definition |

If you can name all 26 in under three minutes, this chapter is finished.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +======================================================================+
  |                                                                      |
  |   WHAT THIS CHAPTER IS REALISTICALLY WORTH                           |
  |                                                                      |
  |     Section B (4 marks) ......... almost certain , 4 marks           |
  |     Section A (2 marks) ......... about half the time , 2 marks      |
  |     Section C (7 marks) ......... not asked                          |
  |                                                                      |
  |     TARGET: 4 marks , with 6 as the good day.                        |
  |                                                                      |
  +======================================================================+
```

## Tier 1 — do these and the 4 marks are yours (about 3 hours of work)

```
  PATTERN 7   equidistant from two points          -> straight line
  PATTERN 13  right angle subtended                -> circle on the diameter
  PATTERN 10  ratio of distances                   -> Apollonius circle
  PATTERN 15  constant triangle area               -> pair of parallel lines
```

Those four are the overwhelming majority of every Section B locus question ever
set. Write out one full solution of each, from "Let P(x, y)" to "Therefore the
locus is ... , a ...". Then do three more of each with different numbers.

## Tier 2 — the safety net (about 2 hours)

```
  PATTERN 11 / 12  PA^2 + PB^2 = k  and  PA^2 - PB^2 = k
  PATTERN 21       midpoint of a sliding rod
  PATTERN 23       midpoint with a point on a curve
  PATTERN 25/26/27 the three parameter-elimination tricks
  PATTERN 19       focus and directrix -> parabola
```

If the paper picks an unusual locus question, it will be from this list.

## Tier 3 — the 2-mark insurance (about 1 hour)

```
  PATTERN 1, 2, 3, 4   distance, midpoint, section, area
  PATTERN 5            the definition and the two conditions
  PATTERN 29           name the curve, find the centre and radius
```

These also cover you in Section A even if no locus question is set, because the
distance and section formulas turn up in The Straight Line as well.

## The exam-hall routine

```
  +======================================================================+
  |                                                                      |
  |   1.  Read the condition twice. Underline the key word:              |
  |       EQUIDISTANT / RATIO / RIGHT ANGLE / AREA / SUM / DIFFERENCE    |
  |       / MIDPOINT / DIVIDES.                                          |
  |                                                                      |
  |   2.  Write "Let P(x, y) be any point on the locus."                 |
  |                                                                      |
  |   3.  Write the condition in symbols on its own line.                |
  |                                                                      |
  |   4.  Square immediately. Expand every bracket IN FULL - never in    |
  |       your head.                                                     |
  |                                                                      |
  |   5.  Predict the answer shape from the key word before you finish   |
  |       the algebra. If the algebra gives a different shape, you have  |
  |       made a slip.                                                   |
  |                                                                      |
  |   6.  Divide out the common factor.                                  |
  |                                                                      |
  |   7.  Write "Therefore the locus of P is ..." and NAME the curve.    |
  |                                                                      |
  |   8.  Spend 30 seconds testing one obvious point.                    |
  |                                                                      |
  |   TIME BUDGET: 6 minutes. Over 8 minutes means an arithmetic error   |
  |   - restart the expansion cleanly rather than hunting for it.        |
  |                                                                      |
  +======================================================================+
```

## The three sentences that carry the marks

```
  OPENING     "Let P(x, y) be any point on the locus."

  MIDDLE      "The given condition is PA = PB, therefore PA^2 = PB^2."

  CLOSING     "Therefore the equation of the locus of P is 3x - 4y - 7 = 0,
               which is a straight line."
```

Even if the middle algebra goes wrong, those three sentences plus a genuine
attempt will usually earn 2 of the 4 marks. **Never leave this question blank.**
