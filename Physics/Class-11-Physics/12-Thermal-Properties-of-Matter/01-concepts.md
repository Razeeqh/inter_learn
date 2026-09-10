# Thermal Properties of Matter — Concepts, Explained From Zero

Read this with a pen. Every worked example is solved fully — copy them out.

---

# TOPIC 1 — HEAT AND TEMPERATURE (they are NOT the same thing)

## The idea in ordinary words

Every object is made of atoms, and those atoms are always jiggling. They vibrate,
they spin, they bounce around. That jiggling is **energy**.

```
  COLD BODY                          HOT BODY
   o   o   o                          o  o   o
    o   o                         o  o  o  o  o
   o   o   o                          o  o   o
   (atoms jiggle slowly)          (atoms jiggle violently)
```

- **TEMPERATURE** measures how *violently* the average atom is jiggling.
  It is the **degree of hotness or coldness** of a body.
- **HEAT** is the *energy itself*, and specifically the energy that **flows**
  from a hotter body to a colder one **because** of the temperature difference.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   HEAT  is energy IN TRANSIT due to a temperature difference.      |
  |   It flows ONLY from higher temperature to lower temperature.      |
  |                                                                    |
  |   TEMPERATURE is what decides the DIRECTION of that flow.          |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## The analogy that fixes this forever

Think of **water in tanks**.

```
       TANK A                        TANK B
   +------------+                +------------+
   |            |  height 10 m   |~~~~~~~~~~~~|  height 2 m
   |~~~~~~~~~~~~|                |~~~~~~~~~~~~|
   +------------+                +------------+
     small tank                    huge tank

   HEIGHT of water    ->  TEMPERATURE
   AMOUNT of water    ->  HEAT (thermal energy content)

   Water flows from A to B because A is HIGHER,
   even though B contains far MORE water.
```

That is exactly why:

- A **spark** from a grinder is at 1000 degC but does not hurt you — high
  temperature, almost no heat.
- The **sea** is at 25 degC but contains an unimaginable amount of heat.

> **TRAP:** Never write "a body contains heat." A body contains *internal energy*.
> The word HEAT is reserved for energy that is *moving*. The examiner marks this.

## Units

```
  +--------------------------+------------------------------------------+
  |  SI unit of heat         |  joule (J)                               |
  |  Practical unit          |  calorie (cal)                           |
  |  1 calorie               |  4.186 J   (call it 4.2 J)               |
  |  1 kilocalorie           |  1000 cal = 4186 J                       |
  |  SI unit of temperature  |  kelvin (K)                              |
  +--------------------------+------------------------------------------+

  DEFINITION OF THE CALORIE:
  the heat needed to raise the temperature of 1 gram of water
  through 1 degree Celsius (from 14.5 degC to 15.5 degC).
```

## WORKED EXAMPLE 1.1

*A cup holds 250 g of water at 30 degC. A steel nail of mass 5 g is at 300 degC.
Which has the higher temperature, and which contains more thermal energy?*

**SOLUTION**

```
  Higher TEMPERATURE  ->  the nail (300 degC).

  Thermal energy is roughly (mass) x (specific heat) x (temperature):

     water :  0.250 kg x 4186 x 303 K  ~  3.2 x 10^5 J
     nail  :  0.005 kg x  500 x 573 K  ~  1.4 x 10^3 J

  The WATER holds about 200 times more energy,
  yet heat still flows from the NAIL to the WATER,
  because heat flow is decided by TEMPERATURE, not by energy content.
```

---

# TOPIC 2 — TEMPERATURE SCALES AND THERMOMETERS

## What a thermometer really is

Any physical property that changes smoothly and repeatably with temperature can
be used to *measure* temperature. That property is called the **thermometric
property**.

```
  +--------------------------+------------------------------------------+
  |  THERMOMETER             |  THERMOMETRIC PROPERTY USED              |
  +--------------------------+------------------------------------------+
  |  Mercury / alcohol       |  length of the liquid column             |
  |  Constant-volume gas     |  PRESSURE of a fixed mass of gas         |
  |  Constant-pressure gas   |  VOLUME of a fixed mass of gas           |
  |  Platinum resistance     |  electrical resistance                   |
  |  Thermocouple            |  thermo-emf                              |
  |  Pyrometer (radiation)   |  radiation emitted (no contact needed)   |
  +--------------------------+------------------------------------------+
```

## The three scales

Every scale is built by choosing **two fixed points** and dividing the gap.

```
  +-------------+-----------------+-----------------+------------------+
  |  SCALE      |  LOWER FIXED PT |  UPPER FIXED PT |  DIVISIONS       |
  |             |  (ice point)    |  (steam point)  |  between them    |
  +-------------+-----------------+-----------------+------------------+
  |  CELSIUS    |    0 degC       |    100 degC     |      100         |
  |  FAHRENHEIT |   32 degF       |    212 degF     |      180         |
  |  KELVIN     |  273.15 K       |    373.15 K     |      100         |
  +-------------+-----------------+-----------------+------------------+
```

Picture them side by side:

```
    CELSIUS        FAHRENHEIT        KELVIN
      |                |               |
  100 +--- steam ---+ 212 -----------+ 373.15
      |             |                |
      |   100 divs  |   180 divs     |   100 divs
      |             |                |
    0 +--- ice ----+  32 -----------+ 273.15
      |             |                |
      |             |                |
 -273.15 +--------- -459.67 --------+ 0     <-- ABSOLUTE ZERO
```

## The conversion relation

Because all three measure the *same* physical thing, the **fraction of the way
up between the fixed points must be the same on every scale**:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     C - 0        F - 32        K - 273.15                           |
  |    -------  =   --------  =   ------------                          |
  |      100          180             100                               |
  |                                                                     |
  |  Simplify the first two (divide 180 by 20 -> 9, 100 by 20 -> 5):    |
  |                                                                     |
  |       C          F - 32                                             |
  |      ---   =    --------                                            |
  |       5             9                                               |
  |                                                                     |
  +---------------------------------------------------------------------+

  USABLE FORMS:

        9                              5
   F = --- C  +  32              C = --- ( F - 32 )
        5                              9

   K = C + 273.15      (in problems, 273 is accepted)
```

## WORKED EXAMPLE 2.1

*Convert 37 degC (normal body temperature) into Fahrenheit and kelvin.*

**SOLUTION**

```
  F = (9/5) x 37 + 32
    = (9 x 37)/5 + 32
    = 333/5 + 32
    = 66.6 + 32
    = 98.6 degF                <-- the famous "98.6"

  K = 37 + 273 = 310 K
```

## WORKED EXAMPLE 2.2

*At what temperature do the Celsius and Fahrenheit scales read the SAME number?*

**SOLUTION**

```
  Let that common reading be x.

       x  =  (9/5) x  +  32

       x - (9/5) x  =  32

       (5x - 9x)/5  =  32

          -4x / 5   =  32

              -4x   =  160

                x   =  -40

  CHECK:   F = (9/5)(-40) + 32 = -72 + 32 = -40.  Correct.

  ANSWER:  -40 degC = -40 degF
```

> **TRAP:** This "-40" question is asked almost every other year in some form.
> Learn it as a fact: **-40 is the only place the two scales agree.**

## WORKED EXAMPLE 2.3

*A faulty thermometer reads 2 degC in melting ice and 98 degC in steam.
What is the correct temperature when it reads 50 degC?*

**SOLUTION**

```
  Faulty scale runs from 2 to 98, i.e. 96 divisions for 100 real degrees.

     correct         reading - lower fixed point
    --------- = -----------------------------------
       100        upper fixed pt - lower fixed pt

     correct        50 - 2        48
    --------- =  ------------ = ------ = 0.5
       100         98 - 2         96

     correct temperature = 50 degC

  (Coincidence here, but the METHOD is what earns the mark.)
```

## The constant-volume ideal gas thermometer

Mercury thermometers disagree slightly with alcohol thermometers. Gas
thermometers do not — **all gases give the same reading at low pressure**, which
is why the gas thermometer defines the true temperature scale.

```
        gas bulb                              mercury
      +----------+                            manometer
      |   GAS    |=====[ tube ]========+         |  |
      | (fixed   |                     |         |  |
      |  volume) |                     +---------+  |  h
      +----------+                               |__|
           |
      put in the bath whose temperature you want

   Heat the bulb  ->  gas tries to expand  ->  raise the mercury
   reservoir until the volume is EXACTLY back to its mark
   ->  now the extra pressure h tells you the temperature.
```

At constant volume, for an ideal gas, `P` is directly proportional to `T`:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                             P                                       |
  |          T  =   273.16  x  ------      kelvin                       |
  |                            P_tr                                     |
  |                                                                     |
  |   P     = pressure of the gas at the unknown temperature            |
  |   P_tr  = pressure of the same gas at the TRIPLE POINT of water     |
  |   273.16 K = triple point of water, the single fixed point of       |
  |              the modern Kelvin scale                                |
  +---------------------------------------------------------------------+
```

## Absolute zero

Plot pressure against temperature for several different gases and extend every
line backwards:

```
   P |          /  /   /
     |         /  /   /       <- three different gases,
     |        /  /   /           three different amounts
     |       /  /   /
     |      /  /   /
     |     /  /   /
     |    /  /   /
     |   / /  /
     |  ///
     +-*--------------------------------> t (degC)
      /|
  -273.15 degC
  ALL the lines meet here.
```

```
  +---------------------------------------------------------------------+
  |  ABSOLUTE ZERO = -273.15 degC = 0 K                                 |
  |                                                                     |
  |  It is the temperature at which the pressure (and volume) of an     |
  |  IDEAL gas would become zero. Molecular motion would cease.         |
  |  It is the LOWEST possible temperature and can never be reached.    |
  +---------------------------------------------------------------------+
```

