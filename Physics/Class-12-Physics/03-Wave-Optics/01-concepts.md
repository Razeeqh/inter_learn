# Wave Optics — Concepts Explained Simply

Read this slowly, with a pencil in your hand. Every topic goes:
**picture -> the rule -> a worked example.**

In the previous chapter light was a **ray** — a straight arrow. That model works
for mirrors and lenses, but it fails completely for three everyday facts:

```
  *  Light BENDS round the edge of a very narrow slit.
  *  Two beams of light can ADD UP TO DARKNESS.
  *  Light from a blue sky can be BLOCKED by a pair of sunglasses turned
     the right way, and passed when turned 90 degrees.
```

A bullet cannot do any of those. A **wave** can. So in this chapter we throw
away the bullet and use the wave.

---

# TOPIC 1 — The wave theory of light (a short history you can quote)

```
  +---------------------------------------------------------------------+
  |  NEWTON (1670s)  -  CORPUSCULAR theory                              |
  |     Light = a stream of tiny particles ("corpuscles").              |
  |     Explains:  straight-line travel, reflection, refraction.        |
  |     FAILS on:  interference, diffraction, polarisation.             |
  |     Also predicted light travels FASTER in water than in air —      |
  |     which experiment later proved WRONG.                            |
  +---------------------------------------------------------------------+
  |  HUYGENS (1678)  -  WAVE theory                                      |
  |     Light = a wave spreading out from a source.                     |
  |     Explains:  reflection, refraction, interference, diffraction.   |
  |     Correctly predicted light travels SLOWER in water.              |
  +---------------------------------------------------------------------+
  |  YOUNG (1801)    -  double slit experiment                           |
  |     Produced actual bright and dark fringes.                        |
  |     This is the experiment that PROVED light is a wave.             |
  +---------------------------------------------------------------------+
  |  FRESNEL, MAXWELL, HERTZ                                             |
  |     Light is an ELECTROMAGNETIC wave, TRANSVERSE, needing no medium, |
  |     travelling at c = 3 x 10^8 m/s in vacuum.                        |
  +---------------------------------------------------------------------+
```

> **TRAP:** if a 2-mark question asks "which phenomena could Newton's theory
> NOT explain?", the three-word answer is **interference, diffraction,
> polarisation**. Write all three — one mark each is common.

---

# TOPIC 2 — Wavefront: what it is and its three types

Drop a stone in still water. Circular ripples spread out. Pick any one ripple
crest — every point on that crest is doing exactly the same thing at the same
moment (all going up together). That crest is a **wavefront**.

```
  +=====================================================================+
  |  DEFINITION                                                          |
  |                                                                      |
  |  A WAVEFRONT is the LOCUS of all the points of a medium which are    |
  |  vibrating in the SAME PHASE.                                        |
  |                                                                      |
  |  Equivalently: it is a surface on which the light has travelled the  |
  |  same optical path from the source, so all points started together.  |
  +=====================================================================+
```

## The three types of wavefront

### (a) SPHERICAL wavefront — from a POINT source

```
                        .  .  .  .  .
                    .                   .
                 .        .  .  .  .       .
               .       .              .      .
              .      .      .  .  .     .     .
             .      .     .         .    .     .
             .      .    .    (S)   .    .     .
             .      .     .    o   .     .     .
              .      .      . . . .     .     .
               .       .              .      .
                 .        . . . . . .      .
                    .                   .
                        .  .  .  .  .

     S = point source.  Each circle is one wavefront.
     They are concentric SPHERES of increasing radius.
     Amplitude falls off as 1/r,  so intensity falls off as 1/r^2.
```

### (b) CYLINDRICAL wavefront — from a LINE source (a slit / a thin filament)

```
       LINE SOURCE (a long narrow slit, seen end-on it is a point,
       seen from the side it is a line)

        |                                             |
        |     +---------------------------------+     |
        |     |  +---------------------------+  |     |
        |     |  |  +---------------------+  |  |     |
        |  S  |  |  |                     |  |  |     |
      ==|=====|==|==|=====================|==|==|=====|==   <- the line source
        |     |  |  |                     |  |  |     |
        |     |  |  +---------------------+  |  |     |
        |     |  +---------------------------+  |     |
        |     +---------------------------------+     |
        |                                             |

     The wavefronts are coaxial CYLINDERS around the line source.
     Amplitude falls off as 1/sqrt(r),  intensity as 1/r.
```

### (c) PLANE wavefront — from a source at INFINITY (or a very distant source)

```
     A point source is so far away that a small patch of its huge sphere
     looks FLAT — exactly as the Earth looks flat when you stand on it.

        |     |     |     |     |     |     |
        |     |     |     |     |     |     |        ------>  direction
        |     |     |     |     |     |     |                 of travel
        |     |     |     |     |     |     |
        |     |     |     |     |     |     |        (rays are parallel
        |     |     |     |     |     |     |         straight arrows)
        |     |     |     |     |     |     |
        |     |     |     |     |     |     |

     Sunlight reaching the Earth, and the beam from a collimator or a
     laser, are treated as PLANE wavefronts.
     Amplitude does not fall off (no spreading).
```

## A RAY is the NORMAL to the wavefront

```
  +=====================================================================+
  |  A RAY is a line drawn PERPENDICULAR (normal) to the wavefront,     |
  |  in the direction in which the wave travels.                        |
  +=====================================================================+

       SPHERICAL WAVEFRONT              PLANE WAVEFRONT

              ^  ^  ^                    |  |  |  |  |
           <--\  |  /-->                 |  |  |  |  |
              . . . .                    |  |  |  |  |
            .   S o   .                  |  |  |  |  |
              . . . .                    v  v  v  v  v
           <--/  |  \-->                 (rays PARALLEL)
              v  v  v
       (rays DIVERGE radially)
```

So "ray optics" is not wrong — it is just the **shortcut version** of wave
optics that works when the obstacles are much bigger than the wavelength.

### WORKED EXAMPLE 2.1
What is the shape of the wavefront in each case?
(i) light from a point source, (ii) light emerging from a convex lens when a
point source is at its focus, (iii) the portion of a wavefront of light from a
distant star intercepted by the Earth.

```
  (i)   SPHERICAL  (diverging spheres centred on the source)

  (ii)  PLANE      (a source at the focus produces a parallel beam,
                    and parallel rays mean a plane wavefront)

  (iii) PLANE      (the star is so far away that the sphere's curvature
                    over the size of the Earth is negligible)
```

> **TRAP:** students write "circular". In 3-D it is **spherical**. Write
> spherical, cylindrical, plane — those are the three examinable words.

---

# TOPIC 3 — HUYGENS' PRINCIPLE

This is the engine of the first half of the chapter. Learn the statement
**word for word**.

```
  +=====================================================================+
  |                        HUYGENS' PRINCIPLE                            |
  |                                                                      |
  |  1.  EVERY point on a given wavefront acts as a fresh source of      |
  |      new disturbances, called SECONDARY WAVELETS, which travel out   |
  |      in all directions with the speed of light in that medium.       |
  |                                                                      |
  |  2.  The FORWARD ENVELOPE (the common tangent surface) of all these  |
  |      secondary wavelets, drawn after a time t, gives the NEW         |
  |      position of the wavefront at that instant.                      |
  +=====================================================================+
```

## The construction, step by step

```
  CONSTRUCTION FOR A PLANE WAVEFRONT

    AB  = the wavefront NOW (at time t = 0)
    A'B'= the wavefront after time t

         A |                                | A'
           |  .-.    .-.    .-.    .-.      |
           |(   )  (   )  (   )  (   )      |
           | 1 * -> 2 * -> 3 * -> 4 *       |
           |(   )  (   )  (   )  (   )      |
           |  '-'    '-'    '-'    '-'      |
         B |                                | B'

         |<---------- v t ---------------->|

    STEP 1  Take many points 1, 2, 3, 4 ... on the wavefront AB.
    STEP 2  With each point as centre, draw a sphere (a circle on paper)
            of radius  r = v t,  where v is the speed of light in the
            medium.  These are the SECONDARY WAVELETS.
    STEP 3  Draw the common tangent A'B' touching all of them on the
            FORWARD side.
    STEP 4  A'B' is the new wavefront.  It is again PLANE and it has
            moved forward a distance v t.
```

```
  CONSTRUCTION FOR A SPHERICAL WAVEFRONT

                                    _ - - - _
                          _ - -   .           .   - - _
                    _ -        .   (wavelets)    .      - _
                 -          .                       .       -
       A  . - - - - - .  . - - .                  . - - .  . - - - - - . A'
        .           .        .                        .        .        .
       .    S      .        .          radius = v t    .        .        .
       .    o - - - - - - - - - - - - - - - - - - - - - - - - - >        .
       .           .        .                        .        .         .
        .           .        . - - .              . - - .    .          .
       B  . - - - - - .        .                       .    . - - - - - . B'
                 -          .                       .        -
                    _ -        .                 .        - _
                          _ - -   .   .   .   .     - - _

     AB  = spherical wavefront of radius R, centred on the source S
     A'B'= new spherical wavefront of radius R + v t, SAME centre S

     The envelope of the wavelets is again a SPHERE, so a spherical
     wavefront stays spherical — it just grows.
```

## The one weakness of the principle (and its fix)

```
  PROBLEM   The wavelets are drawn as complete spheres, so they also have a
            BACKWARD envelope.  That would mean a wave also travels
            backwards, which never happens.

  FIX       Huygens simply asserted that the intensity of a secondary
            wavelet is maximum in the FORWARD direction and ZERO in the
            BACKWARD direction.  (Modern theory supplies the obliquity
            factor (1 + cos theta)/2 which is 1 forwards and 0 backwards.)
```

### WORKED EXAMPLE 3.1
Using Huygens' construction, show what happens to a plane wavefront that passes
through a convex lens.

```
  The middle of the lens is THICK, the edges are THIN.
  Light travels SLOWER in glass, so the middle of the wavefront is
  delayed more than the edges.

     PLANE WAVEFRONT      LENS         EMERGING WAVEFRONT
        entering                        (curved, CONVERGING)

        |                 ( )                   \
        |                (   )                   )
        |     ----->     (   )     ----->       )      ----> F
        |                (   )                   )
        |                 ( )                   /

  The emergent wavefront is SPHERICAL and converges to the focus F.
  A concave lens does the opposite: the edges are delayed more, so the
  emergent wavefront DIVERGES from the focus.
```

> **TRAP:** in every Huygens diagram you must **label the radius of each
> wavelet as `v t`** and say "common tangent". Those two labels usually
> carry a mark each.

---

# TOPIC 4 — Proof of the LAWS OF REFLECTION using Huygens' principle

This is an 8-mark long answer. Learn the diagram first, the algebra second.

## The diagram

