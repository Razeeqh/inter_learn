# Electrostatic Potential and Capacitance — Mind Map

**Physics 2nd Year · Chapter 5**
**The biggest single source of 8-mark marks in the electricity section.
One derivation (parallel plate capacitor) is asked again and again.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
              ELECTROSTATIC  POTENTIAL  AND  CAPACITANCE
                              |
        +---------------------+---------------------+
        |                     |                     |
   "HOW MUCH WORK        "WHAT DO THE          "HOW MUCH CHARGE
    TO BRING A           CONDUCTORS AND         CAN I STORE?"
    CHARGE HERE?"        DIELECTRICS DO?"
        |                     |                     |
   -----+-----          ------+------          -----+-----
   |         |          |           |          |         |
POTENTIAL  POTENTIAL  CONDUCTORS  DIELECTRICS  CAPACITOR  ENERGY
   V        ENERGY U      |           |            |         |
   |          |           |           |            |         |
   |          |      E inside = 0   Polar /     C = Q / V   U = QV/2
   |          |      E outside is   Non-polar      |         |
   |          |      perpendicular    |            |      u = energy
   |          |      Charge on the  POLARISATION   |       density
   |          |      SURFACE          |            |
   |          |           |        E reduced    +--+--+
   |          |      ELECTROSTATIC  E0 / kappa  |     |
   |          |       SHIELDING                 |     |
   |          |                            PARALLEL  COMBINATIONS
   |          |                             PLATE       |
   |          |                                |     +--+--+
   |          |                          C = e0 A/d  |     |
   |          |                                |  SERIES PARALLEL
   |          |                            DIELECTRIC   |     |
   |          |                              SLAB    1/C sum  C sum
   |          |                                |
   |          |                          Battery ON / OFF
   |          |
   |          +-------------------+-------------------+
   |          |                   |                   |
   |     TWO CHARGES         THREE CHARGES        DIPOLE IN A
   |     U = kq1q2/r         add all 3 pairs      FIELD
   |                                              U = -pE cos theta
   |
   +--------------+--------------+--------------+
   |              |              |              |
POINT CHARGE   SYSTEM OF      DIPOLE        EQUIPOTENTIAL
V = kq/r       CHARGES        V = kp cos    SURFACES
                add V's        theta / r^2      |
                (SCALARS!)                  Perpendicular
                                            to E lines
                                                 |
                                            E = -dV/dr
```

---

## THE 60-SECOND VERSION

Think of a **hill**.

```
  GRAVITY WORLD                    ELECTRIC WORLD
  ---------------------------      ------------------------------
  Height of a point   h            Potential of a point   V
  Mass you carry      m            Charge you carry       q
  Energy stored    U = mgh         Energy stored       U = qV
  Balls roll DOWNhill              Positive charges move to LOW V
  Steep slope = big force          Steep V slope = big field E
```

That single analogy carries about half of this chapter.

The other half: a **capacitor** is a bucket for charge. Give it a
potential difference V and it holds a charge Q. The bigger the plates
and the smaller the gap, the bigger the bucket.

```
  Q  =  C V           C is the size of the bucket (capacitance)
```

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

Paper shape: **Section A 10 x 2 = 20 (answer ALL) · Section B 8 x 4, answer
any 6 = 24 · Section C 3 x 8, answer any 2 = 16.**

```
  +---------------------------------------------+---------+-------+
  |  TOPIC                                      | SECTION | MARKS |
  +---------------------------------------------+---------+-------+
  |  Define electric potential / potential diff |    A    |   2   |
  |  Define capacitance, its SI unit            |    A    |   2   |
  |  What is an equipotential surface?          |    A    |   2   |
  |  Dielectric constant / dielectric strength  |    A    |   2   |
  |  Electrostatic shielding                    |    A    |   2   |
  |  Potential due to a point charge (derive)   |    B    |   4   |
  |  Equipotential surfaces + properties        |    B    |   4   |
  |  Capacitors in SERIES (derivation)          |    B    |   4   |
  |  Capacitors in PARALLEL (derivation)        |    B    |   4   |
  |  Energy stored in a capacitor (derivation)  |    B    |   4   |
  |  Potential energy of 2 or 3 charges         |    B    |   4   |
  |  Dipole in a uniform field: torque + U      |    B    |   4   |
  |  PARALLEL PLATE CAPACITOR full derivation   |    C    |   8   |
  |          + effect of a dielectric slab      |         |       |
  |                              <-- the star question              |
  |  Potential due to a point charge and a      |    C    |   8   |
  |  dipole, with equipotential surfaces        |         |       |
  +---------------------------------------------+---------+-------+

  Realistic haul from this chapter:  10 to 16 marks out of 60.
