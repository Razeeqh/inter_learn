# Motion in a Plane — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — SCALAR OR VECTOR? / TYPES OF VECTORS                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between a scalar and a vector."
            "Define unit / null / equal / collinear / coplanar /
             position vector."
            "Is electric current a scalar or a vector?"
  METHOD    1. Give the DEFINITION in one clean sentence.
            2. Give ONE example.
            3. If asked "why", say: vectors obey the parallelogram law
               of addition; scalars do not.
  TRAP      Current is a SCALAR even though it has a direction.
            Never write "a vector has direction" alone - it must also
            add by the parallelogram law.
```

```
  PATTERN 2 — FIND A UNIT VECTOR / MAGNITUDE OF A GIVEN VECTOR    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the unit vector along A = 3i + 4j - 12k."
            "Find the magnitude of ..."
  METHOD    1. | A | = sqrt( Ax^2 + Ay^2 + Az^2 )
            2. A-hat = A / | A |
            3. CHECK: the squares of the components of A-hat must add to 1.
  TRAP      A unit vector has NO unit. Do not attach newton or metre to it.
            Watch the minus signs; they square away, but the final unit
            vector must keep them.
```

```
  PATTERN 3 — DISPLACEMENT FROM TWO POSITION VECTORS              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A particle moves from (2,3) to (6,6). Find the displacement."
  METHOD    1. dr = r2 - r1 , component by component.
            2. Magnitude = sqrt( dx^2 + dy^2 ).
            3. Direction: tan theta = dy / dx.
  TRAP      Always r(final) MINUS r(initial). Reversing it flips the sign.
            Displacement is NOT the path length.
```

```
  PATTERN 4 — STATE AND DERIVE THE PARALLELOGRAM LAW           4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the parallelogram law and derive the magnitude of
            the resultant."
  METHOD    1. Write the STATEMENT (1 mark).
            2. Draw the labelled parallelogram OACB with CD perpendicular
               to OA produced (1 mark).
            3. AC = OB = B , angle CAD = theta.
            4. CD = B sin theta , AD = B cos theta.
            5. OC^2 = OD^2 + CD^2 = (A + B cos t)^2 + (B sin t)^2.
            6. Expand and use sin^2 + cos^2 = 1.
            7. R = sqrt( A^2 + B^2 + 2AB cos theta ).
            8. tan alpha = B sin theta / ( A + B cos theta ).
  TRAP      Missing the figure loses a whole mark. Draw it FIRST.
            Do not forget the direction part if the question says
            "magnitude AND direction".
```

```
  PATTERN 5 — NUMERICAL RESULTANT OF TWO VECTORS                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two forces of 5 N and 12 N act at 90 degrees. Find R."
  METHOD    1. R = sqrt( A^2 + B^2 + 2AB cos theta ).
            2. tan alpha = B sin theta / ( A + B cos theta ).
            3. State BOTH magnitude and direction.
  TRAP      cos 120 = -0.5 , not +0.5. Sign errors here are fatal.
            Give the direction relative to a NAMED vector.
```

```
  PATTERN 6 — MAXIMUM / MINIMUM RESULTANT                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the maximum and minimum resultant of ..."
            "Which of these cannot be the resultant?"
            "The max and min resultants are 17 and 7. Find the forces."
  METHOD    R(max) = A + B  at theta = 0
            R(min) = | A - B |  at theta = 180
            Any possible R lies between them.
            For the "find the forces" version: solve A+B and A-B
            simultaneously.
  TRAP      R(min) is |A - B|, with the modulus. It is never negative.
```

```
  PATTERN 7 — SPECIAL ANGLE CONDITIONS                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "When is |A+B| = |A-B| ?"
            "Two equal forces have a resultant equal to either. Find
             the angle."
            "The resultant of two equal vectors is A sqrt(2). Find theta."
  METHOD    Use  R = 2 A cos ( theta / 2 )  for EQUAL vectors, or square
            both sides of the given condition and cancel.
            Memorised results for two equal vectors of magnitude A:
                R = 2A       -> theta = 0
                R = A sqrt3  -> theta = 60
                R = A sqrt2  -> theta = 90
                R = A        -> theta = 120
                R = 0        -> theta = 180
  TRAP      theta/2 versus theta. Halve it once, not twice.
