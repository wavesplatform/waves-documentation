# Макрос FOLD&lt;N&gt;

**Макрос FOLD&lt;N&gt;** — конструкция для компилятора, позволяющая реализовать функциональность [функции высшего порядка](https://ru.wikipedia.org/wiki/Функция_высшего_порядка), известной в Scala (и многих других языках программирования) как `fold` или `reduce`.

С использованием FOLD&lt;N&gt;  могут выполняться вычисления в отношении массивов переменной длины, такие как суммирование (`sum`), нахождение среднего (`avg`), фильтрация (`filter`), агрегация элементов (`zip`), проверка наличия (`exists`) и т.п.

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
