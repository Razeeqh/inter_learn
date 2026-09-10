# Three Dimensional Coordinates — Concepts, From Zero

**Maths 1B · Chapter 5**

Nothing here needs anything you have not already met. If you can find the distance between
two points on graph paper, you can do this whole chapter. Read slowly, copy every diagram
onto paper by hand, and do the worked examples yourself before reading the solution.

---

# TOPIC 1 — WHY THREE NUMBERS?

In Class 10 you described a point on a flat sheet with **two** numbers, `P(x, y)`.
Flat is not enough for the real world. A fly buzzing in your room is not on the floor —
it is somewhere **above** the floor.

So we add a third number.

```
     ONE number   ->   a point on a LINE            P(x)
     TWO numbers  ->   a point on a SHEET           P(x, y)
     THREE numbers->   a point in a ROOM (SPACE)    P(x, y, z)
```

**The room analogy — use it for the whole chapter.**

```
   Stand in the corner of your room where two walls meet the floor.
   That corner is the ORIGIN  O(0, 0, 0).

     x  =  how many metres you walk ALONG the front wall
     y  =  how many metres you walk INTO the room
     z  =  how many metres you go UP from the floor

   A fly at  P(2, 3, 1)  is:
       2 m along, 3 m in, and 1 m off the floor.
```

Every single question in this chapter is about flies in a room.

---

# TOPIC 2 — THE THREE AXES

Three straight lines through the origin, each at right angles to the other two.

```
                          z  (UP)
                          |
                          |
                          |
                          |
                          |
                          |
              O           |
    ----------+-----------+------------------------->  y  (INTO the page / room)
             /            |                            (drawn going to the right)
            /             |
           /              |
          /               |
         /                |
        v
       x  (TOWARDS you, out of the page)
```

- The **x-axis** and **y-axis** and **z-axis** are perpendicular to each other, in pairs.
- Each axis has a positive direction (the arrow) and a negative direction (behind the
  origin).
- We always use the **right-handed system**: curl the fingers of your RIGHT hand from the
  positive x-axis towards the positive y-axis; your thumb points along the positive z-axis.

```
   RIGHT-HAND RULE

        thumb  =  z          fingers curl from x  to  y
          ^
          |
          |         (   )
          |        ( x -> y )
          |
```

**Points ON an axis.** If a point lies on an axis, the other two coordinates are zero.

| The point lies on | Its form | Because |
|---|---|---|
| the x-axis | `(a, 0, 0)` | you have not moved in or up |
| the y-axis | `(0, b, 0)` | you have not moved along or up |
| the z-axis | `(0, 0, c)` | you have not moved along or in |

> **TRAP:** "A point on the x-axis" does NOT mean `x = 0`. It means `y = 0` and `z = 0`.
> Students get this backwards constantly and throw away a free 2-mark question.

---

# TOPIC 3 — THE THREE COORDINATE PLANES

Take the axes two at a time. Each **pair of axes** spreads out into a flat plane.

```
   +---------------+------------------+--------------------+---------------------+
   |  NAME         |  Contains which  |  Its EQUATION      |  In the room        |
   |               |  two axes        |                    |                     |
   +---------------+------------------+--------------------+---------------------+
   |  xy - plane   |  x-axis, y-axis  |      z = 0         |  the FLOOR          |
   |  yz - plane   |  y-axis, z-axis  |      x = 0         |  the LEFT wall      |
   |  zx - plane   |  z-axis, x-axis  |      y = 0         |  the FRONT wall     |
   +---------------+------------------+--------------------+---------------------+
```

Here they are drawn:

```
                        z
                        |
             yz-PLANE   |          zx-PLANE
             (x = 0)    |          (y = 0)
          +-------------+-------------+
          |             |            /|
          |             |           / |
          |             |          /  |
          |             |         /   |
          |             |        /    |
          |    LEFT     |       /     |
          |    WALL     |      /      |
          |             |     /       |
          |             |    /  FRONT |
          |             |   /   WALL  |
          |             |  /          |
          |             | /           |
          +-------------O-------------+---------------> y
                       /|
                      / |
                     /  |
                    / xy-PLANE  (z = 0)   <---- the FLOOR
                   /    |
                  /     |
                 +------+------+
                /
               x
```

**How to read the equation of a plane here.**

```
      z = 0    means   "height is zero"      ->  you are ON the floor
      z = 5    means   "height is always 5"  ->  a ceiling 5 m up,
                                                 PARALLEL to the floor
      x = 0    ->  the yz-plane (left wall)
      x = -2   ->  a wall 2 m behind, parallel to the yz-plane
```

```
  +--------------------------------------------------------------------+
  |   THE COORDINATE PLANES        |   PLANES PARALLEL TO THEM         |
  |                                 |                                   |
  |     xy - plane   :   z = 0      |     z = c   (c any constant)      |
  |     yz - plane   :   x = 0      |     x = a                         |
  |     zx - plane   :   y = 0      |     y = b                         |
  +--------------------------------------------------------------------+

  The AXES are where two planes CROSS:

      x - axis  =  the line where  y = 0  AND  z = 0
      y - axis  =  the line where  z = 0  AND  x = 0
      z - axis  =  the line where  x = 0  AND  y = 0
```

You will meet all of this again, properly, in Chapter 7 (The Plane). For now just be able
to say "the xy-plane is `z = 0`" instantly.

---

# TOPIC 4 — THE EIGHT OCTANTS

In 2D, two axes chop the sheet into **4 quadrants**.
In 3D, three planes chop space into **8 octants**.

Think of the floor dividing the room into "above the floor" and "below the floor"
(a basement). Each of the 4 quadrants of the floor sits above one octant and below
another. `4 x 2 = 8`.

```
                              z
                              |
              II              |             I
          (-, +, +)           |         (+, +, +)
                              |
                              |
       ------------ III ------O------ IV --------------- y
              (-, -, +)      /|      (+, -, +)
                            / |
                           /  |         (the four ABOVE the floor
                          x   |          are drawn here;  the four
                              |          BELOW the floor  V..VIII
                              |          are the same but with z < 0)
```

**THE OCTANT SIGN TABLE — learn this. It is a 2-mark answer on its own.**

| Octant | x | y | z | Description |
|--------|---|---|---|---|
| **I** | + | + | + | all positive |
| **II** | − | + | + | above the floor, behind |
| **III** | − | − | + | above the floor |
| **IV** | + | − | + | above the floor |
| **V** | + | + | − | below the floor (under octant I) |
| **VI** | − | + | − | below the floor (under octant II) |
| **VII** | − | − | − | all negative (under octant III) |
| **VIII** | + | − | − | below the floor (under octant IV) |

```
  THE PATTERN — this is how you remember it without cramming:

     Octants I, II, III, IV      all have  z = +     (above the floor)
     Octants V, VI, VII, VIII    all have  z = -     (below the floor)

     and  V is directly under I,  VI under II,  VII under III,  VIII under IV.

     So:  find the octant number from the (x, y) signs first, exactly like
          a 2D quadrant, then add 4 if z is negative.

          (x,y) signs   ->   (+,+)=1   (-,+)=2   (-,-)=3   (+,-)=4
          then  z < 0   ->   add 4
```

**WORKED EXAMPLE 4.1 — name the octant.**

```
  (a)  (1, -2, 3)     x is +,  y is -   ->  quadrant 4   ;  z is +  ->  add 0
                      OCTANT IV

  (b)  (-2, -3, -1)   x is -,  y is -   ->  quadrant 3   ;  z is -  ->  add 4
                      OCTANT VII

  (c)  (2, 3, -4)     x is +,  y is +   ->  quadrant 1   ;  z is -  ->  add 4
                      OCTANT V

  (d)  (-1, 2, -3)    x is -,  y is +   ->  quadrant 2   ;  z is -  ->  add 4
                      OCTANT VI
```

> **TRAP:** A point with a ZERO in it is not in any octant — it is ON a plane or ON an axis.
> `(0, 2, 3)` lies IN the yz-plane. `(0, 0, 5)` lies ON the z-axis. If a question gives you
> such a point and asks for the octant, the correct answer is "it lies on the yz-plane /
> on the z-axis, so it is in no octant".

