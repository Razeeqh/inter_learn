# Definite Integrals — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

If you can name the pattern, you already know the first three steps of the answer.

**The one habit that makes this chapter easy: READ THE LIMITS FIRST.**
The limits tell you the pattern before you have even looked at the function.

---

```
  PATTERN 1 — DIRECT EVALUATION, F(b) - F(a)                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   A standard integrand with two numbers on the integral sign.
            INT 0 to 2 (x^2 + 1) dx , INT 0 to pi/2 cos x dx ,
            INT 1 to e dx/x , INT 0 to pi/4 sec^2 x dx
  METHOD    1. Integrate. Write the answer in SQUARE BRACKETS with the
               limits on the right edge.
            2. Substitute the TOP limit.
            3. MINUS the value at the BOTTOM limit.
            4. Simplify to a single number.
  TRAP      Writing + c (a definite integral is a NUMBER).
            Doing F(a) - F(b). Say "TOP MINUS BOTTOM" out loud.
            Sign slips when F(a) is itself negative — use brackets.
```

```
  PATTERN 2 — SUBSTITUTION, WITH THE LIMITS CHANGED           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Something messy inside a bracket, root, power, log or
            exponential, with its derivative lying around outside.
            INT 0 to 1 x e^(x^2) dx , INT 0 to 1 x/(x^2+1) dx ,
            INT 0 to pi/2 sinx/(1+cos^2x) dx , INT 1 to e (log x)/x dx
  METHOD    1. Put t = the inner function.
            2. dt = (its derivative) dx.
            3. WRITE THE NEW LIMITS:  "when x = a, t = ... ;
                                       when x = b, t = ..."
            4. Integrate in t and substitute the NEW limits.
            5. Never go back to x.
  TRAP      *** THE BIGGEST MARK-LOSER IN THE CHAPTER ***
            Changing the variable but leaving the old limits.
            The examiner gives a mark for the "new limits" line alone —
            always write it.
            Second trap: with t = cos x the limits come out reversed.
            Flip them and drop the minus sign (that is Property P1).
```

```
  PATTERN 3 — INT f'(x)/f(x) dx WITH LIMITS                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   A FRACTION whose top is the derivative of the bottom
            (or a constant times it).
            INT 2 to 3 x/(x^2+1) dx , INT 0 to pi/2 cosx/(1+sinx) dx ,
            INT 0 to 1 e^x/(1+e^x) dx , INT 0 to pi/4 tan x dx
  METHOD    1. Confirm  top = k x d/dx( bottom ).
            2. Answer = k [ log | bottom | ] between the limits.
            3. Use log A - log B = log(A/B) to tidy up.
  TRAP      Forgetting the constant k when the top is half or double the
            derivative. Forgetting to combine the logs — an untidy answer
            can still lose the last mark.
```

```
  PATTERN 4 — DEFINITE INTEGRATION BY PARTS                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   A PRODUCT of two unrelated functions, or a lone log / inverse
            trig function, with limits.
            INT 0 to pi/2 x sin x dx , INT 0 to 1 x e^x dx ,
            INT 1 to e log x dx , INT 0 to 1 Tan^-1 x dx ,
            INT 0 to 1 x Tan^-1 x dx
  METHOD    1. Choose u by ILATE (Inverse, Log, Algebraic, Trig, Exp).
            2. Apply
                 [ u INT v dx ] between the limits  -  INT (u' INT v) dx
            3. Evaluate the square bracket -> a NUMBER.
            4. The leftover integral KEEPS the same limits. Do it.
  TRAP      Evaluating the bracket and then forgetting the limits on the
            second integral. Choosing u the wrong way round (then the new
            integral is worse than the old one — that is your signal to
            swap). For INT log x dx, remember the invisible "x 1".
```

