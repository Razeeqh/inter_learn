# Electromagnetic Induction — Concepts Explained Simply

Read this like a story. Every topic here is built on ONE sentence:

```
  +----------------------------------------------------------------+
  |   A MAGNETIC FIELD THAT CHANGES THROUGH A LOOP OF WIRE         |
  |   PUSHES THE ELECTRONS IN THAT WIRE AND MAKES A CURRENT.       |
  +----------------------------------------------------------------+
```

Nothing else. If you remember only that, you can rebuild most of the chapter.

---

# TOPIC 1 — Magnetic flux (start here, no exceptions)

## The everyday idea

Imagine rain falling straight down and you hold a ring out in the rain.

```
        rain falling down                rain falling down
        | | | | | | | |                  | | | | | | | |
        v v v v v v v v                  v v v v v v v v

        +-------------+                       /|
        |    RING     |   flat, face up      / | ring turned
        +-------------+                     /  | sideways
                                           /   |
      LOTS of rain goes through        ALMOST NO rain goes through
```

**Magnetic flux is exactly this, with magnetic field lines instead of rain.**
It counts *how many field lines pass through the loop*.

Two things control it:
1. How strong the field is, and how big the loop is.
2. **How the loop is TILTED.**

## The definition

```
  +----------------------------------------------------------------+
  |                                                                |
  |          phi  =  B  A  cos(theta)                              |
  |                                                                |
  |     B      = magnetic flux density (magnetic field), in tesla  |
  |     A      = area of the loop, in m^2                          |
  |     theta  = ANGLE BETWEEN B AND THE NORMAL TO THE AREA        |
  |              (the normal = the line sticking straight OUT of   |
  |               the surface, NOT the surface itself)             |
  |                                                                |
  +----------------------------------------------------------------+
```

Written with vectors it is a dot product: `phi = B . A`

## ASCII picture of flux through a coil

```
                       n  (normal to the coil)
                       ^
                       |        B  (magnetic field)
                       |      /
                       |     /
                       |    /
                       |   /
                       |  /   theta
                       | /
        _______________|/________________
       /                                 /
      /          C O I L                /      Area = A
     /         (area A)                /
    /_________________________________/


        phi  =  B A cos(theta)


  SPECIAL CASES
  -------------
    theta = 0     ->  B along the normal (perpendicular to the coil face)
                      phi = B A            <-- MAXIMUM

    theta = 60    ->  phi = B A / 2

    theta = 90    ->  B lies IN the plane of the coil
                      phi = 0              <-- ZERO, no lines pass through

    theta = 180   ->  phi = - B A          <-- maximum, other direction
```

> **TRAP:** theta is measured from the **NORMAL**, not from the plane of the coil.
> If a question says "the field makes 30 degrees WITH THE PLANE of the coil",
> then the angle with the normal is `90 - 30 = 60`, so you must use `cos 60`.
> This single mistake costs marks every single year.

## Unit and dimensional formula

```
  SI UNIT       weber (Wb)

                1 weber = 1 tesla x 1 metre^2  =  1 T m^2
                        = 1 volt x 1 second    =  1 V s

  DEFINITION OF 1 WEBER
     The flux through a surface of area 1 m^2 held perpendicular to a
     uniform field of 1 tesla.
     (Equivalently: the flux which, when reduced to zero in 1 second,
      induces an EMF of 1 volt in a single-turn coil.)

  CGS unit      maxwell        1 weber = 10^8 maxwell


  DIMENSIONAL FORMULA
  -------------------
        phi  =  B A

        B has dimensions  [ M T^-2 A^-1 ]     (from  F = B I l )
        A has dimensions  [ L^2 ]

        [ phi ]  =  [ M T^-2 A^-1 ] x [ L^2 ]  =  [ M L^2 T^-2 A^-1 ]
```

Check it the other way round (this is a favourite competitive question):

```
  phi = e x t   ->   [ M L^2 T^-3 A^-1 ] x [ T ]  =  [ M L^2 T^-2 A^-1 ]   OK
```

**Flux is a SCALAR**, even though B and A are vectors. It is a dot product.

## WORKED EXAMPLE 1

*A coil of area 100 cm^2 is placed in a uniform magnetic field of 0.2 T. The
field makes an angle of 30 degrees with the plane of the coil. Find the flux.*

```
  STEP 1   Convert the area to SI
             A = 100 cm^2 = 100 x 10^-4 m^2 = 1 x 10^-2 m^2

  STEP 2   Find the angle WITH THE NORMAL
             Given angle is with the PLANE = 30
             So  theta (with normal) = 90 - 30 = 60

  STEP 3   Apply the formula
             phi = B A cos theta
                 = 0.2 x 1 x 10^-2 x cos 60
                 = 0.2 x 1 x 10^-2 x 0.5
                 = 1 x 10^-3 Wb

  ANSWER   phi = 1 x 10^-3 Wb  =  1 milliweber
```

## The three ways to change the flux (memorise this list)

```
  phi = B A cos(theta)

     +--------------------+-------------------------------------------+
     |  CHANGE B          |  move a magnet nearer/further, or change   |
     |                    |  the current in a nearby coil             |
     +--------------------+-------------------------------------------+
     |  CHANGE A          |  stretch, squash or slide the loop        |
     |                    |  (this is where  e = B l v  comes from)   |
     +--------------------+-------------------------------------------+
     |  CHANGE theta      |  ROTATE the coil                          |
     |                    |  (this is the AC GENERATOR)               |
     +--------------------+-------------------------------------------+
```

Every question in this chapter is one of these three.

---

# TOPIC 2 — The experiments of Faraday and Henry

In 1831 Michael Faraday in England and Joseph Henry in America independently
discovered the same thing: **electricity can be produced from magnetism, but
only while something is CHANGING.**

## EXPERIMENT 1 — A bar magnet and a coil

```
                                    coil of many turns
                              +-----------------------------+
      +-------+               |  ) ) ) ) ) ) ) ) ) ) ) )    |
      |  N  S | --> moving    |                             |
      +-------+     towards   +--------+-----------+--------+
      bar magnet     coil              |           |
                                       |           |
                                     +-+-----------+-+
                                     |       G       |    galvanometer
                                     +---------------+
                                       needle deflects!
```

What Faraday saw:

```
  +---------------------------------+-----------------------------------+
  |  WHAT YOU DO                    |  WHAT THE GALVANOMETER DOES       |
  +---------------------------------+-----------------------------------+
  |  Magnet pushed TOWARDS coil     |  deflects one way                 |
  |  Magnet pulled AWAY from coil   |  deflects the OTHER way           |
  |  Magnet HELD STILL near coil    |  NO deflection at all             |
  |  Magnet moved FASTER            |  BIGGER deflection                |
  |  Coil moved, magnet still       |  same deflection (relative motion |
  |                                 |  is what matters)                 |
  |  More turns in the coil         |  BIGGER deflection                |
  +---------------------------------+-----------------------------------+
```

