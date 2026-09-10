# Theory of Equations — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — WRITE DOWN s1, s2, s3, s4                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the sum of the roots" / "the product of the roots" /
            "find AB + BC + CA".
  METHOD    Read the coefficients a, b, c, d, e straight off.
            s1 = -b/a ,  s2 = +c/a ,  s3 = -d/a ,  s4 = +e/a
            Signs ALTERNATE, starting with MINUS.
  TRAP      Forgetting to divide by the leading coefficient a.
            Also: a missing term means that coefficient is ZERO, not absent.
```

```
  PATTERN 2 — FORM THE EQUATION WITH GIVEN ROOTS                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Form the monic polynomial equation whose roots are 2, 3, -4."
  METHOD    1. Compute s1, s2, s3 from the given numbers.
            2. Write   x^3 - s1 x^2 + s2 x - s3 = 0
               (quartic:  x^4 - s1 x^3 + s2 x^2 - s3 x + s4 = 0)
            3. Substitute one root back as a check.
  TRAP      Writing + s1 instead of - s1. The signs alternate:  - + - +
```

```
  PATTERN 3 — FORM AN EQUATION FROM ONE SURD / IMAGINARY ROOT      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Form the quadratic with rational coefficients whose one root
            is 2 + sqrt(5)"  /  "... real coefficients ... 1 + i".
  METHOD    1. Write the CONJUGATE as the other root.
            2. sum and product.
            3. x^2 - (sum)x + (product) = 0
  TRAP      The constant is  p^2 - q  for  p + sqrt(q)   (MINUS)
                      but    p^2 + q^2 for  p + i q      (PLUS)
```

```
  PATTERN 4 — SUM OF SQUARES / RECIPROCALS / CUBES OF THE ROOTS  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find A^2 + B^2 + C^2" , "find 1/A + 1/B + 1/C",
            "find the sum of the cubes of the roots".
  METHOD    Never find the roots. Convert to s-language:
                 A^2+B^2+C^2   =  s1^2 - 2 s2
                 1/A+1/B+1/C   =  s2 / s3
                 A^3+B^3+C^3   =  s1^3 - 3 s1 s2 + 3 s3
                 1/AB+1/BC+1/CA=  s1 / s3
  TRAP      Dropping the 2 in s1^2 - 2s2. Half the class does this every year.
```

```
  PATTERN 5 — FIND THE MISSING ROOT OR MISSING COEFFICIENT         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If -1, 2 and A are the roots of ... find A"  /
            "If the product of the roots is 9, find a".
  METHOD    Pick the ONE relation that involves what you want:
                only the sum is known  ->  use s1
                only the product       ->  use s3 (or s4)
            Solve the one-line equation.
  TRAP      Choosing the hardest relation (s2) when s1 or s3 does it in one step.
```

```
  PATTERN 6 — ROOTS ARE IN ARITHMETIC PROGRESSION       *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The words "the roots are in AP" / "in arithmetic progression".
  METHOD    1. Let the roots be   a - d ,  a ,  a + d.
            2. SUM first:  3a = -b/a(coeff)   ->  a.
            3. PRODUCT next:  a(a^2 - d^2) = -d/a(coeff)   ->  d.
            4. Write the three roots.
            5. Substitute all three back.
  TIME      About 6 minutes.
  SHORTCUT  Middle root = -b/(3a). Use it to check step 2 instantly.
  TRAP      Using s2 in step 3. It works, but the algebra is much uglier.
            Also: d and -d give the same three roots - do not "lose" a case.
```

```
  PATTERN 7 — ROOTS ARE IN GEOMETRIC PROGRESSION        *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The words "the roots are in GP" / "in geometric progression".
  METHOD    1. Let the roots be   a/r ,  a ,  a r.
            2. PRODUCT first:  a^3 = -d/a(coeff)   ->  a.
            3. SUM next:  a/r + a + ar = -b/a(coeff)
               Multiply by r -> a quadratic in r. Solve.
            4. r and 1/r give the SAME set of roots - say so, pick one.
            5. Substitute all three back.
  SHORTCUT  Middle root = cube root of (-d/a).
  TRAP      Starting with the sum. You get one equation in TWO unknowns and
            waste five minutes. PRODUCT FIRST, always.
