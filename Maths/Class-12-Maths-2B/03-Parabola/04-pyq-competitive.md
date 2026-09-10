# Parabola — Competitive Exam Questions (EAPCET / JEE Main)

**Maths IIB · Chapter 3**

| Exam | Maths questions | From Conics (Circle + Parabola + Ellipse + Hyperbola) | From PARABOLA alone |
|---|---|---|---|
| **AP EAPCET** | 80 | about 8-10 | **2-3** |
| **TG EAPCET** | 80 | about 8-10 | **2-3** |
| **JEE Main** | 25 | about 3-4 | **1** (often 1 every other shift) |

```
  MARKING
  AP / TG EAPCET   +1 for correct, NO negative marking   ->  NEVER leave a blank
  JEE Main         +4 correct , -1 wrong                 ->  skip what you truly
                                                              do not know
```

The parabola is a **pure substitution** chapter in entrance exams. There is almost
never a "clever" question — there is a formula, and you either have it or you do not.
That makes it the highest return-per-hour topic in the conics block.

Questions below are grouped by **PATTERN**, not by year.

---

# PATTERN 1 — READ THE STANDARD FORM

> **SHORTCUT:** In one glance: which letter is squared (axis direction), what sign
> (which way it opens), and `a = coefficient / 4`. Everything else is a lookup.

### Q1.1
The focus of the parabola `y^2 = -12x` is
**(A)** (3, 0)  **(B)** (-3, 0)  **(C)** (0, 3)  **(D)** (0, -3)

**ANSWER: (B)**
```
  y^2 = -4ax  ->  4a = 12  ->  a = 3  ->  focus ( -a , 0 ) = ( -3 , 0 )
```

---

### Q1.2
The directrix of the parabola `x^2 = 12y` is
**(A)** y = 3  **(B)** y = -3  **(C)** x = 3  **(D)** x = -3

**ANSWER: (B)**
```
  x^2 = 4ay  ->  4a = 12  ->  a = 3.  Opens UP, so the directrix is BELOW: y = -a = -3
```

---

### Q1.3
The length of the latus rectum of `2y^2 = 7x` is
**(A)** 7  **(B)** 7/2  **(C)** 7/4  **(D)** 7/8

**ANSWER: (B)**
```
  DIVIDE BY 2:  y^2 = ( 7/2 ) x    ->    4a = 7/2    ->    LR = 4a = 7/2
```
> **SHORTCUT:** The latus rectum IS `4a`, i.e. it is literally the number sitting
> next to `x` once the squared term has coefficient 1. You never need to find `a`
> separately for an LR question.

---

### Q1.4
For `x^2 = -16y`, the focus and axis are
**(A)** (0, 4), x = 0  **(B)** (0, -4), x = 0  **(C)** (-4, 0), y = 0  **(D)** (4, 0), y = 0

**ANSWER: (B)**
```
  x squared, sign minus  ->  opens DOWN, axis is the y-axis (x = 0)
  4a = 16 -> a = 4 -> focus ( 0 , -4 )
```

---

### Q1.5
The ends of the latus rectum of `y^2 = 20x` are
**(A)** (5, ±10)  **(B)** (10, ±5)  **(C)** (5, ±5)  **(D)** (±10, 5)

**ANSWER: (A)**
```
  4a = 20 -> a = 5.  Put x = 5: y^2 = 100 -> y = ±10.  Ends ( 5 , ±10 ).
  Separation = 20 = 4a ✓
```

---

# PATTERN 2 — BUILD THE EQUATION FROM GIVEN DATA

### Q2.1
The parabola with vertex at the origin, axis along the x-axis, passing through
`(2, 3)` is
**(A)** y^2 = 9x  **(B)** 2y^2 = 9x  **(C)** y^2 = 3x  **(D)** 3y^2 = 2x

**ANSWER: (B)**
```
  y^2 = 4ax  ->  9 = 8a  ->  a = 9/8  ->  y^2 = ( 9/2 ) x   ->   2y^2 = 9x
```

---

### Q2.2
If the vertex is `(2, 0)` and the directrix is the y-axis, the focus is
**(A)** (4, 0)  **(B)** (0, 4)  **(C)** (-2, 0)  **(D)** (2, 2)

**ANSWER: (A)**
> **SHORTCUT:** The **vertex is the midpoint** of the focus and the foot of the
> directrix. Foot = (0, 0), vertex = (2, 0), so focus = (4, 0).
```
  Equation:  y^2 = 8 ( x - 2 )
```

