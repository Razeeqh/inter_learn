# Haloalkanes and Haloarenes — Reactions and Name-Reactions Sheet

In physics you learn formulae. In organic chemistry you learn **REACTIONS**.
This is that sheet.

Copy it by hand into a notebook. Writing it once beats reading it ten times.

---

# 0. HOW TO READ THIS SHEET

```
   Every reaction is written in the same shape:

        STARTING COMPOUND   --REAGENT , CONDITION-->   PRODUCT

   The examiner gives you TWO of the three and asks for the third.
   So you must be able to read every line in ALL THREE directions:

        compound + reagent   ->  what is the PRODUCT?
        compound + product   ->  what is the REAGENT?
        reagent  + product   ->  what did we START FROM?
```

---

# 1. THE MASTER MAP OF THE CHAPTER

Everything in one picture. Pin this to your wall.

```
                                 ALKANE  R-H
                                     |  X2 / UV light
                                     v
     ALCOHOL  R-OH  --HX / PCl5 / PCl3 / SOCl2-->
                                     |
     ALKENE  C=C  --HX (Markovnikov)-->  R-X  <--NaI/acetone-- R-Cl (Finkelstein)
                                     |    <--AgF------------- R-Br (Swarts)
                                     |
        +--------+--------+----------+----------+---------+---------+
        |        |        |          |          |         |         |
     aq.KOH   NaOR'     KCN        AgCN       NH3      Mg/ether  Na/ether
        |        |        |          |          |         |         |
        v        v        v          v          v         v         v
      R-OH    R-O-R'    R-CN       R-NC       R-NH2    R-MgX      R-R
    ALCOHOL   ETHER    NITRILE  ISOCYANIDE   AMINE    GRIGNARD   WURTZ
                          |                              |
                    hydrolysis                    +------+------+------+
                          v                       |      |      |      |
                       R-COOH                   H2O    HCHO   RCHO    CO2
                                                  |      |      |      |
                                                 R-H   1deg   2deg   R-COOH
                                                       alcohol alcohol  ACID

     AND THE OTHER BRANCH:

        R-X  --ALCOHOLIC KOH, heat-->  ALKENE   (Saytzeff's rule)
        R-X  --AgNO2-->  R-NO2         R-X --KNO2--> R-O-N=O
        R-X  --R'COOAg-->  ESTER       R-X --LiAlH4--> ALKANE
```

Aryl halide branch:

```
     BENZENE  --X2 / anhyd. FeX3-->  Ar-X
     ANILINE  --NaNO2/HCl, 273-278K--> DIAZONIUM --CuX/HX (SANDMEYER)--> Ar-X
                                                 --Cu/HX (GATTERMANN)--> Ar-X
                                                 --KI, warm-----------> Ar-I

     Ar-X  --NaOH, 623 K, 300 atm--> Ar-OH   (very hard! Dow process)
     Ar-X  --R-X + Na / dry ether--> Ar-R    (WURTZ-FITTIG)
     Ar-X  --Na / dry ether-------->  Ar-Ar  (FITTIG)
     Ar-X  --E+ / catalyst--------> ORTHO and PARA products
```

---

# 2. PREPARATION OF HALOALKANES

## 2.1 From ALCOHOLS

| STARTING MATERIAL | REAGENT / CONDITION | PRODUCT | NOTE / NAME |
|---|---|---|---|
| R-OH | conc. HCl + anhyd. ZnCl2 | R-Cl + H2O | **LUCAS REAGENT** |
| R-OH | conc. HBr (or NaBr + H2SO4) | R-Br + H2O | |
| R-OH | HI (or KI + H3PO4) | R-I + H2O | HI is most reactive |
| R-OH | PCl5 | R-Cl + POCl3 + HCl | POCl3 is a liquid |
| 3 R-OH | PCl3 | 3 R-Cl + H3PO3 | H3PO3 is a liquid |
| R-OH | SOCl2 / pyridine | R-Cl + SO2 + HCl | **DARZEN'S process** — PREFERRED |
| R-OH | P + Br2 (makes PBr3) | R-Br + H3PO3 | |
| R-OH | red P + I2 (makes PI3) | R-I + H3PO3 | |

```
   +----------------------------------------------------------------------+
   |  WHY SOCl2 IS PREFERRED — write this sentence:                        |
   |                                                                       |
   |  "Both by-products, SO2 and HCl, are GASES and escape from the        |
   |   reaction mixture, so the alkyl halide is obtained in a PURE state   |
   |   with no separation step needed."                                    |
   +----------------------------------------------------------------------+

   REACTIVITY ORDER OF THE ACID:     HI  >  HBr  >  HCl  >  HF
   REACTIVITY ORDER OF THE ALCOHOL:  3deg  >  2deg  >  1deg  >  CH3-OH

   LUCAS TEST (turbidity times):
      3deg -> IMMEDIATE    2deg -> about 5 min    1deg -> none at room temp
```

