# Current Electricity — Competitive Exam Questions (EAPCET / JEE)

This chapter is one of the **highest-yield** chapters for every entrance
exam. The questions are short, formula-driven and repeat almost word for
word year after year.

---

# THE EXAMS AT A GLANCE

```
  +---------------+---------+----------+---------+-----------+-----------+
  |  EXAM         | PHYSICS | MARK PER | NEGATIVE| TOTAL     | LIKELY Qs |
  |               | QUESTNS | CORRECT  | MARKING | PHY MARKS | FROM THIS |
  |               |         |          |         |           | CHAPTER   |
  +---------------+---------+----------+---------+-----------+-----------+
  |  AP EAPCET    |   40    |   + 1    |  NONE   |    40     |   2 to 3  |
  |  TG EAPCET    |   40    |   + 1    |  NONE   |    40     |   2 to 3  |
  |  JEE Main     |   25    |   + 4    |   - 1   |   100     |   1 to 2  |
  |  NEET (if     |   45    |   + 4    |   - 1   |   180     |   2 to 3  |
  |  taken)       |         |          |         |           |           |
  +---------------+---------+----------+---------+-----------+-----------+

  Question counts and marking schemes change from session to session.
  Confirm the current pattern on the official exam websites before the
  exam. Nothing here is tagged to a specific year.
```

```
  +---------------------------------------------------------------------+
  |  THE SINGLE MOST IMPORTANT STRATEGY DIFFERENCE                      |
  |                                                                     |
  |  EAPCET  ->  NO NEGATIVE MARKING.   NEVER leave a blank.            |
  |              Eliminate two options, then guess. A guess is free.    |
  |                                                                     |
  |  JEE     ->  MINUS ONE for a wrong answer.  Guess only when you     |
  |              have eliminated at least two options.                  |
  +---------------------------------------------------------------------+
```

---

# ===============================================================
# PATTERN 1 — CURRENT, CHARGE AND DRIFT VELOCITY
# ===============================================================

### Q 1
The number of electrons passing through a wire per second is
6.25 x 10^18. The current in the wire is

(a) 0.5 A  (b) 1 A  (c) 2 A  (d) 1.6 A

**ANSWER: (b) 1 A**
```
  I  =  n e / t  =  (6.25 x 10^18)(1.6 x 10^-19) / 1

     =  6.25 x 1.6 x 10^-1   =  10 x 10^-1  =  1 A
```

> **SHORTCUT:** 6.25 x 10^18 electrons = exactly 1 coulomb. Memorise this
> number; it turns a calculation into a one-line answer.

---

### Q 2
The charge flowing through a conductor varies as q = 3t^2 + 2t + 1 coulomb.
The current at t = 2 s is

(a) 12 A  (b) 14 A  (c) 17 A  (d) 8 A

**ANSWER: (b) 14 A**
```
  I  =  dq / dt  =  6 t  +  2

  At t = 2 :   I  =  12  +  2  =  14 A
```

> **SHORTCUT:** Whenever q is given as a function of t, the answer is
> always dq/dt. The constant term never matters.

---

### Q 3
A current I flows through a wire of radius r. If the current is doubled and
the radius is halved, the drift velocity becomes

(a) 2 times  (b) 4 times  (c) 8 times  (d) 16 times

**ANSWER: (c) 8 times**
```
                 I
  vd  =  ------------          vd is proportional to  I / A
           n A e                               and A = pi r^2

  I -> 2 I        gives a factor of 2
  r -> r/2  =>  A -> A/4    gives a factor of 4

  Total  =  2  x  4  =  8
```

---

### Q 4
Two wires of the same material carry the same current. Their radii are r
and 2r. The ratio of the drift velocities of the electrons in them is

(a) 1 : 2  (b) 2 : 1  (c) 1 : 4  (d) 4 : 1

**ANSWER: (d) 4 : 1**
```
  vd is inversely proportional to A , and A is proportional to r^2 .

        vd1        A2        (2r)^2        4
       -----  =  -----  =  ----------  =  ---
        vd2        A1         (r)^2        1
```

---

### Q 5
The drift velocity of electrons in a conductor is 2.5 x 10^-4 m/s when the
field is 5 V/m. The mobility of the electrons is

