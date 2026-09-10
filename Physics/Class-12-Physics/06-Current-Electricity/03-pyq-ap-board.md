# Current Electricity — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Physics, 2nd Year, 60 marks · **Chapter 6**

> **About the year tags:** BIEAP recycles the same questions across many
> sessions, so the questions below are grouped by **how often they appear**
> rather than being tagged to one exact year. No year labels are invented
> here. Cross-check with the official question papers at **bie.ap.gov.in**
> before your exam.

**Where this chapter appears in the paper:**

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |  Section A   10 questions x 2 marks   answer ALL      = 20 marks|
  |              ->  this chapter usually supplies 1 or 2           |
  |                                                                 |
  |  Section B    8 questions x 4 marks   answer any 6    = 24 marks|
  |              ->  this chapter usually supplies 1                |
  |                                                                 |
  |  Section C    3 questions x 8 marks   answer any 2    = 16 marks|
  |              ->  this chapter is a VERY frequent supplier:      |
  |                  Wheatstone bridge / metre bridge /             |
  |                  potentiometer / Kirchhoff's laws               |
  |                                                                 |
  |                                              TOTAL   = 60 marks|
  +-----------------------------------------------------------------+

  Realistic haul from this chapter:  12 to 16 marks.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Current, drift velocity and current density

### Q A1
Define electric current. Give its SI unit.

**ANSWER:**
```
  Electric current is the rate of flow of electric charge through
  a conductor.

              q                    dq
        I  = ---        or    I = ----
              t                    dt

  SI unit:  ampere (A) .    1 A = 1 coulomb per second.
```

---

### Q A2
Is electric current a scalar or a vector? Justify.

**ANSWER:** Electric current is a **scalar**. Although it has a direction,
it does not obey the parallelogram law of vector addition; currents at a
junction add algebraically.

---

### Q A3
Define drift velocity of an electron. Give its order of magnitude.

**ANSWER:**
```
  DRIFT VELOCITY is the average velocity with which the free electrons
  in a conductor move under an applied electric field.

                e E tau
        vd  =  ---------
                   m

  Order of magnitude:  about 10^-4 m/s  (a fraction of a mm per second).
```

---

### Q A4
Define relaxation time.

**ANSWER:** The average time interval between two successive collisions of
a free electron with the positive ions of the lattice. Its order of
magnitude is about **10^-14 second**.

---

### Q A5
Define mobility of an electron. Give its SI unit.

**ANSWER:**
```
  Mobility is the drift velocity acquired by an electron per unit
  applied electric field.

              vd         e tau
        mu = ----   =   -------
              E            m

  SI unit:  m^2 V^-1 s^-1
```

---

### Q A6
Define current density. Is it a scalar or a vector?

**ANSWER:**
```
  Current density is the current flowing per unit area of cross-section
  held normal to the direction of flow.

              I
        J  = ---            SI unit:  A m^-2
              A

  It is a VECTOR, directed along the direction of flow of current.
```

---

### Q A7
Electrons drift with a very small velocity, yet a bulb lights up the
instant the switch is closed. Why?

**ANSWER:** Because the **electric field** set up in the wire travels with
a speed close to the speed of light (3 x 10^8 m/s). It starts **all** the
electrons throughout the circuit almost instantly. We do not have to wait
for an electron to travel from the switch to the bulb.

---

## Topic: Ohm's law, resistance and resistivity

### Q A8
State Ohm's law.

**ANSWER:**
```
  At constant temperature and under constant physical conditions, the
  current flowing through a conductor is directly proportional to the
  potential difference across its ends.

        I  is proportional to  V           ->        V  =  I R
```

---

### Q A9
Distinguish between ohmic and non-ohmic conductors with one example each.

**ANSWER:**
```
  OHMIC      - obeys Ohm's law; V-I graph is a STRAIGHT LINE through
               the origin.        Example: copper, nichrome.

  NON-OHMIC  - does not obey Ohm's law; V-I graph is NOT a straight
               line.              Example: semiconductor diode, thermistor.
```

---

### Q A10
State any two limitations of Ohm's law.

**ANSWER:**
```
  1.  It holds only at CONSTANT TEMPERATURE.
  2.  It fails for semiconductor devices (diode, transistor, thermistor),
      electrolytes and gases.

  (Also acceptable: for some materials V is not proportional to I;
   for a diode the relation depends on the DIRECTION of V.)
```

---

### Q A11
Define resistivity (specific resistance). Give its SI unit.

**ANSWER:**
```
  Resistivity is the resistance of a conductor of unit length and unit
  area of cross-section made of that material (equivalently, the
  resistance of a unit cube measured between opposite faces).

               R A
        rho = ------              SI unit:  ohm metre (ohm m)
                L

  It depends only on the MATERIAL and the TEMPERATURE, not on the
  dimensions of the specimen.
```

---

### Q A12
Define electrical conductivity. Give its SI unit.

**ANSWER:**
```
  Conductivity is the reciprocal of resistivity.

                    1
        sigma  =  -----          SI unit:  ohm^-1 m^-1  (siemens per metre)
                   rho
```

