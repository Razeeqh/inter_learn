# Probability — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 9 — Probability**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.
> Never quote a specific exam year unless you have seen that paper yourself.

**Where this chapter appears in the Maths IIA paper (75 marks):**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q9 or Q10
  Section B  (4 marks each, answer any 5)    ->  usually Q17 or Q18
  Section C  (7 marks each, answer any 5)    ->  usually Q22

  Realistic haul from this chapter:  2 + 4 + 7  =  13 marks
  Pass mark for the whole paper = 26.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: Definitions

### Q A1
Define mutually exclusive events and give an example.

**ANSWER:**
```
  Two events A and B are MUTUALLY EXCLUSIVE (disjoint) if they cannot
  occur together, i.e.       A n B = { }      so   P(A n B) = 0

  EXAMPLE:  One die is thrown.
            A = "an even number"  = {2,4,6}
            B = "an odd number"   = {1,3,5}
            A n B = { }   ->   A and B are mutually exclusive.
```

---

### Q A2
Define exhaustive events with an example.

**ANSWER:**
```
  Events A1, A2, ..., An are EXHAUSTIVE if their union is the whole
  sample space:     A1 u A2 u ... u An = S

  EXAMPLE:  One die.  A = {1,2} , B = {3,4} , C = {5,6}
            A u B u C = {1,2,3,4,5,6} = S   ->   exhaustive.
```

---

### Q A3
Distinguish between mutually exclusive events and independent events.

**ANSWER:**
```
  MUTUALLY EXCLUSIVE :  P(A n B) = 0
                        the two events CANNOT happen together

  INDEPENDENT        :  P(A n B) = P(A) x P(B)
                        one event does not AFFECT the other

  If P(A) > 0 and P(B) > 0 the two ideas can never hold at the same time,
  because P(A)P(B) > 0 while mutual exclusion forces P(A n B) = 0.
```

---

### Q A4
Define the classical (mathematical) definition of probability.

**ANSWER:**
```
  If a random experiment has n outcomes which are EQUALLY LIKELY,
  MUTUALLY EXCLUSIVE and EXHAUSTIVE, and m of them are favourable to
  an event E, then

                  m       number of favourable outcomes
        P(E)  =  --- =   -------------------------------
                  n       total number of outcomes
```

---

### Q A5
Write the sample space when two coins are tossed, and state n(S).

**ANSWER:**
```
  S = { HH , HT , TH , TT }          n(S) = 2^2 = 4
```

---

## Topic: Simple dice, coin and card probability

### Q A6
A die is thrown. Find the probability of getting an odd number.

**ANSWER:**
```
  S = {1,2,3,4,5,6}   n(S) = 6
  E = {1,3,5}         n(E) = 3

  P(E) = 3/6 = 1/2
```

---

### Q A7
Two dice are thrown. Find the probability that the sum is 7.

**ANSWER:**
```
  n(S) = 36
  E = { (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) }     n(E) = 6

  P(E) = 6/36 = 1/6
```

---

### Q A8
Two dice are thrown. Find the probability of getting a doublet.

**ANSWER:**
```
  Doublets = { (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) }    n(E) = 6

  P(E) = 6/36 = 1/6
```

---

### Q A9
Three coins are tossed. Find the probability of getting at least one head.

**ANSWER:**
```
  n(S) = 2^3 = 8
  "no head" happens only for TTT       ->  P(no head) = 1/8

  P(at least one head) = 1 - 1/8 = 7/8
```

---

### Q A10
One card is drawn from a well-shuffled pack of 52. Find the probability that it
is a king or a queen.

**ANSWER:**
```
  kings = 4 , queens = 4 , and no card is both.

  P = (4 + 4)/52 = 8/52 = 2/13
```

---

### Q A11
A card is drawn from a pack. Find the probability that it is neither a king nor
a queen.

**ANSWER:**
```
  P(king or queen) = 8/52 = 2/13

  P(neither) = 1 - 2/13 = 11/13
```

---

### Q A12
A bag contains 4 red and 5 black balls. One ball is drawn at random. Find the
probability that it is red.

**ANSWER:**
```
  n(S) = 9 ,  n(E) = 4      ->      P = 4/9
```

---

### Q A13
A number is chosen at random from 1 to 20. Find the probability that it is a
multiple of 3 or 5.

