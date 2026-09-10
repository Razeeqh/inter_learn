# Thermal Properties of Matter — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

**THE ONE RULE THAT BREAKS MOST ANSWERS:**

```
  +---------------------------------------------------------------------+
  |   dT  (a temperature DIFFERENCE)  ->  degC and K are the SAME       |
  |   T   (an ABSOLUTE temperature)   ->  MUST be in KELVIN             |
  |                                                                     |
  |   So:  Q = m c dT      -> either scale is fine                      |
  |        E = sigma T^4   -> KELVIN ONLY                               |
  |        lambda_m T = b  -> KELVIN ONLY                               |
  |        P V = n R T     -> KELVIN ONLY                               |
  +---------------------------------------------------------------------+
```

---

# 1. TEMPERATURE SCALES

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     C - 0        F - 32        K - 273.15                           |
  |    -------  =   --------  =   ------------                          |
  |      100          180             100                               |
  |                                                                     |
  |          C          F - 32                                          |
  |         ---   =    --------                                         |
  |          5             9                                            |
  |                                                                     |
  |          9                                 5                        |
  |     F = --- C  +  32                C  =  --- ( F - 32 )            |
  |          5                                 9                        |
  |                                                                     |
  |     K  =  C  +  273.15        (use 273 in problems)                 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  +--------------------------+------------------------------------------+
  |  FACT                    |  VALUE                                   |
  +--------------------------+------------------------------------------+
  |  Ice point               |  0 degC = 32 degF = 273.15 K             |
  |  Steam point             |  100 degC = 212 degF = 373.15 K          |
  |  Absolute zero           |  -273.15 degC = -459.67 degF = 0 K       |
  |  C and F read the SAME   |  at -40                                  |
  |  Triple point of water   |  273.16 K at 0.61 kPa                    |
  |  Normal body temperature |  37 degC = 98.6 degF = 310 K             |
  +--------------------------+------------------------------------------+
```

## Gas thermometer

```
  +---------------------------------------------------------------------+
  |                            P                                        |
  |          T  =   273.16  x  ------     kelvin                        |
  |                            P_tr                                     |
  |                                                                     |
  |  P_tr = pressure of the gas at the triple point of water            |
  +---------------------------------------------------------------------+
```

## Faulty thermometer

```
  +---------------------------------------------------------------------+
  |     correct           observed  -  lower fixed point                |
  |    ---------  =  ---------------------------------------            |
  |       100          upper fixed point - lower fixed point            |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = (9/5)C + 32` | any Celsius to Fahrenheit conversion |
| `C = (5/9)(F-32)` | any Fahrenheit to Celsius conversion |
| `K = C + 273` | before EVERY gas law or radiation law |
| `x = (9/5)x + 32` | "at what temperature do two scales read the same?" |
| `T = 273.16 P/P_tr` | constant-volume gas thermometer question |
| the fixed-point ratio | a thermometer with WRONG fixed points |

---

# 2. LINEAR, AREAL AND CUBICAL EXPANSION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   LINEAR      dL  =  alpha  L  dT      L2 = L1 ( 1 + alpha dT )     |
  |                                                                     |
  |   AREAL       dA  =  beta   A  dT      A2 = A1 ( 1 + beta  dT )     |
  |                                                                     |
  |   CUBICAL     dV  =  gamma  V  dT      V2 = V1 ( 1 + gamma dT )     |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |          beta = 2 alpha            gamma = 3 alpha                  |
  |                                                                     |
  |            alpha       beta       gamma                             |
  |           -------  =  ------  =  -------                            |
  |              1           2          3                               |
  |                                                                     |
  |        alpha : beta : gamma   =   1 : 2 : 3                         |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Definitions in one line each

```
  alpha  =  dL / ( L dT )   =  increase in LENGTH per unit length per degree
  beta   =  dA / ( A dT )   =  increase in AREA   per unit area   per degree
  gamma  =  dV / ( V dT )   =  increase in VOLUME per unit volume per degree

  UNIT of all three:  per kelvin  (K^-1)
  DIMENSIONS       :  [ M^0 L^0 T^0 K^-1 ]
