# StringEntry

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/blockchain/blockchain-network/stage-network.md) only.

Structure of a string data record of an [account data storage](/blockchain/account/account-data-storage.md).

## Constructor

```ride
BinaryEntry(key: String, value: String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Key of a record. Maximum of 100 characters |
| 2 | value| [String](/ride/data-types/byte-vector.md) | Value of a record. Maximum of 5 Kbytes |
