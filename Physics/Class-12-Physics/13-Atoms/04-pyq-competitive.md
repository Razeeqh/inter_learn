# Atoms — Competitive Exam Questions (EAPCET · JEE Main)

**Physics 2nd Year · Chapter 13**

```
  +---------------+------------------+--------------------+----------------+
  |  EXAM         |  Qs FROM THIS    |  DIFFICULTY        |  MARKING       |
  |               |  CHAPTER         |                    |                |
  +---------------+------------------+--------------------+----------------+
  |  AP EAPCET    |  1  (sometimes 2)|  EASY - direct     |  +1, NO minus  |
  |               |                  |  plug-in           |  NEVER blank   |
  +---------------+------------------+--------------------+----------------+
  |  TG EAPCET    |  1  (sometimes 2)|  EASY              |  +1, NO minus  |
  +---------------+------------------+--------------------+----------------+
  |  JEE Main     |  1  (with Nuclei |  EASY to MEDIUM    |  +4 , -1       |
  |               |   usually 1-2)   |                    |  skip if lost  |
  +---------------+------------------+--------------------+----------------+
```

**The good news:** this chapter has almost no "thinking" questions. Nearly
every one is a substitution into `r ~ n^2/Z`, `v ~ Z/n`, `E ~ -13.6 Z^2/n^2`
or the Rydberg formula. Memorise the scaling table and you get the mark in
15 seconds.

---

# PATTERN 1 — DISTANCE OF CLOSEST APPROACH

```
  Formula:   r0 = 2 Z e^2 / ( 4 pi eps0 K )       for an ALPHA particle
             r0 =   Z e^2 / ( 4 pi eps0 K )       for a PROTON

  KEY:  r0  is INVERSELY proportional to K,  and PROPORTIONAL to Z.
```

### Q1.1
An alpha particle of energy 5 MeV is fired head-on at a gold nucleus
(Z = 79). The distance of closest approach is about

(a) 4.55 x 10^-14 m  (b) 4.55 x 10^-12 m  (c) 2.28 x 10^-14 m  (d) 9.1 x 10^-15 m

**ANSWER: (a)**
```
  K = 5 x 1.6e-13 = 8.0e-13 J

  r0 = 9e9 x 2 x 79 x (1.6e-19)^2 / 8.0e-13
     = 3.640e-26 / 8.0e-13
     = 4.55 x 10^-14 m
```

---

### Q1.2
If the kinetic energy of the alpha particle is doubled, the distance of
closest approach becomes

(a) doubled  (b) halved  (c) four times  (d) unchanged

**ANSWER: (b) halved.**  r0 ∝ 1/K.

> **SHORTCUT:** Never recompute. `r0 x K = constant` for the same target.

---

### Q1.3
A proton and an alpha particle of the **same kinetic energy** approach the
same nucleus. The ratio of their distances of closest approach is

(a) 1 : 1  (b) 1 : 2  (c) 2 : 1  (d) 1 : 4

**ANSWER: (b) 1 : 2**
```
  Proton has charge +e, alpha has +2e.
  r0 is proportional to the projectile charge, so r0(p) : r0(alpha) = 1 : 2.
  The alpha, being doubly charged, is repelled more and stops further out.
```

---

### Q1.4
An alpha particle of energy 4 MeV is fired at a copper nucleus (Z = 29).
The distance of closest approach is

(a) 2.09 x 10^-14 m  (b) 2.09 x 10^-13 m  (c) 4.18 x 10^-14 m  (d) 1.04 x 10^-14 m

**ANSWER: (a)**
```
  K = 4 x 1.6e-13 = 6.4e-13 J
  Numerator = 9e9 x 2 x 29 x 2.56e-38 = 9e9 x 1.4848e-36 = 1.336e-26
  r0 = 1.336e-26 / 6.4e-13 = 2.09 x 10^-14 m
```

---

### Q1.5
The distance of closest approach is used to estimate