---

# TOPIC 5 — PROJECTIONS (THE SHADOWS OF A POINT)

Imagine a lamp shining straight down on the fly `P(x, y, z)`. Its shadow on the **floor**
is directly below it — same `x`, same `y`, but height `0`.

```
                    z
                    |
                    |        P(x, y, z)
                    |       *
                    |       |
                    |       | drop straight down
                    |       |
                    |       v
        O -----------------.-------------------> y
                  /       (x, y, 0)   <- the PROJECTION of P on the xy-plane
                 /
                x
```

**The rule is stupidly simple:**

```
  +==================================================================+
  |                                                                  |
  |   PROJECTION  =  set the coordinates that DO NOT BELONG to 0     |
  |                                                                  |
  +==================================================================+
```

- The **xy-plane** owns `x` and `y`. It does not own `z`. So kill `z` → `(x, y, 0)`.
- The **x-axis** owns only `x`. Kill `y` and `z` → `(x, 0, 0)`.

**THE FULL PROJECTION TABLE for `P(x, y, z)`**

| Project P onto | Projection | Why |
|---|---|---|
| the **x-axis** | `(x, 0, 0)` | keep x, kill y and z |
| the **y-axis** | `(0, y, 0)` | keep y, kill x and z |
| the **z-axis** | `(0, 0, z)` | keep z, kill x and y |
| the **xy-plane** (`z=0`) | `(x, y, 0)` | kill z |
| the **yz-plane** (`x=0`) | `(0, y, z)` | kill x |
| the **zx-plane** (`y=0`) | `(x, 0, z)` | kill y |
| the **origin** | `(0, 0, 0)` | kill everything |

**WORKED EXAMPLE 5.1.** Find the projections of `P(4, -3, 7)`.

```
  on the x-axis    ->  (4,  0,  0)
  on the y-axis    ->  (0, -3,  0)
  on the z-axis    ->  (0,  0,  7)

  on the xy-plane  ->  (4, -3,  0)
  on the yz-plane  ->  (0, -3,  7)
  on the zx-plane  ->  (4,  0,  7)
```

---

# TOPIC 6 — IMAGES (REFLECTIONS) OF A POINT

Now instead of a lamp, put a **mirror**. If the floor is a mirror, the fly's reflection is
the same distance BELOW the floor as the fly is above it.

```
                    z
                    |
                    |        P(x, y, z)          height  +z
                    |       *
                    |       |
        ------------+-------+----------------------> y     the MIRROR (floor, z = 0)
                   /|       |
                  / |       *
                 /  |      P'(x, y, -z)          height  -z
                x
```

**The rule, equally simple:**

```
  +==================================================================+
  |                                                                  |
  |   IMAGE  =  FLIP THE SIGN of the coordinates that DO NOT BELONG  |
  |                                                                  |
  +==================================================================+
```

- Mirror = **xy-plane**. It owns `x, y`. It does not own `z`. Flip `z` → `(x, y, -z)`.
- Mirror = **x-axis**. It owns only `x`. Flip `y` and `z` → `(x, -y, -z)`.
- Mirror = **origin**. It owns nothing. Flip everything → `(-x, -y, -z)`.

**THE FULL IMAGE TABLE for `P(x, y, z)` — memorise it, it is asked directly.**

| Reflect P in | Image | Rule |
|---|---|---|
| the **x-axis** | `(x, -y, -z)` | keep x, flip the other two |
| the **y-axis** | `(-x, y, -z)` | keep y, flip the other two |
| the **z-axis** | `(-x, -y, z)` | keep z, flip the other two |
| the **xy-plane** (`z=0`) | `(x, y, -z)` | flip z only |
| the **yz-plane** (`x=0`) | `(-x, y, z)` | flip x only |
| the **zx-plane** (`y=0`) | `(x, -y, z)` | flip y only |
| the **origin** | `(-x, -y, -z)` | flip everything |

**THE TWO TABLES SIDE BY SIDE — this is the whole idea in one box.**

```
  +-------------------+---------------------+----------------------+
  |  MIRROR / SCREEN  |   PROJECTION        |   IMAGE              |
  |                   |   (make them ZERO)  |   (make them MINUS)  |
  +-------------------+---------------------+----------------------+
  |  x - axis         |   ( x,  0,  0)      |   ( x, -y, -z)       |
  |  y - axis         |   ( 0,  y,  0)      |   (-x,  y, -z)       |
  |  z - axis         |   ( 0,  0,  z)      |   (-x, -y,  z)       |
  +-------------------+---------------------+----------------------+
  |  xy - plane       |   ( x,  y,  0)      |   ( x,  y, -z)       |
  |  yz - plane       |   ( 0,  y,  z)      |   (-x,  y,  z)       |
  |  zx - plane       |   ( x,  0,  z)      |   ( x, -y,  z)       |
  +-------------------+---------------------+----------------------+
  |  origin           |   ( 0,  0,  0)      |   (-x, -y, -z)       |
  +-------------------+---------------------+----------------------+

  NOTICE:
      AXIS   ->  ONE letter survives unchanged, TWO get treated.
      PLANE  ->  TWO letters survive unchanged, ONE gets treated.
```

**WORKED EXAMPLE 6.1.** `P(2, -5, 6)`. Find its image in (a) the xy-plane,
(b) the y-axis, (c) the origin.

```
  (a)  xy-plane owns x and y, not z.  Flip z.
             image = (2, -5, -6)

  (b)  y-axis owns only y.  Flip x and z.
             image = (-2, -5, -6)

  (c)  origin owns nothing.  Flip all three.
             image = (-2, 5, -6)
```

> **TRAP:** The most common error in the whole chapter is answering `(x, y, 0)` when the
> question said **image** (it wanted `(x, y, -z)`), or `(x, y, -z)` when it said
> **projection**. Underline the word "image" or "projection" in the question paper before
> you write anything.

**A useful extra fact.** The projection is the **midpoint** of the point and its image.

```
   P(x, y, z)   and   image P'(x, y, -z)
   midpoint  =  ( x, y, (z + (-z))/2 )  =  (x, y, 0)  =  the projection.   Correct.
```

---

# TOPIC 7 — DISTANCE OF A POINT FROM THE ORIGIN, THE AXES AND THE PLANES

## 7A. Distance from the origin

Drop `P(x, y, z)` down to its shadow `M(x, y, 0)` and use Pythagoras **twice**.

```
                    z
                    |
                    |          P(x, y, z)
                    |         *
                    |        /|
                    |       / |
                    |      /  |  z
                    |     /   |
                    |    /    |
          O         |   /     |
          +---------+--*------+---------------> y
                   /  M(x,y,0)
                  /  /
                 /  /  OM = sqrt(x^2 + y^2)      (ordinary 2D Pythagoras
                x  /                              on the floor)
                  /
     Then in the right angled triangle  O M P,  angle at M = 90 degrees:

          OP^2  =  OM^2 + MP^2
                =  (x^2 + y^2) + z^2
```

```
  +==================================================================+
  |                                                                  |
  |          OP  =  sqrt( x^2 + y^2 + z^2 )                          |
  |                                                                  |
  +==================================================================+
```

**WORKED EXAMPLE 7.1.** Distance of `P(2, 3, 6)` from the origin.

```
   OP = sqrt(4 + 9 + 36) = sqrt(49) = 7
```

**WORKED EXAMPLE 7.2.** Distance of `P(1, 2, 2)` from the origin.

```
   OP = sqrt(1 + 4 + 4) = sqrt(9) = 3
```

## 7B. Distance from an AXIS

The foot of the perpendicular from `P(x, y, z)` to the **x-axis** is `(x, 0, 0)` — that is
just the projection. So:

```
   distance from x-axis = sqrt( (x-x)^2 + (y-0)^2 + (z-0)^2 ) = sqrt(y^2 + z^2)
```

