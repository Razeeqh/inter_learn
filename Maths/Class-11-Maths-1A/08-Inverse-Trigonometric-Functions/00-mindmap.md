# Inverse Trigonometric Functions — Mind Map

**Maths 1A · Chapter 8 · The "one formula table" chapter**
Almost every year: 1 short answer (4M) + often 1 very short answer (2M).
It is small, it is closed-book-memorisable, and it repeats. Do not skip it.

> **NOTATION WARNING — read this first.**
> `sin^-1 x` does **NOT** mean `1 / sin x`. It means "the angle whose sine is x".
> `1 / sin x` is `cosec x`. Mixing these two up is the single most common
> zero-mark mistake in this chapter.
> In these notes `sin^-1 x` and `arcsin x` mean exactly the same thing.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
              I N V E R S E   T R I G O N O M E T R I C   F U N C T I O N S
                                        |
   +-----------+-----------+------------+------------+------------+-----------+
   |           |           |            |            |            |           |
  WHY WE     THE          PRINCIPAL    GRAPHS      PROPERTIES   CONVERT     SOLVE /
  RESTRICT   SIX          VALUE                    (the whole   ONE INTO    PROVE
  THE DOMAIN FUNCTIONS                             mark bank)   ANOTHER
   |           |           |            |            |            |           |
 sin is    sin^-1      "answer must   arcsin      1. INVERSE    Right       Equations
 many-one  cos^-1       land inside   S-shape      CANCELLING   triangle    in x
   |       tan^-1       the range"    up            sin(sin^-1x)  |           |
 cut it    cot^-1          |          |            = x         label 2      Identities
 down to   sec^-1      negative      arccos        sin^-1(sin x) sides,       (7M style)
 [-pi/2,   cosec^-1    argument?      falling      = x ONLY if  find 3rd      |
  pi/2]        |       use the        pi -> 0      x in range     |         3-term
   |       DOMAIN +    NEGATIVE          |              |       then read    sums
 now it    RANGE       PROPERTY       arctan      2. NEGATIVE    off any
 is one-   TABLE          |           flat S       ARGUMENT     ratio
 one       (LEARN      outside the    -pi/2 to        |
   |        THIS)      range? push    +pi/2       3. COMPLEMENT
 inverse       |        it in with      |            sin^-1+cos^-1
 exists    domain      pi - x or     asymptotes      = pi/2
           +           x - 2pi       never touched     |
           principal                              4. RECIPROCAL
           value                                    sin^-1(1/x)
           branch                                    = cosec^-1 x
                                                       |
                                                   5. SUM OF TWO
                                                     tan^-1 x + tan^-1 y
                                                     (3 CASES!)
                                                       |
                                                   6. DOUBLE ANGLE
                                                     2 tan^-1 x as
                                                     sin / cos / tan
                                                       |
                                                   7. sin^-1 x + sin^-1 y
                                                      cos^-1 x + cos^-1 y
```

---

## THE 60-SECOND VERSION

`sin 30deg = 1/2` is the forward question.
`sin^-1 (1/2) = 30deg` is the backward question: **"which angle?"**

Problem: infinitely many angles have sine 1/2 (30deg, 150deg, 390deg, ...).
So we **agree in advance** on one narrow band of angles — the **principal value
range** — and the answer must always come out of that band.

Everything else in this chapter is:

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Find a principal value | look up the table, force the answer into the range | A, 2 marks |
| Simplify `sin^-1(sin x)` | is x inside the range? if not, fix it | A, 2 marks |
| Convert `sin^-1` to `tan^-1` | draw a right triangle | inside 4M work |
| Add two `tan^-1` | use the sum formula, **check xy** | **B, 4 marks** |
| Prove a 3-term identity | add two, then the third | B/C |
| Solve for x | reduce to one `tan^-1` on each side, cancel | B, 4 marks |

---

## WHERE THE MARKS ARE (AP Inter, Maths IA)

| Topic | Section | Marks |
|-------|---------|-------|
| Find the principal value of `sin^-1(-1/2)`, `sec^-1(-2)` etc. | A | 2 |
| `sin^-1(sin x)` / `cos^-1(cos x)` with x outside the range | A | 2 |
| Value of `tan[2 tan^-1(1/5) - pi/4]`, `sin[cos^-1 a + cos^-1 b]` | A | 2 |
| **Prove `tan^-1 a + tan^-1 b + tan^-1 c = pi/4`** | **B** | **4** |
| **Prove `sin^-1 a + sin^-1 b = cos^-1 c`** | **B** | **4** |
| Solve `tan^-1(x+1) + tan^-1(x-1) = tan^-1(8/31)` | B | 4 |
| Conditional identity (`sum = pi` type) — rarer, appears as part of a LAQ | C | (part) |

**Realistic total from this one chapter: 4 to 6 marks out of 75.**

> **Honest note.** In BIEAP Maths IA the 7-mark Section C slots are normally taken by
> Functions, Matrices, Vectors, Trigonometric Transformations and Properties of
> Triangles. Chapter 8 is a **Section A + Section B chapter**. The 7-mark items in
> this pack are written as *revision-grade* practice — they are genuine exam-standard
> proofs and they train exactly the skill the 4-mark question tests. Do them, but
> know where the real marks sit.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Why a restricted domain is needed
              |
  STEP 2   THE DOMAIN + PRINCIPAL RANGE TABLE      <-- memorise, no shortcuts
              |
  STEP 3   Principal value of a positive argument
              |
  STEP 4   Principal value of a NEGATIVE argument
           (uses the negative-argument property)
              |
     +--------+--------+
     |                 |
  STEP 5          STEP 6
  sin^-1(sin x)   Graphs of arcsin,
  when x is       arccos, arctan
  outside              |
     |                 |
     +--------+--------+
              |
  STEP 7   Complementary pairs   sin^-1 x + cos^-1 x = pi/2
              |
  STEP 8   Reciprocal relations  sin^-1(1/x) = cosec^-1 x
              |
  STEP 9   Right-triangle conversion  sin^-1(3/5) = tan^-1(3/4)
              |
  STEP 10  tan^-1 x + tan^-1 y      <-- THE 4-MARK ENGINE
           (3 cases on xy)
              |
     +--------+--------+
     |                 |
  STEP 11         STEP 12
  Double angle    sin^-1 x + sin^-1 y
  2 tan^-1 x      cos^-1 x + cos^-1 y
     |                 |
     +--------+--------+
              |
  STEP 13  Prove 3-term identities
              |
  STEP 14  Solve equations in x
              |
  STEP 15  Conditional identities (sum = pi / pi/2)
```

