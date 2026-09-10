# Hyperbola — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Nearly every pattern below is powered by the same short list:

```
  x^2/a^2 - y^2/b^2 = 1                 b^2 = a^2 ( e^2 - 1 )
  ae = sqrt( a^2 + b^2 )                e = sqrt( 1 + b^2/a^2 )   >  1

  Centre (0,0)  Vertices (±a,0)  Foci (±ae,0)  Directrices x = ±a/e
  Transverse axis 2a   Conjugate axis 2b   LR = 2b^2/a
  ASYMPTOTES y = ±(b/a)x   angle = 2 tan^-1(b/a) = 2 sec^-1(e)

  P(theta) = ( a sec theta , b tan theta )   Auxiliary circle x^2+y^2 = a^2
  SP = e x1 - a ,  S'P = e x1 + a ,  | S'P - SP | = 2a

  S   =  x^2/a^2 - y^2/b^2 - 1
  S11 =  x1^2/a^2 - y1^2/b^2 - 1
  T   =  x x1/a^2 - y y1/b^2 - 1

  T = 0        tangent at a point ON / chord of contact from OUTSIDE / polar
  T = S11      chord with a given MIDPOINT
  S S11 = T^2  pair of tangents

  tangent  y = mx ± sqrt( a^2 m^2 - b^2 )   contact ( -a^2 m/c , -b^2/c )
  normal   a^2 x/x1 + b^2 y/y1 = a^2 + b^2
           a x cos th + b y cot th = a^2 + b^2
  director circle  x^2 + y^2 = a^2 - b^2   ( needs a > b )
  conjugate: 1/e1^2 + 1/e2^2 = 1      rectangular: a = b , e = sqrt2 , xy = c^2
```

---

```
  PATTERN 1 — READ OFF e / FOCI / DIRECTRICES / LATUS RECTUM        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the eccentricity / foci / directrices / latus rectum of ..."
            and the equation is already a clean second-degree form with no
            x or y terms.
  METHOD    1. DIVIDE the whole equation so the right-hand side is exactly 1.
            2. a^2 = the denominator under the term with the PLUS sign.
               b^2 = the denominator under the term with the MINUS sign.
            3. The transverse axis is the axis of the POSITIVE variable.
            4. ae = sqrt( a^2 + b^2 ) , then e = ae / a .
            5. Foci ( ±ae , 0 ) ; directrices x = ±a/e ; LR = 2b^2/a .
  TRAP      Choosing a^2 as the BIGGER denominator. That is an ellipse habit.
            Using sqrt( a^2 - b^2 ) for ae — the single most common slip.
            Giving only ONE focus. There are always two.
            Sanity check: e must be GREATER than 1, and a/e < a < ae.
```

```
  PATTERN 2 — DECIDE THE ORIENTATION                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the foci / vertices / transverse axis of ..." where the
            plus sign might be on y^2 .
  METHOD    1. Bring to  X^2/A - Y^2/B = 1 .
            2. If the x-term is positive -> branches open LEFT and RIGHT,
               everything ( foci, vertices, directrices ) is on the x-axis.
               If the y-term is positive -> branches open UP and DOWN,
               everything is on the y-axis.
            3. a^2 = the positive denominator. b^2 = the other one.
  TRAP      16y^2 - 9x^2 = 144 becomes y^2/9 - x^2/16 = 1 , so a = 3 and
            b = 4 : b IS BIGGER, and that is completely normal.
            Do NOT "fix" it by swapping. The sign decides, not the size.
```

```
  PATTERN 3 — ECCENTRICITY FROM A STATED CONDITION                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If the latus rectum is half the transverse axis ...",
            "if the conjugate axis equals the transverse axis ...",
            "if the angle between the asymptotes is 60 degrees ..."
  METHOD    1. Translate every phrase into symbols:
                 transverse axis 2a     conjugate axis 2b
                 LR 2b^2/a              foci distance 2ae
                 directrices distance 2a/e
            2. Form the equation, cancel, and force b^2/a^2 to appear.
            3. Use  e^2 = 1 + b^2/a^2 .
  TRAP      Confusing 2a with a (axis versus SEMI-axis). Read the word
            "semi" carefully. And 2ae is NOT 2a/e.
  FOUR TO MEMORISE
            LR = transverse axis         ->  e = sqrt 2
            LR = half transverse axis    ->  e = sqrt6 / 2
            angle between asymptotes 2A  ->  e = sec A
            foci gap = 2 x directrix gap ->  e = sqrt 2
```

