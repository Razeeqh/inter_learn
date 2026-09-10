# Moving Charges and Magnetism — Concepts Explained Simply

You already know that a magnet has a magnetic field. This chapter says something
much stranger: **an ordinary wire with current in it also has a magnetic field**,
and a magnetic field can **push** a moving charge sideways.

That is the whole chapter. Two halves:

```
  HALF 1   A magnetic field PUSHES moving charge.
  HALF 2   Moving charge MAKES a magnetic field.
```

Read the topics in order. Do not skip TOPIC 2 — everything after it depends on it.

---

# TOPIC 1 — Oersted's experiment: the magnetic effect of a current

Until 1820 people thought electricity and magnetism were two unrelated things.
Then **Hans Christian Oersted** did this in a lecture, by accident.

```
   OERSTED'S  EXPERIMENT

   Step 1 : NO current                    Step 2 : current ON

        wire (no current)                      wire  ---- I ---->
   ======================                 ==========================
              |                                        |
          +---+---+                              +-----+-----+
          |   N   |                              |     N     |   needle
          |   |   |  needle points               |    /      |   TURNS
          |   |   |  N-S as usual                |   /       |   sideways
          |   S   |                              | S         |
          +-------+                              +-----------+

   Reverse the current  ->  the needle turns the OTHER way.
   Switch the current off ->  the needle springs back to N-S.
```

**Conclusion:** a current-carrying wire produces a magnetic field around it.
Electricity and magnetism are the same subject.

**What the field looks like around a straight wire:** concentric circles, not
straight lines.

```
   Current coming OUT of the page (dot) :

              . - - - .
           .             .
         .    . - - .      .
        .   .    O    .     .        O  = wire, current OUT of page
        .   .  ( x )  .     .        circles = magnetic field lines
         .    . - - .      .         direction = ANTICLOCKWISE
           .             .
              . - - - .

   Current going INTO the page (cross) :   circles are CLOCKWISE
```

**Right hand thumb rule (for the field of a wire):**

```
  Grip the wire with your RIGHT hand,
  THUMB pointing along the CURRENT.
  Your CURLED FINGERS give the direction of B.
```

> **TRAP:** the magnetic field lines of a current are **closed circles**.
> They have no start and no end, unlike electric field lines which begin on
> a positive charge and end on a negative one. This is a favourite 2-mark
> question: *"How do magnetic field lines differ from electric field lines?"*

**Magnetic field B** is measured in **tesla (T)**.

```
  1 tesla  =  1 N / (A m)  =  1 weber / m^2

  Dimensions of B  =  [ M T^-2 A^-1 ]

  1 tesla = 10^4 gauss        (gauss is the CGS unit)
  Earth's field is about 0.5 gauss = 5 x 10^-5 T  -> tesla is a BIG unit
```

---

# TOPIC 2 — The magnetic force on a moving charge

Put a charge `q` in a magnetic field `B` and give it a velocity `v`. The field
pushes it with a force:

```
  +--------------------------------------------------------+
  |                                                        |
  |          F  =  q v B sin(theta)                        |
  |                                                        |
  |   theta = the angle BETWEEN  v  and  B                 |
  |                                                        |
  |   VECTOR FORM :     F  =  q ( v  x  B )                |
  |                                                        |
  +--------------------------------------------------------+
```

## Picture it

```
                    B  (field, into the page)
              x     x     x     x     x
                        F  ^
                           |
              x     x     |     x     x
                          |
                        +-q-------> v
              x     x     x     x     x

              x     x     x     x     x

   Positive charge moving RIGHT, field INTO the page
   ->  force is UPWARD.
   A NEGATIVE charge in the same situation is pushed DOWNWARD.
```

## The three special cases — asked as a 2-mark question every year

```
  +--------------------------+---------------------------+----------------+
  |  SITUATION               |  ANGLE theta              |  FORCE         |
  +--------------------------+---------------------------+----------------+
  |  Charge at REST (v = 0)  |  -                        |  F = 0         |
  |  v PARALLEL to B         |  theta = 0                |  F = 0         |
  |  v ANTIPARALLEL to B     |  theta = 180              |  F = 0         |
  |  v PERPENDICULAR to B    |  theta = 90               |  F = qvB (MAX) |
  |  Charge is neutral (q=0) |  -                        |  F = 0         |
  +--------------------------+---------------------------+----------------+
```

## Three properties you must be able to state

```
  1.  The magnetic force is ALWAYS PERPENDICULAR to v.
  2.  Therefore it does NO WORK.        (W = F s cos 90 = 0)
  3.  Therefore the SPEED and the KINETIC ENERGY never change.
      Only the DIRECTION of motion changes.
```

> **TRAP:** students write "the magnetic field accelerates the particle".
> It does — but only in the sense of changing direction. The **speed is
> constant**. A magnetic field can never speed a particle up or slow it down.
> An **electric** field can. Examiners love this distinction.

## Finding the direction — two rules

**Rule A — Right hand rule (for the cross product v x B):**

```
   Point the FINGERS of the RIGHT hand along  v
   CURL them towards  B
   The THUMB points along  v x B    ->  this is F for a POSITIVE charge.

   For a NEGATIVE charge, the force is the OPPOSITE way.
```

**Rule B — Fleming's LEFT hand rule (for a current or a positive charge):**

```
        FIRST finger      ->   FIELD        (B)
        seCond finger     ->   Current      (I  or  v of a + charge)
        thuMb             ->   Motion/Force (F)

        Hold the three at RIGHT ANGLES to each other.

              F (thumb)
              |
              |
              +-------- B (first finger)
             /
            /
           I (second finger)
```

```
  MEMORY HOOK

     LEFT  hand  ->  the field is doing the pushing  (motor / force)
     RIGHT hand  ->  the motion is making the current (generator, Ch. 9)
```

## WORKED EXAMPLE 1

**A proton moves with a speed of 4 x 10^6 m/s at 30 degrees to a magnetic
field of 0.3 T. Find the force on it.**

```
  GIVEN
     q      =  1.6 x 10^-19  C
     v      =  4   x 10^6    m/s
     B      =  0.3 T
     theta  =  30 deg   ->  sin 30 = 0.5

  FORMULA
     F  =  q v B sin(theta)

  SUBSTITUTE
     F  =  (1.6 x 10^-19)(4 x 10^6)(0.3)(0.5)

     numbers :  1.6 x 4 x 0.3 x 0.5  =  0.96
     powers  :  10^-19 x 10^6  =  10^-13

     F  =  0.96 x 10^-13  =  9.6 x 10^-14  N
```

---

# TOPIC 3 — The LORENTZ FORCE

Usually a charge feels **both** an electric field and a magnetic field.
Add the two forces.

```
  +----------------------------------------------------------------+
  |                                                                |
  |     F  =  F_electric  +  F_magnetic                            |
  |                                                                |
  |     F  =  q E   +   q ( v  x  B )                              |
  |                                                                |
  |     F  =  q [ E  +  ( v  x  B ) ]                              |
  |                                                                |
  |             THIS IS THE LORENTZ FORCE                          |
  |                                                                |
  +----------------------------------------------------------------+
```

Compare the two parts — this comparison is a full 2 or 4-mark answer:

| | Electric force qE | Magnetic force q(v x B) |
|---|---|---|
| Needs the charge to move? | No | **Yes** (v = 0 gives F = 0) |
| Direction | along E (for +q) | perpendicular to **both** v and B |
| Does work? | **Yes** | **No** |
| Changes speed? | Yes | No, only direction |
| Changes KE? | Yes | No |

