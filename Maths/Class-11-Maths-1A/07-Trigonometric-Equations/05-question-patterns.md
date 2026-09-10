# Trigonometric Equations — Every Question Pattern

A "pattern" is a question SHAPE. The numbers and the angles change every year.
The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

`n` is an integer in every answer on this page. Writing that phrase is worth
half a mark, every time, in every question.

---

```
  PATTERN 1 — FIND THE PRINCIPAL SOLUTION / PRINCIPAL VALUE        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the principal solution of sin theta = 1/sqrt2",
            "find the principal value of theta if tan theta = -1".
            Note: SINGULAR "solution", and NO n in the answer.
  METHOD    1. Write down the principal range for that ratio:
                  sin -> [-pi/2, pi/2]   cos -> [0, pi]   tan -> (-pi/2, pi/2)
            2. Find the ONE standard angle inside that range with the
               given value.
            3. For a NEGATIVE value:
                  sin, tan -> the answer is a NEGATIVE angle
                  cos      -> the answer is in the SECOND quadrant
            4. State it. No n, no formula.
  TRAP      Giving 7pi/6 for sin theta = -1/2 instead of -pi/6.
            It is a solution, but it is outside the principal range.
```

```
  PATTERN 2 — GENERAL SOLUTION OF sin theta = k                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Solve sin theta = 1/2", "find the general solution of
            sin theta = -sqrt3/2", "cosec theta = 2".
  METHOD    1. If it is cosec, flip it to sin first.
            2. Write k as sin alpha with alpha in [-pi/2, pi/2].
               Negative k -> negative alpha.
            3. theta = n pi + (-1)^n alpha , n an integer.
            4. Special cases: sin theta = 1 -> 2 n pi + pi/2
                              sin theta = -1 -> 2 n pi - pi/2
                              sin theta = 0 -> n pi
  TRAP      Using 2 n pi +- alpha. That is the COSINE formula and it gives
            the wrong family entirely.
```

```
  PATTERN 3 — GENERAL SOLUTION OF cos theta = k                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Solve cos theta = -1/2", "sec theta = 2".
  METHOD    1. If it is sec, flip it to cos first.
            2. Write k as cos alpha with alpha in [0, pi].
               Negative k -> alpha is in the SECOND quadrant.
            3. theta = 2 n pi +- alpha , n an integer.
            4. Special cases: cos theta = 1 -> 2 n pi
                              cos theta = -1 -> (2n + 1) pi
                              cos theta = 0 -> (2n + 1) pi/2
  TRAP      Writing n pi +- alpha instead of 2 n pi +- alpha.
            The missing 2 doubles your solution set with wrong angles.
```

```
  PATTERN 4 — GENERAL SOLUTION OF tan theta = k                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Solve tan theta = sqrt3", "cot theta = -1/sqrt3".
  METHOD    1. If it is cot, flip to tan first (cot th = k -> tan th = 1/k).
            2. Write k as tan alpha with alpha in (-pi/2, pi/2).
            3. theta = n pi + alpha , n an integer.
            4. If k is not a standard value, write alpha = Arctan k and
               leave it. That IS the answer.
  TRAP      Attaching a +- to a tan answer. There is none. Tangent has
            period pi, so ONE ladder covers everything.
```

```
  PATTERN 5 — THE ZERO EQUATIONS                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   sin theta = 0 , cos theta = 0 , tan theta = 0 , cot theta = 0 -
            usually appearing as a FACTOR after you have factorised.
  METHOD    sin theta = 0   ->  theta = n pi
            tan theta = 0   ->  theta = n pi
            cos theta = 0   ->  theta = (2n + 1) pi / 2
            cot theta = 0   ->  theta = (2n + 1) pi / 2
            sec theta = 0 or cosec theta = 0  ->  NO SOLUTION
  TRAP      Answering n pi/2 for cos theta = 0. That family includes 0 and
            pi, where the cosine is +-1, not 0. You need the (2n + 1).
```