```

## Density on heating

```
  +---------------------------------------------------------------------+
  |                 rho1                                                |
  |     rho2  =  --------------   ~   rho1 ( 1 - gamma dT )             |
  |               1 + gamma dT                                          |
  |                                                                     |
  |     Heat a solid -> volume UP -> DENSITY DOWN                       |
  +---------------------------------------------------------------------+
```

## Values to recognise

```
  +-------------------+----------------------+
  |  MATERIAL         |  alpha (per K)       |
  +-------------------+----------------------+
  |  Invar            |  1.2 x 10^-6         |
  |  Glass            |  0.9 x 10^-5         |
  |  STEEL / IRON     |  1.2 x 10^-5   <-- learn this one
  |  Copper           |  1.7 x 10^-5         |
  |  Brass            |  1.8 x 10^-5         |
  |  Aluminium        |  2.3 x 10^-5         |
  +-------------------+----------------------+
```

| Formula | When to use |
|---|---|
| `dL = alpha L dT` | rod / rail / wire / bridge gets longer |
| `dA = 2 alpha A dT` | sheet, plate, area of a hole |
| `dV = 3 alpha V dT` | sphere, cube, block, cavity volume |
| `rho2 = rho1(1 - gamma dT)` | "find the density at the new temperature" |
| a HOLE expands like the metal | any "hole / cavity / gap" question |

---

# 3. THERMAL STRESS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     strain   =   alpha  dT                                          |
  |                                                                     |
  |     STRESS   =   Y  alpha  dT                     (N/m^2)           |
  |                                                                     |
  |     FORCE    =   Y  A  alpha  dT                  (N)               |
  |                                                                     |
  |  NO LENGTH APPEARS. The stress is the same for a 1 cm rod           |
  |  and a 10 m rod.                                                    |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `stress = Y alpha dT` | rod clamped rigidly between two walls and heated |
| `F = Y A alpha dT` | "find the force exerted on the supports/clamps" |

---

# 4. APPLICATIONS OF EXPANSION

```
  +---------------------------------------------------------------------+
  |  PENDULUM CLOCK                                                     |
  |                                                                     |
  |      dT/T  =  (1/2) alpha dt                                        |
  |                                                                     |
  |      time lost per day = (1/2) x alpha x dt x 86400  seconds        |
  |                                                                     |
  |      HOTTER -> longer rod -> LOSES time (runs slow)                 |
  |      COLDER -> shorter rod -> GAINS time (runs fast)                |
  +---------------------------------------------------------------------+
  |  METAL SCALE READING                                                |
  |                                                                     |
  |      true length  =  observed reading x ( 1 + alpha dT )            |
  |                                                                     |
  |      A hot scale UNDER-reads.                                       |
  +---------------------------------------------------------------------+
  |  BIMETALLIC STRIP                                                   |
  |                                                                     |
  |      HEATED -> bends with the metal of LARGER alpha on the OUTSIDE  |
  |      COOLED -> bends the other way                                  |
  |      USE: thermostat, fire alarm, flashing indicator                |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `(1/2) alpha dt x 86400` | "how many seconds does the clock lose per day?" |
| `true = reading (1+alpha dT)` | "a steel scale correct at X degC is used at Y degC" |
| `dL = alpha L dT` | "what gap must be left between rails?" |

---

# 5. EXPANSION OF LIQUIDS AND GASES

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     gamma(real)  =  gamma(apparent)  +  gamma(vessel)               |
  |                                                                     |
  |     gamma(vessel) = 3 x alpha(vessel material)                      |
  |                                                                     |
  |     LIQUID THAT OVERFLOWS  =  V x gamma(apparent) x dT              |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  GASES                                                              |
  |                                                                     |
  |     V_t = V_0 ( 1 + gamma_P t )       at constant PRESSURE          |
  |     P_t = P_0 ( 1 + gamma_V t )       at constant VOLUME            |
  |                                                                     |
  |               1                                                     |
  |     gamma  = ----- per degC = 0.00366 per degC  FOR EVERY GAS       |
  |               273                                                   |
  |                                                                     |
  |     Ideal gas equation:      P V  =  n R T                          |
  |                              R = 8.314 J mol^-1 K^-1                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `gamma_r = gamma_a + gamma_vessel` | mercury/liquid in a glass flask |
| `overflow = V gamma_a dT` | "how much liquid spills out?" |
| `gamma_gas = 1/273 per degC` | "coefficient of expansion of a gas" |
| `V1/T1 = V2/T2` | gas volume at a new temperature (T in K) |

