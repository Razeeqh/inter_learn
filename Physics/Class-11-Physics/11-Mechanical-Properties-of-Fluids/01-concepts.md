# Mechanical Properties of Fluids — Concepts Explained From Zero

Read this with a pen. Redraw every ASCII diagram yourself. Diagrams carry marks
in this chapter — examiners give 1 mark just for a labelled figure.

---

# TOPIC 1 — WHAT IS A FLUID? THRUST AND PRESSURE

## 1.1 What is a fluid

```
  SOLID   -  has a fixed shape. Push it sideways and it resists.
  FLUID   -  has NO fixed shape. Push it sideways and it just flows.

  FLUID  =  LIQUID  +  GAS
```

The one-line definition to write in the exam:

> **A fluid is a substance that cannot withstand a shearing (tangential) stress
> and therefore begins to flow, however small the stress may be.**

Everyday picture: a brick keeps its shape when you push its top sideways.
Water does not — it slides away. That is the whole difference.

## 1.2 Thrust

```
  THRUST  =  the total NORMAL force exerted by a fluid on a surface

  SI unit  :  newton (N)
  It is a FORCE, so it is a VECTOR.
```

A fluid at rest can only push **perpendicular** to a surface. It cannot pull,
and it cannot push sideways (if it could, it would flow).

```
        AIR / WATER pushing on a wall
        ==============================

              |
       ---->  |
       ---->  |      every little arrow is PERPENDICULAR
       ---->  |      to the wall
       ---->  |
              |
            WALL
```

## 1.3 Pressure

```
  +------------------------------------------------+
  |                                                |
  |                     Thrust (normal force)  F   |
  |     PRESSURE  P  =  ------------------------   |
  |                          Area           A      |
  |                                                |
  +------------------------------------------------+

  SI unit      :  N / m^2  =  PASCAL (Pa)
  Dimensions   :  [ M L^-1 T^-2 ]
  Pressure is a SCALAR.
```

> **TRAP:** Force is a vector, but pressure is a **scalar**. Examiners love the
> 2-mark question "Is pressure a scalar or a vector?" The reason: pressure has no
> single direction — at one point in a fluid it pushes equally in *all* directions.

## 1.4 Other units of pressure (learn these — they appear in numericals)

```
  1 Pa          =  1 N / m^2
  1 bar         =  10^5  Pa
  1 atmosphere  =  1.013 x 10^5 Pa   =  76 cm of mercury  =  760 torr
  1 torr        =  1 mm of mercury   =  133 Pa
```

## 1.5 Density and relative density

```
                       mass        M
  Density   rho   =  --------  =  ---          unit:  kg / m^3
                      volume       V

                               density of the substance
  Relative density (RD)  =  ------------------------------      (no unit)
                             density of water at 4 deg C

  Density of water   =  1000 kg/m^3  =  1 g/cm^3
  Density of mercury =  13600 kg/m^3 =  13.6 g/cm^3
```

## WORKED EXAMPLE 1.1

A woman of mass 50 kg stands on one heel of area 1 cm². Find the pressure
on the floor. (g = 10 m/s²)

```
  Force  F  =  m g  =  50 x 10  =  500 N

  Area   A  =  1 cm^2  =  1 x 10^-4  m^2

              F        500
  P  =      -----  = ---------  =  5 x 10^6  Pa
              A        10^-4

  That is about 50 atmospheres — which is exactly why a stiletto heel
  dents a wooden floor but a flat shoe does not.
```

---

# TOPIC 2 — PRESSURE AT A DEPTH INSIDE A LIQUID

This is the most important derivation in fluid statics. Everything else uses it.

## 2.1 The set-up

Imagine a cylinder of liquid, standing vertically inside the liquid itself, of
height `h` and cross-section area `A`. Its top face is at the free surface
(where the pressure is the atmospheric pressure `P0`), and its bottom face is at
depth `h`.

```
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   free surface
              |                |
              |   P0 x A  (down, from atmosphere)
              |       |        |
              |       V        |
              |  +---------+   |
              |  |         |   |
              |  |         |   |
       h      |  | LIQUID  |   |     imaginary cylinder
              |  | CYLINDER|   |     area of each face = A
              |  |  mass m |   |
              |  |    |    |   |
              |  |    V mg |   |
              |  +---------+   |
              |       ^        |
              |       |        |
              |     P x A  (up, from the liquid below)
   ==========================================
```

## 2.2 The derivation (WRITE THIS IN THE EXAM)

```
  The cylinder is in EQUILIBRIUM, so:

     upward force  =  downward forces

        P A        =   P0 A   +   weight of the cylinder

  Weight of cylinder =  m g  =  (volume x density) x g
                     =  (A h) x rho x g

  Therefore     P A  =  P0 A  +  A h rho g

  Divide both sides by A:

  +----------------------------------------------+
  |                                              |
  |        P   =   P0   +   h rho g              |
  |                                              |
  +----------------------------------------------+
```

## 2.3 What this equation is telling you

```
  1.  Pressure INCREASES with depth, and does so LINEARLY.
  2.  Pressure depends ONLY on   depth h ,  density rho ,  and g.
  3.  It does NOT depend on the shape of the vessel,
      nor on the total amount of liquid.
  4.  All points at the SAME HORIZONTAL LEVEL in the SAME connected
      liquid have the SAME pressure.
```

## 2.4 Why pressure is the same at the same horizontal level

```
      Take a thin horizontal cylinder of liquid, area A, length L:

              +--------------------------+
      P1 A -->|                          |<-- P2 A
              +--------------------------+
              |<----------- L ---------->|

      Its weight acts DOWNWARD (perpendicular to the axis), so it has
      no component along the axis.

      Horizontal equilibrium :   P1 A  =  P2 A   ->   P1 = P2
```

**Consequence — the hydrostatic paradox:**

```
     |‾‾|        /‾‾‾\        |‾‾‾‾‾‾‾‾|
     |  |       /     \       |        |
     |  |      |       |      |        |
   h |  |    h |       |    h |        |
     |__|      |_______|      |________|
     ====      =========      ==========

   Different shapes, different amounts of water, SAME height h
   ->  SAME pressure at the bottom of each.
```

> **TRAP:** Students write "more water means more pressure". WRONG.
> Only the vertical **height** matters, not the volume.

## 2.5 Gauge pressure and absolute pressure

```
  +----------------------------------------------------------+
  |                                                          |
  |  ABSOLUTE PRESSURE   P    =  P0  +  h rho g              |
  |     (the real, total pressure)                           |
  |                                                          |
  |  GAUGE PRESSURE      Pg   =  P  -  P0  =  h rho g        |
  |     (the EXTRA pressure above atmospheric —              |
  |      this is what a pressure gauge shows)                |
  |                                                          |
  +----------------------------------------------------------+
```

Your bike tyre gauge reading 2 atm means the *gauge* pressure is 2 atm;
the *absolute* pressure inside is 3 atm.

## WORKED EXAMPLE 2.1

Find (a) the gauge pressure and (b) the absolute pressure at a depth of
10 m in a lake. Take P0 = 1.01 x 10^5 Pa, rho = 1000 kg/m³, g = 9.8 m/s².

```
  (a)  Gauge pressure  =  h rho g
                       =  10 x 1000 x 9.8
                       =  9.8 x 10^4  Pa

  (b)  Absolute        =  P0  +  h rho g
                       =  1.01 x 10^5  +  0.98 x 10^5
                       =  1.99 x 10^5  Pa

  So at only 10 m down, the pressure is already about DOUBLE
  the atmospheric pressure. That is why your ears hurt in a pool.
```

## WORKED EXAMPLE 2.2

At what depth in water is the gauge pressure equal to 1 atmosphere?

```
     h rho g  =  1.013 x 10^5

              1.013 x 10^5        1.013 x 10^5
     h  =  ------------------  = ---------------  =  10.34 m
             1000 x 9.8               9800

  Remember this number: EVERY 10 m of water adds about 1 atmosphere.
```

---

# TOPIC 3 — ATMOSPHERIC PRESSURE, THE BAROMETER AND THE MANOMETER

## 3.1 Atmospheric pressure

The air above you has weight. The pressure it produces at sea level is the
**atmospheric pressure**, `P0 = 1.013 x 10^5 Pa`.

> **Definition to write:** Atmospheric pressure at a point is the weight of a
> column of air of unit cross-section extending from that point to the top of
> the atmosphere.

## 3.2 The mercury barometer (Torricelli's barometer)

```
                     ___
                    |   |  <-- VACUUM  (Torricellian vacuum, P = 0)
                    |   |
                    |   |
                    |   |
                    | M |
                    | E |    h = 76 cm
                    | R |
                    | C |
                    | U |
              P0    | R |    P0
              |     | Y |     |
              V     |   |     V
        ~~~~~~~~~~~~|   |~~~~~~~~~~~~~
        |           |___|            |   <-- mercury trough
        |    A                B      |
        |____________________________|
              (A and B are at the same level)
```

**How it works:**

```
  Point B is on the open surface   ->  pressure at B  =  P0
  Point A is inside the tube at the same level.

  Pressure at A  =  (pressure of vacuum)  +  h rho g
                 =  0  +  h rho g

  Same horizontal level, same liquid  ->  P_A  =  P_B

  +--------------------------------------+
  |                                      |
  |        P0   =   h rho g              |
  |                                      |
  +--------------------------------------+

  Check:  h = 0.76 m , rho = 13600 kg/m^3 , g = 9.8
          P0 = 0.76 x 13600 x 9.8  =  1.013 x 10^5 Pa    CORRECT
```

**Why mercury and not water?**

```
  For water:  h  =  P0 / (rho g)  =  1.013 x 10^5 / (1000 x 9.8)  =  10.34 m

  A water barometer would need a tube over 10 metres tall.
  Mercury is 13.6 times denser, so 10.34 / 13.6 = 0.76 m is enough.
  Mercury also does not evaporate much and does not wet glass.
```

> **TRAP:** The barometer reading does **not** depend on the tube's diameter,
> its length, or whether it is tilted. Tilting only makes the mercury *longer*
> along the tube; the **vertical height** stays 76 cm.

