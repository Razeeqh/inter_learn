# De Moivre's Theorem — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — STATE OR PROVE DE MOIVRE'S THEOREM                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State De Moivre's theorem" , "Prove by induction that
            (cos t + i sin t)^n = cos nt + i sin nt".
  METHOD    STATEMENT: for every INTEGER n, (cos t + i sin t)^n
                       = cos nt + i sin nt.
            PROOF (n positive), by induction:
            1. n = 1 : both sides are cos t + i sin t. True.
            2. Assume true for n = k.
            3. Multiply both sides by (cos t + i sin t), expand, and use
               the compound-angle formulas cos(A+B), sin(A+B).
            4. Get cos(k+1)t + i sin(k+1)t. So true for k+1.
            5. By induction, true for all positive integers.
            n = 0 : both sides equal 1.
            n NEGATIVE: put n = -m, take the reciprocal, rationalise with
               (cos mt - i sin mt); denominator becomes cos^2 + sin^2 = 1.
  TRAP      Saying "for all real n". It is only for INTEGERS. For a
            fraction it gives ONE OF the values, not the value.
```

```
  PATTERN 2 — SIMPLIFY A PRODUCT / QUOTIENT OF cis TERMS          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A long expression of brackets (cos pt +/- i sin pt) raised to
            various powers, on the top and the bottom.
  METHOD    1. Convert EVERY bracket to cis(signed angle):
                 cos pt + i sin pt -> cis( pt )
                 cos pt - i sin pt -> cis( -pt )
                 sin pt + i cos pt -> cis( pi/2 - pt )
            2. Multiply the bracket's angle by its exponent (keep the sign).
            3. ADD all the top angles. ADD all the bottom angles.
            4. Answer angle = top total - bottom total.
            5. Write the final answer as cos(A) + i sin(A).
  TRAP      Missing the minus on "- i sin". One sign flip changes the
            whole answer. Also: a NEGATIVE exponent flips the sign again.
```

```
  PATTERN 3 — POWER OF A GIVEN COMPLEX NUMBER                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find (1 + i)^16" , "(1 - i sqrt3)^3" , "(sqrt3 + i)^6".
  METHOD    1. r = sqrt(a^2 + b^2) and the PRINCIPAL amplitude t
               (quadrant rule).
            2. (r cis t)^n = r^n cis(nt).
            3. Reduce nt by multiples of 2 pi.
            4. Convert back to a + ib if the angle is standard.
  TRAP      Wrong quadrant. Also: forgetting that r^n means the whole
            modulus to the power n, e.g. (sqrt2)^16 = 2^8, not 2^16.
  FASTER    For (1 +/- i)^n use (1+i)^2 = 2i and (1-i)^2 = -2i.
```

```
  PATTERN 4 — cis(t)^n + cis(-t)^n  IDENTITIES                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that (cos t + i sin t)^n + (cos t - i sin t)^n = 2 cos nt"
            or the same with a minus sign between them.
  METHOD    1. Second bracket = cis(-t).
            2. Apply De Moivre to both: cis(nt) and cis(-nt).
            3. ADD -> imaginary parts cancel -> 2 cos nt.
               SUBTRACT -> real parts cancel -> 2i sin nt.
  TRAP      Writing the subtraction answer as "2 sin nt". It is 2i sin nt.
```

```
  PATTERN 5 — LEAST n MAKING AN EXPRESSION REAL / EQUAL TO 1      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the least positive integer n such that ... = 1" or
            "... is real" or "... is purely imaginary".
  METHOD    1. Reduce the base to cis(A) form.
            2. The nth power is cis(nA).
            3. = 1        needs nA = a multiple of 2 pi
               real       needs nA = a multiple of pi
               purely imag needs nA = pi/2 + a multiple of pi
            4. Solve for the smallest positive integer n.
  TRAP      Stopping at the first n that works for the wrong condition.
            "Real" includes NEGATIVE reals: (1+i)^4 = -4 is real.
