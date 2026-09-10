# The Straight Line — Concepts Explained Simply

Read one topic. Do its worked example with a pen. Then move to the next.
Nothing here assumes you remember anything from Class 10.

---

# TOPIC 1 — The plane, points, and what a "line" really is

Two number lines crossed at right angles. That is all.

```
                    y
                    ^
                    |
        QUADRANT 2  |  QUADRANT 1
        (-x , +y)   |   (+x , +y)
                    |            . P(3, 2)
                    |
      --------------+--------------> x
                  O |  (origin = (0,0))
                    |
        QUADRANT 3  |  QUADRANT 4
        (-x , -y)   |   (+x , -y)
                    |
```

- To plot **P(3, 2)**: walk 3 steps RIGHT along x, then 2 steps UP.
- The first number is always **x** (across), the second is **y** (up/down).
- Points on the **x-axis** have `y = 0`. Points on the **y-axis** have `x = 0`.

**A straight line is the set of ALL points (x, y) that obey one rule.**
Example: the rule `y = 2x` is obeyed by (0,0), (1,2), (2,4), (-1,-2) ... and
if you plot them all they lie in a perfectly straight row. That rule is called
the **equation of the line**.

Two facts you will use a hundred times in this chapter:

```
  A point LIES ON a line  <=>  putting its x and y into the equation gives 0 = 0
                               (that is, the equation is SATISFIED)
```

> **TRAP:** "Verify the point lies on the line" is worth free marks. Always
> substitute and show the arithmetic. Do not just write "yes".

---

# TOPIC 2 — Slope (also called gradient), and the angle of inclination

**Slope tells you how steep the line is.** It is a single number, written `m`.

```
                y
                ^
                |                 /
                |                /  <-- this line RISES as you go right
                |               /        so m is POSITIVE
                |              /
                |             /
                |            / theta
      ----------+-----------/------------------> x
                |        (theta = angle of inclination,
                |         measured ANTICLOCKWISE from the +ve x-axis)
```

**Definition 1 — from the angle:**

```
  +----------------------------------------------+
  |                                              |
  |        m  =  tan(theta)                      |
  |                                              |
  |   theta = angle of inclination , 0 <= theta < 180 degrees
  |                                              |
  +----------------------------------------------+
```

Learn this small table by heart. It is asked directly as a 2-mark question.

| theta | m = tan(theta) | Picture |
|-------|----------------|---------|
| 0 degrees | 0 | horizontal line, parallel to x-axis |
| 30 degrees | 1/sqrt(3) | gentle uphill |
| 45 degrees | 1 | uphill at exactly 45, like `/` |
| 60 degrees | sqrt(3) | steep uphill |
| 90 degrees | NOT DEFINED | vertical line, like the y-axis |
| 120 degrees | -sqrt(3) | steep downhill |
| 135 degrees | -1 | downhill at 45, like the backslash direction |
| 150 degrees | -1/sqrt(3) | gentle downhill |

```
      m = 0            m = 1           m undefined       m = -1
   ----------            /                  |                 \
                        /                   |                  \
                       /                    |                   \
   horizontal        45 degrees          vertical           135 degrees
```

> **TRAP:** A VERTICAL line has NO slope (undefined), not zero slope.
> A HORIZONTAL line has slope zero. Students swap these every single year.

### Worked example
Find the slope of the line whose inclination is 135 degrees.

```
  m = tan(135)
    = tan(180 - 45)
    = - tan(45)          because tangent is NEGATIVE in the 2nd quadrant
    = - 1

  ANSWER:  m = -1
```

---

# TOPIC 3 — Slope from two points

If the line passes through `A(x1, y1)` and `B(x2, y2)`:

```
  +--------------------------------------------------+
  |                                                  |
  |            y2 - y1          RISE                 |
  |     m  =  ----------   =   ------                |
  |            x2 - x1          RUN                  |
  |                                                  |
  +--------------------------------------------------+
```

```
              B(x2, y2)
                 *
                /|
               / |
              /  |  RISE = y2 - y1   (how much you go UP)
             /   |
            /    |
     A(x1,y1)----+
        RUN = x2 - x1   (how much you go ACROSS)
```

**Order does not matter** as long as you are consistent: doing
`(y1 - y2)/(x1 - x2)` gives exactly the same answer, because both the top and
the bottom change sign.

> **TRAP:** Mixing the order — writing `(y2 - y1)/(x1 - x2)`. That flips the
> sign and destroys the whole question.

### Worked example
Find the slope of the line joining A(3, -2) and B(-1, 4).

```
       y2 - y1        4 - (-2)        4 + 2         6
  m = ---------  =  ------------  =  -------  =  ------  =  -3/2
       x2 - x1        -1 - 3           -4          -4

  ANSWER:  m = -3/2      (negative, so the line goes DOWNHILL)
```

**Check with the other order:**

```
       -2 - 4        -6
      --------  =  ------  =  -3/2       Same answer. Good.
       3 - (-1)       4
```

---

# TOPIC 4 — FORM 1: Slope-intercept form, y = mx + c

```
  +------------------------------------------------+
  |                                                |
  |            y  =  m x  +  c                     |
  |                                                |
  |     m = slope                                  |
  |     c = y-INTERCEPT (where the line cuts       |
  |         the y-axis, i.e. the value of y        |
  |         when x = 0)                            |
  |                                                |
  +------------------------------------------------+
```

```
        y
        ^
        |        /
        |       /
      c *------/---   the line cuts the y-axis at the height c
        |     /
        |    /
        |   /
     ---+--/------------> x
        | /
        |/
```

If the line passes through the ORIGIN then `c = 0`, so the equation is just
`y = mx`.

### Worked example
Find the equation of the line with slope 2 that cuts the y-axis at -5.

```
  m = 2 ,  c = -5

  y = mx + c
  y = 2x + (-5)
  y = 2x - 5           or        2x - y - 5 = 0
```

Both forms are accepted. Writing it as `= 0` at the end looks more complete.

---

# TOPIC 5 — FORM 2: Point-slope form (the workhorse of the chapter)

You know **one point** on the line and its **slope**.

```
  +------------------------------------------------+
  |                                                |
  |         y - y1  =  m ( x - x1 )                |
  |                                                |
  +------------------------------------------------+
```

Why it works: take any other point (x, y) on the line. The slope between it and
(x1, y1) must be m, so `(y - y1)/(x - x1) = m`. Cross-multiply. Done.

### Worked example
Find the equation of the straight line passing through (2, 3) and making an
angle of 135 degrees with the positive x-axis.

