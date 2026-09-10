# Applications of Derivatives — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers and the story change every year.
The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — FIND delta y AND dy                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If y = f(x) and x changes from a to b, find delta y and dy."
  METHOD    1. Read off  x = a  and  dx = b - a  (keep the SIGN).
            2. delta y = f(b) - f(a)      <- exact arithmetic
            3. dy = f'(a) . dx            <- derivative times step
            4. State both.
  TRAP      delta y and dy are DIFFERENT numbers. Do not give the same
            answer twice. dx may be negative if x decreases.
```

```
  PATTERN 2 — APPROXIMATE VALUE OF A ROOT                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the approximate value of sqrt(82) / cbrt(999) / 17^(1/4)."
  METHOD    1. Write f(x) = the root function.
            2. Choose x = the NEAREST perfect square / cube / 4th power.
            3. dx = (given number) - (chosen x) . It may be negative.
            4. f'(x) = 1/(2 sqrt x)  or  1/(3 x^(2/3))  etc.
            5. Answer = f(x) + f'(x) dx . Give 4 decimal places.
  TRAP      Choosing a far-away x. sqrt(82) from x = 100 gives a bad answer.
            Nearest known value ALWAYS.
```

```
  PATTERN 3 — APPROXIMATE ERROR IN AREA / VOLUME                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The side / radius is measured as ... with an error of ... .
             Find the approximate error in the area / volume."
  METHOD    1. Write the geometry formula (A = x^2 , V = (4/3)pi r^3 ...).
            2. Differentiate: dA/dx  or  dV/dr.
            3. Substitute the measured value.
            4. Multiply by the error dx.  Write the UNITS.
  TRAP      Forgetting units: cm^2 for area, cm^3 for volume. Free mark lost.
```

```
  PATTERN 4 — RELATIVE AND PERCENTAGE ERROR                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "relative error" or "percentage error".
  METHOD    1. Find dy as in Pattern 3.
            2. relative error   = dy / y      (NO units)
            3. percentage error = 100 dy / y  (write the % sign)
  SHORTCUT  For y = x^n :   % error in y = n x (% error in x).
            Circumference n=1 , area n=2 , volume n=3 , side from volume n=1/3.
  TRAP      Writing the relative error with units, or forgetting the x 100.
```

```
  PATTERN 5 — SIMPLE RATE OF CHANGE                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   One quantity, one given rate. "The radius grows at 0.7 cm/s;
             find the rate of change of the circumference."
  METHOD    1. Write the formula linking them.
            2. Differentiate with respect to t.
            3. Substitute. Units are (unit of Q) per second.
  TRAP      Using the wrong geometry formula. Learn circle / sphere / cube
            / cylinder / cone by heart before the exam.
```

```
  PATTERN 6 — RELATED RATES : SPHERE OR BALLOON                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A spherical balloon is inflated at ... cubic cm per second."
  METHOD    1. V = (4/3) pi r^3
            2. dV/dt = 4 pi r^2 (dr/dt)
            3. Put in the given dV/dt and r ; solve for dr/dt.
            4. For surface area use S = 4 pi r^2 -> dS/dt = 8 pi r (dr/dt),
               using the dr/dt you just found.
  TRAP      Deflating means dV/dt is NEGATIVE.
```

```
  PATTERN 7 — RELATED RATES : SLIDING LADDER                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   A ladder against a wall, a foot being pulled away.
  METHOD    1. Draw the right triangle.  x^2 + y^2 = L^2 (L is CONSTANT).
            2. Differentiate:  x (dx/dt) + y (dy/dt) = 0
            3. Find the missing side by Pythagoras at that instant.
            4. Solve for the unknown rate.
  SHORTCUT  dy/dt = -(x/y)(dx/dt)
  TRAP      Substituting x = 4 BEFORE differentiating. That makes y a
            constant and gives the absurd answer 0. Differentiate first.
```

```
  PATTERN 8 — RELATED RATES : CONE FILLING WITH WATER             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Water is poured into an inverted cone / a conical vessel."
  METHOD    1. Use the semi-vertical angle or the given dimensions to write
               r = k h .  (45 degrees gives r = h.)
            2. V = (1/3) pi r^2 h  =  (1/3) pi k^2 h^3      ONE variable.
            3. dV/dt = pi k^2 h^2 (dh/dt)
            4. Substitute and solve for dh/dt.
  TRAP      Leaving r in the formula. You then have two unknown rates and
            the problem cannot be finished.