(a) the size of the atom  (b) an upper limit on the size of the nucleus
(c) the electron orbit radius  (d) the Bohr radius

**ANSWER: (b).** The alpha stopped **before** touching the nucleus, so the
nucleus is smaller than r0.

---

# PATTERN 2 — IMPACT PARAMETER AND SCATTERING DISTRIBUTION

```
              Z e^2 cot ( theta / 2 )                          1
     b  =  --------------------------- ,     N(theta)  ~  --------------
                4 pi eps0 x K                             sin^4(theta/2)
```

### Q2.1
For a scattering angle of 180 degrees, the impact parameter is

(a) infinite  (b) large  (c) zero  (d) 10^-10 m

**ANSWER: (c) zero.**  cot(90 deg) = 0.

---

### Q2.2
As the impact parameter increases, the scattering angle

(a) increases  (b) decreases  (c) stays the same  (d) first rises then falls

**ANSWER: (b) decreases.** Far from the nucleus, weaker repulsion,
smaller deflection.

---

### Q2.3
The number of alpha particles scattered at 60 degrees compared with the number
scattered at 90 degrees is

(a) 1 : 4  (b) 2 : 1  (c) 4 : 1  (d) 16 : 1

**ANSWER: (c) 4 : 1**
```
  N(60)     sin^4(45)     (1/sqrt2)^4      1/4
  ------ =  ----------  = -----------  =  -----  =  4
  N(90)     sin^4(30)      (1/2)^4        1/16
```

---

### Q2.4
The trajectory of an alpha particle in the field of a nucleus is

(a) a circle  (b) an ellipse  (c) a parabola  (d) a hyperbola

**ANSWER: (d) hyperbola** — an inverse-square **repulsive** force gives a
hyperbolic orbit with the nucleus at a focus.

---

### Q2.5
For an alpha particle of kinetic energy K scattered by a nucleus of charge Ze,
the impact parameter is proportional to

(a) K  (b) 1/K  (c) K^2  (d) sqrt(K)

**ANSWER: (b) 1/K.**

---

# PATTERN 3 — RADIUS OF A BOHR ORBIT

```
                          n^2
     r_n   =   0.529  x  -----  angstrom              r  ~  n^2 / Z
                           Z
```

### Q3.1
The radius of the third orbit of a hydrogen atom is

(a) 1.59 A  (b) 4.76 A  (c) 0.176 A  (d) 8.46 A

**ANSWER: (b)**  `r3 = 0.529 x 9 = 4.761 A`

---

### Q3.2
The radius of the second Bohr orbit of Li2+ (Z = 3) is

(a) 0.705 A  (b) 2.12 A  (c) 6.35 A  (d) 0.176 A

**ANSWER: (a)**  `r = 0.529 x 4 / 3 = 0.705 A`

---

### Q3.3
If a0 is the Bohr radius, the radius of the fourth orbit of hydrogen is

(a) 4 a0  (b) 8 a0  (c) 16 a0  (d) a0/16

**ANSWER: (c) 16 a0.**  r ∝ n^2, and 4^2 = 16.

---

### Q3.4
The ratio of the radii of the first three Bohr orbits of hydrogen is

(a) 1 : 2 : 3  (b) 1 : 4 : 9  (c) 1 : 8 : 27  (d) 9 : 4 : 1

**ANSWER: (b) 1 : 4 : 9.**

---

### Q3.5
An electron in a hydrogen-like ion has an orbit radius equal to the Bohr
radius when n = 2. The atomic number Z is

(a) 1  (b) 2  (c) 4  (d) 8

**ANSWER: (c) 4**
```
   0.529 x n^2 / Z = 0.529   =>   n^2 / Z = 1   =>   4 / Z = 1  =>  Z = 4
   (this is Be3+)
```

---

# PATTERN 4 — VELOCITY, ANGULAR MOMENTUM, TIME PERIOD

```
     v_n = 2.18e6 x Z/n  m/s        L_n = n h / (2 pi)  (depends on n ONLY)
     T_n ~ n^3 / Z^2                f_n ~ Z^2 / n^3
```

