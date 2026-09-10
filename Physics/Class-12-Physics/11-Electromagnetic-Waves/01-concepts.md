# Electromagnetic Waves — Concepts From Zero

**Physics 2nd Year · Chapter 11**

Read this with a pen. Copy every box. This chapter is short, so there is no
excuse for reading it passively.

---

# TOPIC 1 — THE PROBLEM: AMPERE'S LAW BREAKS DOWN

## 1.1 What Ampere's circuital law says

You already met this in the magnetism chapter. In words:

```
  +-------------------------------------------------------------+
  |                                                             |
  |   INT B . dl  =  mu0  x  I                                  |
  |                                                             |
  |   "Go once around a closed loop, add up B along the way,    |
  |    and the answer equals mu0 times the current that pokes   |
  |    THROUGH that loop."                                      |
  |                                                             |
  +-------------------------------------------------------------+
```

The loop is called an **Amperian loop**. The current I is the current passing
through **any surface that has that loop as its boundary**.

**Everyday picture.** Think of a wire loop, like the rim of a badminton racquet.
Any "net" you stretch across that rim is a valid surface. Ampere's law says: it
does not matter which net you stretch — you will always count the same current.

That claim is fine for a plain straight wire. It **fails badly** for a capacitor.

## 1.2 The charging-capacitor disaster

Take a parallel plate capacitor being charged by a battery. A conduction current
`I` flows in the connecting wires. But between the plates there is a **vacuum
(or a dielectric) — no charges move across the gap.**

Now draw ONE circular Amperian loop around the wire, close to the capacitor.
Then stretch TWO different surfaces on that same loop.

```
                        THE TWO-SURFACE PROBLEM

        conduction current I                     no current here!
                --->                                 |
                                                     v
   ============================        +---------+  gap  +---------+
      wire                             |         |       |         |
                                       |         |       |         |
   ---------- I --------->             |    +    |       |    -    |
                                       |         |       |         |
    ....                               |         |       |         |
   :    :  <-- Amperian LOOP           |         |       |         |
   :    :      (a circle around        +---------+       +---------+
    ....        the wire)                plate 1           plate 2


   SURFACE S1  —  a flat disc, punctured by the wire
   ----------------------------------------------------------------

                 wire
        ----------+---------->  I
                 /|\
                / | \
     .....................…
     :         S1          :   <-- flat disc; the WIRE passes through it
     :_____________________:

        Current through S1  =  I           So   INT B.dl = mu0 I


   SURFACE S2  —  a balloon-shaped bag that dodges the wire and
                  passes BETWEEN the capacitor plates
   ----------------------------------------------------------------

                 wire
        ----------+---------->  I
                  |
       ...........|..............
      /           |              \
     |            |     S2        |        +-------+   +-------+
     |            |   (bulges     |        |       |   |       |
     |            |    to the     |------->|   +   |   |   -   |
     |            |    right and  |        |       |   |       |
      \           |    slips into |        +-------+   +-------+
       \..........|....between....|            ^           ^
                  |    the plates)             |           |
                  |                        S2 passes through HERE,
              same LOOP as before          where NO charge crosses

        Current through S2  =  0           So   INT B.dl = 0
```

**Same loop. Two surfaces. Two completely different answers.**

```
  +--------------------------------------------------------------+
  |                                                              |
  |    Using S1  :   INT B.dl  =  mu0 I     (not zero)           |
  |    Using S2  :   INT B.dl  =  mu0 x 0   =  0                 |
  |                                                              |
  |    But  INT B.dl  is ONE definite number for ONE loop!       |
  |                                                              |
  |    ==>  AMPERE'S LAW AS WRITTEN IS INCONSISTENT.             |
  |         Something is MISSING on the right-hand side.         |
  |                                                              |
  +--------------------------------------------------------------+
```

Another way of saying the same thing: Ampere's law implicitly assumes the
current is **continuous** — that it never starts or stops anywhere. In a
charging capacitor the conduction current *does* stop dead at plate 1 and
restart at plate 2. So the law, as written, cannot cope.

> **TRAP:** In the exam, students write "Ampere's law fails for a capacitor"
> and stop. That earns almost nothing. You MUST state *why*: **two different
> surfaces bounded by the same loop give two different values of the enclosed
> current.** That sentence is the mark.

---

# TOPIC 2 — MAXWELL'S FIX: THE DISPLACEMENT CURRENT

## 2.1 The clue

Look again at the gap between the plates. There is no *charge* moving there,
but something else is definitely happening: **as charge piles up on the plates,
the electric field between them keeps growing.**

```
   As the capacitor charges:

     charge q on plate     increases  -->  E field in gap increases
                                      -->  electric FLUX PhiE increases

   E in the gap  =  q / (eps0 A)             (standard capacitor result)

   Electric flux  PhiE  =  E x A  =  q / eps0
```

Maxwell's insight (1862): **a changing electric flux behaves exactly like a
current as far as making a magnetic field is concerned.** He gave it a name.

## 2.2 The definition — LEARN THIS WORD FOR WORD

```
  +----------------------------------------------------------------+
  |                                                                |
  |                    DISPLACEMENT CURRENT                        |
  |                                                                |
  |                          d (PhiE)                              |
  |            I_d  =  eps0 -----------                            |
  |                             dt                                 |
  |                                                                |
  |   where  PhiE = electric flux through the surface              |
  |          eps0 = 8.854 x 10^-12 C^2 N^-1 m^-2                   |
  |                                                                |
  |   IN WORDS:  the current produced by a TIME-VARYING            |
  |              ELECTRIC FIELD (a changing electric flux),        |
  |              not by the motion of charges.                     |
  |                                                                |
  |   SI unit: ampere (A).   Dimensions: [ A ]  (same as current)  |
  |                                                                |
  +----------------------------------------------------------------+
```

**What "displacement" means here.** Nothing is being displaced. It is a
historical name from Maxwell's mechanical model of the ether. Do not try to
picture charges moving — there are none. The magnetic field is produced by the
*changing E field itself*.

## 2.3 Why the numbers work out perfectly

This is the beautiful part, and it is worth 2 marks on its own.