## 2.2 From HYDROCARBONS

| STARTING MATERIAL | REAGENT / CONDITION | PRODUCT | NOTE |
|---|---|---|---|
| CH4 | Cl2 / UV light (hv) | CH3Cl, CH2Cl2, CHCl3, CCl4 | free radical, gives a MIXTURE |
| CH3-CH=CH2 | HBr | CH3-CHBr-CH3 | **MARKOVNIKOV** |
| CH3-CH=CH2 | HBr / benzoyl peroxide | CH3-CH2-CH2-Br | **PEROXIDE (KHARASCH) EFFECT** |
| CH2=CH2 | Br2 / CCl4 | CH2Br-CH2Br | vicinal dihalide, red colour lost |
| CH3-CH=CH2 | Cl2, 773 K | CH2Cl-CH=CH2 | allylic substitution, NOT addition |
| toluene C6H5CH3 | Cl2 / hv (sunlight, no catalyst) | C6H5-CH2Cl | SIDE CHAIN halogenation |
| toluene C6H5CH3 | Cl2 / anhyd. FeCl3, dark | o- and p-chlorotoluene | RING halogenation |

```
   THE THREE RULES OF THE ALKENE + HX REACTION

   1. MARKOVNIKOV'S RULE
      "The negative part of the reagent goes to the carbon carrying the
       SMALLER number of hydrogen atoms."
      Reason: it goes through the MORE STABLE carbocation.
             3deg(+) > 2deg(+) > 1deg(+) > CH3(+)

   2. PEROXIDE EFFECT (anti-Markovnikov)
      Add benzoyl peroxide and the halogen goes to the carbon with MORE
      hydrogens. Reason: mechanism switches to FREE RADICAL, and it goes
      through the MORE STABLE FREE RADICAL. 3deg. > 2deg. > 1deg. > CH3.

   3. *** THE PEROXIDE EFFECT WORKS WITH HBr ONLY ***
      Not HCl - the H-Cl bond is too STRONG to be broken by the radical.
      Not HI  - the H-I bond is weak, but the iodine radicals just
                recombine to I2 instead of adding to the double bond.
      This one line is asked almost every year.

   HALOGEN vs SIDE CHAIN, the rule for toluene:
      SUNLIGHT / hv  , no catalyst   ->  SIDE CHAIN  (free radical)
      DARK + Lewis acid catalyst     ->  RING        (electrophilic)
      "Light hits the side, dark hits the ring."
```

## 2.3 HALOGEN EXCHANGE — two named reactions

```
  +--------------------------------------------------------------------+
  |  FINKELSTEIN REACTION            makes IODIDES                     |
  |                                                                    |
  |     R-Cl (or R-Br) + NaI  --DRY ACETONE-->  R-I  +  NaCl           |
  |                                                                    |
  |     CH3-CH2-Cl + NaI --dry acetone--> CH3-CH2-I + NaCl             |
  |                                                                    |
  |  WHY IT WORKS: NaI DISSOLVES in dry acetone, NaCl and NaBr DO NOT. |
  |  The NaCl precipitates out and drives the equilibrium forwards      |
  |  (Le Chatelier). ALWAYS write "dry acetone" - it carries a mark.    |
  +--------------------------------------------------------------------+

  +--------------------------------------------------------------------+
  |  SWARTS REACTION                 makes FLUORIDES                   |
  |                                                                    |
  |     R-Br  +  AgF   -->   R-F  +  AgBr                              |
  |     CH3-Br + AgF --> CH3-F + AgBr                                  |
  |                                                                    |
  |  Other reagents that do the same job: Hg2F2 , CoF2 , SbF3          |
  |  INDUSTRIAL USE: CCl4 + 2 SbF3 --SbCl5--> CCl2F2 (FREON-12) + 2SbCl3|
  +--------------------------------------------------------------------+

     MEMORY:  Finkelste-I-n  ->  Iodide.      Swarts + SbF3  ->  Fluoride.
```

## 2.4 Two more small routes

| STARTING MATERIAL | REAGENT | PRODUCT | NAME |
|---|---|---|---|
| R-COOAg | Br2 / CCl4 | R-Br + CO2 + AgBr | **HUNSDIECKER** reaction |
| R-COOH | Cl2 / red P | Cl-CH2-COOH (alpha) | **HELL-VOLHARD-ZELINSKY** |

---

# 3. PREPARATION OF HALOARENES

