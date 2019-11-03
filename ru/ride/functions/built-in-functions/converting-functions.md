# Функции конвертации

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [addressFromPublicKey(ByteVector): Address](#address-from-public-key) | Получает [адрес](/blockchain/account/address.md), соответствующий открытому ключу аккаунта | 82 |
| 2 | [addressFromRecipient(Address&#124;Alias): Address](#address-from-recipient) | Получает [адрес](/blockchain/account/address.md), соответствующий [псевдониму](/blockchain/account/alias.md) | 100 |
| 3 | [parseInt(String): Int&#124;Unit](#parse-int) | Конвертирует строковое представление числа в эквивалентное целое число | 20 |
| 4 | [parseIntValue(String): Int](#parse-int-value) | Конвертирует строковое представление числа в эквивалентное целое число.<br>Выбрасывает исключение, если строка не может быть спарсена | 20 |
| 5 | [toBytes(Boolean): ByteVector](#to-bytes-boolean) | Конвертирует логическое значение в массив байтов | 1 |
| 6 | [toBytes(Int): ByteVector](#to-bytes-int) | Конвертирует целое число в массив байтов | 1 |
| 7 | [toBytes(String): ByteVector](#to-bytes-string) | Конвертирует строку в массив байтов | 1 |
| 8 | [toInt(ByteVector): Int](#to-int-bytevector) | Конвертирует массив байтов в целое число | 10 |
| 9 | [toInt(ByteVector, Int): Int](#to-int-bytevector-int) | Конвертирует массив байтов начиная с указанного индекса в целое число | 10 |
| 10 | [toString(Address): String](#to-string-address) | Конвертирует массив байтов [адреса](/blockchain/account/address.md) в строку | 10 |
| 11 | [toString(Boolean): String](#to-string-boolean) | Конвертирует логическое значение в строку | 1 |
| 12 | [toString(Int): String](#to-string-int) | Конвертирует целое число в строку | 1 |
| 13 | [toUtf8String(ByteVector): String](#to-utf8-string-bytevector) | Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8) | 20 |

## addressFromPublicKey(ByteVector): Address<a id="address-from-public-key"></a>

Получает [адрес](/blockchain/account/address.md), соответствующий открытому ключу аккаунта.

``` ride
addressFromPublicKey(publicKey: ByteVector): Address
```

### Параметры

#### `publicKey`: [ByteVector](/ride/data-types/byte-vector.md)

Открытый ключ для конвертации.

### Примеры

``` ride
let address = addressFromPublicKey(base58'J1t6NBs5Hd588Dn7mAPytqkhgeBshzv3zecScfFJWE2D')
```

## addressFromRecipient(Address&#124;Alias): Address<a id="address-from-recipient"></a>

Получает [адрес](/blockchain/account/address.md), соответствующий [псевдониму](/blockchain/account/alias.md).

``` ride
addressFromRecipient(AddressOrAlias: Address|Alias): Address
```

### Параметры

#### `AddressOrAlias`: [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md)

Адрес или псевдоним, обычно получателя транзакции.

### Примеры

``` ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
addressFromRecipient(address)
```

## parseInt(String): Int&#124;Unit<a id="parse-int"></a>

Конвертирует строковое представление числа в эквивалентное целое число.

``` ride
parseInt(str: String): Int|Unit
```

### Параметры

#### `str`: [String](/ride/data-types/string.md)

Строка для конвертации.

### Примеры

``` ride
parseInt("10") # Возвращает 10
parseInt("010") # Возвращает 10
parseInt("Ride") # Возвращает Unit
parseInt("10.30") # Возвращает Unit
```

## parseIntValue(String): Int<a id="parse-int-value"></a>

Конвертирует строковое представление числа в эквивалентное целое число.

Выбрасывает исключение, если строка не может быть сконвертирована.

``` ride
parseIntValue(str: String): Int
```

### Параметры

#### `str`: [String](/ride/data-types/string.md)

Строка для конвертации.

### Примеры

``` ride
parseIntValue("10") # Возвращает 10
parseIntValue("010") # Возвращает 10
parseIntValue("Ride") # Ошибка при разборе строки на целое число
parseIntValue("10.30") # Ошибка при разборе строки на целое число
parseIntValue("20 WAVES") # Ошибка при разборе строки на целое число
```

## toBytes(Boolean): ByteVector<a id="to-bytes-boolean"></a>

Конвертирует логическое значение в массив байтов.

``` ride
toBytes(b: Boolean): ByteVector
```

### Параметры

#### `b`: [Boolean](/ride/data-types/boolean.md)

Логическое значение для конвертации.

### Примеры

``` ride
toBytes(true) # Возвращает 2
toBytes(false) # Возвращает 1
```

## toBytes(Int): ByteVector<a id="to-bytes-int"></a>

Конвертирует целое число в массив байтов.

``` ride
toBytes(n: Int): ByteVector
```

### Параметры

#### `n`: [Int](/ride/data-types/int.md)

Целое число для конвертации.

### Примеры

``` ride
toBytes(10) # Возвращает 1111111B
```

## toBytes(String): ByteVector<a id="to-bytes-string"></a>

Конвертирует строку в массив байтов.

``` ride
toBytes(s: String): ByteVector
```

### Параметры

#### `s`: [String](/ride/data-types/string.md)

Строка для конвертации.

### Примеры

``` ride
toBytes("Ride") # Возвращает 37BPKA
```

## toInt(ByteVector): Int<a id="to-int-bytevector"></a>

Конвертирует массив байтов в целое число.

``` ride
toInt(bin: ByteVector): Int
```

### Параметры

#### `bin`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов для конвертации.

### Примеры

``` ride
toInt(bytes) # Возвращает 10
```

## toInt(ByteVector, Int): Int<a id="to-int-bytevector-int"></a>

Конвертирует массив байтов начиная с указанного индекса в целое число.

``` ride
toInt(bin: ByteVector, offset: Int): Int
```

### Параметры

#### `bin`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов для конвертации.

#### `offset`: [Int](/ride/data-types/int.md)

Индекс.

### Примеры

``` ride
let bytes = toBytes("Ride on Waves")
toInt(bytes, 2) # Возвращает 7234224039401641825
toInt(bytes, 6) # Индекс за пределами границ
```

## toString(Address): String<a id="to-string-address"></a>

Конвертирует массив байтов [адреса](/blockchain/account/address.md) в строку.

``` ride
toString(Address: Address): String
```

### Параметры

#### `Address`: [Address](/ride/structures/common-structures/address.md)

Адрес для конвертации.

### Примеры

``` ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
toString(address) # Возвращает "3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF"
```

## toString(Boolean): String<a id="to-string-boolean"></a>

Конвертирует логическое значение в строку.

``` ride
toString(b: Boolean): String
```

### Параметры

#### `b`: [Boolean](/ride/data-types/boolean.md)

Логическое значение для конвертации.

### Примеры

``` ride
toString(true) # Возвращает "true"
toString(false) # Возвращает "false"
```

## toString(Int): String<a id="to-string-int"></a>

Конвертирует целое число в строку.

``` ride
toString(n: Int): String
```

### Параметры

#### `n`: [Int](/ride/data-types/int.md)

Целое число для конвертации.

### Примеры

``` ride
toString(10) # Возвращает "10"
```

## toUtf8String(ByteVector): String<a id="to-utf8-string-bytevector"></a>

Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8).

``` ride
toUtf8String(u: ByteVector): String
```

### Параметры

#### `u`: [ByteVector](/ride/data-types/byte-vector.md)

Массив байтов для конвертации.

### Примеры

``` ride
let bytes = toBytes("Ride on Waves")
toUtf8String(bytes) # Возвращает "Ride on Waves"
```
