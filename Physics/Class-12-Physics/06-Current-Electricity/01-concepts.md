# Current Electricity — Concepts Explained Simply

Start here even if you have never understood a circuit in your life.
Everything in this chapter is explained with **one picture: water in a pipe.**
Read the topics in order. Do not skip Topic 3 or Topic 12 — they feed the
8-mark question.

---

# THE ONE PICTURE FOR THE WHOLE CHAPTER

```
   A WATER TANK AND A PIPE                AN ELECTRIC CIRCUIT
   -----------------------                -------------------

        ____________                         +---| |---+
       |   TANK     |                        |   cell  |
       |   ~~~~~~   |   high level           |         |
       |____________|                        |         |
             |                               |         |
             |  pipe                         |         |   wire
             |                               |         |
        =====#=====   narrow bit             +--/\/\/--+
             |        (a "restriction")           R
             |
             V  water flows                  current flows

   Water per second   =  CURRENT      I
   Height difference  =  VOLTAGE      V
   Narrow bit         =  RESISTANCE   R
   The pump itself    =  EMF          E
   Friction inside                    INTERNAL
   the pump           =  RESISTANCE   r
```

**Push harder (more V) -> more flow (more I).
Narrower pipe (more R) -> less flow (less I).**

That is Ohm's law. Everything else is detail.

---

# TOPIC 1 — Electric current

## What it is

Electric current is **the amount of charge flowing past a point in one second.**

```
                     charge that crossed         q
   CURRENT    I  =  ----------------------  =  -----
                       time taken                t

   Unit:  ampere (A)          1 A  =  1 coulomb / second

   Instantaneous current  I  =  dq / dt
```

## The definition of one ampere (2-mark answer)

```
  If ONE COULOMB of charge crosses a section of a conductor in ONE SECOND,
  the current through it is ONE AMPERE.
```

## Which way does current flow?

```
  ELECTRONS actually move   :  from  -  terminal  to  +  terminal
  CONVENTIONAL CURRENT      :  from  +  terminal  to  -  terminal

        ---| |---            long line = POSITIVE (+)
           | |               short line = NEGATIVE (-)
           + -

  We ALWAYS use conventional current in problems. It is the direction of
  flow of POSITIVE charge, i.e. OPPOSITE to the electron flow.
```

## Current is a scalar

Current has a direction but it does **not** obey the parallelogram law of
vector addition, so it is treated as a **scalar**. At a junction currents
simply add up algebraically.

> **TRAP:** "Current has direction, so it must be a vector." **WRONG.**
> Current is a **scalar**. This is a favourite 2-mark question.

## WORKED EXAMPLE 1.1

**Q.** 6.25 x 10^18 electrons pass through a wire in 2 seconds. Find the
current.

```
  STEP 1   Total charge
           q  =  number of electrons  x  charge of one electron
              =  6.25 x 10^18   x   1.6 x 10^-19
              =  1.0  C

  STEP 2   Current
                 q       1.0
           I  = ---  =  -----  =  0.5 A
                 t        2

  ANSWER:  I = 0.5 ampere
```

---

# TOPIC 2 — Current density

Current tells you *how much* flows. Current density tells you *how crowded*
the flow is.

```
                              current            I
   CURRENT DENSITY   J  =  --------------  =   -----
                            area of cross        A
                            section

   Unit:  A m^-2         J is a VECTOR (direction = direction of flow)

   For a general area:    I  =  J . A   =  J A cos(theta)
```

```
  Same current, two pipes:

   THICK WIRE                        THIN WIRE
   ==================                ------------------
   ==== I = 2 A =====                ---- I = 2 A -----
   ==================                ------------------
   big A  ->  small J                small A  ->  BIG J
                                     (this is why the thin wire
                                      gets hot and melts first)
```

## Microscopic form of Ohm's law

```
   J  =  sigma  E              sigma = conductivity
                               E     = electric field inside the conductor

   also           E  =  rho  J
```

## WORKED EXAMPLE 2.1

**Q.** A current of 5 A flows through a wire of cross-section 2 mm^2. Find
the current density.

```
  STEP 1   Convert the area to SI
           A = 2 mm^2 = 2 x (10^-3 m)^2 = 2 x 10^-6 m^2

  STEP 2                I           5
           J   =      -----  =  ------------  =  2.5 x 10^6  A m^-2
                        A        2 x 10^-6

  ANSWER:  J = 2.5 x 10^6 A m^-2
```

> **TRAP:** 1 mm^2 is **10^-6 m^2**, not 10^-3 m^2. Squaring the milli is
> where most marks die.

---

# TOPIC 3 — Drift velocity, relaxation time and mobility

*** THIS TOPIC GIVES A GUARANTEED 4-MARK DERIVATION ***

## Why electrons need a special "drift" velocity

Inside a metal, free electrons are already flying about at enormous speeds
(about 10^5 m/s) in **random** directions. That random motion carries no
current, because for every electron going right there is one going left.

When you switch on a battery, an electric field E appears inside the wire.
Every electron now gets a small extra push in one direction. On top of its
wild random zig-zag, the whole crowd **creeps** slowly one way.

```
  NO BATTERY                          BATTERY CONNECTED
  ----------                          -----------------

    \ | /  ^  <-                        \ | /  ^  <-
   <- e  \ | / ->                      <- e  \ | / ->        E
     / \  ->  \                          / \  ->  \       ------->
   random zig-zag                      same zig-zag, but the
   NET movement = 0                    whole crowd slides slowly ->
   NO CURRENT                          NET DRIFT  ->  CURRENT
```

## Definitions (learn these word for word)

```
  DRIFT VELOCITY (vd)
      The average velocity with which free electrons move inside a
      conductor under an applied electric field.
      Unit: m/s.   Typical value: about 10^-4 m/s  (VERY slow).

  RELAXATION TIME (tau)
      The average time between two successive collisions of an electron
      with the ions of the lattice.
      Unit: second.   Typical value: about 10^-14 s.

  MOBILITY (mu)
      The drift velocity acquired per unit electric field.

                     vd
           mu   =   ----          Unit:  m^2 V^-1 s^-1
                     E
```

## Drift velocity from the field

```
                              e E
   Force on an electron  =  - e E     ->  acceleration  a  =  -----
                                                               m

   In time tau the electron gains velocity  a tau , then a collision
   wipes it out and it starts again. So the AVERAGE gained velocity is

                    +--------------+
                    |    e E tau   |
             vd  =  |   ---------  |          (magnitude)
                    |       m      |
                    +--------------+

                       vd        e tau
   therefore    mu = ------  =  -------
                        E          m
```

## *** DERIVATION OF  I = n A e vd  *** (4 marks, asked again and again)

```
  Let    n  =  number of free electrons per unit volume (m^-3)
         A  =  area of cross-section of the conductor
         vd =  drift velocity
         e  =  charge on one electron

  STEP 1   Take a small length  vd x t  of the wire.

           |<--------- vd t --------->|
           +--------------------------+
           |                          |   A  (cross-section)
           |          . . . . . .     |
           +--------------------------+
                                       ---> vd

           Every electron inside this block will cross the far end
           in time  t , because the block is exactly  vd x t  long.

  STEP 2   Volume of the block   =  A  x  vd  x  t

  STEP 3   Number of electrons in it  =  n  x  A  vd  t

  STEP 4   Total charge in it
                q  =  (n A vd t)  x  e

  STEP 5   Current
                       q        n A vd t e
                I  =  ---   =  ------------   =  n A e vd
                       t             t

                          +---------------------+
                          |   I  =  n A e vd    |
                          +---------------------+

  STEP 6   Dividing by A gives the current density

                I
           J = ---  =  n e vd
                A
```

## WORKED EXAMPLE 3.1

**Q.** A copper wire of cross-section 1.0 x 10^-6 m^2 carries a current of
1.5 A. Copper has n = 8.5 x 10^28 free electrons per m^3. Find the drift
velocity.

```
  STEP 1   Rearrange  I = n A e vd

                        I
              vd  =  ----------
                      n A e

  STEP 2   Substitute

                             1.5
              vd  =  ------------------------------------------
                      (8.5 x 10^28)(1.0 x 10^-6)(1.6 x 10^-19)

                             1.5
                  =  ----------------
                      1.36 x 10^4

                  =  1.1 x 10^-4  m/s

  ANSWER:  vd = 1.1 x 10^-4 m/s   (about 0.4 metre per hour!)
```

