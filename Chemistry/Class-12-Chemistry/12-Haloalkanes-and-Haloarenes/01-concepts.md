# Haloalkanes and Haloarenes — Concepts from Zero

**Chemistry 2nd Year · Chapter 12 · AP Inter (BIEAP)**

Read this with a pen. Every equation in this file should end up on your own paper
at least once. Organic chemistry is a *writing* subject, not a *reading* subject.

---

# TOPIC 1 — WHAT IS A HALOALKANE, AND HOW DO WE CLASSIFY THEM

## 1.1 The basic idea

Take any hydrocarbon. Knock off one hydrogen. Put a halogen (F, Cl, Br or I) in its
place. That is all a halogen compound is.

```
     CH3-CH3      -- replace one H by Cl -->     CH3-CH2-Cl
     ethane                                     chloroethane

     C6H6         -- replace one H by Cl -->     C6H5-Cl
     benzene                                    chlorobenzene
```

We write the general formula as **R-X**, where R is the carbon part and X is the halogen.

> Everyday picture: an alkane is a plain wall. The halogen is a hook you screw into it.
> Once the hook is there you can hang almost anything on the molecule — an -OH, an -NH2,
> a -CN. That is why this chapter is the doorway to the rest of organic chemistry.

## 1.2 Classification by the NUMBER of halogen atoms

```
  +-------------------+----------------------+-----------------------------+
  |  TYPE             |  HOW MANY X ATOMS    |  EXAMPLE                    |
  +-------------------+----------------------+-----------------------------+
  |  MONOhalogen      |  one                 |  CH3-Cl    chloromethane    |
  |  DIhalogen        |  two                 |  CH2Cl2    dichloromethane  |
  |  TRIhalogen       |  three               |  CHCl3     chloroform       |
  |  POLYhalogen      |  three or more       |  CCl4 , CHI3 , DDT          |
  +-------------------+----------------------+-----------------------------+
```

Dihalides come in three sub-types. This gets asked as a 2-mark question:

```
  GEMINAL (gem-dihalide)   both halogens on the SAME carbon
                           CH3-CHCl2       1,1-dichloroethane
                           also called an ALKYLIDENE halide

  VICINAL (vic-dihalide)   halogens on ADJACENT carbons
                           CH2Cl-CH2Cl     1,2-dichloroethane
                           also called an ALKYLENE halide

  alpha-omega dihalide     halogens at the TWO ENDS of the chain
                           CH2Cl-CH2-CH2Cl 1,3-dichloropropane
```

> Memory hook: **GEM**inal — like a gem set in one place (same carbon).
> **VIC**inal — "vicinity", next door (neighbouring carbons).

## 1.3 Classification by the CARBON that carries the halogen

This is the classification that actually decides how the compound *reacts*, so it
matters far more than the first one.

```
  +--------------+---------------------------+-------------------------------+
  | NAME         | THE C-X CARBON IS         | EXAMPLE                       |
  +--------------+---------------------------+-------------------------------+
  | ALKYL halide | sp3, plain chain          | CH3-CH2-CH2-Cl                |
  | (haloalkane) |                           |                               |
  +--------------+---------------------------+-------------------------------+
  | ALLYLIC      | sp3, but NEXT DOOR to a   | CH2=CH-CH2-Cl                 |
  |              | C=C double bond           | 3-chloroprop-1-ene            |
  +--------------+---------------------------+-------------------------------+
  | BENZYLIC     | sp3, but attached to a    | C6H5-CH2-Cl                   |
  |              | benzene ring              | benzyl chloride               |
  +--------------+---------------------------+-------------------------------+
  | VINYLIC      | sp2, the halogen sits ON  | CH2=CH-Cl                     |
  |              | the double-bond carbon    | chloroethene (vinyl chloride) |
  +--------------+---------------------------+-------------------------------+
  | ARYL         | sp2, halogen ON the ring  | C6H5-Cl  chlorobenzene        |
  | (haloarene)  |                           |                               |
  +--------------+---------------------------+-------------------------------+
```

Draw the difference between allylic and vinylic once, and you will never mix them again:

```
        VINYLIC                          ALLYLIC

     H2C = CH - Cl                  H2C = CH - CH2 - Cl
            ^                                     ^
            |                                     |
     Cl is ON the sp2 carbon        Cl is on an sp3 carbon that is
     of the double bond             NEXT TO the double bond

     VERY UNREACTIVE                VERY REACTIVE
     (like an aryl halide)          (resonance-stabilised carbocation)
```

## 1.4 Primary, secondary and tertiary haloalkanes

Count how many **carbon atoms** are directly joined to the carbon that carries X.

```
     0 or 1 carbon attached   ->   PRIMARY   (1deg)
     2 carbons attached       ->   SECONDARY (2deg)
     3 carbons attached       ->   TERTIARY  (3deg)


          H                    CH3                   CH3
          |                     |                     |
   H3C -- C -- Cl        H3C -- C -- Cl        H3C -- C -- Cl
          |                     |                     |
          H                     H                    CH3

     1deg (primary)        2deg (secondary)      3deg (tertiary)
     1-chloropropane*      2-chloropropane       2-chloro-2-methylpropane
     (*here drawn as               |                     |
      chloroethane)          isopropyl chloride    tert-butyl chloride
```

### WORKED EXAMPLE 1

**Classify each of the following: (a) CH3-CH2-CH2-Br (b) (CH3)2CH-Br
(c) (CH3)3C-Br (d) C6H5-CH2-Br (e) CH2=CH-Br**

```
  (a) CH3-CH2-CH2-Br
      The C carrying Br has ONE carbon attached  ->  PRIMARY alkyl halide.

  (b) (CH3)2CH-Br
      The C carrying Br has TWO carbons attached ->  SECONDARY alkyl halide.

  (c) (CH3)3C-Br
      The C carrying Br has THREE carbons        ->  TERTIARY alkyl halide.

  (d) C6H5-CH2-Br
      The C carrying Br is sp3 and attached to a ring  ->  BENZYLIC halide.
      (It is also a primary halide.)

  (e) CH2=CH-Br
      Br is ON an sp2 double-bond carbon         ->  VINYLIC halide.
```

> **TRAP:** Benzyl chloride `C6H5-CH2-Cl` and chlorobenzene `C6H5-Cl` are completely
> different animals. Benzyl chloride reacts *fast* with nucleophiles; chlorobenzene
> is almost inert. One CH2 group changes everything. Read the formula carefully.

---

# TOPIC 2 — NAMING THEM (IUPAC AND COMMON NAMES)

## 2.1 The four IUPAC rules

```
  RULE 1   Find the LONGEST carbon chain that contains the carbon bearing
           the halogen. That is the parent alkane.

  RULE 2   Number the chain from the end that gives the LOWEST number to
           the first substituent (halogen or alkyl group).

  RULE 3   Write the halogen as a PREFIX:
              F -> fluoro , Cl -> chloro , Br -> bromo , I -> iodo
           Use di, tri, tetra if there is more than one of the same halogen.

  RULE 4   If several different substituents are present, arrange them in
           ALPHABETICAL order (ignore di/tri when alphabetising).
```

## 2.2 The common (trivial) names you must also know

```
  +---------------------------+------------------------+-------------------+
  |  STRUCTURE                |  COMMON NAME           |  IUPAC NAME       |
  +---------------------------+------------------------+-------------------+
  |  CH3-Cl                   |  methyl chloride       |  chloromethane    |
  |  CH3-CH2-Br               |  ethyl bromide         |  bromoethane      |
  |  CH3-CH2-CH2-Cl           |  n-propyl chloride     |  1-chloropropane  |
  |  (CH3)2CH-Cl              |  isopropyl chloride    |  2-chloropropane  |
  |  (CH3)3C-Cl               |  tert-butyl chloride   |  2-chloro-2-      |
  |                           |                        |  methylpropane    |
  |  (CH3)2CH-CH2-Cl          |  isobutyl chloride     |  1-chloro-2-      |
  |                           |                        |  methylpropane    |
  |  CH2=CH-Cl                |  vinyl chloride        |  chloroethene     |
  |  CH2=CH-CH2-Cl            |  allyl chloride        |  3-chloroprop-1-  |
  |                           |                        |  ene              |
  |  C6H5-CH2-Cl              |  benzyl chloride       |  (chloromethyl)   |
  |                           |                        |  benzene          |
  |  C6H5-Cl                  |  phenyl chloride       |  chlorobenzene    |
  |  CH2Cl2                   |  methylene chloride    |  dichloromethane  |
  |  CHCl3                    |  chloroform            |  trichloromethane |
  |  CHI3                     |  iodoform              |  triiodomethane   |
  |  CCl4                     |  carbon tetrachloride  |  tetrachloro-     |
  |                           |                        |  methane          |
  |  CH2Br-CH2Br              |  ethylene dibromide    |  1,2-dibromo-     |
  |                           |                        |  ethane           |
  +---------------------------+------------------------+-------------------+
```

### WORKED EXAMPLE 2

**Give the IUPAC name of `CH3-CH(Cl)-CH2-CH(CH3)-CH3`.**

```
  Step 1  Draw and count the longest chain.

              1      2      3      4      5
             CH3 -- CH -- CH2 -- CH -- CH3
                     |            |
                     Cl          CH3

          Longest chain = 5 carbons  ->  PENTANE.

  Step 2  Number from both ends and compare.

          From the LEFT :  Cl at C-2 , CH3 at C-4   ->  locants {2, 4}
          From the RIGHT:  CH3 at C-2 , Cl at C-4   ->  locants {2, 4}

          Tie! So apply the tie-breaker: the group that comes FIRST
          alphabetically gets the lower number. "chloro" beats "methyl".
          So number from the LEFT.

  Step 3  Assemble the name alphabetically: chloro before methyl.

          NAME:  2-chloro-4-methylpentane
```

### WORKED EXAMPLE 3

**Give the IUPAC name of `(CH3)3C-CH2-Br`.**

```
          Br - CH2 - C(CH3)3

  Step 1  Longest chain through the C-Br carbon:

              1       2       3
             CH2 --- C  --- CH3
              |      |
              Br     CH3 (and one more CH3)

          3 carbons  ->  PROPANE.

  Step 2  C-1 carries Br. C-2 carries two methyl groups.

  Step 3  NAME:  1-bromo-2,2-dimethylpropane
          (common name: neopentyl bromide)
```