### Q4.1
The speed of the electron in the ground state of hydrogen is about

(a) 3 x 10^8 m/s  (b) 2.18 x 10^6 m/s  (c) 2.18 x 10^8 m/s  (d) 1.09 x 10^6 m/s

**ANSWER: (b) 2.18 x 10^6 m/s**, which is c/137.

---

### Q4.2
The ratio of the speeds of the electron in the 1st, 2nd and 3rd orbits of
hydrogen is

(a) 1 : 2 : 3  (b) 3 : 2 : 1  (c) 6 : 3 : 2  (d) 1 : 4 : 9

**ANSWER: (c) 6 : 3 : 2.**  v ∝ 1/n, so 1 : 1/2 : 1/3 = 6 : 3 : 2.

---

### Q4.3
The angular momentum of an electron in the second Bohr orbit is

(a) h/pi  (b) h/2pi  (c) 2h/pi  (d) 4h/pi

**ANSWER: (a) h/pi.**  `L = 2h/(2 pi) = h/pi = 2.11 x 10^-34 J s`

---

### Q4.4
The angular momentum of the electron in the ground state of He+ compared with
that in the ground state of H is

(a) twice  (b) four times  (c) half  (d) the same

**ANSWER: (d) the same.**

> **SHORTCUT:** `L = n h / 2 pi` contains **no Z**. Angular momentum depends
> on n alone. This is tested almost every year in some form.

---

### Q4.5
The time period of revolution of the electron in the nth orbit is
proportional to

(a) n  (b) n^2  (c) n^3  (d) 1/n^2

**ANSWER: (c) n^3.**  `T = 2 pi r / v ~ (n^2)/(1/n) = n^3`

---

### Q4.6
The frequency of revolution of the electron in the ground state of hydrogen is
about

(a) 6.58 x 10^15 Hz  (b) 6.58 x 10^12 Hz  (c) 1.52 x 10^-16 Hz  (d) 3 x 10^8 Hz

**ANSWER: (a)**
```
   T = 2 pi r1 / v1 = 2 x 3.14 x 0.529e-10 / 2.18e6 = 1.52 x 10^-16 s
   f = 1/T = 6.58 x 10^15 Hz
```

---

### Q4.7
The equivalent current due to the electron in the ground state of hydrogen is
about

(a) 1.05 mA  (b) 1.05 A  (c) 1.6 x 10^-19 A  (d) 6.58 A

**ANSWER: (a) 1.05 mA.**  `I = e/T = 1.6e-19 / 1.52e-16 = 1.05e-3 A`

---

# PATTERN 5 — ENERGY OF A BOHR ORBIT

```
                          Z^2
     E_n  =   - 13.6  x  -----  eV        K = -E ,  U = 2E ,  U = -2K
                          n^2
```

### Q5.1
The energy of an electron in the second excited state of hydrogen is

(a) -3.4 eV  (b) -1.51 eV  (c) -0.85 eV  (d) -13.6 eV

**ANSWER: (b) -1.51 eV.**

> **SHORTCUT / TRAP:** "second excited state" means **n = 3**, not n = 2.
> Ground = n1, 1st excited = n2, 2nd excited = n3.

---

### Q5.2
The kinetic energy of the electron in the first excited state of hydrogen is

(a) -3.4 eV  (b) +3.4 eV  (c) +6.8 eV  (d) -6.8 eV

**ANSWER: (b) +3.4 eV.**  `E2 = -3.4 eV`, and `K = -E = +3.4 eV`.

---

### Q5.3
The potential energy of the electron in the ground state of hydrogen is

(a) -13.6 eV  (b) -27.2 eV  (c) +13.6 eV  (d) +27.2 eV

**ANSWER: (b) -27.2 eV.**  `U = 2E = 2 x (-13.6)`

---

### Q5.4
If the total energy of an electron in a hydrogen atom is -0.85 eV, the
quantum number n is