(a) 5 x 10^-5 m^2 V^-1 s^-1  (b) 1.25 x 10^-3
(c) 2 x 10^4  (d) 5 x 10^-4

**ANSWER: (a) 5 x 10^-5 m^2 V^-1 s^-1**
```
            vd        2.5 x 10^-4
  mu   =   ----   =  -------------   =  5 x 10^-5  m^2 V^-1 s^-1
             E             5
```

---

### Q 6
The current density in a wire of area 2 x 10^-6 m^2 carrying a current of
4 A is

(a) 2 x 10^6 A/m^2  (b) 8 x 10^-6  (c) 2 x 10^-6  (d) 5 x 10^5

**ANSWER: (a) 2 x 10^6 A/m^2**
```
        I           4
  J  = ---  =  ------------  =  2 x 10^6  A m^-2
        A        2 x 10^-6
```

> **SHORTCUT:** Dividing by 10^-6 means multiplying by 10^6. Do the powers
> of ten in your head and only then the digits.

---

# ===============================================================
# PATTERN 2 — RESISTANCE, RESISTIVITY AND STRETCHING
# ===============================================================

### Q 7
A wire of resistance 4 ohm is stretched until its length is doubled. Its
new resistance is

(a) 8 ohm  (b) 2 ohm  (c) 16 ohm  (d) 4 ohm

**ANSWER: (c) 16 ohm**
```
  Volume constant  ->  R'  =  n^2 R  with n = 2

        R'  =  4  x  4  =  16 ohm
```

> **SHORTCUT:** STRETCHING is always **n squared**, never n. If the radius
> is changed instead, use **n to the fourth power**.

---

### Q 8
A wire of resistance 25 ohm is cut into 5 equal pieces which are then
joined in parallel. The effective resistance is

(a) 5 ohm  (b) 1 ohm  (c) 25 ohm  (d) 0.2 ohm

**ANSWER: (b) 1 ohm**
```
  Each piece:   25 / 5  =  5 ohm
  Five 5-ohm pieces in parallel:  5 / 5  =  1 ohm

  Shortcut formula:   R / n^2  =  25 / 25  =  1 ohm
```

---

### Q 9
A uniform wire of resistance 8 ohm is bent into a circle. The resistance
between two diametrically opposite points is

(a) 8 ohm  (b) 4 ohm  (c) 2 ohm  (d) 16 ohm

**ANSWER: (c) 2 ohm**
```
        +---/\/\/---+
        |    4 ohm  |
     A -+           +- B      each half = 8 / 2 = 4 ohm
        |    4 ohm  |         the two halves are in PARALLEL
        +---/\/\/---+

                4 x 4       16
        R  =  ---------  =  ----  =  2 ohm
                4 + 4        8
```

> **SHORTCUT:** For a ring of total resistance R, the resistance across a
> diameter is always **R / 4**.

---

### Q 10
The resistivity of a conductor depends on

(a) its length  (b) its area of cross-section
(c) the material and the temperature  (d) the current through it

**ANSWER: (c) the material and the temperature**
```
  rho = R A / L  is a property of the MATERIAL only. Changing the length
  or thickness changes R but never rho.
```

---

### Q 11
The SI unit of electrical conductivity is

(a) ohm m  (b) ohm^-1 m^-1  (c) ohm m^-1  (d) ohm^-1 m

**ANSWER: (b) ohm^-1 m^-1**
```
  sigma = 1 / rho , and rho is measured in ohm metre,
  so sigma is measured in ohm^-1 m^-1 (also written S/m).
```

---

### Q 12
The relaxation time of the electrons in a metal is 2 x 10^-14 s and the
number density is 8 x 10^28 m^-3. The resistivity is about
(m = 9 x 10^-31 kg, e = 1.6 x 10^-19 C)

(a) 2.2 x 10^-8 ohm m  (b) 4.4 x 10^-8  (c) 1.1 x 10^-8  (d) 3.3 x 10^-6

**ANSWER: (a) 2.2 x 10^-8 ohm m**
```
                m
  rho  =  -----------
           n e^2 tau

  n e^2 tau = (8 x 10^28)(1.6 x 10^-19)^2 (2 x 10^-14)
            = (8 x 10^28)(2.56 x 10^-38)(2 x 10^-14)
            = 40.96 x 10^(28 - 38 - 14)
            = 4.1 x 10^-23

              9 x 10^-31
  rho  =   --------------   =   2.2 x 10^-8  ohm m
              4.1 x 10^-23
```