**ANSWER:**
```
  multiples of 3 : 3,6,9,12,15,18            ->  6
  multiples of 5 : 5,10,15,20                ->  4
  multiples of 15: 15                        ->  1  (counted twice, remove once)

  n(E) = 6 + 4 - 1 = 9        P = 9/20
```

---

## Topic: Odds

### Q A14
The odds against an event are 5 : 4. Find the probability of the event.

**ANSWER:**
```
  odds AGAINST 5 : 4  means  unfavourable : favourable = 5 : 4

              4         4
  P(E) =  --------- =  ---
            4 + 5       9
```

---

### Q A15
If P(A) = 0.4, find the odds in favour of A and the odds against A.

**ANSWER:**
```
  P(A') = 1 - 0.4 = 0.6

  odds in favour = P(A) : P(A') = 0.4 : 0.6 = 2 : 3
  odds against   = 3 : 2
```

---

## Topic: Addition theorem

### Q A16
If P(A) = 1/2, P(B) = 1/3 and P(A n B) = 1/4, find P(A u B).

**ANSWER:**
```
  P(A u B) = P(A) + P(B) - P(A n B)

            1     1     1      6      4      3       7
          = --- + --- - ---  = ---- + ---- - ---- = ----
            2     3     4      12     12     12      12
```

---

### Q A17
A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.4. Find P(A u B) and
P(A n B).

**ANSWER:**
```
  Mutually exclusive  ->  P(A n B) = 0

  P(A u B) = P(A) + P(B) = 0.3 + 0.4 = 0.7
```

---

### Q A18
If P(A u B) = 0.6, find P(A' n B').

**ANSWER:**
```
  By De Morgan,  A' n B' = (A u B)'

  P(A' n B') = 1 - P(A u B) = 1 - 0.6 = 0.4
```

---

### Q A19
If P(A) = 0.5, P(B) = 0.3 and P(A n B) = 0.1, find the probability that A occurs
but B does not.

**ANSWER:**
```
  P(A n B') = P(A) - P(A n B) = 0.5 - 0.1 = 0.4
```

---

## Topic: Conditional probability and independence

### Q A20
If P(A n B) = 0.2 and P(B) = 0.5, find P(A | B).

**ANSWER:**
```
              P(A n B)      0.2
  P(A | B) = ---------- =  -----  =  0.4
                P(B)        0.5
```

---

### Q A21
A and B are independent events with P(A) = 1/2 and P(B) = 1/3. Find P(A n B).

**ANSWER:**
```
  Independent  ->  P(A n B) = P(A) x P(B) = (1/2)(1/3) = 1/6
```

---

### Q A22
A and B are independent with P(A) = 0.6 and P(B) = 0.2. Find P(A u B).

**ANSWER:**
```
  P(A n B) = (0.6)(0.2) = 0.12

  P(A u B) = 0.6 + 0.2 - 0.12 = 0.68
```

---

### Q A23
Two cards are drawn one after the other WITH replacement. Find the probability
that both are aces.

**ANSWER:**
```
  With replacement -> independent, the pack resets.

              4       4        1        1        1
  P  =      ---- x  ----  =  ---- x  ---- =  -------
              52      52       13      13      169
```

---

### Q A24
Two cards are drawn WITHOUT replacement. Find the probability that both are aces.

**ANSWER:**
```
              4       3         12          1
  P  =      ---- x  ----   =  ------  =   -----
              52      51       2652        221
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of the 7. One of them is usually from this chapter.
# ===============================================================

### Q B1
If P(A) = 0.6, P(B) = 0.3 and P(A u B) = 0.7, find P(A | B) and P(B | A).
State whether A and B are independent.

**ANSWER:**
```
  STEP 1   From the addition theorem,
           P(A n B) = P(A) + P(B) - P(A u B)
                    = 0.6 + 0.3 - 0.7  =  0.2

  STEP 2            P(A n B)      0.2       2
           P(A|B) = ---------- = ----- =  ---
                       P(B)       0.3       3

  STEP 3            P(A n B)      0.2       1
           P(B|A) = ---------- = ----- =  ---
                       P(A)       0.6       3

  STEP 4   TEST:  P(A) x P(B) = 0.6 x 0.3 = 0.18
                  P(A n B)    = 0.20

           0.18 is NOT 0.20   ->   A and B are NOT independent.
