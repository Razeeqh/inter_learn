# Semiconductor Electronics — Concepts Explained Simply

Start here even if you know nothing. This chapter has almost no hard maths.
It is a DRAWING and TALKING chapter. If you can draw five pictures and recite
ten paragraphs, you will score 12 or more marks out of 60 from here alone.

Read every topic slowly. Copy every diagram onto paper with a pencil.
Reading a diagram does nothing. Drawing it three times does everything.

---

# TOPIC 1 — Why do solids have ENERGY BANDS?

## The simple idea

In a single, lonely atom an electron can only sit at certain fixed energy
levels. Think of a staircase: you can stand on step 1 or step 2, never
halfway between.

```
   ONE  ISOLATED  ATOM

        ------------------   n = 3
        ------------------   n = 2
        ------------------   n = 1

   Sharp, separated LEVELS.
```

Now push 10^23 atoms very close together to make a solid crystal. Every atom's
level gets slightly pushed by its neighbours. One sharp level becomes a huge
number of very slightly different levels, packed so tightly they look like a
continuous smear.

That smear is called an **ENERGY BAND**.

```
   ONE ATOM              MANY ATOMS TOGETHER (a solid)

   ----------            ///////////////////////
                         /////  a BAND  ////////
   ----------            ///////////////////////

   sharp level     ->    a band of very many close levels
```

## The two bands that matter

Only the top two bands decide whether the material conducts electricity.

```
  +----------------------+-------------------------------------------+
  |  VALENCE BAND (VB)   |  The band that holds the outermost        |
  |                      |  (valence) electrons. These electrons     |
  |                      |  are BOUND to their atoms.                |
  |                      |  Usually completely FULL.                 |
  +----------------------+-------------------------------------------+
  |  CONDUCTION BAND(CB) |  The next higher band. An electron here    |
  |                      |  is FREE to wander through the crystal    |
  |                      |  and carry current.                       |
  |                      |  Usually EMPTY (or partly filled).        |
  +----------------------+-------------------------------------------+
  |  FORBIDDEN GAP (Eg)  |  The empty space between them. NO         |
  |  = ENERGY BAND GAP   |  electron can have an energy inside this  |
  |                      |  gap. To conduct, an electron must JUMP   |
  |                      |  across it in one go.                     |
  +----------------------+-------------------------------------------+
```

## The analogy that makes it stick

```
   Think of a cinema hall.

   VALENCE BAND      =  the downstairs seats, COMPLETELY FULL.
                        Nobody can move — every seat is taken.

   CONDUCTION BAND   =  the empty balcony upstairs.
                        Anyone up there can walk around freely.

   FORBIDDEN GAP     =  the height of the staircase between them.

   Small staircase -> people can climb up -> current flows.
   Huge staircase  -> nobody climbs      -> no current.
```

**Current needs MOVEMENT. Movement needs EMPTY SPACE.** A completely full band
carries no current, and a completely empty band carries no current either.

> **TRAP:** Students write "the conduction band is where electrons are".
> Wrong. The conduction band is normally EMPTY. It is where electrons GO when
> they get enough energy.

## WORKED EXAMPLE 1

**Q. The energy band gap of silicon is 1.1 eV. Express it in joules.**

```
  1 eV  =  1.6 x 10^-19  J

  Eg  =  1.1 x 1.6 x 10^-19
      =  1.76 x 10^-19  J
```

**Answer: 1.76 x 10^-19 J.**

---

# TOPIC 2 — Classification of METALS, INSULATORS and SEMICONDUCTORS on the basis of energy bands

This is the single most important 4-mark theory question in the chapter.
**Learn to draw all three diagrams side by side.**

```
     CONDUCTOR (METAL)        SEMICONDUCTOR            INSULATOR

  ///////////////////      ///////////////////     ///////////////////
  ////  CONDUCTION //      ////  CONDUCTION //     ////  CONDUCTION //
  ////    BAND     //      ////    BAND     //     ////    BAND     //
  ///////////////////      ///////////////////     ///////////////////
  ///////////////////              ^                        ^
  ////  VALENCE    //              |                        |
  ////    BAND     //          Eg about                     |
  ///////////////////          1 eV or less            Eg more than
                                   |                     3 eV
   NO GAP.                         v                        |
   The two bands            ///////////////////             |
   OVERLAP.  Eg = 0         ////  VALENCE    //             v
                            ////    BAND     //     ///////////////////
                            ///////////////////     ////  VALENCE    //
                                                    ////    BAND     //
                                                    ///////////////////
```

## The comparison table (write this in the exam)

```
  +-----------------+----------------+------------------+-----------------+
  |  PROPERTY       |  CONDUCTOR     |  SEMICONDUCTOR   |  INSULATOR      |
  +-----------------+----------------+------------------+-----------------+
  |  Band gap Eg    |  0 (overlap)   |  about 1 eV      |  more than 3 eV |
  |  Example        |  Cu, Ag, Al    |  Ge (0.72 eV)    |  Diamond (6 eV) |
  |                 |                |  Si (1.1 eV)     |  wood, glass    |
  |  Free electrons |  very many     |  a few           |  practically 0  |
  |  Resistivity    |  10^-8 to      |  10^-5 to        |  10^8 to        |
  |  (ohm m)        |  10^-6         |  10^6            |  10^19          |
  |  Conductivity   |  very high     |  in between      |  almost zero    |
  |  Temp. effect   |  R INCREASES   |  R DECREASES     |  R decreases    |
  |  on resistance  |  with temp     |  with temp       |  very slowly    |
  |  Temp. coeff.   |  POSITIVE      |  NEGATIVE        |  negative       |
  |  At 0 K         |  still conducts|  perfect         |  perfect        |
  |                 |                |  INSULATOR       |  insulator      |
  +-----------------+----------------+------------------+-----------------+
```

## Why each one behaves that way

```
  METAL         The bands overlap, so there is no gap at all. Electrons
                slide into empty states with the tiniest voltage.
                Current flows always.

  SEMICONDUCTOR The gap is small (about 1 eV). At 0 K nobody can jump,
                so it is an insulator. Heat it, and some electrons get
                enough thermal energy to jump. Current begins to flow.

  INSULATOR     The gap is huge (over 3 eV). Ordinary heat or ordinary
                voltage cannot push an electron across. No current.
```

> **TRAP:** Never say "a semiconductor is halfway between a metal and an
> insulator in every way." It is halfway in RESISTIVITY, but its temperature
> behaviour is the OPPOSITE of a metal's, not halfway.

## WORKED EXAMPLE 2

**Q. A material has a forbidden energy gap of 5.6 eV. Classify it and give
one reason.**

```
  Eg = 5.6 eV  which is MORE than 3 eV.

  ->  It is an INSULATOR.

  Reason: the gap is so large that thermal energy at room temperature
          (about 0.026 eV) cannot lift an electron from the valence
          band to the conduction band.
```

**Answer: Insulator.**

---

# TOPIC 3 — INTRINSIC semiconductors: electrons and HOLES

## What "intrinsic" means

An **intrinsic semiconductor** is a semiconductor in its PURE form, with no
impurity added at all. Pure germanium or pure silicon.

Both Ge and Si are **tetravalent** — 4 electrons in the outermost shell. Each
atom shares its 4 electrons with 4 neighbours, forming **covalent bonds**.
Every electron is locked into a bond.

```
   PURE  SILICON  CRYSTAL  AT  0 K   (every bond complete)

        Si  ==  Si  ==  Si
        ||      ||      ||
        Si  ==  Si  ==  Si
        ||      ||      ||
        Si  ==  Si  ==  Si

   ==  and  ||  are covalent bonds (2 shared electrons each).
   Nothing is free.  ->  BEHAVES AS A PERFECT INSULATOR AT 0 K.
```

## What happens when you heat it

Give the crystal heat (or light). A bond somewhere breaks. The electron that
was in the bond runs away as a **free electron**. The empty place it leaves
behind in the bond is called a **HOLE**.

```
   AT  ROOM  TEMPERATURE   (a bond has broken)

        Si  ==  Si  ==  Si
        ||      ||      ||
        Si  ==  Si  --  Si         <-- broken bond
        ||      ||      (o)             (o) = HOLE
        Si  ==  Si  ==  Si
                        (e-) --->       free ELECTRON runs away
```

## What exactly is a HOLE?

```
  +-------------------------------------------------------------------+
  |  A HOLE is the VACANCY created in a covalent bond when an         |
  |  electron leaves it.                                              |
  |                                                                   |
  |  It behaves like a particle carrying a POSITIVE charge of         |
  |  magnitude  +1.6 x 10^-19 C.                                      |
  |                                                                   |
  |  A hole is NOT a real particle. It is an absence of an electron.  |
  +-------------------------------------------------------------------+
```

## The analogy for a hole

```
   A row of cinema seats, all full except one empty seat at the left.

      [P][P][P][P][ ]        the empty seat is at the RIGHT
                    ^
   The person on the left of it shifts right into it:

      [P][P][P][ ][P]        the empty seat MOVED LEFT
                 ^
      [P][P][ ][P][P]
              ^
   The PEOPLE all moved right. The EMPTY SEAT moved LEFT.

   PEOPLE  =  electrons  (move towards the + terminal)
   EMPTY SEAT = the HOLE (appears to move towards the - terminal)
```

So a hole moving right is really electrons moving left. But it is far easier
to speak of one moving hole than of a million shuffling electrons.

## How conduction happens in an intrinsic semiconductor

```
  When a battery is connected:

     FREE ELECTRONS drift towards the POSITIVE terminal   (electron current)
     HOLES          drift towards the NEGATIVE terminal   (hole current)

  TOTAL CURRENT  =  electron current  +  hole current

           I  =  I(e)  +  I(h)
```

Both carriers move in opposite DIRECTIONS but because their charges are also
opposite, both currents ADD in the same sense.

## The two key facts about intrinsic material

```
  1.  Electrons and holes are always created in PAIRS.
      So their numbers are equal:

           n(e)  =  n(h)  =  n(i)         n(i) = intrinsic concentration

  2.  Conductivity is very LOW and depends only on temperature.

      Typical values at 300 K:
           Ge  :  n(i)  =  2.4 x 10^19  per m^3
           Si  :  n(i)  =  1.5 x 10^16  per m^3
```

Also happening all the time is **recombination**: a wandering electron falls
into a hole and both disappear. At a steady temperature, the rate of
generation equals the rate of recombination, so n(i) stays constant.

> **TRAP:** A hole is NOT a proton and NOT an ion. It is a vacancy in a bond.
> Writing "hole = positive ion" loses the mark.

## WORKED EXAMPLE 3

**Q. In a pure silicon crystal the intrinsic carrier concentration is
1.5 x 10^16 m^-3. Find the number of electrons and the number of holes.**

```
  For an INTRINSIC semiconductor:

      n(e)  =  n(h)  =  n(i)

  So  n(e)  =  1.5 x 10^16  m^-3
      n(h)  =  1.5 x 10^16  m^-3
```

**Answer: both equal 1.5 x 10^16 m^-3.**

---

