# Gravitation — Competitive Exam Questions (EAPCET / JEE)

**Physics 1st Year · Chapter 9**

```
  +---------------+-----------------+---------------------+--------------------+
  |  EXAM         |  PHYSICS Qs     |  FROM GRAVITATION   |  MARKING           |
  +---------------+-----------------+---------------------+--------------------+
  |  AP EAPCET    |       40        |     2 to 3          |  +1 , NO NEGATIVE  |
  |  TG EAPCET    |       40        |     2 to 3          |  +1 , NO NEGATIVE  |
  |  JEE Main     |       25        |     1 to 2          |  +4 , -1           |
  +---------------+-----------------+---------------------+--------------------+

  EAPCET has NO NEGATIVE MARKING.  NEVER leave a Gravitation question blank -
  even a guess is free.
  JEE Main has -1, so skip only what you genuinely cannot start.
```

**Questions below are grouped by PATTERN, not by year, because the same shapes come back
every session with different numbers.**

**Data used throughout:**
```
  G = 6.67 x 10^-11   M = 6 x 10^24 kg   R = 6.4 x 10^6 m
  g = 9.8 m/s^2       G M = g R^2 = 4.0 x 10^14        v_e = 11.2 km/s
```

---

# PATTERN 1 — G: VALUE, UNITS, DIMENSIONS

### Q1
The dimensional formula of the universal gravitational constant G is
(a) [M L^3 T^-2]   (b) [M^-1 L^3 T^-2]   (c) [M^-1 L^2 T^-2]   (d) [M L^-3 T^2]

**ANSWER: (b)**
```
        F r^2      [M L T^-2][L^2]      [M L^3 T^-2]
   G =  ------ =  ----------------- =  -------------- = [ M^-1 L^3 T^-2 ]
        m1 m2         [M][M]              [M^2]
```

---

### Q2
The value of G in the CGS system is
(a) 6.67 x 10^-11   (b) 6.67 x 10^-8   (c) 6.67 x 10^-5   (d) 6.67 x 10^-13
(in dyne cm^2 g^-2)

**ANSWER: (b)** `6.67 x 10^-8 dyne cm^2 g^-2`.

> **SHORTCUT:** SI to CGS for G: multiply by 10^3. 10^-11 -> 10^-8.

---

### Q3
Which of the following is TRUE?
(a) G depends on the medium between the bodies
(b) G is different on the Moon
(c) G is the same everywhere in the universe
(d) G has the same dimensions as g

**ANSWER: (c)** G is a true universal constant. It is unaffected by the medium, the
temperature, or the location. Its dimensions `[M^-1 L^3 T^-2]` differ completely from
g's `[L T^-2]`.

---

# PATTERN 2 — FORCE BETWEEN MASSES, SUPERPOSITION

### Q4
Three particles each of mass m are placed at the corners of an equilateral triangle of
side a. The gravitational force on any one of them is
(a) G m^2 / a^2   (b) 2 G m^2 / a^2   (c) sqrt(3) G m^2 / a^2   (d) 3 G m^2 / a^2

**ANSWER: (c)**
```
   Two equal forces F = G m^2 / a^2  at 60 degrees to each other.

   Resultant = sqrt( F^2 + F^2 + 2 F^2 cos 60 ) = F sqrt(1 + 1 + 1) = sqrt(3) F
```

> **SHORTCUT:** Two equal forces at 60 degrees give `sqrt(3) F`; at 90 degrees they give
> `sqrt(2) F`; at 120 degrees they give `F`. Memorise those three.

---

### Q5
If the distance between two masses is increased by 50 %, the gravitational force becomes
(a) 4F/9   (b) 9F/4   (c) 2F/3   (d) 3F/2

**ANSWER: (a)**
```
   r -> 1.5 r ,    F ~ 1/r^2   ->   F' = F / (1.5)^2 = F / 2.25 = 4F/9
```

---

### Q6
Four particles of equal mass m are placed at the corners of a square of side a. The net
gravitational force on any one of them is
(a) zero
(b) `(G m^2 / a^2) (2 sqrt(2) + 1) / 2`
(c) `2 G m^2 / a^2`
(d) `4 G m^2 / a^2`