```

---

### Q B2
A, B, C are three mutually exclusive and exhaustive events such that
P(B) = (3/2) P(A) and P(C) = (1/2) P(B). Find P(A), P(B) and P(C).

**ANSWER:**
```
  Let P(A) = x.

  P(B) = (3/2) x
  P(C) = (1/2)(3/2) x = (3/4) x

  Mutually exclusive AND exhaustive  ->  P(A) + P(B) + P(C) = 1

        x + (3/2)x + (3/4)x  =  1

        (4x + 6x + 3x) / 4   =  1

               13x / 4       =  1     ->     x = 4/13

  P(A) = 4/13 ,   P(B) = 6/13 ,   P(C) = 3/13

  CHECK:  4/13 + 6/13 + 3/13 = 13/13 = 1
```

---

### Q B3
A bag contains 6 white and 4 black balls. Two balls are drawn one after the other
without replacement. Find the probability that (i) both are white, (ii) both are
black, (iii) one is white and one is black.

**ANSWER:**
```
  Total = 10 balls.

  (i)   P(WW) = (6/10) x (5/9)  =  30/90  =  1/3

  (ii)  P(BB) = (4/10) x (3/9)  =  12/90  =  2/15

  (iii) Two orders are possible:
        P(WB) = (6/10)(4/9) = 24/90
        P(BW) = (4/10)(6/9) = 24/90
        P(one of each) = 48/90 = 8/15

  CHECK:  1/3 + 2/15 + 8/15 = 5/15 + 2/15 + 8/15 = 15/15 = 1
