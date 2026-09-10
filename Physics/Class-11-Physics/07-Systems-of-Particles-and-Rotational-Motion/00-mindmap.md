# Systems of Particles and Rotational Motion — Mind Map

**Physics 1st Year · Chapter 7**
**This chapter is where "spinning things" finally make sense. It is FORMULA-HEAVY but
almost every formula is just the old linear formula with new letters. Learn the
translation table and you have learnt half the chapter.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
              SYSTEMS OF PARTICLES  AND  ROTATIONAL MOTION
                                  |
        +-------------------------+-------------------------+
        |                         |                         |
   "WHERE IS THE           "WHAT MAKES IT             "HOW HARD IS IT
    BODY, REALLY?"           SPIN?"                    TO SPIN?"
        |                         |                         |
   CENTRE OF MASS            TORQUE and              MOMENT OF INERTIA
        |                    ANGULAR MOMENTUM                |
   -----+------                    |                   ------+------
   |          |              ------+------             |           |
 2 particles  n particles    |           |         Definition   Radius of
   |          |            tau = r x F  L = r x p   I = sum m r^2  gyration
 m1x1+m2x2  sum(mi xi)       |           |             |         K=sqrt(I/M)
 --------   ---------        +-----+-----+             |
  m1+m2      sum(mi)               |                STANDARD BODIES
   |          |                tau = dL/dt          ring disc rod
 SHAPES: rod ring disc             |                sphere shell
 sphere triangle (centroid)   CONSERVATION OF        cylinder
   |                          ANGULAR MOMENTUM           |
 MOTION OF CM                      |                 THE TWO THEOREMS
   |                          L = I omega = const        |
 M V_cm = P_total             ice skater, diver,    +----+----+
   |                          rotating stool        |         |
 M A_cm = F_external               |             PARALLEL   PERPENDICULAR
   |                            I1 w1 = I2 w2     I = Icm    Iz = Ix + Iy
 F_ext = 0  =>  V_cm constant                       + M d^2   (lamina only)
   |                                                     |
 CONSERVATION OF LINEAR MOMENTUM                          |
                                                          |
        +-------------------------------------------------+
        |
   ROTATION AS A COPY OF TRANSLATION
        |
   ------+-------------------------------+
   |                |                    |
 x -> theta     v -> omega           m -> I
 a -> alpha     F -> tau             p -> L
   |                |                    |
 KE_rot = (1/2) I omega^2        W = tau x theta
                                 P = tau x omega
   |
 ROLLING MOTION  (translation + rotation together)
   |
   +-- condition:  v_cm = R omega
   +-- KE_total = (1/2)M v^2 + (1/2)I omega^2
   +-- down an incline:  a = g sin(theta) / (1 + K^2/R^2)
   +-- SOLID SPHERE WINS THE RACE, RING COMES LAST
   |
 EQUILIBRIUM OF A RIGID BODY
   |
   +-- sum of forces = 0     (no translation)
   +-- sum of torques = 0    (no rotation)
   +-- couple, principle of moments, lever
   +-- CENTRE OF GRAVITY  (not the same thing as centre of mass)
```

---

## THE 60-SECOND VERSION

Up to now every object was a **point**. Now objects have **size**, so they can also **turn**.

```
  A rigid body can do only TWO things:

     1. MOVE as a whole      ->  handled by the CENTRE OF MASS
                                 (the whole body behaves like one particle
                                  of mass M sitting at the CM)

     2. TURN about an axis   ->  handled by TORQUE, MOMENT OF INERTIA
                                 and ANGULAR MOMENTUM

  Everything else in this chapter is one of these two, or both at once
  (that "both at once" case is called ROLLING).
```

The single biggest idea:

```
  ROTATION IS NOT NEW PHYSICS.
  It is the SAME physics with the letters swapped.

     F = m a          becomes        tau = I alpha
     p = m v          becomes        L   = I omega
     KE = (1/2)m v^2  becomes        KE  = (1/2) I omega^2
```

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

```
  +--------------------------------------------------+---------+-------+
  |  TOPIC                                           | SECTION | MARKS |
  +--------------------------------------------------+---------+-------+
  |  Define centre of mass / is it inside the body?  |    A    |   2   |
  |  Vector product, i x j etc., area of triangle    |    A    |   2   |
  |  Define torque / moment of inertia / rad. gyr.   |    A    |   2   |
  |  Why does a skater spin faster? (ang. momentum)  |    A    |   2   |
  |  Difference: centre of mass vs centre of gravity |    A    |   2   |
  |  Moment of inertia of a given body (table value) |    A    |   2   |
  |  STATE and EXPLAIN the parallel axes theorem     |    B    |   4   |
  |  STATE and EXPLAIN the perpendicular axes theorem|    B    |   4   |   <-- most asked
  |  Show tau = dL/dt , conservation of L            |    B    |   4   |
  |  CM of a two-particle / three-particle system    |    B    |   4   |
  |  Rolling body on an incline: a, v, which is first|    B    |   4   |
  |  Rotational analogue table + rotational KE       |    B    |   4   |
  |  Combined: moment of inertia + theorems + rolling|    C    |   8   |
  +--------------------------------------------------+---------+-------+

  Realistic haul from this chapter:  6 to 10 marks out of 60.
  Section A + Section B alone are worth chasing. The Section C appearance
  is occasional, so treat the LAQ as a bonus, not a priority.
