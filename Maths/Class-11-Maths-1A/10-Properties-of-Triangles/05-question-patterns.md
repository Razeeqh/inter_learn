# Properties of Triangles — Every Question Pattern That Can Be Asked

**Maths 1A · Chapter 10**

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — FIND AN ANGLE FROM THREE SIDES                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   Three numbers given for a, b, c. "Find cos A" / "find angle C".
  METHOD    1. cos A = (b^2 + c^2 - a^2)/(2bc).
            2. The subtracted square is the one whose CAPITAL you want.
            3. The denominator is 2 x (the other two sides).
  TRAP      Subtracting the wrong square. The letter you want on the LEFT
            is the letter that is subtracted on the TOP.
            A negative answer is fine — it means an obtuse angle.
```

```
  PATTERN 2 — FIND THE THIRD SIDE FROM TWO SIDES AND THE ANGLE    2 marks
  BETWEEN THEM
  ------------------------------------------------------------------------
  TRIGGER   "b = 8, c = 3, A = 60. Find a."
  METHOD    a^2 = b^2 + c^2 - 2bc cos A , then take the square root.
  TRAP      Forgetting the square root. Also, the angle must be the one
            BETWEEN the two given sides — otherwise this is Pattern 20.
```

```
  PATTERN 3 — SINE RULE, MATCHED PAIR                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   You are given a side AND the angle facing it, plus one more item.
  METHOD    a/sinA = b/sinB = c/sinC = 2R.
            Write the two ratios you need and cross-multiply.
  TRAP      Trying to use the sine rule when there is NO matched pair.
            If the given angle sits BETWEEN the two given sides, use the
            cosine rule instead.
```

```
  PATTERN 4 — RATIO QUESTIONS                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "sinA : sinB : sinC = 3 : 5 : 7" or "angles are in the ratio 1:2:3".
  METHOD    1. sinA : sinB : sinC IS a : b : c. Swap it instantly.
            2. Set a = 3k, b = 5k, c = 7k. The k always cancels.
            3. For angles in ratio, first find the actual angles (sum = 180),
               then use sines.
  TRAP      Writing a : b : c = 1 : 2 : 3 when the ANGLES are 1 : 2 : 3.
            Angles 1:2:3 gives sides 1 : sqrt3 : 2.
```

```
  PATTERN 5 — FIND s, delta, R, r FROM THREE SIDES                2 marks
  ------------------------------------------------------------------------
  TRIGGER   Three side lengths and the words area / circumradius / inradius.
  METHOD    1. s = (a+b+c)/2                       ALWAYS the first line.
            2. delta = sqrt(s(s-a)(s-b)(s-c))
            3. R = abc/(4 delta)
            4. r = delta/s
  TRAP      Forgetting the square root in Heron. Check with
            (s-a)+(s-b)+(s-c) = s before you go further.
```

```
  PATTERN 6 — HALF-ANGLE VALUE FROM THREE SIDES                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find sin(A/2)" / "find cos(C/2)" / "find tan(B/2)".
  METHOD    sin(A/2) = sqrt( (s-b)(s-c)/(bc) )     "the two strangers"
            cos(A/2) = sqrt( s(s-a)/(bc) )         "s and self"
            tan(A/2) = sqrt( (s-b)(s-c)/(s(s-a)) )
            The bottom of sin and cos is always the two sides TOUCHING A.
  TRAP      Using (s-a) inside sin(A/2). It is the two brackets that do NOT
            contain a.
```

```
  PATTERN 7 — DISGUISED HALF-ANGLE                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   A condition like  (a+b+c)(b+c-a) = 3bc , or (s-a)(s-b) = s(s-c).
  METHOD    1. Rewrite every bracket using 2s: a+b+c = 2s , b+c-a = 2(s-a).
            2. The expression collapses into s(s-a)/(bc) or (s-a)(s-b)/(s(s-c)).
            3. Recognise it as cos^2(A/2) or tan^2(C/2).
            4. Take the square root and read off the angle.
  TRAP      Not spotting that b + c - a = 2(s - a). Write that line out.
