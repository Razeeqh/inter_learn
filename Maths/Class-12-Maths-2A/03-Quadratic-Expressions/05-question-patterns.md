# Quadratic Expressions — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — FIND THE NATURE OF THE ROOTS                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the nature of the roots of ..." / "Discuss the roots"
  METHOD    1. Write down a, b, c.
            2. Compute  D = b^2 - 4ac.
            3. Read off the answer:
                  D > 0  and a perfect square  ->  rational, distinct
                  D > 0  not a perfect square  ->  irrational, distinct
                  D = 0                        ->  real and equal
                  D < 0                        ->  complex conjugates
  TRAP      Forgetting that (-b)^2 is POSITIVE. (-7)^2 = +49, not -49.
            Also: only say "rational" if a, b, c are themselves rational.
```

```
  PATTERN 2 — FIND k SO THAT THE ROOTS ARE EQUAL                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "has equal roots" / "has a repeated root" /
            "the parabola touches the x-axis"
  METHOD    1. Set  D = 0.
            2. That is an equation in k. Solve it.
            3. Usually k^2 appears, so expect TWO answers.
  TRAP      Writing D > 0 instead of D = 0.
            Also: if the coefficient of x^2 contains k, you must state that
            it is not zero.
```

```
  PATTERN 3 — FIND k FOR REAL / DISTINCT / COMPLEX ROOTS       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "for what values of k are the roots real / imaginary?"
  METHOD    real           ->  D >= 0
            real distinct  ->  D >  0
            not real       ->  D <  0
            Solve the resulting inequation in k using the number line.
  TRAP      "Real" INCLUDES equal. Use >= , not > .
```

```
  PATTERN 4 — GIVEN ONE ROOT, WRITE THE OTHER                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "One root of ... is 2 + sqrt3 (or 3 - 5i). Find the other."
  METHOD    Just change the sign of the surd / imaginary part.
            2 + sqrt3   ->   2 - sqrt3
            3 - 5i      ->   3 + 5i
            Then use S and P if the question also asks for the equation.
  TRAP      This only works when the coefficients are RATIONAL (for surds)
            or REAL (for complex). Say that in your answer - it earns a mark.
```

```
  PATTERN 5 — SUM AND PRODUCT OF THE ROOTS                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find alpha + beta and alpha.beta"
  METHOD    1. Rewrite the equation as  ax^2 + bx + c = 0  (zero on the right).
            2. Sum = -b/a  ,  Product = c/a.
  TRAP      Using the coefficients before rearranging.
            For 3x = 2x^2 - 5 you must first write 2x^2 - 3x - 5 = 0.
```

```
  PATTERN 6 — EVALUATE A SYMMETRIC FUNCTION OF THE ROOTS      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Anything asking for alpha^2 + beta^2 , alpha^3 + beta^3 ,
            1/alpha + 1/beta , (alpha - beta)^2 , alpha/beta + beta/alpha.
  METHOD    1. Write S = -b/a and P = c/a.
            2. Convert the asked expression into S and P:
                  alpha^2 + beta^2  =  S^2 - 2P
                  (alpha - beta)^2  =  S^2 - 4P
                  alpha^3 + beta^3  =  S^3 - 3PS
                  1/alpha + 1/beta  =  S/P
                  alpha/beta + beta/alpha = (S^2 - 2P)/P
            3. Substitute and simplify.
  TRAP      alpha^3 + beta^3 = S^3 - 3PS. The trailing S is dropped by half
            the class every year.
```

```
  PATTERN 7 — FORM THE EQUATION WITH GIVEN NUMERICAL ROOTS        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Form the quadratic equation whose roots are 4 and -3."
  METHOD    1. S = sum , P = product.
            2. Write  x^2 - Sx + P = 0.
            3. Multiply by the LCM to clear fractions.
  TRAP      Writing x^2 + Sx + P = 0. The sign in front of S is MINUS.
```

```
  PATTERN 8 — FORM THE EQUATION WITH SURD OR COMPLEX ROOTS        2 marks
  ------------------------------------------------------------------------
  TRIGGER   Roots given as  p +- sqrt(q)  or  p +- iq .
  METHOD    1. S = 2p  (the surd / i part cancels).
            2. P = p^2 - q     for surds
               P = p^2 + q^2   for complex  (because i^2 = -1)
            3. Write x^2 - Sx + P = 0.
  TRAP      For complex roots the product is p^2 + q^2 , with a PLUS,
            because -(iq)^2 = +q^2.