## 3.3 The open-tube manometer (measures gas pressure in a vessel)

```
                     GAS
                 +--------+
                 |        |
                 |   P    |             open to the atmosphere
                 |        |                       |
                 +---|----+                       V
                     |                          P0
                     |          _________________
                     |         |                 |
                     |         |                 |    ---
                     |         |                 |     ^
                     |_________|                 |     | h
                     |                           |     v
                  A  |___________________________|    ---
                                    B
                     (A and B are at the same level)

     Pressure at A (from gas side)  =  P
     Pressure at B (from open side) =  P0 + h rho g

     Same level, same liquid:

  +--------------------------------------------+
  |    P  =  P0  +  h rho g                    |
  |                                            |
  |    Gauge pressure of the gas  =  h rho g   |
  +--------------------------------------------+
```

```
  If the liquid is HIGHER on the OPEN side  ->  gas pressure > atmospheric
  If the liquid is HIGHER on the GAS side   ->  gas pressure < atmospheric
                                                (then P = P0 - h rho g)
```

## WORKED EXAMPLE 3.1

A manometer containing mercury shows a difference of levels of 20 cm, with
the mercury higher on the open side. Find the absolute pressure of the gas.

```
  h rho g  =  0.20 x 13600 x 9.8  =  26656 Pa  =  2.67 x 10^4 Pa

  Gauge pressure    =  2.67 x 10^4 Pa
  Absolute pressure =  1.013 x 10^5  +  0.267 x 10^5
                    =  1.28 x 10^5 Pa
```

---

# TOPIC 4 — PASCAL'S LAW

## 4.1 The statement (learn word for word)

> **PASCAL'S LAW:** When pressure is applied to an *enclosed* fluid at rest,
> the change in pressure is transmitted **undiminished** to **every point** of
> the fluid and to the walls of the container.

A second, equivalent form that BIEAP also accepts:

> The pressure at any point inside a fluid at rest is the **same in all
> directions**.

```
        SQUEEZE HERE
             |
             V
      +------|---------------+
      |  ->  |  <-           |
      |      V               |
      |   -> P + dP <-       |     the SAME extra pressure dP
      |      ^               |     appears everywhere
      |  ->  |  <-           |
      +----------------------+

      Everyday proof: squeeze a sealed water balloon on one side,
      it bulges out on EVERY side.
```

## 4.2 Application 1 — THE HYDRAULIC LIFT

```
        F1 (small force)
         |
         V
      +-----+                                +---------------+
      |  a1 |  small piston                  |      a2       |  large piston
      +--|--+                                +-------|-------+
         |                                           ^
      ===|===========================================|=====
      #  |                                           |    #
      #  |          O I L  (enclosed)                |    #
      #  |___________________________________________|    #
      ##################################################### 

                                                   F2 (BIG force,
                                                       lifts the car)
```

**The theory:**

```
  Pressure applied at the small piston  =  F1 / a1

  By Pascal's law this pressure reaches the big piston UNCHANGED:

              F1        F2
             ----  =  ----
              a1        a2

  +-----------------------------------------------+
  |                                               |
  |                    a2                         |
  |        F2  =  F1 x ----                       |
  |                    a1                         |
  |                                               |
  |   MECHANICAL ADVANTAGE  =  F2/F1  =  a2/a1    |
  |                                               |
  +-----------------------------------------------+

  Since a2 >> a1 , a small force F1 produces a huge force F2.
```

> **TRAP:** You do **not** get free energy. The liquid is incompressible, so the
> volume pushed down equals the volume pushed up:
> `a1 x d1 = a2 x d2`. The big piston rises only a tiny distance.
> Work in = Work out. `F1 d1 = F2 d2`.

## 4.3 Application 2 — THE HYDRAULIC BRAKE

```
     BRAKE PEDAL
          |
          V
      +-------+  master cylinder (small area)
      |  a1   |
      +---|---+
          |
      ====|=================================
      #   |            BRAKE FLUID          #
      #   +------------+--------------+     #
      ###############################|#######
                       |             |
                    +--v--+       +--v--+
                    | a2  |       | a2  |    wheel cylinders (large area)
                    +--|--+       +--|--+
                       V             V
                  BRAKE SHOE     BRAKE SHOE
                       |             |
                    +--+--+       +--+--+
                    |     |       |     |
                    | BRAKE DRUM / DISC |
                    +-------------------+
```

```
  1.  A light push on the pedal produces pressure  P = F1 / a1
      in the master cylinder.
  2.  Pascal's law carries that pressure through the brake fluid.
  3.  At each wheel cylinder (large area a2) the force becomes
      F2 = P x a2 , which is much larger.
  4.  Because the pressure is the SAME at all four wheels, all
      four wheels are braked EQUALLY  ->  the car does not skid
      or swerve. That equal braking is the real advantage.
```

## WORKED EXAMPLE 4.1

In a hydraulic lift, compressed air exerts a force on a small piston of radius
5 cm. This pressure is transmitted to a piston of radius 15 cm. What force must
be applied to lift a car of mass 1350 kg? Also find the pressure.
(g = 9.8 m/s²)

```
  a1  =  pi r1^2  =  pi (0.05)^2  =  7.854 x 10^-3  m^2
  a2  =  pi r2^2  =  pi (0.15)^2  =  7.069 x 10^-2  m^2

  F2  =  weight of car  =  1350 x 9.8  =  13230 N

              a1                    (0.05)^2          1
  F1  =  F2 x ----   =  13230 x  --------------  =  13230 x ---
              a2                    (0.15)^2               9

      =  1470 N

  Pressure  P  =  F1 / a1  =  1470 / (7.854 x 10^-3)

               =  1.87 x 10^5  Pa

  NOTE the shortcut:  F2/F1 = (r2/r1)^2 = 3^2 = 9.
  Radii ratio 1:3  ->  force ratio 1:9. Always SQUARE the radii ratio.
```

## WORKED EXAMPLE 4.2

The pistons of a hydraulic press have areas 1 cm² and 200 cm². A force of 20 N
is applied to the small piston. (a) What is the force on the large piston?
(b) If the small piston moves down 10 cm, how far does the large piston rise?

```
  (a)  F2  =  F1 x (a2/a1)  =  20 x (200 / 1)  =  4000 N

  (b)  Volume of liquid displaced is the same:

           a1 d1  =  a2 d2

           1 x 10  =  200 x d2

           d2  =  10 / 200  =  0.05 cm  =  0.5 mm

  CHECK the energy:   W_in  = 20 N x 0.10 m = 2 J
                      W_out = 4000 N x 0.0005 m = 2 J     <-- equal, good.
```

---

# TOPIC 5 — ARCHIMEDES' PRINCIPLE, BUOYANCY AND FLOATATION

## 5.1 Why there is an upward force at all

```
                  P1 = P0 + h1 rho g   (pushes DOWN)
                          |
                          V
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~
                     +----------+
              h1     |          |
              ....   |   BLOCK  |
              h2     |          |
                     +----------+
                          ^
                          |
                  P2 = P0 + h2 rho g   (pushes UP)

    h2 > h1   ->   P2 > P1   ->   NET UPWARD FORCE.
    That net upward force is called BUOYANCY (or upthrust).
```

## 5.2 The principle

> **ARCHIMEDES' PRINCIPLE:** When a body is wholly or partly immersed in a
> fluid at rest, it experiences an upward force (buoyant force) equal to the
> **weight of the fluid displaced** by the body. This force acts at the
> **centre of buoyancy**, which is the centre of gravity of the displaced fluid.

```
  +----------------------------------------------------------+
  |                                                          |
  |    Buoyant force   Fb  =  weight of displaced fluid       |
  |                                                          |
  |                    Fb  =  V_displaced  x  rho_fluid  x g  |
  |                                                          |
  +----------------------------------------------------------+
```

## 5.3 Apparent weight

```
  +----------------------------------------------------------+
  |   APPARENT WEIGHT  =  real weight  -  buoyant force       |
  |                                                          |
  |        W_app  =  W  -  Fb  =  V rho_b g  -  V rho_f g     |
  |                                                          |
  |   LOSS IN WEIGHT  =  Fb  =  weight of fluid displaced     |
  +----------------------------------------------------------+
```

Useful lab result:

```
                          Weight in air
  Relative density  =  --------------------------------
                       Weight in air - weight in water
```

## 5.4 The three cases

```
  +-----------------------------+---------------------------------+
  |  CONDITION                  |  WHAT HAPPENS                   |
  +-----------------------------+---------------------------------+
  |  rho_body  >  rho_fluid     |  W > Fb  ->  the body SINKS     |
  |  rho_body  =  rho_fluid     |  W = Fb  ->  it stays wherever  |
  |                             |              you put it         |
  |  rho_body  <  rho_fluid     |  W < Fb  ->  it rises and then  |
  |                             |              FLOATS partly out  |
  +-----------------------------+---------------------------------+
```

## 5.5 THE LAW OF FLOATATION

> A body floats in a liquid when the **weight of the liquid it displaces is
> equal to its own weight**. For stable floating, the centre of gravity and
> the centre of buoyancy must lie on the same vertical line.

## 5.6 The fraction submerged — a formula worth memorising

```
  For a floating body:      weight  =  buoyant force

      V rho_b g   =   V_sub  rho_f  g

  +----------------------------------------------------------+
  |                                                          |
  |     V_sub          rho_body                              |
  |    -------   =   ------------                            |
  |      V            rho_fluid                              |
  |                                                          |
  |   FRACTION SUBMERGED = ratio of the DENSITIES            |
  |                                                          |
  |   Fraction ABOVE the surface  =  1  -  rho_b / rho_f     |
  +----------------------------------------------------------+
```

## WORKED EXAMPLE 5.1

A block of wood of density 600 kg/m³ floats in water. What fraction is
submerged? What fraction is above water?

```
   V_sub / V   =   600 / 1000   =   0.6      ->  60 % submerged

   Above       =   1 - 0.6      =   0.4      ->  40 % above water
```

## WORKED EXAMPLE 5.2

An iceberg of density 917 kg/m³ floats in sea water of density 1030 kg/m³.
What percentage sticks out above the water?

