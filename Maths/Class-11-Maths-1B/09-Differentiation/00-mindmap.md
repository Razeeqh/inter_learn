# Differentiation — Mind Map

**Maths 1B · Chapter 9 · THE single biggest scoring chapter in the whole of Maths IB**

Nothing else in IB gives you this many marks for this little thinking.
Almost every paper carries: 2-3 very short answers (2M) + 1 short answer (4M)
+ 1 long answer (7M) from this chapter alone. And the next chapter
(Applications of Derivatives) is *built on top of it*, so learning this well
pays you twice.

If you are weak at maths and can only truly master ONE chapter in IB —
**make it this one.**

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                        D I F F E R E N T I A T I O N
                                     |
   +-------------+-------------+-----+-----+-------------+-------------+
   |             |             |           |             |             |
 WHAT IT      FIRST         STANDARD     THE FOUR     SPECIAL       HIGHER
   IS       PRINCIPLES     DERIVATIVES    RULES        FORMS        ORDERS
   |             |             |           |             |             |
 Limit of    "ab-initio"    constant -> 0  SUM        Implicit      d2y/dx2
 (f(x+h)                       |           u + v      F(x,y) = 0       |
  - f(x))/h  f'(x) = lim     x^n ->        u' + v'    diff both      d3y/dx3
   |         h->0            n x^(n-1)       |        sides, keep      |
 Slope of    f(x+h)-f(x)      |           DIFFERENCE  dy/dx in it   Prove a
 the         -----------    e^x -> e^x    u - v         |           relation
 TANGENT          h           |           u' - v'     Parametric    involving
   |               |         a^x ->         |         x = f(t)      y, y1, y2
 dy/dx =      Must show      a^x log a    PRODUCT     y = g(t)         |
 rate of      EVERY step       |          (uv)' =       |          THE 7-MARK
 change       to get the     log x ->     u'v + uv'   dy/dx =      QUESTION
   |          marks          1/x            |         (dy/dt)
 f'(a) =        |              |          QUOTIENT    -------
 value at    Standard       6 trig          |         (dx/dt)
 one point   ones asked:      |          (u/v)' =       |
             x^n, sin x,    6 inverse    (u'v-uv')   Logarithmic
             cos x, tan x,  trig         --------    y = [f]^[g]
             e^x, log x,      |             v^2      take log
             sqrt(x)        6 hyperbolic     |       both sides
                              |            CHAIN        |
                            6 inverse      dy/dx =    One function
                            hyperbolic     dy/du      w.r.t another
                                           x du/dx    (du/dx)/(dv/dx)
                                              |
                                          THE MOST                Substitution
                                          USED RULE               x = tan t
                                          IN ALL OF               x = sin t
                                          CALCULUS                x = cos t
```

---

## THE 60-SECOND VERSION

Differentiation answers ONE question:

> **"If x changes a tiny bit, how fast does y change?"**

That number is called **dy/dx**. Geometrically it is the **slope of the tangent**
to the curve y = f(x) at that point.

Everything else in the chapter is one of five jobs:

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Find dy/dx from the LIMIT definition | write the limit, expand, cancel h | Section A / B (first principles) |
| Look up a standard derivative | memorise the table | Section A, 2 marks |
| Break a big function into pieces | product / quotient / chain rule | Section A and B |
| Handle a "strange" form | implicit, parametric, log-diff, substitution | **Section B and C** |
| Differentiate twice and prove a relation | find y1, then y2, then substitute | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IB)

**The paper:** total **75 marks**.

```
  +--------------------------------------------------------------+
  |  SECTION A   10 questions x 2 marks   ANSWER ALL      =  20   |
  |  SECTION B    7 questions x 4 marks   ANSWER ANY 5    =  20   |
  |  SECTION C    7 questions x 7 marks   ANSWER ANY 5    =  35   |
  +--------------------------------------------------------------+
  |                                             TOTAL     =  75   |
  +--------------------------------------------------------------+
