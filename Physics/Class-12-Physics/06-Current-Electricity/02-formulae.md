# Current Electricity — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Every formula here has appeared in a BIEAP paper or an EAPCET paper.

---

# 1. CURRENT AND CURRENT DENSITY

```
  +---------------------------------------------------------------+
  |                                                               |
  |                       q                          dq           |
  |    CURRENT      I = -----      (average)    I = -----  (inst.)|
  |                       t                          dt           |
  |                                                               |
  |    Unit: ampere (A)          1 A = 1 coulomb / second         |
  |                                                               |
  +---------------------------------------------------------------+
  |                                                               |
  |                              I                                |
  |    CURRENT DENSITY    J  =  ---        Unit: A m^-2           |
  |                              A                                |
  |                                                               |
  |    Vector form   I = J . A = J A cos(theta)                   |
  |                                                               |
  +---------------------------------------------------------------+
  |                                                               |
  |    MICROSCOPIC OHM'S LAW     J  =  sigma E                    |
  |                              E  =  rho J                      |
  |                                                               |
  +---------------------------------------------------------------+
  |                                                               |
  |    q  =  n e     (n = number of electrons, e = 1.6 x 10^-19 C)|
  |                                                               |
  +---------------------------------------------------------------+
```

| Formula | Symbols | When to use |
|---|---|---|
| I = q / t | q in coulomb, t in second | Charge or number of electrons is given |
| q = n e | n = number of electrons | "How many electrons pass in ... seconds?" |
| J = I / A | A in m^2 | Cross-section area given, asked for crowding of flow |
| J = sigma E | sigma = 1/rho | Field inside conductor given |

---

# 2. DRIFT VELOCITY, RELAXATION TIME, MOBILITY

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                       e E tau                    e V tau          |
  |    DRIFT VELOCITY  vd = ---------      also vd = ---------        |
  |                            m                        m L           |
  |                                                                   |
  |    Unit: m/s      typical value about 10^-4 m/s                   |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |    *** THE BIG ONE ***                                            |
  |                                                                   |
  |              I  =  n A e vd            and        J = n e vd      |
  |                                                                   |
  |    n = free electrons per m^3 (copper: 8.5 x 10^28)               |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |                        vd        e tau                            |
  |    MOBILITY     mu = ------  =  --------    Unit: m^2 V^-1 s^-1   |
  |                        E           m                              |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |                                    m                              |
  |    RELAXATION TIME      tau  =  -----------                       |
  |                                  n e^2 rho                        |
  |                                                                   |
  |    typical value about 10^-14 s                                   |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |    FIELD IN A WIRE                V                               |
  |                            E  =  ---                              |
  |                                   L                               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| I = n A e vd | Find vd from I, or find I from vd. The standard 4-mark derivation |
| vd = e E tau / m | tau or E is given |
| mu = vd / E | The word "mobility" appears anywhere |
| sigma = n e mu | Conductivity asked from mobility (EAPCET favourite) |
| tau = m / (n e^2 rho) | Resistivity given, relaxation time asked |

```
  RELATIONSHIP CHAIN  (learn the direction of each arrow)

     I  UP     ->   vd  UP
     V  UP     ->   E UP  ->  vd UP
     A  UP     ->   vd  DOWN
     L  UP  (same V)  ->  E DOWN  ->  vd DOWN
     Temperature UP   ->  tau DOWN ->  rho UP (in a metal)
```

---

# 3. OHM'S LAW, RESISTANCE, RESISTIVITY

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    OHM'S LAW           V  =  I R                                  |
  |                                                                   |
  |                              V                     V              |
  |                        I =  ---           R  =   ---              |
  |                              R                     I              |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |                             rho  L                                |
  |    RESISTANCE          R = ---------      Unit: ohm               |
  |                                A                                  |
  |                                                                   |
  |                             R A                                   |
  |    RESISTIVITY       rho = -------        Unit: ohm metre         |
  |                              L                                    |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |                                m                                  |
  |    RESISTIVITY       rho  =  -----------                          |
  |    (microscopic)              n e^2 tau                           |
  |                                                                   |
  |                                 1        n e^2 tau                |
  |    CONDUCTIVITY     sigma  =  -----  =  -----------               |
  |                                rho           m                    |
  |                                                                   |
  |                    Unit of sigma:  ohm^-1 m^-1  (S/m)             |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |                            1                                      |
  |    CONDUCTANCE      G  =  ---     Unit: ohm^-1 = siemens = mho    |
  |                            R                                      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## For a wire of length L and radius r

