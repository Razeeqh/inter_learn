# Mechanical Properties of Solids — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

# PART A — DEFINITIONS AND BASIC IDEAS

```
  PATTERN 1 — DEFINE STRESS / STRAIN                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define stress." / "Define strain." / "Why has strain no
            units?" / "Give the dimensional formula of stress."
  METHOD    1. STRESS = internal restoring force per unit area,
               stress = F/A , unit pascal, dim [M L^-1 T^-2].
            2. STRAIN = change in a dimension / original value of that
               dimension.
            3. Strain has NO units and NO dimensions BECAUSE it is a
               ratio of two quantities of the same kind — the units
               cancel.
  TRAP      Writing "stress = force / area" without the word
            RESTORING. Also forgetting to actually give the REASON
            for strain having no units — the reason is the mark.
```

```
  PATTERN 2 — STATE HOOKE'S LAW / DEFINE MODULUS OF ELASTICITY    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State Hooke's law." / "What is the modulus of
            elasticity?" / "What are the limits of validity of
            Hooke's law?"
  METHOD    1. WITHIN THE ELASTIC LIMIT, stress is directly
               proportional to strain.
            2. stress = E x strain ,  E = stress / strain.
            3. Unit of E = pascal (same as stress, because strain has
               no unit). Dim [M L^-1 T^-2].
            4. If asked for LIMITS: valid only up to the PROPORTIONAL
               LIMIT; not obeyed by elastomers at all.
  TRAP      Omitting "within the elastic limit". Those four words are
            the whole mark.
```

```
  PATTERN 3 — THE THREE TYPES OF STRESS, WITH DIAGRAMS            2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Name the types of stress." / "Explain with diagrams the
            three kinds of stress."
  METHOD    1. LONGITUDINAL — force NORMAL to the cross-section.
               Tensile if pulled, compressive if pushed. Draw a wire
               with arrows pointing OUT (or IN).
            2. SHEARING / TANGENTIAL — force PARALLEL to the surface.
               Draw a block with the top face slid sideways and mark
               the angle theta. Shape changes, volume does not.
            3. HYDRAULIC / VOLUME — pressure P from all sides. Draw
               a block with arrows pointing in from every direction.
               Volume changes, shape does not.
  TRAP      Drawing the shear diagram with the arrow PERPENDICULAR to
            the face. It must be PARALLEL. Also, forgetting to say
            what changes (length / shape / volume) in each case.
```

```
  PATTERN 4 — THE THREE TYPES OF STRAIN                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define longitudinal, shearing and volume strain."
  METHOD    1. Longitudinal strain = dL / L
            2. Shearing strain = theta = x / h (an ANGLE, in radians)
            3. Volume strain = dV / V
            4. All three are dimensionless.
  TRAP      Writing shearing strain as x alone instead of x/h.
            The strain is the RATIO, i.e. the angle.
```

```
  PATTERN 5 — THE INTERATOMIC-FORCE EXPLANATION OF ELASTICITY     2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Explain the elastic behaviour of solids." / "Draw the
            graph of interatomic force against separation."
  METHOD    1. A solid is a lattice of atoms joined by forces that
               behave like tiny springs.
            2. DRAW the F vs r graph: repulsive (positive) for r < r0,
               zero at r = r0, attractive (negative) for r > r0,
               maximum attraction at rm, then tending to zero.
            3. LABEL r0 and write "net force zero, equilibrium".
            4. Stretching moves the atoms past r0, so an attractive
               restoring force appears -> the body springs back.
            5. Near r0 the curve is nearly straight -> Hooke's law.
  TRAP      Not labelling r0. Also drawing the attraction curve
            rising forever instead of peaking at rm and falling.
```

---

# PART B — THE THREE MODULI

```
  PATTERN 6 — DEFINE YOUNG'S MODULUS                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define Young's modulus." / "Write its formula and unit."
  METHOD    1. Y = longitudinal stress / longitudinal strain,
               within the elastic limit.
            2. Y = (F/A) / (dL/L) = F L / (A dL) = m g L /(pi r^2 dL)
            3. Unit pascal, dim [M L^-1 T^-2], SOLIDS only.
  TRAP      Being asked "does Y depend on the length of the wire?"
            The answer is NO — Y is a property of the MATERIAL.
```

