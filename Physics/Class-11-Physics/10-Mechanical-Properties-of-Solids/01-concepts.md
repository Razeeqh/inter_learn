# Mechanical Properties of Solids — Concepts Explained From Zero

Read this with a pen in your hand. Redraw every ASCII diagram yourself, especially the
**stress–strain curve** — in this chapter the examiner gives a full mark just for a
correctly labelled figure, and there is one figure that appears again and again.

---

# TOPIC 1 — WHY DOES A SOLID SPRING BACK? (INTERATOMIC FORCES)

## 1.1 The everyday picture

Take a rubber band. Stretch it. Let go. It snaps back.
Take a lump of chewing gum. Stretch it. Let go. It stays stretched.

```
  RUBBER BAND  ->  comes back      ->  ELASTIC
  CHEWING GUM  ->  stays deformed  ->  PLASTIC
```

Why does the rubber band come back? Because something inside it is pulling it back.
That "something" is the **interatomic force**.

## 1.2 The ball-and-spring model of a solid

A solid is not a smooth blob. It is a regular grid (a **lattice**) of atoms, and each
atom is joined to its neighbours by what behaves exactly like a tiny spring.

```
        THE SPRING-BALL MODEL OF A SOLID
        =================================

     (o)--/\/\/\--(o)--/\/\/\--(o)--/\/\/\--(o)
      |            |            |            |
      \            \            \            \
      /            /            /            /
      \            \            \            \
      |            |            |            |
     (o)--/\/\/\--(o)--/\/\/\--(o)--/\/\/\--(o)
      |            |            |            |
      \            \            \            \
      /            /            /            /
      \            \            \            \
      |            |            |            |
     (o)--/\/\/\--(o)--/\/\/\--(o)--/\/\/\--(o)

     (o)  =  an atom          /\/\/\  =  the interatomic force,
                                         behaving like a spring
```

- **Stretch** the solid → you stretch every little spring → they all pull back.
- **Compress** the solid → you squash every little spring → they all push back.
- Remove the load → the springs return to their natural length → the solid regains
  its original shape.

**That is elasticity, in one sentence.**

## 1.3 The graph of interatomic force against separation

This is a standard 2-mark / 4-mark figure. Let `r` be the distance between two
neighbouring atoms and `r0` the natural (equilibrium) separation.

```
          INTERATOMIC FORCE  F   versus  SEPARATION  r
          ===========================================

    F
    ^
    |  *
    |  |
    |  |          REPULSION  (F is positive: the atoms push apart)
    |   *         happens when  r < r0  — you have SQUEEZED them
  + |    *
    |     *
    |      *
    |       *
  0 +--------*------------------------------------------------> r
    |         *      r0                                  (large r,
    |          *      ^                                   F -> 0)
    |           *     |
  - |            *    |  ATTRACTION (F is negative: atoms pull together)
    |             *   |  happens when  r > r0  — you have STRETCHED them
    |              *  |
    |               * |
    |                *|
    |                 **                      ****************
    |                   ***               ****
    |                      ***_________***
    |                          ^
    |                       r = rm : the attraction is a MAXIMUM here.
    |                       Beyond rm the bond is losing its grip.
    |
```

Read the graph like this:

| Region | What it means physically |
|---|---|
| `r < r0` | Atoms pushed too close. Force is **repulsive** and rises very steeply. This is why solids are almost impossible to compress. |
| `r = r0` | Equilibrium. Net force is **zero**. This is where the atoms sit when no load is applied. Potential energy is a **minimum** here. |
| `r0 < r < rm` | Atoms pulled apart. Force is **attractive** and grows. The solid pulls itself back — this is the **restoring force**. |
| `r = rm` | Attraction is maximum. The corresponding stress is roughly the **breaking stress**. |
| `r > rm` | Attraction now *falls* with distance. The bond is effectively broken; the solid fractures. |
| `r >> r0` | Force → 0. The atoms no longer know about each other. |

> **TRAP:** Many students draw the curve crossing the axis but forget to mark `r0`.
> The label `r0` and the words "net force = zero, equilibrium" are where the mark is.

## 1.4 So what does Hooke's law really come from?

Near `r = r0` the curve is almost a **straight line**. A small displacement `x` from
`r0` therefore produces a restoring force almost exactly proportional to `x` — which
is Hooke's law for a spring, `F = -k x`. Add up billions of these tiny springs and you
get Hooke's law for the whole solid: **stress is proportional to strain**.

Push far away from `r0` and the curve is no longer straight — and that is exactly why
Hooke's law fails for large loads.

---

# TOPIC 2 — ELASTICITY AND PLASTICITY

## 2.1 The two definitions to write in the exam

> **ELASTICITY:** the property of a body by virtue of which it **regains its original
> shape and size** when the deforming force is removed.

> **PLASTICITY:** the property of a body by virtue of which it **does not regain** its
> original shape and size after the deforming force is removed; the deformation is
> permanent.

## 2.2 Perfectly elastic and perfectly plastic

```
  +----------------------------+--------------------------------------------+
  |  PERFECTLY ELASTIC BODY    |  Regains its original shape COMPLETELY.    |
  |                            |  Nearest real example : QUARTZ FIBRE       |
  |                            |  (also phosphor bronze). No body is        |
  |                            |  perfectly elastic in the ideal sense.     |
  +----------------------------+--------------------------------------------+
  |  PERFECTLY PLASTIC BODY    |  Does not recover AT ALL.                  |
  |                            |  Nearest real example : PUTTY, WET CLAY,   |
  |                            |  PARAFFIN WAX, chewing gum.                |
  +----------------------------+--------------------------------------------+
```

## 2.3 The famous trick question: steel or rubber?

**"Which is more elastic — steel or rubber?"** The answer is **STEEL**, and almost
everyone gets it wrong because in ordinary speech "elastic" means "stretchy".

```
  In physics, MORE ELASTIC  =  puts up a BIGGER FIGHT against being deformed
                            =  needs a BIGGER stress for the SAME strain
                            =  has a LARGER modulus of elasticity

  Y (steel)   =  2 x 10^11  Pa
  Y (rubber)  ~  10^6  to  10^8  Pa          (thousands of times smaller)

  So STEEL is far more elastic than rubber.
```

> **TRAP:** never answer "rubber, because it stretches more". Stretching more means a
> *smaller* modulus, which means *less* elastic. Write the numbers for `Y` — that is
> what earns the mark.

## WORKED EXAMPLE 2.1

A steel wire and a rubber cord of the same length and the same cross-section carry
the same load. Which stretches more, and by what rough factor?

```
  Same F, same A, same L  ->  same stress.

              stress                          1
  strain  =  --------      so    strain  ∝  -----
                Y                             Y

  Y(steel)  = 2 x 10^11 Pa       Y(rubber) ~ 1 x 10^6 Pa

  strain(rubber)     Y(steel)      2 x 10^11
  --------------  =  ---------  =  ----------  =  2 x 10^5
  strain(steel)      Y(rubber)      1 x 10^6

  The rubber stretches roughly 200 000 times as much —
  which is precisely why steel is the MORE ELASTIC of the two.
```

---

# TOPIC 3 — STRESS

## 3.1 The definition

