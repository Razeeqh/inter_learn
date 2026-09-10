# Theory of Equations — Mind Map

**Maths IIA · Chapter 4 · One of the safest 7-mark chapters in the whole paper**
Almost every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

Why this chapter matters: the 7-mark question here is a **recipe question**. You are told
a secret about the roots ("they are in AP", "two of them multiply to 6", "one root is
2 + sqrt(3)"), and there is a fixed set of steps that turns that secret into the answer.
No proof, no imagination. Learn six recipes, collect seven marks.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                     T H E O R Y   O F   E Q U A T I O N S
                                      |
   +-----------+-----------+----------+----------+-----------+-----------+
   |           |           |          |          |           |           |
 DEGREE &   ROOTS vs   USING A     NATURE     TRANSFORM   RECIPROCAL  DESCARTES
 ROOTS      COEFFTS    RELATION    OF ROOTS   EQUATIONS   EQUATIONS   RULE OF
   |           |       BETWEEN        |           |           |        SIGNS
   |           |        ROOTS         |           |           |           |
 Fundamental  s1 = -a1/a0    |     Imaginary   k times   Class ONE   sign changes
 Theorem of   s2 = +a2/a0    |     roots come  k more    a(i)=a(n-i)  in f(x)
 Algebra      s3 = -a3/a0    |     in PAIRS    k less        |           |
   |          s4 = +a4/a0    |     a +/- ib    reciprocal Class TWO   sign changes
 degree n     ...            |         |       negative  a(i)=-a(n-i) in f(-x)
 -> n roots   sr = (-1)^r    |     Irrational  squares       |
   |            x ar/a0      |     surd roots      |      odd deg ->
 repeated                    |     come in      remove      root -1 (class 1)
 roots count                 |     PAIRS        2nd term    root +1 (class 2)
 separately                  |     a +/- sqrt b    |           |
                             |                  SYNTHETIC  even deg ->
                             |                  DIVISION   divide by x^(n/2)
                             |                  (Horner)   put y = x + 1/x
        +--------------------+---------------------+
        |          |          |         |          |
      ROOTS      ROOTS      ROOTS    TWO ROOTS   RATIO
      IN AP      IN GP      IN HP     EQUAL      p : q
        |          |          |         |          |
    a-d, a, a+d  a/r,a,ar  take 1/x  a, a, b    pk, qk, c
                            first
        |          |          |         |          |
    +---+----------+---------+---------+----------+---+
    |                                                 |
  SUM OF TWO ROOTS = 0                     ONE ROOT = RECIPROCAL
  (take a, -a, c)                          OF ANOTHER (take a, 1/a, c)
```

---

## THE FAMILY OF "GIVEN A RELATION" TRICKS (learn this tree cold)

```
                    THE QUESTION SAYS ...                YOU IMMEDIATELY WRITE
                    ----------------------               ---------------------

    "the roots are in ARITHMETIC PROGRESSION"    ->      a - d ,  a ,  a + d
    "the roots are in GEOMETRIC PROGRESSION"     ->      a/r  ,  a  ,  a r
    "the roots are in HARMONIC PROGRESSION"      ->      put x = 1/y first,
                                                        THEN use a-d, a, a+d
    "two of the roots are equal"                 ->      a ,  a ,  b
    "the sum of two roots is zero"               ->      a , -a ,  c
    "one root is double another"                 ->      a , 2a ,  b
    "the roots are in the ratio p : q"           ->      p k , q k ,  c
    "one root is the reciprocal of another"      ->      a , 1/a ,  c
    "the product of two roots is 6"              ->      a , b , c , d with ab = 6
    "one root is 2 + sqrt(3)"                    ->      2 - sqrt(3) is also a root
    "one root is 3 + 2i"                         ->      3 - 2i is also a root
```

Then you write down s1, s2, s3 (and s4) and solve. That is the whole chapter.

---

## THE 60-SECOND VERSION

An equation of degree n has exactly n roots. You will never be asked to find them
from nothing — you are always given a hint.

The bridge between the hint and the answer is ONE box:

```
  +--------------------------------------------------------------+
  |                                                              |
  |   For   a x^3 + b x^2 + c x + d = 0   with roots  A, B, C :  |
  |                                                              |
  |        s1 = A + B + C          = -b/a                        |
  |        s2 = AB + BC + CA       = +c/a                        |
  |        s3 = ABC                = -d/a                        |
  |                                                              |
  |   SIGNS ALTERNATE:   -  +  -  +  -  ...   starting with MINUS |
  |                                                              |
  +--------------------------------------------------------------+
```

Everything else — AP, GP, HP, transformations, reciprocal equations — is just a
different way of feeding numbers into that box.

---

## WHERE THE MARKS ARE (AP Inter, Maths IIA, 75 marks)

| Topic | Section | Marks |
|-------|---------|-------|
| Form an equation with given roots | A | 2 |
| Find s1 / s2 / s3, or sum of squares of roots | A | 2 |
| Equation whose roots are k times / negatives / reciprocals | A | 2 |
| Find the missing root when others are given | A | 2 |
| Transform: diminish roots by k (synthetic division) | B | 4 |
| Remove the second term | B | 4 |
| Equation whose roots are the squares of the roots | B | 4 |
| Solve a cubic given one imaginary or surd root | B | 4 |
| **Solve a cubic / quartic given a relation between roots (AP, GP, HP, product)** | **C** | **7** |
| **Solve a reciprocal equation** | **C** | **7** |

**Total realistically available from this one chapter: about 13-15 marks out of 75.**
That is more than half of a pass mark (pass = 26) from a single chapter.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Degree, roots, Fundamental Theorem of Algebra
              |
  STEP 2   s1, s2, s3, s4  (relation between roots and coefficients)
              |            <-- if you stop here you still get 4-6 marks
     +--------+------------------+---------------------+
     |                           |                     |
  STEP 3                      STEP 6                STEP 9
  Symmetric functions         Conjugate pairs       Transformations
  (sum of squares,            (imaginary and        (k times, k more,
   sum of reciprocals)         surd roots)           reciprocals, negatives)
     |                           |                     |
  STEP 4                      STEP 7                STEP 10
  ROOTS IN AP / GP            Solve when ONE        Synthetic division
     |                        root is given         (Horner's method)
  STEP 5                         |                     |
  ROOTS IN HP,                STEP 8                STEP 11
  two roots equal,            Solve when a          Remove the second term
  sum zero, ratio p:q         product is given         |
     |                           |                  STEP 12
     +-----------+---------------+                  RECIPROCAL EQUATIONS
                 |                                     |
           THE 7-MARK QUESTION  <----------------------+
                 |
           STEP 13  Descartes' rule of signs  (bonus / EAPCET only)
```

---

## THE KEY BOX — copy this onto the back of your hand

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |  CUBIC       a x^3 + b x^2 + c x + d = 0        roots  A, B, C       |
  |                                                                      |
  |      s1 = A+B+C            = -b/a                                    |
  |      s2 = AB+BC+CA         =  c/a                                    |
  |      s3 = ABC              = -d/a                                    |
  |                                                                      |
  |----------------------------------------------------------------------|
  |                                                                      |
  |  QUARTIC   a x^4 + b x^3 + c x^2 + d x + e = 0   roots  A, B, C, D   |
  |                                                                      |
  |      s1 = A+B+C+D                  = -b/a                            |
  |      s2 = AB+AC+AD+BC+BD+CD        =  c/a                            |
  |      s3 = ABC+ABD+ACD+BCD          = -d/a                            |
  |      s4 = ABCD                     =  e/a                            |
  |                                                                      |
  +----------------------------------------------------------------------+

  THREE INSTANT SHORTCUTS (worth memorising for MCQs):

      roots in AP   ->   middle root  =  -b / (3a)
      roots in GP   ->   middle root  =  cube root of ( -d/a )
      roots in HP   ->   middle root  =  -3d / c
```

---

## IF YOU ONLY HAVE 3 DAYS

**Day 1 morning** — s1, s2, s3, s4 with the alternating signs. Do 15 two-mark
questions: "find the sum of the roots", "find the product", "form the equation
with roots 2, 3, -4". These are free marks and take 30 seconds each.

**Day 1 evening** — Sum of squares of roots (s1^2 - 2 s2) and sum of reciprocals
(s2 / s3). Then the four transformations: k times, k more, k less, reciprocals.
They are all "replace x by something".

**Day 2 morning** — Roots in **AP** (a-d, a, a+d) and roots in **GP** (a/r, a, ar).
Do THREE problems of each. Substitute your roots back into the original equation
every single time — that is how you know you are right before the examiner does.

**Day 2 evening** — Roots in **HP** (flip to 1/y first, then AP) and "product of two
roots is given". These two plus AP and GP cover the 7-mark question most years.

**Day 3 morning** — Synthetic division: diminish the roots by k, and remove the
second term. Mechanical, fast, 4 marks.

**Day 3 evening** — Reciprocal equations. Spot the palindrome coefficients, divide
by x^2, put y = x + 1/x. This is the second 7-mark question.

If you do only Day 2, you already have a realistic shot at 7 of the 75 marks.
