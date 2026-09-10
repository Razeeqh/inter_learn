# Dual Nature of Radiation and Matter — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
This chapter has fewer than 20 formulas in total. That is why it is worth
finishing properly.

---

# 1. CONSTANTS YOU MUST KNOW BY HEART

```
  +--------------------------------+-------------------------------------+
  |  Planck's constant       h     |  6.63 x 10^-34  J s                 |
  |                                |  (= 4.14 x 10^-15  eV s)            |
  |  h / e                         |  4.14 x 10^-15  V s                 |
  |                                |  <-- the SLOPE of the V0 vs nu line |
  |  h-bar  =  h / (2 pi)          |  1.05 x 10^-34  J s                 |
  |  Charge of electron      e     |  1.6  x 10^-19  C                   |
  |  1 electron volt         eV    |  1.6  x 10^-19  J                   |
  |  Mass of electron        m     |  9.1  x 10^-31  kg                  |
  |  Mass of proton / neutron      |  1.67 x 10^-27  kg                  |
  |  Speed of light          c     |  3    x 10^8    m/s                 |
  |  Boltzmann constant      k     |  1.38 x 10^-23  J/K                 |
  |  h c                           |  1.99 x 10^-25  J m                 |
  |                                |  = 12400  eV.A   <-- the shortcut   |
  |  1 angstrom              A     |  10^-10  m                          |
  +--------------------------------+-------------------------------------+
```

---

# 2. WORK FUNCTION AND THRESHOLD

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     W0  =  h nu0                                                  |
  |                                                                   |
  |                  c              h c                               |
  |     lambda0  =  -----   ,   =  ------                             |
  |                  nu0             W0                               |
  |                                                                   |
  |     SHORTCUT (this saves minutes in the exam):                    |
  |                                                                   |
  |                       12400                12400                  |
  |        W0 (eV)  =  -------------  ,   lambda0(A) = --------       |
  |                    lambda0 (A)                      W0(eV)        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `W0 = h nu0` | given threshold frequency, want work function (or the reverse) |
| `lambda0 = c / nu0` | converting between threshold frequency and threshold wavelength |
| `lambda0 = hc / W0` | given work function in joules, want threshold wavelength |
| `lambda0(A) = 12400 / W0(eV)` | **fastest**: work function in eV -> threshold wavelength in angstrom |
| `W0(eV) = 12400 / lambda0(A)` | **fastest**: threshold wavelength -> work function |

**CONDITION FOR EMISSION** — write it both ways so you never get it backwards:

```
      EMISSION HAPPENS  when      nu  >  nu0        (frequency HIGHER)
                        or        lambda < lambda0  (wavelength SHORTER)
                        or        E  >  W0          (photon energy BIGGER)

      NO EMISSION       when      nu  <  nu0 , however INTENSE the light.
```

---

# 3. PHOTON — ENERGY AND MOMENTUM

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                            h c                                    |
  |     E  =  h nu   =   -----------                                  |
  |                        lambda                                     |
  |                                                                   |
  |                12400                                              |
  |     E(eV)  =  -----------          <-- USE THIS EVERY TIME        |
  |               lambda (A)                                          |
  |                                                                   |
  |             E        h nu           h                             |
  |     p  =  -----  =  -------  =  ----------                        |
  |             c          c          lambda                          |
  |                                                                   |
  |                                  E        h nu                    |
  |     effective mass   m  =  -----  =  --------                     |
  |                             c^2         c^2                       |
  |                                                                   |
  |     REST MASS  =  0        CHARGE  =  0                           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## Number of photons

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     Number of photons emitted per second by a source of power P:  |
  |                                                                   |
  |             P          P lambda                                   |
  |     n  =  ------  =  ------------                                 |
  |            h nu           h c                                     |
  |                                                                   |
  |     Intensity I over an area A:   number per second = I A / (h nu)|
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `E = h nu` | frequency given |
| `E = hc / lambda` | wavelength given, answer wanted in joules |
| `E(eV) = 12400 / lambda(A)` | wavelength given, answer wanted in eV — almost always |
| `p = h / lambda` | momentum of a photon |
| `p = E / c` | photon energy already known |
| `n = P / (h nu)` | "how many photons per second does a 100 W lamp emit?" |

