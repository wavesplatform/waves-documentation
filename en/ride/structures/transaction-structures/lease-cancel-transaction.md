# LeaseCancelTransaction

Structure of a [lease cancel transaction](/blockchain/transaction-type/lease-cancel-transaction.md).

### Constructor

``` ride
LeaseCancelTransaction(leaseId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/ride/data-types/byte-vector.md) | Leasing ID |
| 2 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 3 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 4 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 5 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 6 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the transaction sender |
| 7 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Public key of the transaction sender |
| 8 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 9 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | [Proofs](/blockchain/transaction/transaction-proof.md) |