```

```
  PATTERN 8 — RESOLUTION OF A VECTOR INTO COMPONENTS              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is meant by resolution of a vector? Obtain the
            rectangular components of a vector in a plane."
            "Resolve a force of 50 N at 30 degrees."
  METHOD    1. Define resolution.
            2. Draw the vector with perpendiculars onto the axes.
            3. Ax = A cos theta , Ay = A sin theta.
            4. A = Ax i + Ay j , A = sqrt(Ax^2 + Ay^2), tan th = Ay/Ax.
            5. Extend to 3-D if asked, with direction cosines.
  TRAP      cos goes with the side ADJACENT to the marked angle.
            If the angle is measured from the y-axis the sin and cos
            SWAP. Read the diagram before writing.
```

```
  PATTERN 9 — ADD SEVERAL VECTORS BY COMPONENTS                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three or more forces given with different angles.
  METHOD    1. Make a small table: vector | x-component | y-component.
            2. Rx = sum of x , Ry = sum of y.
            3. R = sqrt( Rx^2 + Ry^2 ) , tan theta = Ry / Rx.
  TRAP      Left is negative x. Down is negative y. Losing a minus sign
            here is the single commonest error in the chapter.
```

```
  PATTERN 10 — DOT AND CROSS PRODUCT NUMERICALS                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between A and B."
            "For what value of m are these vectors perpendicular?"
            "Find the area of the parallelogram / triangle formed by ..."
  METHOD    Angle          : cos theta = (A . B) / ( |A| |B| )
            Perpendicular  : A . B = 0
            Parallel       : A x B = 0
            Parallelogram area = | A x B |
            Triangle area      = (1/2) | A x B |
  TRAP      A . B gives a NUMBER, A x B gives a VECTOR. Never write
            "A x B = 5". Always check your cross product by dotting it
            with A and with B - both must give zero.
```

```
  PATTERN 11 — VECTOR EQUATIONS OF MOTION IN A PLANE              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "u = 3i + 4j , a = 2i - j . Find v and r after 2 s."
  METHOD    1. v = u + a t     (add component by component)
            2. r = u t + (1/2) a t^2
            3. Speed = | v | , direction = tan theta = vy / vx.
  TRAP      Do NOT use v^2 = u^2 + 2as in vector form - it does not
            exist. Apply it one axis at a time only.
```

```
  PATTERN 12 — SHOW THAT THE PATH OF A PROJECTILE IS A PARABOLA   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the trajectory of a projectile is a parabola."
            "Derive the equation of the trajectory."
  METHOD    1. ux = u cos theta , uy = u sin theta , ax = 0 , ay = -g.
            2. x = (u cos theta) t   ->   t = x / (u cos theta).
            3. y = (u sin theta) t - (1/2) g t^2.
            4. Substitute for t.
            5. y = x tan theta - g x^2 / ( 2 u^2 cos^2 theta ).
            6. State: second degree in x, first degree in y, therefore
               a PARABOLA.
  TRAP      Step 6 is a mark on its own. Write the conclusion sentence.
            Keep the minus sign in front of the x^2 term.
```

```
  PATTERN 13 — DERIVE T, H AND R FOR AN ANGLED PROJECTILE      4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive expressions for the time of flight, maximum height
            and horizontal range of a projectile."
  METHOD    T : net vertical displacement is zero
                 0 = (u sin t)T - (1/2)gT^2   ->  T = 2u sin t / g
            H : vertical velocity is zero at the top
                 0 = u^2 sin^2 t - 2gH        ->  H = u^2 sin^2 t / 2g
            R : R = (u cos t) x T             ->  R = u^2 sin 2t / g
                 using 2 sin t cos t = sin 2t
  TRAP      When you divide by T remember to say "T is not zero".
            For R you MUST show the sin 2theta step; writing the final
            formula straight away loses a mark.
```

```
  PATTERN 14 — MAXIMUM RANGE AND THE 45 DEGREE RESULT             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the range is maximum at 45 degrees."
            "At what angle is the range maximum?"
  METHOD    1. R = u^2 sin 2theta / g , with u and g fixed.
            2. R is maximum when sin 2theta is maximum, i.e. equal to 1.
            3. 2 theta = 90  ->  theta = 45 degrees.
            4. R(max) = u^2 / g ; and at 45 deg, H = R(max) / 4.
  TRAP      Say WHY sin 2theta = 1 is the maximum (the sine of any angle
            can never exceed 1). Do not just assert 45 degrees.
```

```
  PATTERN 15 — TWO ANGLES GIVE THE SAME RANGE                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that theta and (90 - theta) give the same range."
            "A projectile has the same range at 20 deg. What is the
             other angle?"
  METHOD    1. Write R for theta.
            2. Write R for (90 - theta) and simplify the argument to
               sin(180 - 2theta).
            3. Use sin(180 - x) = sin x, so the two ranges are equal.
            4. Add: the larger angle gives a greater H and a longer T.
  TRAP      The identity sin(180 - x) = sin x is the whole proof.
            Quote it explicitly.
            Related results worth adding: R = 4 sqrt(h1 h2), T1T2 = 2R/g.
