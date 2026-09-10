# Partial Fractions — Mind Map

**Maths IIA · Chapter 7 · The EASIEST guaranteed marks in the whole paper**
Every year: 1 short answer (4M) + 1 very short answer (2M). No proofs. No theory.
Pure mechanical steps. If you learn only ONE chapter properly, learn this one.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                     P A R T I A L   F R A C T I O N S
                (break ONE big fraction into SMALL fractions)
                                   |
     +--------------+--------------+--------------+--------------+
     |              |              |              |              |
  STEP 0         STEP 1         STEP 2         STEP 3         STEP 4
  Is it a        PROPER or      FACTORISE      Pick the       FIND
  RATIONAL       IMPROPER ?     the            CASE           A, B, C
  function?         |           DENOMINATOR       |              |
     |              |               |             |              |
  N(x)/D(x)     deg N < deg D   x^2-5x+6      CASE 1 distinct  3 ways:
  both top      = PROPER        = (x-2)(x-3)  linear             |
  and bottom    -> go straight     |          CASE 2 repeated  (a) put
  are           to STEP 2      x^2-4          linear               easy x
  POLYNOMIALS       |          = (x-2)(x+2)   CASE 3 quadratic     values
     |          deg N >= deg D   |            CASE 4 repeated  (b) compare
     |          = IMPROPER    x^3-1              quadratic         coeffts
     |          -> LONG       = (x-1)                            (c) COVER-UP
     |             DIVISION      (x^2+x+1)                          (fastest)
     |             FIRST                                             |
     +----------------------------------------------------------------+
                                   |
                              WRITE ANSWER
                                   |
                          CHECK by putting x = 0
```

---

## THE FOUR CASES — the entire chapter is these four boxes

```
+--------------------------------------------------------------------------+
| CASE 1   DISTINCT (different) LINEAR factors                             |
|                                                                          |
|      3x + 5              A            B                                  |
|   --------------  =  --------  +  --------                               |
|   (x-1)(x+2)           x - 1        x + 2                                |
|                                                                          |
|   ONE constant on top of EACH bracket.                                   |
+--------------------------------------------------------------------------+

+--------------------------------------------------------------------------+
| CASE 2   REPEATED LINEAR factor  (a bracket with a power on it)          |
|                                                                          |
|      3x + 5              A              B                C               |
|   --------------  =  --------  +  -----------  +  -----------            |
|    (x-1)^3             x - 1        (x-1)^2        (x-1)^3               |
|                                                                          |
|   Power 3  ->  you MUST write ALL THREE terms: ^1, ^2, ^3.               |
+--------------------------------------------------------------------------+

+--------------------------------------------------------------------------+
| CASE 3   A QUADRATIC factor that will NOT factorise                      |
|                                                                          |
|       x + 3                 A            Bx + C                          |
|   ----------------  =  ----------  +  ------------                       |
|   (x+1)(x^2 + 1)          x + 1         x^2 + 1                          |
|                                                                          |
|   Quadratic on the bottom  ->  put  Bx + C  on top, NOT just B.          |
+--------------------------------------------------------------------------+

+--------------------------------------------------------------------------+
| CASE 4   REPEATED QUADRATIC factor                                       |
|                                                                          |
|    x^3 + x + 1            Ax + B           Cx + D                        |
|   --------------  =  ------------  +  --------------                     |
|    (x^2 + 1)^2          x^2 + 1        (x^2 + 1)^2                       |
|                                                                          |
|   Two terms, and BOTH tops are  (something)x + (something).              |
+--------------------------------------------------------------------------+
```

**Memory line:** *linear gets a NUMBER on top, quadratic gets  Bx + C  on top,
and a POWER means you write every power from 1 up to that power.*

---

## THE 60-SECOND VERSION

You already know how to ADD fractions:

```
     1           1            (x+2) + (x-1)            2x + 1
  --------  +  --------  =  ----------------  =  ----------------
   x - 1        x + 2         (x-1)(x+2)           (x-1)(x+2)
```

**Partial fractions is that same sum run BACKWARDS.**
You are given the big answer and asked to find the two small fractions again.

That's all. There is no concept to understand. There is only a routine to follow.

| What you are given | What you must produce |
|--------------------|-----------------------|
| One fraction with a factorised (or factorisable) bottom | A sum of small easy fractions |
| Letters A, B, C to be found | The actual numbers |

Why anyone cares: you **cannot integrate** `1/(x^2 - 5x + 6)` directly,
but you CAN integrate `-1/(x-2) + 1/(x-3)` in one line. That is the whole point.

---

## WHERE THE MARKS ARE (AP Inter, Maths IIA — total 75)

```
  +-------------+----------------------------------+---------------------+
  |  SECTION A  |  10 questions x 2 marks = 20     |  ANSWER ALL 10      |
  |  SECTION B  |   7 questions x 4 marks = 28     |  ANSWER ANY 5 = 20  |
  |  SECTION C  |   7 questions x 7 marks = 49     |  ANSWER ANY 5 = 35  |
  +-------------+----------------------------------+---------------------+
                                            TOTAL  =  20 + 20 + 35 = 75