```
        Incident plane wavefront AB hits a plane mirror XY.

              A
               \  \  \                          /  /  /  C
                \  \  \                        /  /  /
                 \  \  \                      /  /  /
        incident  \  \  \                    /  /  /   reflected
        rays       \  \  \                  /  /  /    rays
                    \  \  \                /  /  /
                     \  \  \  B           /  /  /
                      \  \  \ |          /  /  /
                       \  \  \|         /  /  /
                        \  \  \        /  /  /
                    i    \  \  \  i   /  /  /   r
                          \  \  \    /  /  /
       XXXXXXXXXXXXXXXXXXXXXXXXXX\XX/XXXXXXXXXXXXXXXXXXXXXXXX
       X                          P     Q                   X   MIRROR XY
       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

       AB  =  incident wavefront   (A reaches the mirror at P first is
                                    NOT true — read the labels below)

    LABELLING USED IN THE PROOF
    ---------------------------
       AP  =  the ray from A that meets the mirror at P
       BQ  =  the ray from B that meets the mirror at Q
       A reaches P.  At that same instant B still has to travel BQ.
       While B travels BQ, the wavelet from P has grown to radius PC.
       CQ =  the reflected wavefront.

       i  =  angle of incidence   =  angle between AB and the mirror
                                  =  angle A P N  (N = normal at P)
       r  =  angle of reflection  =  angle between CQ and the mirror
```

A cleaner way to see the same triangles:

```
       Let the incident wavefront be the line  A B
       Let the reflected wavefront be the line C Q

                B
                 \
                  \  BQ = v t   (B travels this while P sends out a wavelet)
                   \
        ============\====================================
                    P \                    /  Q
                       \                  /
              radius PC = v t  (the wavelet from P)
                        \                /
                         C

       TRIANGLE  P B Q   and   TRIANGLE  P C Q   share PQ.
```

## The proof

```
  STEP 1   AB is the incident plane wavefront striking the mirror.
           The ray at A arrives at the mirror at the point P.

  STEP 2   At that instant, the other end B has still to cover the
           distance BQ to reach the mirror at Q.
           Time taken            t  =  BQ / c

  STEP 3   By Huygens' principle, P immediately becomes a source of a
           secondary wavelet.  In the SAME time t this wavelet expands
           in the SAME medium (air) into a sphere of radius

                        PC  =  c t  =  BQ                    ... (1)

  STEP 4   Draw QC as the tangent from Q to this sphere.
           QC is the REFLECTED WAVEFRONT.

  STEP 5   Compare the two right-angled triangles PBQ and PCQ.

              angle PBQ  =  angle PCQ  =  90 degrees
              PC         =  BQ                     from (1)
              PQ         =  PQ                     common hypotenuse

           Therefore     triangle PBQ  is CONGRUENT to  triangle PCQ
                         (RHS congruence).

  STEP 6   Hence the corresponding angles are equal:

                        angle BPQ  =  angle CQP

           But  angle BPQ = i  (angle of incidence, both measured from
           the mirror or equally both from the normal) and
                angle CQP = r  (angle of reflection).

  STEP 7   THEREFORE                i  =  r
           which is the FIRST LAW OF REFLECTION.

  STEP 8   The incident wavefront, the reflected wavefront and the
           mirror surface were all drawn in the plane of the paper, so
           the incident ray, the reflected ray and the normal all lie in
           ONE plane.  That is the SECOND LAW OF REFLECTION.
```

```
  +=====================================================================+
  |  THE TWO LAWS OF REFLECTION, PROVED                                  |
  |                                                                      |
  |   LAW 1   angle of incidence  i   =   angle of reflection  r         |
  |                                                                      |
  |   LAW 2   the incident ray, the reflected ray and the normal at the  |
  |           point of incidence all lie in the SAME PLANE               |
  +=====================================================================+
```

> **TRAP:** the whole proof rests on "the wavelet and the incoming ray
> travel in the **same medium**, so they cover **equal distances in equal
> times**". If you do not write that sentence you lose a mark.

---

# TOPIC 5 — Proof of the LAWS OF REFRACTION (Snell's law) using Huygens

This is the second favourite 8-mark long answer.

## The diagram

```
      MEDIUM 1  (rarer,   refractive index mu1, speed v1)
      MEDIUM 2  (denser,  refractive index mu2, speed v2)   with v2 < v1

              A
               \  \  \
                \  \  \        incident plane wavefront AB
                 \  \  \       (perpendicular to the incident rays)
                  \  \  \
                   \  \  \  B
                    \  \  \|
                 i   \  \  \|
                      \  \  \
       ================\=====\=========================================
                       P \    Q                    SURFACE XY
                          \    \
                     r     \     \                MEDIUM 2 (denser)
                            \      \
                             \       \  refracted wavefront  P' Q
                              \        \
                               C         (C is on the wavelet from P)

     BQ  = v1 t   -   distance B travels in medium 1 to reach the
                      surface at Q
     PC  = v2 t   -   radius of the secondary wavelet sent out by P
                      into medium 2 during the SAME time t

     Because v2 < v1,  PC < BQ, so the wavefront TILTS towards the
     normal — that is exactly why light bends towards the normal when
     it enters a denser medium.
```

## The proof

```
  STEP 1   AB is the incident plane wavefront in medium 1.
           The end A reaches the surface XY at P.

  STEP 2   The other end B still has to travel BQ in medium 1.

                        BQ  =  v1 t                          ... (1)

  STEP 3   At the same instant P starts a secondary wavelet, but now it
           spreads into MEDIUM 2, where the speed is v2. In the same
           time t its radius is

                        PC  =  v2 t                          ... (2)

  STEP 4   Draw the tangent from Q to this wavelet, touching it at C.
           QC is the REFRACTED WAVEFRONT.

  STEP 5   In right-angled triangle PBQ     (angle at B = 90 deg)

                                 BQ
                     sin i   =  ----                          ... (3)
                                 PQ

           In right-angled triangle PCQ     (angle at C = 90 deg)

                                 PC
                     sin r   =  ----                          ... (4)
                                 PQ

  STEP 6   Divide (3) by (4):

                 sin i        BQ / PQ        BQ        v1 t        v1
                -------  =  -----------  =  ----   =  ------  =  ------
                 sin r        PC / PQ        PC        v2 t        v2

  STEP 7   v1 and v2 are FIXED constants for the two media, so the ratio
           sin i / sin r is a CONSTANT.  That constant is written mu21,
           the refractive index of medium 2 with respect to medium 1.

                 +--------------------------------------------+
                 |     sin i        v1                         |
                 |    -------  =  ------  =  mu21  =  constant |
                 |     sin r        v2                         |
                 +--------------------------------------------+

           This is SNELL'S LAW — the FIRST LAW OF REFRACTION.

  STEP 8   As before, everything was drawn in one plane, so the incident
           ray, the refracted ray and the normal are COPLANAR — the
           SECOND LAW OF REFRACTION.
```

## Two extra results that fall straight out of this proof

```
  (a)  Since  mu1 = c / v1   and   mu2 = c / v2 ,

              v1        c / mu1        mu2
             ----  =  ----------  =  -------
              v2        c / mu2        mu1

       so     sin i        mu2
             -------  =  -------       i.e.    mu1 sin i  =  mu2 sin r
              sin r        mu1

       which is the general (both-media) form of Snell's law.

  (b)  DENSER medium  ->  smaller v  ->  smaller sin r  ->  smaller r
       So light entering a DENSER medium BENDS TOWARDS the normal.
       This also shows light travels SLOWER in a denser medium,
       proving Newton's corpuscular theory wrong.
```

### WORKED EXAMPLE 5.1
Light travels from air into glass of refractive index 1.5 at an angle of
incidence of 60 degrees. Find the angle of refraction and the speed of light in
the glass.

```
   mu1 sin i  =  mu2 sin r

   1 x sin 60  =  1.5 x sin r

           0.866  =  1.5 sin r

           sin r  =  0.866 / 1.5  =  0.577

               r  =  35.3 degrees        (bent TOWARDS the normal, correct)

   Speed in glass:
              c         3 x 10^8
       v  =  ----  =  ------------  =  2 x 10^8  m s^-1
              mu           1.5
```

---

# TOPIC 6 — What happens to frequency, wavelength and speed on refraction

This is asked as a 2-mark question almost every year.

```
  +=====================================================================+
  |   QUANTITY      IN AIR        IN A MEDIUM OF INDEX mu               |
  +=====================================================================+
  |                                                                      |
  |   frequency      nu             nu           <-- UNCHANGED           |
  |                                                                      |
  |                                  c                                   |
  |   speed          c              ---          <-- DECREASES           |
  |                                  mu                                  |
  |                                                                      |
  |                                 lam                                  |
  |   wavelength     lam           -----         <-- DECREASES           |
  |                                  mu                                  |
  |                                                                      |
  |   colour         same           same         <-- UNCHANGED           |
  |                                                                      |
  +=====================================================================+
```

## WHY does the frequency not change? (the exam answer)

```
  Frequency is decided ONLY by the SOURCE that produced the wave — it is
  the number of oscillations the source makes per second. The boundary
  between two media is a passive surface; it cannot create or destroy
  wave crests.

  Whatever number of crests arrive at the boundary per second must leave
  it per second — otherwise crests would pile up (or vanish) at the
  surface, which is impossible.

  Therefore   nu  is the SAME in both media.

  Then, since   v = nu lam ,
  a smaller v with the same nu forces a smaller lam.
```

```
   PICTURE OF THE SAME IDEA

   AIR (fast, long wavelength)   |   GLASS (slow, short wavelength)
                                 |
   |    |    |    |    |    |    |  |  |  |  |  |  |  |  |  |
   |    |    |    |    |    |    |  |  |  |  |  |  |  |  |  |
   |    |    |    |    |    |    |  |  |  |  |  |  |  |  |  |
   <--lam--->                    |  <lam/mu>
                                 |
   The crests get SQUEEZED TOGETHER, but they still cross the boundary
   at the same rate.  Same rate = same frequency.
```

### WORKED EXAMPLE 6.1
Light of wavelength 600 nm in air enters a medium of refractive index 1.5.
Find (i) its frequency in air, (ii) its speed in the medium, (iii) its
wavelength in the medium, (iv) its frequency in the medium.

```
  (i)         c          3 x 10^8
       nu = -----  =  --------------  =  5 x 10^14  Hz
             lam       600 x 10^-9

  (ii)        c        3 x 10^8
       v  = ------  = ----------  =  2 x 10^8  m s^-1
             mu          1.5

  (iii)        lam        600
       lam' = ------  =  -----  =  400 nm
                mu        1.5

  (iv)  frequency in the medium  =  5 x 10^14 Hz   -   UNCHANGED

  CHECK:  v = nu lam'  =  5 x 10^14 x 400 x 10^-9  =  2 x 10^8  OK
```

> **TRAP:** "Does the colour of light change inside water?" **NO.** Colour is
> fixed by frequency, and frequency does not change. The wavelength does
> change, but that alone does not change the colour we perceive.

---

# TOPIC 7 — Doppler effect in light (outline only, but examinable)

You already know the sound version: an approaching train horn sounds
higher-pitched. Light does the same, but the shift is tiny because c is huge.

```
  +=====================================================================+
  |   For a source moving with speed v ALONG the line of sight, with     |
  |   v much smaller than c :                                            |
  |                                                                      |
  |          d(nu)          v                d(lam)          v           |
  |         -------  =  -  ---              --------  =  +  ---          |
  |           nu            c                  lam            c          |
  |                                                                      |
  |   (the sign convention above is for a RECEDING source; v is the      |
  |    RADIAL speed, i.e. the component along the line joining source    |
  |    and observer)                                                     |
  +=====================================================================+
```