```

```
  PATTERN 9 — FORM A NEW EQUATION FROM AN OLD ONE              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "whose roots are 1/alpha, 1/beta" / "alpha^2, beta^2" /
            "2alpha, 2beta" / "alpha + 3, beta + 3"
  METHOD    SAFE WAY (use in the board exam):
            1. Get S and P of the OLD equation.
            2. Compute the NEW sum S' and NEW product P'.
            3. Write  x^2 - S'x + P' = 0  and clear fractions.

            FAST WAY (use in EAPCET, or to check):
              reciprocals   ->  replace x by 1/x  (= reverse the coefficients)
              squares       ->  replace x by sqrt(x), then square
              k times       ->  replace x by x/k
              k more        ->  replace x by x - k
  TRAP      For "k times the roots" it is x/k , NOT kx.
```

```
  PATTERN 10 — RECIPROCAL ROOTS SHORTCUT                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "whose roots are the reciprocals of the roots of ..."
  METHOD    Reverse the coefficients:
                 a x^2 + b x + c = 0     ->     c x^2 + b x + a = 0
  TRAP      Only reverse a and c. The middle coefficient b stays put.
            Also, this fails if c = 0 (then one root is 0 and has no
            reciprocal) - say so if it happens.
```

```
  PATTERN 11 — FIND k FROM A CONDITION ON THE ROOTS            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "if the sum of the roots equals the product" /
            "if one root is double the other" /
            "if one root is the reciprocal of the other" /
            "if the roots differ by 2"
  METHOD    1. Write S = -b/a and P = c/a.
            2. Translate the sentence into an equation:
                  sum = product              ->  -b/a = c/a
                  one root double the other  ->  roots are t and 2t ,
                                                 3t = S , 2t^2 = P
                  reciprocal roots           ->  P = 1 , so a = c
                  roots differ by d          ->  S^2 - 4P = d^2
                  roots equal and opposite   ->  S = 0 , so b = 0
                  one root is zero           ->  P = 0 , so c = 0
            3. Solve for k.
  TRAP      Reading "double" as "add 2". Set the roots as t and 2t and let
            the algebra do the work.
```

```
  PATTERN 12 — COMMON ROOT OF TWO QUADRATIC EQUATIONS             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "have a common root" / "have a root in common"
  METHOD    1. If the two x^2 coefficients are equal, SUBTRACT the equations.
               (If not, multiply one of them first so they match.)
            2. The x^2 terms vanish, leaving a LINEAR equation. Solve for x.
               That x is the common root.
            3. Substitute it back into either original equation to find
               the unknown constant.
            4. VERIFY in the other equation.
  TRAP      Sometimes the subtraction factorises as (something)(x - 1) = 0,
            which gives TWO cases: either the bracket is zero (both roots
            common) or x = 1. Report BOTH answers.
```

```
  PATTERN 13 — BOTH ROOTS COMMON                               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "have both roots common" / "have the same roots" /
            "are identical"
  METHOD    Use  a1/a2 = b1/b2 = c1/c2  and solve.
  TRAP      Also appears in disguise: if one equation has COMPLEX (or
            irrational) roots and the other has rational coefficients, then
            one common root FORCES both to be common. Say this - it is the
            whole answer.
```

```
  PATTERN 14 — PROVE A COMMON-ROOT CONDITION                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... have a common root if (b - d)^2 = (a-c)(bc-ad)"
  METHOD    1. Let alpha be the common root and write both equations in alpha.
            2. SUBTRACT to get alpha in terms of the letters.
            3. Multiply the equations by suitable constants and subtract
               again to kill the constant term; this gives alpha another way.
            4. Equate the two expressions for alpha and simplify.
  TRAP      Losing a minus sign in step 2. Write every line out fully.
