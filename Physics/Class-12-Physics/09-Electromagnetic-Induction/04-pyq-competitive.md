# Electromagnetic Induction — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice. Grouped by **PATTERN**, not by year, because the same
shapes come back every session with different numbers.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip only if you truly   |
  |                  |                      |  do not know              |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Physics, 40 questions)  ->  1 to 2
  JEE Main        (Physics, 25 questions)  ->  1 to 2

  Counted together with Alternating Current, this pair gives
  2 to 4 questions in every paper. It is worth the time.
```

---

# PATTERN 1 — Magnetic flux, its unit and its dimensions

### Q1
The dimensional formula of magnetic flux is

(a) `[ M L^2 T^-2 A^-1 ]` &nbsp; (b) `[ M L^2 T^-3 A^-1 ]` &nbsp;
(c) `[ M L^2 T^-2 A^-2 ]` &nbsp; (d) `[ M T^-2 A^-1 ]`

**ANSWER: (a)**
```
  phi = e x t     ->   [ M L^2 T^-3 A^-1 ] x [ T ]  =  [ M L^2 T^-2 A^-1 ]
```
> **SHORTCUT:** option (b) is EMF, (c) is inductance, (d) is B.
> Learn those four together and this whole family becomes free marks.

---

### Q2
The weber is equivalent to

(a) volt / second &nbsp; (b) volt x second &nbsp; (c) ampere x metre &nbsp;
(d) tesla / metre^2

**ANSWER: (b)**
```
  e = d(phi)/dt   ->   phi = e x t   ->   Wb = V s
  Also  Wb = T m^2 .
```

---

### Q3
A coil of area 0.1 m^2 is placed in a field of 0.2 T such that the field makes
30 degrees with the **plane** of the coil. The flux linked is

(a) 0.02 Wb &nbsp; (b) 0.01 Wb &nbsp; (c) 0.017 Wb &nbsp; (d) zero

**ANSWER: (b)**
```
  Angle with the PLANE = 30    ->    angle with the NORMAL = 60

  phi = B A cos 60 = 0.2 x 0.1 x 0.5 = 0.01 Wb
```
> **SHORTCUT:** the moment you see the word **PLANE**, subtract from 90.
> This trap appears again and again.

---

### Q4
The flux through a coil is maximum when the plane of the coil is

(a) parallel to B &nbsp; (b) perpendicular to B &nbsp;
(c) at 45 degrees to B &nbsp; (d) it is the same in all positions

**ANSWER: (b)**
```
  Plane PERPENDICULAR to B  ->  normal PARALLEL to B  ->  theta = 0
  ->  phi = B A  ->  MAXIMUM
```

---

# PATTERN 2 — Faraday's law: differentiate the flux

### Q5
The flux through a coil varies as `phi = 10 t^2 - 50 t + 250` weber. The
induced EMF at t = 3 s is

(a) 10 V &nbsp; (b) 190 V &nbsp; (c) 100 V &nbsp; (d) zero

**ANSWER: (a)**
```
  d(phi)/dt  =  20 t - 50
  At t = 3   =  60 - 50  =  10 Wb/s

  |e| = 10 V
```
> **SHORTCUT:** never substitute t into phi itself. Differentiate FIRST,
> then substitute. Half the wrong answers come from doing it the other way.

---

### Q6
For the coil in Q5, the induced EMF is ZERO at

(a) t = 2.5 s &nbsp; (b) t = 5 s &nbsp; (c) t = 0 &nbsp; (d) never

**ANSWER: (a)**
```
  20 t - 50 = 0   ->   t = 50 / 20 = 2.5 s
```

---

### Q7
A coil of 100 turns has its flux changed by 0.02 Wb in 0.1 s. The average
induced EMF is

(a) 0.2 V &nbsp; (b) 2 V &nbsp; (c) 20 V &nbsp; (d) 200 V

**ANSWER: (c)**
```
  e = N ( d phi ) / dt = 100 x 0.02 / 0.1 = 20 V
