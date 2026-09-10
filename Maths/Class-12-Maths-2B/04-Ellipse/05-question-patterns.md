# Ellipse — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

Nearly every pattern below is powered by the same short list:

```
  x^2/a^2 + y^2/b^2 = 1  (a > b)        b^2 = a^2 ( 1 - e^2 )
  ae = sqrt( a^2 - b^2 )                e = sqrt( 1 - b^2/a^2 )

  Centre (0,0)   Vertices (±a,0)   Foci (±ae,0)   Directrices x = ±a/e
  Major axis 2a  Minor axis 2b     LR = 2b^2/a    Area = pi a b

  P(theta) = ( a cos theta , b sin theta )   Auxiliary circle x^2+y^2 = a^2
  SP = a - e x1 ,  S'P = a + e x1 ,  SP + S'P = 2a

  S   =  x^2/a^2 + y^2/b^2 - 1
  S11 =  x1^2/a^2 + y1^2/b^2 - 1
  T   =  x x1/a^2 + y y1/b^2 - 1

  T = 0        tangent at a point ON / chord of contact from OUTSIDE / polar
  T = S11      chord with a given MIDPOINT
  S S11 = T^2  pair of tangents

  tangent  y = mx ± sqrt( a^2 m^2 + b^2 )   contact ( -a^2 m/c , b^2/c )
  normal   a^2 x/x1 - b^2 y/y1 = a^2 - b^2
           a x sec th - b y cosec th = a^2 - b^2
  director circle  x^2 + y^2 = a^2 + b^2
```

---

```
  PATTERN 1 — READ OFF e / FOCI / DIRECTRICES / LATUS RECTUM        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the eccentricity / foci / directrices / latus rectum of ..."
            and the equation is already a clean second-degree form with no
            x or y terms.
  METHOD    1. DIVIDE the whole equation so the right-hand side is exactly 1.
            2. Circle the BIGGER denominator. That is a^2. The other is b^2.
            3. The major axis is the axis of the variable over a^2.
            4. e = sqrt( 1 - b^2/a^2 )   or faster   ae = sqrt( a^2 - b^2 ).
            5. Foci = ( ±ae , 0 ) or ( 0 , ±ae ).
               Directrices  x = ±a/e  or  y = ±a/e.
               LR = 2 b^2 / a.
  TRAP      Reading a^2 = 9 off "9x^2 + 16y^2 = 144" without dividing by 144.
            Also: giving only ONE focus. There are always two.
            Sanity check: e must lie strictly between 0 and 1, and
            LR must be smaller than 2a.
```

```
  PATTERN 2 — DECIDE THE ORIENTATION                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the foci / vertices / major axis of ..." where the bigger
            denominator might be under y^2.
  METHOD    1. Bring to  x^2/A + y^2/B = 1.
            2. If A > B  ->  wide ellipse, everything happens along x.
               If B > A  ->  tall ellipse, everything happens along y.
            3. a^2 = max(A,B) , b^2 = min(A,B).
            4. Put the foci / vertices / directrices on the MAJOR axis.
  TRAP      9x^2 + 4y^2 = 36 becomes x^2/4 + y^2/9 = 1 , so the foci are on
            the y-AXIS, not the x-axis. This single decision controls every
            other answer in the question.
```

```
  PATTERN 3 — ECCENTRICITY FROM A STATED CONDITION                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If the latus rectum is half the minor axis ...",
            "if the minor axis equals the distance between the foci ...",
            "if the distance between the directrices is k times ..."
  METHOD    1. Translate every phrase into symbols:
                 major axis 2a       minor axis 2b
                 LR 2b^2/a           foci distance 2ae
                 directrices distance 2a/e
            2. Form the equation, cancel, and force b^2/a^2 to appear.
            3. Use  e^2 = 1 - b^2/a^2 .
  TRAP      Confusing 2a with a (axis versus SEMI-axis). Read the word
            "semi" carefully. And 2ae is NOT 2a/e.
  THREE TO MEMORISE
            LR = half of the MINOR axis  ->  e = sqrt(3)/2
            LR = half of the MAJOR axis  ->  e = 1/sqrt(2)
            minor axis = focal distance  ->  e = 1/sqrt(2)
```

