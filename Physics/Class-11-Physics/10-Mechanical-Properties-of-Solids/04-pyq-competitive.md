# Mechanical Properties of Solids — JEE Main / AP EAPCET / TG EAPCET Questions

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
  AP / TG EAPCET  (Physics, 40 questions)  ->  1 to 2
  JEE Main        (Physics, 25 questions)  ->  0 to 1
```

**Where the questions actually come from:** Young's modulus (direct formula and ratio
questions), elastic energy, and reading the stress–strain graph. Those three account
for about 80 % of every elasticity question ever set. Bulk modulus and Poisson's ratio
are usually one-line substitutions.

---

# PATTERN 1 — Definitions, units and dimensions

### Q1
The dimensional formula of Young's modulus is

(a) `[M L^-1 T^-2]` &nbsp; (b) `[M L T^-2]` &nbsp; (c) `[M L^2 T^-2]` &nbsp; (d) `[M^0 L^0 T^0]`

**ANSWER: (a)**
```
   Y = stress / strain , and strain has NO dimensions.
   So Y has the dimensions of STRESS = force / area
      = [M L T^-2] / [L^2]  =  [M L^-1 T^-2]        (same as PRESSURE)
```
> **SHORTCUT:** stress, pressure, Y, B, eta and energy DENSITY all share
> `[M L^-1 T^-2]`. Learn the group once.

---

### Q2
The SI unit of strain is

(a) N/m² &nbsp; (b) N &nbsp; (c) m &nbsp; (d) it has no unit

**ANSWER: (d)**
```
   Strain = change / original — a length divided by a length.
   The units cancel, so strain is a pure number.
```

---

### Q3
Which of the following is dimensionless?

(a) Young's modulus &nbsp; (b) Poisson's ratio &nbsp; (c) bulk modulus &nbsp; (d) compressibility

**ANSWER: (b)**
```
   Poisson's ratio = lateral strain / longitudinal strain — a ratio
   of two DIMENSIONLESS quantities, so itself dimensionless.
   Y , B are [M L^-1 T^-2] ;  compressibility is [M^-1 L T^2].
```

---

### Q4
The dimensional formula of compressibility is

(a) `[M L^-1 T^-2]` &nbsp; (b) `[M^-1 L T^2]` &nbsp; (c) `[M L T^-2]` &nbsp; (d) `[M^-1 L^2 T]`

**ANSWER: (b)**
```
   K = 1 / B , so K has the RECIPROCAL of the dimensions of B.

   B  = [M L^-1 T^-2]     ->     K = [M^-1 L^1 T^2]
```

---

### Q5
A force of 100 N acts on a wire of cross-sectional area `1 x 10^-6 m²`.
The stress in the wire is

(a) `10^6 Pa` &nbsp; (b) `10^8 Pa` &nbsp; (c) `10^-4 Pa` &nbsp; (d) `10^4 Pa`

**ANSWER: (b)**
```
              F         100
   stress  = ---  =  ----------  =  1 x 10^8  Pa
              A       1 x 10^-6
```

---

# PATTERN 2 — Direct Young's modulus numericals

### Q6
A wire of length 2 m and area of cross-section `1 x 10^-6 m²` is stretched by a
force of 100 N. If `Y = 2 x 10^11 Pa`, the elongation is

(a) 0.1 mm &nbsp; (b) 0.5 mm &nbsp; (c) 1 mm &nbsp; (d) 2 mm

**ANSWER: (c)**
```
              F L             100  x  2            200
   dL  =  ----------  =  ---------------------  =  ------  =  1 x 10^-3 m
              A Y         10^-6  x  2 x 10^11      2 x 10^5

   dL  =  1 mm
```

---

### Q7
A steel wire 1 m long of area `1 mm²` is stretched by 0.1 mm.
The force required is (`Y = 2 x 10^11 Pa`)

(a) 2 N &nbsp; (b) 20 N &nbsp; (c) 200 N &nbsp; (d) 2000 N

**ANSWER: (b)**
```
   A = 1 mm^2 = 1 x 10^-6 m^2 ,  dL = 0.1 mm = 1 x 10^-4 m

           Y A dL       2 x 10^11 x 1 x 10^-6 x 1 x 10^-4
   F  =  ----------  =  -----------------------------------
              L                        1

      =  2 x 10^(11 - 6 - 4)  =  2 x 10^1  =  20 N
