# Mechanical Properties of Solids — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 1st Year, 60 marks · **Chapter 10**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> so everything below is grouped by **how often it appears**, not by a single year.
> Cross-check with the official question papers at **bie.ap.gov.in** before your exam.
> No question here carries an invented exam-year citation.

**Where this chapter appears in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  almost always 1 question,
                                                 sometimes 2
  Section B  (4 marks each, answer any 6)    ->  frequently 1 question
  Section C  (8 marks each, answer any 2)    ->  rare on its own, but the
                                                 material is examined heavily
                                                 in Sections A and B

  Realistic haul:  4 to 8 marks out of 60.
```

> **Honest note on Section C:** the BIEAP 1st-year Physics long-answer list rotates
> over a small set of topics, and elasticity is not usually one of them. The Section C
> questions below are written as **revision-grade** combined answers — exactly the
> material an examiner would want, assembled into an 8-mark shape. Every one of them is
> also a ready-made source of Section A and Section B answers, so nothing here is wasted.

**Constants used throughout:** `g = 9.8 m/s²` (use 10 only when the question says so),
`pi = 3.14`, `Y(steel) = 2 x 10^11 Pa`, `Y(copper) = 1.1 x 10^11 Pa`.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Stress and strain

### Q A1
Define stress. Give its SI unit and dimensional formula.

**ANSWER:**
```
  STRESS  -  the internal restoring force set up per unit area of
             cross-section of a deformed body.

                        restoring force        F
             stress  =  ----------------  =   ---
                             area              A

  SI unit             :  N/m^2  =  pascal (Pa)
  Dimensional formula :  [ M^1 L^-1 T^-2 ]

  In equilibrium the restoring force equals the applied force,
  so in numericals we simply use F / A.
```

---

### Q A2
Define strain. Why does strain have no units?

**ANSWER:**
```
  STRAIN  -  the ratio of the change produced in a dimension of a body
             to the original value of that dimension.

                        change in the dimension
             strain  =  -----------------------
                          original dimension

  It has NO UNITS and NO DIMENSIONS  [ M^0 L^0 T^0 ]  because it is a
  ratio of two quantities of the SAME kind (a length divided by a
  length, or a volume divided by a volume) — the units cancel out.
```

---

### Q A3
Name the three types of stress.

**ANSWER:**
```
  1.  LONGITUDINAL STRESS  -  force normal to the cross-section, along
                              the length.  TENSILE if pulled,
                              COMPRESSIVE if pushed.

  2.  SHEARING (TANGENTIAL) STRESS  -  force parallel to the surface;
                              the SHAPE changes, the volume does not.

  3.  HYDRAULIC (VOLUME) STRESS  -  equal pressure normal to every face,
                              from all sides; the VOLUME changes, the
                              shape does not.
```

---

### Q A4
What is shearing strain? Give its formula.

**ANSWER:**
```
        F
   ------------>
   +-----------+ - - +
   |         /  |   /
 h |       /    | /        x = sideways displacement of the top face
   |     / th   |/         h = height of the block
   +-----------+
   ////////////

  SHEARING STRAIN is the ANGLE (in radians) through which a face
  originally perpendicular to the fixed face is turned.

                            x
        theta  =  tan(theta) approx  =  ---
                            h

  It is an angle, hence still DIMENSIONLESS.
```

---

## Topic: Hooke's law and the moduli

### Q A5
State Hooke's law.

**ANSWER:**
```
  HOOKE'S LAW:
  Within the ELASTIC LIMIT, the stress developed in a body is
  DIRECTLY PROPORTIONAL to the strain produced in it.

        stress  ∝  strain

        stress  =  E  x  strain

  where E is the MODULUS OF ELASTICITY of the material.
  Its unit is the pascal, the same as that of stress (because
  strain has no unit).
```

> The four words **"within the elastic limit"** carry the mark. Never omit them.

---

### Q A6
Define modulus of elasticity. What are its units and dimensions?

**ANSWER:**
```
  The MODULUS OF ELASTICITY of a material is the ratio of the stress
  applied to the strain produced, within the elastic limit.

                    stress
        E   =     ----------
                    strain

  Unit        :  N/m^2  =  pascal (Pa)
  Dimensions  :  [ M L^-1 T^-2 ]

  It depends only on the MATERIAL and the TEMPERATURE, not on the
  size or shape of the specimen.
```

---

### Q A7
Define Young's modulus. Write its formula for a wire.

**ANSWER:**
```
  YOUNG'S MODULUS is the ratio of longitudinal stress to longitudinal
  strain, within the elastic limit.

              longitudinal stress       F / A        F L
    Y  =    -----------------------  =  --------  =  -------
              longitudinal strain       dL / L       A  dL

  For a wire of radius r carrying a mass m :

                m g L
    Y  =    -------------
              pi r^2 dL

  Unit : pascal (Pa).   Y exists for SOLIDS only.
```

---

### Q A8
Define bulk modulus. Why is a negative sign used in its formula?

**ANSWER:**
```
  BULK MODULUS is the ratio of the hydraulic (volume) stress to the
  volume strain, within the elastic limit.

                     P
    B  =   -   -------------
                ( dV / V )

  THE MINUS SIGN: an INCREASE in pressure always produces a DECREASE
  in volume, so dV is negative. The minus sign is inserted so that
  the bulk modulus comes out POSITIVE.

  Unit : pascal (Pa).  B exists for solids, liquids AND gases.
```

---

### Q A9
Define compressibility. Give its SI unit.

**ANSWER:**
```
  COMPRESSIBILITY is the RECIPROCAL of the bulk modulus. It is the
  fractional decrease in volume per unit increase in pressure.

                1
        K  =   ---
                B

  SI unit     :  Pa^-1  =  m^2 / N
  Dimensions  :  [ M^-1 L^1 T^2 ]

  Gases have a very large compressibility; metals a very small one.
