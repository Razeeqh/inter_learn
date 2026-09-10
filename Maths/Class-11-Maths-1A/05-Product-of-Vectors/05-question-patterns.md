# Product of Vectors — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — FIND a . b FROM COMPONENTS                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two vectors given in i, j, k form. "Find a . b."
  METHOD    1. Write the two rows of numbers one under the other,
               including any zeros.
            2. Multiply the i's, multiply the j's, multiply the k's.
            3. ADD the three results.
  TRAP      A missing component is a ZERO, not "nothing".
            Write  c = j + k  as  c = 0i + 1j + 1k  before you start.
```

```
  PATTERN 2 — FIND a . b FROM LENGTHS AND ANGLE                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   The question gives |a| , |b| and an angle in degrees.
  METHOD    1. a . b = |a| |b| cos(theta)
            2. Substitute and evaluate the cosine.
  TRAP      cos 90 = 0 , cos 120 = -1/2 , cos 180 = -1.
            If the angle is obtuse, the answer MUST be negative.
```

```
  PATTERN 3 — ANGLE BETWEEN TWO VECTORS                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between ..." with vectors in i, j, k form.
  METHOD    1. Compute a . b .
            2. Compute |a| .
            3. Compute |b| .
            4. cos theta = (a.b) / ( |a| |b| ) , then read off theta.
  TRAP      If cos theta is NEGATIVE, keep the minus sign. It means the
            angle is obtuse (between 90 and 180 degrees).
            Never write "theta = 60" when cos theta = -1/2; it is 120.
```

```
  PATTERN 4 — FIND x SO THAT TWO VECTORS ARE PERPENDICULAR        2 marks
  ------------------------------------------------------------------------
  TRIGGER   One letter hidden inside a vector, plus the words
            "perpendicular" or "orthogonal" or "at right angles".
  METHOD    1. Write  a . b = 0 .
            2. Expand the dot product; you get one simple equation in x.
            3. Solve it.
  TRAP      "Perpendicular" is DOT = 0.  "Parallel" is CROSS = 0.
            Reading the wrong one costs the whole question.
```

```
  PATTERN 5 — SHOW TWO VECTORS ARE PERPENDICULAR                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show / prove that a and b are perpendicular."
  METHOD    1. Compute a . b .
            2. Show it equals 0.
            3. State the conclusion in words:
               "Since a . b = 0, a is perpendicular to b."
  TRAP      Stopping at "= 0". The final sentence is worth a mark.
```

```
  PATTERN 6 — FIND |a + b| OR |a - b|                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   |a| , |b| and the angle are given; the question wants
            the length of the sum or difference.
  METHOD    1. a . b = |a||b| cos theta
            2. |a + b|^2 = |a|^2 + |b|^2 + 2(a.b)
               |a - b|^2 = |a|^2 + |b|^2 - 2(a.b)
            3. Take the square root at the END.
  TRAP      Writing (a + b)^2. That notation does not exist for vectors.
            You must write |a + b|^2 or (a + b).(a + b).
```

```
  PATTERN 7 — FIND |a + b| GIVEN |a| , |b| AND |a - b|            2 marks
  ------------------------------------------------------------------------
  TRIGGER   Three magnitudes given, a fourth one wanted.
  METHOD    1. Expand |a - b|^2 = |a|^2 + |b|^2 - 2(a.b) and solve for a.b.
            2. Put that a.b into |a + b|^2 = |a|^2 + |b|^2 + 2(a.b).
            3. Square root.
  SHORTCUT  |a+b|^2 + |a-b|^2 = 2(|a|^2 + |b|^2). One line, done.
  TRAP      Forgetting that a.b may come out negative. That is fine.
```

```
  PATTERN 8 — USING  a + b + c = 0                            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The condition "a + b + c = 0" appears anywhere in the question.
  METHOD    1. Take the SQUARE OF THE LENGTH of both sides:
                  |a + b + c|^2 = 0
            2. Expand:
                  |a|^2 + |b|^2 + |c|^2 + 2(a.b + b.c + c.a) = 0
            3. Substitute the given magnitudes and solve.
            ALTERNATIVE for an angle question: move one vector across,
            e.g.  c = -(a + b) , then take |c|^2.
  TRAP      Trying to solve it component by component. You are never given
            components in this pattern - only lengths.