```
  SOURCE MOVING AWAY  ->  wavelength APPEARS LONGER   ->  RED SHIFT
                          frequency appears lower
                          (shifted towards the red end of the spectrum)

       observer  <---   ( ( ( (  o  ) ) ) )   ---> source moves away
                        stretched
                        wavelengths


  SOURCE MOVING TOWARDS ->  wavelength APPEARS SHORTER ->  BLUE SHIFT
                            frequency appears higher

       observer  <---   ( ( ((o)) ) )   source moves towards you
                        squashed
                        wavelengths
```

```
  WHY IT MATTERS

  *  Light from almost every distant galaxy is RED SHIFTED.
     ->  the galaxies are moving AWAY from us
     ->  the universe is EXPANDING.   (Hubble)

  *  The Doppler shift of starlight is used to measure the radial
     speeds of stars, to find binary stars, and to detect exoplanets.

  *  Note: the Doppler effect for light depends only on the RELATIVE
     velocity of source and observer (there is no medium), unlike sound
     where source-moving and observer-moving give different formulae.
```

### WORKED EXAMPLE 7.1
A spectral line of wavelength 6000 Å from a distant galaxy is observed at
6005 Å. Find the speed of the galaxy and say whether it approaches or recedes.

```
   d(lam)  =  6005 - 6000  =  5 Angstrom          (wavelength INCREASED
                                                   ->  RED shift
                                                   ->  RECEDING)

     d(lam)        v                        d(lam)
    --------  =  -----      =>      v  =  --------- x c
       lam         c                          lam

                       5
        v  =  ---------------  x  3 x 10^8
                    6000

           =  8.33 x 10^-4  x  3 x 10^8

           =  2.5 x 10^5   m s^-1     =  250 km s^-1,  RECEDING
```

---

# TOPIC 8 — Superposition of waves

```
  +=====================================================================+
  |   PRINCIPLE OF SUPERPOSITION                                         |
  |                                                                      |
  |   When two or more waves travel through the same region at the same  |
  |   time, the resultant displacement at any point is the VECTOR SUM    |
  |   (the algebraic sum, for waves along the same line) of the          |
  |   displacements the individual waves would produce there separately. |
  |                                                                      |
  |                    y  =  y1  +  y2                                   |
  +=====================================================================+
```

```
   IN PHASE  (phase difference 0)      OUT OF PHASE (phase difference pi)

      /\      /\        /\                /\      /\         /\
     /  \    /  \  +   /  \              /  \    /  \   +    \  /
    /    \  /    \    /    \            /    \  /    \        \/
                                                                (inverted)

    crest ON crest                      crest ON trough
       ->  BIG wave                        ->  they CANCEL
       ->  CONSTRUCTIVE                    ->  DESTRUCTIVE
       ->  amplitude a1 + a2               ->  amplitude a1 - a2
       ->  BRIGHT                          ->  DARK
```

## Resultant amplitude and intensity

If two waves of amplitudes `a1` and `a2` meet with a phase difference `phi`:

```
  +---------------------------------------------------------------------+
  |   R^2  =  a1^2  +  a2^2  +  2 a1 a2 cos(phi)                        |
  |                                                                      |
  |   and since  INTENSITY is proportional to (AMPLITUDE)^2 :            |
  |                                                                      |
  |   I  =  I1  +  I2  +  2 sqrt(I1 I2) cos(phi)                        |
  |                                                                      |
  |   MAXIMUM (phi = 0, 2pi, 4pi ...) :  Imax = ( sqrt(I1) + sqrt(I2) )^2|
  |   MINIMUM (phi = pi, 3pi, 5pi ...) :  Imin = ( sqrt(I1) - sqrt(I2) )^2|
  |                                                                      |
  |   For two EQUAL sources (I1 = I2 = I0):                              |
  |                                                                      |
  |          I  =  4 I0 cos^2 ( phi / 2 )                                |
  |          Imax = 4 I0        Imin = 0                                 |
  +---------------------------------------------------------------------+
```

```
  +---------------------------------------------------------------------+
  |   USEFUL RATIO                                                       |
  |                                                                      |
  |     Imax        ( a1  +  a2 )^2        ( sqrt(I1) + sqrt(I2) )^2     |
  |    ------  =   ----------------   =   ------------------------       |
  |     Imin        ( a1  -  a2 )^2        ( sqrt(I1) - sqrt(I2) )^2     |
  +---------------------------------------------------------------------+
```

### WORKED EXAMPLE 8.1
Two coherent sources have intensities in the ratio 9 : 1. Find the ratio of the
maximum to the minimum intensity in the interference pattern.

```
   I1 : I2  =  9 : 1     ->     a1 : a2  =  sqrt(9) : sqrt(1)  =  3 : 1

     Imax       (3 + 1)^2        16
    ------  =  -----------  =  ------  =  4
     Imin       (3 - 1)^2         4

   Answer:  Imax : Imin  =  4 : 1
```

### WORKED EXAMPLE 8.2
In an interference pattern Imax / Imin = 25. Find the ratio of the amplitudes
and of the intensities of the two sources.

```
     (a1 + a2)^2                    a1 + a2
    -------------  =  25    ->     ---------  =  5
     (a1 - a2)^2                    a1 - a2

        a1 + a2  =  5 a1  -  5 a2
        6 a2     =  4 a1
        a1 / a2  =  6 / 4  =  3 / 2

     I1 / I2  =  (a1/a2)^2  =  9 / 4
```

> **TRAP: energy is NOT destroyed at a dark fringe.** The energy missing
> from the dark fringes reappears in the bright ones (each bright fringe has
> 4 I0 instead of the 2 I0 you would get without interference). Interference
> only **redistributes** energy. Write that sentence — it is a whole mark.

---

# TOPIC 9 — Coherent and incoherent sources

```
  +=====================================================================+
  |  COHERENT SOURCES                                                    |
  |                                                                      |
  |  Two sources are COHERENT if they emit light waves of                |
  |     (i)  the SAME FREQUENCY (same wavelength), and                   |
  |     (ii) a CONSTANT (time-independent) PHASE DIFFERENCE.             |
  |                                                                      |
  |  INCOHERENT SOURCES                                                  |
  |  Sources whose phase difference keeps changing randomly with time.   |
  +=====================================================================+
```

## Why two separate bulbs (or two candles) NEVER give interference

```
  Light from an ordinary source is emitted by CRORES of independent atoms.
  Each atom radiates a short burst ("wave train") lasting only about
  10^-8 seconds, and then a different atom takes over with a completely
  RANDOM new phase.

     bulb 1:   ~~~~~   |   ~~~~~   |   ~~~~~     (phase jumps randomly)
     bulb 2:      ~~~~~  |  ~~~~~  |    ~~~~~    (phase jumps randomly)

     phase difference:  changes about 10^8 times per second!

  So a point on the screen is bright for 10^-8 s, then dark, then bright,
  millions of times a second.  The EYE (and any camera) can only see the
  AVERAGE, and the average of cos(phi) over random phases is ZERO:

        I  =  I1 + I2 + 2 sqrt(I1 I2) <cos phi>
           =  I1 + I2 + 0
           =  I1 + I2          <-- UNIFORM illumination, NO fringes

  THAT is why you never see stripes on a wall lit by two bulbs.
```

## How real experiments make coherent sources

```
  +---------------------------------------------------------------------+
  |  THE GOLDEN RULE: you must SPLIT the light from ONE SINGLE SOURCE.   |
  +---------------------------------------------------------------------+

  METHOD 1  DIVISION OF WAVEFRONT
            Take two different parts of the SAME wavefront.
            Examples: Young's double slit, Fresnel's biprism,
                      Lloyd's mirror.

  METHOD 2  DIVISION OF AMPLITUDE
            Partly reflect and partly transmit the SAME beam.
            Examples: thin films, soap bubbles, oil on water,
                      Newton's rings, Michelson's interferometer.

  METHOD 3  LASERS
            A laser is coherent by its very nature (stimulated emission),
            so two beams from ONE laser interfere easily.
```

### WORKED EXAMPLE 9.1
Two sodium lamps of the same power are placed side by side and illuminate a
screen. Will you see interference fringes? Explain.

```
   NO.

   Both lamps emit the same wavelength (589 nm) so condition (i) is met,
   BUT the light comes from independent atoms in the two lamps, so the
   phase difference between them changes randomly about 10^8 times per
   second. Condition (ii) — a CONSTANT phase difference — fails.

   The sources are INCOHERENT, so the intensities simply add
   (I = I1 + I2) and the screen is uniformly illuminated.
```

---

# TOPIC 10 — Interference of light: the conditions

```
  +=====================================================================+
  |  INTERFERENCE is the modification in the distribution of light       |
  |  energy that results when two or more coherent light waves           |
  |  superpose.                                                          |
  |                                                                      |
  |  CONSTRUCTIVE  ->  bright  ->  the waves arrive IN PHASE             |
  |  DESTRUCTIVE   ->  dark    ->  the waves arrive OUT OF PHASE by pi   |
  +=====================================================================+
```

## Path difference and phase difference

```
  +---------------------------------------------------------------------+
  |                       2 pi                                           |
  |   phase difference =  ------  x  path difference                     |
  |                        lam                                           |
  |                                                                      |
  |                            lam                                       |
  |   path difference  =  ----------  x  phase difference                |
  |                          2 pi                                        |
  |                                                                      |
  |   MEMORY HOOK:  a path difference of ONE FULL WAVELENGTH  lam        |
  |                 corresponds to a phase difference of 2 pi (360 deg). |
  +---------------------------------------------------------------------+
```

```
  +=====================================================================+
  |            CONDITION           PATH DIFFERENCE      PHASE DIFFERENCE |
  +=====================================================================+
  |                                                                      |
  |  CONSTRUCTIVE (BRIGHT)          n lam                2 n pi          |
  |                                 n = 0,1,2,3...       (even mult. of  |
  |                                                       pi)            |
  |                                                                      |
  |  DESTRUCTIVE  (DARK)            (2n - 1) lam / 2     (2n - 1) pi     |
  |                                 n = 1,2,3...         (odd mult. of   |
  |                                                       pi)            |
  |                                                                      |
  +=====================================================================+
```

## Conditions for SUSTAINED (steady, clearly visible) interference

This exact list is a 4-mark question.

```
  +---------------------------------------------------------------------+
  |  ESSENTIAL CONDITIONS                                                |
  |                                                                      |
  |  1.  The two sources must be COHERENT — same frequency and a         |
  |      constant phase difference.                                      |
  |  2.  They must be derived from a SINGLE original source.             |
  |  3.  The two waves must have the SAME (or nearly the same)           |
  |      FREQUENCY / wavelength — i.e. the light must be monochromatic.  |
  |  4.  The two waves must travel in nearly the SAME DIRECTION and      |
  |      must be in the same state of POLARISATION.                      |
  |                                                                      |
  |  CONDITIONS FOR GOOD CONTRAST (fringes clearly visible)              |
  |                                                                      |
  |  5.  The AMPLITUDES should be equal or nearly equal, so that the     |
  |      dark fringes are completely dark (Imin = 0).                    |
  |  6.  The source SLIT must be NARROW (a wide slit blurs the           |
  |      fringes — see Topic 14).                                        |
  |  7.  The separation d of the two slits must be SMALL, and the        |
  |      screen distance D LARGE, so that beta = D lam / d is big        |
  |      enough for the eye to see.                                      |
  |  8.  The two sources should be CLOSE together and reasonably         |
  |      NARROW.                                                         |
  +---------------------------------------------------------------------+
```

