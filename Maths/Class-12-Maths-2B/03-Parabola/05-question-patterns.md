# Parabola — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Nearly every pattern below is powered by the same short list:

```
  y^2 = 4 a x        point ( a t^2 , 2 a t )        SP = x1 + a

  S   =  y^2 - 4 a x
  S1  =  y1^2 - 4 a x1
  T   =  y y1 - 2 a ( x + x1 )

  T = 0      tangent at a point ON the curve / chord of contact from OUTSIDE
  T = S1     chord with a given midpoint
  S S1 = T^2 pair of tangents

  tangent  y = m x + a/m          contact ( a/m^2 ,  2a/m )
  normal   y = m x - 2am - am^3   foot    ( a m^2 , -2 a m )
```

---

```
  PATTERN 1 — READ OFF FOCUS / DIRECTRIX / AXIS / LATUS RECTUM      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the focus / directrix / axis / latus rectum of ..."
            and the equation is already a clean standard form.
  METHOD    1. Make the coefficient of the squared term exactly 1
               (divide the whole equation if necessary).
            2. Which letter is squared?
                  y^2 -> horizontal axis (y = 0)
                  x^2 -> vertical axis   (x = 0)
            3. Sign on the other side: + opens right/up, - opens left/down.
            4. a = (the coefficient) / 4.
            5. Focus = a units INSIDE. Directrix = a units OUTSIDE.
               Latus rectum = 4a.
  TRAP      Reading 4a off "3y^2 = 8x" as 8. You must divide by 3 first.
            Also: the directrix is an EQUATION, the focus is a POINT.
```

```
  PATTERN 2 — ENDS OF THE LATUS RECTUM                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the ends of the latus rectum" / "the latus rectum meets
            the curve at ..."
  METHOD    1. Find a.
            2. The latus rectum is the line x = a (for y^2 = 4ax).
            3. Substitute x = a back into the equation: y = ±2a.
            4. Ends = ( a , 2a ) and ( a , -2a ).
            5. CHECK: their separation should be 4a.
  TRAP      Giving only one end. The question asks for BOTH.
```

```
  PATTERN 3 — EQUATION FROM VERTEX + FOCUS                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "vertex (h,k) and focus (p,q)"
  METHOD    1. Compare coordinates.
                 same x -> VERTICAL axis   -> ( x - h )^2 = ± 4a ( y - k )
                 same y -> HORIZONTAL axis -> ( y - k )^2 = ± 4a ( x - h )
            2. a = distance from the vertex to the focus.
            3. Sign: + if the focus is to the right of / above the vertex,
                     - if it is to the left of / below it.
  TRAP      Writing a as a signed number. a is ALWAYS positive; the
            direction is carried by the sign in front of 4a.
```

```
  PATTERN 4 — EQUATION FROM FOCUS + DIRECTRIX (axis parallel to an axis)
                                                                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "focus (p, q) and directrix x = d" (or y = d)
  METHOD    1. Drop a perpendicular from the focus to the directrix; its
               foot is Z.
            2. VERTEX = midpoint of the focus and Z.
            3. a = distance from the vertex to the focus.
            4. Write the shifted standard form.
  TRAP      Forgetting that the vertex is the MIDPOINT, not the focus.
```

```
  PATTERN 5 — EQUATION FROM FOCUS + SLANTED DIRECTRIX               4 marks
  ------------------------------------------------------------------------
  TRIGGER   The directrix is given as l x + m y + n = 0 with BOTH l and m
            non-zero, so the axis is slanted and no standard form applies.
  METHOD    1. Take P(x, y) on the curve. Use e = 1:   SP = PM.
            2. Square:
                                                ( l x + m y + n )^2
               ( x - x0 )^2 + ( y - y0 )^2  =  ---------------------
                                                     l^2 + m^2
            3. Multiply out both sides completely and collect.
            4. VERIFY with h^2 - ab = 0.
  TRAP      Losing a cross term when squaring (lx + my + n). There are
            THREE of them: 2lm xy , 2mn y , 2ln x.
```

