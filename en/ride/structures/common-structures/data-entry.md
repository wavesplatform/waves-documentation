# DataEntry (for Standard Library version 3)

> [!WARNING]
> The structure is disabled in Standard library version 4. Use `BinaryEntry`, `BooleanEntry`, `IntEntry`, and `StringEntry` instead of it.


Structure of a data record of an [account data storage](/blockchain/account/account-data-storage.md).

## Constructor

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Key of a record |
| 2 | value|[Int](/ride/data-types/int.md)&#124;[Boolean](/ride/data-types/boolean.md)&#124;[ByteVector](/ride/data-types/byte-vector.md)&#124;[String](/ride/data-types/string.md) | Value of a record |
