# Probability — Concepts From Zero

Read this with a pen in your hand. Every worked example is done with every single
step written out — copy them into a notebook exactly as they appear here.

Nothing in this chapter needs you to be good at maths. It needs you to be careful
at COUNTING. That is all.

---

# ==========================================================
# TOPIC 1 — RANDOM EXPERIMENT, SAMPLE SPACE, EVENT
# ==========================================================

## 1.1 What is a random experiment?

An experiment is called **random** if:

1. it can be repeated any number of times under the same conditions,
2. all the possible results are known in advance,
3. but **which one will actually happen cannot be predicted**.

```
  +----------------------------+----------------------------------+
  |  RANDOM                    |  NOT RANDOM (deterministic)      |
  +----------------------------+----------------------------------+
  |  Tossing a coin            |  Heating water to 100 C -> boils |
  |  Throwing a die            |  Dropping a stone -> it falls    |
  |  Drawing a card from a pack|  2 + 2 -> always 4               |
  |  Picking a ball from a bag |                                  |
  +----------------------------+----------------------------------+
```

Everyday analogy: a random experiment is like a cricket toss. You know it will be
heads or tails. You do not know which. That "known list, unknown result" is exactly
what randomness means.

## 1.2 Sample space S

**The sample space is the LIST of every possible outcome.** We call it `S`.

```
  EXPERIMENT                       SAMPLE SPACE S                   n(S)
  ------------------------------   ------------------------------   ----
  One coin tossed                  { H , T }                          2
  Two coins tossed                 { HH , HT , TH , TT }              4
  Three coins tossed               { HHH,HHT,HTH,THH,
                                     HTT,THT,TTH,TTT }                8
  One die thrown                   { 1,2,3,4,5,6 }                    6
  Two dice thrown                  { (1,1),(1,2), ... ,(6,6) }       36
  One card from a pack             all 52 cards                      52
```

```
  +---------------------------------------------------------------+
  |   USEFUL SHORTCUTS                                            |
  |                                                               |
  |   n coins tossed        ->   n(S) = 2^n                       |
  |   n dice thrown         ->   n(S) = 6^n                       |
  |   1 card from a pack    ->   n(S) = 52                        |
  |   r objects from n      ->   n(S) = nCr   (order not counted) |
  +---------------------------------------------------------------+
```

## 1.3 Event E

**An event is any part (subset) of the sample space.**

Take one die. `S = {1,2,3,4,5,6}`.

```
  "an even number turns up"       ->  E = { 2, 4, 6 }
  "a number greater than 4"       ->  E = { 5, 6 }
  "the number 3 turns up"         ->  E = { 3 }
  "a number less than 7"          ->  E = { 1,2,3,4,5,6 } = S
  "the number 9 turns up"         ->  E = { }   (empty)
```

An event **occurs** when the outcome that actually happened is inside E.

> **TRAP:** Students write the event as a NUMBER. It is a SET. Write `E = {2,4,6}`,
> not `E = 3`. In a 2-mark question the set itself is worth a mark.

---

## THE TWO-DICE TABLE — memorise this picture

Half the questions in this chapter use two dice. Draw this grid once and you will
never count wrong again.

```
              SECOND DIE
           1     2     3     4     5     6
        +-----+-----+-----+-----+-----+-----+
    1   | 2   | 3   | 4   | 5   | 6   | 7   |
        +-----+-----+-----+-----+-----+-----+
    2   | 3   | 4   | 5   | 6   | 7   | 8   |
 F      +-----+-----+-----+-----+-----+-----+
 I  3   | 4   | 5   | 6   | 7   | 8   | 9   |
 R      +-----+-----+-----+-----+-----+-----+
 S  4   | 5   | 6   | 7   | 8   | 9   | 10  |
 T      +-----+-----+-----+-----+-----+-----+
    5   | 6   | 7   | 8   | 9   | 10  | 11  |
 D      +-----+-----+-----+-----+-----+-----+
 I  6   | 7   | 8   | 9   | 10  | 11  | 12  |
 E      +-----+-----+-----+-----+-----+-----+

  The entries are the SUMS.  Total boxes = 36.

  How many boxes give each sum:
   sum   2  3  4  5  6  7  8  9 10 11 12
   ways  1  2  3  4  5  6  5  4  3  2  1     (adds to 36 — check it)

  DOUBLETS are the diagonal:  (1,1)(2,2)(3,3)(4,4)(5,5)(6,6)  ->  6 of them
```

---

## THE PACK OF CARDS — memorise this picture

```
                        52 CARDS
                            |
              +-------------+-------------+
              |                           |
          26 RED                      26 BLACK
              |                           |
      +-------+-------+           +-------+-------+
      |               |           |               |
   HEARTS (13)  DIAMONDS (13)   SPADES (13)   CLUBS (13)

  Every suit has:  A 2 3 4 5 6 7 8 9 10 J Q K       = 13 cards

  FACE CARDS  =  J , Q , K   ->  3 per suit  ->  12 in the pack
  ACES        =  4           KINGS = 4    QUEENS = 4    JACKS = 4
  HONOURS     =  A, K, Q, J  ->  4 per suit ->  16 in the pack
```

> **TRAP:** "Face cards" means J, Q, K only — **12** cards. The Ace is NOT a face
> card. If a question says "picture cards" it means the same 12.

---

### WORKED EXAMPLE 1.1
A die is thrown twice. Write the sample space and the event "the sum is 9".

```
  n(S) = 6 x 6 = 36

  E = { (3,6) , (4,5) , (5,4) , (6,3) }        n(E) = 4
```

Look at the table above: the number 9 appears in exactly 4 boxes. Same answer.

---

# ==========================================================
# TOPIC 2 — THE EIGHT TYPES OF EVENTS
# ==========================================================

This is a **guaranteed 2-mark question**. Learn the word, the meaning, and one
example. I will use ONE die (`S = {1,2,3,4,5,6}`) for all of them so you only
have one picture to remember.

```
  +------------------+-------------------------------+---------------------------+
  |  NAME            |  MEANING                      |  EXAMPLE (one die)        |
  +------------------+-------------------------------+---------------------------+
  |  SIMPLE          |  contains exactly ONE outcome |  E = {5}                  |
  |  (elementary)    |                               |  "the die shows 5"        |
  +------------------+-------------------------------+---------------------------+
  |  COMPOUND        |  contains TWO OR MORE         |  E = {2,4,6}              |
  |  (composite)     |  outcomes                     |  "an even number"         |
  +------------------+-------------------------------+---------------------------+
  |  SURE            |  E = S , it must happen       |  E = {1,2,3,4,5,6}        |
  |  (certain)       |  P(E) = 1                     |  "a number below 7"       |
  +------------------+-------------------------------+---------------------------+
  |  IMPOSSIBLE      |  E = { } , it cannot happen   |  E = { }                  |
  |                  |  P(E) = 0                     |  "the die shows 8"        |
  +------------------+-------------------------------+---------------------------+
  |  COMPLEMENTARY   |  E' = everything NOT in E     |  E = {2,4,6}              |
  |                  |  E u E' = S , E n E' = { }    |  E' = {1,3,5}             |
  +------------------+-------------------------------+---------------------------+
  |  MUTUALLY        |  A n B = { }                  |  A = {1,2} , B = {5,6}    |
  |  EXCLUSIVE       |  they cannot happen together  |  no number is in both     |
  |  (disjoint)      |                               |                           |
  +------------------+-------------------------------+---------------------------+
  |  EXHAUSTIVE      |  A u B u C ... = S            |  A={1,2} B={3,4} C={5,6}  |
  |                  |  together they cover          |  union = S                |
  |                  |  everything                   |                           |
  +------------------+-------------------------------+---------------------------+
  |  EQUALLY LIKELY  |  no outcome is favoured over  |  a FAIR die: each face     |
  |                  |  any other                    |  has chance 1/6           |
  +------------------+-------------------------------+---------------------------+
```