```
  PATTERN 6 — THE ANGLE IS A MULTIPLE: sin k theta = ...           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Solve cos 3 theta = 0", "sin 2 theta = 1/2",
            "tan 2 theta = 1".
  METHOD    1. Treat k theta as ONE symbol. Do NOT divide yet.
            2. Apply the general-solution formula to k theta.
            3. NOW divide the ENTIRE right-hand side by k.
            4. Simplify: e.g. (2n+1) pi/2 divided by 3 is (2n+1) pi/6.
  TRAP      Dividing at the START. cos 3 theta = 0 does NOT become
            cos theta = 0. This is the single most common error in the
            chapter.
```

```
  PATTERN 7 — A SQUARED RATIO EQUALS A NUMBER                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   2 cos^2 th = 1 , tan^2 th = 3 , 4 sin^2 th = 1 ,
            sec^2 th = 4 , cosec^2 th = 2 .
  METHOD    1. Isolate sin^2 / cos^2 / tan^2 on one side.
               (For sec^2 and cosec^2, flip to cos^2 and sin^2 first.)
            2. Write the number as the SQUARE of a standard value.
            3. theta = n pi +- alpha , n an integer.
               ALL THREE squared forms give the SAME shape.
  TRAP      Splitting into two cases (+ root and - root) and then writing
            two separate answers. Correct but slow, and the two must be
            merged into n pi +- alpha anyway.
```

```
  PATTERN 8 — sec / cosec / cot IN THE EQUATION                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any equation whose leading ratio is sec, cosec or cot.
  METHOD    1. Flip immediately:
                  sec th = k    ->  cos th = 1/k
                  cosec th = k  ->  sin th = 1/k
                  cot th = k    ->  tan th = 1/k
            2. Solve as Pattern 2, 3 or 4.
            3. Note the domain: sec/tan need cos th != 0 ;
                                cosec/cot need sin th != 0 .
  TRAP      sec theta = 1/2 or cosec theta = 0.3 have NO SOLUTION, because
            |sec| and |cosec| are always at least 1. Say so and stop.
```

```
  PATTERN 9 — ONE sin AND ONE cos, FIRST POWER: MAKE IT A tan      2 marks
  ------------------------------------------------------------------------
  TRIGGER   sin theta = cos theta , sin theta + cos theta = 0 ,
            sqrt3 sin theta = cos theta , a sin th = b cos th .
  METHOD    1. Check that cos theta = 0 is not a solution (it never is
               for these, because it would force sin theta = 0 too).
            2. Divide both sides by cos theta.
            3. tan theta = the ratio.
            4. theta = n pi + alpha .
  TRAP      Squaring instead of dividing. Squaring drags in the extra
            family with the wrong sign and you then have to check.
```

```
  PATTERN 10 — REDUCE TO ONE RATIO WITH sin^2 + cos^2 = 1          4 marks
  ------------------------------------------------------------------------
  TRIGGER   ONE angle throughout, but a MIXTURE of sin and cos, with one
            of them squared. e.g. 2 cos^2 th + sqrt3 sin th + 1 = 0 .
  METHOD    1. See which ratio appears to the FIRST power. KEEP that one.
            2. Convert the SQUARED one using cos^2 = 1 - sin^2 (or the
               other way round).
            3. You now have a quadratic in one ratio -> Pattern 12.
            4. Reject impossible roots, solve each survivor.
  TRAP      Converting the wrong one and creating a square root. Keep
            whichever ratio appears unsquared.
```

```
  PATTERN 11 — EVERY TERM DEGREE TWO: DIVIDE BY cos^2 theta        4 marks
  ------------------------------------------------------------------------
  TRIGGER   1 + sin^2 th = 3 sin th cos th ,
            a sin^2 th + b sin th cos th + c cos^2 th = 0 .
            Clue: writing the constant as (sin^2 + cos^2) makes EVERY
            term degree 2.
  METHOD    1. Check cos theta = 0 is not a solution (substitute it).
            2. Divide the whole equation by cos^2 theta.
            3. Use sec^2 = 1 + tan^2 to make it a quadratic in tan.
            4. Solve; NEVER reject a tan root for being large.
            5. If a root is not standard, answer n pi + Arctan(root).
  TRAP      Forgetting to check that cos theta = 0 is safe before dividing.
            Also: rejecting tan theta = 1/2 as "not a nice angle". It is a
            perfectly good answer written as Arctan(1/2).
```

