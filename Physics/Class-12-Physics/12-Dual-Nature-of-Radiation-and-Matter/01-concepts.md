# Dual Nature of Radiation and Matter — Concepts Explained Simply

Read this slowly. There is very little maths here — mostly one equation used
over and over. If you understand the difference between **how many photons**
and **how much energy per photon**, you have understood the whole chapter.

---

# TOPIC 1 — Free electrons and why they do not just fall out

Inside a metal there are **free electrons**. They wander around between the
atoms — that is why metals conduct electricity.

But they do not leak out of the surface on their own. Why not?

Because the positive metal ions left behind pull them back. An electron trying
to escape is like a ball sitting at the bottom of a bowl:

```
        OUTSIDE                METAL                 OUTSIDE
      (free space)                                 (free space)

           |                                            |
           |                                            |
    -------+                                            +-------
           |                                            |
           |   e-    e-     e-    e-    e-   e-         |
           |      e-     e-    e-    e-     e-          |
           +--------------------------------------------+
                    the electrons are TRAPPED
                    inside this "potential well"

    To get out, an electron must be given at least enough energy to
    climb the wall. That minimum energy is the WORK FUNCTION.
```

## WORK FUNCTION (W0 or phi0)

```
  +----------------------------------------------------------------+
  |                                                                |
  |   WORK FUNCTION  =  the MINIMUM energy required to just        |
  |                     remove an electron from the surface of     |
  |                     a metal.                                   |
  |                                                                |
  |   Symbol:  W0   (also written phi0)                            |
  |   Unit:    joule (J) , but almost always quoted in eV          |
  |                                                                |
  +----------------------------------------------------------------+
```

**Everyday analogy.** Think of the work function as an **exit fee**. To leave
the cinema hall through the emergency door you must pay Rs 5. If I hand you
Rs 3, you cannot leave at all. If I hand you Rs 8, you leave and you still have
Rs 3 in your pocket — that leftover money is the electron's kinetic energy.

## The electron volt (eV)

You will meet this in every question of this chapter.

```
  1 eV  =  the energy gained by an electron when accelerated
           through a potential difference of 1 volt

  1 eV  =  e x V  =  (1.6 x 10^-19 C) x (1 V)  =  1.6 x 10^-19  J
```

To convert:

```
  eV  ->  J :   multiply by 1.6 x 10^-19
  J   ->  eV:   divide   by 1.6 x 10^-19
```

## Work functions worth remembering

```
  +--------------+-----------+     Notice the pattern:
  |  METAL       |  W0 (eV)  |     ALKALI metals (Cs, K, Na) have SMALL
  +--------------+-----------+     work functions, so ordinary VISIBLE
  |  Caesium Cs  |   2.14    |     light can eject electrons from them.
  |  Potassium K |   2.30    |     That is exactly why photocells are
  |  Sodium   Na |   2.75    |     coated with caesium.
  |  Calcium  Ca |   3.20    |
  |  Molybdenum  |   4.17    |     Metals like Pt and Ni need
  |  Copper   Cu |   4.65    |     ULTRAVIOLET light.
  |  Silver   Ag |   4.73    |
  |  Nickel   Ni |   5.15    |
  |  Platinum Pt |   5.65    |
  +--------------+-----------+
```

> **TRAP:** the work function depends on the **nature of the metal and the
> condition of its surface** — nothing else. It does NOT depend on the light
> you shine on it, on the intensity, or on the temperature of the source.

---

# TOPIC 2 — The four types of electron emission

You must supply the exit fee somehow. There are exactly four ways, and the
name of each one just tells you where the energy came from.

```
  +----+------------------+---------------------------+------------------+
  | #  |  TYPE            |  ENERGY SUPPLIED BY       |  EXAMPLE / USE   |
  +----+------------------+---------------------------+------------------+
  | 1  |  THERMIONIC      |  HEAT                     |  filament of a   |
  |    |  emission        |  (metal heated to a high  |  cathode ray     |
  |    |                  |   temperature, ~2000 K)   |  tube, TV picture|
  |    |                  |                           |  tube, X-ray tube|
  +----+------------------+---------------------------+------------------+
  | 2  |  FIELD emission  |  a very STRONG ELECTRIC   |  field emission  |
  |    |  (cold cathode   |  FIELD at the surface,    |  microscope,     |
  |    |   emission)      |  about 10^8 V/m, which    |  spark plugs,    |
  |    |                  |  pulls the electron out   |  lightning       |
  +----+------------------+---------------------------+------------------+
  | 3  |  PHOTOELECTRIC   |  LIGHT (photons) falling  |  photocell, solar|
  |    |  emission        |  on the metal             |  cell, burglar   |
  |    |                  |                           |  alarm           |
  +----+------------------+---------------------------+------------------+
  | 4  |  SECONDARY       |  fast-moving ELECTRONS    |  photomultiplier |
  |    |  emission        |  (or ions) striking the   |  tube, electron  |
  |    |                  |  surface and knocking     |  multipliers     |
  |    |                  |  other electrons out      |                  |
  +----+------------------+---------------------------+------------------+
```

**Memory line:** *Heat, Field, Light, Hit* — H F L H.

```
  WORKED EXAMPLE 1
  ----------------
  Q. The work function of caesium is 2.14 eV. Express it in joules.

  W0  =  2.14 eV
      =  2.14  x  1.6 x 10^-19  J
      =  3.424 x 10^-19  J

  ANSWER:  3.42 x 10^-19 J
```

---

# TOPIC 3 — The photoelectric effect: what it is

```
  +----------------------------------------------------------------+
  |                                                                |
  |   PHOTOELECTRIC EFFECT                                         |
  |                                                                |
  |   The emission of electrons from the surface of a metal when   |
  |   light of suitable frequency falls on it.                     |
  |                                                                |
  |   The emitted electrons  ->  PHOTOELECTRONS                    |
  |   The current they carry ->  PHOTOELECTRIC CURRENT             |
  |                                                                |
  +----------------------------------------------------------------+
```

```
        incident light
        (frequency nu)
             \  \  \
              \  \  \                e-      e-
               \  \  \              /       /
                v  v  v           /       /
       ==========================/=======/=============
       |||||||||||||||||||||||||||||||||||||||||||||||||   METAL PLATE
       ==================================================
```

## Hertz's observation (1887)

Heinrich Hertz was doing experiments on electromagnetic waves using a spark gap.

```
  He noticed that the SPARK jumped across the gap MORE EASILY when
  ULTRAVIOLET light was shone on the negative electrode.

  Conclusion: the UV light was helping electrons escape from the
  metal surface, so the gap conducted more easily.

  This was the ACCIDENTAL discovery of the photoelectric effect.
```

## Lenard's observations (1900-1902)

Philipp Lenard did it properly, with an evacuated tube.

```
  1. When UV light fell on the emitter plate C, current flowed in
     the circuit.
  2. When the light was cut off, the current STOPPED at once.
  3. Therefore light must be knocking charged particles out of C,
     and these particles travel across to the plate A.
  4. Increasing the intensity of light increased the current.
```