(a) 2  (b) 3  (c) 4  (d) 5

**ANSWER: (c) 4.**  `n^2 = 13.6/0.85 = 16`

---

### Q5.5
The ionisation energy of hydrogen from the **first excited state** is

(a) 13.6 eV  (b) 10.2 eV  (c) 3.4 eV  (d) 1.51 eV

**ANSWER: (c) 3.4 eV.**  From n = 2:  `0 - (-3.4) = 3.4 eV`

> **TRAP:** "Ionisation energy" without qualification means **from the ground
> state** (13.6 eV). If the question names a level, use that level.

---

### Q5.6
The energy needed to excite a hydrogen atom from the ground state to n = 4 is

(a) 10.2 eV  (b) 12.09 eV  (c) 12.75 eV  (d) 13.6 eV

**ANSWER: (c) 12.75 eV.**  `-0.85 - (-13.6) = 12.75 eV`

---

### Q5.7
As n increases, the energy levels of hydrogen

(a) get further apart  (b) get closer together  (c) stay equally spaced
(d) become positive

**ANSWER: (b) get closer together**, since E ∝ -1/n^2 and all levels
converge on 0 as n -> infinity.

---

# PATTERN 6 — WAVELENGTH OF A TRANSITION

```
      1                +-  1        1   -+                  12400
   -------- = R Z^2    | ----- - -----   |     lambda(A) = -----------
    lambda             +- n1^2   n2^2   -+                  E (eV)
```

### Q6.1
The wavelength of the photon emitted in the transition n = 3 to n = 2 in
hydrogen is

(a) 1216 A  (b) 4861 A  (c) 6563 A  (d) 3646 A

**ANSWER: (c) 6563 A** (the red H-alpha line).
```
   Delta E = -1.51 - (-3.40) = 1.89 eV
   lambda  = 12400 / 1.89 = 6561 A
```

---

### Q6.2
An electron falls from n = 4 to n = 2 in hydrogen. The emitted photon has
energy and wavelength

(a) 2.55 eV, 4861 A  (b) 1.89 eV, 6563 A  (c) 12.75 eV, 972 A  (d) 10.2 eV, 1216 A

**ANSWER: (a)**
```
   E4 = -0.85 , E2 = -3.40  ->  Delta E = 2.55 eV
   lambda = 12400 / 2.55 = 4863 A
```

---

### Q6.3
The photon of **maximum** energy in the Lyman series has energy

(a) 10.2 eV  (b) 12.09 eV  (c) 13.6 eV  (d) 3.4 eV

**ANSWER: (c) 13.6 eV** — the series limit, from n = infinity down to n = 1.

---

### Q6.4
The frequency of the radiation emitted when a hydrogen atom goes from n = 2
to n = 1 is about

(a) 2.46 x 10^15 Hz  (b) 6.58 x 10^15 Hz  (c) 4.57 x 10^14 Hz  (d) 1.09 x 10^7 Hz

**ANSWER: (a)**
```
   Delta E = 10.2 eV = 10.2 x 1.6e-19 = 1.632e-18 J
   nu = E/h = 1.632e-18 / 6.63e-34 = 2.46 x 10^15 Hz
```

---

### Q6.5
A hydrogen atom in the ground state absorbs a photon of 12.09 eV. The electron
goes to

(a) n = 2  (b) n = 3  (c) n = 4  (d) it is ionised

**ANSWER: (b) n = 3.**  `E1 + 12.09 = -13.6 + 12.09 = -1.51 eV = E3`

---

### Q6.6
Which of these photon energies can a ground-state hydrogen atom **NOT**
absorb?

(a) 10.2 eV  (b) 12.09 eV  (c) 12.75 eV  (d) 11.0 eV

**ANSWER: (d) 11.0 eV.** The atom can only absorb energies that land it
exactly on a level: 10.2, 12.09, 12.75, 13.06 ... 11.0 eV corresponds to no
level, so the photon simply passes by.