```
  STEP 1   Get the slope from the angle.
           m = tan(135) = -1

  STEP 2   Use the point-slope form with (x1, y1) = (2, 3).
           y - 3 = -1 (x - 2)

  STEP 3   Open the bracket and tidy up.
           y - 3 = -x + 2
           x + y - 5 = 0

  STEP 4   CHECK: put (2,3) back in.   2 + 3 - 5 = 0    Correct.

  ANSWER:  x + y - 5 = 0
```

> **TRAP:** Forgetting the minus sign inside the bracket when x1 is negative.
> If the point is (-3, 4) then `x - x1` becomes `x - (-3) = x + 3`.

---

# TOPIC 6 — FORM 3: Two-point form

You know **two points** on the line.

```
  +----------------------------------------------------+
  |                                                    |
  |       y - y1        y2 - y1                        |
  |      ---------  =  ----------                      |
  |       x - x1        x2 - x1                        |
  |                                                    |
  +----------------------------------------------------+
```

**Honest advice:** do NOT memorise this as a separate thing.
Find `m` from the two points first, then use the point-slope form.
Two easy steps beat one messy one.

### Worked example
Find the equation of the line through A(1, 2) and B(3, -4).

```
  STEP 1   Slope.
                -4 - 2        -6
           m = --------  =  ------  =  -3
                 3 - 1         2

  STEP 2   Point-slope, using A(1, 2).
           y - 2 = -3 (x - 1)
           y - 2 = -3x + 3
           3x + y - 5 = 0

  STEP 3   CHECK using the OTHER point B(3, -4):
           3(3) + (-4) - 5  =  9 - 4 - 5  =  0     Correct.

  ANSWER:  3x + y - 5 = 0
```

**Two special cases that trip people up:**

```
  Both points have the SAME y  -> the line is HORIZONTAL -> y = that value
       e.g. (2, 5) and (7, 5)  ->  y = 5

  Both points have the SAME x  -> the line is VERTICAL   -> x = that value
       e.g. (4, 1) and (4, 9)  ->  x = 4
       (do NOT try to use the slope formula here - you would divide by 0)
```

---

# TOPIC 7 — FORM 4: Intercept form, x/a + y/b = 1

```
  +----------------------------------------------------+
  |                                                    |
  |        x       y                                   |
  |       ---  +  ---  =  1                            |
  |        a       b                                   |
  |                                                    |
  |   a = X-INTERCEPT  (line meets x-axis at (a, 0))   |
  |   b = Y-INTERCEPT  (line meets y-axis at (0, b))   |
  |                                                    |
  +----------------------------------------------------+
```

```
        y
        ^
        |
      b *
        | \
        |   \
        |     \
        |       \
     ---+---------*------------> x
       O          a
```

### Worked example 1
A line has x-intercept 3 and y-intercept -4. Find its equation.

```
  a = 3 ,  b = -4

    x       y
   ---  +  ----  =  1
    3      (-4)

  Multiply everything by 12 (the LCM of 3 and 4):

   4x  -  3y  =  12          or       4x - 3y - 12 = 0

  CHECK: put y = 0  ->  4x = 12  ->  x = 3    (x-intercept correct)
         put x = 0  ->  -3y = 12 ->  y = -4   (y-intercept correct)
```

### Worked example 2 — "EQUAL INTERCEPTS" (a favourite 2-mark question)
Find the line through (-4, 5) that cuts off equal intercepts on the axes.

```
  Equal intercepts means  a = b.

    x       y
   ---  +  ---  =  1     ->     x + y  =  a
    a       a

  It passes through (-4, 5) , so:
    -4 + 5 = a   ->   a = 1

  ANSWER:  x + y = 1     i.e.    x + y - 1 = 0
```

### Worked example 3 — "SUM OF THE INTERCEPTS IS ZERO"
Find the line through (-2, 4) whose non-zero intercepts add up to zero.

```
  Sum zero means  a + b = 0 , so  b = -a.

    x       y
   ---  +  ----  =  1     ->     x - y  =  a
    a      (-a)

  Through (-2, 4):   -2 - 4 = a   ->   a = -6

  ANSWER:  x - y = -6     i.e.    x - y + 6 = 0
```

> **TRAP:** The words "equal in magnitude but opposite in sign" also mean
> `b = -a`, so you again get `x - y = a`. Read the wording slowly.

---

# TOPIC 8 — FORM 5: Normal form, x cos(alpha) + y sin(alpha) = p

This is the only form that describes a line by its distance from the ORIGIN.

```
  +--------------------------------------------------------+
  |                                                        |
  |     x cos(alpha)  +  y sin(alpha)  =  p                 |
  |                                                        |
  |   p     = length of the perpendicular from O to the    |
  |           line.  p must be POSITIVE.                   |
  |   alpha = angle that this perpendicular makes with     |
  |           the positive x-axis,  0 <= alpha < 360.      |
  |                                                        |
  +--------------------------------------------------------+
```

```
        y
        ^
        |            the line
        |           /
        |          /
        |         /
        |        N          ON = p  (shortest distance from O to the line)
        |       /
        |      /
        |     /
        |    /
        |   /
        |  /  alpha
      O +-------------------------> x
```

### Worked example
Find the equation of the line whose distance from the origin is 5 and whose
normal makes an angle of 60 degrees with the positive x-axis.

```
  p = 5 ,  alpha = 60

  x cos(60) + y sin(60) = 5

       1            sqrt(3)
  x . ---  +   y . ---------  =  5
       2               2

  Multiply both sides by 2:

       x  +  sqrt(3) y  =  10

  ANSWER:  x + sqrt(3) y - 10 = 0
```

> **TRAP:** In the normal form the right-hand side `p` can NEVER be negative.
> If your working produces a negative number there, multiply the WHOLE
> equation by -1 and then re-read cos(alpha) and sin(alpha).

---

# TOPIC 9 — The bonus 6th form: symmetric (parametric) form

Very few students learn this — and it turns a 4-mark question into 4 lines.

If a line passes through `A(x1, y1)` with inclination `theta`, then every point
P on it can be written using ONE number `r` = the signed distance AP:

```
  +------------------------------------------------------------+
  |                                                            |
  |     x - x1          y - y1                                 |
  |   -----------  =  -----------  =  r                        |
  |   cos(theta)       sin(theta)                              |
  |                                                            |
  |   so    x = x1 + r cos(theta)  ,   y = y1 + r sin(theta)   |
  |                                                            |
  +------------------------------------------------------------+
```

```
      A(x1,y1) *-------- r --------* P(x, y)
                \
                 theta
```

