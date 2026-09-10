# Chemical Bonding and Molecular Structure — Formula and Rule Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
This chapter has few formulas but MANY rules — the rules are worth more marks.

---

# 0. NUMBERS AND CONSTANTS WORTH KNOWING

```
  +----------------------------------+-----------------------------------+
  |  1 debye              D          |  3.336 x 10^-30  C m              |
  |  Charge of one electron  e       |  1.602 x 10^-19  C                |
  |                                  |  = 4.8 x 10^-10  esu              |
  |  1 angstrom           A          |  10^-10 m  =  100 pm              |
  |  1 picometre          pm         |  10^-12 m                         |
  |  Lattice enthalpy of NaCl        |  788 kJ/mol                       |
  |  Bond enthalpy  H-H              |  435 kJ/mol                       |
  |  Bond enthalpy  O=O              |  498 kJ/mol                       |
  |  Bond enthalpy  N#N              |  946 kJ/mol  (very strong!)       |
  |  Hydrogen bond strength          |  10 to 40 kJ/mol                  |
  +----------------------------------+-----------------------------------+
```

| Bond | Length (pm) | Bond | Length (pm) |
|------|-------------|------|-------------|
| H-H | 74 | C-C | 154 |
| C-H | 109 | C=C | 134 |
| O-H | 96 | C#C | 120 |
| N-H | 101 | N#N | 110 |
| C-O | 143 | O=O | 121 |

---

# 1. FORMAL CHARGE

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     FORMAL      =    valence      -   lone-pair    -     1           |
  |     CHARGE           electrons        electrons        -----  x      |
  |     on an atom       of the FREE      on that atom       2           |
  |                      atom                              bonding       |
  |                                                        electrons     |
  |                                                                      |
  |     SHORT FORM:        FC   =   V   -   L   -   ( B / 2 )            |
  |                                                                      |
  |     CHECK:  sum of all formal charges  =  overall charge on the      |
  |             species  (zero for a neutral molecule)                   |
  |                                                                      |
  +----------------------------------------------------------------------+
```

| Rule | When to use |
|------|-------------|
| `FC = V - L - B/2` | any "calculate the formal charge on ..." question |
| Best structure = formal charges nearest zero | choosing between two Lewis structures |
| Negative FC belongs on the most electronegative atom | deciding which resonance form dominates |
| Sum of FC = overall charge | checking your own answer before moving on |

---

# 2. BOND ORDER — THE TWO VERSIONS

```
  +----------------------------------------------------------------------+
  |  VERSION 1 - FROM A LEWIS STRUCTURE                                  |
  |                                                                      |
  |     Bond order = number of shared electron PAIRS between two atoms   |
  |                                                                      |
  |         single = 1      double = 2      triple = 3                   |
  |                                                                      |
  |  With RESONANCE:                                                     |
  |                                                                      |
  |                       total number of bonds between the two atoms    |
  |     Bond order  =    ------------------------------------------      |
  |                       number of equivalent positions                 |
  |                                                                      |
  |     CO3 2-  ->  4 / 3  =  1.33          O3  ->  3 / 2  =  1.5        |
  |     NO3 -   ->  4 / 3  =  1.33          SO2 ->  3 / 2  =  1.5        |
  |     Benzene ->  9 / 6  =  1.5                                        |
  +----------------------------------------------------------------------+


  +----------------------------------------------------------------------+
  |  VERSION 2 - FROM MOLECULAR ORBITAL THEORY                           |
  |                                                                      |
  |                        Nb   -   Na                                   |
  |     BOND ORDER   =   ---------------                                 |
  |                             2                                        |
  |                                                                      |
  |     Nb = number of electrons in BONDING molecular orbitals           |
  |     Na = number of electrons in ANTIBONDING molecular orbitals       |
  |                                                                      |
  |     B.O. = 0        ->  molecule DOES NOT EXIST                      |
  |     B.O. positive   ->  molecule exists; larger = more stable        |
  +----------------------------------------------------------------------+
