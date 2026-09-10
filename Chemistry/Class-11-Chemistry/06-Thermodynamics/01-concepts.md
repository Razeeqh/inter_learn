# Thermodynamics — Concepts From Zero

**Chemistry 1st Year · Chapter 6**

Read this with a pen. Do not just read — copy every box.

Thermodynamics sounds frightening because of the long word. It is not. It is simply
**accounting for energy**. Money goes into a shop and money goes out; here, energy goes
into a chemical system and energy goes out. Your whole job is to keep the plus and minus
signs straight.

---

# ===============================================================
# TOPIC 1 — SYSTEM, SURROUNDINGS AND BOUNDARY
# ===============================================================

## The idea in plain English

Before you can measure anything, you have to say **what exactly you are looking at**.

```
  SYSTEM        =  the part of the universe you are studying
                   (the beaker, the gas in the cylinder, the reaction mixture)

  SURROUNDINGS  =  everything else in the universe

  BOUNDARY      =  the real or imaginary wall that separates them
                   (the glass of the beaker, the piston, an imagined surface)

  SYSTEM  +  SURROUNDINGS  =  THE UNIVERSE
```

**Everyday analogy.** Your house is the *system*. The street, the sky, the neighbours are
the *surroundings*. The walls are the *boundary*. If you open a window, air and heat can
move across the boundary.

```
        +------------------------------------------------+
        |                                                |
        |             S U R R O U N D I N G S            |
        |                                                |
        |          +--------------------------+          |
        |          |                          |<---- BOUNDARY
        |          |       S Y S T E M        |          |
        |          |     (the reaction)       |          |
        |          |                          |          |
        |          +--------------------------+          |
        |                                                |
        +------------------------------------------------+
                        T H E   U N I V E R S E
```

## The three types of system

Everything depends on what the boundary lets through: **matter**, **energy**, both, or
neither.

```
  +-------------+---------------+---------------+-----------------------------+
  |   TYPE      | MATTER can    | ENERGY can    |  EXAMPLE                    |
  |             | cross?        | cross?        |                             |
  +-------------+---------------+---------------+-----------------------------+
  |  OPEN       |     YES       |     YES       |  hot tea in an OPEN cup;    |
  |             |               |               |  reaction in an open beaker |
  +-------------+---------------+---------------+-----------------------------+
  |  CLOSED     |     NO        |     YES       |  tea in a SEALED steel cup; |
  |             |               |               |  a sealed glass ampoule;    |
  |             |               |               |  a pressure cooker (closed) |
  +-------------+---------------+---------------+-----------------------------+
  |  ISOLATED   |     NO        |     NO        |  hot tea in a THERMOS FLASK |
  |             |               |               |  (ideal); the universe      |
  +-------------+---------------+---------------+-----------------------------+
```

```
     OPEN                 CLOSED                ISOLATED
   (open cup)          (sealed cup)          (thermos flask)

   ^  steam out         no matter            nothing gets out
   |                        |
  +---+                  +---+                 +=====+
  |   |  <- heat         |   | <- heat         ||   ||   <- no heat
  |~~~|                  |~~~|                 ||~~~||
  +---+                  +---+                 +=====+
   matter YES             matter NO             matter NO
   energy YES             energy YES            energy NO
```

> **TRAP:** Students write "thermos flask = closed system". It is **ISOLATED**.
> A thermos stops BOTH matter and heat. "Closed" means matter is blocked but heat is not.

## Homogeneous vs heterogeneous system

```
  HOMOGENEOUS   -  one phase only, uniform throughout.
                   Example: sugar dissolved in water; a mixture of gases.

  HETEROGENEOUS -  two or more phases.
                   Example: ice floating in water; oil and water; CaCO3 solid
                            heated in a vessel producing CO2 gas.
```

## WORKED EXAMPLE 1

*Classify: (a) milk boiling in an open vessel, (b) water sealed in a glass tube,
(c) coffee in a perfect thermos flask, (d) the whole universe.*

```
  (a)  Steam (matter) escapes AND heat escapes    ->  OPEN system
  (b)  Matter cannot escape, heat can             ->  CLOSED system
  (c)  Neither matter nor heat can escape         ->  ISOLATED system
  (d)  Nothing exists outside it to exchange with ->  ISOLATED system
```

---

# ===============================================================
# TOPIC 2 — EXTENSIVE AND INTENSIVE PROPERTIES
# ===============================================================

## The idea in plain English

Ask yourself one question: **"If I take HALF the sample, does this number change?"**

```
  EXTENSIVE property  ->  DEPENDS on the amount of substance.
                          Cut the sample in half, the value halves.

  INTENSIVE property  ->  DOES NOT depend on the amount.
                          Cut the sample in half, the value stays the same.
```

**Everyday analogy.** Take a bucket of hot water at 80 degC.
Pour out half. The **temperature** is still 80 degC (intensive).
But the **mass** and the **total heat content** have halved (extensive).

```
  +---------------------------------+---------------------------------+
  |   EXTENSIVE  (size matters)     |   INTENSIVE  (size irrelevant)  |
  +---------------------------------+---------------------------------+
  |   mass                          |   temperature                   |
  |   volume                        |   pressure                      |
  |   number of moles               |   density                       |
  |   internal energy      U        |   concentration / molarity      |
  |   enthalpy             H        |   viscosity                     |
  |   entropy              S        |   surface tension               |
  |   Gibbs energy         G        |   refractive index              |
  |   heat capacity        C        |   specific heat  (per gram)     |
  |   total energy, total heat      |   molar heat capacity           |
  |   length, area                  |   boiling point, melting point  |
  |                                 |   molar volume                  |
  +---------------------------------+---------------------------------+
```

> **TRAP:** *Heat capacity* is EXTENSIVE (it belongs to the whole object),
> but *specific heat* and *molar heat capacity* are INTENSIVE (they are "per gram"
> and "per mole"). Any property divided by the amount becomes intensive.

```
  HANDY RULE:
        EXTENSIVE  /  EXTENSIVE   =   INTENSIVE

        mass / volume  =  density        (intensive)
        V / n          =  molar volume   (intensive)
```

---

# ===============================================================
# TOPIC 3 — STATE FUNCTIONS AND PATH FUNCTIONS
# ===============================================================

## The idea in plain English

**Everyday analogy — climbing a hill.**

You start at the bottom of a hill and reach the top.

```
                                    * TOP  (height 500 m)
                                   /|
                    short steep   / |
                    path         /  |
                                /   |
                   ____________/    |
                  /                 |  <- height gained = 500 m
     long gentle /                  |     NO MATTER WHICH PATH
     path       /                   |
    ___________/                    |
   * START (height 0 m) ------------+
```

- The **height you gained** is 500 m whichever path you took.
  It depends only on WHERE YOU STARTED and WHERE YOU ENDED. -> **STATE FUNCTION**
- The **distance you walked** and the **sweat you lost** depend completely on which
  path you chose. -> **PATH FUNCTION**

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  STATE FUNCTION  -  a property whose value depends ONLY on the      |
  |                     INITIAL and FINAL states, not on the path.      |
  |                                                                     |
  |                     change = (final value) - (initial value)        |
  |                                                                     |
  |  PATH FUNCTION   -  a quantity whose value DEPENDS ON THE PATH      |
  |                     taken between the same two states.              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  +-------------------------------------+-----------------------------------+
  |   STATE FUNCTIONS                   |   PATH FUNCTIONS                  |
  +-------------------------------------+-----------------------------------+
  |   Internal energy      U            |   Heat            q               |
  |   Enthalpy             H            |   Work            w               |
  |   Entropy              S            |                                   |
  |   Gibbs energy         G            |   (that's it - only these two,    |
  |   Pressure             p            |    but note q + w = delta U       |
  |   Volume               V            |    IS a state function!)          |
  |   Temperature          T            |                                   |
  |   Number of moles      n            |                                   |
  |   Density, refractive index         |                                   |
  +-------------------------------------+-----------------------------------+
```

> **TRAP:** Heat and work are path functions **individually**, but their SUM
> (q + w = delta U) is a state function. This exact sentence is worth 2 marks.

## WORKED EXAMPLE 2

*A gas goes from state A (2 atm, 3 L) to state B (1 atm, 6 L) by two different routes.
Route 1 gives w = -300 J and q = +500 J. Route 2 gives w = -450 J. Find q for route 2.*

```
  delta U is a STATE function, so it is the SAME for both routes.

  Route 1:   delta U  =  q + w  =  (+500) + (-300)  =  +200 J

  Route 2:   delta U  =  +200 J  also
             +200  =  q  +  (-450)
             q  =  200 + 450  =  +650 J
