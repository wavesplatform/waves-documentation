# StringEntry

> [!ВНИМАНИЕ]
> Структура StringEntry представлена в [Стандартной библиотеке](/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/blockchain/blockchain-network/stage-network.md).

Структура записи строкового типа [хранилища данных аккаунта](/blockchain/account/account-data-storage.md).

## Конструктор

```ride
BinaryEntry(key: String, value: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value| [String](/ride/data-types/byte-vector.md) | Значение записи. Максимальный размер - 5 Кбайт |
