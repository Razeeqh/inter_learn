# Electric Charges and Fields — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 for wrong   |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from this chapter:**

```
  AP / TG EAPCET  (Physics, 40 questions)  ->  2 to 4
  JEE Main        (Physics, 25 questions)  ->  1 to 2
```

**Electrostatics as a whole (this chapter plus Potential and Capacitance)
gives 4 to 6 questions in EAPCET. It is one of the highest-yield units in
the paper.**

---

# PATTERN 1 — Properties and quantisation of charge

### Q1
Which of the following is a possible value of charge on a body?

(a) 4.0 x 10^-19 C &nbsp; (b) 3.2 x 10^-19 C &nbsp;
(c) 2.4 x 10^-19 C &nbsp; (d) 0.8 x 10^-19 C

**ANSWER: (b)**
```
  Charge must be an INTEGER multiple of 1.6 x 10^-19 C.

     3.2 x 10^-19 / 1.6 x 10^-19  =  2       INTEGER, allowed.
     4.0 / 1.6 = 2.5   ,  2.4 / 1.6 = 1.5  ,  0.8 / 1.6 = 0.5
```
> **SHORTCUT:** Divide each option by 1.6. Only whole numbers survive.

---

### Q2
A body has 10^14 excess electrons. Its charge is

(a) +1.6 x 10^-5 C &nbsp; (b) -1.6 x 10^-5 C &nbsp;
(c) +1.6 x 10^5 C &nbsp; (d) -1.6 x 10^5 C

**ANSWER: (b)**
```
  Q  =  n e  =  10^14  x  1.6 x 10^-19   =   1.6 x 10^-5  C

  EXCESS electrons  ->  NEGATIVE.
```
> **SHORTCUT:** The word "excess electrons" always means a minus sign.
> Half the students lose this one on the sign alone.

---

### Q3
Two identical metal spheres carrying +8 microC and -2 microC are brought
into contact and then separated. The charge on each is

(a) +3 microC &nbsp; (b) +5 microC &nbsp; (c) +6 microC &nbsp; (d) -3 microC

**ANSWER: (a)**
```
          q1 + q2        8 + (-2)         6
   q' =  ---------  =  ------------  =  -----  =  +3 microC
              2              2            2
```

---

### Q4
When a glass rod is rubbed with silk, the glass becomes positive because

(a) it gains protons &nbsp; (b) it loses electrons &nbsp;
(c) it gains electrons &nbsp; (d) it loses protons

**ANSWER: (b)**
```
  Protons are locked in the nucleus and NEVER move.
  Only electrons transfer. Losing electrons -> positive.
```

---

# PATTERN 2 — Direct Coulomb's law calculation

### Q5
Two charges of 2 microC and 3 microC are 30 cm apart in vacuum. The
force between them is

(a) 0.6 N &nbsp; (b) 0.06 N &nbsp; (c) 6 N &nbsp; (d) 0.006 N

**ANSWER: (a)**
```
           k q1 q2       9 x 10^9 x 2 x 10^-6 x 3 x 10^-6
   F  =  ----------  =  ----------------------------------
             r^2                    (0.3)^2

           54 x 10^-3
      =   ------------    =   0.6   N
              0.09
```
> **SHORTCUT:** With both charges in microC, k q1 q2 = 9 x q1 x q2 x 10^-3
> where q1, q2 are the numbers in microC. Here 9 x 6 x 10^-3 = 0.054, then
> divide by r^2 = 0.09 to get 0.6.

---

### Q6
The force between two charges is F in air. If they are immersed in a
liquid of dielectric constant 4 at the same distance, the force becomes

(a) 4F &nbsp; (b) F/4 &nbsp; (c) 16F &nbsp; (d) F/16

**ANSWER: (b)**
```
   F_medium  =  F_vacuum / K   =   F / 4
```
> **SHORTCUT:** K is always in the denominator. Medium always WEAKENS.

---

### Q7
Two charges repel each other with force F. If the distance between them is
halved and each charge is doubled, the new force is

(a) F &nbsp; (b) 4F &nbsp; (c) 8F &nbsp; (d) 16F

