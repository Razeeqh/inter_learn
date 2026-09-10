# Addition of Vectors — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

# THE 2-MARK PATTERNS (Section A — compulsory, do all of them)

```
  PATTERN 1 — FIND AB AND ITS MAGNITUDE FROM TWO POSITION VECTORS   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The position vectors of A and B are ... Find AB and |AB|."
            Or two points given as coordinates.
  METHOD    1. AB = b - a          (HEAD minus TAIL)
            2. Subtract i, j, k parts separately.
            3. |AB| = sqrt( sum of the squares of the three components ).
            4. Simplify the surd: sqrt(162) = 9 sqrt(2).
  TRAP      Writing a - b. The answer will have every sign wrong.
            Also: |AB| is a NUMBER — do not leave i, j, k in it.
```

```
  PATTERN 2 — UNIT VECTOR IN A GIVEN DIRECTION                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the unit vector in the direction of ..." ,
            "... in the direction of a + b" ,
            "... in the direction opposite to a".
  METHOD    1. If it says "of a + b", ADD first.
            2. Compute |a| (or |a + b|).
            3. a-hat = a / |a|.  For the opposite direction, put a minus sign.
            4. Check: the squares of the three components must add to 1.
  TRAP      Forgetting to add first. Turning the surd into a decimal.
```

```
  PATTERN 3 — VECTOR OF A GIVEN MAGNITUDE ALONG a                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the vector of magnitude 6 in the direction of ..."
            "Find a vector of magnitude 14 along the line joining A and B."
  METHOD    1. If two points are given, first form AB = b - a.
            2. Compute |a| (or |AB|).
            3. Answer = p x ( a / |a| ).  Compute p/|a| first — it is
               almost always a neat number.
            4. Verify the magnitude of your answer really is p.
  TRAP      Writing p a instead of p a / |a|. This is the single most
            common 2-mark loss in the whole chapter.
```

```
  PATTERN 4 — ADD VECTORS ALONG A PATH                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "OA = ... , AB = ... , BC = ... , CD = ... Find OD."
  METHOD    1. Check the letters chain up: O->A->B->C->D. They do.
            2. OD = OA + AB + BC + CD.
            3. Add the i parts, then the j parts, then the k parts.
  TRAP      If the letters do NOT chain (e.g. you are given CB, not BC),
            flip it first:  BC = -CB.
```

```
  PATTERN 5 — COLLINEAR VECTORS, FIND THE MISSING LETTERS           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If  -3i + 4j + p k  and  q i + 8j + 6k  are collinear,
             find p and q."   Words: collinear / parallel / like / unlike.
  METHOD    1. Write the components as proportional:
                  q/(-3) = 8/4 = 6/p
            2. Find the common multiplier k from the pair you already know.
            3. Use k to get each missing letter.
            4. State like (k > 0) or unlike (k < 0) if asked.
  TRAP      Using the ratio the wrong way round. Always test your k by
            multiplying the FIRST vector by it and checking you get the
            SECOND.
```

```
  PATTERN 6 — DIRECTION COSINES AND DIRECTION RATIOS                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the direction cosines of ..." , "the angles made with
            the coordinate axes" , "the direction ratios of the line
            joining A and B".
  METHOD    1. If two points are given, form AB = b - a first.
            2. Direction RATIOS = the three components. Done, no dividing.
            3. Direction COSINES: divide each component by the magnitude.
                  l = x/|r| , m = y/|r| , n = z/|r|
            4. CHECK  l^2 + m^2 + n^2 = 1.
            5. Angles = cos inverse of each.
  TRAP      Confusing ratios with cosines. Cosines are divided by |r|;
            ratios are not. Also: use AB, not the coordinates of B alone.
```

```
  PATTERN 7 — MIDPOINT                                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the midpoint of the join of P and Q."
  METHOD    Midpoint = ( p + q ) / 2.  Add and halve. That is all.
  TRAP      Subtracting instead of adding. The midpoint of a join uses a
            PLUS; the vector of the join uses a MINUS.
```