```

```
  PATTERN 9 — RELATED RATES : SPREADING CIRCLE / OIL SLICK        4 marks
  ------------------------------------------------------------------------
  TRIGGER   Ripples on water, an oil slick, a growing circular patch.
  METHOD    A = pi r^2  ->  dA/dt = 2 pi r (dr/dt)
            C = 2 pi r  ->  dC/dt = 2 pi (dr/dt)
  TRAP      The area grows FASTER as r grows even when dr/dt is constant.
            Do not assume dA/dt is constant.
```

```
  PATTERN 10 — VELOCITY AND ACCELERATION OF A PARTICLE            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "s = f(t) . Find the velocity / acceleration / when it is at rest."
  METHOD    v = ds/dt         a = dv/dt = d^2 s / dt^2
            "at rest"      ->  solve v = 0
            "changes direction" -> v changes sign
  TRAP      Displacement is s(t), not the derivative. Read which one is asked.
```

```
  PATTERN 11 — SLOPE OF THE TANGENT OR NORMAL AT A POINT          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the slope of the tangent / normal to ... at x = a."
  METHOD    1. dy/dx.
            2. Substitute the point  ->  m .
            3. If the NORMAL is asked, answer -1/m.
  TRAP      Giving m when the normal was asked. Underline the word
            "normal" in the question before you start.
```

```
  PATTERN 12 — SLOPE FOR A PARAMETRIC CURVE                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   The curve is given as  x = f(t) , y = g(t).
  METHOD    1. dx/dt and dy/dt separately.
            2. dy/dx = (dy/dt) / (dx/dt) .  SIMPLIFY - it usually collapses
               to something like -tan t or -cot t.
            3. Substitute the given t.
  TRAP      Writing (dx/dt)/(dy/dt) upside down.
```

```
  PATTERN 13 — EQUATIONS OF THE TANGENT AND NORMAL            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equations of the tangent and normal at (x1, y1)."
  METHOD    1. If y1 is missing, substitute x1 into the curve to get it.
            2. dy/dx , then substitute  ->  m.
            3. TANGENT:  y - y1 = m (x - x1)
            4. NORMAL :  y - y1 = (-1/m)(x - x1)
            5. Tidy both into ax + by + c = 0.
  CHECK     (slope of tangent) x (slope of normal) must equal -1.
  TRAP      If m = 0 the tangent is y = y1 and the normal is x = x1.
            If m is infinite, swap those two.
```

```
  PATTERN 14 — TANGENT PARALLEL / PERPENDICULAR TO A LINE         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "... where the tangent is parallel (or perpendicular) to
             the line ax + by + c = 0."
  METHOD    1. Slope of the given line  k = -a/b .
            2. PARALLEL      ->  set  dy/dx = k
               PERPENDICULAR ->  set  dy/dx = -1/k
            3. Solve for x. There are often TWO answers - give both.
            4. Find each y, then write each tangent.
  TRAP      Losing the second point. A cubic usually gives two.
```

```
  PATTERN 15 — POINTS WITH A HORIZONTAL OR VERTICAL TANGENT       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "tangent parallel to the x-axis / to the y-axis."
  METHOD    parallel to x-axis  ->  solve  dy/dx = 0
            parallel to y-axis  ->  solve  (denominator of dy/dx) = 0
            Then find the corresponding y (or x) from the curve.
  TRAP      Mixing up the two axes. x-axis is FLAT, so slope ZERO.
```

```
  PATTERN 16 — LENGTHS OF TANGENT, NORMAL, SUBTANGENT,        2 or 4 marks
               SUBNORMAL
  ------------------------------------------------------------------------
  TRIGGER   The words subtangent, subnormal, "length of the tangent".
  METHOD    With m = dy/dx at (x1, y1):
                 subtangent        = y1 / m
                 subnormal         = y1 . m
                 length of tangent = |y1 sqrt(1 + m^2) / m|
                 length of normal  = |y1 sqrt(1 + m^2)|
  TRAP      Swapping divide and multiply. Chant it:
            "sub-TANGENT divides, sub-NORMAL multiplies."
