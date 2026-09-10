# The Plane — Formula Sheet

Copy this by hand into a notebook. This chapter has fewer formulas than any other in
Maths IB — you can genuinely learn ALL of them. The last column tells you WHEN each one
is used, which is what the exam actually tests.

Throughout: a plane is written `a x + b y + c z + d = 0`, and **(a, b, c) is the NORMAL.**

---

# 1. FORMS OF THE EQUATION OF A PLANE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  GENERAL      a x + b y + c z + d = 0        (a,b,c) not all 0    |
  |                                                                   |
  |  POINT +      a (x - x1) + b (y - y1) + c (z - z1) = 0            |
  |  NORMAL       i.e.  a x + b y + c z = a x1 + b y1 + c z1          |
  |                                                                   |
  |  NORMAL       l x + m y + n z = p                                 |
  |  FORM         l^2 + m^2 + n^2 = 1  ,   p >= 0                     |
  |                                                                   |
  |  INTERCEPT    x/a + y/b + z/c = 1                                 |
  |  FORM         a, b, c = x-, y-, z- intercepts                     |
  |                                                                   |
  |  THREE        | x - x1    y - y1    z - z1 |                      |
  |  POINTS       | x2 - x1   y2 - y1   z2 - z1 |  =  0               |
  |               | x3 - x1   y3 - y1   z3 - z1 |                     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `ax + by + cz + d = 0` | any plane at all; read `(a,b,c)` off as the normal |
| `a(x-x1) + b(y-y1) + c(z-z1) = 0` | "through a point, perpendicular to a line / with given normal" |
| `ax + by + cz = ax1 + by1 + cz1` | fastest form of the above — same LHS, point plugged into RHS |
| `lx + my + nz = p` | "reduce to normal form", "distance of plane from origin" |
| `x/a + y/b + z/c = 1` | "find the intercepts", "plane makes intercepts a, b, c" |
| the 3x3 determinant | "plane through three given points", "show four points are coplanar" |
| `n = (B-A) x (C-A)` then point+normal | safer alternative for the three-point question |

---

# 2. CONVERTING BETWEEN FORMS

```
  GENERAL  ->  NORMAL FORM
  --------------------------------------------------------------
    1.  a x + b y + c z = -d
    2.  r = sqrt(a^2 + b^2 + c^2)
    3.  divide every term by  r  or by  -r ,
        whichever makes the RIGHT-HAND SIDE POSITIVE
    4.  l, m, n from the left ;  p from the right

  GENERAL  ->  INTERCEPT FORM
  --------------------------------------------------------------
    1.  a x + b y + c z = -d
    2.  divide every term by (-d)
    3.  x-intercept = -d/a ,  y = -d/b ,  z = -d/c
```

| Formula | When to use |
|---|---|
| `p = \|d\| / sqrt(a^2+b^2+c^2)` | quick "distance of the plane from the origin" — no need to write full normal form |
| x-intercept `= -d/a`, y `= -d/b`, z `= -d/c` | quick intercepts of `ax+by+cz+d = 0` |
| `1/p^2 = 1/a^2 + 1/b^2 + 1/c^2` | links intercepts to origin-distance; EAPCET favourite |
| Volume of tetrahedron `= \|abc\| / 6` | plane + the three coordinate planes cut a tetrahedron |

---

# 3. SPECIAL AND DEGENERATE PLANES

```
  +--------------------------------+--------------------------------+
  |  z = 0     XOY plane           |  z = k   parallel to XOY       |
  |  x = 0     YOZ plane           |  x = k   parallel to YOZ       |
  |  y = 0     ZOX plane           |  y = k   parallel to ZOX       |
  +--------------------------------+--------------------------------+
  |  no x term  ->  parallel to the x-axis                          |
  |  no y term  ->  parallel to the y-axis                          |
  |  no z term  ->  parallel to the z-axis                          |
  |  d = 0      ->  passes through the ORIGIN                       |
  +-----------------------------------------------------------------+
```