```

---

### Q8
The force required to double the length of a wire of area A and Young's modulus Y is

(a) `Y A` &nbsp; (b) `2 Y A` &nbsp; (c) `Y A / 2` &nbsp; (d) `Y / A`

**ANSWER: (a)**
```
   Doubling the length means  dL = L , so  strain = 1.

   F  =  Y x strain x A  =  Y A
```
> **SHORTCUT:** "double the length" always means **strain = 1**.
> "Increase by 1 %" means strain = 0.01.

---

### Q9
The length of a wire increases by 1 % when a load is applied. The stress in the wire
is (`Y` = Young's modulus)

(a) `Y` &nbsp; (b) `100 Y` &nbsp; (c) `Y / 100` &nbsp; (d) `Y / 1000`

**ANSWER: (c)**
```
   strain  =  1 %  =  0.01  =  1/100

   stress  =  Y x strain  =  Y / 100
```

---

### Q10
A wire of diameter 1 mm and length 2 m carries a load of 10 kg. Take `g = 10 m/s²`
and `Y = 2 x 10^11 Pa`. The extension is nearly

(a) 0.6 mm &nbsp; (b) 1.3 mm &nbsp; (c) 2.5 mm &nbsp; (d) 5.0 mm

**ANSWER: (b)**
```
   F = 10 x 10 = 100 N ,   r = 0.5 mm = 5 x 10^-4 m

   A = pi r^2 = 3.14 x 25 x 10^-8 = 7.85 x 10^-7 m^2

              F L               100 x 2                200
   dL  =  ---------  =  --------------------------- = --------
              A Y        7.85 x 10^-7 x 2 x 10^11     1.57x10^5

       =  1.27 x 10^-3 m  ~  1.3 mm
```
> **SHORTCUT:** the word **DIAMETER** appears in about half of these questions.
> Halve it before you do anything else.

---

# PATTERN 3 — Ratio and proportionality questions (the EAPCET favourite)

### Q11
Two wires of the same material and the same length have radii `r` and `2r`. If they
carry equal loads, the ratio of their elongations is

(a) 1 : 2 &nbsp; (b) 2 : 1 &nbsp; (c) 1 : 4 &nbsp; (d) 4 : 1

**ANSWER: (d)**
```
              F L                     1
   dL  =  ----------      ->  dL  ∝  ----
           pi r^2 Y                   r^2

   dL1 : dL2  =  1/r^2 : 1/(2r)^2  =  1 : 1/4  =  4 : 1
```

---

### Q12
Two wires of the same dimensions have Young's moduli in the ratio 2 : 1. Under the
same load the ratio of their extensions is

(a) 1 : 2 &nbsp; (b) 2 : 1 &nbsp; (c) 1 : 4 &nbsp; (d) 4 : 1

**ANSWER: (a)**
```
   dL  ∝  1 / Y

   dL1 : dL2  =  1/2 : 1/1  =  1 : 2
```

---

### Q13
A wire stretches by `l` under a force F. Another wire of the same material with
**double the area** and **half the length** carries the same force. Its extension is

(a) `l / 4` &nbsp; (b) `l / 2` &nbsp; (c) `2 l` &nbsp; (d) `4 l`

**ANSWER: (a)**
```
             L
   dL  ∝   -----

             A
   L -> L/2  gives  dL x (1/2)
   A -> 2A   gives  dL x (1/2)

   Total :  l x (1/2) x (1/2)  =  l / 4
```

---

### Q14
The breaking load of a wire of radius `r` is `W`. The breaking load of a wire of the
same material of radius `2r` is

(a) `W` &nbsp; (b) `2W` &nbsp; (c) `4W` &nbsp; (d) `W/4`

**ANSWER: (c)**
```
   Breaking force  =  breaking stress  x  A   and   A = pi r^2

   So breaking load ∝ r^2.   r -> 2r  gives  r^2 -> 4 r^2

   Breaking load  =  4 W
