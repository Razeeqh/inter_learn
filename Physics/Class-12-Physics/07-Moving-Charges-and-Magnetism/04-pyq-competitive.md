# Moving Charges and Magnetism — JEE Main / AP EAPCET / TG EAPCET Questions

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
  AP / TG EAPCET  (Physics, 40 questions)  ->  3 to 4
  JEE Main        (Physics, 25 questions)  ->  1 to 2

  This is one of the TOP THREE chapters in the whole Physics syllabus
  for EAPCET. Most of the questions are single-formula substitutions.
```

---

# PATTERN 1 — Force on a moving charge and its direction

### Q1
A charge of 2 C moves with a speed of 3 x 10^6 m/s perpendicular to a magnetic
field of 0.5 T. The force on it is

(a) 3 x 10^6 N &nbsp; (b) 1.5 x 10^6 N &nbsp; (c) 6 x 10^6 N &nbsp; (d) zero

**ANSWER: (a)**
```
  F  =  q v B sin 90  =  2 x (3 x 10^6) x 0.5  =  3 x 10^6  N
```

---

### Q2
An electron moves towards the EAST in a magnetic field directed towards the
NORTH (both horizontal). The force on the electron is directed

(a) upward &nbsp; (b) downward &nbsp; (c) north &nbsp; (d) west

**ANSWER: (b) downward**
```
  Take  east = x ,  north = y ,  up = z.

     v x B   =   x  cross  y   =   z   (UPWARD)

  But the electron is NEGATIVE, so  F = q(v x B)  reverses  ->  DOWNWARD.
```
> **SHORTCUT:** work out `v x B` first, then flip the answer if the charge is
> negative. Do NOT try to flip the hand rule — you will get confused.

---

### Q3
A charged particle moves through a magnetic field without any deflection.
Which of the following is necessarily true?

(a) B = 0 &nbsp; (b) v is parallel or antiparallel to B &nbsp;
(c) v is perpendicular to B &nbsp; (d) either (a) or (b)

**ANSWER: (d)**
```
  F = qvB sin(theta) = 0  requires  B = 0  or  sin(theta) = 0,
  i.e. theta = 0 or 180.
  (An electric field could also be balancing it, but with a magnetic
   field alone these are the only possibilities.)
```

---

### Q4
The work done by a magnetic field on a moving charged particle is

(a) always positive &nbsp; (b) always negative &nbsp; (c) zero &nbsp;
(d) depends on the charge

**ANSWER: (c) zero** — the force is always perpendicular to the velocity, so
`W = F s cos 90 = 0`. The **speed and kinetic energy never change**.

---

### Q5
A proton, a deuteron and an alpha particle all move with the same velocity
perpendicular to the same magnetic field. The forces on them are in the ratio

(a) 1 : 1 : 2 &nbsp; (b) 1 : 2 : 4 &nbsp; (c) 2 : 1 : 1 &nbsp; (d) 1 : 1 : 1

**ANSWER: (a) 1 : 1 : 2**
```
  F  =  q v B     ->    F  depends only on the CHARGE (v, B same)

     proton  q = e
     deuteron q = e
     alpha   q = 2e            ->    1 : 1 : 2
```
> **SHORTCUT:** for FORCE only the charge matters. For RADIUS the mass matters
> too. Read which one the question wants.

---

# PATTERN 2 — Radius, time period and frequency of the circular path

### Q6
An electron and a proton enter the same magnetic field with the same speed,
perpendicular to it. The ratio of the radii of their paths is

(a) 1 : 1 &nbsp; (b) 1836 : 1 &nbsp; (c) 1 : 1836 &nbsp; (d) 1 : 43

**ANSWER: (c) 1 : 1836**
```
        m v
   r = -----     same v, same q (magnitude), same B   ->  r is prop. to m
        q B

        r_e      m_e         1
       -----  =  ----  =  --------
        r_p      m_p        1836
```

---

### Q7
A charged particle moves in a circle in a uniform magnetic field. If its speed
is doubled, the time period

(a) doubles &nbsp; (b) halves &nbsp; (c) is unchanged &nbsp; (d) is quadrupled

**ANSWER: (c) unchanged**
```
        2 pi m
   T = --------      contains NO v and NO r.
          q B