## The VELOCITY SELECTOR (crossed fields)

Arrange E and B **perpendicular to each other** and both perpendicular to v.
Then the electric force and the magnetic force are along the same line and
can be made to cancel.

```
        VELOCITY  SELECTOR

    +  +  +  +  +  +  +  +  +  +      <- positive plate
                                          E points DOWNWARD
             qE (down)
                |
        --> v  -+-  q            B is INTO the page  (x)
                |
             qvB (up)
    -  -  -  -  -  -  -  -  -  -      <- negative plate

    x   x   x   x   x   x   x   x     B into the page


    Only particles with EXACTLY the right speed go straight through
    the slit at the far end. All others bend and hit the plates.
```

```
  For the particle to go UNDEFLECTED :

        q E   =   q v B

                  E
        v    =   ---
                  B
```

Notice `q` cancels — the selected speed does **not** depend on the charge or
the mass. That is why it "selects velocity", not mass.

## WORKED EXAMPLE 2

**In a velocity selector E = 3 x 10^4 V/m and B = 0.02 T. What speed passes
through undeflected?**

```
        E        3 x 10^4
  v  = ---  =  ------------  =  1.5 x 10^6  m/s
        B         0.02
```

> **TRAP:** in a velocity selector the fields must be **mutually
> perpendicular** AND both perpendicular to v. If the question says the fields
> are parallel, the particle follows a **helix**, not a straight line.

---

# TOPIC 4 — Motion of a charged particle in a uniform magnetic field

## CASE 1 — v perpendicular to B: a CIRCLE

The force is always perpendicular to v, so it never changes the speed — it just
keeps turning the particle. A constant-magnitude force always at right angles to
the motion is exactly what makes a **circle** (it acts as centripetal force).

```
        CIRCULAR  PATH   (B into the page, positive charge)

     x     x     x     x     x     x     x

     x     x   . - - - - - .     x     x
             .               .
     x     .    <---- v       .   x     x
          .                    .
     x    .    F -->  (+)      .  x     x        F always points to
          .         centre     .                 the CENTRE
     x     .                  .    x     x
             .               .
     x     x   . - - - - - .     x     x

     x     x     x     x     x     x     x
```

**Derivation (worth 4 marks):**

```
  The magnetic force supplies the centripetal force.

                            m v^2
        q v B     =        -------
                              r

                          m v
        r     =         -------
                          q B
```

```
  +-------------------------------------------------------------+
  |                          m v          p           sqrt(2mK) |
  |    RADIUS       r   =   -----   =   -----   =   ----------- |
  |                          q B         q B            q B     |
  |                                                             |
  |    (p = momentum,  K = kinetic energy)                      |
  +-------------------------------------------------------------+
```

**Time period:** the particle travels one circumference `2 pi r` at speed `v`.

```
              2 pi r        2 pi        m v          2 pi m
      T  =   --------   =  ------  x  -------   =   --------
                 v            v         q B            q B
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |   TIME PERIOD       T  =   2 pi m / ( q B )                 |
  |                                                             |
  |   FREQUENCY         f  =   q B / ( 2 pi m )                 |
  |                                                             |
  |   ANGULAR FREQ.     omega  =  q B / m                       |
  |                                                             |
  |   *** T DOES NOT CONTAIN v OR r ***                         |
  |   The period is INDEPENDENT of the speed and of the radius. |
  |                                                             |
  +-------------------------------------------------------------+
```

**Why that matters:** a fast particle goes round a bigger circle but at a
higher speed, and the two effects cancel exactly. Every particle of the same
`q/m` takes the same time for one loop. **The whole cyclotron is built on
this one fact.**

## CASE 2 — v at an angle theta to B: a HELIX

Split `v` into two parts.

```
       v_parallel      =  v cos(theta)     along B  ->  NO force  ->  straight
       v_perpendicular =  v sin(theta)     across B ->  force     ->  circle

       Circle + steady straight drift  =  HELIX (a stretched spring shape)
```

```
        HELICAL  PATH

              .-.       .-.       .-.       .-.
            .'   `.   .'   `.   .'   `.   .'   `.
   B ---> -|-------|-|-------|-|-------|-|-------|-------->  axis (along B)
            `.   .'   `.   .'   `.   .'   `.   .'
              `-'       `-'       `-'       `-'

            |<-- pitch -->|

     radius r   comes from  v_perp
     pitch  p   comes from  v_par  in one time period
```

```
  +--------------------------------------------------------------+
  |                    m v sin(theta)                            |
  |   RADIUS    r  =  -----------------                          |
  |                        q B                                   |
  |                                                              |
  |                     2 pi m                                   |
  |   PERIOD    T  =   --------      (same as before)            |
  |                      q B                                     |
  |                                                              |
  |   PITCH     p  =  v_parallel x T  =  v cos(theta) x 2 pi m   |
  |                                      -------------------     |
  |                                              q B             |
  +--------------------------------------------------------------+
```

## WORKED EXAMPLE 3

**A proton (m = 1.67 x 10^-27 kg, q = 1.6 x 10^-19 C) enters a field of 0.5 T
perpendicularly with speed 10^7 m/s. Find (a) the radius (b) the time period
(c) the frequency.**

```
  (a)          m v        (1.67 x 10^-27)(10^7)       1.67 x 10^-20
       r  =   -----  =  -------------------------  = ---------------
                q B      (1.6 x 10^-19)(0.5)          8 x 10^-20

          =  0.209  m     (about 21 cm)

  (b)        2 pi m       2 x 3.14 x 1.67 x 10^-27      1.049 x 10^-26
       T  = --------  =  ---------------------------  = ---------------
               q B              8 x 10^-20               8 x 10^-20

          =  1.31 x 10^-7  s

  (c)        1              1
       f  = ---   =  ----------------  =  7.6 x 10^6  Hz   =  7.6 MHz
             T        1.31 x 10^-7
```

## WORKED EXAMPLE 4

**A proton enters a 0.2 T field with speed 4 x 10^5 m/s at 30 degrees to the
field. Find the radius and the pitch of the helix.**

```
  v_perp  =  v sin 30  =  4 x 10^5 x 0.5      =  2.00 x 10^5  m/s
  v_par   =  v cos 30  =  4 x 10^5 x 0.866    =  3.46 x 10^5  m/s

           m v_perp      (1.67 x 10^-27)(2 x 10^5)      3.34 x 10^-22
  r   =   ----------  =  --------------------------  =  ---------------
             q B          (1.6 x 10^-19)(0.2)            3.2 x 10^-20

      =  1.04 x 10^-2 m   =  1.04 cm

           2 pi m       1.049 x 10^-26
  T   =   --------  =  ----------------  =  3.28 x 10^-7  s
             q B         3.2 x 10^-20

  pitch  =  v_par x T  =  (3.46 x 10^5)(3.28 x 10^-7)  =  0.113 m  =  11.3 cm
