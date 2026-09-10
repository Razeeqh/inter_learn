# Definite Integrals — Mind Map

**Maths IIB · Chapter 7 · THE CHAPTER THAT PAYS THE MOST PER HOUR STUDIED**

Chapter 6 (Integration) taught you how to find the antiderivative.
Chapter 7 takes that same work and puts **two numbers on the integral sign**.
That is almost the whole difference.

But those two numbers unlock three extra weapons that Chapter 6 does not have:

```
   1.  PROPERTIES   -  kill a monstrous integral in four lines
   2.  WALLIS       -  write down INT 0 to pi/2 of sin^7 x dx instantly
   3.  AREAS        -  a guaranteed 7-mark question, every single year
```

Chapter 6 + Chapter 7 together are about **one third of the Maths IIB paper**.
If you are short on time, this is the chapter to attack.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                     D E F I N I T E   I N T E G R A L S
                        INT from a to b of f(x) dx
                                    |
      +-------------+---------------+---------------+--------------+
      |             |               |               |              |
   WHAT IT IS    HOW TO           PROPERTIES     WALLIS /       AREAS
                 EVALUATE                        REDUCTION
      |             |               |               |              |
  LIMIT OF A     FUNDAMENTAL      P1  swap        INT 0 to pi/2   under a
  SUM            THEOREM          limits, sign    sin^n x dx      curve
      |             |             flips              |               |
  lim h[f(a)     Find F(x)          |             = (n-1)/n x     INT a to b
  + f(a+h)       with c = 0       P2  split at     (n-3)/(n-2)      y dx
  + ...        Answer = F(b)-F(a)  a middle        x ... x           |
  + f(a+(n-1)h)]    |              point c         (pi/2 if n     between a
      |          NO + c HERE!        |             is EVEN,       curve and
   h = (b-a)/n      |              P3  f(x) ->     1 if n         the y-axis
      |          SUBSTITUTION      f(a - x)        is ODD)        INT c to d
   sum r = n(n+1)/2   |            on 0 to a         |              x dy
   sum r^2 =      CHANGE THE         |            same answer        |
   n(n+1)(2n+1)/6 LIMITS TOO!     P4  f(x) ->     for cos^n x    BETWEEN TWO
   sum r^3 =          |           f(a + b - x)       |            CURVES
   [n(n+1)/2]^2   BY PARTS          |             sin^m cos^n    INT (upper
      |          [u INT v] from   P5  0 to 2a        |            - lower) dx
  GEOMETRIC      a to b -         doubles or      REDUCTION          |
  MEANING        INT (u' INT v)   dies            FORMULAE       circle
      |             |               |             sin^n, cos^n   pi a^2
   THE AREA      DEFINITE          P6  -a to a    tan^n, sec^n      |
   under the     INTEGRAL AS       EVEN -> 2x        |            ellipse
   curve         A LIMIT OF        ODD  -> 0      cot^n, cosec^n  pi a b
   between       A SUM                |                             |
   x = a and     (competitive)     P7  PERIODIC                   parabola
   x = b         lim (1/n) sum     INT 0 to nT                    8a^2/3
                 f(r/n)            = n INT 0 to T                    |
                 = INT 0 to 1                                     part BELOW
                                                                  the axis
                                                                  -> take
                                                                  MODULUS
```

---

## THE 60-SECOND VERSION

An indefinite integral gives you a **function**.
A definite integral gives you a **number**.

```
   INT x^2 dx  =  x^3/3 + c              <-- a function, with a + c

                        2
   INT from 0 to 2      | x^3 |      8         8
   of x^2 dx      =     | --- |   =  --- - 0 = ---     <-- just a number
                        |  3  |0     3         3
```

The recipe is three lines long:

```
   +------------------------------------------------------------------+
   |   STEP 1   Integrate f(x). Call the answer F(x). IGNORE + c.     |
   |   STEP 2   Put x = b (the top number).   Get F(b).               |
   |   STEP 3   Put x = a (the bottom number). Get F(a).              |
   |                                                                  |
   |            ANSWER  =  F(b)  -  F(a)                              |
   |                                                                  |
   |   TOP MINUS BOTTOM. Always. Never the other way round.           |
   +------------------------------------------------------------------+
```

That is called the **Fundamental Theorem of Integral Calculus**, and it is
the single most useful sentence in all of calculus.

And what does that number MEAN? It is the **area** trapped between the curve,
the x-axis, and the two vertical lines x = a and x = b.

```
        y
        ^
        |          .-'''-.
        |       .-'       '-.        y = f(x)
        |     .'  ///////// '-.
        |    /  /////////////  \
        |   |  ///// AREA /////  |
        |   | ///////////////// |
        +---+---------------------+--------------> x
           x=a                   x=b

        AREA  =  INT from a to b of f(x) dx
```

---

## WHERE THE MARKS ARE (AP Inter, Maths IIB — total 75 marks)

**The paper:**

```
  +------------+-------------------------+---------------+--------------+
  | SECTION    | QUESTIONS               | MARKS EACH    | TOTAL        |
  +------------+-------------------------+---------------+--------------+
  | Section A  | 10 questions, ANSWER ALL|      2        |     20       |
  | Section B  | 7 questions, ANY 5      |      4        |     20       |
  | Section C  | 7 questions, ANY 5      |      7        |     35       |
  +------------+-------------------------+---------------+--------------+
  |                                            GRAND TOTAL     75       |
  +---------------------------------------------------------------------+
```

**What Definite Integrals gives you inside that paper:**

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Straight evaluation, F(b) - F(a) | A | 2 |
| Definite integral by substitution (limits changed) | A | 2 |
| Even / odd property, INT from -a to a | A | 2 |
| Wallis: INT 0 to pi/2 of sin^n x or cos^n x dx | A or B | 2 or 4 |
| Definite integration by parts | B | 4 |
| Area under a simple curve between two ordinates | B | 4 |
| Limit of a sum, from first principles | B | 4 |
| **Properties P3 / P4 on a hard integral** | **C** | **7** |
| **Reduction formula for INT sin^n x dx, and Wallis proof** | **C** | **7** |
| **AREA bounded by two curves / circle / ellipse / parabola** | **C** | **7** |

```
  Realistic harvest from this chapter alone:  12 to 18 marks out of 75.
  Chapter 6 + Chapter 7 together:             about 25 marks = ONE THIRD.
```

---

## WHICH TOOL DO I USE?  (the decision tree)

```
             I am given   INT from a to b of f(x) dx
                              |
                              v
   Q1. Does the question say "as the LIMIT OF A SUM" or
       "from FIRST PRINCIPLES"?
                              |
              +---------------+---------------+
              | YES                           | NO
              v                               v
     Use  h = (b-a)/n  and              Q2. Are the limits
     lim h[ f(a) + f(a+h) + ...  ]          0 to pi/2  and the
     with the sum formulas.                 function sin^n / cos^n /
     (You are NOT allowed to                sin^m cos^n ?
      use F(b) - F(a) here.)                      |
                              +-----------------+-----------------+
                              | YES                               | NO
                              v                                   v
                    WALLIS FORMULA.                Q3. Are the limits
                    Write the answer in            0 to a , 0 to 2a ,
                    one line.                      -a to a , or a to b
                                                   with an ugly f ?
                                                        |
                              +-------------------------+-------------+
                              | YES                                   | NO
                              v                                       v
                    USE A PROPERTY:                        Q4. Is the word
                      -a to a   -> even / odd                  "AREA" in the
                      0 to 2a   -> f(2a - x) test              question?
                      0 to a    -> f(a - x)                        |
                      a to b    -> f(a + b - x)     +-------------+-------+
                      periodic  -> f(x + T) = f(x)  | YES                 | NO
                      Then ADD the two copies.      v                     v
                                              SKETCH FIRST.        JUST INTEGRATE.
                                              Then INT y dx,       Substitution
                                              or INT x dy,         (CHANGE THE
                                              or INT (upper        LIMITS!) or
                                              - lower) dx.         by parts.
```

### The same tree as a one-line lookup table

| If you see ... | Do this |
|----------------|---------|
| "limit of a sum" / "first principles" | h = (b-a)/n, sum formulas |
| plain polynomial / e^x / sin x with limits | F(b) - F(a) straight away |
| something inside a bracket, root, log or power | substitute AND change the limits |
| x times sin x, x e^x, log x, Tan^-1 x with limits | by parts, `[u INT v] - INT(u' INT v)` |
| limits -a to a | test f(-x): even -> 2 INT 0 to a, odd -> 0 |
| limits 0 to 2a | test f(2a - x): same -> double, opposite -> 0 |
| limits 0 to a, and f looks symmetric | replace x by a - x, add |
| limits a to b, and f(x) + f(a+b-x) simplifies | replace x by a + b - x, add |
| 0 to pi/2, sin^n or cos^n or sin^m cos^n | WALLIS |
| sin^n or cos^n or tan^n with a general n | REDUCTION FORMULA |
| "area bounded by", "area enclosed" | sketch, then integrate |
| curve dips below the x-axis | split at the root, take modulus of each piece |

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 0   You MUST already be able to do Chapter 6 integrals.
           If you cannot do INT x sin x dx, go back. This chapter
           is Chapter 6 with two numbers added.
              |
  STEP 1   THE FUNDAMENTAL THEOREM.  Answer = F(b) - F(a).
           Do 15 one-line evaluations. Section A secured.
              |
  STEP 2   GEOMETRIC MEANING: the definite integral IS an area.
              |
  STEP 3   SUBSTITUTION  +  THE GOLDEN RULE:
           when x changes to t, the LIMITS change too.
              |
  STEP 4   DEFINITE INTEGRATION BY PARTS
              |
  STEP 5   THE PROPERTIES, in this order:
           P1 swap  ->  P2 split  ->  P6 even/odd  ->
           P3 (0 to a)  ->  P4 (a to b)  ->  P5 (0 to 2a)  ->  P7 periodic
              |
  STEP 6   REDUCTION FORMULAE for sin^n x and cos^n x     <-- 7 MARKS
              |
  STEP 7   WALLIS for INT 0 to pi/2  (sin^n, cos^n, sin^m cos^n)
              |
  STEP 8   REDUCTION for tan^n x and sec^n x
              |
  STEP 9   AREA under one curve between two ordinates
              |
  STEP 10  AREA when part of the region is BELOW the x-axis
              |
  STEP 11  AREA between TWO CURVES                        <-- 7 MARKS
              |
  STEP 12  AREA of a circle, an ellipse, a parabola       <-- 7 MARKS
              |
  STEP 13  LIMIT OF A SUM from first principles
              |
        DONE. You now own about 25 marks of the paper
        (this chapter plus Chapter 6).
```

---

## THE FOUR BOXES THAT UNLOCK MOST QUESTIONS

```
   +=================================================================+
   |  BOX 1 — THE FUNDAMENTAL THEOREM                                |
   |                                                                 |
   |     If  F'(x) = f(x)  on [a, b],  then                          |
   |                                                                 |
   |            INT from a to b of f(x) dx  =  F(b) - F(a)           |
   |                                                                 |
   |     No  + c.  A definite integral is a NUMBER.                  |
   +=================================================================+
```

```
   +=================================================================+
   |  BOX 2 — THE PROPERTY THAT WINS 7-MARK QUESTIONS                |
   |                                                                 |
   |     INT from 0 to a of f(x) dx  =  INT from 0 to a of f(a-x) dx |
   |                                                                 |
   |     More generally                                              |
   |                                                                 |
   |     INT a to b of f(x) dx = INT a to b of f(a + b - x) dx       |
   |                                                                 |
   |     USE:  call the integral I, write the second version,        |
   |           ADD the two, and watch the ugly part cancel.          |
   |           You end with  2I = something easy.                    |
   +=================================================================+
```

```
   +=================================================================+
   |  BOX 3 — WALLIS (write the answer without integrating)          |
   |                                                                 |
   |   INT 0 to pi/2 of sin^n x dx = INT 0 to pi/2 of cos^n x dx     |
   |                                                                 |
   |        n-1     n-3     n-5                                      |
   |   =   ----- x ----- x ----- x ... x  K                          |
   |         n      n-2     n-4                                      |
   |                                                                 |
   |   stop at  2/3  if n is ODD  (then K = 1)                       |
   |   stop at  1/2  if n is EVEN (then K = pi/2)                    |
   |                                                                 |
   |   "EVEN n gets the pi/2 tail. ODD n does not."                  |
   +=================================================================+
```

```
   +=================================================================+
   |  BOX 4 — AREA                                                   |
   |                                                                 |
   |   Area between curve, x-axis and x = a, x = b                   |
   |          =  INT from a to b of | y | dx                         |
   |                                                                 |
   |   Area between curve, y-axis and y = c, y = d                   |
   |          =  INT from c to d of | x | dy                         |
   |                                                                 |
   |   Area between TWO curves, x = a to x = b                       |
   |          =  INT from a to b of ( y_upper - y_lower ) dx         |
   |                                                                 |
   |   ALWAYS SKETCH FIRST. The sketch tells you which curve is on   |
   |   top and where the limits come from. It is worth 1 mark by     |
   |   itself.                                                       |
   +=================================================================+
```

---

## THE THREE ANSWERS THE EXAMINER LOVES TO ASK FOR

| Question | Answer | How you get it |
|----------|--------|----------------|
| Area of the circle x^2 + y^2 = a^2 | pi a^2 | 4 x INT 0 to a of sqrt(a^2 - x^2) dx |
| Area of the ellipse x^2/a^2 + y^2/b^2 = 1 | pi a b | 4 x (b/a) INT 0 to a of sqrt(a^2 - x^2) dx |
| Area of y^2 = 4ax cut off by its latus rectum | 8a^2 / 3 | 2 x INT 0 to a of 2 sqrt(a x) dx |

Learn these three. They are three separate 7-mark questions and the working
is nearly identical.

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 — morning (3 hours).**
The Fundamental Theorem. Do 20 straight evaluations: polynomials, e^x, sin,
cos, sec^2, 1/(1+x^2), 1/x. Then 10 by substitution, **writing the new limits
every single time**. Say out loud: "new variable, new limits."
This alone is 4 marks of Section A, guaranteed.

**Day 1 — afternoon (2 hours).**
Even/odd (P6) and the 0-to-a property (P3). Only two ideas:
- If the limits are -a to a, first check whether f(-x) = f(x) or -f(x).
- If the limits are 0 to a, write I twice — once as f(x), once as f(a - x) — and add.
Do these five and nothing else:
`INT 0 to pi/2 of sinx/(sinx + cosx) dx`, `INT 0 to pi/2 of dx/(1 + tan x)`,
`INT -1 to 1 of x^3 cos x dx`, `INT 0 to pi of x sinx/(1 + cos^2 x) dx`,
`INT 0 to 1 of x(1 - x)^n dx`.

**Day 1 — evening (1 hour).**
Memorise WALLIS. Write out sin^2 to sin^7 answers on one card:

```
   n :   2       3      4        5      6        7
        pi/4    2/3   3pi/16   8/15  5pi/32    16/35
```

Check each one against the formula until it is automatic.

**Day 2 — morning (3 hours).**
AREAS. Do exactly six: (1) area under y = x^2 from 0 to 3;
(2) area under y = sin x from 0 to pi; (3) area between y = x^2 and y = 2x;
(4) area of the circle x^2 + y^2 = 16; (5) area of the ellipse x^2/9 + y^2/4 = 1;
(6) area of y^2 = 4x cut by x = 4. **Sketch every single one first.**

**Day 2 — afternoon (2 hours).**
Reduction formula proof for INT sin^n x dx. Learn to derive it — the examiner
asks you to PROVE it, not just use it. Then read 05-question-patterns.md,
TRIGGER lines only.

**Day 2 — evening (1 hour).**
Limit of a sum. Learn the one formula and do `INT 0 to 2 of x^2 dx` from first
principles twice. Then stop and sleep.

```
  +------------------------------------------------------------------+
  |  THE ONE HABIT THAT SAVES THIS CHAPTER:                          |
  |                                                                  |
  |  Before you touch the algebra, LOOK AT THE LIMITS.               |
  |                                                                  |
  |     -a to a   ->  even or odd?                                   |
  |     0 to 2a   ->  what is f(2a - x)?                             |
  |     0 to a    ->  what is f(a - x)?                              |
  |     0 to pi/2 with sin^n or cos^n  ->  Wallis, answer in 1 line  |
  |                                                                  |
  |  Students lose 7 marks every year by grinding through an         |
  |  integral that a property would have killed in three lines.      |
  +------------------------------------------------------------------+
```
