# Функции верификации

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean](#check-merkle-proof) | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| 2 | [rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean](#rsa-verify) | Проверяет, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна; то есть что она была создана владельцем открытого ключа | 300 |
| 3 | [sigVerify(ByteVector, ByteVector, ByteVector): Boolean](#sig-verify) | Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа | 100 |

## checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean<a id="check-merkle-proof"></a>

Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей).

Для хеширования [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) используется функция хеширования [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29).

``` ride
checkMerkleProof(merkleRoot: ByteVector, merkleProof: ByteVector, valueBytes: ByteVector): Boolean
```

### Параметры

#### merkleRoot: ByteVector

Корневой хеш дерева Меркла.

#### merkleProof: ByteVector

Массив хешей.

#### valueBytes: ByteVector

Данные для проверки.

## rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean<a id="rsa-verify"></a>

Проверяет, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна; то есть что она была создана владельцем открытого ключа.

``` ride
rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Параметры

#### `digest`: digestAlgorithmType

Алгоритм хеширования, который применяется к данным.

Значение должно быть одной из [встроенных переменных](ru/ride/variables/built-in-variables.md):

* NOALG
* MD5
* SHA1
* SHA224
* SHA256
* SHA384
* SHA512
* SHA3224
* SHA3256
* SHA3384
* SHA3512

Все переменные, за исключением `NOALG`, представляют алгоритмы хеширования. Если используется `NOALG`, тогда данные не хешируются.

#### `message`: ByteVector

Подписанные данные.

#### `sig`: ByteVectore

Цифровая подпись.

#### `pub`: ByteVectore

Открытый ключ.

## sigVerify(ByteVector, ByteVector, ByteVector): Boolean<a id="sig-verify"></a>

Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа.

``` ride
sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Параметры

#### `message`: ByteVector

Подписанные данные.

#### `sig`: ByteVectore

Цифровая подпись.

#### `pub`: ByteVectore

Открытый ключ.
