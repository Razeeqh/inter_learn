# Moving Charges and Magnetism — Mind Map

**Physics 2nd Year · Chapter 7**
**One of the BIGGEST scoring chapters in 2nd year. It carries a guaranteed
long-answer question (Biot-Savart / Ampere / Galvanometer) plus 2-3 short ones.
If you learn nothing else in the magnetism unit, learn this chapter.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                    MOVING  CHARGES  AND  MAGNETISM
                                  |
              "A MOVING CHARGE MAKES A MAGNETIC FIELD
               AND A MAGNETIC FIELD PUSHES A MOVING CHARGE"
                                  |
        +-------------------------+-------------------------+
        |                                                   |
   PART ONE                                            PART TWO
   FIELD  PUSHES  THE  CHARGE                     CHARGE  MAKES  THE  FIELD
   (force problems)                               (field problems)
        |                                                   |
        |                                                   |
   +----+--------+----------+                    +----------+----------+
   |             |          |                    |                     |
 ON A          ON A       LORENTZ           BIOT-SAVART            AMPERE'S
 MOVING        CURRENT     FORCE               LAW                CIRCUITAL
 CHARGE        WIRE          |                  |                    LAW
   |             |           |                  |                     |
 F=qvBsinT    F=BILsinT   F = qE + qvxB    dB = (mu0/4pi)        INT B.dl
   |             |           |               I dl sinT / r^2      = mu0 I
   |             |           |                  |                     |
 F = q(v x B)  F=I(L x B)  VELOCITY         APPLICATIONS         APPLICATIONS
   |             |         SELECTOR              |                     |
 direction:      |         E = vB          +-----+-----+         +-----+-----+
 RIGHT HAND      |                         |     |     |         |     |     |
 / FLEMING    FORCE BETWEEN          straight  circular  arc   straight SOLENOID
 LEFT HAND    TWO PARALLEL             wire     loop            wire   B=mu0nI
   |          CURRENTS                  |        |                        |
   |             |                   B=mu0I/  B=mu0I/2a                 TOROID
 SPECIAL      F/L = mu0 I1 I2         2 pi r   (centre)              B=mu0NI/2pi r
 CASES        ------------              |         |
 T=0 -> F=0    2 pi d                finite   on the AXIS
 T=90 -> max      |                  length      |
   |          DEFINITION OF        (sinT1+sinT2)  |
   |          THE  AMPERE                         |
   |                                              |
 MOTION IN A UNIFORM FIELD                    CURRENT LOOP
   |                                          = MAGNETIC DIPOLE
   +---------+---------+                          |
   |         |         |                     M = N I A
 CIRCLE   TIME       HELIX                        |
 r=mv/qB  PERIOD   (v has a                  +----+----+
   |      T=2pim/qB  parallel                |         |
   |      NO v in it  part)                TORQUE   POTENTIAL
   |         |         |                   tau =    ENERGY
   |         |      pitch = v_par x T      MBsinT   U = -MBcosT
   |         |                                |
 CYCLOTRON  <---------------------------------+
   |                                          |
 f = qB/2pim                          MOVING COIL GALVANOMETER
 KEmax = q^2B^2R^2/2m                         |
 limitations (4)                        I = (C/NAB) theta
                                              |
                                    +---------+---------+
                                    |                   |
                                 AMMETER            VOLTMETER
                                 shunt S in         resistance R in
                                 PARALLEL           SERIES
                                 S = IgG/(I-Ig)     R = V/Ig - G
```

---

## THE 60-SECOND VERSION

Two sentences hold the entire chapter:

```
  1.  A magnetic field PUSHES anything that carries moving charge.
         a lone charge  ->  F = q v B sin(theta)
         a wire         ->  F = B I L sin(theta)

  2.  Anything that carries moving charge MAKES a magnetic field.
         a tiny piece of wire  ->  Biot-Savart law
         a symmetric situation ->  Ampere's circuital law (much faster)
```

Everything else is one of these two ideas applied to a particular shape —
a circle, a coil, a solenoid, a toroid, a cyclotron, a galvanometer.

```
  BEFORE YOU ANSWER ANY QUESTION IN THIS CHAPTER, ASK:

      "Am I being PUSHED, or am I MAKING a field?"

      pushed   ->  use  F = qvB sin T   or   F = BIL sin T
      making   ->  use  Biot-Savart     or   Ampere's law
```

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

```
  +--------------------------------------------------+---------+-------+
  |  TOPIC                                           | SECTION | MARKS |
  +--------------------------------------------------+---------+-------+
  |  Oersted's experiment / magnetic effect          |    A    |   2   |
  |  Define the ampere                               |    A    |   2   |
  |  Force on a charge: F = qvB sin T, special cases |    A    |   2   |
  |  Radius / time period of the circular path       |    A    |   2   |
  |  What is the Lorentz force?                      |    A    |   2   |
  |  State Biot-Savart law                           |    A    |   2   |
  |  Current sensitivity of a galvanometer           |    A    |   2   |
  |  Why a radial field in a galvanometer?           |    A    |   2   |
  +--------------------------------------------------+---------+-------+
  |  Motion of a charge in a magnetic field          |    B    |   4   |
  |  Force between two parallel currents + ampere    |    B    |   4   |
  |  Field at the centre of a circular coil          |    B    |   4   |
  |  Field inside a SOLENOID from Ampere's law       |    B    |   4   |
  |  Torque on a current loop, tau = MB sin T        |    B    |   4   |
  |  Ammeter / voltmeter conversion numerical        |    B    |   4   |
  +--------------------------------------------------+---------+-------+
  |  CYCLOTRON - construction, working, energy       |    C    |   8   |
  |  MOVING COIL GALVANOMETER - full description     |    C    |   8   |
  |  BIOT-SAVART -> field on the axis of a loop      |    C    |   8   |
  |  AMPERE'S LAW -> solenoid and toroid             |    C    |   8   |
  +--------------------------------------------------+---------+-------+

  Realistic haul from this chapter:  12 to 16 marks out of 60.
  That is a QUARTER of the paper from ONE chapter. Do not skip it.