```

```
  PATTERN 9 — PROJECTION OF ONE VECTOR ON ANOTHER                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   The word "projection" (sometimes "the length of the shadow").
  METHOD    1. Circle the word "ON" in the question. The vector after it
               is the one you divide by.
            2. Projection of a on b = (a . b) / |b| .
            3. Rationalise the surd if you like; it is not compulsory.
  TRAP      Dividing by |a| instead of |b|. Read the word "on".
  TRAP      Making a negative answer positive. The sign carries meaning.
```

```
  PATTERN 10 — COMPONENTS ALONG AND PERPENDICULAR TO b            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the components of a along and perpendicular to b."
  METHOD    1. Compute a . b .
            2. Compute |b|^2  (NO square root).
            3. ALONG b        =  ((a.b)/|b|^2) b            [a VECTOR]
            4. PERPENDICULAR  =  a  -  (the answer to step 3)
            5. CHECK: the two pieces must add back up to a, and the
               perpendicular piece dotted with b must give 0.
  TRAP      Using |b| instead of |b|^2 in step 3. The answer is a vector,
            so you divide by the length TWICE.
```

```
  PATTERN 11 — WORK DONE BY A FORCE                           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Force", "moves a particle from A to B", "work done".
  METHOD    1. If several forces, ADD them first:  F = F1 + F2 + ...
            2. d = B - A     (final position minus initial position)
            3. W = F . d
  TRAP      Writing d = A - B. That flips the sign of the whole answer.
  TRAP      Using the cross product. Work is a NUMBER, so it is the DOT.
```

```
  PATTERN 12 — FIND a x b BY DETERMINANT                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find a x b" with both vectors in i, j, k form.
  METHOD    1. Write the sign board  + - +  above the determinant.
            2. Row 1 = i j k ,  Row 2 = FIRST vector ,  Row 3 = SECOND.
            3. Cover column 1 -> the i part.
               Cover column 2 -> the j part, then PUT A MINUS IN FRONT.
               Cover column 3 -> the k part.
            4. Write the answer as ( )i + ( )j + ( )k.
            5. CHECK: a.(a x b) = 0 and b.(a x b) = 0.
  TRAP      Forgetting the minus on the j term. Number one cause of
            lost marks in this whole chapter.
  TRAP      Putting the SECOND vector in the middle row. Every sign flips.
```

```
  PATTERN 13 — FIND |a x b| USING LAGRANGE                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   The question gives |a| , |b| and a.b (or |a x b|) and asks
            for the missing one. NO components anywhere.
  METHOD    1. |a x b|^2 + (a.b)^2 = |a|^2 |b|^2
            2. Substitute the two known quantities.
            3. Solve, then square root.
  TRAP      Forgetting to square root at the end.
```

```
  PATTERN 14 — UNIT VECTOR PERPENDICULAR TO TWO VECTORS           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Unit vector perpendicular to both a and b", or
            "unit vector normal to the plane through A, B, C".
  METHOD    1. If POINTS are given, first form AB and AC.
            2. Compute the cross product.
            3. Pull out any common factor - it makes step 4 much easier.
            4. Divide by the magnitude.
            5. Write "+/-" in front.
  TRAP      Omitting the +/- . There are TWO such unit vectors.
```

```
  PATTERN 15 — VECTOR OF GIVEN MAGNITUDE, PERPENDICULAR TO BOTH   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find a vector of magnitude m perpendicular to both a and b."
  METHOD    1. Compute a x b .
            2. Compute |a x b| .
            3. Answer = m (a x b) / |a x b| .
  TRAP      Stopping at the unit vector and forgetting to multiply by m.
```

```
  PATTERN 16 — PROVE PARALLEL / COLLINEAR, OR FIND lambda         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "parallel", "collinear", "the three points lie on a line".
  METHOD    For VECTORS: show a x b = 0, or match the ratios
                 a1/b1 = a2/b2 = a3/b3 .
            For POINTS A, B, C: show AB x AC = 0,
                 or show AB = k AC for some number k.
  TRAP      Do not build a determinant when the ratios settle it in
            five seconds.
```

```
  PATTERN 17 — AREA OF A TRIANGLE                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area of the triangle whose vertices are ..." or
            "... two of whose sides are ...".
  METHOD    1. If VERTICES are given, form AB = B - A and AC = C - A,
               both from the SAME vertex.
            2. Compute AB x AC.
            3. Area = (1/2) |AB x AC| .
            4. Write "square units".
  TRAP      Forming AB and BC (different starting points). Always use two
            vectors that share a vertex.
  TRAP      Forgetting the 1/2.