```
  Between the plates:     PhiE  =  E x A  =  ( q / (eps0 A) ) x A
                                =  q / eps0

  Therefore:              d(PhiE)     1     dq
                          -------  = ----- ----
                             dt      eps0   dt

  So:                                 d(PhiE)          1   dq      dq
                          I_d = eps0 --------- = eps0 ---- ---- = ----
                                        dt            eps0  dt     dt

                          I_d  =  dq/dt  =  I_c
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   THE DISPLACEMENT CURRENT IN THE GAP IS EXACTLY EQUAL TO THE     |
  |   CONDUCTION CURRENT IN THE WIRE.                                 |
  |                                                                   |
  |   So the two surfaces now agree:                                  |
  |                                                                   |
  |      Surface S1 (cuts the wire)   ->  Ic = I ,  Id = 0            |
  |      Surface S2 (cuts the gap)    ->  Ic = 0 ,  Id = I            |
  |                                                                   |
  |      TOTAL  ( Ic + Id )  =  I    for BOTH surfaces.               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**The great statement to write in the exam:**

> **The sum of the conduction current and the displacement current is always
> continuous — it never breaks anywhere in the circuit.** The conduction
> current hands over to the displacement current at the capacitor plate, and
> the displacement current hands it back at the other plate.

```
   ---- Ic ----> | plate |  ==== Id ====>  | plate | ---- Ic ---->

   conduction     hand-over   displacement   hand-over   conduction
   in the wire                in the gap                 in the wire

   Total current is UNBROKEN all the way round the circuit.
```

## 2.4 The modified law — AMPERE-MAXWELL LAW

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                AMPERE - MAXWELL  CIRCUITAL  LAW                   |
  |                                                                   |
  |     INT B . dl   =   mu0 ( I_c  +  I_d )                          |
  |                                                                   |
  |                                    d (PhiE)                       |
  |                  =   mu0 I_c  +  mu0 eps0 -----------             |
  |                                               dt                  |
  |                                                                   |
  |   MEANING:  a magnetic field is produced BOTH by a conduction     |
  |             current AND by a changing electric field.             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 2.5 Where each current exists

```
  +---------------------------+-------------+-------------+
  |  REGION                   |  Ic         |  Id         |
  +---------------------------+-------------+-------------+
  |  Inside the connecting    |    I        |    0        |
  |  wire                     |             |             |
  +---------------------------+-------------+-------------+
  |  Inside the capacitor gap |    0        |    I        |
  |  (while charging)         |             |             |
  +---------------------------+-------------+-------------+
  |  Capacitor fully charged  |    0        |    0        |
  |  (steady state)           |             | (E is       |
  |                           |             |  constant)  |
  +---------------------------+-------------+-------------+
  |  Inside a good conductor  |    large    |  negligible |
  |  carrying DC              |             |             |
  +---------------------------+-------------+-------------+
```

> **TRAP:** Displacement current exists only while the field is **CHANGING**.
> A fully charged capacitor sitting there has a huge E field but **zero**
> displacement current, because dPhiE/dt = 0. "Large E" is not the point.
> "Changing E" is the point.

## WORKED EXAMPLE 2A — the standard capacitor sum

**Q.** A parallel plate capacitor has circular plates of radius 12 cm separated
by 5.0 cm. It is being charged by a steady conduction current of 0.15 A.
Find (a) the displacement current between the plates, (b) the rate of change
of the electric field between the plates.
(Take eps0 = 8.854 x 10^-12 C^2 N^-1 m^-2.)

**SOLUTION**

```
  (a)  The total current must be continuous, so

           I_d  =  I_c  =  0.15 A          <-- one line, full marks


  (b)  Area of a plate:
           A = pi r^2 = 3.1416 x (0.12)^2
             = 3.1416 x 0.0144
             = 0.04524 m^2

       Between the plates, PhiE = E A , so

                     d(PhiE)           dE
           I_d = eps0 ------- = eps0 A ----
                        dt             dt

           dE            I_d              0.15
          ---- =  ---------------  =  ------------------------------
           dt         eps0 A          (8.854 x 10^-12)(0.04524)

                     0.15
              =  ---------------
                 4.006 x 10^-13

              =  3.7 x 10^11  V m^-1 s^-1
```

**ANSWER:** (a) 0.15 A  (b) about 3.7 x 10^11 V/m per second.

> Notice the plate separation 5.0 cm was **never used**. Examiners put in
> spare data on purpose. Do not panic and try to use every number.

## WORKED EXAMPLE 2B — displacement current from a rising voltage

**Q.** The voltage across a 200 pF capacitor is increasing at a steady rate of
5.0 x 10^4 volt per second. What is the displacement current in the capacitor?

**SOLUTION**

```
  q = C V     =>     dq/dt = C (dV/dt)

  And we proved  I_d = dq/dt , so

  I_d = C (dV/dt)
      = (200 x 10^-12) x (5.0 x 10^4)
      = 1000 x 10^-8
      = 1.0 x 10^-5 A
      = 10 microampere
