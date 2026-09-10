# Solid State — Formula and Facts Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
This chapter is half formula, half memory table — both halves are here.

---

# 0. CONSTANTS AND CONVERSIONS YOU MUST KNOW BY HEART

```
  +---------------------------------+-----------------------------------+
  |  Avogadro's number      NA      |  6.022 x 10^23  per mol           |
  |  sqrt(2)                        |  1.414                            |
  |  sqrt(3)                        |  1.732                            |
  |  pi                             |  3.1416                           |
  |  Bohr magneton          BM      |  9.27 x 10^-24  A m^2             |
  +---------------------------------+-----------------------------------+

  +---------------------------------+-----------------------------------+
  |  1 picometre     1 pm           |  10^-12 m   =   10^-10 cm         |
  |  1 angstrom      1 A            |  10^-10 m   =   10^-8  cm         |
  |  1 nanometre     1 nm           |  10^-9  m   =   10^-7  cm         |
  |  1 m^3                          |  10^6 cm^3                        |
  +---------------------------------+-----------------------------------+

  THE ONE THAT KILLS MARKS:      a = 400 pm  =  4.0 x 10^-8 cm
                                 a = 564 pm  =  5.64 x 10^-8 cm
```

---

# 1. THE MASTER TABLE — THE WHOLE CHAPTER IN ONE BOX

```
  +-------+----+---------------+--------+--------+---------------------+
  | TYPE  | Z  | a and r       | PACK % | C.N.   | EXAMPLES            |
  +-------+----+---------------+--------+--------+---------------------+
  | SC    | 1  | a = 2 r       | 52.4   |   6    | Po                  |
  | BCC   | 2  | a = 4r/sqrt3  | 68     |   8    | Li,Na,K,Cs,Ba,Cr,W  |
  | FCC   | 4  | a = 4r/sqrt2  | 74     |  12    | Cu,Ag,Au,Al,Ni,Pt   |
  | HCP   | 6  |   -           | 74     |  12    | Mg,Zn,Cd,Be,Ti,Co   |
  +-------+----+---------------+--------+--------+---------------------+

  FREE SPACE:   SC  47.6 %      BCC  32 %      FCC = HCP  26 %
```

| Formula | When to use |
|---|---|
| `Z = 1, 2, 4` | any counting question, and every density numerical |
| `a = 2r` | simple cubic — atoms touch along the **edge** |
| `a = 4r/sqrt(3)` | bcc — atoms touch along the **body diagonal** |
| `a = 4r/sqrt(2) = 2 sqrt(2) r` | fcc — atoms touch along the **face diagonal** |

---

# 2. COUNTING ATOMS IN A UNIT CELL

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     POSITION          SHARED BY        CONTRIBUTION                 |
  |   ------------------------------------------------------            |
  |     CORNER            8 cells               1/8                     |
  |     EDGE centre       4 cells               1/4                     |
  |     FACE centre       2 cells               1/2                     |
  |     BODY centre       1 cell                 1                      |
  |                                                                     |
  +---------------------------------------------------------------------+

     SIMPLE CUBIC   Z = 8 x 1/8                   =  1
     BODY CENTRED   Z = 8 x 1/8  +  1             =  2
     FACE CENTRED   Z = 8 x 1/8  +  6 x 1/2       =  4
     END CENTRED    Z = 8 x 1/8  +  2 x 1/2       =  2
```

| Formula | When to use |
|---|---|
| corner x 1/8 | "atoms of A are at the corners …" |
| edge x 1/4 | "… and B at the edge centres" |
| face x 1/2 | fcc, or "B at the face centres" |
| body x 1 | bcc, or "C at the body centre" |

---

# 3. GEOMETRY OF THE CUBE

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     face diagonal   =   sqrt(2)  x  a     =  1.414 a                |
  |                                                                     |
  |     body diagonal   =   sqrt(3)  x  a     =  1.732 a                |
  |                                                                     |
  |     volume of cube  =   a^3                                         |
  |                                                                     |
  |     volume of one sphere  =  (4/3) pi r^3                           |
  |                                                                     |
  +---------------------------------------------------------------------+

  ATOMS LYING ALONG EACH LINE, and what they add up to:

     SC   edge          :  r + r         =  2 r   =  a
     FCC  face diagonal :  r + 2r + r    =  4 r   =  sqrt(2) a
     BCC  body diagonal :  r + 2r + r    =  4 r   =  sqrt(3) a
```

