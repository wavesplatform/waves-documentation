# BurnTransaction

Структура [транзакции сжигания токена](/blockchain/transaction-type/burn-transaction.md).

## Конструктор

``` ride
BurnTransaction(quantity: Int, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ride/data-types/int.md) | Количество сжигаемого [токена](/blockchain/token.md) |
| 2 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID сжигаемого токена](/blockchain/token/token-id.md) |
| 3 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID транзакции](/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/ride/data-types/int.md) | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/ride/data-types/int.md) | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/ride/data-types/int.md) | [Версия транзакции](/blockchain/transaction/transaction-version.md) |
| 7 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Байты тела транзакции](/blockchain/transaction/transaction-body-bytes.md) |
| 10 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Список [подтверждений](/blockchain/transaction/transaction-proof.md) |
