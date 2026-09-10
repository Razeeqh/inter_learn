# Trigonometric Ratios upto Transformations — Concepts

**Maths 1A · Chapter 6**

Read this with a pen in your hand. Copy every box. Do not just read.
Nothing here needs anything from earlier chapters except basic algebra.

---

# TOPIC 1 — WHAT AN ANGLE IS, AND THE THREE WAYS TO MEASURE IT

## The idea

Stand a ray on a point and rotate it. The amount of turning is the **angle**.

```
                              B
                             /
                           /
                         /
                       /  ) theta
        O  -----------------------------  A

   OA is the INITIAL ray.  OB is the FINAL ray.
   theta is the angle turned.

   ANTICLOCKWISE turn  ->  POSITIVE angle
   CLOCKWISE turn      ->  NEGATIVE angle
```

There is no upper limit. You can turn 3 full circles: that is 1080 degrees.
This is the single thing that makes trigonometry bigger than triangles.

## The three units

```
  +---------------------------------------------------------------+
  |  SEXAGESIMAL (degree)                                         |
  |     1 right angle = 90 degrees                                |
  |     1 degree      = 60 minutes  ->  1 deg = 60'               |
  |     1 minute      = 60 seconds  ->  1'    = 60"               |
  |                                                               |
  |  CENTESIMAL (grade)                                           |
  |     1 right angle = 100 grades  ->  written 100^g             |
  |     1 grade       = 100 minutes ->  1^g = 100'                |
  |     1 minute      = 100 seconds                               |
  |     (WARNING: grade-minutes are NOT degree-minutes)           |
  |                                                               |
  |  CIRCULAR (radian)                                            |
  |     1 radian = the angle made at the centre by an arc         |
  |                whose length EQUALS the radius                 |
  |     1 right angle = pi/2 radians                              |
  +---------------------------------------------------------------+
```

Picture of one radian:

```
              arc length = r
            .-------.
          .           .
        .               .
       .                 .
      |         r         |
      |  O------------- P |     angle POQ = 1 radian
       .        \        .
        .        \  r   .
          .       Q   .
            .-------.
```

## The conversion — ONE formula does all three

```
  +--------------------------------------------------------+
  |                                                        |
  |        D          G          2 R                       |
  |      -----  =   -----  =   -------                     |
  |        90        100         pi                        |
  |                                                        |
  |   D = number of DEGREES                                |
  |   G = number of GRADES                                 |
  |   R = number of RADIANS                                |
  +--------------------------------------------------------+
```

Because all three are just "how many right angles", divided differently.

The two you actually use:

```
                              pi
  degrees -> radians :   x  ------
                             180

                             180
  radians -> degrees :   x  ------
                             pi

  1 radian  =  57 deg 17' 45"   (approximately, 57.2958 deg)
  1 degree  =  0.01746 radian
```

## WORKED EXAMPLE 1.1

**Convert 150 degrees into radians.**

```
  150 x  pi/180  =  150 pi / 180

  Cancel 30 from top and bottom:

     150 / 30 = 5        180 / 30 = 6

  ANSWER:   5 pi / 6  radians
```

## WORKED EXAMPLE 1.2

**Convert 5 pi / 12 radians into degrees.**

```
   5 pi        180        5 x 180
  ------  x   -----   =  ---------  =  5 x 15  =  75 degrees
    12         pi           12
```

## WORKED EXAMPLE 1.3

**Express 60 grades in degrees and in radians.**

```
   D      G                    90 x 60
  ---- = -----   ->   D  =  ------------  =  54 degrees
   90     100                   100

   Then  54 x pi/180  =  54 pi / 180  =  3 pi / 10 radians
```

## Arc length and area of a sector

```
  +----------------------------------------------------------+
  |                                                          |
  |     s = r theta            theta MUST be in RADIANS       |
  |                                                          |
  |              1                1                          |
  |     Area  =  - r^2 theta  =   - r s                      |
  |              2                2                          |
  |                                                          |
  +----------------------------------------------------------+

              _________
            /     |     \
           /      |r     \        s = arc PQ
          /   th  |       \
         P--------O--------Q      shaded piece = SECTOR
```

## WORKED EXAMPLE 1.4

**A circle of radius 7 cm. Find the length of the arc and the area of the
sector cut off by an angle of 72 degrees.**

```
  STEP 1  Convert to radians.
          72 x pi/180  =  2 pi / 5 radians

  STEP 2  Arc.
          s = r theta = 7 x (2 pi / 5) = 14 pi / 5 cm

          Using pi = 22/7 :   14 x 22 / (7 x 5)  =  308/35  =  8.8 cm

  STEP 3  Area.
          A = (1/2) r s = (1/2)(7)(8.8) = 30.8 cm^2

  ANSWER:  arc = 8.8 cm ,  area = 30.8 cm^2
```

> **TRAP:** `s = r theta` and the sector-area formula are **only true in radians**.
> Putting theta = 72 straight in is the single most common mark-losing mistake here.

---

# TOPIC 2 — THE SIX TRIGONOMETRIC RATIOS

## The idea

Take any right-angled triangle and pick one of the two acute angles, call it A.
The three sides now have names:

```
                     /|
                   /  |
                 /    |
     HYPOTENUSE/      | OPPOSITE  (the side facing A)
             /        |
           /          |
         / A          |
       +--------------+
          ADJACENT (the side touching A, not the hypotenuse)
```

The six ratios:

```
  +--------------------------------------------------------------+
  |                                                              |
  |   sin A   =  Opposite / Hypotenuse                           |
  |   cos A   =  Adjacent / Hypotenuse                           |
  |   tan A   =  Opposite / Adjacent                             |
  |                                                              |
  |   cosec A =  Hypotenuse / Opposite                           |
  |   sec A   =  Hypotenuse / Adjacent                           |
  |   cot A   =  Adjacent / Opposite                             |
  |                                                              |
  +--------------------------------------------------------------+
```

Memory phrase used all over India:

```
   S O H   -   C A H   -   T O A
   sin = Opp/Hyp   cos = Adj/Hyp   tan = Opp/Adj
```

## Reciprocal relations (three of them)

```
              1                     1                     1
  sin A = ---------      cos A = -------      tan A = -------
           cosec A                sec A                cot A

  i.e.  sin A x cosec A = 1
        cos A x sec A   = 1
        tan A x cot A   = 1
```

## Quotient relations (two of them)

```
            sin A                    cos A
  tan A =  -------          cot A =  -------
            cos A                    sin A
```

## WORKED EXAMPLE 2.1

**In a right triangle the sides are 3, 4 and 5 with the angle A opposite the
side 3. Write all six ratios.**

```
  Opposite = 3 , Adjacent = 4 , Hypotenuse = 5

  sin A = 3/5        cosec A = 5/3
  cos A = 4/5        sec A   = 5/4
  tan A = 3/4        cot A   = 4/3

  CHECK:  sin^2 + cos^2 = 9/25 + 16/25 = 25/25 = 1   correct
```

> **TRAP:** cosec is the reciprocal of **sin**, not of cos. Students swap these
> under exam pressure. Say it out loud: "co-SEC goes with SIN".

---

# TOPIC 3 — THE THREE PYTHAGOREAN IDENTITIES

These three lines earn more marks than anything else in the chapter.

```
  +--------------------------------------------------------------+
  |                                                              |
  |     1.    sin^2 A  +  cos^2 A   =  1                         |
  |                                                              |
  |     2.    1  +  tan^2 A         =  sec^2 A                   |
  |                                                              |
  |     3.    1  +  cot^2 A         =  cosec^2 A                 |
  |                                                              |
  +--------------------------------------------------------------+
```

