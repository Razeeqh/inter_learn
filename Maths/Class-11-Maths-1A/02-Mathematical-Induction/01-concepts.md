# Mathematical Induction — Concepts, Explained From Zero

**Maths 1A · Chapter 2**

Nothing in this chapter requires you to be clever. It requires you to be
**obedient to a template**. Read every topic below in order.

---

# TOPIC 1 — WHAT IS THE PROBLEM WE ARE TRYING TO SOLVE?

Somebody claims:

```
      1 + 2 + 3 + ... + n  =  n(n+1)/2      for EVERY natural number n
```

Let us test it.

```
  n = 1  ->  LHS = 1                RHS = 1(2)/2 = 1        agree
  n = 2  ->  LHS = 1 + 2 = 3        RHS = 2(3)/2 = 3        agree
  n = 3  ->  LHS = 1 + 2 + 3 = 6    RHS = 3(4)/2 = 6        agree
  n = 4  ->  LHS = 10               RHS = 4(5)/2 = 10       agree
  n = 5  ->  LHS = 15               RHS = 5(6)/2 = 15       agree
```

Five out of five. Are we done?

**No.** The claim says *every* natural number. There are infinitely many. Even if
you checked a million of them, you would not have checked `n = 1000001`.

> **TRAP:** Checking lots of cases is NOT a proof. There are famous statements in
> maths that are true for the first several thousand numbers and then fail.
> The examiner gives ZERO marks for "I checked n = 1, 2, 3, 4, 5 so it is true."

So we need a machine that proves infinitely many statements in a finite amount of
writing. That machine is **mathematical induction**.

---

# TOPIC 2 — THE DOMINO IDEA (this is the whole chapter)

Stand up an infinite row of dominoes.

```
      |    |    |    |    |    |    |    |    |    |
      |    |    |    |    |    |    |    |    |    |     ...  forever
      |    |    |    |    |    |    |    |    |    |
    ------------------------------------------------------------
      1    2    3    4    5    6    7    8    9   10
```

You want them **all** to fall. You cannot push infinitely many dominoes.
But you only need to guarantee two facts:

```
  FACT 1  -  "The FIRST domino falls."

        \
         \    |    |    |    |
          \   |    |    |    |
    -------------------------------
          1   2    3    4    5


  FACT 2  -  "WHENEVER a domino falls, it knocks the NEXT one over."
             (this must hold for ANY position k, not just for position 1)

                    \
                     \   |
            (k falls) \  | (k+1 is about to fall)
    ---------------------------------
              k-1     k   k+1   k+2
```

Now watch what happens automatically:

```
   domino 1 falls                        by FACT 1
   -> domino 2 falls                     by FACT 2 with k = 1
      -> domino 3 falls                  by FACT 2 with k = 2
         -> domino 4 falls               by FACT 2 with k = 3
            -> domino 5 falls            by FACT 2 with k = 4
               -> ...
                  -> domino 1000001 falls
                     -> ... and so on for ever
```

**Every** domino falls, and you only wrote down two facts.

Now replace "domino n falls" by "the statement is true for n":

| Dominoes | Mathematics |
|---|---|
| Domino `n` | The statement `S(n)` |
| Domino `n` falls | `S(n)` is true |
| The first domino falls | `S(1)` is true — **the BASE STEP** |
| A falling domino knocks the next one over | `S(k)` true forces `S(k+1)` true — **the INDUCTIVE STEP** |
| All the dominoes fall | `S(n)` is true for every natural number `n` |

### Why BOTH facts are needed — two broken domino rows

```
  BROKEN CASE A - the first domino never falls
  (inductive step fine, base step missing)

      |    |    |    |    |
      |    |    |    |    |        Nobody pushed domino 1.
      |    |    |    |    |        Nothing ever happens.
    ----------------------------
      1    2    3    4    5

  Maths example:  S(n) :  1 + 2 + ... + n  =  n(n+1)/2  +  7
  If S(k) were true you could still derive S(k+1) - the "+7" carries along.
  But S(1) is FALSE (1 is not 1 + 7). So S(n) is false for every n.
  MORAL: the inductive step ALONE proves nothing.


  BROKEN CASE B - the dominoes are too far apart
  (base step fine, inductive step missing)

        \
         \      |        |        |
          \     |        |        |     Domino 1 falls and hits nothing.
    -----------------------------------
          1     2        3        4

  MORAL: the base step ALONE proves only one case.
```

> **TRAP:** Weak students skip the base step because it "looks obvious".
> In a 7-mark question the base step is worth about **2 marks on its own**.
> It takes four lines. Never skip it.

---

# TOPIC 3 — THE PRINCIPLE OF MATHEMATICAL INDUCTION (formal statement)

Learn this by heart. It is a 2-mark Section A answer on its own.

```
  +======================================================================+
  |                                                                      |
  |   PRINCIPLE OF FINITE MATHEMATICAL INDUCTION                         |
  |                                                                      |
  |   Let  S(n)  be a statement about a natural number  n.               |
  |                                                                      |
  |   Suppose that                                                       |
  |                                                                      |
  |     (i)   S(1)  is TRUE                              [ BASE STEP ]   |
  |                                                                      |
  |     (ii)  for every natural number  k,                               |
  |           S(k) being TRUE implies  S(k+1) is TRUE  [ INDUCTIVE STEP ]|
  |                                                                      |
  |   Then  S(n)  is TRUE for EVERY natural number  n.                   |
  |                                                                      |
  +======================================================================+
```

**Vocabulary you must use in the answer** (examiners look for these words):

| Word | Meaning |
|---|---|
| `S(n)` | the statement, written as a formula with `n` in it |
| **base step** | verifying `S(1)` (or `S(a)` if the claim starts at `n = a`) |
| **inductive hypothesis** | the assumption "`S(k)` is true" |
| **inductive step** | the working that turns `S(k)` into `S(k+1)` |

### A note on the starting value

Sometimes the claim is only made for `n >= 5`, or `n >= 2`. Then the first domino
is domino number 5 (or 2), so:

```
  BASE STEP:  verify  S(5)   instead of  S(1)
  CONCLUSION: "... true for all natural numbers n >= 5"
```

Everything else is identical.

> **TRAP:** Read the question for the words "for all n >= 2" or "n >= 5".
> If you verify `S(1)` when the claim starts at `n = 5`, you may find it is
> false and panic for no reason.

---

# TOPIC 4 — THE FIXED WRITING TEMPLATE

This is the single most valuable thing in the chapter. **Memorise it.**

```
  +======================================================================+
  |                                                                      |
  |  STEP 1   Let S(n) be the statement                                  |
  |                 ..............................................       |
  |                                                                      |
  |  STEP 2   BASE STEP.   Put n = 1.                                    |
  |                 LHS = ..............                                 |
  |                 RHS = ..............                                 |
  |           Since LHS = RHS,  S(1) is TRUE.                            |
  |                                                                      |
  |  STEP 3   ASSUME that S(k) is true for some k in N.                  |
  |           That is,                                                   |
  |                 ..............................................  (i)  |
  |                                                                      |
  |  STEP 4   WE MUST NOW PROVE S(k+1), i.e. we must show                |
  |                 .............................................. (ii)  |
  |           (obtained by replacing every n by k+1 in the statement)     |
  |                                                                      |
  |  STEP 5   Consider the LHS of S(k+1):                                |
  |                                                                      |
  |             LHS of S(k+1)                                            |
  |               = [ LHS of S(k) ] + [ the (k+1)th term ]               |
  |               = [ RHS of (i) ]  + [ the (k+1)th term ]   <- by (i)   |
  |               = ......... take out the common factor .........       |
  |               = ......... add the fractions ..................       |
  |               = ......... factorise ..........................       |
  |               = RHS of S(k+1)                                        |
  |                                                                      |
  |           Therefore S(k+1) is TRUE.                                  |
  |                                                                      |
  |  STEP 6   CONCLUSION.                                                |
  |           S(1) is true, and S(k) true implies S(k+1) true.           |
  |           Hence by the principle of mathematical induction,          |
  |           S(n) is true for all n in N.                               |
  |                                                                      |
  +======================================================================+
```

### How the 7 marks are actually split

```
  +--------------------------------------------------+--------+
  |  STEP 1  writing S(n) clearly                     |  1/2   |
  |  STEP 2  base step, LHS and RHS shown separately  |  1 1/2 |
  |  STEP 3  the assumption written out in full       |   1    |
  |  STEP 4  stating exactly what must be proved      |   1    |
  |  STEP 5  the algebra, ending at the required RHS  |   2    |
  |  STEP 6  the conclusion sentence                  |   1    |
  +--------------------------------------------------+--------+
  |                                            TOTAL  |   7    |
  +--------------------------------------------------+--------+
```

Look at that table again. **Steps 1, 2, 3, 4 and 6 are worth 5 of the 7 marks,
and none of them require you to do any real algebra.** You can write those five
steps for a formula you have never seen in your life. Even if your algebra in
Step 5 collapses, you walk away with about 5 marks.

> **This is why this chapter is the safest 7 marks in Maths IA.**

---

# TOPIC 5 — THE ONE TRICK IN STEP 5

Every sum question is proved by the same single line:

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |    LHS of S(k+1)   =   [ LHS of S(k) ]   +   [ the (k+1)th term ]    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

Why is that true? Because `S(k+1)` is the same sum as `S(k)` with **one extra
term stuck on the end**. Look:

```
   S(k)    :   t(1) + t(2) + ... + t(k)              = (formula in k)

   S(k+1)  :   t(1) + t(2) + ... + t(k) + t(k+1)     = (formula in k+1)
               \___________________/     \_____/
                  this is LHS of S(k)     the new,
                  and (i) tells us        (k+1)th
                  exactly what it is       term
```

So you **split off the last term**, then **replace the front chunk** using your
assumption. That is the entire method.

### Finding the (k+1)th term

Take the general term `t(n)` printed in the question and put `k+1` where `n` was.

| `t(n)` in the question | `t(k+1)` |
|---|---|
| `n` | `k+1` |
| `n^2` | `(k+1)^2` |
| `n^3` | `(k+1)^3` |
| `2n - 1` | `2(k+1) - 1 = 2k + 1` |
| `n(n+1)` | `(k+1)(k+2)` |
| `n(n+1)(n+2)` | `(k+1)(k+2)(k+3)` |
| `1/(n(n+1))` | `1/((k+1)(k+2))` |
| `1/((2n-1)(2n+1))` | `1/((2k+1)(2k+3))` |
| `1/((3n-2)(3n+1))` | `1/((3k+1)(3k+4))` |
| `a + (n-1)d` | `a + kd` |
| `a r^(n-1)` | `a r^k` |
| `(n+1) 2^(n-1)` | `(k+2) 2^k` |
| `n^2 (n+1)` | `(k+1)^2 (k+2)` |
| `n (n+1)^2` | `(k+1)(k+2)^2` |

> **TRAP:** Students write the `(k+1)`th term as "the last printed term with k+1
> stuck in somewhere". Do it mechanically: write `t(n)`, cross out `n`, write `k+1`.

### The three algebra moves that finish nearly every sum

```
  MOVE 1   TAKE OUT THE COMMON FACTOR.
           Both pieces almost always share (k+1). Pull it out front.

  MOVE 2   PUT EVERYTHING OVER ONE DENOMINATOR.
           If the RHS has /2, /3, /4, /6 or /12, make both pieces have it.

  MOVE 3   FACTORISE THE BRACKET.
           Compare with the target: you know what it must factorise into,
           so you can check instantly.
```

**Powerful shortcut:** before you start Step 5, **write down the target RHS of
S(k+1)**. Now you know the destination. Algebra is much easier when you can see
where you are going.

---

# TOPIC 6 — WORKED EXAMPLE, TYPE 1 (SUM): THE FIRST n NATURAL NUMBERS

This is the model answer. Every other answer in this file is this one with
different dots on the dotted lines.

### **WORKED EXAMPLE 1**
**Prove by induction that `1 + 2 + 3 + ... + n = n(n+1)/2` for all n in N.**

```
STEP 1   Let S(n) be the statement

              1 + 2 + 3 + ... + n  =  n(n+1)/2


STEP 2   BASE STEP.  Put n = 1.

              LHS = 1

                     1(1+1)     1 x 2
              RHS = --------- = ------- = 1
                        2         2

         LHS = RHS,  so  S(1) is TRUE.


STEP 3   ASSUME S(k) is true for some k in N.  That is,

              1 + 2 + 3 + ... + k  =  k(k+1)/2          ... (i)


STEP 4   TO PROVE S(k+1), we must show

              1 + 2 + 3 + ... + k + (k+1)  =  (k+1)(k+2)/2   ... (ii)

         (because replacing n by k+1 in n(n+1)/2 gives (k+1)(k+1+1)/2 )


STEP 5   LHS of (ii)

              = [ 1 + 2 + ... + k ]  +  (k+1)          split off last term

                  k(k+1)
              = ---------  +  (k+1)                    using (i)
                    2

                  k(k+1) + 2(k+1)
              = -------------------                    one denominator
                        2

                  (k+1)(k + 2)
              = ----------------                       take out (k+1)
                        2

              = RHS of (ii)

         Therefore S(k+1) is TRUE.


STEP 6   S(1) is true, and S(k) true implies S(k+1) true.
         Hence by the principle of mathematical induction,

              1 + 2 + 3 + ... + n  =  n(n+1)/2   for all n in N.
```

**Look at how little of that was thinking.** Steps 1, 2, 3, 4, 6 were copying.
Step 5 was three lines of school algebra.

---

# TOPIC 7 — WORKED EXAMPLE: SUM OF SQUARES

### **WORKED EXAMPLE 2**
**Prove that `1^2 + 2^2 + 3^2 + ... + n^2 = n(n+1)(2n+1)/6` for all n in N.**

```
STEP 1   Let S(n):   1^2 + 2^2 + ... + n^2  =  n(n+1)(2n+1)/6


STEP 2   BASE STEP.  n = 1.

              LHS = 1^2 = 1

                    1(1+1)(2+1)     1 x 2 x 3      6
              RHS = ------------- = ----------- = --- = 1
                          6              6         6

         LHS = RHS,  so S(1) is TRUE.


STEP 3   ASSUME S(k):

              1^2 + 2^2 + ... + k^2  =  k(k+1)(2k+1)/6      ... (i)


STEP 4   TO PROVE S(k+1):

              1^2 + ... + k^2 + (k+1)^2  =  (k+1)(k+2)(2k+3)/6   ... (ii)

         [ replacing n by k+1:  (k+1)(k+2)(2(k+1)+1)/6 = (k+1)(k+2)(2k+3)/6 ]


STEP 5   LHS of (ii)

              = [ 1^2 + ... + k^2 ] + (k+1)^2

                  k(k+1)(2k+1)
              = ---------------- + (k+1)^2                 using (i)
                        6

                  k(k+1)(2k+1) + 6(k+1)^2
              = ---------------------------
                            6

                  (k+1) [ k(2k+1) + 6(k+1) ]
              = -------------------------------             take out (k+1)
                              6

                  (k+1) [ 2k^2 + k + 6k + 6 ]
              = -------------------------------
                              6

                  (k+1)(2k^2 + 7k + 6)
              = ------------------------
                            6

         Factorise 2k^2 + 7k + 6 :  split 7k as 4k + 3k
              2k^2 + 4k + 3k + 6 = 2k(k+2) + 3(k+2) = (k+2)(2k+3)

                  (k+1)(k+2)(2k+3)
              = ---------------------  = RHS of (ii)
                          6

         Therefore S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction,
         1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6  for all n in N.
```

**Check the factorisation:** `(k+2)(2k+3) = 2k^2 + 3k + 4k + 6 = 2k^2 + 7k + 6`. Correct.

---

# TOPIC 8 — WORKED EXAMPLE: SUM OF CUBES

### **WORKED EXAMPLE 3**
**Prove that `1^3 + 2^3 + ... + n^3 = n^2 (n+1)^2 / 4` for all n in N.**

(This is the same as `[n(n+1)/2]^2`, i.e. **the sum of the cubes is the square of
the sum**. Nice fact, but prove it properly.)

```
STEP 1   Let S(n):   1^3 + 2^3 + ... + n^3  =  n^2 (n+1)^2 / 4


STEP 2   BASE STEP.  n = 1.
              LHS = 1^3 = 1
              RHS = 1^2 (2)^2 / 4 = 4/4 = 1
         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              1^3 + 2^3 + ... + k^3  =  k^2 (k+1)^2 / 4        ... (i)


STEP 4   TO PROVE S(k+1):

              1^3 + ... + k^3 + (k+1)^3  =  (k+1)^2 (k+2)^2 / 4   ... (ii)


STEP 5   LHS of (ii)

                  k^2 (k+1)^2
              = --------------- + (k+1)^3                using (i)
                       4

                  k^2 (k+1)^2 + 4 (k+1)^3
              = ---------------------------
                            4

                  (k+1)^2 [ k^2 + 4(k+1) ]
              = -----------------------------             take out (k+1)^2
                             4

                  (k+1)^2 [ k^2 + 4k + 4 ]
              = -----------------------------
                             4

                  (k+1)^2 (k+2)^2
              = -------------------  = RHS of (ii)        since k^2+4k+4=(k+2)^2
                        4

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction,
         1^3 + 2^3 + ... + n^3 = n^2(n+1)^2/4  for all n in N.
```

---

# TOPIC 9 — WORKED EXAMPLE: SUM OF THE ODD NUMBERS

### **WORKED EXAMPLE 4**
**Prove that `1 + 3 + 5 + ... + (2n - 1) = n^2` for all n in N.**

First, get the `(k+1)`th term right. `t(n) = 2n - 1`, so `t(k+1) = 2(k+1) - 1 = 2k + 1`.

```
STEP 1   Let S(n):   1 + 3 + 5 + ... + (2n - 1)  =  n^2


STEP 2   BASE STEP.  n = 1.
              LHS = 2(1) - 1 = 1
              RHS = 1^2 = 1
         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              1 + 3 + 5 + ... + (2k - 1)  =  k^2               ... (i)


STEP 4   TO PROVE S(k+1):

              1 + 3 + ... + (2k - 1) + (2k + 1)  =  (k+1)^2    ... (ii)


STEP 5   LHS of (ii)

              = [ 1 + 3 + ... + (2k-1) ] + (2k+1)

              = k^2 + 2k + 1                                   using (i)

              = (k + 1)^2   = RHS of (ii)

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction,
         1 + 3 + 5 + ... + (2n-1) = n^2  for all n in N.
```

A picture of why it is true (not a proof, but it helps you remember):

