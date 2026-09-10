# Electrochemistry and Chemical Kinetics — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.
Nothing here assumes you remember anything from Class 10.

**This chapter is two chapters in one.**
TOPICS 1 to 16 are **ELECTROCHEMISTRY**.
TOPICS 17 to 26 are **CHEMICAL KINETICS**.
Finish the first half completely before you start the second.

---
---

# ==========================================================
# HALF A — ELECTROCHEMISTRY
# ==========================================================

---

# TOPIC 1 — The one idea the whole first half is built on

Every reaction in this half is a **REDOX** reaction. That word is just two
words squashed together: **RED**uction + **OX**idation.

```
  OXIDATION   =   LOSS of electrons        (the substance gives electrons away)
  REDUCTION   =   GAIN of electrons        (the substance takes electrons in)

  MEMORY:     O I L      R I G
              Oxidation Is Loss , Reduction Is Gain
```

Look at the simplest one. Drop a strip of zinc into blue copper sulphate
solution. The blue colour fades and a brown coating appears on the zinc.

```
      Zn(s)   +   Cu2+(aq)    ---->    Zn2+(aq)   +   Cu(s)
```

Split it into two **HALF REACTIONS**:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   OXIDATION half   Zn      ---->   Zn2+   +   2 e-                   |
  |                    (zinc LOSES 2 electrons)                          |
  |                                                                      |
  |   REDUCTION half   Cu2+  +  2 e-   ---->   Cu                        |
  |                    (copper ion GAINS 2 electrons)                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Two more words you will meet in every question:

```
  OXIDISING AGENT   -  the one that GETS reduced   (here: Cu2+)
                       It steals electrons, so it oxidises the other one.

  REDUCING AGENT    -  the one that GETS oxidised  (here: Zn)
                       It hands electrons over, so it reduces the other one.
```

**Why this matters:** if zinc and copper sulphate touch directly, the
electrons jump straight across and all you get is heat. If you **separate**
the two half reactions into two beakers and connect them with a wire, the
electrons are **forced to travel through the wire**. Electrons moving through
a wire is exactly what electricity is. That single trick is the whole of
electrochemistry.

## WORKED EXAMPLE 1

In the reaction `2 Al + 3 Cu2+ ---> 2 Al3+ + 3 Cu`, identify what is
oxidised, what is reduced, and how many electrons are transferred.

```
  Al  ---->  Al3+  +  3 e-           Al goes from 0 to +3
                                     it LOST electrons  ->  OXIDISED
                                     so Al is the REDUCING AGENT

  Cu2+  +  2 e-  ---->  Cu           Cu goes from +2 to 0
                                     it GAINED electrons ->  REDUCED
                                     so Cu2+ is the OXIDISING AGENT

  Balance the electrons:
      2 Al   gives   2 x 3  =  6 electrons
      3 Cu2+ takes   3 x 2  =  6 electrons          MATCH.

  Therefore  n = 6 electrons are transferred.
```

> **TRAP:** `n` in every formula of this chapter is the number of electrons in
> the **BALANCED** overall equation, not the charge on one ion. In the example
> above `n = 6`, not 2 and not 3.

---

# TOPIC 2 — Two kinds of cells

An **electrochemical cell** is any device where a redox reaction and an
electric current are linked. There are exactly two kinds and they are
opposites.

```
  +-----------------------+------------------------+-----------------------+
  |                       |  GALVANIC (VOLTAIC)    |  ELECTROLYTIC CELL    |
  |                       |  CELL                  |                       |
  +-----------------------+------------------------+-----------------------+
  | What it does          | chemical energy        | electrical energy     |
  |                       | ---->  electrical      | ---->  chemical       |
  +-----------------------+------------------------+-----------------------+
  | The reaction is       | SPONTANEOUS            | NON-spontaneous       |
  |                       | (happens by itself)    | (must be forced)      |
  +-----------------------+------------------------+-----------------------+
  | E(cell)               | POSITIVE  (+)          | NEGATIVE, needs an    |
  |                       |                        | outside battery       |
  +-----------------------+------------------------+-----------------------+
  | delta G               | NEGATIVE  (-)          | POSITIVE  (+)         |
  +-----------------------+------------------------+-----------------------+
  | ANODE                 | NEGATIVE terminal      | POSITIVE terminal     |
  +-----------------------+------------------------+-----------------------+
  | CATHODE               | POSITIVE terminal      | NEGATIVE terminal     |
  +-----------------------+------------------------+-----------------------+
  | Two electrolytes?     | YES - two separate     | NO - one container,   |
  |                       | beakers + salt bridge  | one electrolyte       |
  +-----------------------+------------------------+-----------------------+
  | Examples              | Daniell cell, dry      | electroplating,       |
  |                       | cell, car battery      | electrolysis of NaCl, |
  |                       | while it RUNS          | car battery while it  |
  |                       |                        | CHARGES               |
  +-----------------------+------------------------+-----------------------+
```

The one rule that never changes, in **both** kinds of cell:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     ANODE      =   where  OXIDATION  happens    (A and O, vowels)    |
  |     CATHODE    =   where  REDUCTION  happens    (C and R, consonants)|
  |                                                                      |
  |     Electrons always LEAVE the anode and ENTER at the cathode.       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## WORKED EXAMPLE 2

A cell has `E(cell) = +1.10 V` and transfers 2 electrons. Is it galvanic or
electrolytic? Find delta G.

```
  delta G  =  - n F E

           =  - ( 2 ) ( 96500 ) ( 1.10 )

           =  - 212300  J

           =  - 212.3   kJ

  delta G is NEGATIVE  ->  the reaction is SPONTANEOUS
                       ->  it is a GALVANIC CELL.
```

> **TRAP:** the sign of the anode flips between the two cells. In a galvanic
> cell the anode is **negative**; in an electrolytic cell the anode is
> **positive**. But oxidation is at the anode in **both**. Learn the reaction,
> not the sign.

---

# TOPIC 3 — The DANIELL CELL (draw this in every long answer)

This is the cell BIEAP asks about again and again. Learn to draw it in
two minutes.

```
                    e-  <----------------------------  e-
                    |         V O L T M E T E R          |
                    |    +---------------------+         |
                    |    |        1.10 V       |         |
                    +----|                     |---------+
                    |    +---------------------+         |
                    |                                    |
                    |         SALT BRIDGE                |
                    |     +------------------+           |
                    |     |   KCl in agar    |           |
              +-----+-----+---+          +---+-----+-----+
              |     |         |          |         |     |
              |  +--+--+      |          |      +--+--+  |
              |  |     |      |          |      |     |  |
              |  | Zn  |      |          |      | Cu  |  |
              |  | rod |      |          |      | rod |  |
              |  |     |      |          |      |     |  |
              |  |     |      |          |      |     |  |
              |  +-----+      |          |      +-----+  |
              |               |          |               |
              |  ZnSO4 (1 M)  |          |  CuSO4 (1 M)  |
              |  ~ ~ ~ ~ ~ ~  |          |  ~ ~ ~ ~ ~ ~  |
              |  ~ ~ ~ ~ ~ ~  |          |  ~ ~ ~ ~ ~ ~  |
              +---------------+          +---------------+

                 ANODE (-)                  CATHODE (+)
               OXIDATION here             REDUCTION here
            Zn -> Zn2+ + 2e-            Cu2+ + 2e- -> Cu
            zinc rod gets THINNER       copper rod gets THICKER
                                        blue colour FADES
```

**Everything that happens, in order:**

```
  1.  At the ZINC rod, zinc atoms dissolve:   Zn  ->  Zn2+  +  2 e-
      The 2 electrons are left behind on the metal rod.

  2.  Those electrons push out along the WIRE, through the voltmeter,
      to the copper rod.

  3.  At the COPPER rod, Cu2+ ions from the solution grab the electrons:
      Cu2+  +  2 e-  ->  Cu.  Copper metal plates onto the rod.

  4.  Left beaker is now building up EXTRA POSITIVE charge (extra Zn2+).
      Right beaker is losing positive charge, so it goes NEGATIVE.
      If nothing fixed this, the whole thing would stop in a second.

  5.  The SALT BRIDGE fixes it. Its K+ ions move RIGHT (into the beaker
      going negative) and its Cl- ions move LEFT (into the beaker going
      positive). Both beakers stay neutral and the current keeps flowing.
```

**Overall cell reaction:**

```
       Zn(s)   +   Cu2+(aq)    ---->    Zn2+(aq)   +   Cu(s)

       E0(cell)  =  + 1.10 V
```

## THE SALT BRIDGE — the 2-mark question that comes every year

```
  WHAT IT IS
  A U-shaped glass tube packed with a paste of agar-agar (or gelatin)
  saturated with an INERT electrolyte - KCl , KNO3 or NH4NO3.

  WHY THOSE SALTS?  Because for K+ and Cl- (and for NH4+ and NO3-) the
  cation and the anion move at almost the SAME SPEED, and neither of them
  reacts with the electrode solutions.

  ITS FOUR FUNCTIONS - write all four, one mark each:

    1.  It COMPLETES the electrical circuit - it lets the current pass
        through the solutions.
    2.  It MAINTAINS ELECTRICAL NEUTRALITY in both half cells by supplying
        ions to whichever side needs them.
    3.  It PREVENTS the two solutions from MIXING with each other.
    4.  It ELIMINATES the LIQUID JUNCTION POTENTIAL that would otherwise
        appear where two different solutions touch.
```

## WORKED EXAMPLE 3

The standard electrode potentials are `E0(Zn2+/Zn) = -0.76 V` and
`E0(Cu2+/Cu) = +0.34 V`. Find the EMF of the Daniell cell.

```
  Which one is the anode?  The MORE NEGATIVE one is oxidised.
      -0.76  is more negative than  +0.34    ->   ZINC is the ANODE
                                              ->   COPPER is the CATHODE

  E0(cell)  =  E0(cathode)  -  E0(anode)

            =  ( + 0.34 )  -  ( - 0.76 )

            =  0.34  +  0.76

            =  + 1.10  V

  POSITIVE, so the reaction is spontaneous. Correct for a Daniell cell.
```

> **TRAP:** it is minus, then minus a minus becomes plus. Students write
> `0.34 - 0.76 = -0.42 V` and lose the whole question. **Both values in the
> formula must be REDUCTION potentials, and the anode value is SUBTRACTED
> with its own sign.**

---

# TOPIC 4 — Cell notation (the short-hand)

Instead of drawing the cell every time, chemists write a line.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |          ANODE  |  ANODE ION   ||   CATHODE ION  |  CATHODE          |
  |                                                                      |
  |          Zn  |  Zn2+ (1 M)    ||   Cu2+ (1 M)  |  Cu                 |
  |                                                                      |
  +----------------------------------------------------------------------+

  RULES
    *  ANODE is always written on the LEFT.  (A comes before C. Left to right.)
    *  CATHODE is always written on the RIGHT.
    *  A SINGLE vertical line  |   means a phase boundary
       (solid metal touching its solution).
    *  A DOUBLE vertical line  ||  means the SALT BRIDGE.
    *  Concentrations are written in brackets. If not given, assume 1 M.
    *  On the left the METAL comes first, then the ion.
       On the right the ION comes first, then the metal.
       (Everything reads outward from the salt bridge.)
```

More examples:

```
  Mg | Mg2+ (1 M) || Ag+ (1 M) | Ag

  Pt , H2 (1 bar) | H+ (1 M) || Cu2+ (1 M) | Cu

  Fe | Fe2+ (0.1 M) || H+ (1 M) | H2 (1 bar) , Pt
