# Ray Optics and Optical Instruments — Concepts Explained Simply

Read this slowly. Every topic has a picture, then the rule, then a worked example.
If a diagram looks confusing, copy it onto paper with a pencil and ruler. Drawing
it once teaches you more than reading it ten times.

Light is treated here as **rays** — straight arrows showing which way the light
goes. That is all "ray optics" means.

---

# TOPIC 1 — Reflection of light and the laws of reflection

When light falls on a polished surface it **bounces back**. That is reflection.

```
  Three words you must know:

    INCIDENT RAY   -  the ray going IN
    REFLECTED RAY  -  the ray coming BACK
    NORMAL         -  an imaginary line drawn PERPENDICULAR (90 degrees)
                      to the surface, at the point where the ray hits
```

```
   REFLECTION AT A PLANE MIRROR

                          N  (normal)
                          |
        incident ray      |      reflected ray
                  \       |       /
                   \      |      /
                    \  i  |  r  /
                     \    |    /
                      \   |   /
                       \  |  /
     //////////////////////O//////////////////////   MIRROR SURFACE
     ////////////////////////////////////////////

               i  =  angle of INCIDENCE
               r  =  angle of REFLECTION
               O  =  point of incidence
```

## The two laws of reflection

```
  LAW 1   The angle of incidence  =  the angle of reflection.
                            i  =  r

  LAW 2   The incident ray, the reflected ray and the normal at the point of
          incidence ALL LIE IN THE SAME PLANE.
```

> **TRAP:** angles in optics are ALWAYS measured from the **normal**, never
> from the surface. If a question says "a ray strikes a mirror at 30 degrees
> to the *surface*", the angle of incidence is **90 - 30 = 60 degrees**.
> This trick appears in EAPCET almost every year.

## Two useful extra facts

```
  1.  If the mirror is rotated by an angle  theta  (the incident ray fixed),
      the reflected ray turns through  2 x theta.

  2.  A ray falling NORMALLY (i = 0) on a mirror comes straight back
      along the same path.
```

### WORKED EXAMPLE 1.1
A ray of light strikes a plane mirror making an angle of 25 degrees with the
mirror surface. Find the angle between the incident and reflected rays.

```
  Angle with SURFACE      =  25 deg
  Angle of INCIDENCE  i   =  90 - 25  =  65 deg
  Angle of REFLECTION r   =  65 deg              (law 1)

  Angle between incident and reflected rays
                          =  i + r  =  65 + 65  =  130 degrees
```

---

# TOPIC 2 — Image in a plane mirror

```
   PLANE MIRROR — IMAGE FORMATION

          B                    |                    B'
          ^\                   |                   /^
          | \  \               |               /  / |
          |  \    \            |            /    /  |
          |   \      \         |         /      /   |
          |    \        \      |      /        /    |
     -----A-----\----------\---|---/----------/-----A'------
               eye  <---     \ | /       (image is as far
                              \|/         BEHIND as the
                               O          object is in FRONT)
                               |
                            MIRROR

        Solid lines  =  real rays
        Dotted-looking lines behind the mirror = the rays only APPEAR
        to come from B'.  Nothing is really there  ->  VIRTUAL image.
```

## Properties of the image in a plane mirror

```
  +--------------------------------------------------------------+
  |  1.  VIRTUAL (cannot be caught on a screen)                  |
  |  2.  ERECT (upright)                                         |
  |  3.  SAME SIZE as the object     ->  magnification m = +1     |
  |  4.  As far BEHIND the mirror as the object is IN FRONT       |
  |  5.  LATERALLY INVERTED (left becomes right)                 |
  +--------------------------------------------------------------+
```

## Number of images formed by two inclined mirrors

Two mirrors placed at an angle **a** (in degrees) make many images.

```
   TWO INCLINED MIRRORS

              \  MIRROR 2
               \
                \
                 \
                  \   * object
                   \
                    \  a
                     \-----------------------------  MIRROR 1
                      V
                   (vertex)
```

```
  +==============================================================+
  |                                    360                        |
  |   STEP 1     compute      N   =  --------                     |
  |                                     a                         |
  |                                                               |
  |   STEP 2     if N is an EVEN integer      ->  n = N - 1        |
  |              if N is an ODD  integer      ->  n = N - 1  when  |
  |                     the object is ON the bisector             |
  |                                           ->  n = N     when   |
  |                     the object is OFF the bisector            |
  |              if N is NOT an integer       ->  n = integer      |
  |                                               part of N       |
  +==============================================================+
```

### WORKED EXAMPLE 2.1
Two plane mirrors are inclined at 60 degrees. How many images of a point object
placed between them are formed?

```
        360
  N  =  ----  =  6        (an EVEN integer)
         60

  n  =  N - 1  =  5 images
```

### WORKED EXAMPLE 2.2
Find the number of images when the mirrors are at 45 degrees.

```
        360
  N  =  ----  =  8        (EVEN)          n = 8 - 1 = 7 images
         45
```

> **TRAP:** For **parallel** mirrors, a = 0, so N = 360/0 = infinity.
> The number of images is **infinite**. Say that in words, do not try to
> divide by zero on paper.

---

# TOPIC 3 — Spherical mirrors: the words you must know

A **spherical mirror** is a piece cut from a hollow glass sphere, silvered on
one side.

```
  CONCAVE MIRROR                      CONVEX MIRROR
  (silvered on the OUTSIDE,           (silvered on the INSIDE,
   reflects from the hollow            reflects from the bulging
   inner side — it CAVES in)           outer side)

            )                                (
            )                                (
   ---C-----)---   light                 ---(-----C---   light
            )      comes                     (            comes
            )      from left                 (            from left
            )                                (

     C and F are IN FRONT               C and F are BEHIND
     of the mirror                      the mirror
     -> CONVERGING mirror               -> DIVERGING mirror
```

```
  THE FIVE TERMS

                                             )
                                            )
                                           )
        ------ C ---------- F ------------ )  P
                                           )
                                          )
                                         )

  POLE  P             the CENTRE of the mirror surface (the vertex)
  CENTRE OF           the centre of the sphere the mirror was cut from
  CURVATURE  C
  RADIUS OF           R = PC , the radius of that sphere
  CURVATURE  R
  PRINCIPAL AXIS      the straight line joining P and C
  PRINCIPAL FOCUS F   the point where rays parallel to the principal axis
                      meet (concave) or appear to come from (convex)
  FOCAL LENGTH  f     f = PF
  APERTURE            the diameter of the reflecting surface
```

## The relation f = R / 2 (with derivation)

```
   DERIVATION DIAGRAM

                                                       )
        parallel ray                                  ) M
     -----------------------------------------------_)
                                       theta   __--  )
                                          __--       )
     -----------C---------------F----__---------------)  P
                            __-- theta               )
                     __--                            )
                                                    )

     CM is the NORMAL at M (a radius is always perpendicular to
     the sphere at M).
```

```
  STEP 1   The ray MC is a radius, so it is the normal at M.
           Angle of incidence  =  angle CMF... no, the angle the
           parallel ray makes with MC.  Call it theta.

  STEP 2   The parallel ray and the principal axis CP are parallel,
           and MC is a transversal.
           Therefore    angle MCP  =  theta       (alternate angles)

  STEP 3   By the law of reflection, angle of reflection = theta.
           So in triangle MCF,   angle FMC  =  angle FCM  =  theta.
           A triangle with two equal angles is ISOSCELES:

                            FM  =  FC

  STEP 4   For PARAXIAL rays (rays very close to the principal axis and
           nearly parallel to it), M lies very near P, so

                            FM  ~=  FP

  STEP 5   Therefore          FP  =  FC
           F is the MIDPOINT of C and P.

                            PC        R
                     PF  =  ----  =  ---
                             2         2

                     +--------------------+
                     |        R           |
                     |   f = ---          |
                     |        2           |
                     +--------------------+
```

> **TRAP:** f = R/2 is only true for **paraxial rays** (small aperture).
> Examiners award a mark for writing that condition. Always mention it.

---

# TOPIC 4 — THE CARTESIAN SIGN CONVENTION

This is the single most important half page in the whole chapter. Every wrong
answer in mirrors and lenses comes from getting this wrong.

```
  +======================================================================+
  |                                                                      |
  |                        + heights                                     |
  |                             ^                                        |
  |                             |                                        |
  |     LIGHT TRAVELS           |                                        |
  |     THIS WAY  ========>     |                                        |
  |                             |                                        |
  |   -------------------------[P]------------------------------->       |
  |                             |                                        |
  |     distances measured      |     distances measured                 |
  |     to the LEFT of P        |     to the RIGHT of P                  |
  |     are  NEGATIVE  (-)      |     are  POSITIVE  (+)                 |
  |                             |                                        |
  |                             v                                        |
  |                        - heights                                     |
  |                                                                      |
  +======================================================================+
```

```
  THE FOUR RULES

  1.  All distances are measured from the POLE P of the mirror
      (or from the OPTICAL CENTRE of a lens).

  2.  Draw the object on the LEFT. Light always travels from LEFT to RIGHT.

  3.  Distance measured in the SAME direction as the incoming light  ->  +
      Distance measured OPPOSITE to the incoming light               ->  -

  4.  Height measured UPWARD from the principal axis   ->  +
      Height measured DOWNWARD from the principal axis ->  -
```

## What this means in practice — MEMORISE THIS TABLE