---

# 4. PACKING EFFICIENCY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                          Z  x  (4/3) pi r^3                         |
  |    PACKING  =  100  x  ------------------------                     |
  |    EFFICIENCY                    a^3                                |
  |                                                                     |
  +---------------------------------------------------------------------+

  SIMPLE CUBIC       100 x pi / 6                =  52.4 %
  BODY CENTRED       100 x pi sqrt(3) / 8        =  68.0 %
  FACE CENTRED       100 x pi / (3 sqrt(2))      =  74.0 %
  HEXAGONAL c.p.     same as fcc                 =  74.0 %

  2-D SQUARE packing     52.4 %       C.N. 4
  2-D HEXAGONAL packing  60.4 %       C.N. 6
```

| Formula | When to use |
|---|---|
| `pi/6` | asked to *derive* the 52.4 % of simple cubic |
| `pi sqrt(3)/8` | asked to *derive* the 68 % of bcc |
| `pi/(3 sqrt2)` | asked to *derive* the 74 % of fcc / ccp |
| `free space = 100 − P.E.` | "percentage of void space in …" |

---

# 5. *** DENSITY OF A UNIT CELL *** — the one they always ask

```
  +=====================================================================+
  |                                                                     |
  |                              Z  x  M                                |
  |                     d   =  ---------------                          |
  |                             a^3  x  NA                              |
  |                                                                     |
  |     d   = density              g / cm^3                             |
  |     Z   = atoms per unit cell  1 (SC) , 2 (BCC) , 4 (FCC)           |
  |     M   = atomic/molar mass    g / mol                              |
  |     a   = edge length          cm      (NOT pm, NOT m)              |
  |     NA  = 6.022 x 10^23        / mol                                |
  |                                                                     |
  +=====================================================================+

  REARRANGED FOR EVERY VERSION OF THE QUESTION:

  +---------------------------------------------------------------------+
  |                                                                     |
  |     find Z   ->      Z   =   d  x  a^3  x  NA  /  M                 |
  |                                                                     |
  |     find M   ->      M   =   d  x  a^3  x  NA  /  Z                 |
  |                                                                     |
  |     find a   ->     a^3  =   Z  x  M  /  ( d  x  NA )               |
  |                              then take the CUBE ROOT                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `d = ZM/(a^3 NA)` | edge length and atomic mass given → find density |
| `Z = d a^3 NA / M` | density and edge given → **identify SC / BCC / FCC** |
| `M = d a^3 NA / Z` | "calculate the atomic mass of the element" |
| `a^3 = ZM/(d NA)` | "calculate the edge length of the unit cell" |
| `number of cells = (w/M) NA / Z` | "how many unit cells in w grams of …" |

```
  RELATED SMALL FORMULAE

     mass of one unit cell      =   Z M / NA           gram

     volume of one unit cell    =   a^3                cm^3

                                     w
     number of atoms in w gram  =  ----- x NA
                                     M

                                  number of atoms
     number of unit cells     =  -----------------
                                        Z
```

---

# 6. VOIDS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   For  N  close packed spheres:                                     |
  |                                                                     |
  |        OCTAHEDRAL voids   =   N                                     |
  |        TETRAHEDRAL voids  =   2 N                                   |
  |        TOTAL voids        =   3 N                                   |
  |                                                                     |
  |   In an FCC unit cell (Z = 4):                                      |
  |        octahedral voids   =   4    ( 1 body + 12 edges x 1/4 )      |
  |        tetrahedral voids  =   8    ( centre of each of 8 sub-cubes )|
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Void | Surrounded by | C.N. of void | r(void)/r(sphere) | Size |
|---|---|---|---|---|
| Trigonal | 3 spheres | 3 | 0.155 | tiniest |
| **Tetrahedral** | **4 spheres** | **4** | **0.225** | small |
| **Octahedral** | **6 spheres** | **6** | **0.414** | bigger |
| Cubic | 8 spheres | 8 | 0.732 | biggest |