```

```
  THE MASTER CHAIN - one line that answers a dozen questions:

     BOND ORDER  UP  ->  BOND LENGTH DOWN  ->  BOND ENTHALPY UP
                                            ->  STABILITY UP
```

| Formula | When to use |
|---------|-------------|
| `B.O. = (Nb - Na)/2` | any MOT question, any "does it exist" question |
| `B.O. = total bonds / positions` | resonance hybrids like CO3 2-, NO3 -, O3 |
| Compare bond orders | "arrange in order of bond length / stability" |

---

# 3. VSEPR — THE FULL SHAPE TABLE  *** LEARN THIS COLD ***

```
  +---------------------------------------------------------------------+
  |  COUNTING RULE:                                                     |
  |     total electron pairs  =  bond pairs (bp)  +  lone pairs (lp)    |
  |                                                                     |
  |     A double or triple bond counts as ONE bond pair for shape.      |
  |                                                                     |
  |  REPULSION ORDER:                                                   |
  |     lp - lp   >   lp - bp   >   bp - bp                             |
  |                                                                     |
  |     Each lone pair squeezes the bond angle DOWN by 2 to 3 degrees.  |
  +---------------------------------------------------------------------+
```

| Total pairs | bp | lp | ELECTRON GEOMETRY | MOLECULAR SHAPE | Bond angle | Example |
|-------------|----|----|-------------------|-----------------|------------|---------|
| 2 | 2 | 0 | Linear | **Linear** | 180 | BeCl2, CO2, HgCl2, C2H2 |
| 3 | 3 | 0 | Trigonal planar | **Trigonal planar** | 120 | BF3, BCl3, CO3 2-, NO3 - |
| 3 | 2 | 1 | Trigonal planar | **Bent (angular)** | slightly < 120 (about 119) | SO2, SnCl2, O3, NO2 - |
| 4 | 4 | 0 | Tetrahedral | **Tetrahedral** | 109.5 | CH4, CCl4, NH4+, SO4 2- |
| 4 | 3 | 1 | Tetrahedral | **Trigonal pyramidal** | 107 | NH3, PH3, H3O+, PCl3 |
| 4 | 2 | 2 | Tetrahedral | **Bent (V-shaped)** | 104.5 | H2O, H2S, OF2, SCl2 |
| 5 | 5 | 0 | Trigonal bipyramidal | **Trigonal bipyramidal** | 90 and 120 | PCl5, PF5, SbCl5 |
| 5 | 4 | 1 | Trigonal bipyramidal | **See-saw** | < 90, < 120 | SF4, TeCl4 |
| 5 | 3 | 2 | Trigonal bipyramidal | **T-shaped** | about 87 | ClF3, BrF3 |
| 5 | 2 | 3 | Trigonal bipyramidal | **Linear** | 180 | XeF2, I3 -, ICl2 - |
| 6 | 6 | 0 | Octahedral | **Octahedral** | 90 | SF6, PF6 -, SiF6 2- |
| 6 | 5 | 1 | Octahedral | **Square pyramidal** | slightly < 90 | BrF5, IF5, SbF5 2- |
| 6 | 4 | 2 | Octahedral | **Square planar** | 90 | XeF4, ICl4 - |

```
  +----------------------------------------------------------------------+
  |  THE BOND ANGLE LADDER - written in almost every board paper         |
  |                                                                      |
  |       CH4    ->    NH3    ->    H2O                                  |
  |      109.5        107.0        104.5    degrees                      |
  |      0 lp          1 lp         2 lp                                 |
  |                                                                      |
  |  All three are TETRAHEDRAL in electron geometry. Each extra lone     |
  |  pair pushes harder and shrinks the angle by about 2.5 degrees.      |
  +----------------------------------------------------------------------+
```

```
  EXTRA RULES THAT DECIDE ANGLES

   1. More ELECTRONEGATIVE surrounding atom  ->  SMALLER angle
         NH3 (107)   >   NF3 (102)
         H2O (104.5) >   OF2 (103)

   2. Larger central atom (down a group)     ->  SMALLER angle
         NH3 (107) > PH3 (93.5) > AsH3 (92) > SbH3 (91)
         H2O (104.5) > H2S (92) > H2Se (91) > H2Te (90)

   3. Multiple bonds need more room than single bonds
         so in COCl2 the Cl-C-Cl angle is less than 120.
