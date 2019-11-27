# Функции массива байтов

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [drop(ByteVector, Int): ByteVector](#drop) | Возвращает массив байтов без первых `N` байтов | 1 |
| 2 | [dropRight(ByteVector, Int): ByteVector](#dropright) | Возвращает массив байтов без последних `N` байтов | 19 |
| 3 | [size(ByteVector): Int](#size) | Возвращает количество байтов в массиве байтов | 1 |
| 4 | [take(ByteVector, Int): ByteVector](#take) | Возвращает первые `N` байтов массива байтов | 1 |
| 5 | [takeRight(ByteVector, Int): ByteVector](#takeright) | Возвращает последние `N` байтов массива байтов | 19 |

## drop(ByteVector, Int): ByteVector <a id="drop"></a>

Возвращает массив байтов без первых `N` байтов.

``` ride
drop(xs: ByteVector, number: Int): ByteVector
```

### Параметры

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов.

#### `number`: [Int](/ride/data-types/int.md)

Число `N`.

### Примеры

``` ride
drop("Ride".toBytes(), 2)   # Возвращает массив байтов без первых 2-х байтов
drop(125.toBytes(), 2)      # Возвращает массив байтов без первых 2-х байтов
drop(base16'52696465', 3)   # Возвращает массив байтов без первых 3-х байтов
drop(base58'37BPKA', 3)     # Возвращает массив байтов без первых 3-х байтов
drop(base64'UmlkZQ==', 3)   # Возвращает массив байтов без первых 3-х байтов
```

## dropRight(ByteVector, Int): ByteVector <a id="dropright"></a>

Возвращает массив байтов без последних `N` байтов.

``` ride
dropRight(xs: ByteVector, number: Int): ByteVector
```

### Параметры

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов.

#### `number`: [Int](/ride/data-types/int.md)

Число `N`.

### Примеры

``` ride
dropRight("Ride".toBytes(), 2)  # Возвращает массив байтов без последних 2-х байтов
dropRight(125.toBytes(), 2)     # Возвращает массив байтов без последних 2-х байтов
dropRight(base16'52696465', 3)  # Возвращает массив байтов без последних 3-х байтов
dropRight(base58'37BPKA', 3)    # Возвращает массив байтов без последних 3-х байтов
dropRight(base64'UmlkZQ==', 3)  # Возвращает массив байтов без последних 3-х байтов
```

## size(ByteVector): Int <a id="size"></a>

Возвращает количество байтов в массиве байтов.

``` ride
size(byteVector: ByteVector): Int
```

### Параметры

#### `byteVector`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов.

### Примеры

``` ride
size("Hello".toBytes())         # Возвращает 5
size("Hello world".toBytes())   # Возвращает 11
size(64.toBytes())              # Возвращает 8, так как все целые числа в Ride занимают 8 байтов
size(200000.toBytes())          # Возвращает 8, так как все целые числа в Ride занимают 8 байтов
size(base58'37BPKA')            # Возвращает 4
```

## take(ByteVector, Int): ByteVector <a id="take"></a>

Возвращает первые `N` байтов массива байтов.

``` ride
take(xs: ByteVector, number: Int): ByteVector
```

### Параметры

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов.

#### `number`: [Int](/ride/data-types/int.md)

Число `N`.

### Примеры

``` ride
take(base58'37BPKA', 0) # Возвращает пустой массив байтов
take(base58'37BPKA', 1) # Возвращает массив байтов, состоящий из первого байта исходного массива байтов
take(base58'37BPKA', 15) # Возвращает массив байтов целиком
take(base58'37BPKA', -10) # Возвращает пустой массив байтов
```

## takeRight(ByteVector, Int): ByteVector <a id="takeright"></a>

Возвращает последние `N` байтов массива байтов.

``` ride
takeRight(xs: ByteVector, number: Int): ByteVector
```

### Параметры

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов.

#### `number`: [Int](/ride/data-types/int.md)

Число `N`.

### Примеры

``` ride
takeRight(base58'37BPKA', 2) # Возвращает последние 2 байта массива байтов
```
