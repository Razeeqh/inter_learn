# Circle — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Almost every pattern below is powered by the same three expressions:

```
  S   =  x^2 + y^2 + 2gx + 2fy + c
  S1  =  x1^2 + y1^2 + 2g*x1 + 2f*y1 + c
  T   =  x*x1 + y*y1 + g(x + x1) + f(y + y1) + c
```

---

```
  PATTERN 1 — CENTRE AND RADIUS OF A GIVEN CIRCLE                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the centre and radius of ..."
  METHOD    1. If the equation starts with a*x^2 + a*y^2, DIVIDE the whole
               equation by a.
            2. g = (coefficient of x) / 2
               f = (coefficient of y) / 2
               c = the constant, WITH its sign
            3. Centre = ( -g , -f )
            4. Radius = sqrt( g^2 + f^2 - c )
  TRAP      Forgetting to divide by 2 or 3 first. Every number after that
            is then wrong. Also: c keeps its own MINUS sign, so
            g^2 + f^2 - (-12) = g^2 + f^2 + 12.
```

```
  PATTERN 2 — EQUATION FROM CENTRE AND RADIUS (OR A POINT)        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "centre (h,k) and radius r" , or
            "centre (h,k) passing through the point P"
  METHOD    1. If a point is given instead of r, first find
                  r = distance from the centre to that point.
            2. Write  (x - h)^2 + (y - k)^2 = r^2
            3. Expand only if the question asks for the general form.
  TRAP      The signs flip: centre (-2, 3) gives (x + 2)^2 + (y - 3)^2.
```

```
  PATTERN 3 — CIRCLE FROM THE ENDS OF A DIAMETER                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "ends of a diameter" or "diameter joining A and B".
  METHOD    1. Write   (x - x1)(x - x2) + (y - y1)(y - y2) = 0
            2. Expand and collect.
            3. Optional check: centre = midpoint, radius = half of AB.
  TRAP      Mixing the x's and y's together. Keep the x-bracket pair and
            the y-bracket pair completely separate.
```

```
  PATTERN 4 — REAL / POINT / IMAGINARY CIRCLE, OR FIND k          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does the equation represent?" or
            "Find k so that it is a point circle / a real circle."
  METHOD    Compute  g^2 + f^2 - c  and read:
                 > 0   REAL circle
                 = 0   POINT circle - just the point (-g, -f)
                 < 0   IMAGINARY circle - no real points
            For "find k", set the expression = 0 (point circle)
            or > 0 (real circle) and solve.
  TRAP      Answering "no circle" for the < 0 case. The correct word is
            IMAGINARY circle.
```

```
  PATTERN 5 — CIRCLE TOUCHING AN AXIS / BOTH AXES / INTERCEPTS  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "touches the x-axis" , "touches both axes" ,
            "find the intercept made on the y-axis"
  METHOD    Touches x-axis   ->  radius = |k|   ->  g^2 = c
            Touches y-axis   ->  radius = |h|   ->  f^2 = c
            Touches BOTH     ->  centre (a, a) , radius |a| , g^2 = f^2 = c
            Passes through origin  ->  c = 0
            x-intercept = 2 sqrt(g^2 - c)
            y-intercept = 2 sqrt(f^2 - c)
  TRAP      "Touches both axes" has TWO answers if the quadrant is not
            stated. Say which quadrant you are assuming.
```

```
  PATTERN 6 — PARAMETRIC EQUATIONS                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the parametric equations" , or
            "Find the point whose parameter is theta = ..."
  METHOD    1. Find the centre (h,k) and the radius r.
            2. x = h + r cos(theta)
               y = k + r sin(theta)
            3. For a specific theta, substitute the standard values.
  TRAP      Using r on its own and forgetting to ADD the centre.
            For a circle NOT at the origin, x = r cos t is wrong.
```

```
  PATTERN 7 — POSITION OF A POINT                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the position of the point (x1,y1) with respect to ..."
  METHOD    1. Make the coefficient of x^2 equal to 1.
            2. Substitute the point into the left side to get S1.
            3. S1 < 0  INSIDE ,  S1 = 0  ON ,  S1 > 0  OUTSIDE.
  TRAP      Writing only the number. State the WORD (inside / on / outside)
            — that is where the mark is.
```