```

```
  PATTERN 18 — AREA OF A PARALLELOGRAM                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Area of the parallelogram whose SIDES / DIAGONALS are ..."
  METHOD    SIDES a and b        ->  Area = |a x b|            NO half
            DIAGONALS d1 and d2  ->  Area = (1/2)|d1 x d2|     USE half
  TRAP      Reading "sides" when the word is "diagonals", or the reverse.
            Underline that word before you calculate anything.
```

```
  PATTERN 19 — MOMENT OF A FORCE ABOUT A POINT                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the moment of the force F acting at A about the point P."
  METHOD    1. If the force is given as a segment AB, then F = B - A.
            2. r = (point where the force acts) - (the pivot) = A - P.
            3. Moment = r x F .           [answer is a VECTOR]
  TRAP      Getting r backwards. It runs FROM the pivot TO the point where
            the force acts. Reversing it reverses the whole answer.
```

```
  PATTERN 20 — MOMENT OF A FORCE ABOUT A LINE                 4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "... about the line through P in the direction ...".
  METHOD    1. r = A - P as before.
            2. Compute r x F .
            3. Make the direction vector a UNIT vector u.
            4. Moment = (r x F) . u = [ r  F  u ] .   [answer is a NUMBER]
  TRAP      Not converting the direction to a unit vector.
  TRAP      Giving a vector answer. About a LINE the moment is a NUMBER.
```

```
  PATTERN 21 — EVALUATE A SCALAR TRIPLE PRODUCT               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find [a b c]" or "Find a . (b x c)".
  METHOD    1. FIRST look for a shortcut:
                 - two of the vectors identical  ->  answer 0
                 - the vectors clearly proportional -> answer 0
                 - constants outside -> slide them out
            2. Otherwise write the 3 x 3 determinant, a on top, then b,
               then c, and expand along the row with the most zeros.
  TRAP      Putting the vectors in the wrong rows. It only changes the
            SIGN, but the sign is often what the question is testing.
```

```
  PATTERN 22 — VOLUME OF A PARALLELEPIPED                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Volume of the parallelepiped with coterminous edges ..."
  METHOD    1. Evaluate [a b c] as a determinant.
            2. Volume = |[a b c]| .
            3. Write "cubic units".
  TRAP      Leaving a negative answer. A volume is never negative -
            take the modulus at the end.
```

```
  PATTERN 23 — VOLUME OF A TETRAHEDRON                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   The word "tetrahedron", or four vertices A, B, C, D.
  METHOD    1. Form AB, AC, AD, all from the SAME vertex A.
            2. Evaluate [AB AC AD].
            3. Volume = (1/6) | [AB AC AD] | .
  TRAP      Forgetting the 1/6.
  TRAP      Using edges that do not all start from the same vertex.
```

```
  PATTERN 24 — COPLANARITY                                    4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... are coplanar", "lie in the same plane",
            or "Find lambda so that they are coplanar".
  METHOD    For THREE VECTORS: show [a b c] = 0.
            For FOUR POINTS   : form AB, AC, AD and show [AB AC AD] = 0.
            To FIND lambda    : write the determinant with lambda in it,
                                set it equal to 0, and solve the resulting
                                linear equation.
  TRAP      Expanding the determinant carelessly when lambda sits in the
            middle. Expand along the row or column that does NOT contain
            lambda whenever you can.
```

```
  PATTERN 25 — PROVE A SCALAR TRIPLE PRODUCT IDENTITY         4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove [a+b, b+c, c+a] = 2[a b c]" ,
            "Prove [a x b, b x c, c x a] = [a b c]^2" , and similar.
  METHOD    1. Rewrite the triple product as a DOT with a CROSS:
                  [p q r] = p . (q x r)
            2. Expand the cross product using the distributive rule.
            3. Kill every term containing a repeated vector - it is 0.
            4. Use the cyclic property [b c a] = [a b c] to tidy up.
  TRAP      Trying to expand everything at once. Do the cross first,
            then the dot, and cross out the zero terms as you go.
```

```
  PATTERN 26 — SIMPLIFY A VECTOR TRIPLE PRODUCT                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   A cross product with a BRACKET inside it:  a x (b x c).
  METHOD    1. Apply  a x (b x c) = (a.c) b - (a.b) c    ["BAC - CAB"]
               or     (a x b) x c = (a.c) b - (b.c) a
            2. Compute the two dot products - they are just numbers.
            3. Substitute and collect the i, j, k terms.
  TRAP      Doing two full cross products instead. It works, but it takes
            three times as long and invites arithmetic slips.
  TRAP      Mixing up which formula goes with which bracket position.
            In BOTH formulas the surviving vectors are the two that are
            NOT alone outside the bracket... check by testing with i, j, k
            if you are unsure.
