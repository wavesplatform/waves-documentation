# Бинарный формат транзакции обмена

> Подробнее о [транзакции обмена](/blockchain/transaction-type/exchange-transaction.md)

## Транзакция версии 2 <a id="v2"></a>

Транзакция версии 2 может принимать ордера версии [1](/blockchain/binary-format/order-binary-format.md#v1), [2](/blockchain/binary-format/order-binary-format.md#v2) и [3](/blockchain/binary-format/order-binary-format.md#v3).

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 7 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4.1 | Размер ордера на покупку |  | [Int](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 4.2 | Флаг версии ордера на покупку | order1.version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 1 если версия ордера 1.<br>`S` = 0 если версия ордера 2 |
| 4.3 | Ордер на покупку токена | order1 | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 5.1 | Размер ордера на продажу |  | [Int](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 5.2 | Флаг [версии ордера](/blockchain/binary-format/order-binary-format.md) на продажу | order2.version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 1 если версия ордера 1.<br>`S` = 0 если версия ордера 2 |
| 5.3 | Ордер на продажу токена | order2 | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 6 | Стоимость токена для покупки или продажи | price | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество [токена](/blockchain/token.md) Б, которое отправитель ордера предлагает за один токен А |
| 7 | Количество | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество токена А, которое отправитель ордера хочет купить |
| 8 | [Комиссия матчера](/blockchain/matcher-fee.md) за покупку | buyMatcherFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Комиссия матчера за продажу | sellMatcherFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × N + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/9VJCXTdLqtsfvk1d68G5MT237ezQ4g9nuQhWZXR47vi9) в Node API.

## Транзакция версии 1 <a id="v1"></a>

Транзакция версии 1 может принимать ордера только версии 1.

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 7 |
| 2 | Размер ордера на покупку в байтах | [Int](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 3 | Размер ордера на продажу в байтах | [Int](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 4 | Ордер на покупку | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 5 | Ордер на продажу | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 6 | Стоимость | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество [токена](/blockchain/token.md) А, которое отправитель ордера предлагает за один токен Б |
| 7 | Количество | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество токена Б, которое отправитель ордера хочет купить |
| 8 | [Комиссия матчера](/blockchain/matcher-fee.md) за покупку | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Комиссия матчера за продажу | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Подпись транзакции](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |  |
