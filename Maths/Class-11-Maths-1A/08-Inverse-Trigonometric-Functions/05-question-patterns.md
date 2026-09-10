# Inverse Trigonometric Functions — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Marks shown are for AP Inter Maths IA (Section A = 2, Section B = 4, Section C = 7).

---

```
  PATTERN 1 — PRINCIPAL VALUE, POSITIVE ARGUMENT                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the principal value of sin^-1(1/2)" -- no minus sign.
  METHOD    1. Write  y = sin^-1 x , so  sin y = x .
            2. Recall the standard angle from the 0 / pi/6 / pi/4 / pi/3 / pi/2
               table.
            3. Confirm it is inside the principal range. State that you checked.
  TRAP      For sec^-1 and cosec^-1, flip to cos^-1 and sin^-1 first:
            sec^-1 x = cos^-1(1/x) ,  cosec^-1 x = sin^-1(1/x) .
```

```
  PATTERN 2 — PRINCIPAL VALUE, NEGATIVE ARGUMENT                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   Same question but with a minus sign inside the bracket.
  METHOD    SIN FAMILY  (sin^-1, tan^-1, cosec^-1):  answer = -(positive value)
            COS FAMILY  (cos^-1, cot^-1, sec^-1):    answer = pi - (positive value)
            Then confirm the answer is inside the range.
  TRAP      Writing cos^-1(-1/2) = -pi/3 . cos^-1 is NEVER negative.
            The answer is pi - pi/3 = 2pi/3 .
            Same for cot^-1(-1) = 3pi/4 , NOT -pi/4 .
```

```
  PATTERN 3 — IS IT DEFINED?                                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   An argument that looks "too big" or "too small":
            sin^-1(2) , cos^-1(-3) , sec^-1(1/2) , cosec^-1(0.4)
  METHOD    sin^-1 , cos^-1   need  |x| <= 1
            sec^-1 , cosec^-1 need  |x| >= 1
            tan^-1 , cot^-1   accept EVERY real number
            If it fails, answer "not defined" and give the reason in one line.
  TRAP      Trying to compute it anyway. "Not defined" IS the full answer.
```

```
  PATTERN 4 — STATE THE DOMAIN AND RANGE                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the domain and principal value range of cosec^-1."
            Or a table asked as part (a) of a longer question.
  METHOD    Reproduce the master table. Get the brackets right:
              sin^-1  [-1,1] -> [-pi/2, pi/2]     cos^-1 [-1,1] -> [0, pi]
              tan^-1  R      -> (-pi/2, pi/2)     cot^-1 R      -> (0, pi)
              sec^-1  |x|>=1 -> [0,pi] minus pi/2
              cosec^-1|x|>=1 -> [-pi/2,pi/2] minus 0
  TRAP      Using square brackets for tan^-1 / cot^-1. They are OPEN.
            Forgetting to REMOVE pi/2 from sec^-1 and 0 from cosec^-1.
```

```
  PATTERN 5 — sin^-1( sin t ) WITH t OUTSIDE THE RANGE             2 marks
  ------------------------------------------------------------------------
  TRIGGER   An inverse wrapped around its own function, with an ugly angle
            inside: 3pi/4 , 4pi/3 , 7pi/6 , 13pi/6 , 5 radians, -600 degrees.
  METHOD    1. Is the inside angle already in the principal range?
               If yes, the answer is just that angle. Stop.
            2. If not, drag it in:
                  sin : add/subtract 2pi , then use  sin t = sin(pi - t)
                  cos : add/subtract 2pi , then use  cos t = cos(2pi - t)
                  tan : add/subtract pi   (period pi, NOT 2pi)
            3. State that the final angle is inside the range.
  TRAP      "They cancel, so the answer is the angle inside." FALSE unless
            the angle is already in the range. Always check first.
```