```
  PATTERN 6 — REDUCE A GENERAL EQUATION AND LIST EVERY ELEMENT      7 marks
  ------------------------------------------------------------------------
  TRIGGER   An equation containing y^2 AND y (or x^2 AND x), asking for
            "vertex, focus, directrix, axis, latus rectum".
            THIS IS THE MOST-ASKED 7-MARK QUESTION IN THE CHAPTER.
  METHOD    1. All terms of the SQUARED variable on the left, everything
               else on the right.
            2. Coefficient of the square = 1.
            3. Complete the square:  y^2 + p y -> ( y + p/2 )^2 - (p/2)^2 .
               Add the SAME number to BOTH sides.
            4. Factor the right side into 4a ( x - h ) or -4a ( x - h ).
            5. Read h, k, 4a and write ALL FIVE elements from the table.
            6. If asked, find the ends of the latus rectum too.
            7. Draw a rough sketch.
  TRAP      (i)  Adding the completing number to only one side.
            (ii) Misreading the sign of h: -4x - 4 = -4( x + 1 ) means
                 h = -1.
            (iii) Stopping after the vertex. Each of the five elements
                 carries marks.
```

```
  PATTERN 7 — PARABOLA THROUGH GIVEN POINTS WITH A STATED AXIS      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "axis parallel to the x-axis (or y-axis) and passing through
            three points"
  METHOD    1. Axis parallel to x-axis  ->  x = A y^2 + B y + C
               Axis parallel to y-axis  ->  y = A x^2 + B x + C
            2. Substitute the three points -> three linear equations.
            3. Solve for A, B, C by elimination.
            4. Clear fractions and verify all three points.
  TRAP      Choosing the wrong template. "Axis parallel to the x-axis"
            means y is the SQUARED variable, so x is written in terms of y.
```

```
  PATTERN 8 — FOCAL DISTANCE OF A POINT                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "focal distance", "distance from the focus"
  METHOD    1. Find a.
            2. SP = x1 + a   (for y^2 = 4ax; use the table for other forms).
            3. If the focal distance is GIVEN, set x1 + a = d, solve for
               x1, then get y1 = ± sqrt( 4 a x1 ). TWO points.
  TRAP      Using the distance formula and wasting three minutes. Also:
            forgetting the ± and giving only one point.
```

```
  PATTERN 9 — LENGTH OF A DOUBLE ORDINATE                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "chord perpendicular to the axis at x = k", "double ordinate"
  METHOD    1. Put x = k into y^2 = 4ax : y = ± 2 sqrt( a k ).
            2. Length = 4 sqrt( a k ).
            3. Check: k = a gives 4a, the latus rectum.
  TRAP      Confusing a double ordinate with the latus rectum. Only the
            double ordinate THROUGH THE FOCUS is the latus rectum.
```

```
  PATTERN 10 — POSITION OF A POINT                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Does the point lie inside / outside?" , "How many tangents
            can be drawn from ...?"
  METHOD    1. Write S = y^2 - 4ax.
            2. S1 = y1^2 - 4a x1.
            3. S1 < 0 INSIDE , S1 = 0 ON , S1 > 0 OUTSIDE.
            4. Tangents: 2 if outside, 1 if on, 0 if inside.
  TRAP      Getting the sign convention backwards. Regenerate it: put in
            the focus (a, 0) -> S1 = -4a^2 < 0, and the focus is inside.
```

```
  PATTERN 11 — PARAMETER OF A POINT / POINT FROM A PARAMETER        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "the point t", "find the parameter of the point (...)"
  METHOD    Point from t :   ( a t^2 , 2 a t )
            t from a point:  t = y1 / ( 2 a )
            ALWAYS verify by substituting back.
  TRAP      Using t = x1/a. That gives t^2, not t, and loses the sign.
            Always use the y-coordinate.
```