```

---

### Q15
A wire of length L can support a maximum load W. If it is cut into two equal halves,
each half can support a maximum load of

(a) `W/4` &nbsp; (b) `W/2` &nbsp; (c) `W` &nbsp; (d) `2W`

**ANSWER: (c)**
```
   Breaking depends on the breaking STRESS and the AREA, neither of
   which changes when you cut the wire. The LENGTH is irrelevant.

   Each half still supports W.
```
> **SHORTCUT:** cutting a wire changes the **extension** and the **force constant**,
> never the **breaking load** and never **Y**.

---

### Q16
A wire of force constant `k` is cut into three equal parts. The force constant of
each part is

(a) `k/3` &nbsp; (b) `k` &nbsp; (c) `3k` &nbsp; (d) `9k`

**ANSWER: (c)**
```
           A Y                  1
   k  =  -------      ->  k  ∝  ---
            L                    L

   Length becomes L/3   ->   k becomes 3k.
```

---

### Q17
Equal loads are hung on wires of steel, copper and rubber of the same dimensions.
The greatest extension occurs in

(a) steel &nbsp; (b) copper &nbsp; (c) rubber &nbsp; (d) all equal

**ANSWER: (c)**
```
   dL  ∝  1 / Y  , and  Y(rubber) << Y(copper) < Y(steel)

   The smallest Y gives the largest extension  ->  RUBBER.
   (Which is exactly why rubber is the LEAST elastic of the three.)
```

---

# PATTERN 4 — Reading the stress–strain graph

### Q18
The slope of the straight-line portion of the stress–strain graph gives

(a) the elastic limit &nbsp; (b) Young's modulus &nbsp; (c) the strain energy &nbsp; (d) the yield strength

**ANSWER: (b)**
```
                stress          rise
   Slope  =    --------   =    ------   =   Y
                strain          run
```

---

### Q19
The area under a stress–strain curve represents

(a) force &nbsp; (b) work done &nbsp; (c) energy stored per unit volume &nbsp; (d) power

**ANSWER: (c)**
```
   stress x strain  has the dimensions of  ENERGY / VOLUME.

   Area = (1/2) x stress x strain  =  u   in  J/m^3
```

---

### Q20
The maximum stress a material can withstand before it breaks corresponds to the point

(a) proportional limit &nbsp; (b) elastic limit &nbsp; (c) ultimate tensile strength &nbsp; (d) fracture point

**ANSWER: (c)**
```
   The curve PEAKS at the ULTIMATE TENSILE STRENGTH (point D).
   After D the specimen necks, the stress FALLS, and it finally
   breaks at E.

   So the stress at the fracture point is LOWER than the ultimate
   tensile strength — the standard trap in this question.
```

---

### Q21
Rubber is an elastomer. Which statement is correct?

(a) it is elastic and obeys Hooke's law
(b) it is elastic but does not obey Hooke's law
(c) it is plastic and obeys Hooke's law
(d) it is neither elastic nor plastic

**ANSWER: (b)**
```
   The stress-strain curve of rubber has NO straight portion at all,
   yet it returns to its original length. Elastic, but not Hookean.
```

---

### Q22
A material which shows a large plastic region between the yield point and the fracture
point is called

(a) brittle &nbsp; (b) ductile &nbsp; (c) elastomer &nbsp; (d) perfectly elastic

**ANSWER: (b)**
```
   Long plastic region  ->  DUCTILE  (copper, mild steel).
   Almost no plastic region  ->  BRITTLE (glass, cast iron).
```

---

### Q23
The stress corresponding to the point beyond which a body does not regain its original
shape is called the

(a) breaking stress &nbsp; (b) yield strength &nbsp; (c) ultimate tensile strength &nbsp; (d) proportional stress

**ANSWER: (b)**
```
   The ELASTIC LIMIT / YIELD POINT (B). The stress there is the
   YIELD STRENGTH sigma_y. Beyond it, a PERMANENT SET is left behind.