## Where they come from

Take the right triangle with sides a (opposite), b (adjacent), c (hypotenuse).
Pythagoras says `a^2 + b^2 = c^2`.

```
  Divide the whole thing by c^2 :

      a^2/c^2 + b^2/c^2 = 1        ->   sin^2 A + cos^2 A = 1

  Divide the whole thing by b^2 :

      a^2/b^2 + 1 = c^2/b^2        ->   tan^2 A + 1 = sec^2 A

  Divide the whole thing by a^2 :

      1 + b^2/a^2 = c^2/a^2        ->   1 + cot^2 A = cosec^2 A
```

**So there is really only ONE identity, divided three ways.**

## The rearranged forms you will need constantly

```
  sin^2 A = 1 - cos^2 A            cos^2 A = 1 - sin^2 A

  sec^2 A - tan^2 A = 1            (sec A - tan A)(sec A + tan A) = 1

  cosec^2 A - cot^2 A = 1          (cosec A - cot A)(cosec A + cot A) = 1
```

Those bracket forms are gold. If a question gives you `sec A + tan A = 5`,
you instantly know `sec A - tan A = 1/5`.

## WORKED EXAMPLE 3.1

**If sec A + tan A = 5, find sin A.**

```
  STEP 1   sec^2 A - tan^2 A = 1
           (sec A + tan A)(sec A - tan A) = 1
           5 (sec A - tan A) = 1     ->   sec A - tan A = 1/5

  STEP 2   Add the two equations:
           2 sec A = 5 + 1/5 = 26/5      ->   sec A = 13/5

  STEP 3   Subtract them:
           2 tan A = 5 - 1/5 = 24/5      ->   tan A = 12/5

  STEP 4   sin A = tan A / sec A = (12/5) / (13/5) = 12/13

  ANSWER:  sin A = 12/13
  CHECK:   cos A = 1/sec A = 5/13 ,  and (12/13)^2 + (5/13)^2 = 169/169 = 1
```

## WORKED EXAMPLE 3.2

**Prove that  (1 - cos^2 A) cosec^2 A = 1.**

```
  LHS = (1 - cos^2 A) cosec^2 A
      = sin^2 A  x  cosec^2 A            [since 1 - cos^2 A = sin^2 A]
      = sin^2 A  x  1/sin^2 A
      = 1  =  RHS
```

> **TRAP:** `sin^2 A` means `(sin A)^2`. It does **not** mean `sin(A^2)`.

---

# TOPIC 4 — SIGNS, QUADRANTS, RANGES AND THE STANDARD ANGLES

## Quadrants

Draw the x and y axes. They cut the plane into four quadrants, numbered
anticlockwise starting from the top-right.

```
              y
              |
     II       |       I
   90 to 180  |   0 to 90
              |
  ------------+------------ x
              |
     III      |      IV
  180 to 270  |  270 to 360
              |
```

## The ASTC rule — which ratios are positive where

```
                        y
                        |
          II            |            I
     sin , cosec        |      ALL SIX positive
      positive          |
      (others -ve)      |
                        |
      S                 |       A
  ----------------------+----------------------  x
      T                 |       C
                        |
     tan , cot          |     cos , sec
      positive          |      positive
      (others -ve)      |     (others -ve)
          III           |           IV
                        |

   READ ANTICLOCKWISE FROM QUADRANT I:
       A - S - T - C   =   "All  Silver  Tea  Cups"
```

Same information as a table:

| Quadrant | sin | cos | tan | cot | sec | cosec |
|---|---|---|---|---|---|---|
| I (0-90) | + | + | + | + | + | + |
| II (90-180) | + | - | - | - | - | + |
| III (180-270) | - | - | + | + | - | - |
| IV (270-360) | - | + | - | - | + | - |

Notice: **a ratio and its reciprocal always have the same sign.**
So you only need to remember sin, cos, tan.

## Ranges — what values each ratio can take

```
  +--------------------------------------------------------------+
  |                                                              |
  |   -1  <=  sin A  <=  1          so  sin A = 3/2 is IMPOSSIBLE |
  |   -1  <=  cos A  <=  1                                       |
  |                                                              |
  |   tan A    :  any real number         (-inf , inf)           |
  |   cot A    :  any real number         (-inf , inf)           |
  |                                                              |
  |   sec A    :  sec A <= -1  OR  sec A >= 1                    |
  |   cosec A  :  cosec A <= -1  OR  cosec A >= 1                |
  |                                                              |
  |   sec and cosec can NEVER lie strictly between -1 and 1      |
  +--------------------------------------------------------------+
```

## The standard-angle table — LEARN THIS COLD

| Angle | 0 | 30 | 45 | 60 | 90 |
|---|---|---|---|---|---|
| **sin** | 0 | 1/2 | 1/sqrt2 | sqrt3/2 | 1 |
| **cos** | 1 | sqrt3/2 | 1/sqrt2 | 1/2 | 0 |
| **tan** | 0 | 1/sqrt3 | 1 | sqrt3 | not defined |
| **cot** | not defined | sqrt3 | 1 | 1/sqrt3 | 0 |
| **sec** | 1 | 2/sqrt3 | sqrt2 | 2 | not defined |
| **cosec** | not defined | 2 | sqrt2 | 2/sqrt3 | 1 |

## The 10-second trick to rebuild the table if you forget it

```
  Write  0  1  2  3  4        under the angles 0, 30, 45, 60, 90

  Divide each by 4  ->   0/4  1/4  2/4  3/4  4/4

  Take the square root ->  sqrt(0)/2  sqrt(1)/2  sqrt(2)/2  sqrt(3)/2  sqrt(4)/2

                        =    0        1/2       1/sqrt2     sqrt3/2     1

  THAT IS THE sin ROW.
  The cos ROW is the SAME LIST READ BACKWARDS.
  The tan ROW is sin divided by cos.
```

## WORKED EXAMPLE 4.1

**If cos A = -3/5 and A lies in the third quadrant, find sin A and tan A.**

```
  STEP 1   sin^2 A = 1 - cos^2 A = 1 - 9/25 = 16/25
           so  sin A = +4/5  or  -4/5

  STEP 2   A is in QUADRANT III.  By ASTC only tan and cot are positive there,
           so sin A must be NEGATIVE.

           sin A = -4/5

  STEP 3   tan A = sin A / cos A = (-4/5) / (-3/5) = 4/3    (positive, as expected)

  ANSWER:  sin A = -4/5 ,  tan A = 4/3
```

> **TRAP:** taking the square root always gives **two** answers. The quadrant
> tells you which one to keep. Skipping the quadrant check costs 1 of the 2 marks.

---

# TOPIC 5 — ALLIED ANGLES (the biggest 2-mark supplier)

## What "allied" means

Two angles are allied if their sum or difference is a multiple of 90 degrees.
So `A`, `90 - A`, `90 + A`, `180 - A`, `270 + A`, `360 - A`, `-A` are all allied to A.

## THE MASTER RULE — learn these two lines and you never memorise a table again