```

If a half cell has **no solid metal of its own** (for example a gas, or a
pair of ions like Fe2+/Fe3+), an **inert electrode** — Pt or graphite — is
added to carry the electrons, and it is written at the outer end.

## WORKED EXAMPLE 4

Write the cell notation for the reaction
`Mg(s) + 2 Ag+(aq) ---> Mg2+(aq) + 2 Ag(s)`, and find E0(cell) given
`E0(Mg2+/Mg) = -2.37 V` and `E0(Ag+/Ag) = +0.80 V`.

```
  STEP 1  Who is oxidised?   Mg  ->  Mg2+ + 2e-      so Mg is the ANODE.
          Who is reduced?    Ag+ + e- -> Ag          so Ag is the CATHODE.

  STEP 2  Notation:

              Mg | Mg2+ (1 M) || Ag+ (1 M) | Ag

  STEP 3  E0(cell)  =  E0(cathode) - E0(anode)

                    =  ( + 0.80 )  -  ( - 2.37 )

                    =  + 3.17  V
```

> **TRAP:** never multiply an electrode potential by the number of electrons.
> Even though 2 Ag+ ions are reduced here, `E0(Ag+/Ag)` stays `+0.80 V`.
> Electrode potential is an **intensive** property — it does not depend on
> how much material you take.

---

# TOPIC 5 — Electrode potential and the STANDARD HYDROGEN ELECTRODE

## The problem

Dip a metal rod in a solution of its own ions and a small voltage builds up
between the metal and the solution. That voltage is the **electrode
potential**. The trouble is that you **cannot measure it on its own** — a
voltmeter needs two connections, so you can only ever measure the
**difference** between two electrodes.

## The fix

Pick one electrode, declare its potential to be **exactly zero**, and measure
everything else against it. The chosen one is the
**STANDARD HYDROGEN ELECTRODE (SHE)**, also called the normal hydrogen
electrode.

```
                          |
                     H2 gas IN
                     at 1 bar
                          |
                          v
                  +-------+-------+
                  |               |
                  |   +-------+   |   <---- glass jacket
                  |   |       |   |
                  |   |  ***  |   |   <---- platinum foil coated with
                  |   |  ***  |   |         PLATINUM BLACK
                  |   |  ***  |   |         (attached to a Pt wire)
                  |   |       |   |
                  |   +-------+   |
                  |    o  o  o    |   <---- bubbles of H2 gas
                  |  o   o   o    |
                  |  ~ ~ ~ ~ ~ ~  |
                  |  ~ ~ ~ ~ ~ ~  |   <---- 1 M HCl
                  |  ~ ~ ~ ~ ~ ~  |         ( [H+] = 1 M )
                  +---------------+

                  TEMPERATURE  =  298 K
                  PRESSURE of H2  =  1 bar
                  [H+]  =  1 M

                  E0  =  0.00  V     BY DEFINITION
```

**Its half reaction can run either way:**

```
  As an ANODE (oxidation):     H2       ---->   2 H+  +  2 e-
  As a CATHODE (reduction):    2 H+ + 2 e-  ---->   H2

  Notation:      Pt , H2 (1 bar) | H+ (1 M)      as anode
                 H+ (1 M) | H2 (1 bar) , Pt      as cathode
```

**Why platinum black?** It is finely divided platinum. It is chemically
inert, and its huge surface area adsorbs hydrogen gas so the reaction reaches
equilibrium quickly.

## Standard electrode potential — the definition to memorise

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   STANDARD ELECTRODE POTENTIAL  ( E0 )                               |
  |                                                                      |
  |   The potential of an electrode measured against the standard        |
  |   hydrogen electrode, when                                           |
  |          -  all ions are at 1 M concentration                        |
  |          -  all gases are at 1 bar pressure                          |
  |          -  the temperature is 298 K                                 |
  |                                                                      |
  |   By international convention it is always quoted as a               |
  |   REDUCTION potential.                                               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## WORKED EXAMPLE 5

A cell made of a zinc electrode and a standard hydrogen electrode gives
`0.76 V`, and the zinc is found to be the negative terminal. Find
`E0(Zn2+/Zn)`.

```
  Zinc is the NEGATIVE terminal of a galvanic cell  ->  Zinc is the ANODE.
  So the SHE is the cathode.

              Zn | Zn2+ (1 M) || H+ (1 M) | H2 (1 bar) , Pt

  E0(cell)  =  E0(cathode)  -  E0(anode)

     0.76   =      0.00     -  E0(Zn2+/Zn)

  E0(Zn2+/Zn)  =  0.00  -  0.76   =   - 0.76  V

  NEGATIVE - which correctly says zinc is easier to oxidise than hydrogen.
```

> **TRAP:** the SHE potential is zero only under those exact standard
> conditions. If a question gives `[H+] = 0.1 M`, you must run the Nernst
> equation on the hydrogen electrode too. Its potential is then no longer 0.

---

# TOPIC 6 — The electrochemical series and its applications

Line up every standard **reduction** potential from most negative to most
positive and you get the **electrochemical series**.

```
  +--------------------------------+---------------+--------------------+
  |  ELECTRODE REACTION            |  E0 (volts)   |                    |
  +--------------------------------+---------------+--------------------+
  |  Li+  +  e-    ->  Li          |   - 3.05      |  ^                 |
  |  K+   +  e-    ->  K           |   - 2.93      |  |  STRONGEST      |
  |  Ca2+ +  2e-   ->  Ca          |   - 2.87      |  |  REDUCING       |
  |  Na+  +  e-    ->  Na          |   - 2.71      |  |  AGENTS         |
  |  Mg2+ +  2e-   ->  Mg          |   - 2.37      |  |  (easily        |
  |  Al3+ +  3e-   ->  Al          |   - 1.66      |  |   oxidised)     |
  |  Zn2+ +  2e-   ->  Zn          |   - 0.76      |  |                 |
  |  Fe2+ +  2e-   ->  Fe          |   - 0.44      |  |                 |
  |  Ni2+ +  2e-   ->  Ni          |   - 0.25      |  |                 |
  |  Sn2+ +  2e-   ->  Sn          |   - 0.14      |  |                 |
  |  Pb2+ +  2e-   ->  Pb          |   - 0.13      |  |                 |
  |  2 H+ +  2e-   ->  H2          |     0.00      |  <-- REFERENCE     |
  |  Cu2+ +  2e-   ->  Cu          |   + 0.34      |  |                 |
  |  I2   +  2e-   ->  2 I-        |   + 0.54      |  |                 |
  |  Fe3+ +  e-    ->  Fe2+        |   + 0.77      |  |                 |
  |  Ag+  +  e-    ->  Ag          |   + 0.80      |  |                 |
  |  Br2  +  2e-   ->  2 Br-       |   + 1.09      |  |  STRONGEST      |
  |  O2 + 4H+ + 4e- -> 2 H2O       |   + 1.23      |  |  OXIDISING      |
  |  Cl2  +  2e-   ->  2 Cl-       |   + 1.36      |  |  AGENTS         |
  |  F2   +  2e-   ->  2 F-        |   + 2.87      |  |  (easily        |
  |                                |               |  |   reduced)      |
  +--------------------------------+---------------+--------------------+
```

**The six applications — a favourite 4-mark question:**

```
  1.  RELATIVE STRENGTH AS OXIDISING AGENT
      Higher (more positive) E0  ->  stronger oxidising agent.
      F2 is the strongest oxidising agent known.

  2.  RELATIVE STRENGTH AS REDUCING AGENT
      Lower (more negative) E0  ->  stronger reducing agent.
      Li is the strongest reducing agent in solution.

  3.  DISPLACEMENT REACTIONS
      A metal displaces from solution any metal that lies BELOW it.
      Zn displaces Cu ( -0.76 is below +0.34 ), so Zn + CuSO4 works.
      Cu cannot displace Zn.

  4.  DOES THE METAL LIBERATE H2 FROM ACID?
      Any metal with a NEGATIVE E0 displaces hydrogen from dilute acids.
      Zn, Fe, Mg -> yes.        Cu, Ag, Au -> no.

  5.  CALCULATING THE EMF OF ANY CELL
      E0(cell) = E0(cathode) - E0(anode)

  6.  PREDICTING WHETHER A REACTION IS SPONTANEOUS
      E0(cell) POSITIVE  ->  spontaneous.
      E0(cell) NEGATIVE  ->  not spontaneous (it goes the other way).
```

## WORKED EXAMPLE 6

Will copper displace silver from silver nitrate solution?
`E0(Cu2+/Cu) = +0.34 V`, `E0(Ag+/Ag) = +0.80 V`.

```
  Proposed reaction:    Cu  +  2 Ag+   ---->   Cu2+  +  2 Ag

  Cu is oxidised  ->  Cu is the ANODE.
  Ag+ is reduced  ->  Ag is the CATHODE.

  E0(cell)  =  ( + 0.80 )  -  ( + 0.34 )   =   + 0.46 V

  POSITIVE  ->  YES, the reaction is spontaneous.
                Copper wire dipped in AgNO3 gets a silver coating and the
                solution turns blue with Cu2+.
```

> **TRAP:** the reactivity series you learnt in Class 10 runs the OTHER way to
> the electrochemical series printed in textbooks. The reactivity series
> starts with the most reactive metal at the top; the electrochemical series
> as printed above starts with the most **negative** E0. They agree in
> meaning — just read the E0 value and stop guessing.

---

# TOPIC 7 — EMF of a cell

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     E(cell)   =   E(cathode)   -   E(anode)                          |
  |                                                                      |
  |     E0(cell)  =   E0(cathode)  -   E0(anode)                         |
  |                                                                      |
  |     Both values must be REDUCTION potentials.                        |
  |                                                                      |
  |     Some books write it as                                           |
  |                                                                      |
  |     E0(cell)  =   E0(right)  -  E0(left)                             |
  |                                                                      |
  |     which is the same thing, because the cathode is written on the   |
  |     right in cell notation.                                          |
  |                                                                      |
  +----------------------------------------------------------------------+

  EMF  =  ELECTROMOTIVE FORCE  =  the maximum potential difference between
  the two electrodes when NO current is being drawn.

  EMF is measured with a POTENTIOMETER, not an ordinary voltmeter,
  because a potentiometer draws practically no current.
```

```
  EMF                       vs        POTENTIAL DIFFERENCE
  ------------------------------      ---------------------------------
  measured when NO current flows      measured when current IS flowing
  the MAXIMUM voltage of the cell     always LESS than the EMF
  measured by a potentiometer         measured by a voltmeter
```

## WORKED EXAMPLE 7

Calculate `E0(cell)` for
`Ni | Ni2+ (1 M) || Ag+ (1 M) | Ag`
given `E0(Ni2+/Ni) = -0.25 V` and `E0(Ag+/Ag) = +0.80 V`.
Also write the overall reaction and find n.

```
  From the notation:   Ni is on the LEFT   ->  ANODE
                       Ag is on the RIGHT  ->  CATHODE

  E0(cell)  =  ( + 0.80 )  -  ( - 0.25 )  =  + 1.05  V

  Half reactions:
        Anode    :   Ni    ->  Ni2+  +  2 e-
        Cathode  :   Ag+ + e-  ->  Ag        ... multiply by 2 to balance
                     2 Ag+ + 2 e-  ->  2 Ag
        ---------------------------------------------------------
        Overall  :   Ni  +  2 Ag+   ->   Ni2+  +  2 Ag

        n  =  2 electrons
```

---

# TOPIC 8 — THE NERNST EQUATION

## Why it exists

Every `E0` in the table is for **1 M** solutions. Real solutions are almost
never 1 M. The Nernst equation tells you what the potential becomes at **any**
concentration.

## For a single electrode