When you apply a deforming force to a body, the body sets up an equal and opposite
**internal restoring force** (Newton's third law, applied inside the material).

```
  +--------------------------------------------------------------+
  |                                                              |
  |               internal restoring force        F              |
  |   STRESS  =  ---------------------------  =  ---             |
  |                    area of cross-section      A              |
  |                                                              |
  |   In equilibrium the restoring force EQUALS the applied      |
  |   force, so in every numerical you simply use  F / A.        |
  |                                                              |
  |   SI unit      :  N / m^2  =  PASCAL (Pa)                    |
  |   CGS unit     :  dyne / cm^2                                |
  |   Dimensions   :  [ M^1 L^-1 T^-2 ]     (same as PRESSURE)   |
  |                                                              |
  +--------------------------------------------------------------+
```

> **TRAP:** stress has the **same unit and dimensions as pressure**, but it is *not*
> the same thing. Pressure is always normal and always caused by something outside;
> stress may be tangential, and it is the material's own internal response.
> Also, stress is **not a vector** — in full generality it is a tensor. In this chapter
> just treat it as a magnitude and never argue about its direction.

## 3.2 The three types of stress

### (a) LONGITUDINAL STRESS — force perpendicular to the face, along the length

```
      TENSILE  (the body is PULLED, it gets LONGER)
      ============================================

           |<--------------  L  -------------->|
                                                <-- dL -->
      +----+==================================+-----+
   <--| F  |          W I R E                 |  F  |-->
      +----+==================================+-----+
           |                                  |
        area of cross-section = A

           F
   stress = ---      (positive, called TENSILE STRESS)
           A


      COMPRESSIVE  (the body is PUSHED, it gets SHORTER)
      =================================================

           |<--------------  L  -------------->|

      +----+==================================+-----+
   -->| F  |          P I L L A R             |  F  |<--
      +----+==================================+-----+

           F
   stress = ---      (called COMPRESSIVE STRESS)
           A

   A pillar under a building, a column, a leg of a table
   are all under compressive stress.
```

### (b) SHEARING STRESS (also called TANGENTIAL STRESS)

Here the force acts **parallel to** (along) the surface, so the body's shape changes
but its volume does not.

```
      SHEARING / TANGENTIAL STRESS
      ============================

                        F  (parallel to the top face)
             ---------------------->
        +-----------------------+  - - - - - - +
        |                    /  |             /
        |                  /    |           /   <-- the top face slides
        |                /      |         /         a distance x
     h  |              /        |       /
        |            /          |     /
        |          /            |   /
        |        /              | /
        +---------------------- +
        ///////////////////////////   fixed bottom face

                       tangential force        F
        shearing stress  =  ----------------  =  ---
                            area of the face      A

        Here A is the area of the face the force is PARALLEL TO
        (the top face), not the cross-section it cuts through.
```

### (c) HYDRAULIC STRESS (also called VOLUME or BULK STRESS)

The body is squeezed from **every direction at once**, usually by immersing it in a
fluid under pressure.

```
      HYDRAULIC / VOLUME STRESS
      =========================

                    P        P        P
                    |        |        |
                    v        v        v
              +-----------------------------+
        P --> |                             | <-- P
        P --> |         S O L I D           | <-- P
        P --> |         volume V            | <-- P
              +-----------------------------+
                    ^        ^        ^
                    |        |        |
                    P        P        P

        The pressure is the SAME on every face and always NORMAL
        to it. The SHAPE does not change; only the VOLUME shrinks.

        hydraulic stress  =  P   (the excess pressure of the fluid)
```

## 3.3 Summary table of the three stresses

| Type of stress | Direction of the force | What changes | Formula |
|---|---|---|---|
| Longitudinal (tensile / compressive) | perpendicular to the cross-section, along the length | length | `F / A` |
| Shearing (tangential) | parallel to the surface | shape only | `F / A` |
| Hydraulic (volume) | perpendicular, from all sides | volume only | `P` |

## WORKED EXAMPLE 3.1

A load of 10 kg is hung from a wire of radius 1 mm. Find the longitudinal stress.
(g = 10 m/s²)

```
  Force        F  =  m g  =  10 x 10  =  100 N

  Radius       r  =  1 mm  =  1 x 10^-3 m

  Area         A  =  pi r^2  =  3.14 x (10^-3)^2  =  3.14 x 10^-6  m^2

                       F        100
  Stress  =           ---  =  -----------  =  3.18 x 10^7  Pa
                       A       3.14 x 10^-6
```

## WORKED EXAMPLE 3.2

A cube of side 10 cm has a tangential force of 100 N applied to its top face while the
bottom is fixed. Find the shearing stress.

```
  Area of the top face  A  =  (0.10)^2  =  1 x 10^-2  m^2

                          F        100
  Shearing stress  =     ---  =  ---------  =  1 x 10^4  Pa
                          A       10^-2
```

> **TRAP:** with a **cube** every face has the same area, so students get away with
> being careless. With a rectangular block you must use the area of the face the force
> is **sliding along**, not the cross-section it is cutting.

---

# TOPIC 4 — STRAIN

## 4.1 The definition

> **STRAIN** is the ratio of the **change** produced in a dimension of the body to the
> **original value** of that dimension.

```
  +---------------------------------------------------------+
  |                                                         |
  |                       change in the dimension           |
  |     STRAIN   =    -------------------------------       |
  |                     original value of that dimension    |
  |                                                         |
  |     It is a RATIO of two identical quantities, so:      |
  |                                                         |
  |          NO UNITS         and       NO DIMENSIONS       |
  |          (dimensional formula  [ M^0 L^0 T^0 ] )        |
  |                                                         |
  +---------------------------------------------------------+
```

This "no units" fact is a favourite 2-mark question. The reason must be written out:
*strain is a length divided by a length (or a volume by a volume), so the units cancel.*

## 4.2 The three types of strain — one to match each stress

### (a) LONGITUDINAL STRAIN

```
        |<------------- L ------------->|<-- dL -->|
        +===============================+==========+
        original length L                stretched by dL

                                 dL         change in length
        longitudinal strain  =  ----   =  ------------------
                                  L         original length
```

### (b) SHEARING STRAIN

```
                    F
          ------------------->
        +---------------------+ - - - - +
        |                  /  |        /
        |                /    |      /       x  =  sideways slide of
     h  |              /      |    /               the top face
        |            /        |  /
        |          / theta    |/
        +---------------------+
        //////////////////////

                                       x
        shearing strain  =  theta  =  ---     (in radians)
                                       h

        For the small angles that occur in practice
        tan(theta) is almost exactly theta, so the
        ANGLE OF SHEAR itself is the strain.
```

Shearing strain is measured as an **angle**, but the radian is a pure ratio, so it is
still dimensionless.

### (c) VOLUME (BULK) STRAIN

```
                             dV         change in volume
        volume strain  =  ------   =  ------------------
                             V          original volume
```

## 4.3 Summary table

| Stress applied | Strain produced | Formula | Symbol |
|---|---|---|---|
| Longitudinal | Longitudinal strain | `dL / L` | often `e` |
| Shearing | Shearing strain | `theta = x / h` | `theta` |
| Hydraulic | Volume strain | `dV / V` | — |

## WORKED EXAMPLE 4.1

A wire 2 m long stretches by 1 mm under a load. Find the longitudinal strain.

```
   dL  =  1 mm  =  1 x 10^-3 m ,   L  =  2 m

               dL       10^-3
   strain  =  ----  =  -------  =  5 x 10^-4      (no units)
                L         2
```

## WORKED EXAMPLE 4.2

The top face of a 5 cm cube is displaced sideways by 0.05 mm when the bottom is fixed.
Find the shearing strain.

```
   x  =  0.05 mm  =  5 x 10^-5 m ,   h  =  5 cm  =  5 x 10^-2 m

                        x        5 x 10^-5
   theta   =           ---  =  -------------  =  1 x 10^-3  radian
                        h        5 x 10^-2
```

> **TRAP:** strains in real solids are TINY — of the order of `10^-3` or smaller. If you
> get a strain like 0.5 in a numerical about a metal wire, you have made an arithmetic
> mistake (usually a wrong power of ten in the area).

---

# TOPIC 5 — HOOKE'S LAW AND THE MODULUS OF ELASTICITY

## 5.1 The statement (memorise word for word)

> **HOOKE'S LAW: within the elastic limit, the stress developed in a body is directly
> proportional to the strain produced in it.**

```
  +-----------------------------------------------------------+
  |                                                           |
  |          stress   ∝   strain                              |
  |                                                           |
  |          stress   =   E  x  strain                        |
  |                                                           |
  |                       stress                              |
  |          E   =      ----------                            |
  |                       strain                              |
  |                                                           |
  |   E is the MODULUS OF ELASTICITY (or the elastic modulus). |
  |                                                           |
  |   Because strain has no units, E has the SAME UNIT AS      |
  |   STRESS:                                                 |
  |                                                           |
  |         unit  :  N/m^2 = pascal (Pa)                      |
  |         dim   :  [ M^1 L^-1 T^-2 ]                        |
  |                                                           |
  +-----------------------------------------------------------+
```

## 5.2 What E actually tells you

`E` is a **property of the material**, not of the particular wire. It does *not* depend
on the length, the thickness or the shape of the specimen. It measures how stubborn the
material is:

```
   LARGE E  ->  needs a huge stress for a tiny strain  ->  stiff, very elastic (steel)
   SMALL E  ->  a small stress gives a big strain      ->  floppy (rubber)
```

## 5.3 The limits of validity of Hooke's law — the part students forget

```
  1.  Hooke's law is valid ONLY up to the PROPORTIONAL LIMIT.
      Beyond it, stress still increases with strain but NOT in
      direct proportion — the graph curves.

  2.  It is an APPROXIMATE law, not a fundamental one. It works
      because the interatomic force curve is nearly straight
      close to r0.

  3.  It fails completely for ELASTOMERS (rubber, tissue, aorta) —
      they are elastic but do NOT obey Hooke's law at any stage.

  4.  It holds for small strains only, typically less than about
      0.1 % to 0.3 % for metals.
```

## WORKED EXAMPLE 5.1

The stress in a wire is `1.2 x 10^8 Pa` and the strain produced is `6 x 10^-4`.
Find the modulus of elasticity.

```
              stress       1.2 x 10^8
   E   =    ----------  =  -----------  =  2 x 10^11  Pa
              strain        6 x 10^-4

   That is the Young's modulus of STEEL — so the wire is steel.
```

---

# TOPIC 6 — THE STRESS–STRAIN CURVE (THE MOST IMPORTANT FIGURE IN THE CHAPTER)

Take a metal wire, hang increasing loads on it, and plot the stress against the strain.
For a **ductile metal** such as mild steel or copper you get this shape. Learn to draw
it in 60 seconds.

```
        STRESS - STRAIN CURVE FOR A DUCTILE METAL
        =========================================

  stress
    ^
    |                                 D
    |                            *********
    |                        ****         ****
    |                     ***                  ***
    |                   **                        **  E
    |                  *                            *  <-- FRACTURE POINT
    |                 *                                   (the wire snaps)
    |               **
    |          B  **
    |       A  x**
    |        x*|
    |      *   |
    |    *     |
    |  *       |
    | *        |
    |*         |
    +----------+-------------------------------------------> strain
   O           |<------------------------------------->|
    |<-------->|          PLASTIC  REGION
    | ELASTIC  |
    | REGION   |

    O      origin
    O -> A  a PERFECT STRAIGHT LINE.  Hooke's law holds here.
    A      PROPORTIONAL LIMIT  — the last point where stress ∝ strain
    B      ELASTIC LIMIT / YIELD POINT — the last point from which the
           wire will still come back to its exact original length.
           Its stress is called the YIELD STRENGTH (sigma_y).
    B -> D  PLASTIC REGION — the wire keeps stretching with hardly any
           extra load. Remove the load anywhere here and the wire does
           NOT come back: it keeps a PERMANENT SET.
    D      ULTIMATE TENSILE STRENGTH (sigma_u) — the maximum stress the
           material can take. The curve peaks here.
    D -> E  the wire NECKS (a thin waist forms), the stress falls off,
    E      FRACTURE POINT — the wire breaks.
```

## 6.1 What "permanent set" means — draw the unloading line

```
  stress
    ^
    |            load up to a point P in the plastic region
    |               *
    |             *  \      then unload: the wire comes back along
    |           *      \    a line PARALLEL to the original O-A line,
    |         *          \  not along the curve it came up.
    |       *              \
    |     *                  \
    |   *                      \
    | *                          \
    +---------+-------------------+--------------------> strain
    O         |<---- permanent -->|
                     set
              the strain that is LEFT BEHIND when the load is
              completely removed  =  PERMANENT SET
```

## 6.2 Elastic deformation vs plastic deformation

| | ELASTIC deformation | PLASTIC deformation |
|---|---|---|
| Where on the curve | O to B | B to E |
| On removing the load | body returns exactly to its original size | body keeps a permanent set |
| Reversible? | yes | no |
| Energy | fully recovered | partly lost as heat |
| Atomic picture | bonds stretched, not broken | planes of atoms slide over each other |

## 6.3 DUCTILE versus BRITTLE materials

```
  DUCTILE  (copper, mild steel, gold, aluminium)
  ==============================================
  stress ^
         |            ****
         |         ***    *****
         |       **            ***
         |      *                  * FRACTURE
         |    **
         |  **
         | *
         +*------------------------------> strain
          O   |<-- LONG plastic region -->|

  There is a LARGE gap between the yield point and the fracture point.
  The material gives plenty of WARNING before it breaks — it stretches,
  it necks, it sags. It can be drawn into wires and beaten into sheets.


  BRITTLE  (glass, cast iron, ceramic, concrete, bone in tension)
  ==============================================================
  stress ^
         |          * FRACTURE
         |         *|
         |        * |
         |      *   |
         |    *     |
         |  *       |
         | *        |
         +*---------+---------------------> strain
          O         ^
                    fracture happens almost immediately
                    after the elastic limit

  Almost NO plastic region. The material snaps with NO warning.
```

| | Ductile | Brittle |
|---|---|---|
| Plastic region | long | almost none |
| Warning before failure | yes (necking, sagging) | no, sudden |
| Examples | copper, mild steel, aluminium, gold | glass, cast iron, ceramic, concrete |
| Can be drawn into wire? | yes | no |

## 6.4 ELASTOMERS — the odd ones out

Materials such as rubber, the elastic tissue of the aorta, and silk are called
**elastomers**. They can be stretched to many times their original length and still
come back — but their curve is **not a straight line anywhere**.

```
        STRESS - STRAIN CURVE FOR AN ELASTOMER (rubber)
        ===============================================

  stress
    ^
    |                                              *
    |                                             *
    |                                            *
    |                                          *
    |                                       **     <- loading curve
    |                                    **
    |                              *****
    |                       *******
    |               ********
    |         ******
    |    *****
    |  **
    | *
    +*-------------------------------------------------> strain
    O          (strain can reach 5 , 10 , even 15  —
                that is 500 % to 1500 % stretching!)

  KEY FACTS
  ---------
  1.  NO straight portion at all  ->  Hooke's law is NOT obeyed.
  2.  The strain is ENORMOUS (several hundred per cent) for a small stress.
  3.  Yet the material returns to its original length  ->  it IS elastic.
  4.  The unloading curve does NOT retrace the loading curve. The loop
      between them is called HYSTERESIS, and the area of the loop is the
      energy lost as HEAT in one cycle.
```

> **TRAP:** "Elastomers are elastic but do not obey Hooke's law" is a complete 2-mark
> answer. Do not confuse *elastic* (comes back) with *obeys Hooke's law* (straight-line
> graph). They are different properties.