```
  MEMORY:   "TETRA is TWO in number but TINY (0.225)
             OCTA  is ONE in number but OPEN (0.414)"

  r(tetrahedral void)  =  0.225 x r
  r(octahedral  void)  =  0.414 x r
```

---

# 7. RADIUS RATIO RULE

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                            r ( cation )                             |
  |     RADIUS RATIO   =   ---------------------                        |
  |                            r ( anion  )                             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Radius ratio | Coordination number | Geometry | Example |
|---|---|---|---|
| 0.155 – 0.225 | 3 | Trigonal planar | B2O3 |
| 0.225 – 0.414 | 4 | Tetrahedral | ZnS, CuCl |
| 0.414 – 0.732 | 6 | Octahedral | NaCl, MgO, KBr |
| 0.732 – 1.000 | 8 | Body centred cubic | CsCl, CsBr, NH4Cl |

```
  THE FOUR NUMBERS:   0.155   0.225   0.414   0.732
  THE FOUR ANSWERS:      3       4       6       8
```

---

# 8. THE SEVEN CRYSTAL SYSTEMS AND FOURTEEN BRAVAIS LATTICES

| System | Edges | Angles | Lattices | No. | Example |
|---|---|---|---|---|---|
| Cubic | a = b = c | all 90° | P, I, F | 3 | NaCl, Cu, ZnS |
| Tetragonal | a = b ≠ c | all 90° | P, I | 2 | SnO2, TiO2 |
| Orthorhombic | a ≠ b ≠ c | all 90° | P, I, F, C | 4 | Rhombic S, KNO3 |
| Hexagonal | a = b ≠ c | 90°, 90°, 120° | P | 1 | Graphite, ZnO |
| Rhombohedral | a = b = c | all equal, ≠ 90° | P | 1 | CaCO3, HgS |
| Monoclinic | a ≠ b ≠ c | 90°, 90°, β ≠ 90° | P, C | 2 | Monoclinic S |
| Triclinic | a ≠ b ≠ c | all different, ≠ 90° | P | 1 | K2Cr2O7, CuSO4.5H2O |

```
  COUNT:  3 + 2 + 4 + 1 + 1 + 2 + 1  =  14
  P = primitive , I = body centred , F = face centred , C = end centred
```

---

# 9. CLASSIFICATION OF SOLIDS — the two memory tables

## 9.1 Crystalline versus amorphous

| Point | Crystalline | Amorphous |
|---|---|---|
| Order | Long range | Short range |
| Shape | Definite geometrical | Irregular |
| Melting point | Sharp | No sharp m.p., softens |
| Heat of fusion | Definite | Not definite |
| Cleavage | Clean flat faces | Irregular surfaces |
| Directional properties | **Anisotropic** | **Isotropic** |
| Nature | True solid | **Pseudo solid / supercooled liquid** |
| Example | NaCl, quartz, diamond, metals | Glass, rubber, plastic, quartz glass |

## 9.2 The four crystalline types

| Type | Particles | Force | Nature | M.P. | Conductivity | Examples |
|---|---|---|---|---|---|---|
| Ionic | Ions | Electrostatic | Hard, brittle | High | Only when molten / aqueous | NaCl, MgO, ZnS |
| Covalent network | Atoms | Covalent bonds | Very hard | Very high | Insulator (graphite conducts) | Diamond, SiC, SiO2 |
| Molecular non-polar | Molecules | London forces | Very soft | Very low | Insulator | H2, I2, CO2, Ar |
| Molecular polar | Molecules | Dipole–dipole | Soft | Low | Insulator | HCl(s), SO2(s) |
| Molecular H-bonded | Molecules | Hydrogen bonds | Hard-ish | Low | Insulator | Ice, HF |
| Metallic | Kernels + e- sea | Metallic bond | Malleable, ductile | Low to very high | Conductor in solid **and** molten state | Cu, Ag, Fe, alloys |