```
> **SHORTCUT:** the commonest slip is forgetting N. Circle N in the question.

---

### Q8
A coil of 50 turns and resistance 20 ohm has its flux changed by 0.04 Wb. The
charge that flows through it is

(a) 0.1 C &nbsp; (b) 1 C &nbsp; (c) 0.01 C &nbsp; (d) it depends on the time taken

**ANSWER: (a)**
```
        N ( d phi )       50 x 0.04        2
  q  =  ------------  =  -----------  =  ----  =  0.1 C
             R               20            20
```
> **SHORTCUT:** the induced CHARGE never contains time. If the options include
> "depends on time", it is a trap and the answer is a number.

---

### Q9
A magnet is dropped towards a coil, first slowly and then quickly. Compared
with the slow drop, the fast drop gives

(a) more charge &nbsp; (b) less charge &nbsp; (c) the same charge &nbsp;
(d) no charge

**ANSWER: (c)**
```
  q depends only on the total flux change and R.
  A faster drop gives a BIGGER current for a SHORTER time — same charge.
```

---

# PATTERN 3 — Lenz's law: which way, and what force?

### Q10
A bar magnet is dropped along the axis of a long vertical copper pipe. Its
acceleration is

(a) equal to g &nbsp; (b) greater than g &nbsp; (c) less than g &nbsp;
(d) zero always

**ANSWER: (c)**
```
  The falling magnet induces eddy currents in the pipe. By Lenz's law
  they oppose its motion, producing an upward retarding force.

  Net downward force < mg   ->   acceleration < g
  (Eventually it reaches a constant TERMINAL velocity.)

  In a plastic or glass pipe there are no induced currents,
  so the magnet falls with a = g.
```

---

### Q11
A magnetic field directed out of the page through a circular loop is
increasing. The induced current in the loop is

(a) clockwise &nbsp; (b) anticlockwise &nbsp; (c) zero &nbsp; (d) first one, then the other

**ANSWER: (a)**
```
  Flux towards you is INCREASING
     -> induced current opposes it
     -> its own field must go INTO the page
     -> by the right-hand rule the current is CLOCKWISE (as you see it)
```
> **SHORTCUT (memorise as one line):**
> **towards you and increasing -> CLOCKWISE ; decreasing -> ANTICLOCKWISE.**

---

### Q12
The south pole of a magnet is moved AWAY from a coil. The face of the coil
nearest the magnet behaves as a

(a) north pole and attracts it &nbsp; (b) south pole and attracts it &nbsp;
(c) north pole and repels it &nbsp; (d) south pole and repels it

**ANSWER: (a)**
```
  MOVING AWAY  ->  the coil tries to bring it back  ->  ATTRACTION
  To attract a SOUTH pole, the near face must be a NORTH pole.
```
> **SHORTCUT:** approaching = REPEL, receding = ATTRACT. Decide that first,
> then choose the pole that produces it.

---

### Q13
Lenz's law is a consequence of the law of conservation of

(a) charge &nbsp; (b) momentum &nbsp; (c) energy &nbsp; (d) mass

**ANSWER: (c)**

---

# PATTERN 4 — Motional EMF, and the force and power that go with it

### Q14
A rod of length 0.5 m moves at 4 m/s perpendicular to a field of 0.3 T. The
EMF induced is

(a) 0.6 V &nbsp; (b) 6 V &nbsp; (c) 0.06 V &nbsp; (d) 1.2 V

**ANSWER: (a)**
```
  e = B l v = 0.3 x 0.5 x 4 = 0.6 V
```

---

### Q15
A rod of length 1 m slides at 2 m/s on rails in a field of 0.5 T. The circuit
resistance is 5 ohm. The force needed to keep the rod moving uniformly is

(a) 0.1 N &nbsp; (b) 0.2 N &nbsp; (c) 0.5 N &nbsp; (d) 1 N

**ANSWER: (a)**
```
       B^2 l^2 v       ( 0.5 )^2 x ( 1 )^2 x 2       0.25 x 2
  F = -----------  =  -------------------------  =  ----------  =  0.1 N
            R                     5                      5
```

---

### Q16
For the rod in Q15, the power dissipated as heat is

(a) 0.1 W &nbsp; (b) 0.2 W &nbsp; (c) 0.4 W &nbsp; (d) 2 W

**ANSWER: (b)**
```
  P = F v = 0.1 x 2 = 0.2 W

  CHECK:  e = B l v = 1 V , I = 1/5 = 0.2 A , I^2 R = 0.04 x 5 = 0.2 W
