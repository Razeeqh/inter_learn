# Pair of Straight Lines — Mind Map

**Maths 1B · Chapter 4 · A GUARANTEED 7-mark long answer, every single year**

This chapter is the direct follow-on to Chapter 3 (The Straight Line).
There you handled ONE line at a time. Here you handle TWO lines squashed into
ONE equation.

The good news for a weak student: almost everything in this chapter is
**substituting numbers into 5 or 6 formulas**. There is very little to "understand".
If you memorise the box at the bottom of this page, you can walk into the exam and
collect a full 7-mark answer.

---

## THE ONE IDEA THE WHOLE CHAPTER IS BUILT ON

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   A straight line is a FIRST degree equation:                      |
  |                                                                    |
  |            L1 :  2x + y - 3 = 0                                    |
  |            L2 :   x - 7y + 2 = 0                                   |
  |                                                                    |
  |   A point lies on L1 OR on L2  exactly when  L1 x L2 = 0.          |
  |                                                                    |
  |   MULTIPLY THEM OUT:                                               |
  |                                                                    |
  |     (2x + y - 3)(x - 7y + 2)                                       |
  |            =  2x^2 - 13xy - 7y^2 + x + 23y - 6  =  0               |
  |                                                                    |
  |   That is a SECOND degree equation.                                |
  |                                                                    |
  |   >>> So a second degree equation can hold TWO lines inside it. <<< |
  |                                                                    |
  |   The whole chapter is:  given the messy second degree equation,    |
  |   dig the two lines back out and answer questions about them.       |
  |                                                                    |
  +--------------------------------------------------------------------+
```

Think of it as a **zip file**. Two lines are zipped into one quadratic.
Your job in every question is to unzip it, or to answer questions about
the contents WITHOUT unzipping (that is what the formulas are for).

---

## THE WHOLE CHAPTER ON ONE PAGE

```
PAIR OF STRAIGHT LINES
|
+-- PART 1.  HOMOGENEOUS PAIR   (both lines pass through the ORIGIN)
|            a x^2 + 2h xy + b y^2 = 0
|     |
|     +-- why it works ......... product of two lines y = m1 x , y = m2 x
|     +-- find the two lines ... factorise, OR solve b m^2 + 2h m + a = 0
|     +-- sum of slopes ........ m1 + m2 = -2h / b
|     +-- product of slopes .... m1 m2   =   a / b
|     +-- NATURE of the lines .. h^2 - ab  >0 real & distinct
|     |                                    =0 coincident
|     |                                    <0 imaginary (only the origin is real)
|     +-- ANGLE ................ tan(theta) = 2 sqrt(h^2 - ab) / abs(a + b)
|     +-- PERPENDICULAR ........ a + b = 0
|     +-- COINCIDENT ........... h^2 = ab
|     +-- BISECTORS ............ (x^2 - y^2)/(a - b)  =  xy / h
|     +-- perpendicular pair ... b x^2 - 2h xy + a y^2 = 0
|     +-- product of perp. distances from a point
|     +-- AREA of the triangle with a line lx + my + n = 0
|
+-- PART 2.  GENERAL PAIR   (lines anywhere on the plane)
|            S = a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0
|     |
|     +-- CONDITION to be a pair of lines
|     |        abc + 2fgh - af^2 - bg^2 - ch^2 = 0     and    h^2 >= ab
|     |        (same thing as a 3x3 determinant = 0)
|     |
|     +-- POINT OF INTERSECTION
|     |        dS/dx = 0  and  dS/dy = 0
|     |        i.e.  a x + h y + g = 0 ,  h x + b y + f = 0
|     |        ready formula:  ( (hf - bg)/(ab - h^2) , (gh - af)/(ab - h^2) )
|     |
|     +-- ANGLE ................ same formula, tan = 2 sqrt(h^2-ab)/abs(a+b)
|     +-- perpendicular ........ a + b = 0
|     +-- PARALLEL ............. h^2 = ab   AND   a f^2 = b g^2
|     +-- distance between the parallel lines
|     |        2 sqrt( (g^2 - ac) / (a(a + b)) )
|     +-- pair through the ORIGIN parallel to it .... a x^2 + 2h xy + b y^2 = 0
|     +-- BISECTORS ... shift to the meeting point, then use the Part 1 formula
|     +-- separate the two lines (factorise / quadratic in x)
|     +-- product of perpendiculars from the origin = abs(c)/sqrt((a-b)^2+4h^2)
|
+-- PART 3.  HOMOGENISATION   (the classic 7-mark question)
      |
      +-- "lines joining the ORIGIN to where a curve meets a line"
      +-- make the line read  (lx + my)/(-n) = 1 , call it  U = 1
      +-- multiply every term of the curve up to degree 2 using U
      +-- you get a homogeneous pair -> now use ALL of Part 1
      |
      +-- application 1: angle subtended at the origin by a chord
      +-- application 2: right angle at origin  <=>  coeff x^2 + coeff y^2 = 0