| Fact | When to use |
|---|---|
| `z = k` etc. | "plane through (2,-3,5) parallel to the ZOX plane" — read off the right coordinate |
| missing variable = parallel to that axis | "what does `3x + 4y = 12` represent in space?" |
| `d = 0` means through the origin | quick check; also for the family `P1 + kP2 = 0` through O |

---

# 4. DISTANCES

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  POINT TO PLANE                                                   |
  |                    | a x1 + b y1 + c z1 + d |                     |
  |            D  =  ------------------------------                   |
  |                      sqrt(a^2 + b^2 + c^2)                        |
  |                                                                   |
  |-------------------------------------------------------------------|
  |                                                                   |
  |  ORIGIN TO PLANE                    | d |                         |
  |                            p  =  ------------------               |
  |                                  sqrt(a^2+b^2+c^2)                |
  |                                                                   |
  |-------------------------------------------------------------------|
  |                                                                   |
  |  BETWEEN TWO PARALLEL PLANES  (coefficients made IDENTICAL first) |
  |                                                                   |
  |     a x + b y + c z + d1 = 0                                      |
  |     a x + b y + c z + d2 = 0                                      |
  |                                    | d1 - d2 |                    |
  |                            D  =  ------------------               |
  |                                  sqrt(a^2+b^2+c^2)                |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| point-to-plane | the single most-used formula in the chapter; also for "distance of a parallel LINE from a plane" (use any point of the line) |
| `\|d\| / sqrt(...)` | "distance of the plane from the origin", "value of p in normal form" |
| `\|d1 - d2\| / sqrt(...)` | two parallel planes — **scale to identical coefficients first** |
| "length of perpendicular from P" | same as point-to-plane; different wording only |

---

# 5. ANGLES, PARALLEL AND PERPENDICULAR

## Plane vs plane — use COSINE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                     | a1 a2 + b1 b2 + c1 c2 |                     |
  |   cos(theta) = ------------------------------------------------   |
  |                sqrt(a1^2+b1^2+c1^2) . sqrt(a2^2+b2^2+c2^2)        |
  |                                                                   |
  |   PARALLEL          a1/a2 = b1/b2 = c1/c2                         |
  |   PERPENDICULAR     a1 a2 + b1 b2 + c1 c2 = 0                     |
  |   IDENTICAL         a1/a2 = b1/b2 = c1/c2 = d1/d2                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## Line vs plane — use SINE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   line direction (l, m, n) ,  plane normal (a, b, c)              |
  |                                                                   |
  |                       | a l + b m + c n |                         |
  |   sin(theta) = ------------------------------------------         |
  |                sqrt(a^2+b^2+c^2) . sqrt(l^2+m^2+n^2)              |
  |                                                                   |
  |   LINE PARALLEL TO PLANE        a l + b m + c n = 0                |
  |   LINE PERPENDICULAR TO PLANE   a/l = b/m = c/n                    |
  |   LINE LIES IN THE PLANE        a l + b m + c n = 0                |
  |                                 AND the line's point satisfies it  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| cos formula (planes) | "angle between the planes ..." |
| `a1a2 + b1b2 + c1c2 = 0` | "show the planes are perpendicular", "find k so they are perpendicular" |
| `a1/a2 = b1/b2 = c1/c2` | "show the planes are parallel", "find k so they are parallel" |
| sin formula (line & plane) | "angle between the line ... and the plane ..." |
| `al + bm + cn = 0` | "show the line is parallel to the plane" (first half of "lies in") |
| point also satisfies plane | second half of "lies in the plane" — worth its own mark |

> **REMEMBER THE PAIRING:** plane-plane = COS, line-plane = SIN.
> Reason: a plane is represented by its normal (which points ACROSS it), a line by its
> direction (which points ALONG it). The mismatch of 90 degrees turns cos into sin.

---