---

# ===============================================================
# PATTERN 3 — SERIES AND PARALLEL NETWORKS
# ===============================================================

### Q 13
Three resistors of 3 ohm each are available. The ratio of the maximum to
the minimum resistance obtainable from them is

(a) 3 : 1  (b) 6 : 1  (c) 9 : 1  (d) 1 : 9

**ANSWER: (c) 9 : 1**
```
  Maximum  =  all in SERIES     =  3 + 3 + 3  =  9 ohm
  Minimum  =  all in PARALLEL   =  3 / 3      =  1 ohm

  Ratio  =  9 : 1
```

> **SHORTCUT:** For **n** equal resistors, max/min is always **n^2**.

---

### Q 14
In the network shown, the galvanometer arm carries no current. Find the
equivalent resistance between A and C.

```
                     B
                   /   \
           10 ohm /     \ 10 ohm
                 /       \
             A ----/\/\/---- C
                 \ 5 ohm  /
           10 ohm \     / 10 ohm
                   \   /
                     D
```

(a) 5 ohm  (b) 10 ohm  (c) 20 ohm  (d) 15 ohm

**ANSWER: (b) 10 ohm**
```
  Check the bridge condition:   P/Q  =  10/10  =  1
                                R/S  =  10/10  =  1
  They are EQUAL, so the bridge is BALANCED and the 5 ohm bridge arm
  carries NO current. Remove it.

  Left branch  A-B-C  =  10 + 10  =  20 ohm
  Right branch A-D-C  =  10 + 10  =  20 ohm
  These two are in parallel:      20 x 20 / 40  =  10 ohm
```

> **SHORTCUT:** The moment you see a five-resistor "diamond", test
> P/Q = R/S. If it balances, **delete the middle resistor** and the
> problem collapses into series-parallel. This single trick appears in
> almost every entrance paper.

---

### Q 15
Twelve identical wires, each of resistance 12 ohm, form the edges of a
cube. The resistance across a **body diagonal** is

(a) 5 ohm  (b) 10 ohm  (c) 7 ohm  (d) 9 ohm

**ANSWER: (b) 10 ohm**
```
  Standard results for a cube of edge resistance R :

        body diagonal (longest)  =  5 R / 6
        face diagonal            =  3 R / 4
        along one edge           =  7 R / 12

  Here R = 12 ohm :     5 x 12 / 6  =  10 ohm
```

> **SHORTCUT:** Memorise the three cube fractions **5/6, 3/4, 7/12**.
> There is no time to derive them in an exam hall.

---

### Q 16
Two resistors of 6 ohm and 3 ohm are connected in parallel across a 12 V
supply. The current drawn from the supply is

(a) 2 A  (b) 4 A  (c) 6 A  (d) 8 A

**ANSWER: (c) 6 A**
```
             6 x 3       18
  Rp  =   ---------  =  ----  =  2 ohm
             6 + 3        9

          V       12
  I  =   ---  =  ----  =  6 A
          Rp       2
```

---

### Q 17
A 4 ohm and a 6 ohm resistor are in series across 20 V. The p.d. across the
6 ohm resistor is

(a) 8 V  (b) 12 V  (c) 10 V  (d) 20 V

**ANSWER: (b) 12 V**
```
  Voltage divider:
                       R2                 6
        V2  =  V  x ---------  =  20 x  -----  =  12 V
                     R1 + R2             10
```

> **SHORTCUT:** In series, the voltage splits **in the ratio of the
> resistances**. In parallel, the current splits in the **inverse** ratio.
> You never need to find the current first.

---

# ===============================================================
# PATTERN 4 — CELLS, EMF AND INTERNAL RESISTANCE
# ===============================================================

### Q 18
A cell of emf 12 V and internal resistance 1 ohm drives a current through
a 5 ohm resistor. The terminal voltage is

(a) 12 V  (b) 10 V  (c) 11 V  (d) 2 V

**ANSWER: (b) 10 V**
```
            E          12
  I  =  --------  =  ------  =  2 A
         R + r        5 + 1

  V  =  E - I r  =  12  -  (2)(1)  =  10 V

  (check:  V = I R = 2 x 5 = 10 V )
```