```

> **TRAP:** in the pitch you must use `v cos(theta)` and in the radius
> `v sin(theta)`. Swapping them is the standard mistake. Remember: the part
> **along** B (`cos`) causes the **drift/pitch**; the part **across** B
> (`sin`) causes the **circle/radius**.

---

# TOPIC 5 — THE CYCLOTRON  *** 8-mark question ***

A machine that accelerates protons, deuterons and alpha particles to very high
energies. It exists only because `T = 2 pi m / qB` does not depend on speed.

## Construction (draw this diagram)

```
                    CYCLOTRON

                 N   (upper pole of the electromagnet)
      ===============================================
                            |
                            |   B  (downward, perpendicular
                            V       to the plane of the dees)

          +---------------------------------------+
          |     ____________     ____________     |
          |    /            \   /            \    |
          |   /   DEE  D1    | |   DEE  D2    \   |
          |  |         .-.   | |   .-.         |  |
          |  |       ,'   `. | | ,'   `.       |  |
          |  |      (   S    )|(    S   )      |  |    S = ion source
          |  |       `.   ,' | | `.   ,'       |  |        at the centre
          |  |         `-'   | |   `-'         |  |
          |   \             /   \             /   |
          |    \___________/     \___________/    |
          +---------|-------------------|---------+
                    |                   |
                    +----[ ~~~~~~ ]-----+          high-frequency
                       HIGH FREQUENCY              alternating voltage
                       AC OSCILLATOR
                                              ----> beam comes out here

          The whole thing sits inside an EVACUATED chamber.
          The GAP between the dees is where the electric field acts.
          INSIDE a dee there is NO electric field (a dee is a hollow
          metal box, so it shields its interior).
```

## Principle

```
  A charged particle is accelerated ONLY in the GAP by the electric field,
  and is bent into a semicircle INSIDE each dee by the magnetic field.

  Because the time for a semicircle,  t = pi m / qB , is the SAME for
  every speed, the particle always arrives back at the gap in step with
  the alternating voltage. So it gets a kick EVERY time it crosses,
  again and again -> resonance.
```

## Working (write these steps)

```
  1.  A positive ion is produced at the source S at the centre.
  2.  The dee that is negative at that moment attracts it - it crosses
      the gap and GAINS energy  qV.
  3.  Inside the dee there is no electric field, so the magnetic field
      simply bends it into a SEMICIRCLE of radius  r = mv/qB.
  4.  In the time it takes to make the semicircle, the AC has reversed,
      so the OTHER dee is now negative.
  5.  It crosses the gap again, gains another  qV , and moves in a
      LARGER semicircle (bigger v -> bigger r).
  6.  This repeats. The path is a spiral of ever-increasing radius,
      but ALWAYS the same time per half turn.
  7.  At the outermost radius R it is pulled out by a deflecting plate.
```

## Cyclotron frequency — the resonance condition

```
  The oscillator frequency must EQUAL the particle's revolution frequency:

  +---------------------------------------------------------+
  |                                                         |
  |                     q B                                 |
  |        f_c    =   ---------           CYCLOTRON         |
  |                    2 pi m             FREQUENCY         |
  |                                                         |
  |        (also called the resonance condition)            |
  |                                                         |
  +---------------------------------------------------------+
```

## Maximum energy

```
  At the largest radius R :          m v_max
                              R  =  ---------
                                      q B

                                     q B R
                          v_max  =  -------
                                       m

                1                  1        q^2 B^2 R^2
  KE_max  =    --- m v_max^2   =  --- m  x  ------------
                2                  2            m^2

  +---------------------------------------------------------+
  |                                                         |
  |                    q^2  B^2  R^2                        |
  |      KE_max   =   ----------------                      |
  |                        2 m                              |
  |                                                         |
  +---------------------------------------------------------+
```

Number of revolutions, if it gains `qV` per gap crossing and crosses twice per
revolution:

```
                       KE_max
        n    =      -------------
                       2 q V
```

## LIMITATIONS of the cyclotron (a guaranteed part of the 8 marks)

```
  1.  ELECTRONS cannot be accelerated. They are so light that even a small
      energy makes them relativistic almost at once, and their mass rises,
      throwing them out of step.

  2.  NEUTRONS (and all neutral particles) cannot be accelerated,
      because the magnetic and electric forces both need charge.

  3.  RELATIVISTIC LIMIT. As v approaches c, the mass increases as
             m  =  m0 / sqrt( 1 - v^2/c^2 )
      so  T = 2 pi m / qB  increases, the particle arrives LATE at the gap,
      resonance is lost, and it stops gaining energy.

  4.  Very high energy needs a very large R, so the magnet becomes
      enormously big and expensive.
```

## WORKED EXAMPLE 5

**A cyclotron with dee radius 0.5 m operates at B = 1.5 T with protons.
Find the cyclotron frequency and the maximum kinetic energy.**

```
             q B          (1.6 x 10^-19)(1.5)         2.4 x 10^-19
  f_c  =  ---------  =  ------------------------  =  ---------------
           2 pi m        2 x 3.14 x 1.67 x 10^-27     1.049 x 10^-26

       =  2.29 x 10^7  Hz   =  22.9  MHz


              q^2 B^2 R^2      (1.6x10^-19)^2 (1.5)^2 (0.5)^2
  KE_max  =  -------------  =  --------------------------------
                  2 m               2 x 1.67 x 10^-27

              (2.56 x 10^-38)(2.25)(0.25)        1.44 x 10^-38
          =  -----------------------------  =  ----------------
                    3.34 x 10^-27                3.34 x 10^-27

          =  4.31 x 10^-12  J

  In MeV :   4.31 x 10^-12 / 1.6 x 10^-13   =  26.9  MeV
```

---

# TOPIC 6 — Force on a current-carrying conductor

A current is just charges moving. So a wire in a magnetic field feels a force.

**Derivation from the charge formula:**

```
  Let the wire have length L, area A, n free electrons per unit volume,
  drift speed vd.

     Number of carriers in the wire   =  n A L
     Force on one carrier             =  q vd B sin(theta)

     Total force  F  =  (n A L) x (q vd B sin theta)
                     =  (n A q vd) x L B sin theta

     But   I  =  n A q vd     (the current)

  +----------------------------------------------------------+
  |                                                          |
  |        F   =   B I L sin(theta)                          |
  |                                                          |
  |        VECTOR FORM :    F  =  I ( L  x  B )              |
  |                                                          |
  |        theta = angle between the WIRE and B              |
  |                                                          |
  +----------------------------------------------------------+
```

```
       CURRENT - CARRYING  WIRE  IN  A  FIELD

                        F  ^
                           |
     x     x     x     x   |  x     x     x     B into the page
     x     x     x     x   |  x     x     x
   ================ I =====+==========>         wire
     x     x     x     x     x     x     x
     x     x     x     x     x     x     x

     Apply Fleming's LEFT hand rule :
        first finger  (B)  -> into the page
        second finger (I)  -> to the right
        thumb         (F)  -> towards the TOP of the page

     Reverse the current OR reverse B  ->  the force reverses.
     Reverse BOTH  ->  the force is unchanged.
```

**Special cases:**

```
  wire PARALLEL to B (theta = 0 or 180)   ->   F = 0
  wire PERPENDICULAR to B (theta = 90)    ->   F = B I L    (MAXIMUM)
```

**Definition of the tesla from this formula:**

```
  1 tesla is that magnetic field in which a wire of length 1 m carrying
  a current of 1 A held perpendicular to the field experiences a force
  of 1 newton.
```

## WORKED EXAMPLE 6

**A wire of length 0.4 m carrying 10 A is placed at 30 degrees to a field of
0.5 T. Find the force.**

```
  F  =  B I L sin(theta)
     =  (0.5)(10)(0.4)(sin 30)
     =  (0.5)(10)(0.4)(0.5)
     =  1.0  N