```

```
  PATTERN 6 — EXPAND cos nt OR sin nt IN POWERS OF cos t, sin t   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove cos 3t = 4 cos^3 t - 3 cos t" , "Express sin 5t in
            terms of sin t".
  METHOD    1. Write cos nt + i sin nt = (cos t + i sin t)^n.
            2. Expand the RIGHT side by the BINOMIAL theorem.
            3. Replace i^2 = -1, i^3 = -i, i^4 = 1.
            4. Group into (real) + i(imaginary).
            5. EQUATE REAL PARTS for cos nt.
               EQUATE IMAGINARY PARTS for sin nt.
            6. If asked "in powers of cos only", put sin^2 t = 1 - cos^2 t.
               If "in powers of sin only", put cos^2 t = 1 - sin^2 t.
  TRAP      Forgetting step 6 and leaving a mixture of sin and cos.
            Also: sin nt has an all-sine form only when n is ODD.
  CHECK     Put t = 0 in a cos formula: it must give 1.
```

```
  PATTERN 7 — tan nt IN TERMS OF tan t                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express tan 3t in terms of tan t".
  METHOD    1. Get cos nt and sin nt as in Pattern 6.
            2. tan nt = (imaginary part) / (real part).
            3. Divide the top and bottom by cos^n t.
            4. Every s/c becomes tan t.
  TRAP      Dividing by cos t instead of cos^n t, leaving stray cosines.
  CHECK     tan 3t must be undefined at t = pi/6, so the denominator
            1 - 3 tan^2 t must vanish there. It does.
```

```
  PATTERN 8 — EXPRESS cos^n t OR sin^n t IN MULTIPLE ANGLES       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Express cos^4 t in terms of cosines of multiples of t" ,
            "Show that sin^5 t = ( sin 5t - 5 sin 3t + 10 sin t )/16".
  METHOD    1. Put z = cos t + i sin t.
            2. State z + 1/z = 2 cos t and z^n + 1/z^n = 2 cos nt
               (or z - 1/z = 2i sin t and z^n - 1/z^n = 2i sin nt).
            3. Expand (z + 1/z)^n or (z - 1/z)^n by the binomial theorem.
            4. PAIR the terms from the two ends and convert each pair.
            5. Divide by 2^n (and by i^n for a sine problem).
  TRAP      For sin^n t with n EVEN, i^n is real, so the answer is in
            COSINES, not sines. sin^4 t has cos 4t and cos 2t in it.
            For n ODD the middle term of the expansion has no partner
            only when n is even - count the terms carefully.
  CHECK     Put t = 0: every cos^n formula must give 1, every sin^n must
            give 0. Also, the coefficients are row n of Pascal's triangle
            (with the middle one halved when n is even).
```

```
  PATTERN 9 — HOW MANY VALUES DOES A FRACTIONAL POWER HAVE        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many values does (1 + i)^(3/5) have?" or the theory
            statement for a rational index.
  METHOD    1. Reduce p/q to LOWEST terms.
            2. The number of values is q, the DENOMINATOR.
            3. Quote: "cos(pt/q) + i sin(pt/q) is ONE OF the values."
  TRAP      Using the numerator, or forgetting to reduce (4/6 -> 2/3
            gives 3 values, not 6).
```

```
  PATTERN 10 — FIND ALL THE VALUES OF (a + ib)^(p/q)              7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find all the values of (1 + i)^(1/3)" , "Find the fourth
            roots of sqrt3 + i" , "... and represent them on the Argand
            plane".
  METHOD    1. r = sqrt(a^2 + b^2) , principal amplitude t (quadrant rule).
            2. Write a + ib = r [ cos(2k pi + t) + i sin(2k pi + t) ].
               PUT THE 2k pi IN NOW - not later.
            3. Raise to p/q:
                  r^(p/q) [ cos( p(2k pi + t)/q ) + i sin( p(2k pi + t)/q ) ]
            4. Put k = 0, 1, 2, ..., q-1 and simplify each angle.
            5. Convert to a + ib where the angle is standard.
            6. DRAW the q points: a regular q-gon of radius r^(p/q).
            7. Check by raising one value back to the power q/p.
  TRAP      (i) Forgetting 2k pi -> only one answer -> about 2/7 marks.
            (ii) Letting k run to q -> a repeat of k = 0.
            (iii) Writing r^(1/q) when the index is p/q; the modulus is
                  r^(p/q).
