# Differentiation — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DIFFERENTIATE A POLYNOMIAL                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find dy/dx" and the function is only powers of x
            joined by + and -.
  METHOD    1. Take one term at a time.
            2. Apply  d/dx (x^n) = n x^(n-1)  to each.
            3. Constants differentiate to 0.
  TRAP      Forgetting that any pure number (including 5, log 3, e^2,
            arctan 7) has derivative ZERO.
```

```
  PATTERN 2 — ROOTS AND RECIPROCALS                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   sqrt( ) signs or fractions like 1/x^3 in the function.
  METHOD    1. REWRITE FIRST, differentiate second.
                 sqrt(x)   ->  x^(1/2)
                 1/x^n     ->  x^(-n)
                 x sqrt(x) ->  x^(3/2)
            2. Now the single rule n x^(n-1) handles everything.
            3. Convert back to root / fraction form at the end.
  TRAP      Trying to differentiate sqrt(x) or 1/x^3 in their original
            shape. Almost everyone who does this gets it wrong.
```

```
  PATTERN 3 — PRODUCT RULE                                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two functions MULTIPLIED:  x^2 sin x , e^x log x , x tan x.
  METHOD    1. Name them:  u = first , v = second.
            2. Write u' and v' underneath, in a column.
            3. Answer = u' v  +  u v'.
  SAY IT    "first times derivative of second, plus second times
             derivative of first"
  TRAP      Writing u' v' . That is NEVER the answer. Your final line
            must contain TWO terms joined by +.
```

```
  PATTERN 4 — QUOTIENT RULE                                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   One function DIVIDED by another: sin x / x , (2x+3)/(3x-5).
  METHOD    1. u = TOP , v = BOTTOM.
            2. Answer = ( u' v  -  u v' ) / v^2.
            3. Expand the top and simplify.
  SAY IT    "bottom times derivative of top, MINUS top times derivative
             of bottom, all over bottom squared"
  TRAP      Two traps in one rule:
             (a) getting the two terms the wrong way round - the minus
                 sign makes order matter;
             (b) forgetting to SQUARE the denominator.
  SHORTCUT  If the bottom is a single term like x^2, split the fraction
            into separate powers instead. Much faster.
```

```
  PATTERN 5 — CHAIN RULE, ONE LAYER                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   Something other than plain x sits inside a function:
            sin 3x , e^(x^2) , (2x + 1)^7 , log(5x - 4) , sqrt(3x + 1).
  METHOD    1. Identify OUTSIDE and INSIDE.
            2. Differentiate the OUTSIDE, leaving the inside untouched.
            3. MULTIPLY by the derivative of the INSIDE.
  TRAP      Forgetting step 3. d/dx sin 5x is 5 cos 5x, not cos 5x.
            If your answer has no "extra" factor, check again.
```

```
  PATTERN 6 — CHAIN RULE, TWO OR THREE LAYERS                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   Nested brackets: sec(tan(sqrt x)) , log(sin(log x)) ,
            sqrt(sin(x^3)) , cos(log(cot x)).
  METHOD    Peel like an onion, outermost first. Write the factors in a
            row as you go, multiplying each time, until nothing is left
            but plain x.
  TRAP      Stopping one layer early. Count the brackets in the question
            and count the factors in your answer - they should match.
```

```
  PATTERN 7 — RULES COMBINED (chain inside product / quotient)    4 marks
  ------------------------------------------------------------------------
  TRIGGER   e^(2x) log(3x + 4) , x^2 cos 3x , (sin 2x)/(1 + cos x).
  METHOD    1. Decide the OUTERMOST structure first: is the whole thing
               a product, a quotient, or a sum?
            2. Apply that rule.
            3. Wherever the rule asks for u' or v', use the chain rule
               to get it.
            4. Factor out anything common at the end - examiners give
               a mark for a tidy final form.
  TRAP      Starting with the inner rule. Always work from the OUTSIDE in.
```

```
  PATTERN 8 — DERIVATIVE OF log( f(x) )                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   log(tan 5x) , log(sec x + tan x) , log(sin(log x)).
  METHOD    d/dx [ log f(x) ]  =  f'(x) / f(x)
            "derivative of the inside, over the inside"
            Then simplify with trig identities - the answer is usually
            far shorter than the working.
  KNOW      log(sec x + tan x)  ->  sec x
            log(tan(x/2))       ->  cosec x
            log(cosh x)         ->  tanh x
