# Trigonometric Equations — Formula Sheet

**Maths 1A · Chapter 7**

The good news about this chapter: there are only **seven** general-solution
formulas. Everything else is Chapter 6 machinery being reused.

Copy this sheet by hand into a notebook. Writing it once beats reading it ten
times. The "When to use" column is what the exam actually tests.

In **every** formula on this page, `n` is an **INTEGER**:
`n = 0, +1, -1, +2, -2, +3, -3, ...`
Leaving out the words *"where n is an integer"* costs marks every single time.

---

# 1. THE VOCABULARY

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |  IDENTITY           true for EVERY value of the angle.          |
  |                     e.g.  sin^2 A + cos^2 A = 1                 |
  |                     You PROVE an identity.                      |
  |                                                                 |
  |  TRIGONOMETRIC      true only for CERTAIN values of the angle.  |
  |  EQUATION           e.g.  sin A = 1/2                           |
  |                     You SOLVE an equation.                      |
  |                                                                 |
  |  SOLUTION           any angle that satisfies the equation.      |
  |                                                                 |
  |  PRINCIPAL          the one solution lying in the principal     |
  |  SOLUTION           range of that ratio. It is UNIQUE.          |
  |                                                                 |
  |  GENERAL            the formula, containing n, that gives ALL   |
  |  SOLUTION           the solutions and nothing else.             |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Term | When to use |
|---|---|
| identity | question says "prove that ..." |
| equation | question says "solve ..." or "find theta such that ..." |
| principal solution / principal value | question says "principal solution" or "principal value" |
| general solution | question says "find the general solution" or just "solve" |

---

# 2. PRINCIPAL RANGES (where the principal solution must live)

```
  +--------------------+---------------------------+--------------------+
  |  Equation          |  PRINCIPAL RANGE          |  In degrees        |
  +--------------------+---------------------------+--------------------+
  |  sin theta = k     |  [ -pi/2 , pi/2 ]         |  -90 to 90         |
  |  cos theta = k     |  [ 0 , pi ]               |    0 to 180        |
  |  tan theta = k     |  ( -pi/2 , pi/2 )  OPEN   |  -90 to 90 (open)  |
  +--------------------+---------------------------+--------------------+

  Condition on k :   |k| <= 1  for sin and cos.
                     k may be ANY real number for tan.
```

| Rule | When to use |
|---|---|
| sin theta = -k gives a NEGATIVE alpha | any negative sine value |
| cos theta = -k gives alpha in the SECOND quadrant | any negative cosine value |
| tan theta = -k gives a NEGATIVE alpha | any negative tangent value |
| "the principal solution" (singular) | use the ranges above |
| "the principal solutionS" (plural, some books) | list every solution in [0, 2 pi) |

---

# 3. THE THREE ZERO EQUATIONS

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    sin theta  =  0     <=>     theta  =  n pi                   |
  |                                                                 |
  |    cos theta  =  0     <=>     theta  =  ( 2 n + 1 ) pi / 2     |
  |                                                                 |
  |    tan theta  =  0     <=>     theta  =  n pi                   |
  |                                                                 |
  |    cot theta  =  0     <=>     theta  =  ( 2 n + 1 ) pi / 2     |
  |                                                                 |
  |    sec theta and cosec theta are NEVER zero -> no solution.     |
  |                                                                 |
  |    Condition: none needed for sin and cos.                      |
  |    For tan, cos theta must not be 0 - automatic here.           |
  |    For cot, sin theta must not be 0 - automatic here.           |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| sin theta = 0 -> n pi | after factorising, whenever a sine factor appears |
| cos theta = 0 -> (2n+1) pi/2 | after factorising, whenever a cosine factor appears |
| tan theta = 0 -> n pi | tan factor equal to zero |
| **NOT** n pi/2 for cos theta = 0 | the classic wrong answer — you need the (2n+1) |

---

# 4. THE THREE FUNDAMENTAL GENERAL SOLUTIONS

## THE MAIN BOX — learn this stone cold

