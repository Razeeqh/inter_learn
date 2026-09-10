# Limits and Continuity — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DIRECT SUBSTITUTION                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Evaluate lim f(x) as x -> a" where f is a polynomial,
            or a fraction whose bottom is NOT zero at a,
            or sin/cos/e^x/log at a point where they are defined.
  METHOD    1. Put x = a.
            2. Simplify the arithmetic.
            3. Write the answer.
  TRAP      Not trying this first and wasting two minutes factorising
            something that did not need it.
            Also: after substituting, LOOK at the result. 0/0 means
            keep going; a clean number means STOP.
```

```
  PATTERN 2 — 0/0 WITH POLYNOMIALS: FACTORISE AND CANCEL          2 marks
  ------------------------------------------------------------------------
  TRIGGER   Substituting x = a gives 0/0, and everything in sight is
            a polynomial.
  METHOD    1. Write "This is of the form 0/0".
            2. Factorise the TOP.  Factorise the BOTTOM.
               (x - a) is guaranteed to be a factor of both.
            3. Cancel (x - a). It is legal because x is never equal to a.
            4. Substitute x = a into what is left.
  TRAP      Cancelling before checking the factor really is common to
            BOTH lines. Also forgetting that 3 - x = -(x - 3):
            that stray minus sign flips the whole answer.
```

```
  PATTERN 3 — 0/0 WITH A FRACTION INSIDE THE FRACTION             2 marks
  ------------------------------------------------------------------------
  TRIGGER   ( 1/x - 1/a ) / ( x - a )  , or any small fractions stacked
            on top of each other.
  METHOD    1. Combine the TOP over one common denominator.
            2. The top becomes (a - x)/(ax) = -(x - a)/(ax).
            3. Cancel (x - a) with the bottom.
            4. Substitute.
  TRAP      Losing the minus sign in step 2. Expected answer shape: -1/a^2.
```

```
  PATTERN 4 — THE  x^n - a^n  STANDARD RESULT                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   The bottom is exactly (x - a) and the top is x^n - a^n
            with the SAME a. Powers may be large, negative or fractional.
  METHOD    Write straight down:
                  lim  (x^n - a^n)/(x - a)  =  n . a^(n - 1)
                 x->a
  TRAP      The numbers must match. (x^5 - 32)/(x - 3) is NOT this
            pattern - it is not even 0/0, so just substitute.
            Also: 32 = 2^5, 27 = 3^3, 81 = 3^4. Recognise the powers.
```

```
  PATTERN 5 — THE DOUBLE  x^n - a^n  FORM                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   BOTH the top and the bottom are of the form (something)^power
            minus (the same a)^power.  e.g. (x^5 - 32)/(x^3 - 8).
  METHOD    Divide top and bottom by (x - a) mentally and write:
                  lim  (x^n - a^n)/(x^m - a^m)  =  (n/m) . a^(n - m)
                 x->a
  TRAP      Getting n and m the wrong way round. The TOP power goes
            on top of the fraction n/m.
```

```
  PATTERN 6 — RATIONALISE THE NUMERATOR                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   0/0, and there is a square root on TOP.
            e.g. ( sqrt(1+x) - 1 )/x  ,  ( sqrt(x+2) - 2 )/(x - 2)
  METHOD    1. Multiply top AND bottom by the conjugate
               (same expression, middle sign flipped).
            2. On top, use (A - B)(A + B) = A^2 - B^2. The roots die.
            3. Cancel the common factor with the bottom.
            4. Substitute into what remains.
  TRAP      Expanding the conjugate bracket on the BOTTOM. Leave it
            whole - you need to substitute into it at the end.
            Also: multiply BOTH lines, not just the top.
```

```
  PATTERN 7 — RATIONALISE THE DENOMINATOR                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   0/0, and the square root is on the BOTTOM.
            e.g.  x / ( sqrt(1+x) - sqrt(1-x) )
  METHOD    Same conjugate trick, applied to the bottom.
            Or spot that it is the RECIPROCAL of a limit you know,
            and just invert the answer.
  TRAP      Rationalising the wrong line and making it worse.
            Look at where the root that CAUSES the 0 actually is.