```
> **SHORTCUT:** mechanical power supplied = heat dissipated, ALWAYS.
> Compute whichever is easier and you have both.

---

### Q17
An aeroplane with a wingspan of 20 m flies horizontally at 250 m/s in a place
where the vertical component of the earth's field is 5 x 10^-5 T. The EMF
between its wing tips is

(a) 0.25 V &nbsp; (b) 2.5 V &nbsp; (c) 0.025 V &nbsp; (d) 25 V

**ANSWER: (a)**
```
  e = B(vertical) l v
    = 5 x 10^-5 x 20 x 250
    = 5 x 10^-5 x 5000
    = 0.25 V
```
> **SHORTCUT:** for a HORIZONTALLY flying plane, only the VERTICAL component
> of the earth's field matters. If it says the plane flies vertically, use
> the horizontal component.

---

### Q18
A rod of mass m sliding on rails is released with speed v0 and no applied
force. Its velocity afterwards

(a) stays constant &nbsp; (b) falls linearly to zero &nbsp;
(c) falls exponentially &nbsp; (d) increases

**ANSWER: (c)**
```
                            B^2 l^2
  m dv/dt = - B I l = -  ----------- v      (retardation proportional to v)
                              R

              ->   v  =  v0  exp( - B^2 l^2 t / ( m R ) )
```

---

### Q19
In Q18, the total heat produced in the resistor before the rod stops is

(a) `m v0^2` &nbsp; (b) `(1/2) m v0^2` &nbsp; (c) `(1/4) m v0^2` &nbsp; (d) zero

**ANSWER: (b)**
```
  The rod ends at rest, so ALL of its kinetic energy has become heat.

           Total heat  =  (1/2) m v0^2
```
> **SHORTCUT:** never integrate. Use energy conservation: initial KE minus
> final KE = heat.

---

# PATTERN 5 — Rotating rod and rotating disc

### Q20
A rod of length 1 m rotates about one end at 2 revolutions per second in a
field of 0.5 T perpendicular to the plane of rotation. The EMF between its
ends is

(a) 1.57 V &nbsp; (b) 3.14 V &nbsp; (c) 6.28 V &nbsp; (d) 0.5 V

**ANSWER: (b)**
```
  omega = 2 pi f = 2 pi x 2 = 4 pi = 12.57 rad/s

  e = (1/2) B omega l^2
    = 0.5 x 0.5 x 12.57 x ( 1 )^2
    = 3.14 V
```
> **SHORTCUT:** a rotating rod always carries the factor **one half**.
> A sliding rod never does.

---

### Q21
A metal wheel with 10 conducting spokes rotates in a magnetic field parallel
to its axle. The EMF between the axle and the rim is

(a) 10 times that of one spoke &nbsp; (b) the same as one spoke &nbsp;
(c) one tenth of one spoke &nbsp; (d) zero

**ANSWER: (b)**
```
  All the spokes are connected between the SAME two points (axle and
  rim), so they are in PARALLEL. Sources of equal EMF in parallel give
  the EMF of ONE of them.
```

---

# PATTERN 6 — Self inductance

### Q22
The self inductance of a solenoid is L. If both the number of turns and the
length are doubled (area unchanged), the new inductance is

(a) L &nbsp; (b) 2L &nbsp; (c) 4L &nbsp; (d) L/2

**ANSWER: (b)**
```
        mu0 N^2 A                 ( 2N )^2       4
  L =  -----------      ->   L' = --------- L = --- L  =  2 L
             l                      ( 2l )       2
```
> **SHORTCUT:** write the formula, replace each symbol by its multiple,
> cancel. Never reason it out in words.

---

### Q23
A solenoid of 1000 turns, length 0.5 m and area 10 cm^2 has a self inductance
of about

(a) 2.5 mH &nbsp; (b) 0.25 mH &nbsp; (c) 25 mH &nbsp; (d) 0.5 H

**ANSWER: (a)**
```
        mu0 N^2 A      ( 4 pi x 10^-7 )( 1000 )^2 ( 1 x 10^-3 )
  L  = -----------  =  ------------------------------------------
             l                          0.5

     = ( 4 pi x 10^-7 ) x ( 10^6 x 10^-3 / 0.5 )
     = ( 4 pi x 10^-7 ) x 2000
     = 2.51 x 10^-3 H   =  2.51 mH