```
  PATTERN 8 — LENGTH OF THE TANGENT / POWER OF A POINT            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the length of the tangent from ..." or
            "Find the power of the point ..."
  METHOD    1. Compute S1.
            2. POWER = S1 .
               LENGTH OF THE TANGENT = sqrt(S1) .
            3. Optional check: sqrt(d^2 - r^2) must give the same number.
  TRAP      If S1 is NEGATIVE the point is inside and NO tangent exists.
            Write that sentence instead of taking a square root.
```

```
  PATTERN 9 — POSITION OF A LINE                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the position of the line ... with respect to the circle"
  METHOD    1. Find the centre and radius.
            2. d = perpendicular distance from the CENTRE to the line.
            3. d < r  SECANT (cuts at 2 points)
               d = r  TANGENT (touches at 1 point)
               d > r  does NOT meet the circle
  TRAP      Solving the two equations simultaneously. It works but takes
            four times as long and invites algebra errors.
```

```
  PATTERN 10 — FIND k SO THAT A LINE TOUCHES A CIRCLE             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find k if the line ... touches the circle ..."
  METHOD    1. Centre and radius.
            2. Write  d = r  and remove the modulus:
                     (expression) = + r*sqrt(...)   and
                     (expression) = - r*sqrt(...)
            3. Solve both. There are usually TWO answers.
  TRAP      Giving only one value of k. A modulus always opens two ways,
            and geometrically there are two parallel tangents.
```

```
  PATTERN 11 — TANGENT PARALLEL / PERPENDICULAR TO A GIVEN LINE   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the tangents to the circle parallel (or perpendicular)
            to ax + by + c = 0"
  METHOD    PARALLEL      : take the tangent as  ax + by + k = 0
            PERPENDICULAR : take the tangent as  bx - ay + k = 0
            Then set d = r and solve for k. Two answers.
  TRAP      For the perpendicular case, swapping a and b but forgetting
            the minus sign.
```

```
  PATTERN 12 — TANGENT OF A GIVEN SLOPE (SLOPE FORM)              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the tangents of slope m to ..."
  METHOD    For x^2 + y^2 = a^2 :
                  y  =  mx  +/-  a sqrt(1 + m^2)
            For x^2 + y^2 + 2gx + 2fy + c = 0 , with r = sqrt(g^2+f^2-c) :
                  y + f  =  m ( x + g )  +/-  r sqrt(1 + m^2)
            Touching condition for y = mx + c on x^2 + y^2 = a^2 :
                  c^2  =  a^2 ( 1 + m^2 )
  TRAP      Dropping the "+/-". There are always TWO parallel tangents.
```

```
  PATTERN 13 — SHOW A LINE TOUCHES, AND FIND THE POINT OF CONTACT 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... touches ... and find the point of contact."
  METHOD    1. Show d = r. That proves it touches. (Half the marks.)
            2. Point of contact = FOOT OF THE PERPENDICULAR from the centre:
               a. write the perpendicular line through the centre
                  (its slope is -1/(slope of the given line)),
               b. solve the two lines together.
            3. Verify by substituting into the circle - must give 0.
  TRAP      Stopping after step 1. The point of contact carries marks too.
```

```
  PATTERN 14 — LENGTH OF A CHORD CUT OFF BY A LINE                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the length of the chord intercepted by the line ..."
  METHOD    1. Centre and radius.
            2. d = perpendicular distance from the centre to the line.
            3. Length = 2 sqrt( r^2 - d^2 )
            4. If d = 0, say "the line passes through the centre, so the
               chord is a diameter of length 2r".
  TRAP      Forgetting the leading 2. sqrt(r^2 - d^2) is only HALF the chord.
```

```
  PATTERN 15 — TANGENT AT A POINT ON THE CIRCLE               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the tangent at the point (x1,y1)."
  METHOD    1. FIRST verify the point is on the circle: S1 must be 0.
               (One line. Say it.)
            2. Write T = 0 :
                  x*x1 + y*y1 + g(x + x1) + f(y + y1) + c = 0
            3. Simplify.
            4. Check: distance from the centre to your line must equal r.
  TRAP      Using T = 0 without checking S1 = 0. If the point is not on the
            circle, T = 0 is a chord of contact / polar, not a tangent.
```

```
  PATTERN 16 — NORMAL AT A POINT                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the normal at ..."
  METHOD    1. The normal is the line through the CENTRE and the point.
            2. Find the slope between those two points.
            3. Use  y - y1 = m ( x - x1 ).
            4. Check: the centre must satisfy your final equation.
  TRAP      Trying to use a tangent formula. There is no need - the normal
            is just an ordinary "line through two points" question.
```