**ANSWER: (b)**
```
   Two adjacent masses at distance a:  each pulls with  F = G m^2 / a^2 ,
   at 90 degrees to each other  ->  resultant  sqrt(2) F , along the diagonal.

   The diagonal mass is at distance  a sqrt(2) , so it pulls with
        F' = G m^2 / (2 a^2) = F / 2 ,   ALONG THE SAME DIAGONAL.

   Total = sqrt(2) F  +  F/2  =  F ( 2 sqrt(2) + 1 ) / 2
```

---

# PATTERN 3 — KEPLER'S THIRD LAW (RATIOS)

### Q7
Two satellites orbit the Earth at radii r and 4r. The ratio of their periods is
(a) 1 : 2   (b) 1 : 4   (c) 1 : 8   (d) 1 : 16

**ANSWER: (c)**
```
   T ~ r^(3/2)     ->     T1/T2 = (1/4)^(3/2) = 1/8
```

> **SHORTCUT:** `T ~ r^1.5`. Radius x 4 -> period x 8. Radius x 9 -> period x 27.

---

### Q8
If the distance of the Earth from the Sun were halved, the length of the year would
become approximately
(a) 182 days   (b) 129 days   (c) 258 days   (d) 730 days

**ANSWER: (b)**
```
   T ~ a^1.5     ->    T' = 365 x (1/2)^1.5 = 365 / 2.828 = 129 days
```

---

### Q9
If the gravitational force varied as `1 / r^3` instead of `1 / r^2`, then Kepler's third
law would become
(a) T^2 ~ r^3   (b) T^2 ~ r^4   (c) T^2 ~ r^2   (d) T ~ r^3

**ANSWER: (b)**
```
   m v^2 / r  =  k / r^3     ->    v^2  =  k / (m r^2)

   T = 2 pi r / v    ->    T^2  =  4 pi^2 r^2 / v^2  =  4 pi^2 m r^4 / k

   So   T^2  ~  r^4
```

> **SHORTCUT:** For `F ~ 1/r^n`, the general result is `T^2 ~ r^(n+1)`.
> Check: n = 2 gives T^2 ~ r^3, which is Kepler. n = 3 gives r^4.

---

# PATTERN 4 — KEPLER'S SECOND LAW / ANGULAR MOMENTUM

### Q10
A planet's distances at perihelion and aphelion are r1 and r2. The ratio of its speeds
at those two points, v1 : v2, is
(a) r1 : r2   (b) r2 : r1   (c) sqrt(r1) : sqrt(r2)   (d) r1^2 : r2^2

**ANSWER: (b)**
```
   Angular momentum conserved:  m v1 r1 = m v2 r2   ->   v1 / v2 = r2 / r1
```

---

### Q11
The areal velocity of a planet of mass m and angular momentum L is
(a) L / m   (b) L / 2m   (c) 2L / m   (d) L m / 2

**ANSWER: (b)** `dA/dt = L / 2m`, and it is constant because gravity is a central force
so the torque about the Sun is zero.

---

### Q12
Which of the following remains constant for a planet moving round the Sun in an
elliptical orbit?
(a) linear momentum   (b) kinetic energy   (c) angular momentum   (d) speed

**ANSWER: (c)** Angular momentum (and also total energy). Speed, KE and linear momentum
all change continuously round the ellipse.

---

# PATTERN 5 — g ON ANOTHER PLANET

### Q13
A planet has mass twice that of the Earth and radius twice that of the Earth. The value
of g on it is
(a) 19.6   (b) 9.8   (c) 4.9   (d) 2.45   (m/s^2)

**ANSWER: (c)**
```
          G(2M)        2   G M      1
   g' =  --------  =  --- ------- = --- g   =  4.9 m/s^2
          (2R)^2       4   R^2       2
```

---

### Q14
A planet has the same mean density as the Earth but twice its radius. The value of g on
it is
(a) 4.9   (b) 9.8   (c) 19.6   (d) 39.2   (m/s^2)

**ANSWER: (c)**
```
   g = (4/3) pi G R rho.   Same rho, so   g ~ R.   R doubles -> g doubles = 19.6
```

> **SHORTCUT:** MASS given -> use `g ~ M/R^2`. DENSITY given -> use `g ~ R rho`.
> Picking the wrong one is the single commonest error in this pattern.

---

### Q15
The mean density of the Earth is proportional to
(a) g R   (b) g / R   (c) g R^2   (d) g / R^2

**ANSWER: (b)** `rho = 3g / (4 pi G R)`, so `rho ~ g / R`.