```
  PATTERN 6 — SPOT THE COMPLEMENTARY PAIR                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   The SAME number appears under a sin^-1 and a cos^-1
            (or tan^-1 and cot^-1, or sec^-1 and cosec^-1).
  METHOD    Replace each pair by pi/2 on sight. Do not evaluate the pieces.
              sin^-1 x + cos^-1 x = pi/2      x in [-1, 1]
              tan^-1 x + cot^-1 x = pi/2      x in R
              sec^-1 x + cosec^-1 x = pi/2    |x| >= 1
  TRAP      Wasting five minutes evaluating sin^-1(3/5) exactly when it
            cancels anyway.
```

```
  PATTERN 7 — RECIPROCAL CONVERSION                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   sec^-1 or cosec^-1 anywhere, or  tan^-1(1/x) .
  METHOD    sin^-1(1/x) = cosec^-1 x        |x| >= 1
            cos^-1(1/x) = sec^-1 x          |x| >= 1
            tan^-1(1/x) = cot^-1 x          x > 0  ONLY
            tan^-1(1/x) = cot^-1 x - pi     x < 0
  TRAP      Using tan^-1(1/x) = cot^-1 x when x is negative.
            Check: tan^-1(-1) = -pi/4 but cot^-1(-1) = 3pi/4 . They differ by pi.
```

```
  PATTERN 8 — VALUE OF cos( sin^-1 a ) , tan( cos^-1 a ) ...       2 marks
  ------------------------------------------------------------------------
  TRIGGER   One trig function outside, a DIFFERENT inverse inside.
  METHOD    1. Let A = the inverse function. Write down the ratio it gives.
            2. Draw a right triangle, label the two known sides.
            3. Third side by Pythagoras.
            4. Read off the ratio asked for.
  TRAP      Sign. Locate the quadrant of A first.
            First quadrant  -> everything positive.
            Second quadrant (cos^-1 of a negative) -> sine still positive,
            cosine and tangent NEGATIVE.
```

```
  PATTERN 9 — VALUE OF sin(2 sin^-1 a) , tan[2 tan^-1 a - pi/4]    2 marks
  ------------------------------------------------------------------------
  TRIGGER   A "2" in front of an inverse function, inside a trig function.
  METHOD    1. Collapse the double angle first:
                 2 tan^-1 a = tan^-1( 2a/(1-a^2) )     |a| < 1
                 or use  sin 2A = 2 sinA cosA  with the triangle.
            2. Then apply the outside trig function / compound-angle formula.
  TRAP      Forgetting the |a| < 1 condition on the tan form.
            With  tan(X - pi/4)  use  (tanX - 1)/(1 + tanX) .
```

```
  PATTERN 10 — CONVERT ONE INVERSE INTO ANOTHER               inside 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A proof mixing sin^-1 , cos^-1 and cot^-1 . You cannot add them
            until they all speak the same language.
  METHOD    Turn EVERYTHING into tan^-1 using a right triangle.
                 sin^-1(3/5) -> tan^-1(3/4)      (3-4-5)
                 cos^-1(4/5) -> tan^-1(3/4)      (3-4-5)
                 cot^-1(9)   -> tan^-1(1/9)
            Learn the triples: 3-4-5 , 5-12-13 , 8-15-17 , 7-24-25 , 16-63-65 .
  TRAP      Converting a NEGATIVE argument directly. Pull the sign out first
            with the Pattern 2 rules, THEN convert.
```

```
  PATTERN 11 — tan^-1 x + tan^-1 y , NORMAL CASE                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two tan^-1 (or cot^-1) terms with SMALL fractions.
  METHOD    1. Compute xy and WRITE IT DOWN.
            2. xy < 1 , so quote:  tan^-1 x + tan^-1 y = tan^-1((x+y)/(1-xy))
            3. Simplify the compound fraction carefully -- put both the
               numerator and the denominator over a common denominator, THEN
               divide.
  TRAP      Not stating "xy < 1". That sentence is worth a mark on its own.
```

