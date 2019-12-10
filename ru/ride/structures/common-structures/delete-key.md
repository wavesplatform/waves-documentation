# DeleteKey

Удаляет запись из [хранилища данных аккаунта](/blockchain/account/account-data-storage.md) по ее ключу.

> Эта возможность доступна с версии ноды 1.2. Возможность включается с активацией на ноде функциональности "Ride V4 and multiple attached payments for Invoke Script Transaction" (№16).
На данный момент версии 1.2.x доступны на [stagenet](/blockchain/blockchain-network/stage-network.md)

## Конструктор

`DeleteKey(key: String)`

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
