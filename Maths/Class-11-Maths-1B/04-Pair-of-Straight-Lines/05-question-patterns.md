# Pair of Straight Lines — Every Question Pattern That Can Be Asked

**Maths 1B · Chapter 4**

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

The whole chapter is 30 shapes. Learn 12 of them and you have every mark this
chapter can give you.

---

# GROUP A — THE HOMOGENEOUS PAIR  (a x^2 + 2h xy + b y^2 = 0)

```
  PATTERN 1 — ANGLE BETWEEN A HOMOGENEOUS PAIR                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the lines represented by
             3x^2 + 7xy + 2y^2 = 0"
            Only three terms: x^2, xy, y^2.

  METHOD    1. Write  a = _ ,  h = (xy coefficient)/2 ,  b = _
            2. FIRST check  a + b .  If it is 0, write "90 degrees". STOP.
            3. Otherwise compute  h^2 - ab  and take its square root.
            4. tan(theta) = 2 sqrt(h^2 - ab) / abs(a + b)
            5. If tan comes out as 1, sqrt(3), 1/sqrt(3), name the angle
               (45, 60, 30). Otherwise leave it as Arctan(...).

  TRAP      Forgetting to HALVE the xy coefficient.
            Forgetting abs() in the denominator, giving a negative tangent.
```

```
  PATTERN 2 — FIND k SO THE LINES ARE PERPENDICULAR               2 marks
  ------------------------------------------------------------------------
  TRIGGER   The word "perpendicular", "at right angles", or "theta = 90".

  METHOD    1. Set  a + b = 0 .
            2. Solve the one-line equation for k.
            3. (Optional but impressive) confirm h^2 - ab > 0 so the lines
               are real.

  TRAP      Trying to use the tan formula and getting stuck with a zero
            denominator. The condition is just a + b = 0.
```

```
  PATTERN 3 — FIND k SO THE LINES ARE COINCIDENT                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "coincident", "identical", "perfect square", "theta = 0",
            "the equation represents ONE line".

  METHOD    1. Set  h^2 = ab .
            2. Solve for k.
            3. Substitute back and show the equation really is a square,
               e.g. x^2 + 4xy + 4y^2 = (x + 2y)^2 .

  TRAP      Using a + b = 0 by mistake. That is PERPENDICULAR, the opposite.
```

```
  PATTERN 4 — STATE THE NATURE OF THE PAIR                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does the equation represent?" or
            "Are the lines real, coincident or imaginary?"

  METHOD    Compute  h^2 - ab  and read off:
                 > 0   real and distinct
                 = 0   coincident (one line, twice)
                 < 0   IMAGINARY -- "the only real point is the origin"

  TRAP      Writing "no solution" when the answer is imaginary.
            The correct sentence is: "the lines are imaginary; the equation
            represents only the point (0, 0)".
```

```
  PATTERN 5 — SEPARATE THE TWO LINES OF A HOMOGENEOUS PAIR        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the separate equations of the lines ..."
            "Find the individual equations ..."

  METHOD    METHOD A (fast):  split the middle term so the two pieces
                              multiply to a x b and add to 2h, then factorise
                              by grouping.
            METHOD B (safe):  solve  b m^2 + 2h m + a = 0  for the slopes,
                              then write  y = m1 x  and  y = m2 x  and
                              rearrange each into  Ax + By = 0 form.
            ALWAYS multiply your two factors back out as a check.

  TRAP      If b = 0 you cannot use the slope equation -- one line is
            vertical. Factorise directly: e.g. 3x^2 + 5xy = x(3x + 5y).
```

```
  PATTERN 6 — SUM AND PRODUCT OF THE SLOPES                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the sum / product of the slopes of ..."

  METHOD    m1 + m2 = -2h / b        m1 m2 = a / b
            (Note the denominator is b, the y^2 coefficient, NOT a.)

  TRAP      Swapping a and b. Remember the slope equation is
            b m^2 + 2h m + a = 0, so "a" is the CONSTANT of that quadratic
            and therefore appears in the PRODUCT.
```

