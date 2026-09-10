# Units and Measurements — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 1. BASICS

```
  Measurement            =  number  x  unit

  Same quantity, two units:      n1 x u1  =  n2 x u2

  Plane angle  theta     =  arc / radius              -> radian (rad)

  Solid angle  omega     =  area / (radius)^2         -> steradian (sr)

  1 radian               =  57 deg 17 min 45 sec   (about 57.3 degrees)

  1 second of arc        =  4.85 x 10^-6  radian

  1 minute of arc        =  2.909 x 10^-4 radian

  1 degree               =  1.745 x 10^-2 radian

  Maximum plane angle    =  2 pi rad          Maximum solid angle = 4 pi sr
```

> **MICRO-EXAMPLE (n1 u1 = n2 u2):** a length reads 250 in some unit.
> The unit is made 5 times bigger. New number = 250 / 5 = **50**.
> Bigger unit, smaller number. Always.

> **MICRO-EXAMPLE (angle):** arc 5 cm on a circle of radius 20 cm.
> theta = 5/20 = **0.25 rad** = 0.25 x 57.3 = **14.3 degree**.

> **MICRO-EXAMPLE (solid angle):** area 2 m^2 on a sphere of radius 4 m.
> omega = 2 / 4^2 = 2/16 = **0.125 sr**.

---

# 2. LARGE AND SMALL UNITS

```
  +----------------------+------------------------------+
  |  1 astronomical unit |  1.496 x 10^11  m            |
  |  1 light year        |  9.46  x 10^15  m            |
  |  1 parsec            |  3.08  x 10^16  m            |
  |                      |  = 3.26 light years          |
  |                      |  = 2.06 x 10^5 AU            |
  |  1 angstrom (A)      |  10^-10  m                   |
  |  1 fermi (fm)        |  10^-15  m                   |
  |  1 atomic mass unit  |  1.66 x 10^-27  kg           |
  |  1 barn              |  10^-28  m^2                 |
  +----------------------+------------------------------+
```

## More length units that turn up in objective papers

```
  +----------------------+------------------------------+
  |  1 micron  (mu m)    |  10^-6   m                   |
  |  1 nanometre (nm)    |  10^-9   m                   |
  |  1 X-ray unit        |  10^-13  m                   |
  |  1 light second      |  3 x 10^8  m                 |
  |  1 light minute      |  1.8 x 10^10 m               |
  |  1 nautical mile     |  1852 m                      |
  |  1 mile              |  1.609 km                    |
  |  1 inch              |  2.54 cm                     |
  |  1 foot              |  30.48 cm                    |
  +----------------------+------------------------------+
```

## Mass and time units

```
  +----------------------+------------------------------+
  |  1 quintal           |  100 kg                      |
  |  1 metric tonne      |  1000 kg                     |
  |  1 pound             |  0.4536 kg                   |
  |  1 slug              |  14.59 kg                    |
  |  1 atomic mass unit  |  1.66 x 10^-27 kg            |
  |  1 solar mass        |  2 x 10^30 kg                |
  |  1 chandrasekhar     |  1.4 solar masses            |
  |     limit            |                              |
  +----------------------+------------------------------+
  |  1 shake             |  10^-8 s                     |
  |  1 solar day         |  86 400 s                    |
  |  1 lunar month       |  27.3 days                   |
  |  1 year              |  3.15 x 10^7 s  (~ pi x 10^7)|
  +----------------------+------------------------------+
```

> **MICRO-EXAMPLE:** a star is 8.5 pc away.
> In light years: 8.5 x 3.26 = **27.7 ly**.
> In metres: 8.5 x 3.08 x 10^16 = **2.62 x 10^17 m**.

---

# 3. DISTANCE MEASUREMENT