```

```
  PATTERN 11 — WRITE DOWN THE nth ROOTS OF UNITY                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the cube roots of unity" , "Solve z^5 = 1" ,
            "Find the fourth roots of unity".
  METHOD    1. z^n = 1 = cos 2k pi + i sin 2k pi.
            2. z = cis( 2k pi / n ) , k = 0, 1, ..., n-1.
            3. Write them as 1 , a , a^2 , ... , a^(n-1) with a = cis(2pi/n).
            4. For n = 3 and n = 4 write the surd/whole-number forms.
  TRAP      Giving n+1 roots by including k = n.
```

```
  PATTERN 12 — SUM AND PRODUCT OF THE nth ROOTS OF UNITY          2 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the sum of the nth roots of unity" , "Prove that the
            product of the nth roots of unity is (-1)^(n+1)".
  METHOD    SUM : the roots are a G.P. 1, a, ..., a^(n-1) with ratio a,
                  so the sum is (a^n - 1)/(a - 1) = (1 - 1)/(a - 1) = 0.
            PRODUCT : a^(0+1+...+(n-1)) = a^(n(n-1)/2)
                      = cis( (n-1) pi ) = (-1)^(n-1) = (-1)^(n+1).
            (Alternative for the product: for z^n - 1 = 0 the product of
             the roots is (-1)^n (constant)/(leading) = (-1)^(n+1).)
  TRAP      Saying the product is always 1. It is +1 only for ODD n.
            Also: the sum is 0 only for n >= 2 (for n = 1 the sum is 1).
```

```
  PATTERN 13 — THE ROOTS OF UNITY AS A POLYGON / A G.P.           4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the nth roots of unity are in G.P." , "Show that
            they form a regular polygon" , "Show that the cube roots of
            unity form an equilateral triangle".
  METHOD    G.P. : they are 1, a, a^2, ..., a^(n-1) - ratio a by definition.
            POLYGON : every root has modulus 1, so all lie on the UNIT
                      CIRCLE; the amplitudes are equally spaced by 2pi/n;
                      equally spaced points on a circle are the vertices
                      of a regular n-gon.
            For a specific n, you may instead compute the side lengths
            and show they are equal (for n = 3 each side is sqrt3).
  TRAP      Forgetting to say the moduli are all 1. That is the fact that
            puts the points on a CIRCLE.
```

```
  PATTERN 14 — EVALUATE AN EXPRESSION IN w (omega)                2 marks
  ------------------------------------------------------------------------
  TRIGGER   Any bracket containing w and w^2:
            (1 - w + w^2)^3 , (1 + w)(1 + w^2) , (1 - w)(1 - w^2) ...
  METHOD    1. Write 1 + w + w^2 = 0 and w^3 = 1 in the margin.
            2. Use the three rearrangements:
                  1 + w   = -w^2
                  1 + w^2 = -w
                  w + w^2 = -1
            3. Reduce every bracket to -2w , -w , -w^2 etc.
            4. Reduce any high power of w by the remainder on / 3.
  TRAP      Expanding the bracket by brute force. It always collapses to
            one term. Also: (1 + w^3) is 2, not 0.
```

```
  PATTERN 15 — HIGH POWER OF w                                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   w^2018 , w^100 , w^n + w^2n , "three consecutive powers of w".
  METHOD    1. Divide the exponent by 3 and keep the REMAINDER
               (0 -> 1 , 1 -> w , 2 -> w^2).
            2. Shortcut for the remainder: use the DIGIT SUM.
            3. Any THREE consecutive powers of w add to 0.
  TRAP      Dividing by 4 (that is the rule for powers of i, not w).
```

```
  PATTERN 16 — FRACTIONS OF THE FORM (a + bw + cw^2)/(...)        2 marks
  ------------------------------------------------------------------------
  TRIGGER   A fraction with a, b, c cycled between the numerator and
            denominator, all multiplied by 1, w, w^2.
  METHOD    1. Multiply the DENOMINATOR by w (or by w^2).
            2. Use w^3 = 1, w^4 = w to reduce the powers.
            3. If it becomes the numerator, the answer is that multiplier.
  TRAP      Rationalising with a conjugate. Far slower, and easy to slip.
  RULE OF THUMB   (a + bw + cw^2)/(c + aw + bw^2) = w^2
                  (a + bw + cw^2)/(b + cw + aw^2) = w
