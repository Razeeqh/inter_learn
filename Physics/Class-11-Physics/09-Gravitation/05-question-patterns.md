# Gravitation — Every Question Pattern That Can Be Asked

**Physics 1st Year · Chapter 9**

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — STATE KEPLER'S THREE LAWS                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Kepler's laws of planetary motion."
  METHOD    1. LAW OF ORBITS  - ellipse, SUN AT ONE FOCUS.
            2. LAW OF AREAS   - equal areas in equal times, dA/dt = constant.
            3. LAW OF PERIODS - T^2 = k a^3, a = semi-major axis.
            Draw the ellipse if you have room; it costs 10 seconds.
  TRAP      Writing "the Sun is at the CENTRE". It is at a FOCUS.
            Writing "T^2 = k r^2" or "T = k a^3". It is T SQUARED = k a CUBED.
```

```
  PATTERN 2 — PROVE THE LAW OF AREAS FROM ANGULAR MOMENTUM         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Kepler's second law is a consequence of which conservation law?"
            "Show that the areal velocity of a planet is constant."
  METHOD    1. dA = (1/2) | r x dr |
            2. Divide by dt:  dA/dt = (1/2) | r x v |
            3. Put v = p/m :  dA/dt = | r x p | / 2m  =  L / 2m
            4. Gravity is CENTRAL, so torque = r x F = 0, so dL/dt = 0.
            5. Therefore dA/dt is constant.
  TRAP      Forgetting to say WHY the torque is zero (F is PARALLEL to r).
            That sentence is the whole proof; leaving it out costs 2 marks.
```

```
  PATTERN 3 — KEPLER'S THIRD LAW RATIO NUMERICAL                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A planet is 4 times as far from the Sun as the Earth. Find its
            period." / "Two satellites at radii r and 4r - ratio of periods?"
  METHOD    1. Write T1^2 / T2^2 = a1^3 / a2^3.
            2. Substitute the ratio, take the square root.
            3. Faster: T ~ a^1.5, so multiply the radius ratio by the power 1.5.
  TRAP      Using the DIAMETER instead of the radius, or the perihelion
            distance instead of the semi-major axis.
```

```
  PATTERN 4 — SPEED AT PERIHELION AND APHELION                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Where is a planet fastest?" / "v at perihelion is 30 km/s,
            find v at aphelion."
  METHOD    1. Angular momentum is conserved and v is perpendicular to r
               at both those points, so   v1 r1 = v2 r2.
            2. Solve for the unknown speed.
  TRAP      Thinking the planet is fastest when FARTHEST. It is fastest
            when NEAREST (perihelion), because r is small there.
```

```
  PATTERN 5 — DEFINE G / UNITS / DIMENSIONS                        2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define G." / "Write the SI unit and dimensional formula of G."
  METHOD    1. DEFINITION: the force between two 1 kg masses 1 m apart.
            2. VALUE: 6.67 x 10^-11
            3. UNIT: N m^2 kg^-2
            4. DIMENSIONS: [ M^-1 L^3 T^-2 ]
               (derive from G = F r^2 / m1 m2 if 2 full marks are wanted)
  TRAP      Giving g's unit (m/s^2) instead of G's. Read the capital letter.