```
  PATTERN 7 — YOUNG'S MODULUS NUMERICAL: FIND THE ELONGATION      2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire of length ... and radius ... carries a load of
            ... kg. Find the elongation / extension / increase in
            length."
  METHOD    1. F = m g          (convert kg to newtons)
            2. r = d/2 IF the DIAMETER was given
            3. A = pi r^2       (everything in metres)
            4. dL = F L / (A Y)
            5. Convert the answer to mm if it is small.
  TRAP      (i) using the diameter as the radius,
            (ii) leaving lengths in mm or cm,
            (iii) writing A = 2 pi r instead of pi r^2.
            A sanity check: for a metal wire dL should come out in
            fractions of a millimetre.
```

```
  PATTERN 8 — YOUNG'S MODULUS NUMERICAL: FIND Y ITSELF            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire stretches by ... mm under a load of ... kg.
            Calculate Young's modulus of the material."
  METHOD    1. F = m g ,  A = pi r^2 (or the area given directly)
            2. Y = F L / (A dL)
            3. Substitute with every quantity in SI units.
            4. State the material if the answer matches a standard
               value (2 x 10^11 = steel, 1.1 x 10^11 = copper).
  TRAP      Powers of ten. Write each quantity as a x 10^n BEFORE
            multiplying. Y for a metal must land between about
            10^10 and 4 x 10^11 Pa — anything else is an error.
```

```
  PATTERN 9 — RATIO OF ELONGATIONS (no numbers given)             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two wires of the same material have lengths in the
            ratio ... and radii in the ratio ... Find the ratio of
            their elongations."
  METHOD    1. Write   dL  ∝  L / ( r^2 Y ) , for the same load.
            2. Cross out whatever is the same in both wires.
            3. Substitute only the ratios. Never compute F or A.
  TRAP      Forgetting that the radius is SQUARED. Doubling the
            radius divides the elongation by 4, not 2.
```

```
  PATTERN 10 — "DOUBLE THE LENGTH" / "% INCREASE"                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What force will double the length of the wire?" /
            "The length increases by 1 %. Find the stress."
  METHOD    1. Double the length  ->  dL = L  ->  strain = 1
                                     ->  F = Y A
            2. Increase by p %    ->  strain = p/100
                                     ->  stress = Y p / 100
  TRAP      Not converting the percentage to a fraction.
            Also worth one bonus mark: add "in practice the wire
            would break long before this".
```

```
  PATTERN 11 — DEFINE BULK MODULUS AND EXPLAIN THE MINUS SIGN     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define bulk modulus." / "Why is there a negative sign
            in the expression for bulk modulus?"
  METHOD    1. B = hydraulic stress / volume strain = -P / (dV/V)
            2. MINUS SIGN: an increase of pressure DECREASES the
               volume, so dV is negative; the minus makes B positive.
            3. Unit pascal. Exists for SOLIDS, LIQUIDS and GASES.
  TRAP      Giving the formula without the reason for the sign.
            The reason is the second mark.
```

```
  PATTERN 12 — BULK MODULUS NUMERICAL                             2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body of volume ... is taken to a depth where the
            pressure is ... Find the change in its volume."
  METHOD    1. If a DEPTH is given, first find P = h rho g
               (or use the pressure given directly).
            2. dV / V  =  P / B
            3. dV  =  V x (P/B)
            4. Convert the volume: 1 cm^3 = 10^-6 m^3,
               1 litre = 10^-3 m^3.
            5. Say the volume DECREASES.
  TRAP      Leaving the volume in cm^3. And forgetting that
            fractional change x 100 = percentage change.
```

```
  PATTERN 13 — COMPRESSIBILITY                                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define compressibility and give its unit." / "The
            compressibility of a liquid is ... Find the pressure
            needed to reduce its volume by ... %"
  METHOD    1. K = 1/B , the fractional decrease in volume per unit
               increase in pressure.
            2. Unit Pa^-1 = m^2/N , dim [M^-1 L T^2].
            3. Numerical:  dV/V = K P  ->  P = (dV/V) / K
  TRAP      Using B where K is meant. Read carefully: if the unit in
            the data is Pa^-1 it is a COMPRESSIBILITY, not a modulus.
```

```
  PATTERN 14 — DEFINE RIGIDITY MODULUS                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define rigidity modulus." / "What is the rigidity
            modulus of a liquid?"
  METHOD    1. eta = shearing stress / shearing strain
                   = (F/A) / theta  =  F / (A theta)
            2. theta = x / h , unit pascal.
            3. FOR A LIQUID OR GAS: eta = 0, because a fluid cannot
               resist any tangential stress — it flows.
  TRAP      Saying eta is "small" for a liquid. It is exactly ZERO,
            and the reason must be stated.
```