> **TRAP:** "If electrons crawl at 10^-4 m/s, why does the bulb light up
> instantly?" Because the **electric field** travels along the wire at
> nearly the speed of light and starts ALL the electrons everywhere at
> once. You do not wait for one electron to travel from the switch to the
> bulb. This is a favourite 2-mark question.

## The relations you must be able to quote

```
  +--------------------------------------------------------------+
  |   vd  is  DIRECTLY proportional to  the current  I            |
  |   vd  is  DIRECTLY proportional to  the field    E            |
  |   vd  is  INVERSELY proportional to the area     A            |
  |   vd  is  INVERSELY proportional to  n                        |
  |                                                              |
  |   Doubling the LENGTH of the wire at the same voltage         |
  |   HALVES E , so it halves vd .                                |
  +--------------------------------------------------------------+
```

---

# TOPIC 4 — Ohm's law, ohmic and non-ohmic conductors

## Statement (2-mark answer)

```
  OHM'S LAW
     At constant temperature (and constant physical conditions), the
     current flowing through a conductor is directly proportional to
     the potential difference across its ends.

               I  is proportional to  V

               V  =  I R           R = resistance (constant)
```

## Ohmic conductors

```
  A conductor that OBEYS Ohm's law.  Its V-I graph is a STRAIGHT LINE
  through the origin.

        I |          /
          |        /
          |      /            slope = 1 / R
          |    /
          |  /                  a BIGGER slope means a SMALLER resistance
          |/
          +------------------ V

  Examples: copper, silver, all metals at constant temperature,
            nichrome, manganin.
```

## Non-ohmic conductors

```
  A conductor that does NOT obey Ohm's law. Its V-I graph is NOT a
  straight line through the origin.

  (a) SEMICONDUCTOR DIODE          (b) THERMISTOR / ELECTROLYTE
                                       (curved)
        I |         |
          |         |                    I |        __/
          |        /                       |     __/
          |       /                        |   _/
   -------+------------ V           -------+------------- V
          |                                |
    (huge current in forward bias,
     almost none in reverse bias)

  (c) VACUUM TUBE / TRIODE     (d) GaAs - current DECREASES as V rises
                                    (negative resistance region)

  Examples of NON-OHMIC devices:
     semiconductor diode, transistor, thermistor, vacuum tube,
     electrolytes, gases (discharge tube), LDR
```

## Limitations of Ohm's law (2 or 4 marks)

```
  1.  It holds only at CONSTANT TEMPERATURE.

  2.  It fails for semiconductor devices - diodes, transistors, thermistors.

  3.  It fails for electrolytes and for gases in a discharge tube.

  4.  For some materials V and I are related but NOT linearly
      (the graph is curved).

  5.  For some materials (e.g. GaAs) the SAME current can correspond to
      more than one voltage.

  6.  For some materials the relation depends on the DIRECTION of V
      (a diode conducts one way only).

  7.  It is not a fundamental law of nature - it is only an empirical
      rule for a certain class of materials.
```

## WORKED EXAMPLE 4.1

**Q.** A potential difference of 12 V drives a current of 400 mA through a
resistor. Find its resistance.

```
  STEP 1   Convert:  400 mA = 0.4 A

  STEP 2         V        12
           R =  ---  =  -----  =  30 ohm
                 I        0.4

  ANSWER:  R = 30 ohm
```

> **TRAP:** mA means 10^-3 A. Every year students divide 12 by 400.

---

# TOPIC 5 — Resistance, resistivity and conductivity

## Resistance

```
  RESISTANCE is the opposition offered by a conductor to the flow of
  current through it.

                 V
           R  = ---              Unit:  ohm         1 ohm = 1 volt/ampere
                 I

  One OHM:  if a p.d. of 1 volt drives a current of 1 ampere through a
            conductor, its resistance is 1 ohm.
```

## Resistivity (specific resistance)

```
  Experiment shows:      R is proportional to L
                         R is inversely proportional to A

                       +------------------+
                       |          rho L   |
                       |   R  =  -------- |
                       |             A    |
                       +------------------+

  Rearranged:
                        R A
             rho  =   -------      Unit:  ohm metre  (ohm m)
                         L

  DEFINITION OF RESISTIVITY
     The resistance of a conductor of unit length and unit area of
     cross-section, made of that material.
     Equivalently: the resistance of a UNIT CUBE of the material,
     measured between opposite faces.

  IMPORTANT:  rho depends ONLY on the MATERIAL and the TEMPERATURE.
              It does NOT depend on the length or the thickness.
```

## Conductivity

```
                       1
        sigma   =   ------           Unit:  ohm^-1 m^-1  or  siemens/metre
                     rho

  Conductance  G = 1 / R             Unit:  ohm^-1  (siemens, S)
                                     also called "mho"
```

## Typical values (worth remembering roughly)

```
  +--------------------------+-------------------------+-----------------+
  |  MATERIAL                |  RESISTIVITY (ohm m)    |  TYPE           |
  +--------------------------+-------------------------+-----------------+
  |  Silver                  |  1.6 x 10^-8            |  best conductor |
  |  Copper                  |  1.7 x 10^-8            |  conductor      |
  |  Aluminium               |  2.7 x 10^-8            |  conductor      |
  |  Tungsten                |  5.6 x 10^-8            |  conductor      |
  |  Nichrome                |  about 1.0 x 10^-6      |  alloy (heater) |
  |  Manganin / Constantan   |  about 4.4 x 10^-7      |  alloy          |
  |  Silicon                 |  about 2300             |  semiconductor  |
  |  Glass                   |  10^10  to  10^14       |  insulator      |
  +--------------------------+-------------------------+-----------------+

  Conductors     10^-8  to 10^-6  ohm m
  Semiconductors 10^-5  to 10^6   ohm m
  Insulators     10^8   to 10^16  ohm m
```

## *** DERIVATION OF  rho = m / (n e^2 tau)  *** (4 marks)

```
  STEP 1   The drift velocity produced by a field E is

                    e E tau
            vd  =  ---------
                       m

  STEP 2   The current, from Topic 3, is

            I  =  n A e vd

  STEP 3   Substitute vd :

                                 e E tau        n A e^2 E tau
            I  =  n A e   x     ---------   =  ---------------
                                    m                m

  STEP 4   The field inside a wire of length L carrying a p.d. V is

                    V
            E  =  -----
                    L

           so
                    n A e^2 tau       V
            I  =  --------------  x  ---
                        m             L

  STEP 5   Write it as Ohm's law  V = I R :

                     V           m L
            R  =   -----  =  ------------
                     I        n e^2 tau A

  STEP 6   Compare with  R = rho L / A :

                        +----------------------+
                        |             m        |
                        |   rho  =  ---------- |
                        |            n e^2 tau |
                        +----------------------+

           and                     n e^2 tau
                     sigma  =   --------------
                                      m
```

## What this formula TELLS you (examiners love this)

```
  rho  goes UP    when  tau goes DOWN   (more collisions -> more resistance)
  rho  goes DOWN  when  n   goes UP     (more carriers  -> less resistance)

  METALS heated       :  tau falls (ions vibrate more) , n is unchanged
                         ->  rho RISES

  SEMICONDUCTORS heated:  n rises ENORMOUSLY
                         ->  rho FALLS
```

## WORKED EXAMPLE 5.1

**Q.** Find the resistance of a copper wire 2 m long and 0.5 mm in radius.
(rho for copper = 1.7 x 10^-8 ohm m)

```
  STEP 1   Area of cross-section
           A = pi r^2 = 3.14 x (0.5 x 10^-3)^2
                      = 3.14 x 2.5 x 10^-7
                      = 7.85 x 10^-7  m^2

  STEP 2          rho L        (1.7 x 10^-8)(2)
           R  =  -------  =  ---------------------
                     A          7.85 x 10^-7

                     3.4 x 10^-8
              =   ----------------
                     7.85 x 10^-7

              =   0.043  ohm

  ANSWER:  R = 0.043 ohm  (about 4.3 x 10^-2 ohm)
```

