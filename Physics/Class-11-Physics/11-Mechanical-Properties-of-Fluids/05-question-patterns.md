# Mechanical Properties of Fluids — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

# PART A — FLUID STATICS

```
  PATTERN 1 — DEFINE THRUST / PRESSURE / DENSITY                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define thrust and pressure." / "Is pressure a scalar?"
  METHOD    1. Thrust = total NORMAL force, unit N, a VECTOR.
            2. Pressure = thrust per unit area, P = F/A,
               unit pascal, a SCALAR.
            3. Dimensions [ M L^-1 T^-2 ].
  TRAP      Forgetting to say pressure is a SCALAR, and forgetting the
            reason: a fluid at rest pushes EQUALLY in all directions,
            so pressure has no unique direction.
```

```
  PATTERN 2 — DERIVE THE PRESSURE AT A DEPTH                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive P = P0 + h rho g." / "Show that the pressure in a
            liquid increases with depth."
  METHOD    1. DRAW an imaginary cylinder of liquid, area A, height h,
               top at the free surface.
            2. Forces: P0 A down, weight m g down, P A up.
            3. Equilibrium:  P A = P0 A + m g.
            4. Put m = A h rho.
            5. Divide by A  ->  P = P0 + h rho g.
            6. Add: it depends only on DEPTH, not on the shape.
  TRAP      Losing the diagram mark. Also, forgetting that the question
            may want the GAUGE pressure (h rho g), not the absolute one.
```

```
  PATTERN 3 — GAUGE vs ABSOLUTE PRESSURE (numerical)              2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the pressure at a depth of ... m" / "a tyre gauge reads..."
  METHOD    1. Gauge   = h rho g
            2. Absolute = P0 + h rho g , with P0 = 1.013 x 10^5 Pa
            3. Convert every length to METRES first.
  TRAP      Reading "pressure" and automatically writing the gauge value.
            Read the word ABSOLUTE / TOTAL carefully.
```

```
  PATTERN 4 — U-TUBE WITH TWO LIQUIDS                             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A column of oil of height ... balances a column of water..."
  METHOD    1. Mark the COMMON LEVEL — the highest level at which the
               SAME liquid is present in both arms.
            2. Equate the pressures there:   h1 rho1  =  h2 rho2
            3. Solve for the unknown density or height.
  TRAP      Equating the pressures at the wrong level. Always work from
            the lowest point where one liquid meets the other.
```

```
  PATTERN 5 — BAROMETER                                           2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the mercury barometer." / "Why not water?" /
            "The tube is tilted..."
  METHOD    1. Diagram: inverted tube, vacuum at the top, trough below.
            2. Equate the pressures at the two points on the SAME level
               in the trough:  0 + h rho g = P0.
            3. So P0 = h rho g , h = 0.76 m of mercury.
            4. For water:  h = 10.34 m -> impractically tall.
  TRAP      TILTING the tube does not change the reading. The VERTICAL
            height stays 76 cm; only the length ALONG the tube grows,
            to 76 / cos(angle from the vertical).
```

```
  PATTERN 6 — MANOMETER                                           2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of an open-tube manometer." /
            "The mercury levels differ by ... cm. Find the gas pressure."
  METHOD    1. Diagram: gas vessel on one arm, atmosphere on the other.
            2. Mark two points at the SAME level.
            3. P_gas = P0 + h rho g  if the liquid is higher on the OPEN side.
               P_gas = P0 - h rho g  if it is higher on the GAS side.
  TRAP      Getting the sign backwards. Ask: "is the gas pushing the
            liquid DOWN on its own side? Then the gas is at the higher
            pressure."
```

```
  PATTERN 7 — STATE PASCAL'S LAW                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Pascal's law." / "Name two applications."
  METHOD    1. Statement: a change of pressure applied to an ENCLOSED
               fluid at rest is transmitted UNDIMINISHED to every point
               of the fluid and to the walls.
            2. Applications: hydraulic lift, hydraulic brakes,
               hydraulic press / jack, dentist's chair.
  TRAP      Leaving out the word ENCLOSED or the word UNDIMINISHED.
            Those two words carry the mark.
```

