# Atoms — Formula Sheet

**Physics 2nd Year · Chapter 13**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
Every symbol used here is defined at the bottom of the sheet.

---

# 1. THE ALPHA PARTICLE

```
  +--------------------------------------------------------------+
  |                                                              |
  |   Alpha particle  =  helium nucleus  =  2 protons + 2 neutrons|
  |                                                              |
  |   Charge   q  =  + 2 e  =  3.2 x 10^-19 C                    |
  |   Mass     m  =  4 u    =  6.64 x 10^-27 kg                  |
  |                                                              |
  |   Kinetic energy of the alphas used by Geiger and Marsden:   |
  |            about 5.5 MeV   (from Bismuth-214)                |
  |                                                              |
  |   ENERGY CONVERSION:                                          |
  |            1 eV   =  1.6 x 10^-19 J                          |
  |            1 MeV  =  1.6 x 10^-13 J                          |
  +--------------------------------------------------------------+
```

---

# 2. SCATTERING — IMPACT PARAMETER AND DISTANCE OF CLOSEST APPROACH

```
  IMPACT PARAMETER
  ----------------
                       Z e^2  cot ( theta / 2 )
        b    =    -----------------------------------
                        4 pi eps0  x  K


  DISTANCE OF CLOSEST APPROACH  (head-on collision, b = 0)
  --------------------------------------------------------
                        2 Z e^2                     4 Z e^2
        r0   =    --------------------   =    --------------------
                   4 pi eps0  x  K             4 pi eps0  m v^2


        with   K  =  (1/2) m v^2   = kinetic energy of the alpha particle
               1 / (4 pi eps0)  =  9 x 10^9  N m^2 / C^2


  ANGULAR DISTRIBUTION OF THE SCATTERED PARTICLES
  -----------------------------------------------
                                     1
        N ( theta )   proportional to  ------------------------
                                     sin^4 ( theta / 2 )
```

| Formula | When to use |
|---|---|
| `b = Z e^2 cot(theta/2) / (4 pi eps0 K)` | "Find the impact parameter for a deflection of theta" |
| `b = 0` | Whenever theta = 180 deg (head-on, straight back) |
| `r0 = 2 Z e^2 / (4 pi eps0 K)` | "Distance of closest approach" of an **alpha** particle |
| `r0 = Z e^2 / (4 pi eps0 K)` | Same question but the projectile is a **proton or deuteron** (charge +e) |
| `r0 x K = constant` | Fast rescaling when the energy changes but the target does not |
| `N ∝ 1 / sin^4(theta/2)` | "How many times more particles at 60 deg than at 90 deg?" |

> Remember: **r0 is an UPPER LIMIT on the size of the nucleus**, because the
> alpha stopped before touching it.

---

# 3. SIZES AND RATIOS TO QUOTE

```
  +---------------------------------+--------------------------------+
  |  Radius of an atom              |  about 10^-10 m  =  1 angstrom |
  |  Radius of a nucleus            |  about 10^-15 m  =  1 fermi    |
  |  Ratio of radii                 |  1 : 10^5                      |
  |  Ratio of volumes               |  1 : 10^15                     |
  |  Fraction of atom's mass in     |                                |
  |  the nucleus                    |  more than 99.9 %              |
  |  Density of nuclear matter      |  about 10^17 kg / m^3          |
  |  Thickness of the gold foil     |  2.1 x 10^-7 m (~400 atoms)    |
  |  Fraction scattered > 1 deg     |  about 0.14 %                  |
  |  Fraction scattered > 90 deg    |  about 1 in 8000               |
  |  Time for classical collapse    |  about 10^-8 s                 |
  +---------------------------------+--------------------------------+
```

---

# 4. RUTHERFORD'S ORBIT CONDITION (classical, before Bohr)

```
        Coulomb attraction   =   centripetal force

            1        Z e^2          m v^2
        --------- x  ------   =    -------
        4 pi eps0     r^2             r


                               Z e^2
        ==>     m v^2   =   -------------
                            4 pi eps0 r
```

