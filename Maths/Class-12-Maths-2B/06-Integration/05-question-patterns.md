# Integration — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

If you can name the pattern, you already know the first three steps of the answer.

---

```
  PATTERN 1 — DIRECT STANDARD INTEGRAL                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   The integrand is already in your table:
            x^n , 1/x , e^x , a^x , sin x , cos x , sec^2 x ,
            sec x tan x , 1/(1+x^2) , 1/sqrt(1-x^2) ...
  METHOD    1. Recognise it.
            2. Write the answer.
            3. Write + c.
  TRAP      Sign errors:  INT sin x dx = -cos x   (NOT +cos x)
            INT cosec^2 x dx = -cot x
            Forgetting + c. That is a guaranteed lost mark.
```

```
  PATTERN 2 — f(ax + b) : THE LINEAR-INSIDE RULE                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   A standard function with a LINEAR expression inside it:
            sin(3x+1) , e^(2x-5) , (4x+7)^9 , 1/(5x-2) , sec^2(2x)
  METHOD    1. Integrate as if the inside were just x.
            2. DIVIDE by the coefficient of x.
            INT f(ax+b) dx = (1/a) F(ax+b) + c
  TRAP      This works ONLY for ax + b. It does NOT work for
            sin(x^2) , e^(x^2) , (x^2+1)^5 . Nothing does, without a
            derivative sitting outside.
```

```
  PATTERN 3 — CLEAN IT UP BEFORE YOU INTEGRATE                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   A bracket squared, a product written out, a fraction with a
            single term on the bottom, or a trig expression you cannot
            integrate as it stands:
            (x + 1/x)^2 , (sqrt x + 1)^2 , (x^3+2x)/x , tan^2 x ,
            1/(1 + cos 2x) , (sin x + cos x)^2
  METHOD    1. Expand / divide / apply an identity.
            2. You now have a SUM of standard integrals.
            3. Integrate term by term.
            Useful identities:
              tan^2 x = sec^2 x - 1        cot^2 x = cosec^2 x - 1
              1 + cos 2x = 2 cos^2 x       1 - cos 2x = 2 sin^2 x
              (sin x + cos x)^2 = 1 + sin 2x
  TRAP      Trying to integrate a product or a bracket-power directly.
```

```
  PATTERN 4 — INT f'(x) / f(x) dx  =  log | f(x) |                2 marks
  ------------------------------------------------------------------------
  TRIGGER   A FRACTION. Differentiate the bottom in your head. If you get
            the top (or a constant times the top), this is your pattern.
            (2x+3)/(x^2+3x+7) , sec^2 x/tan x , e^x/(e^x+1) ,
            1/(x log x) , cos x/sin x
  METHOD    1. Confirm  top = k x d/dx(bottom).
            2. Answer = k log | bottom |  +  c.
  TRAP      Forgetting the modulus bars. Also forgetting the constant k
            when the top is only HALF or DOUBLE the derivative.
```

```
  PATTERN 5 — INT [f(x)]^n f'(x) dx                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   A bracket or a function raised to a power, with its own
            derivative multiplying it:
            sin^3 x cos x , (2x+1)^4 . 2 , (log x)^2 / x ,
            x (x^2+1)^5 , tan^4 x sec^2 x
  METHOD    1. Name the inside function f.
            2. Check f' is present (up to a constant).
            3. Answer = [f(x)]^(n+1) / (n+1) + c , fixed by that constant.
  TRAP      n = -1 is NOT allowed - that case is PATTERN 4 instead.
```

```
  PATTERN 6 — INT f'(x) / sqrt( f(x) ) dx  =  2 sqrt( f(x) )      2 marks
  ------------------------------------------------------------------------
  TRIGGER   A root on the BOTTOM, with the derivative of the inside on top.
            x/sqrt(x^2+4) , (2x+3)/sqrt(x^2+3x+1) ,
            cos x/sqrt(sin x) , 1/(sqrt x . sqrt(sqrt x + 1))
  METHOD    Answer = 2 sqrt( f(x) ) , adjusted by the constant.
  TRAP      Confusing it with  INT dx/sqrt(x^2+a^2) , which has NO x on
            top and gives a LOG. One little x changes everything.
```

