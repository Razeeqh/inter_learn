# Direction Cosines and Direction Ratios — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

This chapter has only about 27 shapes in total, and more than half of them are
two-line answers. That is why it is one of the cheapest chapters in Maths IB.

---

```
  PATTERN 1 — DIRECTION RATIOS TO DIRECTION COSINES               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the direction cosines of the line whose direction
            ratios are (a, b, c)."
  METHOD    1. r = sqrt(a^2 + b^2 + c^2)
            2. d.c.'s = ( a/r , b/r , c/r )   , and the all-negative set
            3. CHECK  l^2 + m^2 + n^2 = 1
  TRAP      Forgetting to divide by r, i.e. handing in the RATIOS.
            Also: writing only one of the two sign sets when the
            question does not fix a direction.
```

```
  PATTERN 2 — IS THIS TRIPLE A VALID SET OF DIRECTION COSINES?    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Can (p, q, s) be the direction cosines of a line?" or
            "Which of the following is NOT a set of direction cosines?"
  METHOD    Square them, add them. If the total is 1, yes. If not, no.
  TRAP      Adding the numbers instead of their squares.
            Also: forgetting that negative entries are perfectly legal.
```

```
  PATTERN 3 — THE MISSING DIRECTION COSINE OR MISSING ANGLE       2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two of l, m, n given and the third wanted; or two of the
            angles alpha, beta, gamma given and the third wanted.
  METHOD    1. Convert given angles to cosines.
            2. n^2 = 1 - l^2 - m^2
            3. n = PLUS OR MINUS the square root.
            4. Convert back to an angle: theta and 180 - theta.
  TRAP      Giving only the acute angle. A square root always produces
            TWO answers here. "60 or 120 degrees" is the full answer.
```

```
  PATTERN 4 — LINE EQUALLY INCLINED TO THE THREE AXES             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "equally inclined to the axes", "makes equal angles with
            the coordinate axes", "the diagonal of a cube".
  METHOD    l = m = n = k , so 3k^2 = 1 , k = +/- 1/sqrt3 .
            Angle = cos^-1(1/sqrt3) , about 54 deg 44 min.
  TRAP      Answering 60 degrees "because there are three axes".
            A line CANNOT make 60 degrees with all three:
            3 x (1/4) = 3/4 , not 1.
```

```
  PATTERN 5 — DIRECTION COSINES OF A COORDINATE AXIS              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the direction cosines of the y-axis", or a question
            asking for the angle between a line and an axis.
  METHOD    x-axis (1,0,0) , y-axis (0,1,0) , z-axis (0,0,1).
            Then use cos theta = l1l2 + m1m2 + n1n2 , which collapses
            to just one of l, m or n.
  TRAP      Writing (1,1,0) style answers. Exactly ONE entry is 1.
```

```
  PATTERN 6 — LINE JOINING TWO POINTS                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two points are given and "direction ratios" or "direction
            cosines" is asked for.
  METHOD    1. d.r.'s = ( x2-x1 , y2-y1 , z2-z1 )      -- SUBTRACT
            2. AB = sqrt of the sum of their squares
            3. d.c.'s = each difference divided by AB
            4. CHECK l^2 + m^2 + n^2 = 1
  TRAP      Sign errors on negative coordinates.
            -8 - (-5) = -3 , NOT -13. Write the bracket first.
```

```
  PATTERN 7 — PROVE l^2 + m^2 + n^2 = 1                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that cos^2 a + cos^2 b + cos^2 c = 1" or
            "If a line makes angles a, b, c with the axes, show that ..."
  METHOD    1. Draw O, P(x,y,z), OP = r, and the perpendicular to an axis.
            2. cos alpha = x/r  ->  x = lr ; similarly y = mr , z = nr.
            3. x^2 + y^2 + z^2 = r^2
            4. r^2 (l^2+m^2+n^2) = r^2 ; divide by r^2 (r is not 0).
  TRAP      Skipping the DIAGRAM. It carries a mark on its own.
            Also: forgetting to say "since r is not zero".
```

```
  PATTERN 8 — THE TWO IDENTITY SPIN-OFFS                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find sin^2 a + sin^2 b + sin^2 c" or
            "Prove cos 2a + cos 2b + cos 2c = -1"
  METHOD    sin^2 sum : replace each sin^2 by 1 - cos^2 -> 3 - 1 = 2
            cos 2 sum : replace each cos 2A by 2cos^2 A - 1 -> 2 - 3 = -1
  TRAP      Answering 1 for the sine one. It is 2.
            And note: the sines of the angles with the three PLANES
            add (squared) to 1, not 2. Different question, same look.
```