```

---

# PATTERN 5 — Bulk modulus and compressibility

### Q24
A material of bulk modulus `1 x 10^11 Pa` is subjected to a pressure of `1 x 10^6 Pa`.
The fractional change in its volume is

(a) `10^-3` &nbsp; (b) `10^-5` &nbsp; (c) `10^-7` &nbsp; (d) `10^5`

**ANSWER: (b)**
```
       dV        P        1 x 10^6
      ----  =  -----  =  -----------  =  1 x 10^-5
        V        B       1 x 10^11
```

---

### Q25
The compressibility of water is `4.5 x 10^-10 Pa^-1`. The percentage decrease in the
volume of water at a pressure of `1 x 10^8 Pa` is

(a) 0.45 % &nbsp; (b) 4.5 % &nbsp; (c) 45 % &nbsp; (d) 0.045 %

**ANSWER: (b)**
```
       dV
      ----  =  K P  =  4.5 x 10^-10  x  1 x 10^8  =  4.5 x 10^-2
        V

            =  4.5 %
```

---

### Q26
The bulk modulus of a perfectly rigid body is

(a) zero &nbsp; (b) 1 &nbsp; (c) infinity &nbsp; (d) cannot be defined

**ANSWER: (c)**
```
   A perfectly rigid body does not change volume at all: dV/V = 0.

              P            P
   B  =   --------  =    -----   =   infinity
           (dV/V)          0

   Its compressibility K = 1/B is therefore ZERO.
```

---

### Q27
Which modulus of elasticity is possessed by liquids and gases?

(a) Young's modulus only &nbsp; (b) rigidity modulus only &nbsp; (c) bulk modulus only &nbsp; (d) all three

**ANSWER: (c)**
```
   Fluids cannot resist a tangential stress  ->  eta = 0.
   Fluids have no fixed shape or length      ->  Y is not defined.
   But they CAN be squeezed                  ->  B exists.
```

---

### Q28
A gas is compressed isothermally at a pressure P. Its bulk modulus is

(a) `P` &nbsp; (b) `gamma P` &nbsp; (c) `P / gamma` &nbsp; (d) zero

**ANSWER: (a)**
```
   Isothermal :  P V = constant   ->  B(iso) = P
   Adiabatic  :  P V^gamma = constant  ->  B(adi) = gamma P

   So  B(adiabatic)  =  gamma x B(isothermal)  >  B(isothermal).
```

---

# PATTERN 6 — Shear / rigidity modulus

### Q29
A cube of side `L` has its lower face fixed. A tangential force `F` on the upper face
displaces it by `x`. The rigidity modulus is

(a) `F / (L x)` &nbsp; (b) `F L / x` &nbsp; (c) `F x / L` &nbsp; (d) `F / (L^2 x)`

**ANSWER: (a)**
```
                          F                          x
   shearing stress  =  ------- ,  shearing strain = ---
                         L^2                         L

                   F / L^2         F        L          F
   eta   =        ---------  =   ------ x  ---   =   ------
                    x / L         L^2       x         L x
```

---

### Q30
The rigidity modulus of a liquid is

(a) infinite &nbsp; (b) zero &nbsp; (c) equal to its bulk modulus &nbsp; (d) equal to its Young's modulus

**ANSWER: (b)**
```
   A liquid begins to flow under ANY tangential stress, however
   small, so it can support NO shearing strain:  eta = 0.
```

---

### Q31
For most metals the correct order of the three moduli is

(a) `Y > B > eta` &nbsp; (b) `eta > B > Y` &nbsp; (c) `B > Y > eta` &nbsp; (d) `Y > eta > B`

**ANSWER: (a)**
```
   For steel :  Y = 2.0 x 10^11 ,  B = 1.6 x 10^11 ,  eta = 0.84 x 10^11

   Rigidity is always the SMALLEST — it is easier to change a solid's
   SHAPE than its VOLUME. Roughly, eta ~ Y / 3.