```
                rho L           rho L
        R  =  ---------  =  -------------
                  A            pi r^2
```

## The stretching / drawing rules  (memorise the powers)

```
  +----------------------------------------+--------------------------+
  |  CHANGE (volume stays constant)        |  NEW RESISTANCE          |
  +----------------------------------------+--------------------------+
  |  Length becomes  n  times              |   R'  =  n^2  R          |
  |  Radius becomes  1/n  times            |   R'  =  n^4  R          |
  |  Area becomes    1/n  times            |   R'  =  n^2  R          |
  |  Wire cut into n equal pieces          |   each  =  R / n         |
  |  Those n pieces joined in parallel     |   total =  R / n^2       |
  +----------------------------------------+--------------------------+

              R      L1     A2         (only when the MATERIAL and the
   General:  ---- = ---- x ----         VOLUME are the same)
              R'     L2     A1
```

| Formula | When to use |
|---|---|
| V = I R | Any two of V, I, R given |
| R = rho L / A | Dimensions of the wire are given |
| rho = R A / L | "Find the resistivity / specific resistance" |
| rho = m / (n e^2 tau) | Derivation question, or n and tau given |
| sigma = 1 / rho | Conductivity asked |
| R' = n^2 R | The wire is STRETCHED or DRAWN |

---

# 4. EFFECT OF TEMPERATURE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     R(t)  =  R(0)  [ 1  +  alpha  t ]                             |
  |                                                                   |
  |     R2    =  R1 [ 1  +  alpha ( t2 - t1 ) ]                       |
  |                                                                   |
  |                       R2  -  R1                                   |
  |     alpha  =    -------------------------      Unit: per deg C    |
  |                    R1  ( t2  -  t1 )                              |
  |                                                                   |
  +-------------------------------------------------------------------+
  |                                                                   |
  |     rho(t)  =  rho(0) [ 1  +  alpha  t ]                          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
  +---------------------------+---------------------+------------------+
  |  MATERIAL                 |  SIGN OF alpha      |  R WHEN HEATED   |
  +---------------------------+---------------------+------------------+
  |  Metals (Cu, Ag, Pt, W)   |  positive           |  INCREASES       |
  |  Semiconductors (Si, Ge)  |  negative           |  DECREASES       |
  |  Carbon                   |  negative           |  DECREASES       |
  |  Electrolytes             |  negative           |  DECREASES       |
  |  Manganin, constantan,    |  nearly zero        |  almost NO       |
  |  nichrome (alloys)        |                     |  change          |
  +---------------------------+---------------------+------------------+

  For metals, alpha is about  1/273  per degree C  (= 0.00366),
  i.e. roughly 0.004 per degree C for copper.
```

| Formula | When to use |
|---|---|
| R2 = R1[1 + alpha (t2 - t1)] | Resistance at one temperature given, another asked |
| alpha = (R2 - R1)/(R1(t2 - t1)) | Two resistances at two temperatures given |
| Platinum thermometer: t = (Rt - R0) x 100 / (R100 - R0) | Resistance thermometer question |

---

# 5. THE RESISTOR COLOUR CODE

```
   VALUE   =   ( first digit  second digit )  x  10^(third band)  ohm
                                                     ±  tolerance
