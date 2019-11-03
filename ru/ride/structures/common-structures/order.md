# Order

Структура ордера.

### Конструктор

``` ride
Order(id: ByteVector, matcherPublicKey: ByteVector, assetPair: AssetPair, orderType: Buy|Sell, price: Int, amount: Int, timestamp: Int, expiration: Int, matcherFee: Int, matcherFeeAssetId: ByteVector|Unit, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ride/data-types/byte-vector.md) | ID ордера |
| 2 | matcherPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ аккаунта матчера |
| 3 | assetPair | [AssetPair](/ride/structures/common-structures/asset-pair.md) | Пара токенов |
| 4 | orderType | Buy&#124;Sell | Тип ордера — продажа или покупка |
| 5 | price | [Int](/ride/data-types/int.md) | Цена обмениваемого токена |
| 6 | amount | [Int](/ride/data-types/int.md) | Количество обмениваемых токенов |
| 7 | timestamp | [Int](/ride/data-types/int.md) | [Unix-время](https://ru.wikipedia.org/wiki/Unix-время) валидации ордера матчером |
| 8 | expiration | [Int](/ride/data-types/int.md) | Unix-время, когда невыполненный ордер будет отменен |
| 9 | matcherFee | [Int](/ride/data-types/int.md) | Комиссия за исполнение ордера |
| 10 | matcherFeeAssetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | Токен [комиссии за транзакцию](/blockchain/transaction/transaction-fee.md). В настоящее время возможен только WAVES |
| 11 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя ордера |
| 12 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ аккаунта отправителя ордера |
| 13 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | Массив байтов ордера |
| 14 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Массив [подтверждений](/blockchain/transaction/transaction-proof.md) |
