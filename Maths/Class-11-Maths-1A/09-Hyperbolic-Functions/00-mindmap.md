# Hyperbolic Functions — Mind Map

**Maths 1A · Chapter 9 · The cheapest 2 marks in the whole paper**
Almost every year: 1 very short answer (2M). Fairly often: 1 short answer (4M).
The chapter is tiny, the questions repeat almost word for word, and the whole
thing sits on **six definitions and one identity**. If you are weak at maths,
**this is the first chapter you should finish.**

> **NOTATION WARNING — read this first.**
> `sinh` is read "**shine**" (or "sinch"), `cosh` is read "**cosh**",
> `tanh` is read "**than**" (or "tanch").
> The `h` stands for **hyperbolic**. These are **not** the ordinary trigonometric
> functions. `sinh x` has nothing to do with a triangle and nothing to do with
> degrees — `x` is just a plain real number.
> In these notes `log` always means **natural log**, `log_e` = `ln`. BIEAP writes
> it as `log`, so we will too.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                 H Y P E R B O L I C   F U N C T I O N S
                                    |
   +----------+----------+----------+----------+----------+----------+
   |          |          |          |          |          |          |
 WHERE      THE SIX    DOMAIN     GRAPHS   THE THREE   ADDITION   INVERSE
 THEY       DEFINI-    AND                 IDENTITIES  & MULTIPLE  HYPER-
 COME       TIONS      RANGE                            ANGLE      BOLIC
 FROM         |          |          |          |          |          |
   |        sinh x    sinh: R->R  sinh:     cosh^2 x   sinh(x+y)  sinh^-1 x
 e^x and    = (e^x     onto       odd,      - sinh^2 x    |           |
 e^-x        - e^-x)/2            through   = 1        cosh(x+y)  log form
   |          |        cosh: R->  origin       |          |          |
 EVEN part  cosh x     [1, inf)   rising    1 - tanh^2 tanh(x+y)  log(x +
 = cosh     = (e^x       |          |       = sech^2      |       sqrt(x^2+1))
   |         + e^-x)/2 tanh: R->  cosh:        |       sinh 2x       |
 ODD part     |        (-1,1)     U-shape,  coth^2 x   cosh 2x    arccosh
 = sinh     tanh x       |        min 1     - 1 =      (4 FORMS!)    |
   |        = sinh/cosh  |        at x=0    cosech^2   tanh 2x    arctanh
 sinh + cosh  |        coth:      NEVER        |          |          |
   = e^x    coth x     |x|>1      below 1   ALL THREE  sinh 3x    log((1+x)
   |        sech x       |          |       COME FROM  cosh 3x     /(1-x))/2
 cosh - sinh cosech x  sech:      tanh:     THE SAME      |          |
   = e^-x     |        (0,1]      S-curve,  ONE LINE   O S B O R N E' S
   |        RECIPRO-     |        squashed     |         R U L E
 WHY THE    CALS OF    cosech:    between   divide by     |
 NAME?      THE FIRST  x=/=0      -1 and 1  cosh^2 or  "swap trig -> hyp,
   |        THREE        |          |       sinh^2    flip the sign of
 (cosh t,      |       DOMAIN &   NEVER        |       every product of
  sinh t)   sech = 1/  RANGE      touches   that is    TWO SINES"
 lies on    cosh       TABLE      +1 or -1  the whole     |
 x^2-y^2=1    |       (LEARN       |        proof     lets you REUSE
   |        coth = 1/  THIS)                          all of Chapter 6
 just like  tanh                                      for free
 (cos t,
  sin t)
 lies on
 x^2+y^2=1
```

---

## THE 60-SECOND VERSION

Take the exponential curve `e^x`. Split it into an **even** half and an **odd** half:

```
  +---------------------------------------------------------------+
  |                                                               |
  |            e^x  -  e^-x                    e^x  +  e^-x       |
  |   sinh x = -------------      cosh x =  -------------         |
  |                  2                            2               |
  |                                                               |
  |   Add them:       sinh x + cosh x  =  e^x                     |
  |   Subtract them:  cosh x - sinh x  =  e^-x                    |
  |   Multiply those two:  cosh^2 x - sinh^2 x  =  e^x * e^-x = 1 |
  |                                                               |
  +---------------------------------------------------------------+