---

### Q2.3
The parabola with focus `(0, 3)` and directrix `y = -3` is
**(A)** x^2 = 12y  **(B)** y^2 = 12x  **(C)** x^2 = 6y  **(D)** x^2 = -12y

**ANSWER: (A)**
```
  Vertex = midpoint of (0,3) and (0,-3) = origin.  Opens UP, a = 3.
  x^2 = 4(3) y = 12 y
```

---

### Q2.4
The equation of the parabola with vertex `(3, -2)` and focus `(3, 1)` is
**(A)** (x-3)^2 = 12(y+2)  **(B)** (y+2)^2 = 12(x-3)
**(C)** (x-3)^2 = -12(y+2)  **(D)** (x-3)^2 = 3(y+2)

**ANSWER: (A)**
```
  Same x  ->  vertical axis.  Focus ABOVE the vertex  ->  opens UP.
  a = |1 - (-2)| = 3   ->   ( x - 3 )^2 = 12 ( y + 2 )
```

---

# PATTERN 3 — COMPLETE THE SQUARE (shifted parabola)

> **SHORTCUT:** In EAPCET you rarely need the whole answer. If they ask only for
> the **latus rectum**, you do not need to complete the square at all — just make
> the squared term's coefficient 1 and read the coefficient of the linear variable.

### Q3.1
The vertex of `y = x^2 - 2x + 3` is
**(A)** (1, 2)  **(B)** (-1, 2)  **(C)** (1, -2)  **(D)** (2, 1)

**ANSWER: (A)**
```
  x^2 - 2x + 1 = y - 3 + 1     ->    ( x - 1 )^2 = y - 2      ->   vertex ( 1 , 2 )
```

---

### Q3.2
The focus of `(x - 1)^2 = y - 2` is
**(A)** (1, 2)  **(B)** (1, 9/4)  **(C)** (1, 7/4)  **(D)** (5/4, 2)

**ANSWER: (B)**
```
  4a = 1 -> a = 1/4 , opens UP.   Focus = ( h , k + a ) = ( 1 , 2 + 1/4 ) = ( 1 , 9/4 )
```

---

### Q3.3
The vertex of `y^2 + 4y + 4x + 2 = 0` is
**(A)** (1/2, -2)  **(B)** (-1/2, -2)  **(C)** (-2, 1/2)  **(D)** (2, -1/2)

**ANSWER: (A)**
```
  y^2 + 4y + 4 = -4x - 2 + 4
  ( y + 2 )^2  = -4x + 2 = -4 ( x - 1/2 )        ->    vertex ( 1/2 , -2 )
```

---

### Q3.4
The length of the latus rectum of `x^2 - 4x - 8y + 12 = 0` is
**(A)** 4  **(B)** 8  **(C)** 2  **(D)** 16

**ANSWER: (B)**
```
  x^2 - 4x + 4 = 8y - 12 + 4   ->   ( x - 2 )^2 = 8 ( y - 1 )    ->   LR = 8
```

---

# PATTERN 4 — FOCAL DISTANCE, DOUBLE ORDINATE, LATUS RECTUM

### Q4.1
The focal distance of the point `(a t^2, 2 a t)` on `y^2 = 4ax` is
**(A)** a(1 + t^2)  **(B)** a(1 - t^2)  **(C)** a t^2  **(D)** 2 a t

**ANSWER: (A)**
```
  SP = x1 + a = a t^2 + a = a ( 1 + t^2 )
```
> **SHORTCUT:** Memorise this one. It converts every focal-chord length question
> into one line: `PQ = a(1+t^2) + a(1+1/t^2) = a(t + 1/t)^2`.

---

### Q4.2
The point on `y^2 = 4x` whose focal distance is 5 is
**(A)** (4, 4)  **(B)** (5, 2√5)  **(C)** (1, 2)  **(D)** (4, 2)

**ANSWER: (A)**
```
  a = 1.   x1 + 1 = 5   ->   x1 = 4  ->  y1^2 = 16  ->  y1 = ±4.   ( 4 , 4 ) fits.
```

---

### Q4.3
The length of the chord of `y^2 = 4x` perpendicular to the axis at `x = 9` is
**(A)** 6  **(B)** 12  **(C)** 18  **(D)** 36