# TOPIC 4 — EXTRINSIC semiconductors and DOPING

## The problem with pure material

A pure semiconductor conducts far too little to be useful. We need to raise
its conductivity in a controlled way. The trick is **doping**.

```
  +-------------------------------------------------------------------+
  |  DOPING = deliberately adding a small, controlled amount of a     |
  |           suitable IMPURITY to a pure semiconductor in order to   |
  |           increase its conductivity.                              |
  |                                                                   |
  |  The doped material is called an EXTRINSIC semiconductor.         |
  |                                                                   |
  |  Typical doping level:  1 impurity atom per 10^6 (one million)    |
  |                         semiconductor atoms.                      |
  +-------------------------------------------------------------------+
```

Even that tiny amount can raise conductivity by a factor of thousands.

## Rules the dopant must obey

```
  1.  The dopant atom must be nearly the SAME SIZE as the host atom,
      so the crystal is not distorted.
  2.  Only two choices make sense for a tetravalent host:
          PENTAVALENT (5 valence electrons)  ->  gives n-type
          TRIVALENT   (3 valence electrons)  ->  gives p-type
```

## The two families

```
  +---------------------+---------------------------------------------+
  |  PENTAVALENT        |  Phosphorus (P), Arsenic (As),              |
  |  (5 electrons)      |  Antimony (Sb), Bismuth (Bi)                |
  |                     |  Memory: "PASB" / "Please Ask Sb Bi"        |
  +---------------------+---------------------------------------------+
  |  TRIVALENT          |  Boron (B), Aluminium (Al),                 |
  |  (3 electrons)      |  Indium (In), Gallium (Ga)                  |
  |                     |  Memory: "BAIG"                             |
  +---------------------+---------------------------------------------+
```

---

# TOPIC 5 — n-TYPE semiconductor

## What happens in the crystal

Add a **pentavalent** atom (say arsenic) to silicon. Arsenic has 5 valence
electrons. Four of them pair up with the four neighbouring Si atoms. The
**fifth electron has no bond to join**, so it is only very loosely held and
becomes free at room temperature.

```
   n-TYPE  :  Si  doped  with  ARSENIC  (pentavalent)

        Si  ==  Si  ==  Si
        ||      ||      ||
        Si  ==  As  ==  Si
        ||      ||      ||
        Si  ==  Si  ==  Si
                |
               (e-)  <---  the FIFTH electron, FREE
```

Because the impurity DONATES a free electron, it is called a **DONOR** impurity.

## The band diagram of n-type

```
        n - TYPE   SEMICONDUCTOR

   ///////////////////////////////
   ///////  CONDUCTION BAND  /////
   ///////////////////////////////
              ^
              |  only about 0.01 eV  (very small step)
   - - - - - - - - - - - - - - - -   DONOR LEVEL (Ed)
              |                      just BELOW the conduction band
              |
              |     Eg
              |
              v
   ///////////////////////////////
   ///////   VALENCE BAND   //////
   ///////////////////////////////

   The donor level sits only a hair below the conduction band, so even
   room temperature is enough to push those electrons up into it.
```

## Key facts of n-type

```
  +---------------------------------------------------------------+
  |  Dopant                  :  PENTAVALENT (P, As, Sb, Bi)       |
  |  Impurity called         :  DONOR                             |
  |  Extra energy level      :  DONOR LEVEL, just below the CB    |
  |  MAJORITY carriers       :  ELECTRONS                         |
  |  MINORITY carriers       :  HOLES                             |
  |  Concentration relation  :  n(e)  >>  n(h)                    |
  |  Current mainly due to   :  electrons                         |
  |  Net charge on crystal   :  ZERO (electrically NEUTRAL)       |
  +---------------------------------------------------------------+
```

> **TRAP:** n-type does NOT mean the crystal is negatively charged. The
> arsenic atom keeps its own proton, so the whole crystal is still neutral.
> "n" only tells you that the majority carriers are negative.

---

# TOPIC 6 — p-TYPE semiconductor

## What happens in the crystal

Add a **trivalent** atom (say boron) to silicon. Boron has only 3 valence
electrons. It bonds with three neighbouring Si atoms, but the fourth bond is
left **incomplete** — there is a vacancy, that is, a **hole**.

```
   p-TYPE  :  Si  doped  with  BORON  (trivalent)

        Si  ==  Si  ==  Si
        ||      ||      ||
        Si  ==   B  --  Si       <--  incomplete bond
        ||      ||      (o)           (o) = HOLE
        Si  ==  Si  ==  Si
```

Because the impurity ACCEPTS an electron from a nearby bond to complete
itself, it is called an **ACCEPTOR** impurity.

## The band diagram of p-type

```
        p - TYPE   SEMICONDUCTOR

   ///////////////////////////////
   ///////  CONDUCTION BAND  /////
   ///////////////////////////////
              ^
              |
              |     Eg
              |
              |
   - - - - - - - - - - - - - - - -   ACCEPTOR LEVEL (Ea)
              ^                      just ABOVE the valence band
              |  only about 0.01 eV  (very small step)
              v
   ///////////////////////////////
   ///////   VALENCE BAND   //////
   ///////////////////////////////

   The acceptor level sits just above the valence band, so valence
   electrons hop up into it very easily, leaving HOLES behind in the
   valence band.
```

## Key facts of p-type

```
  +---------------------------------------------------------------+
  |  Dopant                  :  TRIVALENT (B, Al, In, Ga)         |
  |  Impurity called         :  ACCEPTOR                          |
  |  Extra energy level      :  ACCEPTOR LEVEL, just above the VB |
  |  MAJORITY carriers       :  HOLES                             |
  |  MINORITY carriers       :  ELECTRONS                         |
  |  Concentration relation  :  n(h)  >>  n(e)                    |
  |  Current mainly due to   :  holes                             |
  |  Net charge on crystal   :  ZERO (electrically NEUTRAL)       |
  +---------------------------------------------------------------+
```

## The side-by-side table (a guaranteed 4-mark question)

```
  +----------------------+---------------------+----------------------+
  |  POINT               |  n-TYPE             |  p-TYPE              |
  +----------------------+---------------------+----------------------+
  |  Dopant valency      |  5 (pentavalent)    |  3 (trivalent)       |
  |  Dopant examples     |  P, As, Sb, Bi      |  B, Al, In, Ga       |
  |  Impurity name       |  Donor              |  Acceptor            |
  |  Impurity level      |  below CB           |  above VB            |
  |  Majority carriers   |  Electrons          |  Holes               |
  |  Minority carriers   |  Holes              |  Electrons           |
  |  Impurity ion left   |  POSITIVE ion       |  NEGATIVE ion        |
  |  Overall charge      |  Neutral            |  Neutral             |
  +----------------------+---------------------+----------------------+
```

## WORKED EXAMPLE 4

**Q. Pure germanium is doped with indium. What type of semiconductor is
formed and what are the majority carriers?**

```
  Indium (In) has 3 valence electrons  ->  TRIVALENT  ->  ACCEPTOR

  ->  p-TYPE semiconductor
  ->  Majority carriers are HOLES,  minority carriers are ELECTRONS
```

**Answer: p-type; majority carriers are holes.**

---

# TOPIC 7 — The MASS ACTION LAW

## Statement

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |            n(e)   x   n(h)   =   n(i)^2                         |
  |                                                                 |
  |  n(e)  =  number of free electrons per unit volume              |
  |  n(h)  =  number of holes per unit volume                       |
  |  n(i)  =  intrinsic carrier concentration at that temperature   |
  |                                                                 |
  |  This holds for BOTH intrinsic and extrinsic material, at a     |
  |  FIXED temperature.                                             |
  +-----------------------------------------------------------------+
```

## What it means in plain English

```
  The PRODUCT of the two carrier concentrations is fixed.

  So if doping pushes one of them UP, the other must come DOWN
  by exactly the same factor.

  n-type : you flood it with electrons  ->  holes become very few
  p-type : you flood it with holes      ->  electrons become very few
```

The reason: more electrons means more of them bump into holes and recombine,
so the hole population is driven down until the product returns to n(i)^2.

## Charge neutrality (the companion equation)

```
   n(e)  +  N(A)   =   n(h)  +  N(D)

   N(A) = acceptor ion concentration (negative ions)
   N(D) = donor ion concentration (positive ions)

   Useful approximations:
       In n-type :   n(e)  is about  N(D)
       In p-type :   n(h)  is about  N(A)
```

## WORKED EXAMPLE 5

**Q. A silicon crystal has n(i) = 1.5 x 10^16 m^-3. It is doped so that the
electron concentration becomes 5 x 10^22 m^-3. Find the hole concentration
and say which carriers are the majority carriers.**

```
  Mass action law:      n(e) x n(h)  =  n(i)^2

                            n(i)^2
              n(h)   =   ------------
                            n(e)

                        ( 1.5 x 10^16 )^2
                     =  --------------------
                          5 x 10^22

                        2.25 x 10^32
                     =  ---------------
                          5 x 10^22

                     =  0.45 x 10^10

                     =  4.5 x 10^9   m^-3
```

```
  n(e) = 5 x 10^22  is HUGE compared with  n(h) = 4.5 x 10^9

  ->  ELECTRONS are the majority carriers
  ->  the material is n-TYPE
```

**Answer: n(h) = 4.5 x 10^9 m^-3; electrons are the majority carriers (n-type).**

---

# TOPIC 8 — Effect of TEMPERATURE on conductivity (and why it is opposite to a metal)

## In a semiconductor

```
  Temperature UP
        |
        v
  More covalent bonds break
        |
        v
  More electron-hole PAIRS created  ->  n(i) increases rapidly
        |
        v
  CONDUCTIVITY  INCREASES
        |
        v
  RESISTANCE  DECREASES

  ->  a semiconductor has a NEGATIVE temperature coefficient of
      resistance.
```

At 0 K a pure semiconductor has no broken bonds at all, so it behaves as a
**perfect insulator**.

## In a metal

```
  Temperature UP
        |
        v
  The NUMBER of free electrons does NOT change (it is already maximum)
        |
        v
  But the metal ions VIBRATE more violently
        |
        v
  Electrons COLLIDE more often, drift velocity falls
        |
        v
  RESISTANCE  INCREASES

  ->  a metal has a POSITIVE temperature coefficient of resistance.
```

## The one-line reason for the difference

```
  +------------------------------------------------------------------+
  |  In a SEMICONDUCTOR, heating CREATES NEW CHARGE CARRIERS, and    |
  |  this gain beats the extra scattering, so resistance falls.      |
  |                                                                  |
  |  In a METAL, no new carriers can be created (the band is         |
  |  already full of free electrons), so only the extra scattering   |
  |  shows up, and resistance rises.                                 |
  +------------------------------------------------------------------+
```

## The picture

```
     R                                R
     |     METAL                      |  SEMICONDUCTOR
     |          /                     |\
     |         /                      | \
     |        /                       |  \
     |       /                        |   \
     |      /                         |     \
     |     /                          |        \____
     |    /                           |             ------____
     +----------------------- T       +------------------------- T

     R increases with T               R decreases with T
     (positive temp. coefficient)     (negative temp. coefficient)