```

```
  PATTERN 8 — ROOTS ARE IN HARMONIC PROGRESSION         *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The words "the roots are in HP" / "in harmonic progression".
  METHOD    1. Say: "roots in HP means their reciprocals are in AP".
            2. Put x = 1/y and clear denominators
               (shortcut: this REVERSES the coefficient list).
            3. Solve the new equation by the AP method.
            4. The answers are the RECIPROCALS of the y's.
            5. Substitute back into the ORIGINAL equation.
  SHORTCUT  Middle root = -3d/c.
  TRAP      Using a-d, a, a+d directly on the original. HP terms are NOT
            equally spaced. This is the number one error in this chapter.
```

```
  PATTERN 9 — TWO ROOTS ARE EQUAL                             4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "given that two of its roots are equal" / "has a repeated root".
  METHOD    1. Let the roots be  a , a , b.
            2. s1: 2a + b = ...  -> express b in terms of a.
            3. Substitute into s2 -> a quadratic in a. Solve.
            4. TEST each candidate in s3 and REJECT the one that fails.
            5. Substitute the roots back.
  ALT       Solve f'(x) = 0 and test each answer in f(x) = 0. Faster for MCQs.
  TRAP      Not testing in s3. You will usually get TWO values of a and only
            one of them is right. Skipping the test loses 3 marks.