**ANSWER: (B)**
```
  Double ordinate length = 4 sqrt( a k ) = 4 sqrt( 1 * 9 ) = 12
  (Direct: y^2 = 36, y = ±6, length 12 ✓)
```

---

### Q4.4
The latus rectum of `y^2 = 4ax` subtends at the vertex an angle of
**(A)** 45 deg  **(B)** 60 deg  **(C)** 90 deg  **(D)** 2 tan^-1(2)

**ANSWER: (D)**
```
  Ends of LR: ( a , 2a ) and ( a , -2a ).  Slopes from the vertex: 2 and -2.

           |  2 - (-2)  |     | 4  |     4
  tan th = | ---------- |  =  | -- |  =  ---     and 1 + m1m2 = -3 < 0, so the
           | 1 + 2(-2)  |     | -3 |     3        angle is OBTUSE.

  th = 180 - tan^-1(4/3) = 2 tan^-1( 2 )    ( check: tan(2 tan^-1 2) = 4/(1-4) = -4/3 )
```
> **SHORTCUT:** Do not answer 90 degrees. The latus rectum subtends a right angle
> at the vertex only for a *different* chord (`t1 t2 = -4`), never for the LR
> (where `t1 t2 = -1`).

---

# PATTERN 5 — PARAMETRIC POINTS AND CHORDS

### Q5.1
The chord of `y^2 = 4x` joining the points `t = 1` and `t = 2` is
**(A)** 2x - 3y + 4 = 0  **(B)** 3x - 2y + 4 = 0  **(C)** 2x + 3y - 4 = 0  **(D)** x - y + 1 = 0

**ANSWER: (A)**
```
  a = 1 .   ( t1 + t2 ) y = 2x + 2 a t1 t2
            3 y = 2x + 4       ->     2x - 3y + 4 = 0
  Check t=1 -> (1,2): 2 - 6 + 4 = 0 ✓  ;  t=2 -> (4,4): 8 - 12 + 4 = 0 ✓
```

---

### Q5.2
The slope of the chord of `y^2 = 8x` joining `t = 3` and `t = -1` is
**(A)** 1  **(B)** 2  **(C)** 1/2  **(D)** -1

**ANSWER: (A)**
```
  slope = 2 / ( t1 + t2 ) = 2 / ( 3 - 1 ) = 1
```

---

### Q5.3
If a chord of `y^2 = 4ax` subtends a right angle at the vertex, then `t1 t2` equals
**(A)** -1  **(B)** -4  **(C)** 1  **(D)** 4

**ANSWER: (B)**
```
  Slopes from the vertex are 2/t1 and 2/t2.  Product = -1:
       4 / ( t1 t2 ) = -1   ->   t1 t2 = -4
```
> **SHORTCUT:** Such a chord always passes through the **fixed point (4a, 0)**.
> That fact alone answers a whole family of EAPCET questions.

---

### Q5.4
The point with parameter `t = 3` on `y^2 = 8x` is
**(A)** (18, 12)  **(B)** (9, 6)  **(C)** (12, 18)  **(D)** (6, 12)

**ANSWER: (A)**
```
  a = 2.  ( a t^2 , 2 a t ) = ( 2*9 , 4*3 ) = ( 18 , 12 )
  Check: 12^2 = 144 = 8(18) ✓
```

---

# PATTERN 6 — FOCAL CHORDS

> **SHORTCUT:** The instant you read the words "focal chord", write `t1 t2 = -1`
> at the top of your rough work. Half the question is then already done.

### Q6.1
One end of a focal chord of `y^2 = 4x` is `(1, 2)`. The other end is
**(A)** (1, -2)  **(B)** (4, -4)  **(C)** (1/4, -1)  **(D)** (9, -6)

**ANSWER: (A)**
```
  a = 1 , t1 = y1/(2a) = 1.   t2 = -1/t1 = -1.
  Point = ( a t2^2 , 2 a t2 ) = ( 1 , -2 )
```
*(This particular focal chord IS the latus rectum, length 4 = 4a.)*

---

### Q6.2
The length of the focal chord of `y^2 = 4x` making 30 degrees with the axis is
**(A)** 4  **(B)** 8  **(C)** 16  **(D)** 32

**ANSWER: (C)**
```
  Length = 4a cosec^2 (theta) = 4(1) / sin^2 30 = 4 / (1/4) = 16
```

---

