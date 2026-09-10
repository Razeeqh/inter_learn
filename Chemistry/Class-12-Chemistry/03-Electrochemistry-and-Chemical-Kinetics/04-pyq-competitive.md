# Electrochemistry and Chemical Kinetics — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Chemistry, 40 questions)  ->  3 to 5
  JEE Main        (Chemistry, 25 questions)  ->  2 to 4

  This is one of the HIGHEST-YIELDING chapters in the whole syllabus,
  because it is two chapters in one and both halves are numerical.
```

> **THE BIGGEST TIME SAVER IN THIS CHAPTER:** almost every numerical is one
> substitution into one of six formulae. Learn the six formulae cold and you
> will finish these questions in under 60 seconds each.
>
> ```
>   1.  E0(cell) = E0(cathode) - E0(anode)
>   2.  E = E0 - (0.0591/n) log ( products / reactants )
>   3.  delta G = - n F E          and     log K = n E0 / 0.0591
>   4.  Lambda(m) = kappa x 1000 / C       and    alpha = Lambda / Lambda0
>   5.  w = M I t / ( n x 96500 )
>   6.  k = (2.303/t) log([A]0/[A])        and    t(1/2) = 0.693 / k
> ```

---

# PATTERN 1 — EMF and the electrochemical series

### Q1
`E0(Zn2+/Zn) = -0.76 V` and `E0(Ag+/Ag) = +0.80 V`. The standard EMF of the
cell `Zn | Zn2+ || Ag+ | Ag` is

(a) 0.04 V &nbsp; (b) 1.56 V &nbsp; (c) -1.56 V &nbsp; (d) 0.80 V

**ANSWER: (b)**
```
   E0(cell)  =  E0(cathode)  -  E0(anode)

             =  ( + 0.80 )   -  ( - 0.76 )

             =  0.80  +  0.76   =   1.56  V
```
> **SHORTCUT:** when the two potentials have OPPOSITE signs, you simply ADD
> their magnitudes. When they have the SAME sign, you subtract.

---

### Q2
The strongest reducing agent among the following is

(a) Li &nbsp; (b) Na &nbsp; (c) Zn &nbsp; (d) Cu

**ANSWER: (a)**
```
   E0 values :   Li  - 3.05      Na  - 2.71
                 Zn  - 0.76      Cu  + 0.34

   The MOST NEGATIVE E0 is the strongest reducing agent (easiest to
   oxidise). Li wins.
```

---

### Q3
Which of these metals CANNOT liberate hydrogen from dilute hydrochloric
acid?

(a) Zn &nbsp; (b) Fe &nbsp; (c) Mg &nbsp; (d) Cu

**ANSWER: (d)**
```
   Only metals with a NEGATIVE E0 lie above hydrogen and can reduce H+.

        Zn  - 0.76      Fe  - 0.44      Mg  - 2.37     all negative -> yes
        Cu  + 0.34                                     positive     -> NO
```

---

### Q4
Copper does not displace zinc from ZnSO4 solution because

(a) Cu is more reactive
(b) E0(Cu2+/Cu) is more positive than E0(Zn2+/Zn)
(c) ZnSO4 is insoluble
(d) the reaction is exothermic

**ANSWER: (b)**
```
   For Cu to displace Zn, the cell  Cu | Cu2+ || Zn2+ | Zn  would need
   a positive EMF.

        E0(cell)  =  ( - 0.76 )  -  ( + 0.34 )   =   - 1.10 V

   NEGATIVE  ->  not spontaneous. The reverse reaction is the one that
   happens.
```

---

### Q5
For a spontaneous cell reaction, which set is correct?

(a) E positive, delta G positive, K < 1
(b) E positive, delta G negative, K > 1
(c) E negative, delta G negative, K > 1
(d) E negative, delta G positive, K > 1

**ANSWER: (b)**
```
   delta G  =  - n F E

   E positive   ->   delta G negative   ->   spontaneous   ->   K > 1
```
> **SHORTCUT:** remember one chain and read it either way:
> `E up = delta G down = K up = spontaneous`.

---

# PATTERN 2 — The Nernst equation

### Q6
The electrode potential of a copper electrode dipped in `0.1 M CuSO4` at
298 K is (`E0 = +0.34 V`)

(a) 0.31 V &nbsp; (b) 0.37 V &nbsp; (c) 0.28 V &nbsp; (d) 0.34 V

**ANSWER: (a)**
```
                     0.0591
      E  =  E0   +  ---------  log [Cu2+]           n = 2
                        2

         =  0.34  +  0.02955  x  log ( 0.1 )

         =  0.34  +  0.02955  x  ( - 1 )

         =  0.34  -  0.0296   =   0.3104   V