```
  +-------------------------------------------------------------+
  |                        Z e^2                                |
  |   Kinetic     K  =  + ------------                          |
  |                        8 pi eps0 r                          |
  |                                                             |
  |                        Z e^2                                |
  |   Potential   U  =  - ------------                          |
  |                        4 pi eps0 r                          |
  |                                                             |
  |                        Z e^2                                |
  |   Total       E  =  - ------------                          |
  |                        8 pi eps0 r                          |
  |                                                             |
  |   RELATIONS:      U = - 2 K        E = - K        E = U / 2 |
  +-------------------------------------------------------------+
```

| Relation | When to use |
|---|---|
| `E = -K` | "If the total energy is -3.4 eV, find the KE" -> +3.4 eV |
| `U = 2E` | "Find the potential energy in the nth orbit" |
| `U = -2K` | Any question mixing KE and PE of an orbiting electron |

---

# 5. BOHR'S POSTULATES

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  1.  Electrons revolve in STATIONARY ORBITS without radiating.     |
  |                                                                    |
  |                                       n h                          |
  |  2.  ANGULAR MOMENTUM QUANTISED:  L = ------- = m v r              |
  |                                       2 pi                         |
  |                                                                    |
  |  3.  FREQUENCY CONDITION:     h nu  =  E2 - E1                     |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

# 6. THE THREE BIG RESULTS  *** memorise these ***

```
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   RADIUS                                                                |
  |                    eps0 h^2      n^2                  n^2               |
  |        r_n  =   -------------- x -----   =   0.529 x -----  angstrom    |
  |                    pi m e^2        Z                   Z                |
  |                                                                         |
  |                    a0 = 0.529 x 10^-10 m  = the BOHR RADIUS             |
  |                                                                         |
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   VELOCITY                                                              |
  |                     Z e^2                             Z                 |
  |        v_n  =   -------------   =   2.18 x 10^6  x  -----  m / s        |
  |                  2 eps0 n h                           n                 |
  |                                                                         |
  |                     c        Z                                          |
  |             =   ------- x  -----      (c / 137 for hydrogen n = 1)      |
  |                   137        n                                          |
  |                                                                         |
  +-------------------------------------------------------------------------+
  |                                                                         |
  |   ENERGY                                                                |
  |                      m Z^2 e^4                         Z^2              |
  |        E_n  =  -  ----------------   =   - 13.6  x   ------   eV        |
  |                    8 eps0^2 n^2 h^2                    n^2              |
  |                                                                         |
  |                = - 2.18 x 10^-18  Z^2 / n^2   joule                     |
  |                                                                         |
  +-------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `r_n = 0.529 n^2 / Z  A` | Any "radius of the nth orbit" question |
| `v_n = 2.18e6 Z/n m/s` | Speed, time period, current, de Broglie wavelength |
| `E_n = -13.6 Z^2/n^2 eV` | Every energy, ionisation, excitation, transition question |
| `L_n = n h / 2 pi` | Angular momentum — depends on n only, never on Z |

---

# 7. DERIVED QUANTITIES

```
                        2 pi r_n                          n^3
   TIME PERIOD    T  =  ----------   =  1.52 x 10^-16 x  -----  s
                           v_n                            Z^2


                          1                              Z^2
   FREQUENCY OF     f  =  ---   =   6.58 x 10^15   x   -------  Hz
   REVOLUTION              T                             n^3


                          e                              Z^2
   ORBITAL          I  =  ---   =   1.05 x 10^-3   x   -------  A
   CURRENT                 T                             n^3


                                   v^2
   ACCELERATION     a   =        -------          proportional to Z^3 / n^4
                                   r


                                       2 pi r_n            n
   DE BROGLIE       lambda_n  =  ---------------  ,  ~  ------
   WAVELENGTH                          n                  Z