---

# 6. ANOMALOUS EXPANSION OF WATER  (facts, not formulas)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   0 degC -> 4 degC   :  water CONTRACTS on heating   (ANOMALOUS)    |
  |   4 degC -> 100 degC :  water EXPANDS on heating     (normal)       |
  |                                                                     |
  |   MAXIMUM DENSITY  at 4 degC   =  1000 kg/m^3                       |
  |   MINIMUM VOLUME   at 4 degC                                        |
  |   Density of ice   =  917 kg/m^3   ->  ICE FLOATS                   |
  |                                                                     |
  |   RESULT: in a frozen lake the BOTTOM is at 4 degC (NOT 0 degC),    |
  |   ice floats on top and insulates, so fish survive.                 |
  +---------------------------------------------------------------------+
```

---

# 7. SPECIFIC HEAT AND CALORIMETRY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     HEAT CAPACITY       S  =  Q / dT             J/K                |
  |                                                                     |
  |     SPECIFIC HEAT       c  =  Q / ( m dT )       J kg^-1 K^-1       |
  |                                                                     |
  |     MOLAR SPECIFIC HEAT C  =  Q / ( n dT )       J mol^-1 K^-1      |
  |                         C  =  M c                                   |
  |                                                                     |
  |     ***  Q  =  m  c  dT  ***     (ONLY when dT is not zero)         |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |     PRINCIPLE OF CALORIMETRY                                        |
  |                                                                     |
  |          HEAT LOST  =  HEAT GAINED                                  |
  |                                                                     |
  |     WATER EQUIVALENT of a calorimeter                               |
  |                                                                     |
  |          w  =  ( mass of calorimeter x c of calorimeter )           |
  |                ------------------------------------------           |
  |                            c of water                               |
  |                                                                     |
  |     ... then simply ADD w to the mass of water inside.              |
  +---------------------------------------------------------------------+
```

## Specific heat values

```
  +--------------------+---------------------+------------------------+
  |  SUBSTANCE         |  J kg^-1 K^-1       |  cal g^-1 degC^-1      |
  +--------------------+---------------------+------------------------+
  |  WATER             |       4186          |       1.00             |
  |  Ice               |       2100          |       0.50             |
  |  Steam             |       2010          |       0.48             |
  |  Aluminium         |        900          |       0.215            |
  |  Iron / steel      |        450 - 500    |       0.11             |
  |  Copper            |        387          |       0.093            |
  |  Mercury           |        140          |       0.033            |
  |  Lead              |        128          |       0.031            |
  +--------------------+---------------------+------------------------+

  1 calorie = 4.186 J     WATER HAS THE HIGHEST SPECIFIC HEAT.
```

| Formula | When to use |
|---|---|
| `Q = m c dT` | any heating or cooling where the temperature MOVES |
| `t = Q / P` | "how long does the heater take?" |
| `C = M c` | molar specific heat from specific heat |
| heat lost = heat gained | any mixing problem |
| add `w` to the water mass | a calorimeter is mentioned |

---

# 8. LATENT HEAT AND CHANGE OF STATE

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     ***  Q  =  m  L  ***      (ONLY during a change of state,       |
  |                                when the temperature does NOT move)  |
  |                                                                     |
  |     L(fusion) of ice        =  3.33 x 10^5 J/kg  =   80 cal/g       |
  |     L(vaporisation) of water = 22.6 x 10^5 J/kg  =  540 cal/g       |
  |                                                                     |
  |     Lv is nearly 7 x Lf  ->  steam burns are far worse              |
  +---------------------------------------------------------------------+
```

## The five-stage ice-to-steam recipe

```
  +-----+---------------------------------+------------------------------+
  | (1) | ice   -20 -> 0 degC             |  Q = m c(ice) dT             |
  | (2) | MELT at 0 degC                  |  Q = m Lf         <- FLAT    |
  | (3) | water 0 -> 100 degC             |  Q = m c(water) dT           |
  | (4) | BOIL at 100 degC                |  Q = m Lv         <- FLAT    |
  | (5) | steam 100 -> 120 degC           |  Q = m c(steam) dT           |
  +-----+---------------------------------+------------------------------+

  For 1 kg of ice at -20 degC all the way to steam at 120 degC:

     Q1 = 0.42  x 10^5 J
     Q2 = 3.33  x 10^5 J
     Q3 = 4.186 x 10^5 J
     Q4 = 22.6  x 10^5 J    <-- 73% of the whole answer
     Q5 = 0.402 x 10^5 J
     -------------------------------
     TOTAL  =  3.09 x 10^6 J