```

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Find the value of ONE coefficient (A or B) | A | 2 |
| Resolve a simple 2-factor fraction | A | 2 |
| **Resolve into partial fractions (full)** | **B** | **4** |
| Repeated linear / quadratic factor resolution | B | 4 |
| Improper fraction (divide first, then resolve) | B | 4 |
| Partial fractions used inside an Integration question | (IIB) | 4 or 7 |

**Total available from this one chapter: about 4 to 6 marks out of 75 —
and they are the CHEAPEST marks on the paper.**

```
  +----------------------------------------------------------------+
  |  IMPORTANT AND HONEST:                                         |
  |  Partial Fractions is a Section A / Section B chapter.         |
  |  It is NOT normally asked as a 7-mark Section C question in    |
  |  Maths IIA. Do not waste time preparing a "long answer" for it.|
  |  Instead, make the 4-mark question a certainty.                |
  +----------------------------------------------------------------+
```

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What is a rational function?  (top and bottom are polynomials)
              |
  STEP 2   PROPER or IMPROPER?  (compare the highest powers)
              |
     +--------+--------+
     |                 |
  PROPER            IMPROPER
     |                 |
     |            STEP 3  LONG DIVISION
     |            answer = Quotient + (Remainder / Divisor)
     |                 |
     +--------+--------+
              |
  STEP 4   FACTORISE the denominator completely
              |
  STEP 5   Look at the factors and pick CASE 1 / 2 / 3 / 4
              |
  STEP 6   Write the correct FORM with letters A, B, C
              |
  STEP 7   Multiply both sides by the denominator
              |
     +--------+--------+--------+
     |        |                 |
  Put easy  Compare         COVER-UP
  x values  coefficients    (Heaviside)
     |        |                 |
     +--------+--------+--------+
              |
  STEP 8   Write the final answer
              |
  STEP 9   CHECK by putting x = 0 in both sides
              |
  STEP 10  (Maths IIB) Use it to INTEGRATE
```

---

## THE THREE WAYS TO FIND A, B, C

```
  +----------------------+---------------------------+----------------------+
  |  METHOD              |  HOW                      |  BEST FOR            |
  +----------------------+---------------------------+----------------------+
  |  Substitution        |  Put x = the root of each |  Distinct linear     |
  |  (put nice x values) |  bracket, one at a time   |  factors             |
  +----------------------+---------------------------+----------------------+
  |  Comparing           |  Expand, then match the   |  Quadratic factors,  |
  |  coefficients        |  x^2, x, constant terms   |  repeated factors    |
  +----------------------+---------------------------+----------------------+
  |  COVER-UP            |  Cover the bracket, put   |  2-mark questions.   |
  |  (Heaviside)         |  its root into what is    |  Gives ONE constant  |
  |                      |  left                     |  in 10 seconds       |
  +----------------------+---------------------------+----------------------+
```

**The cover-up trick, once and for all:**

```
        3x + 5                                         3x + 5
   --------------      To find A, COVER (x-1):     --------------
    (x-1)(x+2)                                      (     )(x+2)

   Then put x = 1 (the value that makes x-1 zero) into what is left:

              3(1) + 5           8
        A =  ----------  =  ---------  =  8/3
              (1) + 2            3
```

---

## IF YOU ONLY HAVE 1 DAY

**Morning (2 hours)** — Learn the FOUR CASE FORMS by heart. Write each box on a
card. You must be able to write the correct form with A, B, C **before** doing any
arithmetic. Half the marks are for writing the correct form.

**Afternoon (2 hours)** — Do 10 CASE 1 problems using the cover-up method only.
Distinct linear factors are the most-asked type by a huge margin.

**Evening (1.5 hours)** — Do 4 repeated-linear (CASE 2) and 4 quadratic (CASE 3)
problems. Then do 2 improper fractions (long division first).

**Night (30 minutes)** — Re-read the four boxes above. Then write them from memory.

```
  +-------------------------------------------------------------------+
  |  If you can do this,                                              |
  |                                                                   |
  |        2x + 3               A           B                         |
  |    --------------  =  --------  +  --------                       |
  |    (x-1)(x+2)           x - 1       x + 2                         |
  |                                                                   |
  |  in under 2 minutes, you have already secured the 4-mark          |
  |  question in Section B. That is 4 marks nobody can take away.     |
  +-------------------------------------------------------------------+
```