# 6. FOOT OF THE PERPENDICULAR AND IMAGE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   From  P(x1, y1, z1)  to plane  a x + b y + c z + d = 0          |
  |                                                                   |
  |               - ( a x1 + b y1 + c z1 + d )                        |
  |        k  =  --------------------------------                     |
  |                     a^2 + b^2 + c^2                               |
  |                                                                   |
  |   FOOT   F  =  ( x1 + a k ,  y1 + b k ,  z1 + c k )               |
  |                                                                   |
  |   IMAGE  Q  =  ( x1 + 2a k , y1 + 2b k , z1 + 2c k )              |
  |                                                                   |
  |   Equivalent line form:                                           |
  |                                                                   |
  |     x - x1     y - y1     z - z1                                  |
  |    --------  = --------  = --------  =  k                         |
  |        a           b          c                                   |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `k = -(P at point)/(a^2+b^2+c^2)` | first step of BOTH foot and image questions |
| foot `= point + k(a,b,c)` | "foot of the perpendicular", "nearest point on the plane" |
| image `= point + 2k(a,b,c)` | "image / reflection / mirror of the point in the plane" |
| foot = midpoint of P and image | your free self-check — always do it |
| foot from the ORIGIN | put `(x1,y1,z1) = (0,0,0)`, so `k = -d/(a^2+b^2+c^2)` |

---

# 7. LINE MEETING A PLANE

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   Line:   (x - x1)/l = (y - y1)/m = (z - z1)/n = t                |
  |                                                                   |
  |   1.  x = x1 + l t ,  y = y1 + m t ,  z = z1 + n t                |
  |   2.  substitute into  a x + b y + c z + d = 0                    |
  |   3.  solve the single linear equation for t                      |
  |   4.  put t back to get the point                                 |
  |                                                                   |
  |   t cancels, statement FALSE  ->  line is parallel, no meeting     |
  |   t cancels, statement TRUE   ->  line lies in the plane           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 8. FAMILY OF PLANES

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |    P1 + k P2 = 0                                                  |
  |                                                                   |
  |    (a1x + b1y + c1z + d1) + k(a2x + b2y + c2z + d2) = 0            |
  |                                                                   |
  |    Coefficients of the new plane:                                 |
  |         x :  a1 + k a2                                            |
  |         y :  b1 + k b2                                            |
  |         z :  c1 + k c2                                            |
  |     const :  d1 + k d2                                            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

| Extra condition given | Equation you solve for k |
|---|---|
| passes through `(x0, y0, z0)` | substitute the point, one linear equation in k |
| passes through the origin | `d1 + k d2 = 0` |
| perpendicular to plane `(A,B,C)` | `A(a1+ka2) + B(b1+kb2) + C(c1+kc2) = 0` |
| parallel to plane `(A,B,C)` | `(a1+ka2)/A = (b1+kb2)/B` (then verify with the z ratio) |
| parallel to the x-axis | `a1 + k a2 = 0` (no x term) |

---

# 9. SIDES, RATIOS AND BISECTORS

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   S1 = a x1 + b y1 + c z1 + d      (value at A)                   |
  |   S2 = a x2 + b y2 + c z2 + d      (value at B)                   |
  |                                                                   |
  |   SAME sign      ->  A, B on the same side (plane misses AB)      |
  |   OPPOSITE signs ->  A, B on opposite sides (plane cuts AB)       |
  |                                                                   |
  |   RATIO in which the plane divides AB  =  - S1  :  S2             |
  |       positive -> internal ,  negative -> external                |
  |                                                                   |
  |-------------------------------------------------------------------|
  |                                                                   |
  |   ANGLE-BISECTOR PLANES                                           |
  |                                                                   |
  |    a1x+b1y+c1z+d1           a2x+b2y+c2z+d2                        |
  |   -------------------  = +- -------------------                   |
  |   sqrt(a1^2+b1^2+c1^2)      sqrt(a2^2+b2^2+c2^2)                  |
  |                                                                   |
  |   Make d1, d2 both POSITIVE first;                                |
  |   then the "+" sign gives the bisector containing the ORIGIN.     |
  |   The two bisector planes are perpendicular to each other.        |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 10. TWO CONSTRUCTIONS THAT NEED A CROSS PRODUCT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  Through a point, PERPENDICULAR TO TWO PLANES                     |
  |        normal  n  =  n1  x  n2                                    |
  |                                                                   |
  |  Through TWO POINTS A, B, PERPENDICULAR TO a given plane          |
  |        normal  n  =  AB  x  n(given)                              |
  |                                                                   |
  |  Through THREE POINTS A, B, C                                     |
  |        normal  n  =  (B - A)  x  (C - A)                          |
  |                                                                   |
  |  The cross product, written out:                                  |
  |                                                                   |
  |     (p, q, r) x (u, v, w)  =                                      |
  |         ( q w - r v ,   r u - p w ,   p v - q u )                 |
  |                                                                   |
  |  ALWAYS CHECK:  n . (first vector) = 0  and  n . (second) = 0     |
  |                                                                   |
  +-------------------------------------------------------------------+
