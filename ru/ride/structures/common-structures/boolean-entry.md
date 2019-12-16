# BooleanEntry

> [!WARNING]
> Структура BooleanEntry представлена в [Стандартной библиотеке](/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/blockchain/blockchain-network/stage-network.md).

Структура записи логического типа [хранилища данных аккаунта](/blockchain/account/account-data-storage.md).

## Конструктор

```ride
BooleanEntry(key: String, value: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value| [Boolean](/ride/data-types/boolean.md) | Значение записи |