## WORKED EXAMPLE 6.1

A wire of cross-sectional area `2 x 10^-6 m²` has a yield strength of
`2.5 x 10^8 Pa` and an ultimate tensile strength of `4 x 10^8 Pa`.
(a) What is the maximum load it can carry without a permanent set?
(b) What load will break it?

```
  (a)  At the ELASTIC LIMIT:
          F  =  stress x A  =  2.5 x 10^8  x  2 x 10^-6  =  500 N
          Mass it can carry  =  500 / 9.8  =  51 kg approximately.

  (b)  At the ULTIMATE TENSILE STRENGTH:
          F  =  4 x 10^8  x  2 x 10^-6  =  800 N
          Breaking mass  =  800 / 9.8  =  81.6 kg approximately.
```

## WORKED EXAMPLE 6.2 — the classic "wire is cut in half" question

A wire can support a maximum load `W` before breaking. It is cut into two equal halves.
What maximum load can each half now support?

```
  Breaking depends on the BREAKING STRESS, which is a property of the
  MATERIAL:                        F_max  =  breaking stress  x  A

  Cutting the wire does NOT change A and does NOT change the material.

  ANSWER:  each half still supports the SAME maximum load  W.

  (Now compare: if you halve the RADIUS, A becomes A/4, so the maximum
   load becomes W/4. THAT is the change that matters.)
```

