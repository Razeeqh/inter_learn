# De Moivre's Theorem — Concepts From Zero

Read this with a pen. Copy every box. Do every worked example yourself on paper
BEFORE you read the solution.

Chapter 1 gave you the polar form. This chapter does two things with it:
**raise to a power** and **take a root**. That is all. Everything below is one of
those two jobs.

---

# TOPIC 1 — RECAP: THE POLAR (MODULUS-AMPLITUDE) FORM

## 1.1 The idea

A complex number `z = x + iy` is a **point** `(x, y)` on the Argand plane. But you
can also describe that same point by saying **how far** it is from the origin and
**which direction** it lies in.

```
                            Im
                             ^
                             |            * P (x, y)
                             |          / |
                             |        /   |
                             |      /     | y
                             |   r/       |
                             |  /         |
                             | /  t       |
                             |/___________|________> Re
                             O      x
```

```
   r  =  OP        = the MODULUS      = |z| = sqrt(x^2 + y^2)
   t  =  angle POx = the AMPLITUDE    (also called argument, arg z)
```

From the right-angled triangle:

```
        x = r cos t             y = r sin t

   so   z = x + iy = r cos t + i r sin t = r ( cos t + i sin t )
```

```
  +------------------------------------------------------------+
  |                                                            |
  |     POLAR / MODULUS-AMPLITUDE FORM                         |
  |                                                            |
  |          z  =  r ( cos t + i sin t )                       |
  |                                                            |
  |          r = sqrt(x^2 + y^2)   ( r >= 0 always )           |
  |                                                            |
  |          cos t = x / r    and    sin t = y / r             |
  |                                                            |
  +------------------------------------------------------------+
```

## 1.2 The PRINCIPAL amplitude and the quadrant rule

Adding a full turn `2 pi` to the angle lands you on the same point, so there are
infinitely many amplitudes. The **principal** one is the one in

```
                       -pi  <  t  <=  pi
```

To find it: first get the **reference angle** `alpha = tan^-1 | y / x |`
(always a positive acute angle), then fix the sign with the quadrant.

```
   +----------+-----------------+---------------------------+
   | QUADRANT | sign of (x, y)  |  PRINCIPAL amplitude t    |
   +----------+-----------------+---------------------------+
   |    Q1    |   (+ , +)       |        alpha              |
   |    Q2    |   (- , +)       |        pi - alpha         |
   |    Q3    |   (- , -)       |        alpha - pi         |
   |    Q4    |   (+ , -)       |       -alpha              |
   +----------+-----------------+---------------------------+
```

> **TRAP:** Never just type `tan^-1(y/x)` into a calculator and write that down.
> A calculator cannot tell `-1 + i` from `1 - i` — both give `tan^-1(-1)`.
> **Always plot the point first**, then apply the quadrant rule.

## 1.3 The shorthand `cis`

Writing `cos t + i sin t` fifty times is a waste of your exam time. Everybody uses

```
                    cis t   means   cos t + i sin t
```

("c-i-s" = **c**os **i** **s**in.) Use it in rough working freely. In the final
answer of a board question, **write it out in full at least once** so the examiner
sees you know what it means.

## 1.4 WORKED EXAMPLE — three conversions

**Express in modulus-amplitude form: (a) `1 + i sqrt3`  (b) `-1 + i`  (c) `-sqrt3 - i`**

```
  (a)  z = 1 + i sqrt3          x = 1 (+) ,  y = sqrt3 (+)   ->  Q1

       r = sqrt(1^2 + (sqrt3)^2) = sqrt(1 + 3) = sqrt4 = 2

       alpha = tan^-1( sqrt3 / 1 ) = tan^-1(sqrt3) = pi/3

       Q1  ->  t = alpha = pi/3

       z = 2 ( cos pi/3 + i sin pi/3 )

       CHECK:  2 cos(pi/3) = 2 x 1/2 = 1        correct
               2 sin(pi/3) = 2 x sqrt3/2 = sqrt3  correct
```

```
  (b)  z = -1 + i               x = -1 (-) ,  y = 1 (+)     ->  Q2

       r = sqrt(1 + 1) = sqrt2

       alpha = tan^-1( 1 / 1 ) = pi/4

       Q2  ->  t = pi - pi/4 = 3 pi / 4

       z = sqrt2 ( cos 3pi/4 + i sin 3pi/4 )

       CHECK:  sqrt2 x (-1/sqrt2) = -1 ,  sqrt2 x (1/sqrt2) = 1     correct
```

```
  (c)  z = -sqrt3 - i           x = -sqrt3 (-) ,  y = -1 (-)  ->  Q3

       r = sqrt(3 + 1) = 2

       alpha = tan^-1( 1 / sqrt3 ) = pi/6

       Q3  ->  t = alpha - pi = pi/6 - pi = -5 pi / 6

       z = 2 ( cos(-5pi/6) + i sin(-5pi/6) )

       CHECK:  2 cos(-5pi/6) = 2 x (-sqrt3/2) = -sqrt3    correct
               2 sin(-5pi/6) = 2 x (-1/2)     = -1        correct
```

## 1.5 The polar forms you should know instantly

| z | r | t | z = r cis t |
|---|---|---|---|
| `1` | 1 | 0 | `cis 0` |
| `-1` | 1 | pi | `cis pi` |
| `i` | 1 | pi/2 | `cis(pi/2)` |
| `-i` | 1 | -pi/2 | `cis(-pi/2)` |
| `1 + i` | sqrt2 | pi/4 | `sqrt2 cis(pi/4)` |
| `1 - i` | sqrt2 | -pi/4 | `sqrt2 cis(-pi/4)` |
| `-1 + i` | sqrt2 | 3pi/4 | `sqrt2 cis(3pi/4)` |
| `-1 - i` | sqrt2 | -3pi/4 | `sqrt2 cis(-3pi/4)` |
| `1 + i sqrt3` | 2 | pi/3 | `2 cis(pi/3)` |
| `sqrt3 + i` | 2 | pi/6 | `2 cis(pi/6)` |
| `1 - i sqrt3` | 2 | -pi/3 | `2 cis(-pi/3)` |
| `-1 + i sqrt3` | 2 | 2pi/3 | `2 cis(2pi/3)` |

Learning this table is worth more than any other single thing in this chapter.
Almost every question uses one of these twelve numbers.

---

# TOPIC 2 — WHY THE ANGLES ADD (the engine of the whole chapter)

Take two complex numbers in polar form and multiply them:

```
   z1 z2 = r1(cos A + i sin A) x r2(cos B + i sin B)

         = r1 r2 [ (cos A cos B - sin A sin B) + i (sin A cos B + cos A sin B) ]
                     \_________________________/     \_______________________/
                          cos(A + B)                       sin(A + B)

         = r1 r2 [ cos(A + B) + i sin(A + B) ]
```

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    MULTIPLY  ->  multiply the moduli , ADD the amplitudes       |
  |                                                                 |
  |         r1 cis A  x  r2 cis B   =   r1 r2 cis(A + B)            |
  |                                                                 |
  |    DIVIDE    ->  divide the moduli , SUBTRACT the amplitudes    |
  |                                                                 |
  |         r1 cis A  /  r2 cis B   =   (r1/r2) cis(A - B)          |
  |                                                                 |
  |    RECIPROCAL                                                   |
  |                                                                 |
  |         1 / cis t  =  cis(-t)  =  cos t - i sin t               |
  |                                                                 |
  +-----------------------------------------------------------------+
```

**The everyday picture.** Think of a complex number as an instruction to a robot:
"walk `r` metres in direction `t`". Multiplying by another complex number means
"now stretch by `r2` and turn a further `B` degrees". Multiplication is
**stretch-and-turn**.

```
                            Im
                             ^
                             |         * z1 z2   (angle A + B)
                             |       /
                             |     /       * z1  (angle A)
                             |   /      /
                             | /     /
                             |/  /  ______* z2   (angle B)
                     --------O--------------------> Re
```

> **TRAP:** `cos t - i sin t` is **NOT** `cis t`. It is `cis(-t)`.
> Whenever a minus sign appears in front of the `i sin`, immediately rewrite the
> number as `cis(-t)`. Nine out of ten mistakes in the 2-mark question come from
> here.

Three rewritings you will need constantly:

```
     cos t - i sin t   =  cis(-t)
    -cos t + i sin t   =  cis(pi - t)
    -cos t - i sin t   =  cis(pi + t)   =  cis(t - pi)
     sin t + i cos t   =  cis(pi/2 - t)
     sin t - i cos t   =  cis(t - pi/2)
```

Check the fourth one: `cis(pi/2 - t) = cos(pi/2 - t) + i sin(pi/2 - t) = sin t + i cos t`. Correct.

---

# TOPIC 3 — DE MOIVRE'S THEOREM FOR AN INTEGRAL INDEX

## 3.1 Statement

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     DE MOIVRE'S THEOREM  (integral index)                        |
  |                                                                  |
  |        ( cos t + i sin t )^n  =  cos nt + i sin nt               |
  |                                                                  |
  |     for EVERY integer n :  positive, zero or negative.           |
  |                                                                  |
  +------------------------------------------------------------------+
```

In `cis` shorthand: `(cis t)^n = cis(nt)`.

**In words:** raising to the power n multiplies the angle by n.
It is just Topic 2 applied over and over with the same number.

