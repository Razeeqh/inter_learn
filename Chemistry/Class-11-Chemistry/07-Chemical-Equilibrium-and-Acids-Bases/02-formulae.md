# Chemical Equilibrium and Acids-Bases — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

---

# 0. CONSTANTS AND VALUES YOU MUST KNOW BY HEART

```
  +-----------------------------------+-----------------------------------+
  |  Gas constant     R               |  0.0821 L atm K^-1 mol^-1         |
  |                                   |  8.314  J K^-1 mol^-1             |
  |                                   |  2 cal K^-1 mol^-1 (approx)       |
  |  Ionic product of water   Kw      |  1.0 x 10^-14  at 25 C (298 K)    |
  |  [H+] in pure water at 25 C       |  1.0 x 10^-7  mol/L               |
  |  [OH-] in pure water at 25 C      |  1.0 x 10^-7  mol/L               |
  |  pKw                              |  14                               |
  |  Ka of acetic acid                |  1.8 x 10^-5   (pKa = 4.74)       |
  |  Kb of ammonium hydroxide         |  1.8 x 10^-5   (pKb = 4.74)       |
  |  Ksp of AgCl                      |  1.8 x 10^-10                     |
  |  1 atm                            |  760 mm Hg = 101325 Pa            |
  +-----------------------------------+-----------------------------------+

  LOG VALUES YOU WILL NEED (no calculator allowed):

     log 1 = 0.0000      log 2 = 0.3010      log 3 = 0.4771
     log 4 = 0.6021      log 5 = 0.6990      log 6 = 0.7782
     log 7 = 0.8451      log 8 = 0.9031      log 9 = 0.9542
     log 10 = 1.0000     log 1.8 = 0.2553    log 1.34 = 0.1271

  RULE:   log ( a x 10^-n )  =  log a  -  n
          so   - log ( a x 10^-n )   =   n  -  log a
```

---

# 1. THE EQUILIBRIUM CONSTANT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   For      a A  +  b B   <==>   c C  +  d D                          |
  |                                                                      |
  |                    [ C ]^c  [ D ]^d                                  |
  |         Kc  =  ---------------------------                           |
  |                    [ A ]^a  [ B ]^b                                  |
  |                                                                      |
  |                                                                      |
  |                    p(C)^c   p(D)^d                                   |
  |         Kp  =  ---------------------------                           |
  |                    p(A)^a   p(B)^b                                   |
  |                                                                      |
  |                                                                      |
  |         Kp  =  Kc  ( R T ) ^ dn                                      |
  |                                                                      |
  |         dn  =  (gaseous product moles) - (gaseous reactant moles)     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `Kc = products / reactants` | any equilibrium given in concentrations |
| `Kp = same with partial pressures` | gaseous equilibrium given in atm |
| `Kp = Kc (RT)^dn` | converting one to the other; use R = 0.0821 |
| `Kc = Kp / (RT)^dn` | when Kp is given and Kc is wanted |
| Omit solids and liquids | heterogeneous equilibrium |

## Partial pressure

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    p(A)  =  ( mole fraction of A )  x  ( total pressure )             |
  |                                                                      |
  |                       n(A)                                           |
  |    mole fraction  =  --------                                        |
  |                       n(total)                                       |
  |                                                                      |
  |    Also:   p  =  [ concentration ]  x  R T                           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## UNITS OF K

```
  +----------------------------------------------------------------------+
  |     Units of Kc  =  ( mol L^-1 ) ^ dn                                |
  |     Units of Kp  =  ( atm )      ^ dn                                |
  |     dn = 0   ->   K is DIMENSIONLESS                                 |
  +----------------------------------------------------------------------+
```

| Reaction | dn | Units of Kc | Units of Kp |
|---|---|---|---|
| `H2 + I2 <==> 2HI` | 0 | none | none |
| `N2O4 <==> 2NO2` | +1 | mol L^-1 | atm |
| `2SO2 + O2 <==> 2SO3` | -1 | L mol^-1 | atm^-1 |
| `N2 + 3H2 <==> 2NH3` | -2 | L^2 mol^-2 | atm^-2 |
| `PCl5 <==> PCl3 + Cl2` | +1 | mol L^-1 | atm |
| `CaCO3(s) <==> CaO(s) + CO2(g)` | +1 | mol L^-1 | atm |