> **The whole chapter is in row 3.** A stationary magnet, however strong,
> produces NOTHING. Only *change* produces an EMF.

## EXPERIMENT 2 — Two coils, one carrying a current

Replace the bar magnet by a second coil carrying a steady current from a
battery (a current-carrying coil behaves exactly like a bar magnet).

```
      COIL 1 (primary)                        COIL 2 (secondary)
   +-------------------+                   +-------------------+
   |  ) ) ) ) ) ) ) )  |  --> moved        |  ) ) ) ) ) ) ) )  |
   +--------+----------+     towards       +--------+----------+
            |                coil 2                 |
        +---+---+                              +----+----+
        |  --|- |  battery                     |    G    | galvanometer
        +-------+                              +---------+
```

Result: exactly the same as Experiment 1. Moving coil 1 towards or away from
coil 2 deflects the galvanometer; keeping them still gives nothing.

## EXPERIMENT 3 — Two stationary coils and a KEY (the crucial one)

Now nothing moves at all. Both coils are fixed. Coil 1 has a battery and a
tapping key; coil 2 has a galvanometer.

```
        PRIMARY CIRCUIT                     SECONDARY CIRCUIT
   +---------------------------+      +---------------------------+
   |                           |      |                           |
   |   +-------------------+   |      |   +-------------------+   |
   |   |  ) ) ) ) ) ) ) )  |   |      |   |  ) ) ) ) ) ) ) )  |   |
   |   +---------+---------+   |      |   +---------+---------+   |
   |             |             |      |             |             |
   |     +-------+-------+     |      |     +-------+-------+     |
   |     |  --|-  K  o/o |     |      |     |       G       |     |
   |     +---------------+     |      |     +---------------+     |
   |     battery   key         |      |                           |
   +---------------------------+      +---------------------------+
                    (both coils are wound on the same iron core,
                     or simply placed close together)
```

```
  KEY PRESSED (current starts)   ->  momentary kick of the needle ONE way
  KEY HELD DOWN (steady current) ->  NO deflection at all
  KEY RELEASED (current stops)   ->  momentary kick the OTHER way
```

**Conclusion of all three experiments:**

```
  +----------------------------------------------------------------+
  |  An EMF is induced in a circuit whenever the MAGNETIC FLUX      |
  |  linked with it CHANGES. The EMF lasts only as long as the      |
  |  flux is changing, and its size depends on the RATE of change.  |
  +----------------------------------------------------------------+
```

> **TRAP:** in Experiment 3 the steady current produces a big steady flux in
> coil 2 — but the galvanometer reads ZERO. Big flux is not the point.
> CHANGING flux is the point.

---

# TOPIC 3 — Faraday's laws of electromagnetic induction

## FIRST LAW (the qualitative one)

```
  Whenever the magnetic flux linked with a closed circuit changes,
  an EMF is induced in it. The induced EMF lasts only so long as
  the change in flux continues.
```

## SECOND LAW (the one you calculate with)

```
  The magnitude of the induced EMF is directly proportional to the
  RATE OF CHANGE of magnetic flux linked with the circuit.
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |                          d(phi)                                |
  |            e   =   -  N  --------                              |
  |                            dt                                  |
  |                                                                |
  |     e     = induced EMF, in volts                              |
  |     N     = number of turns in the coil                        |
  |     phi   = flux through ONE turn, in weber                    |
  |     N phi = "flux linkage", in weber-turns                     |
  |                                                                |
  |     For a change from phi1 to phi2 in time t :                 |
  |                                                                |
  |                       N ( phi2 - phi1 )                        |
  |            e   =   -  ------------------                       |
  |                              t                                 |
  |                                                                |
  +----------------------------------------------------------------+
```

## What the MINUS SIGN means

The minus sign is **not** mathematics — it is physics. It is Lenz's law
written into the equation:

```
  The induced EMF (and the current it drives) always acts in the
  direction that OPPOSES the change of flux which produced it.
```

If the flux is increasing (`d(phi)/dt` positive), the EMF is negative — it
tries to push flux back down. If the flux is decreasing, the EMF is positive
— it tries to hold the flux up. Nature always resists change.