```

```
  PATTERN 15 — SIGN OF AN EXPRESSION FOR DIFFERENT x              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the changes in the sign of ..." /
            "For what values of x is ... positive?"
  METHOD    1. Write in standard order, note the sign of a.
            2. Compute D. If D < 0, the sign of a holds for ALL x - stop.
            3. If D >= 0, find the roots r1 < r2.
            4. Draw a number line. For a > 0 the pattern is  + - + ;
               for a < 0 it is  - + - .
            5. State all three regions in words.
  TRAP      Not stating the ZERO cases (x = r1 and x = r2). The full answer
            has three parts: positive, zero, negative.
```

```
  PATTERN 16 — PROVE AN EXPRESSION IS ALWAYS POSITIVE / NEGATIVE  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... is positive for all real x"
  METHOD    1. State the sign of a.
            2. Compute D and show D < 0.
            3. Conclude: same sign as a for every real x.
  TRAP      Only checking D. You MUST also state the sign of a - both halves
            are needed and each carries a mark.
```

```
  PATTERN 17 — FIND k SO THE EXPRESSION KEEPS ONE SIGN            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the values of k for which kx^2 + ... > 0 for all x"
  METHOD    1. Write BOTH conditions:  (i) sign of a  (ii) D < 0.
            2. Solve each as an inequation in k.
            3. Draw both solution sets on ONE number line and take the
               OVERLAP.
  TRAP      Giving the answer to only one of the two conditions.
            The final answer is the intersection, not the union.
```

```
  PATTERN 18 — SOLVE A QUADRATIC INEQUATION                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   Any of  > 0 , < 0 , >= 0 , <= 0  with an x^2 in it.
  METHOD    1. Move everything to one side.
            2. Make the coefficient of x^2 POSITIVE (flip the sign if you
               multiply by -1).
            3. Factorise / use the formula to get r1 < r2.
            4. Number line with  + - + .
            5. Pick the regions. Include the endpoints only for >= and <=.
  TRAP      Forgetting to flip the inequality when multiplying by a negative.
            Also: writing the answer as "2 < x < 3 or x > 5" style nonsense -
            check that your regions actually match the picture.
```

```
  PATTERN 19 — SOLVE A FRACTION INEQUATION                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   An inequality with x in the DENOMINATOR.
  METHOD    1. Get 0 on one side and combine into a single fraction.
            2. Mark the zeros of the NUMERATOR and of the DENOMINATOR on
               one number line.
            3. Use the same + - + alternation between consecutive points.
            4. Denominator zeros are ALWAYS excluded (open circles).
  TRAP      Cross-multiplying. You do not know the sign of the denominator,
            so you cannot legally multiply. Use the number line instead.
```

```
  PATTERN 20 — MAXIMUM OR MINIMUM VALUE                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the maximum / minimum value of ..." /
            "Find the extreme value"
  METHOD    1. Note the sign of a.
                  a > 0  ->  MINIMUM only
                  a < 0  ->  MAXIMUM only
            2. x = -b/(2a)
            3. value = -D/(4a) = (4ac - b^2)/(4a)
               (or just substitute x back in - it is a good check)
  TRAP      Claiming a maximum for an upward parabola. If a > 0 there is
            NO maximum: the expression grows without limit.
```

```
  PATTERN 21 — PROVE THE MAX / MIN FORMULA                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ax^2+bx+c has minimum (4ac-b^2)/4a at x = -b/2a"
  METHOD    1. Take a common from the first two terms.
            2. Complete the square inside the bracket.
            3. Reach   a(x + b/2a)^2 + (4ac - b^2)/4a .
            4. Argue: the square is never negative, so with a > 0 the
               smallest value happens when the square is 0.
  TRAP      Not saying WHY it is a minimum. The sentence "a square is never
            negative" is the mark-earning step.
```

```
  PATTERN 22 — RANGE OF A QUADRATIC EXPRESSION                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the range of ax^2 + bx + c"
  METHOD    1. Find the turning value  m = -D/(4a).
            2. a > 0  ->  range is  [ m , infinity )
               a < 0  ->  range is  ( -infinity , m ]
  TRAP      Writing the interval the wrong way round, or using round
            brackets at the turning value. The turning value IS attained,
            so it needs a square bracket.
