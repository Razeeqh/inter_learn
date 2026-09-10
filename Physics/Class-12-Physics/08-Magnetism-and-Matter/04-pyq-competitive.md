# Magnetism and Matter — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Physics, 40 questions)  ->  1 to 2
  JEE Main        (Physics, 25 questions)  ->  1  (often merged with
                                                Ch 7, Moving Charges)
```

**The good news:** most of the questions are either a **direct formula plug-in** or a
**one-line recall** (which material is diamagnetic, what is coercivity). Very few need
real thinking.

---

# PATTERN 1 — Magnetic moment, cutting and bending a magnet

### Q1
A bar magnet of magnetic moment `M` is cut into two equal pieces **perpendicular** to
its length. The magnetic moment of each piece is

(a) `2M` &nbsp; (b) `M` &nbsp; (c) `M/2` &nbsp; (d) zero

**ANSWER: (c)**
```
  Pole strength m stays the SAME; the length becomes half.

        M'  =  m x (2l/2)  =  M / 2
```

---

### Q2
A bar magnet of magnetic moment `M` is cut into two equal pieces **parallel** to its
length. The moment of each piece is

(a) `M` &nbsp; (b) `M/2` &nbsp; (c) `M/4` &nbsp; (d) `2M`

**ANSWER: (b)**
```
  Now the LENGTH is unchanged but the pole face area is halved,
  so the pole strength m becomes m/2.

        M'  =  (m/2) x 2l  =  M / 2
```
> **SHORTCUT:** cutting into **two** pieces ALWAYS halves the moment, whichever
> direction you cut. Do not waste time deciding which factor changed.

---

### Q3
A thin bar magnet of length `L` and moment `M` is bent into a **semicircle**. Its new
magnetic moment is

(a) `M` &nbsp; (b) `2M / pi` &nbsp; (c) `M / pi` &nbsp; (d) `pi M / 2`

**ANSWER: (b)**
```
  Pole strength m is unchanged; only the SEPARATION of the poles changes.

  Arc length  =  L  =  pi R      ->     R  =  L / pi

  New separation = the DIAMETER = 2R = 2L / pi

        M'  =  m x (2L/pi)  =  (2/pi) x (m L)  =  2M / pi
```

---

### Q4
A bar magnet of moment `M` is bent at its middle so that the two halves make an angle of
**60 degrees**. The new moment is

(a) `M` &nbsp; (b) `M/2` &nbsp; (c) `M/sqrt(2)` &nbsp; (d) `2M`

**ANSWER: (b)**
```
  Each arm has length L/2. The distance between the free ends is

        d  =  2 (L/2) sin(60/2)  =  L sin(30)  =  L / 2

        M'  =  m (L/2)  =  M / 2

  GENERAL RULE :  bent at angle theta  ->  M' = M sin(theta/2)
        theta = 60   ->  M' = M/2
        theta = 90   ->  M' = M / sqrt(2)
        theta = 180  ->  M' = 0    (the two halves cancel)
```

---

### Q5
A wire of length `L` carrying current `I` is bent into a circular coil of `n` turns. The
magnetic moment of the coil is proportional to

(a) `n` &nbsp; (b) `n^2` &nbsp; (c) `1/n` &nbsp; (d) `1/n^2`

**ANSWER: (c)**
```
        n (2 pi r)  =  L        ->     r  =  L / (2 pi n)

                        L^2            L^2
        A  =  pi r^2 = --------- = ------------
                       4 pi n^2      4 pi n^2

                             L^2          I L^2
        M  =  n I A  =  n I ---------- = ---------
                            4 pi n^2      4 pi n

        ==>   M  is proportional to  1 / n
```

---

### Q6
A closely wound solenoid of 800 turns and cross-sectional area 2.5 x 10^-4 m^2 carries a
current of 3.0 A. Its magnetic moment is

(a) `0.30 A m^2` &nbsp; (b) `0.60 A m^2` &nbsp; (c) `1.2 A m^2` &nbsp; (d) `6.0 A m^2`

**ANSWER: (b)**
```
        M  =  N I A  =  800 x 3.0 x 2.5 x 10^-4  =  0.60  A m^2
