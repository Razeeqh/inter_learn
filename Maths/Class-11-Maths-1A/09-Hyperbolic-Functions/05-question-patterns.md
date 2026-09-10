# Hyperbolic Functions — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Marks shown are for AP Inter Maths IA (Section A = 2, Section B = 4, Section C = 7).

> **Honest framing before you start.** This chapter is **small**. Patterns 1-16
> are all 2-mark shapes and one of them appears in **most** sessions. Patterns
> 17-25 are the 4-mark shapes and they appear **fairly often**. Pattern 26 is
> revision-grade only — BIEAP does **not** set a standalone 7-mark question from
> Hyperbolic Functions.
>
> **This chapter is the cheapest 2 marks in the paper.** Master Patterns 1-3 and
> 6 first; that is 80% of what actually gets asked.

---

```
  PATTERN 1 — GIVEN sinh x , FIND cosh 2x AND sinh 2x          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If sinh x = 3, find cosh 2x and sinh 2x."
            The given value is a sinh.
  METHOD    1. cosh 2x = 1 + 2 sinh^2 x        <- the sinh form, one line
            2. cosh^2 x = 1 + sinh^2 x , take the POSITIVE root
            3. sinh 2x = 2 sinh x cosh x
            4. CHECK: cosh^2 2x - sinh^2 2x should equal 1
  TRAP      Using cosh 2x = 2 cosh^2 x - 1 when you were given sinh --
            it works, but costs an extra step and invites errors.
            Pick the form that matches the data.
```

```
  PATTERN 2 — GIVEN cosh x , FIND cosh 2x AND sinh 2x          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If cosh x = 5/2, find cosh 2x and sinh 2x."
  METHOD    1. cosh 2x = 2 cosh^2 x - 1        <- the cosh form
            2. sinh^2 x = cosh^2 x - 1 , so sinh x = +/- sqrt(cosh^2 x - 1)
            3. Write ONE LINE: "taking x > 0, sinh x = + ..."
            4. sinh 2x = 2 sinh x cosh x , then CHECK.
  TRAP      Forgetting that sinh x CAN be negative. cosh does not fix the
            sign of x. State your assumption -- examiners accept
            "taking x > 0" and it protects the mark.
```

```
  PATTERN 3 — GIVEN tanh x , FIND cosh 2x AND sinh 2x          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If tanh x = 1/2, find cosh 2x and sinh 2x."
  METHOD    Use the tanh forms directly, no square roots needed:
                cosh 2x = (1 + tanh^2 x)/(1 - tanh^2 x)
                sinh 2x = 2 tanh x /(1 - tanh^2 x)
            SHORTCUT for tanh x = p/q :
                cosh 2x = (q^2 + p^2)/(q^2 - p^2)
                sinh 2x = 2pq/(q^2 - p^2)
  TRAP      Writing 1 - tanh^2 on top and 1 + tanh^2 below (that is the
            TRIGONOMETRIC arrangement). For cosh 2x the PLUS goes on top.
            Test with tanh x = 0 : both give 1, so instead test the sign
            logic: cosh 2x must be >= 1 , so the bigger number is on top.
```

```
  PATTERN 4 — GIVEN ONE FUNCTION , FIND ALL SIX                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If cosh x = 5/3 and x > 0, find the other five."
  METHOD    1. Use cosh^2 - sinh^2 = 1 to get the missing one of the pair.
            2. tanh = sinh/cosh , then just invert for coth, sech, cosech.
            3. CHECK with 1 - tanh^2 = sech^2 .
  TRAP      Inverting the wrong pair. sech = 1/cosh (NOT 1/sinh) and
            cosech = 1/sinh . Same mapping as ordinary trig:
            sec pairs with cos, cosec pairs with sin.
```

```
  PATTERN 5 — EVALUATE AT x = log a                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find sinh(log 3)" , "Find tanh(log 2)" ,
            "Find sinh(log(2 + sqrt3))"
  METHOD    1. e^x = a and e^-x = 1/a . Write both down first.
            2. Substitute straight into the definition.
                 sinh(log a) = (a^2 - 1)/(2a)
                 cosh(log a) = (a^2 + 1)/(2a)
                 tanh(log a) = (a^2 - 1)/(a^2 + 1)
            3. CHECK cosh^2 - sinh^2 = 1 .
  TRAP      Writing e^-x = -a . It is 1/a . And when a = 2 + sqrt3 ,
            rationalise: 1/(2 + sqrt3) = 2 - sqrt3 .
```