```

## Change-of-state facts

```
  +---------------------------------------------------------------------+
  |  TRIPLE POINT of water    :  273.16 K  and  0.61 kPa                |
  |  CRITICAL POINT of water  :  647 K  and  221 atm                    |
  |                                                                     |
  |  PRESSURE UP  ->  BOILING POINT UP    (always)                      |
  |                                                                     |
  |  PRESSURE UP  ->  MELTING POINT:                                    |
  |        DOWN  for substances that CONTRACT on melting                |
  |              (ICE, cast iron, bismuth)                              |
  |        UP    for substances that EXPAND on melting                  |
  |              (wax, most metals, sulphur)                            |
  |                                                                     |
  |  REGELATION = ice MELTS under pressure and RE-FREEZES when the      |
  |               pressure is removed.                                  |
  |                                                                     |
  |  SUBLIMATION examples: dry ice (CO2), camphor, iodine, naphthalene  |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `Q = m L` | melting, freezing, boiling, condensing |
| the 5-stage recipe | "ice at -X degC to steam at +Y degC" |
| check the heat budget FIRST | any ice + water or steam + water mixture |
| `m = Q_available / L` | "how much ice melts?" when not all of it does |

---

# 9. CONDUCTION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                   Q          K  A  ( T1 - T2 )                      |
  |          H  =   -----   =  ---------------------                    |
  |                   t                 L                               |
  |                                                                     |
  |   H = rate of heat flow (W)                                         |
  |   K = thermal conductivity,  unit  W m^-1 K^-1                      |
  |       dimensions [ M L T^-3 K^-1 ]                                  |
  |                                                                     |
  |   temperature gradient  =  ( T1 - T2 ) / L                          |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |   THERMAL RESISTANCE      R  =  L / ( K A )       unit  K/W         |
  |                                                                     |
  |                          dT                                         |
  |                    H  =  ----                                       |
  |                           R                                         |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Compound slabs

```
  +---------------------------------------------------------------------+
  |  SERIES  (one behind the other; SAME HEAT through both)             |
  |                                                                     |
  |      R = R1 + R2                                                    |
  |                                                                     |
  |                        L1 + L2                                      |
  |          K_eq   =   ------------------                              |
  |                     L1/K1  +  L2/K2                                 |
  |                                                                     |
  |      If L1 = L2 :   K_eq = 2 K1 K2 / ( K1 + K2 )                    |
  |                                                                     |
  |      JUNCTION TEMPERATURE                                           |
  |                                                                     |
  |               (K1 T1 / L1) + (K2 T2 / L2)                           |
  |         T  =  ----------------------------                          |
  |                 (K1 / L1)  +  (K2 / L2)                             |
  |                                                                     |
  +---------------------------------------------------------------------+
  |  PARALLEL  (side by side; SAME TEMPERATURE DIFFERENCE across both)  |
  |                                                                     |
  |      H = H1 + H2          1/R = 1/R1 + 1/R2                         |
  |                                                                     |
  |                     K1 A1  +  K2 A2                                 |
  |          K_eq  =  ----------------------                            |
  |                        A1  +  A2                                    |
  |                                                                     |
  |      If A1 = A2 :   K_eq = ( K1 + K2 ) / 2                          |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The electrical analogy (use it, it never fails)

```
  +-------------------------+---------------------------------+
  |  ELECTRICITY            |  HEAT                           |
  +-------------------------+---------------------------------+
  |  current I              |  heat current H = Q/t           |
  |  potential difference V |  temperature difference dT      |
  |  resistance R           |  thermal resistance L/(K A)     |
  |  I = V / R              |  H = dT / R                     |
  |  series R1 + R2         |  series R1 + R2                 |
  |  parallel 1/R1 + 1/R2   |  parallel 1/R1 + 1/R2           |
  +-------------------------+---------------------------------+