```
  PATTERN 17 — CHORD OF CONTACT                               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the chord of contact of the tangents drawn from (x1,y1)."
  METHOD    1. Check S1 > 0 (the point must be OUTSIDE).
            2. Write T = 0. Same formula as the tangent.
            3. Simplify.
  TRAP      Confusing this with the PAIR of tangents. The chord of contact
            is ONE straight line. The pair of tangents is a second-degree
            equation. Read the question wording carefully.
```

```
  PATTERN 18 — CHORD WITH A GIVEN MIDPOINT                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the chord whose midpoint is (x1,y1)."
  METHOD    1. Check S1 < 0 (a midpoint must be INSIDE).
            2. Write T = S1 and simplify.
            3. Check 1: the midpoint must lie on your answer.
               Check 2: your line must be perpendicular to the line joining
               the centre to the midpoint.
  TRAP      Using T = 0 instead of T = S1. This is the single most common
            mistake in the whole chapter, because the two look so alike.
```

```
  PATTERN 19 — PAIR OF TANGENTS FROM AN EXTERNAL POINT      *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Find the equations of the pair of tangents from (x1,y1)."
  METHOD    1. Compute S1 (must be positive).
            2. Compute T.
            3. Write  S * S1  =  T^2 .
            4. Expand BOTH sides fully, in neat columns.
            5. Bring everything to one side and simplify (divide by any
               common factor).
            6. Optional: factorise into two straight lines.
            7. Check by the distance method with y = m(x - x1) + y1.
  TRAP      Expansion errors. Write S*S1 on one line and T^2 directly
            underneath it, then subtract column by column.
```

```
  PATTERN 20 — POLAR OF A POINT / POLE OF A LINE                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the polar of (x1,y1)" or "Find the pole of the line ..."
  METHOD    POLAR : write T = 0. That's all.
            POLE  : write the polar of an unknown (x1, y1), which is
                    T = 0, then COMPARE COEFFICIENTS with the given line:
                        (coef of x) / l  =  (coef of y) / m  =  const / n
                    and solve for x1 and y1.
            For x^2 + y^2 = a^2 the pole of lx + my + n = 0 is
                    ( -a^2 l / n ,  -a^2 m / n ).
  TRAP      The polar and the tangent use the SAME expression. Do not
            claim the point is on the circle unless you checked S1 = 0.
```

```
  PATTERN 21 — CONJUGATE POINTS / CONJUGATE LINES                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the points ... are conjugate" , or
            "Find k if the lines ... are conjugate."
  METHOD    CONJUGATE POINTS:
                 S12 = x1x2 + y1y2 + g(x1+x2) + f(y1+y2) + c = 0
                 (for x^2 + y^2 = a^2 :   x1x2 + y1y2 = a^2 )
            CONJUGATE LINES w.r.t. x^2 + y^2 = a^2 :
                 a^2 ( l1 l2 + m1 m2 )  =  n1 n2
            For the general circle use r^2 in place of a^2 and shift the
            centre in:
                 r^2 (l1l2 + m1m2) = (-g l1 - f m1 + n1)(-g l2 - f m2 + n2)
  TRAP      Sign of n. Write both lines in the form  lx + my + n = 0
            BEFORE reading off n1 and n2.
```

```
  PATTERN 22 — CIRCLE THROUGH THREE POINTS               *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle passing through the points A, B and C."
  METHOD    1. Let it be  x^2 + y^2 + 2gx + 2fy + c = 0 .
            2. Substitute each point -> equations (1), (2), (3).
            3. (2) - (1) and (3) - (2) to eliminate c.
            4. Solve the two resulting equations for g and f.
            5. Back-substitute to get c.
            6. Write the circle, then the centre and radius if asked.
            7. CHECK all three points give 0.
  TRAP      Subtracting equations out of order and losing a sign. Always
            do (2)-(1) then (3)-(2), and label every line.
```

```
  PATTERN 23 — CIRCLE THROUGH TWO POINTS WITH CENTRE ON A LINE  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "... passes through A and B and its centre lies on the line ..."
  METHOD    1. Let the centre be (h, k).
            2. Equation (1): put (h, k) into the given line.
            3. Equation (2): distance to A = distance to B. Square both
               sides; the h^2 and k^2 cancel, leaving a LINEAR equation.
            4. Solve (1) and (2) for h and k.
            5. r^2 = squared distance from (h,k) to A.
            6. Write (x-h)^2 + (y-k)^2 = r^2 and expand.
            7. CHECK both points, and check the centre is on the line.
  TRAP      Forgetting to square-root or forgetting that r^2 (not r) goes
            on the right-hand side.
```