```

```
  +------------+--------+---------------+---------------------------+
  |  COLOUR    | DIGIT  |  MULTIPLIER   |  TOLERANCE                |
  +------------+--------+---------------+---------------------------+
  |  Black     |   0    |   10^0        |                           |
  |  Brown     |   1    |   10^1        |   ± 1 %                   |
  |  Red       |   2    |   10^2        |   ± 2 %                   |
  |  Orange    |   3    |   10^3        |                           |
  |  Yellow    |   4    |   10^4        |                           |
  |  Green     |   5    |   10^5        |                           |
  |  Blue      |   6    |   10^6        |                           |
  |  Violet    |   7    |   10^7        |                           |
  |  Grey      |   8    |   10^8        |                           |
  |  White     |   9    |   10^9        |                           |
  +------------+--------+---------------+---------------------------+
  |  Gold      |   -    |   10^-1       |   ± 5 %                   |
  |  Silver    |   -    |   10^-2       |   ± 10 %                  |
  |  No band   |   -    |     -         |   ± 20 %                  |
  +------------+--------+---------------+---------------------------+
```

## Memory sentence

```
   B      B      ROY      of  Great  Britain    has a  Very  Good  Wife
   |      |      | | |         |       |                |     |     |
  Black  Brown  R O Y        Green    Blue           Violet Grey  White
   0      1     e r e          5       6                7     8     9
               d a l
               2 n l
                 g o
                 e w
                 3 4
```

## Worked reading

```
  Bands:  Brown  Black  Red  Gold

          Brown  ->  1
          Black  ->  0
          Red    ->  10^2
          Gold   ->  ± 5 %

          Value  =  10 x 10^2  =  1000 ohm  =  1 kilo-ohm  ± 5 %
```

---

# 6. COMBINATION OF RESISTORS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   SERIES      ---/\/\/---/\/\/---/\/\/---                          |
  |                   R1       R2      R3                              |
  |                                                                    |
  |          Rs  =  R1  +  R2  +  R3  + ...                            |
  |                                                                    |
  |          same I everywhere ;  V divides ;  V1:V2 = R1:R2           |
  |          Rs is BIGGER than the biggest                             |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PARALLEL         +---/\/\/---+                                   |
  |                    |     R1    |                                   |
  |               -----+---/\/\/---+-----                              |
  |                    |     R2    |                                   |
  |                    +---/\/\/---+                                   |
  |                          R3                                        |
  |                                                                    |
  |            1        1        1        1                            |
  |          -----  =  ----  +  ----  +  ----  + ...                   |
  |            Rp       R1       R2       R3                           |
  |                                                                    |
  |          same V everywhere ;  I divides ;  I1:I2 = R2:R1           |
  |          Rp is SMALLER than the smallest                           |
  |                                                                    |
  +--------------------------------------------------------------------+
```

## Shortcuts

```
                                     R1 R2         product
   TWO in parallel        Rp   =   ---------   =   -------
                                    R1 + R2          sum

   n EQUAL resistors R    series   =  n R
                          parallel =  R / n

   CURRENT DIVIDER                R2                       R1
                     I1 = I  x --------- ,   I2 = I  x ---------
                                R1 + R2                 R1 + R2

   VOLTAGE DIVIDER                R1                       R2
                     V1 = V  x --------- ,   V2 = V  x ---------
                                R1 + R2                 R1 + R2
```

| Formula | When to use |
|---|---|
| Rs = R1 + R2 + ... | Resistors joined end to end, one path only |
| 1/Rp = 1/R1 + 1/R2 | Resistors joined between the same two points |
| Rp = R1R2/(R1+R2) | Exactly TWO resistors in parallel |
| I1 = I R2/(R1+R2) | Current splitting into two parallel branches |
| V1 = V R1/(R1+R2) | Voltage sharing between two series resistors |

---

# 7. EMF, TERMINAL PD AND INTERNAL RESISTANCE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |             +---| |---+                                            |
  |             |  E , r  |                                            |
  |             |         |                                            |
  |             +--/\/\/--+                                            |
  |                  R                                                 |
  |                                                                    |
  |                     E                                              |
  |          I   =   --------                                          |
  |                   R  +  r                                          |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   DISCHARGING           V  =  E  -  I r          (V < E)           |
  |                                                                    |
  |   CHARGING              V  =  E  +  I r          (V > E)           |
  |                                                                    |
  |   OPEN CIRCUIT          V  =  E        (I = 0)                     |
  |                                                                    |
  |   SHORT CIRCUIT         I  =  E / r    (V = 0)   -- maximum current|
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |                    E - V                +-        -+              |
  |          r  =    ---------      r   =   |  E  -  V |   x   R      |
  |                      I                  |  --------|              |
  |                                         |     V    |              |
  |                                         +-        -+              |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Also         E  =  I ( R + r )  =  I R  +  I r                   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| I = E/(R + r) | A cell with internal resistance drives a circuit |