> **SHORTCUT:** For absorption from the ground state, the allowed energies are
> `13.6 (1 - 1/n^2)` = 10.2, 12.09, 12.75, 13.06, 13.22, ... and then 13.6.
> Anything in between is impossible.

---

# PATTERN 7 — SERIES: LONGEST, SHORTEST, WHICH REGION

```
   FIRST line of a series   ->  n2 = n1 + 1  ->  LONGEST wavelength
   SERIES LIMIT             ->  n2 = infinity ->  SHORTEST = n1^2 / R
```

### Q7.1
Which series of the hydrogen spectrum lies in the visible region?

(a) Lyman  (b) Balmer  (c) Paschen  (d) Pfund

**ANSWER: (b) Balmer.**

---

### Q7.2
The shortest wavelength of the Lyman series is

(a) 912 A  (b) 1216 A  (c) 3646 A  (d) 6563 A

**ANSWER: (a) 912 A.**  `lambda = n1^2/R = 1/1.097e7`

---

### Q7.3
The ratio of the shortest wavelengths of the Lyman, Balmer and Paschen series
is

(a) 1 : 2 : 3  (b) 1 : 4 : 9  (c) 9 : 4 : 1  (d) 1 : 8 : 27

**ANSWER: (b) 1 : 4 : 9.**  `lambda(limit) = n1^2 / R`, and n1 = 1, 2, 3.

---

### Q7.4
If the longest wavelength of the Balmer series is L, the longest wavelength of
the Lyman series is

(a) 5L/27  (b) 27L/5  (c) L/4  (d) 4L/3

**ANSWER: (a) 5L/27**
```
   Balmer longest  =  36 / (5R)
   Lyman  longest  =   4 / (3R)

   Ratio = (4/3) / (36/5) = (4/3)(5/36) = 20/108 = 5/27

   Check numerically: 1216 / 6563 = 0.185 = 5/27.  Correct.
```

---

### Q7.5
The ratio of the longest wavelength to the shortest wavelength in the Lyman
series is

(a) 4 : 3  (b) 3 : 4  (c) 9 : 5  (d) 27 : 5

**ANSWER: (a) 4 : 3.**  `[4/(3R)] / [1/R] = 4/3`, i.e. 1216 / 912 = 1.33.

---

### Q7.6
The transition giving the H-beta line (4861 A) of the Balmer series is

(a) 3 -> 2  (b) 4 -> 2  (c) 5 -> 2  (d) 4 -> 3

**ANSWER: (b) 4 -> 2.**

---

### Q7.7
Which of these series lies entirely in the infrared?

(a) Lyman  (b) Balmer  (c) Paschen  (d) none

**ANSWER: (c) Paschen** (as do Brackett and Pfund).

---

# PATTERN 8 — NUMBER OF SPECTRAL LINES

```
                n ( n - 1 )                                ( n2 - n1 )( n2 - n1 + 1 )
    from n:  N = -----------      from n1 to n2:      N =  --------------------------
                      2                                                 2
```

### Q8.1
Hydrogen atoms are excited to the n = 5 state. The number of spectral lines
emitted is

(a) 4  (b) 6  (c) 10  (d) 15

**ANSWER: (c) 10.**  `5 x 4 / 2 = 10`

---

### Q8.2
The number of lines in the **Balmer series** produced when hydrogen atoms
de-excite from n = 6 is

(a) 15  (b) 6  (c) 4  (d) 5

**ANSWER: (c) 4.** Balmer lines all land on n = 2, so only 6->2, 5->2, 4->2
and 3->2 exist. **Four.**

> **SHORTCUT:** "Total lines" -> n(n-1)/2. "Lines of ONE named series" ->
> just count how many upper levels can drop onto that n1, which is (n - n1).

---

### Q8.3
Hydrogen atoms are excited from n = 2 to n = 6. The number of possible
emission lines is

(a) 15  (b) 10  (c) 6  (d) 4

**ANSWER: (b) 10.**  `(6-2)(6-2+1)/2 = 4 x 5 / 2 = 10`

