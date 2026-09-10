# Thermodynamics — Mind Map

**Physics 1st Year · Chapter 13**
**One long-answer question (8 marks) sits in this chapter almost every single year:
the CARNOT ENGINE. Learn that one derivation and you have already won.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                          THERMODYNAMICS
                    (heat  <-->  work, in gases)
                                |
      +-------------------+-----+------+--------------------+
      |                   |            |                    |
  ZEROTH LAW          FIRST LAW    SECOND LAW           THE MACHINES
  "temperature        "energy is   "you cannot          "put the laws
   exists"             conserved"   convert it ALL"      to work"
      |                   |            |                    |
      |                   |            |                    |
  A in equil.        dQ = dU + dW   Kelvin-Planck       HEAT ENGINE
  with C, and             |         (no engine with        |
  B in equil.             |          ONE reservoir)     eta = 1 - Q2/Q1
  with C                  |              |                 |
      |                   |         Clausius           REFRIGERATOR
      v                   |         (heat will NOT        |
  A in equil.             |          flow cold->hot    alpha = Q2/W
  with B                  |          on its own)          |
      |                   |              |             HEAT PUMP
  => same TEMPERATURE     |         both are the SAME     |
                          |              |             CARNOT ENGINE
                          |         REVERSIBLE vs          |
      +-------------------+          IRREVERSIBLE     eta = 1 - T2/T1
      |                                                     |
   THE PIECES                                        Carnot's theorem:
      |                                              NO engine can beat it
   +--+---------+-----------+
   |            |           |
  HEAT Q    INTERNAL     WORK W
  (path)    ENERGY U     (path)
            (STATE                    W = INT P dV
             function)                     |
                                      = AREA UNDER
                                        THE P-V CURVE
                                           |
        +----------------+-----------------+------------------+
        |                |                 |                  |
   ISOTHERMAL       ADIABATIC          ISOBARIC          ISOCHORIC
    T const          Q = 0              P const           V const
    PV = const      PV^g = const           |                 |
        |                |             W = P dV           W = 0
  W = nRT ln(V2/V1)  W = (P1V1-P2V2)      |                 |
        |               ----------     dU = n Cv dT      dQ = dU
    dU = 0             (gamma - 1)     dQ = n Cp dT
    dQ = dW               |
                       dQ = 0
                       dU = -W
                          |
                    +-----+------+
                    |            |
              SPECIFIC HEATS   CYCLIC PROCESS
              Cp - Cv = R      dU = 0  ,  Q = W
              gamma = Cp/Cv    W = AREA INSIDE
                               THE LOOP
```

---

## THE 60-SECOND VERSION

A gas in a cylinder with a piston. That is the whole chapter.

```
  You can give the gas HEAT  (Q)
  The gas can push the piston and do WORK  (W)
  Whatever is left over is stored inside as INTERNAL ENERGY  (U)

              +----------------------------+
              |                            |
              |     dQ  =  dU  +  dW       |   <-- THE FIRST LAW
              |                            |
              +----------------------------+

  Heat in  =  energy stored inside  +  work done BY the gas
```

Then four questions get asked over and over:

```
  1.  How much work?          ->  W = area under the P-V curve
  2.  What if T is fixed?     ->  isothermal
  3.  What if no heat leaks?  ->  adiabatic
  4.  How good is my engine?  ->  eta = 1 - T2/T1
