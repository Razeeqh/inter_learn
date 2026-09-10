# Mathematical Induction — Mind Map

**Maths 1A · Chapter 2 · The EASIEST 7 marks in the whole paper**

Read this line twice, because it is the whole point of the chapter:

```
  +==========================================================================+
  |                                                                          |
  |     THE METHOD IS ALWAYS THE SAME.                                       |
  |                                                                          |
  |     The question changes every year. The ANSWER STRUCTURE does not.      |
  |     Six steps. Same six steps. Every time. Forever.                      |
  |                                                                          |
  |     Learn the six steps once and you own a guaranteed 7 marks,          |
  |     even if you are terrible at maths.                                  |
  |                                                                          |
  +==========================================================================+
```

There is no other chapter in Maths IA where a weak student can score full marks
so reliably. You are not being asked to *discover* anything. You are being asked
to *fill in a form*. Memorise the form.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                    M A T H E M A T I C A L   I N D U C T I O N
                                       |
                                       |
                        THE PRINCIPLE (2 steps only)
                                       |
                   +-------------------+-------------------+
                   |                                       |
             BASE STEP                              INDUCTIVE STEP
        "Check n = 1 works"                    "If n = k works, show
                   |                              n = k+1 must work"
                   |                                       |
                   +-------------------+-------------------+
                                       |
                            THEREFORE it works for
                            EVERY natural number n
                                       |
                                       |
        +----------------+-------------+------------+----------------+
        |                |             |            |                |
      TYPE 1           TYPE 2        TYPE 3       TYPE 4           TYPE 5
      SUMS          DIVISIBILITY  INEQUALITIES  PRODUCTS       RECURRENCE
        |                |             |            |                |
   "Show that        "Show that     "Show that  "Show that      "a(1) given,
    1+2+...+n         3 divides      2^n > n"    (1+1/1)         a(n+1) given,
    = n(n+1)/2"       n^3 + 2n"                  (1+1/2)...      prove formula
        |                |             |          = n+1"         for a(n)"
        |                |             |            |                |
   split off the   write the k+1   use the k     multiply       substitute the
   LAST TERM       expression as   result then   both sides     recurrence, then
   and use the     [k expression]  do ONE more   by the next    use the k result
   assumption      + [multiple of  small step    factor
                    the divisor]
                         |
        +----------------+----------------+
        |                |                |
   3, 5, 7, 8, 9,   The AP favourites:   The trick:
   11, 17, 24, 64,  17 | 3.5^(2n+1)      make the (k+1)
   133, 225         + 2^(3n+1)           expression LOOK
                    11 | 2.4^(2n+1)      like the k one
                    + 3^(3n+1)
                    64 | 49^n + 16n - 1
```

---

## THE 60-SECOND VERSION — THE DOMINO PICTURE

Imagine an infinite line of dominoes standing up.

```
      |    |    |    |    |    |    |    |    |    |
      |    |    |    |    |    |    |    |    |    |     ...  forever
      |    |    |    |    |    |    |    |    |    |
    -----------------------------------------------------------
      1    2    3    4    5    6    7    8    9   10


   QUESTION:  How do you knock down ALL of them?
              You cannot push them one at a time - there are infinitely many.

   ANSWER:    You only have to check TWO things.


   THING 1 (the BASE STEP)                THING 2 (the INDUCTIVE STEP)
   "The FIRST domino falls."              "ANY falling domino knocks
                                           over the NEXT one."

        \                                       \
         \   |    |    |                         \   |    |
          \  |    |    |                          \  |    |
    ------------------------                ------------------------
       1    2    3    4                        k   k+1  k+2


   Put the two together:

      domino 1 falls          (Thing 1)
         -> so domino 2 falls (Thing 2 with k = 1)
            -> so domino 3 falls (Thing 2 with k = 2)
               -> so domino 4 falls (Thing 2 with k = 3)
                  -> ... and so on, for ever.

   ALL the dominoes fall. You never had to check them one by one.
```

That is the entire chapter. In maths:

| Domino idea | Maths name | What you write |
|---|---|---|
| The first domino falls | **BASE STEP** | "S(1) is true, because LHS = RHS = ..." |
| Falling domino pushes the next | **INDUCTIVE STEP** | "Assume S(k) is true. Then S(k+1) is true." |
| All dominoes fall | **CONCLUSION** | "Hence by the principle of mathematical induction, S(n) is true for all n in N." |

> **If you skip the base step, no domino ever starts falling — and you lose marks.**
> **If you skip the inductive step, the dominoes do not touch each other — and you lose marks.**

---

## WHERE THE MARKS ARE (AP Inter, Maths IA)

| Topic | Section | Marks | How often |
|---|---|---|---|
| **Prove a SUM formula by induction** | **C** | **7** | Almost every single year |
| **Prove a DIVISIBILITY result by induction** | **C** | **7** | Very often, alternates with sums |
| Statement of the Principle of M.I. | A | 2 | Occasionally |
| Write S(1) / S(k) / S(k+1) for a given statement | A | 2 | Occasionally |
| Small inequality or product proof | B | 4 | Rarely, but easy if it comes |

```
  +--------------------------------------------------------------------+
  |  REALISTIC TOTAL FROM THIS ONE CHAPTER:  7 marks, near-guaranteed. |
  |  (sometimes 7 + 2 = 9)                                             |
  |                                                                    |
  |  You need 26 to pass Maths IA.                                     |
  |  This chapter alone is over a QUARTER of the pass mark,            |
  |  and it is the one chapter where the method never changes.         |
  +--------------------------------------------------------------------+
```

**Where it sits in the paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  rare
  Section B  (4 marks each, answer any 5)    ->  rare
  Section C  (7 marks each, answer any 5)    ->  usually Q22
                                                 (sometimes Q21 or Q23)
```