---

# TOPIC 7 — YOUNG'S MODULUS (Y)

## 7.1 Definition and formula

> **Young's modulus is the ratio of the longitudinal stress to the longitudinal strain,
> within the elastic limit.**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                   longitudinal stress        F / A                 |
  |        Y    =    -----------------------  =  ---------             |
  |                   longitudinal strain        dL / L                |
  |                                                                    |
  |                          F L                                       |
  |        Y    =        -----------                                   |
  |                          A  dL                                     |
  |                                                                    |
  |   For a wire of radius r ,  A = pi r^2 , so                        |
  |                                                                    |
  |                          M g L                                     |
  |        Y    =      -----------------                               |
  |                      pi r^2 (dL)                                   |
  |                                                                    |
  |   Unit  :  N/m^2 = pascal (Pa)                                     |
  |   Dim   :  [ M L^-1 T^-2 ]                                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Rearranged for the elongation — this is the version you will use most:

```
                          F L               M g L
             dL   =    ---------   =   ---------------
                          A Y            pi r^2  Y
```

## 7.2 What Y depends on and what it does NOT depend on

```
  DEPENDS ON                       DOES NOT DEPEND ON
  -----------                      ------------------
  the MATERIAL                     the length of the wire
  the TEMPERATURE                  the area / radius of the wire
  (Y decreases as T rises)         the load applied
  impurities present               the amount of elongation
  the nature of the crystal
```

> **TRAP:** the standard 2-mark question is "Does Young's modulus depend on the length
> of the wire?" The answer is **NO** — `Y` is a material constant. A long wire stretches
> more, but the *ratio* stress/strain is unchanged.

## 7.3 The force constant of a wire

A wire behaves like a spring, `F = k dL`, with

```
              A Y                                      1
       k  =  -----          so    k  ∝  A     and  k ∝ ---
               L                                        L

   Short, thick wire  ->  stiff spring.
   Long, thin wire    ->  floppy spring.
```

## 7.4 Typical values (learn the order of magnitude, not every digit)

| Material | Y (Pa) |
|---|---|
| Steel | `2.0 x 10^11` |
| Tungsten | `3.5 x 10^11` |
| Iron | `1.9 x 10^11` |
| Copper | `1.1 x 10^11` |
| Brass | `0.9 x 10^11` |
| Aluminium | `0.7 x 10^11` |
| Glass | `0.55 x 10^11` |
| Lead | `0.16 x 10^11` |
| Rubber | about `10^6` to `10^8` |

Steel has the largest `Y` among common construction metals — that is exactly why it is
chosen for bridges, girders, ropes and railway lines.

## WORKED EXAMPLE 7.1 — the standard board numerical

A steel wire 2 m long and 1 mm in diameter carries a load of 10 kg.
Find the elongation. `Y = 2 x 10^11 Pa`, `g = 9.8 m/s²`.

```
  STEP 1   Force
           F  =  m g  =  10 x 9.8  =  98 N

  STEP 2   Radius  (DIAMETER is given — halve it!)
           r  =  0.5 mm  =  5 x 10^-4 m

  STEP 3   Area
           A  =  pi r^2  =  3.14 x (5 x 10^-4)^2
              =  3.14 x 25 x 10^-8
              =  7.85 x 10^-7  m^2

  STEP 4   Elongation
                     F L            98  x  2
           dL  =  --------  =  --------------------------
                     A Y        7.85 x 10^-7 x 2 x 10^11

                       196              196
               =  ---------------  =  ---------  =  1.25 x 10^-3 m
                   1.57 x 10^5        157000

           dL  =  1.25 mm
```

> **TRAP:** the single biggest mark-loser in this chapter is using the **diameter** as
> the radius. Underline the word "diameter" the moment you read it.

## WORKED EXAMPLE 7.2

Two wires of the same length and the same radius, one of steel
(`Y = 2 x 10^11`) and one of copper (`Y = 1 x 10^11`), carry equal loads.
Find the ratio of their elongations.

```
             F L                       1
   dL  =  --------      so     dL  ∝  ---     (F, L, A all the same)
             A Y                       Y

   dL(copper)      Y(steel)       2 x 10^11
   -----------  =  ----------  =  -----------  =  2
   dL(steel)       Y(copper)       1 x 10^11

   The copper wire stretches TWICE as much.
```

## WORKED EXAMPLE 7.3

A wire stretches by 1 mm under a load. If a wire of the **same material**, **twice the
length** and **twice the radius** carries the same load, by how much does it stretch?

```
             F L
   dL  =  ----------          A = pi r^2 , so  dL  ∝  L / r^2
           pi r^2 Y

   L is doubled   ->  dL x 2
   r is doubled   ->  r^2 x 4  ->  dL divided by 4

                          2
   New  dL  =  1 mm  x   ---   =  0.5 mm
                          4
```

## WORKED EXAMPLE 7.4

What force must be applied to a steel wire of area `1 x 10^-6 m²` to double its length?
(`Y = 2 x 10^11 Pa`)

```
   Doubling the length means  dL = L , so  strain = dL/L = 1.

   F  =  Y  x  strain  x  A  =  2 x 10^11  x  1  x  1 x 10^-6

   F  =  2 x 10^5  N       (about 20 tonnes of force)

   NOTE: in reality the wire would break long before this — the
   calculation only shows how enormous Y is. Say this sentence in
   the exam; it is worth a mark.
```

---

# TOPIC 8 — BULK MODULUS (B) AND COMPRESSIBILITY

## 8.1 Definition and formula

> **Bulk modulus is the ratio of the hydraulic (volume) stress to the volume strain,
> within the elastic limit.**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                   hydraulic stress            P                    |
  |        B   =   ----------------------  =  - ---------              |
  |                    volume strain            ( dV / V )             |
  |                                                                    |
  |                        P V                                         |
  |        B   =   -   ----------                                      |
  |                        dV                                          |
  |                                                                    |
  |   Unit  :  N/m^2 = pascal (Pa)                                     |
  |   Dim   :  [ M L^-1 T^-2 ]                                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

**Why the minus sign?** Increasing the pressure always *decreases* the volume, so `dV`
is negative. The minus sign makes `B` come out **positive**. Writing that sentence in
the exam earns a mark on its own.

## 8.2 Compressibility

```
  +---------------------------------------------------------+
  |                                                         |
  |                          1                              |
  |    COMPRESSIBILITY  K = ---                             |
  |                          B                              |
  |                                                         |
  |    "the fractional decrease in volume per unit          |
  |     increase in pressure"                               |
  |                                                         |
  |    Unit  :  m^2/N  =  Pa^-1                             |
  |    Dim   :  [ M^-1 L^1 T^2 ]                            |
  |                                                         |
  +---------------------------------------------------------+
```

```
   LARGE B  ->  small K  ->  hard to squeeze  (solids, especially metals)
   SMALL B  ->  large K  ->  easy to squeeze  (gases)
```

## 8.3 Where it applies

- **Solids and liquids only slightly**: `B` for steel is `1.6 x 10^11 Pa`, so even at
  the bottom of the deepest ocean a steel ball shrinks by less than 0.1 %.
- **Liquids**: water has `B = 2.2 x 10^9 Pa`, about 100 times more compressible than
  steel — which is still small enough that we call water incompressible in Chapter 11.
- **Gases**: for air at STP the isothermal bulk modulus is only about `1 x 10^5 Pa`,
  a million times smaller than steel. Gases are hugely compressible.
