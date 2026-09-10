# Probability — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — WRITE THE SAMPLE SPACE                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the sample space when ..." / "Find n(S)"
  METHOD    coins   ->  2^n        dice  ->  6^n
            cards   ->  52         choosing r from n  ->  nCr
            List the outcomes in a fixed order so you miss none.
  TRAP      Writing n(S) as a number when the question asked for the SET,
            or the other way round. Give both if unsure.
```

```
  PATTERN 2 — DEFINE A TYPE OF EVENT                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define mutually exclusive / exhaustive / equally likely /
            complementary events."
  METHOD    1. Write the SYMBOL condition.
            2. Write the sentence in words.
            3. Give ONE example (use a single die every time).

            mutually exclusive  A n B = { }
            exhaustive          A u B u ... = S
            complementary       A n A' = { }  AND  A u A' = S
            equally likely      every outcome has the same chance
  TRAP      Giving only the words and no example. The example carries a mark.
```

```
  PATTERN 3 — SIMPLE DICE / COIN / CARD PROBABILITY               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A die is thrown ... find the probability that ..."
  METHOD    1. Write n(S).
            2. List E and write n(E).
            3. P(E) = n(E)/n(S) and reduce the fraction.
  TRAP      Reading "exactly two heads" as "at least two heads".
            EXACTLY = that number only.  AT LEAST = that number or more.
            AT MOST = that number or fewer.