```
  +---------------------------------------------------------------+
  |                                                               |
  |  STEP 1:  Look at the multiple of 90 in the angle.            |
  |                                                               |
  |     ODD  multiple of 90   (90, 270)   ->  the ratio CHANGES   |
  |     EVEN multiple of 90   (180, 360)  ->  the ratio STAYS     |
  |                                                               |
  |     The change partners are:                                  |
  |         sin <-> cos      tan <-> cot      sec <-> cosec       |
  |                                                               |
  |  STEP 2:  Decide the SIGN.                                    |
  |                                                               |
  |     Pretend A is a small acute angle. Find which quadrant     |
  |     the whole angle lands in. Use ASTC on the ORIGINAL ratio. |
  |                                                               |
  +---------------------------------------------------------------+
```

## The full table (produced by the rule above)

| Angle | sin | cos | tan |
|---|---|---|---|
| **-A** | -sin A | cos A | -tan A |
| **90 - A** | cos A | sin A | cot A |
| **90 + A** | cos A | -sin A | -cot A |
| **180 - A** | sin A | -cos A | -tan A |
| **180 + A** | -sin A | -cos A | tan A |
| **270 - A** | -cos A | -sin A | cot A |
| **270 + A** | -cos A | sin A | -cot A |
| **360 - A** | -sin A | cos A | -tan A |
| **360 + A** | sin A | cos A | tan A |

(cot, sec and cosec follow automatically: they are the reciprocals.)

## Walk through one entry so the rule sticks

**Find cos(270 + A).**

```
  STEP 1   270 = 3 x 90 , and 3 is ODD  ->  the ratio CHANGES.
           cos becomes sin.

  STEP 2   Let A be small, say 10 degrees. Then 270 + 10 = 280 degrees,
           which is in QUADRANT IV.
           In quadrant IV, COS (the original ratio) is POSITIVE.

  RESULT   cos(270 + A) = + sin A
```

## WORKED EXAMPLE 5.1

**Find the value of sin 750 degrees.**

```
  STEP 1   Remove full circles:  750 - 720 = 30      (720 = 2 x 360)
  STEP 2   sin 750 = sin(720 + 30) = sin 30          [even multiple, stays,
                                                      quadrant I, positive]
  ANSWER:  1/2
```

## WORKED EXAMPLE 5.2

**Find cos 1290 degrees.**

```
  STEP 1   1290 - 1080 = 210          (1080 = 3 x 360)
  STEP 2   cos 1290 = cos 210
  STEP 3   210 = 180 + 30.  180 is an EVEN multiple of 90 -> cos stays cos.
           210 lies in QUADRANT III, where cos is NEGATIVE.
           cos 210 = - cos 30 = - sqrt3 / 2

  ANSWER:  - sqrt3 / 2
```

## WORKED EXAMPLE 5.3

**Find tan(-405 degrees).**

```
  tan(-405) = - tan 405            [tan is an odd function]
            = - tan(360 + 45)
            = - tan 45
            = - 1
```

## WORKED EXAMPLE 5.4

**Simplify  sin(90 + A) cos(180 - A) + cos(90 - A) sin(180 + A).**

```
  sin(90 + A)  =  cos A          (odd 90 -> change; Q1 for small A, +)
  cos(180 - A) = -cos A          (even 180 -> stays; Q2, cos is -)
  cos(90 - A)  =  sin A          (odd 90 -> change; Q1, +)
  sin(180 + A) = -sin A          (even 180 -> stays; Q3, sin is -)

  Expression = (cos A)(-cos A) + (sin A)(-sin A)
             = -cos^2 A - sin^2 A
             = -(cos^2 A + sin^2 A)
             = -1
```

> **TRAP:** students write `sin(90 + A) = sin A`. Wrong. 90 is an ODD multiple,
> so the name MUST change to cos. Half the 2-mark losses in this chapter are here.

---

# TOPIC 6 — PERIODICITY AND GRAPHS

## What "periodic" means

A function repeats itself after a fixed gap. That gap is the **period**.
Sound waves, AC current and the tides are all periodic — this is why the
subject exists.

```
  +--------------------------------------------------------------+
  |                                                              |
  |   sin x , cos x , sec x , cosec x  ->  period  =  2 pi       |
  |   tan x , cot x                    ->  period  =  pi         |
  |                                                              |
  |   For  sin(ax + b) :  period = 2 pi / |a|                    |
  |   For  tan(ax + b) :  period =   pi / |a|                    |
  |                                                              |
  |   |sin x| , |cos x| , sin^2 x , cos^2 x  ->  period = pi     |
  |                                                              |
  +--------------------------------------------------------------+
```

## Odd and even

```
  EVEN  (graph symmetric about the y-axis) :     cos(-x) =  cos x
                                                 sec(-x) =  sec x

  ODD   (graph symmetric about the origin) :     sin(-x) = -sin x
                                                 tan(-x) = -tan x
                                                 cot(-x) = -cot x
                                                cosec(-x)= -cosec x
```

**Only cos and sec are even. Everything else is odd.**

## GRAPH OF y = sin x

```
   y
   |
 1 +        ****                              ****
   |      **    **                          **    **
   |     *        *                        *        *
   |    *          *                      *          *
 0 +---*------------*--------------------*------------*------> x
   0   |  pi/2      |  pi         3pi/2  |    2pi
   |                 *                  *
   |                  *                *
   |                   **            **
-1 +                     ************

   Starts at 0, peaks +1 at pi/2, back to 0 at pi,
   bottoms -1 at 3pi/2, back to 0 at 2pi.  Then repeats forever.
```

## GRAPH OF y = cos x

```
   y
   |
 1 +***                                        ***
   |   **                                    **
   |     *                                  *
   |      *                                *
 0 +-------*----------------------------- *------------------> x
   0        | pi/2      pi       3pi/2   |    2pi
   |         *                          *
   |          *                        *
   |            **                  **
-1 +              **************

   Same shape as sine, just SHIFTED LEFT by pi/2.
   In fact  cos x = sin(x + pi/2).
```

## GRAPH OF y = tan x

```
        |            |            |
        |            |            |
        |   /        |   /        |   /
        |  /         |  /         |  /
        | /          | /          | /
  ------+/-----------+/-----------+/---------> x
       /|          / |          / |
      / |         /  |         /  |
     /  |        /   |        /   |
        |            |            |
    -pi/2         pi/2         3pi/2
    (asymptote)  (asymptote)  (asymptote)

   Goes from -infinity to +infinity in every gap of length pi.
   Blows up (undefined) at every odd multiple of pi/2.
```

## WORKED EXAMPLE 6.1

**Find the period of  sin(5x + 3).**

```
  Period = 2 pi / |a|  with a = 5    ->    2 pi / 5
```

## WORKED EXAMPLE 6.2

**Find the period of  cos^2 x.**

```
  cos^2 x = (1 + cos 2x) / 2

  The only x-dependent part is cos 2x, whose period is 2 pi / 2 = pi.

  ANSWER: pi
```

> **TRAP:** the period of `sin^2 x` is `pi`, NOT `2 pi`. Squaring folds the
> negative half onto the positive half and halves the period.

---

# TOPIC 7 — COMPOUND ANGLES (the seed of the whole chapter)

## The idea

`sin(A + B)` is **NOT** `sin A + sin B`. Test it:

```
  sin(30 + 60) = sin 90 = 1
  sin 30 + sin 60 = 0.5 + 0.866 = 1.366        NOT EQUAL
```

The correct expansions:

