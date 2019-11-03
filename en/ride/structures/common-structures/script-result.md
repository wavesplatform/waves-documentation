# ScriptResult

Structure of the execution result of a callable function.

## Constructor

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ride/structures/common-structures/write-set.md) | List of records of an [account data storage](/blockchain/account/account-data-storage.md) |
| 2 | transferSet | [TransferSet](/ride/structures/common-structures/transfer-set.md) | List of [tokens](/blockchain/token.md) of a transfer |