```

```
  PATTERN 8 — RATIONAL FUNCTION AS  x -> INFINITY              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "lim ... as x -> infinity" with a polynomial over a polynomial.
            Substituting gives inf/inf.
  METHOD    1. Find the highest power of x in the DENOMINATOR.
            2. Divide EVERY term, top and bottom, by that power.
            3. Every 1/x , 1/x^2 , ... becomes 0.
            4. Read off the answer.
            FAST VERSION (for MCQs):
               degree top < degree bottom  ->  0
               degree top = degree bottom  ->  ratio of leading coefficients
               degree top > degree bottom  ->  infinity
  TRAP      Expand brackets FIRST to find the true degree.
            (3x-1)(4x+2) is degree 2, not degree 1.
```

```
  PATTERN 9 — inf MINUS inf WITH A SQUARE ROOT                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   x -> infinity, and you see  sqrt(...) - x  or
            sqrt(...) - sqrt(...).
  METHOD    1. Say "form inf - inf".
            2. Multiply and divide by the conjugate.
            3. The top becomes a polynomial of LOW degree.
            4. Divide top and bottom by x (inside a root, divide by x^2).
            5. Substitute 1/x = 0.
            SHORTCUT:  sqrt(x^2 + ax + b) - x  ->  a/2
  TRAP      Forgetting that inside a square root you divide by x^2,
            not x, because sqrt(x^2) = x.
```

```
  PATTERN 10 — SQUARE ROOTS AS  x -> MINUS INFINITY               4 marks
  ------------------------------------------------------------------------
  TRIGGER   The arrow says x -> -infinity and there is a sqrt(x^2 ...).
  METHOD    1. Substitute x = -t , so t -> +infinity.
            2. Now sqrt(x^2) = sqrt(t^2) = t , which is positive.
            3. Solve as an ordinary x -> +infinity problem.
            4. Convert the answer back.
  TRAP      Writing sqrt(x^2) = x when x is negative. It is |x| = -x.
            This single slip reverses the sign of the whole answer.
```

```
  PATTERN 11 — sin(ax)/x  AND FRIENDS                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   x -> 0 and you see sin or tan of a multiple of x,
            with a plain x underneath.
  METHOD    1. Put the SAME thing underneath as is inside the sin.
            2. Multiply outside by whatever you had to invent.
                 sin(ax)/x  =  [ sin(ax)/(ax) ] . a   ->   1 . a  =  a
  TRAP      Writing sin(5x)/x = 1. It is 5.
            "Whatever is inside must also be underneath."
```

```
  PATTERN 12 — sin OVER sin , tan OVER tan , MIXED                2 marks
  ------------------------------------------------------------------------
  TRIGGER   x -> 0 with a trig function on top AND on the bottom.
  METHOD    Force both into standard shape:
                 sin(ax)/sin(bx)  =  [sin(ax)/(ax)] . ax
                                     ----------------------  ->  a/b
                                     [sin(bx)/(bx)] . bx
            Result: sin/sin, tan/tan, sin/tan, tan/sin ALL give a/b.
  TRAP      x cot(kx) is secretly this pattern:
            x cot(kx) = x cos(kx)/sin(kx)  ->  1/k , not k.
```

```
  PATTERN 13 — THE  1 - cos  FAMILY                            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   x -> 0 and you see  1 - cos(something).
  METHOD    Convert the cos into a sin using
                 1 - cos 2A  =  2 sin^2 A       (so 1 - cos kx = 2 sin^2(kx/2))
            then use sin(ax)/x -> a.
            RESULTS TO KNOW:
                 (1 - cos x)/x     ->  0
                 (1 - cos x)/x^2   ->  1/2
                 (1 - cos ax)/x^2  ->  a^2 / 2
                 (1 - cos 2mx)/sin^2(nx)  ->  2m^2/n^2
  TRAP      COUNT THE POWERS OF x UNDERNEATH.
            /x gives 0 ; /x^2 gives 1/2. They are completely different.
