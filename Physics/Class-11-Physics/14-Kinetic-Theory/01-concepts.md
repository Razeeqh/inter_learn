# Kinetic Theory — Concepts Explained Simply

Read this chapter *after* you have done Thermal Properties of Matter and
Thermodynamics. It is the chapter that finally explains **what heat and
temperature actually ARE**.

There is only one hard derivation in the whole chapter. Everything else is
short, memorisable and worth easy marks.

---

# TOPIC 1 — The molecular nature of matter

## The idea in one picture

Take a drop of water. Cut it in half. Cut it in half again. Keep going. You cannot
keep going forever. Eventually you reach one **molecule** of water, H2O. Cut that
and it is no longer water — it becomes hydrogen and oxygen.

```
  MATTER  is not smooth. It is made of tiny separate particles.

     SOLID                 LIQUID                  GAS
  o-o-o-o-o-o           o o  o  o  o           o        o
  | | | | | |            o  o o  o                  o        o
  o-o-o-o-o-o           o o   o  o  o          o          o
  | | | | | |             o  o  o o                   o
  o-o-o-o-o-o            o  o o   o  o            o        o

  packed tight        touching but         far apart,
  fixed positions     free to slide        almost free
  only vibrate                             fly at ~500 m/s
```

```
  +-----------+-------------------+------------------+--------------------+
  | STATE     | INTERMOLECULAR    | INTERMOLECULAR   | MOTION             |
  |           | DISTANCE          | FORCE            |                    |
  +-----------+-------------------+------------------+--------------------+
  | Solid     | very small        | very strong      | vibration only     |
  | Liquid    | small             | moderate         | vibration + slide  |
  | Gas       | very LARGE        | almost ZERO      | free, random,      |
  |           | (~10 x diameter)  |                  | very fast          |
  +-----------+-------------------+------------------+--------------------+
```

**Why we study GASES and not solids:** in a gas the molecules are so far apart
that we can *ignore* the forces between them. That one simplification makes the
whole maths possible. This is why the theory works so well for gases and badly
for liquids and solids.

## Some history worth 2 marks

```
  Kanada (India, ~600 BC)  and  Democritus (Greece)
      -  matter is made of indivisible "paramanu" / "atoms"

  John Dalton (1808)
      -  atomic theory; elements combine in simple whole-number ratios

  Gay-Lussac
      -  gases combine in simple ratios BY VOLUME

  Avogadro (1811)
      -  equal volumes of all gases at the same temperature and pressure
         contain equal numbers of MOLECULES
```

## Estimating the size of a molecule

```
  Diameter of a typical molecule   d  =  2 x 10^-10 m  =  2 angstrom

  Average distance between gas molecules at STP  ~  3 x 10^-9 m

     distance between molecules       3 x 10^-9
     --------------------------  =  ------------  =  about 15
        size of a molecule            2 x 10^-10
```

So in a gas the molecules are roughly **15 times their own size apart**, which
means the actual volume they occupy is about `(1/15)^3` = 1/3000 of the container.
**That** is why postulate 3 ("molecular volume is negligible") is allowed.

---

## WORKED EXAMPLE 1.1

The density of water is 1000 kg/m^3 and its molar mass is 18 g/mol.
Estimate the volume occupied by one molecule of water and hence its size.

```
  1 mole of water  =  18 g  =  0.018 kg

                             mass        0.018
  Volume of 1 mole  =  ----------  =  ---------  =  1.8 x 10^-5 m^3
                          density        1000

  This holds NA = 6.022 x 10^23 molecules.

                                1.8 x 10^-5
  Volume of ONE molecule  =  -----------------  =  2.99 x 10^-29 m^3
                              6.022 x 10^23

  Treating it as a small cube of side a:

       a  =  (2.99 x 10^-29)^(1/3)  =  3.1 x 10^-10 m  =  3.1 angstrom
```

**A molecule is about 3 angstrom across.** Remember this order of magnitude —
EAPCET asks it.

> **TRAP:** molar mass must go into the formula in **kg/mol**, not g/mol.
> 18 g/mol = 0.018 kg/mol. Forgetting this is the single most common
> arithmetic mistake in the whole chapter.

---

# TOPIC 2 — Avogadro's hypothesis and the Avogadro number

## Avogadro's hypothesis (learn this sentence)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   EQUAL VOLUMES of ALL gases, under the SAME conditions of          |
  |   TEMPERATURE and PRESSURE, contain EQUAL NUMBERS of MOLECULES.     |
  |                                                                     |
  +---------------------------------------------------------------------+
```

A 1-litre bottle of hydrogen and a 1-litre bottle of carbon dioxide at the same
temperature and pressure hold the **same number of molecules** — even though the
CO2 bottle is 22 times heavier. The molecules are the same in number; they are
just heavier individually.

## The Avogadro number

```
  +----------------------------------------------------------------+
  |                                                                |
  |     NA  =  6.022 x 10^23  per mole                             |
  |                                                                |
  |     = the number of molecules in ONE MOLE of any substance     |
  |     = the number of atoms in 12 g of carbon-12                 |
  |                                                                |
  +----------------------------------------------------------------+
```

```
  1 MOLE of any gas    ->  6.022 x 10^23 molecules
                       ->  mass = molar mass M in grams
                       ->  volume at STP = 22.4 litre = 22.4 x 10^-3 m^3

  STP means  T = 273.15 K (0 degC)  and  P = 1 atm = 1.013 x 10^5 Pa
```

## Loschmidt number (a nice 2-mark fact)

The number of molecules in 1 m^3 of any gas at STP:

```
                 NA            6.022 x 10^23
      n   =  ----------  =  --------------------  =  2.69 x 10^25 per m^3
              V_molar        22.4 x 10^-3

      (that is 2.69 x 10^19 molecules in every cubic centimetre)
```

---

## WORKED EXAMPLE 2.1

How many molecules are there in 8 g of oxygen gas? How many oxygen ATOMS?

```
  Molar mass of O2  =  32 g/mol

                   given mass         8
  moles  n  =  ----------------  =  -----  =  0.25 mol
                   molar mass         32

  Number of molecules  =  n x NA
                       =  0.25 x 6.022 x 10^23
                       =  1.506 x 10^23 molecules

  Each O2 molecule has 2 atoms:

  Number of atoms      =  2 x 1.506 x 10^23  =  3.011 x 10^23 atoms
```

## WORKED EXAMPLE 2.2

What volume does 4 g of helium occupy at STP, and how many molecules does it hold?

```
  Molar mass of He  =  4 g/mol       (helium is MONATOMIC)

  n  =  4 / 4  =  1 mol

  Volume at STP  =  1 x 22.4 litre  =  22.4 litre  =  0.0224 m^3

  Molecules      =  6.022 x 10^23
```

> **TRAP:** helium is monatomic, so its "molecule" is a single atom.
> Number of atoms = number of molecules for He, Ne, Ar. For O2, N2, H2 you must
> **double** it.

---

# TOPIC 3 — Behaviour of gases: the ideal gas equation

## The three experimental gas laws (revision)

```
  BOYLE'S LAW       T constant       P V  =  constant        P  ~  1/V

  CHARLES' LAW      P constant       V / T  =  constant      V  ~  T

  GAY-LUSSAC        V constant       P / T  =  constant      P  ~  T

  AVOGADRO'S LAW    P, T constant    V  ~  n
```

Multiply them all together and you get the one equation that replaces all four:

```
  +--------------------------------------------------------------+
  |                                                              |
  |                     P V  =  n R T                            |
  |                                                              |
  |    P = pressure (Pa)          V = volume (m^3)               |
  |    n = number of MOLES        T = ABSOLUTE temperature (K)   |
  |    R = universal gas constant = 8.314 J mol^-1 K^-1          |
  |                                                              |
  +--------------------------------------------------------------+
```

## The molecule form of the same equation

```
                                        N
  n = N / NA   (N = number of molecules) so   P V  =  ---- R T
                                                       NA

                                                     +-  R  -+
                                        P V  =  N x  | ----- | x T
                                                     +-  NA -+

  Call that bracket k, the BOLTZMANN CONSTANT:

  +--------------------------------------------------------------+
  |                                                              |
  |          P V  =  N k T                                       |
  |                                                              |
  |                    R          8.314                          |
  |          k  =  --------  =  --------------  =  1.38 x 10^-23 |
  |                   NA         6.022 x 10^23        J / K      |
  |                                                              |
  |          and therefore      R  =  NA  x  k                   |
  |                                                              |
  +--------------------------------------------------------------+