```

---

# ===============================================================
# TOPIC 4 — TYPES OF PROCESS
# ===============================================================

A "process" is any change that takes the system from one state to another.
The name tells you **what was held constant**.

```
  +---------------+-------------------------+---------------------------------+
  |  PROCESS      |  WHAT IS CONSTANT       |  THE ONE FACT TO REMEMBER       |
  +---------------+-------------------------+---------------------------------+
  |  ISOTHERMAL   |  Temperature (dT = 0)   |  delta U = 0 (ideal gas)        |
  |               |                         |  therefore  q = - w             |
  +---------------+-------------------------+---------------------------------+
  |  ADIABATIC    |  No heat exchange       |  q = 0                          |
  |               |  (q = 0), insulated     |  therefore  delta U = w         |
  +---------------+-------------------------+---------------------------------+
  |  ISOBARIC     |  Pressure (dp = 0)      |  q(p) = delta H                 |
  |               |                         |  w = - p delta V                |
  +---------------+-------------------------+---------------------------------+
  |  ISOCHORIC    |  Volume (dV = 0)        |  w = 0                          |
  |               |                         |  therefore  q(v) = delta U      |
  +---------------+-------------------------+---------------------------------+
  |  CYCLIC       |  System returns to its  |  delta U = 0 , delta H = 0      |
  |               |  starting state         |  therefore  q = - w             |
  +---------------+-------------------------+---------------------------------+
```

## Reversible and irreversible processes

```
  REVERSIBLE PROCESS
     - carried out INFINITELY SLOWLY, in infinitesimally small steps
     - the system stays in EQUILIBRIUM with the surroundings at every instant
     - the driving force (pressure difference) is infinitesimally small
     - it can be exactly reversed by an infinitesimal change
     - it is an IDEAL, imaginary process - it never really happens
     - it gives the MAXIMUM possible work

  IRREVERSIBLE PROCESS
     - happens in ONE SUDDEN STEP, fast
     - the system is NOT in equilibrium with the surroundings during the change
     - a large, finite driving force
     - cannot be reversed by an infinitesimal change
     - ALL REAL, natural, spontaneous processes are irreversible
     - it gives LESS work than the reversible path
```

**Everyday analogy.** Reversible = letting sand out of your fist one grain at a time,
so you can stop and reverse at any moment. Irreversible = opening your fist and letting
the whole handful drop. Real life is always the second one.

```
  PICTURE OF THE DIFFERENCE (gas pushing a piston)

  IRREVERSIBLE (one big step)         REVERSIBLE (many tiny steps)

   p |                                 p |
     |____                               |\
     |    |                              | \___
     |    |  <- constant p(ext)          |     \___     <- p drops smoothly
     |    |     small area = small w     |         \___    bigger area = more w
     |    |                              |             \__
     +----+-------> V                    +----------------> V
       V1   V2                             V1            V2

   AREA UNDER THE CURVE = WORK.  The reversible curve encloses MORE area.
```

> **TRAP:** "Reversible" does NOT mean "it goes backwards". It means "it could be
> reversed at any moment by an infinitely small push". Write that in the exam.

---

# ===============================================================
# TOPIC 5 — INTERNAL ENERGY, HEAT, WORK AND THE SIGN CONVENTION
# ===============================================================

## Internal energy U

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  INTERNAL ENERGY (U)  =  the TOTAL energy stored inside a system    |
  |                                                                     |
  |     U  =  translational + rotational + vibrational energy           |
  |           + electronic energy + nuclear energy                      |
  |           + energy of chemical bonds + intermolecular forces        |
  |                                                                     |
  |  It is a STATE function and an EXTENSIVE property.                  |
  |  Its ABSOLUTE value can never be measured - only the CHANGE:        |
  |                                                                     |
  |            delta U  =  U(final)  -  U(initial)                      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Why can't we measure U itself?** Because we would have to strip a substance of every
last scrap of energy, including nuclear energy, and weigh what is left. Impossible. But
we can always measure the *difference*, and that is all chemistry needs.

For an **ideal gas, U depends only on temperature**. Same T means same U.

## Heat and work — the two doors

There are exactly **two ways** energy can cross the boundary:

```
                       +------------------------+
        HEAT   q  ---> |                        | <---  WORK   w
     (because of a     |     T H E   S Y S T E M|    (because of a
      TEMPERATURE      |          U             |     mechanical push,
      difference)      |                        |     a piston moving)
                       +------------------------+
```

## THE SIGN CONVENTION — MEMORISE THIS OR LOSE EVERY MARK

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |         WHAT THE SYSTEM  G A I N S  IS  POSITIVE (+)                |
  |         WHAT THE SYSTEM  L O S E S  IS  NEGATIVE (-)                |
  |                                                                     |
  +---------------------------------------------------------------------+
  |                                                                     |
  |    q  =  +ve   ->  heat is ABSORBED BY the system  (endothermic)    |
  |    q  =  -ve   ->  heat is RELEASED BY the system  (exothermic)     |
  |                                                                     |
  |    w  =  +ve   ->  work is done ON the system   (gas COMPRESSED)    |
  |    w  =  -ve   ->  work is done BY the system   (gas EXPANDS)       |
  |                                                                     |
  +---------------------------------------------------------------------+

  MEMORY LINE:      "EXPANSION  =>  MINUS."
                    (that is exactly why  w = - p delta V )
```

> **TRAP:** Older books use `delta U = q - w`, where w meant "work done BY the system".
> The NCERT / AP Inter syllabus uses **`delta U = q + w` with w = work done ON the
> system**. Use the NCERT convention. Never mix the two in one answer.

---

# ===============================================================
# TOPIC 6 — THE FIRST LAW OF THERMODYNAMICS
# ===============================================================

## Statement

> **Energy can neither be created nor destroyed; it can only be converted from one form
> into another. The total energy of an isolated system remains constant.**

Other accepted wordings (any one earns the mark):
- "The energy of the universe is constant."
- "It is impossible to construct a perpetual motion machine of the first kind
  (a machine that produces work without consuming an equal amount of energy)."

## Mathematical form

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                    delta U   =   q   +   w                          |
  |                                                                     |
  |   delta U = change in internal energy of the system                 |
  |   q       = heat ABSORBED BY the system                             |
  |   w       = work done ON the system                                 |
  |                                                                     |
  |   For a small change:      dU  =  dq  +  dw                         |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Applications to each process (this is a guaranteed exam question)

```
  +--------------------+--------------------+-------------------------------+
  |  PROCESS           |  CONDITION         |  FIRST LAW BECOMES            |
  +--------------------+--------------------+-------------------------------+
  |  ISOTHERMAL        |  delta U = 0       |  0 = q + w   =>   q = - w     |
  |  (ideal gas)       |  (T constant)      |  all heat absorbed is turned  |
  |                    |                    |  into work                    |
  +--------------------+--------------------+-------------------------------+
  |  ADIABATIC         |  q = 0             |  delta U = w                  |
  |                    |                    |  work is done at the cost of  |
  |                    |                    |  internal energy; expansion   |
  |                    |                    |  COOLS the gas                |
  +--------------------+--------------------+-------------------------------+
  |  ISOCHORIC         |  delta V = 0       |  w = 0  =>  delta U = q(v)    |
  |  (constant volume) |                    |  heat measured = delta U      |
  +--------------------+--------------------+-------------------------------+
  |  ISOBARIC          |  p constant        |  delta U = q(p) - p delta V   |
  |  (constant press.) |                    |  =>  q(p) = delta U + p dV    |
  |                    |                    |  =>  q(p) = delta H           |
  +--------------------+--------------------+-------------------------------+
  |  CYCLIC            |  returns to start  |  delta U = 0  =>  q = - w     |
  +--------------------+--------------------+-------------------------------+
```

## WORKED EXAMPLE 3

*A system absorbs 720 J of heat and does 400 J of work on the surroundings.
Find delta U.*

```
  q  =  + 720 J        (ABSORBED  ->  positive)

  The system DOES work  ->  work done ON the system is NEGATIVE
  w  =  - 400 J

  delta U  =  q + w  =  720 + (-400)  =  + 320 J

  ANSWER:  delta U = +320 J   (the internal energy INCREASED by 320 J)
```

## WORKED EXAMPLE 4

*In a cyclic process a system absorbs 500 J of heat. How much work is done?*

```
  Cyclic  ->  delta U = 0

  0  =  q + w
  w  =  - q  =  - 500 J

  Negative sign means 500 J of work is done BY the system on the surroundings.
```

## WORKED EXAMPLE 5

*A gas is compressed adiabatically and 150 J of work is done on it.
Find delta U and say whether the gas warms or cools.*

```
  Adiabatic  ->  q = 0
  Work done ON the system  ->  w = + 150 J

  delta U  =  0 + 150  =  + 150 J

  U increases, and for an ideal gas U depends only on T,
  so the TEMPERATURE RISES. The gas gets HOTTER.

  (This is why a bicycle pump gets hot when you pump fast.)
```

---

# ===============================================================
# TOPIC 7 — WORK OF EXPANSION (PRESSURE-VOLUME WORK)
# ===============================================================

## Where the formula comes from

Picture a gas in a cylinder with a frictionless, weightless piston of area A.
The outside pushes down with pressure p(ext). The gas pushes the piston out by a
small distance dl.