## WORKED EXAMPLE 5.2

**Q.** Estimate the relaxation time for copper.
(rho = 1.7 x 10^-8 ohm m, n = 8.5 x 10^28 m^-3, m = 9.1 x 10^-31 kg)

```
  STEP 1   From  rho = m / (n e^2 tau) ,

                         m
            tau  =  -------------
                     n e^2 rho

  STEP 2   Denominator
            = (8.5 x 10^28)(1.6 x 10^-19)^2 (1.7 x 10^-8)
            = (8.5 x 10^28)(2.56 x 10^-38)(1.7 x 10^-8)
            = 3.7 x 10^-17

  STEP 3
                     9.1 x 10^-31
            tau  =  ---------------   =  2.5 x 10^-14  s
                     3.7 x 10^-17

  ANSWER:  tau = 2.5 x 10^-14 second
```

---

# TOPIC 6 — Factors affecting resistance

```
  +----+---------------------+--------------------------------------------+
  | #  |  FACTOR             |  EFFECT ON R                               |
  +----+---------------------+--------------------------------------------+
  | 1  |  Length  L          |  R is DIRECTLY proportional to L           |
  |    |                     |  (longer wire -> more resistance)          |
  +----+---------------------+--------------------------------------------+
  | 2  |  Area A (thickness) |  R is INVERSELY proportional to A          |
  |    |                     |  (thicker wire -> less resistance)         |
  +----+---------------------+--------------------------------------------+
  | 3  |  Material (rho)     |  R is DIRECTLY proportional to rho         |
  +----+---------------------+--------------------------------------------+
  | 4  |  Temperature        |  metals : R INCREASES with temperature     |
  |    |                     |  semicon: R DECREASES with temperature     |
  +----+---------------------+--------------------------------------------+
```

## The stretching rule — an exam favourite

When a wire is **stretched**, its **volume stays the same**. Length goes up,
area goes down, so resistance shoots up fast.

```
   If the length becomes  n  times the original,
   the area becomes  1/n  times, so

                +----------------------+
                |    R'  =  n^2  R     |
                +----------------------+

   Stretched to double length   ->   R becomes  4 R
   Stretched to triple length   ->   R becomes  9 R

   If instead the RADIUS is halved (volume constant),
   the length becomes 4 times, so   R'  =  16 R
```

## WORKED EXAMPLE 6.1

**Q.** A wire of resistance 3 ohm is stretched so that its length becomes
three times the original. Find the new resistance.

```
  STEP 1   Volume is constant  ->  R' = n^2 R  with n = 3

  STEP 2   R' = 9 x 3 = 27 ohm

  ANSWER:  27 ohm
```

> **TRAP:** Students write R' = 3R because "length is tripled". Wrong.
> The wire also became **thinner**. Both effects multiply: n x n = n^2.

## Cutting a wire

```
  A wire of resistance R cut into  n  equal pieces:
        each piece has resistance   R / n

  If those n pieces are then joined in PARALLEL:
        total  =  R / n^2
```

---

# TOPIC 7 — Effect of temperature on resistance

## The formula

```
   +--------------------------------------------------------------+
   |                                                              |
   |    R(t)  =  R(0) [ 1  +  alpha  t ]                          |
   |                                                              |
   |    R(0) = resistance at 0 degree C                           |
   |    R(t) = resistance at t degree C                           |
   |    alpha = temperature coefficient of resistance             |
   |                                                              |
   +--------------------------------------------------------------+

   Between any two temperatures t1 and t2 :

        R2  =  R1 [ 1 + alpha (t2 - t1) ]

   Solving for alpha :

                      R2  -  R1
        alpha  =  -------------------            Unit:  per degree C
                    R1 (t2 - t1)                        (or  K^-1)
```

## Definition of alpha (2-mark answer)

```
  TEMPERATURE COEFFICIENT OF RESISTANCE
     The increase in resistance per unit original resistance per
     unit rise in temperature.
```

## Sign of alpha

```
  +-----------------------+---------------+--------------------------------+
  |  MATERIAL             |  SIGN of alpha|  BEHAVIOUR                     |
  +-----------------------+---------------+--------------------------------+
  |  Metals (Cu, Ag, Pt)  |  POSITIVE     |  R rises when heated           |
  |  Semiconductors       |  NEGATIVE     |  R falls when heated           |
  |  (Si, Ge, carbon)     |               |                                |
  |  Electrolytes         |  NEGATIVE     |  R falls when heated           |
  |  Alloys: manganin,    |  almost ZERO  |  R hardly changes  -> used for |
  |  constantan, nichrome |               |  standard resistance coils     |
  +-----------------------+---------------+--------------------------------+
```

```
   METAL                            SEMICONDUCTOR
     R |        /                     R |\
       |      /                         | \
       |    /                           |  \__
       |  /                             |     \____
       |/                               |          ------
       +------------- T                 +------------------ T
       straight, rising                 falling curve
```

## WORKED EXAMPLE 7.1

**Q.** The resistance of a coil is 5 ohm at 0 degree C. If
alpha = 0.004 per degree C, find its resistance at 100 degree C.

```
  STEP 1   R(t) = R(0)[1 + alpha t]

  STEP 2   R(100) = 5 [ 1 + 0.004 x 100 ]
                  = 5 [ 1 + 0.4 ]
                  = 5 x 1.4
                  = 7 ohm

  ANSWER:  7 ohm
```

## Superconductivity (a 2-mark bonus)

```
  Below a certain CRITICAL TEMPERATURE some materials (mercury below
  4.2 K) lose ALL resistance. Current once started flows for ever with
  no source of emf. This is SUPERCONDUCTIVITY.
```

---

# TOPIC 8 — The resistor colour code

A small resistor cannot carry printed numbers, so its value is written in
coloured rings.

```
      +--------------------------+
  ----|  ||  ||  ||        ||    |----
      |  A   B   C         D     |
      +--------------------------+

   BAND A  -  first digit
   BAND B  -  second digit
   BAND C  -  multiplier (number of zeros / power of 10)
   BAND D  -  tolerance (how accurate)

   VALUE  =  ( AB )  x  10^C     ohm     ±  D %
```

## The table (memorise)

```
  +------------+--------+-------------------+
  |  COLOUR    | DIGIT  |  MULTIPLIER       |
  +------------+--------+-------------------+
  |  Black     |   0    |  10^0             |
  |  Brown     |   1    |  10^1             |
  |  Red       |   2    |  10^2             |
  |  Orange    |   3    |  10^3             |
  |  Yellow    |   4    |  10^4             |
  |  Green     |   5    |  10^5             |
  |  Blue      |   6    |  10^6             |
  |  Violet    |   7    |  10^7             |
  |  Grey      |   8    |  10^8             |
  |  White     |   9    |  10^9             |
  +------------+--------+-------------------+
  |  Gold      |   -    |  10^-1            |   tolerance  ± 5 %
  |  Silver    |   -    |  10^-2            |   tolerance  ± 10 %
  |  No colour |   -    |    -              |   tolerance  ± 20 %
  +------------+--------+-------------------+
```

## Memory sentence

```
   B    B    ROY   of   Great  Britain  has  a  Very  Good   Wife
   |    |    | |         |       |               |     |      |
  Black Brown R O        Green   Blue          Violet Grey   White
             e r                                  7    8      9
             d a                                  ^
             2 n                        (Yellow = 4 sits between
               g                         Orange 3 and Green 5)
               e
               3
```

## WORKED EXAMPLE 8.1

**Q.** A resistor has the bands **Red, Violet, Orange, Gold**. Find its
value and tolerance.

```
  Red    ->  2          first digit
  Violet ->  7          second digit
  Orange ->  10^3       multiplier
  Gold   ->  ± 5 %      tolerance

  VALUE  =  27  x  10^3  ohm   =  27000 ohm  =  27 kilo-ohm  ± 5 %

  Range: from 25650 ohm to 28350 ohm.
```

## WORKED EXAMPLE 8.2

**Q.** What are the colours of a 4700 ohm ± 10 % resistor?

```
  4700  =  47 x 10^2

  4  ->  Yellow
  7  ->  Violet
  10^2 -> Red
  ± 10 % -> Silver

  ANSWER:  Yellow, Violet, Red, Silver
```