```
  PATTERN 7 — "y = m x IS ONE OF THE LINES" -- FIND THE CONSTANT  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If one of the lines of ... is 3x + 4y = 0, find c"
            "If y = 2x is a line of the pair, find k"

  METHOD    1. Get the slope m of the given line (m = -A/B).
            2. Substitute into  b m^2 + 2h m + a = 0 .
            3. Solve for the unknown.
            EQUIVALENT ROUTE: substitute y = m x into the pair; the whole
            expression must vanish identically.

  TRAP      Sign of the slope. 3x + 4y = 0 has slope -3/4, not 3/4.
```

```
  PATTERN 8 — RATIO OF THE SLOPES                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the slope of one line is twice / three times / n times
             the other"  or  "the slopes are in the ratio p : q"

  METHOD    Use the ready result:      4 p q h^2  =  a b ( p + q )^2
            Special cases:   1 : 2   ->   8 h^2 = 9 a b
                             1 : 3   ->   3 h^2 = 4 a b
            To DERIVE it (if the proof is asked): put m1 = p t, m2 = q t,
            use the sum to find t, then substitute into the product.

  TRAP      Reading "twice" as the ratio 2 : 1 and writing (p+q)^2 = 9
            anyway -- it is the same, so this one is forgiving. But
            "in the ratio 2 : 3" needs (p + q)^2 = 25, not 5.
```

```
  PATTERN 9 — THE PAIR OF BISECTORS (HOMOGENEOUS)                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the bisectors of the angles between ..."

  METHOD    1. Write a, h, b.
            2.        x^2 - y^2        x y
                     -----------  =  -----
                        a - b           h
            3. Cross-multiply and bring everything to one side.
            4. CHECK: the coefficients of x^2 and y^2 must add to zero.

  TRAP      h = 0  ->  the answer is  xy = 0  (the two axes).
            a = b  ->  the answer is  x^2 - y^2 = 0.
            Do not divide by zero -- handle these two cases by inspection.
```

```
  PATTERN 10 — PAIR THROUGH O PERPENDICULAR TO A GIVEN PAIR       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the lines through the origin
             perpendicular to ..."

  METHOD    SWAP a and b, FLIP the sign of h:

                a x^2 + 2h xy + b y^2 = 0
                        becomes
                b x^2 - 2h xy + a y^2 = 0

  TRAP      Forgetting to flip the sign of the xy term.
            Quick check: the new pair must have the same h^2 - ab, so the
            angle between them is unchanged.
```

```
  PATTERN 11 — PAIR THROUGH O PARALLEL TO A GENERAL PAIR          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "the pair of lines through the origin parallel to
             2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0"

  METHOD    Delete the 2gx, 2fy and c terms. That is the whole answer:
                 2x^2 + 3xy - 2y^2 = 0

  TRAP      None -- but do not "simplify" further. Leave it as is.
            (Through a point (x0, y0) instead? Replace x by x - x0 and
             y by y - y0 in the three surviving terms.)
```

---

# GROUP B — THE GENERAL EQUATION  (all six terms)

```
  PATTERN 12 — SHOW THAT S = 0 REPRESENTS A PAIR OF LINES      3 of 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that <six-term equation> represents a pair of straight
             lines."

  METHOD    1. Write  a, h, b, g, f, c  -- HALVING h, g, f. (1 mark)
            2. Compute the FIVE pieces separately:
                    abc ,  2fgh ,  af^2 ,  bg^2 ,  ch^2
            3. Assemble  abc + 2fgh - af^2 - bg^2 - ch^2  and show it is 0.
            4. Also show  h^2 - ab > 0  and say "real and distinct".
            5. Write the conclusion as a SENTENCE.

  TRAP      Trying to do the five pieces in one line of arithmetic.
            Do them in a column. Almost every lost mark here is a sign slip.
```

```
  PATTERN 13 — FIND k / lambda SO THAT S = 0 IS A PAIR            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the value of k if <equation with k> represents a pair
             of straight lines."

  METHOD    1. Write a, h, b, g, f, c with k left in place.
            2. Put them into  abc + 2fgh - af^2 - bg^2 - ch^2 = 0 .
            3. You get a linear or quadratic equation in k. Solve it.
            4. If quadratic, give BOTH roots unless one is rejected by
               h^2 >= ab.
            5. Verify by factorising the equation for that k.

  TRAP      k often sits inside h, so ch^2 contributes a k^2 term.
            Do not forget to square it.
```

