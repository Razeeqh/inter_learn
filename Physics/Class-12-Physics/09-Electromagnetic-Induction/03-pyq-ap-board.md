# Electromagnetic Induction — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 2nd Year, 60 marks · **Chapter 9 — Electromagnetic Induction**

> **About the year tags:** BIEAP recycles the same questions again and again across
> sessions, so the questions below are grouped as **"repeatedly asked"** rather than
> tagged to one exact year. Do not quote a year in your answer. Cross-check the
> official question papers at **bie.ap.gov.in** before your exam.

**Where this chapter sits in the paper:**

```
  +---------------------------------------------------------------+
  |  Section A   VSAQ   10 x 2 marks   answer ALL      =  20       |
  |              -> usually 1 or 2 questions from this chapter     |
  |                                                                |
  |  Section B   SAQ     8 x 4 marks   answer any 6    =  24       |
  |              -> almost always 1 question from this chapter     |
  |                                                                |
  |  Section C   LAQ     3 x 8 marks   answer any 2    =  16       |
  |              -> the AC GENERATOR appears here from time to     |
  |                 time (often shared with the AC chapter)        |
  +---------------------------------------------------------------+

  PASS MARK = 21 out of 60.
  This chapter alone can give you 8 to 12 marks. Do not skip it.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Magnetic flux

### Q A1
Define magnetic flux. Give its SI unit.

**ANSWER:**
```
  Magnetic flux through a surface is the total number of magnetic
  field lines passing normally through that surface.

        phi  =  B A cos( theta )   =   B . A

  where theta is the angle between B and the NORMAL to the surface.

  SI UNIT :  weber (Wb)          1 Wb = 1 T m^2 = 1 V s

  Magnetic flux is a SCALAR quantity.
```

---

### Q A2
Define one weber.

**ANSWER:**
```
  One weber is the magnetic flux through a surface of area 1 square
  metre held perpendicular to a uniform magnetic field of 1 tesla.

  Equivalently: the flux which, when reduced to zero uniformly in
  1 second, induces an EMF of 1 volt in a single-turn coil.
```

---

### Q A3
Write the dimensional formula of magnetic flux.

**ANSWER:**
```
  phi = B A ,   [B] = [ M T^-2 A^-1 ] ,   [A] = [ L^2 ]

        [ phi ]  =  [ M L^2 T^-2 A^-1 ]

  CHECK :  phi = e x t  =  [ M L^2 T^-3 A^-1 ][ T ] = [ M L^2 T^-2 A^-1 ]
```

---

### Q A4
A coil of area 0.05 m^2 is held in a field of 0.4 T so that the field makes
60 degrees with the **plane** of the coil. Find the flux.

**ANSWER:**
```
  Angle with the PLANE = 60   ->   angle with the NORMAL = 90 - 60 = 30

     phi = B A cos 30
         = 0.4 x 0.05 x 0.866
         = 0.0173 Wb   =  1.73 x 10^-2 Wb
```

---

## Topic: Faraday and Lenz

### Q A5
State Faraday's laws of electromagnetic induction.

**ANSWER:**
```
  FIRST LAW
     Whenever the magnetic flux linked with a closed circuit changes,
     an EMF is induced in it. It lasts only while the flux is changing.

  SECOND LAW
     The magnitude of the induced EMF is directly proportional to the
     RATE OF CHANGE of the magnetic flux linked with the circuit.

                          d ( phi )
              e  =  -  N  -----------
                              dt
```

---

### Q A6
State Lenz's law.

**ANSWER:**
```
  The direction of the induced current is always such that it OPPOSES
  the CAUSE that produces it — that is, it opposes the change of
  magnetic flux which produced it.
```

---

### Q A7
What is the significance of the negative sign in `e = - N d(phi)/dt` ?

**ANSWER:**
```
  The negative sign is LENZ'S LAW written into the equation. It shows
  that the induced EMF (and the current it drives) acts in the
  direction that OPPOSES the change of flux causing it.

  It is a statement of the CONSERVATION OF ENERGY.
```

---

### Q A8
The north pole of a magnet is moved towards a closed coil. What is the
direction of the induced current and the nature of the force?

**ANSWER:**
```
  The flux towards the coil INCREASES, so by Lenz's law the induced
  current opposes it: the face of the coil nearest the magnet becomes
  a NORTH pole and REPELS the approaching magnet.

  Seen from the magnet, the induced current flows ANTICLOCKWISE.
  Work must be done to push the magnet in; that work appears as
  electrical energy (heat) in the coil.
```

---

### Q A9
The magnetic flux through a coil is `phi = 5 t^2 + 3 t + 16` weber. Find the
EMF induced at t = 2 s.

**ANSWER:**
```
     d(phi)/dt  =  10 t + 3

  At t = 2 :   d(phi)/dt  =  10(2) + 3  =  23 Wb/s

     e  =  - d(phi)/dt  =  - 23 V

  Magnitude of induced EMF = 23 V.