```
     n = 1      n = 2         n = 3            n = 4
      *         * o           * o x            * o x #
                o o           o o x            o o x #
                              x x x            x x x #
                                               # # # #
      1        1+3 = 4      1+3+5 = 9       1+3+5+7 = 16
      = 1^2      = 2^2          = 3^2            = 4^2

  Each new odd number is exactly the L-shaped strip that
  turns an  n x n  square into an  (n+1) x (n+1)  square.
```

---

# TOPIC 10 — WORKED EXAMPLE: SUM OF AN ARITHMETIC PROGRESSION

### **WORKED EXAMPLE 5**
**Prove that `a + (a+d) + (a+2d) + ... + [a + (n-1)d] = (n/2)[2a + (n-1)d]`.**

Here `t(n) = a + (n-1)d`, so `t(k+1) = a + kd`.

```
STEP 1   Let S(n):   a + (a+d) + ... + [a + (n-1)d]  =  (n/2)[2a + (n-1)d]


STEP 2   BASE STEP.  n = 1.
              LHS = a + (1-1)d = a
              RHS = (1/2)[2a + 0] = (1/2)(2a) = a
         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              a + (a+d) + ... + [a + (k-1)d]  =  (k/2)[2a + (k-1)d]   ... (i)


STEP 4   TO PROVE S(k+1):

              a + (a+d) + ... + [a+(k-1)d] + (a + kd)
                                    =  ((k+1)/2)[2a + kd]             ... (ii)

         [ replacing n by k+1 in (n/2)[2a+(n-1)d] gives ((k+1)/2)[2a + kd] ]


STEP 5   LHS of (ii)

                  k
              = ----- [ 2a + (k-1)d ]  +  (a + kd)              using (i)
                  2

                  k[2a + (k-1)d] + 2(a + kd)
              = -------------------------------
                             2

                  2ak + k(k-1)d + 2a + 2kd
              = -----------------------------
                             2

                  2a(k + 1) + kd(k - 1 + 2)
              = -----------------------------      group the 'a' and 'd' parts
                             2

                  2a(k + 1) + kd(k + 1)
              = -------------------------
                             2

                  (k + 1)(2a + kd)
              = --------------------  = RHS of (ii)          take out (k+1)
                          2

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

**Check the grouping line carefully** (this is where students lose marks):

```
   2ak + k(k-1)d + 2a + 2kd
     'a' terms :   2ak + 2a          = 2a(k+1)
     'd' terms :   k(k-1)d + 2kd     = kd[(k-1) + 2] = kd(k+1)
   Total = 2a(k+1) + kd(k+1) = (k+1)(2a + kd).   Correct.
```

---

# TOPIC 11 — WORKED EXAMPLE: SUM OF A GEOMETRIC PROGRESSION

### **WORKED EXAMPLE 6**
**Prove that `a + ar + ar^2 + ... + ar^(n-1) = a(r^n - 1)/(r - 1)`, where r is not 1.**

Here `t(n) = a r^(n-1)`, so `t(k+1) = a r^k`.

```
STEP 1   Let S(n):   a + ar + ... + a r^(n-1)  =  a(r^n - 1)/(r - 1),  r =/= 1


STEP 2   BASE STEP.  n = 1.
              LHS = a r^0 = a

                    a(r^1 - 1)     a(r - 1)
              RHS = ------------ = ---------- = a
                      r - 1          r - 1

         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k):

                                          a(r^k - 1)
              a + ar + ... + a r^(k-1) = -------------          ... (i)
                                            r - 1


STEP 4   TO PROVE S(k+1):

                                                  a(r^(k+1) - 1)
              a + ar + ... + a r^(k-1) + a r^k = ----------------  ... (ii)
                                                      r - 1


STEP 5   LHS of (ii)

                  a(r^k - 1)
              = -------------- + a r^k                       using (i)
                    r - 1

                  a(r^k - 1) + a r^k (r - 1)
              = -------------------------------
                          r - 1

                  a[ r^k - 1 + r^(k+1) - r^k ]
              = ---------------------------------      expand the bracket
                            r - 1

                  a[ r^(k+1) - 1 ]
              = --------------------   = RHS of (ii)   ( r^k - r^k cancels )
                      r - 1

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N (r =/= 1).
```

> **TRAP:** The condition `r =/= 1` must be written. If `r = 1` the right-hand
> side is `0/0`, which is meaningless. Half a mark, but free.

---

# TOPIC 12 — WORKED EXAMPLE: PRODUCT-TYPE SERIES `1.2 + 2.3 + 3.4 + ...`

Here `1.2` means `1 x 2`. The dot is a multiplication sign, not a decimal point.

### **WORKED EXAMPLE 7**
**Prove that `1.2 + 2.3 + 3.4 + ... + n(n+1) = n(n+1)(n+2)/3`.**

`t(n) = n(n+1)`, so `t(k+1) = (k+1)(k+2)`.

```
STEP 1   Let S(n):   1.2 + 2.3 + ... + n(n+1)  =  n(n+1)(n+2)/3


STEP 2   BASE STEP.  n = 1.
              LHS = 1 x 2 = 2
              RHS = 1(2)(3)/3 = 6/3 = 2
         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              1.2 + 2.3 + ... + k(k+1)  =  k(k+1)(k+2)/3           ... (i)


STEP 4   TO PROVE S(k+1):

              1.2 + ... + k(k+1) + (k+1)(k+2)
                                     =  (k+1)(k+2)(k+3)/3         ... (ii)


STEP 5   LHS of (ii)

                  k(k+1)(k+2)
              = ---------------  +  (k+1)(k+2)                using (i)
                       3

                  k(k+1)(k+2) + 3(k+1)(k+2)
              = -------------------------------
                             3

                  (k+1)(k+2) [ k + 3 ]
              = ------------------------      take out (k+1)(k+2)
                          3

                  (k+1)(k+2)(k+3)
              = -------------------   = RHS of (ii)
                          3

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

**Notice how easy this family is:** when the terms are products of consecutive
integers, the common factor `(k+1)(k+2)` falls out instantly and you are done in
two lines. The same shape works for:

| Series | Sum |
|---|---|
| `1.2 + 2.3 + ... + n(n+1)` | `n(n+1)(n+2)/3` |
| `1.2.3 + 2.3.4 + ... + n(n+1)(n+2)` | `n(n+1)(n+2)(n+3)/4` |
| `1.2.3.4 + 2.3.4.5 + ...` | `n(n+1)(n+2)(n+3)(n+4)/5` |

```
   THE RULE:  multiply the NEXT consecutive integer on the end,
              then divide by the NUMBER OF FACTORS PLUS ONE.
```

### **WORKED EXAMPLE 8**
**Prove that `1.2.3 + 2.3.4 + ... + n(n+1)(n+2) = n(n+1)(n+2)(n+3)/4`.**

```
STEP 1   Let S(n):  1.2.3 + 2.3.4 + ... + n(n+1)(n+2) = n(n+1)(n+2)(n+3)/4

STEP 2   n = 1:   LHS = 1 x 2 x 3 = 6
                  RHS = 1 x 2 x 3 x 4 / 4 = 24/4 = 6      S(1) TRUE.

STEP 3   ASSUME  1.2.3 + ... + k(k+1)(k+2) = k(k+1)(k+2)(k+3)/4      ... (i)

STEP 4   TO PROVE
              1.2.3 + ... + k(k+1)(k+2) + (k+1)(k+2)(k+3)
                            = (k+1)(k+2)(k+3)(k+4)/4                 ... (ii)

STEP 5   LHS of (ii)

                  k(k+1)(k+2)(k+3)
              = --------------------  +  (k+1)(k+2)(k+3)          by (i)
                         4

                  k(k+1)(k+2)(k+3) + 4(k+1)(k+2)(k+3)
              = ---------------------------------------
                                 4

                  (k+1)(k+2)(k+3) [ k + 4 ]
              = -------------------------------
                             4

              = (k+1)(k+2)(k+3)(k+4)/4   = RHS of (ii)

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

---

# TOPIC 13 — WORKED EXAMPLE: FRACTION SERIES `1/(1.2) + 1/(2.3) + ...`

### **WORKED EXAMPLE 9**
**Prove that `1/(1.2) + 1/(2.3) + ... + 1/(n(n+1)) = n/(n+1)`.**

`t(n) = 1/(n(n+1))`, so `t(k+1) = 1/((k+1)(k+2))`.

```
STEP 1   Let S(n):

               1        1                1            n
             ----- + ------- + ... + ---------- = ---------
              1.2      2.3            n(n+1)        n + 1


STEP 2   BASE STEP.  n = 1.
              LHS = 1/(1 x 2) = 1/2
              RHS = 1/(1+1)   = 1/2
         LHS = RHS, so S(1) is TRUE.


STEP 3   ASSUME S(k):

               1        1                1            k
             ----- + ------- + ... + ---------- = ---------      ... (i)
              1.2      2.3            k(k+1)        k + 1


STEP 4   TO PROVE S(k+1):

               1              1              1           k + 1
             ----- + ... + -------- + -------------- = ---------  ... (ii)
              1.2           k(k+1)     (k+1)(k+2)        k + 2


STEP 5   LHS of (ii)

                  k              1
              = -------  +  --------------                      using (i)
                 k + 1       (k+1)(k+2)

                  k(k + 2) + 1
              = ------------------          common denominator (k+1)(k+2)
                  (k+1)(k+2)

                  k^2 + 2k + 1
              = ------------------
                  (k+1)(k+2)

                    (k + 1)^2
              = ------------------          since k^2+2k+1 = (k+1)^2
                  (k+1)(k+2)

                  k + 1
              = ---------   = RHS of (ii)   cancel one (k+1)
                  k + 2

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