```
  PATTERN 8 — HYDRAULIC LIFT / PRESS / BRAKE (theory)             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the working of a hydraulic lift / hydraulic brakes."
  METHOD    1. State Pascal's law.
            2. DRAW the two pistons and the enclosed liquid.
            3. P = F1/a1 is transmitted undiminished.
            4. F2 = P a2 = F1 (a2/a1) , with a2 >> a1.
            5. Mechanical advantage = a2/a1.
            6. For BRAKES, add the key sentence: the same pressure
               reaches all four wheels, so braking is EQUAL and the
               vehicle does not skid.
  TRAP      Forgetting to say that energy is NOT created:
            a1 d1 = a2 d2 , so F1 d1 = F2 d2.
```

```
  PATTERN 9 — HYDRAULIC LIFT NUMERICAL                            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Pistons of radii / areas ... . Find the force / the distance."
  METHOD    1. F1/a1 = F2/a2.
            2. If RADII are given, F2/F1 = (r2/r1)^2 — SQUARE the ratio.
            3. For distances, a1 d1 = a2 d2.
            4. Check with F1 d1 = F2 d2.
  TRAP      Using the ratio of the RADII instead of the ratio of the
            AREAS. Radii 1:3 gives a force ratio of 1:9, not 1:3.
```

```
  PATTERN 10 — ARCHIMEDES' PRINCIPLE / APPARENT WEIGHT            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body weighs W1 in air and W2 in water. Find its density."
  METHOD    1. Fb = W_air - W_liquid  (loss of weight)
            2. Fb = V rho_liquid g   ->  gives V.
            3. rho_body = (W_air/g) / V.
            4. SHORTCUT: rho_body = rho_liquid x W_air/(W_air - W_liquid)
  TRAP      Confusing "loss of weight" with "apparent weight".
            LOSS = Fb.   APPARENT = W - Fb.
```

```
  PATTERN 11 — FLOATATION AND THE FRACTION SUBMERGED              2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "What fraction of an iceberg is above water?" /
            "A block floats with x % above."
  METHOD    1. V_sub / V  =  rho_body / rho_liquid.
            2. Fraction ABOVE = 1 - rho_body/rho_liquid.
            3. If the liquid changes, the body's density is unchanged —
               reuse it.
  TRAP      Answering the fraction ABOVE when they asked for the fraction
            SUBMERGED, or the other way round. Underline the word in the
            question before you start.
```

```
  PATTERN 12 — CONCEPTUAL FLOATATION PUZZLE                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Ice melts in a beaker — does the level change?" /
            "A stone is dropped from a boat — does the level change?"
  METHOD    Compare the water DISPLACED before and after.
            - Floating ice melting        ->  level UNCHANGED
            - Ice containing wood/cork    ->  level UNCHANGED
            - Ice containing a stone      ->  level FALLS
            - Stone thrown from a boat    ->  level FALLS
            - Ice floating in mercury,
              or in a liquid denser
              than water, melting         ->  level RISES
  TRAP      Guessing. Always argue "displaced by WEIGHT while floating,
            displaced by VOLUME while sunk".
```

---

# PART B — FLUID DYNAMICS

```
  PATTERN 13 — STREAMLINE vs TURBULENT FLOW                       2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between streamline and turbulent flow." /
            "What is a streamline? Why can two streamlines not cross?"
  METHOD    1. Define both.
            2. Give the comparison table: path, velocity at a point,
               critical velocity, Reynolds number, energy loss, whether
               Bernoulli applies, an example of each.
            3. Streamlines cannot cross because a particle would then
               need two velocity directions at once.
  TRAP      Writing only definitions when a TABLE of at least four
            differences is expected for 4 marks.
```

```
  PATTERN 14 — DERIVE THE EQUATION OF CONTINUITY                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive a1 v1 = a2 v2." / "State the equation of continuity
            and explain its physical significance."
  METHOD    1. DRAW a tube of flow with two sections a1 and a2.
            2. Mass in at 1 in time dt  =  rho a1 v1 dt.
            3. Mass out at 2 in time dt =  rho a2 v2 dt.
            4. Equate (conservation of MASS, incompressible fluid).
            5. a1 v1 = a2 v2 = constant = the volume flow rate.
            6. Meaning: narrow means fast; crowded streamlines mean
               high speed.
  TRAP      Saying it comes from conservation of ENERGY. It is MASS.
```