```
  PATTERN 5 — PARTIAL FRACTIONS WITH LIMITS                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   A fraction with a FACTORISABLE polynomial on the bottom, and
            two numbers on the integral sign.
            INT 1 to 2 x/((x+1)(x+2)) dx , INT 0 to 1 dx/(x^2+5x+6) ,
            INT 2 to 3 dx/(x^2 - 1)
  METHOD    1. Factorise the bottom.
            2. Split into A/(x - a) + B/(x - b) and find A, B by the
               cover-up method (put x = a, then x = b).
            3. Integrate to logs.
            4. Substitute the limits and combine into ONE log.
  TRAP      Losing signs in A and B. Not simplifying the final logs into
            a single log(fraction) — the model answer always does.
            Check: does the bottom vanish anywhere between the limits?
            If it does, the integral does not exist and you have misread
            the question.
```

```
  PATTERN 6 — MODULUS, [x], OR A PIECEWISE FUNCTION          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Vertical bars, or a greatest-integer bracket, or a function
            defined "f(x) = ... for x < 1, ... for x > 1".
            INT 0 to 4 |x - 1| dx , INT 0 to 2pi |sin x| dx ,
            INT 0 to 2 [x] dx , INT 0 to 3 |x - 2| dx
  METHOD    1. Find where the inside changes sign.
            2. SPLIT the integral there (Property P2).
            3. Remove the bars correctly on each piece:
                  inside positive -> keep it
                  inside negative -> put a minus in front
            4. Evaluate both pieces and ADD.
  TRAP      Integrating the modulus directly. |x-1| does NOT integrate to
            |x-1|^2/2. Also: forgetting that the split point must lie
            INSIDE the limits — if it does not, there is nothing to split.
            Fast check: many of these are just triangles. Draw and count.
```

```
  PATTERN 7 — EVEN / ODD, LIMITS -a TO a                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   The limits are exactly  -a  and  +a .
            INT -1 to 1 x^3 dx , INT -2 to 2 (x^2+1) dx ,
            INT -pi/2 to pi/2 sin^5 x cos^2 x dx ,
            INT -1 to 1 (x^3 + x cosx + tan^5 x + 1) dx
  METHOD    1. Compute f(-x).
            2. f(-x) = -f(x)  ->  ODD   ->  answer is 0 .
               f(-x) =  f(x)  ->  EVEN  ->  answer is 2 INT 0 to a f dx.
            3. If the integrand is a SUM, test each term separately and
               throw away every odd one.
  TRAP      Seeing symmetric limits and writing 0 without testing.
            EVEN functions DOUBLE — they do not vanish.
            Also: the limits must be exactly -a and a. -1 to 2 gets
            nothing from this property.
            Reminders:  odd x odd = even ,  even x odd = odd .
```

```
  PATTERN 8 — THE 0 TO 2a TEST                                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   The top limit is exactly twice the natural midpoint:
            0 to pi (midpoint pi/2) , 0 to 2pi , 0 to 2a .
            INT 0 to pi sin^2 x dx , INT 0 to pi cos^3 x dx ,
            INT 0 to pi sin^3 x dx
  METHOD    1. Write a = half the top limit.
            2. Compute f( 2a - x ).
            3. f(2a-x) =  f(x)  ->  answer = 2 INT 0 to a f(x) dx
               f(2a-x) = -f(x)  ->  answer = 0
  TRAP      Confusing this with the even/odd test — different limits,
            different test. Useful facts:
              sin(pi - x) =  sin x   -> sin^n on 0 to pi DOUBLES
              cos(pi - x) = -cos x   -> cos^(odd) on 0 to pi is ZERO
```

```
  PATTERN 9 — THE  g / ( g + h )  PROPERTY                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   A fraction on 0 to a where replacing x by (a - x) SWAPS the
            two parts of the denominator.
            INT 0 to pi/2 sinx/(sinx+cosx) dx ,
            INT 0 to pi/2 dx/(1 + tan x) ,
            INT 0 to pi/2 sqrt(sinx)/(sqrt(sinx)+sqrt(cosx)) dx ,
            INT 0 to pi/2 sin^n x/(sin^n x + cos^n x) dx
  METHOD    1. Let I = the integral.                    ...(1)
            2. State P3: INT 0 to a f(x) = INT 0 to a f(a - x).
            3. Write the second version.                ...(2)
            4. ADD: the numerators combine to the denominator, leaving 1.
            5. 2I = INT 0 to a of 1 dx = a  ->  I = a/2 .
  TRAP      Not writing the property statement (that is a mark).
            Getting sin(pi/2 - x) and cos(pi/2 - x) the wrong way round.
            SHORTCUT to remember: the answer is always HALF THE INTERVAL.
            For 0 to pi/2 it is pi/4, every time, for any power n.
```