### WORKED EXAMPLE 4

**Name `CH3-CH(Br)-CH(Cl)-CH3` and `p-Cl-C6H4-Br`.**

```
  (a)     1      2       3      4
         CH3 -- CH --- CH --- CH3
                 |      |
                 Br     Cl

     From the left : Br at 2, Cl at 3   ->  {2,3}
     From the right: Cl at 2, Br at 3   ->  {2,3}
     Tie -> alphabetical: "bromo" beats "chloro", so bromo gets the 2.
     NAME:  2-bromo-3-chlorobutane

  (b) A benzene ring with Br and Cl in the para (1,4) positions.
     Alphabetical order decides which gets C-1: BROMO comes first.
     NAME:  1-bromo-4-chlorobenzene
```

> **TRAP:** In naming, alphabetical order decides the *order of writing* AND breaks
> numbering ties. But the FIRST job of numbering is always "lowest set of locants".
> Only when there is a tie do you go alphabetical.

---

# TOPIC 3 — THE NATURE OF THE C-X BOND

This is the physics of the whole chapter. Two minutes here saves you an hour later.

## 3.1 Polarity

Halogens are more electronegative than carbon. So the shared pair is pulled towards X:

```
                delta+          delta-
                  C  ---------->  X

     carbon becomes ELECTRON DEFICIENT   ->  attacked by NUCLEOPHILES
     halogen becomes ELECTRON RICH       ->  leaves as X-  (leaving group)
```

**That single arrow explains every reaction of a haloalkane.**

## 3.2 Bond length, bond enthalpy and dipole moment

As you go down the group F -> Cl -> Br -> I, the halogen atom gets **bigger**.
A bigger atom means the shared electrons sit further from the nuclei, so:

```
  +---------+-------------+-------------------+-----------------------------+
  | BOND    | LENGTH (pm) | ENTHALPY (kJ/mol) | COMMENT                     |
  +---------+-------------+-------------------+-----------------------------+
  | CH3-F   |     139     |        452        | shortest, STRONGEST         |
  | CH3-Cl  |     178     |        351        |                             |
  | CH3-Br  |     193     |        293        |                             |
  | CH3-I   |     214     |        234        | longest, WEAKEST            |
  +---------+-------------+-------------------+-----------------------------+

     BOND LENGTH:     C-F  <  C-Cl  <  C-Br  <  C-I      (increases down)
     BOND ENTHALPY:   C-F  >  C-Cl  >  C-Br  >  C-I      (decreases down)
     REACTIVITY:      R-I  >  R-Br  >  R-Cl  >  R-F      (weakest breaks first)
```

Dipole moments do **not** follow the same simple order, because the dipole depends on
both the electronegativity difference and the bond length:

```
     CH3-Cl (1.86 D) > CH3-F (1.85 D) > CH3-Br (1.83 D) > CH3-I (1.62 D)
```

> **TRAP:** Fluorine is the most electronegative, so students write "CH3F has the
> highest dipole moment". It does not — CH3Cl does, because the C-Cl bond is
> noticeably longer, and dipole moment = charge x distance.

## 3.3 The C-X bond in a haloarene is different

In chlorobenzene the C-Cl bond length is only about **169 pm**, shorter than the
178 pm in CH3-Cl. Why? Because of resonance (Topic 16). Remember the number, it makes
a nice one-line answer.

---

# TOPIC 4 — PREPARATION FROM ALCOHOLS

This is the most examined preparation. Four reagents, learn all four.

## 4.1 With hydrogen halides (HX)

```
     R-OH  +  H-X   -->   R-X  +  H2O

     CH3-CH2-OH + HCl --anhyd. ZnCl2--> CH3-CH2-Cl + H2O
     CH3-CH2-OH + HBr (or NaBr + H2SO4) --> CH3-CH2-Br + H2O
     CH3-CH2-OH + HI (or KI + H3PO4)  --> CH3-CH2-I  + H2O
```

Two reactivity orders you must be able to quote:

```
     ORDER OF THE HALOGEN ACID:      HI  >  HBr  >  HCl  >  HF
     ORDER OF THE ALCOHOL:           3deg  >  2deg  >  1deg  >  CH3-OH
```

## 4.2 The LUCAS REAGENT and the Lucas test

```
     LUCAS REAGENT  =  concentrated HCl  +  anhydrous ZnCl2

     R-OH  +  HCl  --anhyd. ZnCl2-->  R-Cl  +  H2O
```

The product R-Cl is **insoluble** in the reagent, so it shows up as **cloudiness
(turbidity)**. How fast the cloud appears tells you the class of alcohol:

```
  +-------------------+-------------------------------------------------+
  |  TERTIARY alcohol |  turbidity IMMEDIATELY                          |
  |  SECONDARY        |  turbidity in about 5 minutes                   |
  |  PRIMARY          |  NO turbidity at room temperature (needs heat)  |
  +-------------------+-------------------------------------------------+
```

Why: the reaction goes through a carbocation, and a 3deg carbocation forms most easily.

## 4.3 With phosphorus halides

```
     R-OH  +  PCl5  -->  R-Cl  +  POCl3  +  HCl

     3 R-OH  +  PCl3  -->  3 R-Cl  +  H3PO3

     CH3-CH2-OH + PCl5 --> CH3-CH2-Cl + POCl3 + HCl
     3 CH3-CH2-OH + PCl3 --> 3 CH3-CH2-Cl + H3PO3
```

For bromides and iodides we generate the phosphorus halide in the flask:

```
     R-OH  +  P  +  Br2   -->  R-Br      (P + Br2 makes PBr3 in situ)
     R-OH  +  P  +  I2    -->  R-I       (red phosphorus + iodine)
```

## 4.4 With thionyl chloride — and WHY IT IS PREFERRED

```
     R-OH  +  SO2Cl2 ... NO. Write it correctly:

     R-OH  +  SOCl2   --pyridine-->   R-Cl  +  SO2 (gas)  +  HCl (gas)

     CH3-CH2-OH + SOCl2 --> CH3-CH2-Cl + SO2 + HCl
```

This is the **Darzen's halide process**. Learn this sentence word for word:

> **Both by-products, SO2 and HCl, are GASES. They escape from the reaction mixture,
> so the alkyl chloride is left behind in a PURE state and no separation step is
> needed. This is why thionyl chloride is the preferred reagent.**

```
       +---------------------------------------------------------------+
       |  PCl5   ->  by-product POCl3 is a LIQUID, must be separated    |
       |  PCl3   ->  by-product H3PO3 is a LIQUID, must be separated    |
       |  SOCl2  ->  by-products SO2 and HCl are GASES, they fly away   |
       |            ==> PUREST PRODUCT, so SOCl2 is PREFERRED           |
       +---------------------------------------------------------------+
```

### WORKED EXAMPLE 5

**Write all four ways of converting propan-1-ol into 1-chloropropane.**

```
  1.  CH3-CH2-CH2-OH + HCl  --anhyd. ZnCl2-->  CH3-CH2-CH2-Cl + H2O
  2.  CH3-CH2-CH2-OH + PCl5 -->  CH3-CH2-CH2-Cl + POCl3 + HCl
  3.  3 CH3-CH2-CH2-OH + PCl3 -->  3 CH3-CH2-CH2-Cl + H3PO3
  4.  CH3-CH2-CH2-OH + SOCl2 --pyridine--> CH3-CH2-CH2-Cl + SO2 + HCl

  Method 4 gives the purest product.
```

> **TRAP:** Primary and secondary alcohols with HX can **rearrange** (the carbocation
> shifts) and give the wrong isomer. PCl5, PCl3 and SOCl2 do not rearrange. If a
> question says "without rearrangement", the answer is SOCl2.

---

# TOPIC 5 — PREPARATION FROM HYDROCARBONS

## 5.1 Free radical halogenation of alkanes

```
     CH4  +  Cl2   --UV light / heat-->   CH3Cl  +  HCl
     CH3Cl + Cl2   -->  CH2Cl2 + HCl
     CH2Cl2 + Cl2  -->  CHCl3  + HCl
     CHCl3 + Cl2   -->  CCl4   + HCl
```

The mechanism has the three classic steps:

```
     INITIATION      Cl-Cl   --hv-->   Cl.  +  Cl.

     PROPAGATION     CH4  +  Cl.   ->   .CH3  +  HCl
                     .CH3 +  Cl2   ->   CH3Cl +  Cl.

     TERMINATION     Cl. + Cl.  -> Cl2
                     .CH3 + Cl. -> CH3Cl
                     .CH3 + .CH3 -> CH3-CH3 (ethane)
```

> **TRAP:** This method is a poor laboratory method because it gives a **MIXTURE**
> of mono-, di-, tri- and tetra-halides that is very hard to separate. If a question
> asks "why is free radical chlorination not used to prepare a pure haloalkane?",
> that is the answer.

Stability of the free radical (and hence which H is removed first):

```
     3deg radical  >  2deg radical  >  1deg radical  >  CH3.
```

## 5.2 Addition of HX to an alkene — MARKOVNIKOV'S RULE

```
     C=C  +  H-X   ->   H-C-C-X
```

**MARKOVNIKOV'S RULE (statement to write in the exam):**

> When an unsymmetrical reagent H-X adds to an unsymmetrical alkene, the **negative
> part (X)** attaches to the carbon carrying the **smaller number of hydrogen atoms**,
> and the positive part (H) attaches to the carbon with more hydrogens.
> "The rich get richer" — the carbon with more H gets the H.

```
     CH3-CH=CH2  +  HBr   -->   CH3-CH(Br)-CH3
     propene                    2-bromopropane   (MAJOR product)

                        NOT     CH3-CH2-CH2-Br  (minor)
```

**Why?** Because the reaction goes through the more stable carbocation:

```
   Step 1  H+ adds. It can add to either carbon:

        CH3-CH=CH2 + H+  --> CH3-CH(+)-CH3   [ 2deg carbocation, STABLE ]
        CH3-CH=CH2 + H+  --> CH3-CH2-CH2(+)  [ 1deg carbocation, unstable ]

        Nature takes the stable route.

   Step 2  Br- attacks the carbocation:

        CH3-CH(+)-CH3  +  Br-  -->  CH3-CH(Br)-CH3

   Carbocation stability:  3deg > 2deg > 1deg > CH3(+)
   (more alkyl groups = more +I effect = more hyperconjugation = more stable)
```