```

---

### Q A10
Define rigidity modulus. What is its value for a liquid?

**ANSWER:**
```
  RIGIDITY (SHEAR) MODULUS is the ratio of the shearing stress to
  the shearing strain, within the elastic limit.

                shearing stress        F / A        F
    eta  =     -----------------  =   --------  =  --------
                shearing strain        theta       A theta

  Unit : pascal (Pa).

  FOR A LIQUID (and for a gas) :   eta  =  0
  because a fluid cannot resist a tangential stress at all — it
  simply flows, however small the shearing stress may be.
```

---

### Q A11
What is Poisson's ratio? State its theoretical and practical limits.

**ANSWER:**
```
  POISSON'S RATIO is the ratio of the lateral strain to the
  longitudinal strain when a wire is stretched.

                 lateral strain          dd / d
    sigma  =  ---------------------  =  --------
                longitudinal strain      dL / L

  It has NO UNITS and NO DIMENSIONS (it is a ratio of two strains).

  Theoretical limits :   -1   to   +0.5
  Practical limits   :    0   to   +0.5
  Actual values      :   0.2  to    0.4  for most solids
```

---

## Topic: Elastic behaviour

### Q A12
What is meant by the elastic limit?

**ANSWER:**
```
  The ELASTIC LIMIT is the MAXIMUM STRESS that can be applied to a
  body such that it still returns EXACTLY to its original shape and
  size when the stress is removed.

  Beyond the elastic limit the body is permanently deformed: on
  unloading it retains a PERMANENT SET.

  On the stress-strain curve it is the point B, just beyond the
  proportional limit A.
```

---

### Q A13
Distinguish between elastic and plastic deformation.

**ANSWER:**
```
  ELASTIC DEFORMATION                 PLASTIC DEFORMATION
  -------------------                 -------------------
  Occurs below the elastic limit      Occurs beyond the elastic limit
  Body fully regains its shape        Body keeps a PERMANENT SET
  Reversible                          Irreversible
  Energy fully recovered              Energy partly lost as heat
  Bonds only stretched                Planes of atoms slide over
                                      one another
```

---

### Q A14
Which is more elastic — steel or rubber? Justify your answer.

**ANSWER:** **STEEL** is far more elastic than rubber.
```
  "More elastic" in physics means it resists deformation MORE, i.e.
  it needs a LARGER stress for the SAME strain, i.e. it has a
  LARGER modulus of elasticity.

      Y (steel)   =  2 x 10^11  Pa
      Y (rubber)  ~  10^6 to 10^8  Pa

  Since Y(steel) is thousands of times larger, steel is much more
  elastic — even though rubber stretches far more easily.
```

---

### Q A15
What is an elastomer? Give one example.

**ANSWER:**
```
  An ELASTOMER is a material that can be stretched to several times
  its original length and still return to its original size when the
  load is removed, but which does NOT obey Hooke's law at any stage
  (its stress-strain graph has no straight portion).

  Examples : rubber, the elastic tissue of the aorta, silk.
```

---

### Q A16
Distinguish between ductile and brittle materials with one example each.

**ANSWER:**
```
  DUCTILE                              BRITTLE
  -------                              -------
  Large plastic region between the     Almost no plastic region;
  yield point and fracture             fracture occurs just after
                                       the elastic limit
  Gives warning (necks, sags)          Breaks suddenly, no warning
  Can be drawn into wires and beaten   Cannot be drawn into wires
  into sheets
  Examples : copper, mild steel,       Examples : glass, cast iron,
             aluminium, gold                      ceramic, concrete
```

---

### Q A17
What is elastic fatigue?

**ANSWER:**
```
  ELASTIC FATIGUE is the loss of elastic strength of a material
  caused by REPEATED CYCLES of stress over a long period.

  Evidence : a rubber band used daily eventually snaps; bridges are
  declared unsafe after many years of traffic; a wire breaks after
  being bent back and forth many times.

  Reason : repeated loading allows microscopic cracks to grow along
  the crystal planes. After a period of rest the material partly
  recovers.
```

---

### Q A18
What is the elastic after-effect? Which materials show almost none of it?

**ANSWER:**
```
  The ELASTIC AFTER-EFFECT is the DELAY in a body returning to its
  original shape after the deforming force has been removed.

  QUARTZ FIBRE and PHOSPHOR BRONZE show practically no after-effect
  (they return instantly), which is exactly why they are used as
  suspension fibres in sensitive galvanometers and torsion balances.

  Glass fibre, by contrast, may take hours to recover fully.
```

---

### Q A19
How does temperature affect the elasticity of a material?

**ANSWER:**
```
  As the TEMPERATURE INCREASES, the ELASTICITY DECREASES (Y falls),
  because heating increases the mean separation of the atoms and
  weakens the interatomic forces.

  Example : a blacksmith heats iron before hammering, because hot
  iron is less elastic and more plastic, so it can be shaped.

  EXCEPTIONS : INVAR and carbon filament, whose elasticity is almost
  unaffected by temperature — hence their use in precision
  instruments.
```

---

### Q A20
Does Young's modulus depend on the length or the thickness of a wire?

**ANSWER:**
```
  NO.

  Young's modulus is a property of the MATERIAL. It depends only on
  the material and its temperature.

  A longer wire stretches more, and a thinner wire stretches more,
  but the RATIO stress/strain remains exactly the same because the
  stress and the strain change together.
```

---

### Q A21
Why is the cross-section of a girder made in the shape of the letter I?

**ANSWER:**
```
  When a beam bends, the TOP layer is compressed and the BOTTOM layer
  is stretched; the middle layer (the NEUTRAL AXIS) carries almost no
  stress and contributes little strength.

  The depression of a beam is   delta = W L^3 / (4 b d^3 Y),
  so the DEPTH d matters as the CUBE while the breadth b matters only
  to the first power.

  The I-shape therefore puts most of the material in the top and
  bottom FLANGES, where it works hardest, with only a thin WEB in the
  middle. Result : the same strength with far less material — lighter,
  cheaper, and stable against sideways buckling.
