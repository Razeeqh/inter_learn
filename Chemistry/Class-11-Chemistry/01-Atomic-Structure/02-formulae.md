# Atomic Structure — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 0. CONSTANTS YOU MUST KNOW BY HEART

```
  +-------------------------------+---------------------------------------+
  |  Planck's constant       h    |  6.626 x 10^-34  J s                  |
  |  Speed of light          c    |  3.0   x 10^8    m/s                  |
  |  Rydberg constant        R    |  109677          cm^-1                |
  |                               |  = 1.097 x 10^7  m^-1                 |
  |  Mass of electron        m    |  9.11  x 10^-31  kg                   |
  |  Mass of proton               |  1.67  x 10^-27  kg                   |
  |  Mass of neutron              |  1.675 x 10^-27  kg                   |
  |  Charge on electron      e    |  1.602 x 10^-19  C                    |
  |  Avogadro's number       N    |  6.022 x 10^23   per mole             |
  |  Coulomb constant  1/4pi eps0 |  9.0   x 10^9    N m^2 / C^2          |
  |  1 electron volt         eV   |  1.602 x 10^-19  J                    |
  |  1 angstrom              A    |  10^-10  m                            |
  |  1 nanometre             nm   |  10^-9   m                            |
  |  1 picometre             pm   |  10^-12  m                            |
  +-------------------------------+---------------------------------------+
```

## The four DERIVED numbers that save the most time

Work these out ONCE, memorise them, and half the arithmetic in this chapter
disappears.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  1.   h c   =  (6.626x10^-34)(3x10^8)  =  1.9878 x 10^-25   J m     |
  |                                                                     |
  |       USE: E = hc/lambda in one division instead of two             |
  |       MICRO-EXAMPLE:  lambda = 400 nm = 4 x 10^-7 m                 |
  |            E = 1.9878x10^-25 / 4x10^-7 = 4.97 x 10^-19 J            |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  2.    h                                                            |
  |      ------  =  1.0546 x 10^-34   J s                               |
  |       2 pi                                                          |
  |                                                                     |
  |       USE: angular momentum = n x this number                       |
  |       MICRO-EXAMPLE:  3rd orbit -> 3 x 1.0546x10^-34                |
  |                                 =  3.16 x 10^-34 kg m^2/s           |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  3.    h                                                            |
  |      ------  =  5.273 x 10^-35   J s                                |
  |       4 pi                                                          |
  |                                                                     |
  |       USE: every Heisenberg question                                |
  |       MICRO-EXAMPLE:  delta x = 10^-10 m , delta p >=               |
  |            5.273x10^-35 / 10^-10 = 5.27 x 10^-25 kg m/s             |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |  4.       h                                                         |
  |       ----------  =  5.79 x 10^-5   m^2/s   (ELECTRON only)         |
  |       4 pi m(e)                                                     |
  |                                                                     |
  |       USE: (delta x)(delta v) >= 5.79 x 10^-5 - one division        |
  |       MICRO-EXAMPLE:  delta x = 10^-10 m                            |
  |            delta v >= 5.79x10^-5 / 10^-10 = 5.79 x 10^5 m/s         |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The three MCQ shortcuts (they are just the constants in disguise)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                  12400                                              |
  |   E (in eV)  =  ---------      lambda in ANGSTROM                   |
  |                  lambda                                             |
  |                                                                     |
  |   or, if you prefer nanometres:  E(eV) = 1240 / lambda(nm)          |
  |                                                                     |
  |   MICRO-EXAMPLE:  lambda = 620 nm  ->  E = 1240/620 = 2.0 eV        |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |                     12.27                                           |
  |   lambda (in A)  =  ---------     V in VOLTS, ELECTRON only         |
  |                     sqrt(V)                                         |
  |                                                                     |
  |   MICRO-EXAMPLE:  V = 400 V  ->  12.27/20 = 0.61 A                  |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |   1 eV per atom   =   96.5   kJ per mole                            |
  |                                                                     |
  |   MICRO-EXAMPLE:  IE of H = 13.6 eV                                 |
  |                          = 13.6 x 96.5 = 1312 kJ/mol                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

> **WHERE 12400 COMES FROM** (so you trust it):
> `E = hc/lambda`. Put `hc = 1.9878 x 10^-25 J m`, divide by
> `1.602 x 10^-19 J/eV` to get eV, and put lambda in angstrom
> (`10^-10 m`): `(1.9878e-25 / 1.602e-19) x 10^10 = 12408`. Round to 12400.