```
  PATTERN 15 — CONTINUITY NUMERICAL                               2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A pipe of radius ... narrows to ... . Find the speed."
  METHOD    1. a1 v1 = a2 v2.
            2. With radii or diameters:  v2/v1 = (r1/r2)^2.
            3. For a branching pipe:  a v = a_A v_A + a_B v_B.
            4. Flow rate Q = a v , in m^3/s.
  TRAP      Using r instead of r^2. Halving the radius makes the speed
            FOUR times, not twice.
```

```
  PATTERN 16 — STATE AND DERIVE BERNOULLI'S THEOREM               8 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Bernoulli's theorem and derive Bernoulli's equation." /
            "... and mention four applications."
  METHOD    A fixed 7-step recipe:
            1. STATEMENT + the four ASSUMPTIONS (non-viscous,
               incompressible, streamline/steady, irrotational).
            2. DIAGRAM of a tube of flow at two heights h1 and h2.
            3. Work by pressure:  W = (P1 - P2) V , using
               a1 v1 dt = a2 v2 dt = V.
            4. dKE = (1/2) rho V ( v2^2 - v1^2 ).
            5. dPE = rho V g ( h2 - h1 ).
            6. Work-energy theorem, then divide by V.
            7. P + (1/2) rho v^2 + rho g h = constant.
            Then list FOUR applications.
  TRAP      Getting the SIGN of W2 wrong. At the outlet the pressure
            force OPPOSES the motion, so its work is NEGATIVE.
            Also: divide by the VOLUME V, not by the mass, to get the
            "per unit volume" form.
```

```
  PATTERN 17 — BERNOULLI NUMERICAL (horizontal pipe)              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the pressure at the narrow section." /
            "Find the pressure difference."
  METHOD    1. FIRST use continuity to get the missing speed.
            2. Then Bernoulli. If the pipe is HORIZONTAL, drop rho g h.
            3. P2 = P1 + (1/2) rho ( v1^2 - v2^2 ).
            4. Sanity check: the pressure MUST be lower where it is faster.
  TRAP      Trying to use Bernoulli before finding v2 from continuity.
            Also, forgetting that the pressure DROPS in the narrow part —
            if your answer goes up, you have swapped v1 and v2.
```

```
  PATTERN 18 — VENTURIMETER                                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the venturimeter and derive the expression for the
            rate of flow."
  METHOD    1. DRAW the tube with the throat and the manometer.
            2. Continuity: v2 = a1 v1 / a2.
            3. Bernoulli (horizontal): P1 - P2 = (1/2) rho (v2^2 - v1^2).
            4. Substitute and solve for v1, then Q = a1 v1:

               Q = a1 a2 sqrt( 2(P1-P2) / ( rho (a1^2 - a2^2) ) )

            5. With a manometer of the same liquid, P1 - P2 = h rho g.
  TRAP      Writing a1^2 + a2^2 instead of a1^2 - a2^2 in the denominator.
```

```
  PATTERN 19 — TORRICELLI'S LAW / SPEED OF EFFLUX                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the expression for the speed of efflux." /
            "Water spurts from a hole ... . Find the range."
  METHOD    1. Apply Bernoulli between the free surface and the hole.
            2. P is the SAME (both open to air), and v_surface ~ 0
               because a << A.
            3. rho g h = (1/2) rho v^2   ->   v = sqrt(2 g h).
            4. For the range, treat it as a projectile:
               x = 2 sqrt( h ( H - h ) ) , maximum H at h = H/2.
  TRAP      Using the wrong h. In the efflux formula, h is the depth
            of the hole BELOW THE FREE SURFACE, not its height above
            the ground.
```

```
  PATTERN 20 — APPLICATIONS OF BERNOULLI (descriptive)            4-8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the dynamic lift on an aeroplane wing." /
            "Why does a spinning ball swerve?" /
            "Explain the working of an atomiser / a Bunsen burner." /
            "Why is a person pulled towards a fast train?"
  METHOD    Every one of these is the SAME three-line argument:
            1. Somewhere the fluid moves FASTER (say why — a curved
               surface, a narrow gap, a spin dragging air, a jet).
            2. Faster fluid  ->  LOWER pressure (Bernoulli).
            3. The higher pressure on the other side pushes the object
               towards the low-pressure region.
            Add a labelled DIAGRAM with the streamlines crowded on the
            fast side.
  TRAP      Saying "it sucks". There is no suction. Always phrase it as
            "the higher pressure on the other side PUSHES it".
```