```
  PATTERN 12 — tan^-1 x + tan^-1 y NEEDING A pi CORRECTION      2 marks / MCQ
  ------------------------------------------------------------------------
  TRIGGER   Both arguments are BIGGER than 1 in size:
            tan^-1 2 + tan^-1 3 , tan^-1(-2) + tan^-1(-3) .
  METHOD    xy > 1 , x > 0 , y > 0   ->   add pi
            xy > 1 , x < 0 , y < 0   ->   subtract pi
            xy = 1 exactly, x > 0    ->   the answer is simply pi/2
  TRAP      Quoting tan^-1 2 + tan^-1 3 = tan^-1(-1) = -pi/4 . WRONG.
            Both angles are positive, so the sum must be positive: 3pi/4 .
            Always sanity-check the SIGN and SIZE of your answer.
```

```
  PATTERN 13 — PROVE A THREE-TERM tan^-1 SUM EQUALS pi/4           4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three tan^-1 terms with 1 on top: 1/2 , 1/5 , 1/8 .
  METHOD    1. Combine the FIRST TWO. Check xy < 1 and say so.
            2. Combine the result with the THIRD. Check xy < 1 again.
            3. The final fraction will simplify to exactly 1 .
            4. tan^-1(1) = pi/4 . Write "Hence proved."
  TRAP      Arithmetic slips in the compound fraction. If the final answer is
            not a clean 1 (or a clean stated value), you have made a slip --
            go back, do not fudge it.
```

```
  PATTERN 14 — PROVE A FOUR-TERM tan^-1 SUM                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   Four tan^-1 terms: 1/3 , 1/5 , 1/7 , 1/8 .
  METHOD    Do NOT go left to right. Pair them (1st+2nd) and (3rd+4th), get two
            clean fractions, then combine those two.
  TRAP      Left-to-right gives horrible numbers and you run out of time.
```

```
  PATTERN 15 — PROVE A THREE-TERM sin^-1 SUM EQUALS pi/2           4 marks
  ------------------------------------------------------------------------
  TRIGGER   sin^-1(4/5) + sin^-1(5/13) + sin^-1(16/65)
  METHOD    1. Convert all three to tan^-1 with triangles
                 -> tan^-1(4/3) , tan^-1(5/12) , tan^-1(16/63)
            2. Add the first two ( xy = 5/9 < 1 ) -> tan^-1(63/16)
            3. Notice 63/16 and 16/63 are RECIPROCALS, both positive,
               so their sum is pi/2 . Done.
  TRAP      Trying the xy < 1 formula at step 3. xy = 1 exactly, so you would
            divide by zero. Recognise the reciprocal shortcut.
```

```
  PATTERN 16 — PROVE cos^-1 a + cos^-1 b = cos^-1 c                4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two cos^-1 terms, answer also a cos^-1 .
  METHOD    1. Check  a + b >= 0 . Say so.
            2. Quote:  cos^-1 a + cos^-1 b = cos^-1( ab - sqrt(1-a^2) sqrt(1-b^2) )
            3. Compute the two square roots from the triples.
            4. Substitute and simplify.
  TRAP      The sign inside the bracket is a MINUS (it mirrors
            cos(A+B) = cosA cosB - sinA sinB ). Writing plus loses the question.
            If a + b < 0 the answer is 2pi - cos^-1(...) .
```

```
  PATTERN 17 — PROVE sin^-1 a + sin^-1 b = cos^-1 c                4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two sin^-1 on the left, a cos^-1 on the right.
  METHOD    1. Check  a^2 + b^2 <= 1 . State the result.
            2. sin^-1 a + sin^-1 b = sin^-1( a sqrt(1-b^2) + b sqrt(1-a^2) )
            3. You now have sin^-1(k). Convert it: adjacent = sqrt(1 - k^2),
               so sin^-1(k) = cos^-1( sqrt(1-k^2) ) .
  TRAP      Skipping the a^2 + b^2 check. If a, b > 0 and a^2 + b^2 > 1 the
            answer needs a  pi -  in front and your proof collapses.
            Example: sin^-1(4/5) + sin^-1(12/13) = pi - sin^-1(56/65) ,
            NOT sin^-1(56/65) .
```

