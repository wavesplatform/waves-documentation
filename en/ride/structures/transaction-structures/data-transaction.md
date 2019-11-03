# DataTransaction

Structure of a [data transaction](/blockchain/transaction-type/data-transaction.md).

### Constructor

``` ride
DataTransaction(data: List[DataEntry], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/ride/data-types/list.md)[[DataEntry](/ride/structures/common-structures/data-entry.md)] | [Transaction](/blockchain/transaction.md)'s data array |
| 2 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 3 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 4 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 5 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 6 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of a transaction sender |
| 7 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Account public key of a sender |
| 8 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 9 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Array of [proofs](/blockchain/transaction/transaction-proof.md) |