```
  PATTERN 14 — SEPARATE THE LINES OF A GENERAL EQUATION           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the separate equations of the lines represented by
             <six-term equation>."

  METHOD    METHOD A  1. Factorise ONLY  a x^2 + 2h xy + b y^2  = (L)(M).
                      2. Write the answer as (L + p)(M + q).
                      3. Match the x coefficient, the y coefficient and
                         the constant -> two equations fix p and q, the
                         third is a free check.

            METHOD B  Treat S = 0 as a quadratic in x:
                         a x^2 + x(2hy + 2g) + (by^2 + 2fy + c) = 0
                      Use the quadratic formula. The discriminant MUST be a
                      perfect square in y; take its square root and read off
                      the two linear expressions.

  TRAP      Method A: never forget to check that p q equals c.
            Method B: simplify the discriminant fully before taking the root.
```

```
  PATTERN 15 — POINT OF INTERSECTION OF THE PAIR               2 of 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the point of intersection of the lines represented by ..."
            "Find the coordinates of the point where they meet."

  METHOD    1. Write the two partial-derivative equations:
                    a x + h y + g = 0
                    h x + b y + f = 0
               (These are rows 1 and 2 of the determinant with x, y, 1.)
            2. Clear fractions by multiplying by 2 if h, g, f are halves.
            3. Solve the pair by elimination.
            4. SUBSTITUTE the answer back into both to check.
            Ready formulas if you are short of time:
                 x = (hf - bg)/(ab - h^2) ,  y = (gh - af)/(ab - h^2)

  TRAP      If ab - h^2 = 0 the lines are PARALLEL and there is NO point of
            intersection. Say so rather than producing a wrong answer.
```

```
  PATTERN 16 — ANGLE BETWEEN THE LINES OF A GENERAL PAIR       2 of 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the lines represented by
             <six-term equation>."

  METHOD    IGNORE g, f and c completely. They shift the lines, never tilt
            them. Then it is exactly Pattern 1:
                 tan(theta) = 2 sqrt(h^2 - ab)/abs(a + b)
            Check a + b = 0 first for an instant 90 degrees.

  TRAP      Students waste five minutes separating the lines first.
            You do not need to. Only a, h, b matter.
```

```
  PATTERN 17 — PARALLEL PAIR AND THE DISTANCE BETWEEN THEM     4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... represents a pair of PARALLEL lines and find the
             distance between them."

  METHOD    1. Show  h^2 = ab .
            2. Show  a f^2 = b g^2 .
            3. (If asked) show the determinant condition also holds.
            4. Distance  d = 2 sqrt( (g^2 - ac) / (a(a + b)) )
               or        d = 2 sqrt( (f^2 - bc) / (b(a + b)) )
            5. To WRITE the two lines:
                    a x + h y = -g +/- sqrt(g^2 - ac)

  TRAP      Using the "point of intersection" formula on a parallel pair.
            There is no intersection -- ab - h^2 = 0.
            Also: if a = 0, use the f-version of the distance formula.
```

```
  PATTERN 18 — BISECTORS FOR A GENERAL PAIR                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the bisectors of the angles between the lines
             <six-term equation>."

  METHOD    1. Confirm it is a pair (usually just state it).
            2. FIND THE POINT OF INTERSECTION (x0, y0) -- Pattern 15.
            3. Shift:
                  (x - x0)^2 - (y - y0)^2       (x - x0)(y - y0)
                 --------------------------- = --------------------
                          a - b                         h
            4. Cross-multiply. You may leave it in shifted form; you do
               not have to expand.

  TRAP      Jumping straight to the homogeneous bisector formula without
            shifting. That gives the bisectors of the WRONG pair (the one
            through the origin).
```