| V = E - I r | Terminal voltage asked, current flowing |
| r = (E - V) R / V | E and V both known, r asked |
| I = E / r | "Short-circuit current" or "maximum current" |

---

# 8. GROUPING OF CELLS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   n CELLS IN SERIES       ---| |---| |---| |---                    |
  |                                                                    |
  |             n E                                                    |
  |     I  =  ----------          best when   R  >>  r                 |
  |            R + n r                                                 |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   m CELLS IN PARALLEL          +---| |---+                         |
  |                                |---| |---|                         |
  |                                                                    |
  |               E              m E                                   |
  |     I  =  ----------  =  -----------      best when  R  <<  r      |
  |            R + r/m        m R  +  r                                |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   MIXED  ( m rows in parallel, n cells in series per row )         |
  |                                                                    |
  |              n E              m n E                                |
  |     I  =  -----------  =  -------------                            |
  |            R + n r/m       m R  +  n r                             |
  |                                                                    |
  |     MAXIMUM CURRENT when      R  =  n r / m                        |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TWO UNLIKE CELLS IN SERIES, AIDING                               |
  |                                                                    |
  |            E1 + E2                                                 |
  |     I = -------------                                              |
  |          R + r1 + r2                                               |
  |                                                                    |
  |   TWO UNLIKE CELLS IN SERIES, OPPOSING                             |
  |                                                                    |
  |            E1 - E2                                                 |
  |     I = -------------                                              |
  |          R + r1 + r2                                               |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   TWO UNLIKE CELLS IN PARALLEL  (equivalent cell)                  |
  |                                                                    |
  |             E1 r2  +  E2 r1                    r1 r2               |
  |     E(eq) = ---------------- ,     r(eq)  =  ----------            |
  |                 r1  +  r2                     r1 + r2              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Arrangement | Use it when | Total emf | Total internal resistance |
|---|---|---|---|
| Series (n cells) | R is much greater than r | n E | n r |
| Parallel (m cells) | R is much smaller than r | E | r / m |
| Mixed (m rows of n) | R is comparable to r | n E | n r / m |

---

# 9. KIRCHHOFF'S LAWS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   JUNCTION RULE (KCL)       SUM of I at a junction  =  0           |
  |                                                                    |
  |          current IN  =  current OUT                                |
  |                                                                    |
  |          Based on:  CONSERVATION OF CHARGE                         |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   LOOP RULE (KVL)           SUM ( I R )   =   SUM ( E )            |
  |                                                                    |
  |          Based on:  CONSERVATION OF ENERGY                         |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   SIGN CONVENTION                                                  |
  |                                                                    |
  |     walking WITH    the current through R    ->   I R  is  -       |
  |     walking AGAINST the current through R    ->   I R  is  +       |
  |                                                                    |
  |     leaving a cell by its  +  terminal       ->   E    is  +       |
  |     leaving a cell by its  -  terminal       ->   E    is  -       |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 10. WHEATSTONE BRIDGE AND METRE BRIDGE

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |               B                    BALANCE CONDITION               |
  |             /   \                                                  |
  |        P  /       \  Q                 P        R                  |
  |         /           \                 ---  =   ---                 |
  |      A ------(G)------ C               Q        S                  |
  |         \           /                                              |
  |        R  \       /  S             or     P S  =  Q R              |
  |             \   /                                                  |
  |               D                    (galvanometer current Ig = 0)   |
  |               |                                                    |
  |           ---| |---                          Q R                   |
  |              E                        S  =  -----                  |
  |                                                P                   |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   METRE BRIDGE                                                     |
  |                                                                    |
  |     +--[ R ]--+--[ S ]--+                                          |
  |     |         |         |                                          |
  |     |        (G)        |                    ( 100  -  l )         |
  |     |         |         |        S   =   R  --------------         |
  |     A=========|=========C                        l                 |
  |     0        l cm      100 cm                                      |
  |     |                   |         ( l  in cm, measured from the    |
  |     +-------| |---------+           end where R is connected )     |
  |              E                                                     |
  |                                                                    |
  |                                     S A        S  pi r^2           |
  |   Resistivity of the wire   rho =  -----   =  -----------          |
  |                                      L             L               |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| P/Q = R/S | Bridge is balanced, one resistance unknown |