```
  PATTERN 12 — QUADRATIC IN sin / cos / tan                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   2 sin^2 th - 3 sin th + 1 = 0 ,
            4 cos^2 th + sqrt3 = 2(sqrt3 + 1) cos th ,
            cot^2 x - (sqrt3+1) cot x + sqrt3 = 0 .
  METHOD    1. Substitute s = sin theta (or c, or t). Write a clean
               quadratic a s^2 + b s + c = 0.
            2. Factorise, or use the quadratic formula.
            3. REJECT any root outside [-1, 1] for sin or cos, and WRITE
               THE REASON in words.
            4. Solve EACH surviving root with its own general solution.
            5. Present both families.
  TRAP      Giving only one family. A quadratic gives two roots; the
            examiner expects two answers unless one was rejected.
```

```
  PATTERN 13 — FACTORISE A PRODUCT TO ZERO (never cancel)          4 marks
  ------------------------------------------------------------------------
  TRIGGER   The same ratio appears on both sides: sin 2th = cos th ,
            sin 2th + sin th = 0 , 2 sin^2 th + sin^2 2th = 2 .
  METHOD    1. Expand any double angle (sin 2th = 2 sin th cos th).
            2. Bring EVERYTHING to one side, so the equation reads "= 0".
            3. Take out the common factor.
            4. Set EACH factor to zero and solve separately.
            5. Label them CASE 1, CASE 2 on the paper.
  TRAP      Cancelling the common factor. Cancelling cos theta deletes the
            entire family theta = (2n+1) pi/2. That is half the marks.
```

```
  PATTERN 14 — THREE TERMS, ANGLES th, 2th, 3th: SUM -> PRODUCT    4 marks
  ------------------------------------------------------------------------
  TRIGGER   sin th + sin 2th + sin 3th = 0 ,
            cos th + cos 2th + cos 3th = 0 ,
            sin th + sin 3th + sin 5th = 0 ,
            sin x + sin 5x = sin 3x .
  METHOD    1. Pair the OUTER two terms (first and last). Their half-sum
               is exactly the middle angle - that is why it works.
            2. sinC + sinD = 2 sin((C+D)/2) cos((C-D)/2)
               cosC + cosD = 2 cos((C+D)/2) cos((C-D)/2)
            3. The middle term is now a common factor. Factor it out.
            4. Two cases; solve each.
  TRAP      Pairing the first two instead of the outer two. It "works" but
            leaves a mess with no common factor, and you run out of time.
```

```
  PATTERN 15 — FOUR TERMS: PAIR OUTER AND INNER              4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   cos th + cos 2th + cos 3th + cos 4th = 0 (and sine versions).
  METHOD    1. Pair the OUTER two (1st with 4th) and the INNER two
               (2nd with 3rd).
            2. Both pairs produce the SAME first factor (here cos(5th/2)).
            3. Take it out; transform the bracket that is left.
            4. You end with a product of THREE factors = 0.
            5. Solve all three cases.
  TRAP      Stopping after two cases. There are three. Also: forgetting
            that some families overlap when you list roots in an interval -
            do not count the same angle twice.
```

```
  PATTERN 16 — A SINE ON ONE SIDE, A COSINE ON THE OTHER           4 marks
  ------------------------------------------------------------------------
  TRIGGER   cos 3 theta = sin 2 theta , sin 5x = cos 2x .
  METHOD    1. Convert one of them: sin A = cos(pi/2 - A)
                                    (or cos A = sin(pi/2 - A)).
            2. Now both sides are cosines (or both sines).
            3. Apply cos X = cos Y -> X = 2 n pi +- Y
               (or sin X = sin Y -> X = n pi + (-1)^n Y).
            4. Split into the + case and the - case; solve for theta in
               each; simplify to the neatest form, e.g. (4n+1) pi/10.
  TRAP      Comparing a sine directly to a cosine and applying a formula.
            You must convert first. Also, do not forget the SECOND case.
```

```
  PATTERN 17 — A PRODUCT OF SINES OR COSINES                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   4 sin th sin 2th sin 4th = sin 3th ,
            cos th cos 2th cos 4th = 1/8 .
  METHOD    1. Take TWO of the factors and use product-to-sum:
                  2 sinA sinB = cos(A - B) - cos(A + B)
                  2 cosA cosB = cos(A + B) + cos(A - B)
            2. Multiply out again with 2 sinA cosB = sin(A+B) - sin(B-A).
            3. Cancel any term that appears on both sides.
            4. Transform what is left back into a PRODUCT.
            5. Factorise and solve.
  TRAP      Trying to expand everything into sin theta and cos theta.
            You will drown. Use product-to-sum, one pair at a time.
```

