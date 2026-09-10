# Probability — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice. Probability is the single most reliable scoring chapter for a
weak student in the entrance exams too — the questions are short and the arithmetic
is small.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from Probability:**

```
  AP EAPCET  (Maths, 80 questions)  ->  3 to 5
  TG EAPCET  (Maths, 80 questions)  ->  3 to 5
  JEE Main   (Maths, 25 questions)  ->  1 to 2   (usually Bayes or independence)
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Straight counting (free marks)

### Q1
Two dice are thrown. The probability that the sum is 9 or more is

(a) 5/18 &nbsp;&nbsp; (b) 1/6 &nbsp;&nbsp; (c) 1/3 &nbsp;&nbsp; (d) 7/36

**ANSWER: (a)**
```
  sums      9    10   11   12
  ways      4     3    2    1      total = 10

  P = 10/36 = 5/18
```

---

### Q2
Two dice are thrown. The probability that the sum is divisible by 3 is

(a) 1/4 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) 5/12 &nbsp;&nbsp; (d) 1/2

**ANSWER: (b)**
```
  sums divisible by 3 : 3, 6, 9, 12
  ways                : 2 + 5 + 4 + 1 = 12

  P = 12/36 = 1/3
```

---

### Q3
Three dice are thrown. The probability that all three show the same number is

(a) 1/216 &nbsp;&nbsp; (b) 1/36 &nbsp;&nbsp; (c) 1/18 &nbsp;&nbsp; (d) 1/6

**ANSWER: (b)**
```
  n(S) = 6^3 = 216
  favourable = (1,1,1) ... (6,6,6) = 6

  P = 6/216 = 1/36
```
> **SHORTCUT:** the first die can be anything; the other two must match it.
> P = 1 x (1/6) x (1/6) = 1/36. No counting at all.

---

### Q4
A coin is tossed 5 times. The probability of getting exactly 3 heads is

(a) 3/16 &nbsp;&nbsp; (b) 5/16 &nbsp;&nbsp; (c) 5/32 &nbsp;&nbsp; (d) 1/2

**ANSWER: (b)**
```
  P(exactly r heads in n tosses) = nCr / 2^n

  = 5C3 / 2^5 = 10/32 = 5/16
```

---

### Q5
A number is selected at random from 1 to 25. The probability that it is a prime is

(a) 8/25 &nbsp;&nbsp; (b) 9/25 &nbsp;&nbsp; (c) 2/5 &nbsp;&nbsp; (d) 11/25

**ANSWER: (b)**
```
  primes up to 25 : 2,3,5,7,11,13,17,19,23   ->  9 numbers

  P = 9/25       (1 is NOT prime -- the standard trap)
```

---

### Q6
One card is drawn from a pack. The probability that it is a red king or a black
queen is

(a) 1/26 &nbsp;&nbsp; (b) 1/13 &nbsp;&nbsp; (c) 2/13 &nbsp;&nbsp; (d) 4/13

**ANSWER: (b)**
```
  red kings = 2 , black queens = 2 , no overlap

  P = 4/52 = 1/13
```

---

# PATTERN 2 — Addition theorem

### Q7
If P(A) = 0.25, P(B) = 0.50 and P(A n B) = 0.14, then P(neither A nor B) is

(a) 0.39 &nbsp;&nbsp; (b) 0.61 &nbsp;&nbsp; (c) 0.75 &nbsp;&nbsp; (d) 0.11

**ANSWER: (a)**
```
  P(A u B) = 0.25 + 0.50 - 0.14 = 0.61

  P(A' n B') = 1 - P(A u B) = 1 - 0.61 = 0.39
```
> **SHORTCUT:** "neither ... nor ..." is ALWAYS `1 - P(A u B)`. Never multiply.

---

### Q8
One card is drawn from a pack. The probability that it is a spade or a king is

(a) 17/52 &nbsp;&nbsp; (b) 4/13 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 1/13

**ANSWER: (b)**
```
  P = 13/52 + 4/52 - 1/52 = 16/52 = 4/13

  (the king of spades must be removed once)
```
> **SHORTCUT:** option (a) 17/52 is planted there for people who forget to
> subtract. If an option equals the plain sum, it is almost always wrong.

---

### Q9
A, B, C are mutually exclusive and exhaustive events with P(B) = 2P(A) and
P(C) = 3P(A). Then P(A) =

(a) 1/3 &nbsp;&nbsp; (b) 1/6 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 1/4

**ANSWER: (b)**
```
  P(A) + 2P(A) + 3P(A) = 1
             6 P(A)    = 1     ->    P(A) = 1/6