```
   V_sub / V  =  917 / 1030  =  0.890      ->  89.0 % under water

   Above      =  11.0 %

   Almost 9/10 of an iceberg is hidden — hence "the tip of the iceberg".
```

## WORKED EXAMPLE 5.3

A body weighs 50 N in air and 40 N when fully immersed in water.
Find (a) the buoyant force, (b) the volume of the body, (c) its density.
(g = 9.8 m/s²)

```
  (a)  Fb  =  50 - 40  =  10 N

  (b)  Fb  =  V rho_w g

             10               10
       V = ---------  =  ------------  =  1.02 x 10^-3  m^3
           rho_w g        1000 x 9.8

  (c)  mass of body  =  50 / 9.8  =  5.102 kg

               5.102
       rho = ------------------  =  5000  kg / m^3
             1.02 x 10^-3

  SHORTCUT CHECK:
       RD = W_air / (W_air - W_water) = 50 / 10 = 5
       ->  density = 5 x 1000 = 5000 kg/m^3     MATCHES.
```

## WORKED EXAMPLE 5.4

A cube of side 10 cm and mass 0.7 kg floats in water. How deep does it sink?

```
  Volume of cube  =  (0.10)^3  =  1 x 10^-3  m^3
  Density of cube =  0.7 / 1 x 10^-3  =  700 kg/m^3

  V_sub / V  =  700 / 1000  =  0.7

  Submerged depth  =  0.7 x 10 cm  =  7 cm
```

> **TRAP:** "Loss of weight" and "buoyant force" are the *same* number.
> Do not add them both.

> **TRAP:** A ship made of steel (density 7800) still floats, because its
> **average** density (steel + the hollow air inside) is less than water's.
> Always use the *average* density of the whole body.

---

# TOPIC 6 — TYPES OF FLUID FLOW

## 6.1 Streamline (laminar) flow

> **Streamline flow:** flow in which every particle of the fluid passing a given
> point follows exactly the same path with the same velocity as the particle
> that went before it.

A **streamline** is the path taken by a fluid particle; the tangent to a
streamline at any point gives the direction of velocity there.

```
       STREAMLINE (LAMINAR) FLOW — orderly layers

     ---------------------------------------->
     ---------------------------------------->
     ---------------------------------------->
     ---------------------------------------->

     Streamlines NEVER cross each other.
     (If they did, a particle at the crossing would need two
      velocities at once — impossible.)
```

**Tube of flow:** a bundle of streamlines forming a tube. No fluid crosses its
walls.

## 6.2 Turbulent flow

> **Turbulent flow:** irregular, disorderly flow in which the velocity at a
> point changes randomly in magnitude and direction, with eddies and whirlpools.

```
       TURBULENT FLOW — chaos

     ------>  ~~~~   (O)   ~~~~~  -->
       --->  (O)  ~~~~  ---> (O)
     ---> ~~~~~ ---> (O) ~~~~~ --->

     Energy is wasted in the eddies -> more resistance.
```

## 6.3 Critical velocity

> **Critical velocity** is the velocity of flow up to which the flow remains
> streamline and beyond which it becomes turbulent.

```
  +--------------------------------------------------+
  |                          Re  eta                 |
  |          v_c    =    --------------              |
  |                        rho  D                    |
  +--------------------------------------------------+
```

## 6.4 Comparison table (a ready-made 4-mark answer)

| | STREAMLINE FLOW | TURBULENT FLOW |
|---|---|---|
| Path of particles | fixed, orderly | random, disorderly |
| Velocity at a point | constant in time | changes randomly |
| Speed | below critical velocity | above critical velocity |
| Reynolds number | Re < 1000 | Re > 2000 |
| Energy loss | small | large (eddies) |
| Bernoulli's equation | applies | does NOT apply |
| Example | slow tap, blood in capillaries | waterfall, smoke high above a flame |

---

# TOPIC 7 — THE EQUATION OF CONTINUITY

## 7.1 The idea in one sentence

Water cannot be created or destroyed inside a pipe, so **whatever goes in per
second must come out per second**. If the pipe gets narrower, the water has no
choice but to speed up.

## 7.2 The derivation

```
                a1                                a2
        +----------------+
        |                \                 +----------+
   -->  |      v1         \____________    |    v2    |   -->
        |                              \___|          |
        |                 ____________     |          |
        |                /            \____|          |
        +----------------+                 +----------+

           <-- v1 dt -->                    <-- v2 dt -->
            REGION 1                         REGION 2
```

```
  In a small time dt:

     volume entering at 1   =  a1 x (v1 dt)
     mass entering at 1     =  rho x a1 v1 dt

     volume leaving at 2    =  a2 x (v2 dt)
     mass leaving at 2      =  rho x a2 v2 dt

  Mass is conserved and the liquid is incompressible (rho the same):

        rho a1 v1 dt  =  rho a2 v2 dt

  +----------------------------------------------+
  |                                              |
  |        a1 v1   =   a2 v2   =   constant      |
  |                                              |
  |        i.e.    a v  =  constant              |
  |                                              |
  +----------------------------------------------+

  a v is called the VOLUME FLOW RATE or FLUX  (unit: m^3 / s).
```

## 7.3 What it means physically

```
  a v = constant   means   v  is INVERSELY proportional to  a

     WIDE pipe   ->  SLOW flow    ->  streamlines far apart
     NARROW pipe ->  FAST flow    ->  streamlines crowded together

  Everyday proof:  put your thumb over the end of a garden hose.
                   You reduce the area, so the water shoots out faster.

  Also:  a falling stream of water from a tap gets THINNER as it falls,
         because gravity speeds it up, so the area must shrink.
```

> **TRAP:** The equation of continuity is nothing but the **law of conservation
> of mass** applied to a flowing fluid. Examiners often ask "which conservation
> law does it express?" — the answer is **MASS**, not energy.
> (Bernoulli's theorem is the energy one.)

## WORKED EXAMPLE 7.1

Water flows at 4 m/s in a pipe of radius 2 cm. The pipe narrows to radius 1 cm.
Find the new speed and the volume flow rate.

```
   a1 v1  =  a2 v2

   pi r1^2 v1  =  pi r2^2 v2

              r1^2            (2)^2
   v2  =  v1 -------  =  4 x -------  =  4 x 4  =  16 m/s
              r2^2            (1)^2

   Flow rate  Q  =  a1 v1  =  pi (0.02)^2 x 4
                 =  3.1416 x 4 x 10^-4 x 4
                 =  5.03 x 10^-3  m^3/s   =  5.03 litres per second
```

> **SHORTCUT:** halve the radius -> the speed becomes **4 times**, not 2 times.
> Area goes as r², so always square the ratio.

## WORKED EXAMPLE 7.2

A pipe of area 20 cm² branches into two pipes of areas 8 cm² and 12 cm².
Water enters the main pipe at 3 m/s and leaves the 8 cm² branch at 5 m/s.
Find the speed in the other branch.

```
   Total in  =  total out

   a v  =  a_A v_A  +  a_B v_B

   20 x 3  =  8 x 5  +  12 x v_B

   60      =  40  +  12 v_B

   v_B  =  20 / 12  =  1.67  m/s
```

---

# TOPIC 8 — BERNOULLI'S PRINCIPLE

This is the **8-mark question**. Learn the derivation line by line.

## 8.1 The statement

> **BERNOULLI'S THEOREM:** For the streamline flow of an ideal (non-viscous,
> incompressible) fluid, the sum of the pressure energy, kinetic energy and
> potential energy **per unit volume** remains constant at every point along a
> streamline.

```
  +---------------------------------------------------------------+
  |                                                               |
  |                    1                                          |
  |         P     +    - rho v^2    +    rho g h    =  constant    |
  |                    2                                          |
  |                                                               |
  |      pressure     kinetic          potential                  |
  |      energy       energy           energy                     |
  |      per unit     per unit         per unit                   |
  |      volume       volume           volume                     |
  |                                                               |
  +---------------------------------------------------------------+

  Dividing throughout by  rho g  gives the "head" form:

           P            v^2
        --------   +   -----   +   h    =   constant
         rho g          2 g

        pressure     velocity    gravitational
        head          head        head
```

## 8.2 Assumptions (a 2-mark question on its own)

```
  1.  The fluid is IDEAL — non-viscous (no internal friction).
  2.  The fluid is INCOMPRESSIBLE (density constant).
  3.  The flow is STREAMLINE and STEADY (not turbulent).
  4.  The flow is IRROTATIONAL (no eddies / no spinning).
```

## 8.3 The derivation

```
                                                    a2 , v2 , P2
                                                +----------+
                                                |          |
                                       ________/            \_____
                                      /                            \
        a1 , v1 , P1                 /                              |
     +----------+                   /                               |
     |          |__________________/                                |
     |          |                                                   |
     |  --> v1  |                                              h2   |
     +----------+                                                   |
          |                                                         |
          |  h1                                                     |
          |                                                         |
   =======+=========================================================+=====
                            reference level
```

**Step 1 — work done by the pressure at the ends**

```
  At end 1 the fluid behind PUSHES the fluid forward:

      Force at 1  =  P1 a1        it moves a distance  v1 dt
      Work W1  =  P1 a1 v1 dt        (POSITIVE — same direction as motion)

  At end 2 the fluid ahead PUSHES BACK:

      Force at 2  =  P2 a2        it moves a distance  v2 dt
      Work W2  =  - P2 a2 v2 dt      (NEGATIVE — opposes motion)

  By continuity  a1 v1 dt  =  a2 v2 dt  =  V   (the same small volume)

      Net work by pressure  =  P1 V  -  P2 V  =  (P1 - P2) V
```

**Step 2 — the change in kinetic energy**

```
  Mass of that volume,  m  =  rho V

                          1            1
      dKE  =  KE2 - KE1 = - m v2^2  -  - m v1^2
                          2            2

                          1
            =             - rho V ( v2^2  -  v1^2 )
                          2
```

**Step 3 — the change in potential energy**

```
      dPE  =  m g h2  -  m g h1  =  rho V g ( h2  -  h1 )
```

**Step 4 — apply the work-energy theorem**