```
  PATTERN 18 — PROVE sin^-1 a + 2 tan^-1 b = pi/2                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   One sin^-1 plus a doubled tan^-1 , answer pi/2 .
  METHOD    1. Convert the sin^-1 to tan^-1 (triangle).
            2. Collapse 2 tan^-1 b with the tan double-angle form ( |b| < 1 ).
            3. The two tan^-1 arguments will be RECIPROCALS, both positive,
               so the sum is pi/2 .
  TRAP      Using the xy < 1 formula at step 3 -- you divide by zero.
            Spot the reciprocal and quote the pi/2 result instead.
```

```
  PATTERN 19 — PROVE A DIFFERENCE IDENTITY IN x AND y              4 marks
  ------------------------------------------------------------------------
  TRIGGER   tan^-1(x/y) - tan^-1( (x-y)/(x+y) ) = pi/4
  METHOD    1. Quote the difference formula with its condition xy' > -1 .
            2. Put both the numerator and denominator over the common
               denominator y(x+y) .
            3. Both collapse to x^2 + y^2 , so the fraction is 1 .
            4. tan^-1(1) = pi/4 .
  TRAP      Trying to cancel before combining. Do the algebra in full --
            the x^2 + y^2 cancellation is the whole point of the question.
```

```
  PATTERN 20 — SOLVE tan^-1(x+a) + tan^-1(x-a) = tan^-1(k)         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Solve for x" with two tan^-1 of linear expressions.
  METHOD    1. Apply the sum formula (assume Case 1 for now).
            2. tan^-1 is one-one, so equate the two arguments.
            3. Solve the resulting quadratic.
            4. SUBSTITUTE BOTH ROOTS BACK. Reject any root for which
               xy > 1 with both factors negative (the sum would be negative
               while the right side is positive).
  TRAP      Keeping both roots. These questions ALWAYS supply a fake one.
            For tan^-1(x+1)+tan^-1(x-1) = tan^-1(8/31) the roots are
            1/4 and -8 ; only x = 1/4 is genuine.
```

```
  PATTERN 21 — SOLVE A SUM OF TWO RATIONAL tan^-1 = pi/4           4 marks
  ------------------------------------------------------------------------
  TRIGGER   tan^-1((x-1)/(x-2)) + tan^-1((x+1)/(x+2)) = pi/4
            or  tan^-1(1/(2x+1)) + tan^-1(1/(4x+1)) = tan^-1(2/x^2)
  METHOD    1. Compute a + b and ab as single fractions.
            2. Form (a+b)/(1-ab) -- the messy denominators cancel.
            3. Set equal to tan(pi/4) = 1 (or to the given argument).
            4. Solve, then check every root.
  TRAP      Losing a sign when expanding (x-1)(x+2) + (x+1)(x-2) .
            Expand both fully; the x terms cancel, leaving 2x^2 - 4 .
```

```
  PATTERN 22 — SOLVE WITH A sin^-1 AND A RESTRICTION               4 marks
  ------------------------------------------------------------------------
  TRIGGER   sin^-1(1-x) - 2 sin^-1(x) = pi/2
  METHOD    1. Put  sin^-1 x = t .
            2. Use the fact that sin^-1 cannot exceed pi/2 to get an
               inequality on t (here t <= 0 , so x <= 0 ). WRITE IT DOWN.
            3. Take sine of both sides; use cos 2t = 1 - 2 sin^2 t .
            4. Solve, then reject any root violating step 2.
  TRAP      Forgetting step 2. Both x = 0 and x = 1/2 come out of the algebra;
            only x = 0 survives.
```

