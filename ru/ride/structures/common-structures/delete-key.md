# DeleteKey

Удаляет запись из [хранилища данных аккаунта](/blockchain/account/account-data-storage.md) по её ключу.

## Конструктор

``` ride
DeleteKey(key: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Ключ записи |

## Пример

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
   
@Callable(inv)
func default() = {
  [ DeleteKey(inv.caller.toString()) ]
}
```