```

---

### Q A10
On what does the CHARGE induced in a circuit depend? Does it depend on time?

**ANSWER:**
```
                 N ( phi2 - phi1 )
        q  =  ---------------------
                        R

  It depends only on the TOTAL CHANGE OF FLUX, the number of turns and
  the resistance.

  It does NOT depend on the time taken. Moving the magnet quickly or
  slowly makes the same charge flow (a fast move gives a bigger current
  for a shorter time).
```

---

## Topic: Motional EMF

### Q A11
A conductor of length 1 m moves with a velocity of 2 m/s perpendicular to a
magnetic field of 0.5 T. Find the induced EMF.

**ANSWER:**
```
     e  =  B l v  =  0.5 x 1 x 2  =  1 V
```

---

### Q A12
Write the expression for the EMF induced in a rod rotating about one end in a
magnetic field.

**ANSWER:**
```
     e  =  (1/2) B omega l^2       =  (1/2) B l^2 ( 2 pi f )

  where l is the length of the rod, omega its angular velocity and B
  the field perpendicular to the plane of rotation.
```

---

## Topic: Eddy currents

### Q A13
What are eddy currents? By what other name are they known?

**ANSWER:**
```
  When a solid conductor is placed in a CHANGING magnetic field,
  induced currents are set up which circulate in closed loops within
  the body of the conductor. These are called EDDY CURRENTS.

  They are also called FOUCAULT CURRENTS.
  Their direction is given by Lenz's law.
```

---

### Q A14
Why is the core of a transformer laminated?

**ANSWER:**
```
  To reduce the ENERGY LOSS due to EDDY CURRENTS.

  Thin insulated sheets increase the resistance of the paths available
  to the eddy currents, so the currents (and hence the I^2 R heating)
  become very small.
```

---

### Q A15
Give any two useful applications of eddy currents.

**ANSWER:**
```
  1. ELECTROMAGNETIC BRAKING in electric trains.
  2. INDUCTION FURNACE for melting metals and making alloys.
  (also: electric power meters, dead-beat galvanometers,
   induction cookers, metal detectors)
```

---

## Topic: Self and mutual inductance

### Q A16
Define self inductance. Give its SI unit.

**ANSWER:**
```
  The self inductance of a coil is the magnetic flux linkage produced
  in it per unit current flowing through it.

        L  =  N phi / I        and       e  =  - L dI/dt

  SI UNIT :  henry (H)  =  weber / ampere  =  volt second / ampere
```

---

### Q A17
Define one henry.

**ANSWER:**
```
  A coil has a self inductance of ONE HENRY if an EMF of one volt is
  induced in it when the current through it changes at the rate of
  one ampere per second.
```

---

### Q A18
On what factors does the self inductance of a coil depend?

**ANSWER:**
```
  1. the number of turns N     ( L is proportional to N^2 )
  2. the area of cross-section A
  3. the length of the coil l
  4. the PERMEABILITY of the core material

  It does NOT depend on the current flowing through the coil.
```

---

### Q A19
The number of turns of a solenoid is doubled, everything else remaining the
same. What happens to its self inductance?

**ANSWER:**
```
     L  =  mu0 N^2 A / l          ->      L  is proportional to  N^2

  Doubling N makes L FOUR TIMES its original value.
```

---

### Q A20
Define mutual inductance and give its unit.

**ANSWER:**
```
  The mutual inductance of a pair of coils is the flux linkage
  produced in the secondary coil per unit current in the primary coil.

        N2 phi2  =  M I1        and        e2  =  - M dI1/dt

  SI UNIT :  henry (H)
```

---

### Q A21
The current in the primary of a pair of coils changes from 0 to 20 A in 0.5 s
and induces an EMF of 25 V in the secondary. Find the mutual inductance.

**ANSWER:**
```
     dI1/dt  =  ( 20 - 0 ) / 0.5  =  40 A/s

     |e2| = M ( dI1/dt )   ->    M  =  25 / 40  =  0.625 H
```

---

### Q A22
What is the coefficient of coupling? What are its limits?

**ANSWER:**
```
                 M
     k  =  ---------------
            sqrt( L1 L2 )

  It measures what fraction of the flux of one coil links the other.

     0  <=  k  <=  1        k = 1  perfect (tight) coupling
                            k = 0  no coupling (axes perpendicular
                                   or coils far apart)

  k is dimensionless and has no unit.
```

---

## Topic: Energy and the AC generator

### Q A23
An inductor of 2 H carries a current of 5 A. Find the energy stored in it.

**ANSWER:**
```
     U  =  (1/2) L I^2  =  0.5 x 2 x ( 5 )^2  =  25 J
```

---

### Q A24
On what principle does an AC generator work?

**ANSWER:**
```
  ELECTROMAGNETIC INDUCTION.

  When a coil is rotated in a uniform magnetic field, the flux linked
  with it changes continuously, so an alternating EMF is induced in it.
  It converts MECHANICAL energy into ELECTRICAL energy.
```

---

### Q A25
What is the function of slip rings in an AC generator? How does a DC
generator differ?

**ANSWER:**
```
  The SLIP RINGS rotate with the coil and, through the carbon brushes,
  keep the two ends of the coil permanently connected to the same two
  terminals of the external circuit. This allows the current in the
  external circuit to REVERSE every half rotation — i.e. AC.

  A DC generator uses a SPLIT-RING COMMUTATOR instead, which reverses
  the connections every half turn so that the external current always
  flows the same way.