---

# 1. ATOMIC NUMBER AND MASS NUMBER

```
  Atomic number       Z  =  number of protons  =  number of electrons
                                                  (in a neutral atom)

  Mass number         A  =  protons  +  neutrons

  Number of neutrons     =  A  -  Z

  For an ION of charge q:   number of electrons  =  Z  -  q
       example:  Na+  ->  11 - 1  = 10 electrons
                 O2-  ->  8 + 2   = 10 electrons
```

```
  AVERAGE ATOMIC MASS  (needed whenever percentages are given)

         (%1 x A1)  +  (%2 x A2)  +  ...
        ---------------------------------
                      100

  MICRO-EXAMPLE:  Cl is 75 % Cl-35 and 25 % Cl-37
        (75x35 + 25x37)/100  =  (2625 + 925)/100  =  35.5 u
```

| Formula | When to use |
|---------|-------------|
| `neutrons = A - Z` | any "how many neutrons" question |
| `electrons = Z - q` | any ION; remember a minus charge ADDS electrons |
| average mass formula | percentages of isotopes are given |
| `R = 1.2 x 10^-15 x A^(1/3) m` | radius of a NUCLEUS (rare, but asked) |

---

# 2. LIGHT AND ENERGY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   c  =  nu  x  lambda                                                |
  |                                                                      |
  |                    1                                                 |
  |   wave number  =  --------          unit:  cm^-1                     |
  |                   lambda                                             |
  |                                                                      |
  |                                  h c                                 |
  |   E  =  h  nu           E  =  ----------                             |
  |                                lambda                                |
  |                                                                      |
  |   For n quanta:      E  =  n  h  nu                                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `c = nu x lambda` | convert between frequency and wavelength |
| `E = h nu` | energy of ONE photon from its frequency |
| `E = hc / lambda` | energy of ONE photon from its wavelength |
| `wave number = 1 / lambda` | spectroscopy questions, unit cm^-1 |
| `E(total) = n h nu` | "energy of n quanta" |
| `n = E(total) / E(one photon)` | "how many photons" |
| `E(per mole) = E(one photon) x 6.022 x 10^23` | answer wanted in kJ/mol |

```
  MICRO-EXAMPLES - one line each

  frequency of 5800 A light:
        nu = 3x10^8 / 5.8x10^-7  =  5.17 x 10^14 Hz

  wave number of 5800 A light:
        5800 A = 5.8 x 10^-5 cm ,  1/5.8x10^-5  =  1.724 x 10^4 cm^-1

  energy of one 589 nm photon:
        1.9878x10^-25 / 5.89x10^-7  =  3.375 x 10^-19 J  =  2.11 eV

  photons in 1 joule of 400 nm light:
        1 / 4.97x10^-19  =  2.01 x 10^18 photons

  energy of one MOLE of 300 nm photons:
        6.626x10^-19 x 6.022x10^23  =  3.99 x 10^5 J  =  399 kJ/mol
```

> **UNIT WARNING:** for frequency put lambda in METRES; for wave number in
> cm^-1 put lambda in CENTIMETRES. Getting this wrong is worth zero even
> if the arithmetic is perfect.

---

# 3. PHOTOELECTRIC EFFECT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     h nu   =   h nu(0)   +   (1/2) m v^2                             |
  |                                                                      |
  |     Work function     W(0)  =  h nu(0)                               |
  |                                                                      |
  |     Kinetic energy    KE    =  h nu  -  W(0)                         |
  |                                                                      |
  |                                 hc         hc                        |
  |                             =  ------  -  ---------                  |
  |                                lambda     lambda(0)                  |
  |                                                                      |
  |     Stopping potential:    e V(0)  =  KE(max)                        |
  |                                                                      |
  +----------------------------------------------------------------------+

  Threshold frequency  nu(0)  =  the MINIMUM frequency that can eject
                                 an electron. Below it, NOTHING happens.
