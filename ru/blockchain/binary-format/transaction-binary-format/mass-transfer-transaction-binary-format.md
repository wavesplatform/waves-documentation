# Бинарный формат транзакции массового перевода

> Узнать больше о [транзакции массового перевода](/blockchain/transaction-type/mass-transfer-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 11 |
| 2 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 3 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 4.1 | Флаг WAVES/токен |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Равен 0, если переводится [WAVES](/blockchain/token/waves.md).<br>Равен 1, если переводится другой токен |
| 4.2 | ID токена | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | S | S = 0 если значение поля "Флаг WAVES/токен" равно 0.<br>S = 32 если значение поля "Флаг WAVES/токен" равно 1 |
| 5.1 | Количество переводов | transferCount | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Количество переводов токенов в транзакции |
| 5.2 | Сумма всех переводов  | totalAmount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5.3 | [Адрес](/blockchain/address.md) или [псевдоним](/blockchain/account/alias.md) получателя перевода 1 | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5.4 | Количество токена в переводе 1 | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5.5 | Адрес или псевдоним получателя перевода 2 | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5.6 | Количество токена в переводе 2 | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 5.[2× N + 1] | Адрес или псевдоним получателя перевода N | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5.[2× N + 2] | Количество токена в переводе N | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 6 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 7 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8.1 | Длина поля "Вложение" |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 8.2 | Вложение |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Произвольные данные, прикладываемые к транзакции |
| 9 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br> `N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv) в Node API.
