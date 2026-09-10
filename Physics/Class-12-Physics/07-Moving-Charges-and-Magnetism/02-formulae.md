# Moving Charges and Magnetism — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

**The constant you will use in every single problem:**

```
  mu0        =   4 pi x 10^-7   T m / A     (permeability of free space)

  mu0 / 4pi  =   1 x 10^-7                  <-- MEMORISE THIS FORM

  e (charge) =   1.6 x 10^-19  C
  m_proton   =   1.67 x 10^-27 kg
  m_electron =   9.1  x 10^-31 kg

  1 tesla    =   10^4 gauss  =  1 Wb/m^2  =  1 N/(A m)
  Dimensions of B  =  [ M T^-2 A^-1 ]
```

---

# 1. FORCE ON A MOVING CHARGE

```
  +-------------------------------------------------------------+
  |                                                             |
  |     F   =   q v B sin(theta)         theta between v and B  |
  |                                                             |
  |     F   =   q ( v  x  B )            vector form            |
  |                                                             |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = q v B sin(theta)` | magnitude of the force on a single moving charge |
| `F = q v B` | when v is perpendicular to B (maximum force) |
| `F = 0` | when v is parallel/antiparallel to B, or v = 0, or q = 0 |
| `F = q(v x B)` | when the question asks for the **direction** as well |

```
  SPECIAL CASES  (2-mark question)

  +------------------------+-----------+---------------------+
  |  theta = 0   or  180   |  sin = 0  |  F  =  0            |
  |  theta = 30            |  sin=0.5  |  F  =  0.5 q v B    |
  |  theta = 90            |  sin = 1  |  F  =  q v B  (MAX) |
  |  v = 0 (charge at rest)|     -     |  F  =  0            |
  +------------------------+-----------+---------------------+

  ALWAYS TRUE :  W = 0 ,  speed = constant ,  KE = constant
```

---

# 2. LORENTZ FORCE AND THE VELOCITY SELECTOR

```
  +-------------------------------------------------------------+
  |                                                             |
  |    LORENTZ FORCE   F  =  q E  +  q ( v x B )                |
  |                                                             |
  |                    F  =  q [ E  +  ( v x B ) ]              |
  |                                                             |
  +-------------------------------------------------------------+
  |                                                             |
  |    VELOCITY SELECTOR  (E, B and v mutually perpendicular)   |
  |                                                             |
  |          q E  =  q v B                                      |
  |                                                             |
  |                       E                                     |
  |             v   =   -----                                   |
  |                       B                                     |
  |                                                             |
  |    Independent of q and of m.                               |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = q[E + (v x B)]` | both fields present |
| `v = E/B` | "undeflected", "goes straight through", velocity selector, mass spectrometer entrance |

---

# 3. MOTION OF A CHARGE IN A UNIFORM MAGNETIC FIELD

## Circular path (v perpendicular to B)

```
  +--------------------------------------------------------------+
  |                                                              |
  |                 m v         p         sqrt( 2 m K )          |
  |     r    =     -----   =   -----   =  --------------         |
  |                 q B         q B            q B               |
  |                                                              |
  |                 2 pi m                                       |
  |     T    =     --------        INDEPENDENT of v and r        |
  |                  q B                                         |
  |                                                              |
  |                  q B                                         |
  |     f    =     --------                                      |
  |                 2 pi m                                       |
  |                                                              |
  |                  q B                                         |
  |     omega =    -------                                       |
  |                   m                                          |
  |                                                              |
  +--------------------------------------------------------------+
```

## Helical path (v at angle theta to B)