```
                       b
  Parallax:      D = -------            (theta in RADIANS)
                     theta


  Angular size:  d = D x alpha          (alpha in RADIANS)


                            1 AU
  Parsec definition:  1 pc = ---------
                            1 arc-second


                                          1
  Annual parallax:   D in parsec  =  ------------------
                                     theta in arc-sec


                                v x t
  Reflection method:      d = ---------      RADAR / LIDAR: v = 3 x 10^8 m/s
                                  2          SONAR        : v = 1450 m/s


                          volume of the liquid used
  Molecular size:   t = ------------------------------
                             area of the film
```

> **MICRO-EXAMPLE (parallax):** b = 1.276 x 10^7 m, theta = 1 deg 54' = 1.9 deg.
> theta = 1.9 x 1.745 x 10^-2 = 3.316 x 10^-2 rad.
> D = 1.276 x 10^7 / 3.316 x 10^-2 = **3.85 x 10^8 m** (the Moon).

> **MICRO-EXAMPLE (angular diameter):** alpha = 1920" = 1920 x 4.85 x 10^-6
> = 9.312 x 10^-3 rad. With D = 3.84 x 10^8 m,
> d = 3.84 x 10^8 x 9.312 x 10^-3 = **3.58 x 10^6 m**.

> **MICRO-EXAMPLE (radar):** echo after 7 min = 420 s.
> d = (3 x 10^8 x 420) / 2 = **6.3 x 10^10 m**.

> **THE ONE TRAP:** theta must be in RADIANS, and the reflection answer must
> be HALVED.

---

# 4. ERRORS

```
                        a1 + a2 + ... + an
  Mean value      =   ---------------------
                                n

  Absolute error  =   | a_mean  -  ai |          (always positive)

                        sum of all absolute errors
  Mean absolute   =   ------------------------------
  error                            n

                        mean absolute error
  Relative error  =   -----------------------
                            mean value

  Percentage      =   relative error  x  100
  error

  RESULT WRITTEN AS:     a  =  a_mean  ±  (mean absolute error)
```

## Least count formulae

```
  VERNIER      LC  =  1 main scale division  -  1 vernier scale division

                                 1 MSD
               (short cut)  =  ---------   when n vernier divisions cover
                                  n        (n - 1) main scale divisions


  SCREW GAUGE                    pitch
  SPHEROMETER  LC  =  --------------------------------
                       number of circular divisions


                        distance moved on the main scale
               pitch = ----------------------------------
                            number of full rotations


  READING      =  main scale reading  +  ( coinciding division x LC )

  CORRECTED READING  =  observed reading  -  zero error
                        ( zero correction = - zero error )
```

> **MICRO-EXAMPLE (mean error):** readings 0.39, 0.38, 0.40, 0.41, 0.42 mm.
> Mean = 2.00/5 = 0.400. Absolute errors 0.010, 0.020, 0.000, 0.010, 0.020,
> sum 0.060, mean 0.012. Relative = 0.012/0.400 = 0.030 = **3 %**.
> Result: **d = 0.400 ± 0.012 mm**.

> **MICRO-EXAMPLE (vernier LC):** 20 VSD = 19 MSD and 1 MSD = 1 mm.
> LC = 1 mm / 20 = **0.05 mm**.

> **MICRO-EXAMPLE (screw gauge LC):** screw moves 3 mm in 6 rotations, so
> pitch = 0.5 mm; with 100 circular divisions, LC = 0.5/100 = **0.005 mm**.

---

# 5. COMBINATION OF ERRORS  *** memorise these three ***