| STARTING MATERIAL | REAGENT / CONDITION | PRODUCT | NAME |
|---|---|---|---|
| C6H6 | Cl2 / anhyd. FeCl3, dark | C6H5-Cl | direct halogenation |
| C6H6 | Br2 / anhyd. FeBr3 | C6H5-Br | direct halogenation |
| C6H6 | I2 / HIO4 (or HNO3) | C6H5-I | oxidant destroys the HI |
| C6H5-NH2 | NaNO2 + HCl, 273-278 K | C6H5-N2+Cl- | diazotisation |
| C6H5-N2+Cl- | CuCl / HCl | C6H5-Cl + N2 | **SANDMEYER** |
| C6H5-N2+Cl- | CuBr / HBr | C6H5-Br + N2 | **SANDMEYER** |
| C6H5-N2+Cl- | CuCN / KCN | C6H5-CN + N2 | **SANDMEYER** |
| C6H5-N2+Cl- | Cu powder / HCl | C6H5-Cl + N2 | **GATTERMANN** |
| C6H5-N2+Cl- | Cu powder / HBr | C6H5-Br + N2 | **GATTERMANN** |
| C6H5-N2+Cl- | KI, warm (NO copper) | C6H5-I + N2 | |
| C6H5-N2+BF4- | heat | C6H5-F + N2 + BF3 | **BALZ-SCHIEMANN** |

```
   +-----------------------------------------------------------------+
   |  SANDMEYER   =  Cu(I) HALIDE  (CuCl, CuBr, CuCN) + HX           |
   |  GATTERMANN  =  Cu POWDER + HX                                  |
   |  Both give off N2 gas. Sandmeyer gives BETTER YIELDS.           |
   |  For IODIDE you need NO copper at all - just warm with KI.      |
   +-----------------------------------------------------------------+

   WHY DIRECT IODINATION NEEDS AN OXIDISING AGENT:
      C6H6 + I2  <-->  C6H5-I + HI     is REVERSIBLE.
      The HI formed reduces the product back to benzene. An oxidising
      agent (HNO3, HIO4) destroys the HI and pushes the reaction forward.
```

---

# 4. PHYSICAL PROPERTIES — the ORDERS to memorise

| PROPERTY | ORDER | REASON |
|---|---|---|
| Bond length | C-F < C-Cl < C-Br < C-I | halogen atom gets bigger |
| Bond enthalpy | C-F > C-Cl > C-Br > C-I | longer bond = weaker |
| Reactivity of R-X | R-I > R-Br > R-Cl > R-F | weakest bond breaks first |
| Dipole moment | CH3Cl > CH3F > CH3Br > CH3I | dipole = charge x distance |
| Boiling point (same R) | R-I > R-Br > R-Cl > R-F | bigger = more polarisable = stronger van der Waals |
| Boiling point (same X) | rises with chain length | more surface contact |
| Boiling point (isomers) | n- > iso- > sec- > tert- | branching = more spherical = less contact |
| Boiling point vs alkane | R-X > R-H | polar C-X adds dipole-dipole forces |
| Density (same R) | R-I > R-Br > R-Cl | heavy halogen in a small volume |
| m.p. of dihalobenzenes | **para >> ortho ~ meta** | para is symmetrical, packs tightly |
| Solubility in water | all VERY LOW | cannot form H-bonds with water |

```
   THE TWO NUMBERS WORTH QUOTING:

      C-Cl bond in CH3-Cl   =  178 pm     (pure single bond)
      C-Cl bond in C6H5-Cl  =  169 pm     (PARTIAL DOUBLE BOND character)

   THE ONE-LINE SOLUBILITY ANSWER:
      "To dissolve, the haloalkane must break the hydrogen bonds between
       water molecules, but it cannot form hydrogen bonds with water to
       pay that energy back. So it stays undissolved."
```

---

# 5. NUCLEOPHILIC SUBSTITUTION — THE COMPLETE PRODUCT TABLE

**This is the single most valuable table in the chapter.**