Since you must answer **any 5 of 7** in Section C, this chapter is one of the
five you should have already decided to attempt before you even open the paper.

---

## STUDY THIS ORDER

```
  STEP 1   Memorise the SIX-STEP TEMPLATE
           (write it out from memory 5 times - this is the whole chapter)
              |
              |
  STEP 2   Do ONE easy sum:   1 + 2 + 3 + ... + n = n(n+1)/2
           using the template, word for word
              |
              |
  STEP 3   Learn the ONE TRICK of Step 5:
              LHS of S(k+1)  =  [ LHS of S(k) ]  +  [ the (k+1)th term ]
           then replace the bracket by the assumption
              |
              |
     +--------+--------+--------+--------+
     |        |        |        |        |
  STEP 4   STEP 5   STEP 6   STEP 7   STEP 8
  Squares  Cubes    Odd      AP sum   GP sum
  & cubes           numbers
     |        |        |        |        |
     +--------+--------+--------+--------+
              |
  STEP 9   Product-type sums:  1.2 + 2.3 + 3.4 + ...
           and fraction sums:  1/(1.2) + 1/(2.3) + ...
              |
              |
  STEP 10  DIVISIBILITY - learn the ONE trick:
           write the (k+1) expression as
              (multiplier) x [ the k expression ]  +  (multiple of the divisor)
              |
              |
  STEP 11  The three AP favourites:
              64 | 49^n + 16n - 1
              17 | 3.5^(2n+1) + 2^(3n+1)
              11 | 2.4^(2n+1) + 3^(3n+1)
              |
              |
  STEP 12  Inequalities (2^n > n), products, recurrences  - only if time left
```

---

## THE KEY BOX — copy this onto the inside cover of your notebook

```
  +======================================================================+
  |                                                                      |
  |   THE SIX-STEP TEMPLATE  (reproduce this in EVERY induction answer)  |
  |                                                                      |
  |   STEP 1   Let S(n) be the statement: .............................  |
  |                                                                      |
  |   STEP 2   BASE STEP.  Put n = 1.                                    |
  |            LHS = ......        RHS = ......                          |
  |            LHS = RHS, so S(1) is TRUE.                               |
  |                                                                      |
  |   STEP 3   ASSUME S(k) is true for some k in N, that is              |
  |            ..................................  ... (i)               |
  |                                                                      |
  |   STEP 4   TO PROVE S(k+1), i.e. we must show                        |
  |            ..................................  ... (ii)              |
  |                                                                      |
  |   STEP 5   LHS of S(k+1)                                             |
  |              = [ LHS of S(k) ] + [ the (k+1)th term ]                |
  |              = [ RHS of (i) ]  + [ the (k+1)th term ]   <- use (i)   |
  |              = ... simplify ...                                      |
  |              = RHS of S(k+1)                                         |
  |            So S(k+1) is TRUE.                                        |
  |                                                                      |
  |   STEP 6   S(1) is true, and S(k) true => S(k+1) true.               |
  |            Hence by the principle of mathematical induction,         |
  |            S(n) is true for all n in N.                              |
  |                                                                      |
  +======================================================================+
```

**Everything else in this chapter is just different things written on the dotted lines.**

---

## THE ONE LINE THAT EARNS MOST OF THE MARKS

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     LHS of S(k+1)  =  [ LHS of S(k) ]  +  [ the (k+1)th term ]      |
  |                                                                      |
  |     ...then swap the bracket for what the ASSUMPTION says it is.    |
  |                                                                      |
  +----------------------------------------------------------------------+
```

To get the **(k+1)th term**, take the general nth term printed in the question
and replace every `n` by `k+1`. That is all.

| The nth term in the question | The (k+1)th term you add on |
|---|---|
| `n` | `k + 1` |
| `n^2` | `(k+1)^2` |
| `2n - 1` | `2(k+1) - 1 = 2k + 1` |
| `n(n+1)` | `(k+1)(k+2)` |
| `1 / (n(n+1))` | `1 / ((k+1)(k+2))` |
| `a + (n-1)d` | `a + kd` |
| `a r^(n-1)` | `a r^k` |
| `(n+1) 2^(n-1)` | `(k+2) 2^k` |
| `1 / ((3n-2)(3n+1))` | `1 / ((3k+1)(3k+4))` |

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1, morning — 2 hours.**
Write the six-step template out from memory ten times. Not nine. Ten.
Then prove `1 + 2 + 3 + ... + n = n(n+1)/2` using it, without looking.

**Day 1, evening — 2 hours.**
Three sum questions, full template each time:
1. `1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6`
2. `1^3 + 2^3 + ... + n^3 = n^2 (n+1)^2 / 4`
3. `1.2.3 + 2.3.4 + ... + n(n+1)(n+2) = n(n+1)(n+2)(n+3)/4`
Notice that in all three, Step 5 is *take out the common factor, add the fractions,
factorise*. Same move every time.

**Day 2, morning — 2 hours.**
Divisibility. Just three:
1. `3` divides `n^3 + 2n`
2. `64` divides `49^n + 16n - 1`
3. `17` divides `3.5^(2n+1) + 2^(3n+1)`
The trick is always: get the (k+1) expression to contain the k expression.

**Day 2, evening — 1 hour.**
Do the AP sum `a + (a+d) + ... + [a + (n-1)d] = (n/2)[2a + (n-1)d]`
and the GP sum `a + ar + ... + ar^(n-1) = a(r^n - 1)/(r - 1)`.
Then rewrite the six-step template one last time before you sleep.

```
  That is 7 hours of work for 7 marks that come up every year,
  in a form you have already practised.
  No other chapter in Maths IA gives you that deal.
```