### The same shape, three more times (these all appear in AP papers)

| Series | Sum | The key line of Step 5 |
|---|---|---|
| `1/(1.2) + ... + 1/(n(n+1))` | `n/(n+1)` | `k(k+2) + 1 = (k+1)^2` |
| `1/(1.3) + 1/(3.5) + ... + 1/((2n-1)(2n+1))` | `n/(2n+1)` | `k(2k+3) + 1 = (2k+1)(k+1)` |
| `1/(1.4) + 1/(4.7) + ... + 1/((3n-2)(3n+1))` | `n/(3n+1)` | `k(3k+4) + 1 = (3k+1)(k+1)` |
| `1/(3.7) + 1/(7.11) + ... + 1/((4n-1)(4n+3))` | `n/(3(4n+3))` | see below |

### **WORKED EXAMPLE 10**
**Prove that `1/(1.4) + 1/(4.7) + ... + 1/((3n-2)(3n+1)) = n/(3n+1)`.**

`t(n) = 1/((3n-2)(3n+1))`. Replace n by k+1:
`3(k+1) - 2 = 3k + 1` and `3(k+1) + 1 = 3k + 4`, so `t(k+1) = 1/((3k+1)(3k+4))`.

```
STEP 1   Let S(n):  1/(1.4) + 1/(4.7) + ... + 1/((3n-2)(3n+1)) = n/(3n+1)

STEP 2   n = 1:  LHS = 1/((3-2)(3+1)) = 1/(1 x 4) = 1/4
                 RHS = 1/(3+1) = 1/4                       S(1) TRUE.

STEP 3   ASSUME
             1/(1.4) + ... + 1/((3k-2)(3k+1))  =  k/(3k+1)          ... (i)

STEP 4   TO PROVE
             1/(1.4) + ... + 1/((3k-2)(3k+1)) + 1/((3k+1)(3k+4))
                                              = (k+1)/(3k+4)        ... (ii)

STEP 5   LHS of (ii)

                   k              1
              = -------- + -------------------                    using (i)
                 3k + 1     (3k+1)(3k+4)

                  k(3k + 4) + 1
              = --------------------
                  (3k+1)(3k+4)

                  3k^2 + 4k + 1
              = --------------------
                  (3k+1)(3k+4)

         Factorise the top:  3k^2 + 4k + 1 = 3k^2 + 3k + k + 1
                                           = 3k(k+1) + 1(k+1)
                                           = (k+1)(3k+1)

                  (k+1)(3k+1)          k + 1
              = ----------------- = ----------  = RHS of (ii)
                  (3k+1)(3k+4)        3k + 4

         So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

**Sanity check for (ii):** `(k+1)/(3(k+1)+1) = (k+1)/(3k+4)`. Correct.

---

# TOPIC 14 — WORKED EXAMPLE: THE `2 + 3.2 + 4.2^2 + ...` FAVOURITE

This one appears in AP papers again and again.

### **WORKED EXAMPLE 11**
**Prove that `2 + 3.2 + 4.2^2 + ... + (n+1) 2^(n-1) = n . 2^n`.**

`t(n) = (n+1) 2^(n-1)`, so `t(k+1) = (k+2) 2^k`.

```
STEP 1   Let S(n):   2 + 3.2 + 4.2^2 + ... + (n+1) 2^(n-1)  =  n . 2^n


STEP 2   BASE STEP.  n = 1.
              LHS = (1+1) 2^0 = 2 x 1 = 2
              RHS = 1 x 2^1 = 2
         LHS = RHS, so S(1) is TRUE.

         (Sanity check with n = 2:  LHS = 2 + 3(2) = 8,  RHS = 2 x 4 = 8.)


STEP 3   ASSUME S(k):

              2 + 3.2 + ... + (k+1) 2^(k-1)  =  k . 2^k           ... (i)


STEP 4   TO PROVE S(k+1):

              2 + 3.2 + ... + (k+1)2^(k-1) + (k+2) 2^k
                                          =  (k+1) 2^(k+1)        ... (ii)


STEP 5   LHS of (ii)

              = k . 2^k  +  (k+2) 2^k                          using (i)

              = 2^k [ k + k + 2 ]                              take out 2^k

              = 2^k [ 2k + 2 ]

              = 2^k . 2 (k + 1)

              = (k + 1) 2^(k+1)   = RHS of (ii)

         So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

---

# TOPIC 15 — WORKED EXAMPLE: THE TWO "MIXED POWER" AP FAVOURITES

These two look frightening and are actually routine. Learn them; they repeat.

### **WORKED EXAMPLE 12**
**Prove that `1.2^2 + 2.3^2 + 3.4^2 + ... upto n terms = n(n+1)(n+2)(3n+5)/12`.**

The nth term is `n(n+1)^2`. So `t(k+1) = (k+1)(k+2)^2`.

```
STEP 1   Let S(n):  1.2^2 + 2.3^2 + ... + n(n+1)^2 = n(n+1)(n+2)(3n+5)/12

STEP 2   n = 1:  LHS = 1 x 2^2 = 4
                 RHS = 1 x 2 x 3 x 8 / 12 = 48/12 = 4          S(1) TRUE.

         (Check n = 2:  LHS = 4 + 2(9) = 22;
                        RHS = 2 x 3 x 4 x 11/12 = 264/12 = 22. Good.)

STEP 3   ASSUME
             1.2^2 + ... + k(k+1)^2 = k(k+1)(k+2)(3k+5)/12            ... (i)

STEP 4   TO PROVE
             1.2^2 + ... + k(k+1)^2 + (k+1)(k+2)^2
                          = (k+1)(k+2)(k+3)(3k+8)/12                  ... (ii)

         [ n -> k+1 :  3(k+1)+5 = 3k+8 ]

STEP 5   LHS of (ii)

                  k(k+1)(k+2)(3k+5)
              = ---------------------- + (k+1)(k+2)^2            by (i)
                          12

                  k(k+1)(k+2)(3k+5) + 12(k+1)(k+2)^2
              = --------------------------------------
                                12

                  (k+1)(k+2) [ k(3k+5) + 12(k+2) ]
              = --------------------------------------  take out (k+1)(k+2)
                                12

                  (k+1)(k+2) [ 3k^2 + 5k + 12k + 24 ]
              = ---------------------------------------
                                12

                  (k+1)(k+2)(3k^2 + 17k + 24)
              = --------------------------------
                                12

         Factorise 3k^2 + 17k + 24 :  split 17k as 9k + 8k
              3k^2 + 9k + 8k + 24 = 3k(k+3) + 8(k+3) = (k+3)(3k+8)

                  (k+1)(k+2)(k+3)(3k+8)
              = ----------------------------  = RHS of (ii)
                            12

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

### **WORKED EXAMPLE 13**
**Prove that `1^2 . 2 + 2^2 . 3 + 3^2 . 4 + ... upto n terms = n(n+1)(n+2)(3n+1)/12`.**

The nth term is `n^2 (n+1)`. So `t(k+1) = (k+1)^2 (k+2)`.

```
STEP 1   Let S(n):  1^2.2 + 2^2.3 + ... + n^2(n+1) = n(n+1)(n+2)(3n+1)/12

STEP 2   n = 1:  LHS = 1 x 2 = 2
                 RHS = 1 x 2 x 3 x 4/12 = 24/12 = 2             S(1) TRUE.

         (Check n = 2:  LHS = 2 + 4(3) = 14;
                        RHS = 2 x 3 x 4 x 7/12 = 168/12 = 14. Good.)

STEP 3   ASSUME
             1^2.2 + ... + k^2(k+1) = k(k+1)(k+2)(3k+1)/12            ... (i)

STEP 4   TO PROVE
             1^2.2 + ... + k^2(k+1) + (k+1)^2 (k+2)
                          = (k+1)(k+2)(k+3)(3k+4)/12                  ... (ii)

STEP 5   LHS of (ii)

                  k(k+1)(k+2)(3k+1) + 12(k+1)^2 (k+2)
              = ---------------------------------------
                                 12

                  (k+1)(k+2) [ k(3k+1) + 12(k+1) ]
              = -------------------------------------
                                 12

                  (k+1)(k+2) [ 3k^2 + 13k + 12 ]
              = -----------------------------------
                                 12

         Factorise 3k^2 + 13k + 12 :  split 13k as 9k + 4k
              3k^2 + 9k + 4k + 12 = 3k(k+3) + 4(k+3) = (k+3)(3k+4)

                  (k+1)(k+2)(k+3)(3k+4)
              = ---------------------------- = RHS of (ii)
                            12

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

> **How to tell these two apart:**
> `1.2^2 + 2.3^2 + ...` has the SQUARE on the BIGGER number  ->  `(3n+5)`
> `1^2.2 + 2^2.3 + ...` has the SQUARE on the SMALLER number ->  `(3n+1)`
> Memory hook: **big square, big number (5); small square, small number (1).**

---

# TOPIC 16 — WORKED EXAMPLE: THE HARDEST AP SUM

### **WORKED EXAMPLE 14**
**Prove that**

```
     1^3        1^3 + 2^3        1^3 + 2^3 + 3^3                  n(2n^2 + 9n + 13)
    -----  +  -------------  +  -----------------  + ... n terms = -------------------
      1           1 + 3             1 + 3 + 5                              24
```

First **simplify the general term** — this is the whole difficulty.