```
  PATTERN 4 — EQUATION FROM FOCI / VERTICES / e                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the equation of the ellipse with foci (±c,0) and
            eccentricity e" / "with vertices (0,±a) and e = ..."
  METHOD    1. Note WHICH AXIS the given points are on — that is the major axis.
            2. From what is given, extract a and ae.
                 vertices give a ;  foci give ae ;  e = (ae)/a
            3. b^2 = a^2 - (ae)^2 .
            4. Put the BIGGER number under the variable of the major axis.
  TRAP      Writing x^2/a^2 + y^2/b^2 = 1 by habit when the foci are on the
            y-axis. Always ask "where are the foci?" before writing anything.
```

```
  PATTERN 5 — EQUATION FROM LATUS RECTUM + ONE MORE FACT      2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "latus rectum is 15/2 and the distance between the foci is 2"
            "latus rectum is 5 and eccentricity is 2/3"
  METHOD    1. Write LR = 2b^2/a  and, if e is given, LR = 2a( 1 - e^2 ).
            2. Write the second fact:  2ae = d , or e = given, or 2b = given.
            3. Use b^2 = a^2 - (ae)^2 to remove b, leaving one equation in a.
            4. Solve (often a quadratic). REJECT the negative root: a > 0.
  TRAP      Keeping both roots of the quadratic. a must be positive AND must
            give e < 1. Always check both conditions on your answer.
```

```
  PATTERN 6 — EQUATION FROM FOCUS + DIRECTRIX + e             4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "focus (1,-1), directrix x + y + 2 = 0, eccentricity 1/sqrt2"
  METHOD    1. Let P = ( x , y ). Write   S P^2  =  e^2 * P M^2 .
            2. P M = | l x + m y + n | / sqrt( l^2 + m^2 ) , so
                 ( x - x0 )^2 + ( y - y0 )^2 = e^2 (lx+my+n)^2/(l^2+m^2).
            3. Clear the denominator, expand BOTH sides fully.
            4. Bring everything to one side and tidy.
            5. Confirm it is an ellipse: h^2 - ab < 0.
  TRAP      Forgetting to SQUARE e. e = 2/3 gives e^2 = 4/9.
            Also forgetting the l^2 + m^2 in the denominator of PM^2.
            Expand ( x + y + 2 )^2 as x^2+y^2+4+2xy+4x+4y — the 2xy term is
            the one students drop.
```

```
  PATTERN 7 — EQUATION THROUGH TWO GIVEN POINTS                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the ellipse referred to its axes passes through (-2,2) and (3,-1)"
  METHOD    1. Write it as  x^2/A + y^2/B = 1 (do NOT prejudge which is bigger).
            2. Substitute both points -> two equations.
            3. Put u = 1/A , v = 1/B to make them LINEAR. Solve.
            4. A = 1/u , B = 1/v . Clear fractions into a neat form.
            5. State which is a^2 (the bigger one) if the question asks for
               the elements too.
  TRAP      Trying to solve for A and B directly — the equations are not
            linear in A and B. The substitution u = 1/A is the whole trick.
```

```
  PATTERN 8 — EQUATION FROM e + ONE POINT                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "centre at the origin, major axis along x, e = 2/3, passes
            through (-3,1)"
  METHOD    1. b^2 = a^2 ( 1 - e^2 ). Write b^2 as a multiple of a^2.
            2. Substitute the point into x^2/a^2 + y^2/b^2 = 1.
            3. Every term now has a^2 in it — solve for a^2.
            4. Back-substitute to get b^2. Clear fractions.
            5. CHECK by putting the point into your final equation.
  TRAP      Using a^2 = b^2(1-e^2) by mistake. The SEMI-MAJOR value carries
            the (1 - e^2).
```

