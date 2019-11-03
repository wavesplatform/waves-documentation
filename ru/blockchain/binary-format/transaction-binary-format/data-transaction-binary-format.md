# Бинарный формат транзакции данных

> Узнать больше о [транзакции данных](/blockchain/transaction-type/data-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии | | [Byte](/blockchain/blockchain/blockchain-data-types.md)  | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 12 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 1 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5 | Количество элементов в массиве данных | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 6.1 | Длина ключа 1-го элемента | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 6.2 | Ключ 1-го элемента | key | [String](/blockchain/blockchain/blockchain-data-types.md) | 4 × `L` | `L` — длина ключа |
| 6.3 | Тип данных 1-го элемента | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | |
| 6.4 | Длина данных 1-го элемента |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Текущее поле присутствует только если значением поля данных является массив байтов или строка.<br>Текущее поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.5 | Данные 1-го элемента | value | `T` | Зависит от размера данных | `T` — один из следующих: <br> - [Long](/blockchain/blockchain/blockchain-data-types.md)<br> - Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)]<br> - [Boolean](/blockchain/blockchain/blockchain-data-types.md)<br> - [String](/blockchain/blockchain/blockchain-data-types.md) |
| 6.6 | Длина ключа 2-го элемента | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 6.7 | Ключ 2-го элемента | key | [String](/blockchain/blockchain/blockchain-data-types.md) | 4 × `L` | `L` — длина ключа |
| 6.8 | Тип данных 2-го элемента | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | |
| 6.9 | Длина данных 2-го элемента |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Текущее поле присутствует только если значением поля данных является массив байтов или строка.<br>Текущее поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.10 | Данные 2-го элемента | value | `T` | Зависит от размера данных | `T` — один из следующих: <br> - [Long](/blockchain/blockchain/blockchain-data-types.md)<br> - Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)]<br> - [Boolean](/blockchain/blockchain/blockchain-data-types.md)<br> - [String](/blockchain/blockchain/blockchain-data-types.md) |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 6.[5 × N - 4] | Длина ключа N-го элемента | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 6.[5 × N - 3] | Ключ N-го элемента | key | [String](/blockchain/blockchain/blockchain-data-types.md) | 4 × `L` | `L` — длина ключа |
| 6.[5 × N - 2] | Тип данных N-го элемента | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | |
| 6.[5 × N - 1] | Длина данных N-го элемента |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Текущее поле присутствует только если значением поля данных является массив байтов или строка.<br>Текущее поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.[5 × N] | Данные N-го элемента | value | `T` | Зависит от размера данных | `T` — один из следующих: <br> - [Long](/blockchain/blockchain/blockchain-data-types.md)<br> - Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)]<br> - [Boolean](/blockchain/blockchain/blockchain-data-types.md)<br> - [String](/blockchain/blockchain/blockchain-data-types.md) |
| 7 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + \(`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>\), <br>где <br>`N` — количество подтверждений в массиве, <br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции <a id="json-representation"></a>

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/EByjQAWDRGrmc8uy7xRGy2zsQXZQq59bav7h8oTTJyHC) в Node API.
