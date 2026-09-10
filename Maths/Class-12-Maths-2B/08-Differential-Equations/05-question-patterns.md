# Differential Equations — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — ORDER AND DEGREE, NOTHING TO CLEAR                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the order and degree of ..." and the equation has
            no square roots and no fractional powers.
  METHOD    1. Find the highest derivative -> that is the ORDER.
            2. Read the power sitting on that derivative -> DEGREE.
  TRAP      Reading the power of the WRONG derivative.
            In  d2y/dx2 + 3(dy/dx)^2 = 5y  the degree is 1, not 2.
```

```
  PATTERN 2 — ORDER AND DEGREE AFTER CLEARING A RADICAL           2 marks
  ------------------------------------------------------------------------
  TRIGGER   A sqrt sign, or a power like ^(3/2), ^(1/3), ^(6/5)
            anywhere in the equation.
  METHOD    1. FIRST make the equation free of radicals and fractional
               powers. Square, cube, or raise to the qth power.
            2. Only now read off the order and the degree.
  EXAMPLES  sqrt(1 + (dy/dx)^2) = d2y/dx2   ->  square  ->  order 2, degree 2
            [1 + (dy/dx)^2]^(3/2) = a y''   ->  square  ->  order 2, degree 2
            y'' = [1 + (y')^2]^(1/3)        ->  cube    ->  order 2, degree 3
            [(y'')^2 + (y')^3]^(6/5) = 6y   ->  ^5      ->  order 2, degree 12
  TRAP      Reading the degree off the ORIGINAL equation. This is the
            single most common mistake in the whole chapter.
```

```
  PATTERN 3 — DEGREE NOT DEFINED                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   A DERIVATIVE sitting inside  sin, cos, tan, log or e^( ).
            Example:  d2y/dx2 + sin(dy/dx) = 0
  METHOD    1. State the ORDER as usual (it is always defined).
            2. Write "the degree is not defined, because the equation
               cannot be expressed as a polynomial in the derivatives".
  TRAP      Writing "order not defined". The ORDER is always defined.
            Also: sin x or e^x on their own are harmless. Only a
            derivative inside them causes the problem.
```

```
  PATTERN 4 — ORDER OF THE D.E. OF A FAMILY (count only)          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the order of the differential equation of all
            circles / all straight lines / all parabolas ... ?"
            or "how many arbitrary constants ... ?"
  METHOD    1. Write the general member of the family.
            2. COUNT the free constants.  That number is the order.
  EXAMPLES  all lines  y = mx + c            2 constants  ->  order 2
            all circles radius r fixed       2 constants  ->  order 2
            all circles (general)            3 constants  ->  order 3
            y = c1 e^x + c2 e^2x + c3 e^3x   3 constants  ->  order 3
  TRAP      Do not differentiate anything. This question is pure counting.
```

```
  PATTERN 5 — FORM THE D.E., ONE ARBITRARY CONSTANT               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Form the differential equation of  y = c x" ,
            "eliminate the arbitrary constant a from x^2 + y^2 = a^2".
  METHOD    1. Differentiate ONCE.
            2. Make the constant the subject of one equation.
            3. Substitute it into the other.
            4. Final answer must have NO letters left.
  SHORTCUT  If the family is an exponential, look for the original y
            inside the derivative:
                y = c e^(3x)  ->  y' = 3 c e^(3x) = 3y  ->  y' - 3y = 0
  TRAP      Leaving c in the answer. Then you have not answered at all.
```

```
  PATTERN 6 — FORM THE D.E., TWO ARBITRARY CONSTANTS          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two free letters, e.g.  y = A cos3x + B sin3x ,
            y = a x^2 + b x ,  x y = a e^x + b e^(-x).
  METHOD    1. Differentiate TWICE. You now have three equations.
            2. Eliminate the two constants between them.
            3. The result has order 2.
  MEMORISE  y = A cos nx + B sin nx      ->   y'' + n^2 y = 0
            y = A e^(nx) + B e^(-nx)     ->   y'' - n^2 y = 0
            y = a x^2 + b x              ->   x^2 y'' - 2x y' + 2y = 0
            x y = a e^x + b e^(-x)       ->   x y'' + 2 y' - x y = 0
  TRAP      Forgetting the product rule when the left side is x y.
            (x y)' = x y' + y , not x y'.
```

```
  PATTERN 7 — SHOW THAT A GIVEN FUNCTION IS A SOLUTION             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Verify that y = ... satisfies ..." or "Show that y = ...
            is a solution of ..."
  METHOD    1. Differentiate the given y as many times as needed.
            2. Substitute into the LEFT side of the equation.
            3. Simplify until it equals the right side.
            4. Write "hence it is a solution".
  TRAP      Substituting into both sides and juggling. Work on ONE side
            only and reduce it to the other.
```

```
  PATTERN 8 — FIND THE PARTICULAR SOLUTION                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The question ends with a condition such as
            "given y = 1 when x = 0" , "y(0) = 3" ,
            "the curve passes through (1, 1)".
  METHOD    1. Solve normally and get the general solution with + c.
            2. Substitute the given x and y values.
            3. Solve for c.
            4. Write the final answer with the number in place of c.
  TRAP      Stopping at the general solution. That loses the last marks.
            Read the last line of the question before you start writing.
```

```
  PATTERN 9 — VARIABLES SEPARABLE, BASIC                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   dy/dx equals a product or a fraction where the x-part and
            the y-part come apart cleanly.
            e.g. dy/dx = x^2 y ,  dy/dx = (1+y^2)/(1+x^2)
  METHOD    1. Get all the y's with dy on one side.
            2. Get all the x's with dx on the other side.
            3. Put an INT on both sides.
            4. Integrate. Add + c.
  TRAP      Forgetting + c. Also forgetting the modulus bars in log|y|.
```

```
  PATTERN 10 — VARIABLES SEPARABLE, EXPONENTIAL SPLIT             4 marks
  ------------------------------------------------------------------------
  TRIGGER   e^(x + y) , e^(x - y) , e^(3x - 2y) anywhere.
  METHOD    1. Split the exponential into a product:
                 e^(x+y) = e^x . e^y        e^(3x-2y) = e^(3x) . e^(-2y)
            2. Now it separates. Integrate.
  EXAMPLE   dy/dx = e^(3x-2y) + x^2 e^(-2y)
                  = e^(-2y) [ e^(3x) + x^2 ]
            -> e^(2y) dy = (e^(3x) + x^2) dx
            -> 3 e^(2y) = 2 e^(3x) + 2x^3 + c
  TRAP      Trying to integrate e^(x+y) as it stands. It will not work
            until you split it.
```

```
  PATTERN 11 — SEPARABLE WITH A QUADRATIC DENOMINATOR             4 marks
  ------------------------------------------------------------------------
  TRIGGER   Denominators like  x^2 + x + 1 ,  y^2 + y + 1 ,
            or  x^2 + 4 ,  1 + y^2 .
  METHOD    1. Separate.
            2. Complete the square in each denominator.
            3. Use   INT dt/(t^2 + a^2) = (1/a) tan^-1(t/a) .
            4. Tidy the constants.
  EXAMPLE   dy/dx + (y^2+y+1)/(x^2+x+1) = 0
            -> tan^-1((2x+1)/sqrt3) + tan^-1((2y+1)/sqrt3) = c
  TRAP      Getting the "a" wrong. For t^2 + 3/4 the value of a is
            sqrt(3)/2 , not 3/4 .
```

```
  PATTERN 12 — SEPARABLE NEEDING INTEGRATION BY PARTS             4 marks
  ------------------------------------------------------------------------
  TRIGGER   log x , y cos y , x e^x , tan^-1 y appear after separating.
  METHOD    1. Separate first.
            2. Use  INT u dv = u v - INT v du  with ILATE to choose u.
            3. Watch for terms that cancel -- they usually do.
  EXAMPLE   dy/dx = x(2 log x + 1)/(sin y + y cos y)
            LEFT  : -cos y + (y sin y + cos y)  =  y sin y
            RIGHT : x^2 log x - x^2/2 + x^2/2   =  x^2 log x
            ANSWER: y sin y = x^2 log x + c
  TRAP      Panicking at the size of the integrals. In every exam version
            of this question, terms cancel and the answer is short.
```

```
  PATTERN 13 — REDUCIBLE TO SEPARABLE,  v = a x + b y + c     4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   The WHOLE right side depends on one bracket only:
               dy/dx = (x + y)^2 ,  dy/dx = sin(x + y) ,
               dy/dx = (4x + 6y + 5)/(2x + 3y + 4)   [ both contain 2x+3y ]
  METHOD    1. Put  v = a x + b y + c .
            2. Then  dv/dx = a + b (dy/dx) , so
                     dy/dx = (dv/dx - a)/b .
            3. Substitute. It always separates.
            4. If the result is (linear in v)/(linear in v), force the
               top to look like the bottom before integrating.
            5. Put  v = a x + b y + c  back.
  TRAP      Choosing the wrong bracket. Look for the expression that
            appears in BOTH the numerator and the denominator.
```

```
  PATTERN 14 — HOMOGENEOUS EQUATION                       *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   Every term has the same total degree in x and y, or the
            right side can be written using y/x only.
            e.g. 2xy dy/dx = x^2 + y^2 ,  dy/dx = y/x + tan(y/x)
  METHOD    1. Write it as  dy/dx = ... .
            2. Put  y = v x  and  dy/dx = v + x dv/dx .
            3. The x's cancel. Isolate  x dv/dx .
            4. Separate:  dv/(F(v) - v) = dx/x .
            5. Integrate. Look for f'(v)/f(v) -- it usually appears.
            6. PUT  v = y/x  BACK.
  TIME      About 8 minutes.
  TRAP      Leaving v in the final answer. Automatic loss of marks.
```

```
  PATTERN 15 — HOMOGENEOUS WITH A SQUARE ROOT             *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   sqrt(x^2 + y^2) or sqrt(x^2 - y^2) in the equation.
            e.g. x dy - y dx = sqrt(x^2 + y^2) dx
  METHOD    1. Same as Pattern 14: put y = v x.
            2. sqrt(x^2 + v^2 x^2) becomes x sqrt(1 + v^2).
            3. The v's cancel, leaving  x dv/dx = sqrt(1 + v^2).
            4. Use  INT dv/sqrt(1+v^2) = log|v + sqrt(1+v^2)| .
            5. Put v = y/x back and clear the fractions.
  ANSWER    y + sqrt(x^2 + y^2) = c x^2
  TRAP      Forgetting that sqrt(x^2) = x only for x > 0. Say "taking
            x > 0" in one line and carry on.
```

```
  PATTERN 16 — NON-HOMOGENEOUS, LINES INTERSECT           *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   dy/dx = (ax + by + c)/(Ax + By + C)   AND   a/A is NOT b/B .
  METHOD    1. State the test result: the lines intersect.
            2. Solve  ax + by + c = 0  and  Ax + By + C = 0
               to get the point (h, k).
            3. Put  x = X + h ,  y = Y + k ,  so  dy/dx = dY/dX .
            4. The constants vanish -> homogeneous in X and Y.
            5. Solve with  Y = v X  (Pattern 14).
            6. Put  X = x - h  and  Y = y - k  back.
  TRAP      Skipping step 1. The examiner awards a mark just for stating
            the test. Also: forgetting to undo the shift at the end.
```

```
  PATTERN 17 — NON-HOMOGENEOUS, LINES PARALLEL            4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   dy/dx = (ax + by + c)/(Ax + By + C)  AND  a/A = b/B .
            e.g.  (x - y + 3)/(2x - 2y + 5) , since 1/2 = (-1)/(-2)
  METHOD    1. State the test result: the lines are parallel.
            2. Put  v = a x + b y  (the repeated bracket).
            3. Substitute using dv/dx = a + b (dy/dx).
            4. Separate, then force the top to look like the bottom.
            5. Integrate and put v back.
  ANSWER    for the example above:  x - 2y + log|x - y + 2| = c
  TRAP      Trying the origin shift. It fails, because parallel lines
            never meet. If solving for h and k gives 0 = 5, switch here.
```

```
  PATTERN 18 — FIND THE INTEGRATING FACTOR ONLY                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the integrating factor of ..." and nothing more.
  METHOD    1. DIVIDE until the coefficient of dy/dx is exactly 1.
            2. Read off P.
            3. IF = e^(INT P dx) .
            4. If INT P dx is a log, use e^(log A) = A .
  MEMORISE  P = 1/x      -> IF = x            P = -1/x      -> IF = 1/x
            P = n/x      -> IF = x^n          P = tan x     -> IF = sec x
            P = cot x    -> IF = sin x        P = k         -> IF = e^(kx)
            P = 2x/(1+x^2)      -> IF = 1 + x^2
            P = 1/(1+x^2)       -> IF = e^(tan^-1 x)
            P = 1/(x log x)     -> IF = log x
  TRAP      Reading P before dividing. In x dy/dx - y = x^3 the value of
            P is -1/x , not -1 .
```

```
  PATTERN 19 — LINEAR EQUATION  dy/dx + P y = Q           *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   y appears to the first power only, multiplied by a function
            of x, with dy/dx alone. No y^2, no sin y, no y dy/dx.
  METHOD    1. Divide so that dy/dx has coefficient 1.
            2. Write down P and Q on their own line.
            3. IF = e^(INT P dx) . Write it on its own line -- it is a mark.
            4. y (IF) = INT Q (IF) dx + c .
            5. Simplify the integral BEFORE integrating. Things cancel.
            6. Divide by IF if the question wants y explicitly.
  TIME      About 7 minutes.
  MEMORISE  dy/dx + y tan x = sin 2x      ->  y = c cos x - 2 cos^2 x
            (1+x^2) dy/dx + 2xy = 4x^2    ->  y(1+x^2) = 4x^3/3 + c
            dy/dx + y/x = x^2             ->  y x = x^4/4 + c
  TRAP      Writing y(IF) = INT Q dx , leaving out the IF inside the
            integral. Half the marks gone.
```

```
  PATTERN 20 — LINEAR IN x ,  dx/dy + P x = Q             *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The equation is ugly in y but x appears only to power 1.
            Look for  tan^-1 y ,  log y ,  e^y , or the shape
            "(something with x and y) dy/dx = 1".
  METHOD    1. Flip:  dx/dy = 1/(dy/dx) .
            2. Rearrange into  dx/dy + P x = Q  with P, Q in y.
            3. IF = e^(INT P dy)   <-- note the dy .
            4. x (IF) = INT Q (IF) dy + c .
  MEMORISE  (x + y + 1) dy/dx = 1            ->  x + y + 2 = c e^y
            (1+y^2)dx = (tan^-1 y - x)dy     ->  x = tan^-1 y - 1
                                                     + c e^(-tan^-1 y)
  TRAP      Flipping the equation but still integrating with respect to x.
            Once you flip, EVERY integral is with respect to y.
```

```
  PATTERN 21 — BERNOULLI  dy/dx + P y = Q y^n             *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   A power of y sitting on the RIGHT of an otherwise linear
            equation. Usually y^2.
            e.g.  x dy/dx + y = 2x^2 y^2 ,  dy/dx + y/x = y^2
  METHOD    1. Divide so dy/dx has coefficient 1.
            2. Divide EVERY term by y^n.
            3. Put v = y^(1-n) .  For n = 2 that is v = 1/y .
            4. Note dv/dx = (1-n) y^(-n) dy/dx , so for n = 2
                     y^(-2) dy/dx = - dv/dx .
            5. You now have a LINEAR equation in v. Solve with an IF.
            6. Put v = y^(1-n) back.
  MEMORISE  x dy/dx + y = 2x^2 y^2   ->   1/y = c x - 2 x^2
            dy/dx + y/x = y^2        ->   1/y = x (c - log|x|)
  TRAP      Sign errors at step 4. Write dv/dx = -y^(-2) dy/dx explicitly
            on its own line before substituting.
```

```
  PATTERN 22 — BERNOULLI IN DISGUISE (trig / log substitutions)   7 marks
  ------------------------------------------------------------------------
  TRIGGER   sin 2y with cos^2 y ,  sec^2 y (dy/dx) ,
            cos y (dy/dx) with sin y elsewhere ,
            (1/y)(dy/dx) with log y elsewhere.
  METHOD    1. Divide by the power of cos y (or whatever) that makes a
               single tan y (or sin y, or log y) appear.
            2. Put v equal to that function.
                 sec^2 y dy/dx present   ->   v = tan y
                 cos y dy/dx present     ->   v = sin y
                 (1/y) dy/dx present     ->   v = log y
            3. Linear in v. Use the IF.
            4. Put v back.
  EXAMPLE   dy/dx + x sin2y = x^3 cos^2 y
            -> sec^2 y dy/dx + 2x tan y = x^3
            -> v' + 2x v = x^3 , IF = e^(x^2)
            -> tan y = (x^2 - 1)/2 + c e^(-x^2)
  TRAP      Not spotting that sin 2y / cos^2 y = 2 tan y . Write that line
            out; it is the whole key to the question.
```

```
  PATTERN 23 — EXACT DIFFERENTIAL SHORTCUT                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   x dy + y dx , or x dy - y dx , or x dx + y dy standing alone.
  METHOD    Recognise the pattern and integrate at sight:
                 x dy + y dx        =  d(x y)          ->  x y = c
                 (x dy - y dx)/x^2  =  d(y/x)          ->  y = c x
                 x dx + y dy        =  (1/2)d(x^2+y^2) ->  x^2+y^2 = c
                 (x dy - y dx)/(x^2+y^2) = d(tan^-1(y/x))
  TRAP      Not looking for it. Students spend five minutes separating
            variables on a question that takes one line.
```

```
  PATTERN 24 — GROWTH AND DECAY                               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the rate of change is proportional to the amount present" ,
            "radioactive" , "half-life" , "population doubles" ,
            "bacteria multiply".
  METHOD    1. Write  dN/dt = k N .
            2. Separate:  dN/N = k dt  ->  N = N0 e^(k t) .
            3. Use the first piece of data to find k (or e^(k t0)).
            4. Use the second piece to answer the question.
  SHORTCUT  For half-life T :        N / N0 = ( 1/2 )^( t / T )
            For doubling time T :    N / N0 = 2^( t / T )
            If the target is 4x, 8x, 16x -- just count doublings.
  TRAP      Turning k into a decimal too early. Keep it as log2/T until
            the very last line.
```

```
  PATTERN 25 — NEWTON'S LAW OF COOLING                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "cools" , "temperature of the surroundings" ,
            "a body at 80 degrees is placed in air at 20 degrees".
  METHOD    1. Write  dT/dt = -k (T - S) .
            2. Separate and integrate:  T - S = (T0 - S) e^(-k t) .
            3. Use the first data point to find e^(-k t1) as a FRACTION.
            4. For the next equal time interval, square that fraction.
  EXAMPLE   80 -> 60 in 20 min, room 20 degrees.
            Excess: 60 -> 40 , so the ratio is 2/3 .
            After another 20 min:  60 x (2/3)^2 = 80/3 , T = 46.67 degrees.
  TRAP      Using T instead of (T - S). The law is about the EXCESS
            temperature, not the temperature itself.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +-----------------------------------------------------------+---------+
  |  QUESTION STEM                                            | PATTERN |
  +-----------------------------------------------------------+---------+
  |  "sqrt(1 + (dy/dx)^2) = d2y/dx2 . Find the degree."        |    2    |
  |  "d2y/dx2 + sin(dy/dx) = 0 . Find order and degree."       |    3    |
  |  "Order of the D.E. of all circles of radius r"            |    4    |
  |  "Form the D.E. of y = A cos3x + B sin3x"                  |    6    |
  |  "Find the integrating factor of x dy/dx - y = x^3"        |   18    |
  |  "Solve dy/dx + y tan x = sin 2x"                          |   19    |
  |  "Solve 2xy dy/dx = x^2 + y^2"                             |   14    |
  |  "Solve dy/dx = (x + y)^2"                                 |   13    |
  |  "Solve dy/dx = (2x + y - 3)/(x - 2y + 1)"                 |   16    |
  |  "Solve dy/dx = (x - y + 3)/(2x - 2y + 5)"                 |   17    |
  |  "Solve (x + y + 1) dy/dx = 1"                             |   20    |
  |  "Solve x dy/dx + y = 2 x^2 y^2"                           |   21    |
  |  "Solve dy/dx + x sin 2y = x^3 cos^2 y"                    |   22    |
  |  "Solve x dy + y dx = 0"                                   |   23    |
  |  "Half of a radioactive substance decays in 1600 years"    |   24    |
  |  "A body cools from 80 to 60 degrees in 20 minutes"        |   25    |
  |  "Solve dy/dx = e^(3x - 2y) + x^2 e^(-2y)"                 |   10    |
  |  "... given that y = 0 when x = pi/3"                      |    8    |
  |  "Solve x dy - y dx = sqrt(x^2 + y^2) dx"                  |   15    |
  |  "Solve dy/dx + (y^2+y+1)/(x^2+x+1) = 0"                   |   11    |
  +-----------------------------------------------------------+---------+
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**

---

# THE PATTERNS RANKED BY HOW OFTEN THEY APPEAR

```
  +------+----------------------------------------+-----------+------------+
  | RANK |  PATTERN                               |  MARKS    |  CHANCE    |
  +------+----------------------------------------+-----------+------------+
  |   1  |  19  Linear, IF method                 |     7     |  almost    |
  |      |                                        |           |  every yr  |
  |   2  |  2   Order/degree, clear the radical   |     2     |  almost    |
  |      |                                        |           |  every yr  |
  |   3  |  14  Homogeneous, y = v x              |     7     |  very high |
  |   4  |  6   Form the D.E., 2 constants        |   2 or 4  |  very high |
  |   5  |  18  Find the integrating factor       |     2     |  very high |
  |   6  |  9   Separable, basic                  |   2 or 4  |  very high |
  |   7  |  13  Reducible, v = ax + by + c        |   4 or 7  |  high      |
  |   8  |  16  Non-homogeneous, lines meet       |     7     |  high      |
  |   9  |  20  Linear in x                       |     7     |  moderate  |
  |  10  |  21  Bernoulli                         |     7     |  moderate  |
  |  11  |  17  Non-homogeneous, parallel         |   4 or 7  |  moderate  |
  |  12  |  24 / 25  Growth-decay and cooling     |     4     |  moderate  |
  +------+----------------------------------------+-----------+------------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

You do not need all 25 patterns. Work down this list and stop when you run out
of time. Each block is worth real marks on its own.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  BLOCK 1  --  THE 4 MARKS NOBODY SHOULD EVER LOSE                  |
  |                                                                    |
  |    Patterns 1, 2, 3, 4, 5                                          |
  |                                                                    |
  |    Order and degree, and counting arbitrary constants.             |
  |    Total study time: about 90 minutes.                             |
  |    These are 2-markers in Section A where you answer ALL 10.       |
  |    There is no excuse for losing them.                             |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |                                                                    |
  |  BLOCK 2  --  THE 7-MARK QUESTION YOU WILL DEFINITELY GET          |
  |                                                                    |
  |    Pattern 19  (LINEAR, dy/dx + P y = Q)                           |
  |    plus Pattern 18 (finding the IF on its own)                     |
  |                                                                    |
  |    Learn the three memorised examples end to end:                  |
  |       dy/dx + y tan x = sin 2x                                     |
  |       (1 + x^2) dy/dx + 2xy = 4x^2                                 |
  |       dy/dx + y/x = x^2                                            |
  |                                                                    |
  |    Total study time: about 3 hours.                                |
  |    Worth 7 marks in Section C plus 2 marks in Section A.           |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |                                                                    |
  |  BLOCK 3  --  THE SECOND 7-MARK OPTION                             |
  |                                                                    |
  |    Pattern 14  (HOMOGENEOUS, y = v x)                              |
  |                                                                    |
  |    Learn:  2xy dy/dx = x^2 + y^2                                   |
  |            dy/dx = y/x + tan(y/x)                                  |
  |                                                                    |
  |    Total study time: about 2 hours.                                |
  |    Now you have TWO 7-mark methods, so whichever one the board     |
  |    sets, you are covered.                                          |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |                                                                    |
  |  BLOCK 4  --  THE 4-MARK SECTION B QUESTION                        |
  |                                                                    |
  |    Patterns 6, 9, 10                                               |
  |                                                                    |
  |    Forming a D.E. from two constants, and separable equations       |
  |    including the exponential split.                                |
  |                                                                    |
  |    Total study time: about 2 hours.                                |
  |                                                                    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |                                                                    |
  |  BLOCK 5  --  IF YOU STILL HAVE TIME                               |
  |                                                                    |
  |    Patterns 13, 16, 17, 20, 21, 24, 25                             |
  |                                                                    |
  |    Reducible forms, non-homogeneous, linear in x, Bernoulli,       |
  |    growth-decay and cooling.                                       |
  |                                                                    |
  |    These turn a safe pass into a strong score.                     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The exam-hall tactic that is worth 7 marks by itself

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Differential Equations is usually Q24 -- the LAST question on     |
  |   the Maths IIB paper.                                             |
  |                                                                    |
  |   Most students never reach it. It is also one of the EASIEST      |
  |   7-mark questions in the whole book.                              |
  |                                                                    |
  |   So:  turn to Q24 FIRST when the paper starts.                    |
  |        Do it while you are fresh and while the recipe is loud in   |
  |        your head. Then go back to Q1.                              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Three lines to say out loud before you walk into the hall

```
  1.  Clear the radicals BEFORE reading the degree.

  2.  IF = e^(INT P dx)  and  y(IF) = INT Q(IF) dx + c .

  3.  Put v = y/x back, and always add + c .
```
