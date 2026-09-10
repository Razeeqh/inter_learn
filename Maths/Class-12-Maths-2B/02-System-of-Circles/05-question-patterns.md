# System of Circles — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Almost every pattern below is powered by these:

```
  S1 = x^2 + y^2 + 2 g1 x + 2 f1 y + c1    C1 = (-g1,-f1)  r1 = sqrt(g1^2+f1^2-c1)
  S2 = x^2 + y^2 + 2 g2 x + 2 f2 y + c2    C2 = (-g2,-f2)  r2 = sqrt(g2^2+f2^2-c2)
  d  = C1C2

  ORTHOGONAL     2 g1 g2 + 2 f1 f2 = c1 + c2         d^2 = r1^2 + r2^2
  RADICAL AXIS   S1 - S2 = 0
  ANGLE          cos(theta) = (d^2 - r1^2 - r2^2)/(2 r1 r2)
  CHORD LENGTH   L = 2 sqrt(r^2 - p^2)
  FAMILY         S1 + k S2 = 0    ,    S + k L = 0
```

---

```
  PATTERN 0 — THE UNIVERSAL OPENING MOVE                    (every question)
  ------------------------------------------------------------------------
  TRIGGER   Two circles appear anywhere in the question.
  METHOD    1. Divide each circle so that x^2 and y^2 have coefficient 1.
            2. Write g1, f1, c1 and g2, f2, c2 in a small table.
            3. Write C1, r1, C2, r2 and d.
            4. NOW read the question again.
  TRAP      Skipping step 1. If the circle starts with 2x^2 or 3x^2 and you
            read off g, f, c anyway, every single number after that is wrong
            and you score zero even though the method was right.
```

```
  PATTERN 1 — ANGLE BETWEEN TWO CIRCLES                          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the circles ..."
  METHOD    1. r1, r2, d^2.
            2. cos(theta) = (d^2 - r1^2 - r2^2) / (2 r1 r2)
            3. Read off theta. Expect 30, 45, 60 or 90 degrees.
            4. If cos(theta) is negative, also state the acute angle
               180 - theta and give that as the answer.
  TRAP      |cos(theta)| must be <= 1. If it is bigger, the circles do not
            intersect at all and there is no angle - say so.
            Also: some textbooks print the formula with every sign flipped
            (r1^2 + r2^2 - d^2 on top). That gives the SUPPLEMENT. Quote the
            ACUTE angle and you are safe either way.
```

```
  PATTERN 2 — SHOW TWO CIRCLES ARE ORTHOGONAL                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the circles ... cut each other orthogonally"
            "... intersect at right angles"
  METHOD    1. Divide if needed. Read off g1,f1,c1 and g2,f2,c2.
            2. LHS = 2 g1 g2 + 2 f1 f2
               RHS = c1 + c2
            3. Show LHS = RHS and WRITE THE SENTENCE "hence the circles cut
               orthogonally".
  TRAP      Writing g1g2 + f1f2 = c1 + c2 without the twos.
            Also: the conclusion sentence carries a mark. Write it.
```

```
  PATTERN 3 — FIND k SO THAT TWO CIRCLES ARE ORTHOGONAL               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find k if the circles ... are orthogonal"
  METHOD    1. Put k into c2 (or wherever it sits).
            2. 2 g1 g2 + 2 f1 f2 = c1 + c2 , solve for k.
            3. CHECK by putting k back and confirming d^2 = r1^2 + r2^2.
  TRAP      If k appears in g or f as well, the equation becomes QUADRATIC.
            Then there are TWO answers - write both.
```

```
  PATTERN 4 — ORTHOGONALITY WITH A SCALED CIRCLE                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   One circle is given as 2x^2 + 2y^2 + ... or 3x^2 + 3y^2 + ...
  METHOD    1. DIVIDE THAT CIRCLE by 2 (or 3) BEFORE anything else.
            2. Then g = (coefficient of x)/2 , f = (coefficient of y)/2.
            3. Apply 2 g1 g2 + 2 f1 f2 = c1 + c2.
  TRAP      3x^2 + 3y^2 - 8x + 29y = 0 becomes x^2+y^2-(8/3)x+(29/3)y = 0,
            so g = -4/3 and f = 29/6 - you divide TWICE (once by 3, once
            by 2). Students forget the second division.
```