| S = Q R / P | Standard Wheatstone numerical |
| S = R (100 - l)/l | Metre bridge, balancing length l given |
| new l = 100 - l | R and S are interchanged |
| rho = S pi r^2 / L | Resistivity of the specimen wire asked |

---

# 11. POTENTIOMETER

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   PRINCIPLE         V  is proportional to  l                       |
  |                                                                    |
  |                                V                                   |
  |   POTENTIAL GRADIENT    k  =  ---           Unit: V/m              |
  |                                L                                   |
  |                                                                    |
  |                    then     V  =  k  l                             |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   COMPARING TWO EMFs                                               |
  |                                                                    |
  |             E1        l1                                           |
  |            ----  =   ----                                          |
  |             E2        l2                                           |
  |                                                                    |
  |   (sum-and-difference method:  E1/E2 = (l1 + l2)/(l1 - l2) )       |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   INTERNAL RESISTANCE OF A CELL                                    |
  |                                                                    |
  |                    ( l1  -  l2 )                                   |
  |          r  =  R  ---------------                                  |
  |                          l2                                        |
  |                                                                    |
  |          l1 = balancing length with the key OPEN   (gives E)       |
  |          l2 = balancing length with the key CLOSED (gives V)       |
  |          R  = the shunt resistance across the cell                 |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |   Potential gradient of the driver circuit                         |
  |                                                                    |
  |                    E(driver)                rho'                   |
  |          k  =  ------------------------  x  ------                 |
  |                 R(rheostat) + R(wire)         1                    |
  |                                                                    |
  |          (in words:  k = I x resistance per unit length)           |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| k = V / L | Potential gradient asked |
| V = k l | p.d. across a length of the wire |
| E1/E2 = l1/l2 | Comparing the emfs of two cells |
| r = R (l1 - l2)/l2 | Internal resistance by potentiometer |
| E(driver) > E(test) | Checking whether a balance point exists at all |

---

# 12. POWER, ENERGY AND HEATING

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |                                              V^2                   |
  |     POWER      P  =  V I   =   I^2 R   =   -------                 |
  |                                               R                    |
  |                                                                    |
  |     Unit: watt (W)                                                 |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |                                              V^2                   |
  |     ENERGY / HEAT   W = H = V I t = I^2 R t = ---- t     joule     |
  |                                                R                   |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |     1 kilowatt-hour  =  3.6  x  10^6  joule                        |
  |                                                                    |
  |                        watt  x  hours                              |
  |     Units (kWh)  =  --------------------                           |
  |                            1000                                    |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |     RESISTANCE OF A RATED APPLIANCE                                |
  |                                                                    |
  |              V^2                    P                              |
  |       R  =  -----          I   =   ---                             |
  |               P                     V                              |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |     COMBINED WATTAGE (same rated voltage)                          |
  |                                                                    |
  |       parallel :   P  =  P1  +  P2                                 |
  |                                                                    |
  |                          P1 P2                                     |
  |       series   :   P  = ---------                                  |
  |                         P1 + P2                                    |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |     MAXIMUM POWER TRANSFER                                         |
  |                                                                    |
  |                                        E^2                         |
  |          R  =  r        P(max)  =   -------                        |
  |                                       4 r                          |
  |                                                                    |
  |          Efficiency at maximum power  =  50 %                      |
  |                                                                    |
  +--------------------------------------------------------------------+
  |                                                                    |
  |     JOULE'S LAW OF HEATING                                         |
  |                                                                    |
  |          H  =  I^2 R t     joule                                   |
  |                                                                    |
  |                I^2 R t                                             |
  |          H  =  --------    calorie      ( J = 4.18 J/cal )         |
  |                   J                                                |
  |                                                                    |
  |     1.  H is proportional to I^2      (R, t constant)              |
  |     2.  H is proportional to R        (I, t constant)              |
  |     3.  H is proportional to t        (I, R constant)              |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| P = V I | V and I both known |