```
  PATTERN 18 — a cos theta + b sin theta = c                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   NUMBER coefficients in front of both cos and sin, equal to a
            number. sqrt3 cos th + sin th = 1 ,
            sqrt2 (sin th + cos th) = sqrt3 , cos th + sqrt3 sin th = sqrt2.
  METHOD    1. r = sqrt(a^2 + b^2).
            2. STATE and CHECK the existence condition c^2 <= a^2 + b^2.
            3. Divide the whole equation by r.
            4. Recognise the coefficients as cos alpha and sin alpha for a
               standard alpha, and compress to cos(theta - alpha) = c/r.
               (Or fold into sin(theta + alpha) if that makes alpha nicer.)
            5. Write c/r as cos beta.
            6. theta - alpha = 2 n pi +- beta, so
               theta = 2 n pi +- beta + alpha.
            7. Write BOTH families out separately and simplify.
  TRAP      Skipping step 2, and skipping step 7. Half the marks are in
            writing the two simplified families, not in the compression.
```

```
  PATTERN 19 — DOES A SOLUTION EXIST? / FIND THE RANGE OF k        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that 3 cos th + 4 sin th = 6 has no solution",
            "find the values of k for which cos th + sin th = k is
            solvable", "prove that sin th = 5/2 is impossible".
  METHOD    1. For a single ratio: |sin|, |cos| <= 1 ; |sec|, |cosec| >= 1.
            2. For a cos th + b sin th : the value lies between
               -sqrt(a^2+b^2) and +sqrt(a^2+b^2).
            3. Compare with the right-hand side and conclude in WORDS.
  TRAP      Grinding through the algebra anyway and producing a fake
            answer. One line of bounds is the whole solution.
```

```
  PATTERN 20 — MAXIMUM AND MINIMUM OF a cos th + b sin th          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the maximum and minimum values of 3 cos th + 4 sin th",
            "find the maximum of 5 + 3 cos th + 4 sin th".
  METHOD    1. max = + sqrt(a^2 + b^2) ,  min = - sqrt(a^2 + b^2).
            2. If a constant c is added on, ADD c to both answers.
            3. Recognise the triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.
  TRAP      Answering a + b. The maximum is sqrt(a^2+b^2), not a + b,
            because cos and sin cannot both be 1 at the same angle.
```

```
  PATTERN 21 — SOLVED BY SQUARING: CHECK FOR EXTRANEOUS ROOTS      4 marks
  ------------------------------------------------------------------------
  TRIGGER   You reach a point where squaring is the only way forward -
            or the question already contains a square root.
            Classic: sin th + cos th = 1 .
  METHOD    1. Square both sides carefully.
            2. Solve the resulting equation for the general solution.
            3. SUBSTITUTE every family back into the ORIGINAL equation
               (test n = 0, 1, 2, 3 at least).
            4. KEEP the ones that work, REJECT the rest, and say which.
            5. Write the surviving families.
  TRAP      Not checking. Squaring MANUFACTURES roots.
            For sin th + cos th = 1, squaring gives theta = n pi/2, but
            theta = pi gives -1, not 1. Half that family is fake.
  BETTER    Where possible use Pattern 18 instead - it never creates
            extraneous roots.
```

```
  PATTERN 22 — DOMAIN REJECTION (tan, sec, cot, cosec present)     4 marks
  ------------------------------------------------------------------------
  TRIGGER   tan th + sec th = sqrt3 , tan th + 3 cot th = 5 sec th ,
            anything with sec or cosec in the ORIGINAL equation.
  METHOD    1. BEFORE solving, write the domain:
                  tan, sec present -> cos theta != 0
                  cot, cosec present -> sin theta != 0
            2. Solve normally.
            3. Test each family against the domain.
            4. Throw out any family that lands on the forbidden angles
               and SAY WHY.
  TRAP      Keeping a root at theta = 3pi/2 in a sec/tan question. At that
            angle the original equation does not even make sense, so the
            "solution" is worth negative marks in the examiner's eyes.
```