## 5.3 The PEROXIDE EFFECT (anti-Markovnikov / KHARASCH EFFECT)

```
     CH3-CH=CH2  +  HBr  --benzoyl peroxide-->  CH3-CH2-CH2-Br
     propene                                    1-bromopropane  (MAJOR)
```

The product is now the **opposite** of Markovnikov. The reason is that the peroxide
switches the mechanism from ionic to **free radical**:

```
   STEP 1  The peroxide breaks up into radicals:

        C6H5-CO-O-O-CO-C6H5  --heat--> 2 C6H5-COO.  --> 2 C6H5. + 2 CO2

   STEP 2  The radical pulls H off HBr, making a bromine radical:

        C6H5.  +  H-Br   ->   C6H6  +  Br.

   STEP 3  Br. adds to the DOUBLE BOND. It adds to the END carbon, because
           that gives the more stable SECONDARY radical:

        CH3-CH=CH2  +  Br.  ->  CH3-.CH-CH2-Br   [ 2deg radical, STABLE ]
                            not CH3-CHBr-.CH2    [ 1deg radical, unstable ]

   STEP 4  The radical grabs H from another HBr, and a new Br. is released:

        CH3-.CH-CH2-Br  +  H-Br  ->  CH3-CH2-CH2-Br  +  Br.

   NET RESULT: Br sits on the END carbon = ANTI-MARKOVNIKOV.
```

> **TRAP — the single most asked fact here:** the peroxide effect is seen **ONLY with
> HBr**. It does NOT work with HCl or HI.
> Reason: the H-Cl bond is too STRONG to be broken by the free radical (step 2 fails),
> while the H-I bond is weak but the iodine radicals formed simply recombine to I2
> instead of adding to the alkene (step 3 fails).

### WORKED EXAMPLE 6

**Predict the major product: (a) 2-methylpropene + HBr,
(b) but-1-ene + HBr in presence of benzoyl peroxide.**

```
  (a)  (CH3)2C=CH2  +  HBr

       The CH2 end has 2 hydrogens, the other carbon has 0.
       Markovnikov: H goes to the CH2, Br goes to the other carbon.

       PRODUCT:  (CH3)2C(Br)-CH3   =  2-bromo-2-methylpropane
       (this also happens to be the stable 3deg carbocation route)

  (b)  CH3-CH2-CH=CH2  +  HBr  --peroxide-->

       Peroxide present + HBr  ==>  ANTI-Markovnikov.
       Br goes to the TERMINAL carbon.

       PRODUCT:  CH3-CH2-CH2-CH2-Br  =  1-bromobutane
```

## 5.4 Halogen exchange — FINKELSTEIN and SWARTS

**FINKELSTEIN REACTION** (makes alkyl **IODIDES**):

```
     R-Cl  (or R-Br)  +  NaI   --dry acetone-->   R-I  +  NaCl (or NaBr)

     CH3-CH2-Cl + NaI --dry acetone--> CH3-CH2-I + NaCl
```

> Why does it work? NaI **dissolves** in dry acetone, but NaCl and NaBr **do not**.
> The NaCl precipitates out of the solution, so by Le Chatelier's principle the
> equilibrium is dragged to the right. Always mention "dry acetone" — it carries marks.

**SWARTS REACTION** (makes alkyl **FLUORIDES**):

```
     R-Br  +  AgF   -->   R-F  +  AgBr

     CH3-Br + AgF --> CH3-F + AgBr

     Other reagents that do the same job:  Hg2F2 , CoF2 , SbF3
```

> **TRAP:** Students swap the two. Remember:
> **F**inkelstein has an **I** in the middle of the word "Finkelste**I**n" — iodide.
> **S**warts starts like **S**bF3 and gives fluorides. Or simply: **Swarts = F**.

---

# TOPIC 6 — PREPARATION OF HALOARENES

## 6.1 By electrophilic substitution (direct halogenation)

```
     C6H6  +  Cl2   --anhyd. FeCl3 (or AlCl3), dark-->   C6H5-Cl  +  HCl

     C6H6  +  Br2   --anhyd. FeBr3-->   C6H5-Br  +  HBr
```

The Lewis acid (FeCl3) is the **halogen carrier**: it polarises Cl2 and generates the
electrophile Cl+.

```
     Cl-Cl  +  FeCl3   ->   Cl(+)  +  [FeCl4](-)
```

> Limits of this method: iodination is **reversible** (the HI formed reduces the
> product back), so it is carried out in the presence of an **oxidising agent** such
> as HNO3 or HIO4 to destroy the HI. Direct fluorination is far too violent to control.

## 6.2 From amines — SANDMEYER'S REACTION

First convert the aromatic amine to a diazonium salt at 273-278 K:

```
     C6H5-NH2  +  NaNO2 + HCl  --273-278 K-->  C6H5-N2(+)Cl(-)  +  NaCl + 2 H2O
     aniline                                   benzenediazonium chloride
```

Then treat with a **copper(I) halide**:

```
     C6H5-N2(+)Cl(-)  +  CuCl / HCl   -->   C6H5-Cl  +  N2
     C6H5-N2(+)Cl(-)  +  CuBr / HBr   -->   C6H5-Br  +  N2
     C6H5-N2(+)Cl(-)  +  CuCN / KCN   -->   C6H5-CN  +  N2
```

For the **iodide** no copper is needed at all — just warm with KI:

```
     C6H5-N2(+)Cl(-)  +  KI   --warm-->   C6H5-I  +  KCl  +  N2
```

## 6.3 GATTERMANN REACTION

Same job, but the reagent is **copper powder + HX** instead of the cuprous halide:

```
     C6H5-N2(+)Cl(-)  +  Cu powder / HCl   -->   C6H5-Cl  +  N2
     C6H5-N2(+)Cl(-)  +  Cu powder / HBr   -->   C6H5-Br  +  N2
```

```
    +----------------------------------------------------------------+
    |  SANDMEYER  ->  Cu(I) HALIDE  (CuCl , CuBr , CuCN) with HX      |
    |  GATTERMANN ->  Cu POWDER + HX                                  |
    |  Both convert the diazonium group into a halogen and give off N2|
    |  Sandmeyer gives BETTER yields. Gattermann is cheaper/simpler.  |
    +----------------------------------------------------------------+
```

> **TRAP:** Do not confuse this Gattermann reaction with the "Gattermann-Koch"
> reaction (which makes benzaldehyde from benzene with CO + HCl). At Inter level,
> "Gattermann" in this chapter always means the copper-powder diazonium reaction.

---

# TOPIC 7 — PHYSICAL PROPERTIES

## 7.1 Physical state and smell

Methyl chloride, methyl bromide, ethyl chloride and some chlorofluoromethanes are
**gases** at room temperature. Higher members are colourless **liquids** with a sweet
smell, and very high members are **solids**.

## 7.2 Boiling points — and the reasons

```
   FACT 1   A haloalkane boils HIGHER than the alkane of the same size.

            CH3-CH3 (b.p. 185 K)   <   CH3-CH2-Cl (b.p. 285 K)

            REASON: the C-X bond is polar, so molecules attract each other by
            DIPOLE-DIPOLE forces on top of the usual van der Waals forces.
            More force to break = more heat needed = higher b.p.

   FACT 2   For the SAME alkyl group:   R-I  >  R-Br  >  R-Cl  >  R-F

            CH3I (b.p. 42 C) > CH3Br (4 C) > CH3Cl (-24 C) > CH3F (-78 C)

            REASON: going down the group the halogen atom is bigger and has
            more electrons, so it is MORE POLARISABLE. Bigger, floppier
            electron clouds = stronger van der Waals (London) forces.
            NOTE: this is NOT about polarity - CH3I is the LEAST polar of the
            four, yet it boils highest. Size beats polarity here.

   FACT 3   For the same halogen, b.p. RISES with the size of the chain.

            CH3Cl < C2H5Cl < C3H7Cl < C4H9Cl

   FACT 4   BRANCHING LOWERS the boiling point.

            n-butyl bromide (b.p. 375 K) > isobutyl > sec-butyl >
            tert-butyl bromide (b.p. 346 K)

            REASON: a branched molecule is more spherical, so it has less
            SURFACE AREA in contact with its neighbours, so weaker van der
            Waals forces.

   FACT 5   Among isomeric DIhalobenzenes, the PARA isomer boils and
            especially MELTS much higher than ortho and meta.

            REASON: the para isomer is more SYMMETRICAL, so it packs into the
            crystal lattice more tightly and needs more energy to break apart.
            m.p.:   para (326 K)  >>  ortho (256 K) , meta (249 K)
```

## 7.3 Density

```
     Bromides, iodides and polychloro compounds are DENSER than water.

     For the same alkyl group:      R-I  >  R-Br  >  R-Cl
     For the same halogen, density DECREASES as the chain gets longer.
```

Reason: the halogen atom has a large mass packed into a small volume.

## 7.4 Solubility

```
     Haloalkanes are VERY SLIGHTLY soluble in water,
     but FREELY soluble in organic solvents (benzene, ether, alcohol).
```

Write the reason like this:

> To dissolve in water, a haloalkane would have to break the strong hydrogen bonds
> between water molecules. But a haloalkane cannot form hydrogen bonds with water to
> pay that energy back. The energy released by the new (weak) interactions is less
> than the energy needed, so the compound stays undissolved.

> **TRAP:** "Haloalkanes are polar, so they should dissolve in water." Wrong. Polar is
> not enough — you need **hydrogen bonding**. That is why ethanol dissolves and
> chloroethane does not.

---

# TOPIC 8 — NUCLEOPHILIC SUBSTITUTION: THE FULL LIST

## 8.1 What a nucleophile is

A **nucleophile** is a species with a lone pair (usually negative) that is hunting for
a positive centre. "Nucleus-loving."

```
      Nu(-)  +   R--X       ->      R--Nu   +   X(-)
                 ^                              ^
                 |                              |
          carbon is delta+                 leaving group
          so it is attacked                departs with the
                                           bonding pair
```