```
> **SHORTCUT:** any question containing the words "time period", "frequency"
> or "how long per revolution" plus a change of speed or radius has the answer
> "**UNCHANGED**". This is asked almost every year.

---

### Q8
The frequency of revolution of an alpha particle in a magnetic field of 1 T is
(m_alpha = 6.68 x 10^-27 kg)

(a) 7.6 x 10^6 Hz &nbsp; (b) 1.5 x 10^7 Hz &nbsp; (c) 3.8 x 10^6 Hz &nbsp;
(d) 3.0 x 10^7 Hz

**ANSWER: (a)**
```
            q B          ( 2 x 1.6 x 10^-19 ) ( 1 )        3.2 x 10^-19
   f  =  ---------  =  ------------------------------  =  ---------------
          2 pi m        2 x 3.14 x 6.68 x 10^-27            4.196 x 10^-26

      =  7.6 x 10^6  Hz
```

---

### Q9
A particle of charge q and mass m is accelerated through a potential
difference V and then enters a magnetic field B perpendicularly. The radius of
its path is

(a) `sqrt(2mV/q)/B` &nbsp; (b) `sqrt(2qV/m)/B` &nbsp; (c) `2mV/qB` &nbsp;
(d) `mV/qB`

**ANSWER: (a)**
```
   (1/2) m v^2  =  q V     ->    v  =  sqrt( 2 q V / m )

         m v        m                          1                 2 m V
   r =  -----  =  ----- sqrt( 2 q V / m )  =  ---  sqrt( ------------- )
         q B        q B                        B                  q
```

---

### Q10
If the kinetic energy of a charged particle moving in a circle in a magnetic
field is made 4 times, the radius becomes

(a) 2 times &nbsp; (b) 4 times &nbsp; (c) 16 times &nbsp; (d) unchanged

**ANSWER: (a) 2 times**
```
        sqrt( 2 m K )
   r = ---------------      r is proportional to sqrt(K)
             q B

   K -> 4K   gives   r -> sqrt(4) r  =  2r
```

---

# PATTERN 3 — Comparing two particles (RATIO questions)

Learn this one table and you can do every question of this pattern in
ten seconds.

```
  +----------------------------+-------------------------------------+
  |  WHAT IS THE SAME          |  r  is proportional to              |
  +----------------------------+-------------------------------------+
  |  same SPEED v              |         m / q                       |
  |  same MOMENTUM p           |         1 / q                       |
  |  same KINETIC ENERGY K     |      sqrt(m) / q                    |
  |  same ACCELERATING p.d. V  |      sqrt( m / q )                  |
  +----------------------------+-------------------------------------+
  |  ALWAYS  :  T is proportional to  m / q                          |
  +----------------------------+-------------------------------------+

  Useful data :   proton   m = 1 , q = 1
                  deuteron m = 2 , q = 1
                  alpha    m = 4 , q = 2
```

### Q11
A proton and an alpha particle have the same kinetic energy and enter the same
magnetic field perpendicularly. The ratio of the radii is

(a) 1 : 1 &nbsp; (b) 1 : 2 &nbsp; (c) 2 : 1 &nbsp; (d) 1 : 4

**ANSWER: (a) 1 : 1**
```
   same K  ->  r  proportional to  sqrt(m)/q

   proton :  sqrt(1)/1  =  1
   alpha  :  sqrt(4)/2  =  2/2  =  1          ->    1 : 1
```

---

### Q12
A proton and an alpha particle have the same momentum and enter the same field.
The ratio of the radii is

(a) 1 : 1 &nbsp; (b) 2 : 1 &nbsp; (c) 1 : 2 &nbsp; (d) 4 : 1

**ANSWER: (b) 2 : 1**
```
   same p  ->  r  proportional to  1/q

   proton : 1/1 = 1  ;  alpha : 1/2       ->     1 : (1/2)  =  2 : 1
