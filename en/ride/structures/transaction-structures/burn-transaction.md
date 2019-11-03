# BurnTransaction

Structure of a [burn transaction](/blockchain/transaction-type/burn-transaction.md).

## Constructor

``` ride
BurnTransaction(quantity: Int, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ride/data-types/int.md) | Amount of the [token](/blockchain/token.md) to burn |
| 2 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID of the token](/blockchain/token/token-id.md) to burn |
| 3 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 7 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the transaction sender |
| 8 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Public key of the transaction sender  |
| 9 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 10 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Array of [proofs](/blockchain/transaction/transaction-proof.md) |