```

```
  PATTERN 14 — SUM OR DIFFERENCE OF TWO SINES / COSINES           4 marks
  ------------------------------------------------------------------------
  TRIGGER   sin(a + bx) - sin(a - bx) , or cos(ax) - cos(bx) , over x or x^2.
  METHOD    1. Use the product formula:
                 sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2)
                 cos C - cos D = 2 sin((C+D)/2) sin((D-C)/2)
            2. Now you have a PRODUCT of sines - apply sin(kx)/x -> k
               to each factor separately.
            3. Multiply the pieces.
  TRAP      Mixing up the cos C - cos D formula's sign. The sin factors
            are ((C+D)/2) and ((D - C)/2) - note D comes first in the
            second bracket.
```

```
  PATTERN 15 — THIRD-ORDER TRIG LIMITS                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   Something over x^3 involving tan and sin.
  METHOD    Factorise so that known limits appear:
                 tan x - sin x  =  sin x (1 - cos x)/cos x
            then split as  (sin x / x) . ((1 - cos x)/x^2) . (1/cos x)
            MEMORISE:
                 (tan x - sin x)/x^3  ->  1/2
                 (x - sin x)/x^3      ->  1/6
                 (tan x - x)/x^3      ->  1/3
  TRAP      Trying to cancel x^3 all at once. Split it as x . x^2 and
            match each piece to a standard limit.
```

```
  PATTERN 16 — INVERSE TRIGONOMETRIC LIMITS                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   sin^-1 or tan^-1 (arcsin / arctan) with x -> 0.
  METHOD    Identical to Pattern 11:
                 sin^-1(ax)/x  ->  a        tan^-1(ax)/x  ->  a
  TRAP      Reading sin^-1 x as 1/(sin x). It is the INVERSE function.
            1/(sin x) would blow up at 0, giving a completely
            different (infinite) answer.
```

```
  PATTERN 17 — EXPONENTIAL LIMITS                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   x -> 0 with  e^(kx) - 1  or  a^(kx) - 1  in the fraction.
  METHOD          (e^(kx) - 1)/x  ->  k
                  (a^(kx) - 1)/x  ->  k log a
            For a SHIFTED exponential, factor the constant out first:
                  e^(a + x) - e^a  =  e^a ( e^x - 1 )
            For an exponential of a function, split:
                  (e^(sinx) - 1)/x = [(e^(sinx)-1)/sinx] . (sinx/x)
  TRAP      Forgetting the "minus 1". (e^x)/x does NOT tend to 1.
```

```
  PATTERN 18 — DIFFERENCE OF TWO EXPONENTIALS                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   ( a^x - b^x ) / x  with x -> 0.
  METHOD    Add and subtract 1:
                 a^x - b^x  =  (a^x - 1) - (b^x - 1)
            Split the limit:  log a - log b  =  log ( a / b )
  TRAP      Writing log(a - b) or log a / log b. It is log of the QUOTIENT.
```

```
  PATTERN 19 — LOGARITHMIC LIMITS                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   log(1 + kx) with x -> 0.
  METHOD          log(1 + kx)/x  ->  k
  TRAP      The "1 +" is essential. log(x)/x as x -> 0 is NOT 1 -
            log x runs off to minus infinity there.
            Also "log" in this chapter always means base e.
```

```
  PATTERN 20 — THE  1^infinity  FORM                           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Something raised to a power, where the BASE tends to 1 and
            the POWER tends to infinity.
            Shapes: (1 + k/x)^x , (1 + kx)^(1/x) , ((x+a)/(x+b))^x
  METHOD    1. Confirm the form is 1^inf by substituting.
            2. Compute  L  =  lim [ power ] x [ base - 1 ].
            3. Answer  =  e^L .
            SHORTCUTS:  (1 + a/x)^(bx) -> e^(ab)
                        ((x+a)/(x+b))^x -> e^(a - b)
  TRAP      Using the rule when the base does NOT tend to 1.
            If the base tends to 2, then 2^infinity = infinity - no rule needed.
```

```
  PATTERN 21 — LHL AND RHL FOR A PIECEWISE FUNCTION            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   f is defined by a curly bracket with different rules on
            either side of a, and the question asks whether the limit exists.
  METHOD    1. LHL = lim f(a - h) as h -> 0   -- use the "x < a" rule.
            2. RHL = lim f(a + h) as h -> 0   -- use the "x > a" rule.
            3. Compare. Equal -> the limit exists and is that value.
               Unequal -> write "the limit does not exist".
  TRAP      Using the wrong branch. a - h is SMALLER than a, so it goes
            in the "x < a" rule. Write "h > 0" once to keep yourself honest.