---

### Q A13
Write the expression for the resistivity of a conductor in terms of
relaxation time, and explain each symbol.

**ANSWER:**
```
                 m
        rho = -----------
               n e^2 tau

        m   = mass of an electron          n   = free electrons per m^3
        e   = charge of an electron        tau = relaxation time
```

---

### Q A14
Define temperature coefficient of resistance. Give its unit.

**ANSWER:**
```
  It is the increase in resistance per unit original resistance per
  degree rise in temperature.

                    R2  -  R1
        alpha  =  --------------              Unit:  per degree C  (or K^-1)
                   R1 (t2 - t1)
```

---

### Q A15
Why are manganin and constantan used for making standard resistance coils?

**ANSWER:** Because their **temperature coefficient of resistance is almost
zero**, so their resistance hardly changes with temperature. They also have
a fairly high resistivity, so a small length gives a usable resistance.

---

### Q A16
A resistor has the colour bands **Green, Blue, Yellow, Silver**. Find its
value and tolerance.

**ANSWER:**
```
  Green  ->  5
  Blue   ->  6
  Yellow ->  10^4
  Silver ->  ± 10 %

  Value  =  56 x 10^4 ohm  =  5.6 x 10^5 ohm  =  560 kilo-ohm  ± 10 %
```

---

### Q A17
A wire of resistance R is stretched to twice its original length. What is
its new resistance?

**ANSWER:**
```
  The volume stays constant, so   R'  =  n^2 R  with  n = 2

              R'  =  4 R
```

---

## Topic: Cells, Kirchhoff and instruments

### Q A18
Define emf of a cell and terminal potential difference. How are they
related?

**ANSWER:**
```
  EMF (E)  -  the potential difference between the terminals of a cell
              when NO current is drawn from it (open circuit).

  TERMINAL P.D. (V)  -  the potential difference between the terminals
              when the cell IS supplying current.

  Relation (while discharging):     V  =  E  -  I r

  So V is always LESS than E when current flows.
```

---

### Q A19
What is internal resistance of a cell? On what factors does it depend?

**ANSWER:**
```
  The resistance offered by the electrolyte and electrodes inside the
  cell itself to the flow of current through it.

  It depends on:
     - the nature and concentration of the electrolyte
     - the distance between the electrodes  (more distance -> more r)
     - the area of the electrodes dipped     (more area -> less r)
     - the temperature                       (higher T  -> less r)
```

---

### Q A20
State Kirchhoff's junction law and name the conservation principle behind
it.

**ANSWER:**
```
  The algebraic sum of the currents meeting at a junction is zero;
  that is, the current entering a junction equals the current leaving it.

  Based on:  CONSERVATION OF ELECTRIC CHARGE.
```

---

### Q A21
State Kirchhoff's loop law and name the conservation principle behind it.

**ANSWER:**
```
  Around any closed loop of a network, the algebraic sum of the products
  of current and resistance equals the algebraic sum of the emfs in that
  loop:            SUM ( I R )  =  SUM ( E )

  Based on:  CONSERVATION OF ENERGY.
```

---

### Q A22
Write the balance condition of a Wheatstone bridge.

**ANSWER:**
```
  When the galvanometer shows no deflection (Ig = 0),

              P        R
             ---  =   ---              or      P S  =  Q R
              Q        S
```

---

### Q A23
Why is a potentiometer preferred to a voltmeter for measuring the emf of a
cell?

**ANSWER:** A voltmeter has a finite resistance and therefore draws current
from the cell, so it reads **V = E - I r**, which is less than the emf. A
potentiometer at balance draws **zero current**, so it measures the **true
emf**. It behaves like a voltmeter of infinite resistance.

---

### Q A24
Define the kilowatt-hour. How many joules is it?

**ANSWER:**
```
  The kilowatt-hour is the commercial unit of electrical energy: the
  energy consumed by a device of power 1 kilowatt working for 1 hour.

        1 kWh  =  1000 W  x  3600 s  =  3.6  x  10^6  joule
```

---

### Q A25
State Joule's law of heating.

**ANSWER:**
```
  The heat produced in a conductor is

        H  =  I^2 R t     joule

  (i)   H is proportional to  I^2   (R and t constant)
  (ii)  H is proportional to  R     (I and t constant)
  (iii) H is proportional to  t     (I and R constant)
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1  ***ASKED VERY OFTEN***
Derive the expression **I = n A e vd** for the current flowing through a
conductor.

**ANSWER:**
```
  Let    n  = number of free electrons per unit volume
         A  = area of cross-section
         vd = drift velocity
         e  = charge on an electron

  STEP 1   Consider a length  vd t  of the conductor.

           |<--------- vd t --------->|
           +--------------------------+
           |    .  .   .   .   .  .   |  A
           +--------------------------+
                                        ---> vd

           All the electrons inside this block cross the far face in
           time t , because the block is exactly vd t long.

  STEP 2   Volume of the block  =  A vd t

  STEP 3   Number of electrons in it  =  n A vd t

  STEP 4   Charge in it   q  =  n A vd t e

  STEP 5              q       n A vd t e
           I    =    ---  =  -------------   =   n A e vd
                      t            t

                   +----------------------+
                   |    I  =  n A e vd    |
                   +----------------------+

  STEP 6   Dividing by A gives the current density   J  =  n e vd
