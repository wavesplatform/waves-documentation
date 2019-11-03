# Бинарный формат ордера

> Подробнее об ордере читайте на странице [Биржевая заявка](/blockchain/order.md)

В [транзакции обмена версии 2](/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format.md#v2) могут использоваться версии [3](#v3), [2](#v2) и [1](#v1) ордера.

В [транзакции обмена версии 1](/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format.md#v1) может использоваться только версия [1](#v1) ордера.

## Ордер версии 3 <a id="v3"></a>

| Порядковый номер поля | Название поля | Название JSON-поля | Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Номер версии бинарного формата [ордера](/blockchain/order.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md)| 1 | Значение должно быть равно 3 |
| 2 | Открытый ключ отправителя ордера | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3 | Открытый ключ [матчера](/blockchain/waves-node/extensions/matcher.md) | matcherPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 4.1 | Флаг токена Б |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если токен [WAVES](/blockchain/token/waves.md), то значение 0, иначе — 1 |
| 4.2 | [ID токена](/blockchain/token/token-id.md) Б | amountAsset | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 5.1 | Флаг токена А |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если токен WAVES, то значение 0, иначе — 1 |
| 5.2 | ID токена А | priceAsset | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 6 | Тип ордера | orderType | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если ордер на покупку, то значение 0, если на продажу — 1 |
| 7 | Количество токена Б, которое отправитель ордера предлагает за один токен А | price | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | Количество токена А, которое отправитель ордера хочет купить или продать в зависимости от типа ордера | amount | Long | 8 |  |
| 9 | Количество миллисекунд с начала [эпохи Unix](https://ru.wikipedia.org/wiki/Unix-время) до момента валидации ордера матчером | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | Количество миллисекунд с начала эпохи Unix до момента [отмены](/blockchain/order.md#cancel) невыполненного ордера | expiration | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Комиссия матчера](/blockchain/matcher-fee.md) | matcherFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | Флаг токена комиссии матчера |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если токен WAVES, то значение 0, иначе — 1 |
| 13 | Токен комиссии матчера | matcherFeeAssetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `F` | Если токен комиссии не WAVES, то `F` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 14 | [Подтверждения](/blockchain/transaction/transaction-proof.md) | proofs | Array[[Подтверждение](/blockchain/transaction/transaction-proof.md)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление ордера версии 3

``` json
{
  "version": 3,
  "senderPublicKey": "FMc1iASTGwTC1tDwiKtrVHtdMkrVJ1S3rEBQifEdHnT2",
  "matcherPublicKey": "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
  "assetPair": {
    "amountAsset": "BrjUWjndUanm5VsJkbUip8VRYy6LWJePtxya3FNv4TQa",
    "priceAsset": null
  },
  "orderType": "buy",
  "amount": 150000000,
  "timestamp": 1548660872383,
  "expiration": 1551252872383,
  "matcherFee": 300000,
  "proofs": [
    "YNPdPqEUGRW42bFyGqJ8VLHHBYnpukna3NSin26ERZargGEboAhjygenY67gKNgvP5nm5ZV8VGZW3bNtejSKGEa"
  ],
  "id": "Ho6Y16AKDrySs5VTa983kjg3yCx32iDzDHpDJ5iabXka",
  "sender": "3PEFvFmyyZC1n4sfNWq6iwAVhzUT87RTFcA",
  "price": 1799925005,
  
}
```

## Ордер версии 2 <a id="v2"></a>

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Номер версии бинарного формата [ордера](/blockchain/order.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 2 | Открытый ключ отправителя ордера | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3 | Открытый ключ [матчера](/blockchain/waves-node/extensions/matcher.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 4.1 | Флаг токена А | [Short](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если токен [WAVES](/blockchain/token/waves.md), то значение 0, иначе — 1 |
| 4.2 | [ID токена](/blockchain/token/token-id.md) А | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 5.1 | Флаг токена Б | [Short](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если токен WAVES, то значение 0, иначе — 1 |
| 5.2 | ID токена Б | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 6 | Тип ордера | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если ордер на покупку, то значение 0, если на продажу — 1 |
| 7 | Количество токена А | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество токена А, которое отправитель ордера предлагает за один токен Б |
| 8 | Количество токена Б | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество токена Б, которое отправитель ордера хочет купить |
| 9 | Количество миллисекунд с начала [эпохи Unix](https://ru.wikipedia.org/wiki/Unix-время) до момента валидации ордера матчером | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | Количество миллисекунд с начала эпохи Unix до момента [отмены](/blockchain/order.md#cancel) невыполненного ордера | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Максимальное значение: время отправки ордера + 30 дней |
| 11 | [Комиссия матчера](/blockchain/matcher-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Подтверждения](/blockchain/transaction/transaction-proof.md) | Array[[Подтверждение](/blockchain/transaction/transaction-proof.md)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## Ордер версии 1 <a id="v1"></a>

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Открытый ключ отправителя [ордера](/blockchain/order.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 2 | Открытый ключ [матчера](/blockchain/waves-node/extensions/matcher.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3.1 | Флаг токена A | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если [WAVES](/blockchain/token/waves.md), то значение 0, иначе — 1 |
| 3.2 | [ID токена](/blockchain/token/token-id.md) А | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 4.1 | Флаг токена Б | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если WAVES, то значение 0, иначе — 1 |
| 4.2 | ID токена Б | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 5 | Тип ордера | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Если ордер на покупку, то значение 0, если на продажу — 1 |
| 6 | Количество токена А, которое отправитель ордера предлагает за единицу токена Б  | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 7 | Количество токена Б, которое отправитель ордера хочет купить | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | Количество миллисекунд с начала [эпохи Unix](https://ru.wikipedia.org/wiki/Unix-время) до момента валидации ордера матчером | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Количество миллисекунд с начала эпохи Unix до момента [отмены](/blockchain/order.md#cancel) невыполненного ордера | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Комиссия матчера](/blockchain/matcher-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | Подпись отправителя ордера | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |
