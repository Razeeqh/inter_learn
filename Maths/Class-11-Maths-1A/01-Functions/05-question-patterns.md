# Functions — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — EQUALITY OF ORDERED PAIRS                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two ROUND brackets joined by "=" with letters inside.
            "Find x and y if (3x - 1, 2y + 5) = (5, 11)."
  METHOD    1. First component = first component.
            2. Second component = second component.
            3. Solve the two little equations separately.
  TRAP      Round brackets = ORDERED PAIR, order matters.
            Curly brackets = SET, order does not matter.
            Look at the brackets before you start.
```

```
  PATTERN 2 — WRITE A x B  /  COUNT ITS ELEMENTS                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write A x B in roster form" or "find n(A x B)".
  METHOD    1. Pair EVERY element of A with EVERY element of B.
            2. Keep the A element FIRST in each pair.
            3. n(A x B) = n(A) x n(B).
  TRAP      A x B is NOT B x A. If the question says B x A, the letters
            from B must come first. Same COUNT, different SET.
```

```
  PATTERN 3 — RELATION: ROSTER FORM, DOMAIN AND RANGE             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "R = {(a,b) : b = a^2}" or "R = {(a,b) : a - b is odd}".
  METHOD    1. Run through every pair of A x B and keep those that obey
               the condition.
            2. Domain = set of first components you actually kept.
            3. Range  = set of second components you actually kept.
            4. Codomain = the whole set B, used or not.
  TRAP      Writing the CODOMAIN when the question asked for the RANGE.
            Range only counts values that really occur.
```

```
  PATTERN 4 — IS THIS RELATION A FUNCTION?                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   A set of ordered pairs, or an arrow diagram, or a graph, with
            "is it a function?"
  METHOD    Look ONLY at the left-hand (first) components.
            1. Does EVERY element of A appear?      If no -> not a function.
            2. Does any element appear TWICE?       If yes -> not a function.
            For a GRAPH: use the VERTICAL LINE TEST.
  TRAP      Two arrows ARRIVING at the same point is perfectly legal
            (many-one). Only the LEFT side has rules.
```

```
  PATTERN 5 — FIND THE DOMAIN OF A REAL FUNCTION      *** 2 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Find the domain of f(x) = ..."   THE most repeated question
            in this chapter.
  METHOD    Scan the formula for exactly three dangers:
                sqrt( E )     ->    E  >=  0
                1 / E         ->    E  is not 0
                log( E )      ->    E  >   0
                1 / sqrt(E)   ->    E  >   0   (both rules at once)
            Solve the inequality. If E is a quadratic, factorise, mark the
            roots on a number line and test one number in each strip.
  TRAP      1. Brackets:  >= gives [ ] ,  > gives ( ) . Infinity always ( ).
            2. If TWO conditions appear, take the INTERSECTION, not the
               union.
            3. Multiplying an inequality by -1 FLIPS the sign.
```

```
  PATTERN 6 — DOMAIN OF A SUM OF TWO SQUARE ROOTS                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   f(x) = sqrt( ... ) + sqrt( ... )
  METHOD    1. Write the condition from the first root.
            2. Write the condition from the second root.
            3. Draw BOTH on one number line.
            4. Answer = the OVERLAP.
            For sqrt(x - a) + sqrt(b - x) the answer is [a, b].
  TRAP      Taking the union. Both roots must be alive AT THE SAME x.
            If the two conditions never overlap, the domain is EMPTY -
            and "empty set" is a legitimate full-mark answer.
```

```
  PATTERN 7 — FIND THE RANGE OF A REAL FUNCTION                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the range of f(x) = ..."
  METHOD    Choose ONE of three routes:
            A. Make x the subject:  put y = f(x), solve for x, then ask
               which y keep x real and legal.
            B. Build up from a known fact:
                  x^2 >= 0 ,  |x| >= 0 ,  sqrt(x) >= 0 ,  a^x > 0 ,
                  -1 <= sin x <= 1
            C. Sketch the graph and read the top and bottom.
  TRAP      A square root NEVER outputs a negative number. The range of
            sqrt(9 - x^2) is [0, 3], not [-3, 3].
```

```
  PATTERN 8 — DOMAIN AND RANGE OF (ax + b)/(cx + d)          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A single fraction with x on the top AND on the bottom.
  METHOD    Instant answers:
                 DOMAIN  =  R  minus  { -d/c }      (bottom cannot be 0)
                 RANGE   =  R  minus  {  a/c }
            For 4 marks, SHOW the range derivation:
                 y(cx + d) = ax + b  ->  x(cy - a) = b - dy
                 ->  x = (b - dy)/(cy - a) ,  so cy - a is not 0.
  TRAP      Mixing up which one is removed. Memory line:
            "DOWN kills the DOMAIN (-d/c), TOP kills the RANGE (a/c)."
```

```
  PATTERN 9 — PIECEWISE FUNCTION: EVALUATE AT GIVEN POINTS        2 marks
  ------------------------------------------------------------------------
  TRIGGER   A function written with a big brace and 2 or 3 formulas, each
            with its own interval. "Find f(4), f(-2), f(0), f(2.5)."
  METHOD    For each input:
            1. Decide which interval it belongs to.
            2. Use ONLY that interval's formula.
            3. If it belongs to NO interval, write "NOT DEFINED".
  TRAP      The gap. The examiner always slips in one value that falls in
            a hole between two intervals. Inventing a value there loses
            the mark; writing "not defined" earns it.
```

```
  PATTERN 10 — GREATEST INTEGER / MODULUS / SIGNUM VALUES         2 marks
  ------------------------------------------------------------------------
  TRIGGER   Square brackets [x], modulus |x|, or sgn(x) inside the question.
  METHOD    [x] = greatest integer NOT EXCEEDING x - always round DOWN.
            |x| = drop the minus sign.
            sgn(x) = 1 if x > 0 , 0 if x = 0 , -1 if x < 0.
            Useful: [x] + [-x] = -1 if x is not an integer, 0 if it is.
  TRAP      [-2.7] is -3, NOT -2. On the number line you move LEFT for a
            negative decimal. Write the number line out if unsure.
```

```
  PATTERN 11 — ALGEBRA ON A FUNCTION GIVEN AS ORDERED PAIRS       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If f = {(1,2), (2,-3), (3,-1)}, find 2f, f^2, 2 + f, sqrt(f)."
  METHOD    Keep the FIRST components untouched. Apply the operation to
            the SECOND component of each pair:
                2f       -> double each image
                f^2      -> square each image
                2 + f    -> add 2 to each image
                sqrt(f)  -> square-root each image, and DELETE any pair
                            whose image is negative
  TRAP      In sqrt(f), students keep all the pairs. Negative images have
            no real square root, so those pairs disappear entirely.
```

```
  PATTERN 12 — f + g , f - g , fg , f/g WITH DOMAINS              4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two functions given (formulas or ordered pairs) and the words
            "find f + g, fg, f/g and their domains".
  METHOD    1. Write D(f) and D(g).
            2. Common domain D = D(f) INTERSECT D(g).
            3. f+g, f-g, fg all have domain D.
            4. f/g has domain D MINUS every x where g(x) = 0.
            5. For ordered pairs, only the x values in BOTH lists survive.
  TRAP      Forgetting step 4. The "remove the zeros of g" line is worth
            a mark on its own.
```

```
  PATTERN 13 — FIND fog AND gof                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find (fog)(x)", "(gof)(2)", "find fog and gof".
  METHOD    (fog)(x) = f( g(x) )   -> substitute g INTO f
            (gof)(x) = g( f(x) )   -> substitute f INTO g
            For a numerical version, work the INNER bracket first.
  TRAP      Order. The letter written FIRST acts LAST.
            Memory line: "the one nearest to x goes first."
```

```
  PATTERN 14 — SHOW THAT fog IS NOT gof                      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that fog is not equal to gof."
  METHOD    1. Compute (fog)(x) fully and simplify.
            2. Compute (gof)(x) fully and simplify.
            3. Compare. Then substitute ONE number (x = 1 is easiest) to
               produce two different values.
            4. Write the sentence "Hence fog is not equal to gof."
  TRAP      Stopping after the two expressions. Finish with the numerical
            comparison and the concluding sentence - that is where the
            last mark lives.
```

```
  PATTERN 15 — GIVEN f AND fog, FIND g                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If f(x) = 3x - 2 and (fog)(x) = 6x + 1, find g(x)."
  METHOD    1. Write (fog)(x) = f( g(x) ) with g(x) treated as one blob.
            2. Set that equal to the given expression.
            3. Solve for the blob.
  TRAP      Substituting the wrong way round. In fog, g sits INSIDE f.
```

```
  PATTERN 16 — PROVE f IS ONE-ONE (INJECTION)             part of 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that f is an injection / is one-one."
  METHOD    Three fixed lines:
            1. "Let a, b be in A with f(a) = f(b)."
            2. Write out the formula and do the algebra.
            3. "Therefore a = b, so f is one-one."
            To DISPROVE: give ONE pair, e.g. f(2) = f(-2) for f(x) = x^2.
  TRAP      Trying to PROVE one-one with examples. Examples only DISPROVE.
            Also: for a^2 = b^2 you must argue why a = -b is impossible
            (e.g. "a, b are natural numbers, so a + b > 0").
```

```
  PATTERN 17 — PROVE f IS ONTO (SURJECTION)               part of 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that f is a surjection / is onto."
  METHOD    Four fixed lines:
            1. "Let y be any element of B."
            2. Solve y = f(x) to get x in terms of y.
            3. Show that this x really lies in A (real / rational /
               natural / not equal to the excluded value).
            4. "So every y has a pre-image, hence f is onto."
            To DISPROVE: name ONE element of B with no pre-image.
  TRAP      Skipping line 3. For f : Q -> Q you must say the x you found
            is RATIONAL. For f : R\{2} -> R\{1} you must show x is not 2.
            That single sentence is a mark.
```

```
  PATTERN 18 — PROVE f IS A BIJECTION AND FIND f^-1     *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Show that f is a bijection and find f^-1."  The most likely
            7-mark question from this chapter.
  METHOD    PART 1  one-one    (Pattern 16, three lines)
            PART 2  onto       (Pattern 17, four lines)
            PART 3  "f is one-one and onto, hence f is a BIJECTION."
            PART 4  f^-1(x) = the expression from PART 2 with y renamed x.
            PART 5  Verify:  f( f^-1(x) ) = x.
  TIME      About 8 minutes.
  ALWAYS    Write the sentence "hence f is a bijection". The examiner
            looks for that exact line before awarding the inverse marks.
```

```
  PATTERN 19 — CLASSIFY A LIST AS INJECTION / SURJECTION / BOTH   7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Determine whether the following are injections, surjections
            or bijections", followed by 4 to 6 functions.
  METHOD    For EACH one, in this order:
            1. Read the arrow  f : A -> B.  Note both sets.
            2. One-one?  algebra, or one counter-example.
            3. Onto?     solve y = f(x), or name a missed value.
            4. Write the verdict in words.
            Instant verdicts to reuse:
               ax + b on R -> R    ->  bijection
               any quadratic R->R  ->  neither
               x^3 on R -> R       ->  bijection
               |x| on R -> R       ->  neither
               a^x on R -> R       ->  injection only
               a^x on R -> (0,inf) ->  bijection
               x^2 on N -> N       ->  injection only
  TRAP      The same FORMULA with a different codomain gets a different
            answer. Read the arrow every single time.
```

```
  PATTERN 20 — THEOREM: gof IS A BIJECTION                *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "If f : A -> B and g : B -> C are bijections, prove that
            gof : A -> C is a bijection."
  METHOD    ONE-ONE:  (gof)(a1) = (gof)(a2)
                      -> g(f(a1)) = g(f(a2))
                      -> f(a1) = f(a2)     [g is one-one]
                      -> a1 = a2           [f is one-one]
            ONTO   :  take c in C
                      -> g onto gives b in B with g(b) = c
                      -> f onto gives a in A with f(a) = b
                      -> (gof)(a) = g(f(a)) = g(b) = c
            CONCLUDE: gof is a bijection.
  TRAP      Using the wrong function's property in the wrong line. Peel
            OUTSIDE first (g), then INSIDE (f).
