# IntEntry

> [!ВНИМАНИЕ]
> Структура IntEntry представлена в [Стандартной библиотеке](/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/blockchain/blockchain-network/stage-network.md).

Структура записи целочисленного типа [хранилища данных аккаунта](/blockchain/account/account-data-storage.md).

## Конструктор

```ride
IntEntry(key: String, value: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value | [Int](/ride/data-types/int.md) | Value of a record |