```
  +---------------------------+----------------------------------------+
  |  QUANTITY                 |  SIGN                                  |
  +---------------------------+----------------------------------------+
  |  Object distance  u       |  ALWAYS NEGATIVE (object is on left)   |
  |  Object height    h       |  positive (object drawn upright)       |
  |  f of a CONCAVE mirror    |  NEGATIVE                              |
  |  f of a CONVEX  mirror    |  POSITIVE                              |
  |  f of a CONVEX  lens      |  POSITIVE                              |
  |  f of a CONCAVE lens      |  NEGATIVE                              |
  |  v of a REAL image        |  MIRROR: negative   LENS: positive     |
  |  v of a VIRTUAL image     |  MIRROR: positive   LENS: negative     |
  |  h' of an INVERTED image  |  NEGATIVE                              |
  |  h' of an ERECT image     |  POSITIVE                              |
  +---------------------------+----------------------------------------+
```

> **TRAP — THE BIGGEST ONE IN THE CHAPTER:** students write u = +30 cm.
> **u is never positive** in a board problem. Write u = -30 cm.
> Half of all lost numerical marks in this chapter come from this one slip.

> **TRAP 2:** for a **mirror**, a real image forms in FRONT of the mirror
> (to the left), so **v is negative**. For a **lens**, a real image forms
> BEHIND the lens (to the right), so **v is positive**. The two devices
> are opposite. Write this on your palm.

---

# TOPIC 5 — Ray diagrams for spherical mirrors

## The four rules for drawing rays

```
  RULE 1   A ray PARALLEL to the principal axis, after reflection,
           passes through F (concave) or appears to come from F (convex).

  RULE 2   A ray passing through F (or heading towards F), after
           reflection, becomes PARALLEL to the principal axis.

  RULE 3   A ray passing through C (or heading towards C) hits the mirror
           NORMALLY and comes straight BACK along the same path.

  RULE 4   A ray striking the POLE P reflects making an equal angle
           on the other side of the principal axis.

  You only ever need TWO of these four rays. The image is where they meet.
```

## CONCAVE MIRROR — object beyond C

```
      B------------------------------------------------------)
      |\                                                  __/ )
      | \                                              __/    )
      |  \                                          __/       )
      |   \                                      __/          )
  ----A----\--------+-----------+--------------__/-------------) P----
      |     \       C           F           __/               )
      |      \                           __/                  )
      |       \                       __/                     )
      |        \                   __/                        )
      |         \               __/                           )
                 \           __/
                  \       __/
                   \   __/          Rays used:
                    \_/               (1) parallel ray  ->  through F
                  A' *  B'             (2) ray through C ->  back on itself
                (image, small,
                 inverted, real)

  IMAGE:  between C and F , REAL , INVERTED , DIMINISHED
```

## CONCAVE MIRROR — object at C

```
      B                                                      )
      |  ----____                                            )
      |          ----____                                    )
      |                  ----____                            )
  ----A--------+-------------+-----------____----------------) P----
      |        C             F               ----____        )
      |        |                                     ----____)
      |     B' *                                             )
      |   (image at C)                                       )

  IMAGE:  at C , REAL , INVERTED , SAME SIZE as the object
```

## CONCAVE MIRROR — object between F and P (the only virtual case)

```
                              B                              )
                              |\                             )
                              | \                            )
  ----------------------------A--\---------------------------) P----
              C        F           \                         )
                                     \                       )
        (the reflected rays DIVERGE. Extended backwards they meet   )
         BEHIND the mirror at a large upright image)               )

                                                        B'
                                                        |
                                                        |   the image is
                                                        |   BEHIND the mirror
                                                        A'

  IMAGE:  behind the mirror , VIRTUAL , ERECT , MAGNIFIED
          (this is the shaving mirror / dentist's mirror)
```

## CONCAVE MIRROR — the complete summary table

```
  +----------------------+------------------+----------+---------+-----------+
  |  OBJECT POSITION     |  IMAGE POSITION  |  NATURE  |  ERECT? |   SIZE    |
  +----------------------+------------------+----------+---------+-----------+
  |  At infinity         |  At F            |  Real    | Inverted| Point     |
  |  Beyond C            |  Between F and C |  Real    | Inverted| Diminished|
  |  At C                |  At C            |  Real    | Inverted| Same size |
  |  Between C and F     |  Beyond C        |  Real    | Inverted| Magnified |
  |  At F                |  At infinity     |  Real    | Inverted| Very large|
  |  Between F and P     |  Behind mirror   |  VIRTUAL |  ERECT  | Magnified |
  +----------------------+------------------+----------+---------+-----------+

  MEMORY TRICK:  object and image "swap places" —
                 as the object moves TOWARDS the mirror,
                 the image moves AWAY from it.
                 Only the last row (inside F) is virtual and erect.
```

## CONVEX MIRROR — always the same picture

```
                                                    (
      B                                            (
      |  ----____                                 (
      |          ----____                        (
  ----A------------------- ----____--------------( P---------+-------+---
      |                             ----____     (            F       C
      |                            B'*      ----(
      |                            |            (
      |                            A'            (
      |                     (small, erect,        (
      |                      virtual image         (
      |                      between P and F)

  IMAGE for EVERY object position:
        between P and F , VIRTUAL , ERECT , DIMINISHED
```

```
  +----------------------+------------------+----------+---------+-----------+
  |  OBJECT POSITION     |  IMAGE POSITION  |  NATURE  |  ERECT? |   SIZE    |
  +----------------------+------------------+----------+---------+-----------+
  |  At infinity         |  At F (behind)   |  Virtual |  Erect  | Point     |
  |  Anywhere in front   |  Between P and F |  Virtual |  Erect  | Diminished|
  +----------------------+------------------+----------+---------+-----------+
```

**Why convex mirrors are used as rear-view mirrors in vehicles:** the image is
always erect and diminished, so a **wide field of view** is obtained.

**Why concave mirrors are used by dentists and in headlights:** they can give
a magnified erect image (object inside F), and a source placed at F gives a
parallel beam.

---

# TOPIC 6 — The mirror formula and magnification (with derivation)

```
  +======================================================================+
  |                                                                      |
  |     MIRROR FORMULA                    MAGNIFICATION                  |
  |                                                                      |
  |       1     1     1                        h'      -v                |
  |      --- + --- = ---                 m  =  ---  =  ----              |
  |       v     u     f                         h        u               |
  |                                                                      |
  +======================================================================+
```

## Derivation of the mirror formula

```
   DERIVATION DIAGRAM  (concave mirror, object beyond C)

      B                                                     M )
      |  ----____                                            )
      |          ----____                                    )
  ----A-------+-------+---------____-----------------------) P----
              C       F             ----____               )
              |       |                     ----____       )
           A' +----+ B'                             ----__)
                    (image)

     PA  = object distance      PA' = image distance
     PF  = focal length         PC  = radius of curvature
```

```
  STEP 1   Triangle A'B'P and triangle ABP are SIMILAR
           (the ray BP reflects to B'P with equal angles at P).

                    A'B'        PA'
                   ------  =   -----                        ... (i)
                     AB         PA

  STEP 2   Triangle A'B'F and triangle MPF are SIMILAR.
           For paraxial rays M is very close to P, so MP = AB.

                    A'B'        FA'
                   ------  =   -----                        ... (ii)
                     MP         FP

  STEP 3   Since MP = AB, compare (i) and (ii):

                    PA'        FA'         PA'  -  PF
                   -----  =   -----   =   ------------
                    PA         FP              PF

  STEP 4   Now apply the SIGN CONVENTION.
           All of A, A', F lie to the LEFT of P, so all are negative:

                    PA = -u        PA' = -v        PF = -f

                    -v        -v - (-f)         -v + f
                   ----  =   ------------  =   --------
                    -u           -f               -f

  STEP 5   Simplify:

                     v         v - f
                    ---   =   -------
                     u           f

                    v f   =   u v  -  u f

           Divide every term by  u v f :

                     1          1         1
                    ---   =   ----  -  -----
                     u          f         v

                    +--------------------------+
                    |    1       1       1     |
                    |   ---  +  ---  =  ---    |
                    |    v       u       f     |
                    +--------------------------+
```

## Derivation of the magnification formula

```
  From STEP 1 above:

           A'B'        PA'
          ------  =   -----
            AB         PA

  Apply the sign convention:
           A'B' = h'  (image is below the axis, so h' is negative)
           AB   = h
           PA'  = -v          PA = -u

              h'       -v            +-------------------------+
             ----  =  ----           |         h'       -v     |
              h        -u   ...      |    m = ----  =  ----    |
                                     |         h         u     |
              h'      -v             +-------------------------+
             ----  = ----
              h        u

  In terms of f:
                 f              f - v
          m  =  ------   =     -------
                 f - u            f
```

```
  READING THE ANSWER

  +-------------------+--------------------------------------------+
  |  m is NEGATIVE    |  image is INVERTED  ->  it is REAL         |
  |  m is POSITIVE    |  image is ERECT     ->  it is VIRTUAL      |
  |  | m | > 1        |  magnified                                 |
  |  | m | < 1        |  diminished                                |
  |  | m | = 1        |  same size                                 |
  +-------------------+--------------------------------------------+
```

### WORKED EXAMPLE 6.1
An object 4 cm tall is placed 30 cm in front of a concave mirror of focal
length 20 cm. Find the position, nature and size of the image.

```
  DATA (with signs):     u = -30 cm       f = -20 cm       h = +4 cm

  MIRROR FORMULA
        1     1     1
       --- + --- = ---
        v     u     f

        1      1        1
       --- = ----- - -----
        v     (-20)   (-30)

        1        1       1        -3  +  2         -1
       --- =  - ----  + ----  =  -----------  =  ------
        v        20      30          60             60

                 v  =  -60 cm

  MAGNIFICATION
             -v      -(-60)      60
       m  =  ---- =  --------  = ----  =  -2
              u        (-30)     -30

       m = -2      ->  image is INVERTED (so REAL) and 2 times bigger

  IMAGE HEIGHT
       h'  =  m x h  =  (-2)(4)  =  -8 cm

  ANSWER:  the image is 60 cm in front of the mirror, REAL, INVERTED
           and 8 cm tall.
```