Millikan later measured everything carefully and (though he was trying to
disprove Einstein) confirmed Einstein's equation exactly.

> **TRAP:** in a 2-mark question "Who discovered the photoelectric effect?" the
> answer is **Hertz**; "Who studied it in detail / established the emission of
> electrons?" — **Lenard**; "Who explained it?" — **Einstein** (Nobel Prize 1921).

---

# TOPIC 4 — The experimental arrangement (draw this from memory)

```
   +--------------------------------------------------------------+
   |                    EVACUATED  GLASS  TUBE                    |
   |                                                              |
   |     UV / visible light                                       |
   |          \    \    \                                         |
   |           \    \    \                                        |
   |            v    v    v                                       |
   |   +----------------+          e-  ->                +------+ |
   |   |                |          e-  ->                |      | |
   |   |   PLATE   C    |          e-  ->                |PLATE | |
   |   |  (EMITTER,     |          e-  ->                |  A   | |
   |   |   cathode)     |          e-  ->                |(COLL-| |
   |   |                |                                |ECTOR,| |
   |   +----------------+                                |anode)| |
   |          |                                          +------+ |
   |          |                                              |    |
   +----------|----------------------------------------------|----+
              |                                              |
              |                +-------+                     |
              +----------------|  mA   |---------------------+
              |                +-------+                     |
              |            micro-ammeter (measures            |
              |            the photoelectric current)         |
              |                                               |
              |         +---------------------------+         |
              +---------|   [V]  voltmeter          |---------+
                        +---------------------------+
              |                                               |
              |      sliding contact                          |
              +------/\/\/\/\/\/\--O--/\/\/\/\/\/\------------+
              |         potentiometer (variable V)            |
              |                                               |
              +---------| |i|--------| |i|---------------------+
                       COMMUTATOR / reversible battery
                    (lets us make A either POSITIVE or NEGATIVE
                     with respect to C)
```

**What each part is for — this is worth marks:**

```
  Evacuated tube      -  so the electrons are not stopped by air molecules
  Quartz window       -  quartz lets ULTRAVIOLET light through; ordinary
                         glass absorbs UV
  Plate C (emitter)   -  the metal being tested; light falls here
  Plate A (collector) -  collects the photoelectrons
  Micro-ammeter       -  measures the tiny photoelectric current
  Voltmeter           -  measures the potential of A with respect to C
  Commutator/battery  -  makes A positive (accelerating) or negative
                         (retarding), which is how V0 is measured
  Filters + lamp      -  let us change the FREQUENCY and the INTENSITY
                         of the light independently
```

---

# TOPIC 5 — RESULT 1: the effect of INTENSITY on the current

Keep the **frequency fixed** and keep the accelerating voltage large enough that
every emitted electron is collected (i.e. we are on the saturation part).
Now change only the brightness.

```
   photoelectric
   current  I
      ^
      |                                            *
      |                                       *
      |                                  *
      |                             *
      |                        *
      |                   *              constant frequency nu
      |              *                   constant potential V
      |         *
      |    *
      |*
      +-------------------------------------------------> INTENSITY
      O                                                   of light
```

```
  +----------------------------------------------------------------+
  |   The saturation photoelectric current is DIRECTLY             |
  |   PROPORTIONAL to the INTENSITY of the incident light,         |
  |   provided the frequency is kept constant.                     |
  |                                                                |
  |            I  is proportional to  intensity                    |
  +----------------------------------------------------------------+
```

**Why (in the photon language):** intensity = number of photons arriving per
second. More photons -> more electrons knocked out per second -> more current.
But each photon still carries the *same* energy h nu, so the electrons are not
any faster.

---

# TOPIC 6 — RESULT 2: the effect of POTENTIAL, saturation current and STOPPING POTENTIAL

Now fix the frequency AND the intensity, and slowly change the plate potential
of A from a large positive value down through zero to negative values.

```
   photoelectric
   current I
      ^
      |                         I3 saturation      _______________  I3
      |                                          /                    (high
      |                                         /                     intensity)
      |                     I2 saturation  ____/________________      I2
      |                                   /                           (medium)
      |                 I1 saturation ___/___________________         I1
      |                              /                                (low)
      |                            //
      |                          //
      |                        //
      |                      //
      |                    //
  ----+------------------//----------+----------------------------> plate
      |               ///            0        potential of A (V)
    -V0            ///
      ^              (all three curves meet the axis at the
      |               SAME point -V0 because the frequency
   STOPPING           is the same for all three)
   POTENTIAL
```

Read the graph left to right:

```
  1. Large NEGATIVE V (left of -V0)
        A repels the electrons. Even the fastest one cannot reach A.
        CURRENT = ZERO.

  2. At V = -V0  (the STOPPING POTENTIAL, also called cut-off potential)
        The current has just fallen to zero. The most energetic electron
        is stopped exactly at plate A.

  3. V = 0
        There is still a small current! Some electrons have enough energy
        of their own to cross the gap without any help. (Good 2-mark point.)

  4. V POSITIVE and increasing
        A attracts the electrons, more and more of them are collected,
        the current rises.

  5. V large and positive
        EVERY emitted electron now reaches A. The current cannot grow any
        further. This maximum value is the SATURATION CURRENT.
```

## The two definitions

```
  +----------------------------------------------------------------+
  |  SATURATION CURRENT  -  the maximum value of the photoelectric |
  |  current, reached when ALL the photoelectrons emitted per      |
  |  second are collected by the anode.                            |
  |                                                                |
  |  STOPPING POTENTIAL (V0)  -  the minimum NEGATIVE potential    |
  |  given to the anode at which the photoelectric current becomes |
  |  ZERO.                                                         |
  +----------------------------------------------------------------+
```

## The equation hidden in the stopping potential

At V = V0 the anode does exactly enough work to stop the fastest electron:

```
                   1
     e V0   =    --- m v_max^2   =   K_max
                   2

  This is how the maximum kinetic energy of the photoelectrons is MEASURED.
  It is the whole reason V0 matters.
```

## The result

```
  +----------------------------------------------------------------+
  |  For a given metal and a given FREQUENCY, the stopping         |
  |  potential is INDEPENDENT of the intensity of the light.       |
  +----------------------------------------------------------------+
```

Look again at the graph: all three curves (I1, I2, I3) hit the axis at the same
point −V0. Brighter light gives more current but NOT more energetic electrons.

> **TRAP:** students write "stopping potential increases with intensity."
> It does not. Intensity changes only the saturation current. This single
> mistake costs marks in almost every exam.

---

# TOPIC 7 — RESULT 3: the effect of FREQUENCY, the V0-vs-nu line and the THRESHOLD FREQUENCY

Now do the opposite experiment: keep the **intensity fixed** and change the
**frequency** of the light.