- Bulk modulus is the **only** modulus that applies to liquids and gases, because
  fluids cannot support a longitudinal or shearing stress at all.

## 8.4 Typical values

| Substance | B (Pa) | Compressibility K (Pa⁻¹) |
|---|---|---|
| Steel | `1.6 x 10^11` | `6.3 x 10^-12` |
| Copper | `1.4 x 10^11` | `7.1 x 10^-12` |
| Glass | `0.37 x 10^11` | `2.7 x 10^-11` |
| Water | `2.2 x 10^9` | `4.5 x 10^-10` |
| Air (isothermal, STP) | `1.0 x 10^5` | `1.0 x 10^-5` |

## WORKED EXAMPLE 8.1

A copper cube of side 10 cm is subjected to a hydraulic pressure of `7 x 10^6 Pa`.
Find the fractional change in volume and the change in volume.
(`B = 1.4 x 10^11 Pa`)

```
  Volume        V  =  (0.10)^3  =  1 x 10^-3  m^3

  Fractional change
                 dV        P        7 x 10^6
                ----  =  -----  =  -----------  =  5 x 10^-5
                  V        B       1.4 x 10^11

                            (a shrinkage of 0.005 %)

  Change in volume
                 dV  =  5 x 10^-5  x  1 x 10^-3  =  5 x 10^-8  m^3

                     =  0.05  cm^3
```

## WORKED EXAMPLE 8.2

By what fraction does the volume of water decrease at a depth of 4 km in the ocean?
(Take the pressure there as `4 x 10^7 Pa`, `B(water) = 2.2 x 10^9 Pa`.)

```
        dV        P         4 x 10^7
       ----  =  -----  =  ------------  =  1.8 x 10^-2  =  1.8 %
         V        B        2.2 x 10^9

  So even 4 km down, water shrinks by less than 2 %. This is why treating
  water as INCOMPRESSIBLE in fluid mechanics is a very good approximation.
```

## WORKED EXAMPLE 8.3

The compressibility of a liquid is `5 x 10^-10 Pa^-1`. What pressure will reduce the
volume of 1 litre of it by 0.1 %?

```
   dV/V  =  0.1 %  =  1 x 10^-3

           1                      dV/V       1 x 10^-3
   K  =  -----   ->    P  =  -----------  =  ----------  =  2 x 10^6  Pa
           B                      K          5 x 10^-10
```

---

# TOPIC 9 — RIGIDITY MODULUS / SHEAR MODULUS (eta)

## 9.1 Definition and formula

> **The rigidity modulus (shear modulus) is the ratio of the shearing stress to the
> shearing strain, within the elastic limit.**

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                   shearing stress          F / A         F         |
  |       eta   =   ---------------------  =  ---------  =  --------   |
  |                   shearing strain           theta        A theta   |
  |                                                                    |
  |   and since  theta = x / h ,                                       |
  |                                                                    |
  |                        F h                                         |
  |       eta   =      ----------                                      |
  |                        A x                                         |
  |                                                                    |
  |   Unit  :  N/m^2 = pascal (Pa)                                     |
  |   Dim   :  [ M L^-1 T^-2 ]                                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## 9.2 Facts worth marks

```
  1.  eta exists ONLY for SOLIDS. Liquids and gases cannot resist a
      shearing stress at all, so for them eta = 0.

  2.  For most metals  eta  is roughly  Y / 3 , i.e. always the
      SMALLEST of the three moduli:      eta  <  B  and  eta  <  Y

      Physical meaning: it is EASIER to change a solid's SHAPE than
      to change its VOLUME or to stretch it.

  3.  Applications: the twisting of a shaft, torsion of a wire, the
      shearing of rivets and bolts, torsion pendulums.
```

## 9.3 Typical values

| Material | eta (Pa) |
|---|---|
| Steel | `8.4 x 10^10` |
| Iron | `7.0 x 10^10` |
| Copper | `4.2 x 10^10` |
| Aluminium | `2.5 x 10^10` |
| Glass | `2.3 x 10^10` |
| Lead | `0.56 x 10^10` |

## WORKED EXAMPLE 9.1

A cube of lead of side 50 cm has one face fixed and a tangential force of
`9 x 10^4 N` is applied to the opposite face. Find the shearing strain and the
displacement of that face. (`eta = 5.6 x 10^9 Pa`)

```
  STEP 1   Area of the face
           A  =  (0.5)^2  =  0.25 m^2

  STEP 2   Shearing stress
                      F        9 x 10^4
           stress  =  ---  =  -----------  =  3.6 x 10^5  Pa
                      A          0.25

  STEP 3   Shearing strain
                      stress      3.6 x 10^5
           theta  =  --------  =  -----------  =  6.43 x 10^-5  radian
                        eta       5.6 x 10^9

  STEP 4   Displacement of the face
           x  =  theta  x  h  =  6.43 x 10^-5  x  0.5

           x  =  3.2 x 10^-5 m  =  0.032 mm
```

## WORKED EXAMPLE 9.2

A metal cube of side 10 cm has a tangential force of 100 N applied to its top face.
The top face is displaced by `4 x 10^-8 m`. Find the rigidity modulus.

```
   A  =  (0.1)^2  =  1 x 10^-2 m^2 ,   h  =  0.1 m ,  x = 4 x 10^-8 m

                     F h              100  x  0.1
   eta   =        ---------   =  --------------------------
                     A x          10^-2  x  4 x 10^-8

                     10
         =  ------------------  =  2.5 x 10^10  Pa
             4 x 10^-10
```

---

# TOPIC 10 — THE THREE MODULI SIDE BY SIDE

```
  +-----------+------------------+-----------------+---------------------+
  |           |  YOUNG'S         |  BULK           |  RIGIDITY / SHEAR   |
  |           |  MODULUS  Y      |  MODULUS  B     |  MODULUS  eta       |
  +-----------+------------------+-----------------+---------------------+
  | What is   | Length changes   | Volume changes  | Shape changes,      |
  | changed   | (shape stays)    | (shape stays)   | volume stays        |
  +-----------+------------------+-----------------+---------------------+
  | Stress    | Longitudinal     | Hydraulic       | Shearing            |
  | used      | F/A , normal     | P , from all    | F/A , parallel      |
  |           | to the section   | sides           | to the face         |
  +-----------+------------------+-----------------+---------------------+
  | Strain    | dL / L           | dV / V          | theta  =  x/h       |
  | produced  |                  |                 |                     |
  +-----------+------------------+-----------------+---------------------+
  |           |      F L         |       P         |        F            |
  | Formula   | Y = --------     | B = - -------   | eta = --------      |
  |           |      A dL        |      (dV/V)     |       A theta       |
  +-----------+------------------+-----------------+---------------------+
  | Unit      | Pa               | Pa              | Pa                  |
  | Dimension | [M L^-1 T^-2]    | [M L^-1 T^-2]   | [M L^-1 T^-2]       |
  +-----------+------------------+-----------------+---------------------+
  | Exists    | SOLIDS only      | SOLIDS, LIQUIDS | SOLIDS only         |
  | for       |                  | and GASES       |                     |
  +-----------+------------------+-----------------+---------------------+
  | Typical   | steel            | steel           | steel               |
  | value     | 2.0 x 10^11      | 1.6 x 10^11     | 0.84 x 10^11        |
  +-----------+------------------+-----------------+---------------------+
  | An        | Steel girders    | Submarines,     | Rivets and bolts,   |
  | applic-   | and bridges;     | deep-sea        | drive shafts,       |
  | ation     | crane ropes;     | equipment;      | torsion pendulum,   |
  |           | railway lines    | hydraulics      | twisting of a wire  |
  +-----------+------------------+-----------------+---------------------+

  For a given metal the usual order is:      Y   >   B   >   eta
```

**Relations between them (extra credit, not compulsory):**