```

---

### Q13
A proton and an alpha particle are accelerated through the same potential
difference and enter the same magnetic field. The ratio of the radii is

(a) 1 : 1 &nbsp; (b) 1 : sqrt(2) &nbsp; (c) sqrt(2) : 1 &nbsp; (d) 2 : 1

**ANSWER: (b) 1 : sqrt(2)**
```
   same V  ->  r  proportional to  sqrt( m / q )

   proton : sqrt(1/1) = 1
   alpha  : sqrt(4/2) = sqrt(2)          ->     1 : sqrt(2)
```

---

### Q14
The ratio of the time periods of a proton and an alpha particle in the same
magnetic field is

(a) 1 : 1 &nbsp; (b) 1 : 2 &nbsp; (c) 2 : 1 &nbsp; (d) 1 : 4

**ANSWER: (b) 1 : 2**
```
   T  proportional to  m / q

   proton : 1/1 = 1  ;  alpha : 4/2 = 2      ->     1 : 2
```

---

# PATTERN 4 — Helical path and pitch

### Q15
The pitch of the helical path of a charged particle entering a magnetic field
at an angle theta is

(a) `2 pi m v sin(theta) / qB` &nbsp; (b) `2 pi m v cos(theta) / qB` &nbsp;
(c) `2 pi m v / qB` &nbsp; (d) `m v cos(theta) / qB`

**ANSWER: (b)**
```
   pitch  =  v_parallel  x  T   =  v cos(theta) x ( 2 pi m / qB )
```
> **SHORTCUT:** `sin` goes with the **radius**, `cos` goes with the **pitch**.
> "**Pitch and Cos both have a C-sound.**"

---

### Q16
An electron enters a magnetic field of 10^-3 T with a speed of 10^7 m/s at 30
degrees to the field. The pitch of its helical path is about

(a) 0.31 m &nbsp; (b) 0.03 m &nbsp; (c) 3.1 m &nbsp; (d) 0.15 m

**ANSWER: (a)**
```
   v_par = v cos 30 = 10^7 x 0.866 = 8.66 x 10^6  m/s

           2 pi m       2 x 3.14 x 9.1 x 10^-31       5.718 x 10^-30
   T   =  --------  =  --------------------------  =  ---------------
             q B        (1.6 x 10^-19)(10^-3)          1.6 x 10^-22

       =  3.57 x 10^-8  s

   pitch = (8.66 x 10^6)(3.57 x 10^-8)  =  0.309  m   ~  0.31 m
```

---

### Q17
A charged particle enters a uniform magnetic field with its velocity making an
angle of 90 degrees with the field. Its path is

(a) a straight line &nbsp; (b) a circle &nbsp; (c) a helix &nbsp;
(d) a parabola

**ANSWER: (b) a circle**
```
   theta =   0 or 180  ->  STRAIGHT LINE
   theta =  90         ->  CIRCLE
   any other angle     ->  HELIX
   (a parabola happens in an ELECTRIC field, not a magnetic one)
```

---

# PATTERN 5 — Lorentz force and the velocity selector

### Q18
In a velocity selector E = 2 x 10^5 V/m and B = 0.1 T. The speed of the
particles that pass undeflected is

(a) 2 x 10^6 m/s &nbsp; (b) 2 x 10^4 m/s &nbsp; (c) 2 x 10^5 m/s &nbsp;
(d) 5 x 10^-7 m/s

**ANSWER: (a)**
```
        E       2 x 10^5
   v = ---  =  -----------  =  2 x 10^6  m/s
        B         0.1
```

---

### Q19
In a velocity selector, both E and B are doubled. The selected speed

(a) doubles &nbsp; (b) halves &nbsp; (c) is unchanged &nbsp;
(d) becomes 4 times

**ANSWER: (c) unchanged** — `v = E/B`, and both are doubled, so the ratio is
the same.

---

### Q20
A charged particle moving with velocity v enters a region where E and B are
both present and parallel to each other and to v. The path of the particle is

(a) a circle &nbsp; (b) a helix &nbsp; (c) a straight line with changing speed
&nbsp; (d) a parabola

**ANSWER: (c)**
```
   v is parallel to B  ->  magnetic force = 0
   E is parallel to v  ->  the electric force only speeds it up or slows
                           it down along the SAME straight line.