```

---

### Q A26
Write the expression for the instantaneous EMF of an AC generator and state
when it is maximum.

**ANSWER:**
```
     e  =  N B A omega  sin( omega t )   =   e0 sin( omega t )

     e0 = N B A omega   is the PEAK EMF.

  The EMF is MAXIMUM when the plane of the coil is PARALLEL to the
  magnetic field (flux is then zero, and it is changing fastest).
  The EMF is ZERO when the plane is PERPENDICULAR to the field.
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1  *(most asked in this chapter)*
State Lenz's law. Show that it is a consequence of the law of conservation of
energy.

**ANSWER:**
```
  STATEMENT
     The induced current always flows in such a direction that it
     OPPOSES the cause producing it.

  THE EXPERIMENT
     Push the NORTH pole of a bar magnet towards a closed coil.

      +-------+                  +---------------------+
      |  S  N |  --> v           |   ) ) ) ) ) ) ) )   |
      +-------+                  +----------+----------+
                                            |
              near face becomes N , REPELS  G

     The flux towards the coil INCREASES, so the near face becomes a
     NORTH pole and REPELS the magnet.

  PROOF BY CONTRADICTION
     Suppose the opposite happened, i.e. the near face became a SOUTH
     pole and ATTRACTED the magnet. Then:

        - the magnet would be pulled in with no work done by anybody
        - it would accelerate on its own and gain KINETIC energy
        - at the same time the induced current would produce HEAT
          ( I^2 R ) in the coil

     So kinetic energy AND heat energy would both be created out of
     nothing. This VIOLATES THE LAW OF CONSERVATION OF ENERGY, which
     is impossible.

  CONCLUSION
     Therefore the coil must OPPOSE the motion, exactly as Lenz's law
     states. The work you do in pushing the magnet against this
     opposition is exactly the electrical energy that appears in the
     coil:

              WORK DONE BY YOU  =  HEAT PRODUCED  =  I^2 R t

     Lenz's law is simply the conservation of energy applied to
     induced currents.
```

---

### Q B2
State Faraday's laws of electromagnetic induction and obtain the expression
for the induced EMF.

**ANSWER:**
```
  FIRST LAW   whenever the flux linked with a closed circuit changes,
              an EMF is induced; it lasts only while the change lasts.

  SECOND LAW  the magnitude of the induced EMF is proportional to the
              rate of change of flux linkage.

  DERIVATION
     Let the flux through one turn change from phi1 to phi2 in time t,
     for a coil of N turns.

        change in flux linkage  =  N ( phi2 - phi1 )

                                     N ( phi2 - phi1 )
        rate of change          =  ---------------------
                                            t

        By the second law,

                            N ( phi2 - phi1 )                d(phi)
             e   =    -    ---------------------   =   - N  --------
                                    t                          dt

     The negative sign is Lenz's law: the EMF opposes the change.

     If the circuit has resistance R,

             I = e / R      and      q = N ( phi2 - phi1 ) / R
```

---

### Q B3
Derive the expression for the EMF induced in a conductor moving in a uniform
magnetic field (motional EMF) using Faraday's law.

**ANSWER:**
```
      x   x   x   x   x   x   x   x   x   x   x
        (B into the page)        P
      x---x---x---x---x---x---x--o---x---x---x
      |                          |
      |                          |  ^            ---> v
   R  |        area = l x        |  | l
      |                          |  v
      x---x---x---x---x---x---x--o---x---x---x
      x   x   x   x   x   x   x  Q  x   x   x
                                 |<---- x ---->|

  A rod PQ of length l slides with velocity v on two rails in a field
  B directed into the page.

  STEP 1   Area of the circuit at any instant     A  =  l x

  STEP 2   Flux (B perpendicular to the area)     phi  =  B l x

  STEP 3   Differentiate with respect to time

               d(phi)             dx
              --------  =  B l  ------   =   B l v
                 dt               dt

  STEP 4   By Faraday's law

               e  =  - d(phi)/dt   =   - B l v

  +----------------------------------------------+
  |          |e|  =  B l v                       |
  +----------------------------------------------+

  If B, l and v are not mutually perpendicular,  e = B l v sin(theta).
```

---

### Q B4
Derive `e = B l v` from the Lorentz force acting on the free electrons in the
rod.

**ANSWER:**
```
  STEP 1   Every free electron inside the rod moves with the rod at
           velocity v in the field B, so it experiences a magnetic
           (Lorentz) force

                F  =  q v B          ( v perpendicular to B )

  STEP 2   This force drives the free electrons towards one end Q,
           which becomes negative; the other end P becomes positive.

                 P  + + + +
                 |
                 |   electrons pushed down
                 |
                 Q  - - - -

  STEP 3   The separated charges create an electric field E inside the
           rod, opposing further separation.

  STEP 4   Equilibrium is reached when the electric force balances the
           magnetic force:

                q E  =  q v B      ->      E  =  v B

  STEP 5   The potential difference between the ends of the rod is

                e  =  E l  =  B l v

  This is the motional EMF. The rod acts as a source of EMF B l v with
  P as its positive terminal. The same result as the flux method.
```