```
  Y  =  3 B ( 1 - 2 sigma )            Y  =  2 eta ( 1 + sigma )

    9        1        3                        3 B  -  2 eta
   ---  =   ---  +  -----          sigma  =  -----------------
    Y        B       eta                      2 ( 3 B + eta )
```

---

# TOPIC 11 — POISSON'S RATIO (sigma)

## 11.1 The idea

Stretch a rubber tube lengthwise and it gets **thinner**. Squash it and it gets
**fatter**. Whatever happens along the length, the opposite happens sideways.

```
              BEFORE                         AFTER STRETCHING

        +===================+          +==========================+
        |                   |  d       |                          | d - dd
        +===================+          +==========================+
        |<------- L ------->|          |<--------- L + dL ------->|

        Length INCREASES by dL   ->   longitudinal strain = dL / L
        Diameter DECREASES by dd ->   lateral strain      = - dd / d
```

## 11.2 Definition

```
  +---------------------------------------------------------------+
  |                                                               |
  |                       lateral strain          ( - dd / d )    |
  |   POISSON'S RATIO  sigma = ----------------  = --------------  |
  |                       longitudinal strain      ( dL / L )     |
  |                                                               |
  |   Magnitude used in numericals:                               |
  |                                                               |
  |            dd / d          dr / r                             |
  |   sigma = ---------  =  ----------                            |
  |            dL / L          dL / L                             |
  |                                                               |
  |   It is a RATIO OF TWO STRAINS, so it is a PURE NUMBER:       |
  |                                                               |
  |         NO UNIT       and       NO DIMENSIONS                 |
  |                                                               |
  +---------------------------------------------------------------+
```

## 11.3 The range — a guaranteed 2-mark question

```
  THEORETICAL LIMITS  :   -1   to   +0.5
  PRACTICAL  LIMITS   :    0   to   +0.5
  ACTUAL VALUES for common solids :  0.2  to  0.4

     rubber   ~ 0.5 (almost incompressible)
     steel    ~ 0.28 to 0.30
     copper   ~ 0.33
     glass    ~ 0.23
     cork     ~ 0   (that is why a cork can be pushed into a bottle
                     without bulging sideways)
```

Why 0.5 is the ceiling: at `sigma = 0.5` the volume of the material does not change
at all when it is stretched. A larger value would mean the volume *increases* when
you squeeze it, which is impossible for ordinary materials.

## 11.4 The volume-change formula

For a stretched wire,

```
        dV                                dL
       ----   =   ( 1  -  2 sigma )  x   ----
         V                                 L

   sigma = 0.5   ->   dV = 0  , the volume is unchanged
   sigma < 0.5   ->   the volume INCREASES on stretching
```

## WORKED EXAMPLE 11.1

A wire 1 m long and 1 mm in diameter is stretched by 1 mm. If Poisson's ratio is 0.3,
find the decrease in diameter.

```
   Longitudinal strain
                 dL       1 x 10^-3
                ----  =  ----------  =  1 x 10^-3
                  L           1

   Lateral strain
                 dd
                ----  =  sigma  x  (dL / L)  =  0.3 x 10^-3  =  3 x 10^-4
                  d

   Decrease in diameter
                 dd  =  3 x 10^-4  x  1 x 10^-3 m  =  3 x 10^-7 m

                     =  0.0003 mm   (0.3 micrometre)
```

## WORKED EXAMPLE 11.2

For the same wire, find the fractional change in volume.

```
        dV
       ----  =  ( 1 - 2 x 0.3 )  x  1 x 10^-3
         V
             =  0.4  x  10^-3  =  4 x 10^-4

   So the volume INCREASES by 0.04 % when the wire is stretched.
```

---

# TOPIC 12 — ELASTIC POTENTIAL ENERGY IN A STRETCHED WIRE

When you stretch a wire you do work against the restoring force. That work is stored
inside the wire as **elastic potential energy**, and it comes back out when you let go
(this is why a snapping cable is dangerous).

## 12.1 The derivation (write this out in the exam — it is a clean 4 marks)

```
  STEP 1   Let the wire have length L, area A, Young's modulus Y.
           Suppose it has already been stretched by an amount x.
           The force needed to hold it there is

                             Y A x
                    F  =    -------            ( from  Y = F L / (A x) )
                               L

  STEP 2   The force is NOT constant — it grows from 0 to its final
           value as the wire stretches. So we integrate.

           Work done in stretching by a further dx  :   dW  =  F dx

  STEP 3   Total work to stretch it from 0 to dL :

                       dL          dL   Y A x
              W  =  INT   F dx = INT   ------- dx
                       0           0      L

                     Y A     ( dL )^2         1   Y A (dL)^2
              W  =  -----  x ----------  =    -  x -----------
                      L          2            2        L

  STEP 4   Now write it in terms of the FINAL force
           F = Y A (dL) / L :

              +------------------------------------------+
              |                                          |
              |            1                             |
              |      W  =  -  x  F  x  dL                |
              |            2                             |
              |                                          |
              +------------------------------------------+

           i.e. "half the final force times the extension" — the
           average force is F/2 because the force grew linearly.

  STEP 5   Convert to stress and strain. Put F = stress x A and
           dL = strain x L :

              1                                     1
        W  =  - (stress x A)(strain x L)     =      -  x stress x strain x (A L)
              2                                     2

           and A L is the VOLUME of the wire, so

              +------------------------------------------------------+
              |                                                      |
              |            1                                         |
              |      U  =  -  x  stress  x  strain  x  VOLUME        |
              |            2                                         |
              |                                                      |
              +------------------------------------------------------+
```

## 12.2 Energy per unit volume (energy density)

```
  +---------------------------------------------------------------+
  |                                                               |
  |               U          1                                    |
  |     u   =   ------   =   -  x  stress  x  strain              |
  |             volume       2                                    |
  |                                                               |
  |     Using stress = Y x strain, the same thing can be written  |
  |     in three equivalent ways:                                 |
  |                                                               |
  |            1                        1                         |
  |     u  =   -  stress x strain  =    -  Y (strain)^2           |
  |            2                        2                         |
  |                                                               |
  |                    ( stress )^2                               |
  |            =     ----------------                             |
  |                       2 Y                                     |
  |                                                               |
  |     Unit  :  J / m^3       Dim :  [ M L^-1 T^-2 ]             |
  |                                                               |
  +---------------------------------------------------------------+
```

## 12.3 The area under the stress–strain curve

```
  stress
    ^
    |                    /|
    |                  /  |
    |                /    |
    |              /######|      The SHADED AREA under the graph, up to
    |            /########|      a given strain, is the ENERGY STORED
    |          /##########|      PER UNIT VOLUME of the material.
    |        /############|
    |      /##############|      Area of the triangle
    |    /################|         =  (1/2) x base x height
    |  /##################|         =  (1/2) x strain x stress
    |/####################|         =  u                 <-- exactly our formula
    +---------------------+-----------------> strain

  The TOTAL area right up to the fracture point is called the
  TOUGHNESS of the material — the energy per unit volume needed to break it.
  A ductile metal has a huge area (tough). Glass has a tiny area (brittle).
```

## WORKED EXAMPLE 12.1

A wire is stretched by 1 mm by a force of 200 N. Find the work done.

```
              1                1
       W  =   -  F  dL   =     -  x  200  x  1 x 10^-3   =  0.1  J
              2                2
```

## WORKED EXAMPLE 12.2

A steel wire of length 2 m and area `1 x 10^-6 m²` is stretched by 1 mm.
Find (a) the energy stored and (b) the energy density.
(`Y = 2 x 10^11 Pa`)

