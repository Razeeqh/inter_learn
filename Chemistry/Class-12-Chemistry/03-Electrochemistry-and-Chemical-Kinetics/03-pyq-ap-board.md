# Electrochemistry and Chemical Kinetics — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Chemistry, 2nd Year, 60 marks · **Chapter 3**

> **About the year tags:** BIEAP recycles the same questions across many
> sessions, so these are grouped by **how often they appear**, not tagged to
> one single exam year. Nothing here is presented as "the 2019 paper" or
> anything like it, because that would be guessing.
> Cross-check with the official papers at **bie.ap.gov.in** before your exam.

**Where this chapter appears in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually 2 or 3 questions
                                                 (often 1 from each half)
  Section B  (4 marks each, answer any 6)    ->  usually 2 questions
  Section C  (8 marks each, answer any 2)    ->  appears very regularly

  Realistic haul:  12 to 18 marks out of 60.
  This is the biggest single chapter in the 2nd year paper.
```

**Constants you are expected to know without being told:**

```
   F = 96500 C mol-1      R = 8.314 J K-1 mol-1      0.0591 V at 298 K
   log 2 = 0.3010         0.693                      22.4 L at STP
```

---
---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# ===============================================================

## Topic: Cells, electrodes, EMF

### Q A1
What is a salt bridge? Write any two of its functions.

**ANSWER:**
```
  A SALT BRIDGE is a U-shaped glass tube filled with a paste of agar-agar
  saturated with an inert electrolyte such as KCl, KNO3 or NH4NO3.

  FUNCTIONS (any two)
    1.  It completes the electrical circuit between the two half cells.
    2.  It maintains electrical neutrality in both half cells.
    3.  It prevents the two solutions from mixing.
    4.  It eliminates the liquid junction potential.
```

---

### Q A2
Distinguish between a galvanic cell and an electrolytic cell (any two points).

**ANSWER:**
```
  GALVANIC CELL                      ELECTROLYTIC CELL
  ------------------------------     --------------------------------
  chemical energy -> electrical      electrical energy -> chemical
  reaction is SPONTANEOUS            reaction is NON-spontaneous
  E(cell) is POSITIVE                needs an outside battery
  anode is NEGATIVE                  anode is POSITIVE
```

---

### Q A3
Write the cell notation for the reaction
`Zn(s) + Cu2+(aq) ---> Zn2+(aq) + Cu(s)`.

**ANSWER:**
```
  Zn is oxidised   ->  ANODE   ->  written on the LEFT
  Cu2+ is reduced  ->  CATHODE ->  written on the RIGHT

        Zn | Zn2+ (1 M) || Cu2+ (1 M) | Cu

  Single line = phase boundary.   Double line = salt bridge.
```

---

### Q A4
What is a standard hydrogen electrode? What is its electrode potential?

**ANSWER:**
```
  It is a platinum foil coated with platinum black, dipped in 1 M HCl,
  with pure hydrogen gas at 1 bar bubbled over it at 298 K.

        Pt , H2 (1 bar) | H+ (1 M)

  Its standard electrode potential is taken as  E0 = 0.00 V  BY DEFINITION.
  It is the reference against which all other electrodes are measured.
```

---

### Q A5
Calculate the standard EMF of the cell
`Mg | Mg2+ || Ag+ | Ag`, given `E0(Mg2+/Mg) = -2.37 V` and
`E0(Ag+/Ag) = +0.80 V`.

**ANSWER:**
```
  E0(cell)  =  E0(cathode)  -  E0(anode)

            =  ( + 0.80 )   -  ( - 2.37 )

            =  0.80  +  2.37

            =  + 3.17   V
```

---

### Q A6
Write the Nernst equation for the electrode reaction
`Cu2+(aq) + 2 e- ---> Cu(s)` at 298 K.

**ANSWER:**
```
                          0.0591
      E   =   E0     +   ---------   log [Cu2+]
                            2

  ( n = 2 because two electrons are involved.
    Cu is a solid, so it does not appear in the log. )
```

---

### Q A7
The EMF of a cell is 1.10 V and 2 electrons are transferred. Calculate
delta G for the cell reaction.

**ANSWER:**
```
   delta G   =   - n F E

             =   - ( 2 ) ( 96500 ) ( 1.10 )

             =   - 212300   J

             =   - 212.3    kJ mol-1

   Negative, so the reaction is spontaneous.
```

---

### Q A8
Write any two applications of the electrochemical series.

**ANSWER:**
```
  1.  To compare the strength of oxidising and reducing agents.
      More positive E0  ->  stronger oxidising agent.
      More negative E0  ->  stronger reducing agent.

  2.  To predict whether a displacement reaction will occur.
      A metal displaces any metal lying below it in the series.

  ( Others: predicting whether a metal liberates H2 from dilute acid,
    and calculating the EMF of a cell. )
```

---

### Q A9
Why does a metal like copper not liberate hydrogen from dilute HCl?

**ANSWER:**
```
  E0(Cu2+/Cu)  =  + 0.34 V , which is POSITIVE.

  Only metals with a NEGATIVE standard reduction potential lie above
  hydrogen and can displace it from acids.
  Copper lies below hydrogen, so it cannot reduce H+ to H2.
```

---

## Topic: Conductance

### Q A10
Define conductivity (specific conductance). Write its SI unit.

**ANSWER:**
```
  CONDUCTIVITY  kappa  is the conductance of a solution held between two
  electrodes 1 cm apart, each of cross-sectional area 1 cm2 - in other
  words the conductance of one cubic centimetre of the solution.

              1                l
   kappa  =  -----   =   G  x  ---
             rho                A

  Unit :   S m-1     (commonly used:  S cm-1)
```

---

### Q A11
Define molar conductivity. Write its unit.

**ANSWER:**
```
  MOLAR CONDUCTIVITY is the conducting power of all the ions produced by
  ONE MOLE of an electrolyte in solution.

                     kappa   x   1000
      Lambda(m)  =  -------------------          C in mol L-1
                            C

  Unit :   S cm2 mol-1
```

---

### Q A12
What is cell constant? Give its unit and how it is determined.

**ANSWER:**
```
                            l         distance between the electrodes
   CELL CONSTANT   =   -----   =   ----------------------------------
                           A          area of each electrode

   Unit :  cm-1  (or m-1)

   It is found by measuring the resistance of a STANDARD KCl solution
   whose conductivity is already known:

           cell constant  =  kappa (of KCl)  x  R (measured)
```

---

### Q A13
The resistance of a conductivity cell filled with 0.1 M KCl is 100 ohm.
The conductivity of 0.1 M KCl is `1.29 x 10^-2 S cm-1`. Find the cell
constant.

**ANSWER:**
```
   cell constant   =   kappa   x   R

                   =   ( 1.29 x 10^-2 )  x  ( 100 )

                   =   1.29    cm-1
```

---

### Q A14
The conductivity of 0.001 M acetic acid is `4.95 x 10^-5 S cm-1`.
Calculate its molar conductivity.

**ANSWER:**
```
                     kappa  x  1000        ( 4.95 x 10^-5 ) x 1000
   Lambda(m)   =   -----------------  =  ---------------------------
                           C                        0.001

               =   ( 4.95 x 10^-5 )  x  10^6

               =   49.5     S cm2 mol-1
```

---

### Q A15
State Kohlrausch's law of independent migration of ions.

**ANSWER:**
```
  At infinite dilution, the molar conductivity of an electrolyte is the
  SUM of the individual contributions of its cation and its anion, each
  ion contributing INDEPENDENTLY of the other ion associated with it.

        Lambda0(m)   =   v(+) lambda0(+)   +   v(-) lambda0(-)

  Example :   Lambda0(NaCl)  =  lambda0(Na+)  +  lambda0(Cl-)
```

---

### Q A16
Calculate `Lambda0` for NH4OH given
`lambda0(NH4+) = 73.5` and `lambda0(OH-) = 198.0 S cm2 mol-1`.

**ANSWER:**
```
   Lambda0(NH4OH)  =  lambda0(NH4+)  +  lambda0(OH-)

                   =   73.5   +   198.0

                   =   271.5      S cm2 mol-1
```

---

### Q A17
Why does molar conductivity increase on dilution while conductivity
decreases?

**ANSWER:**
```
  CONDUCTIVITY falls because it is the conductance of 1 cm3 of solution,
  and after dilution that 1 cm3 contains FEWER ions.

  MOLAR CONDUCTIVITY rises because it is the conductance of all the ions
  from ONE MOLE. On dilution the ions move further apart (less inter-ionic
  attraction) and, for a weak electrolyte, MORE ions are produced because
  the degree of dissociation increases.