```
  PATTERN 8 — CENTROID OF A TRIANGLE OR TETRAHEDRON                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the centroid of the triangle / tetrahedron with vertices..."
  METHOD    1. Count the corners:  3 -> triangle ,  4 -> tetrahedron.
            2. Add the position vectors.
            3. Divide by the number of corners.
  TRAP      Dividing a tetrahedron by 3. Count first.
```

```
  PATTERN 9 — VECTOR EQUATION OF A LINE: POINT + DIRECTION          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the vector equation of the line through the point ...
             and parallel to the vector ..."
  METHOD    r = a + t b ,  t in R.
            The POINT is the free term. The DIRECTION sits with t.
  TRAP      Swapping them round. Also, always write "t in R" at the end.
```

```
  PATTERN 10 — VECTOR EQUATION OF A LINE THROUGH TWO POINTS         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the vector equation of the line joining the points ..."
  METHOD    1. Direction = b - a.
            2. r = a + t ( b - a ) ,  or equivalently r = (1-t) a + t b.
            3. You may simplify the direction by dividing out a common
               factor — the line is unchanged.
  TRAP      Writing r = a + t b (parallel to b) instead of a + t(b - a).
            "Through two points" always needs the SUBTRACTION.
```

```
  PATTERN 11 — VECTOR EQUATION OF A PLANE THROUGH 3 POINTS     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the vector equation of the plane passing through the
             points ... , ... and ..."
  METHOD    1. r = a + s (b - a) + t (c - a) ,  s, t in R
            2. Or the equivalent expanded form
                  r = (1 - s - t) a + s b + t c
            3. Either form is accepted. Write "s, t in R".
  TRAP      Using only ONE parameter — that is a line, not a plane.
            A plane needs TWO independent parameters.
```

```
  PATTERN 12 — STATE A DEFINITION OR A LAW                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define a unit vector / coplanar vectors / the zero vector."
            "State the parallelogram law of addition."
            "State the properties of vector addition."
  METHOD    Write the definition in ONE precise sentence, then give a
            one-line example or a small labelled diagram.
  TRAP      Vagueness. "A unit vector is a small vector" earns nothing.
            "A unit vector is a vector of magnitude 1" earns full marks.
```

---

# THE 4-MARK PATTERNS (Section B — answer any 5 of 7)

```
  PATTERN 13 — SECTION FORMULA, INTERNAL AND EXTERNAL               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the position vector of the point dividing the join of
             ... and ... (i) internally (ii) externally in the ratio m : n."
  METHOD    1. Name the FIRST point a and the SECOND point b.
            2. INTERNAL:  r = ( m b + n a ) / ( m + n )
            3. EXTERNAL:  r = ( m b - n a ) / ( m - n )
            4. Simplify. If m < n the external denominator is NEGATIVE —
               carry the sign carefully.
            5. Check the internal answer lies BETWEEN a and b.
  TRAP      Cross-over error. m goes with the SECOND point b, n with the
            FIRST point a. Test with m = n = 1: you must get the midpoint.
```

```
  PATTERN 14 — FIND THE RATIO IN WHICH A POINT DIVIDES A JOIN       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "In what ratio does the point P divide AB?"
            "Find the ratio in which the point ... divides ..."
  METHOD    1. Let the ratio be  k : 1  (one unknown, not two).
            2. Write  p = ( k b + a ) / ( k + 1 ).
            3. Compare ONE component, solve for k.
            4. VERIFY with the other two components.
            5. Answer  k : 1. If k is negative, the division is EXTERNAL
               and the ratio is |k| : 1 externally.
  TRAP      Forgetting to verify with the other components. If they do
            not agree, the point is not on the line at all.
```

```
  PATTERN 15 — PROVE THREE POINTS ARE COLLINEAR                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the points with position vectors ... are collinear."
  METHOD    1. Name them P, Q, R.
            2. PQ = Q - P    and    PR = R - P.
            3. Show PR = t PQ for some number t (check every component).
            4. Conclusion sentence: "PR is parallel to PQ and they have
               the point P in common, therefore P, Q, R are COLLINEAR."
            5. Bonus mark: from t you can state the ratio, e.g. PR = 3 PQ
               means Q divides PR in the ratio 1 : 2.
  TRAP      Stopping at "PR = 3 PQ" with no conclusion sentence.
            Also: comparing PQ with QR without a common point.
```