```
  +-----------------------------+----------------------------------------+
  |  OPERATION                  |  ERROR RULE                            |
  +-----------------------------+----------------------------------------+
  |                             |                                        |
  |   Z = A + B   or  A - B     |   dZ  =  dA  +  dB                     |
  |                             |   (ABSOLUTE errors add)                |
  |                             |                                        |
  +-----------------------------+----------------------------------------+
  |                             |     dZ       dA       dB               |
  |   Z = A x B   or  A / B     |    ---- =  ---- +  ----                |
  |                             |      Z        A        B               |
  |                             |   (RELATIVE errors add)                |
  +-----------------------------+----------------------------------------+
  |            A^p B^q          |     dZ       dA       dB       dC      |
  |   Z  =  -----------         |    ---- = p ---- + q ---- + r ----     |
  |              C^r            |      Z        A        B        C      |
  |                             |   (multiply by the POWER)              |
  +-----------------------------+----------------------------------------+

  ALWAYS a PLUS sign. Never a minus.
  A square root counts as power 1/2.
```

## Ready-made results worth knowing

```
  +-------------------------+---------------------+------------------------+
  |  QUANTITY               |  FORMULA            |  MAX % ERROR           |
  +-------------------------+---------------------+------------------------+
  |  Area of a circle       |  A = pi r^2         |  2 (dr / r)            |
  |  Volume of a sphere     |  V = (4/3) pi r^3   |  3 (dr / r)            |
  |  Density from a cube    |  rho = M / L^3      |  dM/M  +  3 (dL/L)     |
  |  g from a pendulum      |  g = 4 pi^2 l / T^2 |  dl/l  +  2 (dT/T)     |
  |  Resistance             |  R = V / I          |  dV/V  +  dI/I         |
  |  Kinetic energy         |  E = (1/2) m v^2    |  dm/m  +  2 (dv/v)     |
  +-------------------------+---------------------+------------------------+
```

## More ready-made results (lab experiments love these)

```
  +-------------------------+----------------------+-----------------------+
  |  QUANTITY               |  FORMULA             |  MAX % ERROR          |
  +-------------------------+----------------------+-----------------------+
  |  Speed                  |  v = d / t           |  dd/d  +  dt/t        |
  |  Momentum               |  p = m v             |  dm/m  +  dv/v        |
  |  Volume of a cylinder   |  V = pi r^2 h        |  2(dr/r)  +  dh/h     |
  |  Time period of a       |  T = 2 pi sqrt(l/g)  |  (1/2)(dl/l)          |
  |    pendulum             |                      |   + (1/2)(dg/g)       |
  |  Speed from  v=sqrt(2gh)|  v = sqrt(2 g h)     |  (1/2)(dg/g)          |
  |                         |                      |   + (1/2)(dh/h)       |
  |  Young's modulus        |  Y = 4 F L /          |  dF/F + dL/L          |
  |                         |      (pi d^2 e)      |   + 2(dd/d) + de/e    |
  |  Surface tension by     |  S = r h rho g / 2   |  dr/r  +  dh/h        |
  |    capillary rise       |                      |                       |
  |  Resistivity of a wire  |  rho = pi r^2 R / L  |  2(dr/r) + dR/R       |
  |                         |                      |   + dL/L              |
  |  Power dissipated       |  P = V^2 / R         |  2(dV/V)  +  dR/R     |
  |  Focal length of a lens |  f = u v / (u + v)   |  du/u + dv/v          |
  |                         |                      |   + (du+dv)/(u+v)     |
  +-------------------------+----------------------+-----------------------+
```

> **MICRO-EXAMPLE (product):** V = 100 ± 5 V, I = 10 ± 0.2 A.
> dR/R = 5/100 + 0.2/10 = 0.05 + 0.02 = 0.07 = **7 %**.
> R = 10 ohm, so dR = 0.7 and **R = 10.0 ± 0.7 ohm**.

> **MICRO-EXAMPLE (difference):** A = 10.0 ± 0.1, B = 8.0 ± 0.1.
> Z = 2.0 ± 0.2, which is **10 %** even though A and B were each good to 1 %.
> Subtracting two close numbers destroys accuracy.

> **MICRO-EXAMPLE (square root in the denominator):**
> X = a^2 b^3 / (c sqrt(d)) with errors 1, 2, 3, 4 %.
> 2(1) + 3(2) + 1(3) + 0.5(4) = 2 + 6 + 3 + 2 = **13 %**.