```

---

## Topic: Electrolysis

### Q A18
State Faraday's first law of electrolysis.

**ANSWER:**
```
  The mass of a substance deposited or liberated at an electrode is
  DIRECTLY PROPORTIONAL to the quantity of electricity passed through
  the electrolyte.

           w   =   Z  Q   =   Z  I  t

  Z is the electrochemical equivalent, I is in amperes, t is in seconds.
```

---

### Q A19
State Faraday's second law of electrolysis.

**ANSWER:**
```
  When the SAME quantity of electricity is passed through different
  electrolytes connected in SERIES, the masses of the substances
  deposited are in the ratio of their EQUIVALENT WEIGHTS.

           w1        E1
         ------  =  ------
           w2        E2
```

---

### Q A20
A current of 1.5 A is passed through AgNO3 solution for 15 minutes.
Calculate the mass of silver deposited. (Ag = 108)

**ANSWER:**
```
   t  =  15  x  60   =   900  s
   n  =  1           ( Ag+ + e-  ->  Ag )

           M  x  I  x  t          108  x  1.5  x  900
   w  =  ----------------  =  ---------------------------
           n  x  96500              1  x  96500

           145800
      =  ----------   =   1.511   g
            96500

   ANSWER:  about 1.51 g of silver.
```

---

### Q A21
What is a Faraday? How much copper is deposited by 1 faraday?
(Cu = 63.5)

**ANSWER:**
```
  1 FARADAY  =  96500 coulombs  =  the charge carried by ONE MOLE of
  electrons.

  For copper :   Cu2+  +  2 e-   ->   Cu

  2 F deposit 1 mol (63.5 g), so 1 F deposits

           63.5 / 2   =   31.75  g   of copper.
```

---

### Q A22
Name the products obtained at the cathode and at the anode during the
electrolysis of (i) molten NaCl and (ii) aqueous NaCl.

**ANSWER:**
```
   (i)   MOLTEN NaCl
             Cathode :  Na metal        Na+ + e-  ->  Na
             Anode   :  Cl2 gas         2 Cl-  ->  Cl2 + 2 e-

   (ii)  AQUEOUS NaCl
             Cathode :  H2 gas          2 H2O + 2 e-  ->  H2 + 2 OH-
             Anode   :  Cl2 gas         2 Cl-  ->  Cl2 + 2 e-
             NaOH is left behind in the solution.
```

---

### Q A23
Why is sodium metal not obtained when aqueous sodium chloride is
electrolysed?

**ANSWER:**
```
  E0(Na+/Na) = - 2.71 V , while the reduction of water / H+ occurs at
  about 0.00 V. Hydrogen is far easier to reduce than sodium, so at the
  cathode WATER is reduced and hydrogen gas is liberated instead of
  sodium. Sodium is obtained only from MOLTEN NaCl, where no water is
  present.
```

---

## Topic: Batteries and corrosion

### Q A24
What is a fuel cell? Write the overall reaction of the H2 - O2 fuel cell.

**ANSWER:**
```
  A FUEL CELL is a galvanic cell in which the reactants (a fuel and
  oxygen) are supplied CONTINUOUSLY from outside, so the cell never runs
  down.

     Anode    :  2 H2  +  4 OH-   ---->   4 H2O  +  4 e-
     Cathode  :  O2  +  2 H2O  +  4 e-   ---->   4 OH-
     -------------------------------------------------------
     Overall  :  2 H2   +   O2    ---->    2 H2O
```

---

### Q A25
What is corrosion? Write the chemical formula of rust.

**ANSWER:**
```
  CORROSION is the slow eating away of a metal from its surface by an
  ELECTROCHEMICAL reaction with air, moisture and other gases in the
  surroundings.

  RUST  =   Fe2O3 . x H2O      (hydrated iron(III) oxide)
```

---

### Q A26
What is galvanisation? Why does it protect iron even when scratched?

**ANSWER:**
```
  GALVANISATION is coating iron or steel with a layer of ZINC.

  E0(Zn2+/Zn) = - 0.76 V  is MORE NEGATIVE than  E0(Fe2+/Fe) = - 0.44 V.
  So zinc is oxidised in preference to iron. Even if the coating is
  scratched, the zinc acts as the anode and corrodes first, protecting
  the iron underneath. This is called sacrificial protection.
```

---

## Topic: Chemical kinetics

### Q A27
Define the rate of a reaction. Write its units.

**ANSWER:**
```
  The RATE OF A REACTION is the change in the concentration of a reactant
  or a product per unit time.

                  - d[reactant]        + d[product]
        rate  =  ---------------   =  ---------------
                      dt                    dt

  Unit :   mol L-1 s-1     (or mol L-1 min-1)
```

---

### Q A28
Distinguish between average rate and instantaneous rate.

**ANSWER:**
```
  AVERAGE RATE          -  the rate measured over a TIME INTERVAL.
                           = delta[X] / delta t , the slope of a chord.

  INSTANTANEOUS RATE    -  the rate at a PARTICULAR INSTANT.
                           = d[X] / dt , the slope of the TANGENT drawn
                           to the concentration-time curve at that point.
```

---

### Q A29
Write the rate expression for `2 N2O5 ---> 4 NO2 + O2` in terms of every
species.

**ANSWER:**
```
              1   d[N2O5]        1   d[NO2]        d[O2]
   rate = -  --- ----------  =  --- ---------  =  --------
              2      dt          4     dt            dt
```

---

### Q A30
Define order of a reaction and molecularity. Write one difference.

**ANSWER:**
```
  ORDER         -  the sum of the powers of the concentration terms in the
                   EXPERIMENTALLY determined rate law.

  MOLECULARITY  -  the number of reacting species that must collide
                   simultaneously in ONE ELEMENTARY step.

  DIFFERENCE :  order can be ZERO or a FRACTION; molecularity is always
                a whole number and can never be zero.
```

---

### Q A31
Write the units of the rate constant for a zero order and for a first
order reaction.

**ANSWER:**
```
   ZERO  order  :   mol L-1 s-1

   FIRST order  :   s-1        (pure time inverse - no concentration term)

   General rule for order n :   ( mol L-1 )^(1-n)  s-1
```

---

### Q A32
The rate constant of a first order reaction is `2.31 x 10^-3 s-1`.
Calculate its half life.

**ANSWER:**
```
                 0.693              0.693
   t(1/2)   =   --------   =   ----------------
                   k             2.31 x 10^-3

            =   300   s          ( = 5 minutes )
```

---

### Q A33
What is a pseudo first order reaction? Give one example.

**ANSWER:**
```
  A reaction which is really of HIGHER order but which BEHAVES as a first
  order reaction, because one of the reactants is present in such large
  EXCESS that its concentration remains practically constant.

  EXAMPLE :  acid hydrolysis of an ester

        CH3COOC2H5  +  H2O   --H+-->   CH3COOH  +  C2H5OH

  Water is the solvent and is in huge excess, so the reaction follows
  first order kinetics even though it is really second order.
```

---

### Q A34
Define activation energy.

**ANSWER:**
```
  ACTIVATION ENERGY Ea is the MINIMUM extra energy, above the average
  energy of the reactant molecules, that colliding molecules must possess
  in order to react and form products.

  It is the height of the energy barrier between the reactants and the
  activated complex. A catalyst works by LOWERING Ea.
```

---

### Q A35
Write the Arrhenius equation and explain the terms.

**ANSWER:**
```
                            - Ea / R T
         k    =    A    e

      k   =  rate constant
      A   =  frequency factor (pre-exponential factor)
      Ea  =  activation energy in J mol-1
      R   =  8.314 J K-1 mol-1
      T   =  temperature in KELVIN

  Log form :        log k  =  log A  -  Ea / ( 2.303 R T )