```

---

# 11. QUICK COMPARISON WITH THE 2D CHAPTER YOU ALREADY KNOW

| Straight line (2D, Chapter 3) | Plane (3D, this chapter) |
|---|---|
| `ax + by + c = 0` | `ax + by + cz + d = 0` |
| `(a, b)` is the normal to the line | `(a, b, c)` is the normal to the plane |
| `x cos A + y sin A = p` | `lx + my + nz = p` |
| `x/a + y/b = 1` | `x/a + y/b + z/c = 1` |
| `\|ax1+by1+c\| / sqrt(a^2+b^2)` | `\|ax1+by1+cz1+d\| / sqrt(a^2+b^2+c^2)` |
| `\|c1-c2\| / sqrt(a^2+b^2)` | `\|d1-d2\| / sqrt(a^2+b^2+c^2)` |
| `L1 + k L2 = 0` (family through a point) | `P1 + k P2 = 0` (family through a line) |
| perpendicular: `a1a2 + b1b2 = 0` | perpendicular: `a1a2 + b1b2 + c1c2 = 0` |

**If you learned The Straight Line, you have already learned most of The Plane.
Add one letter to every formula.**

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
   1.  ax + by + cz + d = 0      ->   NORMAL is (a, b, c)

   2.  Through point + normal :   a(x-x1) + b(y-y1) + c(z-z1) = 0
       fast form :                ax + by + cz = ax1 + by1 + cz1

   3.  Normal form : lx + my + nz = p ,  l^2+m^2+n^2 = 1 ,  p >= 0

   4.  Intercept form : x/a + y/b + z/c = 1

   5.  Distance point to plane :  |ax1+by1+cz1+d| / sqrt(a^2+b^2+c^2)

   6.  Distance from origin :     |d| / sqrt(a^2+b^2+c^2)

   7.  Parallel planes :          |d1 - d2| / sqrt(a^2+b^2+c^2)
                                  (identical coefficients first!)

   8.  Angle PLANE-PLANE (cos) :  (a1a2+b1b2+c1c2) / (|n1| |n2|)
       perpendicular  a1a2+b1b2+c1c2 = 0 ;   parallel  a1/a2=b1/b2=c1/c2

   9.  Angle LINE-PLANE (sin)  :  (al+bm+cn) / (|n| |d|)
       parallel  al+bm+cn = 0 ;   lies in  ALSO point on plane

  10.  k = -(ax1+by1+cz1+d)/(a^2+b^2+c^2)
       FOOT = point + k(a,b,c)      IMAGE = point + 2k(a,b,c)

  11.  Family through a line :   P1 + k P2 = 0

  12.  Ratio a plane cuts AB :   - (value at A) : (value at B)
       same sign = same side ,  opposite sign = opposite sides
```

Formulas 1, 5 and 8 alone will answer most of the 2-mark questions this chapter can throw
at you. If you memorise nothing else, memorise those three.
