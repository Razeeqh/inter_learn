# Limits and Continuity — Mind Map

**Maths 1B · Chapter 8 · The gateway chapter of Calculus**
Every year: 2-3 very short answers (2M) + 1 short answer (4M).
Nothing here is hard. It is a chapter of **rules you apply**, not proofs you invent.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                     L I M I T S   A N D   C O N T I N U I T Y
                                       |
        +------------------------------+------------------------------+
        |                                                             |
    L I M I T S                                            C O N T I N U I T Y
        |                                                             |
   +----+----+----+----+                              +------+--------+------+
   |    |    |    |    |                              |      |        |      |
 What  LHL  Algebra Indeter-  Standard              Three   Types   Standard  Algebra
 is a   &    of     minate    Limits                condi-   of     functions   of
 limit RHL  limits  forms     (memorise)            tions   discon-  that are  continuous
   |    |     |       |          |                    |     tinuity continuous functions
   |    |     |       |          |                    |       |        |        |
 "x     LHL  sum    0/0       sin x / x = 1        1. f(a)  Remov-  polynomial  f+g
 near   =    diff   inf/inf   tan x / x = 1           exists able   rational    f-g
  a,    RHL  prod   inf-inf   (1-cos x)/x^2=1/2       |       |     modulus     f.g
 not    =    quot   0 x inf   arcsin x / x = 1     2. lim   Jump    trig        f/g
 equal  L    k.f    1^inf     arctan x / x = 1        exists  |     exp / log   (g not 0)
  a"    |      |       |      (a^x-1)/x = log a       |     Infinite   |          |
        |      |       |      (e^x-1)/x = 1        3. lim     |    [x] and     |f|
        |      |       |      log(1+x)/x = 1          = f(a)  |    1/x are     |
        |      |       |      (1+1/x)^x = e           |       |    the two    composite
        |      |       |      (1+x)^(1/x) = e         |       |    trouble-     fog
        |      |       |      (x^n-a^n)/(x-a)         |       |    makers
        |      |       |          = n a^(n-1)         |       |
        |      |       |                              |       |
        |      |   METHODS TO KILL THEM               |    FIND k SO THAT
        |      |       |                              |    f IS CONTINUOUS
        |      |   1 direct substitution              |    <-- THE 4-MARK
        |      |   2 factorise and cancel             |        BOARD QUESTION
        |      |   3 rationalise (conjugate)          |
        |      |   4 x^n - a^n formula                +-- continuity on an
        |      |   5 divide by highest power              interval [a,b]
        |      |   6 standard limits
        |      |   7 exponential rule for 1^inf
```

---

## THE 60-SECOND VERSION

A **limit** answers one question:

> "As x creeps closer and closer to a, where is f(x) heading?"

Notice what it does **not** ask: it does not ask what happens **at** x = a.
The value at a is allowed to be missing, or wrong, or anything at all.
The limit only watches the journey, never the destination itself.

You walk toward a from two sides:

```
   <---- coming from the left            coming from the right ---->
         x = 1.9 , 1.99 , 1.999    a=2    2.001 , 2.01 , 2.1
                LHL                            RHL

   If  LHL = RHL = L    ->  the limit exists and equals L
   If  LHL is not RHL   ->  the limit DOES NOT EXIST.  Say exactly that.
```

**Continuity** then asks the extra question the limit refused to ask:

> "Does the journey actually END where the function is sitting?"

```
   CONTINUOUS at x = a   means   lim f(x)  =  f(a)
                                 x->a

   i.e. you can draw the graph through x = a without lifting your pen.