```
  +==================================================================+
  |                                                                  |
  |   Distance of P(x,y,z) from the  x - axis  =  sqrt(y^2 + z^2)    |
  |   Distance of P(x,y,z) from the  y - axis  =  sqrt(z^2 + x^2)    |
  |   Distance of P(x,y,z) from the  z - axis  =  sqrt(x^2 + y^2)    |
  |                                                                  |
  |   RULE:  DROP the letter that names the axis. Square the other   |
  |          two, add, square root.                                  |
  |                                                                  |
  +==================================================================+
```

## 7C. Distance from a PLANE

The foot of the perpendicular from `P(x, y, z)` to the **xy-plane** is `(x, y, 0)`.
The distance is just the height:

```
  +==================================================================+
  |                                                                  |
  |   Distance of P(x,y,z) from the  xy - plane  (z = 0)  =  |z|     |
  |   Distance of P(x,y,z) from the  yz - plane  (x = 0)  =  |x|     |
  |   Distance of P(x,y,z) from the  zx - plane  (y = 0)  =  |y|     |
  |                                                                  |
  |   RULE:  KEEP only the letter that is MISSING from the plane's   |
  |          name, and take its modulus.                             |
  |                                                                  |
  +==================================================================+
```

**WORKED EXAMPLE 7.3 — the complete set.** For `P(3, -2, 6)`, find every distance.

```
   From the ORIGIN     :  sqrt(9 + 4 + 36) = sqrt(49) = 7

   From the x-axis     :  drop x  ->  sqrt(4 + 36)  = sqrt(40) = 2 sqrt(10)
   From the y-axis     :  drop y  ->  sqrt(36 + 9)  = sqrt(45) = 3 sqrt(5)
   From the z-axis     :  drop z  ->  sqrt(9 + 4)   = sqrt(13)

   From the xy-plane   :  |z| = 6
   From the yz-plane   :  |x| = 3
   From the zx-plane   :  |y| = 2

   SELF-CHECK (always do this):
       (distance from x-axis)^2 + x^2  =  40 + 9 = 49 = OP^2      correct
       (distance from y-axis)^2 + y^2  =  45 + 4 = 49 = OP^2      correct
       (distance from z-axis)^2 + z^2  =  13 + 36 = 49 = OP^2     correct
```

> **TRAP:** Distance from the **x-axis** uses `y` and `z` (you throw x away).
> Distance from the **yz-plane** uses `x` only (you throw y and z away).
> They feel the same but they are opposites. The line above ("SELF-CHECK") catches the
> mistake in five seconds — use it every time.

---

# TOPIC 8 — THE DISTANCE FORMULA (the heart of the chapter)

## The derivation

Take `A(x1, y1, z1)` and `B(x2, y2, z2)`. Through A and B draw planes parallel to all
three coordinate planes. They box in a **rectangular box (cuboid)** with AB as its main
diagonal.

```
                                          B(x2, y2, z2)
                    +---------------------*
                   /|                    /|
                  / |                   / |
                 /  |                  /  |    <- edge length  |z2 - z1|
                /   |                 /   |
               +---------------------+    |
               |    |                |    |
               |    +----------------|----+
               |   /                 |   /
               |  /                  |  /   <- edge length  |y2 - y1|
               | /                   | /
               *---------------------+
          A(x1,y1,z1)
                 edge length |x2 - x1|

   The three EDGES of the box, meeting at A, have lengths

           a = |x2 - x1|      b = |y2 - y1|      c = |z2 - z1|

   For a cuboid, the space diagonal d satisfies    d^2 = a^2 + b^2 + c^2
   (Pythagoras applied twice: first across the base, then up to the top corner.)
```

```
  +==================================================================+
  |                                                                  |
  |   AB = sqrt( (x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2 )           |
  |                                                                  |
  +==================================================================+

  Everything is SQUARED, so it does not matter which point you call 1
  and which you call 2. (3 - 7)^2 = (7 - 3)^2 = 16.
```

**WORKED EXAMPLE 8.1.** Find the distance between `A(1, 2, 3)` and `B(4, 6, 15)`.

```
   x2 - x1 =  4 - 1  =  3        3^2  =   9
   y2 - y1 =  6 - 2  =  4        4^2  =  16
   z2 - z1 = 15 - 3  = 12       12^2  = 144
                                       ----
                                        169

   AB = sqrt(169) = 13
```

**WORKED EXAMPLE 8.2.** Distance between `A(2, 3, 5)` and `B(4, 9, 14)`.

```
   differences:  2, 6, 9
   squares    :  4, 36, 81   ->  sum = 121
   AB = sqrt(121) = 11
```

**WORKED EXAMPLE 8.3 — with negatives.** Distance between `P(1, -3, 4)` and `Q(-4, 1, 2)`.

```
   x:  -4 - 1  = -5     ->  25
   y:   1 - (-3) =  4   ->  16
   z:   2 - 4  = -2     ->   4
                            ----
                             45

   PQ = sqrt(45) = sqrt(9 x 5) = 3 sqrt(5)
```

> **TRAP:** `1 - (-3)` is `4`, not `-2`. Write the subtraction out fully before squaring.
> A minus sign eaten here is the single most common lost mark in this chapter.

**WORKED EXAMPLE 8.4 — find an unknown coordinate.**
The distance between `A(5, -1, 7)` and `B(x, 5, 1)` is `9`. Find `x`.

```
   (x - 5)^2 + (5 - (-1))^2 + (1 - 7)^2  =  9^2

   (x - 5)^2 + 36 + 36  =  81
   (x - 5)^2            =  9
    x - 5               =  +3  or  -3
    x                   =  8   or  2

   CHECK with x = 8 :  (3)^2 + 36 + 36 = 9 + 72 = 81,  sqrt = 9.   correct
   CHECK with x = 2 :  (-3)^2 + 36 + 36 = 81,  sqrt = 9.           correct
```

Both answers are valid. **Write both.** Dropping one loses a mark.

---

# TOPIC 9 — SHOWING THAT THREE POINTS ARE COLLINEAR

**Collinear** = all sitting on one straight line.

```
   If A, B, C lie on a line with B in the MIDDLE, then walking A -> B -> C
   is the same length as walking A -> C directly:

        A-----------B---------------C

        AB    +    BC     =    AC

   If they are NOT on a line, the detour through B is LONGER:

                    B
                   / \
                  /   \        AB + BC  >  AC        (triangle inequality)
                 /     \
        A ---------------- C
```

```
  +==================================================================+
  |                                                                  |
  |   METHOD:  compute all THREE distances AB, BC, CA.               |
  |            Find the BIGGEST one.                                 |
  |            If  (sum of the two smaller) = (the biggest)          |
  |            then the points are COLLINEAR.                        |
  |                                                                  |
  +==================================================================+
```

**WORKED EXAMPLE 9.1.** Show that `A(1, 2, 3)`, `B(7, 0, 1)`, `C(-2, 3, 4)` are collinear.

```
   AB^2 = (7-1)^2 + (0-2)^2 + (1-3)^2 = 36 + 4 + 4 = 44   ->  AB = 2 sqrt(11)
   BC^2 = (-2-7)^2 + (3-0)^2 + (4-1)^2 = 81 + 9 + 9 = 99  ->  BC = 3 sqrt(11)
   CA^2 = (1-(-2))^2 + (2-3)^2 + (3-4)^2 = 9 + 1 + 1 = 11 ->  CA =   sqrt(11)

   Biggest is BC = 3 sqrt(11).

   CA + AB = sqrt(11) + 2 sqrt(11) = 3 sqrt(11) = BC

   Hence A, B, C are COLLINEAR  (and A lies BETWEEN C and B).
```

**WORKED EXAMPLE 9.2.** Show that `A(5, 4, 2)`, `B(6, 2, -1)`, `C(8, -2, -7)` are collinear.

```
   AB^2 = 1 + 4 + 9 = 14        ->  AB =   sqrt(14)
   BC^2 = 4 + 16 + 36 = 56      ->  BC = 2 sqrt(14)
   AC^2 = 9 + 36 + 81 = 126     ->  AC = 3 sqrt(14)

   AB + BC = sqrt(14) + 2 sqrt(14) = 3 sqrt(14) = AC     ->  COLLINEAR
   (B lies between A and C.)
```