```
  PATTERN 10 — P3 WITH A LONE  x  IN FRONT                        7 marks
  ------------------------------------------------------------------------
  TRIGGER   Limits 0 to pi (or 0 to a), and a single x multiplying an
            expression that is UNCHANGED by x -> pi - x.
            INT 0 to pi x sinx/(1+cos^2x) dx ,
            INT 0 to pi x/(1 + sin x) dx ,
            INT 0 to pi x sin^3 x dx ,
            INT 0 to pi x/(1 + cos^2 x) dx
  METHOD    1. I = INT 0 to pi of x f(x) dx .                    ...(1)
            2. Replace x by (pi - x) EVERYWHERE. Check f is unchanged.
            3. I = INT 0 to pi of (pi - x) f(x) dx .             ...(2)
            4. ADD: 2I = pi INT 0 to pi of f(x) dx.
            5. Now do that (usually easier) integral — often with the
               substitution t = cos x.
            6. Divide by 2.
  TRAP      Changing the trig part but leaving the lone x alone. Both
            must change.
            Also: after step 5 the limits for t = cos x are 1 to -1.
            Flip them and drop the minus.
            MEMORY LINE: "replace the x in front by pi/2 and pull it out."
```

```
  PATTERN 11 — P4, THE  a + b - x  REFLECTION                     7 marks
  ------------------------------------------------------------------------
  TRIGGER   Limits a to b (not starting at 0), and an integrand that
            simplifies beautifully under x -> a + b - x.
            INT 0 to pi/4 log(1 + tan x) dx ,
            INT a to b f(x)/(f(x)+f(a+b-x)) dx ,
            INT 1 to 2 ... symmetric-looking fractions
  METHOD    1. Add the two limits: that gives you a + b.
            2. Replace x by (a + b - x) and simplify hard. For tan you
               will need tan(A - B) = (tanA - tanB)/(1 + tanA tanB).
            3. Either ADD the two versions, or notice the new integrand
               is (constant) minus the old one, giving 2I = something.
            4. Solve for I.
  TRAP      Using a - x instead of a + b - x when the lower limit is not
            0. Forgetting log(P/Q) = log P - log Q, which is the step
            that makes the log(1 + tan x) question work.
```

```
  PATTERN 12 — PERIODIC FUNCTIONS                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   The interval is a whole number of periods.
            INT 0 to 2pi |sin x| dx , INT 0 to 2pi sin^2 x dx ,
            INT 0 to 4pi cos^2 x dx , INT 0 to n pi |cos x| dx
  METHOD    1. Find the period T:  sin x , cos x -> 2pi
                                   sin^2 , cos^2 , |sin x| , tan x -> pi
            2. Count how many periods n fit into the interval.
            3. Answer = n x INT 0 to T of f(x) dx.
  TRAP      Using the wrong period. |sin x| has period pi, NOT 2pi —
            that is exactly why INT 0 to 2pi |sinx| dx = 2 x 2 = 4.
            SHORTCUT: over whole periods sin^2 and cos^2 average exactly
            1/2, so the integral is (length)/2.
```

```
  PATTERN 13 — WALLIS, SINGLE POWER                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   INT 0 to pi/2 of sin^n x dx  or  cos^n x dx .
  METHOD    Write  (n-1)/n x (n-3)/(n-2) x ... stepping down by 2.
            n EVEN : stop at 1/2 , then multiply by pi/2 .
            n ODD  : stop at 2/3 , then multiply by 1 .
            sin and cos give the SAME answer.
  TRAP      Attaching pi/2 to an odd power, or forgetting it on an even
            power. The self-check: EVEN answers contain pi, ODD answers
            do not. Ever.
            Values to know cold:
              n :   2      3     4       5     6       7
                   pi/4   2/3  3pi/16   8/15  5pi/32  16/35
```