---

# 2. MANIPULATING K

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   Reaction REVERSED           ->   K'   =   1 / K                    |
  |                                                                      |
  |   Equation MULTIPLIED by n    ->   K'   =   K ^ n                    |
  |                                                                      |
  |   Equation DIVIDED by 2       ->   K'   =   sqrt ( K )               |
  |                                                                      |
  |   Two reactions ADDED         ->   K    =   K1  x  K2                |
  |                                                                      |
  |   Reaction SUBTRACTED         ->   K    =   K1  /  K2                |
  |                                                                      |
  |   Kc(forward) x Kc(backward)  =   1                                  |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 3. REACTION QUOTIENT AND DIRECTION

```
  +----------------------------------------------------------------------+
  |                    [ C ]^c [ D ]^d                                   |
  |        Q   =   ----------------------      at ANY instant            |
  |                    [ A ]^a [ B ]^b                                   |
  +----------------------------------------------------------------------+
```

| Condition | Meaning | Direction |
|---|---|---|
| `Q < K` | too few products | goes **FORWARD** |
| `Q = K` | balanced | **at equilibrium** |
| `Q > K` | too many products | goes **BACKWARD** |

---

# 4. EQUILIBRIUM AND GIBBS ENERGY

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     delta G   =   delta G(std)  +  R T ln Q                          |
  |                                                                      |
  |     At equilibrium  delta G = 0  and  Q = K , so                      |
  |                                                                      |
  |     delta G(std)  =  - R T ln K   =  - 2.303 R T log K               |
  |                                                                      |
  |     K   =   e ^ ( - delta G(std) / R T )                             |
  |                                                                      |
  |     Use R = 8.314 J K^-1 mol^-1 . Answer comes out in JOULES.        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Sign of delta G(std) | Value of K | Meaning |
|---|---|---|
| negative | K > 1 | products favoured, spontaneous |
| zero | K = 1 | perfectly balanced |
| positive | K < 1 | reactants favoured |

---

# 5. DEGREE OF DISSOCIATION

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                       moles dissociated                              |
  |     alpha   =    -----------------------------                       |
  |                       moles taken initially                          |
  |                                                                      |
  |     % dissociation  =  alpha  x  100                                 |
  |                                                                      |
  |                                                                      |
  |     FROM VAPOUR DENSITY:                                             |
  |                          D  -  d                                     |
  |            alpha  =   ---------------                                |
  |                        d  ( n - 1 )                                  |
  |                                                                      |
  |     D = theoretical vapour density , d = observed vapour density     |
  |     n = number of product moles from 1 mole of reactant              |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Standard results for  A <==> 2B  (like N2O4 <==> 2NO2)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                4  alpha^2  P                    4  C  alpha^2        |
  |     Kp  =   --------------------      Kc  =   ------------------     |
  |                1  -  alpha^2                     1  -  alpha         |
  |                                                                      |
  |     P = total pressure , C = INITIAL concentration                    |
  |                                                                      |
  |     Note the denominators are DIFFERENT. Kp uses (1 - alpha^2)        |
  |     because the total number of moles changes and that enters the     |
  |     mole fractions. Kc is at fixed volume, so only (1 - alpha).       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## For  PCl5 <==> PCl3 + Cl2   (also A <==> B + C)

```
  +----------------------------------------------------------------------+
  |                alpha^2  P                        C  alpha^2          |
  |     Kp  =   ------------------        Kc  =   ------------------     |
  |                1 - alpha^2                       1  -  alpha         |
  +----------------------------------------------------------------------+
```

---

# 6. LE CHATELIER'S PRINCIPLE — THE DECISION TABLE

```
  +----------------------------------------------------------------------+
  |  "If a system at equilibrium is disturbed by a change in              |
  |   concentration, pressure or temperature, the equilibrium shifts in   |
  |   the direction that NULLIFIES the change."                           |
  +----------------------------------------------------------------------+
```