```

```
  PATTERN 8 — PROJECTION RULE, DIRECT USE                     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The shape (side)(cos) + (side)(cos) anywhere in the question.
  METHOD    Replace b cosC + c cosB by a, and so on, in ONE step.
            For the big version, regroup first:
            (b+c)cosA + (c+a)cosB + (a+b)cosC
              = (b cosC + c cosB) + (c cosA + a cosC) + (a cosB + b cosA)
              = a + b + c = 2s
  TRAP      Pairing the wrong terms. Each pair must contain the two sides
            whose angles are NOT the ones in the cosines.
```

```
  PATTERN 9 — PROVE THE PROJECTION RULE / COSINE RULE / SINE RULE 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that a = b cos C + c cos B" (a bare statement, no numbers).
  METHOD    EITHER geometric: draw the altitude AD, split BC into BD + DC,
            and read off BD = c cos B, DC = b cos C.
            OR algebraic: substitute the cosine rule for both cosines and
            watch the denominators become 2a.
  TRAP      Not drawing the figure. In BIEAP the diagram carries a mark.
            Also mention the obtuse case in one line.
```

```
  PATTERN 10 — PROVE THE HALF-ANGLE FORMULA                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that sin(A/2) = sqrt((s-b)(s-c)/bc)".
  METHOD    1. Start from cos A = 1 - 2 sin^2(A/2).
            2. Put in the cosine rule for cos A.
            3. Combine over 2bc to get [a^2 - (b-c)^2]/(2bc).
            4. Factor as (a-b+c)(a+b-c)/(2bc).
            5. Convert to 2(s-b) . 2(s-c)/(2bc).
            6. Take the POSITIVE square root and say why (0 < A/2 < 90).
  TRAP      For cos(A/2) you must start from cos A = 2cos^2(A/2) - 1
            and factor (b+c)^2 - a^2 instead. Different starting identity.
```

```
  PATTERN 11 — NAPIER'S ANALOGY: PROVE IT                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove tan((B-C)/2) = ((b-c)/(b+c)) cot(A/2)".
  METHOD    1. b = 2R sinB , c = 2R sinC. The 2R cancels.
            2. sinB - sinC = 2 cos((B+C)/2) sin((B-C)/2)
               sinB + sinC = 2 sin((B+C)/2) cos((B-C)/2)
            3. The ratio becomes cot((B+C)/2) tan((B-C)/2).
            4. (B+C)/2 = 90 - A/2, so cot((B+C)/2) = tan(A/2).
            5. Rearrange.
  TRAP      Writing (B+C)/2 = 180 - A/2. You HALVED the equation, so the
            180 becomes 90.
```

```
  PATTERN 12 — SOLVE A TRIANGLE: THREE SIDES GIVEN (SSS)          4 marks
  ------------------------------------------------------------------------
  TRIGGER   a, b, c given. "Solve the triangle" / "find the angles".
  METHOD    1. Cosine rule for A, cosine rule for B.
            2. C = 180 - A - B.
            3. Verify with the cosine rule for C.
            (If the numbers are ugly, use tan(A/2) instead — no cos tables.)
  TRAP      Not checking that the three angles add to 180. That check is
            free and catches every arithmetic slip.
```

```
  PATTERN 13 — SOLVE A TRIANGLE: TWO SIDES + INCLUDED ANGLE (SAS) 4 marks
  ------------------------------------------------------------------------
  TRIGGER   b, c and A given (the angle sits between the two sides).
  METHOD    1. (B + C)/2 = 90 - A/2.
            2. tan((B-C)/2) = ((b-c)/(b+c)) cot(A/2)  ->  gives (B-C)/2.
            3. B = sum + difference , C = sum - difference.
            4. a = b sinA/sinB from the sine rule.
  TRAP      Finding B by the sine rule instead. arcsin always returns the
            ACUTE value, which may be wrong. Napier never has that problem.
```

```
  PATTERN 14 — SOLVE A TRIANGLE: TWO ANGLES + ONE SIDE (AAS/ASA)  4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two angles and any one side.
  METHOD    1. Third angle = 180 - (sum of the two given).
            2. Sine rule twice for the two unknown sides.
            3. Check: the order of the sides matches the order of the angles.
  TRAP      None really — this is the easiest case. Just don't mismatch the
            side with its angle in the sine rule.