> **TRAP:** A temperature *difference* of 1 degC equals a difference of 1 K
> exactly. So in `Q = m c dT` you may put dT in either degC or K and get the
> same answer. But an *absolute* temperature (as in Stefan's law `T^4`) must
> ALWAYS be in kelvin.

---

# TOPIC 3 — THERMAL EXPANSION OF SOLIDS: LINEAR EXPANSION

## Why solids expand

In a solid, atoms sit in fixed positions and vibrate about them. Heat them and
they vibrate with a bigger swing. Because the force between atoms is not
perfectly symmetric (it is easier to push atoms apart than to squeeze them
together), the **average** separation grows. The solid gets bigger.

```
   COLD:    O---O---O---O---O          small vibrations, small spacing

   HOT:     O-----O-----O-----O        big vibrations, bigger AVERAGE spacing
```

## Linear expansion

Take a rod of original length `L1` at temperature `T1`. Heat it to `T2`.

```
       T1        |<-------------- L1 -------------->|
                 +----------------------------------+

       T2        |<-------------- L1 -------------->|<-dL->|
                 +-----------------------------------------+
```

Experiment shows the increase in length `dL`:

```
   *  is proportional to the original length L1
   *  is proportional to the temperature rise dT
   *  depends on the MATERIAL
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     dL  =  alpha  x  L1  x  dT                                      |
  |                                                                     |
  |     L2  =  L1 ( 1 + alpha dT )                                      |
  |                                                                     |
  |  where                                                              |
  |                                dL                                   |
  |            alpha  =   ---------------------                         |
  |                            L1  x  dT                                |
  |                                                                     |
  |  alpha = COEFFICIENT OF LINEAR EXPANSION                            |
  |                                                                     |
  |  DEFINITION: the increase in length per unit original length        |
  |              per degree rise in temperature.                        |
  |                                                                     |
  |  UNIT: per kelvin (K^-1) or per degree Celsius (degC^-1)            |
  |  DIMENSIONS: [ M^0 L^0 T^0 K^-1 ]                                   |
  +---------------------------------------------------------------------+
```

## Typical values (worth a glance, not memorising)

```
  +-------------------+---------------------+---------------------------+
  |  MATERIAL         |  alpha (per K)      |  NOTE                     |
  +-------------------+---------------------+---------------------------+
  |  Invar            |  1.2 x 10^-6        |  almost no expansion ->    |
  |                   |                     |  used in pendulum clocks  |
  |  Glass (ordinary) |  0.9 x 10^-5        |                           |
  |  Steel / iron     |  1.2 x 10^-5        |  LEARN THIS ONE           |
  |  Copper           |  1.7 x 10^-5        |                           |
  |  Brass            |  1.8 x 10^-5        |                           |
  |  Aluminium        |  2.3 x 10^-5        |  expands the most here    |
  +-------------------+---------------------+---------------------------+
```

## WORKED EXAMPLE 3.1

*A steel rod is 1.000 m long at 20 degC. Find its length at 120 degC.
Take alpha = 1.2 x 10^-5 per degC.*

**SOLUTION**

```
  Given:  L1 = 1.000 m ,  dT = 120 - 20 = 100 degC ,  alpha = 1.2 x 10^-5

     dL = alpha L1 dT
        = (1.2 x 10^-5) x (1.000) x (100)
        = 1.2 x 10^-3 m
        = 1.2 mm

     L2 = 1.000 + 0.0012 = 1.0012 m

  ANSWER:  the rod grows by 1.2 mm; new length 1.0012 m
```

## WORKED EXAMPLE 3.2

*A metal rod 2 m long expands by 0.6 mm when heated through 25 degC.
Find its coefficient of linear expansion.*

**SOLUTION**

```
              dL              0.6 x 10^-3
  alpha  =  --------   =  --------------------
             L1 dT            2  x  25

                             0.6 x 10^-3
                         =  --------------
                                  50

                         =  1.2 x 10^-5  per degC

  ANSWER:  1.2 x 10^-5 /degC  -> this is steel
```

## WORKED EXAMPLE 3.3 (the "hole in a plate" question)

*A circular hole of diameter 5.00 cm is cut in an aluminium plate at 20 degC.
What is the diameter of the hole at 220 degC? (alpha = 2.3 x 10^-5 /degC)*

**SOLUTION**

```
  KEY IDEA:  a hole expands EXACTLY as if it were filled with the metal.
             The hole gets BIGGER, not smaller.

     dD = alpha D dT
        = (2.3 x 10^-5)(5.00)(200)
        = 2.3 x 10^-2 cm
        = 0.023 cm

     new diameter = 5.023 cm
```

> **TRAP:** Almost every student's instinct is "the metal expands inward so the
> hole shrinks." **WRONG.** Every linear dimension of the object — including the
> distance across a hole — grows by the same factor `(1 + alpha dT)`. Think of a
> photograph being enlarged: everything in it grows, including the gaps.

---

# TOPIC 4 — AREAL AND CUBICAL EXPANSION (and the two derivations)

## Areal (superficial) expansion

```
  +---------------------------------------------------------------------+
  |     dA  =  beta  x  A1  x  dT           A2 = A1 ( 1 + beta dT )     |
  |                                                                     |
  |  beta = COEFFICIENT OF AREAL EXPANSION                              |
  |       = increase in area per unit area per degree rise              |
  +---------------------------------------------------------------------+
```

## Cubical (volume) expansion

```
  +---------------------------------------------------------------------+
  |     dV  =  gamma  x  V1  x  dT          V2 = V1 ( 1 + gamma dT )    |
  |                                                                     |
  |  gamma = COEFFICIENT OF CUBICAL EXPANSION                           |
  |        = increase in volume per unit volume per degree rise         |
  +---------------------------------------------------------------------+
```

## *** DERIVATION 1 — SHOW THAT beta = 2 alpha ***

This is a guaranteed 4-mark question. Learn it word for word.

```
  Take a SQUARE plate of side L at temperature T.

         +---------------+                +-----------------+
         |               |                |                 |
         |     L x L     |    heat by dT  |   L' x L'       |
         |               |   ---------->  |                 |
         +---------------+                +-----------------+
              area A = L^2                   area A' = L'^2
```

**Step 1** — each side expands linearly:

```
        L'  =  L ( 1 + alpha dT )
```

**Step 2** — the new area:

```
        A'  =  L'^2  =  L^2 ( 1 + alpha dT )^2
```

**Step 3** — expand the bracket:

```
        ( 1 + alpha dT )^2  =  1  +  2 alpha dT  +  (alpha dT)^2
```

**Step 4** — alpha is about 10^-5, so `(alpha dT)^2` is about 10^-10.
That is utterly negligible. Drop it.

```
        A'  =  L^2 ( 1 + 2 alpha dT )
            =  A  ( 1 + 2 alpha dT )
```

**Step 5** — compare with the definition `A' = A ( 1 + beta dT )`:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                        beta  =  2 alpha                             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## *** DERIVATION 2 — SHOW THAT gamma = 3 alpha ***

```
  Take a CUBE of side L, volume V = L^3.
```

**Step 1**

```
        L'  =  L ( 1 + alpha dT )
```

**Step 2**

```
        V'  =  L'^3  =  L^3 ( 1 + alpha dT )^3
```

**Step 3** — expand using the binomial theorem:

```
   (1 + x)^3  =  1  +  3x  +  3x^2  +  x^3        with  x = alpha dT
```

**Step 4** — `x` is about 10^-5, so `x^2 ~ 10^-10` and `x^3 ~ 10^-15`.
Both are negligible. Keep only the first two terms:

```
        V'  =  L^3 ( 1 + 3 alpha dT )
            =  V  ( 1 + 3 alpha dT )
```

**Step 5** — compare with `V' = V ( 1 + gamma dT )`:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                       gamma  =  3 alpha                             |
  |                                                                     |
  |   AND THEREFORE THE MASTER RELATION:                                |
  |                                                                     |
  |             alpha        beta        gamma                          |
  |            -------  =  --------  =  -------                         |
  |               1            2            3                           |
  |                                                                     |
  |             alpha : beta : gamma  =  1 : 2 : 3                      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

> **TRAP:** You **must** say the words "higher powers of `alpha dT` are
> neglected because alpha is very small (of the order 10^-5)". Skipping that
> sentence costs a mark, because without it the derivation is not exact.

## WORKED EXAMPLE 4.1

*A copper sheet has an area of 2.0 m^2 at 25 degC. Find the increase in area
when it is heated to 75 degC. alpha(Cu) = 1.7 x 10^-5 /degC.*

**SOLUTION**

```
  beta  =  2 alpha  =  2 x 1.7 x 10^-5  =  3.4 x 10^-5 /degC

  dT = 75 - 25 = 50 degC

  dA = beta A dT
     = (3.4 x 10^-5)(2.0)(50)
     = 3.4 x 10^-3 m^2
     = 34 cm^2
```

## WORKED EXAMPLE 4.2

*An aluminium sphere has a volume of 1000 cm^3 at 0 degC. Find its volume at
100 degC. alpha(Al) = 2.3 x 10^-5 /degC.*

**SOLUTION**

```
  gamma = 3 alpha = 3 x 2.3 x 10^-5 = 6.9 x 10^-5 /degC

  dV = gamma V dT
     = (6.9 x 10^-5)(1000)(100)
     = 6.9 cm^3

  New volume = 1000 + 6.9 = 1006.9 cm^3
```

## WORKED EXAMPLE 4.3 (density changes too)

*Show that the density of a solid at temperature T2 is
`rho2 = rho1 / (1 + gamma dT)`, and hence approximately
`rho2 = rho1 (1 - gamma dT)`.*

**SOLUTION**

```
  Mass does NOT change on heating. Volume does.

        m                m
  rho2 = ---   =   ------------------
        V2          V1 ( 1 + gamma dT )

        rho1
     =  --------------------
        ( 1 + gamma dT )

  Since gamma dT << 1, use  1/(1+x) ~ 1 - x :

     rho2  ~  rho1 ( 1 - gamma dT )

  MEANING:  heat a solid  ->  volume UP  ->  density DOWN.
```

---

# TOPIC 5 — THERMAL STRESS (a clamped rod that cannot expand)

## The situation

Clamp a rod rigidly between two immovable walls and then heat it. It *wants* to
get longer but it *cannot*. The walls squeeze it back to its original length.
That squeezing produces an enormous internal **compressive stress**.

```
   |||                                   |||
   |||=================================  |||     rod at T1, no stress
   |||                                   |||
    ^  rigid wall              rigid wall ^

   |||                                   |||
   ||| ==>=============================<==|||    rod at T2, HUGE stress
   |||                                   |||
        the wall pushes back with force F
```

## Derivation

```
  Step 1  If it were FREE, the rod would expand by

              dL  =  alpha L dT

  Step 2  The walls compress it back by exactly dL.
          So the strain produced is

                       dL       alpha L dT
              strain = ---  =  -------------  =  alpha dT
                        L            L

  Step 3  Young's modulus:      Y = stress / strain

              stress  =  Y x strain
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     THERMAL STRESS   =   Y  alpha  dT                               |
  |                                                                     |
  |     THERMAL FORCE    =   Y  A  alpha  dT                            |
  |                                                                     |
  |  NOTICE: the stress does NOT depend on the LENGTH of the rod.       |
  |  A 1 cm rod and a 10 m rod develop exactly the same stress.         |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 5.1

*A steel rod of cross-section 1 cm^2 is clamped rigidly at both ends at 20 degC
and then heated to 60 degC. Find (a) the thermal stress and (b) the force on the
clamps. Y = 2.0 x 10^11 N/m^2, alpha = 1.2 x 10^-5 /degC.*

**SOLUTION**

```
  dT = 60 - 20 = 40 degC
  A  = 1 cm^2 = 1 x 10^-4 m^2

  (a)  stress = Y alpha dT
              = (2.0 x 10^11)(1.2 x 10^-5)(40)

       First:  (2.0 x 10^11)(1.2 x 10^-5) = 2.4 x 10^6
       Then :  2.4 x 10^6 x 40 = 9.6 x 10^7 N/m^2

       STRESS = 9.6 x 10^7 Pa

  (b)  F = stress x A
         = (9.6 x 10^7)(1 x 10^-4)
         = 9.6 x 10^3 N

       FORCE = 9600 N   (about the weight of a small car)
```

> **TRAP:** Students plug in the length. There is **no length** in the stress
> formula. If you see `L` in your working, you have made a mistake.

---

# TOPIC 6 — WHERE EXPANSION SHOWS UP IN REAL LIFE

## (a) Gaps in railway tracks and bridges

```
     rail 1                        gap                      rail 2
  =============================     ||     =============================
                                    ^
                          left deliberately empty

  In summer the rails expand and close the gap.
  Without it, the stress would BUCKLE the track:

         =====\        /=====
               \______/           <-- buckled rail: derailment
```

Modern bridges use **expansion joints** and **roller supports** for the same
reason.

## WORKED EXAMPLE 6.1

*Each railway rail is 12 m long. The temperature varies between 10 degC in
winter and 50 degC in summer. What minimum gap must be left between rails?
alpha = 1.2 x 10^-5 /degC.*

**SOLUTION**

```
  dT = 50 - 10 = 40 degC

  dL = alpha L dT
     = (1.2 x 10^-5)(12)(40)
     = 5.76 x 10^-3 m
     = 5.76 mm

  ANSWER: a gap of at least about 5.8 mm
```

## (b) The bimetallic strip

Rivet two strips of **different** metals together face to face. Heat them. The
one with the larger `alpha` gets longer, so the strip **bends**, and it bends
with the *more* expansive metal on the *outside*.

```
   AT ROOM TEMPERATURE
   +======================================+   brass  (alpha large)
   +======================================+   iron   (alpha small)

   HEATED
              ___----================----___          brass on OUTSIDE
        __----========================------__        (longer arc)
       ==============================________
              iron on the INSIDE

   COOLED
       ==============================________
        __----========================------__        bends the OTHER way,
              ___----================----___          brass on the inside
```

**Use:** the automatic switch (thermostat) in an iron, a fridge, a fire alarm,
a flashing indicator lamp.

```
                       contact
      +-------o          /o--------- to heater
      |    bimetallic   /
      |    strip  =====/
      |                 when hot -> strip bends away -> circuit BREAKS
      |                 when cool -> strip straightens -> circuit MAKES
```

## (c) The pendulum clock

```
                     L
     T  =  2 pi sqrt --- ,     so    T  is proportional to  sqrt(L)
                     g
```

Summer -> the pendulum rod expands -> `L` increases -> `T` increases ->
**each swing takes longer** -> the clock **LOSES time** (runs slow).

Winter -> the opposite -> the clock **GAINS time** (runs fast).

**Derivation of the time lost per day:**

```
  T  ~  sqrt(L)      ->      dT/T  =  (1/2) (dL/L)  =  (1/2) alpha dt

  In one day of 86400 seconds:

  +---------------------------------------------------------------------+
  |                                                                     |
  |   time lost per day  =  (1/2) x alpha x dt x 86400   seconds        |
  |                                                                     |
  |   (dt = the temperature RISE, alpha = of the pendulum rod)          |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 6.2

*A pendulum clock keeps correct time at 20 degC. How much time does it lose per
day at 40 degC? alpha = 1.2 x 10^-5 /degC.*

**SOLUTION**

```
  dt = 40 - 20 = 20 degC

  fractional change = (1/2) alpha dt
                    = (1/2)(1.2 x 10^-5)(20)
                    = 1.2 x 10^-4

  time lost per day = 1.2 x 10^-4 x 86400
                    = 10.368 s

  ANSWER: it LOSES about 10.4 seconds per day.
```

**That is why good pendulum rods are made of INVAR** (alpha = 1.2 x 10^-6,
ten times smaller than steel).

## (d) A metal scale reads wrong when hot

If a steel scale is correct at 20 degC and you use it at 40 degC, the *scale
divisions themselves* have grown, so the scale **under-reads**.

```
   true length  =  observed reading  x  ( 1 + alpha dT )
```

## WORKED EXAMPLE 6.3

*A steel metre scale is correct at 20 degC. At 40 degC it reads a rod as
50.00 cm. What is the true length of the rod? alpha = 1.2 x 10^-5 /degC.*

**SOLUTION**

```
  true = 50.00 x [ 1 + (1.2 x 10^-5)(20) ]
       = 50.00 x [ 1 + 2.4 x 10^-4 ]
       = 50.00 + 50.00 x 2.4 x 10^-4
       = 50.00 + 0.012
       = 50.012 cm
```

## (e) Other everyday cases

```
  * Hot glass tumbler cracks when cold water is poured in
      -> the inner surface contracts, the outer does not -> stress -> crack.
      Pyrex (borosilicate) has a tiny alpha, so it does not crack.

  * A tight metal lid on a glass jar opens after running it under hot water
      -> the metal lid (large alpha) expands more than the glass neck.

  * Overhead electric and telephone wires are strung with a SAG in summer
      -> so they do not snap when they contract in winter.

  * A steel tyre is fitted to a cart wheel by heating it, slipping it on,
      then cooling it so it grips ("shrink fitting").
```

---

# TOPIC 7 — THERMAL EXPANSION OF LIQUIDS: APPARENT AND REAL

## The problem

A liquid has no shape of its own, so it must be kept in a **vessel** — and when
you heat the liquid, **the vessel expands too**. So what you *see* rising in the
tube is not the full expansion of the liquid.

```
   BEFORE HEATING                  AFTER HEATING

   +---------+                    +-----------+
   |~~~~~~~~~|  <- liquid level   |~~~~~~~~~~~|  <- level you SEE
   |         |                    |           |
   |         |                    |           |   the VESSEL has also
   +---------+                    +-----------+   grown (dotted -> solid)

   What you SEE  =  (real expansion of liquid) - (expansion of vessel)
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  APPARENT expansion  =  the rise you actually OBSERVE               |
  |  REAL expansion      =  the true expansion of the liquid            |
  |                                                                     |
  |          gamma(real)  =  gamma(apparent)  +  gamma(vessel)          |
  |                                                                     |
  |  and  gamma(vessel) = 3 x alpha(vessel material)                    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 7.1

*The apparent coefficient of expansion of mercury in a glass vessel is
1.50 x 10^-4 /degC. The coefficient of linear expansion of glass is
0.90 x 10^-5 /degC. Find the real coefficient of cubical expansion of mercury.*

**SOLUTION**

```
  gamma(glass) = 3 x alpha(glass)
               = 3 x 0.90 x 10^-5
               = 2.7 x 10^-5
               = 0.27 x 10^-4  /degC

  gamma(real)  = gamma(apparent) + gamma(vessel)
               = 1.50 x 10^-4 + 0.27 x 10^-4
               = 1.77 x 10^-4  /degC

  ANSWER:  about 1.8 x 10^-4 /degC   (the standard book value for mercury)
```

## WORKED EXAMPLE 7.2

*A glass flask of volume 500 cm^3 is filled to the brim with mercury at
0 degC. How much mercury overflows when heated to 100 degC?
gamma(Hg) = 1.8 x 10^-4 /degC, alpha(glass) = 0.9 x 10^-5 /degC.*

**SOLUTION**

```
  The overflow is the APPARENT expansion.

  gamma(glass) = 3 x 0.9 x 10^-5 = 2.7 x 10^-5 = 0.27 x 10^-4

  gamma(app) = gamma(Hg) - gamma(glass)
             = 1.8 x 10^-4 - 0.27 x 10^-4
             = 1.53 x 10^-4 /degC

  overflow = V x gamma(app) x dT
           = 500 x 1.53 x 10^-4 x 100
           = 7.65 cm^3

  ANSWER: about 7.65 cm^3 of mercury spills out.
```

> **TRAP:** "How much overflows" always uses **apparent** expansion, never real.

---

# TOPIC 8 — THE ANOMALOUS EXPANSION OF WATER  *** exam favourite ***

## The rule that water breaks

Almost every substance expands on heating. **Water does not, between 0 degC and
4 degC.** In that range water **CONTRACTS** when heated.

```
  0 degC  --heat-->  4 degC     :  volume DECREASES, density INCREASES
  4 degC  --heat-->  100 degC   :  volume INCREASES, density DECREASES   (normal)
```

So water has its **MAXIMUM DENSITY at 4 degC** (1000 kg/m^3) and its
**MINIMUM VOLUME at 4 degC**.

## The two graphs (draw BOTH in the exam)

```
  GRAPH 1 :  DENSITY  vs  TEMPERATURE

  density
  (kg/m^3)
          |
   1000.0 |             ****
          |          ***    ***
    999.9 |        **           ***
          |      **                ****
    999.8 |    **                      ****
          |  **                            ****
    999.7 | *                                  ****
          |*
    999.6 |
          +----+----+----+----+----+----+----+----+---> temperature
          0    4    8   12   16   20   24   28   32     (degC)
               ^
               |
          MAXIMUM DENSITY AT 4 degC  =  1000 kg/m^3
          (density RISES from 0 to 4, then FALLS after 4)
```

```
  GRAPH 2 :  VOLUME  vs  TEMPERATURE   (of a fixed mass of water)

  volume
      |*                                          *
      | *                                      **
      |  *                                  **
      |   *                              ***
      |    **                         ***
      |      **                  *****
      |        ****        ******
      |            ********
      +-----+----+-------------------------------> temperature (degC)
      0     4
            ^
       MINIMUM VOLUME AT 4 degC
```

## Why it happens (one line is enough for the board)

Below 4 degC, water molecules start arranging themselves into the **open,
cage-like hydrogen-bonded structure of ice**, which contains empty space.
Building that open structure makes the volume *grow* as you cool, so cooling
below 4 degC makes water *less* dense.

## WHY IT MATTERS — how fish survive a frozen lake

This is the mark-earning part. Learn the sequence.

```
   WINTER:  the air above a lake falls below 0 degC.

   Stage 1   Surface water cools from, say, 10 degC toward 4 degC.
             As it cools it gets DENSER, so it SINKS.
             Warmer water rises to the surface to be cooled in turn.
             Convection currents mix the whole lake.

   Stage 2   The whole lake reaches 4 degC.

   Stage 3   Surface water now cools BELOW 4 degC.
             Now it becomes LESS dense, so it STAYS ON TOP.
             The circulation STOPS.

   Stage 4   The surface reaches 0 degC and freezes.
             Ice is even less dense (917 kg/m^3), so ICE FLOATS.

   Stage 5   Ice is a very poor conductor of heat, so the ice sheet
             acts as a BLANKET. The water underneath stays at 4 degC.

   RESULT:   fish and plants survive the winter in liquid water at 4 degC.


                      -15 degC air
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ##############  ICE  at 0 degC  ##############   <- floats, insulates
    ----------------------------------------------
              water just above 0 degC
      ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            water at 4 degC   (DENSEST -> at the bottom)
        <><       <><          <><         <><        <- fish alive
    ==============================================
                     lake bed
```

> **TRAP:** The bottom of the lake is at **4 degC**, not at 0 degC. Writing
> "0 degC at the bottom" loses the mark.

**Other consequences:** water pipes burst in winter (water expands as it
freezes); a sealed glass bottle full of water cracks in a freezer.

---

# TOPIC 9 — THERMAL EXPANSION OF GASES

Gases expand far more than liquids, and liquids far more than solids:

```
   alpha(solid)   <<   gamma(liquid)   <<   gamma(gas)

   10^-5              10^-4                10^-3
```

For gases you must state **which quantity is held constant**.

```
  +---------------------------------------------------------------------+
  |  AT CONSTANT PRESSURE  (Charles' law)                               |
  |                                                                     |
  |     V_t  =  V_0 ( 1 + gamma_P t )                                   |
  |                                                                     |
  |  AT CONSTANT VOLUME  (Gay-Lussac / Amontons' law)                   |
  |                                                                     |
  |     P_t  =  P_0 ( 1 + gamma_V t )                                   |
  |                                                                     |
  |  FOR AN IDEAL GAS BOTH COEFFICIENTS ARE THE SAME:                   |
  |                                                                     |
  |                          1                                          |
  |     gamma_P = gamma_V = -----  per degC  =  0.00366 per degC        |
  |                          273                                        |
  |                                                                     |
  |  IMPORTANT: this value is the SAME FOR EVERY GAS.                   |
  |             It does NOT depend on the gas at all.                   |
  +---------------------------------------------------------------------+
```

## Where absolute zero comes from

```
   V_t = V_0 ( 1 + t/273 )

   Put V_t = 0  ->   1 + t/273 = 0  ->  t = -273 degC

   The volume of an ideal gas would vanish at -273 degC.
   That is ABSOLUTE ZERO, and it is why the kelvin scale starts there.
```

Everything now folds into the **ideal gas equation**, which is Chapter 14:

```
                    P V  =  n R T            R = 8.314 J mol^-1 K^-1
```

## WORKED EXAMPLE 9.1

*A gas occupies 300 cm^3 at 27 degC. Find its volume at 127 degC at constant
pressure.*

**SOLUTION**

```
  ALWAYS convert to kelvin for gas laws.

     T1 = 27 + 273 = 300 K
     T2 = 127 + 273 = 400 K

     V1 / T1 = V2 / T2

     V2 = V1 x (T2 / T1)
        = 300 x (400 / 300)
        = 400 cm^3
```

---

# TOPIC 10 — SPECIFIC HEAT CAPACITY

## Everyday observation

Put a steel spoon and a cup of water on the same stove for one minute. The
spoon is scalding; the water is barely warm. Different substances need
*different amounts* of heat for the *same* temperature rise.

## The definitions, in order

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  HEAT CAPACITY (thermal capacity) of a BODY                         |
  |                                                                     |
  |          S  =  Q / dT           unit:  J / K                        |
  |                                                                     |
  |  = the heat needed to raise the temperature of the WHOLE BODY       |
  |    by 1 kelvin. Depends on the size of the body.                    |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  SPECIFIC HEAT CAPACITY of a SUBSTANCE                              |
  |                                                                     |
  |                    Q                                                |
  |          c  =  ---------        unit:  J kg^-1 K^-1                 |
  |                  m x dT                                             |
  |                                                                     |
  |  = the heat needed to raise the temperature of 1 KILOGRAM           |
  |    of the substance by 1 kelvin.                                    |
  |  Does NOT depend on the size of the body - it is a property of      |
  |  the MATERIAL.                                                      |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  MOLAR SPECIFIC HEAT CAPACITY                                       |
  |                                                                     |
  |                     Q                                               |
  |          C  =  -----------      unit:  J mol^-1 K^-1                |
  |                   n x dT                                            |
  |                                                                     |
  |  = the heat needed to raise the temperature of 1 MOLE by 1 kelvin.  |
  |                                                                     |
  |          C  =  M x c        (M = molar mass in kg/mol)              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The master heating equation

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |             Q  =  m  c  dT                                          |
  |                                                                     |
  |  USE THIS ONLY WHEN THE TEMPERATURE IS CHANGING.                    |
  |  During melting or boiling, dT = 0 and this formula gives ZERO -    |
  |  you must use Q = m L instead.                                      |
  +---------------------------------------------------------------------+
```

## Why water is special

```
  +--------------------+-----------------------+------------------------+
  |  SUBSTANCE         |  c ( J kg^-1 K^-1 )   |  c ( cal g^-1 degC^-1) |
  +--------------------+-----------------------+------------------------+
  |  WATER             |        4186           |        1.00            |
  |  Ice               |        2100           |        0.50            |
  |  Steam             |        2010           |        0.48            |
  |  Aluminium         |         900           |        0.215           |
  |  Iron / steel      |         450 - 500     |        0.11            |
  |  Copper            |         387           |        0.093           |
  |  Mercury           |         140           |        0.033           |
  |  Lead              |         128           |        0.031           |
  +--------------------+-----------------------+------------------------+

  WATER HAS THE HIGHEST SPECIFIC HEAT OF ANY COMMON SUBSTANCE.
```

Consequences worth quoting in an answer:

```
  * Water is the best COOLANT (car radiators, power stations) - it soaks
    up a lot of heat for a small temperature rise.
  * Coastal places have mild climates: the sea warms and cools slowly.
  * Hot water bottles stay warm for hours.
  * Farmers flood fields on a frosty night: the water releases heat slowly
    and protects the crop.
```

## WORKED EXAMPLE 10.1

*How much heat is needed to raise the temperature of 5 kg of water from
20 degC to 80 degC? c = 4186 J/kg/K.*

**SOLUTION**

```
  Q = m c dT
    = 5 x 4186 x (80 - 20)
    = 5 x 4186 x 60

  5 x 4186 = 20930
  20930 x 60 = 1,255,800

  Q = 1.2558 x 10^6 J  ~  1.26 x 10^6 J   (about 1.26 MJ)
```

## WORKED EXAMPLE 10.2

*A 2 kW immersion heater is placed in 3 kg of water at 25 degC. How long does
it take to reach 100 degC, assuming no losses?*

**SOLUTION**

```
  Q = m c dT = 3 x 4186 x 75

  3 x 4186 = 12558
  12558 x 75 = 941,850 J

  time = Q / P = 941850 / 2000 = 470.9 s

  ANSWER: about 471 s = 7 minutes 51 seconds
```

## WORKED EXAMPLE 10.3

*Find the molar specific heat capacity of water. (M = 18 g/mol,
c = 4186 J/kg/K.)*

**SOLUTION**

```
  M = 18 g/mol = 0.018 kg/mol

  C = M c = 0.018 x 4186 = 75.35 J mol^-1 K^-1

  ANSWER: about 75.3 J/mol/K
```

## WORKED EXAMPLE 10.4

*A copper block of mass 500 g cools from 90 degC to 30 degC.
How much heat does it release? c(Cu) = 387 J/kg/K.*

**SOLUTION**

```
  Q = m c dT
    = 0.500 x 387 x 60
    = 0.5 x 387 = 193.5 ;  193.5 x 60 = 11610

  Q = 11610 J  =  1.161 x 10^4 J   (released)
```

> **TRAP:** Mass must be in **kilograms** when `c` is in J/kg/K.
> Working in grams with 4186 is the single commonest arithmetic disaster
> in this chapter.

---

# TOPIC 11 — CALORIMETRY AND THE METHOD OF MIXTURES

## The principle

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   PRINCIPLE OF CALORIMETRY                                          |
  |                                                                     |
  |   When two bodies at different temperatures are mixed in an         |
  |   insulated container, heat flows from the hotter to the colder     |
  |   until they reach a COMMON temperature, and                        |
  |                                                                     |
  |            HEAT LOST BY THE HOT BODY                                |
  |                  =  HEAT GAINED BY THE COLD BODY                    |
  |                                                                     |
  |   (This is nothing but the LAW OF CONSERVATION OF ENERGY.)          |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The apparatus

```
        thermometer     stirrer
             |            |
          +--|------------|--+
          |  |            |  |   <-- insulating lid
      +---+---------------------+---+
      |   |                     |   |
      |   |   calorimeter       |   |  <-- polished copper vessel
      |   |   (copper)          |   |      (polished = poor radiator)
      |   |  ~~~~~~~~~~~~~~~~   |   |
      |   |  ~~~~ water ~~~~~   |   |
      |   +---------------------+   |
      |         wool / air lagging  |
      +-----------------------------+
             outer jacket
```

## Water equivalent

The calorimeter itself absorbs heat. To handle that we use its **water
equivalent** `w`:

```
   w  =  (mass of calorimeter) x (specific heat of calorimeter) / c_water

   Meaning: the mass of WATER that would absorb the same heat for the
   same temperature rise. It has the units of mass.

   Then just ADD w to the mass of water inside.
```

## The fixed 5-step method

```
  STEP 1   Assume the final common temperature is T.
  STEP 2   Write HEAT LOST by every body that COOLS:  m c (T_hot - T)
  STEP 3   Write HEAT GAINED by every body that WARMS: m c (T - T_cold)
           - and include latent heat terms if anything melts or boils.
  STEP 4   Set  LOST = GAINED.
  STEP 5   Solve for T. CHECK: T must lie between the two starting
           temperatures. If it doesn't, you made a sign error.
```

## WORKED EXAMPLE 11.1 (the basic one)

*200 g of water at 80 degC is mixed with 300 g of water at 20 degC.
Find the final temperature.*

**SOLUTION**

```
  Let the final temperature be T.

  Heat LOST by hot water   =  200 x c x (80 - T)
  Heat GAINED by cold water =  300 x c x (T - 20)

  c is the same on both sides -> it CANCELS. Masses may stay in grams.

     200 (80 - T)  =  300 (T - 20)
     16000 - 200 T =  300 T - 6000
     16000 + 6000  =  300 T + 200 T
     22000         =  500 T
     T             =  44 degC

  CHECK: 44 lies between 20 and 80.  Good.

  ANSWER: 44 degC
```

## WORKED EXAMPLE 11.2 (finding an unknown specific heat)

*A metal block of mass 100 g at 100 degC is dropped into 200 g of water at
20 degC contained in a calorimeter of water equivalent 20 g. The final
temperature is 25 degC. Find the specific heat capacity of the metal.*

**SOLUTION**

```
  Work in SI. c(water) = 4186 J/kg/K.

  HEAT LOST by the metal
       = m c dT
       = 0.100 x c x (100 - 25)
       = 0.100 x c x 75
       = 7.5 c

  HEAT GAINED by water + calorimeter
       = (0.200 + 0.020) x 4186 x (25 - 20)
       = 0.220 x 4186 x 5

       0.220 x 4186 = 920.92
       920.92 x 5   = 4604.6 J

  Set them equal:

       7.5 c = 4604.6
           c = 613.9 J kg^-1 K^-1

  ANSWER: about 614 J/kg/K
```

## WORKED EXAMPLE 11.3 (with a change of state hidden in it)

*50 g of ice at 0 degC is dropped into 200 g of water at 40 degC.
Find the final temperature. L(fusion) = 80 cal/g, c(water) = 1 cal/g/degC.*

**SOLUTION**

```
  STEP A - can all the ice melt? Check the heat budget first.

     Heat needed just to MELT all the ice
        = m L = 50 x 80 = 4000 cal

     Heat available if the water cools all the way to 0 degC
        = 200 x 1 x 40 = 8000 cal

     8000 > 4000, so YES, all the ice melts and there is heat left over.

  STEP B - now find the final temperature T.

     HEAT GAINED = melt the ice + warm that melted water from 0 to T
                 = 4000 + 50 x 1 x (T - 0)
                 = 4000 + 50 T

     HEAT LOST   = 200 x 1 x (40 - T)
                 = 8000 - 200 T

     4000 + 50 T = 8000 - 200 T
     50 T + 200 T = 8000 - 4000
     250 T = 4000
     T = 16 degC

  ANSWER: 16 degC
```

> **TRAP:** ALWAYS do STEP A. If the ice cannot all melt, the final answer is
> `0 degC` with a mixture of ice and water — and the question then asks *how
> much* ice remains. Jumping straight to an equation without checking is how
> students get answers like "-12 degC", which is impossible.

## WORKED EXAMPLE 11.4 (the case where the ice does NOT all melt)

*100 g of ice at 0 degC is dropped into 50 g of water at 40 degC.
What is the final state?*

**SOLUTION**

```
  Heat available from the water cooling to 0 degC
       = 50 x 1 x 40 = 2000 cal

  Heat needed to melt ALL the ice
       = 100 x 80 = 8000 cal

  2000 < 8000  ->  NOT all the ice melts.

  Mass of ice actually melted:

       m = 2000 / 80 = 25 g

  FINAL STATE:  temperature = 0 degC
                ice remaining  = 100 - 25 = 75 g
                water present  = 50 + 25  = 75 g
```

---

# TOPIC 12 — CHANGE OF STATE

## The vocabulary (know every word)

```
                        heat ->                heat ->
        SOLID  ==================  LIQUID  =================  GAS
               <- cool                    <- cool

        MELTING / FUSION           VAPORISATION / BOILING
        FREEZING / SOLIDIFICATION  CONDENSATION


                  SUBLIMATION  (solid  ->  gas directly)
        SOLID  ------------------------------------------>  GAS
               <------------------------------------------
                  DEPOSITION / HOARFROST  (gas -> solid)
```

```
  +--------------------+------------------------------------------------+
  |  MELTING POINT     |  the constant temperature at which a solid     |
  |                    |  changes to liquid at a given pressure         |
  |  BOILING POINT     |  the constant temperature at which a liquid    |
  |                    |  changes to vapour throughout its bulk         |
  |  SUBLIMATION       |  solid -> vapour with no liquid stage          |
  |                    |  e.g. dry ice (solid CO2), camphor, iodine,    |
  |                    |  naphthalene balls                             |
  |  TRIPLE POINT      |  the single pressure AND temperature at which  |
  |                    |  solid, liquid and vapour coexist in           |
  |                    |  equilibrium.  For water: 273.16 K, 0.61 kPa   |
  |  CRITICAL POINT    |  above this temperature a gas cannot be        |
  |                    |  liquefied by pressure alone.                  |
  |                    |  For water: 647 K, 221 atm                     |
  +--------------------+------------------------------------------------+
```

**The great fact about change of state:**

```
  +---------------------------------------------------------------------+
  |   DURING A CHANGE OF STATE THE TEMPERATURE DOES NOT CHANGE,         |
  |   EVEN THOUGH HEAT IS STILL BEING SUPPLIED.                         |
  |                                                                     |
  |   The energy goes into BREAKING THE BONDS between molecules,        |
  |   not into speeding them up.                                        |
  +---------------------------------------------------------------------+
```

## The P-T phase diagram of water

```
      P
      |                                              . C  CRITICAL POINT
      |  \                                        ..'    (647 K, 221 atm)
      |   \                                    ..'
      |    \                                ..'
      |     \        LIQUID              ..'
      |      \                        ..'
      |       \                    ..'      <-- VAPORISATION CURVE
   1  |........\................ ..'            (boiling point vs pressure)
  atm |         \             ..'|
      |  SOLID   \         ..'   |
      |  (ice)    \     ..'      |
      |            \ ..'         |
      |             \'           |  <-- FUSION CURVE, and for water it
0.61  |..............T           |      slopes BACKWARDS (negative slope)
 kPa  |            .'|           |
      |          .'  |           |
      |        .'    |     VAPOUR|
      |      .'      |           |
      |    .'  <-- SUBLIMATION CURVE
      |  .'          |           |
      +--------------+-----------+----------------------------> T
                  273.16 K     373 K
                  TRIPLE POINT (0.61 kPa)

  T = TRIPLE POINT : ice, water and steam all coexist here.
      For water:  273.16 K  and  0.61 kPa  (about 0.006 atm)
```

**Read the diagram like this:**

```
  * Any POINT in a region  -> only one phase exists there.
  * Any point ON a curve   -> TWO phases coexist in equilibrium.
  * The single point T     -> all THREE phases coexist.
  * Move right (heat up) at 1 atm: ice -> water at 273 K -> steam at 373 K.
```

## Effect of pressure on melting point

There are two opposite behaviours. You must state which one you mean.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  SUBSTANCES THAT EXPAND ON MELTING  (wax, most metals, sulphur)     |
  |      -> increasing the pressure RAISES the melting point            |
  |      -> the fusion curve slopes FORWARD (positive slope)            |
  |                                                                     |
  |  SUBSTANCES THAT CONTRACT ON MELTING  (WATER/ICE, cast iron, Bi)    |
  |      -> increasing the pressure LOWERS the melting point            |
  |      -> the fusion curve slopes BACKWARD (negative slope)           |
  |                                                                     |
  |  ICE IS THE FAMOUS EXCEPTION: press ice and it melts BELOW 0 degC.  |
  +---------------------------------------------------------------------+
```

## REGELATION

```
   REGELATION = the phenomenon in which ice MELTS under pressure and
                RE-FREEZES when the pressure is removed.
```

**The classic demonstration:**

```
      thin copper wire with heavy weights hung on it
                    |
                    v
      #########################################   block of ice
      ####===================================##   <- wire cuts through
      #########################################
             |                    |
            W                    W

  * Under the wire the pressure is huge -> the ice there melts
    below 0 degC.
  * The melt-water flows around and above the wire, where the
    pressure is normal -> it RE-FREEZES.
  * The wire sinks all the way through, and yet the block is
    left in ONE SOLID PIECE.
```

**Everyday consequences:** two ice cubes pressed together stick; ice skating
works because pressure from the thin blade produces a lubricating film of water;
snowballs can be squeezed into a solid ball.

## Effect of pressure on boiling point

```
   PRESSURE UP    ->   BOILING POINT UP
   PRESSURE DOWN  ->   BOILING POINT DOWN

   Reason: boiling happens when the saturated vapour pressure of the
   liquid equals the external pressure. Raise the external pressure
   and the liquid must get hotter before it can match it.
```

```
  +-----------------------------------+---------------------------------+
  |  PRESSURE COOKER                  |  pressure inside ~ 2 atm ->     |
  |                                   |  water boils at ~ 120 degC ->   |
  |                                   |  food cooks much faster         |
  +-----------------------------------+---------------------------------+
  |  ON A HIGH MOUNTAIN               |  air pressure is low -> water   |
  |                                   |  boils at ~ 90 degC -> rice     |
  |                                   |  will not cook properly         |
  +-----------------------------------+---------------------------------+
  |  Boiling water in a flask stops   |  reducing the pressure lowers   |
  |  boiling, then boils again when   |  the boiling point below the    |
  |  you suck out the air             |  water's current temperature    |
  +-----------------------------------+---------------------------------+
```

## Evaporation vs boiling (a favourite 2-mark comparison)

```
  +-------------------------+---------------------------+
  |  EVAPORATION            |  BOILING                  |
  +-------------------------+---------------------------+
  |  At ALL temperatures    |  Only at the boiling pt   |
  |  Only at the SURFACE    |  Throughout the BULK      |
  |  Slow and quiet         |  Fast, with bubbles       |
  |  Causes COOLING         |  Needs continuous heating |
  +-------------------------+---------------------------+

  Evaporation causes cooling because the FASTEST molecules escape,
  lowering the average energy of those left behind.
  -> that is why sweating cools you, and why water stays cool
     in an earthen pot (matka).
```

---

# TOPIC 13 — LATENT HEAT

## Definition

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     LATENT HEAT L  =  the heat required to change the STATE of      |
  |                       unit mass of a substance at CONSTANT          |
  |                       temperature.                                  |
  |                                                                     |
  |                Q  =  m  L                                           |
  |                                                                     |
  |     UNIT: J/kg     ("latent" is Latin for HIDDEN - the heat goes    |
  |                      in but the thermometer shows nothing)          |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  +-------------------------------+-------------------+-----------------+
  |  LATENT HEAT OF ...           |  SI value         |  CGS value      |
  +-------------------------------+-------------------+-----------------+
  |  FUSION of ice     (Lf)       |  3.33 x 10^5 J/kg |   80 cal/g      |
  |  VAPORISATION of water (Lv)   |  22.6 x 10^5 J/kg |  540 cal/g      |
  +-------------------------------+-------------------+-----------------+

  Lv is nearly 7 times Lf. That is why STEAM BURNS ARE FAR WORSE
  THAN BOILING-WATER BURNS: 1 g of steam at 100 degC dumps an extra
  540 cal into your skin before it even starts to cool.
```

## *** THE ICE-TO-STEAM GRAPH — draw this in the exam ***

Take **1 kg of ice at -20 degC** and heat it steadily until it is
**steam at 120 degC**.

```
  Temperature
   (degC)
    |
 120+                                                            E
    |                                                           /
    |                                                          /  (5)
 100+.......................D-------------------------------E'
    |                      /|                                |
    |                     / |                                |
    |                    /  |            (4)                 |
    |               (3) /   |        FLAT: boiling           |
    |                  /    |        temp does NOT move      |
    |                 /     |                                |
    |                /      |                                |
    |               /       |                                |
   0+......B-------C        |                                |
    |     /|       |        |                                |
    |(1) / |  (2)  |        |                                |
    |   /  |  FLAT |        |                                |
 -20+--A   |melting|        |                                |
    |      |       |        |                                |
    +------+-------+--------+--------------------------------+------>
   0    4.2e4   3.75e5   7.94e5                          3.05e6  3.09e6
                                                              Heat (J)

   STAGE (1)  A -> B    ICE warms  -20 -> 0 degC        SLOPED
   STAGE (2)  B -> C    ICE MELTS at 0 degC             FLAT   <- latent
   STAGE (3)  C -> D    WATER warms 0 -> 100 degC       SLOPED
   STAGE (4)  D -> E'   WATER BOILS at 100 degC         FLAT   <- latent
   STAGE (5)  E'-> E    STEAM warms 100 -> 120 degC     SLOPED
```

**Read three things off this graph:**

```
  1.  A FLAT part means a change of STATE (all the heat is latent).
  2.  A SLOPED part means a temperature change (Q = m c dT).
  3.  Stage 4 is by far the LONGEST flat part, because
      Lv (22.6e5) is nearly 7 times Lf (3.33e5).
      Draw it clearly longer than stage 2 - examiners look for that.
```

## *** WORKED EXAMPLE 13.1 — the full five-stage calculation ***

*Calculate the total heat required to convert 1 kg of ice at -20 degC into
steam at 120 degC.*

```
  Data:  c(ice)   = 2100 J/kg/K
         c(water) = 4186 J/kg/K
         c(steam) = 2010 J/kg/K
         Lf       = 3.33 x 10^5 J/kg
         Lv       = 22.6 x 10^5 J/kg
```

**SOLUTION — one stage at a time**

```
  STAGE 1 : ICE from -20 degC to 0 degC
     Q1 = m c(ice) dT
        = 1 x 2100 x 20
        = 42,000 J                      =  0.42 x 10^5 J

  STAGE 2 : MELT the ice at 0 degC
     Q2 = m Lf
        = 1 x 3.33 x 10^5
        = 333,000 J                     =  3.33 x 10^5 J

  STAGE 3 : WATER from 0 degC to 100 degC
     Q3 = m c(water) dT
        = 1 x 4186 x 100
        = 418,600 J                     =  4.186 x 10^5 J

  STAGE 4 : BOIL the water at 100 degC
     Q4 = m Lv
        = 1 x 22.6 x 10^5
        = 2,260,000 J                   = 22.6 x 10^5 J

  STAGE 5 : STEAM from 100 degC to 120 degC
     Q5 = m c(steam) dT
        = 1 x 2010 x 20
        = 40,200 J                      =  0.402 x 10^5 J

  ------------------------------------------------------------------
  TOTAL  Q = 42000 + 333000 + 418600 + 2260000 + 40200

           = 3,093,800 J

           = 3.09 x 10^6 J     (about 3.1 MJ)
  ------------------------------------------------------------------

  NOTICE:  stage 4 alone is 2.26 x 10^6 J - that is 73% of the
           whole answer. Boiling water is the expensive part.
```

## WORKED EXAMPLE 13.2

*How much heat is needed to convert 20 g of ice at 0 degC into water at
30 degC?*

**SOLUTION**

```
  m = 20 g = 0.020 kg

  Melt it:      Q1 = m Lf = 0.020 x 3.33 x 10^5 = 6660 J
  Warm it:      Q2 = m c dT = 0.020 x 4186 x 30

                0.020 x 4186 = 83.72
                83.72 x 30   = 2511.6 J

  TOTAL = 6660 + 2511.6 = 9171.6 J  ~  9.17 x 10^3 J
```

## WORKED EXAMPLE 13.3 (why steam scalds)

*Compare the heat delivered to your skin (assume the skin is at 40 degC) by
(a) 1 g of boiling water at 100 degC, (b) 1 g of steam at 100 degC.*

**SOLUTION (in calories, easiest here)**

```
  (a)  water 100 -> 40 :   Q = 1 x 1 x 60  =  60 cal

  (b)  steam condenses  :   Q = 1 x 540    = 540 cal
       then water 100 -> 40 : Q = 60 cal
       TOTAL                          =  600 cal

  Steam delivers TEN TIMES the heat.
```

## WORKED EXAMPLE 13.4

*Steam at 100 degC is passed into 100 g of water at 20 degC until the water
reaches 60 degC. How much steam condensed?*

**SOLUTION**

```
  Let the mass of steam be m grams.

  HEAT GIVEN by the steam
     = condense at 100 degC  +  cool that water from 100 to 60
     = m x 540  +  m x 1 x 40
     = 540 m + 40 m
     = 580 m

  HEAT TAKEN by the cold water
     = 100 x 1 x (60 - 20)
     = 4000 cal

  580 m = 4000
      m = 6.90 g

  ANSWER: about 6.9 g of steam condenses.
```

---

# TOPIC 14 — HEAT TRANSFER 1: CONDUCTION

## What conduction is

```
   CONDUCTION = the transfer of heat from the hotter to the colder part
                of a body WITHOUT any bulk movement of the material.
```

Heat one end of a metal rod. The atoms there vibrate harder, knock into their
neighbours, and pass the vibration along. In metals there are also **free
electrons**, which carry energy very fast — that is exactly why **metals are
good conductors** and non-metals are not.

```
     FLAME                                              cold end
       )))  ####################################################
       )))  ->  ->   ->    ->     ->      ->       ->
            energy passed atom to atom; the atoms themselves
            stay where they are
```

## Steady state

```
   STEADY STATE = the condition in which the temperature at every point
                  of the rod has become CONSTANT in time (though it
                  still varies from point to point along the rod).

   Only after steady state is reached does the simple formula apply.

   T |*
     |  *
     |    *          temperature falls uniformly along a
     |      *        lagged (insulated) uniform rod
     |        *
     |          *
     +-------------------> distance along the rod
```

## The conduction formula

Consider a slab of area `A`, thickness `L`, with faces at `T1` and `T2`
(with `T1 > T2`):

```
                +---------------------+
                |                     |
        T1 -->  |     material K      |  --> T2
        HOT     |                     |     COLD
                +---------------------+
                |<-------- L -------->|
                    area of face = A
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                     Q          K  A  ( T1 - T2 )                    |
  |             H  =  -----   =  ---------------------                  |
  |                     t                  L                            |
  |                                                                     |
  |  H = rate of flow of heat  (watt, W = J/s)                          |
  |  K = COEFFICIENT OF THERMAL CONDUCTIVITY                            |
  |                                                                     |
  |  UNIT of K :   W m^-1 K^-1                                          |
  |  DIMENSIONS :  [ M L T^-3 K^-1 ]                                    |
  |                                                                     |
  |  DEFINITION OF K: the rate of flow of heat per unit area per unit   |
  |  temperature gradient, in the steady state.                         |
  |                                                                     |
  |  (T1 - T2)/L  is called the TEMPERATURE GRADIENT.                   |
  +---------------------------------------------------------------------+
```

## Thermal resistance — the trick that makes slab problems easy

Compare with electricity and everything becomes automatic:

```
  +-------------------------+---------------------------------+
  |  ELECTRICITY            |  HEAT                           |
  +-------------------------+---------------------------------+
  |  charge  q              |  heat  Q                        |
  |  current I = q/t        |  heat current H = Q/t           |
  |  potential difference V |  temperature difference dT      |
  |  resistance R = rho L/A |  thermal resistance R = L/(K A) |
  |  I = V / R              |  H = dT / R                     |
  +-------------------------+---------------------------------+
```

```
  +---------------------------------------------------------------------+
  |                        L                            dT              |
  |   THERMAL RESISTANCE  R  =  --------      and   H = ----            |
  |                              K  A                    R              |
  |                                                                     |
  |   UNIT of R :  K/W                                                  |
  |                                                                     |
  |   IN SERIES    :  R = R1 + R2 + ...                                 |
  |   IN PARALLEL  :  1/R = 1/R1 + 1/R2 + ...                           |
  +---------------------------------------------------------------------+
```

## Typical conductivities

```
  +-------------------+---------------------+---------------------------+
  |  MATERIAL         |  K (W m^-1 K^-1)    |                           |
  +-------------------+---------------------+---------------------------+
  |  Silver           |  ~ 420              |  BEST conductor           |
  |  Copper           |  ~ 385              |                           |
  |  Aluminium        |  ~ 205              |                           |
  |  Steel            |  ~ 50               |                           |
  |  Glass            |  ~ 0.8              |                           |
  |  Water            |  ~ 0.6              |                           |
  |  Brick            |  ~ 0.6              |                           |
  |  Wood             |  ~ 0.05 - 0.1       |                           |
  |  Air (still)      |  ~ 0.024            |  BEST cheap insulator     |
  +-------------------+---------------------+---------------------------+
```

**The key insight:** the very best cheap insulators are all just clever ways to
**trap still air** — wool, cotton, a woollen blanket, the double wall of a
thermos flask, the fur of an animal, snow.

## Everyday explanations that are worth marks

```
  * A metal chair and a wooden chair in the same room are at the SAME
    temperature, but the metal one FEELS colder because its large K
    conducts heat out of your hand quickly.

  * Two thin blankets are warmer than one thick one - the layer of
    trapped AIR between them is a superb insulator.

  * Cooking pots are METAL (large K) with WOODEN or plastic HANDLES
    (small K).

  * Eskimos build igloos of snow: snow traps air, so K is tiny.

  * Birds fluff up their feathers in winter to trap more air.
```

## WORKED EXAMPLE 14.1

*One end of a copper rod of length 0.5 m and cross-section 4 cm^2 is kept at
100 degC and the other at 0 degC. The sides are lagged. Find the rate of heat
flow. K(Cu) = 385 W/m/K.*

**SOLUTION**

```
  A = 4 cm^2 = 4 x 10^-4 m^2
  L = 0.5 m
  dT = 100 K

        K A dT       385 x 4 x 10^-4 x 100
  H  =  --------  =  -----------------------
           L                  0.5

  385 x 4 x 10^-4 = 0.154
  0.154 x 100     = 15.4
  15.4 / 0.5      = 30.8

  H = 30.8 W        (i.e. 30.8 joules every second)
```

## WORKED EXAMPLE 14.2

*Find the rate of heat loss through a glass window of area 2 m^2 and thickness
4 mm when the inside is at 25 degC and the outside at 5 degC.
K(glass) = 0.8 W/m/K.*

**SOLUTION**

```
  L = 4 mm = 4 x 10^-3 m ,  A = 2 m^2 ,  dT = 20 K

        0.8 x 2 x 20        32
  H  =  --------------  =  --------  =  8000 W
         4 x 10^-3         4 x 10^-3

  H = 8 kW

  (A huge number - which is exactly why real windows are DOUBLE GLAZED,
   with a layer of air in between.)
```

## COMPOUND SLABS — IN SERIES

Two slabs stuck face to face. **The same heat flows through both**
(it has nowhere else to go).

```
       T1   +-----------+-----------+   T2
      HOT   |  K1, L1   |  K2, L2   |  COLD
            |           |           |
            +-----------+-----------+
                        ^
                   junction at temperature T
```

```
  +---------------------------------------------------------------------+
  |  Series:   R = R1 + R2                                              |
  |                                                                     |
  |             T1 - T2                    T1 - T2                      |
  |     H  =  -----------   =   ------------------------------          |
  |            R1 + R2            L1/(K1 A)  +  L2/(K2 A)               |
  |                                                                     |
  |  EQUIVALENT CONDUCTIVITY (same area, thicknesses L1 and L2):        |
  |                                                                     |
  |                    L1 + L2                                          |
  |       K_eq  =  -----------------                                    |
  |                 L1/K1  +  L2/K2                                     |
  |                                                                     |
  |  If L1 = L2 = L :        K_eq  =  2 K1 K2 / ( K1 + K2 )             |
  |                                                                     |
  |  JUNCTION TEMPERATURE:                                              |
  |                                                                     |
  |             (K1 T1 / L1)  +  (K2 T2 / L2)                           |
  |       T  =  --------------------------------                        |
  |               (K1 / L1)   +  (K2 / L2)                              |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 14.3

*Two slabs of equal thickness and equal area are joined. Their conductivities
are K and 2K. The outer face of the first is at 100 degC and the outer face of
the second is at 0 degC. Find the junction temperature.*

**SOLUTION**

```
  L1 = L2 = L ,  K1 = K ,  K2 = 2K ,  T1 = 100 ,  T2 = 0

  Because the SAME heat flows through both:

       K A (100 - T)        2K A (T - 0)
     ----------------  =  ----------------
             L                    L

  Cancel A, L and K:

       100 - T  =  2 T
       100      =  3 T
       T        =  33.3 degC

  ANSWER: the junction is at 33.3 degC.

  SENSE CHECK: the junction sits CLOSER to the cold end, because
  the second slab conducts better and needs less of the temperature
  drop to push the same heat through.
```

## COMPOUND SLABS — IN PARALLEL

Two slabs **side by side**, both connecting the same hot face to the same cold
face. Now the temperature difference is the same for both, and the **heats add**.

```
       +---------------+
   T1  |   K1 , A1     |  T2
       +---------------+
       |   K2 , A2     |
       +---------------+
       |<----- L ----->|
```

```
  +---------------------------------------------------------------------+
  |  Parallel:   H = H1 + H2      and      1/R = 1/R1 + 1/R2            |
  |                                                                     |
  |                    K1 A1  +  K2 A2                                  |
  |       K_eq  =  ------------------------                             |
  |                      A1  +  A2                                      |
  |                                                                     |
  |  If A1 = A2 :      K_eq  =  ( K1 + K2 ) / 2                         |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 14.4

*Two rods of the same length and same cross-section, of conductivities
K1 = 100 and K2 = 300 W/m/K, are joined side by side between the same two
temperatures. Find the equivalent conductivity.*

**SOLUTION**

```
  Equal areas, so

      K_eq = (K1 + K2)/2 = (100 + 300)/2 = 200 W/m/K
```

> **TRAP:** Series and parallel are easy to confuse.
> **SERIES = one after the other = the SAME HEAT flows through both.**
> **PARALLEL = side by side = the SAME TEMPERATURE DIFFERENCE across both.**
> Draw the picture before you write a single symbol.

---

# TOPIC 15 — HEAT TRANSFER 2: CONVECTION

## What convection is

```
   CONVECTION = the transfer of heat by the ACTUAL BULK MOVEMENT of the
                heated material itself.

   It happens ONLY in fluids (liquids and gases).
   It CANNOT happen in solids, and it CANNOT happen in a vacuum.
```

## Why the fluid moves

```
   Heat the bottom of a pot of water:

              cooler, denser water sinks
        |  ^                          ^  |
        v  |                          |  v
       +---|--------------------------|---+
       |   |    <--  <--  <--  <--    |   |
       |   +--> warm, LESS DENSE  ----+   |
       |        water RISES              |
       +----------------------------------+
              ))))  FLAME  ((((

   1. The bottom layer is heated -> it EXPANDS -> its DENSITY falls.
   2. Buoyancy pushes the lighter warm fluid UPWARDS.
   3. Cooler, denser fluid sinks to take its place.
   4. A CONVECTION CURRENT is set up, carrying heat round the pot.
```

## The two kinds

```
  +---------------------+-----------------------------------------------+
  |  NATURAL (free)     |  the flow is caused by gravity acting on the  |
  |  CONVECTION         |  density differences alone                    |
  |                     |  e.g. boiling water, sea breeze, chimney      |
  |                     |       smoke, a room heater warming a room     |
  +---------------------+-----------------------------------------------+
  |  FORCED             |  the fluid is pushed by a pump, fan or blower |
  |  CONVECTION         |  e.g. a ceiling fan, a car radiator, a hair   |
  |                     |       dryer, the human circulatory system     |
  |                     |       (the heart pumps blood that carries     |
  |                     |        heat from the core to the skin)        |
  +---------------------+-----------------------------------------------+
```

## SEA BREEZE and LAND BREEZE (learn both diagrams)

The whole thing rests on one fact: **land heats up and cools down much faster
than water, because water has a very high specific heat.**

```
  DAY  -  SEA BREEZE  (blows FROM the sea TO the land)

                    hot air rises
                        ^ ^ ^
       ~~~~~~~~~~~~~    | | |    ############
       ~~ COOL SEA ~~   | | |    ## HOT LAND ##
       ~~~~~~~~~~~~~    | | |    ############
              ----->  ----->  ----->
              cool air moves in from the sea = SEA BREEZE


  NIGHT  -  LAND BREEZE  (blows FROM the land TO the sea)

                 hot air over the sea rises
                        ^ ^ ^
       ~~~~~~~~~~~~~    | | |    ############
       ~~ WARM SEA ~~   | | |    # COOL LAND #
       ~~~~~~~~~~~~~    | | |    ############
              <-----  <-----  <-----
              cool air moves out from the land = LAND BREEZE
```

## The trade winds

```
   The Sun heats the EQUATOR most strongly.
   Hot air rises at the equator and flows toward the poles high up.
   Cool surface air flows from the tropics toward the equator to replace it.
   The Earth's ROTATION deflects that flow sideways (the Coriolis effect),
   so the winds arrive from the north-east in the northern hemisphere
   and from the south-east in the southern hemisphere.
   These steady winds are the TRADE WINDS - a giant convection current.
```

## Other convection applications

```
  * VENTILATORS are placed NEAR THE CEILING of a room, because the hot,
    used, lighter air collects at the top and must be let out there.
  * A CHIMNEY is tall so the rising hot gases create a strong draught.
  * A ROOM HEATER placed on the FLOOR warms the whole room; placed on
    the ceiling it would warm almost nothing.
  * A REFRIGERATOR'S freezer box is at the TOP, so the cooled dense air
    sinks and cools everything below it.
  * The MONSOON is a seasonal convection current on a continental scale.
```

> **TRAP:** In an exam, "why is the ventilator near the ceiling?" is a
> convection question, not a conduction one. The keyword is **hot air is
> LIGHTER and RISES**.

---

# TOPIC 16 — HEAT TRANSFER 3: RADIATION, AND THE BLACK BODY

## What radiation is

```
   RADIATION = the transfer of heat by ELECTROMAGNETIC WAVES,
               requiring NO material medium at all.
```

**This is how the Sun's heat reaches us across 150 million km of empty space.**

```
  +---------------------------------------------------------------------+
  |  PROPERTIES OF THERMAL RADIATION (= INFRARED radiation)             |
  |                                                                     |
  |   1. Needs NO medium - travels through vacuum.                      |
  |   2. Travels at the SPEED OF LIGHT, 3 x 10^8 m/s.                   |
  |   3. Travels in STRAIGHT LINES.                                     |
  |   4. Obeys the INVERSE SQUARE LAW.                                  |
  |   5. Can be REFLECTED, REFRACTED, and shows                         |
  |      INTERFERENCE, DIFFRACTION and POLARISATION.                    |
  |   6. Does NOT heat the medium it passes through                     |
  |      (that is why the upper atmosphere stays cold).                 |
  |   7. Every body above 0 K emits it, at ALL temperatures.            |
  |   8. Its wavelength is longer than red light                        |
  |      (about 700 nm up to 1 mm) - it is INFRARED.                    |
  +---------------------------------------------------------------------+
```

## Comparison of the three modes (a standard 4-mark table)

```
  +--------------+------------------+------------------+-----------------+
  |              |  CONDUCTION      |  CONVECTION      |  RADIATION      |
  +--------------+------------------+------------------+-----------------+
  |  Medium      |  needed          |  needed          |  NOT needed     |
  |  Occurs in   |  mainly SOLIDS   |  FLUIDS only     |  anything,      |
  |              |                  |                  |  incl. vacuum   |
  |  Matter      |  does NOT move   |  MOVES in bulk   |  does not move  |
  |  Speed       |  slow            |  slow            |  speed of light |
  |  Path        |  through matter  |  fluid currents  |  STRAIGHT LINES |
  |  Example     |  spoon in tea    |  boiling water   |  heat of the    |
  |              |                  |                  |  Sun            |
  +--------------+------------------+------------------+-----------------+
```

## What happens to radiation falling on a body

```
   Incident radiation Q  splits three ways:

                        /---> REFLECTED   Qr
       Q  ------------ +----> ABSORBED    Qa
                        \---> TRANSMITTED Qt

       Qr + Qa + Qt  =  Q

       divide by Q:      r  +  a  +  t  =  1

       r = reflectance,  a = absorptance,  t = transmittance
```

## The PERFECTLY BLACK BODY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   A PERFECTLY BLACK BODY is one that ABSORBS the WHOLE of the       |
  |   radiation of EVERY wavelength that falls on it, reflecting        |
  |   and transmitting none.                                            |
  |                                                                     |
  |        For a black body:   a = 1 ,  r = 0 ,  t = 0                  |
  |                                                                     |
  |   A perfectly black body is also the BEST POSSIBLE EMITTER at       |
  |   any given temperature: its emissivity e = 1.                      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**No real surface is perfectly black.** Lamp-black absorbs about 96%, platinum
black about 98%. But a black body can be *made* as a cavity:

```
   FERY'S BLACK BODY  (a hollow sphere blackened inside,
                       with one tiny hole)

              ___________________
            /  \      \    /    /\
           |    \      \  /    /  |     a ray entering the hole is
       ----|-->  \      \/    /   |     reflected again and again,
      hole |      \     /\   /    |     losing energy each time, and
           |       \   /  \ /     |     has almost NO chance of
            \       \ /    v     /      escaping.
              \_____ v ________ /
                    conical projection
                    (prevents direct reflection back out)

   THE HOLE - not the sphere - behaves as the perfectly black body.
   Heat the sphere and the hole becomes the perfect EMITTER too.
```

## Absorptive power and emissive power (learn these definitions exactly)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  ABSORPTIVE POWER  a                                                |
  |                                                                     |
  |        radiant energy ABSORBED by the surface in unit time          |
  |   a = ---------------------------------------------------------     |
  |        radiant energy INCIDENT on the surface in unit time          |
  |                                                                     |
  |   * a pure RATIO -> DIMENSIONLESS, no unit                          |
  |   * for a perfectly black body,  a = 1                              |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  EMISSIVE POWER  e   (also called emittance)                        |
  |                                                                     |
  |   e = the radiant energy EMITTED per unit surface area per unit     |
  |       time by the body at a given temperature                       |
  |                                                                     |
  |   * UNIT:  W m^-2         DIMENSIONS: [ M T^-3 ]                    |
  |   * it is NOT a ratio - it has units                                |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  EMISSIVITY  e (the ratio version, 0 to 1)                          |
  |                                                                     |
  |          emissive power of the body                                 |
  |   e =  ---------------------------------                            |
  |         emissive power of a black body at the same temperature      |
  |                                                                     |
  |   black body e = 1 ,  polished silver e ~ 0.02                      |
  +---------------------------------------------------------------------+
```

> **TRAP:** Absorptive power is a **ratio with no unit**; emissive power has the
> unit **W/m^2**. Being asked to "distinguish between absorptive power and
> emissive power" is a standard 2-mark question, and the unit is half the mark.

---

# TOPIC 17 — KIRCHHOFF'S LAW OF RADIATION  *** top 4-mark question ***

## Statement

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   KIRCHHOFF'S LAW                                                   |
  |                                                                     |
  |   At a given temperature and for a given wavelength, the ratio of   |
  |   the emissive power to the absorptive power is the SAME for ALL    |
  |   bodies, and is equal to the emissive power of a PERFECTLY BLACK   |
  |   BODY at that temperature.                                         |
  |                                                                     |
  |                    e                                                |
  |                  -----  =  E                                        |
  |                    a                                                |
  |                                                                     |
  |   where E = emissive power of a black body at that temperature.     |
  |                                                                     |
  |   IN PLAIN WORDS:                                                   |
  |                                                                     |
  |          GOOD ABSORBERS ARE GOOD EMITTERS.                          |
  |          POOR ABSORBERS ARE POOR EMITTERS.                          |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Proof (the "enclosure" argument — write this out)

```
   Take a body B and place it inside a PERFECTLY BLACK ENCLOSURE
   which is kept at a constant temperature T.

        +-----------------------------------+
        |   black enclosure at temperature T|
        |                                   |
        |        +-----------+              |
        |   -->  |   body B  |  -->         |
        |        |  (a, e)   |              |
        |        +-----------+              |
        |                                   |
        +-----------------------------------+

   Step 1  After some time, B comes into THERMAL EQUILIBRIUM with the
           enclosure and settles at the same temperature T.

   Step 2  At equilibrium the temperature of B does not change, so

                  energy ABSORBED by B per second
                        =  energy EMITTED by B per second

   Step 3  Let E be the radiation falling on unit area of B per second
           from the enclosure (this is the black-body emissive power at
           temperature T).

           Energy absorbed per unit area per second  =  a x E
           Energy emitted  per unit area per second  =  e

   Step 4  Equate them:

                  e  =  a  E

                  e / a  =  E

   Step 5  E depends ONLY on the temperature of the enclosure - not on
           what B is made of. Therefore e/a is the same for EVERY body
           at that temperature.

                          HENCE PROVED.
```

## Consequences and applications

```
  1. A GOOD ABSORBER IS A GOOD EMITTER.
     -> a black surface both absorbs and radiates best.

  2. THE BOTTOM OF A COOKING VESSEL IS BLACKENED
     -> so it absorbs the maximum heat from the flame.

  3. THE SIDES OF A COOKING VESSEL ARE POLISHED
     -> polished surfaces are poor emitters, so less heat is wasted.

  4. WHITE CLOTHES IN SUMMER, DARK CLOTHES IN WINTER.

  5. A THERMOS FLASK is silvered on both walls
     -> a silvered surface is a poor absorber AND a poor emitter,
        so radiation loss is minimised.

  6. HEAT RADIATORS in a room are painted BLACK.

  7. THE SODIUM VAPOUR EXPERIMENT
     A sodium flame emits bright yellow light (589 nm). If white light
     is passed THROUGH sodium vapour, the vapour absorbs exactly that
     same yellow wavelength, leaving a DARK LINE at 589 nm.
     Emitter of a wavelength = absorber of the same wavelength.

  8. *** THE FRAUNHOFER LINES ***  (the classic application)
```

## The Fraunhofer lines — the beautiful proof of Kirchhoff's law

```
   The Sun's spectrum, when looked at closely, is not smooth: it is
   crossed by thousands of fine DARK LINES. These are the
   FRAUNHOFER LINES.

   EXPLANATION:

     +-------------------------------------------------------------+
     |  PHOTOSPHERE  (the Sun's hot inner surface, ~ 5800 K)        |
     |  -> emits a CONTINUOUS spectrum of all wavelengths           |
     +-------------------------------------------------------------+
                                |
                                v
     +-------------------------------------------------------------+
     |  CHROMOSPHERE (the cooler outer gaseous layer)               |
     |  contains H, He, Na, Ca, Fe ... vapours                      |
     |  -> each of these ABSORBS exactly the wavelengths it would   |
     |     itself EMIT   (KIRCHHOFF'S LAW)                          |
     +-------------------------------------------------------------+
                                |
                                v
     What reaches the Earth is the continuous spectrum with those
     wavelengths MISSING -> they appear as DARK LINES.


     |||||| | ||||  ||| | |||||| || ||| | |||||| |||  <- absorption
     ============ CONTINUOUS SPECTRUM =============      lines
     violet <---------------------------------> red

   BEAUTIFUL EXTRA FACT: during a total solar eclipse, the moment the
   photosphere is covered, those same dark lines FLASH BRIGHT for an
   instant (the "flash spectrum"), because now you see the
   chromosphere EMITTING the very wavelengths it was absorbing.
   That is Kirchhoff's law caught in the act.

   USE: the Fraunhofer lines tell us WHICH ELEMENTS are present in
   the Sun's atmosphere. Helium was discovered this way, in the Sun,
   before it was ever found on Earth.
```

---

# TOPIC 18 — THE STEFAN-BOLTZMANN LAW

## Statement

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   STEFAN-BOLTZMANN LAW                                              |
  |                                                                     |
  |   The total energy radiated per unit area per unit time by a        |
  |   PERFECTLY BLACK BODY is directly proportional to the FOURTH       |
  |   POWER of its absolute temperature.                                |
  |                                                                     |
  |                 E  =  sigma  T^4                                    |
  |                                                                     |
  |   sigma = STEFAN'S CONSTANT = 5.67 x 10^-8  W m^-2 K^-4             |
  |                                                                     |
  |   DIMENSIONS of sigma :  [ M T^-3 K^-4 ]                            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The three forms you actually need

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  (1) BLACK BODY, per unit area                                      |
  |            E  =  sigma T^4                                          |
  |                                                                     |
  |  (2) ORDINARY BODY of emissivity e, total power radiated            |
  |            P  =  e sigma A T^4                                      |
  |                                                                     |
  |  (3) BODY AT TEMPERATURE T IN SURROUNDINGS AT Ts                    |
  |      (this is the one exams use)                                    |
  |                                                                     |
  |       NET rate of heat loss  =  e sigma A ( T^4  -  Ts^4 )          |
  |                                                                     |
  |      * if T > Ts the body LOSES heat                                |
  |      * if T < Ts the body GAINS heat                                |
  |      * if T = Ts there is no NET exchange (but both still radiate)  |
  |                                                                     |
  +---------------------------------------------------------------------+

  T AND Ts MUST BE IN KELVIN. ALWAYS.
```

## Why the fourth power matters so much

```
   Double the absolute temperature and you radiate 2^4 = 16 times as much.
   Triple it and you radiate 3^4 = 81 times as much.

   That is why a filament at 2500 K glows blindingly, while the same
   wire at 300 K radiates nothing you can see.
```

## WORKED EXAMPLE 18.1

*A black body at 727 degC radiates how much energy per square metre per second?*

**SOLUTION**

```
  T = 727 + 273 = 1000 K       <-- CONVERT FIRST

  E = sigma T^4
    = 5.67 x 10^-8 x (1000)^4
    = 5.67 x 10^-8 x 10^12
    = 5.67 x 10^4 W/m^2

  ANSWER: 5.67 x 10^4 W/m^2  (= 56.7 kW per square metre)
```

## WORKED EXAMPLE 18.2

*A metal sphere of radius 5 cm and emissivity 1 is at 327 degC and its
surroundings are at 27 degC. Find the net rate of loss of heat.*

**SOLUTION**

```
  T  = 327 + 273 = 600 K
  Ts =  27 + 273 = 300 K
  r  = 0.05 m

  A = 4 pi r^2 = 4 x 3.1416 x (0.05)^2
              = 4 x 3.1416 x 0.0025
              = 0.031416 m^2

  T^4  = (600)^4  = 1.296 x 10^11
  Ts^4 = (300)^4  = 0.081 x 10^11

  T^4 - Ts^4 = 1.215 x 10^11

  P = e sigma A (T^4 - Ts^4)
    = 1 x 5.67 x 10^-8 x 0.031416 x 1.215 x 10^11

  5.67 x 10^-8 x 0.031416 = 1.781 x 10^-9
  1.781 x 10^-9 x 1.215 x 10^11 = 216.4

  ANSWER:  about 216 W
```

## WORKED EXAMPLE 18.3 (a very common ratio question)

*The temperature of a black body is increased from 27 degC to 327 degC.
By what factor does the energy radiated increase?*

**SOLUTION**

```
  T1 = 300 K ,  T2 = 600 K

    E2 / E1  =  ( T2 / T1 )^4  =  ( 600 / 300 )^4  =  2^4  =  16

  ANSWER: 16 times.
```

> **TRAP:** `(327/27)^4` is wrong and it is the most common error in the whole
> chapter. **Convert to kelvin BEFORE taking the ratio.**

## WORKED EXAMPLE 18.4

*Two spheres of the same material have radii in the ratio 1 : 2 and
temperatures in the ratio 2 : 1. Find the ratio of the energies radiated
per second.*

**SOLUTION**

```
  P is proportional to A T^4, and A is proportional to r^2.

      P1     r1^2 T1^4      (1)^2 (2)^4       1 x 16       16      4
     ---- = ------------ = --------------- = --------- =  ----  = ---
      P2     r2^2 T2^4      (2)^2 (1)^4       4 x 1         4      1

  ANSWER:  4 : 1
```

---

# TOPIC 19 — NEWTON'S LAW OF COOLING  *** top 4-mark question ***

## Statement

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   NEWTON'S LAW OF COOLING                                           |
  |                                                                     |
  |   The rate of loss of heat of a body is directly proportional to    |
  |   the difference between its temperature and the temperature of     |
  |   its surroundings, provided that difference is SMALL.              |
  |                                                                     |
  |            dQ                                                       |
  |          - ----   is proportional to   ( T  -  Ts )                 |
  |            dt                                                       |
  |                                                                     |
  |   and hence the rate of FALL of temperature:                        |
  |                                                                     |
  |            dT                                                       |
  |            ----  =  - k ( T  -  Ts )                                |
  |            dt                                                       |
  |                                                                     |
  |   VALID ONLY FOR SMALL TEMPERATURE DIFFERENCES (up to about 30 K)   |
  |   and for cooling in a STREAM OF AIR (forced convection).           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## *** DERIVATION FROM STEFAN'S LAW *** (this is the marks-heavy part)

```
  Step 1  Start from the Stefan-Boltzmann net-loss expression:

             dQ
           - ---- =  e sigma A ( T^4  -  Ts^4 )
             dt

  Step 2  Let the excess temperature be small. Write

             T  =  Ts + dt_x      where  dt_x  is SMALL

  Step 3  Substitute:

             T^4 - Ts^4  =  ( Ts + dt_x )^4  -  Ts^4

                         =  Ts^4 ( 1 + dt_x/Ts )^4  -  Ts^4

  Step 4  Expand by the binomial theorem. Because dt_x/Ts is small,
          keep only the FIRST-ORDER term:

             ( 1 + x )^4  =  1 + 4x + 6x^2 + ...   ~   1 + 4x

          So

             T^4 - Ts^4  ~  Ts^4 ( 1 + 4 dt_x / Ts )  -  Ts^4

                         =  4 Ts^3  dt_x

  Step 5  Therefore

             dQ
           - ---- =  4 e sigma A Ts^3  x  dt_x
             dt

          Everything in front of dt_x is a CONSTANT (for fixed
          surroundings and a fixed body). Call it K.

             dQ
           - ---- =  K ( T  -  Ts )                <-- NEWTON'S LAW
             dt

  Step 6  Finally, since  dQ = m c dT ,

             dT        K
           - ---- =  ------ ( T - Ts )  =  k ( T - Ts )
             dt        m c

                          HENCE PROVED.
```

```
  +---------------------------------------------------------------------+
  |  KEY EXAM SENTENCE:                                                 |
  |  "Newton's law of cooling is only an APPROXIMATION to Stefan's law, |
  |   valid when the excess temperature is small, because we neglected  |
  |   the second and higher powers in the binomial expansion."          |
  +---------------------------------------------------------------------+
```

## The cooling curve

Integrating `dT/dt = -k (T - Ts)` gives

```
       T  =  Ts  +  ( T0 - Ts ) e^( - k t )
```

which is an **exponential decay towards the surrounding temperature**:

```
   Temperature
      |
   T0 |*
      | *
      |  **
      |    **           steep at first (large excess temperature),
      |      ***        then flatter and flatter
      |         ****
      |             ******
      |                   *********
      |                            ***************
   Ts |- - - - - - - - - - - - - - - - - - - - - -*-*-*-*-*-*-  asymptote
      |
      +---------------------------------------------------> time

   * The curve NEVER actually reaches Ts - it approaches it forever.
   * The SLOPE at any point is the rate of cooling at that moment.
   * The slope is proportional to the vertical gap (T - Ts).
```

**The straight-line version** (used to verify the law experimentally):

```
   log_e ( T - Ts )   =   - k t   +   constant

   log(T-Ts)
      |*
      |  *
      |    *          plot log(T - Ts) against t
      |      *        -> a STRAIGHT LINE with slope -k
      |        *
      |          *
      +---------------------> t
```

## The practical working form for problems

For a small drop over a short interval, use the **average** temperature:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     T1 - T2          [  T1 + T2          ]                          |
  |    ---------  =  k   [  ---------  -  Ts ]                          |
  |        t             [      2            ]                          |
  |                                                                     |
  |  "temperature drop divided by time  =  k x (AVERAGE temperature     |
  |   minus surrounding temperature)"                                   |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 19.1

*A body cools from 80 degC to 64 degC in 5 minutes in surroundings at 24 degC.
How long will it take to cool from 64 degC to 52 degC?*

**SOLUTION**

```
  FIRST STAGE
     drop      = 80 - 64 = 16 degC in 5 min
     average   = (80 + 64)/2 = 72 degC
     excess    = 72 - 24 = 48 degC

     16 / 5  =  k x 48
     3.2     =  48 k
     k       =  3.2 / 48  =  1/15  per minute

  SECOND STAGE
     drop      = 64 - 52 = 12 degC in t minutes
     average   = (64 + 52)/2 = 58 degC
     excess    = 58 - 24 = 34 degC

     12 / t  =  (1/15) x 34
     12 / t  =  34/15  =  2.2667
     t       =  12 / 2.2667
             =  5.29 min

  ANSWER: about 5.3 minutes
```

## WORKED EXAMPLE 19.2

*A body cools from 60 degC to 50 degC in 10 minutes. The surroundings are at
25 degC. What will its temperature be after the next 10 minutes?*

**SOLUTION**

```
  FIRST 10 MINUTES
     (60 - 50)/10  =  k [ (60 + 50)/2 - 25 ]
     1             =  k [ 55 - 25 ]
     1             =  30 k
     k             =  1/30

  NEXT 10 MINUTES, let the final temperature be T:

     (50 - T)/10   =  (1/30) [ (50 + T)/2 - 25 ]

     (50 - T)/10   =  (1/30) [ (50 + T - 50)/2 ]

     (50 - T)/10   =  (1/30)( T/2 )  =  T/60

  Cross-multiply:

     60 (50 - T)   =  10 T
     3000 - 60 T   =  10 T
     3000          =  70 T
     T             =  42.86 degC

  ANSWER: about 42.9 degC

  SENSE CHECK: the second drop (7.1 degC) is SMALLER than the first
  (10 degC), exactly as it must be - cooling always slows down.
```

## WORKED EXAMPLE 19.3

*Water at 90 degC in a beaker cools to 80 degC in 4 minutes when the room is at
20 degC. Find the time it takes to cool from 80 degC to 70 degC.*

**SOLUTION**

```
  FIRST:  (90-80)/4 = k[ 85 - 20 ]   ->   2.5 = 65 k   ->  k = 1/26

  SECOND: (80-70)/t = (1/26)[ 75 - 20 ]
          10/t      = 55/26 = 2.1154
          t         = 10 / 2.1154 = 4.73 min

  ANSWER: about 4.7 minutes  (longer than the first, as expected)
```

> **TRAP:** Newton's law problems use the **average** of the two temperatures,
> not the starting one. Also: for these problems degC and K give the *same*
> answer, because only *differences* appear — this is the one radiation topic
> where Celsius is safe.

---

# TOPIC 20 — WIEN'S DISPLACEMENT LAW AND THE BLACK-BODY SPECTRUM

## The observation

Heat a piece of iron. It first glows dull red, then orange, then yellow, then
brilliant white. **As the temperature rises, the colour shifts toward shorter
wavelengths.** That is Wien's law in front of your eyes.

## Statement

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   WIEN'S DISPLACEMENT LAW                                           |
  |                                                                     |
  |   The wavelength at which a black body emits the MAXIMUM energy     |
  |   is INVERSELY proportional to its absolute temperature.            |
  |                                                                     |
  |            lambda_m  x  T   =   b                                   |
  |                                                                     |
  |   b = WIEN'S CONSTANT = 2.9 x 10^-3 m K                             |
  |                       = 2.898 x 10^-3 m K   (precise value)         |
  |                                                                     |
  |   Hotter body  ->  SHORTER peak wavelength  ->  bluer               |
  |   Cooler body  ->  LONGER peak wavelength   ->  redder              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## *** THE BLACK-BODY SPECTRUM — draw this ***

Plot the emitted energy against wavelength for several temperatures:

```
   E_lambda
   (energy per
    unit wavelength)
      |
      |             *
      |            * *
      |           *   *                T3  (HOTTEST, e.g. 2000 K)
      |          *     *
      |          *      *
      |         *        *
      |        *          *
      |       *   . .      *
      |      *   .    .      *              T2  (e.g. 1500 K)
      |     *   .       .      *
      |    *   .          .      * .
      |   *   .   _ - _     .  *      .
      |  *   .  _       _     .    .      .        T1 (COOLEST, 1000 K)
      | *  . _             _ .        .        .
      |*  ._                  _  .        .          .
      |*_.                       _   .        .          .  .
      +------------------------------------------------------------> lambda
       0    lam3   lam2      lam1
            <-------                       the peak MOVES LEFT
            as T increases   (Wien's displacement law)
```

**Four facts to read off the graph — the examiner wants all four:**

```
  1.  Every curve starts at zero, rises to a MAXIMUM, then falls
      away slowly. Energy is emitted at EVERY wavelength, but not
      equally.

  2.  As T increases, the peak SHIFTS TOWARDS SHORTER WAVELENGTHS.
              lambda_m x T = constant                (WIEN)

  3.  As T increases, the whole curve RISES - more energy at EVERY
      wavelength.

  4.  The AREA under a curve = the TOTAL energy radiated per unit
      area per second, and that area is proportional to T^4.
              area  =  sigma T^4                     (STEFAN)
```

## WORKED EXAMPLE 20.1

*The Sun's surface is at about 5800 K. At what wavelength does it radiate
most strongly?*

**SOLUTION**

```
  lambda_m = b / T
           = (2.9 x 10^-3) / 5800

  2.9 / 5800 = 5.0 x 10^-4

  lambda_m = 5.0 x 10^-4 x 10^-3 = 5.0 x 10^-7 m
           = 500 nm

  ANSWER: 500 nm - which is GREEN-YELLOW, right in the middle of the
  visible spectrum. Our eyes evolved to be most sensitive exactly there.
```

## WORKED EXAMPLE 20.2

*A human body is at 37 degC. Find the wavelength of maximum emission.*

**SOLUTION**

```
  T = 37 + 273 = 310 K

  lambda_m = 2.9 x 10^-3 / 310
           = 9.35 x 10^-6 m
           = 9.35 micrometre

  ANSWER: about 9.4 micrometre - deep INFRARED, invisible to the eye.
  That is exactly what a thermal-imaging camera and a night-vision
  device detect.
```

## WORKED EXAMPLE 20.3

*A body at 1000 K has its emission peak at 2.9 micrometre. At what temperature
would the peak move to 1.45 micrometre?*

**SOLUTION**

```
  lambda_m T = constant

     (2.9)(1000) = (1.45)(T)

     T = 2900 / 1.45 = 2000 K

  ANSWER: 2000 K.  Halve the wavelength -> double the temperature.
```

---

# TOPIC 21 — THE SOLAR CONSTANT, THE SUN'S TEMPERATURE, AND THE GREENHOUSE EFFECT

## The solar constant

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   SOLAR CONSTANT S = the solar radiant energy received per unit     |
  |   area per unit time by a surface held PERPENDICULAR to the Sun's   |
  |   rays, just outside the Earth's atmosphere, at the Earth's mean    |
  |   distance from the Sun.                                            |
  |                                                                     |
  |        S  =  1.388 x 10^3  W/m^2    (about 1.4 kW per square metre) |
  |           =  1.94 cal cm^-2 min^-1                                  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Estimating the Sun's surface temperature

```
   IDEA:  ALL the energy the Sun radiates from its surface spreads out
          over a giant sphere of radius r (the Earth-Sun distance) by
          the time it reaches us.

                            SUN                      EARTH
                         (radius R)                    o
                             ()  - - - - - - - - - - - -
                             |<------------ r --------->|

   Energy leaving the Sun per second
        =  ( 4 pi R^2 )  x  sigma T^4

   The same energy per second crosses the big sphere of radius r
        =  ( 4 pi r^2 )  x  S

   Equate them:

        4 pi R^2 sigma T^4  =  4 pi r^2 S
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                     S  x  r^2                                       |
  |            T^4  =  ------------                                     |
  |                    sigma x R^2                                      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 21.1

*Estimate the Sun's surface temperature.
S = 1.388 x 10^3 W/m^2, r = 1.5 x 10^11 m, R = 7.0 x 10^8 m,
sigma = 5.67 x 10^-8.*

**SOLUTION**

```
  Step 1   r / R = (1.5 x 10^11)/(7.0 x 10^8) = 214.3

  Step 2   (r/R)^2 = (214.3)^2 = 4.593 x 10^4

  Step 3   T^4 = S (r/R)^2 / sigma
               = (1.388 x 10^3)(4.593 x 10^4) / (5.67 x 10^-8)

           numerator = 1.388 x 4.593 x 10^7 = 6.375 x 10^7

           T^4 = 6.375 x 10^7 / 5.67 x 10^-8 = 1.124 x 10^15

  Step 4   T = ( 1.124 x 10^15 )^(1/4)

           sqrt(1.124 x 10^15) = 3.353 x 10^7
           sqrt(3.353 x 10^7)  = 5.79 x 10^3

           T = 5790 K

  ANSWER: about 5800 K.
```

## THE GREENHOUSE EFFECT

```
   Why it is called that:

      A glass greenhouse lets SHORT-wavelength sunlight IN.
      The soil and plants inside warm up and re-radiate as
      LONG-wavelength INFRARED. Glass is OPAQUE to infrared,
      so that heat cannot get back out. The inside heats up.

                    ///  visible light in  ///
                     \   \   \   \   \   \
        ______________\___\___\___\___\___\_______  glass roof
       |               v   v   v   v   v   v      |
       |          ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^       |
       |          | infrared, TRAPPED  |          |
       |   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    |
       |________  soil and plants, warm  _________|
```

**The Earth does exactly the same thing, using gases instead of glass:**

```
  STEP 1  Sunlight (mostly VISIBLE, short wavelength, peak 500 nm)
          passes easily through the atmosphere and warms the ground.

  STEP 2  The warm ground (about 288 K) re-radiates. By Wien's law its
          peak is at 2.9e-3 / 288 = 1.0 x 10^-5 m = 10 micrometre,
          which is INFRARED.

  STEP 3  Carbon dioxide, water vapour, methane, nitrous oxide and CFCs
          strongly ABSORB infrared. They re-radiate part of it back
          DOWN to the surface.

  STEP 4  The surface is therefore warmer than it would otherwise be.


                    ))) SUNLIGHT (short wavelength) )))
                              |  |  |
     ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~|~ |~ |~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
     ~   CO2   H2O   CH4      v  v  v          CO2    ~ ~ ~  atmosphere
     ~ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
     ~ |  infrared radiated back DOWN  |            ~ ~ ~
     ~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~
   //////////////  EARTH'S SURFACE  ///////////////////////
        (radiates INFRARED, long wavelength, ~10 micrometre)