```
  PATTERN 9 — LOCUS FROM  SP + S'P = 2a                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the sum of the distances of P from (0,3) and (0,-3) is 10 —
            find the locus"
  METHOD    1. Write sqrt(...) + sqrt(...) = 2a.
            2. Move ONE root to the other side and square.
            3. Isolate the remaining root, simplify, square AGAIN.
            4. Tidy into standard form.
            5. CHECK: 2a should match, and ae = half the distance between
               the two given points.
  TRAP      Squaring only once. After the first squaring a root remains.
            SHORTCUT for a 2-mark version: the two points are the foci, so
            the centre is their midpoint, ae = half their separation,
            a = half the given sum, and b^2 = a^2 - (ae)^2.
```

```
  PATTERN 10 — FOCAL DISTANCE OF A GIVEN POINT                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the focal distances of the point (4, 9/5) on ..."
  METHOD    1. CHECK the point is on the ellipse (substitute it).
            2. Find a and e.
            3. S P = a - e x1 ,  S' P = a + e x1   (x-major ellipse)
               use y1 instead of x1 for a y-major ellipse.
            4. CHECK: the two answers must add to 2a.
  TRAP      Using the distance formula. It works but wastes four minutes
            and usually produces a surd you cannot simplify.
```

```
  PATTERN 11 — INSIDE / ON / OUTSIDE                                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the position of the point (2,3) with respect to ..."
            or "how many tangents can be drawn from ...?"
  METHOD    1. Bring the ellipse to the "= 1" form.
            2. S11 = x1^2/a^2 + y1^2/b^2 - 1.
            3. S11 < 0 INSIDE , = 0 ON , > 0 OUTSIDE.
            4. Number of tangents: 0 tangents if inside, 1 if on, 2 if outside.
  TRAP      Forgetting the "- 1". Remember the centre gives S11 = -1 , so
            negative = inside.
```

```
  PATTERN 12 — COMPLETE THE SQUARE AND FIND EVERY ELEMENT           7 marks
  ------------------------------------------------------------------------
  TRIGGER   an equation with x^2, y^2 AND x, y terms:
            "9x^2 + 16y^2 - 36x + 32y - 92 = 0"
            The words "centre, vertices, foci, eccentricity, directrices,
            length of latus rectum" all appear.
  METHOD    1. Group x-terms and y-terms; constant to the right.
            2. Factor out the coefficient of x^2 and of y^2.
            3. Complete each square:  x^2 + px = (x + p/2)^2 - (p/2)^2.
            4. Tidy the constants to the right.
            5. DIVIDE so the right-hand side is exactly 1.
            6. Read h, k, a^2, b^2 (bigger denominator = a^2).
            7. Write ALL of: centre (h,k) , vertices , ends of the minor axis ,
               e , foci , directrices , major/minor axis lines and lengths , LR.
            8. CHECK by substituting a vertex into the ORIGINAL equation.
  TRAP      Stopping at "9(x-2)^2 + 16(y+1)^2 = 144" — that is not standard
            form. Divide by 144.
            Second trap: forgetting to ADD h and k back. The foci are
            ( h ± ae , k ), not ( ±ae , 0 ).
```

```
  PATTERN 13 — DERIVE THE STANDARD EQUATION                         7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define an ellipse and derive its equation in standard form"
  METHOD    1. State the definition SP = e·PM with 0 < e < 1.
            2. Draw the figure: S, directrix, foot Z, points A and A'
               dividing SZ internally and externally in the ratio e : 1,
               centre C the midpoint of AA', AA' = 2a.
            3. ADD the two relations to get CZ = a/e (the directrix).
            4. SUBTRACT them to get CS = ae (the focus).
            5. Take C as the origin, put P(x,y), write SP = e·PM, square.
            6. Simplify to  x^2(1-e^2) + y^2 = a^2(1-e^2).
            7. Divide and set b^2 = a^2(1-e^2).
  TRAP      Skipping steps 3 and 4 and simply asserting S = (ae, 0). Those
            two steps carry 2 of the 7 marks. Draw the diagram — it is worth
            a mark on its own.
```