```

---

### Q7
For the cell `Zn | Zn2+ (1 M) || Cu2+ (0.1 M) | Cu` with
`E0(cell) = 1.10 V`, the EMF at 298 K is

(a) 1.13 V &nbsp; (b) 1.07 V &nbsp; (c) 1.10 V &nbsp; (d) 1.16 V

**ANSWER: (b)**
```
                             0.0591          [Zn2+]
      E  =  E0(cell)   -    ---------  log  ---------      n = 2
                                2            [Cu2+]

                             0.0591            1
         =   1.10       -   ---------  log  -------
                                2             0.1

         =   1.10  -  ( 0.02955 ) ( 1 )

         =   1.07   V
```
> **SHORTCUT:** if the CATHODE ion is DILUTED, the EMF FALLS.
> If the ANODE ion is diluted, the EMF RISES. You can often pick the answer
> from the direction alone without any arithmetic.

---

### Q8
When all the ionic concentrations in a cell are 1 M, the EMF of the cell is

(a) zero &nbsp; (b) equal to E0(cell) &nbsp; (c) infinite &nbsp; (d) negative

**ANSWER: (b)**
```
   log ( 1 )  =  0 , so the whole Nernst correction term vanishes:

        E  =  E0  -  ( 0.0591 / n ) x 0   =   E0
```

---

### Q9
The EMF of the concentration cell
`Cu | Cu2+ (0.01 M) || Cu2+ (0.1 M) | Cu` at 298 K is

(a) 0.0591 V &nbsp; (b) 0.0295 V &nbsp; (c) 0.118 V &nbsp; (d) 0 V

**ANSWER: (b)**
```
   Both electrodes are copper, so   E0(cell)  =  0.

                    0.0591           [Cu2+] cathode
      E   =        ---------  log   ------------------
                       2             [Cu2+] anode

                    0.0591            0.1
          =        ---------  log   -------
                       2             0.01

          =   0.02955  x  1   =   0.0295   V
```
> **SHORTCUT:** for a concentration cell, `E = (0.0591/n) log (higher/lower)`.
> It is always POSITIVE and always small.

---

### Q10
The potential of a hydrogen electrode dipped in a solution of `pH = 10` is

(a) -0.591 V &nbsp; (b) +0.591 V &nbsp; (c) -0.0591 V &nbsp; (d) 0 V

**ANSWER: (a)**
```
      2 H+  +  2 e-   ---->   H2                   n = 2

                     0.0591
      E   =   0  +  ---------  log [H+]^2
                        2

          =   0.0591  x  log [H+]

          =   - 0.0591  x  pH

          =   - 0.0591  x  10   =   - 0.591   V
```
> **SHORTCUT:** memorise `E(hydrogen electrode) = - 0.0591 x pH`.
> This one line answers every pH-based Nernst MCQ.

---

# PATTERN 3 — delta G and the equilibrium constant

### Q11
For a cell reaction with `n = 2` and `E0(cell) = 1.0 V`, delta G0 is

(a) -193 kJ &nbsp; (b) -96.5 kJ &nbsp; (c) +193 kJ &nbsp; (d) -1.93 kJ

**ANSWER: (a)**
```
   delta G0  =  - n F E0  =  - ( 2 ) ( 96500 ) ( 1.0 )

             =  - 193000  J   =   - 193  kJ
```
> **SHORTCUT:** `n x 96500 x E` in joules, then shift the decimal three places
> for kJ. And the sign is ALWAYS opposite to E.

---

### Q12
`E0(cell) = 0.295 V` and `n = 2`. The equilibrium constant at 298 K is
about

(a) 10^5 &nbsp; (b) 10^10 &nbsp; (c) 10^-10 &nbsp; (d) 10^2

**ANSWER: (b)**
```
                 n  E0(cell)          2  x  0.295         0.59
      log K  =  --------------  =   ---------------  =  --------  =  9.98
                    0.0591              0.0591            0.0591

      K   =   about  10^10