```

```
  PATTERN 17 — SHOW A SUBTANGENT OR SUBNORMAL IS CONSTANT         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the subnormal at any point on y^2 = 4ax is constant."
  METHOD    1. Differentiate IMPLICITLY, keep x and y as letters.
            2. Substitute into the sub-formula.
            3. Simplify until every x and y cancels.
            4. State "this contains no x or y, hence it is constant".
  KNOWN     y^2 = 4ax    ->  subnormal = 2a , subtangent = 2x
            y = a e^(x/b)->  subtangent = b
  TRAP      Substituting a numerical point. "Any point" means keep letters.
```

```
  PATTERN 18 — ANGLE BETWEEN TWO CURVES                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the curves ... and ... ."
  METHOD    1. Solve the two equations SIMULTANEOUSLY -> point(s) of
               intersection. (If the point is given, skip to step 2.)
            2. dy/dx of curve 1 -> substitute -> m1.
            3. dy/dx of curve 2 -> substitute -> m2.
            4. tan(theta) = |(m1 - m2) / (1 + m1 m2)| ,
               then theta = Tan inverse of that.
  TRAP      Forgetting step 1. Also: if 1 + m1 m2 = 0 the angle is 90 degrees;
            do not try to divide by zero.
```

```
  PATTERN 19 — SHOW TWO CURVES CUT ORTHOGONALLY                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... cut each other orthogonally" or "find k so that
             the curves are orthogonal".
  METHOD    1. Find the point(s) of intersection.
            2. Find m1 and m2 there.
            3. Show m1 . m2 = -1 . Write the sentence "hence orthogonal".
            4. If a constant is to be found, SET m1 m2 = -1 and solve for it.
  TRAP      Proving it at only one of several intersection points and not
            saying so. Add "similarly at the other points".
```

```
  PATTERN 20 — VERIFY ROLLE'S THEOREM                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Verify Rolle's theorem for f(x) = ... on [a, b]."
  METHOD    1. STATE the theorem.
            2. Check (i) continuity on [a, b] - say WHY
                     (ii) differentiability on (a, b) - say WHY
                     (iii) f(a) = f(b) - compute BOTH values.
            3. Differentiate. Solve f'(c) = 0.
            4. Show the root lies INSIDE (a, b). Reject the others.
            5. Conclude "Rolle's theorem is verified with c = ...".
  TRAP      Skipping the three checks and jumping to f'(x) = 0.
            Half the marks are for the verification, not for c.
```

```
  PATTERN 21 — VERIFY LAGRANGE'S MEAN VALUE THEOREM               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Verify the mean value theorem for f(x) = ... on [a, b]."
  METHOD    1. STATE the theorem (only TWO conditions here).
            2. Check continuity and differentiability.
            3. Compute  [f(b) - f(a)] / (b - a) .
            4. Set f'(c) equal to that and solve.
            5. Show c lies in (a, b).
  TRAP      Adding the condition f(a) = f(b). That belongs to ROLLE only.
```

```
  PATTERN 22 — "ROLLE'S THEOREM IS NOT APPLICABLE"                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Is Rolle's theorem applicable to f(x) = |x| on [-1, 1]?"
  METHOD    1. Test the three conditions one by one.
            2. The moment ONE fails, name it and STOP.
            3. Write "hence Rolle's theorem is not applicable".
  WATCH FOR |x| corner at 0 ; 1/x break at 0 ; tan x at pi/2 ;
            x^(1/3) vertical tangent at 0 ; f(a) not equal to f(b).
```

```
  PATTERN 23 — INTERVALS OF INCREASE AND DECREASE                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the intervals in which f is increasing / decreasing."
  METHOD    1. f'(x) , then FACTORISE completely.
            2. Roots of f'(x) = 0 -> mark them on a number line.
            3. Test one value in each region, record the SIGN.
            4. f' > 0 increasing , f' < 0 decreasing.
            5. Write the answer as INTERVALS.
  TRAP      Answering with points instead of intervals. Also: exclude any
            x where the function is undefined (for example x = 0 in 1/x).
```

```
  PATTERN 24 — PROVE f IS INCREASING (OR DECREASING) FOR ALL  2 or 4 marks
               x
  ------------------------------------------------------------------------
  TRIGGER   "Show that f(x) = x^3 + 3x + 5 is an increasing function."
  METHOD    1. f'(x).
            2. Show ALGEBRAICALLY that it can never be negative:
               - a sum of squares,  3(x^2 + 1)
               - a perfect square,  3(x - 1)^2
               - an exponential,    e^x > 0 always
            3. Conclude "f'(x) > 0 for all x, hence f is increasing on R".
  TRAP      Testing two or three numbers and calling it a proof. It is not.