```
  PATTERN 14 — PROVE  SP + S'P = 2a                                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the sum of the focal distances of any point on an
            ellipse is constant"
  METHOD    1. Take P(x1,y1) on the ellipse.
            2. Pair each focus with ITS OWN directrix:
                 S(ae,0)  with  x = a/e
                 S'(-ae,0) with x = -a/e
            3. SP = e( a/e - x1 ) = a - e x1
               S'P = e( x1 + a/e ) = a + e x1
            4. Add. The e x1 terms cancel: SP + S'P = 2a.
  TRAP      Mixing up which directrix goes with which focus. The focus on
            the RIGHT goes with the directrix on the RIGHT.
```

```
  PATTERN 15 — PARAMETRIC POINT / ECCENTRIC ANGLE                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "the point whose eccentric angle is 45 degrees"
  METHOD    1. Find a and b.
            2. P = ( a cos theta , b sin theta ).
            3. Simplify surds; rationalise if needed.
            4. CHECK by substituting into the ellipse — it must give 1.
  TRAP      Writing ( a cos th , a sin th ) — that is a point on the
            AUXILIARY CIRCLE, not on the ellipse.
            Second trap: theta is NOT the angle that CP makes with the x-axis.
```

```
  PATTERN 16 — CHORD JOINING TWO ECCENTRIC ANGLES                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the equation of the chord joining the points with
            eccentric angles alpha and beta"
  METHOD    1. Quote
                 (x/a) cos((alpha+beta)/2) + (y/b) sin((alpha+beta)/2)
                        = cos((alpha-beta)/2)
            2. Compute the half-sum and half-difference angles first.
            3. Substitute, clear fractions, tidy.
            4. CHECK by putting BOTH endpoints into your final line.
  TRAP      Putting the half-DIFFERENCE inside the sine on the left. The
            left side uses the half-SUM in both cos and sin; only the right
            side uses the half-difference.
```

```
  PATTERN 17 — FOCAL CHORD IN ECCENTRIC ANGLES                 4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "if the chord joining alpha and beta passes through the focus,
            prove that tan(alpha/2) tan(beta/2) = (e-1)/(e+1)"
  METHOD    1. Write the chord formula (Pattern 16).
            2. Substitute the focus ( ae , 0 ):
                 e cos((a+b)/2) = cos((a-b)/2)
            3. Expand both cosines using
                 cos(A±B) = cosA cosB -+ sinA sinB
               with A = alpha/2 , B = beta/2.
            4. Collect and divide to get the tangent product.
  TRAP      Dropping the sign. Since e < 1, (e-1)/(e+1) is NEGATIVE — use
            that as a check. For the focus (-ae, 0) the answer flips to
            (e+1)/(e-1).
```

```
  PATTERN 18 — TANGENT AT A POINT ON THE ELLIPSE               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the equation of the tangent at (x1, y1)"
  METHOD    1. CHECK the point is on the ellipse.
            2. HALVE the equation:  x^2 -> x x1 ,  y^2 -> y y1 .
                 x x1 / a^2  +  y y1 / b^2  =  1
            3. Clear fractions to get integer coefficients.
            4. CHECK the point satisfies your line.
  TRAP      Using the point-slope method with dy/dx. It is correct but slow,
            and sign errors creep in. Use T = 0.
```

```
  PATTERN 19 — TANGENT / NORMAL AT A PARAMETRIC POINT               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "at the point whose eccentric angle is theta"
  METHOD    TANGENT   ( x cos th )/a  +  ( y sin th )/b  =  1
            NORMAL    a x sec th  -  b y cosec th  =  a^2 - b^2
            1. Write down cos th and sin th as exact surds.
            2. Substitute, multiply out to clear all denominators.
            3. CHECK: the point ( a cos th , b sin th ) must satisfy both.
            4. CHECK: the two slopes must multiply to -1.
  TRAP      sec th = 1/cos th and cosec th = 1/sin th — students routinely
            swap them. Write the normal as
                 a x / cos th  -  b y / sin th  =  a^2 - b^2
            if that is safer for you.
```

