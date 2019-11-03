# Transfer

Structure of a [mass transfer transaction](/blockchain/transaction-type/mass-transfer-transaction.md) token transfer.

## Constructor

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Address](/blockchain/account/address.md) of a recipient of tokens |
| 2 | amount | [Int](/ride/data-types/int.md) | Number of tokens |