```

---

### Q7
Two identical bar magnets, each of moment `M`, are placed at **right angles** to each
other with their centres coinciding. The resultant magnetic moment is

(a) `2M` &nbsp; (b) `M sqrt(2)` &nbsp; (c) `M/2` &nbsp; (d) zero

**ANSWER: (b)**
```
  Moments are VECTORS. Two equal perpendicular vectors:

        M(net)  =  sqrt( M^2 + M^2 )  =  M sqrt(2)
```

---

# PATTERN 2 — Axial and equatorial fields

### Q8
The ratio of the magnetic fields on the axial line and the equatorial line of a short bar
magnet, at the same distance, is

(a) `1 : 1` &nbsp; (b) `1 : 2` &nbsp; (c) `2 : 1` &nbsp; (d) `4 : 1`

**ANSWER: (c)**
```
        B(axial) = (mu0/4pi) 2M/r^3
        B(equat) = (mu0/4pi)  M/r^3

        ratio  =  2 : 1
```
> **SHORTCUT:** "**A**xial has the **2**." Just remember the digit 2 goes with A.

---

### Q9
A short bar magnet of moment 0.4 A m^2 produces a field on its axis at 20 cm from the
centre of

(a) `1 x 10^-5 T` &nbsp; (b) `2 x 10^-5 T` &nbsp; (c) `5 x 10^-6 T` &nbsp;
(d) `4 x 10^-4 T`

**ANSWER: (a)**
```
        r = 0.20 m       r^3 = 8 x 10^-3

                          2 x 0.4              0.8
        B = 10^-7  x  --------------  = 10^-7 -------- = 10^-7 x 100
                       8 x 10^-3              0.008

        B  =  1 x 10^-5  T
```

---

### Q10
The magnetic field of a short dipole at a point on its axis at distance `r1` equals the
field at a point on its equatorial line at distance `r2`. Then `r1 : r2` is

(a) `1 : 2` &nbsp; (b) `2 : 1` &nbsp; (c) `2^(1/3) : 1` &nbsp; (d) `1 : 2^(1/3)`

**ANSWER: (c)**
```
             2 M        M
           -------  =  -------          ->     r1^3  =  2 r2^3
             r1^3       r2^3

           r1 / r2  =  2^(1/3)  =  1.26
```

---

### Q11
The magnetic field due to a short bar magnet at a distance `r` varies as

(a) `1/r` &nbsp; (b) `1/r^2` &nbsp; (c) `1/r^3` &nbsp; (d) `1/r^4`

**ANSWER: (c)**
```
  DIPOLE fields go as 1/r^3 (both electric and magnetic).
  A single POLE would give 1/r^2, but single poles do not exist.
```

---

### Q12
At a point on the axis of a short magnet the field is `B`. At the same distance on the
equatorial line the field is `B/2`. The angle between the two field directions is

(a) `0` &nbsp; (b) `90 degrees` &nbsp; (c) `180 degrees` &nbsp; (d) `45 degrees`

**ANSWER: (c)**
```
  Axial field is PARALLEL to M.
  Equatorial field is ANTI-PARALLEL to M.
  ==>  the two are 180 degrees apart.
```

---

### Q13
The magnetic field of a short dipole at a point at distance `r` making an angle `theta`
with the axis is

**ANSWER:**
```
             mu0     M
        B = ------ ------ sqrt( 1 + 3 cos^2(theta) )
             4 pi    r^3

        and       tan(alpha)  =  (1/2) tan(theta)
                  (alpha = angle between B and the line r)

  CHECK   theta = 0   ->  sqrt(1+3) = 2   ->  axial      ✓
          theta = 90  ->  sqrt(1+0) = 1   ->  equatorial ✓