## 8.2 The complete table (learn every row)

| REAGENT | NUCLEOPHILE | PRODUCT FROM CH3-CH2-Br | CLASS OF PRODUCT |
|---|---|---|---|
| aqueous KOH / NaOH | OH- | CH3-CH2-OH | alcohol |
| H2O (moist Ag2O) | OH- | CH3-CH2-OH | alcohol |
| NaOCH3 (sodium alkoxide) | RO- | CH3-CH2-O-CH3 | ether (Williamson) |
| C6H5-ONa | ArO- | CH3-CH2-O-C6H5 | aryl alkyl ether |
| KCN in ethanol-water | CN- (C attacks) | CH3-CH2-CN | **nitrile** (cyanide) |
| AgCN in ethanol | CN- (N attacks) | CH3-CH2-NC | **isocyanide** (carbylamine) |
| KNO2 | NO2- (O attacks) | CH3-CH2-O-N=O | **alkyl nitrite** |
| AgNO2 | NO2- (N attacks) | CH3-CH2-NO2 | **nitroalkane** |
| NH3 (excess, sealed tube) | NH3 | CH3-CH2-NH2 | primary amine |
| R-NH2 | amine | CH3-CH2-NH-R | secondary amine |
| CH3COOAg (silver salt) | CH3COO- | CH3-COO-CH2-CH3 | **ester** |
| CH3COONa | CH3COO- | CH3-COO-CH2-CH3 | ester (slower) |
| NaSH | SH- | CH3-CH2-SH | thiol |
| NaSR | RS- | CH3-CH2-S-R | thioether |
| NaI / dry acetone | I- | CH3-CH2-I | iodide (Finkelstein) |
| LiAlH4 | H- | CH3-CH3 | alkane (reduction) |

## 8.3 The AMBIDENT NUCLEOPHILE rule (KCN vs AgCN, KNO2 vs AgNO2)

An **ambident nucleophile** has TWO atoms that can attack. Which one attacks depends on
whether the salt is ionic or covalent.

```
                  :C === N:(-)                  both C and N carry a lone pair

     KCN  is IONIC   -> free CN(-) ion is present
                        -> attack through CARBON (C-C bond is stronger)
                        -> product R-C=N  =  NITRILE   (alkyl cyanide)

     AgCN is COVALENT -> the carbon end is tied up in the Ag-C bond
                        -> only NITROGEN's lone pair is free to attack
                        -> product R-N=C:  =  ISOCYANIDE (alkyl isocyanide)


     KNO2  is IONIC   -> attack through OXYGEN  -> R-O-N=O  ALKYL NITRITE
     AgNO2 is COVALENT-> attack through NITROGEN-> R-NO2    NITROALKANE
```

```
     +-----------------------------------------------------------------+
     |   SILVER SALT  ==>  attack by the NITROGEN atom                 |
     |   K / Na SALT  ==>  attack by C (for cyanide) or O (for nitrite)|
     |                                                                 |
     |   Silver -> N. "Ag ends in g, N for Nitrogen." Just memorise it.|
     +-----------------------------------------------------------------+
```

### WORKED EXAMPLE 7

**Write the products: (a) CH3-Br + KCN (b) CH3-Br + AgCN (c) CH3-I + KNO2
(d) CH3-I + AgNO2.**

```
  (a) CH3-Br + KCN  --ethanol/water-->  CH3-CN + KBr
      = ethanenitrile (methyl cyanide, acetonitrile)

  (b) CH3-Br + AgCN --ethanol-->        CH3-NC + AgBr
      = methyl isocyanide (methyl carbylamine)

  (c) CH3-I  + KNO2  -->  CH3-O-N=O + KI
      = methyl nitrite

  (d) CH3-I  + AgNO2 -->  CH3-NO2 + AgI
      = nitromethane
```

> **TRAP:** Nitriles (R-CN) hydrolyse to carboxylic acids and reduce to primary
> amines with ONE extra carbon. Isocyanides (R-NC) reduce to SECONDARY amines
> (N-methyl amines). Examiners love this follow-up.

---

# TOPIC 9 — THE SN2 MECHANISM

## 9.1 The name

```
     S   =  Substitution
     N   =  Nucleophilic
     2   =  BIMOLECULAR  (TWO species are involved in the slow step)
```

## 9.2 The mechanism, step by step

There is only **ONE step**. The nucleophile comes in from the **back**, exactly
opposite the leaving group, and pushes it out — like pushing a ball through a tube.

```
                     THE SN2 MECHANISM (one step, no intermediate)


                       H                            H
                        \                            \
        HO(-)   +        C -- Br      -->      HO --- C          +   Br(-)
                        / \                          / \
                      H    CH3                    CH3   H

        attack from                            product: configuration
        the BACK,                              is TURNED INSIDE OUT
        180 degrees from Br


      SHOWING THE TRANSITION STATE IN THE MIDDLE:

                              +-             -+ (=|=)
                              |       H       |
                              |        \      |
        HO(-)  ---->  Br      | HO ---- C ----Br |   ---->  HO-C  +  Br(-)
                              |        / \    |
                              |      H   CH3  |
                              +-             -+

      In the transition state the CARBON IS BONDED TO FIVE THINGS:
      the three unchanged groups (drawn flat, in a plane), the incoming
      HO half-bonded, and the leaving Br half-bonded.
      Both the O-C bond and the C-Br bond are PARTIAL. This is the
      highest-energy point. It is a TRANSITION STATE, NOT an intermediate.


      THE UMBRELLA PICTURE  (draw this in the exam, it earns marks):

              before                during               after

                 |                    |                    |
              \  |  /              ---+---              /  |  \
               \ | /                  |                /   |   \
        HO -->   C--Br            HO--C--Br         HO-C     Br(-)
                                      |                |

           umbrella pointing     umbrella FLAT     umbrella BLOWN
           away from HO          (planar)          INSIDE OUT
```

## 9.3 The four facts you must be able to state

```
  1.  RATE LAW      rate  =  k [R-X] [Nu-]        SECOND order overall
                    (both the halide AND the nucleophile appear)

  2.  MOLECULARITY  bimolecular - two molecules collide in the slow step

  3.  STEREOCHEM.   INVERSION of configuration (WALDEN INVERSION)
                    If you start with the (-) isomer you get the (+) product
                    (or vice versa). The product is optically ACTIVE.

  4.  REACTIVITY    CH3-X  >  1deg  >  2deg  >  3deg
                    (3deg hardly reacts by SN2 at all)
```

## 9.4 Why the SN2 order is CH3 > 1deg > 2deg > 3deg

```
        H                CH3               CH3              CH3
        |                 |                 |                |
  Nu--> C--X       Nu--> C--X        Nu--> C--X       Nu-x-> C--X
        |                 |                 |                |
        H  H              H  H              H  CH3         CH3  CH3

      CH3-X            1deg             2deg              3deg
    wide open        still open      getting crowded    BLOCKED

  It is pure STERIC HINDRANCE (crowding). The more bulky alkyl groups
  around the carbon, the harder it is for the nucleophile to reach the
  back face. A tertiary halide has three methyl umbrellas in the way.
```

### WORKED EXAMPLE 8

**Arrange in order of increasing SN2 reactivity: 1-bromobutane, 2-bromobutane,
2-bromo-2-methylpropane, bromomethane.**

```
  Identify the class of each:

     bromomethane            CH3-Br            methyl
     1-bromobutane           CH3CH2CH2CH2-Br   primary
     2-bromobutane           CH3CH2CH(Br)CH3   secondary
     2-bromo-2-methylpropane (CH3)3C-Br        tertiary

  SN2 order is  CH3 > 1deg > 2deg > 3deg,
  so INCREASING reactivity means reversing it:

     (CH3)3C-Br  <  2-bromobutane  <  1-bromobutane  <  CH3-Br
```

---

# TOPIC 10 — THE SN1 MECHANISM

## 10.1 The name

```
     S   =  Substitution
     N   =  Nucleophilic
     1   =  UNIMOLECULAR (only ONE species is involved in the slow step)
```

## 10.2 The mechanism, step by step

There are **TWO steps**, with a real **carbocation intermediate** in between.

```
                     THE SN1 MECHANISM (two steps)


  STEP 1  (SLOW - this is the rate determining step)
          The C-Br bond breaks all by itself. Heat and the polar solvent do it.

                CH3                            CH3
                 |                              |
         CH3 --- C --- Br    --slow-->   CH3 -- C(+)      +     Br(-)
                 |                              |
                CH3                            CH3

        tert-butyl bromide              TERTIARY CARBOCATION
        (pyramidal, sp3)                (FLAT, sp2, trigonal planar,
                                         120 degree angles, empty p orbital
                                         standing straight up)


  STEP 2  (FAST)
          The nucleophile attacks the flat carbocation. But it is flat -
          so OH- can come in from EITHER FACE with equal ease:

                     OH(-) attacks from the TOP
                            |
                            v
                          CH3
                           |
              CH3 ------- C(+) -------- CH3      <-- flat, sp2
                           |
                            ^
                            |
                     OH(-) attacks from the BOTTOM


          Attack from the TOP    ->  gives the product with RETENTION
          Attack from the BOTTOM ->  gives the product with INVERSION

          Both are equally likely  ==>  a 50 : 50 mixture
                                   ==>  RACEMIC MIXTURE
                                   ==>  the product is OPTICALLY INACTIVE
```

## 10.3 The four facts

```
  1.  RATE LAW      rate  =  k [R-X]          FIRST order
                    The nucleophile does NOT appear in the rate law, because
                    it is not involved until AFTER the slow step. Doubling
                    the concentration of OH- does not change the rate at all.

  2.  MOLECULARITY  unimolecular - only R-X breaks in the slow step

  3.  STEREOCHEM.   RACEMISATION - a 50:50 mixture of both enantiomers.
                    Product is optically INACTIVE.

  4.  REACTIVITY    3deg  >  2deg  >  1deg  >  CH3-X
                    (exactly OPPOSITE to SN2)
```

## 10.4 Why the SN1 order is 3deg > 2deg > 1deg > CH3

The slow step makes a carbocation. So whichever halide gives the **most stable
carbocation** reacts fastest.