For `M(n+) + n e- ----> M`:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                          2.303 R T             1                     |
  |    E    =    E0     -   ------------   log  ---------                |
  |                             n F              [M n+]                  |
  |                                                                      |
  |                                                                      |
  |    At 298 K,   2.303 R T / F   =   0.0591  V , so                    |
  |                                                                      |
  |                          0.0591              1                       |
  |    E    =    E0     -   ---------   log   ---------                  |
  |                             n              [M n+]                    |
  |                                                                      |
  |                          0.0591                                      |
  |         =    E0     +   ---------   log  [M n+]                      |
  |                             n                                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Where does 0.0591 come from? Plug the numbers in:

```
    2.303  x  R  x  T        2.303  x  8.314  x  298
   -------------------  =  --------------------------
            F                        96500

                            5705.85
                         =  ---------   =   0.0591  V
                              96500
```

## For a whole cell

For `a A + b B ----> c C + d D` with n electrons transferred:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                            0.0591           [C]^c  [D]^d             |
  |    E(cell)  =  E0(cell) - ---------  log  -----------------          |
  |                              n              [A]^a  [B]^b             |
  |                                                                      |
  |    The top of the fraction is the PRODUCTS.                          |
  |    The bottom is the REACTANTS.                                      |
  |    SOLIDS and PURE LIQUIDS are taken as 1 and left out.              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

For the Daniell cell `Zn + Cu2+ ---> Zn2+ + Cu` (n = 2, Zn and Cu are solids):

```
                                 0.0591          [Zn2+]
    E(cell)  =  1.10   -        ---------  log  ---------
                                    2            [Cu2+]
```

## WORKED EXAMPLE 8

Calculate the EMF of the cell
`Zn | Zn2+ (0.1 M) || Cu2+ (0.01 M) | Cu` at 298 K.
Given `E0(cell) = 1.10 V`.

```
  STEP 1  Reaction and n

              Zn  +  Cu2+   ---->   Zn2+  +  Cu           n = 2

  STEP 2  Write the log fraction: products over reactants,
          solids left out.

                                     [Zn2+]         0.1
              log fraction  =  log  --------  = log ------ = log 10 = 1
                                     [Cu2+]         0.01

  STEP 3  Nernst

                                 0.0591
              E(cell)  =  1.10 - --------  x  ( 1 )
                                    2

                       =  1.10  -  0.02955

                       =  1.0705

              E(cell)  =  1.07  V   (approximately)
```

## WORKED EXAMPLE 9

Calculate the electrode potential of a copper electrode dipped in
`0.001 M CuSO4`. `E0(Cu2+/Cu) = +0.34 V`.

```
  Cu2+  +  2 e-  ->  Cu           n = 2

                    0.0591
  E  =  E0   +     ---------  log [Cu2+]
                       2

     =  0.34  +  0.02955  x  log ( 0.001 )

     log 0.001  =  log 10^-3  =  - 3

     =  0.34  +  0.02955  x  ( - 3 )

     =  0.34  -  0.08865

     =  0.2514           ->    E  =  + 0.25  V   (approximately)
```

Notice: **diluting the solution of the ION being reduced LOWERS the
electrode potential.** That makes sense — fewer Cu2+ ions, less pull on
electrons.

> **TRAP 1:** the `-0.0591/n log(products/reactants)` form has a MINUS sign,
> but the single-electrode form `E = E0 + (0.0591/n) log[M n+]` has a PLUS.
> They are the same equation; the sign flipped because the fraction was
> turned upside down. Pick **ONE** version and always use that one.

> **TRAP 2:** `n` is the electrons in the balanced equation. For
> `Zn + Cu2+`, n = 2, so you divide by 2, not by 1.

> **TRAP 3:** never put a solid or a pure liquid inside the log. `[Zn]` and
> `[Cu]` and `[H2O]` are all taken as 1.

---

# TOPIC 9 — EMF, Gibbs energy and the equilibrium constant

## EMF and delta G

The electrical work a cell can do is the useful (non-expansion) work, and
that equals the Gibbs energy change:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     delta G    =   -  n  F  E(cell)                                  |
  |                                                                      |
  |     delta G0   =   -  n  F  E0(cell)                                 |
  |                                                                      |
  |     n  =  moles of electrons transferred                             |
  |     F  =  96500 C mol-1                                              |
  |     E  =  EMF in volts                                               |
  |     Answer comes out in JOULES. Divide by 1000 for kJ.               |
  |                                                                      |
  +----------------------------------------------------------------------+

     E POSITIVE   ->  delta G NEGATIVE  ->  SPONTANEOUS
     E NEGATIVE   ->  delta G POSITIVE  ->  NOT spontaneous
     E ZERO       ->  delta G ZERO      ->  at EQUILIBRIUM (dead battery)
```

## EMF and the equilibrium constant

At equilibrium the cell is dead: `E(cell) = 0` and the reaction quotient
has become `K`. Put that into the Nernst equation:

```
                             0.0591
       0    =   E0(cell)  -  --------  log K
                                n

  +----------------------------------------------------------------------+
  |                                                                      |
  |                        0.0591                                        |
  |      E0(cell)   =     ---------   log  K                             |
  |                           n                                          |
  |                                                                      |
  |                         n  x  E0(cell)                               |
  |      log K      =     -------------------                            |
  |                            0.0591                                    |
  |                                                                      |
  |   and also        delta G0  =  - 2.303 R T log K                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## WORKED EXAMPLE 10

For the Daniell cell, `E0(cell) = 1.10 V` and `n = 2`.
Calculate `delta G0` and `K(c)` at 298 K.

```
  PART 1  -  delta G0

  delta G0  =  - n F E0

            =  - ( 2 ) ( 96500 ) ( 1.10 )

            =  - 212300  J

            =  - 212.3   kJ mol-1

  Large and negative  ->  the reaction goes practically to completion.


  PART 2  -  K(c)

                n  x  E0            2  x  1.10          2.20
  log K   =   ------------   =    ------------    =   --------  =  37.225
                 0.0591              0.0591            0.0591

  K   =   antilog ( 37.225 )

      =   antilog(0.225)  x  10^37

      =   1.68  x  10^37

  An enormous K - exactly what "goes to completion" means.
```

> **TRAP:** delta G comes out in **joules** because F is in coulombs. A student
> who writes `-212.3 J` instead of `-212300 J` (or forgets to convert to kJ)
> loses the mark. Always write the unit.

---

# TOPIC 10 — Conductance, conductivity, molar conductivity, cell constant

## Building up from Class 10 physics

```
  RESISTANCE   R   -  how much a conductor OPPOSES current.  Unit: ohm

                         l
             R  =  rho x ---            rho = resistivity (ohm cm)
                         A              l   = distance between electrodes
                                        A   = area of the electrodes
```

Now flip everything upside down, because chemists prefer to talk about how
well something conducts.

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                          1                                           |
  |  CONDUCTANCE      G  =  ---           unit:  S  (siemens) or ohm-1   |
  |                          R                                           |
  |                                                                      |
  |                                                                      |
  |                              1                                       |
  |  CONDUCTIVITY   kappa   =  -----                                     |
  |  (specific                  rho                                      |
  |   conductance)                                                       |
  |                                        l                             |
  |                         =    G    x   ---                            |
  |                                        A                             |
  |                                                                      |
  |                    unit:  S cm-1   (or S m-1)                        |
  |                                                                      |
  |                                                                      |
  |                              l                                       |
  |  CELL CONSTANT    G*    =   ---   =   kappa  x  R                    |
  |                              A                                       |
  |                                                                      |
  |                    unit:  cm-1   (or m-1)                            |
  |                                                                      |
  |                                                                      |
  |                                kappa  x  1000                        |
  |  MOLAR              Lambda(m) = ----------------                     |
  |  CONDUCTIVITY                        C                               |
  |                                                                      |
  |                    C in mol L-1 , kappa in S cm-1                    |
  |                    unit of Lambda(m):   S cm2 mol-1                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**What each one MEANS in plain words:**

```
  CONDUCTIVITY  kappa       -  the conductance of a solution held between
                               two electrodes 1 cm apart, each of area
                               1 cm2. In other words, the conductance of
                               ONE CUBIC CENTIMETRE of the solution.

  MOLAR CONDUCTIVITY        -  the conductance of ALL the ions produced by
  Lambda(m)                    ONE MOLE of electrolyte, when the whole
                               solution is placed between electrodes 1 cm
                               apart.

  CELL CONSTANT  l/A        -  a fixed number for a given conductivity cell.
                               It is found by first measuring the resistance
                               of a STANDARD KCl solution whose conductivity
                               is already known.
```

## WORKED EXAMPLE 11

The resistance of a conductivity cell containing `0.001 M KCl` at 298 K is
`1500 ohm`. The conductivity of `0.001 M KCl` at 298 K is
`0.146 x 10^-3 S cm-1`. Find the cell constant.

```
  Cell constant  =  kappa  x  R

                 =  ( 0.146 x 10^-3 )  x  ( 1500 )

                 =  0.146 x 1.5  x  10^-3  x  10^3

                 =  0.219    cm-1
```

## WORKED EXAMPLE 12

The same cell is now filled with `0.001 M acetic acid` and the resistance is
`4425 ohm`. Find the conductivity and the molar conductivity.

```
  STEP 1  Conductivity

                       cell constant           0.219
          kappa  =  ------------------  =  -------------
                       resistance              4425

                 =  4.949 x 10^-5     S cm-1


  STEP 2  Molar conductivity

                          kappa  x  1000
          Lambda(m)  =  ------------------
                                C

                          ( 4.949 x 10^-5 )  x  1000
                     =  --------------------------------
                                    0.001

                     =  ( 4.949 x 10^-5 )  x  10^6

                     =  49.49        S cm2 mol-1
```

> **TRAP:** the `1000` in the molar conductivity formula is only there to
> convert litres to cubic centimetres. If you are given kappa in `S m-1` and
> C in `mol m-3`, then `Lambda(m) = kappa / C` with **no 1000**. In the AP
> exam the data is nearly always in `S cm-1`, so use the 1000 version.

---

# TOPIC 11 — How molar conductivity changes with dilution

This is a guaranteed 2 or 4 mark question. There are two completely
different behaviours.

```
    Lambda(m)
        |
        |                                            . . . . . . . . . .
        |                                    . . . .          WEAK
        |                             . .                  ELECTROLYTE
        |                        . .                     (CH3COOH)
        |                     . .                     rises SLOWLY, then
        |                   .                         SHOOTS UP steeply
        |                 .                           near infinite
        |               .                             dilution
        |             .
        |  ---------------------------------------------------
        |  = = = = = = = = = = = = = = = = = = = = = = = = = =
        |          STRONG ELECTROLYTE (KCl)
        |          rises SLOWLY and LINEARLY,
        |          reaches Lambda0 smoothly
        |
        +-------------------------------------------------------
                    square root of concentration  ->
       (read RIGHT to LEFT for increasing dilution)
```

```
  BOTH kinds:   on dilution   kappa GOES DOWN   but  Lambda(m) GOES UP.

  WHY?  kappa is the conductance of 1 cm3 of solution. Dilute it and that
        1 cm3 contains FEWER ions, so kappa falls.

        Lambda(m) is the conductance of ALL the ions from 1 MOLE. The
        number of ions from 1 mole can only stay the same or increase,
        and they are further apart so they interfere with each other
        less. So Lambda(m) rises.
```