```

---
---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# ===============================================================

### Q B1
Describe the construction and working of a Daniell cell with a neat
labelled diagram.

**ANSWER:**
```
  CONSTRUCTION
    Beaker 1 : a ZINC rod dipped in 1 M ZnSO4 solution.
    Beaker 2 : a COPPER rod dipped in 1 M CuSO4 solution.
    The two rods are joined by a wire through a voltmeter.
    The two solutions are joined by a SALT BRIDGE (KCl in agar).


                      e-  <----------------------  e-
                      |      +-----------+          |
                      +------|  1.10 V   |----------+
                      |      +-----------+          |
                      |      SALT BRIDGE            |
                      |    +---------------+        |
                +-----+----+   KCl / agar  +---+----+-----+
                |     |    +---------------+   |    |     |
                |  +--+--+                     |  +-+---+ |
                |  | Zn  |                     |  | Cu  | |
                |  | rod |                     |  | rod | |
                |  +-----+                     |  +-----+ |
                | ZnSO4 (1M)                   | CuSO4(1M)|
                | ~ ~ ~ ~ ~                    | ~ ~ ~ ~ ~|
                +-------------+                +----------+
                  ANODE (-)                      CATHODE (+)


  WORKING
    At the ANODE (zinc, negative):   Zn  ->  Zn2+  +  2 e-
        Zinc dissolves, so the zinc rod gets THINNER.

    The electrons flow through the wire to the copper rod.

    At the CATHODE (copper, positive):   Cu2+  +  2 e-  ->  Cu
        Copper is deposited, so the copper rod gets THICKER and the blue
        colour of the CuSO4 fades.

    The salt bridge supplies ions to keep both solutions neutral.

  OVERALL REACTION
        Zn(s)  +  Cu2+(aq)   ---->   Zn2+(aq)  +  Cu(s)

  CELL NOTATION
        Zn | Zn2+ (1 M) || Cu2+ (1 M) | Cu

  E0(cell)  =  E0(Cu2+/Cu)  -  E0(Zn2+/Zn)
            =  ( + 0.34 )   -  ( - 0.76 )   =   + 1.10  V
```

---

### Q B2
What is a standard hydrogen electrode? Describe its construction with a
diagram and explain how it is used to find the electrode potential of
zinc.

**ANSWER:**
```
  CONSTRUCTION
     A platinum foil coated with PLATINUM BLACK is welded to a platinum
     wire and sealed in a glass tube. The foil is dipped in 1 M HCl.
     Pure hydrogen gas at 1 bar is bubbled over the foil at 298 K.


                        H2 gas at 1 bar
                              |
                              v
                      +-------+-------+
                      |   +-------+   |
                      |   |  ***  |   |  <-- Pt foil coated with
                      |   |  ***  |   |      platinum black
                      |   +-------+   |
                      |    o  o  o    |  <-- H2 bubbles
                      |  ~ ~ ~ ~ ~ ~  |
                      |  ~ ~ ~ ~ ~ ~  |  <-- 1 M HCl , [H+] = 1 M
                      +---------------+

                      E0  =  0.00 V   BY DEFINITION


  WHY PLATINUM BLACK ?   It is inert, and its huge surface area adsorbs
  hydrogen gas so that equilibrium is reached quickly.

  HALF REACTION :   2 H+  +  2 e-   <---->   H2

  TO FIND E0 OF ZINC
     Couple the zinc electrode with the SHE:

           Zn | Zn2+ (1 M) || H+ (1 M) | H2 (1 bar) , Pt

     The measured EMF is 0.76 V and zinc is found to be the NEGATIVE
     terminal, so zinc is the anode.

           E0(cell)   =   E0(cathode)  -  E0(anode)
             0.76     =      0.00      -  E0(Zn2+/Zn)
           E0(Zn2+/Zn) =  - 0.76  V
```

---

### Q B3
What is the electrochemical series? Write any four of its applications.

**ANSWER:**
```
  The ELECTROCHEMICAL SERIES is the arrangement of electrodes in order of
  their standard REDUCTION potentials, from the most negative (Li) to the
  most positive (F2), measured against the standard hydrogen electrode.

  APPLICATIONS

   1.  RELATIVE OXIDISING POWER
       The higher (more positive) the E0, the stronger the oxidising
       agent. F2 (+2.87 V) is the strongest oxidising agent.

   2.  RELATIVE REDUCING POWER
       The lower (more negative) the E0, the stronger the reducing agent.
       Li (-3.05 V) is the strongest reducing agent in solution.

   3.  PREDICTING DISPLACEMENT REACTIONS
       A metal displaces from its salt any metal lying below it.
       Zn ( -0.76 ) displaces Cu ( +0.34 ) from CuSO4 solution.

   4.  DISPLACEMENT OF HYDROGEN FROM ACIDS
       Metals with a NEGATIVE E0 (Zn, Fe, Mg) liberate H2 from dilute
       acids. Metals with a POSITIVE E0 (Cu, Ag, Au) do not.

   5.  CALCULATING THE EMF OF A CELL
       E0(cell) = E0(cathode) - E0(anode)

   6.  PREDICTING SPONTANEITY
       E0(cell) positive -> spontaneous ; negative -> not spontaneous.
```

---

### Q B4
Calculate the EMF at 298 K of the cell
`Zn | Zn2+ (0.1 M) || Cu2+ (0.01 M) | Cu`.
Given `E0(Zn2+/Zn) = -0.76 V` and `E0(Cu2+/Cu) = +0.34 V`.

**ANSWER:**
```
  STEP 1  Standard EMF

      E0(cell)  =  ( + 0.34 )  -  ( - 0.76 )   =   + 1.10  V

  STEP 2  Cell reaction and n

      Zn  +  Cu2+   ---->   Zn2+  +  Cu             n  =  2

  STEP 3  Nernst equation.  Zn and Cu are solids, so they are left out.

                                0.0591           [Zn2+]
      E(cell)  =  E0(cell)  -  ---------  log   ---------
                                   2             [Cu2+]

  STEP 4  Substitute

                 [Zn2+]         0.1
          log   --------  = log ------  =  log 10   =   1
                 [Cu2+]        0.01

                                0.0591
      E(cell)  =   1.10    -   ---------   x   ( 1 )
                                   2

               =   1.10    -   0.02955

               =   1.0705

  ANSWER :   E(cell)  =  1.07  V   (approximately)
```

---

### Q B5
Calculate the EMF of the cell
`Ni | Ni2+ (0.01 M) || Cu2+ (0.1 M) | Cu` at 298 K.
`E0(Ni2+/Ni) = -0.25 V` , `E0(Cu2+/Cu) = +0.34 V`.

**ANSWER:**
```
      E0(cell)  =  ( + 0.34 )  -  ( - 0.25 )   =   + 0.59  V

      Ni  +  Cu2+   ---->   Ni2+  +  Cu             n  =  2

                                0.0591           [Ni2+]
      E(cell)  =   0.59    -   ---------  log   ---------
                                   2             [Cu2+]

                 [Ni2+]        0.01
          log   --------  = log ------  =  log ( 0.1 )   =   - 1
                 [Cu2+]         0.1

      E(cell)  =   0.59  -  ( 0.02955 ) ( - 1 )

               =   0.59  +  0.02955

               =   0.6196

  ANSWER :   E(cell)  =  0.62  V   (approximately)
```

---

### Q B6
Calculate delta G0 and the equilibrium constant for the Daniell cell
reaction at 298 K. `E0(cell) = 1.10 V`, n = 2.

**ANSWER:**
```
  PART 1   delta G0

      delta G0   =   - n F E0

                 =   - ( 2 ) ( 96500 ) ( 1.10 )

                 =   - 212300   J     =    - 212.3  kJ mol-1


  PART 2   Equilibrium constant

                     n  x  E0(cell)         2  x  1.10
      log K    =   -------------------  =  ------------
                        0.0591                0.0591

                     2.20
               =   --------    =    37.225
                    0.0591

      K        =   antilog ( 37.225 )

               =   antilog ( 0.225 )   x   10^37

               =   1.68  x  10^37

  The huge value of K shows the reaction goes practically to completion.
```

---

### Q B7
The resistance of a conductivity cell containing 0.001 M KCl at 298 K is
1500 ohm. The conductivity of 0.001 M KCl is `0.146 x 10^-3 S cm-1`.
When the same cell is filled with 0.001 M acetic acid the resistance is
4425 ohm. Calculate the cell constant, the conductivity and the molar
conductivity of acetic acid.

**ANSWER:**
```
  STEP 1  Cell constant

      cell constant  =  kappa  x  R

                     =  ( 0.146 x 10^-3 )  x  1500

                     =  0.219    cm-1

  STEP 2  Conductivity of acetic acid

                        cell constant           0.219
      kappa   =   -------------------   =   -----------
                        resistance             4425

              =   4.949 x 10^-5      S cm-1

  STEP 3  Molar conductivity

                        kappa  x  1000        ( 4.949 x 10^-5 ) x 1000
      Lambda(m)  =   -----------------  =  -----------------------------
                              C                       0.001

                 =   49.49     S cm2 mol-1