```
                    |     |
                    |     |   <- piston, area A
       p(ext) --->  +-----+  ---> piston moves out by  dl
                    |     |
                    | GAS |   volume increases by  dV = A x dl
                    |  p  |
                    +-----+
                    |     |
```

```
  Force on the piston      F  =  p(ext)  x  A

  Work done BY the gas     =  F x dl  =  p(ext) x A x dl  =  p(ext) x dV

  But work done ON the system is the negative of that:

  +---------------------------------------------------------------------+
  |                                                                     |
  |            w  =  -  p(ext)  x  delta V                              |
  |                                                                     |
  |            delta V  =  V2  -  V1                                    |
  |                                                                     |
  +---------------------------------------------------------------------+

  EXPANSION  ->  V2 > V1  ->  delta V is +ve  ->  w is NEGATIVE
  COMPRESSION->  V2 < V1  ->  delta V is -ve  ->  w is POSITIVE
```

## Case A — IRREVERSIBLE expansion against a constant external pressure

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |         w  =  -  p(ext) ( V2  -  V1 )                               |
  |                                                                     |
  +---------------------------------------------------------------------+

  Use p(ext) - the OUTSIDE pressure - NOT the pressure of the gas.
```

## Case B — FREE EXPANSION (expansion into a vacuum)

```
  There is nothing outside to push against, so   p(ext) = 0

  +---------------------------------------------------------------------+
  |            w  =  - 0 x delta V   =   0                              |
  +---------------------------------------------------------------------+

  NO WORK IS DONE IN A FREE EXPANSION - reversible or irreversible.
  If it is also adiabatic (q = 0):   delta U = 0 + 0 = 0, so T does not change.
```

## Case C — REVERSIBLE ISOTHERMAL expansion (DERIVE THIS — 4 marks)

```
  STEP 1   For a reversible change, the external pressure is only
           infinitesimally less than the gas pressure, so we may put

                  p(ext)  =  p(gas)  =  n R T / V

  STEP 2   For a small change dV, the small work is

                  dw  =  -  p(ext) dV   =   -  (n R T / V)  dV

  STEP 3   Add up (integrate) from V1 to V2:

                  w  =  - INT (V1 to V2)  (n R T / V) dV

           T is constant (isothermal), so n R T comes out:

                  w  =  - n R T  INT (V1 to V2)  dV / V

                  w  =  - n R T  [ ln V ] from V1 to V2

  STEP 4            w  =  - n R T  ln ( V2 / V1 )

  STEP 5   Convert natural log to log base 10 ( ln x = 2.303 log x ):

  +---------------------------------------------------------------------+
  |                                                                     |
  |          w  =  -  2.303  n R T  log ( V2 / V1 )                     |
  |                                                                     |
  |     and by Boyle's law  p1 V1 = p2 V2  =>  V2/V1 = p1/p2 , so       |
  |                                                                     |
  |          w  =  -  2.303  n R T  log ( p1 / p2 )                     |
  |                                                                     |
  +---------------------------------------------------------------------+

  Since the process is isothermal and the gas is ideal,  delta U = 0, so

          q  =  - w  =  + 2.303 n R T log ( V2 / V1 )
```

## WORKED EXAMPLE 6 (irreversible)

*2 mol of an ideal gas expands from 1 L to 5 L against a constant external pressure
of 2 atm. Calculate the work done. (1 L atm = 101.3 J)*

```
  p(ext) = 2 atm      V1 = 1 L      V2 = 5 L

  w  =  - p(ext) ( V2 - V1 )
     =  - 2 ( 5 - 1 )
     =  - 8   L atm

  Convert:   w  =  - 8 x 101.3  =  - 810.4  J

  ANSWER:  w = -810.4 J. Negative, so the gas did 810.4 J of work
           ON the surroundings. Correct - it EXPANDED.
```

## WORKED EXAMPLE 7 (reversible isothermal)

*2 mol of an ideal gas expands isothermally and reversibly at 300 K from 1 L to 10 L.
Calculate w, q and delta U. (R = 8.314 J/K/mol)*

```
  w  =  - 2.303 n R T log ( V2 / V1 )

     =  - 2.303 x 2 x 8.314 x 300 x log ( 10 / 1 )

     log 10  =  1

     2.303 x 2       =  4.606
     4.606 x 8.314   =  38.29
     38.29 x 300     =  11487

     w  =  - 11487 J   =   - 11.49 kJ

  ISOTHERMAL, ideal gas   ->   delta U  =  0

  q  =  - w  =  + 11487 J  =  + 11.49 kJ

  ANSWER:  w = -11.49 kJ ,  q = +11.49 kJ ,  delta U = 0
           The gas did 11.49 kJ of work and absorbed exactly that much heat.
```

## WORKED EXAMPLE 8 (comparing the two paths)

*The same 2 mol gas at 300 K expands from 1 L to 10 L, but this time irreversibly
against a constant pressure of 1 atm. Find w and compare with Example 7.*

```
  w  =  - p(ext) ( V2 - V1 )  =  - 1 ( 10 - 1 )  =  - 9 L atm

     =  - 9 x 101.3  =  - 911.7 J   =   - 0.91 kJ

  COMPARE:   reversible    w = - 11.49 kJ     (much bigger)
             irreversible  w = -  0.91 kJ

  CONCLUSION:  a REVERSIBLE process gives the MAXIMUM work.
  This also PROVES that w is a PATH FUNCTION - same start, same finish,
  totally different work.
```

---

# ===============================================================
# TOPIC 8 — ENTHALPY  H = U + pV
# ===============================================================

## Why enthalpy exists at all

Almost no chemistry is done in a sealed steel box. We do it in **open beakers**, at the
constant pressure of the atmosphere. When a gas is produced, some energy is "wasted"
pushing the atmosphere out of the way. Enthalpy is the bookkeeping term that includes
that push.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |              H   =   U   +   p V                                    |
  |                                                                     |
  |  H is a STATE function and an EXTENSIVE property.                   |
  |  Like U, its absolute value cannot be measured - only delta H.      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## q at constant volume vs q at constant pressure

```
  AT CONSTANT VOLUME (a sealed bomb):
        delta V = 0   ->   w = - p delta V = 0
        delta U = q(v) + 0

        +-------------------------------------+
        |        q(v)   =   delta U           |
        +-------------------------------------+

  AT CONSTANT PRESSURE (an open beaker):
        w  =  - p delta V
        delta U  =  q(p)  -  p delta V
        q(p)  =  delta U  +  p delta V
        q(p)  =  (U2 - U1) + p(V2 - V1)
              =  (U2 + p V2)  -  (U1 + p V1)
              =  H2 - H1

        +-------------------------------------+
        |        q(p)   =   delta H           |
        +-------------------------------------+
```

**In one line:** heat measured in a sealed container = delta U;
heat measured in an open container = delta H.

## The relation delta H = delta U + delta n(g) R T

```
  DERIVATION

     delta H  =  delta U  +  delta ( p V )

  At constant pressure:     delta H  =  delta U  +  p delta V

  For an IDEAL GAS,  p V = n R T,  so at constant p and T:

           p delta V  =  ( delta n(g) ) R T

  +---------------------------------------------------------------------+
  |                                                                     |
  |        delta H   =   delta U   +   delta n(g)  R  T                 |
  |                                                                     |
  |   delta n(g)  =  (moles of GASEOUS products)                        |
  |                     -  (moles of GASEOUS reactants)                 |
  |                                                                     |
  |   Count ONLY gases. Ignore solids and liquids.                      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  THREE CASES

  delta n(g) = 0    ->   delta H  =  delta U
                         e.g.  H2(g) + Cl2(g)  ->  2 HCl(g)     (2 - 2 = 0)
                               C(s) + O2(g)    ->  CO2(g)       (1 - 1 = 0)

  delta n(g) > 0    ->   delta H  >  delta U
                         e.g.  CaCO3(s) -> CaO(s) + CO2(g)      (1 - 0 = +1)

  delta n(g) < 0    ->   delta H  <  delta U
                         e.g.  N2(g) + 3 H2(g) -> 2 NH3(g)      (2 - 4 = -2)
```

> **TRAP:** Watch the units! delta U is usually given in **kJ** but R is
> 8.314 **J**/K/mol. Either use R = 8.314 x 10^-3 kJ/K/mol, or convert delta U to joules.
> Mixing them is the number one reason students lose this 4-mark question.

## WORKED EXAMPLE 9

*For the reaction CO(g) + 1/2 O2(g) -> CO2(g), delta U = -282.85 kJ/mol at 298 K.
Calculate delta H. (R = 8.314 J/K/mol)*

```
  STEP 1   delta n(g)  =  (gaseous products) - (gaseous reactants)
                       =  1  -  ( 1 + 0.5 )
                       =  1 - 1.5  =  - 0.5

  STEP 2   delta n(g) R T  =  (-0.5)(8.314 x 10^-3 kJ/K/mol)(298 K)

           8.314 x 10^-3 x 298  =  2.4776 kJ/mol
           x (-0.5)             =  - 1.2388 kJ/mol

  STEP 3   delta H  =  delta U + delta n(g) R T
                    =  - 282.85  +  ( - 1.2388 )
                    =  - 284.09 kJ/mol

  ANSWER:  delta H = -284.09 kJ/mol
           (More negative than delta U, as expected: delta n(g) is negative.)