```
  PATTERN 24 — CONCENTRIC CIRCLE                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle concentric with ... and passing through ..."
            (or "... of radius r").
  METHOD    1. Keep the x-term, the y-term and the coefficient EXACTLY as
               they are. Change ONLY the constant:
                  x^2 + y^2 + 2gx + 2fy + k = 0
            2. Substitute the given point (or use the given radius) and
               solve for k.
  TRAP      Recomputing everything from scratch. Concentric means same
            centre, so g and f cannot change.
```

```
  PATTERN 25 — ANGLE BETWEEN CIRCLES / ORTHOGONALITY        4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the circles cut orthogonally" , "Find k so that
            they cut orthogonally" , "Find the angle between the circles".
  METHOD    1. DIVIDE each circle so the coefficient of x^2 is 1.
            2. Read off g1, f1, c1 and g2, f2, c2.
            3. ORTHOGONAL  <=>   2 g1 g2 + 2 f1 f2  =  c1 + c2
               (equivalently  d^2 = r1^2 + r2^2 )
            4. For a general angle:
                  cos(theta) = ( d^2 - r1^2 - r2^2 ) / ( 2 r1 r2 )
  TRAP      Skipping step 1. If one circle is 3x^2 + 3y^2 + ... , every
            value of g2, f2, c2 is three times too big and the proof fails.
            Also: keep BOTH 2's on the left-hand side.
```

```
  PATTERN 26 — RELATIVE POSITION / NUMBER OF COMMON TANGENTS      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the position of the two circles" or "How many common
            tangents can be drawn?"
  METHOD    1. Centres C1, C2 and radii r1, r2.
            2. d = distance C1C2.
            3. Compare:
                  d > r1 + r2          apart                4 tangents
                  d = r1 + r2          touch externally     3 tangents
                  |r1-r2| < d < r1+r2  cut at 2 points      2 tangents
                  d = |r1 - r2|        touch internally     1 tangent
                  d < |r1 - r2|        one inside the other 0 tangents
  TRAP      Comparing d only with r1 + r2 and forgetting |r1 - r2|.
            You must test BOTH before deciding.
```

```
  PATTERN 27 — TWO CIRCLES TOUCH: CONTACT POINT + COMMON TANGENT  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the circles touch each other. Find the point of
            contact and the common tangent."
  METHOD    1. Centres, radii, and d. Show d = r1 + r2 (external)
               or d = |r1 - r2| (internal).
            2. POINT OF CONTACT:
                  external touching -> divides C1C2 INTERNALLY in r1 : r2
                  internal touching -> divides C1C2 EXTERNALLY in r1 : r2
               Section formula:  ( (m x2 + n x1)/(m+n) , (m y2 + n y1)/(m+n) )
            3. COMMON TANGENT at the contact point = S - S' = 0.
            4. CHECK: the contact point must satisfy that tangent, and the
               distance from each centre to it must equal that radius.
  TRAP      Using the external section formula for external touching.
            It is the other way round: touching EXTERNALLY uses the
            INTERNAL division.
```