---

### Q8.4
A **single** hydrogen atom in the n = 3 state can emit at most how many
photons before reaching the ground state?

(a) 1  (b) 2  (c) 3  (d) 6

**ANSWER: (b) 2** (via 3 -> 2 -> 1).

> **TRAP:** n(n-1)/2 = 3 is for a **sample** of many atoms. A single atom
> follows only one route down. Read whether it says "an atom" or "a gas".

---

# PATTERN 9 — HYDROGEN-LIKE IONS (He+, Li2+, Be3+)

```
     r ~ n^2/Z          v ~ Z/n          E = -13.6 Z^2/n^2 eV
```

### Q9.1
The ionisation energy of He+ is

(a) 13.6 eV  (b) 27.2 eV  (c) 54.4 eV  (d) 122.4 eV

**ANSWER: (c) 54.4 eV.**  `13.6 x Z^2 = 13.6 x 4`

---

### Q9.2
The energy of the electron in the n = 2 orbit of He+ is

(a) -3.4 eV  (b) -13.6 eV  (c) -27.2 eV  (d) -54.4 eV

**ANSWER: (b) -13.6 eV.**  `-13.6 x 4/4`. This equals the ground state
energy of hydrogen — a favourite question.

---

### Q9.3
The energy of the electron in the ground state of Li2+ is

(a) -13.6 eV  (b) -40.8 eV  (c) -122.4 eV  (d) -217.6 eV

**ANSWER: (c) -122.4 eV.**  `-13.6 x 9`

---

### Q9.4
The wavelength of the first line of the Lyman series of He+ compared with that
of hydrogen (1216 A) is

(a) 1216 A  (b) 608 A  (c) 304 A  (d) 4864 A

**ANSWER: (c) 304 A.**  Wavelength scales as `1/Z^2`, so 1216/4 = 304 A.

---

### Q9.5
For which of these does the ground state radius equal 0.529/2 A?

(a) H  (b) He+  (c) Li2+  (d) Be3+

**ANSWER: (b) He+.**  `r = 0.529 n^2/Z = 0.529/2` when Z = 2, n = 1.

---

# PATTERN 10 — DE BROGLIE WAVELENGTH IN AN ORBIT

```
     2 pi r  =  n lambda        =>       lambda = 2 pi r / n     ~   n / Z
```

### Q10.1
The number of de Broglie wavelengths contained in the third Bohr orbit is

(a) 1  (b) 3  (c) 6  (d) 9

**ANSWER: (b) 3.** The nth orbit holds exactly n wavelengths.

---

### Q10.2
The de Broglie wavelength of the electron in the ground state of hydrogen is

(a) 0.529 A  (b) 1.06 A  (c) 3.32 A  (d) 6.64 A

**ANSWER: (c) 3.32 A.**
```
   lambda = 2 pi r1 / 1 = 2 x 3.14 x 0.529 = 3.32 A
```

---

### Q10.3
The de Broglie wavelength of the orbiting electron is proportional to

(a) n  (b) n^2  (c) 1/n  (d) n^3

**ANSWER: (a) n.**  `lambda = 2 pi r/n ~ (n^2)/n = n`

---

### Q10.4
De Broglie's condition explains which postulate of Bohr?

(a) the first  (b) the second  (c) the third  (d) none

**ANSWER: (b) the second** — the quantisation of angular momentum.

---

# PATTERN 11 — PURE SCALING / RATIO QUESTIONS

```
  MEMORISE THIS ROW OF EXPONENTS AND MOST EAPCET QUESTIONS DIE IN 5 SECONDS

     r ~ n^2/Z    v ~ Z/n    E ~ Z^2/n^2    L ~ n    T ~ n^3/Z^2
     f ~ Z^2/n^3  I ~ Z^2/n^3   a ~ Z^3/n^4   lambda(dB) ~ n/Z
```

### Q11.1
The centripetal acceleration of the electron in the nth Bohr orbit is
proportional to

