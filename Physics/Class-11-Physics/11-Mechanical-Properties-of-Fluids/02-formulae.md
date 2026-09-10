# Mechanical Properties of Fluids — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Everywhere below:
`rho` = density of the fluid, `sigma` = density of the liquid (in Stokes' law),
`eta` = coefficient of viscosity, `T` = surface tension, `theta` = angle of contact,
`P0` = atmospheric pressure = 1.013 x 10^5 Pa, `g` = 9.8 m/s².

---

# 1. PRESSURE — THE BASICS

```
  +--------------------------------------------------+
  |                                                  |
  |                 Thrust (normal force)   F        |
  |    PRESSURE  P = -------------------- = ---      |
  |                        Area             A        |
  |                                                  |
  |    Unit  :  N/m^2  =  pascal (Pa)                |
  |    Dim   :  [ M L^-1 T^-2 ]                      |
  |    SCALAR quantity                               |
  +--------------------------------------------------+

                         mass       M
    DENSITY    rho   =  --------  = ---      unit  kg/m^3
                        volume      V

                              density of substance
    RELATIVE DENSITY   =   ---------------------------     (no unit)
                             density of water at 4 C
```

| Formula | When to use |
|---|---|
| `P = F / A` | any "force on a surface" / "pressure due to a weight" |
| `F = P A` | given the pressure, find the thrust on a wall, piston or dam |
| `rho = M / V` | whenever a density is missing |
| `RD = W_air / (W_air - W_water)` | relative density from weighings in air and water |

## Pressure unit conversions

```
  +---------------------------+---------------------------------+
  |  1 bar                    |  10^5 Pa                        |
  |  1 atmosphere (atm)       |  1.013 x 10^5 Pa                |
  |  1 atm                    |  76 cm of Hg  =  760 mm of Hg   |
  |  1 torr = 1 mm of Hg      |  133 Pa                         |
  |  1 atm in water           |  a column of 10.34 m            |
  +---------------------------+---------------------------------+
```

---

# 2. FLUID STATICS — PRESSURE AT A DEPTH

```
  +--------------------------------------------------------------+
  |                                                              |
  |    ABSOLUTE PRESSURE     P    =    P0   +   h rho g          |
  |                                                              |
  |    GAUGE PRESSURE        Pg   =    P - P0   =   h rho g      |
  |                                                              |
  |    ABSOLUTE = ATMOSPHERIC + GAUGE                            |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  Pressure at the same horizontal level in the same connected
  liquid is EQUAL:                 P_A  =  P_B

  Pressure does NOT depend on the shape of the vessel or on the
  total volume — only on the vertical DEPTH.
```

| Formula | When to use |
|---|---|
| `P = P0 + h rho g` | "absolute pressure at depth h" |
| `Pg = h rho g` | "gauge pressure", "pressure due to the liquid only" |
| `P1 = P2 at the same level` | barometer, manometer, U-tube problems |
| `h1 rho1 = h2 rho2` | U-tube with **two different liquids** balanced |

## Barometer and manometer

```
  BAROMETER (mercury) :         P0  =  h rho g
                                h   =  0.76 m of mercury

  MANOMETER (open tube):        P_gas  =  P0  +  h rho g
                                 (liquid higher on the OPEN side)

                                P_gas  =  P0  -  h rho g
                                 (liquid higher on the GAS side)
```

## Pressure of a liquid column at the wall of a tank

```
  Average pressure on a vertical wall of depth H  =  (1/2) H rho g

  Total thrust on that wall (width b)             =  (1/2) H^2 b rho g
```

---

# 3. PASCAL'S LAW AND THE HYDRAULIC MACHINE

```
  +----------------------------------------------------------------+
  |                                                                |
  |     PASCAL'S LAW                                               |
  |     A change of pressure applied to an enclosed fluid is       |
  |     transmitted UNDIMINISHED to every point of the fluid       |
  |     and to the walls of the container.                         |
  |                                                                |
  |               F1        F2                                     |
  |              ----  =  ----                                     |
  |               a1        a2                                     |
  |                                                                |
  |                          a2             / r2 \ 2               |
  |               F2  =  F1 ----   =   F1 x |----|                 |
  |                          a1             \ r1 /                 |
  |                                                                |
  |     MECHANICAL ADVANTAGE  =  F2 / F1  =  a2 / a1               |
  |                                                                |
  |     VOLUME CONSERVED   :   a1 d1  =  a2 d2                     |
  |     ENERGY CONSERVED   :   F1 d1  =  F2 d2                     |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F1/a1 = F2/a2` | hydraulic lift, hydraulic press, hydraulic brake, dentist's chair |
| `F2/F1 = (r2/r1)^2` | when **radii** (not areas) are given — square the ratio |
| `a1 d1 = a2 d2` | "how far does the big piston move?" |
| `F1 d1 = F2 d2` | "show that no energy is gained" |

---

# 4. ARCHIMEDES' PRINCIPLE AND FLOATATION

```
  +----------------------------------------------------------------+
  |                                                                |
  |   BUOYANT FORCE  Fb  =  weight of the displaced fluid          |
  |                                                                |
  |                  Fb  =  V_submerged  x  rho_fluid  x  g        |
  |                                                                |
  |   APPARENT WEIGHT    W_app  =  W  -  Fb                        |
  |                                                                |
  |   LOSS OF WEIGHT     =  Fb                                     |
  |                                                                |
  |   LAW OF FLOATATION  :  weight of body = weight of fluid       |
  |                         displaced                              |
  |                                                                |
  |        V_submerged        rho_body                             |
  |       --------------  =  -----------                           |
  |          V_total          rho_fluid                            |
  |                                                                |
  |   Fraction ABOVE the surface  =  1  -  rho_body / rho_fluid    |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `Fb = V rho_f g` | upthrust on any immersed body |
| `W_app = W - Fb` | "weight in water", "apparent weight" |
| `V_sub/V = rho_b/rho_f` | "what fraction floats above/below?" |
| `RD = W_air/(W_air - W_water)` | find the density from two weighings |
| `rho_b > rho_f` sinks, `<` floats, `=` stays put | quick 2-mark reasoning |

## Rules of thumb

```
  Wood (600)  in water (1000)   ->  60 % under, 40 % above
  Ice  (917)  in water (1000)   ->  91.7 % under
  Ice  (917)  in sea (1030)     ->  89 % under, 11 % above
  A body just floating fully submerged  ->  rho_body = rho_fluid
```

---

# 5. TYPES OF FLOW AND THE EQUATION OF CONTINUITY

```
  +----------------------------------------------------------------+
  |                                                                |
  |   EQUATION OF CONTINUITY  (conservation of MASS)               |
  |                                                                |
  |          a1 v1   =   a2 v2   =   constant                      |
  |                                                                |
  |          a v  =  VOLUME FLOW RATE  Q     (unit m^3/s)          |
  |                                                                |
  |          MASS flow rate  =  rho a v      (unit kg/s)           |
  |                                                                |
  |    ->  v is INVERSELY proportional to a                        |
  |    ->  narrow pipe = fast flow = crowded streamlines           |
  |                                                                |
  |    For circular pipes:   v2 / v1  =  ( r1 / r2 )^2             |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `a1 v1 = a2 v2` | any pipe that changes cross-section |
| `v2/v1 = (r1/r2)^2` | when **radii or diameters** are given |
| `a v = a_A v_A + a_B v_B` | a pipe that **branches** into two |
| `Q = a v` | "rate of flow", "litres per second" |

## Streamline vs turbulent — quick table

| | STREAMLINE | TURBULENT |
|---|---|---|
| Speed | below critical velocity | above critical velocity |
| Re | < 1000 | > 2000 |
| Streamlines | orderly, never cross | random eddies |
| Bernoulli's equation | valid | NOT valid |

---

# 6. BERNOULLI'S THEOREM

```
  +----------------------------------------------------------------+
  |                                                                |
  |                  1                                             |
  |       P    +     - rho v^2    +    rho g h    =   constant     |
  |                  2                                             |
  |                                                                |
  |     pressure     kinetic          potential                    |
  |     energy       energy           energy                       |
  |     /volume      /volume          /volume                      |
  |                                                                |
  |   ------------------------------------------------------------ |
  |                                                                |
  |   HEAD FORM (divide throughout by rho g):                      |
  |                                                                |
  |        P            v^2                                        |
  |     --------   +   -----   +    h    =   constant              |
  |      rho g          2 g                                        |
  |                                                                |
  |    pressure      velocity     gravitational                    |
  |      head          head           head                         |
  |                                                                |
  |   ------------------------------------------------------------ |
  |                                                                |
  |   HORIZONTAL PIPE  (h1 = h2) :                                 |
  |                                                                |
  |                     1                                          |
  |             P   +   - rho v^2   =   constant                   |
  |                     2                                          |
  |                                                                |
  |             FAST  ->  LOW PRESSURE                             |
  |                                                                |
  +----------------------------------------------------------------+

  ASSUMPTIONS:  non-viscous (ideal), incompressible,
                streamline (steady), irrotational.

  It is a statement of the CONSERVATION OF ENERGY for a flowing fluid.
```

| Formula | When to use |
|---|---|
| `P + ½rho v² + rho g h = const` | pressure **and** speed both appear |
| `P1 + ½rho v1² = P2 + ½rho v2²` | horizontal pipe, find the pressure drop |
| `dP = ½ rho (v1² - v2²)` | pressure difference in a horizontal pipe |
| Head form | when the answer is asked "in metres of water" |

---

# 7. APPLICATIONS OF BERNOULLI'S THEOREM

## 7.1 Venturimeter

```
  +----------------------------------------------------------------+
  |                                                                |
  |                          /       2 ( P1  -  P2 )     \         |
  |    Q  =  a1 a2   sqrt   |  ------------------------    |       |
  |                          \    rho ( a1^2 - a2^2 )    /         |
  |                                                                |
  |    with a manometer of the SAME liquid, P1 - P2 = h rho g :    |
  |                                                                |
  |                          /          2 g h            \         |
  |    Q  =  a1 a2   sqrt   |  ------------------------    |       |
  |                          \      a1^2  -  a2^2        /         |
  |                                                                |
  |    with a DIFFERENT manometer liquid of density rho_m :        |
  |                                                                |
  |         P1 - P2  =  h g ( rho_m  -  rho )                      |
  |                                                                |
  +----------------------------------------------------------------+
```

## 7.2 Torricelli's law — the speed of efflux

```
  +----------------------------------------------------------------+
  |                                                                |
  |      SPEED OF EFFLUX      v   =   sqrt( 2 g h )                |
  |                                                                |
  |      ( h = depth of the hole BELOW the free surface )          |
  |                                                                |
  |      HORIZONTAL RANGE     x   =   2 sqrt( h ( H - h ) )        |
  |                                                                |
  |      MAXIMUM RANGE at  h = H/2 , where  x_max  =  H            |
  |                                                                |
  |      TIME TO EMPTY a tank of area A through a hole of area a:  |
  |                                                                |
  |                    A          /  2 H  \                        |
  |            t  =   ---  sqrt  |  -----  |                       |
  |                    a          \   g   /                        |
  |                                                                |
  |      If the tank is CLOSED and the gas above is at pressure P: |
  |                                                                |
  |            v  =  sqrt(  2 g h  +  2 (P - P0)/rho  )            |
  |                                                                |
  +----------------------------------------------------------------+
```

## 7.3 Dynamic lift on an aerofoil

```
  +----------------------------------------------------------------+
  |                 1                                              |
  |    LIFT   =     - rho ( v_top^2  -  v_bottom^2 )  x  A         |
  |                 2                                              |
  +----------------------------------------------------------------+
```

## 7.4 The list of applications (for the 8-mark answer)

| Application | The Bernoulli reason in one line |
|---|---|
| Venturimeter | narrow throat -> fast -> low pressure -> measures the flow rate |
| Torricelli / speed of efflux | pressure energy at depth converts to kinetic energy |
| Aeroplane wing (aerofoil) | faster air above -> lower pressure above -> upward lift |
| Spinning ball (Magnus effect) | spin makes one side faster -> lower pressure -> ball swerves |
| Atomiser / sprayer / scent bottle | fast air jet lowers the pressure -> liquid is pushed up the tube |
| Bunsen burner | fast gas jet lowers the pressure -> air is drawn in and mixes |
| Filter pump, carburettor, paint spray | same as the atomiser |
| Fast train "pulling" a person in | fast air between -> low pressure -> pushed towards the train |
| Two ships sailing side by side collide | same reason as the train |
| A tin roof is blown OFF in a storm | fast wind above -> low pressure above -> roof lifts |
| Blood flow / an aneurysm bulging | wider artery -> slower -> higher pressure -> bulges more |

---

# 8. VISCOSITY

```
  +----------------------------------------------------------------+
  |                                                                |
  |   NEWTON'S LAW OF VISCOUS FLOW                                 |
  |                                                                |
  |                              dv                                |
  |            F   =   -  eta A  ----                              |
  |                              dx                                |
  |                                                                |
  |                              F                                 |
  |            eta   =   -------------------                       |
  |                        A  ( dv / dx )                          |
  |                                                                |
  |   dv/dx  =  VELOCITY GRADIENT     unit  s^-1                   |
  |                                                                |
  |   SI unit of eta   :  N s / m^2  =  Pa.s  =  poiseuille        |
  |                       =  kg m^-1 s^-1                          |
  |   CGS unit         :  POISE  (dyne s / cm^2)                   |
  |   CONVERSION       :  1 Pa.s  =  10 poise                      |
  |   DIMENSIONS       :  [ M L^-1 T^-1 ]                          |
  |                                                                |
  +----------------------------------------------------------------+
```

## Effect of temperature — OPPOSITE for liquids and gases

```
  +---------+--------------------------+---------------------------+
  |         |  TEMPERATURE INCREASES   |  REASON                   |
  +---------+--------------------------+---------------------------+
  | LIQUID  |  viscosity DECREASES     |  cohesive forces weaken   |
  | GAS     |  viscosity INCREASES     |  faster molecules carry   |
  |         |  eta ~ sqrt(T)           |  more momentum across     |
  +---------+--------------------------+---------------------------+

  Pressure:  liquids - eta increases slightly
             gases   - eta is almost independent of pressure
```

## Poiseuille's formula (rate of flow through a narrow tube)

```
  +----------------------------------------------------------------+
  |                     pi  P  r^4                                 |
  |          Q   =   ------------------                            |
  |                     8   eta   L                                |
  |                                                                |
  |   Note the FOURTH power of r. Halving the radius cuts the      |
  |   flow to 1/16. (Why a narrowed artery is so dangerous.)       |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = eta A dv/dx` | force needed to slide a plate over an oil film |
| `eta = F / (A dv/dx)` | definition, units, dimensions |
| `1 Pa.s = 10 poise` | unit conversion in a numerical |
| `Q = pi P r^4 / (8 eta L)` | flow through a narrow horizontal tube |

---

# 9. STOKES' LAW AND TERMINAL VELOCITY

```
  +----------------------------------------------------------------+
  |                                                                |
  |     STOKES' LAW       F   =   6  pi  eta  r  v                 |
  |                                                                |
  |     ( viscous drag on a small sphere in streamline flow )      |
  |                                                                |
  +----------------------------------------------------------------+

  +----------------------------------------------------------------+
  |                                                                |
  |     AT TERMINAL VELOCITY :   Weight = Upthrust + Viscous drag  |
  |                                                                |
  |      4                4                                        |
  |      - pi r^3 rho g = - pi r^3 sigma g  +  6 pi eta r v        |
  |      3                3                                        |
  |                                                                |
  |                       2  r^2  ( rho  -  sigma )  g             |
  |            v_t   =   --------------------------------          |
  |                                9   eta                         |
  |                                                                |
  |     rho   =  density of the SPHERE                             |
  |     sigma =  density of the LIQUID                             |
  |                                                                |
  +----------------------------------------------------------------+
```

```
   v_t  is proportional to  r^2         ->  bigger sphere, faster fall
   v_t  is inversely proportional to eta

   rho > sigma  ->  v_t positive  ->  the body SINKS
   rho < sigma  ->  v_t negative  ->  the body RISES (an air bubble)
```

## Ready-made ratios

```
  Two spheres of radii r1 , r2 (same materials):

        v1 / v2   =   ( r1 / r2 )^2

  n identical droplets coalescing into ONE big drop:

        R  =  n^(1/3) r          ->      V_new  =  n^(2/3)  x  v_old
```

| Formula | When to use |
|---|---|
| `F = 6 pi eta r v` | drag on a small ball / a rain drop |
| `v_t = 2r²(rho-sigma)g / (9 eta)` | "terminal velocity", "constant velocity", "steady fall" |
| `v ~ r²` | ratio of two drops |
| `n^(2/3)` | droplets merging |

---

# 10. REYNOLDS NUMBER

```
  +----------------------------------------------------------------+
  |                                                                |
  |                     rho  v  D                                  |
  |         Re    =   ---------------                              |
  |                        eta                                     |
  |                                                                |
  |     D   =  diameter of the pipe                                |
  |                                                                |
  |     Re is DIMENSIONLESS  ->  no units at all                   |
  |                                                                |
  |                 inertial force per unit area                   |
  |     Re   =   ---------------------------------                 |
  |                 viscous force per unit area                    |
  |                                                                |
  |     Re  <  1000   ->  STREAMLINE (laminar)                     |
  |     1000 - 2000   ->  unstable                                 |
  |     Re  >  2000   ->  TURBULENT                                |
  |                                                                |
  |                        Re  eta                                 |
  |     CRITICAL SPEED  v_c = ----------                           |
  |                        rho  D                                  |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `Re = rho v D / eta` | "is the flow laminar or turbulent?" |
| `v_c = Re eta / (rho D)` | "above what speed does the flow break up?" |
| `[Re] = [1]` | "prove that Reynolds number is dimensionless" |

---

# 11. SURFACE TENSION

```
  +----------------------------------------------------------------+
  |                                                                |
  |                             F                                  |
  |     SURFACE TENSION   T  =  ---        unit  N / m             |
  |                             l                                  |
  |                                                                |
  |     Dimensions :  [ M T^-2 ]                                   |
  |     SCALAR.  CGS unit  dyne/cm  ;  1 N/m = 1000 dyne/cm        |
  |                                                                |
  |     SURFACE ENERGY per unit area   =   SURFACE TENSION         |
  |                                                                |
  |            W   =   T  x  ( increase in area )                  |
  |                                                                |
  |     ( J/m^2  and  N/m  are the same unit )                     |
  |                                                                |
  +----------------------------------------------------------------+
```

## Work done on films, drops and bubbles

```
  +----------------------------------------------------------------+
  |                                                                |
  |   Blowing a SOAP BUBBLE of radius r (TWO surfaces):            |
  |            W   =   T x 2 x 4 pi r^2   =   8 pi r^2 T           |
  |                                                                |
  |   Forming a LIQUID DROP of radius r (ONE surface):             |
  |            W   =   4 pi r^2 T                                  |
  |                                                                |
  |   BLOWING UP a soap bubble from r1 to r2 :                     |
  |            W   =   8 pi T ( r2^2  -  r1^2 )                    |
  |                                                                |
  |   SPLITTING one drop of radius R into n droplets :             |
  |            W   =   4 pi R^2 T ( n^(1/3)  -  1 )                |
  |            ( the droplets COOL because energy is taken in )    |
  |                                                                |
  |   n droplets COALESCING into one drop of radius R :            |
  |     energy RELEASED = 4 pi R^2 T ( n^(1/3) - 1 )               |
  |            ( the drop WARMS UP )                               |
  |                                                                |
  |   Force to lift a wire of length l off a liquid surface :      |
  |            F   =   2 l T           (two surfaces, front+back)  |
  |                                                                |
  |   Force on a ring of radius r being pulled out :               |
  |            F   =   T x 2 x ( 2 pi r )  =  4 pi r T             |
  |                                                                |
  +----------------------------------------------------------------+
```

## Factors affecting surface tension

```
  +-------------------------------+-------------------------------+
  |  Temperature increases        |  T DECREASES                  |
  |  At the critical temperature  |  T = ZERO                     |
  |  Soluble impurity (salt)      |  T INCREASES                  |
  |  Sparingly soluble (soap,     |  T DECREASES sharply          |
  |  detergent, oil, phenol)      |                               |
  +-------------------------------+-------------------------------+

  Typical values (N/m at room temperature):
      mercury 0.465   water 0.073   soap solution 0.025-0.030
      glycerine 0.063   alcohol 0.022
```

---

# 12. EXCESS PRESSURE

```
  +---------------------------------+-------------+----------------+
  |  OBJECT                         |  SURFACES   |  EXCESS PRESS. |
  +---------------------------------+-------------+----------------+
  |  Liquid DROP (rain drop)        |     1       |    2 T / r     |
  |  AIR BUBBLE inside a liquid     |     1       |    2 T / r     |
  |  SOAP BUBBLE in air             |     2       |    4 T / r     |
  +---------------------------------+-------------+----------------+

  Air bubble at a depth h in a liquid — ABSOLUTE pressure inside:

                                          2 T
        P_in   =   P0   +   h rho g   +  -----
                                           r

  Two soap bubbles of radii r1 and r2 joined by a tube — the radius
  of the resulting common (curved) interface:

                     r1  r2
        r   =   ---------------          (r1 > r2)
                   r1  -  r2

  Two bubbles combining ISOTHERMALLY into one of radius R:

        R^2   =   r1^2   +   r2^2
```

| Formula | When to use |
|---|---|
| `2T/r` | rain drop, mercury drop, air bubble in water |
| `4T/r` | soap bubble (ALWAYS two surfaces) |
| `P0 + h rho g + 2T/r` | bubble at a depth |
| smaller r -> bigger excess P | "which bubble grows?" — the BIG one grows |

---

# 13. ANGLE OF CONTACT

```
  +----------------------------------------------------------------+
  |                                                                |
  |  theta = angle between the tangent to the liquid surface at    |
  |          the point of contact and the solid surface,           |
  |          measured INSIDE the liquid.                           |
  |                                                                |
  +--------------------+----------------+--------------------------+
  |                    | WATER + GLASS  |  MERCURY + GLASS         |
  +--------------------+----------------+--------------------------+
  | Adhesion vs        | adhesion       |  cohesion                |
  | cohesion           | is greater     |  is greater              |
  | Meniscus           | CONCAVE        |  CONVEX                  |
  | theta              | ACUTE ( ~8 )   |  OBTUSE ( ~140 )         |
  | cos(theta)         | POSITIVE       |  NEGATIVE                |
  | In a capillary     | RISES          |  FALLS (depressed)       |
  | Wetting            | wets the glass |  does not wet            |
  +--------------------+----------------+--------------------------+

  theta = 0    ->  perfect wetting     (pure water on clean glass)
  theta = 90   ->  flat surface        (pure water on clean silver)

  Temperature increases  ->  theta DECREASES.
```

---

# 14. CAPILLARITY

```
  +----------------------------------------------------------------+
  |                                                                |
  |                     2  T  cos( theta )                         |
  |         h    =    ------------------------                     |
  |                        r   rho   g                             |
  |                                                                |
  |                        h  r  rho  g                            |
  |         T    =    ------------------------                     |
  |                        2  cos( theta )                         |
  |                                                                |
  |   JURIN'S LAW :    h  r   =   constant                         |
  |                    -> narrower tube, HIGHER rise               |
  |                                                                |
  |   With the meniscus volume included (more exact):              |
  |                                                                |
  |         T  =  ( h  +  r/3 ) r rho g / ( 2 cos theta )          |
  |                                                                |
  |   Radius of curvature of the meniscus :  R  =  r / cos(theta)  |
  |                                                                |
  |         so also        h   =   2 T / ( R rho g )               |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `h = 2T cos(theta)/(r rho g)` | any capillary rise or fall |
| `h r = constant` | "the tube radius is doubled — what now?" |
| `T = h r rho g / (2 cos theta)` | finding T from a lab experiment |
| `cos(theta) < 0` for mercury | proving mercury is depressed |
| tube too short -> liquid stops at the top | conceptual question |
| in a satellite (g -> 0) -> fills the whole tube | conceptual question |

---

# 15. CONSTANTS AND STANDARD VALUES TO REMEMBER

```
  +-----------------------------------+---------------------------+
  |  g                                |  9.8  m/s^2               |
  |  Atmospheric pressure P0          |  1.013 x 10^5 Pa          |
  |                                   |  = 76 cm of Hg            |
  |  Density of water                 |  1000  kg/m^3             |
  |  Density of mercury               |  13600 kg/m^3             |
  |  Density of sea water             |  1030  kg/m^3             |
  |  Density of ice                   |  917   kg/m^3             |
  |  Density of air (STP)             |  1.29  kg/m^3             |
  |  Surface tension of water         |  0.073 N/m                |
  |  Surface tension of mercury       |  0.465 N/m                |
  |  Surface tension of soap solution |  0.025 - 0.030 N/m        |
  |  Viscosity of water at 20 C       |  1.0 x 10^-3 Pa.s         |
  |  Viscosity of air                 |  1.8 x 10^-5 Pa.s         |
  |  Angle of contact, water-glass    |  ~ 8 degrees (take 0)     |
  |  Angle of contact, mercury-glass  |  ~ 140 degrees            |
  |  cos(140 deg)                     |  - 0.766                  |
  +-----------------------------------+---------------------------+
```

---

# 16. DIMENSIONS OF EVERY QUANTITY IN THIS CHAPTER

```
  +--------------------------+-----------------+--------------------+
  |  QUANTITY                |  SI UNIT        |  DIMENSIONS        |
  +--------------------------+-----------------+--------------------+
  |  Thrust (force)          |  N              |  [ M L T^-2 ]      |
  |  Pressure / stress       |  Pa             |  [ M L^-1 T^-2 ]   |
  |  Density                 |  kg/m^3         |  [ M L^-3 ]        |
  |  Relative density        |  none           |  [ 1 ]             |
  |  Volume flow rate        |  m^3/s          |  [ L^3 T^-1 ]      |
  |  Velocity gradient       |  s^-1           |  [ T^-1 ]          |
  |  Coefficient of viscosity|  Pa.s (poise)   |  [ M L^-1 T^-1 ]   |
  |  Reynolds number         |  none           |  [ 1 ]             |
  |  Surface tension         |  N/m            |  [ M T^-2 ]        |
  |  Surface energy          |  J/m^2          |  [ M T^-2 ]        |
  |  Angle of contact        |  degree/radian  |  [ 1 ]             |
  +--------------------------+-----------------+--------------------+

  NOTE: surface tension and surface energy have the SAME dimensions
        [M T^-2] — a favourite 2-mark question.
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+-------------------------------------------------------------+
  | 1  |   P  =  P0  +  h rho g                                      |
  +----+-------------------------------------------------------------+
  | 2  |   F1 / a1  =  F2 / a2          (hydraulic lift)             |
  +----+-------------------------------------------------------------+
  | 3  |   Fb  =  V rho g               (Archimedes)                 |
  +----+-------------------------------------------------------------+
  | 4  |   V_sub / V  =  rho_body / rho_fluid                        |
  +----+-------------------------------------------------------------+
  | 5  |   a1 v1  =  a2 v2              (continuity)                 |
  +----+-------------------------------------------------------------+
  | 6  |   P + (1/2) rho v^2 + rho g h  =  constant     (Bernoulli)  |
  +----+-------------------------------------------------------------+
  | 7  |   v  =  sqrt( 2 g h )          (Torricelli)                 |
  +----+-------------------------------------------------------------+
  | 8  |   F  =  eta A (dv/dx)          (Newton, viscosity)          |
  +----+-------------------------------------------------------------+
  | 9  |   F  =  6 pi eta r v           (Stokes)                     |
  +----+-------------------------------------------------------------+
  | 10 |   v_t  =  2 r^2 ( rho - sigma ) g / ( 9 eta )               |
  +----+-------------------------------------------------------------+
  | 11 |   Re  =  rho v D / eta         ( <1000 laminar, >2000 turb) |
  +----+-------------------------------------------------------------+
  | 12 |   h  =  2 T cos(theta) / ( r rho g )      (capillary rise)  |
  +----+-------------------------------------------------------------+

  AND the two one-liners you must not mix up:
        DROP / AIR BUBBLE   ->   2 T / r
        SOAP BUBBLE         ->   4 T / r
```