```

---

### Q10
If P(A) = 3/8, P(B) = 5/8 and P(A u B) = 3/4, then P(A | B) =

(a) 2/5 &nbsp;&nbsp; (b) 3/5 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 2/3

**ANSWER: (a)**
```
  P(A n B) = 3/8 + 5/8 - 3/4 = 1 - 3/4 = 1/4

              1/4       1      8       2
  P(A | B) = ------ =  --- x  --- =  -----
              5/8       4      5       5
```

---

# PATTERN 3 — Complement and "at least one"

### Q11
Two dice are thrown. The probability of getting at least one six is

(a) 1/6 &nbsp;&nbsp; (b) 11/36 &nbsp;&nbsp; (c) 1/3 &nbsp;&nbsp; (d) 25/36

**ANSWER: (b)**
```
  P(no six) = (5/6)(5/6) = 25/36

  P(at least one six) = 1 - 25/36 = 11/36
```

---

### Q12
A die is thrown 3 times. The probability of getting at least one 5 is

(a) 91/216 &nbsp;&nbsp; (b) 125/216 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 5/216

**ANSWER: (a)**
```
  P(no 5 in one throw) = 5/6

  P(no 5 at all) = (5/6)^3 = 125/216

  P(at least one 5) = 1 - 125/216 = 91/216
```
> **SHORTCUT:** the words "at least one" mean `1 - (miss)^n`. Never expand.

---

### Q13
A pair of dice is thrown 3 times. The probability of getting a total of 7 at least
once is

(a) 91/216 &nbsp;&nbsp; (b) 125/216 &nbsp;&nbsp; (c) 1/6 &nbsp;&nbsp; (d) 5/12

**ANSWER: (a)**
```
  P(total 7 in one throw) = 6/36 = 1/6 , so P(not 7) = 5/6

  P(never 7) = (5/6)^3 = 125/216

  P(at least once) = 1 - 125/216 = 91/216
```

---

### Q14
A bag has 5 red and 4 white balls. Three balls are drawn. The probability that at
least one is white is

(a) 5/42 &nbsp;&nbsp; (b) 37/42 &nbsp;&nbsp; (c) 10/21 &nbsp;&nbsp; (d) 11/21

**ANSWER: (b)**
```
  P(no white) = 5C3 / 9C3 = 10 / 84 = 5/42

  P(at least one white) = 1 - 5/42 = 37/42
```

---

# PATTERN 4 — Conditional probability

### Q15
Two dice are thrown. Given that at least one die shows a 3, the probability that
the sum is 8 is

(a) 2/11 &nbsp;&nbsp; (b) 5/36 &nbsp;&nbsp; (c) 1/6 &nbsp;&nbsp; (d) 2/36

**ANSWER: (a)**
```
  B = at least one 3 :  n(B) = 11
      (3,1)(3,2)(3,3)(3,4)(3,5)(3,6) and (1,3)(2,3)(4,3)(5,3)(6,3)

  A n B = sum 8 containing a 3 = { (3,5) , (5,3) }    n = 2

  P(A|B) = 2/11
```
> **SHORTCUT:** "at least one k" in two dice always has **11** outcomes
> (6 + 6 - 1). Memorise the 11.

---

### Q16
Two dice are thrown. Given that a doublet has appeared, the probability that the
sum exceeds 9 is

(a) 1/3 &nbsp;&nbsp; (b) 1/6 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 1/12

**ANSWER: (a)**
```
  doublets = 6.  Those with sum > 9 : (5,5)=10 and (6,6)=12   ->  2

  P = 2/6 = 1/3
```

---

### Q17
If P(A) = 0.5, P(B) = 0.6 and P(A u B) = 0.8, then P(A | B) =

(a) 0.3 &nbsp;&nbsp; (b) 0.5 &nbsp;&nbsp; (c) 0.6 &nbsp;&nbsp; (d) 0.375

**ANSWER: (b)**
```
  P(A n B) = 0.5 + 0.6 - 0.8 = 0.3

  P(A|B) = 0.3 / 0.6 = 0.5