---

## THE KEY BOX — these two unlock most of the chapter

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE PRINCIPAL RANGES  (nothing works without these)              |
  |                                                                    |
  |     sin^-1  ->  [ -pi/2 , pi/2 ]        cosec^-1 -> same, minus 0  |
  |     cos^-1  ->  [   0   ,  pi  ]        sec^-1   -> same, minus pi/2
  |     tan^-1  ->  ( -pi/2 , pi/2 )        cot^-1   -> ( 0 , pi )     |
  |                                                                    |
  |   SQUARE brackets = endpoint included.  ROUND = not included.      |
  |                                                                    |
  +--------------------------------------------------------------------+


  +--------------------------------------------------------------------+
  |                                                                    |
  |   THE SUM FORMULA  (the 4-mark question, every year)               |
  |                                                                    |
  |                                    x + y                           |
  |     tan^-1 x + tan^-1 y = tan^-1 ---------      if  x y < 1        |
  |                                    1 - x y                         |
  |                                                                    |
  |                       + pi more    if x y > 1 and x > 0, y > 0     |
  |                       - pi more    if x y > 1 and x < 0, y < 0     |
  |                                                                    |
  |   NEVER write this formula without first checking x y.             |
  |                                                                    |
  +--------------------------------------------------------------------+
```

---

## THE THREE ANGLES YOU MUST KNOW COLD

```
   x  :    0     1/2    1/sqrt2   sqrt3/2    1        sqrt3    1/sqrt3
   ------------------------------------------------------------------
   sin^-1 x    0    pi/6    pi/4     pi/3     pi/2      -         -
   cos^-1 x  pi/2   pi/3    pi/4     pi/6      0        -         -
   tan^-1 x    0     -      pi/4      -       pi/4     pi/3     pi/6
```

(`tan^-1 1 = pi/4`, `tan^-1 sqrt3 = pi/3`, `tan^-1 (1/sqrt3) = pi/6`.)

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning (1 hour)** — Copy the DOMAIN + PRINCIPAL RANGE table out by hand
five times. Then do 15 "find the principal value" questions, half of them with a
minus sign in front. That alone is a 2-mark answer you can never lose.

**Day 1 evening (1 hour)** — `sin^-1(sin x)` when x is outside the range, plus
`sin^-1 x + cos^-1 x = pi/2` and the reciprocal relations. Another 2-mark answer.

**Day 2 morning (1.5 hours)** — The `tan^-1 x + tan^-1 y` sum formula and its three
cases. Do these five proofs until they are automatic:

```
  tan^-1(1/2) + tan^-1(1/5) + tan^-1(1/8)  = pi/4
  tan^-1(1/3) + tan^-1(1/5) + tan^-1(1/7) + tan^-1(1/8) = pi/4
  tan^-1(1/7) + tan^-1(1/13) = tan^-1(2/9)
  sin^-1(4/5) + sin^-1(5/13) + sin^-1(16/65) = pi/2
  cos^-1(4/5) + cos^-1(12/13) = cos^-1(33/65)
```

**Day 2 evening (1 hour)** — Solving equations: `tan^-1(x+1) + tan^-1(x-1) =
tan^-1(8/31)` and friends. Always substitute your answer back — the fake root is
part of the question.

That is 4 to 6 marks in the board paper and 1 to 2 free questions in EAPCET,
bought with about 4.5 hours of work. Best rate in the whole of Maths IA.