## 3.2 PROOF for a POSITIVE integer n — by mathematical induction

This proof is examinable. It is eight lines. Learn it.

```
  Let S(n) be the statement:   (cos t + i sin t)^n = cos nt + i sin nt


  STEP 1  --  BASE CASE  n = 1

       LHS = (cos t + i sin t)^1 = cos t + i sin t
       RHS = cos(1.t) + i sin(1.t) = cos t + i sin t
       LHS = RHS , so S(1) is TRUE.


  STEP 2  --  INDUCTIVE HYPOTHESIS

       Assume S(k) is true for some positive integer k, i.e.

            (cos t + i sin t)^k = cos kt + i sin kt


  STEP 3  --  INDUCTIVE STEP: show S(k+1) is true

       (cos t + i sin t)^(k+1)
              = (cos t + i sin t)^k  x  (cos t + i sin t)
              = (cos kt + i sin kt)(cos t + i sin t)        [by the hypothesis]
              = cos kt cos t + i cos kt sin t
                              + i sin kt cos t + i^2 sin kt sin t
              = (cos kt cos t - sin kt sin t)
                              + i (sin kt cos t + cos kt sin t)
              = cos(kt + t) + i sin(kt + t)
              = cos(k+1)t + i sin(k+1)t

       So S(k+1) is true whenever S(k) is true.


  STEP 4  --  CONCLUSION

       S(1) is true, and S(k) => S(k+1).
       By the principle of mathematical induction, S(n) is true for
       ALL positive integers n.                                        [proved]
```

## 3.3 The case n = 0

```
       (cos t + i sin t)^0 = 1        (anything non-zero to the power 0)

       cos(0.t) + i sin(0.t) = cos 0 + i sin 0 = 1 + 0 = 1

       Both sides are 1, so the theorem holds for n = 0.
```

## 3.4 EXTENSION to NEGATIVE integers

```
  Let n be a negative integer. Write n = -m where m is a POSITIVE integer.

       (cos t + i sin t)^n = (cos t + i sin t)^(-m)

                                        1
                           = ---------------------------
                              (cos t + i sin t)^m

                                        1
                           = ---------------------------      [by 3.2, m is +ve]
                                cos mt + i sin mt

     Now rationalise: multiply top and bottom by (cos mt - i sin mt).

                              cos mt - i sin mt
                           = -----------------------------------
                              cos^2 mt + sin^2 mt        <-- = 1

                           = cos mt - i sin mt

                           = cos(-mt) + i sin(-mt)    [cos is even, sin is odd]

                           = cos nt + i sin nt        [since n = -m]

  So the theorem holds for negative integers as well.                  [proved]
```

> Remember why the denominator became 1: `(a+ib)(a-ib) = a^2 + b^2`, and here
> `cos^2 + sin^2 = 1`. That single identity is what makes the whole extension work.

## 3.5 WORKED EXAMPLE — a Section A classic

**Simplify**

```
        ( cos 2t - i sin 2t )^7  ( cos 3t + i sin 3t )^-5
       -------------------------------------------------------
        ( cos 4t + i sin 4t )^12 ( cos 5t - i sin 5t )^-6
```

**Method: turn every bracket into `cis(something)` first, then just add and subtract angles.**

```
  TOP
     (cos 2t - i sin 2t)^7  =  [ cis(-2t) ]^7   =  cis(-14t)
     (cos 3t + i sin 3t)^-5 =  [ cis(3t) ]^-5   =  cis(-15t)
     top = cis(-14t) x cis(-15t) = cis(-29t)

  BOTTOM
     (cos 4t + i sin 4t)^12 =  [ cis(4t) ]^12   =  cis(48t)
     (cos 5t - i sin 5t)^-6 =  [ cis(-5t) ]^-6  =  cis(30t)
     bottom = cis(48t) x cis(30t) = cis(78t)

  WHOLE THING
     cis(-29t) / cis(78t) = cis(-29t - 78t) = cis(-107t)

                          = cos 107t - i sin 107t
```

**ANSWER: `cos 107t - i sin 107t`**

```
   Bookkeeping shortcut — write the signed angle under each bracket:

        (-2t)(7) = -14        (3t)(-5) = -15       total top    = -29
        ( 4t)(12) = +48       (-5t)(-6) = +30      total bottom = +78

        answer angle = -29 - 78 = -107
```

## 3.6 WORKED EXAMPLE — powers of ordinary complex numbers

**Find `(1 + i)^16`.**

```
  STEP 1  polar form:   1 + i = sqrt2 cis(pi/4)

  STEP 2  De Moivre:    (1+i)^16 = (sqrt2)^16 cis(16 x pi/4)
                                 = 2^8 cis(4 pi)
                                 = 256 ( cos 4pi + i sin 4pi )
                                 = 256 ( 1 + 0 )
                                 = 256

  CHECK (a completely different route):
        (1+i)^2 = 1 + 2i + i^2 = 2i
        (1+i)^4 = (2i)^2 = -4
        (1+i)^8 = (-4)^2 = 16
        (1+i)^16 = 16^2 = 256                      MATCHES
```

**ANSWER: 256**

**Find `(1 - i sqrt3)^7`.**

```
  r = sqrt(1 + 3) = 2 ,   point (1, -sqrt3) is in Q4 ,  alpha = pi/3
  so   1 - i sqrt3 = 2 cis(-pi/3)

  (1 - i sqrt3)^7 = 2^7 cis(-7 pi / 3)

  Reduce the angle:  -7pi/3 + 2pi = -7pi/3 + 6pi/3 = -pi/3

                  = 128 cis(-pi/3)
                  = 128 ( 1/2 - i sqrt3/2 )
                  = 64 - 64 sqrt3 i
```

**ANSWER: `64 - 64 sqrt3 i`**

> **TRAP:** After De Moivre, always reduce the angle by adding or subtracting
> multiples of `2 pi` until it is between `-pi` and `pi`. `cis(4pi)` is just 1,
> but a marker wants to see you say so.

---

# TOPIC 4 — DE MOIVRE'S THEOREM FOR A RATIONAL INDEX

## 4.1 Why the statement has to change

For an integer index, `(cis t)^n` is a single number. For a **fractional** index it
is not, because a root has several values. Compare:

```
     x^2 = 4    ->    x = 2  OR  x = -2         TWO answers
     x^3 = 8    ->    x = 2 , -1+i sqrt3 , -1-i sqrt3     THREE answers
```

So we cannot write an equals sign between `(cis t)^(p/q)` and one single number.
The correct statement is:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   DE MOIVRE'S THEOREM  (rational index)                              |
  |                                                                      |
  |   Let p, q be integers, q > 0, and p/q in lowest terms. Then         |
  |                                                                      |
  |          p t            p t                                          |
  |     cos ----- + i sin -----     is  ONE OF THE VALUES  of            |
  |           q              q                                           |
  |                                                                      |
  |          ( cos t + i sin t )^(p/q)                                   |
  |                                                                      |
  |   and there are EXACTLY q such values, namely                        |
  |                                                                      |
  |           p(2k pi + t)              p(2k pi + t)                     |
  |     cos --------------- + i sin ---------------      k = 0,1,...,q-1 |
  |                q                        q                            |
  |                                                                      |
  +----------------------------------------------------------------------+
```

## 4.2 WHY there are exactly q values — read this slowly

The key fact is that the angle of a complex number is not unique:

```
     cos t + i sin t  =  cos(2k pi + t) + i sin(2k pi + t)   for EVERY integer k
```

(going round extra whole turns lands on the same point). So

```
     (cos t + i sin t)^(p/q)  =  [ cos(2k pi + t) + i sin(2k pi + t) ]^(p/q)

                              =  cos ( p(2k pi + t)/q ) + i sin ( p(2k pi + t)/q )
```

Now ask: **when do two different values of k give the same answer?**
The angles for `k` and for `k + q` differ by

```
     p(2(k+q)pi + t)/q  -  p(2k pi + t)/q  =  p . 2q pi / q  =  2 p pi
```

which is a whole number of full turns — the **same point**. So the list repeats
with period q. And for `k = 0, 1, ..., q-1` the angles differ by `2 p pi / q`,
which (because p and q share no common factor) is never a whole number of turns.

```
     ==>  k = 0, 1, 2, ..., q-1   give   q DIFFERENT values,
          and every other k just repeats one of them.
```

```
    HOW TO SAY IT IN THE EXAM (one line, worth a mark):

    "Since cos t + i sin t = cos(2k pi + t) + i sin(2k pi + t) for all integers k,
     and the values repeat when k increases by q, there are exactly q values,
     given by k = 0, 1, 2, ..., q-1."
```

## 4.3 The most useful special case: p = 1

```
                                 1/q            2k pi + t            2k pi + t
     ( cos t + i sin t )      =  cos ----------- + i sin -----------
                                            q                  q

     k = 0, 1, ..., q-1
```

This is the formula that produces **all the roots** in Topics 8 to 12.

---

# TOPIC 5 — EXPANDING cos nt AND sin nt IN POWERS OF cos t AND sin t

## 5.1 The method

```
   STEP 1   Write   cos nt + i sin nt = (cos t + i sin t)^n     [De Moivre]

   STEP 2   Expand the right side with the BINOMIAL THEOREM.

   STEP 3   Replace i^2 = -1 , i^3 = -i , i^4 = 1 , ...

   STEP 4   EQUATE REAL PARTS   -> gives  cos nt
            EQUATE IMAGINARY PARTS -> gives  sin nt

   STEP 5   If asked "in powers of cos t only", replace sin^2 t by 1 - cos^2 t.