```
  PATTERN 4 — EQUATION FROM FOCI / VERTICES / e                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the hyperbola with foci (±c,0) and
            eccentricity e" / "with vertices (0,±a) and foci (0,±c)"
  METHOD    1. Note WHICH AXIS the given points are on — that is the
               TRANSVERSE axis.
            2. Extract a and ae:   vertices give a ; foci give ae ; e = ae/a .
            3. b^2 = ( ae )^2 - a^2 .          <-- MINUS, this way round
            4. Write x^2/a^2 - y^2/b^2 = 1 (or the y-version).
  TRAP      Writing b^2 = a^2 - ( ae )^2 , which comes out negative.
            For a hyperbola the focus is FURTHER out than the vertex, so
            ( ae )^2 is the bigger one.
            Finish with the check e > 1.
```

```
  PATTERN 5 — EQUATION FROM LATUS RECTUM + FOCI (or + e)            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "foci (±5,0) and latus rectum 9/2" , "e = 3/2 and LR = 8" ...
  METHOD    1. Write down the two facts as two equations in a and b:
                 ae = ( given )        2b^2/a = ( given )
            2. Replace b^2 by ( ae )^2 - a^2 .
            3. You get a QUADRATIC in a. Solve it.
            4. Reject any negative root for a. Then find b^2 and e.
  TRAP      Forgetting to reject the negative root. And forgetting the
            factor 2 in 2b^2/a.
            Always finish by substituting back: does your answer really
            give that latus rectum?
```

```
  PATTERN 6 — EQUATION FROM FOCUS + DIRECTRIX + e                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "focus ( 2 , 1 ) , directrix 2x + 3y = 1 , e = 2"
  METHOD    1. Write  SP^2 = e^2 * PM^2 :
                 (x-x0)^2 + (y-y0)^2 = e^2 ( lx+my+n )^2 / ( l^2 + m^2 )
            2. Multiply out by ( l^2 + m^2 ) .
            3. Expand BOTH sides carefully, remembering the cross term
               2 l m x y from the square of the directrix.
            4. Collect everything on one side.
            5. CHECK with h^2 - ab > 0 that it really is a hyperbola.
  TRAP      Dropping the xy term. Forgetting to divide by l^2 + m^2 .
            Using e instead of e^2 on the right.
```

```
  PATTERN 7 — EQUATION FROM ASYMPTOTES + A POINT                    2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "asymptotes 3x ± 5y = 0 and passes through ( 1 , -1 )" ,
            "asymptotes x + 2y + 3 = 0 and 3x + 4y + 5 = 0 through ..."
  METHOD    1. MULTIPLY the two asymptote equations together. Call it A.
            2. The hyperbola is  A = k  ( it differs from its asymptotes
               only by a constant ).
            3. Substitute the given point to find k.
  TRAP      Getting the SIGN of k wrong, which flips the hyperbola into its
            conjugate. Substitute the point back into your final answer.
            If the asymptotes are given as a combined 2nd-degree equation,
            you do NOT need to factorise — just add a constant.
```

```
  PATTERN 8 — LOCUS FROM "DIFFERENCE OF DISTANCES"                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the difference of whose distances from ( 5 , 0 ) and ( -5 , 0 )
            is 8" , "|S'P - SP| = 6"
  METHOD    1. The two fixed points are the FOCI. Their midpoint is the CENTRE
               and the line joining them is the TRANSVERSE axis.
            2. distance between them = 2ae  ->  find ae .
            3. the given constant difference = 2a  ->  find a .
            4. b^2 = ( ae )^2 - a^2 . Write the equation about the centre.
  TRAP      Using SUM instead of DIFFERENCE ( that would be an ellipse ).
            Forgetting to shift the equation when the centre is not the
            origin.
            Check e = ae/a > 1 . If you get e < 1 you have swapped the two.
```

```
  PATTERN 9 — FOCAL DISTANCES                                       2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the focal distances of the point ( 8 , ... ) on ..." ,
            "Show that the difference of the focal distances is constant"
  METHOD    1. Get a , b , ae , e .
            2. SP = e x1 - a  and  S'P = e x1 + a   ( right branch ) .
            3. Their DIFFERENCE is 2a — quote it as | S'P - SP | = 2a .
            4. If asked for the point too, substitute x1 into the equation
               to find y1 .
  TRAP      Using the ELLIPSE forms a - e x1 and a + e x1 .
            Forgetting the absolute value on the left branch.
            Verify once with the distance formula — it takes 20 seconds.
```