> **SHORTCUT:** The terminal voltage is ALWAYS less than the emf while
> current is drawn. If your answer equals E, you forgot r.

---

### Q 19
The terminal voltage of a cell becomes zero when

(a) the external resistance is infinite  (b) the cell is short-circuited
(c) the cell is being charged  (d) no current flows

**ANSWER: (b) the cell is short-circuited**
```
  With R = 0 :   I = E / r  (maximum)  and  V = E - I r = E - E = 0
```

---

### Q 20
Ten cells, each of emf E, are connected in series but **two** of them have
their terminals reversed. The net emf is

(a) 10 E  (b) 8 E  (c) 6 E  (d) 2 E

**ANSWER: (c) 6 E**
```
  Net emf  =  ( n  -  2 m ) E     with n = 10 , m = 2 reversed cells

           =  ( 10  -  4 ) E  =  6 E
```

> **SHORTCUT:** Each reversed cell costs you **2E**, not E — it cancels
> its own contribution and one more.

---

### Q 21
Twenty-four cells, each of emf 1.5 V and internal resistance 0.5 ohm, are
to be arranged in m rows of n cells to give the maximum current through an
external resistance of 3 ohm. The correct arrangement and the current are

(a) m = 2, n = 12, I = 3 A  (b) m = 4, n = 6, I = 2 A
(c) m = 3, n = 8, I = 4 A   (d) m = 6, n = 4, I = 1 A

**ANSWER: (a) m = 2, n = 12, I = 3 A**
```
  STEP 1   Maximum current when   R  =  n r / m

              3  =  n (0.5) / m       ->    n  =  6 m

  STEP 2   Also  m n = 24            ->    m (6 m) = 24  ->  m^2 = 4
                                           m = 2  and  n = 12

  STEP 3            m n E             24 x 1.5           36
           I  =  -----------  =  ----------------- =  ------  =  3 A
                  m R + n r       2(3) + 12(0.5)         12
```

---

### Q 22
Two cells of emf 2 V and 4 V with internal resistances 1 ohm and 2 ohm
respectively are connected in parallel. The equivalent emf is

(a) 6 V  (b) 3 V  (c) 8/3 V  (d) 2 V

**ANSWER: (c) 8 / 3 V (about 2.67 V)**
```
            E1 r2  +  E2 r1        (2)(2)  +  (4)(1)        8
  E(eq)  = ------------------  =  --------------------  =  ---  V
                r1 + r2                  1 + 2               3

                 r1 r2         1 x 2        2
  r(eq)  =    ---------  =  ---------  =  -----  ohm
                r1 + r2       1 + 2         3
```

---

# ===============================================================
# PATTERN 5 — KIRCHHOFF, WHEATSTONE BRIDGE, METRE BRIDGE
# ===============================================================

### Q 23
Kirchhoff's junction law and loop law are based respectively on the
conservation of

(a) energy and charge  (b) charge and energy
(c) charge and momentum  (d) mass and energy

**ANSWER: (b) charge and energy**
```
  JUNCTION rule  ->  charge cannot accumulate  ->  conservation of CHARGE
  LOOP rule      ->  potential returns to its value  ->  conservation of
                     ENERGY
```

> **SHORTCUT:** Junction = **charge**. Loop = **energy**. Alphabetical
> order matches: C before E, J before L.

---

### Q 24
In a balanced Wheatstone bridge P = 4 ohm, Q = 6 ohm and R = 8 ohm. The
value of S is

(a) 12 ohm  (b) 6 ohm  (c) 3 ohm  (d) 16 ohm

**ANSWER: (a) 12 ohm**
```
    P       R                    Q R        6  x  8
   ---  =  ---     ->    S  =  -------  =  ---------  =  12 ohm
    Q       S                     P            4
```

---

### Q 25
In a Wheatstone bridge at balance, the current through the galvanometer

(a) is maximum  (b) is zero
(c) depends on the emf of the cell  (d) equals the current from the cell

**ANSWER: (b) is zero**
```
  Balance means the two junctions across the galvanometer are at the
  SAME potential, so no current flows through it. This is why the method
  is called a NULL method and why the emf of the cell does not matter.
```

---