```
  PATTERN 7 — GENERAL SUBSTITUTION  t = (inner function)     2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Something messy inside a function, and the derivative of that
            messy thing is lying around outside.
            x e^(x^2) , e^(sqrt x)/sqrt x , sin(log x)/x , x^2/(x^3+1)
  METHOD    1. Put t = the inner thing.
            2. dt = (its derivative) dx  -> replace dx.
            3. EVERY x must vanish.
            4. Integrate in t.
            5. Put x back.
  TRAP      Leaving an x in the answer, or forgetting to convert dx.
            The go-to substitutions:
              log x present    ->  t = log x
              e^x present      ->  t = e^x
              sqrt x present   ->  t = sqrt x
              only tan/sec^2   ->  t = tan x
```

```
  PATTERN 8 — TRIGONOMETRIC SUBSTITUTION                     4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   A ROOT containing a^2 ± x^2 , and NO derivative around to help.
            Also things like 1/(1+x^2)^(3/2) , x^2/sqrt(a^2-x^2).
  METHOD    sqrt( a^2 - x^2 )  ->  put  x = a sin(theta)
            sqrt( a^2 + x^2 )  ->  put  x = a tan(theta)
            sqrt( x^2 - a^2 )  ->  put  x = a sec(theta)
            The root collapses to a single trig function. Integrate in
            theta, then draw a right triangle to convert back to x.
  TRAP      Not converting back to x. The final answer must contain NO
            theta.
```

```
  PATTERN 9 — INTEGRATION BY PARTS, ONE ROUND                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   A PRODUCT of two UNRELATED functions.
            x sin x , x e^x , x cos 3x , x sec^2 x , x log x
  METHOD    1. Choose u by ILATE
                 I nverse trig > L og > A lgebraic > T rig > E xponential
            2. INT u v dx = u ( INT v dx ) - INT [ u' ( INT v dx ) ] dx
            3. The new integral must be EASIER. If it is harder, you
               chose u the wrong way round - swap and start again.
  TRAP      Choosing e^x as u when an x is present. ILATE says A before E.
```

```
  PATTERN 10 — BY PARTS WITH AN INVISIBLE 1                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   ONE lonely function that you cannot integrate directly:
            log x , Sin^-1 x , Cos^-1 x , Tan^-1 x , log(x^2+1)
  METHOD    1. Write it as ( that function ) x 1.
            2. u = the function , v = 1 , so INT v dx = x.
            3. Apply by parts.
            Standard results that come out:
              INT log x dx    =  x log x - x + c
              INT Sin^-1 x dx =  x Sin^-1 x + sqrt(1-x^2) + c
              INT Tan^-1 x dx =  x Tan^-1 x - (1/2) log(1+x^2) + c
  TRAP      Saying "there is no second function so by parts is impossible".
            The second function is always 1.
```

```
  PATTERN 11 — BY PARTS APPLIED TWICE                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   x SQUARED (or higher) multiplying a trig or exponential:
            x^2 e^x , x^2 sin x , x^2 cos 2x , x^3 e^x
  METHOD    1. Round 1: u = x^2 . You get x e^(...) left over.
            2. Round 2 on that leftover: u = x.
            3. Combine.
            SHORTCUT for INT (polynomial) e^x dx :
               answer = e^x [ P - P' + P'' - P''' + ... ]
               e.g.  INT x^2 e^x dx = e^x ( x^2 - 2x + 2 ) + c
  TRAP      Losing a sign between the two rounds. Bracket everything.
```