```

---

## THE 60-SECOND VERSION

There are only **three shapes of question** in this whole chapter.

| # | The question looks like | What you do |
|---|--------------------------|-------------|
| 1 | Only `x^2, xy, y^2` terms (no x, no y, no number) | Homogeneous pair through the ORIGIN. Use slopes, angle, bisectors. |
| 2 | Full six terms `a,h,b,g,f,c` | Check `abc + 2fgh - af^2 - bg^2 - ch^2 = 0`, then find the meeting point and the angle. |
| 3 | A CURVE and a LINE, and the word "origin" | Homogenise. Then treat the result as shape 1. |

Learn to sort a question into 1, 2 or 3 in five seconds and you have already
won half the marks.

---

## WHERE THE MARKS ARE (AP Inter, Maths IB — total 75 marks)

**How the Maths IB paper is built:**

```
  SECTION A   10 questions x 2 marks   ANSWER ALL          =  20 marks
  SECTION B    7 questions x 4 marks   ANSWER ANY 5        =  20 marks
  SECTION C    7 questions x 7 marks   ANSWER ANY 5        =  35 marks
                                                             ----------
                                                     TOTAL  =  75 marks
```

**What THIS chapter contributes:**

| Topic | Section | Marks |
|-------|---------|-------|
| Angle between `a x^2 + 2h xy + b y^2 = 0` | A | 2 |
| Find k so the pair is perpendicular / coincident | A | 2 |
| Equation of the pair of bisectors | A | 2 |
| Pair through origin perpendicular to a given pair | A | 2 |
| Slopes: sum, product, ratio conditions | A | 2 |
| Find lambda so a 6-term equation is a pair of lines | B | 4 |
| Separate the two lines from a 6-term equation | B | 4 |
| Product of perpendiculars / area of the triangle | B | 4 |
| **Show S = 0 is a pair; find the angle and the meeting point** | **C** | **7** |
| **Homogenisation: angle subtended at the origin** | **C** | **7** |
| **Prove the bisector / area / product-of-perpendiculars theorem** | **C** | **7** |
| **Parallel pair: prove h^2 = ab, af^2 = bg^2, find the distance** | **C** | **7** |

**Realistic total from this one chapter: 9 to 13 marks out of 75** —
and one of those is a full 7-mark long answer that repeats almost every year.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Why  (L1)(L2) = 0  is a second degree equation
              |                        <- 10 minutes, but everything rests here
              |
  STEP 2   HOMOGENEOUS pair  a x^2 + 2h xy + b y^2 = 0
           factorise it  /  slope equation  b m^2 + 2h m + a = 0
              |
              +--------------------+--------------------+
              |                    |                    |
  STEP 3               STEP 4               STEP 5
  m1+m2 = -2h/b        NATURE from          ANGLE
  m1 m2  = a/b         h^2 - ab             tan = 2 sqrt(h^2-ab)/abs(a+b)
              |                    |                    |
              |                    |          +---------+---------+
              |                    |          |                   |
              |                    |     PERPENDICULAR       COINCIDENT
              |                    |       a + b = 0          h^2 = ab
              |                    |
  STEP 6   BISECTORS   (x^2 - y^2)/(a-b) = xy/h
              |
  STEP 7   GENERAL equation S = 0 , the CONDITION (the determinant)
              |
  STEP 8   POINT OF INTERSECTION  (dS/dx = 0 , dS/dy = 0)
              |
              +--------------------+--------------------+
              |                    |                    |
  STEP 9               STEP 10              STEP 11
  Angle for S = 0      PARALLEL pair        Bisectors for S = 0
  (same formula!)      + distance
              |
  STEP 12  HOMOGENISATION  (curve + line + origin)
              |
        THE 7-MARK LONG ANSWER
```

Notice **STEP 9**: the angle formula for the big 6-term equation is EXACTLY the
same as for the small 3-term one. The `g, f, c` terms only slide the lines
sideways; they never tilt them. That single fact saves you a lot of memorising.

---

## THE KEY BOX — write these on the inside cover of your book

```
  +======================================================================+
  |                                                                      |
  |   THE PAIR :   a x^2 + 2h xy + b y^2 = 0    (through the origin)     |
  |                                                                      |
  |                       -2h                         a                  |
  |        m1 + m2  =   -------        m1 m2  =    -------               |
  |                        b                          b                  |
  |                                                                      |
  |                          2 sqrt( h^2 - ab )                          |
  |        tan(theta)  =  --------------------------                     |
  |                              abs( a + b )                            |
  |                                                                      |
  |        PERPENDICULAR  <=>  a + b = 0                                 |
  |        COINCIDENT     <=>  h^2 = ab                                  |
  |                                                                      |
  |                          x^2 - y^2         xy                        |
  |        BISECTORS  :     -----------   =   ----                       |
  |                            a - b            h                        |
  |                                                                      |
  +======================================================================+


  +======================================================================+
  |                                                                      |
  |   S =  a x^2 + 2h xy + b y^2 + 2g x + 2f y + c = 0                   |
  |                                                                      |
  |   IS A PAIR OF LINES  <=>                                            |
  |                                                                      |
  |        a b c  +  2 f g h  -  a f^2  -  b g^2  -  c h^2  =  0         |
  |                                                                      |
  |   which is the same as                                               |
  |                                                                      |
  |                    +-----------+                                     |
  |                    | a   h   g |                                     |
  |                    | h   b   f |   =   0                             |
  |                    | g   f   c |                                     |
  |                    +-----------+                                     |
  |                                                                      |
  |   POINT OF INTERSECTION -- solve together:                           |
  |                                                                      |
  |        a x + h y + g = 0                                             |
  |        h x + b y + f = 0                                             |
  |                                                                      |
  |                  h f - b g          g h - a f                        |
  |        x  =  ----------------  ,  y = ----------------               |
  |                  a b - h^2            a b - h^2                      |
  |                                                                      |
  +======================================================================+
```