```
  (a)  Method: use  W = (1/2) Y A (dL)^2 / L

              1     2 x 10^11 x 1 x 10^-6 x (1 x 10^-3)^2
       W  =   -  x  ---------------------------------------
              2                     2

              1      2 x 10^5  x  1 x 10^-6
          =   -  x  -------------------------
              2                2

              1        0.2
          =   -  x   -------   =  0.05  J
              2         2

  (b)  Volume  =  A L  =  1 x 10^-6 x 2  =  2 x 10^-6 m^3

              W          0.05
       u  =  ------  =  ----------  =  2.5 x 10^4  J/m^3
             volume     2 x 10^-6

       CHECK by the other formula:
         strain = 10^-3 / 2 = 5 x 10^-4
         u = (1/2) Y (strain)^2 = 0.5 x 2 x 10^11 x 25 x 10^-8
           = 2.5 x 10^4  J/m^3          ✓  they agree
```

> **TRAP:** the factor `1/2`. Students write `W = F dL` and lose the mark every time.
> Remember: the force *builds up* from zero, so you use the **average** force `F/2`.

---

# TOPIC 13 — SPECIAL CASES THE EXAMINER LOVES

## 13.1 Elongation of a wire under its OWN WEIGHT

A long wire hanging from the ceiling stretches even with no load on it, because the
lower parts are being pulled by the weight of everything below them.

```
   DERIVATION
   ==========

   ///////////  ceiling
      |||
      |||         Take a small element of length dx at a distance
      |||         x from the BOTTOM of the wire.
      |||
      |||         The weight PULLING on that element is the weight
      |||         of the wire BELOW it:
      |||
     -----  <- dx           F(x)  =  (M / L) x g   .... (mass per unit
      |||                                                length x length x g)
      |||   x
      |||         Extension of that element:
      |||
     -----                          F(x) dx        M g x dx
                          d(dL)  =  ---------  =  -----------
                                       A Y           L A Y

                     L   M g x dx        M g      L^2
        dL  =   INT     -----------  =  -------  x ---
                     0     L A Y         L A Y      2

   +------------------------------------------------------+
   |                                                      |
   |               M g L            rho g L^2             |
   |      dL  =  ----------   =   -------------           |
   |               2 A Y               2 Y                |
   |                                                      |
   |   (rho = density of the wire material, since          |
   |    M = rho x A x L)                                  |
   |                                                      |
   +------------------------------------------------------+
```

**How to remember it:** the whole weight `Mg` acts as if it were concentrated at the
**centre of mass**, i.e. at a depth `L/2`. So you get half of the usual `MgL/(AY)`.

## WORKED EXAMPLE 13.1

A steel wire 10 m long hangs vertically. Find the elongation due to its own weight.
(`rho = 7800 kg/m³`, `Y = 2 x 10^11 Pa`, `g = 9.8 m/s²`)

```
            rho g L^2        7800 x 9.8 x (10)^2
   dL  =  -------------  =  ----------------------
               2 Y            2  x  2 x 10^11

            7800 x 9.8 x 100          7 644 000
       =  ---------------------  =  -------------
                4 x 10^11             4 x 10^11

   dL  =  1.91 x 10^-5  m   =  0.019 mm

   Tiny — which is why we normally ignore a wire's own weight.
```

## 13.2 THERMAL STRESS in a rod clamped at both ends

Heat a free rod and it expands. **Clamp both ends** and it cannot — so an enormous
compressive stress builds up inside it instead.

```
   ############|=====================================|############
     rigid wall            rod, length L               rigid wall

   If the rod were free, heating it by dT would lengthen it by

            dL  =  L alpha dT           (alpha = coefficient of
                                         linear expansion)

   The clamps force  dL = 0 , which is the same as compressing the
   rod BACK by that amount. So the strain that is developed is

                         dL
            strain  =   ----   =   alpha dT
                          L

   and therefore

   +----------------------------------------------------------+
   |                                                          |
   |    THERMAL STRESS  =  Y  x  strain  =  Y alpha dT        |
   |                                                          |
   |    THERMAL FORCE   =  stress x A    =  Y A alpha dT      |
   |                                                          |
   |    NOTICE: the stress does NOT depend on the LENGTH of   |
   |    the rod, and the force does not depend on it either.  |
   |                                                          |
   +----------------------------------------------------------+
```

This is why railway lines are laid with gaps, why bridges sit on roller supports, and
why concrete roads have expansion joints.

## WORKED EXAMPLE 13.2

A steel rod of area `1 x 10^-4 m²` is clamped rigidly at both ends at 20 °C and then
heated to 70 °C. Find the thermal stress and the force on the clamps.
(`Y = 2 x 10^11 Pa`, `alpha = 1.2 x 10^-5 /°C`)

```
   dT  =  70 - 20  =  50 deg C

   Stress  =  Y alpha dT  =  2 x 10^11 x 1.2 x 10^-5 x 50

           =  2 x 1.2 x 50  x  10^6   =  1.2 x 10^8  Pa

   Force   =  stress x A  =  1.2 x 10^8 x 1 x 10^-4  =  1.2 x 10^4  N

   That is 12 000 N — over a tonne of force from a 50-degree
   temperature rise on a rod the thickness of a pencil lead.
```

## 13.3 Two wires joined END TO END (in series)

```
   Same FORCE passes through both wires.
   Total extension  =  dL1  +  dL2

              F L1        F L2
   dL  =    --------  +  --------
              A1 Y1        A2 Y2
```

## 13.4 A wire and the effect of changing its dimensions

| Change made | Effect on `dL` (same load) | Effect on breaking load |
|---|---|---|
| Length doubled | `dL` doubles | unchanged |
| Radius doubled | `dL` becomes 1/4 | becomes 4 times |
| Wire cut in half | `dL` halves | unchanged |
| Same material, thicker | `dL` smaller | larger |

---

# TOPIC 14 — APPLICATIONS OF ELASTIC BEHAVIOUR

## 14.1 Why the cross-section of a girder is shaped like the letter I

```
        A SOLID RECTANGULAR BEAM            AN  I - SECTION GIRDER
        ========================            ======================

        +--------------------+              +--------------------+  <- top FLANGE
        |####################|              +----+----------+----+
        |####################|                   |##########|
      d |####################|                   |##########|  <- WEB
        |####################|                   |##########|
        |####################|              +----+----------+----+
        +--------------------+              +--------------------+  <- bottom FLANGE
        |<-------- b ------->|

        A beam supported at its two ends and loaded W at the centre
        sags in the middle by a DEPRESSION

           +-------------------------------------------+
           |                                           |
           |                  W  L^3                   |
           |     delta  =  --------------              |
           |                4  b  d^3  Y               |
           |                                           |
           +-------------------------------------------+

           L = length , b = breadth , d = DEPTH , Y = Young's modulus
```

Now read the formula:

```
   delta  ∝  1 / d^3        DEPTH matters CUBED
   delta  ∝  1 / b          breadth matters only to the FIRST power

   So to stop a beam sagging you should make it DEEP, not WIDE.
```

But a very deep, very thin rectangle would **buckle sideways**. The `I` shape is the
compromise:

```
   1.  When a beam bends, the TOP surface is COMPRESSED and the BOTTOM
       surface is STRETCHED. Those two surfaces carry almost all the
       stress. The middle layer (the NEUTRAL AXIS) is hardly stressed
       at all and is nearly useless.

   2.  So put most of the material in the TOP and BOTTOM FLANGES,
       where it is doing work, and use only a thin WEB in the middle
       to hold them apart.

   3.  RESULT: the same strength for FAR LESS material.
       -> lighter, cheaper, and it does not buckle sideways
          because the wide flanges stabilise it.
```

**Two-mark answer:** "The stress is maximum at the top and bottom of a bent beam and
almost zero along the neutral axis in the middle, so material is concentrated in the
flanges. The I-shape gives maximum strength (large depth) with minimum material,
reducing weight, cost, and the tendency to buckle."

## 14.2 The design of a crane rope