```

```
  PATTERN 17 — FACTORISE a^3 + b^3 + c^3 - 3abc                   4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that a^3+b^3+c^3-3abc = (a+b+c)(a+bw+cw^2)(a+bw^2+cw)".
  METHOD    1. Multiply the LAST TWO brackets first.
            2. Use w^3 = 1 and w^4 = w on every term.
            3. Collect: the ab, bc, ca terms all carry (w + w^2) = -1.
            4. Result: a^2 + b^2 + c^2 - ab - bc - ca.
            5. Multiply by (a + b + c) and quote the standard identity.
  TRAP      Trying to expand all three brackets at once. Do two first.
  RELATED   a^3 + b^3 = (a + b)(aw + bw^2)(aw^2 + bw)
            a^2 - ab + b^2 = (a + bw)(a + bw^2)
            a^2 + ab + b^2 = (a - bw)(a - bw^2)
```

```
  PATTERN 18 — FOURTH ROOTS OF UNITY                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the fourth roots of unity" , "Solve z^4 = 1" , or their
            sum / product.
  METHOD    1. z^4 - 1 = (z^2 - 1)(z^2 + 1) = 0 -> z = 1, -1, i, -i.
            2. Sum = 0 . Product = -1 ( = (-1)^5 ).
            3. They form a SQUARE on the unit circle.
  TRAP      Giving only 1 and -1 by forgetting the factor z^2 + 1.
```

```
  PATTERN 19 — nth ROOTS OF A GIVEN COMPLEX NUMBER                4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the cube roots of 8i" , "Find the fourth roots of -16" ,
            "Solve z^3 = 1 + i".
  METHOD    1. Write the number as r cis( 2k pi + t ).
            2. Roots = r^(1/n) cis( (2k pi + t)/n ) , k = 0..n-1.
            3. Same modulus for all; angles step by 2 pi / n.
            4. Convert to a + ib where possible.
            5. Check: the sum of the roots is 0 whenever the equation is
               z^n - c = 0 (no z^(n-1) term).
  FASTER    roots = ( any one root ) x ( the n nth roots of unity ).
            e.g. cube roots of 8 = 2, 2w, 2w^2.
  TRAP      Taking r^(1/n) of the wrong thing - the modulus of -16 is 16,
            not -16.
```

```
  PATTERN 20 — SOLVE z^n + 1 = 0                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   z^n = -1 , x^4 + 4 = 0 , z^7 + 1 = 0.
  METHOD    1. -1 = cis( 2k pi + pi ) = cis( (2k+1) pi ).
            2. z = cis( (2k+1) pi / n ) , k = 0..n-1 : the ODD multiples
               of pi / n.
            3. For x^n + c = 0 with c > 0, the modulus is c^(1/n).
  TRAP      Using EVEN multiples (that solves z^n = +1). Remember:
               z^n = +1 -> even multiples of pi/n
               z^n = -1 -> odd multiples of pi/n
```

```
  PATTERN 21 — SOLVE (x - 1)^n = x^n                              7 marks
  ------------------------------------------------------------------------
  TRIGGER   Exactly this equation, or "(1 + x)^n = (1 - x)^n", or "show
            that the roots lie on a line parallel to the imaginary axis".
  METHOD    1. x = 0 is not a root, so divide by x^n :
                  ( (x-1)/x )^n = 1
            2. So (x-1)/x = cis( 2k pi / n ) , k = 0..n-1.
            3. k = 0 gives -1 = 0 : IMPOSSIBLE. So k = 1..n-1 :
               there are n - 1 roots.
            4. x = 1 / ( 1 - cis A ) with A = 2k pi / n.
            5. Use 1 - cos A = 2 sin^2(A/2) and sin A = 2 sin(A/2)cos(A/2)
               to get 1 - cis A = 2 sin(A/2)[ sin(A/2) - i cos(A/2) ].
            6. Rationalise: x = 1/2 + (i/2) cot( k pi / n ).
            7. Conclude Re(x) = 1/2 for every root.
  TRAP      Keeping k = 0 and claiming n roots. There are n - 1.