### Q 26
In a metre bridge the balance point is at 20 cm from the left end when the
resistance in the left gap is 2 ohm. The unknown resistance in the right
gap is

(a) 4 ohm  (b) 6 ohm  (c) 8 ohm  (d) 0.5 ohm

**ANSWER: (c) 8 ohm**
```
                 100 - l              100 - 20            80
  S   =   R  x  ---------   =   2 x  ----------  =  2 x  ----  =  8 ohm
                     l                    20              20
```

---

### Q 27
In the above metre bridge, if the two resistances are interchanged, the new
balance point is at

(a) 20 cm  (b) 40 cm  (c) 60 cm  (d) 80 cm

**ANSWER: (d) 80 cm**
```
  Interchanging swaps l with (100 - l) :   new l = 100 - 20 = 80 cm
```

> **SHORTCUT:** "Interchange the gaps" always means "**subtract from
> 100**". Never redo the calculation.

---

### Q 28
The metre bridge wire is made of manganin or constantan mainly because

(a) they are cheap  (b) they have a very low resistivity
(c) their temperature coefficient of resistance is almost zero
(d) they are good conductors

**ANSWER: (c) their temperature coefficient of resistance is almost zero**

so the resistance of the bridge wire does not change as the current warms
it, and the balance point stays fixed.

---

# ===============================================================
# PATTERN 6 — POTENTIOMETER
# ===============================================================

### Q 29
A potentiometer wire of length 4 m has a p.d. of 2 V across it. The
potential gradient is

(a) 0.5 V/m  (b) 2 V/m  (c) 8 V/m  (d) 0.25 V/m

**ANSWER: (a) 0.5 V/m**
```
        V        2
  k =  ---  =  -----  =  0.5  V/m
        L        4
```

---

### Q 30
A cell of emf 1.5 V balances at 30 cm on a potentiometer wire. Another cell
balances at 40 cm. The emf of the second cell is

(a) 1.5 V  (b) 2.0 V  (c) 1.125 V  (d) 2.5 V

**ANSWER: (b) 2.0 V**
```
    E1       l1                     l2               40
   ----  =  ----   ->   E2  =  E1 ------  =  1.5 x  ----  =  2 V
    E2       l2                     l1               30
```

> **SHORTCUT:** Emf is directly proportional to balancing length. Longer
> length always means bigger emf. If your answer disobeys that, you have
> the fraction upside down.

---

### Q 31
In a potentiometer experiment the balancing length is 80 cm with the key
open and 60 cm with a 10 ohm resistor across the cell. The internal
resistance of the cell is

(a) 2.5 ohm  (b) 3.33 ohm  (c) 5 ohm  (d) 1.25 ohm

**ANSWER: (b) 3.33 ohm**
```
              ( l1  -  l2 )             ( 80  -  60 )           20
  r  =  R  x  --------------  =  10  x  --------------  = 10 x ----
                    l2                        60                60

     =  3.33 ohm
```

---

### Q 32
A potentiometer shows no balance point anywhere on the wire. The most
likely reason is

(a) the galvanometer is faulty
(b) the emf of the cell being tested is greater than the p.d. across the
    whole wire
(c) the wire is too long
(d) the driver current is too small

**ANSWER: (b) the emf of the cell being tested is greater than the p.d.
across the whole wire**
```
  The wire can only balance an emf up to  k L . If the test emf exceeds
  that, the galvanometer deflects the SAME way at every point.

  Other possible causes to remember:
     - the positive terminals of the two cells are not joined to the
       same end of the wire
     - the driver-cell circuit is broken
```

---

### Q 33
A potentiometer measures emf more accurately than a voltmeter because

(a) it has a longer wire  (b) it draws no current at balance
(c) it uses a galvanometer  (d) it has a rheostat

**ANSWER: (b) it draws no current at balance**
```
  With I = 0, there is no I r drop inside the cell, so the reading is
  the TRUE emf, not E - I r . The potentiometer acts like a voltmeter of
  INFINITE resistance.
```

---

# ===============================================================
# PATTERN 7 — POWER, ENERGY AND HEATING
# ===============================================================

### Q 34
A bulb is marked 100 W, 250 V. Its resistance is

(a) 625 ohm  (b) 250 ohm  (c) 400 ohm  (d) 2.5 ohm