| Disturbance | Shift | Does K change? |
|---|---|---|
| Add reactant | forward (right) | no |
| Add product | backward (left) | no |
| Remove product | forward (right) | no |
| Increase P (decrease V) | to the side with **fewer** gas moles | no |
| Decrease P (increase V) | to the side with **more** gas moles | no |
| Increase T, exothermic (dH < 0) | backward | **yes, K falls** |
| Increase T, endothermic (dH > 0) | forward | **yes, K rises** |
| Inert gas at constant **volume** | **no shift** | no |
| Inert gas at constant **pressure** | to the side with **more** gas moles | no |
| Catalyst | **no shift**, only faster | no |

```
  +----------------------------------------------------------------------+
  |   *** TEMPERATURE IS THE ONLY FACTOR THAT CHANGES THE VALUE OF K ***  |
  +----------------------------------------------------------------------+
```

## Van't Hoff equation (temperature dependence of K)

```
  +----------------------------------------------------------------------+
  |            K2            delta H    +-   1        1   -+             |
  |     log  ------   =   ------------  |  -----  -  ----- |             |
  |            K1           2.303 R     +-   T1       T2  -+             |
  +----------------------------------------------------------------------+
```

## Industrial conditions (learn this table cold)

| Process | Reaction | dn | dH | Pressure | Temperature | Catalyst |
|---|---|---|---|---|---|---|
| **Haber** (NH3) | `N2 + 3H2 <==> 2NH3` | -2 | -92.4 kJ | 200-300 atm | 673-773 K | Fe + Mo promoter |
| **Contact** (H2SO4) | `2SO2 + O2 <==> 2SO3` | -1 | -196 kJ | 1-2 atm | ~723 K | V2O5 (or Pt) |
| **Ostwald** (HNO3) | `4NH3 + 5O2 --> 4NO + 6H2O` | +1 | negative | ~1 atm | ~773 K | Pt-Rh gauze |
| **Deacon** (Cl2) | `4HCl + O2 <==> 2Cl2 + 2H2O` | -1 | negative | high | ~723 K | CuCl2 |

---

# 7. WATER, pH AND pOH

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     Kw   =   [ H+ ] [ OH- ]   =   1.0 x 10^-14      (at 25 C)        |
  |                                                                      |
  |     pH   =   - log [ H+ ]              [ H+ ]  = 10 ^ (- pH)         |
  |                                                                      |
  |     pOH  =   - log [ OH- ]             [ OH- ] = 10 ^ (- pOH)        |
  |                                                                      |
  |     pH  +  pOH   =   pKw   =   14                                    |
  |                                                                      |
  |                       Kw                        Kw                   |
  |     [ H+ ]   =   -----------      [ OH- ]  =  ---------              |
  |                    [ OH- ]                      [ H+ ]               |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| pH | Nature | Relation |
|---|---|---|
| < 7 | acidic | `[H+] > [OH-]` |
| = 7 | neutral (at 25 C only) | `[H+] = [OH-] = 10^-7` |
| > 7 | basic | `[H+] < [OH-]` |

```
  Kw INCREASES with temperature (ionisation of water is ENDOTHERMIC),
  so the neutral pH is BELOW 7 above 25 C.
  At 100 C , Kw = 51.3 x 10^-14 and neutral pH = 6.14 .
```

---

# 8. pH OF SOLUTIONS — THE MASTER TABLE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  STRONG ACID (conc C)       [H+] = C            pH = - log C         |
  |                             (x2 for H2SO4)                            |
  |                                                                      |
  |  STRONG BASE (conc C)       [OH-] = C           pOH = - log C        |
  |                             (x2 for Ca(OH)2)    pH = 14 - pOH         |
  |                                                                      |
  |  WEAK ACID                  [H+] = sqrt( Ka C )                       |
  |                             pH = (1/2)( pKa - log C )                 |
  |                                                                      |
  |  WEAK BASE                  [OH-] = sqrt( Kb C )                      |
  |                             pOH = (1/2)( pKb - log C )                |
  |                                                                      |
  |  ACIDIC BUFFER              pH = pKa + log ( [salt] / [acid] )        |
  |                                                                      |
  |  BASIC BUFFER               pOH = pKb + log ( [salt] / [base] )       |
  |                             pH = 14 - pOH                             |
  |                                                                      |
  |  SALT: weak acid +          pH = 7 + (1/2)pKa + (1/2) log C           |
  |        strong base                                                    |
  |                                                                      |
  |  SALT: strong acid +        pH = 7 - (1/2)pKb - (1/2) log C           |
  |        weak base                                                      |
  |                                                                      |
  |  SALT: weak acid +          pH = 7 + (1/2)( pKa - pKb )               |
  |        weak base            (independent of concentration)            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

