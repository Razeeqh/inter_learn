# Complex Numbers — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — SIMPLIFY A POWER OF i                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find i^59" , "Evaluate i^2022" , anything of the form i^n.
  METHOD    1. Divide n by 4 and keep only the REMAINDER r.
               (only the last two digits of n matter)
            2. r = 0 -> 1 ,  r = 1 -> i ,  r = 2 -> -1 ,  r = 3 -> -i
            3. For a negative power, first use 1/i = -i.
  TRAP      Writing i^4 = -1. It is +1. The cycle has length FOUR.
```

```
  PATTERN 2 — SUM OF MANY POWERS OF i                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find i^1 + i^2 + ... + i^n" or a list of five or six powers.
  METHOD    1. Any FOUR consecutive powers of i add to 0.
            2. Divide the count of terms by 4; all complete groups vanish.
            3. Evaluate only the 1, 2 or 3 leftover terms and add them.
  TRAP      Forgetting that the sum starts at i^1, not i^0. Count the
            terms carefully before dividing by 4.
```

```
  PATTERN 3 — PRODUCT OF SQUARE ROOTS OF NEGATIVES                2 marks
  ------------------------------------------------------------------------
  TRIGGER   sqrt(-a) x sqrt(-b) anywhere in the question.
  METHOD    1. Convert EVERY square root to i form FIRST:
                 sqrt(-16) = 4i ,  sqrt(-3) = i sqrt3
            2. Then multiply normally and replace i^2 by -1.
  TRAP      Using sqrt(a) x sqrt(b) = sqrt(ab). That rule BREAKS when both
            numbers are negative. sqrt(-4) x sqrt(-9) = -6 , not +6.
```

```
  PATTERN 4 — EXPRESS IN THE FORM a + ib (DIVISION)               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express ... in the form a + ib" with a fraction, OR any
            complex number sitting in a denominator.
  METHOD    1. Multiply TOP AND BOTTOM by the CONJUGATE of the bottom.
            2. The new bottom becomes c^2 + d^2 , a plain real number.
            3. Expand the top, replace i^2 by -1, collect real and
               imaginary parts.
            4. Split the fraction:  (p + qi)/k  =  p/k + (q/k) i
  TRAP      Only changing the sign in the denominator and forgetting to
            multiply the numerator by the same thing.
            Also: leaving the answer as one fraction instead of a + ib.
```

```
  PATTERN 5 — FIND x AND y FROM AN EQUALITY                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   An "=" sign with x and y (real) on one side, numbers on the
            other. E.g.  4x + i(3x - y) = 3 - 6i .
  METHOD    1. Compare the REAL parts   -> one ordinary equation
            2. Compare the IMAGINARY parts -> a second ordinary equation
            3. Solve the two simultaneously.
  TRAP      Including the i when you compare. Im(3 - 6i) is -6, not -6i.
```

```
  PATTERN 6 — FIND Re(z) AND Im(z) OF AN EXPRESSION               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the real and imaginary parts of ..."
            Very often the trigonometric one:
            (cos t + i sin t)/(cos t - i sin t).
  METHOD    1. Rationalise with the conjugate of the bottom.
            2. For the trigonometric version, the bottom becomes
               cos^2 t + sin^2 t = 1, and the top becomes
               cos 2t + i sin 2t.
            3. Read off the two parts.
  TRAP      Quoting Im as "sin 2t x i". Im is a plain real number.
```

```
  PATTERN 7 — MULTIPLICATIVE INVERSE                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the multiplicative inverse of ..." or "Find 1/z".
  METHOD    z^-1 = (x - iy) / (x^2 + y^2)
            1. Flip the sign of the imaginary part.
            2. Divide by x^2 + y^2.
            3. Write it as a + ib.
  TRAP      Dividing by (x + y) or by sqrt(x^2 + y^2) instead of
            x^2 + y^2. The denominator is the modulus SQUARED.