**ANSWER: (a) 625 ohm**
```
         V^2       250 x 250       62500
  R  =  -----  =  -----------  =  -------  =  625 ohm
          P           100           100
```

> **SHORTCUT:** For a rated appliance always use **R = V^2 / P** and
> **I = P / V**. Never use V = IR first.

---

### Q 35
Two bulbs rated 100 W, 220 V and 60 W, 220 V are connected in series across
220 V. Which glows brighter?

(a) the 100 W bulb  (b) the 60 W bulb
(c) both equally  (d) neither glows

**ANSWER: (b) the 60 W bulb**
```
  R = V^2 / P , so the LOWER-wattage bulb has the HIGHER resistance:

        R(60)  = 48400 / 60  = 807 ohm
        R(100) = 48400 / 100 = 484 ohm

  In series the current is the same, and  P = I^2 R , so the bulb with
  the larger R dissipates more power  ->  the 60 W bulb is brighter.
```

> **SHORTCUT:**
> **SERIES  -> the LOWER-wattage bulb is brighter.**
> **PARALLEL -> the HIGHER-wattage bulb is brighter.**
> Learn this pair as a single sentence. It is asked every year.

---

### Q 36
A heating coil is cut into two equal halves and the two halves are
connected in parallel across the same supply. The heat produced per second
becomes

(a) half  (b) double  (c) four times  (d) unchanged

**ANSWER: (c) four times**
```
  Each half has resistance  R/2 .
  Two halves in parallel    =  R/4 .

              V^2                          V^2
  Original P = -----  ,   New  P'  =  -----------  =  4  x  P
                R                        R / 4
```

---

### Q 37
Five bulbs of 40 W each are used for 5 hours a day for 30 days. If one unit
costs Rs 4, the bill is

(a) Rs 60  (b) Rs 120  (c) Rs 150  (d) Rs 240

**ANSWER: (b) Rs 120**
```
  Energy  =  5  x  40 W  x  5 h  x  30 days  =  30000 Wh

  Units   =  30000 / 1000  =  30 kWh

  Cost    =  30  x  4  =  Rs 120
```

---

### Q 38
A cell of emf 10 V and internal resistance 2 ohm delivers maximum power to
an external resistance. That maximum power is

(a) 50 W  (b) 25 W  (c) 12.5 W  (d) 5 W

**ANSWER: (c) 12.5 W**
```
  Maximum power when  R = r = 2 ohm .

              E^2        10 x 10        100
  P(max)  =  -----  =  -----------  =  -----  =  12.5 W
              4 r         4 x 2          8
```

> **SHORTCUT:** Maximum power transfer is always **E^2 / 4r**, and the
> efficiency at that point is always **50 %**.

---

### Q 39
The heat produced in a resistor is doubled when

(a) the current is doubled  (b) the current is increased by sqrt(2) times
(c) the time is halved  (d) the resistance is halved

**ANSWER: (b) the current is increased by sqrt(2) times**
```
  H = I^2 R t .  H is proportional to I^2 .

  To double H, I must become sqrt(2) times.
  (Doubling I would make H FOUR times.)
```

---

# ===============================================================
# PATTERN 8 — TEMPERATURE EFFECT AND COLOUR CODE
# ===============================================================

### Q 40
The resistance of a wire is 5 ohm at 0 degree C and 6 ohm at 100 degree C.
Its temperature coefficient of resistance is

(a) 0.002 /deg C  (b) 0.02 /deg C  (c) 0.2 /deg C  (d) 0.0002 /deg C

**ANSWER: (a) 0.002 per degree C**
```
                R2 - R1              6 - 5             1
  alpha  =  ---------------  =  --------------  =  ---------  =  0.002
              R1 (t2 - t1)        5 (100 - 0)         500
```

---

### Q 41
On heating, the resistance of a semiconductor

(a) increases  (b) decreases  (c) stays the same  (d) becomes zero

**ANSWER: (b) decreases**
```
  Heating a semiconductor liberates a very large number of extra charge
  carriers, so n rises sharply. Since rho = m/(n e^2 tau), rho falls and
  so does R. Semiconductors therefore have a NEGATIVE alpha.

  (In a metal, n does not change but tau falls, so R INCREASES.)
```

---

### Q 42
A 4700 ohm resistor with a tolerance of ± 5 % carries the colour bands