---

# PART C — VISCOSITY

```
  PATTERN 21 — DEFINE VISCOSITY / COEFFICIENT OF VISCOSITY        2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the coefficient of viscosity. Give its units and
            dimensions." / "State Newton's law of viscous flow."
  METHOD    1. Viscosity = the property by which a fluid opposes relative
               motion between its own layers.
            2. Diagram of layers over a fixed surface, showing dv/dx.
            3. F = - eta A (dv/dx) ; the minus sign shows opposition.
            4. eta = F / [ A (dv/dx) ] — force per unit area for unit
               velocity gradient.
            5. Units Pa.s (SI) and poise (CGS), 1 Pa.s = 10 poise.
            6. Dimensions [ M L^-1 T^-1 ] — DERIVE them, do not just
               state them.
  TRAP      Writing the unit as "poise" for SI. SI is Pa.s. And do not
            forget the minus sign in Newton's law.
```

```
  PATTERN 22 — VISCOSITY vs TEMPERATURE                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How does the viscosity of a liquid / a gas change with
            temperature?"
  METHOD    1. LIQUID: eta DECREASES, because the cohesive forces weaken.
            2. GAS:    eta INCREASES, because more momentum is carried
               between layers ; eta is proportional to sqrt(T).
            3. Say clearly that they behave in OPPOSITE ways.
  TRAP      Giving the direction without the REASON. Half the mark is
            for the reason.
```

```
  PATTERN 23 — VISCOUS FORCE NUMERICAL                            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A plate of area ... is moved at ... over an oil film of
            thickness ... . Find the force."
  METHOD    1. dv/dx = (speed) / (thickness), both in SI.
            2. F = eta A (dv/dx).
  TRAP      Leaving the thickness in millimetres. 1 mm = 10^-3 m.
```

```
  PATTERN 24 — STOKES' LAW AND TERMINAL VELOCITY (derivation)     4-8 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Stokes' law and derive the expression for the terminal
            velocity of a sphere falling through a viscous liquid."
  METHOD    1. Stokes' law: F = 6 pi eta r v.
            2. DRAW the free-body diagram: W down, U and Fv up.
            3. W = (4/3) pi r^3 rho g ,  U = (4/3) pi r^3 sigma g.
            4. At the terminal velocity the net force is ZERO:
               W = U + Fv.
            5. Cancel pi r , solve:
               v_t = 2 r^2 ( rho - sigma ) g / ( 9 eta ).
            6. Draw the v-t graph: rises, bends, flattens at v_t.
  TRAP      Using rho alone instead of ( rho - sigma ). Forgetting the
            upthrust is the single commonest error in this chapter.
```

```
  PATTERN 25 — TERMINAL VELOCITY NUMERICAL / RATIO                2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the terminal velocity ..." / "n drops coalesce ..." /
            "the ratio of the terminal velocities of two spheres"
  METHOD    1. Direct:  v_t = 2 r^2 (rho - sigma) g / (9 eta).
            2. Ratio:   v proportional to r^2.
            3. n drops merging: R = n^(1/3) r , so v_new = n^(2/3) v.
            4. If the answer is NEGATIVE, the body RISES (an air bubble).
  TRAP      For merging drops, using n instead of n^(2/3).
            n = 8 gives 4v, n = 27 gives 9v, n = 1000 gives 100v.
```

```
  PATTERN 26 — REYNOLDS NUMBER                                    2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define Reynolds number and give its significance." /
            "Is the flow laminar or turbulent?" /
            "Find the critical velocity."
  METHOD    1. Re = rho v D / eta.
            2. Prove it is DIMENSIONLESS by substituting the dimensions.
            3. Meaning: inertial force / viscous force.
            4. Re < 1000 laminar ; Re > 2000 turbulent.
            5. Critical velocity  v_c = Re eta / ( rho D ).
  TRAP      Using the RADIUS instead of the DIAMETER for D.
```

---

# PART D — SURFACE TENSION