```
   photoelectric
   current I
      ^
      |
      |          nu3 > nu2 > nu1                  same intensity ->
      |                                           SAME saturation current
      |     ____________________________________  for all three
      |    /  /   /
      |   /  /   /
      |  /  /   /
      | /  /   /
  ----+-/--/---/---------------------------------> plate potential
   -V03 -V02 -V01     0
      |
   the higher the frequency, the FURTHER LEFT the curve starts:
   a bigger stopping potential is needed.
```

Now plot V0 against nu for one metal:

```
   stopping
   potential
      V0
      ^                                              *
      |                                         *
      |                                    *
      |                               *          SLOPE = h / e
      |                          *               = 4.14 x 10^-15 V s
      |                     *                    (SAME for every metal)
      |                *
      |           *
      |      *
  ----+-----*---------------------------------------------> frequency nu
      |    /|
      |   / |  nu0  =  THRESHOLD FREQUENCY  (x-intercept)
      |  /  |
      | /   |
      |/    |
  -W0/e ....+                                     y-intercept = -W0/e
      |
```

Read four things off this one straight line:

```
  +--------------------------------+-------------------------------------+
  |  FEATURE                       |  MEANING                            |
  +--------------------------------+-------------------------------------+
  |  It is a STRAIGHT LINE         |  V0 = (h/e) nu - (W0/e)             |
  |  SLOPE                         |  h/e  -- same for ALL metals, so    |
  |                                |  the lines for different metals are |
  |                                |  PARALLEL. Used to MEASURE h.       |
  |  x-INTERCEPT                   |  nu0 , the threshold frequency      |
  |  y-INTERCEPT (negative)        |  -W0/e , so W0 = e x (that value)   |
  +--------------------------------+-------------------------------------+
```

For different metals:

```
    V0 ^
       |        Cs      K       Na          all PARALLEL
       |        /       /       /           (slope h/e is universal)
       |       /       /       /
       |      /       /       /
       |     /       /       /
   ----+----*-------*-------*----------------------> nu
       |   nu0(Cs) nu0(K)  nu0(Na)
       |
    Smaller work function  ->  smaller threshold frequency
    ->  line starts further LEFT.
```

## THRESHOLD FREQUENCY

```
  +----------------------------------------------------------------+
  |  THRESHOLD FREQUENCY (nu0)  -  the MINIMUM frequency of the    |
  |  incident light below which NO photoelectric emission takes    |
  |  place, however intense the light is.                          |
  |                                                                |
  |                    W0  =  h nu0                                |
  |                                                                |
  |  THRESHOLD WAVELENGTH (lambda0) - the MAXIMUM wavelength that  |
  |  can still cause emission.                                     |
  |                                                                |
  |                             c            h c                   |
  |                lambda0  =  ----   =   --------                 |
  |                            nu0           W0                    |
  +----------------------------------------------------------------+
```

> **TRAP:** frequency has a MINIMUM (nu0) but wavelength has a MAXIMUM
> (lambda0). Emission happens when `nu > nu0` **or equivalently**
> `lambda < lambda0`. Getting this inequality backwards is a classic
> EAPCET mistake.

---

# TOPIC 8 — RESULT 4: the emission is INSTANTANEOUS

```
  +----------------------------------------------------------------+
  |  The photoelectric emission is an INSTANTANEOUS process.       |
  |  The time lag between the light striking the surface and the   |
  |  electron leaving is less than about 10^-9 second, even for    |
  |  extremely feeble light.                                       |
  +----------------------------------------------------------------+
```

There is no "warming up" period. The moment the light is switched on, the
current appears.

## The four results in one table (learn this table)

```
  +---+------------------------------+-----------------------------------+
  | # |  RESULT                      |  CONTROLLED BY                    |
  +---+------------------------------+-----------------------------------+
  | 1 |  Saturation current is       |  INTENSITY                        |
  |   |  proportional to intensity   |  (number of photons per second)   |
  +---+------------------------------+-----------------------------------+
  | 2 |  Stopping potential does NOT |  it is fixed by FREQUENCY only    |
  |   |  depend on intensity         |                                   |
  +---+------------------------------+-----------------------------------+
  | 3 |  Kmax (and V0) increase      |  FREQUENCY                        |
  |   |  linearly with frequency;    |  (energy of each photon)          |
  |   |  no emission below nu0       |                                   |
  +---+------------------------------+-----------------------------------+
  | 4 |  Emission is instantaneous   |  one photon, one electron,        |
  |   |  ( < 10^-9 s )               |  one instant                      |
  +---+------------------------------+-----------------------------------+
```

These four are usually called the **laws of photoelectric emission**.

---

# TOPIC 9 — WHY THE WAVE THEORY FAILS (a guaranteed 4-mark question)

The classical wave theory of light says: light energy is spread continuously
over the whole wavefront, and the energy carried depends on the **amplitude**
(hence intensity), not on the frequency. Let us test that against the four
results.

```
  +---+--------------------------+--------------------------+------------+
  | # |  WAVE THEORY PREDICTS    |  EXPERIMENT SHOWS        |  VERDICT   |
  +---+--------------------------+--------------------------+------------+
  | 1 |  Any frequency should    |  NO emission at all      |   FAILS    |
  |   |  work if you make the    |  below nu0, however       |            |
  |   |  light bright enough.    |  bright the light is.    |            |
  |   |  There should be NO      |  There IS a threshold    |            |
  |   |  threshold frequency.    |  frequency.              |            |
  +---+--------------------------+--------------------------+------------+
  | 2 |  Kmax should increase    |  Kmax is completely      |   FAILS    |
  |   |  with INTENSITY (a       |  INDEPENDENT of          |            |
  |   |  bigger wave should      |  intensity. V0 does not  |            |
  |   |  shake the electron      |  change when the lamp    |            |
  |   |  harder).                |  is made brighter.       |            |
  +---+--------------------------+--------------------------+------------+
  | 3 |  Kmax should NOT depend  |  Kmax increases LINEARLY |   FAILS    |
  |   |  on frequency.           |  with frequency.         |            |
  +---+--------------------------+--------------------------+------------+
  | 4 |  With feeble light an    |  Emission is INSTANT,    |   FAILS    |
  |   |  electron would need     |  under 10^-9 s, even     |            |
  |   |  HOURS or DAYS to soak   |  with the feeblest       |            |
  |   |  up enough energy,       |  light.                  |            |
  |   |  because the energy is   |                          |            |
  |   |  spread over the whole   |                          |            |
  |   |  surface.                |                          |            |
  +---+--------------------------+--------------------------+------------+
```

**The picture that makes it obvious:**

```
  WAVE PICTURE                        PHOTON PICTURE
  ------------                        --------------
  energy spread thinly over the       energy in concentrated packets
  entire surface                      that hit ONE electron at a time

    ~~~~~~~~~~~~~~~~~~~~~~~              o    o     o      o
   ~~~~~~~~~~~~~~~~~~~~~~~~~           o    o    o      o
    ~~~~~~~~~~~~~~~~~~~~~~~              o      o    o
   =========================           =========================
   every electron gets a tiny          most electrons get NOTHING,
   share -> takes ages to              a few get a FULL packet
   accumulate W0                       -> instant emission
```