```
  PATTERN 5 — DISTANCE BETWEEN CENTRES OF ORTHOGONAL CIRCLES         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two circles of radii r1 and r2 cut orthogonally. Find d."
  METHOD    d = sqrt(r1^2 + r2^2). That is the whole question.
  TRAP      Writing d = r1 + r2. That is TOUCHING, not orthogonal.
```

```
  PATTERN 6 — EQUATION OF THE RADICAL AXIS                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the radical axis of ..."
  METHOD    1. Make both circles start with x^2 + y^2.
            2. Write S1 - S2 = 0 and simplify to a straight line.
            3. Divide out any common factor.
  TRAP      Sign errors when removing the second bracket. EVERY term inside
            it changes sign. Write the subtraction on its own line.
```

```
  PATTERN 7 — EQUATION OF THE COMMON CHORD                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the common chord of ..."
  METHOD    Exactly the same as Pattern 6: S1 - S2 = 0.
  TRAP      Only call it a "common chord" if the circles really intersect.
            Check |r1-r2| < d < r1+r2 first if the question says "show".
            If they only touch, it is the common TANGENT at the contact
            point. If they do not meet, it is only the radical axis.
```

```
  PATTERN 8 — RADICAL AXIS PERPENDICULAR TO THE LINE OF CENTRES      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the radical axis is perpendicular to the line
            joining the centres"
  METHOD    1. Find the radical axis S1 - S2 = 0.
            2. slope m1 = -(g1 - g2)/(f1 - f2)
            3. slope of C1C2:  m2 = (f1 - f2)/(g1 - g2)
            4. Show m1 m2 = -1 and state the conclusion.
  TRAP      If the radical axis is VERTICAL (no y term) the slope is
            undefined. Then say: the axis is vertical and C1C2 is
            horizontal, so they are perpendicular. Do not divide by zero.
```

```
  PATTERN 9 — LENGTH OF THE COMMON CHORD                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the length of the common chord of ..."
  METHOD    1. Common chord: S1 - S2 = 0.
            2. C1 and r1 for the FIRST circle.
            3. p1 = perpendicular distance from C1 to that chord.
            4. L = 2 sqrt(r1^2 - p1^2).
            5. CHECK with C2, r2, p2 - it must give the same L.
  TRAP      Using d (distance between centres) instead of p (distance from
            a centre to the chord). They are completely different numbers.
            If r1^2 - p1^2 comes out negative, the circles do not intersect
            and there is no common chord.
```

```
  PATTERN 10 — COMMON CHORD AS A DIAMETER / MAXIMUM LENGTH           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the common chord is a diameter of the first circle"
            "Find the maximum length of the common chord"
            "Find k so that the common chord has maximum length"
  METHOD    1. Common chord: S1 - S2 = 0.
            2. Substitute C1 = (-g1, -f1) into it. If it gives 0, the chord
               passes through C1, so it IS a diameter and L = 2 r1.
            3. For "find k so it is a diameter", set that substitution = 0
               and solve.
            4. The distance version of the condition: d^2 = r2^2 - r1^2.
  TRAP      The maximum length is 2 x the SMALLER radius, not the larger.
            A chord cannot be longer than its own circle's diameter.
```

```
  PATTERN 11 — COMMON CHORD THROUGH A GIVEN POINT                    2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find k if the common chord passes through (a, b)"
  METHOD    1. Write S1 - S2 = 0, keeping k in it.
            2. Substitute (a, b).
            3. Solve for k.
  TRAP      Substitute into the CHORD, not into either circle.
```

```
  PATTERN 12 — RADICAL CENTRE OF THREE CIRCLES                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the radical centre of the circles ..."
            "Find the point from which the tangents to three circles are
             equal in length"
  METHOD    1. Divide every circle so it starts with x^2 + y^2.
            2. Write TWO radical axes: S1 - S2 = 0 and S1 - S3 = 0.
            3. Solve them as simultaneous linear equations.
            4. CHECK with S2 - S3 = 0, or check S1 = S2 = S3 at the point.
  TRAP      Using all three radical axes and getting confused. Two lines are
            enough to fix one point; the third is only a check.
            Also: if the three centres are COLLINEAR there is no radical
            centre (the three axes are parallel).
```

