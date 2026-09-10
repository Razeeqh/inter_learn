# Transformation of Axes — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

This chapter is unusually kind: there are really only **four** shapes that carry marks,
and the other twenty-six below are variations on them. Learn patterns
**1, 3, 9/10 and 19/20** and you have the compulsory Section A mark locked down.

For each pattern, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Two lines to write before you even read the question properly:

```
  Translation:   x = X + h ,  y = Y + k        X = x - h ,  Y = y - k
  Rotation:      x = X cos t - Y sin t         X =  x cos t + y sin t
                 y = X sin t + Y cos t         Y = -x sin t + y cos t
```

---

# GROUP A — TRANSLATION, POINTS

```
  PATTERN 1 — NEW COORDINATES OF A POINT AFTER A SHIFT            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the origin is shifted to (3,-4), find the new
            coordinates of (2,5)."
  METHOD    1. Write h and k from the shift point.
            2. X = x - h ,  Y = y - k.
            3. That is the whole answer. Two subtractions.
  TRAP      Adding instead of subtracting. Test yourself: put the shift
            point itself in - it must come out as (0,0).
            Also watch double negatives: 5 - (-4) = 9, not 1.
```

```
  PATTERN 2 — ORIGINAL COORDINATES FROM THE NEW ONES              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The origin is shifted to (2,3). The new coordinates of P
            are (4,-3). Find P."
  METHOD    1. This is the reverse, so ADD.
            2. x = X + h ,  y = Y + k.
  TRAP      Doing Pattern 1 out of habit. Read the question twice:
            "find the NEW coordinates" = subtract.
            "find the ORIGINAL point"  = add.
```

```
  PATTERN 3 — FIND THE POINT TO WHICH THE ORIGIN MUST SHIFT       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the point to which the origin should be shifted so
            that (3,0) may change to (2,-3)."
  METHOD    1. h = x - X       (old minus new)
            2. k = y - Y
            3. Answer is (h, k).
  TRAP      Reversing the subtraction and getting (-1,-3). Always check
            by pushing the given point through your answer - it must
            land exactly on the stated new coordinates.
```

```
  PATTERN 4 — WHERE DOES THE OLD ORIGIN GO?                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the origin is shifted to (-2,3), what are the new
            coordinates of the old origin?"
  METHOD    1. The old origin is the point (0, 0).
            2. X = 0 - h = -h ,  Y = 0 - k = -k.
            3. Answer is (-h, -k).
  TRAP      Answering (h, k). The new origin is at (h,k) in OLD language;
            the OLD origin is at (-h,-k) in NEW language. Mirror image.
```

---

# GROUP B — TRANSLATION, CURVES

```
  PATTERN 5 — TRANSFORMED EQUATION OF A STRAIGHT LINE             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the transformed equation of 3x - 4y + 7 = 0 when the
            origin is shifted to (1,-2)."
  METHOD    1. Substitute x = X + h and y = Y + k.
            2. Expand and collect. The coefficients of X and Y come out
               the SAME as the coefficients of x and y.
            3. Only the constant changes.
  SHORTCUT  New constant = the old expression evaluated at (h, k).
            For 3x - 4y + 7 at (1,-2):  3 + 8 + 7 = 18. Done.
  TRAP      Changing the slope. A translation never turns anything, so
            the coefficients cannot change. If yours did, you slipped.
```

```
  PATTERN 6 — TRANSFORMED EQUATION OF A CURVE                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the origin is shifted to (-1,2), find the transformed
            equation of x^2 + y^2 + 2x - 4y + 1 = 0."
  METHOD    1. Write x = X + h , y = Y + k with the numbers filled in.
            2. Substitute into the equation.
            3. Expand EVERY bracket separately, on its own line.
            4. Collect X^2 , XY , Y^2 , X , Y , constant in columns.
            5. State the answer in capitals.
  CHECK     The coefficients of X^2 , XY , Y^2 MUST equal the original
            a , h , b. If not, go back and find the algebra error.
  TRAP      Substituting X - h instead of X + h. For an EQUATION you need
            OLD in terms of NEW, which is the PLUS version.
```