```
  +--------------------------------------------------------------+
  |                                                              |
  |     v_perp  =  v sin(theta)      makes the CIRCLE            |
  |     v_par   =  v cos(theta)      makes the DRIFT             |
  |                                                              |
  |                m v sin(theta)                                |
  |     r    =    ----------------                               |
  |                     q B                                      |
  |                                                              |
  |                 2 pi m                                       |
  |     T    =     --------          (unchanged)                 |
  |                  q B                                         |
  |                                                              |
  |                                       2 pi m v cos(theta)    |
  |     PITCH  =  v cos(theta) x T   =   ---------------------   |
  |                                              q B             |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `r = mv/qB` | radius when the charge enters **perpendicular** to B |
| `r = mv sin(theta)/qB` | radius when it enters at an angle |
| `r = p/qB` | momentum is given |
| `r = sqrt(2mK)/qB` | **kinetic energy** or accelerating voltage is given |
| `r = sqrt(2mV/q)/B` | charge accelerated through a p.d. of V volts |
| `T = 2 pi m/qB` | time period; also to prove it is independent of speed |
| `pitch = v cos(theta) x T` | helical path questions |

```
  USEFUL RATIOS  (for "compare a proton and an alpha particle" questions)

     Same speed        ->   r  is proportional to   m / q
     Same momentum     ->   r  is proportional to   1 / q
     Same KE           ->   r  is proportional to   sqrt(m) / q
     Same accelerating ->   r  is proportional to   sqrt( m / q )
     voltage
     ALWAYS            ->   T  is proportional to   m / q
```

---

# 4. THE CYCLOTRON

```
  +--------------------------------------------------------------+
  |                                                              |
  |                       q B                                    |
  |    f_cyclotron  =   ---------      RESONANCE CONDITION       |
  |                      2 pi m        (= oscillator frequency)  |
  |                                                              |
  |                       q B R                                  |
  |    v_max        =   ---------                                |
  |                         m                                    |
  |                                                              |
  |                      q^2 B^2 R^2                             |
  |    KE_max       =  ---------------                           |
  |                          2 m                                 |
  |                                                              |
  |                      KE_max                                  |
  |    number of    =   ---------      (gains qV per crossing,   |
  |    revolutions       2 q V          2 crossings per turn)    |
  |                                                              |
  |    time for one semicircle  =   pi m / ( q B )               |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `f = qB/2 pi m` | "frequency of the oscillator", "resonance condition" |
| `B = 2 pi m f / q` | field needed for a given oscillator frequency |
| `KE_max = q^2B^2R^2/2m` | maximum energy of the emerging particle |
| `KE_max = (1/2) m v_max^2` | check your answer a second way |

```
  LIMITATIONS  (4 of them - part of every 8-mark cyclotron question)
     1.  cannot accelerate ELECTRONS (become relativistic too soon)
     2.  cannot accelerate NEUTRAL particles (neutrons)
     3.  relativistic mass increase destroys the resonance at high speed
     4.  very high energy needs an impractically large magnet
```

---

# 5. FORCE ON A CURRENT-CARRYING CONDUCTOR

```
  +--------------------------------------------------------------+
  |                                                              |
  |     F   =   B I L sin(theta)     theta between the WIRE      |
  |                                  and B                       |
  |                                                              |
  |     F   =   I ( L  x  B )        vector form                 |
  |                                                              |
  |     theta = 90  ->  F = B I L   (maximum)                    |
  |     theta = 0   ->  F = 0                                    |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F = BIL sin(theta)` | straight wire in a field |
| `F = BIL` | wire perpendicular to the field |
| `F = 0` | wire along the field; also **any closed loop in a uniform field** |
| `F = I(L x B)` | direction wanted; L is the vector length from entry to exit |

```
  NOTE for a CURVED wire in a uniform field :
     use the STRAIGHT LINE joining the two ends as the effective length L.

  NOTE for a CLOSED LOOP in a uniform field :
     effective length = 0, so the NET FORCE = 0  (but the torque is not).
```

---

# 6. FORCE BETWEEN TWO PARALLEL CURRENTS