### WORKED EXAMPLE 10.1
Two waves of the same frequency arrive at a point with a path difference of
`1.5 lam`. Is the point bright or dark? What is the phase difference?

```
   Path difference  =  1.5 lam  =  3 lam / 2  =  (2n-1) lam / 2  with n = 2

        ->  ODD multiple of half a wavelength   ->   DARK

                          2 pi
   Phase difference  =  ------- x 1.5 lam  =  3 pi     (an ODD multiple of pi,
                          lam                           confirming DARK)
```

---

# TOPIC 11 — YOUNG'S DOUBLE SLIT EXPERIMENT (the big 8-mark answer)

## The arrangement

```
                              d = S1S2 (very small, about 1 mm)
                              D = slit-to-screen distance (about 1 m)
                              D  >>  d

                                                          S C R E E N
     mono-                                              +-------------+
     chromatic       S1                                 |             |
     source          ---.                               |    dark     |
       |                 \                              |  ####bright#|  P4
       |                  \                             |    dark     |
      (*)---> [ S ] ------ >  d  <                       |  ####bright#|  P2
     lamp     single       \                            |    dark     |
              slit          \                           |  ####bright#|  P0 <- CENTRE
              (makes the    ---.                        |    dark     |
               light        S2                          |  ####bright#|  P1
               coherent)                                |    dark     |
                                                        |  ####bright#|  P3
              |<------------- D ------------------->|   |             |
                                                        +-------------+

     S   =  a single narrow slit lit by a monochromatic lamp.
     S1, S2 = two very narrow slits, EQUIDISTANT from S, so they are
              always in phase  ->  COHERENT (division of wavefront).
     The screen shows equally spaced BRIGHT and DARK bands (FRINGES).
```

## Deriving the path difference

```
                                                       |  SCREEN
                                                       |
              S1  .                                    |
                  |\                                   |
                  | \  r1                        P     |
                  |  \  - - - - - - - - - - - - -*     |
            d     |   \                       .  |     |
                  |    \                   .     |     |
       - - - - - -O- - -\- - - - - - - - .- - - -+ y   |   O = midpoint of S1S2
                  |      \            .          |     |   C = centre of screen
                  |       \        .             |     |   y = OP measured from C
              S2  .________\____.________________C_____|
                            r2
                  |<---------- D ---------------->|
```

```
  STEP 1   Let P be a point on the screen at a distance y from the
           centre C.  Take S1S2 = d and OC = D.

  STEP 2   Using the right-angled triangles:

                                          d  2
              (S2P)^2  =  D^2  +  ( y  +  --- )
                                          2

                                          d  2
              (S1P)^2  =  D^2  +  ( y  -  --- )
                                          2

  STEP 3   Subtract:

              (S2P)^2 - (S1P)^2  =  2 y d

              (S2P + S1P)(S2P - S1P)  =  2 y d

  STEP 4   Because D >> d and D >> y, both S1P and S2P are very nearly
           equal to D, so  S2P + S1P  =  2 D.  Hence

                                    2 y d          y d
              S2P  -  S1P    =    ---------   =   -----
                                     2 D            D

  STEP 5   Therefore

           +-------------------------------------------------------+
           |                                   y d                  |
           |   PATH DIFFERENCE   =   d sin th = -----   (for small  |
           |                                     D       angles)    |
           +-------------------------------------------------------+

           (Geometrically: drop a perpendicular from S1 onto S2P; the
            small extra bit S2N = d sin theta is the path difference,
            and for small angles sin theta = tan theta = y / D.)
```

```
  THE PATH DIFFERENCE, SEEN CLOSE UP

              S1 .-------------------------------->  to P
                 |\ \
                 | \  \  theta
              d  |  N   \                    S2N  =  d sin theta
                 |   \    \                       =  the EXTRA distance
                 |    \     \                        the S2 wave travels
              S2 .-----\------------------------>  to P
                        \
                    (S1N drawn perpendicular to S2P)
```

## Positions of the BRIGHT fringes (maxima)

```
   BRIGHT  requires   path difference  =  n lam

                 y d
                -----  =  n lam
                  D

           +--------------------------------------+
           |              n D lam                  |
           |    y(n)  =  ---------    n = 0,1,2... |
           |                 d                     |
           +--------------------------------------+

   n = 0  ->  y = 0        the CENTRAL BRIGHT fringe, at C
   n = 1  ->  y = D lam/d  the 1st bright fringe
   n = 2  ->  y = 2D lam/d the 2nd bright fringe   ... and so on
```

## Positions of the DARK fringes (minima)

```
   DARK  requires   path difference  =  (2n - 1) lam / 2

                 y d       (2n - 1) lam
                -----  =  --------------
                  D              2

           +--------------------------------------------+
           |                (2n - 1) D lam               |
           |    y(n)  =  ------------------   n = 1,2,3..|
           |                     2 d                     |
           +--------------------------------------------+

   n = 1  ->  y = D lam / 2d     the 1st dark fringe
   n = 2  ->  y = 3D lam / 2d    the 2nd dark fringe   ... and so on
```

## THE FRINGE WIDTH — the final result

**Fringe width `beta`** = the distance between the centres of two consecutive
bright fringes (which is the same as between two consecutive dark fringes).

```
   beta  =  y(n+1)  -  y(n)

                (n + 1) D lam        n D lam
         =     ---------------  -   ---------
                      d                 d

           +=================================================+
           |                     D lam                        |
           |         beta   =   -------                       |
           |                       d                          |
           +=================================================+

   Do the same subtraction with the DARK formula:

         (2(n+1) - 1) D lam     (2n - 1) D lam      2 D lam     D lam
        --------------------  - ---------------  = ---------  = -----
                2 d                   2 d             2 d          d

   SAME ANSWER.  So the bright fringes and the dark fringes have the
   SAME spacing:  ALL FRINGES ARE OF EQUAL WIDTH.
```

## ANGULAR fringe width

```
           +------------------------------------------------+
           |             beta        lam                     |
           |   theta =  ------  =  -------     (in radians)  |
           |              D           d                      |
           +------------------------------------------------+

   Note this does NOT contain D.  Moving the screen does not change the
   ANGULAR fringe width, only the linear one.
```

### WORKED EXAMPLE 11.1
In Young's experiment the two slits are 1 mm apart and the screen is 1.5 m
away. Light of wavelength 6000 Å is used. Find the fringe width.

```
   d    =  1 mm       =  1 x 10^-3  m
   D    =  1.5 m
   lam  =  6000 A     =  6000 x 10^-10  =  6 x 10^-7  m

             D lam        1.5  x  6 x 10^-7
   beta  =  -------  =  ---------------------
                d              1 x 10^-3

                       =  9 x 10^-4  m   =  0.9 mm
```

### WORKED EXAMPLE 11.2
In the same experiment, find (a) the distance of the 4th bright fringe from the
centre, (b) the distance of the 3rd dark fringe from the centre, (c) the
distance between the 2nd bright and the 5th bright fringe.

```
   beta = 0.9 mm  (from Example 11.1)

  (a)  y(4)  =  4 beta  =  4 x 0.9  =  3.6 mm

  (b)  3rd DARK:
              (2n - 1) D lam        (2 x 3 - 1)
       y   =  ---------------  =   ------------- x beta  =  2.5 beta
                    2 d                  2
                                =  2.5 x 0.9  =  2.25 mm

  (c)  y(5) - y(2)  =  (5 - 2) beta  =  3 x 0.9  =  2.7 mm
```

### WORKED EXAMPLE 11.3
The fringe width in a double slit experiment is 0.4 mm when light of wavelength
5000 Å is used. What will it be if the wavelength is changed to 6000 Å,
everything else staying the same?

```
   beta is DIRECTLY proportional to lam, so

     beta2       lam2                        6000
    -------  =  ------     ->   beta2  =  --------- x 0.4  =  0.48 mm
     beta1       lam1                        5000
```

### WORKED EXAMPLE 11.4
In a Young's experiment, the distance between the 1st and the 10th bright
fringe is 3.6 mm. D = 1 m, d = 1 mm. Find the wavelength.

```
   Between the 1st and the 10th bright fringe there are (10 - 1) = 9
   fringe widths.

           3.6 mm
   beta =  ------  =  0.4 mm  =  4 x 10^-4  m
              9

              D lam                    beta x d
   beta  =  -------      ->   lam  =  ----------
                d                          D

                  4 x 10^-4  x  1 x 10^-3
        lam  =  ---------------------------  =  4 x 10^-7 m  =  4000 A
                            1
```

> **TRAP:** "distance between the 1st and the 10th fringe" means **9** fringe
> widths, not 10. Count the GAPS, not the fringes. This single mistake
> destroys more numericals in this chapter than anything else.

---

# TOPIC 12 — What happens if you change lam, D, d or the medium?

```
             D lam
   beta  =  -------      Read this like a recipe: two things upstairs,
               d          one thing downstairs.
```

```
  +--------------------------+---------------------+----------------------+
  |  YOU CHANGE ...          |  beta = D lam / d   |  RESULT              |
  +--------------------------+---------------------+----------------------+
  |  lam INCREASED           |  lam is upstairs    |  beta INCREASES      |
  |  (red instead of blue)   |                     |  (RED fringes are    |
  |                          |                     |   the WIDEST)        |
  +--------------------------+---------------------+----------------------+
  |  lam DECREASED           |                     |  beta DECREASES      |
  |  (violet)                |                     |  (VIOLET fringes are |
  |                          |                     |   the NARROWEST)     |
  +--------------------------+---------------------+----------------------+
  |  D INCREASED             |  D is upstairs      |  beta INCREASES      |
  |  (screen moved away)     |                     |                      |
  +--------------------------+---------------------+----------------------+
  |  d INCREASED             |  d is downstairs    |  beta DECREASES      |
  |  (slits moved apart)     |                     |  (fringes crowd      |
  |                          |                     |   together)          |
  +--------------------------+---------------------+----------------------+
  |  d made very LARGE       |                     |  beta becomes so     |
  |                          |                     |  small the fringes   |
  |                          |                     |  merge -> uniform    |
  |                          |                     |  illumination        |
  +--------------------------+---------------------+----------------------+
  |  ONE SLIT COVERED        |  no second wave     |  fringes VANISH;     |
  |                          |                     |  you get a single    |
  |                          |                     |  slit DIFFRACTION    |
  |                          |                     |  pattern instead     |
  +--------------------------+---------------------+----------------------+
  |  WHOLE APPARATUS DIPPED  |  lam becomes        |  beta becomes        |
  |  IN A LIQUID of index mu |  lam / mu           |  beta / mu           |
  |                          |                     |  -> fringes get      |
  |                          |                     |     NARROWER         |
  +--------------------------+---------------------+----------------------+
  |  SOURCE SLIT S MOVED     |  D does not appear  |  NO change in beta   |
  |  CLOSER TO S1S2          |  in the source arm  |  (only the fringes   |
  |                          |                     |   get brighter)      |
  +--------------------------+---------------------+----------------------+
  |  MONOCHROMATIC LIGHT     |                     |  see the white light |
  |  REPLACED BY WHITE       |                     |  section below       |
  +--------------------------+---------------------+----------------------+
```