```

```
  PATTERN 6 — VECTOR FORM OF NEWTON'S LAW                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the vector form of the law of gravitation."
            "What does the negative sign indicate?"
  METHOD    1. F21 = - ( G m1 m2 / r^2 ) r_hat , where r_hat runs m1 -> m2.
            2. State that the MINUS sign means the force is ATTRACTIVE.
            3. Add F12 = - F21 (Newton's third law).
  TRAP      Omitting the minus sign, or forgetting to say which way r_hat points.
```

```
  PATTERN 7 — FORCE BETWEEN MASSES / SUPERPOSITION              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the force between two masses." / "Three masses at the
            corners of a triangle / square - find the net force on one."
  METHOD    1. F = G m1 m2 / r^2 for EACH pair separately.
            2. Draw the direction of each force.
            3. Add them as VECTORS (parallelogram / components).
               Two equal forces at 60 deg -> sqrt(3) F
               Two equal forces at 90 deg -> sqrt(2) F
               Two equal forces at 120 deg -> F
  TRAP      Adding the magnitudes. Gravitational forces are VECTORS.
            Also: for a square, the diagonal mass is at distance a sqrt(2),
            so its force is F/2, not F.
```

```
  PATTERN 8 — DEDUCE THE INVERSE SQUARE LAW FROM KEPLER 3          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How did Newton deduce the inverse square law?"
            "Derive F ~ 1/r^2 from Kepler's third law."
  METHOD    1. Circular orbit:  F = m v^2 / r
            2. v = 2 pi r / T   ->   F = 4 pi^2 m r / T^2
            3. Put T^2 = k r^3  ->   F = ( 4 pi^2 m / k ) x 1/r^2
            4. Conclude  F ~ 1 / r^2 , then argue F ~ m and F ~ M.
  TRAP      Stopping at step 2. The whole point is SUBSTITUTING Kepler's law.
```

```
  PATTERN 9 — RELATION BETWEEN g AND G                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the relation between g and G." / "Distinguish g from G."
  METHOD    1. m g = G M m / R^2   ->   g = G M / R^2
            2. Note that m CANCELS, so all bodies fall equally fast.
            3. If a comparison is asked: G universal constant / scalar /
               [M^-1 L^3 T^-2] versus g variable / vector / [L T^-2].
  TRAP      Writing g = GM/R (forgetting the square).
```

```
  PATTERN 10 — MASS AND MEAN DENSITY OF THE EARTH                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the mass of the Earth." / "Calculate the mean density
            of the Earth from g, G and R."
  METHOD    1. M = g R^2 / G     -> 6 x 10^24 kg
            2. M = (4/3) pi R^3 rho  , so g = (4/3) pi G R rho
            3. rho = 3g / (4 pi G R)  -> 5.5 x 10^3 kg/m^3
            4. Optional mark-earner: surface rock is only 2.7 g/cm^3,
               so the core must be much denser.
  TRAP      Leaving R in km. Convert 6400 km to 6.4 x 10^6 m FIRST.
```

```
  PATTERN 11 — g ON ANOTHER PLANET                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A planet has mass 2M and radius 3R. Find g on it."
  METHOD    IF MASS IS GIVEN:      g ~ M / R^2
            IF DENSITY IS GIVEN:   g ~ R rho     (from g = (4/3) pi G R rho)
            Set up the ratio  g_p / g_e  and multiply 9.8 by it.
  TRAP      Using the mass formula when the question gave a DENSITY.
            Those two formulas move in OPPOSITE directions with R.
```

```
  PATTERN 12 — DERIVE THE VARIATION OF g WITH ALTITUDE             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How does g vary with height?" / "Derive an expression for the
            acceleration due to gravity at a height h."
  METHOD    1. Draw the Earth, the centre, R and h. (Diagram carries a mark.)
            2. Surface:  g = G M / R^2
            3. Height h: g_h = G M / (R + h)^2
            4. Divide:   g_h = g R^2 / (R + h)^2        <- EXACT
            5. Write it as g (1 + h/R)^-2, expand binomially for h << R,
               keep two terms:   g_h = g ( 1 - 2h/R )   <- APPROXIMATE
            6. State the conclusion: g DECREASES with height; g = 0 only
               at infinity; at h = R, g_h = g/4.
  TRAP      Skipping step 4 and jumping straight to the approximation.
            The examiner wants BOTH forms and the binomial step in between.
```

```
  PATTERN 13 — NUMERICAL: g AT A GIVEN HEIGHT                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find g at a height of 320 km / R / R/2."
            "At what height does g fall by 1 % / to half / to one-quarter?"
  METHOD    1. Decide WHICH FORMULA:
                 h comparable to R  (R, R/2, 2R)   ->  EXACT  g R^2/(R+h)^2
                 h small (a few km, a % change)    ->  APPROX g(1 - 2h/R)
            2. Substitute in SI units and compute.
            3. Handy results:  g/4 at h = R ; g/9 at h = 2R ;
                               1 % fall at h = 32 km.
  TRAP      Using g(1 - 2h/R) when h = R. It gives -g, which is impossible.
            If your answer for g is negative, you used the wrong formula.
```

```
  PATTERN 14 — DERIVE THE VARIATION OF g WITH DEPTH                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How does g vary with depth?" / "Show that g is zero at the
            centre of the Earth."
  METHOD    1. Draw the Earth with the body at depth d and the inner sphere
               of radius (R - d).
            2. STATE THE SHELL THEOREM: the shell above the body exerts
               NO net force, so only the inner sphere M' pulls it.
            3. M  = (4/3) pi R^3 rho ,  M' = (4/3) pi (R-d)^3 rho
            4. g = (4/3) pi G R rho  and  g_d = (4/3) pi G (R-d) rho
            5. Divide:  g_d = g ( 1 - d/R )
            6. At d = R (the centre), g = 0.
  TRAP      Forgetting to mention the shell theorem - it is the physics of
            the derivation, not just decoration.
            Writing g(1 - 2d/R). The 2 belongs to HEIGHT only.
```

```
  PATTERN 15 — NUMERICAL: g AT A GIVEN DEPTH                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find g in a mine 100 km deep." / "At what depth is g half?"
  METHOD    1. g_d = g (1 - d/R). Substitute directly - no approximation
               is ever needed, this formula is exact for a uniform Earth.
            2. Handy: g/2 at d = R/2 ; g = 0 at d = R.
  TRAP      Mixing km and m. Keep d and R in the SAME unit - the ratio d/R
            is dimensionless, so km/km is fine, but m/km is not.
```

```
  PATTERN 16 — SAME g AT A HEIGHT AND AT A DEPTH                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "At what depth is g the same as at a height h?"
            "Compare the fall in g going up and going down."
  METHOD    1. Equate:  g(1 - 2h/R) = g(1 - d/R)
            2. Get      d = 2h
            3. State the conclusion: g falls off FASTER with height than
               with depth - twice as fast for the same distance.
  TRAP      Answering d = h/2. It is DEPTH = TWICE the height.
```

```
  PATTERN 17 — VARIATION OF g WITH THE SHAPE OF THE EARTH          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is g greater at the poles than at the equator?"
            "How does the shape of the Earth affect g?"
  METHOD    1. The Earth is an OBLATE SPHEROID: flattened at the poles.
               R_equator = 6378 km ,  R_pole = 6357 km  (difference 21 km)
            2. Since g = GM/R^2 varies as 1/R^2 and R_pole is smaller,
               g_pole > g_equator.
            3. Quote 9.83 vs 9.78 m/s^2.
  TRAP      Giving only the rotation reason. A full answer must mention BOTH
            the shape effect AND the rotation effect if the question says
            "why is g greater at the poles" without qualification.
```

```
  PATTERN 18 — VARIATION OF g WITH ROTATION / LATITUDE             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How does the rotation of the Earth affect g?"
            "Derive the value of g at latitude lambda."
  METHOD    1. Draw the Earth, the axis, a body at latitude lambda, and the
               circle of radius r = R cos(lambda) that it travels in.
            2. Explain: part of gravity is used up supplying the centripetal
               force, so the apparent g is reduced.
            3. Write   g' = g - R omega^2 cos^2 ( lambda )
            4. EQUATOR (lambda = 0): reduction is MAXIMUM, R omega^2 = 0.034
               POLES  (lambda = 90): reduction is ZERO, because r = 0 there.
            5. Conclude g is maximum at the poles, minimum at the equator.
  TRAP      Writing cos instead of cos SQUARED.
            Measuring lambda from the POLE. Latitude is measured from the EQUATOR.
```

```
  PATTERN 19 — SPIN RATE FOR WEIGHTLESSNESS AT THE EQUATOR         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "At what angular speed must the Earth rotate so that bodies at
            the equator fly off / become weightless?"
  METHOD    1. Weightless means the effective g is zero:  g - R omega^2 = 0
            2. omega = sqrt( g / R ) = sqrt(9.8 / 6.4e6) = 1.24 x 10^-3 rad/s
            3. T = 2 pi / omega = 5075 s = 84.6 minutes = 1.4 hours
            4. Comment: about 17 times the present rate.
  TRAP      Using cos^2 lambda when the question already says "at the equator"
            (cos^2 0 = 1, so it just drops out). Also forgetting to convert
            the answer into a day length when the question asks for one.
```

```
  PATTERN 20 — DEFINE FIELD INTENSITY / POTENTIAL                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define gravitational field intensity / gravitational potential.
            Give its unit and dimensions."
  METHOD    FIELD INTENSITY  E = F/m = GM/r^2 , N kg^-1 , [L T^-2] , VECTOR
                             (at the Earth's surface, E = g)
            POTENTIAL        V = -GM/r , J kg^-1 , [L^2 T^-2] , SCALAR
                             (work done to bring UNIT MASS from infinity)
            RELATION         E = - dV/dr
  TRAP      Confusing POTENTIAL (per kg, J/kg) with POTENTIAL ENERGY (J).
            Dropping the minus sign in V.
```

```
  PATTERN 21 — WHY IS THE POTENTIAL ENERGY NEGATIVE?               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is gravitational potential energy negative?"
            "Why is the total energy of a satellite negative?"
  METHOD    1. We define U = 0 at INFINITE separation.
            2. Gravity is ATTRACTIVE, so as the bodies approach, gravity does
               POSITIVE work and the system LOSES potential energy.
            3. Starting at zero and losing gives a NEGATIVE value.
            4. MEANING: the body is BOUND / TRAPPED. Energy must be supplied
               from outside to separate the bodies to infinity.
  TRAP      Just saying "because of the minus sign in the formula". That is
            not a reason - it is the thing you were asked to explain.
```

```
  PATTERN 22 — WORK DONE TO LIFT A BODY / TO SEND IT TO INFINITY  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the work done in lifting a body to a height R / R/2."
            "How much work sends a body from the surface to infinity?"
            "Derive mgh from U = -GMm/r."
  METHOD    1. W = U_final - U_initial, using U = -GMm/r EVERY time.
            2. General:  W = G M m h / [ R (R + h) ]
            3. To infinity:  W = GMm/R = m g R
            4. To height h = R:  W = GMm/2R = m g R / 2
            5. For SMALL h only:  W = m g h
  TRAP      Using mgh when h is comparable to R. At h = R the true answer is
            mgR/2, exactly HALF of the naive mgh answer.
```

```
  PATTERN 23 — DERIVE THE ESCAPE VELOCITY                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define escape velocity and derive an expression for it."
            "Show that v_e = sqrt(2gR)."
  METHOD    1. DEFINITION first: the minimum velocity of projection for which
               a body just escapes and never returns.
            2. At the surface:  E = (1/2) m v_e^2  -  G M m / R
            3. "Just escapes" = reaches infinity with zero speed, so E = 0
               at infinity, and energy is conserved.
            4. (1/2) m v_e^2 = G M m / R    ->    v_e = sqrt( 2 G M / R )
            5. Put G M = g R^2  ->  v_e = sqrt( 2 g R )
            6. Substitute:  = 11.2 km/s for the Earth.
            7. Add: independent of the mass of the body AND of the direction.
  TRAP      Not stating the "reaches infinity with zero KE" condition.
            That single sentence is what makes the total energy zero.
```

```
  PATTERN 24 — ESCAPE VELOCITY OF ANOTHER PLANET / RATIOS       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A planet has mass 318 M and radius 11.2 R. Find v_e."
            "If the Earth shrank to half its radius, what happens to v_e?"
  METHOD    1. v_e ~ sqrt( M / R ).
            2. Ratio:   v_p = 11.2 x sqrt( (M_p/M_e) / (R_p/R_e) )  km/s
            3. For small percentage changes use %v = (1/2)%M - (1/2)%R.
  TRAP      Forgetting the square root, or inverting the M/R ratio.
            Quick sanity check: a planet BIGGER and DENSER than Earth must
            give a v_e LARGER than 11.2 km/s.
```

```
  PATTERN 25 — WHY THE MOON HAS NO ATMOSPHERE                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is there no atmosphere on the Moon?"
  METHOD    1. v_e on the Moon is only 2.38 km/s (small mass, small radius).
            2. The rms speed of gas molecules at the lunar surface temperature
               is comparable to or greater than this.
            3. So gas molecules escape one by one; over billions of years the
               atmosphere has been completely lost.
            4. Contrast: the Earth's 11.2 km/s far exceeds the rms speed of
               air molecules (about 0.5 km/s), so the Earth keeps its air.
  TRAP      Answering "because the Moon has no gravity". The Moon has gravity
            (g = 1.63 m/s^2). The point is that the ESCAPE VELOCITY is LOW.
```

```
  PATTERN 26 — DERIVE THE ORBITAL VELOCITY                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the orbital velocity of a satellite."
            "Find the orbital velocity at a height h."
  METHOD    1. Draw the circular orbit with the force pointing to the centre.
            2. Gravitational force = centripetal force:
                     m v_o^2 / r  =  G M m / r^2
            3. v_o = sqrt( G M / r ) = sqrt( g R^2 / (R + h) )
            4. Near the surface (h = 0):  v_o = sqrt( g R ) = 7.9 km/s
            5. State that v_o is INDEPENDENT of the satellite's own mass,
               and that HIGHER orbits are SLOWER.
  TRAP      Using r = h instead of r = R + h.
            Saying a higher satellite moves faster. It moves SLOWER.
```

```
  PATTERN 27 — TIME PERIOD AND HEIGHT OF A SATELLITE               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the time period of a satellite." / "Find the period of a
            satellite at height h." / "Find the least possible period."
  METHOD    1. T = 2 pi r / v_o  with  v_o = sqrt(GM/r)
            2. T = 2 pi sqrt( r^3 / G M )  =  2 pi sqrt( (R+h)^3 / g R^2 )
            3. Note T^2 ~ r^3 - Kepler's third law recovered.
            4. Least period (h = 0): T = 2 pi sqrt(R/g) = 84.6 minutes.
            5. For the HEIGHT from a given T:  r = ( g R^2 T^2 / 4 pi^2 )^(1/3)
               then h = r - R.
  TRAP      Forgetting to SUBTRACT R at the end when the question asks for the
            HEIGHT rather than the orbital radius. This single slip is the
            commonest error in the whole chapter.
```

```
  PATTERN 28 — GEOSTATIONARY SATELLITE CALCULATION                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the height of a geostationary satellite."
            "Calculate the orbital radius of a satellite with a 24 h period."
  METHOD    1. T = 24 h = 86 400 s.
            2. r = ( G M T^2 / 4 pi^2 )^(1/3)  =  4.23 x 10^7 m
            3. h = r - R = 42 300 - 6 400 = 35 900 km, i.e. about 36 000 km.
            4. v = 2 pi r / T = 3.08 km/s.
  TRAP      Quoting 36 000 km as the ORBITAL RADIUS. 36 000 km is the HEIGHT;
            the radius from the Earth's centre is 42 400 km.
```

```
  PATTERN 29 — ENERGY OF AN ORBITING SATELLITE                     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the KE, PE and total energy of a satellite."
            "What is the binding energy of a satellite?"
            "Why is the total energy negative?"
  METHOD    1. From the orbit condition,  m v_o^2 = G M m / r
            2. KE = (1/2) m v_o^2 = + G M m / 2r
            3. PE = - G M m / r
            4. TE = KE + PE = - G M m / 2r  =  - KE  =  PE / 2
            5. Binding energy = |TE| = G M m / 2r
            6. Explain the negative sign: the satellite is BOUND.
  TRAP      Writing KE = (1/2) m v_e^2. An orbiting satellite moves at v_o,
            not v_e. Also: if your total energy comes out positive, you have
            dropped a minus sign somewhere.
```

```
  PATTERN 30 — GEOSTATIONARY versus POLAR SATELLITE                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between geostationary and polar satellites."
            "What is a geostationary satellite? Give its uses."
  METHOD    1. GEOSTATIONARY: four conditions - T = 24 h, equatorial plane,
               west to east, circular orbit. h = 36 000 km, v = 3.08 km/s.
               Appears FIXED in the sky.
               Uses: TV / DTH, telecom, weather over a fixed region.
               (INSAT, GSAT). Three of them 120 deg apart cover the globe.
            2. POLAR: passes over both poles, h = 500-800 km, T about 100 min,
               v about 7.5 km/s, scans the whole Earth daily.
               Uses: remote sensing, mapping, detailed weather, spying.
               (IRS, CARTOSAT, OCEANSAT).
            3. Answer as a TABLE - it is faster and reads better.
  TRAP      Saying a geostationary satellite is "stationary". It moves at
            3.08 km/s; it only APPEARS still because we move with it.
```

```
  PATTERN 31 — WEIGHTLESSNESS                                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why does an astronaut feel weightless?" / "What does a weighing
            machine read in a freely falling lift?" / "Explain weightlessness."
  METHOD    1. Define: apparent weight = the NORMAL REACTION N, not mg.
            2. Lift:  N = m ( g +/- a ).  In free fall a = g, so N = 0.
            3. Satellite: its centripetal acceleration equals the local g_h,
               and the astronaut has the same acceleration, so
                     N = m ( g_h - g_h ) = 0.
            4. STATE CLEARLY that gravity is NOT zero - only the contact
               force has vanished. At 400 km, g is still about 8.7 m/s^2.
            5. Give the four lift cases in a table if 4 marks are asked.
  TRAP      Answering "there is no gravity in space". This is the single most
            penalised wrong answer in the chapter.
```

```
  PATTERN 32 — SHELL THEOREMS                                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is the force on a point mass inside a spherical shell?"
            "Why do we measure r from the centre of the Earth?"
  METHOD    1. OUTSIDE: the shell acts as if all its mass were at the CENTRE.
            2. INSIDE:  the net force is ZERO (but the potential is CONSTANT
               at -GM/R, NOT zero).
            3. A solid sphere is a stack of shells, so the whole Earth acts
               like a point mass at its centre for anything outside it -
               which is why r is measured from the centre.
            4. Theorem 2 is what makes g fall off with depth.
  TRAP      Saying the POTENTIAL inside a shell is zero. The FIELD is zero;
            the potential is constant and negative.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right-hand column and try.

| Question stem you see in the paper | Pattern |
|---|---|
| "State the laws of planetary motion." | 1 |
| "Show that the areal velocity of a planet is constant." | 2 |
| "A planet is 9 times as far from the Sun as the Earth. Its period is?" | 3 |
| "Where in its orbit does a planet move fastest?" | 4 |
| "Write the dimensional formula of G." | 5 |
| "What does the negative sign in the vector form indicate?" | 6 |
| "Four masses at the corners of a square - find the net force on one." | 7 |
| "How did Newton arrive at the inverse square law?" | 8 |
| "Write the relation between g and G." | 9 |
| "Calculate the mean density of the Earth." | 10 |
| "A planet has the same density as the Earth but twice the radius..." | 11 |
| "Derive the expression for g at a height h." | 12 |
| "At what height does g become one-fourth of its value?" | 13 |
| "Prove that g is zero at the centre of the Earth." | 14 |
| "Find g in a mine 200 km deep." | 15 |
| "At what depth is g equal to its value at a height of 5 km?" | 16 |
| "Why is g greater at the poles?" (shape part) | 17 |
| "Derive g at latitude lambda." | 18 |
| "How fast must the Earth spin for bodies at the equator to fly off?" | 19 |
| "Define gravitational potential and give its unit." | 20 |
| "Why is the potential energy of a two-body system negative?" | 21 |
| "Find the work done in raising a body to a height R." | 22 |
| "Define escape velocity and derive an expression for it." | 23 |
| "The escape velocity from a planet of mass 4M and radius 2R is..." | 24 |
| "Why is there no air on the Moon?" | 25 |
| "Derive the orbital velocity of a satellite." | 26 |
| "Find the least possible period of an Earth satellite." | 27 |
| "Calculate the height of a satellite with a 24-hour period." | 28 |
| "Show that the total energy of a satellite is negative." | 29 |
| "Distinguish geostationary from polar satellites." | 30 |
| "What does a weighing machine read in a falling lift?" | 31 |
| "What is the gravitational field inside a hollow sphere?" | 32 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  STEP 1   MEMORISE THESE FIVE LINES. Nothing else. Twenty minutes.
  ------------------------------------------------------------------------
           g   =  G M / R^2            so       G M  =  g R^2
           g_h =  g ( 1 - 2h/R )       g_d  =  g ( 1 - d/R )
           v_e =  sqrt( 2 g R )        =  11.2 km/s
           v_o =  sqrt( G M / r )      =  7.9 km/s near the surface
           TE  =  - G M m / 2r         =  - KE

           Expected return: about 4 marks from Section A alone.
```

```
  STEP 2   WRITE OUT FOUR DERIVATIONS BY HAND, TWICE EACH. One evening.
  ------------------------------------------------------------------------
           PATTERN 12   variation of g with altitude
           PATTERN 14   variation of g with depth
           PATTERN 23   escape velocity
           PATTERN 26   orbital velocity + PATTERN 27 time period

           One of these four is almost certainly your Section B question.
           Expected return: 4 marks.
```

```
  STEP 3   LEARN THE FOUR "TALKING" ANSWERS. Thirty minutes.
  ------------------------------------------------------------------------
           PATTERN 1    Kepler's three laws
           PATTERN 21   why PE / total energy is negative
           PATTERN 25   why the Moon has no atmosphere
           PATTERN 31   weightlessness (N = 0, NOT zero gravity)

           These need no calculation at all and are pure recall.
           Expected return: 2 to 4 marks.
```

```
  STEP 4   DRILL TEN NUMERICALS. One hour.
  ------------------------------------------------------------------------
           Three on g at a height or a depth      (patterns 13, 15)
           Two on escape velocity ratios          (pattern 24)
           Two on orbital velocity / period       (patterns 26, 27)
           Two on satellite energy                (pattern 29)
           One geostationary calculation          (pattern 28)
```

```
  +----------------------------------------------------------------------+
  |  TOTAL REALISTIC HAUL FROM THIS CHAPTER:  6 to 10 marks out of 60,   |
  |  for roughly three hours of work. That is one of the best            |
  |  marks-per-hour returns in the whole Physics paper.                  |
  +----------------------------------------------------------------------+
```

**The three things that lose the most marks in this chapter, in order:**

```
  1.  Using r = h instead of r = R + h  (or forgetting to subtract R
      at the end of a satellite-height problem).
  2.  Putting the factor 2 in the DEPTH formula, or leaving it out of
      the HEIGHT formula.
  3.  Answering "there is no gravity in space" for weightlessness.
```

Fix those three habits and you will not lose a single mark in Gravitation.