```
   Numerator of term k   =  1^3 + 2^3 + ... + k^3   =  [ k(k+1)/2 ]^2
   Denominator of term k =  1 + 3 + ... + (2k-1)    =  k^2

                    [k(k+1)/2]^2       k^2 (k+1)^2 / 4        (k+1)^2
   So  t(k)  =  ------------------- = ------------------- = -----------
                        k^2                  k^2                 4
```

So the series is really `(2^2)/4 + (3^2)/4 + (4^2)/4 + ...`, and
`t(k+1) = (k+2)^2 / 4`.

```
STEP 1   Let S(n) be the statement above, i.e. the sum of the first n terms,
         whose nth term is (n+1)^2 / 4, equals n(2n^2 + 9n + 13)/24.

STEP 2   BASE STEP.  n = 1.
              LHS = 1^3 / 1 = 1

                    1(2 + 9 + 13)     24
              RHS = --------------- = ---- = 1
                          24           24
         LHS = RHS, so S(1) is TRUE.

STEP 3   ASSUME S(k):

              (2^2 + 3^2 + ... + (k+1)^2)/4  =  k(2k^2 + 9k + 13)/24   ... (i)

STEP 4   TO PROVE S(k+1):

              [ LHS of (i) ] + (k+2)^2 / 4
                        = (k+1)[ 2(k+1)^2 + 9(k+1) + 13 ] / 24
                        = (k+1)(2k^2 + 13k + 24)/24                    ... (ii)

         [ because 2(k+1)^2 + 9(k+1) + 13 = 2k^2+4k+2 + 9k+9 + 13
                                          = 2k^2 + 13k + 24 ]

STEP 5   LHS of (ii)

                  k(2k^2 + 9k + 13)      (k+2)^2
              = ----------------------  + ---------                 using (i)
                          24                  4

                  k(2k^2 + 9k + 13) + 6(k+2)^2
              = ---------------------------------
                              24

                  2k^3 + 9k^2 + 13k + 6k^2 + 24k + 24
              = --------------------------------------
                                 24

                  2k^3 + 15k^2 + 37k + 24
              = ----------------------------
                              24

         Now expand the target, RHS of (ii):

                  (k+1)(2k^2 + 13k + 24)
                       = 2k^3 + 13k^2 + 24k + 2k^2 + 13k + 24
                       = 2k^3 + 15k^2 + 37k + 24

         The two agree, so LHS of (ii) = RHS of (ii), and S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

> **TRAP:** In this question the marks are in **simplifying the general term first**.
> If you do not reduce the kth term to `(k+1)^2 / 4`, you will drown.

---

# TOPIC 17 — TYPE 2: DIVISIBILITY. THE STANDARD TRICK

Now the statement is not "LHS = RHS". It is "`d` divides `f(n)`".

```
  +======================================================================+
  |                                                                      |
  |   THE DIVISIBILITY TRICK                                             |
  |                                                                      |
  |   Assumption:  f(k) = d.m   for some integer m.                      |
  |                (ALWAYS write it as "= d.m", never just "is divisible")|
  |                                                                      |
  |   Then rearrange to make one power the subject, e.g.                 |
  |                a^k = d.m - (the other bits)                          |
  |                                                                      |
  |   Now write f(k+1), and SUBSTITUTE that expression for a^k.          |
  |                                                                      |
  |   Everything must collapse into                                      |
  |                f(k+1) = d x (an integer)                             |
  |                                                                      |
  +======================================================================+
```

Said in one sentence:

```
   f(k+1)  =  (a multiplier) x f(k)   +   (an obvious multiple of d)
```

Both pieces are divisible by `d`, therefore so is `f(k+1)`. Done.

> **BEFORE YOU START:** put `n = 1` into the expression and **actually divide by
> the stated divisor**. If it does not go exactly, you have misread the question.
> This 10-second check has saved thousands of students from wasting 20 minutes.

### **WORKED EXAMPLE 15**
**Prove that `3` divides `n^3 + 2n` for all n in N.**

```
STEP 1   Let S(n):  n^3 + 2n  is divisible by 3.


STEP 2   BASE STEP.  n = 1.
              1^3 + 2(1) = 1 + 2 = 3 = 3 x 1
         Divisible by 3, so S(1) is TRUE.


STEP 3   ASSUME S(k) is true, i.e.

              k^3 + 2k  =  3m    for some integer m         ... (i)


STEP 4   TO PROVE S(k+1), i.e. we must show

              (k+1)^3 + 2(k+1)   is divisible by 3          ... (ii)


STEP 5   (k+1)^3 + 2(k+1)

              = k^3 + 3k^2 + 3k + 1 + 2k + 2

              = (k^3 + 2k)  +  3k^2 + 3k + 3        group the k-expression

              = 3m  +  3(k^2 + k + 1)               using (i)

              = 3( m + k^2 + k + 1 )

         Since m, k are integers, ( m + k^2 + k + 1 ) is an integer.
         So (k+1)^3 + 2(k+1) is divisible by 3, i.e. S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 3 divides
         n^3 + 2n for all n in N.
```

### **WORKED EXAMPLE 16**
**Prove that `2^(3n) - 1` is divisible by 7 for all n in N.**

```
  FIRST, THE 10-SECOND CHECK:
      n = 1 :  2^3 - 1 = 8 - 1 = 7        7 divides 7.   Good.
      n = 2 :  2^6 - 1 = 64 - 1 = 63 = 7 x 9.            Good.
      n = 3 :  2^9 - 1 = 512 - 1 = 511 = 7 x 73.         Good.

  (Note: the divisor here is 7, NOT 5. If a question sheet tells you 5,
   the 10-second check exposes it immediately: 7 is not divisible by 5.)
```

```
STEP 1   Let S(n):  2^(3n) - 1  is divisible by 7.
         Note 2^(3n) = (2^3)^n = 8^n, so S(n) says 7 divides 8^n - 1.


STEP 2   BASE STEP.  n = 1.
              8^1 - 1 = 7 = 7 x 1.   Divisible by 7, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              8^k - 1 = 7m   for some integer m,   so   8^k = 7m + 1   ... (i)


STEP 4   TO PROVE S(k+1):   8^(k+1) - 1 is divisible by 7.


STEP 5   8^(k+1) - 1

              = 8 . 8^k  -  1

              = 8(7m + 1) - 1                       using (i)

              = 56m + 8 - 1

              = 56m + 7

              = 7(8m + 1)

         which is divisible by 7. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 2^(3n) - 1 is
         divisible by 7 for all n in N.
```

### **WORKED EXAMPLE 17**
**Prove that `3^(2n+1) + 2^(n+2)` is divisible by 7 for all n in N.**

```
  Check:  n = 1 :  3^3 + 2^3 = 27 + 8 = 35 = 7 x 5.        Good.
          n = 2 :  3^5 + 2^4 = 243 + 16 = 259 = 7 x 37.    Good.
```

```
STEP 1   Let S(n):  3^(2n+1) + 2^(n+2)  is divisible by 7.


STEP 2   BASE STEP.  n = 1.
              3^3 + 2^3 = 27 + 8 = 35 = 7 x 5.
         Divisible by 7, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              3^(2k+1) + 2^(k+2) = 7m    for some integer m

         Rearranged:   3^(2k+1) = 7m - 2^(k+2)                 ... (i)


STEP 4   TO PROVE S(k+1):

              3^(2(k+1)+1) + 2^((k+1)+2)  =  3^(2k+3) + 2^(k+3)
                                                is divisible by 7.


STEP 5   3^(2k+3) + 2^(k+3)

              = 3^2 . 3^(2k+1)  +  2 . 2^(k+2)          split off the extra powers

              = 9 [ 7m - 2^(k+2) ]  +  2 . 2^(k+2)      using (i)

              = 63m  -  9 . 2^(k+2)  +  2 . 2^(k+2)

              = 63m  -  7 . 2^(k+2)

              = 7 [ 9m  -  2^(k+2) ]

         which is divisible by 7. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 3^(2n+1) + 2^(n+2)
         is divisible by 7 for all n in N.
```

> **The move to copy:** `3^(2k+3) = 9 x 3^(2k+1)` and `2^(k+3) = 2 x 2^(k+2)`.
> Always peel the extra powers off so that the k-expression appears.

### **WORKED EXAMPLE 18**
**Prove that `10^n + 3.4^(n+2) + 5` is divisible by 9 for all n in N.**

```
  Check:  n = 1 :  10 + 3(64) + 5 = 10 + 192 + 5 = 207 = 9 x 23.   Good.
          n = 2 :  100 + 3(256) + 5 = 873 = 9 x 97.                Good.
```

```
STEP 1   Let S(n):  10^n + 3.4^(n+2) + 5  is divisible by 9.


STEP 2   BASE STEP.  n = 1.
              10^1 + 3 x 4^3 + 5 = 10 + 192 + 5 = 207 = 9 x 23.
         Divisible by 9, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              10^k + 3.4^(k+2) + 5 = 9m    for some integer m

         Rearranged:   10^k = 9m - 3.4^(k+2) - 5                  ... (i)


STEP 4   TO PROVE S(k+1):

              10^(k+1) + 3.4^(k+3) + 5   is divisible by 9.


STEP 5   10^(k+1) + 3.4^(k+3) + 5

              = 10 . 10^k  +  4 . ( 3 . 4^(k+2) )  +  5

              = 10 [ 9m - 3.4^(k+2) - 5 ]  +  4 . 3 . 4^(k+2)  +  5    by (i)

              = 90m  -  30 . 4^(k+2)  -  50  +  12 . 4^(k+2)  +  5

              = 90m  -  18 . 4^(k+2)  -  45

              = 9 [ 10m  -  2 . 4^(k+2)  -  5 ]

         which is divisible by 9. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 10^n + 3.4^(n+2) + 5
         is divisible by 9 for all n in N.