```
  PATTERN 14 — WALLIS, MIXED POWERS sin^m cos^n              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   INT 0 to pi/2 of sin^m x cos^n x dx .
  METHOD    Top    : (m-1)(m-3)... down by 2 , times (n-1)(n-3)... down by 2
            Bottom : (m+n)(m+n-2)(m+n-4)... down by 2
            Tail   : pi/2 ONLY if m AND n are BOTH EVEN , otherwise 1.
  TRAP      Attaching pi/2 when only one power is even. That is the whole
            examinable point of this pattern.
            If either power is ODD, the substitution t = sin x or
            t = cos x also works and is a good independent check.
            Easy special cases:
              INT 0 to pi/2 sin x cos^n x dx = 1/(n+1)
              INT 0 to pi/2 sin^m x cos x dx = 1/(m+1)
```

```
  PATTERN 15 — WALLIS BEYOND pi/2                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   sin^n or cos^n but with limits 0 to pi , or 0 to 2pi .
  METHOD    Reduce to 0 to pi/2 first, using Pattern 8:
              INT 0 to pi sin^n x dx  = 2 x Wallis
              INT 0 to pi cos^n x dx  = 0 if n odd , 2 x Wallis if n even
              INT 0 to 2pi (either)   = 0 if n odd , 4 x Wallis if n even
            Then apply Wallis.
  TRAP      Quoting the raw Wallis value and forgetting the factor 2 or 4.
            Or doubling a cos^(odd) integral that is actually zero.
```

```
  PATTERN 16 — DERIVE A REDUCTION FORMULA                         7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Obtain a reduction formula for INT sin^n x dx and hence
            evaluate ..."   Also asked for cos^n x .
  METHOD    1. Split off one factor: sin^n x = (sin^(n-1) x)(sin x).
            2. By parts with u = sin^(n-1) x , v = sin x.
            3. Replace cos^2 x by 1 - sin^2 x.
            4. An I_n appears on the RIGHT. Bring it to the left.
            5. Divide by n:
                 I_n = - sin^(n-1)x cosx / n  +  ((n-1)/n) I_(n-2)
            6. For limits 0 to pi/2, show the first term VANISHES at both
               ends, so I_n = ((n-1)/n) I_(n-2).
            7. Apply it repeatedly down to I_0 = pi/2 or I_1 = 1.
  TRAP      Stopping at step 3 without collecting the I_n terms —
            that is where half the marks are.
            Forgetting to show the boundary term vanishes: the examiner
            wants to see  - sin^(n-1)(pi/2) cos(pi/2) = 0  written down.
            For cos^n the first term is  + cos^(n-1)x sinx / n .
```

```
  PATTERN 17 — REDUCTION FOR tan^n x AND sec^n x             4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   INT tan^n x dx , INT sec^n x dx , or the definite versions
            on 0 to pi/4 .
  METHOD    tan : split as tan^(n-2) x . tan^2 x , use tan^2 = sec^2 - 1 .
                  No by parts needed.
                  INT tan^n = tan^(n-1)/(n-1)  -  INT tan^(n-2)
            sec : split as sec^(n-2) x . sec^2 x , by parts with
                  INT v dx = tan x , then tan^2 = sec^2 - 1 .
                  (n-1) I_n = sec^(n-2)x tanx + (n-2) I_(n-2)
            On 0 to pi/4 :  I_n = 1/(n-1) - I_(n-2) , with I_0 = pi/4
                            and I_1 = (1/2) log 2 .
  TRAP      Using by parts on tan^n (you do not need it) and by identity
            alone on sec^n (it does not work). Note the MINUS between the
            two terms for tan, and the PLUS for sec.
```