```

---

### Q B8
Using Kohlrausch's law, calculate `Lambda0` for acetic acid from
`Lambda0(CH3COONa) = 91.0`, `Lambda0(HCl) = 426.2`,
`Lambda0(NaCl) = 126.5 S cm2 mol-1`. If the molar conductivity of
0.001 M acetic acid is `49.5 S cm2 mol-1`, find the degree of
dissociation and the dissociation constant.

**ANSWER:**
```
  STEP 1  Kohlrausch's law

  Lambda0(CH3COOH) = Lambda0(CH3COONa) + Lambda0(HCl) - Lambda0(NaCl)

                   =      91.0     +     426.2     -     126.5

                   =      390.7       S cm2 mol-1

      Check ion by ion:
         (CH3COO- + Na+) + (H+ + Cl-) - (Na+ + Cl-)  =  CH3COO- + H+
      which is CH3COOH.  Correct.


  STEP 2  Degree of dissociation

                    Lambda(m)          49.5
      alpha   =   -------------  =   ---------   =   0.1267
                    Lambda0            390.7

              =   0.127    (about 12.7 % dissociated)


  STEP 3  Dissociation constant

                  C alpha^2          ( 0.001 ) ( 0.1267 )^2
      Ka   =   --------------   =   -------------------------
                  1 - alpha             1  -  0.1267

                  ( 0.001 ) ( 0.016053 )
           =   ---------------------------
                        0.8733

           =   1.84  x  10^-5
```

---

### Q B9
Explain how molar conductivity varies with dilution for a strong and for
a weak electrolyte. Draw the graphs.

**ANSWER:**
```
  In BOTH cases, on dilution kappa DECREASES but Lambda(m) INCREASES.


    Lambda(m)
        |                                       . . . . . . . . .
        |                             . . . .        WEAK
        |                       . .              (CH3COOH)
        |                    . .
        |                  .
        |                .
        |  = = = = = = = = = = = = = = = = = = = = = = = = = = =
        |            STRONG  (KCl)
        |
        +---------------------------------------------------------
                          sqrt ( C )   ->


  STRONG ELECTROLYTE (KCl, NaCl, HCl)
     Already almost fully ionised, so the number of ions hardly changes.
     Lambda rises only slightly on dilution, because the ions get further
     apart and the inter-ionic attraction that slows them down weakens.
     The graph is nearly a STRAIGHT LINE and obeys

              Lambda(m)  =  Lambda0  -  A  sqrt( C )

     Lambda0 can therefore be found by EXTRAPOLATING the line back to
     zero concentration.

  WEAK ELECTROLYTE (CH3COOH, NH4OH)
     Only partly ionised. On dilution the degree of dissociation alpha
     rises sharply, so MANY more ions appear. Lambda rises slowly at
     first and then SHOOTS UP steeply near infinite dilution.
     The curve never actually meets the axis, so Lambda0 CANNOT be found
     by extrapolation. It must be calculated using KOHLRAUSCH'S LAW.
```

---

### Q B10
State Faraday's laws of electrolysis. A current of 5 A is passed through
CuSO4 solution for 30 minutes. Calculate the mass of copper deposited.
(Cu = 63.5)

**ANSWER:**
```
  FIRST LAW
     The mass deposited at an electrode is directly proportional to the
     quantity of electricity passed.        w  =  Z I t

  SECOND LAW
     When the same quantity of electricity is passed through different
     electrolytes in series, the masses deposited are in the ratio of
     their equivalent weights.        w1 / w2  =  E1 / E2


  NUMERICAL

     t  =  30  x  60   =   1800  s
     Q  =  I t  =  5 x 1800  =  9000  C
     n  =  2       ( Cu2+ + 2 e-  ->  Cu )

              M  x  I  x  t          63.5  x  5  x  1800
     w   =  ----------------  =  ----------------------------
              n  x  96500                2  x  96500

              571500
         =  ----------
              193000

         =   2.961    g

  ANSWER :  about 2.96 g of copper is deposited.
```

---

### Q B11
The same quantity of electricity that deposits 1.08 g of silver is passed
through a copper sulphate solution. Calculate the mass of copper
deposited. (Ag = 108, Cu = 63.5)

**ANSWER:**
```
  Equivalent weights

      E(Ag)  =  108 / 1   =   108
      E(Cu)  =  63.5 / 2  =   31.75

  Faraday's second law

        w(Cu)         E(Cu)
      ---------  =  ---------
        w(Ag)         E(Ag)

                                31.75
      w(Cu)   =   1.08   x    ---------
                                 108

              =   1.08   x   0.29398

              =   0.3175    g

  ANSWER :   0.3175 g of copper.
```

---

### Q B12
Write the electrode reactions and the products of electrolysis for
(i) molten NaCl, (ii) aqueous NaCl, (iii) aqueous CuSO4 with platinum
electrodes.

**ANSWER:**
```
  (i)  MOLTEN NaCl        (only Na+ and Cl- present)

       Cathode :   Na+  +  e-    ---->   Na (l)             SODIUM
       Anode   :   2 Cl-         ---->   Cl2 (g) + 2 e-     CHLORINE

       This is the Down's process for making sodium metal.


  (ii) AQUEOUS NaCl       (Na+, Cl-, H+, OH- all present)

       Cathode :   2 H2O + 2 e-  ---->   H2 (g)  +  2 OH-   HYDROGEN
                   ( H+ is much easier to reduce than Na+ )
       Anode   :   2 Cl-         ---->   Cl2 (g) + 2 e-     CHLORINE
                   ( chlorine wins because of its high overvoltage )

       NaOH is left in the solution - this is the chlor-alkali industry.


  (iii) AQUEOUS CuSO4 with Pt electrodes

       Cathode :   Cu2+  +  2 e-  ---->   Cu (s)            COPPER
                   ( Cu2+ , E0 = +0.34 , beats H+ at 0.00 )
       Anode   :   2 H2O  ---->  O2 (g) + 4 H+ + 4 e-       OXYGEN
                   ( SO4 2- is very hard to oxidise )

       The blue colour fades and the solution becomes acidic.
       NOTE: if COPPER electrodes are used instead, the anode itself
       dissolves as Cu2+ and the blue colour does not fade. That is
       electro-refining.
```

---

### Q B13
Describe the lead storage battery. Write the reactions during discharging
and charging.

**ANSWER:**
```
  CONSTRUCTION
     Anode        :  a grid of spongy LEAD  (Pb)
     Cathode      :  a grid packed with LEAD DIOXIDE  (PbO2)
     Electrolyte  :  38 % sulphuric acid by mass

  DISCHARGING (working as a galvanic cell)

     Anode    :  Pb  +  SO4 2-   ---->   PbSO4  +  2 e-
     Cathode  :  PbO2 + SO4 2- + 4 H+ + 2 e-  ---->  PbSO4 + 2 H2O
     ------------------------------------------------------------------
     Overall  :  Pb  +  PbO2  +  2 H2SO4   ---->   2 PbSO4  +  2 H2O

     White PbSO4 coats BOTH plates and the acid is used up, so the
     density of the acid falls. That is how the charge is tested.

  CHARGING (working as an electrolytic cell)

     The whole reaction is reversed by passing current in:

        2 PbSO4  +  2 H2O   ---->   Pb  +  PbO2  +  2 H2SO4

  EMF :  about 2 V per cell. Six cells in series give the 12 V car
         battery. It is a SECONDARY cell because it can be recharged.
```

---

### Q B14
What is corrosion? Explain the electrochemical mechanism of the rusting
of iron and give any three methods of prevention.

**ANSWER:**
```
  CORROSION is the slow eating away of a metal surface by an
  electrochemical reaction with air and moisture.

  MECHANISM
     A drop of water on an iron surface acts as a tiny galvanic cell.

        water drop with dissolved O2 and CO2
             ______________
            /              \
   ________/                \__________
  |  ANODE spot      CATHODE spot       |   IRON SURFACE
  |______________________________________|
        <---- electrons through the metal ----

     At the ANODE (a strained or impure spot):

           Fe(s)   ---->   Fe2+  +  2 e-           E0 = - 0.44 V

     At the CATHODE (where oxygen is plentiful):

           O2 + 4 H+ + 4 e-   ---->   2 H2O        E0 = + 1.23 V

     Overall :   2 Fe  +  O2  +  4 H+  ---->  2 Fe2+  +  2 H2O

           E0(cell)  =  1.23 - ( - 0.44 )  =  + 1.67 V , so rusting
           is strongly spontaneous.

     The Fe2+ is then further oxidised by more oxygen and hydrated:

           4 Fe2+ + O2 + 4 H2O  ---->  2 Fe2O3 + 8 H+
           Fe2O3  +  x H2O      ---->  Fe2O3 . x H2O   =  RUST

     BOTH water and oxygen are needed. Acid, salt and CO2 speed it up.

  PREVENTION (any three)
     1.  BARRIER COATING - paint, grease, oil, enamel.
     2.  GALVANISATION - a zinc coating; zinc corrodes first and protects
         the iron even if scratched.
     3.  CATHODIC (SACRIFICIAL) PROTECTION - connect a block of Mg or Zn
         to the object; the block becomes the anode and is eaten away.
         Used on ships and buried pipelines.
     4.  ALLOYING - stainless steel forms a self-repairing oxide film.
     5.  ELECTROPLATING with Cr, Ni or Sn.
