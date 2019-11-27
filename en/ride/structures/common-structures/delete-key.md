# DeleteKey

Deletes [account data storage](/blockchain/account/account-data-storage.md) entry by its key.

## Constructor

``` ride
DeleteKey(key: String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Key of a record |

## Example

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteKey(inv.caller.toString()) ]
}
```