```
  PATTERN 18 — LIMIT OF A SUM, FROM FIRST PRINCIPLES         4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "as the limit of a sum" or "from first principles".
            INT 0 to 2 x^2 dx , INT 1 to 3 (2x+1) dx , INT 0 to 1 e^x dx
  METHOD    1. Write h = (b - a)/n , and note nh = b - a.
            2. S_n = h [ f(a) + f(a+h) + ... + f(a+(n-1)h) ]
                   = h SUM (r = 0 to n-1) f(a + rh).
            3. Expand and pull constants out.
            4. Use  SUM r = (n-1)n/2 ,  SUM r^2 = (n-1)n(2n-1)/6 ,
               or a GP sum if f is exponential.
            5. Divide through by the highest power of n.
            6. Let n -> infinity, so 1/n -> 0.
  TRAP      *** Using F(b) - F(a) instead. That scores ZERO in this
            question, even with the right number. ***
            Using n(n+1)/2 instead of (n-1)n/2 — the sum runs to n - 1.
            Always finish by verifying with F(b) - F(a) as a CHECK,
            clearly labelled "check", after the real answer.
```

```
  PATTERN 19 — A LIMIT THAT IS SECRETLY AN INTEGRAL         1 mark (MCQ)
  ------------------------------------------------------------------------
  TRIGGER   lim as n -> infinity of a long sum with n's and r's in it.
            lim SUM n/(n^2 + r^2) , lim SUM 1/(n + r) ,
            lim (1/n) SUM sin(r pi/n)
  METHOD    1. Divide top and bottom by the highest power of n until
               everything is written in terms of r/n.
            2. Force out one factor of 1/n — that becomes dx.
            3. Replace r/n by x.
            4. Limits: smallest r/n -> lower , largest r/n -> upper
               (usually 0 to 1).
            5. Evaluate the integral.
  TRAP      Forgetting to pull out the 1/n, so the answer is n times too
            big. Getting the upper limit wrong when r runs to 2n instead
            of n (then the upper limit is 2).
```

```
  PATTERN 20 — t = tan(x/2) WITH LIMITS                           7 marks
  ------------------------------------------------------------------------
  TRIGGER   1/(a + b cos x) , 1/(a + b sin x) , 1/(a sinx + b cosx + c) ,
            with limits — usually 0 to pi/2 .
  METHOD    1. Put t = tan(x/2) , so
                 dx = 2dt/(1+t^2) , cosx = (1-t^2)/(1+t^2) ,
                 sinx = 2t/(1+t^2) .
            2. CHANGE THE LIMITS: x = 0 -> t = 0 ; x = pi/2 -> t = 1 .
            3. Simplify the denominator over a common denominator
               (1 + t^2). It cancels with the dx factor.
            4. You are left with INT dt/(quadratic in t). Complete the
               square if needed and match a standard form.
            5. Substitute the t-limits.
  TRAP      Forgetting to change the limits (Pattern 2's trap again).
            Arithmetic slips combining a(1+t^2) + b(1-t^2).
            If x = pi appears as a limit, t -> infinity — handle it as a
            limit, or use a property first to avoid it.
```

```
  PATTERN 21 — AREA UNDER ONE CURVE BETWEEN TWO ORDINATES         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area bounded by y = f(x), the x-axis, x = a
            and x = b."
            y = x^2 from 0 to 3 , y = sin x from 0 to pi ,
            y = e^x from 0 to 1
  METHOD    1. SKETCH the curve and shade the region.
            2. A = INT from a to b of y dx.
            3. Integrate, substitute, simplify.
            4. Write "square units".
  TRAP      No sketch (worth about a mark on its own, and it is what
            stops the other errors).
            A negative answer — that means part of the curve is below the
            axis; go to Pattern 22.
            If the limits are not given, they come from where the curve
            meets the x-axis. Solve f(x) = 0.
```

```
  PATTERN 22 — AREA WHEN PART OF IT IS BELOW THE X-AXIS           4 marks
  ------------------------------------------------------------------------
  TRIGGER   The word AREA, plus a curve that crosses the x-axis inside
            the interval.
            y = sin x from 0 to 2pi , y = x^3 from -1 to 1 ,
            y = x^2 - 4 from 0 to 3
  METHOD    1. Solve f(x) = 0 to find the crossings inside [a, b].
            2. SPLIT the integral at each crossing.
            3. Evaluate each piece.
            4. Take the MODULUS of each piece.
            5. ADD.
  TRAP      *** Answering 0. *** INT 0 to 2pi sinx dx = 0 but the AREA
            is 4. Read the verb: "evaluate the integral" -> do not split;
            "find the area" -> you must split.
            Missing a crossing point. Always solve, never eyeball.
```