---

### Q B5
What are eddy currents? Explain how they are minimised, and give their
applications.

**ANSWER:**
```
  DEFINITION
     When a solid conductor is placed in a changing magnetic field,
     induced currents circulate in closed loops within the body of the
     conductor. These are EDDY (Foucault) CURRENTS. Their direction is
     given by Lenz's law.

  WHY THEY ARE HARMFUL
     In transformer and motor cores they dissipate energy as heat
     ( I^2 R ), lowering the efficiency and overheating the machine,
     which can damage the insulation of the windings.

  HOW THEY ARE MINIMISED
     +---------------------+       +-+-+-+-+-+-+-+-+
     |    SOLID CORE       |       | | | | | | | | |   LAMINATED CORE
     |   big eddy loops    |       | | | | | | | | |   thin insulated
     +---------------------+       +-+-+-+-+-+-+-+-+   sheets

     The core is built from THIN SHEETS (laminations) placed parallel
     to the magnetic field and insulated from one another by varnish.
     Each thin sheet offers a much larger resistance to the eddy
     loops, so the currents and the heat loss fall sharply.
     Silicon steel is used, as it has a high resistivity.

  USEFUL APPLICATIONS
     1. ELECTROMAGNETIC BRAKING in electric trains — eddy currents in
        the moving metal oppose the motion and stop the train smoothly
        without friction pads.
     2. INDUCTION FURNACE — high-frequency AC induces large eddy
        currents in a metal, whose I^2 R heat melts it.
     3. ELECTRIC POWER (energy) METERS — the aluminium disc rotates
        because of eddy currents induced in it.
     4. MAGNETIC DAMPING — the coil of a galvanometer is wound on a
        metallic frame; eddy currents in the frame stop the needle
        oscillating, making it DEAD-BEAT.
```

---

### Q B6
Obtain an expression for the self inductance of a long solenoid.

**ANSWER:**
```
        <----------------  l  ---------------->
      ---( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (---
         |    ------>  B  ------>            |     area A
      ---) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )---
              N turns ,  n = N / l ,  current I

  STEP 1   Magnetic field inside a long solenoid

               B  =  mu0 n I           ( n = N / l )

  STEP 2   Flux through ONE turn ( B along the axis, theta = 0 )

               phi  =  B A  =  mu0 n I A

  STEP 3   Total flux linkage through all N = n l turns

               N phi  =  ( n l )( mu0 n I A )  =  mu0 n^2 A l I

  STEP 4   By definition   N phi = L I , therefore

  +----------------------------------------------------------+
  |                                     mu0 N^2 A            |
  |     L  =  mu0 n^2 A l      =      -------------          |
  |                                          l               |
  |                                                          |
  |     with a core of relative permeability mu(r) :         |
  |     L  =  mu0 mu(r) n^2 A l                              |
  +----------------------------------------------------------+

  L depends only on the GEOMETRY of the coil and the core material,
  NOT on the current.
```

---

### Q B7
Obtain an expression for the mutual inductance of two long coaxial solenoids.
Show that M12 = M21.

**ANSWER:**
```
        <-----------------  l  ------------------>
      ---( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (---  solenoid 1 (N1)
         |---) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )---|     solenoid 2 (N2)
         |          ---> B , area A              |     inner, area A
      ---) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )---

     Both solenoids have the same length l and the same axis.
     n1 = N1/l ,  n2 = N2/l .

  CASE A — current I1 in solenoid 1

     Field inside solenoid 1        B1  =  mu0 n1 I1
     Flux through one turn of 2     phi2 =  B1 A  =  mu0 n1 I1 A
     Flux linkage of solenoid 2     N2 phi2 = ( n2 l )( mu0 n1 I1 A )
                                            =  mu0 n1 n2 A l I1

     Since  N2 phi2 = M21 I1 ,        M21  =  mu0 n1 n2 A l

  CASE B — current I2 in solenoid 2

     Repeating the same steps with the roles reversed gives

                                      M12  =  mu0 n1 n2 A l

  +----------------------------------------------------------+
  |                                          mu0 N1 N2 A     |
  |   M12  =  M21  =  M  =  mu0 n1 n2 A l = -------------    |
  |                                                l         |
  +----------------------------------------------------------+

  This equality is the RECIPROCITY THEOREM: two coils influence each
  other equally, whichever one is treated as the primary.
```

---

### Q B8
Derive the expression for the energy stored in an inductor. Hence write the
magnetic energy density.