```

```
  PATTERN 8 — CONJUGATE PROPERTIES                            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Anything with a bar on top:  z bar , (z1 z2) bar ,
            "show that z is real / purely imaginary".
  METHOD    Choose the right identity:
            ASKED                             USE
            -----------------------------     -------------------------
            show z is real                    z = z bar
            show z is purely imaginary        z + z bar = 0
            find Re(z)                        (z + z bar)/2
            find Im(z)                        (z - z bar)/(2i)
            simplify (z1 z2) bar              (z1 bar)(z2 bar)
            simplify z x z bar                x^2 + y^2 = |z|^2
  TRAP      Writing (z1/z2) bar = (z1 bar)(z2 bar). It is a QUOTIENT of
            the conjugates, not a product.
```

```
  PATTERN 9 — MODULUS OF A PRODUCT OR QUOTIENT                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   A modulus sign wrapped around a product, a quotient or a power.
  METHOD    Split it. Do NOT multiply anything out.
               |z1 z2|   = |z1| x |z2|
               |z1 / z2| = |z1| / |z2|
               |z^n|     = |z|^n
            Then compute each small modulus with sqrt(x^2 + y^2).
  TRAP      Expanding the product first. It wastes five minutes and
            usually produces an arithmetic slip.
```

```
  PATTERN 10 — SHOW z SATISFIES A GIVEN EQUATION                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If z = 2 - 3i, show that z^2 - 4z + 13 = 0."
  METHOD    1. Compute z^2 using (a + ib)^2 = a^2 - b^2 + 2iab.
            2. Compute the other terms separately.
            3. Add them in a column: real parts, then imaginary parts.
            4. Show both totals are 0.
  TRAP      Not showing the addition line by line. Method marks live there.
```

```
  PATTERN 11 — MODULUS AND PRINCIPAL AMPLITUDE                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the modulus and principal amplitude / argument of ..."
  METHOD    1. r = sqrt(x^2 + y^2)
            2. alpha = tan^-1 | y / x |     (ACUTE, ignore the signs)
            3. Decide the quadrant from the SIGNS of x and y.
            4. Q1: theta = alpha
               Q2: theta = pi - alpha
               Q3: theta = alpha - pi
               Q4: theta = -alpha
            5. Confirm -pi < theta <= pi.
  TRAP      Typing tan^-1(y/x) into the calculator and copying the answer.
            For -1 - i sqrt3 the calculator says pi/3, but the correct
            principal amplitude is -2pi/3. ALWAYS SKETCH THE POINT.
```

```
  PATTERN 12 — WRITE IN MODULUS-AMPLITUDE (POLAR) FORM            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express ... in modulus-amplitude form" or "in polar form".
  METHOD    1. Do Pattern 11 to get r and theta.
            2. Write  z = r ( cos theta + i sin theta ).
  TRAP      Leaving a minus inside, like 2(cos A - i sin A). Repair it
            with cos(-A) = cos A and sin(-A) = -sin A, giving
            2( cos(-A) + i sin(-A) ). Also, r must be POSITIVE.
```

```
  PATTERN 13 — ARGUMENT OF A PRODUCT OR QUOTIENT                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find Arg(z1 z2)" or "Find Arg(z1 / z2)".
  METHOD    1. arg(z1 z2)   = arg z1 + arg z2
               arg(z1 / z2) = arg z1 - arg z2
            2. Find each argument separately with the quadrant rule.
            3. If the total leaves -pi < theta <= pi , add or subtract 2pi.
  TRAP      Forgetting step 3. An answer of 13pi/12 must be reported as
            -11pi/12 when the question says PRINCIPAL.
```

```
  PATTERN 14 — SQUARE ROOT OF A COMPLEX NUMBER                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the square root of a + ib."
  METHOD    1. m = sqrt(a^2 + b^2)
            2. real part = sqrt( (m + a)/2 )
               imag part = sqrt( (m - a)/2 )
            3. Give the i-part the SAME SIGN as b.
            4. Put +/- in front.
            5. CHECK by squaring your answer.
            (Alternative: let sqrt(a+ib) = x + iy, square, compare parts.)
  TRAP      Omitting the +/- . A square root of a complex number always
            has TWO values.