**WORKED EXAMPLE 9.3 — B turns out to be the midpoint.**
`A(3, -2, 4)`, `B(1, 1, 1)`, `C(-1, 4, -2)`.

```
   AB^2 = (1-3)^2 + (1+2)^2 + (1-4)^2 = 4 + 9 + 9 = 22
   BC^2 = (-1-1)^2 + (4-1)^2 + (-2-1)^2 = 4 + 9 + 9 = 22
   AC^2 = (-1-3)^2 + (4+2)^2 + (-2-4)^2 = 16 + 36 + 36 = 88

   AB = BC = sqrt(22),   AC = sqrt(88) = 2 sqrt(22)

   AB + BC = 2 sqrt(22) = AC   ->  COLLINEAR, and B is the MIDPOINT of AC.

   Confirm with the midpoint formula:
       ((3 + (-1))/2, (-2 + 4)/2, (4 + (-2))/2) = (1, 1, 1) = B.   correct
```

> **TRAP — "nearly collinear" points.** Take `A(1,2,3)`, `B(2,3,4)`, `C(4,5,7)`.
> `AB = sqrt(3) = 1.732`, `BC = sqrt(17) = 4.123`, `AC = sqrt(34) = 5.831`.
> `AB + BC = 5.855`, which is **not** `5.831`. They are NOT collinear.
> Never eyeball it. Never round off and then declare equality. Keep the surds exact:
> `sqrt(3) + sqrt(17)` is not `sqrt(34)`, and that is the honest proof.

**The alternative method (section formula).** Three points are collinear if one of them
divides the join of the other two in some ratio. Find the ratio from the `x`-equation,
then CHECK it in the `y`- and `z`-equations.

```
   A(2, -3, 4),  B(-1, 2, 1),  C(0, 1/3, 2).   Does C divide AB?

   Let C divide AB in the ratio k : 1.

   x :   (k(-1) + 1(2)) / (k + 1) = 0    ->   -k + 2 = 0   ->   k = 2

   Now TEST k = 2 in y and z:
   y :   (2(2) + 1(-3)) / 3 = (4 - 3)/3 = 1/3      matches
   z :   (2(1) + 1(4)) / 3  = 6/3 = 2               matches

   All three agree, so C divides AB internally in 2 : 1  ->  A, B, C are COLLINEAR.
```

---

# TOPIC 10 — WHAT KIND OF TRIANGLE DO THREE POINTS MAKE?

Compute `AB^2`, `BC^2`, `CA^2` (keep them SQUARED — it saves surds) and then read the
answer off this table.

```
  +----------------------------------------+---------------------------------+
  |  WHAT YOU FIND                         |  THE TRIANGLE IS                |
  +----------------------------------------+---------------------------------+
  |  all three squares EQUAL               |  EQUILATERAL                    |
  |  exactly two squares equal             |  ISOSCELES                      |
  |  (small)^2 + (middle)^2 = (big)^2      |  RIGHT ANGLED                   |
  |     -> the right angle is at the        |  (at the vertex where the two   |
  |        vertex shared by the two          |   short sides meet)            |
  |        SHORT sides                       |                                |
  |  two equal AND Pythagoras works        |  RIGHT ANGLED ISOSCELES         |
  |  the three lengths satisfy             |  NOT a triangle at all -        |
  |     small + middle = big               |  the points are COLLINEAR       |
  +----------------------------------------+---------------------------------+
```

**WORKED EXAMPLE 10.1 — equilateral.**
Show that `A(1, 2, 3)`, `B(2, 3, 1)`, `C(3, 1, 2)` form an equilateral triangle.

```
   AB^2 = (2-1)^2 + (3-2)^2 + (1-3)^2 =  1 + 1 + 4 = 6
   BC^2 = (3-2)^2 + (1-3)^2 + (2-1)^2 =  1 + 4 + 1 = 6
   CA^2 = (1-3)^2 + (2-1)^2 + (3-2)^2 =  4 + 1 + 1 = 6

   AB = BC = CA = sqrt(6)      ->  EQUILATERAL,  side sqrt(6).
```

**WORKED EXAMPLE 10.2 — right angled AND isosceles.**
Show that `A(0, 7, 10)`, `B(-1, 6, 6)`, `C(-4, 9, 6)` form a right angled isosceles
triangle.

```
   AB^2 = (-1-0)^2 + (6-7)^2 + (6-10)^2 =  1 +  1 + 16 = 18
   BC^2 = (-4+1)^2 + (9-6)^2 + (6-6)^2  =  9 +  9 +  0 = 18
   CA^2 = (0+4)^2  + (7-9)^2 + (10-6)^2 = 16 +  4 + 16 = 36

   AB^2 = BC^2       ->  ISOSCELES  (AB = BC = 3 sqrt(2))

   AB^2 + BC^2 = 18 + 18 = 36 = CA^2
                     ->  RIGHT ANGLED, and the right angle is at B,
                         because AB and BC are the two sides meeting at B.

   Conclusion: right angled isosceles triangle, right angle at B.
```

**WORKED EXAMPLE 10.3 — isosceles only (not right angled).**
`A(0, 0, 0)`, `B(6, 0, 0)`, `C(3, 2, 3)`.

```
   AB^2 = 36
   BC^2 = (3-6)^2 + 2^2 + 3^2 = 9 + 4 + 9 = 22
   CA^2 = 9 + 4 + 9 = 22

   BC^2 = CA^2   ->  ISOSCELES  (CB = CA = sqrt(22))

   Is it right angled?   22 + 22 = 44,  which is NOT 36.
                          22 + 36 = 58,  which is NOT 22.
   No. So it is ISOSCELES ONLY.
```

> **TRAP:** Students find two equal sides, write "isosceles", and stop. If the question
> says "find the type of triangle", you must ALSO test Pythagoras. "Right angled
> isosceles" earns full marks; "isosceles" alone loses one.

---

# TOPIC 11 — THE SECTION FORMULA

## What it is asking

A point `P` sits on the segment `AB` and chops it so that `AP : PB = m : n`.
Where exactly is `P`?

```
       A ------------- P --------------------- B
       |<---- m ----->|<-------- n ---------->|

       (P is INSIDE  ->  INTERNAL division)


       A ---------------------- B ------------ P
       |<--------- n ---------->|
       |<------------------ m ------------------>|

       (P is OUTSIDE, beyond B  ->  EXTERNAL division)
```

## The derivation (internal case)

Drop perpendiculars from A, P, B onto the **x-axis**. Their feet are `L(x1,0,0)`,
`M(x,0,0)`, `N(x2,0,0)`.

```
       A *
         |\
         | \  m
         |  \
         |   * P
         |   |\
         |   | \   n
         |   |  \
         |   |   * B
         |   |   |
     ----+---+---+------------------ x-axis
         L   M   N
        x1   x    x2

   Drawing a line through A parallel to LN and a line through P parallel to LN
   creates two SIMILAR triangles (all their angles are equal, because the
   perpendiculars are parallel). Similar triangles give

           AP        x  - x1
          ----   =  ---------          i.e.     m (x2 - x) = n (x - x1)
           PB        x2 - x

   Expand:      m x2 - m x = n x - n x1
   Collect:     m x2 + n x1 = x (m + n)

                          m x2 + n x1
                 x   =   -------------
                            m + n
```

Repeat the identical argument with perpendiculars onto the y-axis and the z-axis and you
get the other two coordinates. That is the whole proof.

