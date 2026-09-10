# Electromagnetic Induction — Mind Map

**Physics 2nd Year · Chapter 9**
**One idea runs through the whole chapter: a CHANGING magnetic flux makes an EMF.
Learn that one sentence and half the chapter falls into place.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                       ELECTROMAGNETIC  INDUCTION
                                  |
              "A CHANGING MAGNETIC FLUX PRODUCES AN EMF"
                                  |
     +----------------+-----------+-----------+----------------+
     |                |                       |                |
  THE IDEA        HOW BIG?               WHICH WAY?        WHERE IS IT
     |                |                       |             USED?
  Faraday &       FARADAY'S LAW           LENZ'S LAW           |
  Henry           e = -N d(phi)/dt        "oppose the      +---+-------+
  experiments          |                   change"         |           |
     |            phi = B A cos theta          |         EDDY      AC
  1. magnet            |                  comes from     CURRENTS  GENERATOR
     + coil       unit weber (Wb)         CONSERVATION      |         |
  2. coil + coil  dim [M L^2 T^-2 A^-1]   OF ENERGY      bad: heat  e = N B A
  3. coil +            |                       |         in cores     omega
     current      3 ways to change phi         |         fix: LAMINATE  sin(omega t)
     circuit        - change B                 |         good: braking,
                    - change A                 |         furnace,
                    - change theta             |         damping,
                         |                     |         energy meter
                    MOTIONAL EMF               |
                    e = B l v                  |
                         |                     |
              +----------+----------+          |
              |                     |          |
        from flux rule       from Lorentz force |
              |                     |          |
              +----------+----------+          |
                         |                     |
                   F = B^2 l^2 v / R           |
                   P = B^2 l^2 v^2 / R  = heat |
                                               |
                                  +------------+------------+
                                  |                         |
                            INDUCTANCE  L , M          the minus sign
                                  |                     = Lenz's law
              +-------------------+-------------------+
              |                                       |
       SELF INDUCTION                          MUTUAL INDUCTION
       e = -L dI/dt                            e2 = -M dI1/dt
       phi = L I                               phi2 = M I1
       unit: HENRY (H)                         unit: HENRY (H)
              |                                       |
       SOLENOID                                Two coaxial solenoids
       L = mu0 n^2 A l                         M = mu0 n1 n2 A l
              |                                       |
       ENERGY STORED                           M12 = M21 (reciprocity)
       U = (1/2) L I^2                         k = M / sqrt(L1 L2)
       u = B^2 / (2 mu0)                       0 <= k <= 1
              |
       SERIES  L = L1 + L2 (+ 2M)
       PARALLEL 1/L = 1/L1 + 1/L2
```

---

## THE 60-SECOND VERSION

```
  1.  MAGNETIC FLUX  phi = B A cos theta      (how much field pokes
                                               through the loop)

  2.  If phi CHANGES with time, an EMF appears:

                         d(phi)
              e  =  - N  ------
                           dt

  3.  The MINUS sign is Lenz's law: the induced current always fights
      the change that created it. If it did not, you would get free
      energy, which is impossible.

  4.  Everything else in the chapter is just a special case:
        rod moving in a field   ->   e = B l v
        current changing in a coil  ->   e = -L dI/dt
        coil rotating in a field    ->   e = N B A omega sin(omega t)
```

That is the whole chapter. Everything after this is detail.

---

## WHERE THE MARKS ARE (AP Inter Physics, 60-mark paper)

```
  +--------------------------------------------------+---------+-------+
  |  TOPIC                                           | SECTION | MARKS |
  +--------------------------------------------------+---------+-------+
  |  Define magnetic flux / its unit / dimensions    |    A    |   2   |
  |  State Faraday's laws                            |    A    |   2   |
  |  State Lenz's law                                |    A    |   2   |
  |  Define self inductance / henry                  |    A    |   2   |
  |  Define mutual inductance                        |    A    |   2   |
  |  What are eddy currents?                         |    A    |   2   |
  |  Lenz's law and CONSERVATION OF ENERGY           |    B    |   4   |
  |  Motional EMF  e = B l v  (derivation)           |    B    |   4   |
  |  Self inductance of a SOLENOID (derivation)      |    B    |   4   |
  |  Mutual inductance of two coaxial solenoids      |    B    |   4   |
  |  Eddy currents - uses and how to reduce them     |    B    |   4   |
  |  Energy stored in an inductor                    |    B    |   4   |
  |  AC GENERATOR - construction, working, theory    |    C    |   8   |
  |                            <-- the big one                          |
  +--------------------------------------------------+---------+-------+

  Realistic haul from this chapter:  8 to 12 marks out of 60
  (and up to 16 if the AC generator is one of the two long answers
   you choose).