```
  PATTERN 12 — THE RETURNING INTEGRAL  e^(ax) sin(bx)        4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   An exponential MULTIPLIED by a sine or cosine:
            e^x sin x , e^(2x) cos 3x , e^(-x) sin 2x
  METHOD    1. Call the integral I.
            2. By parts twice, keeping the SAME type as u both times.
            3. The original I reappears on the right.
            4. Solve the algebraic equation for I.
            Or quote:
                                  e^(ax)
            INT e^(ax) sin bx =  --------- ( a sin bx - b cos bx ) + c
                                 a^2 + b^2
                                  e^(ax)
            INT e^(ax) cos bx =  --------- ( a cos bx + b sin bx ) + c
                                 a^2 + b^2
  TRAP      Swapping the choice of u in round 2. Then everything cancels
            and you get the useless statement 0 = 0.
```

```
  PATTERN 13 — INT e^x [ f(x) + f'(x) ] dx  =  e^x f(x)      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   e^x multiplying a bracket with TWO pieces inside.
            e^x(sin x + cos x) , e^x(log x + 1/x) , e^x(1/x - 1/x^2)
  METHOD    1. Look at the two pieces in the bracket.
            2. Ask: is one the DERIVATIVE of the other?
            3. If yes, answer = e^x x ( the piece that is NOT the
               derivative ) + c.  One line. Full marks.
            General version:
               INT e^(ax) [ a f(x) + f'(x) ] dx = e^(ax) f(x) + c
  TRAP      Grinding through by parts instead. It works, but it wastes
            four minutes you do not have.
```

```
  PATTERN 14 — e^x TYPE THAT NEEDS ALGEBRA FIRST                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   e^x times an ugly single fraction, not an obvious f + f':
            e^x (x+1)/(x+2)^2 , x e^x/(1+x)^2 ,
            e^x (1 + sin x)/(1 + cos x) , e^x (1 + x log x)/x
  METHOD    1. SPLIT the fraction so it becomes two pieces.
               - split the numerator against the denominator, or
               - use half-angle identities for the trig ones.
            2. Now apply PATTERN 13.
            Worked shape:  x/(1+x)^2 = 1/(1+x) - 1/(1+x)^2
                           f = 1/(1+x)  ->  answer e^x/(1+x)
  TRAP      Not trying hard enough to split. If e^x is present, the
            examiner ALMOST CERTAINLY wants pattern 13. Force the split.
```

```
  PATTERN 15 — QUOTE ONE OF THE NINE STANDARD FORMS               2 marks
  ------------------------------------------------------------------------
  TRIGGER   A clean x^2 and a clean number, nothing else:
            1/(x^2+9) , 1/(x^2-16) , 1/(25-x^2) ,
            1/sqrt(x^2+4) , 1/sqrt(x^2-9) , 1/sqrt(16-x^2) ,
            sqrt(9-x^2) , sqrt(x^2+4) , sqrt(x^2-25)
  METHOD    1. Write the number as a^2 and read off a.
            2. Quote the matching formula.
            The three you must never mix up:
              1/(x^2+a^2)      ->  (1/a) Tan^-1 (x/a)
              1/sqrt(a^2-x^2)  ->  Sin^-1 (x/a)
              1/sqrt(x^2±a^2)  ->  log | x + sqrt(x^2 ± a^2) |
  TRAP      No root -> Tan^-1 or log of a RATIO.
            With a root -> Sin^-1 or log of a SUM. Decide first.
```

```
  PATTERN 16 — COEFFICIENT IN FRONT OF x^2                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   4x^2 + 9 , 9 - 4x^2 , 2x^2 + 3 , 3x^2 + 5 ...
  METHOD    1. Take the coefficient of x^2 out of the WHOLE expression.
                 4x^2 + 9  =  4 ( x^2 + 9/4 )
            2. Inside a root, the factor comes out as its square root:
                 sqrt(9 - 4x^2) = 2 sqrt( 9/4 - x^2 )
            3. Now it is PATTERN 15.
  TRAP      Dividing the x^2 term but forgetting to divide the constant.
            If you write 4(x^2 + 9) you have already lost the question.
```