```
  PATTERN 6 — SHOW x = log( k + sqrt(k^2 + 1) )                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If sinh x = 3, show that x = log(3 + sqrt10)."
            Also the cosh version and the tanh version.
  METHOD    Method A (fast): quote sinh^-1 k = log(k + sqrt(k^2 + 1))
                             and substitute.
            Method B (safe, full marks): from the definition,
                 2k = e^x - e^-x , put t = e^x , get t^2 - 2kt - 1 = 0 ,
                 solve, REJECT the negative root because e^x > 0 ,
                 take logs.
  TRAP      Forgetting the rejection sentence. It carries a mark.
            Also: sinh^-1 has +1 under the root, cosh^-1 has -1.
            sqrt(k^2 + 1) for sinh . Do not write sqrt(k^2 - 1) .
```

```
  PATTERN 7 — EVALUATE AN INVERSE HYPERBOLIC FUNCTION          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find sinh^-1(3/4)" , "Evaluate tanh^-1(1/2)" ,
            "Find cosh^-1(2)"
  METHOD    Quote the matching log form and substitute:
                 sinh^-1 x = log( x + sqrt(x^2 + 1) )
                 cosh^-1 x = log( x + sqrt(x^2 - 1) )     x >= 1
                 tanh^-1 x = (1/2) log( (1+x)/(1-x) )     |x| < 1
                 coth^-1 x = (1/2) log( (x+1)/(x-1) )     |x| > 1
            Simplify the surd -- exam numbers always come out clean.
  TRAP      Leaving (1/2) log 4 as the final answer when it simplifies
            to log 2 . Simplify. Also state the validity condition.
            Memorise: 3/4, 5/4, 3/5 all give log 2 ;
                      4/3, 5/3, 4/5 all give log 3 .
```

```
  PATTERN 8 — IS IT DEFINED?                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   An argument that looks "too small" or "too big":
            cosh^-1(1/2) , tanh^-1(2) , sech^-1(3) , cosh x = 0
  METHOD    Check against the domain:
                 sinh^-1   : every real number -- always defined
                 cosh^-1   : needs x >= 1
                 tanh^-1   : needs |x| < 1
                 coth^-1   : needs |x| > 1
                 sech^-1   : needs 0 < x <= 1
                 cosech^-1 : needs x =/= 0
            If it fails, answer "NOT DEFINED" and give the one-line reason.
  TRAP      Trying to compute it anyway. "Not defined" IS the full answer --
            but only with the reason attached.
```

```
  PATTERN 9 — STATE THE DOMAIN AND RANGE                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the domain and range of sech x."
            Often part (a) of a longer question.
  METHOD    Reproduce the table, brackets exact:
                 sinh   R        -> R
                 cosh   R        -> [1, inf)
                 tanh   R        -> (-1, 1)      OPEN
                 coth   R - {0}  -> (-inf,-1) U (1, inf)
                 sech   R        -> (0, 1]
                 cosech R - {0}  -> R - {0}
            Add the one-line reason (AM-GM for cosh; the e^2x form for tanh).
  TRAP      Square brackets on tanh (its ends are never reached) or round
            brackets on cosh (cosh 0 = 1 IS attained). Also: forgetting to
            remove 0 from the domain of coth and cosech.
```

```
  PATTERN 10 — PROVE cosh^2 x - sinh^2 x = 1                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that cosh^2 x - sinh^2 x = 1."
  METHOD    Fastest correct proof:
                 cosh^2 - sinh^2 = (cosh + sinh)(cosh - sinh)
                                 = (e^x)(e^-x) = e^0 = 1
            (Or expand both squares over 4 and subtract -- also full marks.)
  TRAP      Writing a PLUS. Every other formula in this chapter depends on
            this being a MINUS. Also, do not "prove" it by substituting a
            number -- one example is not a proof.
```

```
  PATTERN 11 — PROVE THE DIVIDED IDENTITIES                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove sech^2 x + tanh^2 x = 1" or
            "Prove coth^2 x - cosech^2 x = 1"
  METHOD    1. Start from cosh^2 x - sinh^2 x = 1 .
            2. For the sech version, divide EVERY term by cosh^2 x .
               For the cosech version, divide EVERY term by sinh^2 x .
            3. Say why the division is legal:
                 cosh x >= 1 so never zero ;  sinh x = 0 only at x = 0 ,
                 so the second identity needs x =/= 0 .
  TRAP      Not stating x =/= 0 for the coth/cosech version.
            Also dividing only some terms.
```