```

```
  PATTERN 25 — LOCAL MAXIMA AND MINIMA                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the local maximum and minimum values of f(x) = ... ."
  METHOD    1. f'(x) = 0  ->  critical points c.
            2. f''(x) ; substitute each c.
            3. f''(c) < 0 -> MAXIMUM ;  f''(c) > 0 -> MINIMUM.
            4. Compute f(c) for the VALUE.
            5. If f''(c) = 0 , fall back to the first derivative test.
  TRAP      Giving the x-value when the VALUE of the maximum was asked, or
            the other way round. "Maximum point" and "maximum value" differ.
```

```
  PATTERN 26 — ABSOLUTE MAXIMUM AND MINIMUM ON [a, b]             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the greatest and least values of f on [a, b]."
  METHOD    1. f'(x) = 0 ; keep only the roots INSIDE [a, b].
            2. List: those roots, plus a, plus b.
            3. Evaluate f at every value in the list.
            4. Biggest = absolute maximum , smallest = absolute minimum.
  TRAP      Forgetting the endpoints. Also, no second derivative test is
            needed here - do not waste time on it.
```

```
  PATTERN 27 — APPLIED OPTIMISATION : MAXIMUM VALUE               7 marks
  ------------------------------------------------------------------------
  TRIGGER   "greatest area / largest volume / maximum product /
             show that the rectangle is a square"
  METHOD    1. DRAW a labelled figure.
            2. Write the quantity Q to be maximised.
            3. Use the CONSTRAINT to reduce Q to ONE variable, and state
               the allowed range of that variable.
            4. dQ/dx = 0 ; solve ; REJECT the impossible roots
               (zero or negative lengths).
            5. Second derivative test -> show it is NEGATIVE -> maximum.
            6. Answer the exact question asked and give the value.
  KNOWN     rectangle in a circle -> a square, area 2r^2
            box from a square sheet of side a -> x = a/6 , V = 2a^3/27
            fixed sum, maximum product -> the parts are equal
            x + y = S , maximise x^m y^n -> x = mS/(m+n)
  TRAP      Never reducing to one variable. You cannot differentiate an
            expression with two independent letters in it.
```

```
  PATTERN 28 — APPLIED OPTIMISATION : MINIMUM VALUE               7 marks
  ------------------------------------------------------------------------
  TRIGGER   "least surface area / minimum cost / shortest distance /
             least sum of squares"
  METHOD    Same six steps as Pattern 27, but at step 5 the second
            derivative must come out POSITIVE.
            For distance problems, minimise d^2 instead of d.
  KNOWN     cylinder of given volume, least surface -> h = 2r
            fixed sum, least sum of squares -> the parts are equal
            nearest point on a curve -> minimise d^2
  TRAP      Differentiating the square root in a distance problem. It works
            but the algebra usually collapses and you lose the marks.