```
  PATTERN 17 — COMPLETE THE SQUARE:  1/(ax^2 + bx + c)            4 marks
  ------------------------------------------------------------------------
  TRIGGER   A full quadratic on the bottom, NO x on top, no root.
            1/(x^2+6x+13) , 1/(x^2-6x+5) , 1/(2x^2+x-1)
  METHOD    1. Take out the coefficient of x^2 if there is one.
            2. Half the x-coefficient, square it, add and subtract.
            3. Get ( x + h )^2 ± k^2 .  Put X = x + h.
            4. Read off:
                 X^2 + k^2  ->  (1/k) Tan^-1 (X/k)
                 X^2 - k^2  ->  (1/2k) log | (X-k)/(X+k) |
                 k^2 - X^2  ->  (1/2k) log | (k+X)/(k-X) |
            5. Replace X by x + h.
  TRAP      Forgetting to put X back as x + h at the end.
```

```
  PATTERN 18 — COMPLETE THE SQUARE:  1/sqrt(ax^2 + bx + c)        4 marks
  ------------------------------------------------------------------------
  TRIGGER   Same as pattern 17 but with a ROOT on the bottom.
            1/sqrt(x^2+2x+5) , 1/sqrt(5-2x-x^2) , 1/sqrt(3x^2+4x+5)
  METHOD    1. Complete the square under the root.
            2. Read off:
                 sqrt( k^2 - X^2 )  ->  Sin^-1 ( X/k )
                 sqrt( X^2 + k^2 )  ->  log | X + sqrt(X^2 + k^2) |
                 sqrt( X^2 - k^2 )  ->  log | X + sqrt(X^2 - k^2) |
  TRAP      When x^2 has a MINUS in front, pull the minus out of the
            x-terms FIRST, e.g. 5 - 2x - x^2 = 6 - (x+1)^2.
            Half the class gets the sign wrong here.
```

```
  PATTERN 19 — sqrt( ax^2 + bx + c )  ON TOP                      7 marks
  ------------------------------------------------------------------------
  TRIGGER   The root is in the NUMERATOR:
            sqrt(x^2+2x+5) , sqrt(3 - 2x - x^2) , sqrt(2x - x^2)
  METHOD    1. Complete the square inside the root.
            2. Put X = x + h ,  so it becomes sqrt(X^2 ± a^2) or
               sqrt(a^2 - X^2).
            3. Quote the Group-3 form:
                 (X/2) sqrt(...)  +  (a^2/2) x (the Group-2 answer)
               (the only MINUS is in the X^2 - a^2 case)
            4. Replace X by x + h.
  TRAP      Losing the a^2/2. It is a^2 OVER 2, not a^2.
```

```
  PATTERN 20 — ( px + q ) / ( ax^2 + bx + c )                     7 marks
  ------------------------------------------------------------------------
  TRIGGER   A LINEAR expression on top, a quadratic on the bottom,
            no root:  (x+3)/(x^2+4x+13) , (2x+1)/(x^2-x+1)
  METHOD    1. Write down d/dx( ax^2+bx+c ) = 2ax + b.
            2. Set  px + q = A ( 2ax + b ) + B.
            3. Compare x terms -> A ;  compare constants -> B.
            4. Piece 1 = A log | ax^2+bx+c |     (PATTERN 4)
            5. Piece 2 = B x (PATTERN 17 answer)
            6. Add. Write + c.
  TRAP      Splitting against the QUADRATIC instead of its DERIVATIVE.
            Also stopping after finding A and forgetting B exists.
```