```
     CARBOCATION STABILITY:

        CH3            CH3            CH3            H
         |              |              |             |
   CH3 - C(+)   >  CH3- C(+)   >  CH3- C(+)   >  H - C(+)
         |              |              |             |
        CH3             H              H             H

       3deg            2deg           1deg          methyl
    3 alkyl groups   2 groups       1 group       0 groups

   REASON 1  +I EFFECT (inductive): alkyl groups push electron density
             towards the positive carbon and reduce the charge.
   REASON 2  HYPERCONJUGATION: the more C-H bonds next to the positive
             carbon, the more the charge is spread out.
                 3deg has 9 alpha C-H bonds  -> most stable
                 2deg has 6
                 1deg has 3
                 CH3+ has 0                  -> least stable
```

**Allylic and benzylic halides beat even tertiary halides**, because their carbocations
are stabilised by full **RESONANCE**:

```
     CH2=CH-CH2(+)  <-->  (+)CH2-CH=CH2         allyl cation: charge shared
                                                over 2 carbons

     C6H5-CH2(+)  <-->  charge delocalised into the ring at ortho and
                        para positions (4 resonance structures)

     OVERALL SN1 ORDER:
        benzyl , allyl  >  3deg  >  2deg  >  1deg  >  CH3  >  vinyl , aryl
```

## 10.5 What favours SN1 versus SN2

```
  +-------------------+---------------------------+-----------------------+
  |  FACTOR           |  FAVOURS SN1              |  FAVOURS SN2          |
  +-------------------+---------------------------+-----------------------+
  |  Substrate        |  3deg, benzyl, allyl      |  CH3, 1deg            |
  |  Nucleophile      |  weak (H2O, ROH)          |  STRONG (OH-, CN-,    |
  |                   |  concentration does not   |  RO-) and its         |
  |                   |  matter                   |  concentration MATTERS|
  |  Solvent          |  POLAR PROTIC             |  POLAR APROTIC        |
  |                   |  (water, ethanol, HCOOH)  |  (acetone, DMSO, DMF) |
  |                   |  because it stabilises    |  because it leaves    |
  |                   |  the carbocation and the  |  the nucleophile      |
  |                   |  leaving ion by solvation |  "naked" and reactive |
  |  Leaving group    |  good (I- > Br- > Cl-)    |  good (same order)    |
  +-------------------+---------------------------+-----------------------+
```

> **TRAP:** In a **polar protic** solvent like water, the OH- ion gets wrapped in a
> cage of hydrogen bonds and becomes lazy — this kills SN2. In a **polar aprotic**
> solvent like acetone or DMSO, the cation is solvated but the anion is not, so the
> nucleophile is bare and furious — this speeds SN2 up enormously.

---

# TOPIC 11 — SN1 versus SN2: THE COMPARISON TABLE

Copy this table onto one sheet. It alone is worth several marks.

| # | POINT | SN1 | SN2 |
|---|---|---|---|
| 1 | Full name | unimolecular nucleophilic substitution | bimolecular nucleophilic substitution |
| 2 | Number of steps | TWO | ONE |
| 3 | Intermediate | CARBOCATION (a real, isolable-in-principle species) | none — only a transition state |
| 4 | Rate law | rate = k [RX] | rate = k [RX][Nu-] |
| 5 | Order of reaction | FIRST order | SECOND order |
| 6 | Molecularity | unimolecular | bimolecular |
| 7 | Slow step | breaking of C-X | attack + departure together |
| 8 | Effect of [Nu-] | NO effect on rate | rate is directly proportional |
| 9 | Substrate order | 3deg > 2deg > 1deg > CH3 | CH3 > 1deg > 2deg > 3deg |
| 10 | Why that order | carbocation stability | steric hindrance |
| 11 | Stereochemistry | RACEMISATION (both isomers) | INVERSION (Walden) |
| 12 | Optical activity of product | optically INACTIVE (racemic) | optically ACTIVE |
| 13 | Best solvent | polar PROTIC (H2O, EtOH) | polar APROTIC (acetone, DMSO) |
| 14 | Best nucleophile | weak, mild | strong, concentrated |
| 15 | Rearrangement | POSSIBLE (carbocation can shift) | never |
| 16 | Typical example | (CH3)3C-Br + H2O -> (CH3)3C-OH | CH3-Br + OH- -> CH3-OH |

```
     THE TWO-LINE SUMMARY YOU SHOULD BE ABLE TO SAY OUT LOUD:

     "SN2 is one step, back-side attack, needs an open carbon, gives
      inversion, and is fastest for methyl and primary halides."

     "SN1 is two steps through a flat carbocation, needs a stable
      carbocation, gives racemisation, and is fastest for tertiary,
      allylic and benzylic halides."
```

### WORKED EXAMPLE 9

**For the hydrolysis of (CH3)3C-Br the rate doubles when [RX] doubles but is unchanged
when [OH-] doubles. Which mechanism is it, and what is the stereochemical outcome?**

```
  The nucleophile does NOT appear in the rate law   ->  rate = k [RX]
                                                    ->  FIRST order
                                                    ->  SN1

  Supporting evidence: (CH3)3C-Br is a TERTIARY halide, which forms a
  stable 3deg carbocation. That fits SN1 perfectly.

  Stereochemical outcome: the flat carbocation is attacked from both faces
  equally  ->  RACEMISATION  ->  the product is a racemic mixture and is
  optically INACTIVE.
```

---

# TOPIC 12 — ELIMINATION REACTIONS AND SAYTZEFF'S RULE

## 12.1 Dehydrohalogenation (beta elimination)

Change the reagent from **aqueous** KOH to **alcoholic** KOH and the whole reaction
changes: OH- now acts as a **BASE**, not a nucleophile.

```
     CH3-CH2-Br   --alcoholic KOH, heat-->   CH2=CH2  +  KBr  +  H2O

                 H     H                              H     H
                 |     |                               \   /
        H --- C --- C --- Br    --KOH(alc)-->            C = C     + HBr
                 |     |                               /   \
                 H     H                              H     H

     The H comes off the BETA carbon (the one NEXT to the C-X carbon)
     and the X comes off the ALPHA carbon. That is why it is called
     BETA-ELIMINATION or 1,2-elimination.

               beta   alpha
                 |      |
              -- C ---- C --
                 |      |
                 H      X       <---- H and X leave together as HX
```

**THE ONE-LINE RULE YOU MUST NEVER FORGET:**

```
     +----------------------------------------------------------------+
     |    AQUEOUS  KOH   ->   SUBSTITUTION   ->   ALCOHOL   (R-OH)    |
     |    ALCOHOLIC KOH  ->   ELIMINATION    ->   ALKENE              |
     +----------------------------------------------------------------+
```

## 12.2 SAYTZEFF'S RULE (also spelt Zaitsev / Saytzeff)

When there is more than one beta hydrogen to choose from, you get more than one alkene.
Saytzeff tells you which is the major one.

> **SAYTZEFF'S RULE:** In a dehydrohalogenation, the **major product is the more
> highly substituted alkene** — that is, the alkene formed by removing the beta
> hydrogen from the carbon that has the **FEWER hydrogen atoms**.
> Short version: **"the poor get poorer"** — the carbon with fewer H's loses one.

```
   EXAMPLE:  2-bromobutane + alcoholic KOH

           CH3 - CH2 - CH - CH3
                   ^     |    ^
                   |     Br   |
              beta H          beta H
              (from CH2)      (from CH3)

     Removing the H from the CH2 (C-3):  ->  CH3-CH=CH-CH3
                                             but-2-ene    DISUBSTITUTED
                                             *** MAJOR (about 80 %) ***

     Removing the H from the CH3 (C-1):  ->  CH3-CH2-CH=CH2
                                             but-1-ene    MONOsubstituted
                                             minor (about 20 %)
```

Why: a more substituted alkene is more stable, because the alkyl groups donate
electron density into the double bond (hyperconjugation).

```
     ALKENE STABILITY:
       R2C=CR2  >  R2C=CHR  >  R2C=CH2 , RCH=CHR  >  RCH=CH2  >  CH2=CH2
       (tetra)      (tri)          (di)               (mono)      (none)
```

## 12.3 Substitution versus elimination: which wins?

```
  +----------------------------+--------------------+---------------------+
  |  CONDITION                 |  SUBSTITUTION      |  ELIMINATION        |
  +----------------------------+--------------------+---------------------+
  |  Substrate                 |  1deg favours it   |  3deg favours it    |
  |  Reagent                   |  strong NUCLEOPHILE|  strong BASE        |
  |                            |  weak base (CN-,   |  bulky base         |
  |                            |  I-, RS-)          |  (alkoxide, (CH3)3CO|
  |  Solvent                   |  aqueous           |  alcoholic          |
  |  Temperature               |  LOW               |  HIGH               |
  +----------------------------+--------------------+---------------------+

     RULE OF THUMB TO MEMORISE:
        1deg halide + strong nucleophile     ->  mostly SUBSTITUTION (SN2)
        3deg halide + strong base + heat     ->  mostly ELIMINATION
        3deg halide + weak nucleophile/water ->  mostly SUBSTITUTION (SN1)
```

### WORKED EXAMPLE 10

**What is the major product when 2-bromo-2-methylbutane is heated with alcoholic KOH?**

```
              CH3
               |
     CH3 - C - CH2 - CH3
               |
              Br

     Two kinds of beta hydrogen:
       (i)  from the CH3 groups   ->  CH2=C(CH3)-CH2-CH3   (2-methylbut-1-ene)
                                      DI-substituted alkene
       (ii) from the CH2 group    ->  CH3-C(CH3)=CH-CH3    (2-methylbut-2-ene)
                                      TRI-substituted alkene

     Saytzeff: the MORE substituted alkene is the major product.

     MAJOR PRODUCT:  2-methylbut-2-ene    CH3-C(CH3)=CH-CH3
```

> **TRAP:** If the question says "alcoholic KOH" and you write an alcohol, you lose
> the whole mark. Circle the word "alcoholic" or "aqueous" the moment you read it.

---

# TOPIC 13 — REACTION WITH METALS

## 13.1 THE GRIGNARD REAGENT — preparation