```

## 5.2 WORKED EXAMPLE — n = 3

Write `c = cos t`, `s = sin t`.

```
   cos 3t + i sin 3t = (c + is)^3

                     = c^3 + 3 c^2 (is) + 3 c (is)^2 + (is)^3

                     = c^3 + 3i c^2 s + 3c (i^2 s^2) + i^3 s^3

                     = c^3 + 3i c^2 s - 3 c s^2 - i s^3

                     = ( c^3 - 3 c s^2 )  +  i ( 3 c^2 s - s^3 )
                        \______________/       \______________/
                             REAL                  IMAGINARY

   EQUATE REAL PARTS:
       cos 3t = c^3 - 3 c s^2
              = c^3 - 3c(1 - c^2)                  [s^2 = 1 - c^2]
              = c^3 - 3c + 3c^3
              = 4 cos^3 t - 3 cos t

   EQUATE IMAGINARY PARTS:
       sin 3t = 3 c^2 s - s^3
              = 3(1 - s^2)s - s^3                  [c^2 = 1 - s^2]
              = 3s - 3s^3 - s^3
              = 3 sin t - 4 sin^3 t

   CHECK with t = 0 :  cos 0 = 1 ; 4(1) - 3(1) = 1        correct
   CHECK with t = pi/2 : sin(3pi/2) = -1 ; 3(1) - 4(1) = -1  correct
```

## 5.3 WORKED EXAMPLE — n = 4

```
   cos 4t + i sin 4t = (c + is)^4
                     = c^4 + 4c^3(is) + 6c^2(is)^2 + 4c(is)^3 + (is)^4
                     = c^4 + 4i c^3 s - 6 c^2 s^2 - 4i c s^3 + s^4
                     = ( c^4 - 6c^2 s^2 + s^4 ) + i ( 4c^3 s - 4 c s^3 )

   cos 4t = c^4 - 6c^2 s^2 + s^4
          = c^4 - 6c^2(1-c^2) + (1-c^2)^2
          = c^4 - 6c^2 + 6c^4 + 1 - 2c^2 + c^4
          = 8 cos^4 t - 8 cos^2 t + 1

   sin 4t = 4c^3 s - 4c s^3 = 4 sin t cos t ( cos^2 t - sin^2 t )

   CHECK t = 0 : 8 - 8 + 1 = 1 = cos 0        correct
```

## 5.4 tan nt

Divide the imaginary part by the real part, then divide top and bottom by `c^n`:

```
              sin 3t      3c^2 s - s^3        3 tan t - tan^3 t
   tan 3t =  --------  = --------------  =  ---------------------
              cos 3t      c^3 - 3c s^2         1 - 3 tan^2 t
```

```
              4 tan t - 4 tan^3 t
   tan 4t = -------------------------
             1 - 6 tan^2 t + tan^4 t
```

## 5.5 The general pattern (worth knowing, saves time)

```
   cos nt = C(n,0) c^n - C(n,2) c^(n-2) s^2 + C(n,4) c^(n-4) s^4 - ...
                          ^ EVEN binomial coefficients, signs + - + - ...

   sin nt = C(n,1) c^(n-1) s - C(n,3) c^(n-3) s^3 + C(n,5) c^(n-5) s^5 - ...
                          ^ ODD binomial coefficients, signs + - + - ...
```

| n | cos nt in powers of cos t | sin nt |
|---|---|---|
| 2 | `2 cos^2 t - 1` | `2 sin t cos t` |
| 3 | `4 cos^3 t - 3 cos t` | `3 sin t - 4 sin^3 t` |
| 4 | `8 cos^4 t - 8 cos^2 t + 1` | `4 sin t cos t (cos^2 t - sin^2 t)` |
| 5 | `16 cos^5 t - 20 cos^3 t + 5 cos t` | `16 sin^5 t - 20 sin^3 t + 5 sin t` |
| 6 | `32 cos^6 t - 48 cos^4 t + 18 cos^2 t - 1` | — |

```
   CHECK n = 5 at t = 0 :  16 - 20 + 5 = 1 = cos 0                correct
   CHECK n = 5 at t = pi/2 for sin :  16 - 20 + 5 = 1 = sin(5pi/2) correct
   CHECK n = 6 at t = 0 :  32 - 48 + 18 - 1 = 1 = cos 0           correct
```

> **TRAP:** `sin 5t` comes out in powers of **sin** t, but `sin 4t` cannot be
> written in powers of sin t alone (it has an odd power of cos left over). Only
> ODD n give a clean all-sine formula.

---

# TOPIC 6 — EXPRESSING cos^n t AND sin^n t IN MULTIPLE ANGLES

This is Topic 5 run **backwards**, and it is the one you will need again in
integration next year.

## 6.1 The four tools

Let `z = cos t + i sin t`. Then `1/z = z^-1 = cos t - i sin t`.

```
  +-------------------------------------------------------------+
  |                                                             |
  |     z + 1/z    =  2 cos t          z^n + 1/z^n = 2 cos nt   |
  |                                                             |
  |     z - 1/z    =  2i sin t         z^n - 1/z^n = 2i sin nt  |
  |                                                             |
  +-------------------------------------------------------------+
```

Proof of the first: `z + 1/z = (cos t + i sin t) + (cos t - i sin t) = 2 cos t`.
The `n` versions come from De Moivre: `z^n = cis(nt)` and `1/z^n = cis(-nt)`.

## 6.2 The method

```
   STEP 1   To handle cos^n t , start from  (2 cos t)^n = (z + 1/z)^n.
            To handle sin^n t , start from  (2i sin t)^n = (z - 1/z)^n.

   STEP 2   Expand by the binomial theorem.

   STEP 3   PAIR UP the terms from the two ends:
                z^n and 1/z^n  ->  2 cos nt
                z^(n-2) and 1/z^(n-2)  ->  2 cos(n-2)t     and so on.
            (For the sine case, the pairs come out as 2i sin(...) or as
             2 cos(...) depending on the sign — expand carefully.)

   STEP 4   Divide by the 2^n (and by i^n if it is a sine problem).
```

## 6.3 WORKED EXAMPLE — cos^3 t

```
   (2 cos t)^3 = (z + 1/z)^3

   8 cos^3 t = z^3 + 3 z^2 (1/z) + 3 z (1/z^2) + 1/z^3

             = z^3 + 3z + 3/z + 1/z^3

             = ( z^3 + 1/z^3 ) + 3 ( z + 1/z )

             =   2 cos 3t      + 3 ( 2 cos t )

             =   2 cos 3t + 6 cos t

   Divide by 8:
                         cos 3t + 3 cos t
             cos^3 t  =  -------------------
                                4

   CHECK t = 0 :  (1 + 3)/4 = 1 = cos^3 0                     correct
   CHECK t = pi/3 : cos^3(pi/3) = (1/2)^3 = 1/8 .
                    (cos pi + 3 cos pi/3)/4 = (-1 + 1.5)/4 = 0.5/4 = 1/8   correct
```

## 6.4 WORKED EXAMPLE — sin^3 t

```
   (2i sin t)^3 = (z - 1/z)^3

   8 i^3 sin^3 t = z^3 - 3z + 3/z - 1/z^3

   -8 i sin^3 t  = ( z^3 - 1/z^3 ) - 3 ( z - 1/z )

                 =   2i sin 3t     - 3 ( 2i sin t )

                 =   2i sin 3t - 6i sin t

   Divide both sides by -8i :

                         3 sin t - sin 3t
             sin^3 t  =  ------------------
                                4

   CHECK t = pi/2 : sin^3 = 1 .  (3(1) - sin(3pi/2))/4 = (3 + 1)/4 = 1   correct
```

## 6.5 The standard results

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    cos^2 t = ( 1 + cos 2t ) / 2                                   |
  |    sin^2 t = ( 1 - cos 2t ) / 2                                   |
  |                                                                   |
  |    cos^3 t = ( cos 3t + 3 cos t ) / 4                             |
  |    sin^3 t = ( 3 sin t - sin 3t ) / 4                             |
  |                                                                   |
  |    cos^4 t = ( cos 4t + 4 cos 2t + 3 ) / 8                        |
  |    sin^4 t = ( cos 4t - 4 cos 2t + 3 ) / 8                        |
  |                                                                   |
  |    cos^5 t = ( cos 5t + 5 cos 3t + 10 cos t ) / 16                |
  |    sin^5 t = ( sin 5t - 5 sin 3t + 10 sin t ) / 16                |
  |                                                                   |
  |    cos^6 t = ( cos 6t + 6 cos 4t + 15 cos 2t + 10 ) / 32          |
  |    sin^6 t = ( 10 - 15 cos 2t + 6 cos 4t - cos 6t ) / 32          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

```
   CHECK cos^4 at t = 0 :  (1 + 4 + 3)/8 = 1                        correct
   CHECK sin^4 at t = pi/2 : (cos 2pi - 4 cos pi + 3)/8
                           = (1 + 4 + 3)/8 = 1                      correct
   CHECK cos^5 at t = 0 :  (1 + 5 + 10)/16 = 1                      correct
   CHECK sin^6 at t = pi/2 : (10 + 15 + 6 + 1)/32 = 32/32 = 1       correct
   CHECK sin^6 at t = 0 : (10 - 15 + 6 - 1)/32 = 0                  correct