```

---

# PATTERN 7 — Poisson's ratio

### Q32
Which of the following values of Poisson's ratio is impossible?

(a) 0.2 &nbsp; (b) 0.3 &nbsp; (c) 0.45 &nbsp; (d) 0.75

**ANSWER: (d)**
```
   The theoretical upper limit is 0.5. Any value greater than 0.5
   is impossible for an ordinary material.

   Range :  theory  -1 to 0.5 ;  practice  0 to 0.5.
```

---

### Q33
For a material whose volume does not change when it is stretched, Poisson's ratio is

(a) 0 &nbsp; (b) 0.25 &nbsp; (c) 0.5 &nbsp; (d) 1

**ANSWER: (c)**
```
       dV                            dL
      ----  =  ( 1 - 2 sigma )  x   ----
        V                             L

   dV = 0  requires  1 - 2 sigma = 0  ->  sigma = 0.5
   (rubber is very close to this value)
```

---

### Q34
A wire of diameter 2 mm is stretched so that its length increases by 0.1 %.
If Poisson's ratio is 0.25, the decrease in diameter is

(a) `5 x 10^-4 mm` &nbsp; (b) `5 x 10^-3 mm` &nbsp; (c) `2.5 x 10^-4 mm` &nbsp; (d) `1 x 10^-3 mm`

**ANSWER: (a)**
```
   Longitudinal strain  =  0.1 %  =  1 x 10^-3

   Lateral strain  =  sigma x 10^-3  =  0.25 x 10^-3  =  2.5 x 10^-4

   dd  =  lateral strain x d  =  2.5 x 10^-4  x  2 mm

       =  5 x 10^-4  mm
```

---

# PATTERN 8 — Elastic potential energy

### Q35
A wire is stretched by an amount `l` by a force `F`. The work done is

(a) `F l` &nbsp; (b) `F l / 2` &nbsp; (c) `2 F l` &nbsp; (d) `F l^2 / 2`

**ANSWER: (b)**
```
   The force grows LINEARLY from 0 to F, so the AVERAGE force is F/2.

   W  =  (F/2) x l  =  F l / 2
```
> **SHORTCUT:** if you see "work done in stretching", the factor `1/2` is almost
> always the point of the question.

---

### Q36
The work done in stretching a wire by 1 mm is `W`. The work needed to stretch the same
wire by 2 mm is

(a) `W` &nbsp; (b) `2W` &nbsp; (c) `4W` &nbsp; (d) `8W`

**ANSWER: (c)**
```
            1     Y A ( dL )^2
      W  =  -  x  --------------      ->    W  ∝  ( dL )^2
            2           L

      dL x 2   ->   W x 4
```

---

### Q37
The energy stored per unit volume of a wire in which the stress is `1 x 10^8 Pa` is
(`Y = 2 x 10^11 Pa`)

(a) `2.5 x 10^4 J/m^3` &nbsp; (b) `5 x 10^4 J/m^3` &nbsp; (c) `2.5 x 10^3 J/m^3` &nbsp; (d) `1 x 10^5 J/m^3`

**ANSWER: (a)**
```
          ( stress )^2        ( 1 x 10^8 )^2         1 x 10^16
   u  =  --------------  =  -------------------  =  ------------
              2 Y             2 x 2 x 10^11          4 x 10^11

      =  2.5 x 10^4  J/m^3
```

---

### Q38
A wire of volume `1 x 10^-5 m³` is stretched so that its strain is `1 x 10^-3`.
If `Y = 2 x 10^11 Pa`, the elastic energy stored is

(a) 0.1 J &nbsp; (b) 1 J &nbsp; (c) 10 J &nbsp; (d) 0.01 J

**ANSWER: (b)**
```
   u  =  (1/2) Y (strain)^2
      =  0.5 x 2 x 10^11 x (1 x 10^-3)^2
      =  0.5 x 2 x 10^11 x 1 x 10^-6
      =  1 x 10^5  J/m^3

   U  =  u x V  =  1 x 10^5  x  1 x 10^-5  =  1  J
```

---

# PATTERN 9 — Own weight, thermal stress, beams

### Q39
The elongation of a wire hanging under its own weight is proportional to

(a) `L` &nbsp; (b) `L^2` &nbsp; (c) `L^3` &nbsp; (d) `1 / L`

**ANSWER: (b)**
```
            rho g L^2
     dL  = -----------         ->    dL  ∝  L^2
               2 Y

   Note also that it does NOT depend on the area of cross-section.