```
  PATTERN 10 — POSITION OF A POINT                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the position of ( 2 , 3 ) with respect to ..."
  METHOD    1. Write S = x^2/a^2 - y^2/b^2 - 1 .
            2. Substitute the point to get S11 .
            3. S11 > 0  INSIDE a branch ( the focus side )
               S11 = 0  ON the curve
               S11 < 0  OUTSIDE ( the region containing the centre )
  TRAP      Using the ELLIPSE convention, which is the other way round.
            Sanity-check with the centre ( 0 , 0 ) : S11 = -1 < 0 , and the
            centre is obviously not inside a branch.
            Also: divide first so the RHS is 1, otherwise S is wrong.
```

```
  PATTERN 11 — COMPLETE THE SQUARE AND LIST EVERY ELEMENT           7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the centre, eccentricity, foci, directrices, lengths of
            the axes, latus rectum and asymptotes of
            9x^2 - 16y^2 - 36x - 32y - 124 = 0"
            ( i.e. an equation WITH x and y terms but NO xy term )
  METHOD    1. Group the x-terms and the y-terms.
            2. Factor out the coefficient of x^2 , and the coefficient of
               y^2 INCLUDING ITS MINUS SIGN.
            3. Complete each square.
            4. Move constants right ; divide so the RHS is 1.
            5. Read h , k , a^2 ( under the POSITIVE bracket ) , b^2 .
            6. ae = sqrt( a^2 + b^2 ) , e = ae / a .
            7. List: centre ( h,k ) , vertices ( h±a , k ) , foci ( h±ae , k ),
               directrices x = h ± a/e , axes 2a and 2b , LR = 2b^2/a ,
               asymptotes y - k = ±( b/a )( x - h ) .
  TRAP      When you factor out a NEGATIVE number, the signs inside flip:
            -16y^2 - 32y = -16 ( y^2 + 2y ) . Expand back to check.
            Forgetting to add h and k to EVERY answer.
            Forgetting the asymptotes — they are usually 1 of the 7 marks.
  THIS IS THE MOST-ASKED LONG ANSWER IN THE CHAPTER.
```

```
  PATTERN 12 — DERIVE THE STANDARD EQUATION                         7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define a hyperbola and derive its equation in standard form"
  METHOD    1. State the definition: SP = e PM with e > 1.
            2. Draw the figure: directrix, Z, A, C, A', S.
            3. Take AA' = 2a with C the midpoint as origin.
            4. Put A ( a,0 ) and A' ( -a,0 ) into SP = e PM to get
                 c - a = e ( a - d )  and  c + a = e ( a + d ) ;
               add and subtract to get  S ( ae , 0 )  and  x = a/e .
            5. For P ( x,y ) : ( x - ae )^2 + y^2 = e^2 ( x - a/e )^2 .
            6. Expand ; the -2aex cancels ; get x^2(1-e^2) + y^2 = a^2(1-e^2).
            7. Divide, then put b^2 = a^2( e^2 - 1 ) because 1 - e^2 < 0 .
  TRAP      Writing b^2 = a^2( 1 - e^2 ) at the last step, which is negative.
            Skipping the figure ( it is worth a mark ).
            Forgetting to say e > 1 in the definition.
```

```
  PATTERN 13 — PROVE THE DIFFERENCE OF FOCAL DISTANCES IS 2a        7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the difference of the focal distances of any point
            on a hyperbola is constant"
  METHOD    1. Take P ( x1 , y1 ) on the right branch.
            2. Name both foci and BOTH directrices.
            3. Apply SP = e PM to each focus-directrix pair:
                 SP = e ( x1 - a/e ) = e x1 - a
                 S'P = e ( x1 + a/e ) = e x1 + a
            4. Subtract: S'P - SP = 2a , independent of the point.
            5. State that 2a is the length of the transverse axis.
  TRAP      Pairing the wrong focus with the wrong directrix.
            Forgetting the "on the left branch it is SP - S'P" remark.
            If the question forbids the directrix shortcut, use the
            distance formula and y1^2 = b^2( x1^2/a^2 - 1 ) ; you will get
            SP^2 = ( e x1 - a )^2 .
```