```
  PATTERN 21 — ( px + q ) / sqrt( ax^2 + bx + c )                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   Linear on top, ROOT of a quadratic on the bottom.
            (2x+5)/sqrt(x^2+2x+5) , (x+1)/sqrt(x^2+3x+12)
            *** THE SINGLE MOST-ASKED 7-MARK QUESTION IN THIS CHAPTER ***
  METHOD    1. Derivative of the inside = 2ax + b.
            2. px + q = A ( 2ax + b ) + B.  Find A and B.
            3. Piece 1 = A x 2 sqrt( ax^2+bx+c )       (PATTERN 6)
            4. Piece 2 = B x (PATTERN 18 answer)
            5. Add. Write + c.
  TRAP      Forgetting the factor 2 in  INT f'/sqrt f = 2 sqrt f.
            The answer must start with  2A sqrt( quadratic ).
```

```
  PATTERN 22 — PARTIAL FRACTIONS: DISTINCT LINEAR FACTORS         4 marks
  ------------------------------------------------------------------------
  TRIGGER   A fraction whose bottom FACTORISES into different brackets:
            1/((x+1)(x+2)) , (2x+3)/((x-1)(x+2)) , 1/(x^2-5x+6)
  METHOD    0. If degree(top) >= degree(bottom), DIVIDE first.
            1. Factorise the bottom.
            2. Write  A/(x-a) + B/(x-b).
            3. COVER-UP RULE: to find A, cover (x-a) and put x = a into
               everything left. That number IS A.
            4. Integrate: each piece gives a log.
  TRAP      Not checking the degree first. If the top is degree 2 and the
            bottom is degree 2, you MUST divide before anything else.
```

```
  PATTERN 23 — PARTIAL FRACTIONS: REPEATED FACTOR                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   A squared or cubed bracket on the bottom:
            (3x-2)/((x+1)^2 (x+3))  ,  1/(x(x-1)^2)
  METHOD    1. For (x-a)^2 you must write BOTH
                  A/(x-a)  +  B/(x-a)^2
               For (x-a)^3 write three terms.
            2. Multiply out. Substitute the smart values x = a , x = b.
            3. Those give the "deepest" constants. Get the last one by
               comparing the coefficient of the HIGHEST power of x.
            4. Integrate:
                  A/(x-a)     ->  A log | x - a |
                  B/(x-a)^2   ->  -B/(x - a)          [ NOT a log ]
  TRAP      Writing only B/(x-a)^2 and omitting A/(x-a). Then no values
            of the constants can ever work and you will go in circles.
```

```
  PATTERN 24 — PARTIAL FRACTIONS: IRREDUCIBLE QUADRATIC           7 marks
  ------------------------------------------------------------------------
  TRIGGER   A quadratic factor on the bottom that will NOT factorise:
            1/((x-1)(x^2+1)) , (x+2)/((x^2+4)(x-3))
  METHOD    1. Linear factor gets a CONSTANT on top:      A/(x-a)
               Irreducible quadratic gets a LINEAR on top: (Bx+C)/(x^2+k)
            2. Find A by putting x = a. Find B and C by comparing the
               coefficient of x^2 and the constant term.
            3. Integrate:
                  A/(x-a)          ->  A log|x-a|
                  Bx/(x^2+k^2)     ->  (B/2) log( x^2 + k^2 )
                  C/(x^2+k^2)      ->  (C/k) Tan^-1 ( x/k )
  TRAP      Writing just A/(x^2+1). A quadratic denominator needs Bx + C
            on top, not a constant.
```

```
  PATTERN 25 — t = tan(x/2) FOR  1/( a + b cos x )                7 marks
  ------------------------------------------------------------------------
  TRIGGER   1 over ( a number plus a multiple of cos x ), or of sin x:
            1/(3 + 2cos x) , 1/(5 + 4cos x) , 1/(4 + 5 sin x)
            *** THE OTHER GUARANTEED 7-MARK QUESTION ***
  METHOD    1. Put t = tan(x/2).
                 sin x = 2t/(1+t^2)
                 cos x = (1-t^2)/(1+t^2)
                 dx    = 2dt/(1+t^2)
            2. Combine over 1 + t^2. Every 1 + t^2 CANCELS.
            3. You are left with INT 2 dt / (quadratic in t).
            4. Finish with PATTERN 17 (complete the square) or
               PATTERN 22 (partial fractions).
            5. Put t = tan(x/2) back in.
  TRAP      Leaving an x anywhere after the substitution, or forgetting
            to convert dx. Every single x must go.
```

