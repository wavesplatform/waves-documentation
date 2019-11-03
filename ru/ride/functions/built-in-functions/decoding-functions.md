# Функции декодирования

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [addressFromString(String): Address&#124;Unit](#address-from-string)| Декодирует адрес из строки [Base58](https://ru.wikipedia.org/wiki/Base58) | 124 |
| 2 | [addressFromStringValue(String): Address](#address-from-string-value) | Декодирует адрес из строки [Base58](https://ru.wikipedia.org/wiki/Base58).<br>Выбрасывает исключение, если адрес невозможно декодировать | 124 |
| 3 | [fromBase16String(String): ByteVector](#from-base-16-string) | Декодирует строку [Base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления) в массив байтов | 10 |
| 4 | [fromBase58String(String): ByteVector](#from-base-58-string) | Декодирует строку [Base58](https://ru.wikipedia.org/wiki/Base58) в массив байтов | 10 |
| 5 | [fromBase64String(String): ByteVector](#from-base-64-string)| Декодирует строку [Base64](https://ru.wikipedia.org/wiki/Base64) в массив байтов | 10 |


### addressFromString(String): Address|Unit<a id="address-from-string"></a>

Декодирует адрес из строки [Base58](https://ru.wikipedia.org/wiki/Base58).

``` ride
addressFromString(string: String): Address|Unit
```

### Параметры

#### `string`: [String](en/ride/data-types/string.md)

Строка для декодирования.

### Примеры

```ride
let address = addressFromString("3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF")
```

## addressFromStringValue(String): Address <a id="address-from-string-value"></a>

Декодирует адрес из строки [Base58](https://ru.wikipedia.org/wiki/Base58).

Выбрасывает исключение, если адрес невозможно декодировать.

``` ride
addressFromStringValue(string: String): Address
```

### Параметры

#### `string`: [String](en/ride/data-types/string.md)

Строка для декодирования.

### Примеры

```ride
let address = addressFromStringValue("3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF")
```

## fromBase16String(String): ByteVector<a id="from-base-16-string"></a>

Декодирует строку [Base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления) в массив байтов.

``` ride
fromBase16String(str: String): ByteVector
```

### Параметры

#### `str`: [String](en/ride/data-types/string.md)

Строка для декодирования.

### Примеры

```ride
fromBase16String("52696465")
```

## fromBase58String(String): ByteVector<a id="from-base-58-string"></a>

Декодирует строку [Base58](https://ru.wikipedia.org/wiki/Base58) в массив байтов.

``` ride
fromBase58String(str: String): ByteVector
```

### Параметры

#### `str`: [String](en/ride/data-types/string.md)

Строка для декодирования.

### Примеры

```ride
let bytes = fromBase58String("37BPKA")
```

## fromBase64String(String): ByteVector<a id="from-base-64-string"></a>

Декодирует строку [Base64](https://ru.wikipedia.org/wiki/Base64) в массив байтов.

``` ride
fromBase64String(str: String): ByteVector
```

### Параметры

#### `str`: [String](en/ride/data-types/string.md)

Строка для декодирования.

### Примеры

```ride
let bytes = fromBase64String("UmlkZQ==")
```