---

# PATTERN 6 — VARIATION OF g WITH HEIGHT

### Q16
At what height above the Earth's surface does g become one-fourth of its surface value?
(a) R/2   (b) R   (c) 2R   (d) 3R

**ANSWER: (b)**
```
    g       R^2
   --- = ---------    ->  (R+h)^2 = 4R^2  ->  R + h = 2R  ->  h = R
    4     (R+h)^2
```

> **SHORTCUT:** `g -> g/n^2` at `r = nR`, i.e. at height `h = (n-1)R`.
> g/4 at h = R.  g/9 at h = 2R.  g/16 at h = 3R.

---

### Q17
The value of g at a height equal to half the radius of the Earth is
(a) 4.36   (b) 4.9   (c) 2.45   (d) 6.53   (m/s^2)

**ANSWER: (a)**
```
              R^2               ( 2 )^2      4
   g_h = g ----------  =  g  x  (---)   =  --- x 9.8  =  4.36 m/s^2
            (1.5R)^2             ( 3 )      9
```

---

### Q18
The percentage decrease in g at a height of 32 km above the Earth's surface is
(a) 0.5 %   (b) 1 %   (c) 2 %   (d) 5 %

**ANSWER: (b)**
```
   Fractional decrease = 2h/R = 2(32)/6400 = 0.01  =  1 %
```

---

# PATTERN 7 — VARIATION OF g WITH DEPTH

### Q19
At what depth below the Earth's surface is the value of g half its surface value?
(a) R/4   (b) R/2   (c) 3R/4   (d) R

**ANSWER: (b)**
```
   g(1 - d/R) = g/2   ->   d/R = 1/2   ->   d = R/2 = 3200 km
```

---

### Q20
The value of g at a depth of R/4 below the surface is
(a) 2.45   (b) 4.9   (c) 7.35   (d) 9.8   (m/s^2)

**ANSWER: (c)**
```
   g_d = g (1 - 1/4) = 0.75 x 9.8 = 7.35 m/s^2
```

---

### Q21
The weight of a body at the centre of the Earth is
(a) infinite   (b) mg   (c) mg/2   (d) zero

**ANSWER: (d)** `g_d = g(1 - d/R)`; at the centre d = R so g = 0, hence W = 0.
(All the surrounding shells pull equally in every direction and cancel.)

---

# PATTERN 8 — SAME g AT A HEIGHT AND AT A DEPTH

### Q22
The value of g at a height h equals the value of g at a depth d. Then (h small)
(a) d = h   (b) d = h/2   (c) d = 2h   (d) d = 4h

**ANSWER: (c)**
```
   g(1 - 2h/R) = g(1 - d/R)     ->     2h/R = d/R     ->     d = 2h
```

> **SHORTCUT:** Remember the sentence "**depth is double the height**". It answers this
> whole pattern instantly.

---

### Q23
g at a height of 10 km equals g at a depth of
(a) 5 km   (b) 10 km   (c) 20 km   (d) 40 km

**ANSWER: (c)** d = 2h = 20 km.

---

# PATTERN 9 — ROTATION AND LATITUDE

### Q24
If the Earth suddenly stopped rotating, the value of g at the equator would
(a) decrease by 0.034 m/s^2   (b) increase by 0.034 m/s^2
(c) remain the same           (d) become zero

**ANSWER: (b)**
```
   g' = g - R omega^2 cos^2(lambda). Stop the rotation (omega = 0) and the
   reduction disappears, so g INCREASES by R omega^2

        = 6.4 x 10^6 x (7.27 x 10^-5)^2  =  0.034 m/s^2
```
At the **poles** it would not change at all (cos 90 = 0).

---

### Q25
The angular speed at which the Earth must rotate for a body at the equator to become
weightless is
(a) 1.24 x 10^-3 rad/s   (b) 7.27 x 10^-5 rad/s
(c) 1.24 x 10^-5 rad/s   (d) 3.14 x 10^-3 rad/s

**ANSWER: (a)**
```
   g = R omega^2   ->   omega = sqrt(g/R) = sqrt(9.8 / 6.4 x 10^6)
                              = sqrt(1.531 x 10^-6) = 1.24 x 10^-3 rad/s

   New day length T = 2 pi / omega = 5075 s = 84.6 minutes = 1.4 hours
```