```

```
  PATTERN 15 — THE AMBIGUOUS CASE (SSA)                       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two sides and an angle that is NOT between them, e.g. a, b, A.
            Often worded "how many triangles are possible?"
  METHOD    1. sin B = b sinA / a.
            2. Count:
                  b sinA > a          ->  NO triangle
                  b sinA = a          ->  ONE, right-angled at B
                  b sinA < a , a < b  ->  TWO triangles
                  a >= b              ->  ONE triangle
            3. If TWO, give BOTH: B and 180 - B, with the matching C and c.
  TRAP      Giving only the acute answer when two exist. Half the marks gone.
```

```
  PATTERN 16 — PROVE A SIMPLE r / r1 IDENTITY                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   1/r = 1/r1 + 1/r2 + 1/r3 ,  r r1 r2 r3 = delta^2 ,
            r1 r2 + r2 r3 + r3 r1 = s^2 , and friends.
  METHOD    LINE 1 (worth marks on its own):
              r = delta/s , r1 = delta/(s-a) , r2 = delta/(s-b) , r3 = delta/(s-c)
            LINE 2: substitute into the LHS.
            LINE 3: take delta out and add the fractions.
            LINE 4: simplify with (s-a)+(s-b)+(s-c) = s  and  2s = a+b+c.
            LINE 5: recognise s(s-a)(s-b)(s-c) = delta^2.
  TRAP      Trying to prove it geometrically. It is pure fraction algebra.
```

```
  PATTERN 17 — THE BIG IDENTITY  r1 + r2 + r3 - r = 4R            7 marks
  ------------------------------------------------------------------------
  TRIGGER   Any long-answer asking for a relation between the three ex-radii,
            r and R.
  METHOD    1. Write all four as delta over something.
            2. Pair 1/(s-a) + 1/(s-b)  ->  c/((s-a)(s-b))   [uses 2s-a-b = c]
            3. Pair 1/(s-c) - 1/s      ->  c/(s(s-c))
            4. Add over the common denominator s(s-a)(s-b)(s-c) = delta^2.
            5. Numerator simplifies:  s(s-c) + (s-a)(s-b) = ab.
            6. LHS = delta . abc/delta^2 = abc/delta = 4R.
  TRAP      Pairing them in the wrong order. Pair the FIRST TWO together and
            the LAST TWO together — any other pairing gets messy.
```

```
  PATTERN 18 — RECOVER THE TRIANGLE FROM r, r1, r2, r3            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If r1 = 2, r2 = 3, r3 = 6 (and r = 1), prove a = 3, b = 4, c = 5."
  METHOD    1. If r is not given: 1/r = 1/r1 + 1/r2 + 1/r3.
            2. delta = sqrt( r r1 r2 r3 ).
            3. s = delta / r.
            4. s - a = delta/r1 , s - b = delta/r2 , s - c = delta/r3.
            5. a = s - (delta/r1) , and so on.
            6. VERIFY: a + b + c = 2s, and Heron gives back your delta.
  TRAP      Mixing up which ex-radius goes with which side.
            r1 <-> (s-a) , r2 <-> (s-b) , r3 <-> (s-c).
```

```
  PATTERN 19 — IDENTITY MIXING SIDES AND ANGLES                   7 marks
  ------------------------------------------------------------------------
  TRIGGER   a^3 cos(B-C) + ... = 3abc ,
            a sin(B-C) + b sin(C-A) + c sin(A-B) = 0 ,
            a^2 cotA + b^2 cotB + c^2 cotC = 4 delta .
  METHOD    1. Replace EVERY side by 2R sin(its angle). The 2R factors out.
            2. Use A = 180 - (B+C) to turn sinA into sin(B+C).
            3. Apply a product-to-sum formula:
                 2 sinX cosY = sin(X+Y) + sin(X-Y)
                 2 sinX sinY = cos(X-Y) - cos(X+Y)
            4. Convert back to sides with 2R sinB = b at the end.
  TRAP      Not converting back. The answer must be in the same letters the
            question used.