## 2.1 The pictures

```
   MUTUALLY EXCLUSIVE (disjoint)        NOT mutually exclusive
   A n B = { }                          A n B is not empty

   +---------------------------+        +---------------------------+
   |  S                        |        |  S                        |
   |    ******     ******      |        |    ******  ******         |
   |   *      *   *      *     |        |   *      **      *        |
   |   *   A  *   *   B  *     |        |   *   A  *#*  B  *        |
   |   *      *   *      *     |        |   *      **      *        |
   |    ******     ******      |        |    ******  ******         |
   |                           |        |        overlap = A n B    |
   +---------------------------+        +---------------------------+
```

```
   EXHAUSTIVE  (A u B u C = S)          COMPLEMENTARY  (A and A')

   +---------------------------+        +---------------------------+
   |  S                        |        |####  S  ##################|
   |  +--------+-------+-----+ |        |####   ******   ###########|
   |  |        |       |     | |        |####  *      *  ###########|
   |  |   A    |   B   |  C  | |        |####  *   A  *  ###########|
   |  |        |       |     | |        |####  *      *  ###########|
   |  +--------+-------+-----+ |        |####   ******   ###########|
   |  no gaps left over        |        |####  shaded = A'  ########|
   +---------------------------+        +---------------------------+
```

## 2.2 Complementary = mutually exclusive AND exhaustive

```
  +-------------------------------------------------------------------+
  |   A and A' satisfy BOTH:                                          |
  |                                                                   |
  |        A n A' = { }        (mutually exclusive)                   |
  |        A u A' = S          (exhaustive)                           |
  |                                                                   |
  |   So EVERY complementary pair is mutually exclusive,              |
  |   but NOT every mutually exclusive pair is complementary.         |
  |                                                                   |
  |   Proof by example:  A = {1,2} , B = {5,6} on a die.              |
  |   They are disjoint, but 3 and 4 are in neither. Not exhaustive.  |
  +-------------------------------------------------------------------+
```

### WORKED EXAMPLE 2.1
Two dice are thrown. `A` = "sum is 7", `B` = "a doublet appears".
Are A and B mutually exclusive?

```
  A = { (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) }        n(A) = 6
  B = { (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) }        n(B) = 6

  Every doublet has sum  2, 4, 6, 8, 10 or 12  -- all EVEN.
  7 is odd, so no doublet can give sum 7.

  A n B = { }      ->  YES, mutually exclusive.
```

> **TRAP:** "Mutually exclusive" is about the SETS, not about the numbers.
> Always write down both sets and look for a common element. If you find one,
> they are NOT mutually exclusive — full stop.

---

# ==========================================================
# TOPIC 3 — THE CLASSICAL DEFINITION OF PROBABILITY
# ==========================================================

## 3.1 The definition

Suppose a random experiment has `n` outcomes which are **equally likely, mutually
exclusive and exhaustive**, and `m` of them are favourable to an event E. Then

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                 m        n(E)      number of favourable outcomes  |
  |      P(E)  =  -----  =  ------  =  ------------------------------ |
  |                 n        n(S)      total number of outcomes       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

The three words in bold are part of the definition. In a 2-mark "state the
classical definition" question, leaving them out costs a mark.

## 3.2 What the value means

```
   0                    0.5                        1
   |---------------------|-------------------------|
   |                     |                         |
 IMPOSSIBLE          EVEN CHANCE                  SURE
 P = 0                                          P = 1

  Probability can NEVER be negative and NEVER be more than 1.
  If your answer is 7/5 or -0.3, you have made an arithmetic mistake.
```

### WORKED EXAMPLE 3.1
One card is drawn from a well-shuffled pack. Find the probability that it is
(a) a king, (b) a red card, (c) a face card, (d) a red king.

```
  n(S) = 52

  (a)  kings = 4              P = 4/52  = 1/13
  (b)  red cards = 26         P = 26/52 = 1/2
  (c)  face cards = 12        P = 12/52 = 3/13
  (d)  red kings = 2          P = 2/52  = 1/26
```

### WORKED EXAMPLE 3.2
Three coins are tossed. Find the probability of getting exactly two heads.

```
  S = { HHH, HHT, HTH, THH, HTT, THT, TTH, TTT }        n(S) = 2^3 = 8

  "exactly two heads"  ->  E = { HHT , HTH , THH }      n(E) = 3

  P(E) = 3 / 8
```

> **TRAP:** "Exactly two heads" is 3 cases. "At least two heads" is 4 cases
> (add HHH). Read the words *exactly* / *at least* / *at most* very slowly.

```
  AT LEAST 2 heads   =  2 heads OR 3 heads     ->  {HHT,HTH,THH,HHH}  ->  4/8
  AT MOST  2 heads   =  0 or 1 or 2 heads      ->  everything but HHH ->  7/8
  EXACTLY  2 heads   =  2 heads only           ->  3/8
```

### WORKED EXAMPLE 3.3
Two dice are thrown. Find the probability that the sum is 8.

```
  n(S) = 36
  sum 8 -> (2,6) (3,5) (4,4) (5,3) (6,2)        n(E) = 5

  P(E) = 5 / 36
```

## 3.3 Using nCr to count the favourable cases

When things are drawn **all together** (order does not matter), use combinations.

```
  +-------------------------------------------------------------------+
  |                    n!                                             |
  |     nCr   =   -------------        nC0 = 1 ,   nCn = 1            |
  |                r! (n - r)!         nC1 = n ,   nCr = nC(n-r)      |
  |                                                                   |
  |     Quick values:   5C2 = 10    6C2 = 15    4C2 = 6               |
  |                     9C3 = 84    10C4 = 210  52C2 = 1326           |
  +-------------------------------------------------------------------+
```

### WORKED EXAMPLE 3.4
A bag contains 5 white and 4 red balls. Three balls are drawn at random.
Find the probability that 2 are white and 1 is red.

```
  STEP 1   Total ways to draw 3 balls from 9:
           n(S) = 9C3 = (9 x 8 x 7) / (3 x 2 x 1) = 84

  STEP 2   Favourable: choose 2 white from 5  AND  1 red from 4:
           n(E) = 5C2 x 4C1 = 10 x 4 = 40

  STEP 3            40      10
           P(E) =  ----  = ----
                    84      21
```