**Use it whenever a question says:** "a line through Q at an angle theta meets
the line L at P — find PQ."

### Worked example
A straight line through Q(sqrt(3), 2) makes an angle of 30 degrees with the
positive x-axis. It meets the line `sqrt(3) x - 4y + 8 = 0` at P. Find PQ.

```
  STEP 1   Write the parametric point.
           x = sqrt(3) + r cos(30) = sqrt(3) + r . sqrt(3)/2
           y = 2       + r sin(30) = 2 + r/2

  STEP 2   This point must satisfy  sqrt(3) x - 4y + 8 = 0.

           sqrt(3) [ sqrt(3) + r sqrt(3)/2 ]  -  4 [ 2 + r/2 ]  +  8  = 0

  STEP 3   Expand carefully.
           3  +  (3r)/2  -  8  -  2r  +  8  =  0
           3  +  (3r)/2  -  2r  =  0
           3  -  r/2  =  0
           r  =  6

  STEP 4   r IS the distance.        PQ = 6

  ANSWER:  PQ = 6
```

Doing the same problem by solving two simultaneous equations and then using the
distance formula takes three times as long.

---

# TOPIC 10 — The general equation ax + by + c = 0

**Every** straight line can be written this way, and every equation of this
shape (with a and b not both zero) is a straight line.

```
  +--------------------------------------------------------------+
  |                                                              |
  |     ax + by + c = 0                                          |
  |                                                              |
  |                        -a       coefficient of x             |
  |     slope       m  =  ----  = - -----------------            |
  |                         b       coefficient of y             |
  |                                                              |
  |                        -c                        -c          |
  |     x-intercept =     ----     y-intercept =    ----         |
  |                         a                         b          |
  |                                                              |
  +--------------------------------------------------------------+
```

**Getting the intercepts without any formula (safer):**
put `y = 0` to find where it crosses the x-axis;
put `x = 0` to find where it crosses the y-axis.

### Worked example (the standard 4-mark question)
Transform `3x + 4y + 12 = 0` into (a) slope-intercept form,
(b) intercept form, (c) normal form.

```
  (a) SLOPE-INTERCEPT  -- make y the subject.

      4y = -3x - 12

              -3x - 12          -3
       y  =  ----------  =     ---- x  -  3
                 4               4

       So   m = -3/4   and   c = -3.


  (b) INTERCEPT FORM -- put the constant on the right, then divide by it.

       3x + 4y = -12

       Divide every term by -12:

          3x        4y
        ------  +  ------  =  1
        (-12)      (-12)

           x          y
        ------  +  ------  =  1
         (-4)       (-3)

       So   a = -4  (x-intercept)  and  b = -3  (y-intercept).


  (c) NORMAL FORM -- divide by sqrt(a^2 + b^2), then make the RHS positive.

       sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5

       First move the constant:   3x + 4y = -12
       The right side is negative, so multiply everything by -1:
                                  -3x - 4y = 12

       Now divide by 5:

          -3        -4          12
         ---- x  + ---- y  =  ------
           5         5           5

       So   cos(alpha) = -3/5 ,  sin(alpha) = -4/5 ,  p = 12/5.

       Both cos and sin are negative, so alpha lies in the THIRD quadrant.
```

**Two spin-off facts you should just remember:**

```
  Line PARALLEL to ax + by + c = 0        ->      ax + by + k = 0
        (keep a and b, change only c)

  Line PERPENDICULAR to ax + by + c = 0   ->      bx - ay + k = 0
        (SWAP a and b, and flip ONE sign)
```

Find `k` by putting in the point the new line must pass through.

### Worked example
Find the line perpendicular to `5x - 3y + 1 = 0` passing through (4, -3).

```
  Perpendicular family:  3x + 5y + k = 0     (swap 5 and -3, flip a sign)

  Put in (4, -3):        3(4) + 5(-3) + k = 0
                         12 - 15 + k = 0
                         k = 3

  ANSWER:  3x + 5y + 3 = 0
```

> **TRAP:** Do not "swap and flip" both signs — `bx - ay` and `-bx + ay` are
> the same line, but `bx + ay` is WRONG. Check with slopes: the product of the
> two slopes must be -1.

---

# TOPIC 11 — Angle between two lines; parallel and perpendicular

```
  +------------------------------------------------------------+
  |                                                            |
  |                        m1  -  m2                           |
  |     tan(theta)  =  abs -------------                       |
  |                        1  +  m1 m2                         |
  |                                                            |
  |   theta is then the ACUTE angle between the two lines.     |
  |                                                            |
  +------------------------------------------------------------+
```

The `abs( )` (absolute value, "ignore the minus sign") is what forces the
answer to be the acute angle. AP questions almost always want the acute one.

```
                    \       /
                     \     /
                      \   /
                       \ /
                        X   <-- two angles are formed here:
                       / \       theta  and  (180 - theta)
                      /   \
                     /     \
```

**The two conditions that come from this formula:**

```
  PARALLEL        theta = 0     ->  tan(theta) = 0  ->   m1 = m2
                                    (in general form:  a1 b2 - a2 b1 = 0)

  PERPENDICULAR   theta = 90    ->  denominator = 0 ->   1 + m1 m2 = 0
                                                    ->   m1 m2 = -1
                                    (in general form:  a1 a2 + b1 b2 = 0)
```

The general-form versions are safer, because they still work when one of the
lines is vertical (and therefore has no slope at all).

### Worked example 1
Find the acute angle between `2x + y + 4 = 0` and `y - 3x = 7`.

```
  Line 1:  2x + y + 4 = 0     ->   m1 = -2/1 = -2
  Line 2:  y = 3x + 7         ->   m2 = 3

                   -2 - 3            -5
  tan(theta) = abs --------- = abs --------  =  abs(1)  =  1
                   1 + (-6)          -5

  tan(theta) = 1   ->   theta = 45 degrees

  ANSWER:  45 degrees
```

### Worked example 2
Find k if `6x - 10y + 3 = 0` and `kx - 5y + 8 = 0` are parallel.

```
                      -6         6         3
  Slope of line 1 = -------  =  ----  =   ---
                     (-10)       10        5

                      -k         k
  Slope of line 2 = -------  =  ---
                     (-5)        5

  Parallel means the slopes are equal:

       k        3
      ---  =   ---        ->        k = 3
       5        5

  ANSWER:  k = 3
```

### Worked example 3
Find k if `3x + ky = 5` and `2x + 3y = 1` are perpendicular.

