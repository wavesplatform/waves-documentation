# GenesisTransaction

Structure of a [genesis transaction](/blockchain/transaction-type/genesis-transaction.md).

### Constructor

``` ride
GenesisTransaction(amount: Int, recipient: Address|Alias, id: ByteVector, fee: Int, timestamp: Int, version: Int)
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | amount | [Int](/ride/data-types/int.md) | Amount of the [token](/blockchain/token.md) |
| 2 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the token recipient |
| 3 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