```

### **WORKED EXAMPLE 19 — AP FAVOURITE**
**Prove that `49^n + 16n - 1` is divisible by 64 for all n in N.**

```
  Check:  n = 1 :  49 + 16 - 1 = 64 = 64 x 1.                  Good.
          n = 2 :  2401 + 32 - 1 = 2432 = 64 x 38.             Good.
```

```
STEP 1   Let S(n):  49^n + 16n - 1  is divisible by 64.


STEP 2   BASE STEP.  n = 1.
              49^1 + 16(1) - 1 = 49 + 16 - 1 = 64 = 64 x 1.
         Divisible by 64, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              49^k + 16k - 1 = 64m    for some integer m

         Rearranged:   49^k = 64m - 16k + 1                     ... (i)


STEP 4   TO PROVE S(k+1):

              49^(k+1) + 16(k+1) - 1   is divisible by 64.


STEP 5   49^(k+1) + 16(k+1) - 1

              = 49 . 49^k  +  16k + 16 - 1

              = 49 [ 64m - 16k + 1 ]  +  16k + 15               using (i)

              = 3136m  -  784k  +  49  +  16k  +  15

              = 3136m  -  768k  +  64

              = 64 [ 49m  -  12k  +  1 ]

         which is divisible by 64. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 49^n + 16n - 1
         is divisible by 64 for all n in N.
```

**Verify the arithmetic:** `49 x 64 = 3136`. `49 x 16 = 784`, and `-784k + 16k = -768k`,
and `768 = 64 x 12`. `49 + 15 = 64`. All three coefficients are multiples of 64. Correct.

### **WORKED EXAMPLE 20 — AP FAVOURITE**
**Prove that `3.5^(2n+1) + 2^(3n+1)` is divisible by 17 for all n in N.**

```
  Check:  n = 1 :  3 x 5^3 + 2^4 = 375 + 16 = 391 = 17 x 23.    Good.
```

```
STEP 1   Let S(n):  3 . 5^(2n+1) + 2^(3n+1)  is divisible by 17.


STEP 2   BASE STEP.  n = 1.
              3 x 5^3 + 2^4 = 3(125) + 16 = 375 + 16 = 391 = 17 x 23.
         Divisible by 17, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              3 . 5^(2k+1) + 2^(3k+1) = 17m   for some integer m

         Rearranged:   2^(3k+1) = 17m - 3 . 5^(2k+1)             ... (i)


STEP 4   TO PROVE S(k+1):

              3 . 5^(2k+3) + 2^(3k+4)   is divisible by 17.


STEP 5   3 . 5^(2k+3) + 2^(3k+4)

              = 25 [ 3 . 5^(2k+1) ]  +  8 [ 2^(3k+1) ]     peel the extra powers
                                                           (5^2 = 25, 2^3 = 8)

              = 25 . 3 . 5^(2k+1)  +  8 [ 17m - 3 . 5^(2k+1) ]      by (i)

              = 25 . 3 . 5^(2k+1)  +  136m  -  8 . 3 . 5^(2k+1)

              = 136m  +  17 . 3 . 5^(2k+1)                  since 25 - 8 = 17

              = 17 [ 8m  +  3 . 5^(2k+1) ]

         which is divisible by 17. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 3.5^(2n+1) + 2^(3n+1)
         is divisible by 17 for all n in N.
```

> **Why did it work so beautifully?** The two multipliers were `25` and `8`, and
> `25 - 8 = 17`, the divisor. That is not an accident — the question was built
> that way. Look for it: **substitute for the term whose multiplier is smaller.**

### **WORKED EXAMPLE 21 — AP FAVOURITE**
**Prove that `2.4^(2n+1) + 3^(3n+1)` is divisible by 11 for all n in N.**

```
  Check:  n = 1 :  2 x 4^3 + 3^4 = 128 + 81 = 209 = 11 x 19.    Good.
```

```
STEP 1   Let S(n):  2 . 4^(2n+1) + 3^(3n+1)  is divisible by 11.


STEP 2   BASE STEP.  n = 1.
              2 x 4^3 + 3^4 = 2(64) + 81 = 128 + 81 = 209 = 11 x 19.
         Divisible by 11, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              2 . 4^(2k+1) + 3^(3k+1) = 11m    for some integer m

         Rearranged:   2 . 4^(2k+1) = 11m - 3^(3k+1)              ... (i)


STEP 4   TO PROVE S(k+1):

              2 . 4^(2k+3) + 3^(3k+4)   is divisible by 11.


STEP 5   2 . 4^(2k+3) + 3^(3k+4)

              = 16 [ 2 . 4^(2k+1) ]  +  27 [ 3^(3k+1) ]    (4^2 = 16, 3^3 = 27)

              = 16 [ 11m - 3^(3k+1) ]  +  27 . 3^(3k+1)          by (i)

              = 176m  -  16 . 3^(3k+1)  +  27 . 3^(3k+1)

              = 176m  +  11 . 3^(3k+1)                     since 27 - 16 = 11

              = 11 [ 16m  +  3^(3k+1) ]

         which is divisible by 11. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 2.4^(2n+1) + 3^(3n+1)
         is divisible by 11 for all n in N.
```

Again: `27 - 16 = 11`, the divisor.

### **WORKED EXAMPLE 22 — a harder one: `24` divides `2.7^n + 3.5^n - 5`**

```
  Check:  n = 1 :  14 + 15 - 5 = 24 = 24 x 1.               Good.
          n = 2 :  98 + 75 - 5 = 168 = 24 x 7.              Good.
          n = 3 :  686 + 375 - 5 = 1056 = 24 x 44.          Good.
```

Here the two bases are 7 and 5, and `7 - 5 = 2` is not the divisor, so we need
one extra ingredient.

```
  HELPER FACT (standard algebra, quote it freely):

        7^k - 1  =  (7 - 1)(7^(k-1) + 7^(k-2) + ... + 7 + 1)
                 =  6 x (a whole number)

  So 7^k - 1 is always divisible by 6.  Write  7^k - 1 = 6t.
```

```
STEP 1   Let S(n):  2 . 7^n + 3 . 5^n - 5  is divisible by 24.


STEP 2   BASE STEP.  n = 1.
              2(7) + 3(5) - 5 = 14 + 15 - 5 = 24 = 24 x 1.
         Divisible by 24, so S(1) is TRUE.


STEP 3   ASSUME S(k):

              2 . 7^k + 3 . 5^k - 5 = 24m    for some integer m

         Rearranged:   3 . 5^k = 24m - 2 . 7^k + 5                 ... (i)


STEP 4   TO PROVE S(k+1):

              2 . 7^(k+1) + 3 . 5^(k+1) - 5   is divisible by 24.


STEP 5   2 . 7^(k+1) + 3 . 5^(k+1) - 5

              = 7 [ 2 . 7^k ]  +  5 [ 3 . 5^k ]  -  5

              = 7 . 2 . 7^k  +  5 [ 24m - 2 . 7^k + 5 ]  -  5        by (i)

              = 14 . 7^k  +  120m  -  10 . 7^k  +  25  -  5

              = 4 . 7^k  +  120m  +  20

              = 4 ( 7^k - 1 )  +  120m  +  24            since 4.7^k + 20
                                                          = 4(7^k - 1) + 24

              = 4 ( 6t )  +  120m  +  24                 using the HELPER FACT

              = 24t  +  120m  +  24

              = 24 ( t + 5m + 1 )

         which is divisible by 24. So S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 2.7^n + 3.5^n - 5
         is divisible by 24 for all n in N.
```

**Check the tricky line:** `4(7^k - 1) + 24 = 4.7^k - 4 + 24 = 4.7^k + 20`. Correct.

> This one is genuinely harder than the board usually asks. Do it last.

### **WORKED EXAMPLE 23 — `9` divides `4^n - 3n - 1`**

```
STEP 1   Let S(n):  4^n - 3n - 1  is divisible by 9.

STEP 2   n = 1:  4 - 3 - 1 = 0 = 9 x 0.   (Zero IS divisible by 9.)
                 S(1) is TRUE.
         (Check n = 2:  16 - 6 - 1 = 9. Good.)

STEP 3   ASSUME  4^k - 3k - 1 = 9m,  so  4^k = 9m + 3k + 1          ... (i)

STEP 4   TO PROVE  4^(k+1) - 3(k+1) - 1  is divisible by 9.

STEP 5   4^(k+1) - 3(k+1) - 1
              = 4 . 4^k  -  3k  -  4
              = 4 [ 9m + 3k + 1 ]  -  3k  -  4                      by (i)
              = 36m + 12k + 4 - 3k - 4
              = 36m + 9k
              = 9 ( 4m + k )
         Divisible by 9, so S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, 9 divides
         4^n - 3n - 1 for all n in N.
```

### **WORKED EXAMPLE 24 — `x - y` divides `x^n - y^n`**

```
STEP 1   Let S(n):  x^n - y^n  is divisible by  (x - y),  where x =/= y.

STEP 2   n = 1:  x^1 - y^1 = x - y = (x - y) x 1.   S(1) is TRUE.

STEP 3   ASSUME  x^k - y^k = (x - y) m   for some polynomial/integer m  ... (i)