```

---

# 4. HYBRIDISATION TABLE  *** LEARN THIS COLD TOO ***

| Hybridisation | Orbitals mixed | Number of hybrids | Shape | Angle | s character | Examples |
|---------------|----------------|-------------------|-------|-------|-------------|----------|
| **sp** | 1 s + 1 p | 2 | Linear | 180 | 50 % | BeCl2, BeF2, CO2, C2H2, HgCl2, N2O |
| **sp2** | 1 s + 2 p | 3 | Trigonal planar | 120 | 33.3 % | BF3, BCl3, AlCl3, C2H4, SO3, CO3 2-, NO3 -, graphite |
| **sp3** | 1 s + 3 p | 4 | Tetrahedral | 109.5 | 25 % | CH4, CCl4, NH3, H2O, NH4+, SO4 2-, ClO4 -, diamond |
| **sp3d** | 1 s + 3 p + 1 d | 5 | Trigonal bipyramidal | 90 and 120 | 20 % | PCl5, PF5, SF4, ClF3, XeF2, I3 - |
| **sp3d2** | 1 s + 3 p + 2 d | 6 | Octahedral | 90 | 16.7 % | SF6, PF6 -, BrF5, XeF4, SiF6 2- |
| **sp3d3** | 1 s + 3 p + 3 d | 7 | Pentagonal bipyramidal | 72 and 90 | 14.3 % | IF7 |

```
  +----------------------------------------------------------------------+
  |  MORE s CHARACTER  ->  orbital held CLOSER to nucleus                |
  |                    ->  SHORTER bond , STRONGER bond                  |
  |                    ->  HIGHER electronegativity of that carbon       |
  |                    ->  MORE acidic C-H hydrogen                      |
  |                                                                      |
  |          sp  >  sp2  >  sp3     (in all four of those properties)    |
  |                                                                      |
  |     Acidity:   HC # CH   >   H2C = CH2   >   H3C - CH3               |
  +----------------------------------------------------------------------+
```

---

# 5. THE STERIC-NUMBER COUNTING RULE (fastest tool in the chapter)

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |                            1                                         |
  |     STERIC NUMBER   X  =  ---  [   V   +   M   -   C   +   A   ]     |
  |                            2                                         |
  |                                                                      |
  |     V  =  valence electrons of the CENTRAL atom                      |
  |     M  =  number of MONOVALENT atoms attached                        |
  |           ( H , F , Cl , Br , I )                                    |
  |     C  =  charge if the species is a CATION   ->  SUBTRACT           |
  |     A  =  charge if the species is an ANION   ->  ADD                |
  |                                                                      |
  |     Oxygen or sulphur bonded by a DOUBLE bond contributes ZERO.      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

```
  +-------+---------------+--------------------------+
  |   X   | HYBRIDISATION |  ELECTRON GEOMETRY       |
  +-------+---------------+--------------------------+
  |   2   |     sp        |  linear                  |
  |   3   |     sp2       |  trigonal planar         |
  |   4   |     sp3       |  tetrahedral             |
  |   5   |     sp3d      |  trigonal bipyramidal    |
  |   6   |     sp3d2     |  octahedral              |
  |   7   |     sp3d3     |  pentagonal bipyramidal  |
  +-------+---------------+--------------------------+
```

```
  ALTERNATIVE (use whichever you find easier):

      X  =  (number of sigma bonds)  +  (number of lone pairs on
                                          the central atom)

      Count each single, double or triple bond as ONE sigma bond.
