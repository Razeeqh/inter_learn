# Probability — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. COUNTING THE SAMPLE SPACE

```
  n coins tossed            ->   n(S) = 2^n
  n dice thrown             ->   n(S) = 6^n
  one card from a pack      ->   n(S) = 52
  r objects chosen from n   ->   n(S) = nCr        (order does NOT matter)
  r objects arranged from n ->   n(S) = nPr        (order DOES matter)

                 n!                              n!
     nCr  =  -----------          nPr  =  ---------------
              r! (n-r)!                       (n - r)!
```

| Formula | When to use |
|---------|-------------|
| n(S) = 2^n | any coin-tossing question |
| n(S) = 6^n | any dice question (2 dice -> 36) |
| n(S) = nCr | "balls drawn together", "committee chosen" |
| n(S) = nPr or n! | "letters arranged", "a number is formed" |
| n! / (p! q! ...) | arrangements of a word with repeated letters |

Values worth knowing cold:

```
  4C2 = 6      5C2 = 10     5C3 = 10     6C2 = 15     6C3 = 20
  9C3 = 84     10C2 = 45    10C4 = 210   13C3 = 286
  52C2 = 1326  52C3 = 22100
```

---

# 2. THE CLASSICAL DEFINITION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                 m         n(E)      favourable outcomes           |
  |     P(E)  =   -----  =  -------  =  --------------------          |
  |                 n         n(S)      total outcomes                |
  |                                                                   |
  |     valid only when the outcomes are EQUALLY LIKELY,              |
  |     MUTUALLY EXCLUSIVE and EXHAUSTIVE                             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| P(E) = n(E)/n(S) | every basic dice / coin / card / ball question |
| P(E) = 0 | impossible event |
| P(E) = 1 | sure event |
| 0 <= P(E) <= 1 | as a sanity check on every answer you write |

---

# 3. THE AXIOMATIC DEFINITION

```
  +-------------------------------------------------------------------+
  |   AXIOM 1    P(A) >= 0                                            |
  |   AXIOM 2    P(S) = 1                                             |
  |   AXIOM 3    A n B = { }   =>   P(A u B) = P(A) + P(B)            |
  +-------------------------------------------------------------------+
```

Consequences (each is a 2-mark proof on its own):

```
  P({ })  = 0
  P(A')   = 1 - P(A)
  0 <= P(A) <= 1
  A subset of B      =>   P(A) <= P(B)
  P(A n B') = P(A) - P(A n B)
```