```

That is the whole chapter. Everything else is technique.

---

## THE FOUR JOBS OF THIS CHAPTER

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Evaluate an easy limit | substitute, factorise or rationalise | Section A, 2 marks |
| Use a standard limit | recognise sin x / x , (e^x - 1)/x etc. | Section A, 2 marks |
| Limit as x -> infinity | divide by the highest power of x | Section A or B, 2 or 4 marks |
| Continuity / find k | check LHL, RHL, f(a) and match them | **Section B, 4 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IB)

| Topic | Section | Marks |
|-------|---------|-------|
| Evaluate a 0/0 limit by factorising or rationalising | A | 2 |
| Standard trigonometric limit (sin x / x type) | A | 2 |
| Standard exponential / log limit | A | 2 |
| Limit as x -> infinity of a rational function | A | 2 |
| Check whether a limit exists (LHL vs RHL, [x] or \|x\|) | A | 2 |
| **Check continuity of a piecewise function at a point** | **B** | **4** |
| **Find k so that f is continuous** | **B** | **4** |
| Show a given piecewise f is continuous on an interval | B | 4 |

```
  +---------------------------------------------------------------+
  |  HONEST NOTE ABOUT SECTION C                                  |
  |                                                               |
  |  In Maths IB, Section C (7 marks) is normally taken by        |
  |  Straight Lines, Pair of Straight Lines, The Plane / 3D,      |
  |  Tangents & Normals, Rate of Change, and Maxima & Minima.     |
  |                                                               |
  |  LIMITS AND CONTINUITY IS ESSENTIALLY A SECTION A + B         |
  |  CHAPTER.  A 7-mark question from it is rare.                 |
  |                                                               |
  |  Do NOT skip it for that reason. It is worth about 8-10       |
  |  marks of the EASIEST marks in the whole paper, and it is     |
  |  the foundation of Chapter 9 (Differentiation), which IS      |
  |  worth 7 marks.                                               |
  +---------------------------------------------------------------+
```

**Realistic total from this one chapter: about 8 to 10 marks out of 75.**
Add the chapters it unlocks (Differentiation, Applications of Derivatives)
and it is standing under roughly 25 more marks.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What a limit means  +  LHL and RHL
              |
              |    (this is where "limit does not exist" answers come from)
              v
  STEP 2   Algebra of limits (sum, difference, product, quotient)
              |
              v
  STEP 3   DIRECT SUBSTITUTION  -- always try this first
              |
              +-- it worked?  -->  DONE. Write the answer.
              |
              +-- you got 0/0 or inf/inf or inf-inf ?
                        |
                        v
  STEP 4   Recognise WHICH indeterminate form you have
              |
     +--------+--------+--------+---------+
     |        |        |        |         |
  STEP 5   STEP 6   STEP 7   STEP 8    STEP 9
  Factorise Ration-  x^n-a^n Divide by  Standard
  & cancel  alise    formula  highest   limits
     |      (surds)     |     power     (sin/exp/log)
     |        |         |       |         |
     +--------+---------+-------+---------+
                        |
                        v
  STEP 10  The 1^infinity form  ->  exponential rule
                        |
                        v
  STEP 11  CONTINUITY at a point: the three conditions
                        |
                        v
  STEP 12  Find k so that f is continuous   <-- THE 4-MARK QUESTION
                        |
                        v
  STEP 13  Types of discontinuity + continuity on an interval
                        |
                        v
             ==>  CHAPTER 9  DIFFERENTIATION
                  (the derivative IS a limit)
```

---

## THE KEY BOX — the formulas that unlock most questions