```
     R-X   +   Mg   --dry ether-->   R-Mg-X

     CH3-Br + Mg --dry ether--> CH3-Mg-Br     methylmagnesium bromide
     C6H5-Br + Mg --dry ether--> C6H5-Mg-Br   phenylmagnesium bromide
```

These are called **alkylmagnesium halides** or **Grignard reagents**.

## 13.2 Structure — and why it is so reactive

```
                 delta-      delta+
                   C  ------  Mg  ---  X

     Carbon is MORE electronegative than magnesium, so for once the CARBON
     carries the NEGATIVE charge. The C-Mg bond is highly POLAR, almost ionic.

     ==>  The carbon behaves like a CARBANION,  R(-)
     ==>  It is a very powerful NUCLEOPHILE and a very strong BASE.
```

## 13.3 Why dry ether is essential

Because a Grignard reagent destroys itself on contact with **any** active hydrogen:

```
     CH3-Mg-Br  +  H2O    ->   CH4  +  Mg(OH)Br
     CH3-Mg-Br  +  R-OH   ->   CH4  +  Mg(OR)Br
     CH3-Mg-Br  +  NH3    ->   CH4  +  Mg(NH2)Br
     CH3-Mg-Br  +  HX     ->   CH4  +  MgX2
```

> Write this sentence: **"Even a trace of moisture converts the Grignard reagent into
> an alkane, so it can never be stored and must be used immediately in dry ether."**

## 13.4 The reactions of a Grignard reagent — the money table

Every one of these is a two-stage recipe: **(i) RMgX, then (ii) H3O+**.

```
  +------------------+------------------------------+-----------------------+
  |  REACTS WITH     |  PRODUCT AFTER HYDROLYSIS    |  CLASS                |
  +------------------+------------------------------+-----------------------+
  |  H2O             |  R-H                         |  ALKANE               |
  |  HCHO            |  R-CH2-OH                    |  1deg ALCOHOL         |
  |  R'-CHO          |  R'-CH(OH)-R                 |  2deg ALCOHOL         |
  |  R'-CO-R''       |  R'R''C(OH)-R                |  3deg ALCOHOL         |
  |  ester R'COOR''  |  3deg alcohol (2 mol RMgX)   |  3deg ALCOHOL         |
  |  CO2             |  R-COOH                      |  CARBOXYLIC ACID      |
  |  O2 then H+      |  R-OH                        |  alcohol              |
  +------------------+------------------------------+-----------------------+

        THE THREE-LINE RULE:
             FORMALDEHYDE  ->  primary alcohol
             ANY OTHER ALDEHYDE ->  secondary alcohol
             KETONE        ->  tertiary alcohol
             CO2           ->  carboxylic acid (one carbon MORE than R)
```

Draw the addition once so you understand where the OH comes from:

```
              delta-  delta+          delta+  delta-
                R --- MgX              C  ===  O

         The carbanion R(-) attacks the delta+ CARBONYL CARBON:

                     O(-)MgX(+)                     OH
                     |                              |
         R(-)  ->    C          --H3O(+)-->         C
                    / \                            / \
                   H   H                          R   H

           the alkoxide salt                 the alcohol
```

### WORKED EXAMPLE 11

**How would you prepare (a) propan-1-ol (b) propan-2-ol (c) 2-methylpropan-2-ol
(d) propanoic acid, using a Grignard reagent?**

```
  (a) propan-1-ol  CH3-CH2-CH2-OH   ->  PRIMARY  ->  use HCHO
      CH3-CH2-MgBr + HCHO --> then H3O+ --> CH3-CH2-CH2-OH

  (b) propan-2-ol  CH3-CH(OH)-CH3   ->  SECONDARY ->  use an aldehyde
      CH3-MgBr + CH3-CHO --> then H3O+ --> CH3-CH(OH)-CH3

  (c) 2-methylpropan-2-ol (CH3)3C-OH ->  TERTIARY ->  use a ketone
      CH3-MgBr + CH3-CO-CH3 --> then H3O+ --> (CH3)3C-OH

  (d) propanoic acid CH3-CH2-COOH   ->  ACID     ->  use CO2
      CH3-CH2-MgBr + CO2 --> then H3O+ --> CH3-CH2-COOH
      Note the acid has ONE MORE carbon than the Grignard reagent.
```

## 13.5 THE WURTZ REACTION

```
     2 R-X   +   2 Na   --dry ether-->   R-R   +   2 NaX

     2 CH3-CH2-Br + 2 Na --dry ether--> CH3-CH2-CH2-CH3 + 2 NaBr
                                        n-butane
```

Use it to **double** a carbon chain — it always gives an alkane with an **EVEN** number
of carbons when both halides are the same.