```
  PATTERN 28 — COMMON CHORD / RADICAL AXIS AND ITS LENGTH   4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the common chord" , "Find the radical axis" , "Find the
            length of the common chord".
  METHOD    1. Make both circles have coefficient of x^2 equal to 1.
            2. Subtract:  S - S' = 0. The x^2 and y^2 vanish and you get
               a straight line. That is the radical axis / common chord.
            3. For the LENGTH: pick either circle, find p = perpendicular
               distance from ITS centre to that line, then
                    length = 2 sqrt( r^2 - p^2 ).
            4. Doing it with the OTHER circle must give the same number -
               use that as your check.
  TRAP      Subtracting before normalising the coefficients, so the x^2
            terms do not cancel and you get a second-degree "line".
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------------+---------+
  |  QUESTION STEM                                           | PATTERN |
  +----------------------------------------------------------+---------+
  |  "Find the centre and radius of 3x^2 + 3y^2 - ..."       |    1    |
  |  "... ends of a diameter are (1,2) and (4,6)"            |    3    |
  |  "Find k so that it represents a point circle"           |    4    |
  |  "... touches the x-axis"                                |    5    |
  |  "Write the parametric equations of ..."                 |    6    |
  |  "Find the position of the point (2,1) w.r.t. ..."       |    7    |
  |  "Find the length of the tangent from ..."               |    8    |
  |  "Find k if the line 3x + 4y = k touches ..."            |   10    |
  |  "... tangents parallel to 4x + 3y + 5 = 0"              |   11    |
  |  "Show that x + y + 1 = 0 touches ... find the point"    |   13    |
  |  "Find the length of the chord intercepted by ..."       |   14    |
  |  "Find the tangent at the point (-1, 1)"                 |   15    |
  |  "Find the normal at ..."                                |   16    |
  |  "Find the chord of contact of ..."                      |   17    |
  |  "... chord whose midpoint is (1, 2)"                    |   18    |
  |  "Find the pair of tangents from the origin to ..."      |   19    |
  |  "Find the pole of the line ... " / "the polar of ..."   |   20    |
  |  "Show that the points are conjugate w.r.t. ..."         |   21    |
  |  "... passing through (1,2), (3,-4) and (5,-6)"          |   22    |
  |  "... centre lies on the line 4x + y - 16 = 0"           |   23    |
  |  "... concentric with ... and passing through ..."       |   24    |
  |  "Show that the circles cut orthogonally"                |   25    |
  |  "How many common tangents can be drawn?"                |   26    |
  |  "Show that the circles touch. Find the point of contact"|   27    |
  |  "Find the common chord and its length"                  |   28    |
  +----------------------------------------------------------+---------+
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**

---

# THE FOUR LOOK-ALIKES — GET THESE STRAIGHT AND YOU STOP LOSING MARKS

```
  +-----------------------------+----------------------------------------+
  |  WHAT IS ASKED              |  WHAT YOU WRITE                        |
  +-----------------------------+----------------------------------------+
  |  Tangent AT a point on the  |  T = 0        (check S1 = 0 first)     |
  |  circle                     |                                        |
  +-----------------------------+----------------------------------------+
  |  Chord of contact FROM an   |  T = 0        (check S1 > 0 first)     |
  |  external point             |                                        |
  +-----------------------------+----------------------------------------+
  |  Polar of ANY point         |  T = 0        (no check needed)        |
  +-----------------------------+----------------------------------------+
  |  Chord with a given MIDPOINT|  T = S1       (check S1 < 0 first)     |
  +-----------------------------+----------------------------------------+
  |  PAIR of tangents from an   |  S * S1 = T^2                          |
  |  external point             |                                        |
  +-----------------------------+----------------------------------------+
```

Three of those five are the identical formula. Learn T once, then just decide
what the question is calling it.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  STEP 1   Learn PATTERNS 1, 2, 3, 7, 8.
           These are pure substitution and take one evening.
           They cover the Section A questions.
                        --->  2 to 4 marks, almost certain

  STEP 2   Learn PATTERNS 9, 10, 14, 15, 16.
           All of them are "d versus r" or "T = 0". One more evening.
                        --->  one Section B question, 4 marks

  STEP 3   Learn PATTERN 22 (circle through three points) until you can do
           it without looking. It is long but completely mechanical, and it
           is the most repeated 7-mark question in this chapter.
                        --->  7 marks

  STEP 4   Add PATTERN 25 (orthogonality) and PATTERN 28 (radical axis).
           Two formulas, ten minutes each. They also carry straight over
           into the next chapter, System of Circles.
                        --->  backup 4 or 7 marks

  RUNNING TOTAL if you do only steps 1 to 3:   about 13 marks out of 75
  With step 4 as a backup choice:              about 15 marks out of 75
```

```
  +-----------------------------------------------------------------+
  |  THE ONE-LINE SUMMARY OF THIS ENTIRE CHAPTER                    |
  |                                                                 |
  |    Centre (-g, -f) , radius sqrt(g^2 + f^2 - c) ,               |
  |    S1 for points , d versus r for lines ,                       |
  |    T = 0 for tangents and T = S1 for midpoints ,                |
  |    d versus r1 + r2 for two circles.                            |
  |                                                                 |
  |  Nothing else. Everything above is a decoration on those five   |
  |  ideas.                                                         |
  +-----------------------------------------------------------------+
```