```

> **PATTERN:** the numbers in the answers are just the **binomial coefficients**
> of row n. For n = 5, row 5 is `1 5 10 10 5 1` — and you can see 1, 5, 10 in
> `cos^5 t`. For n = 6, row 6 is `1 6 15 20 15 6 1` — and you see 1, 6, 15, and
> half of 20 (which is 10) as the constant. Use this to check your answer.

---

# TOPIC 7 — THE nth ROOTS OF UNITY

## 7.1 What we are solving

"nth roots of unity" means: **all the solutions of `z^n = 1`.**

Over real numbers `z^3 = 1` has only one solution, `z = 1`. Over complex numbers it
has **three**. In general `z^n = 1` has **exactly n** complex solutions.

## 7.2 Deriving them

```
   z^n = 1

   Write 1 in polar form:   1 = cos 0 + i sin 0
   But also                 1 = cos(2k pi) + i sin(2k pi)  for every integer k.

   So      z^n = cos 2k pi + i sin 2k pi

           z   = ( cos 2k pi + i sin 2k pi )^(1/n)

           z   = cos( 2k pi / n ) + i sin( 2k pi / n )        [De Moivre, rational]

           k = 0, 1, 2, ..., n-1
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |     THE n nth ROOTS OF UNITY                                   |
  |                                                                |
  |            2k pi            2k pi                              |
  |     cos -------- + i sin --------      k = 0, 1, ..., n-1      |
  |             n                n                                 |
  |                                                                |
  |     Writing  a = cis( 2 pi / n )  they are                     |
  |                                                                |
  |            1 ,  a ,  a^2 ,  a^3 ,  ... ,  a^(n-1)              |
  |                                                                |
  +----------------------------------------------------------------+
```

`a = cis(2 pi / n)` is called a **primitive** nth root of unity: its powers
generate all the others.

## 7.3 The picture — a regular n-gon

Every root has modulus `|z| = 1` (because `|z|^n = |1| = 1` and `|z| >= 0`), so they
all sit on the **unit circle**. Their angles are `0, 2pi/n, 4pi/n, ...` — equally
spaced by `2 pi / n`. So:

```
   THE n nth ROOTS OF UNITY ARE THE VERTICES OF A REGULAR n-SIDED POLYGON
   INSCRIBED IN THE UNIT CIRCLE, WITH ONE VERTEX AT THE POINT 1.
```

```
    n = 3   equilateral triangle          n = 4   square
    angles 0, 120, 240 deg               angles 0, 90, 180, 270 deg

              Im                                    Im
               ^                                     ^
      w        |                                     |
       *       |                                     * i
        \      |                                     |
          \    |                                     |
   --------\---+----------*----> Re     ------*------+------*------> Re
             \ O          1                  -1      O      1
             /  |                                    |
           /    |                                     |
         *      |                                     * -i
      w^2       |                                     |

   1 , -1/2 + i sqrt3/2 , -1/2 - i sqrt3/2      1 , i , -1 , -i
```

```
    n = 5   regular pentagon                n = 6   regular hexagon
    angles 0, 72, 144, 216, 288 deg         angles 0, 60, 120, 180, 240, 300

                 Im                                    Im
                  ^                                     ^
                  |                          120        |        60
   144  *         |         *  72               *       |       *
          \       |       /                       \     |     /
            \     |     /                           \   |   /
              \   |   /                               \ | /
   -------------\-+-/----------*----> Re    ---*--------+--------*----> Re
                  O           1  (0 deg)      180       O          0 deg
               /     \                                / | \
             /         \                            /   |   \
           /             \                        /     |     \
   216   *                 *  288               *       |       *
                                              240       |       300

   note: 216 = -144 , 288 = -72              note the hexagon's side
   the roots come in conjugate pairs         equals the radius
```

> Because the coefficients of `z^n - 1 = 0` are real, the non-real roots always come
> in **conjugate pairs**, so the picture is always symmetric about the real axis.

## 7.4 PROPERTY 1 — they are in GEOMETRIC PROGRESSION

```
   1 , a , a^2 , ... , a^(n-1)     is a G.P. with first term 1 and common ratio a.
```

That is obvious from the way we wrote them — and it is the tool for the next two
properties.

## 7.5 PROPERTY 2 — THE SUM IS ZERO

```
   Sum  =  1 + a + a^2 + ... + a^(n-1)

   This is a G.P. with n terms, first term 1, ratio a (and a is NOT 1 when n >= 2).

                a^n - 1
   Sum  =  1 . ----------
                 a - 1

   But a = cis(2pi/n) , so by De Moivre

        a^n = cis( n . 2pi/n ) = cis(2 pi) = cos 2pi + i sin 2pi = 1

                1 - 1        0
   Sum  =  ----------- = --------- = 0                (since a - 1 is not 0)
                a - 1      a - 1
```

```
  +------------------------------------------------------+
  |                                                      |
  |     SUM of the n nth roots of unity  =  0            |
  |                                                      |
  |     (for every n >= 2)                               |
  |                                                      |
  +------------------------------------------------------+
```

```
   CHECK n = 3 :  1 + (-1/2 + i sqrt3/2) + (-1/2 - i sqrt3/2) = 1 - 1 + 0 = 0
   CHECK n = 4 :  1 + i - 1 - i = 0
```

> **Geometric meaning:** the roots are the vertices of a regular polygon centred at
> the origin. Their "average position" is the centre, which is 0. Every vector is
> cancelled by the ones opposite it.

Consequence you will use: if `a` is any nth root of unity other than 1,

```
        1 + a + a^2 + ... + a^(n-1) = 0
```

## 7.6 PROPERTY 3 — THE PRODUCT IS (-1)^(n+1)

```
   Product = 1 . a . a^2 . ... . a^(n-1)

           = a^( 0 + 1 + 2 + ... + (n-1) )

                       (n-1) n
           = a^(  --------------- )                [sum of first n-1 integers]
                          2

     with a = cis(2 pi / n) , De Moivre gives

                   2 pi     n(n-1)
           = cis ( ------ x -------- )
                     n         2

           = cis ( (n-1) pi )

           = cos (n-1)pi + i sin (n-1)pi

           = (-1)^(n-1) + i (0)

           = (-1)^(n-1)  =  (-1)^(n+1)
```

(`(-1)^(n-1)` and `(-1)^(n+1)` are the same thing, because they differ by `(-1)^2 = 1`.)

```
  +------------------------------------------------------+
  |                                                      |
  |   PRODUCT of the n nth roots of unity = (-1)^(n+1)   |
  |                                                      |
  |     n ODD   ->  product =  +1                        |
  |     n EVEN  ->  product =  -1                        |
  |                                                      |
  +------------------------------------------------------+
```

```
   CHECK n = 2 : roots 1, -1 . product = -1 . (-1)^3 = -1        correct
   CHECK n = 3 : 1 . w . w^2 = w^3 = 1 . (-1)^4 = 1              correct
   CHECK n = 4 : 1 . i . (-1) . (-i) = (i)(i) = -1 . (-1)^5 = -1 correct
```

**A second, one-line proof (use this if you are short of time):**

```
   The roots are exactly the roots of  z^n - 1 = 0.
   For a polynomial, product of roots = (-1)^n x (constant term)/(leading coeff)
                                      = (-1)^n x (-1)/(1)
                                      = (-1)^(n+1)
```

## 7.7 PROPERTY 4 — sum of the pth powers

```
   1^p + a^p + a^(2p) + ... + a^((n-1)p)  =  n   if n divides p
                                          =  0   otherwise
```

Reason: if `n | p` then every term is `1`, giving n. If not, it is a G.P. with ratio
`a^p` (not 1) and sum `((a^p)^n - 1)/(a^p - 1) = (1 - 1)/(...) = 0`.

## 7.8 Other facts worth a mark

```
   *  If a is an nth root of unity, so is 1/a = a bar = a^(n-1).
      (The roots come in conjugate pairs.)

   *  The non-real roots of z^n = 1 satisfy
         1 + z + z^2 + ... + z^(n-1) = 0
      because z^n - 1 = (z - 1)(1 + z + ... + z^(n-1)) and z is not 1.

   *  The number of nth roots of unity that are ALSO mth roots of unity
      is the H.C.F. of n and m.
```

---

# TOPIC 8 — THE CUBE ROOTS OF UNITY (the highest-scoring 2 marks in the chapter)

## 8.1 Finding them

**Method 1 — factorise.**

```
   z^3 = 1
   z^3 - 1 = 0
   (z - 1)(z^2 + z + 1) = 0

   z = 1      OR      z^2 + z + 1 = 0

   For the quadratic:  z = ( -1 +/- sqrt(1 - 4) ) / 2
                         = ( -1 +/- sqrt(-3) ) / 2
                         = ( -1 +/- i sqrt3 ) / 2