```
  PATTERN 27 — DEFINE SURFACE TENSION / SURFACE ENERGY            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define surface tension." / "Define surface energy."
  METHOD    1. T = F / l , the force per unit length on an imaginary line
               drawn on the free surface, perpendicular to that line.
            2. Unit N/m ; dimensions [ M T^-2 ] ; a SCALAR.
            3. Surface energy = extra PE per unit area of the surface,
               unit J/m^2 , the SAME dimensions.
  TRAP      Writing the dimensions as [M L T^-2]. Surface tension is a
            force per LENGTH, so the L cancels:  [ M T^-2 ].
```

```
  PATTERN 28 — MOLECULAR THEORY / SPHERE OF INFLUENCE             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain surface tension on the basis of molecular theory." /
            "What is the sphere of influence?"
  METHOD    1. DRAW three molecules: one deep inside, one just below the
               surface, one on the surface, each with its sphere of
               influence.
            2. Deep inside  -> pulled equally all round -> net force ZERO.
            3. On the surface -> the top half of the sphere is air ->
               a NET INWARD pull.
            4. So work must be done to bring a molecule to the surface
               -> extra potential energy.
            5. The surface therefore contracts to the least area and
               behaves like a stretched membrane.
  TRAP      Losing the diagram mark. The three-molecule figure is worth
            a full mark on its own.
```

```
  PATTERN 29 — SHOW SURFACE ENERGY = SURFACE TENSION              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the surface energy per unit area equals the
            surface tension."
  METHOD    1. DRAW a soap film on a frame with a sliding wire of length l.
            2. The film has TWO surfaces, so F = T ( 2 l ).
            3. W = F dx = T ( 2 l ) dx.
            4. dA = 2 l dx.
            5. W / dA = T.
            6. Add the unit check: N/m = J/m^2.
  TRAP      Forgetting the factor 2 for the two faces of the film.
```

```
  PATTERN 30 — WORK DONE ON DROPS, BUBBLES AND FILMS              2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the work done in blowing a soap bubble ..." /
            "A drop of radius R breaks into n droplets ..."
  METHOD    1. Work = T x (increase in AREA).
            2. Soap bubble of radius r      ->  W = 8 pi r^2 T
            3. Bubble blown from r1 to r2   ->  W = 8 pi T (r2^2 - r1^2)
            4. Single liquid drop radius r  ->  W = 4 pi r^2 T
            5. One drop R into n droplets   ->
                  W = 4 pi R^2 T ( n^(1/3) - 1 )
  TRAP      Using 4 pi r^2 for a SOAP BUBBLE. A bubble has TWO surfaces,
            so it is 8 pi r^2 T. Also remember: splitting COOLS the
            liquid, merging WARMS it.
```

```
  PATTERN 31 — EXCESS PRESSURE (derivation)                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the excess pressure inside a liquid drop / a soap
            bubble." / "Why are drops spherical?"
  METHOD    1. Let the radius grow by dr.
            2. Work by the excess pressure = P ( 4 pi r^2 ) dr.
            3. Increase in area = 8 pi r dr.
            4. Increase in energy = T x (that area) x (number of surfaces).
            5. Equate:
                  drop / air bubble in liquid (1 surface) -> P = 2T/r
                  soap bubble (2 surfaces)                -> P = 4T/r
            6. Sphere: for a given volume, the sphere has the least area,
               and surface tension minimises the area.
  TRAP      Mixing up 2T/r and 4T/r. Count the SURFACES first, every time.
```

```
  PATTERN 32 — BUBBLE PUZZLES                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two soap bubbles of unequal size are joined by a tube." /
            "Find the radius of the common interface." /
            "Two bubbles coalesce isothermally."
  METHOD    1. P is proportional to 1/r , so the SMALL bubble has the
               HIGHER pressure  ->  the BIG bubble grows.
            2. Common interface:  r = r1 r2 / ( r1 - r2 ) , r1 > r2.
            3. Isothermal coalescence:  R^2 = r1^2 + r2^2.
  TRAP      Guessing that the big one collapses into the small one.
            It is the other way round.
```

```
  PATTERN 33 — FACTORS AFFECTING SURFACE TENSION                  2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How does temperature / an impurity affect surface tension?" /
            "Why does hot soapy water clean better?"
  METHOD    1. Temperature UP  ->  T DOWN ; T = 0 at the critical temp.
            2. Highly soluble impurity (salt, sugar)  ->  T INCREASES.
            3. Sparingly soluble (soap, detergent, oil, phenol)
               ->  T DECREASES sharply.
            4. Cleaning: low T lets water spread and WET the fabric.
  TRAP      Saying detergent RAISES the surface tension. It lowers it.
```