```
  +===================================================================+
  ||                                                                 ||
  ||   1.   sin theta = sin alpha                                    ||
  ||                                                                 ||
  ||             theta  =  n pi  +  (-1)^n  alpha                    ||
  ||                                                                 ||
  ||        CONDITION:  |sin alpha| <= 1 ;  take alpha in            ||
  ||                    [ -pi/2 , pi/2 ]                             ||
  ||                                                                 ||
  ||-----------------------------------------------------------------||
  ||                                                                 ||
  ||   2.   cos theta = cos alpha                                    ||
  ||                                                                 ||
  ||             theta  =  2 n pi  +-  alpha                         ||
  ||                                                                 ||
  ||        CONDITION:  |cos alpha| <= 1 ;  take alpha in [ 0 , pi ] ||
  ||                                                                 ||
  ||-----------------------------------------------------------------||
  ||                                                                 ||
  ||   3.   tan theta = tan alpha                                    ||
  ||                                                                 ||
  ||             theta  =  n pi  +  alpha                            ||
  ||                                                                 ||
  ||        CONDITION:  cos theta != 0 AND cos alpha != 0 ;          ||
  ||                    take alpha in ( -pi/2 , pi/2 )               ||
  ||                                                                 ||
  ||-----------------------------------------------------------------||
  ||                                                                 ||
  ||   4.   sin^2 theta = sin^2 alpha                                ||
  ||        cos^2 theta = cos^2 alpha        ALL THREE give          ||
  ||        tan^2 theta = tan^2 alpha                                ||
  ||                                                                 ||
  ||             theta  =  n pi  +-  alpha                           ||
  ||                                                                 ||
  ||        CONDITION: for the tan^2 version, cos theta != 0         ||
  ||                   and cos alpha != 0                            ||
  ||                                                                 ||
  ||   In all of the above,  n is an INTEGER.                        ||
  ||                                                                 ||
  +===================================================================+
```

| Formula | When to use |
|---|---|
| theta = n pi + (-1)^n alpha | the equation has been reduced to **sin theta = something** |
| theta = 2 n pi +- alpha | reduced to **cos theta = something** |
| theta = n pi + alpha | reduced to **tan theta = something** (also cot, after flipping) |
| theta = n pi +- alpha | the ratio is **squared**: sin^2, cos^2 or tan^2 = a number |

## MEMORY HOOKS

```
     sin  ->  n pi + (-1)^n alpha      "SINE has the SIGN FLIPPER"
     cos  ->  2 n pi  +-  alpha        "COS has the 2 and the plus-minus"
     tan  ->  n pi  +  alpha           "TAN is the SIMPLEST - nothing extra"
     ^2   ->  n pi  +-  alpha          "A SQUARE forgets which sign it was"
```

## WHAT THE (-1)^n MEANS

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   (-1)^n  =  + 1   when n is EVEN   ->   theta = 2 m pi + alpha |
  |   (-1)^n  =  - 1   when n is ODD    ->   theta = (2m+1)pi - al  |
  |                                                                 |
  |   EVEN n  gives  ALPHA itself, plus whole turns                 |
  |   ODD  n  gives  the SUPPLEMENT (pi - alpha), plus whole turns  |
  |                                                                 |
  |   That is right, because  sin( pi - alpha ) = sin alpha .       |
  +-----------------------------------------------------------------+

  Unfolded for  sin theta = sin(pi/6) :

     n  =  -2      -1       0        1        2        3
   theta = -2pi+al  -pi-al   al     pi-al   2pi+al   3pi-al
   (deg) =  -330    -210     30      150      390      510

  Every one of those has sine = 1/2 .