```

```
  CHECK:   NA x k  =  6.022 x 10^23  x  1.38 x 10^-23  =  8.31   correct.
```

```
  R  is per MOLE.        k  is per MOLECULE.
  R = 8.314 J/mol/K      k = 1.38 x 10^-23 J/K
```

That single line — "**R = NA k**, R is per mole and k is per molecule" — is a
guaranteed 2-mark answer.

## Two more useful forms

```
                                     m
  Since   n = m / M ,      P V  =  ----- R T
                                     M

                       m                    rho R T
  and since  rho = ------- ,        P  =  ------------
                       V                        M


                  N
  Also with  n = ---- = number density,     P  =  n k T
                  V
```

## Other values of R (worth writing in the margin)

```
  R  =  8.314   J mol^-1 K^-1          (SI - use this one)
     =  8.314   x 10^7 erg mol^-1 K^-1
     =  2       cal mol^-1 K^-1        (approximately)
     =  0.0821  litre-atm mol^-1 K^-1
```

## When does a REAL gas behave like an IDEAL gas?

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   A real gas behaves as an ideal (perfect) gas when                |
  |                                                                    |
  |        *  the PRESSURE is LOW                                      |
  |        *  the TEMPERATURE is HIGH                                  |
  |           (i.e. the density is low)                                |
  |                                                                    |
  |   Because then:  molecules are far apart                           |
  |                  -> their own volume is negligible                 |
  |                  -> the forces between them are negligible         |
  |                                                                    |
  |   NO real gas is ideal. An ideal gas is an idealisation that       |
  |   real gases APPROACH at low P and high T.                         |
  |                                                                    |
  +--------------------------------------------------------------------+
```

```
  P V / n R T   for an ideal gas is exactly 1 at ALL pressures:

   PV
  ----
   nRT
    |
  1.4|                                    ___ real gas (high P: own volume
    |                                 ___/                      dominates)
  1.2|                             __/
    |                          __/
  1.0|-------------------------------------------  IDEAL GAS (always 1)
    |    \                 __/
  0.8|     \___         __/
    |         \_______/     <- dip: attractive forces pull molecules
  0.6|                                 inward, reducing pressure
    +-----------------------------------------------> P
    0
```

---

## WORKED EXAMPLE 3.1

Find the volume occupied by 2 moles of an ideal gas at 27 degC and 1 atm pressure.

```
  n = 2 mol      T = 27 + 273 = 300 K      P = 1.013 x 10^5 Pa

         n R T        2 x 8.314 x 300         4988.4
  V  =  -------  =  --------------------  =  ----------  =  0.0492 m^3
           P            1.013 x 10^5           101300

  V  =  0.0492 m^3  =  49.2 litre
```

## WORKED EXAMPLE 3.2

An electric bulb of volume 250 cm^3 is sealed at 27 degC and a pressure of
10^-3 mm of mercury. Find the number of air molecules inside it.

```
  V  =  250 cm^3  =  250 x 10^-6 m^3  =  2.5 x 10^-4 m^3

  P  =  10^-3 mm of Hg
     =  10^-6 m of Hg
     =  h rho g  =  10^-6 x 13600 x 9.8  =  0.133 Pa

  T  =  300 K

  From   P V = N k T :

           P V          0.133 x 2.5 x 10^-4         3.33 x 10^-5
  N  =  --------  =  --------------------------  =  --------------
           k T        1.38 x 10^-23 x 300            4.14 x 10^-21

  N  =  8.0 x 10^15 molecules
```

Even a "vacuum" bulb still contains eight thousand million million molecules.

## WORKED EXAMPLE 3.3

A gas at 27 degC and pressure 2 atm is heated to 127 degC keeping the volume
fixed. Find the new pressure.

```
  Volume fixed  ->  P / T = constant   (Gay-Lussac)

    P1        P2
   ----  =  ----
    T1        T2

    2         P2
  -----  =  -----      ->    P2  =  2 x  400 / 300  =  2.67 atm
   300       400
```

> **TRAP:** temperature in ALL gas equations must be in **kelvin**. Using 27 and
> 127 instead of 300 and 400 gives a completely wrong answer and zero marks.

---

# TOPIC 4 — THE POSTULATES OF THE KINETIC THEORY OF GASES

This is a straight 4-mark question. Learn it as a numbered list.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  1.  A gas consists of a VERY LARGE NUMBER of identical             |
  |      molecules, which behave as tiny, hard, perfectly ELASTIC       |
  |      SPHERES.                                                       |
  |                                                                     |
  |  2.  The molecules are in CONTINUOUS RANDOM MOTION in all           |
  |      directions with all possible speeds.                           |
  |                                                                     |
  |  3.  The SIZE (volume) of the molecules is NEGLIGIBLE compared      |
  |      with the volume of the container. They are treated as          |
  |      point masses.                                                  |
  |                                                                     |
  |  4.  There are NO FORCES of attraction or repulsion between the     |
  |      molecules, except during a collision. So a molecule has        |
  |      NO potential energy - all its energy is KINETIC.               |
  |                                                                     |
  |  5.  All collisions - molecule with molecule and molecule with      |
  |      wall - are PERFECTLY ELASTIC. Momentum and kinetic energy      |
  |      are conserved. The TIME of a collision is negligible           |
  |      compared with the time between collisions.                     |
  |                                                                     |
  |  6.  Between collisions a molecule moves in a STRAIGHT LINE with    |
  |      CONSTANT VELOCITY and obeys Newton's laws of motion.           |
  |                                                                     |
  |  7.  The molecules are distributed UNIFORMLY throughout the         |
  |      container, and the effect of GRAVITY on them is neglected.     |
  |                                                                     |
  |  8.  The PRESSURE of the gas is due to the continuous              |
  |      BOMBARDMENT of the molecules on the walls of the container.    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Why each postulate matters (this is what earns full marks)

```
  Postulate 1 (large N)      ->  lets us use AVERAGES and statistics
  Postulate 2 (random)       ->  lets us say  vx^2 = vy^2 = vz^2
  Postulate 3 (point size)   ->  volume of gas = volume of container
  Postulate 4 (no forces)    ->  total energy = kinetic energy only
  Postulate 5 (elastic)      ->  the gas never slows down and cools by itself
  Postulate 6 (Newton)       ->  lets us use  F = dp/dt
  Postulate 7 (uniform)      ->  pressure is the same on every wall
```

## Memory hook

```
   Many   Random   Tiny   Free   Elastic   Newtonian   Uniform
    |       |       |      |        |          |          |
   large  random  point   no      elastic   straight   same
   number  motion  size  forces  collisions   lines    everywhere
```

---

# TOPIC 5 — KINETIC INTERPRETATION OF PRESSURE

## *** THE MOST IMPORTANT DERIVATION IN THE CHAPTER ***

### What we are trying to prove

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |             1    m N              1                                 |
  |    P   =   --- x ----- x c^2  =  --- rho c^2                        |
  |             3      V              3                                 |
  |                                                                     |
  |    m   = mass of ONE molecule                                       |
  |    N   = total number of molecules                                  |
  |    V   = volume of the container                                    |
  |    c^2 = MEAN SQUARE speed of the molecules                         |
  |    rho = m N / V = density of the gas                               |
  |                                                                     |
  +---------------------------------------------------------------------+
```

### The picture

Take a cube of side `L`. Volume `V = L^3`. It contains `N` molecules, each of
mass `m`.

```
                     y
                     ^
                     |
             +-------|---------------+
            /|       |              /|
           / |       |             / |
          /  |       |            /  |
         +---+-------|-----------+   |
         |   |       |           |   |
         |   |       +-----------|---+------> x
         |   |      /            |  /
         |   |     /             | /
         |   +----/--------------|/
         |  /    /               |
         | /    z                |          FACE  A B C D
         |/                      |          (perpendicular to the x-axis,
         +-----------------------+           area = L^2)
                                 ^
                                 |
                                FACE ABCD
```

Now zoom in on ONE molecule hitting that face:

```
       BEFORE                                  AFTER
                                    |                                |
        vx  ---------------->       |        <---------------- -vx   |
       o====================>       |WALL    <====================o  |WALL
                                    |                                |
       momentum  =  + m vx          |        momentum  =  - m vx     |
                                    |                                |
                                    |
       CHANGE IN MOMENTUM  =  (- m vx) - (+ m vx)  =  - 2 m vx
       (so the molecule gives the wall a momentum  + 2 m vx )