**ANSWER:**
```
  While the current is growing, the back EMF  e = - L dI/dt  opposes
  it, so the source must do work against it.

  STEP 1   Work done in time dt when the current is I :

               dW  =  ( e I ) dt  =  ( L dI/dt ) I dt  =  L I dI

  STEP 2   Total work as the current grows from 0 to I :

                             I
               W  =  L INT  I dI   =   L [ I^2 / 2 ]  from 0 to I
                             0

  +----------------------------------------------+
  |          U  =  (1/2) L I^2                   |
  +----------------------------------------------+

  This energy is stored in the MAGNETIC FIELD of the coil.

  ENERGY DENSITY
     For a solenoid,  L = mu0 n^2 A l  and  B = mu0 n I , so I = B/(mu0 n):

               U  =  (1/2)( mu0 n^2 A l ) ( B / mu0 n )^2
                  =  B^2 A l / ( 2 mu0 )

     Volume of the solenoid = A l , so energy per unit volume is

  +----------------------------------------------+
  |                     B^2                      |
  |          u   =   ----------                  |
  |                    2 mu0                     |
  +----------------------------------------------+
```

---

### Q B9
A rod of length 0.2 m slides at 10 m/s on frictionless rails perpendicular to
a field of 0.5 T. The circuit resistance is 2 ohm. Find (i) the EMF,
(ii) the current, (iii) the force needed to keep the rod moving uniformly,
(iv) the power supplied and (v) the heat produced per second.

**ANSWER:**
```
  GIVEN   B = 0.5 T , l = 0.2 m , v = 10 m/s , R = 2 ohm

  (i)    e  =  B l v  =  0.5 x 0.2 x 10  =  1 V

  (ii)   I  =  e / R  =  1 / 2  =  0.5 A

  (iii)  F  =  B I l  =  0.5 x 0.5 x 0.2  =  0.05 N
         (formula check: B^2 l^2 v / R = 0.25 x 0.04 x 10 / 2 = 0.05 N)

  (iv)   P  =  F v  =  0.05 x 10  =  0.5 W

  (v)    Heat per second  =  I^2 R  =  ( 0.5 )^2 x 2  =  0.5 W

  NOTE   (iv) = (v). All the mechanical work done goes into heat —
         energy is conserved.
```

---

### Q B10
A coil of 50 turns and area 100 cm^2 is held perpendicular to a field of
0.2 T. It is rotated through 180 degrees in 0.1 s. If its resistance is
10 ohm, find the average induced EMF and the charge that flows.

**ANSWER:**
```
  GIVEN   N = 50 , A = 100 cm^2 = 1 x 10^-2 m^2 , B = 0.2 T ,
          t = 0.1 s , R = 10 ohm

  STEP 1   Initial flux linkage  ( theta = 0 )
               N phi1  =  50 x 0.2 x 1 x 10^-2  =  0.1 Wb-turn

  STEP 2   After turning through 180 degrees the normal is reversed,
           so
               N phi2  =  - 0.1 Wb-turn

  STEP 3   Change in flux linkage
               N ( phi1 - phi2 )  =  0.1 - ( - 0.1 )  =  0.2 Wb-turn

  STEP 4   Average EMF
               e  =  0.2 / 0.1  =  2 V

  STEP 5   Charge
               q  =  0.2 / 10  =  0.02 C

           CHECK :  I = e/R = 2/10 = 0.2 A ,  q = I t = 0.2 x 0.1
                    = 0.02 C     agrees.
```

---

### Q B11
A solenoid of 500 turns, length 0.5 m and area of cross-section 10 cm^2 is
wound on an air core. Find its self inductance, and the back EMF when the
current changes from 2 A to 8 A in 0.1 s.

**ANSWER:**
```
  GIVEN   N = 500 , l = 0.5 m , A = 10 cm^2 = 1 x 10^-3 m^2

  STEP 1   n  =  N / l  =  500 / 0.5  =  1000 turns per metre

  STEP 2   L  =  mu0 n^2 A l
              =  ( 4 pi x 10^-7 ) x ( 1000 )^2 x ( 1 x 10^-3 ) x 0.5
              =  ( 4 pi x 10^-7 ) x 500
              =  6.28 x 10^-4 H     =  0.628 mH

  STEP 3   dI/dt  =  ( 8 - 2 ) / 0.1  =  60 A/s

           |e|  =  L ( dI/dt )  =  6.28 x 10^-4 x 60
                =  3.77 x 10^-2 V   =  37.7 mV

  The minus sign (omitted above) shows the EMF opposes the rise in
  current.
```

---

### Q B12
Two coaxial solenoids of length 0.5 m are wound on the same tube of
cross-sectional area 4 cm^2. The outer has 500 turns and the inner 200 turns.
Find their mutual inductance, and the EMF induced in the inner coil when the
current in the outer rises from 0 to 5 A in 0.1 s.

**ANSWER:**
```
  GIVEN   l = 0.5 m , A = 4 cm^2 = 4 x 10^-4 m^2 , N1 = 500 , N2 = 200

  STEP 1        mu0 N1 N2 A
          M  = -------------
                     l

             = ( 4 pi x 10^-7 ) x 500 x 200 x 4 x 10^-4 / 0.5
             = ( 4 pi x 10^-7 ) x ( 40 / 0.5 )
             = ( 4 pi x 10^-7 ) x 80
             = 1.005 x 10^-4 H        ( about 0.1 mH )

  STEP 2   dI1/dt  =  5 / 0.1  =  50 A/s

           |e2|  =  M ( dI1/dt )  =  1.005 x 10^-4 x 50
                 =  5.03 x 10^-3 V   =  5.03 mV
```

---

