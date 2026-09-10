# Thermodynamics — Concepts From Zero

**Physics 1st Year · Chapter 13**

Everything in this chapter happens inside ONE picture: a **gas trapped in a cylinder
with a movable piston**. Heat goes in, the piston moves out, work gets done.
If you keep that picture in your head, nothing here is hard.

```
        +-------------------------+
        |                         ||
        |        G A S            ||  <-- PISTON (can slide)
        |                         ||
        +-------------------------+
                   ^
                   |
              HEAT  Q  in
```

---

# TOPIC 1 — What thermodynamics is, and the words you must know

**Thermodynamics** = the study of how **heat** turns into **work** and back again.

It does NOT care about atoms or molecules. It only looks at big, measurable things
you could read off a gauge: pressure, volume, temperature.

### The three words

```
  SYSTEM        -  the part of the universe you are studying.
                   Here: the GAS inside the cylinder.

  SURROUNDINGS  -  everything else outside it.
                   Here: the room, the burner, the piston.

  BOUNDARY      -  the wall separating them.
                   Here: the cylinder walls and the piston.
```

### Kinds of boundary (wall)

```
  +--------------------+--------------------------------------------+
  |  ADIABATIC WALL    |  Does NOT let heat pass.                   |
  |                    |  Example: a thermos flask wall.            |
  +--------------------+--------------------------------------------+
  |  DIATHERMIC WALL   |  DOES let heat pass.                       |
  |  (conducting)      |  Example: a thin copper sheet.             |
  +--------------------+--------------------------------------------+
```

**Everyday analogy:** an adiabatic wall is a closed thermos — your coffee stays hot
for hours. A diathermic wall is a steel tumbler — the coffee goes cold in minutes.

### Types of system

```
  OPEN SYSTEM     -  exchanges both ENERGY and MATTER.   (open cup of tea)
  CLOSED SYSTEM   -  exchanges ENERGY only, not matter.  (sealed cylinder of gas)
  ISOLATED SYSTEM -  exchanges NOTHING.                  (ideal thermos flask)
```

> **TRAP:** Students write "isolated = no heat". Wrong — isolated means **no heat AND
> no work AND no matter**. A system with only an adiabatic wall can still be squeezed,
> so work can still be done on it.

---

# TOPIC 2 — Thermal equilibrium and the ZEROTH LAW

## Thermal equilibrium

Put a hot cup of milk in a cold room. Heat flows out of the milk. After some time
the flow stops — the milk and the room are then at the **same temperature**.

```
  TWO SYSTEMS ARE IN THERMAL EQUILIBRIUM
  when there is NO NET FLOW OF HEAT between them
  after they are connected by a diathermic wall.
```

## The experiment behind the zeroth law

Take three bodies A, B and C.

```
  STEP 1                            STEP 2
  ------                            ------
   +-----+  diathermic  +-----+      +-----+  diathermic  +-----+
   |  A  |=============>|  C  |      |  B  |=============>|  C  |
   +-----+              +-----+      +-----+              +-----+
      A is in thermal                   B is in thermal
      equilibrium with C                equilibrium with C

  NOW REMOVE C AND PUT A AND B TOGETHER:

   +-----+  diathermic  +-----+
   |  A  |=============>|  B  |     ->   NO heat flows.
   +-----+              +-----+          They are ALREADY in equilibrium.
```

## THE ZEROTH LAW OF THERMODYNAMICS

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   If two systems A and B are separately in thermal equilibrium    |
  |   with a third system C, then A and B are in thermal              |
  |   equilibrium with each other.                                   |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Why is this law important? (this is the actual exam question)

Because it **proves that TEMPERATURE exists** as a physical quantity.

```
  All three bodies A, B and C share SOME common physical property.
  That common property is what we CALL temperature.

  TEMPERATURE  =  the property that decides whether or not heat will
                  flow between two bodies placed in contact.
```

And it is why a **thermometer works**:

```
  Thermometer (C) touches patient (A)        ->  reads 38 C
  Thermometer (C) touches you     (B)        ->  reads 38 C

  Zeroth law  =>  A and B are at the SAME temperature,
                  even though they never touched each other.
```

> **TRAP:** The zeroth law is about **temperature**, not about heat or energy.
> It was named "zeroth" because it was discovered AFTER the first and second laws
> but is more basic than both, so it had to go in front.

### WORKED EXAMPLE 1

**Q.** A metal block P is in thermal equilibrium with a beaker of water Q. The same
water Q is in thermal equilibrium with a thermometer R showing 45 °C. What will the
thermometer read if it is now placed in contact with the block P?

**Solution.**
```
  P in equilibrium with Q          (given)
  R in equilibrium with Q          (given)

  By the ZEROTH LAW, P and R are in thermal equilibrium.
  Therefore P is at the SAME temperature as R.

  ANSWER:  45 degrees C.   No heat flows, so the reading does not change.
```

---

# TOPIC 3 — State variables and the equation of state

## Thermodynamic state variables

These are the quantities that describe the **condition** of the gas right now:

```
  P  -  pressure         V  -  volume
  T  -  temperature      n  -  number of moles
  U  -  internal energy
```

A **state variable** depends only on the CURRENT state — not on how the system
got there.

**Everyday analogy:** your *altitude* on a mountain is a state variable. It does not
matter whether you climbed the easy path or the hard path — at the summit your
altitude is the same. But the *distance you walked* is NOT a state variable; the two
paths give different distances.

```
  ALTITUDE  <->  internal energy U   (state function)
  DISTANCE  <->  heat Q and work W   (path functions)
```

## Extensive vs intensive

```
  +----------------------------------+---------------------------------+
  |  EXTENSIVE                       |  INTENSIVE                      |
  |  depends on the SIZE / amount    |  does NOT depend on the amount   |
  +----------------------------------+---------------------------------+
  |  mass, volume, internal energy,  |  pressure, temperature,          |
  |  total heat capacity, number of  |  density, specific heat          |
  |  moles                           |                                 |
  +----------------------------------+---------------------------------+

  Quick test: cut the system in half.
              If the quantity halves  ->  EXTENSIVE.
              If it stays the same    ->  INTENSIVE.
```

## Equation of state

The state variables are not all independent — they are tied together by one equation.

```
  +--------------------------------------------------+
  |                                                  |
  |     IDEAL GAS EQUATION OF STATE:   P V = n R T   |
  |                                                  |
  +--------------------------------------------------+

     R  =  8.314  J mol^-1 K^-1      (universal gas constant)
        =  1.98   cal mol^-1 K^-1    (about 2 cal)
```

Because of this equation, **only TWO of P, V, T are free**. Fix any two and the
third is decided. That is why every diagram in this chapter is a 2-D **P-V diagram**.

## Quasi-static process

```
  QUASI-STATIC ("almost static") PROCESS:
  a process carried out SO SLOWLY that at every instant the system
  is in thermal and mechanical equilibrium with its surroundings.
```

Conditions for it:
```
  1.  The process must be INFINITELY SLOW.
  2.  The difference in pressure between system and surroundings
      must be INFINITESIMALLY small.
  3.  The difference in temperature must be INFINITESIMALLY small.
```

**Why we need it:** only in a quasi-static process does the gas have ONE definite
pressure and ONE definite temperature at every instant. Only then can you draw the
process as a **line on a P-V diagram**, and only then is `W = INT P dV` valid.

```
  QUASI-STATIC (slow)               SUDDEN (fast)
      P                                 P
      ^                                 ^
      |  *                              |  *
      |    *  *                         |
      |         *  *                    |            *
      +--------------->  V              +--------------->  V

   A continuous CURVE.               Only the two END POINTS exist.
   Every point is a real state.      In between, P is not even defined.
```

> **TRAP:** A quasi-static process is an **idealisation**. No real process is truly
> quasi-static, because a truly infinitely slow process would take infinite time.

---

# TOPIC 4 — Heat, internal energy and work (and the sign conventions)

## HEAT (Q)