```
  PATTERN 20 — TANGENT WITH A GIVEN SLOPE / PARALLEL / PERPENDICULAR
                                                                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "tangents parallel to 2x - y + 3 = 0" or "with slope 3" or
            "perpendicular to x + y = 5"
  METHOD    1. Get m:  parallel  -> same slope
                       perpendicular -> m = -1 / (given slope)
            2. c = ± sqrt( a^2 m^2 + b^2 ).
            3. Write BOTH tangents  y = m x ± sqrt( a^2 m^2 + b^2 ).
            4. If asked, contact points ( -a^2 m/c , b^2/c ) for each c.
  TRAP      Giving only one tangent. There are always TWO parallel tangents.
            Second trap: for x^2/A + y^2/B = 1 the condition is
            c^2 = A m^2 + B — the number under x^2 multiplies m^2, whether
            or not it happens to be the bigger one.
```

```
  PATTERN 21 — DERIVE THE TANGENCY CONDITION + POINT OF CONTACT     7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the condition for y = mx + c to be a tangent to the
            ellipse and find the point of contact"
  METHOD    1. Substitute y = mx + c and clear denominators:
                 ( b^2 + a^2 m^2 ) x^2 + 2 a^2 m c x + a^2( c^2 - b^2 ) = 0
            2. Tangency <=> equal roots <=> discriminant = 0.
            3. Simplify carefully to  b^2 ( c^2 - b^2 - a^2 m^2 ) = 0 ,
               hence  c^2 = a^2 m^2 + b^2.
            4. The repeated root is x = -a^2 m c / ( b^2 + a^2 m^2 ) and
               b^2 + a^2 m^2 = c^2 , so x = -a^2 m / c , y = b^2 / c.
            5. CHECK the contact point satisfies the ellipse.
  TRAP      Algebra slips in step 3. Write every expansion on its own line.
            Do not "cancel" b^2 without saying b != 0.
```

```
  PATTERN 22 — TANGENTS FROM AN EXTERNAL POINT                 4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the equations of the tangents drawn from (1,2) to ..."
  METHOD    1. Verify the point is outside: S11 > 0.
            2. Line through it:  y - y1 = m ( x - x1 ) , so c = y1 - m x1.
            3. Impose c^2 = a^2 m^2 + b^2. Expand -> a quadratic in m.
            4. Solve for the TWO values of m.
            5. Write both tangent equations.
            6. Also test the vertical line x = x1 separately.
  TRAP      Losing one tangent because the quadratic in m degenerates to a
            linear equation — that means one tangent is VERTICAL, x = x1.
```

```
  PATTERN 23 — NORMAL AT A POINT                                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the equation of the normal at (x1,y1)"
  METHOD    1. Quote  a^2 x / x1  -  b^2 y / y1  =  a^2 - b^2 .
            2. Substitute, clear all fractions.
            3. CHECK the point satisfies it.
            4. CHECK (tangent slope)(normal slope) = -1.
  TRAP      Writing a PLUS between the two terms. The normal has a MINUS.
            If y1 = 0 (a vertex) the formula breaks down — there the normal
            is simply the major axis, y = 0.
```

```
  PATTERN 24 — CHORD OF CONTACT / POLAR                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "chord of contact of tangents drawn from (x1,y1)" or
            "the polar of (x1,y1)"
  METHOD    1. Write T = 0 :  x x1/a^2 + y y1/b^2 = 1 .
            2. Clear fractions.
            3. If asked, find the two contact points by solving with the
               ellipse, and CHECK they lie on your line.
  TRAP      This is exactly the tangent formula. The difference is only
            WHERE the point is. Do not say "the tangent at (1,2)" if (1,2)
            is outside the ellipse — say "the chord of contact".
```

```
  PATTERN 25 — CHORD WITH A GIVEN MIDPOINT                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   the words "midpoint", "bisected at", "whose middle point is"
  METHOD    1. Write T = S11 :
                 x x1/a^2 + y y1/b^2  =  x1^2/a^2 + y1^2/b^2
            2. Multiply by the LCM of a^2 and b^2.
            3. CHECK the midpoint lies on your line, and that it is INSIDE
               the ellipse (S11 < 0) — otherwise no such chord exists.
  TRAP      Using T = 0 instead of T = S11. One word in the question
            ("midpoint") changes the whole answer.
```