```
  PATTERN 16 — CLASSIFY A TRIANGLE FROM ITS VERTICES                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the points A, B, C form a right-angled /
             isosceles / equilateral triangle."
  METHOD    1. Find all three sides:  AB = b - a , BC = c - b , CA = a - c.
            2. Find the SQUARES of the lengths (skip the square roots).
            3. RIGHT-ANGLED : the two smaller squares add to the largest.
               ISOSCELES    : two of the squares are equal.
               EQUILATERAL  : all three squares are equal.
            4. NAME the special vertex: the right angle sits OPPOSITE
               the longest side.
  TRAP      Taking square roots too early — it wastes time and creates
            errors. Also: failing to name the vertex of the right angle.
```

```
  PATTERN 17 — POLYGON / CLOSED-FIGURE IDENTITY                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "In a pentagon ABCDE show that AB + BC + CD + DE + EA = 0"
            or "... = 3 AC" style identities.
  METHOD    1. Regroup the given vectors into nose-to-tail JOURNEYS whose
               letters chain up (AB + BC = AC, AE + ED + DC = AC, ...).
            2. Use every given vector exactly once.
            3. Each complete journey from X to Y collapses to XY.
            4. Add up the collapsed results.
  TRAP      Joining two vectors whose middle letters do not match.
            AB + CB is illegal; flip it to AB - BC first.
```

```
  PATTERN 18 — REGULAR HEXAGON IDENTITY                        4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "ABCDEF is a regular hexagon with centre O. Show that ..."
  METHOD    THE UNIVERSAL SETUP — put O at the origin, OA = a, OB = b:

                 A = a      B = b      C = b - a
                 D = -a     E = -b     F = a - b

            1. Write the setup and say "O is the midpoint of AD, BE, CF".
            2. Convert every required vector by HEAD MINUS TAIL.
            3. Collect the a terms and the b terms separately.
            4. Factorise the result into whichever vector the question
               wants (AB = b - a , AO = -a , AD = -2a ...).
  TRAP      Trying to argue geometrically with rhombuses and getting lost.
            The a/b setup above turns every hexagon question into
            two lines of arithmetic.
```

```
  PATTERN 19 — EXPRESS ONE VECTOR AS A LINEAR COMBINATION           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express d as a linear combination of a, b and c."
  METHOD    1. Write  d = x a + y b + z c.
            2. Compare i, j, k coefficients -> three equations.
            3. Solve any two by elimination, get the third unknown.
            4. VERIFY by substituting x, y, z into all three equations.
            5. Write the final line:  d = ... a + ... b + ... c.
  TRAP      Not verifying. If only two equations work, no such combination
            exists (a, b, c were coplanar) — and saying so is the answer.
```

```
  PATTERN 20 — PARALLELOGRAM MIDPOINT PROBLEM                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "ABCD is a parallelogram, L and M are midpoints of BC and CD.
             Express AL and AM in terms of AB and AD, and show
             AL + AM = (3/2) AC."
  METHOD    1. Take A as the origin. Let AB = b and AD = d.
            2. Then B = b , D = d , C = b + d , and AC = b + d.
            3. Write each named midpoint using ( sum of ends ) / 2.
            4. Compute the required combination and factorise out (b + d).
  TRAP      Forgetting that C = b + d in a parallelogram. Everything
            depends on that one line.
```

```
  PATTERN 21 — CENTROID IDENTITY PROOF                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that PA + PB + PC = 3 PG" , "OA + OB + OC = 3 OG" ,
            "GA + GB + GC = 0".
  METHOD    1. Take any origin O. Write g = (a + b + c)/3.
            2. Convert every vector to head minus tail:  PA = a - p.
            3. Add and collect:  (a + b + c) - 3p = 3g - 3p = 3(g - p).
            4. Recognise 3(g - p) as 3 PG.
  TRAP      Not writing the centroid as (a+b+c)/3 at the start. Without
            that substitution the proof cannot close.
```

