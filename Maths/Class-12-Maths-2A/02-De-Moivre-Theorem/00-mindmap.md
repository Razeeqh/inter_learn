# De Moivre's Theorem — Mind Map

**Maths IIA · Chapter 2 · The chapter that pays a full 7-mark question**
Every session: at least 1 very short answer (2M) + a Section C long answer (7M)

Chapter 1 taught you to WRITE a complex number in polar form.
Chapter 2 teaches you to POWER it and ROOT it. That is the whole difference.

This chapter is worth doing properly because the 7-mark Section C question here
is one of the most predictable in the entire Maths IIA paper. The same four or
five shapes come back again and again, and the working is mechanical once you
know the pattern.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                     D E   M O I V R E ' S   T H E O R E M
                                      |
        +-------------------+---------+---------+-------------------+
        |                   |                   |                   |
   POLAR FORM          INTEGRAL           RATIONAL              ROOTS
    (recap)             INDEX               INDEX                 |
        |                   |                   |                 |
  z = r(cos t         (cos t + i sin t)^n   (cos t+i sin t)^(p/q)  |
    + i sin t)         = cos nt + i sin nt      |                  |
        |                   |               is ONE OF the values   |
   r = |z|            n = ANY INTEGER           |                  |
   t = amplitude      (+ve, 0, -ve)         there are q values     |
        |                   |                   |                  |
   short form           proved by           k = 0,1,...,q-1        |
   cis t              INDUCTION for +ve         |                  |
        |             then 1/(...) for -ve  p(2k pi + t)/q         |
   PRINCIPAL                |                                      |
   -pi < t <= pi            |                                      |
        |                   |                                      |
   cis A x cis B      +-----+-----+                                |
    = cis(A+B)        |           |                                |
        |         EXPANSIONS   POWERS TO                           |
   cis A / cis B          |     MULTIPLE ANGLES                    |
    = cis(A-B)     cos nt , sin nt      |                          |
        |          in powers of    z + 1/z = 2 cos t               |
   1/cis t             cos t, sin t z - 1/z = 2i sin t             |
    = cis(-t)              |             |                         |
                      cos 3t = 4c^3-3c   z^n + 1/z^n = 2 cos nt    |
                      sin 3t = 3s-4s^3   z^n - 1/z^n = 2i sin nt   |
                      tan 3t             |                         |
                                    cos^3 t, sin^3 t,              |
                                    cos^4 t, sin^5 t ...           |
                                                                   |
        +------------------------------+---------------------------+
        |                              |                           |
   nth ROOTS OF UNITY         CUBE ROOTS OF UNITY        nth ROOTS OF ANY
        |                              |                  COMPLEX NUMBER
   z^n = 1                      1 , w , w^2                       |
        |                              |                 z = r cis t
   z = cis(2k pi / n)           w = (-1 + i sqrt3)/2             |
   k = 0,1,...,n-1                     |                 roots =
        |                       1 + w + w^2 = 0          r^(1/n) cis
   EXACTLY n roots                     |                 ( (2k pi + t)/n )
        |                       w^3 = 1                          |
   1, a, a^2, ..., a^(n-1)             |                 k = 0,...,n-1
   with a = cis(2pi/n)          w bar = w^2                      |
        |                       1/w   = w^2                same n-gon,
   they form a G.P.                    |                  radius r^(1/n)
        |                       w^n by remainder                 |
   SUM = 0                       of n divided by 3        SOLVING
        |                              |                  z^n = a + ib
   PRODUCT = (-1)^(n+1)         a^3+b^3+c^3-3abc          z^n + 1 = 0
        |                       = (a+b+c)                 (x-1)^n = x^n
   vertices of a REGULAR         (a+bw+cw^2)
   n-GON on the unit circle      (a+bw^2+cw)
```

---

## THE 60-SECOND VERSION

A complex number in polar form is a **length and a direction**:

```
                z  =  r ( cos t + i sin t )

                      r = how far from the origin
                      t = the angle turned from the +Re axis
```

Multiplying two complex numbers **multiplies the lengths and ADDS the angles**.
So squaring squares the length and **doubles** the angle. Cubing cubes the length
and **triples** the angle. Keep going and you get De Moivre's Theorem:

```
        +------------------------------------------------------+
        |                                                      |
        |     ( cos t + i sin t )^n   =   cos nt + i sin nt    |
        |                                                      |
        +------------------------------------------------------+