```

## Conductivity values

```
  Silver ~420  >  Copper ~385  >  Aluminium ~205  >  Steel ~50
    >  Glass ~0.8  >  Water ~0.6  >  Wood ~0.05  >  Air ~0.024

  BEST cheap insulator = TRAPPED STILL AIR
  (wool, cotton, two thin blankets, a thermos, fur, snow)
```

| Formula | When to use |
|---|---|
| `H = K A dT / L` | rate of heat flow through a rod, wall or window |
| `R = L/(K A)` | ANY compound-slab problem — convert first, then add |
| series: `R1 + R2` | slabs stacked face to face |
| parallel: `K_eq=(K1A1+K2A2)/(A1+A2)` | slabs side by side |
| junction-temperature formula | "find the temperature at the interface" |

---

# 10. CONVECTION  (facts, not formulas)

```
  +---------------------------------------------------------------------+
  |  CONVECTION = heat transfer by the BULK MOVEMENT of the fluid.      |
  |  Only in fluids. Never in solids. Never in a vacuum.                |
  |                                                                     |
  |  NATURAL (free)  - driven by gravity + density difference           |
  |                    boiling water, sea/land breeze, trade winds,     |
  |                    chimney draught, ventilator near the ceiling     |
  |                                                                     |
  |  FORCED          - driven by a pump, fan or blower                  |
  |                    ceiling fan, car radiator, hair dryer,           |
  |                    blood circulation                                |
  |                                                                     |
  |  SEA BREEZE  = DAY, from SEA to LAND   (land heats faster)          |
  |  LAND BREEZE = NIGHT, from LAND to SEA (land cools faster)          |
  |  Both happen because WATER HAS A HIGH SPECIFIC HEAT.                |
  +---------------------------------------------------------------------+
```

---

# 11. RADIATION — DEFINITIONS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     r  +  a  +  t  =  1        (reflected + absorbed + transmitted) |
  |                                                                     |
  |  PERFECTLY BLACK BODY:   a = 1 ,  r = 0 ,  t = 0 ,  e = 1           |
  |                                                                     |
  |  ABSORPTIVE POWER a =  energy absorbed / energy incident            |
  |                     -> a pure RATIO, NO UNIT                        |
  |                                                                     |
  |  EMISSIVE POWER e   =  energy emitted per unit AREA per unit TIME   |
  |                     -> UNIT  W m^-2 ,  dimensions [ M T^-3 ]        |
  |                                                                     |
  |  EMISSIVITY e       =  (emissive power of the body)                 |
  |                        ------------------------------------         |
  |                        (emissive power of a black body,             |
  |                         same temperature)                           |
  |                     -> a RATIO between 0 and 1                      |
  +---------------------------------------------------------------------+
```

---

# 12. KIRCHHOFF'S LAW

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                   e                                                 |
  |                 -----  =  E     (the same for ALL bodies at a       |
  |                   a              given temperature and wavelength)  |
  |                                                                     |
  |   E = emissive power of a PERFECTLY BLACK BODY at that temperature  |
  |                                                                     |
  |   IN WORDS:   A GOOD ABSORBER IS A GOOD EMITTER.                    |
  |                                                                     |
  |   PROOF IN ONE LINE: at thermal equilibrium inside a black          |
  |   enclosure,  energy absorbed = energy emitted,  so  aE = e.        |
  |                                                                     |
  |   APPLICATIONS: blackened vessel bottoms, polished vessel sides,    |
  |   silvered thermos flask, white clothes in summer, the sodium       |
  |   vapour experiment, and THE FRAUNHOFER LINES in the solar          |
  |   spectrum.                                                         |
  +---------------------------------------------------------------------+
```

---

# 13. STEFAN-BOLTZMANN LAW

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   BLACK BODY, per unit area:        E  =  sigma T^4                 |
  |                                                                     |
  |   ANY body, total power:            P  =  e sigma A T^4             |
  |                                                                     |
  |   NET loss in surroundings at Ts:                                   |
  |                                                                     |
  |          P(net)  =  e sigma A ( T^4  -  Ts^4 )                      |
  |                                                                     |
  |   sigma = 5.67 x 10^-8  W m^-2 K^-4                                 |
  |   dimensions of sigma : [ M T^-3 K^-4 ]                             |
  |                                                                     |
  |   *** T AND Ts IN KELVIN. ALWAYS. ***                               |
  +---------------------------------------------------------------------+
```