```
  PATTERN 9 — ANGLE BETWEEN TWO LINES FROM RATIOS              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the lines whose direction ratios
            are ... and ..."
  METHOD    1. numerator = a1a2 + b1b2 + c1c2
            2. divide by sqrt(a1^2+b1^2+c1^2) x sqrt(a2^2+b2^2+c2^2)
            3. rationalise, then theta = cos^-1 (...)
  TRAP      Dividing by only ONE of the two lengths.
            For the ACUTE angle, put the numerator inside a modulus.
```

```
  PATTERN 10 — ANGLE BETWEEN TWO LINES FROM COSINES               2 marks
  ------------------------------------------------------------------------
  TRIGGER   The two triples already satisfy l^2+m^2+n^2 = 1.
  METHOD    cos theta = l1l2 + m1m2 + n1n2 . No denominator at all.
  TRAP      Dividing anyway. If both triples are cosines, the two
            lengths are 1 and there is nothing to divide by.
```

```
  PATTERN 11 — THE SINE FORM OF THE ANGLE                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   The answer is wanted as sin^-1 or tan^-1, or the question
            explicitly says "using the sine formula".
  METHOD    FAST WAY:  find cos theta first, then sin = sqrt(1 - cos^2).
            FULL WAY:  numerator = sqrt[ (a1b2-a2b1)^2 + (b1c2-b2c1)^2
                                        + (c1a2-c2a1)^2 ]
                       denominator = the same two lengths as before.
            ALWAYS finish with the check  sin^2 + cos^2 = 1.
  TRAP      Mis-signing one of the three cross terms. Since they are
            squared it does not matter - but a wrong PAIRING does.
            The pairings are  ab , bc , ca .
```

```
  PATTERN 12 — SHOW TWO LINES ARE PERPENDICULAR                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the lines ... are perpendicular", or two pairs
            of points and the word "perpendicular".
  METHOD    1. Get both sets of d.r.'s (subtract if points are given).
            2. a1a2 + b1b2 + c1c2 . Show it equals 0.
            3. Write the sentence "therefore the lines are
               perpendicular".
  TRAP      Converting to direction cosines first. Completely
            unnecessary - the zero test works with ratios.
```

```
  PATTERN 13 — FIND k SO THAT THE LINES ARE PERPENDICULAR         2 marks
  ------------------------------------------------------------------------
  TRIGGER   An unknown letter sits inside one of the triples.
  METHOD    Set a1a2 + b1b2 + c1c2 = 0 , solve the linear equation
            for the unknown, then SUBSTITUTE BACK to check.
  TRAP      Arithmetic slips with the negative products. The
            substitute-back check costs 10 seconds and saves the mark.
```

```
  PATTERN 14 — PARALLEL LINES / FIND p AND q                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the lines are parallel", or two unknowns with
            the word "parallel".
  METHOD    1. a1/a2 = b1/b2 = c1/c2 .
            2. Find the scale factor k from the pair with no unknown.
            3. Apply k to the other entries.
            4. Write out both triples to show they match.
  TRAP      If a denominator is zero, do NOT write the fraction.
            Say in words that the triples are proportional, e.g.
            (2,0,3) and (4,0,6) are parallel with k = 2.
```

```
  PATTERN 15 — LINE PERPENDICULAR TO TWO GIVEN LINES              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the direction ratios / cosines of the line
            perpendicular to BOTH of the lines ..."
  METHOD    1. Write the two triples in two rows.
            2. Cross-multiply:  ( b1c2-b2c1 , c1a2-c2a1 , a1b2-a2b1 )
            3. Simplify by cancelling any common factor.
            4. CHECK: dot with line 1 = 0 AND dot with line 2 = 0.
            5. If cosines are wanted, divide by r and check the
               squares add to 1.
  TRAP      The MIDDLE entry. It is  c1a2 - c2a1 , NOT a1c2 - a2c1 .
            The letters cycle:  bc , ca , ab . The two dot-product
            checks catch this instantly - never skip them.
```

```
  PATTERN 16 — PERPENDICULAR TO AB AND CD, GIVEN FOUR POINTS      4 marks
  ------------------------------------------------------------------------
  TRIGGER   Four points A, B, C, D and "perpendicular to both AB and CD".
  METHOD    1. SUBTRACT to get d.r.'s of AB and of CD.
            2. Then it is exactly Pattern 15.
  TRAP      Pairing the points wrongly - it is B minus A and D minus C,
            never a mixture like C minus A.
```