### Q6.3
For a focal chord `PQ` of `y^2 = 4ax`, `SP = 4` and `SQ = 6`. The latus rectum is
**(A)** 24/5  **(B)** 48/5  **(C)** 10  **(D)** 5

**ANSWER: (B)**
```
   1     1     1               1     1     3 + 2      5     1
  --- + --- = ---     ->      --- + --- = ------- = ---- = ---   ->  a = 12/5
   SP    SQ    a               4     6      12       12     a

  LATUS RECTUM = 4a = 48/5
```
> **SHORTCUT:** `1/SP + 1/SQ = 1/a` — the semi-latus rectum is the harmonic mean
> of the two focal segments. Two seconds instead of two minutes.

---

### Q6.4
The shortest focal chord of `y^2 = 16x` has length
**(A)** 4  **(B)** 8  **(C)** 16  **(D)** infinite

**ANSWER: (C)**
```
  Length = a ( t + 1/t )^2 and ( t + 1/t )^2 >= 4, with equality at t = ±1.
  MINIMUM = 4a = 16   (the LATUS RECTUM itself)
```

---

# PATTERN 7 — TANGENTS

### Q7.1
If `y = 3x + c` touches `y^2 = 12x`, then `c` equals
**(A)** 1  **(B)** 3  **(C)** 1/3  **(D)** 9

**ANSWER: (A)**
```
  4a = 12 -> a = 3 , m = 3 .    c = a/m = 3/3 = 1
```

---

### Q7.2
The point of contact of `y = 2x + 2` with `y^2 = 16x` is
**(A)** (1, 4)  **(B)** (4, 1)  **(C)** (2, 6)  **(D)** (4, 8)

**ANSWER: (A)**
```
  a = 4 , m = 2 , c = 2 = a/m ✓ tangent
  Contact ( a/m^2 , 2a/m ) = ( 1 , 4 )
```

---

### Q7.3
The line `l x + m y + n = 0` touches `y^2 = 4ax` if
**(A)** l n = a m^2  **(B)** l m = a n^2  **(C)** m n = a l^2  **(D)** l^2 = a m n

**ANSWER: (A)**
```
  Slope M = -l/m , intercept c = -n/m .  Condition c = a/M :
       -n/m = a / ( -l/m ) = - a m / l    ->    l n = a m^2
```

---

### Q7.4
The number of tangents that can be drawn from `(1, 4)` to `y^2 = 4x` is
**(A)** 0  **(B)** 1  **(C)** 2  **(D)** infinite

**ANSWER: (C)**
```
  S1 = 16 - 4(1) = 12 > 0    ->    the point is OUTSIDE    ->    TWO tangents
```

---

### Q7.5
The locus of the point of intersection of two perpendicular tangents to
`y^2 = 4ax` is
**(A)** x = a  **(B)** x = -a  **(C)** y = a  **(D)** x^2 + y^2 = a^2

**ANSWER: (B)**
```
  Tangents at t1, t2 meet at ( a t1 t2 , a(t1 + t2) ). Slopes 1/t1, 1/t2.
  Perpendicular  =>  1/(t1 t2) = -1  =>  t1 t2 = -1  =>  x = -a
  i.e. THE DIRECTRIX.
```
> **SHORTCUT:** "Director circle of a parabola = its directrix." Remember it as a
> slogan; it is asked almost every year in one exam or another.

---

### Q7.6
The tangent to `y^2 = 4ax` at the point `(a, 2a)` is
**(A)** y = x + a  **(B)** y = x - a  **(C)** y = 2x + a  **(D)** x + y = a

**ANSWER: (A)**
```
  (a, 2a) is the point t = 1.   Tangent at t:  t y = x + a t^2   ->   y = x + a
```

---

# PATTERN 8 — NORMALS

> **SHORTCUT:** Tangent slope form has `+ a/m`. Normal slope form has
> `- 2am - am^3`. If the option list contains a cubic in `m`, it is a NORMAL question.

### Q8.1
The normal to `y^2 = 4x` with slope 1 is
**(A)** y = x - 3  **(B)** y = x + 3  **(C)** y = x - 1  **(D)** y = x + 1

**ANSWER: (A)**
```
  a = 1 , m = 1 :   y = m x - 2am - a m^3 = x - 2 - 1 = x - 3
```

---