```
  PATTERN 26 — PAIR OF TANGENTS                                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the combined equation of the pair of tangents from (x1,y1)"
  METHOD    1. Write S , S11 and T separately and clearly.
            2. Form  S * S11  =  T^2 .
            3. Expand both sides fully and bring everything to one side.
            4. CHECK by factorising into two linear factors, or by verifying
               that the two tangents found by Pattern 22 satisfy it.
  TRAP      Sloppy expansion of T^2 — it is a trinomial squared, so there
            are SIX terms. Write them all out.
```

```
  PATTERN 27 — POLE OF A LINE / CONJUGATE POINTS               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the pole of the line ..." / "show that these points are
            conjugate" / "find the value of k so that the lines are conjugate"
  METHOD    POLE of l x + m y + n = 0  is  ( -a^2 l / n , -b^2 m / n ).
            CONJUGATE POINTS:  x1 x2 / a^2  +  y1 y2 / b^2  =  1 .
            CONJUGATE LINES :  a^2 l1 l2  +  b^2 m1 m2  =  n1 n2 .
            1. Put the line in the form lx + my + n = 0 FIRST (n on the left).
            2. Substitute.
            3. CHECK by computing the polar of your answer — it must give
               back the original line.
  TRAP      Sign errors from forgetting to move the constant across.
            "x + y = 1" must become "x + y - 1 = 0", so n = -1, not +1.
```

```
  PATTERN 28 — DIRECTOR CIRCLE (locus of perpendicular tangents)    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the locus of the point of intersection of perpendicular
            tangents" / "prove that the locus is x^2 + y^2 = a^2 + b^2"
  METHOD    1. Let the point be ( h , k ). Line through it: c = k - m h.
            2. Impose c^2 = a^2 m^2 + b^2 and expand:
                 m^2 ( h^2 - a^2 ) - 2 h k m + ( k^2 - b^2 ) = 0
            3. This is a quadratic in m whose roots are the two slopes.
            4. Product of roots = ( k^2 - b^2 ) / ( h^2 - a^2 ) = -1.
            5. Rearrange:  h^2 + k^2 = a^2 + b^2 .
            6. Replace ( h , k ) by ( x , y ).
  TRAP      Forgetting to say "quadratic in m". The whole proof rests on
            reading off the product of its roots.
            For a shifted ellipse the answer is (x-h)^2+(y-k)^2 = a^2+b^2.
```

```
  PATTERN 29 — CONJUGATE DIAMETERS                                  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "define conjugate diameters and prove m1 m2 = -b^2/a^2" or
            "prove CP^2 + CD^2 = a^2 + b^2"
  METHOD    FOR m1 m2 :
            1. Take chords parallel to y = m2 x, midpoint (x1,y1).
            2. By T = S11 their chord has slope -b^2 x1 / ( a^2 y1 ) = m2 .
            3. The locus of midpoints is y = m1 x with m1 = y1/x1.
            4. Combine to get m1 m2 = -b^2/a^2.
            FOR THE SUM OF SQUARES :
            1. Take P at theta, D at theta + 90 degrees.
            2. Verify the slope product is -b^2/a^2 (so they are conjugate).
            3. CP^2 = a^2cos^2 + b^2sin^2 , CD^2 = a^2sin^2 + b^2cos^2.
            4. Add: a^2 + b^2 .
  TRAP      Assuming CP and CD are perpendicular. They are CONJUGATE, not
            perpendicular — only for a circle do the two coincide.
```