```

**Method 2 — the general formula** with n = 3: `cis(2k pi/3)` for k = 0, 1, 2, i.e.
`cis 0`, `cis(2pi/3)`, `cis(4pi/3)`. Same three numbers.

```
  +---------------------------------------------------------------+
  |                                                               |
  |     THE CUBE ROOTS OF UNITY                                   |
  |                                                               |
  |            1                                                  |
  |                                                               |
  |            -1 + i sqrt3            2 pi                       |
  |     w  =  ---------------  =  cis ------  =  cis 120 deg      |
  |                  2                  3                         |
  |                                                               |
  |            -1 - i sqrt3            4 pi                       |
  |    w^2 =  ---------------  =  cis ------  =  cis 240 deg      |
  |                  2                  3                         |
  |                                                               |
  +---------------------------------------------------------------+
```

```
                              Im
                               ^
                               |
        w = -1/2 + i sqrt3/2   |
                    *          |
                      \        |
                        \      |     (an equilateral triangle,
                          \    |      side = sqrt3 , inscribed in
                            \  |      the unit circle)
       ----------------------- + ---------------* -----------> Re
                            /  O                1
                          /    |
                        /      |
                      /        |
                    *          |
        w^2 = -1/2 - i sqrt3/2 |
```

## 8.2 THE TWO PROPERTIES THAT ANSWER EVERYTHING

```
  +-------------------------------------------------------------+
  |                                                             |
  |         w^3  =  1                                           |
  |                                                             |
  |         1 + w + w^2  =  0                                   |
  |                                                             |
  +-------------------------------------------------------------+
```

Why `1 + w + w^2 = 0`: `w` satisfies `z^2 + z + 1 = 0`, so `w^2 + w + 1 = 0`.
(Or: the sum of the nth roots of unity is 0, Topic 7.5.)

**The three rearrangements you will use in almost every problem:**

```
         1 + w   = -w^2                (move w^2 across)
         1 + w^2 = -w
         w + w^2 = -1
```

Write those three lines at the top of your answer sheet. They turn most 2-mark
`w` questions into one line.

## 8.3 More properties

| Property | Why |
|---|---|
| `w^2 = w bar` (conjugate of w) | non-real roots come in conjugate pairs |
| `1/w = w^2` and `1/w^2 = w` | since `w . w^2 = w^3 = 1` |
| `|w| = 1`, `amp(w) = 2pi/3` | it lies on the unit circle |
| `w - w^2 = i sqrt3` | subtract the two surd forms |
| `(w - w^2)^2 = -3` | square the line above |
| `w^n` depends only on the remainder of n / 3 | `w^3 = 1` |

## 8.4 REDUCING A HIGH POWER OF w

```
   Divide the exponent by 3 and keep the REMAINDER.

        remainder 0   ->   w^n = 1
        remainder 1   ->   w^n = w
        remainder 2   ->   w^n = w^2
```

```
   Example:  w^100 .   100 = 3 x 33 + 1   ->  remainder 1  ->  w^100 = w
   Example:  w^2018 .  2018 = 3 x 672 + 2 ->  remainder 2  ->  w^2018 = w^2
             (digit-sum test: 2+0+1+8 = 11, 1+1 = 2, so remainder 2)
```

> **SHORTCUT:** the remainder of a number on division by 3 equals the remainder of
> its **digit sum**. `2018 -> 11 -> 2`. No long division needed.

## 8.5 WORKED EXAMPLES — the standard 2-markers

**(a) Find the value of `(1 - w + w^2)^3`.**

```
   1 + w^2 = -w        [from 1 + w + w^2 = 0]

   So  1 - w + w^2 = (1 + w^2) - w = -w - w = -2w

   (-2w)^3 = -8 w^3 = -8 (1) = -8
```
**ANSWER: -8**

**(b) Find `(1 - w + w^2)^5 + (1 + w - w^2)^5`.**

```
   1 - w + w^2 = -2w          (as above)
   1 + w - w^2 = (1 + w) - w^2 = -w^2 - w^2 = -2 w^2

   (-2w)^5 + (-2w^2)^5 = -32 w^5 - 32 w^10

   w^5  : 5  = 3 x 1 + 2  -> w^2
   w^10 : 10 = 3 x 3 + 1  -> w

   = -32 w^2 - 32 w = -32 ( w + w^2 ) = -32 ( -1 ) = 32
```
**ANSWER: 32**

**(c) Find `(1 + w)(1 + w^2)(1 + w^4)(1 + w^8)`.**

```
   w^4 = w   (4 -> remainder 1)          w^8 = w^2   (8 -> remainder 2)

   = (1 + w)(1 + w^2)(1 + w)(1 + w^2)
   = (-w^2)(-w)(-w^2)(-w)
   = w^2 . w . w^2 . w          [four minus signs -> plus]
   = w^6 = (w^3)^2 = 1
```
**ANSWER: 1**

**(d) Show that `(1 - w)(1 - w^2) = 3`.**

```
   (1 - w)(1 - w^2) = 1 - w^2 - w + w^3
                    = 1 - (w + w^2) + 1
                    = 1 - (-1) + 1
                    = 3
```

**(e) Simplify `(a + b w + c w^2) / (c + a w + b w^2)`.**

```
   Multiply the DENOMINATOR by w^2 :

     w^2 ( c + a w + b w^2 ) = c w^2 + a w^3 + b w^4
                             = c w^2 + a + b w          [w^3 = 1, w^4 = w]
                             = a + b w + c w^2          = the NUMERATOR

   So   numerator = w^2 x denominator ,  hence the fraction = w^2.
```
**ANSWER: `w^2`**

## 8.6 THE FACTORISATION OF a^3 + b^3 + c^3 - 3abc

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   a^3 + b^3 + c^3 - 3abc                                             |
  |                                                                      |
  |        = ( a + b + c )( a + b w + c w^2 )( a + b w^2 + c w )         |
  |                                                                      |
  |   and the last two brackets alone give                               |
  |                                                                      |
  |   ( a + b w + c w^2 )( a + b w^2 + c w ) = a^2 + b^2 + c^2 - ab - bc - ca |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**PROOF (this is a Section B / C question):**

```
   Multiply out the last two brackets:

   (a + bw + cw^2)(a + bw^2 + cw)

     = a^2 + a b w^2 + a c w
     + a b w + b^2 w^3 + b c w^2
     + a c w^2 + b c w^4 + c^2 w^3

   Use w^3 = 1 and w^4 = w :

     = a^2 + b^2 + c^2
       + ab ( w + w^2 ) + bc ( w^2 + w ) + ca ( w + w^2 )

     = a^2 + b^2 + c^2 + (ab + bc + ca)( w + w^2 )

     = a^2 + b^2 + c^2 - ab - bc - ca            [ since w + w^2 = -1 ]

   Now multiply by (a + b + c) and use the standard algebraic identity

     (a+b+c)(a^2+b^2+c^2-ab-bc-ca) = a^3 + b^3 + c^3 - 3abc              [proved]
```

```
   CHECK with a = 1, b = 1, c = 0 :
      LHS = 1 + 1 + 0 - 0 = 2
      RHS = (2)(1 + w)(1 + w^2) = 2 x (-w^2)(-w) = 2 w^3 = 2      correct
```

**Companion identity (very often asked):**

```
   ( a + b )( a w + b w^2 )( a w^2 + b w ) = a^3 + b^3

   because (aw + bw^2)(aw^2 + bw) = a^2 w^3 + ab w^2 + ab w^4 + b^2 w^3
                                  = a^2 + b^2 + ab(w^2 + w)
                                  = a^2 + b^2 - ab
   and (a+b)(a^2 - ab + b^2) = a^3 + b^3.
```

---

# TOPIC 9 — THE FOURTH ROOTS OF UNITY

## 9.1 Finding them

```
   z^4 = 1
   z^4 - 1 = 0
   (z^2 - 1)(z^2 + 1) = 0
   (z - 1)(z + 1)(z^2 + 1) = 0

   z = 1 , z = -1 , z = i , z = -i
```

Or by formula: `cis(2k pi / 4) = cis(k pi / 2)` for k = 0, 1, 2, 3, i.e.
`cis 0 = 1`, `cis(pi/2) = i`, `cis(pi) = -1`, `cis(3pi/2) = -i`.

```
  +-------------------------------------------------------+
  |                                                       |
  |     FOURTH ROOTS OF UNITY:    1 ,  i ,  -1 ,  -i      |
  |                                                       |
  |     i.e.   +/- 1  and  +/- i                          |
  |                                                       |
  +-------------------------------------------------------+
```

```
                        Im
                         ^
                         |
                         * i          The four points are the corners
                       / | \          of a SQUARE with vertices on the
                     /   |   \        unit circle. Side = sqrt2 ,
                   /     |     \      diagonal = 2.
        ---------*-------+-------*--------> Re
                 -1      O       1
                   \     |     /
                     \   |   /
                       \ | /
                         * -i
                         |
```

## 9.2 Their properties (check them against Topic 7)

```
   SUM      =  1 + i - 1 - i  =  0                       (matches "sum = 0")

   PRODUCT  =  1 . i . (-1) . (-i)  =  i x i  =  i^2 = -1
              and (-1)^(n+1) = (-1)^5 = -1               (matches)

   In G.P. form with a = i :   1 , i , i^2 , i^3   =   1 , i , -1 , -i