```
  PATTERN 17 — SHOW THREE POINTS ARE COLLINEAR                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three points and the word "collinear".
  METHOD    1. d.r.'s of AB by subtracting.
            2. d.r.'s of BC by subtracting.
            3. Show ALL THREE ratios BC/AB are the same number k.
            4. Say: "the d.r.'s are proportional, so AB is parallel to
               BC; they share the point B; therefore A, B, C are
               collinear."
  TRAP      Checking only one or two of the three ratios.
            Also: forgetting the concluding sentence, which is a mark.
```

```
  PATTERN 18 — FIND THE MISSING COORDINATE FOR COLLINEARITY       2 marks
  ------------------------------------------------------------------------
  TRIGGER   Three points, one with an unknown letter, "collinear".
  METHOD    1. Get both sets of d.r.'s.
            2. Use the TWO ratios that contain no unknown to find k.
            3. Apply k to the remaining entry to find the unknown.
            4. Substitute back and show all three ratios agree.
  TRAP      Using a ratio that itself contains the unknown to find k.
            Use the clean pair first.
```

```
  PATTERN 19 — PROJECTION OF A SEGMENT ON A LINE               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the projection of the segment joining ... on the
            line ..." , or "the length of the projection".
  METHOD    1. d.r.'s of the line you project ONTO.
            2. CONVERT THEM TO DIRECTION COSINES (divide by r).
            3. Differences for the segment: (x2-x1, y2-y1, z2-z1).
            4. Projection = l dx + m dy + n dz .
            5. If "length" is asked, take the modulus.
  TRAP      Step 2. Using the ratios directly makes your answer r times
            too big - and that wrong value is always one of the options.
```

```
  PATTERN 20 — PROJECTIONS ON THE AXES                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The projections of a segment on the axes are p, q, s.
            Find its length / its direction cosines."
  METHOD    Length L = sqrt(p^2 + q^2 + s^2)
            d.c.'s   = ( p/L , q/L , s/L )
            (Read backwards: the projections on the axes ARE the d.r.'s.)
  TRAP      Adding p + q + s to get the length. It is Pythagoras.
```

```
  PATTERN 21 — TWO CONDITIONS ON l, m, n -> FIND THE ANGLE        4 marks
  ------------------------------------------------------------------------
  TRIGGER   One LINEAR equation and one QUADRATIC equation in l, m, n.
  METHOD    1. From the linear one write n = -(l + m) , or similar.
            2. Substitute into the quadratic.
            3. You get a homogeneous quadratic in two letters -
               FACTORISE it into two brackets.
            4. Each bracket gives one triple of d.r.'s.
            5. cos theta = the d.r. formula on those two triples.
  TRAP      Stopping after the factorisation. The question wants the
            ANGLE (or the direction cosines), not the factors.
            Also: if the cosine comes out negative, the angle between
            the LINES is the acute one, 180 minus what you found.
```

```
  PATTERN 22 — TWO CONDITIONS -> SHOW PERPENDICULAR               4 marks
  ------------------------------------------------------------------------
  TRIGGER   Same setup as Pattern 21, but the question says "show that
            the lines are perpendicular".
  METHOD    Identical to Pattern 21 up to the two triples, then show
            a1a2 + b1b2 + c1c2 = 0 .
  TRAP      Not simplifying the triples before dotting. Cancel the
            common letter first, e.g. ( l, -2l, -2l ) -> ( 1, -2, -2 ).
```

```
  PATTERN 23 — BISECTORS OF THE ANGLE BETWEEN TWO LINES           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the direction cosines of the bisectors of the angles
            between the lines whose direction cosines are ..."
  METHOD    1. Confirm both triples really are COSINES (squares add to 1).
               If you were given ratios, convert them FIRST.
            2. Internal bisector d.r.'s = ( l1+l2 , m1+m2 , n1+n2 )
               External bisector d.r.'s = ( l1-l2 , m1-m2 , n1-n2 )
            3. Divide each by its own length; check squares add to 1.
            4. CHECK the two bisectors are perpendicular (dot = 0).
  TRAP      Adding direction RATIOS. Only equal-length arrows form a
            rhombus, and only a rhombus diagonal bisects the angle.
```

```
  PATTERN 24 — ANGLE BETWEEN A LINE AND A COORDINATE PLANE        2 marks
  ------------------------------------------------------------------------
  TRIGGER   The word PLANE instead of LINE or AXIS:
            "the angle made by the line with the xy-plane".
  METHOD    1. Get the d.c.'s (l, m, n).
            2. Use SIN, and use the letter MISSING from the plane's name:
                  yz-plane -> sin phi = |l|
                  zx-plane -> sin phi = |m|
                  xy-plane -> sin phi = |n|
  TRAP      Using cos. LINE vs LINE = COS. LINE vs PLANE = SIN.
            Write those seven words in the margin before you start.
```