```

---

### Q B4
The probabilities that A, B and C solve a problem are 1/3, 2/7 and 3/8
respectively. If all three try independently, find the probability that the
problem is solved.

**ANSWER:**
```
  P(A') = 2/3 ,  P(B') = 5/7 ,  P(C') = 5/8

  P(nobody solves)  =  (2/3)(5/7)(5/8)

                          2 x 5 x 5        50        25
                    =   ------------- =  ------  =  ----
                          3 x 7 x 8        168        84

                              25       59
  P(problem solved) = 1 -  ------  =  ----
                              84       84
```

---

### Q B5
A speaks the truth in 80% of cases and B in 75% of cases. Find the probability
that they contradict each other while stating the same fact.

**ANSWER:**
```
  P(A true) = 4/5 ,  P(A false) = 1/5
  P(B true) = 3/4 ,  P(B false) = 1/4

  They contradict when exactly one of them tells the truth:

     A true , B false :  (4/5)(1/4) = 4/20
     A false, B true  :  (1/5)(3/4) = 3/20
                                       -----
     P(contradict)                  =  7/20   =  0.35  =  35%
```

---

### Q B6
Two dice are thrown. Find the probability that the sum is 8, given that the two
numbers shown are different.

**ANSWER:**
```
  B = the numbers are different.
      n(B) = 36 - 6 (the doublets) = 30

  A n B = sum 8 with different numbers
        = { (2,6) , (3,5) , (5,3) , (6,2) }        n(A n B) = 4
        [ (4,4) is excluded because it is a doublet ]

               n(A n B)       4        2
  P(A | B) =  ---------- =  ----- =  -----
                 n(B)        30       15
```

---

### Q B7
A and B are independent events with P(A) = 0.6 and P(B) = 0.5.
Find P(A n B'), P(A' n B') and P(A u B).

**ANSWER:**
```
  If A and B are independent then so are A & B' and A' & B'.

  P(A n B')  = P(A) P(B')  = (0.6)(0.5) = 0.30
  P(A' n B') = P(A') P(B') = (0.4)(0.5) = 0.20

  P(A n B)   = (0.6)(0.5) = 0.30
  P(A u B)   = 0.6 + 0.5 - 0.30 = 0.80

  CHECK:  P(A' n B') = 1 - P(A u B) = 1 - 0.8 = 0.2   Correct.
```

---

### Q B8
Three cards are drawn at random from a pack of 52 without replacement. Find the
probability that all three are kings.

**ANSWER:**
```
  METHOD 1 (multiplication theorem)

        4      3      2         24            1
      ---- x ---- x ----  =  --------- =  ---------
       52     51     50       132600        5525

  METHOD 2 (combinations)

        4C3        4            1
      ------- = --------- = ---------      same answer.
       52C3      22100        5525
```

---

### Q B9
A committee of 5 is to be formed from 6 boys and 4 girls. Find the probability
that the committee has exactly 3 boys and 2 girls.

**ANSWER:**
```
  n(S) = 10C5 = 252

  n(E) = 6C3 x 4C2 = 20 x 6 = 120

           120        10
  P(E) =  ------  =  ----
           252        21
```

---

### Q B10
The letters of the word `ARTICLE` are arranged at random. Find the probability
that all the vowels come together.

**ANSWER:**
```
  ARTICLE has 7 different letters.  Vowels are A, I, E  (3 of them).

  STEP 1   Total arrangements = 7! = 5040

  STEP 2   Tie the vowels into one block:  [AIE] R T C L  = 5 items
           Arrange the 5 items    ->  5! = 120
           Arrange inside the block ->  3! = 6
           Favourable = 120 x 6 = 720

  STEP 3           720        1
           P  =  -------  =  ---
                  5040        7
```

---

### Q B11
A number is selected at random from the first 100 natural numbers. Find the
probability that it is divisible by 2 or 3.

**ANSWER:**
```
  divisible by 2  :  100/2 = 50
  divisible by 3  :  33     (3 to 99)
  divisible by 6  :  16     (6 to 96)   <- counted twice

  n(E) = 50 + 33 - 16 = 67

  P(E) = 67/100
```

---

### Q B12
Bag I contains 3 red and 5 black balls. Bag II contains 4 red and 6 black balls.
A bag is selected at random and a ball is drawn from it. Find the probability
that the ball is red.

**ANSWER:**
```
  P(bag I) = P(bag II) = 1/2

  P(R | bag I)  = 3/8
  P(R | bag II) = 4/10 = 2/5

  By the theorem of total probability,

  P(R) = (1/2)(3/8) + (1/2)(2/5)

          3       1        15       16        31
       = ---- + -----  =  ----- +  -----  =  -----
         16       5         80       80        80
```

---

### Q B13
The odds against event A are 4 : 5 and the odds in favour of event B are 2 : 3.
If A and B are independent, find the probability that at least one of them occurs.

**ANSWER:**
```
  odds AGAINST A = 4 : 5   ->   P(A) = 5/9  ,  P(A') = 4/9
  odds IN FAVOUR of B = 2 : 3 ->  P(B) = 2/5  ,  P(B') = 3/5

  P(neither occurs) = P(A') P(B') = (4/9)(3/5) = 12/45 = 4/15

                                        4        11
  P(at least one) = 1 - P(neither) = 1 - ---  =  ----
                                        15        15
```

---

### Q B14
A family has two children. Given that at least one of them is a boy, find the
probability that both are boys.

**ANSWER:**
```
  S = { BB , BG , GB , GG }        n(S) = 4

  B = "at least one boy" = { BB , BG , GB }        n(B) = 3
  A = "both are boys"    = { BB }
  A n B = { BB }                                    n(A n B) = 1

               n(A n B)       1
  P(A | B) =  ---------- =  -----
                 n(B)         3
```

> Most students answer 1/2. The information "at least one is a boy" removes GG
> only — it does not tell you WHICH child is the boy. The answer is 1/3.

---

### Q B15
In a class, 40% of students study Maths, 25% study Biology and 15% study both.
A student is chosen at random. Find (i) P(he studies Maths or Biology),
(ii) P(he studies Maths given that he studies Biology).

**ANSWER:**
```
  P(M) = 0.40 ,  P(B) = 0.25 ,  P(M n B) = 0.15

  (i)  P(M u B) = 0.40 + 0.25 - 0.15 = 0.50

  (ii)            P(M n B)     0.15
       P(M | B) = ---------- = ------ = 0.6
                     P(B)       0.25
```

---

### Q B16
An urn contains 5 white and 3 black balls. Two balls are drawn WITH replacement.
Find the probability that (i) both are white, (ii) exactly one is white.

**ANSWER:**
```
  With replacement -> each draw is independent.
  P(W) = 5/8 ,  P(B) = 3/8

  (i)   P(WW) = (5/8)(5/8) = 25/64

  (ii)  P(WB) + P(BW) = (5/8)(3/8) + (3/8)(5/8)
                      = 15/64 + 15/64 = 30/64 = 15/32
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of the 7. Probability is almost always one of them.
# ===============================================================

### Q C1  ***THE MOST ASKED 7-MARK QUESTION***
State and prove the ADDITION THEOREM on probability for two events, and deduce
the result for three events.

**ANSWER:**

```
  ------------------------------------------------------------------
  STATEMENT                                              [1 mark]
  ------------------------------------------------------------------
  If A and B are any two events of a sample space S, then

          P(A u B)  =  P(A) + P(B) - P(A n B)
  ------------------------------------------------------------------
```

```
  ------------------------------------------------------------------
  PROOF                                                  [4 marks]
  ------------------------------------------------------------------

  STEP 1   Split A u B into two disjoint pieces.

              A u B  =  A  u  (A' n B)

           Everything in B that is not already in A lies in A' n B,
           and  A n (A' n B) = { }.  So by AXIOM 3,

              P(A u B)  =  P(A)  +  P(A' n B)             ..... (1)


  STEP 2   Split B into two disjoint pieces.

              B  =  (A n B)  u  (A' n B)

           These have nothing in common, so by AXIOM 3,

              P(B)  =  P(A n B)  +  P(A' n B)

           Rearranging,

              P(A' n B)  =  P(B)  -  P(A n B)             ..... (2)


  STEP 3   Substitute (2) into (1):

              P(A u B)  =  P(A)  +  P(B)  -  P(A n B)

                                                     Hence proved.
  ------------------------------------------------------------------
```

The diagram that goes with the proof (draw it, it is worth a mark):

```
   +----------------------------------------------------+
   |  S                                                 |
   |      ***********       ***********                 |
   |     *           *     *           *                |
   |    *      A     * AnB *   A' n B   *               |
   |    *  (all of   *#####*             *              |
   |    *   this)    *#####*             *              |
   |     *           *     *           *                |
   |      ***********       ***********                 |
   |                                    B               |
   |                                                    |
   |   A u B  =  [A]  +  [A' n B]                       |
   |   B      =  [A n B]  +  [A' n B]                   |
   +----------------------------------------------------+
```

```
  ------------------------------------------------------------------
  DEDUCTION FOR THREE EVENTS                             [2 marks]
  ------------------------------------------------------------------

  Treat (A u B) as one event and apply the theorem:

     P((A u B) u C) = P(A u B) + P(C) - P((A u B) n C)

  Now   P(A u B) = P(A) + P(B) - P(A n B)

  and   (A u B) n C = (A n C) u (B n C) , so by the theorem again

        P((A u B) n C) = P(A n C) + P(B n C) - P(A n B n C)

  Substituting,

     P(A u B u C) =   P(A) + P(B) + P(C)
                    - P(A n B) - P(B n C) - P(C n A)
                    + P(A n B n C)

  SPECIAL CASE:  if A and B are mutually exclusive, P(A n B) = 0 and

                    P(A u B) = P(A) + P(B)
  ------------------------------------------------------------------
```

---

### Q C2  ***THE SECOND MOST ASKED 7-MARK QUESTION***
State and prove BAYES' THEOREM.

**ANSWER:**

```
  ------------------------------------------------------------------
  STATEMENT                                              [2 marks]
  ------------------------------------------------------------------
  Let H1, H2, ..., Hn be mutually exclusive and exhaustive events of
  a sample space S with P(Hi) > 0 for every i, and let E be any event
  with P(E) > 0. Then for each i = 1, 2, ..., n

                            P(Hi) x P(E | Hi)
       P(Hi | E)   =   ---------------------------------
                        SUM over k of  P(Hk) x P(E | Hk)
  ------------------------------------------------------------------
```

```
  ------------------------------------------------------------------
  PROOF                                                  [5 marks]
  ------------------------------------------------------------------

  STEP 1   By the definition of conditional probability,

                            P(Hi n E)
               P(Hi | E) = -----------                    ..... (1)
                               P(E)


  STEP 2   By the multiplication theorem,

               P(Hi n E)  =  P(Hi) x P(E | Hi)            ..... (2)


  STEP 3   (Theorem of total probability.)
           Since H1, H2, ..., Hn are exhaustive,

               H1 u H2 u ... u Hn  =  S

           Therefore
               E  =  E n S
                  =  E n (H1 u H2 u ... u Hn)
                  =  (E n H1) u (E n H2) u ... u (E n Hn)

           The Hi are mutually exclusive, so the sets (E n Hk) are
           mutually exclusive too. By AXIOM 3,

               P(E)  =  P(E n H1) + P(E n H2) + ... + P(E n Hn)

           and using (2) on each term,

               P(E)  =  SUM over k of  P(Hk) x P(E | Hk)  ..... (3)


  STEP 4   Substituting (2) and (3) into (1),

                             P(Hi) P(E | Hi)
               P(Hi | E)  = ---------------------------
                             SUM  P(Hk) P(E | Hk)

                                                    Hence proved.
  ------------------------------------------------------------------
```

---

### Q C3  ***THE MOST ASKED BAYES NUMERICAL***
Three machines A, B and C produce 25%, 35% and 40% of the total output of a
factory. Of their output 5%, 4% and 2% respectively are defective. An item is
drawn at random and found to be defective. Find the probability that it was
produced by machine B.

**ANSWER:**

```
  STEP 1  Name the events.                                  [1 mark]

          A = made by machine A ,  P(A) = 0.25
          B = made by machine B ,  P(B) = 0.35
          C = made by machine C ,  P(C) = 0.40
          D = the item is defective

          CHECK:  0.25 + 0.35 + 0.40 = 1


  STEP 2  Write the conditional probabilities.              [1 mark]

          P(D | A) = 0.05
          P(D | B) = 0.04
          P(D | C) = 0.02


  STEP 3  Draw the tree.                                    [1 mark]

                          0.05
              0.25    --------------> DEFECTIVE   0.25 x 0.05 = 0.0125
         ------------> A
        /             \  0.95
       /               --------------> good
      /
      |      0.35        0.04
   START ------------> B --------------> DEFECTIVE  0.35 x 0.04 = 0.0140
      |               \  0.96
      \                --------------> good
       \
        \    0.40        0.02
         ------------> C --------------> DEFECTIVE  0.40 x 0.02 = 0.0080
                      \  0.98
                       --------------> good
                                                    ------------------
                                        P(D)   =           0.0345


  STEP 4  Total probability.                                [2 marks]

          P(D) = P(A)P(D|A) + P(B)P(D|B) + P(C)P(D|C)
               = (0.25)(0.05) + (0.35)(0.04) + (0.40)(0.02)
               = 0.0125 + 0.0140 + 0.0080
               = 0.0345


  STEP 5  Bayes' theorem.                                   [2 marks]

                       P(B) P(D|B)        0.0140       140       28
          P(B | D) = ----------------  = --------- =  ------ =  ----
                          P(D)             0.0345      345       69

                                                  = 0.406 approx.
```

```
  FREE CHECK (do this every time):
     P(A|D) = 0.0125/0.0345 = 25/69
     P(B|D) = 0.0140/0.0345 = 28/69
     P(C|D) = 0.0080/0.0345 = 16/69
     25/69 + 28/69 + 16/69 = 69/69 = 1     Correct.
```

---

### Q C4
Bag I contains 4 red and 4 black balls. Bag II contains 2 red and 6 black balls.
A bag is chosen at random and a ball is drawn from it. The ball drawn is red.
Find the probability that it was drawn from Bag I.

**ANSWER:**

```
  STEP 1  H1 = Bag I chosen   ,  P(H1) = 1/2
          H2 = Bag II chosen  ,  P(H2) = 1/2
          E  = the ball drawn is red


  STEP 2  P(E | H1) = 4/8 = 1/2
          P(E | H2) = 2/8 = 1/4


  STEP 3  THE TREE

                          4/8
              1/2    --------------> RED    (1/2)(4/8) = 4/16
         ------------> BAG I
        /             \  4/8
       /               --------------> BLACK (1/2)(4/8) = 4/16
   START
       \                  2/8
        \     1/2    --------------> RED    (1/2)(2/8) = 2/16
         ------------> BAG II
                      \  6/8
                       --------------> BLACK (1/2)(6/8) = 6/16

        CHECK: 4/16 + 4/16 + 2/16 + 6/16 = 1


  STEP 4  Total probability of a red ball

          P(E) = (1/2)(1/2) + (1/2)(1/4)
               = 1/4 + 1/8
               = 3/8


  STEP 5  Bayes' theorem

                       (1/2)(1/2)        1/4        1      8       2
          P(H1 | E) = -------------- =  ------  =  --- x  --- =  -----
                           3/8            3/8       4      3       3

          P(H1 | E) = 2/3
```

```
  Sanity check: Bag I is richer in red balls, so a red ball is more
  likely to have come from Bag I.  2/3 > 1/2.  Answer is sensible.
  Also  P(H2 | E) = 1 - 2/3 = 1/3.
```

---

### Q C5
Three boxes B1, B2, B3 contain balls as follows:

| Box | White | Black | Red |
|---|---|---|---|
| B1 | 1 | 2 | 3 |
| B2 | 2 | 1 | 1 |
| B3 | 4 | 5 | 3 |

A box is chosen at random and two balls are drawn from it. One is white and one
is red. Find the probability that they came from box B2.

**ANSWER:**

```
  STEP 1   P(B1) = P(B2) = P(B3) = 1/3
           E = "one white and one red ball are drawn"


  STEP 2   Compute P(E | Bi) for each box.

           BOX B1:  1W, 2B, 3R  -> 6 balls
                    total ways   = 6C2 = 15
                    one W, one R = 1 x 3 = 3
                    P(E|B1) = 3/15 = 1/5

           BOX B2:  2W, 1B, 1R  -> 4 balls
                    total ways   = 4C2 = 6
                    one W, one R = 2 x 1 = 2
                    P(E|B2) = 2/6 = 1/3

           BOX B3:  4W, 5B, 3R  -> 12 balls
                    total ways   = 12C2 = 66
                    one W, one R = 4 x 3 = 12
                    P(E|B3) = 12/66 = 2/11


  STEP 3   Total probability.

           P(E) = (1/3)(1/5) + (1/3)(1/3) + (1/3)(2/11)

                = (1/3) [ 1/5 + 1/3 + 2/11 ]

                          1     1      3 + 5       8
             where       --- + --- =  -------- =  ----
                          5     3        15        15

                          8      2      88 + 30      118
             and         ---- + ----- = --------- = -----
                          15     11        165       165

                        1      118        118
           P(E)  =     --- x  ------  =  ------
                        3      165        495


  STEP 4   Bayes' theorem.

                        (1/3)(1/3)         1/9
           P(B2 | E) = -------------- = ----------
                         118/495          118/495

                        1       495        55
                     = --- x  -------  =  -----
                        9       118        118

           Since 495/9 = 55,        P(B2 | E) = 55/118
```

```
  FREE CHECK:
     P(B1|E) = (1/15) / (118/495) = 495/(15 x 118) = 33/118
     P(B2|E) = 55/118
     P(B3|E) = (2/33) / (118/495) = 495 x 2 /(33 x 118) = 30/118
     33 + 55 + 30 = 118    ->    total = 118/118 = 1   Correct.
```

---

### Q C6
A rare disease affects 0.1% of a population. A diagnostic test gives a positive
result for 99% of the people who have the disease, and gives a false positive for
0.5% of the people who do not have it. A person selected at random tests positive.
Find the probability that he actually has the disease.

**ANSWER:**

```
  STEP 1   D  = has the disease         P(D)  = 0.001
           D' = does not have it        P(D') = 0.999
           E  = tests positive


  STEP 2   P(E | D)  = 0.99          (true positive)
           P(E | D') = 0.005         (false positive)


  STEP 3   THE TREE

                            0.99
              0.001    --------------> POSITIVE   0.001 x 0.99  = 0.00099
         ---------------> HAS DISEASE
        /                \  0.01
       /                  --------------> negative
   START
       \                     0.005
        \     0.999     --------------> POSITIVE  0.999 x 0.005 = 0.004995
         ---------------> NO DISEASE
                         \  0.995
                          --------------> negative
                                                  ---------------------
                                     P(POSITIVE) =        0.005985


  STEP 4   P(E) = (0.001)(0.99) + (0.999)(0.005)
                = 0.00099 + 0.004995
                = 0.005985


  STEP 5                 (0.001)(0.99)        0.00099
           P(D | E)  =  ---------------- =  -----------
                            P(E)              0.005985

                          990          22
                     =  --------  =  ------  =  0.165 approx.
                          5985         133

           P(D | E) = 22/133 , about 16.5%
```

```
  COMMENT worth writing at the end:
  Even after a positive result on a 99% accurate test the person most
  likely does NOT have the disease, because the disease is so rare that
  the huge healthy group produces more FALSE positives (about 5 in 1000)
  than the tiny sick group produces TRUE positives (about 1 in 1000).
```

---

### Q C7
An urn contains 10 white and 3 black balls. Another urn contains 3 white and
5 black balls. Two balls are drawn at random from the first urn and put into the
second urn, and then one ball is drawn at random from the second urn. Find the
probability that it is a white ball.

**ANSWER:**

```
  Urn 1 : 10 W , 3 B  (13 balls)         Urn 2 : 3 W , 5 B  (8 balls)
  Two balls move from Urn 1 to Urn 2, so Urn 2 ends with 10 balls.

  Total ways to pick 2 from Urn 1 = 13C2 = 78


  CASE 1   Both transferred balls are WHITE
           P = 10C2 / 78 = 45/78 = 15/26
           Urn 2 becomes 5 W , 5 B   ->  P(white) = 5/10 = 1/2

  CASE 2   One WHITE and one BLACK transferred
           P = (10 x 3)/78 = 30/78 = 5/13
           Urn 2 becomes 4 W , 6 B   ->  P(white) = 4/10 = 2/5

  CASE 3   Both transferred balls are BLACK
           P = 3C2 / 78 = 3/78 = 1/26
           Urn 2 becomes 3 W , 7 B   ->  P(white) = 3/10

  CHECK the three case-probabilities: 15/26 + 5/13 + 1/26
                                    = 15/26 + 10/26 + 1/26 = 26/26 = 1


  TOTAL PROBABILITY

     P(white) = (15/26)(1/2) + (5/13)(2/5) + (1/26)(3/10)

                  15        2        3
              =  ----  +  ----  +  -----
                  52       13       260

              Common denominator 260:

                  75       40        3        118        59
              =  -----  + -----  + -----  =  ------  =  -----
                  260      260      260       260        130

     P(white) = 59/130      (about 0.454)
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| 1 | **Bayes' theorem numerical** (urn / factory / box) | C (7M) | Very high |
| 2 | **Addition theorem — statement and proof** | C (7M) | Very high |
| 3 | Balls drawn without replacement, or transfer between bags | C (7M) or B | High |
| 4 | Given P(A), P(B), P(AuB) — find P(A\|B), P(B\|A), test independence | B (4M) | High |
| 5 | "At least one solves the problem" — three independent people | B (4M) | High |
| 6 | Odds in favour / odds against | A (2M) | High |
| 7 | Simple dice / card / coin probability | A (2M) | Very high |
| 8 | Definition: mutually exclusive / exhaustive / independent | A (2M) | High |
| 9 | Mutually exclusive AND exhaustive events, find P(A), P(B), P(C) | B (4M) | Medium |
| 10 | A and B truth-telling — probability they contradict | B (4M) | Medium |
| 11 | Bayes' theorem — statement and proof | C (7M) | Medium |
| 12 | Committee / nCr counting probability | B (4M) | Medium |
| 13 | Conditional probability from two dice | A or B | Medium |
| 14 | Letters of a word arranged, vowels together | B (4M) | Medium |

```
  +-------------------------------------------------------------------+
  |   THE EXAM-HALL PLAN FOR THIS CHAPTER                             |
  |                                                                   |
  |   1. Answer the Section A probability question FIRST. It takes    |
  |      under a minute and it is 2 guaranteed marks.                 |
  |                                                                   |
  |   2. In Section C, if the probability question is a Bayes         |
  |      numerical or the addition theorem proof, CHOOSE IT.          |
  |      Those two are the most predictable 7 marks in the paper.     |
  |                                                                   |
  |   3. Always write the formula line BEFORE you put the numbers in. |
  |      Examiners give a mark for the correct formula even when the  |
  |      arithmetic afterwards goes wrong.                            |
  |                                                                   |
  |   4. Never leave a probability question blank. Writing            |
  |      "n(S) = 52" earns more than an empty page.                   |
  +-------------------------------------------------------------------+
```