```
  PATTERN 26 — t = tan(x/2) FOR  1/( a sinx + b cosx + c )        7 marks
  ------------------------------------------------------------------------
  TRIGGER   BOTH sin x and cos x on the bottom, plus a constant:
            1/(4cos x + 3sin x + 5) , 1/(2 + sin x + cos x)
  METHOD    Identical to PATTERN 25. After substituting you get
                 INT 2 dt / [ (c-b)t^2 + 2a t + (b+c) ]
            Often the quadratic in t is a PERFECT SQUARE - then the
            answer is just -2/(t + k), no logs at all.
  ALTERNATIVE
            a sin x + b cos x = r sin( x + A ),
            with r = sqrt(a^2+b^2) and tan A = b/a.
            Then it becomes INT cosec(x+A) dx / r.
  TRAP      Getting the signs wrong when you expand
            a(2t) + b(1-t^2) + c(1+t^2). Do it slowly, on one line each.
```

```
  PATTERN 27 — PRODUCTS OF SINES AND COSINES                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   sin 3x cos 5x , cos 2x cos 4x , sin x sin 3x ,
            cos x cos 2x cos 3x
  METHOD    1. Convert the PRODUCT into a SUM:
                 2 sin A cos B = sin(A+B) + sin(A-B)
                 2 cos A sin B = sin(A+B) - sin(A-B)
                 2 cos A cos B = cos(A+B) + cos(A-B)
                 2 sin A sin B = cos(A-B) - cos(A+B)
            2. For THREE factors, pair two of them first, then convert
               again.
            3. Integrate each sine/cosine term with the 1/a rule.
  TRAP      Trying to integrate the product directly. There is no
            product rule for integration.
```

```
  PATTERN 28 — POWERS OF sin AND cos                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   sin^2 x , cos^2 x , sin^3 x , cos^4 x , sin^2 x cos^3 x
  METHOD    ODD power present:
                peel ONE factor off, convert the rest with
                sin^2 = 1 - cos^2 , then substitute.
                e.g. INT sin^3 x dx = INT (1-cos^2 x) sin x dx , t = cos x
            ALL powers EVEN:
                use  sin^2 x = (1 - cos 2x)/2 ,  cos^2 x = (1 + cos 2x)/2
                repeatedly until only first powers of cosines remain.
            Also useful:
                sin^3 x = (3 sin x - sin 3x)/4
                cos^3 x = (3 cos x + cos 3x)/4
  TRAP      Writing INT sin^2 x dx = sin^3 x/3. Completely wrong -
            there is no cos x outside.
```

```
  PATTERN 29 — DERIVE A REDUCTION FORMULA                         7 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "obtain a reduction formula for INT sin^n x dx"
            (or cos^n , tan^n , sec^n), usually followed by
            "and hence evaluate INT sin^4 x dx".
  METHOD    1. Write I(n) = INT sin^(n-1) x . sin x dx.
            2. By parts with u = sin^(n-1) x , v = sin x.
            3. Replace cos^2 x = 1 - sin^2 x.
            4. I(n) appears on BOTH sides. Collect it.
            5. Divide by n. State the boxed formula.
            6. For the "hence" part, step down until you reach
               I(0) = x  or  I(1) = -cos x.
  TRAP      In the "hence" part, forgetting to actually evaluate the
            last small integral. INT sin^2 x dx = x/2 - (sin 2x)/4.
```