```
  PATTERN 34 — ANGLE OF CONTACT                                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define the angle of contact." / "Why is it acute for
            water-glass and obtuse for mercury-glass?"
  METHOD    1. Definition: the angle between the tangent to the liquid
               surface at the point of contact and the solid surface,
               measured INSIDE the liquid.
            2. Water-glass: adhesion > cohesion -> concave meniscus ->
               theta acute (~8 deg) -> rises, wets.
            3. Mercury-glass: cohesion > adhesion -> convex meniscus ->
               theta obtuse (~140 deg) -> is depressed, does not wet.
            4. Draw BOTH menisci.
  TRAP      Omitting the phrase "measured inside the liquid". Also,
            theta belongs to the PAIR (liquid + solid), not to the
            liquid alone.
```

```
  PATTERN 35 — DERIVE THE CAPILLARY RISE FORMULA                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive h = 2 T cos(theta) / ( r rho g )." /
            "Obtain the expression for the rise of a liquid in a
            capillary tube."
  METHOD    1. DRAW the tube, the concave meniscus, and T acting along
               the circle of contact at the angle theta.
            2. Upward force = T cos(theta) x ( 2 pi r ).
            3. Weight of the raised column = ( pi r^2 h ) rho g.
            4. Equate and cancel pi r.
            5. h = 2 T cos(theta) / ( r rho g ).
            6. Note Jurin's law h r = constant, and that theta obtuse
               gives a NEGATIVE h — mercury is depressed.
  TRAP      Forgetting the cos(theta) — the vertical COMPONENT is what
            lifts the liquid. And using the diameter instead of the
            radius for r.
```

```
  PATTERN 36 — CAPILLARITY NUMERICAL                              2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Water rises ... cm in a tube of radius ... . Find T." /
            "the radius is doubled ..." / "on the Moon ..."
  METHOD    1. h = 2 T cos(theta) / ( r rho g ) — rearrange as needed.
            2. Ratios: h r = constant ; h is inversely proportional to g.
            3. MASS of the raised liquid = rho pi r^2 h , which is
               proportional to r (not r^2).
            4. For mercury, cos(140) = -0.766 gives a negative h.
  TRAP      The MASS question. Height halves but area quadruples, so
            the mass DOUBLES when the radius doubles. Nearly everyone
            answers "half".
```

```
  PATTERN 37 — CAPILLARITY CONCEPTUAL PUZZLE                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The tube is shorter than h — does the liquid overflow?" /
            "What happens in a satellite / a freely falling lift?"
  METHOD    1. Short tube: the liquid rises to the top and STOPS. The
               radius of curvature of the meniscus increases so that
               h R = constant still holds. No fountain — that would be
               perpetual motion.
            2. Satellite / free fall: effective g = 0 , so the liquid
               fills the whole tube and stays there with a flat meniscus.
            3. On the Moon (g/6): the rise becomes 6 times.
  TRAP      Answering "it overflows". It never does.
```