### Q B13
A coil of 200 turns and area 0.05 m^2 rotates at 120 revolutions per minute
in a uniform field of 0.4 T. Find the peak EMF and write the expression for
the instantaneous EMF.

**ANSWER:**
```
  GIVEN   N = 200 , A = 0.05 m^2 , B = 0.4 T , 120 rpm

  STEP 1   omega  =  2 pi ( rpm ) / 60  =  2 pi x 120 / 60
                  =  4 pi  =  12.57 rad/s

  STEP 2   e0  =  N B A omega
               =  200 x 0.4 x 0.05 x 12.57
               =  4 x 12.57
               =  50.3 V

  STEP 3   e  =  e0 sin( omega t )  =  50.3 sin( 12.57 t )  volts
```

---

### Q B14
Describe the experiments of Faraday and Henry and state the conclusion drawn
from them.

**ANSWER:**
```
  EXPERIMENT 1 — magnet and coil
      +-------+          +----------------------+
      |  N  S | --> v    |  ) ) ) ) ) ) ) ) )   |----(G)
      +-------+          +----------------------+
     Moving the magnet towards the coil deflects the galvanometer one
     way; moving it away deflects it the other way; holding it still
     gives NO deflection. A faster movement gives a larger deflection.

  EXPERIMENT 2 — two coils, one carrying a steady current
     The bar magnet is replaced by a coil carrying a current from a
     battery. Moving this coil towards or away from the second coil
     produces exactly the same effects.

  EXPERIMENT 3 — two stationary coils and a key
     Both coils are kept fixed. On PRESSING the key in the primary the
     galvanometer in the secondary kicks momentarily one way; on
     RELEASING it, it kicks the other way; while the current is steady
     there is NO deflection.

  CONCLUSION
     An EMF is induced in a circuit whenever the MAGNETIC FLUX linked
     with it CHANGES. The EMF exists only while the flux is changing,
     and its magnitude depends on the RATE of change of flux. Relative
     motion is not essential — a changing current is enough.
```

---

### Q B15
Distinguish between self induction and mutual induction.

**ANSWER:**
```
  +---------------------------------+---------------------------------+
  |  SELF INDUCTION                 |  MUTUAL INDUCTION               |
  +---------------------------------+---------------------------------+
  |  Involves ONE coil.             |  Involves TWO coils.            |
  |  EMF is induced in the SAME     |  EMF is induced in the          |
  |  coil in which the current      |  NEIGHBOURING coil.             |
  |  changes.                       |                                 |
  |  e = - L dI/dt                  |  e2 = - M dI1/dt                |
  |  L = mu0 n^2 A l  (solenoid)    |  M = mu0 n1 n2 A l              |
  |  Depends on the geometry of     |  Depends also on the distance   |
  |  that one coil and its core.    |  and orientation of the coils.  |
  |  Called the coefficient of      |  Called the coefficient of      |
  |  self induction.                |  mutual induction.              |
  |  Application: chokes, inductors |  Application: TRANSFORMER,      |
  |                                 |  induction coil                 |
  +---------------------------------+---------------------------------+

  Both are measured in HENRY and both have dimensions
  [ M L^2 T^-2 A^-2 ].
```

---

### Q B16
Two inductors of 4 H and 12 H are connected (a) in series and (b) in parallel
with no mutual coupling. Find the equivalent inductance in each case. Also
find the energy stored in the series combination when it carries 2 A.