```

---

# PATTERN 6 — The cyclotron

### Q21
The cyclotron frequency depends on

(a) the speed of the particle &nbsp; (b) the radius of the dees &nbsp;
(c) the charge-to-mass ratio and B &nbsp; (d) the accelerating voltage

**ANSWER: (c)** — `f = qB / (2 pi m)`. No `v`, no `r`, no `V`.

---

### Q22
In a cyclotron, if the magnetic field is doubled, the maximum kinetic energy
of the particles becomes

(a) 2 times &nbsp; (b) 4 times &nbsp; (c) 8 times &nbsp; (d) unchanged

**ANSWER: (b) 4 times**
```
              q^2 B^2 R^2
   KE_max  = -------------      proportional to  B^2
                 2 m
```

---

### Q23
A cyclotron with dee radius 0.6 m and B = 1 T accelerates protons. The maximum
kinetic energy is about

(a) 17 MeV &nbsp; (b) 2.8 MeV &nbsp; (c) 170 MeV &nbsp; (d) 1.7 MeV

**ANSWER: (a) about 17 MeV**
```
              q^2 B^2 R^2       (1.6 x 10^-19)^2 (1)^2 (0.6)^2
   KE_max  = -------------  =  --------------------------------
                 2 m                2 x 1.67 x 10^-27

             (2.56 x 10^-38)(0.36)        9.216 x 10^-39
          = -----------------------  =  ------------------
                 3.34 x 10^-27             3.34 x 10^-27

          = 2.76 x 10^-12  J

   In MeV :  2.76 x 10^-12 / 1.6 x 10^-13  =  17.2  MeV
```
> **SHORTCUT:** to change joules to MeV, divide by `1.6 x 10^-13`.

---

### Q24
A cyclotron CANNOT accelerate

(a) protons &nbsp; (b) deuterons &nbsp; (c) alpha particles &nbsp;
(d) neutrons

**ANSWER: (d) neutrons** — they are neutral, so `qE = 0` and `qvB = 0`.
(Electrons are also excluded, but for a different reason: relativistic mass
increase destroys the resonance.)

---

# PATTERN 7 — Force on a current-carrying conductor

### Q25
A wire of length 0.5 m carrying 4 A is placed at 30 degrees to a field of
0.2 T. The force on it is

(a) 0.2 N &nbsp; (b) 0.4 N &nbsp; (c) 0.1 N &nbsp; (d) 0.8 N

**ANSWER: (a)**
```
   F  =  B I L sin(theta)  =  (0.2)(4)(0.5)(0.5)  =  0.2  N
```

---

### Q26
The net force on a closed current loop of any shape placed in a **uniform**
magnetic field is

(a) BIL &nbsp; (b) zero &nbsp; (c) NIAB &nbsp; (d) MB

**ANSWER: (b) zero**
```
   For a closed loop the vector sum of all the length elements is zero,
   so  F = I ( L x B ) = 0.
   The TORQUE, however, is NOT zero: tau = NIAB sin(theta).
```
> **SHORTCUT:** the word "**closed loop**" plus "**uniform field**" plus
> "**force**" always gives **zero**. Do not calculate anything.

---

### Q27
A semicircular wire of radius R carrying current I is placed in a uniform
field B perpendicular to its plane. The force on it is

(a) BIR &nbsp; (b) 2BIR &nbsp; (c) pi BIR &nbsp; (d) zero

**ANSWER: (b) 2BIR**
```
   For a curved wire in a UNIFORM field, use the STRAIGHT LINE joining
   the two ends as the effective length.
   For a semicircle that straight line is the DIAMETER = 2R.

        F  =  B I (2R)
```
> **SHORTCUT:** never integrate along a curved wire in a uniform field.
> Just join the two ends with a straight line.

---

# PATTERN 8 — Force between parallel currents

### Q28
Two long parallel wires 1 m apart each carry 1 A. The force per metre between
them is

(a) 2 x 10^-7 N &nbsp; (b) 10^-7 N &nbsp; (c) 4 pi x 10^-7 N &nbsp;
(d) 2 x 10^7 N

**ANSWER: (a) 2 x 10^-7 N per metre** — this is exactly the **definition of
the ampere**.

---

### Q29
Two parallel wires carry currents in opposite directions. They

(a) attract &nbsp; (b) repel &nbsp; (c) exert no force &nbsp;
(d) rotate about each other

**ANSWER: (b) repel** — like currents attract, unlike currents repel.

---

### Q30
If both currents are doubled and the separation is halved, the force per unit
length becomes

(a) 2 times &nbsp; (b) 4 times &nbsp; (c) 8 times &nbsp; (d) 16 times

**ANSWER: (c) 8 times**
```
    F        I1 I2                  (2)(2)
   ---  is prop. to -----   ->  factor =  --------  =  4 x 2  =  8
    L                 d                     1/2
