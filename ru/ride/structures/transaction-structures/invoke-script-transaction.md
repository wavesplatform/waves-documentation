# InvokeScriptTransaction

Структура [транзакции вызова скрипта](/blockchain/transaction-type/invoke-script-transaction.md).

## Конструктор

``` ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) [аккаунта](/blockchain/account.md), который вызывает функцию |
| 2 | payment | [AttachedPayment](/ride/structures/common-structures/attached-payment.md)&#124;[Unit](/ride/data-types/unit.md) | Платёж, приложенный к [транзакции](/blockchain/transaction.md) |
| 3 | feeAssetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Токен](/blockchain/token.md) комиссии. В настоящее время им может быть только [WAVES](/blockchain/token/waves.md) |
| 4 | function | [String](/ride/data-types/string.md) | Имя [функции](/ride/functions.md) |
| 5 | args | [List](/ride/data-types/list.md)[[Boolean](/ride/data-types/boolean.md)&#124;[ByteVector](/ride/data-types/byte-vector.md)&#124;[Int](/ride/data-types/int.md)&#124;[String](/ride/data-types/string.md)] | Параметры[ функции](/ride/functions.md) |
| 6 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID транзакции](/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/ride/data-types/int.md) | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/ride/data-types/int.md) | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/ride/data-types/int.md) | [Версия транзакции](/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/ride/structures/common-structures/address.md) | [Адрес](/blockchain/account/address.md) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | Байты тела транзакции |
| 13 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Список [подтверждений](/blockchain/transaction/transaction-proof.md) |
