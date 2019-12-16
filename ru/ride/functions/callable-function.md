# Вызываемая функция

**Вызываемая функция** — [функция](/ride/functions.md) [dApp-скрипта](/ride/script/script-types/dapp-script.md) с [аннотацией](/ride/functions/annotations.md) `@Callable`.

У dApp-скрипта может быть несколько вызываемых функций.

Вызываемую функцию у [dApp](/blockchain/account/dapp.md) можно вызвать с помощью [транзакции вызова скрипта](/blockchain/transaction-type/invoke-script-transaction.md).

## Пример для стандартной библиотеки версии 3

```ride
@Callable(inv)
func rate(name: String, rating: Int) = {
    WriteSet([DataEntry(inv.caller.toString(), name + rating.toString()])
}
```

## Пример для стандартной библиотеки версии 4

```ride
@Callable(inv)
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
> [Стандартная библиотека](/ride/script/standart-library.md) версии 4 доступна начиная с версии ноды 1.2.0 после активации функциональности "Ride V4 and multiple attached payments for Invoke Script Transaction" (№ 16). См. [протокол активации](/platform-features/activation-protocol.md).