---

# TOPIC 9 — Combination of resistors

## SERIES — one path only

```
        A            B            C            D
    ----/\/\/--------/\/\/--------/\/\/--------
          R1           R2           R3

    <------------------ V ------------------->

    SAME CURRENT  I  through all of them.
    The VOLTAGES ADD UP.
```

### Derivation

```
  V  =  V1 + V2 + V3          (potential differences add)

  I Rs  =  I R1  +  I R2  +  I R3       (Ohm's law on each)

  Divide by I :

               +-------------------------------+
               |   Rs  =  R1  +  R2  +  R3     |
               +-------------------------------+

  KEY POINTS
     - The effective resistance is LARGER than the largest one.
     - Same current everywhere.
     - V is shared in the RATIO of the resistances:  V1 : V2 = R1 : R2
```

## PARALLEL — several paths

```
              +------/\/\/------+
              |        R1       |
              |                 |
        ------+------/\/\/------+------
              |        R2       |
              |                 |
              +------/\/\/------+
                       R3

        <---------- V ---------->

    SAME VOLTAGE  V  across all of them.
    The CURRENTS ADD UP.
```

### Derivation

```
  I  =  I1 + I2 + I3          (currents add at the junction)

    V        V        V        V
  ----  =  ----  +  ----  +  ----
    Rp       R1       R2       R3

  Divide by V :

           +-------------------------------------+
           |    1        1        1        1     |
           |  ----  =  ----  +  ----  +  ----    |
           |    Rp       R1       R2       R3    |
           +-------------------------------------+

  KEY POINTS
     - The effective resistance is SMALLER than the smallest one.
     - Same voltage across each.
     - I is shared in the INVERSE ratio:  I1 : I2  =  R2 : R1
```

## Two resistors in parallel — the shortcut

```
                 R1  R2            "product"
        Rp  =  -----------   =   -------------
                R1 + R2             "sum"


  n EQUAL resistors R in parallel  ->  R / n
  n EQUAL resistors R in series    ->  n R
```

## Current-divider rule (very useful in the bridge questions)

```
   Total current I splitting between R1 and R2 in parallel:

                     R2                            R1
      I1  =  I  x --------- ,       I2  =  I  x ---------
                   R1 + R2                       R1 + R2
```

## WORKED EXAMPLE 9.1

**Q.** Find the effective resistance of 2 ohm, 3 ohm and 6 ohm in parallel.

```
  STEP 1     1      1     1     1
           ---- =  --- + --- + ---
            Rp      2     3     6

  STEP 2   LCM of 2, 3, 6 is 6

             1      3     2     1       6
           ---- =  --- + --- + ---  =  ---  =  1
            Rp      6     6     6       6

  STEP 3   Rp  =  1 ohm

  ANSWER:  1 ohm    (smaller than the smallest, 2 ohm -- check passed)
```

## WORKED EXAMPLE 9.2

**Q.** Two resistors 4 ohm and 6 ohm are joined in series and this
combination is connected across 20 V. Find the current and the voltage
across each.

```
  STEP 1   Rs = 4 + 6 = 10 ohm

  STEP 2         V       20
           I =  ---  =  ----  =  2 A
                 R       10

  STEP 3   V1 = I R1 = 2 x 4 =  8 V
           V2 = I R2 = 2 x 6 = 12 V

  CHECK    8 + 12 = 20 V     correct.

  ANSWER:  I = 2 A , V1 = 8 V , V2 = 12 V
```

> **TRAP:** In a **series** circuit the current is the same and the
> **voltage** divides. In a **parallel** circuit the voltage is the same
> and the **current** divides. Mixing these two up is the single most
> common mistake in the whole chapter.

---

# TOPIC 10 — EMF, terminal potential difference and internal resistance

## The three ideas

```
  EMF  (E)
      The potential difference between the terminals of a cell when NO
      current is being drawn from it (the OPEN-CIRCUIT voltage).
      It is the work done by the cell in moving unit positive charge
      round the complete circuit.       Unit: volt.

  TERMINAL POTENTIAL DIFFERENCE (V)
      The potential difference between the terminals of a cell when
      current IS being drawn.          Unit: volt.

  INTERNAL RESISTANCE (r)
      The resistance offered by the ELECTROLYTE and electrodes inside
      the cell itself.                 Unit: ohm.
```

## The circuit

```
      +----------| |----------+
      |          E   r        |            The cell is drawn as an
      |     (cell with its    |            ideal emf E in series with
      |      own resistance)  |            its internal resistance r
      |                       |
      +--------/\/\/----------+
                  R
                     ---> I


                       E
        CURRENT   I = -------
                       R + r
```

## The key relation

```
   Total emf is shared between the outside and the inside of the cell:

        E  =  I R  +  I r
              ^^^^     ^^^^
         used outside  wasted inside

   Since  V = I R  is what you measure at the terminals:

                    +---------------------+
                    |    V  =  E  -  I r  |
                    +---------------------+

   So the terminal voltage V is ALWAYS LESS than the emf E while the
   cell supplies current.
```

## Finding r from an experiment

```
                E  -  V                        +-       -+
        r  =  ----------     and since I=V/R , |  E - V  |
                  I                        r = | ------- |  x  R
                                               |    V    |
                                               +-       -+
```

## The three cases

```
  +---------------------------+-------------------+---------------------+
  |  SITUATION                |  CURRENT          |  TERMINAL VOLTAGE   |
  +---------------------------+-------------------+---------------------+
  |  Open circuit (no load)   |  I = 0            |  V  =  E            |
  |  DISCHARGING (normal use) |  I flows out      |  V  =  E - I r      |
  |  CHARGING the cell        |  I forced in      |  V  =  E + I r      |
  |  Short circuit (R = 0)    |  I = E / r (max)  |  V  =  0            |
  +---------------------------+-------------------+---------------------+
```

## Water-pipe picture

```
   The pump can lift water 2 metres (that is the EMF).
   But the pump has its own internal friction (that is r).
   When water actually flows, some of the push is eaten by the pump
   itself, so the water only reaches 1.8 metres (that is V).
```

## WORKED EXAMPLE 10.1

**Q.** A cell of emf 2 V and internal resistance 0.5 ohm is connected to a
4.5 ohm resistor. Find (a) the current (b) the terminal voltage
(c) the voltage lost inside the cell.

```
  STEP 1              E             2            2
          I   =   --------  =  ----------  =  ------  =  0.4 A
                    R + r       4.5 + 0.5        5

  STEP 2  V   =   E  -  I r   =   2  -  (0.4)(0.5)   =   2 - 0.2  =  1.8 V

          check:  V = I R = 0.4 x 4.5 = 1.8 V     correct.

  STEP 3  Lost inside  =  I r  =  0.2 V

  ANSWER:  I = 0.4 A , V = 1.8 V , lost = 0.2 V
```

## WORKED EXAMPLE 10.2

**Q.** A battery of emf 12 V gives a terminal voltage of 11.4 V when it
drives a current through a 19 ohm resistor. Find its internal resistance.

```
  STEP 1          V        11.4
          I  =  -----  =  ------  =  0.6 A
                  R         19

  STEP 2          E - V      12 - 11.4      0.6
          r  =  --------- = ------------ = ------  =  1 ohm
                    I           0.6          0.6

  ANSWER:  r = 1 ohm
```

> **TRAP:** Never write V = E when a current is flowing. V = E only for an
> **open circuit**. Losing this costs 1 mark every time.

---

# TOPIC 11 — Grouping of cells

## (a) CELLS IN SERIES

```
    ---| |-----| |-----| |-----| |-----+
       E,r     E,r     E,r     E,r     |
                                       |
    ---------------/\/\/---------------+
                     R

      n identical cells, each of emf E and internal resistance r

           Total emf                =  n E
           Total internal resistance=  n r

                       +----------------+
                       |        n E     |
                       |   I = -------- |
                       |       R + n r  |
                       +----------------+

    USE SERIES WHEN   R  is  MUCH GREATER than  r     (high external R)
    Then  I  is about  n E / R  -- n times bigger. 
```

## (b) CELLS IN PARALLEL