```

```
  +---------------------------------------------------------------------+
  |  THE NUMBERS WORTH QUOTING                                          |
  |                                                                     |
  |  Without any greenhouse effect the Earth would average about        |
  |  -18 degC (255 K) - a frozen planet.                                |
  |  With it, the average is about +15 degC (288 K).                    |
  |  The natural greenhouse effect is therefore worth about 33 degC     |
  |  and is what makes life possible.                                   |
  |                                                                     |
  |  The PROBLEM is the ENHANCED greenhouse effect: burning fossil      |
  |  fuels has raised CO2 sharply, trapping more heat -> GLOBAL         |
  |  WARMING -> melting ice caps, rising sea level, changed monsoons.   |
  |                                                                     |
  |  MAIN GREENHOUSE GASES: CO2, water vapour, CH4 (methane),           |
  |  N2O (nitrous oxide), O3 (ozone), CFCs.                             |
  +---------------------------------------------------------------------+
```

> **TRAP:** The greenhouse effect is **not** the ozone hole. Ozone depletion is
> about ultraviolet light getting IN; the greenhouse effect is about infrared
> not getting OUT. Mixing them up is a guaranteed lost mark.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  UNITS AND CONVERSIONS
  [ ] Did I convert every temperature to KELVIN in Stefan's law
      and Wien's law?
  [ ] Did I keep mass in KILOGRAMS when using c = 4186 J/kg/K?
      (or work consistently in grams and calories)
  [ ] Did I convert cm^2 to m^2, and mm to m, in conduction problems?

  EXPANSION
  [ ] beta = 2 alpha and gamma = 3 alpha - did I write them the
      right way round?
  [ ] In the derivations, did I SAY that higher powers of alpha dT
      are neglected because alpha ~ 10^-5?
  [ ] Did I remember that a HOLE EXPANDS, it does not shrink?
  [ ] In a thermal stress problem, did I avoid putting L in?
      (stress = Y alpha dT has NO length in it)
  [ ] "How much liquid overflows" -> APPARENT expansion, not real.

  HEAT AND CALORIMETRY
  [ ] Did I include EVERY stage - including the FLAT latent-heat
      stages where dT = 0?
  [ ] In a mixture problem, did I first CHECK whether all the ice
      can melt / all the steam can condense?
  [ ] Is my final temperature BETWEEN the two starting temperatures?
  [ ] Did I include the calorimeter's water equivalent?

  HEAT TRANSFER
  [ ] Series or parallel? Did I draw the picture first?
  [ ] Series -> same HEAT through both. Parallel -> same
      TEMPERATURE DIFFERENCE across both.
  [ ] In Newton's law of cooling, did I use the AVERAGE temperature?
  [ ] Is my second cooling interval LONGER than the first?
      (it always must be)

  DIAGRAMS - these carry marks on their own
  [ ] Density-vs-temperature graph for water, with the peak
      clearly marked at 4 degC.
  [ ] Ice-to-steam graph with all FIVE stages, and stage 4 drawn
      clearly longer than stage 2.
  [ ] Black-body spectrum with at least TWO temperature curves and
      the peak shifting LEFT.
  [ ] The cooling curve, shown flattening towards Ts and never
      touching it.
  [ ] Labels on EVERY axis, with units.

  STATEMENTS
  [ ] Kirchhoff, Stefan-Boltzmann, Newton, Wien - can I state all
      four in one sentence each, from memory?
  [ ] Did I define the symbols in every formula I wrote?
```