```

```
  PATTERN 15 — POWERS OF (1 + i) AND LEAST POSITIVE n             2 marks
  ------------------------------------------------------------------------
  TRIGGER   (1 + i)^n , (1 - i)^n , or "find the least positive integer n
            such that ((1+i)/(1-i))^n = 1".
  METHOD    1. Use the memorised results:
                 (1+i)^2 = 2i      (1-i)^2 = -2i
                 (1+i)/(1-i) = i   (1-i)/(1+i) = -i
            2. Reduce the power to a power of i or of 2i.
            3. Then apply the remainder-of-4 rule.
  TRAP      Expanding (1+i)^8 with the binomial theorem. Squaring twice
            is 20 seconds; the binomial is five minutes and a lost mark.
```

```
  PATTERN 16 — PROVE AN EXPRESSION IS REAL / PURELY IMAGINARY     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that (z-1)/(z+1) is purely imaginary if |z| = 1."
  METHOD    1. Purely imaginary means  w + w bar = 0.
               Real means  w = w bar.
            2. Write down w bar by conjugating every letter.
            3. Use the given condition. If |z| = 1 , replace z bar by 1/z.
            4. Simplify and show w bar = -w  (or w bar = w).
  TRAP      Substituting z = x + iy and grinding. It works but takes three
            times as long. Use z bar = 1/z whenever |z| = 1.
```

```
  PATTERN 17 — TRIGONOMETRIC SUBSTITUTION PROOF                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   x + iy = 1/(1 + cos theta + i sin theta) , or any expression
            with cos theta and sin theta inside a complex fraction.
  METHOD    1. Convert with the half-angle identities:
                 1 + cos t = 2 cos^2(t/2)
                 sin t     = 2 sin(t/2) cos(t/2)
            2. Factor out 2 cos(t/2).
            3. Rationalise using cos^2 + sin^2 = 1.
            4. Compare real parts and imaginary parts to finish.
  TRAP      Trying to rationalise before using the half-angle identities.
            You get a mess. ALWAYS factorise the denominator first.
```

```
  PATTERN 18 — (x - iy)^(1/3) = a - ib TYPE                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   A cube root (or square root) equated to a + ib, then asked to
            prove an identity such as x/a + y/b = 4(a^2 - b^2).
  METHOD    1. CUBE both sides to remove the fractional power.
            2. Expand (a + ib)^3 = a^3 - 3ab^2 + i(3a^2 b - b^3).
            3. Compare real and imaginary parts to get x and y.
            4. Form x/a and y/b separately, then add.
  TRAP      Sign errors in the expansion. Remember i^2 = -1 AND i^3 = -i,
            so the (ib)^3 term comes back with a PLUS in front of i b^3
            when the bracket is (a - ib).
```

```
  PATTERN 19 — LOCUS FROM |z - z1| = r                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   A single modulus equal to a number:  |z - 3 + i| = 4.
  METHOD    1. Rewrite in the exact form  | z - (z1) | = r .
            2. State: CIRCLE with centre z1 and radius r.
            3. Put z = x + iy , square both sides, expand.
            4. Present the final x-y equation AND name the curve.
  TRAP      Getting the centre sign wrong. |z - 3 + i| = |z - (3 - i)| ,
            so the centre is (3, -1), NOT (3, 1) and NOT (-3, 1).
```

```
  PATTERN 20 — LOCUS FROM |z - z1| = |z - z2|                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   TWO moduli set equal to each other.
  METHOD    1. State: PERPENDICULAR BISECTOR of the segment joining
               z1 and z2. It is always a STRAIGHT LINE.
            2. Put z = x + iy and square both sides.
            3. The x^2 and y^2 terms cancel, leaving a linear equation.
            4. Optional check: the midpoint of z1 z2 must satisfy it.
  TRAP      Forgetting to square. Also forgetting that x^2 and y^2 cancel -
            if they do not, you have made an expansion error.