```
  PATTERN 13 — CIRCLE ORTHOGONAL TO THREE GIVEN CIRCLES              7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle which cuts the following three circles
            orthogonally"
  METHOD    ROUTE A (algebra, always works)
            1. Let the circle be x^2 + y^2 + 2gx + 2fy + c = 0.
            2. Write 2 g g' + 2 f f' = c + c' for EACH of the three.
            3. Subtract pairs to remove c, solve for g and f, then c.
            4. Write the circle. CHECK in the equation you did NOT use.

            ROUTE B (faster, same marks)
            1. Centre = the RADICAL CENTRE of the three circles.
            2. Radius^2 = S1 evaluated at that point (the tangent length
               squared - it is the same for all three).
            3. Write (x - a)^2 + (y - b)^2 = that value, expand.
  TRAP      Forgetting that the three orthogonality equations are LINEAR in
            g, f, c - students try to square things. Also, if the tangent
            length squared is NEGATIVE, no real orthogonal circle exists.
```

```
  PATTERN 14 — CIRCLE ORTHOGONAL TO TWO CIRCLES + ONE MORE CONDITION 4-7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle orthogonal to ... and ... which passes through
            the origin / through (a,b) / has centre on a given line"
  METHOD    1. Let it be x^2 + y^2 + 2gx + 2fy + c = 0 (3 unknowns).
            2. Two orthogonality equations (linear in g, f, c).
            3. Turn the third condition into an equation:
                  through origin   ->  c = 0
                  through (a,b)    ->  a^2+b^2+2ga+2fb+c = 0
                  centre on line   ->  put (-g, -f) into that line
                  touches x-axis   ->  g^2 = c
            4. Solve the three equations. CHECK all three at the end.
  TRAP      Not checking that g^2 + f^2 - c > 0 at the end. If it is
            negative your "circle" is imaginary and something went wrong.
```

```
  PATTERN 15 — CIRCLE WITH A GIVEN CENTRE, ORTHOGONAL TO A CIRCLE    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle with centre (a, b) that cuts ... orthogonally"
  METHOD    1. Centre (a, b) gives g = -a and f = -b immediately.
            2. Only c is unknown. Use 2 g g' + 2 f f' = c + c'.
            3. Solve for c and write the circle.
  TRAP      Sign flip: centre (2, 3) means g = -2 and f = -3, not 2 and 3.
```

```
  PATTERN 16 — POSITION OF TWO CIRCLES / NUMBER OF COMMON TANGENTS   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many common tangents ...", "Show the circles intersect /
            touch / lie apart", "State the position of the two circles"
  METHOD    1. r1, r2, d.
            2. Compare with BOTH r1 + r2 AND |r1 - r2| :
                  d > r1+r2            apart              4 tangents
                  d = r1+r2            touch externally   3 tangents
                  |r1-r2| < d < r1+r2  cut at 2 points    2 tangents
                  d = |r1-r2|          touch internally   1 tangent
                  d < |r1-r2|          one inside other   0 tangents
            3. State BOTH the position in words AND the tangent count.
  TRAP      Doing only one comparison. d < r1 + r2 alone does not tell you
            whether they cut or one is inside the other.
```

```
  PATTERN 17 — SHOW TWO CIRCLES TOUCH; FIND THE POINT OF CONTACT     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the circles touch each other and find the point of
            contact"
  METHOD    1. r1, r2, d.
            2. d = r1 + r2  -> externally ; d = |r1 - r2| -> internally.
            3. POINT OF CONTACT:
                  external touch -> divide C1C2 INTERNALLY in r1 : r2
                  internal touch -> divide C1C2 EXTERNALLY in r1 : r2
            4. CHECK by substituting the point into both circles (get 0).
  TRAP      Getting the internal/external division backwards. Memory hook:
            external TOUCH -> internal DIVISION (they swap).
            Alternative safe route: solve S1 - S2 = 0 together with the
            line C1C2 - that intersection is the point of contact.
```

```
  PATTERN 18 — COMMON TANGENT AT THE POINT OF CONTACT                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the common tangent at the point where
            the circles touch"
  METHOD    It is just S1 - S2 = 0. Nothing else.
            CHECK: the distance from C1 to it must equal r1, and the
            distance from C2 must equal r2.
  TRAP      Trying to use the tangent formula T = 0 at the contact point.
            It works but takes five times as long.
```