```
              +---| |---+
              |   E,r   |
              |         |
        ------+---| |---+------/\/\/------
              |   E,r   |         R
              |         |
              +---| |---+
                  E,r

      m identical cells in parallel

           Total emf                 =  E     (unchanged!)
           Total internal resistance =  r / m

                       +------------------+
                       |         E        |
                       |   I = ---------- |
                       |       R + (r/m)  |
                       |                  |
                       |        m E       |
                       |     = --------   |
                       |       m R + r    |
                       +------------------+

    USE PARALLEL WHEN  R  is  MUCH SMALLER than  r     (low external R)
    Then  I  is about  m E / r  -- m times bigger.
```

## (c) MIXED GROUPING

```
   m rows in parallel, each row having n cells in series
   (total number of cells  N  =  m n)

                   +---| |---| |---| |---+
                   |   E,r   E,r   E,r   |       row 1
                   |                     |
        -----------+---| |---| |---| |---+-------/\/\/-----
                   |   E,r   E,r   E,r   |          R
                   |                     |       row 2
                   +---| |---| |---| |---+

           Total emf                  =  n E
           Total internal resistance  =  n r / m

                     +-------------------------+
                     |           n E           |
                     |   I  =  ------------    |
                     |          R + (n r/m)    |
                     |                         |
                     |           m n E         |
                     |      =  -----------     |
                     |          m R + n r      |
                     +-------------------------+

   MAXIMUM CURRENT is obtained when

                     +-------------------+
                     |         n r       |
                     |   R  =  -----     |   i.e.  external R = total
                     |          m        |         internal resistance
                     +-------------------+
```

## Cells in series with OPPOSING polarity

```
    ---| |-------| |---            second cell reversed
       E1         E2
       + -        - +

    Net emf  =  E1 - E2            Net internal resistance = r1 + r2

                       E1 - E2
            I   =   --------------
                     R + r1 + r2
```

## WORKED EXAMPLE 11.1

**Q.** Four cells, each of emf 1.5 V and internal resistance 0.5 ohm, are
joined in series across a 4 ohm resistor. Find the current.

```
  STEP 1   Total emf   =  4 x 1.5  =  6 V
           Total r     =  4 x 0.5  =  2 ohm

  STEP 2           nE          6         6
           I =  --------- =  ------  =  ---  =  1 A
                 R + n r      4 + 2      6

  ANSWER:  I = 1 A
```

## WORKED EXAMPLE 11.2

**Q.** The same four cells are now joined in **parallel** across the same
4 ohm resistor. Find the current.

```
  STEP 1   Total emf  =  1.5 V        (unchanged)
           Total r    =  0.5 / 4  =  0.125 ohm

  STEP 2            E             1.5          1.5
           I =  ----------- =  ---------- =  -------  =  0.364 A
                 R + (r/m)     4 + 0.125      4.125

  ANSWER:  I = 0.364 A

  MORAL:  with a LARGE external R (4 ohm >> 0.5 ohm), SERIES is far better.
```

---

# TOPIC 12 — Kirchhoff's laws

Ohm's law alone cannot solve a circuit with more than one battery or with
branches that are neither series nor parallel. Kirchhoff's two rules can.

## LAW 1 — JUNCTION RULE (Kirchhoff's current law, KCL)

```
  STATEMENT
     The algebraic sum of the currents meeting at a junction in an
     electrical network is ZERO.

           SUM of currents ENTERING  =  SUM of currents LEAVING

  BASED ON:  conservation of ELECTRIC CHARGE.

              I1 \        / I3
                  \      /
                   \    /
                    \  /
                     \/  junction
                     /\
                    /  \
              I2   /    \  I4

           I1 + I2  =  I3 + I4
```

## LAW 2 — LOOP RULE (Kirchhoff's voltage law, KVL)

```
  STATEMENT
     In any closed loop of a network, the algebraic sum of the products
     of current and resistance equals the algebraic sum of the emfs in
     that loop.

           SUM ( I R )   =   SUM ( E )

  BASED ON:  conservation of ENERGY.
```

## *** THE SIGN CONVENTION *** (write this in the exam, it earns marks)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  Choose a direction to walk round the loop (say clockwise).         |
  |                                                                     |
  |  RESISTORS                                                          |
  |     Walking WITH   the current through R   ->   take  I R  as  -    |
  |     Walking AGAINST the current through R  ->   take  I R  as  +    |
  |                                                                     |
  |  CELLS                                                              |
  |     Entering at  -  and leaving at  +   ->   take  E  as  +         |
  |     Entering at  +  and leaving at  -   ->   take  E  as  -         |
  |                                                                     |
  |  (In short: for a cell, the sign is the sign of the terminal you    |
  |   COME OUT of.)                                                     |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The method for any circuit

```
  1.  Mark a current with an arrow in every branch. GUESS the direction;
      if the answer comes out negative, the real direction is opposite.
  2.  Apply the JUNCTION rule at each junction to reduce the number of
      unknowns  (use  I3 = I1 + I2  instead of a third unknown).
  3.  Choose independent CLOSED LOOPS. You need as many loop equations
      as you have unknown currents.
  4.  Walk round each loop applying the sign convention.
  5.  Solve the simultaneous equations.
```

## WORKED EXAMPLE 12.1 (single loop, two opposing cells)

**Q.** Two cells of emf 10 V and 4 V, with resistances 3 ohm and 2 ohm in
the circuit, are connected in series but with their positive terminals
facing each other. Find the current.

```
      +----| |----------/\/\/-----+
      |    10 V           3 ohm   |
      |    + -                    |
      |                           |
      +----| |----------/\/\/-----+
           4 V            2 ohm
           - +      (opposing the 10 V cell)

  STEP 1   Net emf  =  10 - 4  =  6 V
  STEP 2   Net R    =  3 + 2   =  5 ohm
  STEP 3          6
           I  =  ---  =  1.2 A , in the direction driven by the 10 V cell.

  ANSWER:  I = 1.2 A
```

## WORKED EXAMPLE 12.2 (two loops — the standard 4-mark problem)

**Q.** Two cells, E1 = 8 V with internal resistance 2 ohm and E2 = 7 V with
internal resistance 2 ohm, are connected in parallel across an external
resistance of 4 ohm. Find the current in each branch.

```
  CIRCUIT

           A                                 A
      +----| |----/\/\/----+           I1 -->
      |   8 V      2 ohm   |
      |                    |
      +----| |----/\/\/----+----/\/\/----+   I3 = I1 + I2
      |   7 V      2 ohm   |    4 ohm    |
      |                    |             |
      +--------------------+-------------+
                              I2 -->

  STEP 1   JUNCTION RULE at A :        I3  =  I1  +  I2

  STEP 2   LOOP 1  (8 V cell -> 2 ohm -> 4 ohm -> back)

              8   =   2 I1   +   4 ( I1 + I2 )
              8   =   6 I1   +   4 I2                     .... (i)

  STEP 3   LOOP 2  (7 V cell -> 2 ohm -> 4 ohm -> back)

              7   =   2 I2   +   4 ( I1 + I2 )
              7   =   4 I1   +   6 I2                     .... (ii)

  STEP 4   Solve.  (i) x 3 :    24  =  18 I1  +  12 I2
                   (ii) x 2 :   14  =   8 I1  +  12 I2
                   Subtract :   10  =  10 I1        ->    I1 = 1 A

  STEP 5   Put I1 = 1 in (i):   8 = 6 + 4 I2   ->   I2 = 0.5 A

  STEP 6   I3 = I1 + I2 = 1.5 A

  CHECK    Loop 1:  2(1) + 4(1.5) = 2 + 6 = 8   correct.
           Loop 2:  2(0.5) + 4(1.5) = 1 + 6 = 7 correct.

  ANSWER:  I1 = 1 A ,  I2 = 0.5 A ,  current through 4 ohm = 1.5 A
```

> **TRAP:** Forgetting to use I3 = I1 + I2 and instead treating I3 as a
> third unknown. You then need a third loop equation and usually run out
> of time.

---

# TOPIC 13 — THE WHEATSTONE BRIDGE

*** THE MOST IMPORTANT 8-MARK QUESTION IN THIS CHAPTER ***