```
> **SHORTCUT:** `log K = n E0 / 0.0591`. Since `0.0591 x 2 = 0.118`, an
> E0 of about 0.118 V per electron gives one power of ten. Handy for
> estimating.

---

### Q13
If the EMF of a cell is zero, then

(a) the reaction is spontaneous
(b) the reaction is non-spontaneous
(c) the cell is at equilibrium and delta G = 0
(d) the equilibrium constant is infinite

**ANSWER: (c)**
```
   delta G  =  - n F E  =  - n F ( 0 )  =  0

   delta G = 0 is exactly the condition for EQUILIBRIUM.
   This is a dead battery: it can do no more work.
```

---

# PATTERN 4 — Conductance and Kohlrausch's law

### Q14
The unit of molar conductivity is

(a) S cm-1 &nbsp; (b) S cm2 mol-1 &nbsp; (c) S mol-1 &nbsp; (d) ohm cm

**ANSWER: (b)**
```
                kappa ( S cm-1 )  x  1000 ( cm3 L-1 )
   Lambda  =  ------------------------------------------  =  S cm2 mol-1
                        C  ( mol L-1 )

   REMEMBER:  kappa -> S cm-1        Lambda -> S cm2 mol-1
              cell constant -> cm-1  conductance -> S
```

---

### Q15
The conductivity of a solution is `0.02 S cm-1` and the measured
resistance of the cell containing it is `50 ohm`. The cell constant is

(a) 0.001 cm-1 &nbsp; (b) 1.0 cm-1 &nbsp; (c) 2.5 cm-1 &nbsp; (d) 100 cm-1

**ANSWER: (b)**
```
   cell constant  =  kappa  x  R  =  ( 0.02 )  x  ( 50 )  =  1.0   cm-1
```

---

### Q16
The conductivity of a `0.2 M` solution is `0.0248 S cm-1`. Its molar
conductivity is

(a) 12.4 &nbsp; (b) 124 &nbsp; (c) 248 &nbsp; (d) 1240 S cm2 mol-1

**ANSWER: (b)**
```
                 kappa  x  1000        0.0248  x  1000        24.8
   Lambda  =  ------------------  =  ------------------  =  --------
                       C                     0.2               0.2

           =   124    S cm2 mol-1
```

---

### Q17
On dilution of an electrolyte solution

(a) both kappa and Lambda increase
(b) both kappa and Lambda decrease
(c) kappa decreases and Lambda increases
(d) kappa increases and Lambda decreases

**ANSWER: (c)**
```
   kappa is the conductance of 1 cm3 - fewer ions in it -> FALLS.
   Lambda is the conductance of all the ions from 1 MOLE - the ions get
   further apart and (for a weak electrolyte) more of them appear -> RISES.
```
> **SHORTCUT:** "kappa down, Lambda up" — say it out loud once and it sticks.

---

### Q18
`Lambda0` of a WEAK electrolyte cannot be obtained by extrapolating the
`Lambda` versus `sqrt(C)` graph because

(a) weak electrolytes do not conduct
(b) the graph is a straight line
(c) the curve rises steeply near infinite dilution and never meets the axis
(d) Lambda is negative for weak electrolytes

**ANSWER: (c)**
```
   For a weak electrolyte alpha changes sharply on dilution, so the plot
   shoots upward near zero concentration. Lambda0 must therefore be
   calculated using KOHLRAUSCH'S LAW instead.
```

---

### Q19
Given `lambda0(Ca2+) = 119.0` and `lambda0(Cl-) = 76.3 S cm2 mol-1`,
`Lambda0(CaCl2)` is

(a) 195.3 &nbsp; (b) 271.6 &nbsp; (c) 152.6 &nbsp; (d) 390.6 S cm2 mol-1

**ANSWER: (b)**
```
   CaCl2  gives  ONE Ca2+  and  TWO Cl-

   Lambda0  =  lambda0(Ca2+)  +  2  lambda0(Cl-)

            =  119.0  +  2 ( 76.3 )

            =  119.0  +  152.6   =   271.6   S cm2 mol-1
```
> **TRAP:** the number of ions matters. Forgetting the factor 2 on Cl-
> gives 195.3, which is option (a) — put there deliberately.

---

### Q20
The molar conductivity of a weak acid at a certain concentration is
`39.05` and at infinite dilution is `390.5 S cm2 mol-1`. Its degree of
dissociation is

(a) 0.01 &nbsp; (b) 0.10 &nbsp; (c) 1.00 &nbsp; (d) 10.0

**ANSWER: (b)**
```
                Lambda           39.05
   alpha  =  -------------  =  ---------   =   0.10
               Lambda0           390.5

   ( 10 % dissociated )