```

```
  PATTERN 22 — LIMITS INVOLVING MODULUS                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   |x| , |x - a| , or |f(x)| anywhere near the point where the
            inside becomes 0.
  METHOD    1. Split the modulus at the point where the inside is 0:
                 |x - a| =  (x - a)  when x > a
                 |x - a| = -(x - a)  when x < a
            2. Compute LHL and RHL with the correct version.
            3. Compare.
            KNOWN RESULT: |x|/x at 0 has LHL -1 and RHL +1, so no limit.
  TRAP      Treating |x - a|/(x - a) as 1 everywhere. It is +1 on one
            side and -1 on the other. That is the entire question.
```

```
  PATTERN 23 — LIMITS INVOLVING THE GREATEST INTEGER [x]          2 marks
  ------------------------------------------------------------------------
  TRIGGER   Square brackets [x] , and the point a is (or is not) an integer.
  METHOD    a is an INTEGER:
                 LHL = a - 1 ,  RHL = a   ->   limit DOES NOT EXIST
            a is NOT an integer:
                 [x] is constant near a  ->  limit = [a] , and f is continuous
  TRAP      [-1.2] = -2 , not -1.  "Greatest integer not exceeding x."
            On the negative side you round DOWN, away from zero.
```

```
  PATTERN 24 — THE FUNCTION BLOWS UP (k / 0)                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   Substituting gives a NON-ZERO number over 0.
  METHOD    1. Say clearly: this is NOT indeterminate.
            2. Check the sign of the bottom on each side of a.
            3. If the two sides give +infinity and -infinity, or if either
               is infinite, the limit does not exist as a finite number.
            4. Name it: an INFINITE discontinuity.
  TRAP      Calling 5/0 "indeterminate". It is not. Only 0/0 is.
            Also 1/(x-a)^2 gives +infinity on BOTH sides - still no
            finite limit, still an infinite discontinuity.
```

```
  PATTERN 25 — IS f CONTINUOUS AT x = a ?                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Test / examine / discuss the continuity of f at x = a."
  METHOD    Write these FOUR labelled lines, always:
            1.  f(a)  =  ...      (use the branch that OWNS x = a)
            2.  LHL   =  lim f(a - h)  =  ...
            3.  RHL   =  lim f(a + h)  =  ...
            4.  Compare all three, then a FULL SENTENCE conclusion:
                "Since LHL = RHL = f(a), f is continuous at x = a."
                or "Since LHL is not RHL, f is discontinuous at x = a."
  TRAP      Skipping the f(a) line. Even when it looks obvious, the
            examiner is paying for that line. Also: check the inequality
            signs - "x <= a" and "x < a" put f(a) in different branches.
```

```
  PATTERN 26 — FIND k SO THAT f IS CONTINUOUS                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   A piecewise f with an unknown letter (k, a, p, ...) and the
            words "is continuous at x = ..." or "find the value of k".
  METHOD    1. Write f(a) - it will contain k.
            2. Evaluate the limit of the OTHER branch (usually a 0/0
               limit needing Patterns 2, 6, 11, 13 or 17).
            3. SET  limit = f(a)  and solve for k.
            4. Substitute k back and CHECK.
  TRAP      If the equation turns out to be a QUADRATIC in k, there are
            TWO answers. Give both. Giving one loses half the marks.
```

```
  PATTERN 27 — FIND TWO CONSTANTS a AND b                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two unknown letters, and usually an extra piece of data
            such as "f(1) = 5" or a second point of continuity.
  METHOD    1. Each continuity point gives ONE equation (LHL = RHL = f).
            2. Each extra given value gives ONE more equation.
            3. Solve the simultaneous equations.
            4. Substitute both back and verify.
  TRAP      One continuity condition can never determine two unknowns
            on its own. If you only have one equation, the answer is a
            RELATION between a and b - say so, do not invent a value.