**ANSWER: (d)**
```
   F  is proportional to  q1 q2 / r^2

   Charges doubled:   (2)(2) = 4 times
   Distance halved:   1/(1/2)^2 = 4 times

   Total  =  4 x 4  =  16 F
```
> **SHORTCUT:** Never recompute the whole formula. Just track the FACTORS.

---

### Q8
The force between two charges separated by distance r in a medium of
dielectric constant K is the same as the force in vacuum at a distance

(a) r sqrt(K) &nbsp; (b) r / sqrt(K) &nbsp; (c) r K &nbsp; (d) r / K

**ANSWER: (a)**
```
     k q1 q2           k q1 q2
   -----------   =   ----------
     K  r^2              d^2

        d^2   =   K r^2      ->    d  =  r sqrt(K)
```

---

# PATTERN 3 — Superposition and null points

### Q9
Three charges each +q are at the corners of an equilateral triangle of
side a. The force on any one charge is

(a) k q^2 / a^2 &nbsp; (b) 2 k q^2 / a^2 &nbsp;
(c) sqrt(3) k q^2 / a^2 &nbsp; (d) sqrt(2) k q^2 / a^2

**ANSWER: (c)**
```
   Two equal forces F = k q^2 / a^2 at 60 degrees to each other:

   R  =  2 F cos(60/2)  =  2 F cos(30)  =  2 F (sqrt(3)/2)  = sqrt(3) F
```
> **SHORTCUT:** Memorise the three: 60 deg -> sqrt(3) F, 90 deg ->
> sqrt(2) F, 120 deg -> F. Three of the commonest EAPCET answers.

---

### Q10
Four equal charges q are placed at the corners of a square of side a.
The net force on any one charge is

(a) k q^2 / a^2 &nbsp; (b) (k q^2 / a^2)(1 + 1/sqrt(2)) &nbsp;
(c) (k q^2 / a^2)(sqrt(2) + 1/2) &nbsp; (d) 2 k q^2 / a^2

**ANSWER: (c)**
```
  Take the charge at corner A. Two adjacent charges at distance a,
  one diagonal charge at distance a sqrt(2).

  Two adjacent forces, each F = k q^2/a^2, at 90 degrees:
        resultant  =  sqrt(2) F        (along the diagonal)

  Diagonal force:
                k q^2            k q^2         F
        F_d  = -----------  =  ---------  =  -----
               (a sqrt2)^2       2 a^2         2

  It is ALONG the same diagonal, so simply add:

        F_net  =  sqrt(2) F  +  F/2  =  F ( sqrt(2) + 1/2 )
```

---

### Q11
Two point charges +9q and +q are separated by distance d. The point where
the resultant field is zero lies

(a) at d/2 &nbsp; (b) at d/4 from q &nbsp;
(c) at d/4 from 9q &nbsp; (d) at 3d/4 from 9q

**ANSWER: (d)**
```
                       d                    d              3d
   x (from 9q)  =  -----------------  =  ---------  =  ------
                    1 + sqrt(q/9q)        1 + 1/3         4
```
> **SHORTCUT:** For LIKE charges the null point is BETWEEN them, always
> NEARER the SMALLER charge. Here it is 3d/4 from 9q, i.e. d/4 from q.

---

### Q12
Two charges +4q and -q are separated by d. The neutral point lies

(a) between them &nbsp; (b) at distance d beyond -q &nbsp;
(c) at d/2 beyond -q &nbsp; (d) at 2d beyond +4q

**ANSWER: (b)**
```
  UNLIKE charges -> null point is OUTSIDE, beyond the SMALLER charge.

  Let it be at x beyond -q:

        k(4q)              k(q)
     -----------   =   ---------
      (d + x)^2           x^2

        2 x  =  d + x      ->     x  =  d
```
> **SHORTCUT:** LIKE charges -> inside. UNLIKE charges -> outside, beyond
> the smaller one. Learn that one sentence and you save 90 seconds.

---

# PATTERN 4 — Electric field of a point charge

### Q13
The electric field at 0.3 m from a charge of 2 x 10^-8 C is