```

```
  PATTERN 20 — IDENTITY MIXING r, R AND THE ANGLES                7 marks
  ------------------------------------------------------------------------
  TRIGGER   r + r1 + r2 - r3 = 4R cos C ,  cosA + cosB + cosC = 1 + r/R ,
            r1 + r2 = 4R cos^2(C/2).
  METHOD    Use the R-FORMS, not the delta-forms:
              r  = 4R sin(A/2) sin(B/2) sin(C/2)
              r1 = 4R sin(A/2) cos(B/2) cos(C/2)
              r2 = 4R cos(A/2) sin(B/2) cos(C/2)
              r3 = 4R cos(A/2) cos(B/2) sin(C/2)
            Group the two terms that share the SAME half-angle function of the
            letter you want, then use sin(X+Y) or cos(X+Y) and
            (A+B)/2 = 90 - C/2.
  TRAP      Trying to do these with delta/s forms. It works but takes three
            pages. The R-forms finish in six lines.
```

```
  PATTERN 21 — "PROVE THE TRIANGLE IS RIGHT-ANGLED / EQUILATERAL" 7 marks
  ------------------------------------------------------------------------
  TRIGGER   A condition like a^2+b^2+c^2 = 8R^2 , or R = 2r ,
            or cosA/a = cosB/b = cosC/c.
  METHOD    1. Convert all sides to 2R sin(angle).
            2. Use a standard triangle identity, e.g.
                 sin^2A + sin^2B + sin^2C = 2 + 2 cosA cosB cosC
                 cosA + cosB + cosC = 1 + 4 sin(A/2)sin(B/2)sin(C/2)
            3. The condition collapses to "a product = 0" or "all equal".
            4. State the conclusion in words.
  TRAP      Stopping at cosA cosB cosC = 0 without saying WHY that means a
            right angle. Write the sentence: "a product is zero only if a
            factor is zero, so one angle is 90 degrees."
```

```
  PATTERN 22 — ALTITUDES p1, p2, p3                           4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   The letters p1, p2, p3 (or h1, h2, h3) with the word "altitudes".
  METHOD    1. delta = (1/2) a p1  ->  p1 = 2 delta/a. Write all three.
            2. For the reciprocal sum: 1/p1+1/p2+1/p3 = (a+b+c)/(2delta)
               = s/delta = 1/r.
            3. For the product: p1 p2 p3 = 8 delta^3/(abc), then substitute
               delta = abc/(4R) to get (abc)^2/(8R^3).
  TRAP      Writing p1 = delta/a. The area is HALF base times height, so
            p1 = 2 delta/a.
```

```
  PATTERN 23 — MEDIAN LENGTH                                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the length of the median from A" / "sum of squares of medians".
  METHOD    m(a) = (1/2) sqrt(2b^2 + 2c^2 - a^2).
            The side you start FROM is the one that is subtracted.
            Sum of squares = (3/4)(a^2 + b^2 + c^2).
  TRAP      Forgetting the 1/2 outside the square root.
```

```
  PATTERN 24 — ANGLE BISECTOR LENGTH                          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Length of the internal bisector of angle A".
  METHOD    t(a) = 2bc cos(A/2)/(b + c) , with cos(A/2) = sqrt(s(s-a)/(bc)).
            Derivation if asked: area(ABE) + area(AEC) = area(ABC).
  TRAP      Using cos A instead of cos(A/2).
```

```
  PATTERN 25 — DISTANCE BETWEEN CENTRES                       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "distance between the circumcentre and the incentre", or a
            question about R >= 2r.
  METHOD    OI^2 = R^2 - 2Rr  (Euler).  OI1^2 = R^2 + 2R r1.
            For R >= 2r: OI^2 >= 0 forces R^2 >= 2Rr, so R >= 2r.
  TRAP      Writing OI = R - 2r. It is a SQUARED relation.