```

---

# TOPIC 7 — Force between two parallel currents, and the AMPERE

Each wire sits in the magnetic field made by the other, so each feels a force.

```
     TWO  PARALLEL  WIRES,  SAME  DIRECTION  ->  ATTRACT

        wire 1                              wire 2
     ------ I1 ----->                  ------ I2 ----->
           |                                  |
           |    B1 at wire 2 (into page)      |
           |             x                    |
           |<------------ d ----------------->|
           |                                  |
        F ---->                            <---- F
           (they are pulled TOWARDS each other)


     OPPOSITE  DIRECTIONS  ->  REPEL

     ------ I1 ----->
     <----- I2 ------
        <--- F                              F --->
```

```
  MEMORY LINE :   "LIKE currents ATTRACT, UNLIKE currents REPEL."
                  (exactly the OPPOSITE of what charges do!)
```

**Derivation:**

```
  Field made by wire 1 at the position of wire 2 :

                 mu0 I1
        B1  =  ----------
                 2 pi d

  Force on a length L of wire 2 sitting in that field
  (wire 2 is perpendicular to B1, so sin 90 = 1) :

        F  =  B1 I2 L   =   mu0 I1 I2 L / ( 2 pi d )

  +-------------------------------------------------------------+
  |                                                             |
  |     FORCE PER UNIT LENGTH                                   |
  |                                                             |
  |       F        mu0  I1  I2         2 x 10^-7  I1 I2         |
  |      ---  =  -----------------  =  --------------------     |
  |       L          2 pi d                    d                |
  |                                                             |
  +-------------------------------------------------------------+
```

## DEFINITION OF THE AMPERE — learn this word for word

```
  Put   I1 = I2 = 1 A   and   d = 1 m  :

        F / L  =  2 x 10^-7  N per metre

  +---------------------------------------------------------------+
  |                                                               |
  |  ONE AMPERE is that steady current which, when maintained     |
  |  in each of two very long straight parallel conductors of     |
  |  negligible cross-section placed 1 metre apart in vacuum,     |
  |  produces a force of  2 x 10^-7 newton per metre of length    |
  |  between them.                                                |
  |                                                               |
  +---------------------------------------------------------------+
```

> **TRAP:** the four conditions — **infinitely long, straight, parallel,
> 1 metre apart, in vacuum** — must all appear in the answer. Leaving out
> "in vacuum" or "of negligible cross-section" costs half a mark.

## WORKED EXAMPLE 7

**Two long parallel wires 10 cm apart carry 10 A each in the same direction.
Find the force per metre and say whether it is attraction or repulsion.**

```
   F        2 x 10^-7 x I1 x I2        2 x 10^-7 x 10 x 10
  ---  =  ----------------------  =  ----------------------
   L                 d                        0.1

                                       2 x 10^-5
                                   =  -----------   =  2 x 10^-4  N/m
                                          0.1

  Same direction  ->  ATTRACTION.
```

---

# TOPIC 8 — BIOT-SAVART LAW  *** the heart of the chapter ***

Now the other half: how much field does a current **make**?

Chop the wire into tiny pieces of length `dl`. Each piece makes a tiny field
`dB` at a point P.

```
        BIOT - SAVART  GEOMETRY

                                       * P
                                      /|
                                     / |
                                r   /  |
                                   /   |
                                  /    |
                                 / theta
        ------------[ dl ]------o--------------------->  I
                     ^
                     |
              small element of the wire

        theta = angle between  dl  (the direction of current)
                and  r  (the line from the element to P)
```

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                    mu0        I  dl  sin(theta)                   |
  |        dB    =   -------  x  --------------------                 |
  |                   4 pi              r^2                           |
  |                                                                   |
  |                                                                   |
  |   VECTOR FORM :                                                   |
  |                                                                   |
  |                    mu0        I  ( dl  x  r_hat )                 |
  |        dB    =   -------  x  ---------------------                |
  |                   4 pi              r^2                           |
  |                                                                   |
  |   mu0  =  4 pi x 10^-7  T m / A   (permeability of free space)    |
  |   mu0 / 4 pi  =  10^-7                                            |
  |                                                                   |
  |   DIRECTION of dB : perpendicular to BOTH dl and r,               |
  |                     given by the right hand rule.                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Statement in words (the 2-mark answer):**

```
  The magnitude of the magnetic field dB produced at a point P by a small
  current element I dl is
     (i)   directly proportional to the current I,
     (ii)  directly proportional to the length dl of the element,
     (iii) directly proportional to sin(theta), where theta is the angle
           between the element and the line joining it to P,
     (iv)  inversely proportional to the square of the distance r of P
           from the element.
  Its direction is perpendicular to the plane containing dl and r.
```

**Note the special cases:** `dB = 0` when `theta = 0` or `180`, i.e. there is
**no field along the axis of the current element itself**. `dB` is maximum at
`theta = 90`.

## Biot-Savart vs Coulomb — a nice 2-mark comparison

| Coulomb's law (electric) | Biot-Savart law (magnetic) |
|---|---|
| Source: a static charge | Source: a current element |
| Field along the line joining | Field **perpendicular** to the plane of dl and r |
| Independent of any angle | Depends on sin(theta) |
| Both obey the inverse square law `1/r^2` | Both obey `1/r^2` |
| Long-range | Long-range |

---

# TOPIC 9 — Field due to a straight current-carrying conductor

## (a) Finite (straight) conductor — full derivation

```
                                   P
                                   *
                                   |
                                   |  a  (perpendicular distance)
                                   |
     -----|-------------[dl]-------+-------------------|-----> I
          |               <-- l -->|                   |
        end 1                      O                 end 2
          \                        |                   /
           \  phi1                 |            phi2  /
            \                      |                 /
             (angle subtended at P by each end, measured
              from the perpendicular OP)
```

```
  Take an element dl at distance l from the foot of the perpendicular O.
  Let the line from the element to P make angle phi with OP.

     l  =  a tan(phi)      ->    dl  =  a sec^2(phi) dphi
     r  =  a sec(phi)

  The angle between dl and r is  (90 - phi), so  sin = cos(phi).

              mu0    I dl cos(phi)      mu0    I a sec^2(phi) dphi cos(phi)
     dB  =   ----- x ---------------  = ----- x ---------------------------
             4 pi        r^2            4 pi        a^2 sec^2(phi)

              mu0     I cos(phi) dphi
         =   ----- x ------------------
             4 pi            a

  Integrate from  -phi1  to  +phi2 :

              mu0  I                            mu0  I
      B  =   --------  [ sin(phi) ]        =   --------  ( sin phi1 + sin phi2 )
              4 pi a                            4 pi a
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |   FINITE  WIRE :                                            |
  |                                                             |
  |                mu0  I                                       |
  |       B   =   --------  ( sin phi1  +  sin phi2 )           |
  |                4 pi a                                       |
  |                                                             |
  |   a = perpendicular distance from the wire to the point     |
  |                                                             |
  +-------------------------------------------------------------+
```

## (b) Infinitely long conductor

```
  For an infinite wire both ends are at 90 degrees :
        phi1 = phi2 = 90    ->    sin 90 + sin 90  =  2

              mu0  I               mu0  I
      B  =   -------- x 2   =    ----------
              4 pi a               2 pi a
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |   INFINITE  STRAIGHT  WIRE :                                |
  |                                                             |
  |                  mu0  I                                     |
  |         B   =   ---------           B  is proportional      |
  |                  2 pi r             to  1 / r               |
  |                                                             |
  +-------------------------------------------------------------+
