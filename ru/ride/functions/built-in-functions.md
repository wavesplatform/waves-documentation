# Встроенные функции

**Встроенная функция** — [функция](/ride/functions.md) [контекста скрипта](/ride/script/script-context.md).

## Список встроенных функций

### [Математические функции](/ride/functions/built-in-functions/math-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | fraction(Int, Int, Int): Int | Конвертирует произвольно большое знаковое целое число в целое число | 1 |
| 2 | log(Int, Int, Int, Int, Int, Union): Int | Находит логарифм числа | 100 |
| 3 | pow(Int, Int, Int, Int, Int, Union): Int | Возводит число в степень | 100 |

### [Функции блокчейна](/ride/functions/built-in-functions/blockchain-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | assetInfo(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/blockchain/token.md) | 100 |
| 2 | blockInfoByHeight(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/blockchain/block.md) по [высоте блока](/blockchain/block/block-height.md) | 100 |
| 3 | transactionHeightById(ByteVector):  Int&#124;Unit | Получает [высоту блока](/blockchain/block/block-height.md) транзакции | 100 |
| 4 | transferTransactionById(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/blockchain/transaction-type/transfer-transaction.md) | 100 |

### [Функции верификации](/ride/functions/built-in-functions/verification-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| 2 | rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна; то есть что она была создана владельцем открытого ключа | 300 |
| 3 | sigVerify(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа | 100 |

### [Функции декодирования](/ride/functions/built-in-functions/decoding-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | addressFromString(String): Address&#124;Unit | Декодирует адрес из строки [Base58](https://en.wikipedia.org/wiki/Base58) | 124 |
| 2 | addressFromStringValue(String): Address | Декодирует адрес из строки [Base58](https://en.wikipedia.org/wiki/Base58). <br>Выбрасывает исключение, если адрес невозможно декодировать | 124 |
| 3 | fromBase16String(String): ByteVector | Декодирует строку [Base16](https://en.wikipedia.org/wiki/Hexadecimal) в массив байтов | 10 |
| 4 | fromBase58String(String): ByteVector | Декодирует строку [Base58](https://en.wikipedia.org/wiki/Base58) в массив байтов | 10 |
| 5 | fromBase64String(String): ByteVector | Декодирует строку [Base64](https://en.wikipedia.org/wiki/Base64) в массив байтов | 10 |

### [Функции исключения](/ride/functions/built-in-functions/exception-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | throw() | Выбрасывает исключение | 1 |
| 2 | throw(String) | Выбрасывает исключение с сообщением | 1 |

### [Функции кодирования](/ride/functions/built-in-functions/encoding-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | toBase16String(ByteVector): String | Кодирует массив байтов в строку [Base16](https://en.wikipedia.org/wiki/Hexadecimal) | 10 |
| 2 | toBase58String(ByteVector): String | Кодирует массив байтов в строку [Base58](https://en.wikipedia.org/wiki/Base58) | 10 |
| 3 | toBase64String(ByteVector): String | Кодирует массив байтов в строку [Base64](https://en.wikipedia.org/wiki/Base64) | 10 |

### [Функции конвертации](/ride/functions/built-in-functions/converting-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | addressFromPublicKey(ByteVector): Address | Получает [адрес](/blockchain/account/address.md), соответствующий открытому ключу аккаунта | 82 |
| 2 | addressFromRecipient(Address&#124;Alias): Address | Получает [адрес](/blockchain/account/address.md), соответствующий [псевдониму](/blockchain/account/alias.md) | 100 |
| 3 | parseInt(String): Int&#124;Unit | Конвертирует строковое представление числа в эквивалентное целое число | 20 |
| 4 | parseIntValue(String): Int | Конвертирует строковое представление числа в эквивалентное целое число. <br>Выбрасывает исключение, если строка не может быть спарсена | 20 |
| 5 | toBytes(Boolean): ByteVector | Конвертирует логическое значение в массив байтов | 1 |
| 6 | toBytes(Int): ByteVector | Конвертирует целое число в массив байтов | 1 |
| 7 | toBytes(String): ByteVector | Конвертирует строку в массив байтов | 1 |
| 8 | toInt(ByteVector): Int | Конвертирует массив байтов в целое число | 10 |
| 9 | toInt(ByteVector, Int): Int | Конвертирует массив байтов, начиная с указанного индекса, в целое число | 10 |
| 10 | toString(Address): String | Конвертирует массив байтов [адреса](/blockchain/account/address.md) в строку | 10 |
| 11 | toString(Boolean): String | Конвертирует логическое значение в строку | 1 |
| 12 | toString(Int): String | Конвертирует целое число в строку | 1 |
| 13 | toUtf8String(ByteVector): String | Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8) | 20 |

### [Функции массива байтов](/ride/functions/built-in-functions/byte-array-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | drop(ByteVector, Int): ByteVector | Возвращает массив байтов без первых `N` байтов | 1 |
| 2 | dropRight(ByteVector, Int): ByteVector | Возвращает массив байтов без последних `N` байтов | 19 |
| 3 | size(ByteVector): Int | Возвращает количество байтов в массиве байтов	 | 1 |
| 4 | take(ByteVector, Int): ByteVector | Возвращает первые `N` байтов массива байтов | 1 |
| 5 | takeRight(ByteVector, Int): ByteVector | Возвращает последние `N` байтов массива байтов	 | 19 |

### [Функции объединения](/ride/functions/built-in-functions/union-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | extract(T&#124;Unit): T | Возвращает значение из параметра типа данных [объединения](/ride/data-types/union.md). Выбрасывает исключение, если параметром является [пустое значение](/ride/data-types/unit.md) | 13 |
| 3 | value(T&#124;Unit): T | Возвращает значение из параметра типа данных [объединения](/ride/data-types/union.md). Выбрасывает исключение, если параметром является [пустое значение](/ride/data-types/unit.md) | 13 |
| 4 | valueOrErrorMessage(T&#124;Unit, String): T | Возвращает значение из параметра типа данных [объединения](/ride/data-types/union.md). Если параметром является [пустое значение](/ride/data-types/unit.md), возвращает сообщение об ошибке, заданное во втором параметре | 13 |

### [Функции получения данных из хранилища данных аккаунта](/ride/functions/built-in-functions/account-data-storage-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | assetBalancе(Address&#124;Alias, ByteVector): Int | Получает баланс аккаунта по ID токена | 100 |
| 2 | getBinary(Address&#124;Alias, String): ByteVector&#124;Unit | Получает массив байтов по ключу | 100 |
| 3 | getBinaryValue(Address&#124;Alias, String): ByteVector | Получает массив байтов по ключу. Выбрасывает исключение, если данных нет | 100 |
| 4 | getBoolean(Address&#124;Alias, String): Boolean&#124;Unit | Получает логическое значение по ключу | 100 |
| 5 | getBooleanValue(Address&#124;Alias, String): Boolean | Получает логическое значение по ключу. Выбрасывает исключение, если данных нет | 100 |
| 6 | getInteger(Address&#124;Alias, String): Int&#124;Unit | Получает целое число по ключу | 100 |
| 7 | getIntegerValue(Address&#124;Alias, String): Int | Получает целое число по ключу. Выбрасывает исключение, если данных нет | 100 |
| 8 | getString(Address&#124;Alias, String): String&#124;Unit | Получает строку по ключу | 100 |
| 9 | getStringValue(Address&#124;Alias, String): String | Получает строку по ключу. Выбрасывает исключение, если данных нет | 100 |
| 10 | wavesBalance(Address&#124;Alias): Int | Получает баланс аккаунта в [WAVES](/blockchain/token/waves.md) | 109 |

### [Функции списка](/ride/functions/built-in-functions/list-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | getElement(List[T], Int): T | Получает элемент по индексу | 2 |
| 2 | cons(T, List[T]): List[T] | Вставляет элемент в начало списка | 2 |
| 3 | size(List[T]): Int | Возвращает размер списка | 2 |

### [Функции строки](/ride/functions/built-in-functions/string-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | drop(String, Int): String | Удаляет первые `n` символов строки | 1 |
| 2 | dropRight(String, Int): String | Удаляет последние `n` символов строки | 19 |
| 3 | indexOf(String, String): Int&#124;Unit | Возвращает индекс первого вхождения подстроки | 20 |
| 4 | indexOf(String, String, Int): Int&#124;Unit | Возвращает индекс первого вхождения подстроки после указанного индекса | 20 |
| 5 | size(String): Int | Возвращает длину строки | 1 |
| 6 | split(String, String): List[String] | Разбивает строку на список подстрок, используя разделитель | 100 |
| 7 | take(String, Int): String | Возвращает первые `n` символов строки | 1 |
| 8 | takeRight(String, Int): String | Возвращает последние `n` символов строки | 19 |

### [Функции транзакции данных](/ride/functions/built-in-functions/data-transaction-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | getInteger(List[DataEntry], String): Int&#124;Unit | Возвращает целое число из списка записей данных по ключу | 10 |
| 2 | getInteger(List[DataEntry], Int): Int&#124;Unit | Возвращает целое число из списка записей данных по индексу | 30 |
| 3 | getIntegerValue(List[DataEntry], String): Int | Возвращает целое число из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 4 | getIntegerValue(List[DataEntry], Int): Int | Возвращает целое число из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| 5 | getBoolean(List[DataEntry], String): Boolean&#124;Unit | Возвращает логическое значение из списка записей данных по ключу | 10 |
| 6 | getBoolean(List[DataEntry], Int): Boolean&#124;Unit | Возвращает логическое значение из списка записей данных по индексу | 30 |
| 7 | getBooleanValue(List[DataEntry], String): Boolean | Возвращает логическое значение из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 8 | getBooleanValue(List[DataEntry], Int): Boolean | Возвращает логическое значение из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| 9 | getBinary(List[DataEntry], String): ByteVector&#124;Unit | Возвращает массив байтов из списка записей данных по ключу | 10 |
| 10 | getBinary(List[DataEntry], Int): ByteVector&#124;Unit | Возвращает массив байтов из списка записей данных по индексу | 30 |
| 11 | getBinaryValue(ListDataEntry, String): ByteVector | Возвращает массив байтов из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 12 | getBinaryValue(List[DataEntry], Int): ByteVector | Возвращает массив байтов из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| 13 | getString(List[DataEntry] String): String&#124;Unit | Возвращает строку из списка записей данных по ключу | 10 |
| 14 | getString(List[DataEntry], Int): String&#124;Unit | Возвращает строку из списка записей данных по индексу | 30 |
| 15 | getStringValue(List[DataEntry], String): String | Возвращает строку из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| 16 | getStringValue(List[DataEntry], Int): String | Возвращает строку из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |

### [Функции хеширования](/ride/functions/built-in-functions/hashing-functions.md)

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | blake2b256(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10 |
| 2 | keccak256(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) | 10 |
| 3 | sha256(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10 |