### WORKED EXAMPLE 6.2
An object is placed 10 cm in front of a convex mirror of focal length 15 cm.
Find the image position and magnification.

```
  DATA:     u = -10 cm      f = +15 cm      (CONVEX -> f is POSITIVE)

        1     1     1            1      1       1
       --- + --- = ---   ->     --- = ---- - ------
        v     u     f            v     15     (-10)

        1      1      1        2  +  3        5       1
       --- =  ---- + ----  =  ---------  =  -----  =  ---
        v      15     10          30          30       6

                 v  =  +6 cm         (POSITIVE -> behind the mirror
                                       -> VIRTUAL, as expected)

             -v      -(+6)
       m  =  ---- =  -------  =  +0.6
              u       (-10)

  ANSWER:  image is 6 cm behind the mirror, VIRTUAL, ERECT, 0.6 times
           the size of the object.
```

> **TRAP:** never write "v = 60 cm, so the image is behind the mirror".
> For a mirror, a POSITIVE v means BEHIND (virtual). Get the sign first,
> then read the meaning from it.

---

# TOPIC 7 — Refraction of light and Snell's law

When light passes from one transparent medium into another, it **changes speed**
and therefore **bends**. That bending is refraction.

```
   REFRACTION AT A PLANE SURFACE

                          N
                          |
       incident ray       |
                   \      |
                    \  i  |
                     \    |          MEDIUM 1  (air, rarer)
                      \   |
   ====================='==O=================================  SURFACE
                          |\
                          | \                MEDIUM 2 (glass, denser)
                          |r \
                          |   \
                          |    \  refracted ray
                          |     \
                          N'

     Going from RARER to DENSER  ->  the ray bends TOWARDS the normal (r < i)
     Going from DENSER to RARER  ->  the ray bends AWAY from the normal (r > i)
```

## The two laws of refraction

```
  LAW 1   The incident ray, the refracted ray and the normal all lie
          in the SAME PLANE.

  LAW 2   SNELL'S LAW —  for a given pair of media and a given colour
          of light, the ratio  sin i / sin r  is a CONSTANT.

                    +---------------------------+
                    |     sin i                 |
                    |    -------  =  mu         |
                    |     sin r          21     |
                    +---------------------------+

          mu(21)  =  refractive index of medium 2 with respect to medium 1
```

## Refractive index — three ways to write it

```
  1.  ABSOLUTE refractive index (medium with respect to VACUUM):

                    speed of light in vacuum        c
          mu   =   ---------------------------  =  ---
                    speed of light in medium        v

  2.  RELATIVE refractive index (medium 2 with respect to medium 1):

                    mu           v          lambda
                      2           1               1
        mu     =    ------   =  -----  =  ----------
          21         mu           v          lambda
                       1           2               2

  3.  SNELL'S LAW in the symmetric form (very useful):

              mu  sin i    =    mu  sin r
                1                 2
```

```
  TYPICAL VALUES  (learn these four)

  +----------------+---------+
  |  Vacuum / air  |  1.00   |
  |  Water         |  1.33   |
  |  Glass (crown) |  1.50   |
  |  Diamond       |  2.42   |   <-- the largest common value
  +----------------+---------+
```

```
  IMPORTANT FACTS

  *  mu has NO UNITS and NO DIMENSIONS (it is a ratio of two speeds).
  *  mu is ALWAYS greater than 1 for any real medium (light is fastest
     in vacuum).
  *  When light refracts, its FREQUENCY does NOT change.
     Its SPEED and its WAVELENGTH both change.
  *  mu is largest for VIOLET and smallest for RED.
  *  mu(21) x mu(12) = 1
```

### WORKED EXAMPLE 7.1
The refractive index of glass is 1.5. Find the speed of light in glass.
(c = 3 x 10^8 m s^-1)

```
              c                     c         3 x 10^8
       mu = ----     ->      v  =  ----  =  ------------
              v                     mu           1.5

                              v  =  2 x 10^8  m s^-1
```

### WORKED EXAMPLE 7.2
A ray travels from air into water (mu = 4/3) at an angle of incidence of
60 degrees. Find the angle of refraction.

```
       mu(air) sin i  =  mu(water) sin r

              1 x sin 60  =  (4/3) sin r

                                  3                3 x 0.866
              sin r  =  sin 60 x ---     =     ----------------  =  0.6495
                                  4                    4

              r  =  40.5 degrees          (less than 60, as expected —
                                           it bent TOWARDS the normal)
```

---

# TOPIC 8 — Refraction through a glass slab and lateral shift

```
   REFRACTION THROUGH A RECTANGULAR GLASS SLAB

            N
            |
   incident |
      ray \ |
           \| i
   =========\============================
            |\        |                 |
            | \  r    |     GLASS       |   thickness  t
            |  \      |                 |
            |   \     |                 |
            |    \    |                 |
   ==============\=========================
                  \ i |
                   \  |          the emergent ray is PARALLEL
                    \ |          to the incident ray, but
                     \|          SHIFTED sideways by  d
                      \
                       \  emergent ray
                        \
                <--d-->  (lateral shift)
```

```
  KEY RESULTS

  1.  The emergent ray is PARALLEL to the incident ray.
      The slab does NOT change the direction, only the position.

  2.  The angle of emergence  =  the angle of incidence.

  3.  LATERAL SHIFT

                    +-------------------------------+
                    |             sin ( i - r )     |
                    |     d  =  t ---------------   |
                    |                  cos r        |
                    +-------------------------------+

      For SMALL angles this becomes

                              +-      1  -+
                    d  =  t i | 1 - ----- |          (i in radians)
                              +-      mu -+
```

### WORKED EXAMPLE 8.1
Light falls at 45 degrees on a glass slab (mu = 1.5) of thickness 6 cm.
The angle of refraction is 28 degrees. Find the lateral shift.

```
              sin ( i - r )              sin ( 45 - 28 )
       d = t ---------------   =    6 x -----------------
                  cos r                     cos 28

                 sin 17          0.2924
         =  6 x --------  = 6 x ---------  =  6 x 0.3312  =  1.99 cm
                 cos 28          0.8829

         d  ~=  2 cm
```

---

# TOPIC 9 — Apparent depth and normal shift

A coin at the bottom of a bucket of water looks **closer to the surface** than
it really is.

```
   APPARENT DEPTH

        eye
         O
          \
           \
    ========\=================================  water surface
            |\                 ^
            | \                |
            |  \        apparent depth
            |   \              |
       -----|----* I  <--------v---   (image — looks shallower)
            |     \            ^
            |      \           |
            |       \     real depth
            |        \         |
       -----+---------* O  <---v---   (the actual coin)
```

```
  +======================================================================+
  |                                                                      |
  |                     REAL DEPTH                                       |
  |          mu  =  ------------------                                   |
  |                   APPARENT DEPTH                                     |
  |                                                                      |
  |                                        REAL DEPTH                    |
  |          APPARENT DEPTH   =        --------------------              |
  |                                            mu                        |
  |                                                                      |
  |          NORMAL SHIFT (how much it appears to rise)                  |
  |                                                                      |
  |                                    +-        1   -+                  |
  |          x  =  t  -  t / mu  =   t | 1  -  ----   |                  |
  |                                    +-        mu  -+                  |
  |                                                                      |
  |          where t is the real thickness / real depth                  |
  +======================================================================+
```

```
  NOTE:  this formula is only valid when you look NEARLY NORMALLY
         (straight down) at the object.
```

### WORKED EXAMPLE 9.1
A tank holds water (mu = 4/3) to a depth of 12 cm. Find the apparent depth
and the normal shift.

```
                        real depth      12       12 x 3
  APPARENT DEPTH  =  ---------------  = ----  =  --------  =  9 cm
                           mu           4/3         4

  NORMAL SHIFT    =  12  -  9  =  3 cm

  CHECK with the formula:
             +-      1   -+         +-      3  -+         1
     x = t   | 1 - ------ |  = 12 x | 1 -  ---- |  = 12 x ---  = 3 cm  OK
             +-      mu  -+         +-      4  -+         4
```

### WORKED EXAMPLE 9.2
A glass slab of thickness 9 cm and mu = 1.5 is placed over a printed page.
By how much does the print appear to be raised?

```
             +-      1   -+          +-       1   -+          +-      2 -+
     x = t   | 1 - ------ |  =  9 x  | 1 -  ----- |   =  9 x  | 1 -  --- |
             +-      mu  -+          +-      1.5  -+          +-      3 -+

                                =  9 x (1/3)  =  3 cm
```

---

# TOPIC 10 — TOTAL INTERNAL REFLECTION (TIR)

This is a favourite exam topic. Learn it properly.

When light goes from a **denser** medium to a **rarer** medium, it bends **away**
from the normal. If we keep increasing the angle of incidence, the refracted
ray bends further and further until it grazes along the surface. Beyond that,
there is **no refracted ray at all** — all the light is reflected back into the
denser medium.

```
   TOTAL INTERNAL REFLECTION — the three stages

           AIR (rarer)                                    NO refracted
                                        r = 90              ray at all
                     \        \       ____/                    ^
                      \        \  ___/                         |
                       \       _\/                             |
   ========O============O========O============O==============================
          /|\          /|\      /|\          /|\          .    |
         / | \        / | \    / | \        / | \       .      |
        /  |  \      /  |  \  /  |  \      /  |  \    .        |
       /   |   \    /   |   \/   |   \    /   |  ` . '         |
      /  i < C  \  /  i < C   \  i = C \  /  i > C  \ reflected ray
                                                      goes BACK into
           GLASS (denser)                             the glass

    STAGE 1:  i < C   ->  most light refracts out, a little reflects
    STAGE 2:  i = C   ->  refracted ray grazes the surface (r = 90 deg)
                          C is called the CRITICAL ANGLE
    STAGE 3:  i > C   ->  NO refraction. ALL the light is reflected back.
                          This is TOTAL INTERNAL REFLECTION.
