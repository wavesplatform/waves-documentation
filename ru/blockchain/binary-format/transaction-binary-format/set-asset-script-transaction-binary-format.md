# Бинарный формат транзакции установки скрипта ассета

> Узнать больше о [транзакции установки скрипта ассета](/blockchain/transaction-type/set-asset-script-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 15 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4 | [Байт сети](/blockchain/blockchain-network/chain-id.md) | chainId | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 для [тестовой сети](/blockchain/blockchain-network/test-network.md), 87 для [основной сети](/blockchain/blockchain-network/main-network.md) |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | [ID токена](/blockchain/token/token-id.md), к которому привязывается скрипт ассета | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 7 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Флаг наличия скрипта |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — скрипт не установлен1 — скрипт установлен |
| 10 | Размер скрипта в байтах |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | S | S = 0 если значение поля 9 равно 0.S = 2 если значение поля 9 равно 1 |
| 11 | [Скрипт ассета](/ride/script/script-types/asset-script.md) | script | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | S | S = 0 если значение поля 9 равно 0.1 <= S <= 32768 если значение поля 9 равно 1 |
| 12 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | Array[[Подтверждение](/blockchain/transaction/transaction-proof.md)] | `S`  | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) в Node API.