```

That last line is **the entire chapter's engine**. Everything — the identities,
the double-angle formulas, the log forms of the inverses — falls out of
`cosh^2 x - sinh^2 x = 1`.

And that one line is also the reason for the **name**: the point
`(cosh t, sinh t)` always satisfies `x^2 - y^2 = 1`, which is a **hyperbola** —
exactly the way `(cos t, sin t)` satisfies `x^2 + y^2 = 1`, a **circle**.

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Given `sinh x`, find `cosh 2x` | `cosh 2x = 1 + 2 sinh^2 x`. One line. | **A, 2 marks** |
| Given `cosh x`, find `sinh 2x` | `sinh x = sqrt(cosh^2 x - 1)`, then `2 sinh x cosh x` | **A, 2 marks** |
| Given `sinh x = 3`, show `x = log(3 + sqrt10)` | quote `sinh^-1 x = log(x + sqrt(x^2+1))` | **A, 2 marks** |
| Prove `sinh 3x = 3 sinh x + 4 sinh^3 x` | expand `sinh(2x + x)` | **B, 4 marks** |
| Prove `sinh^-1 x = log(x + sqrt(x^2+1))` | set `y = sinh^-1 x`, solve a quadratic in `e^y` | **B, 4 marks** |
| `cosh x = sec theta` ⇒ `tanh^2(x/2) = tan^2(theta/2)` | half-angle + componendo | B, 4 marks |

---

## WHERE THE MARKS ARE (AP Inter, Maths IA)

| Topic | Section | Marks |
|-------|---------|-------|
| Given one hyperbolic value, find `sinh 2x` / `cosh 2x` / `tanh 2x` | **A** | **2** |
| Given `sinh x = k`, show `x = log(k + sqrt(k^2+1))` | **A** | **2** |
| Prove `(cosh x + sinh x)^n = cosh nx + sinh nx` | A | 2 |
| State domain and range of a hyperbolic function | A | 2 |
| Prove a triple-angle formula (`sinh 3x`, `cosh 3x`) | B | 4 |
| Derive a logarithmic form of an inverse hyperbolic function | B | 4 |
| `x = log(cot(pi/4 + theta))` ⇒ `cosh x = sec 2theta`, `sinh x = -tan 2theta` | B | 4 |
| Prove `cosh^4 x - sinh^4 x = cosh 2x` and friends | B | 4 |

**Realistic total from this one chapter: 2 marks guaranteed, 4 to 6 marks likely.**

> **Honest note — read it, do not skip it.**
> Chapter 9 is **short**. In BIEAP Maths IA the 7-mark Section C slots are taken by
> Functions, Mathematical Induction, Matrices, Addition of Vectors, Product of
> Vectors, Trigonometric Transformations and Properties of Triangles.
> **Chapter 9 has never been a standalone 7-mark question.**
>
> What it *does* do is give you **one nearly free Section A question, most years**,
> and **quite often a Section B question too**. Section A must be answered in full
> (all 10, no choice), so a guaranteed 2 marks there is worth more to a weak
> student than a 7-mark question they cannot start.
>
> **Cost to learn: about two hours. Return: 2 to 6 marks.**
> Nothing else in Maths IA pays that well per hour. The Section C items in this
> pack are *revision-grade* — real exam-standard proofs that drill the 4-mark
> machinery — not predictions of a 7-mark slot.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   The two definitions:  sinh x , cosh x  from  e^x and e^-x
              |
  STEP 2   The other four:  tanh , coth , sech , cosech
              |
  STEP 3   Values at x = 0    (sinh 0 = 0 , cosh 0 = 1 , tanh 0 = 0)
           Odd / even          (cosh is EVEN, the other five are ODD)
              |
  STEP 4   DOMAIN + RANGE TABLE        <-- memorise, it is a 2-mark question
              |
  STEP 5   The three graphs: sinh , cosh , tanh
              |
  STEP 6   cosh^2 x - sinh^2 x = 1     <-- THE KEY LINE, prove it in 2 steps
              |
     +--------+--------+
     |                 |
  STEP 7          STEP 8
  1 - tanh^2 =    coth^2 - 1 =
  sech^2          cosech^2
  (divide by      (divide by
   cosh^2)         sinh^2)
     |                 |
     +--------+--------+
              |
  STEP 9   Why "hyperbolic": (cosh t, sinh t) is on  x^2 - y^2 = 1
              |
  STEP 10  ADDITION formulas   sinh(x+y) , cosh(x+y) , tanh(x+y)
              |
  STEP 11  OSBORNE'S RULE      <-- now you get every remaining formula FREE
              |
  STEP 12  DOUBLE angle   sinh 2x , cosh 2x (4 forms) , tanh 2x
              |
  STEP 13  TRIPLE angle   sinh 3x , cosh 3x
              |
  STEP 14  THE 2-MARK DRILL: "given sinh x = 3, find cosh 2x"
              |
  STEP 15  Inverse hyperbolic functions: domain and range
              |
  STEP 16  LOG FORMS and their derivations (the 4-mark bookwork)
              |
  STEP 17  Mixed proofs (cosh x = sec theta type)
```