```

---

# 5. THE SPECIAL VALUES — instant answers, no working needed

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |    sin theta =  1     <=>   theta = 2 n pi  +  pi / 2           |
  |    sin theta = -1     <=>   theta = 2 n pi  -  pi / 2           |
  |    sin theta =  0     <=>   theta = n pi                        |
  |                                                                 |
  |    cos theta =  1     <=>   theta = 2 n pi                      |
  |    cos theta = -1     <=>   theta = ( 2 n + 1 ) pi              |
  |    cos theta =  0     <=>   theta = ( 2 n + 1 ) pi / 2          |
  |                                                                 |
  |    sin^2 theta = 1    <=>   theta = ( 2 n + 1 ) pi / 2          |
  |    cos^2 theta = 1    <=>   theta = n pi                        |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Fact | When to use |
|---|---|
| sin theta = 1 -> 2 n pi + pi/2 | never write n pi + (-1)^n pi/2 — it is correct but ugly |
| cos theta = -1 -> (2n+1) pi | a quadratic gave you the root -1 |
| |sin|, |cos| never exceed 1 | REJECT any root outside [-1, 1] and say so |
| |sec|, |cosec| never below 1 | sec theta = 0.4 has NO solution |
| tan, cot take every real value | never reject a tan root for size |

---

# 6. GENERAL SOLUTION QUICK-REFERENCE (memorise the alphas)

## Sine

| Equation | alpha | GENERAL SOLUTION |
|---|---|---|
| sin theta = 0 | 0 | theta = n pi |
| sin theta = 1/2 | pi/6 | theta = n pi + (-1)^n pi/6 |
| sin theta = 1/sqrt2 | pi/4 | theta = n pi + (-1)^n pi/4 |
| sin theta = sqrt3/2 | pi/3 | theta = n pi + (-1)^n pi/3 |
| sin theta = 1 | pi/2 | theta = 2 n pi + pi/2 |
| sin theta = -1/2 | -pi/6 | theta = n pi - (-1)^n pi/6 |
| sin theta = -1/sqrt2 | -pi/4 | theta = n pi - (-1)^n pi/4 |
| sin theta = -sqrt3/2 | -pi/3 | theta = n pi - (-1)^n pi/3 |
| sin theta = -1 | -pi/2 | theta = 2 n pi - pi/2 |

## Cosine

| Equation | alpha | GENERAL SOLUTION |
|---|---|---|
| cos theta = 1 | 0 | theta = 2 n pi |
| cos theta = sqrt3/2 | pi/6 | theta = 2 n pi +- pi/6 |
| cos theta = 1/sqrt2 | pi/4 | theta = 2 n pi +- pi/4 |
| cos theta = 1/2 | pi/3 | theta = 2 n pi +- pi/3 |
| cos theta = 0 | pi/2 | theta = (2n + 1) pi/2 |
| cos theta = -1/2 | 2pi/3 | theta = 2 n pi +- 2pi/3 |
| cos theta = -1/sqrt2 | 3pi/4 | theta = 2 n pi +- 3pi/4 |
| cos theta = -sqrt3/2 | 5pi/6 | theta = 2 n pi +- 5pi/6 |
| cos theta = -1 | pi | theta = (2n + 1) pi |

## Tangent

| Equation | alpha | GENERAL SOLUTION |
|---|---|---|
| tan theta = 0 | 0 | theta = n pi |
| tan theta = 1/sqrt3 | pi/6 | theta = n pi + pi/6 |
| tan theta = 1 | pi/4 | theta = n pi + pi/4 |
| tan theta = sqrt3 | pi/3 | theta = n pi + pi/3 |
| tan theta = -1/sqrt3 | -pi/6 | theta = n pi - pi/6 |
| tan theta = -1 | -pi/4 | theta = n pi - pi/4 |
| tan theta = -sqrt3 | -pi/3 | theta = n pi - pi/3 |
| tan theta = k (not standard) | Arctan k | theta = n pi + Arctan k |

## Squares

| Equation | alpha | GENERAL SOLUTION |
|---|---|---|
| sin^2 theta = 1/4 | pi/6 | theta = n pi +- pi/6 |
| sin^2 theta = 1/2 | pi/4 | theta = n pi +- pi/4 |
| sin^2 theta = 3/4 | pi/3 | theta = n pi +- pi/3 |
| cos^2 theta = 3/4 | pi/6 | theta = n pi +- pi/6 |
| cos^2 theta = 1/2 | pi/4 | theta = n pi +- pi/4 |
| cos^2 theta = 1/4 | pi/3 | theta = n pi +- pi/3 |
| tan^2 theta = 1/3 | pi/6 | theta = n pi +- pi/6 |
| tan^2 theta = 1 | pi/4 | theta = n pi +- pi/4 |
| tan^2 theta = 3 | pi/3 | theta = n pi +- pi/3 |
| sec^2 theta = 4 | pi/3 | (cos^2 = 1/4) theta = n pi +- pi/3 |
| cosec^2 theta = 2 | pi/4 | (sin^2 = 1/2) theta = n pi +- pi/4 |

---

# 7. WHEN THE ANGLE IS k theta (a multiple)

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   RULE:  solve for the WHOLE angle first, then divide the       |
  |          ENTIRE general solution by k at the very END.          |
  |                                                                 |
  |   sin k theta = sin alpha   ->   k theta = n pi + (-1)^n alpha  |
  |                             ->   theta = [ n pi + (-1)^n al ]/k |
  |                                                                 |
  |   cos k theta = cos alpha   ->   theta = [ 2 n pi +- alpha ]/k  |
  |                                                                 |
  |   tan k theta = tan alpha   ->   theta = [ n pi + alpha ]/k     |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Example | GENERAL SOLUTION |
|---|---|
| sin 2 theta = 0 | theta = n pi / 2 |
| sin 2 theta = 1/2 | theta = n pi/2 + (-1)^n pi/12 |
| sin 3 theta = 0 | theta = n pi / 3 |
| cos 2 theta = 0 | theta = (2n + 1) pi / 4 |
| cos 3 theta = 0 | theta = (2n + 1) pi / 6 |
| cos 2 theta = 1/2 | theta = n pi +- pi/6 |
| tan 2 theta = 1 | theta = n pi/2 + pi/8 |
| tan 3 theta = sqrt3 | theta = n pi/3 + pi/9 |
| sin 2 theta = 1 | theta = n pi + pi/4 |

> **TRAP:** `cos 3 theta = 0` does **not** give `theta = (2n+1) pi/2`.
> Divide the whole thing by 3: `theta = (2n+1) pi/6`.

---

# 8. a cos theta + b sin theta = c  (the exam favourite)

```
  +=================================================================+
  ||                                                               ||
  ||   Let    r  =  sqrt( a^2 + b^2 )                              ||
  ||                                                               ||
  ||   EXISTENCE CONDITION                                         ||
  ||                                                               ||
  ||          | c |  <=  sqrt( a^2 + b^2 )                         ||
  ||                                                               ||
  ||   equivalently     c^2  <=  a^2 + b^2                         ||
  ||                                                               ||
  ||   If this FAILS, write "no solution" and stop.                ||
  ||                                                               ||
  ||---------------------------------------------------------------||
  ||                                                               ||
  ||   THE SUBSTITUTION                                            ||
  ||                                                               ||
  ||        a = r cos alpha ,      b = r sin alpha                 ||
  ||                                                               ||
  ||        so    tan alpha  =  b / a                              ||
  ||                                                               ||
  ||        a cos th + b sin th  =  r cos( theta - alpha )         ||
  ||                                                               ||
  ||   THE EQUATION BECOMES                                        ||
  ||                                                               ||
  ||        cos( theta - alpha )  =  c / r                         ||
  ||                                                               ||
  ||   Write  c/r = cos beta .  Then                               ||
  ||                                                               ||
  ||        theta - alpha  =  2 n pi  +-  beta                     ||
  ||                                                               ||
  ||        THETA  =  2 n pi  +-  beta  +  alpha                   ||
  ||                                                               ||
  +=================================================================+