### Q8.2
The foot of the normal of slope 2 to `y^2 = 8x` is
**(A)** (8, -8)  **(B)** (8, 8)  **(C)** (2, -4)  **(D)** (4, -8)

**ANSWER: (A)**
```
  a = 2 , m = 2 :   ( a m^2 , -2 a m ) = ( 8 , -8 )
  Check: (-8)^2 = 64 = 8(8) ✓
```

---

### Q8.3
The normal at `(1, 2)` to `y^2 = 4x` meets the curve again at
**(A)** (9, -6)  **(B)** (4, -4)  **(C)** (9, 6)  **(D)** (1, -2)

**ANSWER: (A)**
```
  a = 1, t1 = 1.   t2 = -t1 - 2/t1 = -3   ->   ( 9 , -6 )
  Check: normal is x + y - 3 = 0; 9 + (-6) - 3 = 0 ✓
```

---

### Q8.4
If three normals drawn from a point to `y^2 = 4ax` have slopes `m1, m2, m3`, then
`m1 + m2 + m3` equals
**(A)** 0  **(B)** 1  **(C)** -k/a  **(D)** (2a - h)/a

**ANSWER: (A)**
```
  a m^3 + ( 2a - h ) m + k = 0 has NO m^2 term, so the sum of the roots is 0.
```
> **SHORTCUT:** Same for parameters: `t1 + t2 + t3 = 0`. Any question about three
> concurrent normals starts here.

---

### Q8.5
A normal chord of `y^2 = 4ax` subtends a right angle at the vertex. Its parameter
`t1` satisfies
**(A)** t1^2 = 1  **(B)** t1^2 = 2  **(C)** t1^2 = 4  **(D)** t1^2 = -2

**ANSWER: (B)**
```
  Right angle at the vertex  =>  t1 t2 = -4
  Normal chord               =>  t2 = -t1 - 2/t1

  t1 ( -t1 - 2/t1 ) = -4    ->    -t1^2 - 2 = -4    ->    t1^2 = 2
```

---

### Q8.6
The number of real normals that can be drawn from `(2, 3)` to `y^2 = 4x` is
**(A)** 0  **(B)** 1  **(C)** 2  **(D)** 3

**ANSWER: (B)**
```
  a = 1 , h = 2 , k = 3 :     m^3 + ( 2 - 2 ) m + 3 = 0   ->   m^3 = -3

  Only ONE real root ( m = -3^(1/3) ), so only ONE real normal.
  (Consistent with the rule: three real normals need h > 2a, and here h = 2a.)
```

---

# PATTERN 9 — CHORD OF CONTACT, MIDPOINT CHORD, PAIR OF TANGENTS

### Q9.1
The chord of contact of `y^2 = 4x` from `(-2, -1)` is
**(A)** 2x + y - 4 = 0  **(B)** 2x - y + 4 = 0  **(C)** x + 2y - 4 = 0  **(D)** 2x + y + 4 = 0

**ANSWER: (A)**
```
  S1 = 1 - 4(-2) = 9 > 0 ✓ outside.    a = 1 , 2a = 2
  T = 0 :   y(-1) = 2( x - 2 )   ->   -y = 2x - 4   ->   2x + y - 4 = 0
```

---

### Q9.2
The chord of `y^2 = 4x` whose midpoint is `(1, 1)` is
**(A)** 2x - y - 1 = 0  **(B)** x - 2y + 1 = 0  **(C)** 2x + y - 3 = 0  **(D)** x - y = 0

**ANSWER: (A)**
```
  S1 = 1 - 4 = -3 < 0 ✓ inside.
  T = S1 :   y(1) - 2( x + 1 ) = -3
             y - 2x - 2 = -3      ->      2x - y - 1 = 0

  Check: x = (y+1)/2 gives y^2 = 2(y + 1), i.e. y^2 - 2y - 2 = 0,
  sum of roots 2, mean 1 ✓ matches the midpoint's y.
```

---

### Q9.3
The pair of tangents drawn from a point on the **directrix** of a parabola are
**(A)** parallel  **(B)** perpendicular  **(C)** coincident  **(D)** imaginary

**ANSWER: (B)**
> **SHORTCUT:** Directrix ⇒ `t1 t2 = -1` ⇒ slopes multiply to −1.
> In the combined equation `S S1 = T^2` this shows up as `a + b = 0`.

---