**One-line summary for the exam:** *the photoelectric effect cannot be
explained by the wave theory because the wave theory has no mechanism for a
threshold frequency, for the independence of Kmax from intensity, for the
linear rise of Kmax with frequency, or for instantaneous emission.*

---

# TOPIC 10 — EINSTEIN'S PHOTOELECTRIC EQUATION

## The photon idea

Einstein (1905) took Planck's quantum idea seriously and said:

```
  +----------------------------------------------------------------+
  |  Light of frequency nu travels as a stream of energy packets   |
  |  called PHOTONS (quanta). Each photon carries energy           |
  |                                                                |
  |             E  =  h nu  =  h c / lambda                        |
  |                                                                |
  |  In the photoelectric effect ONE photon is absorbed COMPLETELY |
  |  by ONE electron. It is all-or-nothing. There is no partial    |
  |  absorption.                                                   |
  +----------------------------------------------------------------+
```

## The derivation (write these five lines in the exam)

```
  STEP 1   A photon of energy h nu is completely absorbed by a single
           free electron in the metal.

  STEP 2   Part of that energy is spent in doing the work needed to
           pull the electron out of the surface. That part is the
           work function W0.

  STEP 3   Whatever is left over appears as the KINETIC ENERGY of the
           emitted electron.

  STEP 4   An electron right AT the surface loses only W0, so it comes
           out with the MAXIMUM kinetic energy. Electrons from deeper
           inside lose more and come out slower.

  STEP 5   Applying conservation of energy to the surface electron:

           +--------------------------------------------------+
           |                                                  |
           |          h nu   =   W0   +   K_max               |
           |                                                  |
           |                            1                     |
           |     i.e.   h nu  =  W0 + --- m v_max^2           |
           |                            2                     |
           |                                                  |
           +--------------------------------------------------+

           This is EINSTEIN'S PHOTOELECTRIC EQUATION.
```

## The useful re-arrangements — learn all four

```
  +----------------------------------------------------------------+
  |                                                                |
  |   (a)   K_max  =  h nu  -  W0                                  |
  |                                                                |
  |   (b)   Since W0 = h nu0 :                                     |
  |                                                                |
  |         K_max  =  h nu  -  h nu0  =  h ( nu - nu0 )            |
  |                                                                |
  |   (c)   In terms of wavelength:                                |
  |                                                                |
  |                       hc      hc          +-  1        1   -+  |
  |         K_max  =  --------- - --------- = |  ------ - ----- | hc
  |                    lambda     lambda0     +- lambda  lambda0-+  |
  |                                                                |
  |   (d)   Since K_max = e V0 :                                   |
  |                                                                |
  |            e V0  =  h nu  -  W0                                |
  |                                                                |
  |                      h            W0                           |
  |            V0   =   ---  nu   -  ----                          |
  |                      e            e                            |
  |                                                                |
  |            <-- this is  y = m x + c  ,  the straight line of    |
  |                TOPIC 7, with slope h/e and intercept -W0/e     |
  +----------------------------------------------------------------+
```

## How Einstein's equation explains EVERY result

```
  +----------------------------+---------------------------------------+
  |  OBSERVATION               |  EINSTEIN'S EXPLANATION               |
  +----------------------------+---------------------------------------+
  |  Threshold frequency       |  If h nu < W0 the packet is too small |
  |  exists                    |  to pay the exit fee. Two small       |
  |                            |  packets cannot be added up, because  |
  |                            |  one electron absorbs only ONE photon.|
  |                            |  So nothing happens, no matter how    |
  |                            |  many such photons arrive.            |
  +----------------------------+---------------------------------------+
  |  Current is proportional   |  Intensity = number of photons per    |
  |  to intensity              |  second. Each photon can release at   |
  |                            |  most one electron. Twice the photons |
  |                            |  -> twice the electrons -> twice the  |
  |                            |  current.                             |
  +----------------------------+---------------------------------------+
  |  Kmax is independent of    |  Increasing intensity sends MORE      |
  |  intensity                 |  photons but does not change the      |
  |                            |  energy h nu of any one photon.       |
  |                            |  So Kmax = h nu - W0 is unchanged.    |
  +----------------------------+---------------------------------------+
  |  Kmax rises linearly with  |  Kmax = h nu - W0 is literally the    |
  |  frequency                 |  equation of a straight line of       |
  |                            |  slope h.                             |
  +----------------------------+---------------------------------------+
  |  Emission is               |  A single photon-electron collision   |
  |  instantaneous             |  is a one-shot event. There is no     |
  |                            |  energy to accumulate, so there is    |
  |                            |  no time lag.                         |
  +----------------------------+---------------------------------------+
```

```
  WORKED EXAMPLE 2
  ----------------
  Q. The work function of a metal is 4.2 eV. Light of wavelength 2000 A
     falls on it. Find (i) the energy of the photon in eV,
     (ii) the maximum kinetic energy of the photoelectrons,
     (iii) the stopping potential, (iv) the maximum velocity.

  (i)   Use the shortcut:

              12400        12400
        E  =  --------  =  -------  =  6.2 eV
              lambda(A)     2000

  (ii)  K_max = E - W0 = 6.2 - 4.2 = 2.0 eV
                       = 2.0 x 1.6 x 10^-19 = 3.2 x 10^-19 J

  (iii) e V0 = K_max , and since K_max is already in eV:

        V0 = 2.0 volt          <-- numerically equal, no conversion needed

  (iv)  (1/2) m v^2 = 3.2 x 10^-19

              2 x 3.2 x 10^-19        6.4 x 10^-19
        v^2 = ------------------  =  --------------  =  7.03 x 10^11
              9.1 x 10^-31            9.1 x 10^-31

        v   = 8.39 x 10^5  m/s

  ANSWERS: 6.2 eV , 2.0 eV , 2.0 V , 8.39 x 10^5 m/s
```

> **SHORTCUT worth gold:** `v_max = 5.93 x 10^5 x sqrt( Kmax in eV )  m/s`.
> Check: sqrt(2.0) = 1.414 , 5.93e5 x 1.414 = 8.39 x 10^5 m/s. Same answer in
> five seconds.

---

# TOPIC 11 — The particle nature of light: properties of a PHOTON

```
  +----------------------------------------------------------------+
  |  A PHOTON is a packet (quantum) of electromagnetic radiation.  |
  +----------------------------------------------------------------+
```

The examinable list — memorise all six:

```
  1.  ENERGY
                                        hc
              E  =  h nu   =   ----------------
                                    lambda

  2.  MOMENTUM
                     E         h nu          h
              p  =  ---   =   ------   =  ---------
                     c           c          lambda

      (a photon HAS momentum even though it has no rest mass)

  3.  REST MASS  =  ZERO.
      A photon can never be brought to rest; it always moves at c.
      (Its "effective mass" is E/c^2 = h nu / c^2.)

  4.  CHARGE  =  ZERO.  Photons are electrically NEUTRAL.

  5.  Because they are neutral, photons are NOT DEFLECTED by
      electric fields or by magnetic fields.

  6.  In a photon-electron collision the TOTAL energy and the TOTAL
      momentum are conserved. But the NUMBER of photons is not
      conserved -- a photon can be created or completely absorbed.

  Also:  all photons of a given frequency have exactly the same energy,
         momentum and speed, whatever the intensity of the beam.
         Intensity changes only HOW MANY photons arrive per second.
```

## Where the 12400 shortcut comes from

```
              h c
      E  =  --------
             lambda

           (6.63 x 10^-34)(3 x 10^8)      1.989 x 10^-25
      E =  ---------------------------  = ---------------  joule
                 lambda (in m)             lambda (in m)

  Now put lambda in ANGSTROM (1 A = 10^-10 m) and E in eV
  (divide by 1.6 x 10^-19):

            1.989 x 10^-25                  1.243 x 10^4
      E =  ------------------------  eV  =  --------------  eV
           lambda(A) x 10^-10 x 1.6e-19       lambda(A)

  +----------------------------------------------------+
  |                       12400                        |
  |         E (in eV)  =  -----------                  |
  |                       lambda (in angstrom)         |
  +----------------------------------------------------+

  Some books write 12375 or 12420 -- 12400 is close enough for every
  board and EAPCET question.
```

```
  WORKED EXAMPLE 3
  ----------------
  Q. Find the energy and momentum of a photon of wavelength 5000 A.

  ENERGY:      E = 12400 / 5000 = 2.48 eV
                 = 2.48 x 1.6 x 10^-19 = 3.97 x 10^-19 J

  MOMENTUM:         h          6.63 x 10^-34
               p = --------- = ---------------- = 1.33 x 10^-27 kg m/s
                    lambda      5000 x 10^-10

  CHECK using p = E/c :  3.97 x 10^-19 / 3 x 10^8 = 1.32 x 10^-27  ok.
```

```
  WORKED EXAMPLE 4
  ----------------
  Q. A 100 W lamp emits monochromatic light of wavelength 6000 A.
     How many photons does it emit per second?

  Energy of ONE photon:
        E = 12400 / 6000 = 2.067 eV = 2.067 x 1.6 x 10^-19
          = 3.31 x 10^-19  J

  Number per second:
                  total energy per second       100
        n   =   ---------------------------  = -----------------
                  energy of one photon          3.31 x 10^-19

            =   3.02 x 10^20  photons per second

  That enormous number is exactly WHY light looks continuous to us and
  why the wave theory worked so well for 200 years.
```

---

# TOPIC 12 — The PHOTOCELL

A photocell (photoelectric cell) is a practical device that turns light into
an electric current. It is "an electric eye".

## Construction

```
        +------------------------------------------+
        |     evacuated glass / quartz bulb         |
        |                                           |
        |     light                                 |
        |       \  \  \                             |
        |        v  v  v                            |
        |    ,----------------.                     |
        |   /   C  semi-cylin- \                    |
        |  |    drical CATHODE  |                   |
        |  |    coated with a   |     .             |
        |  |    photosensitive  |     |  A  thin    |
        |  |    metal (caesium  |     |  metal ROD  |
        |  |    oxide / Cs-Sb)  |     |  = ANODE    |
        |   \                  /      '             |
        |    '----------------'                     |
        |        |                       |          |
        +--------|-----------------------|----------+
                 |                       |
                 |      +------+         |
                 +------|  mA  |---------+
                 |      +------+         |
                 |                       |
                 +-----| |i|-------/\/\--+
                        battery      R
                     (anode kept POSITIVE)
```

```
  CATHODE   -  semi-cylindrical plate coated with a low-work-function
               material (caesium, caesium oxide, potassium, Cs-Sb).
  ANODE     -  a thin metal rod or wire along the axis, kept at a
               positive potential so it collects the photoelectrons.
  ENVELOPE  -  evacuated glass bulb; QUARTZ if UV light is to be used.
```

## Working

```
  Light falls on the cathode  ->  photoelectrons are emitted
       ->  the positive anode collects them
       ->  a current flows in the external circuit
       ->  that current is PROPORTIONAL TO THE INTENSITY of the light.

  Brighter light  ->  larger current.  No light  ->  no current.
  That on/off behaviour is what makes it a useful switch.
```

## Applications (a full 4-mark answer needs 4 or 5 of these)

```
  1.  In cinema projectors, to reproduce the SOUND TRACK printed on
      the film as varying light intensity.
  2.  In BURGLAR ALARMS and fire alarms: a beam of (usually infrared)
      light falls on the photocell; when an intruder or smoke breaks
      the beam the current stops and a relay rings the alarm.
  3.  In AUTOMATIC DOORS at shops and airports, and in automatic
      street-lighting switches.
  4.  In PHOTOGRAPHIC EXPOSURE METERS in cameras, to measure the
      brightness of a scene.
  5.  In counting devices on production lines (each object breaks
      the beam once).
  6.  In television and in the transmission of pictures; in
      photometry, to compare the intensities of two light sources.
```

> **TRAP:** the photocell converts light energy into electrical energy, but a
> *solar cell* works by a different mechanism (photovoltaic effect in a
> semiconductor junction), not by photoemission into vacuum. Do not mix them.

---

# TOPIC 13 — The WAVE NATURE OF MATTER: de Broglie's hypothesis

## The idea

Louis de Broglie (1924) argued from symmetry:

```
  Nature is SYMMETRICAL.
  Radiation (a wave) has been shown to behave like PARTICLES.
  Therefore MATTER (particles) should also behave like WAVES.
```

```
  +----------------------------------------------------------------+
  |  de BROGLIE HYPOTHESIS                                         |
  |                                                                |
  |  Every moving material particle has a wave associated with it. |
  |  These are called MATTER WAVES or de Broglie waves. The        |
  |  wavelength is                                                 |
  |                                                                |
  |                     h          h                               |
  |         lambda  =  ---   =   ------                            |
  |                     p         m v                              |
  |                                                                |
  |  h = Planck's constant , p = momentum of the particle          |
  +----------------------------------------------------------------+
```

## The derivation of lambda = h / p (asked as a 2 or 4-mark question)

```
  STEP 1   For a photon of frequency nu, the energy is

               E  =  h nu                          ... (1)

  STEP 2   Treating the photon as a particle of "mass" m moving with
           speed c, Einstein's mass-energy relation gives

               E  =  m c^2                         ... (2)

  STEP 3   Comparing (1) and (2):

               h nu  =  m c^2

                          h nu        h nu
               m c   =   ------  =   ------ .  But nu / c = 1/lambda,
                            c           c

                          h
           so    m c  =  --------
                          lambda

  STEP 4   But m c is just the MOMENTUM p of the photon, so

                            h                        h
               p   =   ----------      i.e.  lambda = ---
                         lambda                        p

  STEP 5   de Broglie's leap: this relation is not special to photons.
           It applies to EVERY particle. For a particle of mass m
           moving with velocity v ,  p = m v , therefore

               +-------------------------------------+
               |                 h          h        |
               |     lambda  =  ---  =   -------     |
               |                 p         m v       |
               +-------------------------------------+
```