(a) 1/n^2  (b) 1/n^3  (c) 1/n^4  (d) 1/n

**ANSWER: (c) 1/n^4.**  `a = v^2/r ~ (1/n^2)/(n^2) = 1/n^4`

---

### Q11.2
The ratio of the time periods of revolution in the n = 2 and n = 1 orbits of
hydrogen is

(a) 2 : 1  (b) 4 : 1  (c) 8 : 1  (d) 1 : 8

**ANSWER: (c) 8 : 1.**  T ∝ n^3, and 2^3 = 8.

---

### Q11.3
If the electron in a hydrogen atom jumps from n = 2 to n = 1, the magnitude of
its kinetic energy

(a) is halved  (b) becomes four times  (c) is unchanged  (d) becomes 1/4

**ANSWER: (b) becomes four times.**  `K ~ 1/n^2`, so going 2 -> 1 multiplies
K by 4 (from 3.4 eV to 13.6 eV).

---

### Q11.4
The product of the radius and the velocity of the electron in the nth orbit is
proportional to

(a) n  (b) n^2  (c) 1/n  (d) n^3

**ANSWER: (a) n.**  `r v ~ (n^2/Z)(Z/n) = n`. (Of course — because
`m v r = n h/2 pi`.)

---

### Q11.5
The magnetic field produced at the nucleus by the orbiting electron
(B = mu0 I / 2r) is proportional to

(a) Z^2/n^3  (b) Z^3/n^5  (c) Z^5/n^7  (d) Z/n

**ANSWER: (b) Z^3 / n^5**
```
   I  ~  Z^2 / n^3        and        r  ~  n^2 / Z

               I         Z^2        Z          Z^3
   B  ~     -------  ~  ------  x  -----  =  --------
                r        n^3        n^2        n^5
```

> **SHORTCUT:** "Divide by r" always means "multiply by Z / n^2".
> That single move solves every composite-scaling question.

---

# PATTERN 12 — THEORY AND STATEMENT QUESTIONS

### Q12.1
The alpha particle scattering experiment proved that

(a) electrons are negative  (b) the atom is mostly empty space with a tiny
massive nucleus  (c) energy is quantised  (d) electrons behave as waves

**ANSWER: (b).**

---

### Q12.2
Rutherford's model failed because

(a) it could not explain the neutron  (b) an accelerated electron radiates and
would spiral into the nucleus  (c) it assumed a nucleus  (d) alphas were
deflected

**ANSWER: (b).**

---

### Q12.3
Which of these is **not** a limitation of Bohr's model?

(a) it fails for multi-electron atoms  (b) it cannot explain the Zeeman effect
(c) it cannot explain the stability of the hydrogen atom  (d) it violates the
uncertainty principle

**ANSWER: (c).** Explaining the **stability** of the atom is precisely what
Bohr's model **succeeded** at.

---

### Q12.4
The Bohr model can be applied successfully to

(a) He  (b) Li  (c) He+  (d) H2

**ANSWER: (c) He+** — it has only one electron.

---

### Q12.5
In an absorption spectrum, the dark lines appear

(a) at random positions  (b) at exactly the same wavelengths as the emission
lines of the same element  (c) only in the ultraviolet  (d) only for solids

**ANSWER: (b).**

---

### Q12.6
The Franck–Hertz experiment demonstrated

(a) the wave nature of the electron  (b) that atomic energy levels are
discrete  (c) the existence of the nucleus  (d) the photoelectric effect

**ANSWER: (b).** The anode current dips at every 4.9 V for mercury, proving
that an atom can absorb only fixed amounts of energy.

---

### Q12.7
Which quantity is **different** for the electron in the ground state of H and
in the n = 2 state of He+?

(a) total energy  (b) speed  (c) kinetic energy  (d) radius