```
  +--------------------------------------------------------------+
  |                                                              |
  |      F        mu0  I1  I2        2 x 10^-7  I1  I2           |
  |     ---  =  ---------------  =  --------------------         |
  |      L         2 pi  d                  d                    |
  |                                                              |
  |     SAME direction      ->  ATTRACT                          |
  |     OPPOSITE direction  ->  REPEL                            |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   DEFINITION OF THE AMPERE                                   |
  |                                                              |
  |   I1 = I2 = 1 A ,  d = 1 m , in vacuum                       |
  |         ->   F / L  =  2 x 10^-7  N per metre                |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `F/L = 2 x 10^-7 I1I2/d` | force per unit length between two long parallel wires |
| `F = 2 x 10^-7 I1I2 L/d` | total force on a length L |

---

# 7. BIOT-SAVART LAW

```
  +--------------------------------------------------------------+
  |                                                              |
  |               mu0        I  dl  sin(theta)                   |
  |      dB  =  ------  x  ----------------------                |
  |              4 pi              r^2                           |
  |                                                              |
  |               mu0        I ( dl  x  r_hat )                  |
  |      dB  =  ------  x  ------------------------              |
  |              4 pi              r^2                           |
  |                                                              |
  |      dB is PERPENDICULAR to the plane of dl and r.           |
  |      dB = 0 along the axis of the element (theta = 0).       |
  |                                                              |
  +--------------------------------------------------------------+
```

---

# 8. MAGNETIC FIELD OF STANDARD SHAPES  *** the master table ***

```
  +----------------------------------+--------------------------------------+
  |  SHAPE                           |  MAGNETIC FIELD B                    |
  +----------------------------------+--------------------------------------+
  |                                  |                                      |
  |  Infinite straight wire          |          mu0  I                      |
  |  (perp. distance r)              |    B =  ---------                    |
  |                                  |          2 pi r                      |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0  I                      |
  |  FINITE straight wire            |    B =  --------- ( sin p1 + sin p2 )|
  |  (perp. distance a)              |          4 pi a                      |
  |                                  |    p1, p2 measured from the          |
  |                                  |    perpendicular to the two ends     |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0  I                      |
  |  SEMI-infinite wire              |    B =  ---------                    |
  |  (point opposite one end)        |          4 pi a                      |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0  N  I                   |
  |  CENTRE of a circular coil       |    B =  -----------      NO pi !     |
  |  (radius a, N turns)             |            2 a                       |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0  N  I  a^2              |
  |  ON THE AXIS of a circular coil  |    B =  --------------------         |
  |  (distance x from centre)        |         2 (a^2 + x^2)^(3/2)          |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0  I  theta               |
  |  CENTRE of an ARC                |    B =  --------------               |
  |  (angle theta in RADIANS)        |            4 pi a                    |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |  SEMICIRCLE  (theta = pi)        |    B =  mu0 I / ( 4 a )              |
  |  QUARTER CIRCLE (theta = pi/2)   |    B =  mu0 I / ( 8 a )              |
  +----------------------------------+--------------------------------------+
  |                                  |                                      |
  |  INSIDE a long SOLENOID          |    B =  mu0  n  I                    |
  |  (n = turns PER METRE)           |                                      |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |  At the END of a solenoid        |    B =  mu0 n I / 2                  |
  |  OUTSIDE a long solenoid         |    B =  0                            |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0  N  I                   |
  |  INSIDE a TOROID                 |    B =  -----------                  |
  |  (N = TOTAL turns, r = mean rad.)|            2 pi r                    |
  |                                  |                                      |
  +----------------------------------+--------------------------------------+
  |  Inside the hollow of a toroid   |    B =  0                            |
  |  Outside a toroid                |    B =  0                            |
  +----------------------------------+--------------------------------------+
  |                                  |          mu0     2 M                 |
  |  FAR on the axis of a loop       |    B =  ----- x -------              |
  |  (x >> a) - a magnetic dipole    |          4 pi     x^3                |
  +----------------------------------+--------------------------------------+
```

## The pi trap — read this twice

```
  +----------------------------+------------------+---------------------+
  |  SHAPE                     |  DENOMINATOR     |  HAS pi ?           |
  +----------------------------+------------------+---------------------+
  |  Straight wire             |     2 pi r       |  YES                |
  |  Centre of a coil          |       2 a        |  NO                 |
  |  Arc                       |     4 pi a       |  YES (theta on top) |
  |  Solenoid                  |       -          |  NO                 |
  |  Toroid                    |     2 pi r       |  YES                |
  +----------------------------+------------------+---------------------+