## The liquid case, in full

```
   Inside a liquid of refractive index mu, the wavelength becomes

              lam' = lam / mu

   so the new fringe width is

              D lam'       D lam            beta
    beta' =  --------  =  --------  =    -----------
                d           mu d              mu

   +--------------------------------------------------------+
   |             beta                                        |
   |   beta' =  ------      the fringes get NARROWER by a    |
   |              mu        factor mu, and the pattern is    |
   |                        squeezed towards the centre.     |
   +--------------------------------------------------------+
```

### WORKED EXAMPLE 12.1
A double slit apparatus gives a fringe width of 0.6 mm in air. The whole
apparatus is immersed in water of refractive index 4/3. Find the new fringe
width.

```
              beta         0.6         0.6 x 3
   beta'  =  ------  =  ---------  =  ---------  =  0.45 mm
               mu         4 / 3            4
```

### WORKED EXAMPLE 12.2
In a Young's experiment beta = 0.5 mm. What happens if (a) D is doubled,
(b) d is doubled, (c) both D and d are doubled?

```
  (a)  beta is proportional to D    ->   beta  =  2 x 0.5  =  1.0 mm

  (b)  beta is proportional to 1/d  ->   beta  =  0.5 / 2  =  0.25 mm

  (c)  D/d unchanged  ->  beta  =  0.5 mm   (NO CHANGE)
```

---

# TOPIC 13 — Intensity distribution, and what white light does

## The intensity graph

```
  For two identical slits,   I  =  4 I0 cos^2 ( phi / 2 )

  I
  ^
4I0|      *           *           *           *           *
     |     * *         * *      * * * *        * *         * *
     |    *   *       *   *    *       *      *   *       *   *
2I0|---*-----*-----*-----*--*---------*--*-----*-----*-----*---
     |  *       *   *       **           **       *   *       *
     | *         * *         *             *       * *         *
   0 +*-----------*-----------*-----------*-----------*---------> y
     -2beta     -beta         0         +beta      +2beta
      (n=-2)    (n=-1)      (n=0)       (n=+1)     (n=+2)

  KEY FEATURES YOU MUST STATE
  ---------------------------
    *  The maxima ALL have the SAME height (4 I0)  ->  equal intensity
    *  The maxima are EQUALLY SPACED (spacing beta) ->  equal width
    *  The minima drop to ZERO (perfectly dark) when the amplitudes
       are equal
    *  The AVERAGE intensity is 2 I0, which is exactly I1 + I2 —
       proof that ENERGY IS CONSERVED, only redistributed.
```

## Young's experiment with WHITE light

```
   White light contains every wavelength from violet (~4000 A) to
   red (~7000 A).  Each colour makes its OWN set of fringes with its
   OWN fringe width  beta = D lam / d.

   AT THE CENTRE (n = 0):
       path difference = 0 for EVERY colour, so all colours are bright
       together   ->   the CENTRAL FRINGE IS WHITE.

   JUST BESIDE THE CENTRE:
       beta(violet) < beta(red), so violet peaks nearest the centre
       and red furthest   ->   a few COLOURED fringes, VIOLET INSIDE,
       RED OUTSIDE.

   FURTHER OUT:
       the fringe systems of different colours overlap and wash each
       other out   ->   GENERAL WHITE ILLUMINATION (no clear fringes).

   PICTURE
                     |<-- coloured -->|
        white      V R              R V      white
        blur   ... |||  WHITE CENTRE  |||  ... blur
                   VR                 RV
                 (violet nearest the centre on both sides)
```

### WORKED EXAMPLE 13.1
In a double slit experiment with white light, which colour forms the fringe
closest to the central white fringe, and why?

```
   VIOLET.

   beta = D lam / d, so the fringe width is smallest for the smallest
   wavelength.  Violet has the shortest wavelength (~400 nm), so its
   first maximum lies closest to the centre. Red (~700 nm) lies furthest.
```

### WORKED EXAMPLE 13.2
Light of wavelengths 6500 Å and 5200 Å is used in a double slit experiment with
d = 2 mm and D = 1.2 m. Find the least distance from the centre where the
bright fringes of the two wavelengths coincide.

```
   Coincidence needs   n1 lam1  =  n2 lam2

           n1        lam2       5200        4
          ----  =  -------  =  ------  =  -----
           n2        lam1       6500        5

   Smallest whole numbers:  n1 = 4  (for 6500 A) ,  n2 = 5  (for 5200 A)

           n1 D lam1        4 x 1.2 x 6500 x 10^-10
   y   =  -----------  =  ---------------------------
               d                  2 x 10^-3

              4 x 1.2 x 6.5 x 10^-7        3.12 x 10^-6
       =  ----------------------------  = ---------------
                   2 x 10^-3                 2 x 10^-3

       =  1.56 x 10^-3  m   =  1.56 mm

   CHECK with the other wavelength:
       5 x 1.2 x 5.2 x 10^-7 / (2 x 10^-3)  =  3.12 x 10^-6 / 2 x 10^-3
                                             =  1.56 mm     SAME.  OK
```

---

# TOPIC 14 — When are the fringes actually VISIBLE?

A 4-mark discussion question hides here. Learn the list.

```
  +---------------------------------------------------------------------+
  |  1.  d MUST BE SMALL.  If d is large, beta = D lam / d is smaller    |
  |      than the eye can resolve and the fringes merge into a uniform   |
  |      glow.  (Practically d ~ 1 mm or less.)                          |
  |                                                                      |
  |  2.  D MUST BE LARGE.  A big D stretches the pattern out.            |
  |                                                                      |
  |  3.  THE SOURCE SLIT S MUST BE NARROW.  See below.                   |
  |                                                                      |
  |  4.  THE LIGHT MUST BE MONOCHROMATIC (or nearly so), otherwise the   |
  |      fringe systems of different colours overlap.                    |
  |                                                                      |
  |  5.  THE TWO SLITS MUST BE OF EQUAL WIDTH so the amplitudes are      |
  |      equal and the dark fringes are truly dark (good CONTRAST).      |
  |                                                                      |
  |  6.  THE TWO SLITS MUST BE VERY NARROW, so each one diffracts light  |
  |      widely enough for the two beams to overlap on the screen.       |
  +---------------------------------------------------------------------+
```

## The effect of a source slit of FINITE width

```
   Think of a wide source slit S as a row of many independent narrow
   slits  s1, s2, s3 ...  Each one makes its OWN complete fringe
   pattern, and each pattern is SHIFTED sideways a little, because
   each little source sits at a slightly different angle.

        narrow S                    WIDE S
                                    (many little sources)

     ####  ####  ####            ###   ###   ###     (pattern from s1)
                                  ###   ###   ###    (pattern from s2, shifted)
     sharp, high contrast          ###   ###   ###   (pattern from s3, shifted)
                                 ----------------------
                                 sum = washed-out, low contrast

   These patterns are INCOHERENT with one another (different atoms), so
   their INTENSITIES simply add.  The bright fringes of one fall on the
   dark fringes of another, the minima stop being zero, and the CONTRAST
   (visibility) FALLS.

   +-----------------------------------------------------------------+
   |  If the source slit is widened beyond about   s / S = lam / d    |
   |  (where s is the source width and S its distance from the double |
   |  slit), the fringes disappear altogether.                        |
   |                                                                  |
   |  RULE FOR THE EXAM:  a WIDER source slit  ->  POORER CONTRAST    |
   |                      -> eventually NO fringes.                   |
   |                      The fringe WIDTH beta does NOT change.      |
   +-----------------------------------------------------------------+
```

> **TRAP:** widening the source slit changes the **contrast**, not the
> **fringe width**. Many students write "beta increases" — that is wrong.

---

# TOPIC 15 — DIFFRACTION at a single slit

## What diffraction is

```
  +=====================================================================+
  |  DIFFRACTION is the BENDING of light round the edges of an obstacle  |
  |  or an aperture, and the resulting spreading of light into the       |
  |  geometrical shadow region.                                          |
  |                                                                      |
  |  It is noticeable only when the size of the obstacle / slit is       |
  |  COMPARABLE TO the wavelength of the light.                          |
  +=====================================================================+
```

That last line is why you never see diffraction round a door (a metre wide,
light is 0.0000006 m) but you do see it round a fine slit or a CD track.

## The arrangement

```
                          SINGLE SLIT OF WIDTH  a

                                                        S C R E E N
                              |                       +-------------+
                              |                       |             |
                              |                       |    dark     |
    plane                     |  \                    | #   1st min |
    wavefront    ------->     |    \                  | ### 1st sec.|
    (parallel               --+--    \                | #    max    |
     light)                  a| \      \              |    dark     |
                            --+--  \     \            |#############|
                              |  \    \    \          |#############|  <- CENTRAL
                              |    \     \   \        |### MAXIMUM #|     MAXIMUM
                              |      \     \  \       |#############|     (very
                              |        \     \ \      |#############|      bright,
                              |          \    \\      |    dark     |      very
                              |            \   \      | ###         |      wide)
                              |              \  \     | #           |
                              |                       |    dark     |
                              |                       |             |
                              |<--------- D --------->+-------------+

     a  =  slit width  (a single slit, NOT two slits)
     D  =  slit-to-screen distance
     The pattern:  ONE very bright, very WIDE central band, flanked by
                   much fainter, NARROWER secondary maxima that fade
                   away quickly.
```

## Deriving the positions of the MINIMA

```
   Light from every point of the slit travels to the screen. Consider a
   direction making an angle theta with the original direction.

              A  .---------------------------\
                 |  \                          \
                 |    \                          \        to point P
              a  |      \  a sin theta              \      on the screen
                 |        \                           \
                 |          \                           \
              B  .------------\--------------------------->
                              N          (BN drawn perpendicular)

   PATH DIFFERENCE between the ray from the TOP EDGE A and the ray from
   the BOTTOM EDGE B:

              A B path difference  =  a sin theta
```

```
  THE TRICK: DIVIDE THE SLIT INTO PAIRS THAT CANCEL

  Suppose      a sin theta  =  lam

  Split the slit into TWO equal halves, each of width a/2.
  Take any point in the top half and its partner exactly a/2 below it.
  Their path difference is

           (a/2) sin theta  =  lam / 2      ->  they CANCEL exactly.

  Every point in the top half has such a partner in the bottom half, so
  the WHOLE slit cancels.   ->   DARKNESS.

  Now suppose  a sin theta = 2 lam.
  Split the slit into FOUR strips of width a/4. Neighbouring strips
  differ by lam/2 and cancel in pairs.   ->   DARKNESS again.

  In general, splitting into 2n strips gives cancellation whenever
```

```
  +=====================================================================+
  |                                                                      |
  |    MINIMA (dark) :     a sin theta   =   n lam      n = 1, 2, 3, ... |
  |                                                                      |
  |    (n = 0 is EXCLUDED — theta = 0 is the CENTRAL MAXIMUM, the        |
  |     brightest point of all, not a minimum)                           |
  |                                                                      |
  |    For small angles,   sin theta = theta = y / D , so the nth dark   |
  |    band is at                                                        |
  |                             n D lam                                  |
  |                   y(n)  =  ----------                                |
  |                                a                                     |
  +=====================================================================+
```