> **SHORTCUT:** `sqrt(g/R)` is the SAME expression as the angular speed of a
> surface-grazing satellite. "Weightless at the equator" = "the ground is in orbit".

---

### Q26
The reduction in g due to rotation at latitude 60 degrees compared with that at the
equator is
(a) the same   (b) half   (c) one-quarter   (d) one-eighth

**ANSWER: (c)** The reduction is `R omega^2 cos^2(lambda)`, and `cos^2 60 = 1/4`.

---

# PATTERN 10 — FIELD AND POTENTIAL OF SPHERES AND SHELLS

### Q27
The gravitational field intensity and potential INSIDE a uniform spherical shell of mass
M and radius R are respectively
(a) 0 and 0   (b) 0 and -GM/R   (c) GM/R^2 and -GM/R   (d) 0 and -GM/r

**ANSWER: (b)** The field inside a shell is **zero** everywhere, but the potential is
**constant and equal to its surface value** `-GM/R`. (Zero field means the potential
does not change - not that it is zero.)

---

### Q28
The gravitational potential at the centre of a uniform solid sphere of mass M and radius
R is
(a) -GM/R   (b) -3GM/2R   (c) -GM/2R   (d) zero

**ANSWER: (b)** `V_centre = -3GM/(2R)` = 1.5 times the surface value.

---

### Q29
The relation between gravitational field intensity E and potential V is
(a) E = dV/dr   (b) E = -dV/dr   (c) V = -dE/dr   (d) E = V r

**ANSWER: (b)** `E = -dV/dr`. Check with `V = -GM/r`:
```
    dV/dr  =  + G M / r^2       ->      E  =  - dV/dr  =  - G M / r^2
```
The minus sign says the radial component points INWARD, i.e. the field points from
high potential to low potential - towards the attracting mass.

---

# PATTERN 11 — POTENTIAL ENERGY AND WORK DONE

### Q30
The work done in lifting a body of mass m from the Earth's surface to a height equal to
the radius of the Earth is
(a) mgR   (b) mgR/2   (c) 2mgR   (d) mgR/4

**ANSWER: (b)**
```
                  G M m       (  G M m )       G M m       g R^2 m       m g R
   Delta U  =  -  -------  -  ( -------- ) =  -------  =  ---------  =  -------
                    2R        (    R    )       2 R          2 R           2
```

> **SHORTCUT:** Lifting to height h = R costs `mgR/2`, NOT `mgR`. The naive `mgh` answer
> is exactly twice too big. Examiners love this distractor.

---

### Q31
The work required to take a body of mass m from the Earth's surface to infinity is
(a) mgR/2   (b) mgR   (c) 2mgR   (d) infinite

**ANSWER: (b)**
```
                          (   G M m )       G M m
   W  =  0  -  U(R)  =  - ( - ------ )  =  -------  =  m g R
                          (     R   )         R
```

---

### Q32
The gravitational potential energy of a body of mass m on the Earth's surface is
(a) mgR   (b) -mgR   (c) -mgR/2   (d) zero

**ANSWER: (b)** `U = -GMm/R = -(gR^2)m/R = -mgR`.

---

# PATTERN 12 — ESCAPE VELOCITY

### Q33
The escape velocity from a planet of mass 2M and radius R (Earth values M, R) is
(a) 11.2   (b) 15.8   (c) 22.4   (d) 5.6   (km/s)

**ANSWER: (b)**
```
   v_e ~ sqrt(M/R).  M doubles, R unchanged  ->  v_e x sqrt(2)

   11.2 x 1.414 = 15.8 km/s
```

---

### Q34
The escape velocity of a body from the Earth's surface does NOT depend on
(a) the mass of the Earth   (b) the radius of the Earth
(c) the mass of the body    (d) the value of g

**ANSWER: (c)** The body's mass cancels out in `(1/2)mv_e^2 = GMm/R`.
(It also does not depend on the direction of projection.)

---

### Q35
If the radius of the Earth shrank by 4 % with its mass unchanged, the escape velocity
would
(a) decrease by 2 %   (b) increase by 2 %
(c) decrease by 4 %   (d) increase by 4 %

**ANSWER: (b)**
```
   v_e ~ R^(-1/2)     ->     % change in v = - (1/2) x ( % change in R )
                                            = - (1/2) ( -4 % )  =  + 2 %
```