```

## The sine version (use whichever makes alpha standard)

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   a cos theta + b sin theta  =  r sin( theta + alpha )          |
  |                                                                 |
  |        with   sin alpha = a / r ,   cos alpha = b / r           |
  |                                                                 |
  |        so     tan alpha = a / b                                 |
  |                                                                 |
  |   Then  sin( theta + alpha ) = c / r  = sin beta                |
  |                                                                 |
  |        theta = n pi + (-1)^n beta  -  alpha                     |
  |                                                                 |
  +-----------------------------------------------------------------+
```

## The consequences you must be able to quote

| Result | When to use |
|---|---|
| max of a cos th + b sin th = **+ sqrt(a^2 + b^2)** | "find the maximum value" |
| min of a cos th + b sin th = **- sqrt(a^2 + b^2)** | "find the minimum value" |
| solution exists iff c^2 <= a^2 + b^2 | every question of this type |
| a cos th + b sin th = c has NO solution if c^2 > a^2 + b^2 | "show that ... has no solution" |
| range of k for which ... = k is solvable: -r <= k <= r | "find the values of k" |

## Worked pattern (memorise the shape)

```
      sqrt3 cos theta + sin theta = 1

      r = sqrt(3 + 1) = 2 .   |1| <= 2 , so a solution exists.

      Divide by 2 :  (sqrt3/2) cos th + (1/2) sin th = 1/2

                     cos(pi/6) cos th + sin(pi/6) sin th = 1/2

                     cos( theta - pi/6 ) = 1/2 = cos( pi/3 )

                     theta - pi/6 = 2 n pi +- pi/3

                     theta = 2 n pi + pi/2      or      2 n pi - pi/6
```