```
  PATTERN 30 — STANDARD PROPERTY PROOFS                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "prove that the product of the perpendiculars from the foci to
            any tangent is b^2" / "prove a^2/CM^2 + b^2/CN^2 = 1"
  METHOD    (i) PRODUCT OF PERPENDICULARS
                1. Tangent  m x - y + c = 0 with c^2 = a^2 m^2 + b^2.
                2. p1 p2 = | c^2 - m^2 a^2 e^2 | / ( m^2 + 1 ).
                3. Use a^2 e^2 = a^2 - b^2 ; the top becomes b^2(1 + m^2).
                4. Cancel: p1 p2 = b^2.
            (ii) INTERCEPT PROPERTY
                1. Tangent at theta meets the axes at
                     M ( a/cos th , 0 ) and N ( 0 , b/sin th ).
                2. a^2/CM^2 + b^2/CN^2 = cos^2 th + sin^2 th = 1.
  TRAP      Forgetting the modulus signs in the perpendicular-distance
            formula, and forgetting to substitute a^2e^2 = a^2 - b^2.
```

```
  PATTERN 31 — LOCUS BY ELIMINATING THE PARAMETER                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the locus of the midpoint of ..." where a tangent, a
            chord or an ordinate moves round the ellipse.
  METHOD    1. Call the moving point ( h , k ).
            2. Write h and k in terms of theta (or of the parameter given).
            3. Solve for cos theta and sin theta SEPARATELY.
            4. Use cos^2 theta + sin^2 theta = 1.
            5. Replace ( h , k ) by ( x , y ) in the final answer.
  TRAP      Leaving theta in the answer. A locus must contain only x and y.
            Also: never divide by something that could be zero without
            saying so.
```

```
  PATTERN 32 — AREA / AUXILIARY CIRCLE / WORD PROBLEM               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "find the area" / "find the auxiliary circle" /
            "an arch is a semi-ellipse 20 m wide and 8 m high ..."
  METHOD    AREA = pi a b .   AUXILIARY CIRCLE = x^2 + y^2 = a^2 .
            For a word problem:
            1. Put the centre of the ellipse at the origin.
            2. Half the WIDTH is one semi-axis; the HEIGHT is the other.
            3. Write x^2/a^2 + y^2/b^2 = 1 and substitute the given value.
  TRAP      In an arch problem the given height is the SEMI-minor axis
            (the full minor axis would be twice as tall). Draw the picture.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right-hand column and try.

| Question stem | Pattern |
|---|---|
| "Find the eccentricity of `4x^2 + 9y^2 = 36`" | 1 |
| "Find the foci of `9x^2 + 4y^2 = 36`" | 2 (watch the orientation!) |
| "If the latus rectum is half the minor axis, find e" | 3 |
| "Find the ellipse with foci (±5,0) and e = 1/2" | 4 |
| "LR = 15/2 and the distance between the foci is 2" | 5 |
| "Focus (1,-1), directrix x + y + 2 = 0, e = 2/3" | 6 |
| "The ellipse passes through (-2,2) and (3,-1)" | 7 |
| "e = 2/3 and it passes through (-3,1)" | 8 |
| "Sum of the distances from (0,3) and (0,-3) is 10" | 9 |
| "Find the focal distances of (4, 9/5)" | 10 |
| "Where does (2,3) lie with respect to the ellipse?" | 11 |
| "9x^2 + 16y^2 - 36x + 32y - 92 = 0 — find everything" | 12 |
| "Define an ellipse and derive its equation" | 13 |
| "Show that SP + S'P is constant" | 14 |
| "The point whose eccentric angle is 45 degrees" | 15 |
| "The chord joining the points alpha and beta" | 16 |
| "If the chord alpha-beta passes through a focus ..." | 17 |
| "Find the tangent at (3, 16/5)" | 18 |
| "Find the tangent and normal at eccentric angle 60" | 19 |
| "Tangents parallel to x - 2y - 4 = 0" | 20 |
| "Find the condition for y = mx + c to touch" | 21 |
| "Find the tangents from the point (1, 2)" | 22 |
| "Find the normal at (3/sqrt2, sqrt2)" | 23 |
| "Find the chord of contact from (2, 3)" | 24 |
| "Find the chord whose midpoint is (2, 1)" | 25 |
| "Combined equation of the pair of tangents from ..." | 26 |
| "Find the pole of x + 2y = 4" | 27 |
| "Locus of the intersection of perpendicular tangents" | 28 |
| "Prove CP^2 + CD^2 = a^2 + b^2" | 29 |
| "Product of the perpendiculars from the foci is b^2" | 30 |
| "Locus of the midpoint of MN as the tangent moves" | 31 |
| "An arch 20 m wide and 8 m high — find the height at 5 m" | 32 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +==========================================================================+
  |                                                                          |
  |   IF YOU LEARN ONLY THREE THINGS, LEARN THESE                            |
  |                                                                          |
  |   A.  DIVIDE -> CIRCLE THE BIGGER DENOMINATOR -> read a, b, e, foci,     |
  |       directrices, LR.               (Patterns 1, 2 — 2 marks, certain)  |
  |                                                                          |
  |   B.  COMPLETE THE SQUARE on a general equation and do the same thing.   |
  |                                      (Pattern 12 — 7 marks, most-asked)  |
  |                                                                          |
  |   C.  TANGENT and NORMAL at a point and at theta, plus the condition     |
  |       c^2 = a^2 m^2 + b^2.       (Patterns 18-21 — 4 marks, very likely) |
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
     Pattern 10  focal distance
     Pattern 11  inside / outside
     Pattern 32  area, auxiliary circle
     -> secures the Section A question, 2 marks, plus 1-2 EAPCET marks.

  TIER 2 — THE 4-MARK ENGINE  (learn next)
     Pattern 6   focus + directrix + e
     Pattern 7   through two points
     Pattern 8   e + one point
     Pattern 14  prove SP + S'P = 2a
     Pattern 18  tangent at a point
     Pattern 19  tangent and normal at theta
     Pattern 20  tangent with a given slope
     Pattern 24  chord of contact
     Pattern 25  midpoint chord
     -> secures the Section B question, 4 marks.

  TIER 3 — THE 7-MARK CHOICES  (learn at least TWO of these well)
     Pattern 12  complete the square and list every element   <- do this one
     Pattern 13  derive x^2/a^2 + y^2/b^2 = 1                 <- and this one
     Pattern 21  derive the tangency condition
     Pattern 28  director circle
     Pattern 22  tangents from an external point
     Pattern 29  conjugate diameters
     -> secures the Section C question, 7 marks.
```