```

```
  PATTERN 27 — SHOW THE CROSS PRODUCT IS NOT ASSOCIATIVE      2 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that a x (b x c) is not equal to (a x b) x c."
  METHOD    Quick 2-mark version:
              i x (i x j) = i x k = -j
              (i x i) x j = 0 x j = 0
              -j is not 0, so it is not associative.
            Full 7-mark version:
              1. Compute a x (b x c) using BAC - CAB.
              2. Compute (a x b) x c using its formula.
              3. Show the two answers differ.
              4. Optionally verify each by the long determinant route.
  TRAP      Concluding "they are never equal". They CAN be equal in
            special cases (when a and c are collinear). The correct
            statement is "not equal in general".
```

```
  PATTERN 28 — PROVE A GEOMETRY THEOREM BY VECTORS            *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Prove by vector methods that ..." followed by the cosine
            rule, the sine rule, the angle in a semicircle, the diagonals
            of a rhombus, or cos(A - B).
  METHOD    A fixed 4-step recipe:
            1. SET UP - name the vectors from one convenient point
               (a vertex, or the centre of the circle, or the origin).
            2. TRANSLATE - write the thing to be proved in vector form.
                  a LENGTH   -> take |...|^2 = (...).(...)
                  an ANGLE   -> use the dot product
                  an AREA    -> use the cross product
            3. EXPAND - open the brackets, and use a.b = b.a , a x a = 0 .
            4. SUBSTITUTE the given conditions and read off the result.
  TIME      About 10 minutes. Practise writing one out on paper, timed.
  TRAP      Not defining your vectors clearly at the start. Half the marks
            in these questions are for a clean set-up.
```

```
  PATTERN 29 — PERPENDICULAR DISTANCE FROM A POINT TO A LINE      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the perpendicular distance from P to the line through A
            with direction u."
  METHOD    1. AP = P - A .
            2. Compute AP x u .
            3. d = |AP x u| / |u| .
  TRAP      Dividing by |AP| instead of |u|.
```

```
  PATTERN 30 — PRODUCTS OF FOUR VECTORS                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two brackets, each containing a cross:  (a x b) . (c x d)
            or  (a x b) x (c x d).
  METHOD    SCALAR case:  (a x b).(c x d) = (a.c)(b.d) - (a.d)(b.c)
                          (first letters down the rows, second across)
            VECTOR case:  (a x b) x (c x d) = [a b d] c - [a b c] d
  TRAP      Getting the pairing wrong. Rebuild it from Lagrange if you
            forget: put c = a and d = b and you should get
            |a x b|^2 = |a|^2|b|^2 - (a.b)^2.