```
      Net work done  =  dKE  +  dPE

                                  1
      (P1 - P2) V   =             - rho V ( v2^2 - v1^2 )
                                  2
                          +  rho V g ( h2 - h1 )

  Divide throughout by V :

                       1
      P1 - P2  =       - rho ( v2^2 - v1^2 )  +  rho g ( h2 - h1 )
                       2

  Rearranging so that all the "1" terms are on the left:

  +---------------------------------------------------------------+
  |         1                              1                      |
  |  P1  +  - rho v1^2  +  rho g h1  =  P2 + - rho v2^2 + rho g h2 |
  |         2                              2                      |
  +---------------------------------------------------------------+

  Since points 1 and 2 were arbitrary:

               1
      P   +    - rho v^2   +   rho g h   =   CONSTANT      (proved)
               2
```

## 8.4 The special case everyone uses — horizontal flow

```
  If the pipe is HORIZONTAL,  h1 = h2 , so the rho g h terms cancel:

  +-------------------------------------------------+
  |             1                                   |
  |     P   +   - rho v^2    =    constant          |
  |             2                                   |
  |                                                 |
  |     ->  where the speed is HIGH,                |
  |         the pressure is LOW.                    |
  +-------------------------------------------------+
```

**That single line explains every application below.** Memorise it as:
**"FAST = LOW PRESSURE."**

## WORKED EXAMPLE 8.1

Water flows through a horizontal pipe. At a wide section the area is 10 cm²,
the speed is 1 m/s and the pressure is 2 x 10^5 Pa. At a narrow section the area
is 5 cm². Find the speed and pressure there.

```
  Step 1 — continuity:

      a1 v1  =  a2 v2   ->   10 x 1  =  5 x v2   ->   v2 = 2 m/s

  Step 2 — Bernoulli (horizontal, so no h terms):

             1                     1
      P1  +  - rho v1^2  =  P2  +  - rho v2^2
             2                     2

                     1
      P2  =  P1  +   - rho ( v1^2  -  v2^2 )
                     2

                              1
           =  2 x 10^5   +    - x 1000 x ( 1  -  4 )
                              2

           =  2 x 10^5   -  1500

           =  1.985 x 10^5  Pa

  The pressure DROPPED where the pipe was narrow. Correct.
```

---

# TOPIC 9 — APPLICATIONS OF BERNOULLI'S PRINCIPLE

## 9.1 THE VENTURIMETER (measures the flow rate in a pipe)

```
          MANOMETER  (difference of levels = h)
                 |         |
                ---       ---
                | |       | |
                | |  h    | |
                | |  |    | |
      __________|_|__V____|_|____________
     /          | |       | |            \
    /  a1       |_|  a2   |_|             \    a1
   |   -->      | |  -->  | |              |   -->
   |   v1  P1   |_|  v2   |_|              |
    \           | |  P2   | |             /
     \__________|_|_______|_|____________/
                THROAT (narrow)
```

**How it works:**

```
  1.  The throat is narrow, so by continuity  v2 > v1.
  2.  By Bernoulli, faster means lower pressure, so  P2 < P1.
  3.  The manometer measures  P1 - P2  from the height difference h.
  4.  From that we work backwards to the flow rate.

  Continuity :        a1 v1  =  a2 v2      ->   v2  =  a1 v1 / a2

                          1              1
  Bernoulli  :   P1  +    - rho v1^2  =  P2 + - rho v2^2
                          2              2

                          1
                 P1 - P2 = - rho ( v2^2 - v1^2 )
                          2

  Substitute v2 :

                          1        /  a1^2        \
                 P1 - P2 = - rho v1^2 |  ------  -  1  |
                          2        \  a2^2        /

  Solve for v1 , then multiply by a1 to get the flow rate Q = a1 v1 :

  +---------------------------------------------------------------+
  |                                                               |
  |                        /        2 ( P1 - P2 )       \         |
  |    Q  =  a1 a2  sqrt  |  --------------------------  |        |
  |                        \    rho ( a1^2  -  a2^2 )   /         |
  |                                                               |
  |    and if the manometer liquid is the same liquid,            |
  |    P1 - P2  =  h rho g , so                                   |
  |                                                               |
  |                        /        2 g h              \          |
  |    Q  =  a1 a2  sqrt  |  ------------------------   |         |
  |                        \      a1^2  -  a2^2        /          |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 9.1

A venturimeter has a1 = 10 cm² and a2 = 5 cm². The pressure difference between
the wide part and the throat is 500 Pa. Water flows through it (rho = 1000).
Find the rate of flow.

```
  a1  =  10 x 10^-4  =  1 x 10^-3  m^2
  a2  =   5 x 10^-4  =  5 x 10^-4  m^2

  a1^2 - a2^2  =  1 x 10^-6  -  0.25 x 10^-6  =  7.5 x 10^-7  m^4

     2 (P1 - P2)         2 x 500            1000
   -----------------  = ------------------ = ------------  =  1.333 x 10^6
   rho (a1^2 - a2^2)    1000 x 7.5 x 10^-7   7.5 x 10^-4

   sqrt( 1.333 x 10^6 )  =  1154.7

   Q  =  a1 a2 x 1154.7
      =  (1 x 10^-3)(5 x 10^-4)(1154.7)
      =  5.77 x 10^-4   m^3 / s

      =  0.577  litres per second
```

## 9.2 SPEED OF EFFLUX — TORRICELLI'S LAW

```
        __________________________
       |            .             |
       |     ~~~~~~~~~~~~~~~~     |   <-- free surface, area A, speed ~ 0
       |            ^             |
       |            |             |
       |            | h           |
       |            |             |
       |            v             |
       |                     ()===|=====>   v  (jet of water)
       |                          |         hole of area a  (a << A)
       |                    |     |
       |               (H-h)|     |
       |                    v     |
       +==========================+
                  GROUND
```

**Derivation:**

```
  Apply Bernoulli between the free surface (point 1) and the hole (point 2).

  Both are open to the atmosphere, so  P1 = P2 = P0.
  Since a << A , by continuity the surface speed  v1 ~ 0.
  Take the hole as the reference level:  h1 = h , h2 = 0.

           1                            1
   P0  +   - rho (0)^2  +  rho g h  =  P0 + - rho v^2  +  0
           2                            2

                                  1
                    rho g h  =    - rho v^2
                                  2

  +--------------------------------------------------+
  |                                                  |
  |         v   =   sqrt( 2 g h )                    |
  |                                                  |
  |   TORRICELLI'S LAW                               |
  +--------------------------------------------------+
```

> **The beautiful result:** this is exactly the speed a body would reach if it
> simply **fell freely** through the height h. The liquid "forgets" it is a
> liquid. That is why Torricelli's law is also called the **law of efflux**.

**Two extra results worth knowing:**

```
  Horizontal RANGE of the jet from a hole at depth h in a tank of
  liquid depth H (hole in the side wall, liquid standing on the ground):

      time to fall (H - h) :   t = sqrt( 2(H-h)/g )

      x  =  v t  =  sqrt(2 g h) x sqrt( 2(H-h)/g )

  +-------------------------------------------------+
  |     x  =  2 sqrt( h ( H - h ) )                  |
  |                                                 |
  |     MAXIMUM range when  h = H/2 , and then       |
  |     x_max  =  H                                  |
  +-------------------------------------------------+
```

### WORKED EXAMPLE 9.2

A tank is filled with water to a height of 5 m. A small hole is made at the
bottom of the side wall. Find the speed of efflux. (g = 9.8)

```
   v  =  sqrt( 2 g h )  =  sqrt( 2 x 9.8 x 5 )  =  sqrt(98)  =  9.9 m/s
```

### WORKED EXAMPLE 9.3

A tank 4 m deep is full of water. A hole is made 1 m above the bottom.
How far from the base does the jet land?

```
   H = 4 m  (total depth) ;  hole is 1 m above the base
   ->  depth of the hole below the surface,  h = 4 - 1 = 3 m
   ->  height of the hole above the ground,  H - h = 1 m

   x  =  2 sqrt( h (H - h) )  =  2 sqrt( 3 x 1 )  =  2 x 1.732  =  3.46 m
```

## 9.3 DYNAMIC LIFT ON AN AEROPLANE WING (AEROFOIL)

```
       streamlines CROWDED  ->  air moves FASTER  ->  LOW pressure
       ===========================================================
        ------->  ------->  ------->  ------->
          ______________________________
        /                                \___
      /                                       \____
     |______________________________________________\
        ------->      ------->      ------->
       ===========================================================
       streamlines SPREAD OUT  ->  air SLOWER  ->  HIGH pressure

                            ^
                            |    NET UPWARD FORCE  =  LIFT
                            |
```

```
  The wing is curved on top and flatter underneath, and it is tilted
  slightly (the angle of attack).

  1.  Air going over the top has to travel further / is crowded,
      so it moves FASTER.
  2.  By Bernoulli, faster air has LOWER pressure.
  3.  The air underneath is slower and so has HIGHER pressure.
  4.  Pressure difference x wing area  =  an upward force = LIFT.

  +-------------------------------------------------+
  |                1                                |
  |   LIFT  =      - rho ( v_top^2 - v_bottom^2 ) A  |
  |                2                                |
  +-------------------------------------------------+
```

### WORKED EXAMPLE 9.4

Air flows over the top of a wing at 70 m/s and under it at 60 m/s. The total
wing area is 5 m² and the density of air is 1.3 kg/m³. Find the lift.

```
             1
   dP   =    - x 1.3 x ( 70^2  -  60^2 )
             2

        =  0.5 x 1.3 x ( 4900 - 3600 )

        =  0.5 x 1.3 x 1300   =  845  Pa

   Lift  =  dP x A  =  845 x 5  =  4225  N
```

## 9.4 THE MAGNUS EFFECT — why a spinning ball swerves

```
        BALL SPINNING (top surface moving WITH the airflow)

          air speed  v + v_spin   ->  FASTER  ->  LOW pressure
        ================================================
         ---->  ---->   _______   ---->  ---->
                      /  ,--.   \
                     |  |  ^ |   |     <-- ball, spinning
                     |   `--'    |         this way (backspin)
                      \_________/
         ---->  ---->           ---->  ---->
        ================================================
          air speed  v - v_spin   ->  SLOWER ->  HIGH pressure

                            ^
                            |   NET UPWARD FORCE
                            |   (the ball rises / "floats")
```