```

## The critical angle

```
  Apply Snell's law at the critical angle:

           mu(denser) sin C   =   mu(rarer) sin 90

  Taking the rarer medium as air (mu = 1) and sin 90 = 1:

                    +------------------------------+
                    |                    1         |
                    |     mu   =    ---------      |
                    |                  sin C       |
                    |                              |
                    |                    1         |
                    |     sin C  =    -------      |
                    |                    mu        |
                    +------------------------------+

  For a general pair of media:

                              mu (rarer)
                sin C   =    ------------
                              mu (denser)
```

```
  THE TWO CONDITIONS FOR TIR  (write BOTH — 1 mark each)

  1.  Light must travel from a DENSER medium to a RARER medium.
  2.  The angle of incidence must be GREATER than the critical angle.
```

```
  CRITICAL ANGLES WORTH REMEMBERING

  +--------------+---------+------------------+
  |  MEDIUM      |   mu    |  CRITICAL ANGLE  |
  +--------------+---------+------------------+
  |  Water       |  1.33   |   about 49 deg   |
  |  Crown glass |  1.50   |   about 42 deg   |
  |  Diamond     |  2.42   |   about 24 deg   |
  +--------------+---------+------------------+

  Note:  the LARGER the refractive index, the SMALLER the critical angle.
```

## Applications of total internal reflection

### 1. MIRAGE

```
   On a hot day the air near the road is HOT (rarer) and the air above
   is COOL (denser).

     cool, denser air
      ------------------------------------------
        \                                 ___----
         \                        ___----'
          \             ___----'
           \  ___----'                    ray bends more and more,
            X'                            finally undergoes TIR
      ------------------------------------------
     hot, rarer air near the road
     ##########################################  HOT ROAD
                                  observer sees an inverted image of the
                                  sky -> looks like a pool of water
```

**Explanation for the exam:** layers of air near a hot road are rarer. A ray
travelling downwards from the sky refracts away from the normal layer after
layer until the angle of incidence exceeds the critical angle. Total internal
reflection then sends it upward to the observer, who sees an inverted image of
the sky and mistakes it for water.

### 2. SPARKLE OF A DIAMOND

Diamond has mu = 2.42, so its critical angle is only about 24 degrees. Light
entering a cut diamond strikes the inner faces at angles greater than 24 degrees
almost every time, so it is totally internally reflected many times before
finally escaping. The concentrated emerging light makes the diamond sparkle.

### 3. OPTICAL FIBRE

```
   OPTICAL FIBRE  —  light piped along a bent glass thread

   ==========================================================  CLADDING
   \        /\        /\        /\        /\        /\        (lower mu)
    \      /  \      /  \      /  \      /  \      /  \
  -->\    /    \    /    \    /    \    /    \    /    \--->   CORE
      \  /      \  /      \  /      \  /      \  /             (higher mu)
       \/        \/        \/        \/        \/
   ==========================================================  CLADDING

   Every bounce has  i > C , so NO light escapes.
   Signal travels for kilometres with almost no loss.
```

**Uses:** telecommunication (telephone, internet), endoscopy (looking inside
the human body), decorative lamps, transmitting light into inaccessible places.

### 4. TOTALLY REFLECTING PRISMS

A right-angled isosceles glass prism (angles 45-90-45). Since C for glass is
42 degrees and light hits the hypotenuse at 45 degrees, TIR always occurs.

```
   (a) TURNING LIGHT THROUGH 90 DEGREES

        ------->|\
                | \
                |  \  45 deg   <-- TIR here
                |   \
                |____\
                  |
                  |
                  v

   (b) TURNING LIGHT THROUGH 180 DEGREES        (c) ERECTING PRISM
       (used in binoculars)                         (inverts the image)

        ------->|\                                     /\
                | \                                   /  \
        <-------|  \                          ------>/    \
                |   \                                \    /
                |____\                                \  /
                                                       \/
```

**Advantage over a silvered mirror:** a totally reflecting prism reflects
**100 %** of the light, while a silvered mirror always absorbs some. Also the
silvering of a mirror can peel off with time.

### WORKED EXAMPLE 10.1
The critical angle for a medium is 30 degrees. Find its refractive index and
the speed of light in it.

```
              1            1           1
     mu  =  -------  =  --------  =  -----  =  2
             sin C       sin 30       0.5

              c             c        3 x 10^8
     v  =  ------   =   --------  =  ----------  =  1.5 x 10^8  m s^-1
             mu             2            2
```

### WORKED EXAMPLE 10.2
Find the critical angle for a water-air surface. (mu of water = 4/3)

```
                 1          1         3
     sin C  =  ------  =  ------  =  ---  =  0.75
                 mu        4/3        4

     C  =  48.6 degrees   ~=  49 degrees
```

> **TRAP:** TIR does **not** happen when light goes from air into glass.
> Many students apply it the wrong way round. Denser to rarer, ALWAYS.

---

# TOPIC 11 — Refraction at a single spherical surface

This is the derivation that the lens maker's formula is built on. Learn it.

```
   REFRACTION AT A SINGLE CONVEX SPHERICAL SURFACE

                mu(1)              |          mu(2)
              (rarer)              |         (denser)
                                   |
                                  N|
                              __--'|\
                        __--'      | \ r
                  __--'            |  \
            __--'  i               |   \
      O---------------------+------+----+--------------C---------I------
       \       alpha        P     gamma  \        beta          /
        \                                 \                    /
         object                            refracted ray converges to I

     O = object       I = image        P = pole of the surface
     C = centre of curvature       R = PC = radius of curvature
     N = point where the ray meets the surface
     CN is the NORMAL at N (a radius is always normal to the sphere)
```

```
  DERIVATION  (paraxial rays, so all angles are small)

  STEP 1   In triangle ONC (exterior angle = sum of interior opposite):

                    i  =  alpha  +  gamma

  STEP 2   In triangle INC:

                    gamma  =  r  +  beta       ->      r  =  gamma - beta

  STEP 3   For small angles, tan(x) ~= x , so with h = height of N
           above the axis:

                        h                 h                 h
           alpha  =  -------      beta = -----     gamma = -----
                       (-u)                v                 R

  STEP 4   Snell's law for small angles:      mu(1) i  =  mu(2) r

           mu(1) ( alpha + gamma )  =  mu(2) ( gamma - beta )

               +-  h        h  -+          +-  h       h  -+
       mu(1) x |  ----  +  ---  |  = mu(2) | ---  -  ---   |
               +- (-u)      R  -+          +-  R       v  -+

  STEP 5   Cancel h throughout and rearrange:

               mu(1)     mu(1)       mu(2)     mu(2)
             -  -----  +  -----   =   -----  -  -----
                 u          R           R         v

               +==========================================+
               |     mu(2)     mu(1)       mu(2) - mu(1)  |
               |     -----  -  -----   =   --------------  |
               |       v         u                R        |
               +==========================================+
```

```
  This ONE formula covers everything: convex surface, concave surface,
  real object, virtual object. Just put in the correct signs.
```

### WORKED EXAMPLE 11.1
A point object is placed 30 cm in front of a convex spherical glass surface of
radius of curvature 10 cm. Find the image position. (mu of glass = 1.5,
mu of air = 1)

```
  DATA:   mu1 = 1 , mu2 = 1.5 , u = -30 cm , R = +10 cm

        mu2     mu1       mu2 - mu1
        ----  - ----  =  -----------
         v       u             R

        1.5        1        1.5 - 1
        ----  -  ------  =  --------
         v        (-30)        10

        1.5        1          1              1        1        1
        ----  +  ----  =  --------   ->     ----  =  ---- -  ------
         v         30        20              v        20       30

        1.5       3 - 2        1
        ----  =  --------  =  ----      ->      v  =  1.5 x 60  =  +90 cm
         v          60         60

  ANSWER:  the image forms 90 cm inside the glass, on the far side —
           it is a REAL image.
```

---

# TOPIC 12 — Lenses and the LENS MAKER'S FORMULA

```
   THE TWO TYPES OF LENS

   CONVEX (converging)                 CONCAVE (diverging)
   thicker in the middle               thinner in the middle

          / \                                |   |
         /   \                               \   /
        |     |                               |  |
        |     |                               |  |
         \   /                               /    \
          \ /                                |    |

   ==>  ---\                                ---\
   ==>  ----\----> F                        ----\  ---->  spreads out
   ==>  ----/                               ----/   (appears to come from F)
   ==>  --/                                 ---/

   f is POSITIVE                       f is NEGATIVE
```

```
  THE THREE TERMS

  OPTICAL CENTRE  O   the point at the centre of the lens; a ray through
                      it goes STRAIGHT ON without bending
  PRINCIPAL FOCUS F   where parallel rays converge (convex) or appear to
                      diverge from (concave)
  FOCAL LENGTH    f   the distance OF
  A lens has TWO foci, one on each side, at equal distances.
```

## Derivation of the LENS MAKER'S FORMULA

```
   A THIN LENS = TWO SPHERICAL SURFACES BACK TO BACK

              surface 1                 surface 2
              (radius R1)               (radius R2)
                    |  |
                    |  |
       O -----------|--|-------------> I1 (image from surface 1)
                    |  |                     ------> I (final image)
                    |  |
                mu(1)  mu(2)  mu(1)
                air    glass  air