```

```
  PATTERN 9 — DERIVATIVE AT A GIVEN POINT / VERIFY A RELATION     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find f'(2)" , "Prove f'(0) + 3 f'(-1) = 0" ,
            "Find f'(1) if f(x) = 1 + x + x^2 + ... + x^100".
  METHOD    1. Differentiate the WHOLE function first, in general.
            2. Only THEN substitute the number.
            3. For the series one, f'(1) becomes 1+2+...+n = n(n+1)/2.
  TRAP      Substituting the number before differentiating. That turns
            the function into a constant and gives 0.
```

```
  PATTERN 10 — x^n VERSUS a^x VERSUS x^x (choose the right rule)  2 marks
  ------------------------------------------------------------------------
  TRIGGER   A function like  x^e + e^x + e^e , or  7^x + 7^7 + x^7 .
  METHOD    Look at WHERE the x is:
                base has x, power is a number   ->  n x^(n-1)
                base is a number, power has x   ->  a^x . log a
                BOTH contain x                  ->  logarithmic diff.
                NEITHER contains x              ->  0
  TRAP      e^e and 7^7 are just numbers. Their derivative is 0.
```

```
  PATTERN 11 — FIRST PRINCIPLES: ALGEBRAIC FUNCTION           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "from first principles" / "ab initio" / "by definition"
            with x^n , sqrt(x) , 1/x , sqrt(ax + b).
  METHOD    1. f'(x) = lim(h->0) [ f(x+h) - f(x) ] / h
            2. For a ROOT: multiply top and bottom by the CONJUGATE.
               For x^n: substitute x + h = t and use
               lim(t->x) (t^n - x^n)/(t - x) = n x^(n-1).
            3. Cancel the h.
            4. Only now put h = 0.
  TRAP      Putting h = 0 before cancelling. You get 0/0, which scores
            nothing. Also: write "lim h->0" on EVERY line until the last.
```

```
  PATTERN 12 — FIRST PRINCIPLES: TRIGONOMETRIC FUNCTION       4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the derivative of sin 2x / cos ax / tan 2x / sec 3x /
            cos^2 x from first principles."
  METHOD    1. Write f(x + h) - f(x).
            2. Apply the correct TRANSFORMATION formula:
                 sin C - sin D  = 2 cos((C+D)/2) sin((C-D)/2)
                 cos C - cos D  = -2 sin((C+D)/2) sin((C-D)/2)
                 cos^2 A - cos^2 B = - sin(A+B) sin(A-B)
                 for tan / sec / cot / cosec: convert to sin and cos,
                 take the common denominator, and the top collapses to
                 sin(of the difference).
            3. Adjust so the standard limit sin(t)/t appears, by writing
               h as a multiple of the angle inside the sine.
            4. Take the limit.
  TRAP      Not matching the sine's angle to the denominator. If you have
            sin(3h/2), you must divide by (3h/2), which means writing
            1/h = (3/2) x 1/(3h/2).
```

```
  PATTERN 13 — FIRST PRINCIPLES: e^x , a^x , log x                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the derivative of e^x / a^x / log x / log(sin x)
            from first principles."
  METHOD    1. e^(x+h) = e^x . e^h , so factor e^x out.
            2. a^(x+h) = a^x . a^h , so factor a^x out.
            3. log(x+h) - log x = log(1 + h/x) by the log law.
            4. Then use, respectively:
                 (e^h - 1)/h -> 1 ,  (a^h - 1)/h -> log a ,
                 log(1 + t)/t -> 1.
  TRAP      For the log case, you must multiply and divide by x so that
            the bottom matches the h/x inside the log.
```

```
  PATTERN 14 — FIRST PRINCIPLES OF A PRODUCT (e.g. x sin x)       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the derivative of x sin x (or x^2 cos x) from
            first principles."
  METHOD    1. f(x+h) - f(x) = (x+h) sin(x+h) - x sin x
            2. ADD AND SUBTRACT a middle term so it splits neatly:
                 = x [ sin(x+h) - sin x ]  +  h sin(x+h)
            3. Divide by h and take limits piece by piece.
  TRAP      Trying to expand sin(x + h) fully. The add-and-subtract
            split is the intended route and is far shorter.