```
  PATTERN 23 — SOLVE WHEN THE UNKNOWN IS AN ANGLE                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   2 tan^-1(cos x) = tan^-1(2 cosec x)
  METHOD    1. Collapse the double angle on the left.
            2. Equate the two arguments.
            3. Clear the trig fractions and factorise.
            4. Reject any root that makes cosec x or the double-angle
               condition fail (here sin x = 0 is rejected).
  TRAP      Cancelling sin x without noting that sin x = 0 must be excluded.
```

```
  PATTERN 24 — SIMPLIFY BY SUBSTITUTING x = tan t                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   Any of these shapes appear inside an inverse function:
                2x/(1-x^2)  ,  2x/(1+x^2)  ,  (1-x^2)/(1+x^2)  ,
                sqrt(1+x^2) , (sqrt(1+x^2) - 1)/x
  METHOD    1. Put x = tan t , i.e. t = tan^-1 x . State the interval for t.
            2. Use  1 + tan^2 t = sec^2 t  to kill the square roots.
            3. Simplify to a single trig ratio of t or t/2 .
            4. Cancel the inverse -- but ONLY after checking the resulting
               angle is inside the principal range.
  TRAP      Writing sqrt(sec^2 t) = sec t without saying "t is acute so sec t
            is positive". That justification carries a mark.
```

```
  PATTERN 25 — SIMPLIFY A SQUARE-ROOT / HALF-ANGLE EXPRESSION  4 marks / MCQ
  ------------------------------------------------------------------------
  TRIGGER   sqrt(1 - cos x) , sqrt(1 + cos x) , sqrt(1 + sin x) ,
            sqrt(1 - sin x) inside an inverse function.
  METHOD    1 - cos x = 2 sin^2(x/2)          1 + cos x = 2 cos^2(x/2)
            1 + sin x = ( sin(x/2) + cos(x/2) )^2
            1 - sin x = ( cos(x/2) - sin(x/2) )^2
            Take the POSITIVE root only after checking the given range of x.
  TRAP      Dropping the modulus. sqrt(A^2) = |A| , and whether |A| = A
            depends entirely on the interval you were given.
```

```
  PATTERN 26 — CONDITIONAL IDENTITY: SUM = pi                      7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If tan^-1 x + tan^-1 y + tan^-1 z = pi , prove x+y+z = xyz."
  METHOD    1. Name them: A = tan^-1 x , B = tan^-1 y , C = tan^-1 z .
            2. Write A + B = pi - C .
            3. Take tan of both sides:  tan(A+B) = tan(pi - C) = -tan C .
            4. Expand tan(A+B) , substitute x, y, z , clear the fraction.
            5. Conclude.
  TRAP      Trying to use the tan^-1 SUM formula with its three cases.
            You do not need it. Naming the angles and using ordinary
            trigonometry is far shorter and fully rigorous.
```

```
  PATTERN 27 — CONDITIONAL IDENTITY: SUM = pi/2                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If tan^-1 x + tan^-1 y + tan^-1 z = pi/2 , prove xy+yz+zx = 1."
  METHOD    Same as Pattern 26 but with  tan(pi/2 - C) = cot C = 1/z .
            Then (x+y)/(1-xy) = 1/z  ->  z(x+y) = 1 - xy .
  TRAP      Writing tan(pi/2 - C) = tan C . It is cot C .
```

```
  PATTERN 28 — CONDITIONAL IDENTITY WITH cos^-1                    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If cos^-1 x + cos^-1 y + cos^-1 z = pi , prove
             x^2 + y^2 + z^2 + 2xyz = 1 ."
  METHOD    1. A = cos^-1 x etc. ; note each lies in [0, pi] so every SINE
               is non-negative -- state this, it justifies step 4.
            2. cos(A+B) = cos(pi - C) = -z .
            3. Expand:  xy - sinA sinB = -z  ->  sinA sinB = xy + z .
            4. Square both sides: (1-x^2)(1-y^2) = (xy+z)^2 .
            5. Expand; the x^2 y^2 terms cancel; rearrange.
  TRAP      Squaring without justifying that both sides are non-negative.
            That justification is worth marks on its own.
```