```

```
  PATTERN 16 — NUMERICAL ON T, H AND R                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body is projected with 98 m/s at 30 degrees. Find ..."
  METHOD    1. Write down u, theta, g.
            2. Compute sin theta, cos theta, sin 2theta first.
            3. Substitute into T, H, R one at a time.
            4. CHECK with R = (u cos theta) x T.
  TRAP      Calculator in DEGREE mode. Units on every answer
            (s , m , m). Do not mix g = 9.8 and g = 10 in the same
            question.
```

```
  PATTERN 17 — WORK BACKWARDS FROM H, R OR T                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The range is 4 times the maximum height. Find theta."
            "The maximum range is 100 m. Find u and H."
            "The time of flight is 4 s. Find H."
  METHOD    tan theta = 4 H / R
            R(max) = u^2 / g       (only at 45 degrees)
            H = g T^2 / 8
            H = R / 4              (only at 45 degrees)
  TRAP      R(max) = u^2/g applies ONLY at 45 degrees. Do not use it for
            a general angle.
```

```
  PATTERN 18 — VELOCITY / SPEED AT A GIVEN INSTANT OR POINT       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the velocity of the projectile after 2 s."
            "What is the speed at the highest point?"
            "Find the kinetic energy at the top."
  METHOD    1. vx = u cos theta (always).
            2. vy = u sin theta - g t.
            3. v = sqrt( vx^2 + vy^2 ) , tan beta = vy / vx.
            At the TOP : v = u cos theta , KE = E cos^2 theta.
            On LANDING : speed = u, angle theta below the horizontal.
  TRAP      The velocity at the top is NOT zero. Only vy is zero.
            The acceleration at the top is still g downwards.
```

```
  PATTERN 19 — HORIZONTAL PROJECTILE FROM A HEIGHT            4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body is thrown horizontally from a tower of height h."
            "A bomb is released from an aeroplane flying horizontally."
            "A ball rolls off a table."
  METHOD    1. uy = 0 , ux = u , ay = g (down positive).
            2. y = (1/2) g x^2 / u^2   ->  half a parabola.
            3. T = sqrt( 2h / g )      (independent of u).
            4. R = u T = u sqrt(2h/g).
            5. v = sqrt( u^2 + 2 g h ) , tan beta = sqrt(2gh) / u.
  TRAP      The initial VERTICAL velocity is ZERO, not u.
            Do not use T = 2u sin theta / g here.
            To the pilot the bomb falls straight down; to a ground
            observer it follows a parabola.
```

```
  PATTERN 20 — TWO BODIES, ONE DROPPED ONE PROJECTED              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "One ball is dropped, another is fired horizontally from
            the same height. Which lands first?"
  METHOD    Both have uy = 0 and fall the same h, so both take
            T = sqrt(2h/g). THEY LAND TOGETHER.
            State the reason: horizontal and vertical motions are
            INDEPENDENT.
  TRAP      The answer is "same time", not "the dropped one".
            The DISTANCES are different; the times are not.
```

```
  PATTERN 21 — ANGULAR QUANTITIES: DEFINE AND CONVERT             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define angular velocity / angular acceleration."
            "Find the angular velocity of the seconds hand / the Earth."
            "A wheel turns at 300 rpm. Find omega."
  METHOD    omega = d theta / dt = 2 pi / T = 2 pi n
            From rpm:  omega = 2 pi N / 60 = pi N / 30
            alpha = d omega / dt
            Units: rad/s and rad/s^2 ; dimensions [T^-1] and [T^-2].
  TRAP      omega must be in rad/s in every formula. Convert rpm first.
            Radian is dimensionless, so omega has dimensions of 1/time.
```

```
  PATTERN 22 — DERIVE v = r omega AND a = v^2 / r             4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for centripetal acceleration."
            "Show that v = r omega."
  METHOD    v = r omega : differentiate s = r theta with respect to t.
            a_c : 1. Draw the position triangle OPQ and the velocity
                     triangle for v1 and v2.
                  2. Both are isosceles with the same apex angle
                     d.theta, hence SIMILAR.
                  3. |dv| / v = |dr| / r.
                  4. Divide by dt and let dt -> 0.
                  5. a_c = v^2 / r = r omega^2 = v omega.
                  6. Direction: towards the centre.
  TRAP      The direction statement carries a mark. Say "along the
            radius, towards the centre".
            Explain WHY the triangles are similar (each velocity is
            perpendicular to its own radius).