```

```
  PATTERN 22 — alpha^n + beta^n FROM A QUADRATIC                  4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "If alpha, beta are the roots of x^2 - 2x + 4 = 0, show that
            alpha^n + beta^n = 2^(n+1) cos(n pi / 3)".
  METHOD    1. Solve the quadratic; the roots are conjugates p +/- iq.
            2. Put them in polar form: r cis(t) and r cis(-t).
            3. De Moivre: r^n cis(nt) and r^n cis(-nt).
            4. ADD - the imaginary parts cancel - giving 2 r^n cos(nt).
  TRAP      Writing the amplitude of the conjugate as +t. It is -t.
  KNOWN CASES
            x^2 - 2x + 4 = 0  ->  2 cis(+/- pi/3)  ->  2^(n+1) cos(n pi/3)
            x^2 + 2x + 4 = 0  ->  2 cis(+/- 2pi/3) ->  2^(n+1) cos(2n pi/3)
            x^2 - 2x + 2 = 0  ->  sqrt2 cis(+/- pi/4) -> 2^((n+2)/2) cos(n pi/4)
```

```
  PATTERN 23 — (1 + cos t + i sin t)^n + (1 + cos t - i sin t)^n  7 marks
  ------------------------------------------------------------------------
  TRIGGER   The bracket "1 + cos t" together with "i sin t".
  METHOD    1. HALF-ANGLE FACTORISE:
                 1 + cos t = 2 cos^2(t/2) ,  sin t = 2 sin(t/2) cos(t/2)
              so 1 + cos t + i sin t = 2 cos(t/2)[ cos(t/2) + i sin(t/2) ]
            2. Raise to the power n with De Moivre.
            3. Add the two results; the sines cancel.
            4. Answer: 2^(n+1) cos^n(t/2) cos(nt/2).
  TRAP      Trying to expand binomially. It never works.
  RELATED   1 - cos t + i sin t = 2 sin(t/2)[ sin(t/2) + i cos(t/2) ]
```

```
  PATTERN 24 — [ (1 + sin t + i cos t)/(1 + sin t - i cos t) ]^n  7 marks
  ------------------------------------------------------------------------
  TRIGGER   The pair "1 + sin t" and "i cos t", numerator and denominator
            being conjugates.
  METHOD    1. Substitute A = pi/2 - t , so sin t = cos A , cos t = sin A.
            2. Now it is Pattern 23's factorisation:
                 numerator   = 2 cos(A/2)[ cos(A/2) + i sin(A/2) ]
                 denominator = 2 cos(A/2)[ cos(A/2) - i sin(A/2) ]
            3. The ratio is cis(A) = cis( pi/2 - t ).
            4. Raise to the power n: cis( n(pi/2 - t) ).
            5. If n is a fraction, say "ONE OF the values", and there are
               q of them.
  TRAP      Cancelling the ratio to 1 because the brackets "look the same".
            They are conjugates, not equal.
```

```
  PATTERN 25 — (p + iq)^(1/n) + (p - iq)^(1/n)                    7 marks
  ------------------------------------------------------------------------
  TRIGGER   A conjugate pair each raised to the power 1/n and added.
  METHOD    1. p + iq = r cis t with r = sqrt(p^2 + q^2),
                                    t = tan^-1(q/p).
            2. p - iq = r cis(-t).
            3. One value of each nth root: r^(1/n) cis(t/n),
               r^(1/n) cis(-t/n).
            4. Add: 2 r^(1/n) cos(t/n).
            5. r^(1/n) = (p^2 + q^2)^(1/(2n)).
            RESULT: 2 (p^2+q^2)^(1/(2n)) cos( (1/n) tan^-1(q/p) ).
  TRAP      Writing (p^2+q^2)^(1/n) instead of (p^2+q^2)^(1/(2n)).
            The square root inside gives the extra factor of 2.
```

```
  PATTERN 26 — cos a + cos b + cos g = 0 = sin a + sin b + sin g  7 marks
  ------------------------------------------------------------------------
  TRIGGER   Those two conditions given together, then a list of things
            to prove.
  METHOD    1. Put x = cis a, y = cis b, z = cis g. Then x + y + z = 0.
            2. Also 1/x + 1/y + 1/z = 0 (it is the conjugate), so
               xy + yz + zx = 0.
            3. x + y + z = 0  =>  x^3 + y^3 + z^3 = 3xyz
               -> cos 3a + cos 3b + cos 3g = 3 cos(a+b+g)   [real parts]
               -> sin 3a + sin 3b + sin 3g = 3 sin(a+b+g)   [imag parts]
            4. x^2+y^2+z^2 = (x+y+z)^2 - 2(xy+yz+zx) = 0
               -> cos 2a + cos 2b + cos 2g = 0
               -> using cos 2A = 2cos^2 A - 1 : sum of cos^2 = 3/2
               -> sum of sin^2 = 3 - 3/2 = 3/2
            5. xy + yz + zx = 0 -> cos(a+b)+cos(b+g)+cos(g+a) = 0
  TRAP      Forgetting to justify 1/x + 1/y + 1/z = 0. It follows because
            |x| = 1 makes 1/x the conjugate of x.