---

# 10. DEFECTS — the facts sheet

```
  +---------------------------------------------------------------------+
  |                      SCHOTTKY            FRENKEL                    |
  |  ----------------------------------------------------------------   |
  |  what happens      a CATION and an     the smaller ion MOVES        |
  |                    ANION are MISSING   into an INTERSTITIAL site    |
  |                                                                     |
  |  coordination no.  HIGH                LOW                          |
  |  size difference   SMALL               LARGE                        |
  |  DENSITY           DECREASES           NO CHANGE                    |
  |  dielectric const. no change           INCREASES                    |
  |  neutrality        preserved           preserved                    |
  |  examples          NaCl KCl KBr        ZnS AgCl AgBr AgI            |
  |                    CsCl AgBr                                        |
  +---------------------------------------------------------------------+

  AgBr shows BOTH defects.
```

| Defect | Effect on density |
|---|---|
| Vacancy / Schottky | **Decreases** |
| Interstitial | Increases |
| Frenkel | **No change** |
| Impurity (SrCl2 in NaCl) | Slight decrease (cation vacancies) |

```
  NON-STOICHIOMETRIC DEFECTS

  METAL EXCESS
     (a) ANION VACANCY holding an electron  =  F-CENTRE  ->  COLOUR
             NaCl + Na vapour  ->  YELLOW
             KCl  + K  vapour  ->  VIOLET (lilac)
             LiCl + Li vapour  ->  PINK
     (b) EXTRA CATION in an interstitial site
             ZnO --(heat)--> Zn2+ + (1/2) O2 + 2 e-
             white -> YELLOW on heating
     Both give n-TYPE semiconductors.

  METAL DEFICIENCY
             FeO is really Fe(0.95)O
             3 Fe2+  ->  2 Fe3+  +  one cation vacancy
     Gives a p-TYPE semiconductor.

  IMPURITY DEFECT
             SrCl2 doped into NaCl:
             1 Sr2+ replaces 2 Na+ but fills only 1 site
             ->  number of cation vacancies  =  number of Sr2+ ions

             cation vacancies per mole  =  (mol fraction of SrCl2) x NA
```

---

# 11. ELECTRICAL PROPERTIES

```
  +---------------------------------------------------------------------+
  |  CONDUCTOR       bands OVERLAP or are partly filled                 |
  |                  conductivity 10^4 to 10^7 ohm-1 m-1                |
  |                  conductivity DECREASES on heating                  |
  |                                                                     |
  |  SEMICONDUCTOR   SMALL forbidden gap, about 0.5 to 3 eV             |
  |                  conductivity 10^-6 to 10^4 ohm-1 m-1               |
  |                  conductivity INCREASES on heating                  |
  |                  Si gap ~ 1.1 eV ,  Ge gap ~ 0.7 eV                 |
  |                                                                     |
  |  INSULATOR       LARGE forbidden gap, more than 3 eV                |
  |                  conductivity 10^-20 to 10^-10 ohm-1 m-1            |
  |                  diamond ~ 6 eV                                     |
  +---------------------------------------------------------------------+
```

| Doping | Group of dopant | Extra particle | Carrier | Type |
|---|---|---|---|---|
| Si or Ge + P, As, Sb, Bi | **Group 15** | one **extra electron** | negative | **n-type** |
| Si or Ge + B, Al, Ga, In | **Group 13** | one electron **hole** | positive | **p-type** |

```
  MEMORY:   "15 GIVES  ->  n-type          13 TAKES  ->  p-type"

  COMPOUND SEMICONDUCTORS  (average valence electrons = 4)

     13-15 :   InSb , AlP , GaAs , GaP        (GaAs used in LEDs)
     12-16 :   ZnS , CdS , CdSe , HgTe        (more ionic character)
```

---

# 12. MAGNETIC PROPERTIES