This one box answers about half of the numericals in Part 2. Learn it.

---

# 9. IONISATION CONSTANTS Ka AND Kb

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     HA  <==>  H+  +  A-                                              |
  |                                                                      |
  |               [ H+ ] [ A- ]                                          |
  |     Ka  =   -------------------                                      |
  |                   [ HA ]                                             |
  |                                                                      |
  |     BOH  <==>  B+  +  OH-                                            |
  |                                                                      |
  |               [ B+ ] [ OH- ]                                         |
  |     Kb  =   --------------------                                     |
  |                   [ BOH ]                                            |
  |                                                                      |
  |     FOR A CONJUGATE PAIR:                                            |
  |                                                                      |
  |               Ka  x  Kb   =   Kw   =   10^-14                        |
  |                                                                      |
  |               pKa  +  pKb  =   14                                    |
  |                                                                      |
  |     pKa = - log Ka          pKb = - log Kb                           |
  |     SMALLER pKa  ->  STRONGER acid                                    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 10. OSTWALD'S DILUTION LAW

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                  C  alpha^2                                          |
  |       Ka   =   ---------------          EXACT                        |
  |                  1 - alpha                                           |
  |                                                                      |
  |       Ka   =   C  alpha^2               when alpha << 1              |
  |                                                                      |
  |                        Ka                                            |
  |       alpha  =  sqrt ( ---- )   =   sqrt ( Ka  V )                   |
  |                         C                                            |
  |                                                                      |
  |       [ H+ ]  =  C  alpha  =  sqrt ( Ka  C )                         |
  |                                                                      |
  |   alpha increases on DILUTION.  Valid only for WEAK electrolytes.     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 11. HYDROLYSIS OF SALTS

```
  +----------------------------------------------------------------------+
  |  TYPE OF SALT             |  Kh          |  NATURE   |  pH FORMULA   |
  +---------------------------+--------------+-----------+---------------+
  |  strong acid +            |  no          |  NEUTRAL  |  pH = 7       |
  |  strong base   (NaCl)     |  hydrolysis  |           |               |
  +---------------------------+--------------+-----------+---------------+
  |  weak acid +              |  Kh = Kw/Ka  |  BASIC    | pH = 7        |
  |  strong base  (CH3COONa)  |              |  pH > 7   | + (1/2)pKa    |
  |                           |              |           | + (1/2)log C  |
  +---------------------------+--------------+-----------+---------------+
  |  strong acid +            |  Kh = Kw/Kb  |  ACIDIC   | pH = 7        |
  |  weak base    (NH4Cl)     |              |  pH < 7   | - (1/2)pKb    |
  |                           |              |           | - (1/2)log C  |
  +---------------------------+--------------+-----------+---------------+
  |  weak acid +              |  Kh =        |  depends  | pH = 7        |
  |  weak base  (CH3COONH4)   |  Kw/(Ka Kb)  |  on Ka    | + (1/2)pKa    |
  |                           |              |  vs Kb    | - (1/2)pKb    |
  +---------------------------+--------------+-----------+---------------+

  DEGREE OF HYDROLYSIS:

           +--------------------------------------------------+
           |                Kh                  Kw            |
           |   h  =  sqrt ( ---- )   =  sqrt ( ------ )       |
           |                 C                   Ka C         |
           +--------------------------------------------------+

  For a weak acid + weak base:   h = sqrt ( Kw / (Ka Kb) )
  (independent of concentration)

  MEMORY LINE:  "THE STRONGER PARTNER DECIDES THE NATURE."
```