## Ready-made ratio results

```
  +-----------------------------------+---------------------------------+
  |  Same body, two temperatures      |  E2/E1 = ( T2/T1 )^4            |
  |  Two spheres, radii and temps     |  P2/P1 = (r2/r1)^2 (T2/T1)^4    |
  |  Double the absolute temperature  |  16 times the energy            |
  |  Triple the absolute temperature  |  81 times the energy            |
  +-----------------------------------+---------------------------------+
```

---

# 14. NEWTON'S LAW OF COOLING

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     dQ                                    dT                        |
  |   - ---- = K ( T - Ts )     and         - ---- = k ( T - Ts )       |
  |     dt                                    dt                        |
  |                                                                     |
  |   VALID ONLY FOR SMALL EXCESS TEMPERATURE (about 30 K or less)      |
  |                                                                     |
  |   SOLVED FORM:   T  =  Ts  +  ( T0 - Ts ) e^( - k t )               |
  |                                                                     |
  |   STRAIGHT-LINE FORM:   log_e ( T - Ts )  =  - k t  +  constant     |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |   *** THE FORM YOU ACTUALLY USE IN PROBLEMS ***                     |
  |                                                                     |
  |      T1  -  T2          [   T1 + T2            ]                    |
  |     -----------  =  k   [  -----------   -  Ts ]                    |
  |          t              [       2              ]                    |
  |                                                                     |
  |   USE THE AVERAGE OF THE TWO TEMPERATURES, NOT THE STARTING ONE.    |
  +---------------------------------------------------------------------+
  |                                                                     |
  |   DERIVED FROM STEFAN'S LAW:                                        |
  |       put T = Ts + small excess, expand ( 1 + x )^4 ~ 1 + 4x ,      |
  |       get   T^4 - Ts^4  ~  4 Ts^3 ( T - Ts )                        |
  |       so    rate of loss  =  4 e sigma A Ts^3 ( T - Ts )            |
  |                           =  constant x ( T - Ts )                  |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| average-temperature form | "cools from A to B in t minutes; find the next stage" |
| `T = Ts + (T0-Ts)e^(-kt)` | asked for the temperature at any time t |
| `log(T-Ts)` vs `t` straight line | graph / experiment questions |
| `4 e sigma A Ts^3` | "derive Newton's law from Stefan's law" |

---

# 15. WIEN'S DISPLACEMENT LAW

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |          lambda_m  x  T   =   b   =  2.9 x 10^-3  m K               |
  |                                                                     |
  |   HOTTER -> SHORTER peak wavelength -> bluer                        |
  |   COOLER -> LONGER  peak wavelength -> redder                       |
  |                                                                     |
  |   T IN KELVIN.                                                      |
  +---------------------------------------------------------------------+
```

```
  +-----------------------+-------------+---------------------+
  |  BODY                 |  T (K)      |  lambda_m           |
  +-----------------------+-------------+---------------------+
  |  The Sun's surface    |   5800      |  500 nm  (visible)  |
  |  A light-bulb filament|   2500      |  1.16 micrometre    |
  |  The human body       |    310      |  9.4 micrometre     |
  |  The Earth's surface  |    288      |  10 micrometre      |
  +-----------------------+-------------+---------------------+

  Both the Earth and your body radiate INFRARED, not light.
```

## Reading the black-body spectrum graph

```
  1. Peak moves LEFT as T rises      -> WIEN
  2. Whole curve rises as T rises
  3. AREA under the curve = sigma T^4 -> STEFAN
  4. Energy is emitted at EVERY wavelength, but not equally
```

---

# 16. SOLAR CONSTANT AND THE SUN'S TEMPERATURE

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   SOLAR CONSTANT S = 1.388 x 10^3 W/m^2 = 1.94 cal cm^-2 min^-1     |
  |                                                                     |
  |   From  4 pi R^2 sigma T^4  =  4 pi r^2 S :                         |
  |                                                                     |
  |                     S  x  r^2                                       |
  |            T^4  =  ------------                                     |
  |                    sigma x R^2                                      |
  |                                                                     |
  |   R = radius of the Sun    = 7.0 x 10^8 m                           |
  |   r = Earth-Sun distance   = 1.5 x 10^11 m                          |
  |                                                                     |
  |   Gives T = about 5800 K.                                           |
  +---------------------------------------------------------------------+
```

