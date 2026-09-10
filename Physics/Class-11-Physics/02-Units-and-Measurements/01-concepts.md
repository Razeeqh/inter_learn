# Units and Measurements — Concepts Explained Simply

Start here if Physics scares you. This chapter has almost no maths and gives
you about 8-10 marks.

---

# TOPIC 1 — Physical quantities

A **physical quantity** is anything you can measure: length, time, current.
Anything you cannot measure with a number and a unit is not a physical
quantity (beauty, anger).

```
  EVERY MEASUREMENT  =  NUMBER  x  UNIT

  Example:   5 m   means   5  times the unit "metre"
             ^ number      ^ unit
```

```
  FUNDAMENTAL (BASE) quantities
     - independent of each other
     - cannot be built from anything else
     - there are exactly SEVEN

  DERIVED quantities
     - built from the fundamental ones
     - example:  speed  =  length / time
```

## The key inverse relation

```
  For a fixed physical quantity:      n1 x u1  =  n2 x u2
                                       ^        ^
                                   number    unit

  A BIGGER unit gives a SMALLER number.

  Example:   1 kg  =  1000 g
             the unit got 1000 times SMALLER (kg -> g)
             so the number got 1000 times BIGGER (1 -> 1000)
```

---

## WORKED EXAMPLE 1.1 — the everyday conversion: 72 km/h into m/s

```
  STEP 1   Write out what one kilometre and one hour actually are:

              1 km  =  1000 m           1 h  =  60 x 60  =  3600 s

  STEP 2   Substitute both at once:

                          72 x 1000 m         72000
              72 km/h  =  ------------   =   -------   m/s
                             3600 s            3600

  STEP 3   Divide:

              72000 / 3600  =  20

              ANSWER:   72 km/h  =  20 m/s
```

> **SHORTCUT you will use all year:**
> km/h  ->  m/s : multiply by  5/18
> m/s   ->  km/h : multiply by  18/5
> Check: 72 x 5/18 = 360/18 = 20 m/s. Same answer, three seconds faster.

---

## WORKED EXAMPLE 1.2 — density of mercury from CGS to SI

The density of mercury is 13.6 g/cm^3. Express it in kg/m^3.

```
  STEP 1   Convert the two units separately:

              1 g     =  10^-3 kg
              1 cm^3  =  (10^-2 m)^3  =  10^-6 m^3

  STEP 2   Substitute:

                                  13.6  x  10^-3 kg
              13.6 g/cm^3   =   ---------------------
                                     10^-6 m^3

  STEP 3   Subtract the powers of ten   ( -3 - (-6) = +3 ):

              =  13.6  x  10^3  kg/m^3

              =  1.36  x  10^4  kg/m^3
```

> **REMEMBER THIS ONE.** A density in g/cm^3 becomes kg/m^3 by multiplying
> by 1000. Water: 1 g/cm^3 = 1000 kg/m^3.

---

## WORKED EXAMPLE 1.3 — bigger unit, smaller number

A rod measures 250 in some unit u. The unit is now made 5 times bigger.
What is the new number?

```
  n1 u1  =  n2 u2

  250  x  u   =   n2  x  (5u)

           250 u        250
  n2  =   --------  =   -----   =   50
            5 u           5

  ANSWER:  50
```

The rod did not change. Only the ruler did.

---

## WORKED EXAMPLE 1.4 — g = 9.8 m/s^2 expressed in km/h^2

```
  STEP 1   Handle the length:      1 m  =  10^-3 km

  STEP 2   Handle the time:        1 s  =  1/3600  h

                                   so    1 s^2    =  (1/3600)^2 h^2

                                   so    1 / s^2  =  3600^2 / h^2
                                                  =  1.296 x 10^7 / h^2

  STEP 3   Put both in:

           9.8 m/s^2  =  9.8  x  10^-3  x  1.296 x 10^7   km/h^2

                      =  9.8  x  1.296  x  10^4

                      =  12.70  x  10^4

                      =  1.27  x  10^5   km/h^2
```

> **TRAP:** the time is SQUARED, so the 3600 must be squared too.
> 3600 squared is 1.296 x 10^7, not 7200.

---

## WORKED EXAMPLE 1.5 — how many seconds in a year

```
  1 year  =  365 days  x  24 h  x  3600 s

           365 x 24     =  8760 hours

           8760 x 3600  =  31 536 000 s

                        =  3.15 x 10^7 s
```

> **MEMORY TRICK:** one year is very nearly `pi x 10^7 seconds`
> (pi x 10^7 = 3.14 x 10^7). Examiners love this estimate.

---

## WORKED EXAMPLE 1.6 — is it a physical quantity?

```
  +---------------------------+---------+------------------------------+
  |  ITEM                     |  YES/NO |  WHY                         |
  +---------------------------+---------+------------------------------+
  |  Length of a table        |   YES   |  number + unit (1.2 m)       |
  |  Electric current         |   YES   |  number + unit (2 A)         |
  |  Refractive index         |   YES   |  measurable, but it is a     |
  |                           |         |  pure number with no unit    |
  |  Beauty of a painting     |   NO    |  cannot be measured          |
  |  Anger                    |   NO    |  cannot be measured          |
  |  Number of students = 42  |   NO    |  a pure count, not a         |
  |                           |         |  physical quantity           |
  +---------------------------+---------+------------------------------+
```

> **TRAP:** a quantity can be a physical quantity and STILL have no unit
> (strain, refractive index, angle). "No unit" does not mean "not physical".

---

# TOPIC 2 — The SI system: 7 base units

```
  +---+-----------------------------+---------------+--------+
  | # |  BASE QUANTITY              |  SI UNIT      | SYMBOL |
  +---+-----------------------------+---------------+--------+
  | 1 |  Length                     |  metre        |   m    |
  | 2 |  Mass                       |  kilogram     |   kg   |
  | 3 |  Time                       |  second       |   s    |
  | 4 |  Electric current           |  ampere       |   A    |
  | 5 |  Thermodynamic temperature  |  kelvin       |   K    |
  | 6 |  Amount of substance        |  mole         |  mol   |
  | 7 |  Luminous intensity         |  candela      |   cd   |
  +---+-----------------------------+---------------+--------+
```

## Memory sentence

```
   My      Mother   Told    All      Kids     Must    Count
    |         |       |      |         |        |       |
  Metre   Mass(kg)  Time  Ampere    Kelvin    Mole  Candela
```

## Two supplementary units

```
  PLANE ANGLE  ->  radian (rad)

                          arc length        l
              theta  =  --------------  =  ---
                            radius          r


  SOLID ANGLE  ->  steradian (sr)

                            area            A
              omega  =  --------------  =  -----
                          (radius)^2        r^2

  BOTH ARE DIMENSIONLESS.
```

## Other systems of units

```
  CGS  ->  centimetre , gram , second
  FPS  ->  foot , pound , second
  MKS  ->  metre , kilogram , second
  SI   ->  the modern international system (the 7 units above)
```

## Why SI is preferred (4-mark point)

```
  1. COHERENT   - derived units come from base units with no extra numbers
  2. RATIONAL   - one unit per physical quantity
  3. DECIMAL    - conversions are just powers of 10
  4. UNIVERSAL  - accepted internationally
```

## How the base units are actually defined today

```
  METRE      the distance light travels in vacuum in
             1 / 299 792 458  of a second

  SECOND     the time taken for 9 192 631 770 vibrations of the radiation
             emitted by the caesium-133 atom

  KILOGRAM   fixed by giving Planck's constant h the exact value
             6.62607015 x 10^-34 J s
             (before 2019 it was the mass of a platinum-iridium cylinder
              kept at Sevres, near Paris)

  KELVIN     fixed by giving Boltzmann's constant kB the exact value
             1.380649 x 10^-23 J/K

  MOLE       the amount of substance containing exactly
             6.02214076 x 10^23 elementary entities

  AMPERE     fixed by giving the elementary charge e the exact value
             1.602176634 x 10^-19 C

  CANDELA    based on a source emitting light of frequency 540 x 10^12 Hz
```

> Only the **caesium clock** (second) and the **speed of light** (metre)
> definitions turn up in 2-mark questions. Learn those two properly.

## The SI prefixes — you need these in every chapter

```
  +----------+--------+---------+     +----------+--------+---------+
  |  PREFIX  | SYMBOL |  VALUE  |     |  PREFIX  | SYMBOL |  VALUE  |
  +----------+--------+---------+     +----------+--------+---------+
  |  deci    |   d    |  10^-1  |     |  deca    |  da    |  10^1   |
  |  centi   |   c    |  10^-2  |     |  hecto   |   h    |  10^2   |
  |  milli   |   m    |  10^-3  |     |  kilo    |   k    |  10^3   |
  |  micro   |  mu    |  10^-6  |     |  mega    |   M    |  10^6   |
  |  nano    |   n    |  10^-9  |     |  giga    |   G    |  10^9   |
  |  pico    |   p    |  10^-12 |     |  tera    |   T    |  10^12  |
  |  femto   |   f    |  10^-15 |     |  peta    |   P    |  10^15  |
  |  atto    |   a    |  10^-18 |     |  exa     |   E    |  10^18  |
  +----------+--------+---------+     +----------+--------+---------+
```

---

## WORKED EXAMPLE 2.1 — plane angle from arc and radius

An arc of length 5 cm is drawn on a circle of radius 20 cm.
Find the angle it subtends, in radians and in degrees.

```
  STEP 1   theta  =  arc / radius

                      5 cm
           theta =  --------   =   0.25 rad
                     20 cm

           (the centimetres cancel - that is why an angle is DIMENSIONLESS)

  STEP 2   Convert to degrees, using  1 rad = 57.3 degree :

           theta  =  0.25  x  57.3   =   14.3 degree

  ANSWER:  0.25 rad  =  14.3 degree   (about 14 deg 19 min)
```

---

## WORKED EXAMPLE 2.2 — degrees to radians and back

```
  (a)  Convert 30 degree into radian.

                          pi                3.1416
         theta  =  30 x  ------   =  30 x  --------   =  0.5236 rad
                          180                180


  (b)  Convert 2 radian into degree.

                          180                180
         theta  =  2  x  -----   =  2  x  --------   =  114.6 degree
                          pi               3.1416
```

---

## WORKED EXAMPLE 2.3 — degree, arc-minute, arc-second in radians  ***LEARN THIS CHAIN***

Every parallax numerical in the chapter starts here. Do not skip it.

```
                            pi           3.1416
  1 degree          =     ------   =   ----------   =  1.745 x 10^-2  rad
                            180           180


  1 minute of arc (1')    =  (1/60) degree

                              1.745 x 10^-2
                          =  ----------------   =   2.909 x 10^-4  rad
                                    60


  1 second of arc (1")    =  (1/60) minute

                              2.909 x 10^-4
                          =  ----------------   =   4.848 x 10^-6  rad
                                    60

                          ~   4.85 x 10^-6  rad     <-- WRITE THIS ON YOUR PALM
```

A quicker route to the same number:

```
  1 degree  =  60 x 60  =  3600 arc-seconds

               1.745 x 10^-2
  1 "   =    ----------------    =   4.85 x 10^-6 rad
                    3600
```

> **TRAP:** 1 arc-second is NOT one sixtieth of a degree. It is one
> **three-thousand-six-hundredth** of a degree. Divide by 60 TWICE.

---

## WORKED EXAMPLE 2.4 — solid angle

```
  (a)  A patch of area 2 m^2 is marked on a sphere of radius 4 m.
       Find the solid angle it subtends at the centre.

                 A          2          2
       omega =  -----  =  ------  =  ------  =  0.125 steradian
                r^2        4^2        16


  (b)  What solid angle does a WHOLE SPHERE subtend at its centre?

       Total surface area of a sphere  =  4 pi r^2

                 4 pi r^2
       omega =  -----------   =   4 pi   =   12.57 steradian
                   r^2


  (c)  A HEMISPHERE therefore subtends   2 pi  =  6.28 steradian.
```

> Maximum plane angle = 2 pi rad. Maximum solid angle = 4 pi sr.
> A favourite one-line objective question.

---

## WORKED EXAMPLE 2.5 — writing derived units in pure base units

An examiner can ask "express the newton / joule / watt in base SI units".

```
  Force      =  mass x acceleration     ->   N   =  kg m s^-2

  Work       =  force x distance        ->   J   =  kg m^2 s^-2

  Power      =  work / time             ->   W   =  kg m^2 s^-3

  Pressure   =  force / area            ->   Pa  =  kg m^-1 s^-2

  Charge     =  current x time          ->   C   =  A s

  Potential  =  work / charge           ->   V   =  kg m^2 s^-3 A^-1
```

> **METHOD:** write the simplest defining equation, then replace every symbol
> by its base unit. This is exactly the same skill as writing a dimensional
> formula in Topic 7 — you are already halfway there.

---

