# ScriptResult (for Standard Library version 3)

> [!WARNING]
> The structure is disabled in Standard library version 4. Use List[BinaryEntry|BooleanEntry|IntEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn] instead of it .


Structure of the execution result of a callable function.

## For Standard Library version 3

### Constructor

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ride/structures/common-structures/write-set.md) | List of records of an [account data storage](/blockchain/account/account-data-storage.md) |
| 2 | transferSet | [TransferSet](/ride/structures/common-structures/transfer-set.md) | List of [tokens](/blockchain/token.md) of a transfer |

## For Standard Library version 4
> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/blockchain/blockchain-network/stage-network.md) only.

### Constructor

```ride
ScriptResult(actionsSet: List[BinaryEntry|BooleanEntry|IntEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn])
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | actionsSet | [List](/ride/data-types/list.md)[[BinaryEntry](/ride/structures/common-structures/binary-entry.md)\|[BooleanEntry](/ride/structures/common-structures/boolean-entry.md)\|[IntEntry](/ride/structures/common-structures/int-entry.md)\|[StringEntry](/ride/structures/common-structures/string-entry.md) \|[ScriptTransfer](/ride/structures/common-structures/script-transfer.md)\|[Issue](/ride/structures/common-structures/issue.md)\|[Reissue](/ride/structures/common-structures/reissue.md)\|[Burn](/ride/structures/common-structures/burn.md)] | List of data records of an account data storage and token transfers, issues, reissues, and burns|