**ANSWER: (d) radius.**
```
   H  (Z=1, n=1):  E = -13.6 eV ,  v = 2.18e6 m/s ,  r = 0.529 A
   He+(Z=2, n=2):  E = -13.6 x 4/4 = -13.6 eV
                   v = 2.18e6 x 2/2 = 2.18e6 m/s
                   r = 0.529 x 4/2 = 1.058 A     <-- DIFFERENT
```
Whenever **n/Z** is the same, the energy and the speed match; the radius does
not, because r ~ n^2/Z carries an extra factor of n.

---

### Q12.8
The energy of the electron in a Bohr orbit is negative because

(a) the electron is negative  (b) the electron is bound to the nucleus
(c) the nucleus is positive  (d) energy is always negative

**ANSWER: (b).**

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+-------------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY                |
  +--------------------------------------+-------------------------------------+
  |  "distance of closest approach"      |  r0 = 2Ze^2 / (4 pi eps0 K).        |
  |                                      |  Convert MeV -> J first.            |
  +--------------------------------------+-------------------------------------+
  |  "scattered through 180 degrees"     |  b = 0. Answer instantly.           |
  +--------------------------------------+-------------------------------------+
  |  "impact parameter" + an angle       |  cot(theta/2). At 90 deg, cot45 = 1.|
  +--------------------------------------+-------------------------------------+
  |  "radius of the nth orbit"           |  0.529 n^2 / Z angstrom.            |
  +--------------------------------------+-------------------------------------+
  |  "angular momentum"                  |  n h / 2 pi. IGNORE Z completely.   |
  +--------------------------------------+-------------------------------------+
  |  "second excited state"              |  n = 3.  (kth excited -> n = k+1)   |
  +--------------------------------------+-------------------------------------+
  |  "kinetic energy" in an orbit        |  = -E = +13.6 Z^2/n^2 eV            |
  +--------------------------------------+-------------------------------------+
  |  "potential energy" in an orbit      |  = 2E = -27.2 Z^2/n^2 eV            |
  +--------------------------------------+-------------------------------------+
  |  "ionisation energy" (no level named)|  13.6 Z^2 eV, from the GROUND state.|
  +--------------------------------------+-------------------------------------+
  |  wavelength wanted, energy known     |  lambda(A) = 12400 / E(eV). Done.   |
  +--------------------------------------+-------------------------------------+
  |  "first line of the series"          |  n2 = n1 + 1 -> LONGEST wavelength. |
  +--------------------------------------+-------------------------------------+
  |  "series limit" / "shortest"         |  n2 = infinity -> lambda = n1^2 / R |
  +--------------------------------------+-------------------------------------+
  |  "how many spectral lines"           |  n(n-1)/2 for a SAMPLE.             |
  |                                      |  For ONE atom the max is n-1 jumps. |
  +--------------------------------------+-------------------------------------+
  |  "lines of the Balmer series only"   |  count = n - 2 . Not n(n-1)/2.      |
  +--------------------------------------+-------------------------------------+
  |  He+ / Li2+ / Be3+                   |  Put Z = 2 / 3 / 4. Energy gets Z^2,|
  |                                      |  radius gets 1/Z.                   |
  +--------------------------------------+-------------------------------------+
  |  "number of de Broglie wavelengths"  |  = n . Nothing to calculate.        |
  +--------------------------------------+-------------------------------------+
  |  a ratio question with n or Z        |  Use the exponent row. Never plug   |
  |                                      |  in real numbers.                   |
  +--------------------------------------+-------------------------------------+
  |  Unsure, and it is EAPCET            |  GUESS. There is NO negative        |
  |                                      |  marking. Never leave a blank.      |
  +--------------------------------------+-------------------------------------+
  |  Unsure, and it is JEE Main          |  Skip it. -1 for a wrong answer.    |
  +--------------------------------------+-------------------------------------+
```

## The one-line cheat row to write down first in the exam

```
     r ~ n^2/Z     v ~ Z/n     E ~ Z^2/n^2     L ~ n     T ~ n^3/Z^2

     0.529 A       2.18e6 m/s      -13.6 eV      R = 1.097e7      12400/E
```