```
  +===============================================================+
  |                                                               |
  |   THE EXISTENCE TEST                                          |
  |                                                               |
  |        lim  f(x)  exists   <=>   LHL  =  RHL                  |
  |        x->a                                                   |
  |                                                               |
  |        LHL  =   lim   f(x)   =  lim  f(a - h)                 |
  |                x->a-             h->0                         |
  |                                                               |
  |        RHL  =   lim   f(x)   =  lim  f(a + h)                 |
  |                x->a+             h->0                         |
  |                                          (h > 0 always)       |
  |                                                               |
  +===============================================================+


  +===============================================================+
  |                                                               |
  |   THE CONTINUITY TEST  --  all THREE must hold                |
  |                                                               |
  |        (1)  f(a)  is defined                                  |
  |                                                               |
  |        (2)  lim f(x)  exists      i.e.  LHL = RHL             |
  |             x->a                                              |
  |                                                               |
  |        (3)  lim f(x)  =  f(a)                                 |
  |             x->a                                              |
  |                                                               |
  |        SHORT FORM:      LHL  =  RHL  =  f(a)                  |
  |                                                               |
  +===============================================================+


  +===============================================================+
  |                                                               |
  |   THE FIVE LIMITS THAT APPEAR MOST OFTEN                      |
  |                                                               |
  |        lim   sin x                    lim   x^n - a^n         |
  |       x->0  -------  =  1            x->a  ---------          |
  |                x                            x - a             |
  |                                                               |
  |                                       =  n a^(n-1)            |
  |        lim   1 - cos x     1                                  |
  |       x->0  ----------  =  -          lim   e^x - 1           |
  |                 x^2        2         x->0  ---------  =  1    |
  |                                                x              |
  |                                                               |
  |                          lim   ( 1 + 1/x )^x  =  e            |
  |                         x->inf                                |
  |                                                               |
  |   (all trigonometric ones need the angle in RADIANS)          |
  |                                                               |
  +===============================================================+
```

---

## THE ONE-LINE DECISION TREE

```
                     You are given  lim f(x)
                                   x->a
                            |
                     SUBSTITUTE x = a
                            |
        +-------------------+-------------------+
        |                                       |
   You got a NUMBER                    You got 0/0 , inf/inf ,
   (or a clean 5/0 = infinity)         inf - inf , 0 x inf , 1^inf
        |                                       |
     THAT IS                            Look at what is inside
    THE ANSWER                                  |
                     +-----------+----------+---+------+-----------+
                     |           |          |          |           |
                 polynomial    surds     sin/cos    e^x, a^x     x -> inf
                  fraction   (sqrt)      /tan       , log
                     |           |          |          |           |
                 FACTORISE   RATIONALISE  STANDARD  STANDARD   DIVIDE BY
                 and cancel   (conjugate) TRIG      EXP / LOG  HIGHEST
                     |                    LIMITS    LIMITS     POWER OF x
                 or use
                 x^n - a^n
                 formula
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — the meaning + the easy machinery.**
Learn LHL / RHL and the existence test. Then practise direct substitution,
factorise-and-cancel, and rationalisation. Do 10 problems. These alone are
worth 2-4 marks in Section A and they are almost impossible to get wrong.

**Day 1 evening — memorise the standard limits.**
Write the list from `02-formulae.md` on one sheet of paper. Say them out loud.
Then do 10 problems that use them: `sin ax / x`, `(1 - cos 2x)/x^2`,
`(e^(3x) - 1)/x`, `(1 + 1/x)^x`. Nothing else. Just recognition drill.

**Day 2 morning — limits at infinity.**
One rule only: divide every term, top and bottom, by the highest power of x
in the DENOMINATOR. Then every `1/x` becomes 0. Do 6 problems, including two
with `sqrt` in them.

**Day 2 evening — continuity. This is the 4-mark question, so give it the most time.**
Learn the three conditions. Then do 6 "find k" problems and 3 "is f continuous
at x = a" problems. Write out LHL, RHL and f(a) as three separate labelled lines
every single time — the examiner gives marks for those three lines even before
the final conclusion.

```
  That plan is worth about 8-10 marks out of 75, and it is the
  cheapest 8-10 marks anywhere in Maths IB.
```

---

## THE FIVE SENTENCES TO CARRY INTO THE HALL

```
  1.  A limit is about NEAR a, never AT a.
  2.  Substitute first. Only panic if you get 0/0.
  3.  0/0 means there is a COMMON FACTOR waiting to be cancelled.
  4.  Every trigonometric standard limit needs RADIANS.
  5.  Continuity = LHL = RHL = f(a).  Write all three lines. Always.
```