> **TRAP:** Use `x` (multiply) between the two choices, never `+`. "2 white AND
> 1 red" is a single joint choice, so the counts MULTIPLY.

### WORKED EXAMPLE 3.5
A committee of 4 is chosen from 6 men and 4 women. Find the probability that it
contains exactly 2 women.

```
  n(S) = 10C4 = 210
  n(E) = 4C2 x 6C2 = 6 x 15 = 90

           90      3
  P(E) =  ----- = ---
          210      7
```

---

# ==========================================================
# TOPIC 4 — THE AXIOMATIC DEFINITION
# ==========================================================

The classical definition breaks down when the outcomes are NOT equally likely
(a loaded die, a bent coin). So mathematicians gave a definition that always works.

**Definition.** Let S be a sample space. A function P that assigns to every event
A a real number P(A) is called a **probability function** if it obeys these axioms:

```
  +-------------------------------------------------------------------+
  |                    THE THREE AXIOMS (Kolmogorov)                  |
  |                                                                   |
  |   AXIOM 1   P(A) >= 0            for every event A                |
  |             (probability is never negative)                       |
  |                                                                   |
  |   AXIOM 2   P(S) = 1                                              |
  |             (something must happen)                               |
  |                                                                   |
  |   AXIOM 3   If A and B are mutually exclusive (A n B = { }) then  |
  |                                                                   |
  |                  P(A u B) = P(A) + P(B)                           |
  |                                                                   |
  |             (extends to any number of pairwise disjoint events)   |
  +-------------------------------------------------------------------+
```

## 4.1 Results that FOLLOW from the axioms

These are short 2-mark proofs. Learn them; they are almost free marks.

```
  RESULT 1     P( { } ) = 0

     S and { } are disjoint and  S u { } = S
     ->  P(S) = P(S) + P({ })      [axiom 3]
     ->  P({ }) = 0
```

```
  RESULT 2     P(A') = 1 - P(A)

     A and A' are disjoint and  A u A' = S
     ->  P(A) + P(A') = P(S) = 1        [axioms 3 and 2]
     ->  P(A') = 1 - P(A)
```

```
  RESULT 3     0 <= P(A) <= 1

     P(A) >= 0 by axiom 1.
     P(A') >= 0 also, and P(A') = 1 - P(A) >= 0  ->  P(A) <= 1.
```

```
  RESULT 4     If A is a subset of B then P(A) <= P(B)

     B = A u (B - A) , disjoint
     ->  P(B) = P(A) + P(B - A) >= P(A)     since P(B - A) >= 0
```

```
  RESULT 5     P(A n B') = P(A) - P(A n B)        ["A but not B"]

     A = (A n B) u (A n B') , disjoint
     ->  P(A) = P(A n B) + P(A n B')
```

Result 5 is used constantly in 4-mark numericals. Draw it:

```
   +--------------------------------------+
   |  S                                   |
   |      *********   *********           |
   |     *#########* *         *          |
   |     *#########*#*         *          |
   |     *## A n B'##* A n B  *  B        |
   |     *#########*#*         *          |
   |      *********   *********           |
   |        A                             |
   |   shaded = A but NOT B = A - B       |
   +--------------------------------------+
```

---

# ==========================================================
# TOPIC 5 — COMPLEMENT AND ODDS
# ==========================================================

## 5.1 The complement rule — your best friend

```
  +-------------------------------------------------------------------+
  |          P(A')  =  1 - P(A)         and       P(A) = 1 - P(A')    |
  +-------------------------------------------------------------------+
```

Whenever a question contains the words **"at least one"**, do NOT count the cases.
Count the OPPOSITE — "none" — and subtract from 1. It is always shorter.

```
  P(at least one)  =  1  -  P(none)
```

### WORKED EXAMPLE 5.1
Three coins are tossed. Find P(at least one head).

```
  THE LONG WAY:   1H, 2H or 3H  ->  3 + 3 + 1 = 7 cases  ->  7/8

  THE SHORT WAY:  "no head" is only TTT  ->  P = 1/8
                  P(at least one head) = 1 - 1/8 = 7/8      <-- do this
```

## 5.2 Odds in favour and odds against