> **MICRO-EXAMPLE (pendulum):** dl/l = 0.5 %, dT/T = 1.11 %.
> dg/g = 0.5 + 2(1.11) = **2.72 %**.

---

# 6. SIGNIFICANT FIGURES

```
  +------------------------------+--------------------------------------+
  |  Addition / Subtraction      |  keep the FEWEST DECIMAL PLACES      |
  |  Multiplication / Division   |  keep the FEWEST SIGNIFICANT FIGURES |
  +------------------------------+--------------------------------------+
  |  Dropped digit  >  5         |  round UP                            |
  |  Dropped digit  <  5         |  drop it                             |
  |  Dropped digit  =  5 exactly |  make the preceding digit EVEN       |
  +------------------------------+--------------------------------------+
```

## Counting rules in one box

```
  COUNT      all non-zero digits
  COUNT      zeros trapped BETWEEN non-zero digits          2004  -> 4
  COUNT      trailing zeros IF a decimal point is present   2.500 -> 4
  IGNORE     leading zeros                                  0.0025-> 2
  IGNORE     the power of ten in  a x 10^b                  6.02x10^23 -> 3
  INFINITE   exact numbers and counted numbers, and pi, 2, 1/2
  AMBIGUOUS  trailing zeros with NO decimal point  ->  use 5 x 10^2 form

  CHANGING THE UNIT NEVER CHANGES THE COUNT:
      2.308 cm = 23.08 mm = 0.02308 m       all have 4 significant figures
```

> **MICRO-EXAMPLE (addition):** 436.32 + 227.2 + 0.301 = 663.821.
> 227.2 has the fewest DECIMAL PLACES (1), so the answer is **663.8**.

> **MICRO-EXAMPLE (subtraction):** 12.9 - 7.06 = 5.84 -> **5.8**
> (decimal-place rule, not the significant-figure rule).

> **MICRO-EXAMPLE (multiplication):** 4.237 x 2.51 = 10.63487.
> 2.51 has the fewest SIGNIFICANT FIGURES (3), so the answer is **10.6**.

> **MICRO-EXAMPLE (division):** 5.74 g / 1.2 cm^3 = 4.783...
> 1.2 has 2 s.f., so the density is **4.8 g/cm^3**.

> **MICRO-EXAMPLE (rounding):** 2.745 -> **2.74** and 2.735 -> **2.74**.
> Both land on the even digit 4.

---

# 7. UNIT CONVERSION USING DIMENSIONS

```
                    +-      -+ a    +-      -+ b    +-      -+ c
                    |   M1   |      |   L1   |      |   T1   |
      n2   =   n1 x | ------ |   x  | ------ |   x  | ------ |
                    |   M2   |      |   L2   |      |   T2   |
                    +-      -+      +-      -+      +-      -+

  where  [ M^a L^b T^c ]  is the dimensional formula of the quantity.
```

## Standard conversions

```
  1 newton   =  10^5  dyne
  1 joule    =  10^7  erg
  1 pascal   =  10    dyne per cm^2
  1 watt     =  10^7  erg per second
```

## Conversions worth memorising outright

```
  1 dyne       =  10^-5  N                1 erg       =  10^-7 J
  1 kgf        =  9.8    N                1 gf        =  980 dyne
  1 kWh        =  3.6 x 10^6  J           1 hp        =  746 W
  1 calorie    =  4.186  J                1 eV        =  1.6 x 10^-19 J
  1 atm        =  1.013 x 10^5 Pa         1 bar       =  10^5 Pa
  1 atm        =  76 cm of Hg             1 torr      =  133 Pa
  1 litre      =  10^-3 m^3               1 amu       =  931.5 MeV
  1 cal/(g degC) = 4186 J/(kg K)
  G  =  6.67 x 10^-11 SI  =  6.67 x 10^-8 CGS
```