```
  +---------------------------------------------------------------------+
  |  TYPE               ALIGNMENT           FIELD          EXAMPLES     |
  |  ----------------------------------------------------------------   |
  |  PARAMAGNETIC       random / unpaired   weakly         O2, Cu2+,    |
  |                     ^ > v < ^           ATTRACTED      Fe3+, TiO    |
  |                                                                     |
  |  DIAMAGNETIC        all paired          weakly         NaCl, H2O,   |
  |                     ^v ^v ^v ^v         REPELLED       C6H6, TiO2   |
  |                                                                     |
  |  FERROMAGNETIC      all parallel        STRONGLY       Fe, Co, Ni,  |
  |                     ^ ^ ^ ^ ^ ^         ATTRACTED      Gd, CrO2     |
  |                                         (permanent)                 |
  |                                                                     |
  |  ANTIFERROMAGNETIC  opposite & EQUAL    no net         MnO, MnO2,   |
  |                     ^ v ^ v ^ v         effect         FeO, NiO     |
  |                                                                     |
  |  FERRIMAGNETIC      opposite & UNEQUAL  weakly         Fe3O4,       |
  |                     ^ ^ v ^ ^ v         attracted      MgFe2O4,     |
  |                                                        ZnFe2O4      |
  +---------------------------------------------------------------------+

  CURIE TEMPERATURE - above it a ferromagnetic solid becomes
                      PARAMAGNETIC.   (Fe: 1043 K)
```

---

# 13. QUICK STRUCTURE FACTS THAT GET ASKED

```
  NaCl (rock salt)   Cl- in ccp , Na+ in ALL octahedral voids
                     C.N. 6 : 6      Z = 4 formula units
                     a  =  2 ( r+ + r- )

  ZnS (zinc blende)  S2- in ccp , Zn2+ in HALF the tetrahedral voids
                     C.N. 4 : 4      Z = 4 formula units

  CaF2 (fluorite)    Ca2+ in ccp , F- in ALL tetrahedral voids
                     C.N. 8 : 4      Z = 4 formula units

  Na2O (antifluorite) O2- in ccp , Na+ in ALL tetrahedral voids
                     C.N. 4 : 8

  CsCl               Cl- at corners , Cs+ at the body centre
                     C.N. 8 : 8      Z = 1 formula unit
                     sqrt(3) a  =  2 ( r+ + r- )

  DIAMOND            C in ccp + half the tetrahedral voids , Z = 8
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   1.    d  =  Z M / ( a^3 NA )                                      |
  |                                                                     |
  |   2.    Z  :   SC = 1 ,  BCC = 2 ,  FCC = 4 ,  HCP = 6              |
  |                                                                     |
  |   3.    SC   a = 2 r                                                |
  |                                                                     |
  |   4.    BCC  a = 4 r / sqrt(3)        i.e.  r = 1.732 a / 4         |
  |                                                                     |
  |   5.    FCC  a = 4 r / sqrt(2) = 2 sqrt(2) r    i.e. r = a / 2.828  |
  |                                                                     |
  |   6.    Packing efficiency:  52.4 %  ,  68 %  ,  74 %               |
  |                                                                     |
  |   7.    Coordination number: 6 , 8 , 12                             |
  |                                                                     |
  |   8.    Octahedral voids = N  ,  Tetrahedral voids = 2 N            |
  |                                                                     |
  |   9.    r(tet)/r = 0.225      r(oct)/r = 0.414                      |
  |                                                                     |
  |  10.    Radius ratio limits:  0.155 / 0.225 / 0.414 / 0.732         |
  |                 giving C.N.:      3   /   4   /   6   /   8         |
  |                                                                     |
  |  11.    Corner 1/8 , Edge 1/4 , Face 1/2 , Body 1                   |
  |                                                                     |
  |  12.    1 pm = 10^-10 cm        NA = 6.022 x 10^23                  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  AND THE 6 FACTS THAT ARE PURE FREE MARKS

     Amorphous  =  pseudo solid  =  supercooled liquid  =  ISOTROPIC
     Crystalline = true solid = sharp m.p. = ANISOTROPIC
     Schottky    ->  density DECREASES
     Frenkel     ->  density UNCHANGED
     F-centre    ->  electron in an anion vacancy -> COLOUR
     Group 15 dopant -> n-type ;  Group 13 dopant -> p-type
```