> **SHORTCUT:** For `y ~ x^n`, a small percentage change gives `%y = n x %x`.
> Here n = -1/2.

---

### Q36
The escape velocity from the Moon is small (2.38 km/s). The direct consequence is that
(a) the Moon has no rotation   (b) the Moon has no atmosphere
(c) the Moon has no gravity    (d) the Moon has no craters

**ANSWER: (b)** Gas molecules on the Moon reach speeds comparable to 2.38 km/s, so they
escape. Over billions of years the entire atmosphere has been lost.

---

# PATTERN 13 — PROJECTED WITH A MULTIPLE OF v_e

### Q37
A body is projected from the Earth's surface with a speed `2 v_e`. Its speed far away
from the Earth is
(a) v_e   (b) sqrt(2) v_e   (c) sqrt(3) v_e   (d) 2 v_e

**ANSWER: (c)**
```
   (1/2)(2v_e)^2 - (1/2)v_e^2  =  (1/2)v^2       [ since GM/R = (1/2)v_e^2 ]

        2 v_e^2  -  0.5 v_e^2  =  0.5 v^2

              1.5 v_e^2  =  0.5 v^2   ->   v^2 = 3 v_e^2  ->  v = sqrt(3) v_e
```

> **SHORTCUT:** Projected at `n v_e` -> speed at infinity is `v_e sqrt(n^2 - 1)`.
> n = 2 gives sqrt(3) v_e. n = 3 gives sqrt(8) v_e.

---

### Q38
A body is projected vertically with half the escape velocity. The maximum height it
reaches above the surface is
(a) R/2   (b) R/3   (c) R/4   (d) R

**ANSWER: (b)**
```
   v = v_e/2  ->  v^2 = v_e^2/4 = 2gR/4 = gR/2

   Energy conservation (surface -> highest point, where speed = 0):

       (1/2)(gR/2)  -  gR   =   -  g R^2 / r

            gR/4  -  gR     =   -  g R^2 / r

               -  3gR/4     =   -  g R^2 / r

                     r  =  4R/3       ->     h = r - R = R/3
```

> **SHORTCUT:** Projected at `n v_e` (with n < 1), the max height is
> `h = R n^2 / (1 - n^2)`. Check n = 1/2: `R(1/4)/(3/4) = R/3`. Correct.

---

# PATTERN 14 — ORBITAL VELOCITY

### Q39
The orbital velocity of a satellite very close to the Earth's surface is about
(a) 5.6 km/s   (b) 7.9 km/s   (c) 11.2 km/s   (d) 3.1 km/s

**ANSWER: (b)** `v_o = sqrt(gR) = sqrt(9.8 x 6.4 x 10^6) = 7.92 km/s`.

---

### Q40
The orbital velocity of a satellite at a height equal to the radius of the Earth is
(a) 11.2   (b) 7.9   (c) 5.6   (d) 3.1   (km/s)

**ANSWER: (c)**
```
   At height h = R the orbit radius is  r = 2R :

              (  G M  )        (  g R^2 )        (  g R )        7.92
   v_o = sqrt (-------) = sqrt (--------) = sqrt (------)  =  ---------  = 5.6 km/s
              (  2 R  )        (  2 R   )        (   2  )       sqrt(2)
```

---

### Q41
Two satellites of masses m and 4m orbit the Earth at the same height. The ratio of their
orbital speeds is
(a) 1 : 4   (b) 4 : 1   (c) 1 : 2   (d) 1 : 1

**ANSWER: (d)** The satellite's own mass cancels out: `v_o = sqrt(GM/r)` depends only on
the height, so both move at the same speed.

---

### Q42
The relation between the escape velocity and the orbital velocity of a satellite close to
the Earth's surface is
(a) v_e = v_o   (b) v_e = 2 v_o   (c) v_e = sqrt(2) v_o   (d) v_o = sqrt(2) v_e

**ANSWER: (c)** `v_e = sqrt(2gR)` and `v_o = sqrt(gR)`, so `v_e = sqrt(2) v_o`.

---

# PATTERN 15 — TIME PERIOD AND HEIGHT

### Q43
The minimum possible time period of a satellite orbiting the Earth is about
(a) 24 hours   (b) 84.6 minutes   (c) 100 minutes   (d) 12 hours

**ANSWER: (b)** `T_min = 2 pi sqrt(R/g) = 2(3.14) sqrt(6.4x10^6 / 9.8) = 5077 s
= 84.6 minutes`. No satellite can go round faster than this.

