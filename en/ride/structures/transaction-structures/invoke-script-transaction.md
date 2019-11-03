# InvokeScriptTransaction

Structure of an [invoke script transaction](/blockchain/transaction-type/invoke-script-transaction.md).

### Constructor

``` ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the [account](/blockchain/account.md) which is calling a function |
| 2 | payment | [AttachedPayment](/ride/structures/common-structures/attached-payment.md)&#124;[Unit](/ride/data-types/unit.md) | Payment attached to the [transaction](/blockchain/transaction.md) |
| 3 | feeAssetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Token](/blockchain/token.md) to pay the commission. Currently, it can be only in [WAVES](/blockchain/token/waves.md) |
| 4 | function | [String](/ride/data-types/string.md) | Name of the [function](/ride/functions.md) |
| 5 | args | [List](/ride/data-types/list.md)[[Boolean](/ride/data-types/boolean.md)&#124;[ByteVector](/ride/data-types/byte-vector.md)&#124;[Int](/ride/data-types/int.md)&#124;[String](/ride/data-types/string.md)] | Parameters of the [function](/ride/functions.md) |
| 6 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the transaction sender |
| 11 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Account public key of the transaction sender |
| 12 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 13 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Array of [proofs](/blockchain/transaction/transaction-proof.md) |