```

## Conductivity formula

```
   sigma  =  e  [  n(e) x mu(e)   +   n(h) x mu(h)  ]

   e     = charge on an electron = 1.6 x 10^-19 C
   mu(e) = mobility of electrons
   mu(h) = mobility of holes

   For an INTRINSIC semiconductor, n(e) = n(h) = n(i), so

   sigma  =  e  n(i)  [ mu(e)  +  mu(h) ]
```

> **TRAP:** Mobility actually DECREASES slightly when you heat a
> semiconductor. But the number of carriers grows so fast (exponentially)
> that conductivity still goes UP. Do not say mobility increases.

## WORKED EXAMPLE 6

**Q. An intrinsic germanium sample has n(i) = 2.4 x 10^19 m^-3,
mu(e) = 0.39 m^2 V^-1 s^-1 and mu(h) = 0.19 m^2 V^-1 s^-1. Find its
conductivity.**

```
   sigma  =  e  n(i)  [ mu(e)  +  mu(h) ]

          =  (1.6 x 10^-19) x (2.4 x 10^19) x (0.39 + 0.19)

          =  (1.6 x 2.4) x (10^-19 x 10^19) x 0.58

          =  3.84 x 1 x 0.58

          =  2.23   ohm^-1 m^-1
```

**Answer: about 2.23 S/m (siemens per metre).**

---

# TOPIC 9 — The p-n JUNCTION: depletion region and barrier potential

## How it is made

You do NOT make a junction by gluing a p piece to an n piece. It is grown as
a single crystal, one half doped p and the other half doped n. The boundary
between them is the **p-n junction**.

## What happens the instant the junction forms

```
  STEP 1 :  The p side is crowded with HOLES.
            The n side is crowded with ELECTRONS.
            A huge concentration difference exists across the boundary.

  STEP 2 :  DIFFUSION. Holes diffuse from p to n.
            Electrons diffuse from n to p.
            (Everything diffuses from high concentration to low.)

  STEP 3 :  Near the junction those carriers meet and RECOMBINE.
            The region is left with NO free carriers -> DEPLETED.

  STEP 4 :  Every donor atom that lost its electron is now a fixed
            POSITIVE ion on the n side.
            Every acceptor atom that gained an electron is now a fixed
            NEGATIVE ion on the p side.
            These ions cannot move — they are locked in the lattice.

  STEP 5 :  The layer of fixed ions creates an internal ELECTRIC FIELD
            pointing from n to p. The potential difference across it is
            the BARRIER POTENTIAL (V(B)).

  STEP 6 :  That field OPPOSES further diffusion. Diffusion slows and
            finally stops. EQUILIBRIUM.
```

## The diagram (learn to draw this)

```
                     p - n   J U N C T I O N

        p - REGION          |          n - REGION
                            |
    o   o   o   o | - - - - | + + + + | o   o   o   o
    o   o   o   o | - - - - | + + + + | o   o   o   o
    o   o   o   o | - - - - | + + + + | o   o   o   o
                  |         |         |
    holes         |<------ DEPLETION ->|      free electrons
    (majority)    |        REGION      |      (majority)
                  |    (no free        |
                  |     carriers)      |
                  |                    |
       negative acceptor ions      positive donor ions
       (fixed)                     (fixed)

                  E  <-------------------
             internal electric field points from n to p

                  |<---- V(B) ---->|
             barrier potential  (Ge 0.3 V , Si 0.7 V)

    Width of depletion layer:  about 10^-6 m  (about 1 micrometre)
```

## The two currents inside a junction

```
  +-----------------+--------------------------------------------------+
  |  DIFFUSION      |  Due to MAJORITY carriers.                       |
  |  CURRENT        |  Holes p -> n, electrons n -> p.                 |
  |                 |  Caused by the concentration difference.          |
  |                 |  Direction: from p to n.                          |
  +-----------------+--------------------------------------------------+
  |  DRIFT          |  Due to MINORITY carriers.                       |
  |  CURRENT        |  Pushed across by the junction's electric field. |
  |                 |  Very small.                                      |
  |                 |  Direction: from n to p.                          |
  +-----------------+--------------------------------------------------+

  At equilibrium (no battery):

        diffusion current  =  drift current

        NET CURRENT THROUGH AN UNBIASED JUNCTION  =  ZERO
```

## Barrier potential values — memorise

```
  +----------------+---------------------+
  |  GERMANIUM     |   V(B) = 0.3  V     |
  |  SILICON       |   V(B) = 0.7  V     |
  +----------------+---------------------+
```

## Analogy

```
   Two water tanks joined by a pipe, one full, one empty.
   Water rushes across (diffusion).
   As it does, it builds up a wall of mud in the pipe (the ions).
   The mud wall finally blocks the flow (the barrier potential).
```

> **TRAP:** The depletion region is NOT empty of atoms. It is empty of MOBILE
> CHARGE CARRIERS. It is full of fixed, charged, immobile ions.

## WORKED EXAMPLE 7

**Q. Why does the depletion layer of a p-n junction contain no free charge
carriers, and what stops it from growing wider and wider?**

```
  1.  Majority carriers diffuse across the boundary and recombine there,
      so the region loses its free electrons and free holes.

  2.  The uncovered fixed ions set up an electric field from n to p.

  3.  This field pushes holes back into p and electrons back into n,
      opposing further diffusion.

  4.  When the opposing field is strong enough, diffusion stops. The
      layer stops growing. The junction is in equilibrium.
```

---

# TOPIC 10 — FORWARD BIAS and REVERSE BIAS

## The diode symbol first

```
              ANODE                CATHODE
              (p side)             (n side)

                 ------|>|------
                        |
                     arrow points in the direction of
                     CONVENTIONAL CURRENT when forward biased

   Simple rule:  current flows the way the ARROW points, never against
                 the BAR.
```

## FORWARD BIAS — circuit diagram

**Rule: p side to the POSITIVE terminal, n side to the NEGATIVE terminal.**

```
       F O R W A R D    B I A S

              +----------( A )----------+       (A) = milliammeter
              |                         |
        +-----+-----+                   |
        |  p  |  n  |                   |
        |     |     |                   |
        +-----+-----+                   |
              |                         |
              |        R                |
              +------/\/\/\-------------+
              |                         |
              |     + |     -           |
              +-------| |---------------+
                      | |
                    BATTERY  V

   p side  ->  +  terminal
   n side  ->  -  terminal
```

## What happens in forward bias

```
  1.  The battery's + terminal repels the holes in p towards the junction.
      The battery's - terminal repels the electrons in n towards it too.

  2.  Carriers are pushed INTO the depletion region and neutralise the
      fixed ions there.

  3.  The DEPLETION LAYER GETS THINNER.
      The BARRIER POTENTIAL IS REDUCED  (effective barrier = V(B) - V).

  4.  Once the applied voltage exceeds the barrier, carriers cross
      easily. A LARGE current flows (in milliamperes).

  5.  The current is due to MAJORITY carriers.

  6.  The junction resistance is LOW (a few tens of ohms).
```

## REVERSE BIAS — circuit diagram

**Rule: p side to the NEGATIVE terminal, n side to the POSITIVE terminal.**

```
       R E V E R S E    B I A S

              +----------( uA )---------+      (uA) = microammeter
              |                         |
        +-----+-----+                   |
        |  p  |  n  |                   |
        |     |     |                   |
        +-----+-----+                   |
              |                         |
              |        R                |
              +------/\/\/\-------------+
              |                         |
              |     - |     +           |
              +-------| |---------------+
                      | |
                    BATTERY  V

   p side  ->  -  terminal
   n side  ->  +  terminal
```

## What happens in reverse bias

```
  1.  The battery's - terminal PULLS the holes in p away from the junction.
      The battery's + terminal PULLS the electrons in n away from it.

  2.  More fixed ions get uncovered.

  3.  The DEPLETION LAYER GETS WIDER.
      The BARRIER POTENTIAL IS INCREASED  (effective barrier = V(B) + V).

  4.  Majority carriers cannot cross at all. Only the few MINORITY
      carriers drift across.

  5.  A very small REVERSE SATURATION CURRENT flows
      (microamperes in Ge, nanoamperes in Si).
      It is almost independent of the applied voltage but rises
      strongly with TEMPERATURE.

  6.  The junction resistance is VERY HIGH (megohms).
```

## The comparison table (4-mark question)

```
  +---------------------------+-------------------+--------------------+
  |  POINT                    |  FORWARD BIAS     |  REVERSE BIAS      |
  +---------------------------+-------------------+--------------------+
  |  p side connected to      |  + terminal       |  - terminal        |
  |  n side connected to      |  - terminal       |  + terminal        |
  |  Depletion layer width    |  DECREASES        |  INCREASES         |
  |  Barrier potential        |  DECREASES        |  INCREASES         |
  |  Current carriers         |  MAJORITY         |  MINORITY          |
  |  Order of current         |  milliampere      |  microampere /     |
  |                           |                   |  nanoampere        |
  |  Junction resistance      |  LOW (ohms)       |  VERY HIGH (Mohm)  |
  |  Meter used               |  milliammeter     |  microammeter      |
  |  Diode acts like          |  CLOSED switch    |  OPEN switch       |
  +---------------------------+-------------------+--------------------+
```

> **TRAP:** In reverse bias the current is NOT zero. It is small but real,
> and the examiner wants the words "reverse saturation current due to
> MINORITY carriers".

## WORKED EXAMPLE 8

**Q. A silicon diode is connected in series with a 1000 ohm resistor and a
5 V battery, in forward bias. Find the current.**

```
  For SILICON the knee (barrier) voltage is  0.7 V.

  Voltage left across the resistor  =  5  -  0.7  =  4.3 V

                        4.3
             I     =  --------   =  4.3 x 10^-3  A
                        1000

                   =  4.3  mA
```

**Answer: 4.3 mA.**

---

# TOPIC 11 — The V-I CHARACTERISTIC CURVE of a p-n junction diode

This is a 4-mark diagram question. **Draw it big, label all four things:
knee voltage, forward current in mA, reverse current in microamperes, and
the breakdown voltage.**

```
              V - I   C H A R A C T E R I S T I C

                            I (forward, mA)
                                 ^
                                 |          |
                                 |         /
                                 |        /
                                 |       /
                                 |      /   <-- steep rise: low resistance
                                 |     /
                                 |    /
                                 |   /
                                 |  /
                                 | /
                                 |/  <-- KNEE VOLTAGE
   ------------------------------+----------------------> V (forward, volts)
   V(reverse) <---   |           |     0.3 V (Ge)
                     |           |     0.7 V (Si)
                     |           |
       BREAKDOWN --> |           |
       VOLTAGE       |           |
                     |___________|  <-- tiny, flat reverse
                     |              saturation current (microamperes)
                     |
                     v
                 I (reverse, microamperes)