```
  PATTERN 12 — PROVE (cosh x +/- sinh x)^n = cosh nx +/- sinh nx   2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any power of (cosh x + sinh x) or (cosh x - sinh x).
  METHOD    1. cosh x + sinh x = e^x  (write the one-line proof).
            2. Raise to the n : (e^x)^n = e^(nx) .
            3. e^(nx) = cosh nx + sinh nx , applying step 1 at nx .
            Same three lines with e^-x for the minus version.
  TRAP      Trying to expand by the binomial theorem. That works but takes
            ten minutes. Use the exponential. Three lines, full marks.
```

```
  PATTERN 13 — PROVE cosh^4 x - sinh^4 x = cosh 2x             2 marks
  ------------------------------------------------------------------------
  TRIGGER   A FOURTH power difference. Also variants like
            cosh^4 - sinh^4 = cosh^2 + sinh^2 .
  METHOD    1. Factor as a^2 - b^2 with a = cosh^2 x , b = sinh^2 x .
            2. The first bracket is 1 by the key identity.
            3. The second bracket is cosh 2x by the double-angle form (1).
  TRAP      Expanding everything into exponentials. Unnecessary.
            Spot the difference of two squares.
```

```
  PATTERN 14 — ODD OR EVEN?                                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that sinh is odd and cosh is even" or
            "Which hyperbolic functions are even?"
  METHOD    1. Replace x by -x . The two exponentials SWAP PLACES.
            2. sinh(-x) = (e^-x - e^x)/2 = - sinh x       ODD
               cosh(-x) = (e^-x + e^x)/2 = + cosh x       EVEN
            3. Deduce the rest: reciprocals keep the parity, and
               tanh = odd/even = odd.
            ANSWER: EVEN are cosh and sech; the other four are ODD.
  TRAP      Saying "sech is odd because sinh is odd". sech = 1/cosh ,
            so sech is EVEN. Check which one it is built from.
```

```
  PATTERN 15 — WHY ARE THEY CALLED HYPERBOLIC?                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   A one-line theory question, or part (a) of a longer one.
  METHOD    Write exactly this:
            "Since cosh^2 t - sinh^2 t = 1 for every real t, the point
             P(cosh t, sinh t) satisfies x^2 - y^2 = 1 and so lies on the
             rectangular hyperbola x^2 - y^2 = 1 (right branch, because
             cosh t >= 1). This mirrors (cos t, sin t) lying on the circle
             x^2 + y^2 = 1, which is why cos and sin are called circular
             functions."
  TRAP      Saying "because their graphs are hyperbolas". They are NOT --
            the graph of cosh is a catenary. It is the PARAMETRIC POINT
            that lies on a hyperbola.
```

```
  PATTERN 16 — APPLY OSBORNE'S RULE                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Using Osborne's rule write the hyperbolic form of ..." ,
            or a multiple-choice "which identity is correct?"
  METHOD    1. Swap every trig function for its hyperbolic partner.
            2. Flip the sign of every term with a PRODUCT OF TWO SINES,
               visible or hidden:
                  visible: sin x sin y , sin^2 x , sin^3 x
                  hidden : tan^2 x , cot^2 x , tan x tan y , cot x cot y
            3. sin^4 = (sin^2)^2 is TWO pairs -> flips twice -> unchanged.
  TRAP      Missing the hidden pairs inside tan^2 and cot^2 . That is where
            every wrong option in an MCQ comes from.
            Also: Osborne converts IDENTITIES only -- never periodicity,
            bounds, or special values.
```

```
  PATTERN 17 — PROVE THE ADDITION FORMULA FROM DEFINITIONS     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove sinh(x+y) = sinh x cosh y + cosh x sinh y."
            Same shape for cosh(x+y).
  METHOD    1. Work on the RIGHT-hand side.
            2. Write each product as a single fraction over 4, expanding
               into e^(x+y) , e^(x-y) , e^(-x+y) , e^(-x-y) .
            3. ADD. The e^(x-y) and e^(-x+y) terms cancel.
            4. What is left is 2 e^(x+y) +/- 2 e^-(x+y) over 4 , which is
               the definition of sinh(x+y) or cosh(x+y) .
  TRAP      Sign slips in the expansion. Write all four exponential terms
            on one line before combining -- do not do it in your head.
            And remember cosh(x+y) takes a PLUS in front of sinh x sinh y.
```