## The common r values — recognise them instantly

| a , b | r = sqrt(a^2+b^2) | alpha (from tan alpha = b/a) |
|---|---|---|
| 1 , 1 | sqrt2 | pi/4 |
| sqrt3 , 1 | 2 | pi/6 |
| 1 , sqrt3 | 2 | pi/3 |
| 3 , 4 | 5 | Arctan(4/3) |
| 5 , 12 | 13 | Arctan(12/5) |
| 1 , -1 | sqrt2 | -pi/4 |

---

# 9. THE CHAPTER-6 TOOLS YOU WILL NEED

You cannot solve these equations without these. They are the tools, not the
answers.

## 9.1 The Pythagorean identities (used to reduce to ONE ratio)

```
  +-----------------------------------------------------------------+
  |     sin^2 A + cos^2 A = 1        ->  sin^2 A = 1 - cos^2 A      |
  |                                  ->  cos^2 A = 1 - sin^2 A      |
  |                                                                 |
  |     1 + tan^2 A = sec^2 A        ->  sec^2 A - tan^2 A = 1      |
  |     1 + cot^2 A = cosec^2 A      ->  cosec^2 A - cot^2 A = 1    |
  +-----------------------------------------------------------------+
```

| Identity | When to use |
|---|---|
| cos^2 = 1 - sin^2 | the equation has sin to the first power and cos squared |
| sin^2 = 1 - cos^2 | the equation has cos to the first power and sin squared |
| sec^2 = 1 + tan^2 | after dividing a "degree-2" equation by cos^2 |
| cosec^2 = 1 + cot^2 | the equation is all cot and cosec |

## 9.2 Double and triple angle (used to unify the angles)

```
  +-----------------------------------------------------------------+
  |     sin 2A = 2 sin A cos A                                      |
  |                                                                 |
  |     cos 2A = cos^2 A - sin^2 A                                  |
  |            = 2 cos^2 A - 1          <- use when the equation    |
  |            = 1 - 2 sin^2 A             has cos A in it          |
  |                       1 - tan^2 A   <- use when it has sin A    |
  |            = ---------------------                              |
  |                       1 + tan^2 A                               |
  |                                                                 |
  |                2 tan A                                          |
  |     tan 2A = -----------                                        |
  |               1 - tan^2 A                                       |
  |                                                                 |
  |     sin 3A = 3 sin A - 4 sin^3 A                                |
  |     cos 3A = 4 cos^3 A - 3 cos A                                |
  |                                                                 |
  |     1 - cos 2A = 2 sin^2 A          1 + cos 2A = 2 cos^2 A      |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| cos 2A = 1 - 2 sin^2 A | equation mixes cos 2x with sin x |
| cos 2A = 2 cos^2 A - 1 | equation mixes cos 2x with cos x |
| sin 2A = 2 sinA cosA | equation mixes sin 2x with sin x or cos x — then FACTORISE |
| 1 - cos 2A = 2 sin^2 A | to remove a lone "1 - cos" |

## 9.3 Transformations — SUM into PRODUCT (the factorising engine)

```
  +-----------------------------------------------------------------+
  |                       C + D           C - D                     |
  |     sin C + sin D = 2 sin -----  cos  -----                     |
  |                             2            2                      |
  |                                                                 |
  |                       C + D           C - D                     |
  |     sin C - sin D = 2 cos -----  sin  -----                     |
  |                             2            2                      |
  |                                                                 |
  |                       C + D           C - D                     |
  |     cos C + cos D = 2 cos -----  cos  -----                     |
  |                             2            2                      |
  |                                                                 |
  |                         C + D           C - D                   |
  |     cos C - cos D = -2 sin -----  sin  -----                    |
  |                              2            2                     |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| sinC + sinD | `sin th + sin 2th + sin 3th = 0` — pair the OUTER two |