```

## (c) A semi-infinite wire (point opposite one end)

```
        phi1 = 0 , phi2 = 90        ->      B  =  mu0 I / (4 pi a)
```

## WORKED EXAMPLE 8

**Find B at 10 cm from a long straight wire carrying 5 A.**

```
            mu0 I         (4 pi x 10^-7)(5)
   B  =  ----------  =  ---------------------
           2 pi r          2 pi (0.1)

         cancel pi :

         (4 x 10^-7)(5)        20 x 10^-7
      =  ----------------  =  ------------  =  1 x 10^-5  T
              2 (0.1)             0.2
```

Faster: `B = 2 x 10^-7 x I / r = 2 x 10^-7 x 5 / 0.1 = 1 x 10^-5 T`.

> **TRAP:** `2 x 10^-7 x I / r` is the shortcut for a **straight wire only**.
> Never use it for a coil.

---

# TOPIC 10 — Field on the axis of a circular current loop

*** This derivation is a classic 8-mark question. Learn it line by line. ***

```
        CIRCULAR  LOOP  ON  AXIS

                        dl (top of loop)
                         |
                    _____|_____
                   /     .     \
                  /      |      \                     dB
                 |    a  |       |                    /|
                 |<----->|       |                   / |  dB sin(alpha)
                  \      |      /                   /  |  (CANCELS)
                   \_____|_____/                   /   |
                         |    \                   *----+
                         |      \  r             P   dB cos(alpha)
                         |        \                  (ADDS UP)
                         O---------*------------------> axis
                         |<-- x -->|P
                         |
                     centre of
                     the loop
```

```
  SETUP
     a  =  radius of the loop
     x  =  distance of P from the centre, along the axis
     r  =  sqrt( a^2 + x^2 )   =  distance from an element to P

  STEP 1 :  every element dl of the loop is PERPENDICULAR to r,
            so  sin(theta) = sin 90 = 1.

                 mu0     I dl              mu0      I dl
       dB   =   ------ x ------    =     ------ x -----------
                 4 pi     r^2             4 pi     a^2 + x^2

  STEP 2 :  Resolve dB into two components -
               along the axis        ->  dB cos(alpha)
               perpendicular to axis ->  dB sin(alpha)

  STEP 3 :  For every element there is a DIAMETRICALLY OPPOSITE element
            whose perpendicular component is equal and opposite.
            So ALL the perpendicular components CANCEL.
            Only the AXIAL components survive.

  STEP 4 :        a                  a
       cos(alpha) = --- =  ----------------------
                     r      sqrt( a^2 + x^2 )

  STEP 5 :  Add up the axial components round the whole loop.

                                mu0      I dl                 a
       B  =  INT dB cos(alpha) = ---- INT --------- x ------------------
                                4 pi     a^2 + x^2    sqrt(a^2 + x^2)

            mu0     I a                            
        =  ------ ------------------------- INT dl
            4 pi   ( a^2 + x^2 )^(3/2)

            and     INT dl  =  2 pi a     (the whole circumference)

            mu0     I a  x  2 pi a
        =  ------ x ---------------------
            4 pi     ( a^2 + x^2 )^(3/2)
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |    ON  THE  AXIS  OF  A  LOOP  (N turns):                      |
  |                                                                |
  |                    mu0  N  I  a^2                              |
  |         B    =   ----------------------                        |
  |                   2 ( a^2 + x^2 )^(3/2)                        |
  |                                                                |
  |    Direction : ALONG THE AXIS, given by the right hand rule.   |
  |                                                                |
  +----------------------------------------------------------------+
```

## At the CENTRE of the loop — put x = 0

```
              mu0 N I a^2        mu0 N I a^2        mu0 N I
      B  =  ---------------  =  -------------  =   ---------
              2 (a^2)^(3/2)        2 a^3              2 a
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |   CENTRE OF A CIRCULAR COIL :        mu0 N I                   |
  |                                B  = ----------                 |
  |                                        2 a                     |
  |                                                                |
  |   *** NO pi IN THE DENOMINATOR ***                             |
  +----------------------------------------------------------------+
```

## At a point FAR on the axis (x >> a)

```
          mu0 N I a^2        mu0   2 (N I pi a^2)        mu0    2 M
   B  =  -------------  =  ------ x ----------------  = ------ x -----
             2 x^3           4 pi        x^3             4 pi     x^3

   which is exactly the field of a MAGNETIC DIPOLE on its axis,
   with dipole moment  M = N I A.       (see TOPIC 13)
```

## Field at the centre due to an ARC

```
         ARC  OF  ANGLE  theta  (in RADIANS)

                    .  -  .
                 .          .
               .              .        arc length  l  =  a x theta
              .                .
              |  a
              |  theta
              O

     A full circle is theta = 2 pi and gives  B = mu0 I / 2a.
     An arc gives that same value scaled by  theta / 2 pi :
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |   ARC :             mu0 I       theta          mu0 I theta     |
  |              B  =  -------  x  --------   =   -------------    |
  |                      2 a         2 pi           4 pi a         |
  |                                                                |
  |   Handy results:                                               |
  |      full circle  (2 pi)  ->  B = mu0 I / (2 a)                |
  |      semicircle   (pi)    ->  B = mu0 I / (4 a)                |
  |      quarter      (pi/2)  ->  B = mu0 I / (8 a)                |
  |                                                                |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 9

**A circular coil of 100 turns and radius 10 cm carries 2 A. Find B at
its centre.**

```
            mu0 N I        (4 pi x 10^-7)(100)(2)
   B  =   ---------  =   -------------------------
              2 a                2 (0.1)

            (1.2566 x 10^-6)(200)        2.513 x 10^-4
        =  -----------------------   =  ---------------
                    0.2                       0.2

        =  1.26 x 10^-3  T
```

## WORKED EXAMPLE 10

**A single circular loop of radius 10 cm carries 2 A. Find B at a point
10 cm from the centre on the axis.**

```
   a = 0.1 m ,  x = 0.1 m ,  N = 1 ,  I = 2 A

   a^2 + x^2  =  0.01 + 0.01  =  0.02

   ( a^2 + x^2 )^(3/2)  =  0.02 x sqrt(0.02)  =  0.02 x 0.1414
                        =  2.828 x 10^-3

            mu0 N I a^2        (4 pi x 10^-7)(1)(2)(0.01)
   B  =  ------------------ = -----------------------------
          2 (a^2+x^2)^(3/2)      2 x 2.828 x 10^-3

            (1.2566 x 10^-6)(0.02)        2.513 x 10^-8
        =  ------------------------  =  ----------------
                5.657 x 10^-3             5.657 x 10^-3

        =  4.44 x 10^-6  T
```

---

# TOPIC 11 — AMPERE'S CIRCUITAL LAW

Biot-Savart always works but the integration can be horrible. When the problem
is **symmetric**, Ampere's law gives the answer in three lines.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     The line integral of the magnetic field B around any          |
  |     CLOSED loop equals  mu0  times the TOTAL current enclosed     |
  |     by that loop.                                                 |
  |                                                                   |
  |            INT  B . dl    =    mu0  I_enclosed                    |
  |           (closed loop)                                           |
  |                                                                   |
  |     The closed loop is called an AMPERIAN LOOP.                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
  HOW TO USE IT - a fixed 4-step recipe

    1.  Choose an Amperian loop on which B is CONSTANT in magnitude
        and either PARALLEL or PERPENDICULAR to dl.
    2.  Then  INT B.dl  =  B x (length of the loop where B is parallel).
    3.  Count the current enclosed by the loop.
    4.  Equate and solve for B.