```
  +==================================================================+
  |                                                                  |
  |   INTERNAL DIVISION in the ratio  m : n                          |
  |                                                                  |
  |         ( m x2 + n x1    m y2 + n y1    m z2 + n z1 )            |
  |    P =  ( ----------- ,  ----------- ,  ----------- )            |
  |         (    m + n          m + n          m + n    )            |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |   EXTERNAL DIVISION in the ratio  m : n                          |
  |   (identical, but every + becomes a -)                           |
  |                                                                  |
  |         ( m x2 - n x1    m y2 - n y1    m z2 - n z1 )            |
  |    P =  ( ----------- ,  ----------- ,  ----------- )            |
  |         (    m - n          m - n          m - n    )            |
  |                                                                  |
  +------------------------------------------------------------------+
  |                                                                  |
  |   MIDPOINT   (put m = n = 1)                                     |
  |                                                                  |
  |         ( x1 + x2    y1 + y2    z1 + z2 )                        |
  |    M =  ( ------- ,  ------- ,  ------- )                        |
  |         (    2          2          2    )                        |
  |                                                                  |
  +==================================================================+

  REMEMBER IT AS:   "m goes with the SECOND point, n goes with the FIRST."
                    They CROSS OVER. m2 + n1.
```

**A neat shortcut:** external division in the ratio `m : n` is the SAME as internal
division in the ratio `m : (-n)`. So you only ever have to remember one formula and be
willing to write a minus sign.

**WORKED EXAMPLE 11.1 — internal.**
Find the point dividing `A(2, -1, 4)` and `B(4, 3, 2)` internally in the ratio `1 : 3`.

```
   m = 1 (with B),  n = 3 (with A),  m + n = 4

   x = (1(4) + 3(2)) / 4 = (4 + 6)/4  = 10/4 = 5/2
   y = (1(3) + 3(-1))/ 4 = (3 - 3)/4  =  0
   z = (1(2) + 3(4)) / 4 = (2 + 12)/4 = 14/4 = 7/2

   P = (5/2, 0, 7/2)

   CHECK with the distance formula (always worth 20 seconds):
       AP^2 = (5/2 - 2)^2 + (0 + 1)^2 + (7/2 - 4)^2 = 1/4 + 1 + 1/4 = 3/2
       PB^2 = (4 - 5/2)^2 + (3 - 0)^2 + (2 - 7/2)^2 = 9/4 + 9 + 9/4 = 27/2

       AP^2 : PB^2 = (3/2) : (27/2) = 1 : 9   ->   AP : PB = 1 : 3   correct
```

**WORKED EXAMPLE 11.2 — external.**
Find the point dividing `A(2, -3, 4)` and `B(4, -1, 2)` externally in the ratio `2 : 1`.

```
   m = 2 (with B),  n = 1 (with A),  m - n = 1

   x = (2(4) - 1(2)) / 1 = 8 - 2 = 6
   y = (2(-1) - 1(-3))/1 = -2 + 3 = 1
   z = (2(2) - 1(4)) / 1 = 4 - 4 = 0

   P = (6, 1, 0)

   CHECK:  AB vector = (2, 2, -2).   AP vector = (6-2, 1+3, 0-4) = (4, 4, -4) = 2 x AB.
           So P is twice as far as B, in the same direction:
           AP : PB = 2 : 1 externally.   correct
```

**WORKED EXAMPLE 11.3 — find the RATIO, given the point.**
In what ratio does `P(5, 4, -6)` divide the join of `A(3, 2, -4)` and `B(9, 8, -10)`?

```
   Let the ratio be  k : 1.   Use the x-coordinate only (it is the easiest):

        (9k + 3) / (k + 1) = 5
         9k + 3 = 5k + 5
         4k = 2
         k = 1/2

   So the ratio is  1/2 : 1  =  1 : 2.

   k is POSITIVE  ->  the division is INTERNAL.

   VERIFY in y :  (8(1/2) + 2) / (3/2) = 6 / 1.5 = 4     matches
   VERIFY in z :  (-10(1/2) - 4) / (3/2) = -9 / 1.5 = -6 matches

   ANSWER: P divides AB internally in the ratio 1 : 2.
```

```
  +==================================================================+
  |   READING THE SIGN OF k                                          |
  |                                                                  |
  |     k > 0   ->   INTERNAL division (P lies between A and B)      |
  |     k < 0   ->   EXTERNAL division (P lies outside the segment)  |
  |                                                                  |
  |   A ratio like  -3 : 2  is written as "externally in 3 : 2".     |
  +==================================================================+
```

---

# TOPIC 12 — IN WHAT RATIO DOES A COORDINATE PLANE CUT AB?

This is a favourite 2-mark question and it has a **one-line shortcut**.

The `yz`-plane is `x = 0`. So the cutting point has `x = 0`. Put that into the section
formula:

```
        m x2 + n x1
        -----------  =  0      ->    m x2 + n x1 = 0     ->    m : n  =  -x1 : x2
           m + n
```

```
  +==================================================================+
  |                                                                  |
  |   For A(x1,y1,z1) and B(x2,y2,z2) :                              |
  |                                                                  |
  |     the  yz - plane (x = 0)  divides AB in the ratio  -x1 : x2   |
  |     the  zx - plane (y = 0)  divides AB in the ratio  -y1 : y2   |
  |     the  xy - plane (z = 0)  divides AB in the ratio  -z1 : z2   |
  |                                                                  |
  |   MEMORY:  "MINUS the FIRST one, to the SECOND one",             |
  |            using the coordinate that the plane KILLS.            |
  |                                                                  |
  |   If the ratio comes out POSITIVE  ->  the plane cuts the        |
  |   segment INTERNALLY (A and B are on opposite sides).            |
  |   If NEGATIVE  ->  EXTERNALLY (A and B are on the same side,     |
  |   so the plane misses the segment itself).                       |
  +==================================================================+
```

**WORKED EXAMPLE 12.1.** In what ratio does the `yz`-plane divide the join of
`A(2, 4, 5)` and `B(3, 5, -4)`?

```
   Ratio = -x1 : x2 = -2 : 3        ->  EXTERNALLY in the ratio 2 : 3.

   CHECK:  take m = -2, n = 3.   m + n = 1.
           x = (-2(3) + 3(2)) / 1 = (-6 + 6)/1 = 0      correct, it IS on x = 0.
```

**WORKED EXAMPLE 12.2.** In what ratio does the `xy`-plane divide the join of
`A(-3, 4, -8)` and `B(5, -6, 4)`? Also find the point.

```
   Ratio = -z1 : z2 = -(-8) : 4 = 8 : 4 = 2 : 1     ->  INTERNALLY (positive).

   The point, with m = 2 (with B) and n = 1 (with A) :
       x = (2(5) + 1(-3)) / 3 = (10 - 3)/3 =  7/3
       y = (2(-6) + 1(4)) / 3 = (-12 + 4)/3 = -8/3
       z = (2(4) + 1(-8)) / 3 = (8 - 8)/3   =  0      correct, on z = 0.

   Point = (7/3, -8/3, 0).
```

**WORKED EXAMPLE 12.3.** In what ratio does the `zx`-plane divide the join of
`A(-2, 3, 4)` and `B(1, 2, 3)`?

```
   Ratio = -y1 : y2 = -3 : 2      ->  EXTERNALLY in 3 : 2.

   CHECK:  m = -3, n = 2, m + n = -1.
           y = (-3(2) + 2(3)) / (-1) = (-6 + 6)/(-1) = 0      correct.
```

---

# TOPIC 13 — CENTROIDS

## 13A. Centroid of a TRIANGLE

The **centroid** `G` is where the three medians meet. It divides each median in the
ratio `2 : 1` from the vertex.

```
              A
              |\
              | \
              |  \
              |   \
              |  G *          AG : GD = 2 : 1
              |     \
              |      \
              B---D---C       D is the MIDPOINT of BC
```

```
  +==================================================================+
  |                                                                  |
  |     ( x1 + x2 + x3     y1 + y2 + y3     z1 + z2 + z3 )           |
  |  G =( -------------- , -------------- , -------------- )         |
  |     (       3                3                3       )          |
  |                                                                  |
  |             " ADD THEM UP, DIVIDE BY 3 "                         |
  +==================================================================+
```

**WORKED EXAMPLE 13.1.** Centroid of the triangle `A(1,2,3)`, `B(2,3,1)`, `C(3,1,2)`.