> **MICRO-EXAMPLE (SI to CGS):** 1 J. Energy = [M L^2 T^-2].
> n2 = 1 x (10^3)^1 x (10^2)^2 = 10^3 x 10^4 = **10^7 erg**.

> **MICRO-EXAMPLE (CGS to SI, the same sum backwards):** 1 erg.
> n2 = 1 x (10^-3)^1 x (10^-2)^2 = 10^-3 x 10^-4 = **10^-7 J**. Consistent.

> **MICRO-EXAMPLE (a new system):** unit of mass 100 g, length 10 cm,
> time 1 minute. For energy, n2 = 1 x 10 x 10^2 x (1/60)^-2
> = 10 x 100 x 3600 = **3.6 x 10^6 new units per joule**.

> **THE ONE TRAP:** the ratio is always OLD unit / NEW unit. Sanity-check with
> something you know: a kg is bigger than a g, so the NUMBER must grow.

---

# 8. MASTER DIMENSIONAL FORMULA TABLE  ***

## Mechanics

```
  +----------------------------+---------------------+--------------------+
  |  QUANTITY                  |  DIMENSIONS         |  SI UNIT           |
  +----------------------------+---------------------+--------------------+
  |  Area                      |  [ L^2 ]            |  m^2               |
  |  Volume                    |  [ L^3 ]            |  m^3               |
  |  Density                   |  [ M L^-3 ]         |  kg / m^3          |
  |  Velocity                  |  [ L T^-1 ]         |  m / s             |
  |  Acceleration              |  [ L T^-2 ]         |  m / s^2           |
  |  Force                     |  [ M L T^-2 ]       |  newton (N)        |
  |  Momentum                  |  [ M L T^-1 ]       |  kg m / s          |
  |  Impulse                   |  [ M L T^-1 ]       |  N s               |
  |  Work / Energy             |  [ M L^2 T^-2 ]     |  joule (J)         |
  |  Power                     |  [ M L^2 T^-3 ]     |  watt (W)          |
  |  Pressure / Stress         |  [ M L^-1 T^-2 ]    |  pascal (Pa)       |
  |  Young's modulus           |  [ M L^-1 T^-2 ]    |  Pa                |
  |  Surface tension           |  [ M T^-2 ]         |  N / m             |
  |  Coefficient of viscosity  |  [ M L^-1 T^-1 ]    |  Pa s              |
  |  Torque                    |  [ M L^2 T^-2 ]     |  N m               |
  |  Angular velocity          |  [ T^-1 ]           |  rad / s           |
  |  Angular momentum          |  [ M L^2 T^-1 ]     |  kg m^2 / s        |
  |  Moment of inertia         |  [ M L^2 ]          |  kg m^2            |
  |  Frequency                 |  [ T^-1 ]           |  hertz (Hz)        |
  |  Gravitational constant G  |  [ M^-1 L^3 T^-2 ]  |  N m^2 / kg^2      |
  |  Force constant k          |  [ M T^-2 ]         |  N / m             |
  +----------------------------+---------------------+--------------------+
```

## Mechanics, part 2 (the ones students forget)