```

Writing them as `1, i, i^2, i^3` shows immediately why the powers of `i` cycle with
period 4 — the whole "powers of i" idea from Chapter 1 is exactly the fourth roots
of unity.

---

# TOPIC 10 — THE nth ROOTS OF ANY COMPLEX NUMBER

## 10.1 The master formula

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   To find all n nth roots of   z = r ( cos t + i sin t ) :          |
  |                                                                     |
  |                  1/n  [        2k pi + t              2k pi + t  ]  |
  |     z_k  =      r     [  cos ------------- + i sin ------------- ]  |
  |                         [          n                      n      ]  |
  |                                                                     |
  |     k = 0, 1, 2, ..., n-1                                           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Read it as a recipe:**

```
   1.  Modulus of every root  =  the real nth root of r.   (Same for all of them.)

   2.  The FIRST root (k = 0) has amplitude  t / n.

   3.  Every later root just adds  2 pi / n  to the amplitude.

   4.  Stop after n roots.
```

So all n roots lie on a circle of radius `r^(1/n)` and are the vertices of a
**regular n-gon**. Getting one root gives you all of them by rotation.

## 10.2 Another way to say the same thing

```
   nth roots of z   =   ( one nth root of z )  x  ( the n nth roots of unity )
```

For example, the cube roots of 8 are `2, 2w, 2w^2`. Very handy in EAPCET.

## 10.3 WORKED EXAMPLE — the cube roots of `8i`

```
  STEP 1  Polar form.   8i = 0 + 8i  ,  r = 8 ,  point (0, 8) is on the +Im axis
          so  t = pi/2 .        8i = 8 cis( pi/2 )

  STEP 2  Modulus of each root = 8^(1/3) = 2 .

  STEP 3  Amplitudes:  ( 2k pi + pi/2 ) / 3 ,  k = 0, 1, 2

          k = 0 :   (pi/2)/3            = pi/6
          k = 1 :   (2pi + pi/2)/3      = (5pi/2)/3   = 5 pi / 6
          k = 2 :   (4pi + pi/2)/3      = (9pi/2)/3   = 3 pi / 2

  STEP 4  Write them out.

     z0 = 2 cis(pi/6)   = 2( sqrt3/2 + i/2 )   =  sqrt3 + i
     z1 = 2 cis(5pi/6)  = 2( -sqrt3/2 + i/2 )  = -sqrt3 + i
     z2 = 2 cis(3pi/2)  = 2( 0 - i )           = -2i

  CHECK z0 :  (sqrt3 + i)^3 = [2 cis(pi/6)]^3 = 8 cis(pi/2) = 8i      correct
  CHECK the SUM: (sqrt3 + i) + (-sqrt3 + i) + (-2i) = 0
        (the roots of z^3 - 8i = 0 have no z^2 term, so their sum must be 0)
```

```
   THE PICTURE                    Im
                                   ^
                                   |
             -sqrt3 + i  *---------|---------*  sqrt3 + i
                          \        |        /       (radius 2,
                            \      |      /          angles 30, 150, 270 deg)
                              \    |    /
        ----------------------- \--+--/ -------------> Re
                                  \|/  O
                                   |
                                   |
                                   *  -2i
```

## 10.4 WORKED EXAMPLE — the fourth roots of `-16`

```
   -16 = 16 cis( pi )     ( r = 16 , the point (-16, 0) is on the -Re axis )

   modulus of each root = 16^(1/4) = 2

   amplitudes = ( 2k pi + pi ) / 4 = (2k + 1) pi / 4 ,  k = 0,1,2,3
              = pi/4 , 3pi/4 , 5pi/4 , 7pi/4

   z0 = 2 cis(pi/4)  = 2( 1/sqrt2 + i/sqrt2 )  =  sqrt2 + i sqrt2
   z1 = 2 cis(3pi/4) = -sqrt2 + i sqrt2
   z2 = 2 cis(5pi/4) = -sqrt2 - i sqrt2
   z3 = 2 cis(7pi/4) =  sqrt2 - i sqrt2

   i.e.   +/- sqrt2  +/-  i sqrt2

   CHECK: (sqrt2 + i sqrt2)^4 = [sqrt2 (1 + i)]^4 = 4 x (1+i)^4 = 4 x (-4) = -16
                                                                      correct
```

---

# TOPIC 11 — FINDING ALL THE VALUES OF A FRACTIONAL POWER (the 7-mark question)

## 11.1 The full recipe

```
   To find ALL the values of  ( a + i b )^(p/q)     [ p/q in lowest terms ]

   STEP 1   Write a + ib = r cis t  with r = sqrt(a^2 + b^2) and the
            PRINCIPAL amplitude t (use the quadrant rule).

   STEP 2   Insert the general angle:
                a + ib = r cis( 2k pi + t )       k any integer

   STEP 3   Raise to the power p/q  (De Moivre, rational index):

                            p/q         [ p ( 2k pi + t ) ]
                (a + ib)      =   r     [ cis ------------ ]
                                            [        q       ]
            with the modulus  r^(p/q).

   STEP 4   Put k = 0, 1, 2, ..., q - 1 . That gives exactly q values. STOP.

   STEP 5   Simplify each angle. If it is a standard angle, also write the
            answer in a + ib form. Otherwise leave it as r^(p/q) cis(angle).

   STEP 6   (Free marks) Draw the q points on the Argand plane — a regular
            q-gon of radius r^(p/q).
```

## 11.2 WORKED EXAMPLE — find all the values of `(1 + i)^(1/3)`

```
  STEP 1   1 + i :  a = 1, b = 1, both positive -> Q1
           r = sqrt(1 + 1) = sqrt2
           alpha = tan^-1(1/1) = pi/4 , Q1 so t = pi/4

           1 + i = sqrt2 cis( pi/4 )

  STEP 2   1 + i = sqrt2 cis( 2k pi + pi/4 )

  STEP 3   (1 + i)^(1/3) = (sqrt2)^(1/3) cis( ( 2k pi + pi/4 ) / 3 )

           (sqrt2)^(1/3) = ( 2^(1/2) )^(1/3) = 2^(1/6)

  STEP 4   q = 3 , so k = 0, 1, 2 .

           k = 0 :  ( pi/4 ) / 3            = pi / 12

           k = 1 :  ( 2pi + pi/4 ) / 3      = ( 9pi/4 ) / 3   = 3 pi / 4

           k = 2 :  ( 4pi + pi/4 ) / 3      = ( 17pi/4 ) / 3  = 17 pi / 12

  STEP 5   THE THREE VALUES:

              1/6                    1/6                    1/6
             2    cis( pi/12 ) ,    2    cis( 3pi/4 ) ,    2    cis( 17pi/12 )


           The middle one has a standard angle, so it can be simplified:

              2^(1/6) ( -1/sqrt2 + i/sqrt2 )  =  2^(1/6) . 2^(-1/2) ( -1 + i )
                                              =  2^(-1/3) ( -1 + i )

  CHECK   Cube the middle one:
              [ 2^(1/6) cis(3pi/4) ]^3 = 2^(1/2) cis(9pi/4)
                                       = sqrt2 cis(9pi/4 - 2pi)
                                       = sqrt2 cis(pi/4)  =  1 + i     correct
```

```
   STEP 6   THE PICTURE   -   three points, radius 2^(1/6) = 1.122 ,
                              equally spaced 120 degrees apart.

                            Im
                             ^
                             |
        3pi/4 = 135 deg      |
                    *        |    * pi/12 = 15 deg
                      \      |   /
                        \    |  /
                          \  | /
        -------------------- + ------------------> Re
                             O  \
                                 \
                                  \
                                   * 17pi/12 = 255 deg

        (15 + 120 = 135 ,  135 + 120 = 255 . Correct spacing.)
```

## 11.3 WORKED EXAMPLE — find all the values of `(sqrt3 + i)^(1/4)`

```
   r = sqrt(3 + 1) = 2 ,  Q1 ,  alpha = tan^-1(1/sqrt3) = pi/6  ->  t = pi/6

   sqrt3 + i = 2 cis( 2k pi + pi/6 )

   (sqrt3 + i)^(1/4) = 2^(1/4) cis( ( 2k pi + pi/6 ) / 4 ) ,  k = 0,1,2,3

     k = 0 :  ( pi/6 )/4          = pi / 24
     k = 1 :  ( 2pi + pi/6 )/4    = (13pi/6)/4  = 13 pi / 24
     k = 2 :  ( 4pi + pi/6 )/4    = (25pi/6)/4  = 25 pi / 24
     k = 3 :  ( 6pi + pi/6 )/4    = (37pi/6)/4  = 37 pi / 24

   FOUR VALUES:
       2^(1/4) cis(pi/24) , 2^(1/4) cis(13pi/24) ,
       2^(1/4) cis(25pi/24) , 2^(1/4) cis(37pi/24)

   CHECK the spacing:  13 - 1 = 12 ,  25 - 13 = 12 ,  37 - 25 = 12 ,
   and 12 pi / 24 = pi / 2 = one quarter turn.        correct for n = 4