```

```
  PATTERN 23 — NUMERICAL ON CIRCULAR MOTION                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A stone on a 0.5 m string is whirled at 10 rev/s. Find ..."
            "A car goes round a bend of radius 100 m at 20 m/s. Find a."
  METHOD    omega = 2 pi n  ->  v = r omega  ->  a = v^2/r = r omega^2
            T = 1/n = 2 pi / omega
            Shortcut when n is given: a = 4 pi^2 n^2 r
            ALWAYS cross-check with the other formula for a.
  TRAP      r must be in METRES. A 50 cm string is r = 0.5 m.
            Do not forget that a is directed towards the centre.
```

```
  PATTERN 24 — UNIFORM vs NON-UNIFORM CIRCULAR MOTION             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain non-uniform circular motion."
            "A particle has a_t = 3 and a_r = 4. Find the net a."
            "Why is uniform circular motion an accelerated motion?"
  METHOD    a_r = v^2/r  - changes the DIRECTION of v, points inward.
            a_t = dv/dt = r alpha - changes the SPEED, along the tangent.
            a = sqrt( a_r^2 + a_t^2 ) , tan phi = a_t / a_r.
            UCM: speed constant, velocity NOT constant, so accelerated.
  TRAP      "Constant speed" does not mean "no acceleration".
            In UCM a_t = 0 but a_r is never zero.
```

```
  PATTERN 25 — CENTRIPETAL FORCE DOES NO WORK                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Does the centripetal force do work?"
            "Why does the speed stay constant in UCM?"
  METHOD    The force is perpendicular to the displacement at every
            instant, so W = F s cos 90 = 0. No work -> no change in
            kinetic energy -> constant speed.
  TRAP      The answer is NO. Give the cos 90 reason, not just "no".
```

```
  PATTERN 26 — RELATIVE VELOCITY IN A PLANE                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two cars move east and north. Find the relative velocity."
            "Define relative velocity."
  METHOD    1. v(AB) = v(A) - v(B).
            2. Write both in i, j form and subtract.
            3. Magnitude and direction of the result.
            4. Or use | v(AB) | = sqrt(vA^2 + vB^2 - 2 vA vB cos theta).
  TRAP      A minus B, in that order. v(BA) is the exact opposite.
            Reversing the order reverses the direction.
```

```
  PATTERN 27 — RIVER-BOAT CROSSING                            4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "A boat crosses a river of width d ..."
            "In which direction must the boat be rowed to land directly
             opposite?"
  METHOD    READ THE QUESTION: which of the two cases is it?
            SHORTEST TIME (row straight across):
                 t = d / v_b ,  drift = v_r d / v_b ,
                 resultant speed = sqrt( v_b^2 + v_r^2 )
            SHORTEST PATH (land directly opposite):
                 sin theta = v_r / v_b  (upstream of the normal)
                 t = d / sqrt( v_b^2 - v_r^2 )
                 needs v_b > v_r
  TRAP      These two are different questions with different answers.
            "Shortest time" -> divide by v_b.
            "Directly opposite" -> divide by sqrt(v_b^2 - v_r^2).
            The shortest PATH always takes LONGER than the shortest TIME.
```

```
  PATTERN 28 — RAIN AND UMBRELLA                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Rain falls vertically at v_r. A man walks at v_m. At what
            angle must he hold his umbrella?"
  METHOD    1. v(rain rel. man) = v(rain) - v(man).
            2. Draw v_r downwards and v_m reversed (backwards).
            3. | v(rel) | = sqrt( v_r^2 + v_m^2 ).
            4. tan theta = v_m / v_r , measured from the VERTICAL.
            5. State: tilt FORWARD, in the direction of walking.
  TRAP      FORWARD, not backwards. And the angle is from the VERTICAL,
            not from the horizontal.
```

```
  PATTERN 29 — TRAJECTORY EQUATION GIVEN, FIND R / H / theta      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The path of a projectile is y = 10x - 5x^2. Find ..."
  METHOD    Compare with y = a x - b x^2 :
                 tan theta = a
                 R = a / b
                 H = a^2 / ( 4 b )
                 u^2 cos^2 theta = g / ( 2 b )
  TRAP      Do NOT differentiate unless you have to. The three boxed
            results above are faster and are worth memorising.