```
  When a ball spins, the layer of air stuck to its surface is dragged
  around with it.

  ->  On one side the dragged air moves WITH the oncoming air
      -> total speed is HIGHER -> pressure is LOWER.
  ->  On the other side they oppose
      -> speed is LOWER -> pressure is HIGHER.

  The pressure difference pushes the ball SIDEWAYS (or upwards).

  This sideways force on a spinning body is the MAGNUS EFFECT,
  and the force itself is called DYNAMIC LIFT.

  Cricket  :  a swinging delivery.
  Football :  a "banana" free kick that curls round the wall.
  Tennis   :  topspin makes the ball dip sharply.
```

## 9.5 THE ATOMISER / SPRAYER (perfume bottle, scent spray)

```
                 squeeze the bulb
                        |
                        V
       +======================+
       ||  fast air  ---->    ||====>  spray
       +======|===============+
              |
              |  <-- pressure here is LOW,
              |      so the atmospheric pressure on the
              |      liquid surface pushes liquid UP
            | |
            | |  tube
        ____|_|____
       |    | |    |
       |    |_|    |
       |  LIQUID   |
       |___________|
```

```
  1.  Squeezing the bulb blows a fast jet of air across the top of the tube.
  2.  Fast air  ->  LOW pressure at the top of the tube (Bernoulli).
  3.  The atmospheric pressure on the liquid surface in the bottle is now
      GREATER, so it pushes the liquid up the tube.
  4.  At the top the liquid meets the fast air jet and is broken up into
      a fine spray.

  The same idea runs:  the BUNSEN BURNER (fast gas from the jet lowers the
  pressure near the air holes, so air is sucked in and mixes with the gas
  to give a hot blue flame), the paint sprayer, the carburettor of a car,
  and a filter pump.
```

## 9.6 WHY A FAST TRAIN PULLS YOU TOWARDS IT

```
        PLATFORM
    ................................
              you ->  |
                      |
        ---->  ----> air dragged along by the train, FAST -> LOW PRESSURE
     ####################################
     #   T  R  A  I  N                  #  ---->  moving fast
     ####################################

    behind you the air is still -> NORMAL (HIGHER) PRESSURE
                      |
                      V
    The higher pressure behind pushes you TOWARDS the train.
```

```
  Same reason for:
   - two ships sailing side by side being pulled into each other,
   - a bus overtaking a bike appearing to "suck" it in,
   - the shower curtain being sucked inward when the water runs,
   - the roof of a tin shed being blown OFF (not in) during a storm:
     fast wind above the roof lowers the pressure there, while the
     still air inside pushes up.
```

> **TRAP:** Do not say "the train sucks you in". There is no suction force.
> Say: *the air pressure between you and the train falls, so the higher
> pressure on the other side pushes you in.* Only that wording gets full marks.

---

# TOPIC 10 — VISCOSITY

## 10.1 The idea

Pour water and pour honey. Honey resists. That internal resistance is viscosity.

> **VISCOSITY** is the property of a fluid by virtue of which it **opposes the
> relative motion between its own adjacent layers**. The opposing force is
> called the **viscous force**.

Think of it as **friction inside the liquid**.

## 10.2 The velocity gradient

```
        LIQUID FLOWING OVER A FIXED SURFACE

              -------------------->    v + dv     ^
                                                  | dx
              ------------------>      v          v
              --------------->
              ----------->
              ------->
              --->
        //////////////////////////////////  FIXED SURFACE
        (the layer touching the surface is at REST)

                                     dv
        VELOCITY GRADIENT   =       ----      unit :  s^-1
                                     dx
```

The layer touching the wall does not move at all. Each layer above slides a
little faster. **Velocity gradient** = the rate at which the speed changes as
you move perpendicular to the flow.

## 10.3 Newton's law of viscous flow

```
  The viscous force F between two layers is found by experiment to be:

        F  is proportional to  A         (the area of contact)
        F  is proportional to  dv/dx     (the velocity gradient)

  +------------------------------------------------------+
  |                                                      |
  |                          dv                          |
  |         F   =   -  eta A ----                        |
  |                          dx                          |
  |                                                      |
  |    eta  =  COEFFICIENT OF VISCOSITY                  |
  |    the MINUS sign shows the force OPPOSES the motion |
  |                                                      |
  +------------------------------------------------------+
```

## 10.4 The coefficient of viscosity

```
                            F
        eta   =   ------------------------
                     A  ( dv / dx )

  DEFINITION:  eta is the viscous force acting per unit area of contact
               between two layers having unit velocity gradient between them.
```

```
  +----------------------------------------------------------------+
  |  SI UNIT      :  N s / m^2  =  Pa . s  =  "poiseuille" (PI)     |
  |                  also written  kg m^-1 s^-1                     |
  |                                                                |
  |  CGS UNIT     :  dyne s / cm^2  =  POISE                        |
  |                                                                |
  |  CONVERSION   :  1 Pa.s  =  10 poise                            |
  |                  1 poise =  0.1 Pa.s                            |
  |                                                                |
  |  DIMENSIONS   :  [ M L^-1 T^-1 ]                                |
  +----------------------------------------------------------------+
```

**Deriving the dimensions (a favourite 2-mark question):**

```
              F              [ M L T^-2 ]           [ M L T^-2 ]
  eta  =  -----------  =  --------------------  =  ---------------
           A (dv/dx)       [ L^2 ] [ T^-1 ]         [ L^2 T^-1 ]

       =  [ M L^-1 T^-1 ]
```

## 10.5 Typical values (useful for a sanity check)

```
  +-----------------+---------------------+
  |  Air            |  1.8 x 10^-5  Pa.s  |
  |  Water (20 C)   |  1.0 x 10^-3  Pa.s  |
  |  Blood          |  2.7 x 10^-3  Pa.s  |
  |  Castor oil     |  about 0.99  Pa.s   |
  |  Glycerine      |  about 0.83  Pa.s   |
  |  Honey          |  about 10    Pa.s   |
  +-----------------+---------------------+
```

## 10.6 Effect of TEMPERATURE — liquids and gases behave OPPOSITELY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  LIQUIDS :   Viscosity DECREASES as temperature rises.               |
  |              Reason - viscosity in a liquid comes from the           |
  |              COHESIVE forces between molecules. Heating weakens      |
  |              those forces, so the layers slide more easily.          |
  |              (Heat honey and it pours like water.)                   |
  |                                                                     |
  |  GASES   :   Viscosity INCREASES as temperature rises.               |
  |              Reason - viscosity in a gas comes from the TRANSFER     |
  |              OF MOMENTUM by molecules jumping between layers.        |
  |              Heating makes the molecules jump faster and more        |
  |              often, so more momentum is exchanged.                   |
  |                                                                     |
  |              For a gas :  eta is proportional to sqrt(T)             |
  |                                                                     |
  +---------------------------------------------------------------------+

  Effect of PRESSURE:
     Liquids -  viscosity increases slightly with pressure.
     Gases   -  viscosity is almost INDEPENDENT of pressure.
```

> **TRAP:** This opposite behaviour is asked almost every year as a 2-mark
> question. Write BOTH the direction *and* the reason.

## WORKED EXAMPLE 10.1

A plate of area 0.1 m² is moved with a speed of 0.5 m/s over a fixed plate,
separated by an oil layer 1 mm thick. If eta = 0.9 Pa.s, find the force needed.

```
   dv / dx  =  0.5 / (1 x 10^-3)  =  500  s^-1

   F  =  eta A (dv/dx)  =  0.9 x 0.1 x 500   =  45  N
```

---

# TOPIC 11 — STOKES' LAW AND TERMINAL VELOCITY

## 11.1 Stokes' law

> When a small **sphere** moves through a viscous fluid, the viscous drag on it
> is proportional to its radius, its speed, and the coefficient of viscosity.

```
  +--------------------------------------------------+
  |                                                  |
  |          F   =   6  pi  eta  r  v                |
  |                                                  |
  |   eta = coefficient of viscosity                 |
  |   r   = radius of the sphere                     |
  |   v   = velocity of the sphere                   |
  +--------------------------------------------------+

  Conditions for Stokes' law to hold:
   1. the body must be a SPHERE and SMALL,
   2. the fluid must be of infinite extent,
   3. the flow around it must be STREAMLINE (small Re),
   4. the sphere must be perfectly rigid and smooth.
```

## 11.2 Terminal velocity — what actually happens

```
  DROP A SMALL BALL INTO GLYCERINE:

  At the start    : v = 0  ->  drag = 0  ->  net force is DOWNWARD
                    ->  the ball ACCELERATES.

  As v increases  : drag  6 pi eta r v  GROWS.

  Eventually      : drag + upthrust  =  weight
                    ->  net force = 0  ->  acceleration = 0
                    ->  the ball falls with a CONSTANT velocity.

  That constant velocity is the TERMINAL VELOCITY.
```

## 11.3 The free-body diagram and the derivation

```
              |     Fv = 6 pi eta r v   (viscous drag, UP)
              ^     U  = (4/3) pi r^3 sigma g  (upthrust, UP)
              |
           +-----+
           |  o  |     sphere : radius r , density rho
           +-----+
              |
              v     W = (4/3) pi r^3 rho g   (weight, DOWN)
```

```
  AT TERMINAL VELOCITY the net force is zero:

      W   =   U   +   Fv

   4                4
   - pi r^3 rho g = - pi r^3 sigma g  +  6 pi eta r v
   3                3

   4
   - pi r^3 g ( rho - sigma )   =   6 pi eta r v
   3

   Cancel  pi r  from both sides:

   4
   - r^2 g ( rho - sigma )   =   6 eta v
   3

   +-------------------------------------------------------+
   |                                                       |
   |                2  r^2 ( rho  -  sigma ) g             |
   |     v_t   =   -----------------------------           |
   |                        9  eta                         |
   |                                                       |
   |     rho   = density of the SPHERE                     |
   |     sigma = density of the LIQUID                     |
   +-------------------------------------------------------+