```

**ANSWER:** I_d = 10 microampere (1.0 x 10^-5 A)

---

# TOPIC 3 — MAXWELL'S FOUR EQUATIONS (IN WORDS)

You are **not** expected to do the calculus. You ARE expected to name the four
equations and say what each one means. That is a clean 4-mark answer.

```
  +------+---------------------------+---------------------------------------+
  | No.  |  NAME                     |  WHAT IT SAYS IN PLAIN ENGLISH        |
  +------+---------------------------+---------------------------------------+
  |  1   |  GAUSS'S LAW FOR          |  The total electric flux out of a     |
  |      |  ELECTRICITY              |  closed surface = (charge inside)     |
  |      |                           |  divided by eps0.                     |
  |      |  INT E.dA = q / eps0      |                                       |
  |      |                           |  MEANING: electric field lines START  |
  |      |                           |  on positive charge and END on        |
  |      |                           |  negative charge. Charges are the     |
  |      |                           |  sources of the electric field.       |
  +------+---------------------------+---------------------------------------+
  |  2   |  GAUSS'S LAW FOR          |  The total magnetic flux out of any   |
  |      |  MAGNETISM                |  closed surface is ALWAYS ZERO.       |
  |      |                           |                                       |
  |      |  INT B.dA = 0             |  MEANING: magnetic field lines are    |
  |      |                           |  CLOSED LOOPS. There are NO magnetic  |
  |      |                           |  monopoles — you cannot have an       |
  |      |                           |  isolated N pole or S pole.           |
  +------+---------------------------+---------------------------------------+
  |  3   |  FARADAY'S LAW OF         |  The line integral of E round a loop  |
  |      |  ELECTROMAGNETIC          |  = minus the rate of change of the    |
  |      |  INDUCTION                |  magnetic flux through it.            |
  |      |                           |                                       |
  |      |  INT E.dl = -d(PhiB)/dt   |  MEANING: a CHANGING MAGNETIC FIELD   |
  |      |                           |  PRODUCES AN ELECTRIC FIELD.          |
  +------+---------------------------+---------------------------------------+
  |  4   |  AMPERE - MAXWELL LAW     |  The line integral of B round a loop  |
  |      |                           |  = mu0 times (conduction current +    |
  |      |  INT B.dl =               |  displacement current).               |
  |      |  mu0 Ic + mu0 eps0        |                                       |
  |      |         d(PhiE)/dt        |  MEANING: a magnetic field is made    |
  |      |                           |  by a current AND by a CHANGING       |
  |      |                           |  ELECTRIC FIELD.                      |
  +------+---------------------------+---------------------------------------+
```

## 3.1 The symmetry that gives birth to the wave

```
       Equation 3 (Faraday)              Equation 4 (Ampere-Maxwell)

     changing B  ---> makes E          changing E  ---> makes B


                    +---------------------+
                    |                     |
                    v                     |
              CHANGING E FIELD            |
                    |                     |
                    | makes               |
                    v                     |
              CHANGING B FIELD            |
                    |                     |
                    | makes               |
                    +---------------------+

   Each one keeps regenerating the other. Neither needs charges, wires,
   or a medium once it has started. The pair travels off through space
   on its own.

                  THAT SELF-SUSTAINING PAIR IS AN
                     ELECTROMAGNETIC  WAVE.
```

> **TRAP:** Do not say "Faraday's law says a changing magnetic field produces
> a current." It produces an **electric field** (an EMF). A current only flows
> if a conductor happens to be there. In empty space there is no conductor,
> yet the electric field is still created — which is precisely why EM waves
> can travel through vacuum.

## 3.2 What actually SENDS OUT an EM wave

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   AN ELECTROMAGNETIC WAVE IS PRODUCED BY AN                       |
  |   ACCELERATING (or OSCILLATING) ELECTRIC CHARGE.                  |
  |                                                                   |
  |     charge at rest        ->  only an electric field. No wave.    |
  |     charge moving         ->  E field + steady B field. No wave.  |
  |     at constant velocity                                          |
  |     charge ACCELERATING   ->  RADIATES an EM wave.                |
  |                                                                   |
  |   The FREQUENCY of the wave = the FREQUENCY of oscillation        |
  |   of the charge.                                                  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

That last line is worth memorising: an antenna in which electrons oscillate at
10^6 Hz sends out a radio wave of frequency 10^6 Hz. Nothing more mysterious
than that.

---

# TOPIC 4 — THE SPEED OF ELECTROMAGNETIC WAVES

## 4.1 The prediction

When Maxwell solved his four equations for empty space, out popped a wave whose
speed was fixed entirely by two constants that had been measured in the
laboratory using **capacitors and current-carrying wires** — nothing to do with
light at all.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                            1                                      |
  |         c   =   ---------------------                             |
  |                  sqrt( mu0  eps0 )                                |
  |                                                                   |
  |    mu0   = 4 pi x 10^-7   T m A^-1   (permeability of free space) |
  |    eps0  = 8.854 x 10^-12 C^2 N^-1 m^-2  (permittivity of free    |
  |                                           space)                  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## WORKED EXAMPLE 4A — check the number yourself

```
  mu0  eps0  =  ( 4 pi x 10^-7 ) x ( 8.854 x 10^-12 )

             =  ( 1.2566 x 10^-6 ) x ( 8.854 x 10^-12 )

             =  1.1126 x 10^-17    (in SI units)

  sqrt( mu0 eps0 )  =  sqrt(1.1126) x sqrt(10^-17)

                    =  1.0548 x 3.1623 x 10^-9

                    =  3.3357 x 10^-9

              1                 1
  c  =  ---------------  =  ----------------  =  2.998 x 10^8 m/s
        sqrt(mu0 eps0)      3.3357 x 10^-9

  c  =  3 x 10^8 m/s  (to one significant figure — use this in exams)
```

**And the measured speed of light was already known to be 3 x 10^8 m/s.**

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   The agreement was too exact to be a coincidence. Maxwell        |
  |   concluded:                                                      |
  |                                                                   |
  |          "LIGHT IS AN ELECTROMAGNETIC WAVE."                      |
  |                                                                   |
  |   This is one of the greatest unifications in physics: OPTICS     |
  |   became a branch of ELECTROMAGNETISM.                            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 4.2 Speed inside a material medium

Inside glass, water or any dielectric, replace mu0 by mu and eps0 by eps:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                     1                                             |
  |        v   =   -------------            where  mu  = mu0 mu_r     |
  |                sqrt( mu eps )                  eps = eps0 eps_r   |
  |                                                                   |
  |                                                                   |
  |                     c                                             |
  |        v   =   ----------------  =  c / n                         |
  |                sqrt(mu_r eps_r)                                   |
  |                                                                   |
  |        REFRACTIVE INDEX   n  =  sqrt( mu_r  eps_r )               |
  |                                                                   |
  |        For most transparent materials mu_r is almost 1, so        |
  |                                                                   |
  |                   n  =  sqrt( eps_r )        (approximately)      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Because mu_r and eps_r are always greater than 1 for a material,
**v is always LESS than c.** Nothing beats light in vacuum.

## WORKED EXAMPLE 4B

**Q.** A medium has relative permittivity eps_r = 4.0 and relative permeability
mu_r = 1.0. Find (a) the refractive index, (b) the speed of light in it.

**SOLUTION**

```
  (a)   n  =  sqrt( mu_r eps_r )  =  sqrt( 1.0 x 4.0 )  =  2.0

  (b)   v  =  c / n  =  ( 3 x 10^8 ) / 2.0  =  1.5 x 10^8 m/s