```
  +---------------------------------------------------------------+
  |                                                               |
  |   sin(A + B)  =  sin A cos B  +  cos A sin B                  |
  |   sin(A - B)  =  sin A cos B  -  cos A sin B                  |
  |                                                               |
  |   cos(A + B)  =  cos A cos B  -  sin A sin B                  |
  |   cos(A - B)  =  cos A cos B  +  sin A sin B                  |
  |                                                               |
  |                    tan A + tan B                              |
  |   tan(A + B)  =  -------------------                          |
  |                   1 - tan A tan B                             |
  |                                                               |
  |                    tan A - tan B                              |
  |   tan(A - B)  =  -------------------                          |
  |                   1 + tan A tan B                             |
  |                                                               |
  |                   cot A cot B - 1                             |
  |   cot(A + B)  =  -------------------                          |
  |                   cot B + cot A                               |
  |                                                               |
  |                   cot A cot B + 1                             |
  |   cot(A - B)  =  -------------------                          |
  |                   cot B - cot A                               |
  |                                                               |
  +---------------------------------------------------------------+
```

## How to never mix up the signs

```
  sin  :  the sign INSIDE and the sign in the MIDDLE are the SAME.
          sin(A + B) has a +          sin(A - B) has a -

  cos  :  the sign FLIPS.
          cos(A + B) has a -          cos(A - B) has a +

  tan  :  numerator keeps the sign, denominator FLIPS it.
```

Say it as: **"sin keeps, cos flips."**

## Two results that appear in Section B every year

```
  +---------------------------------------------------------------+
  |                                                               |
  |   sin(A + B) sin(A - B)  =  sin^2 A - sin^2 B                 |
  |                          =  cos^2 B - cos^2 A                 |
  |                                                               |
  |   cos(A + B) cos(A - B)  =  cos^2 A - sin^2 B                 |
  |                          =  cos^2 B - sin^2 A                 |
  |                                                               |
  +---------------------------------------------------------------+
```

Proof of the first (it is just "difference of two squares"):

```
  sin(A+B) sin(A-B)
     = (sinA cosB + cosA sinB)(sinA cosB - cosA sinB)
     = sin^2 A cos^2 B - cos^2 A sin^2 B
     = sin^2 A (1 - sin^2 B) - (1 - sin^2 A) sin^2 B
     = sin^2 A - sin^2 A sin^2 B - sin^2 B + sin^2 A sin^2 B
     = sin^2 A - sin^2 B
```

## Three angles

```
  tan(A + B + C)  =    S1 - S3
                     -----------      where
                       1 - S2

     S1 = tan A + tan B + tan C
     S2 = tan A tan B + tan B tan C + tan C tan A
     S3 = tan A tan B tan C
```

## WORKED EXAMPLE 7.1

**Find sin 75 degrees.**

```
  75 = 45 + 30

  sin 75 = sin 45 cos 30 + cos 45 sin 30

              1     sqrt3        1      1
         =  ----- x -----   +  ----- x ---
            sqrt2     2        sqrt2    2

            sqrt3 + 1
         = -----------
             2 sqrt2

  Rationalise (multiply top and bottom by sqrt2):

            sqrt6 + sqrt2
         = ---------------
                 4

  CHECK numerically:  (2.449 + 1.414)/4 = 3.863/4 = 0.966   and sin 75 = 0.966
```

## WORKED EXAMPLE 7.2

**Find tan 15 degrees.**

```
  15 = 45 - 30

              tan45 - tan30           1 - 1/sqrt3
  tan 15 =  -------------------  =  ----------------
             1 + tan45 tan30          1 + 1/sqrt3

  Multiply top and bottom by sqrt3:

              sqrt3 - 1
         =  -------------
              sqrt3 + 1

  Multiply top and bottom by (sqrt3 - 1):

             (sqrt3 - 1)^2        3 - 2 sqrt3 + 1        4 - 2 sqrt3
         =  ----------------  =  -----------------  =  -------------
                 3 - 1                  2                    2

         =  2 - sqrt3

  CHECK:  2 - 1.732 = 0.268 , and tan 15 = 0.2679   correct

  (Similarly  tan 75 = 2 + sqrt3 .)
```

## WORKED EXAMPLE 7.3

**If sin A = 3/5 and cos B = 12/13, where A and B are both acute,
find sin(A + B).**

```
  STEP 1   cos A = sqrt(1 - 9/25) = 4/5      (positive, A is acute)
           sin B = sqrt(1 - 144/169) = 5/13  (positive, B is acute)

  STEP 2   sin(A+B) = sinA cosB + cosA sinB
                    = (3/5)(12/13) + (4/5)(5/13)
                    = 36/65 + 20/65
                    = 56/65

  ANSWER:  56/65
```

> **TRAP:** you must find the missing ratios FIRST. Jumping straight into the
> formula with only sin A and cos B given is the classic zero-mark answer.

---

# TOPIC 8 — MULTIPLE ANGLES: 2A and 3A

Put `B = A` in the compound formulas. That is the entire derivation.

## Double angle

```
  +---------------------------------------------------------------+
  |                                                               |
  |   sin 2A  =  2 sin A cos A                                    |
  |                                                               |
  |   cos 2A  =  cos^2 A - sin^2 A          <- form 1             |
  |           =  2 cos^2 A - 1              <- form 2             |
  |           =  1 - 2 sin^2 A              <- form 3             |
  |                                                               |
  |                 1 - tan^2 A                                   |
  |           =  ----------------            <- form 4            |
  |                 1 + tan^2 A                                   |
  |                                                               |
  |                2 tan A                                        |
  |   sin 2A  =  -------------                                    |
  |               1 + tan^2 A                                     |
  |                                                               |
  |                2 tan A                                        |
  |   tan 2A  =  -------------                                    |
  |               1 - tan^2 A                                     |
  |                                                               |
  +---------------------------------------------------------------+
```

**Which form of cos 2A do you pick?** Look at what the question contains:

| The question contains | Use this form |
|---|---|
| only cos | cos 2A = 2 cos^2 A - 1 |
| only sin | cos 2A = 1 - 2 sin^2 A |
| both sin and cos | cos 2A = cos^2 A - sin^2 A |
| only tan | cos 2A = (1 - tan^2 A)/(1 + tan^2 A) |

## The two "power-reduction" forms (used everywhere later, including Integration)

```
             1 + cos 2A                    1 - cos 2A
  cos^2 A = ------------       sin^2 A =  ------------
                 2                             2
```

## Triple angle

```
  +---------------------------------------------------------------+
  |                                                               |
  |   sin 3A  =  3 sin A  -  4 sin^3 A                            |
  |                                                               |
  |   cos 3A  =  4 cos^3 A  -  3 cos A                            |
  |                                                               |
  |                3 tan A - tan^3 A                              |
  |   tan 3A  =  ---------------------                            |
  |                1 - 3 tan^2 A                                  |
  |                                                               |
  +---------------------------------------------------------------+

  MEMORY HOOK:   sin 3A starts with 3 (Sin - Three first)
                 cos 3A starts with 4 (Cos - fourth... 4 first)
                 sin has a MINUS in the middle, cos has a MINUS at the end
```

## Derivation of sin 3A (a real 4-mark question)

```
  sin 3A = sin(2A + A)
         = sin 2A cos A + cos 2A sin A
         = (2 sinA cosA) cosA + (1 - 2 sin^2 A) sinA
         = 2 sinA cos^2 A + sinA - 2 sin^3 A
         = 2 sinA (1 - sin^2 A) + sinA - 2 sin^3 A
         = 2 sinA - 2 sin^3 A + sinA - 2 sin^3 A
         = 3 sinA - 4 sin^3 A
```

## Half angle: everything above with A replaced by A/2