```
  PATTERN 23 — AREA WITH RESPECT TO THE Y-AXIS                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "... and the Y-AXIS, between y = c and y = d",
            or the curve is naturally x = g(y).
            x = y^2 between y = 0 and 2 , the region left of a parabola
  METHOD    1. Rearrange the curve to give x in terms of y.
            2. A = INT from c to d of x dy.
            3. Integrate with respect to y, substitute the y-limits.
  TRAP      Integrating y dx out of habit. If the bounding lines are
            HORIZONTAL (y = c, y = d), you must slice horizontally.
            CHECK: compute the complementary region the other way and
            confirm the two add to the enclosing rectangle.
```

```
  PATTERN 24 — AREA BETWEEN TWO CURVES                            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area enclosed between ..." with TWO equations.
            y = x^2 and y = 2x ; y = x^2 and y = x + 2 ;
            y^2 = 4x and x^2 = 4y ; y = sin x and y = cos x
  METHOD    1. Solve the two equations SIMULTANEOUSLY for the
               intersection points. Their x-coordinates are your limits.
            2. SKETCH both curves and shade the region.
            3. Decide which is on top by testing one x-value strictly
               between the intersections.
            4. A = INT from a to b of ( y_upper - y_lower ) dx.
            5. Integrate, substitute, "square units".
  TRAP      Getting upper and lower the wrong way round (you get the
            negative of the right answer — if that happens, just flip it
            and note why).
            Guessing the limits instead of solving.
            If the curves cross inside the interval, split there and take
            each piece separately.
            CHECK: for a parabola and a straight line the area is
            |a| (x2 - x1)^3 / 6 where a is the x^2 coefficient of
            (curve - line).
```

```
  PATTERN 25 — AREA OF A CIRCLE OR AN ELLIPSE BY INTEGRATION      7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the area of the circle x^2 + y^2 = a^2 by integration"
            "Show that the area of the ellipse x^2/a^2 + y^2/b^2 = 1
             is pi a b"
  METHOD    1. Sketch. State that the figure has FOUR equal quadrants.
            2. Solve for y (upper half):
                 circle  : y = sqrt(a^2 - x^2)
                 ellipse : y = (b/a) sqrt(a^2 - x^2)
            3. A = 4 INT from 0 to a of y dx.
            4. Use the standard result
                 INT sqrt(a^2 - x^2) dx
                   = (x/2)sqrt(a^2-x^2) + (a^2/2) Sin^-1(x/a) + c
               and show INT 0 to a of it = pi a^2 / 4 .
            5. Multiply out: pi a^2 , or pi a b.
  TRAP      Not using the symmetry (integrating from -a to a and then
            forgetting the lower half).
            Forgetting the b/a factor for the ellipse.
            Sin^-1(1) = pi/2 , not pi. That single value is where the pi
            in the answer comes from.
```

```
  PATTERN 26 — AREA OF A PARABOLA AND ITS LATUS RECTUM            7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Area bounded by y^2 = 4ax and its latus rectum"
            "Area cut off by the line x = h"
  METHOD    1. Sketch. The latus rectum of y^2 = 4ax is the line x = a,
               meeting the curve at (a, 2a) and (a, -2a).
            2. Use symmetry about the x-axis: A = 2 x (upper half).
            3. Upper half: y = 2 sqrt(a) sqrt(x) , x from 0 to a.
            4. A = 2 INT 0 to a of 2 sqrt(a) x^(1/2) dx = 8a^2/3.
  TRAP      Forgetting the factor 2 for the lower half.
            Mis-simplifying sqrt(a) . a^(3/2) = a^2 .
            CHECK: the bounding rectangle is a by 4a = 4a^2, and a
            parabolic segment is two thirds of it: (2/3)(4a^2) = 8a^2/3.
```