```
  PATTERN 15 — SHEAR NUMERICAL                                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A cube of side ... has its lower face fixed and a
            tangential force ... is applied to the upper face.
            Find the angle of shear / the displacement / eta."
  METHOD    1. A = area of the face the force is PARALLEL to.
            2. shearing stress = F / A
            3. theta = stress / eta
            4. x = theta x h            (h = height of the block)
  TRAP      Using the wrong face area for a rectangular block.
            Also, theta comes out in RADIANS — do not convert to
            degrees unless asked.
```

```
  PATTERN 16 — COMPARE THE THREE MODULI                           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between Young's modulus, bulk modulus and
            rigidity modulus." / "Give one application of each."
  METHOD    Draw a TABLE with these rows:
            1. what changes : length / volume / shape
            2. stress used  : F/A normal , P all round , F/A parallel
            3. strain       : dL/L , dV/V , theta = x/h
            4. formula, unit (all Pa), dimensions (all [M L^-1 T^-2])
            5. exists for   : solids / solids+fluids / solids only
            6. an application : girders and ropes / submarines and
               hydraulics / rivets, bolts and shafts
            7. order for a metal :  Y > B > eta
  TRAP      Losing the easy mark by not giving an APPLICATION when
            the question asks for one.
```

```
  PATTERN 17 — POISSON'S RATIO: DEFINITION AND LIMITS             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is Poisson's ratio?" / "What are its limits?" /
            "What are its units?"
  METHOD    1. sigma = lateral strain / longitudinal strain
                     = (dd/d) / (dL/L)
            2. NO units, NO dimensions.
            3. Theory  -1 to 0.5 ; practice 0 to 0.5 ;
               actual values 0.2 to 0.4.
  TRAP      Quoting only one range. Give BOTH the theoretical and the
            practical range — the question usually wants both.
```

```
  PATTERN 18 — POISSON'S RATIO NUMERICAL                          2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire of diameter ... is stretched by ... If sigma is
            ..., find the decrease in diameter / change in volume."
  METHOD    1. longitudinal strain = dL / L
            2. lateral strain = sigma x longitudinal strain
            3. dd = lateral strain x d
            4. For volume:  dV/V = (1 - 2 sigma)(dL/L)
  TRAP      Forgetting to MULTIPLY the lateral strain by the diameter
            at the end. The strain is a ratio; the question asks for
            a length.
```

---

# PART C — THE STRESS–STRAIN CURVE AND ENERGY

```
  PATTERN 19 — DRAW AND EXPLAIN THE STRESS-STRAIN CURVE           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the stress-strain curve for a ductile metal and
            explain it." / "Mark the elastic limit on the graph."
  METHOD    1. AXES FIRST: strain on the x-axis, stress on the y-axis.
            2. Straight line O to A , then a gentle curve to B ,
               a long plateau-like rise to the peak D , then a fall
               to E.
            3. LABEL, in order:
                 A  proportional limit
                 B  elastic limit / yield point
                 B-D plastic region
                 D  ultimate tensile strength (the PEAK)
                 E  fracture point
            4. Add: slope of OA = Y ; area under the curve = energy
               per unit volume.
  TRAP      Drawing the axes the wrong way round. Also, drawing the
            fracture point ABOVE the ultimate tensile strength — the
            curve must FALL from D to E because the wire necks.
```

```
  PATTERN 20 — ELASTIC vs PLASTIC / PERMANENT SET                 2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between elastic and plastic deformation." /
            "What is meant by a permanent set?"
  METHOD    1. Elastic (O to B): fully recovers, reversible,
               energy recovered, bonds only stretched.
            2. Plastic (B to E): does not recover, irreversible,
               energy lost as heat, atomic planes slide.
            3. PERMANENT SET = the strain that remains after the load
               is completely removed. On the graph, the unloading
               line runs PARALLEL to OA and meets the strain axis at
               a non-zero value.
  TRAP      Saying the body "returns partly". Say it retains a
            PERMANENT SET and, if you can, draw the parallel
            unloading line.
```