```

## Reading the curve

```
  FORWARD side (top right)
     - Below the knee voltage almost no current flows: the applied
       voltage has not yet cancelled the barrier.
     - At the KNEE VOLTAGE (also called cut-in or threshold voltage)
       the current suddenly shoots up.
              Ge  ->  0.3 V          Si  ->  0.7 V
     - After the knee the curve is nearly vertical:
       a small change in V gives a big change in I  ->  LOW resistance.

  REVERSE side (bottom left)
     - Only a tiny reverse saturation current flows, almost flat.
     - At the BREAKDOWN VOLTAGE the reverse current suddenly becomes
       enormous. An ordinary diode is destroyed here. A Zener diode is
       built to survive it and work there.
```

## Two definitions to write down

```
  +-----------------------------------------------------------------+
  |  KNEE (CUT-IN / THRESHOLD) VOLTAGE                               |
  |  The forward voltage at which the diode current starts to        |
  |  increase rapidly.       Ge = 0.3 V ,  Si = 0.7 V                |
  +-----------------------------------------------------------------+
  |  BREAKDOWN VOLTAGE                                                |
  |  The reverse voltage at which the reverse current increases       |
  |  suddenly and sharply.                                            |
  +-----------------------------------------------------------------+
```

## Two kinds of breakdown

```
  ZENER BREAKDOWN     - happens in HEAVILY doped junctions with a very
                        thin depletion layer.
                      - the strong field pulls electrons straight out of
                        covalent bonds.
                      - occurs at LOW reverse voltage (under about 6 V).

  AVALANCHE BREAKDOWN - happens in LIGHTLY doped junctions with a wide
                        depletion layer.
                      - minority carriers are accelerated, smash into
                        atoms and knock out more carriers, which knock
                        out still more (a chain reaction).
                      - occurs at HIGH reverse voltage.
```

## Dynamic resistance

```
                       change in voltage        dV
   r(d)   =    -------------------------   =   ----
                 change in current              dI
```

## WORKED EXAMPLE 9

**Q. From a diode's forward characteristic, the current changes from 20 mA
to 30 mA when the voltage changes from 0.70 V to 0.71 V. Find the dynamic
resistance.**

```
              dV        0.71 - 0.70            0.01
   r(d)  =  ------  =  ---------------  =  ---------------
              dI       (30 - 20) mA          10 x 10^-3

         =  1  ohm
```

**Answer: 1 ohm.**

---

# TOPIC 12 — The diode as a RECTIFIER: HALF-WAVE

## What rectification means

```
  +-------------------------------------------------------------------+
  |  RECTIFICATION = the process of converting ALTERNATING CURRENT    |
  |  (AC) into DIRECT CURRENT (DC).                                   |
  |                                                                   |
  |  A diode can do it because it conducts in ONE DIRECTION ONLY.     |
  +-------------------------------------------------------------------+