```
  m1 = -3/k ,   m2 = -2/3

  m1 m2 = -1

     -3     -2            6
    ---- x ----  =  -1   ->   -----  =  -1   ->   6 = -3k   ->   k = -2
      k      3             3k

  ANSWER:  k = -2

  (Faster general-form check:  a1 a2 + b1 b2 = 0
                               3(2) + k(3) = 0  ->  6 + 3k = 0  ->  k = -2 )
```

> **TRAP:** `1 + m1 m2 = 0` means perpendicular. If you get `1 + m1 m2 = 0`
> while computing the angle, do not panic and do not divide by zero — just
> write "the lines are perpendicular, theta = 90 degrees".

---

# TOPIC 12 — Point of intersection of two lines

Two non-parallel lines meet at exactly one point. To find it, **solve the two
equations together** — elimination or substitution, whichever is quicker.

### Worked example
Find where `2x + y = 5` and `x - y = 1` meet.

```
   2x + y = 5
    x - y = 1
   -----------  ADD (the y terms cancel)
   3x     = 6      ->   x = 2

  Put x = 2 into  x - y = 1  :   2 - y = 1   ->   y = 1

  ANSWER:  (2, 1)

  CHECK in the first equation:  2(2) + 1 = 5   Correct.
```

There is also a formula (useful in MCQs) for
`a1 x + b1 y + c1 = 0` and `a2 x + b2 y + c2 = 0`:

```
        x                  y                   1
   -------------  =  --------------  =  ---------------
   b1 c2 - b2 c1     c1 a2 - c2 a1      a1 b2 - a2 b1
```

If the bottom of the last fraction, `a1 b2 - a2 b1`, is **zero**, the lines are
parallel and there is NO point of intersection.

---

# TOPIC 13 — Concurrency of three lines

Three lines are **concurrent** if all three pass through one single point.

```
             \      |      /
              \     |     /
               \    |    /
                \   |   /
                 \  |  /
                  \ | /
                    *          <-- one common point
                  / | \
                 /  |  \
```

**Method 1 — the honest method (use this in the board exam):**

```
  STEP 1   Take the two EASIEST equations and solve them -> point P.
  STEP 2   Substitute P into the third equation.
  STEP 3   If it gives 0 = 0, the lines are concurrent, and P is the point.
           If it does not, they are not concurrent.
```

**Method 2 — the determinant condition (fast, good for finding k):**

```
    | a1   b1   c1 |
    | a2   b2   c2 |   =   0
    | a3   b3   c3 |
```

### Worked example
Show that `2x + y - 3 = 0`, `3x + 2y - 2 = 0` and `2x - 3y - 23 = 0` are
concurrent, and find the point of concurrency.

```
  STEP 1   Solve the first two.
             2x +  y = 3      ... (i)
             3x + 2y = 2      ... (ii)

           From (i):   y = 3 - 2x
           Put into (ii):  3x + 2(3 - 2x) = 2
                           3x + 6 - 4x = 2
                             -x = -4
                              x = 4
                              y = 3 - 2(4) = -5

           So the first two meet at  P(4, -5).

  STEP 2   Test P in the third line:
             2(4) - 3(-5) - 23  =  8 + 15 - 23  =  0     TRUE

  ANSWER:  The three lines ARE concurrent, meeting at (4, -5).
```

### Worked example — the "find k" version
Find k if `2x - 3y + k = 0`, `3x - 4y - 13 = 0` and `8x - 11y - 33 = 0`
are concurrent.

```
  STEP 1   Solve the two lines that DO NOT contain k.
             3x - 4y = 13     ... (i)   times 11  ->  33x - 44y = 143
             8x - 11y = 33    ... (ii)  times  4  ->  32x - 44y = 132
                                        SUBTRACT  ->    x        =  11

           From (i):  3(11) - 4y = 13  ->  33 - 4y = 13  ->  y = 5

           Common point  P(11, 5).

  STEP 2   P must lie on the first line too:
             2(11) - 3(5) + k = 0
             22 - 15 + k = 0
             k = -7

  ANSWER:  k = -7
```

> **TRAP:** Always solve the two equations WITHOUT the unknown first.
> Solving a pair that contains k gives you an algebra mess for no reason.

---

# TOPIC 14 — Perpendicular distance from a point to a line

This is the single most useful formula in coordinate geometry.

```
  +--------------------------------------------------------------+
  |                                                              |
  |                     abs( a x1 + b y1 + c )                   |
  |    distance  d  =  ---------------------------               |
  |                        sqrt( a^2 + b^2 )                     |
  |                                                              |
  |    from the point P(x1, y1) to the line  ax + by + c = 0     |
  |                                                              |
  +--------------------------------------------------------------+
```

```
          P(x1, y1)
             *
             |\
             | \
           d |  \        d is measured along the PERPENDICULAR,
             |   \       which is the SHORTEST route
             |    \
       ------+-----\------------------  the line ax + by + c = 0
             N      \
        (foot of the perpendicular)
```

**How to use it in 3 steps:**

```
  STEP 1   Make sure the line is written as  ax + by + c = 0  (= 0 on the right).
  STEP 2   Put the point's x and y into the TOP. Take the absolute value.
  STEP 3   Divide by sqrt(a^2 + b^2).
```

**Special case — from the ORIGIN (very common 2-mark question):**

```
                 abs(c)
  d  =  ---------------------          because x1 = 0 and y1 = 0
         sqrt(a^2 + b^2)
```

### Worked example 1
Find the distance from (3, -4) to the line `3x - 4y + 10 = 0`.

```
  a = 3 , b = -4 , c = 10 ,  (x1, y1) = (3, -4)

        abs( 3(3) + (-4)(-4) + 10 )       abs( 9 + 16 + 10 )        35
  d = ------------------------------  =  --------------------  =  ------  =  7
          sqrt( 3^2 + (-4)^2 )              sqrt(9 + 16)             5

  ANSWER:  d = 7
```

### Worked example 2 — proving a standard result (4 marks)
If p is the length of the perpendicular from the origin to the line
`x/a + y/b = 1`, show that `1/p^2 = 1/a^2 + 1/b^2`.

```
  STEP 1   Clear the fractions.  Multiply  x/a + y/b = 1  by ab :

              b x  +  a y  =  a b        ->      b x + a y - a b = 0

  STEP 2   Distance from the origin:

                  abs( -ab )              abs(ab)
           p  =  --------------   =   ---------------
                sqrt(b^2 + a^2)       sqrt(a^2 + b^2)

  STEP 3   Square both sides and turn it upside down.

                 a^2 b^2                     1        a^2 + b^2
           p^2 = -----------      ->        ----  =  ------------
                 a^2 + b^2                   p^2       a^2 b^2

                                             1        a^2         b^2
                                            ----  =  ------- +  -------
                                             p^2     a^2 b^2    a^2 b^2

                                             1        1        1
                                            ----  =  ----  +  ----     PROVED
                                             p^2      b^2      a^2
```