```
   x: (1 + 2 + 3)/3 = 2
   y: (2 + 3 + 1)/3 = 2
   z: (3 + 1 + 2)/3 = 2

   G = (2, 2, 2)

   (This is the equilateral triangle from Example 10.1, so G should be the same
    distance from all three vertices. Check:
       GA^2 = 1 + 0 + 1 = 2 ,  GB^2 = 0 + 1 + 1 = 2 ,  GC^2 = 1 + 1 + 0 = 2.   correct)
```

**WORKED EXAMPLE 13.2 — find the missing vertex.**
Two vertices of a triangle are `(3, 2, -4)` and `(-1, 4, 2)`, and the centroid is
`(1, 3, 1)`. Find the third vertex.

```
   Let the third vertex be (a, b, c).

   (3 + (-1) + a)/3 = 1   ->   2 + a = 3    ->   a = 1
   (2 +   4  + b)/3 = 3   ->   6 + b = 9    ->   b = 3
   (-4 +  2  + c)/3 = 1   ->  -2 + c = 3    ->   c = 5

   Third vertex = (1, 3, 5)

   CHECK: (3 - 1 + 1)/3 = 1,  (2 + 4 + 3)/3 = 3,  (-4 + 2 + 5)/3 = 1.   correct
```

## 13B. Centroid of a TETRAHEDRON

A **tetrahedron** is a triangular pyramid: 4 corners, 4 triangular faces, 6 edges.
Its centroid is the balance point of the four vertices.

```
                       D
                      /|\
                     / | \
                    /  |  \
                   /   |   \
                  /    |    \
                 /     |     \
                A - - -|- - - -C
                 \     |     /
                  \    |    /
                   \   |   /
                    \  |  /
                     \ | /
                       B
```

```
  +==================================================================+
  |                                                                  |
  |     ( x1+x2+x3+x4    y1+y2+y3+y4    z1+z2+z3+z4 )                |
  |  G =( ----------- ,  ----------- ,  ----------- )                |
  |     (      4              4              4      )                |
  |                                                                  |
  |             " ADD ALL FOUR, DIVIDE BY 4 "                        |
  |                                                                  |
  |  (It also divides the line joining any vertex to the centroid    |
  |   of the opposite FACE in the ratio 3 : 1.)                      |
  +==================================================================+
```

**WORKED EXAMPLE 13.3.** Centroid of the tetrahedron `(0,0,0)`, `(4,0,0)`, `(0,4,0)`,
`(0,0,4)`.

```
   x: (0 + 4 + 0 + 0)/4 = 1
   y: (0 + 0 + 4 + 0)/4 = 1
   z: (0 + 0 + 0 + 4)/4 = 1

   G = (1, 1, 1)
```

**WORKED EXAMPLE 13.4 — the classic "find the 4th vertex".**
Three vertices of a tetrahedron are `(3, 2, -1)`, `(4, 1, 1)`, `(6, 2, 5)` and the
centroid is `(4, 2, 2)`. Find the fourth vertex.

```
   Sum of ALL FOUR vertices = 4 x centroid = (16, 8, 8).

   Sum of the three given   = (3+4+6, 2+1+2, -1+1+5) = (13, 5, 5).

   Fourth vertex = (16, 8, 8) - (13, 5, 5) = (3, 3, 3)

   CHECK: (3+4+6+3)/4 = 16/4 = 4    correct
          (2+1+2+3)/4 =  8/4 = 2    correct
          (-1+1+5+3)/4 = 8/4 = 2    correct
```

## 13C. Incentre of a triangle

The **incentre** `I` is the centre of the circle that fits snugly inside the triangle,
touching all three sides. It is a **weighted** average — each vertex is weighted by the
length of the side OPPOSITE to it.

```
   In triangle ABC, name the sides the standard way:

           a = BC   (opposite A)
           b = CA   (opposite B)
           c = AB   (opposite C)
```

```
  +==================================================================+
  |                                                                  |
  |     ( a x1 + b x2 + c x3    a y1 + b y2 + c y3                   |
  |  I =( ------------------- , ------------------- ,                |
  |     (      a + b + c              a + b + c                      |
  |                                                                  |
  |                            a z1 + b z2 + c z3 )                  |
  |                            ------------------- )                 |
  |                                  a + b + c     )                 |
  |                                                                  |
  |  NOTE: if a = b = c (equilateral), this collapses to the         |
  |  ordinary centroid (sum / 3).                                    |
  +==================================================================+
```

**WORKED EXAMPLE 13.5.** Find the incentre of the triangle with vertices
`A(0, 0, 0)`, `B(3, 0, 0)`, `C(0, 4, 0)`.

```
   a = BC = sqrt((0-3)^2 + (4-0)^2 + 0) = sqrt(9 + 16) = 5
   b = CA = sqrt(0 + 16 + 0) = 4
   c = AB = sqrt(9 + 0 + 0) = 3

   a + b + c = 12

   x = (5(0) + 4(3) + 3(0)) / 12 = 12/12 = 1
   y = (5(0) + 4(0) + 3(4)) / 12 = 12/12 = 1
   z = 0

   I = (1, 1, 0)

   SANITY CHECK: this is a 3-4-5 right angled triangle lying flat in the xy-plane,
   with the right angle at the origin. Its inradius is r = (3 + 4 - 5)/2 = 1,
   so the incentre must be 1 unit from each leg  ->  (1, 1, 0).   correct
```

**WORKED EXAMPLE 13.6.** Incentre of `A(1,0,0)`, `B(0,1,0)`, `C(0,0,1)`.

```
   a = BC = sqrt(0 + 1 + 1) = sqrt(2)
   b = CA = sqrt(1 + 0 + 1) = sqrt(2)
   c = AB = sqrt(1 + 1 + 0) = sqrt(2)

   All sides equal -> equilateral -> the incentre IS the centroid:

   I = ((1+0+0)/3, (0+1+0)/3, (0+0+1)/3) = (1/3, 1/3, 1/3)
```

> **TRAP:** In the incentre formula the weight `a` sits with vertex `A`, and `a` is the
> side **opposite** A, i.e. `BC`. Students routinely put `AB` with `A`. Write the three
> side lengths down as `a = BC`, `b = CA`, `c = AB` before touching the formula.

---

# TOPIC 14 — THE STANDARD BOARD PROBLEMS

## 14A. The fourth vertex of a PARALLELOGRAM

```
   The key fact:  in a parallelogram, the DIAGONALS BISECT EACH OTHER.

        A ---------------- B
        |  \            /  |
        |     \      /     |
        |        M         |         M = midpoint of AC = midpoint of BD
        |     /      \     |
        |  /            \  |
        D ---------------- C

   For a parallelogram named  ABCD  (going round in order),
   the diagonals are  AC  and  BD.

        midpoint of AC  =  midpoint of BD
```

**WORKED EXAMPLE 14.1.** `A(3, -1, 2)`, `B(1, 2, -4)`, `C(-1, 1, 2)` are three vertices
of the parallelogram `ABCD`. Find `D`.

```
   Midpoint of AC = ( (3 + (-1))/2 , (-1 + 1)/2 , (2 + 2)/2 ) = (1, 0, 2)

   Let D = (p, q, r).  Midpoint of BD = ( (1 + p)/2 , (2 + q)/2 , (-4 + r)/2 )

   Equate:
       (1 + p)/2  = 1    ->   p =  1
       (2 + q)/2  = 0    ->   q = -2
       (-4 + r)/2 = 2    ->   r =  8

   D = (1, -2, 8)

   CHECK using vectors of the sides:
       AB = B - A = (1-3, 2+1, -4-2) = (-2,  3, -6)
       DC = C - D = (-1-1, 1+2, 2-8) = (-2,  3, -6)
       AB = DC  ->  AB is parallel to DC and equal in length.   correct

   CHECK the side lengths:
       AB^2 = 4 + 9 + 36 = 49  ->  AB = 7
       BC^2 = (-1-1)^2 + (1-2)^2 + (2+4)^2 = 4 + 1 + 36 = 41
       CD^2 = 49  (same as AB by the vector check)
       DA^2 = (3-1)^2 + (-1+2)^2 + (2-8)^2 = 4 + 1 + 36 = 41   ->  DA = BC
   Opposite sides equal. It is a genuine parallelogram.
```