```

---

## STUDY THIS ORDER

```
  STEP 1   Oersted's experiment - the one idea the chapter is built on
              |
  STEP 2   Force on a moving charge   F = q v B sin(theta)
           + the direction rules (right hand / Fleming left hand)
              |
        +-----+-----------------------------+
        |                                   |
  STEP 3                              STEP 6
  Lorentz force                       Force on a current-carrying wire
  F = qE + q(v x B)                   F = B I L sin(theta)
  velocity selector                        |
        |                             STEP 7
  STEP 4                              Force between two parallel wires
  Circular motion                     -> DEFINITION OF THE AMPERE
  r = mv/qB , T = 2 pi m / qB              |
  helix                               STEP 8
        |                             Torque on a current loop
  STEP 5                              tau = M B sin(theta) , M = N I A
  CYCLOTRON   <-- 8-mark question          |
        |                             STEP 9
        |                             MOVING COIL GALVANOMETER
        |                             <-- 8-mark question
        |                                  |
        |                             STEP 10
        |                             Ammeter and voltmeter conversion
        |                             <-- easy 4-mark numerical
        |                                  |
        +-----------+----------------------+
                    |
  STEP 11   BIOT-SAVART LAW
                    |
        +-----------+-----------+
        |           |           |
   straight     circular      arc
   wire         loop axis
        |
  STEP 12   AMPERE'S CIRCUITAL LAW
                    |
        +-----------+-----------+
        |           |           |
   straight     SOLENOID     TOROID
   wire        B = mu0 n I
```

---

## THE KEY BOX — the two formulas that unlock most of the chapter

```
  +--------------------------------------------------------------+
  |                                                              |
  |   FORCE SIDE       F  =  q v B sin(theta)                    |
  |                                                              |
  |                    F  =  B I L sin(theta)                    |
  |                                                              |
  |   (these two are the SAME equation, because  I L  =  q v )   |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |                          mu0   I dl sin(theta)               |
  |   FIELD SIDE      dB  =  --- x -----------------             |
  |                          4pi         r^2                     |
  |                                                              |
  |   mu0  =  4 pi x 10^-7   T m / A                             |
  |                                                              |
  |   mu0 / 4pi  =  10^-7      <-- memorise this, it saves time  |
  |                                                              |
  +--------------------------------------------------------------+
```

And one number that comes back again and again:

```
                                    mu0 I
  Long straight wire :        B  =  --------
                                    2 pi r

                                    mu0 I
  Centre of a circular coil :  B  =  -------  x  N
                                      2 a

  Notice:  straight wire has  2 pi r  below,  coil has just  2 a.
           Losing the "pi" is the single most common mistake in this chapter.
```

---

## IF YOU ONLY HAVE 3 DAYS

```
  DAY 1  -  THE FORCE HALF
            * F = qvB sin(theta) and its 3 special cases
            * right hand rule + Fleming's left hand rule
            * circular path: r = mv/qB , T = 2 pi m / qB , f = qB/2 pi m
            * F = BIL sin(theta)
            * force between parallel wires + DEFINITION OF THE AMPERE
            Practise 10 numericals on r and T.

  DAY 2  -  THE FIELD HALF
            * Biot-Savart law statement + vector form
            * B for a long straight wire (both from Biot-Savart AND Ampere)
            * B at the centre of a coil and of an arc
            * B on the axis of a loop (full derivation - 8 marks)
            * Ampere's law -> SOLENOID B = mu0 n I , TOROID
            Write each derivation out by hand ONCE. Not read - written.

  DAY 3  -  THE MACHINES
            * CYCLOTRON: diagram, working, f = qB/2 pi m, KEmax, limitations
            * TORQUE on a loop: tau = N I A B sin(theta)
            * GALVANOMETER: diagram, I = (C/NAB) theta, sensitivities
            * AMMETER: S = Ig G / (I - Ig)
            * VOLTMETER: R = V/Ig - G
            Practise 5 shunt/series numericals. They are free marks.

  If you have only ONE day, do the CYCLOTRON and the GALVANOMETER
  plus F = qvB sin(theta) and B = mu0 I / 2 pi r. That alone is ~10 marks.
```

---

## THE FIVE THINGS THAT LOSE MARKS EVERY YEAR

```
  1.  Writing  B = mu0 I / 2 pi a  for the CENTRE OF A COIL.
      It is  mu0 I / 2a . No pi.

  2.  Forgetting that the magnetic force does NO WORK, so the SPEED
      of the particle never changes - only its direction.

  3.  Forgetting  N  (number of turns) in  M = N I A  and in
      tau = N I A B sin(theta).

  4.  Using  sin  where the angle is measured from the wrong line.
      In  F = q v B sin(theta),  theta is the angle BETWEEN v AND B.

  5.  Putting the shunt in SERIES. The shunt is ALWAYS in PARALLEL
      (ammeter), the multiplier is ALWAYS in SERIES (voltmeter).
      Memory hook:  "Ammeter = A = pArAllel".
```