| REAGENT | PRODUCT FROM CH3-CH2-Br | NAME OF PRODUCT |
|---|---|---|
| **aqueous** KOH / NaOH | CH3-CH2-OH | ethanol (alcohol) |
| **alcoholic** KOH, heat | CH2=CH2 | ethene — **ELIMINATION!** |
| moist Ag2O | CH3-CH2-OH | alcohol |
| NaOCH3 (sodium alkoxide) | CH3-CH2-O-CH3 | ether — **WILLIAMSON** |
| C6H5-ONa | CH3-CH2-O-C6H5 | aryl alkyl ether |
| **KCN** (aq. ethanol) | CH3-CH2-**C**N | ethanenitrile (**nitrile**) |
| **AgCN** (ethanol) | CH3-CH2-**N**C | ethyl isocyanide (**isocyanide**) |
| **KNO2** | CH3-CH2-**O**-N=O | ethyl nitrite |
| **AgNO2** | CH3-CH2-**N**O2 | nitroethane |
| NH3 excess, sealed tube | CH3-CH2-NH2 | primary amine |
| CH3-NH2 | CH3-CH2-NH-CH3 | secondary amine |
| (CH3)2NH | CH3-CH2-N(CH3)2 | tertiary amine |
| CH3COO**Ag** | CH3-COO-CH2CH3 | ester |
| NaSH | CH3-CH2-SH | thiol (mercaptan) |
| NaS-R | CH3-CH2-S-R | thioether |
| NaI / dry acetone | CH3-CH2-I | iodide — **FINKELSTEIN** |
| LiAlH4 (or Zn/HCl) | CH3-CH3 | ethane (reduction) |
| Mg / dry ether | CH3-CH2-MgBr | **GRIGNARD REAGENT** |
| Na / dry ether | CH3-CH2-CH2-CH3 | butane — **WURTZ** |

## 5.1 The AMBIDENT NUCLEOPHILE box — a guaranteed question

```
   +---------------------------------------------------------------------+
   |                                                                     |
   |     KCN   (IONIC)     ->  attack through CARBON    ->  R-CN         |
   |                                              NITRILE (alkyl cyanide)|
   |     AgCN  (COVALENT)  ->  attack through NITROGEN  ->  R-NC         |
   |                                          ISOCYANIDE (carbylamine)   |
   |                                                                     |
   |     KNO2  (IONIC)     ->  attack through OXYGEN    ->  R-O-N=O      |
   |                                                       ALKYL NITRITE |
   |     AgNO2 (COVALENT)  ->  attack through NITROGEN  ->  R-NO2        |
   |                                                       NITROALKANE   |
   |                                                                     |
   |     *** THE SILVER SALT ALWAYS ATTACKS THROUGH NITROGEN ***         |
   |                                                                     |
   +---------------------------------------------------------------------+

   WHY: KCN is ionic, so a free CN- ion exists and attacks through carbon
        (the C-C bond formed is stronger). AgCN is covalent, so the carbon
        end is locked into the Ag-C bond and only the nitrogen lone pair
        is free to attack.
```

## 5.2 What each product turns into next (follow-up questions)

```
     R-CN   --H3O+ / H+ or OH---> R-COOH     acid, SAME no. of carbons as
                                             the nitrile (one MORE than R)
     R-CN   --LiAlH4 or Na/C2H5OH--> R-CH2-NH2   PRIMARY amine, ONE MORE C
     R-NC   --LiAlH4--> R-NH-CH3                 SECONDARY amine
     R-NC   --H3O+--> R-NH2 + HCOOH              primary amine, SAME C
     R-NO2  --Sn/HCl--> R-NH2                    primary amine, SAME C
```

---

# 6. THE TWO MECHANISMS — THE CORE OF THE CHAPTER

## 6.1 SN2 in one box

```
  +----------------------------------------------------------------------+
  |   SN2  =  SUBSTITUTION  NUCLEOPHILIC  BIMOLECULAR                    |
  |                                                                      |
  |                        H                       H                     |
  |                         \                       \                    |
  |     HO(-)  +             C--Br    -->   HO ----- C      +  Br(-)     |
  |                         / \                     / \                  |
  |                       H   CH3               CH3    H                 |
  |                                                                      |
  |     ONE STEP. Attack from the BACK, 180 deg from the leaving group.  |
  |     TRANSITION STATE: carbon momentarily bonded to FIVE groups,      |
  |     with the three unchanged groups lying FLAT in a plane.           |
  |                                                                      |
  |     rate = k [R-X] [Nu-]            SECOND order                     |
  |     STEREOCHEMISTRY: 100 % INVERSION  (WALDEN INVERSION)             |
  |     ORDER: CH3-X > 1deg > 2deg > 3deg   (reason: STERIC HINDRANCE)   |
  |     FAVOURED BY: strong nucleophile, polar APROTIC solvent           |
  |                  (acetone, DMSO, DMF)                                |
  +----------------------------------------------------------------------+
```

## 6.2 SN1 in one box