```
  PATTERN 22 — PROVE A STANDARD GEOMETRY RESULT              4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove by the vector method that the diagonals of a
             parallelogram bisect each other" ,
            "... the line joining the midpoints of two sides of a triangle
             is parallel to the third side and half of it".
  METHOD    1. Choose the origin at a convenient vertex.
            2. Name the two basic edges b and d (or use a, b, c for
               a triangle).
            3. Write every other point in terms of them.
            4. Compute BOTH of the things the question compares.
            5. Show they are equal, or one is a multiple of the other.
            6. Finish with a full English conclusion sentence.
  TRAP      Skipping the conclusion sentence. In a "prove" question the
            final sentence is worth a mark on its own.
```

---

# THE 7-MARK PATTERNS (Section C — Q21 is one of these)

```
  PATTERN 23 — PROVE FOUR POINTS ARE COPLANAR              7 marks  ***
  ------------------------------------------------------------------------
  TRIGGER   "If a, b, c are non-coplanar vectors, prove that the points
             ... , ... , ... , ... are coplanar."
  METHOD    1. Name the four points P, Q, R, S.
            2. Form THREE vectors from the SAME point P:
                  PQ = Q - P ,  PR = R - P ,  PS = S - P
            3. Assume  PS = x (PQ) + y (PR).
            4. Say the magic sentence: "since a, b, c are non-coplanar
               they are linearly independent, so we may compare
               coefficients."
            5. Compare the coefficients of a, b, c -> THREE equations
               in TWO unknowns.
            6. Solve the two easiest equations for x and y.
            7. VERIFY in the third equation. (This step earns marks.)
            8. Conclude: "PS is a linear combination of PQ and PR, and
               all four points contain P, therefore they are COPLANAR."
  TRAP      Forming vectors from different starting points (PQ, QR, RS).
            They must all start at the SAME point.
            Also: not verifying with the third equation.
```

```
  PATTERN 24 — POINT OF INTERSECTION OF TWO LINES          7 marks  ***
  ------------------------------------------------------------------------
  TRIGGER   "Find the point of intersection of the line through the
             points ... and ... with the line joining ... and ..."
            (usually with a, b, c stated as non-coplanar)
  METHOD    1. LINE 1:  r = (1 - t) P + t Q. Expand and collect the
               coefficients of a, b, c.
            2. LINE 2:  r = (1 - s) R + s S. Same, with a DIFFERENT letter.
            3. Set the two equal and compare the coefficients of a, b, c.
               (Say why you may: they are non-coplanar.)
            4. That gives three equations in two unknowns. Solve two.
            5. VERIFY in the third. If it fails, the lines are SKEW.
            6. Substitute t back into LINE 1 for the point, and confirm
               with LINE 2.
  TRAP      Using t for both lines. Use t and s.
            Also: forgetting the final confirmation in the second line.
```

```
  PATTERN 25 — MEDIANS OF A TRIANGLE ARE CONCURRENT                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove by the vector method that the medians of a triangle
             are concurrent" / "... meet at the centroid" /
            "the centroid divides each median in the ratio 2 : 1".
  METHOD    1. Let A, B, C have position vectors a, b, c.
            2. Midpoints:  D = (b+c)/2 , E = (c+a)/2 , F = (a+b)/2.
            3. On the median AD, take the point dividing it 2 : 1 from A.
               Section formula gives (a + b + c)/3.
            4. REPEAT on BE and on CF. Both give the SAME answer.
            5. Conclude: one point lies on all three medians, so the
               medians are concurrent; the point is the centroid
               G = (a+b+c)/3, dividing each median 2 : 1 from the vertex.
  TRAP      Doing only ONE median. The whole point of the proof is that
            all three give the same symmetric answer. Do all three.
```

```
  PATTERN 26 — TRISECTION / DIVIDING A DIAGONAL                     7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that DE and BF trisect the diagonal AC of the
             parallelogram ABCD."
  METHOD    1. Origin at A. Let AB = b, AD = d, so C = b + d.
            2. Write the diagonal as  k ( b + d ).
            3. Write the first cutting line with a parameter u; equate to
               k(b+d); compare coefficients of b and d; solve for u and k.
            4. Repeat for the second cutting line with a parameter v.
            5. Show the two k values are 1/3 and 2/3.
            6. Conclude: the two points cut AC into three equal parts.
  TRAP      Reusing the same parameter for both lines. And forgetting to
            state that b and d are non-parallel, which is why comparing
            coefficients is allowed.
```