```

```
  PATTERN 27 — TRIANGLE ANGLES WITH cis                           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A, B, C are the angles of a triangle and x = cis A ..."
  METHOD    1. Use A + B + C = pi.
            2. xyz = cis(A+B+C) = cis(pi) = -1.
            3. x/y + y/x = 2 cos(A - B).
            4. xy + 1/(xy) = 2 cos(A + B) = -2 cos C.
            5. (xyz)^2 = 1, so x^2y^2z^2 + 1/(x^2y^2z^2) = 2.
  TRAP      Writing cis(pi) = 1. It is -1.
```

```
  PATTERN 28 — z + 1/z AND z^n + 1/z^n IDENTITIES                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "If x = cos t + i sin t, find x^n + 1/x^n" , or an expression
            with both z and 1/z.
  METHOD    1. 1/z = cis(-t) whenever |z| = 1.
            2. z^n + 1/z^n = 2 cos nt      (PLUS -> cosine)
               z^n - 1/z^n = 2i sin nt     (MINUS -> i sine)
  TRAP      Using these when |z| is NOT 1. They need z = cis t exactly.
```

```
  PATTERN 29 — REPRESENT THE ROOTS ON THE ARGAND PLANE            1-2 marks
                                                                  (inside a 7)
  ------------------------------------------------------------------------
  TRIGGER   "... and represent them on the Argand diagram / plane".
  METHOD    1. Draw the Re and Im axes and a circle of radius r^(1/n).
            2. Mark the first root at angle t/n.
            3. Step round by 360/n degrees for each further root.
            4. Join them: a regular n-gon. Label each point with its
               k value and its angle.
  TRAP      Drawing the circle of radius r instead of r^(1/n).
            Also: unequal spacing. The spacing MUST be 360/n.
```

```
  PATTERN 30 — PRINCIPAL AMPLITUDE OF A POWER OR ROOT             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the principal amplitude / argument of (1 + i sqrt3)^5".
  METHOD    1. Find the principal amplitude t of the base.
            2. Multiply by n (or divide by n for a root).
            3. Add or subtract 2 pi until the result is in ( -pi , pi ].
  TRAP      Leaving the answer as 5 pi/3 when the principal value is
            -pi/3. Options in MCQs always include both.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| Question stem | Pattern |
|---|---|
| "Find `(1 - i sqrt3)^3`" | 3 |
| "Find all the values of `(1 + i)^(1/3)`" | **10** |
| "If `w` is a cube root of unity find `(1 - w + w^2)^3`" | 14 |
| "Prove `cos 3t = 4 cos^3 t - 3 cos t`" | 6 |
| "Express `sin^4 t` in multiple angles" | 8 |
| "Find the sum of the 7th roots of unity" | 12 |
| "Solve `x^4 + 4 = 0`" | 20 |
| "Simplify `(cos 2t - i sin 2t)^7 (cos 3t + i sin 3t)^-5 / ...`" | 2 |
| "Find `w^2018`" | 15 |
| "Prove `(1 + cos t + i sin t)^n + ... = 2^(n+1) cos^n(t/2) cos(nt/2)`" | **23** |
| "If `alpha, beta` are roots of `x^2 - 2x + 4 = 0` ..." | 22 |
| "Show `a^3 + b^3 + c^3 - 3abc = (a+b+c)(a+bw+cw^2)(a+bw^2+cw)`" | 17 |
| "Solve `(x - 1)^n = x^n`" | **21** |
| "How many values does `(1+i)^(3/5)` have?" | 9 |
| "Find the cube roots of `8i`" | 19 |
| "Show that the nth roots of unity form a regular polygon" | 13 |
| "If `cos a + cos b + cos g = 0 = sin a + sin b + sin g` ..." | **26** |
| "A, B, C are the angles of a triangle and `x = cis A` ..." | 27 |
| "Find the least n such that `((1+i)/(1-i))^n = 1`" | 5 |
| "Express `tan 3t` in terms of `tan t`" | 7 |
| "Simplify `(a + bw + cw^2)/(c + aw + bw^2)`" | 16 |
| "Show `(p+iq)^(1/n) + (p-iq)^(1/n) = ...`" | 25 |
| "Prove by induction that `(cos t + i sin t)^n = cos nt + i sin nt`" | 1 |
| "Find the principal amplitude of `(1 + i sqrt3)^5`" | 30 |
| "Find `x^6 + 1/x^6` where `x = cis t`" | 28 |
| "Show that `(cos t + i sin t)^n + (cos t - i sin t)^n = 2 cos nt`" | 4 |
| "One value of `[(1 + sin t + i cos t)/(1 + sin t - i cos t)]^n` is ..." | 24 |
| "Find the fourth roots of unity and their product" | 18 |
| "... and represent them on the Argand plane" | 29 |
| "Prove the product of the nth roots of unity is `(-1)^(n+1)`" | 12 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
   THE PAPER GIVES YOU:
      Section A   10 x 2 = 20 , answer ALL
      Section B    7 x 4 = 20 , answer any 5
      Section C    7 x 7 = 35 , answer any 5
      PASS = 26 out of 75