### Q9.4
The locus of the midpoints of chords of `y^2 = 4ax` that are parallel to the line
`y = m x` is
**(A)** y = 2a/m  **(B)** x = 2a/m  **(C)** y = a/m  **(D)** y = m/(2a)

**ANSWER: (A)**
```
  Slope of the chord with midpoint (x1,y1) is 2a / y1.
  Parallel to y = mx  =>  2a / y1 = m  =>  y1 = 2a / m

  LOCUS:  y = 2a / m , a straight line PARALLEL TO THE AXIS.
```

---

# PATTERN 10 — LOCI AND INTERSECTION-OF-TANGENTS RESULTS

> **SHORTCUT:** Tangents at `t1` and `t2` always meet at
> `( a t1 t2 , a(t1 + t2) )`. So `x` is controlled by the **product** and `y` by the
> **sum**. Read the condition, decide whether it fixes the product or the sum, and
> the locus falls out in one line.

### Q10.1
The locus of the midpoints of focal chords of `y^2 = 4ax` is
**(A)** y^2 = 2a(x - a)  **(B)** y^2 = a(x - 2a)  **(C)** y^2 = 4a(x - a)  **(D)** y^2 = 2a(x + a)

**ANSWER: (A)**
```
  T = S1 through ( a , 0 ):
       -2a ( a + x1 ) = y1^2 - 4a x1     ->     y1^2 = 2a x1 - 2a^2

  LOCUS:  y^2 = 2a ( x - a )
```

---

### Q10.2
If the tangents at `t1` and `t2` on `y^2 = 4ax` meet on the line `x = 2a`, then
`t1 t2` equals
**(A)** 1  **(B)** 2  **(C)** -1  **(D)** -2

**ANSWER: (B)**
```
  Meeting point x-coordinate = a t1 t2 = 2a   ->   t1 t2 = 2
```

---

### Q10.3
The locus of the point of intersection of the tangents at the ends of a chord that
subtends a right angle at the vertex of `y^2 = 4ax` is
**(A)** x = 4a  **(B)** x = -4a  **(C)** y = 4a  **(D)** x = -a

**ANSWER: (B)**
```
  Right angle at the vertex  =>  t1 t2 = -4
  x = a t1 t2 = -4a          (a straight line parallel to the directrix)
```

---

### Q10.4
Tangents drawn from `P` to `y^2 = 4ax` make angles `th1, th2` with the axis with
`tan th1 + tan th2 = 2`. Then `P` lies on
**(A)** y = 2x  **(B)** y = x/2  **(C)** x = 2y  **(D)** y = 2

**ANSWER: (A)**
```
  Tangent y = mx + a/m through ( x1 , y1 ):     x1 m^2 - y1 m + a = 0

  m1 + m2 = y1 / x1 = 2      ->      y1 = 2 x1      ->      y = 2x
```

---

# PATTERN 11 — IDENTIFY THE CONIC

### Q11.1
The eccentricity of a parabola is
**(A)** 0  **(B)** less than 1  **(C)** 1  **(D)** greater than 1

**ANSWER: (C)**

---

### Q11.2
`x^2 + 2xy + y^2 + 2x + 3y = 0` represents
**(A)** a circle  **(B)** a parabola  **(C)** an ellipse  **(D)** a hyperbola

**ANSWER: (B)**
```
  a = 1 , h = 1 , b = 1 , g = 1 , f = 3/2 , c = 0

  h^2 - ab = 1 - 1 = 0                                    (parabola or degenerate)

  Delta = abc + 2fgh - af^2 - bg^2 - ch^2
        = 0 + 2(3/2)(1)(1) - (1)(9/4) - (1)(1) - 0
        = 3 - 9/4 - 1 = -1/4   !=  0                       ->   PARABOLA
```

---

### Q11.3
The conic `9x^2 + 4y^2 - 12xy + 68x - 54y + 153 = 0` is
**(A)** an ellipse  **(B)** a hyperbola  **(C)** a parabola  **(D)** a pair of lines

**ANSWER: (C)**
```
  a = 9 , b = 4 , h = -6 :  h^2 - ab = 36 - 36 = 0
  Delta = -169 != 0        ->   PARABOLA
```

---

### Q11.4
If `S P / P M = e` with `S` a fixed point and `PM` the distance to a fixed line,
the curve is a parabola when
**(A)** e = 0  **(B)** e = 1  **(C)** 0 < e < 1  **(D)** e > 1

**ANSWER: (B)**

---