(a) 200 N/C &nbsp; (b) 2000 N/C &nbsp; (c) 20 N/C &nbsp; (d) 20000 N/C

**ANSWER: (b)**
```
           k Q       9 x 10^9 x 2 x 10^-8        180
   E  =  -------  = ----------------------  =  --------  =  2000 N/C
           r^2             (0.3)^2                0.09
```

---

### Q14
An electron is placed in a field of 10^4 N/C. Its acceleration is
(m = 9.1 x 10^-31 kg)

(a) 1.76 x 10^15 m/s^2 &nbsp; (b) 1.76 x 10^12 m/s^2 &nbsp;
(c) 1.76 x 10^9 m/s^2 &nbsp; (d) 1.76 x 10^6 m/s^2

**ANSWER: (a)**
```
        q E        1.6 x 10^-19  x  10^4        1.6 x 10^-15
   a = -----  =  ------------------------  =  ---------------
         m            9.1 x 10^-31              9.1 x 10^-31

     =  1.76 x 10^15   m/s^2
```
> **SHORTCUT:** e/m for an electron is 1.76 x 10^11 C/kg. Then
> a = (e/m) x E = 1.76 x 10^11 x 10^4 = 1.76 x 10^15. One step.

---

### Q15
Two charges +q and -q are at the ends of a line of length 2a. The field at
the MIDPOINT is

(a) zero &nbsp; (b) k q / a^2 &nbsp; (c) 2 k q / a^2 &nbsp;
(d) 4 k q / a^2

**ANSWER: (c)**
```
  Both fields point from +q towards -q, so they ADD:

           k q       k q         2 k q
   E  =   -----  +  -----   =   -------
           a^2       a^2          a^2
```
> **SHORTCUT:** At the midpoint of a DIPOLE, fields ADD.
> At the midpoint of TWO LIKE charges, fields CANCEL.

---

### Q16
A charge q is placed at the centre of a circle of radius r. The work done
in moving a test charge once around the circle is

(a) q/(4 pi e0 r) &nbsp; (b) zero &nbsp; (c) 2 pi r E &nbsp; (d) infinite

**ANSWER: (b)**
```
  The motion is always PERPENDICULAR to E (which is radial),
  and the start and end points are the same.
  W = 0.
```

---

# PATTERN 5 — Field lines

### Q17
Electric field lines never intersect because

(a) they are parallel &nbsp; (b) E would have two directions at a point
(c) they carry charge &nbsp; (d) they are imaginary

**ANSWER: (b)**

---

### Q18
Which of the following is NOT a property of electric field lines?

(a) They start on + and end on - charges
(b) They can form closed loops
(c) They never intersect
(d) They are perpendicular to a conductor's surface

**ANSWER: (b)**
```
  Electrostatic field lines NEVER form closed loops, because the
  electrostatic field is CONSERVATIVE.
  (Magnetic field lines DO form closed loops — do not confuse them.)
```

---

### Q19
The number of field lines passing through a region indicates

(a) the charge there &nbsp; (b) the potential there &nbsp;
(c) the strength of the field &nbsp; (d) the flux only

**ANSWER: (c)**

---

# PATTERN 6 — Dipole: fields, torque and energy

### Q20
The ratio of the axial field to the equatorial field of a short dipole at
the same distance is

(a) 1 : 1 &nbsp; (b) 1 : 2 &nbsp; (c) 2 : 1 &nbsp; (d) 4 : 1

**ANSWER: (c)**
```
   E_axial       =  2 k p / r^3
   E_equatorial  =    k p / r^3

   Ratio  =  2 : 1
```

---

### Q21
The electric field of a short dipole varies with distance as

(a) 1/r &nbsp; (b) 1/r^2 &nbsp; (c) 1/r^3 &nbsp; (d) 1/r^4

**ANSWER: (c)**
> **SHORTCUT:** Memorise the whole ladder:
> dipole 1/r^3, point charge 1/r^2, wire 1/r, sheet constant.

---

### Q22
A dipole of moment p is placed in a uniform field E. The maximum torque is

(a) pE &nbsp; (b) pE/2 &nbsp; (c) 2pE &nbsp; (d) zero

