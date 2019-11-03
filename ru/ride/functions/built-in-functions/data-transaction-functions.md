# Функции транзакции данных

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [getInteger(List[DataEntry], String): Int&#124;Unit](#get-integer-key) | Возвращает целое число из списка записей данных по ключу | 10 |
| 2 | [getInteger(List[DataEntry], Int): Int&#124;Unit](#get-integer-index) | Возвращает целое число из списка записей данных по индексу | 30 |
| 3 | [getIntegerValuе(List[DataEntry], String): Int](#get-integer-value-key) | Возвращает целое число из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 4 | [getIntegerValue(List[DataEntry], Int): Int](#get-integer-value-index) | Возвращает целое число из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| 5 | [getBoolean(List[DataEntry], String): Boolean&#124;Unit](#get-boolean-key) | Возвращает логическое значение из списка записей данных по ключу | 10 |
| 6 | [getBoolean(List[DataEntry], Int): Boolean&#124;Unit](#get-boolean-index) | Возвращает логическое значение из списка записей данных по индексу | 30 |
| 7 | [getBooleanValue(List[DataEntry], String): Boolean](#get-boolean-value-key) | Возвращает логическое значение из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 8 | [getBooleanValue(List[DataEntry], Int): Boolean](#get-boolean-value-index) | Возвращает логическое значение из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| 9 | [getBinary(List[DataEntry], String): ByteVector&#124;Unit](#get-binary-key) | Возвращает массив байтов из списка записей данных по ключу | 10 |
| 10 | [getBinary(List[DataEntry], Int): ByteVector&#124;Unit](#get-binary-index) | Возвращает массив байтов из списка записей данных по индексу | 30 |
| 11 | [getBinaryValue(List[DataEntry], String): ByteVector](#get-binary-value-key) | Возвращает массив байтов из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 12 | [getBinaryValue(List[DataEntry], Int): ByteVector](#get-binary-value-index) | Возвращает массив байтов из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| 13 | [getString(List[DataEntry], String): String&#124;Unit](#get-string-key) | Возвращает строку из списка записей данных по ключу | 10 |
| 14 | [getString(List[DataEntry], Int): String&#124;Unit](#get-string-index) | Возвращает строку из списка записей данных по индексу | 30 |
| 15 | [getStringValue(List[DataEntry], String) : String](#get-string-value-key) | Возвращает строку из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 16 | [getStringValue(List[DataEntry], Int): String](#get-string-value-index) | Возвращает строку из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |

## getInteger(List[DataEntry], String): Int|Unit <a id="get-integer-key"></a>

Возвращает целое число из списка записей данных по ключу.

``` ride
getInteger(data: List[DataEntry], key: String): Int|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getInteger(List[DataEntry], Int): Unit|Int <a id="get-integer-index"></a>

Возвращает целое число из списка записей данных по индексу.

``` ride
getInteger(data: List[DataEntry], index: Int): Unit|Int
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getIntegerValue(List[DataEntry], String): Int <a id="get-integer-value-key"></a>

Возвращает целое число из списка записей данных по ключу.

Выбрасывает исключение, если данных нет.

``` ride
getIntegerValue(data: List[DataEntry], key: String): Int
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getIntegerValue(List[DataEntry], Int): Int <a id="get-integer-value-index"></a>

Возвращает целое число из списка записей данных по индексу.

Выбрасывает исключение, если данных нет

``` ride
getIntegerValue(data: List[DataEntry], index: Int): Int
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getBoolean(List[DataEntry], String): Boolean|Unit <a id="get-boolean-key"></a>

Возвращает логическое значение из списка записей данных по ключу.

``` ride
getBoolean(data: List[DataEntry], key: String): Boolean|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getBoolean(data: List[DataEntry], index: Int): Boolean|Unit <a id="get-boolean-index"></a>

Возвращает логическое значение из списка записей данных по индексу.

``` ride
getBoolean(data: List[DataEntry], index: Int): Boolean|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getBooleanValue(List[DataEntry], String): Boolean <a id="get-boolean-value-key"></a>

Возвращает логическое значение из списка записей данных по ключу.

Выбрасывает исключение, если данных нет.

``` ride
getBooleanValue(data: List[DataEntry], key: String): Boolean
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getBooleanValue(List[DataEntry], Int): Boolean <a id="get-boolean-value-index"></a>

Возвращает логическое значение из списка записей данных по индексу.

Выбрасывает исключение, если данных нет.

``` ride
getBooleanValue(data: List[DataEntry], index: Int): Boolean
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getBinary(List[DataEntry], String): ByteVector|Unit <a id="get-binary-key"></a>

Возвращает массив байтов из списка записей данных по ключу.

``` ride
getBinary(data: List[DataEntry], key: String): ByteVector|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getBinary(List[DataEntry], Int): ByteVector|Unit <a id="get-binary-index"></a>

Возвращает массив байтов из списка записей данных по индексу.

``` ride
getBinary(data: List[DataEntry], index: Int): ByteVector|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getBinaryValue(List[DataEntry], String): ByteVector <a id="get-binary-value-key"></a>

Возвращает массив байтов из списка записей данных по ключу.

Выбрасывает исключение, если данных нет.

``` ride
getBinaryValue(data: List[DataEntry], key: String): ByteVector
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getBinaryValue(List[DataEntry], Int): ByteVector <a id="get-binary-value-index"></a>

Возвращает массив байтов из списка записей данных по индексу.

Выбрасывает исключение, если данных нет.

``` ride
getBinaryValue(data: List[DataEntry], index: Int): ByteVector
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getString(List[DataEntry], String): String|Unit <a id="get-string-key"></a>

Возвращает строку из списка записей данных по ключу.

``` ride
getString(data: List[DataEntry], key: String): String|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getString(List[DataEntry], Int): String|Unit <a id="get-string-index"></a>

Возвращает строку из списка записей данных по индексу.

``` ride
getString(data: List[DataEntry], index: Int): String|Unit
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.

## getStringValue(List[DataEntry], String) : String <a id="get-string-value-key"></a>

Возвращает строку из списка записей данных по ключу.

Выбрасывает исключение, если данных нет.

``` ride
getStringValue(data: List[DataEntry], key: String) : String
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `key`: String

Ключ.

## getStringValue(List[DataEntry], Int): String <a id="get-string-value-index"></a>

Возвращает строку из списка записей данных по индексу.

Выбрасывает исключение, если данных нет.

``` ride
getStringValue(data: List[DataEntry], index: Int): String
```

### Параметры

#### `data`: List[DataEntry]

Список записей данных, обычно — данных [транзакции данных](/blockchain/transaction-type/data-transaction.md).

#### `index`: Int

Индекс.