```
  +--------------------+-------------------------+------------------------+
  |                    |  STRONG ELECTROLYTE     |  WEAK ELECTROLYTE      |
  |                    |  (KCl, NaCl, HCl)       |  (CH3COOH, NH4OH)      |
  +--------------------+-------------------------+------------------------+
  | Ionisation         | almost COMPLETE at all  | PARTIAL; increases     |
  |                    | concentrations          | strongly on dilution   |
  +--------------------+-------------------------+------------------------+
  | Why Lambda(m)      | ions get further apart, | MORE ions are produced |
  | rises on dilution  | so inter-ionic          | because alpha rises    |
  |                    | attraction falls        |                        |
  +--------------------+-------------------------+------------------------+
  | Shape of the graph | nearly a STRAIGHT LINE  | curve that shoots up   |
  |                    |                         | steeply near zero      |
  +--------------------+-------------------------+------------------------+
  | Can Lambda0 be     | YES - just extend the   | NO - the curve never   |
  | found from the     | straight line back to   | meets the axis. Use    |
  | graph?             | zero concentration      | KOHLRAUSCH'S LAW.      |
  +--------------------+-------------------------+------------------------+
  | Equation obeyed    | Lambda(m) = Lambda0     |  ---                   |
  |                    |            - A sqrt(C)  |                        |
  |                    | (Debye-Huckel-Onsager)  |                        |
  +--------------------+-------------------------+------------------------+
```

## WORKED EXAMPLE 13

The conductivity of NaCl solution is `1.06 x 10^-2 S cm-1` at `0.1 M` and
`1.18 x 10^-3 S cm-1` at `0.01 M`. Find the molar conductivity at each
concentration and comment.

```
  At C = 0.1 M

                  ( 1.06 x 10^-2 )  x  1000        10.6
   Lambda(m)  =  ----------------------------  =  ------  =  106  S cm2 mol-1
                           0.1                      0.1

  At C = 0.01 M

                  ( 1.18 x 10^-3 )  x  1000        1.18
   Lambda(m)  =  ----------------------------  =  ------  =  118  S cm2 mol-1
                          0.01                     0.01

  COMMENT
     Conductivity kappa FELL      ( 0.0106  ->  0.00118 )
     Molar conductivity ROSE      ( 106     ->  118     )

  Exactly as the rule says: on dilution kappa goes DOWN and Lambda(m) goes UP.
```

---

# TOPIC 12 — KOHLRAUSCH'S LAW

## Statement

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   KOHLRAUSCH'S LAW OF INDEPENDENT MIGRATION OF IONS                  |
  |                                                                      |
  |   At infinite dilution, the molar conductivity of an electrolyte is  |
  |   the SUM of the individual contributions of its cation and its      |
  |   anion, each ion contributing INDEPENDENTLY of the other ion it     |
  |   came with.                                                         |
  |                                                                      |
  |        Lambda0(m)   =   v(+)  lambda0(+)   +   v(-)  lambda0(-)      |
  |                                                                      |
  |   v(+) , v(-)  =  how many of each ion one formula unit gives        |
  |                                                                      |
  |   Examples                                                           |
  |        NaCl     :  Lambda0  =  lambda0(Na+)  +  lambda0(Cl-)         |
  |        BaCl2    :  Lambda0  =  lambda0(Ba2+) + 2 lambda0(Cl-)        |
  |        Al2(SO4)3:  Lambda0  =  2 lambda0(Al3+) + 3 lambda0(SO4 2-)   |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Its three applications

```
  1.  Lambda0 OF A WEAK ELECTROLYTE  -  which cannot be measured directly.
      Build it from strong electrolytes that CAN be measured:

      Lambda0(CH3COOH) = Lambda0(CH3COONa) + Lambda0(HCl) - Lambda0(NaCl)

      Check it works, ion by ion:
          ( CH3COO- + Na+ ) + ( H+ + Cl- ) - ( Na+ + Cl- )
        =   CH3COO-  +  H+                    <-- Na+ and Cl- cancel
        =   CH3COOH                           CORRECT.

  2.  DEGREE OF DISSOCIATION  alpha  of a weak electrolyte

                       Lambda(m)      at the given concentration
           alpha  =  --------------
                       Lambda0(m)     at infinite dilution

  3.  DISSOCIATION CONSTANT  Ka  of a weak acid

                       C  alpha^2
           Ka   =    ----------------
                        1 - alpha
```

## WORKED EXAMPLE 14

Given
`Lambda0(CH3COONa) = 91.0`, `Lambda0(HCl) = 426.2`,
`Lambda0(NaCl) = 126.5` (all S cm2 mol-1), and the molar conductivity of
`0.001 M` acetic acid from Worked Example 12 is `49.5 S cm2 mol-1`.
Find `Lambda0` for acetic acid, then `alpha`, then `Ka`.

```
  STEP 1  Kohlrausch's law

  Lambda0(CH3COOH)  =  Lambda0(CH3COONa) + Lambda0(HCl) - Lambda0(NaCl)

                    =      91.0      +     426.2     -     126.5

                    =      517.2  -  126.5

                    =      390.7      S cm2 mol-1


  STEP 2  Degree of dissociation

                 Lambda(m)          49.5
   alpha   =   -------------  =   ---------   =   0.1267
                 Lambda0            390.7

           =   0.127        (about 12.7 % dissociated)


  STEP 3  Dissociation constant

               C alpha^2         ( 0.001 ) ( 0.1267 )^2
   Ka   =   --------------  =  ---------------------------
               1 - alpha             1  -  0.1267

               ( 0.001 ) ( 0.016053 )        1.6053 x 10^-5
        =   -----------------------------  = -----------------
                     0.8733                       0.8733

        =   1.84  x  10^-5

  This matches the accepted Ka of acetic acid, about 1.8 x 10^-5. Good.
```

> **TRAP:** the units. `Lambda` is in `S cm2 mol-1` and `C` in `mol L-1`.
> `alpha` has **no unit** at all — it is a ratio. If your alpha comes out
> greater than 1, you have divided the wrong way round.

---

# TOPIC 13 — ELECTROLYSIS and FARADAY'S LAWS

## What electrolysis is

Push direct current through a molten salt or a solution and you **force** a
non-spontaneous redox reaction to happen. That is electrolysis.

```
                     +--------| |--------+
                     |     BATTERY       |
                     |   -           +   |
                     |                   |
              +------+                   +------+
              |                                 |
        +-----+---------------------------------+-----+
        |     |                                 |     |
        |  +--+--+                           +--+--+  |
        |  |     |                           |     |  |
        |  |  -  |                           |  +  |  |
        |  |CATH-|                           |ANODE|  |
        |  |ODE  |                           |     |  |
        |  |     |                           |     |  |
        |  +-----+                           +-----+  |
        |     ^                                 ^     |
        |     |  cations move here              |     |
        |   + + +  <-------  ELECTROLYTE  ----> - - - |
        |                                   anions    |
        |  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  |
        +---------------------------------------------+

          CATHODE (negative)            ANODE (positive)
          attracts CATIONS              attracts ANIONS
          REDUCTION happens             OXIDATION happens
```

## Faraday's First Law

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   The mass of a substance deposited or liberated at an electrode is  |
  |   DIRECTLY PROPORTIONAL to the quantity of electricity passed.       |
  |                                                                      |
  |          w   =   Z  x  Q   =   Z  x  I  x  t                         |
  |                                                                      |
  |          w  =  mass in grams                                         |
  |          Q  =  charge in coulombs  =  I x t                          |
  |          I  =  current in AMPERES                                    |
  |          t  =  time in SECONDS                                       |
  |          Z  =  electrochemical equivalent (grams per coulomb)        |
  |                                                                      |
  |                       equivalent weight            M                 |
  |               Z   =  --------------------   =   --------             |
  |                            96500                 n x 96500           |
  |                                                                      |
  |   PUT TOGETHER - the ONE formula that solves most sums:              |
  |                                                                      |
  |                       M   x   I   x   t                              |
  |               w   =  ---------------------                           |
  |                        n   x   96500                                 |
  |                                                                      |
  |   M = molar mass ,  n = electrons needed per ion                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Faraday's Second Law

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   When the SAME quantity of electricity is passed through            |
  |   DIFFERENT electrolytes (connected in series), the masses           |
  |   deposited are in the ratio of their EQUIVALENT WEIGHTS.            |
  |                                                                      |
  |            w1          E1                                            |
  |          -----   =   -----                                           |
  |            w2          E2                                            |
  |                                                                      |
  +----------------------------------------------------------------------+

  1 FARADAY  =  96500 C  =  the charge on 1 mole of electrons
             =  ( 6.022 x 10^23 ) x ( 1.602 x 10^-19 )  C

  1 faraday deposits ONE GRAM EQUIVALENT of any substance:
       1 F  ->  1 mol Ag (108 g)       because Ag+ needs 1 electron
       1 F  ->  0.5 mol Cu (31.75 g)   because Cu2+ needs 2 electrons
       1 F  ->  1/3 mol Al (9 g)       because Al3+ needs 3 electrons
```

## WORKED EXAMPLE 15

A current of `5 A` is passed through `CuSO4` solution for `30 minutes`.
Calculate the mass of copper deposited. (Cu = 63.5)

```
  STEP 1  Convert time to SECONDS

          t  =  30  x  60   =   1800  s

  STEP 2  Charge

          Q  =  I x t  =  5  x  1800   =   9000  C

  STEP 3  n for copper:   Cu2+  +  2 e-  ->  Cu       so  n = 2

  STEP 4  Apply the formula

                 M  x  I  x  t          63.5  x  9000
          w  =  ----------------  =  ---------------------
                  n  x  96500            2  x  96500

                    571500
             =   -----------
                   193000

             =   2.961   g

  ANSWER:  about 2.96 g of copper is deposited.
```

## WORKED EXAMPLE 16

The same current is passed through `AgNO3` and `CuSO4` solutions in series.
If `1.08 g` of silver is deposited, how much copper is deposited?
(Ag = 108, Cu = 63.5)

```
  Equivalent weights:

       E(Ag)  =  108 / 1     =  108
       E(Cu)  =  63.5 / 2    =  31.75

  Faraday's second law:

          w(Cu)          E(Cu)
        ---------   =   --------
          w(Ag)          E(Ag)

                          31.75
        w(Cu)   =  1.08 x --------
                           108

                =  1.08  x  0.29398

                =  0.3175   g

  ANSWER:  0.3175 g of copper.
```

## WORKED EXAMPLE 17

How long must a current of `2 A` flow to deposit `1.08 g` of silver?
(Ag = 108, n = 1)

```
                 M  x  I  x  t
          w  =  ----------------
                  n  x  96500


                 w  x  n  x  96500          1.08  x  1  x  96500
          t  =  -------------------   =   -------------------------
                     M  x  I                     108  x  2

                   104220
             =   ----------
                     216

             =   482.5   s

             =   about 8 minutes 3 seconds
```

> **TRAP:** the time MUST be in seconds. Questions give minutes or hours to
> catch you. `30 min = 1800 s`, `1 hour = 3600 s`, `1 hour 20 min = 4800 s`.

---

# TOPIC 14 — Products of electrolysis

Which ion actually gets discharged? The rule is simple:

```
  At the CATHODE  -  the cation that is EASIEST TO REDUCE wins
                     (the one with the HIGHER reduction potential)

  At the ANODE    -  the anion that is EASIEST TO OXIDISE wins
                     (the one with the LOWER reduction potential)
```

In **water** solutions there are always two extra players, H+ and OH-, and
they very often win.

## Case 1 — MOLTEN NaCl (no water at all)

```
  Only Na+ and Cl- are present.

     Cathode  :   Na+  +  e-    ---->   Na (l)             SODIUM METAL
     Anode    :   2 Cl-         ---->   Cl2 (g)  +  2 e-   CHLORINE GAS

     Overall  :   2 NaCl  ---->  2 Na  +  Cl2

  This is the DOWN'S PROCESS - the industrial way to make sodium metal.