```

> **TRAP:** current **outside** the Amperian loop contributes nothing to
> `I_enclosed` — but it does contribute to B at each point. The law only says
> the **total integral** is unaffected.

## Application (a) — long straight wire

```
                     Amperian loop = a CIRCLE of radius r
                     around the wire

                   . - - - - .
                .               .
              .                   .
             .        ( I )        .        B is TANGENTIAL everywhere,
              .          ^          .       same magnitude all round
                .        wire     .
                   . - - - - .

     INT B . dl   =   B x ( 2 pi r )          [B parallel to dl]

     mu0 I_enc    =   mu0 I

     B x 2 pi r   =   mu0 I

                          mu0  I
              B     =   ----------
                          2 pi r
```

Same answer as Biot-Savart, in four lines instead of a page.

## Application (b) — inside a long SOLENOID  *** 4-8 mark question ***

A solenoid is a long coil: many turns of insulated wire on a cylinder.

```
       LONG  SOLENOID  (cut open, side view)

         a       b
         +-------+                     <- Amperian loop  a b c d
         |       |
    x  x | x   x | x   x   x   x   x   x   x   x        current INTO
  =========================================== turns      page (top)
         |  ->      ->      ->      ->                    
         |  B  UNIFORM INSIDE, along the axis
         |       |
  ===========================================            current OUT of
    .  . | .   . | .   .   .   .   .   .   .              page (bottom)
         +-------+
         d       c

         |<- L ->|

    OUTSIDE a long solenoid,  B = 0 (approximately).
    INSIDE, B is uniform and parallel to the axis.
```

**Derivation:**

```
  Take the rectangular Amperian loop  a-b-c-d  with side  ab = L
  lying INSIDE and along the axis, and side  cd  OUTSIDE.

     INT B.dl   =   (along ab)  +  (along bc)  +  (along cd)  +  (along da)

     along ab   =   B L                (B parallel to dl, uniform)
     along bc   =   0                  (B perpendicular to dl)
     along cd   =   0                  (B = 0 outside)
     along da   =   0                  (B perpendicular to dl)

     So      INT B.dl  =  B L

  Current enclosed :
     let  n  =  number of turns per unit length
     turns enclosed by the loop  =  n L
     each carries I, so  I_enc  =  n L I

  Ampere's law :
              B L   =   mu0  n L  I
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |     INSIDE A LONG SOLENOID :      B  =  mu0  n  I           |
  |                                                             |
  |     n = N / L = turns per METRE  (not the total turns!)     |
  |                                                             |
  |     B does not depend on the radius or on the position -    |
  |     the field is UNIFORM.                                   |
  |                                                             |
  |     At either END of the solenoid :  B  =  mu0 n I / 2      |
  |                                                             |
  |     With an iron core :  B = mu  n I  = mu0 mu_r n I        |
  |                                                             |
  +-------------------------------------------------------------+
```

## Application (c) — inside a TOROID

A toroid is a solenoid bent into a closed doughnut. There are no ends, so
**all** the field is trapped inside.

```
            TOROID  (a doughnut-shaped solenoid)

                    _ . - - - - - . _
                 .'                   `.
               /      _ . - - - . _      \
              |     .'             `.     |
              |    /                 \    |
              |   |     * O           |   |     O = centre
              |   |   <----- r ------>|   |     r = mean radius
              |    \      Amperian    /   |
              |     `.    circle    .'    |
               \      ` - - - - - .'      /
                 `.                   _.'
                    ` - . _ _ _ . - '

         windings all around, N turns in total, current I
```

```
  Take an Amperian circle of radius r THROUGH the core.
  B is tangential and constant on it :

        INT B.dl   =   B  x  ( 2 pi r )

  Current enclosed : the circle is threaded by ALL N turns, each with I

        I_enc      =   N I

  Ampere's law :
        B ( 2 pi r )   =   mu0  N  I
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |    INSIDE A TOROID :                mu0  N  I               |
  |                              B  =  ------------             |
  |                                      2 pi r                 |
  |                                                             |
  |    Writing  n = N / (2 pi r)  gives  B = mu0 n I  again.    |
  |                                                             |
  |    B in the empty space INSIDE the inner radius   =  0      |
  |    B in the space OUTSIDE the toroid              =  0      |
  |    (both loops enclose zero net current)                    |
  |                                                             |
  +-------------------------------------------------------------+
```

## WORKED EXAMPLE 11

**A solenoid 50 cm long has 250 turns and carries 2 A. Find B inside.**

```
        N          250
   n = --- =  ----------  =  500  turns per metre
        L         0.5

   B  =  mu0 n I  =  (4 pi x 10^-7)(500)(2)
                  =  (1.2566 x 10^-6)(1000)
                  =  1.26 x 10^-3  T
```

## WORKED EXAMPLE 12

**A toroid of mean radius 10 cm has 500 turns and carries 2 A. Find B.**

```
          mu0 N I        (4 pi x 10^-7)(500)(2)        1.2566 x 10^-3
   B  =  ---------  =  --------------------------  =  ----------------
          2 pi r            2 x 3.14 x 0.1                 0.628

       =  2.0 x 10^-3  T
```

> **TRAP:** in the solenoid formula `n` is turns **per metre**. In the toroid
> formula `N` is the **total** number of turns. Mixing them up is the number
> one error here.

---

# TOPIC 12 — Ampere's law vs Biot-Savart law

| | Biot-Savart law | Ampere's circuital law |
|---|---|---|
| Gives | field of one small element | total field via a line integral |
| Works for | **any** shape of conductor | only **symmetric** cases |
| Analogous to | Coulomb's law | Gauss's law |
| Easier when | shape is irregular | shape is a straight wire / solenoid / toroid |
| Both are valid always | yes | yes (but not always *useful*) |

---

# TOPIC 13 — A current loop as a MAGNETIC DIPOLE

A small current loop behaves exactly like a tiny bar magnet.

```
        CURRENT  LOOP  =  MAGNETIC  DIPOLE

            ____________                        N
           /            \                       ^
          |      I  ->   |     is the same as   |    M
          |              |                      |
           \____________/                       S

     Face where the current looks ANTICLOCKWISE  ->  NORTH pole
     Face where the current looks CLOCKWISE      ->  SOUTH pole
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |   MAGNETIC DIPOLE MOMENT      M  =  N  I  A                 |
  |                                                             |
  |   N = number of turns , I = current , A = area of the loop  |
  |                                                             |
  |   VECTOR :  M is along the NORMAL to the loop, direction    |
  |             given by the right hand rule (curl fingers      |
  |             along I, thumb gives M).                        |
  |                                                             |
  |   SI unit :  A m^2      Dimensions :  [ L^2 A ]             |
  |                                                             |
  +-------------------------------------------------------------+
```

**A neat result:** for an electron in a circular orbit of radius r with
speed v,

```
     I  =  e / T  =  e v / (2 pi r)
     M  =  I A  =  (e v / 2 pi r)(pi r^2)  =  e v r / 2

     and since  L = m v r  (orbital angular momentum),

              M          e
             ---   =   -----     (the gyromagnetic ratio, 8.8 x 10^10 C/kg)
              L         2 m