```
> **SHORTCUT:** alpha can NEVER be more than 1. Any option above 1 is wrong
> straight away.

---

### Q21
The molar conductivity of `0.025 M` methanoic acid is
`46.1 S cm2 mol-1`. Given `lambda0(H+) = 349.6` and
`lambda0(HCOO-) = 54.6 S cm2 mol-1`, its dissociation constant is

(a) 3.67 x 10^-4 &nbsp; (b) 1.84 x 10^-5 &nbsp; (c) 1.14 x 10^-2 &nbsp;
(d) 4.61 x 10^-3

**ANSWER: (a)**
```
   Lambda0  =  349.6  +  54.6   =   404.2   S cm2 mol-1

                 46.1
   alpha  =   ---------   =   0.1140
                404.2

                C alpha^2         ( 0.025 ) ( 0.1140 )^2
   Ka     =  --------------  =  --------------------------
                1 - alpha             1  -  0.1140

                ( 0.025 ) ( 0.012996 )        3.249 x 10^-4
          =  ---------------------------  =  ----------------
                        0.886                     0.886

          =   3.67  x  10^-4
```

---

# PATTERN 5 — Faraday's laws and electrolysis

### Q22
The quantity of electricity needed to deposit 1 mole of aluminium from
molten Al2O3 is

(a) 96500 C &nbsp; (b) 193000 C &nbsp; (c) 289500 C &nbsp; (d) 48250 C

**ANSWER: (c)**
```
   Al3+  +  3 e-   ---->   Al        so  3 moles of electrons per mole Al

   Q  =  3  x  96500   =   289500   C     ( = 3 faradays )
```

---

### Q23
When 1 faraday of electricity is passed through molten NaCl, the mass of
sodium liberated is (Na = 23)

(a) 11.5 g &nbsp; (b) 23 g &nbsp; (c) 46 g &nbsp; (d) 2.3 g

**ANSWER: (b)**
```
   Na+  +  e-   ---->   Na       n = 1

   1 F  =  1 mole of electrons  ->  1 mole of Na  =  23 g
```
> **SHORTCUT:** 1 F always gives ONE GRAM EQUIVALENT.
> `equivalent = molar mass / n`. For Na, n = 1, so 23 g. For Cu, n = 2, so
> 31.75 g. For Al, n = 3, so 9 g.

---

### Q24
A current of `9.65 A` is passed through AgNO3 solution for `1000 s`. The
mass of silver deposited is (Ag = 108)

(a) 1.08 g &nbsp; (b) 10.8 g &nbsp; (c) 108 g &nbsp; (d) 5.4 g

**ANSWER: (b)**
```
   Q  =  I t  =  9.65  x  1000   =   9650  C

                        9650
   moles of e-   =    ---------   =   0.1   mol
                       96500

   Ag+ + e- -> Ag , so 0.1 mol of Ag is deposited.

   mass  =  0.1  x  108   =   10.8   g
```

---

### Q25
The same quantity of electricity that deposits `10.8 g` of silver is
passed through CuSO4. The mass of copper deposited is
(Ag = 108, Cu = 63.5)

(a) 6.35 g &nbsp; (b) 3.175 g &nbsp; (c) 12.7 g &nbsp; (d) 63.5 g

**ANSWER: (b)**
```
   10.8 g Ag  =  0.1 mol Ag  =  0.1 mol of electrons

   Cu2+ + 2 e- -> Cu , so 0.1 mol of electrons gives 0.05 mol of Cu.

   mass  =  0.05  x  63.5   =   3.175   g
```
> **SHORTCUT:** work in MOLES OF ELECTRONS, not in grams. It removes every
> chance of an arithmetic slip.

---

### Q26
The volume of oxygen at STP liberated at the anode when 4 faradays are
passed through acidified water is

(a) 5.6 L &nbsp; (b) 11.2 L &nbsp; (c) 22.4 L &nbsp; (d) 44.8 L

**ANSWER: (c)**
```
   Anode :   2 H2O   ---->   O2  +  4 H+  +  4 e-

   4 F  ->  1 mole of O2  ->  22.4 L at STP

   ( at the cathode, 4 F would give 2 mol H2 = 44.8 L )