```

```
  PATTERN 23 — RANGE OF A RATIONAL EXPRESSION           *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "If x is real, find the range of (a1x^2+b1x+c1)/(a2x^2+b2x+c2)"
            or "find the maximum and minimum values of" that fraction.
  METHOD    1. Show the DENOMINATOR is never zero: its D < 0. State it.
            2. Put y = the fraction and CROSS-MULTIPLY.
            3. Collect as a quadratic IN x :   A x^2 + B x + C = 0
               where A, B, C contain y.
            4. x is real, so  B^2 - 4AC >= 0.
            5. Simplify to a quadratic inequation in y and solve it on a
               number line. That solution set IS the range.
            6. Write the final answer as an interval in a box.
  TRAP      Applying the discriminant to the wrong variable. The quadratic
            is in x; the discriminant condition produces an inequality in y.
            Second trap: using > 0 instead of >= 0, which loses the
            endpoints of the range.
```

```
  PATTERN 24 — SHOW A FRACTION DOES NOT LIE BETWEEN TWO VALUES    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that ... does not lie between 5 and 9" /
            "Show that ... lies between 1/7 and 7"
  METHOD    Exactly the same 6 steps as PATTERN 23.
            The only difference is the final inequality:
                 (y - p)(y - q) >= 0   ->  y <= p  or  y >= q
                                          ("does NOT lie between")
                 (y - p)(y - q) <= 0   ->  p <= y <= q
                                          ("lies between")
  TRAP      Reading the final number line backwards. For a > 0 the
            expression is POSITIVE outside the roots and NEGATIVE between.
```

```
  PATTERN 25 — RESOLVABLE INTO LINEAR FACTORS                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find k so that ... is resolvable into linear factors" /
            "represents a pair of straight lines"
  METHOD    1. Match with  ax^2 + 2hxy + by^2 + 2gx + 2fy + c
               (remember h, g, f are HALF of the printed coefficients).
            2. Apply  abc + 2fgh - af^2 - bg^2 - ch^2 = 0.
            3. Solve for k.
            4. CHECK by actually factorising.
            For ONE variable only:  D = b^2 - 4ac must be a perfect square.
  TRAP      Forgetting the halves. If the xy term is 3xy then h = 3/2,
            not 3. This single slip destroys the whole answer.
```

```
  PATTERN 26 — PROVE THE ROOTS ARE ALWAYS REAL                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that the roots of (x-a)(x-b) = h^2 are always real"
  METHOD    1. Expand to standard form.
            2. Compute D.
            3. Rearrange D into a SUM OF SQUARES, e.g. (a-b)^2 + 4h^2.
            4. State: a sum of squares is never negative, so D >= 0.
            5. Mention when equality happens (when every square is 0).
  TRAP      Stopping at "D = something" without showing it is a sum of
            squares. The rearrangement IS the proof.
```

```
  PATTERN 27 — LOCATION OF THE ROOTS                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "both roots positive / negative / of opposite signs" /
            "both roots greater than 2" / "roots lie between -2 and 4"
  METHOD    1. Pick the condition set:
                  both positive     ->  D >= 0 , S > 0 , P > 0
                  both negative     ->  D >= 0 , S < 0 , P > 0
                  opposite signs    ->  P < 0   (nothing else needed)
                  both > k          ->  D >= 0 , a.f(k) > 0 , -b/2a > k
                  both < k          ->  D >= 0 , a.f(k) > 0 , -b/2a < k
                  k between roots   ->  a.f(k) < 0
                  roots in (k1,k2)  ->  D >= 0 , a.f(k1) > 0 , a.f(k2) > 0 ,
                                        k1 < -b/2a < k2
            2. Solve each inequality separately.
            3. Draw them all on ONE number line and take the OVERLAP.
            4. Check the answer with one sample value.
  TRAP      Giving the union instead of the intersection.
            Second trap: forgetting the D >= 0 condition entirely - without
            it the "roots" may not even exist.