```
  sin A   =  2 sin(A/2) cos(A/2)

  cos A   =  cos^2(A/2) - sin^2(A/2)
          =  2 cos^2(A/2) - 1
          =  1 - 2 sin^2(A/2)

              2 tan(A/2)
  tan A   =  -------------
             1 - tan^2(A/2)

  1 + cos A = 2 cos^2(A/2)        1 - cos A = 2 sin^2(A/2)
```

Those last two are how you kill a square root inside a radical.

## The t = tan(A/2) substitution — memorise it as a block

```
  +---------------------------------------------------------------+
  |                                                               |
  |     Let  t = tan(A/2).   Then                                 |
  |                                                               |
  |                 2 t                    1 - t^2                |
  |     sin A  =  --------      cos A  =  ---------               |
  |                1 + t^2                 1 + t^2                |
  |                                                               |
  |                 2 t                                           |
  |     tan A  =  ---------                                       |
  |                1 - t^2                                        |
  |                                                               |
  |  USE IT WHEN: a question mixes sin A and cos A and you want   |
  |  ONE variable, or when it asks you to express things in       |
  |  terms of tan(A/2).                                           |
  +---------------------------------------------------------------+
```

## WORKED EXAMPLE 8.1

**If tan(A/2) = 1/3, find sin A and cos A.**

```
  t = 1/3   ->   t^2 = 1/9   ->   1 + t^2 = 10/9 ,  1 - t^2 = 8/9

              2(1/3)      2/3      2     9     3
  sin A  =  ---------  = ------  = - x  ---- = -
              10/9        10/9     3     10    5

              8/9         8
  cos A  =  ---------  =  --
              10/9        10   =  4/5

  ANSWER:  sin A = 3/5 ,  cos A = 4/5
  CHECK:   (3/5)^2 + (4/5)^2 = 1   correct
```

## WORKED EXAMPLE 8.2

**Prove that  (1 + cos A) / sin A = cot(A/2).**

```
  Numerator   :  1 + cos A = 2 cos^2(A/2)
  Denominator :  sin A     = 2 sin(A/2) cos(A/2)

     2 cos^2(A/2)              cos(A/2)
  = --------------------   =  -----------  = cot(A/2)
     2 sin(A/2) cos(A/2)       sin(A/2)
```

## WORKED EXAMPLE 8.3

**Find the value of  cos 20 . cos 40 . cos 80  (degrees).**

```
  Multiply and divide by 2 sin 20 :

        2 sin20 cos20 . cos40 . cos80        sin40 . cos40 . cos80
   =  --------------------------------  =  ------------------------
                 2 sin20                          2 sin20

  Multiply and divide by 2 again:

        2 sin40 cos40 . cos80        sin80 cos80        2 sin80 cos80
   =  ------------------------  =  --------------  =  ----------------
              4 sin20                 4 sin20              8 sin20

        sin160        sin(180 - 20)        sin20        1
   =  ----------  =  ---------------  =  ---------  =  ---
        8 sin20          8 sin20           8 sin20      8

  ANSWER: 1/8
```

```
  GENERAL RESULT (worth memorising):

                                                      sin(2^n A)
   cosA . cos2A . cos4A . ... . cos(2^(n-1) A)  =  ----------------
                                                     2^n  sin A
```

> **TRAP:** in `cos 2A = 2cos^2 A - 1`, the `2` multiplies `cos^2 A`, not the
> whole bracket. Writing `(2 cos A)^2 - 1` is wrong.

---

# TOPIC 9 — SUBMULTIPLE ANGLES: 18, 36, 54, 72 DEGREES

These four values are asked directly, and their derivation is a full
Section B or Section C question.

```
  +---------------------------------------------------------------+
  |                                                               |
  |                   sqrt5 - 1                sqrt(10 + 2 sqrt5) |
  |   sin 18  =  ----------------   cos 18 =  ------------------- |
  |                     4                              4          |
  |                                                               |
  |             sqrt(10 - 2 sqrt5)                sqrt5 + 1       |
  |   sin 36 = -------------------   cos 36 =  --------------     |
  |                     4                             4           |
  |                                                               |
  |                sqrt5 + 1                                      |
  |   sin 54  =  -------------  = cos 36                          |
  |                    4                                          |
  |                                                               |
  |               sqrt(10 - 2 sqrt5)                              |
  |   cos 54  =  ------------------- = sin 36                     |
  |                     4                                         |
  |                                                               |
  |               sqrt(10 + 2 sqrt5)                sqrt5 - 1     |
  |   sin 72  =  ------------------- ,  cos 72 =  ------------    |
  |                     4                              4          |
  |                                                               |
  +---------------------------------------------------------------+
```

Notice the pattern: `sin 18 = cos 72` and `sin 54 = cos 36`, because
they add to 90.

Tangents:

```
                sqrt(25 - 10 sqrt5)
  tan 18  =  ----------------------- = 0.3249
                        5

  tan 36  =  sqrt(5 - 2 sqrt5)   = 0.7265

                sqrt(25 + 10 sqrt5)
  tan 54  =  ----------------------- = 1.3764
                        5

  tan 72  =  sqrt(5 + 2 sqrt5)   = 3.0777
```

## THE DERIVATION OF sin 18 (learn this — it is a standing exam question)

```
  Let  A = 18 degrees.

  Then  5A = 90       ->     2A + 3A = 90
                      ->     2A = 90 - 3A

  Take sin of both sides:

        sin 2A = sin(90 - 3A) = cos 3A

        2 sinA cosA  =  4 cos^3 A - 3 cosA

  Divide both sides by cos A   (cos 18 is not zero, so this is legal):

        2 sinA  =  4 cos^2 A - 3
                =  4(1 - sin^2 A) - 3
                =  1 - 4 sin^2 A

  Rearrange into a quadratic in sinA :

        4 sin^2 A + 2 sinA - 1 = 0

  Quadratic formula with x = sinA :

               -2 +- sqrt(4 + 16)      -2 +- sqrt20      -1 +- sqrt5
        x  =  ---------------------  = --------------  = -------------
                       8                     8                 4

  sin 18 is POSITIVE (18 deg is in quadrant I), so take the + sign:

        +--------------------------+
        |                sqrt5 - 1 |
        |    sin 18  =  ----------- |
        |                    4      |
        +--------------------------+

  CHECK:  (2.2360 - 1)/4 = 1.2360/4 = 0.309 , and sin 18 deg = 0.309   correct
```

To get **cos 36** from it:

```
  cos 36 = 1 - 2 sin^2 18
         = 1 - 2 (sqrt5 - 1)^2 / 16
         = 1 - (6 - 2 sqrt5)/8
         = (8 - 6 + 2 sqrt5)/8
         = (2 + 2 sqrt5)/8
         = (sqrt5 + 1)/4

  CHECK:  (2.236 + 1)/4 = 0.809 , and cos 36 deg = 0.809   correct
```

## WORKED EXAMPLE 9.1

**Show that  cos 36 . cos 72 = 1/4.**

```
  cos36 x cos72 = [(sqrt5 + 1)/4] x [(sqrt5 - 1)/4]

                = (5 - 1) / 16

                = 4/16  =  1/4
```

## WORKED EXAMPLE 9.2

**Show that  sin 18 . cos 36 = 1/4.**

```
  sin18 x cos36 = [(sqrt5 - 1)/4] x [(sqrt5 + 1)/4] = 4/16 = 1/4
```

---

# TOPIC 10 — TRANSFORMATIONS (sum <-> product)

## Why this exists

You cannot add `sin 70 + sin 10`. But you CAN multiply two things and
cancel them. So we convert a sum into a product.

## SUM TO PRODUCT (the four you will use most)

