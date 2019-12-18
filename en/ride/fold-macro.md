# FOLD<N> Macro

**FOLD<N> Macro** is a construct for the compiler that allows implementing the [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) known in Scala (and other languages) as `fold` or `reduce`.

The `FOLD<N>` macro allows performing computations in relation to variable size lists, such as `sum`, `avg`, `filter`, `zip`, `exists` etc.

## `sum`

```ride
func sum(a:Int, b:Int) = a + b
let arr = [1,2,3,4,5]
let folded_sum = FOLD<5>(arr, 0, sum)
folded_sum # result: 15
```

## `mult`

```ride
func mult(a:Int, b:Int) = a * b
let arr = [1,2,3,4,5]
let folded_mult = FOLD<5>(arr, 0, mult)
folded_mult # result: 120
```

## `filter`

```ride
func filterStep(a: Int, accumulated: List[Int]) =
   if (a % 2 == 0) then a :: acumulated else accumulated
let arr = [1,2,3,4,5]
let evens = FOLD<5>(arr, 0, filterStep)
evens # result: [2,4]
```