```
  +----------------------------------------------------------------------+
  |   SN1  =  SUBSTITUTION  NUCLEOPHILIC  UNIMOLECULAR                   |
  |                                                                      |
  |   STEP 1 (SLOW, rate determining):                                   |
  |         (CH3)3C-Br   --slow-->   (CH3)3C(+)   +   Br(-)              |
  |                                  FLAT, sp2, trigonal planar          |
  |                                                                      |
  |   STEP 2 (FAST):                                                     |
  |                     OH(-) from the TOP                               |
  |                          |                                           |
  |         CH3 ---------- C(+) ---------- CH3      (flat)               |
  |                          |                                           |
  |                     OH(-) from the BOTTOM                            |
  |                                                                      |
  |         Both faces equally likely  ->  50 : 50 mixture               |
  |                                    ->  RACEMIC MIXTURE               |
  |                                                                      |
  |     rate = k [R-X]                  FIRST order                      |
  |     [Nu-] does NOT affect the rate at all                            |
  |     STEREOCHEMISTRY: RACEMISATION, product optically INACTIVE        |
  |     ORDER: 3deg > 2deg > 1deg > CH3   (reason: CARBOCATION STABILITY)|
  |     FAVOURED BY: weak nucleophile, polar PROTIC solvent              |
  |                  (water, ethanol, formic acid)                       |
  +----------------------------------------------------------------------+
```

## 6.3 The full comparison table

| POINT | SN1 | SN2 |
|---|---|---|
| Steps | 2 | 1 |
| Intermediate | carbocation | none (transition state only) |
| Rate law | k[RX] | k[RX][Nu-] |
| Order | first | second |
| Molecularity | unimolecular | bimolecular |
| Effect of [Nu-] | none | directly proportional |
| Substrate order | 3deg > 2deg > 1deg > CH3 | CH3 > 1deg > 2deg > 3deg |
| Cause of that order | carbocation stability | steric hindrance |
| Stereochemistry | racemisation | inversion (Walden) |
| Product optically | INACTIVE | ACTIVE |
| Nucleophile | weak is fine | must be strong |
| Solvent | polar protic | polar aprotic |
| Rearrangement | possible | never |
| Example | (CH3)3C-Br + H2O | CH3-Br + OH- |

## 6.4 The reactivity orders — write these on your palm

```
   HALOGEN (both mechanisms):     R-I  >  R-Br  >  R-Cl  >  R-F

   SN1 (carbocation stability):
        benzyl , allyl  >  3deg  >  2deg  >  1deg  >  CH3  >  vinyl , aryl

   SN2 (steric hindrance):
        CH3  >  1deg  >  2deg  >  3deg      (allyl and benzyl are also FAST)

   CARBOCATION STABILITY:
        benzyl , allyl  >  3deg  >  2deg  >  1deg  >  CH3(+)  >>  phenyl(+)

   FREE RADICAL STABILITY:
        benzyl , allyl  >  3deg  >  2deg  >  1deg  >  CH3.

   OVERALL NUCLEOPHILIC SUBSTITUTION REACTIVITY:
        allyl , benzyl  >  3deg  >  2deg  >  1deg  >>  vinyl , aryl
```

---

# 7. ELIMINATION

```
  +----------------------------------------------------------------------+
  |     AQUEOUS  KOH    ->  SUBSTITUTION  ->  ALCOHOL                    |
  |     ALCOHOLIC KOH   ->  ELIMINATION   ->  ALKENE                     |
  +----------------------------------------------------------------------+

     CH3-CH2-Br  --alc. KOH, heat-->  CH2=CH2 + KBr + H2O

     It is BETA-ELIMINATION: the H leaves the BETA carbon and the X leaves
     the ALPHA carbon.

     SAYTZEFF'S RULE:  the MAJOR product is the MORE HIGHLY SUBSTITUTED
     alkene - formed by pulling the H off the beta carbon that has the
     FEWER hydrogen atoms.  "The poor get poorer."

     CH3-CH2-CHBr-CH3  --alc. KOH-->  CH3-CH=CH-CH3    (but-2-ene, MAJOR)
                                    + CH3-CH2-CH=CH2   (but-1-ene, minor)

     ALKENE STABILITY:
        R2C=CR2 > R2C=CHR > R2C=CH2 , RCH=CHR > RCH=CH2 > CH2=CH2
```

Substitution or elimination? Use this table:

| FAVOURS SUBSTITUTION | FAVOURS ELIMINATION |
|---|---|
| primary halide | tertiary halide |
| strong NUCLEOPHILE, weak base (CN-, I-, RS-) | strong / bulky BASE (RO-, (CH3)3CO-) |
| aqueous solvent | alcoholic solvent |
| low temperature | high temperature |

Other eliminations to know:

```
     CH2Br-CH2Br  --Zn dust-->  CH2=CH2 + ZnBr2       (DEHALOGENATION)
     CH3-CHBr2    --2 alc.KOH--> CH3-C(triple bond)H  (gives an ALKYNE)
```

---

# 8. REACTION WITH METALS

## 8.1 GRIGNARD REAGENT — the whole thing in one box