```

## Half-wave rectifier — circuit

```
        H A L F - W A V E    R E C T I F I E R

                          D
     o------+        +---|>|---+---------+
            |        |         |         |
            )||(     |         |         |
   AC       )||(     |        R(L)      output
   input    )||(     |        \/\/\      (DC)
            )||(     |         |         |
     o------+        +---------+---------+
            |
       transformer
       (primary)     (secondary)

   D    = p-n junction diode
   R(L) = load resistance, output is taken across it
```

## Working

```
  POSITIVE half cycle of the AC input
        -> the diode's p side goes positive
        -> diode is FORWARD biased
        -> diode CONDUCTS
        -> current flows through R(L)
        -> output voltage appears

  NEGATIVE half cycle of the AC input
        -> the diode's p side goes negative
        -> diode is REVERSE biased
        -> diode does NOT conduct
        -> no current through R(L)
        -> output is ZERO

  So only ONE HALF of each input cycle appears at the output.
  The output is unidirectional (DC) but pulsating.
```

## Input and output waveforms

```
   INPUT  (AC across the secondary)

     V
     |     ___              ___              ___
     |    /   \            /   \            /   \
     |   /     \          /     \          /     \
   --+--/-------\--------/-------\--------/-------\------> t
     |           \      /         \      /         \
     |            \___/            \___/            \___
     |


   OUTPUT  (across R(L))   -- only the POSITIVE halves survive

     V
     |     ___              ___              ___
     |    /   \            /   \            /   \
     |   /     \          /     \          /     \
   --+--/-------\________/-------\________/-------\______> t
     |
     |    <- gap ->  nothing during the negative half
```

## The numbers for a half-wave rectifier

```
  +---------------------------------+-------------------------------+
  |  Peak current                   |  I(m) = V(m) / (r(f) + R(L))  |
  |  DC (average) current           |  I(dc) = I(m) / pi            |
  |  RMS current                    |  I(rms) = I(m) / 2            |
  |  Ripple factor                  |  r = 1.21                     |
  |  Maximum efficiency             |  40.6 %                       |
  |  Output ripple frequency        |  = input frequency  f         |
  |  Peak inverse voltage (PIV)     |  = V(m)                       |
  |  Number of diodes needed        |  1                            |
  +---------------------------------+-------------------------------+
```

> **TRAP:** The output of a half-wave rectifier is DC in the sense that it
> never reverses direction — but it is PULSATING DC, not steady DC. You need
> a filter to smooth it.

## WORKED EXAMPLE 10

**Q. A half-wave rectifier has a peak current of 10 mA. Find the DC current
and the rms current.**

```
                 I(m)        10
   I(dc)   =   --------  =  ------  =  3.18  mA
                  pi         3.14


                 I(m)        10
   I(rms)  =   --------  =  ------  =  5.0   mA
                  2           2
```

**Answer: I(dc) = 3.18 mA, I(rms) = 5 mA.**

---

# TOPIC 13 — FULL-WAVE rectifier

## The idea

A half-wave rectifier throws away half the input. A **full-wave rectifier**
uses BOTH halves. It needs **two diodes and a centre-tapped transformer**.

## Circuit diagram (centre-tap type)

```
        F U L L - W A V E    R E C T I F I E R

                     A          D1
              +------+---------|>|--------+
              |      )||(                 |
              |      )||(                 |
     o--------+      )||(                 |
              |      )||( C (centre tap)  |
   AC input   |      )||(-----+           |
              |      )||(     |          R(L)
     o--------+      )||(     |          \/\/\
              |      )||(     |           |
              |      )||(     |           |
              +------+---------|>|--------+
                     B          D2
                                |
                                +-----------+
                                            |
                       output taken between the junction of
                       D1, D2  and the CENTRE TAP  C
```

## Working

```
  POSITIVE half cycle
      A is positive, B is negative (with respect to C)
        ->  D1 is FORWARD biased and conducts
        ->  D2 is REVERSE biased and is off
        ->  current flows through R(L)  (say, top to bottom)

  NEGATIVE half cycle
      A is negative, B is positive (with respect to C)
        ->  D2 is FORWARD biased and conducts
        ->  D1 is REVERSE biased and is off
        ->  current again flows through R(L) IN THE SAME DIRECTION

  KEY POINT:  the two diodes conduct in turn, but the current through
  R(L) is in the SAME direction in both half cycles.
  So BOTH halves of the input appear at the output.
```

## Input and output waveforms

```
   INPUT

     V
     |     ___              ___              ___
     |    /   \            /   \            /   \
     |   /     \          /     \          /     \
   --+--/-------\--------/-------\--------/-------\------> t
     |           \      /         \      /         \
     |            \___/            \___/            \___


   OUTPUT   -- the negative halves are FLIPPED UP

     V
     |     ___     ___     ___     ___     ___     ___
     |    /   \   /   \   /   \   /   \   /   \   /   \
     |   /     \ /     \ /     \ /     \ /     \ /     \
   --+--/-------X-------X-------X-------X-------X-------\--> t
     |
     |   D1     D2     D1      D2      D1      D2
     |   on     on     on      on      on      on

     No gaps. Output frequency is DOUBLE the input frequency.
```

## The numbers for a full-wave rectifier

```
  +---------------------------------+-------------------------------+
  |  DC (average) current           |  I(dc) = 2 I(m) / pi          |
  |  RMS current                    |  I(rms) = I(m) / sqrt(2)      |
  |  Ripple factor                  |  r = 0.48                     |
  |  Maximum efficiency             |  81.2 %                       |
  |  Output ripple frequency        |  = 2 f  (double the input)    |
  |  PIV (centre-tap type)          |  = 2 V(m)                     |
  |  PIV (bridge type)              |  = V(m)                       |
  |  Number of diodes needed        |  2 (centre tap), 4 (bridge)   |
  +---------------------------------+-------------------------------+
```

## Half-wave versus full-wave — the comparison table

```
  +--------------------------+-----------------+--------------------+
  |  POINT                   |  HALF-WAVE      |  FULL-WAVE         |
  +--------------------------+-----------------+--------------------+
  |  Diodes used             |  1              |  2 (or 4 bridge)   |
  |  Halves rectified        |  one            |  both              |
  |  I(dc)                   |  I(m)/pi        |  2 I(m)/pi         |
  |  I(rms)                  |  I(m)/2         |  I(m)/sqrt(2)      |
  |  Ripple factor           |  1.21           |  0.48              |
  |  Efficiency              |  40.6 %         |  81.2 %            |
  |  Output frequency        |  f              |  2 f               |
  |  Centre-tapped           |  not needed     |  needed (2-diode)  |
  |  transformer             |                 |                    |
  |  Quality of DC           |  poor           |  much better       |
  +--------------------------+-----------------+--------------------+
```

## RIPPLE FACTOR — what it actually means

```
  +-----------------------------------------------------------------+
  |  RIPPLE FACTOR = a measure of how much AC is still left in the  |
  |  rectified DC output.                                            |
  |                                                                  |
  |         rms value of the AC component in the output              |
  |   r =  ------------------------------------------------          |
  |                DC value of the output                            |
  |                                                                  |
  |   Also:                                                          |
  |                +-  I(rms)  -+ 2                                  |
  |        r  =  \/  | -------- |   -  1                             |
  |                  +-  I(dc)  -+                                   |
  |                                                                  |
  |   SMALLER ripple factor  =  BETTER, smoother DC.                 |
  +-----------------------------------------------------------------+
```

## RECTIFIER EFFICIENCY

```
                       DC power delivered to the load
   efficiency  =   ------------------------------------  x  100 %
                        AC power supplied as input

   Half-wave  :  maximum 40.6 %
   Full-wave  :  maximum 81.2 %      (exactly double)
```

## THE FILTER — why it is needed

Even a full-wave output is pulsating. A **filter** smooths it out.

```
        CAPACITOR  FILTER  (the commonest one)

     rectifier      +--------+---------+
     output   ------+        |         |
                    |      __|__      R(L)
     (pulsating     |      _____   C  \/\/\
      DC)           |        |         |
              ------+--------+---------+
                                       output = nearly steady DC


   HOW IT WORKS:
     - When the rectified voltage RISES, the capacitor CHARGES up to
       the peak value.
     - When the rectified voltage FALLS, the capacitor DISCHARGES
       slowly through R(L), holding the output up.
     - The dips get filled in.  Ripple falls sharply.

   WAVEFORM after filtering:

     V
     |    ______________________________________
     |  _/  \_/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_
     |  small remaining ripple riding on steady DC
   --+---------------------------------------------> t

   A LARGER capacitance C  and a LARGER R(L) give SMOOTHER output.
```

Other filter types: a series **inductor (choke)** filter, and the
**pi-filter** (capacitor, choke, capacitor), which is the best of the three.

> **TRAP:** A capacitor filter is connected IN PARALLEL with the load, never
> in series. An inductor filter is connected IN SERIES, never in parallel.

## WORKED EXAMPLE 11

**Q. A full-wave rectifier delivers a peak current of 20 mA to a load. Find
I(dc), I(rms) and verify the ripple factor.**

```
                2 I(m)       2 x 20        40
   I(dc)   =  ----------  =  --------  =  ------  =  12.73  mA
                  pi           3.14        3.14


                I(m)          20
   I(rms)  =  ----------  =  --------  =  14.14  mA
               sqrt(2)        1.414


                 +-  I(rms)  -+ 2
   r  =    \/    | ----------- |    -  1
                 +-  I(dc)   -+

                 +-  14.14  -+ 2
      =    \/    | ---------- |    -  1
                 +-  12.73   -+

      =    \/  ( 1.111 )^2  -  1

      =    \/  1.234  -  1     =   \/ 0.234    =   0.48
```

**Answer: I(dc) = 12.73 mA, I(rms) = 14.14 mA, ripple factor = 0.48 (matches
the standard full-wave value).**

---

# TOPIC 14 — The ZENER DIODE and voltage regulation

## What a Zener diode is

```
  +-----------------------------------------------------------------+
  |  A ZENER DIODE is a HEAVILY DOPED p-n junction diode which is    |
  |  designed to operate SAFELY in the REVERSE BREAKDOWN region.     |
  |                                                                  |
  |  Heavy doping  ->  very thin depletion layer                     |
  |                ->  very strong electric field                    |
  |                ->  breakdown at a low, sharp, well-defined       |
  |                    voltage called the ZENER VOLTAGE V(z).        |
  +-----------------------------------------------------------------+
```

## Symbol

```
     ORDINARY DIODE                ZENER DIODE

       ----|>|----                  ----|>|----
             |                            _|
             |                           |
                                     the bar is bent at both ends,
                                     like a letter Z
```

## Characteristic curve

```
                              I (forward)
                                  ^
                                  |         /
                                  |        /
                                  |       /
                                  |      /
                                  |     /
    ------------------------------+----/---------------> V
        <-- V(z) |                |  0.7
                 |                |
     ------------+                |
                 |                |
                 |  <-- at V(z) the current shoots down
                 |      but the VOLTAGE STAYS ALMOST CONSTANT
                 |
                 v
              I (reverse)

   THE FLAT VERTICAL PART is the whole point:
   the current changes a lot but the voltage does not change.
```

## Zener as a VOLTAGE REGULATOR — circuit

```
        Z E N E R    V O L T A G E    R E G U L A T O R

                R(s)
      +-------/\/\/\-------+-----------+
      |                    |           |
      |                    |           |
      |                   _|_         R(L)
   unregulated            /_\  Zener  \/\/\    regulated
   input V(i)              |  (REVERSE  |      output V(o) = V(z)
   (fluctuating)           |   biased)  |
      |                    |           |
      +--------------------+-----------+

   R(s) = series (dropping) resistance  -- ESSENTIAL
   The Zener is always connected in REVERSE bias and in PARALLEL
   with the load.
```

## Working — how it holds the output steady

```
  CASE 1 :  the INPUT VOLTAGE rises
        ->  the Zener current increases sharply
        ->  the current through R(s) increases
        ->  the voltage drop across R(s) increases
        ->  the extra input voltage is absorbed by R(s)
        ->  the output stays at V(z).

  CASE 2 :  the LOAD current increases (load resistance falls)
        ->  the Zener current DECREASES by the same amount
        ->  the total current through R(s) stays the same
        ->  the drop across R(s) stays the same
        ->  the output stays at V(z).

  THE ONE-LINE REASON:
      The Zener adjusts its OWN current so that the total current
      through R(s) is always constant. Hence the output voltage
      is always constant.
```

## The equations

```
   V(i)   =   I x R(s)   +   V(z)

   I      =   I(z)  +  I(L)          (current splits at the node)

   I(L)   =   V(z) / R(L)

                V(i)  -  V(z)
   R(s)   =   -----------------
                     I
```

> **TRAP:** If you forget R(s), the Zener burns out instantly. The examiner
> often asks "what is the role of the series resistance?" — the answer is
> "it limits the current and absorbs the excess voltage."

## WORKED EXAMPLE 12

**Q. A 10 V Zener diode is used to regulate a supply that varies from 15 V.
The load resistance is 1 kilo-ohm and the series resistance is 200 ohm.
Find the load current, the total current and the Zener current.**

```
   Output voltage across the load  =  V(z)  =  10 V

                V(z)          10
   I(L)   =   --------   =  --------   =  10 x 10^-3  =  10  mA
                R(L)         1000


              V(i) - V(z)      15 - 10        5
   I      =  --------------  = ---------  =  ------ =  25 x 10^-3 = 25 mA
                  R(s)            200        200


   I(z)   =   I  -  I(L)   =   25  -  10   =   15  mA
```

**Answer: I(L) = 10 mA, I = 25 mA, I(z) = 15 mA.**

---

# TOPIC 15 — Special purpose diodes: PHOTODIODE, LED and SOLAR CELL

## PHOTODIODE

```
  +-----------------------------------------------------------------+
  |  A PHOTODIODE is a special p-n junction diode operated in        |
  |  REVERSE BIAS, which converts LIGHT into an electrical signal.   |
  +-----------------------------------------------------------------+
```

```
   CIRCUIT

         light  \  \  \
                 v  v  v
              +--------+
              |  p | n |
              +--------+
               |      |
               |      |
               -      +          REVERSE BIASED
               |      |
               +--||--+---( uA )---+
                battery
```

```
  WORKING
     - The diode is reverse biased, so normally only a tiny dark
       current flows.
     - Light of photon energy greater than the band gap (h nu > Eg)
       falls on the junction.
     - Electron-hole PAIRS are generated.
     - The junction field sweeps them across  ->  reverse current
       increases.
     - The reverse current is PROPORTIONAL to the light intensity.

  WHY REVERSE BIAS?
     Because the reverse current is small and is dominated by the
     light-generated carriers, so the CHANGE caused by light is easy
     to measure. In forward bias the huge majority current would swamp
     the light contribution.

  USES : light detectors, optical signal demodulators, exposure meters,
         automatic street lights, burglar alarms.
```

## LIGHT EMITTING DIODE (LED)

```
  +-----------------------------------------------------------------+
  |  An LED is a HEAVILY DOPED p-n junction diode operated in        |
  |  FORWARD BIAS, which converts electrical energy into LIGHT.      |
  +-----------------------------------------------------------------+
```

```
   SYMBOL                        CIRCUIT

     ----|>|----                       R
           |   \ \                +--/\/\/\--+
               \ \  light         |          |
             arrows point         |         _|_
             OUTWARDS             |        \ / |>|   forward biased
                                  |         |
                                  +---||----+
                                    battery
```

```
  WORKING
     - Forward bias pushes electrons from n into p and holes from p
       into n.
     - Near the junction the electrons RECOMBINE with holes.
     - Each recombination releases energy equal to the band gap.
     - In certain materials this energy comes out as a PHOTON of light
       instead of heat.

           energy of the emitted photon   =   Eg
           and                     Eg  =  h c / lambda

     - So the COLOUR of the light depends on the BAND GAP of the
       material.
```

```
  MATERIALS   (Si and Ge are NOT used - they release heat, not light)

  +-------------------------+---------------------------+
  |  Gallium Arsenide       |  infrared                 |
  |  (GaAs)                 |                           |
  |  Gallium Arsenide       |  red / yellow             |
  |  Phosphide (GaAsP)      |                           |
  |  Gallium Phosphide      |  green / red              |
  |  (GaP)                  |                           |
  |  Gallium Nitride (GaN)  |  blue                     |
  +-------------------------+---------------------------+

  For visible light the band gap must be roughly 1.8 eV to 3 eV.
```

```
  ADVANTAGES OF AN LED OVER AN ORDINARY LAMP
     1.  Low operating voltage and very low power consumption.
     2.  Very fast switching (nanoseconds) - no warm-up time.
     3.  Long life and high reliability (no filament to burn out).
     4.  Small size, rugged, light in weight.
     5.  Nearly monochromatic light of the desired colour.
     6.  Low cost.
```

## SOLAR CELL (photovoltaic cell)

```
  +-----------------------------------------------------------------+
  |  A SOLAR CELL is a p-n junction that converts SOLAR ENERGY       |
  |  directly into ELECTRICAL energy. It works with NO external      |
  |  bias at all (the photovoltaic effect).                          |
  +-----------------------------------------------------------------+
```

```
   STRUCTURE

           sunlight  \  \  \
                      v  v  v
            +=====================+   <-- very THIN, heavily doped
            |     n  region       |       top layer so light reaches
            +---------------------+       the junction
            |                     |
            |     p  region       |   <-- thick base
            |                     |
            +=====================+
              |                 |
              +-----( load )----+
```

```
  WORKING
     1.  Light falls on the junction and generates electron-hole pairs
         (h nu must be greater than Eg).
     2.  The junction's built-in field separates them:
             electrons are pushed to the n side
             holes are pushed to the p side
     3.  The n side becomes negative, the p side positive.
             ->  a PHOTOVOLTAGE appears.
     4.  Connect a load and current flows.

  CONDITIONS FOR A GOOD SOLAR CELL MATERIAL
     - band gap roughly 1.0 eV to 1.8 eV
     - high optical absorption
     - good electrical conductivity
     - cheap and available
     Common materials: Si, GaAs, CdTe, CuInSe2.

  USES : calculators, satellites, street lights, rooftop power.
```

## The three compared

```
  +-------------+---------------+-------------------+------------------+
  |  DEVICE     |  BIAS         |  CONVERTS         |  KEY IDEA        |
  +-------------+---------------+-------------------+------------------+
  |  Photodiode |  REVERSE      |  light -> current |  detects light   |
  |  LED        |  FORWARD      |  current -> light |  emits light     |
  |  Solar cell |  NO bias      |  light -> voltage |  generates power |
  +-------------+---------------+-------------------+------------------+
```

## WORKED EXAMPLE 13

**Q. An LED is made from a material with a band gap of 2.0 eV. Find the
wavelength of the emitted light and name its approximate colour.**

```
   Eg  =  2.0 eV  =  2.0 x 1.6 x 10^-19  =  3.2 x 10^-19  J

              h c            (6.63 x 10^-34) x (3 x 10^8)
   lambda = --------   =   ----------------------------------
               Eg                  3.2 x 10^-19

                            19.89 x 10^-26
            =            --------------------
                            3.2  x 10^-19

            =   6.22 x 10^-7  m

            =   622  nm      (about 6220 angstrom)
```

**Answer: about 622 nm — that is in the RED / ORANGE part of the spectrum.**

---

# TOPIC 16 — The JUNCTION TRANSISTOR: structure and symbols

## What a transistor is

```
  +-----------------------------------------------------------------+
  |  A JUNCTION TRANSISTOR (BJT) is a semiconductor device made of   |
  |  THREE doped regions forming TWO p-n junctions.                  |
  |                                                                  |
  |  The name comes from  TRANSfer + resISTOR :                      |
  |  it transfers a signal from a low-resistance circuit to a        |
  |  high-resistance circuit.                                        |
  +-----------------------------------------------------------------+
```

## The two types

```
        n - p - n   TRANSISTOR             p - n - p   TRANSISTOR

      +------+---+------+              +------+---+------+
      |  n   | p |  n   |              |  p   | n |  p   |
      +------+---+------+              +------+---+------+
        |      |     |                   |      |     |
        E      B     C                   E      B     C
     EMITTER BASE COLLECTOR           EMITTER BASE COLLECTOR

     Two junctions:  E-B  and  B-C   in both cases.
```

## Symbols — the arrow is always on the EMITTER

```
        n p n                              p n p

           C                                   C
           |                                   |
           |                                   |
     B ----+                             B ----+
           |\                                  |\
           | \                                 | \
           |  v   arrow POINTS OUT             |  ^  arrow POINTS IN
           E                                   E

   MEMORY TRICK:
      npn  =  "Not Pointing iN"   -> arrow points OUTWARDS
      pnp  =  "Pointing iN Proudly" -> arrow points INWARDS

   The arrow always shows the direction of CONVENTIONAL CURRENT
   in the emitter, and the emitter-base junction is always
   FORWARD biased in normal operation.
```

## The three terminals and what each does

```
  +------------+------------------+----------------+------------------+
  |  TERMINAL  |  SIZE            |  DOPING        |  JOB             |
  +------------+------------------+----------------+------------------+
  |  EMITTER   |  moderate        |  HEAVILY doped |  Supplies (emits)|
  |  (E)       |                  |                |  the majority    |
  |            |                  |                |  carriers.       |
  +------------+------------------+----------------+------------------+
  |  BASE      |  VERY THIN       |  LIGHTLY doped |  Controls the    |
  |  (B)       |  (about 10^-6 m) |                |  flow of carriers|
  +------------+------------------+----------------+------------------+
  |  COLLECTOR |  LARGEST         |  MODERATELY    |  Collects the    |
  |  (C)       |  (biggest area)  |  doped         |  carriers; large |
  |            |                  |                |  area dissipates |
  |            |                  |                |  the heat.       |
  +------------+------------------+----------------+------------------+
```

## WHY IS THE BASE THIN AND LIGHTLY DOPED? (a 2-mark favourite)

```
  +-----------------------------------------------------------------+
  |  Because the base is THIN and LIGHTLY DOPED, it contains very    |
  |  few holes (in an npn). So only a SMALL fraction (about 2 to 5   |
  |  per cent) of the electrons injected by the emitter recombine    |
  |  in the base.                                                    |
  |                                                                  |
  |  The remaining 95 to 98 per cent sweep straight through to the   |
  |  collector.                                                      |
  |                                                                  |
  |  RESULT :  I(C) is nearly as large as I(E), and I(B) is tiny.    |
  |            This is exactly what gives the transistor its large   |
  |            current amplification (large beta).                   |
  +-----------------------------------------------------------------+
```

## How the two junctions are biased in normal (ACTIVE) operation

```
  +-------------------------+-------------------+---------------------+
  |  REGION                 |  E-B junction     |  B-C junction       |
  +-------------------------+-------------------+---------------------+
  |  ACTIVE (amplifier)     |  FORWARD biased   |  REVERSE biased     |
  |  CUT-OFF (switch OFF)   |  REVERSE          |  REVERSE            |
  |  SATURATION (switch ON) |  FORWARD          |  FORWARD            |
  +-------------------------+-------------------+---------------------+

  Remember for the ACTIVE region:   "FORWARD - REVERSE"
```

## WORKING of an npn transistor

```
        n p n   TRANSISTOR   IN   ACTIVE   MODE

              e-  e-  e-  e-  e-
        +------+---+------+
        |  n   | p |  n   |
        |  E   | B |  C   |
        +------+---+------+
           |     |     |
           |     |     |
           -     |     +
           |     |     |
           +--||-+--||-+
            V(EB)   V(CB)
          forward   reverse

  1.  The emitter-base junction is FORWARD biased, so the barrier there
      is low. The emitter injects a large number of ELECTRONS into
      the base.

  2.  The base is thin and lightly doped, so only about 2 to 5 per
      cent of these electrons recombine with holes in the base. That
      small part forms the BASE CURRENT I(B).

  3.  The collector-base junction is REVERSE biased and its positive
      potential ATTRACTS the remaining 95 to 98 per cent of electrons
      straight through into the collector. That forms I(C).

  4.  Therefore    I(E)  =  I(B)  +  I(C)     with   I(C)  >>  I(B).

  In a pnp transistor everything is identical except that HOLES are
  the carriers and both battery polarities are reversed.
```

> **TRAP:** In an npn transistor the conventional current flows INTO the
> collector and base and OUT of the emitter. The electrons flow the opposite
> way. Do not mix electron flow with conventional current in your answer.

## WORKED EXAMPLE 14

**Q. In an npn transistor, 10^10 electrons enter the emitter in 10^-6 s. Two
per cent of them recombine in the base. Find I(E), I(B) and I(C).**

```
   Number of electrons entering the emitter  =  10^10
   Charge  =  10^10 x 1.6 x 10^-19  =  1.6 x 10^-9  C

               charge        1.6 x 10^-9
   I(E)  =  ------------  =  -------------  =  1.6 x 10^-3 A  =  1.6 mA
                time           10^-6

   2 % recombine in the base:

   I(B)  =  2 % of 1.6 mA  =  0.02 x 1.6  =  0.032  mA

   I(C)  =  I(E)  -  I(B)  =  1.6  -  0.032  =  1.568  mA
```

**Answer: I(E) = 1.6 mA, I(B) = 0.032 mA, I(C) = 1.568 mA.**

---

# TOPIC 17 — Transistor CURRENT RELATIONS: alpha and beta

## The fundamental current equation

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |               I(E)   =   I(B)   +   I(C)                        |
  |                                                                 |
  |  (This is just Kirchhoff's junction rule applied to the         |
  |   transistor treated as a node.)                                |
  |                                                                 |
  |  Typical values:  I(E) = 1 mA , I(B) = 0.02 mA , I(C) = 0.98 mA |
  +-----------------------------------------------------------------+
```

## Current amplification factor ALPHA (common base)

```
                                        I(C)
   alpha  =  --------------------  =  --------      (at constant V(CB))
              common base current       I(E)
              amplification factor

   Because  I(C)  is always slightly LESS than I(E):

              alpha is ALWAYS LESS THAN 1

   Typical range:  0.95  to  0.99
```

## Current amplification factor BETA (common emitter)

```
                                            I(C)
   beta  =  ------------------------  =  --------      (at constant V(CE))
             common emitter current        I(B)
             amplification factor

   Because  I(C)  is much LARGER than I(B):

              beta is ALWAYS MUCH GREATER THAN 1

   Typical range:  20  to  500
```

## The relation between alpha and beta — DERIVE IT, it is asked

```
   Start from     I(E)  =  I(B)  +  I(C)

   Divide every term by I(C):

        I(E)         I(B)         I(C)
      --------  =  --------  +  --------
        I(C)         I(C)         I(C)


         1            1
      -------  =   --------   +   1
       alpha         beta

   Rearranging:

  +-----------------------------------------------------------------+
  |                                                                 |
  |                  alpha                          beta            |
  |     beta  =  --------------        alpha  =  ------------       |
  |                1  -  alpha                     1  +  beta       |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## A feel for the numbers

```
  +-----------+------------+
  |  alpha    |   beta     |
  +-----------+------------+
  |  0.90     |     9      |
  |  0.95     |    19      |
  |  0.98     |    49      |
  |  0.99     |    99      |
  |  0.995    |   199      |
  +-----------+------------+

  Notice: alpha creeping from 0.98 to 0.99 DOUBLES beta.
  That is why the base must be made as thin as possible.
```

> **TRAP:** alpha can NEVER be greater than 1 and beta can NEVER be less
> than 1. If your answer breaks that, you made an arithmetic slip.

## WORKED EXAMPLE 15

**Q. A transistor has alpha = 0.98 and the emitter current is 10 mA. Find
beta, I(C) and I(B).**

```
              alpha         0.98        0.98
   beta  =  -----------  =  ------  =  ------  =  49
             1 - alpha      1-0.98      0.02


   I(C)  =  alpha x I(E)  =  0.98 x 10  =  9.8  mA


   I(B)  =  I(E)  -  I(C)  =  10  -  9.8  =  0.2  mA


   CHECK :   beta = I(C)/I(B) = 9.8 / 0.2 = 49    correct.
```

**Answer: beta = 49, I(C) = 9.8 mA, I(B) = 0.2 mA.**

---

# TOPIC 18 — The transistor in COMMON EMITTER configuration

## What "configuration" means

A transistor has three terminals but a circuit needs four connection points
(two in, two out). So one terminal has to be SHARED between the input and
the output. Whichever terminal is shared gives the configuration its name.

```
  COMMON BASE (CB)      -  base is shared
  COMMON EMITTER (CE)   -  emitter is shared     <-- the important one
  COMMON COLLECTOR (CC) -  collector is shared
```

**CE is used almost everywhere because it gives the highest POWER GAIN.**

## CE circuit for taking the characteristics

```
     C O M M O N   E M I T T E R   ( n p n )

                                        +-------( mA )------+
                                        |        I(C)       |
        R(B)                            |                   |
   +---/\/\/\---+ B         C           |                  R(C)
   |            |          /            |                  \/\/\
   |          --+---------/             |                   |
 ( uA )         |        /              |                   |
  I(B)          |       /               |                   |
   |         [ TRANSISTOR ]-------------+                   |
   |            |                                           |
   |            E                                           |
   |            |                                           |
   |            +---------------+---------------------------+
   |                            |
   +----||----------------------+----------||----------------+
       V(BB)                              V(CC)
    (input supply)                    (output supply)

   INPUT  side :  V(BE)  and  I(B)
   OUTPUT side :  V(CE)  and  I(C)
   The EMITTER is common to both.
```

## INPUT CHARACTERISTICS

**Definition: the graph of base current I(B) against base-emitter voltage
V(BE), keeping V(CE) constant.**

```
      I(B)
      (microamperes)
        ^
        |                     /       /
    150 |                    /       /
        |                   /       /
    100 |                  /       /   V(CE) = 5 V
        |                 /      /
     50 |               /     /       V(CE) = 10 V
        |            /   /
      0 +---------__/_/______________________> V(BE) (volts)
        0        0.5    0.7   0.9   1.1

    It looks exactly like the FORWARD characteristic of a diode,
    because the E-B junction IS a forward biased diode.
```

```
  INPUT RESISTANCE

                 +-  change in V(BE) -+
       r(i)  =   | ------------------ |          at constant V(CE)
                 +-  change in I(B)  -+

  Typical CE input resistance:  a few hundred ohms to a few kilo-ohms
  (LOW).
```

## OUTPUT CHARACTERISTICS

**Definition: the graph of collector current I(C) against collector-emitter
voltage V(CE), keeping I(B) constant.**

```
      I(C)
      (mA)
        ^
        |  SAT |                                    I(B) = 60 uA
      6 |      |____________________________________
        |     /|
        |    / |                                    I(B) = 40 uA
      4 |   /  |____________________________________
        |  /   |
        | /    |            ACTIVE REGION           I(B) = 20 uA
      2 |/     |____________________________________
        |      |
        |      |                                    I(B) = 0
      0 +======|====================================> V(CE) (volts)
        0      1        5        10       15
             CUT-OFF region is along the bottom axis

     SAT     = SATURATION region (steep left part)
     ACTIVE  = the flat part; I(C) hardly changes with V(CE)
     CUT-OFF = the bottom, where I(B) = 0 and I(C) is almost 0
```

```
  OUTPUT RESISTANCE

                 +-  change in V(CE) -+
       r(o)  =   | ------------------ |          at constant I(B)
                 +-  change in I(C)  -+

  Typical CE output resistance:  tens to hundreds of kilo-ohms (HIGH).
  (The curves are almost flat, so a big change in V gives a tiny
   change in I -> huge resistance.)
```

## THE THREE REGIONS — learn this table

```
  +--------------+-------------+-------------+---------------------------+
  |  REGION      |  E-B        |  B-C        |  BEHAVIOUR                |
  +--------------+-------------+-------------+---------------------------+
  |  CUT-OFF     |  REVERSE    |  REVERSE    |  I(C) = 0 (almost).       |
  |              |             |             |  Transistor is an OPEN    |
  |              |             |             |  switch. Output = V(CC).  |
  +--------------+-------------+-------------+---------------------------+
  |  ACTIVE      |  FORWARD    |  REVERSE    |  I(C) = beta x I(B).      |
  |              |             |             |  Used for AMPLIFICATION.  |
  +--------------+-------------+-------------+---------------------------+
  |  SATURATION  |  FORWARD    |  FORWARD    |  I(C) is maximum and no   |
  |              |             |             |  longer controlled by     |
  |              |             |             |  I(B). CLOSED switch.     |
  |              |             |             |  Output = almost 0.       |
  +--------------+-------------+-------------+---------------------------+

  AS A SWITCH  ->  you use CUT-OFF and SATURATION only.
  AS AN AMPLIFIER  ->  you must stay in the ACTIVE region.
```

## WORKED EXAMPLE 16

**Q. In a CE circuit, V(BE) changes from 0.65 V to 0.70 V and I(B) changes
from 20 microampere to 70 microampere, with V(CE) fixed. Find the input
resistance.**

```
   change in V(BE)  =  0.70 - 0.65  =  0.05  V

   change in I(B)   =  70 - 20  =  50 microampere  =  50 x 10^-6  A


                 0.05              0.05
   r(i)   =  --------------  =  ------------   =  1000  ohm
              50 x 10^-6         5 x 10^-5
```

**Answer: r(i) = 1000 ohm = 1 kilo-ohm.**

---

# TOPIC 19 — The transistor as an AMPLIFIER (CE mode)

## Circuit

```
     C E   A M P L I F I E R   ( n p n )

                                  +---------+------- +V(CC)
                                  |         |
                                 R(B)      R(C)
                                  |         |
              C(in)               |         +--------+
    input  ---| |-----------------+         |        |
    signal                        |         |      C(out)
    (AC)                          |    C    |        |
                                  B---------+     output
                                  |    \             signal
                              [TRANSISTOR]           (AC)
                                  |                    |
                                  E                    |
                                  |                    |
     ---------------------------- + ------------------ + -----  ground

   R(B)  = base bias resistor, sets the DC operating point
   R(C)  = collector load resistor, converts current change into
           voltage change
   C(in), C(out) = coupling capacitors: they let the AC signal through
           but block the DC bias.
```

## Working

```
  1.  With no signal, the DC bias puts the transistor in the middle of
      the ACTIVE region (the operating point Q).

  2.  The AC input signal adds to V(BE), making it go up and down.

  3.  A SMALL change in V(BE) causes a fairly large change in I(B).

  4.  I(C) = beta x I(B), so I(C) changes beta times more.

  5.  This large change in I(C) flows through the LARGE resistor R(C),
      producing a LARGE change in voltage across it.

  6.  Output voltage  V(CE)  =  V(CC)  -  I(C) R(C)

      So a small input voltage change becomes a large output voltage
      change  ->  AMPLIFICATION.
```

## PHASE REVERSAL — a favourite 2-mark question

```
  From      V(CE)  =  V(CC)  -  I(C) x R(C)

     input signal goes UP
          ->  V(BE) up  ->  I(B) up  ->  I(C) up
          ->  the drop I(C) R(C) is BIGGER
          ->  V(CE) (the output) goes DOWN

     input signal goes DOWN  ->  output goes UP

  +-----------------------------------------------------------------+
  |  In a COMMON EMITTER amplifier the output is 180 DEGREES OUT OF |
  |  PHASE with the input. This is called PHASE REVERSAL.            |
  |                                                                 |
  |  (Common base and common collector do NOT reverse the phase.)   |
  +-----------------------------------------------------------------+
```

```
   WAVEFORMS SHOWING PHASE REVERSAL

   INPUT
         ___              ___
        /   \            /   \
   ----/-----\----------/-----\------> t
             \        /       \
              \____ /          \___

   OUTPUT   (upside down, and bigger)

        \              /       \
   ------\-----/------\-------/------> t
          \___/        \_____/
        (peaks of the input line up with troughs of the output)
```

## The gains

```
  CURRENT GAIN

                     change in I(C)
        A(i)   =   -------------------   =   beta
                     change in I(B)


  VOLTAGE GAIN

                     change in V(o)                    R(C)
        A(v)   =   -------------------   =   beta  x  ------
                     change in V(i)                    r(i)

        (the minus sign, if included, only records the phase reversal)


  POWER GAIN

                                                            R(C)
        A(p)  =  A(v)  x  A(i)   =   beta  x beta  x   ---------
                                                          r(i)

               =   beta^2  x  ( R(C) / r(i) )
```

## Why CE gives the best power gain

```
   INPUT resistance is LOW  (a few hundred ohms)
   OUTPUT resistance is HIGH (tens of kilo-ohms)

   Signal goes in at low resistance and comes out at high resistance
   -> both voltage gain and current gain are large
   -> POWER GAIN is the largest of the three configurations.
```

## WORKED EXAMPLE 17

**Q. A CE amplifier uses a transistor with beta = 100, an input resistance
of 1 kilo-ohm and a collector load of 2 kilo-ohm. Find the voltage gain and
the power gain. If the input signal is 10 mV, find the output voltage.**

```
                       R(C)              2000
   A(v)  =  beta  x  --------  =  100 x --------  =  100 x 2  =  200
                       r(i)              1000


   A(i)  =  beta  =  100


   A(p)  =  A(v)  x  A(i)  =  200 x 100  =  20000


   Output voltage  =  A(v)  x  input voltage
                   =  200  x  10 mV
                   =  2000 mV  =  2  V
```

**Answer: A(v) = 200, A(p) = 20000, output = 2 V (and it is 180 degrees out
of phase with the input).**

---

# TOPIC 20 — The transistor as a SWITCH

## The idea

Do not use the middle (active) region at all. Use only the two ends.

```
  +----------------------+------------------------------------------+
  |  INPUT LOW           |  Transistor in CUT-OFF.                  |
  |  (V(BE) below 0.7 V) |  I(B) = 0, I(C) = 0.                     |
  |                      |  No drop across R(C).                    |
  |                      |  OUTPUT V(CE) = V(CC)   ->  HIGH.        |
  |                      |  Switch is OPEN (OFF).                   |
  +----------------------+------------------------------------------+
  |  INPUT HIGH          |  Transistor in SATURATION.               |
  |  (V(BE) well above   |  I(C) is maximum.                        |
  |   0.7 V)             |  Nearly all of V(CC) drops across R(C).  |
  |                      |  OUTPUT V(CE) = almost 0  ->  LOW.       |
  |                      |  Switch is CLOSED (ON).                  |
  +----------------------+------------------------------------------+
```

## The transfer characteristic

```
     V(o) = V(CE)
        ^
  V(CC) |________
        |        \
        |         \
        |          \   <-- the ACTIVE region: we pass through it
        |           \      as FAST as possible
        |            \
        |             \________________
      0 +------------------------------------> V(i)
        0     cut-off  |  active  |  saturation

   LOW  input  ->  HIGH output
   HIGH input  ->  LOW  output

   NOTICE: this is exactly a NOT GATE (an inverter).
```

> **TRAP:** As a switch the transistor must NOT be allowed to sit in the
> active region — it would get hot and waste power. Good switching means
> jumping between cut-off and saturation quickly.

## WORKED EXAMPLE 18

**Q. In a transistor switch, V(CC) = 10 V and R(C) = 1 kilo-ohm. Find the
output voltage when (a) the transistor is cut off, (b) the transistor is
saturated with V(CE) = 0.2 V. Also find the collector current in case (b).**

```
   (a)  CUT-OFF :  I(C) = 0

        V(o)  =  V(CC)  -  I(C) R(C)  =  10  -  0  =  10  V     (HIGH)


   (b)  SATURATION :  V(CE) = 0.2 V   ->   V(o) = 0.2 V         (LOW)

              V(CC) - V(CE)         10 - 0.2         9.8
        I(C)= ---------------  =  ------------  =  --------
                   R(C)               1000          1000

            =  9.8 x 10^-3  A   =   9.8  mA
```

**Answer: (a) 10 V, (b) 0.2 V with I(C) = 9.8 mA.**

---

# TOPIC 21 — The transistor as an OSCILLATOR (outline only)

## What an oscillator does

```
  +-----------------------------------------------------------------+
  |  An OSCILLATOR is a circuit that produces a continuous AC        |
  |  output (of a fixed frequency) WITHOUT any AC input signal.      |
  |  It converts DC power from the battery into AC power.            |
  +-----------------------------------------------------------------+
```

## The trick: POSITIVE FEEDBACK

An amplifier needs an input. An oscillator supplies its OWN input by feeding
part of its output back to its input, IN PHASE.

```
            +-------------------------------+
            |                               |
            v                               |
      +-----------+                    +---------+
      |           |                    |         |
   -->| AMPLIFIER |------+------------>| OUTPUT  |
      |  (CE)     |      |             |         |
      +-----------+      |             +---------+
            ^            |
            |      +-----------------+
            +------|  FEEDBACK       |
                   |  NETWORK        |
                   |  (tank circuit  |
                   |   L and C)      |
                   +-----------------+

   The feedback must be POSITIVE (in phase) and strong enough
   to replace the energy lost in the circuit.
```

## The tank circuit

```
       L - C   TANK   CIRCUIT

           +------)||(------+
           |      )||(      |          L = inductor
           |       L        |          C = capacitor
           |                |
           +------| |-------+
                   C

   Energy sloshes back and forth between the magnetic field of L
   and the electric field of C, producing oscillations.

   FREQUENCY OF OSCILLATION

                          1
        f    =   ---------------------
                  2 pi  x  sqrt( L C )
```

```
  WORKING IN THREE LINES
     1.  Switching on the battery starts a damped oscillation in the
         L-C tank circuit.
     2.  The transistor amplifies it.
     3.  Part of the amplified output is fed back IN PHASE to the input
         through mutual inductance, replacing the energy lost in the
         resistance. The oscillations become UNDAMPED and continue.
```

## WORKED EXAMPLE 19

**Q. A tank circuit has L = 1 millihenry and C = 1 microfarad. Find the
frequency of oscillation.**

```
   L  =  1 x 10^-3  H          C  =  1 x 10^-6  F

   L C  =  (10^-3)(10^-6)  =  10^-9

   sqrt(L C)  =  sqrt(10^-9)  =  3.162 x 10^-5


                    1                       1
   f  =  ---------------------------  =  ------------------------
          2 x 3.14 x 3.162 x 10^-5        1.986 x 10^-4

      =  5035  Hz    (about 5 kHz)
```

**Answer: about 5.03 kHz.**

---

# TOPIC 22 — LOGIC GATES

## What a logic gate is

```
  +-----------------------------------------------------------------+
  |  A LOGIC GATE is a digital circuit that follows a definite      |
  |  logical relationship between its input(s) and its output.      |
  |                                                                 |
  |  Only TWO voltage levels are allowed:                           |
  |         HIGH  =  1  =  (say) 5 V                                |
  |         LOW   =  0  =  (say) 0 V                                |
  |                                                                 |
  |  A table listing the output for EVERY possible combination of   |
  |  inputs is called a TRUTH TABLE.                                |
  +-----------------------------------------------------------------+
```

## THE THREE BASIC GATES

### 1. OR gate

```
   SYMBOL                          BOOLEAN

        A ----\                     Y  =  A  +  B
               \----\
                )    )---- Y        read as "Y equals A OR B"
               /----/
        B ----/


   TRUTH TABLE                  IN WORDS

   +-----+-----+-----+          Output is 1 if ANY input is 1.
   |  A  |  B  |  Y  |          Output is 0 ONLY when ALL inputs
   +-----+-----+-----+          are 0.
   |  0  |  0  |  0  |
   |  0  |  1  |  1  |          ANALOGY: two switches in PARALLEL.
   |  1  |  0  |  1  |          The lamp glows if either one is on.
   |  1  |  1  |  1  |
   +-----+-----+-----+