```

## 11.4 WORKED EXAMPLE — a power on top as well: `(1 + i)^(2/3)`

```
   1 + i = sqrt2 cis( 2k pi + pi/4 )

                2/3          2/3          [  2 ( 2k pi + pi/4 )  ]
   (1 + i)     = (sqrt2)     cis [ ------------------- ]
                                          [          3           ]

   (sqrt2)^(2/3) = ( 2^(1/2) )^(2/3) = 2^(1/3)

   Angles:  2( 2k pi + pi/4 ) / 3  =  ( 4k pi + pi/2 ) / 3

     k = 0 :  ( pi/2 )/3        = pi / 6
     k = 1 :  ( 4pi + pi/2 )/3  = ( 9pi/2 )/3  = 3 pi / 2
     k = 2 :  ( 8pi + pi/2 )/3  = ( 17pi/2 )/3 = 17 pi / 6

   THREE VALUES:  2^(1/3) cis(pi/6) , 2^(1/3) cis(3pi/2) , 2^(1/3) cis(17pi/6)

   In a + ib form:
       2^(1/3)( sqrt3/2 + i/2 )  ,   2^(1/3)( -i )  ,   2^(1/3)( -sqrt3/2 + i/2 )
       [ 17pi/6 - 2pi = 5pi/6 , and cis(5pi/6) = -sqrt3/2 + i/2 ]

   CHECK the second value: [ 2^(1/3) cis(3pi/2) ]^(3/2)  ... easier to check by
   cubing and comparing with (1+i)^2 = 2i :
       [ 2^(1/3) cis(3pi/2) ]^3 = 2 cis(9pi/2) = 2 cis(pi/2) = 2i           correct
```

> **TRAP:** with `p/q = 2/3` the number of values is **q = 3, not 2 and not 6**.
> The denominator alone decides how many answers there are — as long as the
> fraction is in lowest terms. If you are given `(z)^(4/6)`, reduce it to `2/3`
> FIRST, or you will produce six answers when only three are distinct.

---

# TOPIC 12 — SOLVING EQUATIONS OF THE FORM z^n = a + ib

This is Topic 10 with the words changed. "Solve `z^4 = -16`" and "find the fourth
roots of -16" are the same question.

## 12.1 `z^n + 1 = 0`

```
   z^n = -1 = cos pi + i sin pi = cis( 2k pi + pi ) = cis( (2k + 1) pi )

                (2k + 1) pi
   z  =  cis  --------------- ,   k = 0, 1, ..., n-1
                     n
```

Note the difference from the roots of unity: the angles here are the **ODD**
multiples of `pi / n`, so the polygon is the roots-of-unity polygon **rotated by
half a step**, and `z = 1` is never a solution.

```
     z^n = 1   ->   angles   0 , 2pi/n , 4pi/n , ...       (even multiples of pi/n)
     z^n = -1  ->   angles  pi/n , 3pi/n , 5pi/n , ...     (odd  multiples of pi/n)
```

## 12.2 WORKED EXAMPLE — solve `x^4 + 4 = 0`

```
   x^4 = -4 = 4 cis( 2k pi + pi )

   x = 4^(1/4) cis( (2k+1) pi / 4 ) = sqrt2 cis( (2k+1) pi / 4 ) ,  k = 0,1,2,3

     k = 0 :  sqrt2 cis(pi/4)  = sqrt2 ( 1/sqrt2 + i/sqrt2 ) =  1 + i
     k = 1 :  sqrt2 cis(3pi/4) = -1 + i
     k = 2 :  sqrt2 cis(5pi/4) = -1 - i
     k = 3 :  sqrt2 cis(7pi/4) =  1 - i

   SOLUTIONS:   1 + i , -1 + i , -1 - i , 1 - i      i.e.  +/- 1 +/- i

   CHECK: (1 + i)^4 = [ (1+i)^2 ]^2 = (2i)^2 = -4 .  So (1+i)^4 + 4 = 0.  correct

   BONUS (a common follow-up): pairing conjugates gives the real factorisation
        x^4 + 4 = ( x^2 - 2x + 2 )( x^2 + 2x + 2 )
   CHECK by expanding: (x^2+2)^2 - (2x)^2 = x^4 + 4x^2 + 4 - 4x^2 = x^4 + 4  correct
```

## 12.3 WORKED EXAMPLE — solve `(x - 1)^n = x^n` (a full 7-mark question)

```
   First: x = 0 is NOT a solution (it would give (-1)^n = 0). So we may divide.

   Divide both sides by x^n :

        ( (x - 1) / x )^n  =  1

   So (x-1)/x is an nth root of unity:

        ( x - 1 ) / x  =  cis( 2k pi / n )  =  a_k      k = 0, 1, ..., n-1

   k = 0 gives a_0 = 1, i.e. x - 1 = x , i.e. -1 = 0 : IMPOSSIBLE. Discard it.
   So k = 1, 2, ..., n-1 : there are  n - 1  solutions.

   Solve for x .   Write A = 2k pi / n .

        x - 1 = x cis A
        x ( 1 - cis A ) = 1
        x = 1 / ( 1 - cis A )

   Simplify the denominator using the half-angle identities
        1 - cos A = 2 sin^2 (A/2)  and  sin A = 2 sin(A/2) cos(A/2) :

        1 - cis A = 1 - cos A - i sin A
                  = 2 sin^2(A/2) - 2i sin(A/2) cos(A/2)
                  = 2 sin(A/2) [ sin(A/2) - i cos(A/2) ]

   Therefore
                            1
        x = --------------------------------------
             2 sin(A/2) [ sin(A/2) - i cos(A/2) ]

   Multiply top and bottom by [ sin(A/2) + i cos(A/2) ] . The bottom bracket
   becomes sin^2 + cos^2 = 1 :

             sin(A/2) + i cos(A/2)        1     i
        x = ------------------------  =  --- + --- cot( A/2 )
                   2 sin(A/2)             2     2

   CONCLUSION

        +-----------------------------------------------------------+
        |                                                           |
        |         1     i         k pi                              |
        |   x =  --- + --- cot ( ------ ) ,   k = 1, 2, ..., n-1    |
        |         2     2           n                               |
        |                                                           |
        +-----------------------------------------------------------+

   (using A/2 = k pi / n).

   THE FAMOUS CONSEQUENCE: every solution has REAL PART = 1/2 . So all n-1 roots
   lie on the straight line  Re(z) = 1/2 , a line PARALLEL TO THE IMAGINARY AXIS.

   CHECK with n = 2 :  (x-1)^2 = x^2  ->  -2x + 1 = 0  ->  x = 1/2 .
   The formula gives k = 1 only: 1/2 + (i/2) cot(pi/2) = 1/2 + 0 = 1/2.   correct

   CHECK with n = 3 :  (x-1)^3 = x^3  ->  -3x^2 + 3x - 1 = 0  ->  3x^2 - 3x + 1 = 0
        x = ( 3 +/- sqrt(9 - 12) ) / 6 = ( 3 +/- i sqrt3 ) / 6 = 1/2 +/- i/(2 sqrt3)
   The formula: k = 1 -> 1/2 + (i/2)cot(pi/3) = 1/2 + (i/2)(1/sqrt3)      correct
                k = 2 -> 1/2 + (i/2)cot(2pi/3) = 1/2 - (i/2)(1/sqrt3)     correct
```

```
       THE PICTURE (n = 5) : four points on the vertical line Re = 1/2

                       Im
                        ^      | x = 1/2
                        |      |
                        |      * k=1
                        |      |
                        |      * k=2
              ----------+------|-------------> Re
                        O      |
                        |      * k=3
                        |      |
                        |      * k=4
```

---

# TOPIC 13 — THE FIVE BIG BOARD PROOFS

Learn these as complete written answers. One of them is very likely to be your
Section C question.

## 13.1 `(1 + i)^n + (1 - i)^n = 2^((n+2)/2) cos( n pi / 4 )`

```
   1 + i = sqrt2 cis( pi/4 )          [ r = sqrt2 , Q1 , alpha = pi/4 ]
   1 - i = sqrt2 cis( -pi/4 )         [ r = sqrt2 , Q4 , alpha = pi/4 ]

   By De Moivre:
        (1 + i)^n = (sqrt2)^n cis( n pi / 4 ) = 2^(n/2) [ cos(npi/4) + i sin(npi/4) ]
        (1 - i)^n = (sqrt2)^n cis(-n pi / 4 ) = 2^(n/2) [ cos(npi/4) - i sin(npi/4) ]

   ADD.  The i-parts cancel:

        (1+i)^n + (1-i)^n = 2^(n/2) . 2 cos( n pi / 4 )

                          = 2^(n/2 + 1) cos( n pi / 4 )

                          = 2^((n+2)/2) cos( n pi / 4 )              [proved]

   CHECK n = 2 : LHS = 2i + (-2i) = 0 . RHS = 2^2 cos(pi/2) = 0        correct
   CHECK n = 4 : LHS = -4 + (-4) = -8 . RHS = 2^3 cos(pi) = -8         correct
   CHECK n = 8 : LHS = 16 + 16 = 32 . RHS = 2^5 cos(2pi) = 32          correct
```

## 13.2 `(1 + cos t + i sin t)^n + (1 + cos t - i sin t)^n = 2^(n+1) cos^n(t/2) cos(nt/2)`

The trick is the **half-angle factorisation**:

```
   1 + cos t = 2 cos^2 ( t/2 )
       sin t = 2 sin( t/2 ) cos( t/2 )

   So  1 + cos t + i sin t = 2 cos^2(t/2) + 2 i sin(t/2) cos(t/2)

                           = 2 cos(t/2) [ cos(t/2) + i sin(t/2) ]

   and similarly

       1 + cos t - i sin t = 2 cos(t/2) [ cos(t/2) - i sin(t/2) ]

   Raise both to the power n, using De Moivre:

     (1 + cos t + i sin t)^n = 2^n cos^n(t/2) [ cos(nt/2) + i sin(nt/2) ]
     (1 + cos t - i sin t)^n = 2^n cos^n(t/2) [ cos(nt/2) - i sin(nt/2) ]

   ADD.  The imaginary parts cancel:

        = 2^n cos^n(t/2) . 2 cos(nt/2)

        = 2^(n+1) cos^n(t/2) cos( nt/2 )                            [proved]

   CHECK t = 0 : LHS = 2^n + 2^n = 2^(n+1) . RHS = 2^(n+1) . 1 . 1     correct