```

---

### Q24
The current in a 0.5 H coil rises from 0 to 2 A in 0.05 s. The magnitude of
the self-induced EMF is

(a) 20 V &nbsp; (b) 2 V &nbsp; (c) 40 V &nbsp; (d) 0.05 V

**ANSWER: (a)**
```
  dI/dt = 2 / 0.05 = 40 A/s
  |e|   = L dI/dt  = 0.5 x 40 = 20 V
```

---

### Q25
The self inductance of a coil does NOT depend on

(a) the number of turns &nbsp; (b) the area of cross-section &nbsp;
(c) the current through it &nbsp; (d) the core material

**ANSWER: (c)**
```
  L is purely GEOMETRICAL (plus the core). Like resistance and
  capacitance, it does not depend on what is flowing through it.
```

---

### Q26
The dimensional formula of self inductance is

(a) `[ M L^2 T^-2 A^-2 ]` &nbsp; (b) `[ M L^2 T^-2 A^-1 ]` &nbsp;
(c) `[ M L^2 T^-1 A^-2 ]` &nbsp; (d) `[ M L T^-2 A^-2 ]`

**ANSWER: (a)**
```
  L = phi / I  =  [ M L^2 T^-2 A^-1 ] / [ A ]  =  [ M L^2 T^-2 A^-2 ]
```

---

### Q27
An iron core is inserted into an air-cored coil. Its self inductance

(a) decreases &nbsp; (b) stays the same &nbsp; (c) increases greatly &nbsp;
(d) becomes zero

**ANSWER: (c)**
```
  L = mu0 mu(r) n^2 A l ,  and for iron mu(r) is in the hundreds or
  thousands, so L increases enormously.
```

---

# PATTERN 7 — Energy stored and energy density

### Q28
The energy stored in a 0.4 H inductor carrying 5 A is

(a) 1 J &nbsp; (b) 5 J &nbsp; (c) 10 J &nbsp; (d) 2 J

**ANSWER: (b)**
```
  U = (1/2) L I^2 = 0.5 x 0.4 x 25 = 5 J
```

---

### Q29
If the current in an inductor is doubled, the stored energy becomes

(a) twice &nbsp; (b) half &nbsp; (c) four times &nbsp; (d) unchanged

**ANSWER: (c)**
```
  U is proportional to I^2 .
```
> **SHORTCUT:** the same "square" trap works for a capacitor
> ( U = (1/2) C V^2 ). If you see "doubled", think 4.

---

### Q30
The energy density of a magnetic field of 0.5 T is about

(a) 1 x 10^5 J/m^3 &nbsp; (b) 1 x 10^3 J/m^3 &nbsp;
(c) 1 x 10^-5 J/m^3 &nbsp; (d) 250 J/m^3

**ANSWER: (a)**
```
        B^2          ( 0.5 )^2            0.25
  u = --------  =  ------------------  = -------------  =  9.95 x 10^4
       2 mu0        2 x 4 pi x 10^-7      2.513 x 10^-6

    which is about 1 x 10^5 J / m^3
```

---

# PATTERN 8 — Mutual inductance and coupling

### Q31
Two coils of self inductance 8 mH and 2 mH have a coefficient of coupling
0.5. Their mutual inductance is

(a) 2 mH &nbsp; (b) 4 mH &nbsp; (c) 8 mH &nbsp; (d) 1 mH

**ANSWER: (a)**
```
  M = k sqrt( L1 L2 ) = 0.5 x sqrt( 8 x 2 ) = 0.5 x sqrt(16)
                      = 0.5 x 4  =  2 mH
```

---

### Q32
For the same two coils, the LARGEST mutual inductance possible is

(a) 2 mH &nbsp; (b) 4 mH &nbsp; (c) 10 mH &nbsp; (d) 16 mH

**ANSWER: (b)**
```
  M is greatest when k = 1 :   M(max) = sqrt( L1 L2 ) = 4 mH