```

### 2. AND gate

```
   SYMBOL                          BOOLEAN

        A ----\                     Y  =  A  .  B
               \----+
                |    )---- Y        read as "Y equals A AND B"
               /----+
        B ----/


   TRUTH TABLE                  IN WORDS

   +-----+-----+-----+          Output is 1 ONLY if ALL inputs
   |  A  |  B  |  Y  |          are 1. Otherwise 0.
   +-----+-----+-----+
   |  0  |  0  |  0  |          ANALOGY: two switches in SERIES.
   |  0  |  1  |  0  |          The lamp glows only if BOTH are on.
   |  1  |  0  |  0  |
   |  1  |  1  |  1  |
   +-----+-----+-----+
```

### 3. NOT gate (inverter)

```
   SYMBOL                          BOOLEAN

                                    Y  =  A'      (A bar)
        A ----|\
              | >o---- Y            read as "Y equals NOT A"
              |/
                ^
             the small CIRCLE means INVERSION


   TRUTH TABLE                  IN WORDS

   +-----+-----+                Output is the OPPOSITE of the input.
   |  A  |  Y  |
   +-----+-----+                It has only ONE input.
   |  0  |  1  |
   |  1  |  0  |                A single transistor switch does this.
   +-----+-----+
```

## THE TWO COMBINATION GATES

### 4. NAND gate  =  AND followed by NOT

```
   SYMBOL                          BOOLEAN

        A ----\                     Y  =  ( A . B )'
               \----+
                |    )o--- Y       "NOT of (A AND B)"
               /----+
        B ----/      ^
                   circle = inversion


   TRUTH TABLE                  IN WORDS

   +-----+-----+-----+          Output is 0 ONLY when ALL inputs
   |  A  |  B  |  Y  |          are 1. Otherwise 1.
   +-----+-----+-----+
   |  0  |  0  |  1  |          It is the exact OPPOSITE of AND.
   |  0  |  1  |  1  |
   |  1  |  0  |  1  |
   |  1  |  1  |  0  |
   +-----+-----+-----+