```

```
  WORKED LINES - practise until each takes 5 seconds:

     CH4     (1/2)[4 + 4 - 0 + 0] = 4  -> sp3   tetrahedral
     NH3     (1/2)[5 + 3 - 0 + 0] = 4  -> sp3   pyramidal (1 lp)
     H2O     (1/2)[6 + 2 - 0 + 0] = 4  -> sp3   bent (2 lp)
     NH4+    (1/2)[5 + 4 - 1 + 0] = 4  -> sp3   tetrahedral
     H3O+    (1/2)[6 + 3 - 1 + 0] = 4  -> sp3   pyramidal
     BF3     (1/2)[3 + 3 - 0 + 0] = 3  -> sp2   trigonal planar
     NO2 -   (1/2)[5 + 0 - 0 + 1] = 3  -> sp2   bent
     CO3 2-  (1/2)[4 + 0 - 0 + 2] = 3  -> sp2   trigonal planar
     SO4 2-  (1/2)[6 + 0 - 0 + 2] = 4  -> sp3   tetrahedral
     ClO4 -  (1/2)[7 + 0 - 0 + 1] = 4  -> sp3   tetrahedral
     PCl5    (1/2)[5 + 5 - 0 + 0] = 5  -> sp3d  trigonal bipyramidal
     SF4     (1/2)[6 + 4 - 0 + 0] = 5  -> sp3d  see-saw (1 lp)
     ClF3    (1/2)[7 + 3 - 0 + 0] = 5  -> sp3d  T-shaped (2 lp)
     XeF2    (1/2)[8 + 2 - 0 + 0] = 5  -> sp3d  linear (3 lp)
     I3 -    (1/2)[7 + 2 - 0 + 1] = 5  -> sp3d  linear (3 lp)
     SF6     (1/2)[6 + 6 - 0 + 0] = 6  -> sp3d2 octahedral
     BrF5    (1/2)[7 + 5 - 0 + 0] = 6  -> sp3d2 square pyramidal (1 lp)
     XeF4    (1/2)[8 + 4 - 0 + 0] = 6  -> sp3d2 square planar (2 lp)
     IF7     (1/2)[7 + 7 - 0 + 0] = 7  -> sp3d3 pentagonal bipyramidal

  Number of LONE PAIRS  =  X  -  (number of atoms attached)
```

---

# 6. SIGMA AND PI BOND COUNTING

```
  +----------------------------------------------------------------------+
  |     single bond   =   1 sigma                                        |
  |     double bond   =   1 sigma  +  1 pi                               |
  |     triple bond   =   1 sigma  +  2 pi                               |
  |                                                                      |
  |  For a chain molecule with N atoms joined in a row:                  |
  |     number of sigma bonds  =  (total bonds drawn as lines)           |
  |     number of pi bonds     =  (double bonds) + 2 x (triple bonds)    |
  +----------------------------------------------------------------------+
```

| Molecule | sigma | pi |
|----------|-------|----|
| CH4 | 4 | 0 |
| C2H4 (ethene) | 5 | 1 |
| C2H2 (ethyne) | 3 | 2 |
| CO2 | 2 | 2 |
| N2 | 1 | 2 |
| Benzene C6H6 | 12 | 3 |
| HCN | 2 | 2 |
| SO2 | 2 | 2 |

---

# 7. MOLECULAR ORBITAL THEORY — ORDERS AND RULES

```
  +----------------------------------------------------------------------+
  |  ENERGY ORDER A  -  for molecules up to N2                           |
  |                     ( total electrons  <=  14 )                      |
  |                                                                      |
  |   sigma1s < sigma*1s < sigma2s < sigma*2s                            |
  |        < ( pi2px = pi2py ) < sigma2pz                                |
  |        < ( pi*2px = pi*2py ) < sigma*2pz                             |
  |                                                                      |
  |   Applies to:  Li2 , Be2 , B2 , C2 , N2                              |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |  ENERGY ORDER B  -  for O2 and beyond                                |
  |                     ( total electrons  >=  15 )                      |
  |                                                                      |
  |   sigma1s < sigma*1s < sigma2s < sigma*2s                            |
  |        < sigma2pz                                                    |
  |        < ( pi2px = pi2py )                                           |
  |        < ( pi*2px = pi*2py ) < sigma*2pz                             |
  |                                                                      |
  |   Applies to:  O2 , F2 , Ne2                                         |
  +----------------------------------------------------------------------+

  THE ONLY CHANGE:  sigma2pz drops BELOW the pi orbitals from O2 onwards.
  REASON:  s-p mixing is strong in the lighter molecules and pushes
           sigma2pz up; by oxygen the 2s-2p gap is large and mixing dies.