```

## WORKED EXAMPLE 10

*The heat of combustion of benzene at constant volume (298 K) is -3263.9 kJ/mol.
Calculate delta H.  C6H6(l) + 15/2 O2(g) -> 6 CO2(g) + 3 H2O(l)*

```
  STEP 1   Count GASES only.
           Products: 6 mol CO2 gas   (H2O is LIQUID - do not count it)
           Reactants: 7.5 mol O2 gas (C6H6 is LIQUID - do not count it)

           delta n(g)  =  6  -  7.5  =  - 1.5

  STEP 2   delta n(g) R T  =  (-1.5)(8.314 x 10^-3)(298)
                           =  (-1.5)(2.4776)
                           =  - 3.7164 kJ/mol

  STEP 3   delta H  =  - 3263.9  -  3.7164   =   - 3267.6 kJ/mol

  ANSWER:  delta H = -3267.6 kJ/mol
```

## WORKED EXAMPLE 11

*For N2(g) + 3 H2(g) -> 2 NH3(g), delta H = -92.4 kJ at 298 K. Find delta U.*

```
  delta n(g)  =  2 - (1 + 3)  =  - 2

  delta H  =  delta U + delta n(g) R T
  delta U  =  delta H - delta n(g) R T
           =  - 92.4  -  ( -2 )( 8.314 x 10^-3 )( 298 )
           =  - 92.4  +  2 ( 2.4776 )
           =  - 92.4  +  4.955
           =  - 87.44 kJ

  ANSWER:  delta U = -87.44 kJ
```

---

# ===============================================================
# TOPIC 9 — HEAT CAPACITY, Cp, Cv AND  Cp - Cv = R
# ===============================================================

## The three "capacities"

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  HEAT CAPACITY  C   -  the heat needed to raise the temperature of  |
  |                        the WHOLE SAMPLE by 1 K (or 1 degC).         |
  |                                                                     |
  |                        q  =  C  x  delta T        unit:  J / K      |
  |                        EXTENSIVE                                    |
  |                                                                     |
  |  SPECIFIC HEAT  s   -  heat needed to raise the temperature of      |
  |                        1 GRAM of the substance by 1 K.              |
  |                                                                     |
  |                        q  =  m  x  s  x  delta T   unit: J/g/K      |
  |                        INTENSIVE                                    |
  |                                                                     |
  |  MOLAR HEAT         -  heat needed to raise the temperature of      |
  |  CAPACITY  Cm          1 MOLE of the substance by 1 K.              |
  |                                                                     |
  |                        q  =  n  x  Cm  x  delta T  unit: J/mol/K    |
  |                        INTENSIVE                                    |
  |                                                                     |
  +---------------------------------------------------------------------+

  For water:  specific heat  s = 4.18 J/g/K  (= 1 cal/g/K)
```

## Cv and Cp

```
  Cv  -  molar heat capacity at CONSTANT VOLUME.
         No work is done, so ALL the heat raises the internal energy.
                 q(v) = delta U = n Cv delta T

  Cp  -  molar heat capacity at CONSTANT PRESSURE.
         The gas ALSO expands and pushes the atmosphere away, so extra heat
         is needed. Therefore  Cp is ALWAYS GREATER than Cv.
                 q(p) = delta H = n Cp delta T
```

## DERIVATION OF  Cp - Cv = R  (4 marks — learn every line)

```
  STEP 1   At constant volume,   q(v) = delta U,   so for 1 mole

                  Cv  =  ( dU / dT )   at constant V

  STEP 2   At constant pressure,  q(p) = delta H,  so for 1 mole

                  Cp  =  ( dH / dT )   at constant p

  STEP 3   By definition of enthalpy,   H  =  U  +  p V

           For 1 mole of an ideal gas,  p V = R T , therefore

                  H  =  U  +  R T

  STEP 4   Differentiate both sides with respect to T:

                  dH / dT   =   dU / dT   +   R

  STEP 5   Substitute step 1 and step 2:

  +---------------------------------------------------------------------+
  |                                                                     |
  |                  Cp   =   Cv   +   R                                |
  |                                                                     |
  |                  Cp   -   Cv   =   R                                |
  |                                                                     |
  +---------------------------------------------------------------------+

  PHYSICAL MEANING:  the extra heat R is exactly the work the gas must do
  in pushing back the atmosphere while it expands at constant pressure.

  (For n moles:   Cp - Cv  =  n R )
```

```
  USEFUL VALUES (ideal gases)

  +------------------+-----------+-----------+---------------------+
  |  TYPE OF GAS     |    Cv     |    Cp     |  gamma = Cp / Cv    |
  +------------------+-----------+-----------+---------------------+
  |  Monoatomic      |  (3/2) R  |  (5/2) R  |       1.67          |
  |  (He, Ne, Ar)    |  = 12.47  |  = 20.78  |                     |
  +------------------+-----------+-----------+---------------------+
  |  Diatomic        |  (5/2) R  |  (7/2) R  |       1.40          |
  |  (H2, O2, N2)    |  = 20.78  |  = 29.10  |                     |
  +------------------+-----------+-----------+---------------------+
```

## WORKED EXAMPLE 12

*Calculate the heat required to raise the temperature of 60 g of water from 25 degC
to 75 degC. Specific heat of water = 4.18 J/g/K.*

```
  q  =  m  s  delta T
     =  60  x  4.18  x  ( 75 - 25 )
     =  60  x  4.18  x  50
     =  12540  J   =   12.54 kJ
```

## WORKED EXAMPLE 13

*The Cp of a diatomic gas is 29.1 J/K/mol. Find Cv.*

```
  Cp - Cv  =  R
  Cv  =  Cp - R  =  29.1  -  8.314  =  20.79 J/K/mol
```

---

# ===============================================================
# TOPIC 10 — CALORIMETRY (how delta U and delta H are actually measured)
# ===============================================================

Calorimetry = measuring heat by watching a **temperature rise**.

## (a) BOMB CALORIMETER — measures delta U (constant VOLUME)

```
     +-------------------------------------------+
     |          insulated outer jacket           |
     |   +-----------------------------------+   |
     |   |     water  (known mass)           |   |
     |   |        [thermometer]  [stirrer]   |   |
     |   |    +-------------------------+    |   |
     |   |    |  STEEL BOMB             |    |   |
     |   |    |  (rigid, fixed volume)  |    |   |
     |   |    |   sample + excess O2    |    |   |
     |   |    |   ignition wires        |    |   |
     |   |    +-------------------------+    |   |
     |   +-----------------------------------+   |
     +-------------------------------------------+

  HOW IT WORKS
    1. A weighed sample is sealed in the steel bomb with excess oxygen at
       high pressure.
    2. The bomb is immersed in a known mass of water inside an insulated jacket.
    3. The sample is ignited electrically.
    4. The heat released warms the water and the calorimeter; the temperature
       rise delta T is read.

  KEY POINT: the steel bomb is RIGID, so the VOLUME CANNOT CHANGE.
             delta V = 0  ->  w = 0  ->  the heat measured is  delta U.

  +---------------------------------------------------------------------+
  |          q  =  -  C(calorimeter)  x  delta T                        |
  |                                                                     |
  |          delta U  =  q / (number of moles of sample)                |
  +---------------------------------------------------------------------+

  The minus sign appears because heat GAINED by the water was LOST by the
  reacting system.
```

## (b) COFFEE-CUP CALORIMETER — measures delta H (constant PRESSURE)

```
            [thermometer]     [stirrer]
                 |               |
         +-------|---------------|-------+
         |    +--v---------------v--+    |   <- lid (loose, so pressure
         |    |                     |    |      stays at ATMOSPHERIC)
         |    |   reaction mixture  |    |
         |    |   in solution       |    |
         |    +---------------------+    |
         |     two nested polystyrene    |
         |     (thermocol) cups          |
         +-------------------------------+

  HOW IT WORKS
    1. Known volumes of the two solutions are mixed in the insulated cup.
    2. The lid is loose, so the pressure stays constant at 1 atm.
    3. The temperature change of the solution is measured.

  KEY POINT: pressure is CONSTANT, so the heat measured is  delta H.

  +---------------------------------------------------------------------+
  |          q  =  m  x  s  x  delta T       (m, s of the SOLUTION)     |
  |                                                                     |
  |          delta H  =  - q / (moles of limiting reactant)             |
  +---------------------------------------------------------------------+

  Used for: enthalpy of NEUTRALISATION, of SOLUTION, of DILUTION.
```

## WORKED EXAMPLE 14 (bomb calorimeter)

*1.00 g of graphite is burnt in a bomb calorimeter. The temperature rises from
298.0 K to 299.0 K. The heat capacity of the calorimeter is 20.7 kJ/K.
Find delta U for the combustion of graphite in kJ/mol.*