```
  PATTERN 27 — DIFFERENTIATING AN INTEGRAL (LEIBNIZ)              2 marks
  ------------------------------------------------------------------------
  TRIGGER   d/dx of an integral whose UPPER LIMIT contains x.
            d/dx INT 0 to x f(t) dt , d/dx INT 0 to x^2 sqrt(1+t^3) dt
  METHOD    1. d/dx INT a to x of f(t) dt = f(x).
            2. If the upper limit is u(x), multiply by u'(x):
                 d/dx INT a to u(x) of f(t) dt = f(u(x)) . u'(x)
  TRAP      Forgetting the chain-rule factor u'(x).
            Forgetting to substitute t = u(x) into f.
            If the LOWER limit contains x, you get a MINUS sign.
```

```
  PATTERN 28 — FIND THE UNKNOWN LIMIT                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If INT from 0 to a of f(x) dx = k , find a."
  METHOD    1. Integrate and substitute, leaving a as a symbol.
            2. Set the result equal to k.
            3. Solve for a. Reject values that make the integral
               undefined or the wrong sign.
  TRAP      In an MCQ, do NOT solve — substitute the options and stop at
            the first that works. Much faster.
            In the written paper, check your value by putting it back in.
```

```
  PATTERN 29 — PROVE A PROPERTY (pure theory)                4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that INT 0 to a f(x) dx = INT 0 to a f(a - x) dx"
            "Prove that INT -a to a f(x) dx = 2 INT 0 to a f(x) dx when
             f is even"
  METHOD    Every one of these proofs is the SAME three moves:
            1. Choose the substitution:
                 P3 -> x = a - t        P4 -> x = a + b - t
                 P5 -> x = 2a - t       P6 -> x = -t
            2. Work out dx and, crucially, THE NEW LIMITS. They come out
               reversed.
            3. Use P1 to flip the limits and absorb the minus sign, then
               rename the dummy variable t back to x.
            For P2 and P6 you also split the integral first.
  TRAP      Not stating the substitution explicitly.
            Not showing the limit change (that is where the marks are).
            Forgetting the final sentence "since t is only a dummy
            variable, we may rename it x".
```