```
  PATTERN 23 — FIND THE ROOTS IN A GIVEN INTERVAL                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "...hence find the solutions in [0, 2 pi]",
            "solve for 0 < x < pi/2", "find all x in [0, 3 pi]".
  METHOD    1. GET THE GENERAL SOLUTION FIRST. Always.
            2. Take one family at a time.
            3. Substitute n = 0, 1, 2, ... until you pass the right end.
            4. Substitute n = -1, -2, ... until you pass the left end.
            5. Keep the values inside; watch < versus <= at the ends.
            6. Sort into increasing order and list them.
            7. Drop any value that breaks the domain (Pattern 22).
  TRAP      Answering only n = 0 and n = 1 and stopping. Also: forgetting
            that BOTH endpoints may count when the brackets are square.
```

```
  PATTERN 24 — HOW MANY SOLUTIONS IN AN INTERVAL?           2 marks / MCQ
  ------------------------------------------------------------------------
  TRIGGER   "The number of solutions of ... in [0, 2 pi] is ___".
  METHOD    1. Reduce to sin / cos / tan = k, or a product = 0.
            2. For sin x = k or cos x = k with |k| < 1 : TWO solutions
               per full turn of 2 pi.
            3. For sin kx = c on [0, 2 pi] : multiply the one-turn count
               by k, because kx sweeps k full turns.
            4. Delete roots that break the domain.
            5. Sketch the wave and the horizontal line and COUNT the
               crossings as a cross-check.
  TRAP      Counting an endpoint twice, or forgetting to multiply by the
            coefficient k. Both are off-by-one or off-by-double errors.
```

```
  PATTERN 25 — SIMULTANEOUS TRIGONOMETRIC EQUATIONS           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   TWO equations in the SAME angle:
            "sin theta = 1/2 and cos theta = -sqrt3/2, find theta".
  METHOD    1. Read the two SIGNS and use ASTC to fix the QUADRANT.
            2. Solve each equation; list its values in [0, 2 pi).
            3. Take the value COMMON to both lists. Call it beta.
            4. Answer theta = 2 n pi + beta, n an integer.
            5. If the lists share nothing, answer NO SOLUTION and justify
               (for example sin^2 + cos^2 would not equal 1).
  TRAP      Writing n pi + beta. Even when one of the equations was a tan
            equation, the COMBINED answer repeats only after a FULL turn,
            so it must be 2 n pi.
```

```
  PATTERN 26 — tan A + tan B + k tan A tan B = k                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   tan th + tan 2th + sqrt3 tan th tan 2th = sqrt3 ,
            or tan th + tan 2th + tan 3th = tan th tan 2th tan 3th .
  METHOD    1. Group so one side reads k ( 1 - tanA tanB ).
            2. Divide by (1 - tanA tanB).
            3. The left side becomes tan(A + B) exactly.
            4. Solve tan(A + B) = k with theta = n pi + alpha, then
               divide by the coefficient.
            For the product version: tanA + tanB + tanC = tanA tanB tanC
            holds exactly when A + B + C = n pi, so set the sum of the
            angles equal to n pi.
  TRAP      Expanding tan 2th into 2t/(1-t^2). It works and it takes ten
            times as long. Spot the tan(A+B) shape instead.
```

```
  PATTERN 27 — A RATIO OF TWO TANGENTS                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   3 tan(theta - 15) = tan(theta + 15) ,
            tan(A)/tan(B) = a number.
  METHOD    1. Write it as tan(big) / tan(small) = p / q.
            2. Expand both tangents into sin/cos and cross the fractions
               so the ratio reads
                  sin(X) cos(Y) / [ cos(X) sin(Y) ] = p / q .
            3. Apply COMPONENDO AND DIVIDENDO:
                  (num + den)/(num - den) = (p + q)/(p - q).
            4. The numerator becomes sin(X + Y) and the denominator
               becomes sin(X - Y). Both simplify beautifully.
            5. Solve the resulting simple sine equation.
  TRAP      Trying to expand tan(theta +- 15) with the compound formula.
            It leads to a quadratic in tan theta and a lot of surds.
```