```

---

# 9. AMPERE'S CIRCUITAL LAW

```
  +--------------------------------------------------------------+
  |                                                              |
  |        INT   B . dl    =    mu0  I_enclosed                  |
  |     (closed loop)                                            |
  |                                                              |
  |     Only the current THREADING the loop counts.              |
  |     Use it only when there is enough SYMMETRY.               |
  |                                                              |
  +--------------------------------------------------------------+
```

| Amperian loop chosen | Gives |
|---|---|
| circle around a straight wire | `B = mu0 I / 2 pi r` |
| rectangle half in / half out of a solenoid | `B = mu0 n I` |
| circle through the core of a toroid | `B = mu0 N I / 2 pi r` |

---

# 10. CURRENT LOOP AS A MAGNETIC DIPOLE

```
  +--------------------------------------------------------------+
  |                                                              |
  |    MAGNETIC MOMENT        M   =   N  I  A                    |
  |                                                              |
  |    unit  A m^2       dimensions  [ L^2 A ]                   |
  |                                                              |
  |    direction : along the normal, by the right hand rule      |
  |                                                              |
  |    For a circular loop :   M  =  N I pi a^2                  |
  |                                                              |
  |    Electron in orbit :     M / L  =  e / (2 m)               |
  |                            = 8.8 x 10^10  C/kg               |
  |                                                              |
  +--------------------------------------------------------------+
```

---

# 11. TORQUE ON A CURRENT LOOP

```
  +--------------------------------------------------------------+
  |                                                              |
  |    tau  =  N I A B sin(theta)   =   M B sin(theta)           |
  |                                                              |
  |    tau  =  M  x  B              (vector form)                |
  |                                                              |
  |    theta = angle between the NORMAL to the coil and B        |
  |                                                              |
  |    theta = 90 (plane of coil PARALLEL to B) -> tau = M B MAX |
  |    theta = 0  (plane of coil PERP. to B)    -> tau = 0       |
  |                                                              |
  |    NET FORCE on a loop in a UNIFORM field  =  0              |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |    POTENTIAL ENERGY   U  =  - M B cos(theta)  =  - M . B     |
  |                                                              |
  |    theta = 0    ->  U = - M B    STABLE                      |
  |    theta = 180  ->  U = + M B    UNSTABLE                    |
  |                                                              |
  |    WORK to turn from theta1 to theta2 :                      |
  |         W  =  M B ( cos theta1  -  cos theta2 )              |
  |                                                              |
  |    W to turn from 0 to 180  =  2 M B                         |
  |                                                              |
  +--------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `tau = NIAB sin(theta)` | torque with the angle given from the **normal** |
| `tau = NIAB cos(alpha)` | when alpha is given from the **plane** of the coil |
| `tau = MB` | maximum torque; plane of coil contains B |
| `U = -MB cos(theta)` | energy / work questions |
| `W = MB(cos T1 - cos T2)` | "work done in rotating the coil from ... to ..." |

---

# 12. MOVING COIL GALVANOMETER

```
  +--------------------------------------------------------------+
  |                                                              |
  |      N I A B   =   C phi         (deflecting = restoring)    |
  |                                                              |
  |                    C                                         |
  |         I    =  --------  phi                                |
  |                  N A B                                       |
  |                                                              |
  |      C = torsional constant (N m per radian)                 |
  |      phi = deflection                                        |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   CURRENT SENSITIVITY     phi / I   =   N A B / C            |
  |                                                              |
  |   VOLTAGE SENSITIVITY     phi / V   =   N A B / ( C G )      |
  |                                                              |
  |                                     =  current sensitivity   |
  |                                        ------------------    |
  |                                                G             |
  |                                                              |
  |   FIGURE OF MERIT     k  =  I / phi  =  C / ( N A B )        |
  |                          =  1 / current sensitivity          |
  |                                                              |
  |   Full scale current  Ig  =  k  x  (total divisions)         |
  |                                                              |
  +--------------------------------------------------------------+
```

| Term | Meaning | Unit |
|---|---|---|
| Current sensitivity | deflection per unit current | div / A (rad / A) |
| Voltage sensitivity | deflection per unit voltage | div / V (rad / V) |
| Figure of merit | current needed for 1 division | A / div |

