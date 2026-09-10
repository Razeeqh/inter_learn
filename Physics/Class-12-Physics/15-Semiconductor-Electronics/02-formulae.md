# Semiconductor Electronics — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Very few of these are hard. Most of this chapter is theory — but the examiner
still expects the relations below to be written correctly, so learn them.

---

# 1. ENERGY BANDS AND CLASSIFICATION

```
  +--------------------------------------------------------------+
  |                                                              |
  |   Eg   =   E(conduction band bottom)  -  E(valence band top) |
  |                                                              |
  |   1 eV  =  1.6 x 10^-19  J                                   |
  |                                                              |
  |   Energy of a photon that can just cross the gap:            |
  |                                                              |
  |                       h c                                    |
  |            Eg   =   -------                                  |
  |                     lambda                                   |
  |                                                              |
  |   h = 6.63 x 10^-34 J s      c = 3 x 10^8 m/s                |
  |                                                              |
  +--------------------------------------------------------------+
```

| Quantity | Value | When to use |
|---|---|---|
| Eg of germanium | 0.72 eV | Classify material, compare Ge with Si |
| Eg of silicon | 1.1 eV | Classify material, LED / solar-cell questions |
| Eg of a conductor | 0 (bands overlap) | Classification question |
| Eg of an insulator | more than 3 eV (diamond about 6 eV) | Classification question |
| Thermal energy at 300 K | about 0.026 eV | To argue why an insulator cannot conduct |
| 1 eV in joules | 1.6 x 10^-19 J | Any conversion of band gap to joules |

---

# 2. INTRINSIC SEMICONDUCTORS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   For an INTRINSIC (pure) semiconductor:                     |
  |                                                              |
  |            n(e)   =   n(h)   =   n(i)                        |
  |                                                              |
  |   Total current:                                             |
  |                                                              |
  |            I      =   I(e)   +   I(h)                        |
  |                                                              |
  +--------------------------------------------------------------+
```

| Quantity | Symbol / value | When to use |
|---|---|---|
| Intrinsic concentration of Ge at 300 K | n(i) = 2.4 x 10^19 m^-3 | Numerical on Ge |
| Intrinsic concentration of Si at 300 K | n(i) = 1.5 x 10^16 m^-3 | Numerical on Si |
| Charge on an electron / hole | 1.6 x 10^-19 C | Any current or conductivity sum |

---

# 3. MASS ACTION LAW AND CHARGE NEUTRALITY

```
  +--------------------------------------------------------------+
  |                                                              |
  |     MASS ACTION LAW                                          |
  |                                                              |
  |            n(e)  x  n(h)   =   n(i)^2                        |
  |                                                              |
  |     valid for intrinsic AND extrinsic material,              |
  |     at a FIXED temperature.                                  |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |     Rearranged forms you will actually use:                  |
  |                                                              |
  |                n(i)^2                    n(i)^2              |
  |     n(h)  =  ----------        n(e)  =  ----------           |
  |                 n(e)                       n(h)              |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |     CHARGE NEUTRALITY                                        |
  |                                                              |
  |         n(e)  +  N(A)   =   n(h)  +  N(D)                    |
  |                                                              |
  |     N(D) = donor concentration , N(A) = acceptor concentration|
  |                                                              |
  |     Handy approximations:                                    |
  |         in n-type :   n(e)  is about  N(D)                   |
  |         in p-type :   n(h)  is about  N(A)                   |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| n(e) x n(h) = n(i)^2 | Given one carrier concentration, find the other |
| n(h) = n(i)^2 / n(e) | n-type: find the minority hole concentration |
| n(e) = n(i)^2 / n(h) | p-type: find the minority electron concentration |
| n(e) is about N(D) | n-type: majority electrons equal the doping level |
| n(h) is about N(A) | p-type: majority holes equal the doping level |

---

# 4. CONDUCTIVITY AND RESISTIVITY