```
  PATTERN 28 — USE THE BOUNDS TO PIN DOWN n                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   tan( pi cos theta ) = cot( pi sin theta ) ,
            or any equation where n ends up trapped between two bounds.
  METHOD    1. Convert cot to tan (cot A = tan(pi/2 - A)) so both sides
               are tangents.
            2. Apply tan X = tan Y -> X = n pi + Y.
            3. Simplify to something of the form
                  cos theta + sin theta = (an expression in n).
            4. Compress the left side: it lies in [-sqrt2, sqrt2].
            5. That inequality allows only a FEW integer values of n.
               Test them one by one.
            6. Substitute the survivors back to get the required result.
  TRAP      Leaving n general. The entire point of the question is that
            only n = 0 and n = -1 survive the bound.
```

```
  PATTERN 29 — DERIVE A GENERAL SOLUTION FROM FIRST PRINCIPLES  2-3 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the general solution of sin theta = sin alpha",
            "prove that cos theta = 0 implies theta = (2n+1) pi/2".
  METHOD    1. Bring to the form (something) - (something) = 0.
            2. Use the transformation formula to make it a PRODUCT = 0.
                  sinC - sinD = 2 cos((C+D)/2) sin((C-D)/2)
                  cosC - cosD = -2 sin((C+D)/2) sin((C-D)/2)
               (For tan, cross-multiply and use sin(A - B).)
            3. Set each factor to zero using the ZERO equations.
            4. Get two families, one with an EVEN multiple of pi and one
               with an ODD multiple.
            5. Combine them and state the condition on alpha.
  TRAP      Quoting the answer instead of deriving it. If the question
            says "derive" or "prove", the transformation step IS the mark.
```

```
  PATTERN 30 — sin A = cos B  WITH ACUTE ANGLES                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If x is acute and sin(x + 10) = cos(3x - 68), find x",
            "tan A = cot B, find A + B".
  METHOD    1. sin A = cos B and both acute  =>  A + B = 90 degrees.
               (Same for tan A = cot B, and sec A = cosec B.)
            2. Add the two given expressions, set the sum to 90.
            3. Solve the resulting LINEAR equation.
            4. Substitute back to check both angles really are acute.
  TRAP      Using the full general solution when the question says
            "acute". You will produce a family and lose the mark for not
            giving the single required value.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the question stem. Say the number.

| Question stem | Pattern |
|---|---|
| "Find the principal solution of cos theta = -1/2" | 1 |
| "Solve sin theta = -sqrt3/2" | 2 |
| "Solve sec theta = 2" | 3 (via 8) |
| "Find the general solution of tan theta = -1" | 4 |
| "Solve cot theta = 0" | 5 |
| "Solve cos 3 theta = 0" | 6 |
| "Solve 2 cos^2 theta = 1" | 7 |
| "Solve cosec theta = -2" | 8 |
| "Solve sin theta + cos theta = 0" | 9 |
| "Solve 2 cos^2 th + sqrt3 sin th + 1 = 0" | 10 then 12 |
| "Solve 1 + sin^2 theta = 3 sin theta cos theta" | 11 |
| "Solve 4 cos^2 th + sqrt3 = 2(sqrt3+1) cos th" | 12 |
| "Solve sin 2 theta = cos theta" | 13 |
| "Solve sin th + sin 2th + sin 3th = 0" | 14 |
| "Solve cos th + cos 2th + cos 3th + cos 4th = 0" | 15 |
| "Solve cos 3 theta = sin 2 theta" | 16 |
| "Solve 4 sin th sin 2th sin 4th = sin 3th" | 17 |
| "Solve sqrt3 cos theta + sin theta = 1" | 18 |
| "Show that 3 cos th + 4 sin th = 6 has no solution" | 19 |
| "Find the maximum value of 5 sin th + 12 cos th" | 20 |
| "Solve sin theta + cos theta = 1" | 21 (or 18) |
| "Solve tan theta + sec theta = sqrt3" | 22 |
| "...hence find the solutions in [0, 2 pi]" | 23 |
| "The number of solutions of cos 2x = sin x in [0, 2pi]" | 24 |
| "sin th = 1/2 and cos th = -sqrt3/2, find th" | 25 |
| "Solve tan th + tan 2th + sqrt3 tan th tan 2th = sqrt3" | 26 |
| "Solve 3 tan(theta - 15) = tan(theta + 15)" | 27 |
| "If tan(pi cos th) = cot(pi sin th), prove ..." | 28 |
| "Derive the general solution of sin theta = sin alpha" | 29 |
| "If x is acute and sin(x+10) = cos(3x-68), find x" | 30 |
| "Solve tan theta + 3 cot theta = 5 sec theta" | 10 + 22 |
| "Solve 2 sin^2 theta + sin^2 2 theta = 2" | 13 |
| "Solve cot^2 x - (sqrt3+1) cot x + sqrt3 = 0, 0 < x < pi/2" | 12 + 23 |

If you can put a number against every row without looking, you are ready
for this chapter.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +----------------------------------------------------------------+
  |                                                                |
  |  THE MINIMUM YOU MUST BE ABLE TO DO   (about 4 marks, safe)    |
  |                                                                |
  |    Patterns 1, 2, 3, 4, 5, 6, 7   ->  the Section A slot, 2M   |
  |    Pattern 18 (a cos + b sin = c) ->  the Section B slot, 4M   |
  |                                                                |
  |    Time needed: about 4 hours of practice.                     |
  |                                                                |
  +----------------------------------------------------------------+

  +----------------------------------------------------------------+
  |                                                                |
  |  THE FULL 6 MARKS FROM THIS CHAPTER                            |
  |                                                                |
  |    Add Patterns 10, 12, 13, 14      ->  covers almost every    |
  |                                          Section B version     |
  |    Add Patterns 22, 23              ->  the "and hence find    |
  |                                          the roots in [0,2pi]" |
  |                                          second half           |
  |                                                                |
  |    Time needed: about 8 hours of practice.                     |
  |                                                                |
  |    At that point, whichever equation they print in Section B,  |
  |    you have a method for it. That is the goal.                 |
  |                                                                |
  +----------------------------------------------------------------+

  +----------------------------------------------------------------+
  |                                                                |
  |  IF YOU HAVE ONE EVENING AND NOTHING ELSE                      |
  |                                                                |
  |    1. The seven general solutions, written out from memory     |
  |       ten times                                    (40 min)    |
  |    2. Patterns 2, 3, 4, 7 - twelve one-line questions          |
  |                                                    (40 min)    |
  |    3. Pattern 18 - THREE full solutions, written out           |
  |       with the existence check                     (50 min)    |
  |    4. Pattern 14 - sin th + sin 2th + sin 3th = 0 and the      |
  |       cosine twin, written out twice each          (30 min)    |
  |    5. Pattern 23 - list the roots in [0, 2 pi] for each of the |
  |       answers you produced above                   (20 min)    |
  |                                                                |
  |    That is about 3 hours and it buys a near-certain 4 marks    |
  |    plus a good chance at 2 more.                               |
  |                                                                |
  +----------------------------------------------------------------+
```