# PATTERN 12 — MIXED / TWO-STEP QUESTIONS

### Q12.1
The common tangents to `x^2 + y^2 = 2a^2` and `y^2 = 8ax` are
**(A)** y = ±(x + 2a)  **(B)** y = ±(x - 2a)  **(C)** y = ±(2x + a)  **(D)** y = ±x

**ANSWER: (A)**
```
  For y^2 = 8ax , A = 2a. Tangent: m x - y + 2a/m = 0.
  Distance from (0,0) = radius sqrt(2) a :

        ( 2a/m )^2 = 2a^2 ( m^2 + 1 )   ->   m^4 + m^2 - 2 = 0
        ( m^2 + 2 )( m^2 - 1 ) = 0      ->   m = ± 1

  m = 1  :  y = x + 2a          m = -1 :  y = -x - 2a
```

---

### Q12.2
The tangent at `(4, 4)` to `y^2 = 4x` meets the x-axis at
**(A)** (-4, 0)  **(B)** (4, 0)  **(C)** (-2, 0)  **(D)** (0, 0)

**ANSWER: (A)**
```
  a = 1 , t = y1/(2a) = 2.   Tangent:  t y = x + a t^2   ->   2y = x + 4
  At y = 0 :  x = -4   ->   ( -4 , 0 )
```
> **SHORTCUT:** The tangent at `t` always cuts the axis at `(-a t^2, 0)` — the
> mirror image of the point's abscissa. Hence `ST = SP`, which is exactly why the
> reflection property works.

---

### Q12.3
A parabolic dish antenna is 8 m across at its rim and 2 m deep at the centre.
The receiver must be placed at the focus, at a distance from the vertex of
**(A)** 1 m  **(B)** 2 m  **(C)** 4 m  **(D)** 0.5 m

**ANSWER: (B)**
```
  Put the vertex at the origin, axis along the y-axis:  x^2 = 4 a y
  The rim point is ( 4 , 2 )  ( half of 8 across, 2 deep ):

        16 = 4a ( 2 )     ->     4a = 8     ->     a = 2

  The receiver goes 2 m from the vertex, on the axis.
```

---

### Q12.4
The tangents at the ends of the latus rectum of `y^2 = 4ax` meet at
**(A)** (a, 0)  **(B)** (-a, 0)  **(C)** (0, 0)  **(D)** (-a, 2a)

**ANSWER: (B)**
```
  Ends of LR are t = 1 and t = -1.  Meeting point ( a t1 t2 , a(t1 + t2) )
                                                  = ( -a , 0 )
  i.e. the foot of the directrix. (And the tangents are perpendicular ✓)
```

---

### Q12.5
If `(2, 0)` is the vertex and the y-axis is the directrix of a parabola, its
equation is
**(A)** y^2 = 8(x - 2)  **(B)** y^2 = 8(x + 2)  **(C)** y^2 = 4(x - 2)  **(D)** x^2 = 8(y - 2)

**ANSWER: (A)**
```
  Vertex ( 2 , 0 ), directrix x = 0, so a = 2 and the focus is ( 4 , 0 ).
  ( y - 0 )^2 = 4(2)( x - 2 )    ->    y^2 = 8 ( x - 2 )
```

---

### Q12.6
The axis of the parabola `y^2 - 6y - 2x + 11 = 0` is
**(A)** y = 3  **(B)** x = 3  **(C)** y = -3  **(D)** x = 1