```
  +--------------------------------------------------------------+
  |                                                              |
  |   General semiconductor:                                     |
  |                                                              |
  |   sigma  =  e [  n(e) x mu(e)   +   n(h) x mu(h)  ]          |
  |                                                              |
  |   Intrinsic case ( n(e) = n(h) = n(i) ):                     |
  |                                                              |
  |   sigma  =  e  n(i)  [ mu(e)  +  mu(h) ]                     |
  |                                                              |
  |   n-type (holes negligible):    sigma = e n(e) mu(e)         |
  |   p-type (electrons negligible):sigma = e n(h) mu(h)         |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |                    1                                         |
  |   rho     =    ---------          (resistivity)              |
  |                  sigma                                       |
  |                                                              |
  |                  rho  x  l                                   |
  |   R       =    -------------      (resistance of a bar)      |
  |                     A                                        |
  |                                                              |
  |   drift velocity   v(d)  =  mu  x  E                         |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| sigma = e [n(e) mu(e) + n(h) mu(h)] | Any conductivity numerical, doped or pure |
| sigma = e n(i) [mu(e) + mu(h)] | Pure Ge or Si sample |
| rho = 1 / sigma | Question asks for resistivity instead of conductivity |
| R = rho l / A | A slab or bar of semiconductor with given dimensions |
| v(d) = mu E | Mobility definition, drift speed of carriers |

---

# 5. TEMPERATURE BEHAVIOUR

```
  +---------------------------+----------------------------------+
  |  METAL (conductor)        |  SEMICONDUCTOR                   |
  +---------------------------+----------------------------------+
  |  T up  ->  R UP           |  T up  ->  R DOWN                |
  |  POSITIVE temperature     |  NEGATIVE temperature            |
  |  coefficient              |  coefficient                     |
  |  Number of carriers is    |  Number of carriers INCREASES    |
  |  fixed; only collisions   |  rapidly (more bonds break)      |
  |  increase                 |                                  |
  |  Conducts even at 0 K     |  PERFECT INSULATOR at 0 K        |
  +---------------------------+----------------------------------+
```

| Statement | When to use |
|---|---|
| Semiconductor: conductivity rises with temperature | "Why is the temperature effect opposite?" (4 marks) |
| Metal: resistance rises with temperature | Same question, second half |
| At 0 K a pure semiconductor is an insulator | 2-mark question, band-diagram reasoning |

---

# 6. p-n JUNCTION

```
  +--------------------------------------------------------------+
  |                                                              |
  |   At equilibrium (no battery):                               |
  |                                                              |
  |        diffusion current   =   drift current                 |
  |        NET current  =  ZERO                                  |
  |                                                              |
  |   BARRIER POTENTIAL  V(B)                                    |
  |        Germanium  ->  0.3  V                                 |
  |        Silicon    ->  0.7  V                                 |
  |                                                              |
  |   Effective barrier under bias:                              |
  |                                                              |
  |        FORWARD bias :   V(B)  -  V                           |
  |        REVERSE bias :   V(B)  +  V                           |
  |                                                              |
  |   Depletion layer width:  about 10^-6 m                      |
  |        FORWARD bias  ->  width DECREASES                     |
  |        REVERSE bias  ->  width INCREASES                     |
  |                                                              |
  +--------------------------------------------------------------+
```

| Quantity | Value / rule | When to use |
|---|---|---|
| V(B) for Ge | 0.3 V | Diode circuit with a Ge diode |
| V(B) for Si | 0.7 V | Diode circuit with a Si diode |
| Diffusion current | due to MAJORITY carriers, p to n | Theory question on junction formation |
| Drift current | due to MINORITY carriers, n to p | Same |
| Depletion width | shrinks in forward, grows in reverse | Bias comparison table |

---

# 7. DIODE CIRCUIT CALCULATIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   Simple forward-biased series circuit:                      |
  |                                                              |
  |                V   -   V(knee)                               |
  |       I   =   -----------------                              |
  |                       R                                      |
  |                                                              |
  |   (V(knee) = 0.7 V for Si, 0.3 V for Ge; take 0 if the       |
  |    diode is called "ideal")                                  |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   DYNAMIC (AC) RESISTANCE                                    |
  |                                                              |
  |                  change in V          dV                     |
  |       r(d)  =  ----------------  =  ------                   |
  |                  change in I          dI                     |
  |                                                              |
  |   STATIC (DC) RESISTANCE                                     |
  |                                                              |
  |                   V                                          |
  |       R(dc) =   -----                                        |
  |                   I                                          |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| I = (V - V(knee)) / R | Find current in a forward-biased diode circuit |
| r(d) = dV / dI | Slope question from the V-I graph (small changes given) |
| R(dc) = V / I | A single point on the characteristic is given |

---

# 8. HALF-WAVE RECTIFIER

```
  +--------------------------------------------------------------+
  |                                                              |
  |                        V(m)                                  |
  |        I(m)    =    ---------------                          |
  |                      r(f)  +  R(L)                           |
  |                                                              |
  |                        I(m)                                  |
  |        I(dc)   =    ---------                                |
  |                         pi                                   |
  |                                                              |
  |                        I(m)                                  |
  |        I(rms)  =    ---------                                |
  |                          2                                   |
  |                                                              |
  |        V(dc)   =    I(dc)  x  R(L)                           |
  |                                                              |
  |        ripple factor        r    =   1.21                    |
  |        maximum efficiency        =   40.6 %                  |
  |        output frequency          =   f                       |
  |        PIV                       =   V(m)                    |
  |        number of diodes          =   1                       |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| I(dc) = I(m) / pi | Average (DC) current of a half-wave rectifier |