```
  PATTERN 19 — LENGTHS OF THE COMMON TANGENTS                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the length of the direct / external common tangent"
            "Find the length of the transverse / internal common tangent"
  METHOD    1. r1, r2, d.
            2. DIRECT      L1 = sqrt( d^2 - (r1 - r2)^2 )
               TRANSVERSE  L2 = sqrt( d^2 - (r1 + r2)^2 )
            3. Sanity check: L1 must be bigger than L2.
  TRAP      Swapping the plus and the minus. Also, L2 does not exist unless
            d >= r1 + r2 (the circles must lie apart or touch externally) -
            a negative under the root means "no transverse tangent".
```

```
  PATTERN 20 — CENTRES OF SIMILITUDE                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the internal / external centre of similitude of ..."
  METHOD    1. C1, r1, C2, r2.
            2. INTERNAL: divide C1C2 internally in r1 : r2
               EXTERNAL: divide C1C2 externally in r1 : r2
  TRAP      If r1 = r2 the external centre does not exist (the denominator
            r1 - r2 is zero) - the direct tangents are parallel to C1C2.
            Say that instead of dividing by zero.
```

```
  PATTERN 21 — EQUATIONS OF THE DIRECT COMMON TANGENTS               7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equations of the direct (external) common tangents"
  METHOD    1. C1, r1, C2, r2, d. State that the tangents exist.
            2. Find E, the EXTERNAL centre of similitude (divide C1C2
               externally in r1 : r2).
            3. Line through E:  y - y0 = m(x - x0)
                            ->  m x - y + (y0 - m x0) = 0
            4. Set the perpendicular distance from the SMALLER circle's
               centre equal to its radius.
            5. Square -> quadratic in m -> two values of m.
            6. Write both lines.
            7. CHECK the distance from the other centre equals its radius.
            8. Test x = x0 separately in case a tangent is vertical.
  TRAP      Using the bigger circle in step 4 - the numbers get ugly.
            Also forgetting the vertical case in step 8.
```

```
  PATTERN 22 — EQUATIONS OF THE TRANSVERSE COMMON TANGENTS           7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equations of the transverse (internal) common tangents"
  METHOD    Identical to Pattern 21, but through the INTERNAL centre of
            similitude I (divide C1C2 internally in r1 : r2).
  TRAP      Transverse tangents only exist if d > r1 + r2. If the circles
            intersect, say "no transverse common tangent exists" - do not
            grind out a quadratic that has no real roots.
```

```
  PATTERN 23 — ALL THE COMMON TANGENTS WHEN THE CIRCLES TOUCH        7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find all the common tangents to the circles ..." and you find
            d = r1 + r2 (or d = |r1 - r2|)
  METHOD    1. Show d = r1 + r2 -> 3 tangents (or d = |r1-r2| -> 1 tangent).
            2. The tangent AT THE CONTACT POINT is S1 - S2 = 0. Free marks.
            3. The two direct tangents: use Pattern 21 through E.
            4. Present all three together at the end.
  TRAP      Stopping after the direct pair and forgetting the radical axis
            one - that is a whole mark, and it is the easiest of the three.
```

```
  PATTERN 24 — FAMILY: CIRCLE THROUGH AN INTERSECTION AND A POINT    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle passing through the points of intersection of
            ... and ... and through the point (a, b)"
  METHOD    1. Family: S1 + k S2 = 0.
            2. Evaluate S1 and S2 SEPARATELY at (a, b) - do not expand the
               family first.
            3. S1(a,b) + k S2(a,b) = 0  ->  solve for k.
            4. Substitute k, clear fractions, divide by the common factor.
            5. CHECK the point satisfies your final circle.
  TRAP      Expanding the whole family before substituting. It works but
            takes four times as long and invites sign errors.
            Also: if S2(a,b) = 0 the point is already on circle 2 and the
            method breaks - use S2 + k S1 = 0 instead.
```

```
  PATTERN 25 — FAMILY WITH A GIVEN RADIUS                            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "... passing through the intersection of the two circles and
            having radius R"
  METHOD    1. Family S1 + k S2 = 0. Divide by (1 + k).
            2. g = (g1 + k g2)/(1+k) , f = (f1 + k f2)/(1+k) ,
               c = (c1 + k c2)/(1+k).
            3. Set g^2 + f^2 - c = R^2.
            4. Multiply by (1+k)^2, tidy into a quadratic in k, solve.
            5. Substitute EACH k back. Write BOTH circles.
            6. CHECK each radius really equals R.
  TRAP      Only giving one of the two circles. Also, forgetting to divide
            by (1 + k) before reading off g, f and c.
```