```
  PATTERN 18 — PROVE tanh(x + y)                               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove tanh(x+y) = (tanh x + tanh y)/(1 + tanh x tanh y)."
  METHOD    1. Write tanh(x+y) = sinh(x+y)/cosh(x+y) .
            2. Substitute the two addition formulas (quote them).
            3. Divide EVERY term, top and bottom, by cosh x cosh y .
            4. Say the division is legal because cosh is never zero.
  TRAP      The denominator is 1 PLUS tanh x tanh y . Ordinary trig has a
            MINUS. This one sign is the entire question.
```

```
  PATTERN 19 — PROVE THE TRIPLE ANGLE FORMULA                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove sinh 3x = 3 sinh x + 4 sinh^3 x" or
            "Prove cosh 3x = 4 cosh^3 x - 3 cosh x"
  METHOD    1. Write 3x = 2x + x and use the addition formula.
            2. CHOOSE THE RIGHT FORM of cosh 2x :
                  for sinh 3x , use cosh 2x = 1 + 2 sinh^2 x
                  for cosh 3x , use cosh 2x = 2 cosh^2 x - 1
               (so that everything ends up in ONE function).
            3. Convert the leftover square with cosh^2 = 1 + sinh^2
               (or sinh^2 = cosh^2 - 1).
            4. Collect terms.
  TRAP      Picking the wrong form of cosh 2x in step 2 -- you end up with
            a mixture of sinh and cosh and cannot finish.
            Final signs: sinh 3x has PLUS 4 sinh^3 x ;
                         cosh 3x has MINUS 3 cosh x .
```

```
  PATTERN 20 — DERIVE A LOGARITHMIC FORM                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that sinh^-1 x = log(x + sqrt(x^2 + 1))" and the
            cosh^-1 and tanh^-1 versions. THE most likely 4-mark question.
  METHOD    1. Put y = f^-1(x) , so x = f(y) .
            2. Substitute the exponential definition; let t = e^y , t > 0 .
            3. Clear the fraction -> a QUADRATIC in t :
                  sinh : t^2 - 2xt - 1 = 0
                  cosh : t^2 - 2xt + 1 = 0
                  tanh : rearrange to e^2y = (1+x)/(1-x)
            4. Solve. REJECT the impossible root, with the reason:
                  sinh : x - sqrt(x^2+1) < 0 but e^y > 0
                  cosh : y >= 0 forces e^y >= 1
            5. Take logs. STATE THE CONDITION on x.
  TRAP      Omitting step 4 (the rejection) -- that is a whole mark.
            Omitting the condition (x >= 1 for cosh^-1 , |x| < 1 for
            tanh^-1) -- that is another mark.
```

```
  PATTERN 21 — cosh x = sec theta  =>  tanh^2(x/2) = tan^2(theta/2)   4 marks
  ------------------------------------------------------------------------
  TRIGGER   A hyperbolic quantity equated to a TRIGONOMETRIC one, with a
            HALF ANGLE in the conclusion.
  METHOD    1. Quote the half-angle result:
                  tanh^2(x/2) = (cosh x - 1)/(cosh x + 1)
               (from cosh x - 1 = 2 sinh^2(x/2) and cosh x + 1 = 2cosh^2(x/2))
            2. Substitute cosh x = sec theta .
            3. Multiply top and bottom by cos theta to get
                  (1 - cos theta)/(1 + cos theta) .
            4. Use 1 - cos = 2 sin^2(theta/2) , 1 + cos = 2 cos^2(theta/2) .
  TRAP      Trying to take a square root and losing a sign. Stay with the
            SQUARED version throughout -- the question is stated with
            squares for exactly this reason.
```

```
  PATTERN 22 — x = log( cot(pi/4 + theta) ) SUBSTITUTION       4 marks
  ------------------------------------------------------------------------
  TRIGGER   x defined as the log of a trig expression; you are asked for
            cosh x , sinh x or tanh x in trig form.
            Common variants: log(cot(pi/4 + theta)) , log(tan(pi/4 + theta/2)).
  METHOD    1. Set A = the bracket. Write e^x = (the expression) and
               e^-x = its reciprocal. THIS IS THE WHOLE TRICK.
            2. cosh x = (expr + 1/expr)/2 , sinh x = (expr - 1/expr)/2 .
            3. Put over a common denominator; you always get
               sin^2 + cos^2 = 1 on top (for cosh) or cos 2A (for sinh),
               with 2 sin A cos A = sin 2A underneath.
            4. Convert sin 2A / cos 2A using 2A = pi/2 + 2theta .
            5. VERIFY with cosh^2 - sinh^2 = 1 .
  TRAP      Forgetting that cot(pi/2 + t) = -tan t , which is where the
            MINUS in sinh x = -tan 2theta comes from. Also: state that the
            given range of theta makes the logarithm defined.
```