```

---

### Q B2  ***ASKED VERY OFTEN***
Derive the expression **rho = m / (n e^2 tau)** for the resistivity of a
conductor.

**ANSWER:**
```
  STEP 1   In a field E the acceleration of an electron is  a = eE/m .
           Between two collisions (average time tau) it gains

                     e E tau
             vd  =  ---------
                        m

  STEP 2   Current      I  =  n A e vd

  STEP 3   Substituting:
                                  e E tau        n A e^2 E tau
             I  =  n A e   x     ---------  =  -----------------
                                     m                 m

  STEP 4   For a wire of length L across which a p.d. V is applied,
           E = V / L , so

                    n A e^2 tau      V
             I  =  -------------  x ---
                         m           L

  STEP 5   Comparing with  V = I R :

                    V            m L
             R  =  ---  =  --------------
                    I       n e^2 tau A

  STEP 6   Comparing with  R = rho L / A :

                   +---------------------+
                   |             m       |
                   |   rho  =  --------- |
                   |           n e^2 tau |
                   +---------------------+

           and therefore     sigma = n e^2 tau / m
```

---

### Q B3
Deduce the expression for the equivalent resistance of resistors joined
(a) in series and (b) in parallel.

**ANSWER:**
```
  (a) SERIES

        ----/\/\/-------/\/\/-------/\/\/----
              R1          R2          R3
        <------------------ V --------------->

      The SAME current I flows through each. The p.d.s add:

           V   =  V1 + V2 + V3
         I Rs  =  I R1 + I R2 + I R3

      Dividing by I :          Rs  =  R1 + R2 + R3


  (b) PARALLEL

              +---/\/\/---+
              |     R1    |
        ------+---/\/\/---+------
              |     R2    |
              +---/\/\/---+
                    R3
        <---------- V ---------->

      The SAME p.d. V is across each. The currents add:

            I   =  I1 + I2 + I3

           V        V       V       V
         -----  =  ---- +  ---- +  ----
           Rp       R1      R2      R3

      Dividing by V :

             1        1       1       1
           -----  =  ---- +  ---- +  ----
             Rp       R1      R2      R3
```

---

### Q B4
State Kirchhoff's laws and write the sign convention used with them.

**ANSWER:**
```
  JUNCTION LAW (KCL)
     The algebraic sum of the currents meeting at a junction is zero.
     Current entering = current leaving.
     Basis: conservation of CHARGE.

  LOOP LAW (KVL)
     In any closed loop, SUM ( I R )  =  SUM ( E ).
     Basis: conservation of ENERGY.

  SIGN CONVENTION
     Walking WITH    the current through a resistor   ->  I R is  -
     Walking AGAINST the current through a resistor   ->  I R is  +
     Leaving a cell by its  +  terminal               ->  E   is  +
     Leaving a cell by its  -  terminal               ->  E   is  -

     Guess the direction of every branch current. If the answer comes
     out NEGATIVE, the true direction is the opposite one.
```

---

### Q B5
Define emf, terminal potential difference and internal resistance, and
derive the relation between them.

**ANSWER:**
```
      +----------| |----------+
      |          E , r        |
      |                       |
      +--------/\/\/----------+
                  R
                     ---> I

  The current from the cell must pass through BOTH the external
  resistance R and the internal resistance r, so

           E   =   I R   +   I r   =   I ( R + r )

                          E
           therefore  I = -------
                          R + r

  The terminal p.d. is the part of the emf available outside:

           V   =   I R   =   E   -   I r

                   +---------------------+
                   |    V  =  E  -  I r  |
                   +---------------------+

  Rearranging gives the internal resistance:

                E - V             +-        -+
        r  =  ---------   =       |  E  -  V |
                  I               | ---------|  x  R
                                  |     V    |
                                  +-        -+

  Special cases:
        open circuit (I = 0)    ->    V = E
        short circuit (R = 0)   ->    I = E/r , V = 0
        charging the cell       ->    V = E + I r
```

---

### Q B6
Obtain the expression for the current when **n** identical cells are joined
(a) in series and (b) in parallel, and state when each grouping is useful.

**ANSWER:**
```
  (a) n CELLS IN SERIES, each of emf E and internal resistance r

        ---| |---| |---| |---+
                             |
        ---------/\/\/-------+
                   R

           total emf = n E , total internal resistance = n r

                       n E
              I   =  ---------
                      R + n r

           If R >> n r ,   I  is about  n E / R  ->  n times larger.
           SERIES grouping is useful when R is MUCH GREATER than r.


  (b) m CELLS IN PARALLEL

              +---| |---+
        ------+---| |---+------/\/\/------
              +---| |---+          R

           total emf = E , total internal resistance = r / m

                       E              m E
              I   =  --------  =  -----------
                      R + r/m      m R  +  r

           If R << r ,   I  is about  m E / r  ->  m times larger.
           PARALLEL grouping is useful when R is MUCH SMALLER than r.

  (c) MIXED (m rows of n cells)

                       m n E                                 n r
              I  =  -----------  ,   maximum when   R   =   -----
                     m R + n r                                m