---

### Q44
A satellite orbits at a radius 4R (R = radius of the Earth). Its period is
(a) 84.6 min   (b) 5.6 hours   (c) 11.3 hours   (d) 24 hours

**ANSWER: (c)**
```
   T ~ r^1.5.  Grazing orbit (r = R) has T = 84.6 min.

   T = 84.6 x 4^1.5 = 84.6 x 8 = 677 minutes = 11.3 hours
```

---

### Q45
The orbital radius of a geostationary satellite is about
(a) 6400 km   (b) 36 000 km   (c) 42 400 km   (d) 384 000 km

**ANSWER: (c)** The **radius from the centre** is about 42 400 km; the **height above
the surface** is about 36 000 km. Read the question carefully - option (b) is the trap.

---

# PATTERN 16 — ENERGY OF A SATELLITE

### Q46
If the kinetic energy of a satellite in a circular orbit is E, its total energy is
(a) E   (b) -E   (c) 2E   (d) -2E

**ANSWER: (b)** `KE = +GMm/2r`, `TE = -GMm/2r`, so `TE = -KE = -E`.

---

### Q47
For a satellite in a circular orbit, KE : PE : TE is
(a) 1 : 1 : 1   (b) 1 : -2 : -1   (c) 1 : 2 : 3   (d) 2 : -1 : 1

**ANSWER: (b)**
```
   KE = +GMm/2r      PE = -GMm/r      TE = -GMm/2r      ->     1 : -2 : -1
```

---

### Q48
The additional energy that must be supplied to a satellite of mass m in an orbit of
radius r to make it escape is
(a) GMm/r   (b) GMm/2r   (c) 2GMm/r   (d) GMm/4r

**ANSWER: (b)** Its total energy is `-GMm/2r`; escaping needs total energy zero, so the
extra energy required (the **binding energy**) is `GMm/2r`.

---

### Q49
The total energy of a satellite is negative. This means the satellite is
(a) losing energy   (b) bound to the Earth
(c) about to escape   (d) moving with decreasing speed

**ANSWER: (b)** Negative total energy = a closed, bound orbit. Zero would mean it just
escapes; positive would mean it escapes with speed to spare.

---

# PATTERN 17 — GEOSTATIONARY AND POLAR SATELLITES

### Q50
The time period of a geostationary satellite is
(a) 1 hour   (b) 12 hours   (c) 24 hours   (d) 365 days

**ANSWER: (c)** 24 hours (one sidereal day, 23 h 56 min), so that it keeps pace with the
Earth's rotation and appears fixed.

---

### Q51
A geostationary satellite must orbit
(a) over the poles                (b) in the equatorial plane, west to east
(c) in any plane, east to west    (d) in a highly elliptical orbit

**ANSWER: (b)** Four conditions: equatorial plane, west to east, circular orbit,
period 24 hours.

---

### Q52
Polar satellites are used mainly for
(a) television broadcasting   (b) remote sensing and detailed weather data
(c) GPS timekeeping only      (d) nothing - they are obsolete

**ANSWER: (b)** They fly low (500-800 km) and scan the whole globe daily, so they give
sharp, detailed images. Indian examples: IRS, CARTOSAT.

---

### Q53
The minimum number of geostationary satellites needed to cover the whole Earth (except
the polar regions) is
(a) 1   (b) 2   (c) 3   (d) 4

**ANSWER: (c)** Three, spaced 120 degrees apart around the equator.

---

# PATTERN 18 — WEIGHTLESSNESS

### Q54
An astronaut in an orbiting satellite feels weightless because
(a) there is no gravity in space
(b) the satellite is beyond the Earth's field
(c) the astronaut and the satellite fall with the same acceleration, so the normal
    reaction is zero
(d) the astronaut's mass becomes zero

**ANSWER: (c)** At 400 km, g is still about 8.7 m/s^2 - gravity is very much present.
Both astronaut and satellite have the same acceleration `g_h`, so `N = 0`.

---

### Q55
A man stands on a weighing machine in a lift whose cable snaps. The machine reads
(a) his true weight   (b) twice his weight   (c) half his weight   (d) zero

**ANSWER: (d)** `N = m(g - a)` and in free fall a = g, so `N = 0`.

---