```

---

# PATTERN 9 — Field due to a straight wire

### Q31
The magnetic field at a distance of 2 cm from a long straight wire carrying
10 A is

(a) 10^-4 T &nbsp; (b) 10^-5 T &nbsp; (c) 2 x 10^-4 T &nbsp; (d) 10^-3 T

**ANSWER: (a)**
```
                  I                    10
   B  =  2 x 10^-7 x ---  =  2 x 10^-7 x ------  =  1 x 10^-4  T
                     r                    0.02
```
> **SHORTCUT:** for a straight wire use `B = 2 x 10^-7 I / r` directly.
> Never write `mu0` out in full in a timed exam.

---

### Q32
If the distance from a long straight wire is doubled, the field becomes

(a) half &nbsp; (b) double &nbsp; (c) one fourth &nbsp; (d) unchanged

**ANSWER: (a) half** — `B` is proportional to `1/r` for a straight wire
(**not** `1/r^2`).

---

### Q33
Two long parallel wires a distance d apart carry equal currents I in
**opposite** directions. The field at the midpoint between them is

(a) zero &nbsp; (b) `mu0 I / (pi d)` &nbsp; (c) `2 mu0 I / (pi d)` &nbsp;
(d) `mu0 I / (2 pi d)`

**ANSWER: (c)**
```
   Each wire is at a distance  d/2  from the midpoint :

              mu0 I            mu0 I
      B1  =  -----------  =  ---------
             2 pi (d/2)         pi d

   For OPPOSITE currents the two fields at the midpoint are in the
   SAME direction, so they ADD :

      B  =  2 x  mu0 I / (pi d)   =   2 mu0 I / ( pi d )
```
> **SHORTCUT:** at the midpoint — **same** currents give **zero** (they
> cancel), **opposite** currents give **double**. Exactly the reverse of what
> most students guess.

---

# PATTERN 10 — Circular loops, arcs and combinations

### Q34
The magnetic field at the centre of a circular coil of 100 turns and radius
10 cm carrying 1 A is

(a) 6.28 x 10^-4 T &nbsp; (b) 6.28 x 10^-5 T &nbsp; (c) 1.26 x 10^-3 T &nbsp;
(d) 3.14 x 10^-4 T

**ANSWER: (a)**
```
           mu0 N I       (4 pi x 10^-7)(100)(1)       1.2566 x 10^-4
   B  =  ----------  =  -------------------------  =  ----------------
             2 a                2 (0.1)                     0.2

      =  6.28 x 10^-4  T
```
> **SHORTCUT:** `B = 2 pi x 10^-7 N I / a` for a coil centre. **No pi in the
> denominator** — the pi has moved to the top.

---

### Q35
A wire of fixed length L is bent into n turns of a circular coil carrying
current I. The field at the centre is proportional to

(a) n &nbsp; (b) n^2 &nbsp; (c) 1/n &nbsp; (d) independent of n

**ANSWER: (b) n^2**
```
   L = n ( 2 pi a )      ->      a  =  L / ( 2 pi n )

          mu0 n I       mu0 n I  ( 2 pi n )        mu0 pi n^2 I
   B  =  ---------  =  ----------------------  =  --------------
            2 a               2 L                        L
```
> **SHORTCUT:** "same wire, more turns" → the answer is almost always `n^2`.

---

### Q36
The magnetic field at the centre of a semicircular arc of radius a carrying
current I is

(a) `mu0 I / 2a` &nbsp; (b) `mu0 I / 4a` &nbsp; (c) `mu0 I / 8a` &nbsp;
(d) `mu0 I / 2 pi a`

**ANSWER: (b)**
```
            mu0 I     theta         theta = pi for a semicircle
   B   =   ------- x -------
             2 a      2 pi

            mu0 I      pi          mu0 I
       =   ------- x ------   =   -------
             2 a      2 pi          4 a
