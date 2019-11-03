# Функции хеширования

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [blake2b256(ByteVector): ByteVector](#blake2b256) | Хеширует массив байтов с помощью алгоритма [blake2b256](https://ru.wikipedia.org/wiki/BLAKE_%28хеш-функция%29) | 10 |
| 2 | [keccak256(ByteVector): ByteVector](#keccak256) | Хеширует массив байтов с помощью алгоритма [SHA-3-256](https://ru.wikipedia.org/wiki/SHA-3) | 10 |
| 3 | [sha256(ByteVector): ByteVector](#sha256) | Хеширует массив байтов с помощью алгоритма [SHA-256](https://ru.wikipedia.org/wiki/SHA-2) | 10 |

## blake2b256(ByteVector): ByteVector<a id="blake2b256"></a>

Хеширует массив байтов с помощью алгоритма [blake2b256](https://ru.wikipedia.org/wiki/BLAKE_%28хеш-функция%29).

``` ride
blake2b256(bytes: ByteVector): ByteVector
```

### Параметры

#### `bytes`: ByteVector

Массив байтов для хеширования.

### Примеры

```ride
let bytes = 1.toBytes() # Конвертирует целочисленное значение 1 в значение байт-вектора и возвращает 11111112
blake2b256(bytes) # Возвращает 2Gdq2cFpKMjHVfb7cwKoicsqYF5x7Z228tFrbtybEsif
```

## keccak256(ByteVector): ByteVector<a id="keccak256"></a>

Хеширует массив байтов с помощью алгоритма [SHA-3-256](https://ru.wikipedia.org/wiki/SHA-3).

``` ride
keccak256(bytes: ByteVector): ByteVector
```

### Параметры

#### `bytes`: ByteVector

Массив байтов для хеширования.

### Примеры

```ride
let bytes = 1.toBytes() # Конвертирует целочисленное значение 1 в значение байт-вектора и возвращает 11111112
keccak256(bytes) # Возвращает 8HMEouDPvpPG6nvyNPBpdEmWRGGni5xzcouA56NqMV8A
```

## sha256(ByteVector): ByteVector<a id="sha256"></a>

Хеширует массив байтов с помощью алгоритма [SHA-256](https://ru.wikipedia.org/wiki/SHA-2).

``` ride
sha256(bytes: ByteVector): ByteVector
```

### Параметры

#### `bytes`: ByteVector

Массив байтов для хеширования.

### Примеры

```ride
let bytes = 1.toBytes() # Конвертирует целочисленное значение 1 в значение байт-вектора и возвращает 11111112
sha256(bytes) # Возвращает EopXQgpDyH5hb8Ts6PBSX24Byi65xthuUdLXbtSf4kA3
```