```

---

### Q B15
Distinguish between order and molecularity of a reaction (any four
points).

**ANSWER:**
```
  +----+--------------------------------+-------------------------------+
  | No.|  ORDER                         |  MOLECULARITY                 |
  +----+--------------------------------+-------------------------------+
  | 1  | Sum of the powers of the        | Number of species that must   |
  |    | concentration terms in the      | collide simultaneously in ONE |
  |    | EXPERIMENTAL rate law           | elementary step               |
  +----+--------------------------------+-------------------------------+
  | 2  | Determined by EXPERIMENT        | Determined from the MECHANISM |
  +----+--------------------------------+-------------------------------+
  | 3  | Can be ZERO, FRACTIONAL or      | Always a WHOLE NUMBER,        |
  |    | even negative                   | never zero, never a fraction  |
  +----+--------------------------------+-------------------------------+
  | 4  | Applies to the OVERALL          | Applies only to an ELEMENTARY |
  |    | reaction, simple or complex     | (single step) reaction        |
  +----+--------------------------------+-------------------------------+
  | 5  | CHANGES with temperature,       | Does NOT change               |
  |    | pressure, or excess of one      |                               |
  |    | reactant (pseudo order)         |                               |
  +----+--------------------------------+-------------------------------+

  For an ELEMENTARY reaction only, order = molecularity.
  For a complex reaction the order is fixed by the SLOWEST
  (rate determining) step.
```

---

### Q B16
Derive the integrated rate equation for a ZERO order reaction. Give the
unit of k, the half life and the graph.

**ANSWER:**
```
  For   A  ---->  products    with   Rate = k [A]^0 = k

          - d[A]
          -------   =   k
             dt

          - d[A]    =   k  dt

  Integrating from [A]0 at t = 0 to [A] at time t :

          - ( [A]  -  [A]0 )   =   k t

              [A]   =   [A]0   -   k t

                          [A]0  -  [A]
                k    =   ---------------
                                t

  UNIT OF k  :   mol L-1 s-1

  HALF LIFE  :   put [A] = [A]0 / 2 and t = t(1/2)

                 [A]0                              [A]0
                ------  =  [A]0  -  k t(1/2)   ->  ------  =  k t(1/2)
                  2                                  2

                              [A]0
                 t(1/2)  =  --------      PROPORTIONAL to [A]0
                              2 k

  GRAPH
        [A] |*
            |  *
      [A]0  |    *      straight line
            |      *    intercept = [A]0
            |        *  slope     = - k
            |          *
            +--------------- t

  EXAMPLES :  decomposition of NH3 on hot platinum,
              decomposition of HI on a gold surface.
```

---

### Q B17
Derive the integrated rate equation for a FIRST order reaction and show
that its half life is independent of the initial concentration.

**ANSWER:**
```
  For   A  ---->  products    with   Rate = k [A]

          - d[A]
          -------   =   k [A]
             dt

           d[A]
          ------    =   - k dt
           [A]

  Integrating :

          ln [A]   =   - k t   +   C

  At t = 0 , [A] = [A]0 , so C = ln [A]0

          ln [A]   =   - k t   +   ln [A]0

                 [A]0
          ln   ---------   =   k t
                  [A]

  Multiplying by 2.303 to change ln to log :

                  2.303              [A]0
          k   =  ---------    log  ---------
                     t               [A]

  UNIT OF k  :   s-1


  HALF LIFE
      Put [A] = [A]0 / 2 and t = t(1/2) :

                  2.303                 [A]0
          k   =  ---------     log   -----------
                  t(1/2)              [A]0 / 2

                  2.303
              =  ---------     log ( 2 )
                  t(1/2)

                  2.303  x  0.3010
              =  --------------------
                       t(1/2)

                       0.693
          t(1/2)  =   ---------
                          k

      [A]0 has CANCELLED OUT completely, so the half life of a first
      order reaction does NOT depend on the initial concentration.
```

---

### Q B18
A first order reaction is 50 % complete in 40 minutes. Calculate the rate
constant and the time required for the reaction to be 90 % complete.

**ANSWER:**
```
  STEP 1   50 % complete means  t(1/2)  =  40 min

                0.693          0.693
          k  = --------  =   ---------   =   0.01733   min-1
                t(1/2)          40


  STEP 2   90 % complete.  Take 100 parts initially.
           90 have reacted, so 10 are LEFT.

                       2.303              [A]0
              k   =   --------     log  ---------
                          t               [A]

                       2.303              100
           0.01733  = --------     log   ------
                          t                10

                       2.303
           0.01733  = --------  x  1                 ( log 10 = 1 )
                          t

                       2.303
              t   =  ----------   =   132.9   min
                      0.01733

  ANSWER :  k = 0.0173 min-1 ,  t(90 %) = about 133 minutes.

  CHECK by the shortcut :  t(90 %) = 3.32 x t(1/2) = 3.32 x 40 = 132.8 min.
```

---

### Q B19
For a first order reaction `k = 2.303 x 10^-3 s-1`. How long will it take
for the amount of reactant to fall from 10 g to 2.5 g?

**ANSWER:**
```
                2.303              [A]0
        k   =  --------     log   ---------
                   t                [A]

                2.303               10
   2.303e-3  = --------     log   -------
                   t                2.5

                2.303
   2.303e-3  = --------  x  log ( 4 )
                   t

                2.303
   2.303e-3  = --------  x  0.6021
                   t

               2.303  x  0.6021         1.3866
        t  =  -------------------  =  ------------  =  602.1   s
                 2.303 x 10^-3         2.303e-3

  ANSWER :  about 602 seconds  ( about 10 minutes ).

  CHECK :  10 -> 5 -> 2.5 is exactly TWO half lives.
           t(1/2) = 0.693 / 2.303e-3 = 300.9 s , and 2 x 300.9 = 601.8 s.
           Matches.
```

---

### Q B20
The rate constant of a reaction doubles when the temperature is raised
from 298 K to 308 K. Calculate the activation energy.
(R = 8.314 J K-1 mol-1)

**ANSWER:**
```
     k2 / k1  =  2         T1 = 298 K        T2 = 308 K

             k2           Ea             T2 - T1
      log  ------  =   ---------   x   -------------
             k1          2.303 R           T1 T2

                            Ea              308 - 298
      log ( 2 )   =   ---------------  x  ---------------
                       2.303 x 8.314        298 x 308

                            Ea                  10
         0.3010   =   ---------------  x   ------------
                          19.147               91784

     Rearranging :

               0.3010  x  19.147  x  91784
      Ea  =  --------------------------------
                          10

     Step by step :
            0.3010  x  19.147   =   5.7633
            5.7633  x  91784    =   528 980   (approximately)
            528 980  /  10      =   52 898

      Ea  =  52 898  J mol-1   =   52.9  kJ mol-1

  ANSWER :  about 52.9 kJ mol-1.
```

---

### Q B21
From the following data determine the order with respect to A and B, the
rate law and the value of k.

```
  +-------+---------+---------+-----------------------------+
  | Expt  |  [A]    |  [B]    |  initial rate (mol L-1 s-1) |
  +-------+---------+---------+-----------------------------+
  |   1   |  0.1    |  0.1    |   2.0 x 10^-3               |
  |   2   |  0.2    |  0.1    |   4.0 x 10^-3               |
  |   3   |  0.1    |  0.2    |   8.0 x 10^-3               |
  +-------+---------+---------+-----------------------------+
```

**ANSWER:**
```
  ORDER WITH RESPECT TO A   -  compare experiments 1 and 2, [B] constant

        [A] doubled      ( 0.1 -> 0.2 )
        rate doubled     ( 2.0e-3 -> 4.0e-3 )   =   2^1

        so   x  =  1


  ORDER WITH RESPECT TO B   -  compare experiments 1 and 3, [A] constant

        [B] doubled      ( 0.1 -> 0.2 )
        rate quadrupled  ( 2.0e-3 -> 8.0e-3 )   =   2^2

        so   y  =  2


  RATE LAW      Rate  =  k [A] [B]^2

  OVERALL ORDER  =  1 + 2  =  3


  VALUE OF k   -  use experiment 1

                   rate               2.0 x 10^-3
        k  =  --------------  =  ----------------------
                [A] [B]^2          ( 0.1 ) ( 0.1 )^2

                2.0 x 10^-3
           =  ---------------   =   2.0
                1.0 x 10^-3

        Unit for third order :   L2 mol-2 s-1

        k  =  2.0   L2 mol-2 s-1