```
  PATTERN 7 — RECOVER THE ORIGINAL EQUATION                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the origin is shifted to (2,3) the transformed equation
            is X^2 + 3XY - 2Y^2 + 17X - 7Y - 11 = 0. Find the original."
  METHOD    1. You want small letters at the end, so substitute
                  X = x - h  and  Y = y - k.
            2. Expand every term on its own line.
            3. Collect in columns.
  CHECK     Pick any point, compute its old and new coordinates, and
            evaluate BOTH expressions. They must give the same number.
  TRAP      Trying to "flip the sign of h and k and reuse the other
            formula". Do not. Just ask: which letters do I want left?
```

---

# GROUP C — REMOVING THE FIRST DEGREE TERMS (the star topic)

```
  PATTERN 8 — REMOVE FIRST DEGREE TERMS BY COMPLETING THE SQUARE  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the point to which the origin is to be shifted so that
            x^2 + y^2 - 4x + 6y - 12 = 0 has no first degree terms."
            ( and there is NO xy term )
  METHOD    1. Group the x terms and the y terms.
            2. Complete each square: x^2 + px = (x + p/2)^2 - (p/2)^2.
            3. Read the shift straight off the brackets:
                  (x - 2)^2 gives alpha = 2 ; (y + 3)^2 gives beta = -3.
            4. The leftover constant gives the new equation free.
  TRAP      When the square has a coefficient (4x^2, 9y^2), take it
            OUTSIDE the bracket before halving the middle term.
```

```
  PATTERN 9 — REMOVE FIRST DEGREE TERMS BY FORMULA, NO xy TERM    2 marks
  ------------------------------------------------------------------------
  TRIGGER   Same as Pattern 8, but you want it fast.
  METHOD    1. Match against ax^2 + by^2 + 2gx + 2fy + c = 0.
            2. HALVE the coefficients of x and y to get g and f.
            3. alpha = -g/a       beta = -f/b
  EXAMPLE   4x^2 + 9y^2 - 8x + 36y + 4 = 0
               a=4 , b=9 , g=-4 , f=18
               alpha = 4/4 = 1 , beta = -18/9 = -2 . Answer (1,-2).
  TRAP      Forgetting to halve (giving (2,-4)) or forgetting to divide
            by a and b (giving (4,-18)). Both wrong answers will be
            sitting in the options waiting for you.
```

```
  PATTERN 10 — REMOVE FIRST DEGREE TERMS WITH AN xy TERM      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Remove the first degree terms from
            2x^2 + 4xy + 5y^2 - 4x - 22y + 7 = 0."
  METHOD    1. Read off a , h , b , g , f , c - HALVING the coefficients
               of xy , x and y.
            2. Write the two conditions (worth a mark on their own):
                  a.alpha + h.beta + g = 0
                  h.alpha + b.beta + f = 0
            3. Solve them, or quote
                  alpha = (hf - bg)/(ab - h^2)
                  beta  = (gh - af)/(ab - h^2)
            4. Check ab - h^2 is not zero BEFORE dividing.
  TRAP      Completing the square. You CANNOT - the xy term ties x and y
            together. You must use the formula here.
```

```
  PATTERN 11 — STATE THE FULL TRANSFORMED EQUATION TOO            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "... and find the transformed equation."
  METHOD    1. Do Pattern 9 or 10 to get alpha and beta.
            2. New constant:  c' = g.alpha + f.beta + c.
            3. Write   a X^2 + 2h XY + b Y^2 + c' = 0
               ( a , h , b are UNCHANGED by a translation ).
  CHECK     Substitute x = X + alpha , y = Y + beta into the original
            and confirm the X and Y terms both vanish.
  TRAP      Stopping after finding the point. If the question says "and
            find the transformed equation", half the marks are in the
            equation. Also: do NOT recompute a, h, b - they never change.
```

```
  PATTERN 12 — FIND THE CENTRE OF A CONIC                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the centre of 14x^2 - 4xy + 11y^2 - 44x - 58y + 71 = 0."
  METHOD    IDENTICAL to Pattern 10. "Centre of the conic" and "point to
            which the origin must be shifted to remove the first degree
            terms" are the SAME question in different words.
  TRAP      Not recognising it. This is how the idea shows up in EAPCET
            and in the conics chapters of Maths IIB.
```

```
  PATTERN 13 — NO SUCH POINT EXISTS                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   The denominator ab - h^2 comes out as ZERO.
  METHOD    1. Do NOT divide by zero.
            2. Write: "Since ab - h^2 = 0, the two conditions have no
               unique solution, so there is no point to which the origin
               can be shifted to remove both first degree terms. The
               conic has no centre (it is a parabola or a pair of
               parallel lines)."
  TRAP      Panicking and writing 'infinity' or leaving it blank. That
            sentence above IS the full-mark answer.
```