STEP 4   TO PROVE  x^(k+1) - y^(k+1)  is divisible by (x - y).

STEP 5   x^(k+1) - y^(k+1)

              = x . x^k  -  y . y^k

              = x . x^k  -  x . y^k  +  x . y^k  -  y . y^k
                                          ^^^^^^^^^^^^^^
                                       add and subtract x.y^k

              = x ( x^k - y^k )  +  y^k ( x - y )

              = x (x - y) m  +  y^k (x - y)                    using (i)

              = (x - y) [ x m + y^k ]

         Divisible by (x - y), so S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, (x - y) divides
         x^n - y^n for all n in N.
```

> **The "add and subtract" move** is the standard rescue when the expression has
> two different bases. Learn it; it turns up in EAPCET too.

---

# TOPIC 18 — TYPE 3: INEQUALITIES

Now the statement has `>` or `<` instead of `=`. Two changes only:

```
  1.  In Step 5 you do NOT arrive at an equality. You chain inequalities:
          LHS  >  something  >=  something else  =  RHS.

  2.  You are allowed to throw things away, as long as you throw them away
      in the SAFE direction (making a bigger thing bigger, or smaller smaller).
```

### **WORKED EXAMPLE 25**
**Prove that `2^n > n` for all n in N.**

```
STEP 1   Let S(n):   2^n  >  n


STEP 2   BASE STEP.  n = 1.
              LHS = 2^1 = 2,   RHS = 1,   and 2 > 1.
         So S(1) is TRUE.


STEP 3   ASSUME S(k):     2^k  >  k                              ... (i)


STEP 4   TO PROVE S(k+1):  2^(k+1)  >  k + 1


STEP 5   2^(k+1)  =  2 . 2^k

                   >  2 . k              multiplying (i) by 2 (2 > 0, safe)

                   =  k + k

                   >=  k + 1             because k >= 1

         Hence  2^(k+1) > k + 1,  so S(k+1) is TRUE.


STEP 6   Hence by the principle of mathematical induction, 2^n > n
         for all n in N.
```

> **TRAP:** You may only multiply an inequality through by a POSITIVE number.
> Multiplying by a negative flips the sign. Say "since 2 > 0" to be safe.

### **WORKED EXAMPLE 26**
**Prove that `3^n > 2^n` for all n in N.**

```
STEP 1   Let S(n):   3^n  >  2^n

STEP 2   n = 1:   3 > 2.   TRUE.

STEP 3   ASSUME   3^k  >  2^k                                     ... (i)

STEP 4   TO PROVE  3^(k+1)  >  2^(k+1)

STEP 5   3^(k+1)  =  3 . 3^k

                  >  3 . 2^k            multiplying (i) by 3

                  >  2 . 2^k            since 3 . 2^k > 2 . 2^k  (as 2^k > 0)

                  =  2^(k+1)

         So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, 3^n > 2^n
         for all n in N.
```

### **WORKED EXAMPLE 27 — a base step that is NOT n = 1**
**Prove that `2^n > n^2` for all natural numbers `n >= 5`.**

```
  Why n >= 5?     n = 1:  2 > 1     true
                  n = 2:  4 > 4     FALSE
                  n = 3:  8 > 9     FALSE
                  n = 4: 16 > 16    FALSE
                  n = 5: 32 > 25    true   <- the first domino is number 5
```

```
STEP 1   Let S(n):   2^n  >  n^2,   for n >= 5.

STEP 2   BASE STEP.  n = 5.
              LHS = 2^5 = 32,  RHS = 5^2 = 25,  and 32 > 25.
         So S(5) is TRUE.

STEP 3   ASSUME S(k) for some k >= 5:    2^k  >  k^2               ... (i)

STEP 4   TO PROVE S(k+1):   2^(k+1)  >  (k+1)^2

STEP 5   2^(k+1)  =  2 . 2^k

                  >  2 k^2                             by (i)

         It is now enough to show   2k^2 >= (k+1)^2   when k >= 5:

              2k^2 - (k+1)^2  =  2k^2 - k^2 - 2k - 1  =  k^2 - 2k - 1

              For k >= 5:   k^2 - 2k - 1 = k(k - 2) - 1 >= 5(3) - 1 = 14 > 0

         So   2^(k+1)  >  2k^2  >=  (k+1)^2 ,  and S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, 2^n > n^2
         for all natural numbers n >= 5.
```

> **CONCLUSION SENTENCE MUST SAY `n >= 5`.** Writing "for all n in N" here is
> simply wrong, and the examiner will take the mark.

---

# TOPIC 19 — TYPE 4: PRODUCTS

Instead of adding a term, you **multiply** by the next factor. The template does
not change at all — only the word "add" becomes "multiply".

```
  +----------------------------------------------------------------------+
  |    LHS of S(k+1)  =  [ LHS of S(k) ]  x  [ the (k+1)th FACTOR ]      |
  +----------------------------------------------------------------------+
```

### **WORKED EXAMPLE 28**
**Prove that `(1 + 1/1)(1 + 1/2)(1 + 1/3) ... (1 + 1/n) = n + 1`.**

```
STEP 1   Let S(n):   (1 + 1/1)(1 + 1/2) ... (1 + 1/n)  =  n + 1

STEP 2   n = 1:   LHS = 1 + 1/1 = 2 ;   RHS = 1 + 1 = 2.   S(1) TRUE.

STEP 3   ASSUME   (1 + 1/1) ... (1 + 1/k)  =  k + 1                ... (i)

STEP 4   TO PROVE (1 + 1/1) ... (1 + 1/k)(1 + 1/(k+1))  =  k + 2   ... (ii)

STEP 5   LHS of (ii)

              = [ (1+1/1)...(1+1/k) ] x ( 1 + 1/(k+1) )

              = (k + 1) ( 1 + 1/(k+1) )                        using (i)

                               k + 1 + 1
              = (k + 1) x  ---------------
                                k + 1

              = k + 2      = RHS of (ii)          the (k+1) cancels

         So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all n in N.
```

### **WORKED EXAMPLE 29**
**Prove that `(1 - 1/4)(1 - 1/9)(1 - 1/16) ... (1 - 1/n^2) = (n+1)/(2n)` for n >= 2.**

The first factor is `1 - 1/2^2`, so the product starts at `n = 2`.

```
STEP 1   Let S(n):   (1 - 1/2^2)(1 - 1/3^2) ... (1 - 1/n^2) = (n+1)/(2n),  n >= 2

STEP 2   BASE STEP.  n = 2.
              LHS = 1 - 1/4 = 3/4
              RHS = (2+1)/(2 x 2) = 3/4
         S(2) is TRUE.

STEP 3   ASSUME  (1 - 1/2^2) ... (1 - 1/k^2)  =  (k+1)/(2k)        ... (i)

STEP 4   TO PROVE
             (1 - 1/2^2) ... (1 - 1/k^2)(1 - 1/(k+1)^2) = (k+2)/(2(k+1))  ... (ii)

STEP 5   LHS of (ii)

                  k + 1  [        1      ]
              = -------- [ 1 - --------- ]                     using (i)
                   2k     [    (k+1)^2   ]

                  k + 1     (k+1)^2 - 1
              = -------- x  --------------
                   2k          (k+1)^2

         Now  (k+1)^2 - 1 = k^2 + 2k + 1 - 1 = k^2 + 2k = k(k + 2)

                  k + 1      k (k + 2)
              = -------- x  ------------
                   2k         (k+1)^2

                  k + 2
              = -----------      cancel k, and cancel one (k+1)
                 2 (k + 1)

              = RHS of (ii)

         So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, S(n) is true
         for all natural numbers n >= 2.
```

---

# TOPIC 20 — TYPE 5: SEQUENCES DEFINED BY A RECURRENCE

A **recurrence** tells you the first term and how to get each term from the one
before. Induction is the natural tool, because the recurrence *is* the domino
push.

### **WORKED EXAMPLE 30**
**A sequence is defined by `a(1) = 1` and `a(n+1) = a(n) + 2` for all n in N.
Prove that `a(n) = 2n - 1`.**

```
   First few terms:  a(1)=1, a(2)=3, a(3)=5, a(4)=7 ...  looks like 2n - 1.
```

```
STEP 1   Let S(n):   a(n)  =  2n - 1

STEP 2   BASE STEP.  n = 1.
              a(1) = 1  (given)
              2(1) - 1 = 1
         Equal, so S(1) is TRUE.

STEP 3   ASSUME S(k):    a(k)  =  2k - 1                          ... (i)

STEP 4   TO PROVE S(k+1):  a(k+1)  =  2(k+1) - 1  =  2k + 1

STEP 5   a(k+1)  =  a(k) + 2               by the given recurrence

                 =  (2k - 1) + 2           using (i)

                 =  2k + 1

                 =  2(k+1) - 1

         So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, a(n) = 2n - 1
         for all n in N.
```

### **WORKED EXAMPLE 31**
**`a(1) = 3` and `a(n+1) = 2 a(n) + 1`. Prove that `a(n) = 2^(n+1) - 1`.**

```
   Terms: a(1)=3, a(2)=7, a(3)=15, a(4)=31.  And 2^(n+1)-1 gives 3,7,15,31. Good.
```

```
STEP 1   Let S(n):   a(n)  =  2^(n+1) - 1

STEP 2   n = 1:   a(1) = 3 (given);   2^(1+1) - 1 = 4 - 1 = 3.
         S(1) is TRUE.

STEP 3   ASSUME   a(k) = 2^(k+1) - 1                              ... (i)