---

# 4. EINSTEIN'S PHOTOELECTRIC EQUATION  *** the heart of the chapter ***

```
  +===================================================================+
  ||                                                                 ||
  ||           h nu   =   W0   +   K_max                             ||
  ||                                                                 ||
  ||   photon      exit fee     leftover energy of the fastest       ||
  ||   energy    (work function)   photoelectron                     ||
  ||                                                                 ||
  +===================================================================+
```

All the useful forms:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   K_max  =  h nu  -  W0                                           |
  |                                                                   |
  |   K_max  =  h ( nu  -  nu0 )                                      |
  |                                                                   |
  |                     +-    1           1     -+                    |
  |   K_max  =  h c  x  |  --------  -  -------- |                    |
  |                     +-  lambda      lambda0 -+                    |
  |                                                                   |
  |                       +-    1           1     -+                  |
  |   K_max(eV) = 12400 x |  --------  -  -------- |   (lambdas in A) |
  |                       +-  lambda      lambda0 -+                  |
  |                                                                   |
  |                  1                                                |
  |   K_max  =  e V0  =  --- m v_max^2                                |
  |                  2                                                |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## The stopping potential line (the graph formula)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |            h              W0            h                         |
  |    V0  =  --- nu    -    ----   =     --- ( nu  -  nu0 )          |
  |            e              e            e                          |
  |                                                                   |
  |    Compare with   y  =  m x  +  c :                               |
  |                                                                   |
  |       SLOPE          =   h / e   =  4.14 x 10^-15  V s            |
  |                          (SAME for every metal -> parallel lines) |
  |       x - INTERCEPT  =   nu0     (threshold frequency)            |
  |       y - INTERCEPT  =  -W0 / e                                   |
  |                                                                   |
  |    If the y-axis is K_max instead of V0, the SLOPE is  h .        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## Maximum velocity of the photoelectrons

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |               2 K_max          2 ( h nu - W0 )        2 e V0      |
  |   v_max = sqrt --------  = sqrt ---------------  = sqrt --------  |
  |                   m                    m                   m      |
  |                                                                   |
  |   SHORTCUT (K_max in eV, answer in m/s):                          |
  |                                                                   |
  |       v_max  =  5.93 x 10^5  x  sqrt( K_max in eV )               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `h nu = W0 + Kmax` | the master equation — start every photoelectric numerical here |
| `Kmax = h(nu - nu0)` | when threshold frequency, not W0, is given |
| `Kmax(eV) = 12400/lambda − 12400/lambda0` | both wavelengths given |
| `eV0 = Kmax` | converting between stopping potential and maximum KE |
| `V0(volt) = Kmax(eV)` numerically | the one-second conversion — no arithmetic needed |
| `vmax = 5.93e5 sqrt(Kmax in eV)` | "find the maximum velocity of the photoelectrons" |
| `slope = h/e` | "the slope of the V0 vs nu graph is ..." |
| Two-wavelength pair of equations | when two stopping potentials are given and W0 or h is wanted |

## The two-wavelength trick (very commonly asked)

```
  Given  (lambda1 , V01)  and  (lambda2 , V02) :

       hc/lambda1  =  W0 + e V01
       hc/lambda2  =  W0 + e V02

  SUBTRACT to eliminate W0 and find h :

               e ( V01  -  V02 )
       h  =  ------------------------
             c ( 1/lambda1 - 1/lambda2 )

  Or use either equation alone to find W0 once h is known.
```

---

# 5. THE FOUR EXPERIMENTAL RESULTS — IN SYMBOLS

```
  +----+-----------------------------+-------------------------------+
  | 1  |  I(saturation)  is          |  frequency and metal fixed    |
  |    |  PROPORTIONAL to intensity  |                               |
  +----+-----------------------------+-------------------------------+
  | 2  |  V0  is INDEPENDENT of      |  V0 depends only on nu and W0 |
  |    |  intensity                  |                               |
  +----+-----------------------------+-------------------------------+
  | 3  |  V0  is a LINEAR function   |  V0 = (h/e)nu - W0/e          |
  |    |  of frequency; zero below   |                               |
  |    |  nu0                        |                               |
  +----+-----------------------------+-------------------------------+
  | 4  |  time lag  <  10^-9 s       |  emission is INSTANTANEOUS    |
  +----+-----------------------------+-------------------------------+
```