```

## 11.4 What the formula tells you

```
   v_t  is proportional to  r^2       ->  a big drop falls much faster
   v_t  is inversely proportional to eta  ->  thicker liquid, slower fall

   If rho > sigma  ->  v_t is POSITIVE  ->  the body sinks.
   If rho < sigma  ->  v_t is NEGATIVE  ->  the body RISES
                       (this is why an air bubble rises in water).
```

## 11.5 The velocity-time graph (draw this — it carries a mark)

```
    v
    ^
    |                                    ______________________
    |                          _____----
    |                    __---
    |                _--                     v_t  (terminal velocity)
    |             _-
    |           _-
    |         _-
    |       _-        <-- slope here = g (free-fall at the very start)
    |     _-
    |   _-
    | _-
    +--------------------------------------------------------> t
   O

   The curve starts as a straight line of slope g, then bends over
   and becomes horizontal (asymptotic) at v = v_t.
   It NEVER actually exceeds v_t.
```

## 11.6 Everyday examples

```
  - A raindrop does not kill you: it reaches its terminal velocity
    a few metres after it forms.
  - A parachute has a huge area -> huge drag -> tiny terminal velocity.
  - Bubbles rise steadily through a soft drink, not faster and faster.
  - Millikan used exactly this to find the charge on the electron.
```

## WORKED EXAMPLE 11.1

A steel ball of radius 1 mm and density 8000 kg/m³ falls through glycerine
(density 1260 kg/m³, eta = 0.83 Pa.s). Find its terminal velocity.
(g = 9.8 m/s²)

```
   r  =  1 mm  =  1 x 10^-3 m    ->    r^2  =  1 x 10^-6  m^2

   rho - sigma  =  8000 - 1260  =  6740  kg/m^3

              2  x  (1 x 10^-6) x 6740 x 9.8
   v_t  =   ----------------------------------
                      9 x 0.83

              2 x 10^-6 x 66052            0.132104
        =   ---------------------   =   ---------------
                    7.47                     7.47

        =   1.77 x 10^-2   m / s     =   1.77  cm / s
```

## WORKED EXAMPLE 11.2

Two raindrops of radii 0.2 mm and 0.4 mm fall through air. What is the ratio
of their terminal velocities?

```
   v_t  is proportional to  r^2

   v1 / v2  =  ( r1 / r2 )^2  =  ( 0.2 / 0.4 )^2  =  ( 1/2 )^2  =  1 / 4

   The bigger drop falls FOUR times faster.
```

## WORKED EXAMPLE 11.3

Eight identical water droplets, each of terminal velocity v, coalesce into
one large drop. Find the terminal velocity of the big drop.

```
   Volume is conserved:

      8 x (4/3) pi r^3   =   (4/3) pi R^3

      R^3  =  8 r^3   ->   R  =  2 r

   v_t is proportional to (radius)^2 :

      V / v  =  ( R / r )^2  =  2^2  =  4

      V  =  4 v
```

> **SHORTCUT:** for **n** droplets joining, `R = n^(1/3) r`, so the new
> terminal velocity is `n^(2/3)` times the old one.

---

# TOPIC 12 — REYNOLDS NUMBER

## 12.1 What it is

Reynolds number tells you, before you even look, whether a flow will be neat
and layered or messy and turbulent.

```
  +--------------------------------------------------------+
  |                                                        |
  |                    rho  v  D                           |
  |          Re   =   -------------                        |
  |                       eta                              |
  |                                                        |
  |   rho = density of the fluid                           |
  |   v   = speed of flow                                  |
  |   D   = diameter of the pipe (the characteristic size) |
  |   eta = coefficient of viscosity                       |
  +--------------------------------------------------------+
```

## 12.2 It is DIMENSIONLESS — prove it

```
             [ M L^-3 ] [ L T^-1 ] [ L ]        [ M L^-1 T^-1 ]
   [ Re ] = --------------------------------  = ----------------- = [ 1 ]
                  [ M L^-1 T^-1 ]                [ M L^-1 T^-1 ]

   No units, no dimensions. Just a pure number.
```

## 12.3 Its physical meaning

```
                     inertial force per unit area
   Re    =    -------------------------------------------
                     viscous force per unit area

   Small Re  ->  viscosity WINS  ->  the fluid stays orderly  ->  LAMINAR
   Large Re  ->  inertia WINS    ->  the fluid tumbles         ->  TURBULENT
```

## 12.4 The critical values (memorise)

```
  +----------------------+----------------------------------------+
  |   Re  <  1000        |  STREAMLINE (laminar) flow             |
  |   1000 < Re < 2000   |  UNSTABLE — may switch either way      |
  |   Re  >  2000        |  TURBULENT flow                        |
  +----------------------+----------------------------------------+

  (Some books use 2000 and 3000 as the two limits. For BIEAP, quote
   1000 and 2000, which is what the NCERT-based text uses.)
```

## 12.5 Critical velocity from Reynolds number

```
                Re  eta
   v_c   =   --------------           (put Re = 2000 for the upper limit)
                rho  D
```

## WORKED EXAMPLE 12.1

Water (rho = 1000 kg/m³, eta = 1 x 10^-3 Pa.s) flows through a pipe of
diameter 2 cm. Above what speed does the flow become turbulent?

```
                Re eta              2000  x  1 x 10^-3            2
   v_c  =   ------------  =    ---------------------------  =  --------
                rho D               1000 x 0.02                   20

        =  0.1  m / s
```

## WORKED EXAMPLE 12.2

Oil of density 900 kg/m³ and viscosity 0.05 Pa.s flows at 0.5 m/s through a
pipe of diameter 4 cm. Is the flow laminar or turbulent?

```
            rho v D        900 x 0.5 x 0.04          18
   Re  =  -----------  =  --------------------  =  --------  =  360
              eta               0.05                 0.05

   Re = 360 , which is well below 1000  ->  the flow is LAMINAR.
```

---

# TOPIC 13 — SURFACE TENSION

## 13.1 What you can see

```
  - A needle floats on water even though steel is denser than water.
  - Insects walk on a pond.
  - Water forms round drops instead of flat sheets.
  - A drop hanging from a tap stretches like a tiny balloon before it falls.
```

All of these say the same thing: **the surface of a liquid behaves like a
stretched elastic membrane**.

## 13.2 Cohesive and adhesive forces

```
  COHESIVE force  -  attraction between molecules of the SAME substance.
                     (water molecule <-> water molecule)

  ADHESIVE force  -  attraction between molecules of DIFFERENT substances.
                     (water molecule <-> glass molecule)
```

```
  Water on GLASS   :  adhesion (water-glass) > cohesion (water-water)
                      ->  water SPREADS and WETS the glass.

  Mercury on GLASS :  cohesion (Hg-Hg) > adhesion (Hg-glass)
                      ->  mercury forms BEADS and does NOT wet glass.
```

## 13.3 The molecular explanation — the SPHERE OF INFLUENCE

> **Sphere of influence** (molecular range): the small sphere, of radius about
> 10^-9 m, drawn around a molecule, inside which its attraction on other
> molecules is appreciable.

```
                       AIR
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              .- - .           .- - .
            /       \        /       \
           |    A    |      |    B    |     <-- A is ON the surface
            \  \|/  /        \ \ | / /          B is JUST BELOW it
              `-|- '           `-|- '
                |                |            each half-circle shows
                V                V            the SPHERE OF INFLUENCE
        (net force DOWNWARD)  (net force
                               downward, smaller)


            .- - .
          /       \
         |    C    |    <-- C is DEEP inside
       <-|<-  o  ->|->        pulled EQUALLY in all directions
          \ /|\  /            ->  NET FORCE = ZERO
            `- -'
```

```
  MOLECULE C (deep inside)
     Its sphere of influence is completely filled with liquid.
     It is pulled equally in every direction  ->  NET FORCE = ZERO.

  MOLECULE A (on the surface)
     The upper half of its sphere of influence is AIR, which pulls
     almost nothing. The lower half is full of liquid.
     ->  There is a NET DOWNWARD (inward) pull.

  RESULT:
     Every surface molecule is dragged inward. The surface therefore
     tries to SHRINK to the smallest possible area, and behaves like
     a stretched membrane. THAT is surface tension.
```

## 13.4 The definition of surface tension

> **SURFACE TENSION (T)** is the force acting per unit length on an imaginary
> line drawn tangentially on the free surface of a liquid, acting perpendicular
> to that line and tangential to the surface.

```
  +---------------------------------------------+
  |                        F                    |
  |          T    =      -----                  |
  |                        l                    |
  |                                             |
  |  SI unit    :  N / m                        |
  |  CGS unit   :  dyne / cm    (1 N/m = 1000)  |
  |  Dimensions :  [ M T^-2 ]                   |
  |  It is a SCALAR.                            |
  +---------------------------------------------+
```

## 13.5 Surface energy and its relation to surface tension

Making new surface means dragging molecules from inside to the surface, and
that costs work. So the surface stores extra potential energy.

> **SURFACE ENERGY** is the extra potential energy per unit area of the free
> surface of a liquid.

**The derivation (a standard 4-mark question):**

```
        A soap film on a rectangular wire frame with a sliding wire:

        +===============================+
        |                               ||
        |                               ||  <-- sliding wire, length l
        |        SOAP  FILM             ||
        |                               ||  --> F   pulled a distance dx
        |                               ||
        +===============================+
                                        |<-dx->|

  The film has TWO surfaces (front and back), so the total length of
  the line the surface tension acts along is  2 l.

      Force needed to hold the wire :   F  =  T x ( 2 l )

      Work done in pulling it out by dx :

           W  =  F dx  =  T x 2 l x dx

      Increase in surface AREA (two faces) :

           dA  =  2 l dx

      So :
                        W          T x 2 l dx
                      ------  =  --------------  =  T
                        dA          2 l dx

  +----------------------------------------------------------+
  |                                                          |
  |     SURFACE ENERGY per unit area   =   SURFACE TENSION   |
  |                                                          |
  |               W  =  T x dA                               |
  |                                                          |
  |     ( N/m  and  J/m^2 are the same unit :                |
  |       N/m = N.m/m^2 = J/m^2 )                            |
  +----------------------------------------------------------+
```

