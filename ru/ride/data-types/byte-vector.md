# ByteVector

**ByteVector** — ключевое слово [типа данных](/ride/data-types.md) массива байтов.

Максимальный размер переменной типа данных массива байтов — 65 536 байтов.

Для присвоения переменной массива байтов используйте один из литералов: `base16`, `base58` или `base64`. За названием литерала в одинарных кавычках следует строка в [Base16](https://en.wikipedia.org/wiki/Hexadecimal#Base16_&#40;Transfer_encoding&#41;), [Base58](https://ru.wikipedia.org/wiki/Base58) или [Base64](https://ru.wikipedia.org/wiki/Base64).

``` ride
let a = base16'52696465'
let b = base58'8t38fWQhrYJsqxXtPpiRCEk1g5RJdq9bG5Rkr2N7mDFC'
let c = base64'UmlkZQ=='
```

С помощью функции [toBytes](/ride/functions/built-in-functions/converting-functions.md) можно конвертировать [целочисленные](/ride/data-types/int.md), [логические](/ride/data-types/boolean.md) и [строковые](/ride/data-types/string.md) значения в массив байтов:

``` ride
let a = 42.toBytes()
let b = true.toBytes()
let c = "Ride".toBytes()
```