(a) Yellow Violet Red Gold  (b) Yellow Violet Orange Gold
(c) Green Blue Red Silver   (d) Yellow Violet Brown Gold

**ANSWER: (a) Yellow Violet Red Gold**
```
  4700  =  47  x  10^2

     4      ->  Yellow
     7      ->  Violet
     10^2   ->  Red
     ± 5 %  ->  Gold
```

> **SHORTCUT:** Convert the value to the form **(two digits) x 10^k**
> FIRST. The third band is always just k.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +---------------------------------+----------------------------------+
  |  IF YOU SEE THIS ...            |  DO THIS IMMEDIATELY             |
  +---------------------------------+----------------------------------+
  |  "wire is stretched"            |  R' = n^2 R  (n^4 if radius)     |
  +---------------------------------+----------------------------------+
  |  "cut into n pieces, joined     |  R / n^2                         |
  |   in parallel"                  |                                  |
  +---------------------------------+----------------------------------+
  |  "ring / circle, opposite ends" |  R / 4                           |
  +---------------------------------+----------------------------------+
  |  a five-resistor diamond        |  test P/Q = R/S ; if balanced,   |
  |                                 |  DELETE the middle resistor      |
  +---------------------------------+----------------------------------+
  |  cube of 12 wires               |  body 5R/6 , face 3R/4 ,         |
  |                                 |  edge 7R/12                      |
  +---------------------------------+----------------------------------+
  |  n equal resistors, max/min     |  n^2                             |
  +---------------------------------+----------------------------------+
  |  a cell with internal           |  I = E/(R+r) , V = E - I r       |
  |  resistance                     |  (V is ALWAYS less than E)       |
  +---------------------------------+----------------------------------+
  |  m cells reversed in a series   |  net emf = (n - 2m) E            |
  |  row of n                       |                                  |
  +---------------------------------+----------------------------------+
  |  "maximum current from a mixed  |  R = n r / m                     |
  |   grouping"                     |                                  |
  +---------------------------------+----------------------------------+
  |  "gaps interchanged" in a       |  new l = 100 - l                 |
  |  metre bridge                   |                                  |
  +---------------------------------+----------------------------------+
  |  potentiometer, two cells       |  E1 / E2 = l1 / l2               |
  +---------------------------------+----------------------------------+
  |  potentiometer, key open then   |  r = R (l1 - l2) / l2            |
  |  closed                         |                                  |
  +---------------------------------+----------------------------------+
  |  "no balance point"             |  test emf > p.d. across the wire |
  +---------------------------------+----------------------------------+
  |  a bulb marked "P watt, V volt" |  R = V^2 / P  ,  I = P / V       |
  +---------------------------------+----------------------------------+
  |  two bulbs in SERIES            |  the LOWER-wattage one is        |
  |                                 |  brighter                        |
  +---------------------------------+----------------------------------+
  |  two bulbs in PARALLEL          |  the HIGHER-wattage one is       |
  |                                 |  brighter                        |
  +---------------------------------+----------------------------------+
  |  "maximum power delivered"      |  R = r , P(max) = E^2 / 4r       |
  +---------------------------------+----------------------------------+
  |  heating coil halved and        |  power becomes 4 times           |
  |  paralleled                     |                                  |
  +---------------------------------+----------------------------------+
  |  "junction law / loop law is    |  junction = CHARGE               |
  |   based on"                     |  loop     = ENERGY               |
  +---------------------------------+----------------------------------+
  |  q given as a function of t     |  I = dq / dt                     |
  +---------------------------------+----------------------------------+
  |  1 coulomb of charge            |  6.25 x 10^18 electrons          |
  +---------------------------------+----------------------------------+
```

```
  +---------------------------------------------------------------------+
  |  THE 60-SECOND CHECK BEFORE YOU MOVE ON                             |
  |                                                                     |
  |   1.  Is my PARALLEL answer smaller than the smallest resistor?     |
  |   2.  Is my SERIES answer bigger than the biggest resistor?         |
  |   3.  Is V less than E whenever current is flowing?                 |
  |   4.  Did I convert mm^2 to 10^-6 m^2 and mA to 10^-3 A?            |
  |   5.  EAPCET: have I left any question blank? Do NOT. Guess.        |
  +---------------------------------------------------------------------+
```