## 13.6 Factors affecting surface tension

```
  +---------------------+-----------------------------------------------+
  |  FACTOR             |  EFFECT                                       |
  +---------------------+-----------------------------------------------+
  |  TEMPERATURE        |  T DECREASES as temperature rises.            |
  |                     |  Heating increases the molecular separation,  |
  |                     |  weakening the cohesive force.                |
  |                     |  At the CRITICAL TEMPERATURE, T becomes ZERO. |
  |                     |  (Hot water cleans better - lower T lets it   |
  |                     |   spread into the cloth.)                     |
  +---------------------+-----------------------------------------------+
  |  SOLUBLE IMPURITY   |  Highly soluble impurities (common salt,      |
  |  (salt, sugar)      |  sugar) INCREASE surface tension.             |
  +---------------------+-----------------------------------------------+
  |  SPARINGLY SOLUBLE  |  Soap, detergent, phenol, oil, grease         |
  |  IMPURITY           |  DECREASE surface tension sharply.            |
  |                     |  (That is exactly how detergent works - it    |
  |                     |   lets water wet and penetrate the dirt.)     |
  +---------------------+-----------------------------------------------+
  |  NATURE OF THE      |  Mercury (0.465 N/m) has a far higher T       |
  |  LIQUID             |  than water (0.073 N/m) than alcohol (0.022). |
  +---------------------+-----------------------------------------------+
  |  NATURE OF THE GAS  |  A different gas above the surface changes T  |
  |  ABOVE              |  slightly.                                    |
  +---------------------+-----------------------------------------------+
```

> **TRAP:** Detergent **lowers** surface tension. Students often say it raises
> it. Lower T means the water spreads more and gets into the fabric — which is
> exactly what you want when washing.

## WORKED EXAMPLE 13.1

How much work is needed to blow a soap bubble of radius 5 cm?
(T = 0.03 N/m)

```
  A soap bubble has TWO surfaces.

  Total area created  =  2 x 4 pi r^2  =  8 pi r^2

                      =  8 x 3.1416 x (0.05)^2
                      =  8 x 3.1416 x 2.5 x 10^-3
                      =  6.283 x 10^-2  m^2

  W  =  T x dA  =  0.03 x 6.283 x 10^-2

     =  1.885 x 10^-3   J     ( about 1.9 mJ )
```

## WORKED EXAMPLE 13.2

A mercury drop of radius 1 mm is split into 1000 identical droplets.
Find the work done. (T = 0.465 N/m)

```
  Volume is conserved :

      (4/3) pi R^3   =   1000 x (4/3) pi r^3

      R^3  =  1000 r^3    ->   R  =  10 r    ->  r = R/10 = 0.1 mm

  Original area  =  4 pi R^2
  New area       =  1000 x 4 pi r^2  =  1000 x 4 pi (R/10)^2
                 =  1000 x 4 pi R^2 / 100  =  10 x 4 pi R^2

  Increase in area  dA  =  4 pi R^2 ( 10 - 1 )  =  9 x 4 pi R^2

                        =  9 x 4 x 3.1416 x (1 x 10^-3)^2
                        =  1.131 x 10^-4   m^2

  W  =  T dA  =  0.465 x 1.131 x 10^-4   =   5.26 x 10^-5   J
```

> **THE GENERAL FORMULA:** splitting one drop of radius R into **n** droplets,
> `W = 4 pi R^2 T ( n^(1/3) - 1 )`.
> The energy comes from somewhere — the droplets **cool down**.

---

# TOPIC 14 — WHY DROPS ARE SPHERICAL, AND EXCESS PRESSURE

## 14.1 Why a free liquid drop is a sphere

```
  Surface tension makes the surface shrink to the SMALLEST POSSIBLE AREA.

  For a GIVEN VOLUME, the shape with the LEAST surface area is a SPHERE.

  Therefore a free liquid drop (with gravity absent or negligible,
  i.e. a small drop) takes a spherical shape.

  Big drops on a table are flattened because gravity beats surface
  tension. In a spacecraft, even a big blob of water is a perfect sphere.
```

## 14.2 Why there must be excess pressure inside

```
              curved surface, pulled INWARD by surface tension
                        \        |        /
                         \       V       /
                       .- - - - - - - - -.
                     /                     \
                    |     P_in > P_out      |
                    |          ->           |
                     \                     /
                       `- - - - - - - - -'

  The surface tension is trying to squeeze the drop smaller.
  For the drop to survive, the pressure inside must be HIGHER
  than outside, pushing back out.

  EXCESS PRESSURE   =   P_inside   -   P_outside
```

## 14.3 Derivation for a LIQUID DROP (one surface)

```
   Let the drop have radius r and excess pressure P.
   Imagine the radius increases by a tiny amount dr.

   Work done by the excess pressure
      =  force x distance
      =  ( P x surface area ) x dr
      =  P x 4 pi r^2 x dr

   Increase in surface area
      =  4 pi (r + dr)^2  -  4 pi r^2
      =  4 pi ( r^2 + 2 r dr + dr^2  -  r^2 )
      =  8 pi r dr            ( dr^2 is negligible )

   Increase in surface energy   =   T x 8 pi r dr

   These two must be equal :

        P x 4 pi r^2 dr   =   T x 8 pi r dr

   +---------------------------------------------+
   |                      2 T                    |
   |     P_excess   =   -------      (DROP)      |
   |                       r                     |
   +---------------------------------------------+
```

## 14.4 A SOAP BUBBLE (TWO surfaces)

```
   A soap bubble is a thin FILM with air inside AND air outside,
   so it has an inner surface and an outer surface.

   Increase in surface energy   =   T x 2 x ( 8 pi r dr )

        P x 4 pi r^2 dr   =   16 pi T r dr

   +---------------------------------------------+
   |                      4 T                    |
   |     P_excess   =   -------   (SOAP BUBBLE)  |
   |                       r                     |
   +---------------------------------------------+
```

## 14.5 An AIR BUBBLE INSIDE A LIQUID (one surface)

```
   An air bubble sitting inside water has only ONE liquid surface
   (the boundary between air and water). So it behaves like a drop:

   +---------------------------------------------+
   |                      2 T                    |
   |     P_excess   =   -------  (AIR BUBBLE     |
   |                       r      IN A LIQUID)   |
   +---------------------------------------------+

   If it sits at a depth h below the surface, the ABSOLUTE pressure
   inside it is:
                                        2 T
        P_in   =   P0  +  h rho g  +   -----
                                         r
```

## 14.6 The summary box — learn this

```
  +-------------------------------+---------------+------------------+
  |  OBJECT                       |  SURFACES     |  EXCESS PRESSURE |
  +-------------------------------+---------------+------------------+
  |  Liquid drop (rain drop)      |  1            |     2 T / r      |
  |  Air bubble inside a liquid   |  1            |     2 T / r      |
  |  Soap bubble in air           |  2            |     4 T / r      |
  +-------------------------------+---------------+------------------+

  ALWAYS:  excess pressure is INVERSELY proportional to the radius.
           SMALLER bubble  ->  BIGGER pressure inside.
```

> **THE CLASSIC QUESTION:** two soap bubbles of different sizes are joined by a
> tube. What happens? The **smaller** one has the higher excess pressure, so air
> flows from the small bubble into the big one. **The small bubble shrinks and
> the big bubble grows.** Almost everyone guesses the opposite.

## WORKED EXAMPLE 14.1

Find the excess pressure inside (a) a water drop of radius 2 mm
(T = 0.073 N/m) and (b) a soap bubble of radius 1 cm (T = 0.03 N/m).

```
  (a)  Drop :   P  =  2 T / r

                   2 x 0.073         0.146
              =  ---------------  = --------   =   73  Pa
                   2 x 10^-3         0.002

  (b)  Soap bubble :   P  =  4 T / r

                   4 x 0.03          0.12
              =  ---------------  = -------   =   12  Pa
                   1 x 10^-2          0.01
```

## WORKED EXAMPLE 14.2

An air bubble of radius 0.1 mm is at a depth of 10 cm in water
(T = 0.075 N/m, P0 = 1.01 x 10^5 Pa). Find the pressure inside it.

```
  Excess pressure  =  2 T / r

                      2 x 0.075          0.15
                   = ----------------  = --------  =  1500 Pa
                      1 x 10^-4           10^-4

  Pressure of the water at that depth  =  h rho g
                                       =  0.10 x 1000 x 9.8  =  980 Pa

  P_in  =  P0  +  h rho g  +  2T/r
        =  1.01 x 10^5  +  980  +  1500
        =  1.01 x 10^5  +  2480

        =  1.0348 x 10^5   Pa
```

---

# TOPIC 15 — ANGLE OF CONTACT

## 15.1 The definition

> **ANGLE OF CONTACT (theta)** is the angle between the tangent drawn to the
> liquid surface at the point of contact, and the solid surface **inside the
> liquid**, measured from the solid surface.

## 15.2 The two pictures — draw both

```
      WATER  in  GLASS                    MERCURY  in  GLASS
      adhesion  >  cohesion               cohesion  >  adhesion
      ------------------------            ------------------------

      ||                  ||              ||                  ||
      ||\                /||              || .--------------. ||
      || \______________/ ||              ||/                \||
      ||                  ||              ||                  ||
      ||     WATER        ||              ||    MERCURY       ||
      ||                  ||              ||                  ||
      ||__________________||              ||__________________||

      CONCAVE meniscus                    CONVEX meniscus
      (curves UP at the edges)            (curves DOWN at the edges)

      theta is ACUTE  ( < 90 )            theta is OBTUSE ( > 90 )
      water-glass :  theta ~ 8 deg        mercury-glass : theta ~ 140 deg

      cos(theta) is POSITIVE               cos(theta) is NEGATIVE
      ->  the liquid RISES                 ->  the liquid FALLS

      the liquid WETS the solid            the liquid does NOT wet it
