# ReissueTransaction

Структура [транзакции довыпуска](/blockchain/transaction-type/reissue-transaction.md).

## Конструктор

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ride/data-types/int.md) | Количество [токена](/blockchain/token.md) |
| 2 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID токена](/blockchain/token/token-id.md) |
| 3 | reissuable | [Boolean](/ride/data-types/boolean.md) | Флаг довыпуска |
| 4 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID транзакции](/blockchain/transaction/transaction-id.md) |
| 5 | fee | [Int](/ride/data-types/int.md) | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) |
| 6 | timestamp | [Int](/ride/data-types/int.md) | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) |
| 7 | version | [Int](/ride/data-types/int.md) | [Версия транзакции](/blockchain/transaction/transaction-version.md) |
| 8 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя транзакции |
| 9 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 10 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Байты тела транзакции](/blockchain/transaction/transaction-body-bytes.md) |
| 11 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | [Подтверждения](/blockchain/transaction/transaction-proof.md) |
