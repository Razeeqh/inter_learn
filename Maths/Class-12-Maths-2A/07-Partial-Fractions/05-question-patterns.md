# Partial Fractions — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

This chapter has only about a dozen shapes in total. That is why it is the safest
chapter in Maths IIA.

---

```
  PATTERN 1 — PROPER OR IMPROPER ?                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Is this a proper fraction?" , or ANY resolve question
            (you must do this check silently every single time).
  METHOD    1. Find the degree of the TOP.
            2. Multiply out the bottom in your head to find ITS degree.
            3. top < bottom  ->  PROPER, carry on.
               top >= bottom ->  IMPROPER, long-divide first.
  TRAP      Equal degrees is IMPROPER, not proper.
            (x-1)(x-2)(x-3) has degree 3, not 1.
```

```
  PATTERN 2 — IMPROPER: DIVIDE, THEN RESOLVE                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   Top degree is bigger than or equal to bottom degree.
            Examples:  (x^2+1)/(x^2-3x+2) ,  x^3/((x-1)(x-2))
  METHOD    1. Multiply out the denominator.
            2. Long-divide, writing missing powers as 0x^2, 0x.
            3. Write   N/D = Quotient + Remainder/D .
            4. Resolve ONLY the remainder part.
            5. Put the quotient back into the final answer.
  TRAP      Forgetting to add the quotient at the end. That is half the marks.
            Also: crooked columns because you skipped the 0x^2 placeholder.
```

```
  PATTERN 3 — FACTORISE THE DENOMINATOR FIRST                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   The bottom is written as a single polynomial, not as brackets:
            x^2 - 5x + 6 ,  x^2 - 4 ,  x^3 - 1 ,  x^3 + x^2
  METHOD    Split the middle term, or use a standard identity:
               x^2 - a^2 = (x-a)(x+a)
               x^3 - 1   = (x-1)(x^2 + x + 1)
               x^3 + x^2 = x^2 (x + 1)
            Then continue with the correct case.
  TRAP      Treating x^2 - 4 as an irreducible quadratic. It factorises!
            Always test with b^2 - 4ac before deciding.
```

```
  PATTERN 4 — CASE 1: TWO DISTINCT LINEAR FACTORS                 4 marks
  ------------------------------------------------------------------------
  TRIGGER        N(x)
             --------------      two different simple brackets
             (x - a)(x - b)
  METHOD    1. Write  A/(x-a) + B/(x-b) .
            2. Multiply both sides by (x-a)(x-b).
            3. Put x = a  ->  gives A instantly.
            4. Put x = b  ->  gives B instantly.
            5. Write the answer as a SUM OF FRACTIONS.
            6. Check with x = 0.
  TRAP      Writing "A = -10, B = 13" and stopping. You must write out the
            final decomposition to get full marks.
```

```
  PATTERN 5 — CASE 1: THREE DISTINCT LINEAR FACTORS               4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three different brackets on the bottom.
  METHOD    Same as Pattern 4 but with three substitutions:
            x = a , then x = b , then x = c . One at a time.
            Self-check: A + B + C must equal the coefficient of x^(n-1)
            in the numerator (usually 0 or the leading coefficient).
  TRAP      Trying to solve three simultaneous equations. Don't. Substitute.
```

```
  PATTERN 6 — FIND ONE COEFFICIENT ONLY (COVER-UP)                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the value of A" , "find the coefficient of 1/(x - 2) in
            the partial fractions of ..."
  METHOD    1. Cover the bracket whose constant you want.
            2. Put its root into everything else.
            3. That number is the answer. Write it. Stop.
  TRAP      Doing the whole decomposition. You are wasting 4 minutes for
            2 marks. Also: cover-up does NOT work on quadratic factors.
```

```
  PATTERN 7 — CASE 2: REPEATED LINEAR FACTOR (x - a)^2            4 marks
  ------------------------------------------------------------------------
  TRIGGER   A bracket with a power 2 on it, e.g. (x-1)^2 (x-2)
  METHOD    1. Form:  A/(x-a) + B/(x-a)^2 + C/(x-b)
            2. Multiply through.
            3. Put x = a  ->  gives B  (the TOP power one).
            4. Put x = b  ->  gives C.
            5. Compare the highest x coefficients  ->  gives A.
            6. Check with x = 0.
  TRAP      Writing only B/(x-a)^2 and omitting A/(x-a). Both terms are needed.
            Also: substitution alone never gives A. You must compare
            coefficients or use one extra x value.
```

```
  PATTERN 8 — CASE 2: WHOLE DENOMINATOR IS (x - a)^n              4 marks
  ------------------------------------------------------------------------
  TRIGGER          x^2 + 5x + 7
                 ----------------       nothing else on the bottom
                    (x - 3)^3
  METHOD    1. Put y = x - a , so x = y + a .
            2. Rewrite the NUMERATOR in terms of y and expand.
            3. Divide each term by y^n and simplify the powers.
            4. Replace y by (x - a).
  TRAP      Arithmetic slip when expanding (y + 3)^2 + 5(y + 3) + 7.
            Expand slowly; this is the only hard part.
```