```

---

# SELF-TEST

Cover the right-hand column. If you cannot answer in 10 seconds, that row
is your revision for tonight.

| # | Question | Answer |
|---|---|---|
| 1 | a . b in component form | a1b1 + a2b2 + a3b3 |
| 2 | a . b from lengths and angle | \|a\|\|b\| cos theta |
| 3 | Formula for the angle between two vectors | cos theta = (a.b)/(\|a\|\|b\|) |
| 4 | Condition for PERPENDICULAR | a . b = 0 |
| 5 | Condition for PARALLEL | a x b = 0 |
| 6 | Condition for COPLANAR | [a b c] = 0 |
| 7 | Projection of a on b | (a . b)/\|b\| |
| 8 | Component of a along b | ((a.b)/\|b\|^2) b |
| 9 | Component of a perpendicular to b | a - ((a.b)/\|b\|^2) b |
| 10 | Work done by a force | W = F . d , d = B - A |
| 11 | Which row of the cross-product determinant is i j k? | the TOP row |
| 12 | Which term of the cross product carries a minus? | the j term |
| 13 | i x j , j x k , k x i | k , i , j |
| 14 | j x i | -k |
| 15 | a x a | the ZERO VECTOR |
| 16 | a . a | \|a\|^2 |
| 17 | Lagrange's identity | \|a x b\|^2 + (a.b)^2 = \|a\|^2\|b\|^2 |
| 18 | Unit vector perpendicular to a and b | +/- (a x b)/\|a x b\| |
| 19 | Area of a triangle from vertices | (1/2)\|AB x AC\| |
| 20 | Area of a parallelogram from SIDES | \|a x b\| |
| 21 | Area of a parallelogram from DIAGONALS | (1/2)\|d1 x d2\| |
| 22 | Moment about a POINT | r x F (a vector) |
| 23 | Moment about a LINE | [r F u] (a number) |
| 24 | [a b c] as a determinant | rows a, b, c |
| 25 | Volume of a parallelepiped | \|[a b c]\| |
| 26 | Volume of a tetrahedron | (1/6)\|[a b c]\| |
| 27 | The cyclic property | [a b c] = [b c a] = [c a b] |
| 28 | Value of [a b c] when two vectors are equal | 0 |
| 29 | a x (b x c) | (a.c)b - (a.b)c |
| 30 | (a x b) x c | (a.c)b - (b.c)a |
| 31 | [a+b, b+c, c+a] | 2[a b c] |
| 32 | [a-b, b-c, c-a] | 0 |
| 33 | [a x b, b x c, c x a] | [a b c]^2 |
| 34 | (a x b).(c x d) | (a.c)(b.d) - (a.d)(b.c) |
| 35 | Distance from a point to a line | \|AP x u\|/\|u\| |
| 36 | Is the cross product associative? | NO |
| 37 | \|a - b\| for unit vectors at angle theta | 2 sin(theta/2) |
| 38 | \|a+b\|^2 + \|a-b\|^2 | 2(\|a\|^2 + \|b\|^2) |

**Scoring yourself:**

```
  30 or more right   ->  you are ready for the Section C question
  20 to 29           ->  you are safe for Sections A and B
  under 20           ->  go back to 02-formulae.md and rewrite
                         "THE 15 FORMULAE TO WRITE ON YOUR PALM"
                         by hand, three times
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   TIER 1 - THE 2-MARK GUARANTEES        (learn these FIRST)         |
  |                                                                     |
  |   Patterns  1  3  4  5  9  12  14  17                               |
  |                                                                     |
  |   That is:  dot product, angle, perpendicularity, projection,       |
  |             cross product, unit normal, area of a triangle.         |
  |                                                                     |
  |   Time needed: one afternoon.                                       |
  |   Marks secured: 2 to 4 in Section A, which you MUST attempt.       |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   TIER 2 - THE 4-MARK BLOCK             (learn these SECOND)        |
  |                                                                     |
  |   Patterns  10  11  18  19  21  22  23  24                          |
  |                                                                     |
  |   That is:  components, work done, parallelogram area, moment,      |
  |             scalar triple product, volumes, coplanarity.            |
  |                                                                     |
  |   Every one of these is ONE determinant plus one small step.        |
  |                                                                     |
  |   Time needed: one evening.                                         |
  |   Marks secured: 4 in Section B.                                    |
  |                                                                     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |                                                                     |
  |   TIER 3 - THE 7-MARK ANSWER            (learn these LAST)          |
  |                                                                     |
  |   Pattern 28  (cosine rule and sine rule proofs)                    |
  |   Pattern 27  (vector triple product, both ways)                    |
  |   Pattern 25  (scalar triple product identities)                    |
  |                                                                     |
  |   Learn Pattern 28 properly and you have a Section C answer that    |
  |   NEVER changes - the same proof works every single year.           |
  |                                                                     |
  |   Time needed: one evening, writing it out by hand twice.           |
  |   Marks secured: 7 in Section C.                                    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Add it up:**

```
       Tier 1     ->    2 to 4 marks       (Section A)
       Tier 2     ->    4 marks            (Section B)
       Tier 3     ->    7 marks            (Section C)
       --------------------------------------------------
       TOTAL      ->   13 to 15 marks out of 75
```

**The honest truth about this chapter.** There is very little to understand
here and a great deal to practise. Almost every mark lost is lost to one of
five things:

```
  1.  The missing MINUS on the j term of a cross product.
  2.  Dividing by |b| when the formula wanted |b|^2.
  3.  Forgetting the 1/2 (triangle) or the 1/6 (tetrahedron).
  4.  Giving a vector answer where a number was wanted, or the reverse.
  5.  Sign slips inside a 3 x 3 determinant.
```

Not one of those is about intelligence. They are all about writing the
numbers down carefully in rows before you multiply. Do that, and this
chapter will give you marks every single year.