```

| Species | Total e- | Nb | Na | Bond order | Magnetic behaviour |
|---------|----------|----|----|------------|--------------------|
| H2+ | 1 | 1 | 0 | 0.5 | paramagnetic |
| H2 | 2 | 2 | 0 | 1.0 | diamagnetic |
| He2+ | 3 | 2 | 1 | 0.5 | paramagnetic |
| He2 | 4 | 2 | 2 | 0 | does not exist |
| Li2 | 6 | 4 | 2 | 1.0 | diamagnetic |
| Be2 | 8 | 4 | 4 | 0 | does not exist |
| B2 | 10 | 6 | 4 | 1.0 | **paramagnetic** |
| C2 | 12 | 8 | 4 | 2.0 | diamagnetic |
| N2 | 14 | 10 | 4 | 3.0 | diamagnetic |
| N2+ | 13 | 9 | 4 | 2.5 | paramagnetic |
| O2 | 16 | 10 | 6 | 2.0 | **paramagnetic** |
| O2+ | 15 | 10 | 5 | 2.5 | paramagnetic |
| O2- | 17 | 10 | 7 | 1.5 | paramagnetic |
| O2 2- | 18 | 10 | 8 | 1.0 | diamagnetic |
| F2 | 18 | 10 | 8 | 1.0 | diamagnetic |
| Ne2 | 20 | 10 | 10 | 0 | does not exist |
| NO | 15 | 10 | 5 | 2.5 | paramagnetic |
| CO | 14 | 10 | 4 | 3.0 | diamagnetic |
| CN - | 14 | 10 | 4 | 3.0 | diamagnetic |

```
  MAGNETISM RULE:
       at least ONE unpaired electron  ->  PARAMAGNETIC
       every electron paired           ->  DIAMAGNETIC
```

---

# 8. FAJANS' RULES

```
  +----------------------------------------------------------------------+
  |  COVALENT CHARACTER OF AN "IONIC" COMPOUND INCREASES WHEN:           |
  |                                                                      |
  |   1.  the CATION is SMALLER                                          |
  |   2.  the ANION is LARGER                                            |
  |   3.  the CHARGE on either ion is HIGHER                             |
  |   4.  the cation has a PSEUDO NOBLE-GAS (18-electron) configuration  |
  |       instead of a true noble-gas one                                |
  |                                                                      |
  |                                    charge on cation                  |
  |     POLARISING POWER   goes as   ---------------------               |
  |                                    size of cation                    |
  |                                                                      |
  |     POLARISABILITY of an anion   goes UP with SIZE and CHARGE        |
  +----------------------------------------------------------------------+
```

| Comparison | More covalent | Reason (Fajans) |
|------------|---------------|-----------------|
| LiCl vs NaCl vs KCl | LiCl | smallest cation |
| LiF vs LiCl vs LiBr vs LiI | LiI | largest anion |
| NaCl vs MgCl2 vs AlCl3 | AlCl3 | highest cation charge |
| CuCl vs NaCl | CuCl | Cu+ has 18-electron shell |
| AgCl vs KCl | AgCl | Ag+ has 18-electron shell |

```
  CONSEQUENCES of more covalent character:
      LOWER melting and boiling point
      LOWER solubility in water, HIGHER in organic solvents
      does NOT conduct electricity when molten
      often coloured