---

# 12. BUFFER SOLUTIONS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   HENDERSON - HASSELBALCH EQUATION                                   |
  |                                                                      |
  |                                    [ salt ]                          |
  |   ACIDIC BUFFER   pH  =  pKa + log ----------                        |
  |                                    [ acid ]                          |
  |                                                                      |
  |                                     [ salt ]                         |
  |   BASIC BUFFER    pOH =  pKb + log ----------      pH = 14 - pOH     |
  |                                     [ base ]                         |
  |                                                                      |
  |   When [salt] = [acid]  ->  pH = pKa                                 |
  |   BUFFER RANGE  =  pKa  +/-  1                                       |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Buffer | Made from | Approximate pH |
|---|---|---|
| Acetic acid / sodium acetate | weak acid + its salt | 4.74 |
| `NH4OH` / `NH4Cl` | weak base + its salt | 9.26 |
| `H2CO3` / `NaHCO3` | blood buffer | 7.4 |
| `NaH2PO4` / `Na2HPO4` | phosphate buffer | 7.2 |

```
   If [salt] > [acid]  ->  pH is ABOVE pKa
   If [salt] < [acid]  ->  pH is BELOW pKa
   If you double BOTH, the ratio is unchanged  ->  pH is unchanged
   (this is why dilution does not alter a buffer's pH)
```

---

# 13. SOLUBILITY PRODUCT

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    For   Ax By (s)   <==>   x A^y+   +   y B^x-                      |
  |                                                                      |
  |         Ksp  =  [ A^y+ ]^x  [ B^x- ]^y                               |
  |                                                                      |
  |    In terms of solubility s:                                         |
  |                                                                      |
  |         Ksp  =  ( x s )^x  ( y s )^y  =  x^x  y^y  s^(x+y)           |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Salt type | Example | Ksp in terms of s | s in terms of Ksp |
|---|---|---|---|
| **AB** | AgCl, BaSO4, AgBr, CaCO3 | `Ksp = s^2` | `s = sqrt(Ksp)` |
| **AB2** | PbCl2, CaF2, Mg(OH)2 | `Ksp = 4 s^3` | `s = (Ksp/4)^(1/3)` |
| **A2B** | Ag2CrO4, Ag2S, Ag2CO3 | `Ksp = 4 s^3` | `s = (Ksp/4)^(1/3)` |
| **AB3** | Fe(OH)3, Al(OH)3 | `Ksp = 27 s^4` | `s = (Ksp/27)^(1/4)` |
| **A3B2** | Ca3(PO4)2 | `Ksp = 108 s^5` | `s = (Ksp/108)^(1/5)` |
| **A2B3** | Fe2S3, As2S3 | `Ksp = 108 s^5` | `s = (Ksp/108)^(1/5)` |

## Condition for precipitation

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    Qsp  =  IONIC PRODUCT computed with the CURRENT concentrations     |
  |                                                                      |
  |         Qsp  <  Ksp    ->   unsaturated , NO precipitate             |
  |         Qsp  =  Ksp    ->   just saturated                           |
  |         Qsp  >  Ksp    ->   PRECIPITATE FORMS                        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Solubility in the presence of a common ion

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    AB in a solution already containing  [B-] = c   :                 |
  |                                                                      |
  |                 Ksp                                                  |
  |         s  =  -------          (because s is negligible beside c)     |
  |                  c                                                   |
  |                                                                      |
  |    A common ion ALWAYS DECREASES solubility.                          |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## Converting solubility units

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                          g per litre                                 |
  |     s (mol/L)     =   ---------------------                          |
  |                          molar mass                                  |
  |                                                                      |
  |     s (g/L)  =  s (mol/L)  x  molar mass                             |
  |                                                                      |
  |     "x grams per 100 mL"  ->  multiply by 10 to get g/L first        |
  |                                                                      |
  +----------------------------------------------------------------------+