```

```
  PATTERN 21 — LOCUS FROM amp( ... ) = pi/2 , OR Re / Im = k      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If the amplitude of (z-2)/(z-6i) is pi/2 ..."
            "If the real part of (z+1)/(z+i) is 1 ..."
  METHOD    1. amplitude pi/2  ->  the number is PURELY IMAGINARY
                               ->  set the REAL part to 0.
               amplitude 0 or pi -> the number is REAL
                               ->  set the IMAGINARY part to 0.
            2. Put z = x + iy.
            3. Multiply top and bottom by the conjugate of the bottom.
            4. Take the required part of the NUMERATOR only (the bottom
               is real and positive, so it cannot change the condition).
            5. Set it equal to the given value and tidy up.
            6. Name the curve; give the centre and radius if it is a circle.
  TRAP      Rationalising and then using the whole fraction. Once the
            denominator is real you only need the numerator's real or
            imaginary part.
```

```
  PATTERN 22 — SHAPE FORMED BY GIVEN POINTS                   4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that 2+i, 4+3i, 2+5i, 3i form a square" ,
            "... form an equilateral triangle" , "... are collinear".
  METHOD    1. Convert every complex number to a point (x, y).
            2. Use |z1 - z2| = distance between the points.
            3. Then:
                 EQUILATERAL TRIANGLE  -> all three sides equal
                 SQUARE                -> 4 equal sides AND equal diagonals
                 RHOMBUS               -> 4 equal sides, diagonals UNEQUAL
                 RECTANGLE             -> opposite sides equal, diagonals equal
                 COLLINEAR             -> longest distance = sum of the
                                          other two
            4. State the conclusion in words.
  TRAP      Proving only that the four sides are equal and calling it a
            square. That is a RHOMBUS. You MUST also check the diagonals.
```

```
  PATTERN 23 — PROVE A MODULUS IDENTITY                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove |z1 + z2|^2 + |z1 - z2|^2 = 2(|z1|^2 + |z2|^2)" or any
            statement mixing moduli and conjugates.
  METHOD    1. Replace every |w|^2 by  w x w bar . This is the master move.
            2. Expand carefully using (z1 + z2) bar = z1 bar + z2 bar.
            3. Collect. The cross terms usually cancel or combine into
               2 Re(z1 z2 bar).
  TRAP      Trying to square a modulus by "squaring the inside".
            |z1 + z2|^2 is NOT |z1|^2 + |z2|^2.
```

```
  PATTERN 24 — POLAR FORM OF A PRODUCT / QUOTIENT                 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express both in modulus-amplitude form and hence find the
            modulus and amplitude of their product and quotient."
  METHOD    1. Do Pattern 11 twice, once for each number. Show the
               quadrant reasoning both times.
            2. PRODUCT : multiply the moduli , ADD the amplitudes.
               QUOTIENT: divide the moduli   , SUBTRACT the amplitudes.
            3. Bring each amplitude back into -pi < theta <= pi by adding
               or subtracting 2pi.
            4. Write both answers in full polar form.
            5. If time allows, verify the quotient by direct division.
  TRAP      Reporting an amplitude outside the principal range. Half the
            marks in this question are for the range correction.