```

```
  PATTERN 26 — TANGENT LENGTHS AND VERTEX-TO-CENTRE DISTANCES     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The tangent from A to the incircle", "find AI".
  METHOD    tangent from A to the incircle = s - a
            tangent from A to the excircle opposite A = s
            AI = r/sin(A/2) = 4R sin(B/2) sin(C/2)
            AI1 = r1/sin(A/2) = 4R cos(B/2) cos(C/2)
  TRAP      Confusing AI with r. r is the perpendicular distance to a SIDE;
            AI is the slant distance to the VERTEX, so AI > r always.
```

```
  PATTERN 27 — HEIGHTS AND DISTANCES                          4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "angle of elevation", "tower", "two ships", "walking x metres
            towards the building".
  METHOD    1. DRAW the figure and mark every angle. The diagram earns marks.
            2. Identify a triangle where you know enough (usually an
               isosceles one appears via the exterior-angle rule).
            3. Sine rule or cosine rule, then a right triangle at the end
               for the height.
            4. State the units.
  TRAP      Marking the angle of depression inside the triangle. It is
            measured from the HORIZONTAL at the top, so it equals the angle
            of elevation from the bottom (alternate angles).
```

```
  PATTERN 28 — "WHAT KIND OF TRIANGLE IS IT?"                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   A condition, and the options are equilateral / isosceles /
            right-angled / obtuse.
  METHOD    a cosA = b cosB           ->  isosceles OR right-angled
            cosA/a = cosB/b = cosC/c  ->  equilateral
            R = 2r                    ->  equilateral
            sin^2A + sin^2B = sin^2C  ->  right-angled at C
            a^2 + b^2 + c^2 = 8R^2    ->  right-angled
            longest side^2 > sum of the other two squares  ->  obtuse
  TRAP      In the "sin2A = sin2B" situation there are TWO answers.
            Say "isosceles OR right-angled", not just one.
```

```
  PATTERN 29 — RECOGNISE AN EXPRESSION AND NAME IT                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "b cosC + c cosB = ?" , "r1 r2 + r2 r3 + r3 r1 = ?" ,
            "a^2 cotA + b^2 cotB + c^2 cotC = ?"
  METHOD    Straight recall from the formula sheet. If you are unsure,
            plug in 3, 4, 5 (s=6, delta=6, r=1, R=2.5, r1=2, r2=3, r3=6)
            and see which option matches.
  TRAP      None — this is free marks IF you learned the formula sheet.
```

```
  PATTERN 30 — SPECIAL CASE: RIGHT-ANGLED TRIANGLE            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "In a right-angled triangle, show that ..." or C = 90 is given.
  METHOD    Use these instantly:
              R = c/2 (hypotenuse over 2)     r = s - c
              delta = (1/2) ab                r1 + r2 = c
              cos C = 0 , sin C = 1
  TRAP      Assuming the right angle is at C. Read the question — the
            hypotenuse is whichever side faces the 90 degree angle.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| Question stem you see in the exam | Pattern |