A Wheatstone bridge is a way of finding an **unknown resistance very
accurately** without measuring any current or any voltage. You only need to
see a galvanometer read **ZERO**.

## The circuit — learn to draw this exactly

```
                          B
                        /   \
                      /       \
              P     /             \    Q
                  /                 \
                /                     \
             A  ---------( G )--------- C
                \                     /
                  \                 /
              R     \             /    S
                      \         /
                        \     /
                          D
                          |
                     +----+----+
                     |         |
                     ---| |-----          cell (E) with key K
                        E   K


   Arms:      A-B  contains  P          A-D  contains  R
              B-C  contains  Q          D-C  contains  S

   Galvanometer (G)  is between  B  and  D   (the "bridge" arm)
   Battery           is between  A  and  C
```

## The balance condition

```
  The bridge is said to be BALANCED when the galvanometer shows NO
  deflection, i.e. Ig = 0. Then B and D are at the SAME POTENTIAL.

                      +---------------------+
                      |     P        R      |
                      |    ---  =   ---     |
                      |     Q        S      |
                      +---------------------+
```

## *** FULL DERIVATION USING KIRCHHOFF'S LAWS *** (8 marks)

```
  Let the current I from the cell divide at A into
        I1  through P      and      I2  through R.

  At balance the galvanometer carries NO current (Ig = 0), so

        the current through Q  is also  I1
        the current through S  is also  I2

  (nothing leaks across the bridge arm).


                          B
                        /   \
              I1  -->  /     \  --> I1
                     P         Q
                    /            \
                 A  ------(G)------  C
                    \    Ig = 0    /
                     R           S
              I2 -->  \         /  --> I2
                        \     /
                          D


  ------------------------------------------------------------------
  STEP 1   Apply KIRCHHOFF'S LOOP RULE to the loop  A B D A

           Going  A -> B  through P  (with the current) :   - I1 P
           Going  B -> D  through G  (current is zero)  :   - Ig G  = 0
           Going  D -> A  through R  (against current)  :   + I2 R

           Sum of all terms round a closed loop = 0 :

                  - I1 P   -   Ig G   +   I2 R   =   0

           But at balance  Ig = 0 , so

                  - I1 P   +   I2 R   =   0

                        I1 P   =   I2 R              .... (1)

  ------------------------------------------------------------------
  STEP 2   Apply the LOOP RULE to the loop  B C D B

           Going  B -> C  through Q  (with the current) :   - I1 Q
           Going  C -> D  through S  (against current)  :   + I2 S
           Going  D -> B  through G  (current is zero)  :   + Ig G  = 0

                  - I1 Q   +   I2 S   +   Ig G   =   0

           With  Ig = 0 :

                        I1 Q   =   I2 S              .... (2)

  ------------------------------------------------------------------
  STEP 3   Divide equation (1) by equation (2)

                    I1 P         I2 R
                  ---------  =  ---------
                    I1 Q         I2 S

           I1 cancels on the left, I2 cancels on the right :

                       +---------------------+
                       |     P        R      |
                       |    ---  =   ---     |
                       |     Q        S      |
                       +---------------------+

           This is the BALANCE CONDITION of the Wheatstone bridge.
  ------------------------------------------------------------------

  STEP 4   If P, Q and R are known, the unknown S is

                              Q  R
                     S   =   -------
                                P
```

## Alternative statement (the way to remember it)

```
   At balance:      P        R
                   ---  =   ---
                    Q        S

   "The ratio of the resistances in the two upper arms equals the ratio
    of the resistances in the two lower arms."

   Equivalently      P S  =  Q R      (cross products are equal)
```

## Things the examiner asks alongside the derivation

```
  1.  WHY IS THE BRIDGE ACCURATE?
      Because it is a NULL METHOD. We only look for zero deflection,
      so the answer does not depend on the galvanometer's calibration,
      nor on the emf of the cell, nor on its internal resistance.

  2.  ARE THE CELL AND THE GALVANOMETER INTERCHANGEABLE?
      Yes. If the cell and the galvanometer swap positions, the balance
      condition is unchanged.

  3.  WHICH KEY IS PRESSED FIRST?
      The BATTERY key first, then the GALVANOMETER key. (This avoids a
      momentary induced current giving a false deflection.)

  4.  SENSITIVITY
      The bridge is MOST SENSITIVE when all four resistances are of the
      SAME ORDER of magnitude.

  5.  WHEN DOES IT FAIL?
      It cannot measure very small or very large resistances accurately,
      because then the balance point becomes hard to locate.
```

## WORKED EXAMPLE 13.1

**Q.** In a Wheatstone bridge P = 10 ohm, Q = 20 ohm and R = 30 ohm.
Find S when the bridge is balanced.

```
  STEP 1     P       R
            ---  =  ---
             Q       S

  STEP 2     10       30
            ----  =  ----
             20        S

  STEP 3   Cross-multiply:   10 S = 20 x 30 = 600

  STEP 4   S = 60 ohm

  ANSWER:  S = 60 ohm
```

> **TRAP:** Writing P/R = Q/S instead of P/Q = R/S. Both happen to give
> the same answer here (10/30 = 20/60), but the examiner wants the
> **standard** form P/Q = R/S. Learn the standard form.

---

# TOPIC 14 — THE METRE BRIDGE (slide-wire bridge)

The metre bridge is simply a **practical Wheatstone bridge** in which two
of the four arms are replaced by the two parts of a single uniform wire
one metre long.

## The apparatus

```
        +---[ R.BOX  R ]---+---[   S  unknown   ]---+
        |                  |                        |
       (A)                (B)                      (C)
        |                  |                        |
        |                 (G)                       |
        |                  |                        |
        |                  |  jockey                |
        |                  V                        |
        A==================|========================C
        0 cm              l cm                    100 cm
        |     (uniform 1 metre constantan wire)     |
        |                                           |
        +-------------------| |----+----------------+
                             E     K
                          (cell and key)

   LEFT GAP   : known resistance R (from a resistance box)
   RIGHT GAP  : unknown resistance S
   The wire AC : one metre of uniform constantan / manganin wire
   The jockey slides along AC until (G) shows ZERO deflection.
```

## Working and formula

```
  Let the balance point be at a distance  l  cm from the end A.

  Resistance of the wire section  A to jockey    =  rho' x l
  Resistance of the wire section  jockey to C    =  rho' x (100 - l)
      (rho' = resistance per unit length of the wire)

  Comparing with the Wheatstone condition  P/Q = R/S :

           R              rho' l
         -----   =   ----------------
           S           rho' (100 - l)

  rho' cancels, which is exactly why the wire must be UNIFORM:

                +--------------------------------+
                |               ( 100  -  l )    |
                |     S   =   R  --------------  |
                |                      l         |
                +--------------------------------+
```

## Then find the resistivity of the wire

```
                 rho L                    S  x  A            S  pi r^2
       S  =  ------------    ->   rho  =  ---------   =    -------------
                   A                          L                  L

   where L is the length and r the radius of the specimen wire whose
   resistivity is wanted (measured with a screw gauge).
```

## Precautions (often carries 2 marks)

```
  1.  The bridge wire must be UNIFORM in cross-section throughout.
  2.  All connections must be clean and tight (loose contacts add
      unwanted resistance).
  3.  The jockey must be TAPPED gently, never dragged along the wire
      (dragging changes the wire's thickness).
  4.  Current should be passed only briefly, to avoid heating the wire
      (heating changes its resistance).
  5.  The balance point should be near the MIDDLE of the wire
      (between about 40 cm and 60 cm) for maximum accuracy.
      If it is not, change R in the resistance box.
```

## WORKED EXAMPLE 14.1

**Q.** In a metre bridge, the balance point is found at 40 cm from the left
end when the known resistance in the left gap is 5 ohm. Find the unknown
resistance.

```
  STEP 1                  100 - l              100 - 40
           S   =    R  x  ---------   =   5 x  ----------
                              l                    40

  STEP 2                60
           S   =   5 x ----   =   5 x 1.5   =   7.5 ohm

  ANSWER:  S = 7.5 ohm
```

## WORKED EXAMPLE 14.2

**Q.** In the above bridge, if R and S are interchanged, where is the new
balance point?