```

---

### Q27
On electrolysing AQUEOUS sodium chloride, the product at the cathode is

(a) Na &nbsp; (b) H2 &nbsp; (c) Cl2 &nbsp; (d) O2

**ANSWER: (b)**
```
   E0 for reduction of water/H+ is about 0.00 V,
   E0(Na+/Na)  =  - 2.71 V.

   Hydrogen is far easier to reduce, so H2 is liberated at the cathode,
   NOT sodium. Sodium is obtained only from MOLTEN NaCl.
```

---

### Q28
On electrolysing aqueous CuSO4 using PLATINUM electrodes, the product at
the anode is

(a) Cu &nbsp; (b) SO2 &nbsp; (c) O2 &nbsp; (d) S

**ANSWER: (c)**
```
   SO4 2- is extremely hard to oxidise, so WATER is oxidised instead:

        2 H2O   ---->   O2  +  4 H+  +  4 e-

   ( With COPPER electrodes the anode itself dissolves as Cu2+ instead. )
```

---

# PATTERN 6 — Batteries and corrosion

### Q29
In the lead storage battery, the substance formed at BOTH electrodes
during discharge is

(a) Pb &nbsp; (b) PbO2 &nbsp; (c) PbSO4 &nbsp; (d) PbO

**ANSWER: (c)**
```
   Anode    :  Pb + SO4 2-   ->   PbSO4 + 2 e-
   Cathode  :  PbO2 + SO4 2- + 4 H+ + 2 e-   ->   PbSO4 + 2 H2O

   Overall  :  Pb + PbO2 + 2 H2SO4   ->   2 PbSO4 + 2 H2O

   White PbSO4 coats both plates and the acid is used up.
```

---

### Q30
The EMF of the mercury cell remains constant during its life because

(a) it uses a solid electrolyte
(b) no ion appears in the overall cell reaction
(c) it is a secondary cell
(d) mercury is a liquid

**ANSWER: (b)**
```
   Overall :   Zn(Hg)  +  HgO   ---->   ZnO  +  Hg

   Only solids and liquids appear. No ion concentration changes, so the
   Nernst correction term stays zero and the EMF stays at about 1.35 V.
```

---

### Q31
Rust is chemically

(a) FeO &nbsp; (b) Fe3O4 &nbsp; (c) Fe2O3 . x H2O &nbsp; (d) Fe(OH)2

**ANSWER: (c)**
```
   Rust is HYDRATED IRON(III) OXIDE.
   The mechanism is:  Fe -> Fe2+ at the anode, then further oxidation of
   Fe2+ to Fe3+ by oxygen, then hydration.
```

---

### Q32
Galvanised iron does not rust even when the coating is scratched because

(a) zinc is unreactive
(b) zinc has a more negative E0 than iron and corrodes first
(c) zinc forms an alloy with iron
(d) zinc repels water

**ANSWER: (b)**
```
   E0(Zn2+/Zn) = - 0.76 V  is more negative than  E0(Fe2+/Fe) = - 0.44 V.

   So zinc acts as the ANODE and is oxidised in preference to the iron.
   This is SACRIFICIAL (cathodic) protection.
```

---

# PATTERN 7 — Rate expressions

### Q33
For `N2 + 3 H2 ---> 2 NH3`, ammonia is being formed at
`2 x 10^-4 mol L-1 s-1`. The rate of disappearance of hydrogen is

(a) 1 x 10^-4 &nbsp; (b) 2 x 10^-4 &nbsp; (c) 3 x 10^-4 &nbsp;
(d) 6 x 10^-4 mol L-1 s-1

**ANSWER: (c)**
```
             1  d[H2]        1  d[NH3]
   rate = - --- -------  =  --- --------
             3    dt         2     dt

                             1
   rate of reaction     =   --- ( 2 x 10^-4 )   =   1 x 10^-4
                             2

     d[H2]
   - -------  =  3  x  rate  =  3 x 10^-4    mol L-1 s-1
      dt
```
> **SHORTCUT:** the species change in the RATIO OF THE COEFFICIENTS.
> Here `N2 : H2 : NH3 = 1 : 3 : 2`. Once you know one, scale it.

---

### Q34
For the reaction `2 N2O5 ---> 4 NO2 + O2`, the correct rate expression is

(a) rate = -d[N2O5]/dt = d[O2]/dt
(b) rate = -(1/2) d[N2O5]/dt = (1/4) d[NO2]/dt = d[O2]/dt
(c) rate = -2 d[N2O5]/dt = 4 d[NO2]/dt
(d) rate = d[NO2]/dt

**ANSWER: (b)**
```
   DIVIDE by the coefficient, MINUS for reactants, PLUS for products.

              1   d[N2O5]        1   d[NO2]        d[O2]
   rate = -  --- ----------  =  --- ---------  =  --------
              2      dt          4     dt            dt