```
> **SHORTCUT:** M can never exceed `sqrt(L1 L2)`. Any option bigger than
> that can be crossed out immediately.

---

### Q33
The mutual inductance of two coils is 0.5 H. The current in the primary
changes at 4 A/s. The EMF induced in the secondary is

(a) 0.125 V &nbsp; (b) 2 V &nbsp; (c) 8 V &nbsp; (d) 4.5 V

**ANSWER: (b)**
```
  |e2| = M ( dI1/dt ) = 0.5 x 4 = 2 V
```

---

### Q34
Two coils are placed with their axes at right angles. Their mutual inductance
is

(a) maximum &nbsp; (b) zero &nbsp; (c) unchanged &nbsp; (d) infinite

**ANSWER: (b)**
```
  No flux of one coil links the other, so M = 0 and k = 0.
  M is MAXIMUM when the coils are COAXIAL.
```

---

### Q35
A transformer works on the principle of

(a) self induction &nbsp; (b) mutual induction &nbsp;
(c) eddy currents &nbsp; (d) the motor effect

**ANSWER: (b)**

---

# PATTERN 9 — Combinations of inductors

### Q36
Two inductors of 6 H and 3 H (no mutual coupling) in parallel give

(a) 9 H &nbsp; (b) 2 H &nbsp; (c) 4.5 H &nbsp; (d) 18 H

**ANSWER: (b)**
```
  L = L1 L2 / ( L1 + L2 ) = ( 6 x 3 ) / 9 = 2 H
```
> **SHORTCUT:** inductors combine EXACTLY like resistors.

---

### Q37
Two coils of self inductance L1 and L2 are connected in series so that their
fields OPPOSE, with mutual inductance M. The equivalent inductance is

(a) `L1 + L2` &nbsp; (b) `L1 + L2 + 2M` &nbsp; (c) `L1 + L2 - 2M` &nbsp;
(d) `L1 - L2`

**ANSWER: (c)**

---

# PATTERN 10 — The AC generator

### Q38
A coil of 50 turns and area 0.02 m^2 rotates at 50 Hz in a field of 0.1 T.
The peak EMF is

(a) 3.14 V &nbsp; (b) 31.4 V &nbsp; (c) 314 V &nbsp; (d) 0.314 V

**ANSWER: (b)**
```
  omega = 2 pi f = 2 x 3.14 x 50 = 314 rad/s

  e0 = N B A omega = 50 x 0.1 x 0.02 x 314
                   = 0.1 x 314
                   = 31.4 V
```

---

### Q39
In an AC generator, the EMF is maximum when

(a) the flux is maximum &nbsp; (b) the flux is zero &nbsp;
(c) the coil plane is perpendicular to B &nbsp; (d) the coil is at rest

**ANSWER: (b)**
```
  e = - d(phi)/dt .  The EMF follows the RATE of change, not the size.
  When phi is maximum its rate of change is zero, and vice versa.
  Flux and EMF are 90 degrees out of phase.
```
> **SHORTCUT:** "flux maximum -> EMF zero" is one of the most repeated
> single lines in this whole chapter.

---

### Q40
If the speed of rotation of an AC generator is doubled, the peak EMF and the
frequency respectively become

(a) 2 times, 2 times &nbsp; (b) 2 times, unchanged &nbsp;
(c) 4 times, 2 times &nbsp; (d) unchanged, 2 times

**ANSWER: (a)**
```
  e0 = N B A omega   ->   e0 is proportional to omega
  f  = omega / 2 pi  ->   f  is proportional to omega
  Both double.
```

---

# PATTERN 11 — Eddy currents

### Q41
Eddy currents are NOT used in

(a) induction furnaces &nbsp; (b) electromagnetic braking &nbsp;
(c) dead-beat galvanometers &nbsp; (d) increasing the efficiency of a transformer

**ANSWER: (d)**
```
  In a transformer eddy currents are a LOSS. They are minimised by
  laminating the core, not used.