```
  +----------------------------+---------------------+--------------------+
  |  QUANTITY                  |  DIMENSIONS         |  SI UNIT           |
  +----------------------------+---------------------+--------------------+
  |  Displacement / wavelength |  [ L ]              |  m                 |
  |  Radius of gyration        |  [ L ]              |  m                 |
  |  Time period               |  [ T ]              |  s                 |
  |  Weight                    |  [ M L T^-2 ]       |  N                 |
  |  Thrust / Tension          |  [ M L T^-2 ]       |  N                 |
  |  Linear mass density       |  [ M L^-1 ]         |  kg / m            |
  |  Areal mass density        |  [ M L^-2 ]         |  kg / m^2          |
  |  Specific weight           |  [ M L^-2 T^-2 ]    |  N / m^3           |
  |  Angular acceleration      |  [ T^-2 ]           |  rad / s^2         |
  |  Angular frequency         |  [ T^-1 ]           |  rad / s           |
  |  Angular impulse           |  [ M L^2 T^-1 ]     |  N m s             |
  |  Couple                    |  [ M L^2 T^-2 ]     |  N m               |
  |  Volume flow rate          |  [ L^3 T^-1 ]       |  m^3 / s           |
  |  Mass flow rate            |  [ M T^-1 ]         |  kg / s            |
  |  Velocity gradient         |  [ T^-1 ]           |  s^-1              |
  |  Pressure gradient         |  [ M L^-2 T^-2 ]    |  Pa / m            |
  |  Bulk modulus              |  [ M L^-1 T^-2 ]    |  Pa                |
  |  Modulus of rigidity       |  [ M L^-1 T^-2 ]    |  Pa                |
  |  Compressibility           |  [ M^-1 L T^2 ]     |  Pa^-1             |
  |  Energy density            |  [ M L^-1 T^-2 ]    |  J / m^3           |
  |  Surface energy per area   |  [ M T^-2 ]         |  J / m^2           |
  |  Escape velocity           |  [ L T^-1 ]         |  m / s             |
  |  Gravitational potential   |  [ L^2 T^-2 ]       |  J / kg            |
  |  Gravitational field       |  [ L T^-2 ]         |  N / kg            |
  |  Intensity of sound or     |  [ M T^-3 ]         |  W / m^2           |
  |    radiation               |                     |                    |
  |  Solar constant            |  [ M T^-3 ]         |  W / m^2           |
  |  Power of a lens           |  [ L^-1 ]           |  dioptre           |
  |  Wave number               |  [ L^-1 ]           |  m^-1              |
  +----------------------------+---------------------+--------------------+
```

## Heat

```
  +----------------------------+----------------------------+-------------+
  |  Heat / Internal energy    |  [ M L^2 T^-2 ]            |  J          |
  |  Specific heat capacity    |  [ L^2 T^-2 K^-1 ]         |  J/(kg K)   |
  |  Latent heat               |  [ L^2 T^-2 ]              |  J / kg     |
  |  Thermal conductivity      |  [ M L T^-3 K^-1 ]         |  W/(m K)    |
  |  Gas constant R            |  [ M L^2 T^-2 K^-1 mol^-1] |  J/(mol K)  |
  |  Boltzmann constant kB     |  [ M L^2 T^-2 K^-1 ]       |  J / K      |
  |  Stefan's constant         |  [ M T^-3 K^-4 ]           |  W/(m^2 K^4)|
  +----------------------------+----------------------------+-------------+
```

## Heat, part 2

```
  +----------------------------+----------------------------+-------------+
  |  Temperature               |  [ K ]                     |  K          |
  |  Heat capacity             |  [ M L^2 T^-2 K^-1 ]       |  J / K      |
  |  Entropy                   |  [ M L^2 T^-2 K^-1 ]       |  J / K      |
  |  Molar specific heat       |  [ M L^2 T^-2 K^-1 mol^-1] |  J/(mol K)  |
  |  Coefficient of linear     |  [ K^-1 ]                  |  K^-1       |
  |    / areal / volume        |                            |             |
  |    expansion               |                            |             |
  |  Temperature gradient      |  [ K L^-1 ]                |  K / m      |
  |  Thermal resistance        |  [ M^-1 L^-2 T^3 K ]       |  K / W      |
  |  Wien's constant  b        |  [ L K ]                   |  m K        |
  |  Mechanical equivalent     |  dimensionless             |  none       |
  |    of heat  J              |                            |             |
  |  Avogadro number NA        |  [ mol^-1 ]                |  mol^-1     |
  +----------------------------+----------------------------+-------------+
```

