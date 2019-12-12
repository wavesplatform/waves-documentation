# Callable function

A **callable function** is a [function](/ride/functions.md) of a [dApp script](/ride/script/script-types/dapp-script.md) that has `@Callable` [annotation](/ride/functions/annotations.md).

A dApp script may have several callable functions.

A callable function of a [dApp](/blockchain/account/dapp.md) can be invoked by the [invoke script transaction](/blockchain/transaction-type/invoke-script-transaction.md).

## Example (for Standard Library version 3)

```ride
@Callable(inv)
func rate(name: String, rating: Int) = {
    WriteSet([DataEntry(inv.caller.toString(), name + rating.toString()])
}
```

## Example (for Standard Library version 4)

```ride
 @Callable(i)
 func foo() =
   [
     IntegerEntry("key1", 1),
     BooleanEntry("key2", true),
     StringEntry("key3", "str"),
     BinaryEntry("key4", base58''),
     DeleteEntry("key5"),
     ScriptTransfer(i.caller, 1, base58''),
     Issue(unit, 4, "description", true, "name", 1000, 0),
     Reissue(base58'', false, 1),
     Burn(base58'', 1)
   ]
```

> [!WARNING]
> Standard Library Version 4 becomes available from node version 1.2.0, after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature. See [Activation Protocol](/blockchain/waves-protocol/activation-protocol.md).