```

---

### Q B7
A copper wire of cross-sectional area 1.0 x 10^-6 m^2 carries a current of
1.5 A. If n = 8.5 x 10^28 m^-3, find the drift velocity of the electrons.

**ANSWER:**
```
  STEP 1   I = n A e vd     ->     vd = I / (n A e)

  STEP 2                       1.5
           vd  =  --------------------------------------------
                   (8.5 x 10^28)(1.0 x 10^-6)(1.6 x 10^-19)

  STEP 3   Denominator = 8.5 x 1.6 x 10^(28 - 6 - 19)
                       = 13.6 x 10^3  =  1.36 x 10^4

  STEP 4          1.5
           vd = ----------  =  1.1 x 10^-4  m/s
                1.36 x 10^4

  ANSWER:  vd  =  1.1 x 10^-4 m/s
```

---

### Q B8
Three resistors of 4 ohm, 6 ohm and 12 ohm are connected in parallel across
a 24 V battery of negligible internal resistance. Find (a) the equivalent
resistance (b) the total current (c) the current in each resistor.

**ANSWER:**
```
  (a)     1      1     1      1        3      2      1        6
         ---- = --- + --- + ----  =  ---- + ---- + ----  =  ----
          Rp     4     6     12       12     12     12       12

                 Rp  =  2 ohm

  (b)             V        24
          I  =   ---  =  ------  =  12 A
                  Rp        2

  (c)  Same voltage 24 V across each:

          I(4)  = 24 / 4  = 6 A
          I(6)  = 24 / 6  = 4 A
          I(12) = 24 / 12 = 2 A

       CHECK:  6 + 4 + 2 = 12 A     correct.
```

---

### Q B9
A cell of emf 2 V and internal resistance 0.5 ohm is connected to an
external resistance of 4.5 ohm. Find the current, the terminal voltage and
the potential drop inside the cell.

**ANSWER:**
```
  STEP 1              E              2           2
          I   =   ---------  =  ----------  =  -----  =  0.4 A
                    R + r        4.5 + 0.5       5

  STEP 2  V  =  E - I r  =  2 - (0.4)(0.5)  =  2 - 0.2  =  1.8 V

          Check:  V = I R = 0.4 x 4.5 = 1.8 V     correct.

  STEP 3  Drop inside the cell  =  I r  =  0.2 V

  ANSWER:  I = 0.4 A ,  V = 1.8 V ,  internal drop = 0.2 V
```

---

### Q B10
Two cells of emf 8 V and 7 V, each of internal resistance 2 ohm, are
connected in parallel to an external resistance of 4 ohm. Using Kirchhoff's
laws find the current in each branch.

**ANSWER:**
```
           A
      +----| |----/\/\/----+        I1 -->
      |   8 V      2 ohm   |
      |                    |
      +----| |----/\/\/----+---/\/\/---+    I3 = I1 + I2
      |   7 V      2 ohm   |   4 ohm   |
      |                    |           |
      +--------------------+-----------+
                              I2 -->

  JUNCTION RULE :      I3  =  I1  +  I2

  LOOP 1 (8 V cell, 2 ohm, 4 ohm) :
         8  =  2 I1  +  4 (I1 + I2)   ->   6 I1 + 4 I2  =  8    ...(i)

  LOOP 2 (7 V cell, 2 ohm, 4 ohm) :
         7  =  2 I2  +  4 (I1 + I2)   ->   4 I1 + 6 I2  =  7    ...(ii)

  Solve:   (i) x 3 :   18 I1 + 12 I2  =  24
           (ii) x 2 :   8 I1 + 12 I2  =  14
           subtract :  10 I1          =  10       ->  I1 = 1 A

  From (i):   6 + 4 I2 = 8   ->   I2 = 0.5 A

  Therefore   I3 = 1 + 0.5 = 1.5 A

  ANSWER:  I1 = 1 A ,  I2 = 0.5 A ,  current in the 4 ohm = 1.5 A
```

---

### Q B11
In a metre bridge the balance point is obtained at 40 cm from the left end
when a 6 ohm resistance is in the left gap. Find the unknown resistance in
the right gap. Where will the balance point shift if the two resistances
are interchanged?

**ANSWER:**
```
  STEP 1                100 - l              100 - 40           60
           S   =   R x --------- =    6  x  ----------  =  6 x ----
                            l                    40             40

  STEP 2   S  =  6  x  1.5  =  9 ohm

  STEP 3   On interchanging, l becomes (100 - l) :

              new balance point  =  100 - 40  =  60 cm from the left end.

  ANSWER:  S = 9 ohm ; the balance point shifts to 60 cm.
