# Exchange transaction

Структура [транзакции обмена](/blockchain/transaction-type/exchange-transaction.md).

## Конструктор

``` ride
ExchangeTransaction(buyOrder: Order, sellOrder: Order, price: Int, amount: Int, buyMatcherFee: Int, sellMatcherFee: Int, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | buyOrder | [Order](/ride/structures/common-structures/order.md) | [Бинарный формат ордера](/blockchain/binary-format/transaction-binary-format.md) на покупку |
| 2 | sellOrder | [Order](/ride/structures/common-structures/order.md) | Ордер на продажу |
| 3 | price | [Int](/ride/data-types/int.md) | Стоимость токена |
| 4 | amount | [Int](/ride/data-types/int.md) | Количество токенов |
| 5 | buyMatcherFee | [Int](/ride/data-types/int.md) | Комиссия [матчера](/waves-node/extensions/matcher.md) за покупку |
| 6 | sellMatcherFee | [Int](/ride/data-types/int.md) | Комиссия матчера за продажу |
| 7 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID транзакции](/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ride/data-types/int.md) | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ride/data-types/int.md) | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ride/data-types/int.md) | [Версия транзакции](/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Байты тела транзакции](/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Список [подтверждений](/blockchain/transaction/transaction-proof.md) |