```

**ANSWER:** n = 2.0 , v = 1.5 x 10^8 m/s

> **TRAP:** When a wave passes from vacuum into a medium, **the FREQUENCY does
> NOT change** (it is set by the source). The **speed drops**, so the
> **wavelength drops** in the same ratio: lambda_medium = lambda_vacuum / n.

---

# TOPIC 5 — THE NATURE AND PROPERTIES OF EM WAVES

## 5.1 The picture — draw this in the exam

An EM wave travelling along the **x-axis**, with E along **y** and B along **z**:

```
                       y
                       ^
                       |     E (electric field)
                       |    /|\        /|\
                    E0 |   / | \      / | \
                       |  /  |  \    /  |  \
                       | /   |   \  /   |   \
                       |/    |    \/    |    \
      -----------------+-----+-----\----+-----\------------> x
                      /|     |      \   |      \    direction of
                     / |     |       \  |       \   propagation
                    /  |     |        \ |        \
                   /   v     v         \v         v
                  /
                 /  B0 |  B (magnetic field) coming out of / going
                z      |  into the page, drawn here in the x-z plane
                       |
                 z <---+

     E is along  y      (up and down)
     B is along  z      (in and out of the page)
     wave moves along x  (to the right)

     E  is perpendicular to  B
     BOTH are perpendicular to the direction of travel
     ==>  the wave is TRANSVERSE
```

A cleaner side-by-side view of the same wave:

```
        E field (vertical)              B field (horizontal, into page)

    ^ E                                  ^ B
    |    ___                             |    ___
    |   /   \        ___                 |   /   \        ___
    |  /     \      /   \                |  /     \      /   \
    | /       \    /     \               | /       \    /     \
  --+/---------\--/-------\--> x       --+/---------\--/-------\--> x
    |           \/                       |           \/
    |                                    |
    |  E and B reach their MAXIMUM at the SAME instant and the SAME
    |  place, and are ZERO at the same instant.
    |
    |            ==>  E and B are IN PHASE
```

## 5.2 The properties — LEARN THIS NUMBERED LIST

This list, written out with one line each, is a complete 4-mark answer.

```
  +----+--------------------------------------------------------------+
  | 1  |  EM waves are TRANSVERSE waves.                              |
  +----+--------------------------------------------------------------+
  | 2  |  The electric field E and the magnetic field B are           |
  |    |  PERPENDICULAR TO EACH OTHER, and BOTH are perpendicular     |
  |    |  to the DIRECTION OF PROPAGATION.                            |
  |    |  The direction of travel is along  E x B.                    |
  +----+--------------------------------------------------------------+
  | 3  |  E and B oscillate IN PHASE — they peak together and are     |
  |    |  zero together.                                              |
  +----+--------------------------------------------------------------+
  | 4  |  Their amplitudes are linked by   E0 / B0  =  c              |
  |    |  (and at every instant  E / B = c ).                         |
  +----+--------------------------------------------------------------+
  | 5  |  They require NO MATERIAL MEDIUM. They travel through        |
  |    |  vacuum — which is how sunlight reaches Earth.               |
  +----+--------------------------------------------------------------+
  | 6  |  They are NOT DEFLECTED by electric or magnetic fields,      |
  |    |  because they carry NO CHARGE.                               |
  +----+--------------------------------------------------------------+
  | 7  |  They CARRY ENERGY and MOMENTUM, and therefore exert         |
  |    |  RADIATION PRESSURE on a surface they fall on.               |
  +----+--------------------------------------------------------------+
  | 8  |  They travel in vacuum at the SAME speed c = 3 x 10^8 m/s,   |
  |    |  whatever their frequency.                                   |
  +----+--------------------------------------------------------------+
  | 9  |  They are produced by ACCELERATED / OSCILLATING CHARGES.     |
  +----+--------------------------------------------------------------+
  | 10 |  They show reflection, refraction, interference,             |
  |    |  diffraction and POLARISATION (polarisation is direct proof  |
  |    |  that they are transverse).                                  |
  +----+--------------------------------------------------------------+
```

## 5.3 The wave equations (for the numericals)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   E  =  E0 sin( k x  -  omega t )        (E along y)              |
  |   B  =  B0 sin( k x  -  omega t )        (B along z)              |
  |                                                                   |
  |   Note: the SAME bracket in both — that is what "in phase" means. |
  |                                                                   |
  |   omega  =  2 pi nu           (angular frequency, rad/s)          |
  |   k      =  2 pi / lambda     (propagation constant / wave        |
  |                                number, rad/m)                     |
  |                                                                   |
  |             omega                                                 |
  |   c  =   ----------  =  nu x lambda                               |
  |               k                                                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## WORKED EXAMPLE 5A — the classic 2-marker

**Q.** In a plane electromagnetic wave the electric field oscillates with an
amplitude of 48 V/m at a frequency of 2.0 x 10^10 Hz. Find (a) the wavelength,
(b) the amplitude of the magnetic field, (c) omega and k.

**SOLUTION**

```
  (a)   c = nu lambda

              c            3 x 10^8
        lambda = ---- = ---------------- = 1.5 x 10^-2 m = 1.5 cm
              nu          2.0 x 10^10


  (b)   E0 / B0 = c      =>    B0 = E0 / c

              48
        B0 = --------- = 1.6 x 10^-7 T          (= 0.16 microtesla)
             3 x 10^8


  (c)   omega = 2 pi nu = 2 x 3.1416 x 2.0 x 10^10
              = 1.26 x 10^11 rad/s

        k = omega / c = (1.26 x 10^11) / (3 x 10^8)
          = 4.2 x 10^2 rad/m   =  419 rad/m

        (Check:  k = 2 pi / lambda = 6.283 / 0.015 = 419 rad/m.  OK.)