```

```
  +--------------------------------------------------------------------------+
  |  TIER 1 - LEARN THESE OR NOTHING ELSE           expected return: 2 marks |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   *  1 + w + w^2 = 0    and    w^3 = 1                                   |
  |   *  the three rearrangements: 1+w = -w^2 , 1+w^2 = -w , w+w^2 = -1      |
  |   *  reduce a power of w by the remainder on division by 3               |
  |   *  SUM of nth roots of unity = 0 , PRODUCT = (-1)^(n+1)                |
  |                                                                          |
  |   -> Patterns 14, 15, 12, 18. One of these is a Section A question       |
  |      in almost every session, and it takes one line.                     |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  TIER 2 - THE 7-MARK QUESTION                   expected return: 7 marks |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   Learn any TWO of these four as complete written answers:               |
  |                                                                          |
  |     A.  Find all the values of (1 + i)^(1/3)         [Pattern 10]        |
  |     B.  (1+cos t+i sin t)^n + (1+cos t-i sin t)^n    [Pattern 23]        |
  |     C.  Sum and product of the nth roots of unity    [Pattern 12/13]     |
  |     D.  Solve (x - 1)^n = x^n                        [Pattern 21]        |
  |                                                                          |
  |   Two of them means that whichever appears, you can answer it.           |
  |   Recommended pair:  A  and  B .                                         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  TIER 3 - THE EASY 4-MARKER                     expected return: 4 marks |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   *  simplify a product/quotient of cis terms        [Pattern 2]         |
  |   *  alpha^n + beta^n from a quadratic               [Pattern 22]        |
  |   *  express cos^4 t or sin^3 t in multiple angles   [Pattern 8]         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

```
   REALISTIC TOTAL FROM THIS CHAPTER

        Tier 1   ->    2 marks     (Section A, near certain)
        Tier 2   ->    7 marks     (Section C, one question)
        Tier 3   ->    4 marks     (Section B, if it appears)
                      ----
                      13 marks  out of 75  -  half of what you need to pass,
                                              from a chapter that takes two
                                              days to learn.

   Add Chapter 1 (Complex Numbers) and you are at roughly 20 marks from two
   chapters that share the same ideas.
```

```
   THE FIVE-MINUTE PRE-EXAM SCRIBBLE
   (write this in the margin the moment you get the paper)

        1 + w + w^2 = 0        w^3 = 1
        1 + w = -w^2           1 + w^2 = -w         w + w^2 = -1

        (cis t)^n = cis(nt)              cos t - i sin t = cis(-t)

        roots of r cis t :  r^(1/n) cis( (2k pi + t)/n ) , k = 0..n-1

        sum of roots of unity = 0        product = (-1)^(n+1)

        1 + cos t + i sin t = 2 cos(t/2) cis(t/2)

        1 + i = sqrt2 cis(pi/4)          (1 + i)^2 = 2i
```