```

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Find dy/dx of a given function (chain / product / quotient) | A | 2 |
| Derivative of an inverse trig or hyperbolic function | A | 2 |
| Find f'(x) from FIRST PRINCIPLES | A or B | 2 or 4 |
| Implicit differentiation | B | 4 |
| Parametric differentiation | B | 4 |
| Substitution in an inverse trig expression | B | 4 |
| **First principles (full ab-initio proof)** | **C** | **7** |
| **Logarithmic differentiation, y = [f(x)]^g(x)** | **C** | **7** |
| **Prove a relation in y, dy/dx, d2y/dx2** | **C** | **7** |
| Differentiate one function w.r.t. another | B | 4 |

**Total realistically available from this one chapter: 13 to 17 marks out of 75.**
Add Chapter 10 (Applications of Derivatives), which uses the same skill, and the
pair is worth roughly 25-30 marks.

---

## WHICH RULE DO I USE?  (the decision tree — read it top to bottom)

```
                    LOOK AT THE FUNCTION
                            |
        Is y given straight as  y = something in x ?
                            |
          +-----------------+------------------+
          | YES                                | NO
          |                                    |
   Is there a POWER with x                Is it  F(x, y) = 0
   in the EXPONENT, or a long             (y mixed up with x) ?
   product / quotient / root ?                     |
          |                            +-----------+-----------+
    +-----+-----+                      | YES                   | NO
    | YES       | NO                   |                       |
    |           |                  IMPLICIT              Are x and y both
 LOGARITHMIC    |                  Differentiate         given in terms of
 DIFFERENTIATION|                  both sides, then      a third letter t ?
 take log both  |                  collect dy/dx               |
 sides first    |                                        +-----+-----+
                |                                        | YES       | NO
    Is it one function                                   |           |
    INSIDE another ?                                 PARAMETRIC   Is it
          |                                          dy/dx =     "differentiate
    +-----+-----+                                    (dy/dt)     u w.r.t. v" ?
    | YES       | NO                                 -------          |
    |           |                                    (dx/dt)      dy/dx =
  CHAIN RULE    |                                                 (du/dx)
  dy/dx =   Is it two functions                                   -------
  dy/du     MULTIPLIED or DIVIDED ?                               (dv/dx)
  x du/dx        |
           +-----+------+
           |            |
      MULTIPLIED     DIVIDED
      PRODUCT        QUOTIENT
      u'v + uv'      (u'v - uv')/v^2
                          |
                     Neither ?
                          |
                  It is a SUM / DIFFERENCE
                  or a STANDARD FORM.
                  Differentiate term by term.
```

> **Special warning sign:** if you see arcsin, arctan, arccos of an ugly
> expression like 2x/(1 - x^2) or sqrt((1-x)/(1+x)) — do **NOT** differentiate
> directly. **SUBSTITUTE** x = tan theta or x = cos theta first. It turns a
> 10-minute mess into a 3-line answer.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   What a derivative MEANS
           limit definition + slope of tangent
              |
  STEP 2   FIRST PRINCIPLES for x^n, sin x, cos x, tan x,
           e^x, log x, sqrt(x)          <-- guaranteed board question
              |
  STEP 3   THE STANDARD DERIVATIVE TABLE
           memorise it cold. Nothing works until you do.
              |
     +--------+--------+
     |                 |
  STEP 4          STEP 5
  Sum, difference,  CHAIN RULE
  constant multiple (function of a function)
     |                 |
  STEP 6          STEP 7
  PRODUCT rule     QUOTIENT rule
     |                 |
     +--------+--------+
              |
  STEP 8   MIXED problems (chain inside product inside quotient)
              |
     +--------+--------+---------------+
     |                 |               |
  STEP 9          STEP 10          STEP 11
  IMPLICIT        PARAMETRIC       LOGARITHMIC
  F(x,y) = 0      x=f(t), y=g(t)   y = [f(x)]^g(x)
     |                 |               |
     +--------+--------+---------------+
              |
  STEP 12  SUBSTITUTION tricks for inverse trig
              |
  STEP 13  Differentiate one function w.r.t. another
              |
  STEP 14  SECOND DERIVATIVE  d2y/dx2
              |
  STEP 15  PROVE A RELATION in y, dy/dx, d2y/dx2   <-- the 7-mark question
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — the table.**
Write the standard derivative table out by hand three times. All 30 entries:
constant, x^n, e^x, a^x, log x, 6 trig, 6 inverse trig, 6 hyperbolic,
6 inverse hyperbolic. Do NOT move on until you can write it from memory in
under 5 minutes. This single sheet is worth more marks than anything else.

**Day 1 afternoon — the three rules.**
Product, Quotient, Chain. Do 10 small problems of each. Say the words out loud
while writing: *"first times derivative of second, plus second times
derivative of first."*

**Day 1 evening — first principles.**
Learn the ab-initio proof for exactly four functions: **x^n, sin x, tan x,
log x**. The method is identical every time, only the algebra in the middle
changes. This is a near-certain 7-mark or 4-mark question.

**Day 2 morning — the special forms.**
Implicit (2 problems), parametric (2 problems), logarithmic (2 problems).
Six problems total. That is enough — the shapes repeat exactly.

**Day 2 afternoon — second derivatives.**
Learn the fixed recipe: find y1, differentiate again to get y2, then substitute
into the relation you were asked to prove. Do 3 problems.

**Day 2 evening — revision.**
Rewrite the formula sheet from memory. Redo the 2 hardest problems you got
wrong. Sleep.

Done properly, that is **13 to 17 marks out of 75 in Maths IB**, plus most of
Chapter 10 becomes easy for free.