```

**ANSWER:** lambda = 1.5 cm, B0 = 1.6 x 10^-7 T,
omega = 1.26 x 10^11 rad/s, k = 419 rad/m

> **TRAP:** B0 is always a *tiny* number — of the order of 10^-7 T or smaller —
> because you divide by 3 x 10^8. If your B0 comes out bigger than E0, you have
> multiplied instead of divided. Sanity-check every time.

---

# TOPIC 6 — ENERGY, INTENSITY, MOMENTUM, RADIATION PRESSURE

## 6.1 Energy density

An EM wave carries energy in **both** of its fields.

```
  Energy stored per unit volume in an ELECTRIC field:

           u_E  =  (1/2) eps0 E^2

  Energy stored per unit volume in a MAGNETIC field:

           u_B  =  B^2 / ( 2 mu0 )

  TOTAL instantaneous energy density:

           u  =  u_E  +  u_B  =  (1/2) eps0 E^2  +  B^2/(2 mu0)
```

## 6.2 The two contributions are EQUAL — prove it in two lines

This is a favourite short question.

```
  Start with   B = E / c   and   c^2 = 1 / (mu0 eps0) ,
  so           1 / c^2 = mu0 eps0.

           B^2        ( E / c )^2         E^2            E^2  mu0 eps0
  u_B  =  -------  =  ------------  =  -----------  =  ------------------
          2 mu0          2 mu0          2 mu0 c^2            2 mu0

       =  (1/2) eps0 E^2

       =  u_E                            PROVED.
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   u_E  =  u_B                                                     |
  |                                                                   |
  |   The energy of an EM wave is shared EQUALLY between its          |
  |   electric field and its magnetic field — HALF AND HALF.          |
  |                                                                   |
  |   Hence      u  =  2 u_E  =  eps0 E^2  =  B^2 / mu0               |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 6.3 Averaging over a cycle

E and B keep swinging, so we quote the **average** over one full cycle.
Since the average of sin^2 over a cycle is 1/2:

```
                 < E^2 >  =  E0^2 / 2          < B^2 >  =  B0^2 / 2

  +-------------------------------------------------------------------+
  |                                                                   |
  |   AVERAGE ENERGY DENSITY                                          |
  |                                                                   |
  |      < u_E >  =  (1/4) eps0 E0^2                                  |
  |      < u_B >  =  B0^2 / ( 4 mu0 )      ( = < u_E > )              |
  |                                                                   |
  |      < u >    =  (1/2) eps0 E0^2   =   B0^2 / ( 2 mu0 )           |
  |                                                                   |
  |               =  eps0 E_rms^2      where E_rms = E0 / sqrt(2)     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 6.4 Intensity

**Intensity** = energy crossing unit area per unit time (unit: W/m^2).
Imagine a box of length c and cross-section 1 m^2: all the energy in it crosses
the face in one second.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    I  =  < u >  x  c   =   (1/2) eps0 E0^2 c                      |
  |                                                                   |
  |    Also:   < u >  =  I / c                                        |
  |                                                                   |
  |    Unit of I: watt per square metre (W m^-2)                      |
  |                                                                   |
  |    A point source of power P:    I  =  P / ( 4 pi r^2 )           |
  |                                  (inverse square law)             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 6.5 Momentum and radiation pressure

EM waves carry momentum. If a surface **completely absorbs** energy U:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    MOMENTUM DELIVERED                                             |
  |                                                                   |
  |       p  =  U / c        <-- surface totally ABSORBS the wave     |
  |                                                                   |
  |       p  =  2U / c       <-- surface totally REFLECTS the wave    |
  |                              (the wave's momentum is reversed,    |
  |                               so the change is twice as big)      |
  |                                                                   |
  |                                                                   |
  |    RADIATION PRESSURE   (force per unit area)                     |
  |                                                                   |
  |       P  =  I / c        <-- perfectly ABSORBING (black) surface  |
  |                                                                   |
  |       P  =  2 I / c      <-- perfectly REFLECTING (mirror)        |
  |                                                                   |
  |    FORCE on area A :      F  =  P x A                             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Everyday picture.** Radiation pressure is like a stream of extremely light
ping-pong balls hitting a wall. If they stick, you feel one push. If they bounce
straight back, you feel twice the push. Same physics, factor of 2.

```
      ABSORBED                            REFLECTED

      ~~~>  |####|                        ~~~>  |    |
            |####|   ball stops                 |    |  ball bounces
            |####|   momentum change = p        |    |  <~~~
            |####|                              |    |  momentum change = 2p
       black wall                             mirror
```

Radiation pressure is real but small — which is why **comet tails always point
away from the Sun**, and why **solar sails** for spacecraft are a serious idea.

## WORKED EXAMPLE 6A — the full sunlight sum

**Q.** Sunlight falls on Earth's upper atmosphere with an intensity of
1.4 kW/m^2. Find (a) the average energy density, (b) the amplitude E0 of the
electric field, (c) the amplitude B0, (d) the radiation pressure if the light
falls on a perfectly absorbing surface, and (e) on a perfect mirror.

**SOLUTION**

```
  Given:  I = 1400 W/m^2 ,  c = 3 x 10^8 m/s ,
          eps0 = 8.854 x 10^-12


  (a)   < u >  =  I / c   =   1400 / ( 3 x 10^8 )

               =  4.67 x 10^-6  J m^-3


  (b)   I = (1/2) eps0 E0^2 c

                       2 I                    2 x 1400
        E0^2  =  ------------------  =  --------------------------------
                    eps0  c              (8.854 x 10^-12)(3 x 10^8)

                     2800
              =  --------------  =  1.054 x 10^6
                 2.656 x 10^-3

        E0  =  sqrt(1.054 x 10^6)  =  1.03 x 10^3  V/m   (about 1027 N/C)


  (c)   B0  =  E0 / c  =  (1.03 x 10^3) / (3 x 10^8)

            =  3.4 x 10^-6 T    (3.4 microtesla)


  (d)   Perfectly ABSORBING:

        P  =  I / c  =  1400 / (3 x 10^8)  =  4.7 x 10^-6  N/m^2 (Pa)


  (e)   Perfectly REFLECTING:

        P  =  2 I / c  =  9.3 x 10^-6  N/m^2 (Pa)
```

**ANSWER:** (a) 4.67 x 10^-6 J/m^3  (b) 1.03 x 10^3 V/m  (c) 3.4 x 10^-6 T
(d) 4.7 x 10^-6 Pa  (e) 9.3 x 10^-6 Pa

```
  CROSS-CHECK of (a) using the other formula:
      <u> = (1/2) eps0 E0^2 = 0.5 x 8.854e-12 x (1027)^2
          = 0.5 x 8.854e-12 x 1.055e6
          = 4.67 x 10^-6 J/m^3       Same answer.  Good.