```

```
  PATTERN 15 — CONTINUITY vs DIFFERENTIABILITY                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   A modulus sign, or "show that f is not differentiable at ...".
  METHOD    1. Compute the RIGHT derivative:
                 lim(h->0+) [ f(a+h) - f(a) ] / h
            2. Compute the LEFT derivative:
                 lim(h->0-) [ f(a+h) - f(a) ] / h
            3. Equal   -> differentiable.
               Unequal -> NOT differentiable.
  KNOW      abs(x) at x = 0: right = +1, left = -1, so not differentiable,
            although it IS continuous there.
  TRAP      Saying "it is continuous, therefore it is differentiable".
            That implication only runs the OTHER way.
```

```
  PATTERN 16 — DERIVATIVE OF AN INVERSE TRIG FUNCTION (direct)    2 marks
  ------------------------------------------------------------------------
  TRIGGER   arcsin( ) , arctan( ) , arcsec( ) with a SIMPLE inside such
            as sqrt(x) , e^x , 3x , x^2.
  METHOD    1. Quote the standard derivative of the outer inverse function.
            2. Multiply by the derivative of the inside (chain rule).
            3. Simplify the surd.
  TRAP      Signs. arccos, arccot and arccosec all carry a MINUS.
```

```
  PATTERN 17 — INVERSE TRIG WITH AN UGLY INSIDE: SUBSTITUTE       4 marks
  ------------------------------------------------------------------------
  TRIGGER   arctan(2x/(1-x^2)) , arcsin(2x/(1+x^2)) ,
            arccos((1-x^2)/(1+x^2)) , arcsin(3x - 4x^3) ,
            arccos(4x^3 - 3x) , arctan(sqrt((1-x)/(1+x))) ,
            arctan((sqrt(1+x^2) - 1)/x).
  METHOD    1. CHOOSE the substitution from the shape:
                 1 + x^2 or 1 - x^2 in a fraction  ->  x = tan(theta)
                 sqrt(1 - x^2) or 3x - 4x^3        ->  x = sin(theta)
                 4x^3 - 3x or sqrt((1-x)/(1+x))    ->  x = cos(theta)
                                                        (or x = cos 2theta)
            2. Rewrite the inside using a double- or triple-angle formula.
            3. The arc and the trig function cancel, leaving a multiple
               of theta.
            4. Replace theta by arctan x (or arcsin x, arccos x).
            5. NOW differentiate the short version.
  TRAP      Differentiating directly. It is legal but it takes ten times
            longer and you will make a sign error. Also: you must SHOW the
            substitution working - just writing "= 2 arctan x" loses marks.
```

```
  PATTERN 18 — HYPERBOLIC AND INVERSE HYPERBOLIC                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   sinh , cosh , tanh , sinh^-1 , tanh^-1 anywhere in the question.
  METHOD    Quote the standard derivative, then chain rule for the inside.
  KNOW      sinh -> cosh          cosh -> + sinh
            tanh -> sech^2        coth -> - cosech^2
            sech -> - sech tanh   cosech -> - cosech coth
            sinh^-1 -> 1/sqrt(x^2 + 1)    cosh^-1 -> 1/sqrt(x^2 - 1)
            tanh^-1 -> 1/(1 - x^2)
  TRAP      d/dx (cosh x) = + sinh x, with a PLUS. The trig version
            d/dx (cos x) = - sin x has a minus. Do not mix them.
```

```
  PATTERN 19 — IMPLICIT DIFFERENTIATION                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   The equation has x and y mixed together and you cannot get
            y by itself:  x^2 + y^2 = a^2 , x^3 + y^3 = 3axy ,
            sin(xy) = x + y , ax^2 + 2hxy + by^2 = 0.
  METHOD    1. Differentiate BOTH sides with respect to x.
            2. Every term with a y in it produces an extra dy/dx factor.
               Every term like xy needs the PRODUCT rule as well.
            3. Move all dy/dx terms to one side, everything else to
               the other.
            4. Factor out dy/dx and divide.
  TRAP      Forgetting the dy/dx on a y-term. Check EVERY term before
            you collect. Also: it is normal and correct for the answer
            to contain both x and y.