```
  +----------------------------------------------------------------------+
  |   PREPARATION      R-X  +  Mg   --DRY ETHER-->   R-Mg-X              |
  |                                                                      |
  |   STRUCTURE            delta-        delta+                          |
  |                          C  --------  Mg  ---  X                     |
  |                                                                      |
  |   Carbon is MORE electronegative than Mg, so the CARBON carries the  |
  |   NEGATIVE charge. It behaves as a CARBANION: a powerful NUCLEOPHILE |
  |   and a strong BASE.                                                 |
  |                                                                      |
  |   WHY DRY ETHER: any active hydrogen destroys it -                   |
  |        CH3MgBr + H2O  ->  CH4 + Mg(OH)Br                             |
  |        CH3MgBr + ROH  ->  CH4 + Mg(OR)Br                             |
  |        CH3MgBr + NH3  ->  CH4 + Mg(NH2)Br                            |
  |        CH3MgBr + HX   ->  CH4 + MgX2                                 |
  +----------------------------------------------------------------------+
```

| RMgX REACTS WITH | PRODUCT AFTER (ii) H3O+ | CLASS |
|---|---|---|
| H2O (or any active H) | R-H | ALKANE |
| **HCHO** | R-CH2-OH | **1deg ALCOHOL** |
| **any other R'CHO** | R'-CH(OH)-R | **2deg ALCOHOL** |
| **ketone R'-CO-R''** | R'R''C(OH)R | **3deg ALCOHOL** |
| ester R'COOR'' (2 mol) | 3deg alcohol | 3deg ALCOHOL |
| **CO2** | R-COOH | **CARBOXYLIC ACID** (one C more) |
| O2, then H+ | R-OH | alcohol |
| R'-CN, then H3O+ | R'-CO-R | ketone |

```
     THE GRIGNARD RULE IN FOUR LINES — memorise it:

        FORMALDEHYDE (HCHO)  ->  PRIMARY   alcohol
        ANY OTHER ALDEHYDE   ->  SECONDARY alcohol
        KETONE               ->  TERTIARY  alcohol
        CARBON DIOXIDE       ->  CARBOXYLIC ACID
```

## 8.2 WURTZ, WURTZ-FITTIG and FITTIG

```
  +----------------------------------------------------------------------+
  |  WURTZ          2 R-X + 2 Na  --dry ether-->  R-R + 2 NaX            |
  |                 2 CH3CH2Br + 2 Na --> CH3CH2CH2CH3 (n-butane)        |
  |                 ALKYL + ALKYL  ->  ALKANE                            |
  |                 Limitation: two DIFFERENT halides give a mixture of  |
  |                 THREE products. Only good for SYMMETRICAL alkanes.   |
  |                 Product always has an EVEN number of carbons.        |
  |                                                                      |
  |  WURTZ-FITTIG   Ar-X + R-X + 2 Na --dry ether--> Ar-R + 2 NaX        |
  |                 C6H5Br + CH3Br + 2Na --> C6H5-CH3 (toluene)          |
  |                 ARYL + ALKYL  ->  ALKYL BENZENE                      |
  |                                                                      |
  |  FITTIG         2 Ar-X + 2 Na --dry ether--> Ar-Ar + 2 NaX           |
  |                 2 C6H5Br + 2Na --> C6H5-C6H5 (biphenyl / diphenyl)   |
  |                 ARYL + ARYL  ->  BIARYL                              |
  +----------------------------------------------------------------------+
```

---

# 9. HALOARENES — WHY THEY DO NOT REACT, AND WHAT THEY DO

## 9.1 The FIVE reasons (a guaranteed 4-mark answer)

```
   1. RESONANCE
      The lone pair on X is delocalised into the ring:

         Cl(..)          Cl(+)          Cl(+)          Cl(+)
          |               ||             ||             ||
         / \             / \            / \            / \
        |   |   <-->    |   |(-) <-->  (-) |  <-->     |   |
         \ /             \ /            \ /            \ /
                                                        (-)

      In three of the four structures the C-Cl bond is DOUBLE.
      ==> the real bond has PARTIAL DOUBLE BOND CHARACTER.

   2. SHORTER, STRONGER BOND
      C-Cl in CH3Cl = 178 pm ;  C-Cl in C6H5Cl = 169 pm.
      Shorter = stronger = harder to break.

   3. sp2 HYBRIDISED CARBON
      sp2 has 33 % s character (sp3 has only 25 %). More s character means
      the carbon is more electronegative and grips the halogen more tightly.

   4. INSTABILITY OF THE PHENYL CATION
      C6H5(+) cannot be stabilised by the ring, because its empty orbital
      lies IN the plane of the ring, perpendicular to the pi cloud.
      No overlap ==> no resonance ==> the cation never forms ==> no SN1.

   5. REPULSION BY THE ELECTRON-RICH RING
      The pi cloud is electron rich and the incoming nucleophile is also
      electron rich. Like repels like, so the nucleophile is pushed away.
```