```

---

# PATTERN 3 — Torque, energy and work

### Q14
A magnet of moment `M` is placed in a uniform field `B`. The torque is maximum when the
angle between `M` and `B` is

(a) `0` &nbsp; (b) `45 deg` &nbsp; (c) `90 deg` &nbsp; (d) `180 deg`

**ANSWER: (c)** `tau = MB sin(theta)`, maximum at `sin(theta) = 1`, i.e. 90 degrees.

---

### Q15
A short bar magnet of moment 0.32 J/T is placed in a uniform field of 0.15 T. The
potential energy in the **stable** and **unstable** positions is

(a) `-0.048 J, +0.048 J` &nbsp; (b) `+0.048 J, -0.048 J` &nbsp;
(c) `-0.048 J, 0` &nbsp; (d) `0, 0.048 J`

**ANSWER: (a)**
```
        M B  =  0.32 x 0.15  =  0.048  J

        STABLE   (theta = 0)   :  U = -MB  =  -0.048  J
        UNSTABLE (theta = 180) :  U = +MB  =  +0.048  J
```

---

### Q16
The work done in rotating a magnet of moment `M` from a position of stable equilibrium
to a position of unstable equilibrium in a field `B` is

(a) `MB` &nbsp; (b) `2MB` &nbsp; (c) `MB/2` &nbsp; (d) zero

**ANSWER: (b)**
```
        W  =  MB ( cos 0 - cos 180 )  =  MB ( 1 + 1 )  =  2 M B
```

---

### Q17
The ratio of the work done in rotating a magnet from 0 to 60 degrees and from 0 to 90
degrees in a uniform field is

(a) `1 : 2` &nbsp; (b) `2 : 1` &nbsp; (c) `1 : 1` &nbsp; (d) `sqrt(3) : 2`

**ANSWER: (a)**
```
        W1  =  MB ( 1 - cos 60 )  =  MB ( 1 - 0.5 )  =  0.5 MB
        W2  =  MB ( 1 - cos 90 )  =  MB ( 1 - 0   )  =  1.0 MB

        W1 : W2  =  1 : 2
```

---

### Q18
A magnetic dipole in a **uniform** magnetic field experiences

(a) a force but no torque &nbsp; (b) a torque but no net force &nbsp;
(c) both a force and a torque &nbsp; (d) neither

**ANSWER: (b)**
```
  The two poles feel EQUAL and OPPOSITE forces  ->  net force = 0.
  The forces are not collinear                  ->  a COUPLE acts.

  In a NON-UNIFORM field there IS a net force as well.
```
> **SHORTCUT:** the word **"uniform"** in the stem is the whole question. Uniform ->
> torque only.

---

### Q19
The potential energy of a magnetic dipole is minimum when the angle between `M` and `B`
is

(a) `0` &nbsp; (b) `90 deg` &nbsp; (c) `180 deg` &nbsp; (d) `45 deg`

**ANSWER: (a)** `U = -MB cos(theta)`; minimum `= -MB` at `theta = 0` (stable
equilibrium).

---

# PATTERN 4 — Oscillations of a magnet (SHM)

### Q20
The time period of a magnet oscillating in a magnetic field `B` is `T`. If `B` is made
**four times** larger, the new period is

(a) `4T` &nbsp; (b) `2T` &nbsp; (c) `T/2` &nbsp; (d) `T/4`

**ANSWER: (c)**
```
        T  is proportional to  1 / sqrt(B)

        B -> 4B    ->    T  ->  T / sqrt(4)  =  T / 2
```

---

### Q21
A magnet makes 20 oscillations per minute at a place. At another place where `B(H)` is
**nine times** larger, the number of oscillations per minute will be

(a) `20` &nbsp; (b) `40` &nbsp; (c) `60` &nbsp; (d) `180`

**ANSWER: (c)**
```
        frequency  f  is proportional to  sqrt(B)

        f'  =  20 x sqrt(9)  =  20 x 3  =  60 per minute
