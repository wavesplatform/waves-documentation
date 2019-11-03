# ScriptTransfer

Structure of a [token](/blockchain/token.md) transfer.

### Constructor

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Address](/blockchain/account/address.md) or the [alias](/blockchain/account/alias.md) of a recipient of tokens |
| 2 | amount | [Int](/ride/data-types/int.md) | Number of tokens |
| 3 | asset | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | ID of a token |
