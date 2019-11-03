# Invocation

Structure of the abbreviated representation of an [invoke script transaction](/blockchain/transaction-type/invoke-script-transaction.md).

## Constructor

``` ride
Invocation(caller: Address, callerPublicKey: ByteVector, payment: AttachedPayment|Unit, transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ride/structures/common-structures/address.md) |  The [account](/blockchain/account.md) that sent a transaction |
| 2 | callerPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Public key of an account that sent a transaction |
| 3 | payment | [AttachedPayment](/ride/structures/common-structures/attached-payment.md)&#124;[Unit](/ride/data-types/unit.md) | Attached payment |
| 4 | transactionId | [ByteVector](/ride/data-types/byte-vector.md) | ID of a transaction |
| 5 | fee | [Int](/ride/data-types/int.md) | Transaction fee |
| 6 | feeAssetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Token](/blockchain/token.md) of a transaction fee |