```

---

# 8. SCALING TABLE — the fastest way to answer EAPCET ratio questions

```
  +-----------------------------+----------------+----------------------+
  |  QUANTITY                   |  VARIES AS     |  VALUE FOR H, n=1    |
  +-----------------------------+----------------+----------------------+
  |  Radius            r_n      |   n^2 / Z      |  0.529 A             |
  |  Velocity          v_n      |   Z / n        |  2.18 x 10^6 m/s     |
  |  Total energy      E_n      |   Z^2 / n^2    |  -13.6 eV            |
  |  Kinetic energy    K_n      |   Z^2 / n^2    |  +13.6 eV            |
  |  Potential energy  U_n      |   Z^2 / n^2    |  -27.2 eV            |
  |  Angular momentum  L_n      |   n   ONLY     |  1.05 x 10^-34 J s   |
  |  Time period       T_n      |   n^3 / Z^2    |  1.52 x 10^-16 s     |
  |  Frequency of rev. f_n      |   Z^2 / n^3    |  6.58 x 10^15 Hz     |
  |  Orbital current   I_n      |   Z^2 / n^3    |  1.05 mA             |
  |  Acceleration      a_n      |   Z^3 / n^4    |  9.0 x 10^22 m/s^2   |
  |  de Broglie lambda          |   n / Z        |  3.32 A              |
  +-----------------------------+----------------+----------------------+
```

---

# 9. SPECTRUM FORMULAE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   RYDBERG FORMULA                                                    |
  |                                                                      |
  |        1                +-    1          1     -+                    |
  |     --------   =   R Z^2 |  ------  -  ------   |      n2 > n1       |
  |      lambda              +-  n1^2       n2^2   -+                    |
  |                                                                      |
  |        R  =  1.097 x 10^7 m^-1     (Rydberg constant)                |
  |                                                                      |
  |                    m e^4                                             |
  |        R  =   ----------------      (Bohr's derived value)           |
  |                8 eps0^2 h^3 c                                        |
  |                                                                      |
  |        R h c  =  13.6 eV                                             |
  +----------------------------------------------------------------------+
  |                                                                      |
  |   PHOTON OF A TRANSITION                                             |
  |                                                                      |
  |        Delta E   =   E(n2) - E(n1)  =  h nu  =  h c / lambda         |
  |                                                                      |
  |                              +-   1         1    -+                  |
  |        Delta E (eV) = 13.6 Z^2 |  ------ - ------  |                  |
  |                              +-  n1^2      n2^2  -+                  |
  |                                                                      |
  |                              12400                                   |
  |        lambda (angstrom) = -------------                             |
  |                             Delta E (eV)                             |
  |                                                                      |
  |                              1240                                    |
  |        lambda (nanometre) = -------------                            |
  |                              Delta E (eV)                            |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `1/lambda = R Z^2 (1/n1^2 - 1/n2^2)` | Wavelength or wave number of a named line |
| `lambda(A) = 12400 / E(eV)` | Fastest route once you know the energy gap |
| `lambda(min) = n1^2 / R` | Shortest wavelength / SERIES LIMIT of a series |
| `n2 = n1 + 1` | FIRST line of a series = LONGEST wavelength |
| `N = n(n-1)/2` | Number of spectral lines from a sample excited to n |
| `N = (n2-n1)(n2-n1+1)/2` | Lines when excited from n1 to n2 |

---

# 10. THE FIVE SERIES OF HYDROGEN — the full table

```
  +-----------+-----+---------+---------------+-----------------+--------------+
  | SERIES    | n1  |   n2    |   REGION      | LONGEST lambda  | SHORTEST     |
  |           |     |         |               | (first line)    | (limit)      |
  +-----------+-----+---------+---------------+-----------------+--------------+
  | LYMAN     |  1  | 2,3,... | Ultraviolet   |   1216  A       |    912  A    |
  | BALMER    |  2  | 3,4,... | VISIBLE       |   6563  A       |   3646  A    |
  | PASCHEN   |  3  | 4,5,... | Infrared      |  18751  A       |   8204  A    |
  | BRACKETT  |  4  | 5,6,... | Infrared      |  40500  A       |  14584  A    |
  | PFUND     |  5  | 6,7,... | Far infrared  |  74600  A       |  22790  A    |
  +-----------+-----+---------+---------------+-----------------+--------------+

   MEMORY SENTENCE:     "LAZY   BOYS   PLAY   BASKET   BALL"
                          L      B      P       B       P
                        n1=1   n1=2   n1=3    n1=4    n1=5

   REGIONS:              U      V      I       I       I
                        (only Balmer is visible; only Lyman is UV;
                         the rest are all infrared)