---

# 6. de BROGLIE — MATTER WAVES

```
  +===================================================================+
  ||                                                                 ||
  ||                    h            h                               ||
  ||       lambda  =   ---    =   -------                            ||
  ||                    p           m v                              ||
  ||                                                                 ||
  +===================================================================+
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   In terms of KINETIC ENERGY  K :                                 |
  |                                                                   |
  |                     h                                             |
  |     lambda  =  ---------------          ( since p = sqrt(2 m K) ) |
  |                sqrt( 2 m K )                                      |
  |                                                                   |
  |   For a CHARGE q accelerated through V volts  ( K = q V ) :       |
  |                                                                   |
  |                        h                                          |
  |     lambda  =  -------------------                                |
  |                sqrt( 2 m q V )                                    |
  |                                                                   |
  |   For a particle in thermal equilibrium at T  ( K = 3kT/2 ) :     |
  |                                                                   |
  |                        h                                          |
  |     lambda  =  -------------------                                |
  |                sqrt( 3 m k T )                                    |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## The three accelerated-particle shortcuts

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   ELECTRON through V volts :                                      |
  |                                                                   |
  |                    12.27                                          |
  |        lambda  =  ---------  angstrom     ( = 1.227/sqrt(V) nm )  |
  |                    sqrt(V)                                        |
  |                                                                   |
  |   PROTON through V volts :                                        |
  |                                                                   |
  |                    0.286                                          |
  |        lambda  =  ---------  angstrom                             |
  |                    sqrt(V)                                        |
  |                                                                   |
  |   ALPHA PARTICLE through V volts :                                |
  |                                                                   |
  |                    0.101                                          |
  |        lambda  =  ---------  angstrom                             |
  |                    sqrt(V)                                        |
  |                                                                   |
  |   The SAME electron formula works when the KINETIC ENERGY is      |
  |   given in eV:   lambda = 12.27 / sqrt( K in eV )  angstrom       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `lambda = h/(mv)` | mass and speed given |
| `lambda = h/p` | momentum given directly |
| `lambda = h/sqrt(2mK)` | kinetic energy given in joules |
| `lambda = 12.27/sqrt(V)` A | **electron** accelerated through V volts — the exam favourite |
| `lambda = 12.27/sqrt(K in eV)` A | electron with kinetic energy in eV |
| `lambda = 0.286/sqrt(V)` A | proton accelerated through V volts |
| `lambda = 0.101/sqrt(V)` A | alpha particle accelerated through V volts |
| `lambda = h/sqrt(3mkT)` | thermal neutron / gas molecule at temperature T |

## The proportionality rules (for MCQs — answer in 5 seconds)

```
  +-------------------------+------------------------------------------+
  |  IF ... IS THE SAME     |  THEN lambda VARIES AS                   |
  +-------------------------+------------------------------------------+
  |  same MOMENTUM          |  lambda is the SAME for both particles   |
  |  same SPEED             |  lambda  ~  1 / m                        |
  |  same KINETIC ENERGY    |  lambda  ~  1 / sqrt(m)                  |
  |  same ACCELERATING V    |  lambda  ~  1 / sqrt(m q)                |
  |  same TEMPERATURE       |  lambda  ~  1 / sqrt(m)                  |
  +-------------------------+------------------------------------------+

  Also:   lambda  ~  1 / sqrt(V)      -- quadruple V, HALVE lambda
          lambda  ~  1 / sqrt(K)      -- quadruple K, HALVE lambda