| I(rms) = I(m) / 2 | RMS current of a half-wave rectifier |
| r = 1.21 | Quoted directly, or to compare with full-wave |
| efficiency = 40.6 % | Efficiency question, 2 or 4 marks |
| output frequency = f | "What is the ripple frequency?" |
| PIV = V(m) | Choosing the diode rating |

---

# 9. FULL-WAVE RECTIFIER

```
  +--------------------------------------------------------------+
  |                                                              |
  |                      2  x  I(m)                              |
  |        I(dc)   =    -------------                            |
  |                          pi                                  |
  |                                                              |
  |                        I(m)                                  |
  |        I(rms)  =    -----------                              |
  |                      sqrt( 2 )                               |
  |                                                              |
  |        V(dc)   =    I(dc)  x  R(L)                           |
  |                                                              |
  |        ripple factor        r    =   0.48                    |
  |        maximum efficiency        =   81.2 %                  |
  |        output frequency          =   2 f                     |
  |        PIV (centre tap)          =   2 V(m)                  |
  |        PIV (bridge)              =   V(m)                    |
  |        number of diodes          =   2 (centre tap)          |
  |                                      4 (bridge)              |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| I(dc) = 2 I(m) / pi | Average current of a full-wave rectifier |
| I(rms) = I(m) / sqrt(2) | RMS current of a full-wave rectifier |
| r = 0.48 | Ripple comparison; "which gives smoother DC?" |
| efficiency = 81.2 % | Efficiency question; note it is double 40.6 % |
| output frequency = 2f | Very common MCQ |
| PIV = 2 V(m) for centre tap | Diode rating in the centre-tap circuit |

---

# 10. RIPPLE FACTOR AND EFFICIENCY (general definitions)

```
  +--------------------------------------------------------------+
  |                                                              |
  |   RIPPLE FACTOR                                              |
  |                                                              |
  |            rms value of the AC component in the output       |
  |     r  =  --------------------------------------------       |
  |                  DC value of the output                      |
  |                                                              |
  |   Working form:                                              |
  |                                                              |
  |                    +-  I(rms)  -+ 2                          |
  |     r  =    sqrt   | ----------- |    -   1                  |
  |                    +-  I(dc)   -+                            |
  |                                                              |
  |   SMALLER r  =  smoother DC  =  better rectifier             |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   RECTIFIER EFFICIENCY                                       |
  |                                                              |
  |                    DC power output                           |
  |     eta   =   -------------------------  x  100 %            |
  |                    AC power input                            |
  |                                                              |
  |                    ( I(dc) )^2  x  R(L)                      |
  |           =   ------------------------------  x  100 %       |
  |                ( I(rms) )^2 x ( r(f) + R(L) )                |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| r = sqrt((I(rms)/I(dc))^2 - 1) | Asked to CALCULATE the ripple factor |
| eta = DC power / AC power x 100 | Asked to define or compute efficiency |
| Half-wave check: I(rms)/I(dc) = pi/2 | Verifying r = 1.21 |
| Full-wave check: I(rms)/I(dc) = pi/(2 sqrt 2) | Verifying r = 0.48 |

---

# 11. FILTER

```
  +--------------------------------------------------------------+
  |                                                              |
  |   A capacitor filter is placed IN PARALLEL with the load.    |
  |   An inductor (choke) filter is placed IN SERIES with it.    |
  |                                                              |
  |   Larger C and larger R(L)  ->  slower discharge             |
  |                             ->  SMALLER ripple               |
  |                                                              |
  |   Approximate ripple with a capacitor filter (full wave):    |
  |                                                              |
  |                        1                                     |
  |        r    is about  --------------------                   |
  |                        4 sqrt(3) f C R(L)                    |
  |                                                              |
  +--------------------------------------------------------------+
```