```

## 15.3 The rule connecting it all

```
  +----------------------------------------------------------------+
  |                                                                |
  |  Adhesion > Cohesion/sqrt(2)  ->  theta ACUTE  ->  concave      |
  |                                    liquid wets, RISES          |
  |                                                                |
  |  Adhesion < Cohesion/sqrt(2)  ->  theta OBTUSE ->  convex       |
  |                                    does not wet, FALLS         |
  |                                                                |
  |  theta = 0    ->  perfect wetting (pure water on clean glass)   |
  |  theta = 90   ->  flat surface, no rise, no fall                |
  |                   (pure water on clean SILVER)                  |
  |                                                                |
  +----------------------------------------------------------------+
```

## 15.4 Factors affecting the angle of contact

```
  1. The nature of the LIQUID and of the SOLID (the pair matters).
  2. TEMPERATURE  - the angle of contact DECREASES as temperature rises.
  3. IMPURITIES   - soluble impurities change it.
  4. It does NOT depend on the tilt of the solid surface, and NOT on
     the amount of liquid.
```

> **TRAP:** The angle of contact is a property of the **pair** (liquid + solid),
> not of the liquid alone. Water on glass gives 8 degrees; water on wax gives
> about 107 degrees, which is why rain beads up on a waxed car.

---

# TOPIC 16 — CAPILLARITY (CAPILLARY ACTION)

## 16.1 What it is

> **CAPILLARITY** is the rise or fall of a liquid in a fine (capillary) tube
> when it is dipped into the liquid.

```
  ("capilla" is Latin for hair - a capillary tube is a hair-thin tube.)

     WATER                             MERCURY
     ------------------                ----------------------
        ||    ||                          ||    ||
        ||    ||                          ||    ||
        ||\  /||   ---                    ||    ||
        || \/ ||    ^                     ||    ||    ---
        ||    ||    | h                   ||    ||     ^
   ~~~~~||~~~~||~~~ v ~~~~~          ~~~~~||~~~~||~~~  |
   |    ||    ||         |           |    ||/\  ||     | h  (depression)
   |    ||____||         |           |    || \/ ||     v
   |    WATER            |           |    ||____||   ---
   |                     |           |    MERCURY          |
   |_____________________|           |_____________________|

     WATER RISES                       MERCURY FALLS
     (concave meniscus)                (convex meniscus)
```

## 16.2 Why it happens — the short explanation

```
  The meniscus of water is CONCAVE. Just under a concave surface the
  pressure is LESS than the pressure just above it, by 2T/R.

  So the pressure just below the meniscus inside the tube is LOWER than
  the atmospheric pressure acting on the flat surface outside.

  The higher outside pressure therefore pushes water UP the tube, until
  the weight of the risen column restores the balance.

  For mercury the meniscus is CONVEX, so the pressure just below it is
  HIGHER  ->  mercury is pushed DOWN.
```

## 16.3 THE DERIVATION of the capillary rise formula

```
                      |<-- r -->|
                      ||       ||
                      ||       ||
       T cos(theta) ^ ||       || ^ T cos(theta)
                     \||       ||/
              T  <----\|_______|/---->  T       (surface tension pulls
                       \       /                 along the surface, at
                        \_____/                  the angle of contact
                          ^                      theta to the wall)
                          |
                          |   h
                          |
       ~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~
       |                                       |
       |             L I Q U I D               |
       |_______________________________________|
```

```
  STEP 1 — the force pulling the liquid up.

     Surface tension acts along the whole circle of contact,
     of length  ( 2 pi r ) , at an angle theta to the tube wall.

     Only the VERTICAL component  T cos(theta)  lifts the liquid.

        Upward force  =  T cos(theta)  x  ( 2 pi r )

  STEP 2 — the weight of the raised column.

     Volume of the risen liquid  =  pi r^2 h
     (ignoring the small volume of the meniscus)

        Weight  =  ( pi r^2 h ) x rho x g

  STEP 3 — at equilibrium the two balance.

        T cos(theta) x 2 pi r   =   pi r^2 h rho g

     Cancel  pi r :

        2 T cos(theta)   =   r h rho g

  +-------------------------------------------------------+
  |                                                       |
  |                   2  T  cos( theta )                  |
  |        h    =    -----------------------              |
  |                       r  rho  g                       |
  |                                                       |
  +-------------------------------------------------------+

  Rearranged to FIND the surface tension in the lab :

                       h  r  rho  g
        T    =    -----------------------
                       2  cos( theta )
```

## 16.4 Reading the formula

```
  h  is INVERSELY proportional to r
        ->  the NARROWER the tube, the HIGHER the rise.
        ->  this is JURIN'S LAW:   h r = constant

  If theta is ACUTE   ->  cos(theta) is POSITIVE  ->  h is POSITIVE  ->  RISE
  If theta is OBTUSE  ->  cos(theta) is NEGATIVE  ->  h is NEGATIVE  ->  FALL

  For MERCURY in glass, theta = 140 deg , cos(140) = -0.766
     ->  h comes out NEGATIVE  ->  MERCURY IS DEPRESSED. That is the
         mathematical reason mercury falls in a capillary tube.
```

> **THE FAMOUS QUESTION:** what happens if the tube is *shorter* than the
> calculated height h? The liquid rises to the top and **stops**. It does NOT
> overflow (no fountain — that would give free energy). Instead the **radius of
> curvature of the meniscus increases** so that `h R = constant` is still
> satisfied with the available height.

> **ANOTHER ONE:** in a freely falling lift or in a satellite, g is effectively
> zero. Then h would be infinite — so the liquid **rises to the full length of
> the tube and stays there**, with the meniscus becoming flatter.

## 16.5 Everyday examples of capillary action

```
  1.  Oil rises up the wick of a lamp / a candle wick.
  2.  A blotting paper or a towel soaks up water (fine pores = capillaries).
  3.  Ink spreads on a sheet of paper.
  4.  Water rises from the roots to the leaves of a tall tree through
      the fine xylem tubes.
  5.  Farmers plough the field after rain to BREAK the capillaries in the
      soil, so that water does NOT rise and evaporate away.
  6.  Sand on a wet beach draws water up around your feet.
  7.  A brick wall gets damp near the floor ("rising damp").
  8.  Cotton clothing soaks up sweat.
```

## WORKED EXAMPLE 16.1

Water rises in a capillary tube of radius 0.2 mm. Find the height.
(T = 0.073 N/m, theta = 0, rho = 1000 kg/m³, g = 9.8 m/s²)

```
   r  =  0.2 mm  =  2 x 10^-4  m ,   cos(0) = 1

           2 T cos(theta)          2 x 0.073 x 1
   h  =   ------------------  =  -----------------------------
              r rho g             2 x 10^-4 x 1000 x 9.8

              0.146           0.146
       =   -------------  =  --------   =   0.0745  m
              1.96             1.96

       =   7.45  cm
```

## WORKED EXAMPLE 16.2

Mercury is placed in a glass capillary of radius 1 mm. Find the depression.
(T = 0.465 N/m, theta = 140 deg, rho = 13600 kg/m³, g = 9.8)

```
   cos(140 deg)  =  - 0.766

           2 x 0.465 x ( -0.766 )
   h  =  --------------------------------
           1 x 10^-3 x 13600 x 9.8

           - 0.7124
       =  -----------   =   - 5.35 x 10^-3   m
            133.28

       =  - 0.535 cm

   The MINUS sign means mercury is DEPRESSED by about 5.3 mm.
```

## WORKED EXAMPLE 16.3

Water rises to a height of 6 cm in a capillary of radius 0.25 mm.
What will the rise be in a tube of radius 0.5 mm?

```
   h r  =  constant       (Jurin's law)

   h1 r1  =  h2 r2

   6 x 0.25  =  h2 x 0.5

   h2  =  1.5 / 0.5  =  3 cm

   Double the radius  ->  HALF the rise.
```

## WORKED EXAMPLE 16.4

Water rises 5 cm in a capillary of radius 0.3 mm. Find the surface tension
of water. (theta = 0, rho = 1000, g = 9.8)

```
           h r rho g            0.05 x 3 x 10^-4 x 1000 x 9.8
   T  =  ---------------  =  --------------------------------------
           2 cos(theta)                    2 x 1

           0.05 x 0.294         0.0147
       =  ---------------  =   ---------   =   0.0735  N / m
                2                  2

   That is very close to the true value 0.073 N/m — good.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write the FORMULA before substituting numbers?
       (The formula alone often carries 1 mark.)

  [ ]  Did I DRAW AND LABEL the diagram? Bernoulli, venturimeter,
       hydraulic lift, barometer, capillary tube, sphere of influence,
       terminal-velocity graph — all of these carry marks for the figure.

  [ ]  Did I convert every length to METRES? (cm -> x 10^-2 ,
       mm -> x 10^-3 , and AREA in cm^2 -> x 10^-4 .)

  [ ]  For pressure questions, did I check whether they wanted
       GAUGE pressure (h rho g) or ABSOLUTE pressure (P0 + h rho g)?

  [ ]  In the hydraulic lift, did I SQUARE the ratio of the radii?

  [ ]  For floatation, did I use  V_sub/V = rho_body / rho_liquid ?

  [ ]  In continuity, did I remember that HALVING the radius makes the
       speed FOUR times bigger?

  [ ]  In Bernoulli, if the pipe is HORIZONTAL did I drop the rho g h terms?

  [ ]  In terminal velocity, did I use  (rho - sigma) , the DIFFERENCE of
       the densities, and not just the density of the ball?

  [ ]  Did I use  2T/r  for a DROP and  4T/r  for a SOAP BUBBLE?
       (Soap bubble = two surfaces.)

  [ ]  In work done on a soap bubble, did I use  8 pi r^2 T  (two faces)?

  [ ]  In capillarity, is theta OBTUSE for mercury, giving a NEGATIVE h?

  [ ]  Did I write the correct UNIT after every final answer?
       Pa , N/m , Pa.s , m/s , m^3/s .

  [ ]  Did I state the ASSUMPTIONS when asked to derive Bernoulli's
       theorem? (ideal, incompressible, streamline, irrotational)

  [ ]  Reynolds number: did I remember it has NO units?
```

---

**One last thing.** If a question in this chapter completely defeats you, still
write down: the definition, the formula, and a labelled diagram. In BIEAP
physics that is very often 2 of the 4 marks, or 3 of the 8. **Never leave a
fluids question blank.**