## Electricity and Modern Physics

```
  +----------------------------+----------------------------+-------------+
  |  Charge                    |  [ A T ]                   |  coulomb    |
  |  Potential difference      |  [ M L^2 T^-3 A^-1 ]       |  volt       |
  |  Resistance                |  [ M L^2 T^-3 A^-2 ]       |  ohm        |
  |  Capacitance               |  [ M^-1 L^-2 T^4 A^2 ]     |  farad      |
  |  Magnetic field B          |  [ M T^-2 A^-1 ]           |  tesla      |
  |  Magnetic flux             |  [ M L^2 T^-2 A^-1 ]       |  weber      |
  |  Inductance                |  [ M L^2 T^-2 A^-2 ]       |  henry      |
  |  Planck's constant h       |  [ M L^2 T^-1 ]            |  J s        |
  |  Permittivity  e0          |  [ M^-1 L^-3 T^4 A^2 ]     |  F / m      |
  |  Permeability  u0          |  [ M L T^-2 A^-2 ]         |  H / m      |
  +----------------------------+----------------------------+-------------+
```

## Electricity and Modern Physics, part 2

```
  +----------------------------+----------------------------+-------------+
  |  Electric field E          |  [ M L T^-3 A^-1 ]         |  V / m      |
  |  Electric flux             |  [ M L^3 T^-3 A^-1 ]       |  V m        |
  |  Electric dipole moment    |  [ L T A ]                 |  C m        |
  |  EMF                       |  [ M L^2 T^-3 A^-1 ]       |  volt       |
  |  Current density           |  [ A L^-2 ]                |  A / m^2    |
  |  Resistivity               |  [ M L^3 T^-3 A^-2 ]       |  ohm m      |
  |  Conductivity              |  [ M^-1 L^-3 T^3 A^2 ]     |  S / m      |
  |  Conductance               |  [ M^-1 L^-2 T^3 A^2 ]     |  siemens    |
  |  Magnetic moment           |  [ A L^2 ]                 |  A m^2      |
  |  Magnetising field H       |  [ A L^-1 ]                |  A / m      |
  |  Pole strength             |  [ A L ]                   |  A m        |
  |  Magnetic susceptibility   |  dimensionless             |  none       |
  |  Relative permeability     |  dimensionless             |  none       |
  |  Work function             |  [ M L^2 T^-2 ]            |  J or eV    |
  |  Rydberg constant          |  [ L^-1 ]                  |  m^-1       |
  |  Decay constant / activity |  [ T^-1 ]                  |  s^-1 , Bq  |
  |  Half-life                 |  [ T ]                     |  s          |
  |  Mass defect               |  [ M ]                     |  kg or u    |
  +----------------------------+----------------------------+-------------+
```

## The famous constants, all in one place

```
  +-------------------------------+----------------------------+
  |  CONSTANT                     |  DIMENSIONS                |
  +-------------------------------+----------------------------+
  |  c   speed of light           |  [ L T^-1 ]                |
  |  G   gravitational constant   |  [ M^-1 L^3 T^-2 ]         |
  |  h   Planck's constant        |  [ M L^2 T^-1 ]            |
  |  kB  Boltzmann constant       |  [ M L^2 T^-2 K^-1 ]       |
  |  R   gas constant             |  [ M L^2 T^-2 K^-1 mol^-1] |
  |  sigma  Stefan constant       |  [ M T^-3 K^-4 ]           |
  |  b   Wien constant            |  [ L K ]                   |
  |  e   elementary charge        |  [ A T ]                   |
  |  NA  Avogadro number          |  [ mol^-1 ]                |
  |  F   Faraday constant         |  [ A T mol^-1 ]            |
  |  e0  permittivity of vacuum   |  [ M^-1 L^-3 T^4 A^2 ]     |
  |  u0  permeability of vacuum   |  [ M L T^-2 A^-2 ]         |
  +-------------------------------+----------------------------+

  USEFUL CHECK:   1 / sqrt( u0 e0 )  =  c  =  [ L T^-1 ]
```