```

---
---

# ===============================================================
# SECTION C — LONG ANSWER (8 marks)
# ===============================================================

### Q C1
What is a galvanic cell? Describe the Daniell cell with a labelled
diagram. Define electrode potential and EMF, and state the Nernst
equation. Calculate the EMF of
`Zn | Zn2+ (0.1 M) || Cu2+ (0.01 M) | Cu` at 298 K.

**MODEL ANSWER:**

```
  PART 1 - WHAT IS A GALVANIC CELL

  A GALVANIC (or voltaic) cell is a device that converts the chemical
  energy of a SPONTANEOUS redox reaction into electrical energy. The
  reaction is split into two half reactions which are carried out in two
  separate half cells, so the electrons are forced to travel through an
  external wire.


  PART 2 - THE DANIELL CELL

                      e-  <----------------------  e-
                      |      +-----------+          |
                      +------|  1.10 V   |----------+
                      |      +-----------+          |
                      |      SALT BRIDGE            |
                      |    +---------------+        |
                +-----+----+   KCl / agar  +---+----+-----+
                |     |    +---------------+   |    |     |
                |  +--+--+                     |  +-+---+ |
                |  | Zn  |                     |  | Cu  | |
                |  | rod |                     |  | rod | |
                |  +-----+                     |  +-----+ |
                | ZnSO4 (1M)                   | CuSO4(1M)|
                | ~ ~ ~ ~ ~                    | ~ ~ ~ ~ ~|
                +-------------+                +----------+
                  ANODE (-)                      CATHODE (+)
                  OXIDATION                      REDUCTION

     Anode    :   Zn   ---->   Zn2+  +  2 e-      (zinc rod thins)
     Cathode  :   Cu2+ + 2 e-  ---->  Cu          (blue colour fades)
     ---------------------------------------------------------------
     Overall  :   Zn  +  Cu2+   ---->   Zn2+  +  Cu

     Notation :   Zn | Zn2+ (1 M) || Cu2+ (1 M) | Cu

     SALT BRIDGE - a U-tube of KCl in agar. It completes the circuit,
     keeps both solutions electrically neutral, stops them mixing, and
     removes the liquid junction potential.


  PART 3 - ELECTRODE POTENTIAL AND EMF

     ELECTRODE POTENTIAL is the potential difference set up between a
     metal and a solution of its own ions.

     STANDARD ELECTRODE POTENTIAL E0 is that potential measured against
     the standard hydrogen electrode at 298 K, with all ions at 1 M and
     all gases at 1 bar. It is always quoted as a REDUCTION potential.

     EMF of a cell is the maximum potential difference between the two
     electrodes when NO current is drawn. It is measured with a
     potentiometer.

              E(cell)  =  E(cathode)  -  E(anode)

     For the Daniell cell

              E0(cell) = ( + 0.34 ) - ( - 0.76 )  =  + 1.10 V


  PART 4 - THE NERNST EQUATION

     For   a A  +  b B  ---->  c C  +  d D   with n electrons :

                                 2.303 R T        [C]^c [D]^d
        E(cell)  =  E0(cell)  -  ----------  log ---------------
                                    n F           [A]^a [B]^b

     At 298 K , 2.303 R T / F = 0.0591 V , so

                                 0.0591           [products]
        E(cell)  =  E0(cell)  - ---------   log  -------------
                                    n             [reactants]

     Solids and pure liquids are taken as 1 and never enter the log.


  PART 5 - THE NUMERICAL

     E0(cell) = 1.10 V ,  n = 2 ,  Zn and Cu are solids.

                                 0.0591           [Zn2+]
        E(cell)  =    1.10   -   ---------  log  ---------
                                    2             [Cu2+]

                 [Zn2+]         0.1
          log   --------  = log ------ = log 10 = 1
                 [Cu2+]        0.01

        E(cell)  =   1.10  -  ( 0.02955 ) ( 1 )

                 =   1.10  -  0.02955

                 =   1.07  V     (approximately)
```

---

### Q C2
State and explain Faraday's laws of electrolysis. Describe the products
obtained on electrolysing molten NaCl, aqueous NaCl and aqueous CuSO4.
Solve: a current of 5 A is passed through CuSO4 for 30 minutes — find the
mass of copper deposited (Cu = 63.5).

**MODEL ANSWER:**

```
  PART 1 - WHAT ELECTROLYSIS IS

  Electrolysis is the process of forcing a NON-SPONTANEOUS redox reaction
  to take place by passing direct current through an electrolyte.

     CATHODE  (negative)  -  attracts CATIONS  -  REDUCTION occurs
     ANODE    (positive)  -  attracts ANIONS   -  OXIDATION occurs


  PART 2 - FARADAY'S FIRST LAW

  The mass of a substance deposited or liberated at an electrode is
  DIRECTLY PROPORTIONAL to the quantity of electricity passed.

           w   =   Z  Q   =   Z  I  t

     w = mass in g , Q = charge in C , I = current in A ,
     t = time in SECONDS , Z = electrochemical equivalent.

                 equivalent weight             M
         Z   =  --------------------  =  --------------
                        96500              n  x  96500

  Combining :

                        M   x   I   x   t
              w    =   ---------------------
                          n   x   96500


  PART 3 - FARADAY'S SECOND LAW

  When the SAME quantity of electricity is passed through different
  electrolytes connected in SERIES, the masses deposited are in the
  ratio of their EQUIVALENT WEIGHTS.

              w1          E1
            ------   =  ------
              w2          E2

  1 FARADAY = 96500 C = the charge on 1 mole of electrons, and it
  deposits ONE GRAM EQUIVALENT of any substance:
         1 F -> 108 g Ag , 31.75 g Cu , 9 g Al .


  PART 4 - PRODUCTS OF ELECTROLYSIS

  +-------------------+-------------------+---------------------------+
  |  ELECTROLYTE      |  CATHODE          |  ANODE                    |
  +-------------------+-------------------+---------------------------+
  |  Molten NaCl      |  Na metal         |  Cl2 gas                  |
  |  Aqueous NaCl     |  H2 gas           |  Cl2 gas (NaOH left)      |
  |  Aqueous CuSO4    |  Cu metal         |  O2 gas                   |
  |  (Pt electrodes)  |                   |                           |
  +-------------------+-------------------+---------------------------+

     MOLTEN NaCl
        Cathode :  Na+ + e-  ->  Na
        Anode   :  2 Cl-  ->  Cl2 + 2 e-
        Only Na+ and Cl- are present, so both are discharged.

     AQUEOUS NaCl
        Cathode :  2 H2O + 2 e-  ->  H2 + 2 OH-
                   (H+ at 0.00 V is far easier to reduce than
                    Na+ at -2.71 V, so HYDROGEN is liberated,
                    NOT sodium.)
        Anode   :  2 Cl-  ->  Cl2 + 2 e-
                   (chlorine wins over water because of its high
                    overvoltage in concentrated brine)
        NaOH accumulates in the solution - the chlor-alkali process.

     AQUEOUS CuSO4 with Pt electrodes
        Cathode :  Cu2+ + 2 e-  ->  Cu    (Cu2+ at +0.34 beats H+)
        Anode   :  2 H2O  ->  O2 + 4 H+ + 4 e-
                   (SO4 2- is very hard to oxidise)
        The blue colour fades and the solution turns acidic.
        With COPPER electrodes the anode itself dissolves as Cu2+ and
        the blue colour does not fade - this is electro-refining.


  PART 5 - NUMERICAL

     t  =  30 x 60  =  1800 s
     n  =  2                ( Cu2+ + 2 e-  ->  Cu )

              M  x  I  x  t         63.5  x  5  x  1800
     w   =  ----------------  =  -------------------------
              n  x  96500              2  x  96500

              571500
         =  ----------   =   2.961   g
              193000

     ANSWER :  about 2.96 g of copper.