```
  PATTERN 30 — THE CLEVER ONE-MOVE INTEGRALS                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   It looks impossible, but there is exactly one trick.
  METHOD    Try these, in this order:
            1. ADD AND SUBTRACT on the numerator:
                 1/(1+e^x)  =  1 - e^x/(1+e^x)
            2. MULTIPLY TOP AND BOTTOM by something:
                 1/(x(x^n+1))  ->  multiply by x^(n-1) , put t = x^n
            3. SPLIT the 1 on top as sin^2 x + cos^2 x:
                 1/(sin^2 x cos^2 x) = sec^2 x + cosec^2 x
            4. DIVIDE top and bottom by cos^2 x when only tan and sec^2
               appear, then put t = tan x.
            5. RATIONALISE when a root is in a sum:
                 1/(sqrt(x+1) + sqrt x)  -> multiply by the conjugate.
  TRAP      Panicking and leaving it blank. One of these five moves
            works on nearly every "impossible" integral in the paper.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +-----------------------------------------------------------+---------+
  |  QUESTION STEM                                            | PATTERN |
  +-----------------------------------------------------------+---------+
  |  INT ( 2x + 5 ) / sqrt( x^2 + 2x + 5 ) dx                 |   21    |
  |  INT dx / ( 3 + 2 cos x )                                 |   25    |
  |  INT e^x ( 1 + sin x )/( 1 + cos x ) dx                   |   14    |
  |  INT x^2 e^x dx                                           |   11    |
  |  INT ( 3x - 2 ) / ( (x+1)^2 (x+3) ) dx                    |   23    |
  |  INT dx / sqrt( 5 - 2x - x^2 )                            |   18    |
  |  INT sin 3x cos 5x dx                                     |   27    |
  |  INT Tan^-1 x dx                                          |   10    |
  |  INT sec^2 x / tan x dx                                   |    4    |
  |  "Obtain a reduction formula for INT cos^n x dx"          |   29    |
  |  INT sqrt( x^2 + 2x + 5 ) dx                              |   19    |
  |  INT dx / ( 4x^2 + 9 )                                    |   16    |
  |  INT x sqrt( x^2 + 1 ) dx                                 |    5    |
  |  INT dx / ( x log x )                                     |    4    |
  |  INT ( x + 1/x )^2 dx                                     |    3    |
  |  INT e^x cos x dx                                         |   12    |
  |  INT dx / ( (x-1)(x^2+1) )                                |   24    |
  |  INT sin(3x + 1) dx                                       |    2    |
  |  INT dx / ( 1 + e^x )                                     |   30    |
  |  INT ( x + 3 ) / ( x^2 + 4x + 13 ) dx                     |   20    |
  |  INT e^x ( log x + 1/x ) dx                               |   13    |
  |  INT sin^3 x dx                                           |   28    |
  |  INT dx / ( 4 cos x + 3 sin x + 5 )                       |   26    |
  |  INT x / sqrt( x^2 + 4 ) dx                               |    6    |
  |  INT sqrt( 9 - x^2 ) dx                                   |   15    |
  |  INT x sin x dx                                           |    9    |
  |  INT dx / ( x^2 + 6x + 13 )                               |   17    |
  |  INT dx / ( x^2 - 5x + 6 )                                |   22    |
  |  INT e^( sqrt x ) / sqrt x dx                             |    7    |
  |  INT dx / ( 1 + x^2 )^(3/2)                               |    8    |
  +-----------------------------------------------------------+---------+
```

**Cover the right-hand column and go down the list.** If you can name the
pattern for 25 out of 30, you are ready for the exam. That is the entire
point of this file.

---

# THE PATTERN FAMILY TREE (learn them in groups, not one by one)

```
   THE FOUR "SPOT IT AND WRITE IT" PATTERNS      ->  2, 4, 5, 6
        (worth about 6 marks in Section A, zero risk)

   THE THREE "PRODUCT" PATTERNS                  ->  9, 10, 11
        (all the same formula, just applied 1 or 2 times)

   THE TWO "e^x MIRACLE" PATTERNS                ->  13, 14
        (14 is just 13 with algebra in front of it)

   THE QUADRATIC FAMILY - all one idea           ->  15, 16, 17, 18, 19
        (complete the square, then quote a standard form)

   THE QUADRATIC FAMILY WITH x ON TOP            ->  20, 21
        (split px+q, then you are back in the family above)

   THE FRACTION-BREAKING FAMILY                  ->  22, 23, 24
        (same 4 steps, only the SHAPE you write down changes)

   THE tan(x/2) FAMILY                           ->  25, 26
        (identical method; 26 just has one extra term)

   THE TRIG FAMILY                               ->  27, 28, 29
        (convert to something you can integrate, then integrate)
```