```

### 5. NOR gate  =  OR followed by NOT

```
   SYMBOL                          BOOLEAN

        A ----\                     Y  =  ( A + B )'
               \----\
                )    )o--- Y       "NOT of (A OR B)"
               /----/
        B ----/      ^
                   circle = inversion


   TRUTH TABLE                  IN WORDS

   +-----+-----+-----+          Output is 1 ONLY when ALL inputs
   |  A  |  B  |  Y  |          are 0. Otherwise 0.
   +-----+-----+-----+
   |  0  |  0  |  1  |          It is the exact OPPOSITE of OR.
   |  0  |  1  |  0  |
   |  1  |  0  |  0  |
   |  1  |  1  |  0  |
   +-----+-----+-----+
```

## ALL FIVE TRUTH TABLES ON ONE PAGE — learn this block

```
  +-----+-----+------+------+------+------+------+
  |  A  |  B  |  OR  | AND  | NAND | NOR  | NOT A|
  +-----+-----+------+------+------+------+------+
  |  0  |  0  |  0   |  0   |  1   |  1   |  1   |
  |  0  |  1  |  1   |  0   |  1   |  0   |  1   |
  |  1  |  0  |  1   |  0   |  1   |  0   |  0   |
  |  1  |  1  |  1   |  1   |  0   |  0   |  0   |
  +-----+-----+------+------+------+------+------+

   Notice:  NAND column = the exact opposite of the AND column.
            NOR  column = the exact opposite of the OR  column.