```
  Interchanging swaps l and (100 - l).

  New balance length  =  100 - 40  =  60 cm from the left end.

  ANSWER:  60 cm
```

> **TRAP:** l is measured from the end **where the known resistance R is
> connected**. If the question says "40 cm from the right end", then
> l = 60 cm. Read the sentence twice.

---

# TOPIC 15 — THE POTENTIOMETER

*** THE SECOND-BIGGEST 8-MARK QUESTION IN THIS CHAPTER ***

## What it is

A potentiometer is a long uniform wire (usually 10 m, arranged as ten
1-metre lengths) carrying a **steady current** from a **driver cell**. It
measures potential difference by a **null method** — it draws no current
from the cell being tested.

## Principle

```
   A steady current I flows through the wire of resistance per unit
   length rho'. The p.d. across a length l of the wire is

        V  =  I  rho'  l           so       V  is proportional to  l

   +---------------------------------------------------------------+
   |   PRINCIPLE:  when a constant current flows through a wire of  |
   |   uniform cross-section, the potential difference across any   |
   |   portion is DIRECTLY PROPORTIONAL to the LENGTH of that       |
   |   portion.                                                     |
   +---------------------------------------------------------------+

   POTENTIAL GRADIENT

                     potential difference across the whole wire      V
        k  =  -----------------------------------------------  =   ---
                        total length of the wire                     L

        Unit:  volt per metre  (V/m)          Then    V  =  k  l
```

## Basic circuit

```
        +--------| |------[ Rh ]-------+           driver cell (E, K)
        |         E   K                |           Rh = rheostat
        |                              |
        A==============================B      10 m uniform wire
        |            |                 |
        |            | jockey at length l
        |            |
        |           (G)
        |            |
        +---| |------+                          cell under test  E1
             E1
```

## *** WHY A POTENTIOMETER BEATS A VOLTMETER *** (guaranteed 2 or 4 marks)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  A VOLTMETER has a large but FINITE resistance, so it DRAWS some    |
  |  current from the cell. Once current flows, the cell loses  I r     |
  |  inside itself and the voltmeter reads  V = E - I r , which is      |
  |  LESS than the true emf.                                            |
  |                                                                     |
  |  A POTENTIOMETER at balance draws ZERO current from the cell        |
  |  (the galvanometer reads zero). With  I = 0  we get  V = E .        |
  |  So it measures the TRUE emf.                                       |
  |                                                                     |
  |  In effect the potentiometer behaves like a voltmeter of INFINITE   |
  |  resistance -- an IDEAL voltmeter.                                  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Sensitivity — how to make it better

```
  1.  Use a LONG wire  (small potential gradient k = V/L).
  2.  Reduce the current with the rheostat  (again smaller k).
  A smaller potential gradient means a longer balancing length for the
  same emf, so the reading is more precise.

  CONDITION:  the emf of the DRIVER cell must be GREATER than the emf
              being measured, otherwise no balance point exists
              anywhere on the wire.
```

## APPLICATION 1 — COMPARING THE EMFs OF TWO CELLS

```
        +--------| |------[ Rh ]--------+     driver cell E, key K
        |                               |
        A===============================B     potentiometer wire
        |               |               |
        |               | jockey        |
        |               |               |
        |              (G)              |
        |               |               |
        |               +---[ 2-way key ]
        |               |               |
        +---| |---------+               |     cell 1 : emf E1
        |    E1                         |
        +---| |-------------------------+     cell 2 : emf E2
             E2

  METHOD
     1.  Close the driver circuit. A steady current flows through AB.
     2.  Put cell E1 in the circuit using the two-way key. Slide the
         jockey until (G) reads ZERO. Note the balancing length  l1 .
     3.  Now put cell E2 in instead. Find the new balancing length l2 .

  THEORY
         At the first balance point :      E1  =  k  l1
         At the second balance point:      E2  =  k  l2

         Dividing, the potential gradient k cancels :

                        +----------------------+
                        |    E1        l1      |
                        |   ----  =   ----     |
                        |    E2        l2      |
                        +----------------------+

  If one of them is a STANDARD cell of known emf, the other is found
  directly.
```

## APPLICATION 2 — INTERNAL RESISTANCE OF A CELL

```
        +--------| |------[ Rh ]--------+     driver cell E
        |                               |
        A===============================B
        |               |               |
        |              (G)              |
        |               |               |
        +---| |---------+               |
        |    E1 (cell under test)       |
        |                               |
        +------/\/\/-----[ K1 ]---------+
                  R  (resistance box)

  METHOD
     1.  Keep the key K1 OPEN. The cell draws NO current, so the
         potentiometer balances against its full EMF E .
         Balancing length  =  l1        ->    E  =  k l1

     2.  Now CLOSE K1 with a known resistance R in the box. The cell
         now supplies current, so the potentiometer balances against
         its TERMINAL VOLTAGE V .
         Balancing length  =  l2        ->    V  =  k l2

  THEORY
                 E        l1
                ---  =   ----
                 V        l2

         From Topic 10 :
                        +-       -+
                        |  E - V  |          +-           -+
                r   =   | ------- | x R  =   |  (l1/l2) - 1 |  x  R
                        |    V    |          +-           -+
                        +-       -+

                        +------------------------+
                        |          ( l1 - l2 )   |
                        |   r  =  R  ----------  |
                        |               l2       |
                        +------------------------+
```

## WORKED EXAMPLE 15.1

**Q.** A potentiometer wire is 10 m long and a p.d. of 2 V is maintained
across it. Find the potential gradient.

```
  STEP 1          V        2
          k  =  -----  =  ----  =  0.2  V/m
                  L        10

  ANSWER:  0.2 volt per metre  (= 0.002 V per cm)
```

## WORKED EXAMPLE 15.2

**Q.** Two cells give balancing lengths of 75 cm and 50 cm. If the emf of
the first cell is 1.5 V, find the emf of the second.

```
  STEP 1     E1       l1
            ----  =  ----
             E2       l2

  STEP 2    1.5       75
           -----  =  ----
             E2       50

  STEP 3   E2  =  1.5 x 50 / 75  =  1.0 V

  ANSWER:  E2 = 1 V
```

## WORKED EXAMPLE 15.3

**Q.** With the key open the balancing length is 60 cm; with a 5 ohm
resistor across the cell it becomes 50 cm. Find the internal resistance.

```
  STEP 1            ( l1  -  l2 )
          r  =  R  ---------------
                         l2

  STEP 2            ( 60  -  50 )          10
          r  =  5 x ---------------  = 5 x ----  =  1 ohm
                          50                50

  ANSWER:  r = 1 ohm
```

> **TRAP:** The balancing length is **always measured from the end of the
> wire that is joined to the POSITIVE terminal** of the driver cell. Also,
> the positive terminals of the driver cell and of the test cell must be
> joined to the **same** end A. If they are not, the galvanometer deflects
> the same way everywhere and there is **no balance point at all** — a
> classic 2-mark question.

---

# TOPIC 16 — Electrical energy and power

## The three power formulae

```
  +----------------------------------------------------------------+
  |                                          V^2                   |
  |     P  =  V I   =   I^2 R   =    ------------                  |
  |                                        R                       |
  +----------------------------------------------------------------+

     Unit: watt (W).     1 W = 1 joule per second.

     ENERGY   W  =  P t  =  V I t  =  I^2 R t   joule
```

## Which formula to use — this decides the answer

```
  +--------------------+---------------------------+---------------------+
  |  ARRANGEMENT       |  What is the SAME?        |  USE THIS FORMULA   |
  +--------------------+---------------------------+---------------------+
  |  SERIES            |  current I is the same    |  P = I^2 R          |
  |                    |                           |  ->  BIGGER R gets  |
  |                    |                           |      MORE power     |
  +--------------------+---------------------------+---------------------+
  |  PARALLEL          |  voltage V is the same    |  P = V^2 / R        |
  |                    |                           |  ->  SMALLER R gets |
  |                    |                           |      MORE power     |
  +--------------------+---------------------------+---------------------+
```

> **TRAP:** "Which bulb glows brighter, 100 W or 60 W?"
> In **parallel** (household wiring) the 100 W bulb glows brighter.
> In **series** the **60 W** bulb glows brighter, because it has the
> larger resistance (R = V^2 / P) and P = I^2 R with the same I.
> This exact question is asked constantly.