**ANSWER: (a)**
```
   tau = p E sin(theta),  maximum at theta = 90 degrees.
```

---

### Q23
The work done in rotating a dipole from the position of stable
equilibrium to that of unstable equilibrium is

(a) pE &nbsp; (b) 2pE &nbsp; (c) pE/2 &nbsp; (d) zero

**ANSWER: (b)**
```
   Stable   = 0 degrees,  Unstable = 180 degrees

   W  =  p E [cos 0 - cos 180]  =  p E [1 + 1]  =  2 p E
```

---

### Q24
The potential energy of a dipole placed perpendicular to a uniform field is

(a) -pE &nbsp; (b) +pE &nbsp; (c) zero &nbsp; (d) pE/2

**ANSWER: (c)**
```
   U  =  - p E cos(90)  =  0
```

---

### Q25
The net force on an electric dipole placed in a NON-uniform electric field
is

(a) always zero &nbsp; (b) non-zero in general &nbsp;
(c) always pE &nbsp; (d) always 2pE

**ANSWER: (b)**
```
  In a UNIFORM field the two forces are equal and opposite -> net zero.
  In a NON-UNIFORM field the two charges sit where E differs, so the
  forces do not cancel -> net force AND torque.
```
> **SHORTCUT:** "Uniform" is the keyword that makes the net force zero.
> If the word "uniform" is missing, look out for a trick.

---

### Q26
Two charges +2 microC and -2 microC are 5 cm apart. The dipole moment is

(a) 10^-7 C m &nbsp; (b) 10^-6 C m &nbsp; (c) 10^-8 C m &nbsp;
(d) 10^-5 C m

**ANSWER: (a)**
```
   p  =  q x 2a  =  2 x 10^-6  x  0.05  =  10^-7  C m
```

---

# PATTERN 7 — Flux

### Q27
A uniform field of 500 N/C passes through a square of side 20 cm held with
its plane perpendicular to the field. The flux is

(a) 20 N m^2/C &nbsp; (b) 100 N m^2/C &nbsp; (c) 10 N m^2/C &nbsp;
(d) zero

**ANSWER: (a)**
```
  Plane perpendicular to E  ->  E is ALONG the normal  ->  theta = 0

  A  =  (0.2)^2  =  0.04 m^2

  phi  =  E A cos(0)  =  500 x 0.04  =  20   N m^2 / C
```

---

### Q28
A field of 200 N/C is PARALLEL to the plane of a surface. The flux through
that surface is

(a) 200 A &nbsp; (b) 100 A &nbsp; (c) zero &nbsp; (d) cannot say

**ANSWER: (c)**
```
  E parallel to the SURFACE  ->  E is perpendicular to the NORMAL
  ->  theta = 90  ->  cos(90) = 0  ->  phi = 0
```
> **SHORTCUT:** "Parallel to the surface" means ZERO flux.
> "Perpendicular to the surface" means MAXIMUM flux. Do not confuse
> the surface with its normal.

---

# PATTERN 8 — Gauss's law and flux through closed surfaces

### Q29
A charge q is enclosed by a sphere of radius R. If the radius is doubled,
the flux becomes

(a) phi &nbsp; (b) 2 phi &nbsp; (c) phi/2 &nbsp; (d) phi/4

**ANSWER: (a)**
```
   phi = q / e0.  It does NOT depend on the size or shape
   of the Gaussian surface.
```
> **SHORTCUT:** If the enclosed charge is unchanged, the flux is unchanged.
> Any option involving R is a distractor.

---

### Q30
A charge q is placed at one CORNER of a cube. The flux through the cube is

(a) q/e0 &nbsp; (b) q/(2 e0) &nbsp; (c) q/(6 e0) &nbsp; (d) q/(8 e0)

**ANSWER: (d)**
```
  To surround the corner charge completely you need EIGHT such cubes.
  Each therefore receives one-eighth of the total flux.
```
> **SHORTCUT:** Memorise the family:
> centre of a cube -> q/e0 total and q/(6 e0) per face;
> corner -> q/(8 e0);
> centre of a face -> q/(2 e0).

