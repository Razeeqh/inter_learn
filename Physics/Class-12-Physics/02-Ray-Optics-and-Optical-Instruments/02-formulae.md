# Ray Optics and Optical Instruments — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.

Everything in this chapter obeys **one sign convention**. It is printed in
section 2. Learn that first, then the rest is just substitution.

---

# 1. REFLECTION

```
  +----------------------------------------------------------------+
  |                                                                |
  |   LAWS OF REFLECTION                                           |
  |                                                                |
  |       angle of incidence   i   =   angle of reflection   r      |
  |                                                                |
  |       incident ray, reflected ray and normal are COPLANAR      |
  |                                                                |
  +----------------------------------------------------------------+
```

```
  +----------------------------------------------------------------+
  |   Mirror rotated by theta  ->  reflected ray turns by 2 theta   |
  |                                                                |
  |   Angle between incident and reflected rays  =  i + r  =  2 i   |
  |                                                                |
  |   Angle with the SURFACE = 90 - (angle with the NORMAL)         |
  +----------------------------------------------------------------+
```

## Images by two inclined mirrors

```
                     360
       Compute  N = ------      (a = angle between the mirrors, in degrees)
                      a

  +----------------------------+---------------------------------------+
  |  N is EVEN                 |   n  =  N - 1                         |
  |  N is ODD, object ON       |   n  =  N - 1                         |
  |  the bisector              |                                       |
  |  N is ODD, object OFF      |   n  =  N                             |
  |  the bisector              |                                       |
  |  N is a FRACTION           |   n  =  integer part of N             |
  |  a = 0 (parallel mirrors)  |   n  =  INFINITE                      |
  +----------------------------+---------------------------------------+
```

| Formula | When to use |
|---|---|
| `i = r` | any reflection question |
| `2 theta` turn | mirror is rotated |
| `n = 360/a - 1` | two inclined mirrors, N even |
| minimum mirror height `= h / 2` | a person seeing his full height in a plane mirror |

---

# 2. THE CARTESIAN SIGN CONVENTION  *** learn this FIRST ***

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
  |          NEGATIVE           |            POSITIVE                    |
  |          distances          |            distances                   |
  |                             |                                        |
  |                             v                                        |
  |                        - heights                                     |
  |                                                                      |
  |   1.  Measure ALL distances from the POLE P (mirror) or the           |
  |       OPTICAL CENTRE O (lens).                                        |
  |   2.  Light always travels LEFT to RIGHT.                             |
  |   3.  Along the light  ->  +          Against the light  ->  -        |
  |   4.  Above the axis   ->  +          Below the axis     ->  -        |
  +======================================================================+
