# Бинарный формат транзакции создания псевдонима

> Узнать больше о [транзакции создания псевдонима](/blockchain/transaction-type/alias-transaction.md)

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md)  | 1 | Значение должно быть равно 10 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5 | Длина [псевдонима](/blockchain/account/alias.md) | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Количество символов в имени псевдонима |
| 6 | Псевдоним | alias | [String](/blockchain/blockchain/blockchain-data-types.md) | от 4 до 30 |  |
| 7 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S` = 3. <br> Если массив не пустой, то `S`   = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), <br>где <br>`N` — количество подтверждений в массиве,<br> `P`<sub>n</sub> — размер `N`-го подтверждения в байтах. <br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/5CZV9RouJs7uaRkZY741WDy9zV69npX1FTZqxo5fsryL) в Node API.

## Бинарный формат версии 1

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md)  | 1 | Значение должно быть равно 6 |
| 2 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3 | Длина [псевдонима](/blockchain/account/alias.md) | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | Количество символов в имени псевдонима |
| 4 | Псевдоним | [String](/blockchain/blockchain/blockchain-data-types.md) | от 4 до 30 |  |
| 5 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 6 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 7 | [Подпись транзакции](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |  |