```
  +--------------------------------------------------------------------------+
  |  REALISTIC TARGET FROM THIS CHAPTER                                      |
  |                                                                          |
  |     Section A   2 marks      almost certain if you do Tier 1             |
  |     Section B   4 marks      very likely if you do Tier 2                |
  |     Section C   7 marks      likely if you do Patterns 12 and 13         |
  |     ------------------------------------------------------------        |
  |     TOTAL      13 marks out of 75  from ONE chapter                      |
  |                                                                          |
  |     Plus 1-2 EAPCET marks that are pure substitution.                    |
  |                                                                          |
  |     And every tangent / normal / chord technique here reappears          |
  |     UNCHANGED in Chapter 5 (Hyperbola). You are being paid twice.        |
  +--------------------------------------------------------------------------+
```

```
  THE LAST THING TO READ BEFORE YOU WALK IN

  +--------------------------------------------------------------------------+
  |   1.  Divide until the right-hand side is 1.                            |
  |   2.  a is the BIGGER one. Always.                                      |
  |   3.  b^2 = a^2 ( 1 - e^2 ).                                            |
  |   4.  Latus rectum = 2 b^2 / a  (NOT 4a — that was the parabola).       |
  |   5.  TWO foci, TWO directrices. Give both, every time.                 |
  |   6.  Tangent: halve the equation. Normal: a^2x/x1 - b^2y/y1 = a^2-b^2. |
  |   7.  c^2 = a^2 m^2 + b^2 .                                             |
  |   8.  Perpendicular tangents -> x^2 + y^2 = a^2 + b^2 .                 |
  |   9.  If e comes out bigger than 1, you swapped a and b. Go back.       |
  |  10.  Draw the sketch. It is worth a mark and it catches sign errors.   |
  +--------------------------------------------------------------------------+
```
