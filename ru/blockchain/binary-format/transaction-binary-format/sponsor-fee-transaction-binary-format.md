# Бинарный формат транзакции спонсирования

> Узнать больше о [транзакции спонсирования](/blockchain/transaction-type/set-asset-script-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 14 |
| 3 | [Версия транзакции](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 1 |
| 4 | Открытый ключ аккаунта отправителя транзакции | chainId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 5 | [ID](/blockchain/token/token-id.md) спонсируемого токена | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | Минимальная комиссия | minSponsoredAssetFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество спонсируемого токена, которое будет равно минимальной комиссии в WAVES при оплате этим токеном |
| 7 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | [Подтверждения транзакции](/blockchain/transaction/transaction-proof.md) | proofs | Array[[Подтверждение](/blockchain/transaction/transaction-proof.md)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/7EL2XEGP1By427BeLcHPYeVnBzGsXen4egMAwQpWGBVR) в Node API.