```

---

### Q22
A bar magnet oscillating with period `T` is cut into two equal parts **perpendicular** to
its length. One part oscillates in the same field with period

(a) `T` &nbsp; (b) `T/2` &nbsp; (c) `T/4` &nbsp; (d) `2T`

**ANSWER: (b)**
```
  Original :  I  =  W L^2 / 12 ,  moment  M

  Half piece :  mass W/2 , length L/2

        I'  =  (W/2)(L/2)^2 / 12  =  W L^2 / 96  =  I / 8
        M'  =  M / 2

                     +-           -+          +-        -+
                     |   I / 8     |          |    I     |
        T' = 2 pi sqrt| ----------- | = 2 pi sqrt| ------- |  = T / 2
                     | (M/2) B     |          |  4 M B   |
                     +-           -+          +-        -+
```
> **SHORTCUT:** memorise the result. "Cut in half across the length -> **period halves**."

---

### Q23
Two magnets of moments `M1` and `M2` are tied together and oscillate in the earth's
field. With like poles together the period is `T1`; with unlike poles together it is
`T2`. Then `M1/M2` equals

(a) `(T2^2 + T1^2)/(T2^2 - T1^2)` &nbsp; (b) `(T1^2 + T2^2)/(T1^2 - T2^2)` &nbsp;
(c) `T1/T2` &nbsp; (d) `T2/T1`

**ANSWER: (a)**
```
  Like poles together   ->   M(sum)  =  M1 + M2    (period T1)
  Unlike poles together ->   M(diff) =  M1 - M2    (period T2)

        T^2  is proportional to  1 / M

             T2^2       M1 + M2
            ------  =  ---------
             T1^2       M1 - M2

  Componendo and dividendo :

             M1        T2^2 + T1^2
            ----  =  ---------------
             M2        T2^2 - T1^2
```

---

### Q24
A magnetic needle of moment 6.7 x 10^-2 A m^2 and moment of inertia 7.5 x 10^-6 kg m^2
makes 10 complete oscillations in 6.70 s. The magnitude of the magnetic field is
approximately

(a) `0.01 T` &nbsp; (b) `0.1 T` &nbsp; (c) `1 T` &nbsp; (d) `0.001 T`

**ANSWER: (a)**
```
        T  =  6.70 / 10  =  0.67  s          T^2 = 0.4489

               4 pi^2 I           4 x 9.8696 x 7.5 x 10^-6
        B  =  -----------  =  ------------------------------
                M T^2            6.7 x 10^-2  x  0.4489

               2.961 x 10^-4
           =  ---------------  =  9.84 x 10^-3  T
               3.008 x 10^-2

        B  is about  0.01  T
```

---

# PATTERN 5 — The earth's magnetic field

### Q25
At the **magnetic equator** of the earth, the angle of dip is

(a) `0` &nbsp; (b) `30 deg` &nbsp; (c) `45 deg` &nbsp; (d) `90 deg`

**ANSWER: (a)** At the magnetic equator the field is entirely horizontal, so
`B(V) = 0` and the dip is zero.

---

### Q26
At a place where the angle of dip is 45 degrees,

(a) `B(H) = 0` &nbsp; (b) `B(V) = 0` &nbsp; (c) `B(H) = B(V)` &nbsp;
(d) `B(H) = 2 B(V)`

**ANSWER: (c)**
```
        tan(45)  =  B(V) / B(H)  =  1     ->     B(V) = B(H)

        and       B  =  B(H) sqrt(2)
```

---

### Q27
A compass needle fails to indicate direction at the earth's magnetic poles because

(a) `B(V) = 0` &nbsp; (b) `B(H) = 0` &nbsp; (c) `B = 0` &nbsp; (d) dip is zero

**ANSWER: (b)** At the poles the dip is 90 degrees, so `B(H) = B cos 90 = 0`. A compass
turns only horizontally and has no aligning torque there.

---

### Q28
At a place `B(H) = 0.34 gauss` and the dip is 30 degrees. The total field is

(a) `0.17 G` &nbsp; (b) `0.39 G` &nbsp; (c) `0.68 G` &nbsp; (d) `0.20 G`

**ANSWER: (b)**
```
        B(H)  =  B cos(30)

               0.34        0.34
        B  =  --------  = -------  =  0.393  gauss
               cos 30      0.866