```

---

### Q A22
Why is a crane rope made of a large number of thin strands instead of
one thick solid rod?

**ANSWER:**
```
  Strength depends only on the TOTAL cross-sectional area, so a
  bundle of thin strands is exactly as strong as a single rod of the
  same total area.

  But a thick solid rod is RIGID and cannot bend around the pulleys,
  whereas each thin strand bends easily, so the stranded rope is
  FLEXIBLE. It is also easier to inspect and it fails gradually
  rather than all at once.
```

---

### Q A23
What does the area under a stress–strain curve represent?

**ANSWER:**
```
  The area under the stress-strain curve represents the ENERGY STORED
  PER UNIT VOLUME (the strain energy density) of the material.

          area  =  (1/2) x stress x strain  =  u        [ J/m^3 ]

  The TOTAL area right up to the fracture point is called the
  TOUGHNESS — the energy per unit volume needed to break the material.
```

---

### Q A24
A wire is cut into two equal halves. What happens to (a) its Young's modulus
and (b) the maximum load it can support?

**ANSWER:**
```
  (a)  YOUNG'S MODULUS is UNCHANGED. It is a property of the material,
       not of the piece.

  (b)  The MAXIMUM LOAD is UNCHANGED. Breaking depends on the breaking
       STRESS times the AREA, and cutting the wire changes neither.

  (What DOES change: the ELONGATION under a given load is halved,
   because dL is proportional to L.)
```

---

### Q A25 (numerical)
A load of 4 kg is suspended from a wire of cross-sectional area
`2 x 10^-6 m²`. Find the stress in the wire.

**ANSWER:**
```
   F  =  m g  =  4  x  9.8  =  39.2  N

              F        39.2
   stress =  ---  =  ---------  =  1.96 x 10^7  Pa
              A       2 x 10^-6
```

---

### Q A26 (numerical)
A wire of length 3 m stretches by 1.5 mm under a load. Find the longitudinal strain.

**ANSWER:**
```
   dL  =  1.5 mm  =  1.5 x 10^-3  m ,   L  =  3 m

               dL       1.5 x 10^-3
   strain  =  ----  =  -------------  =  5 x 10^-4      (no units)
                L            3
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1
Explain the three types of stress with a neat diagram for each.

**ANSWER:**
```
  (1)  LONGITUDINAL STRESS  —  force NORMAL to the cross-section

       TENSILE (pulled, gets longer)

         +---+=============================+---+
      <--| F |          W I R E            | F |-->
         +---+=============================+---+
             |<---------- L -------------->|

       COMPRESSIVE (pushed, gets shorter)

         +---+=============================+---+
      -->| F |        P I L L A R          | F |<--
         +---+=============================+---+

       stress = F / A ,   A = area of the cross-section


  (2)  SHEARING (TANGENTIAL) STRESS  —  force PARALLEL to the surface

                        F
              ------------------>
         +---------------------+ - - - +
         |                   / |      /
      h  |                 /   |    /      the top face slides
         |               /     |  /        sideways by x
         |             / theta |/
         +---------------------+
         ///////////////////////  fixed

       stress = F / A ,   A = area of the face the force is parallel to
       SHAPE changes, VOLUME does not.


  (3)  HYDRAULIC (VOLUME) STRESS  —  pressure from ALL sides

                   P     P     P
                   |     |     |
                   v     v     v
             +-----------------------+
       P --> |       S O L I D       | <-- P
       P --> |       volume V        | <-- P
             +-----------------------+
                   ^     ^     ^
                   |     |     |
                   P     P     P

       stress = P
       VOLUME changes, SHAPE does not.
```

---

### Q B2
Define the three types of strain and state why strain has no units.

**ANSWER:**
```
  1.  LONGITUDINAL STRAIN  =  dL / L
      the fractional change in LENGTH.

  2.  SHEARING STRAIN  =  theta  =  x / h
      the ANGLE (in radians) through which a face perpendicular to
      the fixed face is turned.

  3.  VOLUME (BULK) STRAIN  =  dV / V
      the fractional change in VOLUME.

  WHY NO UNITS
  ------------
  Every one of these is a ratio of two quantities of exactly the same
  kind — a length over a length, or a volume over a volume. The units
  cancel, so strain is a PURE NUMBER with dimensional formula
  [ M^0 L^0 T^0 ]. (Shearing strain is an angle, and the radian is
  itself a ratio of two lengths, so it too is dimensionless.)
```

---

### Q B3  ⭐ THE MOST ASKED 4-MARK QUESTION
Draw the stress–strain curve for a ductile metal and explain the important points on it.

**ANSWER:**
```
  stress
    ^                                D
    |                           **********
    |                       ****          ****
    |                    ***                  **  E   <- FRACTURE POINT
    |                  **
    |            B   **
    |         A  x  *
    |          x*  |
    |        **    |
    |      **      |
    |    **        |
    |  **          |
    +--------------+---------------------------------> strain
    O
    |<-- elastic ->|<--------- plastic region ------->|
        region
```
```
  O -> A   A PERFECT STRAIGHT LINE. Stress is proportional to strain,
           so HOOKE'S LAW is obeyed here. The SLOPE of this line is
           YOUNG'S MODULUS.

  A        PROPORTIONAL LIMIT — the last point at which stress is
           directly proportional to strain.

  B        ELASTIC LIMIT (YIELD POINT) — the last point from which
           the body still returns EXACTLY to its original length.
           The stress here is the YIELD STRENGTH, sigma_y.

  B -> D   PLASTIC REGION. The wire keeps stretching with very little
           extra stress. If the load is removed anywhere here, the
           body does NOT return: it retains a PERMANENT SET.

  D        ULTIMATE TENSILE STRENGTH, sigma_u — the MAXIMUM stress
           the material can withstand. The curve peaks here.

  D -> E   NECKING: a thin waist forms, the area shrinks quickly and
           the stress falls off.

  E        FRACTURE POINT — the material breaks.

  The AREA under the curve = energy stored per unit volume.
```

---

### Q B4
Distinguish between the stress–strain curves of a ductile material, a brittle
material and an elastomer.