```
  PATTERN 9 — CASE 3: ONE IRREDUCIBLE QUADRATIC FACTOR            4 marks
  ------------------------------------------------------------------------
  TRIGGER   A quadratic bracket with b^2 - 4ac < 0 :
            (x + 1)(x^2 + 1) ,  (x - 1)(x^2 + x + 1) ,  (x + 2)(x^2 - x + 1)
  METHOD    1. Form:  A/(x - a) + (Bx + C)/(x^2 + px + q)
            2. Multiply through.
            3. Put x = a  ->  gives A.
            4. Compare x^2 coefficients  ->  gives B.
            5. Compare constant terms    ->  gives C.
  TRAP      Putting just B on top of the quadratic. It must be Bx + C.
            The equations become unsolvable and you lose everything.
```

```
  PATTERN 10 — CASE 3: TWO DIFFERENT QUADRATIC FACTORS            4 marks
  ------------------------------------------------------------------------
  TRIGGER   (x^2 + 2)(x^2 + 3) type denominators with an ODD power on top.
  METHOD    1. Form:  (Ax + B)/(x^2 + p) + (Cx + D)/(x^2 + q)
            2. Expand fully.
            3. Write FOUR equations: x^3, x^2, x, constant.
            4. Solve them in pairs (the x^3 and x equations together,
               the x^2 and constant equations together).
  TRAP      Mixing up which equation belongs to which power. Line them up
            in a column and label each one.
```

```
  PATTERN 11 — CASE 4: REPEATED QUADRATIC FACTOR                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   (x^2 + p)^2 on the bottom.
  METHOD    1. Form:  (Ax + B)/(x^2 + p) + (Cx + D)/(x^2 + p)^2
            2. Multiply by (x^2 + p)^2 - note the second term stays as
               just Cx + D, with no bracket.
            3. Expand and compare x^3, x^2, x, constant.
  TRAP      Forgetting the first term (Ax + B)/(x^2 + p). Students often
            write only the squared term.
```

```
  PATTERN 12 — ONLY EVEN POWERS: SUBSTITUTE y = x^2            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Every power of x in the whole fraction is even:
            x^2/((x^2+1)(x^2+4)) ,  1/((x^2+1)(x^2+9))
  METHOD    1. Put y = x^2 . The problem becomes a CASE 1 problem in y.
            2. Use cover-up in y.
            3. Put y = x^2 back at the very end.
  TRAP      Using it when an ODD power of x is present. Then the substitution
            is not valid on its own.
```

```
  PATTERN 13 — WRITE THE FORM / COUNT THE CONSTANTS               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the form of the partial fractions (do not evaluate)" ,
            "How many constants are needed?"
  METHOD    Linear bracket        ->  one constant on top
            Linear to power n     ->  n terms, powers 1 to n
            Irreducible quadratic ->  Ax + B on top
            Quadratic to power n  ->  n terms, each with Ax + B on top
            Number of constants   =  DEGREE of the denominator.
  TRAP      Not checking whether the quadratic actually factorises first.
```

```
  PATTERN 14 — SUM OF THE CONSTANTS                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find A + B + C"
  METHOD    With n DISTINCT linear factors, A + B + C + ... equals the
            coefficient of x^(n-1) in the numerator.
               top degree <= n - 2   ->  the sum is 0
               top degree = n - 1    ->  the sum is the leading coefficient
  TRAP      This rule is only for DISTINCT LINEAR factors. Don't use it on
            repeated or quadratic factors.
```

```
  PATTERN 15 — BRACKETS LIKE (2x + 3) or (3x - 1)              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A linear bracket whose x coefficient is not 1.
  METHOD    Form is still  A/(2x + 3) - just one constant on top.
            The root is where the bracket is zero:  2x + 3 = 0 -> x = -3/2 .
            Substitute that fractional value.
  TRAP      Using x = -3 instead of x = -3/2. Solve the bracket properly.
            Also, when comparing x^2 coefficients remember that
            A(x+3)^2 + B(x+3)(2x+3) gives  A + 2B , not A + B.
```

```
  PATTERN 16 — INTEGRATION USING PARTIAL FRACTIONS          4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Evaluate the integral of  N(x)/D(x)  dx"  where D factorises.
            (This is a MATHS IIB question that uses this chapter.)
  METHOD    0. FIRST check: is the top the derivative of the bottom?
               If yes, the answer is log|D(x)| + c. Stop.
            1. Otherwise split into partial fractions.
            2. Integrate each piece:
                  1/(x-a)      ->  log |x - a|
                  1/(x-a)^2    ->  -1/(x - a)
                  1/(x^2+a^2)  ->  (1/a) Tan^-1 (x/a)
            3. Combine the logs and add + c.
  TRAP      Losing the + c. Also splitting when you did not need to.
```

```
  PATTERN 17 — STANDARD RESULT  1/(x^2 - a^2)                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Any fraction of the form 1/(x^2 - a^2) or 1/(x^2 - 9), etc.
  METHOD          1              1        1           1
             -----------  =    -----  [ -------  -  ------- ]
              x^2 - a^2          2a      x - a       x + a

            Integrated:   (1/2a) log | (x - a)/(x + a) |  +  c
  TRAP      Confusing it with 1/(x^2 + a^2), which does NOT split at all -
            that one is (1/a) Tan^-1 (x/a).
```