```
  PATTERN 29 — CONDITIONAL IDENTITY WITH sin^-1                    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If sin^-1 x + sin^-1 y + sin^-1 z = pi , prove
             x sqrt(1-x^2) + y sqrt(1-y^2) + z sqrt(1-z^2) = 2xyz ."
  METHOD    1. A = sin^-1 x etc. ; A + B + C = pi so they behave like the
               angles of a triangle.
            2. Argue that all three are in [0, pi/2] , so every cosine is
               the POSITIVE square root.
            3. Quote (or prove) the triangle identity
                    sin2A + sin2B + sin2C = 4 sinA sinB sinC .
            4. Replace sin2A by 2x sqrt(1-x^2) and divide by 2.
  TRAP      Not justifying the positive square root. Each sin^-1 is at most
            pi/2 , and three of them must total pi , so none can be negative.
```

```
  PATTERN 30 — TELESCOPING SUM OF tan^-1                            MCQ
  ------------------------------------------------------------------------
  TRIGGER   Denominators 3 , 7 , 13 , 21 , 31 , ... (that is n^2 + n + 1).
  METHOD    tan^-1( 1/(n^2+n+1) ) = tan^-1(n+1) - tan^-1(n) .
            Write out the first few, cancel the middle, keep the two ends.
            For an infinite sum, tan^-1(N+1) -> pi/2 .
  TRAP      Forgetting to subtract the first term tan^-1(1) = pi/4 at the end.
```