```
  PATTERN 14 — ASYMPTOTES OF A STANDARD HYPERBOLA + ANGLE           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the asymptotes of x^2/9 - y^2/4 = 1" ,
            "find the angle between the asymptotes"
  METHOD    1. Replace the 1 on the right by 0.
            2. Factorise the difference of two squares.
            3. Angle between them = 2 tan^-1 ( b/a ) = 2 sec^-1 ( e ) .
  TRAP      Remembering "y = ±(b/a)x" but applying it to the y-transverse
            form, where it is y = ±(a/b)x. The RHS -> 0 recipe never fails,
            so use that instead of memorising which letter is on top.
            For a shifted hyperbola, use y - k = ±(b/a)(x - h).
```

```
  PATTERN 15 — ASYMPTOTES OF A GENERAL HYPERBOLA                    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the asymptotes of 3x^2 - 5xy - 2y^2 + 5x + 11y - 8 = 0"
            ( there IS an xy term )
  METHOD    1. The asymptote pair is S + lambda = 0 : only the constant
               changes.
            2. A pair of straight lines needs Delta = 0 . Put c + lambda
               into  abc + 2fgh - af^2 - bg^2 - ch^2 = 0  and solve.
            3. Substitute lambda back and FACTORISE into two lines.
            4. The CONJUGATE hyperbola is S + 2 lambda = 0 .
            5. The CENTRE is where the two asymptotes meet, i.e. solve
               ax + hy + g = 0 and hx + by + f = 0 .
            6. The angle uses the two slopes in the usual tan formula.
  TRAP      Using 2h , 2g , 2f instead of h , g , f in the determinant.
            Stopping at S + lambda = 0 without factorising — the question
            asks for LINES.
            Arithmetic slips with the quarters; multiply everything by 4
            early.
```

```
  PATTERN 16 — CONJUGATE HYPERBOLA AND 1/e1^2 + 1/e2^2 = 1          2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the conjugate hyperbola of ..." ,
            "if e1 = 5/4 find e2" , "prove 1/e1^2 + 1/e2^2 = 1"
  METHOD    1. Conjugate = multiply the whole equation by -1 , i.e.
                 x^2/a^2 - y^2/b^2 = 1   ->   y^2/b^2 - x^2/a^2 = 1 .
            2. e1^2 = ( a^2+b^2 )/a^2 and e2^2 = ( a^2+b^2 )/b^2 ,
               so 1/e1^2 + 1/e2^2 = ( a^2 + b^2 )/( a^2 + b^2 ) = 1 .
            3. Given one e, get the other in one line.
  TRAP      Thinking the conjugate has the same eccentricity ( it does NOT,
            unless the hyperbola is rectangular ).
            Forgetting that both curves share the SAME asymptotes and the
            same distance sqrt( a^2+b^2 ) from centre to focus.
```

```
  PATTERN 17 — RECTANGULAR HYPERBOLA FACTS                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the eccentricity of a rectangular hyperbola" ,
            "show that x^2 - y^2 = a^2 is rectangular" ,
            "prove that the asymptotes are perpendicular"
  METHOD    1. Rectangular means a = b ( equivalently conjugate axis =
               transverse axis, equivalently a + b = 0 for the coefficients
               of x^2 and y^2 in a general equation ).
            2. e^2 = 1 + b^2/a^2 = 2 , so e = sqrt 2 .
            3. Asymptotes y = ± x , product of slopes -1 , angle 90 degrees.
            4. LR = 2b^2/a = 2a = the transverse axis.
  TRAP      Saying e = 2 instead of sqrt 2 .
            Forgetting that xy = c^2 is ALSO rectangular ( it is x^2-y^2=a^2
            rotated by 45 degrees, with a = b = c sqrt2 ).
```

```
  PATTERN 18 — THE FORM  x y = c^2                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the tangent to xy = c^2 at ( ct , c/t )" ,
            "show that the triangle formed with the axes has constant area",
            "the portion between the axes is bisected at the point of
            contact"
  METHOD    1. Parametric point P( t ) = ( ct , c/t ) .
            2. dy/dx = -y/x = -1/t^2 .
            3. TANGENT :  x + t^2 y = 2 c t .
               NORMAL  :  t^3 x - t y = c ( t^4 - 1 ) .
               CHORD t1 t2 :  x + t1 t2 y = c ( t1 + t2 ) .
            4. Tangent meets the axes at ( 2ct , 0 ) and ( 0 , 2c/t ) ;
               midpoint = ( ct , c/t ) = P ; area = 2 c^2 .
  TRAP      Writing the tangent as x + t y = 2ct ( the t must be SQUARED ).
            Forgetting the factor 1/2 in the triangle area.
            Elements: vertices ( ±c , ±c ) same sign, foci ( ±c sqrt2 ,
            ±c sqrt2 ) same sign, e = sqrt2 , directrices x + y = ± c sqrt2 .
```