```

## UNIVERSAL GATES

```
  +-----------------------------------------------------------------+
  |  NAND and NOR are called UNIVERSAL GATES because ANY other       |
  |  logic gate (NOT, AND, OR) can be built using ONLY NAND gates,   |
  |  or using ONLY NOR gates.                                        |
  |                                                                  |
  |  This matters in industry: a factory only has to manufacture     |
  |  one type of chip.                                               |
  +-----------------------------------------------------------------+
```

## How to make a NOT gate from a NAND gate

```
   Join both inputs of a NAND gate together:

        A ---+--\
             |   \----+
             |    |    )o--- Y
             |   /----+
        A ---+--/

   From the NAND table with A = B :
        A = 0, B = 0  ->  Y = 1
        A = 1, B = 1  ->  Y = 0

   That is exactly the NOT gate.
```

## How to make an AND gate from NAND gates

```
   A NAND followed by a NAND used as a NOT:

     A ---\
           NAND ---- (A.B)' ---- NOT ---- A.B      = AND
     B ---/

   Two NAND gates give one AND gate.
```

## How to make an OR gate from NAND gates

```
   Invert both inputs first, then NAND them:

     A --NOT-- A'  --\
                      NAND ---- ( A' . B' )'  =  A + B     = OR
     B --NOT-- B'  --/

   (using De Morgan's theorem)

   Three NAND gates give one OR gate.
```

## WORKED EXAMPLE 20

**Q. The output of a NAND gate is fed into a NOT gate. Write the truth table
of the combination and name the resulting gate.**

```
   +-----+-----+------------+------------------+
   |  A  |  B  |  NAND out  |  after NOT = Y   |
   +-----+-----+------------+------------------+
   |  0  |  0  |     1      |        0         |
   |  0  |  1  |     1      |        0         |
   |  1  |  0  |     1      |        0         |
   |  1  |  1  |     0      |        1         |
   +-----+-----+------------+------------------+

   The Y column is 1 only when both A and B are 1.
```

**Answer: it is an AND gate.**

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Go through this list. Each line is a mark somebody loses every single year.

```
  DIAGRAMS
  [ ] Every diagram I drew has a LABEL on every part.
  [ ] Band diagrams: I marked "conduction band", "valence band" and
      "Eg" with its VALUE.
  [ ] p-n junction: I marked the DEPLETION REGION, the negative ions
      on the p side and the positive ions on the n side.
  [ ] Bias circuits: I checked p to + for forward, p to - for reverse.
  [ ] V-I curve: I labelled the knee voltage AND the breakdown voltage,
      forward current in mA, reverse current in microamperes.
  [ ] Rectifier answers: I drew BOTH the circuit AND the input and
      output waveforms. (Half the marks are in the waveforms.)
  [ ] Transistor symbol: the arrow is on the EMITTER and points the
      right way (npn = out, pnp = in).
  [ ] Output characteristics: I marked all THREE regions (cut-off,
      active, saturation).

  NUMBERS I MUST NOT GET WRONG
  [ ] Band gap:  Ge = 0.72 eV ,  Si = 1.1 eV
  [ ] Barrier / knee voltage:  Ge = 0.3 V ,  Si = 0.7 V
  [ ] Ripple factor:  half-wave 1.21 ,  full-wave 0.48
  [ ] Efficiency:  half-wave 40.6 % ,  full-wave 81.2 %
  [ ] Output frequency:  half-wave = f ,  full-wave = 2f
  [ ] alpha is less than 1 ; beta is much greater than 1.

  WORDS THE EXAMINER LOOKS FOR
  [ ] "Majority carriers" and "minority carriers" — used correctly.
  [ ] "Donor" for pentavalent, "ACCEPTOR" for trivalent.
  [ ] "Diffusion current" (majority) vs "drift current" (minority).
  [ ] "Reverse saturation current" for the small reverse current.
  [ ] "Phase reversal of 180 degrees" for the CE amplifier.
  [ ] "NAND and NOR are UNIVERSAL gates."
  [ ] "The base is thin and lightly doped so that few carriers
      recombine there."

  UNITS AND FORM
  [ ] Every numerical answer has a UNIT.
  [ ] Currents: did I write mA where mA was meant, and microampere
      where microampere was meant?
  [ ] Powers of ten written correctly (10^-19, 10^16 m^-3).
  [ ] Boolean expressions written for every gate I drew.

  STRATEGY
  [ ] In Section C I chose the RECTIFIER or TRANSISTOR question if
      it appeared — it is the easiest 8 marks in the paper.
  [ ] I answered exactly the required number of questions, no more.
  [ ] Truth tables have all 4 rows (00, 01, 10, 11), not 3.
```

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   LAST WORD:  this chapter rewards NEAT DRAWING more than        |
  |   clever thinking. Practise the five key diagrams until you can  |
  |   draw each one in under a minute without looking.               |
  |                                                                  |
  +------------------------------------------------------------------+
```