**ANSWER:**
```
  (a)  SERIES        L  =  L1 + L2  =  4 + 12  =  16 H

  (b)  PARALLEL      L  =  L1 L2 / ( L1 + L2 )
                        =  ( 4 x 12 ) / 16  =  48 / 16  =  3 H

  (c)  Energy in the series combination:
       U  =  (1/2) L I^2  =  0.5 x 16 x ( 2 )^2  =  0.5 x 16 x 4  =  32 J
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

> Section C of the AP Physics paper carries three 8-mark questions of which you
> answer any two. Electromagnetic Induction does not appear there every session
> — but when it does, it is almost always the **AC GENERATOR**. Learn C1
> perfectly; the rest are excellent revision and also cover any "combined"
> long answer.

---

### Q C1  *(the one to prepare)*
Describe the construction and working of an AC generator with a neat labelled
diagram. Derive the expression for the EMF induced in it.

**ANSWER:**
```
  ------------------------------------------------------------------
  1.  PRINCIPLE                                            [1 mark]
  ------------------------------------------------------------------
     An AC generator works on the principle of ELECTROMAGNETIC
     INDUCTION. When a coil is rotated in a uniform magnetic field,
     the flux linked with it changes continuously, so by Faraday's law
     an alternating EMF is induced. It converts MECHANICAL energy into
     ELECTRICAL energy.

  ------------------------------------------------------------------
  2.  CONSTRUCTION                                         [2 marks]
  ------------------------------------------------------------------
     (i)   ARMATURE - a rectangular coil ABCD of a large number of
           turns N of insulated copper wire wound on a soft-iron core,
           which increases the flux linked with the coil.

     (ii)  FIELD MAGNET - a strong permanent magnet (or an
           electromagnet) with concave pole pieces N and S, which
           produce a strong and (in large machines) radial field.

     (iii) SLIP RINGS - two hollow metallic rings R1 and R2 fixed to
           the two ends of the coil. They ROTATE ALONG WITH the coil.

     (iv)  BRUSHES - two carbon brushes B1 and B2 press against the
           slip rings and lead the current to the external circuit.

  ------------------------------------------------------------------
  3.  LABELLED DIAGRAM                                     [2 marks]
  ------------------------------------------------------------------

     +---------+                                    +---------+
     |         |     A  +--------------+  B         |         |
     |    N    |        |     COIL     |            |    S    |
     |  ------>|------->|  ---> B ---> |----------->|         |
     |         |     D  +--------------+  C         |         |
     +---------+              |  |                  +---------+
      field magnet            |  |                   field magnet
                          ____|  |____
                         |  R1     R2  |  <-- SLIP RINGS
                          ----+  +----
                         B1 # |  | # B2  <-- CARBON BRUSHES
                          ----+  +----
                              |  |
                          +---+--+---+
                          |   R(L)   |   external load
                          +----------+

  ------------------------------------------------------------------
  4.  WORKING                                              [1 mark]
  ------------------------------------------------------------------
     The coil is rotated by a turbine. In the first half rotation AB
     moves up and CD moves down, so by Fleming's RIGHT-HAND rule the
     current flows A -> B -> C -> D and out through brush B1.
     In the second half rotation the motion of the two sides is
     reversed, so the current flows D -> C -> B -> A and out through
     B2. Thus the current in the external circuit REVERSES every half
     rotation — it is ALTERNATING CURRENT.

  ------------------------------------------------------------------
  5.  THEORY (derivation)                                  [2 marks]
  ------------------------------------------------------------------
     Let N = number of turns , A = area of the coil ,
         B = magnetic flux density , omega = angular velocity.

     Measure time from the instant when the plane of the coil is
     perpendicular to B. After time t the normal has turned through

              theta  =  omega t

     Flux through one turn :

              phi  =  B A cos( omega t )

     Flux linkage through N turns :

              N phi  =  N B A cos( omega t )

     By Faraday's law :

                       d ( N phi )                    d
              e  =  -  -------------  =  - N B A x  ----- cos( omega t )
                            dt                        dt

                    =  - N B A [ - omega sin( omega t ) ]

     +--------------------------------------------------+
     |    e  =  N B A omega  sin( omega t )             |
     |                                                  |
     |    e  =  e0 sin( omega t )   with                |
     |    e0 =  N B A omega  =  N B A ( 2 pi f )        |
     +--------------------------------------------------+

     The EMF is maximum ( e = e0 ) when omega t = 90 degrees, i.e.
     when the plane of the coil is PARALLEL to the field, and zero
     when the plane is perpendicular to the field.

  ------------------------------------------------------------------
  6.  GRAPH
  ------------------------------------------------------------------
      e
      ^
  e0  |     ****                       ****
      |   **    **                   **    **
    0 +--*--------*-----------------*--------*-------> t
      |   T/4      *    T/2       *    3T/4   *   T
      |             **          **             **
 -e0  |               **********                 ****

           e = e0 sin( omega t ) ,   T = 2 pi / omega = 1 / f
```

---

### Q C2
State Faraday's laws of electromagnetic induction. State Lenz's law and show
that it follows from the conservation of energy. Derive the expression for the
EMF induced in a rod moving in a magnetic field.

**ANSWER (skeleton with the mark split):**
```
  PART 1  Faraday's two laws + e = - N d(phi)/dt              [2 marks]
          (write exactly as in Q B2)

  PART 2  Statement of Lenz's law                             [1 mark]

  PART 3  The bar-magnet-and-coil experiment with the diagram [2 marks]
          - N pole approaching -> near face becomes N -> repels
          - N pole receding    -> near face becomes S -> attracts

  PART 4  Conservation-of-energy argument                     [2 marks]
          - suppose the coil attracted the approaching magnet
          - the magnet would accelerate by itself, gaining KE,
            AND heat I^2 R would appear in the coil
          - energy created from nothing -> IMPOSSIBLE
          - hence the coil must oppose the motion
          - the work you do = the electrical energy produced

  PART 5  Motional EMF derivation with the rails diagram      [1 mark]
          phi = B l x  ->  d(phi)/dt = B l v  ->  e = B l v
```

---

### Q C3
Define self inductance and mutual inductance. Derive expressions for the self
inductance of a long solenoid and the mutual inductance of two long coaxial
solenoids. Obtain the energy stored in an inductor.

**ANSWER (skeleton with the mark split):**
```
  PART 1  Definitions of L and M, unit HENRY, definition of 1 H   [2 marks]

              N phi = L I ,  e = - L dI/dt
              N2 phi2 = M I1 ,  e2 = - M dI1/dt

  PART 2  SELF INDUCTANCE OF A SOLENOID (full derivation)         [2 marks]
              B = mu0 n I
              phi = mu0 n I A
              N phi = mu0 n^2 A l I
              L = mu0 n^2 A l = mu0 N^2 A / l
          (with the solenoid diagram)

  PART 3  MUTUAL INDUCTANCE OF TWO COAXIAL SOLENOIDS              [2 marks]
              B1 = mu0 n1 I1
              N2 phi2 = mu0 n1 n2 A l I1
              M = mu0 n1 n2 A l = mu0 N1 N2 A / l
              and M12 = M21 (reciprocity)
          (with the coaxial solenoids diagram)

  PART 4  ENERGY STORED                                           [2 marks]
              dW = L I dI
              U = INT (0 to I) L I dI = (1/2) L I^2
              energy density  u = B^2 / ( 2 mu0 )

  If the question also asks for the coefficient of coupling, add
              M = k sqrt( L1 L2 ) ,  0 <= k <= 1 .