```
  PATTERN 12 — CHORD JOINING t1 AND t2                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the chord joining the points t1 and t2"
  METHOD    1. ( t1 + t2 ) y = 2 x + 2 a t1 t2
            2. Or derive it: slope = 2/(t1+t2) through ( a t1^2 , 2 a t1 ).
            3. Verify both endpoints satisfy your line.
  TRAP      Writing 2a t1 t2 as 2a(t1 + t2). The SUM controls the y-side,
            the PRODUCT controls the constant.
```

```
  PATTERN 13 — FOCAL CHORD CONDITION AND THE OTHER END              2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   Any question with the words "focal chord".
  METHOD    1. Write t1 t2 = -1 immediately.
            2. If one end is given as a point, get t1 = y1/(2a) first.
            3. Other end: t2 = -1/t1 , point ( a t2^2 , 2 a t2 ).
            4. Verify the chord passes through ( a , 0 ).
  TRAP      Using t1 t2 = +1. Also: forgetting to convert the given POINT
            into a PARAMETER before applying the rule.
```

```
  PATTERN 14 — LENGTH OF A FOCAL CHORD                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "length of the focal chord through ...", "focal chord making
            an angle theta with the axis", "shortest focal chord"
  METHOD    Through the point t :     PQ = a ( t + 1/t )^2
            At an angle theta   :     PQ = 4 a cosec^2 ( theta )
            Shortest            :     4a , the latus rectum ( t = ±1 )
            Segments            :     SP = a(1 + t^2) , SQ = a(1 + 1/t^2)
                                      1/SP + 1/SQ = 1/a
  TRAP      Writing a(t^2 + 1/t^2) instead of a(t + 1/t)^2. The cross term
            2a is exactly what makes the minimum 4a and not 2a.
```

```
  PATTERN 15 — TANGENT AT A GIVEN POINT                             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the tangent at the point (x1, y1)" or "at t"
  METHOD    At (x1,y1):  y y1 = 2 a ( x + x1 )        [ T = 0 ]
            At t      :  t y = x + a t^2
            FIRST verify the point is on the curve ( S1 = 0 ).
  TRAP      Using T = 0 with a point that is NOT on the curve. Then you
            have written the chord of contact, not a tangent, and the
            question changes meaning.
```

```
  PATTERN 16 — TANGENT WITH A GIVEN SLOPE / TANGENCY CONDITION      2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the line touches ...", "find c so that it touches",
            "tangent parallel / perpendicular to the line ...",
            "tangent making an angle theta with the axis"
  METHOD    1. Get m:
                 parallel      -> same slope
                 perpendicular -> m = -1 / (slope of the given line)
                 angle theta   -> m = tan(theta)
            2. Condition:  c = a / m .   Tangent:  y = m x + a/m .
            3. Point of contact: ( a/m^2 , 2a/m ).
            4. For lx + my + n = 0 use   l n = a m^2   directly.
  TRAP      Applying c = a/m to a parabola of the form x^2 = 4ay. There
            the condition is c = -a m^2. Check which variable is squared
            BEFORE choosing the condition.
```

```
  PATTERN 17 — PROVE THE TANGENCY CONDITION c = a/m                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that y = mx + c touches y^2 = 4ax if c = a/m and find
            the point of contact."
  METHOD    1. Substitute y = mx + c into y^2 = 4ax.
            2. Collect: m^2 x^2 + (2mc - 4a) x + c^2 = 0.
            3. Tangency = equal roots = DISCRIMINANT ZERO.
            4. Expand: -16 a m c + 16 a^2 = 0  ->  c = a/m.
            5. Put c = a/m back: ( m x - a/m )^2 = 0 -> x = a/m^2,
               y = 2a/m.
            6. Verify (2a/m)^2 = 4a (a/m^2).
  TRAP      Forgetting to state WHY the discriminant is zero. The sentence
            "a tangent meets the curve in two coincident points" earns a
            mark on its own.
```

