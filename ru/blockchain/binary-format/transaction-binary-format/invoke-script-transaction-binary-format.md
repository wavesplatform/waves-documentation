# Бинарный формат транзакции вызова скрипта

> Узнать больше о [транзакции вызова скрипта](/blockchain/transaction-type/invoke-script-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 16 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 1 |
| 4 | [Байт сети](/blockchain/blockchain-network/chain-id.md) |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 для [тестовой сети](/blockchain/blockchain-network/test-network.md), 87 для [основной сети](/blockchain/blockchain-network/main-network.md) |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) | dApp | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 26 | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) dApp, скрипт которого должен быть вызван |
| 7 | Флаг адреса или псевдонима |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 1 — для идентификации отправителя используется адрес.<br>2 — для идентификации отправителя используется псевдоним. |
| 8 | Байт сети |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Дублирует указанный выше байт сети |
| 9 | Хеш адреса |  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 20 |  |
| 10 | [Контрольная сумма](https://ru.wikipedia.org/wiki/Контрольная_сумма) адреса |  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 4 |  |
| 11 | Длина псевдонима |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 12 | Имя псевдонима |  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | От 4 до 30 байтов |  |
| 13.1 | Флаг наличия функции |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — в dApp должна быть вызвана функция по умолчанию.<br>1 — в dApp должна быть вызвана функция из текущей транзакции. |
| 13.2 | Идентификатор вызова функции |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Константа. Значение должно быть равно 9 |
| 13.3 | Идентификатор типа функции |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Константа. Значение должно быть равно 1 |
| 13.4 | Имя функции | function | [String](/blockchain/blockchain/blockchain-data-types.md) | До 255 |  |
| 13.5.1 | Количество аргументов функции |  | [Integer](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 13.5.2 | ID типа аргумента 1 | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — типом аргумента является длинное целое.<br>1 — типом аргумента является массив байтов.<br>2 — типом аргумента является строка.<br>6 — типом аргумента является логическое значение True.<br>7 — типом аргумента является логическое значение False |
| 13.5.3 | Аргумент 1 | value | - [Long](/blockchain/blockchain/blockchain-data-types.md)<br>- Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)]<br>- [String](/blockchain/blockchain/blockchain-data-types.md)<br>- логическое значение True<br>- логическое значение False | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов или строка, то ограничение на размер поля отсутствует. Объем хранимых в поле данных не должен превышать 5 Килобайт.<br>`S` = 1, если типом является логическое значение True или False |
| 13.5.4 | ID типа аргумента 2 | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — типом аргумента является длинное целое.<br>1 — типом аргумента является массив байтов.<br>2 — типом аргумента является строка.<br>6 — типом аргумента является логическое значение True.<br>7 — типом аргумента является логическое значение False |
| 13.5.5 | Аргумент 2 | value | - [Long](/blockchain/blockchain/blockchain-data-types.md)<br>- Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)]<br>- [String](/blockchain/blockchain/blockchain-data-types.md)<br>- логическое значение True<br>- логическое значение False | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов или строка, то ограничение на размер поля отсутствует. Объем хранимых в поле данных не должен превышать 5 Килобайт.<br>`S` = 1, если типом является логическое значение True или False |
| ... | ... | ... | ... | ... | ... |
| 13.5.[2 × N] | ID типа аргумента N | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — типом аргумента является длинное целое.<br>1 — типом аргумента является массив байтов.<br>2 — типом аргумента является строка.<br>6 — типом аргумента является логическое значение True.<br>7 — типом аргумента является логическое значение False |
| 13.5.[2 × N + 1] | Аргумент N | value | - [Long](/blockchain/blockchain/blockchain-data-types.md)<br>- Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)]<br>- [String](/blockchain/blockchain/blockchain-data-types.md)<br>- логическое значение True<br>- логическое значение False | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов или строка, то ограничение на размер поля отсутствует. Объем хранимых в поле данных не должен превышать 5 Килобайт.<br>`S` = 1, если типом является логическое значение True или False |
| 14.1 | Количество платежей |  | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.2 | Количество токена в платеже 1 | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.3 | ID токена платежа 1 | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 14.4 | Флаг токена платежа 1 |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES.<br>1 — другой токен |
| 14.5 | ID токена платежа 1 |  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | Поле применимо, если токен не является WAVES |
| 14.6 | Количество токена в платеже 2 | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.7 | ID токена платежа 2 | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 14.8 | Флаг токена платежа 2 |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — [WAVES](/blockchain/token/waves.md).<br>1 — другой токен |
| 14.9 | ID токена платежа 2 |  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | Поле применимо, если токен не является WAVES |
| ... | ... | ... | ... | ... | ... |
| 14.[4 × N + 2] | Количество токена в платеже N | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.[4 × N + 3] | ID токена платежа N | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 14.[4 × N + 4] | Флаг токена платежа N |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES.<br>1 — другой токен |
| 14.[4 × N + 5] | ID токена платежа N |  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | Поле применимо, если токен не является WAVES |
| 15 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 16 | ID ассета комиссии | feeAssetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0, если токеном является WAVES.<br>`S` = 32, если это другой токен |
| 17 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 18 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq) в Node API.