```

## Case 2 — AQUEOUS NaCl (brine)

```
  Now Na+ , Cl- , H+ and OH- are all present.

     Cathode  :  Na+ (E0 = -2.71) vs H+ (E0 = 0.00 for 2H+ + 2e- -> H2)
                 H+ is far easier to reduce  ->  HYDROGEN wins.

                 2 H2O  +  2 e-   ---->   H2 (g)  +  2 OH-

     Anode    :  on paper OH- / water should be oxidised, but chlorine has
                 a large OVERVOLTAGE, so in concentrated brine

                 2 Cl-   ---->   Cl2 (g)  +  2 e-        CHLORINE wins.

     PRODUCTS :  H2 at the cathode, Cl2 at the anode,
                 and NaOH left in the solution.

     This is the CHLOR-ALKALI industry.
     Sodium metal is NEVER obtained from aqueous NaCl.
```

## Case 3 — AQUEOUS CuSO4

```
  WITH INERT (platinum) ELECTRODES:

     Cathode  :  Cu2+ (E0 = +0.34) beats H+ (0.00)   ->  COPPER deposits

                 Cu2+  +  2 e-   ---->   Cu (s)

     Anode    :  SO4 2- is very hard to oxidise, so WATER is oxidised

                 2 H2O   ---->   O2 (g)  +  4 H+  +  4 e-

     PRODUCTS :  Cu at the cathode, O2 at the anode.
                 The blue colour fades and the solution turns acidic.


  WITH COPPER ELECTRODES:

     Cathode  :  Cu2+  +  2 e-   ---->   Cu        (copper deposits)
     Anode    :  Cu    ---->   Cu2+  +  2 e-       (the anode DISSOLVES)

     The blue colour does NOT fade - copper just moves from the anode to
     the cathode. This is ELECTROREFINING of copper and ELECTROPLATING.
```

## Summary table

```
  +--------------------+-------------------+------------------------------+
  |  ELECTROLYTE       |  AT CATHODE       |  AT ANODE                    |
  +--------------------+-------------------+------------------------------+
  |  Molten NaCl       |  Na metal         |  Cl2 gas                     |
  |  Aqueous NaCl      |  H2 gas           |  Cl2 gas   (+ NaOH in soln)  |
  |  Aqueous CuSO4     |  Cu metal         |  O2 gas                      |
  |  (Pt electrodes)   |                   |                              |
  |  Aqueous CuSO4     |  Cu metal         |  anode dissolves as Cu2+     |
  |  (Cu electrodes)   |                   |                              |
  |  Dilute H2SO4      |  H2 gas           |  O2 gas                      |
  |  (Pt electrodes)   |                   |                              |
  +--------------------+-------------------+------------------------------+
```

## WORKED EXAMPLE 18

What volume of chlorine at STP is liberated at the anode when `2 F` of
electricity is passed through molten NaCl?

```
  Anode reaction:   2 Cl-   ---->   Cl2  +  2 e-

  So  2 moles of electrons  ->  1 mole of Cl2
      2 F                   ->  1 mol Cl2

  1 mole of any gas at STP occupies 22.4 L.

  Volume of Cl2  =  1  x  22.4  =  22.4  L

  (And at the cathode, 2 F would give 2 mol of Na = 46 g of sodium.)
```

> **TRAP:** aqueous NaCl gives **hydrogen**, not sodium. This single fact is
> asked as a 2-mark question nearly every year. Sodium is so easy to oxidise
> that even if it formed, it would instantly react with the water.

---

# TOPIC 15 — Batteries and fuel cells

```
  PRIMARY CELL     -  used ONCE, cannot be recharged. The reaction is
                      irreversible. Example: dry cell, mercury cell.

  SECONDARY CELL   -  can be RECHARGED by passing current backwards
                      through it. Example: lead storage battery, Ni-Cd cell.

  FUEL CELL        -  fuel and oxygen are fed in CONTINUOUSLY from outside;
                      it never runs down as long as fuel is supplied.
```

## 1. DRY CELL (Leclanche cell) — primary

```
     Anode      :  ZINC container (it IS the anode)
     Cathode    :  a GRAPHITE rod surrounded by MnO2 and carbon powder
     Electrolyte:  moist paste of NH4Cl and ZnCl2

     Anode      :   Zn   ---->   Zn2+   +   2 e-

     Cathode    :   MnO2 + NH4+ + e-  ---->  MnO(OH)  +  NH3

     EMF        :   about 1.5 V, and it FALLS steadily during use
                    (ammonia builds up around the cathode)
```

## 2. MERCURY CELL — primary

```
     Anode      :  ZINC - MERCURY AMALGAM
     Cathode    :  paste of HgO and carbon
     Electrolyte:  paste of KOH and ZnO

     Anode      :  Zn(Hg)  +  2 OH-  ---->  ZnO  +  H2O  +  2 e-
     Cathode    :  HgO  +  H2O  +  2 e-  ---->  Hg  +  2 OH-

     Overall    :  Zn(Hg)  +  HgO   ---->   ZnO  +  Hg

     EMF        :  about 1.35 V and it stays CONSTANT throughout its life,
                   because no ion appears in the overall reaction.

     USE        :  hearing aids, watches, pacemakers - anything that needs
                   a steady voltage.
```

## 3. LEAD STORAGE BATTERY — secondary (the car battery)

```
     Anode      :  spongy LEAD  (Pb)
     Cathode    :  lead grid packed with LEAD DIOXIDE  (PbO2)
     Electrolyte:  38 % SULPHURIC ACID  by mass

     DISCHARGING  (working as a galvanic cell)

       Anode    :  Pb + SO4 2-  ---->  PbSO4  +  2 e-
       Cathode  :  PbO2 + SO4 2- + 4 H+ + 2 e-  ---->  PbSO4 + 2 H2O

       Overall  :  Pb  +  PbO2  +  2 H2SO4   ---->   2 PbSO4  +  2 H2O

     WHITE PbSO4 coats BOTH plates and the acid gets used up, so the
     density of the acid falls. That is how a mechanic tests a battery.

     CHARGING  -  push current in and the whole reaction runs BACKWARDS:

       2 PbSO4  +  2 H2O   ---->   Pb  +  PbO2  +  2 H2SO4

     One cell gives about 2 V. Six cells in series give the 12 V car battery.
```

## 4. NICKEL - CADMIUM CELL — secondary

```
     Anode      :  CADMIUM
     Cathode    :  NICKEL(IV) OXIDE  ( NiO2 )
     Electrolyte:  KOH

       Cd  +  2 OH-   ---->   Cd(OH)2  +  2 e-
       NiO2 + 2 H2O + 2 e-   ---->   Ni(OH)2  +  2 OH-

     Overall  :  Cd  +  NiO2  +  2 H2O   ---->   Cd(OH)2  +  Ni(OH)2

     Longer life than the lead battery, but it is MORE EXPENSIVE and
     cadmium is TOXIC.
```

## 5. HYDROGEN - OXYGEN FUEL CELL

```
                   H2 in                            O2 in
                     |                                |
                     v                                v
              +------+--------------------------------+------+
              |      |                                |      |
              |  +---+---+                        +---+---+  |
              |  | POROUS|                        | POROUS|  |
              |  | CARBON|                        | CARBON|  |
              |  |  (Pt) |                        |  (Pt) |  |
              |  +-------+                        +-------+  |
              |   ANODE                            CATHODE   |
              |                                              |
              |   ~ ~ ~ ~  concentrated KOH solution ~ ~ ~ ~  |
              +----------------------------------------------+
                     |                                |
                     +---------[ LOAD ]---------------+

     Anode    :  2 H2  +  4 OH-   ---->   4 H2O  +  4 e-
     Cathode  :  O2  +  2 H2O  +  4 e-   ---->   4 OH-
     ------------------------------------------------------
     Overall  :  2 H2  +  O2   ---->   2 H2O

     ADVANTAGES
        *  efficiency about 70 %, far above a heat engine (about 40 %)
        *  the only product is WATER - no pollution at all
        *  it runs continuously as long as H2 and O2 are supplied

     USE :  the Apollo space programme, where the water produced was
            drunk by the astronauts.
```

## WORKED EXAMPLE 19

A lead storage battery gives about `2.0 V` per cell. How many cells are
needed for a 12 V car battery, and what is delta G for one cell if n = 2?

```
  Number of cells   =   12 / 2.0   =   6 cells in series.

  delta G  =  - n F E   =  - ( 2 ) ( 96500 ) ( 2.0 )

           =  - 386000  J   =   - 386  kJ per cell

  Negative, so discharging is spontaneous - which is why the car starts.
```

---

# TOPIC 16 — CORROSION

```
  CORROSION  =  the slow eating away of a metal by its surroundings
                through an ELECTROCHEMICAL process.

  On iron the product is RUST  -  hydrated iron(III) oxide,  Fe2O3 . x H2O
  On copper it is a green layer of basic copper carbonate.
  On silver it is a black layer of Ag2S (tarnish).
```

## The mechanism — draw this

```
        water droplet containing dissolved O2 and CO2
                     _______________
                    /               \
                   /   O2   O2   O2  \
        __________/                   \___________
       |                                          |
       |  ANODE SPOT          CATHODE SPOT        |   <-- IRON SURFACE
       |  (impure /           (near the edge,     |
       |   strained spot)      more O2 here)      |
       |__________________________________________|
                    <---- e- travel through the metal ----

     ANODE   :  Fe(s)  ---->  Fe2+  +  2 e-              E0 = - 0.44 V

     CATHODE :  O2 + 4 H+ + 4 e-  ---->  2 H2O           E0 = + 1.23 V

     OVERALL :  2 Fe  +  O2  +  4 H+   ---->   2 Fe2+  +  2 H2O

     Then, away from the metal, the Fe2+ is further oxidised by more
     oxygen and hydrated:

        4 Fe2+  +  O2  +  4 H2O   ---->   2 Fe2O3  +  8 H+
        Fe2O3  +  x H2O   ---->   Fe2O3 . x H2O          = RUST
```

**The conditions rusting needs:** BOTH water and oxygen. Take away either
one and rusting stops. Acid, salt and CO2 speed it up because they make the
water conduct better.

## Prevention

```
  1.  BARRIER COATING       -  paint, grease, oil, enamel, plastic.
                               Keeps air and water off the surface.

  2.  GALVANISATION         -  coat the iron with ZINC.
                               Zinc has a MORE NEGATIVE E0 (-0.76) than
                               iron (-0.44), so the zinc corrodes first
                               and protects the iron even if the coating
                               is scratched.

  3.  CATHODIC PROTECTION   -  connect a block of a more active metal
      (SACRIFICIAL           (Mg or Zn) to the iron object. That block
       PROTECTION)           becomes the anode and is eaten away instead.
                             Used on ships' hulls and buried pipelines.

  4.  ELECTROPLATING        -  a thin layer of Cr, Ni or Sn.

  5.  ALLOYING              -  stainless steel (iron + chromium + nickel)
                               forms a self-repairing oxide film.

  6.  ANTI-RUST SOLUTIONS   -  alkaline phosphates and chromates raise the
                               pH and passivate the surface.
```

## WORKED EXAMPLE 20

Calculate `E0(cell)` for the rusting of iron and show that it is
spontaneous. `E0(Fe2+/Fe) = -0.44 V`,
`E0(O2, H+/H2O) = +1.23 V`. Take n = 4.

```
  Iron is oxidised  ->  ANODE.
  Oxygen is reduced ->  CATHODE.

  E0(cell)  =  E0(cathode)  -  E0(anode)

            =  ( + 1.23 )  -  ( - 0.44 )

            =  + 1.67  V

  delta G0  =  - n F E0   =  - ( 4 ) ( 96500 ) ( 1.67 )

            =  - 644620  J   =   - 644.6  kJ

  Strongly NEGATIVE  ->  rusting is very spontaneous.
  That is exactly why iron rusts all by itself, and why we must spend
  money to stop it.