```

## 13.3 If `alpha, beta` are the roots of `x^2 - 2x + 4 = 0`, show `alpha^n + beta^n = 2^(n+1) cos(n pi / 3)`

```
   Solve the quadratic:

        x = ( 2 +/- sqrt(4 - 16) ) / 2 = ( 2 +/- sqrt(-12) ) / 2
          = ( 2 +/- 2 i sqrt3 ) / 2
          = 1 +/- i sqrt3

   So   alpha = 1 + i sqrt3 ,  beta = 1 - i sqrt3 .

   Polar form:  r = sqrt(1 + 3) = 2 ,  alpha is in Q1 with tan^-1(sqrt3) = pi/3

        alpha = 2 cis( pi/3 )      beta = 2 cis( -pi/3 )

   De Moivre:
        alpha^n = 2^n [ cos(n pi/3) + i sin(n pi/3) ]
        beta^n  = 2^n [ cos(n pi/3) - i sin(n pi/3) ]

   Add:
        alpha^n + beta^n = 2^n . 2 cos( n pi / 3 ) = 2^(n+1) cos( n pi / 3 )
                                                                       [proved]

   CHECK n = 1 : LHS = (1+i sqrt3) + (1-i sqrt3) = 2 .
                 RHS = 2^2 cos(pi/3) = 4 x 1/2 = 2                      correct
   CHECK n = 2 : alpha^2 = (1+i sqrt3)^2 = 1 + 2i sqrt3 - 3 = -2 + 2i sqrt3
                 beta^2  = -2 - 2i sqrt3 ,  sum = -4 .
                 RHS = 2^3 cos(2pi/3) = 8 x (-1/2) = -4                 correct
```

> The same proof works for `x^2 + 2x + 4 = 0` (roots `-1 +/- i sqrt3 = 2 cis(+/-2pi/3)`,
> answer `2^(n+1) cos(2 n pi / 3)`) and for `x^2 - 2x + 2 = 0` (roots `1 +/- i`,
> answer `2^((n+2)/2) cos(n pi/4)`). Recognise the shape, not the numbers.

## 13.4 One value of `[ (1 + sin t + i cos t) / (1 + sin t - i cos t) ]^n` is `cos n(pi/2 - t) + i sin n(pi/2 - t)`

```
   Let  A = pi/2 - t .   Then  sin t = cos A  and  cos t = sin A .

   Numerator:
        1 + sin t + i cos t = 1 + cos A + i sin A
                            = 2 cos^2(A/2) + 2i sin(A/2) cos(A/2)
                            = 2 cos(A/2) [ cos(A/2) + i sin(A/2) ]

   Denominator:
        1 + sin t - i cos t = 2 cos(A/2) [ cos(A/2) - i sin(A/2) ]

   Divide (the 2 cos(A/2) cancels):

        ratio = [ cos(A/2) + i sin(A/2) ] / [ cos(A/2) - i sin(A/2) ]

   Multiply top and bottom by [ cos(A/2) + i sin(A/2) ] :

              [ cos(A/2) + i sin(A/2) ]^2       cis(A)
        =  ----------------------------------  = -------- = cis A
              cos^2(A/2) + sin^2(A/2)              1

   So the ratio is simply  cis A = cis( pi/2 - t ) .

   Raise to the power n (De Moivre):

        ratio^n = cis( n(pi/2 - t) ) = cos n(pi/2 - t) + i sin n(pi/2 - t)
                                                                       [proved]
```

> If n is a fraction, the word "**one of the values**" in the question matters:
> you have found the k = 0 value, and there are q of them altogether. Say so.

## 13.5 If `cos a + cos b + cos c = 0` and `sin a + sin b + sin c = 0`, prove the four standard results

```
   Let  x = cis a ,  y = cis b ,  z = cis c .   Each has modulus 1.

   Then  x + y + z = (cos a + cos b + cos c) + i (sin a + sin b + sin c)
                   = 0 + i(0) = 0 .

   Also, since 1/x = x bar = cos a - i sin a  and so on,

         1/x + 1/y + 1/z = (cos a + cos b + cos c) - i(sin a + sin b + sin c) = 0

   and multiplying by xyz :        yz + zx + xy = 0 .


   RESULT 1 and 2 :   x + y + z = 0   =>   x^3 + y^3 + z^3 = 3 x y z

        (the standard identity a^3+b^3+c^3-3abc = (a+b+c)(...) with a+b+c = 0)

        LHS = cis 3a + cis 3b + cis 3c
        RHS = 3 cis(a + b + c)

        Equate REAL parts:   cos 3a + cos 3b + cos 3c = 3 cos(a + b + c)
        Equate IMAG parts:   sin 3a + sin 3b + sin 3c = 3 sin(a + b + c)


   RESULT 3 :   x^2 + y^2 + z^2 = (x+y+z)^2 - 2(xy + yz + zx) = 0 - 0 = 0

        So  cis 2a + cis 2b + cis 2c = 0 , and equating real parts

             cos 2a + cos 2b + cos 2c = 0
             ( and likewise  sin 2a + sin 2b + sin 2c = 0 )

        Now use cos 2a = 2 cos^2 a - 1 :

             2( cos^2 a + cos^2 b + cos^2 c ) - 3 = 0

             cos^2 a + cos^2 b + cos^2 c = 3/2

        And since cos^2 + sin^2 = 1 for each angle (total 3),

             sin^2 a + sin^2 b + sin^2 c = 3 - 3/2 = 3/2


   RESULT 4 :   xy + yz + zx = 0  reads

             cis(a+b) + cis(b+c) + cis(c+a) = 0

        Equating real parts:  cos(a+b) + cos(b+c) + cos(c+a) = 0
                                                                       [proved]
```

```
   SANITY CHECK with a = 0 , b = 2pi/3 , c = 4pi/3 (the cube roots of unity):
      cos sum = 1 - 1/2 - 1/2 = 0 , sin sum = 0 + sqrt3/2 - sqrt3/2 = 0 . Good.
      cos^2 sum = 1 + 1/4 + 1/4 = 3/2                                   correct
      cos 3a + cos 3b + cos 3c = cos 0 + cos 2pi + cos 4pi = 3 ,
      and 3 cos(a+b+c) = 3 cos(2pi) = 3                                 correct
```

---

# TOPIC 14 — TRIANGLE-ANGLE PROBLEMS (a common 4-marker)

If `A, B, C` are the angles of a triangle then `A + B + C = pi`. Put
`x = cis A`, `y = cis B`, `z = cis C`. Then:

```
   x y z = cis( A + B + C ) = cis( pi ) = -1

   x/y + y/x = cis(A - B) + cis(B - A) = 2 cos(A - B)

   x y + 1/(x y) = cis(A + B) + cis(-(A+B)) = 2 cos(A + B) = -2 cos C

   x^2 y^2 z^2 + 1 / ( x^2 y^2 z^2 ) = (xyz)^2 + 1/(xyz)^2 = 1 + 1 = 2
```

Each of those is a complete 2- or 4-mark answer once you write `xyz = cis(pi) = -1`.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I convert to r ( cos t + i sin t ) BEFORE powering or rooting?

  [ ]  Did I use the QUADRANT RULE for the amplitude, not just tan^-1(y/x)?

  [ ]  Did I rewrite every  cos t - i sin t  as  cis(-t) ?

  [ ]  In a ROOT question, did I put in the  2k pi  before dividing?

  [ ]  Did I list ALL q values with k = 0, 1, ..., q-1 and then STOP?

  [ ]  Is my fraction p/q in LOWEST TERMS? (4/6 must become 2/3.)

  [ ]  Did I reduce every final angle to lie between -pi and pi
       (or at least say what it simplifies to)?

  [ ]  For a "find all values" question, did I DRAW the regular polygon?

  [ ]  For an omega question, did I use  1 + w + w^2 = 0  and  w^3 = 1 ,
       and reduce the power of w by the remainder on division by 3?

  [ ]  Did I quote  SUM = 0  and  PRODUCT = (-1)^(n+1)  where relevant?

  [ ]  Did I CHECK one root by raising it back to the power n?

  [ ]  Did I write the theorem's statement at the top of a proof question?
       ("By De Moivre's theorem, (cos t + i sin t)^n = cos nt + i sin nt.")
       That sentence alone is often worth a mark.
```

---

# THE FIVE MISTAKES THAT COST THE MOST MARKS

```
  1.  Forgetting 2k pi.        Gives one root instead of n. Costs 4-5 marks
                               of a 7-mark question.

  2.  cos t - i sin t          Treating it as cis(t). It is cis(-t).
                               Flips the sign of the whole answer.

  3.  Wrong quadrant.          tan^-1 gives the same value for two opposite
                               points. Plot the point first.

  4.  Not reducing p/q.        Produces repeated values and a wrong count.

  5.  Stopping at k = q.       k = q duplicates k = 0. Extra work, and it
                               shows you have not understood the theorem.
```