```
  PATTERN 26 — FAMILY WITH THE CENTRE ON A GIVEN LINE OR AXIS        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "... whose centre lies on the line ax + by + c = 0"
            "... whose centre lies on the x-axis / y-axis"
  METHOD    1. Family S1 + k S2 = 0 (or S + k L = 0).
            2. Write the centre in terms of k.
            3. Centre on the x-axis  -> the f-part = 0.
               Centre on the y-axis  -> the g-part = 0.
               Centre on a line      -> substitute the centre into the line.
            4. Solve the LINEAR equation for k and substitute back.
  TRAP      This condition is linear in k, so there is exactly ONE answer.
            If you get a quadratic, you have made an algebra slip.
```

```
  PATTERN 27 — FAMILY THROUGH A CIRCLE AND A LINE (S + k L = 0)      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle passing through the intersection of the circle
            ... and the line ... and ( some extra condition )"
  METHOD    1. Family:  S + k L = 0.
            2. The x^2, y^2 coefficients stay 1, so g, f, c are easy to read.
            3. Apply the extra condition, solve for k, substitute back.
            4. CHECK by finding the two intersection points of S and L and
               substituting them into your answer.
  TRAP      Multiplying L by something first and forgetting that k absorbs
            any constant factor. Keep L exactly as written.
```

```
  PATTERN 28 — CIRCLE WHOSE DIAMETER IS THE COMMON CHORD             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the circle whose diameter is the common chord of ..."
  METHOD    1. Find the common chord L: S1 - S2 = 0.
            2. Family through the same two points: S1 + (lambda) L = 0.
            3. "Diameter" means the CENTRE of the new circle lies ON L.
               Substitute the family's centre into L and solve for lambda.
            4. Substitute back.
            5. CHECK: the centre satisfies L and the radius is real.
  TRAP      Confusing this with "the circle on the segment joining the two
            centres as diameter". Read the words carefully.
```

```
  PATTERN 29 — DERIVATION / THEORY LONG ANSWER                       7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define ... and derive ...", "Prove that the radical axis is
            perpendicular to ...", "Prove that the three radical axes are
            concurrent"
  METHOD    Learn these four short proofs word for word:
            1. ANGLE:      triangle C1 P C2 has sides r1, r2, d; the
                           tangents are perpendicular to the radii, so the
                           angle between the tangents comes from the cosine
                           rule -> cos(theta) = (d^2-r1^2-r2^2)/(2 r1 r2).
            2. ORTHOGONAL: theta = 90 -> numerator zero ->
                           2 g1 g2 + 2 f1 f2 = c1 + c2 ; equivalently
                           Pythagoras d^2 = r1^2 + r2^2.
            3. RADICAL AXIS: equal tangent lengths -> sqrt(S1) = sqrt(S2)
                           -> S1 = S2 -> squares cancel -> S1 - S2 = 0.
                           Slopes multiply to -1 -> perpendicular to C1C2.
            4. CONCURRENCY: at the meeting point of two radical axes the
                           tangent lengths to all three circles are equal,
                           so it lies on the third axis too.
  TRAP      Writing only the formula. The marks are in the DEFINITION
            sentence and the labelled DIAGRAM. Draw the triangle.
```