```

```
  PATTERN 4 — ODDS IN FAVOUR / ODDS AGAINST                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   The word "odds" anywhere in the question.
  METHOD    given P(A)         ->  odds in favour = P(A) : P(A')
                                   odds against   = P(A') : P(A)
            given odds a : b in favour  ->  P(A) = a / (a + b)
            given odds a : b against    ->  P(A) = b / (a + b)
  TRAP      Writing 3:5 as the probability 3/5. It is 3/8.
            Odds compare favourable to UNFAVOURABLE, not to the total.
```

```
  PATTERN 5 — ADDITION THEOREM, PLUG IN THE NUMBERS               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three of these four are given: P(A), P(B), P(A n B), P(A u B).
  METHOD    Write   P(A u B) = P(A) + P(B) - P(A n B)
            Substitute and solve for the missing one.
  TRAP      Using P(A u B) = P(A) + P(B) when the events are NOT stated to
            be mutually exclusive. You may only drop P(A n B) if the
            question says "mutually exclusive" or "disjoint".
```

```
  PATTERN 6 — TRANSLATE ENGLISH INTO SET LANGUAGE                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the probability that A occurs but B does not" /
            "neither of them" / "exactly one of them".
  METHOD    A but not B       ->  P(A) - P(A n B)
            B but not A       ->  P(B) - P(A n B)
            neither           ->  1 - P(A u B)
            exactly one       ->  P(A) + P(B) - 2 P(A n B)
            not both          ->  1 - P(A n B)
  TRAP      Writing P(A' n B') = P(A') x P(B'). That is only true when the
            events are INDEPENDENT. In general use 1 - P(A u B).
```

```
  PATTERN 7 — MUTUALLY EXCLUSIVE AND EXHAUSTIVE, FIND P(A)        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A, B, C are mutually exclusive and exhaustive with
            P(B) = 2P(A) , P(C) = 3P(A). Find P(A)."
  METHOD    1. Let P(A) = x and write the others in terms of x.
            2. Exhaustive + mutually exclusive gives  sum = 1.
            3. Solve the single linear equation.
            4. Check the three answers add to exactly 1.
  TRAP      Forgetting that BOTH conditions are needed. Mutually exclusive
            alone does not give a sum of 1.
```

```
  PATTERN 8 — STATE AND PROVE THE ADDITION THEOREM                7 marks
  ------------------------------------------------------------------------
  TRIGGER   "State and prove the addition theorem on probability."
  METHOD    1. STATEMENT:  P(A u B) = P(A) + P(B) - P(A n B).
            2. Draw the Venn diagram.
            3. Split  A u B = A u (A' n B) , disjoint, so
                   P(A u B) = P(A) + P(A' n B)                  ... (1)
            4. Split  B = (A n B) u (A' n B) , disjoint, so
                   P(A' n B) = P(B) - P(A n B)                  ... (2)
            5. Put (2) into (1). Done.
            6. Add the mutually exclusive case and the three-event
               extension if the question asks.
  TRAP      Jumping straight to the answer. The marks are in stating that
            the two pieces are DISJOINT and quoting AXIOM 3 each time.
```

```
  PATTERN 9 — ADDITION THEOREM FOR THREE EVENTS                   4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   Three subjects / three players / three newspapers, and the
            words "at least one".
  METHOD    P(A u B u C) =  P(A) + P(B) + P(C)
                          - P(A n B) - P(B n C) - P(C n A)
                          + P(A n B n C)
            Sign pattern: + singles , - pairs , + triple.
  TRAP      Getting a sign wrong. Write the six subtraction terms out in
            full before substituting anything.
```

```
  PATTERN 10 — CONDITIONAL PROBABILITY BY FORMULA                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Given that ..." , "if it is known that ..." , the bar P(A|B).
  METHOD    P(A|B) = P(A n B) / P(B)
            If P(A n B) is not given, get it first from the
            addition theorem.
  TRAP      Dividing by the wrong one. The event AFTER the bar is the
            one that already happened, so it goes UNDERNEATH.
```

```
  PATTERN 11 — CONDITIONAL PROBABILITY BY COUNTING                4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two dice or a pack of cards, plus "given that".
  METHOD    1. List the reduced sample space B and count n(B).
            2. Count how many of THOSE also satisfy A -> n(A n B).
            3. P(A|B) = n(A n B) / n(B).
  TRAP      Still dividing by 36. Once you are told something, the total
            is no longer 36. Two useful counts:
                doublets = 6        at least one k = 11
```

```
  PATTERN 12 — MULTIPLICATION THEOREM / WITHOUT REPLACEMENT       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two balls / cards are drawn one after the other WITHOUT
            replacement."
  METHOD    P(first) x P(second GIVEN the first)
            Both the top and the bottom drop by 1 on the second draw.
            Three draws: P(A) x P(B|A) x P(C | A n B).
  TRAP      Keeping the same denominator on the second draw.
            Also: "one red and one green" needs BOTH orders added,
            RG + GR. Half the marks live in that second term.
```

```
  PATTERN 13 — WITH REPLACEMENT                                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "with replacement" , "the ball is put back" , "a die is
            thrown twice".
  METHOD    The events are independent. Just multiply the original
            probabilities. Nothing changes between draws.
  TRAP      Underline "with" or "without" the moment you read the question.
            The two answers are always different and both appear in the
            options.
```

```
  PATTERN 14 — TEST WHETHER TWO EVENTS ARE INDEPENDENT            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Are A and B independent?" / "Show that A and B are
            independent."
  METHOD    1. Find P(A n B) (often from the addition theorem).
            2. Compute P(A) x P(B).
            3. Equal    -> independent.
               Not equal-> not independent. Say which.
  TRAP      Assuming independence because the events "look unrelated".
            You must do the numerical test.
```

```
  PATTERN 15 — INDEPENDENT vs MUTUALLY EXCLUSIVE                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between ..." or "Can two events be both ...?"
  METHOD    mutually exclusive :  P(A n B) = 0        cannot co-occur
            independent        :  P(A n B) = P(A)P(B) do not affect
            If P(A) > 0 and P(B) > 0 they can NEVER be both, because
            P(A)P(B) > 0 is not 0.
  TRAP      Saying "they are the same thing". They are opposites in
            practice: mutually exclusive events are strongly DEPENDENT
            (if one happens the other definitely does not).
```

```
  PATTERN 16 — AT LEAST ONE OF SEVERAL INDEPENDENT EVENTS         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The problem is solved" , "the target is hit" , "at least one
            passes" , with separate probabilities for each person.
  METHOD    1. Write P(A'), P(B'), P(C') = 1 - each probability.
            2. P(none) = P(A') P(B') P(C').
            3. P(at least one) = 1 - P(none).
  TRAP      Adding the probabilities. P(A) + P(B) + P(C) can exceed 1 and
            is always wrong here.
```

```
  PATTERN 17 — EXACTLY ONE / EXACTLY TWO OF THREE                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "exactly one of them solves it" , "exactly two hit the target"
  METHOD    Exactly one = three separate products, then ADD:
                 P(A)P(B')P(C') + P(A')P(B)P(C') + P(A')P(B')P(C)
            Exactly two = three products with two hits and one miss.
  TRAP      Writing only one of the three terms. Make a small table with
            one row per case so you cannot forget any.
```

```
  PATTERN 18 — TRUTH-TELLING / CONTRADICTION                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A speaks the truth in x% of cases, B in y% ... probability
            they contradict / agree."
  METHOD    contradict = P(A true)P(B false) + P(A false)P(B true)
            agree      = P(A true)P(B true)  + P(A false)P(B false)
            The two answers must add to 1 -- use that as your check.
  TRAP      Converting the percentage wrongly. 75% = 3/4, not 7/5.
```

```
  PATTERN 19 — COUNTING WITH nCr                                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "3 balls are drawn together" , "a committee of 5 is formed" ,
            "4 cards are drawn".
  METHOD    1. n(S) = (total) C (number drawn)
            2. n(E) = product of a nCr for EACH group required
                      e.g. 2 white and 1 red -> 5C2 x 4C1
            3. Divide and reduce.
  TRAP      Adding the nCr's instead of multiplying. "2 white AND 1 red"
            is one joint choice -> MULTIPLY.
```

```
  PATTERN 20 — AT LEAST ONE, BY COUNTING                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "at least one white ball" when balls are drawn together.
  METHOD    P(at least one white) = 1 - P(no white)
                                  = 1 - (non-white C r) / (total C r)
  TRAP      Trying to add the cases "exactly 1 + exactly 2 + exactly 3".
            It works but it is four times the labour and four times the
            chance of a slip.
```

```
  PATTERN 21 — ARRANGEMENTS OF LETTERS                            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "The letters of the word ... are arranged at random."
  METHOD    1. n(S) = n! , divided by p! q! ... for repeated letters.
            2. "come together" -> tie them into ONE block:
                  (items)! x (arrangements inside the block)!
               If the tied letters are identical, there is no internal
               arrangement to count.
            3. Divide.
  TRAP      Forgetting to divide by the repeats in n(S), or forgetting the
            internal arrangement when the tied letters are all different.
```

```
  PATTERN 22 — CALENDAR PROBABILITY                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "the probability that a leap year has 53 Sundays"
  METHOD    ordinary year = 52 weeks + 1 odd day   -> 7 cases -> P = 1/7
            leap year     = 52 weeks + 2 odd days -> 7 pairs  -> P = 2/7
            For two named days in a leap year (53 Sundays AND 53 Mondays)
            only the (Sun, Mon) pair works -> 1/7.
  TRAP      Using 365 or 366 as the denominator. The denominator is 7.
```

```
  PATTERN 23 — THEOREM OF TOTAL PROBABILITY                       4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "A bag is chosen at random and a ball is drawn. Find the
            probability that it is red."  (forward direction)
  METHOD    1. Name the causes H1, H2, ... and write P(Hi).
            2. Write P(E | Hi) for each.
            3. P(E) = SUM P(Hi) P(E | Hi).
  TRAP      Forgetting a cause. Check that the P(Hi) add up to 1 before
            you go any further.
```

```
  PATTERN 24 — BAYES' THEOREM, STATEMENT AND PROOF                7 marks
  ------------------------------------------------------------------------
  TRIGGER   "State and prove Bayes' theorem."
  METHOD    1. STATEMENT with the conditions: H1 ... Hn mutually exclusive
               AND exhaustive, P(Hi) > 0, P(E) > 0.
            2. Start from P(Hi | E) = P(Hi n E) / P(E).
            3. Replace the top using the multiplication theorem:
                  P(Hi n E) = P(Hi) P(E | Hi)
            4. Replace the bottom using total probability:
                  P(E) = SUM P(Hk) P(E | Hk)
            5. Combine. Hence proved.
  TRAP      Leaving out the conditions in the statement, or proving only
            the two-cause case. State it for n causes.
```

```
  PATTERN 25 — BAYES NUMERICAL (URN / FACTORY / DISEASE)          7 marks
  ------------------------------------------------------------------------
  TRIGGER   Something has ALREADY happened (the ball is red, the item is
            defective, the test is positive) and you are asked WHICH
            SOURCE it came from.
  METHOD    1. Name the causes and write P(H1), P(H2), ... (they add to 1).
            2. Write P(E|H1), P(E|H2), ... straight from the question.
            3. DRAW THE TREE and multiply along every branch.
            4. P(E) = sum of the branches that give E.
            5. Answer = (the branch asked for) / P(E).
            6. CHECK: all the P(Hi|E) must add to exactly 1.
  TRAP      Putting the wrong thing on top. The numerator is ONE branch,
            the denominator is ALL the branches. Also: the answer is NOT
            P(E | Hi) -- that is the number you were given.
```

```
  PATTERN 26 — TRANSFER OF BALLS BETWEEN BAGS                     7 marks
  ------------------------------------------------------------------------
  TRIGGER   "One (or two) balls are transferred from bag I to bag II and
            then a ball is drawn from bag II."
  METHOD    1. List every possible composition of the transfer
               (WW , WB , BB — remember WB and BW are the same set if
               they are transferred together).
            2. Find the probability of each transfer case.
            3. RECOUNT bag II for each case — the total goes UP.
            4. Multiply and add (total probability).
            5. If the question then asks "given the drawn ball is white,
               find P(the transferred ball was white)", apply Bayes.
  TRAP      Not updating the total in bag II. If 2 balls move into a bag
            of 8, the new total is 10, not 8 and not 9.
```

```
  PATTERN 27 — COIN / DICE GAME, ALTERNATE TURNS                  4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "A and B throw alternately, the first to get a six wins."
  METHOD    Write the infinite series for the starter:
                 p + q^2 p + q^4 p + ...    where q = 1 - p
            Sum the GP:   P(starter wins) = p / (1 - q^2)
            The other player gets 1 minus that.
  TRAP      Using ratio q instead of q^2. Each full round is TWO throws.
```

```
  PATTERN 28 — PROVE A PROPERTY FROM THE AXIOMS                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that P(A') = 1 - P(A)" , "Show that P({ }) = 0" ,
            "If A is a subset of B show P(A) <= P(B)".
  METHOD    1. Split the sample space into DISJOINT pieces.
            2. Apply AXIOM 3 to get an equation.
            3. Use AXIOM 2 (P(S) = 1) and rearrange.
  TRAP      Using a Venn diagram alone. The marks are for quoting the
            axioms by name.
```

```
  PATTERN 29 — TWO-CHILDREN / HIDDEN-INFORMATION PUZZLE           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A family has two children. Given that at least one is a
            boy ..."
  METHOD    1. Write the FULL ordered sample space {BB, BG, GB, GG}.
            2. Cross out the outcomes ruled out by the information.
            3. Count what is left. That is your new denominator.
  TRAP      Answering 1/2. "At least one is a boy" removes only GG, so
            three cases remain and the answer is 1/3.
```

```
  PATTERN 30 — MIXED WORD PROBLEM (percentages in a class)        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "40% study Maths, 25% study Biology, 15% study both."
  METHOD    Convert every percentage to a decimal, then it is just
            Pattern 5 and Pattern 10:
                 P(M u B) = P(M) + P(B) - P(M n B)
                 P(M | B) = P(M n B) / P(B)
            A two-circle Venn diagram with the three region values written
            inside answers every part instantly.
  TRAP      Reading "15% study both" as "15% study only Maths".
            "Only Maths" = 40 - 15 = 25%.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

| The question says ... | Pattern |
|---|---|
| "Define exhaustive events" | 2 |
| "Find the probability of getting at least one head" | 16 or 20 |
| "The odds against an event are 5 : 4" | 4 |
| "Two balls are drawn without replacement" | 12 |
| "Given that a doublet appeared ..." | 11 |
| "State and prove the addition theorem" | 8 |
| "A, B, C are mutually exclusive and exhaustive" | 7 |
| "The item is found defective — which machine?" | 25 |
| "A speaks the truth 4 times out of 5" | 18 |
| "A committee of 5 is chosen from 6 boys and 4 girls" | 19 |
| "The letters of the word ARTICLE are arranged" | 21 |
| "A leap year selected at random" | 22 |
| "One ball is transferred from bag I to bag II" | 26 |
| "Show that P(A') = 1 - P(A)" | 28 |
| "A bag is chosen at random, find P(red)" | 23 |
| "Are A and B independent?" | 14 |
| "Find the probability that neither A nor B occurs" | 6 |
| "A family has two children" | 29 |
| "A and B throw a die alternately" | 27 |
| "40% study Maths, 25% study Biology" | 30 |
| "Find the probability that exactly one of them solves it" | 17 |
| "A die is thrown twice with replacement" | 13 |
| "State and prove Bayes' theorem" | 24 |
| "Three newspapers A, B, C — at least one is read" | 9 |

If you can name the pattern for 20 of these 24, you are ready for the exam.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |   LEVEL 1 -- 2 MARKS, ALMOST CERTAIN.  Learn these five patterns  |
  |   and you cannot be shut out of this chapter.                     |
  |                                                                   |
  |      Pattern 2   define a type of event                           |
  |      Pattern 3   simple dice / card / coin                        |
  |      Pattern 4   odds in favour and against                       |
  |      Pattern 5   plug into the addition theorem                   |
  |      Pattern 15  independent vs mutually exclusive                |
  |                                                                   |
  |   Time to learn: one evening.        Marks earned: 2, guaranteed. |
  +-------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------+
  |   LEVEL 2 -- 4 MARKS.  Add three more patterns.                   |
  |                                                                   |
  |      Pattern 12  without replacement (balls / cards)              |
  |      Pattern 16  at least one solves the problem                  |
  |      Pattern 10  conditional probability by formula               |
  |                                                                   |
  |   Time to learn: one more evening.   Running total: 6 marks.      |
  +-------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------+
  |   LEVEL 3 -- 7 MARKS.  Choose ONE of these two and master it.     |
  |                                                                   |
  |      Pattern 8    state and prove the addition theorem            |
  |                   (8 lines, no numbers, cannot go wrong)          |
  |      Pattern 25   Bayes numerical with a tree diagram             |
  |                   (mechanical once you have done three of them)   |
  |                                                                   |
  |   Learn BOTH if you can -- then whichever one appears, you have   |
  |   an answer.                                                      |
  |                                                                   |
  |   Running total: 13 marks out of 75, from ONE chapter.            |
  +-------------------------------------------------------------------+
```

```
  +-------------------------------------------------------------------+
  |   THE THREE LINES THAT EARN PART MARKS ON ANY QUESTION            |
  |                                                                   |
  |       n(S) = ...                                                  |
  |       P(A u B) = P(A) + P(B) - P(A n B)                           |
  |       P(A n B) = P(A) x P(B | A)                                  |
  |                                                                   |
  |   Write them even when you are stuck. An examiner cannot give     |
  |   marks for a blank page, but he must give them for a correct     |
  |   formula.                                                        |
  +-------------------------------------------------------------------+
```