```

The molecule then flies to the opposite face, bounces, and comes back:

```
      |                                                     |
      |  o ---- vx ---->                                    |
      |                                                     |
      |<--------------------- L --------------------------->|
      |                                                     |
      |  <---- vx ---- o                                    |
      |                                                     |
    FACE ABCD                                          opposite face

    Distance travelled between two hits on FACE ABCD  =  2 L
    Time between two hits    =  2 L / vx
```

### The derivation, step by step

```
  STEP 1  -  MOMENTUM GIVEN TO THE WALL IN ONE COLLISION

     Only the x-component matters for face ABCD.
     (vy and vz are unchanged by this wall - the wall is smooth.)

     Momentum transferred per collision  =  2 m vx


  STEP 2  -  TIME BETWEEN TWO SUCCESSIVE COLLISIONS ON THE SAME FACE

                         2 L
        delta t   =    -------
                         vx


  STEP 3  -  FORCE EXERTED BY THIS ONE MOLECULE
             (Newton's second law:  Force = rate of change of momentum)

                  momentum transferred        2 m vx        m vx^2
        F1  =  ------------------------  =  ----------  =  --------
                        time                 2 L / vx          L


  STEP 4  -  TOTAL FORCE FROM ALL N MOLECULES ON FACE ABCD

             m
        F = --- ( vx1^2 + vx2^2 + vx3^2 + ... + vxN^2 )
             L

             m
        F = --- SUM( vx^2 )
             L


  STEP 5  -  PRESSURE ON FACE ABCD  =  FORCE / AREA ,  area = L^2

              F         m SUM(vx^2)         m
        P = ------ =  ---------------  =  ------ SUM( vx^2 )
             L^2          L x L^2            L^3

              m
        P = ------ SUM( vx^2 )                    since  V = L^3
              V


  STEP 6  -  USE THE RANDOMNESS (postulate 2)

     Motion is completely random, so no direction is special:

        SUM(vx^2)  =  SUM(vy^2)  =  SUM(vz^2)

     For each molecule    v^2 = vx^2 + vy^2 + vz^2 ,  so adding over all:

        SUM(v^2) = SUM(vx^2) + SUM(vy^2) + SUM(vz^2) = 3 SUM(vx^2)

                            1
        =>   SUM(vx^2)  =  --- SUM(v^2)
                            3


  STEP 7  -  INTRODUCE THE MEAN SQUARE SPEED

     Define the mean square speed:

                  v1^2 + v2^2 + ... + vN^2         SUM(v^2)
        c^2  =  ----------------------------  =  ------------
                            N                          N

        =>   SUM(v^2)  =  N c^2


  STEP 8  -  PUT IT ALL TOGETHER

              m       1                    1    m N
        P = ----- x  --- x N c^2    =     --- x ----- c^2
              V       3                    3      V


  STEP 9  -  WRITE IT WITH DENSITY

        m N / V  =  total mass / volume  =  rho

        +--------------------------------------+
        |                 1                    |
        |        P   =   --- rho c^2           |
        |                 3                    |
        +--------------------------------------+
```

### The three useful rearrangements

```
                 1                          _______
  (a)   P   =   --- rho c^2        =>      / 3 P
                 3                 c  =   / ------        <- used constantly
                                        \/   rho


  (b)   P V  =  (1/3) m N c^2      <- the form used to derive the gas laws


                 2   N   +-  1        -+       2
  (c)   P   =   --- --- x | --- m c^2  |  =   --- E
                 3   V   +-  2        -+       3

        where E = total kinetic energy PER UNIT VOLUME.

        +----------------------------------------------------+
        |     Pressure = (2/3) x (kinetic energy density)     |
        +----------------------------------------------------+
```

### Assumptions used at each step — the examiner's favourite follow-up

```
  +------+---------------------------------------------------------------+
  | STEP |  WHICH POSTULATE MADE IT LEGAL                                |
  +------+---------------------------------------------------------------+
  |  1   |  Collision is perfectly ELASTIC, so the speed is unchanged    |
  |      |  and only the SIGN of vx flips.                               |
  |  2   |  Molecules travel in STRAIGHT LINES with CONSTANT velocity    |
  |      |  and do not collide with other molecules on the way.          |
  |  3   |  Newton's second law applies to a molecule.                   |
  |      |  The collision TIME is negligible.                            |
  |  4   |  No intermolecular FORCES, so we can just add the             |
  |      |  contributions of the molecules independently.                |
  |  5   |  Molecular VOLUME is negligible, so V = L^3 is the full       |
  |      |  volume available.                                            |
  |  6   |  The motion is completely RANDOM and there is a very LARGE    |
  |      |  number of molecules, so averages are meaningful.             |
  +------+---------------------------------------------------------------+

  Also: gravity is neglected, and the intermolecular collisions do not
  change the result because they merely redistribute the same total
  momentum among the molecules.
```

> **TRAP:** `c^2` is the **mean of the squares**, NOT the square of the mean.
> `(v1^2 + v2^2)/2` is not the same as `((v1+v2)/2)^2`. Examiners deliberately
> test this. Writing "c is the average speed" in the derivation loses marks —
> say "**mean square speed**".

---

## WORKED EXAMPLE 5.1

Calculate the rms speed of air molecules at STP.
(Density of air at STP = 1.29 kg/m^3, P = 1.013 x 10^5 Pa)

```
          _______
         / 3 P
  c  =  / ------
      \/   rho

          _____________________
         /  3 x 1.013 x 10^5
     =  /  --------------------
      \/          1.29

          _____________
     =  \/ 2.356 x 10^5

     =  485 m/s
```

Air molecules around you right now are moving at about **485 m/s**, which is
faster than the speed of sound (330 m/s) — as it must be, since sound is carried
by these very molecules.

## WORKED EXAMPLE 5.2

The rms speed of oxygen molecules at a certain temperature is 460 m/s and the
density of oxygen is 1.43 kg/m^3. Find the pressure.

```
         1
  P  =  --- rho c^2
         3

         1
     =  --- x 1.43 x (460)^2
         3

         1
     =  --- x 1.43 x 211600
         3

     =  1.009 x 10^5 Pa    (about 1 atmosphere - correct for STP)
```

## WORKED EXAMPLE 5.3

A vessel contains 10^20 molecules of a gas, each of mass 5 x 10^-26 kg, in a
volume of 2 x 10^-3 m^3. If the mean square speed is 4 x 10^5 m^2/s^2, find the
pressure.

```
         1    m N
  P  =  --- x ----- x c^2
         3      V

         1     5 x 10^-26  x  10^20
     =  --- x -----------------------  x  4 x 10^5
         3        2 x 10^-3

         1     5 x 10^-6
     =  --- x ------------  x  4 x 10^5
         3     2 x 10^-3

         1
     =  --- x 2.5 x 10^-3  x  4 x 10^5
         3

         1
     =  --- x 1000    =    333.3 Pa
         3
```

---

# TOPIC 6 — KINETIC INTERPRETATION OF TEMPERATURE

## The derivation (4 marks, very short — always do this one)

```
  START from the kinetic theory result:

                    1
        P V   =    --- m N c^2                        ... (i)
                    3

  START from the experimental ideal gas equation:

        P V   =    N k T                              ... (ii)


  Since both equal P V, set them equal:

         1
        --- m N c^2   =   N k T
         3

  Cancel N:

         1
        --- m c^2   =   k T
         3

  Multiply both sides by 3/2:

         1                  3
        --- m c^2   =      --- k T
         2                  2

        +-----------------------------------------------------+
        |         1               3                           |
        |        --- m c^2   =   --- k T                      |
        |         2               2                           |
        |                                                     |
        |   AVERAGE KINETIC ENERGY PER MOLECULE = (3/2) k T   |
        +-----------------------------------------------------+
```

## Per mole

Multiply by NA (number of molecules in a mole). Note `m NA = M` (molar mass) and
`k NA = R`:

```
        +-----------------------------------------------------+
        |         1               3                           |
        |        --- M c^2   =   --- R T                      |
        |         2               2                           |
        |                                                     |
        |   AVERAGE KINETIC ENERGY PER MOLE  =  (3/2) R T     |
        +-----------------------------------------------------+
```

## What this means — the sentence that earns the mark

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   TEMPERATURE IS A MEASURE OF THE AVERAGE KINETIC ENERGY OF         |
  |   THE MOLECULES OF A GAS.                                           |
  |                                                                     |
  |   Average KE per molecule  =  (3/2) k T                             |
  |                                                                     |
  |   It depends ONLY on the ABSOLUTE TEMPERATURE T.                    |
  |                                                                     |
  |   It does NOT depend on:                                            |
  |        - the pressure                                               |
  |        - the volume                                                 |
  |        - the nature of the gas (its mass, size, chemistry)          |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
      average KE
      per molecule
          ^
          |                                    /
          |                                  /
          |                                /       slope = (3/2) k
          |                              /
          |                            /
          |                          /
          |                        /
          |                      /
          |                    /
          |                  /
          |                /
          |              /
          |            /
          |          /
          |        /
          |      /
          |    /
          |  /
          |/
      ----+---------------------------------------> T (kelvin)
          0
        (absolute zero: KE = 0, all molecular motion ceases)
```

## Absolute zero

```
  Put  T = 0  into   (1/2) m c^2 = (3/2) k T :

        (1/2) m c^2   =   0        =>       c   =   0

  +--------------------------------------------------------------------+
  |                                                                    |
  |   ABSOLUTE ZERO (0 K = -273.15 degC) is the temperature at which   |
  |   the MOLECULAR MOTION OF A GAS CEASES ENTIRELY.                   |
  |                                                                    |
  |   The molecules have zero kinetic energy, so the gas exerts        |
  |   ZERO PRESSURE. It is the lowest temperature possible - you       |
  |   cannot have "less than no motion".                               |
  |                                                                    |
  |   (Quantum mechanics adds a small zero-point energy, but at        |
  |    Intermediate level the statement above is what is wanted.)      |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

## WORKED EXAMPLE 6.1

Find the average kinetic energy of a gas molecule at 27 degC.

```
  T  =  300 K

         3
  KE = --- k T
         2

     =  1.5 x 1.38 x 10^-23 x 300

     =  6.21 x 10^-21 J
```

Note that this answer is the same for helium, oxygen or carbon dioxide.

## WORKED EXAMPLE 6.2

Find the total translational kinetic energy of 1 gram of helium gas at 27 degC.

```
  Molar mass of He  =  4 g/mol  ->  n = 1/4 = 0.25 mol

              3
  KE_total = --- n R T
              2

           =  1.5 x 0.25 x 8.314 x 300

           =  935.3 J
```

## WORKED EXAMPLE 6.3

At what temperature will the average kinetic energy of a molecule be double its
value at 27 degC?

```
  KE  ~  T          (directly proportional to ABSOLUTE temperature)

     KE2       T2
    -----  =  -----      ->     2  =  T2 / 300     ->    T2 = 600 K
     KE1       T1

  T2  =  600 K  =  327 degC
```

> **TRAP:** the answer is **not** 54 degC. Doubling applies to the KELVIN
> temperature. Always convert first, double, then convert back.

## WORKED EXAMPLE 6.4

Two vessels of equal volume contain hydrogen and oxygen at the same temperature.
Compare (a) the average kinetic energies of their molecules, and (b) their rms
speeds.

```
  (a)   KE  =  (3/2) k T       -  depends ONLY on T
                                  Same temperature  ->  EQUAL kinetic energies.
                                  Ratio  =  1 : 1

  (b)   (1/2) m c^2 = (3/2) k T     ->     c  ~  1 / sqrt(m)

         c(H2)          M(O2)          32
        -------  =  sqrt-------  = sqrt----  =  sqrt(16)  =  4
         c(O2)          M(H2)           2

        Hydrogen molecules move 4 TIMES FASTER.
```

This single example is the model for at least half the MCQs in this chapter.

---

# TOPIC 7 — MOLECULAR SPEEDS

Molecules do not all move at the same speed. Some crawl, some race. We therefore
need three different "average" speeds.

## The three speeds

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  1. ROOT MEAN SQUARE SPEED                                         |
  |                                                                    |
  |          ______________________      _________      _________      |
  |         / v1^2+v2^2+...+vN^2          / 3 R T         / 3 k T      |
  |  c   = /  --------------------  =    / -------   =   / -------     |
  |  rms \/           N                \/     M        \/     m        |
  |                                                                    |
  |     Square the speeds, average them, take the square root.         |
  |     THIS is the one that appears in P = (1/3) rho c^2.             |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  2. AVERAGE (MEAN) SPEED                                           |
  |                                                                    |
  |          v1 + v2 + ... + vN            ________        ________    |
  |  v   =  ---------------------    =    / 8 R T         / 8 k T      |
  |  av              N                   / -------   =   / -------     |
  |                                    \/   pi M       \/   pi m       |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |  3. MOST PROBABLE SPEED                                            |
  |                                                                    |
  |     the speed possessed by the LARGEST NUMBER of molecules         |
  |     (the peak of the distribution curve)                           |
  |                                                                    |
  |            ________        ________                                |
  |           / 2 R T         / 2 k T                                  |
  |  v   =   / -------   =   / -------                                 |
  |   mp   \/     M        \/     m                                    |
  |                                                                    |
  +--------------------------------------------------------------------+

  M = molar mass in kg/mol      m = mass of one molecule in kg
  R = 8.314                     k = 1.38 x 10^-23
```

## The RATIO you must memorise

```
  v_mp  :  v_av  :  c_rms   =   sqrt(2)  :  sqrt(8/pi)  :  sqrt(3)

                            =   1.414  :  1.596  :  1.732

  Divide through by 1.414:

  +------------------------------------------------------------+
  |                                                            |
  |    v_mp  :  v_av  :  c_rms   =   1  :  1.128  :  1.224     |
  |                                                            |
  |    ORDER (never forget):    v_mp  <  v_av  <  c_rms        |
  |                                                            |
  +------------------------------------------------------------+

  Memory line:  "Most Probable is the smallest, RMS is the biggest."
```

Useful shortcuts:

```
  v_av  =  0.921 x c_rms                 c_rms  =  1.085 x v_av

  v_mp  =  0.816 x c_rms                 c_rms  =  1.225 x v_mp
```

## How the speeds depend on temperature and molar mass

```
  +------------------------+------------------------------------------+
  |  IF YOU ...            |  THEN c_rms ...                          |
  +------------------------+------------------------------------------+
  |  double T (kelvin)     |  becomes sqrt(2) = 1.414 times larger    |
  |  make T four times     |  DOUBLES                                 |
  |  want to double c_rms  |  you need FOUR times the kelvin temp     |
  |  use a gas 4x heavier  |  HALVES                                  |
  |  change P at fixed T   |  NO CHANGE (c_rms depends only on T, M)  |
  |  change V at fixed T   |  NO CHANGE                               |
  +------------------------+------------------------------------------+

              ____                        1
  c    ~    \/ T             c     ~   --------
   rms                        rms       sqrt(M)
```

> **TRAP:** "A gas is compressed to half its volume at constant temperature.
> What happens to c_rms?" The answer is **nothing** — c_rms depends only on T
> and M. The pressure doubles and the density doubles, and in
> `c = sqrt(3P/rho)` both changes cancel exactly.

## THE MAXWELL-BOLTZMANN DISTRIBUTION OF SPEEDS

Maxwell worked out how many molecules have each speed. The graph of
`dN/dv` (number of molecules per unit speed range) against `v` looks like this:

```
   dN
   ---
   dv
    ^
    |
    |            v_mp   (the PEAK)
    |             |
    |          ***|***
    |        **   |    **
    |       *     |      **
    |      *      |        **
    |     *       |          **
    |    *        |            ***
    |   *         |               ***
    |  *          |                  ****
    | *           |                      *****
    |*            |                            *******
    +-------------+-------------------------------------****----> v
    0            v_mp
                  |  |  |
                  |  |  +-- c_rms   (1.224 x v_mp)
                  |  +----- v_av    (1.128 x v_mp)
                  +-------- v_mp    (most probable)

  FEATURES TO STATE IN THE EXAM:
    *  The curve starts at ZERO (no molecule has exactly zero speed).
    *  It rises to a PEAK at the most probable speed v_mp.
    *  It falls off gradually and NEVER touches the axis again -
       a few molecules have very high speeds. The curve is
       NOT symmetric; it has a long tail on the right.
    *  The TOTAL AREA under the curve = total number of molecules N,
       so the area stays the SAME at every temperature.
```

## How the curve changes with temperature

```
   dN
   ---
   dv
    ^
    |      ****
    |    **    **               T1  (LOW temperature)
    |   *        *              tall, narrow peak
    |  *          *
    | *            *
    | *             **
    |*    ___         *
    |*  _/   \__       **        T2  (HIGHER temperature)
    |* /        \___     **      shorter, broader, peak shifted RIGHT
    |*/             \___   ***
    |/                  \____ ****
    +--------------------------------**********-----------> v
    0    ^        ^
         |        |
      v_mp(T1)  v_mp(T2)


  WHEN TEMPERATURE INCREASES:
    1.  The peak SHIFTS TO THE RIGHT  (v_mp increases as sqrt(T)).
    2.  The peak becomes LOWER and the curve becomes BROADER / flatter.
    3.  The fraction of molecules with HIGH speeds INCREASES
        (the right-hand tail gets fatter).
    4.  The AREA under the curve is UNCHANGED (N is the same).
```

The same picture with molar mass:

```
  At the SAME temperature:
      a LIGHT gas (H2)   ->  peak far to the RIGHT, broad and low
      a HEAVY gas (O2)   ->  peak near the LEFT, tall and narrow
```

---

## WORKED EXAMPLE 7.1

Calculate the rms speed of oxygen molecules at 27 degC.
(M for O2 = 32 g/mol = 32 x 10^-3 kg/mol)

```
            ________
           / 3 R T
  c    =  / --------
   rms  \/     M

            ______________________
           /  3 x 8.314 x 300
       =  /  --------------------
        \/       32 x 10^-3

            ____________
           /   7482.6
       =  /  ----------
        \/     0.032

            _____________
       =  \/ 233831

       =  483.6 m/s
```

## WORKED EXAMPLE 7.2

For the same oxygen at 27 degC, find the average speed and the most probable speed.

```
  METHOD 1 - use the ratio (fastest in an exam):

     v_av  =  0.921 x c_rms  =  0.921 x 483.6  =  445.4 m/s

     v_mp  =  0.816 x c_rms  =  0.816 x 483.6  =  394.6 m/s


  METHOD 2 - full formulas (check):

               ________________________
              /  8 x 8.314 x 300
     v_av  = /  ---------------------
           \/    3.1416 x 32 x 10^-3

               ____________
              /  19953.6
          = /  ----------      =  sqrt(198424)  =  445.4 m/s   CORRECT
          \/     0.10053

               ________________________
              /  2 x 8.314 x 300
     v_mp  = /  ---------------------   =  sqrt(155887)  =  394.8 m/s
           \/       0.032

  Order check:   394.8  <  445.4  <  483.6      v_mp < v_av < c_rms   GOOD.
```

## WORKED EXAMPLE 7.3

At what temperature will the rms speed of oxygen molecules be equal to the rms
speed of hydrogen molecules at 27 degC?

```
                    ________
                   / 3 R T
  c_rms   =       / --------          ->      T / M  must be EQUAL
                \/     M

    T(O2)          T(H2)
   -------   =   ---------
    M(O2)          M(H2)

    T(O2)          300
   -------   =   -------
      32             2

    T(O2)  =  32 x 150  =  4800 K
```

Oxygen must be heated to **4800 K** to move as fast as hydrogen does at room
temperature. This is why hydrogen and helium have leaked away from the Earth's
atmosphere but oxygen and nitrogen have not.

## WORKED EXAMPLE 7.4

The rms speed of a gas at 27 degC is 400 m/s. At what temperature will it be
800 m/s?

```
  c ~ sqrt(T)          ->      (c2 / c1)^2  =  T2 / T1

  ( 800 / 400 )^2  =  T2 / 300

        4          =  T2 / 300

        T2  =  1200 K  =  927 degC
```

## WORKED EXAMPLE 7.5

Four molecules have speeds 2, 4, 6 and 8 m/s. Find the average speed and the
rms speed. Show they are different.

```
              2 + 4 + 6 + 8        20
  v_av  =  -----------------  =  ------  =  5 m/s
                   4                4

                4 + 16 + 36 + 64         120
  c^2   =  ----------------------  =  --------  =  30 m^2/s^2
                     4                    4

  c_rms  =  sqrt(30)  =  5.48 m/s


  5.48  >  5      ->     c_rms is ALWAYS greater than v_av.   (Except when
                          all speeds are equal, when they are the same.)
```

---

# TOPIC 8 — DERIVING THE GAS LAWS FROM KINETIC THEORY

All five come from the one master equation:

```
                  1
      P V   =    --- m N c^2                     ... MASTER EQUATION
                  3

  and             1               3
                 --- m c^2   =   --- k T         ... TEMPERATURE
                  2               2
```

## (a) BOYLE'S LAW

```
  P V  =  (1/3) m N c^2  =  (2/3) N x [ (1/2) m c^2 ]  =  (2/3) N x (3/2) k T

  P V  =  N k T

  At CONSTANT TEMPERATURE, and for a fixed mass of gas (N fixed):

        N k T  is a CONSTANT

        =>    P V  =  constant        =>      P  ~  1 / V

  THAT IS BOYLE'S LAW.

  Physical reason: squeeze the gas into half the volume and the molecules
  hit the walls twice as often, so the pressure doubles.
```

## (b) CHARLES' LAW

```
  P V  =  N k T

  At CONSTANT PRESSURE for a fixed mass of gas:

              N k
        V  =  ----- x T        and  N, k, P are all constants
               P

        =>    V  ~  T          at constant pressure

  THAT IS CHARLES' LAW.

  Physical reason: heat the gas and the molecules speed up; to keep the
  pressure the same, the gas must expand.
```

## (c) AVOGADRO'S LAW

```
  Take two gases at the SAME P, SAME V, SAME T.

  Gas 1:      P V  =  (1/3) N1 m1 c1^2
  Gas 2:      P V  =  (1/3) N2 m2 c2^2

  Since the left sides are equal:

        N1 m1 c1^2   =   N2 m2 c2^2                       ... (i)

  Same TEMPERATURE means equal average kinetic energies:

        (1/2) m1 c1^2   =   (1/2) m2 c2^2

        =>    m1 c1^2   =   m2 c2^2                       ... (ii)

  Divide (i) by (ii):

        N1  =  N2

  THAT IS AVOGADRO'S LAW - equal volumes at the same P and T contain
  equal numbers of molecules.
```

## (d) DALTON'S LAW OF PARTIAL PRESSURES

```
  Postulate 4 says there are NO forces between molecules, so each gas in a
  mixture behaves as if the others were not there.

  In a volume V, mixture of gas 1, gas 2, gas 3 ... :

          1                        1
  P  =  ----- ( m1 N1 c1^2 )  +  ----- ( m2 N2 c2^2 )  +  ...
         3 V                      3 V

  P  =  P1  +  P2  +  P3  +  ...

  THAT IS DALTON'S LAW: the total pressure of a mixture of non-reacting
  gases is the SUM of the partial pressures each would exert alone.
```

## (e) GRAHAM'S LAW OF DIFFUSION

```
  The rate of diffusion of a gas is proportional to the speed of its
  molecules, i.e. to c_rms.

                    ________
                   / 3 P
      c_rms  =    / ------
                \/   rho

  At the same pressure:              c_rms  ~   1 / sqrt(rho)

        rate of diffusion  r    ~   1 / sqrt(rho)   ~   1 / sqrt(M)

  +--------------------------------------------------+
  |        r1            rho2             M2         |
  |      ------  =  sqrt------   =  sqrt -----       |
  |        r2            rho1             M1         |
  +--------------------------------------------------+

  THAT IS GRAHAM'S LAW: the rate of diffusion is inversely proportional
  to the square root of the density (or molar mass) of the gas.
```

---

## WORKED EXAMPLE 8.1

Compare the rates of diffusion of hydrogen and oxygen at the same temperature
and pressure.

```
     r(H2)             M(O2)             32
    -------  =   sqrt --------  =  sqrt -----  =  sqrt(16)  =  4
     r(O2)             M(H2)              2

  Hydrogen diffuses 4 TIMES FASTER than oxygen.
```

## WORKED EXAMPLE 8.2

A vessel contains 2 g of hydrogen and 16 g of oxygen at 300 K in a volume of
0.01 m^3. Find the total pressure.

```
  n(H2)  =  2 / 2   =  1 mol
  n(O2)  =  16 / 32 =  0.5 mol

  Total  n  =  1.5 mol       (Dalton's law - just add the moles)

          n R T        1.5 x 8.314 x 300         3741.3
  P  =  ---------  =  -------------------   =  ----------
             V               0.01                  0.01

  P  =  3.74 x 10^5 Pa      (about 3.7 atmospheres)
```

---

# TOPIC 9 — DEGREES OF FREEDOM AND THE LAW OF EQUIPARTITION OF ENERGY

## What is a degree of freedom?

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   A DEGREE OF FREEDOM is an INDEPENDENT WAY in which a molecule   |
  |   can move and therefore store energy.                            |
  |                                                                   |
  |   (= the number of independent coordinates needed to describe     |
  |      the position and configuration of the molecule completely)   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Three kinds:

```
  TRANSLATIONAL  -  moving from place to place (along x, y, z)
  ROTATIONAL     -  spinning about an axis
  VIBRATIONAL    -  the atoms in the molecule oscillating along the bond
                    (like a spring joining them)
```

## MONATOMIC gas — He, Ne, Ar, Kr, Xe, and metal vapours

```
             y
             ^
             |          A single ball. It can only MOVE.
             |   O      A point sphere has no meaningful rotation
             |  /       and there is no bond, so no vibration.
             | /
    ---------+---------> x
            /
           /
          z

  Translational  :  3   (along x, y, z)
  Rotational     :  0
  Vibrational    :  0
                    --
  f  =  3
```

## DIATOMIC gas — H2, O2, N2, CO, HCl

```
                                   z
                                   ^
                                   |
       O=========O                 |          O=========O
       A         B              ---+---              rotation about
                                  /                  the bond axis (y)
    Two balls joined by a        /                   -> moment of inertia
    rigid rod (the bond).       y                       is NEGLIGIBLE,
                                                        so it does NOT count

  Translational  :  3   (the whole molecule moves along x, y, z)
  Rotational     :  2   (about the two axes PERPENDICULAR to the bond;
                         rotation ABOUT the bond does not count)
  Vibrational    :  0   at ordinary temperatures (bond behaves as rigid)
                    --
  f  =  5           at room temperature


  AT HIGH TEMPERATURE the bond starts to stretch and compress:

       O~~~~~~~~~O        one VIBRATIONAL MODE
       <->     <->        which has BOTH kinetic AND potential energy,
                          so it counts as 2 degrees of freedom.

  Translational  :  3
  Rotational     :  2
  Vibrational    :  2   (1 mode x 2)
                    --
  f  =  7           at high temperature
```

## POLYATOMIC gas — H2O, NH3, CH4, CO2, SO2

```
  NON-LINEAR polyatomic (H2O, NH3, CH4, SO2):

              O                Can rotate about ALL THREE axes with
             / \               a real moment of inertia.
            H   H

     Translational  :  3
     Rotational     :  3
     Vibrational    :  2f      (f = number of vibrational modes)
                       ----
     f  =  6          (ignoring vibration - this is what the syllabus uses)


  LINEAR polyatomic (CO2):
     O === C === O
     behaves like a diatomic for rotation:
     Translational 3 + Rotational 2  =  5  (plus vibrational modes)
```

```
  +-------------------+-------+-------+---------+------------------------+
  |  TYPE OF GAS      | TRANS | ROT   | VIB     |  TOTAL f               |
  +-------------------+-------+-------+---------+------------------------+
  |  Monatomic        |   3   |   0   |    0    |   3                    |
  |  Diatomic (rigid) |   3   |   2   |    0    |   5    <- room temp    |
  |  Diatomic (vibr.) |   3   |   2   |    2    |   7    <- high temp    |
  |  Polyatomic       |   3   |   3   |   2f    |   6 + 2f               |
  |  (non-linear)     |       |       |         |   (take 6 unless told) |
  |  Linear triatomic |   3   |   2   |   2f    |   5 + 2f               |
  +-------------------+-------+-------+---------+------------------------+
```

## THE LAW OF EQUIPARTITION OF ENERGY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   STATEMENT:                                                        |
  |                                                                     |
  |   For a dynamic system in THERMAL EQUILIBRIUM at temperature T,     |
  |   the total energy is distributed EQUALLY among all the degrees     |
  |   of freedom, and the energy associated with EACH degree of         |
  |   freedom is  (1/2) k T  per molecule                               |
  |          (or  (1/2) R T  per mole).                                 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The vibration exception — this is examined

```
  TRANSLATION:  energy = (1/2) m vx^2                 KE term only  -> (1/2)kT
  ROTATION:     energy = (1/2) I w^2                  KE term only  -> (1/2)kT

  VIBRATION:    energy = (1/2) m (dy/dt)^2  +  (1/2) K y^2
                          ^KE term              ^PE term

                TWO square terms  ->  2 x (1/2) k T  =  k T

  +-----------------------------------------------------------------+
  |   Each TRANSLATIONAL degree of freedom      ->   (1/2) k T      |
  |   Each ROTATIONAL     degree of freedom     ->   (1/2) k T      |
  |   Each VIBRATIONAL    MODE                  ->        k T       |
  +-----------------------------------------------------------------+
```

The rule underneath it all: **every squared term in the energy expression gets
(1/2) k T**.

## Internal energy from equipartition

```
  Energy per molecule  =  (f / 2) k T

  Energy per mole      =  (f / 2) R T

  Internal energy of n moles:

  +------------------------------------------+
  |                  f                       |
  |         U   =   --- n R T                |
  |                  2                       |
  +------------------------------------------+
```

---

## WORKED EXAMPLE 9.1

Find the internal energy of 2 moles of oxygen at 27 degC.

```
  Oxygen is DIATOMIC  ->  f = 5

         f              5
  U  =  --- n R T  =   --- x 2 x 8.314 x 300
         2              2

     =  2.5 x 2 x 2494.2

     =  12471 J   =  12.47 kJ
```

## WORKED EXAMPLE 9.2

Compare the total internal energy of 1 mole of helium and 1 mole of nitrogen
at the same temperature 300 K.

```
  Helium (monatomic, f = 3):

     U  =  (3/2) x 1 x 8.314 x 300  =  3741 J

  Nitrogen (diatomic, f = 5):

     U  =  (5/2) x 1 x 8.314 x 300  =  6236 J

  RATIO  U(He) : U(N2)  =  3 : 5


  BUT the TRANSLATIONAL kinetic energy is the SAME for both,
  namely (3/2) R T = 3741 J. Nitrogen simply stores extra energy
  in ROTATION.
```

> **TRAP:** "average kinetic energy" in a question almost always means
> **translational** KE = (3/2) kT, which is the same for all gases. "Internal
> energy" or "total energy" means `(f/2) kT`, which is NOT the same for all
> gases. Read the question word by word.

---

# TOPIC 10 — SPECIFIC HEAT CAPACITY OF GASES

## The two specific heats

```
  Cv  -  molar specific heat at CONSTANT VOLUME
         All heat goes into internal energy. No work is done.

  Cp  -  molar specific heat at CONSTANT PRESSURE
         The gas expands, so some heat is spent doing WORK on the
         surroundings. Therefore  Cp  is ALWAYS greater than Cv.
```

```
  MAYER'S RELATION:       Cp  -  Cv   =   R          (per mole)

                                    Cp
  RATIO OF SPECIFIC HEATS:  gamma = ----   (always greater than 1)
                                    Cv
```

## Deriving them from equipartition

```
  STEP 1   U   =   (f / 2) R T          per mole

  STEP 2            dU        f
           Cv  =  ------  =  --- R
                    dT        2

  STEP 3                       f              +-  f      -+
           Cp  =  Cv  +  R  = --- R  +  R  =  | --- + 1   | R
                               2              +-  2      -+

  STEP 4         Cp        (f/2 + 1) R                 2
       gamma =  ----  =  ----------------   =    1 +  ---
                 Cv          (f/2) R                   f

  +-----------------------------------------------------------+
  |         f                 +- f     -+              2      |
  |  Cv =  --- R      Cp  =   | --- + 1 | R    gamma = 1 + --- |
  |         2                 +- 2     -+                  f  |
  +-----------------------------------------------------------+
```

## *** THE TABLE — memorise these nine numbers ***

```
  +-----------------+---+---------------+---------------+---------------+
  |  TYPE OF GAS    | f |      Cv       |      Cp       |    gamma      |
  +-----------------+---+---------------+---------------+---------------+
  |                 |   |               |               |               |
  |  MONATOMIC      | 3 |   (3/2) R     |   (5/2) R     |   5/3 = 1.67  |
  |  He, Ne, Ar     |   |   = 12.47     |   = 20.79     |               |
  |                 |   |               |               |               |
  +-----------------+---+---------------+---------------+---------------+
  |                 |   |               |               |               |
  |  DIATOMIC       | 5 |   (5/2) R     |   (7/2) R     |   7/5 = 1.40  |
  |  (rigid)        |   |   = 20.79     |   = 29.10     |               |
  |  H2, O2, N2     |   |               |               |               |
  |                 |   |               |               |               |
  +-----------------+---+---------------+---------------+---------------+
  |                 |   |               |               |               |
  |  DIATOMIC       | 7 |   (7/2) R     |   (9/2) R     |   9/7 = 1.29  |
  |  (with          |   |   = 29.10     |   = 37.41     |               |
  |   vibration)    |   |               |               |               |
  |                 |   |               |               |               |
  +-----------------+---+---------------+---------------+---------------+
  |                 |   |               |               |               |
  |  POLYATOMIC     | 6 |     3 R       |     4 R       |   4/3 = 1.33  |
  |  H2O, NH3, CH4  |   |   = 24.94     |   = 33.26     |               |
  |                 |   |               |               |               |
  +-----------------+---+---------------+---------------+---------------+

  (all values of Cv, Cp in  J mol^-1 K^-1 ,  taking R = 8.314)
```

Check the pattern — you only really need to remember `f`:

```
  Cv = (f/2) R      Cp = Cv + R      gamma = 1 + 2/f

  f=3 -> 1.5R, 2.5R, 1.67
  f=5 -> 2.5R, 3.5R, 1.40
  f=6 -> 3.0R, 4.0R, 1.33
  f=7 -> 3.5R, 4.5R, 1.29

  NOTICE:  as f increases, gamma DECREASES and gets closer to 1.
           The maximum possible gamma is 5/3, for a monatomic gas.
```

## Specific heat capacity of SOLIDS

```
  In a solid an atom cannot travel or rotate. It can only VIBRATE, and it
  can vibrate along x, y and z.

     3 vibrational modes  x  k T each   =   3 k T per atom

     Per mole:            U  =  3 R T

  +----------------------------------------------------------+
  |                                                          |
  |     C  =  dU/dT  =  3 R  =  3 x 8.314  =  24.9           |
  |                                                          |
  |        about 25 J mol^-1 K^-1  for ALL solids            |
  |                                                          |
  |        This is the LAW OF DULONG AND PETIT.              |
  |                                                          |
  +----------------------------------------------------------+

  For a solid the expansion is tiny, so Cp is very nearly equal to Cv
  and we just write C.

  It FAILS at low temperatures (and for diamond, boron and beryllium
  even at room temperature) - there C falls well below 3R. Explaining
  that needs quantum theory.
```

## Specific heat capacity of WATER

```
  Treat water as a SOLID made of molecules, each molecule having 3 atoms
  (one O and two H). Each ATOM contributes 3 k T.

     Per molecule:   3 atoms  x  3 k T   =   9 k T

     Per mole:       U  =  9 R T     ->     C  =  9 R  =  74.8

  +----------------------------------------------------------+
  |    C(water)  =  9 R  =  about 75 J mol^-1 K^-1           |
  |    (measured value: 75.2 - excellent agreement)          |
  |                                                          |
  |    In everyday units:  75 / 0.018  =  4180 J kg^-1 K^-1  |
  |    which is the familiar  4200 J/kg/K  for water.        |
  +----------------------------------------------------------+
```

Water has an unusually **high** specific heat, which is why the sea warms slowly,
why water is used as a coolant in radiators, and why coastal towns have mild
climates.

---

## WORKED EXAMPLE 10.1

Calculate Cv, Cp and gamma for argon and for nitrogen.

```
  ARGON is MONATOMIC  ->  f = 3

     Cv    =  (3/2) R  =  1.5  x 8.314  =  12.47 J/mol/K
     Cp    =  (5/2) R  =  2.5  x 8.314  =  20.79 J/mol/K
     gamma =  20.79 / 12.47  =  1.67          (= 5/3)


  NITROGEN is DIATOMIC  ->  f = 5

     Cv    =  (5/2) R  =  2.5  x 8.314  =  20.79 J/mol/K
     Cp    =  (7/2) R  =  3.5  x 8.314  =  29.10 J/mol/K
     gamma =  29.10 / 20.79  =  1.40          (= 7/5)
```

## WORKED EXAMPLE 10.2

The ratio of specific heats of a gas is 1.4. Find the number of degrees of
freedom of its molecules, and say what kind of gas it is.

```
                  2                        2
  gamma  =  1  + ---     ->     f   =  ----------
                  f                     gamma - 1

                                 2            2
                       f  =  ----------  =  -----  =  5
                              1.4 - 1        0.4

  f = 5  ->  a DIATOMIC gas (rigid, at ordinary temperature),
             such as O2, N2 or H2.
```

## WORKED EXAMPLE 10.3

How much heat is required to raise the temperature of 3 moles of oxygen from
27 degC to 127 degC (a) at constant volume, (b) at constant pressure?
How much work is done in case (b)?

```
  Oxygen: diatomic,   Cv = (5/2) R,   Cp = (7/2) R
  delta T  =  400 - 300  =  100 K


  (a)  CONSTANT VOLUME

       Q  =  n Cv delta T  =  3 x (2.5 x 8.314) x 100
                           =  3 x 20.785 x 100
                           =  6235.5 J   =  6.24 kJ


  (b)  CONSTANT PRESSURE

       Q  =  n Cp delta T  =  3 x (3.5 x 8.314) x 100
                           =  3 x 29.099 x 100
                           =  8729.7 J   =  8.73 kJ


  (c)  WORK DONE  =  extra heat needed at constant pressure

       W  =  Q(p) - Q(v)  =  8729.7 - 6235.5  =  2494.2 J

       CHECK using  W = n R delta T  =  3 x 8.314 x 100  =  2494.2 J   MATCHES.
```

## WORKED EXAMPLE 10.4

One mole of helium is mixed with one mole of oxygen. Find Cv, Cp and gamma of
the mixture.

```
  For a MIXTURE:

              n1 Cv1  +  n2 Cv2
     Cv  =  ----------------------
                  n1  +  n2

  He (mono):  Cv1 = (3/2) R          O2 (diatomic):  Cv2 = (5/2) R

              1 x 1.5 R  +  1 x 2.5 R          4 R
     Cv  =  ----------------------------  =  -------  =  2 R  =  16.63 J/mol/K
                     1 + 1                       2

     Cp  =  Cv + R  =  3 R  =  24.94 J/mol/K

                Cp        3 R
     gamma  =  ----  =  -------  =  1.5
                Cv        2 R
```

> **TRAP:** you cannot average gamma. You must average **Cv**, then add R,
> then divide. Writing `gamma = (1.67 + 1.4)/2 = 1.535` is wrong.

## WORKED EXAMPLE 10.5

Find the specific heat capacity of aluminium (molar mass 27 g/mol) using the
law of Dulong and Petit, in J/kg/K.

```
  Molar specific heat  C  =  3 R  =  24.94 J mol^-1 K^-1

                                       C            24.94
  Specific heat per kg   s   =   ------------  =  ----------  =  924 J/kg/K
                                  molar mass        0.027

  (Measured value for aluminium: about 900 J/kg/K.  Very good agreement.)
```

---

# TOPIC 11 — MEAN FREE PATH

## The idea

A molecule cannot fly straight across the room. It smashes into another molecule
after a tiny distance, changes direction, flies again, smashes again. Its path is
a jagged zig-zag.

```
                       *
                      / \
      START           /   \                 * = a collision
        o            /     \
         \          /       \      /\
          \        /         \    /  \
           \      /           \  /    \
            \    /             \/      \        /\
             \  /               *       \      /  \
              \/                          \    /    \
               *                           \  /      \
                                            \/        \
                                             *         \
                                                        \
                                                         o  END

      Each straight piece has a different length.
      The AVERAGE of all these straight-line pieces is the MEAN FREE PATH.
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   MEAN FREE PATH (lambda) is the AVERAGE DISTANCE travelled by   |
  |   a molecule BETWEEN TWO SUCCESSIVE COLLISIONS.                  |
  |                                                                  |
  |               total distance travelled                           |
  |   lambda  =  --------------------------                          |
  |               number of collisions                               |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Deriving the formula (outline)

```
  Picture a molecule of diameter d sweeping out a cylinder as it moves.
  It will hit any other molecule whose CENTRE lies within a distance d
  of its own centre.

            <----------  v x t  ---------->
        +-------------------------------------+
        |     o        o          o           |
      ( |  o      o         o          o      | )    radius of the cylinder
        |        o      o        o            |      = d
        +-------------------------------------+

     Volume of the cylinder swept in time t  =  pi d^2 (v t)

     Number of molecules in it  =  n x pi d^2 v t      (n = number density)

     That is the number of collisions in time t.

                distance travelled        v t              1
     lambda  =  --------------------  = ------------  = ---------
                number of collisions     n pi d^2 v t    n pi d^2

  Maxwell corrected this because the OTHER molecules are moving too.
  The relative speed calculation introduces a factor sqrt(2):

  +-------------------------------------------------------------+
  |                                                             |
  |                            1                                |
  |         lambda   =   -------------------                    |
  |                       sqrt(2) pi d^2 n                      |
  |                                                             |
  |         d = diameter of a molecule                          |
  |         n = N / V = number of molecules per unit volume     |
  |                                                             |
  +-------------------------------------------------------------+
```

## In terms of pressure and temperature

```
  Since   P = n k T  ->  n = P / (k T) :

  +-------------------------------------------------------------+
  |                                                             |
  |                           k T                               |
  |         lambda   =   -------------------                    |
  |                       sqrt(2) pi d^2 P                      |
  |                                                             |
  +-------------------------------------------------------------+

  Also, since  rho = m n :

                             m
         lambda   =   -------------------
                       sqrt(2) pi d^2 rho
```

## WHAT DOES THE MEAN FREE PATH DEPEND ON? (guaranteed 2-mark question)

```
  +-----------------------+-------------------------+---------------------+
  |  QUANTITY             |  DEPENDENCE             |  MEANING            |
  +-----------------------+-------------------------+---------------------+
  |  Number density n     |  lambda ~ 1 / n         |  crowded gas        |
  |                       |                         |  -> short path      |
  |  Molecular diameter d |  lambda ~ 1 / d^2       |  fat molecules      |
  |                       |                         |  -> short path      |
  |  Pressure P (T fixed) |  lambda ~ 1 / P         |  squeeze it         |
  |                       |                         |  -> short path      |
  |  Temperature T        |  lambda ~ T             |  heat at constant   |
  |  (P fixed)            |                         |  P -> longer path   |
  |  Temperature T        |  lambda is INDEPENDENT  |  n is unchanged     |
  |  (V fixed)            |  of T                   |                     |
  |  Density rho          |  lambda ~ 1 / rho       |                     |
  +-----------------------+-------------------------+---------------------+

  NOTE: lambda does NOT depend on the SPEED of the molecules, so it does
  NOT depend on temperature at constant VOLUME.
```

## Collision frequency

```
                                            v_av
  Collision frequency  Z  =  ----------------------------
                                          lambda

  = the number of collisions a molecule makes per second
  (typically about 10^9 per second at room conditions!)

                             lambda
  Relaxation time  tau  =  ----------
                              v_av
```

---

## WORKED EXAMPLE 11.1

Estimate the mean free path of a nitrogen molecule at 27 degC and 1 atm.
Take the molecular diameter as 2 x 10^-10 m.

```
                  k T
  lambda  =  -------------------
              sqrt(2) pi d^2 P

  Numerator:     k T  =  1.38 x 10^-23 x 300  =  4.14 x 10^-21

  Denominator:   sqrt(2) x pi   =  1.414 x 3.1416  =  4.443

                 d^2  =  (2 x 10^-10)^2  =  4 x 10^-20

                 4.443 x 4 x 10^-20 x 1.013 x 10^5
                    =  1.777 x 10^-19 x 1.013 x 10^5
                    =  1.800 x 10^-14

               4.14 x 10^-21
  lambda  =  -----------------   =   2.3 x 10^-7 m
               1.800 x 10^-14
```

```
  COMPARE:    lambda        2.3 x 10^-7
             --------  =  ---------------  =  1150
                d           2 x 10^-10

  A molecule travels about 1000 times its own diameter between collisions.
  That is why the "point molecule" assumption works so well.
```

## WORKED EXAMPLE 11.2

For the nitrogen of Example 11.1, find the collision frequency.
(Average speed of N2 at 300 K = 476 m/s)

```
            v_av         476
  Z  =  ----------  =  -----------  =  2.07 x 10^9 collisions per second
          lambda       2.3 x 10^-7

  Each molecule collides about TWO THOUSAND MILLION times a second.
```

## WORKED EXAMPLE 11.3

The mean free path of a gas at 1 atm is 2 x 10^-7 m. What will it be at
0.25 atm at the same temperature?

```
  At constant T:      lambda  ~  1 / P

     lambda2       P1          1
    ---------  =  ----  =  ---------  =  4
     lambda1       P2         0.25

     lambda2  =  4 x 2 x 10^-7  =  8 x 10^-7 m
```

> **TRAP:** a very common wrong answer is that lambda increases with temperature
> always. It increases with T **only at constant pressure**. At constant
> **volume**, heating the gas does not change n at all, so lambda is unchanged.

---

# TOPIC 12 — BROWNIAN MOTION

## What Robert Brown saw

```
  In 1827 Robert Brown looked through a microscope at pollen grains
  suspended in water. The grains would not sit still. They jiggled about
  in a random, jerky, never-ending zig-zag.

              . . .
            .       \
          .          \  .
         /            \/ \        one pollen grain
        /                  \      observed every 30 seconds
       .          .         \
        \        / \        /
         \      /   \      .
          \    .     \    /
           \  /       \  /
            \/         \/
             .          .
```

## The explanation

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   The suspended particle is bombarded from all sides by the      |
  |   invisible molecules of the fluid. At any instant the number    |
  |   of hits on one side is not exactly equal to the number on      |
  |   the opposite side, so there is an UNBALANCED force which       |
  |   pushes the particle one way. A moment later the imbalance      |
  |   is in a different direction.                                   |
  |                                                                  |
  |   THIS IS DIRECT VISIBLE EVIDENCE THAT MATTER IS MADE OF         |
  |   MOLECULES IN CONTINUOUS RANDOM MOTION.                         |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
                        molecules hitting

              \    |    /            /
               \   |   /      |     /
                v  v  v       v    v
              -------------------
             (      PARTICLE     )  ---->  net push this way,
              -------------------           because more hits arrived
                ^     ^    ^                from the left this instant
               /      |     \
              /       |      \
```

## Brownian motion becomes faster when...

```
  +-------------------------------+----------------------------------+
  |  FACTOR                       |  EFFECT ON BROWNIAN MOTION       |
  +-------------------------------+----------------------------------+
  |  Higher TEMPERATURE           |  FASTER (molecules move faster)  |
  |  SMALLER suspended particle   |  FASTER (easier to push)         |
  |  LOWER viscosity of the fluid |  FASTER (less resistance)        |
  |  LOWER density of the fluid   |  FASTER                          |
  |  Heavier / bigger particle    |  SLOWER, may stop being visible  |
  +-------------------------------+----------------------------------+
```

Einstein explained Brownian motion mathematically in 1905, and Perrin's
experiments on it gave one of the first good measurements of the Avogadro
number — which finally convinced the last doubters that atoms are real.

---

# TOPIC 13 — REAL GASES AND THE LIMITS OF THE THEORY

```
  WHERE THE IDEAL GAS MODEL BREAKS DOWN:

  1.  At HIGH PRESSURE the molecules are squeezed close together, so
      their OWN VOLUME is no longer negligible (postulate 3 fails).

  2.  At LOW TEMPERATURE the molecules move slowly and the
      INTERMOLECULAR ATTRACTION becomes important (postulate 4 fails).

  3.  Near LIQUEFACTION the theory fails completely - an ideal gas can
      never be liquefied, but real gases can.

  The van der Waals equation patches both problems:

        +-           a n^2  -+
        |  P   +   --------  |  ( V  -  n b )   =   n R T
        +-            V^2   -+
              ^                     ^
              |                     |
        correction for       correction for the
        the attractive       volume of the
        forces               molecules themselves
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I convert every temperature to KELVIN?  (add 273)

  [ ]  Did I put molar mass M in kg/mol, not g/mol?
       (32 g/mol  ->  32 x 10^-3 kg/mol)

  [ ]  In the pressure derivation, did I write "MEAN SQUARE speed"
       and not "average speed"?

  [ ]  In the pressure derivation, did I draw the cube, mark the
       molecule, show the momentum change 2 m vx, and state the
       assumption at each step?

  [ ]  Did I say the average KE depends ONLY on temperature
       (not on pressure, volume or the nature of the gas)?

  [ ]  Did I use the right f?
       mono 3  |  diatomic 5  |  diatomic + vibration 7  |  polyatomic 6

  [ ]  For a mixture, did I average Cv (never gamma)?

  [ ]  Did I check the order  v_mp < v_av < c_rms ?

  [ ]  Does c_rms have a sensible size? For ordinary gases at room
       temperature it should be a few hundred m/s, never 5 m/s
       and never 50 000 m/s.

  [ ]  Did I write the UNIT after every numerical answer?
       (m/s , J , Pa , J mol^-1 K^-1)

  [ ]  For mean free path, is my answer around 10^-7 m at ordinary
       pressure? If I got 10^-2 m or 10^-15 m, I made an arithmetic slip.

  [ ]  Did I state, when asked about absolute zero, that molecular
       motion CEASES and the pressure becomes zero?
```