```

---

## STUDY THIS ORDER

```
  STEP 1   Rigid body: translation vs rotation
              |               (10 minutes, pure words)
              |
  STEP 2   CENTRE OF MASS
              |    two particles -> n particles -> standard shapes
              |
  STEP 3   Motion of the CM, linear momentum, its conservation
              |
  STEP 4   VECTOR PRODUCT  (A x B)     <-- you MUST do this before torque
              |
     +--------+---------+
     |                  |
  STEP 5             STEP 7
  Angular velocity   TORQUE  tau = r x F
  v = r omega              |
     |               STEP 8
     |               ANGULAR MOMENTUM  L = r x p
     |                     |
     |               STEP 9
     |               tau = dL/dt  ->  CONSERVATION OF L
     |                     |            (skater, diver, stool)
     |                     |
     +----------+----------+
                |
  STEP 10   MOMENT OF INERTIA  I = sum m r^2
                |    definition -> radius of gyration -> the TABLE
                |
  STEP 11   THE TWO THEOREMS   (parallel axes, perpendicular axes)
                |               <-- highest-value 4 marks in the chapter
                |
  STEP 12   Rotational analogue table, KE_rot, work, power
                |
  STEP 13   ROLLING MOTION and the incline race
                |
  STEP 14   Equilibrium, couple, principle of moments, centre of gravity
                |               <-- easy 2 and 4 mark answers, do it last
                |
             DONE
```

---

## THE KEY BOX — the formulas that unlock most questions

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   CENTRE OF MASS          m1 x1  +  m2 x2                           |
  |   (two particles)  X_cm = -------------------                       |
  |                              m1  +  m2                              |
  |                                                                     |
  |   TORQUE                  tau  =  r x F  =  r F sin(theta)          |
  |                                                                     |
  |   ANGULAR MOMENTUM        L  =  r x p  =  I omega                   |
  |                                                                     |
  |   NEWTON FOR ROTATION     tau  =  dL / dt  =  I alpha               |
  |                                                                     |
  |   CONSERVATION            tau_ext = 0   =>   I1 w1  =  I2 w2        |
  |                                                                     |
  |   MOMENT OF INERTIA       I  =  sum ( m r^2 )  =  M K^2             |
  |                                                                     |
  |   PARALLEL AXES           I  =  I_cm  +  M d^2                      |
  |                                                                     |
  |   PERPENDICULAR AXES      Iz  =  Ix  +  Iy      (flat lamina only)  |
  |                                                                     |
  |   ROLLING                 v_cm = R omega                            |
  |                                                                     |
  |                                     g sin(theta)                    |
  |   ROLLING DOWN A SLOPE    a  =  --------------------                |
  |                                   1  +  K^2 / R^2                   |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**The four numbers that decide every rolling question:**

```
  +--------------------------------+-------------+
  |  BODY                          |  K^2 / R^2  |
  +--------------------------------+-------------+
  |  Solid sphere                  |     2/5     |   fastest
  |  Solid cylinder / disc         |     1/2     |
  |  Hollow sphere (shell)         |     2/3     |
  |  Ring / hollow cylinder        |      1      |   slowest
  +--------------------------------+-------------+

  SMALLEST K^2/R^2  ->  BIGGEST acceleration  ->  reaches the bottom FIRST.
```

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  (morning)   Centre of mass: definition, two-particle formula,
                     n-particle formula, and the CM of a rod / ring /
                     disc / sphere / triangle.
                     Work 5 numerical problems.

  DAY 1  (evening)   Vector product rules, torque, angular momentum,
                     tau = dL/dt, conservation of angular momentum
                     with the skater / diver / stool examples.
                     Learn the words, they are 2-mark answers.

  DAY 2  (morning)   MOMENT OF INERTIA table (memorise all 8 rows),
                     radius of gyration, and BOTH theorems with
                     one worked application each.
                     This is the single biggest block of marks.

  DAY 2  (evening)   The rotational-analogue table, rotational KE,
                     rolling motion, and the incline race order.
                     Then read 05-question-patterns.md once, end to end.
```

**If you only have 2 HOURS**, learn exactly these four things:

```
  1.  X_cm = (m1 x1 + m2 x2) / (m1 + m2)
  2.  The moment of inertia table (8 rows).
  3.  The two theorems, word perfect:  I = I_cm + M d^2  and  Iz = Ix + Iy.
  4.  a = g sin(theta) / (1 + K^2/R^2) , and "solid sphere first, ring last".

  That is a realistic 6 marks with almost no understanding required.
```