```

| Formula | When to use |
|---------|-------------|
| `KE = h nu - W0` | frequency and work function given |
| `KE = hc/lambda - hc/lambda0` | both wavelengths given |
| `KE(eV) = 12400/lambda(A) - W0(eV)` | fastest route in an MCQ |
| `W0 = h nu0 = hc/lambda0` | converting between the three ways of stating the work function |
| `v = sqrt(2 KE / m)` | "find the velocity of the photoelectron" |
| `e V0 = KE(max)` | stopping potential |

```
  MICRO-EXAMPLE 1  -  work function from the threshold
        nu0 = 7.0 x 10^14 Hz
        W0  = 6.626x10^-34 x 7.0x10^14  =  4.64 x 10^-19 J  =  2.9 eV

  MICRO-EXAMPLE 2  -  work function from the threshold WAVELENGTH
        lambda0 = 5000 A
        W0 = 12400 / 5000  =  2.48 eV

  MICRO-EXAMPLE 3  -  the whole sum in eV
        W0 = 1.9 eV , incident light 500 nm ( = 5000 A )
        E  = 12400/5000 = 2.48 eV
        KE = 2.48 - 1.9 = 0.58 eV       stopping potential = 0.58 V

  MICRO-EXAMPLE 4  -  velocity of that electron
        KE = 0.58 x 1.602x10^-19  =  9.29 x 10^-20 J
        v^2 = 2 x 9.29x10^-20 / 9.11x10^-31 = 2.04 x 10^11 = 20.4 x 10^10
        v   = 4.52 x 10^5 m/s
```

```
  THE THREE-LINE THEORY THAT ANSWERS EVERY PHOTOELECTRIC MCQ

        FREQUENCY  ->  controls the KINETIC ENERGY of each electron
        INTENSITY  ->  controls the NUMBER of electrons
        Below nu(0) ->  NOTHING happens, at any intensity

  GRAPH FACTS:
        KE against frequency   =  straight line, SLOPE = h ,
                                  x-intercept = nu(0) , y-intercept = -W0
        KE against intensity   =  flat horizontal line
        Number against intensity = straight line through the origin
```

---

# 4. RYDBERG EQUATION AND SPECTRAL SERIES

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |      1              +-    1           1     -+                       |
  |   --------  =  R Z^2|  --------  -  ------- |                        |
  |    lambda           +-  n1^2         n2^2   -+                       |
  |                                                                      |
  |   R = 109677 cm^-1         n2 > n1                                   |
  |   For hydrogen, Z = 1                                                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +-----------+------+------------+---------------------+
  |  SERIES   |  n1  |     n2     |  REGION             |
  +-----------+------+------------+---------------------+
  |  LYMAN    |  1   |  2,3,4...  |  ULTRAVIOLET        |
  |  BALMER   |  2   |  3,4,5...  |  VISIBLE            |
  |  PASCHEN  |  3   |  4,5,6...  |  INFRARED           |
  |  BRACKETT |  4   |  5,6,7...  |  INFRARED           |
  |  PFUND    |  5   |  6,7,8...  |  FAR INFRARED       |
  +-----------+------+------------+---------------------+

  MEMORY:   "Little  Boys  Prefer  Bread  Plain"
              Lyman  Balmer Paschen Brackett Pfund
```

```
  NUMBER OF SPECTRAL LINES produced when an electron falls from
  level n to the ground state:

                        n ( n - 1 )
        lines   =     ---------------
                             2

  From level n2 down to level n1:

                        (n2 - n1)(n2 - n1 + 1)
        lines   =     --------------------------
                                  2
```

## READY-RECKONER OF HYDROGEN LINES (check your answers against this)

```
  +-----------+-------------+-------------+-------------+--------------+
  |  SERIES   |  1st LINE   |  2nd LINE   |  SERIES     |  REGION      |
  |           |  n2 = n1+1  |  n2 = n1+2  |  LIMIT      |              |
  +-----------+-------------+-------------+-------------+--------------+
  |  LYMAN    |   1215.7 A  |   1025.7 A  |    911.8 A  |  UV          |
  |  BALMER   |   6564.7 A  |   4862.8 A  |   3647.1 A  |  VISIBLE     |
  |  PASCHEN  |  18757   A  |  12822   A  |   8205.9 A  |  IR          |
  |  BRACKETT |  40524   A  |  26259   A  |  14588   A  |  IR          |
  |  PFUND    |  74600   A  |  46538   A  |  22794   A  |  far IR      |
  +-----------+-------------+-------------+-------------+--------------+

  MICRO-EXAMPLE - first Balmer line, worked in four lines:
        n1 = 2 , n2 = 3
        1/4 - 1/9  =  (9-4)/36  =  5/36
        1/lambda   =  109677 x 5/36  =  15232.9 cm^-1
        lambda     =  6.5647 x 10^-5 cm  =  6564.7 A

  MICRO-EXAMPLE - Lyman series limit, worked in three lines:
        n1 = 1 , n2 = infinity , so the bracket is just 1
        1/lambda   =  109677 cm^-1
        lambda     =  9.1177 x 10^-6 cm  =  911.8 A
```

