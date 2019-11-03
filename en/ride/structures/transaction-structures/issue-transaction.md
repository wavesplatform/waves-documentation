# IssueTransaction

Structure of an [issue transaction](/blockchain/transaction-type/issue-transaction.md).

### Constructor

``` ride
IssueTransaction(quantity: Int, name: ByteVector, description: ByteVector, reissuable: Boolean, decimals: Int, script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ride/data-types/int.md) | Amount of the [token](/blockchain/token.md) |
| 2 | name | [ByteVector](/ride/data-types/byte-vector.md) | Token name |
| 3 | description | [ByteVector](/ride/data-types/byte-vector.md) | Token description |
| 4 | reissuable | [Boolean](/ride/data-types/boolean.md) | Reissue ability flag |
| 5 | decimals | [Int](/ride/data-types/int.md) | Number of digits in decimal part |
| 6 | script | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Script](/ride/script.md) that must be set for the generated token |
| 7 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Account public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Array of [proofs](/blockchain/transaction/transaction-proof.md) |