```
  PROBLEM: a crane must lift 10 000 kg. Steel must never be stressed
           beyond about 10^8 Pa in service (well inside its elastic
           limit, for safety). What thickness of rope is needed?

     F  =  m g  =  10 000  x  9.8  =  9.8 x 10^4  N

              F           9.8 x 10^4
     A  =  --------  =  --------------  =  9.8 x 10^-4  m^2
            stress          10^8

     pi r^2  =  9.8 x 10^-4

               9.8 x 10^-4
     r^2  =   -------------  =  3.12 x 10^-4
                  3.14

     r  =  1.77 x 10^-2 m  ~  1.8 cm

  CONCLUSION: the rope must be at least ~1.8 cm in radius; in practice
  engineers use about 3 cm to build in a large factor of safety.
```

**And here is the part that carries the mark:**

```
   A single solid steel rod 3 cm thick would be RIGID and almost
   impossible to bend around the pulleys.

   So the rope is made of MANY THIN STRANDS twisted into a rope.
   Same total cross-section  ->  same strength,
   but each thin strand bends easily  ->  the rope is FLEXIBLE.
```

## 14.3 The maximum height of a mountain

A mountain cannot be arbitrarily tall: at some height the rock at the base is crushed
by the weight above it and flows away.

```
   Pressure at the base of a column of rock of height h :

              P  =  h rho g

   The mountain stands only if this stays below the elastic limit
   (roughly the shear strength) of rock, S :

              h rho g   <   S

   +---------------------------------------------------+
   |                                                   |
   |                          S                        |
   |          h(max)   =   --------                    |
   |                        rho g                      |
   |                                                   |
   +---------------------------------------------------+

   Take  S = 3 x 10^8 Pa , rho = 3 x 10^3 kg/m^3 , g = 10 m/s^2 :

                    3 x 10^8
        h(max)  =  ------------------  =  1 x 10^4 m  =  10 km
                    3 x 10^3  x  10

   Mount Everest is about 8.85 km high — comfortably under our estimate,
   which is a striking confirmation of the argument.
```

## 14.4 Bending of a beam (summary)

```
   FOR A BEAM SUPPORTED AT BOTH ENDS, LOADED W AT THE CENTRE

                   W L^3
        delta  =  ---------
                  4 b d^3 Y

   FOR A CANTILEVER (fixed at one end, loaded W at the free end)

                   4 W L^3
        delta  =  -----------
                   Y b d^3

   In BOTH cases:   delta ∝ L^3 ,   delta ∝ 1/d^3 ,   delta ∝ 1/Y

   -> Use a material with a LARGE Y (steel), make the beam DEEP,
      and keep the span SHORT.
```

## WORKED EXAMPLE 14.1

A beam of rectangular cross-section is supported at its ends and loaded at the centre.
If its **depth is doubled**, by what factor does the depression change?

```
   delta  ∝  1 / d^3

   d -> 2d   gives   d^3 -> 8 d^3

   delta becomes  1/8  of its original value.

   (Compare: doubling the BREADTH would only halve it. Depth wins.)
```

---

# TOPIC 15 — ELASTIC FATIGUE, AFTER-EFFECT, TEMPERATURE AND IMPURITIES

## 15.1 Elastic fatigue

> **Elastic fatigue** is the loss of elastic strength of a material caused by repeated
> cycles of stress over a long period.

```
   EVERYDAY EVIDENCE
   -----------------
   *  A rubber band used every day eventually goes slack and snaps.
   *  Bridges are declared unsafe after many years even though nothing
      visibly broke — the repeated traffic loading has fatigued the steel.
   *  A wire breaks after being bent back and forth a few dozen times,
      even though a single bend does nothing.
   *  Spring balances read wrong after years of use.

   PHYSICAL REASON: repeated loading lets microscopic cracks grow along
   the crystal planes. Given a rest, a fatigued material partly recovers.
```

## 15.2 Elastic after-effect

> **Elastic after-effect** is the delay in a body's return to its original shape after
> the deforming force is removed.

```
   Quartz fibre and phosphor bronze:  after-effect is almost ZERO
      -> they return INSTANTLY
      -> which is exactly why they are used as suspensions in
         sensitive galvanometers and torsion balances.

   Glass fibre:  the after-effect lasts for hours.
   Rubber:       a noticeable after-effect too.
```

## 15.3 Effect of temperature on elasticity

```
   TEMPERATURE UP    ->   ELASTICITY DOWN   (Y decreases)

   Reason: heating increases the average separation of the atoms,
   weakening the interatomic forces, so the restoring force per
   unit strain falls.

   Examples
   --------
   *  A blacksmith heats iron before hammering it — hot iron is
      less elastic, more plastic, so it can be shaped.
   *  A carbon filament and INVAR are the famous exceptions:
      their elasticity barely changes with temperature, which is
      why INVAR is used in precision instruments and pendulums.
   *  Cooling a material (e.g. lead cooled in liquid nitrogen)
      makes it MORE elastic.
```

## 15.4 Effect of impurities

```
   Adding an impurity may INCREASE or DECREASE elasticity, depending
   on whether the impurity is MORE or LESS elastic than the host.

   *  Add a little CARBON to iron  ->  STEEL, far more elastic.
   *  Add POTASSIUM to gold        ->  gold becomes harder / more elastic
                                       (pure gold is very soft).
   *  Add a soft impurity          ->  elasticity DROPS.
```

## 15.5 Annealing and hammering (one line each)

```
   ANNEALING (slow heating then slow cooling)  ->  DECREASES elasticity
                                                   (grains grow larger)
   HAMMERING / ROLLING                         ->  INCREASES elasticity
                                                   (grains are broken smaller)
```

---

# THE COMPLETE UNITS AND DIMENSIONS TABLE

| Quantity | Symbol | SI unit | Dimensional formula |
|---|---|---|---|
| Stress | — | `N/m^2` = Pa | `[M L^-1 T^-2]` |
| Strain | — | **none** | `[M^0 L^0 T^0]` |
| Young's modulus | `Y` | Pa | `[M L^-1 T^-2]` |
| Bulk modulus | `B` | Pa | `[M L^-1 T^-2]` |
| Rigidity modulus | `eta` | Pa | `[M L^-1 T^-2]` |
| Compressibility | `K` | `Pa^-1` = `m^2/N` | `[M^-1 L T^2]` |
| Poisson's ratio | `sigma` | **none** | `[M^0 L^0 T^0]` |
| Elastic energy | `U` | joule (J) | `[M L^2 T^-2]` |
| Energy density | `u` | `J/m^3` | `[M L^-1 T^-2]` |
| Force constant of a wire | `k = AY/L` | `N/m` | `[M T^-2]` |

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I convert every length to METRES?  (mm -> 10^-3 , cm -> 10^-2)
  [ ]  Was I given the DIAMETER? Then did I HALVE it to get r?
  [ ]  Did I use  A = pi r^2  and not  2 pi r ?
  [ ]  Did I remember that strain has NO UNITS, and say so?
  [ ]  Did I write "pascal" or "N/m^2" after every stress and every modulus?
  [ ]  In the energy formula, did I keep the factor of  1/2 ?
  [ ]  For a wire under its OWN WEIGHT, did I keep the  2  in  MgL/(2AY) ?
  [ ]  In the bulk modulus, did I explain the MINUS SIGN?
  [ ]  Did I LABEL all five points on the stress-strain curve:
       proportional limit, elastic limit / yield point, plastic region,
       ultimate tensile strength, fracture point?
  [ ]  Did I draw the axes with STRAIN on the x-axis and STRESS on the y-axis?
       (This way round. The other way round loses the mark.)
  [ ]  For "which is more elastic", did I answer STEEL and give the Y values?
  [ ]  Did I state Hooke's law with the words "WITHIN THE ELASTIC LIMIT"?
  [ ]  Did I mention that eta = 0 for liquids and gases when asked?
  [ ]  Did I give Poisson's ratio limits as -1 to 0.5 (theory), 0 to 0.5
       (practice), and say it has NO UNITS?
  [ ]  Did every numerical answer come out with a sensible power of ten?
       (strains ~10^-3 or smaller ; moduli ~10^10 to 10^11 Pa)
  [ ]  Did I draw a figure wherever the question mentions a diagram?
       A labelled figure is almost always worth a mark on its own.
```