```

```
  PATTERN 28 — MAX / MIN WORD PROBLEM                          4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "The sum of two numbers is 16, find the maximum product" /
            "A rectangle has perimeter 40, find the maximum area"
  METHOD    1. Name one quantity x.
            2. Write the OTHER quantity in terms of x using the given
               condition.
            3. Write the thing to be maximised as a quadratic in x.
            4. Use x = -b/(2a) and the value -D/(4a).
            5. Answer the question that was actually asked (the numbers,
               or the dimensions, AND the maximum value).
  TRAP      Giving only x and forgetting the maximum value, or vice versa.
            Read the last line of the question again before you stop.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------------+---------+
  |  QUESTION STEM                                           | PATTERN |
  +----------------------------------------------------------+---------+
  |  "If x is real, find the range of (x^2+...)/(x^2+...)"   |   23    |
  |  "does not lie between 5 and 9"                          |   24    |
  |  "Find the nature of the roots of ..."                   |    1    |
  |  "... has equal roots. Find k."                          |    2    |
  |  "Form the equation whose roots are 7 +- 2 sqrt5"        |    8    |
  |  "whose roots are the reciprocals of the roots of ..."   |   10    |
  |  "Find alpha^3 + beta^3"                                 |    6    |
  |  "... have a common root"                                |   12    |
  |  "... have both roots common"                            |   13    |
  |  "Find the changes in the sign of 4x - 5x^2 + 2"         |   15    |
  |  "Show that x^2 + 2x + 3 is positive for all real x"     |   16    |
  |  "... < 0 for every real x. Find k."                     |   17    |
  |  "Solve 2x^2 + 5x - 3 <= 0"                              |   18    |
  |  "Find the maximum value of 5 + 20x - 4x^2"              |   20    |
  |  "Find the range of x^2 - 4x + 9"                        |   22    |
  |  "Find k so that ... is resolvable into linear factors"  |   25    |
  |  "Prove the roots of (x-a)(x-b) = h^2 are always real"   |   26    |
  |  "the roots are of opposite signs"                       |   27    |
  |  "both roots lie between -2 and 4"                       |   27    |
  |  "The sum of two numbers is 16 ..."                      |   28    |
  +----------------------------------------------------------+---------+
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +------+-------------------------------------------+--------+------------+
  | ORD  |  LEARN THIS                               | MARKS  | DIFFICULTY |
  +------+-------------------------------------------+--------+------------+
  |  1   |  D = b^2 - 4ac and the 4 nature cases     |   2    |  easiest   |
  |      |  (PATTERNS 1, 2, 3, 4)                    |        |            |
  +------+-------------------------------------------+--------+------------+
  |  2   |  S = -b/a , P = c/a , x^2 - Sx + P = 0    |   2    |  easiest   |
  |      |  (PATTERNS 5, 7, 8, 10)                   |        |            |
  +------+-------------------------------------------+--------+------------+
  |  3   |  Symmetric functions in S and P           |   2    |  easy      |
  |      |  (PATTERN 6)                              |        |            |
  +------+-------------------------------------------+--------+------------+
  |  4   |  x = -b/2a , value = -D/4a                |  2-4   |  easy      |
  |      |  (PATTERNS 20, 22)                        |        |            |
  +------+-------------------------------------------+--------+------------+
  |  5   |  Number line + - + for inequations        |   4    |  medium    |
  |      |  (PATTERNS 15, 18)                        |        |            |
  +------+-------------------------------------------+--------+------------+
  |  6   |  RANGE OF A RATIONAL EXPRESSION           |   7    |  medium    |
  |      |  (PATTERNS 23, 24)  <-- do this properly  |        |            |
  +------+-------------------------------------------+--------+------------+
  |  7   |  Common root by subtraction               |   4    |  medium    |
  |      |  (PATTERNS 12, 13)                        |        |            |
  +------+-------------------------------------------+--------+------------+
  |  8   |  Location of roots, overlap on a number   |   4    |  harder    |
  |      |  line (PATTERN 27)                        |        |            |
  +------+-------------------------------------------+--------+------------+
```

**The honest maths:**

```
  Rows 1 to 4 alone   ->  about 4 to 6 marks in Section A. Nearly free.
  Add row 5           ->  a full Section B answer, 4 more marks.
  Add row 6           ->  a full Section C answer, 7 more marks.

  TOTAL from this ONE chapter, with about six hours of work:  11 to 15 marks
  out of 75.
```

**If you have only one hour left before the exam,** learn just two things:

```
   1.   D = b^2 - 4ac   and the four cases.
   2.   The 5 steps for the RANGE OF A RATIONAL EXPRESSION.

        Those two alone are worth 9 marks.
```