```
  +---------------------------------------------------------------+
  |                                                               |
  |                            C + D          C - D               |
  |   sin C  +  sin D  =  2 sin -----  cos  -------               |
  |                              2              2                 |
  |                                                               |
  |                            C + D          C - D               |
  |   sin C  -  sin D  =  2 cos -----  sin  -------               |
  |                              2              2                 |
  |                                                               |
  |                            C + D          C - D               |
  |   cos C  +  cos D  =  2 cos -----  cos  -------               |
  |                              2              2                 |
  |                                                               |
  |                             C + D          C - D              |
  |   cos C  -  cos D  = -2 sin -----  sin  -------               |
  |                               2              2                |
  |                                                               |
  |                             C + D          D - C              |
  |                     =  2 sin -----  sin  -------              |
  |                               2              2                |
  |                                                               |
  +---------------------------------------------------------------+
```

**How to remember:** in every one of them, the half-sum `(C+D)/2` comes FIRST
and the half-difference `(C-D)/2` comes SECOND.

```
   sin + sin  ->  sin cos          "SIN COS"
   sin - sin  ->  cos sin          "COS SIN"   (swapped)
   cos + cos  ->  cos cos          "COS COS"
   cos - cos  ->  sin sin          "SIN SIN"   with a MINUS in front
```

**The minus sign in `cos C - cos D` is the most-forgotten sign in Maths IA.**

## PRODUCT TO SUM

```
  +---------------------------------------------------------------+
  |                                                               |
  |   2 sin A cos B  =  sin(A + B)  +  sin(A - B)                 |
  |                                                               |
  |   2 cos A sin B  =  sin(A + B)  -  sin(A - B)                 |
  |                                                               |
  |   2 cos A cos B  =  cos(A + B)  +  cos(A - B)                 |
  |                                                               |
  |   2 sin A sin B  =  cos(A - B)  -  cos(A + B)                 |
  |                                                               |
  +---------------------------------------------------------------+

  Watch the LAST one: the (A - B) comes FIRST and there is a swap of order.
  Everything else runs (A+B) then (A-B).
```

## WHEN TO USE WHICH — the decision that earns the marks

```
  +------------------------------------+-----------------------------+
  |  WHAT YOU SEE                      |  WHAT TO DO                 |
  +------------------------------------+-----------------------------+
  |  A SUM of two sines / cosines      |  SUM  ->  PRODUCT           |
  |  (so you can cancel a factor)      |                             |
  +------------------------------------+-----------------------------+
  |  A PRODUCT of two sines / cosines  |  PRODUCT  ->  SUM           |
  |  (so terms cancel in pairs)        |                             |
  +------------------------------------+-----------------------------+
  |  Three or more terms in a sum      |  Pair the two whose angles  |
  |                                    |  ADD to something nice, do  |
  |                                    |  those first, leave the     |
  |                                    |  third alone until the end. |
  +------------------------------------+-----------------------------+
  |  A + B + C = 180 in the question   |  ALWAYS sum -> product      |
  +------------------------------------+-----------------------------+
```

## WORKED EXAMPLE 10.1

**Prove that  (sin 70 + sin 10) / (cos 70 + cos 10) = tan 40.**

```
  Numerator:
     sin70 + sin10 = 2 sin((70+10)/2) cos((70-10)/2) = 2 sin40 cos30

  Denominator:
     cos70 + cos10 = 2 cos((70+10)/2) cos((70-10)/2) = 2 cos40 cos30

  Divide:
        2 sin40 cos30        sin40
     = ----------------  =  --------  =  tan 40
        2 cos40 cos30        cos40
```

Notice how the `2 cos30` cancelled. **That cancellation is the whole point of
converting to a product.**

## WORKED EXAMPLE 10.2

**Prove that  sin 20 . sin 40 . sin 60 . sin 80  =  3/16.**

```
  STEP 1   sin 60 = sqrt3 / 2 , keep it aside.

  STEP 2   Pair sin20 and sin80 using  2 sinA sinB = cos(A-B) - cos(A+B):

           2 sin20 sin80 = cos(60) - cos(100)
           so  sin20 sin80 = [cos60 - cos100] / 2

  STEP 3   Multiply by sin40 :

           sin20 sin40 sin80 = sin40 [cos60 - cos100] / 2
                             = [ sin40 cos60  -  sin40 cos100 ] / 2

           sin40 cos60 = (1/2) sin40

           2 sin40 cos100 = sin140 + sin(-60) = sin140 - sin60
           so sin40 cos100 = [sin140 - sin60]/2 ,  and sin140 = sin40

           => sin40 cos100 = [sin40 - sin60]/2

  STEP 4   Put it together:

           sin20 sin40 sin80 = (1/2) [ (1/2) sin40 - (sin40 - sin60)/2 ]
                             = (1/4) [ sin40 - sin40 + sin60 ]
                             = (1/4) sin60
                             = sqrt3 / 8

  STEP 5   Multiply by sin60 :

           sqrt3/8  x  sqrt3/2  =  3/16

  ANSWER:  3/16

  CHECK numerically:
     0.342 x 0.643 x 0.866 x 0.985 = 0.1875 = 3/16   correct
```

```
  THE SHORTCUT VERSION (memorise these three):

     sin A . sin(60 - A) . sin(60 + A)  =  (1/4) sin 3A
     cos A . cos(60 - A) . cos(60 + A)  =  (1/4) cos 3A
     tan A . tan(60 - A) . tan(60 + A)  =  tan 3A

  With A = 20 :  sin20 sin40 sin80 = (1/4) sin60 = sqrt3/8 , in ONE line.
```

> **TRAP:** when you use `cos C - cos D`, the answer starts with **minus 2**.
> Dropping that minus reverses your whole proof.

---

# TOPIC 11 — MAXIMUM AND MINIMUM OF a cos theta + b sin theta

## The result

```
  +---------------------------------------------------------------+
  |                                                               |
  |   For   y  =  a cos theta  +  b sin theta                     |
  |                                                               |
  |        MAXIMUM  =  + sqrt(a^2 + b^2)                          |
  |        MINIMUM  =  - sqrt(a^2 + b^2)                          |
  |                                                               |
  |   For   y  =  a cos theta  +  b sin theta  +  c               |
  |                                                               |
  |        MAXIMUM  =  c + sqrt(a^2 + b^2)                        |
  |        MINIMUM  =  c - sqrt(a^2 + b^2)                        |
  |                                                               |
  |   RANGE:   -sqrt(a^2+b^2) + c   <=  y  <=  sqrt(a^2+b^2) + c  |
  |                                                               |
  +---------------------------------------------------------------+
```

## Why it is true (one line of real understanding)

```
  Write   r = sqrt(a^2 + b^2)   and choose an angle alpha with
          cos alpha = a/r  and  sin alpha = b/r.

  Then    a cos th + b sin th = r [ cos alpha cos th + sin alpha sin th ]
                              = r cos(th - alpha)

  And cos of ANYTHING lies between -1 and +1.
  So the expression lies between -r and +r.  That is the whole proof.
```

## WORKED EXAMPLE 11.1

**Find the maximum and minimum of  3 cos x + 4 sin x.**

```
  a = 3 , b = 4    ->   sqrt(9 + 16) = sqrt25 = 5

  MAXIMUM = 5 ,  MINIMUM = -5
```

## WORKED EXAMPLE 11.2

**Find the range of  5 cos x + 3 sin(pi/6 - x) + 10.**