```

---

# 9. DIPOLE MOMENT AND PERCENTAGE IONIC CHARACTER

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     DIPOLE MOMENT       mu   =   q  x  d                             |
  |                                                                      |
  |     q = charge separated (coulomb or esu)                            |
  |     d = distance between the charges (metre or cm)                   |
  |                                                                      |
  |     UNIT:  debye (D)         1 D = 3.336 x 10^-30 C m                |
  |                                                                      |
  |     mu is a VECTOR - direction matters. Draw the arrow pointing      |
  |     towards the more electronegative atom.                           |
  |                                                                      |
  |     MOLECULAR dipole moment = VECTOR SUM of all bond dipoles         |
  |     (plus any lone-pair dipole)                                      |
  |                                                                      |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |                                                                      |
  |                              mu (observed)                           |
  |     % IONIC CHARACTER  =  ----------------------  x  100             |
  |                              mu (100 % ionic)                        |
  |                                                                      |
  |     where  mu(100 % ionic)  =  e  x  d                               |
  |            using  e = 4.8 x 10^-10 esu  and  d in cm gives           |
  |            the answer directly in debye when divided by 10^-18       |
  |                                                                      |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |   For two bond dipoles mu1 and mu2 with an angle theta between them: |
  |                                                                      |
  |     resultant  =  square root of                                     |
  |                   [ mu1^2 + mu2^2 + 2 mu1 mu2 cos(theta) ]           |
  |                                                                      |
  |   If mu1 = mu2 = mu and theta = 180 degrees  ->  resultant = 0       |
  |   (this is exactly why CO2 is non-polar)                             |
  +----------------------------------------------------------------------+
```

| Molecule | Shape | Dipole moment (D) | Why |
|----------|-------|-------------------|-----|
| CO2 | linear | 0 | symmetric, dipoles cancel |
| CS2 | linear | 0 | symmetric |
| BF3 | trigonal planar | 0 | symmetric |
| CH4 | tetrahedral | 0 | symmetric |
| CCl4 | tetrahedral | 0 | symmetric |
| SF6 | octahedral | 0 | symmetric |
| H2O | bent | 1.85 | dipoles add |
| NH3 | pyramidal | 1.47 | bond + lone-pair dipoles add |
| NF3 | pyramidal | 0.24 | bond and lone-pair dipoles oppose |
| CHCl3 | tetrahedral | 1.04 | not symmetric |
| HF | linear | 1.91 | largest electronegativity difference |
| HCl | linear | 1.03 | — |
| HBr | linear | 0.79 | — |
| HI | linear | 0.38 | smallest difference |

```
  SYMMETRY RULE (answers most dipole MCQs in 3 seconds):

     If the central atom has NO lone pair AND all outer atoms are the
     SAME, the molecule is SYMMETRIC  ->  dipole moment = ZERO.

     Any lone pair on the central atom, or any mixture of different
     outer atoms, usually makes it POLAR.
```

---

# 10. IONIC BOND — LATTICE ENTHALPY AND BORN-HABER

```
  +----------------------------------------------------------------------+
  |                                          q(+)  x  q(-)               |
  |   LATTICE ENERGY   proportional to    -------------------            |
  |                                          r(+)  +  r(-)               |
  |                                                                      |
  |   HIGHER charge  ->  higher lattice energy                           |
  |   SMALLER ions   ->  higher lattice energy                           |
  |                                                                      |
  |   Order:   MgO  >  CaO  >  NaF  >  NaCl  >  NaBr  >  NaI            |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |   BORN-HABER CYCLE  (for a metal M and a halogen X2)                 |
  |                                                                      |
  |   dH(formation)  =   S       sublimation of the metal                |
  |                   +  IE      ionisation enthalpy of the metal        |
  |                   +  (1/2)D  bond dissociation of the halogen        |
  |                   +  EA      electron gain enthalpy of the halogen   |
  |                   +  U       lattice enthalpy (negative when the     |
  |                              lattice FORMS)                          |
  |                                                                      |
  |   Rearranged to find the unknown lattice enthalpy:                   |
  |                                                                      |
  |      U  =  dH(formation)  -  S  -  IE  -  (1/2)D  -  EA             |
  +----------------------------------------------------------------------+
```