```
  STEP 1   Heat absorbed by the calorimeter
              = C x delta T  =  20.7 x ( 299.0 - 298.0 )  =  20.7 kJ

  STEP 2   That heat came OUT of the reaction, so for the 1.00 g sample
              q  =  - 20.7 kJ

  STEP 3   Constant volume  ->  this q IS delta U.
           Moles of C in 1.00 g  =  1.00 / 12  =  0.0833 mol

  STEP 4   delta U  =  - 20.7 / 0.0833  =  - 248.4 kJ/mol

  ANSWER:  delta U = -2.48 x 10^2 kJ/mol
```

## WORKED EXAMPLE 15 (coffee-cup calorimeter)

*50 mL of 1.0 M HCl is mixed with 50 mL of 1.0 M NaOH in a coffee-cup calorimeter.
The temperature rises by 6.7 K. Take the density of the solution as 1 g/mL and its
specific heat as 4.18 J/g/K. Find the enthalpy of neutralisation.*

```
  STEP 1   Total mass of solution  =  50 + 50  =  100 mL  =  100 g

  STEP 2   Heat gained by the solution
              q  =  m s delta T  =  100 x 4.18 x 6.7  =  2800.6 J  =  2.80 kJ

  STEP 3   Moles of water formed
              HCl :  0.050 L x 1.0 M  =  0.050 mol
              NaOH:  0.050 L x 1.0 M  =  0.050 mol      (both used up)
              ->  0.050 mol of water formed

  STEP 4   delta H  =  - 2.80 / 0.050  =  - 56.0 kJ/mol

  ANSWER:  delta H(neutralisation) = -56.0 kJ/mol
           (Close to the standard value of about -57.1 kJ/mol - correct.)
```

---

# ===============================================================
# TOPIC 11 — THE STANDARD ENTHALPY CHANGES (DEFINITIONS)
# ===============================================================

First, what does "**standard**" mean?

```
  STANDARD STATE  =  the pure substance in its most stable form at
                     1 bar pressure and the stated temperature
                     (usually 298 K).

  The symbol is written  delta H(0)  or  delta H(standard).

  Examples of standard states:  C as GRAPHITE (not diamond),
                                O as O2 GAS,  Br as LIQUID bromine,
                                S as RHOMBIC sulphur.
```

## The full list — each definition is a free 2-mark question

```
  ---------------------------------------------------------------------------
  1. ENTHALPY OF FORMATION       delta H(f)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of a compound is formed from its
  ELEMENTS in their standard states.

     C(graphite) + 2 H2(g)  ->  CH4(g)        delta H(f) = -74.8 kJ/mol

  IMPORTANT: the enthalpy of formation of any ELEMENT in its standard
  state is taken as ZERO.   delta H(f) of O2(g) = 0, of C(graphite) = 0.

  ---------------------------------------------------------------------------
  2. ENTHALPY OF COMBUSTION      delta H(c)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of a substance is COMPLETELY BURNT
  in excess oxygen.  It is ALWAYS NEGATIVE (combustion is always exothermic).

     CH4(g) + 2 O2(g)  ->  CO2(g) + 2 H2O(l)  delta H(c) = -890.3 kJ/mol

  ---------------------------------------------------------------------------
  3. ENTHALPY OF NEUTRALISATION
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of water ("one gram equivalent" of acid
  and base) is formed by the neutralisation of an acid by a base in
  dilute solution.

     HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)   delta H = -57.1 kJ/mol

  For any STRONG acid + STRONG base it is always about -57.1 kJ/mol,
  because the only reaction actually happening is
                  H+(aq)  +  OH-(aq)  ->  H2O(l)

  For a WEAK acid or weak base it is LESS negative, because some energy
  is used up in IONISING the weak electrolyte.

  ---------------------------------------------------------------------------
  4. ENTHALPY OF ATOMISATION     delta H(a)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of a substance is completely broken
  into GASEOUS ATOMS.

     H2(g)      ->  2 H(g)        delta H(a) = +435.0 kJ/mol
     CH4(g)     ->  C(g) + 4 H(g) delta H(a) = +1665 kJ/mol
     Na(s)      ->  Na(g)         delta H(a) = +108.4 kJ/mol

  ---------------------------------------------------------------------------
  5. ENTHALPY OF SUBLIMATION     delta H(sub)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of a solid changes DIRECTLY into vapour
  at constant temperature and pressure.

     I2(s)  ->  I2(g)             delta H(sub) = +62.4 kJ/mol

     RELATION:   delta H(sub)  =  delta H(fusion)  +  delta H(vaporisation)

  ---------------------------------------------------------------------------
  6. ENTHALPY OF PHASE TRANSITION
  ---------------------------------------------------------------------------
  FUSION (melting):   H2O(s) -> H2O(l)      delta H(fus) = +6.0 kJ/mol
  VAPORISATION:       H2O(l) -> H2O(g)      delta H(vap) = +40.79 kJ/mol
  All phase changes that ABSORB heat (melting, boiling, subliming) have
  a POSITIVE delta H. Freezing and condensing are NEGATIVE.

  ---------------------------------------------------------------------------
  7. IONISATION ENTHALPY         delta H(i)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of electrons is removed from ONE MOLE
  of isolated GASEOUS ATOMS. Always POSITIVE (energy must be supplied).

     Na(g)  ->  Na+(g) + e-       delta H(i) = +496 kJ/mol

  (The partner quantity, ELECTRON GAIN ENTHALPY, is the enthalpy change
   when one mole of electrons is ADDED to one mole of gaseous atoms:
     Cl(g) + e-  ->  Cl-(g)       delta H(eg) = -349 kJ/mol )

  ---------------------------------------------------------------------------
  8. BOND ENTHALPY / BOND DISSOCIATION ENTHALPY
  ---------------------------------------------------------------------------
  The enthalpy change required to BREAK ONE MOLE of a particular bond in
  the GASEOUS state. Always POSITIVE (breaking bonds costs energy).

     H2(g)  ->  2 H(g)            bond enthalpy of H-H = +435 kJ/mol

  For a POLYATOMIC molecule we use the MEAN (average) bond enthalpy,
  because the four C-H bonds in CH4 do not break with equal ease.
     mean C-H bond enthalpy  =  1665 / 4  =  416 kJ/mol

  ---------------------------------------------------------------------------
  9. LATTICE ENTHALPY            delta H(lattice)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of an ionic solid is separated
  completely into its GASEOUS IONS (infinitely far apart).

     NaCl(s)  ->  Na+(g)  +  Cl-(g)     delta H(lattice) = +788 kJ/mol

  (Written the other way round - ions coming together to form the solid -
   it is -788 kJ/mol. Always state which direction you mean.)

  ---------------------------------------------------------------------------
  10. ENTHALPY OF SOLUTION       delta H(sol)
  ---------------------------------------------------------------------------
  The enthalpy change when ONE MOLE of a substance is dissolved in a
  specified amount of solvent (usually so much that further dilution
  causes no further heat change - "infinite dilution").

     NaCl(s) + aq  ->  NaCl(aq)   delta H(sol) = +3.9 kJ/mol

     RELATION:  delta H(sol) = delta H(lattice) + delta H(hydration)

     If lattice enthalpy wins  ->  delta H(sol) POSITIVE  -> solution COOLS
     If hydration wins         ->  delta H(sol) NEGATIVE  -> solution WARMS
  ---------------------------------------------------------------------------
```

> **TRAP:** Every definition must contain the words "**ONE MOLE**" and, for
> standard values, "**in the standard state**". Miss them and you lose half the mark.

---

# ===============================================================
# TOPIC 12 — HESS'S LAW OF CONSTANT HEAT SUMMATION
# ===============================================================

## Statement

> **The total enthalpy change of a reaction is the same whether the reaction takes place
> in one single step or in several steps.**

## Why it is true

Because **enthalpy is a state function**. Only the start and the finish matter — exactly
like the hill in Topic 3.

```
                      delta H (one step)
        A  ------------------------------------------>  D
        |                                               ^
        |  delta H1                                     |
        v                                     delta H3  |
        B  ------------------------------->  C  --------+
                      delta H2

  +---------------------------------------------------------------------+
  |         delta H  =  delta H1  +  delta H2  +  delta H3              |
  +---------------------------------------------------------------------+
```

## The three rules for manipulating equations

```
  RULE 1   REVERSE an equation   ->  change the SIGN of delta H
  RULE 2   MULTIPLY an equation by n  ->  MULTIPLY delta H by n
  RULE 3   ADD equations  ->  ADD their delta H values
           (cancel anything that appears on both sides)
```

## WORKED EXAMPLE 16 (the classic)

*Carbon monoxide cannot be made cleanly in the lab, so its enthalpy of formation
cannot be measured directly. Calculate it from:*

```
   (i)   C(s) + O2(g)  ->  CO2(g)              delta H = - 393.5 kJ
   (ii)  CO(g) + 1/2 O2(g)  ->  CO2(g)         delta H = - 283.0 kJ

   TARGET:   C(s) + 1/2 O2(g)  ->  CO(g)       delta H = ?
```

