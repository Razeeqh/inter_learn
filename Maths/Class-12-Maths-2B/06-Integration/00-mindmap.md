# Integration — Mind Map

**Maths IIB · Chapter 6 · THE BIGGEST SCORING CHAPTER IN THE WHOLE OF MATHS IIB**

Integration + Definite Integrals together carry more marks than any other topic
in the paper. Every single year: at least one 7-mark long answer, one or two
4-mark short answers, and two or three 2-mark very short answers — from THIS
chapter alone.

If you learn nothing else in IIB, learn this chapter.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                          I N T E G R A T I O N
                    (the reverse of differentiation)
                                   |
     +--------------+--------------+--------------+--------------+
     |              |              |              |              |
  STANDARD       SUBSTI-       BY PARTS       PARTIAL       STANDARD
  INTEGRALS      TUTION                       FRACTIONS      FORMS
     |              |              |              |              |
  x^n , 1/x     put t = g(x)   ILATE order    break the      1/(x^2+a^2)
  e^x , a^x        |           I L A T E      fraction into  1/(x^2-a^2)
     |          dt = g'(x)dx      |           small ones     1/(a^2-x^2)
  sin, cos         |           u INT v            |              |
  tan, cot     f'(x)/f(x)      - INT(u' INT v) A/(x-a)       1/sqrt(a^2-x^2)
  sec, cosec   = log|f(x)|        |           B/(x-b)       1/sqrt(x^2+a^2)
     |              |          e^x[f + f']       |           1/sqrt(x^2-a^2)
  sec^2,cosec^2 [f(x)]^n f'(x)  = e^x f(x)   A/(x-a)^2          |
     |          = f^(n+1)/(n+1)    |          (Bx+C)/(x^2+1) sqrt(a^2-x^2)
  sec tan          |           reduction          |          sqrt(x^2+a^2)
  cosec cot    f'(x)/sqrt(f)   formulas       cover-up       sqrt(x^2-a^2)
     |          = 2 sqrt(f)                    shortcut
  1/sqrt(1-x^2) = Sin^-1 x
  1/(1+x^2)     = Tan^-1 x
  1/(x sqrt(x^2-1)) = Sec^-1 x
                                   |
     +--------------+--------------+--------------+--------------+
     |              |              |              |              |
  COMPLETING     TRIG           t = tan(x/2)    RULES        ANSWER
  THE SQUARE     PRODUCTS       SUBSTITUTION                  CHECK
     |              |              |              |              |
  1/(ax^2+bx+c) 2sinA cosB     1/(a+b cos x)  INT(f+g)      DIFFERENTIATE
  1/sqrt(...)   = sin(A+B)     1/(a+b sin x)  = INT f       YOUR ANSWER.
  (px+q)/(...)    + sin(A-B)   1/(a sinx      + INT g       If you get the
  (px+q)/sqrt()    |              + b cosx    INT k f       question back,
     |          sin^2 = (1-cos2x)/2  + c)     = k INT f     you are RIGHT.
  make it a       |                 |            |
  perfect      cos^2 = (1+cos2x)/2  put        INT f(ax+b)
  square + k      |              t = tan(x/2)  = (1/a)F(ax+b)
                sin^3, cos^3
```

---

## THE 60-SECOND VERSION

Differentiation takes a function and gives its slope.
**Integration walks backwards** — you are given the slope and must find the
function you started from.

```
          differentiate
   x^3   ------------->   3x^2
         <-------------
           integrate
```

Because the derivative of a constant is 0, walking backwards you can never
know what constant was there. So you ALWAYS write **+ c**.

```
   d/dx (x^3)      = 3x^2
   d/dx (x^3 + 5)  = 3x^2        same answer!
   d/dx (x^3 - 99) = 3x^2        same answer!

   So   INT 3x^2 dx  =  x^3  +  c
                              ^^^
                        THE CONSTANT OF INTEGRATION
                        Forget it and you lose a mark. Every time.
```

The whole chapter is then just five questions asked over and over:

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Recall a standard integral | look it up in your memory | Section A, 2 marks |
| Substitute | let t = something, kill the mess | Section A / B |
| Split a product | integration by parts, ILATE | Section B, 4 marks |
| Split a fraction | partial fractions | Section B / C |
| Force it into a standard form | complete the square, or t = tan(x/2) | **Section C, 7 marks** |

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

**What Integration gives you inside that paper:**

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Standard integral, direct substitution | A | 2 |
| INT f'(x)/f(x) dx type | A | 2 |
| e^x [f(x) + f'(x)] type | A or B | 2 or 4 |
| Integration by parts (one round) | B | 4 |
| Trigonometric product, transformation formulae | B | 4 |
| 1/(ax^2+bx+c) or 1/sqrt(ax^2+bx+c) | B | 4 |
| **(px+q)/sqrt(ax^2+bx+c)** | **C** | **7** |
| **1/(a + b cos x) using t = tan(x/2)** | **C** | **7** |
| **Partial fractions / by parts twice** | **C** | **7** |
| **Reduction formula for INT sin^n x dx** | **C** | **7** |

**Total available from this one chapter: about 13 to 17 marks out of 75.**
Add Definite Integrals (Chapter 7, which is built entirely on this one) and it
becomes about 24 marks. **That is one third of the paper.**

---

## WHICH METHOD DO I USE?  (the decision tree — read it top to bottom)

```
                   I am given  INT f(x) dx
                              |
                              v
   Q1. Is it EXACTLY one of the standard integrals in the table?
                              |
              +---------------+---------------+
              | YES                           | NO
              v                               v
        Write the answer.            Q2. Is it f(ax + b) where
        2-mark question, done.           f is standard?
                                              |
                              +---------------+---------------+
                              | YES                           | NO
                              v                               v
                   Answer = (1/a) F(ax+b)      Q3. Is the top the DERIVATIVE
                   e.g. INT cos(3x+1) dx           of the bottom?
                      = (1/3) sin(3x+1) + c              |
                                              +----------+----------+
                                              | YES                 | NO
                                              v                     v
                                     Answer = log|f(x)|    Q4. Is one part of the
                                                               product the derivative
                                                               of the other part?
                                                                     |
                                                    +----------------+---------------+
                                                    | YES                            | NO
                                                    v                                v
                                          SUBSTITUTION: put t =        Q5. Is it a PRODUCT of two
                                          the inner function.              UNRELATED functions?
                                          e.g. INT x e^(x^2) dx           (x times sin x, x^2 e^x,
                                               put t = x^2                 log x, Tan^-1 x ...)
                                                                                    |
                                                                   +----------------+-------------+
                                                                   | YES                          | NO
                                                                   v                              v
                                                          INTEGRATION BY PARTS       Q6. Is it a FRACTION with
                                                          Choose u by ILATE.             polynomials on top
                                                          Special case:                  and bottom?
                                                          INT e^x[f + f'] = e^x f              |
                                                                            +-----------------+------------+
                                                                            | YES                          | NO
                                                                            v                              v
                                                                Q6a. Is the bottom              Q7. Is it a
                                                                FACTORISABLE?                   TRIGONOMETRIC mess?
                                                                     |                                |
                                                     +---------------+--------+       +--------------+--------------+
                                                     | YES                    | NO    | products of  | 1/(a+b cos x)|
                                                     v                        v       | sin and cos  | 1/(a+b sin x)|
                                              PARTIAL FRACTIONS     COMPLETE THE      v              v
                                              A/(x-a) + B/(x-b)     SQUARE, then    USE THE        t = tan(x/2)
                                                                    match a standard TRANSFORMATION  SUBSTITUTION
                                                                    form             FORMULAE
                                                                                     (2 sinA cosB
                                                                                      = sin(A+B)
                                                                                        + sin(A-B))
```

### The same tree as a one-line lookup table

| If the question looks like ... | Use ... |
|---------------------------------|---------|
| x^n , e^x , sin x , sec^2 x | standard formula |
| f(ax + b) | (1/a) F(ax + b) |
| top = derivative of bottom | INT f'/f = log abs f |
| [something]^n times its derivative | put t = something |
| x times sin x , x^2 e^x , log x , Tan^-1 x | by parts, ILATE |
| e^x times (f + f') | answer is e^x f(x) straight away |
| sin 3x cos 5x , sin^2 x , cos^3 x | transformation formulae first |
| polynomial / factorisable polynomial | partial fractions |
| 1/(ax^2+bx+c) , 1/sqrt(ax^2+bx+c) | complete the square |
| (px+q)/(ax^2+bx+c) , (px+q)/sqrt(...) | split px+q, then complete the square |
| 1/(a + b cos x) , 1/(a + b sin x) | t = tan(x/2) |
| sqrt(a^2 - x^2) , sqrt(x^2 ± a^2) alone | direct standard form |

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Meaning: integration = reverse of differentiation, and  + c
              |
  STEP 2   THE STANDARD TABLE  (learn it like the alphabet)
              |
  STEP 3   Rules: sum, constant multiple, f(ax + b)
              |
              +---------------------------+
              |                           |
  STEP 4   SUBSTITUTION              STEP 5   TRIG PRODUCTS
           t = g(x)                           2 sinA cosB = ...
              |                               sin^2 = (1-cos2x)/2
           INT f'/f = log|f|                       |
           INT f^n f'                              |
              |                                    |
              +---------------------------+--------+
              |
  STEP 6   INTEGRATION BY PARTS  (ILATE)
              |
  STEP 7   INT e^x [f(x) + f'(x)] dx = e^x f(x) + c
              |
  STEP 8   THE NINE STANDARD FORMS
           1/(x^2+a^2)  1/(x^2-a^2)  1/(a^2-x^2)
           1/sqrt(a^2-x^2)  1/sqrt(x^2+a^2)  1/sqrt(x^2-a^2)
           sqrt(a^2-x^2)  sqrt(x^2+a^2)  sqrt(x^2-a^2)
              |
  STEP 9   COMPLETING THE SQUARE
           1/(ax^2+bx+c)  and  1/sqrt(ax^2+bx+c)
              |
  STEP 10  SPLITTING THE NUMERATOR
           (px+q)/(ax^2+bx+c)  and  (px+q)/sqrt(ax^2+bx+c)     <-- 7 MARKS
              |
  STEP 11  PARTIAL FRACTIONS                                   <-- 7 MARKS
              |
  STEP 12  t = tan(x/2) for 1/(a + b cos x) etc.               <-- 7 MARKS
              |
  STEP 13  Reduction formulas for INT sin^n x dx, INT cos^n x dx
              |
        NOW GO TO CHAPTER 7 (Definite Integrals) — it is the same
        work with two numbers written on the integral sign.
```

---

## IF YOU ONLY HAVE 3 DAYS

**Day 1 — morning.** Copy the WHOLE standard table (02-formulae.md, section 1)
into a notebook by hand. Twice. Then close the book and write it from memory.
Do 15 direct one-line integrals. This alone secures your Section A marks.

**Day 1 — evening.** Substitution. Learn only two shapes:
`INT f'(x)/f(x) dx = log|f(x)|` and `INT [f(x)]^n f'(x) dx`.
Do 12 problems. If you can spot "the top is the derivative of the bottom",
you have already earned 4 marks in the paper.

**Day 2 — morning.** Integration by parts. Memorise **ILATE**. Do
`INT x sin x dx`, `INT x e^x dx`, `INT log x dx`, `INT x^2 e^x dx`,
`INT Tan^-1 x dx`. Then learn the one-line miracle:
`INT e^x [f(x) + f'(x)] dx = e^x f(x) + c`.

**Day 2 — evening.** The nine standard forms + completing the square.
Do `INT dx/(x^2+4)`, `INT dx/(x^2-9)`, `INT dx/sqrt(x^2+16)`,
`INT dx/(x^2+4x+13)`, `INT dx/sqrt(2x^2+3x+5)`.

**Day 3 — morning.** The two 7-mark machines:
(px+q)/sqrt(ax^2+bx+c), and t = tan(x/2) for 1/(a + b cos x).
Do 3 of each. Nothing else. These are the ones that repeat.

**Day 3 — evening.** Partial fractions, 4 problems. Then go through
05-question-patterns.md and read only the TRIGGER lines. You are looking to
train your eye, not your hand.

```
  +------------------------------------------------------------------+
  |  THE ONE HABIT THAT SAVES THIS CHAPTER:                          |
  |                                                                  |
  |  After EVERY answer, differentiate it in your head for           |
  |  10 seconds. If you get back the question, you are correct.      |
  |  Integration is the only chapter where you can mark your own     |
  |  paper. Use that.                                                |
  +------------------------------------------------------------------+
```