```
  PATTERN 30 — MIXED "SHOW AND FIND" LONG ANSWER                     7 marks
  ------------------------------------------------------------------------
  TRIGGER   A question with several parts: "Show that the circles ... cut
            orthogonally. Find their common chord and its length."
  METHOD    1. Pattern 0 first: r1, r2, d in a box.
            2. Orthogonality: 2 g1 g2 + 2 f1 f2 = c1 + c2.
            3. Common chord: S1 - S2 = 0.
            4. Length: L = 2 sqrt(r1^2 - p1^2).
            5. Cross-check the length with the second circle.
  TRAP      Running out of time because you did not write down r1, r2, d at
            the start and had to recompute them for each part.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "Find the angle between the circles ..." | 1 |
| "Show that the circles cut each other orthogonally" | 2 |
| "Find k if the circles are orthogonal" | 3 |
| "Show that 3x^2 + 3y^2 - 8x + 29y = 0 and ... are orthogonal" | 4 |
| "Two circles of radii 5 and 12 cut orthogonally. Find d." | 5 |
| "Find the radical axis of ..." | 6 |
| "Find the equation of the common chord" | 7 |
| "Prove the radical axis is perpendicular to the line of centres" | 8 |
| "Find the length of the common chord" | 9 |
| "Show that the common chord is a diameter of the first circle" | 10 |
| "Find k if the common chord passes through (1, 1)" | 11 |
| "Find the radical centre of the three circles" | 12 |
| "Find the circle which cuts the three circles orthogonally" | 13 |
| "Find the circle orthogonal to two circles and through the origin" | 14 |
| "Find the circle with centre (2,3) cutting ... orthogonally" | 15 |
| "How many common tangents can be drawn?" | 16 |
| "Show the circles touch and find the point of contact" | 17 |
| "Find the common tangent at the point of contact" | 18 |
| "Find the length of the transverse common tangent" | 19 |
| "Find the external centre of similitude" | 20 |
| "Find the equations of the direct common tangents" | 21 |
| "Find the equations of the transverse common tangents" | 22 |
| "Find all the common tangents to the two circles" | 23 |
| "Find the circle through the intersection of ... and through (1, 2)" | 24 |
| "... through the intersection of the two circles, of radius 4" | 25 |
| "... whose centre lies on the x-axis" | 26 |
| "... through the intersection of the circle and the line x + y = 3" | 27 |
| "Find the circle whose diameter is the common chord" | 28 |
| "Define the radical axis and derive its equation" | 29 |
| "Show ... orthogonal, then find the common chord and its length" | 30 |
| "Find the maximum length of the common chord" | 10 |
| "One circle lies inside the other. How many tangents?" | 16 |
| "Find the point from which tangents to three circles are equal" | 12 |

If you can name 25 of these in five seconds each, you have finished this chapter.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   TIER 1 - LEARN THESE FIRST. THEY TAKE ONE EVENING AND ARE      |
  |            WORTH ABOUT 6 MARKS IN SECTION A EVERY YEAR.          |
  |                                                                  |
  |     Pattern 2 / 3   orthogonality: show it, or find k            |
  |     Pattern 6 / 7   radical axis and common chord (S1 - S2 = 0)  |
  |     Pattern 16      position and number of common tangents       |
  |     Pattern 1       angle between two circles                    |
  |                                                                  |
  |   Every one of these is under six lines of work.                 |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |   TIER 2 - THE 4-MARK WORKHORSES. SECOND EVENING.               |
  |                                                                  |
  |     Pattern 9       length of the common chord                   |
  |     Pattern 12      radical centre                               |
  |     Pattern 17      circles touch, point of contact              |
  |     Pattern 19      lengths of the common tangents               |
  |     Pattern 24 / 26 / 27  the family with an easy condition      |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |   TIER 3 - THE 7-MARK QUESTIONS. THIRD EVENING.                 |
  |                                                                  |
  |     Pattern 13      circle orthogonal to three circles  <-- do   |
  |                     this one first, it is the most common and    |
  |                     the shortest of the three                    |
  |     Pattern 25      family with a given radius                   |
  |     Pattern 21 / 22 equations of the common tangents             |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  IF YOU ARE SHORT OF TIME, THIS IS THE MINIMUM THAT STILL PAYS

     1.  S1 - S2 = 0                      (radical axis / common chord)
     2.  2 g1 g2 + 2 f1 f2 = c1 + c2      (orthogonal)
     3.  d vs r1+r2 and |r1-r2|           (4/3/2/1/0 tangents)
     4.  Pattern 13 by the radical-centre route (7 marks, six lines)

     Those four alone are about 10 of the 75 marks in Maths IIB.
```

```
  IN THE EXAM HALL, IN THIS ORDER

     STEP 1  Read every Section A question. Do the two-circle ones FIRST -
             they are the fastest marks in the paper.
     STEP 2  In Section B, choose the common chord / radical centre one.
     STEP 3  In Section C, look for "orthogonal to three circles" before
             anything else. If it is there, take it.
     STEP 4  Never leave a two-circle question blank. Even writing
             r1, r2 and d correctly earns a method mark.
```