```

---

# PATTERN 8 — Order, molecularity and units of k

### Q35
The unit of the rate constant of a reaction is `mol L-1 s-1`. The order of
the reaction is

(a) 0 &nbsp; (b) 1 &nbsp; (c) 2 &nbsp; (d) 3

**ANSWER: (a)**
```
   General rule :   unit of k  =  ( mol L-1 )^( 1 - n )  s-1

   For n = 0 :  ( mol L-1 )^1  s-1   =   mol L-1 s-1        MATCH.

   Quick table:  0 -> mol L-1 s-1     1 -> s-1
                 2 -> L mol-1 s-1     3 -> L2 mol-2 s-1
```
> **SHORTCUT:** if the unit of k is `s-1` with no concentration in it, the
> reaction is FIRST order. This single fact answers a lot of questions.

---

### Q36
Which of the following is TRUE?

(a) Order can never be zero
(b) Molecularity can be zero
(c) Molecularity can be a fraction
(d) Order can be zero or a fraction

**ANSWER: (d)**
```
   ORDER          -  experimental; can be 0, a fraction, or even negative.
   MOLECULARITY   -  a count of colliding particles; always a whole
                     number, never zero, never a fraction.
```

---

### Q37
For a reaction `Rate = k [A]^(1/2) [B]^(3/2)`, the overall order is

(a) 1 &nbsp; (b) 2 &nbsp; (c) 3/2 &nbsp; (d) 1/2

**ANSWER: (b)**
```
   order  =  1/2  +  3/2   =   4/2   =   2
```

---

### Q38
In a reaction, doubling the concentration of A leaves the rate unchanged.
The order with respect to A is

(a) 0 &nbsp; (b) 1 &nbsp; (c) 2 &nbsp; (d) 3

**ANSWER: (a)**
```
   Rate ratio  =  ( 2 )^x  =  1     ->    x  =  0

   ZERO order in A - the rate does not depend on [A] at all.
```
> **SHORTCUT:** rate ratio = (concentration ratio)^order.
> Doubling and rate x1 -> 0 ; x2 -> 1 ; x4 -> 2 ; x8 -> 3.

---

# PATTERN 9 — Zero and first order kinetics

### Q39
For a first order reaction, the half life

(a) increases with initial concentration
(b) decreases with initial concentration
(c) is independent of initial concentration
(d) is equal to 1/k

**ANSWER: (c)**
```
   t(1/2)  =  0.693 / k

   [A]0 cancelled out during the derivation, so the half life of a first
   order reaction depends only on k (and therefore on temperature).
```

---

### Q40
The half life of a first order reaction is 20 minutes. Its rate constant
is

(a) 0.0347 min-1 &nbsp; (b) 0.693 min-1 &nbsp; (c) 13.86 min-1 &nbsp;
(d) 0.0231 min-1

**ANSWER: (a)**
```
            0.693        0.693
    k  =  --------  =  --------   =   0.03465   min-1
           t(1/2)         20
```

---

### Q41
After 3 half lives, the fraction of a first order reactant remaining is

(a) 1/2 &nbsp; (b) 1/4 &nbsp; (c) 1/8 &nbsp; (d) 1/16

**ANSWER: (c)**
```
    Remaining  =  [A]0 / 2^n     with  n = 3

               =  [A]0 / 8

    ( 100 -> 50 -> 25 -> 12.5 , which is 1/8 of the start )
```
> **SHORTCUT:** `fraction left = 1 / 2^n` where n is the number of half
> lives. If the time given is not a whole number of half lives, use
> `k = (2.303/t) log([A]0/[A])` instead.

---

### Q42
A first order reaction is 75 % complete in 60 minutes. Its half life is

(a) 15 min &nbsp; (b) 30 min &nbsp; (c) 45 min &nbsp; (d) 60 min

**ANSWER: (b)**
```
    75 % complete means 25 % is LEFT, which is one quarter,
    which is TWO half lives.

         2  x  t(1/2)   =   60      ->     t(1/2)  =  30  min