```

> Note how small that pressure is: about 5 micropascal, while atmospheric
> pressure is 10^5 pascal — twenty **billion** times bigger. That is why you
> do not feel sunlight pushing you.

## WORKED EXAMPLE 6B — momentum

**Q.** A totally absorbing black surface receives 30 J of light energy in 10 s
over an area of 2.0 m^2. Find (a) the momentum delivered, (b) the average force
on the surface, (c) the radiation pressure.

**SOLUTION**

```
  (a)   p = U / c = 30 / (3 x 10^8) = 1.0 x 10^-7 kg m s^-1


  (b)   Force = rate of change of momentum

        F = p / t = (1.0 x 10^-7) / 10 = 1.0 x 10^-8 N


  (c)   P = F / A = (1.0 x 10^-8) / 2.0 = 5.0 x 10^-9 N/m^2

        CHECK using P = I/c :
            I = U/(A t) = 30 / (2.0 x 10) = 1.5 W/m^2
            P = I/c = 1.5 / (3 x 10^8) = 5.0 x 10^-9 N/m^2.  Same.
```

**ANSWER:** (a) 1.0 x 10^-7 kg m/s  (b) 1.0 x 10^-8 N  (c) 5.0 x 10^-9 Pa

> **TRAP:** The factor of 2 for a reflecting surface catches everybody.
> Read the question: "black / absorbing / blackened" -> no 2.
> "mirror / silvered / perfectly reflecting" -> put the 2 in.

---

# TOPIC 7 — HERTZ'S EXPERIMENT (1887)

Maxwell predicted EM waves in 1865 but died in 1879 without ever seeing one.
**Heinrich Hertz** made them in the laboratory eight years later.

## 7.1 The apparatus

```
                 THE TRANSMITTER                     THE RECEIVER

      +-----+                                   .-----------------.
      |     |                                  /                   \
      | IND |----+                             |                   |
      | UCT |    |                             |    copper wire    |
      | ION |    |    []  <-- metal plate      |    RING with a    |
      | COIL|    +----||                       |    tiny gap       |
      |     |         ||  <-- SPARK GAP        \                   /
      |     |    +----||       (two brass        '---- ) ( -------'
      |     |    |    []       spheres)               tiny gap
      +-----+    |
                 +----+                        NOT connected to anything.
                                               Placed a few metres away.

    Induction coil puts a huge oscillating voltage across the spark gap.
    Charges surge violently back and forth across the gap: they
    ACCELERATE, so they must RADIATE electromagnetic waves.
```

## 7.2 What Hertz observed and concluded

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  OBSERVATION:  Every time a spark jumped in the TRANSMITTER gap,  |
  |                a small spark also jumped in the RECEIVER gap,     |
  |                even though the receiver was several metres away   |
  |                and was not connected to anything.                 |
  |                                                                   |
  |  CONCLUSION:   Energy had crossed the empty space between them.   |
  |                Electromagnetic waves are REAL.                    |
  |                                                                   |
  +-------------------------------------------------------------------+

  Hertz went further and showed that these waves:
      - could be REFLECTED by a metal sheet
      - could be REFRACTED by a prism of pitch
      - could be POLARISED   (so they are TRANSVERSE)
      - showed INTERFERENCE and formed STANDING WAVES
      - travelled at 3 x 10^8 m/s

  From his standing waves he measured wavelength ~ 6 m, at a frequency
  of about 5 x 10^7 Hz, giving speed = nu x lambda = 3 x 10^8 m/s.

  ==>  EXACTLY the value Maxwell had predicted. Maxwell was right.
```

## 7.3 Who came next (2-mark general-knowledge questions)

```
  +---------------------------+---------------------------------------+
  |  Heinrich HERTZ (1887)    |  First produced and detected EM waves |
  |                           |  (wavelength about 6 m).              |
  +---------------------------+---------------------------------------+
  |  Jagadish Chandra BOSE    |  Produced much SHORTER waves,         |
  |  (India, 1895)            |  25 mm down to 5 mm (microwaves).     |
  +---------------------------+---------------------------------------+
  |  Guglielmo MARCONI (1899) |  Sent EM waves over many kilometres,  |
  |                           |  then across the Atlantic — the birth |
  |                           |  of RADIO communication.              |
  +---------------------------+---------------------------------------+
```

---

# TOPIC 8 — THE ELECTROMAGNETIC SPECTRUM

## 8.1 The picture

```
 LONG wavelength                                          SHORT wavelength
 LOW frequency                                            HIGH frequency
 LOW energy                                               HIGH energy
 LOW penetrating power                                    HIGH penetrating power

 <===================================================================>

 | RADIO   | MICRO  |  INFRA  | VIS | ULTRA  |  X - RAYS  |  GAMMA   |
 | WAVES   | WAVES  |  RED    | IBLE| VIOLET |            |  RAYS    |
 +---------+--------+---------+-----+--------+------------+----------+
 |         |        |         |     |        |            |          |
 lambda:
  > 0.1 m   0.1 m    1 mm     700   400 nm    1 nm         < 1 pm
            to       to       nm    to        to
            1 mm     700 nm   to    1 nm      1 pm
                              400
                              nm
 nu:
 3x10^4 to  3x10^9   3x10^11  4x10^14 7.5x10^14  3x10^16    > 3x10^18
 3x10^9 Hz  to       to       to      to         to         Hz
            3x10^11  4x10^14  7.5x10^14 3x10^16  3x10^19

   ^                            ^
   |                            |
 antenna / LC circuit      the ONLY part your
 oscillator               eye can see — a
                          sliver of the whole thing


 THE VISIBLE BAND, ZOOMED IN (about one OCTAVE wide, 400-700 nm):

  400          450        500        570      590     620      700  nm
   |------------|----------|----------|--------|-------|--------|
   | VIOLET     | BLUE     | GREEN    | YELLOW | ORANGE| RED    |
   |------------|----------|----------|--------|-------|--------|
   shorter lambda                                    longer lambda
   higher energy                                     lower energy

   Memory:  VIBGYOR  reading from SHORT to LONG wavelength.
```