## Combinations that are secretly a TIME or a LENGTH

```
  L / R        ->  TIME       (inductor-resistor time constant)
  R C          ->  TIME       (capacitor time constant)
  sqrt( L C )  ->  TIME       (oscillation period of an LC circuit)
  1 / (R C)    ->  FREQUENCY
  h / (m c)    ->  LENGTH     (Compton wavelength)
  h / p        ->  LENGTH     (de Broglie wavelength)
  e^2 / (4 pi e0 r)  ->  ENERGY
  (1/2) e0 E^2  and  B^2 / (2 u0)  ->  ENERGY DENSITY [ M L^-1 T^-2 ]
```

## Dimensionless quantities

```
  angle              solid angle         strain
  Poisson's ratio    refractive index    relative density
  specific gravity   coefficient of friction
  dielectric constant   efficiency      Reynolds number
  all trigonometric ratios
  anything inside sin, cos, tan, e^x, or log
```

## Groups with IDENTICAL dimensions (2-mark question)

```
  +---------------------+-------------------------------------------------+
  |  [ M L^2 T^-2 ]     |  Work , Energy , Torque , Heat , Moment of force|
  |  [ M L^-1 T^-2 ]    |  Pressure , Stress , Young's modulus ,          |
  |                     |  Bulk modulus , Energy density                  |
  |  [ M L T^-1 ]       |  Momentum , Impulse                             |
  |  [ T^-1 ]           |  Frequency , Angular velocity ,                 |
  |                     |  Velocity gradient , Decay constant             |
  |  [ M L^2 T^-1 ]     |  Planck's constant , Angular momentum           |
  |  [ M T^-2 ]         |  Surface tension , Force constant ,             |
  |                     |  Surface energy per unit area                   |
  |  [ L T^-2 ]         |  Acceleration , Gravitational field intensity   |
  |  [ L^2 T^-2 ]       |  Latent heat , Gravitational potential          |
  +---------------------+-------------------------------------------------+
```

---

# THE 12 THINGS TO WRITE ON YOUR PALM

```
   1.  The 7 base units      ->  M M T A K M C
   2.  Force                 ->  [ M L T^-2 ]
   3.  Work  [M L^2 T^-2] ,  Power  [M L^2 T^-3] ,  Pressure [M L^-1 T^-2]
   4.  For  +  and  -        ->  dZ = dA + dB
   5.  For  x  and  /        ->  dZ/Z = p(dA/A) + q(dB/B)   ALL PLUS SIGNS
   6.  Unit conversion       ->  n2 = n1 (M1/M2)^a (L1/L2)^b (T1/T2)^c
   7.  1 parsec = 3.26 ly = 3.08 x 10^16 m
   8.  1 second of arc  =  4.85 x 10^-6 radian
   9.  D = b / theta   and   d = D x alpha    (theta ALWAYS in radians)
  10.  Addition -> fewest DECIMAL PLACES ;
       Multiplication -> fewest SIGNIFICANT FIGURES
  11.  Derive-a-relation recipe: Q = k A^a B^b C^c , compare M , L , T ,
       then say that k comes from experiment
  12.  Dimensional analysis CANNOT find constants, handle sums,
       handle trig / exponential / log functions, or tell a scalar
       from a vector
```

---

# THE FIVE-LINE EMERGENCY SHEET

If you have five minutes before the exam and nothing else in your head:

```
  1.  Force = [ M L T^-2 ]  - build everything else from it.
  2.  Every error term is a PLUS, multiplied by its power.
  3.  theta in RADIANS ,  1" = 4.85 x 10^-6 rad.
  4.  Add -> decimal places.  Multiply -> significant figures.
  5.  Six limitations of dimensional analysis - guaranteed 4 marks.
```