```
  PATTERN 27 — RATIO IN WHICH TWO CEVIANS CUT EACH OTHER            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "In triangle OAB, E is the midpoint of OB, D divides AB in
             2 : 1, OD and AE meet at P. Find AP : PE and DP : PO."
  METHOD    1. Origin at O. OA = a, OB = b.
            2. Use the section formula to write EVERY named point
               (D, E, ...) in terms of a and b.
            3. P on the first line:   P = t D          (parameter t)
            4. P on the second line:  P = A + s(E - A) (parameter s)
            5. Compare coefficients of a and b -> two equations.
            6. Solve for t and s, and substitute back to CHECK both
               expressions give the same P.
            7. Read the ratios straight off the parameters:
                  s = 4/5  =>  AP : PE = 4 : 1
                  t = 3/5  =>  OP : PD = 3 : 2
  TRAP      Reading the ratio backwards. The parameter runs 0 at the
            START of the segment and 1 at the END. Write down which end
            is which before you divide.
```

```
  PATTERN 28 — LINEAR DEPENDENCE / INDEPENDENCE                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Are the vectors ... linearly dependent or independent?"
            "Show that a, b, c are coplanar / non-coplanar."
  METHOD    1. Write  x a + y b + z c = 0.
            2. Compare i, j, k coefficients -> three equations.
            3. If the ONLY solution is x = y = z = 0 -> INDEPENDENT
               (and the vectors are non-coplanar).
               If there is a non-zero solution -> DEPENDENT (coplanar).
            4. Shortcut for spotting dependence: look for an obvious
               combination that gives 0, e.g. (i-j) + (j-k) + (k-i) = 0.
  TRAP      Confusing the ladder. TWO dependent vectors are COLLINEAR;
            THREE dependent vectors are COPLANAR. Any FOUR vectors in
            3D space are automatically dependent.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right column. Read the question stem. Say the pattern number out loud.

| The question stem you see | Pattern |
|---|---|
| "The position vectors of A and B are ... Find AB and \|AB\|." | 1 |
| "Find the unit vector in the direction of a + b." | 2 |
| "Find the vector of magnitude 14 along the line joining A and B." | 3 |
| "OA = ..., AB = ..., BC = ..., CD = ... Find OD." | 4 |
| "If 2i + 3j + p k and 4i + 6j - 8k are collinear, find p." | 5 |
| "Find the direction cosines of the line joining (1,2,3) and (4,6,3)." | 6 |
| "Find the midpoint of the join of P(2,3,4) and Q(4,1,-2)." | 7 |
| "Find the centroid of the tetrahedron whose vertices are ..." | 8 |
| "Find the vector equation of the line through ... parallel to ..." | 9 |
| "Find the vector equation of the line joining the points ..." | 10 |
| "Find the vector equation of the plane passing through the points ..." | 11 |
| "Define a unit vector. State the parallelogram law." | 12 |
| "Find the point dividing the join ... internally and externally in 2 : 3." | 13 |
| "In what ratio does the point P divide AB?" | 14 |
| "Show that the points with position vectors ... are collinear." | 15 |
| "Show that A, B, C form a right-angled triangle." | 16 |
| "In a pentagon ABCDE show that AB + AE + BC + DC + ED + AC = 3 AC." | 17 |
| "ABCDEF is a regular hexagon with centre O. Show that ..." | 18 |
| "Express d as a linear combination of a, b and c." | 19 |
| "ABCD is a parallelogram, L and M are midpoints of BC and CD ..." | 20 |
| "Show that PA + PB + PC = 3 PG." | 21 |
| "Prove that the diagonals of a parallelogram bisect each other." | 22 |
| "If a, b, c are non-coplanar, prove that these four points are coplanar." | **23** |
| "Find the point of intersection of the line through ... with the line joining ..." | **24** |
| "Prove that the medians of a triangle are concurrent." | **25** |
| "Show that DE and BF trisect the diagonal AC." | **26** |
| "OD and AE intersect at P. Find AP : PE and DP : PO." | **27** |
| "Are the vectors i - j, j - k, k - i linearly dependent?" | 28 |

The five in **bold** are the 7-mark ones. If you can only master five patterns
in this chapter, master those five.

---

# THE ONE-PAGE DECISION TREE

```
                        READ THE QUESTION
                                |
              +-----------------+------------------+
              |                                    |
     Does it give me POINTS?              Does it give me VECTORS
              |                            in i, j, k or in a, b, c?
              |                                    |
     WRITE  AB = b - a                    Is a letter missing?
              |                                    |
     +--------+--------+                  +--------+--------+
     |        |        |                  |                 |
  A ratio  A word:  Nothing            "collinear"      "linear
  m : n    prove    special             -> PATTERN 5     combination"
     |        |        |                                 -> PATTERN 19
  SECTION    |     magnitude?
  FORMULA    |     -> |AB|
  P.13/14    |
             |
     +-------+--------+---------+----------+
     |       |        |         |          |
  "collinear" "coplanar" "concurrent" "trisect"  "intersect"
     |          |          |            |            |
   P.15       P.23       P.25         P.26         P.24
   (4M)       (7M)       (7M)         (7M)         (7M)
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 1 — LEARN THESE FIRST. 2 MARKS, ZERO THINKING.                |
  |                                                                     |
  |     Pattern 1   AB = b - a  and  |AB|                               |
  |     Pattern 2   unit vector = a / |a|                               |
  |     Pattern 6   direction cosines                                   |
  |     Pattern 8   centroid                                            |
  |                                                                     |
  |     Time needed: ONE EVENING.   Value: 2 marks, guaranteed.         |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 2 — THE SECTION B QUESTION. 4 MARKS.                          |
  |                                                                     |
  |     Pattern 13  section formula, internal AND external              |
  |     Pattern 15  prove three points collinear                        |
  |                                                                     |
  |     Between them these two cover most Section B appearances of      |
  |     this chapter.                                                   |
  |                                                                     |
  |     Time needed: ONE EVENING.   Value: 4 marks.                     |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 3 — THE SECTION C QUESTION (Q21). 7 MARKS.                    |
  |                                                                     |
  |     Pattern 23  four points are coplanar        <-- do this one     |
  |     Pattern 24  point of intersection of two lines  <-- and this    |
  |                                                                     |
  |     These two shapes account for the majority of Q21 appearances,   |
  |     and they use the SAME skill: compare the coefficients of        |
  |     a, b and c. Learn one and you have most of the other.           |
  |                                                                     |
  |     Time needed: ONE MORNING + three practice problems each.        |
  |     Value: 7 marks.                                                 |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |  TIER 4 — INSURANCE. Learn ONE geometry proof word for word.        |
  |                                                                     |
  |     Pattern 22  the diagonals of a parallelogram bisect each other  |
  |                 (six lines long — the shortest 7-mark proof in the  |
  |                 whole of Maths IA)                                  |
  |                                                                     |
  |     If Q21 turns out to be a proof instead of a calculation, the    |
  |     same technique (origin at a vertex, name two edges) still gets  |
  |     you 4 of the 7 marks on ANY of the standard proofs.             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    RUNNING TOTAL FROM THIS ONE CHAPTER                              |
  |                                                                     |
  |       Tier 1   Section A  Q4          2 marks                       |
  |       Tier 2   Section B  Q12/Q13     4 marks                       |
  |       Tier 3   Section C  Q21         7 marks                       |
  |                                     ------------                    |
  |                                      13 marks out of 75             |
  |                                                                     |
  |    The pass mark for the entire Maths IA paper is 26.               |
  |    This chapter alone, done properly, is HALF of a pass —           |
  |    and it is the least amount of thinking per mark anywhere         |
  |    in the syllabus.                                                 |
  |                                                                     |
  |    Do Chapter 5 (Product of Vectors) next. It reuses AB = b - a     |
  |    and |a| on every single question, so you are already halfway     |
  |    through it.                                                      |
  |                                                                     |
  +---------------------------------------------------------------------+
```