```
  HEAT is energy transferred between a system and its surroundings
  BECAUSE OF A TEMPERATURE DIFFERENCE.
```
Unit: joule (J). Also calorie: **1 cal = 4.186 J**.

## INTERNAL ENERGY (U)

```
  INTERNAL ENERGY is the TOTAL energy stored inside the system:
  the kinetic energy of random molecular motion  +  the potential
  energy of the intermolecular forces.
```

Three facts about U that earn marks:

```
  1.  U is a STATE FUNCTION.  dU depends only on the initial and
      final states, never on the path taken.

  2.  For an IDEAL GAS there are no intermolecular forces, so U is
      purely kinetic and therefore depends ONLY ON TEMPERATURE.

           U  =  f(T)  only          and         dU  =  n Cv dT

  3.  Point 2 means:  IF THE TEMPERATURE DOES NOT CHANGE,
      THEN dU = 0, whatever else happens.
```

> **TRAP — the single most useful line in the chapter:**
> `dU = n Cv dT` is true for **EVERY** process — isothermal, adiabatic, isobaric,
> isochoric, cyclic, anything. The "v" in Cv does NOT mean you may only use it at
> constant volume. It only got that name because that is how it is measured.

Internal energy does **NOT** include:
```
  x  the kinetic energy of the container moving as a whole
  x  the potential energy of the container sitting on a table
```

## WORK (W)

Work is energy transferred by a **force moving through a distance** — here, the gas
pushing the piston.

## THE SIGN CONVENTION — read this twice

This is where students lose marks, because **Physics and Chemistry use opposite
conventions**.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   PHYSICS  (this book, and your AP Inter Physics paper)                   |
  |   ------------------------------------------------------                 |
  |   W  means  the work done  *** BY ***  the gas.                          |
  |                                                                          |
  |            FIRST LAW:      dQ  =  dU  +  dW                              |
  |                                                                          |
  |   Gas EXPANDS   ->  W is POSITIVE                                        |
  |   Gas COMPRESSED->  W is NEGATIVE                                        |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   CHEMISTRY  (your AP Inter Chemistry paper)                             |
  |   ---------------------------------------------                         |
  |   w  means  the work done  *** ON ***  the gas.                          |
  |                                                                          |
  |            FIRST LAW:      dU  =  q  +  w        (with w = - P dV)       |
  |                                                                          |
  |   Gas EXPANDS   ->  w is NEGATIVE                                        |
  |   Gas COMPRESSED->  w is POSITIVE                                        |
  |                                                                          |
  +--------------------------------------------------------------------------+

  THEY ARE THE SAME PHYSICS.     W(physics)  =  - w(chemistry)

  Put  w = -W  into the chemistry form:
        dU = q - W    ->    q = dU + W    ->    dQ = dU + dW     Identical.
```

**In the Physics exam, always write `dQ = dU + dW`.** If you write the Chemistry
version in a Physics answer script the signs of every numerical will flip and you
will lose the marks.

### Sign summary for HEAT (same in both subjects)

```
  Q is POSITIVE  ->  heat is ABSORBED BY the system
  Q is NEGATIVE  ->  heat is RELEASED BY the system
```

## State function vs path function — the proof by picture

```
        P
        ^
        |          B
        |         /|
        |    (2) / |
        |       /  |
        |      /   |
        |     / (1)|
        |   A------+
        +----------------->  V

   Go from A to B by path (1) or path (2).

   dU        is the SAME for both paths.        <-- STATE function
   W and Q   are DIFFERENT for the two paths.   <-- PATH functions
             (the areas under the two curves are clearly different)
```

That is why we write `dU` as a proper difference, but heat and work are properly
written `dQ` and `dW` as small *amounts*, not as changes in anything.

---

# TOPIC 5 — Work done by a gas, and the AREA UNDER THE CURVE

## Deriving W = INT P dV

```
     +----------------------------+
     |                            ||  piston, area A
     |          GAS  at           ||
     |       pressure P           ||  ---> moves out a tiny distance dx
     |                            ||
     +----------------------------+
                                  |<-- dx -->|

  Force exerted by the gas on the piston:      F  =  P x A

  Small work done by the gas as it pushes
  the piston out through dx:                   dW =  F dx  =  P A dx

  But  A dx  is the small increase in volume,  dV.

          +-----------------------+
          |      dW  =  P dV      |
          +-----------------------+

  For a finite change from V1 to V2, add up all the little bits:

          +--------------------------------+
          |                V2              |
          |    W  =    INT     P dV        |
          |                V1              |
          +--------------------------------+
```

## The geometric meaning — THE AREA UNDER THE P-V CURVE

An integral is an area. So:

```
     P
     ^
     |
  P1 |*
     | *
     |  *  *
     |    /////*  *  *
     |   ///////////  *  *  *
  P2 |  ///////////////////////*
     | ////// A R E A /////////|
     | ///////=  W  ///////////|
     +--+---------------------+------>  V
        V1                    V2

  +------------------------------------------------------------+
  |  THE WORK DONE BY A GAS  =  THE AREA UNDER ITS P-V CURVE,  |
  |  measured down to the V-axis, between V1 and V2.            |
  +------------------------------------------------------------+
```

## Sign from the direction of travel

```
     EXPANSION                          COMPRESSION
     P                                  P
     ^                                  ^
     |   ------->                       |   <-------
     |  *  *  *  *                      |  *  *  *  *
     +------------------> V             +------------------> V
       V1        V2                       V1        V2

     V increases,  dV positive          V decreases,  dV negative
     W is POSITIVE                      W is NEGATIVE
     Gas does work on surroundings      Surroundings do work on gas
```

### WORKED EXAMPLE 2

**Q.** A gas at a constant pressure of `2 x 10^5 Pa` expands from `0.02 m^3` to
`0.05 m^3`. Find the work done by the gas.

**Solution.**
```
  Pressure is constant, so P comes out of the integral:

        W  =  P (V2 - V1)
           =  2 x 10^5  x  (0.05 - 0.02)
           =  2 x 10^5  x  0.03
           =  6000 J   =  6 kJ

  POSITIVE, because the gas expanded and did work on the surroundings.
```

### WORKED EXAMPLE 3 — reading work off a graph

**Q.** Find the work done by the gas in the process A -> B -> C shown below.

```
     P (x 10^5 Pa)
     ^
   3 |  A---------B
     |  |         |
     |  |         |
   1 |  |         C
     |  |         |
     +--+---------+------------>  V (x 10^-3 m^3)
        2         6
```

**Solution.**
```
  A -> B :  pressure constant at 3 x 10^5 Pa, volume 2e-3 -> 6e-3 m^3

        W(AB)  =  P (V2 - V1)
               =  3 x 10^5 x (6 x 10^-3  -  2 x 10^-3)
               =  3 x 10^5 x 4 x 10^-3
               =  1200 J

  B -> C :  VOLUME IS CONSTANT (vertical line), so dV = 0

        W(BC)  =  0

  TOTAL  W  =  1200 + 0  =  1200 J
```

> **TRAP:** A **vertical** line on a P-V diagram means constant volume, so the work
> is ZERO — even though the pressure changed a lot. Work needs the volume to move.

---

# TOPIC 6 — THE FIRST LAW OF THERMODYNAMICS

## Statement

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   The heat supplied to a system is used partly to increase its       |
  |   internal energy and partly to do external work.                    |
  |                                                                      |
  |                    dQ  =  dU  +  dW                                  |
  |                                                                      |
  |   dQ = heat SUPPLIED TO the system                                    |
  |   dU = increase in INTERNAL ENERGY                                    |
  |   dW = work done BY the system                                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Using `dW = P dV`:
```
        dQ  =  dU  +  P dV
```

## What it really is

The first law is just **the law of conservation of energy**, extended to include heat.

**Everyday analogy — your salary.**
```
  Money that comes in (Q)   =   money you SAVE (dU)   +   money you SPEND (W)

  You cannot save 3000 and spend 4000 out of a 5000 salary.
  Energy works exactly the same way.