```

```
  PATTERN 30 — CONCEPTUAL ONE-LINERS                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the velocity at the highest point?"
            "What is the acceleration at the highest point?"
            "Can the resultant of two unequal vectors be zero?"
            "What remains constant in uniform circular motion?"
  METHOD    Learn these by heart:
              velocity at top       = u cos theta (horizontal, not zero)
              acceleration at top   = g , downwards
              two unequal vectors   -> resultant can NEVER be zero
              UCM                   -> only the SPEED is constant
              projectile path       -> parabola
              horizontal projectile -> half a parabola
  TRAP      These are free marks. Losing them is unforgivable.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------------+----------+
  |  QUESTION STEM                                           | PATTERN  |
  +----------------------------------------------------------+----------+
  |  "Find the unit vector along 2i - 3j + 6k"               |    2     |
  |  "Is current a scalar or a vector?"                      |    1     |
  |  "State the parallelogram law and derive R"              |    4     |
  |  "Two forces 7 N and 24 N at 90 degrees"                 |    5     |
  |  "Which cannot be the resultant of 3 and 5?"             |    6     |
  |  "|A + B| = |A - B|. Find the angle."                    |    7     |
  |  "Resolve a 100 N force at 60 degrees"                   |    8     |
  |  "Four forces act at a point. Find the resultant."       |    9     |
  |  "For what m are these vectors perpendicular?"           |   10     |
  |  "u = 2i + 3j, a = i - j. Find r after 3 s."             |   11     |
  |  "Show that the path of a projectile is a parabola"      |   12     |
  |  "Derive the time of flight and the range"               |   13     |
  |  "At what angle is the range maximum?"                   |   14     |
  |  "Same range at 25 degrees. What is the other angle?"    |   15     |
  |  "u = 49 m/s at 30 degrees. Find T, H and R."            |   16     |
  |  "R = 4H. Find the angle of projection."                 |   17     |
  |  "Speed of the projectile at the highest point"          |   18     |
  |  "A bomb is dropped from an aeroplane"                   |   19     |
  |  "Which ball reaches the ground first?"                  |   20     |
  |  "A fan rotates at 1200 rpm. Find omega."                |   21     |
  |  "Derive an expression for centripetal acceleration"     |   22     |
  |  "A stone on a 1 m string at 4 rev/s. Find a."           |   23     |
  |  "a_t = 6, a_r = 8. Find the net acceleration."          |   24     |
  |  "Does the centripetal force do work?"                   |   25     |
  |  "Car A east at 40, car B north at 30. Relative speed?"  |   26     |
  |  "In which direction must the boat be rowed?"            |   27     |
  |  "At what angle must the man hold his umbrella?"         |   28     |
  |  "y = 8x - 2x^2. Find the range."                        |   29     |
  |  "Acceleration of a projectile at the highest point"     |   30     |
  +----------------------------------------------------------+----------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  TARGET: 14 of the 60 marks from this one chapter.

  +-------------------------------------------------+---------+----------+
  |  WHAT TO LEARN                                  |  TIME   |  MARKS   |
  +-------------------------------------------------+---------+----------+
  |  STAGE 1  (do this first, it is the biggest)    |         |          |
  |    Pattern 12 + 13 + 14 + 15                    |         |          |
  |    = the full projectile long answer            |  3 hrs  |    8     |
  +-------------------------------------------------+---------+----------+
  |  STAGE 2                                        |         |          |
  |    Pattern 4  parallelogram law derivation      |         |          |
  |    (the backup Section C answer)                |  1 hr   |   4-8    |
  +-------------------------------------------------+---------+----------+
  |  STAGE 3                                        |         |          |
  |    Patterns 1, 2, 6, 7, 18, 30                  |         |          |
  |    = all the 2-mark recall questions            |  1 hr   |    4     |
  +-------------------------------------------------+---------+----------+
  |  STAGE 4                                        |         |          |
  |    Pattern 22  centripetal acceleration         |         |          |
  |    Pattern 19  horizontal projectile            |  2 hrs  |    4     |
  +-------------------------------------------------+---------+----------+
  |  STAGE 5  (only if time permits)                |         |          |
  |    Patterns 27 and 28 river boat / rain         |  1 hr   |    4     |
  +-------------------------------------------------+---------+----------+
```

```
  THE MINIMUM VIABLE VERSION
  If you have one evening and nothing else:

    1.  Write out the projectile derivation (parabola + T + H + R)
        three times from memory.
    2.  Write out the parallelogram law derivation twice.
    3.  Memorise the six one-liners in Pattern 30.

  That alone is worth about 12 marks and takes one evening.
  The pass mark for the whole paper is 21.
```

```
  IN THE EXAM HALL, IN THIS ORDER:

    1.  Write the three key formula boxes on the rough sheet.
    2.  Answer every Section A question from this chapter first -
        they are the fastest marks in the paper.
    3.  Choose the projectile question in Section C. Draw the
        diagram before writing anything.
    4.  Box every final answer and write its unit.
```