```

---

# 14. ACID-BASE CONCEPTS AT A GLANCE

| Concept | ACID | BASE | Example |
|---|---|---|---|
| Arrhenius | gives `H+` in water | gives `OH-` in water | HCl, NaOH |
| Bronsted-Lowry | proton **donor** | proton **acceptor** | `HCl + H2O -> H3O+ + Cl-` |
| Lewis | electron pair **acceptor** | electron pair **donor** | `BF3 + NH3 -> BF3.NH3` |

```
  CONJUGATE ACID  =  base  +  H+
  CONJUGATE BASE  =  acid  -  H+

  Stronger the acid  ->  weaker its conjugate base.

  AMPHOTERIC (both acid and base):  H2O , HCO3- , HSO4- , H2PO4- , NH3

  COMMON LEWIS ACIDS:   BF3 , AlCl3 , BeCl2 , SO3 , CO2 , all CATIONS
  COMMON LEWIS BASES:   NH3 , H2O , R-OH , CO , all ANIONS
```

---

# 15. THE SIX STRONG ACIDS AND STRONG BASES (memorise — everything else is weak)

```
  +--------------------------------+----------------------------------+
  |   STRONG ACIDS                 |   STRONG BASES                   |
  +--------------------------------+----------------------------------+
  |   HCl    hydrochloric          |   NaOH    sodium hydroxide       |
  |   HBr    hydrobromic           |   KOH     potassium hydroxide    |
  |   HI     hydroiodic            |   LiOH    lithium hydroxide      |
  |   HNO3   nitric                |   Ca(OH)2 calcium hydroxide      |
  |   H2SO4  sulphuric             |   Ba(OH)2 barium hydroxide       |
  |   HClO4  perchloric            |   Sr(OH)2 strontium hydroxide    |
  +--------------------------------+----------------------------------+

  WEAK ACIDS:  CH3COOH , HCN , HF , H2CO3 , H2S , H3PO4 , HNO2 , H3BO3
  WEAK BASES:  NH4OH (NH3) , amines (CH3NH2) , Mg(OH)2 , Al(OH)3 , Fe(OH)3

  ACID STRENGTH ORDER of the hydrogen halides:  HF < HCl < HBr < HI
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |               [C]^c [D]^d                                            |
  |   1.  Kc  =  --------------                                          |
  |               [A]^a [B]^b                                            |
  |                                                                      |
  |   2.  Kp  =  Kc ( R T ) ^ dn          dn = gas products - gas        |
  |                                            reactants                 |
  |                                                                      |
  |   3.  Q < K -> forward , Q > K -> backward , Q = K -> equilibrium     |
  |                                                                      |
  |   4.  delta G(std)  =  - 2.303 R T log K      ( R = 8.314 J )        |
  |                                                                      |
  |   5.  Kw  =  [H+][OH-]  =  10^-14                                    |
  |                                                                      |
  |   6.  pH  =  - log [H+]        and        pH + pOH  =  14            |
  |                                                                      |
  |   7.  WEAK ACID:   [H+]  =  sqrt ( Ka  C )                           |
  |       WEAK BASE:   [OH-] =  sqrt ( Kb  C )                           |
  |                                                                      |
  |   8.  Ka  x  Kb  =  Kw          and        pKa + pKb  =  14          |
  |                                                                      |
  |   9.  OSTWALD:  alpha  =  sqrt ( Ka / C )                            |
  |                                                                      |
  |                                    [ salt ]                          |
  |  10.  HENDERSON:  pH  =  pKa + log ----------                        |
  |                                    [ acid ]                          |
  |                                                                      |
  |  11.  AB: Ksp = s^2     AB2 and A2B: Ksp = 4 s^3                     |
  |                                                                      |
  |  12.  Qsp > Ksp  ->  PRECIPITATE                                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**And the one sentence worth 8 marks:**

```
  +----------------------------------------------------------------------+
  |   LE CHATELIER: a disturbed equilibrium shifts in the direction that  |
  |   NULLIFIES the disturbance. Pressure -> fewer moles side.            |
  |   Temperature -> endothermic side. Catalyst and inert gas at constant |
  |   volume -> NO shift. Only TEMPERATURE changes K.                     |
  +----------------------------------------------------------------------+
```