---

## THE KEY BOX — these two unlock the whole chapter

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE DEFINITIONS  (nothing works without these)                   |
  |                                                                    |
  |               e^x - e^-x                    e^x + e^-x             |
  |     sinh x = -------------      cosh x =  -------------            |
  |                    2                            2                  |
  |                                                                    |
  |     cosh x + sinh x = e^x           cosh x - sinh x = e^-x         |
  |                                                                    |
  +--------------------------------------------------------------------+


  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE ONE IDENTITY EVERY QUESTION USES                             |
  |                                                                    |
  |            cosh^2 x  -  sinh^2 x  =  1                             |
  |                                                                    |
  |   Read it three ways:                                              |
  |        cosh^2 x = 1 + sinh^2 x       (given sinh, get cosh)        |
  |        sinh^2 x = cosh^2 x - 1       (given cosh, get sinh)        |
  |        cosh x   = sqrt(1 + sinh^2 x)     ALWAYS the + root,        |
  |                                          because cosh x >= 1       |
  |                                                                    |
  |   NOTE THE MINUS. In ordinary trigonometry it is a PLUS            |
  |   (cos^2 + sin^2 = 1). That single sign is the whole difference.   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

## THE FIVE FACTS YOU MUST KNOW COLD

```
  1.  sinh 0 = 0      cosh 0 = 1      tanh 0 = 0
      (sech 0 = 1 ; coth 0 and cosech 0 are UNDEFINED)

  2.  cosh x >= 1  for every real x.   cosh x can NEVER be 0, and never
      negative, and never a fraction less than 1.

  3.  -1 < tanh x < 1  always.  tanh x can never equal 1 or -1.

  4.  cosh is EVEN:   cosh(-x) = cosh x
      sinh is ODD:    sinh(-x) = -sinh x     (and so are tanh, coth,
                                              cosech;  sech is EVEN)

  5.  cosh^2 x - sinh^2 x = 1        <-- if you remember one line, this one
```

---

## THE COMPARISON TABLE THAT SAVES YOU AN HOUR

You already learned all of this in Chapter 6. **Osborne's Rule** hands it to you again.