```
  PATTERN 19 — PRODUCT OF THE PERPENDICULARS FROM A POINT         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the product of the perpendicular distances from (a, b)
             to the pair of lines ..."

  METHOD    For the HOMOGENEOUS pair:
                  abs( a alpha^2 + 2h alpha beta + b beta^2 )
                 --------------------------------------------
                          sqrt( (a-b)^2 + 4 h^2 )
            (Top = just put the point into the left side of the equation.)

            From the ORIGIN to a GENERAL pair:
                          abs(c) / sqrt( (a-b)^2 + 4 h^2 )

  TRAP      Writing (a + b)^2 instead of (a - b)^2 in the denominator.
            It is a MINUS here, unlike the angle formula.
```

```
  PATTERN 20 — AREA OF THE TRIANGLE FORMED WITH A LINE         4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area of the triangle formed by
             a x^2 + 2h xy + b y^2 = 0  and  l x + m y + n = 0"

  METHOD    1. Read a, h, b from the pair and l, m, n from the line.
               (For y = 9 write it as 0.x + 1.y - 9 = 0, so l = 0, m = 1,
                n = -9.)
            2.            n^2 sqrt( h^2 - ab )
               Area  =  ---------------------------
                         abs( a m^2 - 2hlm + b l^2 )
            3. If time allows, find the two vertices and check with
               (1/2) abs( x1 y2 - x2 y1 ).

  TRAP      The denominator is a m^2 (with m, not l) and b l^2 (with l,
            not m). They are SWAPPED compared with what you expect.
            Memory hook: put x -> m and y -> -l into a x^2 + 2h xy + b y^2.
```

---

# GROUP C — HOMOGENISATION

```
  PATTERN 21 — FIND THE PAIR JOINING THE ORIGIN TO A CHORD     4 of 7 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "the lines joining the ORIGIN to the points of
            intersection of <curve> and <line>".

  METHOD    1. Rearrange the LINE so that the right side is exactly 1.
               Call the left side U, so U = 1.
                    3x - y + 1 = 0    ->    U = y - 3x
                    x + 2y = k        ->    U = (x + 2y)/k
            2. Multiply every term of the CURVE up to degree 2:
                    degree 2 terms  x 1
                    degree 1 terms  x U
                    constant term   x U^2
            3. Expand, collect x^2, xy, y^2, and divide out common factors.
            4. State: "this is the required pair OA, OB".

  TRAP      Multiplying the constant by U instead of U^2. This is THE most
            common error in the whole chapter.
            Also: keep the sign of the constant. -5 becomes -5 U^2.
```

```
  PATTERN 22 — ANGLE SUBTENDED AT THE ORIGIN BY A CHORD           7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the lines joining the origin to the
             points of intersection of <curve> and <line>."
            Also: "the angle subtended at the origin by the chord".

  METHOD    1. Do Pattern 21 to get  A x^2 + 2H xy + B y^2 = 0.
            2. Apply Pattern 1:
                    tan(theta) = 2 sqrt(H^2 - AB) / abs(A + B)
            3. Leave the answer as Arctan(...) unless it is a nice angle.

  TRAP      Using the ORIGINAL a, h, b of the curve in the angle formula.
            You must use the NEW coefficients after homogenising.
```

```
  PATTERN 23 — RIGHT ANGLE AT THE ORIGIN -- FIND THE CONSTANT  4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the lines joining the origin ... are mutually
             perpendicular."
            "Find k so that the lines joining the origin ... are
             perpendicular."

  METHOD    1. Homogenise (Pattern 21). If the line contains an unknown k,
               multiply through by k^2 to clear fractions.
            2. You only need TWO numbers:
                    the coefficient of x^2  and  the coefficient of y^2 .
               Do not bother expanding the xy term at all.
            3. Set their SUM to zero and solve / conclude.

  TRAP      Wasting time on the xy coefficient. Skip it entirely.
            Another trap: forgetting that a quadratic in k gives TWO answers
            (usually k = +1 and k = -1 style pairs).
```