> **TRAP:** The formula needs the equation with **zero on the right**.
> For `3x + 4y = 10` you must first write `3x + 4y - 10 = 0`, so c = -10.

---

# TOPIC 15 — Distance between two PARALLEL lines

Two parallel lines have the **same a and b**. Write them as:

```
      ax + by + c1 = 0
      ax + by + c2 = 0

  +------------------------------------------------+
  |                                                |
  |                abs( c1  -  c2 )                |
  |     d   =   -----------------------            |
  |                sqrt( a^2 + b^2 )               |
  |                                                |
  +------------------------------------------------+
```

```
      ------------------------------  ax + by + c1 = 0
              |
              |  d
              |
      ------------------------------  ax + by + c2 = 0
```

**THE ONE THING THAT MATTERS:** the coefficients of x and of y must be
**identical** in both equations before you use the formula. If they are not,
multiply one equation to make them match.

### Worked example
Find the distance between `3x + 4y - 3 = 0` and `6x + 8y - 1 = 0`.

```
  STEP 1   Make the coefficients match. Multiply the FIRST line by 2:

              6x + 8y - 6 = 0
              6x + 8y - 1 = 0

  STEP 2   Now  a = 6 , b = 8 , c1 = -6 , c2 = -1.

               abs( -6 - (-1) )        abs(-5)          5         5        1
       d  =  --------------------  =  ----------  =  --------  = ----  =  ---
              sqrt( 36 + 64 )         sqrt(100)         10        10       2

  ANSWER:  d = 1/2
```

> **TRAP:** Using the formula on `3x + 4y - 3 = 0` and `6x + 8y - 1 = 0`
> without scaling first gives sqrt(25) = 5 on the bottom and 2 on the top,
> answer 2/5 — WRONG. Scale first, always.

**Alternative method if you forget:** pick any point on one line (put x = 0)
and use the point-to-line formula with the other line. Same answer.

---

# TOPIC 16 — FOOT of the perpendicular from a point to a line

The **foot** is the point N where the perpendicular from P actually lands on
the line. It is the closest point of the line to P.

```
          P(x1, y1)
             *
             |
             |
             |
       ------*-----------------------  ax + by + c = 0
             N = the FOOT
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     x - x1        y - y1          -( a x1 + b y1 + c )              |
  |    ---------  =  ---------   =   -------------------------          |
  |        a             b                 a^2  +  b^2                  |
  |                                                                     |
  |    (x, y) = the FOOT of the perpendicular                           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**How to use it:** compute the right-hand fraction once — call it t.
Then `x = x1 + a t` and `y = y1 + b t`. Two multiplications and you are done.

### Worked example
Find the foot of the perpendicular from (-1, 3) to the line `5x - y - 18 = 0`.

```
  a = 5 , b = -1 , c = -18 ,  (x1, y1) = (-1, 3)

  STEP 1   Compute  a x1 + b y1 + c :
             5(-1) + (-1)(3) + (-18)  =  -5 - 3 - 18  =  -26

  STEP 2   Compute  a^2 + b^2 :
             5^2 + (-1)^2  =  25 + 1  =  26

  STEP 3   Compute t :

                    -( -26 )         26
             t  =  -----------  =  ------  =  1
                      26             26

  STEP 4   Build the foot :
             x = x1 + a t = -1 + 5(1) =  4
             y = y1 + b t =  3 + (-1)(1) =  2

  STEP 5   CHECK the foot lies ON the line:
             5(4) - 2 - 18  =  20 - 20  =  0     Correct.

  ANSWER:  The foot is (4, 2).
```

**If you forget the formula, the long method always works:**
1. Slope of the given line is `-a/b`, so the perpendicular has slope `b/a`.
2. Write the perpendicular through P using point-slope form.
3. Solve the two lines together. That intersection is the foot.

---

# TOPIC 17 — IMAGE (reflection) of a point in a line

The **image** Q is the point on the other side, the same distance away, with
the line acting like a mirror. The foot N is the MIDPOINT of PQ.

```
          P(x1, y1)
             *
             |
             |
       ------*-----------------------  the mirror line
             N
             |
             |
             *
          Q = the IMAGE
```

Because N is the midpoint, the image needs exactly **twice** the shift of the
foot. Same formula, just a 2 in front:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     x - x1        y - y1          -2 ( a x1 + b y1 + c )            |
  |    ---------  =  ---------   =   ---------------------------        |
  |        a             b                  a^2  +  b^2                 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**ONE formula does BOTH jobs. Remember it like this:**

```
       FOOT   ->  use  -1 x (that fraction)
       IMAGE  ->  use  -2 x (that fraction)
```

### Worked example
Find the image of the point (3, 8) in the line `x + 3y - 7 = 0`.

```
  a = 1 , b = 3 , c = -7 ,  (x1, y1) = (3, 8)

  STEP 1   a x1 + b y1 + c  =  1(3) + 3(8) - 7  =  3 + 24 - 7  =  20

  STEP 2   a^2 + b^2  =  1 + 9  =  10

  STEP 3               -2 (20)        -40
           t   =   -------------  =  ------  =  -4
                        10             10

  STEP 4   x = x1 + a t  =  3 + 1(-4)  =  -1
           y = y1 + b t  =  8 + 3(-4)  =  8 - 12  =  -4

  ANSWER:  The image is (-1, -4).

  STEP 5   CHECK -- the midpoint of P(3,8) and Q(-1,-4) must lie on the line.

             ( 3 + (-1) )      ( 8 + (-4) )
      mid = ( -------------- , -------------- )  =  ( 1 , 2 )
                   2                 2

             1 + 3(2) - 7  =  1 + 6 - 7  =  0     It lies on the line. Correct.
```

> **TRAP:** Writing 2 instead of -2. The minus sign is what pushes the point
> ACROSS the line instead of further away from it.

**Two mirror lines you should just know by sight:**

```
  Image of (h, k) in the line  y = x   ->   (k, h)     (swap them)
  Image of (h, k) in the x-axis        ->   (h, -k)
  Image of (h, k) in the y-axis        ->   (-h, k)