```

> This chapter **reliably supplies one 8-mark long answer** in Section C,
> almost always the parallel plate capacitor or the dielectric slab.
> Two Section C questions are attempted out of three. Learn that one
> derivation properly and you have half of Section C in your pocket.

---

## THE KEY BOX — learn these before anything else

```
  +----------------------------------------------------------------+
  |                                                                |
  |                       W                                        |
  |    POTENTIAL     V = ---           unit: volt (V) = J / C      |
  |                       q                                        |
  |                                                                |
  |                        1     q              q                  |
  |    POINT CHARGE  V = ------- ---   =   k ------                |
  |                      4 pi e0  r             r                  |
  |                                                                |
  |                     - dV                                       |
  |    FIELD FROM V  E = -----      (E points DOWNhill in V)       |
  |                       dr                                       |
  |                                                                |
  |                       1     q1 q2                              |
  |    ENERGY OF 2   U = ------- -------                           |
  |    CHARGES           4 pi e0    r                              |
  |                                                                |
  |                       Q                                        |
  |    CAPACITANCE   C = ---           unit: farad (F) = C / V     |
  |                       V                                        |
  |                                                                |
  |                       e0 A                                     |
  |    PARALLEL      C = ------                                    |
  |    PLATES              d                                       |
  |                                                                |
  |                       kappa e0 A                               |
  |    WITH A SLAB   C = ------------   (slab fills the gap)       |
  |    FILLING IT             d                                    |
  |                                                                |
  |                     1        1  Q^2      1                     |
  |    ENERGY        U = - Q V = - ----- =  --- C V^2              |
  |                     2        2   C       2                     |
  |                                                                |
  |    SERIES        1/C = 1/C1 + 1/C2 + 1/C3    (C gets SMALLER)  |
  |                                                                |
  |    PARALLEL        C = C1 + C2 + C3          (C gets BIGGER)   |
  |                                                                |
  |    CONSTANTS     e0 = 8.85 x 10^-12  F m^-1                    |
  |                  k  = 1 / (4 pi e0) = 9 x 10^9  N m^2 C^-2     |
  |                                                                |
  +----------------------------------------------------------------+
```

---

## STUDY THIS ORDER

```
  STEP 1   Work, potential energy, and the definition of V
              |  (the hill analogy)
              |
  STEP 2   Potential due to a POINT charge      <-- derive it
              |
  STEP 3   Potential due to a SYSTEM of charges
              |  (just ADD the numbers — V is a SCALAR)
              |
     +--------+--------+
     |                 |
  STEP 4          STEP 6
  Potential due   Potential ENERGY of
  to a DIPOLE     a system of charges
     |                 |
  STEP 5          STEP 7
  EQUIPOTENTIAL   Dipole in an external
  SURFACES        field:  U = -pE cos theta
     |                 |
  STEP 8   E = -dV/dr  (the link between the two halves)
              |
  STEP 9   CONDUCTORS in electrostatics
              |  E inside = 0, charge on the surface, SHIELDING
              |
  STEP 10  DIELECTRICS: polar / non-polar, polarisation,
              |  the field is cut down to E0 / kappa
              |
  STEP 11  CAPACITOR and CAPACITANCE,  C = Q / V
              |
  STEP 12  *** PARALLEL PLATE CAPACITOR:  C = e0 A / d ***
              |          <-- THE 8-MARK QUESTION
     +--------+--------+
     |                 |
  STEP 13         STEP 14
  DIELECTRIC      SERIES and PARALLEL
  SLAB inside     combinations
     |                 |
     +--------+--------+
              |
  STEP 15  ENERGY stored, the three forms, energy density
              |
  STEP 16  Loss of energy when two capacitors are joined
              |
  STEP 17  Van de Graaff generator  (short answer only)
```

---

## THE THREE PICTURES YOU MUST BE ABLE TO DRAW

```
  1.  EQUIPOTENTIAL SURFACES OF A POINT CHARGE
      (circles around the charge, field lines shooting outwards
       and cutting them at 90 degrees)

           . - - - .
        .  ,-----.  .
       .  / ,---. \  .           <---- dotted circles = equipotentials
       . | |  +q | | .           <---- straight arrows = field lines
       .  \ `---' /  .
        .  `-----'  .
           ` - - - '


  2.  THE PARALLEL PLATE CAPACITOR

      +Q  ||||||||||||||||||  <- plate of area A
           |    |    |    |      E = sigma / e0
           v    v    v    v      (uniform, downward)      gap = d
      -Q  ||||||||||||||||||


  3.  THE DIELECTRIC SLAB INSIDE THE GAP

      +Q  ||||||||||||||||||
          ####################   <- slab, thickness t, constant kappa
      -Q  ||||||||||||||||||
```

If you can draw these three, you can answer most of the paper.

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  (morning)
     1.  V = W / q , unit volt, and V = k q / r for a point charge.
     2.  Potential of a SYSTEM = simple ADDITION of numbers.
     3.  Equipotential surfaces: definition + 4 properties + 3 pictures.
     4.  Practise 10 small numericals on V = kq/r.

  DAY 1  (evening)
     5.  C = Q / V , the farad, and the factors affecting C.
     6.  *** DERIVE  C = e0 A / d  five times on paper. ***
     7.  Dielectric slab:  C = e0 A / ( d - t + t/kappa ).
     8.  Series and parallel derivations.

  DAY 2  (morning)
     9.  Energy stored: U = QV/2 = CV^2/2 = Q^2/2C , plus the derivation.
    10.  Energy density  u = (1/2) e0 E^2.
    11.  Potential energy of two and three charges.
    12.  Dipole in a field:  U = -pE cos theta , torque = pE sin theta.

  DAY 2  (evening)
    13.  Conductors: E inside = 0, charge on the surface, SHIELDING.
    14.  Dielectrics: polar vs non-polar, polarisation.
    15.  Van de Graaff generator in five lines.
    16.  Re-write the KEY BOX above from memory. Twice.
```

**Do not skip step 6.** One derivation, eight marks, every single year.