```
> **SHORTCUT (first order only):**
> `t(50 %) = t(1/2)` , `t(75 %) = 2 t(1/2)` , `t(87.5 %) = 3 t(1/2)` ,
> `t(90 %) = 3.32 t(1/2)` , `t(99 %) = 6.64 t(1/2)`.

---

### Q43
For which order is a plot of concentration against time a STRAIGHT LINE?

(a) zero &nbsp; (b) first &nbsp; (c) second &nbsp; (d) third

**ANSWER: (a)**
```
    ZERO order :   [A]  =  [A]0  -  k t        ->  [A] vs t is straight

    FIRST order:   log [A] vs t is straight, not [A] itself.
```
> **SHORTCUT — the graph table:**
> ```
>    [A]      vs t straight   ->  ZERO order
>    log[A]   vs t straight   ->  FIRST order
>    1/[A]    vs t straight   ->  SECOND order
>    log k    vs 1/T straight ->  Arrhenius
> ```

---

### Q44
For a zero order reaction with `[A]0 = 0.4 M` and
`k = 2 x 10^-2 mol L-1 s-1`, the half life is

(a) 5 s &nbsp; (b) 10 s &nbsp; (c) 20 s &nbsp; (d) 40 s

**ANSWER: (b)**
```
                [A]0             0.4              0.4
    t(1/2) =  --------  =  ---------------  =  ---------  =  10  s
                2 k         2 x 2 x 10^-2        0.04
```
> **TRAP:** `0.693/k` is for FIRST order only. Using it here gives 34.65 s,
> which is a deliberately wrong option in many papers.

---

### Q45
The inversion of cane sugar is an example of a

(a) zero order reaction &nbsp; (b) second order reaction
(c) pseudo first order reaction &nbsp; (d) third order reaction

**ANSWER: (c)**
```
    C12H22O11  +  H2O   --H+-->   glucose  +  fructose

    Water is the solvent and is in enormous excess, so [H2O] is
    effectively constant and the reaction follows FIRST order kinetics
    even though it is really second order.

    The other standard example is the acid hydrolysis of an ESTER.
```

---

# PATTERN 10 — Arrhenius equation and temperature

### Q46
The slope of a plot of `log k` against `1/T` is

(a) -Ea/R &nbsp; (b) -Ea/(2.303 R) &nbsp; (c) +Ea/(2.303 R) &nbsp;
(d) log A

**ANSWER: (b)**
```
                                Ea         1
      log k   =   log A   -  ---------  x ---
                              2.303 R      T

      Compare with  y = c + m x :

           slope   =   - Ea / ( 2.303 R )       intercept  =  log A

      so   Ea   =   - 2.303 R  x  slope
```

---

### Q47
The rate constant of a reaction doubles when the temperature rises from
300 K to 310 K. The activation energy is about (R = 8.314)

(a) 26.8 kJ mol-1 &nbsp; (b) 53.6 kJ mol-1 &nbsp; (c) 107 kJ mol-1 &nbsp;
(d) 5.36 kJ mol-1

**ANSWER: (b)**
```
             k2          Ea          T2  -  T1
      log  ------  =  ---------  x  -------------
             k1        2.303 R          T1 T2

                          Ea               10
      log ( 2 )  =   -----------   x   -----------
                        19.147            93000

         0.3010  x  19.147  x  93000
   Ea = ------------------------------
                     10

         5.7633  x  93000        535 987
      = ------------------  =  -----------  =  53 599   J mol-1
                 10                10

   Ea  =  53.6   kJ mol-1
```
> **SHORTCUT:** for "the rate doubles over a 10 K rise near room
> temperature", Ea always comes out around 50 to 55 kJ mol-1. If your
> answer is far from that, you have slipped a decimal.

---

### Q48
A catalyst increases the rate of a reaction by

(a) increasing the activation energy
(b) decreasing the activation energy
(c) changing delta H of the reaction
(d) shifting the equilibrium to the right

**ANSWER: (b)**
```
   A catalyst provides an ALTERNATIVE PATH of LOWER activation energy.
   It does NOT change delta H, does NOT change the equilibrium constant,
   and speeds up the forward and backward reactions EQUALLY.
```

---

### Q49
The fraction of molecules having energy equal to or greater than the
activation energy is given by

(a) e^(Ea/RT) &nbsp; (b) e^(-Ea/RT) &nbsp; (c) Ea/RT &nbsp; (d) A e^(Ea/RT)

**ANSWER: (b)**
```
   From  k = A e^(-Ea/RT) , the exponential factor is exactly the
   fraction of collisions carrying enough energy.

   Since Ea and RT are both positive, the exponent is NEGATIVE and the
   fraction is always LESS than 1 - which it must be.