```

---

# TOPIC 18 — Family of lines through the intersection of two lines

Suppose `L1 = a1 x + b1 y + c1 = 0` and `L2 = a2 x + b2 y + c2 = 0` meet at P.

```
  +--------------------------------------------------------------+
  |                                                              |
  |         L1  +  k L2  =  0                                    |
  |                                                              |
  |   For EVERY value of k this is a straight line, and EVERY    |
  |   one of them passes through the intersection point P.       |
  |                                                              |
  +--------------------------------------------------------------+
```

Why it works: at the point P both L1 and L2 equal 0, so `0 + k(0) = 0` is true
no matter what k is. So P is on every member of the family.

**The whole point:** you never have to find P at all.

### Worked example
Find the line through the intersection of `x + 2y - 3 = 0` and
`2x - y + 1 = 0` which also passes through (1, 2).

```
  STEP 1   Write the family.
             (x + 2y - 3)  +  k (2x - y + 1)  =  0

  STEP 2   It must pass through (1, 2). Substitute.
             ( 1 + 4 - 3 )  +  k ( 2 - 2 + 1 )  =  0
                    2       +  k (1)            =  0
                                       k        =  -2

  STEP 3   Put k = -2 back in.
             (x + 2y - 3)  -  2 (2x - y + 1)  =  0
              x + 2y - 3   -  4x + 2y - 2     =  0
                 -3x + 4y - 5 = 0
                  3x - 4y + 5 = 0

  STEP 4   CHECK with (1,2):  3(1) - 4(2) + 5 = 3 - 8 + 5 = 0    Correct.

  ANSWER:  3x - 4y + 5 = 0
```

The same trick handles "find the line through the intersection of L1 and L2
which is parallel / perpendicular to L3" — just impose the slope condition on
the family instead of a point.

---

# TOPIC 19 — The ratio in which a line divides a segment

A line L cuts the segment joining `A(x1, y1)` and `B(x2, y2)` at some point.
In what ratio?

```
  +--------------------------------------------------------------+
  |                                                              |
  |                     -( a x1 + b y1 + c )                     |
  |     ratio  =  ------------------------------                 |
  |                   ( a x2 + b y2 + c )                        |
  |                                                              |
  |     Short version:   ratio  =  - L(A) : L(B)                 |
  |                                                              |
  |     POSITIVE answer  ->  divided INTERNALLY                  |
  |     NEGATIVE answer  ->  divided EXTERNALLY                  |
  |                                                              |
  +--------------------------------------------------------------+
```

`L(A)` just means "put A's coordinates into the left-hand side of the line".

### Worked example
Find the ratio in which `2x + 3y - 20 = 0` divides the join of (2, 3) and (2, 10).

```
  STEP 1   L(A) at (2, 3)  :  2(2) + 3(3) - 20  =  4 + 9 - 20  =  -7
  STEP 2   L(B) at (2, 10) :  2(2) + 3(10) - 20 =  4 + 30 - 20 =  14

  STEP 3
                    -( -7 )        7          1
           ratio = ---------- =  ------  =  -----      ->     1 : 2
                      14           14         2

  Positive, so the division is INTERNAL.

  ANSWER:  1 : 2 internally

  CHECK -- the dividing point in ratio 1:2 is

           ( 1(2) + 2(2)     1(10) + 2(3) )         (       16 )
           ( ------------ ,  ------------ )   =    ( 2 ,   ---- )
           (      3               3       )         (        3  )

           Test:  2(2) + 3(16/3) - 20  =  4 + 16 - 20  =  0     On the line.
```

---

# TOPIC 20 — Which SIDE of a line a point is on

Take the line `L : ax + by + c = 0`. Put a point in and look only at the SIGN.

```
  +--------------------------------------------------------------+
  |                                                              |
  |    L(P) and L(Q) have the SAME sign  ->  SAME side           |
  |    L(P) and L(Q) have OPPOSITE signs ->  OPPOSITE sides      |
  |    L(P) = 0                          ->  P is ON the line    |
  |                                                              |
  |    Test in one line:   L(P) x L(Q)  >  0   ->  same side     |
  |                        L(P) x L(Q)  <  0   ->  opposite      |
  |                                                              |
  +--------------------------------------------------------------+
```

```
             NEGATIVE side
       -----------------------------  ax + by + c = 0
             POSITIVE side
```

### Worked example
Do (2, 3) and (-1, 4) lie on the same side of `3x - 4y + 7 = 0`?

```
  L(2, 3)   =  3(2) - 4(3) + 7   =  6 - 12 + 7  =  +1     (positive)
  L(-1, 4)  =  3(-1) - 4(4) + 7  = -3 - 16 + 7  =  -12    (negative)

  Different signs.

  ANSWER:  They lie on OPPOSITE sides of the line.
```

Notice this is the same idea as Topic 19: opposite signs give a positive ratio,
which is exactly what "the line cuts BETWEEN them" means.

---

# TOPIC 21 — Area of the triangle a line makes with the axes

A line with intercepts a and b makes a right-angled triangle with the axes.

```
        y
        ^
        |
      b *
        | \
        |   \            base   = abs(a)
        |     \          height = abs(b)
        |       \
     ---+---------*------------> x
       O          a
```

```
  +--------------------------------------------------------------+
  |                                                              |
  |    From  x/a + y/b = 1  :        Area  =  (1/2) abs( a b )   |
  |                                                              |
  |                                              c^2             |
  |    From  ax + by + c = 0 :       Area  =  ----------         |
  |                                            2 abs(a b)        |
  |                                                              |
  +--------------------------------------------------------------+
```

### Worked example 1
Find the area of the triangle formed by `3x - 4y + 12 = 0` with the axes.

```
  x-intercept:  put y = 0  ->  3x + 12 = 0  ->  x = -4
  y-intercept:  put x = 0  ->  -4y + 12 = 0 ->  y = 3

  Area = (1/2) abs( (-4)(3) )  =  (1/2)(12)  =  6

  CHECK with the second formula:

              c^2             12^2           144
          ----------  =  --------------  =  -----  =  6      Same.
           2 abs(ab)      2 abs(3 x -4)       24

  ANSWER:  6 square units
```

### Worked example 2 — the reverse question
If the area of the triangle formed by `3x + 4y + k = 0` with the axes is 6,
find k.

```
              k^2                 k^2
  Area  =  ----------   =   ------------   =  6
            2 abs(ab)        2 (12)

           k^2 = 144      ->     k = 12   or   k = -12

  ANSWER:  k = 12 or k = -12   (both give the same area)