```

```
  PATTERN 20 — IMPLICIT, "PROVE THIS EXPRESSION"                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If sin y = x sin(a + y), prove dy/dx = sin^2(a+y)/sin a" ,
            "If x^y = y^x , find dy/dx".
  METHOD    1. If there are powers with variables, take LOGS first.
            2. Differentiate implicitly.
            3. Use the ORIGINAL equation to eliminate whichever variable
               the target answer does not contain.
            4. Tidy with a trig identity such as
               sin A cos B - cos A sin B = sin(A - B).
  TRAP      Not going back to the original equation in step 3. That is
            usually the step that produces the exact form asked for.
```

```
  PATTERN 21 — PARAMETRIC: FIND dy/dx                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   x and y are BOTH written in terms of t (or theta).
  METHOD    1. dx/dt , differentiating x with respect to t.
            2. dy/dt , differentiating y with respect to t.
            3. dy/dx = (dy/dt) / (dx/dt).
            4. Simplify with trig identities. The answer is usually short:
               tan t , cot t , -tan t , cot(t/2).
  KNOW      x = a cos t , y = a sin t            ->  - cot t
            x = a cos^3 t , y = a sin^3 t        ->  - tan t
            x = a(t - sin t) , y = a(1 - cos t)  ->  cot(t/2)
            x = at^2 , y = 2at                   ->  1/t
  TRAP      Trying to eliminate t first. Legal, but far longer.
```

```
  PATTERN 22 — PARAMETRIC: FIND d2y/dx2                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   Same set-up as Pattern 21, but "find the second derivative".
  METHOD    1. Get dy/dx first (Pattern 21).
            2. Differentiate that answer WITH RESPECT TO t.
            3. DIVIDE by dx/dt.

                 d2y      [ d/dt ( dy/dx ) ]
                ----- =  --------------------
                 dx^2          dx/dt
  TRAP      The biggest trap in the chapter:
                 d2y/dx2 is NOT (d2y/dt2) / (d2x/dt2).
            Examiners deliberately set questions where the wrong formula
            gives a suspiciously neat answer such as 0.
```

```
  PATTERN 23 — LOGARITHMIC DIFFERENTIATION OF [f(x)]^g(x)         7 marks
  ------------------------------------------------------------------------
  TRIGGER   x is in the BASE and in the POWER:
            x^x , x^(sin x) , (sin x)^(cos x) , (log x)^x , x^(1/x).
  METHOD    1. log y = g(x) . log f(x)
            2. Differentiate both sides.
               LEFT side becomes (1/y) . dy/dx  (chain rule).
               RIGHT side needs the PRODUCT rule.
            3. Multiply both sides by y.
            4. REPLACE y by the original expression, written out in full.
  TRAP      Leaving the answer as "y [ ... ]". You must substitute the
            original function back in - this is worth a mark on its own.
```

```
  PATTERN 24 — LOGARITHMIC DIFFERENTIATION OF A LONG PRODUCT      4 marks
  ------------------------------------------------------------------------
  TRIGGER   A big fraction with several brackets and roots, e.g.
            y = (x-1)(x-2) / sqrt( (x-3)(x-4)(x-5) ).
  METHOD    1. Take logs. Use log(AB) = log A + log B,
               log(A/B) = log A - log B, log(A^n) = n log A.
            2. The whole thing becomes a SUM. Differentiate term by term:
               each log(x - a) gives 1/(x - a).
            3. Multiply by y and substitute the original expression.
  TRAP      Sign errors on the terms that came from the denominator -
            they all carry a MINUS.
```

```
  PATTERN 25 — SUM OF TWO POWER-TYPE TERMS                        7 marks
  ------------------------------------------------------------------------
  TRIGGER   y = x^(tan x) + (sin x)^(cos x) , or any A^B + C^D.
  METHOD    1. SPLIT:  let u = first term, v = second term, y = u + v.
            2. Apply Pattern 23 to u on its own.
            3. Apply Pattern 23 to v on its own.
            4. Add:  dy/dx = du/dx + dv/dx.
  TRAP      Taking the log of the whole sum. log(u + v) is NOT
            log u + log v. Doing this loses the entire 7 marks.