STEP 4   TO PROVE  a(k+1) = 2^(k+2) - 1

STEP 5   a(k+1)  =  2 a(k) + 1                    by the recurrence

                 =  2 [ 2^(k+1) - 1 ] + 1         using (i)

                 =  2^(k+2) - 2 + 1

                 =  2^(k+2) - 1

         So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, a(n) = 2^(n+1) - 1
         for all n in N.
```

### **WORKED EXAMPLE 32 — links to the Matrices chapter**
**If A is the matrix below, prove that `A^n` has the form shown, for all n in N.**

```
          +---------+                    +---------+
     A =  | 1     1 |          A^n  =    | 1     n |
          | 0     1 |                    | 0     1 |
          +---------+                    +---------+
```

```
STEP 1   Let S(n):  A^n = [ 1  n ; 0  1 ]   (rows separated by ;)

STEP 2   n = 1:  A^1 = [ 1  1 ; 0  1 ], which matches with n = 1.  S(1) TRUE.

STEP 3   ASSUME
                     +---------+
              A^k =  | 1     k |                                   ... (i)
                     | 0     1 |
                     +---------+

STEP 4   TO PROVE
                          +-------------+
              A^(k+1)  =  | 1     k + 1 |
                          | 0       1   |
                          +-------------+

STEP 5   A^(k+1) = A^k . A

              +---------+   +---------+
           =  | 1     k | x | 1     1 |
              | 0     1 |   | 0     1 |
              +---------+   +---------+

              +---------------------------------+
           =  | 1(1) + k(0)      1(1) + k(1)    |
              | 0(1) + 1(0)      0(1) + 1(1)    |
              +---------------------------------+

              +-------------+
           =  | 1     1 + k |
              | 0       1   |
              +-------------+

         which is the required form. So S(k+1) is TRUE.

STEP 6   Hence by the principle of mathematical induction, A^n = [1 n ; 0 1]
         for all n in N.
```

---

# TOPIC 21 — A FEW MORE RESULTS WORTH KNOWING

### `n(n+1)(n+2)` is divisible by 6

```
STEP 2   n = 1:  1 x 2 x 3 = 6.  Divisible by 6.

STEP 3   ASSUME  k(k+1)(k+2) = 6m.

STEP 5   (k+1)(k+2)(k+3)
              = (k+1)(k+2)k  +  (k+1)(k+2)(3)          since k+3 = k + 3
              = 6m + 3(k+1)(k+2)
         Now (k+1)(k+2) is a product of TWO CONSECUTIVE integers, so one of
         them is even; write (k+1)(k+2) = 2t.
              = 6m + 3(2t) = 6m + 6t = 6(m + t).       Divisible by 6.
```

### `1 + (1+2) + (1+2+3) + ... + (1+2+...+n) = n(n+1)(n+2)/6`

The nth term is `n(n+1)/2`, so `t(k+1) = (k+1)(k+2)/2`.

```
STEP 2   n = 1:  LHS = 1;  RHS = 1(2)(3)/6 = 1.  TRUE.

STEP 3   ASSUME  sum to k terms = k(k+1)(k+2)/6.

STEP 5   sum to (k+1) terms
              = k(k+1)(k+2)/6  +  (k+1)(k+2)/2
              = [ k(k+1)(k+2) + 3(k+1)(k+2) ] / 6
              = (k+1)(k+2)(k+3)/6           = required RHS.
```

### `1.1! + 2.2! + 3.3! + ... + n.n! = (n+1)! - 1`

```
STEP 2   n = 1:  LHS = 1 x 1! = 1;  RHS = 2! - 1 = 2 - 1 = 1.  TRUE.

STEP 3   ASSUME  1.1! + ... + k.k! = (k+1)! - 1.

STEP 5   sum to (k+1) terms
              = (k+1)! - 1 + (k+1).(k+1)!
              = (k+1)! [ 1 + (k+1) ] - 1        take out (k+1)!
              = (k+1)! (k+2) - 1
              = (k+2)! - 1                       = required RHS.
```

---

# TOPIC 22 — THE FOUR MISTAKES THAT COST MARKS

```
  +======================================================================+
  |  MISTAKE 1 - FORGETTING (OR RUSHING) THE BASE STEP                   |
  +======================================================================+
```
Writing only "n = 1 is obviously true" earns nothing. You must **show LHS and RHS
separately and state that they are equal.** Three lines, roughly 1.5 marks.

```
  BAD :   For n = 1 it is true.
  GOOD:   n = 1 :  LHS = 1
                   RHS = 1(1+1)/2 = 1
                   LHS = RHS, therefore S(1) is true.
```

```
  +======================================================================+
  |  MISTAKE 2 - ASSUMING WHAT YOU ARE TRYING TO PROVE                   |
  +======================================================================+
```
You may assume `S(k)`. You may **NOT** assume `S(k+1)`. If your working ever
writes down `S(k+1)` as a true statement and manipulates it, you have assumed
your own conclusion and the whole proof is worthless.

```
  BAD :   1 + 2 + ... + (k+1) = (k+1)(k+2)/2
          => k(k+1)/2 + (k+1) = (k+1)(k+2)/2
          => (k+1)(k+2)/2 = (k+1)(k+2)/2  which is true, hence proved.

  GOOD:   LHS of S(k+1) = [1 + 2 + ... + k] + (k+1)
                        = k(k+1)/2 + (k+1)        <- only S(k) used
                        = (k+1)(k+2)/2
                        = RHS of S(k+1).
```

```
  +======================================================================+
  |  MISTAKE 3 - STARTING FROM BOTH SIDES AT ONCE                        |
  +======================================================================+
```
Do **not** write `LHS = RHS` at the top and then simplify both sides down until
they meet. That is the same error as Mistake 2 dressed up.

```
   THE RULE:   START AT THE LHS OF S(k+1).
               TRAVEL IN ONE DIRECTION ONLY.
               ARRIVE AT THE RHS OF S(k+1).

               LHS  ->  ->  ->  ->  ->  RHS      allowed
               LHS  <-  <-   ->  ->     RHS      NOT allowed
```

```
  +======================================================================+
  |  MISTAKE 4 - NO CONCLUSION SENTENCE                                  |
  +======================================================================+
```
The last line is worth a full mark and takes eight seconds:

```
   "S(1) is true and S(k) true implies S(k+1) true. Hence by the principle
    of mathematical induction, S(n) is true for all n in N."
```

Students who finish the algebra and stop lose that mark every single time.

### Two more small ones

```
  MISTAKE 5 - Writing the wrong (k+1)th term.
              Cure: write t(n) from the question, cross out n, write k+1.

  MISTAKE 6 - In divisibility, writing "k^3 + 2k is divisible by 3" and then
              not being able to use it. ALWAYS turn it into an EQUATION:
              "k^3 + 2k = 3m for some integer m". You cannot do algebra with
              the word 'divisible'.
```

---

# TOPIC 23 — HOW TO ATTACK AN INDUCTION QUESTION IN THE EXAM HALL

```
   0:00   Read the question. Underline the DIVISOR, or the RHS formula,
          and any condition like "for n >= 5".

   0:20   Put n = 1 (or the stated start) into both sides / into the
          expression. Confirm it works. If it does not, re-read.

   0:40   Write "STEP 1  Let S(n) be the statement ..." and copy the claim.

   1:30   Write the base step properly: LHS = ... , RHS = ... , equal, so
          S(1) is true.

   3:00   Write "Assume S(k) is true, that is ... (i)".
          For divisibility, write "= d.m for some integer m".

   4:00   Write "To prove S(k+1), we must show ... (ii)" by replacing every
          n with k+1 in the ORIGINAL statement. Do this mechanically.

   5:00   Do the algebra of Step 5. Aim for the target you already wrote
          down in (ii).

   8:00   Write the conclusion sentence.

   Total: about 8-9 minutes for 7 marks. That is the best rate in the paper.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write "Let S(n) be the statement ..." at the very top?

  [ ]  Did I do the BASE STEP with LHS and RHS shown SEPARATELY?

  [ ]  Did I write the words "Assume S(k) is true" and number it (i)?

  [ ]  For a divisibility question, did I write the assumption as an
       EQUATION  f(k) = d.m  with m an integer?

  [ ]  Did I write out exactly what S(k+1) claims, before doing algebra?

  [ ]  Did I get the (k+1)th term by putting k+1 into t(n)?

  [ ]  Did I start at the LHS of S(k+1) and travel in ONE direction?

  [ ]  Did I actually USE the assumption (i)? (If not, something is wrong.)

  [ ]  Did I take out the common factor rather than expanding everything?

  [ ]  Does my final line literally match the RHS I wrote in (ii)?

  [ ]  Did I write the CONCLUSION sentence with the words
       "by the principle of mathematical induction"?

  [ ]  If the claim started at n = 2 or n = 5, does my conclusion say
       "for all n >= 2" / "for all n >= 5" and NOT "for all n in N"?

  [ ]  Did I remember any condition like r =/= 1 or x =/= y?
```

```
  +======================================================================+
  |                                                                      |
  |   FINAL WORD                                                         |
  |                                                                      |
  |   You cannot be "bad at" this chapter. There is nothing to be bad    |
  |   at. There is one form and you fill it in.                          |
  |                                                                      |
  |   Practise the form until you can write Steps 1, 2, 3, 4 and 6       |
  |   for a formula you have never seen. That is 5 marks before you      |
  |   have done a single line of algebra.                                |
  |                                                                      |
  +======================================================================+
```