```
  PATTERN 19 — PARAMETRIC POINT                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the point whose eccentric angle is 60 degrees"
  METHOD    1. P( theta ) = ( a sec theta , b tan theta ) .
            2. Substitute the trig values.
            3. Verify by putting the point back into the equation.
  TRAP      Using ( a cos th , b sin th ) — that is the ELLIPSE.
            Using theta = ±90 degrees, where sec and tan do not exist.
```

```
  PATTERN 20 — CHORD JOINING TWO PARAMETERS                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the chord joining the points alpha and
            beta on the hyperbola"
  METHOD    Quote directly:
                 x        alpha-beta       y        alpha+beta
                --- cos( ---------- ) -   --- sin( ---------- )
                 a            2            b            2

                                        alpha + beta
                                =  cos( ------------ )
                                              2
            To check, put x = a sec alpha , y = b tan alpha ; both sides
            reduce to cos( ( alpha+beta )/2 ) .
  TRAP      Using the ELLIPSE chord, which has the half-differences and
            half-sums in different places. Learn the hyperbola one
            separately — do not "adapt" it in the exam hall.
            The intersection of the tangents at alpha and beta is
            ( a cos((A-B)/2) / cos((A+B)/2) , b tan((A+B)/2) ) .
```

```
  PATTERN 21 — TANGENT AT A GIVEN POINT                             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the tangent at ( 5 , 9/4 ) to ..."
  METHOD    1. CHECK the point is actually on the curve.
            2. T = 0 :   x x1/a^2  -  y y1/b^2  =  1 .
            3. Clear the fractions and tidy up.
  TRAP      Writing a plus sign in the middle.
            Forgetting to divide the original equation to make the RHS 1
            before reading a^2 and b^2 .
            Verify: the tangent must pass through the point.
```

```
  PATTERN 22 — TANGENT AND NORMAL AT A PARAMETRIC POINT             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the tangent and normal at the point whose eccentric angle
            is theta"
  METHOD    1. TANGENT :  ( x sec th )/a  -  ( y tan th )/b  =  1 .
            2. NORMAL  :  a x cos th  +  b y cot th  =  a^2 + b^2 .
            3. Substitute the trig values, then clear the surds.
            4. Check both lines pass through ( a sec th , b tan th ) and
               that the slopes multiply to -1.
  TRAP      Using cosec instead of cot in the normal ( cosec belongs to the
            ellipse ).
            Right-hand side a^2 - b^2 instead of a^2 + b^2 .
```

```
  PATTERN 23 — TANGENT WITH A GIVEN SLOPE                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "tangents parallel to 2x - y + 5 = 0" ,
            "tangents perpendicular to x + y = 0" ,
            "tangents of slope m"
  METHOD    1. Get m from the given line ( parallel: same m ;
               perpendicular: m = -1/(given slope) ).
            2. CHECK |m| >= b/a . If not, the honest answer is
               "no such tangent exists".
            3. c^2 = a^2 m^2 - b^2  ->  c = ± sqrt( ... ) .
            4. Write y = m x + c for both signs.
            5. Point of contact ( -a^2 m/c , -b^2/c ) if asked.
  TRAP      Not noticing that a^2m^2 - b^2 can be NEGATIVE.
            m = b/a exactly gives c = 0 : that is the ASYMPTOTE, not a
            tangent.
            Giving only one of the two tangents.
```

```
  PATTERN 24 — DERIVE THE TANGENCY CONDITION                        7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the condition for y = mx + c to be a tangent to the
            hyperbola" ( often combined with the director circle )
  METHOD    1. Substitute y = mx + c into b^2x^2 - a^2y^2 = a^2b^2 .
            2. ( b^2 - a^2m^2 ) x^2 - 2a^2mc x - a^2( c^2 + b^2 ) = 0 .
            3. Equal roots -> discriminant = 0 .
            4. Simplify to  c^2 = a^2 m^2 - b^2 .
            5. Point of contact by comparing with T = 0 .
            6. For the director circle, impose m1 m2 = -1 on
               ( h^2 - a^2 ) m^2 - 2hk m + ( k^2 + b^2 ) = 0 .
  TRAP      Sign errors when expanding the discriminant. Do it slowly; the
            b^2 factors out at the end and everything collapses.
            Forgetting to state the existence condition |m| >= b/a.
```