```

---

### Q50
In collision theory, the pre-exponential factor A is equal to

(a) Z &nbsp; (b) P &nbsp; (c) P Z &nbsp; (d) Z / P

**ANSWER: (c)**
```
                                - Ea / R T
      Rate   =    P    Z    e

   Comparing with   k  =  A  e^( - Ea / R T )   gives    A  =  P Z

      Z  =  collision frequency
      P  =  steric (orientation) factor
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------+-----------------------------------+
  |  WHEN YOU SEE THIS              |  DO THIS IMMEDIATELY              |
  +---------------------------------+-----------------------------------+
  |  Two E0 values given            |  E0(cell) = cathode - anode.      |
  |                                 |  Opposite signs -> ADD magnitudes |
  +---------------------------------+-----------------------------------+
  |  Concentrations other than 1 M  |  Nernst. Dilute the CATHODE ion   |
  |                                 |  -> E falls. Dilute the ANODE ion |
  |                                 |  -> E rises.                      |
  +---------------------------------+-----------------------------------+
  |  A pH is given with a hydrogen  |  E = - 0.0591 x pH . One line.    |
  |  electrode                      |                                   |
  +---------------------------------+-----------------------------------+
  |  "delta G" appears              |  - n F E . Sign is ALWAYS opposite|
  |                                 |  to E. Answer in joules.          |
  +---------------------------------+-----------------------------------+
  |  "equilibrium constant" + E0    |  log K = n E0 / 0.0591            |
  +---------------------------------+-----------------------------------+
  |  kappa and a molarity given     |  Lambda = kappa x 1000 / C        |
  +---------------------------------+-----------------------------------+
  |  "degree of dissociation"       |  alpha = Lambda / Lambda0 .       |
  |                                 |  It must be between 0 and 1.      |
  +---------------------------------+-----------------------------------+
  |  Two or three ion conductivities|  Kohlrausch. COUNT the ions:      |
  |                                 |  CaCl2 needs 2 x lambda0(Cl-).    |
  +---------------------------------+-----------------------------------+
  |  Amperes and a time             |  Convert time to SECONDS first,   |
  |                                 |  then w = M I t / (n x 96500).    |
  +---------------------------------+-----------------------------------+
  |  Two electrolytes in series     |  Work in MOLES OF ELECTRONS, not  |
  |                                 |  in grams.                        |
  +---------------------------------+-----------------------------------+
  |  "aqueous NaCl"                 |  Cathode H2 , anode Cl2 . Never   |
  |                                 |  sodium.                          |
  +---------------------------------+-----------------------------------+
  |  Coefficients in a rate         |  Divide by the coefficient. The   |
  |  question                       |  species change in the ratio of   |
  |                                 |  the coefficients.                |
  +---------------------------------+-----------------------------------+
  |  Units of k given               |  s-1 -> first order.              |
  |                                 |  mol L-1 s-1 -> zero order.       |
  +---------------------------------+-----------------------------------+
  |  A concentration doubles and    |  rate ratio = (conc ratio)^order. |
  |  you must find the order        |  x1 -> 0 , x2 -> 1 , x4 -> 2      |
  +---------------------------------+-----------------------------------+
  |  "% completed" for first order  |  t(75%) = 2 t(1/2)                |
  |                                 |  t(90%) = 3.32 t(1/2)             |
  |                                 |  t(99%) = 6.64 t(1/2)             |
  +---------------------------------+-----------------------------------+
  |  A straight-line graph is       |  [A] vs t -> zero                 |
  |  described                      |  log[A] vs t -> first             |
  |                                 |  1/[A] vs t -> second             |
  |                                 |  log k vs 1/T -> Arrhenius        |
  +---------------------------------+-----------------------------------+
  |  Two temperatures and two k     |  log(k2/k1) = Ea(T2-T1)/(2.303 R  |
  |  values                         |  T1 T2). T in KELVIN, Ea in J.    |
  +---------------------------------+-----------------------------------+
  |  "catalyst"                     |  Lowers Ea only. delta H, delta G |
  |                                 |  and K are all UNCHANGED.         |
  +---------------------------------+-----------------------------------+

  LAST RULE:  in AP / TG EAPCET there is NO negative marking.
              Every blank is a wasted mark. Fill in all four bubbles'
              worth of guesses before you leave the hall.
```