| Formula | When to use |
|---------|-------------|
| `1/lambda = R Z^2 [1/n1^2 - 1/n2^2]` | any "wavelength of the ... line" question |
| put `n2 = n1 + 1` | "first line" or "longest wavelength" |
| put `n2 = infinity` | "series limit" or "shortest wavelength" |
| `n(n-1)/2` | lines seen when falling from n to the ground state |
| `(n2-n1)(n2-n1+1)/2` | lines seen between two given levels |
| `n2 - n1` | how many of those lines belong to ONE named series |

---

# 5. BOHR'S MODEL  *** the two boxes that answer most numericals ***

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                       0.529  n^2                                     |
  |    RADIUS    r(n)  = -------------  angstrom                         |
  |                            Z                                         |
  |                                                                      |
  |                       - 13.6  Z^2                                    |
  |    ENERGY    E(n)  = -------------  eV                               |
  |                            n^2                                       |
  |                                                                      |
  |                       - 2.18 x 10^-18  Z^2                           |
  |               or   = ----------------------  joule per atom          |
  |                              n^2                                     |
  |                                                                      |
  |                                     Z                                |
  |    VELOCITY  v(n)  = 2.188 x 10^6 x ---   m/s                        |
  |                                     n                                |
  |                                                                      |
  |                          n h                                         |
  |    ANGULAR MOMENTUM  =  -------     (Bohr's quantisation condition)  |
  |                          2 pi                                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `r(n) = 0.529 n^2 / Z` | radius of any orbit; answer in angstrom |
| `E(n) = -13.6 Z^2 / n^2 eV` | energy of an orbit; ALWAYS negative |
| `delta E = E2 - E1 = h nu` | energy of the photon emitted or absorbed |
| `IE = 13.6 Z^2 eV` | ionisation energy from the ground state |
| `mvr = n h / 2 pi` | angular momentum questions |

```
  IONISATION ENERGY  =  E(infinity)  -  E(1)  =  0  -  E(1)  =  + 13.6 Z^2  eV

  For hydrogen:  IE = 13.6 eV
  For He+:       IE = 13.6 x 4 = 54.4 eV
```

```
  RELATIONSHIP TO REMEMBER FOR HYDROGEN-LIKE SPECIES:

     r  is PROPORTIONAL to   n^2 / Z          (bigger n -> bigger orbit)
     E  is PROPORTIONAL to   - Z^2 / n^2      (bigger n -> less negative)
     v  is PROPORTIONAL to   Z / n            (bigger n -> slower)
```

## READY-RECKONER FOR HYDROGEN (Z = 1)

```
  +-----+-------------+---------------+----------------+----------------+
  |  n  |  r  ( A )   |  E  ( eV )    |  E  ( J )      |  v  ( m/s )    |
  +-----+-------------+---------------+----------------+----------------+
  |  1  |    0.529    |   -13.600     | -2.18 x 10^-18 | 2.188 x 10^6   |
  |  2  |    2.116    |   - 3.400     | -5.45 x 10^-19 | 1.094 x 10^6   |
  |  3  |    4.761    |   - 1.511     | -2.42 x 10^-19 | 7.293 x 10^5   |
  |  4  |    8.464    |   - 0.850     | -1.36 x 10^-19 | 5.470 x 10^5   |
  |  5  |   13.225    |   - 0.544     | -8.72 x 10^-20 | 4.376 x 10^5   |
  | inf |  infinite   |     0         |       0        |      0         |
  +-----+-------------+---------------+----------------+----------------+
```

## IONISATION ENERGIES OF THE HYDROGEN-LIKE SPECIES

```
  +----------+-----+---------------+---------------------+
  | SPECIES  |  Z  |  IE  ( eV )   |  IE  ( kJ/mol )     |
  +----------+-----+---------------+---------------------+
  |   H      |  1  |    13.6       |      1312           |
  |   He+    |  2  |    54.4       |      5250           |
  |   Li2+   |  3  |   122.4       |     11812           |
  |   Be3+   |  4  |   217.6       |     21000           |
  +----------+-----+---------------+---------------------+

  (kJ/mol column = eV value x 96.5)
```

```
  MICRO-EXAMPLES - one line each

  radius of the 2nd orbit of He+ :
        0.529 x 4 / 2  =  1.058 A

  energy of the 2nd orbit of Li2+ :
        -13.6 x 9 / 4  =  -30.6 eV

  energy released, H falling from n=3 to n=2 :
        (-1.511) - (-3.400)  =  1.889 eV  ->  lambda = 12400/1.889 = 6564 A

  energy needed to excite H from n=1 to n=3 :
        (-1.511) - (-13.600)  =  12.09 eV

  angular momentum in the 4th orbit :
        4 x 1.0546x10^-34  =  4.218 x 10^-34 kg m^2/s

  identify the ion whose 2nd orbit has E = -13.6 eV :
        -13.6 = -13.6 Z^2 / 4  ->  Z^2 = 4  ->  Z = 2  ->  He+
```

> **THE ONE SIGN ERROR THAT COSTS MOST MARKS:** `E(n)` is NEGATIVE.
> `delta E` for an EMISSION is written as a positive amount of energy
> released. Ionisation energy is POSITIVE. If your energy of an orbit
> comes out positive, you dropped the minus sign.

---

# 6. DE BROGLIE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |               h            h              h                          |
  |   lambda  =  ----   =   -------   =   ------------                   |
  |               p           m v          sqrt(2 m KE)                  |
  |                                                                      |
  |   For a charged particle accelerated through a potential V:          |
  |                                                                      |
  |                     h                                                |
  |   lambda  =  -----------------                                       |
  |               sqrt( 2 m q V )                                        |
  |                                                                      |
  +----------------------------------------------------------------------+

  RULE:  the wave nature is significant only for VERY LIGHT particles
         (electrons). For everyday objects lambda is far too small to detect.
```

| Formula | When to use |
|---------|-------------|
| `lambda = h / (m v)` | mass and velocity given |
| `lambda = h / sqrt(2 m KE)` | kinetic energy given instead of velocity |
| `lambda = h / sqrt(2 m q V)` | a charged particle accelerated through V volts |
| `lambda = 12.27 / sqrt(V) A` | the same thing for an ELECTRON, in one step |
| `m = h / (lambda v)` | the reverse question: "find the mass" |
| `v = h / (m lambda)` | the reverse question: "find the velocity" |
| `2 pi r = n lambda` | "show that de Broglie explains Bohr's postulate" |

```
  MICRO-EXAMPLES

  electron at 2.05 x 10^7 m/s :
        6.626x10^-34 / (9.11x10^-31 x 2.05x10^7)
      = 6.626x10^-34 / 1.8676x10^-23  =  3.55 x 10^-11 m

  electron accelerated through 100 V :
        12.27 / sqrt(100)  =  1.227 A

  cricket ball, 0.15 kg at 30 m/s :
        6.626x10^-34 / 4.5  =  1.47 x 10^-34 m   (undetectable)

  particle of lambda 5.6x10^-7 m moving at 300 m/s - find its mass :
        6.626x10^-34 / (5.6x10^-7 x 300)  =  3.94 x 10^-30 kg
```

---

# 7. HEISENBERG UNCERTAINTY PRINCIPLE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                                       h                              |
  |     (delta x)  x  (delta p)     >=   -----                           |
  |                                      4 pi                            |
  |                                                                      |
  |                                       h                              |
  |     (delta x)  x  (m delta v)   >=   -----                           |
  |                                      4 pi                            |
  |                                                                      |
  |                                        h                             |
  |     (delta E)  x  (delta t)     >=    -----                          |
  |                                       4 pi                           |
  |                                                                      |
  +----------------------------------------------------------------------+

  h / (4 pi)  =  5.27 x 10^-35  J s      (worth remembering)
```

| Formula | When to use |
|---------|-------------|
| `delta x . delta p >= h/4pi` | uncertainty in momentum wanted |
| `delta v >= h / (4 pi m delta x)` | uncertainty in velocity wanted |
| `delta x >= h / (4 pi m delta v)` | uncertainty in position wanted |
| `delta x . delta v >= 5.79 x 10^-5` | ELECTRON only - one division, no more |
| `delta E . delta t >= h/4pi` | lifetime of an excited state / line width |

```
  MICRO-EXAMPLES

  delta x = 10^-10 m , find delta v for an electron :
        5.79x10^-5 / 10^-10  =  5.79 x 10^5 m/s

  speed 2.2 x 10^6 m/s known to 0.1 % , find delta x :
        delta v = 0.001 x 2.2x10^6 = 2.2 x 10^3 m/s
        delta x >= 5.79x10^-5 / 2.2x10^3  =  2.63 x 10^-8 m  = 26.3 nm

  excited state lives 10^-8 s , find delta E :
        5.273x10^-35 / 10^-8  =  5.27 x 10^-27 J
```

> **ALWAYS WRITE `>=`.** Every answer here is a MINIMUM uncertainty.
> Writing `=` loses a mark in the board exam.

---

# 8. QUANTUM NUMBERS

```
  +-------+---------------------------+---------------------------------+
  | SYMBOL|  ALLOWED VALUES           |  WHAT IT TELLS YOU              |
  +-------+---------------------------+---------------------------------+
  |   n   |  1 , 2 , 3 , ...          |  SIZE and main energy level     |
  |   l   |  0  to  (n - 1)           |  SHAPE (which subshell)         |
  |   m   |  -l  ...  0  ...  +l      |  ORIENTATION in space           |
  |   s   |  +1/2   or   -1/2         |  SPIN direction                 |
  +-------+---------------------------+---------------------------------+
```

```
  +----------------------------------------------------------------------+
  |  COUNTING FORMULAE                                                   |
  |                                                                      |
  |    Orbitals in a SHELL           =   n^2                             |
  |    Electrons in a SHELL          =   2 n^2                           |
  |    Orbitals in a SUBSHELL        =   2 l  +  1                       |
  |    Electrons in a SUBSHELL       =   2 ( 2 l + 1 )                   |
  |    Values of l for a given n     =   n                               |
  |                                                                      |
  |    RADIAL NODES                  =   n  -  l  -  1                   |
  |    ANGULAR NODES                 =   l                               |
  |    TOTAL NODES                   =   n  -  1                         |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +-------+----------+-------------+----------------+
  |   l   | SUBSHELL |  ORBITALS   |  MAX ELECTRONS |
  +-------+----------+-------------+----------------+
  |   0   |    s     |      1      |        2       |
  |   1   |    p     |      3      |        6       |
  |   2   |    d     |      5      |       10       |
  |   3   |    f     |      7      |       14       |
  +-------+----------+-------------+----------------+
```

| Formula | When to use |
|---------|-------------|
| `n^2` | "how many orbitals in the M shell?" |
| `2 n^2` | "how many electrons can shell n hold?" |
| `n^2` again | "how many electrons in shell n with spin +1/2?" |
| `2l + 1` | "how many orbitals in the 3d subshell?" |
| `2(2l + 1)` | "how many electrons in the 4f subshell?" |
| `n - l - 1` | radial nodes |
| `l` | angular nodes (also = the number of nodal PLANES) |
| `n - 1` | total nodes |
| `n - l` | number of humps in the radial probability curve |

```
  MICRO-EXAMPLES

  orbitals and electrons in the N shell (n = 4) :
        orbitals = 16 ,  electrons = 32 ,  with spin +1/2 = 16

  electrons with n = 3 and l = 2 :
        that is 3d ,  2(2x2+1) = 10

  nodes in a 4p orbital :
        radial = 4-1-1 = 2 ,  angular = 1 ,  total = 3 = 4-1   OK

  an orbital has 2 radial and 1 angular node - name it :
        l = 1 (p) ,  n - 1 - 1 = 2  ->  n = 4   ->  4p
```

```
  THE VALIDITY CHECKLIST for "which set of quantum numbers is not possible"

     n   must be a POSITIVE WHOLE NUMBER, never 0
     l   must lie from 0 to (n - 1)
     m   must lie from -l to +l
     s   must be exactly +1/2 or -1/2

  Consequence: there is NO 1p , NO 2d , NO 3f orbital.
```

---

# 9. FILLING RULES

```
  AUFBAU        lowest energy orbital fills first

                (n + l) RULE:
                   lower (n + l)   ->  fills first
                   if (n + l) ties ->  lower n fills first

  PAULI         no two electrons in one atom can have all four quantum
                numbers the same
                -> maximum 2 electrons per orbital, with OPPOSITE spins

  HUND          within a subshell, fill orbitals SINGLY with parallel spins
                before starting to pair up
```

```
  FILLING ORDER (memorise this line):

  1s  2s  2p  3s  3p  4s  3d  4p  5s  4d  5p  6s  4f  5d  6p  7s  5f  6d  7p
```

```
  EXCEPTIONS TO REMEMBER:

     Cr  (Z=24)  ->  [Ar] 3d5  4s1     not  3d4 4s2
     Cu  (Z=29)  ->  [Ar] 3d10 4s1     not  3d9 4s2
     Mo  (Z=42)  ->  [Kr] 4d5  5s1
     Ag  (Z=47)  ->  [Kr] 4d10 5s1

  REASON:  half-filled (d5) and fully-filled (d10) subshells are extra
           stable, because of SYMMETRY and EXCHANGE ENERGY.
```

## THE (n + l) RULE — the pairs that actually get asked

```
  +------------+---------+---------+---------------------------------+
  |  COMPARE   |  n + l  |  n + l  |  FILLS FIRST, AND WHY           |
  +------------+---------+---------+---------------------------------+
  | 2p vs 3s   |    3    |    3    |  2p   - tie, lower n            |
  | 3p vs 4s   |    4    |    4    |  3p   - tie, lower n            |
  | 4s vs 3d   |    4    |    5    |  4s   - lower sum   ** famous **|
  | 3d vs 4p   |    5    |    5    |  3d   - tie, lower n            |
  | 4p vs 5s   |    5    |    5    |  4p   - tie, lower n            |
  | 5s vs 4d   |    5    |    6    |  5s   - lower sum               |
  | 4d vs 5p   |    6    |    6    |  4d   - tie, lower n            |
  | 6s vs 4f   |    6    |    7    |  6s   - lower sum               |
  | 4f vs 5d   |    7    |    7    |  4f   - tie, lower n            |
  | 5d vs 6p   |    7    |    7    |  5d   - tie, lower n            |
  | 5f vs 6d   |    8    |    8    |  5f   - tie, lower n            |
  +------------+---------+---------+---------------------------------+
```

## EMPTYING AN ION — the rule that is the OPPOSITE of Aufbau

```
  +-------------------------------------------------------------------+
  |   FILLING an atom :   4s goes IN  before 3d                        |
  |   EMPTYING an ion :   4s comes OUT before 3d                       |
  |                                                                   |
  |   "LAST IN is NOT first out."                                     |
  +-------------------------------------------------------------------+

  MICRO-EXAMPLES
     Fe   = [Ar] 3d6 4s2
     Fe2+ = [Ar] 3d6      (NOT [Ar] 3d4 4s2)   -> 4 unpaired
     Fe3+ = [Ar] 3d5                          -> 5 unpaired
     Cu2+ = [Ar] 3d9                          -> 1 unpaired
     Mn2+ = [Ar] 3d5                          -> 5 unpaired
     Zn2+ = [Ar] 3d10                         -> 0 unpaired
```

```
  COUNTING UNPAIRED ELECTRONS IN A d^x ION IN FIVE SECONDS

     x = 1,2,3,4,5    ->   unpaired  =  x
     x = 6,7,8,9,10   ->   unpaired  =  10 - x

  MAGNETIC MOMENT       mu  =  sqrt( n ( n + 2 ) )   Bohr magnetons

     n = 1 -> 1.73    n = 2 -> 2.83    n = 3 -> 3.87
     n = 4 -> 4.90    n = 5 -> 5.92    n = 0 -> 0 (diamagnetic)
```

---

# 10. UNIT CONVERSIONS USED IN THIS CHAPTER

## Length

```
  1 nm      =  10^-9   m   =  10^-7 cm   =  10 A
  1 pm      =  10^-12  m   =  10^-10 cm
  1 A       =  10^-10  m   =  10^-8 cm   =  100 pm  =  0.1 nm
  1 cm      =  10^-2   m   =  10^8 A
  1 m       =  10^10   A   =  10^9 nm    =  10^12 pm

  QUICK TABLE for the wavelengths you meet most:

  +-----------+-----------+--------------+----------------+
  |  in nm    |  in A     |  in metres   |  in cm         |
  +-----------+-----------+--------------+----------------+
  |   200     |   2000    |  2   x 10^-7 |  2   x 10^-5   |
  |   300     |   3000    |  3   x 10^-7 |  3   x 10^-5   |
  |   400     |   4000    |  4   x 10^-7 |  4   x 10^-5   |
  |   500     |   5000    |  5   x 10^-7 |  5   x 10^-5   |
  |   589     |   5890    |  5.89x 10^-7 |  5.89x 10^-5   |
  |   600     |   6000    |  6   x 10^-7 |  6   x 10^-5   |
  |   656     |   6560    |  6.56x 10^-7 |  6.56x 10^-5   |
  +-----------+-----------+--------------+----------------+
```

## Wave number

```
  1 cm^-1   =  100 m^-1
  R = 109677 cm^-1  =  1.09677 x 10^7 m^-1

  If a question gives R in m^-1 , your lambda comes out in METRES.
  If it gives R in cm^-1 , your lambda comes out in CENTIMETRES.
  Then convert:   1 cm = 10^8 A .
```

## Energy

```
  1 eV            =  1.602 x 10^-19  J
  1 J             =  6.242 x 10^18   eV
  1 eV per atom   =  96.5  kJ per mole
  1 kJ            =  1000  J

  J per atom  ->  kJ per mole :
       multiply by 6.022 x 10^23 , then divide by 1000

  MICRO-EXAMPLE:  E = 3.375 x 10^-19 J per photon
       x 6.022 x 10^23  =  2.032 x 10^5 J/mol
       / 1000           =  203.2 kJ/mol

  eV  ->  kJ/mol , the one-step way :  multiply by 96.5

  MICRO-EXAMPLE:  2.107 eV  x  96.5  =  203.3 kJ/mol    (same answer)
```

## Mass, charge and speed

```
  1 g       =  10^-3  kg
  1 mg      =  10^-6  kg
  1 u       =  1.66 x 10^-27  kg

  charge of n electrons          =  n x 1.602 x 10^-19  C
  1 coulomb                      =  6.24 x 10^18 electrons
  charge of 1 mole of electrons  =  96500 C     (the Faraday)

  1 km/h    =  5/18  m/s
```

> **THE UNIT HABIT THAT SAVES MARKS:** before you touch the calculator,
> rewrite every given quantity in SI units (metres, kilograms, joules,
> seconds). Do the whole sum in SI and convert only at the very end.

---

# THE 10 FORMULAE TO WRITE ON YOUR PALM

```
   1.   c  =  nu x lambda
   2.   E  =  h nu  =  h c / lambda
   3.   h nu  =  h nu(0)  +  (1/2) m v^2
   4.   1/lambda  =  R [ 1/n1^2  -  1/n2^2 ]
   5.   r(n)  =  0.529 n^2 / Z    angstrom
   6.   E(n)  =  - 13.6 Z^2 / n^2  eV
   7.   lambda  =  h / (m v)
   8.   (delta x)(delta p)  >=  h / 4 pi
   9.   electrons in a shell = 2 n^2 ,  orbitals = n^2
  10.   radial nodes = n - l - 1 ,  total nodes = n - 1
```

## AND THE 5 NUMBERS TO WRITE ON THE OTHER PALM

```
  11.   h c        =  1.9878 x 10^-25  J m
  12.   h / 4 pi   =  5.273  x 10^-35  J s
  13.   E(eV)      =  12400 / lambda(angstrom)
  14.   lambda(A)  =  12.27 / sqrt(V)         for an electron
  15.   1 eV = 96.5 kJ/mol  ,  IE of H = 13.6 eV = 1312 kJ/mol
```

---

# LAST-MINUTE SANITY CHECKS

```
  +---------------------------------------+----------------------------+
  |  IF YOUR ANSWER IS ...                |  YOU PROBABLY ...          |
  +---------------------------------------+----------------------------+
  |  a POSITIVE energy for an orbit       |  dropped the minus sign    |
  |                                       |                            |
  |  a NEGATIVE kinetic energy            |  are below the threshold - |
  |                                       |  the answer is "no         |
  |                                       |  emission at all"          |
  |                                       |                            |
  |  a wavelength of about 10^-5 for      |  forgot to convert cm to m |
  |  visible light, in metres             |  (or A to m)               |
  |                                       |                            |
  |  a de Broglie wavelength bigger than  |  divided instead of        |
  |  an atom, for a fast electron         |  multiplying m by v        |
  |                                       |                            |
  |  an uncertainty written with "="      |  forgot the ">=" sign      |
  |                                       |                            |
  |  Fe2+ = [Ar] 3d4 4s2                  |  removed 3d before 4s      |
  |                                       |                            |
  |  a Balmer wavelength far from 6565 A  |  swapped n1 and n2         |
  +---------------------------------------+----------------------------+
```