```

```
  THE ARC TABLE - memorise it

     full circle   theta = 2 pi   ->   B = mu0 I / ( 2 a )
     semicircle    theta = pi     ->   B = mu0 I / ( 4 a )
     quarter       theta = pi/2   ->   B = mu0 I / ( 8 a )
     one sixth     theta = pi/3   ->   B = mu0 I / ( 12 a )
```

---

### Q37
The magnetic field at the centre of a square loop of side a carrying current I
is

(a) `mu0 I / (2 pi a)` &nbsp; (b) `2 sqrt(2) mu0 I / (pi a)` &nbsp;
(c) `mu0 I / (4 pi a)` &nbsp; (d) `sqrt(2) mu0 I / (pi a)`

**ANSWER: (b)**
```
   Each side is a FINITE wire at perpendicular distance a/2 from the
   centre, subtending 45 degrees at each end :

              mu0 I                          mu0 I
   B_side  = ------------ ( sin45 + sin45 ) = --------- x sqrt(2)
             4 pi (a/2)                       2 pi a

   Four sides, all giving B in the same direction :

              4 sqrt(2) mu0 I         2 sqrt(2) mu0 I
   B     =   -----------------   =   -----------------
                 2 pi a                    pi a
```

---

### Q38
Two identical circular coils are placed with their planes perpendicular to
each other and their centres coinciding. Each produces a field B at the centre.
The resultant field is

(a) 2B &nbsp; (b) zero &nbsp; (c) `sqrt(2) B` &nbsp; (d) B/2

**ANSWER: (c) sqrt(2) B** — the two fields are perpendicular vectors of equal
magnitude, so the resultant is `sqrt(B^2 + B^2) = sqrt(2) B`.

---

# PATTERN 11 — Solenoid, toroid and Ampere's law

### Q39
The magnetic field inside a long solenoid depends on

(a) its radius &nbsp; (b) its total length only &nbsp;
(c) the number of turns per unit length and the current &nbsp;
(d) the position along its axis

**ANSWER: (c)** — `B = mu0 n I`. The field is **uniform** inside and does not
depend on the radius or the position.

---

### Q40
A solenoid of length 1 m has 1000 turns and carries 5 A. The field inside is

(a) 6.28 x 10^-3 T &nbsp; (b) 6.28 x 10^-4 T &nbsp; (c) 1.26 x 10^-3 T &nbsp;
(d) 2 x 10^-3 T

**ANSWER: (a)**
```
   n  =  1000 / 1  =  1000  turns per metre

   B  =  mu0 n I  =  (4 pi x 10^-7)(1000)(5)
                  =  (1.2566 x 10^-6)(5000)
                  =  6.28 x 10^-3  T
```

---

### Q41
The magnetic field outside a toroid (and in its hollow central region) is

(a) `mu0 N I / 2 pi r` &nbsp; (b) `mu0 n I` &nbsp; (c) zero &nbsp;
(d) infinite

**ANSWER: (c) zero** — an Amperian loop drawn there encloses **no net
current**.

---

### Q42
The line integral `INT B.dl` round a closed loop enclosing currents of 3 A and
5 A in opposite senses is

(a) `8 mu0` &nbsp; (b) `2 mu0` &nbsp; (c) `15 mu0` &nbsp; (d) zero

**ANSWER: (b) 2 mu0**
```
   I_enclosed  =  5 - 3  =  2 A       (opposite senses SUBTRACT)

   INT B.dl  =  mu0 I_enc  =  2 mu0
```
> **SHORTCUT:** currents **outside** the loop contribute **nothing** to
> `INT B.dl`, no matter how large they are.

---

# PATTERN 12 — Magnetic dipole moment, torque and energy

### Q43
A circular coil of 50 turns and radius 10 cm carries 2 A. Its magnetic moment
is

(a) 3.14 A m^2 &nbsp; (b) 0.314 A m^2 &nbsp; (c) 31.4 A m^2 &nbsp;
(d) 1.57 A m^2

**ANSWER: (a)**
```
   A  =  pi a^2  =  3.14 x (0.1)^2  =  3.14 x 10^-2  m^2

   M  =  N I A  =  50 x 2 x 3.14 x 10^-2  =  3.14  A m^2