```
  PATTERN 31 — PROVE A PROPERTY FROM SCRATCH                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that sin^-1 x + cos^-1 x = pi/2 ."
            "Prove that cos^-1(-x) = pi - cos^-1 x ."
  METHOD    1. Let A = sin^-1 x , so sin A = x and A is in [-pi/2, pi/2] .
            2. Produce the required cosine / sine relation.
            3. *** CHECK THAT THE NEW ANGLE LANDS IN THE CORRECT PRINCIPAL
               RANGE. *** This is the step examiners look for.
            4. Conclude.
  TRAP      Stopping at step 2. Showing that cos(pi/2 - A) = x only proves
            pi/2 - A is SOME angle with that cosine. You must show it is the
            PRINCIPAL one.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| The question says ... | Pattern |
|---|:---:|
| "Find the principal value of `cot^-1(-sqrt3)`" | 2 |
| "Find the value of `sin^-1(sin(5pi/6))`" | 5 |
| "Prove `tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8) = pi/4`" | 13 |
| "Does `sec^-1(0.3)` exist?" | 3 |
| "Find `sin^-1(2/7) + cos^-1(2/7) + tan^-1(9) + cot^-1(9)`" | 6 |
| "Find `cos( sin^-1(5/13) )`" | 8 |
| "Prove `cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65)`" | 16 |
| "Solve `tan^-1(x+1) + tan^-1(x-1) = tan^-1(8/31)`" | 20 |
| "Find `tan[2 tan^-1(1/5) - pi/4]`" | 9 |
| "Prove `sin^-1(4/5) + 2 tan^-1(1/3) = pi/2`" | 18 |
| "If `tan^-1 x + tan^-1 y + tan^-1 z = pi`, prove ..." | 26 |
| "Simplify `tan^-1((sqrt(1+x^2) - 1)/x)`" | 24 |
| "Prove `sin^-1(3/5) + sin^-1(8/17) = cos^-1(36/85)`" | 17 |
| "`tan^-1 2 + tan^-1 3` equals ..." | 12 |
| "Write the domain and range of `cosec^-1`" | 4 |
| "`cot^-1 3 + cot^-1 7 + cot^-1 13 + cot^-1 21` equals ..." | 30 |
| "Solve `sin^-1(1-x) - 2 sin^-1 x = pi/2`" | 22 |
| "Prove `tan^-1(x/y) - tan^-1((x-y)/(x+y)) = pi/4`" | 19 |
| "Express `sec^-1(2)` as a `cos^-1`" | 7 |
| "Simplify `tan^-1(sqrt((1-cos x)/(1+cos x)))`" | 25 |
| "If `cos^-1 x + cos^-1 y + cos^-1 z = pi`, prove ..." | 28 |
| "Prove `sin^-1 x + cos^-1 x = pi/2`" | 31 |
| "Prove `sin^-1(4/5) + sin^-1(5/13) + sin^-1(16/65) = pi/2`" | 15 |
| "Express `cot^-1 9` as a `tan^-1`" | 7 / 10 |
| "Solve `2 tan^-1(cos x) = tan^-1(2 cosec x)`" | 23 |
| "Prove `tan^-1(1/3)+tan^-1(1/5)+tan^-1(1/7)+tan^-1(1/8) = pi/4`" | 14 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   TIER 1  --  LEARN THIS EVEN IF YOU LEARN NOTHING ELSE   (about 1 hour) |
  |                                                                          |
  |     * The domain + principal range table (Pattern 4)                     |
  |     * Negative argument rules (Pattern 2)                                |
  |         sin family:  -value        cos family:  pi - value               |
  |     * sin^-1 x + cos^-1 x = pi/2 and its two friends (Pattern 6)         |
  |                                                                          |
  |   PAYS:  the Section A question, 2 marks, almost guaranteed.             |
  |          Plus 1 free EAPCET question.                                    |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |   TIER 2  --  THE SECTION B QUESTION                    (about 2 hours)  |
  |                                                                          |
  |     * The tan^-1 sum formula WITH its three cases (Patterns 11, 12)      |
  |     * The right-triangle conversion and the triples (Pattern 10)         |
  |     * Drill these five proofs until they are automatic:                  |
  |          tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8) = pi/4                  |
  |          tan^-1(1/3)+tan^-1(1/5)+tan^-1(1/7)+tan^-1(1/8) = pi/4          |
  |          sin^-1(4/5) + sin^-1(5/13) + sin^-1(16/65) = pi/2               |
  |          cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65)                     |
  |          sin^-1(4/5) + 2 tan^-1(1/3) = pi/2                              |
  |                                                                          |
  |   PAYS:  4 marks in Section B, very reliably.                            |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |   TIER 3  --  THE SOLVE QUESTIONS                       (about 1 hour)   |
  |                                                                          |
  |     * Pattern 20 and Pattern 21 (the two standard "solve for x" shapes)  |
  |     * The habit of substituting every root back and rejecting the fake   |
  |                                                                          |
  |   PAYS:  an alternative 4-mark Section B question, and it makes the      |
  |          Tier 2 work safer.                                              |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |   TIER 4  --  ONLY IF TIERS 1-3 ARE SOLID               (about 1 hour)   |
  |                                                                          |
  |     * The conditional identities, Patterns 26 to 29                      |
  |     * The x = tan t substitution, Pattern 24                             |
  |                                                                          |
  |   PAYS:  insurance. These also appear folded into Chapter 6 and 7        |
  |          long answers and into JEE Main.                                 |
  |                                                                          |
  +--------------------------------------------------------------------------+


   REALISTIC TOTAL FROM THIS CHAPTER:  4 to 6 marks out of 75 in the board
   paper, plus 1 to 2 questions in EAPCET.
   Time needed:  about 5 hours.  That is the best marks-per-hour rate of any
   chapter in Maths IA.
```

---

# THE ONE-PARAGRAPH SUMMARY

Every question in this chapter is answered by the same two moves.
**First**, find *an* angle that fits — using a triangle, a standard value, or a
sum formula. **Second**, drag that angle into the principal range using
`-x` for the sin family, `pi - x` for the cos family, or `+- pi` for a `tan^-1`
sum whose product exceeds 1. If you write the condition next to every formula
and substitute every root back, this chapter cannot cost you a mark.