> **TRAP:** Wurtz with TWO DIFFERENT halides (R-X and R'-X) gives a **mixture of three
> products** (R-R, R'-R', R-R') that is nearly impossible to separate. So Wurtz is only
> useful for making SYMMETRICAL alkanes. State this if asked for its limitation.
> Two more limitations worth a mark: from a single alkyl halide the product always has
> an **EVEN** number of carbons, so **methane cannot be made this way**; and it fails
> badly with **tertiary** halides, which undergo elimination instead.

---

# TOPIC 14 — OPTICAL ISOMERISM

## 14.1 Chirality — the left-hand / right-hand idea

Hold up your two hands. They look identical, but you cannot put your left glove on your
right hand. They are **mirror images that cannot be superimposed**. That property is
called **CHIRALITY** (from the Greek *cheir*, hand).

```
     ACHIRAL  object -> can be superimposed on its mirror image
                        (a ball, a plain cup, CH3-CH2-Cl)

     CHIRAL   object -> CANNOT be superimposed on its mirror image
                        (your hand, a screw, CH3-CHCl-C2H5)
```

## 14.2 The asymmetric (chiral) carbon

```
     +----------------------------------------------------------------+
     |  A CHIRAL (ASYMMETRIC) CARBON is an sp3 carbon attached to      |
     |  FOUR DIFFERENT groups. It is marked with a star  C*            |
     +----------------------------------------------------------------+

                          Br
                          |
                 CH3 --- C* --- H            2-bromobutane
                          |
                        C2H5

          The starred carbon carries:  Br , H , CH3 , C2H5
          Four different groups  ->  it IS chiral  ->  optically active.


          BUT:            Br
                          |
                 CH3 --- C --- H             2-bromopropane
                          |
                         CH3

          Two identical CH3 groups -> NOT chiral -> optically INACTIVE.
```

## 14.3 Enantiomers

The two non-superimposable mirror images are called **ENANTIOMERS**.

```
                   MIRROR
                     |
          Br         |         Br
          |          |          |
   H3C -- C -- H     |    H --- C -- CH3
          |          |          |
        C2H5         |        C2H5

       (+) form      |      (-) form
                     |
   These two are ENANTIOMERS. They have IDENTICAL melting point,
   boiling point, density and solubility. They differ in exactly TWO things:

      1. the direction in which they rotate plane polarised light
      2. their reaction with other chiral molecules (enzymes, drugs)
```

## 14.4 Plane polarised light, and d / l rotation

```
   Ordinary light vibrates in ALL planes:

           \ | /                     A NICOL PRISM or polaroid filter
          -- * --        --->        lets only ONE plane through
           / | \

   PLANE POLARISED LIGHT vibrates in only ONE plane:

              |
              |          --->  passed through the sample in a POLARIMETER
              |

   If the sample rotates the plane, the substance is OPTICALLY ACTIVE.

   +---------------------------------------------------------------------+
   |  Rotates the plane to the RIGHT (clockwise)                          |
   |     = DEXTROROTATORY  = d-  = (+)                                    |
   |                                                                      |
   |  Rotates the plane to the LEFT (anticlockwise)                       |
   |     = LAEVOROTATORY   = l-  = (-)                                    |
   +---------------------------------------------------------------------+
```

The size of the rotation is measured as **specific rotation**:

```
                            observed rotation (degrees)
     specific rotation = --------------------------------
                          path length (dm) x conc (g/mL)
```

## 14.5 Racemic mixture and racemisation

```
   RACEMIC MIXTURE  =  an EQUAL (50 : 50) mixture of the (+) and (-) forms.

        The (+) form rotates light, say, +30 degrees.
        The (-) form rotates it -30 degrees.
        Together:  +30 - 30  =  0

   ==> A racemic mixture is OPTICALLY INACTIVE, and its inactivity is said
       to be "due to EXTERNAL COMPENSATION".

   It is written as  (+-)  or  dl-  or  (RS)-
       example:  (+-)-butan-2-ol,  dl-lactic acid

   RACEMISATION  =  the process by which a single pure enantiomer is
                    converted into a racemic mixture.
                    ==> This is exactly what an SN1 reaction does.
```

## 14.6 Retention and inversion of configuration

```
   RETENTION of configuration
      The spatial arrangement of the four groups around the chiral carbon
      is KEPT the same in the product as in the reactant.

   INVERSION of configuration (WALDEN INVERSION)
      The arrangement is TURNED INSIDE OUT, like an umbrella in a storm.
      ==> This is exactly what an SN2 reaction does.

   +----------------------------------------------------------------------+
   |   SN2  ->  100 % INVERSION   ->  product is optically ACTIVE          |
   |   SN1  ->  RACEMISATION      ->  product is optically INACTIVE        |
   |            (about 50 % inversion + 50 % retention)                    |
   +----------------------------------------------------------------------+
```

### WORKED EXAMPLE 12

**Which of these are optically active? (a) CH3-CH2-CH2-Cl (b) CH3-CHCl-CH2-CH3
(c) CH3-CHCl-CH3 (d) C6H5-CHCl-CH3**

```
  Method: hunt for a carbon with FOUR DIFFERENT groups.

  (a) CH3-CH2-CH2-Cl
      The C-Cl carbon has: Cl, H, H, CH2CH3  -> two H's -> NOT chiral.
      OPTICALLY INACTIVE.

  (b) CH3-CHCl-CH2-CH3   (2-chlorobutane)
      The C-Cl carbon has: Cl, H, CH3, C2H5 -> all four different.
      *** OPTICALLY ACTIVE ***

  (c) CH3-CHCl-CH3       (2-chloropropane)
      The C-Cl carbon has: Cl, H, CH3, CH3  -> two CH3 -> NOT chiral.
      OPTICALLY INACTIVE.

  (d) C6H5-CHCl-CH3      (1-chloro-1-phenylethane)
      The C-Cl carbon has: Cl, H, C6H5, CH3 -> all four different.
      *** OPTICALLY ACTIVE ***
```

> **TRAP:** Do NOT count how many carbons the molecule has. Count the four groups on
> ONE carbon. If any two of them are identical, that carbon is not chiral.

---

# TOPIC 15 — WHY HALOARENES ARE SO UNREACTIVE

This is the guaranteed 4-mark question. Learn all five reasons; write at least three
with a diagram.

## 15.1 REASON 1 — RESONANCE

The lone pair on the chlorine is delocalised into the benzene ring:

```
        Cl(..)              Cl(+)              Cl(+)             Cl(+)
         |                   ||                 ||                ||
        / \                 / \                / \               / \
       |   |    <-->       |   |(-)   <-->    (-)  |    <-->     |   |
        \ /                 \ /                \ /               \ /
                                                                 (-)

        I                    II                III                IV

   In structures II, III and IV the C-Cl bond is a DOUBLE bond.
   So the real molecule is a hybrid in which the C-Cl bond has
   PARTIAL DOUBLE BOND CHARACTER.
```

## 15.2 REASON 2 — SHORTER, STRONGER BOND

```
     C-Cl bond length in CH3-Cl      =  178 pm      (pure single bond)
     C-Cl bond length in C6H5-Cl     =  169 pm      (partial double bond)

     Shorter bond  =  STRONGER bond  =  HARDER TO BREAK.
     So the Cl refuses to leave, and nucleophilic substitution stalls.
```

## 15.3 REASON 3 — sp2 HYBRIDISATION OF CARBON

```
     In R-Cl the carbon is sp3   ->  25 % s character
     In Ar-Cl the carbon is sp2  ->  33 % s character

     More s character  =  the electrons are held CLOSER to the nucleus
                       =  the carbon is MORE ELECTRONEGATIVE
                       =  it holds on to the Cl more tightly
                       =  shorter, stronger C-Cl bond
```

## 15.4 REASON 4 — INSTABILITY OF THE PHENYL CATION

```
     For an SN1 route, C6H5-Cl would have to ionise to a PHENYL CATION:

            C6H5-Cl   ->   C6H5(+)   +   Cl(-)      DOES NOT HAPPEN

     The phenyl cation cannot be stabilised by resonance with the ring,
     because the empty orbital lies in the PLANE of the ring, at right
     angles to the pi cloud. There is no overlap. So the cation is
     extremely unstable and never forms.
```

## 15.5 REASON 5 — REPULSION BY THE ELECTRON-RICH RING

```
     The benzene ring is a fat cloud of pi electrons.
     The incoming nucleophile is also electron rich (negative).

              Nu(-)  ---->   [ pi cloud, delta- ]

     Like charges repel. The nucleophile is pushed away before it can
     ever reach the carbon. (Sometimes written as "steric and electronic
     repulsion by the electron-rich ring".)
```

## 15.6 What conditions DO force the substitution through

```
     C6H5-Cl  --(i) NaOH, 623 K, 300 atm  (ii) dil. HCl-->  C6H5-OH

     That is 350 degrees Celsius and 300 atmospheres. This is the DOW
     process for making phenol. Compare it with CH3-CH2-Cl, which reacts
     with dilute NaOH at ordinary temperature. That is the whole story.
```

## 15.7 The dramatic effect of ELECTRON-WITHDRAWING GROUPS at ORTHO and PARA

Put an -NO2 group at the ortho or para position and the halogen suddenly becomes easy
to replace.

```
   +--------------------------------+-------------------------------------+
   |  COMPOUND                      |  CONDITIONS NEEDED FOR HYDROLYSIS   |
   +--------------------------------+-------------------------------------+
   |  chlorobenzene                 |  NaOH, 623 K, 300 atm               |
   |  o- or p-nitrochlorobenzene    |  NaOH, 443 K                        |
   |  2,4-dinitrochlorobenzene      |  NaOH (aq), 368 K  (warm water bath)|
   |  2,4,6-trinitrochlorobenzene   |  just WARM WATER                    |
   |  (picryl chloride)             |                                     |
   +--------------------------------+-------------------------------------+
```

**Why does -NO2 help?** Because the nucleophile's attack creates a negative charge on
the ring, and the -NO2 group can absorb that charge by resonance — but **only** from
the ortho and para positions.

```
   Attack of OH- on p-nitrochlorobenzene:

             Cl                    OH   Cl
             |                       \ /
            / \                      / \
           |   |      + OH(-)  -->  |   |(-)      <-- the negative charge
            \ /                      \ /              wanders around the ring
             |                        |
            NO2                      NO2

   The (-) charge can travel to the carbon bearing the -NO2 group, and from
   there onto the OXYGEN atoms of the nitro group:

              O(-)                    O(-)
              |                       |
          (-)-N(+)=O    <-->      O = N(+)-O(-)

   Oxygen is happy to hold a negative charge. So the intermediate is
   STABILISED, the reaction becomes easy, and the Cl finally leaves.

   *** From the META position, the negative charge can NEVER reach the
       carbon bearing the -NO2 group. So a META nitro group gives NO
       activation at all. ***
```

> **TRAP:** The examiner will ask "why does m-nitrochlorobenzene not react easily?"
> The answer is not "because nitro is meta directing". It is because the negative
> charge of the intermediate cannot be delocalised onto the meta -NO2 group.

## 15.8 ELECTROPHILIC substitution in haloarenes — the famous paradox

```
     THE PUZZLE:  Halogens are DEACTIVATING (they slow the ring down)
                  yet they are ORTHO-PARA DIRECTING.
                  Every other deactivating group is meta directing.
                  How can both be true?

     THE ANSWER:  The halogen does TWO opposite things at the same time.

     (1) -I EFFECT (inductive withdrawal): halogen is very electronegative,
         so it PULLS electron density OUT of the ring through the sigma bond.
         ==> the whole ring is electron poor  ==> DEACTIVATED, slower than
             benzene.

     (2) +R EFFECT (resonance donation): the halogen's lone pair is pushed
         INTO the ring, but it lands specifically at the ORTHO and PARA
         carbons (look at the resonance structures in 15.1 - the negative
         charge appears at ortho and para, never at meta).
         ==> ortho and para carbons are RICHER than meta.

     RESULT:  -I wins on OVERALL rate      ->  DEACTIVATING
              +R wins on WHERE it attacks  ->  ORTHO-PARA DIRECTING

     "Slower than benzene, but when it does happen, it happens at
      ortho and para."
```

The reactions themselves:

```
     HALOGENATION   C6H5-Cl + Cl2 --anhyd. FeCl3--> o- and p-dichlorobenzene

     NITRATION      C6H5-Cl + conc.HNO3/conc.H2SO4 --> o- and p-nitro-
                                                       chlorobenzene

     SULPHONATION   C6H5-Cl + conc. H2SO4 --> o- and p-chlorobenzene-
                                              sulphonic acid

     FRIEDEL-CRAFTS ALKYLATION
                    C6H5-Cl + CH3Cl --anhyd. AlCl3--> o- and p-chlorotoluene

     FRIEDEL-CRAFTS ACYLATION
                    C6H5-Cl + CH3COCl --anhyd. AlCl3--> o- and p-chloro-
                                                        acetophenone
                    (the PARA product dominates here because of the size
                     of the acyl group)
```

## 15.9 WURTZ-FITTIG and FITTIG reactions

```
   WURTZ            2 R-X  + 2 Na  --dry ether-->  R-R
                    (alkane; both halides are ALKYL)

   WURTZ-FITTIG     Ar-X + R-X + 2 Na --dry ether--> Ar-R
                    (alkyl arene; ONE aryl + ONE alkyl halide)

        C6H5-Br + CH3-Br + 2 Na --dry ether--> C6H5-CH3 + 2 NaBr
                                               toluene

   FITTIG           2 Ar-X + 2 Na --dry ether--> Ar-Ar
                    (biaryl; BOTH halides are ARYL)

        2 C6H5-Br + 2 Na --dry ether--> C6H5-C6H5 + 2 NaBr
                                        biphenyl (diphenyl)

   +----------------------------------------------------------------+
   |  MEMORY HOOK                                                    |
   |     WURTZ         = alkyl + alkyl   -> alkane                   |
   |     WURTZ-FITTIG  = alkyl + aryl    -> alkylbenzene (mixed)     |
   |     FITTIG        = aryl  + aryl    -> biphenyl                 |
   |  "Fittig" has the aryl in it. One Fittig = one aryl each side.  |
   +----------------------------------------------------------------+
```

## 15.10 Reduction of haloarenes

```
     C6H5-Cl  +  H2   --Ni-Al alloy / NaOH-->   C6H6  +  HCl
     C6H5-Cl  --Zn / HCl-->  C6H6
```

---

# TOPIC 16 — POLYHALOGEN COMPOUNDS

## 16.1 DICHLOROMETHANE, CH2Cl2 (methylene chloride)

```
   PREPARATION   CH3Cl + Cl2 --hv--> CH2Cl2 + HCl
                 (chlorination of methane, then separated by distillation)

   USES          - solvent, PAINT REMOVER
                 - PROPELLANT in aerosols
                 - METAL DEGREASING and cleaning
                 - process solvent in the drug industry

   HAZARDS       - harms the CENTRAL NERVOUS SYSTEM
                 - causes dizziness, nausea, tingling, numbness
                 - burns the skin and severely damages the cornea of the eye
                 - high levels in air can cause loss of consciousness
```

## 16.2 CHLOROFORM, CHCl3 (trichloromethane) — the big 8-mark topic

### Preparation in the laboratory

```
   FROM ETHANOL (or acetone) WITH BLEACHING POWDER:

     Bleaching powder in water supplies Cl2 and Ca(OH)2.

     Step 1  OXIDATION of ethanol to acetaldehyde:
             CH3-CH2-OH  +  Cl2   ->   CH3-CHO  +  2 HCl

     Step 2  CHLORINATION of the acetaldehyde:
             CH3-CHO  +  3 Cl2   ->   CCl3-CHO  +  3 HCl
                                       chloral (trichloroacetaldehyde)

     Step 3  HYDROLYSIS by the calcium hydroxide:
             2 CCl3-CHO  +  Ca(OH)2  ->  2 CHCl3  +  (HCOO)2Ca
                                                     calcium formate

   IN THE EXAM: write the THREE STEPS above, not one combined equation.
   Full marks are given for oxidation -> chlorination -> hydrolysis, with
   CHLORAL named as the intermediate.

   FROM ACETONE (needs only 2 steps - chlorination then hydrolysis):
     CH3-CO-CH3 + 3 Cl2 -> CCl3-CO-CH3 + 3 HCl
     2 CCl3-CO-CH3 + Ca(OH)2 -> 2 CHCl3 + (CH3COO)2Ca
```

### Industrial preparation

```
     CH4  +  3 Cl2   --hv-->   CHCl3  +  3 HCl
     (then fractional distillation to separate CH3Cl, CH2Cl2, CHCl3, CCl4)
```

### Properties

```
   - colourless, sweet-smelling HEAVY liquid, b.p. 334 K
   - almost insoluble in water, miscible with alcohol and ether
   - non-inflammable
   - reduction:  CHCl3 + 6[H] --Zn/H2O-->  CH4 + 3 HCl
   - with conc. HNO3:  CHCl3 + HNO3 -> CCl3-NO2 (CHLOROPICRIN, a war gas
                       and now an insecticide) + H2O
   - with silver powder: 2 CHCl3 + 6 Ag -> C2H2 + 6 AgCl (acetylene)
   - with aq. NaOH:  CHCl3 + 4 NaOH -> HCOONa + 3 NaCl + 2 H2O
   - CARBYLAMINE REACTION (test for a primary amine):
         R-NH2 + CHCl3 + 3 KOH(alc) -> R-NC + 3 KCl + 3 H2O
         (a foul, unbearable smell = primary amine present)
```

### THE OXIDATION TO PHOSGENE — and the dark-bottle question

```
     2 CHCl3   +   O2   --sunlight / air-->   2 COCl2   +   2 HCl
     chloroform                               PHOSGENE
                                              carbonyl chloride
                                              a DEADLY POISONOUS GAS

     Structure of phosgene:          Cl
                                       \
                                        C = O
                                       /
                                     Cl
```

**Now the classic 2-mark question, answered fully:**

> **Why is chloroform stored in dark coloured bottles filled to the brim?**
>
> Chloroform is slowly oxidised by atmospheric oxygen **in the presence of sunlight**
> to the extremely poisonous gas **phosgene (COCl2)**.
> - The bottle is **dark brown/coloured** so that **sunlight cannot enter** and start
>   the oxidation.
> - The bottle is **filled to the brim** so that **no air (no oxygen) is left inside**.
> - In addition, about **1 % ethanol** is added: it converts any phosgene that does
>   form into harmless **diethyl carbonate**, and it also acts as a warning indicator.

### Uses of chloroform

```
   - solvent for fats, waxes, resins, rubber, iodine
   - in the manufacture of the refrigerant FREON-12 (R-12)
   - formerly used as an ANAESTHETIC in surgery - now ABANDONED because
     it damages the LIVER and the heart, and the phosgene risk
   - a preservative for anatomical specimens
```

## 16.3 IODOFORM, CHI3 (triiodomethane)

```
   PREPARATION (the IODOFORM TEST):
     Warm ethanol (or acetone, or any methyl ketone, or ethanal, or a
     CH3-CH(OH)- compound) with I2 and NaOH (or Na2CO3):

       C2H5-OH + 4 I2 + 6 NaOH -> CHI3 + HCOONa + 5 NaI + 5 H2O

   IDENTIFICATION: a YELLOW crystalline precipitate with a characteristic
                   unpleasant (hospital) smell.

   POSITIVE for:  ethanol, ethanal, propanone (acetone), all methyl
                  ketones CH3-CO-R, and alcohols of the type CH3-CH(OH)-R
                  i.e. anything with a CH3-CO- group or one that can be
                  oxidised into a CH3-CO- group
   NEGATIVE for:  methanol, propan-1-ol, propanal, benzaldehyde,
                  benzophenone

   USES:  formerly an ANTISEPTIC, because it slowly liberates free IODINE
          on the skin, and it is the iodine that kills the germs.
          Now replaced by better antiseptics because of its FOUL SMELL.
```

## 16.4 CARBON TETRACHLORIDE, CCl4 (tetrachloromethane)

```
   PREPARATION
     CH4 + 4 Cl2 --hv--> CCl4 + 4 HCl
     CS2 + 3 Cl2 --AlCl3--> CCl4 + S2Cl2      (from carbon disulphide)

   USES
     - solvent for oils, fats, resins, and in dry cleaning
     - a FIRE EXTINGUISHER under the trade name PYRENE. Its dense,
       non-inflammable vapour blankets the fire and cuts off the oxygen.
     - manufacture of refrigerants and propellants (freons)

   HAZARDS - THE REASON PYRENE IS NO LONGER USED
     At high temperature, in the presence of oxygen, CCl4 itself produces
     PHOSGENE:

         2 CCl4  +  O2   --heat-->   2 COCl2  +  2 Cl2

     So using it on a fire in a closed room can poison the people it was
     meant to save.

     Other effects: damages the LIVER (hepatic tumours), causes nausea,
     dizziness; it also depletes the OZONE layer, increasing UV radiation
     and hence skin cancer and eye damage.
```

## 16.5 FREONS (chlorofluorocarbons, CFCs)

```
   WHAT THEY ARE
     The chlorofluoro derivatives of methane and ethane.
     The most common is FREON-12  =  CCl2F2  (dichlorodifluoromethane).

   PREPARATION - by the SWARTS reaction:
     CCl4  +  2 SbF3   --SbCl5 catalyst-->   CCl2F2  +  2 SbCl3

   PROPERTIES  non-toxic, non-corrosive, easily liquefied, very stable

   USES
     - REFRIGERANT in refrigerators and air conditioners
     - propellant in aerosol sprays
     - blowing agent for plastic foams

   ENVIRONMENTAL EFFECT - the OZONE HOLE
     Freons are so stable that they survive to reach the STRATOSPHERE.
     There, UV light breaks off a chlorine radical:

         CCl2F2   --UV-->   .CClF2   +   Cl.

     and that chlorine radical destroys ozone in a CHAIN reaction:

         Cl.  +  O3   ->   ClO.  +  O2
         ClO. +  O    ->   Cl.   +  O2       <-- Cl. comes back!

     ONE chlorine radical can destroy about 100000 ozone molecules before
     it is finally removed. The thinner ozone layer lets more UV-B through,
     causing skin cancer, cataracts and damage to crops.
     ==> This is why CFCs were banned under the MONTREAL PROTOCOL (1987).
```

## 16.6 DDT — p,p'-dichlorodiphenyltrichloroethane

```
   FULL NAME     p, p' - dichlorodiphenyltrichloroethane
   FORMULA       (p-Cl-C6H4)2 CH-CCl3

   PREPARATION   chloral + chlorobenzene, with concentrated H2SO4:

     CCl3-CHO  +  2 C6H5Cl   --conc. H2SO4-->   (Cl-C6H4)2CH-CCl3  +  H2O

   HISTORY       Its insecticidal power was discovered by PAUL MULLER in
                 1939. He received the NOBEL PRIZE in Medicine in 1948.
                 It was used massively against MALARIA (mosquitoes) and
                 TYPHUS (lice) and saved millions of lives.

   WHY IT WAS BANNED (in the USA in 1973, and restricted almost everywhere)
     1. Insects developed RESISTANCE to it, so it stopped working.
     2. It is extremely stable and does NOT break down in the environment
        (it is NON-BIODEGRADABLE).
     3. It is FAT SOLUBLE, so it accumulates in the fatty tissue of animals
        and moves up the food chain (BIOMAGNIFICATION).
     4. It is highly TOXIC TO FISH and to birds (it thins eggshells).
     5. It is a suspected carcinogen and endocrine disruptor in humans.

   It is still permitted in limited amounts for malaria control indoors in
   some countries, because nothing else is as cheap and effective.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Every reaction I wrote is BALANCED, and the conditions are written
       ON the arrow (heat, dry ether, hv, anhyd. AlCl3, 623 K / 300 atm).

  [ ]  I checked whether the question said AQUEOUS KOH (-> alcohol) or
       ALCOHOLIC KOH (-> alkene). This one word decides the whole answer.

  [ ]  For every KCN / AgCN and KNO2 / AgNO2 question I checked whether
       the metal is SILVER (-> attack by N) or potassium (-> C or O).

  [ ]  In the SN2 mechanism I drew the nucleophile attacking from the BACK
       and labelled the TRANSITION STATE (not "intermediate").

  [ ]  In the SN1 mechanism I drew the carbocation FLAT (sp2) and showed
       attack from BOTH faces, then wrote the word RACEMISATION.

  [ ]  I wrote the two reactivity orders the RIGHT WAY ROUND:
          SN1:  3deg > 2deg > 1deg > CH3
          SN2:  CH3 > 1deg > 2deg > 3deg

  [ ]  For "why haloarenes are less reactive" I gave at least THREE reasons
       AND drew the resonance structures.

  [ ]  For Markovnikov / peroxide effect I stated that the peroxide effect
       works with HBr ONLY.

  [ ]  Whenever a Grignard reagent appeared I wrote "dry ether" and remembered
       the second stage "(ii) H3O+".

  [ ]  In every optical isomerism answer I identified the chiral carbon with
       a STAR and said "four different groups".

  [ ]  For chloroform storage I gave BOTH reasons (dark bottle = no light,
       filled to brim = no air) and named PHOSGENE.

  [ ]  I named the reactions where a name exists: FINKELSTEIN, SWARTS,
       SANDMEYER, GATTERMANN, WURTZ, WURTZ-FITTIG, FITTIG, SAYTZEFF,
       MARKOVNIKOV, WALDEN inversion, DARZEN'S process.
       Names carry marks. Free marks. Do not skip them.

  [ ]  I did not leave a single question blank. A half-remembered equation
       still earns something. A blank page earns zero.
```