## 9.2 Conditions needed to force substitution

| COMPOUND | HYDROLYSIS CONDITIONS |
|---|---|
| CH3-CH2-Cl | dilute NaOH, room temperature |
| C6H5-Cl | NaOH, **623 K, 300 atm** (Dow process) |
| o- or p-nitrochlorobenzene | NaOH, 443 K |
| 2,4-dinitrochlorobenzene | aq. NaOH, 368 K (warm water bath) |
| 2,4,6-trinitrochlorobenzene (picryl chloride) | just **warm water** |

```
   WHY -NO2 AT ORTHO / PARA HELPS:
      The nucleophile's attack puts a NEGATIVE charge on the ring. From the
      ORTHO and PARA positions that charge can be delocalised right onto
      the oxygen atoms of the -NO2 group, which stabilises the
      intermediate. From the META position the charge can NEVER reach the
      nitro-bearing carbon, so a meta -NO2 gives NO activation.
```

## 9.3 Reactions of haloarenes

| REACTION | REAGENT / CONDITION | PRODUCT |
|---|---|---|
| Hydrolysis | (i) NaOH 623 K 300 atm (ii) H+ | phenol (**DOW process**) |
| With ammonia | NH3, Cu2O, 475 K, 60 atm | aniline |
| Wurtz-Fittig | CH3Cl + Na / dry ether | toluene |
| Fittig | Na / dry ether | biphenyl |
| Reduction | Ni-Al alloy + NaOH (or Zn/HCl) | benzene |
| Chlorination | Cl2 / anhyd. FeCl3 | o- and p-dichlorobenzene |
| Nitration | conc. HNO3 + conc. H2SO4 | o- and p-nitrochlorobenzene |
| Sulphonation | conc. H2SO4 | o- and p-chlorobenzenesulphonic acid |
| Friedel-Crafts alkylation | CH3Cl / anhyd. AlCl3 | o- and p-chlorotoluene |
| Friedel-Crafts acylation | CH3COCl / anhyd. AlCl3 | mainly p-chloroacetophenone |

```
   THE HALOGEN PARADOX — learn this two-line answer:

     "The halogen shows a -I effect, which withdraws electrons from the
      whole ring and therefore DEACTIVATES it. But it also shows a +R
      (resonance) effect that pushes electron density specifically into
      the ORTHO and PARA positions. The -I effect controls the RATE, so
      the ring is deactivated; the +R effect controls the POSITION, so
      substitution occurs at ortho and para."
```

---

# 10. POLYHALOGEN COMPOUNDS — THE FACT TABLE

| COMPOUND | FORMULA | HOW MADE | MAIN USES | MAIN HAZARD |
|---|---|---|---|---|
| Dichloromethane | CH2Cl2 | Cl2 + CH4, hv | paint remover, propellant, metal degreasing, drug solvent | damages the CNS; harms the cornea and skin |
| Chloroform | CHCl3 | ethanol or acetone + bleaching powder | solvent, making Freon-12, was an anaesthetic | oxidised by air+light to **PHOSGENE**; damages the liver |
| Iodoform | CHI3 | ethanol/acetone + I2 + NaOH | was an antiseptic (liberates free I2) | foul smell, so no longer used |
| Carbon tetrachloride | CCl4 | CH4 + 4Cl2, hv; or CS2 + Cl2 | solvent, dry cleaning, fire extinguisher (**PYRENE**) | gives phosgene when hot; liver damage; ozone depletion |
| Freon-12 | CCl2F2 | CCl4 + SbF3 (Swarts) | refrigerant, aerosol propellant, foam blowing | **destroys the OZONE layer** |
| DDT | (p-ClC6H4)2CH-CCl3 | chloral + chlorobenzene, conc. H2SO4 | insecticide against malaria and typhus | non-biodegradable, fat-soluble, kills fish, toxic; largely BANNED |

## 10.1 Chloroform — the three equations you must know