```

Multiplying a complex number by itself n times is just **spinning it n times as far**.

Everything else in the chapter is that one line, used forwards or backwards:

| Direction | What it does | Example |
|---|---|---|
| Forwards (n a whole number) | powers become easy | `(1 + i)^16` in one line |
| Forwards + binomial expansion | gives `cos 3t = 4cos^3 t - 3cos t` | trig identities for free |
| Backwards (`z + 1/z = 2 cos t`) | turns `cos^5 t` into multiple angles | integration later |
| Fractional n | gives ROOTS | cube roots of unity, nth roots |

> Reversing the spin gives roots. If squaring doubles the angle, then square-rooting
> HALVES the angle — and because a full turn of 360 degrees brings you back to the
> same point, there are always **several** answers. That is the whole reason an nth
> root has exactly **n** values.

---

## THE ROOTS PICTURE — burn this into your memory

```
   The n nth-roots of 1 sit on the UNIT CIRCLE, equally spaced,
   one of them always at the point 1.

        n = 3  (triangle)                n = 4  (square)

              Im                                Im
               ^                                 ^
     w         |                                 |
      *        |                                 * i
        \      |                                 |
          \    |                                 |
   --------\---+--------*----> Re      ----*-----+-----*----> Re
             \ O        1                  -1    O     1
            /  |                                 |
          /    |                                 |
        *      |                                 * -i
     w^2       |                                 |

   angles 0, 120, 240              angles 0, 90, 180, 270
   spacing 360/3 = 120 deg         spacing 360/4 = 90 deg
```

```
   In general:   n roots , spacing 360/n degrees , all of modulus 1 ,
                 vertices of a REGULAR n-SIDED POLYGON ,
                 their SUM = 0 , their PRODUCT = (-1)^(n+1).
```

---

## WHERE THE MARKS ARE (BIEAP, Maths IIA, 75 marks)

**Paper shape:**

```
  Section A   10 questions x 2 marks  =  20     ANSWER ALL 10
  Section B    7 questions x 4 marks  =  20     ANSWER ANY 5
  Section C    7 questions x 7 marks  =  35     ANSWER ANY 5
                                        ----
                                          75
```

| Topic | Section | Marks |
|-------|---------|-------|
| Simplify a product/quotient of `cis` terms using De Moivre | A | 2 |
| Powers such as `(1 + i)^16`, `(1 + i sqrt3)^3`, `(1 - i)^8` | A | 2 |
| Cube roots of unity: value of `(1 - w + w^2)^3`, `(1+w)(1+w^2)...` | A | 2 |
| Find `w^n` for a large n (remainder of n divided by 3) | A | 2 |
| Sum / product of the nth roots of unity | A | 2 |
| Prove `(1+i)^n + (1-i)^n = 2^((n+2)/2) cos(n pi/4)` | B | 4 |
| Prove `alpha^n + beta^n` results from a quadratic | B or C | 4 or 7 |
| Express `cos^n t` / `sin^n t` in multiple angles | B | 4 |
| **Find ALL values of a fractional power, e.g. `(1 + i)^(1/3)`** | **C** | **7** |
| **`(1+cos t+i sin t)^n + (1+cos t-i sin t)^n = 2^(n+1) cos^n(t/2) cos(nt/2)`** | **C** | **7** |
| **Solve `z^n = a + ib` / `(x-1)^n = x^n` / nth roots on the Argand plane** | **C** | **7** |
| **Prove sum-of-roots-of-unity and cube-root-of-unity identities** | **C** | **7** |

**Realistic total from this one chapter: 9 to 13 marks out of 75.**
A 2-mark Section A almost every session, plus one 7-mark Section C you can
choose. With Chapter 1 beside it, that is roughly 15 marks — a fifth of the paper
from two short chapters.

> Pass mark is 26 out of 75. Chapters 1 and 2 together can carry you halfway there.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   RECAP polar form  z = r(cos t + i sin t)
           r = modulus , t = principal amplitude , quadrant rule
              |
  STEP 2   The shorthand  cis t  and the three rules
           cis A x cis B = cis(A+B) ,  cis A / cis B = cis(A-B) ,
           1 / cis t = cis(-t) = cos t - i sin t
              |
  STEP 3   DE MOIVRE for a POSITIVE INTEGER n  + the induction proof
              |
  STEP 4   Extend to n = 0 and to NEGATIVE integers
              |
     +--------+------------------+
     |                           |
  STEP 5                      STEP 6
  Simplify products         Expand cos nt , sin nt , tan nt
  of cis terms              in powers of cos t and sin t
  (the 2-mark Q)               |
     |                      STEP 7
     |                      z + 1/z = 2 cos t  ,  z - 1/z = 2i sin t
     |                         |
     |                      STEP 8
     |                      cos^n t and sin^n t  ->  multiple angles
     |                         |
     +--------+------------------+
              |
  STEP 9   DE MOIVRE for a RATIONAL index p/q
           - it gives ONE OF the values
           - there are exactly q values
           - the general value formula
              |
  STEP 10  nth ROOTS OF UNITY
           formula , n of them , regular n-gon , G.P. ,
           SUM = 0 , PRODUCT = (-1)^(n+1)
              |
     +--------+--------+
     |                 |
  STEP 11         STEP 12
  CUBE roots      FOURTH roots
  1 , w , w^2     1 , i , -1 , -i
  the identities
     |                 |
     +--------+--------+
              |
  STEP 13  nth ROOTS OF ANY COMPLEX NUMBER
           r^(1/n) cis( (2k pi + t)/n )
              |
  STEP 14  FIND ALL VALUES of (a + ib)^(p/q)     <-- the 7-mark Q
              |
  STEP 15  SOLVE z^n = a + ib , z^n + 1 = 0 , (x-1)^n = x^n
              |
        ---> Chapter 3 : Quadratic Expressions (roots again)
```