### Q56
A simple pendulum inside a freely falling lift has a time period of
(a) 2 pi sqrt(L/g)   (b) zero   (c) infinite   (d) 2 pi sqrt(L/2g)

**ANSWER: (c)** `T = 2 pi sqrt(L / g_eff)` and `g_eff = 0` in free fall, so T is
infinite - the pendulum simply does not oscillate.

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+--------------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY                 |
  +--------------------------------------+--------------------------------------+
  |  G and M given, formula wants g,R    |  Write  G M = g R^2  and swap        |
  +--------------------------------------+--------------------------------------+
  |  "at a height h"                     |  Use  r = R + h  from the CENTRE     |
  +--------------------------------------+--------------------------------------+
  |  h given as R, R/2, 2R (LARGE)       |  EXACT formula  g R^2/(R+h)^2        |
  +--------------------------------------+--------------------------------------+
  |  h given in km, or a "% decrease"    |  Approx formula  g(1 - 2h/R)         |
  +--------------------------------------+--------------------------------------+
  |  "at a depth d"                      |  g(1 - d/R) - NO factor of 2         |
  +--------------------------------------+--------------------------------------+
  |  "same g at height and depth"        |  d = 2h. Answer it in 3 seconds.     |
  +--------------------------------------+--------------------------------------+
  |  "Earth stops rotating"              |  g INCREASES at the equator by       |
  |                                      |  R omega^2 = 0.034; poles UNCHANGED  |
  +--------------------------------------+--------------------------------------+
  |  "weightless at the equator"         |  omega = sqrt(g/R) = 1.24e-3 rad/s,  |
  |                                      |  day = 84.6 min                      |
  +--------------------------------------+--------------------------------------+
  |  Planet with given DENSITY           |  g ~ R rho   (g grows with R)        |
  +--------------------------------------+--------------------------------------+
  |  Planet with given MASS              |  g ~ M / R^2 (g falls with R)        |
  +--------------------------------------+--------------------------------------+
  |  "escape velocity of planet X"       |  v_e = 11.2 sqrt( (M/Me) / (R/Re) )  |
  +--------------------------------------+--------------------------------------+
  |  "projected with n v_e"              |  speed at infinity = v_e sqrt(n^2-1) |
  |  (n > 1)                             |                                      |
  +--------------------------------------+--------------------------------------+
  |  "projected with n v_e", n < 1       |  max height h = R n^2 / (1 - n^2)    |
  +--------------------------------------+--------------------------------------+
  |  Ratio of satellite PERIODS          |  T ~ r^1.5                           |
  +--------------------------------------+--------------------------------------+
  |  Ratio of satellite SPEEDS           |  v ~ 1/sqrt(r)  (higher = SLOWER)    |
  +--------------------------------------+--------------------------------------+
  |  Mass of the SATELLITE given         |  Ignore it for v_o and T -           |
  |                                      |  it cancels. Use it only for energy. |
  +--------------------------------------+--------------------------------------+
  |  Anything about satellite ENERGY     |  KE : PE : TE  =  1 : -2 : -1        |
  +--------------------------------------+--------------------------------------+
  |  "work to lift to height R"          |  mgR/2 , not mgR                     |
  +--------------------------------------+--------------------------------------+
  |  "work to send to infinity"          |  mgR  =  GMm/R                       |
  +--------------------------------------+--------------------------------------+
  |  Inside a SHELL                      |  Field = 0 , Potential = -GM/R       |
  |                                      |  (constant, NOT zero)                |
  +--------------------------------------+--------------------------------------+
  |  "Why weightless?"                   |  Normal reaction N = 0.              |
  |                                      |  NEVER answer "no gravity".          |
  +--------------------------------------+--------------------------------------+
  |  Geostationary numbers               |  T = 24 h, h = 36 000 km,            |
  |                                      |  r = 42 400 km, v = 3.08 km/s        |
  +--------------------------------------+--------------------------------------+
  |  Stuck with 10 seconds left (EAPCET) |  GUESS. There is no negative marking.|
  +--------------------------------------+--------------------------------------+
```

## The four numbers that answer questions on their own

```
     11.2 km/s   escape velocity from the Earth
      7.9 km/s   orbital velocity near the surface
     84.6 min    least period of an Earth satellite
   36 000 km     height of a geostationary satellite
```

If an option list contains one of those and the question is about that situation,
it is almost certainly the answer.
