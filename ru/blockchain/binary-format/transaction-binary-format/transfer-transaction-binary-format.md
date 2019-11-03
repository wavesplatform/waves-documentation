# Бинарный формат транзакции перевода

> Узнать больше о [транзакции перевода](/blockchain/transaction-type/transfer-transaction.md)

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 4 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5 | Флаг типа переводимого токена |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — [WAVES](/blockchain/token/waves.md)<br>1 — другой токен |
| 6 | [ID](/blockchain/token/token-id.md) переводимого токена | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0 если значение поля 5 равно 0.<br>`S` = 32 если значение поля 5 не равно 0 |
| 7 | Флаг типа токена комиссии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES<br>1 — другой токен |
| 8 | ID токена комиссии | feeAssetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0 если значение поля 7 равно 0.<br>`S` = 32 если значение поля 7 не равно 0 |
| 9 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | Количество токена для перевода | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) получателя | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | Если первым байтом поля является 1, то за ним следует адрес.<br>Если первым байтом поля является 2, то за ним следует псевдоним |
| 13 | Длина вложения |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 14 | Вложение | attachment | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | До 140 включительно | Может включать произвольные данные |
| 15 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | Array[[Подтверждение](/blockchain/transaction/transaction-proof.md)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) в Node API.

## Транзакция версии 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 4 |
| 2 | [Подпись транзакции](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |
| 3 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 4 | Флаг типа переводимого токена | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — [WAVES](/blockchain/token/waves.md)<br>1 — другой токен |
| 5 | [ID](/blockchain/token/token-id.md) переводимого токена | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 6 | Флаг типа токена комиссии | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES<br>1 — другой токен |
| 7 | ID токена комиссии | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 8 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Количество токена для перевода | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) получателя | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | Если первым байтом поля является 1, то за ним следует адрес.<br>Если первым байтом поля является 2, то за ним следует псевдоним |
| 12 | Длина вложения | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 13 | Вложение | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | До 140 включительно | Может включать произвольные данные |
