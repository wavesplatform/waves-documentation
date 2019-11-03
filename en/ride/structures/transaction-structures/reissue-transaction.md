# ReissueTransaction

Structure of a [reissue transaction](/blockchain/transaction-type/reissue-transaction.md).

## Constructor

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ride/data-types/int.md) | Amount of the [token](/blockchain/token.md) |
| 2 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [Token ID](/blockchain/token/token-id.md) |
| 3 | reissuable | [Boolean](/ride/data-types/boolean.md) | Reissue flag |
| 4 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 5 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 6 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 7 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 8 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the transaction sender |
| 9 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Public key of the transaction sender |
| 10 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 11 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | [Proofs](/blockchain/transaction/transaction-proof.md) |