```
  STEP 1   Expand the middle term:
           sin(pi/6 - x) = sin(pi/6) cos x - cos(pi/6) sin x
                         = (1/2) cos x - (sqrt3/2) sin x

  STEP 2   3 sin(pi/6 - x) = (3/2) cos x - (3 sqrt3 / 2) sin x

  STEP 3   Whole expression
           = 5 cos x + (3/2) cos x - (3 sqrt3 / 2) sin x + 10
           = (13/2) cos x - (3 sqrt3 / 2) sin x + 10

  STEP 4   a = 13/2 , b = -3 sqrt3 / 2

           a^2 + b^2 = 169/4 + 27/4 = 196/4 = 49
           sqrt = 7

  STEP 5   RANGE:   10 - 7  to  10 + 7    =    [ 3 , 17 ]
```

> **TRAP:** the constant `c` is NOT inside the square root. Only the
> coefficients of cos and sin go under the root.

## The other max/min facts examiners like

```
  max of  sin^2 x = 1 ,  min = 0
  max of  a sin^2 x + b cos^2 x  =  larger of a and b
  min of  a sin^2 x + b cos^2 x  =  smaller of a and b
  min of  sec^2 x + cosec^2 x = 4          (at x = 45 deg)
  min of  tan^2 x + cot^2 x   = 2
```

---

# TOPIC 12 — CONDITIONAL IDENTITIES (A + B + C = 180) — THE 7-MARK QUESTION

## The one idea

If `A + B + C = 180 degrees`, then `A + B = 180 - C`.
Every proof starts by using that.

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Given  A + B + C = 180 deg :                                |
  |                                                               |
  |     sin(A + B)  =  sin(180 - C)  =  + sin C                   |
  |     cos(A + B)  =  cos(180 - C)  =  - cos C                   |
  |     tan(A + B)  =  tan(180 - C)  =  - tan C                   |
  |                                                               |
  |   And for HALF angles,  (A + B)/2 = 90 - C/2 , so:            |
  |                                                               |
  |     sin( (A+B)/2 )  =  cos(C/2)                               |
  |     cos( (A+B)/2 )  =  sin(C/2)                               |
  |     tan( (A+B)/2 )  =  cot(C/2)                               |
  |                                                               |
  |   THESE SIX LINES ARE THE ENTIRE 7-MARK QUESTION.             |
  +---------------------------------------------------------------+
```

## THE UNIVERSAL METHOD (works on every one of these)

```
  STEP 1   Take the first TWO terms only.
  STEP 2   Convert that sum into a PRODUCT (transformation formula).
  STEP 3   Rewrite (A+B) or (A+B)/2 in terms of C using the box above.
  STEP 4   Handle the THIRD term with a double-angle or half-angle formula
           so that it carries the SAME factor (sin C or cos(C/2)).
  STEP 5   Take the common factor out.
  STEP 6   Inside the bracket you will get cos(A-B) - cos(A+B) or similar.
           Convert THAT back to a product.
  STEP 7   Collect. Done.
```

## FULL MODEL ANSWER — the most-asked one of all

**If A + B + C = 180 degrees, prove that
sin 2A + sin 2B + sin 2C = 4 sin A sin B sin C.**

```
  LHS = sin2A + sin2B + sin2C

  STEP 1  Take the first two terms and use  sinC + sinD = 2 sin((C+D)/2) cos((C-D)/2)
          with C = 2A and D = 2B :

          sin2A + sin2B = 2 sin( (2A+2B)/2 ) cos( (2A-2B)/2 )
                        = 2 sin(A + B) cos(A - B)

  STEP 2  A + B = 180 - C , so sin(A+B) = sin C :

                        = 2 sin C cos(A - B)

  STEP 3  Now the third term:

          sin 2C = 2 sin C cos C

          and  cos C = cos(180 - (A+B)) = - cos(A + B)

          so   sin 2C = - 2 sin C cos(A + B)

  STEP 4  Add:

          LHS = 2 sinC cos(A-B)  -  2 sinC cos(A+B)
              = 2 sinC [ cos(A - B) - cos(A + B) ]

  STEP 5  Use  cos C - cos D = 2 sin((C+D)/2) sin((D-C)/2)
          with C = A - B and D = A + B :

          cos(A-B) - cos(A+B) = 2 sin(A) sin(B)

          (Quick check by expanding:
             cos(A-B) = cosA cosB + sinA sinB
             cos(A+B) = cosA cosB - sinA sinB
             difference = 2 sinA sinB          confirmed.)

  STEP 6  LHS = 2 sinC x 2 sinA sinB  =  4 sinA sinB sinC  =  RHS

  PROVED.

  NUMERICAL CHECK with A = B = C = 60:
     LHS = 3 sin120 = 3(0.866) = 2.598
     RHS = 4 (0.866)^3 = 4(0.6495) = 2.598      correct
```

## FULL MODEL ANSWER 2

**If A + B + C = 180, prove that
cos A + cos B + cos C = 1 + 4 sin(A/2) sin(B/2) sin(C/2).**

```
  STEP 1  cosA + cosB = 2 cos((A+B)/2) cos((A-B)/2)

  STEP 2  (A+B)/2 = 90 - C/2 , so cos((A+B)/2) = sin(C/2) :

          cosA + cosB = 2 sin(C/2) cos((A-B)/2)

  STEP 3  Third term as a half angle:

          cos C = 1 - 2 sin^2(C/2)

  STEP 4  LHS = 2 sin(C/2) cos((A-B)/2) + 1 - 2 sin^2(C/2)
              = 1 + 2 sin(C/2) [ cos((A-B)/2) - sin(C/2) ]

  STEP 5  Replace sin(C/2) inside the bracket by cos((A+B)/2) :

              = 1 + 2 sin(C/2) [ cos((A-B)/2) - cos((A+B)/2) ]

  STEP 6  cos((A-B)/2) - cos((A+B)/2) = 2 sin(A/2) sin(B/2)

  STEP 7  LHS = 1 + 2 sin(C/2) x 2 sin(A/2) sin(B/2)
              = 1 + 4 sin(A/2) sin(B/2) sin(C/2)  = RHS

  PROVED.

  NUMERICAL CHECK with A = B = C = 60:
     LHS = 3 x 0.5 = 1.5
     RHS = 1 + 4 (sin30)^3 = 1 + 4(0.125) = 1.5     correct
```

## FULL MODEL ANSWER 3 (the tan one — a different technique)

**If A + B + C = 180, prove that  tan A + tan B + tan C = tan A tan B tan C.**

```
  STEP 1   A + B = 180 - C

  STEP 2   Take tan of both sides:

           tan(A + B) = tan(180 - C) = - tan C

  STEP 3   Expand the left side:

              tan A + tan B
            -----------------  =  - tan C
             1 - tanA tanB

  STEP 4   Cross-multiply:

            tanA + tanB  =  - tanC (1 - tanA tanB)
                         =  - tanC + tanA tanB tanC

  STEP 5   Move -tanC across:

            tanA + tanB + tanC  =  tanA tanB tanC

  PROVED.