```
  PATTERN 24 — CONDITION FOR A CHORD OF A CIRCLE                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the condition that the chord l x + m y = 1 of the circle
             x^2 + y^2 = a^2 subtends a right angle at the centre."

  METHOD    1. The line already reads "= 1", so U = l x + m y.
            2. Homogenise:  x^2 + y^2 - a^2 (l x + m y)^2 = 0
            3. Coefficients: (1 - a^2 l^2) and (1 - a^2 m^2).
            4. Sum = 0  gives   a^2 ( l^2 + m^2 ) = 2 .

  TRAP      Confusing it with the TANGENT condition. Right angle needs
            a^2(l^2 + m^2) = 2 ; coincident lines (tangent) needs
            a^2(l^2 + m^2) = 1 .
```

---

# GROUP D — THE NAMED PROOFS (Section C, 7 marks)

```
  PATTERN 25 — PROVE THE BISECTOR FORMULA                         7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the pair of bisectors of the angles between
             a x^2 + 2h xy + b y^2 = 0  is  h(x^2 - y^2) = (a - b) xy."

  METHOD    1. Let the lines be y = m1 x, y = m2 x with inclinations
               alpha1, alpha2 ; quote m1 + m2 = -2h/b and m1 m2 = a/b.
            2. A bisector has inclination theta with 2 theta = alpha1 + alpha2.
            3. tan(2 theta) = (m1 + m2)/(1 - m1 m2) = 2h/(a - b).
            4. Also tan(2 theta) = 2 tan(theta)/(1 - tan^2 theta)
                                 = 2xy/(x^2 - y^2)   since tan(theta) = y/x.
            5. Equate and rearrange.
            6. Close by noting the coefficients of x^2 and y^2 sum to zero,
               so the bisectors are perpendicular.

  TRAP      Skipping step 2. The examiner wants to see WHY 2 theta is the
            sum of the two inclinations.
```

```
  PATTERN 26 — PROVE THE AREA-OF-TRIANGLE FORMULA                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the area of the triangle formed by
             a x^2 + 2h xy + b y^2 = 0 and l x + m y + n = 0 is ..."

  METHOD    1. Solve y = m1 x with the line to get vertex A; likewise B.
            2. Area = (1/2) abs( x_A y_B - x_B y_A )  (O is the origin).
            3. Simplify to  n^2 abs(m2 - m1) / (2 abs((l+m m1)(l+m m2))).
            4. Expand the denominator using m1 + m2 and m1 m2.
            5. Use abs(m1 - m2) = 2 sqrt(h^2 - ab)/abs(b).
            6. The abs(b) cancels. Done.

  TRAP      Losing the factor 1/2 in the area, or forgetting that the third
            vertex is the ORIGIN (which is what makes the shoelace formula
            so short).
```

```
  PATTERN 27 — PROVE THE PRODUCT-OF-PERPENDICULARS FORMULA        7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the product of the perpendiculars from (alpha, beta)
             to a x^2 + 2h xy + b y^2 = 0 is ..."

  METHOD    1. Write the lines as m1 x - y = 0 and m2 x - y = 0.
            2. Product = abs(m1 a - b) abs(m2 a - b) /
                         [ sqrt(1 + m1^2) sqrt(1 + m2^2) ]
            3. Top: expand to m1 m2 alpha^2 - (m1+m2) alpha beta + beta^2
               and substitute a/b and -2h/b.
            4. Bottom: (1+m1^2)(1+m2^2) = 1 + (m1+m2)^2 - 2m1m2 + (m1m2)^2
               which simplifies to ((a-b)^2 + 4h^2)/b^2.
            5. abs(b) cancels top and bottom.

  TRAP      Dropping the absolute value signs. Distances are never negative.
```

```
  PATTERN 28 — PROVE THE PARALLEL-PAIR CONDITIONS AND DISTANCE    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If S = 0 represents a pair of parallel lines, prove that
             h^2 = ab, a f^2 = b g^2, and the distance between them is
             2 sqrt((g^2 - ac)/(a(a+b)))."

  METHOD    1. Parallel means the angle is zero, so h^2 = ab.
            2. Multiply S by a; the first three terms become (ax + hy)^2.
            3. Rewrite 2agx as 2g(ax + hy) - 2ghy, leaving a stray term
               2(af - gh)y.
            4. For a pure quadratic in (ax + hy), that stray term must
               vanish: af = gh. Square it and use h^2 = ab to get af^2 = bg^2.
            5. Solve the quadratic: ax + hy = -g +/- sqrt(g^2 - ac).
            6. Apply the "distance between parallel lines" formula from
               Chapter 3 and simplify using a^2 + h^2 = a(a + b).

  TRAP      Forgetting step 6's simplification a^2 + h^2 = a^2 + ab
            = a(a + b). Without it your answer looks different from the
            book's and you lose the last mark.
```