```

```
  STEP 1   REFRACTION AT SURFACE 1
           Object O in medium mu1 , image formed at I1 (distance v1).

                mu2      mu1        mu2 - mu1
               -----  -  -----  =  -----------              ... (1)
                 v1        u            R1

  STEP 2   REFRACTION AT SURFACE 2
           The image I1 now acts as the OBJECT for surface 2.
           Light now goes from glass (mu2) into air (mu1).

                mu1      mu2        mu1 - mu2
               -----  -  -----  =  -----------              ... (2)
                 v        v1            R2

  STEP 3   ADD equations (1) and (2). The  v1  terms cancel:

                mu1     mu1                     +-  1       1  -+
               -----  - -----  =  ( mu2 - mu1 ) | ----  -  ---- |
                 v        u                     +-  R1      R2 -+

  STEP 4   Divide throughout by  mu1  :

                1      1       +- mu2      -+  +-  1       1  -+
               ---  - ---  =   | ----- - 1  |  | ----  -  ---- |
                v      u       +- mu1      -+  +-  R1      R2 -+

  STEP 5   For a lens in AIR,   mu2/mu1 = mu  (refractive index of the
           lens material). Also, when the object is at infinity
           (u = infinity), the image forms at the focus (v = f):

               +===============================================+
               |     1                 +-   1        1    -+   |
               |    ---  =  ( mu - 1 ) |  -----  -  -----  |   |
               |     f                 +-   R1       R2   -+   |
               +===============================================+

           This is the LENS MAKER'S FORMULA.
```

```
  ASSUMPTIONS  (worth 1 mark — always state them)

  1.  The lens is THIN (thickness is negligible).
  2.  The rays are PARAXIAL (close to and nearly parallel to the axis).
  3.  The object is a POINT object on the principal axis.
  4.  The lens is placed in AIR.
```

```
  SIGNS OF R1 AND R2  (using the Cartesian convention)

  +---------------------------+---------+---------+
  |  LENS                     |   R1    |   R2    |
  +---------------------------+---------+---------+
  |  Biconvex                 |    +    |    -    |
  |  Biconcave                |    -    |    +    |
  |  Plano-convex (flat first)|  infin. |    -    |
  |  Plano-convex (curve first)|   +    |  infin. |
  |  Plano-concave            |  infin. |    +    |
  +---------------------------+---------+---------+
```

### WORKED EXAMPLE 12.1
A biconvex lens has both radii of curvature equal to 20 cm and is made of glass
of refractive index 1.5. Find its focal length.

```
  DATA:   R1 = +20 cm ,  R2 = -20 cm ,  mu = 1.5

        1                 +-  1       1  -+
       ---  =  ( 1.5 - 1) | ----  -  ---- |
        f                 +- 20      -20 -+

                          +-  1       1  -+           +-  2  -+
            =   0.5   x   | ----  +  ---- |  =  0.5 x | ---- |
                          +- 20       20  -+           +- 20 -+

                     0.5 x 2       1
            =       ---------  =  ----
                        20         20

                     f  =  +20 cm       (converging, as expected)
```

### WORKED EXAMPLE 12.2
A convex lens of focal length 20 cm in air (mu of glass = 1.5) is dipped in
water (mu = 1.33). Find its new focal length.

```
  In air:
        1                  +- 1     1  -+                +- 1     1  -+
       ---   =  (1.5 - 1)  | --- - ---  |   ->  1/20 = 0.5 | --- - --- |
        20                 +- R1    R2 -+                +- R1    R2 -+

                              +- 1     1  -+       1        1
                   so         | --- - ---  |  =  ------  = ----
                              +- R1    R2 -+     0.5 x 20   10

  In water,  mu(relative) = 1.5 / 1.33 = 1.128

        1                       1        0.128
       ---  =  ( 1.128 - 1 ) x ----  =  --------
        f'                      10         10

                 f'  =  78 cm    (approximately)

  CONCLUSION:  a convex lens becomes MUCH WEAKER in water because the
               relative refractive index is smaller.
```

> **TRAP:** if the lens is put in a liquid with the **same** refractive index
> as the glass, then (mu - 1) = 0 and 1/f = 0, so **f = infinity** — the lens
> stops working and becomes invisible. This is a favourite 2-mark question.

---

# TOPIC 13 — The thin lens formula, ray diagrams and magnification

```
  +======================================================================+
  |                                                                      |
  |     LENS FORMULA                       MAGNIFICATION                 |
  |                                                                      |
  |       1     1     1                        h'       v                |
  |      --- - --- = ---                 m  =  ---  =  ---               |
  |       v     u     f                         h        u               |
  |                                                                      |
  |     (note the MINUS sign, unlike the mirror)                         |
  |     (note there is NO minus in the lens magnification)               |
  +======================================================================+
```

## The three rules for drawing lens rays

```
  RULE 1   A ray PARALLEL to the principal axis passes through F
           (convex) or appears to come from F (concave) after refraction.

  RULE 2   A ray through the OPTICAL CENTRE O goes STRAIGHT ON, undeviated.

  RULE 3   A ray through the first focus emerges PARALLEL to the axis.
```

## CONVEX LENS — object beyond 2F

```
      B                            /\
      |  ----____                 /  \
      |          ----____        |    |
      |                  ----____|    |
  ----A--------+--------+--------|    |--------+--------+--------------
      |       2F        F        |    |        F       2F  ----____
      |                          |    |    ----                ----____
      |                           \  /  ---                          --*
      |                            \/                          A'    | B'
                                                                     |
      object                     LENS                       (image is REAL,
                                                             INVERTED,
                                                             DIMINISHED,
                                                             between F and 2F)
```

## CONVEX LENS — object between F and the lens (magnifying glass)

```
                                B      /\
                              /  |    /  \
                            /    |   |    |
                          /      |   |    |
      ------------+-----/--------A---|    |----------+-----------------
                 2F   F                |    |        F
                                       \  /
                                        \/
                B'
                |             the refracted rays DIVERGE.
                |             Traced backwards they meet on the SAME side
                |             as the object.
                A'
        (VIRTUAL, ERECT, MAGNIFIED image — this is the magnifying glass)
```

## CONCAVE LENS — always the same picture

```
      B                          |  |
      |  ----____                \  /
      |          ----____         ||
      |                  ----____ ||
  ----A---------+---------+-------||-------+---------+-------------
      |         2F        F       ||       F         2F
      |                  B'  ---- ||  ----
      |                  |   ---- /  \ ----
      |                  A'       |  |
                                LENS

  IMAGE for EVERY object position:
       between F and O, on the SAME side as the object,
       VIRTUAL , ERECT , DIMINISHED
```

## THE LENS SUMMARY TABLE

```
  CONVEX LENS
  +----------------------+-------------------+----------+---------+-----------+
  |  OBJECT POSITION     |  IMAGE POSITION   |  NATURE  |  ERECT? |   SIZE    |
  +----------------------+-------------------+----------+---------+-----------+
  |  At infinity         |  At F             |  Real    | Inverted| Point     |
  |  Beyond 2F           |  Between F and 2F |  Real    | Inverted| Diminished|
  |  At 2F               |  At 2F            |  Real    | Inverted| Same size |
  |  Between F and 2F    |  Beyond 2F        |  Real    | Inverted| Magnified |
  |  At F                |  At infinity      |  Real    | Inverted| Very large|
  |  Between F and lens  |  Same side as the |  VIRTUAL |  ERECT  | Magnified |
  |                      |  object           |          |         |           |
  +----------------------+-------------------+----------+---------+-----------+

  CONCAVE LENS
  +----------------------+-------------------+----------+---------+-----------+
  |  Anywhere            |  Between F and O  |  Virtual |  Erect  | Diminished|
  +----------------------+-------------------+----------+---------+-----------+
```

### WORKED EXAMPLE 13.1
An object 3 cm tall is placed 20 cm from a convex lens of focal length 12 cm.
Find the image position, magnification and size.

```
  DATA:   u = -20 cm ,  f = +12 cm ,  h = +3 cm

        1     1     1              1      1        1
       --- - --- = ---   ->       --- =  ---- + ------
        v     u     f              v      12     (-20)

        1       1      1        5  -  3        2        1
       --- =   ---- - ----  =  ---------  =  -----  =  ----
        v       12     20          60          60        30

                 v  =  +30 cm     (POSITIVE -> real image on the far side)

              v        30
       m  =  ---  =  ------  =  -1.5
              u       (-20)

       h'  =  m x h  =  (-1.5)(3)  =  -4.5 cm

  ANSWER:  a REAL, INVERTED image 30 cm behind the lens, 4.5 cm tall.
```

### WORKED EXAMPLE 13.2
An object is placed 10 cm from a concave lens of focal length 15 cm.
Find the image.

```
  DATA:   u = -10 cm ,  f = -15 cm     (CONCAVE -> f is negative)

        1      1       1          1        1
       --- =  ---  +  ---  =   ------ + ------
        v      f       u        (-15)    (-10)

           =  -(1/15) - (1/10)  =  -(2 + 3)/30  =  -5/30  =  -1/6

                 v  =  -6 cm      (NEGATIVE -> same side as the object
                                    -> VIRTUAL)

              v        -6
       m  =  ---  =  ------  =  +0.6      ->  ERECT and DIMINISHED
              u        -10

  ANSWER:  virtual, erect, diminished image 6 cm from the lens on the
           same side as the object. (Exactly what a concave lens ALWAYS does.)