If an event has `m` favourable and `n` unfavourable outcomes:

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    ODDS IN FAVOUR of A   =   m : n   =   P(A)  : P(A')            |
  |                                                                   |
  |    ODDS AGAINST A        =   n : m   =   P(A') : P(A)             |
  |                                                                   |
  |    Going back:   if odds in favour are  a : b  then               |
  |                                                                   |
  |                            a                        b             |
  |                 P(A) = --------- ,     P(A') = --------           |
  |                          a + b                   a + b            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

> **TRAP:** Odds are NOT a probability. Odds compare favourable to UNFAVOURABLE
> (m : n). Probability compares favourable to TOTAL (m / (m+n)). Mixing them up
> is the single most common 2-mark loss in this chapter.

### WORKED EXAMPLE 5.2
Find the odds in favour of and against getting an even number on one throw of a die.

```
  favourable m = 3  ({2,4,6})     unfavourable n = 3  ({1,3,5})

  odds in favour  =  3 : 3  =  1 : 1
  odds against    =  3 : 3  =  1 : 1
```

### WORKED EXAMPLE 5.3
The odds against an event are 5 : 3. Find the probability that the event happens.

```
  odds AGAINST = 5 : 3   means  unfavourable : favourable = 5 : 3

                       3        3
  P(event)  =  --------------  = ---
                   3 + 5          8
```

### WORKED EXAMPLE 5.4
If P(A) = 2/5, find the odds in favour of A and the odds against A.

```
  P(A') = 1 - 2/5 = 3/5

  odds in favour  =  P(A) : P(A')  =  2/5 : 3/5  =  2 : 3
  odds against    =  3 : 2
```

---

# ==========================================================
# TOPIC 6 — THE ADDITION THEOREM  (the "OR" rule)
# ==========================================================

## 6.1 The idea in plain language

If you count the members of club A and the members of club B and add them,
anyone in BOTH clubs has been counted twice. So subtract them once.

```
   +------------------------------------------------+
   |  S                                             |
   |        **********      **********              |
   |       *          *    *          *             |
   |      *    A only  * ** * B only   *            |
   |      *            *##*            *            |
   |      *            *##*            *            |
   |       *          * ** *          *             |
   |        **********      **********              |
   |                    ##                          |
   |             ## = A n B , counted twice          |
   +------------------------------------------------+

     P(A) + P(B)  counts the ## part twice
     so subtract it once:   P(A u B) = P(A) + P(B) - P(A n B)
```

## 6.2 STATEMENT AND PROOF  (7-mark question — learn it word for word)

```
  +-------------------------------------------------------------------+
  |   ADDITION THEOREM ON PROBABILITY                                 |
  |                                                                   |
  |   If A and B are any two events of a sample space S, then         |
  |                                                                   |
  |         P(A u B)  =  P(A)  +  P(B)  -  P(A n B)                   |
  +-------------------------------------------------------------------+
```

**PROOF.**

```
  STEP 1   Split  A u B  into two disjoint pieces.

              A u B  =  A  u  (A' n B)

           because everything in B that is not already in A is in A' n B.
           These two pieces have nothing in common:  A n (A' n B) = { }

           By AXIOM 3:

              P(A u B)  =  P(A) + P(A' n B)               ..... (1)


  STEP 2   Split  B  into two disjoint pieces.

              B  =  (A n B)  u  (A' n B)

           (the part of B inside A, and the part of B outside A)
           Again these have nothing in common. By AXIOM 3:

              P(B)  =  P(A n B) + P(A' n B)

           so   P(A' n B)  =  P(B) - P(A n B)             ..... (2)


  STEP 3   Put (2) into (1):

              P(A u B)  =  P(A) + P(B) - P(A n B)

                                                    Hence proved.
```

The picture behind Step 1 and Step 2:

```
   +----------------------------------------------+
   |  S                                           |
   |     **********       **********              |
   |    *          *     *          *             |
   |   *     A     * A n * A' n B   *             |
   |   *  (all of  *  B  *          *             |
   |   *   it)     *     *          *             |
   |    *          *     *          *             |
   |     **********       **********              |
   |                                              |
   |   A u B  =  [ A ]  +  [ A' n B ]             |
   |   B      =  [ A n B ]  +  [ A' n B ]         |
   +----------------------------------------------+
```

## 6.3 The mutually exclusive version

```
  +-------------------------------------------------------------------+
  |   If A and B are MUTUALLY EXCLUSIVE then  A n B = { }              |
  |   so  P(A n B) = 0  and the theorem becomes                       |
  |                                                                   |
  |            P(A u B)  =  P(A)  +  P(B)                             |
  +-------------------------------------------------------------------+
```

## 6.4 The three-event version

```
  +-------------------------------------------------------------------+
  |  P(A u B u C)  =    P(A) + P(B) + P(C)                            |
  |                   - P(A n B) - P(B n C) - P(C n A)                |
  |                   + P(A n B n C)                                  |
  |                                                                   |
  |  PATTERN:   + singles   - pairs   + triple      (signs alternate) |
  +-------------------------------------------------------------------+
```

```
             ***********
            *     A     *
           *   +-----+   *
          *   /       \   *
   ******X***/         \***X******
  *      *  |    AnB    |  *      *
  *  B   *  |           |  *  C   *
  *      * /  AnBnC (mid)\ *      *
   ******X*\             /*X******
          *  \  BnC  AnC/  *
           *  +---------+  *
            *             *
             ***********

  The middle piece is inside all three, so after adding the three
  singles and taking away the three pairs it has been removed once
  too often -- add it back.
```

**PROOF (short version, worth writing in the exam).**

```
  Treat (A u B) as one single event, then apply the two-event theorem:

  P((A u B) u C) = P(A u B) + P(C) - P((A u B) n C)

  Now  P(A u B) = P(A) + P(B) - P(A n B)

  and  (A u B) n C = (A n C) u (B n C) , so applying the theorem again

       P((A u B) n C) = P(A n C) + P(B n C) - P(A n B n C)

  Substituting:

  P(A u B u C) = P(A) + P(B) - P(A n B) + P(C)
                 - P(A n C) - P(B n C) + P(A n B n C)
```

## 6.5 The four expressions built from the theorem

```
  P(exactly A, not B)      =  P(A n B')   =  P(A) - P(A n B)
  P(exactly B, not A)      =  P(A' n B)   =  P(B) - P(A n B)
  P(neither A nor B)       =  P(A' n B')  =  1 - P(A u B)
  P(exactly one of A, B)   =  P(A) + P(B) - 2 P(A n B)
```

> **TRAP:** `P(A' n B')` is NOT `P(A') x P(B')`. It equals `1 - P(A u B)`.
> This is **De Morgan's law**: `A' n B' = (A u B)'`.

### WORKED EXAMPLE 6.1
P(A) = 0.5, P(B) = 0.3, P(A n B) = 0.1. Find P(A u B), P(A n B'), P(A' n B').

```
  P(A u B)   = 0.5 + 0.3 - 0.1  =  0.7
  P(A n B')  = P(A) - P(A n B)  =  0.5 - 0.1  =  0.4
  P(A' n B') = 1 - P(A u B)     =  1 - 0.7    =  0.3
```

### WORKED EXAMPLE 6.2
One card is drawn from a pack. Find the probability that it is a king OR a heart.

```
  A = king    ->  P(A) = 4/52
  B = heart   ->  P(B) = 13/52
  A n B = king of hearts  ->  P(A n B) = 1/52

                4     13     1      16      4
  P(A u B) =  ---- + ---- - ----  = ---- = ----
                52     52    52      52     13
```

> **TRAP:** Do not forget to subtract the king of hearts. Answer `17/52` is the
> classic wrong answer and gets zero.

### WORKED EXAMPLE 6.3
Two dice are thrown. Find the probability that the sum is 7 OR a doublet appears.

```
  A = sum 7      n(A) = 6      P(A) = 6/36
  B = doublet    n(B) = 6      P(B) = 6/36
  A n B = { }  (a doublet always has an even sum)   ->  P(A n B) = 0

               6      6       12      1
  P(A u B) = ---- + ----  =  ----  = ---
              36     36       36      3
```

### WORKED EXAMPLE 6.4
The probability that a student passes Maths is 2/3, passes Physics is 4/9, and
passes at least one of them is 4/5. Find the probability that he passes both.

```
  Let M = passes Maths , P = passes Physics.

  P(M u P) = P(M) + P(P) - P(M n P)

     4       2      4
    --- =   --- +  ---  -  P(M n P)
     5       3      9

                  2      4      4          30      20      36
  P(M n P)   =   --- +  --- -  ---   =   ----- + ----- - -----
                  3      9      5          45      45      45

                    30 + 20 - 36        14
              =   ----------------  =  -----
                        45              45
```

Check: 14/45 is between 0 and 1, and it is less than both 2/3 and 4/9. Good.

---

# ==========================================================
# TOPIC 7 — CONDITIONAL PROBABILITY  ("given that")
# ==========================================================

## 7.1 The idea in plain language

Someone throws a die behind a screen and tells you **"it is an even number"**.
Now what is the chance it is a 2?

Your world just shrank. You are no longer choosing from `{1,2,3,4,5,6}`.
You are choosing from `{2,4,6}`. So the answer is `1/3`, not `1/6`.

**Conditional probability is ordinary probability with a SMALLER sample space.**

```
   BEFORE the information                AFTER "it is even"
   +-------------------------+           +-------------------------+
   |  1   2   3   4   5   6  |    -->    |      2       4       6  |
   |  total = 6              |           |  total = 3              |
   +-------------------------+           +-------------------------+
        P(2) = 1/6                            P(2 | even) = 1/3
```

## 7.2 The formula

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                        P(A n B)                                   |
  |        P(A | B)   =   ----------- ,        P(B) > 0               |
  |                          P(B)                                     |
  |                                                                   |
  |        read as:  "the probability of A GIVEN THAT B has happened" |
  |                                                                   |
  |   In counting form:                                               |
  |                        n(A n B)                                   |
  |        P(A | B)   =   -----------                                 |
  |                          n(B)                                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

The picture: B becomes the new universe.

```
   +--------------------------------------+
   |  S  (ignored now)                    |
   |          ***********                 |
   |         *   #####   *                |
   |        *   #A n B#   *               |
   |        *    #####    *  <-- the WHOLE|
   |        *      B      *      of B is  |
   |         *           *       the new  |
   |          ***********        universe |
   +--------------------------------------+

        P(A|B) = shaded part of B  /  all of B
```

> **TRAP:** `P(A|B)` and `P(B|A)` are DIFFERENT numbers. The event after the bar
> is the one that already happened — it goes in the DENOMINATOR. Getting these
> two backwards is the whole reason Bayes' theorem exists.

## 7.3 Properties

```
  P(A | B) + P(A' | B)  =  1              (the bar-B world is still a full world)
  0 <= P(A | B) <= 1
  P(S | B) = 1
  If A and B are mutually exclusive,  P(A | B) = 0
```

### WORKED EXAMPLE 7.1
Two dice are thrown. Given that a doublet appeared, find the probability that the
sum is 8.

```
  B = doublet   = { (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) }      n(B) = 6
  A = sum is 8

  A n B  = { (4,4) }                                           n(A n B) = 1

               n(A n B)      1
  P(A | B) =  ---------- =  ---
                 n(B)        6
```

### WORKED EXAMPLE 7.2
A die is thrown twice. Given that the first die shows 5, find P(sum >= 10).

```
  B = first die is 5 = { (5,1),(5,2),(5,3),(5,4),(5,5),(5,6) }   n(B) = 6
  A n B = sums 10,11 with first die 5 = { (5,5) , (5,6) }        n = 2

               2      1
  P(A | B) =  --- =  ---
               6      3
```

### WORKED EXAMPLE 7.3
P(A) = 0.6, P(B) = 0.4, P(A n B) = 0.24. Find P(A|B) and P(B|A).

```
             P(A n B)     0.24
  P(A|B) =  ---------- = ------ = 0.6
               P(B)       0.4

             P(A n B)     0.24
  P(B|A) =  ---------- = ------ = 0.4
               P(A)       0.6
```

Notice `P(A|B) = P(A)` here — knowing B changed nothing. That is the definition of
independence, which is Topic 9.

---

# ==========================================================
# TOPIC 8 — THE MULTIPLICATION THEOREM  (the "AND" rule)
# ==========================================================

## 8.1 Statement and proof

```
  +-------------------------------------------------------------------+
  |   MULTIPLICATION THEOREM                                          |
  |                                                                   |
  |   For any two events A and B with P(A) > 0 , P(B) > 0 :           |
  |                                                                   |
  |        P(A n B)  =  P(A) x P(B | A)                               |
  |                                                                   |
  |                  =  P(B) x P(A | B)                               |
  +-------------------------------------------------------------------+
```

**PROOF.** Straight from the definition of conditional probability:

```
                 P(A n B)
  P(B | A)  =  -----------            [definition, P(A) > 0]
                   P(A)

  Multiply both sides by P(A):

  P(A) x P(B | A)  =  P(A n B)

  Similarly, starting from P(A | B) = P(A n B) / P(B),

  P(B) x P(A | B)  =  P(A n B)                             Hence proved.
```

Plain language: **"first one happens, THEN the second one happens given the first."**
Multiply along the path.

## 8.2 Three events

```
  +-------------------------------------------------------------------+
  |   P(A n B n C)  =  P(A) x P(B | A) x P(C | A n B)                 |
  |                                                                   |
  |   (chain rule -- each new event is conditioned on ALL the         |
  |    ones before it)                                                |
  +-------------------------------------------------------------------+
```

## 8.3 WITHOUT REPLACEMENT — the classic 4-mark question

When a ball/card is NOT put back, the numbers on the TOP and the BOTTOM both drop.

```
   Bag: 5 white , 3 black   (total 8)      Draw 2 without replacement

   DRAW 1                         DRAW 2
   ---------------------------    -----------------------------------
   P(white) = 5/8                 only 4 white left, only 7 balls left
                                  P(white | white) = 4/7

   P(both white) = (5/8)(4/7) = 20/56 = 5/14
```

### WORKED EXAMPLE 8.1
Two cards are drawn from a pack without replacement. Find P(both are kings).

```
  P(1st king)             = 4/52
  P(2nd king | 1st king)  = 3/51        (3 kings left in 51 cards)

                    4      3       12         1
  P(both kings) = ---- x ----  = ------  =  -----
                   52     51      2652       221
```

### WORKED EXAMPLE 8.2
A bag has 4 red and 6 green balls. Two balls are drawn one after another WITHOUT
replacement. Find the probability that (a) both are red, (b) one is red and one
is green.

```
  Total = 10

  (a)  P(RR)  =  (4/10) x (3/9)  =  12/90  =  2/15

  (b)  "one red one green" happens two ways: RG or GR

       P(RG) = (4/10) x (6/9) = 24/90
       P(GR) = (6/10) x (4/9) = 24/90

       P(one of each) = 24/90 + 24/90 = 48/90 = 8/15
```

> **TRAP:** In part (b) students write only `(4/10)(6/9)` and lose half the marks.
> If the question does not say which colour comes first, you must add BOTH orders.

### WORKED EXAMPLE 8.3
Three cards are drawn from a pack without replacement. Find P(all three are spades).

```
           13      12      11        1716        11
  P  =   ------ x ---- x ----  =  --------  =  -----
           52      51      50       132600       850

  Working:  13 x 12 x 11 = 1716 ,  52 x 51 x 50 = 132600
            1716 / 132600 = 11 / 850
```

Check with combinations: `13C3 / 52C3 = 286 / 22100 = 11 / 850`. Same. Good.

## 8.4 WITH replacement

If the ball IS put back, the bag resets. Nothing changes between draws, so the
events are **independent** and you just multiply the original probabilities.

```
  Bag: 5 white , 3 black.  Two draws WITH replacement.

  P(both white) = (5/8) x (5/8) = 25/64
```

```
  +-------------------------------------------------------------------+
  |   WITH replacement      ->   independent   ->   P(A) x P(B)       |
  |   WITHOUT replacement   ->   dependent     ->   P(A) x P(B|A)     |
  |                                                                   |
  |   Underline the words "with" / "without" in the question paper.   |
  +-------------------------------------------------------------------+
```

---

# ==========================================================
# TOPIC 9 — INDEPENDENT EVENTS
# ==========================================================

## 9.1 Definition

Two events are **independent** if one happening does not change the chance of
the other.

```
  +-------------------------------------------------------------------+
  |   A and B are INDEPENDENT   if and only if                        |
  |                                                                   |
  |             P(A n B)  =  P(A) x P(B)                              |
  |                                                                   |
  |   Equivalently:   P(A | B) = P(A)      and     P(B | A) = P(B)    |
  +-------------------------------------------------------------------+
```

To TEST for independence: compute `P(A) x P(B)` and compare with `P(A n B)`.
Equal -> independent. Not equal -> dependent. That is the entire method.

## 9.2 If A and B are independent, so are these

```
  A  and  B'          are independent
  A' and  B           are independent
  A' and  B'          are independent

  Proof of the first one:
     P(A n B') = P(A) - P(A n B)            [Result 5]
               = P(A) - P(A)P(B)            [independence]
               = P(A)[1 - P(B)]
               = P(A) P(B')                 hence independent.
```

## 9.3 INDEPENDENT vs MUTUALLY EXCLUSIVE — the 2-mark killer

This is asked nearly every year. Learn the table.

```
  +----------------------+---------------------------+---------------------------+
  |                      |  MUTUALLY EXCLUSIVE       |  INDEPENDENT              |
  +----------------------+---------------------------+---------------------------+
  |  Condition           |  P(A n B) = 0             |  P(A n B) = P(A) P(B)     |
  +----------------------+---------------------------+---------------------------+
  |  In words            |  they CANNOT both happen  |  one does not AFFECT      |
  |                      |                           |  the other                |
  +----------------------+---------------------------+---------------------------+
  |  Venn picture        |  circles do not touch     |  circles DO overlap       |
  +----------------------+---------------------------+---------------------------+
  |  P(A u B)            |  P(A) + P(B)              |  P(A)+P(B)-P(A)P(B)       |
  +----------------------+---------------------------+---------------------------+
  |  P(A | B)            |  0                        |  P(A)                     |
  +----------------------+---------------------------+---------------------------+
  |  Typical example     |  one die: "even" and      |  two dice: "first is 6"   |
  |                      |  "odd"                    |  and "second is 6"        |
  +----------------------+---------------------------+---------------------------+
```

```
  +-------------------------------------------------------------------+
  |   THE HEADLINE:                                                   |
  |                                                                   |
  |   If P(A) > 0 and P(B) > 0 , then A and B can be                  |
  |   mutually exclusive  OR  independent  --  NEVER BOTH.            |
  |                                                                   |
  |   Why:  mutually exclusive gives P(A n B) = 0                     |
  |         independent gives P(A n B) = P(A)P(B) which is > 0        |
  |         0 cannot equal a positive number.                         |
  +-------------------------------------------------------------------+
```

### WORKED EXAMPLE 9.1
P(A) = 3/5, P(B) = 1/5, P(A u B) = 7/10. Are A and B independent?

```
  From the addition theorem:
     P(A n B) = P(A) + P(B) - P(A u B)
              = 3/5 + 1/5 - 7/10
              = 6/10 + 2/10 - 7/10
              = 1/10

  Test:  P(A) x P(B) = (3/5)(1/5) = 3/25 = 0.12
         P(A n B)    = 1/10 = 0.10

  0.12 is NOT 0.10   ->   A and B are NOT independent.
```

## 9.4 "AT LEAST ONE" with independent events

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  P(at least one happens)  =  1  -  P(none happens)                |
  |                                                                   |
  |                           =  1  -  P(A') P(B') P(C') ...          |
  |                              (only if they are independent)       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

### WORKED EXAMPLE 9.2
A can solve a problem with probability 1/2, B with 1/3, C with 1/4, working
independently. Find (a) P(the problem is solved), (b) P(exactly one solves it).

```
  P(A) = 1/2   P(A') = 1/2
  P(B) = 1/3   P(B') = 2/3
  P(C) = 1/4   P(C') = 3/4

  (a)  P(nobody solves) = (1/2)(2/3)(3/4) = 6/24 = 1/4

       P(solved) = 1 - 1/4 = 3/4


  (b)  exactly one solves -> three separate cases, add them:

       A only :  (1/2)(2/3)(3/4) = 6/24
       B only :  (1/2)(1/3)(3/4) = 3/24
       C only :  (1/2)(2/3)(1/4) = 2/24
                                   ------
       P(exactly one)            = 11/24
```

### WORKED EXAMPLE 9.3
A speaks the truth 3 times out of 4, B speaks the truth 4 times out of 5.
Find the probability that they contradict each other on a fact.

```
  P(A true) = 3/4 , P(A false) = 1/4
  P(B true) = 4/5 , P(B false) = 1/5

  They contradict when one lies and the other does not:

     A true and B false  :  (3/4)(1/5) = 3/20
     A false and B true  :  (1/4)(4/5) = 4/20
                                          -----
     P(contradict)                     =  7/20
```

---

# ==========================================================
# TOPIC 10 — THE THEOREM OF TOTAL PROBABILITY
# ==========================================================

## 10.1 The idea

An event E can arrive through several different "doors" (called hypotheses or
causes). To find P(E), go through **every** door, multiply along the path, and add.

```
  +-------------------------------------------------------------------+
  |   THEOREM OF TOTAL PROBABILITY                                    |
  |                                                                   |
  |   Let H1, H2, ..., Hn be MUTUALLY EXCLUSIVE and EXHAUSTIVE        |
  |   events with P(Hi) > 0 , and let E be any event. Then            |
  |                                                                   |
  |     P(E) = P(H1)P(E|H1) + P(H2)P(E|H2) + ... + P(Hn)P(E|Hn)       |
  |                                                                   |
  |          = SUM over i of  P(Hi) x P(E | Hi)                       |
  +-------------------------------------------------------------------+
```

**PROOF.**

```
  Since H1, H2, ..., Hn are exhaustive,  H1 u H2 u ... u Hn = S.

  Therefore
       E  =  E n S
          =  E n (H1 u H2 u ... u Hn)
          =  (E n H1) u (E n H2) u ... u (E n Hn)

  The Hi are mutually exclusive, so the sets (E n Hi) are also
  mutually exclusive. By axiom 3,

       P(E) = P(E n H1) + P(E n H2) + ... + P(E n Hn)

  By the multiplication theorem,  P(E n Hi) = P(Hi) P(E | Hi).

  Hence  P(E) = SUM  P(Hi) P(E | Hi).                  Hence proved.
```

The picture:

```
   +-----------------------------------------------+
   |  S                                            |
   |  +--------+--------+--------+--------+        |
   |  |  H1    |  H2    |  H3    |  H4    |        |
   |  |  ####  |  ####  |  ####  |  ####  |        |
   |  |  #### E is the shaded strip cutting        |
   |  |  #### through every H                      |
   |  |  ####  |  ####  |  ####  |  ####  |        |
   |  +--------+--------+--------+--------+        |
   |                                               |
   |  P(E) = shaded in H1 + shaded in H2 + ...     |
   +-----------------------------------------------+
```

### WORKED EXAMPLE 10.1
Bag I has 4 red and 4 black balls. Bag II has 2 red and 6 black balls. A bag is
chosen at random and one ball is drawn. Find the probability that it is red.

```
  H1 = bag I chosen   P(H1) = 1/2       P(R | H1) = 4/8 = 1/2
  H2 = bag II chosen  P(H2) = 1/2       P(R | H2) = 2/8 = 1/4

  P(R) = P(H1)P(R|H1) + P(H2)P(R|H2)

       = (1/2)(1/2) + (1/2)(1/4)

       = 1/4 + 1/8

       = 2/8 + 1/8  =  3/8
```

---

# ==========================================================
# TOPIC 11 — BAYES' THEOREM  (the 7-mark question)
# ==========================================================

## 11.1 What it actually does

Total probability asks: **"given the cause, what is the chance of the effect?"**
Bayes asks the reverse: **"the effect happened — which cause was it?"**

```
   FORWARD (total probability)          BACKWARD (Bayes)

   cause  --------> effect              cause  <-------- effect
   "Bag I is chosen, what is            "The ball is red, what is
    the chance of red?"                  the chance it came from Bag I?"
```

That is why Bayes' theorem is also called the theorem of **inverse probability**
or the probability of **causes**.

## 11.2 Statement

```
  +-------------------------------------------------------------------+
  |   BAYES' THEOREM                                                  |
  |                                                                   |
  |   Let H1, H2, ..., Hn be mutually exclusive and exhaustive events |
  |   with P(Hi) > 0, and let E be an event with P(E) > 0. Then for   |
  |   each i,                                                         |
  |                                                                   |
  |                            P(Hi) x P(E | Hi)                      |
  |        P(Hi | E)   =   -------------------------------            |
  |                        SUM over k of P(Hk) P(E | Hk)              |
  |                                                                   |
  |   (the denominator is exactly P(E) by total probability)          |
  +-------------------------------------------------------------------+
```

**PROOF.**

```
  STEP 1   By the definition of conditional probability,

                          P(Hi n E)
             P(Hi | E) = -----------                       ..... (1)
                             P(E)

  STEP 2   By the multiplication theorem,

             P(Hi n E) = P(Hi) x P(E | Hi)                 ..... (2)

  STEP 3   By the theorem of total probability,

             P(E) = SUM over k of  P(Hk) x P(E | Hk)       ..... (3)

  STEP 4   Substituting (2) and (3) into (1),

                              P(Hi) P(E | Hi)
             P(Hi | E)  =  ------------------------
                           SUM  P(Hk) P(E | Hk)

                                                     Hence proved.
```

## 11.3 THE METHOD — always draw the tree first

```
  +-------------------------------------------------------------------+
  |   FIVE STEPS, EVERY TIME                                          |
  |                                                                   |
  |   1. Name the causes H1, H2, ... and the effect E.                |
  |   2. Write P(H1), P(H2), ...     (the "prior" probabilities)      |
  |   3. Write P(E|H1), P(E|H2), ... (read off the question)          |
  |   4. Draw the tree and multiply along each branch.                |
  |   5. Answer = (the branch you want) / (sum of ALL branches).      |
  +-------------------------------------------------------------------+
```

## 11.4 STANDARD PROBLEM 1 — TWO URNS

**Bag I contains 4 red and 4 black balls. Bag II contains 2 red and 6 black balls.
One bag is chosen at random and a ball is drawn. It is red. Find the probability
that it came from Bag I.**

```
   THE TREE
                                                    multiply along branch
                          4/8            RED   ---->  (1/2)(4/8) = 4/16
                        --------------->
                       /
          1/2         /
     ------------> BAG I
    /                  \      4/8
   /                    ---------------> BLACK ---> (1/2)(4/8) = 4/16
  /
 START
  \
   \                   2/8
    \                 ---------------->  RED   ---->  (1/2)(2/8) = 2/16
     \               /
      1/2           /
     ------------> BAG II
                    \      6/8
                     ---------------->  BLACK ---> (1/2)(6/8) = 6/16

   CHECK: 4/16 + 4/16 + 2/16 + 6/16 = 16/16 = 1     (always check this)
```

```
  STEP 1   H1 = ball from Bag I     P(H1) = 1/2
           H2 = ball from Bag II    P(H2) = 1/2
           E  = the ball is red

  STEP 2   P(E | H1) = 4/8 = 1/2
           P(E | H2) = 2/8 = 1/4

  STEP 3   Total probability of red:

           P(E) = (1/2)(1/2) + (1/2)(1/4)
                = 1/4 + 1/8
                = 3/8

  STEP 4   Bayes:

                        P(H1) P(E|H1)          (1/2)(1/2)         1/4
           P(H1 | E) = ----------------- = ------------------- = ------
                             P(E)                  3/8             3/8

                     =  (1/4) x (8/3)  =  2/3
```

**ANSWER: 2/3.**

Sanity check: Bag I has more red balls, so a red ball is more likely to have come
from Bag I. 2/3 > 1/2. The answer makes sense.
Also `P(H2|E) = 1 - 2/3 = 1/3`, and directly `(1/8)/(3/8) = 1/3`. Consistent.

## 11.5 STANDARD PROBLEM 2 — THREE FACTORY MACHINES

**In a factory, machines A, B and C produce 25%, 35% and 40% of the total output.
Of their outputs, 5%, 4% and 2% respectively are defective. An item is picked at
random and found to be defective. What is the probability it was made by machine B?**

```
   THE TREE                      P(defective | machine)      product

                    0.05  ------> DEFECTIVE  ---->  0.25 x 0.05 = 0.0125
          0.25     /
     ---------> A
    /             \  0.95  -----> GOOD
   /
  /       0.35        0.04 -----> DEFECTIVE  ---->  0.35 x 0.04 = 0.0140
 START ---------> B
  \               \  0.96  -----> GOOD
   \
    \     0.40        0.02 -----> DEFECTIVE  ---->  0.40 x 0.02 = 0.0080
     ---------> C
                   \  0.98  -----> GOOD
                                                    ---------------------
                              P(DEFECTIVE) total  =  0.0345
```

```
  STEP 1   P(A) = 0.25 , P(B) = 0.35 , P(C) = 0.40      (they add to 1 - check)
           D = the item is defective

  STEP 2   P(D|A) = 0.05 , P(D|B) = 0.04 , P(D|C) = 0.02

  STEP 3   P(D) = (0.25)(0.05) + (0.35)(0.04) + (0.40)(0.02)
                = 0.0125 + 0.0140 + 0.0080
                = 0.0345

  STEP 4                 (0.35)(0.04)        0.0140       140      28
           P(B | D)  =  ---------------  =  --------  =  ------ = ----
                            0.0345           0.0345       345      69
```

**ANSWER: 28/69 (about 0.406).**

For practice the other two are:

```
  P(A | D) = 0.0125 / 0.0345 = 125/345 = 25/69
  P(C | D) = 0.0080 / 0.0345 =  80/345 = 16/69

  CHECK:  25/69 + 28/69 + 16/69 = 69/69 = 1    Correct.
```

> **TRAP:** The three answers of a Bayes problem must add up to exactly 1.
> Do this check — it catches almost every arithmetic slip and takes 5 seconds.

## 11.6 STANDARD PROBLEM 3 — THE DISEASE TEST

**A disease affects 0.1% of a population. A test gives a positive result for 99%
of people who have the disease, and also gives a (false) positive for 0.5% of
people who do not have it. A person tests positive. What is the probability that
he actually has the disease?**

```
   THE TREE                                            product

                     0.99  ------> POSITIVE ---> 0.001 x 0.99 = 0.00099
        0.001       /
   -------------> HAS DISEASE
  /                 \  0.01 -----> negative
 /
START
 \
  \      0.999         0.005 -----> POSITIVE --> 0.999 x 0.005 = 0.004995
   -------------> NO DISEASE
                    \  0.995 -----> negative
                                                 -----------------------
                                  P(POSITIVE) =   0.005985
```

```
  STEP 1   D  = has the disease      P(D)  = 0.001
           D' = does not have it     P(D') = 0.999
           E  = tests positive

  STEP 2   P(E | D)  = 0.99
           P(E | D') = 0.005

  STEP 3   P(E) = (0.001)(0.99) + (0.999)(0.005)
                = 0.00099 + 0.004995
                = 0.005985

  STEP 4                 0.00099        990        22
           P(D | E) = ------------ =  --------  = -----  =  0.165 approx.
                        0.005985        5985       133
```

**ANSWER: 22/133, roughly 16.5%.**

This is the famous surprise: even after a positive result on a 99% accurate test,
the person probably does NOT have the disease. The reason is that the disease is
so rare that the huge healthy group produces more false positives than the tiny
sick group produces true positives.

## 11.7 A fourth shape you should see once — transferred ball

**Bag I: 3 white, 4 black. Bag II: 5 white, 6 black. One ball is transferred from
Bag I to Bag II, then a ball is drawn from Bag II. Find P(it is white).**

```
   Transferred ball is WHITE  (prob 3/7)
        ->  Bag II becomes 6 white, 6 black = 12 balls  ->  P(W) = 6/12
   Transferred ball is BLACK  (prob 4/7)
        ->  Bag II becomes 5 white, 7 black = 12 balls  ->  P(W) = 5/12

   P(white) = (3/7)(6/12) + (4/7)(5/12)

            =  18/84  +  20/84   =   38/84   =   19/42
```

> **TRAP:** After a transfer, Bag II has **12** balls, not 11. Recount the total
> every time something moves.

---

# ==========================================================
# TOPIC 12 — PUTTING IT TOGETHER: THE STANDARD SETTINGS
# ==========================================================

## 12.1 Cards — the numbers you need instantly

| Description | Count | Probability |
|---|---|---|
| Any one named card (e.g. ace of spades) | 1 | 1/52 |
| Aces / kings / queens / jacks | 4 | 1/13 |
| Cards of one suit | 13 | 1/4 |
| Red / black cards | 26 | 1/2 |
| Face cards (J, Q, K) | 12 | 3/13 |
| Honours (A, K, Q, J) | 16 | 4/13 |
| Red face cards | 6 | 3/26 |
| Numbered cards 2 to 10 | 36 | 9/13 |

## 12.2 Dice — the numbers you need instantly

| Description | Count out of 36 | Probability |
|---|---|---|
| A doublet | 6 | 1/6 |
| Sum = 7 | 6 | 1/6 |
| Sum is even | 18 | 1/2 |
| Sum is a prime (2,3,5,7,11) | 15 | 5/12 |
| At least one 6 | 11 | 11/36 |
| Both numbers different | 30 | 5/6 |

Check "at least one 6": `1 - P(no 6) = 1 - (5/6)(5/6) = 1 - 25/36 = 11/36`. Correct.

## 12.3 Coins

| n coins | n(S) | P(all heads) | P(exactly r heads) |
|---|---|---|---|
| 2 | 4 | 1/4 | nCr / 2^n |
| 3 | 8 | 1/8 | nCr / 2^n |
| 4 | 16 | 1/16 | nCr / 2^n |

```
  P(exactly r heads in n tosses)  =  nCr / 2^n

  Example: exactly 2 heads in 4 tosses = 4C2 / 16 = 6/16 = 3/8
```

## 12.4 Choosing the right counting tool

```
  +-----------------------------------+-------------------------------+
  |  THE QUESTION SAYS ...            |  USE                          |
  +-----------------------------------+-------------------------------+
  |  "3 balls are drawn together"     |  nCr  (order does not matter) |
  |  "3 balls drawn one by one        |  nCr also works               |
  |   without replacement"            |  (or multiply fractions)      |
  |  "arranged in a row" / "a number  |  nPr or n!  (order matters)   |
  |   is formed"                      |                               |
  |  "with replacement"               |  multiply, independent        |
  |  "at least one"                   |  1 - P(none)                  |
  +-----------------------------------+-------------------------------+
```

### WORKED EXAMPLE 12.1
The letters of the word `ASSIST` are arranged at random. Find the probability that
all the S's come together.

```
  ASSIST has 6 letters:  A, S, S, I, S, T   -->  three S's

  STEP 1   Total arrangements = 6! / 3!  =  720 / 6  =  120

  STEP 2   Tie the three S's into one block: [SSS] , A , I , T = 4 items
           Arrangements = 4! = 24
           (the S's are identical, so no internal rearrangement to count)

  STEP 3            24        1
           P  =  ------- =  -----
                   120        5
```

### WORKED EXAMPLE 12.2
Out of 30 consecutive integers, two are chosen at random. Find the probability
that their sum is odd.

```
  30 consecutive integers  ->  15 even and 15 odd

  Sum is ODD only if one is even and one is odd.

  n(S) = 30C2 = (30 x 29)/2 = 435
  n(E) = 15C1 x 15C1 = 15 x 15 = 225

           225      15
  P  =  ------- =  -----
           435      29
```

---

# ==========================================================
# CHECKLIST BEFORE YOU HAND IN THE PAPER
# ==========================================================

```
  [ ]  Every probability I wrote is between 0 and 1.
       (Negative or bigger than 1 = definitely wrong, go back.)

  [ ]  I wrote the sample space size n(S) clearly at the top of every
       counting question. That line alone often carries a mark.

  [ ]  I checked "exactly" vs "at least" vs "at most" in every question.

  [ ]  In the addition theorem I SUBTRACTED P(A n B). I did not forget it.

  [ ]  In the card question I remembered the king of hearts is counted once,
       not twice.

  [ ]  For "without replacement" I reduced BOTH the numerator and the
       denominator on the second draw.

  [ ]  For "one red and one green" I added BOTH orders (RG and GR).

  [ ]  For "at least one" I used 1 - P(none) instead of counting cases.

  [ ]  I did not confuse mutually exclusive with independent.
       Mutually exclusive: P(A n B) = 0.
       Independent: P(A n B) = P(A) P(B).

  [ ]  In Bayes I drew the TREE and wrote the formula before the numbers.

  [ ]  In Bayes my denominator was the sum of ALL the branches that give E,
       not just one of them.

  [ ]  In Bayes my answers for all the causes add up to exactly 1.

  [ ]  Every fraction is reduced to lowest terms, or left as a clean
       decimal. 140/345 should be written 28/69.

  [ ]  I wrote the final answer on its own line with a box or underline.
```

```
  +-------------------------------------------------------------------+
  |  LAST WORD                                                        |
  |                                                                   |
  |  If you get stuck in the exam on ANY probability question,        |
  |  write these three lines. They are worth part marks every time:   |
  |                                                                   |
  |     n(S) = ...                                                    |
  |     P(A u B) = P(A) + P(B) - P(A n B)                             |
  |     P(A n B) = P(A) P(B|A)                                        |
  |                                                                   |
  |  Never leave a probability question completely blank.             |
  +-------------------------------------------------------------------+
```