```
  TO INCREASE SENSITIVITY :  increase N , A , B  ;  decrease C
  RADIAL FIELD  -> sin(theta) = 1 always -> UNIFORM (linear) SCALE
  SOFT IRON CORE -> stronger field, more sensitive, keeps the field radial
```

---

# 13. AMMETER AND VOLTMETER CONVERSION

```
  +--------------------------------------------------------------+
  |                                                              |
  |   AMMETER    :   SHUNT  S  in  PARALLEL   (small)            |
  |                                                              |
  |                        Ig  G                                 |
  |             S    =   ----------                              |
  |                       I  -  Ig                               |
  |                                                              |
  |                          G S                                 |
  |             R_ammeter =  -----      (very small)             |
  |                          G + S                               |
  |                                                              |
  |                          S                                   |
  |             Ig      =  ------- x I                           |
  |                        G + S                                 |
  |                                                              |
  |             Range multiplied  n = I / Ig                     |
  |                    ->   S  =  G / ( n - 1 )                  |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   VOLTMETER  :   RESISTANCE  R  in  SERIES   (large)         |
  |                                                              |
  |                     V                                        |
  |             R  =  ------   -   G                             |
  |                    Ig                                        |
  |                                                              |
  |             R_voltmeter  =  G  +  R      (very large)        |
  |                                                              |
  |             Range multiplied  n = V / (Ig G)                 |
  |                    ->   R  =  G ( n - 1 )                    |
  |                                                              |
  +--------------------------------------------------------------+

  IDEAL AMMETER    ->   resistance  =  ZERO
  IDEAL VOLTMETER  ->   resistance  =  INFINITY
```

---

# 14. QUICK NUMERICAL SHORTCUTS

```
  Straight wire      B  =  2 x 10^-7  x  I / r          (tesla)
  Parallel wires     F/L = 2 x 10^-7  x  I1 I2 / d      (N per metre)
  Coil centre        B  =  2 pi x 10^-7 x N I / a       (tesla)
  Solenoid           B  =  4 pi x 10^-7 x n I  =  1.26 x 10^-6 n I

  1 eV  =  1.6 x 10^-19  J
  1 MeV =  1.6 x 10^-13  J     (divide joules by this to get MeV)
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+------------------------------------------------------------+
  | 1  |   F  =  q v B sin(theta)         and   F = q(v x B)        |
  +----+------------------------------------------------------------+
  | 2  |   F  =  B I L sin(theta)                                   |
  +----+------------------------------------------------------------+
  | 3  |   r  =  m v / ( q B )                                      |
  +----+------------------------------------------------------------+
  | 4  |   T  =  2 pi m / ( q B )    ,   f = q B / ( 2 pi m )       |
  +----+------------------------------------------------------------+
  | 5  |   KE_max  =  q^2 B^2 R^2 / ( 2 m )      (cyclotron)        |
  +----+------------------------------------------------------------+
  | 6  |   F / L  =  mu0 I1 I2 / ( 2 pi d )  =  2x10^-7 I1I2 / d    |
  +----+------------------------------------------------------------+
  | 7  |   dB  =  ( mu0 / 4pi ) I dl sin(theta) / r^2               |
  +----+------------------------------------------------------------+
  | 8  |   B  =  mu0 I / ( 2 pi r )            straight wire        |
  +----+------------------------------------------------------------+
  | 9  |   B  =  mu0 N I / ( 2 a )             centre of a coil     |
  +----+------------------------------------------------------------+
  | 10 |   B  =  mu0 N I a^2 / [ 2 (a^2+x^2)^(3/2) ]   on the axis  |
  +----+------------------------------------------------------------+
  | 11 |   B  =  mu0 n I  (solenoid)  ;  B = mu0 N I/(2 pi r) (toro)|
  +----+------------------------------------------------------------+
  | 12 |   tau = N I A B sin(theta)  ;  S = IgG/(I-Ig) ; R = V/Ig-G |
  +----+------------------------------------------------------------+
```