```
  PATTERN 25 — FOOT OF THE PERPENDICULAR FROM A POINT TO A LINE   4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three points A, B, C and "the foot of the perpendicular
            from A to BC", or "the length of the perpendicular from A
            to the line BC".
  METHOD    1. d.r.'s of BC = ( x3-x2 , y3-y2 , z3-z2 ).
            2. Write D = B + t (those d.r.'s) - one letter t.
            3. d.r.'s of AD = D minus A , in terms of t.
            4. AD perpendicular to BC -> dot = 0 -> solve for t.
            5. Put t back into D.
            6. CHECK the dot product of AD and BC is 0.
            7. If the LENGTH is asked, use the distance formula on AD.
  TRAP      Writing D from A instead of from B. D lies on BC, so it
            must be built from a point ON that line.
```

```
  PATTERN 26 — ANGLES OF A TRIANGLE IN SPACE                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three points and "find the angle at B" / "show the triangle
            is equilateral / right angled".
  METHOD    1. For the angle at B, use the rays BA and BC - both
               subtracted FROM B.
            2. cos B = the d.r. formula on those two triples.
            3. For a right angle, just show the numerator is 0.
  TRAP      Using AB and BC instead of BA and BC. That gives the
            SUPPLEMENT of the angle you want (the sign flips).
            Always subtract away FROM the vertex.
```