```

---

### Q C3
Define conductance, conductivity, molar conductivity and cell constant,
giving their units. Explain how molar conductivity varies with dilution
for strong and weak electrolytes. State Kohlrausch's law and give its
applications with one numerical.

**MODEL ANSWER:**

```
  PART 1 - THE FOUR DEFINITIONS

                              1
     CONDUCTANCE       G  =  ---           unit :  S  ( ohm-1 )
                              R

     CONDUCTIVITY  kappa  =  the conductance of 1 cm3 of the solution,
                             held between electrodes 1 cm apart of area
                             1 cm2.
                                  1               l
                        kappa =  -----  =  G  x  ---
                                  rho             A
                             unit :  S cm-1  (SI : S m-1)

     CELL CONSTANT      =  l / A  =  kappa x R      unit :  cm-1
                           It is found using a standard KCl solution of
                           known conductivity.

     MOLAR CONDUCTIVITY =  the conducting power of ALL the ions produced
                           by ONE MOLE of electrolyte.

                                     kappa  x  1000
                        Lambda(m) = -----------------
                                            C
                             unit :  S cm2 mol-1


  PART 2 - VARIATION WITH DILUTION

  On dilution   kappa DECREASES  but  Lambda(m) INCREASES.
  kappa falls because 1 cm3 now contains fewer ions.
  Lambda rises because the ions from one mole are further apart, and for
  a weak electrolyte many MORE ions are produced.

    Lambda(m)
        |                                       . . . . . . . . .
        |                             . . . .        WEAK
        |                       . .              (CH3COOH)
        |                    . .
        |                  .
        |  = = = = = = = = = = = = = = = = = = = = = = = = = = =
        |            STRONG  (KCl)
        +---------------------------------------------------------
                          sqrt ( C )   ->

     STRONG electrolyte :  nearly a straight line, obeying
                           Lambda = Lambda0 - A sqrt(C).
                           Lambda0 is found by EXTRAPOLATION.

     WEAK electrolyte   :  rises steeply near infinite dilution and never
                           meets the axis, so Lambda0 CANNOT be found by
                           extrapolation - use Kohlrausch's law.


  PART 3 - KOHLRAUSCH'S LAW

  At infinite dilution, the molar conductivity of an electrolyte is the
  SUM of the independent contributions of its cation and its anion.

        Lambda0(m)  =  v(+) lambda0(+)  +  v(-) lambda0(-)

     NaCl      :  Lambda0 = lambda0(Na+) + lambda0(Cl-)
     BaCl2     :  Lambda0 = lambda0(Ba2+) + 2 lambda0(Cl-)


  PART 4 - APPLICATIONS

   1.  Lambda0 OF A WEAK ELECTROLYTE

           Lambda0(CH3COOH) = Lambda0(CH3COONa) + Lambda0(HCl)
                                                    - Lambda0(NaCl)

   2.  DEGREE OF DISSOCIATION       alpha = Lambda(m) / Lambda0(m)

   3.  DISSOCIATION CONSTANT        Ka = C alpha^2 / ( 1 - alpha )

   4.  Solubility of a sparingly soluble salt can also be found from its
       conductivity and Lambda0.


  PART 5 - NUMERICAL

  Given Lambda0(CH3COONa) = 91.0 , Lambda0(HCl) = 426.2 ,
  Lambda0(NaCl) = 126.5 , and Lambda(m) of 0.001 M acetic acid = 49.5
  (all S cm2 mol-1). Find Lambda0, alpha and Ka.

     Lambda0(CH3COOH) =  91.0 + 426.2 - 126.5   =   390.7 S cm2 mol-1

                    49.5
     alpha    =   ---------   =   0.1267
                   390.7

                  C alpha^2       ( 0.001 ) ( 0.1267 )^2
     Ka       =  ------------  =  ------------------------
                  1 - alpha             0.8733

              =   1.84 x 10^-5
```

---

### Q C4
Define the rate of a reaction, rate law and rate constant. Derive the
integrated rate equation for a first order reaction, obtain its half
life, draw its graphs, and solve: a first order reaction is 50 % complete
in 40 minutes — find k and the time for 90 % completion.

**MODEL ANSWER:**

```
  PART 1 - DEFINITIONS

  RATE OF REACTION  -  the change in concentration of a reactant or a
  product per unit time.

     For   a A + b B  ->  c C + d D

                   1   d[A]           1   d[C]
        rate  =  - --- ------   =   + --- ------      unit: mol L-1 s-1
                   a    dt            c    dt

  AVERAGE RATE is measured over an interval; INSTANTANEOUS RATE is the
  slope of the tangent to the concentration-time curve at one instant.

  RATE LAW  -  the experimentally found equation

        Rate  =  k [A]^x [B]^y            ORDER  =  x + y

  The powers x and y are found ONLY by experiment; they are not the
  coefficients of the balanced equation.

  RATE CONSTANT k  -  the rate of the reaction when the concentration of
  every reactant is 1 mol L-1. It depends on temperature and catalyst
  but NOT on concentration.


  PART 2 - DERIVATION FOR FIRST ORDER

  For   A  ---->  products   with   Rate = k [A]

           - d[A]
           -------   =   k [A]
              dt

            d[A]
           ------    =   - k dt
            [A]

  Integrating,        ln [A]  =  - k t  +  C

  At t = 0 , [A] = [A]0 , so C = ln [A]0 :

           ln [A]  =  - k t  +  ln [A]0

                  [A]0
           ln   ---------   =   k t
                   [A]

  Multiply by 2.303 to convert ln into log :

                   2.303              [A]0
           k   =  ---------    log  ---------
                      t               [A]

  or, in the a and x form,

                   2.303                a
           k   =  ---------    log  -----------
                      t              a  -  x

  UNIT OF k :  s-1


  PART 3 - HALF LIFE

  Put [A] = [A]0 / 2  and  t = t(1/2) :

                   2.303                [A]0
           k   =  ---------    log   ----------
                   t(1/2)             [A]0 / 2

                   2.303  x  log 2         2.303 x 0.3010
               =  ------------------   =  -----------------
                        t(1/2)                 t(1/2)

                        0.693
           t(1/2)  =   ---------
                           k

  [A]0 cancels out, so the half life of a first order reaction is
  INDEPENDENT of the initial concentration.


  PART 4 - GRAPHS

    log[A] |*                        log([A]0/[A]) |             *
           |  *                                    |         *
           |    *                                  |     *
           |      *                                | *   slope = k/2.303
           |  slope = - k/2.303                    +---------------- t
           +---------------- t

    [A] |*
        | *
  [A]0/2|- -*
        |   |  *
  [A]0/4|- -|- - -*  . . .
        +---+-----+-------------- t
          t1/2  2 t1/2      equal intervals HALVE the concentration


  PART 5 - NUMERICAL

     50 % complete in 40 min  ->  t(1/2) = 40 min

               0.693        0.693
        k  =  --------  =  --------  =  0.01733  min-1
               t(1/2)         40

     90 % complete : of 100 parts, 10 are LEFT.

                 2.303             100
        0.01733 = -------    log  ------
                    t               10

                 2.303
        0.01733 = -------  x  1
                    t

                  2.303
             t = ---------   =   132.9   min
                  0.01733

     ANSWER :  k = 0.0173 min-1 ,  t(90 %) = about 133 minutes.
```

---

### Q C5
Explain the effect of temperature on the rate of a reaction. State the
Arrhenius equation, derive its two-temperature form, explain activation
energy and the log k versus 1/T graph, and solve: the rate constant
doubles when the temperature rises from 298 K to 308 K — find Ea.

**MODEL ANSWER:**

```
  PART 1 - EFFECT OF TEMPERATURE

  For most reactions the rate roughly DOUBLES for every 10 K rise.
  A 10 K rise raises the average kinetic energy by only about 3 %, which
  cannot double a rate. The real reason is that the rise roughly DOUBLES
  THE NUMBER OF MOLECULES whose energy exceeds the ACTIVATION ENERGY,
  and only those molecules can react.

     number of
     molecules
         |         . .
         |       .     .        T1
         |      .        .
         |     .           . .
         |    .  . . . . .      . . .   T2 = T1 + 10
         |   . .                      . . . .
         +------------------------|------------------ energy
                                  Ea
                     the area to the RIGHT of Ea roughly DOUBLES


  PART 2 - THE ARRHENIUS EQUATION

                             - Ea / R T
           k    =    A   e

     A  = frequency factor (total properly-oriented collisions per second)
     Ea = activation energy in J mol-1
     R  = 8.314 J K-1 mol-1 ,  T in KELVIN

  Taking logarithm on both sides :

                                   Ea          1
           log k   =   log A   -  --------  x  ---
                                  2.303 R       T


  PART 3 - THE GRAPH

     log k |*
           |   *
           |      *        slope  =  - Ea / ( 2.303 R )
           |         *
           |            *
           |               *
     log A |. . . . . . . . . .  (intercept)
           +------------------------- 1 / T

     A straight line with a NEGATIVE slope. The steeper the line, the
     larger the activation energy.

           Ea   =   -  2.303  R  x  slope


  PART 4 - THE TWO-TEMPERATURE FORM

     At T1 :   log k1  =  log A  -  Ea / ( 2.303 R T1 )
     At T2 :   log k2  =  log A  -  Ea / ( 2.303 R T2 )

     Subtracting the first from the second, log A cancels :

              k2            Ea       +-   1        1   -+
        log ------  =   ---------  x |  -----  -  ----- |
              k1          2.303 R    +-   T1       T2  -+

              k2            Ea           ( T2  -  T1 )
        log ------  =   ---------  x   ------------------
              k1          2.303 R            T1  T2


  PART 5 - ACTIVATION ENERGY

  Ea is the minimum extra energy, above the average, that colliding
  molecules must have in order to react. It is the height of the energy
  barrier between the reactants and the activated complex.

       energy |            /\
              |           /  \   <- ACTIVATED COMPLEX
              |    Ea -> /    \
              |   ______/      \______
              |  reactants      products
              +------------------------- reaction path

  A CATALYST provides an alternative path of LOWER activation energy.
  It does not change delta H, and it speeds up the forward and the
  backward reaction equally.


  PART 6 - NUMERICAL

     k2/k1 = 2 ,  T1 = 298 K , T2 = 308 K , R = 8.314

                            Ea               10
        log ( 2 )   =  ---------------  x  ---------
                        2.303 x 8.314        91784

                            Ea               10
           0.3010   =  ---------------  x  ---------
                           19.147            91784

               0.3010  x  19.147  x  91784
        Ea  = ------------------------------
                            10

               5.7633  x  91784          528 980
            = -------------------   =   ----------   =   52 898  J mol-1
                       10                   10

        Ea  =  52.9  kJ mol-1