## 8.2 THE BIG TABLE — this is the chapter's real content

```
  RANGES OVERLAP at the boundaries, and different books quote slightly
  different figures. Learn the ORDER OF MAGNITUDE, not the last digit.
```

| Band | Wavelength range | Frequency range | Produced by | Detected by | Main uses |
|---|---|---|---|---|---|
| **RADIO WAVES** | greater than 0.1 m (0.1 m up to several km) | 3 x 10^4 Hz to 3 x 10^9 Hz (a few kHz to ~1000 MHz) | Accelerated charges in conducting wires — oscillating LC circuits and **antennae** | Receiving **antenna** with a tuned LC circuit and rectifier detector | AM and FM radio, television broadcasting, mobile phones, wireless, astronomy |
| **MICROWAVES** | 1 mm to 0.1 m (10^-3 m to 10^-1 m) | 3 x 10^9 Hz to 3 x 10^11 Hz (GHz range) | **Klystron, magnetron, Gunn diode** — special vacuum tubes / solid-state oscillators | **Point-contact diodes**, crystal detectors, microwave receivers | **RADAR** and speed guns, **microwave ovens** (they resonate with water molecules), satellite and long-distance communication |
| **INFRARED** | 700 nm to 1 mm (7 x 10^-7 m to 10^-3 m) | 3 x 10^11 Hz to 4 x 10^14 Hz | **Hot bodies** — vibration of atoms and molecules; any warm object radiates IR | **Thermopile, bolometer, thermocouple**, IR photographic film, IR-sensitive photodiodes | Heating, physiotherapy; **TV / AC remote controls**; **night-vision** devices; long-distance photography through haze; keeps the Earth warm (**greenhouse effect**) |
| **VISIBLE LIGHT** | 400 nm to 700 nm (4 x 10^-7 m to 7 x 10^-7 m) | 4 x 10^14 Hz to 7.5 x 10^14 Hz | Electron transitions in **atoms and molecules**; incandescent (white-hot) bodies; the Sun; LEDs | The **human EYE**, photographic film, photocells, photodiodes | Vision — the only band the eye detects; photography; **photosynthesis**; optical fibre communication; illumination |
| **ULTRAVIOLET** | 1 nm to 400 nm (10^-9 m to 4 x 10^-7 m) | 7.5 x 10^14 Hz to 3 x 10^16 Hz | The **Sun**; very hot bodies; **mercury vapour lamps**, arc lamps, special UV lamps | Photocells, photographic film, fluorescent screens (it makes some materials glow) | **Sterilising** water and surgical instruments; **LASIK eye surgery**; detecting **forged banknotes** and invisible ink; making vitamin D in skin; produces and is absorbed by the **ozone layer** |
| **X-RAYS** | 1 pm to 1 nm (10^-12 m to 10^-9 m) | 3 x 10^16 Hz to 3 x 10^19 Hz | Bombarding a **heavy metal target with high-energy electrons** — the **X-ray (Coolidge) tube** | Photographic film, **Geiger-Muller tube**, ionisation chamber, fluorescent screen | Medical **radiography** (bones, fractures, chest), dentistry; **radiotherapy** for cancer; **airport security** scanners; **X-ray crystallography** for crystal structure; testing metal castings for flaws |
| **GAMMA RAYS** | less than 10^-12 m (down to 10^-14 m) | greater than 3 x 10^18 Hz (up to 10^22 Hz) | **Radioactive nuclei** — nuclear decay; nuclear reactions; cosmic sources | **Geiger-Muller counter**, scintillation counter, photographic film | Cancer **radiotherapy**; sterilising surgical equipment and preserving food; studying **nuclear structure**; industrial flaw detection; gamma-ray astronomy |

## 8.3 The order — say the sentence out loud

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    R      M       I       V       U       X       G               |
  |                                                                   |
  |   RADIO  MICRO   INFRA  VISIBLE  ULTRA   X-RAY   GAMMA            |
  |          WAVE    RED             VIOLET                           |
  |                                                                   |
  |   "RADIO   MAN   IN   VIZAG   USES   X-RAY   GUN"                 |
  |                                                                   |
  |   Left to right:  lambda DOWN, nu UP, energy UP, penetration UP   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Two extra one-liners that examiners love:

```
  LONGEST wavelength / LOWEST frequency / LOWEST energy  ->  RADIO WAVES
  SHORTEST wavelength / HIGHEST frequency / HIGHEST energy -> GAMMA RAYS

  Photon energy   E = h nu = h c / lambda
  So high frequency = high energy = more dangerous, more penetrating.
```

## 8.4 The two "distinguish between" traps

```
  +-------------------------------------------------------------------+
  |  X-RAYS  vs  GAMMA RAYS                                           |
  |                                                                   |
  |  Their wavelengths OVERLAP, so you cannot tell them apart by      |
  |  wavelength alone. The difference is the SOURCE:                  |
  |                                                                   |
  |      X-rays      come from OUTSIDE the nucleus                    |
  |                  (electron transitions / electron deceleration)   |
  |                                                                   |
  |      Gamma rays  come from INSIDE the NUCLEUS                     |
  |                  (radioactive decay)                              |
  |                                                                   |
  |  Gamma rays are generally more energetic and more penetrating.    |
  +-------------------------------------------------------------------+
```

---

# TOPIC 9 — THE ENVIRONMENT: GREENHOUSE EFFECT AND OZONE LAYER

## 9.1 The greenhouse effect (an INFRARED story)