```

> **TRAP:** rust is `Fe2O3 . x H2O`, an **iron(III)** compound, but the FIRST
> step gives `Fe2+`, which is iron(II). Both are needed for full marks:
> Fe to Fe2+ at the anode, then Fe2+ to Fe3+ by more oxygen.

---
---

# ==========================================================
# HALF B — CHEMICAL KINETICS
# ==========================================================

Take a breath. Nothing below depends on anything above.

---

# TOPIC 17 — Rate of a reaction: average and instantaneous

## The idea

```
  Thermodynamics tells you WHETHER a reaction will happen.
  Kinetics tells you HOW FAST.

  Rusting is spontaneous but takes years.
  A firework is spontaneous and takes a millisecond.
  Both have negative delta G. The difference is KINETICS.
```

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   RATE OF REACTION  =  the change in concentration of a reactant or  |
  |                        a product per unit time.                      |
  |                                                                      |
  |                        - ( change in [reactant] )                    |
  |     rate     =        --------------------------------              |
  |                            change in time                            |
  |                                                                      |
  |                        + ( change in [product] )                     |
  |              =        -------------------------------                |
  |                            change in time                            |
  |                                                                      |
  |   UNIT :   mol L-1 s-1     (or mol L-1 min-1)                        |
  |                                                                      |
  |   The MINUS sign on the reactant is only there to make the rate      |
  |   come out POSITIVE, because [reactant] is falling.                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Average versus instantaneous rate

```
  [A]  |
       | *
       |   *  <---- draw a CHORD between two points:
       |     * \        the slope of the chord = AVERAGE RATE
       |       *  \
       |         * \
       |           *  \
       |             *   \
       |               * \  \
       |                 *  \ \
       |    tangent at one point:  *  \
       |    slope = INSTANTANEOUS RATE   * . . .
       |                                       . . . . . .
       +---------------------------------------------------- time
       t1                    t2

  AVERAGE RATE        -  over a TIME INTERVAL.  Uses delta [A] / delta t.
                         Easy to calculate, just two readings.

  INSTANTANEOUS RATE  -  at ONE INSTANT.  Uses  d[A] / dt , found by
                         drawing a TANGENT to the curve at that point.
                         This is the rate that appears in the rate law.
```

## WORKED EXAMPLE 21

In the reaction `A ---> B`, the concentration of A falls from `0.50 mol L-1`
to `0.38 mol L-1` in `10 minutes`. Calculate the average rate in
`mol L-1 min-1` and in `mol L-1 s-1`.

```
                          - ( [A]2  -  [A]1 )
  average rate    =     ------------------------
                             t2  -  t1

                          - ( 0.38  -  0.50 )         + 0.12
                  =     ------------------------  =  ---------
                                  10                     10

                  =     0.012     mol L-1 min-1


  In seconds:     10 min  =  600 s

                          0.12
                  =     --------   =   2.0 x 10^-4    mol L-1 s-1
                          600
```

> **TRAP:** watch the units the question asks for. `mol L-1 min-1` and
> `mol L-1 s-1` differ by a factor of 60. Always write the unit next to the
> number.

---

# TOPIC 18 — Rate in terms of each reactant and product

When the coefficients in the equation are not all 1, the species change at
**different speeds**, so we divide by the coefficient to get ONE rate for
the whole reaction.

```
  For        a A   +   b B    ---->    c C   +   d D

  +----------------------------------------------------------------------+
  |                                                                      |
  |             1   d[A]        1   d[B]                                 |
  |  rate  =  - --- ------  = - --- ------                               |
  |             a    dt         b    dt                                  |
  |                                                                      |
  |             1   d[C]        1   d[D]                                 |
  |        =  + --- ------  = + --- ------                               |
  |             c    dt         d    dt                                  |
  |                                                                      |
  |  MINUS for reactants (they disappear).                               |
  |  PLUS  for products (they appear).                                   |
  |  DIVIDE by the coefficient in every case.                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Example, ammonia synthesis:

```
       N2   +   3 H2    ---->    2 NH3

                d[N2]       1  d[H2]       1  d[NH3]
   rate  =  -  -------  = - --- -------  = --- --------
                 dt         3    dt         2    dt
```

## WORKED EXAMPLE 22

For `N2 + 3 H2 ---> 2 NH3`, hydrogen is disappearing at
`0.030 mol L-1 s-1`. Find (i) the rate of the reaction,
(ii) the rate of disappearance of N2, (iii) the rate of formation of NH3.

```
  (i)   RATE OF REACTION

                 1   d[H2]        1
        rate = - --- -------  =  ---  x  0.030   =   0.010  mol L-1 s-1
                 3     dt         3


  (ii)  RATE OF DISAPPEARANCE OF N2

           d[N2]
        - -------  =  1  x  rate  =  0.010    mol L-1 s-1
            dt


  (iii) RATE OF FORMATION OF NH3

           d[NH3]
        + --------  =  2  x  rate  =  2  x  0.010
             dt
                                   =  0.020    mol L-1 s-1

  SANITY CHECK:  H2 : N2 : NH3   =  0.030 : 0.010 : 0.020  =  3 : 1 : 2
  which is exactly the coefficient ratio in the equation. Correct.
```

> **TRAP:** "rate of the reaction" and "rate of disappearance of H2" are
> DIFFERENT numbers whenever the coefficient is not 1. Read the question
> word by word.

---

# TOPIC 19 — Factors that affect the rate

```
  1.  NATURE OF THE REACTANTS
      Ionic reactions (AgNO3 + NaCl) are almost instant - only ions have
      to meet. Covalent reactions need bonds to break, so they are slow.

  2.  CONCENTRATION
      More concentrated  ->  more collisions per second  ->  faster.
      (For gases, PRESSURE does the same job.)

  3.  SURFACE AREA
      Powder reacts far faster than a lump - more surface to collide with.

  4.  TEMPERATURE
      The big one. A rise of 10 K roughly DOUBLES the rate, because far
      more molecules now have energy above the activation energy.

  5.  CATALYST
      Provides an ALTERNATIVE PATH with a LOWER activation energy.
      It speeds up BOTH the forward and the backward reaction equally,
      so it does NOT change the equilibrium position, and it is
      recovered unchanged at the end.

  6.  LIGHT (for photochemical reactions)
      H2 + Cl2 is very slow in the dark and explosive in sunlight.
```

## WORKED EXAMPLE 23

The rate of a reaction doubles for every 10 K rise. The reaction takes
place at 300 K. By what factor does the rate increase if the temperature is
raised to 330 K?

```
  Rise  =  330  -  300   =   30 K

  Number of 10 K steps   =   30 / 10   =   3

  Factor  =  2^3   =   8

  ANSWER: the rate becomes 8 times faster.
```

---

# TOPIC 20 — Rate law and rate constant

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   RATE LAW (rate equation)                                           |
  |                                                                      |
  |        Rate   =   k  [A]^x  [B]^y                                    |
  |                                                                      |
  |   x and y are found ONLY BY EXPERIMENT. They are NOT the             |
  |   coefficients from the balanced equation (except by luck).          |
  |                                                                      |
  |   ORDER  =  x  +  y                                                  |
  |                                                                      |
  |                                                                      |
  |   RATE CONSTANT  k  (also called SPECIFIC REACTION RATE)             |
  |                                                                      |
  |   It is the rate of the reaction when the concentration of EVERY     |
  |   reactant is 1 mol L-1.                                             |
  |                                                                      |
  |   k depends on TEMPERATURE and on the CATALYST.                      |
  |   k does NOT depend on concentration.                                |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Proof that the rate law is not read off the equation:

```
       2 N2O5   ---->   4 NO2   +   O2      is FIRST order,  rate = k [N2O5]

       H2  +  Cl2   ---->   2 HCl           is ZERO order in sunlight

  The coefficients say nothing about the order. Only experiment does.
```

## Units of k

```
                                                             1 - n
  For an overall order  n :        unit of k   =   ( mol L-1 )      x  s-1

  +---------+-----------------------------+
  |  ORDER  |  UNIT OF k                  |
  +---------+-----------------------------+
  |    0    |  mol L-1 s-1                |
  |    1    |  s-1                        |
  |    2    |  L mol-1 s-1                |
  |    3    |  L2 mol-2 s-1               |
  +---------+-----------------------------+

  MEMORY: only the FIRST order rate constant has a "pure time" unit.
          If a question gives k in s-1 , the reaction is FIRST ORDER.
```

## WORKED EXAMPLE 24

From the data below find the order with respect to A, the order with
respect to B, the overall order, the rate law, and the value of k.

```
  +-------+---------+---------+----------------------------+
  | Expt  |  [A]    |  [B]    |  initial rate (mol L-1 s-1)|
  +-------+---------+---------+----------------------------+
  |   1   |  0.1    |  0.1    |   2.0 x 10^-3              |
  |   2   |  0.2    |  0.1    |   4.0 x 10^-3              |
  |   3   |  0.1    |  0.2    |   8.0 x 10^-3              |
  +-------+---------+---------+----------------------------+
```

```
  STEP 1  ORDER WITH RESPECT TO A
          Compare experiments 1 and 2 - here [B] is held constant.

          [A] doubled  ( 0.1 -> 0.2 )
          rate doubled ( 2.0e-3 -> 4.0e-3 )    that is  2  =  2^1

          So   x  =  1


  STEP 2  ORDER WITH RESPECT TO B
          Compare experiments 1 and 3 - here [A] is held constant.

          [B] doubled  ( 0.1 -> 0.2 )
          rate went x4 ( 2.0e-3 -> 8.0e-3 )    that is  4  =  2^2

          So   y  =  2


  STEP 3  RATE LAW AND OVERALL ORDER

          Rate  =  k [A] [B]^2          overall order  =  1 + 2  =  3


  STEP 4  VALUE OF k   -  use experiment 1

                    rate                 2.0 x 10^-3
          k  =  --------------  =  -------------------------
                  [A] [B]^2          ( 0.1 ) ( 0.1 )^2

                  2.0 x 10^-3         2.0 x 10^-3
             =  ----------------  =  ---------------
                ( 0.1 )( 0.01 )        1.0 x 10^-3

             =  2.0

          Unit for third order:   L2 mol-2 s-1

          k  =  2.0  L2 mol-2 s-1
```

> **TRAP:** to find the order in A you MUST use two experiments where **only
> [A] changes**. Comparing rows where both concentrations changed gives
> nonsense.

---

# TOPIC 21 — ORDER versus MOLECULARITY

This comparison is asked as a 4-mark question almost every year. Learn the
table by heart.

```
  ORDER          =  the sum of the powers of the concentration terms in
                    the EXPERIMENTALLY determined rate law.

  MOLECULARITY   =  the number of reacting species (atoms, ions or
                    molecules) that must COLLIDE SIMULTANEOUSLY in ONE
                    ELEMENTARY step for the reaction to occur.
```