| Rule | When to use |
|---|---|
| Capacitor in PARALLEL with load | Drawing the filter circuit |
| Inductor in SERIES with load | Choke filter question |
| Pi-filter = C, L, C | "Name the best filter" |
| Bigger C means smaller ripple | Reasoning question on smoothing |

---

# 12. ZENER DIODE AS A VOLTAGE REGULATOR

```
  +--------------------------------------------------------------+
  |                                                              |
  |     V(i)   =   I  x  R(s)   +   V(z)                         |
  |                                                              |
  |     I      =   I(z)   +   I(L)                               |
  |                                                              |
  |                  V(z)                                        |
  |     I(L)   =   --------                                      |
  |                  R(L)                                        |
  |                                                              |
  |                 V(i)  -  V(z)                                |
  |     R(s)   =   ----------------                              |
  |                       I                                      |
  |                                                              |
  |     Output voltage      V(o)  =  V(z)   (constant)           |
  |                                                              |
  |     Power in the Zener   P(z) =  V(z)  x  I(z)               |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| V(i) = I R(s) + V(z) | Find the series resistor or the input voltage |
| I = I(z) + I(L) | Split the total current at the Zener node |
| I(L) = V(z) / R(L) | Load current, since output is always V(z) |
| R(s) = (V(i) - V(z)) / I | Design question: choose the dropping resistor |
| P(z) = V(z) I(z) | Check the Zener does not exceed its power rating |

---

# 13. LED, PHOTODIODE, SOLAR CELL

```
  +--------------------------------------------------------------+
  |                                                              |
  |     Photon energy emitted by an LED:                         |
  |                                                              |
  |                            h c                               |
  |          E  =  h nu  =  ---------  =  Eg                     |
  |                          lambda                              |
  |                                                              |
  |     So the WAVELENGTH of the light:                          |
  |                                                              |
  |                     h c                                      |
  |        lambda  =  -------                                    |
  |                     Eg                                       |
  |                                                              |
  |     Quick working version (Eg in eV):                        |
  |                                                              |
  |                       1240                                   |
  |        lambda(nm) = --------                                 |
  |                       Eg(eV)                                 |
  |                                                              |
  +--------------------------------------------------------------+
```

| Device | Bias | Converts | When to use |
|---|---|---|---|
| LED | FORWARD | electricity to light | Wavelength / colour numerical |
| Photodiode | REVERSE | light to current | "Why reverse biased?" question |
| Solar cell | NO bias | light to voltage | Photovoltaic effect question |
| Zener | REVERSE (breakdown) | fluctuating V to steady V | Regulator circuit |

```
   For an LED or photodiode to work, the photon energy must satisfy

              h nu   >   Eg
```

---

# 14. TRANSISTOR CURRENT RELATIONS  *** memorise this block ***

```
  +--------------------------------------------------------------+
  |                                                              |
  |            I(E)   =   I(B)   +   I(C)                        |
  |                                                              |
  |   with     I(C)   >>   I(B)     always                       |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   COMMON BASE current gain (alpha)                           |
  |                                                              |
  |                     I(C)                                     |
  |        alpha  =  ---------          at constant V(CB)        |
  |                     I(E)                                     |
  |                                                              |
  |        alpha  is ALWAYS LESS THAN 1    (0.95 to 0.99)        |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   COMMON EMITTER current gain (beta)                         |
  |                                                              |
  |                     I(C)                                     |
  |        beta   =  ---------          at constant V(CE)        |
  |                     I(B)                                     |
  |                                                              |
  |        beta   is ALWAYS MUCH GREATER THAN 1   (20 to 500)    |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   THE ALPHA - BETA RELATIONS                                 |
  |                                                              |
  |                    alpha                     beta            |
  |      beta   =  --------------   alpha  =  ------------       |
  |                 1  -  alpha                1  +  beta        |
  |                                                              |
  |   Also useful:                                               |
  |                                                              |
  |      I(C)  =  alpha x I(E)        I(C)  =  beta x I(B)       |
  |                                                              |
  |      I(E)  =  ( 1 + beta ) x I(B)                            |
  |                                                              |
  |      gamma (common collector gain)  =  1  +  beta            |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| I(E) = I(B) + I(C) | Any transistor numerical — start here |