```

---

### Q18
A family has two children. Given that at least one is a girl, the probability that
both are girls is

(a) 1/2 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 2/3

**ANSWER: (b)**
```
  S = {BB, BG, GB, GG}
  at least one girl  ->  {BG, GB, GG}  ->  3 cases
  both girls         ->  {GG}          ->  1 case

  P = 1/3         (the "obvious" answer 1/2 is the trap)
```

---

# PATTERN 5 — Independence

### Q19
A and B are independent with P(A) = 1/2 and P(B) = 1/5. Then P(A u B) =

(a) 3/5 &nbsp;&nbsp; (b) 7/10 &nbsp;&nbsp; (c) 1/10 &nbsp;&nbsp; (d) 2/5

**ANSWER: (a)**
```
  P(A n B) = (1/2)(1/5) = 1/10

  P(A u B) = 1/2 + 1/5 - 1/10 = 5/10 + 2/10 - 1/10 = 6/10 = 3/5
```

---

### Q20
A and B are independent with P(A) = 1/3 and P(B) = 1/4. Then P(A' n B') =

(a) 1/2 &nbsp;&nbsp; (b) 1/12 &nbsp;&nbsp; (c) 7/12 &nbsp;&nbsp; (d) 5/12

**ANSWER: (a)**
```
  If A, B are independent then so are A', B'.

  P(A' n B') = (2/3)(3/4) = 6/12 = 1/2
```

---

### Q21
P(A) = 0.4, P(A u B) = 0.6, and A and B are independent. Then P(B) =

(a) 1/2 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp; (d) 2/5

**ANSWER: (b)**
```
  P(A u B) = P(A) + P(B) - P(A)P(B)

      0.6  = 0.4 + p - 0.4p
      0.6  = 0.4 + 0.6p
      0.2  = 0.6p        ->     p = 1/3
```

---

### Q22
If A and B are mutually exclusive events with P(A) > 0 and P(B) > 0, then A and B
are

(a) independent &nbsp;&nbsp; (b) never independent &nbsp;&nbsp;
(c) always independent &nbsp;&nbsp; (d) cannot be decided

**ANSWER: (b)**
```
  Mutually exclusive  ->  P(A n B) = 0
  Independent         ->  P(A n B) = P(A)P(B) > 0

  0 cannot equal a positive number, so they can NEVER be both.
```

---

### Q23
A speaks the truth 75% of the time and B 80% of the time. The probability that
they AGREE while stating the same fact is

(a) 13/20 &nbsp;&nbsp; (b) 7/20 &nbsp;&nbsp; (c) 3/5 &nbsp;&nbsp; (d) 4/5

**ANSWER: (a)**
```
  They agree when BOTH tell the truth or BOTH lie:

      (3/4)(4/5) + (1/4)(1/5) = 12/20 + 1/20 = 13/20
```
> **SHORTCUT:** agree and contradict must add to 1.
> contradict = 7/20 , agree = 13/20.

---

### Q24
A problem is given to three students whose chances of solving it are 1/2, 1/3 and
1/4. The probability that the problem is solved is

(a) 1/4 &nbsp;&nbsp; (b) 3/4 &nbsp;&nbsp; (c) 1/24 &nbsp;&nbsp; (d) 11/24

**ANSWER: (b)**
```
  P(none solves) = (1/2)(2/3)(3/4) = 6/24 = 1/4

  P(solved) = 1 - 1/4 = 3/4
```
> **SHORTCUT:** the product `(1/2)(2/3)(3/4)` telescopes: numerators cancel the
> previous denominators, leaving 1/4. Watch for these chains — they are instant.

---

# PATTERN 6 — Without replacement / dependent draws

### Q25
Two cards are drawn from a pack in succession without replacement. The probability
that both are aces is

(a) 1/169 &nbsp;&nbsp; (b) 1/221 &nbsp;&nbsp; (c) 2/221 &nbsp;&nbsp; (d) 1/13

**ANSWER: (b)**
```
  (4/52)(3/51) = 12/2652 = 1/221

  (1/169 is the WITH-replacement answer -- read the question)
```

---

### Q26
A bag has 3 red and 4 blue balls. Two balls are drawn without replacement. The
probability that both are red is

(a) 1/7 &nbsp;&nbsp; (b) 9/49 &nbsp;&nbsp; (c) 2/7 &nbsp;&nbsp; (d) 3/7

**ANSWER: (a)**
```
  (3/7)(2/6) = 6/42 = 1/7

  Check with nCr:  3C2 / 7C2 = 3/21 = 1/7