```

---

### Q B12
The resistance of a metal wire is 10 ohm at 20 degree C and 12 ohm at
120 degree C. Find its temperature coefficient of resistance.

**ANSWER:**
```
  STEP 1              R2  -  R1
           alpha  =  --------------
                      R1 (t2 - t1)

  STEP 2                12  -  10                2
           alpha  =  ----------------  =  ---------------
                      10 (120 - 20)         10  x  100

  STEP 3   alpha  =  2 / 1000  =  0.002  per degree C

  ANSWER:  alpha  =  2 x 10^-3  per degree C
```

---

### Q B13
Two electric bulbs marked 60 W, 220 V and 100 W, 220 V are connected in
series across a 220 V supply. Which bulb glows brighter? Explain with a
calculation.

**ANSWER:**
```
  STEP 1   Resistance of each bulb at the rated voltage,  R = V^2 / P

                  220 x 220        48400
           R60 = -----------  =  ---------  =  807 ohm
                      60             60

                  220 x 220        48400
           R100 = -----------  =  ---------  =  484 ohm
                      100            100

  STEP 2   In SERIES the SAME current flows:

                      220             220
           I   =  -----------  =  ----------  =  0.171 A
                   807 + 484          1291

  STEP 3   Power actually consumed,  P = I^2 R

           P60  = (0.171)^2 x 807  =  0.0292 x 807  =  23.6 W
           P100 = (0.171)^2 x 484  =  0.0292 x 484  =  14.1 W

  ANSWER:  The 60 W bulb glows BRIGHTER in series, because in series the
           current is the same and P = I^2 R, so the bulb with the
           LARGER resistance (the lower-wattage bulb) consumes more power.

           (In PARALLEL the answer is the opposite: the 100 W bulb is
            brighter, because there V is the same and P = V^2 / R.)
```

---

### Q B14
A current of 2 A flows through a 10 ohm resistor for 5 minutes. Calculate
the heat produced, in joule and in calorie.

**ANSWER:**
```
  STEP 1   t  =  5 minutes  =  300 s

  STEP 2   H  =  I^2 R t  =  (2)^2 x 10 x 300
                          =  4 x 10 x 300
                          =  12000 J   =  12 kJ

  STEP 3   In calories:      12000 / 4.18  =  2870 cal (about 2.87 kcal)

  ANSWER:  H = 1.2 x 10^4 J  =  about 2.87 x 10^3 calorie