| alpha = I(C) / I(E) | Common base gain asked |
| beta = I(C) / I(B) | Common emitter gain asked |
| beta = alpha / (1 - alpha) | alpha given, beta wanted |
| alpha = beta / (1 + beta) | beta given, alpha wanted |
| I(C) = beta I(B) | Find collector current from base current |
| I(E) = (1 + beta) I(B) | Find emitter current from base current |

## Alpha-beta ready reckoner

```
  +-----------+------------+
  |  alpha    |   beta     |
  +-----------+------------+
  |  0.90     |      9     |
  |  0.95     |     19     |
  |  0.96     |     24     |
  |  0.98     |     49     |
  |  0.99     |     99     |
  |  0.995    |    199     |
  +-----------+------------+
```

---

# 15. TRANSISTOR RESISTANCES AND GAINS (COMMON EMITTER)

```
  +--------------------------------------------------------------+
  |                                                              |
  |   INPUT RESISTANCE       (V(CE) held constant)               |
  |                                                              |
  |                 change in V(BE)                              |
  |       r(i)  =  ------------------          LOW (about 1 k)   |
  |                 change in I(B)                               |
  |                                                              |
  |   OUTPUT RESISTANCE      (I(B) held constant)                |
  |                                                              |
  |                 change in V(CE)                              |
  |       r(o)  =  ------------------          HIGH (tens of k)  |
  |                 change in I(C)                               |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   CURRENT GAIN                                               |
  |                                                              |
  |                 change in I(C)                               |
  |       A(i)  =  ------------------   =   beta                 |
  |                 change in I(B)                               |
  |                                                              |
  |   VOLTAGE GAIN                                               |
  |                                                              |
  |                 change in V(o)                    R(C)       |
  |       A(v)  =  -----------------  =   beta   x  --------     |
  |                 change in V(i)                    r(i)       |
  |                                                              |
  |   POWER GAIN                                                 |
  |                                                              |
  |                                              R(C)            |
  |       A(p)  =  A(v) x A(i)  =  beta^2  x  ---------          |
  |                                              r(i)            |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   The OUTPUT (LOAD LINE) EQUATION                            |
  |                                                              |
  |       V(CE)   =   V(CC)   -   I(C) x R(C)                    |
  |                                                              |
  |   This one line explains PHASE REVERSAL:                     |
  |       I(C) up   ->   V(CE) DOWN                              |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| r(i) = dV(BE) / dI(B) | From the INPUT characteristics graph |
| r(o) = dV(CE) / dI(C) | From the OUTPUT characteristics graph |
| A(v) = beta x R(C) / r(i) | Voltage gain of a CE amplifier |
| A(p) = beta^2 x R(C) / r(i) | Power gain of a CE amplifier |
| V(CE) = V(CC) - I(C) R(C) | Output voltage, load line, switch states |
| Output = A(v) x input | Find the output signal amplitude |

## The three regions at a glance

| Region | E-B junction | B-C junction | Use |
|---|---|---|---|
| Cut-off | Reverse | Reverse | Switch OFF, output = V(CC) |
| Active | Forward | Reverse | Amplifier, I(C) = beta I(B) |
| Saturation | Forward | Forward | Switch ON, output about 0 |

---

# 16. OSCILLATOR

```
  +--------------------------------------------------------------+
  |                                                              |
  |   Frequency of an L-C tank circuit:                          |
  |                                                              |
  |                        1                                     |
  |        f   =   ------------------------                      |
  |                 2 pi  x  sqrt( L C )                         |
  |                                                              |
  |   Requirement for sustained oscillation:                     |
  |        POSITIVE feedback (feedback in phase with input)       |
  |        and enough feedback to replace the energy lost.        |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| f = 1 / (2 pi sqrt(LC)) | Oscillator frequency numerical |
| Positive feedback needed | Theory: "condition for oscillation" |

---

# 17. LOGIC GATES — BOOLEAN EXPRESSIONS

```
  +----------+---------------------+------------------------------+
  |  GATE    |  BOOLEAN EXPRESSION |  OUTPUT RULE IN ONE LINE     |
  +----------+---------------------+------------------------------+
  |  OR      |   Y  =  A  +  B     |  1 if ANY input is 1         |
  |  AND     |   Y  =  A  .  B     |  1 only if ALL inputs are 1  |
  |  NOT     |   Y  =  A'          |  opposite of the input       |
  |  NAND    |   Y  =  ( A . B )'  |  0 only if ALL inputs are 1  |
  |  NOR     |   Y  =  ( A + B )'  |  1 only if ALL inputs are 0  |
  +----------+---------------------+------------------------------+
```