## In terms of kinetic energy

```
                 1                              p^2
      K   =    --- m v^2      and     K   =   -------
                 2                              2 m

      so       p  =  sqrt( 2 m K )

      +--------------------------------------------+
      |                     h                      |
      |      lambda   =   ---------------          |
      |                   sqrt( 2 m K )            |
      +--------------------------------------------+
```

## For a CHARGED particle accelerated through a potential V

If a charge q is accelerated from rest through V volts, it gains kinetic
energy K = qV. So:

```
                          h
      lambda   =   -------------------
                    sqrt( 2 m q V )
```

**For an ELECTRON** put m = 9.1 x 10^-31 kg, q = 1.6 x 10^-19 C,
h = 6.63 x 10^-34 J s:

```
                6.63 x 10^-34
   lambda = -------------------------------------------
            sqrt( 2 x 9.1e-31 x 1.6e-19 x V )

               6.63 x 10^-34            6.63 x 10^-34
          = ----------------------  =  ----------------
            sqrt(2.912e-49 x V)         5.396e-25 sqrt(V)

          =  1.227 x 10^-9 / sqrt(V)   metre

   +--------------------------------------------------------+
   |                     12.27                              |
   |       lambda  =  -----------  angstrom                 |
   |                    sqrt(V)                             |
   |                                                        |
   |       (V in volts. Also written 1.227/sqrt(V) nm )     |
   +--------------------------------------------------------+
```

Two more of the same kind, handy for EAPCET:

```
   PROTON  accelerated through V volts :   lambda = 0.286 / sqrt(V)  A
   ALPHA   particle through V volts    :   lambda = 0.101 / sqrt(V)  A
```

## For a particle in thermal equilibrium at temperature T

A gas molecule (or a thermal neutron) at absolute temperature T has average
kinetic energy `K = (3/2) k T`, where k = 1.38 x 10^-23 J/K is Boltzmann's
constant. Putting that into lambda = h / sqrt(2mK):

```
      +----------------------------------------------+
      |                        h                     |
      |        lambda  =  ---------------            |
      |                   sqrt( 3 m k T )            |
      +----------------------------------------------+
```

```
  WORKED EXAMPLE 5
  ----------------
  Q. An electron is accelerated through a potential difference of 100 V.
     Find its de Broglie wavelength.

              12.27         12.27
     lambda = --------  =  -------  =  1.227 angstrom
              sqrt(100)      10

  ANSWER: 1.227 A = 1.227 x 10^-10 m

  NOTE how convenient this is: it is about the size of an atom, which is
  exactly why electrons diffract off crystals.
```

```
  WORKED EXAMPLE 6
  ----------------
  Q. Find the de Broglie wavelength of a cricket ball of mass 150 g
     moving at 30 m/s.

              h            6.63 x 10^-34         6.63 x 10^-34
     lambda = ---   =   -------------------  =  ----------------
              m v        0.150 x 30                   4.5

            =  1.47 x 10^-34  m

  ANSWER: 1.47 x 10^-34 m -- about 10^24 times SMALLER than a nucleus.
```

## WHY WE NEVER SEE THE WAVE NATURE OF BIG OBJECTS

This is a favourite 2-mark question. The answer is contained in Example 6:

```
  +----------------------------------------------------------------+
  |  lambda = h / (m v). Planck's constant h = 6.63 x 10^-34 is    |
  |  fantastically small. For any everyday object the mass m is    |
  |  huge in comparison, so lambda comes out around 10^-34 m.      |
  |                                                                |
  |  Diffraction or interference can only be observed when the     |
  |  obstacle or slit is COMPARABLE IN SIZE to the wavelength.     |
  |  No such obstacle exists (a nucleus is 10^-15 m, which is      |
  |  already 10^19 times too big).                                 |
  |                                                                |
  |  Therefore the wave nature of macroscopic bodies is            |
  |  UNDETECTABLE, not absent.                                     |
  +----------------------------------------------------------------+
```

## Properties of matter waves (short-answer material)

```
  1.  They are NOT electromagnetic waves.
  2.  They are produced only by MOVING particles. A particle at rest
      has no matter wave (p = 0 -> lambda = infinity).
  3.  The wavelength is INDEPENDENT of the charge of the particle;
      it depends only on the momentum.
  4.  Lighter particle -> longer wavelength (for the same speed).
  5.  Faster particle  -> shorter wavelength.
  6.  The wave amplitude at a point tells you the PROBABILITY of
      finding the particle there.
```

---

# TOPIC 14 — The DAVISSON-GERMER EXPERIMENT (the proof)

de Broglie's idea was a guess until Davisson and Germer (1927) showed that a
beam of electrons **diffracts** off a crystal exactly the way X-rays do.
Diffraction is something only waves can do.

## The apparatus

```
   +-------------------------------------------------------------------+
   |                     EVACUATED  CHAMBER                            |
   |                                                                   |
   |   [ ]==== FILAMENT F  (heated by a low-tension battery,           |
   |    |      thermionic emission gives a supply of electrons)        |
   |    |                                                              |
   |   ---     CYLINDER  with a small hole                             |
   |    |                                                              |
   |   ===     ANODE / accelerating plates                             |
   |    |      held at a variable positive potential V                 |
   |    |      (this fixes the electron's energy: K = eV)              |
   |    |                                                              |
   |   [|]     COLLIMATOR - a fine hole that produces a NARROW,        |
   |    |      well-defined beam                                       |
   |    |                                                              |
   |    v      fine beam of electrons                                  |
   |    |                                        .-''''-.              |
   |    |                                     .-'        '-.           |
   |    |                                   /  ELECTRON      \         |
   |    |                                  |   DETECTOR       |        |
   |    |                                   \  (movable on   /         |
   |    |            scattered               '-. a circular.'          |
   |    |            electrons                  '-.arc  .-'            |
   |    |               \                          '----'              |
   |    |                \        phi = scattering angle               |
   |    |                 \      /                                     |
   |    v                  \    /                                      |
   |  --------------------------------------                           |
   |  ///////  NICKEL  CRYSTAL  TARGET  ///////                        |
   |  --------------------------------------                           |
   |     (the regularly spaced atoms of the crystal act as a           |
   |      three-dimensional DIFFRACTION GRATING, because the           |
   |      atomic spacing ~ 1 A matches the electron wavelength)        |
   |                                                                   |
   +-------------------------------------------------------------------+

            The detector is moved around the arc and the INTENSITY of
            the scattered electron beam is measured at each angle phi.
            The whole thing is repeated for different accelerating
            voltages V.
```

## The observation