```
  STEP 1   In the target, C(s) is on the LEFT. Equation (i) already has it
           on the left. KEEP (i) as it is.

              C(s) + O2(g)  ->  CO2(g)              delta H = - 393.5

  STEP 2   In the target, CO(g) is on the RIGHT. In (ii) it is on the LEFT.
           REVERSE (ii) and change the sign.

              CO2(g)  ->  CO(g) + 1/2 O2(g)         delta H = + 283.0

  STEP 3   ADD them and cancel:

              C(s) + O2(g) + CO2(g)  ->  CO2(g) + CO(g) + 1/2 O2(g)

           CO2 cancels from both sides.
           O2:  1 mol on the left, 1/2 mol on the right  ->  1/2 mol left over.

              C(s) + 1/2 O2(g)  ->  CO(g)

  STEP 4   delta H  =  ( - 393.5 )  +  ( + 283.0 )  =  - 110.5 kJ

  ANSWER:  delta H(f) of CO(g) = -110.5 kJ/mol
```

## WORKED EXAMPLE 17

*Calculate delta H for  C(graphite) -> C(diamond)  given:*

```
   C(graphite) + O2(g)  ->  CO2(g)     delta H = - 393.5 kJ
   C(diamond)  + O2(g)  ->  CO2(g)     delta H = - 395.4 kJ
```

```
  Keep the first, reverse the second:

     C(graphite) + O2  ->  CO2               - 393.5
     CO2  ->  C(diamond) + O2                + 395.4
     -------------------------------------------------
     C(graphite)  ->  C(diamond)             + 1.9 kJ

  ANSWER:  delta H = +1.9 kJ/mol   (diamond has slightly MORE enthalpy,
           which is why graphite is the standard state of carbon.)
```

## The BORN-HABER CYCLE (Hess's law applied to an ionic solid)

It is used to find the **lattice enthalpy**, which cannot be measured directly.

```
                        delta H(f)  =  - 411 kJ/mol
     Na(s) + 1/2 Cl2(g) --------------------------------->  NaCl(s)
        |                                                      ^
        | S = sublimation  +108.7                              |
        v                                                      |
     Na(g) + 1/2 Cl2(g)                                        |
        |                                                      | U = lattice
        | IE = ionisation  +495.6                              |  enthalpy of
        v                                                      |  FORMATION
     Na+(g) + 1/2 Cl2(g)                                       |  (negative)
        |                                                      |
        | D/2 = half bond dissociation  +121                   |
        v                                                      |
     Na+(g) + Cl(g)                                            |
        |                                                      |
        | EA = electron gain  -348.6                           |
        v                                                      |
     Na+(g) + Cl-(g)  -------------------------------------->--+

  By Hess's law, going round the cycle:

  +---------------------------------------------------------------------+
  |   delta H(f)  =  S  +  IE  +  (D/2)  +  EA  +  U                    |
  +---------------------------------------------------------------------+

  SUBSTITUTE:
     - 411   =   108.7  +  495.6  +  121  +  ( - 348.6 )  +  U

     - 411   =   376.7  +  U

         U   =   - 411  -  376.7   =   - 787.7 kJ/mol

  ANSWER:  lattice enthalpy of NaCl = -787.7 kJ/mol
           (i.e. +787.7 kJ/mol is needed to pull NaCl apart into gaseous ions.)
```

---

# ===============================================================
# TOPIC 13 — delta H OF A REACTION FROM FORMATION ENTHALPIES
# ===============================================================

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   delta H(reaction) =  SUM [ delta H(f) of PRODUCTS ]               |
  |                          -  SUM [ delta H(f) of REACTANTS ]         |
  |                                                                     |
  |   Multiply each delta H(f) by its coefficient in the equation.      |
  |   delta H(f) of any ELEMENT in its standard state = 0.              |
  |                                                                     |
  |   MEMORY:   "PRODUCTS  minus  REACTANTS"                            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 18

*Calculate delta H for  CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)  given
delta H(f): CH4 = -74.8 , CO2 = -393.5 , H2O(l) = -285.8 kJ/mol.*

```
  PRODUCTS:   1 ( -393.5 )  +  2 ( -285.8 )
            =  - 393.5  -  571.6   =   - 965.1 kJ

  REACTANTS:  1 ( -74.8 )   +  2 ( 0 )        <- O2 is an element, so 0
            =  - 74.8 kJ

  delta H  =  ( - 965.1 )  -  ( - 74.8 )
           =  - 965.1  +  74.8
           =  - 890.3 kJ/mol

  ANSWER:  delta H = -890.3 kJ/mol
           (This is also the enthalpy of combustion of methane.)
```

> **TRAP:** "PRODUCTS minus REACTANTS" — students reverse it and get the sign wrong.
> Sanity-check: combustion must come out NEGATIVE. If yours is positive, you flipped it.

---

# ===============================================================
# TOPIC 14 — delta H OF A REACTION FROM BOND ENTHALPIES
# ===============================================================

Breaking bonds needs energy (+). Making bonds releases energy (-).

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   delta H  =  SUM (bond enthalpies of BONDS BROKEN in reactants)    |
  |                 -  SUM (bond enthalpies of BONDS FORMED in products)|
  |                                                                     |
  |   MEMORY:   "REACTANTS  minus  PRODUCTS"                            |
  |             (the OPPOSITE way round to the formation-enthalpy rule!)|
  |                                                                     |
  +---------------------------------------------------------------------+
```

> **TRAP:** These two rules are back to front from one another. Learn them as a pair:
> **formation enthalpies -> products minus reactants.
> Bond enthalpies -> reactants minus products.**
> Bond enthalpies only work when EVERYTHING is a GAS.

## WORKED EXAMPLE 19

*Calculate delta H for H2(g) + Cl2(g) -> 2 HCl(g) given the bond enthalpies
H-H = 435, Cl-Cl = 242, H-Cl = 431 kJ/mol.*

```
  BONDS BROKEN:   1 (H-H)  +  1 (Cl-Cl)   =   435 + 242   =   677 kJ

  BONDS FORMED:   2 (H-Cl)                =   2 x 431     =   862 kJ

  delta H  =  677  -  862   =   - 185 kJ

  ANSWER:  delta H = -185 kJ  (exothermic - stronger bonds were made
           than were broken).
```

## WORKED EXAMPLE 20

*Calculate delta H for  CH4(g) + Cl2(g) -> CH3Cl(g) + HCl(g)  given
C-H = 414 , Cl-Cl = 243 , C-Cl = 331 , H-Cl = 431 kJ/mol.*

```
  Only ONE C-H bond actually breaks (the other three survive).

  BONDS BROKEN:  1 C-H  +  1 Cl-Cl   =   414 + 243   =   657 kJ

  BONDS FORMED:  1 C-Cl +  1 H-Cl    =   331 + 431   =   762 kJ

  delta H  =  657  -  762   =   - 105 kJ

  ANSWER:  delta H = -105 kJ
```

---

# ===============================================================
# TOPIC 15 — SPONTANEITY AND THE LIMITATION OF THE FIRST LAW
# ===============================================================

## What "spontaneous" means

```
  A SPONTANEOUS process is one that takes place ON ITS OWN, without any
  outside help, once it has been started.

  NOTE: "spontaneous" says NOTHING about SPEED.
        The rusting of iron is spontaneous - and takes years.
        Diamond turning into graphite is spontaneous - and takes forever.
```

**Examples of spontaneous processes:**
- Heat flowing from a hot body to a cold body.
- Water flowing downhill.
- A gas expanding to fill the whole container.
- Sugar dissolving in water.
- Iron rusting.

The reverse of each of these **never happens by itself**.

## Why the first law is not enough

```
  Put a hot block against a cold block. Heat flows hot -> cold.
  Energy is conserved.

  Now imagine heat flowing cold -> hot. Energy would ALSO be conserved!
  The first law is perfectly happy with it. But it NEVER HAPPENS.

  +---------------------------------------------------------------------+
  |  LIMITATION OF THE FIRST LAW:                                       |
  |  It tells you energy is conserved, but it does NOT tell you the     |
  |  DIRECTION in which a change will go, or whether it will go at all. |
  +---------------------------------------------------------------------+
```

## Is "exothermic" the test? NO.

Most spontaneous reactions are exothermic, so people guess that
delta H < 0 is the criterion. **It is not.** Counter-examples:

```
  - Melting of ice above 0 degC          delta H = +6.0 kJ/mol   spontaneous
  - Evaporation of water                 delta H = +40.8 kJ/mol  spontaneous
  - NH4Cl dissolving in water (cools it) delta H = +15 kJ/mol    spontaneous
  - NaHCO3 decomposing on heating        delta H positive        spontaneous
```

So a second quantity is needed. That quantity is **ENTROPY**.

---

# ===============================================================
# TOPIC 16 — ENTROPY (S)
# ===============================================================

## The idea in plain English

```
  ENTROPY (S) is a measure of the DISORDER, RANDOMNESS or
  "spread-out-ness" of a system.

  MORE disorder  ->  HIGHER entropy