```

> **WARNING — the sign convention.** In PHYSICS, `W` means the work done **BY** the gas,
> so the first law is `dQ = dU + dW`. In CHEMISTRY, `W` means the work done **ON** the gas,
> so they write `dU = q + w`. Same physics, opposite sign. In this Physics paper, always
> use `dQ = dU + dW`.

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

```
  +-------------------------------------------------+---------+-------+
  |  TOPIC                                          | SECTION | MARKS |
  +-------------------------------------------------+---------+-------+
  |  State the zeroth law / define temperature      |    A    |   2   |
  |  Define isothermal / adiabatic process          |    A    |   2   |
  |  State the first law                            |    A    |   2   |
  |  Why is Cp greater than Cv?                     |    A    |   2   |
  |  Can a room be cooled by an open fridge?        |    A    |   2   |
  |  Efficiency of an engine (small numerical)      |    A    |   2   |
  |  First law + its applications to processes      |    B    |   4   |
  |  Derive Cp - Cv = R  (Mayer's relation)         |    B    |   4   |
  |  Isothermal vs adiabatic - full comparison      |    B    |   4   |
  |  Second law: both statements + explanation      |    B    |   4   |
  |  Refrigerator / coefficient of performance      |    B    |   4   |
  |  CARNOT ENGINE - cycle, P-V diagram, efficiency |    C    |   8   |
  |                             <-- THE BIG ONE                       |
  +-------------------------------------------------+---------+-------+

  Realistic haul from this chapter:  10 to 14 marks out of 60.
  With the Carnot derivation alone:  8 marks.
```

---

## STUDY THIS ORDER

```
  STEP 1   Thermal equilibrium  ->  ZEROTH LAW  ->  temperature exists
              |
  STEP 2   The three quantities:  HEAT Q , INTERNAL ENERGY U , WORK W
           Learn WHICH ONE is a state function.   (only U)
              |
  STEP 3   WORK DONE BY A GAS,  W = INT P dV
           and that it is the AREA UNDER THE P-V CURVE
              |            <-- everything below depends on this
  STEP 4   FIRST LAW,  dQ = dU + dW
              |
     +--------+--------------------------+
     |                                   |
  STEP 5                             STEP 6
  THE FOUR PROCESSES                 SPECIFIC HEATS
  isothermal, adiabatic,             Cp , Cv , Cp - Cv = R
  isobaric, isochoric                gamma = Cp / Cv
     |                                   |
     +--------------+--------------------+
                    |
  STEP 7      CYCLIC PROCESS  ->  W = area inside the loop
                    |
  STEP 8      HEAT ENGINE  ->  eta = 1 - Q2/Q1
                    |
  STEP 9      REFRIGERATOR  ->  alpha = Q2 / W
                    |
  STEP 10     SECOND LAW  (Kelvin-Planck , Clausius)
                    |
  STEP 11     Reversible vs irreversible
                    |
  STEP 12     *** CARNOT ENGINE ***  eta = 1 - T2/T1
              (this is the 8-mark question - do it LAST but do it BEST)
```

---

## THE KEY BOX — the three lines that unlock most of the paper

```
  +--------------------------------------------------------------+
  |                                                              |
  |   FIRST LAW          dQ  =  dU  +  dW                        |
  |                                                              |
  |   WORK BY A GAS      dW  =  P dV      =  AREA under P-V      |
  |                                                              |
  |   INTERNAL ENERGY    dU  =  n Cv dT   (for ANY process,      |
  |                                        not just isochoric)   |
  |                                                              |
  +--------------------------------------------------------------+

  +--------------------------------------------------------------+
  |                                                              |
  |   CARNOT EFFICIENCY        eta  =  1  -  T2 / T1             |
  |                                                              |
  |          T1 = source temperature (HOT)     in KELVIN         |
  |          T2 = sink   temperature (COLD)    in KELVIN         |
  |                                                              |
  +--------------------------------------------------------------+
```

If you remember only these two boxes, you can attempt roughly 10 of the marks
in this chapter.

---

## THE PICTURE TO KEEP IN YOUR HEAD

```
     P                                 P
     ^                                 ^
     |                                 |
     |  *                              |    +-------+
     |    *                            |    |       |
     |      *                          |    | AREA  |
     |        * * *                    |    | =WORK |
     |            * * * *              |    |       |
     +-------------------->  V         +----+-------+------->  V
                                            V1      V2

     A P-V CURVE                       THE WORK DONE BY THE GAS
                                       IS THE AREA UNDERNEATH IT

     Gas EXPANDS  (V increases)  ->  W is POSITIVE (gas does work)
     Gas COMPRESSED (V decreases) -> W is NEGATIVE (work done on gas)
```

---

## FOUR PROCESSES AT A GLANCE (the table examiners love)

```
  +-------------+-----------+---------------+--------------+-------------+
  |  PROCESS    | CONSTANT  |  WORK  W      |   dU         |   dQ        |
  +-------------+-----------+---------------+--------------+-------------+
  | ISOTHERMAL  |    T      | nRT ln(V2/V1) |     0        |   = W       |
  | ADIABATIC   |    Q = 0  | (P1V1-P2V2)   |   - W        |    0        |
  |             |           |  /(gamma-1)   |              |             |
  | ISOBARIC    |    P      | P (V2 - V1)   |  n Cv dT     | n Cp dT     |
  | ISOCHORIC   |    V      |     0         |  n Cv dT     |   = dU      |
  +-------------+-----------+---------------+--------------+-------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  (about 3 hours)
  ---------------------------------------------------------------
   1 hr   First law  dQ = dU + dW , the sign convention,
          and W = area under the P-V curve.
   1 hr   The four processes. Write the comparison table above
          five times from memory until it is automatic.
   1 hr   Mayer's relation Cp - Cv = R with its derivation,
          plus gamma values (5/3 , 7/5 , 4/3).

  DAY 2  (about 3 hours)
  ---------------------------------------------------------------
   1 hr   Heat engine block diagram + eta = 1 - Q2/Q1.
          Refrigerator block diagram + alpha = Q2/W.
   1 hr   Second law - BOTH statements, word perfect.
   1 hr   *** CARNOT ENGINE ***  Draw the P-V loop, name the four
          steps, derive eta = 1 - T2/T1. Do it three times on
          blank paper without looking.

  IF YOU ONLY HAVE 2 HOURS: do the Carnot engine and the first law.
  Nothing else. That is still 10 marks.
```

---

## THE FIVE SENTENCES YOU MUST BE ABLE TO WRITE WITHOUT THINKING

```
  1.  Zeroth law:  If A and B are each in thermal equilibrium with C,
      then A and B are in thermal equilibrium with each other.

  2.  First law:   dQ = dU + dW.  Heat supplied to a system is used
      partly to increase its internal energy and partly to do
      external work.

  3.  Kelvin-Planck: No process is possible whose sole result is the
      complete conversion of heat from a reservoir into work.

  4.  Clausius: No process is possible whose sole result is the
      transfer of heat from a colder body to a hotter body.

  5.  Carnot's theorem: No engine working between two given
      temperatures can be more efficient than a reversible (Carnot)
      engine working between the same two temperatures.
```