```

---

# 7. DAVISSON - GERMER NUMBERS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Target                      NICKEL single crystal               |
  |   Accelerating voltage        V   =  54 volt                      |
  |   Scattering angle of peak    phi =  50 degrees                   |
  |   Bragg (glancing) angle      theta = (180 - 50)/2 = 65 degrees   |
  |   Interplanar spacing         d   =  0.91 angstrom                |
  |                                                                   |
  |   MEASURED (Bragg's law, n = 1):                                  |
  |        lambda = 2 d sin(theta) = 2(0.91) sin 65 = 1.65 A          |
  |                                                                   |
  |   PREDICTED (de Broglie):                                         |
  |        lambda = 12.27 / sqrt(54) = 1.67 A                         |
  |                                                                   |
  |   AGREEMENT  ->  de Broglie's hypothesis CONFIRMED.               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 8. HEISENBERG UNCERTAINTY PRINCIPLE

```
  +-------------------------------------------------------------------+
  |                                       h                           |
  |     (delta x)(delta p)     >=     ---------   =   h-bar / 2       |
  |                                     4 pi                          |
  |                                                                   |
  |                                       h                           |
  |     (delta E)(delta t)     >=     ---------                       |
  |                                     4 pi                          |
  |                                                                   |
  |     h / (4 pi)  =  5.28 x 10^-35  J s                             |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `dx . dp >= h/4pi` | "minimum uncertainty in momentum / position" |
| `dE . dt >= h/4pi` | lifetime of an excited state vs its energy width |

---

# 9. UNIT-CONVERSION CARD (tape this to your desk)

```
  eV  ->  J        multiply by 1.6 x 10^-19
  J   ->  eV       divide   by 1.6 x 10^-19
  A   ->  m        multiply by 10^-10
  nm  ->  A        multiply by 10
  nm  ->  m        multiply by 10^-9

  nu  =  c / lambda            lambda  =  c / nu

  Kmax in eV  ->  V0 in volt   :  the SAME NUMBER. No arithmetic.
  Kmax in eV  ->  v in m/s     :  v = 5.93 x 10^5 x sqrt(Kmax in eV)
```

---

# 10. THE ORDER-OF-MAGNITUDE SANITY CHECK

If your answer is wildly outside these ranges, you made an arithmetic slip.

```
  +-------------------------------------+---------------------------+
  |  Visible photon energy              |  1.8  to  3.1  eV         |
  |  Visible wavelength                 |  4000 to 7000  A          |
  |  Typical work function              |  2  to  6  eV             |
  |  Threshold wavelength of a metal    |  2000 to 6000  A          |
  |  Stopping potential in a problem    |  0.1  to  5  volt         |
  |  Speed of a photoelectron           |  ~ 10^5  to  10^6  m/s    |
  |  de Broglie lambda of an electron   |  ~ 10^-10 m (angstroms)   |
  |  de Broglie lambda of a cricket ball|  ~ 10^-34 m               |
  |  Photoelectric time lag             |  < 10^-9  s               |
  +-------------------------------------+---------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+--------------------------------------------------------------+
  | 1  |   h nu  =  W0  +  K_max            (Einstein's equation)     |
  +----+--------------------------------------------------------------+
  | 2  |   E(eV)  =  12400 / lambda(A)                                |
  +----+--------------------------------------------------------------+
  | 3  |   W0  =  h nu0  =  h c / lambda0                             |
  +----+--------------------------------------------------------------+
  | 4  |   K_max  =  e V0  =  (1/2) m v_max^2                         |
  +----+--------------------------------------------------------------+
  | 5  |   V0  =  (h/e) nu  -  W0/e     slope h/e = 4.14 x 10^-15     |
  +----+--------------------------------------------------------------+
  | 6  |   v_max  =  5.93 x 10^5 x sqrt( K_max in eV )   m/s          |
  +----+--------------------------------------------------------------+
  | 7  |   p(photon)  =  h / lambda  =  E / c                         |
  +----+--------------------------------------------------------------+
  | 8  |   n  =  P / (h nu)             photons per second            |
  +----+--------------------------------------------------------------+
  | 9  |   lambda  =  h / p  =  h / (m v)         (de Broglie)        |
  +----+--------------------------------------------------------------+
  | 10 |   lambda  =  h / sqrt( 2 m K )   =  h / sqrt( 2 m q V )      |
  +----+--------------------------------------------------------------+
  | 11 |   lambda  =  12.27 / sqrt(V)   angstrom   (electron)         |
  +----+--------------------------------------------------------------+
  | 12 |   (delta x)(delta p)  >=  h / (4 pi)                         |
  +----+--------------------------------------------------------------+
```

**If you learn only two:** number 1 and number 2. Between them they solve more
than half of everything ever asked from this chapter.