```
  PATTERN 25 — NORMAL AT A GIVEN POINT                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the normal at ( x1 , y1 )"
  METHOD    1. a^2 x / x1  +  b^2 y / y1  =  a^2 + b^2 .
            2. Clear the fractions.
            3. CHECK it passes through the point, and that
               ( tangent slope ) x ( normal slope ) = -1 .
  TRAP      Using the ellipse version ( minus in the middle, a^2 - b^2 on
            the right ). BOTH signs change for a hyperbola.
            Dividing by y1 when y1 = 0 ( at a vertex the normal is simply
            the x-axis, y = 0 ).
```

```
  PATTERN 26 — CHORD OF CONTACT                                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the chord of contact of the tangents drawn from ( 3 , 2 )"
  METHOD    1. Write T with the EXTERNAL point as ( x1 , y1 ) .
            2. Set T = 0 :  x x1/a^2 - y y1/b^2 = 1 .
            3. Clear the fractions.
  TRAP      Confusing it with the midpoint chord ( which is T = S11 ).
            The chord of contact is the SAME formula as the tangent at a
            point — only the position of the point differs.
```

```
  PATTERN 27 — CHORD WITH A GIVEN MIDPOINT                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the chord bisected at ( 3 , 1 )" ,
            "the midpoint of the chord is ..."
  METHOD    1. T = S11 . The -1 cancels from both sides, leaving
                 x x1/a^2 - y y1/b^2  =  x1^2/a^2 - y1^2/b^2 .
            2. Clear the fractions.
            3. VERIFY: substitute back, form the quadratic in x, and check
               that the sum of the roots is 2 x1 and the discriminant > 0 .
  TRAP      Leaving the -1 on one side only.
            For a hyperbola a real chord with that midpoint need not exist —
            if the discriminant is negative, say so.
```

```
  PATTERN 28 — PAIR OF TANGENTS FROM AN EXTERNAL POINT              4-7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equations of the tangents drawn from ( 2 , 1 ) to ..."
  METHOD    1. Write S , S11 and T for the given point.
            2. Combined equation: S * S11 = T^2 .
            3. Expand and simplify into a homogeneous-looking second-degree
               equation.
            4. FACTORISE it into two straight lines ( match coefficients ).
            5. Check both lines pass through the external point, and that
               each meets the curve in a repeated root.
  TRAP      Forgetting to factorise — the question wants LINES.
            Sign errors when expanding T^2 ( it has three terms, so six
            products ).
            If one factor turns out to be an asymptote, say so: it touches
            the curve "at infinity".
```

```
  PATTERN 29 — POLE, POLAR AND CONJUGATE POINTS                     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the polar of ( 2 , 3 )" , "find the pole of 3x + 4y = 12" ,
            "show that the points are conjugate"
  METHOD    POLAR of ( x1 , y1 ) :   T = 0 .
            POLE of  l x + m y + n = 0 :   ( -a^2 l / n , + b^2 m / n ) .
            CONJUGATE POINTS :  x1x2/a^2 - y1y2/b^2 = 1 .
            CONJUGATE LINES  :  a^2 l1 l2 - b^2 m1 m2 = n1 n2 .
  TRAP      For the ELLIPSE the pole is ( -a^2l/n , -b^2m/n ) ; for the
            HYPERBOLA the SECOND sign flips to plus.
            Always check by taking the polar of your answer and seeing that
            you get the original line back.
```

```
  PATTERN 30 — DIRECTOR CIRCLE / PERPENDICULAR TANGENTS             4-7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the locus of the point of intersection of perpendicular
            tangents" , "two perpendicular tangents meet on which circle?"
  METHOD    1. Let the point be ( h , k ) . Put y = mx + c through it with
               c^2 = a^2m^2 - b^2 .
            2. ( h^2 - a^2 ) m^2 - 2 h k m + ( k^2 + b^2 ) = 0 .
            3. m1 m2 = -1  ->  h^2 + k^2 = a^2 - b^2 .
            4. Locus:  x^2 + y^2 = a^2 - b^2 .
            5. STATE the existence condition: real only if a > b, i.e.
               e < sqrt 2 .
  TRAP      Writing a^2 + b^2 ( the ellipse answer ).
            Not mentioning that for a < b there are NO perpendicular
            tangents at all — that remark is often worth a mark.
```