## The kilowatt-hour (commercial unit of electrical energy)

```
   1 kilowatt-hour  =  1 kW  x  1 hour
                    =  1000 W  x  3600 s
                    =  3.6  x  10^6  joule

   The electricity bill is charged in kWh ("units").

                            (watt) x (hours used)
   Number of units  =  ---------------------------------
                                   1000
```

## Bulbs in series and parallel — combined wattage

```
   Bulbs of P1 and P2 watt (same rated voltage) :

      IN PARALLEL   :    P  =  P1  +  P2

                              P1 P2
      IN SERIES     :    P = ---------
                             P1 + P2
```

## Maximum power transfer theorem

```
   A cell of emf E and internal resistance r feeds an external R.

                       E                                  E^2 R
        I  =  --------------          P = I^2 R  =  ----------------
                 R  +  r                              ( R + r )^2

   Differentiating and setting dP/dR = 0 gives

                    +-----------------------------------+
                    |         R  =  r                   |
                    |                                   |
                    |                   E^2             |
                    |    P(max)  =   --------           |
                    |                  4 r              |
                    +-----------------------------------+

   MEANING: the cell delivers the MAXIMUM power to the load when the
   external resistance EQUALS the internal resistance.
   At that point the EFFICIENCY is only 50 %, because an equal amount
   of power is wasted inside the cell.
```

## WORKED EXAMPLE 16.1

**Q.** A bulb is marked 60 W, 240 V. Find its resistance and the current
it draws at the rated voltage.

```
  STEP 1                V^2       240 x 240      57600
           R   =    ---------  = ------------ = --------  =  960 ohm
                        P             60           60

  STEP 2           P         60
           I  =   ---   =  ------  =  0.25 A
                   V         240

  ANSWER:  R = 960 ohm ,  I = 0.25 A
```

## WORKED EXAMPLE 16.2

**Q.** A 100 W bulb burns for 10 hours a day for 30 days. If a unit costs
Rs 5, find the bill.

```
  STEP 1   Energy  =  100 W  x  10 h  x  30 days  =  30000 Wh

  STEP 2                 30000
           Units  =   ---------  =  30 kWh
                        1000

  STEP 3   Cost   =  30  x  5  =  Rs 150

  ANSWER:  30 units, Rs 150
```

## WORKED EXAMPLE 16.3

**Q.** A cell of emf 12 V has internal resistance 2 ohm. Find the maximum
power that can be delivered to an external resistor.

```
  STEP 1   Maximum power when  R = r = 2 ohm

  STEP 2            E^2       12 x 12       144
          P(max) = -----  =  ----------  = -----  =  18 W
                    4 r        4 x 2          8

  ANSWER:  18 W  (delivered when R = 2 ohm)
```

---

# TOPIC 17 — Heating effect of current and Joule's law

## Why a wire heats up

Electrons drifting through a conductor keep colliding with the vibrating
ions of the lattice. At each collision they hand over energy, the ions
vibrate harder, and the conductor gets **hot**. The electrical energy is
irreversibly converted into **heat**.

## Joule's law of heating

```
   The heat produced in a conductor is

   +-------------------------------------------------------------+
   |                                        V^2                  |
   |     H  =  I^2 R t   =   V I t   =   -------  t     joule     |
   |                                        R                    |
   +-------------------------------------------------------------+

   In calories:      H  =  I^2 R t / J        with  J = 4.18 J/cal
                     (roughly  H(cal) = H(joule) / 4.2 )

   THE THREE STATEMENTS OF JOULE'S LAW  (at constant current etc.)

     1.  H is directly proportional to  I^2      (R and t constant)
     2.  H is directly proportional to  R        (I and t constant)
     3.  H is directly proportional to  t        (I and R constant)
```

## Applications and drawbacks

```
  USES                                DRAWBACKS
  -----------------------------       ---------------------------------
  Electric heater, geyser, iron       Waste of energy in transmission
  Incandescent bulb (tungsten)        lines
  Electric fuse                       Overheating and damage to
  Electric furnace, welding           appliances
  Soldering iron, toaster             Fire risk from loose contacts
```

## The electric fuse

```
  A fuse is a short piece of wire of LOW MELTING POINT and HIGH
  RESISTIVITY (a tin-lead alloy) placed in SERIES with the circuit.
  If the current exceeds a safe value, the heat  I^2 R t  melts the
  fuse and breaks the circuit, saving the appliance.
```

## WORKED EXAMPLE 17.1

**Q.** A current of 2 A flows through a 10 ohm resistor for 5 minutes.
Find the heat produced in joule and in calorie.

```
  STEP 1   t = 5 minutes = 300 s

  STEP 2   H = I^2 R t = (2)^2 x 10 x 300
                       = 4 x 10 x 300
                       = 12000 J   =  12 kJ

  STEP 3   In calories :   12000 / 4.2  =  2857 cal (about 2.86 kcal)

  ANSWER:  12000 J  =  about 2857 calorie
```

## WORKED EXAMPLE 17.2

**Q.** An electric kettle of 1.5 kW is used for 20 minutes. How much heat
does it produce?

```
  STEP 1   P = 1.5 kW = 1500 W ,  t = 20 min = 1200 s

  STEP 2   H = P t = 1500 x 1200 = 1.8 x 10^6 J

  ANSWER:  1.8 x 10^6 joule  (= 0.5 kWh)
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  +----+----------------------------------------------------------------+
  | 1  |  Did I DRAW the circuit diagram? A labelled diagram carries     |
  |    |  1 to 2 marks on its own in every 8-mark answer.                |
  +----+----------------------------------------------------------------+
  | 2  |  Did I convert ALL units to SI?                                 |
  |    |     mA -> 10^-3 A     mm^2 -> 10^-6 m^2                         |
  |    |     cm  -> 10^-2 m    minutes -> seconds                        |
  |    |     kilo-ohm -> 10^3 ohm                                        |
  +----+----------------------------------------------------------------+
  | 3  |  In a SERIES problem, did I use the SAME CURRENT?               |
  |    |  In a PARALLEL problem, did I use the SAME VOLTAGE?             |
  +----+----------------------------------------------------------------+
  | 4  |  Is my parallel answer SMALLER than the smallest resistor?      |
  |    |  Is my series answer BIGGER than the biggest resistor?          |
  |    |  If not, I have made an arithmetic slip.                        |
  +----+----------------------------------------------------------------+
  | 5  |  Did I use  E = I (R + r)  and NOT  E = I R  when a cell has    |
  |    |  internal resistance?                                           |
  +----+----------------------------------------------------------------+
  | 6  |  Is my terminal voltage V LESS than the emf E?                  |
  |    |  (It must be, whenever current is being drawn.)                 |
  +----+----------------------------------------------------------------+
  | 7  |  In the Wheatstone derivation, did I actually STATE that        |
  |    |  Ig = 0 at balance? The whole proof depends on that line.       |
  +----+----------------------------------------------------------------+
  | 8  |  In the metre bridge, did I use  S = R (100 - l) / l  with l    |
  |    |  measured from the end where R is connected?                    |
  +----+----------------------------------------------------------------+
  | 9  |  In the potentiometer, did I write down WHY it is better than   |
  |    |  a voltmeter (zero current drawn -> true emf)?                  |
  +----+----------------------------------------------------------------+
  | 10 |  Did I write the UNIT next to every final answer?               |
  |    |     ohm , ampere , volt , watt , joule , ohm m , m/s            |
  |    |  No unit = no full marks.                                       |
  +----+----------------------------------------------------------------+
  | 11 |  In a stretching problem, did I use  R' = n^2 R  and not n R ?  |
  +----+----------------------------------------------------------------+
  | 12 |  Did I attempt exactly the required number of questions?        |
  |    |  Section A: all 10.  Section B: any 6.  Section C: any 2.       |
  +----+----------------------------------------------------------------+
```

**Final word:** this chapter is 90% pictures. If you can draw the four
circuits from the mind map — series, parallel, Wheatstone bridge and
potentiometer — with your eyes shut, you will pass this chapter
comfortably. Draw them once a day for a week.