```

```
  PATTERN 28 — CLASSIFY THE DISCONTINUITY                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What kind of discontinuity ... ?" or "Is it removable?"
  METHOD    1. Compute LHL and RHL.
            2. Decide:
                 LHL = RHL (finite) but not equal to f(a),
                 or f(a) missing        ->  REMOVABLE
                 LHL , RHL finite but different  ->  JUMP (non-removable)
                 LHL or RHL infinite             ->  INFINITE (non-removable)
            3. For removable, SAY what value would fix it:
               "redefining f(a) = L makes f continuous".
            4. For a jump, the size is | RHL - LHL |.
  TRAP      "Removable" still means DISCONTINUOUS. If the question asks
            "is f continuous?", the answer is still NO.
```

```
  PATTERN 29 — CONTINUITY ON AN INTERVAL / MULTI-BRANCH f         4 marks
  ------------------------------------------------------------------------
  TRIGGER   f defined by three or four rules over consecutive intervals,
            and "discuss the continuity of f".
  METHOD    1. Each individual branch is a polynomial / standard function,
               so it is continuous INSIDE its own interval. Say this once.
            2. The only doubtful points are the JOINTS.
            3. At each joint, run Pattern 25 (f(a), LHL, RHL).
            4. Collect the conclusions.
            For a CLOSED interval [a, b]: at the two endpoints you only
            check ONE side (right-continuity at a, left-continuity at b).
  TRAP      Testing points that are not joints - a waste of time.
            And at the endpoints of a closed interval, do NOT demand
            a two-sided limit; only one side exists.
```

```
  PATTERN 30 — CONTINUITY OF STANDARD AND COMPOSITE FUNCTIONS  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Where is f continuous?" for something built out of standard
            pieces: log( x - 3 ) , sin( x^2 + 1 ) , (x+1)/(x^2 - 5x + 6).
  METHOD    1. Rational function -> set the DENOMINATOR to 0. Those points
               are the only discontinuities.
            2. log(u) -> demand u > 0.     sqrt(u) -> demand u >= 0.
            3. tan / sec -> exclude odd multiples of pi/2.
               cot / cosec -> exclude multiples of pi.
            4. Composite: if the inside is continuous at a and the outside
               is continuous at (inside value), the whole is continuous at a.
            5. State the answer as a SET or INTERVAL.
  TRAP      Saying |x| is discontinuous at 0 because of the corner.
            It is CONTINUOUS there. The corner only kills
            DIFFERENTIABILITY, which is a Chapter 9 idea.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| `lim (x^2 + 3x - 1)` as `x -> 2` | 1 |
| `lim (x^2 - 25)/(x - 5)` as `x -> 5` | 2 |
| `lim (1/x - 1/5)/(x - 5)` as `x -> 5` | 3 |
| `lim (x^9 - 2^9)/(x - 2)` as `x -> 2` | 4 |
| `lim (x^7 - 1)/(x^4 - 1)` as `x -> 1` | 5 |
| `lim (sqrt(4 + x) - 2)/x` as `x -> 0` | 6 |
| `lim x/(sqrt(1+x) - sqrt(1-x))` as `x -> 0` | 7 |
| `lim (5x^2 + 2)/(3x^2 - x)` as `x -> inf` | 8 |
| `lim (sqrt(x^2 + 6x) - x)` as `x -> inf` | 9 |
| `lim (sqrt(x^2 + x) + x)` as `x -> -inf` | 10 |
| `lim sin(7x)/x` as `x -> 0` | 11 |
| `lim tan(3x)/sin(8x)` as `x -> 0` | 12 |
| `lim (1 - cos 6x)/x^2` as `x -> 0` | 13 |
| `lim (cos 3x - cos 5x)/x^2` as `x -> 0` | 14 |
| `lim (tan x - sin x)/x^3` as `x -> 0` | 15 |
| `lim sin^-1(2x)/x` as `x -> 0` | 16 |
| `lim (e^(4x) - 1)/x` as `x -> 0` | 17 |
| `lim (7^x - 3^x)/x` as `x -> 0` | 18 |
| `lim log(1 + 9x)/x` as `x -> 0` | 19 |
| `lim ((x + 5)/(x + 2))^x` as `x -> inf` | 20 |
| "f(x) = 2x+1 for x<3, 5x-2 for x>=3. Does the limit exist at 3?" | 21 |
| `lim \|x - 4\|/(x - 4)` as `x -> 4` | 22 |
| `lim [x]` as `x -> 5` | 23 |
| `lim (x + 1)/(x - 2)` as `x -> 2` | 24 |
| "Examine the continuity of f at x = 1" | 25 |
| "Find k so that f is continuous at x = 0" | 26 |
| "If f is continuous at x = 2 and f(2) = 7, find a and b" | 27 |
| "Is the discontinuity at x = 3 removable?" | 28 |
| "f has four branches. Discuss continuity on [0, 4]." | 29 |
| "Where is f(x) = log(2x - 6) continuous?" | 30 |