```

**Everyday analogy.** A brand-new pack of cards in order is *low entropy*. Shuffle it and
it becomes *high entropy*. Keep shuffling and it never goes back into order by itself,
because there is one ordered arrangement and billions of jumbled ones. Nature always
drifts towards the arrangement that has the most ways of happening.

```
  ENTROPY ORDER OF THE STATES OF MATTER

     SOLID       <       LIQUID      <         GAS
   (lowest S)                              (highest S)

    o o o o             o  o  o             o        o
    o o o o    ->        o o   o     ->        o   o
    o o o o             o   o o                  o     o
   fixed lattice     free to slide       free to fly anywhere
```

## The formula

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                            q ( reversible )                         |
  |            delta S  =  ------------------------                     |
  |                                   T                                 |
  |                                                                     |
  |   UNIT:   J / K / mol      (joules per kelvin per mole)             |
  |                                                                     |
  |   S is a STATE function and an EXTENSIVE property.                  |
  |                                                                     |
  |   For a chemical reaction:                                          |
  |       delta S = SUM S(products)  -  SUM S(reactants)                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

> **TRAP:** The `q` in `delta S = q / T` must be the **REVERSIBLE** heat, and `T` must be
> in **KELVIN**. Also note that entropy is quoted in **J**/K/mol while enthalpy is in
> **kJ**/mol. You must convert before using delta G = delta H - T delta S.

## Entropy change in phase transitions

At the melting point or boiling point, temperature is constant, so:

```
  +---------------------------------------------------------------------+
  |                       delta H (fusion)                              |
  |    delta S (fusion) = -------------------      T(f) = melting point |
  |                             T ( f )                                 |
  |                                                                     |
  |                       delta H (vaporisation)                        |
  |    delta S (vap)    = -----------------------  T(b) = boiling point |
  |                             T ( b )                                 |
  +---------------------------------------------------------------------+
```

## When does entropy INCREASE? (predicting the sign)

```
  delta S is POSITIVE when:
     - solid  ->  liquid  ->  gas       (melting, boiling, subliming)
     - a solid dissolves in water
     - the NUMBER OF GAS MOLECULES INCREASES
           2 KClO3(s)  ->  2 KCl(s) + 3 O2(g)     delta S = large +ve
     - temperature rises
     - a mixture forms from pure substances

  delta S is NEGATIVE when:
     - gas -> liquid -> solid           (condensing, freezing)
     - the NUMBER OF GAS MOLECULES DECREASES
           N2(g) + 3 H2(g) -> 2 NH3(g)  (4 mol gas -> 2 mol gas)  -ve
     - a gas dissolves in a liquid
```

**Fastest exam trick:** count the moles of gas on each side. That decides the sign of
delta S in nine questions out of ten.

## WORKED EXAMPLE 21

*The enthalpy of fusion of ice is 6.0 kJ/mol at 273 K. Calculate the entropy of fusion.*

```
                     delta H (fus)          6000  J/mol
   delta S (fus)  =  --------------   =   ---------------   =   21.98 J/K/mol
                          T (f)                273  K

  ANSWER:  delta S = +22.0 J/K/mol (positive - liquid is more disordered
           than solid, as expected).
```

## WORKED EXAMPLE 22

*The enthalpy of vaporisation of water is 40.79 kJ/mol at its boiling point of 373 K.
Calculate delta S(vap).*

```
                    40790  J/mol
   delta S  =    -----------------   =   109.4  J/K/mol
                      373  K

  ANSWER:  +109.4 J/K/mol
  Notice it is MUCH bigger than the entropy of fusion - going to a GAS
  creates far more disorder than merely melting.
```

## WORKED EXAMPLE 23

*Predict the sign of delta S for:*

```
  (a)  2 SO2(g) + O2(g) -> 2 SO3(g)
       gas moles:  3  ->  2      DECREASE   ->   delta S is NEGATIVE

  (b)  CaCO3(s) -> CaO(s) + CO2(g)
       gas moles:  0  ->  1      INCREASE   ->   delta S is POSITIVE

  (c)  H2O(l) -> H2O(s)   (freezing)
       liquid -> solid, more ordered   ->   delta S is NEGATIVE

  (d)  NaCl(s) -> Na+(aq) + Cl-(aq)
       an ordered lattice breaks into free ions -> delta S is POSITIVE
```

---

# ===============================================================
# TOPIC 17 — THE SECOND LAW OF THERMODYNAMICS
# ===============================================================

## Statements (any one earns the mark)

> **1. The entropy of the universe always increases in a spontaneous process.**
>
> 2. Heat cannot flow of its own accord from a colder body to a hotter body.
>
> 3. It is impossible to convert heat completely into work without leaving some
>    change somewhere (no heat engine is 100 % efficient).
>
> 4. All spontaneous processes are thermodynamically irreversible, and the entropy
>    of the universe tends towards a maximum.

## The entropy criterion for spontaneity

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   delta S(total) =  delta S(system)  +  delta S(surroundings)       |
  |                                                                     |
  |   delta S(total)  >  0   ->  SPONTANEOUS                            |
  |   delta S(total)  =  0   ->  EQUILIBRIUM                            |
  |   delta S(total)  <  0   ->  NON-spontaneous (the REVERSE is)       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

> **TRAP:** The system's OWN entropy is allowed to decrease! Water freezing has
> delta S(system) negative, yet it is spontaneous below 0 degC — because the heat
> released raises the entropy of the SURROUNDINGS by even more. It is
> **delta S(total)** that must be positive.

The awkward part is that this criterion forces you to calculate something about the
surroundings, which you usually do not care about. Gibbs energy fixes that.

---

# ===============================================================
# TOPIC 18 — GIBBS ENERGY (THE MASTER CRITERION)
# ===============================================================

## Definition and derivation

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                   G   =   H   -   T S                               |
  |                                                                     |
  |   At constant temperature:                                          |
  |                                                                     |
  |          delta G   =   delta H   -   T  delta S                     |
  |                                                                     |
  |   G is a STATE function, EXTENSIVE, unit kJ/mol.                    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Where it comes from (short version):

```
  The surroundings receive the heat the system loses, at constant p:

      delta S(surroundings)  =  - delta H(system) / T

      delta S(total) = delta S(system) - delta H(system)/T

  Multiply through by ( - T ):

      - T delta S(total)  =  delta H  -  T delta S   =   delta G

  So   delta G  =  - T delta S(total).
  Since T is always positive, "delta S(total) POSITIVE" is exactly the
  same statement as "delta G NEGATIVE".
```

## The criterion

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    delta G  <  0    ->   SPONTANEOUS  (feasible, goes forward)      |
  |    delta G  =  0    ->   EQUILIBRIUM  (no net change)               |
  |    delta G  >  0    ->   NON-SPONTANEOUS (the REVERSE is spontaneous|
  |                                                                     |
  +---------------------------------------------------------------------+

  delta G also equals the MAXIMUM USEFUL WORK (non-expansion work) that
  can be obtained from the process:      w(useful, max)  =  delta G
```

## THE FOUR CASES — the table that earns 4 marks

```
  +---+---------+---------+-------------------------+---------------------+
  | # | delta H | delta S |        delta G          |  SPONTANEOUS?       |
  +---+---------+---------+-------------------------+---------------------+
  | 1 |    -    |    +    | -ve at ALL T            | YES at all          |
  |   | exo     | disorder| ( -ve ) - T( +ve )      | temperatures        |
  |   |         | rises   |  = always negative      |                     |
  +---+---------+---------+-------------------------+---------------------+
  | 2 |    +    |    -    | +ve at ALL T            | NEVER, at any       |
  |   | endo    | order   | ( +ve ) - T( -ve )      | temperature         |
  |   |         | rises   |  = always positive      |                     |
  +---+---------+---------+-------------------------+---------------------+
  | 3 |    -    |    -    | -ve only when           | YES at LOW          |
  |   | exo     | order   | T delta S is small      | temperature         |
  |   |         | rises   | i.e. T < dH / dS        |                     |
  +---+---------+---------+-------------------------+---------------------+
  | 4 |    +    |    +    | -ve only when           | YES at HIGH         |
  |   | endo    | disorder| T delta S is large      | temperature         |
  |   |         | rises   | i.e. T > dH / dS        |                     |
  +---+---------+---------+-------------------------+---------------------+

  THE CROSS-OVER TEMPERATURE (where delta G = 0):

              +-----------------------------+
              |                delta H      |
              |     T   =   -------------   |
              |                delta S      |
              +-----------------------------+
```

```
  EXAMPLES OF EACH CASE

  Case 1:  2 H2O2(l) -> 2 H2O(l) + O2(g)     exothermic, gas produced
  Case 2:  3 O2(g) -> 2 O3(g)                endothermic, fewer gas moles
  Case 3:  H2O(l) -> H2O(s)  (freezing)      exothermic, more ordered
                                             (spontaneous below 273 K only)
  Case 4:  CaCO3(s) -> CaO(s) + CO2(g)       endothermic, gas produced
                                             (spontaneous above ~1100 K only)
```