```
   STEP 1   The Sun is very hot, so it sends mostly SHORT-wavelength
            radiation: visible light and near infrared.

              SUN
               \\\  visible + short IR
                \\\
                 \\\
        ~~~~~~~~~~ATMOSPHERE~~~~~~~~~~     <-- glass and CO2 let
                   \\\                         SHORT waves pass
                    \\\                        straight through
        =============\\\=================
             EARTH'S SURFACE  (absorbs it, warms up)


   STEP 2   The warm Earth (about 300 K, far cooler than the Sun)
            re-radiates energy — but as LONG-wavelength INFRARED.

        =============///=================
             EARTH'S SURFACE
                    ///  long IR going up
                   ///
        ~~~~~~~~~~ATMOSPHERE~~~~~~~~~~
                 X X X    <-- CO2, water vapour, methane,
                 X X X        nitrous oxide ABSORB long IR
                 ///\\\       and re-radiate it BACK DOWN
                //  \\\
        =============\\\=================
             EARTH'S SURFACE gets EXTRA heating


   RESULT:  Heat gets IN easily but cannot get OUT easily.
            The atmosphere behaves like the glass of a greenhouse.
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  GREENHOUSE EFFECT: short-wavelength solar radiation passes       |
  |  through the atmosphere and warms the Earth; the Earth            |
  |  re-radiates LONG-WAVELENGTH INFRARED, which is ABSORBED by       |
  |  greenhouse gases (CO2, water vapour, methane, ozone) and         |
  |  radiated back down, keeping the surface warm.                    |
  |                                                                   |
  |  It is NATURAL and NECESSARY — without it the Earth would be      |
  |  about 33 degrees colder and frozen.                              |
  |                                                                   |
  |  The PROBLEM is the ENHANCED greenhouse effect: burning fossil    |
  |  fuels raises CO2, more IR is trapped, and the planet warms.      |
  |  This is GLOBAL WARMING.                                          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 9.2 The ozone layer (an ULTRAVIOLET story)

```
   The stratosphere, roughly 15 to 35 km up, contains OZONE (O3).


           incoming solar ULTRAVIOLET
                 |||||||||||||
                 vvvvvvvvvvvvv
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ::::::::  OZONE  LAYER  (O3) ::::::::::   15 - 35 km up
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    |     |
                    v     v          most UV ABSORBED here
        ==================================
                 EARTH'S SURFACE
                 only a safe trickle of UV gets down


   How it works (do not memorise the chemistry, just the idea):

        O2  + UV  -->  O + O            (UV splits oxygen)
        O2  + O   -->  O3               (ozone forms)
        O3  + UV  -->  O2 + O           (ozone absorbs UV and splits)

   The cycle keeps absorbing UV over and over.
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  WHY IT MATTERS:  UV is high-frequency, high-energy radiation.    |
  |  Reaching the ground in quantity it causes SKIN CANCER,           |
  |  CATARACTS, damage to the immune system, and kills plankton       |
  |  and crops.                                                       |
  |                                                                   |
  |  THE OZONE HOLE:  CFCs (chlorofluorocarbons, used in old          |
  |  refrigerators and aerosol sprays) drift up and destroy ozone     |
  |  molecules. A thinning of the layer over Antarctica was found     |
  |  in the 1980s. CFCs are now being phased out worldwide            |
  |  (the Montreal Protocol).                                         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## 9.3 The comparison to remember

```
  +--------------------+------------------+---------------------------+
  |                    |  INFRARED        |  ULTRAVIOLET              |
  +--------------------+------------------+---------------------------+
  |  Position          |  LONGER than     |  SHORTER than visible     |
  |                    |  visible         |                           |
  +--------------------+------------------+---------------------------+
  |  Energy            |  LOWER than      |  HIGHER than visible      |
  |                    |  visible         |                           |
  +--------------------+------------------+---------------------------+
  |  Atmospheric role  |  TRAPPED by CO2  |  BLOCKED by the ozone     |
  |                    |  -> GREENHOUSE   |  layer                    |
  |                    |     EFFECT       |                           |
  +--------------------+------------------+---------------------------+
  |  If we get too     |  GLOBAL WARMING  |  SKIN CANCER, cataracts   |
  |  much              |                  |                           |
  +--------------------+------------------+---------------------------+
```

---

# TOPIC 10 — SUMMARY OF EVERY NUMBER YOU MIGHT NEED

```
  +-----------------------------+------------------------------------+
  |  c   (speed in vacuum)      |  3 x 10^8 m/s (2.998 x 10^8)       |
  |  mu0                        |  4 pi x 10^-7  T m A^-1            |
  |                             |  = 1.257 x 10^-6                   |
  |  eps0                       |  8.854 x 10^-12 C^2 N^-1 m^-2      |
  |  1 / (4 pi eps0)            |  9 x 10^9  N m^2 C^-2              |
  |  h   (Planck constant)      |  6.63 x 10^-34 J s                 |
  |  Solar constant at Earth    |  about 1.4 kW/m^2                  |
  |  1 nm                       |  10^-9 m                           |
  |  1 angstrom                 |  10^-10 m                          |
  |  1 pm (picometre)           |  10^-12 m                          |
  |  Visible range              |  400 nm to 700 nm                  |
  +-----------------------------+------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write the DEFINITION of displacement current with the
       formula  Id = eps0 d(PhiE)/dt , and NOT just describe it?

  [ ]  When asked why Ampere's law fails, did I say the magic words
       "TWO DIFFERENT SURFACES bounded by the SAME LOOP give
        DIFFERENT enclosed currents"?

  [ ]  Did I draw the two-surface diagram? A diagram earns marks here.

  [ ]  In the properties question, did I give at least SIX numbered
       points, not a vague paragraph?

  [ ]  Did I state that E, B and the direction of propagation are
       MUTUALLY PERPENDICULAR, and that E and B are IN PHASE?

  [ ]  Did I write c = 1/sqrt(mu0 eps0) with the value 3 x 10^8 m/s?

  [ ]  In a B0 calculation did I DIVIDE by c (answer around 10^-7 T),
       not multiply?

  [ ]  Radiation pressure: did I check ABSORBING (I/c) versus
       REFLECTING (2I/c)?

  [ ]  In a spectrum question did I give the RANGE, the SOURCE and
       the USE — all three — if the question asked for them?

  [ ]  Did I put UNITS on every final answer? (A, T, V/m, W/m^2,
       N/m^2, Hz, m)

  [ ]  Did I convert nm to metres (x 10^-9) and MHz to Hz (x 10^6)
       before substituting?

  [ ]  For the greenhouse effect, did I mention that it is INFRARED
       that gets trapped, and name at least two greenhouse gases?

  [ ]  For the ozone layer, did I say it absorbs ULTRAVIOLET and
       name CFCs as the destroyer?
```