```

## What the first law does NOT tell you

```
  x  It does not say in WHICH DIRECTION a process will go.
     (It happily allows heat to flow from cold to hot - energy would
      still be conserved. Nature refuses. That needs the SECOND law.)

  x  It does not say how EFFICIENT a machine can be.
```

### WORKED EXAMPLE 4

**Q.** 200 J of heat is given to a system. The system does 120 J of work on its
surroundings. Find the change in internal energy.

**Solution.**
```
  dQ = +200 J   (heat given TO the system)
  dW = +120 J   (work done BY the system)

  dQ  =  dU + dW
  200 =  dU + 120
  dU  =  200 - 120  =  +80 J

  The internal energy INCREASES by 80 J, so the temperature rises.
```

### WORKED EXAMPLE 5

**Q.** A gas is compressed and 150 J of work is done ON it. At the same time it
gives out 90 J of heat. Find the change in internal energy.

**Solution.**
```
  Work is done ON the gas, so in PHYSICS convention   dW = -150 J
  Heat is GIVEN OUT by the gas, so                    dQ = - 90 J

  dU  =  dQ - dW
      =  (-90)  -  (-150)
      =  -90 + 150
      =  +60 J

  Internal energy INCREASES by 60 J.
```

> **TRAP:** Two negatives in one line. Write the signs down FIRST, before you
> substitute. Most lost marks in this chapter are sign errors, not physics errors.

---

# TOPIC 7 — ISOTHERMAL PROCESS

## Condition

```
  ISOTHERMAL  =  temperature stays CONSTANT throughout.    T = constant

  How: keep the gas in a thin CONDUCTING (diathermic) container,
       surrounded by a huge reservoir at temperature T, and let the
       process happen VERY SLOWLY so heat has time to flow in or out.