## The (approximate) positions of the MAXIMA

```
  Between two consecutive minima there must be a maximum. If we split the
  slit into an ODD number (2n + 1) of strips, all but ONE strip cancels
  in pairs, and the leftover strip gives a weak bright band:

  +=====================================================================+
  |                                       lam                            |
  |   SECONDARY MAXIMA :  a sin theta = (2n + 1) -----   n = 1, 2, 3 ... |
  |                                                2                     |
  |                                                                      |
  |   i.e. at  3lam/2 , 5lam/2 , 7lam/2 , ...                            |
  |                                                                      |
  |   CENTRAL MAXIMUM  :  theta = 0   (path difference zero, every       |
  |                       point of the slit adds IN PHASE)               |
  +=====================================================================+

  RELATIVE INTENSITIES (worth quoting):

       central maximum     :  I0        =  100 %
       1st secondary max   :  I0 / 22   =  about 4.5 %
       2nd secondary max   :  I0 / 61   =  about 1.6 %
       3rd secondary max   :  I0 / 121  =  about 0.8 %

  So the side bands are FAINT and get fainter fast.
```

## THE WIDTH OF THE CENTRAL MAXIMUM

```
   The central maximum stretches from the FIRST minimum on one side to
   the FIRST minimum on the other side.

   First minimum (n = 1):    a sin theta = lam    ->   sin theta = lam / a

   For small angles,  theta = lam / a  and  y1 = D theta = D lam / a

   +=================================================================+
   |                                          2 D lam                 |
   |   WIDTH of the central maximum  =  2 y1 = ---------              |
   |                                               a                  |
   |                                                                  |
   |                                                     2 lam        |
   |   ANGULAR width of the central maximum  =  2 theta = -------     |
   |                                                        a         |
   |                                                                  |
   |   HALF-ANGULAR width  =  theta  =  lam / a                       |
   +=================================================================+

   NOTE: the central maximum is TWICE as wide as any other band, and all
   the other bands have width  D lam / a.
```

```
  EFFECT OF CHANGING THE SLIT WIDTH  a       (a is DOWNSTAIRS)

   a MADE NARROWER  ->  central maximum gets WIDER  (light spreads more)
   a MADE WIDER     ->  central maximum gets NARROWER (pattern shrinks
                        towards the sharp geometrical shadow of ray
                        optics)
   a MUCH LARGER
   THAN lam         ->  diffraction becomes unnoticeable; you just get
                        a sharp-edged bright patch  ->  RAY OPTICS
```

> **TRAP:** it feels backwards, but a **narrower** slit gives a **wider**
> patch of light. Say it out loud a few times. Examiners love this.

## The intensity distribution of single slit diffraction

```
  I
  ^
I0|                          ******
  |                        **      **
  |                       *          *
  |                      *            *
  |                     *              *
  |                    *                *
  |                   *                  *
  |                  *                    *
  |                 *                      *
  |                *                        *
  |               *                          *
  |              *                            *
  |             *                              *
  |          ***                                ***
  |    ***  *                                      *  ***
  |  **   **      4.5%                     4.5%     **   **  1.6%
  |**       *  __---__                   __---__     *      __---__
  +--*------**-*-----*-------------------*-----*-----**----*-------*--> theta
   -3lam/a  -2lam/a  -lam/a       0    +lam/a  +2lam/a  +3lam/a
      |        |        |          |       |       |        |
     3rd      2nd      1st      CENTRE    1st     2nd      3rd
     MIN      MIN      MIN               MIN     MIN      MIN

     |<--------------- 2 lam / a ------------------->|
              (angular width of the CENTRAL maximum)

  READ OFF THESE FACTS
  --------------------
    *  The central maximum is TWICE as wide as the others.
    *  The side maxima are MUCH weaker (4.5 %, 1.6 %, 0.8 % ...).
    *  The minima are at  sin theta = lam/a, 2lam/a, 3lam/a ...
    *  The intensity is NOT the same for all bright bands
       (unlike interference, where all maxima are equal).
```

### WORKED EXAMPLE 15.1
A single slit of width 0.1 mm is illuminated by light of wavelength 600 nm and
the pattern is observed on a screen 1 m away. Find (a) the angular width of the
central maximum, (b) its linear width, (c) the distance of the 2nd minimum from
the centre.

```
   a   =  0.1 mm  =  1 x 10^-4  m
   lam =  600 nm  =  6 x 10^-7  m
   D   =  1 m

  (a)  angular width  =  2 lam / a

                      =  2 x 6 x 10^-7 / 1 x 10^-4

                      =  1.2 x 10^-2  radian    (= 0.69 degrees)

  (b)  linear width   =  2 D lam / a  =  D x (angular width)

                      =  1 x 1.2 x 10^-2  =  1.2 x 10^-2 m  =  1.2 cm

  (c)  2nd minimum:   a sin theta = 2 lam

                      y2  =  2 D lam / a  =  1.2 x 10^-2 m  =  1.2 cm

       (which is exactly HALF the central width away from the centre —
        consistent, since the central maximum runs from -0.6 cm to +0.6 cm
        ... careful: y1 = D lam/a = 0.6 cm, y2 = 1.2 cm.  The central
        maximum runs from -0.6 cm to +0.6 cm, total 1.2 cm.  OK)
```

### WORKED EXAMPLE 15.2
In a single slit experiment the first minimum is observed at 30 degrees for
light of wavelength 5000 Å. Find the slit width.

```
   a sin theta  =  n lam        with  n = 1,  theta = 30 deg

   a x sin 30   =  5000 x 10^-10

   a x 0.5      =  5 x 10^-7

          a     =  1 x 10^-6  m   =  1 micrometre  =  0.001 mm
```

### WORKED EXAMPLE 15.3
The width of the central maximum in a single slit pattern is 6 mm on a screen
2 m from the slit. If lam = 600 nm, find the slit width.

```
                   2 D lam                       2 D lam
   width  =  ----------------    ->     a  =  --------------
                     a                            width

              2  x  2  x  6 x 10^-7        2.4 x 10^-6
        a  = ------------------------  =  --------------
                    6 x 10^-3                6 x 10^-3

           =  4 x 10^-4  m   =  0.4 mm
```

---

# TOPIC 16 — INTERFERENCE versus DIFFRACTION (the guaranteed 4-mark table)

```
  +----+------------------------+-----------------------------+-----------------------------+
  | No |  POINT OF COMPARISON   |  INTERFERENCE               |  DIFFRACTION                |
  +----+------------------------+-----------------------------+-----------------------------+
  | 1  |  Cause                 |  Superposition of waves     |  Superposition of secondary |
  |    |                        |  from TWO (or more)         |  wavelets coming from        |
  |    |                        |  SEPARATE coherent sources  |  DIFFERENT PARTS OF THE SAME |
  |    |                        |                             |  wavefront                   |
  +----+------------------------+-----------------------------+-----------------------------+
  | 2  |  Fringe width          |  ALL fringes have the SAME  |  The CENTRAL band is widest; |
  |    |                        |  width  (beta = D lam / d)  |  the others get narrower     |
  +----+------------------------+-----------------------------+-----------------------------+
  | 3  |  Intensity of maxima   |  All bright fringes are     |  Intensity FALLS RAPIDLY as  |
  |    |                        |  EQUALLY BRIGHT             |  you move away from the      |
  |    |                        |                             |  centre (100 %, 4.5 %, 1.6 %)|
  +----+------------------------+-----------------------------+-----------------------------+
  | 4  |  Darkness of minima    |  Minima are PERFECTLY DARK  |  Minima are NOT perfectly    |
  |    |                        |  (when amplitudes are equal)|  dark; contrast is poor       |
  +----+------------------------+-----------------------------+-----------------------------+
  | 5  |  Number of fringes     |  Large number of fringes    |  Only a FEW bands are visible|
  +----+------------------------+-----------------------------+-----------------------------+
  | 6  |  Condition for MAXIMA  |  d sin th = n lam           |  a sin th = (2n+1) lam / 2   |
  +----+------------------------+-----------------------------+-----------------------------+
  | 7  |  Condition for MINIMA  |  d sin th = (2n-1) lam / 2  |  a sin th = n lam            |
  +----+------------------------+-----------------------------+-----------------------------+
  | 8  |  Depends on            |  the SEPARATION d of the    |  the WIDTH a of the single   |
  |    |                        |  two slits                  |  slit                        |
  +----+------------------------+-----------------------------+-----------------------------+
  | 9  |  Region                |  Fringes spread over a      |  Light bends into the        |
  |    |                        |  wide region                |  geometrical SHADOW          |
  +----+------------------------+-----------------------------+-----------------------------+
```

```
  THE ONE-LINE VERSION FOR THE EXAM HALL

     INTERFERENCE  =  TWO wavefronts, all fringes EQUAL
     DIFFRACTION   =  ONE wavefront split up, central band is KING

     AND THE SWAP:
         interference:  n lam         -> BRIGHT
         diffraction :  n lam         -> DARK
```

---

# TOPIC 17 — Resolving power and the Rayleigh criterion (outline)

Diffraction sets a hard limit on how much detail any instrument can show. Two
stars very close together each make their own diffraction disc, and if the
discs overlap too much you see one blob instead of two.

```
  +=====================================================================+
  |  RESOLVING POWER is the ability of an optical instrument to show     |
  |  two very close objects as SEPARATE.                                 |
  |                                                                      |
  |  It is measured by the LIMIT OF RESOLUTION — the smallest angular    |
  |  (or linear) separation that can still be seen as two.               |
  |  SMALL limit of resolution  =  HIGH resolving power.                 |
  +=====================================================================+
```

## The RAYLEIGH CRITERION

```
  +=====================================================================+
  |  Two point sources are said to be JUST RESOLVED when the CENTRAL     |
  |  MAXIMUM of the diffraction pattern of one falls exactly on the      |
  |  FIRST MINIMUM of the diffraction pattern of the other.              |
  +=====================================================================+
```

```
   WELL RESOLVED            JUST RESOLVED           NOT RESOLVED
   (two clear peaks)        (Rayleigh limit)        (one blob)

      *      *                  *  *                    **
     * *    * *                * ** *                  ****
    *   *  *   *              *  **  *                ******
   *     **     *            *   **   *              ********
  *       *      *          *    **    *            **********
 ---------------------     ---------------------   ---------------------
   two separate dips        just a small dip        no dip at all
```

## The formulae (state them; the derivation is not asked)

```
  +---------------------------------------------------------------------+
  |  TELESCOPE  (circular objective of diameter D)                       |
  |                                                                      |
  |     limit of resolution                       1.22 lam               |
  |     (smallest resolvable        d(theta)  =  ------------            |
  |      ANGLE)                                       D                  |
  |                                                                      |
  |                                       1              D               |
  |     RESOLVING POWER  =  ----------------------  =  ----------        |
  |                              d(theta)               1.22 lam         |
  |                                                                      |
  |     ->  a BIGGER objective and a SHORTER wavelength give a BETTER    |
  |         telescope. That is why observatories build huge mirrors.     |
  +---------------------------------------------------------------------+
  |  MICROSCOPE  (objective half-angle beta, medium index mu)            |
  |                                                                      |
  |     smallest resolvable                   1.22 lam                   |
  |     DISTANCE               d(min)  =  ------------------             |
  |                                        2 mu sin(beta)                |
  |                                                                      |
  |     ( mu sin beta  is called the NUMERICAL APERTURE )                |
  |                                                                      |
  |     ->  use a SHORTER wavelength (blue / UV / electrons) or an       |
  |         OIL IMMERSION objective (larger mu) to see finer detail.     |
  +---------------------------------------------------------------------+
```