---

# 17. THE GREENHOUSE EFFECT  (facts)

```
  +---------------------------------------------------------------------+
  |  Short-wavelength SUNLIGHT gets IN through the atmosphere.          |
  |  The warm ground re-radiates LONG-wavelength INFRARED.              |
  |  CO2, H2O vapour, CH4, N2O, O3 and CFCs ABSORB that infrared and    |
  |  send part of it back down. The surface stays warmer.               |
  |                                                                     |
  |  Without it:  Earth would average about -18 degC (255 K)            |
  |  With it   :  Earth averages about +15 degC (288 K)                 |
  |  Worth about 33 degC - it is what makes life possible.              |
  |                                                                     |
  |  The ENHANCED effect (extra CO2 from fossil fuels) = GLOBAL WARMING |
  |                                                                     |
  |  DO NOT CONFUSE with ozone depletion (that is about UV getting IN). |
  +---------------------------------------------------------------------+
```

---

# 18. CONSTANTS TABLE — ONE PLACE FOR ALL THE NUMBERS

```
  +----------------------------------+--------------------------------+
  |  Specific heat of water          |  4186 J/kg/K  = 1 cal/g/degC   |
  |  Specific heat of ice            |  2100 J/kg/K  = 0.5 cal/g/degC |
  |  Specific heat of steam          |  2010 J/kg/K                   |
  |  Latent heat of fusion (ice)     |  3.33 x 10^5 J/kg = 80 cal/g   |
  |  Latent heat of vaporisation     |  22.6 x 10^5 J/kg = 540 cal/g  |
  |  1 calorie                       |  4.186 J                       |
  |  Stefan's constant sigma         |  5.67 x 10^-8 W m^-2 K^-4      |
  |  Wien's constant b               |  2.9 x 10^-3 m K               |
  |  Solar constant S                |  1.388 x 10^3 W/m^2            |
  |  Gas constant R                  |  8.314 J mol^-1 K^-1           |
  |  gamma of any gas                |  1/273 per degC                |
  |  Max density of water            |  1000 kg/m^3 at 4 degC         |
  |  Density of ice                  |  917 kg/m^3                    |
  |  Triple point of water           |  273.16 K , 0.61 kPa           |
  |  alpha of steel                  |  1.2 x 10^-5 /K                |
  |  Y of steel                      |  2.0 x 10^11 N/m^2             |
  +----------------------------------+--------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+---------------------------------------------------------------+
  |  1 |   C / 5  =  ( F - 32 ) / 9        and     K = C + 273          |
  +----+---------------------------------------------------------------+
  |  2 |   dL  =  alpha L dT                                           |
  +----+---------------------------------------------------------------+
  |  3 |   beta = 2 alpha        gamma = 3 alpha                       |
  +----+---------------------------------------------------------------+
  |  4 |   thermal stress  =  Y alpha dT                               |
  +----+---------------------------------------------------------------+
  |  5 |   gamma(real) = gamma(apparent) + gamma(vessel)               |
  +----+---------------------------------------------------------------+
  |  6 |   Q  =  m c dT                    (temperature CHANGES)       |
  +----+---------------------------------------------------------------+
  |  7 |   Q  =  m L                       (state CHANGES)             |
  +----+---------------------------------------------------------------+
  |  8 |   HEAT LOST  =  HEAT GAINED                                   |
  +----+---------------------------------------------------------------+
  |  9 |   H  =  K A ( T1 - T2 ) / L        and   R = L / (K A)        |
  +----+---------------------------------------------------------------+
  | 10 |   E  =  sigma T^4    ;    net = e sigma A ( T^4 - Ts^4 )      |
  +----+---------------------------------------------------------------+
  | 11 |   (T1 - T2)/t  =  k [ (T1 + T2)/2  -  Ts ]                    |
  +----+---------------------------------------------------------------+
  | 12 |   lambda_m T  =  2.9 x 10^-3 m K                              |
  +----+---------------------------------------------------------------+
```

**And the four numbers:** `4186` · `3.33 x 10^5` · `22.6 x 10^5` ·
`5.67 x 10^-8`.