```

---

### Q44
The torque on a current loop in a uniform magnetic field is maximum when the
plane of the loop is

(a) perpendicular to B &nbsp; (b) parallel to B &nbsp; (c) at 45 degrees
&nbsp; (d) it is never maximum

**ANSWER: (b) parallel to B**
```
   tau = M B sin(theta),  theta measured from the NORMAL.
   Plane PARALLEL to B  ->  normal PERPENDICULAR to B  ->  theta = 90
                        ->  sin(theta) = 1  ->  tau = M B  (MAXIMUM)
```
> **SHORTCUT:** whenever the question mentions the **plane** of the coil,
> convert at once: `angle with the normal = 90 - angle with the plane`.

---

### Q45
The work done in rotating a magnetic dipole of moment M from the stable
position to the unstable position in a field B is

(a) MB &nbsp; (b) 2MB &nbsp; (c) zero &nbsp; (d) MB/2

**ANSWER: (b) 2MB**
```
   W  =  M B ( cos theta1  -  cos theta2 )
      =  M B ( cos 0  -  cos 180 )
      =  M B ( 1 - (-1) )   =   2 M B
```

---

### Q46
The potential energy of a magnetic dipole is minimum when the dipole moment M
is

(a) parallel to B &nbsp; (b) antiparallel to B &nbsp; (c) perpendicular to B
&nbsp; (d) zero

**ANSWER: (a) parallel to B** — `U = -MB cos(theta)`, minimum `= -MB` at
`theta = 0`. That is the **stable** equilibrium.

---

# PATTERN 13 — Galvanometer, ammeter and voltmeter

### Q47
A galvanometer of resistance 99 ohm is to be converted into an ammeter of 100
times its range. The shunt required is

(a) 1 ohm &nbsp; (b) 0.99 ohm &nbsp; (c) 99 ohm &nbsp; (d) 9900 ohm

**ANSWER: (a) 1 ohm**
```
             G           99          99
   S   =  --------  =  --------  =  ----  =  1  ohm
           n - 1        100 - 1      99
```
> **SHORTCUT:** if the range is multiplied `n` times,
> **ammeter** → `S = G/(n-1)` (parallel), **voltmeter** → `R = G(n-1)`
> (series). Two formulas, both trivial.

---

### Q48
A galvanometer of resistance 50 ohm is converted into a voltmeter of 10 times
its range. The series resistance needed is

(a) 450 ohm &nbsp; (b) 500 ohm &nbsp; (c) 5 ohm &nbsp; (d) 550 ohm

**ANSWER: (a) 450 ohm**
```
   R  =  G ( n - 1 )  =  50 ( 10 - 1 )  =  50 x 9  =  450  ohm
```

---

### Q49
Increasing the number of turns of a galvanometer coil

(a) always increases the voltage sensitivity &nbsp;
(b) increases the current sensitivity but may not increase the voltage
sensitivity &nbsp;
(c) decreases both &nbsp; (d) has no effect

**ANSWER: (b)**
```
   current sensitivity  =  N A B / C          increases with N

   voltage sensitivity  =  N A B / ( C G )
   but the coil resistance G also increases roughly in proportion to N,
   so the ratio N/G stays about the same.