```
  PATTERN 21 — DUCTILE vs BRITTLE vs ELASTOMER                    2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between ductile and brittle materials." /
            "What is an elastomer?" / "Draw the curve for rubber."
  METHOD    1. DUCTILE: long plastic region, necks and warns before
               breaking, can be drawn into wires. Copper, mild steel.
            2. BRITTLE: almost no plastic region, snaps just past the
               elastic limit with no warning. Glass, cast iron.
            3. ELASTOMER: NO straight portion at all, so Hooke's law
               is never obeyed; strain of several hundred per cent;
               still returns to its original size. Rubber, aorta
               tissue.
  TRAP      Calling rubber "plastic" or "not elastic". Rubber IS
            elastic; it simply does not obey Hooke's law.
```

```
  PATTERN 22 — DERIVE THE ELASTIC POTENTIAL ENERGY                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the expression for the energy stored in a
            stretched wire." / "Show that U = (1/2) stress x strain
            x volume."
  METHOD    1. Force at an extension x is F(x) = Y A x / L.
            2. dW = F(x) dx ; integrate from 0 to dL.
            3. W = (1/2) Y A (dL)^2 / L = (1/2) F dL.
            4. Substitute F = stress x A and dL = strain x L.
            5. W = (1/2) x stress x strain x (A L)
                 = (1/2) x stress x strain x VOLUME.
            6. Divide by the volume for the ENERGY DENSITY
               u = (1/2) Y e^2 = stress^2 / (2Y) , in J/m^3.
  TRAP      Losing the 1/2. Say WHY it is there: the force grows
            linearly from zero, so the AVERAGE force is F/2.
```

```
  PATTERN 23 — ELASTIC ENERGY NUMERICAL                           2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the work done in stretching the wire." / "Find the
            energy stored per unit volume."
  METHOD    Choose the form that matches the data:
            1. F and dL given            ->  U = (1/2) F dL
            2. Y, A, L, dL given         ->  U = (1/2) Y A (dL)^2 / L
            3. stress and Y given        ->  u = stress^2 / (2Y)
            4. Y and strain given        ->  u = (1/2) Y (strain)^2
            5. energy density x volume   ->  total energy
  TRAP      Mixing up U (joules) and u (joules per cubic metre).
            Check what the question actually asks for.
```

```
  PATTERN 24 — THE AREA UNDER THE GRAPH                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What does the area under a stress-strain curve
            represent?"
  METHOD    1. Energy stored PER UNIT VOLUME (strain energy density),
               in J/m^3.
            2. Show it: area of the triangle = (1/2) x strain x
               stress = u.
            3. The total area up to fracture is the TOUGHNESS.
  TRAP      Answering "work done" without "per unit volume".
            Stress x strain has the dimensions of ENERGY / VOLUME.
```

---

# PART D — STANDARD SPECIAL CASES

```
  PATTERN 25 — ELONGATION UNDER THE WIRE'S OWN WEIGHT             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire of length ... hangs vertically. Find the
            elongation due to its own weight." / "Derive it."
  METHOD    1. Take an element dx at height x above the lower end.
            2. Force on it = weight below = (M/L) x g.
            3. d(dL) = M g x dx / (L A Y) ; integrate 0 to L.
            4. dL = M g L / (2 A Y) = rho g L^2 / (2 Y).
            5. Explain the 2: the weight acts effectively at the
               centre of mass, at a depth L/2.
  TRAP      Writing M g L / (A Y) — losing the 2. Also note that the
            second form has NO A in it, so the answer does not depend
            on the thickness of the wire.
```

```
  PATTERN 26 — THERMAL STRESS IN A CLAMPED ROD                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A rod is clamped rigidly at both ends and heated
            through ... deg C. Find the stress / the force on the
            clamps."
  METHOD    1. Free expansion would be dL = L alpha dT.
            2. The clamps prevent it, so strain = alpha dT.
            3. Stress = Y alpha dT.
            4. Force  = Y A alpha dT.
            5. Add: the stress does NOT depend on the length.
  TRAP      Trying to use the length. Also, examples earn a mark:
            gaps in railway lines, roller supports on bridges,
            expansion joints in roads.
```

```
  PATTERN 27 — BREAKING LOAD / WIRE CUT INTO PIECES               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wire supports a maximum load W. It is cut in half /
            its radius is doubled. What is the new maximum load?"
  METHOD    1. Breaking force = breaking stress x A , and the
               breaking stress is a MATERIAL constant.
            2. So the breaking load depends ONLY on the area,
               i.e. on r^2.
            3. Cutting the wire  ->  breaking load UNCHANGED.
               Radius doubled    ->  breaking load x 4.
            4. Maximum hanging length: L = breaking stress /(rho g).
  TRAP      Assuming a shorter wire is stronger. It is not. Only the
            EXTENSION changes when you cut a wire.
```