```
   PREPARATION (from ethanol + bleaching powder), THREE STEPS:

     1. OXIDATION      CH3CH2OH  +  Cl2  ->  CH3CHO  +  2 HCl
     2. CHLORINATION   CH3CHO  +  3 Cl2  ->  CCl3CHO (CHLORAL) + 3 HCl
     3. HYDROLYSIS     2 CCl3CHO + Ca(OH)2 -> 2 CHCl3 + (HCOO)2Ca

   OXIDATION IN AIR (the dark-bottle reaction):

     2 CHCl3  +  O2   --sunlight-->   2 COCl2  +  2 HCl
                                      PHOSGENE (carbonyl chloride),
                                      a deadly poisonous gas

   OTHER REACTIONS OF CHLOROFORM:
     CHCl3 + 6[H] --Zn/H2O--> CH4 + 3 HCl              (reduction)
     CHCl3 + HNO3 --> CCl3NO2 (CHLOROPICRIN) + H2O     (a war gas)
     2 CHCl3 + 6 Ag --> C2H2 + 6 AgCl                  (acetylene)
     CHCl3 + 4 NaOH --> HCOONa + 3 NaCl + 2 H2O        (hydrolysis)
     R-NH2 + CHCl3 + 3 KOH(alc) --> R-NC + 3 KCl + 3 H2O
                                    (CARBYLAMINE TEST for a 1deg amine)
```

```
   +-----------------------------------------------------------------+
   |  WHY IS CHLOROFORM STORED IN DARK BOTTLES FILLED TO THE BRIM?   |
   |                                                                 |
   |  Chloroform is slowly oxidised by atmospheric OXYGEN in         |
   |  SUNLIGHT to the poisonous gas PHOSGENE, COCl2.                 |
   |                                                                 |
   |     DARK bottle       ->  keeps out the SUNLIGHT                |
   |     FILLED TO THE BRIM->  leaves no AIR (no oxygen) inside      |
   |     + 1 % ETHANOL     ->  destroys any phosgene that does form, |
   |                           converting it to diethyl carbonate    |
   +-----------------------------------------------------------------+
```

## 10.2 The freon / ozone chain — write these three lines

```
     CCl2F2   --UV in the stratosphere-->   .CClF2  +  Cl.

     Cl.  +  O3   ->   ClO.  +  O2
     ClO. +  O    ->   Cl.   +  O2         <--- the Cl. is REGENERATED

     One chlorine radical destroys about 100000 ozone molecules.
     BANNED by the MONTREAL PROTOCOL, 1987.
```

---

# THE 15 REACTIONS TO WRITE ON YOUR PALM

```
   1.  R-OH  +  SOCl2  --pyridine-->  R-Cl + SO2 + HCl
       (SO2 and HCl are GASES  ->  purest product  ->  PREFERRED)

   2.  CH3-CH=CH2 + HBr  ->  CH3-CHBr-CH3            MARKOVNIKOV
       CH3-CH=CH2 + HBr --peroxide--> CH3-CH2-CH2-Br ANTI-Markovnikov
       (peroxide effect: HBr ONLY)

   3.  R-Cl + NaI --DRY ACETONE--> R-I + NaCl        FINKELSTEIN
   4.  R-Br + AgF --> R-F + AgBr                     SWARTS

   5.  C6H5N2+Cl- + CuCl/HCl --> C6H5Cl + N2         SANDMEYER
       C6H5N2+Cl- + Cu/HCl   --> C6H5Cl + N2         GATTERMANN

   6.  R-X + aq. KOH  ->  R-OH        (substitution)
       R-X + alc. KOH ->  ALKENE      (elimination, SAYTZEFF)

   7.  R-X + KCN  -> R-CN  (nitrile)     R-X + AgCN  -> R-NC (isocyanide)
   8.  R-X + KNO2 -> R-ONO (nitrite)     R-X + AgNO2 -> R-NO2 (nitroalkane)
       *** SILVER SALT -> attack by NITROGEN ***

   9.  R-X + Mg --dry ether--> R-MgX                 GRIGNARD
  10.  RMgX + HCHO -> 1deg alcohol ; + RCHO -> 2deg ; + ketone -> 3deg ;
       + CO2 -> CARBOXYLIC ACID       (always then (ii) H3O+)

  11.  2 R-X + 2Na --dry ether--> R-R                WURTZ
       ArX + RX + 2Na --> Ar-R                       WURTZ-FITTIG
       2 ArX + 2Na --> Ar-Ar                         FITTIG

  12.  C6H5Cl --(i) NaOH 623 K 300 atm (ii) H+--> C6H5OH   DOW process

  13.  2 CHCl3 + O2 --sunlight--> 2 COCl2 + 2 HCl   (PHOSGENE)

  14.  CCl4 + 2 SbF3 --SbCl5--> CCl2F2 + 2 SbCl3    (FREON-12, Swarts)

  15.  CCl3CHO + 2 C6H5Cl --conc.H2SO4--> DDT + H2O

   AND THE TWO ORDERS:
       SN1:  3deg > 2deg > 1deg > CH3      (carbocation stability)
       SN2:  CH3 > 1deg > 2deg > 3deg      (steric hindrance)
```