```

---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1  *** THE MOST FREQUENT LONG ANSWER IN THIS CHAPTER ***
State Kirchhoff's laws for an electrical network. Using them, deduce the
condition for balance of a Wheatstone bridge.

**ANSWER:**

**PART 1 — KIRCHHOFF'S LAWS**

```
  FIRST LAW - JUNCTION LAW (Kirchhoff's current law)

      The algebraic sum of the currents meeting at a junction in an
      electrical network is zero. In other words, the total current
      entering a junction is equal to the total current leaving it.

              I1 \        / I3
                  \      /
                   \    /
                    \  /
                     \/ junction
                     /\
                    /  \
              I2   /    \  I4

                    I1  +  I2   =   I3  +  I4

      This law is a consequence of the CONSERVATION OF ELECTRIC CHARGE
      (charge cannot pile up at a junction).


  SECOND LAW - LOOP LAW (Kirchhoff's voltage law)

      In any closed loop of a network, the algebraic sum of the products
      of current and resistance is equal to the algebraic sum of the
      emfs present in that loop.

                    SUM ( I R )   =   SUM ( E )

      This law is a consequence of the CONSERVATION OF ENERGY (a charge
      taken once round a closed loop returns to the same potential).


  SIGN CONVENTION

      Walking WITH    the current through a resistor  ->  I R  taken as -
      Walking AGAINST the current through a resistor  ->  I R  taken as +
      Leaving a cell by its  +  terminal              ->  E    taken as +
      Leaving a cell by its  -  terminal              ->  E    taken as -
```

**PART 2 — THE WHEATSTONE BRIDGE**

```
  CONSTRUCTION

  Four resistances P, Q, R and S are joined to form a quadrilateral ABCD.
  A galvanometer (G) is connected between B and D. A cell E with a key K
  is connected between A and C.

                          B
                        /   \
              I1  -->  /     \  --> (I1 - Ig)
                     P         Q
                    /            \
                 A ------(G)------- C
                    \      Ig      /
                     R           S
              I2 -->  \         /  --> (I2 + Ig)
                        \     /
                          D
                          |
                     +----+----+
                     |         |
                     ---| |--/ ---
                        E     K

  The bridge is said to be BALANCED when the galvanometer shows NO
  deflection, i.e. when  Ig = 0 . Then B and D are at the same potential.
```

```
  DERIVATION OF THE BALANCE CONDITION

  Let the current I from the cell divide at A into I1 (through P) and
  I2 (through R). At balance Ig = 0, so no current crosses the arm BD.
  Therefore

        the current through Q is also  I1
        the current through S is also  I2


  STEP 1   Apply the LOOP LAW to the closed loop  A B D A :

              -  I1 P   -   Ig G   +   I2 R   =   0

           (going A -> B with the current gives - I1 P ;
            going B -> D through the galvanometer gives - Ig G ;
            going D -> A against the current gives + I2 R )

           At balance  Ig = 0 , hence

                       I1 P   =   I2 R                       .... (1)


  STEP 2   Apply the LOOP LAW to the closed loop  B C D B :

              -  I1 Q   +   I2 S   +   Ig G   =   0

           At balance  Ig = 0 , hence

                       I1 Q   =   I2 S                       .... (2)


  STEP 3   Divide equation (1) by equation (2) :

                    I1 P          I2 R
                  --------   =  --------
                    I1 Q          I2 S

           I1 cancels on the left and I2 cancels on the right, giving

                       +---------------------+
                       |     P        R      |
                       |    ---  =   ---     |
                       |     Q        S      |
                       +---------------------+

           This is the BALANCE CONDITION of the Wheatstone bridge.
           It can also be written as     P S  =  Q R .


  STEP 4   If P, Q and R are known, the unknown resistance is

                             Q  R
                    S   =   -------
                               P
```

```
  IMPORTANT POINTS

  1.  The method is a NULL METHOD: we look only for zero deflection.
      The result therefore does not depend on the sensitivity or the
      calibration of the galvanometer, nor on the emf or the internal
      resistance of the cell. This makes it very accurate.

  2.  The battery key is pressed FIRST and the galvanometer key AFTER,
      so that a momentary induced current does not give a false reading.

  3.  The cell and the galvanometer may be interchanged without altering
      the balance condition.

  4.  The bridge is most sensitive when all four resistances are of the
      SAME ORDER of magnitude.

  5.  It is not suitable for measuring very low or very high resistances.
```

---

### Q C2  *** VERY FREQUENT ***
Describe with a neat diagram how a **metre bridge** is used to determine
the resistance (and hence the resistivity) of a given wire. State the
precautions.

**ANSWER:**

```
  PRINCIPLE
     A metre bridge is a practical form of the Wheatstone bridge in which
     two of the four arms are the two parts of a single uniform wire one
     metre long. At balance,   P / Q  =  R / S .


  APPARATUS AND CIRCUIT

        +---[ R  resistance box ]---+---[  S  unknown  ]---+
        |                           |                      |
       (A)                         (B)                    (C)
        |                           |                      |
        |                          (G)                     |
        |                           |                      |
        |                           |  jockey              |
        |                           V                      |
        A===========================|======================C
        0 cm                       l cm                  100 cm
        |     uniform 1 metre constantan / manganin wire   |
        |                                                  |
        +---------------| |-------/ ------------------------+
                        E         K

     LEFT GAP   :  a known resistance R taken from a resistance box
     RIGHT GAP  :  the unknown resistance S
     AC         :  a uniform wire, exactly one metre long
     (G)        :  galvanometer, one end at B, other end to the jockey


  WORKING

     1.  Make the connections as shown and press the key K.
     2.  Take a suitable resistance R out of the box.
     3.  Slide the jockey along the wire AC and find the point where the
         galvanometer shows ZERO deflection. Let this point be at a
         distance  l  cm from the end A.

     At this position the bridge is balanced.


  THEORY

     Let rho' be the resistance per unit length of the bridge wire.

         resistance of the part  A to jockey    =  rho'  l
         resistance of the part  jockey to C    =  rho' (100 - l)

     Applying the Wheatstone balance condition  P/Q = R/S :

              R              rho'  l
            -----   =   -------------------
              S           rho' (100 - l)

     The factor rho' cancels -- which is exactly why the wire must be
     UNIFORM -- so

                  +------------------------------+
                  |               ( 100  -  l )  |
                  |     S   =  R  --------------  |
                  |                     l        |
                  +------------------------------+


  RESISTIVITY OF THE WIRE

     Measure the length L of the specimen wire with a metre scale and
     its radius r with a screw gauge. Then

                 rho L                 S A          S  pi r^2
         S  =  ---------    ->  rho = -----   =   ------------
                   A                    L               L


  PRECAUTIONS

     1.  The bridge wire must be uniform in cross-section throughout.
     2.  All connections must be clean and tight; loose contacts add
         unwanted resistance.
     3.  The jockey must be TAPPED gently, never dragged along the wire.
     4.  Current should be passed only for short intervals, so that the
         wire does not get heated (heating changes its resistance).
     5.  The balance point should lie near the MIDDLE of the wire
         (between about 40 cm and 60 cm) for maximum accuracy; if it does
         not, change the value of R in the box.
     6.  Repeat with several values of R and take the mean.
```

---

### Q C3  *** VERY FREQUENT ***
State the working principle of a **potentiometer**. Explain with a circuit
diagram how it is used to compare the emfs of two cells. Why is a
potentiometer preferred to a voltmeter?

**ANSWER:**

```
  PRINCIPLE

     When a constant current flows through a wire of uniform area of
     cross-section, the potential difference across any portion of the
     wire is DIRECTLY PROPORTIONAL to the LENGTH of that portion.

         V  =  I  rho'  l           so       V  is proportional to  l

     The constant of proportionality is the POTENTIAL GRADIENT

                     V(across the whole wire)
             k   =  --------------------------      Unit: V/m
                      L (length of the wire)

     and then       V  =  k  l .


  CIRCUIT FOR COMPARING TWO EMFs

        +--------| |----/ ------[ Rh ]---------+     driver cell E, key K
        |         E     K                      |     Rh = rheostat
        |                                      |
        A======================================B     potentiometer wire
        |                    |                 |
        |                    | jockey          |
        |                    |                 |
        |                   (G)                |
        |                    |                 |
        |             +------+------+          |
        |             |             |          |
        +---| |-------+             |          |     cell 1 (emf E1)
        |    E1                     |          |
        |                           |          |
        +---| |---------------------+----------+     cell 2 (emf E2)
             E2                  (two-way key)

     NOTE: the POSITIVE terminals of the driver cell, of E1 and of E2
     must all be joined to the SAME end A of the wire.


  PROCEDURE

     1.  Close the key K. A steady current flows through AB and sets up
         a uniform potential gradient k along the wire.

     2.  Using the two-way key, bring cell E1 into the circuit. Slide the
         jockey along AB until the galvanometer shows ZERO deflection.
         Let the balancing length be  l1 (measured from A).

     3.  Now bring cell E2 into the circuit instead and find the new
         balancing length  l2 .

     4.  Repeat for several settings of the rheostat and take the mean.


  THEORY

     At the first balance point the p.d. across the length l1 exactly
     balances E1, and no current flows through the galvanometer:

                E1   =   k  l1

     At the second balance point, similarly,

                E2   =   k  l2

     Dividing, the potential gradient k cancels:

                     +----------------------+
                     |    E1        l1      |
                     |   ----  =   ----     |
                     |    E2        l2      |
                     +----------------------+

     If one of the two cells is a standard cell of known emf, the emf of
     the other is obtained directly.


  WHY A POTENTIOMETER IS BETTER THAN A VOLTMETER

     A voltmeter has a large but FINITE resistance. When connected across
     a cell it DRAWS a current I, so the cell loses a p.d. of I r inside
     itself and the voltmeter reads

                V  =  E  -  I r        (which is LESS than E)

     A potentiometer, at the balance point, draws ZERO current from the
     cell being tested (the galvanometer reads zero). With I = 0,

                V  =  E                (the TRUE emf)

     So a potentiometer effectively behaves as a voltmeter of INFINITE
     resistance -- an ideal voltmeter.


  CONDITIONS AND SENSITIVITY

     1.  The emf of the DRIVER cell must be greater than the emf being
         measured, otherwise there is no balance point on the wire.
     2.  The potential gradient can be reduced (using a longer wire or
         a larger rheostat resistance) to make the instrument more
         sensitive.
     3.  The current in the driver circuit must remain constant while
         the two readings are being taken.
```

---

### Q C4
Explain how a potentiometer is used to determine the **internal resistance
of a cell**. Derive the formula used.

**ANSWER:**

```
  CIRCUIT

        +--------| |----/ ------[ Rh ]---------+     driver cell E, key K
        |         E     K                      |
        |                                      |
        A======================================B     potentiometer wire
        |                 |                    |
        |                (G)                   |
        |                 |                    |
        +---| |-----------+                    |     cell under test (E1, r)
        |    E1                                |
        |                                      |
        +------/\/\/-------/ ------------------+
                  R        K1
        (resistance box R with key K1 across the cell)


  PROCEDURE AND THEORY

  STEP 1   Keep the key K1 OPEN.
           The cell E1 then supplies NO current, so the potentiometer
           balances against its full EMF. Let the balancing length be l1 :

                  E   =   k  l1                              .... (1)

  STEP 2   Now CLOSE the key K1 with a known resistance R in the box.
           The cell now sends a current through R, so the potentiometer
           balances against its TERMINAL P.D. V. Let the new balancing
           length be l2 :

                  V   =   k  l2                              .... (2)

  STEP 3   Dividing (1) by (2), the potential gradient k cancels:

                  E        l1
                 ---  =   ----                               .... (3)
                  V        l2

  STEP 4   From the theory of a cell,

                          +-        -+
                          |  E  -  V |
                  r   =   | ---------|  x  R
                          |     V    |
                          +-        -+

                          +-        -+
                          |    E     |
                      =   |  ----- - 1|  x  R
                          |    V     |
                          +-        -+

  STEP 5   Substituting E / V = l1 / l2 from (3),

                          +-           -+
                          |   l1        |
                  r   =   |  ----  -  1 |  x  R
                          |   l2        |
                          +-           -+

                      +----------------------------+
                      |             ( l1  -  l2 )  |
                      |    r   =  R --------------  |
                      |                   l2       |
                      +----------------------------+


  NOTE
     Since l1 is always greater than l2 (the terminal voltage is less
     than the emf), r always comes out POSITIVE.
     The experiment is repeated for several values of R and the mean
     value of r is taken.


  WORKED ILLUSTRATION
     With K1 open,  l1 = 60 cm.  With R = 5 ohm and K1 closed, l2 = 50 cm.

                      ( 60  -  50 )              10
          r   =   5  ---------------   =   5  x  ----   =   1 ohm
                            50                    50
```

---

### Q C5
Define drift velocity. Derive **I = n A e vd**, and hence obtain Ohm's law
and the expression for resistivity **rho = m / (n e^2 tau)**.

**ANSWER:**

```
  DRIFT VELOCITY
     The average velocity with which the free electrons in a conductor
     move under the influence of an applied electric field. Its order of
     magnitude is about 10^-4 m/s.

     In the absence of a field the electrons move at random and there is
     no net flow. When a field E is applied, each electron experiences a
     force  eE  and acquires an acceleration  a = eE/m . Because it
     collides with the lattice ions every tau seconds on average, it only
     builds up a small average velocity

                     e E tau
             vd  =  ---------
                        m


  PART 1 - DERIVATION OF  I = n A e vd

     Let n be the number of free electrons per unit volume and A the
     area of cross-section.

           |<--------- vd t --------->|
           +--------------------------+
           |    .  .   .   .   .  .   |   A
           +--------------------------+
                                        ---> vd

     All electrons within a length  vd t  cross the far face in time t.

           volume of that portion       =  A vd t
           number of electrons in it    =  n A vd t
           charge in it                 =  n A vd t e

                   q       n A vd t e
           I   =  ---  =  ------------  =  n A e vd
                   t            t

                       +-------------------+
                       |   I = n A e vd    |
                       +-------------------+


  PART 2 - DEDUCTION OF OHM'S LAW

     Substituting  vd = e E tau / m  :

                            e E tau        n A e^2 tau
           I  =  n A e  x  ---------  =  --------------- E
                               m                m

     For a conductor of length L across which a p.d. V is applied,
     E = V / L, hence

                  n A e^2 tau       V
           I  =  -------------  x  ---
                       m            L

     Rearranging,
                  V           m L
                 ---  =  --------------  =  a CONSTANT for a given
                  I       n e^2 tau A       conductor at a given
                                            temperature

     Therefore     V  is proportional to  I  , which is OHM'S LAW,
     and the constant is the resistance R.


  PART 3 - RESISTIVITY

     Comparing
                     m L                            rho L
           R  =  --------------      with     R  =  -------
                  n e^2 tau A                          A

     gives
                       +---------------------+
                       |             m       |
                       |   rho  =  --------- |
                       |           n e^2 tau |
                       +---------------------+

     and the conductivity

                              1        n e^2 tau
                  sigma  =  -----  =  -----------
                             rho           m


  PHYSICAL MEANING

     -  More free electrons (larger n)  ->  smaller rho.
     -  More frequent collisions (smaller tau)  ->  larger rho.
     -  Heating a METAL makes the lattice ions vibrate more, so tau
        falls and rho RISES.
     -  Heating a SEMICONDUCTOR frees many more electrons, so n rises
        enormously and rho FALLS.
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

```
  RANK  QUESTION TYPE                                    SECTION   CHANCE
  ----  --------------------------------------------     -------   ---------
   1    Kirchhoff's laws + Wheatstone bridge balance        C       very high
        condition (full derivation)
   2    Potentiometer - principle, comparison of emfs,      C       very high
        why better than a voltmeter
   3    Metre bridge - diagram, theory, precautions         C       very high
   4    Potentiometer - internal resistance of a cell       C       high
   5    Derive  I = n A e vd                                B       very high
   6    Derive  rho = m / (n e^2 tau)                       B       very high
   7    Series and parallel combination derivations         B       high
   8    emf vs terminal p.d. ,  V = E - I r , with a        B       high
        numerical
   9    Grouping of cells (series / parallel / mixed)       B       high
  10    Definitions: drift velocity, mobility, relaxation   A       very high
        time, current density
  11    Define resistivity / conductivity, units            A       very high
  12    Ohm's law statement and its limitations             A       high
  13    Resistor colour code reading                        A       moderate
  14    Temperature coefficient (definition or numerical)   A/B     moderate
  15    Power / bulbs in series vs parallel                 B       moderate
  16    Joule's law, kilowatt-hour, electric fuse           A/B     moderate
  17    Metre bridge or Wheatstone numerical                B       moderate
  18    Kirchhoff two-loop circuit numerical                B       moderate
```

```
  +---------------------------------------------------------------------+
  |  IF YOU PREPARE ONLY RANKS 1, 2, 3, 5 AND 10 YOU CAN STILL WRITE    |
  |  ONE FULL 8-MARK ANSWER, ONE 4-MARK ANSWER AND TWO 2-MARK ANSWERS   |
  |  FROM THIS CHAPTER  =  16 MARKS.                                    |
  +---------------------------------------------------------------------+
```