```

---

### Q27
Two numbers are chosen at random from 1 to 10 without replacement. The probability
that their sum is odd is

(a) 1/2 &nbsp;&nbsp; (b) 5/9 &nbsp;&nbsp; (c) 4/9 &nbsp;&nbsp; (d) 1/3

**ANSWER: (b)**
```
  5 even numbers, 5 odd numbers.
  Sum is odd only if one is even and one is odd.

  n(S) = 10C2 = 45          n(E) = 5 x 5 = 25

  P = 25/45 = 5/9
```

---

### Q28
Four cards are drawn from a pack. The probability that all four are of the same
suit is

(a) 44/4165 &nbsp;&nbsp; (b) 13/270725 &nbsp;&nbsp; (c) 1/4 &nbsp;&nbsp;
(d) 11/4165

**ANSWER: (a)**
```
  n(S) = 52C4 = 270725
  n(E) = 4 x 13C4 = 4 x 715 = 2860

  P = 2860 / 270725 = 44 / 4165
```

---

# PATTERN 7 — Counting with nCr / arrangements

### Q29
A committee of 4 is chosen from 6 men and 4 women. The probability that it has
exactly 2 women is

(a) 3/7 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) 2/7 &nbsp;&nbsp; (d) 1/7

**ANSWER: (a)**
```
  n(S) = 10C4 = 210
  n(E) = 4C2 x 6C2 = 6 x 15 = 90

  P = 90/210 = 3/7
```

---

### Q30
Three letters are placed at random into three addressed envelopes. The probability
that no letter goes into its correct envelope is

(a) 1/6 &nbsp;&nbsp; (b) 1/3 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 2/3

**ANSWER: (b)**
```
  Total arrangements = 3! = 6
  Arrangements with NO letter correct (derangements of 3) = 2

  P = 2/6 = 1/3
```
> **SHORTCUT:** derangement counts to memorise: D2 = 1, D3 = 2, D4 = 9, D5 = 44.

---

### Q31
The letters of the word `ASSIST` are arranged at random. The probability that all
the S's are together is

(a) 1/5 &nbsp;&nbsp; (b) 1/10 &nbsp;&nbsp; (c) 1/20 &nbsp;&nbsp; (d) 3/10

**ANSWER: (a)**
```
  ASSIST : 6 letters with three identical S's

  total   = 6!/3! = 120
  S's tied into one block: [SSS] A I T  =  4! = 24
  (identical letters, so no internal arrangements)

  P = 24/120 = 1/5
```

---

### Q32
The probability that a leap year selected at random contains 53 Sundays is

(a) 1/7 &nbsp;&nbsp; (b) 2/7 &nbsp;&nbsp; (c) 3/7 &nbsp;&nbsp; (d) 1/2

**ANSWER: (b)**
```
  A leap year = 366 days = 52 weeks + 2 extra days.

  The 2 extra days can be:
     (Sun,Mon) (Mon,Tue) (Tue,Wed) (Wed,Thu)
     (Thu,Fri) (Fri,Sat) (Sat,Sun)        ->  7 equally likely pairs

  Sunday appears in 2 of them  ->  P = 2/7