```

```
  +---------------------------+-----------------------------------------+
  |  QUANTITY                 |  SIGN                                   |
  +---------------------------+-----------------------------------------+
  |  Object distance u        |  ALWAYS NEGATIVE                        |
  |  Object height h          |  positive                               |
  |  f, CONCAVE mirror        |  NEGATIVE       R also negative         |
  |  f, CONVEX  mirror        |  POSITIVE       R also positive         |
  |  f, CONVEX  lens          |  POSITIVE                               |
  |  f, CONCAVE lens          |  NEGATIVE                               |
  |  v, MIRROR, real image    |  NEGATIVE  (image in FRONT of mirror)   |
  |  v, MIRROR, virtual image |  POSITIVE  (image BEHIND mirror)        |
  |  v, LENS, real image      |  POSITIVE  (image BEHIND lens)          |
  |  v, LENS, virtual image   |  NEGATIVE  (image on object's side)     |
  |  h', inverted image       |  NEGATIVE                               |
  |  h', erect image          |  POSITIVE                               |
  +---------------------------+-----------------------------------------+
```

---

# 3. SPHERICAL MIRRORS

```
  +======================================================================+
  |                                                                      |
  |     MIRROR FORMULA                     MAGNIFICATION                 |
  |                                                                      |
  |       1     1     1                        h'      -v                |
  |      --- + --- = ---                 m  =  ---  =  ----              |
  |       v     u     f                         h        u               |
  |                                                                      |
  |                     R                                                |
  |             f  =  -----                                              |
  |                     2                                                |
  |                                                                      |
  +======================================================================+
```

## Other useful mirror forms

```
                 f            f  -  v
        m  =  --------   =   ---------
               f  -  u           f


                       u v
        f   =      -----------
                    u  +  v


  For a REAL image formed by a concave mirror, if the object and the
  image are both real:      the MINIMUM distance between object and
  image is  4f  (both at C).
```

| Formula | When to use |
|---|---|
| `1/v + 1/u = 1/f` | any mirror numerical |
| `f = R/2` | R given, f wanted (or the reverse) |
| `m = -v/u` | size / nature of the image |
| `m = f/(f-u)` | when v is not asked for |
| `h' = m h` | image height wanted |

---

# 4. REFRACTION AND REFRACTIVE INDEX

```
  +======================================================================+
  |                                                                      |
  |   SNELL'S LAW                sin i                                   |
  |                             -------  =  mu                           |
  |                              sin r         21                        |
  |                                                                      |
  |   symmetric form         mu   sin i   =   mu   sin r                 |
  |                            1                2                        |
  |                                                                      |
  |   ABSOLUTE refractive          c        speed in vacuum              |
  |   index                mu  =  ---  =  ------------------             |
  |                                v        speed in medium              |
  |                                                                      |
  |   RELATIVE index          mu        v          lambda                |
  |                             2        1               1               |
  |               mu     =   ------  =  ----  =  ---------               |
  |                 21        mu         v          lambda               |
  |                             1          2              2              |
  |                                                                      |
  |                     mu    x  mu    =   1                             |
  |                       21       12                                    |
  +======================================================================+
```

```
  FACTS
  *  mu has no units, no dimensions.
  *  mu > 1 always.
  *  Frequency does NOT change on refraction. Speed and wavelength DO.
  *  mu(violet) > mu(red)      lambda(violet) < lambda(red)
```

```
  STANDARD VALUES
  +--------------+---------+---------------------+
  |  MEDIUM      |   mu    |  CRITICAL ANGLE C   |
  +--------------+---------+---------------------+
  |  Air/vacuum  |  1.00   |         -           |
  |  Ice         |  1.31   |     about 50 deg    |
  |  Water       |  1.33   |     about 49 deg    |
  |  Glass       |  1.50   |     about 42 deg    |
  |  Diamond     |  2.42   |     about 24 deg    |
  +--------------+---------+---------------------+
```

| Formula | When to use |
|---|---|
| `mu1 sin i = mu2 sin r` | ray crossing any plane boundary |
| `mu = c/v` | speed of light in a medium |
| `mu21 = v1/v2 = lambda1/lambda2` | relative index from speeds or wavelengths |

---

# 5. GLASS SLAB, APPARENT DEPTH AND NORMAL SHIFT

```
  +======================================================================+
  |                                                                      |
  |   LATERAL SHIFT through a slab of thickness t                        |
  |                                                                      |
  |                       sin ( i  -  r )                                |
  |            d  =   t  ------------------                              |
  |                          cos r                                       |
  |                                                                      |
  |   for SMALL angles                                                   |
  |                              +-      1  -+                           |
  |            d  =   t   i      | 1  -  --- |     (i in radians)        |
  |                              +-      mu -+                           |
  |                                                                      |
  |   ------------------------------------------------------------       |
  |                                                                      |
  |                       REAL DEPTH                                     |
  |            mu   =  ------------------                                |
  |                     APPARENT DEPTH                                   |
  |                                                                      |
  |                                REAL DEPTH                            |
  |            APPARENT DEPTH  =  -------------                          |
  |                                    mu                                |
  |                                                                      |
  |   NORMAL SHIFT (apparent rise)                                       |
  |                              +-      1  -+                           |
  |            x  =   t          | 1  -  --- |                           |
  |                              +-      mu -+                           |
  |                                                                      |
  +======================================================================+
```

```
  For SEVERAL layers stacked one above another:

                              t1      t2      t3
        APPARENT DEPTH   =  ------ + ----- + ----- + ...
                             mu1     mu2     mu3
```

| Formula | When to use |
|---|---|
| `d = t sin(i-r)/cos r` | ray through a rectangular slab |
| `mu = real/apparent` | coin in water, print under a slab |
| `x = t(1 - 1/mu)` | "by how much does it appear to rise?" |
| stacked-layer sum | two or more liquids one over the other |

---

# 6. TOTAL INTERNAL REFLECTION

```
  +======================================================================+
  |                                                                      |
  |   CONDITIONS  (state BOTH)                                           |
  |     1.  light must go from a DENSER medium to a RARER medium          |
  |     2.  angle of incidence  i  >  critical angle  C                   |
  |                                                                      |
  |                       1                          1                   |
  |         mu   =   ----------          sin C  =  ------                |
  |                    sin C                          mu                 |
  |                                                                      |
  |   general pair of media                                              |
  |                          mu (rarer)                                  |
  |            sin C   =   --------------                                |
  |                          mu (denser)                                 |
  |                                                                      |
  |   NOTE:  larger mu  ->  smaller C  ->  TIR happens more easily        |
  +======================================================================+
```

```
  APPLICATIONS  (four marks — one line each)
  1.  MIRAGE                    hot rarer air near the road
  2.  SPARKLE OF DIAMOND        C is only 24 deg, so light bounces many times
  3.  OPTICAL FIBRE             core mu HIGHER than cladding mu
  4.  TOTALLY REFLECTING PRISM  45-90-45 glass prism, reflects 100 % of light
```

| Formula | When to use |
|---|---|
| `sin C = 1/mu` | critical angle from refractive index (medium in air) |
| `sin C = mu(rarer)/mu(denser)` | two media, neither of them air |
| depth of a luminous source `h`, radius of the bright circle `r = h tan C` | "light from a bulb at the bottom of a pond" |

---

# 7. REFRACTION AT A SINGLE SPHERICAL SURFACE

```
  +======================================================================+
  |                                                                      |
  |         mu       mu           mu   -  mu                             |
  |           2        1            2       1                            |
  |        ------  - ------  =  --------------                           |
  |          v         u              R                                  |
  |                                                                      |
  |   For a REFRACTING SPHERICAL SURFACE, light going from medium 1      |
  |   into medium 2.                                                     |
  |                                                                      |
  |   Special case, light from a point in a DENSER medium seen           |
  |   from outside (flat surface, R = infinity):                         |
  |                                                                      |
  |          v          1                                                |
  |        -----  =  ------      ->    apparent depth = real depth / mu  |
  |          u          mu                                               |
  +======================================================================+
```

| Formula | When to use |
|---|---|
| `mu2/v - mu1/u = (mu2-mu1)/R` | one curved boundary only (glass rod, sphere) |
| put `R = infinity` | flat boundary, gives the apparent-depth result |

---

# 8. LENSES

```
  +======================================================================+
  |                                                                      |
  |   LENS MAKER'S FORMULA                                               |
  |                                                                      |
  |         1                    +-   1        1    -+                   |
  |        ---   =   ( mu - 1 )  |  -----  -  ----- |                    |
  |         f                    +-   R1       R2   -+                   |
  |                                                                      |
  |   Lens in a LIQUID of index mu(L):   replace ( mu - 1 ) by           |
  |                                                                      |
  |                      +-   mu        -+                               |
  |                      |  --------  - 1|                               |
  |                      +-   mu(L)     -+                               |
  |                                                                      |
  |   ------------------------------------------------------------       |
  |                                                                      |
  |   THIN LENS FORMULA                    MAGNIFICATION                 |
  |                                                                      |
  |         1     1     1                        h'       v              |
  |        --- - --- = ---                 m  =  ---  =  ---             |
  |         v     u     f                         h        u             |
  |                                                                      |
  |   ------------------------------------------------------------       |
  |                                                                      |
  |   POWER                                                              |
  |                   1                        100                       |
  |          P  =  --------  dioptre   =   -------------                 |
  |                 f (in m)                f (in cm)                    |
  |                                                                      |
  +======================================================================+
```

## Signs of R1 and R2

```
  +-----------------------------+---------+---------+
  |  LENS                       |   R1    |   R2    |
  +-----------------------------+---------+---------+
  |  Biconvex                   |    +    |    -    |
  |  Biconcave                  |    -    |    +    |
  |  Plano-convex (flat first)  |   inf.  |    -    |
  |  Plano-convex (curved first)|    +    |   inf.  |
  |  Plano-concave (flat first) |   inf.  |    +    |
  |  Convexo-concave (meniscus) |    +    |    +    |
  +-----------------------------+---------+---------+
```

## Combination of lenses

```
  +======================================================================+
  |                                                                      |
  |   IN CONTACT                                                         |
  |          1        1        1                                         |
  |         ---  =   ----  +  ----  +  ...       P  =  P1 + P2 + ...     |
  |          F        f1       f2                                        |
  |                                                                      |
  |          m  =  m1  x  m2  x  ...                                     |
  |                                                                      |
  |   SEPARATED BY A DISTANCE d                                          |
  |          1        1        1            d                            |
  |         ---  =   ----  +  ----   -   --------                        |
  |          F        f1       f2          f1 f2                         |
  |                                                                      |
  |   LENS SILVERED ON ONE SIDE (acts as a mirror)                       |
  |          1        2        1                                         |
  |         ---  =   ----  +  ----                                       |
  |          F        f(L)     f(M)                                      |
  +======================================================================+
```

| Formula | When to use |
|---|---|
| `1/f = (mu-1)(1/R1 - 1/R2)` | radii or mu given, f wanted |
| `1/v - 1/u = 1/f` | any lens numerical |
| `m = v/u` | size / nature of the image |
| `P = 1/f` | dioptres asked, or spectacle power |
| `1/F = 1/f1 + 1/f2` | two lenses touching |
| `1/F = 1/f1 + 1/f2 - d/(f1 f2)` | two lenses separated by d |

---

# 9. PRISM

```
  +======================================================================+
  |                                                                      |
  |     A   =   r1  +  r2                                                |
  |                                                                      |
  |     A  +  D   =   i  +  e                                            |
  |                                                                      |
  |   AT MINIMUM DEVIATION:                                              |
  |         i = e         r1 = r2 = A/2          D = Dm                  |
  |         the ray inside the prism is PARALLEL to the base             |
  |                                                                      |
  |                          +-  A  +  Dm  -+                            |
  |                    sin   |  ----------  |                            |
  |                          +-      2     -+                            |
  |         mu   =    ---------------------------                        |
  |                              +-  A  -+                               |
  |                        sin   |  ---  |                               |
  |                              +-  2  -+                               |
  |                                                                      |
  |   THIN PRISM (small A):     D   =   ( mu - 1 ) A                     |
  |                                                                      |
  |   MAXIMUM value of A for a ray to pass through:  A  <=  2 C          |
  |                                                                      |
  +======================================================================+
```

```
   THE  i - D  GRAPH

     D
     ^
     |  \                                  /
     |   \                                /
     |    \                              /
     |     \___                      ___/
     |         \___              ___/
  Dm |.............\____________/
     |                    :
     +--------------------+--------------------> i
                        i = e

     Every D except Dm corresponds to TWO angles of incidence.
```

| Formula | When to use |
|---|---|
| `A = r1 + r2` | any prism problem |
| `A + D = i + e` | general prism, i and e both given |
| `mu = sin((A+Dm)/2)/sin(A/2)` | ONLY at minimum deviation |
| `D = (mu-1)A` | thin prism / small angle |
| `A <= 2C` | "for what angle does the ray emerge?" |

---

# 10. DISPERSION

```
  +======================================================================+
  |                                                                      |
  |   DEVIATION of a colour (thin prism)     D  =  ( mu  -  1 ) A        |
  |                                                                      |
  |   ANGULAR DISPERSION                                                 |
  |         theta   =   D(v)  -  D(r)   =   ( mu(v)  -  mu(r) )  A       |
  |                                                                      |
  |   MEAN DEVIATION                                                     |
  |                                          mu(v)  +  mu(r)             |
  |         D(y)  =  ( mu(y) - 1 ) A         mu(y) = --------------      |
  |                                                        2             |
  |                                                                      |
  |   DISPERSIVE POWER                                                   |
  |                                                                      |
  |               angular dispersion         mu(v)  -  mu(r)             |
  |     omega  =  -------------------   =   -------------------          |
  |                 mean deviation             mu(y)  -  1               |
  |                                                                      |
  |     omega has NO UNITS and depends ONLY on the MATERIAL.             |
  |                                                                      |
  +======================================================================+
```

```
  Order of colours in the spectrum (violet deviated MOST):
                V  I  B  G  Y  O  R
```

| Formula | When to use |
|---|---|
| `theta = (mu_v - mu_r) A` | angular dispersion asked |
| `omega = (mu_v - mu_r)/(mu_y - 1)` | dispersive power asked |
| `D = (mu-1)A` | deviation of one colour |

---

# 11. SCATTERING

```
  +----------------------------------------------------------------+
  |                                     1                          |
  |   RAYLEIGH'S LAW    I  is proportional to   -----------          |
  |                                              lambda^4          |
  |                                                                |
  |   valid when the scattering particle is MUCH SMALLER than       |
  |   the wavelength of the light.                                  |
  +----------------------------------------------------------------+
```

| Observation | Reason |
|---|---|
| Sky is blue | blue has short lambda, scattered ~16 times more than red |
| Setting Sun is red | long path, all the blue is scattered away |
| Sky is black in space | no atmosphere, so no scattering |
| Danger signals are red | red is scattered least, seen farthest |
| Clouds are white | droplets are large, all colours scattered equally |

---

# 12. OPTICAL INSTRUMENTS

## Simple microscope

```
  +----------------------------------------------------------------+
  |                                D                               |
  |   image at the NEAR POINT   m = 1  +  ---                       |
  |                                        f                       |
  |                                                                |
  |                                D                               |
  |   image at INFINITY         m  =  ---                           |
  |                                    f                           |
  |                                                                |
  |   D  =  25 cm  =  least distance of distinct vision            |
  +----------------------------------------------------------------+
```

## Compound microscope

```
  +======================================================================+
  |                                                                      |
  |   M   =   m(objective)  x  m(eyepiece)                               |
  |                                                                      |
  |   IMAGE AT THE NEAR POINT                                            |
  |                    vo   +-        D  -+                              |
  |          M   =   ------ | 1  +  ----- |                              |
  |                    uo   +-        fe -+                              |
  |                                                                      |
  |   IMAGE AT INFINITY (normal adjustment)                              |
  |                    vo         D                                      |
  |          M   =   ------  x  -----                                    |
  |                    uo         fe                                     |
  |                                                                      |
  |   LONG-TUBE APPROXIMATION                                            |
  |                     L         D                                      |
  |          M   ~=   ------  x  -----                                   |
  |                     fo        fe                                     |
  |                                                                      |
  |   TUBE LENGTH        L  =  vo  +  ue                                 |
  |                      L  =  vo  +  fe    (final image at infinity)    |
  |                                                                      |
  |   For high M:  make fo SMALL and fe SMALL.                           |
  +======================================================================+
```

## Astronomical telescope

```
  +======================================================================+
  |                                                                      |
  |   NORMAL ADJUSTMENT (final image at INFINITY)                        |
  |                                                                      |
  |                    fo                                                |
  |          M   =   ------             L   =   fo  +  fe                |
  |                    fe                                                |
  |                                                                      |
  |   FINAL IMAGE AT THE NEAR POINT D                                    |
  |                                                                      |
  |                    fo   +-        fe -+                              |
  |          M   =   ------ | 1  +  ----- |       L   =   fo  +  ue      |
  |                    fe   +-        D  -+                              |
  |                                                                      |
  |   For high M:  make fo LARGE and fe SMALL.                           |
  |   For a bright image: make the OBJECTIVE APERTURE LARGE.             |
  +======================================================================+
```

| Formula | When to use |
|---|---|
| `m = 1 + D/f` | magnifying glass, image at 25 cm |
| `m = D/f` | magnifying glass, relaxed eye |
| `M = (vo/uo)(1 + D/fe)` | compound microscope, near point |
| `M = (vo/uo)(D/fe)` | compound microscope, infinity |
| `L = vo + ue` | microscope tube length |
| `M = fo/fe` | telescope, normal adjustment |
| `L = fo + fe` | telescope tube length |
| `M = (fo/fe)(1 + fe/D)` | telescope, image at the near point |

---

# 13. THE HUMAN EYE AND ITS DEFECTS

```
  +----------------------------------------------------------------+
  |  Normal eye:   near point =  25 cm    far point = INFINITY      |
  +----------------------------------------------------------------+
```

```
  +==================+=================+===============+==============+
  |  DEFECT          |  WHAT FAILS     |  IMAGE FORMS  |  CORRECTION  |
  +==================+=================+===============+==============+
  |  MYOPIA          |  cannot see     |  IN FRONT of  |  CONCAVE     |
  |  (short sight)   |  distant things |  the retina   |  lens, P -ve |
  +------------------+-----------------+---------------+--------------+
  |  HYPERMETROPIA   |  cannot see     |  BEHIND the   |  CONVEX      |
  |  (long sight)    |  near things    |  retina       |  lens, P +ve |
  +------------------+-----------------+---------------+--------------+
  |  ASTIGMATISM     |  cornea not     |  blurred in   |  CYLINDRICAL |
  |                  |  spherical      |  one direction|  lens        |
  +------------------+-----------------+---------------+--------------+
  |  PRESBYOPIA      |  ciliary muscle |  near point   |  BIFOCAL     |
  |                  |  weakens (age)  |  moves away   |  lens        |
  +------------------+-----------------+---------------+--------------+
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |   MYOPIA         f  =  -  ( far point distance )               |
  |                                                                |
  |                          D  x  N                               |
  |   HYPERMETROPIA  f  =  -----------      D = 25 cm              |
  |                          N  -  D        N = the person's       |
  |                                             near point         |
  +----------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +====+===============================================================+
  | 1  |   u is ALWAYS NEGATIVE.                                       |
  |    |   concave mirror f -ve, convex mirror f +ve                   |
  |    |   convex lens f +ve, concave lens f -ve                       |
  +----+---------------------------------------------------------------+
  | 2  |   MIRROR      1/v  +  1/u  =  1/f                             |
  +----+---------------------------------------------------------------+
  | 3  |   LENS        1/v  -  1/u  =  1/f                             |
  +----+---------------------------------------------------------------+
  | 4  |   m = -v/u  (mirror)          m = v/u  (lens)                 |
  +----+---------------------------------------------------------------+
  | 5  |   f  =  R / 2                                                 |
  +----+---------------------------------------------------------------+
  | 6  |   mu  =  sin i / sin r   =   c / v                            |
  +----+---------------------------------------------------------------+
  | 7  |   mu  =  real depth / apparent depth                          |
  |    |   normal shift  x = t ( 1 - 1/mu )                            |
  +----+---------------------------------------------------------------+
  | 8  |   sin C  =  1 / mu                                            |
  +----+---------------------------------------------------------------+
  | 9  |   1/f  =  ( mu - 1 ) ( 1/R1  -  1/R2 )                        |
  +----+---------------------------------------------------------------+
  | 10 |   P = 1/f (metres)      1/F = 1/f1 + 1/f2      P = P1 + P2    |
  +----+---------------------------------------------------------------+
  | 11 |   A + D = i + e         A = r1 + r2                           |
  |    |   mu = sin((A + Dm)/2) / sin(A/2)                             |
  +----+---------------------------------------------------------------+
  | 12 |   MICROSCOPE   M = (vo/uo)(1 + D/fe)      L = vo + ue          |
  |    |   TELESCOPE    M = fo/fe                  L = fo + fe          |
  +====+===============================================================+
```

**If you know only these twelve lines you can attempt every numerical in this
chapter. Write them out five times tonight.**