| P = I^2 R | Resistors in SERIES (same I) |
| P = V^2 / R | Resistors in PARALLEL (same V) |
| R = V^2 / P | A bulb marked "60 W, 240 V" |
| 1 kWh = 3.6 x 10^6 J | Electricity bill / commercial unit |
| P(max) = E^2 / 4r | Maximum power transfer question |
| H = I^2 R t | Heat produced, Joule's law |

---

# 13. USEFUL CONSTANTS

```
  +----------------------------------+-------------------------------+
  |  Charge of an electron      e    |  1.6  x 10^-19  C             |
  |  Mass of an electron        m    |  9.1  x 10^-31  kg            |
  |  Free electron density in        |                               |
  |  copper                     n    |  8.5  x 10^28   m^-3          |
  |  Resistivity of copper    rho    |  1.7  x 10^-8   ohm m         |
  |  Resistivity of silver    rho    |  1.6  x 10^-8   ohm m         |
  |  Resistivity of nichrome  rho    |  about 1.0 x 10^-6 ohm m      |
  |  Joule's mechanical                                              |
  |  equivalent of heat         J    |  4.18  J / calorie            |
  |  1 kWh                           |  3.6  x 10^6  J               |
  |  Typical relaxation time  tau    |  about 10^-14  s              |
  |  Typical drift velocity    vd    |  about 10^-4   m/s            |
  +----------------------------------+-------------------------------+
```

---

# 14. UNIT-CONVERSION TRAPS

```
  +-------------------+--------------------------+
  |  1 mA             |  10^-3  A                |
  |  1 microampere    |  10^-6  A                |
  |  1 mm             |  10^-3  m                |
  |  1 mm^2           |  10^-6  m^2   <-- KEY    |
  |  1 cm             |  10^-2  m                |
  |  1 cm^2           |  10^-4  m^2              |
  |  1 kilo-ohm       |  10^3   ohm              |
  |  1 mega-ohm       |  10^6   ohm              |
  |  1 minute         |  60     s                |
  |  1 hour           |  3600   s                |
  |  1 kW             |  1000   W                |
  +-------------------+--------------------------+
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
  +----+----------------------------------------------------------------+
  |  1 |   V  =  I R                                                    |
  +----+----------------------------------------------------------------+
  |  2 |          rho L                                                 |
  |    |   R  =  --------                                               |
  |    |            A                                                   |
  +----+----------------------------------------------------------------+
  |  3 |   I  =  n A e vd                                               |
  +----+----------------------------------------------------------------+
  |  4 |              m                                                 |
  |    |   rho  =  ----------                                           |
  |    |            n e^2 tau                                           |
  +----+----------------------------------------------------------------+
  |  5 |                              1       1      1                  |
  |    |   Rs = R1 + R2       and    ---- =  ---- + ----                |
  |    |                              Rp      R1     R2                 |
  +----+----------------------------------------------------------------+
  |  6 |                E                                               |
  |    |   I  =  ----------      and      V  =  E  -  I r               |
  |    |          R  +  r                                               |
  +----+----------------------------------------------------------------+
  |  7 |    P        R                                                  |
  |    |   ---  =   ---           (Wheatstone bridge, at balance)       |
  |    |    Q        S                                                  |
  +----+----------------------------------------------------------------+
  |  8 |                ( 100  -  l )                                   |
  |    |   S  =  R  x  ---------------      (metre bridge)              |
  |    |                      l                                         |
  +----+----------------------------------------------------------------+
  |  9 |    E1       l1                       ( l1  -  l2 )             |
  |    |   ----  =  ----      and    r  =  R ---------------            |
  |    |    E2       l2                            l2                   |
  +----+----------------------------------------------------------------+
  | 10 |                            V^2                                 |
  |    |   P  =  V I  =  I^2 R  =  -----                                |
  |    |                             R                                  |
  +----+----------------------------------------------------------------+
```

**If you know only these ten, you can still attempt about 12 marks of this
chapter. Learn them in this order — number 1 today, number 10 last.**