```

```
  PATTERN 21 — THEOREM: (gof)^-1 = f^-1 o g^-1            *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Prove that (gof)^-1 = f^-1 o g^-1."
  METHOD    1. State that f^-1, g^-1 and (gof)^-1 all exist because f, g
               and gof are bijections.
            2. Compute (f^-1 o g^-1) o (g o f) using associativity:
                  = f^-1 o (g^-1 o g) o f = f^-1 o I o f = I_A
            3. Compute (g o f) o (f^-1 o g^-1) = I_C the same way.
            4. Inverses are unique, so (gof)^-1 = f^-1 o g^-1.
  TRAP      Writing g^-1 o f^-1. The order REVERSES.
            Memory line: to undo "socks then shoes", remove "shoes then
            socks".
```

```
  PATTERN 22 — THEOREM: gof = I AND fog = I  =>  g = f^-1  *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "Let f : A -> B and g : B -> A satisfy gof = I_A and fog = I_B.
            Prove g = f^-1."
  METHOD    1. gof = I_A  =>  f is one-one
                 (apply g to f(a1) = f(a2))
            2. fog = I_B  =>  f is onto
                 (for b in B, f(g(b)) = b, so g(b) is a pre-image)
            3. So f is a bijection and f^-1 exists.
            4. g = g o I = g o (f o f^-1) = (g o f) o f^-1 = I o f^-1 = f^-1
  TRAP      Jumping straight to step 4 without proving f is a bijection.
            You cannot write f^-1 until you have earned the right to.
```

```
  PATTERN 23 — COUNTING FUNCTIONS, INJECTIONS, SURJECTIONS        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many functions / one-one functions / onto functions /
            bijections are there from A to B?"
  METHOD    With n(A) = m and n(B) = n :
                 relations   =  2^(mn)
                 functions   =  n^m
                 one-one     =  nPm  (and 0 if m > n)
                 onto        =  n^m - nC1 (n-1)^m + nC2 (n-2)^m - ...
                                (and 0 if m < n)
                 bijections  =  n!  if m = n , else 0
                 constants   =  n
            For n = 2 the onto count is simply 2^m - 2.
  TRAP      Writing m^n instead of n^m. The BASE is the size of the set you
            are going TO.
```

```
  PATTERN 24 — PROVE A FUNCTIONAL IDENTITY                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If f(x) = (x-1)/(x+1), show f(2x) = (3f(x)+1)/(f(x)+3)."
            "If f(x) = cos(log x), show f(x)f(y) - (1/2)[f(x/y)+f(xy)] = 0."
            "If f(x) = (1-x^2)/(1+x^2), show f(tan A) = cos 2A."
  METHOD    1. Start from the side with MORE structure (usually the RHS).
            2. Substitute the definition of f everywhere.
            3. Clear the inner fractions by multiplying top and bottom by
               the common denominator.
            4. Simplify to the other side and write "Proved".
            For log-based ones, put P = log x and Q = log y first - it
            turns the problem into ordinary trigonometry.
  TRAP      Working on both sides at once and joining them in the middle
            with an "=" sign. Work ONE side down to the other.