# TOPIC 3 — Measuring very large distances

## Parallax method

Look at a distant object from two points a known distance apart. The apparent
shift is called the parallax.

```
                            *  Star / Planet
                           /|\
                          / | \
                         /  |  \
                        /   |   \      theta = parallax angle
                       /    | D  \
                      /     |     \
                     /      |      \
                    /       |       \
              A  o---------------------o  B
                 |<------- b -------->|
                 basis (known distance between the two points)


                       b                              b
        theta  =  ---------      therefore     D  =  -------
                       D                             theta

        theta MUST be in RADIANS.
```

## Angular diameter method (for the SIZE of a planet)

```
                    |<-- d -->|
                    +---------+
                    |  planet |
                     \       /
                      \     /
                       \   /   alpha = angular size seen from Earth
                        \ /
                         o  observer on Earth
                         |<------ D ------>|

                    d  =  D  x  alpha
```

## Big length units

```
  +---------------------------+------------------------+------------------+
  |  UNIT                     |  VALUE                 |  USED FOR        |
  +---------------------------+------------------------+------------------+
  |  Astronomical unit (AU)   |  1.496 x 10^11  m      |  Sun-Earth       |
  |  Light year (ly)          |  9.46  x 10^15  m      |  starlight       |
  |  Parsec (pc)              |  3.08  x 10^16  m      |  star distances  |
  |  Angstrom (A)             |  10^-10  m             |  atoms           |
  |  Fermi (fm)               |  10^-15  m             |  nuclei          |
  +---------------------------+------------------------+------------------+

  1 parsec  =  3.26 light years

  DEFINITION OF PARSEC:
  the distance at which 1 AU subtends an angle of 1 SECOND OF ARC.
```

## Order of magnitude

```
  STEP 1   Write the number as   a x 10^b   with   1 <= a < 10
  STEP 2   If  a < 5   ->  order of magnitude is 10^b
           If  a >= 5  ->  order of magnitude is 10^(b+1)

  Examples:   2.7 x 10^4   ->   order = 10^4     (since 2.7 < 5)
              6.3 x 10^4   ->   order = 10^5     (since 6.3 >= 5)
```

---

## WORKED EXAMPLE 3.1 — distance of the Moon by parallax

Seen from two diametrically opposite points on the Earth, the Moon shows a
parallax angle of 1 deg 54'. The diameter of the Earth is 1.276 x 10^7 m.
Find the distance of the Moon.

```
  STEP 1   Turn the angle into a decimal number of degrees.

              54'  =  54 / 60  degree  =  0.9 degree

              theta  =  1  +  0.9   =   1.9 degree

  STEP 2   Convert to RADIANS   (1 degree = 1.745 x 10^-2 rad).

              theta  =  1.9  x  1.745 x 10^-2   =   3.316 x 10^-2 rad

  STEP 3   Apply the parallax formula.

                    b            1.276 x 10^7
              D = -------   =  ----------------
                  theta         3.316 x 10^-2

  STEP 4   Divide the numbers, then subtract the powers of ten.

              1.276 / 3.316   =   0.3848

              10^7 / 10^-2    =   10^9

              D  =  0.3848 x 10^9    =    3.85 x 10^8 m

  ANSWER:   about 3.85 x 10^8 m , that is roughly 3 lakh 85 thousand km.
```

> **TRAP:** if you skip STEP 2 and feed 1.9 straight into the formula you get
> 6.7 x 10^6 m — that would put the Moon inside the Earth's atmosphere.
> **RADIANS. EVERY TIME.**

---

## WORKED EXAMPLE 3.2 — diameter of the Moon from its angular diameter

The Moon's angular diameter measured from the Earth is 1920 arc-seconds and
its distance is 3.84 x 10^8 m. Find its diameter.

```
  STEP 1   Convert 1920" to radians.

              alpha  =  1920  x  4.85 x 10^-6

                     =  9312  x  10^-6

                     =  9.312 x 10^-3  rad

  STEP 2   Apply   d  =  D  x  alpha .

              d  =  3.84 x 10^8    x    9.312 x 10^-3

                 =  (3.84 x 9.312)   x   10^(8-3)

                 =  35.76   x   10^5

                 =  3.58 x 10^6 m      =     about 3580 km

  ANSWER:   the Moon is about 3.58 x 10^6 m across.
```

---

## WORKED EXAMPLE 3.3 — diameter of the Sun

The Sun also subtends about 1920 arc-seconds, but it sits 1.496 x 10^11 m away.

```
  alpha  =  1920 x 4.85 x 10^-6   =   9.312 x 10^-3 rad      (same as before)

  d  =  D  x  alpha

     =  1.496 x 10^11    x    9.312 x 10^-3

     =  (1.496 x 9.312)   x   10^(11-3)

     =  13.93   x   10^8

     =  1.39 x 10^9 m          =   about 14 lakh km
```