```

---

# TOPIC 14 — Torque on a current loop in a uniform magnetic field

Put a rectangular coil in a uniform field. The two opposite sides feel equal
and opposite forces — a **couple** — which turns the coil.

```
     CURRENT  LOOP  IN  A  UNIFORM  FIELD   (view from the top)

                       normal to the coil (along M)
                          \
                           \  theta
                            \
     ------- B ------->      \                B is horizontal
     ------- B ------->       \
     ------- B ------->        +-------+      the coil is seen edge-on
     ------- B ------->        |       |
                               +-------+
                              /         \
                          F into      F out of
                          the page    the page
                             (these two make a COUPLE)
```

**Derivation (4 marks):**

```
  Rectangular coil of N turns, sides  l  and  b , area  A = l b ,
  carrying current I, in a uniform field B.
  Let  theta  =  angle between the NORMAL to the coil and B.

  STEP 1  The two sides of length l are perpendicular to B, so each
          feels a force
                F  =  B I l          (in opposite directions)

  STEP 2  These two forces are equal, opposite and NOT along the same
          line, so they form a COUPLE.

  STEP 3  Perpendicular distance between them  =  b sin(theta)

  STEP 4  Torque  =  force  x  perpendicular distance
                  =  (B I l) x (b sin theta)
                  =  B I (l b) sin theta
                  =  B I A sin theta

  STEP 5  For N turns, multiply by N.
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |   TORQUE   tau  =  N I A B sin(theta)  =  M B sin(theta)    |
  |                                                             |
  |   VECTOR FORM :   tau  =  M  x  B                           |
  |                                                             |
  |   theta is between the NORMAL to the coil and B.            |
  |                                                             |
  +-------------------------------------------------------------+
```

## Special positions

```
  +-----------------------------+--------------+---------------------------+
  |  POSITION                   |  theta       |  TORQUE                   |
  +-----------------------------+--------------+---------------------------+
  |  Plane of coil PARALLEL     |   90 deg     |  tau = M B  (MAXIMUM)     |
  |  to B (normal perp. to B)   |              |                           |
  |  Plane of coil PERP. to B   |    0 deg     |  tau = 0                  |
  |  (normal along B)           |              |  STABLE equilibrium       |
  |  Normal ANTIPARALLEL to B   |  180 deg     |  tau = 0                  |
  |                             |              |  UNSTABLE equilibrium     |
  +-----------------------------+--------------+---------------------------+
```

> **TRAP:** `theta` is the angle between the **normal** and B, NOT between the
> **plane of the coil** and B. If the question gives the angle with the
> *plane*, use `cos` instead of `sin` — or better, convert:
> `angle with normal = 90 - angle with plane`.

## Potential energy of a magnetic dipole

```
                            theta
      U  =  - INT tau d(theta)   =   - M B cos(theta)

  +-------------------------------------------------------------+
  |                                                             |
  |     U   =   - M B cos(theta)     =    - ( M . B )           |
  |                                                             |
  |     theta = 0    ->  U = -MB   MINIMUM   STABLE             |
  |     theta = 90   ->  U =  0                                 |
  |     theta = 180  ->  U = +MB   MAXIMUM   UNSTABLE           |
  |                                                             |
  |     Work to turn from theta1 to theta2 :                    |
  |         W  =  M B ( cos theta1  -  cos theta2 )             |
  |                                                             |
  +-------------------------------------------------------------+
```

**Note:** the **net force** on a current loop in a *uniform* field is
**zero** — only a torque acts. In a *non-uniform* field there is also a net
force.

## WORKED EXAMPLE 13

**A coil of 100 turns and area 0.01 m^2 carries 1 A and is placed in a field
of 0.5 T. The normal to the coil makes 30 degrees with B. Find the torque and
the magnetic moment.**

```
   M   =  N I A  =  100 x 1 x 0.01  =  1 A m^2

   tau =  M B sin(theta)
       =  1 x 0.5 x sin 30
       =  1 x 0.5 x 0.5
       =  0.25  N m
```

---

# TOPIC 15 — THE MOVING COIL GALVANOMETER  *** 8-mark question ***

A device that **detects and measures small currents**.

## Construction (draw this)

```
              MOVING  COIL  GALVANOMETER

                        TORSION HEAD
                            ___
                           |___|
                             |
                             |  PHOSPHOR BRONZE
                             |  SUSPENSION WIRE (upper spring)
                             |
                 +-----------+-----------+
                 |                       |
          +------|-----------------------|------+
          |      |    +-------------+    |      |
          |      |    |             |    |      |
     N    |      |    |   SOFT      |    |      |    S
     pole |      |    |   IRON      |    |      |    pole
          |  ((  |    |   CORE      |    |  ))  |
     (concave    |    |  (cylinder) |    |   (concave
      face)      |    |             |    |    face)
          |      |    +-------------+    |      |
          |      |         COIL          |      |
          +------|-----------------------|------+
                 |                       |
                 +-----------+-----------+
                             |
                             |  lower spring
                            _|_
                           |___|   terminal


              +----------------------------------+
              |   |   |   |   |   |   |   |   |  |   SCALE
              |  -3  -2  -1   0   1   2   3      |
              +---------------\------------------+
                               \  light spot from
                                \ a MIRROR on the
                                  suspension
```

Parts:

```
  1.  A rectangular COIL of many turns of fine insulated copper wire,
      wound on a non-magnetic frame.
  2.  Suspended by a thin PHOSPHOR BRONZE strip between the poles of a
      strong permanent horse-shoe magnet.
  3.  The pole pieces are CONCAVE (cylindrical), and a cylindrical
      SOFT IRON CORE sits inside the coil.
  4.  A small MIRROR on the suspension gives a lamp-and-scale reading.
  5.  A lower spring completes the circuit and provides the restoring
      couple together with the suspension.
```

## Principle

```
  When a current-carrying coil is placed in a magnetic field it
  experiences a TORQUE that turns it, and the twist of the suspension
  provides an opposing restoring torque. The coil settles where the two
  balance, and the deflection is proportional to the current.
```

## Working / Theory (the derivation)

```
  STEP 1   Deflecting torque on the coil  =  N I A B sin(theta)

  STEP 2   Because the field is RADIAL, the plane of the coil is ALWAYS
           parallel to B, i.e. theta = 90 and sin(theta) = 1 always.

              deflecting torque  =  N I A B

  STEP 3   The suspension twists through an angle "phi" and provides a
           restoring torque
              restoring torque   =  C phi
           where C = torsional constant (couple per unit twist).

  STEP 4   At equilibrium the two are equal :

              N I A B   =   C phi
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |                  C                          N A B           |
  |        I   =  --------  phi        phi  =  --------  I      |
  |                N A B                          C             |
  |                                                             |
  |        I  is DIRECTLY PROPORTIONAL to  phi                  |
  |        -> the scale is LINEAR (uniform)                      |
  |                                                             |
  +-------------------------------------------------------------+
```

## Why a RADIAL field and a SOFT IRON CORE? (2 marks, asked often)

```
  RADIAL MAGNETIC FIELD  (produced by the CONCAVE pole pieces)
     * makes the plane of the coil always parallel to B,
       so sin(theta) = 1 in EVERY position
     * therefore the torque does not depend on the position of the coil
     * therefore the deflection is proportional to I
     * therefore THE SCALE IS UNIFORM / LINEAR

  SOFT IRON CORE
     * concentrates the magnetic field lines, making B stronger
       -> greater sensitivity
     * helps make the field radial
     * (soft iron is used because it magnetises and demagnetises easily)