```
  PATTERN 28 — TWO WIRES IN SERIES                                2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A steel wire is joined end to end to a copper wire and
            a load is hung from the free end."
  METHOD    1. The SAME force passes through both wires.
            2. dL(total) = F L1/(A1 Y1) + F L2/(A2 Y2).
            3. For the ratio of extensions, cancel F.
  TRAP      Assuming the STRESS is the same. It is only the same if
            the two areas are equal. The FORCE is always the same.
```

---

# PART E — APPLICATIONS AND FACT QUESTIONS

```
  PATTERN 29 — WHY GIRDERS ARE I-SHAPED                           2-4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Why is the cross-section of a girder made in the shape
            of the letter I?" / "Explain the bending of a beam."
  METHOD    1. Quote  delta = W L^3 / (4 b d^3 Y).
            2. delta ∝ 1/d^3 but only ∝ 1/b  ->  DEPTH matters far
               more than breadth.
            3. In a bent beam the top layer is compressed and the
               bottom layer stretched; the middle NEUTRAL AXIS is
               almost unstressed and contributes little.
            4. So put the material in the top and bottom FLANGES and
               use only a thin WEB -> the letter I.
            5. Result: same strength, less material, lighter,
               cheaper, and stable against sideways buckling.
  TRAP      Only saying "it saves material". The examiner wants the
            NEUTRAL AXIS argument and the 1/d^3 dependence.
```

```
  PATTERN 30 — DESIGN OF A CRANE ROPE                             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A crane is required to lift ... kg. Find the minimum
            radius of the steel rope." / "Why is a rope made of many
            thin strands?"
  METHOD    1. F = m g.
            2. A = F / (safe working stress).
            3. r = sqrt( A / pi ).
            4. State that in practice a larger radius is used, for a
               factor of safety.
            5. FLEXIBILITY: many thin strands give the same total
               area (hence the same strength) but bend easily over
               the pulleys, unlike a single rigid rod.
  TRAP      Forgetting step 5 — it is usually half the marks.
```

```
  PATTERN 31 — MAXIMUM HEIGHT OF A MOUNTAIN                       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Estimate the maximum height of a mountain on Earth."
  METHOD    1. Pressure at the base of a rock column: P = h rho g.
            2. This must not exceed the elastic limit S of rock,
               or the rock flows plastically.
            3. h(max) = S / (rho g).
            4. Substitute S = 3 x 10^8 Pa, rho = 3 x 10^3 kg/m^3,
               g = 10 -> h(max) = 10^4 m = 10 km.
            5. Compare with Everest, 8.85 km.
  TRAP      Forgetting the comparison with Everest. It is a free mark
            and it shows the estimate is sensible.
```

```
  PATTERN 32 — ELASTIC FATIGUE / AFTER-EFFECT / TEMPERATURE /
               IMPURITIES                                         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is elastic fatigue?" / "What is the elastic
            after-effect?" / "How does temperature affect
            elasticity?" / "Effect of impurities?"
  METHOD    1. FATIGUE: loss of elastic strength due to REPEATED
               cycles of stress. Examples: rubber band snapping,
               bridges declared unsafe, a wire broken by repeated
               bending. Rest restores it partly.
            2. AFTER-EFFECT: the DELAY in returning to the original
               shape. Almost zero for QUARTZ FIBRE and PHOSPHOR
               BRONZE -> used as galvanometer suspensions.
            3. TEMPERATURE UP -> ELASTICITY DOWN (Y falls). A
               blacksmith heats iron to shape it. Exceptions: INVAR
               and carbon filament.
            4. IMPURITIES: may raise or lower elasticity. Carbon in
               iron gives steel (much more elastic); a soft impurity
               lowers it. Annealing lowers elasticity; hammering
               raises it.
  TRAP      Confusing FATIGUE (repeated loading over time) with the
            AFTER-EFFECT (delay in one recovery). They are different.
```