```

---

### Q C6
Write an account of batteries. Explain primary cells (dry cell, mercury
cell), secondary cells (lead storage battery, nickel-cadmium cell) and
fuel cells, with their electrode reactions.

**MODEL ANSWER:**

```
  PART 1 - CLASSIFICATION

     PRIMARY CELL    -  used once; the reaction is irreversible and the
                        cell cannot be recharged.
     SECONDARY CELL  -  can be recharged by passing current backwards
                        through it.
     FUEL CELL       -  the reactants are supplied continuously from
                        outside, so it never runs down.


  PART 2 - DRY CELL (LECLANCHE CELL) - primary

     Anode        :  the ZINC container itself
     Cathode      :  a GRAPHITE rod surrounded by MnO2 and carbon powder
     Electrolyte  :  moist paste of NH4Cl and ZnCl2

     Anode    :  Zn   ---->   Zn2+  +  2 e-
     Cathode  :  MnO2 + NH4+ + e-   ---->   MnO(OH)  +  NH3

     EMF about 1.5 V. It FALLS during use because ammonia builds up
     around the cathode. Used in torches and clocks.


  PART 3 - MERCURY CELL - primary

     Anode        :  ZINC - MERCURY AMALGAM
     Cathode      :  paste of HgO and carbon
     Electrolyte  :  paste of KOH and ZnO

     Anode    :  Zn(Hg) + 2 OH-   ---->   ZnO + H2O + 2 e-
     Cathode  :  HgO + H2O + 2 e-  ---->  Hg + 2 OH-
     ------------------------------------------------------
     Overall  :  Zn(Hg)  +  HgO   ---->   ZnO  +  Hg

     EMF about 1.35 V and it stays CONSTANT throughout its life, because
     no ion appears in the overall reaction. Used in hearing aids,
     watches and pacemakers.


  PART 4 - LEAD STORAGE BATTERY - secondary

     Anode        :  spongy LEAD (Pb)
     Cathode      :  grid packed with LEAD DIOXIDE (PbO2)
     Electrolyte  :  38 % H2SO4

     DISCHARGING
        Anode    :  Pb + SO4 2-   ---->   PbSO4 + 2 e-
        Cathode  :  PbO2 + SO4 2- + 4 H+ + 2 e-  ---->  PbSO4 + 2 H2O
        Overall  :  Pb + PbO2 + 2 H2SO4  ---->  2 PbSO4 + 2 H2O

     CHARGING - the reaction is reversed
        2 PbSO4 + 2 H2O   ---->   Pb + PbO2 + 2 H2SO4

     About 2 V per cell; six cells give the 12 V car battery.


  PART 5 - NICKEL - CADMIUM CELL - secondary

     Anode : Cd ,  Cathode : NiO2 ,  Electrolyte : KOH

        Cd + 2 OH-   ---->   Cd(OH)2 + 2 e-
        NiO2 + 2 H2O + 2 e-   ---->   Ni(OH)2 + 2 OH-
        Overall : Cd + NiO2 + 2 H2O  ---->  Cd(OH)2 + Ni(OH)2

     Longer life than the lead battery but more expensive, and cadmium
     is toxic.


  PART 6 - HYDROGEN - OXYGEN FUEL CELL

                   H2 in                            O2 in
                     |                                |
                     v                                v
              +------+--------------------------------+------+
              |  +---+---+                        +---+---+  |
              |  | POROUS|                        | POROUS|  |
              |  | CARBON|                        | CARBON|  |
              |  |  (Pt) |                        |  (Pt) |  |
              |  +-------+                        +-------+  |
              |   ANODE                            CATHODE   |
              |   ~ ~ ~ ~  concentrated KOH  ~ ~ ~ ~ ~ ~ ~ ~  |
              +----------------------------------------------+

        Anode    :  2 H2  +  4 OH-   ---->   4 H2O  +  4 e-
        Cathode  :  O2  +  2 H2O  +  4 e-   ---->   4 OH-
        --------------------------------------------------------
        Overall  :  2 H2   +   O2    ---->    2 H2O

     ADVANTAGES
        *  efficiency about 70 %, far above a heat engine (about 40 %)
        *  the only product is water, so there is NO pollution
        *  runs continuously as long as fuel is supplied

     Used in the Apollo space programme, where the water produced was
     used for drinking.
```

---
---

# WHICH QUESTIONS REPEAT MOST

```
  +------+-----------------------------------------------+-------+-------+
  | RANK |  QUESTION                                     | MARKS | HOW   |
  |      |                                               |       | OFTEN |
  +------+-----------------------------------------------+-------+-------+
  |  1   |  Galvanic cell / Daniell cell + EMF +         |   8   | very  |
  |      |  Nernst equation                              |       | often |
  +------+-----------------------------------------------+-------+-------+
  |  2   |  First order integrated rate equation -       |   8   | very  |
  |      |  derivation + half life + numerical           |  or 4 | often |
  +------+-----------------------------------------------+-------+-------+
  |  3   |  Faraday's laws + numerical (mass deposited)  |   8   | very  |
  |      |                                               |  or 4 | often |
  +------+-----------------------------------------------+-------+-------+
  |  4   |  Salt bridge - what it is and its functions   |   2   | very  |
  |      |                                               |       | often |
  +------+-----------------------------------------------+-------+-------+
  |  5   |  Difference between ORDER and MOLECULARITY    |   4   | very  |
  |      |                                               |  or 2 | often |
  +------+-----------------------------------------------+-------+-------+
  |  6   |  Kohlrausch's law - statement and             |   4   | often |
  |      |  applications (alpha and Ka)                  |  or 2 |       |
  +------+-----------------------------------------------+-------+-------+
  |  7   |  Arrhenius equation - find Ea from two        |   4   | often |
  |      |  temperatures                                 |       |       |
  +------+-----------------------------------------------+-------+-------+
  |  8   |  Corrosion - mechanism and prevention         |   4   | often |
  +------+-----------------------------------------------+-------+-------+
  |  9   |  Conductivity / molar conductivity -          |   2   | often |
  |      |  definitions and units                        |  or 4 |       |
  +------+-----------------------------------------------+-------+-------+
  | 10   |  Standard hydrogen electrode - construction   |   4   | often |
  +------+-----------------------------------------------+-------+-------+
  | 11   |  Lead storage battery / fuel cell             |   4   | often |
  +------+-----------------------------------------------+-------+-------+
  | 12   |  Products of electrolysis of molten and       |   2   | often |
  |      |  aqueous NaCl                                 |  or 4 |       |
  +------+-----------------------------------------------+-------+-------+
  | 13   |  delta G = - n F E  and  E0 = (0.0591/n) logK |   2   | fair  |
  +------+-----------------------------------------------+-------+-------+
  | 14   |  Pseudo first order reaction - definition     |   2   | fair  |
  |      |  and example                                  |       |       |
  +------+-----------------------------------------------+-------+-------+
  | 15   |  Zero order - equation, unit, graph, t(1/2)   |   4   | fair  |
  +------+-----------------------------------------------+-------+-------+
  | 16   |  Variation of molar conductivity with         |   4   | fair  |
  |      |  dilution, strong vs weak                     |       |       |
  +------+-----------------------------------------------+-------+-------+
  | 17   |  Electrochemical series and its applications  |   4   | fair  |
  +------+-----------------------------------------------+-------+-------+
  | 18   |  Collision theory / activation energy         |   2   | fair  |
  +------+-----------------------------------------------+-------+-------+

  IF YOU PREPARE ONLY THE TOP SIX, you are already covering roughly
  12 to 14 marks of this chapter.
```