```

## Sensitivity

```
  +--------------------------------------------------------------+
  |                                                              |
  |                        deflection        phi       N A B     |
  |   CURRENT           =  ------------  =  -----  =  --------   |
  |   SENSITIVITY          current            I          C       |
  |                                                              |
  |   unit : divisions per ampere  (rad / A)                     |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |                        deflection        phi       N A B     |
  |   VOLTAGE           =  ------------  =  -----  =  --------   |
  |   SENSITIVITY          voltage            V         C G      |
  |                                                              |
  |            current sensitivity                               |
  |        =  -------------------------                          |
  |               G (coil resistance)                            |
  |                                                              |
  |   unit : divisions per volt  (rad / V)                       |
  |                                                              |
  +--------------------------------------------------------------+
  |                                                              |
  |   FIGURE OF MERIT   k  =  I / phi  =  C / (N A B)            |
  |                                                              |
  |   = the current needed for ONE division of deflection        |
  |   = the RECIPROCAL of the current sensitivity                |
  |   unit : ampere per division                                 |
  |                                                              |
  +--------------------------------------------------------------+
```

**To increase the sensitivity:** increase `N`, `A` or `B`, or decrease `C`
(use a very thin phosphor bronze suspension — it has a small `C`, does not
rust, and has negligible elastic after-effect).

> **TRAP:** *"Increasing the current sensitivity does NOT necessarily increase
> the voltage sensitivity."* Doubling N doubles the current sensitivity, but it
> also roughly doubles the coil resistance G, so the voltage sensitivity
> `NAB/CG` stays the same. This exact statement is a repeated 2-mark question.

---

# TOPIC 16 — Converting a galvanometer into an AMMETER

An ammeter measures **large** currents and must be joined **in series**, so it
must have a **very low resistance**. A galvanometer has a high resistance and
burns out with a large current. So we divert most of the current through a low
resistance called a **SHUNT**, connected in **PARALLEL**.

```
             GALVANOMETER  ->  AMMETER

                       Ig
              +----[  G  ]----+
              |   galvanometer|
    ---> I ---+               +---> I
              |               |
              +----[  S  ]----+
                    shunt
                   I - Ig

    S is a SMALL resistance in PARALLEL with G.
```

```
  Both are across the same two points, so the potential differences are equal :

           Ig  G    =    ( I - Ig )  S

  +-------------------------------------------------------------+
  |                                                             |
  |                       Ig  G                                 |
  |         S     =    ------------          SHUNT              |
  |                      I  -  Ig                               |
  |                                                             |
  |                        G  S                                 |
  |   Resistance of      -------      (which is very SMALL)     |
  |   the ammeter  =      G + S                                 |
  |                                                             |
  |                       S                                     |
  |         Ig    =    ------- x I       (current through G)    |
  |                     G + S                                   |
  |                                                             |
  +-------------------------------------------------------------+
```

**An ideal ammeter has ZERO resistance.**

## WORKED EXAMPLE 14

**A galvanometer of resistance 100 ohm gives full-scale deflection for 1 mA.
Convert it into an ammeter reading up to 1 A.**

```
   G  =  100 ohm ,  Ig = 1 x 10^-3 A ,  I = 1 A

           Ig G          (1 x 10^-3)(100)          0.1
   S  =  ---------  =  --------------------  =  ---------
          I - Ig        1  -  1 x 10^-3           0.999

      =  0.1001  ohm     (about 0.1 ohm)

   Connect a 0.1 ohm resistance IN PARALLEL with the galvanometer.
```

---

# TOPIC 17 — Converting a galvanometer into a VOLTMETER

A voltmeter is joined **in parallel** across a component, so it must draw
almost no current, i.e. it must have a **very high resistance**. So we add a
high resistance **in SERIES**.

```
             GALVANOMETER  ->  VOLTMETER

           +-----[  G  ]-----[  R  ]-----+
           |    galvanometer   high      |
           |                 resistance  |
           A                             B
           |<---------  V  ------------->|

    R is a LARGE resistance in SERIES with G.
```

```
  The same current Ig flows through both :

           V   =   Ig ( G  +  R )

  +-------------------------------------------------------------+
  |                                                             |
  |                    V                                        |
  |         R   =    -----   -   G          MULTIPLIER          |
  |                   Ig                                        |
  |                                                             |
  |   Resistance of the voltmeter  =  G  +  R   (very LARGE)    |
  |                                                             |
  +-------------------------------------------------------------+
```

**An ideal voltmeter has INFINITE resistance.**

## WORKED EXAMPLE 15

**The same galvanometer (G = 100 ohm, Ig = 1 mA) is to read up to 10 V.
Find R.**

```
          V              10
   R  =  ----  -  G  =  ---------  -  100
          Ig             10^-3

      =  10 000  -  100

      =  9 900  ohm

   Connect 9900 ohm IN SERIES with the galvanometer.
```

## Ammeter vs Voltmeter — the comparison table

```
  +-------------------+---------------------+------------------------+
  |                   |  AMMETER            |  VOLTMETER             |
  +-------------------+---------------------+------------------------+
  |  Measures         |  current            |  potential difference  |
  |  Connected        |  IN SERIES          |  IN PARALLEL           |
  |  Extra resistance |  SHUNT S, small,    |  R, large,             |
  |                   |  in PARALLEL        |  in SERIES             |
  |  Formula          |  S = Ig G/(I - Ig)  |  R = V/Ig  -  G        |
  |  Its resistance   |  very LOW           |  very HIGH             |
  |  Ideal value      |  ZERO               |  INFINITE              |
  +-------------------+---------------------+------------------------+
```

> **TRAP:** `R = V/Ig - G`. Students forget to subtract `G` and lose the mark.
> Also remember `V/Ig` is the **total** resistance of the voltmeter, and `R` is
> only the extra bit you add.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write theta as the angle between  v and B  (not something else)?
  [ ]  Did I say the magnetic force does NO WORK and the SPEED is constant?
  [ ]  Did I include  N  (number of turns) in  M = NIA and tau = NIAB sin T?
  [ ]  Straight wire  ->  mu0 I / (2 pi r).   Coil centre -> mu0 N I / (2a).
       Did I put the  pi  in the right one only?
  [ ]  Solenoid : did I use  n = turns PER METRE  and not the total N?
  [ ]  Toroid   : did I use the TOTAL N?
  [ ]  Did I convert cm to METRES everywhere?
  [ ]  In the cyclotron answer, did I include the LIMITATIONS?
  [ ]  In the galvanometer answer, did I explain WHY the field is radial?
  [ ]  Ammeter -> shunt in PARALLEL.  Voltmeter -> resistance in SERIES.
  [ ]  Did I DRAW the diagram? Cyclotron, galvanometer, solenoid, toroid
       and the current loop each carry 1-2 marks for the labelled figure.
  [ ]  Did I write the UNIT beside every numerical answer?
  [ ]  Did I state the DIRECTION whenever the answer is a vector?
```

**Diagrams are free marks in this chapter.** Even if the derivation goes wrong,
a clean labelled diagram of the cyclotron or the galvanometer earns 2 marks.
Draw first, then write.