---

# GROUP D — ROTATION, POINTS

```
  PATTERN 14 — NEW COORDINATES AFTER A ROTATION                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the new coordinates of (4,3) when the axes are rotated
            through 30 degrees."
  METHOD    1. Write cos t and sin t as exact surds.
            2. X =  x cos t + y sin t
               Y = -x sin t + y cos t
            3. Leave the answer as a surd - do not decimalise.
  CHECK     X^2 + Y^2 must equal x^2 + y^2. This catches every sign slip
            and it is free.
  TRAP      Putting the minus on the wrong line. Test with t = 0:
            everything must reduce to X = x , Y = y.
```

```
  PATTERN 15 — THE SPECIAL ANGLES 45 AND 90                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "rotated through 45 degrees" or "through 90 degrees".
  METHOD    45 degrees:   X = (x + y)/sqrt(2) ,  Y = (y - x)/sqrt(2)
            90 degrees:   X = y ,  Y = -x
  SHORTCUT  If the point already lies along the direction you are
            rotating to, its new Y is ZERO and its new X is just its
            distance from the origin.
            e.g. (1,1) at 45 degrees -> (sqrt(2), 0).
            e.g. (3,4) with tan t = 4/3 -> (5, 0).
  TRAP      Writing (0, sqrt(2)) instead of (sqrt(2), 0). Draw a quick
            sketch if unsure.
```

---

# GROUP E — ROTATION, CURVES

```
  PATTERN 16 — TRANSFORMED EQUATION AFTER A ROTATION              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the axes are rotated through pi/6, find the transformed
            equation of x^2 + 2 sqrt(3) xy - y^2 = 2a^2."
  METHOD    EITHER substitute x = X cos t - Y sin t , y = X sin t + Y cos t
            OR use the coefficient formulas (much faster):
                a' = a cos^2 t + 2h sin t cos t + b sin^2 t
                b' = a sin^2 t - 2h sin t cos t + b cos^2 t
                2h' = 2h cos 2t - (a - b) sin 2t
                c' = c   (unchanged)
  CHECK     a' + b' must equal a + b , and a'b' - h'^2 must equal ab - h^2.
  TRAP      Changing the constant term. Under a ROTATION the constant
            never changes. If yours did, you made an error.
```

```
  PATTERN 17 — THE 45-DEGREE ROTATION                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "rotated through 45 degrees" with a second degree equation.
  METHOD    Use the two magic lines:
                x^2 + y^2  =  X^2 + Y^2
                x y        =  ( X^2 - Y^2 ) / 2
            Then the whole substitution is one line of arithmetic.
  EXAMPLE   17x^2 - 16xy + 17y^2 = 225
              = 17(X^2+Y^2) - 8(X^2-Y^2) = 9X^2 + 25Y^2 = 225
  EVEN FASTER  If a = b:   a' = a + h  and  b' = a - h.
  TRAP      Forgetting that xy picks up a factor 1/2 when converted.
```

```
  PATTERN 18 — RECOVER THE ORIGINAL EQUATION AFTER A ROTATION     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the axes are rotated through 45 degrees, the transformed
            equation is 17X^2 - 16XY + 17Y^2 = 225. Find the original."
  METHOD    1. You want small letters at the end, so use
                  X = (x + y)/sqrt(2)  and  Y = (y - x)/sqrt(2).
            2. Substitute and collect.
  TRAP      Using the wrong pair. If the answer must be in x and y, then
            X and Y are what you replace.
```

```
  PATTERN 19 — A LINE IN NORMAL FORM, ROTATED BY ITS OWN ANGLE    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "When the axes are rotated through alpha, find the transformed
            equation of x cos alpha + y sin alpha = p."
  METHOD    1. Substitute the OLD-from-NEW pair.
            2. The Y terms cancel and the X terms give cos^2 + sin^2 = 1.
            3. Answer: X = p.
  WHY       The perpendicular from the origin to that line points at
            angle alpha, so after the rotation it lies along the new
            X-axis and the line is simply vertical.
  TRAP      Grinding through the algebra without spotting the cancelling.
            Set out the four terms neatly and the Y's vanish in one line.
```

---