```
   Score 25 or more out of 30 and you will not be surprised by
   anything this chapter throws at you.
```

---

# THE PATTERNS RANKED BY HOW OFTEN THEY APPEAR

```
  ALWAYS COME UP        ->   1 , 2 , 11 , 26
  VERY LIKELY           ->   6 , 8 , 13 , 17 , 25
  LIKELY                ->   4 , 5 , 9 , 12 , 18 , 19 , 21 , 22
  POSSIBLE              ->   3 , 7 , 14 , 20 , 23 , 28 , 29 , 30
  RARE (but easy marks) ->   10 , 15 , 16 , 24 , 27
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +===================================================================+
  |                                                                   |
  |   REALISTIC TARGET FROM LIMITS AND CONTINUITY:  8 - 10 MARKS      |
  |                                                                   |
  |   Section A  ->  2 questions x 2 marks  =  4 marks   (compulsory) |
  |   Section B  ->  1 question  x 4 marks  =  4 marks   (choose it)  |
  |   Section C  ->  rarely appears - do not plan on it               |
  |                                                                   |
  +===================================================================+
```

## THE FOUR-STEP PLAN

```
  STEP 1  --  LOCK IN THE 4 SECTION A MARKS.            [half a day]

            Master Patterns 1, 2, 11, 17 only.
            Substitute. Factorise. sin(ax)/x -> a. (e^(kx)-1)/x -> k.

            Those four cover the overwhelming majority of the 2-mark
            questions this chapter has ever set. Do 20 problems.


  STEP 2  --  LOCK IN THE 4 SECTION B MARKS.            [half a day]

            Master Patterns 25 and 26 - "is f continuous" and "find k".
            Practise writing the FOUR LINES every single time:

                 f(a) = ...
                 LHL  = ...
                 RHL  = ...
                 Conclusion in a full sentence.

            Do 8 problems, at least two of which have a quadratic in k
            so you get used to producing TWO answers.


  STEP 3  --  ADD THE INSURANCE PATTERNS.               [half a day]

            Patterns 6 (rationalise), 8 (x -> infinity), 13 (1 - cos).
            These are the second-most-common Section A questions and
            they occasionally show up as the 4-mark question instead
            of continuity.


  STEP 4  --  SKIM THE REST.                            [one evening]

            Read Patterns 3, 4, 5, 9, 12, 14, 18, 19, 20, 21, 22, 23,
            28, 29, 30 once, out loud, and do ONE example of each.
            You are not aiming to master them - you are aiming to
            recognise them so nothing in the paper looks unfamiliar.
```

## IF YOU HAVE ONLY ONE HOUR LEFT BEFORE THE EXAM

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Write these six lines on one sheet and read them ten times:     |
  |                                                                   |
  |     1.  Substitute first.                                        |
  |     2.  0/0 with polynomials  ->  factorise and cancel (x - a).   |
  |     3.  sin(ax)/x -> a  ,  tan(ax)/x -> a   [radians]             |
  |     4.  (1 - cos ax)/x^2 -> a^2/2                                 |
  |     5.  (e^(ax) - 1)/x -> a  ,  log(1 + ax)/x -> a                |
  |     6.  Continuous  <=>  LHL = RHL = f(a).                        |
  |                                                                   |
  |   Six lines. Roughly 8 marks. That is the best return per         |
  |   minute available anywhere in Maths IB.                          |
  |                                                                   |
  +-------------------------------------------------------------------+
```