---

### Q31
A closed surface encloses charges +5q, -3q and +2q. The total flux is

(a) 4q/e0 &nbsp; (b) 10q/e0 &nbsp; (c) zero &nbsp; (d) 6q/e0

**ANSWER: (a)**
```
   q_net  =  5q - 3q + 2q  =  4q

   phi    =  4q / e0
```

---

### Q32
A point charge is placed just OUTSIDE a closed surface. The flux through
the surface is

(a) q/e0 &nbsp; (b) q/(2 e0) &nbsp; (c) zero &nbsp; (d) infinite

**ANSWER: (c)**
```
   Every line that enters also leaves. Net flux = 0.
```

---

# PATTERN 9 — Applications of Gauss's law

### Q33
The field at 0.4 m from an infinitely long wire of linear charge density
2 x 10^-6 C/m is

(a) 9 x 10^4 N/C &nbsp; (b) 4.5 x 10^4 N/C &nbsp;
(c) 9 x 10^3 N/C &nbsp; (d) 1.8 x 10^5 N/C

**ANSWER: (a)**
```
          2 k lambda      2 x 9 x 10^9 x 2 x 10^-6        36 x 10^3
   E  =  ------------  = ---------------------------  =  -----------
               r                     0.4                     0.4

      =  9 x 10^4   N / C
```
> **SHORTCUT:** For a wire remember E = 2 k lambda / r, i.e.
> 1.8 x 10^10 x lambda / r. One multiplication.

---

### Q34
The field of an infinitely long charged wire varies with distance as

(a) 1/r &nbsp; (b) 1/r^2 &nbsp; (c) 1/r^3 &nbsp; (d) constant

**ANSWER: (a)**

---

### Q35
The field due to an infinite non-conducting sheet of charge density sigma
is

(a) sigma/e0 &nbsp; (b) sigma/(2 e0) &nbsp; (c) sigma/(4 e0) &nbsp;
(d) 2 sigma/e0

**ANSWER: (b)**
> **SHORTCUT:** Thin non-conducting SHEET -> sigma/(2 e0).
> Just outside a CONDUCTOR -> sigma/e0. Between two opposite plates ->
> sigma/e0.

---

### Q36
Two infinite parallel sheets carry +sigma and -sigma. The field just
outside the pair is

(a) sigma/e0 &nbsp; (b) sigma/(2 e0) &nbsp; (c) zero &nbsp;
(d) 2 sigma/e0

**ANSWER: (c)**
```
   Outside, the two fields point in OPPOSITE directions and cancel.
   Between them they add and give sigma/e0.
```

---

### Q37
The field INSIDE a uniformly charged hollow spherical shell is

(a) kQ/R^2 &nbsp; (b) kQ/r^2 &nbsp; (c) zero &nbsp; (d) sigma/e0

**ANSWER: (c)**
```
   The Gaussian sphere drawn inside encloses ZERO charge.
```

---

### Q38
A hollow shell of radius 0.1 m carries 10 microC. The field at 0.05 m from
the centre is

(a) 9 x 10^6 N/C &nbsp; (b) 3.6 x 10^7 N/C &nbsp; (c) zero &nbsp;
(d) 9 x 10^7 N/C

**ANSWER: (c)**
```
   0.05 m < R = 0.1 m  ->  INSIDE the shell  ->  E = 0.

   The numbers were given only to tempt you into calculating.
```
> **SHORTCUT:** First check whether r is less than or greater than R.
> Do that BEFORE reaching for the calculator.

---

### Q39
For a uniformly charged SOLID sphere of radius R, the field at r < R is
proportional to

(a) 1/r^2 &nbsp; (b) 1/r &nbsp; (c) r &nbsp; (d) zero

**ANSWER: (c)**
```
                k Q r
   E_inside =  --------      ->   E is proportional to r
                 R^3
```
> **SHORTCUT:** HOLLOW shell -> zero inside. SOLID sphere -> grows
> linearly inside. This single distinction is asked almost every year.

---

### Q40
The dimensional formula of the permittivity of free space e0 is