```
  PATTERN 31 — THE FOCAL-PERPENDICULAR PROPERTY                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove that the product of the perpendiculars from the foci to
            any tangent is b^2" ; "the foot of the perpendicular lies on
            the auxiliary circle"
  METHOD    1. Tangent m x - y + c = 0 with c^2 = a^2m^2 - b^2 .
            2. p1 p2 = | c^2 - a^2e^2m^2 | / ( 1 + m^2 ) .
            3. Use a^2e^2 = a^2 + b^2 : the bracket becomes -b^2(1+m^2) .
            4. p1 p2 = b^2 .
  TRAP      Using a^2e^2 = a^2 - b^2 . For a hyperbola it is a PLUS.
            Forgetting the modulus signs.
```

```
  PATTERN 32 — IDENTIFY THE CONIC FROM A GENERAL EQUATION           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that ... represents a hyperbola" ,
            "what conic does ... represent?"
  METHOD    1. Match a , 2h , b , 2g , 2f , c CAREFULLY ( halve the cross
               coefficients ).
            2. Compute h^2 - ab . Positive -> hyperbola.
            3. Compute Delta = abc + 2fgh - af^2 - bg^2 - ch^2 .
               If Delta = 0 it is a degenerate pair of lines, NOT a conic.
            4. If in addition a + b = 0 , it is RECTANGULAR.
  TRAP      Using 2h in place of h . Forgetting the Delta != 0 check, which
            is what separates a genuine hyperbola from a pair of lines.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and try.

| Question stem | Pattern |
|---|---|
| "Find the eccentricity of `9x^2 - 16y^2 = 144`" | 1 |
| "Find the foci of `16y^2 - 9x^2 = 144`" | 2 (watch the orientation!) |
| "If the latus rectum is half the transverse axis, find e" | 3 |
| "Find the hyperbola with foci (±5,0) and transverse axis 8" | 4 |
| "Foci (±5,0) and latus rectum 9/2" | 5 |
| "Focus (2,1), directrix 2x + 3y = 1, e = 2" | 6 |
| "Asymptotes 3x ± 5y = 0, passes through (1,-1)" | 7 |
| "Distances from (5,0) and (-5,0) differ by 8" | 8 |
| "Find the focal distances of the point with x = 8" | 9 |
| "Where does (3,-4) lie with respect to the hyperbola?" | 10 |
| "9x² - 16y² - 36x - 32y - 124 = 0 — find everything" | 11 |
| "Define a hyperbola and derive its equation" | 12 |
| "Show that \|S'P - SP\| is constant" | 13 |
| "Find the asymptotes of x²/9 - y²/4 = 1" | 14 |
| "Find the asymptotes of 3x² - 5xy - 2y² + 5x + 11y - 8 = 0" | 15 |
| "If e1 = 5/4, find the eccentricity of the conjugate" | 16 |
| "Find the eccentricity of a rectangular hyperbola" | 17 |
| "Show that the tangent to xy = c² is bisected at the contact point" | 18 |
| "The point whose eccentric angle is 60 degrees" | 19 |
| "The chord joining the points alpha and beta" | 20 |
| "Find the tangent at (5, 9/4)" | 21 |
| "Find the tangent and normal at eccentric angle 60" | 22 |
| "Tangents parallel to 2x - y + 5 = 0" | 23 |
| "Find the condition for y = mx + c to touch" | 24 |
| "Find the normal at (5, 9/4)" | 25 |
| "Find the chord of contact from (3, 2)" | 26 |
| "Find the chord bisected at (3, 1)" | 27 |
| "Combined equation of the pair of tangents from (2,1)" | 28 |
| "Find the pole of 3x + 4y = 12" | 29 |
| "Locus of the intersection of perpendicular tangents" | 30 |
| "Product of the perpendiculars from the foci is b²" | 31 |
| "Show that 3x² - 5xy - 2y² + 5x + 11y - 8 = 0 is a hyperbola" | 32 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +==========================================================================+
  |                                                                          |
  |   IF YOU LEARN ONLY THREE THINGS, LEARN THESE                            |
  |                                                                          |
  |   A.  DIVIDE -> a^2 IS UNDER THE PLUS SIGN -> ae = sqrt(a^2+b^2) ->      |
  |       read e, foci, directrices, LR, asymptotes.                         |
  |                                     (Patterns 1, 2, 14 — 2 marks, certain)|
  |                                                                          |
  |   B.  COMPLETE THE SQUARE on a general equation and do the same thing.   |
  |                                     (Pattern 11 — 7 marks, most-asked)   |
  |                                                                          |
  |   C.  TANGENT and NORMAL at a point and at theta, plus the condition     |
  |       c^2 = a^2 m^2 - b^2.      (Patterns 21-23, 25 — 4 marks, likely)   |
  |                                                                          |
  |   That is 13 marks from three skills.                                    |
  |                                                                          |
  +==========================================================================+
```