If you learn the eight FAMILIES instead of the thirty patterns, this chapter
becomes eight things to remember, not thirty.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +---------------------------------------------------------------------+
  |  TIER 1 - LEARN THESE OR LEARN NOTHING          about 8 marks       |
  |  ------------------------------------------------------------------ |
  |  Pattern  2   f(ax + b)                                             |
  |  Pattern  4   INT f'/f = log | f |                                  |
  |  Pattern  5   INT f^n f'                                            |
  |  Pattern 13   INT e^x [ f + f' ] = e^x f                            |
  |  Pattern 15   the nine standard forms                               |
  |                                                                     |
  |  These are all ONE-LINE answers. They appear in Section A every      |
  |  single year, and in EAPCET every single year. Nobody who knows      |
  |  these five can score less than 8 in this chapter.                   |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |  TIER 2 - THE SECTION B MONEY                   about 4 to 8 marks  |
  |  ------------------------------------------------------------------ |
  |  Pattern  9   by parts, one round (ILATE)                           |
  |  Pattern 17   complete the square, 1/(ax^2+bx+c)                    |
  |  Pattern 18   complete the square, 1/sqrt(ax^2+bx+c)                |
  |  Pattern 22   partial fractions, distinct linear factors            |
  |  Pattern 27   trigonometric products                                |
  |                                                                     |
  |  Section B is "any 5 of 7". You only need TWO of these to land.     |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |  TIER 3 - THE 7-MARK MACHINES                   7 marks, banked     |
  |  ------------------------------------------------------------------ |
  |  Pattern 21   ( px + q ) / sqrt( ax^2 + bx + c )                    |
  |  Pattern 25   t = tan(x/2) for 1/( a + b cos x )                    |
  |                                                                     |
  |  ONE of these two is in Section C almost every year. Practise each   |
  |  of them FIVE times with different numbers until your hand does it   |
  |  without your brain. That is 7 marks decided before the exam starts. |
  +---------------------------------------------------------------------+

  +---------------------------------------------------------------------+
  |  TIER 4 - ONLY IF TIME REMAINS                                      |
  |  ------------------------------------------------------------------ |
  |  Patterns 8, 12, 19, 23, 24, 26, 29, 30                             |
  |                                                                     |
  |  Worth marks, but never at the expense of Tiers 1 to 3.             |
  +---------------------------------------------------------------------+
```

## The order to practise in, if you have limited time

```
   DAY 1   Patterns  1, 2, 3, 4, 5, 6        (20 short problems)
   DAY 2   Patterns  9, 10, 11, 13, 14       (12 problems)
   DAY 3   Patterns 15, 16, 17, 18           (12 problems)
   DAY 4   Patterns 20, 21                   ( 6 problems - do these twice)
   DAY 5   Patterns 22, 23, 24               ( 6 problems)
   DAY 6   Patterns 25, 26                   ( 6 problems - do these twice)
   DAY 7   Patterns 27, 28, 29, 30           ( 8 problems)
           then read every TRIGGER line in this file, top to bottom.
```

```
  +------------------------------------------------------------------+
  |  AND THE RULE THAT APPLIES TO ALL THIRTY PATTERNS:                |
  |                                                                   |
  |  DIFFERENTIATE YOUR ANSWER. If you get the question back,         |
  |  you are right. This is the only chapter in the whole syllabus    |
  |  where you can mark your own paper before you hand it in.         |
  |                                                                   |
  |  And write  + c .                                                 |
  +------------------------------------------------------------------+
```