```

---

# SELF-TEST

Cover the right-hand column. If you cannot answer within ten seconds, that row
is your revision for tonight.

| # | Question | Answer |
|---|----------|--------|
| 1 | The approximation formula | f(x+dx) ~ f(x) + f'(x) dx |
| 2 | delta y versus dy | delta y is exact, dy = f'(x)dx is approximate |
| 3 | Percentage error in volume if 2 % error in radius | 6 % |
| 4 | dV/dt for a sphere | 4 pi r^2 (dr/dt) |
| 5 | The ladder equation after differentiating | x(dx/dt) + y(dy/dt) = 0 |
| 6 | Cone with 45 degree semi-vertical angle: relation | r = h |
| 7 | Slope of the tangent | dy/dx at the point |
| 8 | Slope of the normal | -1 / (dy/dx) |
| 9 | Equation of the tangent | y - y1 = m(x - x1) |
| 10 | Tangent parallel to the x-axis means | dy/dx = 0 |
| 11 | Tangent parallel to the y-axis means | dy/dx is infinite |
| 12 | Subtangent | y1 / m |
| 13 | Subnormal | y1 . m |
| 14 | Length of the normal | y1 sqrt(1 + m^2) |
| 15 | Subnormal of y^2 = 4ax | 2a, a constant |
| 16 | Subtangent of y = a e^(x/b) | b, a constant |
| 17 | Angle between two curves | tan A = |(m1-m2)/(1+m1m2)| |
| 18 | Orthogonal condition | m1 m2 = -1 |
| 19 | Rolle's three conditions | continuous [a,b], differentiable (a,b), f(a)=f(b) |
| 20 | Rolle's conclusion | f'(c) = 0 for some c in (a,b) |
| 21 | Lagrange's conclusion | f'(c) = [f(b)-f(a)]/(b-a) |
| 22 | Geometrical meaning of Lagrange | tangent parallel to the chord |
| 23 | f'(x) > 0 means | f is increasing |
| 24 | f'(x) < 0 means | f is decreasing |
| 25 | Second derivative test for a maximum | f'(c)=0 and f''(c) < 0 |
| 26 | Second derivative test for a minimum | f'(c)=0 and f''(c) > 0 |
| 27 | If f''(c) = 0 | the test fails; use the first derivative test |
| 28 | Absolute max/min on [a,b]: what must you also check | the endpoints a and b |
| 29 | Largest rectangle in a circle of radius r | a square, area 2r^2 |
| 30 | Box from a square sheet of side a | cut x = a/6 , V = 2a^3/27 |
| 31 | Cylinder of given volume, least surface | h = 2r |
| 32 | Two numbers with a fixed sum, greatest product | the numbers are equal |
| 33 | x + y = S , maximise x^m y^n | x = mS/(m+n) , y = nS/(m+n) |
| 34 | Shortest distance to a curve: what do you minimise | d^2 , not d |
| 35 | Cone of greatest volume in a sphere of radius R | height 4R/3 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

You do not need all 28 patterns to score well. Work down this list and stop when
you run out of time — you will still be collecting the most likely marks first.

```
  +----------------------------------------------------------------------+
  |  TIER 1 - DO THESE NO MATTER WHAT           worth about 10 marks      |
  +----------------------------------------------------------------------+
  |  Pattern 2   Approximate value of a root                  2 marks    |
  |  Pattern 4   Relative and percentage error                2 marks    |
  |  Pattern 11  Slope of tangent / normal                    2 marks    |
  |  Pattern 13  Equations of tangent and normal              2-4 marks  |
  |  Pattern 20  Verify Rolle's theorem                       4 marks    |
  +----------------------------------------------------------------------+
                                    |
                                    v
  +----------------------------------------------------------------------+
  |  TIER 2 - THE 7-MARK QUESTION               worth 7 marks            |
  +----------------------------------------------------------------------+
  |  Pattern 27  Optimisation, maximum   -> learn the 3 classics:        |
  |                 rectangle in a circle, box from a sheet,             |
  |                 two numbers with a fixed sum                         |
  |  Pattern 28  Optimisation, minimum   -> learn the 2 classics:        |
  |                 cylinder of least surface, nearest point on a curve  |
  |                                                                      |
  |  Learn the ANSWERS first (square, a/6, h = 2r, equal numbers).       |
  |  Then work backwards through the algebra. You cannot get lost if     |
  |  you already know where you are going.                               |
  +----------------------------------------------------------------------+
                                    |
                                    v
  +----------------------------------------------------------------------+
  |  TIER 3 - THE RELIABLE 4-MARKERS            worth about 8 marks      |
  +----------------------------------------------------------------------+
  |  Pattern 7   Sliding ladder                               4 marks    |
  |  Pattern 6   Balloon / sphere                             4 marks    |
  |  Pattern 21  Lagrange's mean value theorem                4 marks    |
  |  Pattern 23  Intervals of increase and decrease           4 marks    |
  |  Pattern 25  Local maxima and minima                      4 marks    |
  +----------------------------------------------------------------------+
                                    |
                                    v
  +----------------------------------------------------------------------+
  |  TIER 4 - IF THERE IS TIME LEFT                                      |
  +----------------------------------------------------------------------+
  |  Pattern 16 / 17  subtangent and subnormal                           |
  |  Pattern 18 / 19  angle between curves, orthogonality                |
  |  Pattern 8 / 9    cone filling, spreading circle                     |
  |  Pattern 26       absolute max/min on a closed interval              |
  |  Pattern 14       tangent parallel / perpendicular to a line         |
  +----------------------------------------------------------------------+
```

**The honest arithmetic:** Tier 1 plus Tier 2 is about 17 marks out of 75, and it
is roughly two evenings of work. That is the single best return on time in the
whole Maths IB syllabus. Do Tier 1 and Tier 2 before you touch anything else.