```
  +----+---------------------------------+--------------------------------+
  | No.|  ORDER                          |  MOLECULARITY                  |
  +----+---------------------------------+--------------------------------+
  | 1  | Found by EXPERIMENT             | Found from the reaction        |
  |    |                                 | MECHANISM (theoretical)        |
  +----+---------------------------------+--------------------------------+
  | 2  | Can be ZERO                     | Can NEVER be zero              |
  +----+---------------------------------+--------------------------------+
  | 3  | Can be a FRACTION (1/2, 3/2)    | Always a WHOLE NUMBER          |
  +----+---------------------------------+--------------------------------+
  | 4  | Can be NEGATIVE (rare)          | Never negative                 |
  +----+---------------------------------+--------------------------------+
  | 5  | Applies to the OVERALL reaction | Applies only to an ELEMENTARY  |
  |    | whether simple or complex       | (single step) reaction         |
  +----+---------------------------------+--------------------------------+
  | 6  | CHANGES with temperature,       | Does NOT change                |
  |    | pressure or excess of a         |                                |
  |    | reactant                        |                                |
  +----+---------------------------------+--------------------------------+
  | 7  | Rarely more than 3              | Rarely more than 3 (a 4-body   |
  |    |                                 | collision is nearly impossible)|
  +----+---------------------------------+--------------------------------+
```

```
  FOR AN ELEMENTARY REACTION ONLY, order = molecularity.
  For a COMPLEX (multi-step) reaction, the overall order is decided by the
  SLOWEST step, which is called the RATE DETERMINING STEP.
```

## WORKED EXAMPLE 25

For the reaction `2 NO + O2 ---> 2 NO2`, the experimental rate law is
`Rate = k [NO]^2 [O2]`. Find the order, the molecularity, and the units of k.

```
  ORDER          =  2  +  1   =   3          (from the rate law)

  MOLECULARITY   =  2 NO + 1 O2  =  3        (three particles must collide,
                                              if it is elementary)

  Here order = molecularity = 3, so this behaves as an elementary reaction.

  UNITS OF k  for order 3:

                                    1 - 3
        unit  =  ( mol L-1 )              x  s-1

              =  ( mol L-1 )^-2   x  s-1

              =  L2 mol-2 s-1
```

> **TRAP:** do not read the order off the balanced equation. For
> `2 N2O5 -> 4 NO2 + O2` the coefficient says 2 but the reaction is FIRST
> order. Order comes from the RATE LAW only.

---

# TOPIC 22 — ZERO ORDER reactions

## Derivation (learn to write this out)

```
  For    A   ---->   products      with   Rate = k [A]^0 = k

        - d[A]
        --------   =   k
           dt

        - d[A]     =   k  dt

  Integrate from [A]0 at t = 0 to [A] at time t :

        - ( [A]  -  [A]0 )   =   k t

  +----------------------------------------------------------------------+
  |                                                                      |
  |        [A]   =   [A]0   -   k t                                      |
  |                                                                      |
  |                    [A]0  -  [A]                                      |
  |          k   =   ------------------                                  |
  |                          t                                           |
  |                                                                      |
  |        UNIT of k :   mol L-1 s-1                                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The graph

```
      [A] |
          |*
          |  *
          |    *          straight line
          |      *        y-intercept = [A]0
    [A]0  |        *      SLOPE  =  - k
          |          *
          |            *
          |              *
          +---------------------------- t

  A plot of [A] against t is a STRAIGHT LINE with a NEGATIVE slope.
  The concentration falls by the SAME AMOUNT every second, no matter how
  much is left.
```

## Half life

```
  Put  [A]  =  [A]0 / 2   at  t = t(1/2) :

        [A]0                      [A]0
        ------   =   [A]0   -  k t(1/2)      ->    k t(1/2)  =  ------
          2                                                       2

  +----------------------------------------------------------------------+
  |                                                                      |
  |                       [A]0                                           |
  |        t(1/2)   =   --------          DIRECTLY PROPORTIONAL to [A]0  |
  |                       2 k                                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Where zero order actually happens

```
  *  Decomposition of ammonia on a hot PLATINUM surface
  *  Decomposition of HI on a GOLD surface
  *  Decomposition of N2O on a hot platinum surface
  *  Photochemical reaction of H2 with Cl2

  WHY?  The metal surface has only so many active sites. Once they are all
        covered, adding more gas cannot speed anything up, so the rate
        stops depending on concentration.
```

## WORKED EXAMPLE 26

A zero order reaction starts at `[A]0 = 0.50 mol L-1`. After `100 s` the
concentration is `0.40 mol L-1`. Find k, the half life, and the time for
the reaction to be complete.

```
  STEP 1  Rate constant

              [A]0  -  [A]         0.50  -  0.40         0.10
        k =  ---------------   =  ----------------   =  --------
                    t                   100               100

          =  1.0 x 10^-3     mol L-1 s-1


  STEP 2  Half life

                  [A]0              0.50               0.50
        t(1/2) = --------   =  ----------------  =  -----------
                   2 k          2 x 1.0 x 10^-3      2.0 x 10^-3

               =  250   s


  STEP 3  Time for COMPLETE reaction   ( [A] = 0 )

              [A]0  -  0            0.50
        t  =  ------------  =  --------------  =  500  s
                   k             1.0 x 10^-3

  NOTE:  a zero order reaction actually FINISHES. A first order reaction
         never truly finishes, it only halves again and again.
```

> **TRAP:** for zero order, `t(1/2)` is proportional to `[A]0`. Double the
> starting concentration and the half life doubles. This is the OPPOSITE of
> first order, where `t(1/2)` does not care about `[A]0` at all.

---

# TOPIC 23 — FIRST ORDER reactions

## Derivation (the most-asked 8-mark derivation in this chapter)

```
  For    A   ---->   products      with   Rate = k [A]

        - d[A]
        --------   =   k [A]
           dt

         d[A]
        ------   =   - k  dt
         [A]

  Integrate:

        ln [A]   =   - k t   +   constant

  At  t = 0 ,  [A] = [A]0  ->  constant  =  ln [A]0

        ln [A]   =   - k t   +   ln [A]0

               [A]0
        ln  ---------   =   k t
                [A]

  Change ln to log by multiplying by 2.303 :

  +----------------------------------------------------------------------+
  |                                                                      |
  |               2.303              [A]0                                |
  |      k   =   --------    log   ---------                             |
  |                 t                [A]                                 |
  |                                                                      |
  |   OR, in the "a and x" form used in many textbooks:                  |
  |                                                                      |
  |               2.303                 a                                |
  |      k   =   --------    log   -----------                           |
  |                 t                 a  -  x                            |
  |                                                                      |
  |      a      =  initial concentration                                 |
  |      x      =  amount reacted in time t                              |
  |      a - x  =  amount LEFT after time t                              |
  |                                                                      |
  |      UNIT of k :   s-1     (time inverse, NO concentration)          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The graphs

```
  GRAPH 1                            GRAPH 2

  log[A] |*                          log([A]0/[A]) |              *
         |  *                                      |          *
         |    *                                    |      *
         |      *                                  |  *      slope = k/2.303
         |        *                                |*
         |  slope = - k / 2.303                    +-------------------- t
         +----------------- t

  GRAPH 3  -  the shape of the concentration curve

     [A] |*
         | *
         |   *
   [A]0/2|- - -*
         |     |   *
   [A]0/4|- - -|- - - -* . .
         |     |       |     . . . . .
         +-----+-------+------------------- t
             t(1/2)  2 t(1/2)

     EQUAL time intervals cut the concentration in HALF each time.
```

## Half life

```
  Put  [A] = [A]0 / 2  and  t = t(1/2)  in the integrated equation:

              2.303              [A]0
     k   =   ---------    log  ----------
              t(1/2)            [A]0 / 2

              2.303
         =   ---------    log ( 2 )
              t(1/2)

              2.303  x  0.3010            0.693
         =   -------------------   =    ---------
                  t(1/2)                 t(1/2)

  +----------------------------------------------------------------------+
  |                                                                      |
  |                      0.693                                           |
  |       t(1/2)   =   ---------                                         |
  |                        k                                             |
  |                                                                      |
  |    It does NOT depend on the starting concentration at all.          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Examples of first order reactions

```
  *  ALL radioactive decay
  *  Decomposition of N2O5      :   2 N2O5  ->  4 NO2  +  O2
  *  Decomposition of H2O2      :   2 H2O2  ->  2 H2O  +  O2
  *  Hydrolysis of an ester (pseudo first order)
  *  Inversion of cane sugar (pseudo first order)
```

## WORKED EXAMPLE 27

A first order reaction is `50 %` complete in `40 minutes`. Calculate
(i) the rate constant, (ii) the time for the reaction to be `90 %` complete.

```
  STEP 1  50 % complete means t = t(1/2) = 40 min

              0.693           0.693
        k  = ---------  =   ---------   =   0.01733   min-1
              t(1/2)           40


  STEP 2  90 % complete
          Start with 100 parts. 90 reacted, so 10 are LEFT.

              [A]0  =  100         [A]  =  10

              2.303              [A]0
        k  = --------    log   ---------
                t                [A]

              2.303              100
   0.01733 = --------    log   -------
                t                10

              2.303
   0.01733 = --------    x   log 10
                t

              2.303
   0.01733 = --------    x   1
                t

              2.303           2.303
        t  = ---------  =  -----------   =   132.9   min
             0.01733        0.01733

  ANSWER:   k = 0.0173 min-1  and  t(90 %) = about 133 minutes.
```

**Useful shortcut you can quote:**

```
  t(90 %)   =   3.32  x  t(1/2)
  t(99 %)   =   6.64  x  t(1/2)   =   2 x t(90 %)
  t(75 %)   =   2     x  t(1/2)

  Check with our numbers:  3.32 x 40  =  132.8 min.   Matches. 
```

## WORKED EXAMPLE 28

The rate constant of a first order reaction is `2.0 x 10^-3 s-1`. If the
initial concentration is `0.10 mol L-1`, what will it be after `500 s`?

```
              2.303              [A]0
        k  = --------    log   ---------
                t                [A]


              [A]0          k  x  t          ( 2.0 x 10^-3 ) ( 500 )
   log     ---------  =  -----------   =   -----------------------------
              [A]           2.303                     2.303

                                              1.0
                                          =  -------   =  0.4342
                                             2.303

              [A]0
            ---------   =   antilog ( 0.4342 )   =   2.717
              [A]

                            0.10
              [A]     =   ---------   =   0.0368     mol L-1
                            2.717

  ANSWER:   about 0.037 mol L-1 is left.
```

> **TRAP:** the log fraction is `[A]0 / [A]` — the **BIGGER number on top**.
> Turn it upside down and you get a negative k, which is impossible.

---

# TOPIC 24 — PSEUDO FIRST ORDER reactions

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   A PSEUDO FIRST ORDER REACTION is a reaction which is really of     |
  |   HIGHER ORDER (usually second), but which BEHAVES as first order    |
  |   because one of the reactants is present in such LARGE EXCESS that  |
  |   its concentration hardly changes during the reaction.              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Example 1 — hydrolysis of an ester

```
     CH3COOC2H5  +  H2O   ---(H+)-->   CH3COOH  +  C2H5OH

  TRUE rate law :     Rate  =  k [ester] [H2O]        second order

  But water is the SOLVENT. There is so much of it that [H2O] is
  effectively CONSTANT. Absorb it into the rate constant:

     Rate  =  ( k [H2O] ) [ester]   =   k' [ester]

  where  k' = k [H2O]  is the new (pseudo) first order rate constant.

  So the reaction OBEYS first order kinetics even though it is really
  second order.
```

## Example 2 — inversion of cane sugar

```
     C12H22O11  +  H2O   ---(H+)-->   C6H12O6   +   C6H12O6
       sucrose                        glucose       fructose

  Again water is in huge excess  ->  pseudo first order.
  The mixture rotates plane polarised light the OTHER way at the end,
  which is why it is called "inversion".
```

## WORKED EXAMPLE 29