```

**How the limit numbers were obtained** (so you can rebuild them in the exam):

```
   lambda(limit) = n1^2 / R

      Lyman     1  / 1.097e7  =    912 A
      Balmer    4  / 1.097e7  =   3646 A
      Paschen   9  / 1.097e7  =   8204 A
      Brackett  16 / 1.097e7  =  14584 A
      Pfund     25 / 1.097e7  =  22790 A
```

**The four visible Balmer lines:**

```
   H-alpha   3 -> 2   6563 A   RED
   H-beta    4 -> 2   4861 A   BLUE-GREEN
   H-gamma   5 -> 2   4341 A   BLUE-VIOLET
   H-delta   6 -> 2   4102 A   VIOLET
```

---

# 11. ENERGY LEVELS OF HYDROGEN — the numbers to know by heart

```
  +-----+-------------+-------------+---------------------------+
  |  n  |  E_n (eV)   |  r_n (A)    |  NAME                     |
  +-----+-------------+-------------+---------------------------+
  |  1  |   -13.60    |   0.529     |  Ground state             |
  |  2  |   - 3.40    |   2.12      |  1st excited state        |
  |  3  |   - 1.51    |   4.76      |  2nd excited state        |
  |  4  |   - 0.85    |   8.46      |  3rd excited state        |
  |  5  |   - 0.54    |  13.22      |  4th excited state        |
  |  6  |   - 0.38    |  19.04      |                           |
  | inf |     0       |  infinity   |  Free / ionised           |
  +-----+-------------+-------------+---------------------------+

  Shortcut:  E_n = -13.6 / n^2 ,  so just divide 13.6 by 1, 4, 9, 16, 25, 36.
```

---

# 12. IONISATION AND EXCITATION

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  IONISATION ENERGY  =  0  -  E1   =   13.6 Z^2   eV                |
  |       (from the GROUND state to n = infinity)                      |
  |                                                                    |
  |  IONISATION ENERGY FROM LEVEL n  =  13.6 Z^2 / n^2  eV             |
  |       (this is also called the BINDING ENERGY of that level)       |
  |                                                                    |
  |  IONISATION POTENTIAL  =  the same value written in VOLTS          |
  |                                                                    |
  |  EXCITATION ENERGY (ground -> n)  =  E_n  -  E1                    |
  |                                                                    |
  |          1st excitation energy  =  10.20 eV   (n=1 -> 2)           |
  |          2nd excitation energy  =  12.09 eV   (n=1 -> 3)           |
  |          3rd excitation energy  =  12.75 eV   (n=1 -> 4)           |
  |                                                                    |
  |  EXCITATION POTENTIAL  =  the same value written in VOLTS          |
  +--------------------------------------------------------------------+
```

Hydrogen-like ions:

| Ion | Z | E1 | Ionisation energy | Ground radius |
|---|---|---|---|---|
| H | 1 | -13.6 eV | 13.6 eV | 0.529 A |
| He+ | 2 | -54.4 eV | 54.4 eV | 0.265 A |
| Li2+ | 3 | -122.4 eV | 122.4 eV | 0.176 A |
| Be3+ | 4 | -217.6 eV | 217.6 eV | 0.132 A |

---

# 13. DE BROGLIE CONDITION

```
  +--------------------------------------------------------------+
  |                                                              |
  |     2 pi r   =   n lambda            (standing wave on the   |
  |                                       circular orbit)        |
  |                                                              |
  |     lambda   =   h / ( m v )         (de Broglie)            |
  |                                                              |
  |     Combine:      2 pi r  =  n h / (m v)                     |
  |                                                              |
  |     ==>           m v r   =  n h / (2 pi)                    |
  |                                                              |
  |         which IS Bohr's second postulate.                    |
  |                                                              |
  |     Number of de Broglie wavelengths in the nth orbit = n    |
  +--------------------------------------------------------------+
```