```

---

# TOPIC 22 — Bisectors of the angle between two lines

Two crossing lines make FOUR angles, in two pairs. There are therefore TWO
bisectors, and they are perpendicular to each other.

```
              \        |       /
               \       |      /
        acute   \      |     /   obtuse
      bisector   \     |    /    bisector
                  \    |   /
                   \   |  /
        ------------- \|/ -------------
                       X
                      /|\
                     / | \
                    /  |  \
```

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |     a1 x + b1 y + c1              a2 x + b2 y + c2                   |
  |   ----------------------  =  +/- ----------------------              |
  |     sqrt(a1^2 + b1^2)             sqrt(a2^2 + b2^2)                  |
  |                                                                      |
  |   Reason: a point on a bisector is EQUIDISTANT from both lines.      |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**Which sign gives which bisector? Follow this recipe exactly:**

```
  STEP 0   REWRITE both equations so that BOTH constant terms c1 and c2
           are POSITIVE. (Multiply an equation by -1 if you need to.)
           Nothing below works unless you do this first.

  STEP 1   The bisector with the  " + "  sign is the one CONTAINING THE ORIGIN.

  STEP 2   Now look at the number    a1 a2  +  b1 b2 :

               if it is NEGATIVE  ->  the origin bisector ( + ) is the
                                      ACUTE angle bisector
               if it is POSITIVE  ->  the origin bisector ( + ) is the
                                      OBTUSE angle bisector

           The other sign gives the other one.
```

### Worked example (a full 7-mark answer)
Find the equations of the bisectors of the angles between
`4x + 3y - 7 = 0` and `24x + 7y - 31 = 0`.
State which one contains the origin and which one bisects the acute angle.

```
  STEP 1   Write both bisectors.
           sqrt(4^2 + 3^2)   = sqrt(25)  = 5
           sqrt(24^2 + 7^2)  = sqrt(576 + 49) = sqrt(625) = 25

             4x + 3y - 7           24x + 7y - 31
            -------------  =  +/- ----------------
                  5                      25

           Multiply both sides by 25:

             5 (4x + 3y - 7)  =  +/- (24x + 7y - 31)


  STEP 2   The  " + "  case:
             20x + 15y - 35  =  24x + 7y - 31
                       0     =  4x - 8y + 4
                       0     =  x - 2y + 1            ->    x - 2y + 1 = 0


  STEP 3   The  " - "  case:
             20x + 15y - 35  =  -24x - 7y + 31
             44x + 22y - 66  =  0
              2x +  y -  3   =  0                     ->    2x + y - 3 = 0


  STEP 4   WHICH ONE CONTAINS THE ORIGIN?
           Make the constants positive by multiplying both lines by -1:

             -4x - 3y + 7 = 0        (c1 = 7 , positive)
            -24x - 7y + 31 = 0       (c2 = 31 , positive)

           The " + " bisector of THESE is the origin one:

             5(-4x - 3y + 7)  =  -24x - 7y + 31
             -20x - 15y + 35  =  -24x - 7y + 31
                 4x - 8y + 4  =  0
                  x - 2y + 1  =  0

           So   x - 2y + 1 = 0   contains the origin.


  STEP 5   ACUTE or OBTUSE?
           Using the positive-constant versions,
             a1 a2 + b1 b2  =  (-4)(-24) + (-3)(-7)  =  96 + 21  =  117

           117 is POSITIVE  ->  the origin bisector is the OBTUSE one.


  ANSWER:  Bisectors:      x - 2y + 1 = 0    and    2x + y - 3 = 0
           Contains origin:  x - 2y + 1 = 0    (and it is the OBTUSE bisector)
           Acute bisector :  2x + y - 3 = 0

  CHECK -- the two bisectors must be perpendicular:
           slope of x - 2y + 1 = 0  is  1/2
           slope of 2x + y - 3 = 0  is  -2
           product = (1/2)(-2) = -1      Perpendicular. Correct.
```

> **TRAP:** Skipping STEP 0. If you leave a negative constant in place, your
> "origin" bisector and "acute" bisector both come out swapped, and the whole
> 7 marks go with them.

---

# TOPIC 23 — The centres of a triangle (the 7-mark question)

Given three vertices — or three lines that form a triangle — you may be asked
for one of these four points. Learn what each one IS, and the method writes
itself.

| Centre | It is where these meet | Method |
|--------|------------------------|--------|
| Centroid G | the three MEDIANS (vertex to midpoint of opposite side) | just average the coordinates |
| Orthocentre O | the three ALTITUDES (vertex, perpendicular to opposite side) | find two altitudes, solve them |
| Circumcentre S | the three PERPENDICULAR BISECTORS of the sides | find two of them, solve them |
| Incentre I | the three INTERNAL ANGLE BISECTORS | weighted average using side lengths |

```
  CENTROID  (easy, 2 marks)

           x1 + x2 + x3        y1 + y2 + y3
      G = ( --------------- ,  --------------- )
                  3                   3


  INCENTRE  (a = BC , b = CA , c = AB are the SIDE LENGTHS)

           a x1 + b x2 + c x3        a y1 + b y2 + c y3
      I = ( -------------------- ,  -------------------- )
                a + b + c                a + b + c
```

## THE ORTHOCENTRE — full method

```
  STEP 1   Pick vertex A. Find the slope of the OPPOSITE side BC.
  STEP 2   The altitude from A has slope = -1 / (slope of BC).
  STEP 3   Write that altitude using point-slope form through A.
  STEP 4   Repeat once more for a second vertex (B and side CA).
  STEP 5   Solve the two altitude equations together. That is the orthocentre.
           (You never need the third altitude - but it is a good check.)
```

### Worked example
Find the orthocentre of the triangle with vertices A(-2, -1), B(6, -1), C(2, 5).

```
                       C(2, 5)
                        *
                       / \
                      /   \
                     /     \
                    /       \
           A(-2,-1)*---------* B(6,-1)


  NOTICE FIRST:  A and B both have y = -1, so side AB is HORIZONTAL.
                 That makes the altitude from C VERTICAL.  Free information.

  ALTITUDE 1  (from C, perpendicular to AB):
                 AB is horizontal  ->  the altitude is vertical through C(2,5)

                        x = 2                     ... (i)

  ALTITUDE 2  (from A, perpendicular to BC):

                            5 - (-1)        6
           slope of BC  =  ----------  =  -----  =  -3/2
                            2 - 6           -4

           slope of the altitude  =  -1 / (-3/2)  =  2/3

           Through A(-2, -1), point-slope form:

               y - (-1)  =  (2/3) ( x - (-2) )
               y + 1     =  (2/3) ( x + 2 )
               3y + 3    =  2x + 4
               2x - 3y + 1 = 0                    ... (ii)

  SOLVE (i) and (ii):   put x = 2 into (ii)

               2(2) - 3y + 1 = 0
               4 - 3y + 1 = 0
               5 = 3y
               y = 5/3

  ANSWER:  ORTHOCENTRE  =  ( 2 , 5/3 )