```
  PATTERN 27 — THE CUBE                                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the angle between two diagonals of a cube", "between a
            diagonal and an edge", or four angles with the four diagonals.
  METHOD    Put a corner at O with edges of length a along the axes.
            Diagonals: (1,1,1) , (-1,1,1) , (1,-1,1) , (1,1,-1)
            Edges:     (1,0,0) , (0,1,0) , (0,0,1)
            Then one dot product.
            Standard results:
               diagonal to diagonal  ->  cos^-1 (1/3)
               diagonal to edge      ->  cos^-1 (1/sqrt3)
               sum of cos^2 with the four diagonals  =  4/3
               sum of sin^2 with the four diagonals  =  8/3
  TRAP      Using the actual edge length a. Cancel it immediately -
            direction ratios do not care about scale.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right column. Read the stem. Say the pattern number out loud.

| Question stem you might see | Pattern |
|---|---|
| "Find the d.c.'s of the line whose d.r.'s are `(2, -3, 6)`" | 1 |
| "Can `(1/2, 1/2, 1/2)` be the direction cosines of a line?" | 2 |
| "A line makes 45 and 60 degrees with x and y — find the third angle" | 3 |
| "Find `k` if `(1/2, 1/sqrt2, k)` are direction cosines" | 3 |
| "Find the d.c.'s of a line equally inclined to the axes" | 4 |
| "Write the direction cosines of the z-axis" | 5 |
| "Find the d.r.'s and d.c.'s of the line joining `(4,3,-5)` and `(-2,1,-8)`" | 6 |
| "Prove that `cos^2 a + cos^2 b + cos^2 c = 1`" | 7 |
| "Find `sin^2 a + sin^2 b + sin^2 c`" | 8 |
| "Prove `cos 2a + cos 2b + cos 2c = -1`" | 8 |
| "Find the angle between the lines with d.r.'s `(1,2,1)` and `(2,3,-1)`" | 9 |
| "Find the angle between the lines with d.c.'s `(1/3,2/3,2/3)` and ..." | 10 |
| "Find `sin theta` for the angle between the two lines" | 11 |
| "Show that the lines with d.r.'s `(1,-2,1)` and `(4,3,2)` are perpendicular" | 12 |
| "Find `k` if the lines `(k,2,3)` and `(2,-3,4)` are perpendicular" | 13 |
| "Find `p` and `q` if `(2,p,3)` and `(4,-6,q)` are parallel" | 14 |
| "Find the d.c.'s of the line perpendicular to both `(1,-1,1)` and `(2,1,-1)`" | 15 |
| "A, B, C, D are four points — find the line perpendicular to AB and CD" | 16 |
| "Show that `(2,3,-4)`, `(1,-2,3)`, `(3,8,-11)` are collinear" | 17 |
| "Find `k` so that the three points are collinear" | 18 |
| "Find the projection of the segment joining ... on the line ..." | 19 |
| "The projections on the axes are 12, 4, 3 — find the length" | 20 |
| "`l+m+n = 0` and `l^2+m^2-n^2 = 0` — find the angle" | 21 |
| "`2l+2m-n = 0` and `mn+nl+lm = 0` — show they are perpendicular" | 22 |
| "Find the d.c.'s of the bisectors of the angles between the lines" | 23 |
| "Find the angle made by the line with the xy-plane" | 24 |
| "Find the foot of the perpendicular from A to the line BC" | 25 |
| "Find the angle ABC where A, B, C are three given points" | 26 |
| "Find the angle between two diagonals of a cube" | 27 |
| "Show that the triangle with vertices ... is equilateral" | 26 |
| "What is the length of the perpendicular from A to BC?" | 25 (then distance formula) |
| "A line lies in the zx-plane — what can you say about its d.c.'s?" | 24 (`m = 0`) |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 1  -  LEARN THESE OR NOTHING ELSE      (Patterns 1-14)     |
  |                                                                   |
  |   Every one of them is a 2-mark question that takes 45 to 90      |
  |   seconds. They all come from just three facts:                   |
  |                                                                   |
  |        l^2 + m^2 + n^2 = 1                                        |
  |        d.r. -> d.c. : divide by sqrt(a^2 + b^2 + c^2)             |
  |        cos theta = l1l2 + m1m2 + n1n2   (zero means perpendicular)|
  |                                                                   |
  |   Time needed: ONE EVENING.                                       |
  |   Expected return: the Section A question from this chapter,      |
  |   which appears in nearly every paper.                            |
  |                                                                   |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 2  -  ADD THESE IF YOU HAVE A SECOND EVENING               |
  |                                    (Patterns 15-22, 24)           |
  |                                                                   |
  |   The cross-multiplication rule, collinearity, projections,       |
  |   the l+m+n = 0 problems, and the line-versus-plane sine rule.    |
  |                                                                   |
  |   These cover the 4-mark Section B question in the years it       |
  |   appears, and several of them (17, 19, 24) also turn up as       |
  |   2-markers.                                                      |
  |                                                                   |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 3  -  ONLY IF YOU ARE ALREADY COMFORTABLE                  |
  |                                    (Patterns 23, 25, 26, 27)      |
  |                                                                   |
  |   Angle bisectors, the foot of the perpendicular, triangles in    |
  |   space, and the cube. Rare in the board paper, but the cube      |
  |   results are near-free marks in EAPCET and JEE Main.             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## The honest bottom line

```
     Study time      Patterns          Marks you can expect
     -----------     --------------    ---------------------------------
     1 evening       1 - 14            the 2-mark Section A question
     2 evenings      1 - 22, 24        that, plus the 4-mark Section B
                                       question when it is set
     3 evenings      all 27            all of the above, plus the EAPCET
                                       and JEE Main 3D questions

     This chapter will NOT give you a 7-mark long answer in Maths IB.
     Do not spend a week here. Spend two evenings, bank the easy marks,
     and put the rest of your time into Differentiation, Applications
     of Derivatives, The Straight Line and Pair of Straight Lines -
     that is where the 35 Section C marks live.

     But do NOT skip this chapter either. It is the middle link of the
     3D block:

        Ch 5  Three Dimensional Coordinates   ->  points in space
        Ch 6  Direction Cosines and Ratios    ->  directions in space
        Ch 7  The Plane                       ->  point + direction

     Every "normal to the plane" question in Chapter 7 is a Pattern 1
     or Pattern 15 question wearing a different hat. Two evenings here
     buys you marks in TWO chapters.
```

## The five lines to write in the margin of your answer sheet

```
   1.   l^2 + m^2 + n^2 = 1
        (and: sin^2 sum with the AXES = 2 ; with the PLANES = 1)

   2.   d.r. -> d.c. :  divide by  r = sqrt(a^2 + b^2 + c^2)   , +/-

   3.   d.r.'s of AB  =  ( x2-x1 , y2-y1 , z2-z1 )       SUBTRACT

   4.   cos theta = l1l2 + m1m2 + n1n2
        perpendicular: dot = 0        parallel: ratios equal

   5.   perpendicular to both:  ( b1c2-b2c1 , c1a2-c2a1 , a1b2-a2b1 )
        then CHECK both dot products give 0
```

If you can write those five lines from memory, you can attempt every 2-mark and every
4-mark question this chapter has ever produced in the AP Inter board paper.

## And the one habit worth more than all five

```
   Every time you finish an answer that contains direction cosines,
   write ONE more line:

           l^2 + m^2 + n^2  =  ......  =  1

   Eight seconds. It catches a wrong square root, a dropped minus
   sign and a slipped denominator - and the examiner can see that
   you understand what a direction cosine actually is.
```