---

# GROUP E — THE COMBINATION QUESTIONS AND THE ODD ONES

```
  PATTERN 29 — THE FULL 7-MARK COMBO                              7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that <six-term equation> represents a pair of straight
             lines. Also find the angle between them and the coordinates of
             the point of intersection."
            This is THE most repeated long answer of the chapter.

  METHOD    Write it in three clearly labelled parts:

            PART 1 (3 marks)   a, h, b, g, f, c  ->  the condition = 0
                               plus  h^2 - ab > 0  ->  "real and distinct"

            PART 2 (2 marks)   tan(theta) = 2 sqrt(h^2 - ab)/abs(a + b)

            PART 3 (2 marks)   a x + h y + g = 0
                               h x + b y + f = 0    ->   solve

            Finish with one sentence stating all three answers.

  TRAP      The three parts are INDEPENDENT. If the arithmetic in Part 1
            fails, still do Parts 2 and 3 -- they only need a, h, b, g, f.
            Never leave the question blank because one part went wrong.
```

```
  PATTERN 30 — WHAT SHAPE IS THE TRIANGLE?                     MCQ / 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The triangle formed by x^2 - 4xy + y^2 = 0 and x + y = 1 is
             equilateral / isosceles / right angled ..."

  METHOD    1. Angle at the ORIGIN = the angle of the pair,
                    tan(theta) = 2 sqrt(h^2 - ab)/abs(a + b).
            2. If a = b the pair is symmetric about y = x, so the triangle
               is at least ISOSCELES whenever the third line is
               perpendicular to y = x (i.e. has slope -1).
            3. If in addition the apex angle is 60 degrees, it is
               EQUILATERAL.
            4. Right angled  <=>  a + b = 0, or the third line is
               perpendicular to one of the pair.

  TRAP      Assuming "60 degrees at the origin" alone means equilateral.
            You also need the symmetry argument.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "Find the angle between the lines `2x^2 - 3xy + y^2 = 0`" | 1 |
| "Find k if `kx^2 + 6xy - 3y^2 = 0` represents perpendicular lines" | 2 |
| "Find k if `x^2 + 4xy + ky^2 = 0` represents coincident lines" | 3 |
| "What does `x^2 + xy + y^2 = 0` represent?" | 4 |
| "Find the separate equations of `6x^2 - 5xy - 6y^2 = 0`" | 5 |
| "Find the sum of the slopes of `2x^2 + 5xy + 3y^2 = 0`" | 6 |
| "If one line of `6x^2 - xy + 4cy^2 = 0` is `3x + 4y = 0`, find c" | 7 |
| "If one slope is twice the other, show `8h^2 = 9ab`" | 8 |
| "Find the bisectors of `x^2 - 5xy + 4y^2 = 0`" | 9 |
| "Lines through O perpendicular to `x^2 - 3xy + 2y^2 = 0`" | 10 |
| "Lines through O parallel to `2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0`" | 11 |
| "Show that `2x^2 - 13xy - 7y^2 + x + 23y - 6 = 0` is a pair of lines" | 12 |
| "Find lambda if `lambda x^2 + 10xy + 3y^2 - 15x - 21y + 18 = 0` is a pair" | 13 |
| "Find the separate equations of `x^2 - 3xy + 2y^2 + 3x - 5y + 2 = 0`" | 14 |
| "Find the point of intersection of the lines `S = 0`" | 15 |
| "Find the angle between the lines `2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0`" | 16 |
| "Show `4x^2 + 12xy + 9y^2 + 8x + 12y - 5 = 0` is parallel; find the distance" | 17 |
| "Find the bisectors of `2x^2 + 3xy + y^2 - 5x - 4y + 3 = 0`" | 18 |
| "Find the product of the perpendiculars from (1,1) to the pair" | 19 |
| "Find the area of the triangle formed by the pair and `y = 9`" | 20 |
| "Find the lines joining the origin to the points of intersection of ..." | 21 |
| "Find the angle subtended at the origin by the chord ..." | 22 |
| "Show the lines joining the origin are mutually perpendicular" | 23 |
| "Condition that `lx + my = 1` subtends 90 deg at the centre of the circle" | 24 |
| "Prove the bisectors of `ax^2 + 2hxy + by^2 = 0` are `h(x^2-y^2) = (a-b)xy`" | 25 |
| "Show that the area of the triangle formed by the pair and a line is ..." | 26 |
| "Show that the product of the perpendiculars from a point is ..." | 27 |
| "If S = 0 is a pair of parallel lines, prove `af^2 = bg^2`" | 28 |
| "Show S = 0 is a pair; find the angle AND the point of intersection" | 29 |
| "The triangle formed by `x^2 - 4xy + y^2 = 0` and `x + y = 1` is ..." | 30 |

---

# THE FIVE-SECOND SORTING RULE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   LOOK AT THE EQUATION.  COUNT THE TERMS.                          |
  |                                                                    |
  |   THREE terms (x^2, xy, y^2 only)                                  |
  |        -> lines through the ORIGIN                                 |
  |        -> Patterns 1 to 11 and 25 to 27                            |
  |                                                                    |
  |   SIX terms                                                        |
  |        -> lines anywhere                                           |
  |        -> Patterns 12 to 20 and 28, 29                             |
  |                                                                    |
  |   A CURVE and a separate LINE, and the word "ORIGIN"               |
  |        -> HOMOGENISE                                               |
  |        -> Patterns 21 to 24                                        |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +====================================================================+
  |                                                                    |
  |   LEVEL 1  --  the 30-minute plan.  Worth about 4 marks.           |
  |                                                                    |
  |     Learn ONLY these three lines:                                  |
  |         h = (xy coefficient)/2                                     |
  |         a + b = 0  means PERPENDICULAR                             |
  |         tan(theta) = 2 sqrt(h^2 - ab)/abs(a + b)                   |
  |                                                                    |
  |     That answers Patterns 1, 2, 16 -- one Section A question       |
  |     and part of the Section C question.                            |
  |                                                                    |
  +====================================================================+

  +====================================================================+
  |                                                                    |
  |   LEVEL 2  --  the 2-hour plan.  Worth about 8 marks.              |
  |                                                                    |
  |     Add:                                                           |
  |         abc + 2fgh - af^2 - bg^2 - ch^2 = 0                        |
  |         a x + h y + g = 0  ,  h x + b y + f = 0                    |
  |                                                                    |
  |     That gives you Patterns 12, 13, 15, 29 --                      |
  |     the FULL 7-mark long answer plus a 4-mark short answer.        |
  |                                                                    |
  |     Practise ONE question (Q C1 in the PYQ file) five times        |
  |     until you can write it without looking. Then you own it.       |
  |                                                                    |
  +====================================================================+

  +====================================================================+
  |                                                                    |
  |   LEVEL 3  --  the one-day plan.  Worth 11 to 13 marks.            |
  |                                                                    |
  |     Add:                                                           |
  |         HOMOGENISATION  (Patterns 21, 22, 23)                      |
  |         the bisector formula (Patterns 9, 25)                      |
  |                                                                    |
  |     Now you can attempt BOTH of this chapter's long answers,       |
  |     and you have a spare in case one looks unfamiliar.             |
  |                                                                    |
  +====================================================================+
```

**The single highest-value hour you can spend on this chapter:**
learn to write, from memory, in under four minutes:

```
   a = _ , h = _ , b = _ , g = _ , f = _ , c = _

   abc + 2fgh - af^2 - bg^2 - ch^2 = 0        (the pair condition)

   tan(theta) = 2 sqrt(h^2 - ab) / abs(a + b)  (the angle)

   a x + h y + g = 0 ,  h x + b y + f = 0      (the meeting point)
```

Four lines. Seven marks. Every year.