```

```
  PATTERN 25 — MAXIMUM / MINIMUM OF |z|          (competitive exams)
  ------------------------------------------------------------------------
  TRIGGER   "If |z - 3 - 4i| = 2, find the greatest value of |z|."
  METHOD    1. Identify the circle: centre z1 , radius r.
            2. d = distance of the centre from the ORIGIN = |z1|.
            3. max |z| = d + r        min |z| = d - r
  TRAP      Adding the radius to the wrong thing. Always compute the
            distance of the CENTRE from the origin first.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +--------------------------------------------------------+---------+
  |  QUESTION STEM                                         | PATTERN |
  +--------------------------------------------------------+---------+
  |  "Find i^59"                                           |    1    |
  |  "Express (2+5i)/(-4-6i) in the form a + ib"           |    4    |
  |  "Find the multiplicative inverse of 7 + 24i"          |    7    |
  |  "Find the modulus and principal amplitude of -1-i"    |   11    |
  |  "Express -1 + i in modulus-amplitude form"            |   12    |
  |  "Find the square root of -8 - 6i"                     |   14    |
  |  "If 4x + i(3x - y) = 3 - 6i, find x and y"            |    5    |
  |  "If |z - 3 + i| = 4, determine the locus"             |   19    |
  |  "If |z + ai| = |z - ai|, find the locus"              |   20    |
  |  "If the amplitude of (z-2)/(z-6i) is pi/2 ..."        |   21    |
  |  "If the real part of (z+1)/(z+i) is 1 ..."            |   21    |
  |  "Show that 2+i, 4+3i, 2+5i, 3i form a square"         |   22    |
  |  "If x + iy = 1/(1 + cos t + i sin t), show 4x^2=1"    |   17    |
  |  "If (x - iy)^(1/3) = a - ib, show x/a + y/b = ..."    |   18    |
  |  "Show (z-1)/(z+1) is purely imaginary if |z| = 1"     |   16    |
  |  "Prove |z1+z2|^2 + |z1-z2|^2 = 2(|z1|^2+|z2|^2)"      |   23    |
  |  "Find Arg(z1 z2) and Arg(z1/z2)"                      |   13    |
  |  "Find the least positive n with ((1+i)/(1-i))^n = 1"  |   15    |
  |  "Find |(1+i)(2+i)/(3+i)|"                             |    9    |
  |  "If z = 2 - 3i, show z^2 - 4z + 13 = 0"               |   10    |
  |  "Simplify sqrt(-16) x sqrt(-4)"                       |    3    |
  |  "Find i^1 + i^2 + ... + i^102"                        |    2    |
  |  "If |z - 3 - 4i| = 2, find the maximum of |z|"        |   25    |
  +--------------------------------------------------------+---------+
```

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 1 - LEARN THESE FIRST. THEY ARE ALMOST CERTAIN.            |
  |           Patterns 1 , 4 , 7 , 11                                |
  |           (power of i , a + ib form , inverse , modulus & amp)   |
  |                                                                  |
  |           -> secures Q1 and Q2 of Section A  =  4 MARKS          |
  |           -> about 2 hours of practice                           |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 2 - LEARN THESE SECOND. THEY OPEN SECTION B.               |
  |           Patterns 14 , 19 , 20 , 21                             |
  |           (square root , and the three locus shapes)             |
  |                                                                  |
  |           -> secures Q11 of Section B  =  4 MARKS                |
  |           -> about 2 hours of practice                           |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 3 - LEARN THESE IF YOU HAVE TIME. THEY ARE BACKUPS.        |
  |           Patterns 16 , 17 , 18 , 22 , 24                        |
  |                                                                  |
  |           -> gives you a CHOICE in Section B and Section C       |
  |           -> also makes Chapter 2 (De Moivre) much easier        |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |  TIER 4 - EAPCET ONLY.                                           |
  |           Patterns 15 , 25 , and the SPEED RULES table in        |
  |           04-pyq-competitive.md                                  |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
  THE MINIMUM VIABLE PLAN  (if you have one evening and nothing else)

     1.  Remainder-of-4 rule for i^n                    15 minutes
     2.  Divide by the conjugate, 10 practice sums      45 minutes
     3.  z^-1 = (x - iy)/(x^2 + y^2), 5 sums            15 minutes
     4.  Quadrant rule + the four standard points       45 minutes
             1 + i sqrt3 , -1 + i , -1 - i sqrt3 , 1 - i

     TOTAL 2 hours  ->  4 marks in Section A, essentially guaranteed.
```

```
  +-----------------------------------------------------------------+
  |  Section A is COMPULSORY - all 10 questions, no choice.         |
  |  Q1 and Q2 come from this chapter and Chapter 2 almost every    |
  |  session. Leaving them blank is the single most expensive       |
  |  mistake a weak student can make in Maths IIA.                  |
  +-----------------------------------------------------------------+
```