```
  PATTERN 18 — POINT OF INTERSECTION OF TWO TANGENTS                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The tangents at t1 and t2 meet at ...", or any locus question
            about where tangents cross.
  METHOD    1. Meeting point = ( a t1 t2 , a ( t1 + t2 ) ).
               x from the PRODUCT, y from the SUM.
            2. Translate the given condition into a condition on t1t2 or
               t1 + t2, then eliminate.
                  focal chord      t1t2 = -1  -> x = -a  (directrix)
                  right angle at
                  the vertex       t1t2 = -4  -> x = -4a
                  perpendicular
                  tangents         t1t2 = -1  -> x = -a
  TRAP      Trying to solve the two tangent equations from scratch every
            time. Memorise the meeting point; it saves four minutes.
```

```
  PATTERN 19 — NORMAL AT A GIVEN POINT OR PARAMETER                 2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the normal at (x1, y1)" / "at t"
  METHOD    Slope of the tangent = 2a / y1 , so slope of the normal
            = - y1 / ( 2a ) = -t.
            At (x1,y1):  y - y1 = -( y1 / 2a )( x - x1 )
            At t      :  y + t x = 2 a t + a t^3
            CHECK: (tangent slope)(normal slope) = -1.
  TRAP      Using +y1/(2a). The minus sign is the whole point of a normal.
```

```
  PATTERN 20 — NORMAL WITH A GIVEN SLOPE / FOOT OF THE NORMAL       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "normal parallel / perpendicular to ...", "normal of slope m",
            "find the foot of the normal"
  METHOD    1. Get m from the parallel/perpendicular condition.
            2. y = m x - 2 a m - a m^3.
            3. Foot = ( a m^2 , -2 a m ).
            4. Verify the foot lies on the parabola and on the line.
  TRAP      Confusing this with the TANGENT slope form y = mx + a/m.
            Memory hook: "tangent short, normal long."
```

```
  PATTERN 21 — NORMAL MEETS THE CURVE AGAIN                         4-7 marks
  ------------------------------------------------------------------------
  TRIGGER   "The normal at P meets the parabola again at Q. Find Q / prove
            that t2 = -t1 - 2/t1 / prove PQ subtends a right angle at ..."
  METHOD    1. Normal at t1 has slope -t1.
            2. Chord t1t2 has slope 2/(t1 + t2).
            3. Equate:  2/(t1+t2) = -t1  ->  t2 = -t1 - 2/t1.
            4. For the "right angle at the focus" version: the point where
               the ordinate equals the abscissa gives t1 = 2, so t2 = -3;
               the points are (4a, 4a) and (9a, -6a); the vectors from
               S(a, 0) are (3a, 4a) and (8a, -6a) with dot product 0.
            5. For "right angle at the VERTEX": t1t2 = -4 combined with
               step 3 gives t1^2 = 2.
  TRAP      Trying to solve the normal and the parabola simultaneously as
            a quadratic. It works but takes three times as long and the
            algebra is ugly.
```

```
  PATTERN 22 — NORMALS FROM AN EXTERNAL POINT / CONCURRENT NORMALS  4-7 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many normals can be drawn from (h,k)?" , "find the
            normals from ...", "if three normals are concurrent ..."
  METHOD    1. Put (h,k) into y = mx - 2am - am^3:
                    a m^3 + ( 2a - h ) m + k = 0
               (or in parameters: a t^3 + (2a - h) t - k = 0 )
            2. Solve the cubic (usually one small integer root, then
               factorise).
            3. Quote the root relations:
                    m1 + m2 + m3 = 0        t1 + t2 + t3 = 0
                    m1m2m3 = -k/a           t1t2t3 = k/a
            4. Three real distinct normals need h > 2a.
            5. Verify each normal passes through (h, k).
  TRAP      Forgetting that the cubic has no m^2 term, so the sum of the
            slopes is ZERO. That single fact answers most MCQs on this.
```