| cosC + cosD | `cos th + cos 2th + cos 3th = 0` — pair the OUTER two |
| sinC - sinD | `sin 4th = sin 2th` — bring to one side first |
| cosC - cosD | `cos 5th = cos th` — bring to one side first |

## 9.4 PRODUCT into SUM

```
  +-----------------------------------------------------------------+
  |     2 sin A cos B  =  sin(A + B)  +  sin(A - B)                 |
  |     2 cos A sin B  =  sin(A + B)  -  sin(A - B)                 |
  |     2 cos A cos B  =  cos(A + B)  +  cos(A - B)                 |
  |     2 sin A sin B  =  cos(A - B)  -  cos(A + B)                 |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| 2 sinA sinB = cos(A-B) - cos(A+B) | `4 sin th sin 2th sin 4th = sin 3th` |
| 2 cosA cosB | a product of two cosines set equal to something |

## 9.5 Compound angles and the tan combination

```
  +-----------------------------------------------------------------+
  |     sin( A +- B ) = sinA cosB  +-  cosA sinB                    |
  |     cos( A +- B ) = cosA cosB  -+  sinA sinB                    |
  |                                                                 |
  |                       tan A  +-  tan B                          |
  |     tan( A +- B ) = --------------------                        |
  |                       1  -+  tanA tanB                          |
  |                                                                 |
  |     so:   tanA + tanB = tan(A + B) ( 1 - tanA tanB )            |
  |                                                                 |
  |     and:  if A + B + C = n pi  then                             |
  |               tanA + tanB + tanC = tanA . tanB . tanC           |
  +-----------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| sin(A - B) = sinA cosB - cosA sinB | deriving tan th = tan al |
| tanA + tanB = tan(A+B)(1 - tanA tanB) | `tan th + tan 2th + k tan th tan 2th = k` |
| sin A = cos(pi/2 - A) | the equation has a sin on one side, a cos on the other |
| cos A = sin(pi/2 - A) | same, the other way round |

## 9.6 Converting between sin and cos

```
  +-----------------------------------------------------------------+
  |     sin A = cos( pi/2 - A )         cos A = sin( pi/2 - A )     |
  |                                                                 |
  |     sin A = cos B   =>   A + B = pi/2   (for acute A and B)     |
  |                                                                 |
  |     tan A = cot B   =>   A + B = pi/2   (for acute A and B)     |
  +-----------------------------------------------------------------+
```

---

# 10. REJECTION RULES — the marks that get thrown away

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   REJECT a value of sin theta or cos theta outside [-1, 1] .    |
  |          Say WHY in words on the paper.                         |
  |                                                                 |
  |   REJECT a value of sec theta or cosec theta inside (-1, 1) .   |
  |                                                                 |
  |   NEVER reject a value of tan theta or cot theta for size -     |
  |          they take every real value.                            |
  |                                                                 |
  |   IF the original equation contains tan or sec :                |
  |          throw out every root with cos theta = 0 .              |
  |                                                                 |
  |   IF the original equation contains cot or cosec :              |
  |          throw out every root with sin theta = 0 .              |
  |                                                                 |
  |   IF you SQUARED anywhere :                                     |
  |          substitute EVERY root back into the ORIGINAL equation  |
  |          and keep only the ones that work.                      |
  |                                                                 |
  |   NEVER CANCEL a trigonometric factor. FACTORISE instead.       |
  |          Cancelling cos theta deletes the whole family          |
  |          theta = (2n+1) pi/2 .                                  |
  |                                                                 |
  +-----------------------------------------------------------------+