```
  PATTERN 30 — CLEAN IT UP BEFORE YOU INTEGRATE                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   Something you cannot integrate as it stands, but which an
            identity fixes in one line.
            INT 0 to pi/2 sqrt(1 - cos 2x) dx ,
            INT 0 to pi/4 tan^2 x dx ,
            INT 0 to pi/2 sin x cos x dx ,
            INT 0 to 2 (x + 1/x)^2 dx  ,  INT 1 to 2 (x^3+2x)/x dx
  METHOD    1. Expand, divide, or apply an identity FIRST.
                 1 - cos2x = 2 sin^2 x        1 + cos2x = 2 cos^2 x
                 tan^2 x = sec^2 x - 1        cot^2 x = cosec^2 x - 1
                 2 sinx cosx = sin 2x         sin^2 x = (1 - cos2x)/2
            2. You now have a SUM of standard integrals.
            3. Integrate term by term and substitute the limits.
  TRAP      sqrt(sin^2 x) = |sin x| , not sin x. On [0, pi/2] they agree
            (sin is positive), but on [0, 2pi] they do not. Check the
            sign over the actual interval before dropping the bars.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| INT 0 to pi/2 of sin^7 x dx | 13 |
| INT -3 to 3 of x^5 cos x dx | 7 |
| Find the area between y = x^2 and y = 4x | 24 |
| INT 0 to pi/4 of log(1 + tan x) dx | 11 |
| Evaluate INT 0 to 3 of x^2 dx as the limit of a sum | 18 |
| INT 0 to pi of x sin x/(1 + cos^2 x) dx | 10 |
| INT 0 to 2pi of \| sin x \| dx | 6 and 12 |
| Obtain a reduction formula for INT cos^n x dx | 16 |
| INT 0 to pi/2 of dx/(1 + tan x) | 9 |
| Area of the ellipse x^2/9 + y^2/4 = 1 | 25 |
| INT 0 to 1 of x e^x dx | 4 |
| INT 0 to pi of cos^5 x dx | 8 |
| INT 0 to pi/2 of sin^4 x cos^6 x dx | 14 |
| INT 1 to 2 of dx/(x^2 + 3x + 2) | 5 |
| lim SUM n/(n^2 + r^2) as n -> infinity | 19 |
| INT 0 to pi/2 of dx/(3 + 2 cos x) | 20 |
| Area bounded by y^2 = 4ax and its latus rectum | 26 |
| INT 0 to 5 of \| x - 3 \| dx | 6 |
| d/dx INT 0 to x^3 of sin(t^2) dt | 27 |
| INT 0 to 1 of x/(1 + x^2) dx | 3 |
| INT 0 to pi of sin^6 x dx | 15 |
| Prove INT -a to a f(x) dx = 0 when f is odd | 29 |
| INT 0 to pi/2 of sqrt(1 - cos 2x) dx | 30 |
| Area bounded by y = x^3, x-axis, x = -2 to 2 | 22 |
| INT 0 to pi/4 of tan^5 x dx | 17 |
| Area bounded by x = y^2, the y-axis, y = 1 to 3 | 23 |
| If INT 0 to a of 4x^3 dx = 81, find a | 28 |
| INT 0 to 1 of x(1 - x)^7 dx | 9 (P3 form) |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |  TIER 1  -  DO NOT SIT THE EXAM WITHOUT THESE      (about 6 marks)|
  +-------------------------------------------------------------------+
  |  Pattern 1   F(b) - F(a) , top minus bottom                       |
  |  Pattern 2   substitution WITH THE LIMITS CHANGED                 |
  |  Pattern 7   even / odd on -a to a                                |
  |  Pattern 13  Wallis for a single power                            |
  |                                                                   |
  |  These four cover the 2 or 3 Section A questions from this        |
  |  chapter. They are the cheapest marks in the whole paper.         |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |  TIER 2  -  THE SECTION B MARKS                    (about 4 marks)|
  +-------------------------------------------------------------------+
  |  Pattern 4   integration by parts with limits                     |
  |  Pattern 9   the g/(g+h) property -> half the interval            |
  |  Pattern 21  area under one curve between two ordinates           |
  |  Pattern 6   modulus: split and add triangles                     |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |  TIER 3  -  THE 7-MARK QUESTION                   (7 or 14 marks) |
  +-------------------------------------------------------------------+
  |  Learn TWO of these three. Then whichever appears, you can do it. |
  |                                                                   |
  |  Pattern 10 / 11   evaluate using P3 / P4                         |
  |                    (x sinx/(1+cos^2x) , log(1+tanx) , x/(1+sinx)) |
  |                                                                   |
  |  Pattern 16        derive the reduction formula for sin^n x       |
  |                    and finish with Wallis                          |
  |                                                                   |
  |  Pattern 24/25/26  AREA: two curves, or circle/ellipse, or        |
  |                    parabola + latus rectum                        |
  |                                                                   |
  |  The AREA pattern appears most often. If you only have time for   |
  |  one, make it that one.                                           |
  +-------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------+
  |  REALISTIC TOTAL FROM THIS CHAPTER                                |
  |                                                                   |
  |     Tier 1 only            ->   about  6 marks                    |
  |     Tier 1 + Tier 2        ->   about 10 marks                    |
  |     Tier 1 + 2 + 3         ->   about 17 marks                    |
  |                                                                   |
  |  The pass mark for the whole 75-mark paper is 26. This one        |
  |  chapter, done properly, gets you two thirds of the way there.    |
  +-------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------+
  |  THE THREE SENTENCES TO REPEAT TO YOURSELF IN THE EXAM HALL:      |
  |                                                                   |
  |     1.  "Read the LIMITS first."                                  |
  |     2.  "New variable, new limits."                               |
  |     3.  "Area means positive. Sketch it."                         |
  |                                                                   |
  |  Those three sentences prevent roughly 80% of the marks lost in   |
  |  this chapter, every single year.                                 |
  +-------------------------------------------------------------------+
```