# GROUP F — REMOVING THE xy TERM

```
  PATTERN 20 — ANGLE OF ROTATION, a NOT EQUAL TO b                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle through which the axes must be rotated to
            remove the xy term from x^2 + 2 sqrt(3) xy - y^2 = 2a^2."
  METHOD    1. tan(2 theta) = (coefficient of xy) / (a - b)
            2. Find 2 theta.
            3. HALVE IT.
            4. If the value is not a standard angle, leave the answer as
               theta = (1/2) tan^-1( ... ). That IS the answer.
  TRAP      Forgetting to halve (writing 60 instead of 30). This is the
            single most common error in the whole chapter.
            Also: if tan(2 theta) is negative, take 2 theta in the SECOND
            quadrant so theta stays positive and acute-ish.
```

```
  PATTERN 21 — ANGLE OF ROTATION WHEN a = b                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   The coefficients of x^2 and y^2 are EQUAL.
            e.g. 3x^2 + 10xy + 3y^2 , or 17x^2 - 16xy + 17y^2 ,
                 or x^2 + 4xy + y^2 - 2x + 2y - 6 = 0.
  METHOD    1. Note a - b = 0.
            2. Say: "tan(2 theta) is undefined, so 2 theta = 90 degrees."
            3. theta = 45 degrees = pi/4.
  TRAP      Trying to divide by zero. Also, do not be distracted by the
            first degree terms - only a, h, b matter here. Cover the
            rest of the equation with your hand.
```

```
  PATTERN 22 — DERIVE tan(2 theta) = 2h/(a - b)                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the axes must be rotated through
            (1/2) tan^-1(2h/(a-b)) to remove the xy term."
  METHOD    1. Substitute x = X cos t - Y sin t , y = X sin t + Y cos t.
            2. Collect ONLY the coefficient of XY:
                  -2a sin t cos t + 2h(cos^2 t - sin^2 t) + 2b sin t cos t
                = 2h cos(2t) - (a - b) sin(2t)
            3. Set it to zero and divide.
            4. Add the a = b case: 2 theta = 90, so theta = 45 degrees.
  TRAP      Collecting all the terms instead of just the XY one. You only
            need the cross term. Also remember the 2 in front of h.
```

---

# GROUP G — INVARIANTS

```
  PATTERN 23 — PROVE a + b IS INVARIANT                       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that a + b is unchanged by a rotation of the axes."
  METHOD    1. Write a' and b' from the coefficient formulas.
            2. Add them.
            3. The 2h sin t cos t terms cancel, and each Pythagorean
               bracket is 1, leaving a + b.
  TRAP      Not showing the cancellation explicitly. The examiner wants
            to SEE the +2h sc and -2h sc line up.
```

```
  PATTERN 24 — USE THE INVARIANTS TO GET THE ANSWER FAST          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "After the xy term is removed, what are the new coefficients
            of X^2 and Y^2?"
  METHOD    1. With h' = 0 :   a' + b' = a + b   and   a'b' = ab - h^2.
            2. So a' and b' are the roots of
                  t^2 - (a + b) t + (ab - h^2) = 0.
            3. Solve the quadratic. No trigonometry at all.
  EXAMPLE   3x^2 + 10xy + 3y^2 :  t^2 - 6t - 16 = 0 -> t = 8 , -2.
  TRAP      The quadratic gives you the PAIR but not which belongs to X^2.
            If a = b, use a' = a + h to settle it.
```

```
  PATTERN 25 — PROVE DISTANCE IS INVARIANT                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the distance between two points is unchanged by a
            translation / by a rotation of the axes."
  METHOD    TRANSLATION: X1 - X2 = (x1 - h) - (x2 - h) = x1 - x2. The h's
            cancel, so every difference survives, so the distance does.
            ROTATION: write u = x1-x2 , v = y1-y2. Then
                X1-X2 =  u cos t + v sin t
                Y1-Y2 = -u sin t + v cos t
            Square and add: the 2uv cross terms cancel, leaving u^2 + v^2.
  TRAP      Writing the coordinates out in full instead of using the
            differences. Using u and v halves the work.
```

