# LeaseTransaction

Структура [транзакции лизинга](/blockchain/transaction-type/lease-transaction.md).

## Конструктор

``` ride
LeaseTransaction(amount: Int, recipient: Address|Alias, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | amount | [Int](/ride/data-types/int.md) | Количество [токена](/blockchain/token.md), отдаваемого в лизинг |
| 2 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) получателя лизинга |
| 3 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID транзакции](/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/ride/data-types/int.md) | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/ride/data-types/int.md) | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/ride/data-types/int.md) | [Версия транзакции](/blockchain/transaction/transaction-version.md) |
| 7 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Байты тела транзакции](/blockchain/transaction/transaction-body-bytes.md) |
| 10 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Список [подтверждений](/blockchain/transaction/transaction-proof.md) |