**ANSWER:**
```
   DUCTILE (copper)        BRITTLE (glass)        ELASTOMER (rubber)
   ================        ===============        ==================
  s ^                     s ^                    s ^
    |    *****              |      * break         |               *
    |   *     ****          |     *                |             *
    |  *          * E       |    *                 |          **
    | *                     |   *                  |     *****
    |*                      |  *                   |  ***
    +*---------------> e    +*---------------> e   +*--------------> e
     |<-- long -->|          almost no              no straight part
     plastic region          plastic region         at all

  +----------------+---------------+---------------+-----------------+
  |                |  DUCTILE      |  BRITTLE      |  ELASTOMER      |
  +----------------+---------------+---------------+-----------------+
  | Hooke's law    | obeyed up     | obeyed up     | NEVER obeyed    |
  |                | to A          | to A          |                 |
  +----------------+---------------+---------------+-----------------+
  | Plastic region | long          | almost none   | none            |
  +----------------+---------------+---------------+-----------------+
  | Maximum strain | a few %       | very small    | 300 % to 1000 % |
  +----------------+---------------+---------------+-----------------+
  | Warning before | yes, necks    | none, sudden  | does not break  |
  | failure        | and sags      |               | in normal use   |
  +----------------+---------------+---------------+-----------------+
  | Examples       | copper, mild  | glass, cast   | rubber, aorta   |
  |                | steel, gold   | iron, ceramic | tissue, silk    |
  +----------------+---------------+---------------+-----------------+
```

---

### Q B5
Define the three moduli of elasticity and give one application of each.

**ANSWER:**
```
  +---------+--------------------------------+------------------------+
  | MODULUS |  DEFINITION AND FORMULA        |  APPLICATION           |
  +---------+--------------------------------+------------------------+
  | YOUNG'S |  longitudinal stress           |  Choice of steel for   |
  |    Y    |  ------------------- = F L     |  girders, bridges,     |
  |         |  longitudinal strain   -----   |  crane ropes and       |
  |         |                        A dL    |  railway lines         |
  +---------+--------------------------------+------------------------+
  | BULK    |  hydraulic stress        - P   |  Design of submarines  |
  |    B    |  ----------------  =  --------  |  and deep-sea          |
  |         |  volume strain        (dV/V)   |  equipment; hydraulic  |
  |         |  K = 1/B = compressibility     |  machinery             |
  +---------+--------------------------------+------------------------+
  | RIGIDITY|  shearing stress         F     |  Strength of rivets    |
  |   eta   |  ---------------  =  --------  |  and bolts; twisting   |
  |         |  shearing strain     A theta   |  of drive shafts;      |
  |         |                                |  torsion pendulum      |
  +---------+--------------------------------+------------------------+

  All three have the unit PASCAL and the dimensions [ M L^-1 T^-2 ].
  For a given metal the usual order is    Y  >  B  >  eta.
  eta = 0 for liquids and gases; only B applies to fluids.
```

---

### Q B6  ⭐
Derive an expression for the elastic potential energy stored in a stretched wire.
Hence find the energy per unit volume.

**ANSWER:**
```
  SET-UP
  Let the wire have original length L, area of cross-section A and
  Young's modulus Y. Suppose it has already been stretched by x.

  STEP 1  The force required to hold it stretched by x is, from
          Y = F L / (A x) :
                                Y A x
                       F(x)  =  -------
                                   L

  STEP 2  The force is NOT constant — it grows from 0 as the wire
          stretches. So the work done in stretching a further dx is
                       dW  =  F(x) dx

  STEP 3  Total work in stretching from 0 to dL :

                     dL   Y A x            Y A     (dL)^2
             W = INT     ------- dx   =   -----  x --------
                     0      L               L         2

                        1     Y A (dL)^2
             W    =     -  x  ------------
                        2          L

  STEP 4  Since the final force is F = Y A (dL) / L ,

                    +-----------------------------+
                    |                             |
                    |     W  =  (1/2)  F  dL      |
                    |                             |
                    +-----------------------------+

          i.e. average force (F/2) x extension.

  STEP 5  Put F = stress x A and dL = strain x L :

             W  =  (1/2) (stress x A)(strain x L)
                =  (1/2) x stress x strain x (A L)

          and A L is the VOLUME of the wire :

           +-------------------------------------------------+
           |                                                 |
           |   U  =  (1/2) x stress x strain x VOLUME        |
           |                                                 |
           +-------------------------------------------------+

  ENERGY PER UNIT VOLUME

           +-------------------------------------------------+
           |         U                                       |
           |   u  =  ---  =  (1/2) x stress x strain         |
           |         V                                       |
           |                                                 |
           |      =  (1/2) Y (strain)^2  =  stress^2 / (2Y)  |
           |                                                 |
           |   Unit : J/m^3     = the AREA under the          |
           |                      stress-strain curve         |
           +-------------------------------------------------+
```

---

### Q B7
Derive an expression for the elongation of a wire hanging freely under its own weight.

**ANSWER:**
```
  ///////////  ceiling
     |||
     |||        Let the wire have length L, area A, total mass M,
     |||        density rho and Young's modulus Y.
     |||
    -----  dx   Consider a small element of length dx at a distance
     |||   ^    x from the LOWER end.
     |||   | x
     |||   |    The force stretching this element is the weight of
    -----  v    the wire BELOW it:

                        M
              F(x)  =  ---  x  g          ( mass per unit length x x x g )
                        L

  Extension of that element :

                     F(x) dx        M g x dx
          d(dL)  =  ---------  =  ------------
                       A Y           L A Y

  Total extension :

                 L    M g x            M g      L^2
        dL = INT     -------- dx  =  -------- x -----
                 0    L A Y           L A Y       2

        +-----------------------------------------------------+
        |                                                     |
        |             M g L            rho g L^2              |
        |     dL  =  ---------   =   -------------            |
        |             2  A  Y             2 Y                 |
        |                                                     |
        +-----------------------------------------------------+

  PHYSICAL MEANING OF THE 2 : the whole weight M g behaves as though
  it acted at the CENTRE OF MASS of the wire, i.e. at a depth L/2,
  so the extension is HALF of the usual M g L / (A Y).
```

---

### Q B8
Obtain an expression for the thermal stress developed in a rod that is rigidly clamped
at both ends and then heated. Give one practical consequence.