(a) [M^-1 L^-3 T^4 A^2] &nbsp; (b) [M L^3 T^-4 A^-2] &nbsp;
(c) [M^-1 L^-2 T^3 A] &nbsp; (d) [M L T^-3 A^-1]

**ANSWER: (a)**
```
            q1 q2          [ T A ]^2            [ T^2 A^2 ]
   e0  =  ---------  =  ------------------ = -------------------
           4 pi F r^2    [M L T^-2][L^2]      [ M L^3 T^-2 ]

       =  [ M^-1 L^-3 T^4 A^2 ]
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +-------------------------------------+------------------------------+
  |  IF YOU SEE THIS                    |  DO THIS IMMEDIATELY         |
  +-------------------------------------+------------------------------+
  |  "how many electrons"               |  divide by 1.6 x 10^-19      |
  +-------------------------------------+------------------------------+
  |  "possible value of charge"         |  divide by 1.6 x 10^-19,     |
  |                                     |  keep the integer one        |
  +-------------------------------------+------------------------------+
  |  "identical spheres touched"        |  q' = (q1 + q2) / 2          |
  +-------------------------------------+------------------------------+
  |  "placed in a medium / liquid"      |  divide the force by K       |
  +-------------------------------------+------------------------------+
  |  "distance halved, charge doubled"  |  track FACTORS only, never   |
  |                                     |  recompute the formula       |
  +-------------------------------------+------------------------------+
  |  equilateral triangle, equal charges|  R = sqrt(3) F               |
  +-------------------------------------+------------------------------+
  |  square, equal charges              |  R = F(sqrt(2) + 1/2)        |
  +-------------------------------------+------------------------------+
  |  null point, LIKE charges           |  BETWEEN, nearer the smaller |
  +-------------------------------------+------------------------------+
  |  null point, UNLIKE charges         |  OUTSIDE, beyond the smaller |
  +-------------------------------------+------------------------------+
  |  acceleration of an electron in E   |  a = 1.76 x 10^11 x E        |
  +-------------------------------------+------------------------------+
  |  midpoint of a DIPOLE               |  fields ADD -> 2kq/a^2       |
  +-------------------------------------+------------------------------+
  |  midpoint of two LIKE charges       |  fields CANCEL -> 0          |
  +-------------------------------------+------------------------------+
  |  "axial : equatorial"               |  2 : 1                       |
  +-------------------------------------+------------------------------+
  |  "work to flip a dipole"            |  2 p E                       |
  +-------------------------------------+------------------------------+
  |  "maximum torque on a dipole"       |  p E                         |
  +-------------------------------------+------------------------------+
  |  "field parallel to the surface"    |  flux = 0                    |
  +-------------------------------------+------------------------------+
  |  "radius of the Gaussian surface    |  flux UNCHANGED, ignore the  |
  |   is doubled"                       |  radius entirely             |
  +-------------------------------------+------------------------------+
  |  charge at the CORNER of a cube     |  q / (8 e0)                  |
  +-------------------------------------+------------------------------+
  |  charge at the CENTRE, one face     |  q / (6 e0)                  |
  +-------------------------------------+------------------------------+
  |  charge OUTSIDE a closed surface    |  flux = 0                    |
  +-------------------------------------+------------------------------+
  |  long WIRE                          |  E = 2 k lambda / r          |
  +-------------------------------------+------------------------------+
  |  thin SHEET                         |  E = sigma / (2 e0)          |
  +-------------------------------------+------------------------------+
  |  two OPPOSITE plates                |  inside sigma/e0, outside 0  |
  +-------------------------------------+------------------------------+
  |  HOLLOW shell, r < R                |  E = 0                       |
  +-------------------------------------+------------------------------+
  |  SOLID sphere, r < R                |  E is proportional to r      |
  +-------------------------------------+------------------------------+
  |  "how does E vary with r"           |  dipole 1/r^3, point 1/r^2,  |
  |                                     |  wire 1/r, sheet constant    |
  +-------------------------------------+------------------------------+
```

**One last rule for EAPCET: there is NO negative marking. If 90 seconds
have gone and you are still stuck, mark the option that matches the
dimensions or the 1/r power and move on.**