```
  Detector current (intensity of scattered electrons) vs scattering angle
  for various accelerating voltages:

     I ^                                 I ^          BUMP
       |                                   |          ,-.
       |    \                              |         /   \
       |     '-.___                        |    \  /      \___
       |           '---                    |     '-        
       +-----------------> phi             +-----------------> phi
             44 V                                 48 V

     I ^         SHARP PEAK               I ^
       |          /\                        |        ,-.
       |         /  \                       |       /   \
       |    \   /    \                      |   \  /     \__
       |     '-'      '--                   |    '-
       +-----------------> phi              +-----------------> phi
             54 V   ^                             64 V
                    |
                phi = 50 degrees
```

```
  +----------------------------------------------------------------+
  |  THE KEY RESULT                                                |
  |                                                                |
  |  A SHARP, PRONOUNCED PEAK in the scattered intensity appeared  |
  |  at a scattering angle of  phi = 50 degrees  when the          |
  |  accelerating voltage was  V = 54 volts.                       |
  +----------------------------------------------------------------+
```

A sharp maximum in some directions and minima in others is a **diffraction
pattern**. Particles behaving like bullets could never do that.

## The calculation — the punchline of the chapter

```
  (A)  WHAT de BROGLIE PREDICTS at 54 V

                  12.27          12.27
       lambda  =  --------  =  ---------  =  1.67 angstrom
                  sqrt(54)       7.348


  (B)  WHAT THE EXPERIMENT MEASURED

       For nickel the interplanar spacing is  d = 0.91 A.
       The scattering angle phi = 50 deg corresponds to a glancing
       (Bragg) angle of

              theta = (180 - 50) / 2 = 65 degrees

       Bragg's law for the first order (n = 1):

              n lambda  =  2 d sin(theta)

              lambda    =  2 x 0.91 x sin 65 deg
                        =  2 x 0.91 x 0.9063
                        =  1.65 angstrom


  (C)  COMPARE

       +--------------------------+----------------+
       |  de Broglie prediction   |   1.67  A      |
       |  Experimental value      |   1.65  A      |
       +--------------------------+----------------+

       AGREEMENT WITHIN ABOUT 1 PERCENT.
```

## The conclusion (write this sentence)

```
  The close agreement between the measured wavelength and the value
  predicted by lambda = h / sqrt(2 m e V) EXPERIMENTALLY CONFIRMED
  de Broglie's hypothesis that moving electrons behave like waves.

  G.P. Thomson independently confirmed the same thing by passing fast
  electrons through a thin gold foil and photographing the resulting
  diffraction rings.
```

> **TRAP:** remember the pair of numbers as **"54 and 50"** — 54 VOLTS
> (accelerating potential) and 50 DEGREES (scattering angle). Students
> routinely swap them. And the two wavelengths are **1.67 predicted,
> 1.65 measured**.

---

# TOPIC 15 — Heisenberg's uncertainty principle (short but examinable)

If an electron is a wave, it is *spread out*. A spread-out thing does not have
one exact position. That single sentence is the physical origin of the
uncertainty principle.

```
  +----------------------------------------------------------------+
  |  HEISENBERG'S UNCERTAINTY PRINCIPLE                            |
  |                                                                |
  |  It is impossible to measure simultaneously and with perfect   |
  |  accuracy BOTH the position and the momentum of a particle.    |
  |                                                                |
  |                                    h                           |
  |          (delta x)(delta p)  >=  ------   =  h-bar / 2         |
  |                                   4 pi                         |
  |                                                                |
  |  where h-bar = h / (2 pi) = 1.05 x 10^-34 J s                  |
  |                                                                |
  |  Energy-time form:     (delta E)(delta t)  >=  h / (4 pi)      |
  +----------------------------------------------------------------+
```

## Its connection to the wave nature

```
  A wave of ONE exact wavelength (one exact momentum, p = h/lambda) is an
  endless wave that stretches over all of space:

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    momentum known EXACTLY  ->  position completely UNKNOWN

  To localise the particle you must add together many wavelengths to make
  a short WAVE PACKET:

                       /\
                    /\/  \/\
     ______/\/\/\/\/      \/\/\/\/\______
    position fairly well known  ->  but now there are many wavelengths
    present, so momentum is UNCERTAIN

  The better you pin down x, the worse you know p. That is
  delta x . delta p >= h/(4 pi).
```

**Two consequences worth quoting:**

```
  1.  The idea of a definite ORBIT (a path with an exact position and
      momentum at every instant) has no meaning for an electron. This
      is why Bohr's orbits were replaced by ORBITALS -- regions of
      PROBABILITY.
  2.  For everyday objects the limit is utterly negligible
      (h/4pi = 5.3 x 10^-35), which is why classical mechanics works
      perfectly for a cricket ball.
```

```
  WORKED EXAMPLE 7
  ----------------
  Q. The position of an electron is measured to an accuracy of
     1.0 x 10^-10 m. What is the minimum uncertainty in its momentum?

                  h              6.63 x 10^-34
     delta p  =  ---------  =  ------------------------
                 4 pi delta x   4 x 3.14 x 1.0 x 10^-10

                              6.63 x 10^-34
                          =  ----------------
                              1.256 x 10^-9

                          =  5.28 x 10^-25  kg m/s

  ANSWER: about 5.3 x 10^-25 kg m/s
```

---

# TOPIC 16 — More worked numericals (do these with a pen)

```
  WORKED EXAMPLE 8 -- finding the WORK FUNCTION from the threshold
  -----------------------------------------------------------------
  Q. The threshold wavelength of a metal is 5800 A. Find its work
     function in eV and in joules, and its threshold frequency.

     W0 (eV)  =  12400 / 5800  =  2.14 eV
              =  2.14 x 1.6 x 10^-19  =  3.42 x 10^-19  J

     nu0  =  c / lambda0  =  (3 x 10^8) / (5800 x 10^-10)

          =  3 x 10^8 / 5.8 x 10^-7  =  5.17 x 10^14  Hz

  ANSWER: W0 = 2.14 eV = 3.42 x 10^-19 J , nu0 = 5.17 x 10^14 Hz
          (This metal is caesium.)
```

```
  WORKED EXAMPLE 9 -- finding the THRESHOLD WAVELENGTH from W0
  -----------------------------------------------------------------
  Q. The work function of sodium is 2.75 eV. Find its threshold
     wavelength. Will visible light of 6000 A eject electrons from it?

                    12400        12400
     lambda0   =  ----------  =  -------  =  4509 A  (about 4500 A)
                    W0(eV)        2.75

     The incident light has lambda = 6000 A , which is LONGER than
     lambda0 = 4509 A.  Longer wavelength means LOWER frequency.

  ANSWER: lambda0 = 4509 A. NO emission, because 6000 A > lambda0.
          (Check the same way with energy: E = 12400/6000 = 2.07 eV,
           which is less than W0 = 2.75 eV. Same conclusion.)
```