```

**Same trick with cot:** take cot of both sides of `A + B = 180 - C` to get
`cot A cot B + cot B cot C + cot C cot A = 1`.

## The six standard results — learn the RIGHT-HAND SIDES

| If A + B + C = 180, then | equals |
|---|---|
| sin 2A + sin 2B + sin 2C | 4 sin A sin B sin C |
| cos 2A + cos 2B + cos 2C | -1 - 4 cos A cos B cos C |
| sin A + sin B + sin C | 4 cos(A/2) cos(B/2) cos(C/2) |
| cos A + cos B + cos C | 1 + 4 sin(A/2) sin(B/2) sin(C/2) |
| tan A + tan B + tan C | tan A tan B tan C |
| cot A cot B + cot B cot C + cot C cot A | 1 |

> **TRAP:** the `-1` in the cos 2A result. Students write `-4 cosA cosB cosC`
> and lose 2 of the 7 marks. Check it: at A=B=C=60 the left side is
> `3 cos120 = -1.5`, and `-1 - 4(1/2)^3 = -1 - 0.5 = -1.5`. The `-1` is real.

---

# TOPIC 13 — ELIMINATING theta

## What the question means

You are given two equations, both containing theta. You must produce ONE
equation with **no theta in it at all**.

## The universal method

```
  STEP 1   Make each equation give you a single trig ratio on one side.
  STEP 2   Use whichever Pythagorean identity connects those two ratios:
               sin and cos     ->  sin^2 + cos^2 = 1
               tan and sec     ->  sec^2 - tan^2 = 1
               cot and cosec   ->  cosec^2 - cot^2 = 1
  STEP 3   Substitute and simplify.
```

## WORKED EXAMPLE 13.1

**Eliminate theta from  x = a cos th + b sin th ,  y = a sin th - b cos th.**

```
  x^2 = a^2 cos^2 th + 2ab cos th sin th + b^2 sin^2 th
  y^2 = a^2 sin^2 th - 2ab sin th cos th + b^2 cos^2 th

  ADD (the middle terms cancel):

  x^2 + y^2 = a^2 (cos^2 + sin^2) + b^2 (sin^2 + cos^2)
            = a^2 + b^2

  ANSWER:   x^2 + y^2 = a^2 + b^2
```

## WORKED EXAMPLE 13.2

**If  tan th + sin th = m  and  tan th - sin th = n , show that
m^2 - n^2 = 4 sqrt(mn).**

```
  m^2 - n^2 = (m+n)(m-n) = (2 tan th)(2 sin th) = 4 tan th sin th

  mn = tan^2 th - sin^2 th
     = sin^2/cos^2 - sin^2
     = sin^2 (1 - cos^2) / cos^2
     = sin^2 . sin^2 / cos^2
     = tan^2 th . sin^2 th

  So  sqrt(mn) = tan th sin th

  Therefore  m^2 - n^2 = 4 sqrt(mn)          PROVED
```

## WORKED EXAMPLE 13.3

**Eliminate theta from  x = a sec th ,  y = b tan th.**

```
  sec th = x/a          tan th = y/b

  sec^2 - tan^2 = 1

       x^2      y^2
      -----  -  -----  =  1
       a^2      b^2

  (You will meet this again as the hyperbola in Maths IIB.)
```

---

# TOPIC 14 — THE OTHER STANDARD BOARD PROBLEMS

## Type A — "Find the value of this expression"

**Prove that  cos^2 A + cos^2 (A + 120) + cos^2 (A - 120) = 3/2.**

```
  Use  cos^2 X = (1 + cos 2X)/2  on all three terms:

  LHS = (1/2)[ 3 + cos2A + cos(2A + 240) + cos(2A - 240) ]

  Now  cos(2A + 240) + cos(2A - 240)
         = 2 cos(2A) cos(240)                [sum -> product]
         = 2 cos2A x (-1/2)
         = - cos 2A

  So   LHS = (1/2)[ 3 + cos2A - cos2A ] = 3/2      PROVED
```

## Type B — "Prove this identity" using the sum of a chain

**Prove that  sin A + sin 3A + sin 5A + sin 7A = 4 cos A cos 2A sin 4A.**

```
  Pair the OUTER two and the INNER two (their half-sums are equal - that is
  why we pair this way):

  sinA + sin7A = 2 sin4A cos3A
  sin3A + sin5A = 2 sin4A cosA

  LHS = 2 sin4A (cos3A + cosA)
      = 2 sin4A x 2 cos2A cosA
      = 4 cosA cos2A sin4A          PROVED
```

## Type C — "Find the value" with a hidden allied angle

**Find  tan 9 - tan 27 - tan 63 + tan 81  (degrees).**

```
  Group as (tan9 + tan81) - (tan27 + tan63)

  tan81 = tan(90 - 9) = cot 9
  tan63 = tan(90 - 27) = cot 27

  tan9 + cot9 = sin9/cos9 + cos9/sin9 = 1/(sin9 cos9) = 2/sin18
  tan27 + cot27 = 2/sin54

  Value = 2/sin18 - 2/sin54
        = 2 x 4/(sqrt5 - 1)  -  2 x 4/(sqrt5 + 1)
        = 8 [ 1/(sqrt5-1) - 1/(sqrt5+1) ]
        = 8 [ (sqrt5+1 - sqrt5+1) / (5 - 1) ]
        = 8 [ 2/4 ]
        = 4

  ANSWER: 4
```

## Type D — "Prove a sec/cosec identity"

**Prove that  cot A + tan A = 2 cosec 2A.**

```
  cotA + tanA = cosA/sinA + sinA/cosA

                cos^2 A + sin^2 A          1
              = ------------------  =  -----------
                   sinA cosA            sinA cosA

  Multiply top and bottom by 2:

                    2                2
              =  ----------  =  ---------  =  2 cosec 2A
                 2 sinA cosA      sin 2A
```

**And the partner:  cot A - tan A = 2 cot 2A.**

```
                cos^2 A - sin^2 A        cos 2A          2 cos2A
  cotA - tanA = ------------------  =  -----------  =  ----------- = 2 cot 2A
                    sinA cosA           sinA cosA         sin 2A
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ] Did I convert every angle to RADIANS before using s = r theta?
  [ ] Did I use the QUADRANT to fix the sign after taking a square root?
  [ ] For an allied angle: odd multiple of 90 -> did I CHANGE the ratio?
  [ ] Did I take the sign from the quadrant, treating A as acute?
  [ ] Did I write sin(A+B) = sinA cosB + cosA sinB, not sinA + sinB?
  [ ] In cos(A+B), did I use the MINUS sign in the middle?
  [ ] Did I pick the right form of cos 2A for what the question contains?
  [ ] In cos C - cos D, did I keep the leading MINUS 2?
  [ ] In every transformation, is the half-SUM first and half-DIFFERENCE second?
  [ ] For A + B + C = 180, did I write down sin(A+B) = sinC and
      cos((A+B)/2) = sin(C/2) at the very start? (That is a mark on its own.)
  [ ] In cos2A + cos2B + cos2C, did I keep the leading "-1"?
  [ ] Is the constant c OUTSIDE the sqrt in the max/min formula?
  [ ] Did I write "PROVED" or "Hence proved" at the end of every proof?
  [ ] Did I substitute A = B = C = 60 to sanity-check my conditional identity?
  [ ] Did I answer exactly 10 in Section A, 5 in Section B, 5 in Section C?
```

---

## THE FIVE-LINE SUMMARY OF THE WHOLE CHAPTER

```
  1.  sin^2 + cos^2 = 1 rewrites anything into anything.
  2.  cos(A - B) = cosA cosB + sinA sinB grows every other formula.
  3.  Odd multiple of 90 changes the ratio; the quadrant gives the sign.
  4.  Sum on the page -> make it a product. Product on the page -> make it a sum.
  5.  A + B + C = 180  means  sin(A+B) = sinC  and  cos((A+B)/2) = sin(C/2).
      That single line is worth 7 marks every single year.
```
