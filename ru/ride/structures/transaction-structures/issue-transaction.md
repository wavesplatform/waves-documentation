# IssueTransaction

Структура [транзакции выпуска](/blockchain/transaction-type/issue-transaction.md).

## Конструктор

``` ride
IssueTransaction(quantity: Int, name: ByteVector, description: ByteVector, reissuable: Boolean, decimals: Int, script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ride/data-types/int.md) | Количество [токена](/blockchain/token.md) |
| 2 | name | [ByteVector](/ride/data-types/byte-vector.md) | Название токена |
| 3 | description | [ByteVector](/ride/data-types/byte-vector.md) | Описание токена |
| 4 | reissuable | [Boolean](/ride/data-types/boolean.md) | Флаг возможности довыпуска токена |
| 5 | decimals | [Int](/ride/data-types/int.md) | Число знаков после запятой |
| 6 | script | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Скрипт ассета](/ride/script/script-types/asset-script.md) |
| 7 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID транзакции](/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ride/data-types/int.md) | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ride/data-types/int.md) | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ride/data-types/int.md) | [Версия транзакции](/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Байты тела транзакции](/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Список [подтверждений](/blockchain/transaction/transaction-proof.md) |