```
  PATTERN 26 — PROVE AREA IS INVARIANT                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the area of a triangle is unchanged by a
            transformation of the axes."
  METHOD    1. The area formula uses only DIFFERENCES of coordinates.
            2. For a translation, every h and k cancels out of every
               difference. Also note (y2-y3)+(y3-y1)+(y1-y2) = 0, so all
               the h terms vanish together.
            3. For a rotation, all distances are preserved, so the new
               triangle is congruent to the old one.
  TRAP      Doing a numerical example when a proof is asked, or vice
            versa. Read the verb: "show that" wants algebra;
            "verify that" allows a specific triangle.
```

```
  PATTERN 27 — THE ONE-SENTENCE INVARIANCE QUESTION               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two points are 13 units apart. The origin is shifted to
            (5,-2) and the axes rotated through 37 degrees. Find the new
            distance."
  METHOD    1. Recognise that nothing needs computing.
            2. Write: "Translation and rotation are rigid motions of the
               axes, so distance is invariant. The distance is 13."
  TRAP      Reaching for sin 37 and wasting three minutes. There is
            nothing to calculate. Spot it and move on.
```

---

# GROUP H — COMBINED AND CLASSIFYING

```
  PATTERN 28 — FULL REDUCTION: TRANSLATE THEN ROTATE              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Reduce 3x^2 + 10xy + 3y^2 - 2x - 14y - 13 = 0 to its
            simplest form and name the curve."
  METHOD    1. TRANSLATE first: find (alpha, beta) by Pattern 10, and
               c' = g.alpha + f.beta + c.
               Now:  a X^2 + 2h XY + b Y^2 + c' = 0
            2. ROTATE second: tan(2t) = 2h/(a-b) (45 degrees if a = b).
               Get a' and b' from the invariant quadratic.
               Now:  a' X'^2 + b' Y'^2 + c' = 0
            3. Divide through and name the curve.
  TRAP      Doing them in the wrong order. Translate FIRST - a rotation
            cannot bring the first degree terms back, but doing it the
            other way round makes the centre much harder to find.
```

```
  PATTERN 29 — NAME THE CONIC WITHOUT TRANSFORMING                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The curve 2x^2 + 4xy + 5y^2 - 4x - 22y + 7 = 0 is ... ?"
  METHOD    Compute ab - h^2 (remember to halve the xy coefficient).
                ab - h^2 > 0   ->   ELLIPSE  ( CIRCLE if a=b and h=0 )
                ab - h^2 = 0   ->   PARABOLA
                ab - h^2 < 0   ->   HYPERBOLA
  WHY       ab - h^2 is a rotation invariant, so it already knows the
            shape before you do any work.
  TRAP      Forgetting to halve the xy coefficient before squaring it.
```