```

---

# TOPIC 14 — Power of a lens and combination of lenses

```
  +======================================================================+
  |                                                                      |
  |                       1                                              |
  |            P   =    -------          f MUST be in METRES             |
  |                       f                                              |
  |                                                                      |
  |            UNIT: dioptre (D)          1 D = 1 m^-1                   |
  |                                                                      |
  |                     100                                              |
  |            P  =  -----------         when f is in CENTIMETRES        |
  |                   f (in cm)                                          |
  |                                                                      |
  +======================================================================+
```

```
  P is POSITIVE for a CONVEX (converging) lens.
  P is NEGATIVE for a CONCAVE (diverging) lens.

  A "power of +2.5 D" spectacle lens is a convex lens of focal length 40 cm.
  A "power of -2 D" spectacle lens is a concave lens of focal length 50 cm.
```

## Two thin lenses in contact

```
   TWO THIN LENSES IN CONTACT

              lens 1     lens 2
                /\        /\
               /  \      /  \
              |    |    |    |
    O --------|    |----|    |--------> I
              |    |    |    |
               \  /      \  /
                \/        \/
                 f1        f2

   The image formed by lens 1 acts as the object for lens 2.
```

```
  DERIVATION (short)

     Lens 1:      1/v1  -  1/u   =  1/f1
     Lens 2:      1/v   -  1/v1  =  1/f2      (I1 is the object for lens 2)

     ADD:         1/v   -  1/u   =  1/f1  +  1/f2

     But for the combination,   1/v - 1/u = 1/F , so

               +==============================================+
               |      1        1        1                     |
               |     ---  =   ----  +  ----                   |
               |      F        f1       f2                    |
               |                                              |
               |      P   =   P1  +  P2                       |
               |                                              |
               |      m   =   m1  x  m2                       |
               +==============================================+
```

### WORKED EXAMPLE 14.1
A convex lens of focal length 20 cm is placed in contact with a concave lens of
focal length 30 cm. Find the focal length and power of the combination.

```
  DATA:   f1 = +20 cm ,  f2 = -30 cm

        1      1       1         1        1        3  -  2        1
       ---  = ----  + ----  =  ----  +  ------  = ---------  =  ----
        F      f1      f2       20       (-30)        60          60

                 F  =  +60 cm  =  +0.6 m       ->  CONVERGING

              1        1
       P  =  ---  =  -----  =  +1.67 D
              F       0.6
```

### WORKED EXAMPLE 14.2
Two lenses of powers +5 D and -2 D are placed in contact. Find the focal length
of the combination.

```
       P  =  P1 + P2  =  (+5) + (-2)  =  +3 D

              1       1
       f  =  ---  =  ---  =  0.333 m  =  33.3 cm     (converging)
              P       3
```

> **TRAP:** the combination formula 1/F = 1/f1 + 1/f2 is only for lenses
> **IN CONTACT**. If they are separated by a distance d, the formula becomes
> 1/F = 1/f1 + 1/f2 - d/(f1 f2). Read the question carefully.

---

# TOPIC 15 — Refraction through a PRISM

```
   REFRACTION THROUGH A PRISM

                              A
                             /\
                            /  \
                           /    \
                    N     /      \      N'
                     \   /  r1  r2\    /
                       \/          \  /
              i        /\          /\    e
      -------->-------/--\--------/--\------->
                     /    \      /    \
                    /      \    /      \
                   /        \  /        \
                  /          \/          \
                 B ----------------------- C

     A   =  angle of the prism (refracting angle)
     i   =  angle of incidence      e   =  angle of emergence
     r1  =  angle of refraction at the first face
     r2  =  angle of incidence at the second face
     D   =  angle of DEVIATION (the total bending of the ray)
```

```
   THE DEVIATION ANGLE

                                 A
                                / \
                               /   \
                              /     \
              incident  ray  /       \
        ----------------->--/---------\---> ... produced forward
                            \    D    /  \
                             \       /    \ emergent ray
                              \     /      \
                               \   /        v
                                \ /

     D is the angle between the ORIGINAL direction of the incident ray
     and the FINAL direction of the emergent ray.
```

## Derivation of A + D = i + e

```
  STEP 1   In the quadrilateral A-N-O-N' (where O is the point of
           refraction on the second face):
           The two normals meet the faces at 90 degrees, so

                    A  +  angle NON'  =  180 deg          ... (1)

  STEP 2   In triangle NON' :

                    r1  +  r2  +  angle NON'  =  180 deg  ... (2)

  STEP 3   Compare (1) and (2):

                    +-----------------------+
                    |     A  =  r1  +  r2   |
                    +-----------------------+

  STEP 4   The deviation at the FIRST face is  ( i - r1 ).
           The deviation at the SECOND face is ( e - r2 ).
           Total deviation:

                    D  =  ( i - r1 )  +  ( e - r2 )
                       =  ( i + e )  -  ( r1 + r2 )
                       =  ( i + e )  -  A

                    +---------------------------+
                    |     A  +  D  =  i  +  e   |
                    +---------------------------+
```

## The i - D graph and the condition for minimum deviation

```
   GRAPH OF DEVIATION  D  AGAINST ANGLE OF INCIDENCE  i

     D
     ^
     |  \                                     /
     |   \                                   /
     |    \                                 /
     |     \                               /
     |      \                             /
     |       \                           /
     |        \___                   ___/
     |            \___           ___/
     |                \___   ___/
  Dm |....................\_/
     |                     :
     |                     :
     +---------------------+----------------------------> i
                          i = e
                       (minimum deviation
                        position)

   *  For every value of D EXCEPT Dm there are TWO angles of incidence
      that give the same deviation (i and e can be swapped).
   *  At the MINIMUM, there is only ONE value.
```

```
  CONDITIONS AT MINIMUM DEVIATION

  +==================================================================+
  |                                                                  |
  |   1.  i  =  e             (the ray passes SYMMETRICALLY)         |
  |   2.  r1 =  r2  =  A / 2                                         |
  |   3.  The refracted ray inside the prism is PARALLEL to the base |
  |   4.  D  =  Dm  (the minimum value)                              |
  |                                                                  |
  +==================================================================+
```

## Derivation of the PRISM FORMULA

```
  STEP 1   At minimum deviation,  i = e  and  r1 = r2 = r.

           From    A = r1 + r2 = 2r     ->      r  =  A / 2

  STEP 2   From    A + Dm = i + e = 2i

                          A  +  Dm
                    i  =  ----------
                              2

  STEP 3   Apply Snell's law at the first face:

                     sin i
             mu  =  -------
                     sin r

           +=================================================+
           |                    +-  A  +  Dm  -+             |
           |              sin   |  ----------  |             |
           |                    +-      2     -+             |
           |    mu   =    ---------------------------        |
           |                        +-  A  -+                |
           |                  sin   |  ---  |                |
           |                        +-  2  -+                |
           +=================================================+
```

```
  THIN PRISM (small A) SPECIAL CASE

      For a prism with a small refracting angle, sin x ~= x , so

                    +--------------------------+
                    |    D  =  ( mu - 1 ) A    |
                    +--------------------------+
```

### WORKED EXAMPLE 15.1
The angle of a prism is 60 degrees and the angle of minimum deviation is
30 degrees. Find the refractive index of the material.

```
                sin ( (A + Dm) / 2 )        sin ( (60 + 30) / 2 )
       mu  =  -----------------------  =  -------------------------
                    sin ( A / 2 )               sin ( 60 / 2 )

                sin 45        0.7071
           =  ---------  =  ----------  =  1.414   =  sqrt(2)
                sin 30          0.5

       mu  =  1.414
```

### WORKED EXAMPLE 15.2
A prism of angle 30 degrees is made of glass of mu = 1.5. Find the deviation
produced for a small angle of incidence.

```
       D  =  ( mu - 1 ) A  =  ( 1.5 - 1 ) x 30  =  0.5 x 30  =  15 degrees
```

### WORKED EXAMPLE 15.3
For a prism of angle A, the angle of minimum deviation equals A. Find mu.

```
       Dm  =  A ,  so

                sin ( (A + A) / 2 )       sin A       2 sin(A/2) cos(A/2)
       mu  =  ----------------------  =  --------  = ----------------------
                   sin ( A / 2 )          sin(A/2)         sin(A/2)

           =  2 cos ( A / 2 )
```

> **TRAP:** the prism formula is valid **only at minimum deviation**.
> If the question gives a general i and D, use A + D = i + e instead.

---

# TOPIC 16 — Dispersion by a prism

White light is a mixture of seven colours. A prism separates them because the
refractive index of glass is **different for each colour**.

```
   DISPERSION BY A PRISM

                            /\
                           /  \
                          /    \
        WHITE LIGHT      /      \
      ---------------->-/--------\--------                RED     (bends LEAST)
                        \        / \-------------         ORANGE
                         \      /   \------------         YELLOW
                          \    /     \-----------         GREEN
                           \  /       \----------         BLUE
                            \/         \---------         INDIGO
                                        \--------         VIOLET  (bends MOST)

                   The band of colours is called a SPECTRUM.
                   Order: V I B G Y O R  (VIBGYOR, violet deviated most)