| Result | When to use |
|---------|-------------|
| P(A') = 1 - P(A) | anything with "at least one", "not", "fails" |
| P(A n B') = P(A) - P(A n B) | "A happens but B does not" |
| A subset of B => P(A) <= P(B) | objective / true-false questions |

---

# 4. COMPLEMENT AND ODDS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |     P(A')  =  1 - P(A)                                            |
  |                                                                   |
  |     ODDS IN FAVOUR of A   =  m : n  =  P(A) : P(A')               |
  |     ODDS AGAINST A        =  n : m  =  P(A') : P(A)               |
  |                                                                   |
  |                                a                                  |
  |     odds in favour a : b  =>  P(A) = -------                      |
  |                                       a + b                       |
  |                                                                   |
  |                                b                                  |
  |     odds against  a : b   =>  P(A) = -------                      |
  |                                       a + b                       |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| P(A') = 1 - P(A) | "at least one", "none", complement questions |
| odds in favour = P(A) : P(A') | "find the odds in favour" |
| P(A) = a/(a+b) from odds a:b in favour | "odds are 3:5, find the probability" |
| P(A) = b/(a+b) from odds a:b against | "odds AGAINST are 5:3, find P" |

> Odds compare favourable to UNFAVOURABLE.
> Probability compares favourable to TOTAL. Never mix them.

---

# 5. THE ADDITION THEOREM  (OR)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   ANY two events                                                  |
  |        P(A u B)  =  P(A) + P(B) - P(A n B)                        |
  |                                                                   |
  |   MUTUALLY EXCLUSIVE  (A n B = { })                               |
  |        P(A u B)  =  P(A) + P(B)                                   |
  |                                                                   |
  |   THREE events                                                    |
  |        P(A u B u C)  =   P(A) + P(B) + P(C)                       |
  |                        - P(A n B) - P(B n C) - P(C n A)           |
  |                        + P(A n B n C)                             |
  |                                                                   |
  |   sign pattern:   + singles   - pairs   + triple                  |
  +-------------------------------------------------------------------+
```

## Everything you can be asked to find from A and B

```
  +-------------------------------+-----------------------------------+
  |  IN WORDS                     |  IN SYMBOLS                       |
  +-------------------------------+-----------------------------------+
  |  A or B (at least one)        |  P(A u B) = P(A)+P(B)-P(AnB)      |
  |  both A and B                 |  P(A n B)                         |
  |  A but not B                  |  P(A n B') = P(A) - P(A n B)      |
  |  B but not A                  |  P(A' n B) = P(B) - P(A n B)      |
  |  neither A nor B              |  P(A' n B') = 1 - P(A u B)        |
  |  exactly one of A, B          |  P(A) + P(B) - 2 P(A n B)         |
  |  not both                     |  1 - P(A n B)                     |
  +-------------------------------+-----------------------------------+
```

**De Morgan (needed for two of the rows above):**

```
  (A u B)'  =  A' n B'            (A n B)'  =  A' u B'
```

| Formula | When to use |
|---------|-------------|
| P(AuB) = P(A)+P(B)-P(AnB) | any "or" question; the most-used line in the chapter |
| P(AuB) = P(A)+P(B) | ONLY when told mutually exclusive / disjoint |
| P(A'nB') = 1 - P(AuB) | "neither ... nor ..." |
| P(A)+P(B)-2P(AnB) | "exactly one of them" |
| three-event version | 4-mark or 7-mark word problems with three subjects/players |

---

# 6. CONDITIONAL PROBABILITY

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                     P(A n B)          n(A n B)                    |
  |     P(A | B)  =   -----------   =   -----------      P(B) > 0     |
  |                       P(B)             n(B)                       |
  |                                                                   |
  |                     P(A n B)                                      |
  |     P(B | A)  =   -----------                        P(A) > 0     |
  |                       P(A)                                        |
  |                                                                   |
  |     P(A | B) + P(A' | B)  =  1                                    |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| P(A\|B) = P(AnB)/P(B) | the words "given that", "if it is known that" |
| n(AnB)/n(B) | when you can count outcomes directly (dice, cards) |
| P(A\|B) + P(A'\|B) = 1 | shortcut when the complement is easier |
| P(A\|B) = 0 | A and B are mutually exclusive |
| P(A\|B) = P(A) | A and B are independent |

---

# 7. THE MULTIPLICATION THEOREM  (AND)

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TWO events                                                      |
  |        P(A n B)  =  P(A) x P(B | A)                               |
  |                  =  P(B) x P(A | B)                               |
  |                                                                   |
  |   THREE events (chain rule)                                       |
  |        P(A n B n C)  =  P(A) x P(B|A) x P(C | A n B)              |
  |                                                                   |
  |   INDEPENDENT events                                              |
  |        P(A n B)      =  P(A) x P(B)                               |
  |        P(A n B n C)  =  P(A) x P(B) x P(C)                        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| P(A)P(B\|A) | drawing WITHOUT replacement |
| P(A)P(B) | drawing WITH replacement, or told "independent" |
| chain rule for 3 | three cards / three balls drawn in succession |

---

# 8. INDEPENDENT EVENTS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TEST:      A , B independent   <=>   P(A n B) = P(A) P(B)       |
  |                                                                   |
  |   Equivalently  P(A|B) = P(A)   and   P(B|A) = P(B)               |
  |                                                                   |
  |   If A , B independent then so are                                |
  |          (A , B')     (A' , B)     (A' , B')                      |
  |                                                                   |
  |   For independent A , B :                                         |
  |          P(A u B)  =  P(A) + P(B) - P(A) P(B)                     |
  |                    =  1 - P(A') P(B')                             |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## MUTUALLY EXCLUSIVE vs INDEPENDENT — write this out every time

```
  +--------------------+-----------------------+------------------------+
  |                    | MUTUALLY EXCLUSIVE    | INDEPENDENT            |
  +--------------------+-----------------------+------------------------+
  |  Condition         | P(A n B) = 0          | P(A n B) = P(A)P(B)    |
  |  Meaning           | cannot both happen    | do not affect each     |
  |                    |                       | other                  |
  |  P(A u B)          | P(A) + P(B)           | P(A)+P(B)-P(A)P(B)     |
  |  P(A | B)          | 0                     | P(A)                   |
  |  Venn diagram      | separate circles      | overlapping circles    |
  +--------------------+-----------------------+------------------------+

  If P(A) > 0 and P(B) > 0 they can NEVER be both at the same time.
```

## AT LEAST ONE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   P(at least one of A, B, C)  =  1 - P(A') P(B') P(C')            |
  |                                    (independent events only)      |
  |                                                                   |
  |   P(none of them)             =  P(A') P(B') P(C')                |
  |                                                                   |
  |   P(exactly one)              =  P(A)P(B')P(C')                   |
  |                                + P(A')P(B)P(C')                   |
  |                                + P(A')P(B')P(C)                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| P(AnB) = P(A)P(B) as a TEST | "show that A and B are independent" |
| 1 - P(A')P(B') | "at least one solves / hits / passes" |
| P(A')P(B') | "neither of them", "the problem is not solved" |
| sum of three terms | "exactly one of them" |
| P(A)P(B') + P(A')P(B) | "they contradict each other" (truth-telling) |

---

# 9. TOTAL PROBABILITY AND BAYES

```
  +-------------------------------------------------------------------+
  |   THEOREM OF TOTAL PROBABILITY                                    |
  |                                                                   |
  |   H1, H2, ..., Hn mutually exclusive AND exhaustive:              |
  |                                                                   |
  |     P(E)  =  P(H1)P(E|H1) + P(H2)P(E|H2) + ... + P(Hn)P(E|Hn)     |
  |                                                                   |
  |           =  SUM over k of  P(Hk) P(E | Hk)                       |
  +-------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------+
  |   BAYES' THEOREM                                                  |
  |                                                                   |
  |                          P(Hi) x P(E | Hi)                        |
  |     P(Hi | E)  =  --------------------------------                |
  |                    SUM over k of P(Hk) P(E | Hk)                  |
  |                                                                   |
  |                          P(Hi) x P(E | Hi)                        |
  |                =  --------------------------------                |
  |                               P(E)                                |
  |                                                                   |
  |   TOP    = the ONE branch asked about                             |
  |   BOTTOM = ALL branches that produce E, added together            |
  |                                                                   |
  |   CHECK:  P(H1|E) + P(H2|E) + ... + P(Hn|E)  =  1                 |
  +-------------------------------------------------------------------+
```

The two-cause version written out in full (memorise this shape):

```
                                 P(H1) P(E|H1)
     P(H1 | E)  =  --------------------------------------
                    P(H1) P(E|H1)  +  P(H2) P(E|H2)
```

| Formula | When to use |
|---------|-------------|
| total probability | "a bag is chosen at random, find P(red)" — forward |
| Bayes | "the ball is red, find P(it came from bag I)" — backward |
| denominator = P(E) | always compute it once and reuse for all the causes |
| answers add to 1 | your free accuracy check |

---

# 10. THE STANDARD NUMBERS (learn these, do not derive them in the exam)

## Cards (52)

| Item | Count | P |
|---|---|---|
| One named card | 1 | 1/52 |
| Ace / king / queen / jack | 4 | 1/13 |
| One suit | 13 | 1/4 |
| Red or black | 26 | 1/2 |
| Face cards J, Q, K | 12 | 3/13 |
| Honours A, K, Q, J | 16 | 4/13 |
| Red face cards | 6 | 3/26 |
| King OR heart | 16 | 4/13 |

## Two dice (36)

| Item | Count | P |
|---|---|---|
| Doublet | 6 | 1/6 |
| Sum 7 | 6 | 1/6 |
| Sum 8 | 5 | 5/36 |
| Sum 9 | 4 | 1/9 |
| Sum even | 18 | 1/2 |
| Sum prime | 15 | 5/12 |
| At least one 6 | 11 | 11/36 |

## Coins

```
  P(exactly r heads in n tosses)  =  nCr / 2^n

  3 coins:  P(all heads) = 1/8       P(exactly 2 heads) = 3/8
            P(at least 1 head) = 7/8
  4 coins:  P(exactly 2 heads) = 4C2/16 = 6/16 = 3/8
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +----+--------------------------------------------------------------+
  |  1 |  P(E) = n(E) / n(S)                                          |
  +----+--------------------------------------------------------------+
  |  2 |  P(A') = 1 - P(A)                                            |
  +----+--------------------------------------------------------------+
  |  3 |  P(A u B) = P(A) + P(B) - P(A n B)                           |
  +----+--------------------------------------------------------------+
  |  4 |  mutually exclusive:  P(A u B) = P(A) + P(B)                 |
  +----+--------------------------------------------------------------+
  |  5 |  P(A u B u C) = sums - pairs + triple                        |
  +----+--------------------------------------------------------------+
  |  6 |  P(A | B) = P(A n B) / P(B)                                  |
  +----+--------------------------------------------------------------+
  |  7 |  P(A n B) = P(A) P(B | A)                                    |
  +----+--------------------------------------------------------------+
  |  8 |  independent:  P(A n B) = P(A) P(B)                          |
  +----+--------------------------------------------------------------+
  |  9 |  P(at least one) = 1 - P(A')P(B')                            |
  +----+--------------------------------------------------------------+
  | 10 |  P(A' n B') = 1 - P(A u B)                                   |
  +----+--------------------------------------------------------------+
  | 11 |  P(E) = SUM P(Hk) P(E | Hk)          [total probability]     |
  +----+--------------------------------------------------------------+
  | 12 |  P(Hi | E) = P(Hi)P(E|Hi) / SUM P(Hk)P(E|Hk)   [Bayes]       |
  +----+--------------------------------------------------------------+
```

Numbers 3, 7 and 12 are the three that carry the 7-mark questions.
If you learn nothing else, learn those three.