```

---

### Q40
A steel rod is clamped rigidly at both ends and its temperature is raised by 10 °C.
The thermal stress developed is (`Y = 2 x 10^11 Pa`, `alpha = 1.2 x 10^-5 /°C`)

(a) `2.4 x 10^6 Pa` &nbsp; (b) `2.4 x 10^7 Pa` &nbsp; (c) `2.4 x 10^8 Pa` &nbsp; (d) `1.2 x 10^7 Pa`

**ANSWER: (b)**
```
   stress  =  Y alpha dT
           =  2 x 10^11  x  1.2 x 10^-5  x  10
           =  2.4 x 10^(11 - 5 + 1)
           =  2.4 x 10^7  Pa

   It does NOT depend on the length or the area of the rod.
```

---

### Q41
The maximum length of a steel wire that can hang vertically without breaking under its
own weight is (breaking stress `= 7.8 x 10^8 Pa`, `rho = 7800 kg/m³`, `g = 10 m/s²`)

(a) 1 km &nbsp; (b) 10 km &nbsp; (c) 100 km &nbsp; (d) 0.1 km

**ANSWER: (b)**
```
   The maximum stress occurs at the TOP of the wire, where it carries
   the whole weight:

        stress  =  (rho A L g) / A  =  rho g L

              breaking stress       7.8 x 10^8         7.8 x 10^8
      L  =  -------------------  = ------------  =  ---------------
                  rho g             7800 x 10          7.8 x 10^4

         =  1 x 10^4 m  =  10 km
```

---

### Q42
A beam supported at its two ends and loaded at the centre sags by `delta`. If the
depth of the beam is doubled, the sag becomes

(a) `delta / 2` &nbsp; (b) `delta / 4` &nbsp; (c) `delta / 8` &nbsp; (d) `2 delta`

**ANSWER: (c)**
```
                W L^3                     1
   delta  =  -----------      ->  delta ∝ ---
              4 b d^3 Y                    d^3

   d -> 2d   gives  d^3 -> 8 d^3   ->   delta / 8

   THIS is why girders are made DEEP, and why the I-section puts
   material in the top and bottom flanges.
```

---

# PATTERN 10 — Pure concept traps

### Q43
Which of the following is the most elastic?

(a) rubber &nbsp; (b) copper &nbsp; (c) steel &nbsp; (d) wood

**ANSWER: (c)**
```
   Most elastic = largest Young's modulus.

      steel  2.0 x 10^11  >  copper 1.1 x 10^11  >>  rubber

   "Stretches most" and "most elastic" are OPPOSITES.
```

---

### Q44
Which of these is nearly a perfectly plastic body?

(a) quartz fibre &nbsp; (b) steel &nbsp; (c) putty &nbsp; (d) phosphor bronze

**ANSWER: (c)**
```
   PERFECTLY PLASTIC (nearest examples)  :  putty, wet clay, wax
   PERFECTLY ELASTIC (nearest examples)  :  quartz fibre, phosphor bronze
```

---

### Q45
With a rise in temperature, the Young's modulus of a metal

(a) increases &nbsp; (b) decreases &nbsp; (c) remains constant &nbsp; (d) first increases then decreases

**ANSWER: (b)**
```
   Heating increases the mean separation of the atoms and weakens the
   interatomic forces, so the restoring force per unit strain falls:
   Y DECREASES and the material becomes more plastic.

   (Exceptions: INVAR and carbon filament, almost unaffected.)
```

---

### Q46
Quartz fibre is used for the suspension in a sensitive galvanometer because it has

(a) a very small Young's modulus
(b) a negligible elastic after-effect
(c) a very large Poisson's ratio
(d) a very large compressibility

**ANSWER: (b)**
```
   Quartz fibre (and phosphor bronze) returns to its original shape
   ALMOST INSTANTLY when the twist is removed — negligible elastic
   after-effect — so the instrument reads correctly straight away.