```
  PATTERN 30 — DERIVE THE TRANSFORMATION FORMULAS                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the formulas for a translation / rotation of axes."
  METHOD    TRANSLATION: draw the picture, walk h then X along the
            bottom, so x = X + h ; walk k then Y up the side, so y = Y + k.
            ROTATION: write OP = r at angle phi, so x = r cos phi and
            y = r sin phi. From the new axes the angle is (phi - theta),
            so X = r cos(phi - theta) and Y = r sin(phi - theta). Expand
            with the compound angle formulas. Then invert by multiplying
            and adding.
  TRAP      Skipping the diagram. In a derivation question the labelled
            diagram is worth a mark on its own.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right-hand column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "When the origin is shifted to (3,-4), find the new coordinates of (2,5)." | 1 |
| "The new coordinates of P are (4,-3). Find P." | 2 |
| "Find the point to which the origin should be shifted so that (3,0) becomes (2,-3)." | 3 |
| "Where does the old origin go?" | 4 |
| "Find the transformed equation of 3x - 4y + 7 = 0." | 5 |
| "Find the transformed equation of x^2 + y^2 + 2x - 4y + 1 = 0." | 6 |
| "The transformed equation is ... . Find the original equation." | 7 |
| "Remove the first degree terms from x^2 + y^2 - 4x + 6y - 12 = 0." | 8 or 9 |
| "Remove the first degree terms from 2x^2 + 4xy + 5y^2 - 4x - 22y + 7 = 0." | 10 |
| "... and find the transformed equation." | 11 |
| "Find the centre of the conic 14x^2 - 4xy + 11y^2 - 44x - 58y + 71 = 0." | 12 |
| The denominator `ab - h^2` came out zero. | 13 |
| "Find the new coordinates of (4,3) after a rotation of 30 degrees." | 14 |
| "... after a rotation of 45 degrees / 90 degrees." | 15 |
| "Find the transformed equation of x^2 + 2 sqrt(3) xy - y^2 = 2a^2 at pi/6." | 16 |
| "Rotate 17x^2 - 16xy + 17y^2 = 225 through 45 degrees." | 17 |
| "The transformed equation after a 45 degree rotation is ... . Find the original." | 18 |
| "Rotate x cos alpha + y sin alpha = p through alpha." | 19 |
| "Find the angle that removes the xy term from 6x^2 + 5xy - 6y^2 = 0." | 20 |
| "Find the angle that removes the xy term from 3x^2 + 10xy + 3y^2 = 9." | 21 |
| "Show that theta = (1/2) tan^-1( 2h/(a-b) )." | 22 |
| "Show that a + b is invariant." | 23 |
| "What are the new coefficients once the xy term is gone?" | 24 |
| "Show that the distance between two points is unchanged." | 25 |
| "Show that the area of a triangle is unchanged." | 26 |
| "The points are 13 apart. After shifting and rotating, how far apart?" | 27 |
| "Reduce the equation to its simplest form and name the curve." | 28 |
| "The curve 3x^2 + 10xy + 3y^2 - 2x - 14y - 13 = 0 is a ... ?" | 29 |
| "Derive the rotation formulas." | 30 |

If you can name all thirty in five seconds each, you are finished with this chapter.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +======================================================================+
  |                                                                      |
  |   THE HONEST POSITION                                                |
  |                                                                      |
  |   Transformation of Axes gives you 2 marks in Section A almost       |
  |   every year, and a 4-mark Section B question some years.            |
  |   It gives you nothing in Section C, ever.                           |
  |                                                                      |
  |   BUT Section A is COMPULSORY. You cannot skip it. So this is a      |
  |   mark you either bank or lose - there is no third option.           |
  |                                                                      |
  |   Target:  2 marks , guaranteed , in under 90 seconds.               |
  |                                                                      |
  +======================================================================+
```

**What to learn if you have five hours total:**

```
  HOUR 1     Patterns 1 , 2 , 3 , 4         ( translation of a point )
             These are pure subtraction. Do 20 of them.

  HOUR 2     Patterns 8 , 9                 ( remove first degree terms,
                                              no xy - the common case )
             alpha = -g/a , beta = -f/b. Do 10 of them.

  HOUR 3     Patterns 20 , 21               ( angle to remove the xy term )
             tan(2t) = 2h/(a-b) , and a = b gives 45 degrees.
             Do 10 of them.

  HOUR 4     Patterns 6 , 10 , 11           ( transformed equations and
                                              the xy version )
             Slower, more algebra. Do 6 of them, carefully.

  HOUR 5     Patterns 14 , 15 , 17          ( rotation )
             Plus Pattern 27 - learn to spot the one-sentence question.
```

**What to skip if you are short of time:**

Patterns 22, 25, 26 and 30 (the derivations and proofs) are worth 4 marks each **if**
they appear, but they appear rarely and Section B lets you choose 5 of 7. If you are
drowning, learn to recognise them and move on. Never skip Patterns 1, 3, 9 and 21 —
those are the compulsory Section A mark.

## The three lines that carry the marks

```
  OPENING     "Let the origin be shifted to (alpha, beta), so that
               x = X + alpha and y = Y + beta."
               ( or, for rotation: "Let the axes be rotated through
                 theta, so that x = X cos t - Y sin t and
                 y = X sin t + Y cos t." )

  MIDDLE      "For the first degree terms to vanish,
               a.alpha + h.beta + g = 0 and h.alpha + b.beta + f = 0."
               ( or: "For the xy term to vanish,
                 2h cos 2t - (a - b) sin 2t = 0." )

  CLOSING     "Therefore the origin must be shifted to (-2, 3) and the
               transformed equation is 2X^2 + 4XY + 5Y^2 - 22 = 0."
```

Even if the arithmetic wobbles, those three lines plus honest working will pick up
most of the marks. **This question is compulsory. Never leave it blank.**

## Last thing: the 30-second verification

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Whatever answer you get, pick ONE point on the original curve,     |
  |   push it through your transformation, and put it into your new      |
  |   equation. If it satisfies it, you are right. If not, you are not.  |
  |                                                                      |
  |   Thirty seconds. Catches every sign error in the chapter.           |
  |                                                                      |
  +----------------------------------------------------------------------+
```