## Master truth table

```
  +-----+-----+------+------+------+------+-------+
  |  A  |  B  |  OR  | AND  | NAND | NOR  | NOT A |
  +-----+-----+------+------+------+------+-------+
  |  0  |  0  |  0   |  0   |  1   |  1   |   1   |
  |  0  |  1  |  1   |  0   |  1   |  0   |   1   |
  |  1  |  0  |  1   |  0   |  1   |  0   |   0   |
  |  1  |  1  |  1   |  1   |  0   |  0   |   0   |
  +-----+-----+------+------+------+------+-------+
```

## Boolean identities worth knowing

```
   A  +  0  =  A            A  .  0  =  0
   A  +  1  =  1            A  .  1  =  A
   A  +  A  =  A            A  .  A  =  A
   A  +  A' =  1            A  .  A' =  0
   ( A' )'  =  A

   DE MORGAN'S THEOREMS

   ( A  +  B )'   =   A'  .  B'
   ( A  .  B )'   =   A'  +  B'
```

| Fact | When to use |
|---|---|
| NAND and NOR are UNIVERSAL gates | Guaranteed 2-mark question |
| NAND with inputs joined = NOT gate | "Build a NOT from a NAND" |
| Two NANDs = AND | Gate conversion question |
| Three NANDs = OR | Gate conversion question |
| De Morgan's theorems | Simplifying a Boolean expression |

---

# 18. USEFUL CONSTANTS

```
  +--------------------------------+-----------------------------+
  |  Charge of an electron   e     |  1.6  x 10^-19  C           |
  |  Planck's constant       h     |  6.63 x 10^-34  J s         |
  |  Speed of light          c     |  3    x 10^8    m/s         |
  |  1 eV                          |  1.6  x 10^-19  J           |
  |  Boltzmann constant      k     |  1.38 x 10^-23  J/K         |
  |  kT at 300 K                   |  about 0.026 eV             |
  |  pi                            |  3.14                       |
  |  sqrt(2)                       |  1.414                      |
  +--------------------------------+-----------------------------+
```

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else from this sheet, learn these ten.

```
  +----+---------------------------------------------------------+
  | 1  |   n(e)  x  n(h)   =   n(i)^2                            |
  +----+---------------------------------------------------------+
  | 2  |   Eg :  Ge = 0.72 eV ,  Si = 1.1 eV                     |
  |    |   V(B):  Ge = 0.3 V  ,  Si = 0.7 V                      |
  +----+---------------------------------------------------------+
  | 3  |   I(E)   =   I(B)   +   I(C)                            |
  +----+---------------------------------------------------------+
  | 4  |   alpha = I(C)/I(E)        beta = I(C)/I(B)             |
  +----+---------------------------------------------------------+
  | 5  |                alpha                    beta            |
  |    |   beta  =  --------------   alpha =  ------------       |
  |    |             1  -  alpha               1  +  beta        |
  +----+---------------------------------------------------------+
  | 6  |                       R(C)                              |
  |    |   A(v)  =  beta  x  --------      A(p) = A(v) x beta    |
  |    |                       r(i)                              |
  +----+---------------------------------------------------------+
  | 7  |   V(CE)  =  V(CC)  -  I(C) x R(C)                       |
  |    |   (source of the 180 degree PHASE REVERSAL)             |
  +----+---------------------------------------------------------+
  | 8  |   HALF WAVE : I(dc)=I(m)/pi , r=1.21 , eta=40.6% , f    |
  |    |   FULL WAVE : I(dc)=2I(m)/pi, r=0.48 , eta=81.2%, 2f    |
  +----+---------------------------------------------------------+
  | 9  |   ZENER :  V(i) = I R(s) + V(z)   and   I = I(z) + I(L) |
  +----+---------------------------------------------------------+
  | 10 |   OR: A+B    AND: A.B    NOT: A'                        |
  |    |   NAND: (A.B)'   NOR: (A+B)'                            |
  |    |   NAND and NOR are UNIVERSAL                            |
  +----+---------------------------------------------------------+
```