| Ordinary trigonometry | Hyperbolic version | Sign changed? |
|---|---|---|
| `cos^2 x + sin^2 x = 1` | `cosh^2 x - sinh^2 x = 1` | YES |
| `sec^2 x = 1 + tan^2 x` | `sech^2 x = 1 - tanh^2 x` | YES |
| `sin(x+y) = sin x cos y + cos x sin y` | `sinh(x+y) = sinh x cosh y + cosh x sinh y` | no |
| `cos(x+y) = cos x cos y - sin x sin y` | `cosh(x+y) = cosh x cosh y + sinh x sinh y` | YES |
| `sin 2x = 2 sin x cos x` | `sinh 2x = 2 sinh x cosh x` | no |
| `cos 2x = 1 - 2 sin^2 x` | `cosh 2x = 1 + 2 sinh^2 x` | YES |
| `sin 3x = 3 sin x - 4 sin^3 x` | `sinh 3x = 3 sinh x + 4 sinh^3 x` | YES |
| `cos 3x = 4 cos^3 x - 3 cos x` | `cosh 3x = 4 cosh^3 x - 3 cosh x` | no |

**The pattern:** the sign flips **exactly when the term contains a product of two
sines** (`sin x sin y`, `sin^2 x`, `tan^2 x`, `sin^3 x = sin x · sin^2 x`).

---

## IF YOU ONLY HAVE 2 DAYS

Honestly this chapter needs about **two hours**, not two days. Here is the plan
if you are cramming.

```
  DAY 1  --  90 minutes
  ----------------------------------------------------------------
   0-15 min   Write the 6 definitions from e^x, ten times, from memory.
              Then the domain/range table. Close the book and rewrite it.

  15-35 min   Prove  cosh^2 x - sinh^2 x = 1  on paper, from the definitions.
              Then divide by cosh^2 to get  1 - tanh^2 = sech^2 .
              Then divide by sinh^2 to get  coth^2 - 1 = cosech^2 .
              You must be able to do all three without looking.

  35-60 min   Learn the DOUBLE ANGLE box:
                 sinh 2x = 2 sinh x cosh x
                 cosh 2x = cosh^2 + sinh^2 = 2cosh^2 - 1 = 1 + 2 sinh^2
                 tanh 2x = 2 tanh x / (1 + tanh^2 x)

  60-90 min   DRILL the 2-mark question until it is automatic:
                 "If sinh x = 3, find cosh 2x"            -> 19
                 "If cosh x = 5/2, find cosh 2x, sinh 2x" -> 23/2 , 5 sqrt21 / 2
                 "If tanh x = 1/4, find cosh 2x, sinh 2x" -> 17/15 , 8/15
              Do ten of these. This is the marks you came for.


  DAY 2  --  60 minutes
  ----------------------------------------------------------------
   0-20 min   The three LOG FORMS. Write each one five times:
                 sinh^-1 x = log(x + sqrt(x^2 + 1))
                 cosh^-1 x = log(x + sqrt(x^2 - 1))      x >= 1
                 tanh^-1 x = (1/2) log((1+x)/(1-x))      |x| < 1

  20-40 min   Derive sinh^-1 x = log(x + sqrt(x^2+1)) from scratch.
              (Put y = sinh^-1 x, get a quadratic in e^y, solve it.)
              This is a ready-made 4-mark answer.

  40-60 min   Prove sinh 3x = 3 sinh x + 4 sinh^3 x  and
                    cosh 3x = 4 cosh^3 x - 3 cosh x.
              These are the two most-asked 4-mark items in the chapter.


  IF YOU ONLY HAVE 30 MINUTES BEFORE THE EXAM
  ----------------------------------------------------------------
     1.  sinh x = (e^x - e^-x)/2 ,  cosh x = (e^x + e^-x)/2
     2.  cosh^2 x - sinh^2 x = 1
     3.  cosh 2x = 1 + 2 sinh^2 x = 2 cosh^2 x - 1
     4.  sinh 2x = 2 sinh x cosh x
     5.  sinh^-1 x = log(x + sqrt(x^2 + 1))
  That is enough to attempt the Section A question with confidence.
```

---

## THE ONE-LINE SUMMARY

> `sinh` and `cosh` are the odd and even halves of `e^x`.
> They obey **all** the trigonometric formulas you already know, with the sign
> flipped wherever two sines multiply. `cosh^2 - sinh^2 = 1` does everything else.