> **TRAP:** The order of the letters matters. In `ABCD` the diagonals are `AC` and `BD`.
> If a question says `ABDC`, the diagonals are `AD` and `BC`. Read the letter order.

## 14B. Showing four points form a SQUARE / RHOMBUS / RECTANGLE

```
  +-------------------------------------------------------------------------+
  |   COMPUTE:  the four sides AB, BC, CD, DA  and the two diagonals AC, BD |
  |             (keep everything SQUARED)                                   |
  +-------------------------------------------------------------------------+
  |   4 sides equal  +  2 diagonals equal          ->   SQUARE              |
  |   4 sides equal  +  diagonals UNequal          ->   RHOMBUS             |
  |   opposite sides equal + diagonals equal       ->   RECTANGLE           |
  |   opposite sides equal + diagonals unequal     ->   PARALLELOGRAM       |
  +-------------------------------------------------------------------------+

  IMPORTANT:  four equal sides ALONE does NOT prove a square. You MUST also
  check the diagonals, otherwise it could be a rhombus. This is where the
  marks are.
```

**WORKED EXAMPLE 14.2.** Show that `A(0,4,1)`, `B(2,3,-1)`, `C(4,5,0)`, `D(2,6,2)` are
the vertices of a **square**.

```
   AB^2 = (2-0)^2 + (3-4)^2 + (-1-1)^2 =  4 + 1 + 4 = 9
   BC^2 = (4-2)^2 + (5-3)^2 + (0+1)^2  =  4 + 4 + 1 = 9
   CD^2 = (2-4)^2 + (6-5)^2 + (2-0)^2  =  4 + 1 + 4 = 9
   DA^2 = (0-2)^2 + (4-6)^2 + (1-2)^2  =  4 + 4 + 1 = 9

   All four sides = 3.  So it is at least a RHOMBUS.

   Diagonals:
   AC^2 = (4-0)^2 + (5-4)^2 + (0-1)^2  = 16 + 1 + 1 = 18
   BD^2 = (2-2)^2 + (6-3)^2 + (2+1)^2  =  0 + 9 + 9 = 18

   AC = BD = sqrt(18) = 3 sqrt(2).

   Four equal sides AND equal diagonals  ->  ABCD is a SQUARE of side 3.

   EXTRA CHECK:  for a square,  diagonal^2 = 2 x side^2  ->  2 x 9 = 18.   correct
```

**WORKED EXAMPLE 14.3 — a rhombus that is NOT a square.**
`A(0,0,0)`, `B(3,0,4)`, `C(3,3,8)`, `D(0,3,4)`.

```
   AB^2 = 9 + 0 + 16 = 25
   BC^2 = 0 + 9 + 16 = 25
   CD^2 = 9 + 0 + 16 = 25
   DA^2 = 0 + 9 + 16 = 25          all sides = 5

   AC^2 = 9 + 9 + 64 = 82
   BD^2 = 9 + 9 +  0 = 18          diagonals are NOT equal

   ->  RHOMBUS, not a square.   (This is exactly why you must check the diagonals.)
```

## 14C. Showing four points are COPLANAR

At this stage of the syllabus the cleanest board method is:

```
   Show the four points form a PARALLELOGRAM (or any quadrilateral whose
   diagonals bisect each other).

   Two lines that CROSS each other must lie in one plane.
   The diagonals cross at their common midpoint.
   Therefore all four points lie in one plane  ->  COPLANAR.
```

**WORKED EXAMPLE 14.4.** Show that `A(1,2,3)`, `B(-1,-2,-1)`, `C(2,3,2)`, `D(4,7,6)` are
coplanar.

```
   Midpoint of AC = ( (1+2)/2 , (2+3)/2 , (3+2)/2 ) = (3/2, 5/2, 5/2)
   Midpoint of BD = ( (-1+4)/2 , (-2+7)/2 , (-1+6)/2 ) = (3/2, 5/2, 5/2)

   The diagonals AC and BD have the SAME midpoint, so they bisect each other.
   Hence ABCD is a parallelogram, hence the four points are COPLANAR.

   (Side lengths, for completeness:
      AB^2 = 4 + 16 + 16 = 36  ->  AB = 6
      BC^2 = 9 + 25 +  9 = 43
    Opposite sides are equal but adjacent ones are not, so it is an ordinary
    parallelogram - not a rhombus, not a rectangle.)
```

## 14D. Finding a point EQUIDISTANT from given points

```
   METHOD
   1. Let the unknown point be P.
      -> "on the x-axis"  means  P = (x, 0, 0)
      -> "on the y-axis"  means  P = (0, y, 0)
      -> "on the z-axis"  means  P = (0, 0, z)
      -> "in the xy-plane" means P = (x, y, 0)
      -> otherwise         P = (x, y, z)
   2. Write  PA^2 = PB^2.   NEVER use square roots - square both sides at once.
   3. The x^2, y^2, z^2 terms CANCEL. You are left with a LINEAR equation.
   4. Solve. If there are several conditions, solve the linear system.
   5. Substitute back and confirm the distances really are equal.
```

**WORKED EXAMPLE 14.5.** Find the point on the **y-axis** equidistant from `A(3, 1, 2)`
and `B(5, 5, 2)`.

```
   Let P = (0, y, 0).

   PA^2 = (0-3)^2 + (y-1)^2 + (0-2)^2 = 9 + y^2 - 2y + 1 + 4 = y^2 - 2y + 14
   PB^2 = (0-5)^2 + (y-5)^2 + (0-2)^2 = 25 + y^2 - 10y + 25 + 4 = y^2 - 10y + 54

   Set equal:   y^2 - 2y + 14 = y^2 - 10y + 54
                     -2y + 14 = -10y + 54
                          8y  = 40
                           y  = 5

   P = (0, 5, 0)

   CHECK:  PA^2 = 9 + 16 + 4 = 29
           PB^2 = 25 + 0 + 4 = 29        equal.   correct
```

**WORKED EXAMPLE 14.6.** Find the point on the **z-axis** equidistant from `A(1, 5, 7)`
and `B(5, 1, -4)`.

```
   Let P = (0, 0, z).

   PA^2 = 1 + 25 + (z - 7)^2
   PB^2 = 25 + 1 + (z + 4)^2

   The 26 cancels from both sides:

        (z - 7)^2 = (z + 4)^2
        z^2 - 14z + 49 = z^2 + 8z + 16
        -14z + 49 = 8z + 16
        33 = 22z
        z = 3/2

   P = (0, 0, 3/2)

   CHECK:  PA^2 = 26 + (3/2 - 7)^2 = 26 + (-11/2)^2 = 26 + 121/4 = 225/4
           PB^2 = 26 + (3/2 + 4)^2 = 26 + ( 11/2)^2 = 26 + 121/4 = 225/4   equal.
           Both distances = 15/2.   correct
```

**WORKED EXAMPLE 14.7 — equidistant from FOUR points.**
Find the point equidistant from `O(0,0,0)`, `A(2,0,0)`, `B(0,4,0)`, `C(0,0,6)`.

```
   Let P = (x, y, z).

   PO^2 = x^2 + y^2 + z^2

   PO^2 = PA^2 :  x^2 = (x-2)^2  ->  0 = -4x + 4   ->  x = 1
   PO^2 = PB^2 :  y^2 = (y-4)^2  ->  0 = -8y + 16  ->  y = 2
   PO^2 = PC^2 :  z^2 = (z-6)^2  ->  0 = -12z + 36 ->  z = 3

   P = (1, 2, 3)

   CHECK:  PO^2 = 1 + 4 + 9 = 14
           PA^2 = (1-2)^2 + 4 + 9 = 1 + 4 + 9 = 14
           PB^2 = 1 + (2-4)^2 + 9 = 1 + 4 + 9 = 14
           PC^2 = 1 + 4 + (3-6)^2 = 1 + 4 + 9 = 14      all equal.   correct
   The common distance is sqrt(14).
```