```

---

## STUDY THIS ORDER

```
  STEP 1   MAGNETIC FLUX     phi = B A cos theta
           (you cannot understand ANY of this chapter without it)
                       |
  STEP 2   Faraday & Henry experiments  -> "flux change makes EMF"
                       |
  STEP 3   FARADAY'S LAWS    e = -N d(phi)/dt
                       |
  STEP 4   LENZ'S LAW  +  conservation of energy
           (this is what the minus sign MEANS)
                       |
        +--------------+---------------+
        |                              |
  STEP 5  MOTIONAL EMF            STEP 6  EDDY CURRENTS
        e = B l v                        (pure theory, easy 4 marks)
        force, power, heat
        |
  STEP 7   SELF INDUCTION  L , solenoid  L = mu0 n^2 A l
        |
  STEP 8   ENERGY STORED   U = (1/2) L I^2
        |
  STEP 9   MUTUAL INDUCTION  M , two solenoids, coupling k
        |
  STEP 10  AC GENERATOR   e = N B A omega sin(omega t)
           <-- 8-mark long answer, do it LAST but do it WELL
```

---

## THE KEY BOX — memorise these two and you can attempt most questions

```
  +----------------------------------------------------------------+
  |                                                                |
  |     MAGNETIC FLUX          phi  =  B A cos theta               |
  |                                                                |
  |                                          d(phi)                |
  |     FARADAY + LENZ         e  =  -  N   --------               |
  |                                            dt                  |
  |                                                                |
  |     unit of flux = weber (Wb) = T m^2 = V s                    |
  |                                                                |
  +----------------------------------------------------------------+
```

Every single derivation in this chapter starts from one of these two lines.
Motional EMF, self inductance, mutual inductance and the AC generator are all
just "put a particular phi into Faraday's law and differentiate".

---

## THE SECOND KEY BOX — the inductance family

```
  +----------------------------------------------------------------+
  |                                                                |
  |   SELF        phi = L I          e = - L  dI/dt                |
  |               L(solenoid) = mu0 n^2 A l                        |
  |               U = (1/2) L I^2                                  |
  |                                                                |
  |   MUTUAL      phi2 = M I1        e2 = - M  dI1/dt              |
  |               M(two solenoids) = mu0 n1 n2 A l                 |
  |               M = k sqrt(L1 L2)                                |
  |                                                                |
  |   Unit of BOTH L and M  =  HENRY (H) = Wb/A = V s / A          |
  |                                                                |
  +----------------------------------------------------------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  (about 3 hours)
    1.  phi = B A cos theta , its unit and dimensions        (15 min)
    2.  Faraday's two laws , e = -N d(phi)/dt                (20 min)
    3.  Lenz's law + the bar-magnet-and-coil energy argument (40 min)
    4.  Motional EMF e = B l v , both derivations            (40 min)
    5.  Eddy currents: definition, why bad, lamination,
        four uses                                            (30 min)
    6.  Write out the 8 Section-A answers from 03-pyq        (35 min)

  DAY 2  (about 3 hours)
    7.  Self inductance + solenoid derivation                (40 min)
    8.  Energy stored U = (1/2) L I^2 + energy density       (25 min)
    9.  Mutual inductance + two coaxial solenoids + k        (35 min)
   10.  AC GENERATOR: diagram, construction, working,
        full derivation, graph                               (60 min)
   11.  Series and parallel inductors                        (10 min)
   12.  Re-draw all four ASCII diagrams from memory          (20 min)
```

> If you have only ONE evening: learn `phi = B A cos theta`,
> `e = -N d(phi)/dt`, Lenz's law, `e = B l v`, eddy currents and
> the AC generator derivation. That alone is worth about 10 marks.