```

```
  PATTERN 26 — DIFFERENTIATE ONE FUNCTION W.R.T. ANOTHER          4 marks
  ------------------------------------------------------------------------
  TRIGGER   The words "with respect to" followed by something that is
            not plain x.
  METHOD    1. Call them u and v as written.
            2. Find du/dx and dv/dx separately.
            3. du/dv = (du/dx) / (dv/dx).
            4. If u and v are inverse-trig monsters, SIMPLIFY BOTH FIRST
               (Pattern 17). The answer usually collapses to a number.
  TRAP      Differentiating u with respect to v directly. You cannot.
            You must go through x.
```

```
  PATTERN 27 — SECOND DERIVATIVE OF AN ORDINARY FUNCTION      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find d2y/dx2" with y given plainly in terms of x.
  METHOD    1. Differentiate once -> y1.
            2. SIMPLIFY y1 before going further. A messy y1 makes y2
               three times harder.
            3. Differentiate y1 -> y2, using product / chain rules again.
  TRAP      Not simplifying y1 first. Also: y2 is not (y1)^2.
```

```
  PATTERN 28 — SECOND DERIVATIVE OF AN IMPLICIT FUNCTION          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If x^2 + y^2 = a^2 , find d2y/dx2".
  METHOD    1. Differentiate once, get y1 in terms of x and y.
            2. Differentiate y1 using the QUOTIENT rule.
            3. Wherever a y1 appears in the result, SUBSTITUTE the
               expression from step 1.
            4. Simplify using the ORIGINAL equation.
  TRAP      Leaving y1 in the final answer. It must be eliminated.
```

```
  PATTERN 29 — PROVE A RELATION IN y , y1 , y2         *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "If y = ... , prove that (1 - x^2) y2 - x y1 - a^2 y = 0"
            or any equation mixing y, dy/dx and d2y/dx2.
  METHOD    1. Find y1.
            2. Rearrange y1 into a clean relation with y. If a square
               root is in the way, move it to the other side and SQUARE
               both sides. This is the key move.
            3. Differentiate that relation once more.
            4. Every term will contain a factor y1 (usually 2 y1).
               Write "dividing throughout by 2 y1" and cancel it.
            5. Rearrange to match the printed relation exactly, then
               write PROVED.
  KNOW      y = a e^(mx) + b e^(-mx)      ->  y2 = m^2 y
            y = a cos nx + b sin nx       ->  y2 + n^2 y = 0
            y = e^(a arcsin x)            ->  (1-x^2) y2 - x y1 - a^2 y = 0
            y = (x + sqrt(1+x^2))^m       ->  (1+x^2) y2 + x y1 - m^2 y = 0
            y = a cos(log x)+b sin(log x) ->  x^2 y2 + x y1 + y = 0
            y = (arcsin x)^2              ->  (1-x^2) y2 - x y1 - 2 = 0
  TRAP      Silently dropping the 2 y1 factor in step 4. Write the words
            "dividing throughout by 2 y1" - it is worth a mark.
```

```
  PATTERN 30 — GEOMETRICAL MEANING / SLOPE OF THE TANGENT         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the slope of the tangent to y = f(x) at x = a" ,
            "the angle the tangent makes with the x-axis".
  METHOD    1. Differentiate to get dy/dx.
            2. Substitute x = a. That number IS the slope.
            3. If an angle is asked: theta = arctan( slope ).
  TRAP      Substituting before differentiating. And remember: slope
            zero means the tangent is HORIZONTAL, not that there is no
            tangent.