| Quantity | Sign | When to use |
|----------|------|-------------|
| Sublimation enthalpy S | + (endo) | first step of the Born-Haber cycle |
| Ionisation enthalpy IE | + (endo) | metal loses an electron |
| Bond dissociation D | + (endo) | splitting X2 into 2 X atoms |
| Electron gain enthalpy EA | - (exo, usually) | non-metal gains an electron |
| Lattice enthalpy U | - when forming, + when breaking | be careful with the direction the question asks |

```
  FACTORS FAVOURING IONIC BOND FORMATION
     1.  LOW ionisation enthalpy of the metal
     2.  HIGH (more negative) electron gain enthalpy of the non-metal
     3.  HIGH lattice enthalpy of the product
     4.  LARGE electronegativity difference (about 1.7 or more)
```

---

# 11. HYDROGEN BONDING RULES

```
  +----------------------------------------------------------------------+
  |  CONDITIONS FOR A HYDROGEN BOND                                      |
  |                                                                      |
  |    1.  Hydrogen must be attached to  F , O  or  N  only.             |
  |    2.  That atom must have at least one LONE PAIR.                   |
  |    3.  The atom must be SMALL as well as highly electronegative.     |
  |                                                                      |
  |  STRENGTH:  10 to 40 kJ/mol                                          |
  |  Strength order of the H-bond:   F...H  >  O...H  >  N...H           |
  +----------------------------------------------------------------------+
```

| Type | Where | Effect on boiling point | Effect on water solubility | Example |
|------|-------|------------------------|---------------------------|---------|
| Intermolecular | between separate molecules | RAISES it | INCREASES it | H2O, HF, NH3, alcohols, p-nitrophenol |
| Intramolecular | inside one molecule (forms a ring) | LOWERS it | DECREASES it | o-nitrophenol, salicylaldehyde |

---

# 12. THE STRENGTH LADDER OF ALL BONDS AND FORCES

```
  +----------------------------------------------------------------------+
  |   IONIC / COVALENT BOND      400  to  4000  kJ/mol      STRONGEST    |
  |   METALLIC BOND               75  to   700  kJ/mol                   |
  |   HYDROGEN BOND               10  to    40  kJ/mol                   |
  |   DIPOLE-DIPOLE                5  to    25  kJ/mol                   |
  |   LONDON / VAN DER WAALS       0.05 to  40  kJ/mol      WEAKEST      |
  +----------------------------------------------------------------------+
```

---

# THE 10 THINGS TO WRITE ON YOUR PALM

```
  +----+-----------------------------------------------------------------+
  |  1 |  FC  =  V  -  L  -  B/2         (formal charge)                 |
  +----+-----------------------------------------------------------------+
  |  2 |  B.O.  =  ( Nb - Na ) / 2       (MOT bond order)                |
  +----+-----------------------------------------------------------------+
  |  3 |  X  =  (1/2)[ V + M - C + A ]   (steric number)                 |
  |    |  2 sp , 3 sp2 , 4 sp3 , 5 sp3d , 6 sp3d2                        |
  +----+-----------------------------------------------------------------+
  |  4 |  CH4 109.5  ->  NH3 107  ->  H2O 104.5                          |
  |    |  more lone pairs = smaller angle                                |
  +----+-----------------------------------------------------------------+
  |  5 |  lp-lp  >  lp-bp  >  bp-bp      (repulsion order)               |
  +----+-----------------------------------------------------------------+
  |  6 |  Bond order UP -> length DOWN -> strength UP                    |
  +----+-----------------------------------------------------------------+
  |  7 |  O2 is PARAMAGNETIC - two unpaired electrons in pi*2px, pi*2py  |
  +----+-----------------------------------------------------------------+
  |  8 |  Symmetric molecule with no lone pair  ->  mu = 0               |
  |    |  CO2, BF3, CH4, CCl4, SF6 are all non-polar                     |
  +----+-----------------------------------------------------------------+
  |  9 |  sigma2pz drops BELOW the pi orbitals only from O2 onwards      |
  +----+-----------------------------------------------------------------+
  | 10 |  Fajans: small cation + big anion + high charge = COVALENT      |
  +----+-----------------------------------------------------------------+
```