> **TRAP:** in a numerical answer, write the MAGNITUDE and then say
> "the minus sign indicates that the induced EMF opposes the change in flux
> (Lenz's law)". You get the mark for that sentence, not for the sign alone.

## Induced current and induced CHARGE

```
  Induced current      I  =  e / R  =  - (N / R) d(phi)/dt

  Charge that flows in time dt :

               N d(phi)              N ( phi2 - phi1 )
       dq  =  ----------  ->   q  =  ------------------
                  R                          R
```

```
  +----------------------------------------------------------------+
  |   THE INDUCED CHARGE DOES NOT DEPEND ON TIME.                  |
  |   It depends only on the TOTAL flux change and the resistance. |
  |   (Move the magnet fast or slow — the same charge flows.)      |
  +----------------------------------------------------------------+
```

This is a very common 2-mark and MCQ question.

## WORKED EXAMPLE 2

*A coil of 100 turns and resistance 10 ohm has its flux changed from
0.05 Wb to 0.01 Wb in 0.2 s. Find (a) the induced EMF, (b) the induced
current, (c) the charge that flows.*

```
  GIVEN    N = 100 , phi1 = 0.05 Wb , phi2 = 0.01 Wb ,
           t = 0.2 s , R = 10 ohm

  (a)                  ( phi2 - phi1 )        ( 0.01 - 0.05 )
       e  =  -  N  x  -----------------  = - 100 x --------------
                              t                        0.2

                    = - 100 x ( - 0.2 )   =   + 20 V

       |e| = 20 V

  (b)  I  =  e / R  =  20 / 10  =  2 A

  (c)  q  =  N ( phi1 - phi2 ) / R
          =  100 x 0.04 / 10
          =  0.4 C

       CHECK:  q = I t = 2 x 0.2 = 0.4 C     agrees.
```

## WORKED EXAMPLE 3

*The flux through a coil varies as `phi = 3 t^2 + 4 t + 9` weber. Find the
EMF induced at t = 2 s.*

```
  STEP 1   Differentiate

             d(phi)/dt  =  6 t + 4

  STEP 2   Put t = 2

             d(phi)/dt  =  6(2) + 4  =  16 Wb/s

  STEP 3   e = - d(phi)/dt  =  - 16 V

  ANSWER   magnitude 16 V  (minus sign = opposes the increase in flux)
```

---

# TOPIC 4 — Lenz's law and conservation of energy

## The statement (learn it word for word)

```
  +----------------------------------------------------------------+
  |   LENZ'S LAW                                                   |
  |                                                                |
  |   The direction of the induced current is always such that     |
  |   it OPPOSES THE CAUSE that produces it.                       |
  +----------------------------------------------------------------+
```

"The cause" means the change of flux — so the induced current tries to keep
the flux the way it was.

## How to USE it — the three-step recipe

```
  STEP 1   Which way does the ORIGINAL flux point through the coil?
  STEP 2   Is that flux INCREASING or DECREASING?
  STEP 3   INCREASING  ->  induced current OPPOSES it
                           (its own field points the OTHER way)
           DECREASING  ->  induced current SUPPORTS it
                           (its own field points the SAME way)

  Then use the RIGHT-HAND GRIP RULE to turn "field direction" into
  "current direction":
      curl the right hand fingers along the current
      -> the thumb points along the field inside the coil.
```

Face-on shortcut:

```
  Looking at the coil face,
    if the field COMING TOWARDS YOU is increasing
        -> induced current flows CLOCKWISE (as you see it)
    if it is decreasing
        -> induced current flows ANTICLOCKWISE
```

## The standard demonstration — bar magnet approaching a coil

```
   CASE 1:  NORTH POLE MOVING TOWARDS THE COIL

      +-------+                  +---------------------+
      |  S  N |  --> v           |   ) ) ) ) ) ) ) )   |
      +-------+                  +----------+----------+
                                            |
                    the face of the coil    |
                    turns into a NORTH pole |
                    to REPEL the magnet     G

        Flux towards the coil is INCREASING
              -> induced current OPPOSES it
              -> coil face nearest the magnet becomes a NORTH pole
              -> N faces N  ->  REPULSION
              -> you must PUSH to keep the magnet moving
              -> current is ANTICLOCKWISE as seen from the magnet


   CASE 2:  NORTH POLE MOVING AWAY FROM THE COIL

      +-------+                  +---------------------+
      |  S  N |  v <--           |   ) ) ) ) ) ) ) )   |
      +-------+                  +----------+----------+
                                            |
                    the face becomes a      |
                    SOUTH pole to ATTRACT   G
                    the magnet back

        Flux is DECREASING
              -> induced current tries to MAINTAIN it
              -> coil face nearest the magnet becomes a SOUTH pole
              -> N is attracted by S  ->  ATTRACTION
              -> you must PULL to keep the magnet moving
              -> current is CLOCKWISE as seen from the magnet
```

Memory line:

```
      APPROACHING  ->  the coil says "GO AWAY"   (repels)
      RECEDING     ->  the coil says "COME BACK" (attracts)
```

## LENZ'S LAW FOLLOWS FROM CONSERVATION OF ENERGY (4-mark answer)

Write it as a proof by contradiction. This is exactly how the board wants it.

```
  SUPPOSE Lenz's law were FALSE.

  Then, when the north pole of a magnet is pushed towards the coil,
  the near face of the coil would become a SOUTH pole and ATTRACT
  the magnet.

  CONSEQUENCE:
     - the magnet would be pulled in without you doing any work
     - it would accelerate on its own
     - it would gain kinetic energy
     - AND at the same time a current would flow in the coil,
       producing heat  I^2 R  in the resistance

     So kinetic energy AND heat energy would both appear
     out of NOTHING.

  That violates the LAW OF CONSERVATION OF ENERGY, which is impossible.

  THEREFORE the coil must OPPOSE the motion, exactly as Lenz's law says.


  WHERE THE ENERGY ACTUALLY COMES FROM:
     Because the coil repels the magnet, YOU have to do work to push
     the magnet in against that repulsion.

          WORK YOU DO  =  ELECTRICAL ENERGY PRODUCED
                       =  HEAT  I^2 R t  in the coil

     Lenz's law is simply conservation of energy for induced currents.
```

> **TRAP:** many students only write "Lenz's law obeys conservation of energy".
> That is one line and earns one mark. Write the full contradiction argument
> above — it is worth all 4.

---

# TOPIC 5 — Motional EMF

## The set-up

A straight conducting rod of length `l` slides with speed `v` on two frictionless
rails in a uniform magnetic field `B` directed INTO the page.

```
      x   x   x   x   x   x   x   x   x   x   x   x   x
        (B into the page)          P
      x---x---x---x---x---x---x---o---x---x---x---x---x
      |                           |
      |                           |  ^                 ---> v
      |          AREA A           |  |  l  (rod PQ)
   R  |                           |  |
      |                           |  v
      |                           |
      x---x---x---x---x---x---x---o---x---x---x---x---x
      x   x   x   x   x   x   x   Q x   x   x   x   x
                                  |<------ x -------->|
                                  the rod slides right,
                                  so the enclosed AREA grows
```

## Derivation 1 — from the flux rule (Faraday's law)

```
  Let the rod be a distance x from the left end.

  STEP 1   Area enclosed by the circuit    A  =  l x

  STEP 2   Flux through it (B is perpendicular to the area, theta = 0)

               phi  =  B A  =  B l x

  STEP 3   Differentiate with respect to time
               d(phi)          d x
              --------  = B l ------  =  B l v          (since dx/dt = v)
                 dt            dt

  STEP 4   Faraday's law
               e  =  - d(phi)/dt  =  - B l v


  +----------------------------------------------------------------+
  |                                                                |
  |                MOTIONAL EMF     e  =  B l v                    |
  |                                                                |
  |     valid when B , l and v are MUTUALLY PERPENDICULAR          |
  |     in general:      e  =  B l v sin(theta)                    |
  |                                                                |
  +----------------------------------------------------------------+
```

## Derivation 2 — from the Lorentz force (the "why" version)

This derivation does not use Faraday's law at all, which is why the board
likes it.

```
  STEP 1   Every free electron inside the rod is moving with the rod at
           speed v, in a field B. So it feels a magnetic force

               F  =  q v B          (v perpendicular to B)

  STEP 2   This force pushes the free electrons towards one end of the
           rod (Q), leaving the other end (P) positively charged.

               P  +  +  +  +
               |
               |    <-- force on electrons pushes them down
               |
               Q  -  -  -  -

  STEP 3   The separated charge sets up an ELECTRIC FIELD E inside the
           rod, from P to Q. This field pushes the electrons back.

  STEP 4   Equilibrium is reached when the two forces balance:

               q E  =  q v B      ->      E  =  v B

  STEP 5   The potential difference between the ends is

               e  =  E l  =  B l v

           This is the EMF of the rod. It acts like a little battery
           of EMF  B l v  with P as the + terminal.


  SAME ANSWER as the flux method.   e = B l v
```

## The force, the power and the heat

Once the circuit is closed through a resistance `R`:

```
  INDUCED CURRENT
                    e         B l v
             I  =  ---  =  ----------
                    R           R


  FORCE ON THE ROD (opposing its motion — Lenz again)

             F  =  B I l  =  B l  x  (B l v / R)

  +----------------------------------------------------------------+
  |                              B^2 l^2 v                         |
  |     RETARDING FORCE   F  =  -----------                        |
  |                                  R                             |
  |                                                                |
  |     To keep the rod moving at CONSTANT v you must apply an     |
  |     equal force in the forward direction.                      |
  +----------------------------------------------------------------+


  POWER YOU MUST SUPPLY (mechanical)

  +----------------------------------------------------------------+
  |                                B^2 l^2 v^2                     |
  |     P(mech)  =  F v  =        -------------                    |
  |                                     R                          |
  +----------------------------------------------------------------+


  HEAT DISSIPATED IN THE RESISTOR (electrical)

                            ( B l v )^2       B^2 l^2 v^2
     P(heat) = I^2 R  =  R  ------------  =  -------------
                              R^2                  R


  +----------------------------------------------------------------+
  |     P(mech)  =  P(heat)                                        |
  |                                                                |
  |     ALL the mechanical work you do turns into heat.            |
  |     Energy is conserved. Nothing is created.                   |
  +----------------------------------------------------------------+
```

## Extra case — a rod ROTATING about one end

```
                       .  .  .
                  .              .        B out of the page
               .        omega       .
              .      o------------->.  end of rod
               .     |   length l  .
                  .  |          .
                       .  .  .

     Different parts move at different speeds, so integrate:

           e  =  INT (from 0 to l) B omega r dr   =   (1/2) B omega l^2

  +----------------------------------------------------------------+
  |     ROTATING ROD      e  =  (1/2) B omega l^2  =  (1/2) B l^2 (2 pi f)  |
  +----------------------------------------------------------------+
```

## WORKED EXAMPLE 4

*A rod of length 0.2 m slides at 10 m/s on rails, perpendicular to a field of
0.5 T. The circuit resistance is 2 ohm. Find (a) the EMF, (b) the current,
(c) the force needed to keep it moving, (d) the power supplied, (e) the heat
produced per second.*

```
  GIVEN   B = 0.5 T , l = 0.2 m , v = 10 m/s , R = 2 ohm

  (a)  e = B l v = 0.5 x 0.2 x 10 = 1 V

  (b)  I = e / R = 1 / 2 = 0.5 A

  (c)  F = B I l = 0.5 x 0.5 x 0.2 = 0.05 N
       (check with the formula: B^2 l^2 v / R
        = 0.25 x 0.04 x 10 / 2 = 0.1 / 2 = 0.05 N   OK)

  (d)  P = F v = 0.05 x 10 = 0.5 W

  (e)  Heat per second = I^2 R = (0.5)^2 x 2 = 0.25 x 2 = 0.5 W

       (d) = (e).  Energy is conserved, as it must be.
```

> **TRAP:** the force `B^2 l^2 v / R` is the force **opposing** the motion.
> The force you must **apply** is the same size, in the forward direction.
> If the rod is to move at constant velocity, net force = 0.

---

# TOPIC 6 — Eddy currents

## What they are

```
  When a SOLID piece of metal (not a wire) is placed in a changing
  magnetic field, induced currents are set up inside the body of the
  metal itself. Because the metal is a solid block, these currents
  swirl around in closed loops, like little whirlpools ("eddies") in
  a river. They are called EDDY CURRENTS or Foucault currents.
```

```
        CHANGING  B  (into the page)
        x    x    x    x    x    x    x
          +---------------------------+
        x |  .-->--.        .-->--.   | x        solid metal plate
          | /       \      /       \  |
        x | |   o   |  x   |   o   |  | x        the loops are the
          | \       /      \       /  |          EDDY CURRENTS
        x |  '--<--'        '--<--'   | x
          +---------------------------+
        x    x    x    x    x    x    x
```

Their direction, like every induced current, is given by **Lenz's law**: they
oppose the change that produced them.

## Why they are a NUISANCE in a transformer core

```
  1.  The core sits in a rapidly changing magnetic field.
  2.  Iron is a conductor, so large eddy currents flow in it.
  3.  They dissipate energy as HEAT  ( I^2 R ) .
  4.  RESULT:  - loss of energy  -> lower efficiency
               - overheating     -> the insulation on the windings
                                    can be damaged
```

## HOW LAMINATION FIXES IT (guaranteed exam point)

```
   SOLID CORE                        LAMINATED CORE
   +---------------------+           +-+-+-+-+-+-+-+-+-+-+-+
   |                     |           | | | | | | | | | | | |
   |   big eddy loops    |           | | | | | | | | | | | |
   |    .--->---.        |           | | | | | | | | | | | |
   |   |         |       |           | | | | | | | | | | | |
   |    '---<---'        |           | | | | | | | | | | | |
   |                     |           | | | | | | | | | | | |
   +---------------------+           +-+-+-+-+-+-+-+-+-+-+-+
   large loops, low                  thin sheets, each varnished
   resistance, HUGE                  or oxide-coated and insulated
   currents, lots of heat            from its neighbours

  The core is built from THIN SHEETS (laminations) placed PARALLEL to
  the magnetic field and insulated from each other.

  WHY IT WORKS
    - each sheet has a small cross-section
    - so each eddy loop has a much LARGER resistance R
    - the eddy currents are confined to each thin sheet, so they
      are much smaller
    - heat loss  I^2 R  falls sharply

  Also: the core is made of SILICON STEEL, whose resistivity is high
  and whose hysteresis loss is low.
```

## USEFUL applications of eddy currents (learn all four)

```
  +---------------------------+--------------------------------------------+
  |  APPLICATION              |  HOW IT WORKS                              |
  +---------------------------+--------------------------------------------+
  |  1. ELECTROMAGNETIC       |  Strong electromagnets are switched on      |
  |     BRAKING               |  near the spinning metal wheels/rails of    |
  |     (electric trains)     |  a train. Eddy currents set up in the metal |
  |                           |  oppose the motion (Lenz) and bring the     |
  |                           |  train smoothly to rest. No friction pads,  |
  |                           |  so no wear and no dust.                    |
  +---------------------------+--------------------------------------------+
  |  2. INDUCTION FURNACE     |  A metal to be melted is placed inside a    |
  |                           |  coil carrying high-frequency AC. Very      |
  |                           |  large eddy currents are induced in it and  |
  |                           |  the I^2 R heat melts the metal. Used to    |
  |                           |  make alloys.                               |
  +---------------------------+--------------------------------------------+
  |  3. ELECTRIC POWER METERS |  The shiny aluminium disc you can see       |
  |     (energy meters)       |  rotating in a domestic meter turns because |
  |                           |  of eddy currents induced in it by the      |
  |                           |  magnetic field of the current coils.       |
  +---------------------------+--------------------------------------------+
  |  4. MAGNETIC DAMPING /    |  The coil of a moving-coil galvanometer is  |
  |     DEAD-BEAT             |  wound on a metallic (aluminium) frame.     |
  |     GALVANOMETER          |  Eddy currents induced in the frame oppose  |
  |                           |  the swinging, so the needle stops at its   |
  |                           |  final reading at once instead of           |
  |                           |  oscillating. Such a galvanometer is called |
  |                           |  DEAD-BEAT.                                 |
  +---------------------------+--------------------------------------------+

  Also: induction cooktops, speedometers, metal detectors at airports.
```

## The slotted-plate demonstration

```
    Swing a solid copper plate between the poles of a magnet:
        -> it stops almost immediately (eddy currents damp it)

    Cut SLOTS in the same plate and swing it again:
        -> it swings freely for a long time

    +-----------+          +--+--+--+--+
    |           |          |  |  |  |  |
    |   SOLID   |          |  |  |  |  |   SLOTTED
    |           |          |  |  |  |  |
    +-----------+          +--+--+--+--+
    stops fast             swings freely

    WHY:  the slots break the large eddy loops, so the currents and
          the damping become very small. This is the same principle
          as lamination.
```

---

# TOPIC 7 — Self induction

## The idea

A coil does not only respond to *other* people's magnets. It responds to
**its own** magnetic field.

```
  Current in the coil  ->  makes a magnetic field  ->  makes flux
  through the coil ITSELF.

  If you now CHANGE the current, that flux changes, so the coil
  induces an EMF in ITSELF.

  This is SELF INDUCTION.  The EMF is called the BACK EMF, because
  (Lenz's law) it opposes the change in the current that made it.
```

Everyday analogy: **inertia.** A heavy trolley resists being started and
resists being stopped. A coil resists having its current started and resists
having its current stopped. Self inductance is *electrical inertia*.

## The equations

```
  The flux linkage is proportional to the current:

  +----------------------------------------------------------------+
  |                                                                |
  |          N phi  =  L I           ( L = self inductance )       |
  |                                                                |
  |  Differentiate and apply Faraday's law:                        |
  |                                                                |
  |                  d(N phi)               dI                     |
  |          e  =  - ----------   =   - L  ----                    |
  |                     dt                  dt                     |
  |                                                                |
  |          +--------------------------------+                    |
  |          |           e  =  - L  dI/dt     |                    |
  |          +--------------------------------+                    |
  |                                                                |
  +----------------------------------------------------------------+
```

## Two definitions of L (either one earns the 2 marks)

```
  DEFINITION 1 (flux definition)
      L = N phi / I
      The self inductance of a coil is the flux linkage produced in
      it per unit current flowing through it.

  DEFINITION 2 (EMF definition)
      L = - e / (dI/dt)
      The self inductance is the EMF induced in the coil when the
      current through it changes at the rate of one ampere per second.
```

## The unit — the HENRY

```
  +----------------------------------------------------------------+
  |   SI unit of L is the HENRY (H)                                |
  |                                                                |
  |        1 H  =  1 weber / ampere  =  1 volt second / ampere     |
  |                                                                |
  |   DEFINITION OF 1 HENRY                                        |
  |     A coil has a self inductance of 1 henry if an EMF of       |
  |     1 volt is induced in it when the current through it        |
  |     changes at the rate of 1 ampere per second.                |
  |                                                                |
  |   DIMENSIONAL FORMULA   [ M L^2 T^-2 A^-2 ]                    |
  +----------------------------------------------------------------+
```

## SELF INDUCTANCE OF A LONG SOLENOID — full derivation

This is a standard 4-mark derivation. Learn the four steps.

```
        <--------------------  l  -------------------->
       +----------------------------------------------+
    ---( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (---
       |                                              |
       |  ------->  ------->  ------->  ------->   B  |   area A
       |                                              |
    ---) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )---
       +----------------------------------------------+
         N turns in total ,  n = N / l  turns per metre
         current I flows through the winding
```

```
  STEP 1   The field inside a long solenoid is uniform:

               B  =  mu0 n I           where  n = N / l


  STEP 2   Flux through ONE turn (B is along the axis, theta = 0):

               phi  =  B A  =  mu0 n I A


  STEP 3   Total flux linkage through all N turns  ( N = n l ):

               N phi  =  ( n l ) ( mu0 n I A )  =  mu0 n^2 A l I


  STEP 4   By definition  N phi = L I , so

  +----------------------------------------------------------------+
  |                                                                |
  |           L  =  mu0 n^2 A l                                    |
  |                                                                |
  |     or, in terms of the total number of turns N  ( n = N/l ) : |
  |                                                                |
  |                    mu0 N^2 A                                   |
  |           L  =   -------------                                 |
  |                        l                                       |
  |                                                                |
  |     If the solenoid has a core of relative permeability mu(r): |
  |                                                                |
  |           L  =  mu0 mu(r) n^2 A l                              |
  |                                                                |
  +----------------------------------------------------------------+
```

## What L depends on

```
  +--------------------------+-----------------------------------------+
  |  FACTOR                  |  EFFECT                                 |
  +--------------------------+-----------------------------------------+
  |  Number of turns N       |  L is proportional to N^2               |
  |                          |  (double the turns -> L becomes 4 times)|
  |  Area of cross-section A |  L is proportional to A                 |
  |  Length l                |  for fixed n, L grows with l;           |
  |                          |  for fixed N, L is proportional to 1/l  |
  |  Core material           |  an iron core (large mu(r)) increases   |
  |                          |  L enormously — by hundreds of times    |
  +--------------------------+-----------------------------------------+

  L DOES NOT DEPEND ON THE CURRENT.  It is a geometrical property of
  the coil, just like resistance or capacitance.
```

> **TRAP:** "If the current is doubled, what happens to L?" Answer: **nothing**.
> L depends only on geometry and the core. Only the flux and the energy change.

## WORKED EXAMPLE 5

*A solenoid of 500 turns is 0.5 m long and has a cross-sectional area of
10 cm^2. Find its self inductance. If the current in it changes from 2 A to
8 A in 0.1 s, find the back EMF.*

```
  GIVEN   N = 500 , l = 0.5 m , A = 10 cm^2 = 10 x 10^-4 = 1 x 10^-3 m^2

  STEP 1   n = N / l = 500 / 0.5 = 1000 turns per metre

  STEP 2   L = mu0 n^2 A l
             = ( 4 pi x 10^-7 ) x ( 1000 )^2 x ( 1 x 10^-3 ) x 0.5
             = ( 4 pi x 10^-7 ) x 10^6 x 10^-3 x 0.5
             = ( 4 pi x 10^-7 ) x 500
             = 6.28 x 10^-4 H
             = 0.628 mH

  STEP 3   dI/dt = ( 8 - 2 ) / 0.1 = 60 A/s

           e = - L dI/dt = - ( 6.28 x 10^-4 ) x 60
             = - 3.77 x 10^-2 V
             = - 37.7 mV

  ANSWER   L = 0.628 mH , back EMF = 37.7 mV opposing the rise in current.
```

---

# TOPIC 8 — Energy stored in an inductor

## Why energy is stored

While the current in a coil is growing, the back EMF fights it. The battery
must do extra work against this back EMF. That work is not wasted as heat —
it is stored in the magnetic field of the coil, and comes back out when the
current is switched off (which is why you see a spark at a switch).

## The derivation

```
  STEP 1   The back EMF at the instant the current is I is

               e  =  - L dI/dt

           So the source must supply a voltage  + L dI/dt  to push
           the current through.

  STEP 2   Work done in time dt in driving a current I :

               dW  =  ( power ) dt  =  ( e I ) dt
                    =  ( L dI/dt ) I dt
                    =  L I dI

  STEP 3   Total work as the current grows from 0 to I :

                              I
               W  =  L  INT   I dI     =  L [ I^2 / 2 ]  from 0 to I
                              0

  +----------------------------------------------------------------+
  |                                                                |
  |              U  =  W  =  (1/2) L I^2                           |
  |                                                                |
  |     This energy is stored in the MAGNETIC FIELD of the coil.   |
  |                                                                |
  +----------------------------------------------------------------+
```

Compare with the two things you already know:

```
    Capacitor    U = (1/2) C V^2      energy in the ELECTRIC field
    Inductor     U = (1/2) L I^2      energy in the MAGNETIC field
    Spring       E = (1/2) k x^2      energy in the stretched spring
```

## Magnetic energy DENSITY

```
  Take a solenoid:   L = mu0 n^2 A l   and   B = mu0 n I  ->  I = B / (mu0 n)

     U  =  (1/2) L I^2
        =  (1/2) ( mu0 n^2 A l ) ( B / (mu0 n) )^2
        =  (1/2) ( mu0 n^2 A l ) B^2 / ( mu0^2 n^2 )
        =  B^2 A l / ( 2 mu0 )

  The volume inside the solenoid is  A l , so energy per unit volume is

  +----------------------------------------------------------------+
  |                                     B^2                        |
  |     ENERGY DENSITY      u   =   -----------      J / m^3       |
  |                                   2 mu0                        |
  +----------------------------------------------------------------+

  (Compare the electric case:  u = (1/2) e0 E^2 )
```

## WORKED EXAMPLE 6

*(a) Find the energy stored in a 2 H inductor carrying 3 A.
(b) Find the energy density in a region where B = 0.1 T.*

```
  (a)  U = (1/2) L I^2 = 0.5 x 2 x 3^2 = 0.5 x 2 x 9 = 9 J

  (b)  u = B^2 / (2 mu0)
         = ( 0.1 )^2 / ( 2 x 4 pi x 10^-7 )
         = 0.01 / ( 2.513 x 10^-6 )
         = 3.98 x 10^3 J / m^3
```

> **TRAP:** if the current is doubled, the stored energy becomes **four** times,
> not twice. `U` goes with `I^2`.

---

# TOPIC 9 — Mutual induction

## The idea

Two coils sit near each other. Changing the current in coil 1 changes the flux
through coil 2, so an EMF appears in coil 2 — even though coil 2 is not
connected to anything. This is **mutual induction** (Faraday's Experiment 3).

```
       PRIMARY (coil 1)              SECONDARY (coil 2)
      +----------------+            +----------------+
      | ) ) ) ) ) ) )  |            | ) ) ) ) ) ) )  |
      +-------+--------+            +-------+--------+
              |                             |
       changing current I1            induced EMF  e2
              |                             |
         (source of AC)                (galvanometer)

          flux made by coil 1  --->  passes through coil 2
```

## The equations

```
  +----------------------------------------------------------------+
  |                                                                |
  |       N2 phi2  =  M I1              M = mutual inductance      |
  |                                                                |
  |                          d I1                                  |
  |            e2   =   - M  ------                                |
  |                            dt                                  |
  |                                                                |
  |  Unit: HENRY (H)     Dimensions: [ M L^2 T^-2 A^-2 ]           |
  |                                                                |
  +----------------------------------------------------------------+
```

**Definition:** the mutual inductance of two coils is the flux linkage produced
in the secondary per unit current in the primary. It is 1 henry if a rate of
change of 1 A/s in the primary induces 1 V in the secondary.

## MUTUAL INDUCTANCE OF TWO COAXIAL SOLENOIDS — full derivation

```
        <----------------------  l  --------------------->
       +-------------------------------------------------+
    ---( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (---   SOLENOID 1
       |   +-----------------------------------------+   |      N1 turns
       |---) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )-|---|      (outer)
       |   |         ---> B , area A                 |   |
       |---( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (-|---|   SOLENOID 2
       |   +-----------------------------------------+   |      N2 turns
    ---) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )---   (inner,
       +-------------------------------------------------+       area A)

     Both of length l , wound one over the other on the same axis.
     n1 = N1 / l ,  n2 = N2 / l
```

```
  CASE A — current I1 in the OUTER solenoid

  STEP 1   Field inside solenoid 1        B1  =  mu0 n1 I1

  STEP 2   The inner solenoid lies entirely inside this field, so the
           flux through ONE of its turns is

               phi2  =  B1 A  =  mu0 n1 I1 A

  STEP 3   Flux linkage of the whole inner coil ( N2 = n2 l turns ):

               N2 phi2  =  ( n2 l ) ( mu0 n1 I1 A )
                        =  mu0 n1 n2 A l  I1

  STEP 4   Since  N2 phi2 = M21 I1 ,

               M21  =  mu0 n1 n2 A l


  CASE B — current I2 in the INNER solenoid

           Doing the same steps the other way round gives

               M12  =  mu0 n1 n2 A l


  +----------------------------------------------------------------+
  |                                                                |
  |      M12  =  M21  =  M  =  mu0 n1 n2 A l                       |
  |                                                                |
  |                         mu0 N1 N2 A                            |
  |               or   M = --------------                          |
  |                              l                                 |
  |                                                                |
  |      With a core of relative permeability mu(r):               |
  |               M  =  mu0 mu(r) n1 n2 A l                        |
  |                                                                |
  +----------------------------------------------------------------+
```

## RECIPROCITY — M12 = M21

```
  The two coils affect each other EQUALLY, however different their
  shapes or sizes are. This is called the RECIPROCITY THEOREM and the
  common value is simply written M.

  In words: it does not matter which coil you call the primary.
```

## COEFFICIENT OF COUPLING

```
  If ALL the flux made by coil 1 passed through coil 2 (perfect coupling)
  then M would take its largest possible value  sqrt( L1 L2 ) .
  In practice some flux leaks away.

  +----------------------------------------------------------------+
  |                                                                |
  |          M  =  k  sqrt( L1 L2 )                                |
  |                                                                |
  |                       M                                        |
  |          k  =  ---------------          0  <=  k  <=  1        |
  |                 sqrt( L1 L2 )                                  |
  |                                                                |
  |     k = 1   perfect (tight) coupling  - coils wound one over   |
  |             the other on a common soft-iron core               |
  |     k = 0   no coupling - the coils are far apart, or their    |
  |             axes are at right angles                           |
  |                                                                |
  |     k has NO UNITS and NO DIMENSIONS.                          |
  +----------------------------------------------------------------+
```

## What M depends on

```
  1.  the number of turns in BOTH coils
  2.  the area of cross-section and the length (the geometry)
  3.  the distance between the coils
  4.  the RELATIVE ORIENTATION of their axes
        (coaxial -> maximum M ;  axes perpendicular -> M = 0)
  5.  the permeability of the core material

  M does NOT depend on the current.
```

## WORKED EXAMPLE 7

*Two coaxial solenoids of length 0.5 m are wound on the same tube of area
4 cm^2. The outer has 500 turns and the inner 200 turns. Find M, and the EMF
induced in the inner coil when the current in the outer changes from 0 to 5 A
in 0.1 s.*

```
  GIVEN   l = 0.5 m , A = 4 cm^2 = 4 x 10^-4 m^2 ,
          N1 = 500 , N2 = 200

  STEP 1        mu0 N1 N2 A       ( 4 pi x 10^-7 )( 500 )( 200 )( 4 x 10^-4 )
          M  = -------------  =  --------------------------------------------
                     l                              0.5

             = ( 4 pi x 10^-7 ) x ( 100000 x 4 x 10^-4 ) / 0.5
             = ( 4 pi x 10^-7 ) x ( 40 / 0.5 )
             = ( 4 pi x 10^-7 ) x 80
             = 1.005 x 10^-4 H       (about 0.1 mH)

  STEP 2   dI1/dt = ( 5 - 0 ) / 0.1 = 50 A/s

           e2 = - M dI1/dt = - ( 1.005 x 10^-4 ) x 50
              = - 5.03 x 10^-3 V
              = - 5.03 mV

  ANSWER   M = 1.005 x 10^-4 H , induced EMF = 5.03 mV
```

---

# TOPIC 10 — Inductors in series and in parallel

```
  IN SERIES  (far apart, no mutual coupling)

       ---[ L1 ]---[ L2 ]---[ L3 ]---

       +--------------------------------+
       |    L  =  L1 + L2 + L3          |
       +--------------------------------+
       (same rule as resistors in series)


  IN SERIES  WITH mutual inductance M between them

       fields AIDING  (windings in the same sense)
            L  =  L1 + L2 + 2M
       fields OPPOSING (windings in opposite sense)
            L  =  L1 + L2 - 2M


  IN PARALLEL  (no mutual coupling)

         +---[ L1 ]---+
       --+            +--
         +---[ L2 ]---+

       +--------------------------------+
       |    1        1        1         |
       |   ---  =   ---  +   ---        |
       |    L        L1       L2        |
       +--------------------------------+

       For two inductors:      L  =  L1 L2 / ( L1 + L2 )
       (same rule as resistors in parallel)
```

## WORKED EXAMPLE 8

*Two inductors of 6 H and 3 H are connected (a) in series, (b) in parallel.
Find the equivalent inductance. Assume no mutual coupling.*

```
  (a)  L = 6 + 3 = 9 H

  (b)  L = ( 6 x 3 ) / ( 6 + 3 ) = 18 / 9 = 2 H
```

---

# TOPIC 11 — The AC generator (dynamo)

This is the 8-mark long answer. Learn it in five labelled parts:
PRINCIPLE, CONSTRUCTION, DIAGRAM, WORKING, THEORY (derivation) + GRAPH.

## PRINCIPLE

```
  When a coil is ROTATED in a uniform magnetic field, the angle between
  the field and the normal to the coil changes continuously. So the
  flux  phi = B A cos(theta)  changes continuously, and by Faraday's
  law an EMF is induced.

  It converts MECHANICAL energy into ELECTRICAL energy.
  It works on ELECTROMAGNETIC INDUCTION.
```

## CONSTRUCTION — the four parts

```
  1. ARMATURE      a rectangular coil ABCD of N turns of insulated
                   copper wire wound on a soft-iron core (the core
                   increases the flux).

  2. FIELD MAGNET  a strong permanent magnet (or an electromagnet)
                   with concave pole pieces N and S, which make the
                   field RADIAL so that the coil plane is always
                   parallel to the field for maximum EMF in large
                   machines.

  3. SLIP RINGS    two hollow metallic rings R1 and R2 fixed to the
                   two ends of the coil. They rotate WITH the coil.
                   (They are the difference between an AC generator
                   and a DC generator, which uses a split-ring
                   commutator instead.)

  4. BRUSHES       two carbon brushes B1 and B2 press lightly against
                   the slip rings and carry the current out to the
                   external circuit R(L).
```

## LABELLED ASCII DIAGRAM

```
                        axis of rotation
                              |
                              v
     +---------+                                    +---------+
     |         |     A  +--------------+  B         |         |
     |         |        |              |            |         |
     |    N    |        |     COIL     |            |    S    |
     |         |        |   (N turns)  |            |         |
     |  ------>|------->|  ----> B --->|----------->|         |
     |         |        |              |            |         |
     |         |     D  +--------------+  C         |         |
     +---------+              |  |                  +---------+
      field magnet            |  |                   field magnet
                              |  |
                          ____|  |____
                         /            \
                        |  R1     R2   |   <-- SLIP RINGS
                         \____    ____/        (rotate with the coil)
                             |    |
                          ---+    +---
                         |            |
                     B1  #            #   B2   <-- CARBON BRUSHES
                         |            |             (fixed)
                         +----+  +----+
                              |  |
                          +---+--+---+
                          |   R(L)   |   external load
                          +----------+

     The coil ABCD is rotated between N and S by a turbine
     (steam, water or wind).
```

## WORKING

```
  As the coil spins, the sides AB and CD move across the field lines.

  FIRST HALF TURN
     AB moves UP and CD moves DOWN.
     By Fleming's RIGHT-HAND rule, the current flows A -> B -> C -> D,
     i.e. out through brush B1.

  SECOND HALF TURN
     AB now moves DOWN and CD moves UP — the motion of each side has
     REVERSED with respect to the field.
     So the current reverses: D -> C -> B -> A, out through brush B2.

  Therefore the current in the external circuit changes direction
  every half revolution. That is ALTERNATING CURRENT.
```

> **TRAP:** the AC generator uses **SLIP RINGS**. If you write "commutator",
> you have described a DC generator and you lose marks. Remember:
> **S**lip rings = **S**ine wave = A**C**. Split ring commutator = DC.

## THEORY — the derivation (this is where the marks are)

```
  Let
      N     = number of turns in the coil
      A     = area of the coil
      B     = magnetic flux density
      omega = angular velocity of rotation (rad/s)
      t     = time measured from the instant when the coil plane is
              PERPENDICULAR to the field (theta = 0)


  STEP 1   The angle turned in time t is

               theta  =  omega t


  STEP 2   Flux through ONE turn at that instant:

               phi  =  B A cos( omega t )


  STEP 3   Flux LINKAGE through N turns:

               N phi  =  N B A cos( omega t )


  STEP 4   Faraday's law:

                       d ( N phi )            d
               e  =  - -------------  =  - N B A --- [ cos( omega t ) ]
                            dt                   dt

                    =  - N B A [ - omega sin( omega t ) ]


  +----------------------------------------------------------------+
  |                                                                |
  |     e  =  N B A omega  sin( omega t )                          |
  |                                                                |
  |     The EMF is SINUSOIDAL — it is alternating.                 |
  |                                                                |
  +----------------------------------------------------------------+


  STEP 5   PEAK (maximum) EMF

           sin(omega t) is maximum ( = 1 ) when omega t = 90 degrees,
           i.e. when the plane of the coil is PARALLEL to the field.

  +----------------------------------------------------------------+
  |     e(0)  =  N B A omega   =   N B A ( 2 pi f )                |
  |                                                                |
  |     so           e  =  e(0) sin( omega t )                     |
  |                                                                |
  |     and the current       I  =  ( e(0) / R ) sin( omega t )    |
  +----------------------------------------------------------------+
```

## Key positions of the coil

```
  +----------------------+---------------+----------+---------------+
  |  POSITION OF COIL    |  theta        |   FLUX   |     EMF       |
  +----------------------+---------------+----------+---------------+
  |  plane PERPENDICULAR |  0 degrees    | MAXIMUM  |   ZERO        |
  |  to B                |               |  = B A   |               |
  +----------------------+---------------+----------+---------------+
  |  plane PARALLEL      |  90 degrees   |  ZERO    |  MAXIMUM      |
  |  to B                |               |          |  = N B A omega|
  +----------------------+---------------+----------+---------------+

  FLUX MAXIMUM  ->  EMF ZERO       (nothing is changing at that instant)
  FLUX ZERO     ->  EMF MAXIMUM    (flux is changing fastest there)

  The EMF and the flux are 90 degrees OUT OF PHASE.
```

## GRAPH OF EMF AGAINST TIME

```
      e
      ^
  e0  |        ****                        ****
      |      **    **                    **    **
      |    **        **                **        **
      |   *            *              *            *
    0 +--*--------------*------------*--------------*-------> t
      |  0     T/4      *   T/2     *    3T/4       *   T
      |                  *          *                *
      |                   **      **                  **
      | (one full cycle)    **  **                      **
 -e0  |                       ****                        ***
      |

      e  =  e0 sin( omega t )           T  =  2 pi / omega  =  1 / f

      In India the mains frequency is f = 50 Hz, so
          T = 1/50 = 0.02 s
          the current reverses direction 100 times each second.
```

## WORKED EXAMPLE 9

*A coil of 100 turns and area 0.1 m^2 rotates at 50 revolutions per second in
a field of 0.5 T. Find the peak EMF.*

```
  GIVEN   N = 100 , A = 0.1 m^2 , B = 0.5 T , f = 50 Hz

  STEP 1   omega = 2 pi f = 2 x 3.14 x 50 = 314 rad/s

  STEP 2   e0 = N B A omega
              = 100 x 0.5 x 0.1 x 314
              = 5 x 314
              = 1570 V

  ANSWER   peak EMF = 1570 V  (about 1.57 kV)
           and the instantaneous EMF is  e = 1570 sin( 314 t )  volts
```

---

# ALL FOUR CORE DIAGRAMS ON ONE PAGE (redraw these from memory)

```
  1. FLUX THROUGH A COIL          2. ROD MOVING IN A FIELD

        n     B                        x   x   x   x   x
        ^    /                       +-----------+
        |   /                        |           |  ^
        |  / theta                 R |           |  | l   --> v
        |_/                          |           |  v
     ___/_______                     +-----------+
    /   COIL   /                       x   x   x   x   x
   /__________/
     phi = B A cos theta                 e = B l v


  3. SOLENOID                     4. AC GENERATOR

    <------- l ------->                +---+  coil  +---+
   ---( ( ( ( ( ( ( ( (---            | N |  [==]   | S |
      |  --> B , area A |             +---+   ||    +---+
   ---) ) ) ) ) ) ) ) )---                  slip rings
      N turns , n = N/l                     + brushes
    L = mu0 n^2 A l               e = N B A omega sin(omega t)
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write  phi = B A cos(theta)  with theta measured from the
       NORMAL, not from the plane of the coil?

  [ ]  Did I convert cm^2 to m^2 ?   ( 1 cm^2 = 10^-4 m^2 )

  [ ]  Did I include N (the number of turns) in Faraday's law?

  [ ]  Did I write the MINUS sign and then explain it as Lenz's law?

  [ ]  In a Lenz's law question, did I say WHICH POLE the coil face
       becomes and whether it attracts or repels?

  [ ]  In the "Lenz's law and conservation of energy" answer, did I
       write the full contradiction argument (free energy is
       impossible), not just one sentence?

  [ ]  In the motional EMF derivation, did I show the flux method OR
       the Lorentz-force method fully, with a labelled diagram?

  [ ]  Did I check that mechanical power = heat dissipated?

  [ ]  For eddy currents, did I give the definition, the harm, the
       LAMINATION fix AND at least four uses?

  [ ]  In the solenoid derivation, did I start from B = mu0 n I and
       clearly use  n = N / l ?

  [ ]  Did I write the UNIT (henry) and note that L does not depend
       on the current?

  [ ]  For mutual inductance, did I state M12 = M21 (reciprocity)?

  [ ]  For the AC generator, did I say SLIP RINGS and not commutator?

  [ ]  Did I draw the AC generator diagram AND label N, S, coil,
       slip rings, brushes, load?

  [ ]  Did I differentiate cos(omega t) correctly and get
       e = N B A omega sin(omega t) with the omega in front?

  [ ]  Did I draw the sine graph of e against t and mark e0 and T?

  [ ]  Did I write the UNIT of every final numerical answer?
```