**The three-tier plan:**

```
  TIER 1 — CANNOT AFFORD TO MISS  (do these first, they are almost free)
     Pattern 1   read off the elements
     Pattern 2   decide the orientation
     Pattern 3   e from a stated condition
     Pattern 4   equation from foci / vertices / e
     Pattern 9   focal distances
     Pattern 10  inside / outside
     Pattern 14  asymptotes of a standard hyperbola
     Pattern 16  conjugate hyperbola, 1/e1^2 + 1/e2^2 = 1
     Pattern 17  rectangular hyperbola, e = sqrt 2
     -> secures the Section A question, 2 marks, plus 1-2 EAPCET marks.

  TIER 2 — THE 4-MARK ENGINE  (learn next)
     Pattern 5   equation from LR + foci
     Pattern 6   focus + directrix + e
     Pattern 7   asymptotes + a point
     Pattern 8   difference of distances
     Pattern 18  the form xy = c^2
     Pattern 21  tangent at a point
     Pattern 22  tangent and normal at theta
     Pattern 23  tangent with a given slope
     Pattern 25  normal at a point
     Pattern 26  chord of contact
     Pattern 27  midpoint chord
     -> secures the Section B question, 4 marks.

  TIER 3 — THE 7-MARK CHOICES  (learn at least TWO of these well)
     Pattern 11  complete the square and list every element   <- do this one
     Pattern 12  derive x^2/a^2 - y^2/b^2 = 1                 <- and this one
     Pattern 13  prove | S'P - SP | = 2a
     Pattern 15  asymptotes of a general hyperbola
     Pattern 24  derive the tangency condition
     Pattern 28  pair of tangents from an external point
     Pattern 30  director circle
     -> secures the Section C question, 7 marks.
```

```
  +--------------------------------------------------------------------------+
  |  REALISTIC TARGET FROM THIS CHAPTER                                      |
  |                                                                          |
  |     Section A   2 marks      almost certain if you do Tier 1             |
  |     Section B   4 marks      very likely if you do Tier 2                |
  |     Section C   7 marks      likely if you do Patterns 11 and 12         |
  |     ------------------------------------------------------------        |
  |     TOTAL      13 marks out of 75  from ONE chapter                      |
  |                                                                          |
  |     Plus 1-2 EAPCET marks that are pure substitution.                    |
  |                                                                          |
  |     And because every technique here is the ELLIPSE technique with       |
  |     b^2 replaced by -b^2, you are revising Chapter 4 at the same time.   |
  |     Two chapters for the price of one.                                   |
  +--------------------------------------------------------------------------+
```

```
  THE LAST THING TO READ BEFORE YOU WALK IN

  +--------------------------------------------------------------------------+
  |   1.  Divide until the right-hand side is 1.                            |
  |   2.  a^2 is under the PLUS sign. Not the bigger number.                |
  |   3.  b^2 = a^2 ( e^2 - 1 )   and   ae = sqrt( a^2 + b^2 ) .            |
  |   4.  e is always GREATER than 1.                                       |
  |   5.  Latus rectum = 2 b^2 / a  (same as the ellipse).                  |
  |   6.  TRANSVERSE and CONJUGATE, not major and minor.                    |
  |   7.  Asymptotes: put the RHS to 0 and factorise.                       |
  |   8.  Tangent c^2 = a^2m^2 - b^2 ; contact ( -a^2m/c , -b^2/c ) .       |
  |   9.  Normal  a^2x/x1 + b^2y/y1 = a^2 + b^2   (both signs PLUS).        |
  |  10.  Director circle x^2 + y^2 = a^2 - b^2 , only if a > b.            |
  |  11.  Give BOTH foci, BOTH directrices, BOTH asymptotes, BOTH branches. |
  |  12.  If you forget a formula: write the ELLIPSE one, flip b^2 to -b^2. |
  +--------------------------------------------------------------------------+
```