## Fresnel distance (why a beam eventually spreads)

```
   A beam of width a travels a distance z before diffraction spreads it
   noticeably.  Spreading  =  z lam / a.  This equals the beam width when

           +--------------------------+
           |                a^2        |
           |     z(F)  =  -------      |    the FRESNEL DISTANCE
           |                lam        |
           +--------------------------+

   For distances much less than z(F), ray optics is good enough.
   Beyond z(F), diffraction takes over.
   This is why a laser pointer stays a dot across a room but makes a
   wide patch on the Moon.
```

### WORKED EXAMPLE 17.1
A telescope has an objective of diameter 100 cm. Find its limit of resolution
for light of wavelength 5500 Å.

```
              1.22 lam       1.22  x  5.5 x 10^-7
   d(th)  =  ----------  =  -----------------------
                  D                  1.0

          =  6.71 x 10^-7  radian

   (about 0.14 arc-seconds — good enough to separate two stars that
    close together.)
```

### WORKED EXAMPLE 17.2
For an aperture of 3 mm and light of 500 nm, find the Fresnel distance.

```
             a^2        (3 x 10^-3)^2        9 x 10^-6
   z(F)  =  ------  =  ---------------  =  -------------  =  18 m
              lam         5 x 10^-7          5 x 10^-7

   So over about 18 m the beam stays roughly 3 mm wide; after that it
   visibly spreads.
```

---

# TOPIC 18 — POLARISATION

## Unpolarised versus plane polarised light

An ordinary light wave is transverse: the electric field vibrates at right
angles to the direction of travel. But in ordinary light it vibrates in
**every possible** perpendicular direction at once, changing randomly.

```
   LOOKING STRAIGHT DOWN THE BEAM (the beam comes out of the page)

   UNPOLARISED LIGHT               PLANE (LINEARLY) POLARISED LIGHT
   vibrations in ALL directions    vibrations in ONE direction only

          \  |  /                            |
           \ | /                             |
        ----(*)----                       ---(*)---     no, better:
           / | \                             |
          /  |  \                            |
                                        (a single double-headed arrow)

   STANDARD EXAM SYMBOLS
   ---------------------
       UNPOLARISED     :   . | . | . | .     (dots AND arrows together)
                           (dots = vibrations in the plane of the paper's
                            normal;  arrows = in the plane of the paper)

       PLANE POLARISED :   | | | | |          (arrows only)
                    or :   . . . . .          (dots only)
```

```
  +=====================================================================+
  |  POLARISATION is the restriction of the vibrations of the light      |
  |  (the electric field vector) to ONE single plane perpendicular to    |
  |  the direction of propagation.                                       |
  |                                                                      |
  |  PLANE OF VIBRATION  -  the plane containing the vibrations AND the  |
  |                         direction of propagation.                    |
  |  PLANE OF POLARISATION - the plane PERPENDICULAR to the plane of     |
  |                         vibration, containing the direction of       |
  |                         propagation.  (The two are at 90 degrees.)   |
  +=====================================================================+
```

## Polarisation PROVES light is a TRANSVERSE wave

```
  +---------------------------------------------------------------------+
  |  A LONGITUDINAL wave (like sound) vibrates ALONG the direction of    |
  |  travel. There is only ONE such direction, so there is nothing to    |
  |  "restrict" — a longitudinal wave CANNOT be polarised.               |
  |                                                                      |
  |  A TRANSVERSE wave vibrates PERPENDICULAR to the travel direction,   |
  |  and there are infinitely many such perpendicular directions, so it  |
  |  CAN be restricted to one of them.                                   |
  |                                                                      |
  |  LIGHT CAN BE POLARISED.  Therefore LIGHT IS A TRANSVERSE WAVE.      |
  +---------------------------------------------------------------------+
```

```
  THE ROPE-AND-SLIT ANALOGY (draw this, it earns marks)

   VERTICAL slit, VERTICAL shake     VERTICAL slit, HORIZONTAL shake
        ~~~~~~ ||| ~~~~~~                ~~~~~~ ||| ------
        passes through                   BLOCKED

   Now do the same with a longitudinal push-pull wave along a spring:
   it goes through NO MATTER how the slit is turned.
        -> longitudinal waves cannot be polarised.
```

---

# TOPIC 19 — Polarisation by REFLECTION and BREWSTER'S LAW

When ordinary light reflects off a **non-metallic** surface (glass, water, a
road, a table top) the reflected light is **partially polarised**. At one
special angle it becomes **completely plane polarised**.

```
  +=====================================================================+
  |  The POLARISING ANGLE (or BREWSTER ANGLE) i(p) is the angle of       |
  |  incidence at which the REFLECTED light is COMPLETELY PLANE          |
  |  POLARISED.                                                          |
  +=====================================================================+
```

## The geometry

```
                    unpolarised            completely PLANE POLARISED
                    incident light         reflected ray (vibrations
                          \                 PERPENDICULAR to the plane
                           \        90 deg  of incidence -> shown as DOTS)
                            \      <------->      .
                             \    |             .
                        . | . \   |           .   .   .
                          . |   \ |         .
                            . |i(p)\|     .  r' = i(p)
       ======================== \   .  =========================
                                  \      |                       GLASS
                        r          \     |                       (index mu)
                                    \    | 90 deg
                                     \   |
                                      \  |
                              PARTIALLY POLARISED
                              refracted ray (mostly arrows,
                              vibrations IN the plane of incidence)

       AT THE POLARISING ANGLE:
          the REFLECTED ray and the REFRACTED ray are PERPENDICULAR
          to each other  ->  the angle between them is 90 degrees.
```

## BREWSTER'S LAW

```
  +=====================================================================+
  |                                                                      |
  |          tan ( i(p) )   =   mu                                       |
  |                                                                      |
  |  The tangent of the polarising angle equals the refractive index     |
  |  of the reflecting medium.                                           |
  +=====================================================================+
```

## Proof that the reflected and refracted rays are perpendicular

```
  STEP 1   At the polarising angle,  by Brewster's law

                    mu  =  tan ( i(p) )  =  sin(i(p)) / cos(i(p))    ...(1)

  STEP 2   By Snell's law

                    mu  =  sin ( i(p) ) / sin ( r )                  ...(2)

  STEP 3   Comparing (1) and (2):

                    sin ( r )  =  cos ( i(p) )  =  sin ( 90 - i(p) )

           Therefore          r  =  90  -  i(p)

                              i(p)  +  r   =   90 degrees            ...(3)

  STEP 4   The angle of reflection also equals i(p).
           Angle between the reflected ray and the refracted ray

                =  180  -  ( i(p)  +  r )     [angles on the surface line]
                =  180  -  ( i(p)  +  90  -  i(p) )
                =  180  -  90
                =  90 degrees

  CONCLUSION:  at the polarising angle the REFLECTED and REFRACTED rays
               are at RIGHT ANGLES.
```

## Why does this happen? (the physical reason, worth a mark)

```
   The reflected light is produced by the vibrating electrons in the
   glass acting as tiny aerials. An aerial radiates NOTHING along its
   own line of vibration.

   At the Brewster angle the refracted ray is exactly perpendicular to
   the reflected ray, so the component of vibration that lies in the
   plane of incidence points STRAIGHT ALONG the reflected direction and
   therefore cannot be radiated into it.

   Only the component PERPENDICULAR to the plane of incidence survives
   in the reflected ray  ->  it is completely plane polarised.
```

### WORKED EXAMPLE 19.1
Find the polarising angle for glass of refractive index 1.5, and the
corresponding angle of refraction.

```
   tan ( i(p) )  =  mu  =  1.5

        i(p)  =  tan^-1 (1.5)   =   56.3 degrees   (about 56 deg 19')

        r     =  90 - i(p)  =  90 - 56.3  =  33.7 degrees

   CHECK with Snell:  sin 56.3 / sin 33.7 = 0.832 / 0.555 = 1.50   OK
```

### WORKED EXAMPLE 19.2
The polarising angle for a medium is 60 degrees. Find its refractive index and
the speed of light in it.

```
   mu  =  tan 60  =  sqrt(3)  =  1.732

           c        3 x 10^8
   v  =  ------  = -----------  =  1.73 x 10^8  m s^-1
          mu          1.732
```

### WORKED EXAMPLE 19.3
Light is incident on water (mu = 1.33) at the polarising angle. Find i(p).

```
   i(p)  =  tan^-1 (1.33)  =  53.1 degrees

   This is why polaroid sunglasses kill the glare from a wet road or a
   lake: the glare is reflected near 53 degrees and is horizontally
   polarised, and the sunglasses are cut to block horizontal vibrations.
```

---

# TOPIC 20 — Polarisation by SCATTERING (and why the sky is blue)

```
   SUNLIGHT (unpolarised)
      |
      |    |    |    |
      v    v    v    v
   ------------------------------->  air molecule  ( o )
                                          |     \
                                          |       \
              scattered at 90 deg         |         \  scattered at other
              -> COMPLETELY PLANE         v           \  angles ->
                 POLARISED             (to your eye)    \ PARTIALLY
                                                          POLARISED
```

```
  WHY: the incoming light shakes the electrons of an air molecule in the
  two directions perpendicular to the beam. An electron radiates nothing
  along its own vibration direction, so when you look at 90 degrees to
  the beam, only ONE of the two vibration directions can reach you.
  The scattered light you see is therefore plane polarised.

  TEST IT: look at a patch of blue sky 90 degrees away from the Sun
  through a polaroid and rotate it — the patch brightens and darkens.
```

```
  RAYLEIGH SCATTERING  (the blue sky, the red sunset)

                                                      1
        amount of scattering    is proportional to   -------
                                                      lam^4

   BLUE has a short wavelength  ->  scattered about 16 times more than
   red  ->  the scattered light filling the sky is BLUE.

   AT SUNSET the light travels a long path through the atmosphere; almost
   all the blue is scattered out sideways, so what reaches your eye
   directly is the leftover RED and ORANGE.

   (Note: 1/lam^4 works only when the scattering particles are much
    SMALLER than the wavelength. Clouds have big water droplets which
    scatter all colours equally — that is why clouds are WHITE.)
```

---

# TOPIC 21 — Polaroids, and MALUS' LAW

## What a polaroid is

```
   A POLAROID is a thin commercial sheet containing long-chain molecules
   all lined up in one direction (e.g. quinine iodosulphate crystals or
   stretched polyvinyl alcohol). It absorbs the component of the electric
   field ALONG the chains and transmits the component PERPENDICULAR to
   them.

   The direction it TRANSMITS is called the PASS AXIS (or polarising
   axis / transmission axis).

   RESULT: unpolarised light in  ->  plane polarised light out, with
           HALF the original intensity.
```

