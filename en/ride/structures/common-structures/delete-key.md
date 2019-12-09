# DeleteKey

Deletes [account data storage](/blockchain/account/account-data-storage.md) record by its key.

> This feature is available starting from node version 1.2. This feature can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) functionality on the node.
Version 1.2.x is currently available on stagenet

## Constructor

`DeleteKey(key: String)`

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Record key |

## Example

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteKey(inv.caller.toString()) ]
}
```