```
  WORKED EXAMPLE 10 -- the standard 4-mark board numerical
  -----------------------------------------------------------------
  Q. Light of wavelength 4000 A falls on a sodium surface of work
     function 2.30 eV. Find (i) Kmax , (ii) the stopping potential,
     (iii) the maximum speed of the photoelectrons.

  (i)   E = 12400 / 4000 = 3.10 eV
        Kmax = 3.10 - 2.30 = 0.80 eV = 0.80 x 1.6e-19 = 1.28 x 10^-19 J

  (ii)  V0 = Kmax(in eV) / 1 = 0.80 volt

  (iii) v = 5.93 x 10^5 x sqrt(0.80)
          = 5.93 x 10^5 x 0.894
          = 5.30 x 10^5  m/s

        (long way:  v = sqrt(2 x 1.28e-19 / 9.1e-31)
                      = sqrt(2.813 x 10^11) = 5.30 x 10^5 m/s  -- same)

  ANSWERS: 0.80 eV , 0.80 V , 5.30 x 10^5 m/s
```

```
  WORKED EXAMPLE 11 -- TWO WAVELENGTHS, find h or W0
  -----------------------------------------------------------------
  Q. When light of wavelength 3000 A falls on a metal the stopping
     potential is 1.85 V; when 4000 A is used it is 0.82 V.
     Find the work function of the metal.

     E1 = 12400/3000 = 4.13 eV        E2 = 12400/4000 = 3.10 eV

     Einstein:   E1 = W0 + eV1   ->   4.13 = W0 + 1.85
                 E2 = W0 + eV2   ->   3.10 = W0 + 0.82

     From the first:   W0 = 4.13 - 1.85 = 2.28 eV
     From the second:  W0 = 3.10 - 0.82 = 2.28 eV     <-- they agree

  ANSWER: W0 = 2.28 eV  (about potassium)

  NOTE: subtracting the two equations gives  E1 - E2 = e(V1 - V2),
        i.e. 1.03 eV = 1.03 eV -- this is how h is measured
        experimentally.
```

```
  WORKED EXAMPLE 12 -- de Broglie wavelength from KINETIC ENERGY
  -----------------------------------------------------------------
  Q. Find the de Broglie wavelength of an electron whose kinetic
     energy is 120 eV.

     An electron with K = 120 eV is the same as an electron
     accelerated through 120 V, so use the shortcut directly:

              12.27         12.27
     lambda = ---------  =  --------  =  1.12 angstrom
              sqrt(120)      10.95

  ANSWER: 1.12 A = 1.12 x 10^-10 m
```

```
  WORKED EXAMPLE 13 -- de Broglie wavelength from TEMPERATURE
  -----------------------------------------------------------------
  Q. Find the de Broglie wavelength of a neutron (m = 1.67 x 10^-27 kg)
     in thermal equilibrium at 300 K. Take k = 1.38 x 10^-23 J/K.

                       h
     lambda  =  -----------------
                sqrt( 3 m k T )

     3 m k T = 3 x 1.67e-27 x 1.38e-23 x 300
             = 3 x 1.67 x 1.38 x 300 x 10^-50
             = 2074 x 10^-50  =  2.074 x 10^-47

     sqrt = 4.554 x 10^-24

                6.63 x 10^-34
     lambda  =  ---------------  =  1.46 x 10^-10 m
                4.554 x 10^-24

  ANSWER: 1.46 A -- again about the size of an atom, which is why
          "thermal neutrons" are used for neutron diffraction studies
          of crystals.
```

```
  WORKED EXAMPLE 14 -- comparing an electron and a proton
  -----------------------------------------------------------------
  Q. An electron and a proton have the SAME kinetic energy. Which has
     the longer de Broglie wavelength?

     lambda = h / sqrt(2 m K).  With K the same for both,

              lambda  is proportional to  1 / sqrt(m)

     The proton is about 1836 times heavier, so

              lambda(e) / lambda(p) = sqrt(1836) = 42.8

  ANSWER: the ELECTRON, by a factor of about 43.

  (If instead they had the same SPEED, lambda ~ 1/m and the electron
   would win by a factor of 1836. If they had the same MOMENTUM, the
   wavelengths would be EQUAL. Read the question carefully!)
```

---

# COMMON TRAPS COLLECTED IN ONE PLACE

> **TRAP 1:** Intensity controls the NUMBER of electrons (current).
> Frequency controls the ENERGY of each electron (Kmax, V0). Never swap.

> **TRAP 2:** Emission needs `nu > nu0` which is the same as
> `lambda < lambda0`. The wavelength condition is the "less than" one.

> **TRAP 3:** `Kmax` is the maximum, not the only, kinetic energy.
> Electrons from below the surface come out with less. The energies range
> from 0 up to Kmax.

> **TRAP 4:** The slope of the V0-vs-nu graph is `h/e`, NOT h. The slope of a
> Kmax-vs-nu graph is `h`. Read the y-axis label before answering.

> **TRAP 5:** Work function is a property of the METAL only. It never depends
> on the incident light.

> **TRAP 6:** A photon has ZERO rest mass but non-zero momentum `p = h/lambda`.
> Both statements are true at the same time.

> **TRAP 7:** In `lambda = 12.27/sqrt(V)` the answer comes out in ANGSTROM.
> Write the unit. In `E = 12400/lambda` the lambda must be in ANGSTROM and the
> answer is in eV.

> **TRAP 8:** Two photons cannot combine their energies to free one electron.
> One photon, one electron. This is why there is a threshold at all.

> **TRAP 9:** Davisson-Germer used a NICKEL crystal, 54 V, 50 degrees.
> G.P. Thomson used a thin GOLD foil. Do not merge the two experiments.

> **TRAP 10:** de Broglie wavelength does NOT depend on charge — only on
> momentum. Charge enters only when you compute the momentum from an
> accelerating voltage.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I DEFINE the term before using it? (work function, threshold
       frequency, stopping potential, saturation current)

  [ ]  Did I draw the graph with BOTH AXES LABELLED and the important
       point (nu0 or -V0 or the saturation level) marked on it?

  [ ]  In every numerical, did I write the FORMULA first, then substitute,
       then compute, then write the UNIT?

  [ ]  Did I convert the wavelength to ANGSTROM before using 12400/lambda?

  [ ]  Did I convert eV to joules before using (1/2)mv^2 ?

  [ ]  Is my stopping potential POSITIVE in magnitude with the word
       "volt" written after it?

  [ ]  For a "failure of wave theory" question, did I give all FOUR points,
       each as "wave theory says ... but experiment shows ..."?

  [ ]  For Einstein's equation, did I state that ONE photon is absorbed by
       ONE electron, and that Kmax belongs to a SURFACE electron?

  [ ]  For de Broglie, did I write the units (angstrom or metre) and check
       the order of magnitude looks sensible (10^-10 m for electrons,
       10^-34 m for cricket balls)?

  [ ]  For Davisson-Germer, did I quote 54 V, 50 degrees, 1.65 A measured
       vs 1.67 A predicted, and finish with the CONCLUSION sentence?

  [ ]  Did I attempt EVERY question? There is no negative marking in the
       board exam.
```