**How to remember the 3x3 determinant:** the letters of `a h b g f c` sit in a
symmetric square. Read the top row `a h g`, then just mirror it:

```
        columns:      x      y      1
                   +------+------+------+
        row  x     |  a   |  h   |  g   |
                   +------+------+------+
        row  y     |  h   |  b   |  f   |
                   +------+------+------+
        row  1     |  g   |  f   |  c   |
                   +------+------+------+

     It is SYMMETRIC about the main diagonal a, b, c.
     Half the letters are copies. You only memorise a h g / b f / c.
```

---

## THE THREE THINGS EXAMINERS LOVE MOST

```
  +----+------------------------------------------+---------------------+
  | 1  | "Show that S = 0 represents a pair of     | 7 marks, appears    |
  |    | lines; find the angle and the point of    | nearly every year   |
  |    | intersection."                            |                     |
  +----+------------------------------------------+---------------------+
  | 2  | "Find the angle between the lines joining | 7 marks, the        |
  |    | the origin to the points of intersection  | HOMOGENISATION      |
  |    | of <curve> and <line>."                   | question            |
  +----+------------------------------------------+---------------------+
  | 3  | "Find the value of k / lambda if the      | 4 marks, and it is  |
  |    | equation represents a pair of lines."     | the easiest 4 marks |
  |    |                                           | in the paper        |
  +----+------------------------------------------+---------------------+
```

Question 3 is pure arithmetic: write down `a, h, b, g, f, c`, put them into
`abc + 2fgh - af^2 - bg^2 - ch^2 = 0`, and solve the little equation in k.
No geometry, no thinking. Learn only this and you have 4 marks locked.

---

## THE TRAP THAT COSTS THE MOST MARKS

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   The equation is written with  2h ,  2g ,  2f  -- with TWOS.      |
  |                                                                    |
  |   So if the question says     3 x^2 + 7 x y + 2 y^2 = 0            |
  |                                                                    |
  |        a = 3        2h = 7   ->   h = 7/2   (NOT 7!)               |
  |        b = 2                                                       |
  |                                                                    |
  |   and if it says   2x^2 + 3xy - 2y^2 - 5x + 5y - 3 = 0             |
  |                                                                    |
  |        a = 2    h = 3/2    b = -2                                  |
  |        g = -5/2  (because 2g = -5)                                 |
  |        f =  5/2  (because 2f =  5)                                 |
  |        c = -3                                                      |
  |                                                                    |
  |   HALVE the xy, x and y coefficients. Every time. No exceptions.   |
  |                                                                    |
  +--------------------------------------------------------------------+
```

More than half of all lost marks in this chapter come from forgetting to halve.
Write `a = _ , h = _ , b = _ , g = _ , f = _ , c = _` as your very first line
in EVERY question. The examiner gives marks for that line alone.

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning (2 hours) — the homogeneous pair.**
Learn `m1 + m2 = -2h/b`, `m1 m2 = a/b`, the angle formula, `a + b = 0` for
perpendicular, `h^2 = ab` for coincident. Do 8 tiny problems of the type
"find the angle between the lines `x^2 - 7xy + 12y^2 = 0`". Each takes 90 seconds.
That is 4 to 6 marks of Section A already safe.

**Day 1 evening (2 hours) — the condition and the meeting point.**
Practise ONLY this: write down a, h, b, g, f, c (halving!), plug into
`abc + 2fgh - af^2 - bg^2 - ch^2`, show it is 0, then solve
`ax + hy + g = 0` and `hx + by + f = 0`. Do the SAME question three times
until you can do it without looking. This is your 7-mark answer.

**Day 2 morning (2 hours) — homogenisation.**
One method, three practice problems. Rearrange the line so the right side is 1,
then multiply the linear terms by that "1" once and the constant by it twice.
Then use the angle formula. This is your SECOND 7-mark answer.

**Day 2 evening (1 hour) — bisectors + the k-finding question.**
`(x^2 - y^2)/(a - b) = xy/h` takes 60 seconds to apply.
The "find k" question is pure arithmetic.

**What you will have earned:** realistically 9 to 13 marks out of 75 from this
one chapter, and you need only 26 to pass the whole paper.