```
  PATTERN 18 — VERIFY / CHECK A GIVEN DECOMPOSITION               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... = ..." , or an MCQ with four algebraic options.
  METHOD    Put an easy number into BOTH sides. x = 0 is usually easiest;
            use x = 1 if x = 0 makes a denominator zero.
            If the two numbers agree, the decomposition is right.
  TRAP      Choosing an x that makes a bracket zero. Pick a safe value.
```

---

# ===============================================================
# SELF-TEST — can you name the pattern in 5 seconds?
# ===============================================================

| You are shown | Pattern number | What you do first |
|---------------|----------------|-------------------|
| `(3x+7)/((x-1)(x-2))` | 4 | Cover-up both brackets |
| `(x^2+1)/(x^2-3x+2)` | 2 | Degrees equal — DIVIDE |
| `(2x+3)/(x^2-5x+6)` | 3 then 4 | Factorise the bottom |
| `(x^2+1)/((x-1)^2(x-2))` | 7 | Write three terms, put x = 1 |
| `(x^2+5x+7)/(x-3)^3` | 8 | Put y = x - 3 |
| `(x+3)/((x+1)(x^2+1))` | 9 | `Bx + C` on top of the quadratic |
| `(x^3+x^2+1)/((x^2+2)(x^2+3))` | 10 | Four coefficient equations |
| `(x^3+3x-2)/(x^2+2)^2` | 11 | Two terms, both with `Ax+B` on top |
| `x^2/((x^2+1)(x^2+4))` | 12 | Put y = x^2 |
| "Find the coefficient of 1/(x-2)" | 6 | Cover-up, then STOP |
| "How many constants?" | 13 | Degree of the denominator |
| "Find A + B + C" | 14 | Coefficient of x^(n-1) on top |
| `(x+1)/((2x+3)(x-1))` | 15 | Root of 2x+3 is x = -3/2 |
| `x^3/((x-1)(x-2))` | 2 | Long division first |
| Integral of `1/(x^2-9)` | 17 | `(1/6) log` of the ratio |
| Integral of `2x/(x^2-1)` | 16 (step 0) | Top is the derivative — no split |
| `(2x^2+1)/(x^3-1)` | 3 then 9 | Factorise into (x-1)(x^2+x+1) |
| Four algebraic MCQ options | 18 | Put x = 0 into all of them |

---

# ===============================================================
# GUARANTEED-MARKS PLAN FOR THIS CHAPTER
# ===============================================================

```
  +--------------------------------------------------------------------+
  |  LEVEL 1  -  DO THIS FIRST  (gets you the 2-mark question)         |
  |                                                                    |
  |    * Learn the COVER-UP method (Pattern 6).                        |
  |    * Practise it on 15 different fractions until it is automatic.  |
  |    * Learn to count constants (Pattern 13).                        |
  |                                                                    |
  |    Time needed: about 90 minutes.       Marks secured: 2           |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  LEVEL 2  -  DO THIS NEXT  (gets you the 4-mark question)          |
  |                                                                    |
  |    * Patterns 4 and 5: distinct linear factors, 2 and 3 brackets.  |
  |    * Pattern 3: factorising x^2-5x+6, x^2-4, x^3-1.                |
  |    * Do 10 complete problems, checking each with x = 0.            |
  |                                                                    |
  |    Time needed: about 2 hours.          Marks secured: 4 more      |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  LEVEL 3  -  SAFETY NET  (in case they ask a harder version)       |
  |                                                                    |
  |    * Pattern 7 and 8: repeated linear factors.                     |
  |    * Pattern 9: one irreducible quadratic.                         |
  |    * Pattern 2: one improper fraction with long division.          |
  |                                                                    |
  |    Time needed: about 2 hours.          The chapter is now safe.   |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  LEVEL 4  -  ONLY IF TIME REMAINS                                  |
  |                                                                    |
  |    * Patterns 10, 11, 12: two quadratics, repeated quadratic,      |
  |      the y = x^2 substitution.                                     |
  |    * Pattern 16: integration by partial fractions (helps in IIB    |
  |      and in EAPCET).                                               |
  +--------------------------------------------------------------------+
```

## The three-line summary you should be able to recite

```
  1.  Improper?  ->  divide.   Then factorise the bottom.

  2.  Linear bracket -> number on top.   Quadratic bracket -> Ax + B on top.
      Power n -> write all n terms.

  3.  Find the constants by substituting the roots (cover-up), finish with
      comparing coefficients, and always check with x = 0.
```

```
  +--------------------------------------------------------------------+
  |  FINAL WORD                                                        |
  |                                                                    |
  |  Nothing in this chapter requires talent, memory of proofs, or     |
  |  clever ideas. It requires you to follow four boxes in order.      |
  |  A student who is weak at maths can score FULL marks here.         |
  |  Do not skip it. It is the cheapest 6 marks on the paper.          |
  +--------------------------------------------------------------------+
```