In the acid hydrolysis of an ester in water, `[H2O] = 55.5 mol L-1` and it
changes by less than 0.1 %. The true second order constant is
`k = 6.0 x 10^-5 L mol-1 s-1`. Find the pseudo first order rate constant
and the half life.

```
  STEP 1  Pseudo first order constant

        k'  =  k  x  [H2O]

            =  ( 6.0 x 10^-5 )  x  ( 55.5 )

            =  3.33 x 10^-3     s-1

        Notice the unit changed from L mol-1 s-1 to s-1 - that is the
        signature of first order.


  STEP 2  Half life

                 0.693             0.693
        t(1/2) = -------   =   --------------   =   208.1  s
                   k'           3.33 x 10^-3

  ANSWER:  k' = 3.33 x 10^-3 s-1 ,  t(1/2) = about 208 s.
```

> **TRAP:** in the exam, "pseudo" always means "one reactant is in large
> excess". Give the ESTER hydrolysis or the CANE SUGAR inversion as your
> example — those two are the ones in the textbook.

---

# TOPIC 25 — Temperature and the ARRHENIUS EQUATION

## The observation

```
  For most reactions, a rise of just 10 K roughly DOUBLES the rate.

  WHY?  A 10 K rise raises the average kinetic energy by only about 3 %.
        That cannot double anything.

  The real reason: it roughly DOUBLES THE NUMBER OF MOLECULES that have
  energy ABOVE the activation energy. Only those molecules can react.
```

```
   number of
   molecules
       |
       |          . .
       |        .     .           T1 (lower temperature)
       |       .        .
       |      .           .
       |     .              .  .
       |    .   . . . . .        . . .    T2 = T1 + 10
       |   .  .                        . . . .
       |  . .                                  . . . . .
       +--------------------------------|-------------------- energy
                                        Ea
                                   shaded area to the RIGHT of Ea
                                   = molecules that CAN react.
                                   It roughly DOUBLES from T1 to T2.
```

## The equation

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                            - Ea / R T                                |
  |         k    =     A   e                                             |
  |                                                                      |
  |    A   =  frequency factor (or pre-exponential factor)               |
  |           = total number of collisions per second, correctly         |
  |             oriented. Same units as k.                               |
  |    Ea  =  ACTIVATION ENERGY, in J mol-1                              |
  |    R   =  8.314 J K-1 mol-1                                          |
  |    T   =  temperature in KELVIN                                      |
  |                                                                      |
  |                                                                      |
  |    Take log on both sides:                                           |
  |                                                                      |
  |                                    Ea         1                      |
  |         log k   =   log A   -   ---------- x ---                     |
  |                                  2.303 R      T                      |
  |                                                                      |
  |    which is a straight line   y = c + m x   with                     |
  |         y = log k ,  x = 1/T ,  intercept = log A                    |
  |                                                                      |
  |                             - Ea                                     |
  |         SLOPE   =        ------------                                |
  |                            2.303 R                                   |
  |                                                                      |
  |                                                                      |
  |    TWO-TEMPERATURE FORM  (the one used in numericals):               |
  |                                                                      |
  |             k2            Ea       +-   1        1   -+              |
  |        log ----   =   ---------  x |  -----  -  ----- |              |
  |             k1          2.303 R    +-   T1        T2 -+              |
  |                                                                      |
  |             k2            Ea            ( T2  -  T1 )                |
  |        log ----   =   ---------  x    -----------------              |
  |             k1          2.303 R            T1  T2                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## The Arrhenius graph

```
   log k |*
         |   *
         |      *
         |         *        SLOPE  =  - Ea / 2.303 R
         |            *
         |               *
         |                  *
         |                     *
   log A |. . . . . . . . . . . . . (intercept, at 1/T = 0)
         +---------------------------------- 1 / T

   A straight line with a NEGATIVE slope.
   Steeper line  ->  BIGGER activation energy.
```

## Activation energy

```
  ACTIVATION ENERGY  Ea  =  the MINIMUM extra energy that reactant
  molecules must have, above their average energy, for a collision to
  actually produce products.

  Think of it as a HILL between reactants and products. Molecules that
  cannot climb the hill just bounce off and stay reactants.

     energy |            /\
            |           /  \    <-- ACTIVATED COMPLEX (top of the hill)
            |          /    \
            |    Ea-> /      \
            |   _____/        \
            |  react-          \______
            |  ants             products
            +---------------------------- reaction path

  A CATALYST does NOT change the reactants or the products.
  It digs a TUNNEL through the hill - a new path with a LOWER Ea.
```

## WORKED EXAMPLE 30

The rate constant of a reaction DOUBLES when the temperature is raised from
`298 K` to `308 K`. Calculate the activation energy.
(R = 8.314 J K-1 mol-1)

```
  DATA
      k2 / k1  =  2          T1 = 298 K          T2 = 308 K

              k2            Ea            T2  -  T1
   log     -------   =   ---------  x   --------------
              k1           2.303 R          T1  T2


                              Ea                308  -  298
   log ( 2 )   =    ----------------------  x  --------------
                     2.303  x  8.314              298 x 308


                              Ea                    10
       0.3010  =    ----------------------  x   -----------
                          19.147                   91784


  Rearranging:

              0.3010   x   19.147   x   91784
      Ea  =  ----------------------------------
                            10


      Step by step:
             0.3010  x  19.147     =   5.7633
             5.7633  x  91784      =   529 000   (approximately 528 980)
             528 980 / 10          =   52 898

      Ea  =  52 898  J mol-1

          =  52.9    kJ mol-1

  ANSWER:  about 52.9 kJ mol-1.
```

## WORKED EXAMPLE 31

For a reaction, `Ea = 100 kJ mol-1` and `A = 6.0 x 10^14 s-1`.
Calculate `k` at `300 K`. (R = 8.314)

```
                                Ea
        log k   =   log A  -  ----------
                               2.303 R T

                                    100000
                =  log ( 6.0 x 10^14 )  -  --------------------------
                                            2.303 x 8.314 x 300

        Denominator :  2.303 x 8.314  =  19.147
                       19.147 x 300   =  5744.1

                       100000 / 5744.1  =  17.409

        log ( 6.0 x 10^14 )  =  log 6.0  +  14  =  0.7782 + 14 = 14.7782

        log k   =   14.7782   -   17.409    =    - 2.631

        k   =   antilog ( - 2.631 )
            =   antilog ( 0.369 )  x  10^-3
            =   2.34  x  10^-3     s-1

  ANSWER:  k = about 2.34 x 10^-3 s-1.
```

> **TRAP 1:** temperature must be in **KELVIN**. `25 C = 298 K`. Using 25 in
> the formula destroys the answer.

> **TRAP 2:** `Ea` in the formula is in **J mol-1** when R = 8.314. If the
> question gives Ea in kJ, multiply by 1000 first. If it asks for the answer
> in kJ, divide the final answer by 1000.

> **TRAP 3:** in the two-temperature form, `T1` is the LOWER temperature and
> `k1` is its rate constant. Keep the pairs together.

---

# TOPIC 26 — Collision theory (outline)

```
  THE BASIC PICTURE
  Molecules are treated as hard spheres. A reaction happens when they
  COLLIDE. Not every collision works, though.

  FOR A COLLISION TO PRODUCE PRODUCTS, TWO CONDITIONS MUST BOTH HOLD:

    1.  ENERGY BARRIER
        The colliding pair must together have energy equal to or greater
        than the ACTIVATION ENERGY Ea.

    2.  ORIENTATION BARRIER
        They must be lined up the right way round when they hit.

           WRONG ORIENTATION            RIGHT ORIENTATION

             A-B      C-D                 A-B      C-D
              |        |                   \        /
              v        v                    v      v
             sideways collision            head-on, reacting ends
             -> bounce off                 meet -> REACTION
```

```
  THE COLLISION THEORY RATE EXPRESSION

                              - Ea / R T
        Rate   =    P   Z   e

        Z  =  COLLISION FREQUENCY - the number of collisions per second
              per unit volume.

        e^(-Ea/RT)  =  the FRACTION of collisions that carry enough energy.

        P  =  the STERIC FACTOR (or probability factor) - it corrects for
              the fact that many energetic collisions still fail because
              the molecules were badly oriented.

  Comparing with  k = A e^(-Ea/RT) , you can see that   A  =  P Z.

  LIMITATIONS
    *  It treats molecules as hard spheres with no structure.
    *  It works well only for simple gaseous bimolecular reactions.
    *  The steric factor P has to be fitted from experiment; the theory
       does not predict it.
```

## WORKED EXAMPLE 32

What fraction of collisions has enough energy to react, if
`Ea = 100 kJ mol-1` at `300 K`? (R = 8.314)

```
                                     - Ea / R T
     fraction   =   e

                          Ea               100000
     First find    ------------   =   --------------------
                         R T             8.314  x  300

                                          100000
                                    =   -----------   =   40.09
                                          2494.2

     Convert to base 10:

           40.09
        ----------   =   17.41
           2.303

     fraction   =   10^( - 17.41 )

                =   antilog ( 0.59 )  x  10^-18

                =   3.9  x  10^-18

  Only about 4 collisions in every 10^18 have enough energy.
  That is why reactions with a big Ea are so slow, and why raising the
  temperature helps so dramatically - it multiplies this tiny fraction.
```

---
---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  ELECTROCHEMISTRY
  ----------------
  [ ]  Did I use  E(cell) = E(cathode) - E(anode)  with BOTH values as
       REDUCTION potentials, and did I subtract the anode WITH ITS SIGN?
       ( +0.34 ) - ( -0.76 ) = +1.10 , not -0.42.

  [ ]  Is my n the electrons in the BALANCED equation?

  [ ]  In the Nernst equation, did I put PRODUCTS on top and REACTANTS
       below, and leave out every SOLID and PURE LIQUID?

  [ ]  Did I divide 0.0591 by n and not forget the division?

  [ ]  In delta G = - n F E , is my answer in JOULES? Did I convert to kJ
       if the question wanted kJ? Did I keep the minus sign?

  [ ]  In Faraday's law, is the TIME IN SECONDS?
       30 min = 1800 s.  1 hour = 3600 s.

  [ ]  Is my n in  w = M I t / (n x 96500)  the electrons per ION?
       Ag+ -> 1 , Cu2+ -> 2 , Al3+ -> 3.

  [ ]  In molar conductivity, did I multiply kappa by 1000 and divide by
       the molarity? Is the unit S cm2 mol-1?

  [ ]  Is alpha between 0 and 1? If it is more than 1, I divided upside
       down.

  [ ]  Did I DRAW the Daniell cell / SHE diagram and LABEL the anode,
       cathode, salt bridge and the direction of electron flow?
       Labels carry marks.

  [ ]  For aqueous NaCl, did I write H2 at the cathode - not sodium?


  CHEMICAL KINETICS
  -----------------
  [ ]  Did I divide by the coefficient when writing the rate?
       For N2 + 3H2 -> 2NH3, rate = -(1/3) d[H2]/dt.

  [ ]  Did I take the order from the RATE LAW, never from the balanced
       equation?

  [ ]  In the first order equation, is [A]0 on TOP of the log?

  [ ]  "90 % complete" means 10 parts LEFT, not 90 left.

  [ ]  Is my unit for k correct?
       zero order -> mol L-1 s-1 ,  first order -> s-1

  [ ]  Is t(1/2) = 0.693/k used ONLY for first order?
       For zero order it is [A]0 / 2k.

  [ ]  In the Arrhenius equation, is T in KELVIN and Ea in J mol-1?

  [ ]  Did I label BOTH AXES on every graph I drew?

  [ ]  Did I write the UNIT after every single numerical answer?
       An answer with no unit loses a mark, every single time.
```