```
  PATTERN 38 — EVERYDAY EXAMPLES OF CAPILLARITY                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Give examples of capillary action."
  METHOD    Oil rising in a lamp wick ; blotting paper and towels ;
            ink spreading on paper ; sap rising in tall trees through
            the xylem ; farmers ploughing to BREAK the soil capillaries
            and stop water rising and evaporating ; damp rising in a
            brick wall ; sweat soaking into cotton clothing.
  TRAP      Giving only one example when the question says "examples".
            Give at least three.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| Question stem | Pattern |
|---|---|
| "Find the absolute pressure at a depth of 15 m." | 3 |
| "Derive P = P0 + h rho g." | 2 |
| "Why is mercury used in a barometer and not water?" | 5 |
| "A gas manometer shows a 25 cm difference..." | 6 |
| "State Pascal's law." | 7 |
| "Explain hydraulic brakes." | 8 |
| "Pistons of radii 2 cm and 10 cm..." | 9 |
| "A body weighs 40 N in air and 30 N in water." | 10 |
| "What percentage of an iceberg is above water?" | 11 |
| "Ice floating in a beaker melts. Does the level change?" | 12 |
| "Distinguish streamline and turbulent flow." | 13 |
| "Derive a1 v1 = a2 v2." | 14 |
| "The pipe radius is halved. Find the new speed." | 15 |
| "State and derive Bernoulli's theorem." | 16 |
| "Find the pressure at the narrow section of a horizontal pipe." | 17 |
| "Explain a venturimeter and find the flow rate." | 18 |
| "Water spurts from a hole 3 m below the surface." | 19 |
| "Why does an aeroplane wing experience lift?" | 20 |
| "Why does a spinning cricket ball swing?" | 20 |
| "Define the coefficient of viscosity, with its dimensions." | 21 |
| "How does the viscosity of a gas change on heating?" | 22 |
| "A plate is dragged over an oil film 2 mm thick." | 23 |
| "Derive the terminal velocity of a sphere in a viscous liquid." | 24 |
| "27 drops coalesce into one. Find the new terminal velocity." | 25 |
| "Is the flow laminar or turbulent?" | 26 |
| "Define surface tension and give its dimensions." | 27 |
| "Explain surface tension using the sphere of influence." | 28 |
| "Show that surface energy per unit area = surface tension." | 29 |
| "Find the work done in blowing a soap bubble of radius 3 cm." | 30 |
| "Derive the excess pressure inside a soap bubble." | 31 |
| "Two soap bubbles are joined by a tube. What happens?" | 32 |
| "Why does hot soapy water clean better?" | 33 |
| "Define angle of contact. Why is it obtuse for mercury?" | 34 |
| "Derive h = 2 T cos(theta) / (r rho g)." | 35 |
| "Water rises 5 cm in a tube of radius 0.3 mm. Find T." | 36 |
| "A capillary tube is taken into a satellite." | 37 |
| "Give three examples of capillary action." | 38 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  STAGE 1 — the four DERIVATIONS you must be able to write from memory
  ---------------------------------------------------------------------
   1.  BERNOULLI'S EQUATION            (Pattern 16)   8 marks
   2.  TERMINAL VELOCITY               (Pattern 24)   4 marks
   3.  CAPILLARY RISE                  (Pattern 35)   4 marks
   4.  EXCESS PRESSURE 2T/r and 4T/r   (Pattern 31)   4 marks

   Write each one THREE times, closed book, before the exam.
   These four alone can carry 12 to 16 marks.


  STAGE 2 — the ten 2-mark DEFINITIONS you can never lose
  ---------------------------------------------------------------------
   1.  Thrust and pressure ; pressure is a SCALAR
   2.  Gauge vs absolute pressure
   3.  Pascal's law
   4.  Archimedes' principle and the law of floatation
   5.  The equation of continuity (conservation of MASS)
   6.  Bernoulli's theorem (conservation of ENERGY)
   7.  Torricelli's law,  v = sqrt(2 g h)
   8.  Coefficient of viscosity, units, dimensions
   9.  Stokes' law and terminal velocity
  10.  Surface tension, surface energy, angle of contact
       plus Reynolds number and its critical values


  STAGE 3 — the ten NUMERICALS to drill
  ---------------------------------------------------------------------
   Pressure at a depth  ·  hydraulic lift with radii  ·  apparent weight
   fraction submerged  ·  continuity with radii  ·  Bernoulli pressure drop
   speed of efflux and range  ·  terminal velocity  ·  work on a soap bubble
   capillary rise / finding T


  IF YOU DO NOTHING ELSE
  ---------------------------------------------------------------------
   Memorise these five lines and you can start every question:

        P  =  P0 + h rho g
        F1/a1  =  F2/a2
        a1 v1  =  a2 v2
        P + (1/2) rho v^2 + rho g h  =  constant
        h  =  2 T cos(theta) / ( r rho g )

   plus the two you must not swap:   DROP 2T/r    SOAP BUBBLE 4T/r


  THE ONE-SENTENCE SUMMARY OF THE WHOLE CHAPTER
  ---------------------------------------------------------------------
   A fluid at rest pushes harder the deeper you go (P = P0 + h rho g),
   passes any extra push on undiminished (Pascal), holds things up with
   the weight it displaces (Archimedes), speeds up when squeezed
   (continuity), loses pressure when it speeds up (Bernoulli), drags on
   itself (viscosity), and pulls its own skin tight (surface tension).
```