```
  PATTERN 33 — "WHICH IS MORE ELASTIC?"                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Which is more elastic, steel or rubber?" / "Arrange in
            order of elasticity."
  METHOD    1. More elastic = LARGER modulus of elasticity.
            2. Y(steel) = 2 x 10^11 Pa , Y(rubber) ~ 10^6 to 10^8 Pa.
            3. Therefore STEEL is far more elastic.
            4. Add the reason: it resists deformation more, needing a
               much larger stress for the same strain.
  TRAP      Answering "rubber, because it stretches more". Stretching
            more means a SMALLER Y, i.e. LESS elastic.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| The question says ... | Pattern |
|---|---|
| "Define stress and give its dimensional formula" | 1 |
| "Why has strain no units?" | 1 |
| "State Hooke's law" | 2 |
| "What are the limits of validity of Hooke's law?" | 2 |
| "Explain the three types of stress with diagrams" | 3 |
| "Define shearing strain" | 4 |
| "Draw the graph of interatomic force against separation" | 5 |
| "Define Young's modulus" | 6 |
| "A wire of length 2 m and radius 1 mm carries 5 kg. Find the extension" | 7 |
| "A wire stretches 0.5 mm under 4 kg. Find Y" | 8 |
| "Two wires, lengths 1:2 and radii 2:1. Ratio of elongations?" | 9 |
| "What force will double the length of the wire?" | 10 |
| "Why is there a negative sign in the bulk modulus?" | 11 |
| "A ball is taken to a depth of 2 km. Find the change in volume" | 12 |
| "Define compressibility and give its unit" | 13 |
| "What is the rigidity modulus of a liquid?" | 14 |
| "A cube's top face is displaced by 0.02 mm. Find eta" | 15 |
| "Distinguish between Y, B and eta" | 16 |
| "What are the limits of Poisson's ratio?" | 17 |
| "Find the decrease in diameter of the stretched wire" | 18 |
| "Draw the stress-strain curve and label the points" | 19 |
| "What is a permanent set?" | 20 |
| "What is an elastomer?" / "ductile vs brittle" | 21 |
| "Derive the energy stored in a stretched wire" | 22 |
| "Find the work done in stretching the wire" | 23 |
| "What does the area under the curve represent?" | 24 |
| "A wire hangs vertically. Find the elongation due to its own weight" | 25 |
| "A rod is clamped at both ends and heated. Find the stress" | 26 |
| "The wire is cut into two halves. What is the breaking load now?" | 27 |
| "A steel wire is joined to a copper wire and a load is hung" | 28 |
| "Why is a girder I-shaped?" | 29 |
| "Find the minimum radius of the crane rope" | 30 |
| "Estimate the maximum height of a mountain" | 31 |
| "What is elastic fatigue?" | 32 |
| "Which is more elastic, steel or rubber?" | 33 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  ================== TIER 1 — LEARN THESE FIRST ==================
  (these alone are worth almost every mark this chapter will give you)

   1.  Definitions of STRESS and STRAIN, with units and dimensions,
       and the reason strain has no units.              -> Pattern 1
   2.  HOOKE'S LAW, word perfect, including
       "within the elastic limit".                      -> Pattern 2
   3.  The STRESS-STRAIN CURVE, drawn and labelled with
       all five points.                                 -> Pattern 19
   4.  Y = F L / (A dL) and dL = F L / (A Y) , with
       five numericals practised.                       -> Patterns 7, 8

   Time needed: about 3 hours.  Expected return: 4 to 6 marks.

  ================== TIER 2 — ADD THESE NEXT ====================

   5.  Definitions of B, eta and compressibility, with
       the reason for the minus sign.              -> Patterns 11,13,14
   6.  Poisson's ratio: definition, no units, limits.    -> Pattern 17
   7.  Derivation of U = (1/2) stress x strain x volume. -> Pattern 22
   8.  I-shaped girder and the crane rope.          -> Patterns 29, 30

   Time needed: about 3 hours.  Expected return: another 2 to 4 marks.

  ================== TIER 3 — IF THERE IS TIME ==================

   9.  Elongation under own weight, thermal stress.  -> Patterns 25, 26
  10.  Ductile / brittle / elastomer comparison.         -> Pattern 21
  11.  Maximum height of a mountain.                     -> Pattern 31
  12.  Elastic fatigue, after-effect, temperature,
       impurities.                                       -> Pattern 32

  ===============================================================

  THE THREE THINGS TO CHECK IN EVERY NUMERICAL BEFORE YOU MOVE ON

     [ ]  Was I given a DIAMETER? Then r = d/2.
     [ ]  Is every length in METRES?
     [ ]  Does the answer have a sensible size?
          extension  ->  a fraction of a millimetre
          strain     ->  10^-3 or smaller
          Y, B, eta  ->  10^10 to 10^11 Pa
          stress     ->  10^7 to 10^8 Pa

  If all three are ticked, the answer is almost certainly right.
```