```

---

### Q47
A rope of a crane is made of many thin strands rather than one thick rod because

(a) it becomes stronger
(b) it becomes lighter
(c) it becomes flexible without losing strength
(d) it becomes cheaper

**ANSWER: (c)**
```
   Strength depends only on the TOTAL cross-sectional area, which is
   unchanged. But thin strands bend easily, so the rope can pass over
   the pulleys, whereas a solid rod of the same area would be rigid.
```

---

### Q48
Hooke's law is valid

(a) for all values of stress
(b) only up to the proportional limit
(c) only in the plastic region
(d) only for elastomers

**ANSWER: (b)**
```
   Beyond the PROPORTIONAL LIMIT the graph curves — stress still
   rises with strain, but no longer in direct proportion.

   And elastomers never obey Hooke's law at all.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------------+---------------------------------------+
  |  IF YOU SEE THIS ...                  |  DO THIS IMMEDIATELY                  |
  +---------------------------------------+---------------------------------------+
  |  the word DIAMETER                    |  HALVE it. Write r = d/2 first.       |
  +---------------------------------------+---------------------------------------+
  |  a load given in kg                   |  multiply by g to get newtons         |
  +---------------------------------------+---------------------------------------+
  |  "elongation / extension"             |  dL = F L / (A Y)                     |
  +---------------------------------------+---------------------------------------+
  |  "double the length"                  |  strain = 1 , so F = Y A              |
  +---------------------------------------+---------------------------------------+
  |  "increases by 1 %"                   |  strain = 0.01                        |
  +---------------------------------------+---------------------------------------+
  |  "ratio of elongations"               |  dL ∝ L / (r^2 Y) — no numbers needed |
  +---------------------------------------+---------------------------------------+
  |  "breaking load", "wire cut in half"  |  breaking load ∝ A only. Length and   |
  |                                       |  cutting change NOTHING.              |
  +---------------------------------------+---------------------------------------+
  |  "work done in stretching"            |  W = (1/2) F dL. The 1/2 IS the       |
  |                                       |  question.                            |
  +---------------------------------------+---------------------------------------+
  |  "energy per unit volume"             |  u = stress^2 / (2Y) = (1/2)Y e^2     |
  +---------------------------------------+---------------------------------------+
  |  "area under the stress-strain graph" |  energy per unit volume, J/m^3        |
  +---------------------------------------+---------------------------------------+
  |  "slope of the stress-strain graph"   |  Young's modulus                      |
  +---------------------------------------+---------------------------------------+
  |  "maximum stress the material bears"  |  ULTIMATE tensile strength, not the   |
  |                                       |  fracture point                       |
  +---------------------------------------+---------------------------------------+
  |  hydraulic pressure, "at a depth"     |  dV/V = P/B , and K = 1/B             |
  +---------------------------------------+---------------------------------------+
  |  a LIQUID or a GAS                    |  eta = 0 , only B exists              |
  +---------------------------------------+---------------------------------------+
  |  perfectly rigid body                 |  B = infinity , K = 0                 |
  +---------------------------------------+---------------------------------------+
  |  Poisson's ratio option above 0.5     |  it is the wrong-value option         |
  +---------------------------------------+---------------------------------------+
  |  "most elastic"                       |  largest Y  ->  STEEL, never rubber   |
  +---------------------------------------+---------------------------------------+
  |  hanging "under its own weight"       |  dL = rho g L^2 / (2Y) — keep the 2   |
  +---------------------------------------+---------------------------------------+
  |  clamped rod that is heated           |  stress = Y alpha dT , length-free    |
  +---------------------------------------+---------------------------------------+
  |  a beam, a girder, depth vs breadth   |  delta ∝ 1/d^3 but only 1/b           |
  +---------------------------------------+---------------------------------------+
  |  temperature rises                    |  Y falls, elasticity falls            |
  +---------------------------------------+---------------------------------------+
  |  you cannot finish the calculation    |  EAPCET: guess, there is NO negative  |
  |                                       |  marking. JEE: skip it.               |
  +---------------------------------------+---------------------------------------+
```