**ANSWER:**
```
   ##########|===================================|##########
    rigid wall         rod of length L            rigid wall

  If the rod were FREE, heating it through dT would lengthen it by

          dL  =  L alpha dT           (alpha = coefficient of
                                       linear expansion)

  The rigid clamps prevent this. Preventing an expansion dL is
  mechanically identical to compressing the rod BACK by dL, so the
  strain developed is

                       dL
          strain  =   ----   =   alpha  dT
                        L

  Therefore, by Hooke's law,

     +---------------------------------------------------------+
     |                                                         |
     |    THERMAL STRESS  =  Y x strain  =  Y alpha dT         |
     |                                                         |
     |    THERMAL FORCE   =  stress x A  =  Y A alpha dT       |
     |                                                         |
     +---------------------------------------------------------+

  IMPORTANT: neither the stress nor the force depends on the LENGTH
  of the rod.

  PRACTICAL CONSEQUENCES
  * Gaps are left between railway lines and between concrete road slabs.
  * Bridges are mounted on roller supports at one end.
  * Long pipelines are laid with expansion loops.
```

---

### Q B9
Describe two applications of the elastic behaviour of materials.

**ANSWER:**
```
  (1)  WHY GIRDERS ARE I-SHAPED

       When a beam bends, its TOP layer is compressed and its BOTTOM
       layer is stretched. The layer in the middle — the NEUTRAL AXIS
       — is hardly stressed and carries little load.

       Depression of a beam :   delta  =  W L^3 / ( 4 b d^3 Y )

       delta ∝ 1/d^3 but only ∝ 1/b, so DEPTH is far more valuable
       than breadth. A very deep thin rectangle, however, would buckle
       sideways.

       The I-section is the compromise: thick FLANGES top and bottom
       (where the stress is large) joined by a thin WEB. It gives the
       same strength with much less material — lighter, cheaper, and
       stable against buckling.

           +--------------------+   <- top flange (compressed)
           +---+------------+---+
               |############|       <- web (neutral axis, thin)
           +---+------------+---+
           +--------------------+   <- bottom flange (stretched)

  (2)  DESIGN OF A CRANE ROPE

       To lift 10 000 kg with the working stress kept at 10^8 Pa:

           F = m g = 10 000 x 9.8 = 9.8 x 10^4 N

           A = F / stress = 9.8 x 10^4 / 10^8 = 9.8 x 10^-4 m^2

           r = sqrt( A / pi ) = sqrt( 3.12 x 10^-4 ) = 1.8 x 10^-2 m

       So a radius of about 1.8 cm is the minimum; in practice about
       3 cm is used, to allow a large factor of safety.

       The rope is made of MANY THIN STRANDS twisted together: the
       total area (hence the strength) is the same, but each thin
       strand bends easily, so the rope is FLEXIBLE enough to run
       over the pulleys.
```

---

### Q B10
Estimate the maximum possible height of a mountain on the Earth.

**ANSWER:**
```
  The rock at the base of a mountain of height h carries the pressure
  of all the rock above it:

              P  =  h rho g

  The mountain can stand only while this pressure stays below the
  elastic limit S of the rock (beyond it the rock flows plastically):

              h rho g   <   S

              +--------------------------------+
              |                                |
              |                  S             |
              |      h(max)  =  ------         |
              |                 rho g          |
              |                                |
              +--------------------------------+

  Substituting typical rock values
       S = 3 x 10^8 Pa ,  rho = 3 x 10^3 kg/m^3 ,  g = 10 m/s^2 :

                     3 x 10^8
       h(max)  =  ---------------  =  1 x 10^4 m  =  10 km
                   3 x 10^3 x 10

  Mount Everest is 8.85 km high — comfortably below this estimate,
  which is a striking confirmation of the argument.
```

---

### Q B11 (numerical)
A steel wire of length 4 m and cross-sectional area `2 x 10^-5 m²` stretches by
0.05 mm when a mass of 5 kg is hung from it. Find Young's modulus of steel.

**ANSWER:**
```
   F   =  m g  =  5 x 9.8  =  49  N
   L   =  4 m
   A   =  2 x 10^-5 m^2
   dL  =  0.05 mm  =  5 x 10^-5 m

               F L                49  x  4
   Y   =    ---------   =  -------------------------
               A dL         2 x 10^-5 x 5 x 10^-5

                 196              196
       =    -------------  =  ----------  =  1.96 x 10^11  Pa
             1 x 10^-9          10^-9

   Y  =  1.96 x 10^11 Pa , which is the standard value for steel.
```

---

### Q B12 (numerical)
A steel ball of volume `1000 cm³` is taken to the bottom of the sea where the
pressure is `2 x 10^7 Pa`. Find the change in its volume.
(`B(steel) = 1.6 x 10^11 Pa`)

**ANSWER:**
```
   V  =  1000 cm^3  =  1000 x 10^-6 m^3  =  1 x 10^-3 m^3

   Fractional change

        dV        P          2 x 10^7
       ----  =  -----  =  --------------  =  1.25 x 10^-4
         V        B        1.6 x 10^11

   Change in volume

        dV  =  1.25 x 10^-4  x  1 x 10^-3  =  1.25 x 10^-7  m^3

            =  0.125  cm^3            (a decrease)

   Even at that enormous pressure the ball shrinks by only about
   one part in eight thousand.
```

---

### Q B13 (numerical)
A cube of aluminium of side 10 cm has its lower face fixed and a tangential force of
100 N applied to its upper face. If the upper face is displaced by `4 x 10^-8 m`,
find the rigidity modulus.

**ANSWER:**
```
   A  =  (0.1)^2  =  1 x 10^-2 m^2 ,   h  =  0.1 m ,   x  =  4 x 10^-8 m

   Shearing stress  =  F / A  =  100 / 10^-2  =  1 x 10^4  Pa

                              x        4 x 10^-8
   Shearing strain  = theta = ---  =  -----------  =  4 x 10^-7  rad
                              h          0.1

                stress        1 x 10^4
   eta   =     --------  =  ------------  =  2.5 x 10^10  Pa
                strain       4 x 10^-7
```