```
  PATTERN 23 — SUM OF TWO INVERSE HYPERBOLIC FUNCTIONS         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove sinh^-1(3/4) + cosh^-1(5/4) = tanh^-1(15/17)"
  METHOD    1. Convert EVERY term to a logarithm using the log forms.
            2. Add the logs on the left (log a + log b = log ab).
            3. Simplify the right-hand log the same way.
            4. Compare. They must be identical.
  TRAP      Trying to use an "addition formula for inverse hyperbolics".
            Do not. Go straight to logarithms -- it is always shorter and
            always works.
```

```
  PATTERN 24 — PROVE THE BOUNDS                                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that cosh x >= 1" , "Show that -1 < tanh x < 1" ,
            "Find the range of sech x".
  METHOD    cosh: apply AM >= GM to the positive numbers e^x and e^-x :
                  (e^x + e^-x)/2 >= sqrt(e^x . e^-x) = 1 ,
                  equality only when e^x = e^-x , i.e. x = 0 .
            tanh: multiply top and bottom by e^x to get
                  tanh x = 1 - 2/(e^2x + 1) ; since e^2x + 1 > 1 ,
                  the subtracted term lies strictly in (0, 2) .
            Then read off the ranges of sech and coth as reciprocals.
  TRAP      Claiming cosh x > 1 (strict). It EQUALS 1 at x = 0 , which is
            why the range uses a square bracket.
```

```
  PATTERN 25 — SIMPLIFY AN EXPONENTIAL-LOOKING EXPRESSION      2 marks
  ------------------------------------------------------------------------
  TRIGGER   (1 + tanh x)/(1 - tanh x) , cosh 2x - sinh 2x ,
            (cosh x + sinh x)^2 , sinh x + cosh x
  METHOD    Convert to exponentials on sight:
                  cosh x + sinh x = e^x        cosh x - sinh x = e^-x
                  (1 + tanh x)/(1 - tanh x) = e^2x
                  cosh 2x - sinh 2x = e^-2x
  TRAP      Grinding through algebra. Every one of these collapses to a
            single exponential in one step. Learn the four lines above.
```