```

---

# SELF-TEST

Cover the answer column with a sheet of paper. Give yourself one minute per row.
If you get 15 or more right, this chapter is safe.

| # | Question | Answer |
|---|----------|--------|
| 1 | d/dx ( x^7 ) | 7 x^6 |
| 2 | d/dx ( sqrt(x) ) | 1 / (2 sqrt(x)) |
| 3 | d/dx ( 1/x ) | -1 / x^2 |
| 4 | d/dx ( e^(5x) ) | 5 e^(5x) |
| 5 | d/dx ( 3^x ) | 3^x log 3 |
| 6 | d/dx ( log(4x) ) | 1 / x |
| 7 | d/dx ( sin 3x ) | 3 cos 3x |
| 8 | d/dx ( cos x ) | - sin x |
| 9 | d/dx ( tan x ) | sec^2 x |
| 10 | d/dx ( cot x ) | - cosec^2 x |
| 11 | d/dx ( sec x ) | sec x tan x |
| 12 | d/dx ( cosec x ) | - cosec x cot x |
| 13 | d/dx ( arcsin x ) | 1 / sqrt(1 - x^2) |
| 14 | d/dx ( arctan x ) | 1 / (1 + x^2) |
| 15 | d/dx ( arccos x ) | -1 / sqrt(1 - x^2) |
| 16 | d/dx ( cosh x ) | + sinh x |
| 17 | d/dx ( tanh x ) | sech^2 x |
| 18 | Product rule | u' v + u v' |
| 19 | Quotient rule | ( u' v - u v' ) / v^2 |
| 20 | Chain rule | (dy/du) x (du/dx) |
| 21 | Parametric dy/dx | (dy/dt) / (dx/dt) |
| 22 | Parametric d2y/dx2 | [ d/dt (dy/dx) ] / (dx/dt) |
| 23 | d/dx ( x^x ) | x^x ( 1 + log x ) |
| 24 | d/dx arctan( 2x/(1-x^2) ) | 2 / (1 + x^2) |
| 25 | d/dx arcsin( 3x - 4x^3 ) | 3 / sqrt(1 - x^2) |
| 26 | d/dx [ arcsin x + arccos x ] | 0 |
| 27 | dy/dx if x^2 + y^2 = a^2 | - x / y |
| 28 | y = a cos nx + b sin nx, find y2 | - n^2 y |
| 29 | Is abs(x) differentiable at 0? | No (left -1, right +1) |
| 30 | d/dx [ log f(x) ] | f'(x) / f(x) |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TIER 1  —  DO NOT SIT THE EXAM WITHOUT THESE   (about 6 marks)   |
  |                                                                    |
  |     Patterns 1, 2, 3, 4, 5, 6, 8, 10                               |
  |     -> the two Section A questions from this chapter               |
  |     Learn the standard derivative table by heart. Nothing else     |
  |     in this chapter works until you have.                          |
  |     TIME NEEDED: one evening.                                      |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TIER 2  —  THE 4-MARK QUESTION            (about 4 marks more)   |
  |                                                                    |
  |     Patterns 17, 19, 21, 26                                        |
  |     -> substitution, implicit, parametric, one-w.r.t.-another      |
  |     These four cover almost every Section B appearance.            |
  |     TIME NEEDED: one afternoon, six practice problems.             |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TIER 3  —  THE 7-MARK QUESTION            (about 7 marks more)   |
  |                                                                    |
  |     Patterns 12, 23, 25, 29                                        |
  |     -> first principles for a trig function                        |
  |     -> logarithmic differentiation of [f]^[g] and of A^B + C^D     |
  |     -> prove a relation in y, y1, y2                               |
  |     In almost every paper, the Section C question from this        |
  |     chapter is one of these four. Practise ONE of each and you     |
  |     have a very high chance of recognising what appears.           |
  |     TIME NEEDED: two afternoons.                                   |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TIER 4  —  IF YOU HAVE TIME LEFT                                 |
  |                                                                    |
  |     Patterns 11, 13, 14, 15, 18, 22, 24, 27, 28, 30                |
  |     Each is worth 2 to 4 marks and each is genuinely easy once     |
  |     Tiers 1-3 are solid.                                           |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   REALISTIC TOTAL FROM THIS CHAPTER:  13 to 17 marks out of 75     |
  |   PLUS: Chapter 10 (Applications of Derivatives) becomes easy,     |
  |   which is another 7 to 11 marks you were going to lose.           |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**The one-sentence version:** learn the derivative table, learn product-quotient-
chain, learn first principles for one trig function, learn logarithmic
differentiation, learn the square-and-differentiate-again trick for proving
relations. That is the whole chapter, and it is the best return on effort
available anywhere in Maths IB.