```

```
  PATTERN 25 — SELF-INVERSE FUNCTIONS  ( fof = x )                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find (fof)(x)" for f(x) = (ax+b)/(cx+d) , or "show f is its
            own inverse".
  METHOD    1. Check whether a + d = 0. If it does, (fof)(x) = x
               immediately and f^-1 = f.
            2. Otherwise substitute f into itself and simplify by
               multiplying top and bottom by (cx + d).
  TRAP      Confusing f^-1 (the inverse function) with 1/f (the
            reciprocal). They are completely different things.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +--------------------------------------------------------+---------+
  |  QUESTION STEM                                         | PATTERN |
  +--------------------------------------------------------+---------+
  |  "Find the domain of f(x) = sqrt(4 - x^2)"             |    5    |
  |  "Show that f is a bijection and find f^-1"            |   18    |
  |  "Find f(4), f(2.5), f(-2) for the piecewise f"        |    9    |
  |  "If f = {(1,2),(2,-3),(3,-1)}, find sqrt(f)"          |   11    |
  |  "Show that fog is not equal to gof"                   |   14    |
  |  "Prove (gof)^-1 = f^-1 o g^-1"                        |   21    |
  |  "How many one-one functions from A to B?"             |   23    |
  |  "Find the range of (x^2 - 4)/(x - 2)"                 |    7    |
  |  "If f(x) = cos(log x), show that ... = 0"             |   24    |
  |  "Determine whether f is an injection or surjection"   |   19    |
  |  "Find f + g, fg, f/g and their domains"               |   12    |
  |  "If f(x) = 3x - 2 and fog(x) = 6x + 1, find g"        |   15    |
  |  "Find (fof)(x) for f(x) = (2x+1)/(3x-2)"              |   25    |
  |  "Let gof = I_A and fog = I_B. Prove g = f^-1"         |   22    |
  |  "Find x and y if (3x-1, 2y+5) = (5, 11)"              |    1    |
  |  "Find [2.7] + [-2.7]"                                 |   10    |
  |  "Is the given relation a function? Justify."          |    4    |
  |  "If f, g are bijections prove gof is a bijection"     |   20    |
  +--------------------------------------------------------+---------+
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   TIER 1 - LEARN THESE FIRST. About 4 marks, almost certain.         |
  |                                                                      |
  |     Pattern  5   Find the domain              2 marks                |
  |     Pattern  7   Find the range               2 marks                |
  |                                                                      |
  |   Both are one-line rules. Two hours of practice fixes them for      |
  |   life. These two questions appear in Section A almost every year    |
  |   and Section A is COMPULSORY - you cannot skip them.                |
  |                                                                      |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |                                                                      |
  |   TIER 2 - THE BIG ONE. 7 marks, one page, learn it word for word.   |
  |                                                                      |
  |     Pattern 18   Prove f is a bijection and find f^-1                |
  |                                                                      |
  |   Rehearse it on exactly two functions:                              |
  |        f(x) = 4x + 7        (the easy version)                       |
  |        f(x) = (x-3)/(x-2)   (the fraction version)                   |
  |   Whatever they set, it will be one of these two shapes.             |
  |                                                                      |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |                                                                      |
  |   TIER 3 - CHEAP EXTRAS. Learn these only after Tiers 1 and 2.       |
  |                                                                      |
  |     Pattern  9   Piecewise evaluation         2 marks                |
  |     Pattern 11   2f , f^2 , 2 + f , sqrt(f)   2 marks                |
  |     Pattern 13   Find fog and gof             2 marks                |
  |     Pattern 23   Counting functions           2 marks                |
  |                                                                      |
  |   Each of these takes about 20 minutes to learn and is pure recall.  |
  |                                                                      |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |                                                                      |
  |   TIER 4 - THE THEOREMS. Only if you are aiming above 60/75.         |
  |                                                                      |
  |     Pattern 20   gof is a bijection           7 marks                |
  |     Pattern 21   (gof)^-1 = f^-1 o g^-1       7 marks                |
  |     Pattern 22   gof = I , fog = I => g=f^-1  7 marks                |
  |                                                                      |
  |   These are pure memory work. No algebra, no numbers. If you find    |
  |   algebra hard but memory easy, do these BEFORE Tier 3.              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The realistic target

```
     STEP 1   Pattern 5  (domain)              ->   2 marks
                |
     STEP 2   Pattern 7  (range)               ->   2 marks
                |
     STEP 3   Pattern 18 (bijection + f^-1)    ->   7 marks
                |
                v
              11 marks out of 75, from the FIRST chapter of the book,
              in about three days of honest work.
```

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   THE THREE SENTENCES THAT EARN THE MOST MARKS IN THIS CHAPTER       |
  |                                                                      |
  |   1.  "Let a, b be in A with f(a) = f(b) ... therefore a = b,        |
  |        so f is one-one."                                             |
  |                                                                      |
  |   2.  "Let y be in B. Solving y = f(x) gives x = ... , which lies    |
  |        in A. Hence f is onto."                                       |
  |                                                                      |
  |   3.  "f is one-one and onto, hence f is a bijection, so f^-1        |
  |        exists."                                                      |
  |                                                                      |
  |   Write them out ten times tonight. They are worth 7 marks every     |
  |   single year.                                                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```