```

## THE CIRCUMCENTRE — full method

```
  STEP 1   Take side AB. Find its MIDPOINT.
  STEP 2   Find the slope of AB, then the perpendicular slope.
  STEP 3   Write the perpendicular bisector: point-slope through that midpoint.
  STEP 4   Repeat for side BC.
  STEP 5   Solve the two equations together. That is the circumcentre.
  STEP 6   CHECK: its distance to all three vertices must be equal.
```

### Worked example (same triangle, so you can compare)
Find the circumcentre of the triangle A(-2, -1), B(6, -1), C(2, 5).

```
  BISECTOR 1  (of AB):
                                  ( -2 + 6      -1 + (-1) )
             midpoint of AB  =   ( --------- ,  ---------- )  =  ( 2 , -1 )
                                  (    2             2     )

             AB is horizontal, so its perpendicular bisector is VERTICAL:

                        x = 2                    ... (i)

  BISECTOR 2  (of BC):
                                  ( 6 + 2      -1 + 5 )
             midpoint of BC  =   ( -------- ,  -------- )  =  ( 4 , 2 )
                                  (    2           2   )

             slope of BC = -3/2   ->   perpendicular slope = 2/3

             y - 2  =  (2/3) ( x - 4 )
             3y - 6 =  2x - 8
             2x - 3y - 2 = 0                     ... (ii)

  SOLVE:     put x = 2 into (ii):
             4 - 3y - 2 = 0    ->    2 = 3y    ->    y = 2/3

  ANSWER:  CIRCUMCENTRE  =  ( 2 , 2/3 )

  CHECK -- distance to each vertex:

     to A(-2,-1):  sqrt( (2+2)^2 + (2/3 + 1)^2 ) = sqrt( 16 + 25/9 )
                                                 = sqrt(169/9) = 13/3
     to B(6,-1) :  sqrt( (2-6)^2 + (2/3 + 1)^2 ) = sqrt( 16 + 25/9 ) = 13/3
     to C(2, 5) :  sqrt( 0 + (5 - 2/3)^2 )       = sqrt( (13/3)^2 )  = 13/3

     All three equal 13/3. The answer is right.
```

## THE FREE CHECK THAT PROTECTS 14 MARKS

For ANY triangle, the orthocentre O, the centroid G and the circumcentre S lie
on ONE straight line (the Euler line), and

```
        O -------- G ---- S
         \___ 2 __/\_ 1 _/

        O G  :  G S   =   2 : 1
```

For the triangle above:

```
  G = ( (-2 + 6 + 2)/3 , (-1 - 1 + 5)/3 ) = ( 6/3 , 3/3 ) = ( 2 , 1 )
  O = ( 2 , 5/3 )        S = ( 2 , 2/3 )

  All three have x = 2, so they ARE collinear.

  OG = 5/3 - 1 = 2/3          GS = 1 - 2/3 = 1/3

  OG : GS  =  (2/3) : (1/3)  =  2 : 1        Both answers confirmed.
```

## SHORTCUTS FOR SPECIAL TRIANGLES

```
  RIGHT-ANGLED TRIANGLE:
      orthocentre  = the vertex holding the RIGHT ANGLE
      circumcentre = the MIDPOINT of the hypotenuse

  EQUILATERAL TRIANGLE:
      centroid = orthocentre = circumcentre = incentre  (all the same point)
```

Spot a right angle first — it can turn a 7-mark grind into two lines.

---

# TOPIC 24 — Putting it together: a typical mixed problem

Find the point on the line `3x + y + 4 = 0` which is equidistant from
(-5, 6) and (3, 2).

```
  KEY IDEA:  "equidistant from two points" means the point lies on the
             PERPENDICULAR BISECTOR of the segment joining them.
             So find that bisector, then intersect it with the given line.

  STEP 1   Midpoint of (-5, 6) and (3, 2):

              ( -5 + 3      6 + 2 )
             ( --------- ,  ------- )  =  ( -1 , 4 )
              (    2           2    )

  STEP 2   Slope of the segment:

                 2 - 6        -4
                --------  =  ----  =  -1/2
                 3 - (-5)      8

           Perpendicular slope  =  2

  STEP 3   Perpendicular bisector through (-1, 4) with slope 2:

             y - 4 = 2 ( x + 1 )
             y - 4 = 2x + 2
             y = 2x + 6                       ... (i)

  STEP 4   The given line:   3x + y + 4 = 0   ->   y = -3x - 4     ... (ii)

  STEP 5   Solve (i) and (ii) together:

             2x + 6  =  -3x - 4
             5x = -10
             x = -2      ->     y = 2(-2) + 6  =  2

  ANSWER:  ( -2 , 2 )

  CHECK    on the line:   3(-2) + 2 + 4 = -6 + 6 = 0             Correct.
           to (-5, 6):    sqrt( (-2+5)^2 + (2-6)^2 ) = sqrt(9+16) = 5
           to (3, 2):     sqrt( (-2-3)^2 + (2-2)^2 ) = sqrt(25)   = 5
           Equal. Correct.
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I write the line as  ax + by + c = 0  BEFORE using any distance
       formula ?  (c must be on the LEFT side.)

  [ ]  Did I take the ABSOLUTE VALUE in the distance formula ?
       A distance can never be negative.

  [ ]  For two parallel lines, did I make the x and y coefficients IDENTICAL
       before using abs(c1 - c2) / sqrt(a^2 + b^2) ?

  [ ]  Slope of a VERTICAL line is UNDEFINED, not zero. Did I mix them up ?

  [ ]  In point-slope form, is it  y - y1 = m(x - x1) ?
       Double-check the signs when x1 or y1 is negative.

  [ ]  FOOT uses  -1 x fraction.  IMAGE uses  -2 x fraction.  Which did I use ?

  [ ]  For angle bisectors, did I first make BOTH constants POSITIVE ?

  [ ]  For an orthocentre / circumcentre, did I use the PERPENDICULAR slope
       (flip and change sign), not the original slope ?

  [ ]  Did I substitute my final point back into ONE original equation ?
       (Takes 20 seconds. Saves 7 marks.)

  [ ]  Did I write the final answer on its own line, clearly, with units
       where the question asks for an area ?
```
