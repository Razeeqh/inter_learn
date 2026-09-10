# Probability — Mind Map

**Maths IIA · Chapter 9 · The most "scoreable" chapter in the whole paper**
Every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

Why this chapter matters: there is almost no algebra to remember. If you can count
how many cards are red and how many cards there are in total, you can start scoring
here today. A weak student who learns ONLY the addition theorem, the multiplication
theorem and Bayes' theorem walks out with 13-15 marks.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                          P R O B A B I L I T Y
                                    |
   +--------------+-----------------+-----------------+---------------+
   |              |                 |                 |               |
 LANGUAGE     DEFINING P        COMBINING          CONDITION      REVERSING
 (vocabulary)                   TWO EVENTS         (given that)   (Bayes)
   |              |                 |                 |               |
 Random       CLASSICAL         ADDITION          P(A|B)          Total
 experiment   P(E) = m/n        THEOREM           = P(A n B)      Probability
   |              |                 |               ---------      Theorem
 Sample       0 <= P(E) <= 1    P(A u B)            P(B)             |
 space S          |             = P(A)+P(B)           |            P(E) = sum of
   |          AXIOMATIC         - P(A n B)          MULTIPLICATION   P(Hi) P(E|Hi)
 Event E      1. P(E) >= 0          |               THEOREM          |
 (subset)     2. P(S) = 1      If mutually          P(A n B)      BAYES' THEOREM
   |          3. P(A u B)      exclusive:           = P(A) P(B|A)    |
 TYPES OF        = P(A)+P(B)   P(A u B)               |            P(Hi | E)
 EVENTS          if disjoint   = P(A) + P(B)      Extension to    = P(Hi) P(E|Hi)
   |              |                 |             3 events         ------------
   +-- simple    Odds in         Extension to        |             sum P(Hk)P(E|Hk)
   +-- compound  favour = m:n    THREE events    INDEPENDENT         |
   +-- sure      Odds against       |            EVENTS           Urn / factory /
   +-- impossible   = n:m       P(A u B u C)     P(A n B)         disease-test
   +-- complementary  |          = sums          = P(A) P(B)      problems
   +-- mutually    P(E') =       - pairs            |
   |   exclusive   1 - P(E)      + triple      "At least one"
   +-- exhaustive                                = 1 - P(none)
   +-- equally likely
                                          COUNTING TOOL: nCr, nPr
                                          cards, dice, coins, balls
```

---

## THE FAMILY TREE OF EVENTS

```
                            EVENT  (any subset of S)
                                     |
        +----------------+-----------+-----------+----------------+
        |                |                       |                |
   By SIZE          By CERTAINTY            By RELATION       By FAIRNESS
        |                |                  (two or more)          |
   +----+----+      +----+----+          +------+------+      Equally likely
   |         |      |         |          |             |      (no outcome is
 SIMPLE   COMPOUND SURE    IMPOSSIBLE  MUTUALLY    EXHAUSTIVE   favoured)
 1 outcome  2 or    E = S    E = { }   EXCLUSIVE   union = S
            more   P = 1     P = 0     A n B = { }
                                            |
                                     COMPLEMENTARY
                                     (mutually exclusive
                                      AND exhaustive)
```

Read it like this: **complementary is the strongest condition.** A and A' are
mutually exclusive (they cannot both happen) AND exhaustive (one of them must
happen). Mutually exclusive alone does NOT mean complementary.

---

## THE 60-SECOND VERSION

Probability is one fraction:

```
                    number of ways the thing you WANT can happen
     P(event)  =   ----------------------------------------------
                    number of ways ANYTHING can happen
```

That is the whole subject. Everything else is just a shortcut for when the
counting gets hard.

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Count | list the sample space, count favourable cases | Section A, 2 marks |
| Combine (OR) | addition theorem, P(A u B) | Section A / B |
| Combine (AND) | multiplication theorem, P(A n B) | Section B, 4 marks |
| Condition | P(A given B) | Section B, 4 marks |
| **Reverse** | **Bayes' theorem** | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IIA — 75 marks)

| Topic | Section | Marks |
|-------|---------|-------|
| Definitions: mutually exclusive, exhaustive, independent | A | 2 |
| Simple dice / coin / card probability | A | 2 |
| Odds in favour and odds against | A | 2 |
| Complement rule, P(A' n B') type | A | 2 |
| Addition theorem numerical | B | 4 |
| Conditional probability numerical | B | 4 |
| Independent events / "at least one" | B | 4 |
| Balls from bags without replacement | B | 4 |
| **Bayes' theorem (urn / factory / disease)** | **C** | **7** |
| **Addition theorem statement AND proof** | **C** | **7** |
| **Multiplication theorem + long word problem** | **C** | **7** |

**Total realistically available from this one chapter: 13 to 15 marks out of 75.**
That is more than half a pass on its own (pass = 26).

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Random experiment, sample space, event
              |
  STEP 2   Types of events (learn the 8 words + one example each)
              |
  STEP 3   Classical definition   P(E) = m / n
              |
     +--------+--------+
     |                 |
  STEP 4          STEP 5
  Axiomatic       Complement  P(E') = 1 - P(E)
  definition           |
     |            Odds in favour / against
     |                 |
     +--------+--------+
              |
  STEP 6   ADDITION THEOREM  P(A u B) = P(A) + P(B) - P(A n B)
              |
  STEP 7   Addition theorem for THREE events
              |
  STEP 8   CONDITIONAL PROBABILITY  P(A|B) = P(A n B) / P(B)
              |
  STEP 9   MULTIPLICATION THEOREM  P(A n B) = P(A) P(B|A)
              |
     +--------+--------+
     |                 |
  STEP 10         STEP 11
  INDEPENDENT     Without replacement
  EVENTS          (bags of balls)
     |                 |
  "At least one"       |
  = 1 - P(none)        |
     |                 |
     +--------+--------+
              |
  STEP 12  THEOREM OF TOTAL PROBABILITY
              |
  STEP 13  BAYES' THEOREM   <--  the 7-mark question
```

---

## THE KEY BOX — these five lines unlock 80% of the chapter

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.   P(E)  =  m / n        favourable / total                   |
  |                                                                   |
  |   2.   P(E') =  1 - P(E)     "at least one" lives here            |
  |                                                                   |
  |   3.   P(A u B)  =  P(A) + P(B) - P(A n B)        the OR rule     |
  |                                                                   |
  |   4.   P(A n B)  =  P(A) x P(B|A)                 the AND rule    |
  |                                                                   |
  |                        P(A n B)                                   |
  |   5.   P(A | B)  =    ----------  ,   P(B) not 0                  |
  |                          P(B)                                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

And the one that pays 7 marks:

```
  +-------------------------------------------------------------------+
  |                    BAYES' THEOREM                                 |
  |                                                                   |
  |                            P(Hi) x P(E | Hi)                      |
  |     P(Hi | E)   =   ---------------------------------             |
  |                      SUM over k of  P(Hk) x P(E | Hk)             |
  |                                                                   |
  |   TOP    = the one branch you are asked about                     |
  |   BOTTOM = every branch that could have produced E, added up      |
  +-------------------------------------------------------------------+
```

---

## THE FOUR PICTURES YOU MUST BE ABLE TO DRAW

```
   UNION  A u B                    INTERSECTION  A n B
   (A or B or both)                (A and B together)

   +---------------------+         +---------------------+
   |  S                  |         |  S                  |
   |   ****   ****       |         |    ****  ****       |
   |  *####**#####*      |         |   *    **###*  *    |
   |  *#####**####*      |         |  *  A  *#####*  B * |
   |   *####**###*       |         |   *    **###*  *    |
   |    ****   ***       |         |    ****  ****       |
   |    A       B        |         |                     |
   +---------------------+         +---------------------+
   ALL shading counts              ONLY the overlap counts


   COMPLEMENT  A'                  MUTUALLY EXCLUSIVE  A n B = { }

   +---------------------+         +---------------------+
   |####S###############|          |  S                  |
   |###   ****   #######|          |   ****      ****    |
   |###  *    *  #######|          |  *    *    *    *   |
   |###  *  A *  #######|          |  *  A *    *  B *   |
   |###  *    *  #######|          |  *    *    *    *   |
   |###   ****   #######|          |   ****      ****    |
   |####################|          |   NO OVERLAP AT ALL |
   +---------------------+         +---------------------+
   Everything EXCEPT A             They can never happen together
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning** — Vocabulary. Write the 8 types of events with ONE example each
(a dice example works for all of them). Then do 10 "single dice / single card"
questions. These are pure 2-mark marks and take 30 seconds each.

**Day 1 evening** — The addition theorem. Learn the STATEMENT and the PROOF word
for word — the proof alone is a 7-mark question and it is only 8 lines long.
Then do 6 numericals with it.

**Day 2 morning** — Conditional probability and the multiplication theorem.
Do the "two balls drawn without replacement" question five times with different
numbers until your hand does it automatically.

**Day 2 evening** — Bayes' theorem. Learn to draw the tree FIRST, put the numbers
on the branches, then read the formula off the tree. Do the three standard shapes:
two urns, three factories, one disease test. Those three cover every Bayes question
BIEAP has ever asked.

That plan alone is worth about 13 of the 75 marks in Maths IIA — and Section A
of this chapter is the fastest 4-6 marks in the entire paper.

---

## THE ONE MISTAKE THAT KILLS THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |   MUTUALLY EXCLUSIVE  is NOT the same as  INDEPENDENT             |
  |                                                                   |
  |   Mutually exclusive :  P(A n B) = 0        (cannot both happen)  |
  |   Independent        :  P(A n B) = P(A)P(B) (one does not affect  |
  |                                              the other)           |
  |                                                                   |
  |   If P(A) > 0 and P(B) > 0 they can NEVER be both at once.        |
  +-------------------------------------------------------------------+
```

Examiners ask this as a 2-mark question almost every single year. Learn it now.