```

```
  WHY?
       mu is LARGER for VIOLET  ->  violet is deviated MORE
       mu is SMALLER for RED    ->  red is deviated LESS

       Also   lambda(violet) < lambda(red) , and mu increases as
       wavelength decreases (Cauchy's relation).
```

```
  +======================================================================+
  |                                                                      |
  |  DEVIATION of any colour (thin prism)                                |
  |                                                                      |
  |         D(v) = ( mu(v) - 1 ) A          D(r) = ( mu(r) - 1 ) A       |
  |                                                                      |
  |  ANGULAR DISPERSION  (the spread between violet and red)             |
  |                                                                      |
  |         theta  =  D(v)  -  D(r)  =  ( mu(v)  -  mu(r) ) A            |
  |                                                                      |
  |  MEAN DEVIATION                                                      |
  |                                                                      |
  |         D(y)  =  ( mu(y)  -  1 ) A       where mu(y) = (mu(v)+mu(r))/2|
  |                                                                      |
  |  DISPERSIVE POWER  omega                                             |
  |                                                                      |
  |               angular dispersion        mu(v)  -  mu(r)              |
  |     omega  =  -------------------  =  --------------------           |
  |                 mean deviation            mu(y)  -  1                |
  |                                                                      |
  |     omega has NO UNITS. It depends ONLY on the MATERIAL,             |
  |     not on the angle of the prism.                                   |
  +======================================================================+
```

### WORKED EXAMPLE 16.1
For a certain glass, mu(violet) = 1.532, mu(red) = 1.514, mu(yellow) = 1.523.
Find the dispersive power.

```
                mu(v) - mu(r)        1.532 - 1.514        0.018
     omega  =  ---------------  =  -----------------  =  --------  =  0.0344
                 mu(y) - 1            1.523 - 1            0.523
```

### WORKED EXAMPLE 16.2
A thin prism of angle 6 degrees is made of the glass above. Find the angular
dispersion.

```
     theta  =  ( mu(v) - mu(r) ) A  =  ( 0.018 ) x 6  =  0.108 degrees
```

---

# TOPIC 17 — Scattering of light: blue sky and red sunset

When light passes through a medium containing very small particles (like the
molecules of air), the particles absorb and re-radiate it in all directions.
This is **scattering**.

```
  RAYLEIGH'S LAW OF SCATTERING

                              1
        intensity  scattered  ~  -----------
                                 lambda^4

     (valid when the scattering particle is much SMALLER than the wavelength)
```

## Why the sky is blue

```
                       SUNLIGHT
                          |
                          v
      molecules of  *  *  *  *  *  *  *  *
      the atmosphere  \  |  /
                       \ | /       BLUE (short lambda) is scattered
                        \|/        strongly in ALL directions
                         O
                      observer

   Blue light has a SHORT wavelength, so from 1/lambda^4 it is scattered
   about 16 times more strongly than red light.
   Scattered blue light reaches our eyes from every part of the sky,
   so the sky looks BLUE.
```

## Why the setting Sun looks red

```
                                          _   observer
                              ___-----''''
              SUN     ___-----'
            (setting) '        LONG path through the atmosphere
       ------------------------------------------------------------
       ##################  EARTH  #################################

   At sunrise and sunset the sunlight travels through a MUCH LONGER
   thickness of atmosphere. Nearly all the blue and violet is scattered
   away before it reaches us. Only the LONG wavelengths — RED and ORANGE —
   survive the journey, so the Sun and the sky near it look RED.
```

```
  MORE ONE-LINERS THAT ARE ASKED

  *  Why is the sky BLACK for an astronaut?
     -> There is no atmosphere above him, so there is NO scattering.

  *  Why are DANGER SIGNALS red?
     -> Red has the longest wavelength, so it is scattered least and
        can be seen from the greatest distance through fog.

  *  Why do clouds look WHITE?
     -> Water droplets in clouds are LARGE compared to the wavelength,
        so all colours are scattered equally (this is not Rayleigh
        scattering) and the mixture looks white.
```

---

# TOPIC 18 — The simple microscope (magnifying glass)

```
   SIMPLE MICROSCOPE — a single CONVEX lens of SHORT focal length.
   The object is placed INSIDE the focus.

                                       /\
                       B              /  \
                     /  |            |    |
                   /    |            |    |
                 /      |            |    |
      ----------/-------A------------|    |----------------- eye
              /                       \  /
   B'       /                          \/
     \    /                          lens
      \ /
   A'  |
       |    VIRTUAL, ERECT, MAGNIFIED image
       |    formed at the least distance of distinct vision D
```

```
  +======================================================================+
  |                                                                      |
  |   IMAGE AT THE NEAR POINT (D = 25 cm)     max magnification          |
  |                                                                      |
  |                        D                                             |
  |            m  =  1 + -----                                           |
  |                        f                                             |
  |                                                                      |
  |   IMAGE AT INFINITY (relaxed eye, more comfortable)                  |
  |                                                                      |
  |                    D                                                 |
  |            m  =  -----                                               |
  |                    f                                                 |
  |                                                                      |
  |   D = LEAST DISTANCE OF DISTINCT VISION = 25 cm for a normal eye     |
  +======================================================================+
```

### WORKED EXAMPLE 18.1
A magnifying glass has a focal length of 5 cm. Find its magnifying power when
the image is (a) at the near point (b) at infinity.

```
  (a)          D           25
       m = 1 + ---  = 1 + ----  =  1 + 5  =  6
                f           5

  (b)          D          25
       m  =  -----  =  -----  =  5
                f         5
```

---

# TOPIC 19 — The COMPOUND MICROSCOPE  *** 8-mark question ***

Two convex lenses. The **objective** (small f, small aperture, near the object)
and the **eyepiece** (larger f, near the eye).

```
   COMPOUND MICROSCOPE — RAY DIAGRAM

        objective                     eyepiece
          /\                            /\
         /  \                          /  \
    B   |    |                        |    |
     \  |    |                        |    |
      \ |    |                        |    |
  ------\----|-----+-------------+----|----|------+-------------- eye
   A     \ Fo|     |      A'     |    |    |      |
       -->\  |     |      +------|----|----|------+--> to the
           \ |     |      |      |    |  \ |             eye
            \|     |      |      |    |   \|
             |\    |      |      |    |    \
             | \   |      |      |    |     \
             |  \  |      |      |    |      \
              \  \ |      |      |    |
               \  \|      |      |     \  /
                \  \      |      |      \/
                 \  \     |      |
                  \  +----+ B'   |
                   \  (real, inverted, magnified image
                    \  formed by the OBJECTIVE — it becomes
                     \ the OBJECT for the eyepiece)
                      \
                       \
                        \
                       B''  (FINAL image: VIRTUAL, INVERTED,
                             HIGHLY MAGNIFIED, on the same side
                             as the object)

    uo = distance of object from the objective
    vo = distance of the first image from the objective
    fo = focal length of objective      fe = focal length of eyepiece
    L  = length of the microscope tube
```

```
  HOW IT WORKS  (write these 4 lines in the exam)

  1.  The object is placed just BEYOND the focus Fo of the objective.
  2.  The objective forms a REAL, INVERTED, MAGNIFIED image A'B'
      inside the tube.
  3.  A'B' lies just INSIDE the focus Fe of the eyepiece, so the
      eyepiece acts as a SIMPLE MICROSCOPE.
  4.  The final image A''B'' is VIRTUAL, INVERTED and very much
      magnified, seen at D (or at infinity).
```

```
  +======================================================================+
  |                    MAGNIFYING POWER                                  |
  |                                                                      |
  |          M   =   m(objective)   x   m(eyepiece)                      |
  |                                                                      |
  |                     vo                                               |
  |          m(o)  =  ------                                             |
  |                     uo                                               |
  |                                                                      |
  |  CASE 1 — FINAL IMAGE AT THE NEAR POINT (D)                          |
  |                                                                      |
  |                   vo   +-        D  -+                               |
  |          M   =   ---- | 1  +   ----- |                               |
  |                   uo   +-        fe -+                               |
  |                                                                      |
  |  CASE 2 — FINAL IMAGE AT INFINITY (normal adjustment, relaxed eye)   |
  |                                                                      |
  |                   vo        D                                        |
  |          M   =   ----  x  -----                                      |
  |                   uo        fe                                       |
  |                                                                      |
  |  USEFUL APPROXIMATION when the tube is long                          |
  |                                                                      |
  |                    L         D                                       |
  |          M   ~=   ----  x  -----                                     |
  |                    fo        fe                                      |
  |                                                                      |
  |  LENGTH OF THE TUBE                                                  |
  |                                                                      |
  |          L   =   vo   +   ue           (ue = eyepiece object dist.)  |
  |          L   =   vo   +   fe           (when image is at infinity)   |
  +======================================================================+
```

```
  TO GET A HIGH MAGNIFICATION:   make fo SMALL  and  fe SMALL.
```

### WORKED EXAMPLE 19.1
A compound microscope has an objective of focal length 1 cm and an eyepiece of
focal length 5 cm. An object is placed 1.2 cm from the objective. Find the
magnifying power when the final image is at the near point (D = 25 cm).

```
  STEP 1  Find vo using the lens formula for the objective.
          uo = -1.2 cm , fo = +1 cm

        1     1     1              1      1        1
       --- - --- = ---   ->       --- =  --- + -------
        vo    uo    fo             vo     1     (-1.2)

        1              1        1.2 - 1        0.2         1
       ---  =  1  -  -----  =  ---------  =  --------  =  ----
        vo            1.2         1.2          1.2          6

                 vo  =  6 cm

  STEP 2  Magnifying power (image at D)

                 vo   +-       D  -+       6    +-      25 -+
        M   =   ---- | 1  +  ----- |  =  -----  | 1  +  --- |
                 uo   +-       fe -+      1.2   +-       5 -+

            =   5  x  ( 1 + 5 )   =   5 x 6   =   30

  STEP 3  Length of the tube:  first find ue for the eyepiece.
          ve = -25 cm , fe = +5 cm

        1      1      1          1        1        -1 - 5       -6
       ---  = ---- - ----  =   ----- -  -----  =  --------  =  ------
        ue     ve     fe       (-25)      5          25          25

                 ue  =  -25/6  =  -4.17 cm

        L  =  vo  +  | ue |  =  6  +  4.17  =  10.17 cm
```

---

# TOPIC 20 — The ASTRONOMICAL TELESCOPE  *** 8-mark question ***

Used to look at very DISTANT objects (stars, planets). Objective has a **LARGE**
focal length; eyepiece has a **SMALL** focal length.

```
   ASTRONOMICAL TELESCOPE — NORMAL ADJUSTMENT (final image at infinity)

     parallel rays        objective                    eyepiece
     from a distant         /\                           /\
     object                /  \                         /  \
   ==================>    |    |                       |    |
   ------------------>----|    |----------+------------|    |-------->
   ==================>    |    |     Fo   |   Fe       |    |    to the
                           \  /           |             \  /      eye
                            \/         A' |              \/
                                          | B'      (the final image
                                          |          is at INFINITY)
                                    (real, inverted,
                                     diminished image
                                     formed at the common
                                     focus of both lenses)

              |<----------- fo ---------->|<---- fe ---->|
              |<------------- L = fo + fe --------------->|
```

```
  HOW IT WORKS

  1.  The distant object sends PARALLEL rays.
  2.  The objective forms a real, inverted, diminished image A'B'
      at its focus Fo.
  3.  A'B' is arranged to lie exactly AT the focus Fe of the eyepiece.
  4.  The eyepiece then sends out parallel rays, so the FINAL image is
      at INFINITY — the eye is completely relaxed.
      The final image is VIRTUAL, INVERTED and MAGNIFIED (in angle).
```

```
  +======================================================================+
  |                                                                      |
  |  CASE 1 — NORMAL ADJUSTMENT (final image at INFINITY)                |
  |                                                                      |
  |                    fo                                                |
  |          M   =   ------                 L   =   fo  +  fe            |
  |                    fe                                                |
  |                                                                      |
  |  CASE 2 — FINAL IMAGE AT THE NEAR POINT D                            |
  |                                                                      |
  |                    fo   +-        fe -+                              |
  |          M   =   ------ | 1  +  ----- |         L   =   fo  +  ue    |
  |                    fe   +-        D  -+                              |
  |                                                                      |
  |  The MINUS sign is often written in front of M to show that the      |
  |  image is INVERTED.                                                  |
  +======================================================================+
```

```
  FOR A GOOD TELESCOPE

  *  fo should be LARGE and fe should be SMALL  ->  high magnification
  *  the objective should have a LARGE APERTURE ->  more light gathered,
     brighter image and better resolving power
```

```
  COMPOUND MICROSCOPE vs ASTRONOMICAL TELESCOPE
  +----------------------+---------------------------+---------------------+
  |                      |  COMPOUND MICROSCOPE      |  TELESCOPE          |
  +----------------------+---------------------------+---------------------+
  |  Used for            |  very SMALL nearby objects|  very FAR objects   |
  |  Objective f (fo)    |  VERY SMALL               |  VERY LARGE         |
  |  Objective aperture  |  small                    |  LARGE              |
  |  Object position     |  just beyond Fo           |  at infinity        |
  |  Magnifying power    |  (vo/uo)(1 + D/fe)        |  fo / fe            |
  |  Tube length         |  vo + ue                  |  fo + fe            |
  +----------------------+---------------------------+---------------------+
```

### WORKED EXAMPLE 20.1
An astronomical telescope has an objective of focal length 100 cm and an
eyepiece of focal length 5 cm. Find the magnifying power and the length of the
telescope in normal adjustment.

```
              fo       100
     M  =   ------  = -----  =  20
              fe        5

     L  =   fo + fe  =  100 + 5  =  105 cm
```

### WORKED EXAMPLE 20.2
For the same telescope, find M when the final image is at the near point
(D = 25 cm).

```
             fo   +-      fe -+      100   +-       5  -+
     M  =  ------ | 1 +  ---- |  =  ----- | 1  +  ---- |
             fe   +-      D  -+       5    +-      25  -+

         =  20 x ( 1 + 0.2 )  =  20 x 1.2  =  24
```

---

# TOPIC 21 — The human eye and defects of vision

```
   THE HUMAN EYE (simplified)

              CORNEA
                |
             ___|___
           /'       ` \                          RETINA
          |  \  /      |                            |
   light  |   ||       |                            v
   ------>|   ||  <----+-- CRYSTALLINE LENS   ......|
   ------>|   ||       |                      ......|
          |  /  \      |                            |
           \ ___ __ __/
                |
              IRIS + PUPIL (controls how much light enters)

   *  The eye lens is a CONVEX lens made of flexible tissue.
   *  CILIARY MUSCLES change its focal length so that objects at
      different distances are focused on the retina.
      This is called ACCOMMODATION.
   *  NEAR POINT  =  25 cm  (least distance of distinct vision, D)
   *  FAR POINT   =  INFINITY  for a normal eye
```

## MYOPIA (short-sightedness)

```
   PROBLEM: distant objects look blurred. The image forms IN FRONT
            of the retina.

   Causes:  the eyeball is too LONG, or the eye lens is too POWERFUL.

   BEFORE CORRECTION                     AFTER CORRECTION

   parallel rays    ___                  parallel rays   ) (   ___
   ============>  /    \                 ============>   ) (  /   \
   ------------>  |  x  |                ------------>   ) (  |  x |
   ============>  \    /                 ============>   ) (  \   /
                    ^ image forms                          ^      ^
                    | BEFORE the retina             CONCAVE LENS  image now
                                                    (diverges the ON the retina
                                                     rays first)

   CORRECTION:  a CONCAVE (diverging) lens.

                         1
       Focal length  f = ---- ... in practice   f  =  -( far point distance )
                          d
       Power  P  is NEGATIVE.
```

## HYPERMETROPIA (long-sightedness)

```
   PROBLEM: nearby objects look blurred. The image forms BEHIND
            the retina.

   Causes:  the eyeball is too SHORT, or the eye lens is too WEAK.

   BEFORE CORRECTION                     AFTER CORRECTION

           ___                                     /\   ___
         /    \                                   /  \ /   \
   ---->  |    |  ...x                 ---->     |    | |  x |
         \    /       ^                          \  /  \   /
                      | image would form            \/     ^
                      | BEHIND the retina       CONVEX LENS |
                                              (converges first)  image now
                                                              ON the retina

   CORRECTION:  a CONVEX (converging) lens.

                             D  x  N
       Focal length  f  =  ------------      D = 25 cm
                             N  -  D         N = the person's near point

       Power  P  is POSITIVE.
```

```
  TWO MORE DEFECTS (one line each)

  ASTIGMATISM   the cornea is not perfectly spherical, so the person
                cannot focus horizontal and vertical lines at the same
                time.  CORRECTION: a CYLINDRICAL lens.

  PRESBYOPIA    with age the ciliary muscles weaken and the near point
                moves away.  CORRECTION: BIFOCAL lenses (concave upper
                part, convex lower part).
```

### WORKED EXAMPLE 21.1
A person cannot see objects beyond 80 cm clearly. What lens should he use?

```
  This is MYOPIA. The far point is 80 cm.
  The lens must make an object at infinity appear at 80 cm.

        u = infinity ,  v = -80 cm

        1     1     1        1         1            1
       --- - --- = ---  ->  ------ - -------- =  -------
        v     u     f       (-80)    infinity       f

                 f  =  -80 cm  =  -0.8 m

              1        1
        P  = ---  =  ------  =  -1.25 D        (CONCAVE lens)
              f       (-0.8)
```

### WORKED EXAMPLE 21.2
A person's near point is 50 cm. What spectacles does he need to read at 25 cm?

```
  This is HYPERMETROPIA.
  The lens must make an object at 25 cm appear at 50 cm.

        u = -25 cm ,  v = -50 cm

        1     1     1          1        1         -1  +  2        1
       --- - --- = ---  ->   ------ - ------  =  ----------  =  ------
        v     u     f        (-50)    (-25)          50           50

                 f  =  +50 cm  =  +0.5 m

              1        1
        P  = ---  =  -----  =  +2 D            (CONVEX lens)
              f       0.5
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  +======================================================================+
  |                                                                      |
  |  [ ]   Did I write  u  as a NEGATIVE number in EVERY numerical?      |
  |                                                                      |
  |  [ ]   Did I use  1/v + 1/u = 1/f  for MIRRORS                       |
  |        and         1/v - 1/u = 1/f  for LENSES?                      |
  |                                                                      |
  |  [ ]   Is f NEGATIVE for a concave MIRROR and a concave LENS,        |
  |        POSITIVE for a convex MIRROR and a convex LENS?               |
  |                                                                      |
  |  [ ]   Did I use  m = -v/u  for mirrors and  m = v/u  for lenses?    |
  |                                                                      |
  |  [ ]   After getting v, did I say in WORDS whether the image is      |
  |        real or virtual, erect or inverted, magnified or diminished?  |
  |                                                                      |
  |  [ ]   In every ray diagram, did I put ARROWHEADS showing the        |
  |        direction of the light?                                       |
  |                                                                      |
  |  [ ]   In every ray diagram, did I LABEL P, F, C (or O, F, 2F)?      |
  |                                                                      |
  |  [ ]   Did I convert f into METRES before computing power P?         |
  |                                                                      |
  |  [ ]   In the prism, did I check whether the question is at          |
  |        MINIMUM DEVIATION before using the prism formula?             |
  |                                                                      |
  |  [ ]   For TIR, did I state BOTH conditions (denser to rarer,        |
  |        and i > C)?                                                   |
  |                                                                      |
  |  [ ]   In the microscope / telescope answer, did I DRAW the ray      |
  |        diagram AND write the formula AND label the tube length?      |
  |                                                                      |
  |  [ ]   Did I write the correct UNIT next to every final answer?      |
  |                                                                      |
  +======================================================================+
```

**The single biggest source of lost marks in this chapter is the sign
convention. Fix that one thing and your score jumps immediately.**