```

```
  PATTERN 10 — SUM OF TWO ROOTS IS ZERO                       4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "the sum of two of its roots is zero".
  METHOD    Cubic:   let the roots be  a , -a , c.
                     s1 gives c at once (the a's cancel).
                     s2 gives -a^2 (the ac terms cancel).
            Quartic: let them be a , -a , c , e.
                     s1 -> c + e ,  s3 -> -a^2 (c+e) ,  s2 -> ce.
                     Then build  t^2 - (c+e)t + ce = 0.
  TRAP      Forgetting that ALL the mixed terms cancel. Write out s2 and s3
            in full once, and watch them die.
```

```
  PATTERN 11 — ONE ROOT IS DOUBLE (or k times) ANOTHER        4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "one root is twice another" / "one root is 3 times another".
  METHOD    1. Let the roots be  a , 2a , b   (or a , ka , b).
            2. Write s1, s2, s3 in terms of a and b.
            3. Use the SIMPLEST of them to eliminate b (often s2, especially
               if a coefficient is zero).
            4. Solve, then check in the remaining relation.
  TRAP      Discarding the case a = 0 without saying why. Say: "a = 0 would
            make the product zero, but the product is -36, so a is not 0."
```

```
  PATTERN 12 — ROOTS ARE IN THE RATIO p : q                   4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "two of the roots are in the ratio 3 : 2".
  METHOD    1. Let those two roots be  3k  and  2k , third root c.
            2. s1 -> c in terms of k.
            3. Substitute into s2 -> a quadratic in k.
            4. Test each k in s3 and reject the impossible one.
  QUADRATIC If the equation is a QUADRATIC with roots in ratio p:q, quote
            the standard condition:   p q b^2 = (p + q)^2 a c
  TRAP      Getting two values of k and writing both answers. Only one
            satisfies s3. Test it.
```

```
  PATTERN 13 — ONE ROOT IS THE RECIPROCAL OF ANOTHER          4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "one root is the reciprocal of another root".
  METHOD    1. Let the roots be  a , 1/a , c.
            2. The product of all roots is just c, so
                     c  =  -d / a(coeff)     -- the odd root is FREE.
            3. Divide out (x - c) by synthetic division.
            4. Solve the remaining quadratic; its roots must multiply to 1.
  TRAP      Forgetting to verify that the two remaining roots really do
            multiply to 1. It is your built-in check.
```

```
  PATTERN 14 — PRODUCT OF TWO ROOTS IS GIVEN (quartic)  *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   "given that the product of two of its roots is 6" (quartic).
  METHOD    1. Roots A,B,C,D with AB = k given.
            2. s4 = ABCD  ->  CD = s4 / k.
            3. Let p = A+B and q = C+D.
                  s1:  p + q = -b/a
                  s3:  AB(C+D) + CD(A+B) = k q + (s4/k) p = -d/a
            4. Solve the two linear equations for p and q.
            5. CHECK with s2 = AB + CD + p q.
            6. Build  x^2 - p x + k = 0  and  x^2 - q x + (s4/k) = 0.
            7. Substitute all four roots back.
  TRAP      Mixing up which pair goes with which product when you build the
            two quadratics. AB goes with (A+B). Label them clearly.
```

```
  PATTERN 15 — TWO PAIRS OF EQUAL ROOTS (quartic)                  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "given that it has two pairs of equal roots".
  METHOD    1. Write the quartic as  ( x^2 + p x + q )^2 = 0.
            2. Expand:  x^4 + 2p x^3 + (p^2 + 2q)x^2 + 2pq x + q^2.
            3. Match coefficients. Use 2p = b to get p, then p^2+2q = c
               to get q, and CHECK against 2pq and q^2.
            4. Factorise x^2 + px + q and double every root.
  TRAP      Choosing q from q^2 = (constant) alone gives two signs. Decide
            which one using the x^2 coefficient, then verify with the x term.
```

```
  PATTERN 16 — SOLVE GIVEN ONE IMAGINARY ROOT             4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "given that 2 + i sqrt(3) is a root".
  METHOD    1. WRITE THE SENTENCE: "the coefficients are real, so the
               conjugate 2 - i sqrt(3) is also a root". (This is a mark.)
            2. Sum = 2a ,  Product = a^2 + b^2.
               Factor  =  x^2 - (sum) x + (product).
            3. Long-divide the given polynomial by that factor.
            4. Solve the quotient.
            5. Check that the total number of roots equals the degree.
  TRAP      Writing a missing power as nothing. Insert 0x^3 before dividing.
```

```
  PATTERN 17 — SOLVE GIVEN ONE SURD ROOT                  4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "given that 2 + sqrt(3) is a root".
  METHOD    Same as Pattern 16 but say "the coefficients are RATIONAL"
            and use   Product = a^2 - b   (MINUS, not plus).
  TRAP      Using a^2 + b. That single sign destroys the whole question.
```

```
  PATTERN 18 — ROOTS MULTIPLIED BY k                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "the equation whose roots are 3 times the roots of ...".
  METHOD    Substitute x -> x/k and clear denominators.
            SHORTCUT: multiply the coefficients by 1, k, k^2, k^3, ...
            reading left to right, then divide out any common factor.
  TRAP      Substituting x -> kx by mistake. Bigger roots need x/k.
```

```
  PATTERN 19 — ROOTS NEGATED / RECIPROCATED                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "whose roots are the negatives / the reciprocals of the roots of".
  METHOD    negatives    ->  x -> -x , i.e. flip the sign of the ODD-power
                             terms, then tidy the leading sign.
            reciprocals  ->  x -> 1/x and multiply by x^n , i.e. simply
                             REVERSE the coefficient list.
  TRAP      Forgetting to write zero coefficients for missing terms before
            reversing. 1, 3, -6, 2, -4 must include every slot.
```

```
  PATTERN 20 — ROOTS SQUARED                                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the equation whose roots are the squares of the roots of ...".
  METHOD    1. Put all ODD-power terms on one side, EVEN on the other.
            2. Factor x out of the odd side so it reads x (even stuff).
            3. Square both sides.
            4. Replace x^2 by y everywhere and expand.
            CHECK with:  new s1 = s1^2 - 2s2 ,  new s2 = s2^2 - 2s1s3 ,
                         new s3 = s3^2.
  TRAP      Just replacing x by sqrt(y). You get surds and no marks.
```

```
  PATTERN 21 — DIMINISH / INCREASE THE ROOTS BY k                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "whose roots are those of ... each diminished by 2".
  METHOD    Horner's method:
            1. Synthetic-divide by (x - k). Keep the remainder.
            2. Divide the quotient by (x - k) again. Keep that remainder.
            3. Repeat until only the leading coefficient survives.
            4. The remainders READ FROM THE BOTTOM UP are the new coefficients.
            For roots INCREASED by k, run everything with -k.
  CHECK     The constant term of the new equation must equal f(k).
  TRAP      Using the wrong sign of k. "Diminished by k" -> divide by (x - k).
```

```
  PATTERN 22 — REMOVE THE SECOND TERM                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   The exact words "remove the second term".
  METHOD    1. h = - a1 / ( n a0 )        [ n = DEGREE ]
            2. Diminish the roots by h using Horner's method.
            3. The x^(n-1) coefficient of the answer must come out ZERO -
               that is your proof it worked.
  TRAP      Using n = 3 on a quartic. And forgetting that h can be negative.
```

```
  PATTERN 23 — IDENTIFY A RECIPROCAL EQUATION                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Identify the class and degree" / "state one root by inspection".
  METHOD    Compare coefficients equidistant from the two ends:
                 EQUAL              ->  CLASS ONE
                 EQUAL AND OPPOSITE ->  CLASS TWO
            Then:
                 class one + odd degree   ->  x = -1 is a root
                 class two + odd degree   ->  x = +1 is a root
                 class two + even degree  ->  x = +1 and x = -1 are roots
  TRAP      Class ONE + even degree has no free root. Do not invent one.
```

```
  PATTERN 24 — SOLVE A RECIPROCAL EQUATION           *** 7 marks ***
  ------------------------------------------------------------------------
  TRIGGER   The coefficients read the same (or the same with flipped signs)
            forwards and backwards.
  METHOD    1. State the class and degree.
            2. Remove the free root(s) by synthetic division if the degree
               is odd (or if class two, even).
            3. You now have a class-one EVEN-degree equation of degree 2m.
               Say "x = 0 is not a root", then divide throughout by x^m.
            4. Group into ( x^k + 1/x^k ) brackets.
            5. Put y = x + 1/x , using   x^2 + 1/x^2 = y^2 - 2
                                          x^3 + 1/x^3 = y^3 - 3y
            6. Solve the equation in y.
            7. For each y solve  x^2 - y x + 1 = 0.
            8. Collect all n roots; they pair up with product 1.
  TIME      About 8 minutes.
  TRAP      Writing x^2 + 1/x^2 = y^2 (forgetting the -2). Everything after
            that is wrong.
```

```
  PATTERN 25 — DESCARTES' RULE OF SIGNS                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "maximum number of positive / negative real roots".
  METHOD    1. Count sign changes in f(x)  ->  positive roots (p, p-2, ...).
            2. Count sign changes in f(-x) ->  negative roots (q, q-2, ...).
            3. Imaginary roots  >=  n - p - q.
  TRAP      Counting a missing term as a sign change. Skip missing terms.
            Also: the rule gives a MAXIMUM unless the count is 0 or 1.
```

```
  PATTERN 26 — MULTIPLICITY OF A ROOT                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the multiplicity of x = 1" / "how many distinct roots".
  METHOD    Synthetic-divide by (x - root) again and again while the
            remainder stays 0. The number of successful divisions is the
            multiplicity.
  TRAP      "Number of roots" (= degree) is not "number of DISTINCT roots".
```

```
  PATTERN 27 — COMMON ROOT OF TWO EQUATIONS                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the common root of ... and ...".
  METHOD    For two quadratics: SUBTRACT them. The x^2 terms cancel and you
            are left with a linear equation. Solve, then verify in BOTH.
  TRAP      Not verifying. Subtracting can create a value that satisfies
            neither original equation.
```

```
  PATTERN 28 — THEORY / STATEMENT QUESTIONS                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the Fundamental Theorem of Algebra", "how many roots does
            a degree 5 equation have", "prove imaginary roots occur in pairs".
  METHOD    Learn these three sentences word for word:
            1. Every polynomial equation of degree n >= 1 has at least one
               complex root; hence exactly n roots counting multiplicity.
            2. If the coefficients are real and p + iq is a root, then
               p - iq is a root.
            3. If the coefficients are rational and p + sqrt(q) is a root,
               then p - sqrt(q) is a root.
  TRAP      Saying "real roots" instead of "complex roots" in statement 1.
```

```
  PATTERN 29 — PROVE A CONDITION ON THE COEFFICIENTS               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that if the roots of x^3 - px^2 + qx - r = 0 are in AP,
            then 2p^3 - 9pq + 27r = 0."
  METHOD    1. The middle root is -b/(3a) = p/3 (AP) or cube-root of r (GP).
            2. That number IS a root, so substitute it into the equation.
            3. Clear the denominators. Done.
  TRAP      Trying to eliminate d by brute force. Substituting the middle
            root is a three-line proof.
```

```
  PATTERN 30 — SOLVE COMPLETELY, NO HINT GIVEN                4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   Just "Solve the equation ..." with no condition attached.
  METHOD    1. Check whether the coefficients are a palindrome
               -> reciprocal equation, use Pattern 24.
            2. Otherwise hunt for an obvious root among
               +/- (factors of the constant) / (factors of the leading coeff):
               try 1, -1, 2, -2, 3, -3 first.
            3. Divide it out by synthetic division and solve what is left.
  TRAP      Not trying x = 1 and x = -1 first. They work far more often
            than they have any right to.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| Question stem | Pattern |
|---------------|---------|
| "Find the sum of the roots of 2x^3 - 5x^2 + ..." | 1 |
| "Form the polynomial equation whose roots are 2, 3, -4" | 2 |
| "Form the quadratic with rational coefficients, one root 2 + sqrt5" | 3 |
| "Find the sum of the squares of the roots" | 4 |
| "If -1, 2, A are the roots, find A" | 5 |
| "Solve x^3 - 3x^2 - 6x + 8 = 0, roots in AP" | 6 |
| "Solve 3x^3 - 26x^2 + 52x - 24 = 0, roots in GP" | 7 |
| "Solve 15x^3 - 23x^2 + 9x - 1 = 0, roots in HP" | 8 |
| "Solve x^3 - 3x^2 - 9x - 5 = 0, two roots equal" | 9 |
| "the sum of two of its roots is zero" | 10 |
| "one root is twice another" | 11 |
| "two roots are in the ratio 3 : 2" | 12 |
| "one root is the reciprocal of another" | 13 |
| "the product of two of its roots is 6" | 14 |
| "it has two pairs of equal roots" | 15 |
| "given that 2 + i sqrt(3) is a root" | 16 |
| "given that 2 + sqrt(3) is a root" | 17 |
| "whose roots are 3 times the roots of ..." | 18 |
| "whose roots are the reciprocals of the roots of ..." | 19 |
| "whose roots are the squares of the roots of ..." | 20 |
| "whose roots are each diminished by 2" | 21 |
| "remove the second term" | 22 |
| "identify the class of the reciprocal equation" | 23 |
| "Solve 6x^4 - 35x^3 + 62x^2 - 35x + 6 = 0" | 24 |
| "maximum number of positive real roots" | 25 |
| "find the multiplicity of the root x = 1" | 26 |
| "find the common root of the two equations" | 27 |
| "State the Fundamental Theorem of Algebra" | 28 |
| "Show that 2p^3 - 9pq + 27r = 0" | 29 |
| "Solve the equation" with no hint at all | 30 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  TIER 1  --  learn these first. 30 minutes each. Cannot fail.        |
  |                                                                      |
  |     Pattern 1   s1, s2, s3, s4                          2 marks      |
  |     Pattern 2   form the equation from given roots      2 marks      |
  |     Pattern 4   sum of squares / reciprocals            2 marks      |
  |     Pattern 19  negatives and reciprocals of the roots  2 marks      |
  |                                                                      |
  |     -> at least 2 marks in Section A, very likely 4.                 |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  TIER 2  --  the 4-mark machines. Pure mechanics, no thinking.       |
  |                                                                      |
  |     Pattern 21  diminish the roots (Horner)             4 marks      |
  |     Pattern 22  remove the second term                  4 marks      |
  |     Pattern 20  squares of the roots                    4 marks      |
  |                                                                      |
  |     -> 4 marks in Section B.                                         |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  TIER 3  --  the 7-mark question. Learn TWO of these three.          |
  |                                                                      |
  |     Pattern 6   roots in AP           <- easiest, learn this one     |
  |     Pattern 7   roots in GP           <- learn this one too          |
  |     Pattern 24  reciprocal equation   <- your backup choice          |
  |                                                                      |
  |     -> 7 marks in Section C.                                         |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  REALISTIC TOTAL FROM THIS CHAPTER:   13 to 15 marks out of 75.      |
  |                                                                      |
  |  Pass mark is 26. This one chapter gets you halfway there, and       |
  |  every single step in it is a fixed recipe.                          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The last thing to do in every question

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   SUBSTITUTE EVERY ROOT BACK INTO THE ORIGINAL EQUATION.             |
  |                                                                      |
  |   It costs two minutes. It turns "I think this is right" into        |
  |   "I know this is right", and it catches the arithmetic slip that    |
  |   would otherwise cost you five of the seven marks.                  |
  |                                                                      |
  |   If substituting is messy, check instead that                       |
  |         sum of your roots      =  -b/a                               |
  |         product of your roots  =  -d/a  (odd) or +e/a (even)         |
  |                                                                      |
  +----------------------------------------------------------------------+
```