## The two-polaroid experiment

```
   POLARISER  P1                    ANALYSER  P2

   unpolarised          plane polarised                 final
   light  I0            light  I0/2                   intensity
   ~~~~~~~~~~>   |||   ==========>   |||   ---------->   I
                 |||                 |||
                 |||                 |||
            (pass axis          (pass axis at
             vertical)           angle theta)

   theta =  0 deg   ->  P1 and P2 PARALLEL  ->  MAXIMUM light through
   theta = 90 deg   ->  P1 and P2 CROSSED   ->  NO light at all (DARK)

   Rotating P2 through a full turn gives TWO maxima and TWO minima.
```

## MALUS' LAW

```
  +=====================================================================+
  |                                                                      |
  |        I   =   I0  cos^2 ( theta )                                   |
  |                                                                      |
  |  where  I0    = intensity of the PLANE POLARISED light falling on    |
  |                 the analyser                                         |
  |         theta = angle between the pass axes of the polariser and     |
  |                 the analyser                                         |
  |         I     = intensity transmitted by the analyser                |
  |                                                                      |
  |  (It comes from resolving the amplitude:  A = A0 cos theta,          |
  |   and intensity is proportional to amplitude squared.)               |
  +=====================================================================+
```

```
  RESOLVING THE AMPLITUDE — the one-line derivation

                     A0
                     ^
                     |\
                     | \
                     |  \        A0 cos(theta)   <- component along the
                     |   \  --------------->        analyser's pass axis
             theta   |    \
                     |     \                        A0 sin(theta) is
        -------------+------\--------->             ABSORBED
                            pass axis of the analyser

        transmitted amplitude  =  A0 cos(theta)

        I is proportional to A^2   =>   I  =  I0 cos^2(theta)
```

## The graph of Malus' law

```
   I
   ^
 I0|*                                             *
   | *                                           *
   |  *                                         *
   |   *                                       *
   |    *                                     *
I0/2|- - -*- - - - - - - - - - - - - - - - - *- - - - - - -
   |       *                               *
   |        *                             *
   |          *                         *
   |            *                     *
   |               *               *
   |                   *       *
  0+---------------------*-*-------------------------------> theta
   0        45          90         135        180  (degrees)

   theta =  0   ->  I = I0        (parallel, maximum)
   theta = 45   ->  I = I0 / 2
   theta = 90   ->  I = 0         (crossed, complete darkness)
   theta = 135  ->  I = I0 / 2
   theta = 180  ->  I = I0        (parallel again)

   The curve is a cos^2 curve: it never goes negative, and its
   AVERAGE value over a full turn is I0 / 2.
```

## The unpolarised-light rule

```
  +---------------------------------------------------------------------+
  |  When UNPOLARISED light of intensity I(un) passes through the        |
  |  FIRST polaroid, the transmitted intensity is ALWAYS                 |
  |                                                                      |
  |                    I  =  I(un) / 2                                   |
  |                                                                      |
  |  no matter how the polaroid is turned, because the average of        |
  |  cos^2 over all random directions is 1/2.                            |
  |                                                                      |
  |  Malus' law with cos^2(theta) applies only from the SECOND polaroid  |
  |  onwards.                                                            |
  +---------------------------------------------------------------------+
```

## Uses of polaroids

```
   1.  SUNGLASSES  -  cut the horizontally polarised glare from roads,
                      water and car bonnets.
   2.  CAR HEADLIGHTS and windscreens - to reduce dazzle at night.
   3.  CAMERA FILTERS - darken a blue sky and remove reflections from
                        glass and water.
   4.  LCD SCREENS (calculators, phones, laptops) - a liquid crystal
                        between two crossed polaroids switches pixels
                        on and off.
   5.  3-D CINEMA GLASSES - the two eyes receive images polarised at
                        90 degrees to each other.
   6.  WINDOW PANES / SKYLIGHTS of aircraft - to control the light let in.
   7.  STRESS ANALYSIS of plastic and glass models (photoelasticity).
   8.  Studying the OPTICAL ACTIVITY of sugar solutions (polarimeters,
       used in the sugar industry to measure concentration).
```

### WORKED EXAMPLE 21.1
Unpolarised light of intensity I0 falls on two polaroids whose pass axes make
an angle of 60 degrees. Find the intensity of the emergent light.

```
   After the FIRST polaroid:      I1  =  I0 / 2

   After the SECOND (Malus):      I2  =  I1 cos^2 (60)

                                      =  (I0 / 2) x (0.5)^2

                                      =  (I0 / 2) x 0.25

                                      =  I0 / 8
```

### WORKED EXAMPLE 21.2
At what angle should the analyser be set so that the intensity falls to one
quarter of its maximum value?

```
   I  =  I0 cos^2 (theta)     and     I  =  I0 / 4

        cos^2 (theta)  =  1 / 4

        cos (theta)    =  1 / 2

             theta     =  60 degrees
```

### WORKED EXAMPLE 21.3
Three polaroids are stacked. The first and the third are crossed (90 degrees
apart). The middle one is at 30 degrees to the first. Unpolarised light of
intensity I0 enters. Find the final intensity.

```
   After polaroid 1:      I1  =  I0 / 2

   Polaroid 2 is at 30 deg to polaroid 1:

        I2  =  I1 cos^2 (30)  =  (I0/2) x (sqrt(3)/2)^2
                              =  (I0/2) x (3/4)  =  3 I0 / 8

   Polaroid 3 is at 90 deg to polaroid 1, so it is at
   (90 - 30) = 60 deg to polaroid 2:

        I3  =  I2 cos^2 (60)  =  (3 I0 / 8) x (1/4)  =  3 I0 / 32

   ANSWER:  3 I0 / 32   =  0.094 I0

   NOTE THE SURPRISE: with only polaroids 1 and 3 (crossed) the output
   is ZERO. Slipping a THIRD polaroid in between lets light through
   again! This is a favourite EAPCET question.
```

### WORKED EXAMPLE 21.4
Plane polarised light of intensity 32 W/m^2 falls on an analyser. The
transmitted intensity is 8 W/m^2. Find the angle between the pass axes.

```
   I  =  I0 cos^2 (theta)

    8  =  32 cos^2 (theta)

   cos^2 (theta)  =  8 / 32  =  1 / 4

   cos (theta)    =  1 / 2      ->     theta  =  60 degrees
```

> **TRAP:** if the incident light is **unpolarised**, ALWAYS halve it at the
> first polaroid before using `cos^2`. If the incident light is already
> **plane polarised**, do NOT halve it. Read the question word by word.

---

# TOPIC 22 — Two extra results worth knowing (competitive exams)

## (a) Shift of the fringe pattern by a thin film

```
   If a transparent sheet of thickness t and refractive index mu is put
   in front of ONE slit, the extra optical path it adds is (mu - 1) t,
   and the whole pattern SHIFTS towards that slit by

         +--------------------------------------------+
         |               D ( mu - 1 ) t                |
         |    shift  =  ----------------               |
         |                     d                       |
         |                                             |
         |    number of fringes shifted =              |
         |                    ( mu - 1 ) t  /  lam     |
         +--------------------------------------------+

   The fringe WIDTH does not change — the whole pattern just slides.
```

## (b) Missing orders in a double slit of finite width

```
   Real slits have a width a as well as a separation d, so the
   interference fringes sit inside a diffraction envelope. An
   interference maximum is MISSING wherever it coincides with a
   diffraction minimum:

           d sin th = n lam       (interference bright)
           a sin th = m lam       (diffraction dark)

           +-------------------------+
           |     d        n           |
           |   -----  =  ---          |
           |     a        m           |
           +-------------------------+

   Example: if d = 2a, then n/m = 2, so orders n = 2, 4, 6 ... are
   MISSING.
```

### WORKED EXAMPLE 22.1
A thin mica sheet of thickness 6 micrometre and mu = 1.5 is placed over one
slit. If lam = 6000 Å, how many fringes does the pattern shift?

```
                          ( mu - 1 ) t
   number of fringes  =  --------------
                              lam

                          (1.5 - 1) x 6 x 10^-6
                      =  ------------------------
                                6 x 10^-7

                          0.5 x 6 x 10^-6         3 x 10^-6
                      =  ------------------  =  -------------  =  5
                             6 x 10^-7            6 x 10^-7

   The pattern shifts by 5 fringe widths, towards the covered slit.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  DEFINITIONS AND STATEMENTS
  [ ]  Did I define a wavefront as "the locus of points vibrating in
       the SAME PHASE"?
  [ ]  Did I state BOTH parts of Huygens' principle (secondary wavelets
       AND forward envelope)?
  [ ]  Did I say a ray is the NORMAL to the wavefront?
  [ ]  Did I define coherent sources with BOTH conditions (same
       frequency AND constant phase difference)?

  DIAGRAMS
  [ ]  Is every diagram LABELLED (A, B, P, Q, C, i, r, S1, S2, d, D,
       theta, a)?
  [ ]  Are the ARROWHEADS drawn on the rays?
  [ ]  In the Huygens proofs, did I mark each wavelet radius as v t?
  [ ]  In the Young's diagram, did I mark d between the slits and D from
       the slits to the screen?
  [ ]  Did I write "NOT TO SCALE" if the diagram looks squashed?

  THE DERIVATIONS
  [ ]  Reflection proof: did I state that both rays travel in the SAME
       medium so PC = BQ?
  [ ]  Refraction proof: did I use TWO DIFFERENT speeds v1 and v2?
  [ ]  Did I finish the refraction proof with the boxed statement
       "sin i / sin r = v1/v2 = mu21 = a constant, which is Snell's law"?
  [ ]  Young's: did I derive the path difference as y d / D BEFORE
       jumping to beta?
  [ ]  Did I state the assumption D >> d?

  NUMERICALS
  [ ]  Did I convert Angstrom -> metres  (1 A = 10^-10 m)?
  [ ]  Did I convert nm -> metres        (1 nm = 10^-9 m)?
  [ ]  Did I convert mm -> metres        (1 mm = 10^-3 m)?
  [ ]  Did I convert micrometre -> metres(1 um = 10^-6 m)?
  [ ]  "Distance between the 1st and the Nth fringe" = (N - 1) beta —
       did I count GAPS, not fringes?
  [ ]  For a liquid, did I divide beta by mu?
  [ ]  For unpolarised light, did I halve the intensity at the FIRST
       polaroid before applying cos^2?
  [ ]  Is my final answer written WITH ITS UNIT?

  THE CLASSIC CONFUSIONS
  [ ]  Interference: n lam = BRIGHT.  Diffraction: n lam = DARK.
       Did I use the right one?
  [ ]  Narrower slit  ->  WIDER central maximum. Did I get the direction
       right?
  [ ]  Frequency does NOT change on refraction. Wavelength and speed do.
  [ ]  Widening the SOURCE slit changes the CONTRAST, not beta.
  [ ]  tan(i_p) = mu, NOT sin(i_p) = mu.
  [ ]  Did I remember that at i_p the reflected and refracted rays are
       PERPENDICULAR?
```

---

**Final word.** This chapter has only about six real formulas and four real
diagrams. Everything else is words. If you can draw the Young's double slit
diagram and write `beta = D lam / d` with its derivation, you have already
banked most of the marks this chapter can give you. Go and draw it now.