> **BEAUTIFUL FACT worth remembering:** the Sun and the Moon look the SAME SIZE
> in our sky (both about 1920"), because the Sun is roughly 400 times bigger
> AND roughly 400 times further away. That is why a total solar eclipse fits
> so exactly.

---

## WORKED EXAMPLE 3.4 — proving that 1 parsec = 3.08 x 10^16 m

Definition: a parsec is the distance at which 1 AU subtends 1 arc-second.

```
  STEP 1   b      =  1 AU  =  1.496 x 10^11 m

  STEP 2   theta  =  1"    =  4.85 x 10^-6 rad

  STEP 3            b           1.496 x 10^11
           D  =  -------   =  ----------------
                  theta        4.85 x 10^-6

  STEP 4   1.496 / 4.85    =  0.3084

           10^11 / 10^-6   =  10^17

           D  =  0.3084 x 10^17   =   3.08 x 10^16 m

  ANSWER:  1 parsec  =  3.08 x 10^16 m


  CHECK it against the light year:

           3.08 x 10^16
          --------------   =   3.26          so   1 pc  =  3.26 ly     CORRECT
           9.46 x 10^15
```

---

## WORKED EXAMPLE 3.5 — a star with a parallax of 0.5 arc-second

The Earth's orbit gives a baseline of 1 AU. Find the star's distance in metres,
in parsecs and in light years.

```
  STEP 1   theta  =  0.5"  =  0.5 x 4.85 x 10^-6  =  2.425 x 10^-6 rad

  STEP 2             1.496 x 10^11
           D    =  ----------------
                    2.425 x 10^-6

           1.496 / 2.425   =   0.6169

           D  =  0.6169 x 10^17    =    6.17 x 10^16 m

  STEP 3   In parsec:

                6.17 x 10^16
              ----------------    =    2.0 parsec
                3.08 x 10^16

  STEP 4   In light years:

              2.0  x  3.26    =    6.5 light years
```

> **SHORTCUT — memorise this and skip all the arithmetic:**
>
> ```
>                                        1
>       distance in PARSEC   =   ---------------------------
>                                parallax in ARC-SECONDS
> ```
>
> Parallax 0.5"  ->  2 pc.  Parallax 0.1"  ->  10 pc.  Parallax 2"  ->  0.5 pc.

---

## WORKED EXAMPLE 3.6 — how many metres in one light year

```
  distance  =  speed  x  time

            =  3 x 10^8 m/s    x    3.15 x 10^7 s        (1 year, from WE 1.5)

            =  (3 x 3.15)   x   10^(8+7)

            =  9.46   x   10^15  m
```

---

## WORKED EXAMPLE 3.7 — angular size of an everyday object

A man 1.8 m tall subtends an angle of 1.5 degree at your eye. How far away is he?

```
  STEP 1   alpha  =  1.5  x  1.745 x 10^-2   =   2.618 x 10^-2 rad

  STEP 2   d  =  D x alpha        so       D  =  d / alpha

                     1.8
           D  =  -----------    =    68.8 m
                   0.02618
```

Exactly the same formula as the Sun and the Moon. Only the numbers change.

---

## WORKED EXAMPLE 3.8 — the tower problem (a classic)

A man stands at A directly in front of a tower C and lines up a very distant
object O with the line AC. He then walks 100 m perpendicular to AC, to B.
Looking again, he finds that the tower has shifted by 40 degrees against the
distant background. Find the distance AC.

```
                                     O   (very, very distant)
                                     |
                                     |
                                     C   tower
                                  .  |
                              .      |
                          .          |   AC = ?
                      .              |
          B o-------------------------o A      (right angle at A)
            |<--------- 100 m ------->|

            angle at B, between BA and BC, is the 40 degree shift

  Because O is enormously far away, the line BO is effectively PARALLEL to AO.
  So the whole 40 degree shift is the angle  A B C , sitting at B.

  In the right-angled triangle ABC, with the right angle at A:

           side OPPOSITE  the 40 deg angle  =  AC
           side ADJACENT to the 40 deg angle =  AB  =  100 m

                        AC              AC
           tan 40  =  ------    ->   -------  =  0.8391
                        AB             100

           AC  =  100  x  0.8391   =   83.9 m

  ANSWER:  the tower is about 84 m away.
```

> **HOW TO NEVER GET THIS WRONG:** mark the right angle FIRST, then label which
> side is opposite the given angle and which is adjacent to it.
> opposite / adjacent = tan. Nothing else.

---

## The reflection method — RADAR, LIDAR and SONAR

Send a pulse, time the echo, then **halve** it, because the pulse went there
*and* came back.

```
  +--------------------------------------------------------------+
  |                                                              |
  |                        v  x  t                               |
  |             d   =   -----------        v = speed of the      |
  |                          2             pulse in that medium  |
  |                                                              |
  +--------------------------------------------------------------+

  RADAR  ->  radio waves through space  ,  v = 3 x 10^8 m/s
  LIDAR  ->  laser light                ,  v = 3 x 10^8 m/s
  SONAR  ->  ultrasound in water        ,  v = about 1450 m/s
```

### WORKED EXAMPLE 3.9 — radar to a planet

A radar pulse comes back 7 minutes after it was sent. How far away is the planet?

```
  t  =  7 x 60   =   420 s

         3 x 10^8  x  420         1.26 x 10^11
  d  =  -------------------  =  ----------------  =  6.3 x 10^10 m
                 2                     2
```

### WORKED EXAMPLE 3.10 — sonar to the seabed

An echo returns after 0.8 s. Sound travels at 1450 m/s in sea water.

```
          1450  x  0.8          1160
  d  =  ----------------  =   --------   =   580 m
                2                2
```

> **TRAP:** forgetting to divide by 2 is the commonest mistake here.
> The pulse makes a ROUND TRIP.

---

## Measuring very SMALL distances — the oleic acid film

You cannot see a molecule, but you can make a layer exactly one molecule thick
and measure how thick it is.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                      volume of oleic acid used                    |
  |     thickness  =  --------------------------------                |
  |                     area of the film on the water                 |
  |                                                                   |
  |     and this thickness IS (about) the size of one molecule.       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

### WORKED EXAMPLE 3.11

A drop of dilute oleic acid solution contains 1.25 x 10^-4 cm^3 of pure oleic
acid. It spreads into a film of area 500 cm^2. Estimate the size of one
oleic acid molecule.

```
             1.25 x 10^-4 cm^3
  t    =   ----------------------
                 500 cm^2

       =   2.5 x 10^-7 cm

       =   2.5 x 10^-9 m                    (since 1 cm = 10^-2 m)

  ORDER OF MAGNITUDE:   10^-9 m , which is about 25 angstrom.
```

That is the right ballpark — molecules are a few angstrom across.

---

## MORE ORDER-OF-MAGNITUDE PRACTICE

```
  +------------------------+---------------------+---------+---------------+
  |  QUANTITY              |  VALUE              |    a    |  ORDER        |
  +------------------------+---------------------+---------+---------------+
  |  Mass of the Earth     |  5.98 x 10^24 kg    |  5.98   |  10^25  (>=5) |
  |  Radius of the Earth   |  6.4  x 10^6  m     |  6.4    |  10^7   (>=5) |
  |  Distance to the Moon  |  3.84 x 10^8  m     |  3.84   |  10^8   (<5)  |
  |  Distance to the Sun   |  1.5  x 10^11 m     |  1.5    |  10^11  (<5)  |
  |  Charge on an electron |  1.6  x 10^-19 C    |  1.6    |  10^-19 (<5)  |
  |  Mass of an electron   |  9.1  x 10^-31 kg   |  9.1    |  10^-30 (>=5) |
  |  Speed of light        |  3.0  x 10^8 m/s    |  3.0    |  10^8   (<5)  |
  |  0.00234               |  2.34 x 10^-3       |  2.34   |  10^-3  (<5)  |
  |  87 000                |  8.7  x 10^4        |  8.7    |  10^5   (>=5) |
  +------------------------+---------------------+---------+---------------+
```

> **TRAP:** the cut-off is 5, not "does it look big".
> 4.9 x 10^3 has order 10^3.  5.1 x 10^3 has order 10^4.

---

## THE RANGE OF LENGTHS, MASSES AND TIMES (straight EAPCET recall)

```
  LENGTHS                                  MASSES
  -----------------------------------      ------------------------------
  10^-15 m  size of a proton               10^-30 kg  electron
  10^-14 m  size of a nucleus              10^-27 kg  proton
  10^-10 m  size of an atom  (1 A)         10^-26 kg  water molecule
  10^-8  m  size of a virus                10^-9  kg  dust particle
  10^-4  m  thickness of a sheet of paper  10^2   kg  a human being
  10^4   m  height of Mount Everest        10^25  kg  the Earth
  10^7   m  radius of the Earth            10^30  kg  the Sun
  10^8   m  Earth to Moon                  10^41  kg  the Milky Way
  10^11  m  Earth to Sun                   10^55  kg  observable universe
  10^16  m  distance to the nearest star
  10^26  m  size of the observable universe

  TIMES
  ---------------------------------------------------------------
  10^-24 s  lifetime of the most unstable particles
  10^-15 s  one period of a light wave
  10^-6  s  one period of a radio wave
  10^0   s  one heartbeat (about 0.8 s)
  10^5   s  one day     (86 400 s  =  8.64 x 10^4)
  10^7   s  one year    (3.15 x 10^7)
  10^17  s  age of the Earth
  10^18  s  age of the universe
```

---

# TOPIC 4 — Errors

```
  ERROR  =  measured value  -  true value
```

Errors are **unavoidable**. They are not the same as mistakes.

## The four types

```
  1. SYSTEMATIC ERRORS
     Always in the SAME direction, so they CAN be corrected.

     (a) Instrumental      - zero error in vernier callipers, worn-out scale
     (b) Imperfect method  - ignoring buoyancy, losing heat to the room
     (c) Personal          - parallax while reading a scale, a careless habit

  2. RANDOM ERRORS
     Irregular in both size and sign. Caused by unpredictable fluctuations.
     REDUCED BY: taking many readings and averaging them.

  3. LEAST COUNT ERROR
     Caused by the limited resolution of the instrument.
        vernier callipers  ->  least count 0.01 cm
        screw gauge        ->  least count 0.001 cm

  4. GROSS ERRORS
     Human blunders - writing down the wrong reading.
```

## Accuracy vs Precision (a favourite 2-mark question)

```
  ACCURACY  =  how CLOSE your value is to the TRUE value
  PRECISION =  how FINE / repeatable your measurement is

  You can be precise but inaccurate:
  an instrument with a zero error gives the same wrong answer every time.
```

## Putting a number on the error

You measure a quantity n times and get readings a1, a2, ... , an.

```
  +----------------------------+-----------------------------------------+
  |  NAME                      |  FORMULA                                |
  +----------------------------+-----------------------------------------+
  |  True (mean) value         |  a_mean = (a1 + a2 + ... + an) / n      |
  |  Absolute error of one     |  d(ai)  = | a_mean - ai |               |
  |  reading                   |           (always POSITIVE)             |
  |  Mean absolute error       |  d_mean = sum of all d(ai) / n          |
  |  Relative error            |  d_mean / a_mean                        |
  |  Percentage error          |  (d_mean / a_mean) x 100 %              |
  +----------------------------+-----------------------------------------+

  The result is written as:     a = a_mean  ±  d_mean
```

### Worked example

Readings of a time period: 2.63, 2.56, 2.42, 2.71, 2.80 seconds

```
  MEAN:      (2.63 + 2.56 + 2.42 + 2.71 + 2.80) / 5  =  13.12 / 5  =  2.62 s

  ABSOLUTE ERRORS:
      | 2.62 - 2.63 |  =  0.01
      | 2.62 - 2.56 |  =  0.06
      | 2.62 - 2.42 |  =  0.20
      | 2.62 - 2.71 |  =  0.09
      | 2.62 - 2.80 |  =  0.18
                          ----
                    sum =  0.54

  MEAN ABSOLUTE ERROR:   0.54 / 5  =  0.11 s

  RESULT:    T  =  2.62  ±  0.11  s        which is about 4 %
```

---

## WORKED EXAMPLE 4.2 — the full calculation, laid out as a table

**This is exactly how you should present it in the exam.** Build the table,
then read the four answers straight off the bottom of it.

The diameter of a wire is measured five times with a screw gauge:
0.39, 0.38, 0.40, 0.41, 0.42 mm.

**STEP 1 — the mean.**

```
             0.39 + 0.38 + 0.40 + 0.41 + 0.42        2.00
  d_mean  =  --------------------------------   =   ------   =   0.400 mm
                          5                            5
```

**STEP 2 — build the table of absolute errors.**

| Reading no. | d(i) in mm | d_mean in mm | absolute error = abs( d_mean - d(i) ) |
|---|---|---|---|
| 1 | 0.39 | 0.400 | 0.010 |
| 2 | 0.38 | 0.400 | 0.020 |
| 3 | 0.40 | 0.400 | 0.000 |
| 4 | 0.41 | 0.400 | 0.010 |
| 5 | 0.42 | 0.400 | 0.020 |
| | | **SUM** | **0.060** |

**STEP 3 — mean absolute error.** (call it `delta_d` so it is not confused
with the mean diameter `d_mean`)

```
               sum of absolute errors        0.060
  delta_d  =  ------------------------  =   -------   =   0.012 mm
                        n                      5
```

**STEP 4 — relative error.**

```
                        0.012
  relative error  =   ---------   =   0.030
                        0.400
```

**STEP 5 — percentage error.**

```
  percentage error  =  0.030  x  100   =   3.0 %
```

**STEP 6 — write the final result.**

```
  +--------------------------------------------------------+
  |                                                        |
  |     d  =  0.400  ±  0.012  mm      (about 3 %)         |
  |                                                        |
  |     or, rounded sensibly,   d = 0.40 ± 0.01 mm         |
  |                                                        |
  +--------------------------------------------------------+
```

> **TRAP 1:** every absolute error is taken as POSITIVE. Never write -0.010.
> **TRAP 2:** the mean absolute error is divided by **n**, the number of
> readings — not by (n - 1).
> **TRAP 3:** you must write the final `a ± da` line. That line alone is
> usually worth 1 mark.

---

## WORKED EXAMPLE 4.3 — a second data set, same six steps

Five measurements of the length of a rod: 25.2, 25.4, 25.1, 25.3, 25.0 cm.

```
              25.2 + 25.4 + 25.1 + 25.3 + 25.0        126.0
  MEAN   =   ---------------------------------  =   -------  =  25.2 cm
                            5                          5
```

| Reading | value (cm) | absolute error = abs( 25.2 - value ) |
|---|---|---|
| 1 | 25.2 | 0.0 |
| 2 | 25.4 | 0.2 |
| 3 | 25.1 | 0.1 |
| 4 | 25.3 | 0.1 |
| 5 | 25.0 | 0.2 |
| | **SUM** | **0.6** |

```
  MEAN ABSOLUTE ERROR  =   0.6 / 5   =   0.12 cm

                            0.12
  RELATIVE ERROR       =  --------   =   0.00476
                            25.2

  PERCENTAGE ERROR     =  0.00476 x 100   =   0.48 %

  RESULT               :  L  =  25.2  ±  0.1  cm       (about 0.5 %)
```

Notice how much smaller the percentage error is than in WE 4.2 — because the
quantity being measured (25 cm) is far bigger than the size of the wobble.

---

## WORKED EXAMPLE 4.4 — five readings of a time period

Readings: 1.62, 1.64, 1.60, 1.63, 1.66 s.

```
              1.62 + 1.64 + 1.60 + 1.63 + 1.66        8.15
  MEAN   =   ---------------------------------  =   ------   =   1.63 s
                            5                          5
```

| Reading | value (s) | absolute error |
|---|---|---|
| 1 | 1.62 | 0.01 |
| 2 | 1.64 | 0.01 |
| 3 | 1.60 | 0.03 |
| 4 | 1.63 | 0.00 |
| 5 | 1.66 | 0.03 |
| | **SUM** | **0.08** |

```
  MEAN ABSOLUTE ERROR  =  0.08 / 5   =   0.016 s

                           0.016
  RELATIVE ERROR       =  -------   =   0.0098
                           1.63

  PERCENTAGE ERROR     =  0.98 %   ,  say  1 %

  RESULT               :  T  =  1.63  ±  0.02  s
```

---

## Accuracy and precision, drawn as dartboards

```
   ACCURATE + PRECISE        PRECISE, NOT ACCURATE
      +-----------+             +-----------+
      |   .-"-.   |             |   .-"-.   |
      |  /     \  |             |  /     \  |
      | |  o+o  | |             | |   +  o| |       + = the true value
      |  \  o  /  |             |  \    oo  |       o = your readings
      |   '-.-'   |             |   '-.-'   |
      +-----------+             +-----------+
    readings tight AND        readings tight but ALL
    sitting on the truth      sitting in the wrong place
                              (this is a ZERO ERROR)


   ACCURATE, NOT PRECISE     NEITHER
      +-----------+             +-----------+
      |   .-"-. o |             | o .-"-.   |
      | o/     \  |             |  /     \ o|
      | |   +   | |             | |   +   | |
      |  \     /  |             |o \     /  |
      | o '-.-' o |             |   '-.-'  o|
      +-----------+             +-----------+
    scattered, but they       scattered AND sitting
    average to the truth      off centre as well
```

> The middle picture is the one examiners test: **a zero error makes you
> precise but not accurate.** That single sentence is worth the 2 marks.

---

## Least count — where the error comes from in the first place

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   VERNIER CALLIPERS                                                |
  |                                                                    |
  |     LC  =  1 main scale division  -  1 vernier scale division      |
  |                                                                    |
  |                                                                    |
  |   SCREW GAUGE  /  SPHEROMETER                                      |
  |                                                                    |
  |                    pitch                                           |
  |     LC   =   -----------------------------                         |
  |               number of circular scale divisions                   |
  |                                                                    |
  |                    distance moved along the main scale             |
  |     pitch  =   ----------------------------------------            |
  |                        number of full rotations                    |
  |                                                                    |
  +--------------------------------------------------------------------+
```

### WORKED EXAMPLE 4.5 — least count of a vernier

```
  (a)  10 vernier divisions coincide with 9 main scale divisions,
       and 1 MSD = 1 mm.

         1 VSD  =  9/10  mm  =  0.9 mm

         LC  =  1 MSD - 1 VSD  =  1 - 0.9  =  0.1 mm  =  0.01 cm


  (b)  20 vernier divisions coincide with 19 main scale divisions,
       and 1 MSD = 1 mm.

         1 VSD  =  19/20  mm  =  0.95 mm

         LC  =  1  -  0.95  =  0.05 mm


  (c)  50 vernier divisions coincide with 49 main scale divisions,
       and 1 MSD = 0.5 mm.

         1 VSD  =  49 x 0.5 / 50  =  0.49 mm

         LC  =  0.5  -  0.49  =  0.01 mm
```

> **GENERAL RESULT:** if n vernier divisions cover (n - 1) main divisions,
> then `LC = (1 MSD) / n`. Check (a): 1 mm / 10 = 0.1 mm. Correct.

### WORKED EXAMPLE 4.6 — least count of a screw gauge

```
  The screw advances 3 mm along the main scale in 6 complete rotations,
  and the circular scale has 100 divisions.

                       3 mm
  STEP 1   pitch  =  --------  =  0.5 mm
                        6

  STEP 2            0.5 mm
           LC  =  ----------  =  0.005 mm   =   5 x 10^-4 cm
                     100
```

### WORKED EXAMPLE 4.7 — reading the instruments, with zero error

```
  VERNIER READING
  ---------------
     Main scale reading (MSR)        =  2.4 cm
     Coinciding vernier division     =  6
     Least count                     =  0.01 cm

     Reading  =  MSR  +  (division x LC)
              =  2.4  +  (6 x 0.01)
              =  2.4  +  0.06
              =  2.46 cm


  SCREW GAUGE READING WITH A ZERO ERROR
  -------------------------------------
     With the jaws closed the circular scale reads +3 divisions.

     ZERO ERROR       =  + 3 x 0.01  =  + 0.03 mm
     ZERO CORRECTION  =  - 0.03 mm            (always the opposite sign)

     Now the wire is placed in:
        MSR = 2 mm ,  circular scale reading = 45 ,  LC = 0.01 mm

     Observed reading  =  2  +  (45 x 0.01)  =  2  +  0.45  =  2.45 mm

     CORRECTED reading =  2.45  -  0.03      =  2.42 mm
```

> **TRAP:** if the zero reading is BELOW the line, say the 96th division shows,
> the zero error is **negative**: (96 - 100) x 0.01 = -0.04 mm, so the
> correction is **+0.04 mm** and you ADD it. Sign errors here are the number
> one reason students lose the practical marks.

---

## Why you time 100 oscillations instead of 1

This is a genuine board question and it is a one-line answer once you see it.

```
  A stopwatch can be read to 0.1 s.

  TIME ONE OSCILLATION                 TIME 100 OSCILLATIONS
  --------------------                 ---------------------
     T        = 2.0 s                     total t     = 200 s
     dT       = 0.1 s                     dt          = 0.1 s

     dT        0.1                        dt           0.1
    ----  =  -----  =  0.05                ---  =  -------  =  0.0005
      T       2.0                            t       200

           =  5 %                                =  0.05 %
```

The *absolute* error stays the same (0.1 s), but you divide it by a number
100 times larger, so the *relative* error drops 100 times.

> **THE GENERAL LESSON, worth memorising:**
> to reduce a relative error, either measure a BIGGER quantity or use a
> FINER instrument. Repeating a reading only kills the RANDOM part.

---

# TOPIC 5 — Combination of errors (the 4-mark numerical)

This is the single most useful idea in the chapter.

```
  +----------------------------------------------------------------------+
  |  RULE 1 — SUM OR DIFFERENCE:  ADD THE ABSOLUTE ERRORS                |
  |                                                                      |
  |     If   Z = A + B    or    Z = A - B                                |
  |                                                                      |
  |     then      dZ  =  dA  +  dB                                       |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |  RULE 2 — PRODUCT OR QUOTIENT:  ADD THE RELATIVE ERRORS              |
  |                                                                      |
  |     If   Z = A x B    or    Z = A / B                                |
  |                                                                      |
  |            dZ        dA       dB                                     |
  |     then  ----   =  ----  +  ----                                    |
  |             Z         A        B                                     |
  +----------------------------------------------------------------------+

  +----------------------------------------------------------------------+
  |  RULE 3 — POWERS:  MULTIPLY THE RELATIVE ERROR BY THE POWER          |
  |                                                                      |
  |                A^p  x  B^q                                           |
  |     If   Z =  --------------                                         |
  |                    C^r                                               |
  |                                                                      |
  |            dZ         dA         dB         dC                       |
  |     then  ----  =  p ----  +  q ----  +  r ----                      |
  |             Z          A          B          C                       |
  +----------------------------------------------------------------------+
```

> **EVERY SIGN IS A PLUS.** Errors never cancel out.
> You always assume the worst case.
>
> **Fractional powers count too.** A square root contributes  1/2  x  (dA / A).

### Worked example

Density  rho = M / V  where  V = L^3.
If M has 2% error and L has 1% error, find the % error in rho.

```
   d(rho)        dM           dL
  --------  =   ----   +   3 ----
    rho           M            L

            =   2 %   +   3 x (1 %)

            =   2 %   +   3 %

            =   5 %
```

> **PRACTICAL LESSON:** the quantity with the HIGHEST POWER dominates the error.
> That is the one you must measure most carefully.

---

## Where the three rules come from (in case a 4-mark question asks)

```
  SUM      Z + dZ  =  (A + dA) + (B + dB)  =  (A + B) + (dA + dB)
                                                 ^          ^
                                                 Z          dZ
           so    dZ = dA + dB


  PRODUCT  Z + dZ  =  (A + dA)(B + dB)
                   =  AB  +  A dB  +  B dA  +  dA dB
                                               ^^^^^^^
                                          tiny, so DROP it

           dZ  =  A dB  +  B dA

           Divide throughout by  Z = AB :

             dZ       dB       dA
            ----  =  ----  +  ----
              Z        B        A


  POWER    A^p is just A x A x A ... (p times), so its relative error
           is added p times:      p (dA / A)
```

---

## EIGHT WORKED ERROR-PROPAGATION NUMERICALS, EASIEST FIRST

### WORKED EXAMPLE 5.1 — a SUM (absolute errors add)

Two rods measure `A = 4.2 ± 0.1 cm` and `B = 6.5 ± 0.2 cm`.
Find the total length with its error.

```
  Z   =  A + B   =  4.2 + 6.5   =   10.7 cm

  dZ  =  dA + dB =  0.1 + 0.2   =   0.3 cm

  RESULT:   Z  =  10.7  ±  0.3  cm

                        0.3
  Percentage error  =  ------  x  100   =   2.8 %
                        10.7
```

---

### WORKED EXAMPLE 5.2 — a DIFFERENCE (and why subtraction is dangerous)

`A = 10.0 ± 0.1 cm` and `B = 8.0 ± 0.1 cm`. Find `Z = A - B`.

```
  Z   =  10.0 - 8.0  =  2.0 cm

  dZ  =  dA + dB  =  0.1 + 0.1  =  0.2 cm      <-- STILL A PLUS SIGN

  RESULT:   Z  =  2.0  ±  0.2  cm

                        0.2
  Percentage error  =  -----  x  100   =   10 %
                        2.0
```

Look at what just happened:

```
  A on its own was accurate to    0.1 / 10.0  =  1 %
  B on its own was accurate to    0.1 /  8.0  =  1.25 %
  but their DIFFERENCE is only accurate to    10 %
```

> **THE BIG LESSON:** subtracting two nearly equal numbers destroys accuracy.
> The absolute errors ADD while the answer SHRINKS.
> Never design an experiment around a small difference of two big numbers.

---

### WORKED EXAMPLE 5.3 — a QUOTIENT with real numbers

`V = 100 ± 5 volt` and `I = 10 ± 0.2 ampere`. Find `R = V / I` with its error.

```
  STEP 1   The value.

               100
        R  =  ------  =  10 ohm
                10

  STEP 2   The relative errors.

           dV / V   =   5 / 100    =   0.05    =   5 %
           dI / I   =   0.2 / 10   =   0.02    =   2 %

  STEP 3   Add them (product AND quotient both just ADD).

           dR / R   =   0.05  +  0.02   =   0.07   =   7 %

  STEP 4   Turn the relative error back into an absolute error.

           dR  =  0.07  x  10   =   0.7 ohm

  RESULT:   R  =  10.0  ±  0.7  ohm      (7 %)
```

> **TRAP:** the question usually ends "find R". A full answer needs BOTH the
> value and the `± dR`. Stopping at "7 %" can cost you the last mark.

---

### WORKED EXAMPLE 5.4 — density from mass and volume

`m = 100.0 ± 0.5 g` and `V = 20.0 ± 0.1 cm^3`.

```
              m        100.0
  rho   =   -----  =  -------   =   5.00 g/cm^3
              V         20.0

  d(rho)      dm       dV        0.5        0.1
  ------  =  ----  +  ----  =  -------  +  ------
   rho         m        V       100.0       20.0

                             =  0.005  +  0.005

                             =  0.010    =    1.0 %

  d(rho)  =  0.010  x  5.00   =   0.05 g/cm^3

  RESULT:   rho  =  5.00  ±  0.05  g/cm^3
```

---

### WORKED EXAMPLE 5.5 — a POWER (kinetic energy)

The percentage errors in mass and speed are 2 % and 3 %. Find the error in
`E = (1/2) m v^2`.

```
   dE        dm            dv
  ----  =   ----   +   2  ----
    E         m             v

        =   2 %   +   2 x (3 %)

        =   2 %   +   6 %

        =   8 %
```

> **THE 1/2 CONTRIBUTES NOTHING.** A pure number has no error. Ignore it.

---

### WORKED EXAMPLE 5.6 — a SQUARE ROOT

`v = sqrt( 2 g h )`. The errors in g and h are 1 % and 4 %. Find the error in v.

```
  Write the square root as a power of one half:

         v  =  (2 g h)^(1/2)   =   k  x  g^(1/2)  x  h^(1/2)


   dv        1   dg         1   dh
  ----  =   --- ----   +   --- ----
    v        2   g          2   h

        =   0.5 x (1 %)   +   0.5 x (4 %)

        =   0.5 %   +   2 %

        =   2.5 %
```

> **TRAP:** students write `1/2` as `2`. A square root HALVES the contribution.
> A cube root divides it by 3.

---

### WORKED EXAMPLE 5.7 — square root IN THE DENOMINATOR, mixed powers

```
            a^2  b^3
   X   =  --------------
            c  sqrt(d)
```

The percentage errors in a, b, c, d are 1 %, 2 %, 3 %, 4 %.

```
  STEP 1   Read the POWER of every letter, top or bottom, ignoring position:

              a  ->  power 2
              b  ->  power 3
              c  ->  power 1        (bottom - still counts as PLUS)
              d  ->  power 1/2      (bottom, square root - still PLUS)

  STEP 2   Multiply each power by its percentage error and add:

              2 x 1   =   2 %
              3 x 2   =   6 %
              1 x 3   =   3 %
            0.5 x 4   =   2 %
                        ------
                          13 %

  ANSWER:   maximum percentage error in X  =  13 %
```

> **THE ONE RULE THAT COVERS EVERY VERSION OF THIS QUESTION:**
> being in the denominator does NOT make the term negative.
> Errors never help each other. Every single term is added.

---

### WORKED EXAMPLE 5.8 — Young's modulus (the hardest common version)

In a wire experiment,

```
                4 F L
   Y   =   ---------------
             pi  d^2  e
```

where F = load, L = original length, d = diameter, e = extension. The
percentage errors are F 1 %, L 0.5 %, d 1 %, e 2 %.

```
   dY        dF        dL          dd        de
  ----  =   ----  +   ----   +  2 ----  +   ----
    Y         F         L           d         e

        =   1 %   +   0.5 %   +   2 x (1 %)   +   2 %

        =   1  +  0.5  +  2  +  2

        =   5.5 %
```

> Note that `4` and `pi` contribute nothing, and that the DIAMETER — squared —
> is the biggest single contributor. Measure the diameter most carefully.

---

### WORKED EXAMPLE 5.9 — absolute error at the end

`Z = A^2 B / C` with `A = 2.0 ± 0.1 m`, `B = 4.0 ± 0.2 m`, `C = 5.0 ± 0.1 m`.

```
  STEP 1   The value.

              (2.0)^2 x 4.0        4.0 x 4.0        16
        Z  =  --------------   =  -----------   =  ----   =   3.2
                   5.0                5.0            5

  STEP 2   The relative error.

         dZ         dA        dB       dC
        ----  =  2 ----   +  ----  +  ----
          Z          A         B        C

                     0.1        0.2       0.1
              =  2 x -----  +  -----  +  -----
                     2.0        4.0       5.0

              =  2 x 0.05  +  0.05  +  0.02

              =  0.10  +  0.05  +  0.02   =   0.17    =   17 %

  STEP 3   The absolute error.

        dZ  =  0.17  x  3.2   =   0.544    ~   0.5

  RESULT:   Z  =  3.2  ±  0.5           (17 %)
```

---

### WORKED EXAMPLE 5.10 — g from a pendulum, with real experimental numbers

`l = 20.0 cm` measured with a scale of least count `0.1 cm`.
The time for 100 oscillations is `90 s`, measured with a watch of
resolution `1 s`. Find the percentage error in g.

```
                4 pi^2 l                dg        dl           dT
   g   =   ---------------    ->       ----  =   ----   +   2 ----
                  T^2                    g         l            T

  STEP 1            dl        0.1
                   ----  =   ------   =   0.005    =   0.5 %
                     l        20.0

  STEP 2   The time for ONE oscillation and its error:

                    90                              1
             T  =  -----  =  0.90 s        dT  =  -----  =  0.01 s
                    100                            100

           BUT the ratio is the same whether you use the totals or the
           per-oscillation values:

                    dT        1
                   ----  =  ------  =  0.0111    =    1.11 %
                     T        90

  STEP 3            dg
                   ----  =  0.5 %  +  2 x (1.11 %)  =  0.5 + 2.22  =  2.72 %
                     g

  ANSWER:   about 2.7 % error in g.
```

> **WHICH MEASUREMENT SHOULD YOU IMPROVE?** The time. It contributes 2.22 %
> against the length's 0.5 %. Buying a better ruler is a waste of money here;
> timing more oscillations is free and cuts the error immediately.

---

### WORKED EXAMPLE 5.11 — the stretch problem: focal length of a lens

`u = 10.0 ± 0.1 cm` and `v = 20.0 ± 0.2 cm`, with

```
             u v
     f  =  -------
            u + v
```

```
  STEP 1   The value.

               10.0 x 20.0        200
        f  =  -------------  =  -------   =   6.67 cm
               10.0 + 20.0        30

  STEP 2   f is a product of u and v DIVIDED by the sum (u + v),
           so all three contribute:

          df        du        dv        d(u + v)
         ----  =   ----  +   ----  +  ------------
           f         u         v          u + v

           and   d(u + v)  =  du + dv  =  0.1 + 0.2  =  0.3 cm

  STEP 3   Put the numbers in.

          df        0.1        0.2        0.3
         ----  =  ------  +  ------  +  ------
           f       10.0       20.0        30.0

               =  0.010  +  0.010  +  0.010

               =  0.030      =    3 %

  STEP 4   df  =  0.030  x  6.67   =   0.20 cm

  RESULT:   f  =  6.7  ±  0.2  cm
```

> This is the only version where a quantity appears TWICE (inside `u + v`
> as well as on its own). Handle the sum as its own separate block first,
> then treat it as one more factor.

---

## THE ONE-LINE ALGORITHM FOR EVERY ERROR-PROPAGATION QUESTION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   1.  Is it a SUM or DIFFERENCE ?   ->   add the ABSOLUTE errors.    |
  |                                                                     |
  |   2.  Otherwise, list every letter with its POWER                   |
  |       (top or bottom, it makes no difference).                      |
  |                                                                     |
  |   3.  Total % error  =  SUM of  (power x that letter's % error).     |
  |                                                                     |
  |   4.  Pure numbers ( 2 , 4 , pi , 1/2 ) contribute ZERO.             |
  |                                                                     |
  |   5.  If they ask for the answer, multiply the % back by the value   |
  |       to get the ± part.                                            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

# TOPIC 6 — Significant figures

Significant figures = the digits that are reliably known, plus one uncertain digit.

## Counting rules

```
  1.  All NON-ZERO digits count.                        234      -> 3 s.f.

  2.  Zeros BETWEEN non-zero digits count.              2004     -> 4 s.f.

  3.  LEADING zeros do NOT count.                       0.0025   -> 2 s.f.

  4.  TRAILING zeros count IF there is a decimal point. 2.500    -> 4 s.f.

  5.  Trailing zeros WITHOUT a decimal point are
      ambiguous. Use scientific notation.               2500     -> unclear
                                                        2.5x10^3 -> 2 s.f.

  6.  In  a x 10^b , only the digits of  a  count.      6.02x10^23 -> 3 s.f.

  7.  Exact / counted numbers have INFINITE s.f.        10 students
                                                        the 2 in  2 pi r
```

## Arithmetic rules

```
  +--------------------------+-------------------------------------------+
  |  ADDITION / SUBTRACTION  |  answer keeps the FEWEST DECIMAL PLACES   |
  +--------------------------+-------------------------------------------+

     436.32  +  227.2  +  0.301  =  663.821

     227.2 has only ONE decimal place,  so the answer is    663.8


  +--------------------------+-------------------------------------------+
  |  MULTIPLY / DIVIDE       |  answer keeps the FEWEST SIGNIFICANT FIGS |
  +--------------------------+-------------------------------------------+

     4.237  x  2.51  =  10.63487

     2.51 has only THREE significant figures, so the answer is    10.6
```

## Rounding off

```
  Digit to be dropped is MORE than 5   ->  round UP        1.68  ->  1.7
  Digit to be dropped is LESS than 5   ->  just drop it    1.62  ->  1.6
  Digit to be dropped is EXACTLY 5     ->  make the preceding digit EVEN

           1.65  ->  1.6        (6 is already even)
           1.75  ->  1.8        (7 becomes 8, which is even)
```

---

## Changing the unit NEVER changes the number of significant figures

This is the rule students find hardest to believe, so look at it once:

```
  2.308 cm   =   23.08 mm   =   0.02308 m   =   2.308 x 10^-2 m

  4 s.f.         4 s.f.         4 s.f.          4 s.f.
```

The zeros that appear or disappear are only there to place the decimal point.
They carry no information about how carefully you measured.

---

## WORKED EXAMPLE 6.1 — counting practice

```
  +-------------------+-------+-------------------------------------------+
  |  NUMBER           | S.F.  |  REASON                                   |
  +-------------------+-------+-------------------------------------------+
  |  0.007 m^2        |   1   |  leading zeros never count                |
  |  2.64 x 10^24 kg  |   3   |  only the digits of 2.64 count            |
  |  0.2370 g/cm^3    |   4   |  trailing zero AFTER the decimal counts   |
  |  6.320 J          |   4   |  same reason                              |
  |  6.032 N/m^2      |   4   |  the zero is sandwiched, so it counts     |
  |  0.0006032        |   4   |  three leading zeros out, sandwiched in   |
  |  2.308 cm         |   4   |  all four digits are meaningful           |
  |  5.0              |   2   |  the trailing zero after a decimal counts |
  |  0.030400         |   5   |  3, 0, 4, 0, 0                            |
  |  20.000           |   5   |  every trailing zero after a decimal      |
  |  500              |   ?   |  AMBIGUOUS - write 5 x 10^2 (1 s.f.)      |
  |                   |       |  or 5.00 x 10^2 (3 s.f.)                  |
  |  1.0 x 10^3       |   2   |  scientific notation removes the doubt    |
  +-------------------+-------+-------------------------------------------+
```

---

## WORKED EXAMPLE 6.2 — ADDITION

Add 436.32 g, 227.2 g and 0.301 g.

```
  STEP 1   Add them exactly:

              436.32
              227.2
                0.301
             ----------
              663.821

  STEP 2   Count DECIMAL PLACES (not significant figures):

              436.32   ->  2 decimal places
              227.2    ->  1 decimal place       <-- the FEWEST
                0.301  ->  3 decimal places

  STEP 3   Round the answer to ONE decimal place:

              ANSWER:   663.8 g
```

---

## WORKED EXAMPLE 6.3 — SUBTRACTION

Subtract 7.06 g from 12.9 g.

```
  STEP 1   12.9  -  7.06   =   5.84

  STEP 2   12.9  has 1 decimal place       <-- the FEWEST
           7.06  has 2 decimal places

  STEP 3   ANSWER:   5.8 g
```

> **TRAP:** subtraction follows the DECIMAL PLACE rule, exactly like addition.
> Do not use the significant figure rule here. 12.9 has 3 s.f. and 7.06 has
> 3 s.f., yet the answer has only 2 s.f. That is correct and normal.

---

## WORKED EXAMPLE 6.4 — SUBTRACTION that destroys accuracy

```
  2.5  -  1.32   =   1.18

  2.5 has ONE decimal place  ->  ANSWER = 1.2
```

And a more brutal one:

```
  9.87  -  9.8   =   0.07

  9.8 has ONE decimal place  ->  ANSWER = 0.1

  Two numbers known to 3 and 2 significant figures have produced an answer
  known to only ONE significant figure.
```

This is the significant-figure version of the warning in Worked Example 5.2:
**subtracting two close numbers throws information away.**

---

## WORKED EXAMPLE 6.5 — MULTIPLICATION and DIVISION

```
  (a)   4.237  x  2.51   =   10.63487

        4.237  ->  4 s.f.
        2.51   ->  3 s.f.      <-- the FEWEST

        ANSWER:   10.6


  (b)   The mass of a body is 5.74 g and its volume is 1.2 cm^3.
        Find its density.

                5.74
        rho = -------  =  4.7833...
                1.2

        5.74  ->  3 s.f.
        1.2   ->  2 s.f.       <-- the FEWEST

        ANSWER:   4.8 g/cm^3
```

> **DO NOT round in the middle.** Carry all the digits through the working
> and round ONLY the final answer. Rounding early is how a correct method
> ends up with a wrong last digit.

---

## WORKED EXAMPLE 6.6 — MIXED operations (the full board version)

The length, breadth and thickness of a rectangular metal sheet are
`4.234 m`, `1.005 m` and `2.01 cm`. Find the total surface area and the
volume to the correct number of significant figures.

```
  STEP 1   Put everything into the same unit.

              t  =  2.01 cm  =  0.0201 m

  STEP 2   Count the significant figures of each input.

              4.234   ->  4 s.f.
              1.005   ->  4 s.f.
              2.01    ->  3 s.f.      <-- the FEWEST, so answers get 3 s.f.

  STEP 3   Surface area  =  2 ( l b  +  b t  +  t l )

              l b  =  4.234  x  1.005    =   4.25517
              b t  =  1.005  x  0.0201   =   0.0202005
              t l  =  0.0201 x  4.234    =   0.0851034
                                             -----------
                                    sum  =   4.3604739

              area  =  2  x  4.3604739   =   8.7209478 m^2

              Round to 3 s.f.    ->    AREA  =  8.72 m^2

  STEP 4   Volume  =  l  x  b  x  t

                    =  4.25517  x  0.0201

                    =  0.085528917 m^3

              Round to 3 s.f.    ->    VOLUME  =  0.0855 m^3
```

> **TRAP:** `2.01 cm` looks small but it is the LEAST precise input — it has
> only 3 significant figures. It, not the 4-digit numbers, controls the answer.

---

## WORKED EXAMPLE 6.7 — a mix of ADDITION and SUBTRACTION rules

A box has mass `2.3 kg`. Two gold pieces of mass `20.15 g` and `20.17 g`
are put into it.

```
  (a)  TOTAL MASS OF THE BOX + GOLD

       2.3 kg  +  0.02015 kg  +  0.02017 kg   =   2.34032 kg

       2.3 has ONE decimal place, the fewest.

       ANSWER:   2.3 kg

       The gold literally does not show up. The box was never weighed
       accurately enough for it to matter.


  (b)  DIFFERENCE IN THE MASSES OF THE TWO PIECES

       20.17  -  20.15   =   0.02 g

       Both have TWO decimal places, so the answer keeps two.

       ANSWER:   0.02 g
```

> Both parts of this question are asked together almost every year somewhere
> in India. Part (a) tests addition, part (b) tests subtraction, and the whole
> point is that they follow the SAME decimal-place rule.

---

## WORKED EXAMPLE 6.8 — significant figures in a formula with pi

The radius of a sphere is measured as `1.2 cm`. Find its volume.

```
             4                4
   V   =   ----- pi r^3  =  ----- x 3.1416 x (1.2)^3
             3                3

       =   4.18879  x  1.728

       =   7.2382  cm^3

  The only MEASURED number is 1.2, which has 2 s.f.
  ( 4 , 3 and pi are exact, with infinite significant figures. )

  ANSWER:   V  =  7.2 cm^3
```

> **TRAP:** do not count the digits of pi. Constants are exact.
> Only your MEASUREMENTS limit the answer.

---

## WORKED EXAMPLE 6.9 — rounding practice

```
  +--------------+---------------+---------+--------------------------------+
  |  NUMBER      |  ROUND TO     | ANSWER  |  WHY                           |
  +--------------+---------------+---------+--------------------------------+
  |  2.745       |  3 s.f.       |  2.74   |  dropped digit is exactly 5,   |
  |              |               |         |  and 4 is already even         |
  |  2.735       |  3 s.f.       |  2.74   |  dropped digit is exactly 5,   |
  |              |               |         |  so 3 becomes the even 4       |
  |  3.14159     |  3 s.f.       |  3.14   |  next digit 1 < 5, just drop   |
  |  3.14159     |  4 s.f.       |  3.142  |  next digit 5 followed by 9,   |
  |              |               |         |  so it is more than 5: round up|
  |  12.6875     |  4 s.f.       |  12.69  |  next digit 7 > 5, round up    |
  |  0.0006032   |  3 s.f.       | 0.000603|  next digit 2 < 5, drop        |
  |  9.876       |  2 s.f.       |  9.9    |  next digit 7 > 5, round up    |
  |  4.5         |  1 s.f.       |  4      |  exactly 5, and 4 is even      |
  |  5.5         |  1 s.f.       |  6      |  exactly 5, so 5 becomes 6     |
  +--------------+---------------+---------+--------------------------------+
```

> **THE EVEN RULE ONLY APPLIES WHEN THE DROPPED PART IS EXACTLY 5** with
> nothing after it. `3.1415...` is more than 5 at that place because of the
> digits that follow, so it rounds up in the normal way.

---

## How significant figures and errors fit together

```
  A measurement written as   2.62 ± 0.11 s

  has an uncertainty in the SECOND decimal place, so writing
  2.6231847 s would be dishonest - those extra digits are noise.

  RULE OF THUMB:
     the last significant figure you quote should sit in the same
     decimal place as the first significant figure of the error.
```

---

# TOPIC 7 — Dimensions

The **dimensions** of a physical quantity are the powers of the base quantities
that make it up.

```
  SYMBOLS:   [M]  mass        [L]  length      [T]  time
             [A]  current     [K]  temperature
             [mol] amount     [cd] luminous intensity
```

```
  DIMENSIONAL FORMULA  =  the expression itself
                          example:  force  =  [ M L T^-2 ]

  DIMENSIONAL EQUATION =  the quantity written equal to its formula
                          example:  [F]  =  [ M L T^-2 ]
```

## How to find a dimensional formula

Write the defining formula, then replace each quantity by its dimensions.

```
                       Force              [ M L T^-2 ]
   Pressure   =    -----------    =    ------------------   =   [ M L^-1 T^-2 ]
                       Area                  [ L^2 ]
```

## Dimensionless quantities

```
  angle             strain            refractive index
  relative density  specific gravity  Poisson's ratio
  coefficient of friction             dielectric constant
  efficiency        all trigonometric ratios      all pure numbers
```

## Quantities with the SAME dimensions (favourite 2-mark question)

```
  +----------------------+--------------------------------------------------+
  |  [ M L^2 T^-2 ]      |  Work , Energy , Torque , Heat , Moment of force |
  |  [ M L^-1 T^-2 ]     |  Pressure , Stress , Young's modulus ,           |
  |                      |  Energy density                                  |
  |  [ M L T^-1 ]        |  Momentum , Impulse                              |
  |  [ T^-1 ]            |  Frequency , Angular velocity ,                  |
  |                      |  Velocity gradient , Decay constant              |
  |  [ M L^2 T^-1 ]      |  Planck's constant , Angular momentum            |
  |  [ M T^-2 ]          |  Surface tension , Force constant                |
  +----------------------+--------------------------------------------------+
```

---

## THE 4-STEP METHOD FOR ANY DIMENSIONAL FORMULA

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   STEP 1   Write the SIMPLEST equation the quantity appears in.     |
  |                                                                     |
  |   STEP 2   Rearrange it so the quantity you want is alone on        |
  |            the left.                                                |
  |                                                                     |
  |   STEP 3   Replace every symbol on the right by its dimensions.     |
  |                                                                     |
  |   STEP 4   Collect the powers of M , L , T ( and A , K if needed )  |
  |            and write the answer in SQUARE BRACKETS.                 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

You only ever need these five starting bricks:

```
  mass         [ M ]
  length       [ L ]
  time         [ T ]
  velocity     [ L T^-1 ]        =  length / time
  acceleration [ L T^-2 ]        =  velocity / time

  and from them:      FORCE  =  mass x acceleration  =  [ M L T^-2 ]
```

Everything in Physics is built on `[ M L T^-2 ]`. Learn that one cold.

---

## SIXTEEN DERIVATIONS, WORKED FROM THE DEFINING EQUATION

### MECHANICS

```
  1.  WORK  (and energy, and heat, and torque)

      W  =  Force x displacement

         =  [ M L T^-2 ]  x  [ L ]

         =  [ M L^2 T^-2 ]


  2.  POWER

              W          [ M L^2 T^-2 ]
      P  =  -----   =   ----------------   =   [ M L^2 T^-3 ]
              t              [ T ]


  3.  PRESSURE  (and stress, and Young's modulus, and energy density)

              F         [ M L T^-2 ]
      P  =  -----  =   --------------   =   [ M L^-1 T^-2 ]
              A            [ L^2 ]


  4.  MOMENTUM  (and impulse)

      p  =  m v   =   [ M ]  x  [ L T^-1 ]   =   [ M L T^-1 ]

      Impulse = F t = [ M L T^-2 ][ T ] = [ M L T^-1 ]     <-- the SAME.
      That is not a coincidence: impulse EQUALS change of momentum.


  5.  GRAVITATIONAL CONSTANT G

               G m1 m2                    F  r^2
      F  =  ------------      ->    G = ------------
                 r^2                      m1  m2

                  [ M L T^-2 ]  x  [ L^2 ]
           G  =  --------------------------   =   [ M^-1 L^3 T^-2 ]
                          [ M^2 ]


  6.  COEFFICIENT OF VISCOSITY  eta

                          dv                       F
      F  =  eta  x  A  x  ----     ->    eta = ------------
                          dx                    A (dv/dx)

                   [ M L T^-2 ]              [ M L T^-2 ]
      eta   =   -------------------   =   ------------------
                 [ L^2 ] [ T^-1 ]              [ L^2 T^-1 ]

            =   [ M L^-1 T^-1 ]

      (dv/dx is a velocity gradient: [L T^-1] / [L] = [T^-1])


  7.  SURFACE TENSION

              F        [ M L T^-2 ]
      S  =  -----  =  --------------   =   [ M T^-2 ]
              l           [ L ]

      Same as the SPRING CONSTANT k, since F = kx gives k = F/x.


  8.  MOMENT OF INERTIA and ANGULAR MOMENTUM

      I  =  m r^2  =  [ M ] [ L^2 ]  =  [ M L^2 ]

      L  =  I omega  =  [ M L^2 ] [ T^-1 ]  =  [ M L^2 T^-1 ]

      Same as PLANCK'S CONSTANT.
```

### HEAT

```
  9.  SPECIFIC HEAT CAPACITY

                                             Q
      Q  =  m s (delta T)     ->     s  =  ---------
                                            m delta T

                [ M L^2 T^-2 ]
      s   =   -------------------   =   [ L^2 T^-2 K^-1 ]
                 [ M ] [ K ]


  10. LATENT HEAT

                                 Q       [ M L^2 T^-2 ]
      Q  =  m L    ->     L  =  ---  =  ----------------  =  [ L^2 T^-2 ]
                                 m           [ M ]

      Same as GRAVITATIONAL POTENTIAL and as (velocity)^2.


  11. THERMAL CONDUCTIVITY K

                    A (delta T) t                  Q  x
      Q  =  K  x  ----------------    ->   K = --------------
                          x                     A (delta T) t

                [ M L^2 T^-2 ] [ L ]
      K   =   -------------------------   =   [ M L T^-3 K^-1 ]
                [ L^2 ] [ K ] [ T ]


  12. UNIVERSAL GAS CONSTANT R

                                        P V
      P V  =  n R T      ->      R  =  -------
                                        n T

                [ M L^-1 T^-2 ] [ L^3 ]
      R   =   ---------------------------   =  [ M L^2 T^-2 K^-1 mol^-1 ]
                    [ mol ] [ K ]


  13. STEFAN'S CONSTANT sigma

                                            power / area
      P / A  =  sigma T^4    ->   sigma  =  --------------
                                                 T^4

                  [ M L^2 T^-3 ] / [ L^2 ]        [ M T^-3 ]
      sigma  =  ----------------------------  =  ------------  =  [M T^-3 K^-4]
                          [ K^4 ]                   [ K^4 ]
```

### ELECTRICITY AND MAGNETISM

```
  14. POTENTIAL DIFFERENCE and RESISTANCE

      q  =  I t   =   [ A T ]

              W        [ M L^2 T^-2 ]
      V  =  -----  =  ----------------   =   [ M L^2 T^-3 A^-1 ]
              q            [ A T ]

              V        [ M L^2 T^-3 A^-1 ]
      R  =  -----  =  ---------------------  =   [ M L^2 T^-3 A^-2 ]
              I               [ A ]


  15. CAPACITANCE

              q             [ A T ]
      C  =  -----  =  ----------------------   =  [ M^-1 L^-2 T^4 A^2 ]
              V        [ M L^2 T^-3 A^-1 ]

      (subtract the powers: T^(1 - (-3)) = T^4 , A^(1 - (-1)) = A^2 )


  16. MAGNETIC FIELD B and MAGNETIC FLUX

                                          F
      F  =  q v B      ->        B  =  --------
                                        q  v

                    [ M L T^-2 ]              [ M L T^-2 ]
      B    =   ------------------------  =  ---------------  =  [ M T^-2 A^-1 ]
                [ A T ] [ L T^-1 ]              [ A L ]

      flux  =  B x A  =  [ M T^-2 A^-1 ] [ L^2 ]  =  [ M L^2 T^-2 A^-1 ]
```

---

## THE TWO CONSTANTS EVERYBODY GETS WRONG

```
  PERMITTIVITY  e0                    from   F  =  q1 q2 / (4 pi e0 r^2)

                q1 q2                    [ A T ] [ A T ]
     e0  =  -------------   =   -----------------------------------
              F  r^2              [ M L T^-2 ]  x  [ L^2 ]

                [ A^2 T^2 ]
         =   -----------------    =    [ M^-1 L^-3 T^4 A^2 ]
              [ M L^3 T^-2 ]


  PERMEABILITY  u0                    from   B  =  u0 I / (2 pi r)

              B  r          [ M T^-2 A^-1 ] [ L ]
     u0  =  --------  =   -------------------------   =  [ M L T^-2 A^-2 ]
                I                  [ A ]


  CHECK THEM AGAINST EACH OTHER:

     1 / (u0 e0)  must have the dimensions of  (speed)^2 = [ L^2 T^-2 ]

     u0 e0 = [M L T^-2 A^-2][M^-1 L^-3 T^4 A^2] = [ L^-2 T^2 ]

     so  1/(u0 e0) = [ L^2 T^-2 ]      CORRECT - it is c^2.
```

---

## MORE GROUPS WITH IDENTICAL DIMENSIONS

```
  +-----------------------+------------------------------------------------+
  |  [ L T^-2 ]           |  Acceleration , Gravitational field intensity   |
  |  [ L^2 T^-2 ]         |  Latent heat , Gravitational potential ,        |
  |                       |  (velocity)^2 , Specific energy                 |
  |  [ M L^2 T^-2 A^-1 ]  |  Magnetic flux , (inductance x current)         |
  |  [ M T^-3 ]           |  Solar constant , Intensity of radiation ,      |
  |                       |  Intensity of sound , Poynting vector           |
  |  [ L^-1 ]             |  Power of a lens , Wave number ,                |
  |                       |  Rydberg constant , Curvature                   |
  |  [ T^-1 ]             |  Frequency , Angular velocity , Angular         |
  |                       |  frequency , Velocity gradient , Decay          |
  |                       |  constant , Activity , Rate constant of a       |
  |                       |  first-order reaction                           |
  |  [ M^-1 L T^2 ]       |  Compressibility , 1 / bulk modulus             |
  |  [ M L^-2 T^-2 ]      |  Pressure gradient , Force per unit volume ,    |
  |                       |  (density x acceleration)                       |
  |  [ T ]                |  Time , Half-life , Time constant L/R ,         |
  |                       |  Time constant RC , sqrt(LC)                    |
  +-----------------------+------------------------------------------------+
```

---

## HOW TO SPOT A DIMENSIONLESS QUANTITY IN ONE SECOND

```
  IF the quantity is a RATIO of two things of the SAME kind, it is
  dimensionless. That is the whole test.

     strain             =  change in length / original length     -> [ L ]/[ L ]
     refractive index   =  speed in vacuum / speed in medium      -> speed/speed
     relative density   =  density of body / density of water     -> rho/rho
     coefficient of     =  friction force / normal force          -> force/force
       friction
     Poisson's ratio    =  lateral strain / longitudinal strain   -> ratio/ratio
     dielectric constant=  capacitance with / without the medium  -> C / C
     efficiency         =  useful output / total input            -> energy/energy
     angle              =  arc / radius                           -> [ L ]/[ L ]
     Reynolds number    =  inertial force / viscous force         -> force/force
     Mach number        =  speed of body / speed of sound         -> speed/speed
     magnification      =  image size / object size               -> [ L ]/[ L ]

  ALSO always dimensionless:
     anything sitting INSIDE  sin , cos , tan , e^x , log
     all pure numbers:  2 , 1/2 , pi , 6 pi , 4/3
```

---

## WORKED EXAMPLE 7.1 — a quantity you have never met

Find the dimensions of the "specific latent heat per unit temperature",
defined as `L / T`.

```
  L  ->  [ L^2 T^-2 ]           (from derivation 10)

  T  ->  [ K ]

  L / T   =   [ L^2 T^-2 K^-1 ]           - which is a specific heat capacity.
```

> **THE POINT:** you are never expected to *remember* an unfamiliar quantity.
> You are expected to break it into things you DO know and combine them.

---

# TOPIC 8 — Principle of homogeneity and its 3 uses

```
  +----------------------------------------------------------------------+
  |  PRINCIPLE OF HOMOGENEITY OF DIMENSIONS                              |
  |                                                                      |
  |  In a CORRECT physical equation, every term on both sides must have  |
  |  the SAME dimensions.                                                |
  |                                                                      |
  |  You cannot add a length to a time.                                  |
  +----------------------------------------------------------------------+
```

## USE 1 — Convert a unit from one system to another

```
                    +-        -+ a   +-        -+ b   +-        -+ c
                    |    M1    |     |    L1    |     |    T1    |
      n2   =   n1 x |  ------  |  x  |  ------  |  x  |  ------  |
                    |    M2    |     |    L2    |     |    T2    |
                    +-        -+     +-        -+     +-        -+

  where  [ M^a L^b T^c ]  is the dimensional formula of the quantity.
```

### Example — convert 1 newton into dyne

```
  Force has dimensions  [ M^1 L^1 T^-2 ]     so   a = 1 , b = 1 , c = -2

              +-      -+ 1     +-      -+ 1     +-     -+ -2
              |   kg   |       |    m   |       |   s   |
  n2  =  1 x  | ------ |   x   | ------ |   x   | ----- |
              |    g   |       |   cm   |       |   s   |
              +-      -+       +-      -+       +-     -+

      =  1  x  (1000)  x  (100)  x  1

      =  10^5

  Therefore    1 newton  =  10^5 dyne
```

### Example — convert 1 joule into erg

```
  Energy has dimensions  [ M^1 L^2 T^-2 ]     so   a = 1 , b = 2 , c = -2

              +-      -+ 1     +-      -+ 2     +-     -+ -2
              |   kg   |       |    m   |       |   s   |
  n2  =  1 x  | ------ |   x   | ------ |   x   | ----- |
              |    g   |       |   cm   |       |   s   |
              +-      -+       +-      -+       +-     -+

      =  1  x  (10^3)  x  (10^2)^2  x  1

      =  10^3  x  10^4

      =  10^7

  Therefore    1 joule  =  10^7 erg
```

### Example — the SAME conversion run BACKWARDS: 1 erg into joule

Now CGS is system 1 and SI is system 2, so every ratio flips.

```
              +-      -+ 1     +-      -+ 2
              |    g   |       |   cm   |
  n2  =  1 x  | ------ |   x   | ------ |   x  1
              |   kg   |       |    m   |
              +-      -+       +-      -+

      =  1  x  (10^-3)  x  (10^-2)^2

      =  10^-3  x  10^-4

      =  10^-7

  Therefore    1 erg  =  10^-7 joule           which agrees with  1 J = 10^7 erg
```

> **THE ONE THING TO GET RIGHT:** the ratio is always
> **(the OLD unit) divided by (the NEW unit)**.
> If you cannot remember it, do a sanity check with a unit you know:
> a kilogram is bigger than a gram, so the NUMBER must get bigger.

### Example — convert 1 pascal into dyne per cm^2

```
  Pressure  ->  [ M^1 L^-1 T^-2 ]     so   a = 1 , b = -1 , c = -2

  n2  =  1  x  (10^3)^1  x  (10^2)^-1  x  1

      =  10^3  x  10^-2

      =  10

  Therefore    1 Pa  =  10 dyne/cm^2

  CHECK the other way:  1 dyne/cm^2  =  10^-3 x (10^-2)^-1 = 10^-3 x 10^2 = 0.1 Pa
  and 1/10 = 0.1.   Consistent.
```

### Example — Young's modulus of steel from SI into CGS

`Y = 2 x 10^11 N/m^2`. Express it in dyne/cm^2.

```
  Same dimensions as pressure, so the factor is the same 10 :

  n2  =  2 x 10^11  x  10   =   2 x 10^12  dyne/cm^2
```

### Example — the gravitational constant into CGS

`G = 6.67 x 10^-11 N m^2 kg^-2` , and `[G] = [ M^-1 L^3 T^-2 ]`.

```
  a = -1 , b = 3 , c = -2

  n2  =  6.67 x 10^-11  x  (10^3)^-1  x  (10^2)^3  x  1

      =  6.67 x 10^-11  x  10^-3  x  10^6

      =  6.67 x 10^(-11 - 3 + 6)

      =  6.67 x 10^-8    CGS units  ( dyne cm^2 g^-2 )
```

### Example — density from CGS into SI, done with the formula

`13.6 g/cm^3` , and `[density] = [ M^1 L^-3 T^0 ]`.

```
  n2  =  13.6  x  (10^-3)^1  x  (10^-2)^-3  x  1

      =  13.6  x  10^-3  x  10^6

      =  13.6  x  10^3

      =  1.36 x 10^4  kg/m^3

  Same answer as Worked Example 1.2, obtained mechanically.
```

### Example — a brand-new system of units

In a new system the unit of mass is `100 g`, the unit of length is `10 cm`
and the unit of time is `1 minute`. What is the value of 1 joule in this system?

```
  Energy  ->  [ M^1 L^2 T^-2 ]

  M1 / M2  =  1 kg  / 100 g   =  1000 g / 100 g   =  10
  L1 / L2  =  1 m   / 10 cm   =  100 cm / 10 cm   =  10
  T1 / T2  =  1 s   / 60 s    =  1/60

  n2  =  1  x  (10)^1  x  (10)^2  x  (1/60)^-2

      =  1  x  10  x  100  x  3600

      =  3.6 x 10^6

  Therefore    1 joule  =  3.6 x 10^6  new units.
```

### Example — the same trick for force

New units: mass `10 kg`, length `10 m`, time `1 minute`. Express 1 newton.

```
  Force  ->  [ M^1 L^1 T^-2 ]

  n2  =  1  x  (1/10)^1  x  (1/10)^1  x  (1/60)^-2

      =  0.1  x  0.1  x  3600

      =  36

  Therefore    1 newton  =  36  new units.
```

### Two conversions worth simply memorising

```
  1 kilowatt-hour  =  1000 W  x  3600 s   =   3.6 x 10^6 J

  1 calorie        =  4.186 J

  so   1 cal/(g degC)   =   4.186 J / (10^-3 kg x 1 K)   =   4186 J/(kg K)
```

## USE 2 — Check whether an equation is correct

```
  Check:   v^2  =  u^2  +  2 a s

  LHS  =  [ L T^-1 ]^2                  =  [ L^2 T^-2 ]

  RHS  =  [ L T^-1 ]^2  +  [ L T^-2 ][ L ]
      =  [ L^2 T^-2 ]  +  [ L^2 T^-2 ]  =  [ L^2 T^-2 ]

  Both sides match  ->  DIMENSIONALLY CORRECT
```

---

## HOW TO SPOT WHICH OF SEVERAL EQUATIONS IS DIMENSIONALLY WRONG

This exact question shows up in the board paper *and* in EAPCET *and* in JEE.
It looks frightening because four equations are thrown at you at once. It is
not frightening at all, because there is a fixed 3-step drill.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   STEP 1   Write the dimensions of the LEFT-HAND SIDE. One line.    |
  |                                                                     |
  |   STEP 2   Write the dimensions of EVERY TERM on the right          |
  |            SEPARATELY. A term is a chunk between a + or a - sign.   |
  |                                                                     |
  |   STEP 3   The equation is WRONG the moment ONE term disagrees.     |
  |            Stop there and move on. Do not check the rest.           |
  |                                                                     |
  +---------------------------------------------------------------------+

  THREE INSTANT KILLS - use these before doing any algebra:

     (i)   anything inside sin , cos , tan , e^x or log must be
           DIMENSIONLESS. If it is not, the equation is dead.

     (ii)  two things being ADDED or SUBTRACTED must have the SAME
           dimensions. If they do not, the equation is dead.

     (iii) a quantity that is squared on one side and not on the other
           is almost always the error.
```

### WORKED EXAMPLE 8.1 — the kinematics set

Which of these is dimensionally incorrect?

```
  (a)  v  =  u  +  a t
  (b)  s  =  u t  +  (1/2) a t^2
  (c)  v^2 =  u^2  +  2 a s
  (d)  s  =  u t  +  (1/2) a t
```

```
  (a)   LHS  =  [ L T^-1 ]
        u    =  [ L T^-1 ]
        a t  =  [ L T^-2 ][ T ]  =  [ L T^-1 ]            all agree   CORRECT

  (b)   LHS  =  [ L ]
        u t  =  [ L T^-1 ][ T ]        =  [ L ]
        a t^2 = [ L T^-2 ][ T^2 ]      =  [ L ]           all agree   CORRECT

  (c)   LHS  =  [ L^2 T^-2 ]
        u^2  =  [ L^2 T^-2 ]
        2 a s = [ L T^-2 ][ L ]        =  [ L^2 T^-2 ]    all agree   CORRECT

  (d)   LHS  =  [ L ]
        u t  =  [ L ]                                     agrees
        a t  =  [ L T^-2 ][ T ]        =  [ L T^-1 ]      DOES NOT AGREE

        ANSWER:  (d) is the dimensionally incorrect one.
```

> Notice that in (d) you could stop the instant you saw `a t` being added to
> `u t`. You did not need to look at the left-hand side at all.

### WORKED EXAMPLE 8.2 — pendulum, upside down

```
  (a)  T  =  2 pi sqrt( l / g )
  (b)  T  =  2 pi sqrt( g / l )
```

```
  l / g  =  [ L ] / [ L T^-2 ]  =  [ T^2 ]     ->  sqrt  =  [ T ]     CORRECT

  g / l  =  [ L T^-2 ] / [ L ]  =  [ T^-2 ]    ->  sqrt  =  [ T^-1 ]  WRONG
                                                       (that is a FREQUENCY)
```

> **THE FASTEST CHECK IN THE WHOLE CHAPTER:** if the answer must be a TIME and
> you get `[T^-1]`, you have simply written the fraction upside down. Flip it.

### WORKED EXAMPLE 8.3 — something inside a sine

```
  (a)  y  =  A sin( omega t )
  (b)  y  =  A sin( v t )
  (c)  y  =  A sin( 2 pi ( t/T  -  x/lambda ) )
```

```
  (a)  omega t  =  [ T^-1 ][ T ]  =  dimensionless               CORRECT

  (b)  v t      =  [ L T^-1 ][ T ]  =  [ L ]  -  NOT dimensionless   WRONG

  (c)  t / T        =  [ T ]/[ T ]      =  dimensionless
       x / lambda   =  [ L ]/[ L ]      =  dimensionless
       and they are subtracted from each other, which is legal      CORRECT
```

### WORKED EXAMPLE 8.4 — gas pressure

```
  (a)  P  =  (1/3) rho c^2               (rho = density, c = molecular speed)
  (b)  P  =  (1/3) m c^2                 (m = mass)
```

```
  (a)  rho c^2  =  [ M L^-3 ][ L^2 T^-2 ]  =  [ M L^-1 T^-2 ]  = PRESSURE  ok

  (b)  m c^2    =  [ M ][ L^2 T^-2 ]       =  [ M L^2 T^-2 ]   = ENERGY    WRONG
```

### WORKED EXAMPLE 8.5 — a vibrating string

```
                1        +-      -+                     1       +-      -+
  (a)   n  =  ------ sqrt|  T / m |          (b)  n = ------ sqrt| m / T |
               2 l       +-      -+                    2 l      +-      -+

  T = tension [ M L T^-2 ]  ,  m = mass per unit length [ M L^-1 ]
```

```
  T / m  =  [ M L T^-2 ] / [ M L^-1 ]  =  [ L^2 T^-2 ]

  sqrt( T/m )  =  [ L T^-1 ]

  (1 / 2l) x [ L T^-1 ]  =  [ L^-1 ][ L T^-1 ]  =  [ T^-1 ]   = FREQUENCY   ok


  m / T  =  [ L^-2 T^2 ]      ->  sqrt = [ L^-1 T ]

  (1 / 2l) x [ L^-1 T ]  =  [ L^-2 T ]                                     WRONG
```

### WORKED EXAMPLE 8.6 — circular motion

```
  (a)  F  =  m v^2 / r            (b)  F  =  m v / r^2
```

```
  (a)   [ M ][ L^2 T^-2 ] / [ L ]   =   [ M L T^-2 ]   =  FORCE      CORRECT

  (b)   [ M ][ L T^-1 ] / [ L^2 ]   =   [ M L^-1 T^-1 ]              WRONG
                                        (that is a viscosity!)
```

### WORKED EXAMPLE 8.7 — a four-option EAPCET style question

Which of the following is dimensionally INCORRECT?

```
  (a)  Work  =  Force x displacement
  (b)  Power =  Force x velocity
  (c)  Energy =  Force / displacement
  (d)  Pressure = Force / area
```

```
  (a)  [ M L T^-2 ][ L ]           =  [ M L^2 T^-2 ]    = energy      ok
  (b)  [ M L T^-2 ][ L T^-1 ]      =  [ M L^2 T^-3 ]    = power       ok
  (c)  [ M L T^-2 ] / [ L ]        =  [ M T^-2 ]        NOT energy    WRONG
  (d)  [ M L T^-2 ] / [ L^2 ]      =  [ M L^-1 T^-2 ]   = pressure    ok

  ANSWER: (c)
```

> **EXAM TACTIC:** in a four-option question, three options are usually famous
> correct formulas you already recognise. Find the odd one first by eye, then
> spend your thirty seconds proving only that one.

---

## USE 3 — Derive a relation between quantities

### Example — time period of a simple pendulum

The period T may depend on the mass m, the length l, and gravity g.

```
  STEP 1   Assume       T  =  k  x  m^a  x  l^b  x  g^c

  STEP 2   Put in the dimensions:

           [ T ]  =  [M]^a  x  [L]^b  x  [ L T^-2 ]^c

           [ M^0 L^0 T^1 ]  =  [ M^a  L^(b+c)  T^(-2c) ]

  STEP 3   Compare the powers on each side:

           M :      a       =  0     ->   a = 0
           T :    -2c       =  1     ->   c = -1/2
           L :    b + c     =  0     ->   b = +1/2

  STEP 4   Write the result:

                             +-----+
                             |  l  |
           T  =  k  x  sqrt  | --- |
                             |  g  |
                             +-----+

  STEP 5   Experiment gives  k = 2 pi , so    T = 2 pi sqrt( l / g )

  NOTE:  T does NOT depend on the mass of the bob.
```

---

### Example 2 — derive the formula for CENTRIPETAL FORCE

The force F needed to keep a body moving in a circle may depend on the mass m,
the speed v and the radius r.

```
  STEP 1   Assume        F  =  k  x  m^a  x  v^b  x  r^c


  STEP 2   Put in the dimensions:

           [ M L T^-2 ]  =  [ M ]^a  x  [ L T^-1 ]^b  x  [ L ]^c

                         =  [ M^a   L^(b + c)   T^(-b) ]


  STEP 3   Compare the powers on each side:

           M  :     a        =   1     ->    a  =  1
           T  :    -b        =  -2     ->    b  =  2
           L  :   b + c      =   1     ->    2 + c = 1   ->   c = -1


  STEP 4   Write the result:

                        m  v^2
             F  =  k  ---------
                          r


  STEP 5   Experiment gives  k = 1 , so

                        m  v^2
             F  =    ---------
                          r
```

> Notice the method never changed. Only the letters did.

---

### Example 3 — derive the FREQUENCY OF A STRETCHED STRING

The frequency n of a vibrating string may depend on its length l, the tension T
in it, and its mass per unit length m.

```
  Dimensions of the ingredients:

        l  =  [ L ]
        T  =  [ M L T^-2 ]                (tension is a force)
        m  =  [ M L^-1 ]                  (mass per unit LENGTH)


  STEP 1   Assume       n  =  k  x  l^a  x  T^b  x  m^c


  STEP 2   Dimensions:

           [ T^-1 ]  =  [ L ]^a  x  [ M L T^-2 ]^b  x  [ M L^-1 ]^c

                     =  [ M^(b + c)   L^(a + b - c)   T^(-2b) ]


  STEP 3   Compare:

           T  :   -2b       =  -1        ->   b  =  1/2
           M  :   b + c     =   0        ->   c  =  -1/2
           L  :   a + b - c =   0        ->   a + 1/2 + 1/2 = 0   ->   a = -1


  STEP 4   Write it out:

                                                    +-       -+
                    1  1/2   -1/2         k         |    T    |
             n = k --- T    m       =    ---   sqrt |  -----  |
                    l                     l         |    m    |
                                                    +-       -+


  STEP 5   Experiment gives  k = 1/2 , so the standard result is

                       1        +-       -+
             n   =   -----  sqrt|   T / m |
                      2 l       +-       -+
```

---

### Example 4 — derive the VELOCITY OF SOUND in a medium

The speed v of sound may depend on the elasticity E of the medium and its
density rho.

```
  STEP 1   Assume       v  =  k  x  E^a  x  rho^b


  STEP 2   Dimensions   ( E is an elastic modulus, so E = [ M L^-1 T^-2 ] ):

           [ L T^-1 ]  =  [ M L^-1 T^-2 ]^a  x  [ M L^-3 ]^b

                       =  [ M^(a + b)   L^(-a - 3b)   T^(-2a) ]


  STEP 3   Compare:

           T  :   -2a         =  -1     ->   a  =   1/2
           M  :    a + b      =   0     ->   b  =  -1/2
           L  :   -a - 3b     =   1     ->   -1/2 + 3/2  =  1     CHECKS OUT


  STEP 4                     +-       -+
                             |    E    |
             v  =  k   sqrt  |  -----  |
                             |   rho   |
                             +-       -+


  STEP 5   Experiment gives  k = 1 , the Newton-Laplace formula.
```

> **STEP 3 IS WHERE THE MARKS ARE.** Always compare M, L and T on three
> separate lines, and always use the third one as a CHECK when the first two
> have already given you the answer.

---

### Example 5 — derive STOKES' LAW

The viscous force F on a small sphere may depend on the coefficient of
viscosity eta, the radius r and the velocity v.

```
  STEP 1   F  =  k  x  eta^a  x  r^b  x  v^c

  STEP 2   [ M L T^-2 ]  =  [ M L^-1 T^-1 ]^a  [ L ]^b  [ L T^-1 ]^c

                        =  [ M^a   L^(-a + b + c)   T^(-a - c) ]

  STEP 3   M  :    a               =   1      ->   a = 1
           T  :   -a - c           =  -2      ->   c = 1
           L  :   -a + b + c       =   1      ->   -1 + b + 1 = 1  ->  b = 1

  STEP 4   F  =  k  eta  r  v

  STEP 5   Experiment gives  k = 6 pi , so   F = 6 pi eta r v
```

---

### THE 5-STEP RECIPE, STRIPPED DOWN

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   1.  Q  =  k  A^a  B^b  C^c                                        |
  |                                                                     |
  |   2.  Replace every letter by its dimensional formula.              |
  |                                                                     |
  |   3.  Equate the powers of M, then L, then T.  THREE SEPARATE LINES.|
  |                                                                     |
  |   4.  Solve the three little equations for a, b, c.                 |
  |                                                                     |
  |   5.  Write the final relation AND say that k must come from        |
  |       experiment or theory - dimensional analysis cannot find it.   |
  |                                                                     |
  |   Sentence 5 is worth a mark on its own. Never leave it out.        |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

# TOPIC 9 — Limitations of dimensional analysis

**This is a guaranteed 4-mark question. Learn all six.**

```
  1.  It CANNOT give the dimensionless constant  (like 2 pi , or 1/2).

  2.  It FAILS when a quantity depends on MORE THAN THREE other quantities.

  3.  It CANNOT handle equations containing a SUM of terms.
      (s = ut + (1/2)at^2 can be CHECKED, but cannot be DERIVED.)

  4.  It CANNOT derive relations involving TRIGONOMETRIC, EXPONENTIAL or
      LOGARITHMIC functions.

  5.  It CANNOT tell whether a quantity is a SCALAR or a VECTOR.
      (Work and torque have identical dimensions but one is scalar,
      the other is a vector.)

  6.  A dimensionally correct equation may still be PHYSICALLY WRONG.
      (s = ut + at^2 is dimensionally fine but the 1/2 is missing.)
```

---

## EACH LIMITATION, SHOWN HAPPENING

Learning the six as a list gets you the 4 marks. Seeing them happen is what
stops you attempting an impossible question in the exam.

### Limitation 1 in action — the constant is invisible

```
  Dimensional analysis gave us   T  =  k sqrt( l / g ) .

  It gave us the SHAPE. It could never give us  k = 2 pi , because
  2 pi is a PURE NUMBER and pure numbers have no dimensions.

  A pure number is invisible to this method - it leaves no fingerprints
  on M , L or T .
```

### Limitation 2 in action — four unknowns, three equations

```
  Suppose we guessed that the viscous force depends on FOUR things:

        F  =  k  eta^a  r^b  v^c  rho^d

  Comparing M , L and T gives only THREE equations, but there are FOUR
  unknowns a , b , c , d . The system cannot be solved.

  THE RULE:  M , L and T give you exactly three equations, so you can
             never solve for more than three unknown powers.
```

### Limitation 3 in action — it cannot handle a sum

```
  Try to derive     s  =  u t  +  (1/2) a t^2     by assuming

        s  =  k  u^a  t^b  acc^c

  [ L ]  =  [ L T^-1 ]^a  [ T ]^b  [ L T^-2 ]^c

  L  :    a  +  c        =  1
  T  :   -a  +  b  - 2c  =  0

  TWO equations, THREE unknowns. There are infinitely many answers, so the
  method simply cannot produce this formula.

  WHY:  the real answer is a SUM of two different terms, and the assumed
        form  k u^a t^b acc^c  is a single PRODUCT. It was never going to fit.

  BUT NOTE:  you CAN still CHECK  s = ut + (1/2)at^2  dimensionally.
             Checking a sum is fine. DERIVING one is not.
```

### Limitation 4 in action — trigonometric, exponential and log functions

```
  x  =  A sin( omega t )              radioactive decay:   N  =  N0 e^(-lt)

  You cannot build a sine or an exponential out of powers of M , L and T.
  These forms come from calculus and from experiment, never from dimensions.
```

### Limitation 5 in action — scalar or vector?

```
  WORK    =  [ M L^2 T^-2 ]     a SCALAR
  TORQUE  =  [ M L^2 T^-2 ]     a VECTOR

  Identical dimensions, completely different physical objects. Dimensions
  cannot tell them apart.

  Same problem:   speed and velocity  ,  distance and displacement  ,
                  energy and torque   ,  pressure and stress.
```

### Limitation 6 in action — dimensionally right, physically wrong

```
  s  =  u t  +  a t^2

  u t    =  [ L T^-1 ][ T ]    =  [ L ]        agrees
  a t^2  =  [ L T^-2 ][ T^2 ]  =  [ L ]        agrees

  So the equation PASSES the dimensional test - and it is still WRONG,
  because the true coefficient is 1/2 , not 1 .

  MORAL:  dimensional correctness is a NECESSARY condition, not a
          SUFFICIENT one. Failing the test proves an equation is wrong.
          Passing it proves nothing.
```

---

## A SEVENTH POINT WORTH ADDING IF THE QUESTION SAYS "DISCUSS"

```
  7.  The method cannot work if the relation contains a constant that
      ITSELF has dimensions.

      You cannot derive   F = G m1 m2 / r^2   from scratch, because G has
      dimensions of its own [ M^-1 L^3 T^-2 ] that you would have to know
      in advance - and the only way to know them is to already have the
      formula.
```

---

## SO WHAT IS IT ACTUALLY GOOD FOR?

Finish a "limitations" answer with this, and you look like you understand the
subject rather than having memorised a list.

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   Dimensional analysis is a CHECKING and GUESSING tool, not a       |
  |   proving tool.                                                     |
  |                                                                     |
  |   USE IT TO :   convert units between systems                       |
  |                 reject a wrong formula in ten seconds               |
  |                 guess the shape of a relation you have forgotten    |
  |                 find the dimensions of an unfamiliar constant       |
  |                                                                     |
  |   DO NOT USE IT TO :   prove a formula                              |
  |                        find a numerical constant                    |
  |                        handle sums, sines or exponentials           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

## THE TEN MISTAKES THAT COST MARKS IN THIS CHAPTER

```
  +----+--------------------------------------+---------------------------+
  | #  |  MISTAKE                             |  FIX                      |
  +----+--------------------------------------+---------------------------+
  | 1  |  Using degrees in D = b / theta      |  ALWAYS convert to radian |
  | 2  |  1" taken as 1/60 of a degree        |  it is 1/3600 of a degree |
  | 3  |  Forgetting to halve in radar/sonar  |  the pulse goes and       |
  |    |                                      |  comes back               |
  | 4  |  Writing a negative absolute error   |  absolute errors are      |
  |    |                                      |  always positive          |
  | 5  |  Subtracting a relative error        |  every term is a PLUS     |
  |    |  because the term is on the bottom   |                           |
  | 6  |  Treating a square root as power 2   |  it is power 1/2          |
  | 7  |  Using the significant-figure rule   |  addition and subtraction |
  |    |  for an addition                     |  use DECIMAL PLACES       |
  | 8  |  Rounding in the middle of a         |  round only at the very   |
  |    |  calculation                         |  end                      |
  | 9  |  Writing dimensions without brackets |  write [ M L T^-2 ]       |
  | 10 |  Stopping at the percentage error    |  finish with  a  ±  da    |
  |    |  when the value was asked            |                           |
  +----+--------------------------------------+---------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I convert the parallax angle to RADIANS ?
  [ ]  Did I divide by 60 TWICE to turn arc-seconds into degrees ?
  [ ]  Did I halve the answer in a radar / sonar question ?
  [ ]  For + and - , did I use ABSOLUTE errors ?
  [ ]  For x and / , did I use RELATIVE errors ?
  [ ]  Did I multiply each relative error by its POWER ?
  [ ]  Did I treat every square root as a power of 1/2 ?
  [ ]  Did I keep every sign as a PLUS, even for things on the bottom ?
  [ ]  Did I convert the percentage back into a  ±  value if asked ?
  [ ]  Did I write the final result in the form  a  ±  da  ?
  [ ]  For addition, did I use the DECIMAL PLACE rule ?
  [ ]  For multiplication, did I use the SIGNIFICANT FIGURE rule ?
  [ ]  Did I avoid rounding until the very last step ?
  [ ]  Did I write dimensions inside SQUARE BRACKETS  [ M L T^-2 ] ?
  [ ]  In a "derive" question, did I compare M, L and T on SEPARATE lines ?
  [ ]  In a "derive" question, did I say that k comes from experiment ?
  [ ]  Did I remember that dimensional analysis cannot find constants ?
  [ ]  Did I check EVERY term of a sum separately when checking an equation ?
```