---

### Q B14 (numerical)
A wire of length 1 m and area of cross-section `1 x 10^-6 m²` is stretched by 2 mm.
Find (a) the energy stored and (b) the energy per unit volume.
(`Y = 2 x 10^11 Pa`)

**ANSWER:**
```
  (a)          1     Y A (dL)^2
        U  =   -  x  ------------
               2          L

               1     2 x 10^11 x 1 x 10^-6 x (2 x 10^-3)^2
          =    -  x  ---------------------------------------
               2                       1

               1
          =    -  x  2 x 10^5  x  4 x 10^-6
               2

               1
          =    -  x  0.8      =   0.4  J
               2

  (b)   Volume  =  A L  =  1 x 10^-6  x  1  =  1 x 10^-6  m^3

              U          0.4
        u = ------  =  ---------  =  4 x 10^5  J/m^3
            volume     1 x 10^-6

        CHECK :  strain = 2 x 10^-3 / 1 = 2 x 10^-3
                 u = (1/2) Y (strain)^2
                   = 0.5 x 2 x 10^11 x 4 x 10^-6
                   = 4 x 10^5  J/m^3        ✓  agrees
```

---

### Q B15 (numerical)
A steel wire 20 m long hangs vertically from a support. Find its elongation due to
its own weight. (`rho = 7800 kg/m³`, `Y = 2 x 10^11 Pa`, `g = 9.8 m/s²`)

**ANSWER:**
```
            rho g L^2         7800  x  9.8  x  (20)^2
   dL  =  -------------  =  ----------------------------
              2 Y                2  x  2 x 10^11

            7800 x 9.8 x 400        30 576 000
       =  --------------------  =  ------------
              4 x 10^11             4 x 10^11

   dL  =  7.64 x 10^-5  m   =   0.076 mm

   The wire's own weight stretches it by less than a tenth of a
   millimetre, which is why we normally neglect it.
```

---

### Q B16 (numerical)
A steel rod of area of cross-section `1 x 10^-4 m²` is clamped rigidly at both ends
at 20 °C and then heated to 70 °C. Find the thermal stress and the force exerted on
the clamps. (`Y = 2 x 10^11 Pa`, `alpha = 1.2 x 10^-5 per °C`)

**ANSWER:**
```
   dT  =  70 - 20  =  50 deg C

   THERMAL STRESS  =  Y alpha dT
                   =  2 x 10^11  x  1.2 x 10^-5  x  50
                   =  (2 x 1.2 x 50) x 10^6
                   =  1.2 x 10^8  Pa

   FORCE  =  stress x A  =  1.2 x 10^8  x  1 x 10^-4

          =  1.2 x 10^4  N       (about 1.2 tonnes of force)

   Note that neither answer depends on the length of the rod.
```

---

### Q B17 (numerical)
A wire 2 m long and 1 mm in **diameter** carries a load of 10 kg. Find the elongation.
(`Y = 2 x 10^11 Pa`)

**ANSWER:**
```
   F  =  10 x 9.8  =  98 N
   r  =  0.5 mm  =  5 x 10^-4 m         (HALVE the diameter!)
   A  =  pi r^2  =  3.14 x 25 x 10^-8  =  7.85 x 10^-7  m^2

              F L                 98  x  2
   dL  =  ----------  =  -----------------------------
              A Y         7.85 x 10^-7 x 2 x 10^11

              196              196
       =  -------------  =  ----------  =  1.25 x 10^-3 m
           1.57 x 10^5       157 000

   dL  =  1.25 mm
```

---

### Q B18 (numerical)
Two wires of the same material have lengths in the ratio 1 : 2 and radii in the
ratio 2 : 1. They carry the same load. Find the ratio of their elongations.

**ANSWER:**
```
              F L                       L
   dL  =  ----------      so    dL  ∝  -----     (same F, same Y)
           pi r^2 Y                     r^2

   dL1        L1     ( r2 )^2        1     ( 1 )^2       1     1        1
   ----  =  ----- x  --------  =    ---  x -------  =   --- x ---  =   ---
   dL2        L2     ( r1 )^2        2     ( 2 )         2     4        8

   The elongations are in the ratio  1 : 8.
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1
Define stress and strain. State Hooke's law. Draw the stress–strain curve for a
ductile metal and explain every important point on it. Distinguish between elastic and
plastic behaviour and between a ductile and a brittle material.

**MODEL ANSWER — with the mark split**

```
  ================== PART 1 : STRESS  (1 mark) ==================

  STRESS = internal restoring force per unit area of cross-section.

              F
     stress = ---        unit : pascal (Pa)
              A          dimensions : [ M L^-1 T^-2 ]

  Three types : LONGITUDINAL (tensile / compressive), SHEARING
  (tangential), HYDRAULIC (volume).

  ================== PART 2 : STRAIN  (1 mark) ==================

  STRAIN = change in a dimension / original value of that dimension.
  NO units, NO dimensions, because the units cancel.

  Three types :  dL / L  ,  theta = x/h  ,  dV / V

  ================== PART 3 : HOOKE'S LAW  (1 mark) =============

  Within the elastic limit, stress is directly proportional to strain.

     stress  =  E x strain ,   E = modulus of elasticity, unit Pa

  ================== PART 4 : THE CURVE  (3 marks) ==============
  (2 marks for the correctly drawn and labelled graph,
   1 mark for the explanation of the points)

  stress
    ^                                D
    |                           **********
    |                       ****          ****
    |                    ***                  **  E  <- FRACTURE
    |                  **
    |            B   **
    |         A  x  *
    |          x*  |
    |        **    |
    |      **      |
    |    **        |
    |  **          |
    +--------------+--------------------------------> strain
    O
    |<-- elastic ->|<--------- plastic region ------>|

    O-A : straight line, HOOKE'S LAW OBEYED. Slope = Young's modulus.
    A   : PROPORTIONAL LIMIT.
    B   : ELASTIC LIMIT / YIELD POINT. Stress here = yield strength.
    B-D : PLASTIC REGION — unloading leaves a PERMANENT SET.
    D   : ULTIMATE TENSILE STRENGTH — the highest stress the material
          can bear.
    D-E : necking; the cross-section thins rapidly.
    E   : FRACTURE POINT — the specimen breaks.

  ================== PART 5 : ELASTIC vs PLASTIC  (1 mark) ======

  ELASTIC (O to B)                  PLASTIC (B to E)
  ----------------                  ----------------
  returns exactly to its            keeps a permanent set
  original shape
  reversible, energy recovered      irreversible, energy lost as heat
  bonds only stretched              planes of atoms slide

  ================== PART 6 : DUCTILE vs BRITTLE  (1 mark) ======

  DUCTILE : long plastic region, warns before failing by necking and
            sagging, can be drawn into wires.  (copper, mild steel)

  BRITTLE : almost no plastic region, fractures suddenly just past the
            elastic limit, cannot be drawn into wires.
            (glass, cast iron, ceramic)

  ADD FOR A BONUS : an ELASTOMER (rubber) is elastic but has NO
  straight portion at all, so it never obeys Hooke's law, and its
  strain can reach several hundred per cent.