```
> **SHORTCUT:** ordinary year -> 1 extra day -> P(53 Sundays) = **1/7**.
> Leap year -> 2 extra days -> **2/7**. Learn both.

---

# PATTERN 8 — Odds

### Q33
The odds in favour of an event are 3 : 5. The probability that the event does NOT
happen is

(a) 3/8 &nbsp;&nbsp; (b) 5/8 &nbsp;&nbsp; (c) 3/5 &nbsp;&nbsp; (d) 5/3

**ANSWER: (b)**
```
  odds in favour 3 : 5   ->   P(E) = 3/8   ->   P(E') = 5/8
```
> **SHORTCUT:** odds `a : b` in favour -> denominator is always `a + b`.
> If an option is bigger than 1 (like 5/3), delete it at once.

---

### Q34
If P(A) = 0.6, the odds against A are

(a) 3 : 2 &nbsp;&nbsp; (b) 2 : 3 &nbsp;&nbsp; (c) 3 : 5 &nbsp;&nbsp; (d) 2 : 5

**ANSWER: (b)**
```
  P(A') = 0.4

  odds AGAINST = P(A') : P(A) = 0.4 : 0.6 = 2 : 3
```

---

# PATTERN 9 — Total probability and Bayes

### Q35
Bag I has 3 white and 2 black balls, Bag II has 2 white and 4 black balls. A bag
is chosen at random and a ball is drawn. The probability that it is white is

(a) 7/15 &nbsp;&nbsp; (b) 8/15 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 3/5

**ANSWER: (a)**
```
  P(W) = (1/2)(3/5) + (1/2)(2/6)

       =  3/10  +  1/6

       =  9/30  +  5/30   =   14/30   =   7/15
```

---

### Q36
A box contains three coins: one is two-headed, one is fair, and one is biased with
P(head) = 3/4. A coin is chosen at random and tossed; it shows a head. The
probability that it was the two-headed coin is

(a) 1/3 &nbsp;&nbsp; (b) 4/9 &nbsp;&nbsp; (c) 2/9 &nbsp;&nbsp; (d) 1/2

**ANSWER: (b)**
```
  P(head) = (1/3)(1) + (1/3)(1/2) + (1/3)(3/4)

          = 1/3 + 1/6 + 1/4

          = 4/12 + 2/12 + 3/12  =  9/12  =  3/4

                          (1/3)(1)       1/3      4
  P(two-headed | head) = ------------ = ------ = ---
                              3/4         3/4     9
```

---

### Q37
Bag I has 4 red and 4 black balls, Bag II has 2 red and 6 black balls. A bag is
chosen at random and a red ball is drawn. The probability that it came from Bag I is

(a) 1/3 &nbsp;&nbsp; (b) 1/2 &nbsp;&nbsp; (c) 2/3 &nbsp;&nbsp; (d) 3/8

**ANSWER: (c)**
```
  P(red) = (1/2)(4/8) + (1/2)(2/8) = 1/4 + 1/8 = 3/8

                (1/2)(1/2)      1/4      2
  P(Bag I|R) = ------------- = ----- =  ---
                    3/8          3/8     3
```
> **SHORTCUT for MCQ Bayes:** you do not need the 1/2 in front if all the causes
> are equally likely — just take
> `(favourable branch weight) / (sum of branch weights) = 4 / (4 + 2) = 2/3`.
> This saves 40 seconds.

---

### Q38
Machines A and B produce 60% and 40% of the items in a factory. 2% of A's output
and 3% of B's output is defective. An item is found defective. The probability
that it came from B is

(a) 1/2 &nbsp;&nbsp; (b) 2/5 &nbsp;&nbsp; (c) 1/3 &nbsp;&nbsp; (d) 3/5

**ANSWER: (a)**
```
  branch A : 0.60 x 0.02 = 0.012
  branch B : 0.40 x 0.03 = 0.012
                           -------
  P(defective)           = 0.024

  P(B | defective) = 0.012 / 0.024 = 1/2
```

---

# PATTERN 10 — JEE-level extras

### Q39
A and B throw a die alternately, A starting first. The first to throw a six wins.
The probability that A wins is

(a) 5/11 &nbsp;&nbsp; (b) 6/11 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 1/6

**ANSWER: (b)**
```
  A wins on his 1st, 2nd, 3rd ... throw:

  P(A) = 1/6 + (5/6)(5/6)(1/6) + (5/6)^4 (1/6) + ...

       = an infinite GP with first term 1/6 and ratio (5/6)^2 = 25/36

              1/6           1/6        6
       = ------------- = ---------- = ----
          1 - 25/36        11/36       11
```
> **SHORTCUT:** for "alternate turns, first success wins",
> `P(first player) = p / (1 - q^2)` where q = 1 - p.

---

### Q40
Four persons are chosen at random. The probability that all four were born on
different days of the week is

(a) 120/343 &nbsp;&nbsp; (b) 4/7 &nbsp;&nbsp; (c) 840/2401 &nbsp;&nbsp;
(d) both (a) and (c)

**ANSWER: (d)** — they are the same number.
```
  n(S) = 7^4 = 2401
  n(E) = 7 x 6 x 5 x 4 = 840

  P = 840/2401 = 120/343       (divide top and bottom by 7)
```

---

### Q41
If A and B are events with P(A) = 1/2, P(B) = 1/3 and P(A n B) = 1/4, then
P(A' | B') =

(a) 1/4 &nbsp;&nbsp; (b) 5/8 &nbsp;&nbsp; (c) 1/2 &nbsp;&nbsp; (d) 3/8

**ANSWER: (b)**
```
  P(A u B) = 1/2 + 1/3 - 1/4 = 6/12 + 4/12 - 3/12 = 7/12

  P(A' n B') = 1 - 7/12 = 5/12
  P(B')      = 1 - 1/3  = 2/3 = 8/12

               5/12       5
  P(A'|B') = --------- = ---
               8/12       8
```

---

### Q42
An urn contains 5 red and 5 black balls. A ball is drawn, its colour noted, and it
is returned along with 2 additional balls of the same colour. A second ball is now
drawn. The probability that it is red is

(a) 1/2 &nbsp;&nbsp; (b) 5/12 &nbsp;&nbsp; (c) 7/12 &nbsp;&nbsp; (d) 3/5

**ANSWER: (a)**
```
  Case 1: first ball RED   (P = 5/10)
          urn becomes 7 red, 5 black = 12   ->  P(red) = 7/12

  Case 2: first ball BLACK (P = 5/10)
          urn becomes 5 red, 7 black = 12   ->  P(red) = 5/12

  P(second red) = (1/2)(7/12) + (1/2)(5/12) = (1/2)(12/12) = 1/2
```
> **SHORTCUT:** by symmetry, in this "Polya urn" the second draw always has the
> same probability as the first. Answer = 5/10 = 1/2 without any working.

---

# SPEED RULES FOR THE EXAM HALL

```
  +--------------------------------------+-----------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY              |
  +--------------------------------------+-----------------------------------+
  |  "at least one"                      |  1 - P(none).  Never count cases. |
  +--------------------------------------+-----------------------------------+
  |  "neither A nor B"                   |  1 - P(A u B)                     |
  +--------------------------------------+-----------------------------------+
  |  "exactly one of A and B"            |  P(A) + P(B) - 2 P(A n B)         |
  +--------------------------------------+-----------------------------------+
  |  "or" between two events             |  addition theorem, SUBTRACT the   |
  |                                      |  overlap                          |
  +--------------------------------------+-----------------------------------+
  |  "and" / "both"                      |  multiply.  With replacement:     |
  |                                      |  P(A)P(B).  Without: P(A)P(B|A)   |
  +--------------------------------------+-----------------------------------+
  |  "given that" / "if it is known"     |  conditional. The event after the |
  |                                      |  bar becomes the DENOMINATOR      |
  +--------------------------------------+-----------------------------------+
  |  "found to be defective / red /      |  BAYES. Draw the tree, take       |
  |   positive - which source?"          |  one branch over the total        |
  +--------------------------------------+-----------------------------------+
  |  All causes equally likely in a      |  drop the 1/n and use             |
  |  Bayes MCQ                           |  branch / (sum of branches)       |
  +--------------------------------------+-----------------------------------+
  |  "two dice, at least one k"          |  the count is 11, not 12          |
  +--------------------------------------+-----------------------------------+
  |  "leap year, 53 Sundays"             |  2/7   (ordinary year: 1/7)       |
  +--------------------------------------+-----------------------------------+
  |  "odds a : b in favour"              |  P = a/(a+b).  Odds are NOT a     |
  |                                      |  probability                      |
  +--------------------------------------+-----------------------------------+
  |  An option that is > 1 or negative   |  cross it out instantly           |
  +--------------------------------------+-----------------------------------+
  |  An option equal to the plain sum    |  usually the "forgot to subtract  |
  |  P(A) + P(B)                         |  the overlap" trap                |
  +--------------------------------------+-----------------------------------+
  |  "alternate throws, first six wins"  |  P(first player) = p / (1 - q^2)  |
  +--------------------------------------+-----------------------------------+
  |  Stuck with 10 seconds left (EAPCET) |  guess the option nearest 1/2 or  |
  |                                      |  the simplest fraction. NEVER     |
  |                                      |  leave it blank - no negatives.   |
  +--------------------------------------+-----------------------------------+
```

```
  +-------------------------------------------------------------------+
  |   TIME BUDGET                                                     |
  |                                                                   |
  |   Straight counting (dice / cards / coins)   ->  20 seconds       |
  |   Addition theorem or complement             ->  30 seconds       |
  |   Conditional or independence                ->  45 seconds       |
  |   Bayes with the shortcut                    ->  60 seconds       |
  |                                                                   |
  |   If a probability question is taking you more than 90 seconds,   |
  |   mark it and move on. There are easier marks elsewhere.          |
  +-------------------------------------------------------------------+
```