```
> **SHORTCUT:** this exact statement appears in both board and entrance
> papers. Learn the sentence: *"Increasing the current sensitivity does not
> necessarily increase the voltage sensitivity."*

---

### Q50
An ideal ammeter and an ideal voltmeter have resistances

(a) zero and zero &nbsp; (b) infinite and zero &nbsp; (c) zero and infinite
&nbsp; (d) infinite and infinite

**ANSWER: (c) zero and infinite**

---

# SPEED RULES FOR THE EXAM HALL

```
  +------------------------------------+-----------------------------------+
  |  IF YOU SEE THIS ...               |  DO THIS IMMEDIATELY              |
  +------------------------------------+-----------------------------------+
  |  "force on a moving charge"        |  F = q v B sin(theta)             |
  +------------------------------------+-----------------------------------+
  |  "work done by a magnetic field"   |  ZERO. Speed and KE unchanged.    |
  +------------------------------------+-----------------------------------+
  |  "time period" + speed is changed  |  UNCHANGED.  T = 2 pi m / qB      |
  +------------------------------------+-----------------------------------+
  |  "radius" + kinetic energy given   |  r = sqrt(2mK) / qB               |
  +------------------------------------+-----------------------------------+
  |  "radius" + accelerating voltage   |  r = sqrt(2mV/q) / B              |
  +------------------------------------+-----------------------------------+
  |  ratio question, same speed        |  r is prop. to  m/q               |
  |  ratio question, same momentum     |  r is prop. to  1/q               |
  |  ratio question, same KE           |  r is prop. to  sqrt(m)/q         |
  |  ratio question, same voltage      |  r is prop. to  sqrt(m/q)         |
  +------------------------------------+-----------------------------------+
  |  "pitch"                           |  v COS(theta) x T                 |
  |  "radius of the helix"             |  m v SIN(theta) / qB              |
  +------------------------------------+-----------------------------------+
  |  "undeflected" with E and B        |  v = E / B                        |
  +------------------------------------+-----------------------------------+
  |  cyclotron "frequency"             |  f = qB / (2 pi m)                |
  |  cyclotron "maximum energy"        |  q^2 B^2 R^2 / (2m) , /1.6e-13    |
  |                                    |  to get MeV                       |
  +------------------------------------+-----------------------------------+
  |  "closed loop" + "uniform field"   |  NET FORCE = 0 (torque may not be)|
  |  + "force"                         |                                   |
  +------------------------------------+-----------------------------------+
  |  curved wire in a uniform field    |  use the STRAIGHT LINE joining    |
  |                                    |  the two ends as L                |
  +------------------------------------+-----------------------------------+
  |  two parallel wires                |  F/L = 2 x 10^-7 I1 I2 / d        |
  |                                    |  same direction -> ATTRACT        |
  +------------------------------------+-----------------------------------+
  |  field near a STRAIGHT wire        |  B = 2 x 10^-7 I / r              |
  +------------------------------------+-----------------------------------+
  |  field at the CENTRE of a coil     |  B = 2 pi x 10^-7 N I / a         |
  |                                    |  (NO pi in the denominator)       |
  +------------------------------------+-----------------------------------+
  |  midpoint between two wires        |  same currents -> ZERO            |
  |                                    |  opposite currents -> DOUBLE      |
  +------------------------------------+-----------------------------------+
  |  arc of angle theta                |  B = mu0 I theta / (4 pi a)       |
  |                                    |  semicircle -> mu0 I / 4a         |
  +------------------------------------+-----------------------------------+
  |  same wire bent into n turns       |  B is proportional to n^2         |
  +------------------------------------+-----------------------------------+
  |  solenoid                          |  B = mu0 n I  (n = turns/METRE)   |
  |  toroid                            |  B = mu0 N I / (2 pi r) (N total) |
  |  outside a solenoid or toroid      |  B = 0                            |
  +------------------------------------+-----------------------------------+
  |  INT B.dl round a loop             |  mu0 x (net current THROUGH it).  |
  |                                    |  Ignore all outside currents.     |
  +------------------------------------+-----------------------------------+
  |  "plane of the coil makes angle a" |  angle with the NORMAL = 90 - a   |
  +------------------------------------+-----------------------------------+
  |  torque on a coil                  |  tau = N I A B sin(theta)         |
  |  work to rotate a dipole           |  W = MB(cos T1 - cos T2)          |
  +------------------------------------+-----------------------------------+
  |  ammeter, range x n                |  S = G / (n - 1) , IN PARALLEL    |
  |  voltmeter, range x n              |  R = G ( n - 1 ) , IN SERIES      |
  +------------------------------------+-----------------------------------+
  |  running out of time in EAPCET     |  GUESS. There is NO negative      |
  |                                    |  marking. Never leave a blank.    |
  +------------------------------------+-----------------------------------+
```