```

---

# 11. SIMULTANEOUS EQUATIONS

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   Two equations, ONE angle:                                     |
  |                                                                 |
  |   1. Solve each separately; list the values in [0, 2 pi).       |
  |   2. Take the value COMMON to both lists. Call it beta.         |
  |      (ASTC decides the quadrant from the two signs.)            |
  |   3. General solution:      theta = 2 n pi + beta               |
  |                                                                 |
  |   ALWAYS 2 n pi , because sin and cos only repeat after a       |
  |   FULL turn. Do NOT write n pi even if one equation was tan.    |
  |                                                                 |
  |   If the two lists have nothing in common -> NO SOLUTION.       |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Given | Quadrant | Answer |
|---|---|---|
| sin th = 1/2 , cos th = sqrt3/2 | I | theta = 2 n pi + pi/6 |
| sin th = 1/2 , cos th = -sqrt3/2 | II | theta = 2 n pi + 5pi/6 |
| sin th = -1/2 , cos th = -sqrt3/2 | III | theta = 2 n pi + 7pi/6 |
| sin th = -1/2 , cos th = sqrt3/2 | IV | theta = 2 n pi + 11pi/6 |
| tan th = -1 , cos th = 1/sqrt2 | IV | theta = 2 n pi + 7pi/4 |
| sin th = 1/2 , cos th = 1/2 | — | NO SOLUTION |

---

# 12. FINDING THE ROOTS IN A GIVEN INTERVAL

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |   1. Write the GENERAL solution first. Always.                  |
  |   2. One family at a time.                                      |
  |   3. Put n = 0, 1, 2, 3, ... until you overshoot the right end. |
  |   4. Put n = -1, -2, ... until you overshoot the left end.      |
  |   5. Keep only what is inside; mind < versus <= .               |
  |   6. Sort into increasing order.                                |
  |   7. Drop any value that makes a tan/sec/cot/cosec undefined.   |
  |                                                                 |
  +-----------------------------------------------------------------+
```

| Interval | In degrees | Typical count for sin theta = 1/2 |
|---|---|---|
| [0, pi] | 0 to 180 | 2 (30, 150) |
| [0, 2 pi] | 0 to 360 | 2 (30, 150) |
| [0, 3 pi] | 0 to 540 | 4 (30, 150, 390, 510) |
| [-pi, pi] | -180 to 180 | 2 (30, 150) |

---

# 13. THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +=================================================================+
  ||                                                               ||
  ||   n is an INTEGER in every line.                              ||
  ||                                                               ||
  ||    1.  sin theta = 0        ->   theta = n pi                 ||
  ||                                                               ||
  ||    2.  cos theta = 0        ->   theta = (2n + 1) pi / 2      ||
  ||                                                               ||
  ||    3.  tan theta = 0        ->   theta = n pi                 ||
  ||                                                               ||
  ||    4.  sin th = sin al      ->   theta = n pi + (-1)^n al     ||
  ||                                                               ||
  ||    5.  cos th = cos al      ->   theta = 2 n pi +- al         ||
  ||                                                               ||
  ||    6.  tan th = tan al      ->   theta = n pi + al            ||
  ||                                                               ||
  ||    7.  sin^2 / cos^2 / tan^2 equal   ->  theta = n pi +- al   ||
  ||                                                               ||
  ||    8.  a cos th + b sin th = c  needs  c^2 <= a^2 + b^2       ||
  ||        then divide by sqrt(a^2 + b^2) and compress to         ||
  ||        cos( theta - alpha ) = c / sqrt(a^2 + b^2)             ||
  ||                                                               ||
  ||    9.  max / min of a cos th + b sin th = +- sqrt(a^2 + b^2)  ||
  ||                                                               ||
  ||   10.  sinC + sinD = 2 sin((C+D)/2) cos((C-D)/2)              ||
  ||        cosC + cosD = 2 cos((C+D)/2) cos((C-D)/2)              ||
  ||                                                               ||
  ||   11.  sin^2 A + cos^2 A = 1   ,   1 + tan^2 A = sec^2 A      ||
  ||                                                               ||
  ||   12.  Principal ranges:                                      ||
  ||           sin : [-pi/2, pi/2]                                 ||
  ||           cos : [0, pi]                                       ||
  ||           tan : (-pi/2, pi/2)                                 ||
  ||                                                               ||
  +=================================================================+
```

## And the three habits that are worth more than any formula

```
   1.  Write " where n is an integer " at the end of every answer.
   2.  FACTORISE - never cancel.
   3.  Substitute one root back into the ORIGINAL equation before you
       move on. Twenty seconds. It has saved more marks than anything
       else in this file.
```