```
  PATTERN 23 — CHORD OF CONTACT                                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Tangents are drawn from P; find the chord of contact / the
            line joining the points of contact."
  METHOD    1. Check S1 > 0 (P must be OUTSIDE).
            2. Chord of contact:  T = 0 , i.e. y y1 = 2a ( x + x1 ).
            3. If the contact points are asked, solve T = 0 with the
               parabola.
  TRAP      Writing the same T = 0 and calling it a tangent. The name
            depends on where P is. Say which one you mean.
```

```
  PATTERN 24 — CHORD WITH A GIVEN MIDPOINT                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the chord whose midpoint is (x1, y1)" , "find the locus
            of midpoints of ..."
  METHOD    1. Check S1 < 0 (the midpoint must be INSIDE).
            2. T = S1 :  y y1 - 2a( x + x1 ) = y1^2 - 4a x1.
            3. For a LOCUS: impose the extra condition on that line (for
               example "passes through the focus" -> put x = a, y = 0),
               then replace (x1, y1) by (x, y).
            4. CHECK: solve your chord with the parabola and confirm that
               the mean of the two roots really is the given midpoint.
  TRAP      Using T = 0 instead of T = S1. T = 0 is the chord of contact,
            a completely different line.
```

```
  PATTERN 25 — PAIR OF TANGENTS FROM A POINT                        4-7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the pair of tangents from ..." ,
            "show that the tangents from ... are perpendicular"
  METHOD    1. Compute S , S1 , T.
            2. Combined equation:  S S1 = T^2.
            3. Expand and simplify to A x^2 + 2H xy + B y^2 + ... = 0.
            4. Perpendicular  <=>  A + B = 0.
               Real and distinct <=> H^2 - AB > 0.
            5. Cross-check by the slope method: x1 m^2 - y1 m + a = 0,
               so m1 + m2 = y1/x1 and m1 m2 = a/x1.
  TRAP      Sign errors when squaring T. Factor out any common number
            (e.g. T = 2(y - x + 1)) BEFORE squaring.
```

```
  PATTERN 26 — PERPENDICULAR TANGENTS / DIRECTRIX AS A LOCUS        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "locus of the point of intersection of perpendicular tangents",
            "show that the tangents at the ends of a focal chord are
             perpendicular and meet on the directrix"
  METHOD    1. Tangents at t1, t2 meet at ( a t1t2 , a(t1+t2) ).
            2. Slopes 1/t1 , 1/t2 ; perpendicular <=> t1 t2 = -1.
            3. Then x = -a : the DIRECTRIX.
            4. Say the sentence: "for a parabola the director circle
               degenerates into the directrix."
  TRAP      Answering "director circle x^2 + y^2 = ...". A parabola has no
            circular director locus.
```

```
  PATTERN 27 — PROVE A STANDARD PROPERTY                            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ...", "Prove that ..." about tangents, normals,
            feet of perpendiculars, circles on focal chords.
  METHOD    1. ALWAYS switch to parameters. ( a t^2 , 2 a t ) turns surds
               into polynomials.
            2. Write the tangent ( t y = x + a t^2 ) or normal
               ( y + t x = 2at + a t^3 ) at once.
            3. Use the meeting point ( a t1t2 , a(t1+t2) ) whenever two
               tangents are involved.
            4. Finish with a clear concluding sentence and "QED".
            The standard list:
               * foot of the perpendicular from S to any tangent lies on
                 x = 0 (the tangent at the vertex)
               * circle on a focal chord as diameter touches the directrix
               * circle on a focal radius as diameter touches x = 0
               * ST = SP, which proves the reflection property
               * area of the tangent triangle = half the inscribed triangle
  TRAP      Working in (x, y) instead of t. The algebra becomes
            unmanageable and you run out of time.
```