**ANSWER: (A)**
```
  y^2 - 6y + 9 = 2x - 11 + 9   ->   ( y - 3 )^2 = 2 ( x - 1 )
  Vertex ( 1 , 3 ) , axis  y = 3 , 4a = 2 -> a = 1/2 , focus ( 3/2 , 3 )
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +---------------------------------------+----------------------------------------+
  |  IF YOU SEE THIS ...                  |  DO THIS IMMEDIATELY                   |
  +---------------------------------------+----------------------------------------+
  |  Any parabola equation                |  Make the squared term's coefficient 1,|
  |                                       |  then read 4a. Write a = 4a/4.         |
  +---------------------------------------+----------------------------------------+
  |  "length of the latus rectum"         |  Answer is 4a = the coefficient itself.|
  |                                       |  Do NOT compute a first.               |
  +---------------------------------------+----------------------------------------+
  |  y^2 = ...                            |  Horizontal axis. Focus (±a, 0).       |
  |  x^2 = ...                            |  Vertical axis.   Focus (0, ±a).       |
  +---------------------------------------+----------------------------------------+
  |  A minus sign on the right            |  Only the DIRECTION flips. All lengths |
  |                                       |  stay positive.                        |
  +---------------------------------------+----------------------------------------+
  |  Both x^2 and x (or y^2 and y)        |  COMPLETE THE SQUARE. Nothing else     |
  |                                       |  will work.                            |
  +---------------------------------------+----------------------------------------+
  |  "focal distance"                     |  SP = x1 + a. One line.                |
  +---------------------------------------+----------------------------------------+
  |  "focal chord"                        |  Write t1 t2 = -1 first.               |
  +---------------------------------------+----------------------------------------+
  |  "length of a focal chord"            |  a(t + 1/t)^2 , or 4a cosec^2(theta).  |
  |                                       |  Minimum is 4a.                        |
  +---------------------------------------+----------------------------------------+
  |  1/SP + 1/SQ appears anywhere         |  It equals 1/a. Instant answer.        |
  +---------------------------------------+----------------------------------------+
  |  "touches" / "is a tangent"           |  c = a/m , contact (a/m^2, 2a/m).      |
  +---------------------------------------+----------------------------------------+
  |  Line given as lx + my + n = 0        |  Condition is ln = am^2. Do not        |
  |                                       |  rearrange, just substitute.           |
  +---------------------------------------+----------------------------------------+
  |  Options contain a CUBIC in m         |  It is a NORMAL question:              |
  |                                       |  y = mx - 2am - am^3.                  |
  +---------------------------------------+----------------------------------------+
  |  "normal meets the curve again"       |  t2 = -t1 - 2/t1.                      |
  +---------------------------------------+----------------------------------------+
  |  "three normals" / "concurrent"       |  am^3 + (2a-h)m + k = 0, so            |
  |                                       |  m1+m2+m3 = 0 and t1+t2+t3 = 0.        |
  +---------------------------------------+----------------------------------------+
  |  "perpendicular tangents"             |  They meet on the DIRECTRIX, x = -a.   |
  +---------------------------------------+----------------------------------------+
  |  Tangents at t1 and t2                |  Meet at ( a t1t2 , a(t1+t2) ).        |
  |                                       |  x from the PRODUCT, y from the SUM.   |
  +---------------------------------------+----------------------------------------+
  |  "right angle at the vertex"          |  t1 t2 = -4; the chord passes through  |
  |                                       |  the fixed point (4a, 0).              |
  +---------------------------------------+----------------------------------------+
  |  "chord of contact"                   |  T = 0.                                |
  |  "chord with midpoint"                |  T = S1.                               |
  |  "pair of tangents"                   |  S S1 = T^2.                           |
  +---------------------------------------+----------------------------------------+
  |  "how many tangents from P"           |  S1 > 0 -> 2 ; S1 = 0 -> 1 ;           |
  |                                       |  S1 < 0 -> 0.                          |
  +---------------------------------------+----------------------------------------+
  |  A general 2nd degree equation        |  h^2 - ab = 0 AND Delta != 0           |
  |                                       |  -> parabola.                          |
  +---------------------------------------+----------------------------------------+
  |  A word problem (dish, headlight,     |  Vertex at the origin, axis along a    |
  |  arch, cable, torch)                  |  coordinate axis, plug in ONE rim      |
  |                                       |  point to find 4a.                     |
  +---------------------------------------+----------------------------------------+
  |  Nothing works and time is short      |  EAPCET: no negative marking. Pick the |
  |  (EAPCET only)                        |  option whose dimensions/sign match    |
  |                                       |  and MOVE ON. Never leave a blank.     |
  +---------------------------------------+----------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  30-SECOND SANITY CHECKS THAT CATCH MOST WRONG OPTIONS                   |
  |                                                                          |
  |   *  The focus must be INSIDE the curve; the directrix OUTSIDE.          |
  |   *  The vertex is exactly halfway between them.                         |
  |   *  A directrix is an EQUATION; a focus is a POINT. If the option       |
  |      type is wrong, eliminate it instantly.                              |
  |   *  Every point you compute must satisfy the original equation.         |
  |      Substitute it back — it takes five seconds.                         |
  |   *  Any length (latus rectum, focal chord) must be POSITIVE.            |
  +--------------------------------------------------------------------------+
```