```

---

### Q29
The apparent angle of dip in a vertical plane making an angle of 60 degrees with the
magnetic meridian, at a place where the true dip is 30 degrees, is nearest to

(a) `30 deg` &nbsp; (b) `49 deg` &nbsp; (c) `60 deg` &nbsp; (d) `90 deg`

**ANSWER: (b)**
```
                        tan(d)          tan 30        0.5774
        tan(d')  =  --------------  =  --------  =  ---------  =  1.1547
                      cos(alpha)        cos 60         0.5

        d'  =  49.1  degrees      (apparent dip is always MORE than true dip)
```

---

### Q30
The apparent dips in two mutually perpendicular vertical planes are 30 degrees and 45
degrees. The true dip is

(a) `26.6 deg` &nbsp; (b) `37.5 deg` &nbsp; (c) `45 deg` &nbsp; (d) `60 deg`

**ANSWER: (a)**
```
        cot^2(d)  =  cot^2(30)  +  cot^2(45)
                  =  (sqrt 3)^2  +  1^2
                  =  3 + 1  =  4

        cot(d)  =  2      ->     tan(d) = 0.5     ->    d = 26.57 degrees
```

---

### Q31
A short bar magnet placed with its N pole pointing **geographic south** gives neutral
points at a distance `d`. The condition satisfied is

(a) `(mu0/4pi) M/d^3 = B(H)` &nbsp; (b) `(mu0/4pi) 2M/d^3 = B(H)` &nbsp;
(c) `(mu0/4pi) M/d^2 = B(H)` &nbsp; (d) `M/d^3 = B(V)`

**ANSWER: (b)**
```
  N pole to the SOUTH  ->  neutral points on the AXIAL line
                       ->  use the AXIAL formula (the one with the 2).

  N pole to the NORTH  ->  neutral points on the EQUATORIAL line
                       ->  use the formula WITHOUT the 2.
```
> **SHORTCUT:** "**N**orth pole to the **N**orth -> **N**ot the 2 (equatorial)."

---

### Q32
The lines joining places of equal **dip** on a magnetic map are called

(a) isogonic lines &nbsp; (b) agonic lines &nbsp; (c) isoclinic lines &nbsp;
(d) isodynamic lines

**ANSWER: (c)**
```
  isoGONIC   -> equal declination      (GON = angle from true north)
  aGONIC     -> ZERO declination
  isoCLINIC  -> equal DIP              (CLINE = to lean / incline)
  aCLINIC    -> ZERO dip = magnetic equator
  isoDYNAMIC -> equal B(H)
```

---

# PATTERN 6 — Magnetisation, intensity, susceptibility

### Q33
The relation between `B`, `H` and `M` is

(a) `B = mu0(H - M)` &nbsp; (b) `B = mu0(H + M)` &nbsp; (c) `B = mu0 H M` &nbsp;
(d) `B = H + mu0 M`

**ANSWER: (b)** `B = mu0 (H + M)`.

---

### Q34
The SI unit of magnetic susceptibility is

(a) `A/m` &nbsp; (b) `tesla` &nbsp; (c) `A m^2` &nbsp; (d) it has no unit

**ANSWER: (d)** `chi = M/H`, and both `M` and `H` are in A/m, so `chi` is a pure number.

---

### Q35
A material has a magnetic susceptibility of `-1`. It is

(a) paramagnetic &nbsp; (b) ferromagnetic &nbsp; (c) a superconductor &nbsp;
(d) non-magnetic

**ANSWER: (c)**
```
        chi = -1  ->  mu(r) = 1 + chi = 0  ->  B = 0 inside

  A PERFECT DIAMAGNET. This is a SUPERCONDUCTOR (MEISSNER EFFECT).
```

---

### Q36
A rod of relative permeability 1001 is placed in a magnetising field of `H = 1000 A/m`.
The magnetisation of the rod is

(a) `10^3 A/m` &nbsp; (b) `10^5 A/m` &nbsp; (c) `10^6 A/m` &nbsp; (d) `10^2 A/m`

**ANSWER: (c)**
```
        chi  =  mu(r) - 1  =  1001 - 1  =  1000

        M  =  chi H  =  1000 x 1000  =  1 x 10^6  A/m
```

---

### Q37
A bar magnet of magnetic moment 2.0 A m^2 has a volume of 5 cm^3. Its magnetisation is

(a) `4 x 10^5 A/m` &nbsp; (b) `4 x 10^4 A/m` &nbsp; (c) `0.4 A/m` &nbsp;
(d) `10^6 A/m`

**ANSWER: (a)**
```
        V  =  5 cm^3  =  5 x 10^-6  m^3

              2.0
        M  = --------  =  4 x 10^5  A/m
             5 x 10^-6
```

---

# PATTERN 7 — Classifying magnetic materials

### Q38
Which of the following is **diamagnetic**?

(a) aluminium &nbsp; (b) bismuth &nbsp; (c) nickel &nbsp; (d) cobalt

**ANSWER: (b)** Bismuth is the standard example of a diamagnetic substance (aluminium is
paramagnetic; nickel and cobalt are ferromagnetic).

---

### Q39
For a paramagnetic material, the susceptibility `chi` varies with absolute temperature
`T` as

(a) `chi` is proportional to `T` &nbsp; (b) `chi` is proportional to `1/T` &nbsp;
(c) `chi` is proportional to `T^2` &nbsp; (d) `chi` is independent of `T`

**ANSWER: (b)** Curie's law: `chi = C/T`. The graph of `chi` against `1/T` is a
**straight line through the origin**; the graph of `chi` against `T` is a rectangular
hyperbola.

---

### Q40
A ferromagnetic substance heated above its **Curie temperature** becomes

(a) diamagnetic &nbsp; (b) paramagnetic &nbsp; (c) non-magnetic &nbsp;
(d) more strongly ferromagnetic

**ANSWER: (b)** Thermal agitation destroys the domain structure, so it becomes
**paramagnetic**, obeying `chi = C/(T - Tc)`.

---

### Q41
A rod suspended between the poles of a strong magnet sets itself **perpendicular** to the
field. The rod is

(a) paramagnetic &nbsp; (b) ferromagnetic &nbsp; (c) diamagnetic &nbsp;
(d) a permanent magnet

**ANSWER: (c)** Only diamagnetic materials set themselves perpendicular to the field and
move from the strong region to the weak region.

---

### Q42
Which statement is correct for a **diamagnetic** substance?

(a) `chi > 0`, `mu(r) > 1` &nbsp; (b) `chi < 0`, `mu(r) < 1` &nbsp;
(c) `chi >> 1`, `mu(r) >> 1` &nbsp; (d) `chi = 0`

**ANSWER: (b)**
```
  +----------------+-------------+---------------+
  |  DIA           |  chi < 0    |  mu(r) < 1    |
  |  PARA          |  chi > 0    |  mu(r) > 1    |
  |     (small)    |             |               |
  |  FERRO         |  chi >> 1   |  mu(r) >> 1   |
  +----------------+-------------+---------------+
```
> **SHORTCUT:** Only DIA has a **minus** sign. Spot the minus, tick dia, move on.

---

### Q43
A paramagnetic sample has susceptibility `8 x 10^-4` at 300 K. At 400 K it becomes

(a) `6 x 10^-4` &nbsp; (b) `8 x 10^-4` &nbsp; (c) `10.7 x 10^-4` &nbsp;
(d) `4 x 10^-4`

**ANSWER: (a)**
```
        chi1 T1  =  chi2 T2

        (8 x 10^-4)(300)  =  chi2 (400)

        chi2  =  (8 x 10^-4)(300)/400  =  6 x 10^-4
```

---

# PATTERN 8 — Hysteresis

### Q44
The area enclosed by a B-H hysteresis loop represents

(a) the retentivity &nbsp; (b) the coercivity &nbsp;
(c) the energy lost per unit volume per cycle &nbsp; (d) the permeability

**ANSWER: (c)** It is the **energy dissipated as heat per unit volume of the material
per cycle** of magnetisation.

---

### Q45
The material best suited for the **core of a transformer** is

(a) steel &nbsp; (b) soft iron &nbsp; (c) alnico &nbsp; (d) copper

**ANSWER: (b)** Soft iron has a **narrow hysteresis loop** (small area, hence small
energy loss per cycle), **low coercivity** and **very high permeability**.

---

### Q46
The material best suited for a **permanent magnet** must have

(a) high retentivity and low coercivity &nbsp;
(b) high retentivity and high coercivity &nbsp;
(c) low retentivity and low coercivity &nbsp;
(d) low retentivity and high coercivity

**ANSWER: (b)** It must hold its magnetism (**high retentivity**) and resist
demagnetisation (**high coercivity**). Steel and alnico satisfy both.

---

### Q47
A core of volume 10^-4 m^3 has a hysteresis loop of area 200 J/m^3 per cycle and is used
at 50 Hz. The heat produced per second is

(a) `1.0 W` &nbsp; (b) `0.5 W` &nbsp; (c) `2.0 W` &nbsp; (d) `100 W`

**ANSWER: (a)**
```
        Energy per cycle  =  200 x 10^-4  =  0.02  J

        Power  =  0.02 x 50  =  1.0  J/s  =  1.0  W
```

---

### Q48
The **coercivity** of a magnet is

(a) the field that magnetises it to saturation &nbsp;
(b) the residual magnetism when H = 0 &nbsp;
(c) the reverse field needed to reduce B to zero &nbsp;
(d) the maximum value of B

**ANSWER: (c)**
```
  RETENTIVITY  ->  what is LEFT on the B axis when H = 0
  COERCIVITY   ->  the REVERSE H on the H axis needed to kill it
```
> **SHORTCUT:** "**Re**tentivity is what **re**mains (B axis).
> **Co**ercivity is the **co**unter field (H axis)."

---

# PATTERN 9 — Gauss's law in magnetism

### Q49
The net magnetic flux through any closed surface is

(a) `q/e0` &nbsp; (b) `mu0 I` &nbsp; (c) always zero &nbsp; (d) `B A`

**ANSWER: (c)** `$ B . dS = 0` — because magnetic field lines are closed loops and
magnetic monopoles do not exist.

---

### Q50
A closed Gaussian surface encloses **only the north pole** of a bar magnet. The magnetic
flux through it is

(a) positive &nbsp; (b) negative &nbsp; (c) zero &nbsp; (d) infinite

**ANSWER: (c)** Zero, always. Gauss's law in magnetism is independent of what is inside
the surface.

---

### Q51
Which of the following is **not** a consequence of Gauss's law in magnetism?

(a) Magnetic monopoles do not exist &nbsp;
(b) Magnetic field lines are closed loops &nbsp;
(c) The magnetic field is always zero &nbsp;
(d) A cut magnet always gives two complete magnets

**ANSWER: (c)** Zero **flux** through a closed surface does not mean zero **field**.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +--------------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY               |
  +--------------------------------------+------------------------------------+
  |  "magnet cut into two pieces"        |  Moment becomes M/2. Do not think  |
  |                                      |  about which cut it was.           |
  +--------------------------------------+------------------------------------+
  |  "axial" / "end-on" / "on the axis"  |  Use the formula WITH the 2:       |
  |                                      |  B = 10^-7 x 2M / r^3              |
  +--------------------------------------+------------------------------------+
  |  "equatorial" / "broadside-on" /     |  Use the formula WITHOUT the 2:    |
  |  "perpendicular bisector"            |  B = 10^-7 x M / r^3               |
  +--------------------------------------+------------------------------------+
  |  Any ratio of axial to equatorial    |  Answer is 2 : 1. Tick it, move on.|
  +--------------------------------------+------------------------------------+
  |  "in a UNIFORM magnetic field"       |  Net force = ZERO. Only a torque.  |
  +--------------------------------------+------------------------------------+
  |  "work to rotate through 180 deg"    |  W = 2 M B                         |
  +--------------------------------------+------------------------------------+
  |  "stable equilibrium"                |  theta = 0 , U = -MB , tau = 0     |
  +--------------------------------------+------------------------------------+
  |  "unstable equilibrium"              |  theta = 180 , U = +MB , tau = 0   |
  +--------------------------------------+------------------------------------+
  |  Field changed, period asked         |  T is proportional to 1/sqrt(B).   |
  |                                      |  f is proportional to sqrt(B).     |
  +--------------------------------------+------------------------------------+
  |  "magnet cut in half, new period"    |  T' = T / 2                        |
  +--------------------------------------+------------------------------------+
  |  "dip = 45 degrees"                  |  B(H) = B(V) and B = B(H) sqrt(2)  |
  +--------------------------------------+------------------------------------+
  |  "magnetic equator"                  |  dip = 0 , B(V) = 0 , B = B(H)     |
  +--------------------------------------+------------------------------------+
  |  "magnetic poles" / "compass fails"  |  dip = 90 , B(H) = 0               |
  +--------------------------------------+------------------------------------+
  |  N pole pointing NORTH, neutral pts  |  EQUATORIAL line, formula with NO 2|
  +--------------------------------------+------------------------------------+
  |  N pole pointing SOUTH, neutral pts  |  AXIAL line, formula WITH the 2    |
  +--------------------------------------+------------------------------------+
  |  chi is NEGATIVE                     |  DIAMAGNETIC. Always.              |
  +--------------------------------------+------------------------------------+
  |  chi = -1  or  mu(r) = 0             |  SUPERCONDUCTOR (Meissner effect)  |
  +--------------------------------------+------------------------------------+
  |  chi in the thousands                |  FERROMAGNETIC                     |
  +--------------------------------------+------------------------------------+
  |  "rod sets PERPENDICULAR to B"       |  DIAMAGNETIC                       |
  +--------------------------------------+------------------------------------+
  |  "moves from strong to weak field"   |  DIAMAGNETIC (repelled)            |
  +--------------------------------------+------------------------------------+
  |  "chi versus 1/T is a straight line" |  PARAMAGNETIC (Curie's law)        |
  +--------------------------------------+------------------------------------+
  |  "above the Curie temperature"       |  Ferro becomes PARA                |
  +--------------------------------------+------------------------------------+
  |  "area of the hysteresis loop"       |  Energy lost per unit volume       |
  |                                      |  per cycle                         |
  +--------------------------------------+------------------------------------+
  |  "transformer core" / "electromagnet"|  SOFT IRON                         |
  +--------------------------------------+------------------------------------+
  |  "permanent magnet"                  |  STEEL / alnico (HIGH COERCIVITY)  |
  +--------------------------------------+------------------------------------+
  |  "flux through a closed surface"     |  ZERO. No calculation needed.      |
  +--------------------------------------+------------------------------------+
  |  Any 1/r^n question about a magnet   |  Dipole fields go as 1 / r^3       |
  +--------------------------------------+------------------------------------+
  |  You see  9 x 10^9  in the options   |  WRONG CHAPTER. Magnetism uses     |
  |                                      |  mu0/(4pi) = 10^-7                 |
  +--------------------------------------+------------------------------------+
```

```
  LAST WORD

  EAPCET has NO negative marking. If the clock is running out and a
  magnetism question is left blank, guess using these two facts:

     - "2 : 1"  is the answer to a startling number of ratio questions
     - "zero"   is the answer to almost every flux and net-force question
```
