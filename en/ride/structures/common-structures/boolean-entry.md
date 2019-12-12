# BooleanEntry

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/blockchain/blockchain-network/stage-network.md) only.

Structure of a boolean inary data record of an [account data storage](/blockchain/account/account-data-storage.md).

## Constructor

```ride
BooleanEntry(key: String, value: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Key of a record. Maximum of 100 characters |
| 2 | value| [Boolean](/ride/data-types/boolean.md) | Value of a record |