---

## THE KEY BOX — the formulas that unlock most problems

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   (1)  DE MOIVRE, integral index                                 |
  |                                                                  |
  |        ( cos t + i sin t )^n  =  cos nt + i sin nt   , n in Z    |
  |                                                                  |
  |------------------------------------------------------------------|
  |                                                                  |
  |   (2)  ALL n nth ROOTS of  z = r(cos t + i sin t)                |
  |                                                                  |
  |                    1/n  [       2k pi + t          2k pi + t  ]  |
  |        z_k  =     r     [ cos ------------ + i sin ---------- ]  |
  |                           [        n                    n     ]  |
  |                                                                  |
  |        k = 0, 1, 2, ..., n-1        (put k = 0 first, then add   |
  |                                      2 pi / n each time)         |
  |                                                                  |
  |------------------------------------------------------------------|
  |                                                                  |
  |   (3)  CUBE ROOTS OF UNITY                                       |
  |                                                                  |
  |        1 + w + w^2 = 0            w^3 = 1                        |
  |                                                                  |
  |        (so 1 + w = -w^2 ,  1 + w^2 = -w ,  w + w^2 = -1)         |
  |                                                                  |
  +------------------------------------------------------------------+
```

Those three boxes answer, between them, about 80% of everything asked from this chapter.

---

## THE THREE SENTENCES THAT SAVE THE 7-MARK QUESTION

```
  1.  "Write the number in modulus-amplitude form first."
      Never start powering or rooting until you have r and t.

  2.  "For a root, replace t by 2k pi + t BEFORE dividing by n."
      Skipping this loses you all but one of the answers, and most of the marks.

  3.  "k runs 0, 1, 2, ..., n-1 — then STOP."
      k = n just repeats k = 0.
```

---

## IF YOU ONLY HAVE 2 DAYS

```
  DAY 1  MORNING  (2 hours)
    - Re-read polar form from Chapter 1. Practise 5 conversions to r cis t.
    - Learn De Moivre for an integer index. Write the induction proof twice
      from memory. It is 8 lines and it is sometimes asked for marks.
    - Do 10 Section A "simplify the cis product" questions.

  DAY 1  AFTERNOON  (2 hours)
    - Cube roots of unity. Learn 1 + w + w^2 = 0 and w^3 = 1 cold.
    - Do every 2-mark w question in file 03. There are a dozen and they
      are all one line each. This is the cheapest 2 marks in the paper.

  DAY 2  MORNING  (2.5 hours)
    - The general nth-root formula. Do "find all values of (1+i)^(1/3)"
      and "(sqrt3 + i)^(1/4)" until you can do them without looking.
    - Draw the n-gon each time. The diagram carries a mark.

  DAY 2  AFTERNOON  (2.5 hours)
    - Learn these three 7-markers as complete written answers:
        (a) (1 + cos t + i sin t)^n + (1 + cos t - i sin t)^n
        (b) alpha^n + beta^n  from  x^2 - 2x + 4 = 0
        (c) find all values of (1 + i)^(1/3)  and plot them
    - Then do the sum/product of the nth roots of unity proof.

  IF YOU ONLY HAVE 2 HOURS TOTAL
    - 1 + w + w^2 = 0 and w^3 = 1  (2-mark question, guaranteed)
    - (cos t + i sin t)^n = cos nt + i sin nt  (2-mark question)
    - the general nth-root formula  (opens the 7-mark question)
    That is 9 marks for two hours of work.
```

---

## HONEST WARNING

The single most common way students lose the 7 marks in this chapter is
**forgetting the `2k pi`**. They write

```
                         1/3         t          t
        (r cis t)      =  r    ( cos --- + i sin --- )        <-- ONLY ONE VALUE
                                      3          3
```

and stop. That is worth about 2 marks out of 7. The examiner wants **all three**
values, listed, with k = 0, 1, 2 shown. Put the `2k pi` in from the very first line
and you cannot forget it.