```

---

### Q42
The core of a transformer is laminated in order to reduce

(a) hysteresis loss &nbsp; (b) eddy current loss &nbsp;
(c) copper loss &nbsp; (d) flux leakage

**ANSWER: (b)**
```
  Lamination raises the resistance of the eddy-current paths.
  (Hysteresis loss is reduced by CHOOSING soft iron / silicon steel;
   copper loss by using thicker wire; flux leakage by better winding.)
```

---

### Q43
A copper plate swinging between the poles of a magnet stops quickly. If deep
slots are cut in the plate, it

(a) stops even faster &nbsp; (b) swings much longer &nbsp;
(c) behaves the same &nbsp; (d) does not move at all

**ANSWER: (b)**
```
  The slots break up the large eddy-current loops, so the currents and
  the magnetic damping become much smaller. Same principle as
  laminating a core.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+-----------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY              |
  +--------------------------------------+-----------------------------------+
  |  angle given with the PLANE of coil  |  use  cos( 90 - angle )           |
  +--------------------------------------+-----------------------------------+
  |  flux given as a function of t       |  DIFFERENTIATE first, then put    |
  |                                      |  in the value of t                |
  +--------------------------------------+-----------------------------------+
  |  the word CHARGE                     |  q = N (d phi) / R .  No time in  |
  |                                      |  the formula at all.              |
  +--------------------------------------+-----------------------------------+
  |  a coil with N turns                 |  multiply by N. Circle N first.   |
  +--------------------------------------+-----------------------------------+
  |  "field out of the page, increasing" |  induced current CLOCKWISE        |
  |  "... decreasing"                    |  induced current ANTICLOCKWISE    |
  +--------------------------------------+-----------------------------------+
  |  magnet APPROACHING a coil           |  coil REPELS it                   |
  |  magnet MOVING AWAY                  |  coil ATTRACTS it                 |
  +--------------------------------------+-----------------------------------+
  |  magnet dropped down a metal pipe    |  a < g , then terminal velocity   |
  +--------------------------------------+-----------------------------------+
  |  rod SLIDING on rails                |  e = B l v      (no 1/2)          |
  |  rod ROTATING about one end          |  e = (1/2) B omega l^2  (with 1/2)|
  +--------------------------------------+-----------------------------------+
  |  "force to keep it moving uniformly" |  F = B^2 l^2 v / R                |
  +--------------------------------------+-----------------------------------+
  |  "power supplied" or "heat produced" |  they are EQUAL: B^2 l^2 v^2 / R  |
  +--------------------------------------+-----------------------------------+
  |  rod slows down and stops            |  total heat = (1/2) m v0^2        |
  +--------------------------------------+-----------------------------------+
  |  aeroplane flying horizontally       |  use the VERTICAL component of    |
  |                                      |  the earth's field                |
  +--------------------------------------+-----------------------------------+
  |  "turns doubled"                     |  L becomes 4 times ( L ~ N^2 )    |
  +--------------------------------------+-----------------------------------+
  |  "current doubled" and asked about L |  L is UNCHANGED                   |
  |  "current doubled" and asked about U |  U becomes 4 times                |
  +--------------------------------------+-----------------------------------+
  |  iron core inserted                  |  L and M increase greatly         |
  +--------------------------------------+-----------------------------------+
  |  any M in the options bigger than    |  cross it out - impossible        |
  |  sqrt( L1 L2 )                       |                                   |
  +--------------------------------------+-----------------------------------+
  |  coil axes at right angles           |  M = 0                            |
  +--------------------------------------+-----------------------------------+
  |  inductors in series / parallel      |  treat them exactly like resistors|
  +--------------------------------------+-----------------------------------+
  |  "when is the EMF maximum?"          |  when the FLUX IS ZERO            |
  +--------------------------------------+-----------------------------------+
  |  speed of a generator doubled        |  e0 doubles AND f doubles         |
  +--------------------------------------+-----------------------------------+
  |  "why is the core laminated?"        |  to reduce EDDY CURRENT loss      |
  +--------------------------------------+-----------------------------------+
  |  transformer principle               |  MUTUAL induction                 |
  |  choke / inductor principle          |  SELF induction                   |
  +--------------------------------------+-----------------------------------+
```

```
  EAPCET has NO negative marking.
  If the clock is running out, mark SOMETHING for every question in
  this chapter. A blank is a guaranteed zero; a guess is not.
```