```
  PATTERN 26 — COMPOSITE LONG ANSWER (revision-grade)          7 marks
  ------------------------------------------------------------------------
  TRIGGER   A multi-part question: "(a) define ... (b) state domains ...
            (c) prove ... (d) hence evaluate ..."
            NOTE: BIEAP does NOT set a standalone 7-mark question from this
            chapter. Practise these for fluency, not for prediction.
  METHOD    1. Answer the parts IN ORDER and label them (a), (b), (c).
            2. Definitions first -- they are the easiest marks in the item.
            3. Every "prove" part: start from the definitions or from
               cosh^2 - sinh^2 = 1 . Never from a formula you were asked
               to prove.
            4. Finish every numerical part with the identity check.
  TRAP      Spending your 7-mark slot here in the real exam. Use it on
            Functions, Vectors, Matrices or Properties of Triangles.
            Chapter 9 is a SECTION A chapter.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the question stem. Say the pattern number aloud.

| Question stem | Pattern |
|---|---|
| "If `sinh x = 5`, find `cosh 2x`." | **1** |
| "If `cosh x = 3`, find `sinh 2x`." | **2** |
| "If `tanh x = 1/3`, find `cosh 2x`." | **3** |
| "If `cosh x = 13/5`, find the other five functions." | **4** |
| "Find `tanh(log 5)`." | **5** |
| "If `sinh x = 4`, show that `x = log(4 + sqrt17)`." | **6** |
| "Evaluate `cosh^-1(5/4)`." | **7** |
| "Is `tanh^-1(3)` defined?" | **8** |
| "Write the domain and range of `cosech x`." | **9** |
| "Prove `cosh^2 x - sinh^2 x = 1`." | **10** |
| "Prove `1 - tanh^2 x = sech^2 x`." | **11** |
| "Prove `(cosh x - sinh x)^4 = cosh 4x - sinh 4x`." | **12** |
| "Prove `cosh^4 x - sinh^4 x = cosh 2x`." | **13** |
| "Show that `cosh` is an even function." | **14** |
| "Why are these called hyperbolic functions?" | **15** |
| "Write the hyperbolic analogue of `cos 2A = 1 - 2 sin^2 A`." | **16** |
| "Prove `cosh(x+y) = cosh x cosh y + sinh x sinh y`." | **17** |
| "Prove `tanh(x+y) = (tanh x + tanh y)/(1 + tanh x tanh y)`." | **18** |
| "Prove `cosh 3x = 4 cosh^3 x - 3 cosh x`." | **19** |
| "Prove `tanh^-1 x = (1/2) log((1+x)/(1-x))`." | **20** |
| "If `cosh x = sec A`, prove `tanh^2(x/2) = tan^2(A/2)`." | **21** |
| "If `x = log(cot(pi/4 + A))`, prove `cosh x = sec 2A`." | **22** |
| "Prove `sinh^-1(4/3) + cosh^-1(5/3) = 2 log 3`." | **23** |
| "Show that `cosh x >= 1` for all real `x`." | **24** |
| "Simplify `(1 + tanh x)/(1 - tanh x)`." | **25** |
| "(a) Define the six functions (b) state ranges (c) prove ..." | **26** |

**Score yourself.** Under 20 correct means go back to
[01-concepts.md](Maths/Class-11-Maths-1A/09-Hyperbolic-Functions/01-concepts.md).
Over 22 means you are ready for the paper.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +====================================================================+
  |                                                                    |
  |   TIER 1 -- DO THIS FIRST. It takes about 60 minutes and it        |
  |             secures the Section A mark that appears in most        |
  |             sessions.                                              |
  |                                                                    |
  |     * Definitions of sinh and cosh from e^x                        |
  |     * cosh x + sinh x = e^x , cosh x - sinh x = e^-x               |
  |     * cosh^2 x - sinh^2 x = 1  (and the 3-line proof)              |
  |     * PATTERNS 1, 2, 3 -- drill ten of each until automatic        |
  |     * PATTERN 6 -- "show x = log(k + sqrt(k^2+1))"                 |
  |                                                                    |
  |   RETURN: 2 marks, very reliably.                                  |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TIER 2 -- ANOTHER 60 MINUTES. This is where the 4-mark           |
  |             Section B question comes from.                         |
  |                                                                    |
  |     * The three log forms and their derivations (PATTERN 20)       |
  |     * sinh 3x and cosh 3x proofs (PATTERN 19)                      |
  |     * The addition formulas from definitions (PATTERNS 17, 18)     |
  |     * PATTERN 21 (cosh x = sec theta)                              |
  |                                                                    |
  |   RETURN: another 4 marks when Section B includes this chapter.    |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TIER 3 -- 30 MINUTES OF POLISH.                                  |
  |                                                                    |
  |     * Domain and range tables, both of them (PATTERNS 9, 8)        |
  |     * Osborne's Rule (PATTERN 16)                                  |
  |     * The quick proofs: PATTERNS 10, 11, 12, 13, 14, 15, 25        |
  |     * PATTERN 22 (the log-cot substitution)                        |
  |                                                                    |
  |   RETURN: insurance. Any of these can be the 2-mark item instead.  |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   DO NOT DO                                                        |
  |                                                                    |
  |     * Do not plan to spend a 7-mark Section C slot on this         |
  |       chapter. BIEAP does not set one. Use that slot on            |
  |       Functions, Matrices, Vectors or Properties of Triangles.     |
  |     * Do not memorise the product/sum-to-product formulas          |
  |       (section 6 of the formula sheet) until everything above      |
  |       is done. They are very rarely asked.                         |
  |                                                                    |
  +====================================================================+
```

## THE FINAL CHECK BEFORE YOU CLOSE THE BOOK

```
  Write these on a blank sheet, from memory, in under three minutes:

     1.  sinh x = (e^x - e^-x)/2       cosh x = (e^x + e^-x)/2
     2.  cosh^2 x - sinh^2 x = 1
     3.  sinh 2x = 2 sinh x cosh x
     4.  cosh 2x = 1 + 2 sinh^2 x = 2 cosh^2 x - 1
     5.  sinh 3x = 3 sinh x + 4 sinh^3 x
     6.  cosh 3x = 4 cosh^3 x - 3 cosh x
     7.  sinh^-1 x = log( x + sqrt(x^2 + 1) )
     8.  cosh^-1 x = log( x + sqrt(x^2 - 1) ) , x >= 1
     9.  tanh^-1 x = (1/2) log( (1+x)/(1-x) ) , |x| < 1

  If all nine are right, this chapter cannot hurt you.
  Two hours of work for two guaranteed marks -- and up to six.
  There is no better deal in Maths IA.
```