```
  PATTERN 28 — COMMON TANGENT TO A PARABOLA AND A CIRCLE            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the common tangent(s) to x^2 + y^2 = r^2 and y^2 = 4Ax"
  METHOD    1. Write the general tangent to the PARABOLA:
                    y = m x + A/m  ->  m x - y + A/m = 0.
            2. Impose tangency to the CIRCLE: perpendicular distance from
               the centre = radius.
            3. Square, clear denominators, get a quartic in m that
               factorises as ( m^2 + p )( m^2 - q ) = 0.
            4. Reject negative m^2. Write both tangents.
            5. Verify by finding the contact point on the parabola.
  TRAP      Starting from the circle's tangent instead. The parabola's
            tangent has one parameter and is far simpler.
```

```
  PATTERN 29 — CLASSIFY A GENERAL SECOND DEGREE EQUATION            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does the equation represent?" , "Show that ... is a
            parabola."
  METHOD    1. Match a, h, b, g, f, c   ( remember 2h, 2g, 2f ).
            2. Compute h^2 - ab.
                  < 0 ellipse , = 0 parabola , > 0 hyperbola
            3. Compute Delta = abc + 2fgh - af^2 - bg^2 - ch^2.
               Delta = 0 means DEGENERATE, so the naming in step 2 fails.
            4. State BOTH conditions in your conclusion.
  TRAP      Halving wrongly: in 4xy the value of h is 2, not 4.
            And skipping the Delta check, which loses a mark every time.
```