```

---

### Q C4
What are eddy currents? Explain how they are produced, why they are
undesirable in a transformer core, how they are minimised, and describe their
useful applications. Also explain magnetic damping in a galvanometer.

**ANSWER (skeleton with the mark split):**
```
  PART 1  Definition, also called Foucault currents, direction by
          Lenz's law, with the swirling-loops diagram             [2 marks]

  PART 2  Harmful effects: I^2 R heating in transformer and motor
          cores, loss of efficiency, overheating and damage to
          the insulation                                          [2 marks]

  PART 3  MINIMISING them: laminated core of thin insulated
          sheets placed parallel to the field, so each eddy loop
          meets a much higher resistance; silicon steel is used.
          Include the SOLID vs LAMINATED core diagram, and the
          solid-plate vs slotted-plate demonstration              [2 marks]

  PART 4  Applications                                            [2 marks]
            1. electromagnetic braking in electric trains
            2. induction furnace for melting metals
            3. electric power (energy) meters — the rotating disc
            4. MAGNETIC DAMPING: the galvanometer coil is wound on
               a metallic (aluminium) frame; eddy currents induced
               in the frame oppose the swinging, so the needle
               comes to rest at once — a DEAD-BEAT galvanometer
```

---

### Q C5
Obtain an expression for the motional EMF. A rod slides on rails in a
magnetic field: find the current, the force required to keep it moving
uniformly, the power supplied and the heat produced, and show that energy is
conserved.

**ANSWER (skeleton with the mark split):**
```
  PART 1  Diagram of the rod on the rails, field into the page    [1 mark]

  PART 2  Derivation from the flux rule                           [2 marks]
              phi = B l x , d(phi)/dt = B l v , e = B l v

  PART 3  Derivation from the Lorentz force                       [2 marks]
              q E = q v B  ->  E = v B  ->  e = E l = B l v

  PART 4  The circuit quantities                                  [2 marks]
              I = B l v / R
              F = B I l = B^2 l^2 v / R      (retarding force)
              applied force = same, forwards, for constant v
              P(mech) = F v = B^2 l^2 v^2 / R

  PART 5  Energy conservation                                     [1 mark]
              P(heat) = I^2 R = B^2 l^2 v^2 / R  =  P(mech)
              every joule of mechanical work becomes heat
```

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+------------------------------------------+---------+-----------+
  | RANK |  QUESTION TYPE                           | SECTION |  CHANCE   |
  +------+------------------------------------------+---------+-----------+
  |   1  |  Lenz's law and CONSERVATION OF ENERGY   |    B    |  VERY HIGH|
  |   2  |  Self inductance of a SOLENOID (derive)  |    B    |  VERY HIGH|
  |   3  |  Motional EMF  e = B l v  (derive)       |    B    |    HIGH   |
  |   4  |  Eddy currents - harm, lamination, uses  |    B    |    HIGH   |
  |   5  |  Define magnetic flux / unit / dimensions|    A    |    HIGH   |
  |   6  |  State Faraday's laws                    |    A    |    HIGH   |
  |   7  |  Define self inductance / one henry      |    A    |    HIGH   |
  |   8  |  AC GENERATOR - full long answer         |    C    |  MODERATE |
  |   9  |  Mutual inductance of coaxial solenoids  |    B    |  MODERATE |
  |  10  |  Energy stored in an inductor (derive)   |    B    |  MODERATE |
  |  11  |  Numerical on e = -N d(phi)/dt or charge |   A/B   |  MODERATE |
  |  12  |  Define mutual inductance                |    A    |  MODERATE |
  |  13  |  Faraday and Henry experiments           |    B    |  MODERATE |
  |  14  |  Self vs mutual induction (distinguish)  |    B    |    LOW    |
  |  15  |  Coefficient of coupling                 |    A    |    LOW    |
  |  16  |  Inductors in series and parallel        |    A    |    LOW    |
  +------+------------------------------------------+---------+-----------+
```

```
  IF YOU HAVE TIME FOR ONLY FOUR ANSWERS FROM THIS CHAPTER, LEARN:

     1.  Lenz's law + conservation of energy         (4 marks)
     2.  Self inductance of a solenoid               (4 marks)
     3.  Motional EMF  e = B l v                     (4 marks)
     4.  Definitions: flux, weber, henry, Faraday's laws  (2 marks each)

  That is a safe 8 to 10 marks, and it takes one evening.
```