## 14E. Locus problems (`PA = PB`, `PA^2 + PB^2 = k`)

**WORKED EXAMPLE 14.8.** Find the locus of `P` such that `PA = PB`, where `A(1, 2, 3)`
and `B(3, 2, -1)`.

```
   PA^2 = PB^2

   (x-1)^2 + (y-2)^2 + (z-3)^2  =  (x-3)^2 + (y-2)^2 + (z+1)^2

   Cancel x^2, y^2, z^2 and (y-2)^2 from both sides:

   -2x + 1 - 6z + 9  =  -6x + 9 + 2z + 1
   -2x - 6z + 10     =  -6x + 2z + 10
    4x - 8z          =  0
     x - 2z          =  0

   LOCUS:  x - 2z = 0   -   a PLANE.
   (It is the perpendicular bisector plane of AB. You will meet this again
    in Chapter 7.)

   CHECK: the midpoint of AB is (2, 2, 1). Put it in:  2 - 2(1) = 0.   correct
```

---

# TOPIC 15 — TRANSLATION OF AXES IN THREE DIMENSIONS

Exactly the same idea as Chapter 2, with one more letter. You slide the origin to a new
place `O'(h, k, l)` but keep all three axes pointing the same way.

```
                z            z'
                |            |
                |            |
                |       O'---+----------- y'
                |      /(h,k,l)
                |     /
                |    /
       O -------+---/------------------ y
               /   /
              /   x'
             x

   Old coordinates (x, y, z)   ->   New coordinates (X, Y, Z)
```

```
  +==================================================================+
  |                                                                  |
  |     X = x - h          and back the other way:      x = X + h    |
  |     Y = y - k                                       y = Y + k    |
  |     Z = z - l                                       z = Z + l    |
  |                                                                  |
  |     " NEW = OLD - SHIFT "                                        |
  |                                                                  |
  |  DISTANCES DO NOT CHANGE under a translation, because            |
  |  (x2 - h) - (x1 - h) = x2 - x1.  The h cancels.                  |
  |                                                                  |
  +==================================================================+
```

**WORKED EXAMPLE 15.1.** The origin is shifted to `(1, 2, -3)` without changing the
directions of the axes. Find the new coordinates of `P(0, 4, 5)`.

```
   X = 0 - 1   = -1
   Y = 4 - 2   =  2
   Z = 5 - (-3) = 8

   New coordinates:  (-1, 2, 8)
```

**WORKED EXAMPLE 15.2 — backwards.** After shifting the origin to `(2, -1, 3)`, a point
has new coordinates `(1, 2, -1)`. Find its original coordinates.

```
   x = X + h = 1 + 2  = 3
   y = Y + k = 2 + (-1) = 1
   z = Z + l = -1 + 3 = 2

   Original point:  (3, 1, 2)

   CHECK forwards:  X = 3 - 2 = 1,  Y = 1 - (-1) = 2,  Z = 2 - 3 = -1.   correct
```

> **TRAP:** "Shifted TO `(h,k,l)`" means SUBTRACT `(h,k,l)`. Students add it. Test yourself
> with the new origin itself: `O'(h,k,l)` must come out as `(0,0,0)` in the new system —
> and `h - h = 0` only if you SUBTRACT.

---

# TOPIC 16 — A LOOK FORWARD: EQUATIONS OF PLANES

You do not need this for Chapter 5 questions, but knowing it makes Chapter 7 painless.

```
  +---------------------------------------------------------------------+
  |  OBJECT                              |  EQUATION(S)                 |
  +---------------------------------------------------------------------+
  |  xy - plane                          |  z = 0                       |
  |  yz - plane                          |  x = 0                       |
  |  zx - plane                          |  y = 0                       |
  +---------------------------------------------------------------------+
  |  plane parallel to xy-plane,         |  z = c                       |
  |  at distance |c| from it             |                              |
  |  plane parallel to yz-plane          |  x = a                       |
  |  plane parallel to zx-plane          |  y = b                       |
  +---------------------------------------------------------------------+
  |  x - axis                            |  y = 0  AND  z = 0           |
  |  y - axis                            |  z = 0  AND  x = 0           |
  |  z - axis                            |  x = 0  AND  y = 0           |
  +---------------------------------------------------------------------+
  |  ANY plane in space (Chapter 7)      |  a x + b y + c z + d = 0     |
  +---------------------------------------------------------------------+

  Distance between the two parallel planes  z = c1  and  z = c2   is  |c1 - c2|.
```

**WORKED EXAMPLE 16.1.** Write the equation of the plane through `(2, -3, 5)` and
parallel to the `zx`-plane.

```
   The zx-plane is  y = 0.  A plane parallel to it is  y = b.
   It must contain a point whose y-coordinate is -3.

   Answer:  y = -3
```

---

# THE ONE-PAGE SUMMARY

```
  +--------------------------------------------------------------------------+
  |  P(x,y,z)                                                                |
  |                                                                          |
  |  distance from origin      sqrt(x^2 + y^2 + z^2)                         |
  |  distance from x-axis      sqrt(y^2 + z^2)          [drop the axis name] |
  |  distance from xy-plane    |z|                      [keep the missing]   |
  |                                                                          |
  |  projection: make them 0    image: make them negative                    |
  |                                                                          |
  |  AB = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )                          |
  |                                                                          |
  |  collinear      AB + BC = AC                                             |
  |  equilateral    AB^2 = BC^2 = CA^2                                       |
  |  right angled   small^2 + middle^2 = big^2                               |
  |                                                                          |
  |  section m:n internal   (m x2 + n x1)/(m + n)      [m with 2, n with 1]  |
  |  section m:n external   (m x2 - n x1)/(m - n)                            |
  |  midpoint               (x1 + x2)/2                                      |
  |                                                                          |
  |  yz-plane cuts AB in    -x1 : x2                                         |
  |  zx-plane cuts AB in    -y1 : y2                                         |
  |  xy-plane cuts AB in    -z1 : z2                                         |
  |                                                                          |
  |  centroid of triangle      sum / 3                                       |
  |  centroid of tetrahedron   sum / 4                                       |
  |  incentre                  (aA + bB + cC)/(a+b+c),  a = BC etc.          |
  |                                                                          |
  |  parallelogram   midpoint of AC = midpoint of BD                         |
  |  square          4 sides equal AND 2 diagonals equal                     |
  |  rhombus         4 sides equal, diagonals unequal                        |
  |                                                                          |
  |  translation     X = x - h,  Y = y - k,  Z = z - l                       |
  +--------------------------------------------------------------------------+
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I include the THIRD term (z2 - z1)^2 in every distance?
  [ ]  Did I write each subtraction out fully before squaring, so no minus
       sign got eaten?   ( 1 - (-3) = 4 , not -2 )
  [ ]  For "distance from the x-axis", did I DROP x and keep y and z?
  [ ]  For "distance from the xy-plane", did I keep ONLY |z|?
  [ ]  PROJECTION = zeros.  IMAGE = minus signs.  Did I read which one was asked?
  [ ]  In the section formula, is m with the SECOND point and n with the FIRST?
  [ ]  External division: did I use MINUS on top AND MINUS on the bottom?
  [ ]  Did I state whether the division is INTERNAL (k > 0) or EXTERNAL (k < 0)?
  [ ]  Centroid of a TRIANGLE is divided by 3;  of a TETRAHEDRON by 4.
       Did I count the vertices?
  [ ]  Incentre: is the weight  a = BC  (the side OPPOSITE A)?
  [ ]  For "type of triangle", did I test BOTH equal sides AND Pythagoras?
  [ ]  For "square", did I check the DIAGONALS as well as the sides?
  [ ]  Parallelogram ABCD: did I use the diagonals AC and BD (letter order)?
  [ ]  Translation: did I SUBTRACT (h, k, l)?
  [ ]  Did I write the final CONCLUDING SENTENCE - "hence the points are
       collinear", "hence ABCD is a square", "hence the required point is ..."?
       That sentence carries a mark on its own.
  [ ]  Did I substitute my answer back into the original condition to check it?
```