```
  PATTERN 30 — REFLECTION PROPERTY AND WORD PROBLEMS                2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the reflection property" , dish antennas, headlights,
            solar cookers, parabolic arches, suspension cables.
  METHOD    STATEMENT (say BOTH halves):
               * a ray parallel to the axis reflects THROUGH the focus
               * a ray from the focus reflects PARALLEL to the axis
            REASON: the tangent at t cuts the axis at ( -a t^2 , 0 ), so
               ST = a(1 + t^2) = SP; triangle STP is isosceles, so the
               tangent makes equal angles with SP and with the axis.
            WORD PROBLEM:
               1. Vertex at the origin, axis along a coordinate axis.
               2. Half the width and the depth give one rim point.
               3. Substitute into x^2 = 4ay (or y^2 = 4ax) to find 4a.
               4. The receiver / bulb goes a units from the vertex.
  TRAP      Using the FULL width instead of the half-width as the
            x-coordinate of the rim point. That quadruples the answer.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column.

| Question stem | Pattern |
|---|---|
| "Find the focus and directrix of y^2 = -20x" | 1 |
| "Find the ends of the latus rectum of y^2 = 12x" | 2 |
| "Vertex (1, 2), focus (1, 5). Find the equation." | 3 |
| "Focus (4, 0), directrix x = -4" | 4 |
| "Focus (-2, 3), directrix 2x + 3y - 4 = 0" | 5 |
| "Find the vertex, focus, directrix and axis of y^2 - x + 4y + 5 = 0" | **6** |
| "Axis parallel to the x-axis, passing through three points" | 7 |
| "Find the point on y^2 = 8x whose focal distance is 10" | 8 |
| "Length of the chord perpendicular to the axis at x = 9" | 9 |
| "Does (2, 3) lie inside or outside y^2 = 4x?" | 10 |
| "Find the parameter of the point (4, -4)" | 11 |
| "Find the chord joining t = 1 and t = 3" | 12 |
| "One end of a focal chord is (8, 8). Find the other end." | 13 |
| "Length of the focal chord making 60 degrees with the axis" | 14 |
| "Find the tangent to y^2 = 12x at (3, 6)" | 15 |
| "Show that 2x - y + 2 = 0 touches y^2 = 16x" | 16 |
| "Prove that y = mx + c touches y^2 = 4ax if c = a/m" | **17** |
| "The tangents at t1 and t2 meet at ..." | 18 |
| "Find the normal to y^2 = 8x at t = 2" | 19 |
| "Find the normal to y^2 = 4x parallel to y = 2x + 5" | 20 |
| "The normal at P meets the curve again at Q" | 21 |
| "How many normals can be drawn from (9, 6)?" | 22 |
| "Find the chord of contact from (2, 3)" | 23 |
| "Find the chord whose midpoint is (2, 5)" | 24 |
| "Find the pair of tangents from (-1, 2)" | 25 |
| "Locus of the intersection of perpendicular tangents" | 26 |
| "Show that the foot of the perpendicular from S lies on x = 0" | 27 |
| "Common tangent to x^2 + y^2 = 2a^2 and y^2 = 8ax" | 28 |
| "Show that 9x^2 - 12xy + 4y^2 + ... = 0 is a parabola" | 29 |
| "A dish antenna is 8 m wide and 2 m deep. Where is the receiver?" | 30 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +==========================================================================+
  |                                                                          |
  |  TIER 1 — LEARN THESE FIRST. They are almost impossible to get wrong.   |
  |                                                                          |
  |    Pattern 1   read the standard form            2 marks                |
  |    Pattern 2   ends of the latus rectum          2 marks                |
  |    Pattern 3   equation from vertex + focus      2 marks                |
  |    Pattern 8   focal distance                    2 marks                |
  |    Pattern 10  position of a point               2 marks                |
  |    Pattern 11  parameter of a point              2 marks                |
  |                                                                          |
  |    -> Section A is now safe. About 2-4 marks banked with 90 minutes     |
  |       of study.                                                          |
  |                                                                          |
  +==========================================================================+

  +==========================================================================+
  |                                                                          |
  |  TIER 2 — THE 4-MARK ENGINE ROOM.                                        |
  |                                                                          |
  |    Pattern 15  tangent at a point                                        |
  |    Pattern 16  tangency condition c = a/m                                |
  |    Pattern 19  normal at a point                                         |
  |    Pattern 20  normal with a given slope                                 |
  |    Pattern 13  focal chord, other end                                    |
  |    Pattern 14  length of a focal chord                                   |
  |                                                                          |
  |    -> One Section B question is now safe. +4 marks.                     |
  |                                                                          |
  +==========================================================================+

  +==========================================================================+
  |                                                                          |
  |  TIER 3 — THE 7-MARK QUESTION. Pick ONE and make it perfect.            |
  |                                                                          |
  |    BEST CHOICE:  Pattern 6  (reduce a general equation and list every   |
  |                  element). It is the most frequently set, it is pure    |
  |                  procedure, and it needs no proof-writing skill.        |
  |                                                                          |
  |    SECOND:       Pattern 17 (prove c = a/m) or the derivation of        |
  |                  y^2 = 4ax. Both are fixed scripts you can rehearse.    |
  |                                                                          |
  |    THIRD:        Pattern 21 / 27 (a property proof) if you are          |
  |                  comfortable with parameters.                            |
  |                                                                          |
  |    -> +7 marks.                                                          |
  |                                                                          |
  +==========================================================================+

  +--------------------------------------------------------------------------+
  |  REALISTIC TOTAL FROM THIS CHAPTER ALONE:  2 + 4 + 7  =  13 marks       |
  |  out of 75, from about six hours of focused work.                       |
  |                                                                          |
  |  Add Circle (Ch 1) and you are already close to half a pass on the      |
  |  conics block alone.                                                     |
  +--------------------------------------------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  THE FIVE SENTENCES TO WRITE AT THE TOP OF YOUR ROUGH WORK               |
  |  IN EVERY PARABOLA QUESTION                                              |
  |                                                                          |
  |    1.  Coefficient of the square = 1, then 4a = ... , a = ...            |
  |    2.  Vertex ... Focus ... Directrix ... Axis ... LR = 4a               |
  |    3.  Point t = ( a t^2 , 2 a t ) ,  t = y1 / 2a                        |
  |    4.  Tangent y = mx + a/m  ;  Normal y = mx - 2am - am^3               |
  |    5.  S1 = y1^2 - 4a x1  ;  T = y y1 - 2a( x + x1 )                     |
  |                                                                          |
  |  Those five lines cost 60 seconds and unlock every question in the       |
  |  chapter.                                                                |
  +--------------------------------------------------------------------------+
```