---

# THE HONEST SUMMARY

```
  This chapter will NOT give you a 7-mark long answer in Maths IA.
  Do not spend Section C revision time here.

  What it WILL give you, almost every year, is one 4-mark Section B
  question - and Section B is "answer any 5 of 7". Having one question
  that you can solve mechanically, without thinking, is worth far more
  than 4 marks: it buys you TIME for the questions you are less sure of.

  Learn Patterns 18, 14, 12, 13 and 10 properly. Those five cover the
  overwhelming majority of Section B trigonometric-equation questions
  ever set by BIEAP.

  And write "where n is an integer" at the end of every single answer.
```

---

# THE FIVE DECISIONS THAT SOLVE EVERY QUESTION IN THIS CHAPTER

```
  1.  Is it already sin th = k , cos th = k or tan th = k ?
         ->  name alpha, fire the matching formula, done.

  2.  Are there SEVERAL different angles (th, 2th, 3th) added up?
         ->  pair the OUTER two, sum into a product, factorise.

  3.  Is there ONE angle but a MIXTURE of sin and cos, with a square?
         ->  use sin^2 + cos^2 = 1 to get one ratio, then quadratic.

  4.  Are there NUMBER coefficients in front of cos th and sin th?
         ->  compute sqrt(a^2 + b^2), check c^2 <= a^2 + b^2, divide,
             compress into a single cosine.

  5.  Is tan / sec / cot / cosec anywhere in the ORIGINAL equation,
      or did I square at any point?
         ->  CHECK every family before writing the final answer.
```