|-----------------------------------|---------|
| "If a = 6, b = 5, c = 9, find cos A" | 1 |
| "b = 8, c = 3, A = 60. Find a" | 2 |
| "a = 3, b = 4, sin A = 3/4. Find B" | 3 |
| "sinA : sinB : sinC = 3 : 5 : 7" | 4 |
| "Find the area and the circumradius of the triangle 13, 14, 15" | 5 |
| "Find tan(A/2) when a = 5, b = 6, c = 7" | 6 |
| "If (a+b+c)(b+c-a) = 3bc, find A" | 7 |
| "Prove (b+c)cosA + (c+a)cosB + (a+b)cosC = a+b+c" | 8 |
| "Show that a = b cos C + c cos B" | 9 |
| "Show that sin(A/2) = sqrt((s-b)(s-c)/bc)" | 10 |
| "Prove tan((B-C)/2) = ((b-c)/(b+c)) cot(A/2)" | 11 |
| "Solve the triangle a = 7, b = 8, c = 9" | 12 |
| "b = 8, c = 3, A = 60. Solve the triangle" | 13 |
| "A = 45, B = 75, a = 10. Solve the triangle" | 14 |
| "a = 6, b = 8, A = 30. How many triangles?" | 15 |
| "Prove 1/r1 + 1/r2 + 1/r3 = 1/r" | 16 |
| "Prove r1 + r2 + r3 - r = 4R" | 17 |
| "If r1 = 2, r2 = 3, r3 = 6, prove a = 3, b = 4, c = 5" | 18 |
| "Prove a^3 cos(B-C) + b^3 cos(C-A) + c^3 cos(A-B) = 3abc" | 19 |
| "Prove r + r1 + r2 - r3 = 4R cos C" | 20 |
| "If a^2 + b^2 + c^2 = 8R^2, prove the triangle is right-angled" | 21 |
| "If p1, p2, p3 are the altitudes, prove 1/p1+1/p2+1/p3 = 1/r" | 22 |
| "Find the median from A when a = 13, b = 14, c = 15" | 23 |
| "Find the length of the internal bisector of angle A" | 24 |
| "Find the distance between the circumcentre and the incentre" | 25 |
| "Find AI, the distance from A to the incentre" | 26 |
| "The angle of elevation of a tower is 30; after walking 40 m ..." | 27 |
| "If cosA/a = cosB/b = cosC/c, the triangle is ..." | 28 |
| "r1 r2 + r2 r3 + r3 r1 = ?" | 29 |
| "In a triangle right-angled at C, show r = s - c" | 30 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +=========================================================================+
  |                                                                         |
  |  TIER 1 — LEARN THESE FIRST. They alone are worth 9 to 11 marks.       |
  |                                                                         |
  |    Pattern 17   r1 + r2 + r3 - r = 4R              7 marks (Section C)  |
  |    Pattern 1    cos A from three sides             2 marks (Section A)  |
  |    Pattern 5    s, delta, R, r from three sides    2 marks (Section A)  |
  |    Pattern 16   1/r = 1/r1 + 1/r2 + 1/r3           4 marks (Section B)  |
  |                                                                         |
  +=========================================================================+

  +=========================================================================+
  |                                                                         |
  |  TIER 2 — the safety net. Learn these next.                            |
  |                                                                         |
  |    Pattern 18   Recover a, b, c from r1, r2, r3    7 marks              |
  |    Pattern 6    Half-angle values                  2 marks              |
  |    Pattern 8    Projection-rule identities         4 marks              |
  |    Pattern 10   Prove sin(A/2) = ...               4 marks              |
  |                                                                         |
  +=========================================================================+

  +=========================================================================+
  |                                                                         |
  |  TIER 3 — for a distinction.                                            |
  |                                                                         |
  |    Pattern 19   a^3 cos(B-C) + ... = 3abc          7 marks              |
  |    Pattern 20   r + r1 + r2 - r3 = 4R cos C        7 marks              |
  |    Pattern 21   Prove right-angled                 7 marks              |
  |    Patterns 12-15  Solving triangles               4 marks              |
  |                                                                         |
  +=========================================================================+
```

## THE EXAM-HALL RITUAL FOR THIS CHAPTER

```
  1.  Draw the triangle. Label a, b, c and A, B, C.          [always]

  2.  Write  s = (a+b+c)/2  and compute s-a, s-b, s-c.       [numerical Qs]
      Check that they add up to s.

  3.  Write the delta-forms line:                            [identity Qs]
          r = delta/s , r1 = delta/(s-a) , r2 = delta/(s-b) , r3 = delta/(s-c)
      This ONE line earns marks even if the rest goes wrong.

  4.  Do the algebra. Use 2s - a - b = c wherever a bracket appears.

  5.  Finish with "HENCE PROVED" or box the numerical answer with units.

  6.  If time allows, verify with 13, 14, 15 or 3, 4, 5 in the margin.
```

```
  +-------------------------------------------------------------------------+
  |  THE ONE SENTENCE TO REMEMBER                                           |
  |                                                                         |
  |  Every 7-mark question in this chapter turns into ADDING FRACTIONS      |
  |  the moment you write r = delta/s and r1 = delta/(s-a).                 |
  |                                                                         |
  |  It is not geometry. It is arithmetic with letters. You can do it.      |
  +-------------------------------------------------------------------------+
```