---

# 14. THE LISTS YOU MUST BE ABLE TO RECITE

**Three observations of the alpha scattering experiment**

```
  1.  Most alphas pass straight through undeviated.
  2.  About 0.14 % are deflected by more than 1 degree.
  3.  About 1 in 8000 is deflected by more than 90 degrees; a few return.
```

**Three conclusions**

```
  1.  The atom is mostly EMPTY SPACE.
  2.  The positive charge is CONCENTRATED in a tiny central nucleus.
  3.  Nearly the WHOLE MASS of the atom is in that nucleus.
```

**Two drawbacks of Rutherford's model**

```
  1.  STABILITY: an accelerated electron radiates, spirals in and collapses
      into the nucleus in about 10^-8 s.
  2.  SPECTRUM: the radiated frequency would change continuously, giving a
      continuous spectrum instead of the observed sharp LINE spectrum.
```

**Limitations of Bohr's model (say six)**

```
  1.  Works only for hydrogen and one-electron ions.
  2.  Cannot explain the relative intensities of spectral lines.
  3.  Cannot explain fine structure.
  4.  Cannot explain the Zeeman and Stark effects.
  5.  Cannot explain chemical bonding / molecule formation.
  6.  Violates Heisenberg's uncertainty principle.
  7.  Arbitrarily mixes classical mechanics with a quantum condition.
  8.  Ignores the wave nature of the electron.
```

---

# 15. CONSTANTS AND SYMBOLS

```
  +----------------------+-------------------------------+---------------+
  |  SYMBOL              |  MEANING                      |  VALUE        |
  +----------------------+-------------------------------+---------------+
  |  e                   |  elementary charge            | 1.6 x 10^-19 C|
  |  m                   |  mass of the electron         | 9.1 x 10^-31 kg|
  |  h                   |  Planck's constant            | 6.63 x 10^-34 J s|
  |  h / 2 pi            |  reduced Planck constant      | 1.05 x 10^-34 J s|
  |  c                   |  speed of light               | 3 x 10^8 m/s  |
  |  eps0                |  permittivity of free space   | 8.85 x 10^-12 |
  |  1 / (4 pi eps0)     |  Coulomb constant             | 9 x 10^9      |
  |  R                   |  Rydberg constant             | 1.097 x 10^7 /m|
  |  a0                  |  Bohr radius                  | 0.529 x 10^-10 m|
  |  Z                   |  atomic number of the nucleus | H=1, He=2, Au=79|
  |  n                   |  principal quantum number     | 1, 2, 3, ...  |
  |  h c                 |  useful product               | 12400 eV.A    |
  |  1 angstrom          |  A                            | 10^-10 m      |
  |  1 fermi             |  fm                           | 10^-15 m      |
  +----------------------+-------------------------------+---------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
   1.   r0  =  2 Z e^2 / ( 4 pi eps0 K )          distance of closest approach

   2.   b   =  Z e^2 cot(theta/2) / ( 4 pi eps0 K )   impact parameter

   3.   m v r  =  n h / ( 2 pi )                   Bohr's 2nd postulate

   4.   h nu  =  E2 - E1                           Bohr's 3rd postulate

   5.   r_n  =  0.529 n^2 / Z   angstrom           RADIUS

   6.   v_n  =  2.18 x 10^6  Z / n   m/s           VELOCITY

   7.   E_n  =  - 13.6 Z^2 / n^2   eV              ENERGY

   8.   E = -K ,   U = 2E ,   U = -2K              energy relations

   9.   1/lambda  =  R Z^2 ( 1/n1^2  -  1/n2^2 )   RYDBERG

  10.   lambda (A)  =  12400 / Delta E (eV)        photon shortcut

  11.   N  =  n ( n - 1 ) / 2                      number of spectral lines

  12.   2 pi r  =  n lambda                        de Broglie condition
```