## WORKED EXAMPLE 24

*For a reaction delta H = +31.4 kJ/mol and delta S = +94.2 J/K/mol.
(a) Is it spontaneous at 298 K? (b) Above what temperature does it become spontaneous?*

```
  FIRST convert delta S to kJ:   94.2 J/K/mol  =  0.0942 kJ/K/mol
  (or convert delta H to J: 31400 J/mol - either way, JUST BE CONSISTENT)

  (a)   delta G  =  delta H  -  T delta S
                 =  31400  -  ( 298 x 94.2 )          [working in joules]
                 =  31400  -  28071.6
                 =  + 3328.4  J/mol   =   + 3.33 kJ/mol

        delta G is POSITIVE  ->  NOT spontaneous at 298 K.

  (b)   It becomes spontaneous when delta G = 0 and then goes negative:

                       delta H          31400
              T   =   ----------   =   --------   =   333.3 K
                       delta S           94.2

        ANSWER: spontaneous ABOVE 333.3 K (about 60 degC).
        (This is Case 4: delta H +ve, delta S +ve -> high temperature.)
```

## WORKED EXAMPLE 25

*For the reaction N2(g) + 3H2(g) -> 2NH3(g), delta H = -92.4 kJ and
delta S = -198.3 J/K at 298 K. Calculate delta G and comment.*

```
  delta G  =  delta H  -  T delta S

           =  ( - 92400 J )  -  ( 298 K x ( - 198.3 J/K ) )

           =  - 92400  +  59093

           =  - 33307 J   =   - 33.3 kJ

  delta G is NEGATIVE  ->  the reaction IS spontaneous at 298 K.

  BUT this is Case 3 (dH -ve, dS -ve): it will STOP being spontaneous
  above    T = 92400 / 198.3 = 466 K.
  This is exactly why ammonia synthesis is run at moderate temperature.
```

---

# ===============================================================
# TOPIC 19 — GIBBS ENERGY AND THE EQUILIBRIUM CONSTANT
# ===============================================================

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    delta G (standard)  =  -  R T  ln K                              |
  |                                                                     |
  |    delta G (standard)  =  -  2.303  R T  log K                      |
  |                                                                     |
  |    R = 8.314 J/K/mol       T in kelvin       K = equilibrium const. |
  |                                                                     |
  +---------------------------------------------------------------------+

  At 298 K the whole factor 2.303 R T is a fixed number:

         2.303 x 8.314 x 298  =  5705  J   =   5.705 kJ

  +---------------------------------------------------------------------+
  |    SHORTCUT AT 298 K:   delta G  =  - 5.705 log K   (in kJ/mol)     |
  +---------------------------------------------------------------------+
```

```
  WHAT THE SIGN TELLS YOU

  +--------------------+------------------+----------------------------+
  |  delta G(standard) |        K         |  MEANING                   |
  +--------------------+------------------+----------------------------+
  |     NEGATIVE       |     K  >  1      |  products favoured;        |
  |                    |                  |  reaction goes forward     |
  +--------------------+------------------+----------------------------+
  |     ZERO           |     K  =  1      |  at equilibrium as written |
  +--------------------+------------------+----------------------------+
  |     POSITIVE       |     K  <  1      |  reactants favoured;       |
  |                    |                  |  barely proceeds forward   |
  +--------------------+------------------+----------------------------+
```

## WORKED EXAMPLE 26

*Calculate delta G(standard) at 298 K for a reaction whose equilibrium constant is 10.*

```
  delta G  =  - 2.303 R T log K
           =  - 2.303 x 8.314 x 298 x log 10
           =  - 5705  x  1
           =  - 5705 J   =   - 5.71 kJ/mol

  ANSWER: -5.71 kJ/mol. Negative, and K > 1 - consistent.
```

## WORKED EXAMPLE 27

*delta G(standard) for a reaction at 298 K is -13.6 kJ/mol. Calculate K.*

```
  delta G  =  - 2.303 R T log K

  - 13600  =  - 5705  x  log K

                13600
  log K   =   ---------   =   2.384
                 5705

  K  =  antilog ( 2.384 )  =  2.42 x 10^2   =   242

  ANSWER:  K = 2.42 x 10^2  (K >> 1, so products are strongly favoured -
           consistent with delta G being negative.)
```

## WORKED EXAMPLE 28

*For a reaction at 298 K, delta H = -57.0 kJ/mol and delta S = -102 J/K/mol.
Calculate delta G and the equilibrium constant K.*

```
  STEP 1   delta G  =  delta H - T delta S
                    =  - 57000  -  ( 298 x ( -102 ) )
                    =  - 57000  +  30396
                    =  - 26604 J/mol   =   - 26.6 kJ/mol

  STEP 2   delta G  =  - 2.303 R T log K
           - 26604  =  - 5705 log K

                        26604
           log K  =   ---------   =   4.663
                        5705

           K  =  antilog ( 4.663 )  =  4.6 x 10^4

  ANSWER:  delta G = -26.6 kJ/mol ,  K = 4.6 x 10^4
```

---

# ===============================================================
# TOPIC 20 — THE THIRD LAW OF THERMODYNAMICS
# ===============================================================

## Statement

> **The entropy of a perfectly crystalline substance is zero at absolute zero
> temperature (0 K).**

```
  WHY:  At 0 K a perfect crystal has every particle locked in one exact
        position, with no motion at all. There is only ONE possible
        arrangement, therefore NO randomness, therefore S = 0.

  WHY IT MATTERS:  it gives us a real zero to count from, so unlike U and H,
        the ABSOLUTE entropy of a substance CAN be found:

  +---------------------------------------------------------------------+
  |    S ( at temperature T )  =  the total entropy gained on heating    |
  |                               the perfect crystal from 0 K to T     |
  +---------------------------------------------------------------------+

  This is why data books list S(standard) values (all positive) for
  every substance, but only delta H(f) values for enthalpy.
```

```
  THE THREE LAWS IN ONE PICTURE

  +--------+---------------------------------+--------------------------+
  |  LAW   |  WHAT IT SAYS                   |  WHAT IT GIVES YOU       |
  +--------+---------------------------------+--------------------------+
  | FIRST  |  Energy is conserved            |  delta U = q + w         |
  |        |                                 |  HOW MUCH energy         |
  +--------+---------------------------------+--------------------------+
  | SECOND |  Entropy of the universe        |  dS(total) > 0           |
  |        |  always increases               |  WHICH WAY it goes       |
  +--------+---------------------------------+--------------------------+
  | THIRD  |  S = 0 for a perfect crystal    |  absolute values of S    |
  |        |  at 0 K                         |                          |
  +--------+---------------------------------+--------------------------+
```

---

# ===============================================================
# CHECKLIST BEFORE YOU HAND IN THE PAPER
# ===============================================================

```
  SIGNS
  [ ] Did I use  delta U = q + w  (NOT q - w)?
  [ ] Is w NEGATIVE for every expansion and POSITIVE for every compression?
  [ ] Is q NEGATIVE for every exothermic reaction?
  [ ] Did I write the minus sign in  w = - p(ext) delta V ?
  [ ] Did I write the minus sign in  delta G = - 2.303 R T log K ?

  UNITS
  [ ] Is every temperature in KELVIN (add 273 to degC)?
  [ ] Did I convert delta S from J/K/mol before mixing it with delta H in kJ?
  [ ] Did I convert L atm to joules ( x 101.3 ) where needed?
  [ ] Did I use the right R?
         8.314 J/K/mol  |  0.0821 L atm/K/mol  |  2 cal/K/mol

  FORMULAS
  [ ] For delta n(g), did I count ONLY GASES (ignore solids and liquids)?
  [ ] Formation enthalpies -> PRODUCTS minus REACTANTS.
  [ ] Bond enthalpies      -> REACTANTS minus PRODUCTS. (opposite way!)
  [ ] delta H(f) of any element in its standard state = 0.
  [ ] Did I multiply each delta H(f) by the COEFFICIENT in the equation?

  HESS'S LAW
  [ ] Did I change the SIGN when I reversed an equation?
  [ ] Did I multiply delta H when I multiplied an equation?
  [ ] Did the unwanted species actually CANCEL? (If not, I set it up wrong.)

  DEFINITIONS
  [ ] Does every enthalpy definition contain the words "ONE MOLE"?
  [ ] Did I give an EXAMPLE / equation with the definition? It carries marks.

  COMMON SENSE CHECK
  [ ] Combustion delta H must be NEGATIVE.
  [ ] Bond breaking / ionisation / atomisation must be POSITIVE.
  [ ] More gas moles on the product side  ->  delta S POSITIVE.
  [ ] delta G negative  <=>  K greater than 1. Do my two answers agree?
  [ ] Did I write the UNIT after every answer (J, kJ, kJ/mol, J/K/mol)?
```