```

---

### Q C2
Define the three moduli of elasticity. Give the formula, unit and one application of
each, compare them in a table, and define compressibility and Poisson's ratio.

**MODEL ANSWER — with the mark split**

```
  ============ PART 1 : YOUNG'S MODULUS  (2 marks) ============

  The ratio of longitudinal stress to longitudinal strain, within
  the elastic limit.

             F / A       F L                m g L
     Y  =   --------  =  ------      =    ----------
             dL / L      A  dL             pi r^2 dL

     Unit : Pa      Dim : [ M L^-1 T^-2 ]     Solids only
     Application : the choice of steel (largest Y among common
     metals) for girders, bridges, crane ropes and railway lines.

  ============ PART 2 : BULK MODULUS  (2 marks) ===============

  The ratio of hydraulic stress to volume strain, within the
  elastic limit.

                    P
     B  =   -   ---------
                ( dV / V )

     The minus sign is needed because an increase in pressure gives
     a DECREASE in volume, so that B comes out positive.

     Unit : Pa       Solids, LIQUIDS and GASES
     Application : the design of submarines and deep-sea equipment;
     hydraulic machinery.

     COMPRESSIBILITY  K = 1 / B , unit Pa^-1 = m^2/N ; the fractional
     decrease in volume per unit increase in pressure. Gases have a
     huge compressibility, metals a very small one.

  ============ PART 3 : RIGIDITY MODULUS  (2 marks) ===========

  The ratio of shearing stress to shearing strain, within the
  elastic limit.

              F / A        F                       x
     eta =   --------  =  --------   ,  theta  =  ---
              theta       A theta                  h

     Unit : Pa      SOLIDS ONLY ;  eta = 0 for liquids and gases,
     because a fluid cannot resist any tangential stress.
     Application : the shear strength of rivets and bolts, twisting
     of drive shafts, the torsion pendulum.

  ============ PART 4 : COMPARISON TABLE  (1 mark) ============

  +---------+--------------+--------------+---------------+
  |         |  Y           |  B           |  eta          |
  +---------+--------------+--------------+---------------+
  | changes |  LENGTH      |  VOLUME      |  SHAPE        |
  | stress  |  F/A normal  |  P all sides |  F/A parallel |
  | strain  |  dL/L        |  dV/V        |  theta = x/h  |
  | unit    |  Pa          |  Pa          |  Pa           |
  | fluids? |  no          |  YES         |  no (eta = 0) |
  | steel   |  2.0 x 10^11 |  1.6 x 10^11 |  0.84 x 10^11 |
  +---------+--------------+--------------+---------------+

  Usual order for a metal :    Y  >  B  >  eta

  ============ PART 5 : POISSON'S RATIO  (1 mark) =============

               lateral strain        dd / d
   sigma  =  --------------------  = --------
              longitudinal strain     dL / L

   NO units, NO dimensions.
   Theoretical range -1 to 0.5 ; practical range 0 to 0.5 ;
   actual values 0.2 to 0.4 for common solids.
```

---

### Q C3
Derive the expression for the elastic potential energy stored in a stretched wire.
Show that the energy per unit volume equals the area under the stress–strain curve,
and derive the elongation of a wire under its own weight.

**MODEL ANSWER — with the mark split**

```
  ======= PART 1 : ENERGY IN A STRETCHED WIRE  (4 marks) =======

  Wire : length L, area A, Young's modulus Y.
  When it has already been stretched by x, the holding force is

           F(x)  =  Y A x / L

  Work done for a further extension dx :   dW = F(x) dx

               dL   Y A x           Y A   (dL)^2       1  Y A (dL)^2
     W  =  INT     ------- dx  =   ----- x -------  =  -  ----------
               0      L              L        2        2       L

  Writing the final force F = Y A dL / L :

           W  =  (1/2) F dL          <-- "average force x extension"

  Putting F = stress x A and dL = strain x L :

           W  =  (1/2) x stress x strain x (A L)

     +--------------------------------------------------------+
     |    U  =  (1/2)  x  stress  x  strain  x  VOLUME        |
     +--------------------------------------------------------+

  ======= PART 2 : ENERGY DENSITY AND THE AREA  (2 marks) ======

           U        1
     u  =  ---  =   -  x stress x strain
           V        2

        =  (1/2) Y (strain)^2   =   (stress)^2 / (2 Y)     [ J/m^3 ]

  stress
    ^        /|
    |      /##|      Within the straight (Hookean) part the graph is
    |    /####|      a straight line through the origin. The area
    |  /######|      under it up to a strain e is the area of a
    |/########|      TRIANGLE:
    +---------+---> strain
              e         area = (1/2) x base x height
                             = (1/2) x strain x stress
                             = u

  So the AREA UNDER THE STRESS-STRAIN CURVE IS THE ENERGY STORED
  PER UNIT VOLUME.  The total area up to fracture is the TOUGHNESS.

  ======= PART 3 : ELONGATION UNDER OWN WEIGHT  (2 marks) ======

  Element of length dx at a height x above the lower end. The force
  stretching it is the weight of the wire below it :

           F(x)  =  (M / L) x g

  Its extension is  d(dL) = F(x) dx / (A Y) = M g x dx / (L A Y)

               L   M g x            M g     L^2
    dL  =  INT     ------- dx  =  ------- x -----
               0    L A Y          L A Y     2

     +--------------------------------------------------------+
     |          M g L           rho g L^2                     |
     |   dL  =  ------- =     -------------                   |
     |          2 A Y             2 Y                         |
     +--------------------------------------------------------+

  The factor 2 appears because the whole weight acts effectively at
  the centre of mass, at a depth L/2.