```

## The curve

Since `PV = nRT` and T is constant:
```
  +-------------------------+
  |    P V  =  constant     |      (Boyle's law)
  +-------------------------+

  So P = constant / V  -->  the graph is a RECTANGULAR HYPERBOLA.
```

```
     P
     ^
     |*
     | *
     |  *
     |   *
     |     *
     |        *
     |            *  *
     |                  *  *  *
     +--------------------------->  V

     ISOTHERM.  Higher isotherms (further from the origin)
     correspond to HIGHER temperatures.
```

## Work done — full derivation

```
              V2
     W  =  INT   P dV
              V1

  From  PV = nRT ,      P = nRT / V

              V2  nRT                 V2  dV
     W  =  INT   ----- dV   =  nRT INT   ----      (T is constant, comes out)
              V1    V                 V1   V

     W  =  nRT [ ln V ]  from V1 to V2

          +-------------------------------------------------+
          |                        V2                       |
          |   W  =  n R T  ln  ( ------ )                   |
          |                        V1                       |
          |                                                 |
          |      =  2.303 n R T  log10 ( V2 / V1 )          |
          |                                                 |
          |      =  n R T  ln ( P1 / P2 )     (since PV=const)|
          +-------------------------------------------------+
```

## Heat and internal energy

```
  T constant  ->  dU  =  n Cv dT  =  0

  First law:  dQ = dU + dW  =  0 + W

          +--------------------------+
          |     dQ  =  dW            |
          +--------------------------+

  ALL the heat supplied is converted into work. None is stored.
```

### WORKED EXAMPLE 6

**Q.** 2 moles of an ideal gas expand isothermally at 300 K from 10 litres to
20 litres. Find (i) the work done (ii) the change in internal energy (iii) the heat
absorbed. Take R = 8.314 J/mol/K.

**Solution.**
```
  (i)   W  =  n R T ln (V2 / V1)
           =  2 x 8.314 x 300 x ln (20 / 10)
           =  4988.4 x ln 2
           =  4988.4 x 0.693
           =  3457 J     (about 3.46 kJ)

  (ii)  Isothermal, so dT = 0   ->   dU  =  0

  (iii) dQ = dU + dW = 0 + 3457  =  3457 J absorbed.
```

> **TRAP:** `ln` is the NATURAL log, not log to base 10.
> If your calculator only has `log`, use `W = 2.303 n R T log10(V2/V1)`.
> `ln 2 = 0.693`, `ln 3 = 1.099`, `ln 10 = 2.303`. Memorise those three.

---

# TOPIC 8 — ADIABATIC PROCESS

## Condition

```
  ADIABATIC  =  NO heat enters or leaves.        Q = 0

  How: keep the gas in a thick INSULATING (adiabatic) container,
       OR do the process so QUICKLY that heat has no time to flow.
```

Real examples: a bicycle pump getting hot when you pump fast; a spray can getting
cold when you release the gas; the bursting of a tyre.

## The equation of the curve

```
  +-----------------------------------------+
  |      P V^gamma   =   constant           |
  +-----------------------------------------+

        where    gamma  =  Cp / Cv     ( always greater than 1 )
```

Using `PV = nRT` to eliminate P or V, two more forms drop out:

```
  Replace P = nRT/V  in  P V^gamma = const :

          +---------------------------------------+
          |    T V^(gamma - 1)  =  constant       |
          +---------------------------------------+

  Replace V = nRT/P :

          +---------------------------------------------+
          |    T^gamma  P^(1 - gamma)  =  constant      |
          |                                             |
          |    i.e.   P^(1-gamma) T^gamma = constant    |
          +---------------------------------------------+

  Handy working forms:

          T1 V1^(g-1)  =  T2 V2^(g-1)
          P1 V1^g      =  P2 V2^g
          T1^g P1^(1-g) = T2^g P2^(1-g)
```

## The curve, compared with an isotherm

```
     P
     ^
     |  \\
     |   \\ *
     |    \\  *
     |     \\   *  *
     |      \\      *  *  *
     |        \\          *  *  *  *
     |          \\ \\ \\  \\  \\
     +---------------------------------->  V

      \\  =  ADIABATIC  (steeper)
      *   =  ISOTHERMAL (flatter)

  THE ADIABATIC CURVE IS STEEPER.
  Slope of isotherm  =  - P / V
  Slope of adiabat   =  - gamma P / V        and gamma > 1
```

## Work done — full derivation

```
              V2                            const
     W  =  INT   P dV      with  P  =  --------------
              V1                          V^gamma

                    V2   dV                    +-  V^(1-g)  -+  V2
     W  =  const INT   -------  =  const  x    | ----------- |
                    V1  V^g                    +-   1 - g   -+  V1

                const
     W  =  ----------------  [  V2^(1-g)  -  V1^(1-g) ]
              ( 1 - g )

  Now use  const = P1 V1^g = P2 V2^g , choosing whichever suits each term:

              1
     W  =  ------- [ P2 V2^g x V2^(1-g)  -  P1 V1^g x V1^(1-g) ]
             1 - g

              1
     W  =  ------- [ P2 V2  -  P1 V1 ]
             1 - g

          +-------------------------------------------+
          |             P1 V1  -  P2 V2               |
          |    W   =   ----------------------          |
          |                 gamma  -  1                |
          |                                            |
          |            n R ( T1  -  T2 )               |
          |        =  ------------------------          |
          |                gamma  -  1                  |
          +-------------------------------------------+
```

## Heat and internal energy

```
  Q  =  0     (that is the definition)

  First law:   0  =  dU + W     ->      dU  =  - W

  +----------------------------------------------------------+
  |  ADIABATIC EXPANSION    W positive -> dU negative        |
  |                         -> TEMPERATURE FALLS (COOLING)   |
  |                                                          |
  |  ADIABATIC COMPRESSION  W negative -> dU positive        |
  |                         -> TEMPERATURE RISES (HEATING)   |
  +----------------------------------------------------------+
```

The gas does work using **its own internal energy**, because no heat is available.
That is why a spray can goes cold.

### WORKED EXAMPLE 7

**Q.** One mole of a diatomic gas (gamma = 1.4) at 300 K is compressed adiabatically
to half its original volume. Find the final temperature and the work done.

**Solution.**
```
  STEP 1 - final temperature.       T V^(g-1) = constant

        T1 V1^0.4  =  T2 V2^0.4        with  V2 = V1 / 2

                    +- V1 -+ 0.4
        T2  =  T1 x | ---- |        =  300 x (2)^0.4
                    +- V2 -+

        (2)^0.4  =  e^(0.4 x 0.693)  =  e^0.277  =  1.32

        T2  =  300 x 1.32  =  396 K

  STEP 2 - work done.

               n R (T1 - T2)      1 x 8.314 x (300 - 396)
        W  =  ---------------- =  ------------------------
                  gamma - 1              1.4 - 1

                8.314 x (-96)        -798.1
           =  -----------------  =  ---------   =   -1995 J
                     0.4               0.4

        W is NEGATIVE  ->  work was done ON the gas (it was compressed).
        Check: dU = -W = +1995 J, so the gas heated up. It did:
        300 K -> 396 K.  Consistent.
```

---

# TOPIC 9 — ISOBARIC PROCESS

## Condition

```
  ISOBARIC  =  pressure stays CONSTANT.       P = constant

  How: let the gas push a freely moving, frictionless piston that
       carries a fixed weight. The gas pressure always equals
       (atmospheric pressure + weight/area), which never changes.
```

Example: water boiling in an open pan; a balloon warming in the sun.

## The curve

```
     P
     ^
     |
   P |    A================>B        <-- a HORIZONTAL STRAIGHT LINE
     |    ||||||||||||||||||
     |    |||| AREA = W ||||
     |    ||||||||||||||||||
     +----+----------------+------>  V
          V1               V2

  AREA of the rectangle  =  P x (V2 - V1)
```

## Work done

```
              V2                    V2
     W  =  INT   P dV   =   P  INT     dV        (P is constant)
              V1                    V1

          +------------------------------------+
          |   W  =  P ( V2  -  V1 )            |
          |                                    |
          |      =  n R ( T2  -  T1 )          |
          +------------------------------------+
```
(the second form comes from `PV1 = nRT1` and `PV2 = nRT2`)

## Internal energy and heat

```
     dU  =  n Cv ( T2 - T1 )

     dQ  =  n Cp ( T2 - T1 )        <-- Cp, because pressure is constant

  Check with the first law:
     dQ = dU + dW
     n Cp dT  =  n Cv dT  +  n R dT      ->    Cp = Cv + R      Correct.
```

## The V-T graph of an isobaric process

```
     V
     ^
     |            /
     |         /
     |      /            V is proportional to T  (Charles's law)
     |   /               A straight line THROUGH THE ORIGIN
     |/
     +-------------------> T (in KELVIN)
```

### WORKED EXAMPLE 8

**Q.** 2 moles of a gas are heated at constant pressure from 27 °C to 127 °C.
Find (i) the work done (ii) the heat supplied, given Cp = 29.1 J/mol/K
(iii) the change in internal energy.

**Solution.**
```
  T1 = 27 + 273  = 300 K
  T2 = 127 + 273 = 400 K        so  dT = 100 K

  (i)   W  =  n R dT  =  2 x 8.314 x 100  =  1662.8 J

  (ii)  dQ =  n Cp dT  =  2 x 29.1 x 100  =  5820 J

  (iii) dU =  dQ - dW  =  5820 - 1662.8   =  4157.2 J

  Cross-check:  Cv = Cp - R = 29.1 - 8.314 = 20.786
                dU = n Cv dT = 2 x 20.786 x 100 = 4157.2 J     Matches.
```

---

# TOPIC 10 — ISOCHORIC (ISOVOLUMETRIC) PROCESS

## Condition

```
  ISOCHORIC  =  volume stays CONSTANT.       V = constant

  How: seal the gas in a RIGID container with no piston at all.
```

Example: heating a sealed pressure cooker before the weight lifts.

## The curve

```
     P
     ^
   P2|         B
     |         |
     |         |            A VERTICAL STRAIGHT LINE
     |         |
   P1|         A
     |         |
     +---------+------------>  V
               V

  There is NO AREA under a vertical line  ->   W = 0
```

## The three results

```
  +-------------------------------------------------------+
  |                                                       |
  |    W   =  0                     (dV = 0)              |
  |                                                       |
  |    dU  =  n Cv ( T2 - T1 )                            |
  |                                                       |
  |    dQ  =  dU  =  n Cv ( T2 - T1 )                     |
  |                                                       |
  +-------------------------------------------------------+

  ALL the heat supplied goes into internal energy.
  Nothing is wasted on work. The temperature rise is the biggest possible.
```

Also, `P / T = constant` (Gay-Lussac's law) for an isochoric process.

### WORKED EXAMPLE 9

**Q.** A sealed rigid vessel contains 3 moles of a monatomic gas. It is heated so its
temperature rises by 50 K. Find the work done, the change in internal energy and the
heat supplied. (Cv for a monatomic gas = 3R/2)

**Solution.**
```
  Rigid vessel  ->  V constant  ->  ISOCHORIC.

  W  =  0                                      (no volume change)

  Cv =  3R/2  =  1.5 x 8.314  =  12.47 J/mol/K

  dU =  n Cv dT  =  3 x 12.47 x 50  =  1870.5 J

  dQ =  dU + W  =  1870.5 + 0  =  1870.5 J
```

---

# TOPIC 11 — THE FOUR PROCESSES SIDE BY SIDE

Draw all four starting from the same point:

```
     P
     ^
     |
     |  ISOCHORIC (vertical)
     |     |
     |     |
     |     |
     |     A------------------  ISOBARIC (horizontal)
     |    /|\  \
     |     | \    \
     |     |  \      \      <--  ISOTHERMAL  (PV = c)
     |     |   \         \
     |     |    \  <-- ADIABATIC (PV^g = c, STEEPER)
     +----------------------------------->  V
```

## THE FULL COMPARISON TABLE  *** learn this cold ***

```
+-------------+------------+---------------+-------------------+---------------+---------------+
|  PROCESS    | CONSTANT   |  EQUATION     |   WORK  W         |   dU          |   dQ          |
+-------------+------------+---------------+-------------------+---------------+---------------+
|             |            |               |                   |               |               |
| ISOTHERMAL  |    T       |  P V = const  | n R T ln(V2/V1)   |      0        |   = W         |
|             |            |               |                   |               |  (all heat    |
|             |            |               | = 2.303 nRT       |               |   becomes     |
|             |            |               |   log10(V2/V1)    |               |   work)       |
+-------------+------------+---------------+-------------------+---------------+---------------+
|             |            |               | (P1V1 - P2V2)     |               |               |
| ADIABATIC   |   Q = 0    | P V^g = const |  --------------   |    - W        |     0         |
|             |            | T V^(g-1)=c   |    (g - 1)        |               |               |
|             |            | T^g P^(1-g)=c |                   | = nCv(T2-T1)  |               |
|             |            |               | = nR(T1-T2)/(g-1) |               |               |
+-------------+------------+---------------+-------------------+---------------+---------------+
|             |            |               |                   |               |               |
| ISOBARIC    |    P       |  V / T = c    |  P (V2 - V1)      | n Cv (T2-T1)  | n Cp (T2-T1)  |
|             |            |               |  = n R (T2 - T1)  |               |               |
+-------------+------------+---------------+-------------------+---------------+---------------+
|             |            |               |                   |               |               |
| ISOCHORIC   |    V       |  P / T = c    |       0           | n Cv (T2-T1)  |   = dU        |
|             |            |               |                   |               |               |
+-------------+------------+---------------+-------------------+---------------+---------------+
|             |            |               |                   |               |               |
| CYCLIC      | back to    |  returns to   | AREA INSIDE       |      0        |   = W         |
|             | start      |  same state   | THE LOOP          |               |               |
+-------------+------------+---------------+-------------------+---------------+---------------+
```

## Isothermal vs adiabatic — the 4-mark comparison

```
  +-------------------------+---------------------------+
  |     ISOTHERMAL          |      ADIABATIC            |
  +-------------------------+---------------------------+
  | T constant              | Q = 0                     |
  | Heat CAN flow           | NO heat flows             |
  | Conducting walls        | Insulating walls          |
  | Must be SLOW            | Must be FAST              |
  | PV = constant           | PV^gamma = constant       |
  | dU = 0                  | dU = -W                   |
  | Curve is FLATTER        | Curve is STEEPER          |
  | slope = -P/V            | slope = -gamma P/V        |
  | Specific heat = infinity| Specific heat = 0         |
  |  (heat added, T same)   |  (T changes, no heat)     |
  +-------------------------+---------------------------+
```

> **TRAP:** "Specific heat in an isothermal process is infinite" and "in an adiabatic
> process it is zero" is a favourite 2-mark question. Reason: `C = dQ / (n dT)`.
> Isothermal: `dT = 0` with `dQ` non-zero, so `C -> infinity`. Adiabatic: `dQ = 0`
> with `dT` non-zero, so `C = 0`.

---

# TOPIC 12 — SPECIFIC HEATS AND MAYER'S RELATION

## Two specific heats, not one

For a solid or a liquid the volume barely changes, so one specific heat is enough.
A **gas** expands a lot, so it has **two**:

```
  Cv  =  MOLAR specific heat at CONSTANT VOLUME
      =  heat needed to raise 1 mole through 1 K, keeping V fixed

  Cp  =  MOLAR specific heat at CONSTANT PRESSURE
      =  heat needed to raise 1 mole through 1 K, keeping P fixed
```

## Why is Cp GREATER than Cv? (guaranteed 2-mark question)

```
  At CONSTANT VOLUME:
      the gas cannot expand, so it does NO work.
      ALL the heat goes into raising the temperature.

  At CONSTANT PRESSURE:
      the gas must ALSO push the piston out, doing work P dV.
      So EXTRA heat is needed - one part for the temperature rise,
      one part for the work.

      ->  Cp  >  Cv        and the difference is exactly R.
```

## MAYER'S RELATION — the derivation

```
  DERIVATION
  ==========
  Take 1 mole of an ideal gas.

  (A)  Heat it at CONSTANT VOLUME through dT:
         W = 0 , so the first law gives
              dQ  =  dU        ->     Cv dT  =  dU        ...(1)

  (B)  Heat it at CONSTANT PRESSURE through the SAME dT:
         The temperature change is the same, so dU is the SAME
         (U depends only on T).
              dQ  =  dU + P dV
              Cp dT  =  Cv dT  +  P dV                    ...(2)

  (C)  For 1 mole of an ideal gas,     P V = R T
         Differentiate at constant P:  P dV  =  R dT      ...(3)

  (D)  Put (3) into (2):
              Cp dT  =  Cv dT  +  R dT
         Divide by dT:

              +---------------------------------+
              |                                 |
              |      Cp  -  Cv   =   R          |   MAYER'S RELATION
              |                                 |
              +---------------------------------+

  For n moles:      n Cp - n Cv = n R
  In terms of specific heats per kg:   cp - cv  =  R / M
```

## The ratio gamma

```
  +---------------------------------------+
  |                                       |
  |     gamma  =  Cp / Cv    ( > 1 )      |
  |                                       |
  +---------------------------------------+

  Combining with Cp - Cv = R gives two very useful results:

               R                        gamma R
       Cv = ---------- ,        Cp  =  -----------
            gamma - 1                  gamma - 1
```

## The standard values (memorise this table)

```
  +----------------+--------+---------------+---------------+-----------+
  |  TYPE OF GAS   | DEGREES|      Cv       |      Cp       |   gamma   |
  |                | OF     |               |               |  = Cp/Cv  |
  |                | FREEDOM|               |               |           |
  +----------------+--------+---------------+---------------+-----------+
  | MONATOMIC      |   3    |  (3/2) R      |  (5/2) R      |   5/3     |
  | He, Ne, Ar     |        |  = 12.47      |  = 20.79      |  = 1.67   |
  +----------------+--------+---------------+---------------+-----------+
  | DIATOMIC       |   5    |  (5/2) R      |  (7/2) R      |   7/5     |
  | H2, O2, N2     |        |  = 20.79      |  = 29.10      |  = 1.40   |
  +----------------+--------+---------------+---------------+-----------+
  | POLYATOMIC     |   6    |   3 R         |   4 R         |   4/3     |
  | (non-linear)   |        |  = 24.94      |  = 33.26      |  = 1.33   |
  | CO2(bent), NH3 |        |               |               |           |
  +----------------+--------+---------------+---------------+-----------+

  Values are in  J mol^-1 K^-1  with R = 8.314.
  NOTICE:  gamma gets SMALLER as the molecule gets more complicated.
```

### WORKED EXAMPLE 10

**Q.** For a certain gas, `Cp = 29.1 J/mol/K`. Find Cv and gamma. What type of gas is it?

**Solution.**
```
  Cv  =  Cp - R  =  29.1 - 8.314  =  20.79 J/mol/K

  gamma  =  Cp / Cv  =  29.1 / 20.79  =  1.40

  gamma = 1.4  =  7/5    ->    it is a DIATOMIC gas  (like O2 or N2).
```

### WORKED EXAMPLE 11

**Q.** A gas has gamma = 1.67. Find Cp and Cv.

**Solution.**
```
              R              8.314        8.314
     Cv  = ---------  =  ------------- = -------  =  12.4 J/mol/K
           gamma - 1      1.67 - 1        0.67

     Cp  =  Cv + R  =  12.4 + 8.314  =  20.7 J/mol/K

     gamma = 1.67 = 5/3  ->  MONATOMIC gas (helium, argon).
```

---

# TOPIC 13 — CYCLIC PROCESS

```
  A CYCLIC PROCESS is one in which the system, after passing through
  several changes, RETURNS TO ITS INITIAL STATE.
```

Because the final state = the initial state:

```
  +-------------------------------------------------------+
  |                                                       |
  |    dU  =  0        (U is a STATE function)            |
  |                                                       |
  |    Therefore    dQ  =  dW                             |
  |                                                       |
  |    NET HEAT ABSORBED  =  NET WORK DONE                |
  |                                                       |
  +-------------------------------------------------------+
```

## The net work is the AREA ENCLOSED BY THE LOOP

```
     P                                  P
     ^                                  ^
     |     ------->                     |     <-------
     |   /////////\                     |   \\\\\\\\\/
     |  /  AREA    \                    |  \  AREA   /
     |  \  = W      /                   |  /  = W    \
     |   \\\\\\\\\\/                    |   \-------/
     |     <-------                     |     ------->
     +------------------> V             +------------------> V

     CLOCKWISE LOOP                     ANTICLOCKWISE LOOP
     W is POSITIVE                      W is NEGATIVE
     Net work done BY the gas           Net work done ON the gas
     This is a HEAT ENGINE              This is a REFRIGERATOR
```

**Memory hook:** *clockwise = engine = the gas works for you.*

### WORKED EXAMPLE 12

**Q.** A gas is taken round the rectangular cycle A -> B -> C -> D -> A shown.
Find the net work done in one cycle.

```
     P (x 10^5 Pa)
     ^
   4 |   D-----------C
     |   |           |
     |   |           |
   1 |   A-----------B
     |   |           |
     +---+-----------+---------> V (x 10^-3 m^3)
         1           5
```
(The gas goes A -> B -> C -> D -> A.)

**Solution.**
```
  A -> B   isobaric at 1e5 Pa, V: 1e-3 -> 5e-3
           W = 1e5 x (5e-3 - 1e-3) = 1e5 x 4e-3 = +400 J

  B -> C   isochoric (V fixed at 5e-3)         W = 0

  C -> D   isobaric at 4e5 Pa, V: 5e-3 -> 1e-3
           W = 4e5 x (1e-3 - 5e-3) = 4e5 x (-4e-3) = -1600 J

  D -> A   isochoric (V fixed at 1e-3)         W = 0

  NET  W  =  400 + 0 - 1600 + 0  =  -1200 J

  SHORTCUT - area of the rectangle:
        area = (P2 - P1)(V2 - V1) = (4e5 - 1e5)(5e-3 - 1e-3)
             = 3e5 x 4e-3 = 1200 J
        The path A->B->C->D->A runs ANTICLOCKWISE, so W = -1200 J.

  Also, since it is a cycle:  dU = 0  and  Q = W = -1200 J
  (the gas gives out 1200 J of heat).
```

> **TRAP:** In a cyclic process students often try to compute `dU`. Don't. It is
> **always zero**. Go straight to `Q = W = area of the loop`, and get the sign from
> whether the loop is clockwise or anticlockwise.

---

# TOPIC 14 — HEAT ENGINES

```
  A HEAT ENGINE is a device that converts HEAT into WORK continuously,
  by working in a CYCLE.
```

## The three parts

```
  1.  SOURCE (hot reservoir) at temperature T1  -  supplies heat Q1
  2.  WORKING SUBSTANCE (the gas)               -  does the work W
  3.  SINK (cold reservoir) at temperature T2   -  absorbs the waste heat Q2
```

## THE BLOCK DIAGRAM  (draw this in the exam — it carries marks)

```
        +-----------------------------------+
        |     SOURCE  (HOT RESERVOIR)       |
        |         at  T1                    |
        +-----------------------------------+
                        |
                        |   Q1   (heat absorbed)
                        v
              +---------------------+
              |                     |
              |   WORKING           |------------>  W = Q1 - Q2
              |   SUBSTANCE         |              (useful WORK output)
              |   (the ENGINE)      |
              |                     |
              +---------------------+
                        |
                        |   Q2   (waste heat rejected)
                        v
        +-----------------------------------+
        |      SINK  (COLD RESERVOIR)       |
        |          at  T2                   |
        +-----------------------------------+
```

## Efficiency

```
                     useful output          W
     efficiency  =  ----------------   =  ------
                     what you paid          Q1

  In a cycle, dU = 0, so     W  =  Q1  -  Q2

          +-------------------------------------------------+
          |                                                 |
          |        W        Q1 - Q2               Q2        |
          |  eta = ---  =  ----------   =   1  -  ---       |
          |        Q1          Q1                 Q1        |
          |                                                 |
          |   Percentage efficiency  =  eta x 100           |
          +-------------------------------------------------+
```

## Why can no engine be 100% efficient?

```
  eta = 1  requires  Q2 = 0 , i.e. NO heat at all rejected to the sink.

  But without a sink the working substance cannot be brought back to its
  starting state, so the CYCLE cannot be completed and the engine cannot
  run continuously.

  Q2 = 0 would also violate the KELVIN-PLANCK statement of the second law.

  Practical losses on top of that: friction, conduction losses,
  and the fact that real processes are irreversible.

  ->  eta is ALWAYS less than 1.  Real petrol engines reach about 25-30%.
```

### WORKED EXAMPLE 13

**Q.** A heat engine absorbs 5000 J of heat from a source and rejects 3500 J to the
sink in each cycle. Find (i) the work done per cycle (ii) the efficiency.

**Solution.**
```
  (i)   W  =  Q1 - Q2  =  5000 - 3500  =  1500 J

  (ii)  eta =  W / Q1  =  1500 / 5000  =  0.30

        Efficiency  =  30 %
```

### WORKED EXAMPLE 14

**Q.** An engine of efficiency 25% does 500 J of work per cycle. How much heat does
it absorb, and how much does it reject?

**Solution.**
```
  eta = W / Q1     ->     Q1  =  W / eta  =  500 / 0.25  =  2000 J

  Q2  =  Q1 - W  =  2000 - 500  =  1500 J

  Absorbs 2000 J, rejects 1500 J.
```

---

# TOPIC 15 — REFRIGERATORS AND HEAT PUMPS

A refrigerator is **a heat engine running backwards**.

```
  A REFRIGERATOR extracts heat Q2 from a COLD body and delivers heat Q1
  to a HOT body, using external WORK W supplied by a compressor.
```

## THE BLOCK DIAGRAM

```
        +-----------------------------------+
        |   HOT BODY (the room / radiator)  |
        |            at  T1                 |
        +-----------------------------------+
                        ^
                        |   Q1 = Q2 + W  (heat dumped into the room)
                        |
              +---------------------+
              |                     |
    W  ------>|   WORKING           |
   (work IN,  |   SUBSTANCE         |
   from the   |   (REFRIGERATOR)    |
   compressor)|                     |
              +---------------------+
                        ^
                        |   Q2   (heat pulled OUT of the food)
                        |
        +-----------------------------------+
        |  COLD BODY (inside the fridge)    |
        |            at  T2                 |
        +-----------------------------------+
```

## Coefficient of performance (COP)

We do not call it "efficiency", because the useful thing is the heat REMOVED,
and that can be bigger than the work put in.

```
                     what you want         Q2
     alpha (COP) =  ---------------  =  --------
                     what you pay         W

          +--------------------------------------------------+
          |                                                  |
          |            Q2            Q2                      |
          |   alpha = ----  =  -------------                 |
          |            W        Q1  -  Q2                    |
          |                                                  |
          |   For a REVERSIBLE (Carnot) refrigerator:        |
          |                                                  |
          |                 T2                               |
          |   alpha  =  -----------                          |
          |              T1 - T2                             |
          |                                                  |
          +--------------------------------------------------+
```

## Relation between COP and efficiency

```
                  1 - eta
     alpha  =  ------------            and       alpha  can be > 1
                   eta

  A typical household fridge has alpha of about 5:
  every 1 J of electricity moves 5 J of heat out of the food.
```

## Heat pump

Same machine, different purpose: you want the **heat delivered to the hot side**
(warming a room in winter).

```
                      Q1          Q1              T1
     COP(heat pump) = ----  =  ---------   =   ---------  =  alpha + 1
                       W        Q1 - Q2         T1 - T2
```

## The classic 2-mark question

**Q.** Can a room be cooled by leaving the refrigerator door open?

```
  ANSWER:  NO.  It gets WARMER.

  The fridge takes Q2 out of the room and dumps Q1 = Q2 + W back into
  the SAME room through its coils. Net heat added to the room = W,
  the electrical work done by the compressor.

  The room therefore HEATS UP by W joules each cycle.
```

### WORKED EXAMPLE 15

**Q.** A refrigerator removes 600 J of heat from the food compartment for every 150 J
of electrical work supplied. Find (i) the coefficient of performance (ii) the heat
dumped into the room.

**Solution.**
```
  (i)   alpha  =  Q2 / W  =  600 / 150  =  4

  (ii)  Q1  =  Q2 + W  =  600 + 150  =  750 J
```

### WORKED EXAMPLE 16

**Q.** A Carnot refrigerator keeps its inside at −13 °C while the room is at 27 °C.
Find its coefficient of performance.

**Solution.**
```
  T2  =  -13 + 273  =  260 K       (cold, inside)
  T1  =   27 + 273  =  300 K       (hot, room)

               T2            260        260
  alpha  =  ---------   =  -------  =  -----   =   6.5
             T1 - T2       300-260       40

  For every joule of work, 6.5 J of heat is removed from the food.
```

---

# TOPIC 16 — THE SECOND LAW OF THERMODYNAMICS

The first law says energy is conserved. It does NOT forbid silly things:

```
  x  A cup of tea on a table spontaneously getting hotter while
     the room cools down.       (energy would still be conserved!)

  x  An engine that turns 100 J of heat into 100 J of work with
     no waste.                  (energy would still be conserved!)

  Nature refuses both. The SECOND LAW is the law that forbids them.
```

## STATEMENT 1 — KELVIN-PLANCK (about ENGINES)

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |  No process is possible whose SOLE RESULT is the absorption of  |
  |  heat from a reservoir and the COMPLETE conversion of that heat |
  |  into work.                                                     |
  |                                                                 |
  +-----------------------------------------------------------------+

  In plain words:  YOU CANNOT BUILD A 100% EFFICIENT HEAT ENGINE.
                   Every engine MUST reject some heat to a sink.
```

## STATEMENT 2 — CLAUSIUS (about REFRIGERATORS)

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |  No process is possible whose SOLE RESULT is the transfer of    |
  |  heat from a COLDER body to a HOTTER body.                      |
  |                                                                 |
  +-----------------------------------------------------------------+

  In plain words:  HEAT WILL NOT FLOW UPHILL BY ITSELF.
                   A fridge works only because you PAY with electricity.
```

The words **"sole result"** are essential. Leave them out and the statement is wrong
(a fridge DOES move heat from cold to hot — but not as its *sole* result, because
work was also consumed).

## The two statements are EQUIVALENT — outline of the proof

We show that breaking one automatically breaks the other.

```
  PART 1:  If Kelvin-Planck is violated, Clausius is violated.
  --------------------------------------------------------------
  Suppose engine E converts heat Q from the hot reservoir COMPLETELY
  into work W = Q, rejecting nothing (K-P violated).
  Feed that work W into an ordinary refrigerator R.
  R then pumps Q2 out of the cold body and delivers Q2 + W to the hot body.

        HOT  T1   <---- (Q2 + W) ---- [ R ] <---- Q2 ---- COLD T2
              ---- Q = W -------------> [ E ] --W--^

  NET EFFECT of the combined machine:
        Hot reservoir:   - Q  +  (Q2 + W)  =  + Q2       (since W = Q)
        Cold reservoir:  - Q2
        Work exchanged with outside: ZERO

  So the ONLY result is that Q2 moved from COLD to HOT with no work.
  That violates CLAUSIUS.


  PART 2:  If Clausius is violated, Kelvin-Planck is violated.
  --------------------------------------------------------------
  Suppose a device D moves Q2 from the cold body to the hot body with
  NO work at all (Clausius violated).
  Run an ordinary engine E that takes Q1 from the hot body, does work W,
  and rejects exactly Q2 to the cold body.

  NET EFFECT of the combined machine:
        Cold reservoir:  - Q2  +  Q2  =  0     (unchanged!)
        Hot reservoir:   + Q2  -  Q1  =  -(Q1 - Q2)
        Work produced:   W = Q1 - Q2

  So the ONLY result is heat taken from ONE reservoir and turned
  COMPLETELY into work. That violates KELVIN-PLANCK.

  Each violates the other  =>  THE TWO STATEMENTS ARE EQUIVALENT.
```

> **TRAP:** In a 2-mark question, write **both** statements. In a 4-mark question,
> write both statements AND explain the words "sole result".

---

# TOPIC 17 — REVERSIBLE AND IRREVERSIBLE PROCESSES

```
  REVERSIBLE PROCESS:
  one that can be made to retrace its path EXACTLY, so that the system
  AND the surroundings are both restored to their original states,
  leaving no change anywhere in the universe.

  IRREVERSIBLE PROCESS:
  one that cannot be retraced. Every real process is irreversible.
```

**Analogy:** a video of a swinging frictionless pendulum looks fine played backwards
(reversible). A video of a glass shattering played backwards looks absurd
(irreversible).

## Conditions for a process to be reversible

```
  1.  It must be QUASI-STATIC  (infinitely slow, always in equilibrium).

  2.  There must be NO DISSIPATIVE forces - no friction, no viscosity,
      no electrical resistance, no inelasticity.

  3.  Heat exchange must occur only across an INFINITESIMAL temperature
      difference.

  4.  The system must not pass through any non-equilibrium state.
```

## Examples of IRREVERSIBLE processes (exam favourites)

```
  -  Free expansion of a gas into vacuum
  -  Sudden (fast) expansion or compression
  -  Conduction of heat across a FINITE temperature difference
  -  Any process involving friction
  -  Diffusion / mixing of two gases
  -  Rusting, burning, and all chemical reactions
  -  A bullet stopping in a wooden block
```

## Causes of irreversibility

```
  (a)  Dissipative forces (friction, viscosity, resistance) turn
       ordered work into disordered heat, which cannot be fully
       converted back.

  (b)  The process is NOT quasi-static, so intermediate states are
       not equilibrium states and cannot be retraced.
```

## Free expansion — a special case worth knowing

```
  A gas in an INSULATED, RIGID container is allowed to rush into an
  evacuated half.

        +----------+----------+          +---------------------+
        |   GAS    |  VACUUM  |   -->    |        GAS          |
        +----------+----------+          +---------------------+

    Q = 0    (insulated)
    W = 0    (it expands against NOTHING, so there is no opposing pressure)
    => dU = 0  => for an ideal gas,  TEMPERATURE DOES NOT CHANGE.

  It is adiabatic AND isothermal, but it is NOT quasi-static,
  so PV^gamma = constant does NOT apply, and it cannot be drawn as a
  curve on a P-V diagram. It is completely IRREVERSIBLE.
```

> **TRAP:** Students apply `T V^(g-1) = const` to free expansion and get a
> temperature drop. Wrong. Free expansion is not quasi-static, so no adiabatic
> equation applies. For an ideal gas the temperature stays the SAME.

---

# TOPIC 18 — THE CARNOT ENGINE  *** the 8-mark question ***

```
  The CARNOT ENGINE is an IDEAL, completely REVERSIBLE heat engine
  working between two temperatures, and it has the MAXIMUM possible
  efficiency of any engine working between those two temperatures.
```

## The parts

```
  1.  SOURCE     -  infinite hot reservoir at T1, perfect conductor
  2.  SINK       -  infinite cold reservoir at T2, perfect conductor
  3.  INSULATING STAND  -  for the adiabatic steps
  4.  CYLINDER   -  insulating walls, perfectly conducting base,
                    frictionless insulating piston
  5.  WORKING SUBSTANCE  -  1 mole of an ideal gas
```

## THE P-V DIAGRAM OF THE CARNOT CYCLE

```
     P
     ^
     |
  P1 |  A
     |  | \
     |  |   \                        A -> B   ISOTHERMAL EXPANSION at T1
  P2 |  |     B                      B -> C   ADIABATIC  EXPANSION T1->T2
     |  |     |\                     C -> D   ISOTHERMAL COMPRESSION at T2
     |  |     |  \                   D -> A   ADIABATIC  COMPRESSION T2->T1
     |  |     |    \
  P4 |  D     |      \               The SHADED AREA A-B-C-D is the
     |    \   |        \             NET WORK done per cycle.
     |      \ |          \
  P3 |        C            \
     |          \ \ \  isotherm at T2
     +---+-----+-----+------+--------->  V
        V1    V2    V4     V3

     A->B and C->D are ISOTHERMS  (flatter)
     B->C and D->A are ADIABATS   (steeper)
     The loop runs CLOCKWISE  ->  net work is POSITIVE  ->  ENGINE.
```

## THE FOUR STEPS, IN DETAIL

```
  STEP 1   A(P1,V1,T1) -> B(P2,V2,T1)      ISOTHERMAL EXPANSION
  ------------------------------------------------------------------
  Cylinder placed on the SOURCE. Gas expands slowly at constant T1.
  Heat ABSORBED from source:

          Q1  =  W1  =  R T1 ln ( V2 / V1 )         [ dU = 0 ]


  STEP 2   B(P2,V2,T1) -> C(P3,V3,T2)      ADIABATIC EXPANSION
  ------------------------------------------------------------------
  Cylinder placed on the INSULATING STAND. Gas expands further.
  No heat exchange. The gas cools from T1 down to T2.

                   R ( T1 - T2 )
          W2  =  ----------------
                    gamma - 1


  STEP 3   C(P3,V3,T2) -> D(P4,V4,T2)      ISOTHERMAL COMPRESSION
  ------------------------------------------------------------------
  Cylinder placed on the SINK. Gas is compressed slowly at constant T2.
  Heat REJECTED to sink:

          Q2  =  R T2 ln ( V3 / V4 )        (taken as positive)
          W3  =  - Q2                       (negative: work done ON gas)


  STEP 4   D(P4,V4,T2) -> A(P1,V1,T1)      ADIABATIC COMPRESSION
  ------------------------------------------------------------------
  Back on the INSULATING STAND. Gas is compressed back to A.
  The gas warms from T2 back to T1.

                   R ( T1 - T2 )
          W4  =  - ---------------    =  - W2
                     gamma - 1
```

## DERIVATION OF THE EFFICIENCY

```
  NET WORK per cycle:

     W  =  W1 + W2 + W3 + W4
        =  W1 + W2 - Q2 - W2          (W4 exactly cancels W2)
        =  Q1  -  Q2                                        ...(i)

  EFFICIENCY:

             W       Q1 - Q2               Q2
     eta  = ----  =  --------   =   1  -  ----                ...(ii)
             Q1        Q1                  Q1

  Now put in the two isothermal heats:

     Q1  =  R T1 ln (V2 / V1)
     Q2  =  R T2 ln (V3 / V4)

     Q2        T2  ln (V3 / V4)
    ----  =  ---------------------                             ...(iii)
     Q1        T1  ln (V2 / V1)

  ------------------------------------------------------------------
  NOW SHOW THE TWO LOGARITHMS ARE EQUAL, using the two adiabatic steps:

     B -> C  (adiabatic):        T1 V2^(g-1)  =  T2 V3^(g-1)
     D -> A  (adiabatic):        T1 V1^(g-1)  =  T2 V4^(g-1)

     Divide the first by the second:

           +- V2 -+ (g-1)        +- V3 -+ (g-1)
           | ---- |         =    | ---- |
           +- V1 -+              +- V4 -+

     Take the (g-1)-th root:

              V2       V3
             ----  =  ----          ->     ln(V2/V1)  =  ln(V3/V4)
              V1       V4
  ------------------------------------------------------------------

  Put this into (iii): the logarithms CANCEL.

              Q2        T2
             ----  =  -----
              Q1        T1

  Substitute into (ii):

          +----------------------------------------------+
          |                                              |
          |                       T2                     |
          |         eta   =  1 - -----                   |
          |                       T1                     |
          |                                              |
          |     T1 = source temperature   (KELVIN)       |
          |     T2 = sink   temperature   (KELVIN)       |
          |                                              |
          +----------------------------------------------+
```

## What the result tells us

```
  1.  eta depends ONLY on the two TEMPERATURES,
      NOT on the working substance.

  2.  eta = 1 only if T2 = 0 K (unreachable) or T1 = infinity
      (impossible).  ->  NO ENGINE IS 100% EFFICIENT.

  3.  eta increases if T1 goes UP or T2 goes DOWN.
      Raising T1 helps more in practice.

  4.  If T1 = T2 then eta = 0: an engine needs a TEMPERATURE DIFFERENCE.
```

## CARNOT'S THEOREM

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  (a) No engine working between two given temperatures can be more  |
  |      efficient than a REVERSIBLE (Carnot) engine working between   |
  |      the same two temperatures.                                    |
  |                                                                    |
  |  (b) The efficiency of a Carnot engine is INDEPENDENT of the       |
  |      nature of the working substance.                              |
  |                                                                    |
  +--------------------------------------------------------------------+

  Proof idea: if some engine X could beat the Carnot engine C, couple X
  as an engine to C run backwards as a refrigerator. The combination
  would move heat from cold to hot with NO external work, violating
  the CLAUSIUS statement. So no such X can exist.
```

### WORKED EXAMPLE 17

**Q.** A Carnot engine works between 227 °C and 27 °C. Find its efficiency. If it
absorbs 6000 J per cycle from the source, find the work done and the heat rejected.

**Solution.**
```
  T1  =  227 + 273  =  500 K
  T2  =   27 + 273  =  300 K

              T2           300
  eta = 1 -  ----  =  1 - -----  =  1 - 0.6  =  0.40   =   40 %
              T1           500

  W   =  eta x Q1  =  0.40 x 6000  =  2400 J

  Q2  =  Q1 - W  =  6000 - 2400  =  3600 J

  Check:  Q2/Q1 = 3600/6000 = 0.6 = T2/T1 = 300/500 = 0.6      Correct.
```

> **TRAP:** ALWAYS convert to KELVIN first. Using 227 and 27 directly gives
> `1 - 27/227 = 0.88`, which is wrong and scores zero.

### WORKED EXAMPLE 18

**Q.** A Carnot engine has an efficiency of 40% when the sink is at 27 °C. By how much
must the source temperature be increased to raise the efficiency to 60%, keeping the
sink temperature the same?

**Solution.**
```
  T2 = 300 K.

  FIRST CASE:  0.4  =  1 - 300/T1     ->   300/T1 = 0.6
                                      ->   T1 = 300/0.6 = 500 K

  SECOND CASE: 0.6  =  1 - 300/T1'    ->   300/T1' = 0.4
                                      ->   T1' = 300/0.4 = 750 K

  INCREASE REQUIRED  =  750 - 500  =  250 K
```

### WORKED EXAMPLE 19

**Q.** A Carnot engine with efficiency 50% has its sink at 27 °C. If the efficiency is
to become 70% by lowering the sink temperature only, find the new sink temperature.

**Solution.**
```
  T2 = 300 K.
  0.5 = 1 - 300/T1   ->  300/T1 = 0.5  ->  T1 = 600 K

  Now with T1 fixed at 600 K:
  0.7 = 1 - T2'/600  ->  T2'/600 = 0.3  ->  T2' = 180 K

  New sink temperature  =  180 K  =  -93 degrees C.
```

### WORKED EXAMPLE 20

**Q.** An inventor claims an engine that takes in 1000 J at 400 K and delivers 600 J
of work while rejecting heat at 300 K. Is the claim valid?

**Solution.**
```
  CLAIMED efficiency  =  600 / 1000  =  0.60  =  60 %

  MAXIMUM POSSIBLE (Carnot) efficiency between 400 K and 300 K:

        eta(max)  =  1 - 300/400  =  1 - 0.75  =  0.25  =  25 %

  60 % > 25 %, which violates CARNOT'S THEOREM (and the second law).

  THE CLAIM IS FALSE.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write the first law as  dQ = dU + dW  (Physics convention,
       W = work done BY the gas)?  Not the Chemistry version.

  [ ]  Are ALL temperatures in KELVIN?  ( K = C + 273 )

  [ ]  In every Carnot problem, is T1 the HOT source and T2 the COLD sink?

  [ ]  Did I check my signs?  Expansion -> W positive.
       Compression -> W negative.  Heat released -> Q negative.

  [ ]  Isothermal -> dU = 0.  Cyclic -> dU = 0.  Adiabatic -> Q = 0.
       Isochoric -> W = 0.  Did I use the free result?

  [ ]  Is my work formula using  ln  (natural log), not log10?
       If using log10, did I include the 2.303?

  [ ]  Did I draw and LABEL the P-V diagram? Axes named, points named,
       arrows showing the direction.

  [ ]  In the heat engine / refrigerator answer, did I DRAW the block
       diagram? It carries marks on its own.

  [ ]  In the Carnot answer, did I include: the four steps, the P-V
       diagram, Q1 and Q2 expressions, the adiabatic relation that makes
       the logs cancel, and the final eta = 1 - T2/T1?

  [ ]  Second law: did I write BOTH the Kelvin-Planck AND the Clausius
       statement, including the words "sole result"?

  [ ]  Did I write the UNITS on every final answer (J, K, %, no unit for
       gamma and eta)?

  [ ]  Volume in m^3 and pressure in Pa? (1 litre = 10^-3 m^3,
       1 atm = 1.013 x 10^5 Pa)

  [ ]  Is my final efficiency between 0 and 1?  If it came out bigger
       than 1, I made a mistake.
```