```

---

### Q C4
Explain, with reasons, four applications of the elastic behaviour of materials.

**MODEL ANSWER — with the mark split**

```
  ======= 1. THE I-SHAPED GIRDER  (2 marks) =======

  A beam of span L, breadth b and depth d, supported at both ends and
  loaded W at its centre, sags by

             delta  =  W L^3 / ( 4 b d^3 Y )

  So delta ∝ 1/d^3 but only ∝ 1/b : DEPTH is far more valuable than
  breadth. When the beam bends, the top layer is COMPRESSED and the
  bottom layer is STRETCHED, while the middle layer (the NEUTRAL
  AXIS) is almost unstressed.

  Therefore the material is concentrated in top and bottom FLANGES,
  joined by a thin WEB — the letter I. Same strength, far less
  material, lighter and cheaper, and the wide flanges also stop the
  deep beam from buckling sideways.

  ======= 2. THE CRANE ROPE  (2 marks) =======

  For a load of 10 000 kg at a safe working stress of 10^8 Pa :

     F = 9.8 x 10^4 N  ->  A = F/stress = 9.8 x 10^-4 m^2
                       ->  r = 1.8 x 10^-2 m ~ 1.8 cm

  In practice about 3 cm is used, to give a large factor of safety.

  The rope is made of MANY THIN STRANDS rather than one thick rod:
  the total area, and hence the strength, is the same, but the thin
  strands bend easily so the rope is FLEXIBLE enough to run over
  the pulleys.

  ======= 3. THE MAXIMUM HEIGHT OF A MOUNTAIN  (2 marks) =======

  The rock at the base bears a pressure  P = h rho g , which must not
  exceed the elastic limit S of the rock, or the rock flows :

             h(max)  =  S / (rho g)

  With S = 3 x 10^8 Pa , rho = 3 x 10^3 kg/m^3 , g = 10 m/s^2

             h(max)  =  10^4 m  =  10 km

  Everest, at 8.85 km, is just under this limit.

  ======= 4. BRIDGES, PILLARS AND RAILWAY LINES  (2 marks) =======

  * A bridge is designed so that the maximum stress under the heaviest
    expected traffic stays well BELOW the elastic limit, with a
    FACTOR OF SAFETY of several times — otherwise repeated loading
    causes ELASTIC FATIGUE and eventual collapse.
  * Pillars with rounded ends buckle more easily than pillars with
    distributed flat ends, so building columns are given broad bases
    and capitals.
  * Railway lines are laid with gaps, and bridges rest on rollers, so
    that thermal stress  Y alpha dT  cannot build up when the metal
    heats in the sun.
  * Steel is chosen over other metals throughout because its Young's
    modulus (2 x 10^11 Pa) is the largest of the common construction
    metals, so it deforms least under a given load.
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+--------------------------------------------+---------+-----------+
  | RANK |  QUESTION TYPE                             | SECTION |  CHANCE   |
  +------+--------------------------------------------+---------+-----------+
  |   1  |  Define stress / strain, units, dimensions |    A    |  Very high|
  +------+--------------------------------------------+---------+-----------+
  |   2  |  State Hooke's law / define modulus of     |    A    |  Very high|
  |      |  elasticity                                |         |           |
  +------+--------------------------------------------+---------+-----------+
  |   3  |  Stress-strain curve, drawn and labelled   |    B    |  Very high|
  +------+--------------------------------------------+---------+-----------+
  |   4  |  Numerical on Y = F L / (A dL)             |   A/B   |  Very high|
  +------+--------------------------------------------+---------+-----------+
  |   5  |  Define Young's / bulk / rigidity modulus  |    A    |  High     |
  +------+--------------------------------------------+---------+-----------+
  |   6  |  Poisson's ratio: definition and limits    |    A    |  High     |
  +------+--------------------------------------------+---------+-----------+
  |   7  |  Elastic energy in a stretched wire        |    B    |  High     |
  |      |  (derivation or numerical)                 |         |           |
  +------+--------------------------------------------+---------+-----------+
  |   8  |  Which is more elastic, steel or rubber?   |    A    |  High     |
  +------+--------------------------------------------+---------+-----------+
  |   9  |  Why are girders I-shaped?                 |   A/B   |  Medium   |
  +------+--------------------------------------------+---------+-----------+
  |  10  |  Bulk modulus / compressibility numerical  |    B    |  Medium   |
  +------+--------------------------------------------+---------+-----------+
  |  11  |  Ductile vs brittle ; what is an elastomer |    A    |  Medium   |
  +------+--------------------------------------------+---------+-----------+
  |  12  |  Elastic fatigue / elastic after-effect    |    A    |  Medium   |
  +------+--------------------------------------------+---------+-----------+
  |  13  |  Elongation under own weight               |    B    |  Medium   |
  +------+--------------------------------------------+---------+-----------+
  |  14  |  Thermal stress in a clamped rod           |    B    |  Medium   |
  +------+--------------------------------------------+---------+-----------+
  |  15  |  Maximum height of a mountain              |    B    |  Low      |
  +------+--------------------------------------------+---------+-----------+

  IF YOU HAVE TIME FOR ONLY THREE THINGS:
      1.  The stress-strain curve with all five labels.
      2.  Y = F L / (A dL) and five numericals using it.
      3.  The definitions of stress, strain and Hooke's law, word perfect.
```
